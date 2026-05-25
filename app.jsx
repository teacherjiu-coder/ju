// app.jsx — 지우쌤 컴활 1+2급 ALL-IN-ONE 상세페이지

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Override Apple-style design tokens with Tweak values
  const cssVars = {
    '--black': t.primaryColor,
    '--accent': t.accentColor,
    '--accent-hover': t.accentColor,
    '--gray-6': t.softBg,
  };

  return (
    <div style={cssVars}>
      <style>{ssStyles}</style>

      <div className="ss-frame">
        <Hero t={t} />
        <PriceBand t={t} />
        <Features />
        <Composition t={t} />
        <Instructor />
        <Curriculum />
        <Reviews />
        <FinalCTA t={t} />
        {t.showStickyBar && <StickyBar t={t} />}
      </div>

      <TweaksPanel>
        <TweakSection label="가격" />
        <TweakNumber label="판매가 (원)" value={t.salePrice} step={1000} onChange={(v) => setTweak('salePrice', v)} />

        <TweakSection label="컬러 테마" />
        <TweakColor
          label="팔레트"
          value={[t.primaryColor, t.accentColor, t.softBg]}
          options={[
            ['#3a3a3c', '#0071e3', '#fbfaf7'],   // 아이보리 깔끔 — 차콜 + 블루 (기본)
            ['#4a4a4f', '#1d8348', '#f6f3ec'],   // 모던 그린 — 다크그린 + 아이보리
            ['#3a3633', '#c2410c', '#fbf7f1'],   // 따뜻한 톤 — 브라운 + 오렌지
            ['#3d3a52', '#7c5cf2', '#f7f5fb'],   // 트렌디 라일락 — 라벤더
            ['#2d4a3e', '#d97757', '#f7f1e8'],   // 차분 — 포레스트 + 테라코타
          ]}
          onChange={(arr) => {
            setTweak({
              primaryColor: arr[0],
              accentColor: arr[1],
              softBg: arr[2],
            });
          }}
        />

        <TweakSection label="화면 옵션" />
        <TweakToggle label="하단 고정 구매바" value={t.showStickyBar} onChange={(v) => setTweak('showStickyBar', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
