/* global React */
function ServicesPage({ navigate }) {
  return (
    <div className="page">
      <section className="services-hero">
        <div className="container">
          <div className="section-lead"><span className="label">Services · 2026</span></div>
          <h1>
            Three things I do, <span style={{background:'linear-gradient(135deg,var(--gradient-a),var(--gradient-b))', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent', fontStyle:'italic', fontWeight:500}}>obsessively well.</span>
          </h1>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-num">01</div>
            <div>
              <h2>Website Design</h2>
              <p className="service-detail-lead">
                Custom-built, mobile-first websites. Hand-written HTML, CSS and JavaScript. No drag-and-drop themes, no bloated page builders — code you could hand to any developer and they'd thank you.
              </p>
              <ul className="service-detail-list">
                <li>Custom design from scratch</li>
                <li>Fully responsive layouts</li>
                <li>SEO setup & metadata</li>
                <li>Contact forms & WhatsApp integration</li>
                <li>Google Maps embeds</li>
                <li>Hosting & domain setup</li>
              </ul>
              <div className="price-tag">From R8,500 once-off · 3–4 weeks</div>
            </div>
            <div className="svc-viz web">
              <div className="browser">
                <div className="browser-bar"/>
                <div className="browser-body">
                  <h3>Shomatobe Lodge</h3>
                  <p>Wilderness retreat · Kuruman, Northern Cape. Luxury tented suites, guided safaris, starlit dinners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail" style={{background:'var(--surface)'}}>
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-num">02</div>
            <div>
              <h2>AI Automation</h2>
              <p className="service-detail-lead">
                24/7 business systems that do the admin work your team shouldn't be doing. WhatsApp auto-replies with AI, lead logging, email follow-up, dashboards — built on Make.com + Claude, tuned to your voice.
              </p>
              <ul className="service-detail-list">
                <li>WhatsApp AI auto-reply</li>
                <li>Lead capture & Google Sheets logging</li>
                <li>Email follow-up sequences</li>
                <li>Content scheduling</li>
                <li>Custom AI chatbots</li>
                <li>Live ops dashboards</li>
              </ul>
              <div className="price-tag">Setup from R6,500 · Retainer from R4,500/mo</div>
            </div>
            <div className="svc-viz auto">
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="flowG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--gradient-a)"/>
                    <stop offset="100%" stopColor="var(--gradient-b)"/>
                  </linearGradient>
                </defs>
                {[60, 180, 300, 420].map((y, i) => (
                  <g key={i}>
                    <rect x="40" y={y-28} width="140" height="56" rx="4" fill="var(--surface-high)"/>
                    <rect x="220" y={y-28} width="140" height="56" rx="4" fill="var(--surface-low)"/>
                    <text x="60" y={y+3} fontFamily="Space Mono, monospace" fontSize="10" fill="var(--ink-dim)" letterSpacing="1">
                      {['WhatsApp IN','Claude API','Google Sheets','Brevo SEND'][i]}
                    </text>
                    <text x="240" y={y+3} fontFamily="Space Mono, monospace" fontSize="10" fill="var(--ink-dim)" letterSpacing="1">
                      {['qualify','reply','log lead','confirm'][i]}
                    </text>
                    <line x1="180" y1={y} x2="220" y2={y} stroke="url(#flowG)" strokeWidth="1.5"/>
                    <circle cx="200" cy={y} r="3" fill="var(--accent-light)">
                      <animate attributeName="cx" from="180" to="220" dur="2s" repeatCount="indefinite" begin={`${i*0.4}s`}/>
                    </circle>
                  </g>
                ))}
                {[120, 240, 360].map((y, i) => (
                  <line key={i} x1="110" y1={y-32} x2="110" y2={y+32} stroke="var(--hairline)" strokeWidth="1" strokeDasharray="2 4"/>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-num">03</div>
            <div>
              <h2>Digital Products</h2>
              <p className="service-detail-lead">
                Professional planners, trackers, printables and templates — designed, tested, and shipped through Foucheco on Etsy. 50+ products and counting, delivered globally within minutes of purchase.
              </p>
              <ul className="service-detail-list">
                <li>Goal & habit trackers</li>
                <li>Business planners</li>
                <li>Budget & finance sheets</li>
                <li>Content calendars</li>
                <li>Printable templates</li>
                <li>Notion dashboards</li>
              </ul>
              <a className="btn btn-ghost" href="https://www.etsy.com/shop/Foucheco" target="_blank" style={{marginTop:24}}>
                Visit Foucheco on Etsy <Arrow/>
              </a>
            </div>
            <div className="svc-viz etsy-products">
              <div className="shelf">
                <div className="prod"/>
                <div className="prod"/>
                <div className="prod"/>
                <div className="prod"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip-bg"/>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <h2 className="cta-strip-title">
            Not sure which one you need? <em>We'll figure it out on the call.</em>
          </h2>
          <button className="btn btn-primary" onClick={()=>navigate('contact')}>
            Book a free 20-min call <Arrow/>
          </button>
        </div>
      </section>

      <Footer navigate={navigate}/>
    </div>
  );
}
Object.assign(window, { ServicesPage });
