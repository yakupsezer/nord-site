function Mock() {
  return (
    <section className="sec" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="soon-frame pnl-frame">
          <div className="soon-bar"><i/><i/><i/><span className="u">panel.nord.services</span></div>
          <div className="soon-body">
            <div className="soon-kpis">
              {[['Toplam aylık gider','₺ 8.412.900'],['Nord ile tasarruf','₺ 2.147.600'],['Aktif hizmet ailesi','6'],['Tedarikçi','1']].map(([l,v],i) =>
                <div key={i} className="soon-kpi"><span>{l}</span><b>{v}</b></div>
              )}
            </div>
            <div className="soon-chart">
              {[62,70,58,74,68,82,76,88,79,85,72,91,84,94,88,96].map((h,i) => <i key={i} style={{height:`${h}%`}}/>)}
            </div>
            <div className="pnl-tbl">
              {window.NORD_SERVICES.map(s => <div key={s.id} className="pnl-tr"><span>{s.short}</span><i/><i style={{width:`${28 + (s.id * 11) % 46}%`}}/></div>)}
            </div>
          </div>
          <div className="soon-veil"><span>Yakında</span></div>
        </div>
        <p className="pnl-cap">Arayüz taslağı. Görseldeki tutarlar örnektir.</p>
      </div>
    </section>
  );
}

function Today() {
  const steps = [
    ['01','Atanmış hizmet yöneticisi','Altı hizmet ailesinin tamamı için tek muhatabınız var. Talep, arıza, yenileme ve istisna yönetimi bu kişiden geçer; içeride kim çalışıyorsa sizi ilgilendirmez.'],
    ['02','Tek fatura, tek mutabakat','Her ayın ilk haftasında hizmet ailelerinin tamamını kapsayan tek fatura kesilir. Muhasebeniz dokuz mutabakat yerine bir mutabakat yapar.'],
    ['03','Kalem bazlı gider raporu','Fatura ekinde hizmet, lokasyon ve maliyet merkezi kırılımlı gider tablosu gelir. Hangi kalemin arttığını, hangisinin düştüğünü aynı sayfada görürsünüz.'],
    ['04','Çeyreklik tasarruf gözden geçirmesi','Üç ayda bir, devir öncesi baz maliyetle güncel maliyeti karşılaştıran bir gözden geçirme yapılır. Hedefin altında kalan kalem varsa aksiyon planıyla birlikte sunulur.']
  ];
  return (
    <section id="bugun" className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Bugün</span>
          <div>
            <h2>Panel yayına girmeden de takip aksamıyor.</h2>
            <p className="lede">Nord Panel geliştirme aşamasında. Panelin göstereceği verinin tamamı bugün de üretiliyor — sadece bir ekran yerine bir insan ve bir rapor üzerinden ulaşıyor.</p>
          </div>
        </div>
        <div className="steps">
          {steps.map(([n,t,d]) => (
            <article key={n} className="step"><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const m = [
    ['01','Gider paneli','Altı hizmet ailesinin aylık tüketimi tek ekranda. Baz maliyetle karşılaştırmalı tasarruf eğrisi, hedefe uzaklık ve sapma uyarıları.'],
    ['02','Maliyet merkezi kırılımı','Her kalemin hangi departmana, lokasyona ve maliyet merkezine düştüğü. Bütçe sahibi kendi satırını kendi görür.'],
    ['03','Talep ve onay akışı','Yeni araç, kart limiti, seyahat ya da işe alım talebi panelden açılır; onay zinciri kayıt altında ilerler.'],
    ['04','Belge ve sözleşme arşivi','Poliçeler, İSG kayıtları, kira sözleşmeleri ve teşvik dosyaları tek yerde; yenileme tarihleri otomatik hatırlatmalı.'],
    ['05','Denetim izi','Kim ne zaman hangi kaydı gördü ve değiştirdi. Bağımsız denetim ve iç kontrol talepleri için dışa aktarılabilir log.'],
    ['06','Rapor ve dışa aktarım','Aylık gider, tasarruf ve tedarikçi raporları; muhasebe fişi ve ERP entegrasyonu için standart formatta çıktı.']
  ];
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Kapsam</span>
          <div>
            <h2>Panelde ne olacak?</h2>
            <p className="lede">Panel bir İK yazılımı değil; gider görünürlüğü aracı. Tek amacı, konsolidasyonun getirdiği tasarrufu ölçülebilir ve denetlenebilir kılmak.</p>
          </div>
        </div>
        <div className="principles">
          {m.map(([n,t,d]) => (
            <article key={n} className="principle"><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Road() {
  const r = [
    ['Şimdi','Manuel operasyon','Atanmış hizmet yöneticisi, tek fatura, aylık kalem bazlı gider raporu ve çeyreklik tasarruf gözden geçirmesi.','live'],
    ['Sonraki','Gider paneli — ilk sürüm','Salt okunur gider ve tasarruf ekranı, maliyet merkezi kırılımı, belge arşivi. Aktif müşterilere kademeli açılış.','next'],
    ['Sonra','Akış ve entegrasyon','Talep–onay akışları, denetim izi, ERP ve muhasebe entegrasyonu, tek oturum açma (SSO).','later']
  ];
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Yol haritası</span>
          <div>
            <h2>Sıralamayı müşterilerimizin talebi belirliyor.</h2>
            <p className="lede">Panel, mevcut müşterilerimizin ay sonu kapanışında en çok sorduğu üç soruya göre önceliklendiriliyor. Tarih taahhüdü vermiyoruz — çalışan bir sürümü olmadan duyurmayacağız.</p>
          </div>
        </div>
        <div className="road">
          {r.map(([tag,t,d,st]) => (
            <article key={t} className={`road-row ${st}`}>
              <span className="road-tag">{tag}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
              <span className="road-st">{st === 'live' ? <><Check size={12}/> Yürürlükte</> : <><Lock size={12}/> Geliştirmede</>}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sec() {
  return (
    <section className="sec" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="sec-head" style={{paddingTop:'clamp(72px,9vw,132px)',marginBottom:0}}>
          <span className="label">Güvenlik</span>
          <div>
            <h2>Panel de veriyi Türkiye'de tutacak.</h2>
            <p className="lede">Panel, bugünkü operasyonla aynı altyapı üzerinde çalışacak: Türkiye lokasyonlu ISO 27001 sertifikalı veri merkezi, rol bazlı erişim, hizmet aileleri arasında ayrıştırılmış yetki ve tam denetim izi. Ücret verisini gören ekip, filo verisini görmez.</p>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <a href={`${BASE}gizlilik.html`} className="arrowlink">Gizlilik Politikası <Arrow size={14}/></a>
              <a href={`${BASE}kvkk.html`} className="arrowlink">KVKK Aydınlatma Metni <Arrow size={14}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav active="panel"/>
    <Crumb here="Nord Panel"/>
    <PageHero
      label="Nord Panel · Yakında"
      title="Altı hizmet ailesinin gideri, tek ekranda."
      lede="Nord Panel, konsolide ettiğiniz destek hizmetlerinin tüketimini ve tasarrufunu gerçek zamanlı gösteren gider görünürlüğü panelidir. Geliştirme aşamasında; bugün aynı veriyi atanmış hizmet yöneticiniz ve aylık raporunuz üzerinden alıyorsunuz."
      facts={[['Durum','Geliştirmede'],['Bugünkü model','Hizmet yöneticisi + aylık rapor'],['Müşteriler için','Ücretsiz'],['Veri lokasyonu','Türkiye']]}
      cta={[['Yayına alınınca haber verin', '#iletisim', true],['Bugün nasıl çalışıyor?','#bugun']]}
    />
    <Mock/>
    <Today/>
    <Modules/>
    <Road/>
    <Sec/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
