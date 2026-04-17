/* global React */
function Home({ navigate, heroVariant }) {
  return (
    <div className="page">
      <Hero navigate={navigate} heroVariant={heroVariant}/>

      {/* Services overview */}
      <section className="section services-section">
        <div className="container">
          <div className="section-lead">
            <span className="label">01 · What I do</span>
          </div>
          <h2 className="services-heading">
            Three surfaces, one outcome — businesses that <span className="em">keep growing</span> when you close the laptop.
          </h2>
          <div>
            {[
              {num:'01', title:'Website Design', desc:'Custom-built, mobile-first sites. Clean code, sharp design. No drag-and-drop themes.', tags:['HTML · CSS · JS', 'SEO · Hosting', 'From R8,500']},
              {num:'02', title:'AI Automation', desc:'24/7 business systems. WhatsApp AI replies, lead capture, follow-up, dashboards. Works while you sleep.', tags:['Make.com · Claude API', 'Setup + retainer', 'From R4,500/mo']},
              {num:'03', title:'Digital Products', desc:'Planners, trackers, templates. Shipped globally through the Foucheco shop on Etsy.', tags:['50+ products', 'Global delivery', 'On Etsy']},
            ].map(s => (
              <div key={s.num} className="service-row" onClick={()=>navigate('services')}>
                <div className="service-num">{s.num} /</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-tags">
                  {s.tags.map((t,i) => <span key={i}>{t}</span>)}
                  <span className="service-arrow"><Arrow/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo split */}
      <section className="section" style={{background:'var(--surface)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center'}} className="ai-demo-split">
            <div>
              <div className="section-lead"><span className="label">02 · Live demo</span></div>
              <h2 style={{fontSize:'clamp(2rem, 4.5vw, 3rem)', marginBottom:24}}>
                A lead comes in at 2:41 AM. <em style={{color:'var(--accent-light)', fontStyle:'italic', fontWeight:500}}>It's handled by 2:42.</em>
              </h2>
              <p style={{color:'var(--ink-dim)', fontSize:'var(--fs-lg)', marginBottom:32, textWrap:'pretty'}}>
                Every WhatsApp enquiry qualifies, logs, and follow-up-schedules itself. You wake up to booked calls, not a screen full of "Hi, interested in…"
              </p>
              <ul className="service-detail-list" style={{gridTemplateColumns:'1fr', maxWidth:400}}>
                <li>AI qualifies intent & urgency</li>
                <li>Leads logged to Google Sheets automatically</li>
                <li>Follow-up emails queued in Brevo</li>
                <li>Calendly links attached in-thread</li>
              </ul>
              <button className="btn btn-primary" style={{marginTop:32}} onClick={()=>navigate('services')}>
                How it works <Arrow/>
              </button>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <AiDemo/>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-lead"><span className="label">03 · The process</span></div>
          <h2 style={{fontSize:'clamp(2rem, 5vw, 3.5rem)', marginBottom:60, maxWidth:800}}>
            Three steps. No jargon. No surprise invoices.
          </h2>
          <div className="process-grid">
            <div className="process-step">
              <div>
                <div className="process-step-num">01</div>
                <div className="process-step-title">You tell me</div>
                <div className="process-step-desc">A 20-minute call. What you sell, who you sell to, what's getting in the way. No tech-speak required.</div>
              </div>
              <div className="process-step-tag">Week 1 · Discovery</div>
            </div>
            <div className="process-step">
              <div>
                <div className="process-step-num">02</div>
                <div className="process-step-title">I build</div>
                <div className="process-step-desc">Design, develop, test. You see progress every few days. Approve or redirect — no silent black-box phase.</div>
              </div>
              <div className="process-step-tag">Weeks 2–4 · Build</div>
            </div>
            <div className="process-step">
              <div>
                <div className="process-step-num">03</div>
                <div className="process-step-title">You grow</div>
                <div className="process-step-desc">Launch day, automation live. I stay on call for tweaks, updates, new ideas. Most clients keep me on retainer.</div>
              </div>
              <div className="process-step-tag">Week 5+ · Live</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom:48, flexWrap:'wrap', gap:20}}>
            <div>
              <div className="section-lead"><span className="label">04 · Recent work</span></div>
              <h2 style={{fontSize:'clamp(2rem, 5vw, 3.5rem)', maxWidth:600}}>Recent & worth showing.</h2>
            </div>
            <button className="btn btn-ghost" onClick={()=>navigate('portfolio')}>
              Full portfolio <Arrow/>
            </button>
          </div>
          <div className="portfolio-teaser-grid">
            <div className="portfolio-card wide" onClick={()=>navigate('portfolio')}>
              <div className="portfolio-card-visual viz-lodge"/>
              <div className="portfolio-card-content">
                <div className="portfolio-card-meta">Website · 2025</div>
                <div className="portfolio-card-title">Shomatobe Lodge — Kuruman, ZA</div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:24}}>
              <div className="portfolio-card" onClick={()=>navigate('portfolio')}>
                <div className="portfolio-card-visual viz-whatsapp">
                  <div className="bubble them b1">Hi! Still available for Saturday?</div>
                  <div className="bubble us b2">Hi Amara 👋 Yes — 2 tables left at 7pm. Shall I hold one?</div>
                  <div className="bubble them b3">Please!</div>
                </div>
                <div className="portfolio-card-content">
                  <div className="portfolio-card-meta">Automation · 2025</div>
                  <div className="portfolio-card-title">WhatsApp lead system</div>
                </div>
              </div>
              <div className="portfolio-card" onClick={()=>navigate('portfolio')}>
                <div className="portfolio-card-visual viz-etsy"/>
                <div className="portfolio-card-content">
                  <div className="portfolio-card-meta">Products · Ongoing</div>
                  <div className="portfolio-card-title">Foucheco on Etsy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="cta-strip-bg"/>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <h2 className="cta-strip-title">
            Got a rough idea and a deadline? <em>Let's talk.</em>
          </h2>
          <button className="btn btn-primary" onClick={()=>navigate('contact')}>
            Get a free quote <Arrow/>
          </button>
        </div>
      </section>

      <Footer navigate={navigate}/>
    </div>
  );
}

// responsive fix for split
const homeStyle = document.createElement('style');
homeStyle.textContent = `@media (max-width: 860px) { .ai-demo-split { grid-template-columns: 1fr !important; } }`;
document.head.appendChild(homeStyle);

Object.assign(window, { Home });
