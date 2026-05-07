/* global React */
function PortfolioPage({ navigate }) {
  return (
    <div className="page">
      <section className="portfolio-hero">
        <div className="container">
          <div className="section-lead"><span className="label">Selected work · 2024 — 2026</span></div>
          <h1>Three projects. <span style={{color:'var(--accent-light)', fontStyle:'italic', fontWeight:500}}>Zero templates.</span></h1>
          <p>Each of these started with a rough idea and a deadline. Every line of code, every automation rule, every product file — built from scratch for the person asking.</p>
        </div>
      </section>

      <section className="project">
        <div className="container">
          <div className="project-inner">
            <div className="project-body">
              <div className="mono" style={{marginBottom:16}}>Project 01 · Website</div>
              <h3>Shomatobe Lodge</h3>
              <p>A single-page luxury site for a wilderness lodge in Kuruman. Earth-tone palette, slow scroll animations, a booking form that routes straight to WhatsApp, and a testimonials carousel that feels like turning pages. Built in plain HTML/CSS/JS — loads in under a second on 3G.</p>
              <div className="project-meta">
                <div><span className="label">Client</span><span className="val">Shomatobe Lodge</span></div>
                <div><span className="label">Where</span><span className="val">Kuruman, ZA</span></div>
                <div><span className="label">Stack</span><span className="val">HTML · CSS · JS</span></div>
                <div><span className="label">Delivered</span><span className="val">3 weeks</span></div>
              </div>
            </div>
            <div className="project-visual">
              <div className="viz-lodge" style={{position:'absolute', inset:0}}/>
              <div style={{position:'absolute', bottom:24, left:24, right:24, color:'#fff'}}>
                <div style={{fontFamily:'Sora, sans-serif', fontSize:28, fontWeight:600, letterSpacing:'-0.02em', marginBottom:4}}>Shomatobe</div>
                <div style={{fontFamily:'Space Mono, monospace', fontSize:10, letterSpacing:'0.15em', color:'var(--accent-light)', textTransform:'uppercase'}}>Wilderness · Est. 2017</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project reverse" style={{background:'var(--surface)'}}>
        <div className="container">
          <div className="project-inner">
            <div className="project-body">
              <div className="mono" style={{marginBottom:16}}>Project 02 · Automation</div>
              <h3>WhatsApp Lead System</h3>
              <p>An after-hours enquiry machine. AI qualifies the intent, drafts a personal reply, logs the lead, queues a follow-up email, and books a call — all inside two minutes, all through WhatsApp Business. Client's team stopped handling first-contact. Conversion went up 3.2×.</p>
              <div className="project-meta">
                <div><span className="label">Client</span><span className="val">Undisclosed</span></div>
                <div><span className="label">Uptime</span><span className="val">24/7</span></div>
                <div><span className="label">Stack</span><span className="val">Make · WA API · Claude</span></div>
                <div><span className="label">Lift</span><span className="val">3.2× conversion</span></div>
              </div>
            </div>
            <div className="project-visual">
              <div className="viz-whatsapp" style={{position:'absolute', inset:0}}>
                <div className="bubble them b1">Hi! Still available for Saturday?</div>
                <div className="bubble us b2">Hi Amara 👋 Yes — 2 tables left at 7pm. Shall I hold one?</div>
                <div className="bubble them b3">Please!</div>
                <div className="bubble us" style={{top:200, animationDelay:'1.5s', animation:'bubbleIn 800ms var(--ease) backwards'}}>Held ✓ Calendly link sent to your email. Looking forward!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project">
        <div className="container">
          <div className="project-inner">
            <div className="project-body">
              <div className="mono" style={{marginBottom:16}}>Project 03 · Products</div>
              <h3>Foucheco on Etsy</h3>
              <p>A growing catalogue of digital planners, trackers and templates — 50+ SKUs, sold to customers in 38 countries. Each product is designed, tested, listed, and supported end-to-end. This is where the "ship something every week" muscle gets trained.</p>
              <div className="project-meta">
                <div><span className="label">Shop</span><span className="val">Foucheco</span></div>
                <div><span className="label">SKUs</span><span className="val">50+</span></div>
                <div><span className="label">Countries</span><span className="val">38</span></div>
                <div><span className="label">Delivery</span><span className="val">Instant</span></div>
              </div>
              <a className="btn btn-ghost" href="https://www.etsy.com/shop/Foucheco" target="_blank" style={{marginTop:24}}>
                Visit the shop <Arrow/>
              </a>
            </div>
            <div className="project-visual">
              <div className="viz-etsy" style={{position:'absolute', inset:0}}/>
              <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', textAlign:'center'}}>
                <div style={{fontFamily:'Sora, sans-serif', fontSize:64, fontWeight:600, color:'var(--accent-light)', letterSpacing:'-0.04em', lineHeight:1}}>50+</div>
                <div style={{fontFamily:'Space Mono, monospace', fontSize:11, letterSpacing:'0.15em', color:'var(--ink-dim)', textTransform:'uppercase', marginTop:12}}>Products shipped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip-bg"/>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <h2 className="cta-strip-title">Your project could be <em>next.</em></h2>
          <button className="btn btn-primary" onClick={()=>navigate('contact')}>Start the conversation <Arrow/></button>
        </div>
      </section>

      <Footer navigate={navigate}/>
    </div>
  );
}
Object.assign(window, { PortfolioPage });
