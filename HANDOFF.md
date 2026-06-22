# HANDOFF

## 1. 한 줄 요약
`teacherjiu-web`은 지우쌤 컴활 강의/상품 소개용 정적 랜딩 페이지 웹사이트다.

## 2. 핵심 폴더 / 파일 구조
- `index.html`: 실제 배포본. 대형 인라인 CSS/JS까지 모두 포함된 단일 정적 페이지.
- `app.jsx`: React 기반 상세페이지 프로토타입 엔트리.
- `sections.jsx`: React 프로토타입용 섹션 컴포넌트 모음.
- `tweaks-panel.jsx`: 프로토타입 편집용 tweak 패널 유틸.
- `cursor-prompt-지우쌤.md`: 생성/편집용 프롬프트 메모.

현재 실제 서비스는 사실상 `index.html` 중심으로 운영된다고 보면 된다.

## 3. 로컬 실행 방법
정적 서버로 확인하면 된다.

```bash
cd "/Users/jiwoo/Desktop/업무/7.cursor/teacherjiu-web"
python3 -m http.server 8001
```

브라우저에서 `http://localhost:8001`

## 4. 빌드 & 배포
별도 빌드 파이프라인이 없다. `index.html` 그대로 배포한다.

```bash
cd "/Users/jiwoo/Desktop/업무/7.cursor/teacherjiu-web"
git add .
git commit -m "..."
git push origin main
```

GitHub Pages는 `main` 브랜치 `root` 기준 배포로 보면 된다.

## 5. 페이지 운영 방식
- 메인 진입점은 `index.html`
- 해시 라우팅처럼 `#pass`를 써서 홈/패스 뷰를 전환
- 구매 버튼은 `BUY_URL` 상수로 네이버 스마트스토어로 이동
- 책 캐러셀, 상단 메뉴, 홈/패스 뷰 전환, 리뷰/가격 영역 모두 `index.html` 안의 인라인 스크립트가 담당

## 6. 현재 알려진 버그 / 미완성
- `app.jsx`, `sections.jsx`, `tweaks-panel.jsx`는 React 프로토타입 성격이 강하고, 현재 배포본인 `index.html`과 직접 연결돼 있지 않다.
- 즉, JSX 파일을 고쳐도 배포 페이지가 자동으로 바뀌지 않는다.
- 스타일/스크립트가 `index.html` 한 파일에 크게 몰려 있어 유지보수성이 낮다.
- 저장소에 `.DS_Store` 변경이 남아 있다. 커밋 전에 정리 여부를 판단하는 편이 좋다.
- `img/` 등 에셋 폴더가 이 검색 범위에서는 바로 보이지 않았기 때문에, 실제 자산 경로를 바꿀 때는 `index.html`의 `img/...` 참조를 먼저 확인해야 한다.

## 7. Git 리모트 / 배포 위치
- Git remote: `https://github.com/teacherjiu-coder/ju.git`
- 배포 URL: `https://teacherjiu-coder.github.io/ju/`
