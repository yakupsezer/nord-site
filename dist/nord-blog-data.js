/* nord-blog-data.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
window.NORD_POSTS = [{
  slug: 'sgk-tesvikleri',
  cat: 'Teşvikler',
  date: '24 Temmuz 2026',
  mins: 9,
  title: 'SGK teşvikleri: finans ve teknoloji şirketleri için 2026 haritası',
  dek: '2026 başında imalat dışı prim indirimi yarıya düştü. Aynı yıl işveren payı bir puan arttı. Finans ve teknoloji şirketleri için bu iki değişikliğin telafisi, kullanılmayan teşvik kalemlerinde duruyor.',
  body: [{
    p: ['SGK prim teşvikleri Türkiye\'de on dörtten fazla ayrı kalemden oluşuyor ve bunların önemli bölümü 5510 ile 4447 sayılı kanunlara dayanıyor. Bu kalabalık liste, yararlanma oranını yükseltmiyor; tersine düşürüyor. Çoğu kurum listenin tamamını incelemek yerine en bilinen bir iki kalemle yetiniyor.', '2026, bu yetinmenin maliyetini artıran bir yıl oldu.']
  }, {
    h: '2026\'da iki şey aynı anda değişti',
    p: ['Birincisi: imalat dışı sektörlerde uygulanan malullük, yaşlılık ve ölüm sigortası işveren hissesi indirimi dört puandan iki puana düşürüldü. İmalat sektöründeki beş puanlık indirim ise yıl sonuna kadar aynen devam ediyor. Finans, fintech, portföy yönetimi ve yazılım şirketleri tanım gereği imalat dışında; yani bu değişiklikten doğrudan etkilenen tarafta.', 'İkincisi: aynı sigorta kolunda işveren payı bir puan arttı. İki değişiklik birleştiğinde, imalat dışı bir işveren için çalışan başına prim maliyeti üç puan yukarı gitti.', 'Üç puan, tek bir çalışanda küçük görünür. İki yüz kişilik bir kadroda yıllık tutar, orta ölçekli bir kurumun tüm yan hak bütçesine yaklaşır.']
  }, {
    quote: 'Prim oranı bir yılda üç puan arttığında, teşvik taraması artık iyileştirme değil telafi kalemidir.'
  }, {
    h: 'Kadro bazlı teşvikler: en çok kaçırılan grup',
    p: ['Oran bazlı indirimler otomatik işler; kadro bazlı teşvikler işlemez. Bunlar başvuru, belge ve doğru kod seçimi gerektirir — ve tam bu yüzden atlanır.'],
    list: ['Genç ve kadın istihdamı teşviki — son altı aydır işsiz olan, on sekiz yaşından büyük bir kadını ya da genci ortalama sigortalı sayısına ilave olarak işe aldığınızda, mesleki yeterlilik belgesi durumuna göre altı ilâ elli dört ay boyunca işveren primi desteklenir', 'İşsizlik ödeneği alanların istihdamı — işsizlik ödeneği almakta olan bir sigortalıyı işe aldığınızda, ödeneğe hak kazandığı süre boyunca uzun vadeli sigorta primleri ile genel sağlık sigortası priminin tamamı İşsizlik Sigortası Fonu\'ndan karşılanır', 'Asgari ücret desteği — şartları sağlayan işyerlerinde 2026 boyunca, prim ödeme gün sayısı ile günlük destek tutarının çarpımı kadar tutar ödenecek primlerden mahsup edilir', 'Engelli sigortalı teşviki — kontenjan dahilinde ve kontenjan fazlası engelli çalışan için işveren prim hissesinde destek uygulanır', 'Ar-Ge ve tasarım personeli desteği — 5746 sayılı Kanun kapsamındaki personel için sigorta primi işveren hissesinin yarısı bütçeden karşılanır']
  }, {
    h: 'Yazılım geliştiren finans şirketi iki teşvik alanının kesişiminde',
    p: ['Bir ödeme kuruluşu ya da aracı kurum, kendi yazılımını geliştiren bir kadro taşıyorsa hem genel prim teşviklerine hem de Ar-Ge personeli desteğine bakma hakkına sahiptir. Pratikte bu iki alan farklı kişiler tarafından takip edilir: prim teşvikleri bordroyu tutan tarafta, Ar-Ge dosyası ise mali müşavir ya da danışman tarafında.', 'İki tarafın konuşmadığı her ay, hesap mükerrer ya da eksik çıkar. Aynı personel için iki farklı teşvik kalemi birlikte kullanılamayacağında, hangisinin daha yüksek fayda verdiğinin ay bazında karşılaştırılması gerekir. Bu karşılaştırma yapılmadığında tercih genellikle önce girilen koda göre oluşur — yani tesadüfen.']
  }, {
    h: 'Yararlanmanın önkoşulları basit ama affetmiyor',
    p: ['Teşvik hakkı doğmuş olsa bile üç koşul sağlanmadığında kullanılamaz: muhtasar ve prim hizmet beyannamesinin yasal süresi içinde verilmiş olması, kuruma yasal ödeme süresi geçmiş prim borcu bulunmaması ve kayıt dışı sigortalı çalıştırıldığının tespit edilmemiş olması.', 'Üçüncü koşulun sonucu en ağırdır: kayıt dışı çalıştırma ya da sahte sigortalı bildirimi tespit edildiğinde, o güne kadar yararlanılan destek geri alınır ve tespit tarihinden sonra destek verilmez. Eksik prime esas kazanç bildirimi ise belirli bir tutarın altında kaldığında ihtar ve on beş günlük düzeltme süresiyle telafi edilebilir.', 'Bu nedenle teşvik yönetimi bir hesap işi olmaktan önce bir uyum işidir. Beyanname takvimini kaçıran bir kurum, hesabı doğru yapsa da parayı alamaz.']
  }, {
    h: 'Geriye dönük tarama',
    p: ['Teşvik kodu yanlış seçildiği ya da hiç seçilmediği için kullanılmamış dönemler, mevzuatın izin verdiği sınırlar içinde geriye dönük olarak düzeltilebilir. Bunun için yapılması gereken, geçmiş bildirim dönemlerinin kadro hareketleriyle birlikte yeniden taranmasıdır: kim, hangi ayda hangi teşvike uygundu ve o ay hangi kod bildirildi?', 'Bu tarama tek seferlik bir çalışmadır ve genellikle beklenenden yüksek bir tutar çıkarır. Devraldığımız kurumların önemli bölümünde ilk üç aylık taramanın sonucu, bir yıllık hizmet bedelinden fazla oldu.']
  }, {
    h: 'Teşvik takibi bordronun içinde olmalı',
    p: ['Teşvik hesabının girdileri bordroda oluşur: işe giriş ve çıkış tarihleri, ortalama sigortalı sayısı, ücret değişiklikleri, belge durumları. Çıktısı ise ayrı bir yerde bildirilir. Bu iki iş farklı tedarikçilerde olduğunda her ay bir veri aktarımı, bir mutabakat ve bir gecikme riski doğar.', 'Aynı çatı altında olduğunda tarama aylık rutine dönüşür: her ay yeni işe alımlar teşvik uygunluğu açısından kontrol edilir, biten süreler kapatılır ve kalan hak tutarı gider raporunda bir satır olarak görünür.', 'Nord\'un İnsan Kaynakları hizmet ailesi bu iki işi tek yerde yürütüyor. 2026\'daki üç puanlık artışı geri kazanmanın yolu yeni bir kalemde tasarruf etmek değil; halihazırda hakkınız olan kalemi kullanmak.']
  }]
}, {
  slug: 'destek-hizmetleri-gizli-maliyeti',
  cat: 'Gider yönetimi',
  date: '14 Temmuz 2026',
  mins: 7,
  title: 'Destek hizmetlerinin faturada görünmeyen maliyeti',
  dek: 'Dokuz tedarikçiyle çalışmanın bedeli, dokuz faturanın toplamından fazladır. Görünmeyen kısmı ölçmenin bir yolu var.',
  body: [{
    p: ['Bir CFO destek hizmetleri bütçesine baktığında gördüğü şey, tedarikçilerin kestiği faturaların toplamıdır. Bu toplam, gerçek maliyetin yalnızca bir kısmıdır. Geri kalanı kendi ekibinizin zamanında, muhasebe kapanışının uzunluğunda ve yenilenmeyi kaçırdığınız sözleşmelerin cezasında saklıdır.']
  }, {
    h: 'Yönetim yükü bir maliyet kalemidir',
    p: ['Orta ölçekli bir kurum bordro, filo, yakıt, yemek kartı, grup sağlık poliçesi, İSG, seyahat ve işe alım için ortalama yedi ilâ on bir ayrı tedarikçiyle çalışır. Bu tedarikçilerin her biri ayrı bir sözleşme, ayrı bir muhatap, ayrı bir fatura ve ayrı bir mutabakat demektir.', 'Bir mutabakatın ortalama süresi kalem sayısına göre değişir; ancak dokuz tedarikçili bir yapıda muhasebe ekibinin ay sonu kapanışına yalnızca destek hizmetleri için ayırdığı süre, tek tedarikçili bir yapıya kıyasla belirgin biçimde uzundur. Bu süre bir gider satırında görünmez, ama bir maaş bordrosunda görünür.']
  }, {
    h: 'Ölçek avantajını kim kullanıyor?',
    p: ['Kırk araçlık bir filo, kiralama şirketi için küçük bir portföydür. Aynı kırk araç, üç yüz araçlık bir havuzun parçası olduğunda farklı bir fiyat listesine tabi olur. Aynı mantık grup sağlık poliçesinde, yemek kartı komisyonunda ve otel anlaşmalarında da geçerlidir.', 'Tek başına pazarlık eden bir kurum, kendi hacmiyle sınırlıdır. Konsolide bir yapı üzerinden alım yaptığında, kendi hacminin değil havuzun hacminin fiyatını alır. Aradaki fark, hizmet kalitesinden ödün vermeden doğan net tasarruftur.']
  }, {
    h: 'Yenilenme takvimi kimsenin sorumluluğunda değilse',
    p: ['Sekiz ayrı sözleşmenin sekiz ayrı yenilenme tarihi vardır. Bu tarihlerin takibi genellikle kimsenin resmî görev tanımında yer almaz; idari işler ile satın alma arasında kalır.', 'Sonuç tanıdıktır: otomatik yenilenen bir poliçe, pazarlık penceresi kaçırıldığı için bir önceki yılın koşullarıyla değil, tedarikçinin tek taraflı güncellediği koşullarla devam eder. Bu, faturada bir artış olarak görünür ama nedeni faturada yazmaz.']
  }, {
    quote: 'Dağınık tedarikte fiyat pazarlığı yılda bir yapılır; konsolide tedarikte her ay yapılır.'
  }, {
    h: 'Görünmeyeni nasıl ölçersiniz?',
    p: ['Basit bir egzersizle başlayın. Son on iki ayın destek hizmeti faturalarını tek bir tabloda toplayın ve her satırın yanına üç şey yazın: sözleşme yenileme tarihi, kurum içinde bu tedarikçiyi yöneten kişi ve o kalemin son on iki aydaki birim fiyat değişimi.', 'Tablo tamamlandığında iki şey ortaya çıkar. Birincisi, aynı işi yapan mükerrer hizmetler; ikincisi, hiç kimsenin sahiplenmediği kalemler. Bu iki grup, tasarruf potansiyelinin büyük bölümünü barındırır.']
  }, {
    h: 'Konsolidasyon bir satın alma kararı değil, bir yapı kararıdır',
    p: ['Tedarikçi sayısını azaltmak tek başına tasarruf getirmez; hangi kalemin hangi ölçekte alındığını, kimin sahiplendiğini ve hangi baz maliyetle karşılaştırıldığını bilmek getirir.', 'Nord\'un modeli bu üç soruyu tek muhatapta birleştirir: altı hizmet ailesi, tek fatura, tek mutabakat ve devir öncesi baz maliyetle karşılaştırmalı çeyreklik gözden geçirme. Tasarruf oranı sözleşmeye yazılır; ölçüm yöntemi de.']
  }]
}, {
  slug: 'regule-kurumlarda-outsource',
  cat: 'Regülasyon',
  date: '2 Temmuz 2026',
  mins: 8,
  title: 'Regüle kurumlarda dış kaynak: nereye kadar mümkün?',
  dek: 'SPK, BDDK ve TCMB lisanslı kurumlar için dış kaynak kullanımının sınırı, hizmetin kendisi değil sorumluluğun kimde kaldığıdır.',
  body: [{
    p: ['Lisanslı bir kurumda "bunu dışarıya verebilir miyiz?" sorusunun cevabı hizmetin adına değil, o hizmetin regülasyon karşısındaki konumuna bağlıdır. Destek fonksiyonlarının büyük bölümü dış kaynağa açıktır; ancak açık olması, sorumluluğun devredildiği anlamına gelmez.']
  }, {
    h: 'Sorumluluk devredilemez, operasyon devredilebilir',
    p: ['Dış kaynak kullanımına ilişkin düzenlemelerin ortak mantığı şudur: kurum, dışarıya verdiği hizmetin sonuçlarından kendi denetim otoritesine karşı sorumlu kalır. Bordro hesaplaması dışarıda yapılıyor olabilir; SGK bildiriminin süresinde ve doğru yapılmamasının sonucu kurumun üzerindedir.', 'Bu, dış kaynak kullanımını engellemez. Sadece tedarikçi seçim kriterini değiştirir: fiyat tek başına yeterli bir kriter değildir, hata durumunda sorumluluğun nasıl paylaşıldığı da sözleşmede yazılı olmalıdır.']
  }, {
    h: 'Denetime hazır olmak nedir?',
    p: ['Bir denetim döneminde istenen şey genellikle üç şeydir: kaydın kendisi, kaydın kim tarafından ne zaman oluşturulduğu ve o kayda kimlerin eriştiği.'],
    list: ['Kayıt bütünlüğü — personel dosyaları, ücret bordroları ve özlük belgelerinin eksiksiz ve tutarlı olması', 'Denetim izi — hangi kaydın ne zaman değiştirildiğinin geriye dönük izlenebilmesi', 'Erişim kısıtı — ücret ve sağlık verisine yalnızca görevi gereği ihtiyaç duyanların erişebilmesi', 'Süre uyumu — yasal bildirimlerin mevzuatta öngörülen süre içinde tamamlanmış olması', 'Devir planı — hizmet ilişkisi sona erdiğinde verinin nasıl ve hangi formatta geri alınacağının tanımlı olması']
  }, {
    h: 'Lisanslı personelin özlük hassasiyeti',
    p: ['Aracı kurumlarda ve portföy yönetim şirketlerinde kadronun önemli bir bölümü lisanslıdır. Bu, özlük dosyasının içeriğini genişletir: lisans geçerlilik tarihleri, yenileme eğitimleri ve görev değişikliklerinin kayda alınması bordro kadar takip gerektirir.', 'Bu takibi genel amaçlı bir İK hizmeti üzerinden yürütmek mümkündür ama verimli değildir. Segmentin kendi gerekliliklerini bilen bir yapı, aynı işi daha az sorgu ve daha az düzeltme turuyla tamamlar.']
  }, {
    h: 'Veri lokasyonu ve alt işleyenler',
    p: ['Regüle kurumlar için dış kaynak değerlendirmesinin en sık gözden kaçan başlığı alt işleyenlerdir. Tedarikçinizin kendi tedarikçileri, sizin veri zincirinizin parçasıdır.', 'Sorulması gereken sorular nettir: veri hangi ülkede tutuluyor, hangi alt işleyenler zincirde yer alıyor, bu alt işleyenlerle aranızda veri işleme sözleşmesi var mı ve ihlal durumunda bildirim süresi kaç saat?']
  }, {
    quote: 'Dış kaynak, sorumluluğu değil yalnızca operasyonu taşır. Sözleşme bu ayrımı yazmıyorsa, taşımadığı şeyi de taşıdığını sanırsınız.'
  }, {
    h: 'Değerlendirme listesi',
    p: ['Bir destek hizmetini dış kaynağa verirken şu beş maddeyi sözleşmede aramak, sonradan yaşanacak sürprizlerin büyük bölümünü ortadan kaldırır: hizmet seviyesi taahhüdü ve ölçüm yöntemi; hata durumunda sorumluluk paylaşımı; veri lokasyonu ve alt işleyen listesi; denetim izi erişimi; sözleşme sonu devir yükümlülüğü ve süresi.', 'Bu beş madde yazılıysa, dış kaynak regüle bir kurum için risk değil, kontrollü bir maliyet kararıdır.']
  }]
}, {
  slug: 'tesvik-ve-ar-ge',
  cat: 'Teşvikler',
  date: '18 Haziran 2026',
  mins: 6,
  title: 'Kullanılmayan teşvik, ödenmiş vergidir',
  dek: 'Teknopark ve Ar-Ge teşviklerinin büyük bölümü uygunluk şartı taşıyan kurumlar tarafından kullanılmıyor. Sebep genellikle bilgi değil, süreç.',
  body: [{
    p: ['Fintech ve teknoloji şirketleriyle yapılan ilk görüşmelerde tekrar eden bir tablo var: yazılım geliştirme kadrosu Ar-Ge teşvikine uygun, ancak teşvik ya hiç kullanılmıyor ya da uygun personelin bir kısmı için kullanılıyor. Kaybedilen tutar, çoğu zaman bir yıllık destek hizmetleri bütçesinden büyüktür.']
  }, {
    h: 'Neden kullanılmıyor?',
    p: ['Sebep bilgi eksikliği değil. Şirketler teşvikin varlığını biliyor. Kullanmamalarının nedeni süreç yükü: proje tanımının yazılması, personelin projelere doğru oranlarla dağıtılması, zaman takibinin belgelenmesi ve portal bildirimlerinin düzenli yapılması gerekiyor.', 'Bu iş, teknik ekibin zamanını alır ve teknik ekibin yapmak istediği son iştir. Sonuç olarak dosya ya hiç açılmaz ya da açılır ama eksik beslenir; eksik beslenen dosya ise denetimde risk oluşturur.']
  }, {
    h: 'Doğru soru: hangi personel, hangi projede, ne kadar?',
    p: ['Teşvik hesabının temeli üç veridir: uygun personel listesi, tanımlı projeler ve personelin projelere ayırdığı zamanın oranı. Bu üç veri doğruysa hesap tartışmasızdır.', 'Pratikte zorlaşan kısmı üçüncüsüdür. Aynı geliştirici hem teşvike uygun bir projede hem de rutin bakım işinde çalışıyorsa, bu ayrımın belgelenmesi gerekir. Belgelenmediğinde tercih genellikle en muhafazakâr orandan yana yapılır ve teşvik olduğundan az kullanılır.']
  }, {
    h: 'Bordroyla teşvikin aynı yerde olması',
    p: ['Teşvik hesabı bordronun bir fonksiyonudur. Personel giriş–çıkışları, ücret değişiklikleri ve proje atamaları bordroda oluşur; teşvik bildirimi ise ayrı bir portalda yapılır.', 'Bu iki işin ayrı tedarikçilerde olması, her ay bir veri aktarımı ve bir mutabakat gerektirir. Aynı yerde olduğunda hesap otomatik akar ve uygunluk kaybı ihtimali düşer.']
  }, {
    quote: 'Teşvik, doğru hesaplandığında bir gelir kalemi değil; hesaplanmadığında bir gider kalemidir.'
  }, {
    h: 'Nereden başlanır?',
    p: ['İlk adım bir uygunluk taramasıdır: mevcut kadronun hangi bölümü hangi teşvik kalemine uygun, geçmiş dönemler için düzeltme imkânı var mı ve dosyanın açılması için hangi belgeler eksik?', 'Bu tarama tek başına bir maliyet kalemi yaratmaz; sonucu net bir tutar olarak görüldüğünde, süreç yükünü kimin taşıyacağı sorusu da kendiliğinden cevaplanır.']
  }]
}, {
  slug: 'yan-haklarda-maliyet-dengesi',
  cat: 'Yan haklar',
  date: '5 Haziran 2026',
  mins: 5,
  title: 'Yan haklarda maliyeti düşürmek, paketi küçültmek değildir',
  dek: 'Yemek kartı komisyonu, poliçe kapsamı ve kart altyapısı doğru pazarlandığında çalışan aynı paketi alır, kurum daha az öder.',
  body: [{
    p: ['Yan hak bütçesinde tasarruf denince ilk akla gelen paketi küçültmektir. Bu, en pahalı yöntemdir: kısa vadede gider düşer, orta vadede işten ayrılma oranı yükselir ve işe alım maliyeti artar.']
  }, {
    h: 'Aynı paket, farklı fiyat',
    p: ['Yan hak maliyetinin önemli bir bölümü paketin içeriğinden değil, altyapı ve komisyon yapısından gelir. Yemek kartı komisyon oranı, kart basım ve dağıtım bedeli, kullanılmayan bakiyenin işleyişi ve poliçe aracılık komisyonu bunların başında gelir.', 'Bu kalemler hacme duyarlıdır. Yüz kişilik bir kurum tek başına pazarlık ettiğinde aldığı komisyon oranı, aynı kurumun bin kişilik bir havuzun parçası olarak aldığı orandan yüksektir. Çalışan açısından hiçbir şey değişmez.']
  }, {
    h: 'Grup sağlık poliçesinde kapsam okuma',
    p: ['Poliçe karşılaştırmalarında prim tutarı tek başına yanıltıcıdır. Aynı prime sahip iki poliçe arasında muafiyet oranı, anlaşmalı kurum ağı ve doğum–diş gibi ek teminatlar bakımından belirgin farklar olabilir.', 'Doğru karşılaştırma, prim ile birlikte beklenen kullanım profilinin de hesaba katıldığı bir karşılaştırmadır. Genç kadrolu bir teknoloji şirketiyle ortalama yaşı yüksek bir kurumun optimum poliçesi aynı değildir.']
  }, {
    h: 'Kullanılmayan hakkın maliyeti',
    p: ['Bütçelenmiş ama kullanılmayan yan hak, hem gider hem de kayıp algısı yaratır. Spor üyeliği, ulaşım desteği ya da esnek bütçe kalemlerinin kullanım oranı ölçülmediğinde, bütçe çalışanın değer vermediği bir kaleme akmaya devam eder.', 'Kullanım verisinin düzenli izlenmesi, paketi küçültmeden yeniden dağıtmayı mümkün kılar: düşük kullanımlı kalem küçülür, yüksek talepli kalem büyür, toplam bütçe sabit kalır.']
  }, {
    quote: 'Çalışanın hissettiği paket ile kurumun ödediği tutar birbirinden bağımsız iki değişkendir. Tasarruf, ikincisinde yapılır.'
  }]
}];
})();
