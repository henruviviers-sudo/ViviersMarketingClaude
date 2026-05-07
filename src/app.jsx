/* global React, ReactDOM */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "theme": "dark",
  "typeScale": 1.0,
  "hero": "monolith"
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useStateApp(() => {
    const stored = localStorage.getItem('vm_route');
    return stored || 'home';
  });
  const [tweaks, setTweaks] = useStateApp(TWEAK_DEFAULTS);

  useEffectApp(() => {
    const root = document.documentElement;
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-hero', tweaks.hero);
    root.style.setProperty('--ts', tweaks.typeScale);
  }, [tweaks]);

  const navigate = (id) => {
    setRoute(id);
    localStorage.setItem('vm_route', id);
    window.scrollTo({top: 0, behavior: 'instant'});
  };

  let page;
  switch(route) {
    case 'services': page = <ServicesPage navigate={navigate}/>; break;
    case 'portfolio': page = <PortfolioPage navigate={navigate}/>; break;
    case 'about': page = <AboutPage navigate={navigate}/>; break;
    case 'contact': page = <ContactPage navigate={navigate}/>; break;
    default: page = <Home navigate={navigate} heroVariant={tweaks.hero}/>;
  }

  return (
    <>
      <Nav current={route} navigate={navigate}/>
      <main key={route}>{page}</main>
      <TweaksPanel state={tweaks} setState={setTweaks}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
