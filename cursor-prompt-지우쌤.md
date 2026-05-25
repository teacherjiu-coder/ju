# 지우쌤 컴활 1+2급 강의 판매 웹사이트 — Cursor 프롬프트

## 목표
컴활 1+2급 강의 판매용 단일 HTML 파일(`index.html`) 제작.
GitHub Pages 배포용. 외부 JS 프레임워크(React 등) 사용 금지.
순수 HTML + CSS + 바닐라 JS 한 파일로 완성.

---

## 디자인 시스템

### 컬러 토큰 (CSS variables로 선언)
```css
:root {
  --black:        #1d1d1f;
  --gray-1:       #424245;
  --gray-2:       #6e6e73;
  --gray-3:       #a1a1a6;
  --gray-4:       #d2d2d7;
  --gray-5:       #e8e8ed;
  --gray-6:       #f5f5f7;
  --white:        #ffffff;
  --accent:       #0071e3;
  --accent-hover: #0077ed;
  --radius-sm:    10px;
  --radius-md:    18px;
  --radius-lg:    28px;
}
```

### 타이포그래피
- 폰트: `Noto Sans KR` (Google Fonts, weights 300/400/500/600/700)
- 대제목: `clamp(38px, 7vw, 68px)`, weight 700, letter-spacing -0.035em
- 섹션 제목: `clamp(30px, 5.4vw, 48px)`, weight 700, letter-spacing -0.03em
- 소제목 강조(em): color `var(--gray-2)`, weight 300, font-style normal
- 본문: 17px, weight 300, line-height 1.6, color `var(--gray-2)`
- eyebrow 레이블: 13px, weight 500, color `var(--accent)`, uppercase, letter-spacing 0.05em

### 버튼
```css
/* 기본 파란 버튼 */
.btn-primary {
  background: var(--accent); color: #fff; border: 0;
  border-radius: 980px; font-size: 17px; font-weight: 500; padding: 16px 32px;
  transition: background .2s, transform .15s;
}
.btn-primary:hover { background: var(--accent-hover); transform: scale(1.02); }

/* 보조 회색 버튼 */
.btn-secondary {
  background: var(--gray-6); color: var(--black); border: 0;
  border-radius: 980px; font-size: 17px; font-weight: 500; padding: 16px 32px;
}
```

### 애니메이션
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}
```
IntersectionObserver로 섹션이 뷰포트에 들어올 때 `.visible` 클래스를 추가해 `fadeUp` 애니메이션 실행.
각 섹션·카드에 `.fade-up` 클래스를 미리 부여(opacity:0)해두고, JS로 `.visible`(opacity:1 + animation) 토글.

### 레이아웃
- 최대 너비: `860px`, 가운데 정렬
- 섹션 패딩: `padding: 100px 24px` (모바일 `72px 22px`)
- 교차 배경: 흰 섹션과 `var(--gray-6)` 섹션 교차

---

## 링크 설정 (상단에 상수로 선언)

```js
const LINKS = {
  smartstore_3mo: "TODO: 스마트스토어 3개월권 URL",
  smartstore_6mo: "TODO: 스마트스토어 6개월권 URL",
  smartstore_2grade: "TODO: 스마트스토어 2급 단과 URL",
};
```
모든 구매 버튼은 `window.open(LINKS.xxx, '_blank')` 로 새 탭 열기.

---

## 페이지 구성 (위→아래)

### 0. 상단 고정 NAV
```
[지우쌤 컴활]                    [수강신청 →]
```
- `position: fixed`, `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.85)`
- z-index: 100
- 로고: "지우쌤 컴활" 텍스트 (font-weight 600)
- 우측: "수강신청" 버튼 → `LINKS.smartstore_3mo` 새 탭
- 스크롤 시 border-bottom 나타나는 효과

---

### 1. HERO 섹션
배경: `var(--white)`, 텍스트 중앙 정렬

```
[eyebrow] 컴활 1급 · 2급 · 필기 · 실기

[h1] 컴활 1+2급,
     한 번에 끝내세요.

[lede] 강의 65강 + 교재 PDF 전권 + 기출 풀이 앱까지.
       저자가 직접 가르칩니다.

[버튼 2개]
  ● [수강신청하기]  → LINKS.smartstore_3mo 새 탭
  ○ [강의 구성 보기] → #package 앵커 스크롤

[강사 사진 자리] — 원형 placeholder, 220×220px
  background: var(--gray-6); border-radius: 50%;
  <!-- TODO: <img src="assets/jiu.jpg" alt="지우쌤"> 로 교체 -->

[chips 배지 5개]
  📺 65강 풀패키지 | 📘 교재 PDF 전권 | 📱 모바일 수강 | 💬 1:1 질문 답변 | 🎯 최신 기출 반영

[meta text] 3개월 이용권 · 즉시 수강 시작 · PC·모바일 지원
```

---

### 2. 가격 카드 3종 (price-band)
배경: `var(--gray-6)`, 그리드 `1fr 1fr 1fr` (모바일 1열)

| | 2급 단과 | **1+2급 ALL-IN-ONE** ★인기 | 1급 단과 |
|---|---|---|---|
| 이용권 | 3개월 | 3개월 | 3개월 |
| 가격 | **39,000원** | **59,000원** | **49,000원** |
| 비고 | 필기+실기(2급만) | 교재PDF+엑셀예제+기출앱Pro | 필기+실기(1급만) |
| 버튼 | [선택하기] | [수강신청] | [선택하기] |

- 가운데 카드: `border: 1.5px solid var(--black)`, 상단 뱃지 "가장 인기"
- 버튼 → 각각 `LINKS.smartstore_2grade`, `LINKS.smartstore_3mo` 새 탭

---

### 3. WHY 지우쌤 — 특징 6가지 (feature-grid)
배경: `var(--white)`
eyebrow: `Why 지우쌤`
제목: `합격까지, 가장 짧은 거리.`
설명: `대학생·직장인·재취업·공무원 준비. 시간이 없다는 게 가장 큰 적입니다. 그래서 합격에 정말 필요한 것만 골랐습니다.`

그리드 `3×2` (모바일 `2열` → `1열`):

| 아이콘 | 제목 | 설명 |
|---|---|---|
| ✍︎ | 저자 직강 | 교재를 직접 쓴 지우쌤이 직접 가르칩니다. 책과 강의가 완전히 동기화되어 흐름이 끊기지 않아요. |
| 🏆 | 수천 명 합격 | 누적 수강생 중 컴활 합격자만 수천 명. 검증된 합격 노하우만 담았습니다. |
| ⚡ | 핵심만 빠르게 | 시험에 자주 출제되는 핵심만 압축. 시간이 없는 사람도 끝낼 수 있습니다. |
| 🔄 | 최신 기출 반영 | 상시 변형 기출 문제를 매년 업데이트. 가장 최신 출제 경향을 그대로 학습합니다. |
| 💬 | 1:1 질문 답변 | 모르는 부분은 언제든 물어보세요. 지우쌤이 직접 답변해드립니다. |
| 📱 | 모바일 수강 | 버스에서, 점심시간에. 폰 하나로 어디서든 끊김 없이 시청 가능합니다. |

각 아이템에 `feature-icon` (46×46 둥근 박스 + 이모지), `feature-title`, `feature-desc` 구조.

---

### 4. 패키지 구성 (id="package")
배경: `var(--gray-6)`
eyebrow: `Package`
제목: `구성품 한눈에.`
설명: `강의 65강 + 교재 PDF 전권 + 보너스 앱까지. 따로 살 필요 없이 한 번에 끝.`

세로 카드 3개:

**① 강의 65강 풀패키지**
- 컴활 2급 필기 핵심공략 7강 + 상시기출문제 풀이
- 컴활 2급 실기 핵심공략 18강 + 기출 유형 + 최신기출 1~10회
- 컴활 1급 필기 핵심공략 10강
- 컴활 1급 실기 핵심공략 30강

**② 교재 PDF 전권 + 엑셀 예제**
- 컴활 2급 필기·실기 핵심공략 PDF
- 컴활 2급 상시기출 1~5회 / 최신기출 1~10회 / 실기 최신기출 10회 PDF
- 컴활 1급 필기·실기 핵심공략 PDF + 최신기출 PDF
- 엑셀 실습 예제 파일 전권

**③ 컴활 기출문제 풀이앱 Pro** (배경: `linear-gradient(135deg, #FFF8E7, #FFFDF5)`)
뱃지 "무료 제공"
- 2급·1급 필기 기출 1,000+ 문항 무제한 풀이
- 오답노트 자동 생성 · 약점 유형 자동 분석
- 광고 제거 + 모든 해설 강의 잠금 해제 (Pro 전용)

하단 총합 바: `background: #4e4e4e`, `color: white`
```
강의 + 교재 + 앱, 총 가치 198,000원 상당    ~~198,000원~~  59,000원
```

---

### 5. 지우쌤 vs 타사 비교표
배경: `var(--white)`
eyebrow: `Comparison`
제목: `지우쌤이 다른 이유.`

| 항목 | 지우쌤 | 타사 강의 |
|---|---|---|
| 저자 직강 | ✅ 교재 저자 직접 강의 | ❌ 위탁·외주 강사 |
| 1+2급 패키지 | ✅ 한 번에 전 레벨 | ❌ 급수별 별도 구매 |
| 교재 PDF 포함 | ✅ 전권 무료 제공 | ❌ 별도 구매 필요 |
| 기출 풀이 앱 | ✅ Pro 무료 제공 | ❌ 없거나 유료 |
| 최신 기출 반영 | ✅ 매년 업데이트 | ⚠️ 일부만 |
| 1:1 질문 답변 | ✅ 직접 답변 | ❌ 게시판 형식 |

지우쌤 열은 `var(--accent)` 강조, 헤더 행은 `var(--black)` 배경 + 흰 텍스트

---

### 6. 강의 커리큘럼
배경: `var(--gray-6)`
eyebrow: `Curriculum`
제목: `65강, 합격까지의 모든 길.`
설명: `2급으로 시작해서 1급까지. 한 패키지로 단계별 완성.`

그리드 `2×2` (모바일 1열):

**Level 1 · 컴활 2급 필기** (7강 + 상시기출)
01 컴퓨터 일반 핵심 개념 — 운영체제·인터넷·정보보안
02 스프레드시트 기본 함수 — 필수 함수 30선 압축 정리
03 데이터 입력·서식·차트 — 시험 단골 출제 영역
04 수식·기본 통계 함수 — 실무 활용도 100%
05 자주 나오는 응용 함수 — 난이도 高 문제 대비
06 데이터 관리·정렬·필터 — 체크리스트로 정리
07 실전 종합 문제풀이 — 상시기출 변형 패턴

**Level 2 · 컴활 2급 실기** (18강 + 기출 10회)
01–04 기본 작업 (입력·서식·조건부서식) — 득점 안정화 구간
05–09 계산 작업 (함수 마스터) — 실기 합격의 핵심
10–13 분석 작업 (정렬·필터·피벗) — 자주 출제되는 유형
14–18 기타 작업 (매크로·차트) — 마무리 점수 확보
BONUS 시험 자주 출제 유형 모음 — 직전 5개년 분석
BONUS 최신 기출문제 1~10회 풀이 — 실전 감각 끝내기

**Level 3 · 컴활 1급 필기** (10강)
01–02 컴퓨터 일반 심화 — 1급 난이도 대비
03–05 스프레드시트 고급 함수 — VLOOKUP·INDEX·MATCH 등
06–08 데이터베이스 일반 (Access) — 1급 추가 영역
09–10 실전 모의고사 + 해설 — 합격선 안정 확보

**Level 4 · 컴활 1급 실기** (30강)
01–06 Excel 기본 작업·서식 — 1급 실기 출제 패턴
07–15 Excel 함수·VBA·매크로 — 최고 난이도 정복
16–22 데이터 분석·시나리오·해찾기 — 1급 핵심 영역
23–28 Access 쿼리·폼·보고서 — 시험의 절반
29–30 최신 기출 1회 + 총정리 — 시험 직전 대비

하단 바: `컴활 2급 · 1급 / 필기 · 실기 전 영역 / 무제한 반복 수강 — 총 65강+ 기출 풀이 강의`

---

### 7. 합격 후기
배경: `var(--white)`
eyebrow: `Reviews`
제목: `2,481개의 진짜 후기.`

상단 평점 블록:
- 좌: 점수 **4.9**/5, ★★★★★, "총 2,481개 후기"
- 우: 별점 바 (5★ 94% / 4★ 5% / 3★ 1% / 2★ 0% / 1★ 0%)

후기 카드 4개 (그리드 `2×2`, 모바일 1열):

| 작성자 | 날짜 | 태그 | 제목 | 내용 |
|---|---|---|---|---|
| 김** | 2025.11 | 2급 합격 | 두 달 만에 한 번에 붙었어요 | 함수가 너무 어려웠는데 지우쌤 강의로 손에 익었어요. 모바일로 출퇴근 시간에 보고 주말에 기출 풀이만 했는데 합격! |
| 박** | 2025.10 | 1급 합격 | 저자 직강이라 책이랑 강의가 따로 안 놀아요 | 책 페이지랑 강의가 똑같이 흘러가서 흐름이 안 끊김. 1급 실기 30강이 진짜 핵심이었습니다. |
| 이** | 2025.09 | 2급 합격 | 재취업 준비하면서 들었는데 강추 | 핵심만 짧게 가르쳐 주셔서 시간 없는 사람한테 진짜 좋아요. 질문 답변도 진짜 빠릅니다. |
| 최** | 2025.08 | 1급 합격 | 교재 PDF + 앱이 신의 한 수 | 인쇄해서 들고 다니면서 보고, 지하철에서는 앱으로 기출 풀고. 시간 정말 효율적으로 썼습니다. |

---

### 8. 강사 소개
배경: `var(--white)`
eyebrow: `Instructor`
제목: `저자가 직접 가르치는 단 하나의 강의.`
설명: `14년의 컴활 강의 경험. 책을 쓴 사람이, 그 책을 그대로 가르칩니다.`

그리드 `280px 1fr` (모바일 1열):

**좌: 강사 사진**
```html
<!-- TODO: <img src="assets/jiu.jpg" alt="지우쌤"> 로 교체 -->
<div class="photo-placeholder">강사 사진</div>
```
원형, 280×280, background `var(--gray-6)`

**우: 소개**
- role: 대표 강사
- 이름: 지우쌤 (42px, weight 700)
- 직함: 컴활 교재 저자 · 전문 강의 14년 차

통계 3개 (가로 그리드):
- **457만+** 유튜브 누적 조회수
- **14년** 컴활 강의 경력
- **수천 명** 배출한 합격자

경력 목록:
- 🎖️ KPC 우수지도자상 수상
- 🏫 대학교 · 대기업 컴활 출강 다수
- 📺 前 SBS · 그린컴퓨터 전임 강사
- 📺 457만 뷰 유튜브 '지우쌤' 운영 중
- ✍️ 본 강의 사용 교재 직접 집필

---

### 9. FAQ
배경: `var(--gray-6)`
eyebrow: `FAQ`
제목: `자주 묻는 질문.`

아코디언 방식 (클릭 시 답변 슬라이드 토글):

**Q1. 강의 수강 기간이 어떻게 되나요?**
결제 후 3개월 무제한 수강 가능합니다. 기간 내 몇 번이든 반복 시청할 수 있어요.

**Q2. PC와 모바일 모두 수강 가능한가요?**
네, PC·태블릿·스마트폰 모두 지원합니다. 스마트스토어에서 결제 후 링크를 통해 바로 시청 가능합니다.

**Q3. 교재 PDF는 어떻게 받나요?**
결제 완료 후 제공되는 링크에서 전권 다운로드 가능합니다. 인쇄·모바일 뷰어 모두 지원합니다.

**Q4. 환불이 가능한가요?**
결제일로부터 7일 이내, 강의를 1강도 시청하지 않으신 경우 전액 환불 가능합니다. 스마트스토어 정책에 따릅니다.

---

### 10. 하단 CTA
배경: `var(--gray-6)`, 중앙 정렬, `padding: 120px 24px`
eyebrow: `마지막으로`
제목: `이번엔, 진짜 끝내세요.` (em: "진짜 끝내세요.")
설명: `지우쌤과 함께라면 컴활, 더 이상 미루지 않아도 됩니다.`

가격 표시 (알약형 흰 박스):
```
~~198,000원~~   59,000원
```

안내 3줄 카드 (아이콘 + 제목 + 설명):
- 🛒 스마트스토어에서 구매 — 결제 후 즉시 링크 제공
- ▶️ 강의 바로 시작 — PC·모바일 어디서든 수강
- 🏅 합격하면 끝 — 합격 후기 2,481개가 증명

버튼: `[지금 수강신청하기]` → `LINKS.smartstore_3mo` 새 탭

소자: `결제 즉시 수강 시작 · 3개월 무제한 · 환불 가능`

---

### 11. 푸터
배경: `var(--black)`, 색상 `rgba(255,255,255,0.55)`
```
지우쌤 컴활 | 컴활 1+2급 ALL-IN-ONE 강의
문의: TODO 이메일 또는 스마트스토어 채팅
© 2025 지우쌤. All rights reserved.
```

---

## JavaScript 기능

```js
// 1. 링크 상수
const LINKS = { ... };

// 2. IntersectionObserver — fadeUp 애니메이션
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// 3. FAQ 아코디언
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight;
    // 모두 닫기
    document.querySelectorAll('.faq-a').forEach(a => a.style.maxHeight = '');
    if (!isOpen) answer.style.maxHeight = answer.scrollHeight + 'px';
  });
});

// 4. Nav 스크롤 효과
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 10);
});

// 5. 부드러운 앵커 스크롤
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
```

---

## 반응형 브레이크포인트
```css
@media (max-width: 860px) { .ss-frame { max-width: 100%; } }
@media (max-width: 700px) { /* 2열 → 1열 전환 */ }
@media (max-width: 480px) { /* 폰트·패딩 축소 */ }
```

---

## 이미지 Placeholder 처리
모든 이미지 자리는 아래처럼 처리:
```html
<div class="img-placeholder" style="width:220px; height:220px; background:var(--gray-6);
  border-radius:50%; display:flex; align-items:center; justify-content:center;
  color:var(--gray-3); font-size:13px;">
  <!-- TODO: <img src="assets/jiu.jpg" alt="지우쌤"> -->
  강사 사진
</div>
```

---

## 최종 체크리스트
- [ ] `LINKS` 상수에 TODO 주석 표시
- [ ] 이미지 placeholder 전부 TODO 주석 처리
- [ ] IntersectionObserver fadeUp 동작 확인
- [ ] FAQ 아코디언 동작 확인
- [ ] Nav 고정 + 스크롤 효과 확인
- [ ] 모바일(375px) · 태블릿(768px) · PC(1280px) 반응형 확인
- [ ] 모든 구매 버튼 `window.open(..., '_blank')` 확인
- [ ] 단일 `index.html` 파일로 완성
