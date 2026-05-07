/* global React */
const { useState: useStateHero, useEffect: useEffectHero } = React;

function MonolithHero() {
  return (
    <div className="monolith-wrap">
      <div className="monolith-glow"/>
      <div className="monolith">
        <div className="monolith-top"/>
        <div className="monolith-side"/>
        <div className="monolith-face">
          <div className="monolith-beam"/>
          <div className="monolith-scanline"/>
          <span className="monolith-label">VM—01 · CORE</span>
          <div className="monolith-readout">
            <span>◇ 24/7 UPTIME</span>
            <span>TMP 36.4°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitalHero() {
  return (
    <div className="orbital-wrap">
      <div className="orbital-core"/>
      <div className="orbital-ring"/>
      <div className="orbital-ring r2"/>
      <div className="orbital-ring r3"/>
    </div>
  );
}

function WordmarkHero() {
  return (
    <div className="wordmark-wrap">
      <div className="wordmark-stack">
        <div>Websites.</div>
        <div>Automation.</div>
        <div>Growth.</div>
      </div>
    </div>
  );
}

function HeroVisual({ variant }) {
  if (variant === 'orbital') return <OrbitalHero/>;
  if (variant === 'wordmark') return <WordmarkHero/>;
  return <MonolithHero/>;
}

function Hero({ navigate, heroVariant }) {
  return (
    <section className="hero">
      <div className="hero-grid"/>
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="section-lead">
              <span className="label">Viviers Marketing · Est. 2024</span>
            </div>
            <h1 className="hero-title">
              I design <span className="gradient-text">websites</span> that convert,<br/>
              build <span className="outline">AI systems</span> that work<br/>
              while you sleep.
            </h1>
            <p className="hero-sub">
              A one-person studio out of Potchefstroom, building bespoke sites, 24/7 automation, and digital products that sell worldwide. No templates. No fluff.
            </p>
            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={()=>navigate('contact')}>
                Start a project <Arrow/>
              </button>
              <button className="btn btn-ghost" onClick={()=>navigate('portfolio')}>
                See recent work
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">50+</div>
                <div className="stat-label">Digital products shipped</div>
              </div>
              <div>
                <div className="stat-num">24/7</div>
                <div className="stat-label">Automation uptime</div>
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">Custom, no templates</div>
              </div>
            </div>
          </div>
          <HeroVisual variant={heroVariant}/>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, HeroVisual });
