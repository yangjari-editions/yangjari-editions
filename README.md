# 양자리출판사

정적 웹사이트 소스입니다. 홈페이지는 `index.html`입니다.

| 폴더 | 내용 |
| --- | --- |
| `text/`, `sound/`, `catalog/`, `journal/` | 분야별 목록과 글 |
| `scrap/`, `search/` | 스크랩과 검색 |
| `data/` | 글 목록, 달력, 인용문 데이터 |
| `assets/css/`, `assets/js/` | 공통 스타일과 스크립트 |
| `images/`, `audio/`, `fonts/` | 이미지, 음원, 글꼴 |
| `tools/` | 글·목록·인용문 생성기 |

## 글 추가

`tools/`의 해당 생성기를 열고 사이트 최상위 폴더를 선택합니다.
생성기는 본문과 `data/`의 목록 파일을 함께 갱신합니다.
저널은 `tools/new-journal.html`에서 작성합니다.

## 파일 관리

글 본문은 분야별 폴더의 `글이름/index.html`에서 관리합니다.
예전 주소용 중복 폴더와 `.html` 이동 파일은 제거했습니다.
`CNAME`, `robots.txt`, `sitemap.xml`, 네이버 확인 파일은 도메인과 검색 노출 설정입니다.
