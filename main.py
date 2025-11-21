from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import subprocess
import json

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/stock-price")
async def get_stock_price(company: str):
    """
    회사명으로 주가 정보를 크롤링합니다.
    """
    try:
        # Python 스크립트 실행
        result = subprocess.run(
            ["python", "scripts/fetch_stock_price.py", company],
            capture_output=True,
            text=True,
            timeout=15
        )
        
        if result.returncode != 0:
            return {
                "success": False,
                "error": "검색 도중 에러가 났습니다"
            }
        
        # JSON 파싱
        data = json.loads(result.stdout)
        return data
        
    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "error": "검색 시간 초과"
        }
    except Exception as e:
        return {
            "success": False,
            "error": f"검색 도중 에러가 났습니다: {str(e)}"
        }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
