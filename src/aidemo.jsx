/* global React */
const { useState: useStateAI, useEffect: useEffectAI, useRef: useRefAI } = React;

const AI_SCRIPT = [
  {who:'them', text:"Hey! Do you still have openings for a website this month?"},
  {typing: 800},
  {who:'us', text:"Hi Sarah 👋 Yes — we have two slots left for April. Could I ask what your business does and your ideal launch date?"},
  {wait: 1400},
  {who:'them', text:"It's a boutique lodge in Pretoria. Launch ASAP — peak booking season starts May 15."},
  {typing: 1000},
  {who:'us', text:"Perfect — we've built lodge sites before (Shomatobe). To hit May 15, I'd recommend our Lodge package: design + booking form + SEO. R12,500 once-off. Want me to send a proposal?"},
  {wait: 1600},
  {who:'them', text:"Yes please!"},
  {typing: 900},
  {who:'us', text:"Sent to sarah@lodgebreeze.co.za at 14:32. Calendar link included. Henru will reply personally within 24h 🌿"},
];

const LOG_SEQ = [
  {t: 0, txt: "intent.detected → new_lead"},
  {t: 1, txt: "lead.logged → Google Sheets · row 1,429"},
  {t: 2, txt: "match.found → service=lodge (conf 0.94)"},
  {t: 3, txt: "email.queued → Brevo"},
  {t: 4, txt: "calendly.embed → attached"},
];

function AiDemo() {
  const [messages, setMessages] = useStateAI([]);
  const [typing, setTyping] = useStateAI(false);
  const [logIdx, setLogIdx] = useStateAI(0);
  const timer = useRefAI(null);

  useEffectAI(() => {
    let cancelled = false;
    let step = 0;
    const run = () => {
      if (cancelled) return;
      if (step >= AI_SCRIPT.length) {
        // reset after pause
        timer.current = setTimeout(() => {
          setMessages([]);
          setLogIdx(0);
          step = 0;
          run();
        }, 4000);
        return;
      }
      const item = AI_SCRIPT[step];
      if (item.typing) {
        setTyping(true);
        timer.current = setTimeout(() => {
          setTyping(false);
          step++;
          run();
        }, item.typing);
      } else if (item.wait) {
        timer.current = setTimeout(() => {
          step++;
          run();
        }, item.wait);
      } else {
        setMessages(prev => {
          const next = [...prev, item];
          if (item.who === 'us') {
            setLogIdx(l => Math.min(l+1, LOG_SEQ.length));
          }
          return next;
        });
        step++;
        timer.current = setTimeout(run, 700);
      }
    };
    run();
    return () => { cancelled = true; clearTimeout(timer.current); };
  }, []);

  return (
    <div className="ai-demo">
      <div className="ai-demo-header">
        <div className="ai-demo-avatar">V</div>
        <div style={{flex:1}}>
          <div className="ai-demo-name">Viviers · Auto-reply</div>
          <div className="ai-demo-status">online</div>
        </div>
        <div style={{fontFamily:'Space Mono, monospace', fontSize:9, color:'var(--ink-faint)', letterSpacing:'0.1em'}}>
          WA BUSINESS
        </div>
      </div>
      <div className="ai-messages">
        {messages.map((m, i) => (
          <div key={i} className={`ai-msg ${m.who}`}>{m.text}</div>
        ))}
        {typing && (
          <div className="ai-msg typing">
            <span className="dots"><span/><span/><span/></span>
          </div>
        )}
      </div>
      <div className="ai-log">
        {LOG_SEQ.slice(0, logIdx).map((l, i) => (
          <div key={i} className="row" style={{animationDelay: `${i*0.1}s`}}>
            <span>→ {l.txt}</span>
            <span className="tag">OK</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline keyframe for logIn (added via styles.js)
const aiStyle = document.createElement('style');
aiStyle.textContent = `@keyframes logIn { from{opacity:0;transform:translateX(-4px)} to{opacity:1;transform:none}}`;
document.head.appendChild(aiStyle);

Object.assign(window, { AiDemo });
