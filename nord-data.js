/* nord-data.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
window.NORD_SEGMENTS = [['01', 'Menkul Değerler & Aracı Kurumlar', 'SPK lisanslı personel zorunluluğu, iç kontrol ve teftiş yapısı, yatırımcı şikâyet süreçleri. Kadronun büyük bölümü lisanslı olmak zorunda olduğu için işe alım ve özlük hatası doğrudan denetim bulgusuna dönüşür.', ['Bordro', 'İşe alım', 'Teknopark']], ['02', 'Portföy Yönetim Şirketleri', 'Dar ama yüksek nitelikli kadro, SPK raporlaması ve performansa bağlı ücretlendirme. Destek fonksiyonlarını içeride kurmak, yönetilen varlığa oranla orantısız bir sabit maliyet yaratır.', ['Bordro', 'Ücret yönetimi', 'Sağlık']], ['03', 'Ödeme & Elektronik Para Kuruluşları', 'TCMB ve BDDK denetimi, TÖDEB üyeliği, PCI-DSS ve ISO 27001/22301 sertifikasyon yükü. Uyum takvimi kaçırıldığında maliyet ceza olarak geri döner.', ['İSG & Sağlık', 'Bordro', 'Teknopark']], ['04', 'Fintech Girişimleri', 'Hızlı büyüyen kadro, lisans başvuru süreçleri ve yatırımcı raporlaması. Ekip iki katına çıkarken İK altyapısını sıfırdan kurmak, ürün ekibinden zaman çalar.', ['İK outsource', 'İşe alım', 'Yan haklar']], ['05', 'Teknoloji Şirketleri', 'Ar-Ge yoğun kadro, teknopark statüsü ve nitelikli personel rekabeti. Teşviklerin eksiksiz kullanılması çoğu zaman yıllık kârın kendisinden büyük bir kalemdir.', ['Teknopark', 'İşe alım', 'Yan haklar']], ['06', 'Dijital Bankalar', 'BDDK uyum yükü, çok katmanlı yetkilendirme ve yüksek hacimli işe alım. Regülasyonun gerektirdiği kadro derinliği, destek fonksiyonlarında hızla maliyet birikimine dönüşür.', ['Bordro', 'Sağlık & Sigorta', 'Seyahat']]];
window.NORD_REFS = [{
  name: 'Pionr',
  cat: 'Girişim & finansal altyapı',
  desc: '160.000 KOBİ\'yi tek finansal omurgaya bağlayan girişim kurucusu. Portföyündeki şirketlerin destek fonksiyonlarını Nord üzerinden yönetiyor.',
  url: 'https://pionr.com.tr/'
}, {
  name: 'Tahsildar',
  cat: 'Fintech · B2B tahsilat',
  desc: 'Bayi ve alt bayi tahsilatını tek platformda toplayan B2B ödeme orkestratörü. 50+ banka ve ödeme kuruluşu entegrasyonu.',
  url: 'https://tahsildar.com.tr/'
}, {
  name: 'Pratik İşlem',
  cat: 'Ödeme & elektronik para kuruluşu',
  desc: 'TCMB, BDDK ve TÖDEB lisanslı ödeme kuruluşu. PCI-DSS, ISO 27001, 22301 ve 20000-1 sertifikasyon kapsamında çalışıyor.',
  url: 'https://pratikislem.com.tr/'
}, {
  name: 'One Portföy',
  cat: 'Portföy yönetim şirketi',
  desc: 'SPK düzenlemesi altında faaliyet gösteren portföy yönetim şirketi. Nitelikli ve dar kadro yapısıyla destek fonksiyonlarını dışarıdan alıyor.',
  url: 'https://oneportfoy.com.tr/'
}, {
  name: 'Destek Yatırım',
  cat: 'Menkul değerler · aracı kurum',
  desc: 'Borsa, VİOP ve foreks işlemlerinde SPK lisanslı aracı kurum. Lisanslı kadro yoğunluğu nedeniyle özlük ve bordro hassasiyeti yüksek.',
  url: 'https://www.destekyatirim.com/'
}];
window.NORD_SERVICES = [{
  id: 'ik',
  segs: ['Aracı kurumlar', 'Portföy yönetimi', 'Dijital bankalar', 'Fintech'],
  slug: 'insan-kaynaklari',
  num: '01',
  short: 'İnsan Kaynakları',
  title: 'İnsan Kaynakları Çözümleri',
  heroTitle: 'İK operasyonunu devralır, sabit maliyeti değişkene çeviririz.',
  one: 'Bordro, özlük, işe alım ve performans süreçlerini uçtan uca devralarak iç ekibi büyütmeden kapasiteyi büyütür.',
  lever: 'Sabit İK maliyetini değişkene çevirir',
  lede: 'İşveren üzerindeki operasyonel İK yükünü uçtan uca devralırız. Kadro büyütmeden kapasitenizi artırır, bordro ve özlük risklerini uzmanlığımıza aktarırsınız.',
  facts: [['Hizmet sayısı', '7'], ['Tipik tasarruf aralığı', '%22–31'], ['Devralma süresi', '10–14 gün'], ['Fiyatlandırma', 'Çalışan başına aylık']],
  levers: [['%31', 'İK operasyon maliyeti', 'Bordro ve özlük operasyonunun iç ekiple yürütülmesine kıyasla toplam maliyet farkı.'], ['0', 'Mevzuat cezası riski', 'Yanlış hesaplama ve geç bildirim kaynaklı idari para cezaları sorumluluğumuzdadır.'], ['3,5×', 'İşe alım hızı', 'Havuz, ön eleme ve mülakat hattı hazır olduğu için pozisyon kapanma süresi kısalır.']],
  items: [['Dönemsel Proje Bazlı İK Danışmanlığı', 'Yeniden yapılanma, norm kadro, organizasyon şeması ve iş analizi gibi projelerde tam zamanlı danışman istihdam etmeden yalnızca proje süresince uzman kadroya erişirsiniz.', 'Tam zamanlı danışman maliyeti yerine proje bazlı ödeme'], ['Dış Kaynak Bordro Hizmeti', 'Ücret hesaplama, SGK ve vergi bildirimleri, e-bordro dağıtımı, kıdem–ihbar ve yasal kesintiler tarafımızca yürütülür. Mevzuat değişiklikleri otomatik uygulanır.', 'Bordro uzmanı istihdamı ve ceza riski ortadan kalkar'], ['Personel Seçme ve Yerleştirme', 'İlan yönetiminden ön elemeye, teknik mülakattan referans kontrolüne kadar tüm işe alım hattı. Pozisyon başına ücretlendirme uygulanır.', 'Boş kadronun üretim kaybı maliyeti kısalır'], ['Bulut Tabanlı İK Yönetimi', 'Özlük, izin, avans, harcama, zimmet, puantaj ve vardiya tek platformda toplanır. Lisans, sunucu ve bakım maliyeti Nord tarafındadır.', 'Yazılım lisans ve altyapı yatırımı gerekmez'], ['Performans ve Ücret Yönetimi Danışmanlığı', 'Hedef ve OKR kurgusu, 360° değerlendirme sistemi, kademe–bant yapısı ve piyasa ücret kıyaslaması ile ücret bütçesini veriye dayalı yönetirsiniz.', 'Ücret bütçesi sapması veriyle kontrol altına alınır'], ['İşten Ayrılma Yönetimi', 'Çıkış mülakatı, yasal fesih dosyası, ibraname, kıdem hesaplaması ve outplacement desteği tek elden yürütülür.', 'İş davası ve tazminat riski belirgin biçimde düşer'], ['Yetenek Değerlendirme', 'Kişilik ve yetkinlik envanterleri, değerlendirme merkezi uygulamaları ve referans kontrolü ile işe alım kararı ölçüme dayanır.', 'Hatalı işe alımın yıllık ücret katındaki maliyeti önlenir']]
}, {
  id: 'filo',
  segs: ['Ödeme kuruluşları', 'Dijital bankalar', 'Teknoloji şirketleri'],
  slug: 'filo-yakit',
  num: '02',
  short: 'Filo & Yakıt',
  title: 'Kurumsal Araç Filo ve Yakıt Çözümleri',
  heroTitle: 'Filoyu bilançodan çıkarır, gideri öngörülebilir kılarız.',
  one: 'Araç edinme, bakım, yakıt ve hasar süreçlerini tek aylık bedele dönüştürerek sermayenizi serbest bırakır.',
  lever: 'Filoyu bilançodan çıkarır',
  lede: 'Araç satın alıp amorti etmek yerine kullandığınız kadar ödersiniz. Sermaye bağlanmaz, ikinci el riski size ait olmaz, aylık gider sabit ve tahmin edilebilir hale gelir.',
  facts: [['Hizmet sayısı', '5'], ['Tipik tasarruf aralığı', '%19–28'], ['Devralma süresi', '14–21 gün'], ['Fiyatlandırma', 'Araç başına aylık']],
  levers: [['%100', 'Bilanço dışı', 'Operasyonel kiralamada araç varlık olarak bilançonuzda yer almaz; sermaye ana işinizde kalır.'], ['%14', 'Yakıt tüketimi', 'Araç takip ve sürücü davranışı raporlamasının tipik olarak sağladığı tüketim iyileşmesi.'], ['0', 'İkinci el riski', 'Araçların elden çıkarma değeri ve piyasa dalgalanması riski Nord tarafındadır.']],
  items: [['Uzun/Kısa Dönem Operasyonel Kiralama', 'Araç yatırımı, sigorta, vergi, bakım ve ikinci el satış riski tek aylık bedele dönüşür. Bilanço dışı yapı sayesinde sermaye ana işinizde kalır.', 'Peşin araç yatırımı yerine öngörülebilir aylık gider'], ['Filo Yönetimi ve Araç Takip Sistemi', 'Konum, rota, hız, rölanti ve sürücü davranışı raporlaması ile filo verimliliği ölçülebilir hale gelir.', 'Yakıt tüketimi ve kaza sıklığında ölçülebilir düşüş'], ['Kurumsal Yakıt ve HGS Yönetimi', 'Tek kart, tek fatura, plaka ve maliyet merkezi bazlı limit tanımı. Harcama kalem kalem raporlanır.', 'Kişisel kullanım sızıntısı kapanır'], ['Bakım, Lastik, Hasar ve Kaza Süreç Yönetimi', 'Periyodik bakım planlaması, mevsimlik lastik, hasar dosyası ve eksper takibi tek elden yürütülür.', 'Araç kullanım dışı kalma süresi kısalır'], ['Şirket Araç Satın Alma Danışmanlığı', 'Satın almanın kiralamaya karşı toplam sahip olma maliyeti analizi, marka–model seçimi ve tedarikçi pazarlığı.', 'Yanlış edinim kararının uzun vadeli maliyeti önlenir']]
}, {
  id: 'yanhak',
  segs: ['Fintech', 'Teknoloji şirketleri', 'Dijital bankalar'],
  slug: 'yan-haklar',
  num: '03',
  short: 'Yan Hak Kartları',
  title: 'Yemek, Hediye ve Yan Hak Kartı Çözümleri',
  heroTitle: 'Aynı yan hakkı, vergi avantajıyla daha düşük maliyete veririz.',
  one: 'Yemek, hediye, market ve prim ödemelerini istisna tanımlı kart altyapısına taşıyarak işveren maliyetini düşürür.',
  lever: 'Vergi avantajıyla net maliyeti düşürür',
  lede: 'Yan hakları nakit yerine vergi istisnası tanımlı enstrümanlarla vermek, aynı çalışan memnuniyetini daha düşük işveren maliyetiyle sağlar. Tüm kartlar tek panelden yönetilir.',
  facts: [['Hizmet sayısı', '4'], ['Tipik tasarruf aralığı', '%12–19'], ['Devralma süresi', '7–10 gün'], ['Fiyatlandırma', 'Kart başına aylık']],
  levers: [['İstisna', 'Vergi avantajı', 'Yasal sınır içindeki yemek bedeli gelir vergisi ve SGK priminden muaf olarak yüklenir.'], ['1', 'Tek panel', 'Tüm kart tipleri, yükleme takvimi ve harcama raporu tek arayüzden yönetilir.'], ['%0', 'Lojistik yükü', 'Fiziksel dağıtım, zarflama ve teslim takibi gerektirmeyen dijital yükleme.']],
  items: [['Mobil/Fiziki Yemek Kartı', 'Günlük yemek bedeli, yasal istisna sınırı içinde gelir vergisi ve SGK priminden muaf biçimde yüklenir.', 'Nakit ödemeye kıyasla işveren maliyeti belirgin düşer'], ['Kurumsal Hediye Kartı', 'Bayram, yılbaşı ve özel gün ödemeleri tek seferde yüklenir, harcama kategorisi kısıtlanabilir.', 'Ayni yardım avantajı korunur, lojistik yükü kalkar'], ['Market ve Akaryakıt Kartı', 'Enflasyon desteği ve ulaşım yardımı gibi kalemler amaca özel kartlara aktarılır.', 'Harcama kategorisi kilitli olduğundan bütçeden sapma olmaz'], ['Prim, Motivasyon ve Kampanya Puan Programları', 'Satış ve bayi kanalı için puan bazlı ödüllendirme altyapısı; hedef–ödül ilişkisi otomatik hesaplanır.', 'Prim bütçesinin geri dönüşü ölçülebilir hale gelir']]
}, {
  id: 'saglik',
  segs: ['Ödeme kuruluşları', 'Aracı kurumlar', 'Dijital bankalar'],
  slug: 'saglik-sigorta',
  num: '04',
  short: 'Sağlık & Sigorta',
  title: 'Kurumsal Sağlık, Sigorta ve Refah Çözümleri',
  heroTitle: 'Engellenen maliyet, harcanan maliyetten büyüktür.',
  one: 'Grup sağlık, İSG yükümlülüğü, EAP ve BES süreçlerini tek pakette toplayarak devamsızlık ve ceza riskini azaltır.',
  lever: 'Devamsızlık ve yasal ceza maliyetini azaltır',
  lede: 'Sağlık ve güvenlik yatırımı gider değil, engellenen maliyettir. İSG yükümlülüğünün ihlali idari para cezası, iş kazası ise tazminat ve üretim kaybı doğurur.',
  facts: [['Hizmet sayısı', '6'], ['Tipik tasarruf aralığı', '%15–24'], ['Devralma süresi', '14–21 gün'], ['Fiyatlandırma', 'Çalışan başına aylık']],
  levers: [['%11', 'Grup poliçe primi', 'Konsolide hacim üzerinden pazarlık edilen grup poliçesinin bireysel poliçeye kıyasla kişi başı farkı.'], ['Tam', 'Yasal uyum', 'Tehlike sınıfınıza uygun işyeri hekimi ve İSG uzmanı görevlendirmesi eksiksiz karşılanır.'], ['7/24', 'EAP erişimi', 'Psikolojik, hukuki ve finansal danışmanlığa gizli ve sınırsız erişim.']],
  items: [['Grup Özel Sağlık ve Tamamlayıcı Sağlık Sigortası', 'Konsolide çalışan hacmi üzerinden pazarlık edilen grup poliçesi, bireysel poliçeye göre kişi başı belirgin şekilde ucuzdur.', 'Hastalık kaynaklı devamsızlık süresi kısalır'], ['İşyeri Hekimliği ve İş Güvenliği Uzmanlığı', 'Tehlike sınıfınıza uygun yasal görevlendirme, risk değerlendirmesi, acil durum planı ve periyodik muayeneler.', 'Denetim kaynaklı idari para cezası riski ortadan kalkar'], ['Çalışan Destek Programı (EAP)', 'Psikolojik, hukuki ve finansal danışmanlığa 7/24 gizli erişim sağlanır.', 'Tükenmişlik kaynaklı verim kaybı ve istifa oranı düşer'], ['Grup Emeklilik / BES ve Otomatik Katılım', 'Zorunlu otomatik katılım yönetimi ve işveren katkılı grup BES kurgusu tek elden yürütülür.', 'Katkı payının vergi matrahından indirimi kullanılır'], ['Ferdi Kaza, Hayat ve Seyahat Sağlık Sigortası', 'Saha, üretim ve yurt dışı görevlendirmelerinde zorunlu ya da kritik teminatlar sağlanır.', 'Beklenmedik olayın doğrudan mali yükü sınırlanır'], ['Kurumsal Spor ve Wellness Üyeliği', 'Çok merkezli esnek üyelik modeli ile düzenli fiziksel aktivite desteklenir.', 'Sağlık harcaması ve devamsızlıkta ölçülebilir azalma']]
}, {
  id: 'seyahat',
  segs: ['Aracı kurumlar', 'Portföy yönetimi', 'Fintech'],
  slug: 'seyahat',
  num: '05',
  short: 'Seyahat Yönetimi',
  title: 'Kurumsal Seyahat ve Harcama Yönetimi',
  heroTitle: 'Politika dışı harcamayı kaynağında keseriz.',
  one: 'Rezervasyon, onay akışı, vize ve organizasyon süreçlerini merkezileştirerek seyahat bütçesini kontrol altına alır.',
  lever: 'Politika dışı harcamayı kaynağında keser',
  lede: 'Seyahat, çoğu şirkette personel giderinden sonraki en büyük kontrol edilebilir kalemdir. Politika bazlı onay akışı ve merkezî rezervasyon, bu kalemi tahmin edilebilir hale getirir.',
  facts: [['Hizmet sayısı', '4'], ['Tipik tasarruf aralığı', '%17–26'], ['Devralma süresi', '7–14 gün'], ['Fiyatlandırma', 'İşlem başına']],
  levers: [['%23', 'Bilet maliyeti', 'Kurumsal anlaşmalı fiyat ve erken rezervasyon disiplininin sağladığı tipik tasarruf.'], ['Önce', 'Kontrol noktası', 'Politika dışı talep sisteme hiç girmez; kontrol harcama sonrasına bırakılmaz.'], ['7/24', 'Operasyon desteği', 'Uçuş değişikliği, iptal ve acil durumlarda kesintisiz erişim.']],
  items: [['Uçak, Otel ve Araç Rezervasyon Yönetimi', 'Kurumsal anlaşmalı fiyatlar ve 7/24 rezervasyon desteği ile tüm seyahat tek noktadan planlanır.', 'Son dakika bilet farkı ve iptal maliyeti azalır'], ['Seyahat Politikası Kurgusu ve Onay Akışı', 'Kademe bazlı bütçe limitleri, sınıf kuralları ve dijital onay zinciri tasarlanır.', 'Politika dışı harcama daha oluşmadan engellenir'], ['Vize, Pasaport ve Transfer Operasyonu', 'Randevu, evrak hazırlığı, takip ve havalimanı transferi tek elden yürütülür.', 'Reddedilen vize ve kaçan uçuş kaynaklı kayıplar önlenir'], ['Toplantı ve Kongre Organizasyonu', 'Bayi toplantısı, lansman ve kongre için mekân, konaklama, ulaşım ve teknik kurulum.', 'Toplu satın alma ile etkinlik bütçesi disipline girer']]
}, {
  id: 'teknopark',
  segs: ['Fintech', 'Teknoloji şirketleri', 'Ödeme kuruluşları'],
  slug: 'teknopark',
  num: '06',
  short: 'Teknopark',
  title: 'Teknopark Çözümleri',
  heroTitle: 'Ar-Ge teşviklerini eksiksiz kullandırırız.',
  one: 'Proje yazımından portal yönetimine ve denetime hazırlığa kadar teknopark statüsünün tüm gerekliliklerini yönetir.',
  lever: 'Ar-Ge teşvik ve istisnalarını eksiksiz kullandırır',
  lede: 'Teknopark statüsü doğru yönetildiğinde kurumlar vergisi istisnası, gelir vergisi stopaj teşviki ve SGK işveren payı desteği anlamına gelir. Yanlış yönetildiğinde ise geri ödeme ve ceza riskidir.',
  facts: [['Hizmet sayısı', '7'], ['Tipik tasarruf aralığı', '%24–38'], ['Devralma süresi', '21–30 gün'], ['Fiyatlandırma', 'Proje ve aylık portal']],
  levers: [['İstisna', 'Kurumlar vergisi', 'Ar-Ge kazançlarına tanınan istisnanın eksiksiz ve sürdürülebilir biçimde kullanılması.'], ['%100', 'Bildirim uyumu', 'Portal bildirimlerinin zamanında ve doğru işlenmesi teşvikin devamlılığının ön koşuludur.'], ['0', 'Geri ödeme riski', 'Eksik dosya kaynaklı geçmişe dönük teşvik iadesi riski denetime hazırlıkla ortadan kalkar.']],
  items: [['Teknopark Proje Yazımı Danışmanlığı', 'Ar-Ge niteliği kabul görecek proje dosyasının hazırlanması ve hakem sürecinin yönetimi.', 'Reddedilen proje, kaybedilen vergi istisnası demektir'], ['Aylık Teknopark Portal Yönetimi', 'Personel giriş–çıkış, puantaj, proje zaman çizelgesi ve aylık bildirimlerin portala eksiksiz işlenmesi.', 'Teşvikin kesintisiz devamlılığı güvence altına alınır'], ['Teknopark Personeline Özgü Eğitim Tedariki', 'Ar-Ge kadrosunun teknik yetkinlik eğitimleri ve mevzuat bilgilendirmeleri.', 'Nitelikli personel kaybı, teşvik kaybıyla birlikte gelir'], ['Bölgeye Giriş ve Şirket Kuruluş Danışmanlığı', 'Başvuru dosyası, yönetici şirket görüşmeleri, kuruluş ve ofis tahsis süreci yönetilir.', 'İlk günden itibaren istisnadan yararlanma sağlanır'], ['Proje Sonuç Raporu ve Denetime Hazırlık', 'Bitirme belgesi, sonuç raporu ve Bakanlık denetimine hazırlık dosyası hazırlanır.', 'Geçmişe dönük teşvik iadesi riski ortadan kalkar'], ['Fikri Mülkiyet Yönetimi', 'Yazılım tescili, patent, faydalı model ve marka başvuruları yürütülür.', 'Şirket değerlemesi yükselir, ek istisnalara kapı açılır'], ['Nitelikli Ar-Ge Personeli Tedariki', 'Teşvik kapsamına uygun profilde teknik kadro temin edilir.', 'Desteğin tam oranda kullanılması sağlanır']]
}];
})();
