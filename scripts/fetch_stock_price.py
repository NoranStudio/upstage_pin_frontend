import requests
from bs4 import BeautifulSoup
import sys
import json


def get_stock_info(company_name: str) -> dict:
    """
    네이버 검색에서 주가 정보를 크롤링합니다.
    
    Returns:
        dict: {
            "success": bool,
            "price": str,
            "change": str,
            "change_percent": str,
            "direction": "up" | "down",
            "error": str (optional)
        }
    """
    url = "https://search.naver.com/search.naver"
    params = {
        "where": "nexearch",
        "sm": "tab_hty.top",
        "ssc": "tab.nx.all",
        "query": f"{company_name} 주가",
    }
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        )
    }

    try:
        res = requests.get(url, params=params, headers=headers, timeout=10)
        res.raise_for_status()

        soup = BeautifulSoup(res.text, "html.parser")

        # .spt_con.dw 또는 .spt_con.up 중 첫 번째
        block = soup.select_one(".spt_con.dw, .spt_con.up")
        if not block:
            return {
                "success": False,
                "error": "데이터를 찾지 못했습니다."
            }

        # 텍스트 파싱: "지수 476 전일대비 상승 1 (+0.21%)"
        text = " ".join(block.stripped_strings)
        
        # 방향 판단 (상승/하락)
        direction = "up" if "상승" in text else "down"
        
        # 파싱 로직
        parts = text.split()
        price = ""
        change = ""
        change_percent = ""
        
        for i, part in enumerate(parts):
            if part == "지수" and i + 1 < len(parts):
                price = parts[i + 1]
            elif part in ["상승", "하락"] and i + 1 < len(parts):
                change = parts[i + 1]
            elif "(" in part and "%" in part:
                change_percent = part.strip("()")
        
        return {
            "success": True,
            "price": price,
            "change": change,
            "change_percent": change_percent,
            "direction": direction
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": f"검색 도중 에러가 났습니다: {str(e)}"
        }


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"success": False, "error": "회사명을 입력해주세요."}))
        sys.exit(1)
    
    company_name = sys.argv[1]
    result = get_stock_info(company_name)
    print(json.dumps(result, ensure_ascii=False))
