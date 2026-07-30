const LEGAL = window.NORD_LEGAL[window.NORD_PAGE];

function Body() {
  return (
    <section className="sec panel-light legal">
      <div className="wrap">
        <div className="legal-wrap">
          {LEGAL.sections.map((s,i) => (
            <article key={i} className="legal-block">
              <span className="num">{String(i+1).padStart(2,'0')}</span>
              <div>
                <h2>{s.h}</h2>
                {s.p.map((x,j) => <p key={j}>{x}</p>)}
                {s.list && <ul>{s.list.map((x,j) => <li key={j}>{x}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Related() {
  const all = [
    ['kvkk','KVKK Aydınlatma Metni','kvkk.html'],
    ['gizlilik','Gizlilik Politikası','gizlilik.html'],
    ['cerez','Çerez Politikası','cerez-politikasi.html']
  ].filter(x => x[0] !== window.NORD_PAGE);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head" style={{marginBottom:0}}>
          <span className="label">Diğer metinler</span>
          <div>
            <h2>İlgili yasal metinler.</h2>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              {all.map(([k,t,h]) => <a key={k} href={BASE + h} className="arrowlink">{t} <Arrow size={14}/></a>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav/>
    <Crumb here={LEGAL.short}/>
    <PageHero label={LEGAL.label} title={LEGAL.title} lede={LEGAL.lede} facts={LEGAL.facts}/>
    <Body/>
    <Related/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
