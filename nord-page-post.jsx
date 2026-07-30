const POST = window.NORD_POSTS.find(p => p.slug === window.NORD_POST);
const IDX = window.NORD_POSTS.indexOf(POST);
const OTHERS = window.NORD_POSTS.filter(p => p !== POST).slice(0,3);

function Body() {
  return (
    <section className="sec panel-light article">
      <div className="wrap">
        <div className="art-wrap">
          {POST.body.map((b,i) => (
            <div key={i} className="art-block">
              {b.h && <h2>{b.h}</h2>}
              {b.p && b.p.map((x,j) => <p key={j}>{x}</p>)}
              {b.list && <ul>{b.list.map((x,j) => <li key={j}>{x}</li>)}</ul>}
              {b.quote && <blockquote className="art-quote">{b.quote}</blockquote>}
            </div>
          ))}
          <div className="art-end">
            <span className="label">Nord Kurumsal Hizmetler</span>
            <p>Bu yazıdaki yöntemlerin kendi gider tablonuzdaki karşılığını görmek isterseniz, son on iki ayın faturaları üzerinden ücretsiz bir analiz hazırlıyoruz.</p>
            <a href={'#iletisim'} className="btn btn-primary btn-dark-on-light">Ücretsiz gider analizi <Arrow size={14}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function More() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Diğer yazılar</span>
          <div><h2>Devamı.</h2>
          <div className="sec-more"><a href={`${BASE}blog.html`} className="arrowlink">Tüm yazılar <Arrow size={14}/></a></div></div>
        </div>
        <div className="post-list on-dark">
          {OTHERS.map((p,i) => (
            <a key={p.slug} href={`${BASE}blog/${p.slug}.html`} className="post-row">
              <span className="num">{String(window.NORD_POSTS.indexOf(p)+1).padStart(2,'0')}</span>
              <div>
                <div className="post-meta"><span>{p.cat}</span><i/><span>{p.date}</span><i/><span>{`${p.mins} dk`}</span></div>
                <h3>{p.title}</h3>
                <p>{p.dek}</p>
              </div>
              <span className="post-go"><Arrow size={16}/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav active="blog"/>
    <div className="wrap">
      <div className="crumb"><a href={HOME}>Nord</a><span>/</span><a href={`${BASE}blog.html`}>Blog</a><span>/</span><span style={{color:'var(--text-2)'}}>{POST.cat}</span></div>
    </div>
    <PageHero
      label={`${POST.cat} · ${POST.date}`}
      title={POST.title}
      lede={POST.dek}
      facts={[['Kategori',POST.cat],['Yayın',POST.date],['Okuma süresi',`${POST.mins} dk`],['Yazı no',String(IDX+1).padStart(2,'0')]]}
    />
    <Body/>
    <More/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
