function Refs() {
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Kurumlar</span>
          <div>
            <h2>2025'ten bu yana bizimle çalışan kurumlar.</h2>
            <p className="lede">Her biri farklı bir regülatöre bağlı, farklı bir denetim takvimiyle çalışıyor. Ortak noktaları: destek fonksiyonlarını içeride tutmanın maliyetini hesaplamış olmaları.</p>
            <div className="sec-more"><a href={`${BASE}hizmetler.html`} className="arrowlink">Bu kurumların aldığı hizmetler <Arrow size={14}/></a></div>
          </div>
        </div>
        <RefsGrid/>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    ['Ödeme kuruluşu · 410 çalışan','Dokuz tedarikçi, tek kalem','Bordro, filo, yan hak, grup sağlık ve İSG ayrı ayrı yürütülüyordu. Beş ailenin devrinden sonra aylık mutabakat sayısı dokuzdan bire, sözleşme yenileme takvimi dokuz tarihten tek tarihe indi.','%24','yıllık gider azalması'],
    ['Aracı kurum · 180 çalışan','Lisanslı kadroda sıfır hata','Kadronun büyük bölümü SPK lisanslı olduğu için özlük ve bordro hassasiyeti yüksekti. Devirden sonraki dört denetim döneminde personel dosyalarına ilişkin bulgu oluşmadı.','0','denetim bulgusu'],
    ['Fintech · 95 çalışan','Ekip iki katına çıkarken','On iki ayda kadro iki katına çıktı. İşe alım, özlük ve yan hak operasyonu Nord\'da kaldığı için içeride tek bir İK kadrosu açmaya gerek kalmadı.','3,5×','işe alım hızı']
  ];
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Sonuçlar</span>
          <div>
            <h2>Üç kurumda ne değişti?</h2>
            <p className="lede">Müşteri gizliliği gereği kurum adları paylaşılmıyor; rakamlar sözleşme dönemi raporlarından alınmıştır.</p>
            <div className="sec-more"><a href={`${HOME}#hesap`} className="arrowlink">Sizde ne değişir? Hesaplayın <Arrow size={14}/></a></div>
          </div>
        </div>
        <div className="levers">
          {cases.map(([who,t,d,v,vl]) => (
            <article key={t} className="lever">
              <b>{v}</b>
              <h4>{t}</h4>
              <p style={{marginBottom:14,color:'var(--text-3)',fontSize:12.5}}>{who} · {vl}</p>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav active="referanslar"/>
    <Crumb here="Referanslar"/>
    <PageHero
      label="Referanslar"
      title="Regüle kurumların destek fonksiyonları bizde."
      lede="Aracı kurumdan ödeme kuruluşuna, portföy yönetiminden fintech girişimine kadar; lisanslı kadro, denetim takvimi ve sertifikasyon yükü olan kurumlarla çalışıyoruz — hatanın maliyetinin ceza olarak geri döndüğü yerlerde."
      facts={[['Canlıya alış','2025'],['Hizmet verilen kurum','10+'],['Odak segment','6'],['Ortalama tasarruf','%27']]}
      cta={[['Sizin için de hesaplayalım','#iletisim',true],['Odak segmentler',`${BASE}odak.html`,false]]}
    />
    <Refs/>
    <Cases/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
