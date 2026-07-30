const S = window.NORD_SERVICES;
const cur = S.find(s => s.id === window.NORD_SERVICE);
const others = S.filter(s => s.id !== cur.id);

function ServiceHero() {
  return <>
    <div className="wrap">
      <div className="crumb"><a href={HOME || '#top'}>Nord</a><span>/</span><a href={`${BASE}hizmetler.html`}>Hizmetler</a><span>/</span><span style={{color:'var(--text-2)'}}>{cur.short}</span></div>
    </div>
    <section className="svc-hero">
      <div className="wrap">
        <div className="svc-hero-grid">
          <div>
            <span className="svc-lever">{cur.num} · {cur.lever}</span>
            <h1>{cur.heroTitle}</h1>
            <div className="svc-segs">{cur.segs.map(x => <i key={x}>{x}</i>)}</div>
          </div>
          <div>
            <p className="lede">{cur.lede}</p>
            <ul className="svc-facts">
              {cur.facts.map(([k,v],i) => <li key={i}>{k}<b>{v}</b></li>)}
            </ul>
            <div className="sec-more" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href={'#iletisim'} className="btn btn-primary">Bu aile için analiz iste <Arrow size={14}/></a>
              <a href={`${HOME}#hesap`} className="btn btn-outline">Tasarruf hesabı</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

function Levers() {
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Maliyet etkisi</span>
          <div><h2>Bu ailenin gideriniz üzerindeki üç etkisi.</h2></div>
        </div>
        <div className="levers">
          {cur.levers.map(([v,t,d],i) => (
            <article key={i} className="lever"><b>{v}</b><h4>{t}</h4><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail() {
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Kapsam</span>
          <div>
            <h2>{cur.title} içindeki {cur.items.length} hizmet.</h2>
            <p className="lede">Tamamı birlikte ya da ihtiyacınıza göre seçilerek alınabilir. Her hizmet tek sözleşme altında, tek fatura ile yürütülür.</p>
          </div>
        </div>
        <div className="detail">
          {cur.items.map(([t,d,save],i) => (
            <article key={i} className="detail-row">
              <span className="num">{String(i+1).padStart(2,'0')}</span>
              <h3>{t}</h3>
              <div className="body">
                <p>{d}</p>
                <span className="save"><Check size={13}/> {save}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="sec-more"><a href={'#iletisim'} className="arrowlink">Bu ailenin tamamı için fiyat alın <Arrow size={14}/></a></div>
      </div>
    </section>
  );
}

function Others() {
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Diğer aileler</span>
          <div>
            <h2>Ne kadar konsolide ederseniz, o kadar tasarruf.</h2>
            <p className="lede">Üçüncü aileden itibaren konsolide hacim indirimi devreye girer; her yeni aile mevcutların birim maliyetini de düşürür.</p>
            <div className="sec-more"><a href={`${BASE}hizmetler.html`} className="arrowlink">Tüm hizmetler ve fiyat mantığı <Arrow size={14}/></a></div>
          </div>
        </div>
        <div className="others">
          {others.map(s => (
            <a key={s.id} className="other" href={svcHref(s.slug)}>
              <div><span className="num">{s.num}</span><h4>{s.short}</h4></div>
              <span className="go"><Arrow size={16}/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return <><Nav active="hizmetler"/><ServiceHero/><Levers/><Detail/><Others/><CTASection/><Footer/></>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
