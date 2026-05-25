// sections.jsx — 지우쌤 컴활 1+2급 ALL-IN-ONE 스마트스토어 상세페이지
// 톤: Apple-style 미니멀 (#1d1d1f / #f5f5f7 / #0071e3 / Noto Sans KR)

const ssStyles = `
  /* === Design tokens (Apple-inspired) === */
  :root{
    --black:#1d1d1f;
    --gray-1:#424245;
    --gray-2:#6e6e73;
    --gray-3:#a1a1a6;
    --gray-4:#d2d2d7;
    --gray-5:#e8e8ed;
    --gray-6:#f5f5f7;
    --white:#ffffff;
    --accent:#0071e3;
    --accent-hover:#0077ed;
    --radius-sm:10px;
    --radius-md:18px;
    --radius-lg:28px;
  }

  body{ font-family:'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif !important; color: var(--black); }
  .ss-frame{ background: var(--white); }

  /* Entry animations */
  @keyframes fadeUp { from{ opacity:0; transform: translateY(16px); } to{ opacity:1; transform:none; } }
  .anim{ opacity:0; animation: fadeUp .7s ease forwards; }
  .a-1{ animation-delay:.05s } .a-2{ animation-delay:.15s } .a-3{ animation-delay:.25s }
  .a-4{ animation-delay:.35s } .a-5{ animation-delay:.45s }

  .num-tab{ font-variant-numeric: tabular-nums; }

  /* ====================================================================
     SECTION FRAMING
     ==================================================================== */
  .section{ padding:100px 24px; }
  .section.alt{ background: var(--gray-6); }
  .section .inner{ max-width: 820px; margin: 0 auto; }
  .eyebrow{
    font-size:13px; font-weight:500; color: var(--accent);
    letter-spacing:.05em; text-transform: uppercase; margin-bottom:14px;
  }
  .stitle{
    font-size: clamp(30px, 5.4vw, 48px); font-weight:700; line-height:1.1;
    letter-spacing:-0.03em; margin-bottom:18px; color: var(--black);
  }
  .stitle em{ font-style:normal; color: var(--gray-2); font-weight:300; }
  .ssub{
    font-size:17px; color: var(--gray-2); font-weight:300; line-height:1.6;
    max-width:560px; margin-bottom:56px;
  }
  @media (max-width: 600px){
    .section{ padding:72px 22px; }
    .ssub{ font-size:15px; margin-bottom:40px; }
  }

  /* ====================================================================
     HERO — centered, Apple style
     ==================================================================== */
  .hero{
    text-align: center; padding: 100px 24px 80px; background: var(--white);
    position:relative; overflow:hidden;
  }
  .hero .e{ display:inline-block; font-size:13px; font-weight:500; color: var(--accent); letter-spacing:.05em; text-transform: uppercase; margin-bottom:22px; }
  .hero h1{
    font-size: clamp(38px, 7vw, 68px); font-weight:700; line-height:1.08;
    letter-spacing:-0.035em; color: var(--black); margin: 0 auto 22px; max-width: 760px;
  }
  .hero h1 em{ font-style:normal; color: var(--gray-2); font-weight:300; }
  .hero .lede{
    font-size:19px; color: var(--gray-2); font-weight:300; line-height:1.65;
    max-width:600px; margin: 0 auto 42px;
  }
  .hero .actions{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
  .btn-primary{
    background: var(--accent); color: var(--white); border:0;
    border-radius:980px; font-size:17px; font-weight:500; padding:16px 32px;
    cursor:pointer; font-family:inherit; text-decoration:none; display:inline-block;
    transition: background .2s, transform .15s;
  }
  .btn-primary:hover{ background: var(--accent-hover); transform: scale(1.02); }
  .btn-secondary{
    background: var(--gray-6); color: var(--black); border:0;
    border-radius:980px; font-size:17px; font-weight:500; padding:16px 32px;
    cursor:pointer; font-family:inherit; text-decoration:none; display:inline-block;
    transition: background .2s, transform .15s;
  }
  .btn-secondary:hover{ background: var(--gray-5); transform: scale(1.02); }
  .hero .meta{
    margin-top: 32px; font-size:13px; color: var(--gray-3);
  }

  .hero .char{
    margin: 56px auto 0; width: 220px; aspect-ratio: 1/1;
    background: var(--gray-6); border-radius: 50%;
    display:flex; align-items:flex-end; justify-content:center; overflow:hidden;
    position:relative;
  }
  .hero .char img{ width: 92%; }
  .hero .chips{
    display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:36px;
  }
  .hero .chips span{
    font-size:13px; font-weight:500; color: var(--gray-1);
    padding:9px 16px; border-radius:980px; background: var(--gray-6);
  }

  /* ====================================================================
     PRICE BAND (after hero) — Apple style price grid w/ featured
     ==================================================================== */
  .price-band{ background: var(--gray-6); padding: 64px 24px; }
  .price-grid{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap:14px; max-width:820px; margin: 0 auto; }
  @media (max-width: 700px){ .price-grid{ grid-template-columns: 1fr; } }
  .price-card{
    background: var(--white); border-radius: var(--radius-md); padding: 36px 28px 32px;
    text-align: center; border:1px solid var(--gray-5); position:relative;
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .price-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,.06); }
  .price-card.featured{ border: 1.5px solid var(--black); }
  .featured-badge{
    position:absolute; top:-13px; left:50%; transform: translateX(-50%);
    background: var(--black); color: var(--white); font-size:12px; font-weight:500;
    padding:5px 14px; border-radius:20px; white-space:nowrap;
  }
  .price-plan{ font-size:13px; color: var(--gray-2); font-weight:500; margin-bottom:4px; }
  .price-duration{ font-size:13px; color: var(--gray-3); margin-bottom:18px; }
  .price-amount{ font-size:36px; font-weight:700; letter-spacing:-0.02em; margin-bottom:4px; color: var(--black); }
  .price-amount .won{ font-size:18px; font-weight:500; margin-left:2px; }
  .price-note{ font-size:12px; color: var(--gray-3); margin-bottom:20px; }
  .price-card .pick{
    display:inline-block; padding:10px 22px; background: var(--accent); color: var(--white);
    border-radius:980px; font-size:13px; font-weight:500; text-decoration:none;
    transition: background .2s;
  }
  .price-card .pick:hover{ background: var(--accent-hover); }
  .price-card.featured .pick{ background: var(--black); }

  /* ====================================================================
     FEATURE GRID — Apple grid, 2px gap on light bg
     ==================================================================== */
  .feature-grid{
    display:grid; grid-template-columns: repeat(3, 1fr); gap:2px;
    background: var(--gray-5); border-radius: var(--radius-md); overflow:hidden;
  }
  @media (max-width: 700px){ .feature-grid{ grid-template-columns: 1fr 1fr; } }
  @media (max-width: 480px){ .feature-grid{ grid-template-columns: 1fr; } }
  .feature-item{
    background: var(--white); padding: 40px 28px; transition: background .2s;
  }
  .feature-item:hover{ background: var(--gray-6); }
  .feature-icon{
    width:46px; height:46px; background: var(--gray-6); border-radius:12px;
    display:flex; align-items:center; justify-content:center; margin-bottom:22px;
    font-size:20px; color: var(--accent);
  }
  .feature-title{ font-size:17px; font-weight:500; margin-bottom:8px; color: var(--black); letter-spacing:-0.01em; }
  .feature-desc{ font-size:14px; color: var(--gray-2); line-height:1.55; font-weight:300; }

  /* ====================================================================
     COMPOSITION — strong featured cards
     ==================================================================== */
  .comp-list{ display:flex; flex-direction:column; gap:14px; }
  .comp{
    background: var(--white); border:1px solid var(--gray-5); border-radius: var(--radius-md);
    padding: 36px 36px; transition: transform .25s ease, box-shadow .25s ease;
  }
  .comp:hover{ transform: translateY(-2px); box-shadow: 0 16px 40px rgba(0,0,0,.06); }
  .comp .head{ display:flex; gap:14px; align-items:center; margin-bottom:22px; }
  .comp .num{
    width:38px; height:38px; border-radius:50%; background: var(--gray-6);
    color: var(--black); display:flex; align-items:center; justify-content:center;
    font-size:14px; font-weight:600;
  }
  .comp .tag{ font-size:11px; font-weight:500; color: var(--gray-3); letter-spacing:.08em; text-transform:uppercase; }
  .comp h3{ font-size:24px; font-weight:600; margin:0 0 6px; letter-spacing:-0.02em; color: var(--black); }
  .comp .meta{ font-size:14px; color: var(--gray-2); font-weight:300; margin: 0 0 24px; }
  .comp ul{ list-style:none; padding:0; margin:0; display:grid; grid-template-columns: 1fr 1fr; gap:10px 28px; }
  .comp ul.single{ grid-template-columns: 1fr; }
  .comp li{
    font-size:14px; color: var(--gray-1); padding-left:22px; position:relative; line-height:1.6;
  }
  .comp li::before{
    content:""; position:absolute; left:0; top:7px; width:11px; height:6px;
    border-left:2px solid var(--accent); border-bottom:2px solid var(--accent);
    transform: rotate(-45deg);
  }
  .comp li b{ font-weight:600; color: var(--black); }
  .comp.bonus{
    background: linear-gradient(135deg, #FFF8E7, #FFFDF5);
    border-color: #F2E4B0;
  }
  .comp.bonus .num{ background: #F4C544; color: var(--black); }
  .comp.bonus .badge-free{
    display:inline-block; background: #1d1d1f; color:#fff;
    font-size:11px; padding:3px 9px; border-radius:6px;
    margin-left:8px; vertical-align:3px; font-weight:500;
  }
  @media (max-width: 600px){
    .comp{ padding:28px 24px; }
    .comp ul{ grid-template-columns: 1fr; }
    .comp h3{ font-size:20px; }
  }

  .comp-total{
    margin-top:22px; padding: 28px 32px;
    background: var(--black); color: var(--white); border-radius: var(--radius-md);
    display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap;
  }
  .comp-total .l{ font-size:14px; color: rgba(255,255,255,.55); font-weight:300; }
  .comp-total .r{ display:flex; align-items:baseline; gap:10px; }
  .comp-total .ago{ font-size:14px; color: rgba(255,255,255,.4); text-decoration: line-through; }
  .comp-total .now{ font-size:32px; font-weight:700; letter-spacing:-0.025em; }
  .comp-total .won{ font-size:16px; }

  /* ====================================================================
     INSTRUCTOR
     ==================================================================== */
  .ins-grid{ display:grid; grid-template-columns: 280px 1fr; gap: 56px; align-items: start; }
  .ins .ph{
    aspect-ratio: 1/1; background: var(--gray-6); border-radius:50%;
    display:flex; align-items:flex-end; justify-content:center; overflow:hidden;
  }
  .ins .ph img{ width: 92%; }
  .ins .role{ font-size:13px; color: var(--accent); font-weight:500; letter-spacing:.05em; text-transform:uppercase; margin-bottom:12px; }
  .ins h3{ font-size:42px; font-weight:700; letter-spacing:-0.03em; margin: 0 0 6px; color: var(--black); }
  .ins .sub{ font-size:17px; color: var(--gray-2); font-weight:300; margin: 0 0 36px; }
  .ins .stats{ display:grid; grid-template-columns: repeat(3,1fr); gap:2px; background: var(--gray-5); border-radius: var(--radius-sm); overflow:hidden; margin-bottom:32px; }
  .ins .stats .s{ background: var(--white); padding: 22px 18px; text-align:center; }
  .ins .stats b{ display:block; font-size:24px; font-weight:600; letter-spacing:-0.02em; color: var(--black); }
  .ins .stats span{ display:block; margin-top:6px; font-size:12px; color: var(--gray-2); font-weight:300; }
  .ins .creds{ display:flex; flex-direction:column; gap:12px; }
  .ins .creds div{ display:flex; gap:14px; align-items:flex-start; font-size:15px; color: var(--gray-1); line-height:1.55; font-weight:300; }
  .ins .creds .emoji{ flex-shrink:0; width:22px; font-size:16px; }
  @media (max-width: 700px){
    .ins-grid{ grid-template-columns: 1fr; gap:36px; }
    .ins .ph{ max-width: 200px; margin: 0 auto; }
    .ins h3{ font-size:32px; text-align:center; }
    .ins .sub{ text-align:center; }
  }

  /* ====================================================================
     CURRICULUM — clean numbered tracks
     ==================================================================== */
  .crr-grid{ display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
  .crr{
    background: var(--white); border:1px solid var(--gray-5); border-radius: var(--radius-md);
    padding: 32px; transition: transform .25s ease, box-shadow .25s ease;
  }
  .crr:hover{ transform: translateY(-2px); box-shadow: 0 16px 40px rgba(0,0,0,.05); }
  .crr .head{ display:flex; justify-content:space-between; align-items:flex-end; gap:14px; margin-bottom:24px; }
  .crr .lev{ font-size:12px; color: var(--gray-3); font-weight:500; letter-spacing:.04em; text-transform:uppercase; margin-bottom:4px; }
  .crr h4{ font-size:22px; font-weight:600; letter-spacing:-0.02em; color: var(--black); margin:0; }
  .crr .badge{
    background: var(--gray-6); color: var(--black); font-size:12px; font-weight:500;
    padding:6px 12px; border-radius:980px; white-space:nowrap;
  }
  .crr ul{ list-style:none; padding:0; margin:0; }
  .crr li{
    display:flex; gap:14px; align-items:flex-start;
    padding:14px 0; border-top:1px solid var(--gray-5); font-size:14px;
  }
  .crr li:first-child{ border-top:0; padding-top:4px; }
  .crr li .n{ flex-shrink:0; width:42px; font-size:12px; font-weight:500; color: var(--accent); padding-top:2px; }
  .crr li .t{ flex:1; color: var(--black); line-height:1.5; font-weight:500; }
  .crr li .t .meta{ display:block; font-size:13px; color: var(--gray-2); margin-top:2px; font-weight:300; }
  @media (max-width: 700px){ .crr-grid{ grid-template-columns: 1fr; } }

  .crr-total{
    margin-top:22px; padding: 24px 32px;
    background: var(--gray-6); border-radius: var(--radius-md);
    display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap;
  }
  .crr-total .l{ font-size:14px; color: var(--gray-2); font-weight:300; }
  .crr-total .r{ font-size:17px; font-weight:500; color: var(--black); }
  .crr-total .r b{ font-weight:700; color: var(--accent); }

  /* ====================================================================
     REVIEWS
     ==================================================================== */
  .rv-top{
    display:grid; grid-template-columns: auto 1fr; gap:48px; align-items:center;
    padding: 40px; background: var(--white); border: 1px solid var(--gray-5);
    border-radius: var(--radius-md); margin-bottom:14px;
  }
  .rv-top .score-block{ text-align:center; }
  .rv-top .score{ font-size:64px; font-weight:700; color: var(--black); letter-spacing:-0.04em; line-height:1; }
  .rv-top .score .o{ color: var(--gray-3); font-weight:300; }
  .rv-top .stars{ color:#FFB422; letter-spacing:3px; font-size:16px; margin-top:8px; }
  .rv-top .meta{ font-size:13px; color: var(--gray-2); margin-top:6px; font-weight:300; }
  .rv-top .bars{ display:flex; flex-direction:column; gap:8px; }
  .rv-top .bars .b{ display:grid; grid-template-columns: 24px 1fr 36px; gap:14px; align-items:center; font-size:12px; color: var(--gray-2); font-weight:300; }
  .rv-top .bars .b .bar{ height:6px; background: var(--gray-5); border-radius:99px; overflow:hidden; }
  .rv-top .bars .b .fill{ height:100%; background: var(--accent); border-radius:99px; }

  .rv-grid{ display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
  .rv{
    background: var(--white); border:1px solid var(--gray-5); border-radius: var(--radius-md);
    padding:28px 30px;
  }
  .rv .who{ display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; font-size:12px; color: var(--gray-2); font-weight:300; }
  .rv .who .tag{ background: var(--black); color:#fff; padding:3px 10px; border-radius:980px; font-weight:500; font-size:11px; }
  .rv .stars{ color:#FFB422; letter-spacing:2px; font-size:13px; margin-bottom:10px; }
  .rv h5{ font-size:16px; font-weight:600; margin:0 0 10px; color: var(--black); letter-spacing:-0.01em; }
  .rv p{ font-size:14px; color: var(--gray-1); margin:0; line-height:1.65; font-weight:300; }
  @media (max-width: 700px){
    .rv-top{ grid-template-columns: 1fr; gap:32px; padding:32px 24px; }
    .rv-grid{ grid-template-columns: 1fr; }
  }

  /* ====================================================================
     FINAL CTA — light ivory tone (no buttons, guide-text instead)
     ==================================================================== */
  .fcta{
    text-align:center; padding: 120px 24px;
    background: var(--gray-6); color: var(--black);
    border-top: 1px solid var(--gray-5);
  }
  .fcta-eyebrow{
    display:inline-block; font-size:13px; font-weight:500; color: var(--accent);
    letter-spacing:.06em; text-transform: uppercase; margin-bottom:18px;
  }
  .fcta h2{
    font-size: clamp(32px, 5vw, 52px); font-weight:700; letter-spacing:-0.03em;
    line-height:1.15; margin: 0 0 16px; color: var(--black);
  }
  .fcta h2 em{ font-style:normal; color: var(--gray-2); font-weight:300; }
  .fcta p{ font-size:18px; color: var(--gray-2); font-weight:300; margin: 0 0 32px; }
  .fcta-price{
    display:inline-flex; align-items:baseline; gap:12px;
    padding: 18px 32px; background: var(--white); border-radius: 980px;
    border: 1px solid var(--gray-5); margin-bottom: 40px;
  }
  .fcta-price .ago{ font-size:15px; color: var(--gray-3); text-decoration: line-through; }
  .fcta-price .now{ font-size:32px; font-weight:700; color: var(--black); letter-spacing:-0.02em; }
  .fcta-price .won-x{ font-size:16px; font-weight:500; color: var(--black); }
  .fcta-guide{
    max-width:540px; margin: 0 auto;
    display:flex; flex-direction:column; gap:14px;
  }
  .fcta-guide .g{
    display:flex; gap:18px; align-items:center; text-align:left;
    background: var(--white); border: 1px solid var(--gray-5);
    border-radius: 14px; padding: 20px 24px;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .fcta-guide .g:hover{ transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,.05); }
  .fcta-guide .ic{
    flex-shrink:0; width:44px; height:44px; border-radius:50%;
    background: var(--gray-6); display:flex; align-items:center; justify-content:center;
    font-size:22px;
  }
  .fcta-guide .g b{ display:block; font-size:15px; font-weight:600; color: var(--black); margin-bottom:4px; letter-spacing:-0.01em; }
  .fcta-guide .g span{ display:block; font-size:14px; color: var(--gray-2); font-weight:300; line-height:1.5; }
  .fcta-guide .g strong{ color: var(--accent); font-weight:600; }
  .fcta .small{ margin-top:32px; font-size:13px; color: var(--gray-3); font-weight:300; }

  /* ====================================================================
     STICKY BAR
     ==================================================================== */
  .sticky{
    position: sticky; bottom:0; left:0; right:0; z-index:50;
    background: rgba(255,255,255,.85);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-top: 0.5px solid var(--gray-4);
    padding: 14px 22px;
    display:flex; align-items:center; gap:12px;
  }
  .sticky .info{ flex:1; }
  .sticky .info .t{ font-size:12px; color: var(--gray-2); font-weight:300; }
  .sticky .info .p{ font-size:18px; font-weight:600; color: var(--black); letter-spacing:-0.01em; }
  .sticky button{
    padding:12px 22px; font-weight:500; font-size:13px; border-radius:980px; border:0; cursor:pointer;
    font-family: inherit;
  }
  .sticky .b1{ background: var(--gray-6); color: var(--black); }
  .sticky .b2{ background: var(--accent); color:#fff; }
  .sticky .b2:hover{ background: var(--accent-hover); }
`;

const won = (n) => new Intl.NumberFormat('ko-KR').format(n);

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ t }) {
  return (
    <section className="hero">
      <div className="e anim a-1">컴활 1+2급 ALL-IN-ONE</div>
      <h1 className="anim a-2">
        합격, <em>가장 빠른 길.</em>
      </h1>
      <p className="lede anim a-3">
        교재를 직접 쓴 지우쌤이 처음부터 끝까지.<br />
        강의 65강 + 교재 PDF 전권 + 기출 풀이 앱까지.
      </p>
      <div className="char anim a-4">
        <img src="assets/jiu-character.jpg" alt="지우쌤" />
      </div>
      <div className="chips anim a-5">
        <span>📺 65강 풀패키지</span>
        <span>📘 교재 PDF 전권</span>
        <span>📱 모바일 수강</span>
        <span>💬 1:1 질문 답변</span>
        <span>🎯 최신 기출 반영</span>
      </div>
      <div className="meta anim a-5">3개월 이용권 · 즉시 수강 시작 · PC·모바일 지원</div>
    </section>);

}

// ── PRICE BAND ───────────────────────────────────────────────────────────────
function PriceBand({ t }) {
  return (
    <section className="price-band" id="buy">
      <div className="price-grid">
        <div className="price-card">
          <div className="price-plan">2급 단과</div>
          <div className="price-duration">3개월 이용권</div>
          <div className="price-amount">39,000<span className="won">원</span></div>
          <div className="price-note">필기 + 실기 (2급만)</div>
        </div>
        <div className="price-card featured">
          <div className="featured-badge">가장 인기</div>
          <div className="price-plan">1+2급 ALL-IN-ONE</div>
          <div className="price-duration">3개월 이용권</div>
          <div className="price-amount">{won(t.salePrice)}<span className="won">원</span></div>
          <div className="price-note">교재 PDF + 엑셀 예제 + 기출 앱 Pro</div>
        </div>
        <div className="price-card">
          <div className="price-plan">1급 단과</div>
          <div className="price-duration">3개월 이용권</div>
          <div className="price-amount">49,000<span className="won">원</span></div>
          <div className="price-note">필기 + 실기 (1급만)</div>
        </div>
      </div>
    </section>);

}

// ── FEATURES ─────────────────────────────────────────────────────────────────
function Features() {
  const items = [
  { ic: '✍︎', t: '저자 직강', d: '교재를 직접 쓴 지우쌤이 직접 가르칩니다. 책과 강의가 완전히 동기화되어 흐름이 끊기지 않아요.' },
  { ic: '🏆', t: '수천 명 합격', d: '누적 수강생 중 컴활 합격자만 수천 명. 검증된 합격 노하우만 담았습니다.' },
  { ic: '⚡', t: '핵심만 빠르게', d: '시험에 자주 출제되는 핵심만 압축. 시간이 없는 사람도 끝낼 수 있습니다.' },
  { ic: '🔄', t: '최신 기출 반영', d: '상시 변형 기출 문제를 매년 업데이트. 가장 최신 출제 경향을 그대로 학습합니다.' },
  { ic: '💬', t: '1:1 질문 답변', d: '모르는 부분은 언제든 물어보세요. 지우쌤이 직접 답변해드립니다.' },
  { ic: '📱', t: '모바일 수강', d: '버스에서, 점심시간에. 폰 하나로 어디서든 끊김 없이 시청 가능합니다.' }];

  return (
    <section className="section">
      <div className="inner">
        <div className="eyebrow">Why 지우쌤</div>
        <h2 className="stitle">합격까지, <em>가장 짧은 거리.</em></h2>
        <p className="ssub">대학생·직장인·재취업·공무원 준비. 시간이 없다는 게 가장 큰 적입니다. 그래서 합격에 정말 필요한 것만 골랐습니다.</p>
        <div className="feature-grid">
          {items.map((x, i) =>
          <div className="feature-item" key={i}>
              <div className="feature-icon">{x.ic}</div>
              <div className="feature-title">{x.t}</div>
              <div className="feature-desc">{x.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── COMPOSITION ──────────────────────────────────────────────────────────────
function Composition({ t }) {
  return (
    <section className="section alt" id="package">
      <div className="inner">
        <div className="eyebrow">Package</div>
        <h2 className="stitle">구성품 <em>한눈에.</em></h2>
        <p className="ssub">강의 65강 + 교재 PDF 전권 + 보너스 앱까지. 따로 살 필요 없이 한 번에 끝.</p>

        <div className="comp-list">
          <div className="comp">
            <div className="head">
              <div className="num">1</div>
              <div className="tag">Part 1 · 강의</div>
            </div>
            <h3>강의 65강 풀패키지</h3>
            <p className="meta">컴활 1급 + 2급 / 필기 + 실기 / 3개월 무제한 수강</p>
            <ul>
              <li>컴활 2급 필기 핵심공략 <b>7강</b> + 상시기출문제 풀이</li>
              <li>컴활 2급 실기 핵심공략 <b>18강</b> + 기출 유형 + 최신기출 1~10회</li>
              <li>컴활 1급 필기 핵심공략 <b>10강</b></li>
              <li>컴활 1급 실기 핵심공략 <b>30강</b></li>
            </ul>
          </div>

          <div className="comp">
            <div className="head">
              <div className="num">2</div>
              <div className="tag">Part 2 · 교재</div>
            </div>
            <h3>교재 PDF 전권 + 엑셀 예제</h3>
            <p className="meta">인쇄 / 모바일 뷰어 모두 지원 · 손에 들고 학습 가능</p>
            <ul>
              <li>컴활 2급 필기 핵심공략 PDF</li>
              <li>컴활 2급 상시기출문제 1~5회 PDF</li>
              <li>컴활 2급 최신기출문제 1~10회 PDF</li>
              <li>컴활 2급 실기 핵심공략 PDF</li>
              <li>컴활 2급 실기 최신기출 10회 PDF</li>
              <li>컴활 1급 필기 핵심공략 PDF</li>
              <li>컴활 1급 필기 최신기출 1~2회 PDF</li>
              <li>컴활 1급 실기 핵심공략 PDF</li>
              <li>컴활 1급 실기 최신기출 1회 PDF</li>
              <li>엑셀 실습 예제 파일 전권</li>
            </ul>
          </div>

          <div className="comp bonus">
            <div className="head">
              <div className="num">3</div>
              <div className="tag">Bonus · 앱</div>
            </div>
            <h3>컴활 기출문제 풀이앱 Pro <span className="badge-free">무료 제공</span></h3>
            <p className="meta">스마트폰만 있으면 언제든 풀 수 있는 모바일 기출 앱</p>
            <ul className="single">
              <li>2급·1급 필기 기출 <b>1,000+ 문항</b> 무제한 풀이</li>
              <li>오답 노트 자동 생성 · 약점 유형 자동 분석</li>
              <li>광고 제거 + 모든 해설 강의 잠금 해제 (Pro 전용)</li>
            </ul>
          </div>
        </div>

        <div className="comp-total" style={{ backgroundColor: "rgb(78, 78, 78)" }}>
          <div className="l">강의 + 교재 + 앱, 총 가치 198,000원 상당</div>
          <div className="r">
            <span className="ago">198,000원</span>
            <span className="now">{won(t.salePrice)}</span>
            <span className="won">원</span>
          </div>
        </div>
      </div>
    </section>);

}

// ── INSTRUCTOR ──────────────────────────────────────────────────────────────
function Instructor() {
  return (
    <section className="section ins">
      <div className="inner">
        <div className="eyebrow">Instructor</div>
        <h2 className="stitle">저자가 직접 가르치는<br /><em>단 하나의 강의.</em></h2>
        <p className="ssub">14년의 컴활 강의 경험. 책을 쓴 사람이, 그 책을 그대로 가르칩니다.</p>

        <div className="ins-grid">
          <div className="ph">
            <img src="assets/jiu-character.jpg" alt="지우쌤" />
          </div>
          <div>
            <div className="role">대표 강사</div>
            <h3>지우쌤</h3>
            <div className="sub">컴활 교재 저자 · 전문 강의 14년 차</div>

            <div className="stats">
              <div className="s"><b>457만+</b><span>유튜브 누적 조회수</span></div>
              <div className="s"><b>14년</b><span>컴활 강의 경력</span></div>
              <div className="s"><b>수천 명</b><span>배출한 합격자</span></div>
            </div>

            <div className="creds">
              <div><span className="emoji">🎖️</span>KPC 우수지도자상 수상</div>
              <div><span className="emoji">🏫</span>대학교 · 대기업 컴활 출강 다수</div>
              <div><span className="emoji">📺</span>前 SBS · 그린컴퓨터 전임 강사</div>
              <div><span className="emoji">📖</span>457만 뷰 유튜브 '지우쌤' 운영 중</div>
              <div><span className="emoji">✍️</span>본 강의 사용 교재 직접 집필</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ── CURRICULUM ──────────────────────────────────────────────────────────────
function Curriculum() {
  const tracks = [
  {
    lev: 'Level 1 · 컴활 2급', title: '필기 핵심공략', badge: '7강 + 상시기출',
    list: [
    ['01', '컴퓨터 일반 핵심 개념', '운영체제·인터넷·정보보안'],
    ['02', '스프레드시트 기본 함수', '필수 함수 30선 압축 정리'],
    ['03', '데이터 입력·서식·차트', '시험 단골 출제 영역'],
    ['04', '수식·기본 통계 함수', '실무 활용도 100%'],
    ['05', '자주 나오는 응용 함수', '난이도 高 문제 대비'],
    ['06', '데이터 관리·정렬·필터', '체크리스트로 정리'],
    ['07', '실전 종합 문제풀이', '상시기출 변형 패턴']]

  },
  {
    lev: 'Level 2 · 컴활 2급', title: '실기 핵심공략', badge: '18강 + 기출 10회',
    list: [
    ['01–04', '기본 작업 (입력·서식·조건부서식)', '득점 안정화 구간'],
    ['05–09', '계산 작업 (함수 마스터)', '실기 합격의 핵심'],
    ['10–13', '분석 작업 (정렬·필터·피벗)', '자주 출제되는 유형'],
    ['14–18', '기타 작업 (매크로·차트)', '마무리 점수 확보'],
    ['BONUS', '시험 자주 출제 유형 모음', '직전 5개년 분석'],
    ['BONUS', '최신 기출문제 1~10회 풀이', '실전 감각 끝내기']]

  },
  {
    lev: 'Level 3 · 컴활 1급', title: '필기 핵심공략', badge: '10강',
    list: [
    ['01–02', '컴퓨터 일반 심화', '1급 난이도 대비'],
    ['03–05', '스프레드시트 고급 함수', 'VLOOKUP·INDEX·MATCH 등'],
    ['06–08', '데이터베이스 일반 (Access)', '1급 추가 영역'],
    ['09–10', '실전 모의고사 + 해설', '합격선 안정 확보']]

  },
  {
    lev: 'Level 4 · 컴활 1급', title: '실기 핵심공략', badge: '30강',
    list: [
    ['01–06', 'Excel 기본 작업·서식', '1급 실기 출제 패턴'],
    ['07–15', 'Excel 함수·VBA·매크로', '최고 난이도 정복'],
    ['16–22', '데이터 분석·시나리오·해찾기', '1급 핵심 영역'],
    ['23–28', 'Access 쿼리·폼·보고서', '시험의 절반'],
    ['29–30', '최신 기출 1회 + 총정리', '시험 직전 대비']]

  }];

  return (
    <section className="section alt">
      <div className="inner">
        <div className="eyebrow">Curriculum</div>
        <h2 className="stitle">65강, <em>합격까지의 모든 길.</em></h2>
        <p className="ssub">2급으로 시작해서 1급까지. 한 패키지로 단계별 완성.</p>

        <div className="crr-grid">
          {tracks.map((tr, i) =>
          <div className="crr" key={i}>
              <div className="head">
                <div>
                  <div className="lev">{tr.lev}</div>
                  <h4>{tr.title}</h4>
                </div>
                <div className="badge">{tr.badge}</div>
              </div>
              <ul>
                {tr.list.map(([n, ti, me], j) =>
              <li key={j}>
                    <span className="n">{n}</span>
                    <span className="t">{ti}<span className="meta">{me}</span></span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="crr-total">
          <div className="l">컴활 2급 · 1급 / 필기 · 실기 전 영역 / 무제한 반복 수강</div>
          <div className="r">총 <b>65강 +</b> 기출 풀이 강의</div>
        </div>
      </div>
    </section>);

}

// ── REVIEWS ─────────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
  { who: '김**', date: '2025.11', tag: '2급 합격', stars: '★★★★★', title: '두 달 만에 한 번에 붙었어요', body: '함수가 너무 어려웠는데 지우쌤 강의로 손에 익었어요. 모바일로 출퇴근 시간에 보고 주말에 기출 풀이만 했는데 합격!' },
  { who: '박**', date: '2025.10', tag: '1급 합격', stars: '★★★★★', title: '저자 직강이라 책이랑 강의가 따로 안 놀아요', body: '책 페이지랑 강의가 똑같이 흘러가서 흐름이 안 끊김. 1급 실기 30강이 진짜 핵심이었습니다.' },
  { who: '이**', date: '2025.09', tag: '2급 합격', stars: '★★★★★', title: '재취업 준비하면서 들었는데 강추', body: '핵심만 짧게 가르쳐 주셔서 시간 없는 사람한테 진짜 좋아요. 질문 답변도 진짜 빠릅니다.' },
  { who: '최**', date: '2025.08', tag: '1급 합격', stars: '★★★★★', title: '교재 PDF + 앱이 신의 한 수', body: '인쇄해서 들고 다니면서 보고, 지하철에서는 앱으로 기출 풀고. 시간 정말 효율적으로 썼습니다.' }];

  const bars = [
  { star: 5, pct: 94 },
  { star: 4, pct: 5 },
  { star: 3, pct: 1 },
  { star: 2, pct: 0 },
  { star: 1, pct: 0 }];

  return (
    <section className="section">
      <div className="inner">
        <div className="eyebrow">Reviews</div>
        <h2 className="stitle">2,481개의 <em>진짜 후기.</em></h2>
        <p className="ssub">먼저 합격한 수강생들의 후기를 확인하세요.</p>

        <div className="rv-top">
          <div className="score-block">
            <div className="score num-tab">4.9<span className="o" style={{ fontSize: 24 }}>/5</span></div>
            <div className="stars">★★★★★</div>
            <div className="meta">총 2,481개 후기</div>
          </div>
          <div className="bars">
            {bars.map((b, i) =>
            <div className="b" key={i}>
                <span>{b.star}★</span>
                <div className="bar"><div className="fill" style={{ width: `${b.pct}%` }} /></div>
                <span style={{ textAlign: 'right' }}>{b.pct}%</span>
              </div>
            )}
          </div>
        </div>

        <div className="rv-grid">
          {reviews.map((r, i) =>
          <div className="rv" key={i}>
              <div className="who">
                <span>{r.who} · {r.date}</span>
                <span className="tag">{r.tag}</span>
              </div>
              <div className="stars">{r.stars}</div>
              <h5>{r.title}</h5>
              <p>{r.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── FINAL CTA ──────────────────────────────────────────────────────────────
function FinalCTA({ t }) {
  return (
    <section className="fcta">
      <div className="fcta-eyebrow">마지막으로</div>
      <h2>이번엔, <em>진짜 끝내세요.</em></h2>
      <p>지우쌤과 함께라면 컴활, 더 이상 미루지 않아도 됩니다.</p>
      <div className="fcta-price">
        <span className="ago">198,000원</span>
        <span className="now num-tab">{won(t.salePrice)}</span>
        <span className="won-x">원</span>
      </div>
      <div className="small">결제 즉시 수강 시작 · 3개월 무제한 · 환불 가능</div>
    </section>);

}

// ── STICKY BAR ─────────────────────────────────────────────────────────────
function StickyBar({ t }) {
  return (
    <div className="sticky">
      <div className="info">
        <div className="t">컴활 1+2급 ALL-IN-ONE · 3개월</div>
        <div className="p num-tab">{won(t.salePrice)}원</div>
      </div>
      <button className="b1">문의</button>
      <button className="b2">구매하기</button>
    </div>);

}

Object.assign(window, {
  ssStyles, Hero, PriceBand, Features, Composition, Instructor, Curriculum, Reviews, FinalCTA, StickyBar
});