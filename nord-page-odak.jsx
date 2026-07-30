function Why() {
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Neden odak</span>
          <div>
            <h2>Odaklanmak bir kısıt değil, bir yetkinlik kararı.</h2>
            <p className="lede">Regüle bir kurumun destek ihtiyacı sıradan bir şirketinkine benzemez. Kadronun büyük bölümü lisanslı olmak zorundadır, denetim takvimi kaçırılamaz, sertifikasyon yenilemesi ertelenemez. Aynı mevzuatı tekrar tekrar çalıştığımız için bir sonraki kurumda öğrenme süresi sıfıra yaklaşıyor.</p>
          </div>
        </div>
        <div className="levers">
          {[
            ['SPK','Sermaye piyasası','Lisanslı personel zorunluluğu, iç kontrol ve teftiş yapısı, yatırımcı şikâyet süreçleri. Özlük hatası doğrudan denetim bulgusuna dönüşür.'],
            ['BDDK · TCMB','Ödeme ve bankacılık','Lisans şartlarının sürekliliği, TÖDEB üyeliği, raporlama takvimi. Uyum gecikmesi idari para cezası olarak geri döner.'],
            ['PCI-DSS · ISO','Sertifikasyon','27001, 22301 ve 20000-1 denetim döngüleri. Belge kaybı yalnızca itibar değil, doğrudan ticari erişim kaybıdır.']
          ].map(([v,t,d]) => (
            <article key={t} className="lever"><b>{v}</b><h4>{t}</h4><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Segments() {
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Altı segment</span>
          <div>
            <h2>Hizmet verdiğimiz kurum tipleri.</h2>
            <p className="lede">Her segmentin kendine özgü bir maliyet baskısı ve kendine özgü bir denetim takvimi var. Aşağıda her biri için en çok başvurulan hizmet aileleri de listelenmiştir.</p>
            <div className="sec-more"><a href={`${BASE}referanslar.html`} className="arrowlink">Bu segmentlerdeki referanslarımız <Arrow size={14}/></a></div>
          </div>
        </div>
        <SegsGrid/>
      </div>
    </section>
  );
}

function Outside() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Kapsam dışı</span>
          <div>
            <h2>Bu altı segmentte değilseniz.</h2>
            <p className="lede">Üretim, perakende ya da hizmet sektöründen bir kurumsanız modelimiz teknik olarak çalışır — ancak size regüle finansta sunduğumuz derinliği sunamayız. Bu durumda açıkça söyler, uygun bir tedarikçiye yönlendiririz. Yapamayacağımız işi almamak da bir maliyet disiplinidir.</p>
            <div className="sec-more"><a href={'#iletisim'} className="arrowlink">Yine de konuşalım — durumunuzu değerlendirelim <Arrow size={14}/></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav active="odak"/>
    <Crumb here="Odak"/>
    <PageHero
      label="Odak"
      title="Herkese değil, altı segmente hizmet veriyoruz."
      lede="Nord yalnızca finansal regülasyon altında çalışan kurumlarla ve teknoloji şirketleriyle çalışır. SPK, BDDK, TCMB ve TSPB yükümlülükleri; lisanslı personel zorunluluğu; PCI-DSS ve ISO sertifikasyon takvimi — bu alanın dilini biliyoruz."
      facts={[['Odak segment','6'],['Regülatör','SPK · BDDK · TCMB'],['Sertifikasyon','PCI-DSS · ISO 27001'],['Kapsam dışı','Diğer sektörler']]}
      cta={[['Segmentinize özel analiz iste','#iletisim',true],['Hizmetleri görün',`${BASE}hizmetler.html`,false]]}
    />
    <Why/>
    <Segments/>
    <Outside/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
