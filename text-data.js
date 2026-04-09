// ── 텍스트 포스트 데이터 ──
// 새 포스트를 추가할 때 이 배열 맨 앞에 객체를 추가하세요.
// href:      포스트 상세 페이지 경로
// img:       썸네일 이미지 경로 (사이트 루트 기준)
// alt:       이미지 alt 텍스트
// title:     포스트 제목
// translator: 번역자 (없으면 null)
// date:      날짜 문자열
// desc:      설명 텍스트

const TEXT_POSTS = [
  {
    href:       "/text/gb_01/",
    img:        "images/text/260320_gb_01/17227368886.jpg",
    alt:        "— 서문",
    title:      "— 서문",
    author:     "쥘 바르베 도르비이",
    translator: "표은선 번역",
    date:       "2026년 4월 5일",
    desc:       "『댄디즘과 조지 브러멀(Du Dandysme et de Georges Brummell)』의 제2판 서문"
  },
  {
    href:       "/text/dialogue-petite-edition/",
    img:        "images/text/260328_dialogue-petite-edition/text_03_01_main.webp",
    alt:        "— 소규모 출판에 관한 대화",
    title:      "— 소규모 출판에 관한 대화",
    author:     "브뤼노 루아",
    translator: "표은선 번역",
    date:       "2026년 3월 28일",
    desc:       "파타 모르가나 출판사(Éditions Fata Morgana)의 설립자 브뤼노 루아와 작가 베르나르 노엘의 대화"
  },
  {
    href:       "/text/huysmans-interview/",
    img:        "images/text/260315_huysmans-interview/text_02_main.webp",
    alt:        "— 인터뷰",
    title:      "— 인터뷰",
    author:     "조리스카를 위스망스",
    translator: "표은선 번역",
    date:       "2026년 3월 15일",
    desc:       "인터뷰, 『오늘의 사람들(Les hommes d'aujourd'hui)』, N°263, 1886년"
  },
  {
    href:       "/text/flaubert_lc/",
    img:        "images/text/260404_flaubert_lc/text_04_main_0.webp",
    alt:        "— 편지",
    title:      "— 편지",
    author:     "귀스타브 플로베르",
    translator: "표은선 번역",
    date:       "2026년 4월 4일",
    desc:       "루이즈 콜레에게 보내는 귀스타브 플로베르의 편지"
  }
];
