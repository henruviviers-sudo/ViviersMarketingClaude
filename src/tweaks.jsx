/* global React */
const { useState, useEffect } = React;

function TweaksPanel({ state, setState }) {
  const [open, setOpen] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') { setOpen(true); setAvailable(true); }
      if (e.data.type === '__deactivate_edit_mode') { setOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (patch) => {
    const next = {...state, ...patch};
    setState(next);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits: patch}, '*');
  };

  const surprise = () => {
    const accents = ['blue','violet','amber','lime','coral','bone'];
    const heroes = ['monolith','orbital','wordmark'];
    const themes = ['dark','light'];
    update({
      accent: accents[Math.floor(Math.random()*accents.length)],
      hero: heroes[Math.floor(Math.random()*heroes.length)],
      theme: themes[Math.floor(Math.random()*themes.length)],
      typeScale: 0.9 + Math.random() * 0.25
    });
  };

  if (!available) return null;

  const swatches = [
    {id:'blue', color:'#2563EB'},
    {id:'violet', color:'#7C3AED'},
    {id:'amber', color:'#F59E0B'},
    {id:'lime', color:'#84CC16'},
    {id:'coral', color:'#F43F5E'},
    {id:'bone', color:'#E7E5E4'},
  ];

  return (
    <div className={`tweaks-panel ${open ? 'active' : ''}`}>
      <h4>
        Tweaks
        <button className="tweaks-close" onClick={() => setOpen(false)}>×</button>
      </h4>
      <div className="tweaks-row">
        <div className="tweaks-label">Accent</div>
        <div className="tweaks-swatches">
          {swatches.map(s => (
            <div key={s.id}
              className={`tweaks-swatch ${state.accent===s.id?'active':''}`}
              style={{background: s.color}}
              onClick={() => update({accent: s.id})} />
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <div className="tweaks-label">Theme</div>
        <div className="tweaks-seg">
          <button className={state.theme==='dark'?'active':''} onClick={() => update({theme:'dark'})}>Dark</button>
          <button className={state.theme==='light'?'active':''} onClick={() => update({theme:'light'})}>Light</button>
        </div>
      </div>
      <div className="tweaks-row">
        <div className="tweaks-label">Type scale · {state.typeScale.toFixed(2)}×</div>
        <input type="range" min="0.85" max="1.15" step="0.01" value={state.typeScale}
          style={{width:'100%', accentColor:'var(--accent)'}}
          onChange={(e)=>update({typeScale: parseFloat(e.target.value)})} />
      </div>
      <div className="tweaks-row">
        <div className="tweaks-label">Hero variant</div>
        <div className="tweaks-seg">
          <button className={state.hero==='monolith'?'active':''} onClick={()=>update({hero:'monolith'})}>Mono</button>
          <button className={state.hero==='orbital'?'active':''} onClick={()=>update({hero:'orbital'})}>Orbit</button>
          <button className={state.hero==='wordmark'?'active':''} onClick={()=>update({hero:'wordmark'})}>Word</button>
        </div>
      </div>
      <button className="tweaks-surprise" onClick={surprise}>Surprise me</button>
    </div>
  );
}

Object.assign(window, { TweaksPanel });
