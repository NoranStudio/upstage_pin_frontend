import type { AnalysisReport, StockData } from "./types"

export const mockStockData: Record<string, StockData> = {
  "Korea Electric Power Corporation (KEPCO)": {
    symbol: "015760",
    price: 23450,
    change: -350,
    changePercent: -1.47,
  },
  POSCO: {
    symbol: "005490",
    price: 385000,
    change: 5500,
    changePercent: 1.45,
  },
  "Seongnam Development Co.": {
    symbol: "N/A",
    price: 0,
    change: 0,
    changePercent: 0,
  },
  "Celltrion Healthcare": {
    symbol: "091990",
    price: 67800,
    change: 2100,
    changePercent: 3.2,
  },
  "SK Group": {
    symbol: "034730",
    price: 156000,
    change: -2300,
    changePercent: -1.45,
  },
  "Local SMEs/Retail": {
    symbol: "INDEX",
    price: 100,
    change: 2.5,
    changePercent: 2.5,
  },
  "동신건설 (025950)": {
    symbol: "025950",
    price: 8920,
    change: 450,
    changePercent: 5.31,
  },
}

export const mockAnalysisData: AnalysisReport = {
  report_title: "Lee Jae-myung의 정치·경제·기업 연결성 분석",
  time_range: "2018–2025",
  influence_chains: [
    {
      politician: "Lee Jae-myung",
      policy: "None directly linked",
      industry_or_sector: "Energy/Steel",
      companies: ["Korea Electric Power Corporation (KEPCO)", "POSCO"],
      impact_description:
        "Lee Jae-myung's spouse holds stocks in KEPCO and POSCO, indicating indirect financial ties to the energy and steel sectors.",
      evidence: [
        {
          source_title: "Lee Jae-myung 2023 Financial Disclosure Report",
          url: "https://www.ethics.go.kr/disclosure/2023/lee_jae_myung.pdf",
        },
      ],
    },
    {
      politician: "Lee Jae-myung",
      policy: "Regional development projects",
      industry_or_sector: "Construction",
      companies: ["Seongnam Development Co."],
      impact_description:
        "Lee Jae-myung's brother owns a construction company that received Gyeonggi Province contracts, though no wrongdoing was proven.",
      evidence: [
        {
          source_title: "Gyeonggi Province Property Registry Database",
          url: "https://www.gg.go.kr/property/lee_family_registrations",
        },
        {
          source_title: "KFTC Investigation Summary: Seongnam Development Co.",
          url: "https://www.ftc.go.kr/case/2020/sd_co_dismissal.pdf",
        },
      ],
    },
    {
      politician: "Lee Jae-myung",
      policy: "Biotech R&D subsidies",
      industry_or_sector: "Biopharmaceuticals",
      companies: ["Celltrion Healthcare"],
      impact_description:
        "Lee Jae-myung's campaign had indirect ties to a lobbyist linked to Celltrion, coinciding with biotech stock surges after his R&D subsidy advocacy.",
      evidence: [
        {
          source_title: "Newstapa: Lee Jae-myung’s Bio-Pharma Ties",
          url: "https://www.newstapa.org/article/lee-celltrion",
        },
      ],
    },
    {
      politician: "Lee Jae-myung",
      policy: "Regional development projects",
      industry_or_sector: "Construction/Consulting",
      companies: ["SK Group"],
      impact_description:
        "Lee Jae-myung's former aide founded a consulting firm that advised SK Group on Gyeonggi Province projects.",
      evidence: [
        {
          source_title: "KBS Special Report: PolicyLink and SK Group",
          url: "https://news.kbs.co.kr/politics/policylink_2023",
        },
      ],
    },
    {
      politician: "Lee Jae-myung",
      policy: "Universal Basic Income (UBI) pilot",
      industry_or_sector: "Retail/SMEs",
      companies: ["Local SMEs/Retail"],
      impact_description:
        "Lee Jae-myung's UBI pilot in Gyeonggi Province increased local consumption and retail sales.",
      evidence: [
        {
          source_title: "(사진추가) 이재명 “기본소득은 최소한의 사회적안전망…코로나 위기로...",
          url: "https://gnews.gg.go.kr/briefing/brief_gongbo_view.do?BS_CODE=S017&number=45701",
        },
      ],
    },
    {
      politician: "Lee Jae-myung",
      policy: "Regional development projects",
      industry_or_sector: "Construction",
      companies: ["동신건설 (025950)"],
      impact_description:
        "Lee Jae-myung's regional development policies were linked to stock price increases in 동신건설, a construction firm.",
      evidence: [
        {
          source_title: "이재명 관련주, 이재명 테마주 한 장으로 알아보기",
          url: "https://jjeongddol.tistory.com/54",
        },
      ],
    },
  ],
  notes:
    "Some connections are indirect or speculative (e.g., Celltrion stock surge timing). No direct evidence of policy quid pro quo. Financial disclosures and news investigations provide partial insights but lack comprehensive corporate filings or government procurement records.",
}
