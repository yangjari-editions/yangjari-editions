// ── 카탈로그 데이터 ──
// 새 책을 추가할 때 이 배열 맨 앞에 객체를 추가하세요.
// href:    책 상세 페이지 경로
// imgFront: 앞표지 이미지 경로 (사이트 루트 기준)
// imgBack:  뒤표지 이미지 경로 (없으면 null)
// title:   카드 아래 표시될 작품 제목
// author:  카드 아래 표시될 작가명

const CATALOG_POSTS = [
  {
    href:     "/catalog/c_002_huysmans/",
    imgFront: "images/catalog/catalogue_huysmans_001.webp",
    imgBack:  "images/catalog/catalogue_huysmans_002.webp",
    title:    "조리스카를 위스망스<br>물 흐르는 대로"
  },
  {
    href:     "/catalog/c_001_artaud/",
    imgFront: "images/catalog/catalogue_artaud_001.webp",
    imgBack:  null,
    title:    "앙토냉 아르토<br>자크 리비에르와의 서신"
  }
];
