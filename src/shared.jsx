/* global React */
const { useState: useStateShared, useEffect: useEffectShared } = React;

function BrandMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA"/>
          <stop offset="50%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
        <filter id="brandGlow">
          <feGaussianBlur stdDeviation="1.5"/>
        </filter>
      </defs>
      <circle cx="16" cy="16" r="12" fill="url(#brandGrad)" filter="url(#brandGlow)" opacity="0.6"/>
      <circle cx="16" cy="16" r="10" fill="url(#brandGrad)"/>
      <path d="M11 13 L17 19 L21 14" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg className="arrow-svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8 L13 8 M8 3 L13 8 L8 13" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function Nav({ current, navigate }) {
  const [mobileOpen, setMobileOpen] = useStateShared(false);
  const links = [
    {id:'home', label:'Home'},
    {id:'services', label:'Services'},
    {id:'portfolio', label:'Portfolio'},
    {id:'about', label:'About'},
    {id:'contact', label:'Contact'},
  ];
  const go = (id) => { navigate(id); setMobileOpen(false); };
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-brand" onClick={() => go('home')} style={{cursor:'pointer'}}>
          <span className="nav-brand-mark"><BrandMark size={28}/></span>
          <span>Viviers Marketing</span>
        </div>
        <div className={`nav-links ${mobileOpen?'mobile-open':''}`}>
          {links.map(l => (
            <a key={l.id} className={`nav-link ${current===l.id?'active':''}`} onClick={() => go(l.id)}>{l.label}</a>
          ))}
          <button className="nav-cta" onClick={() => go('contact')}>Get a Free Quote</button>
        </div>
        <div className={`nav-hamburger ${mobileOpen?'open':''}`} onClick={() => setMobileOpen(!mobileOpen)}>
          <span/><span/><span/>
        </div>
      </div>
    </nav>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="nav-brand" style={{marginBottom:16}}>
              <span className="nav-brand-mark"><BrandMark size={28}/></span>
              <span>Viviers Marketing</span>
            </div>
            <p style={{color:'var(--ink-dim)', fontSize:'var(--fs-sm)', maxWidth:360, textWrap:'pretty'}}>
              Websites that convert, AI systems that work while you sleep, digital products that sell worldwide.
            </p>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <a onClick={()=>navigate('home')}>Home</a>
            <a onClick={()=>navigate('services')}>Services</a>
            <a onClick={()=>navigate('portfolio')}>Portfolio</a>
            <a onClick={()=>navigate('about')}>About</a>
            <a onClick={()=>navigate('contact')}>Contact</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a onClick={()=>navigate('services')}>Website Design</a>
            <a onClick={()=>navigate('services')}>AI Automation</a>
            <a onClick={()=>navigate('services')}>Digital Products</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="https://wa.me/27725290367">WhatsApp</a>
            <a href="mailto:henruviviers@gmail.com">Email</a>
            <a href="https://www.etsy.com/shop/Foucheco">Etsy Shop</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Viviers Marketing · Potchefstroom, ZA</span>
          <span>Serving clients worldwide</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { BrandMark, Arrow, Nav, Footer });
