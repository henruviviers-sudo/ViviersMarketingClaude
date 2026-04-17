/* global React */
function AboutPage({ navigate }) {
  const creds = [
    {year:'2026', title:'Occupational Certificate: Software Developer', org:'CTU Potchefstroom · Year 2'},
    {year:'2025', title:'AI+ Foundation Certification', org:'AICERTs'},
    {year:'2025', title:'International JavaScript Certification', org:''},
    {year:'2024', title:'Custom GPT Development Certification', org:''},
    {year:'2024', title:'AI & Marketing Automation Training', org:'Nick Ponte Programme'},
  ];
  const stack = {
    'Development': ['HTML5','CSS3','JavaScript','Python','Node.js','React'],
    'Automation': ['Make.com','WhatsApp Business API','Twilio','Brevo','Mailchimp'],
    'AI': ['Claude API','ChatGPT','Google Gemini','Custom GPTs'],
    'Platforms': ['Etsy','Fiverr','Hostinger','Google Business','Canva','Google Sheets'],
  };
  return (
    <div className="page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <div className="section-lead"><span className="label">About · Henru Viviers</span></div>
              <h1>
                One person.<br/>
                Three <em>surfaces.</em><br/>
                Built to last.
              </h1>
            </div>
            <div className="about-hero-side">
              <p>
                I build websites, automate business workflows with AI, and create digital products that sell globally — from a small desk in Potchefstroom, South Africa.
              </p>
            </div>
          </div>
          <div className="about-portrait">
            <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="portraitG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--gradient-a)" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="var(--gradient-b)" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <rect width="1200" height="500" fill="var(--surface)"/>
              {Array.from({length:30}).map((_, i) => (
                <line key={i} x1={i*42} y1="0" x2={i*42} y2="500" stroke="var(--hairline)"/>
              ))}
              <circle cx="600" cy="250" r="120" fill="url(#portraitG)"/>
              <circle cx="600" cy="250" r="60" fill="var(--accent)" opacity="0.8"/>
              <text x="600" y="260" fontFamily="Sora, sans-serif" fontSize="32" fontWeight="600" fill="#fff" textAnchor="middle" letterSpacing="-1">HV</text>
            </svg>
            <div className="label-top">PORTRAIT · PLACEHOLDER</div>
            <div className="label-bot">26.7° S · 27.1° E</div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-lead"><span className="label">Core values</span></div>
          <h2 style={{fontSize:'clamp(2rem, 5vw, 3.5rem)', marginBottom:60, maxWidth:800}}>
            Three rules I don't break.
          </h2>
          <div className="values-grid">
            <div className="value">
              <div className="value-num">Rule 01</div>
              <div>
                <h3>Build it right</h3>
                <p>No cutting corners. Built to a standard worth putting my name on — literally.</p>
              </div>
            </div>
            <div className="value">
              <div className="value-num">Rule 02</div>
              <div>
                <h3>Keep it simple</h3>
                <p>Technology that makes life easier, not more complicated. If I have to explain it twice, it's too complex.</p>
              </div>
            </div>
            <div className="value">
              <div className="value-num">Rule 03</div>
              <div>
                <h3>Think global</h3>
                <p>Help businesses reach customers worldwide — not just down the road. The internet doesn't stop at borders; neither should your growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="creds-section">
        <div className="container">
          <div className="creds-grid">
            <div>
              <div className="section-lead"><span className="label">Credentials</span></div>
              <h2 style={{fontSize:'clamp(1.75rem, 3.5vw, 2.5rem)'}}>Formally trained. Continuously learning.</h2>
            </div>
            <div>
              {creds.map((c, i) => (
                <div key={i} className="cred-row">
                  <div className="year">{c.year}</div>
                  <div>
                    <div className="title">{c.title}</div>
                    {c.org && <div className="org">{c.org}</div>}
                  </div>
                  <div style={{fontFamily:'Space Mono, monospace', fontSize:10, color:'var(--accent-light)', letterSpacing:'0.1em'}}>◇</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="container">
          <div className="section-lead"><span className="label">Tech stack</span></div>
          <h2 style={{fontSize:'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom:60, maxWidth:700}}>
            The tools I reach for — opinionated, but never dogmatic.
          </h2>
          <div className="stack-grid">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="stack-group">
                <h4>{group}</h4>
                <div className="stack-chips">
                  {items.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip-bg"/>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <h2 className="cta-strip-title">Want to work with <em>me</em> directly? That's the whole offer.</h2>
          <button className="btn btn-primary" onClick={()=>navigate('contact')}>Say hi <Arrow/></button>
        </div>
      </section>

      <Footer navigate={navigate}/>
    </div>
  );
}
Object.assign(window, { AboutPage });
