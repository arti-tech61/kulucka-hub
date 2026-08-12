// ═══════════════════════════════════════════════════════════════════════════
// bandirmamanlift.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Bandırma merkezli manlift, platform ve forklift kiralama.
// Açı: MARMARA GÜNEY LİMAN KUŞAĞI — dökme yük limanı ve kimya-gübre sanayi
// ekseni, enerji tesisleri, Gönen-Susurluk gıda/deri hattı, Erdek turizm
// sezonu, tekne-tersane bakımı. Marmara'nın güney kıyı iklimi (nem, tuz,
// poyraz) ve liman operasyon ritmi mercek olarak kullanılır.
//
// ⚠️ Çakışma uyarıları:
//   - istanbulplatformkiralama.net tersane/kızak-blok montaj açısını işliyor;
//     bu dosyada tersane İKİNCİL, dökme yük ve kimya birincil. Kızak/blok
//     montaj anlatımı TEKRARLANMAZ.
//   - biga sayfası canakkaleplatform.com'da metal-enerji açısıyla yazılıyor;
//     burada Bandırma'dan bakan liman-lojistik ekseni kullanılır.
//   - gemlik sayfası bursamanliftkiralama.net'te uzun dönem SÖZLEŞME açısıyla
//     var; burada körfez karşısı proje işi / kısa dönem sefer mantığı yazılır.
//
// Bilgi kuralı: Bandırma'nın liman-kimya-gübre ekseni, Gönen'in deri-termal,
// Susurluk'un süt-gıda kimliği kamuya açık genel bölge bilgisidir. Tesis adı,
// şirket adı ve rakam UYDURULMAZ.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Sayfalar arası cümle/kalıp tekrarı YASAK.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BANDIRMAMANLIFT_NET: Record<string, BespokeIcerik> = {
    "bolge:bandirma": {
        h1: "Bandırma'da Liman ve Kimya Sanayisine Manlift, Platform Kiralama",
        giris:
            "Bandırma'yı anlamak için önce rıhtıma bakmak gerekir: burada yük, koli ve palet hâlinde değil yığın hâlinde hareket eder. Gemiden alınan malzeme kepçeyle boşaltılır, bant konveyörle taşınır, silolara ve açık stok sahalarına yığılır; oradan da fabrikanın besleme hattına girer. Kentin sanayi kimliği bu akışın etrafında kurulmuştur — gübre ve kimya üretimi, bor işleme geleneği, asit ve kimyasal depolama tesisleri, enerji üretim sahaları ve limanın kendi elleçleme altyapısı aynı dar kıyı şeridini paylaşır. Yüksekte çalışma ihtiyacı da bu yüzden inşaat işlerinden değil, tesis bakımından doğar: konveyör köprüsünün taşıyıcı ayakları, siloların üst gövdesi, boru hattı estakadları, elektrik-otomasyon kabinleri, aydınlatma direkleri ve toz tutma sistemleri düzenli erişim ister. Bunlara bir de Marmara'nın güney kıyısına özgü nem ve tuz yükü eklenir; korozyon burada arıza değil, takvimi belli bir bakım kalemidir. Bu sayfa, Bandırma'nın liman-sanayi dokusunda platform ve forklift kiralamanın nasıl kurgulandığını, hangi sorulara önce cevap aradığımızı anlatır.",
        maddeler: [
            {
                baslik: "Dökme yük hattında bant ve konveyör bakımı",
                metin:
                    "Dökme yük tesislerinin sinir sistemi bant hatlarıdır: rıhtımdan siloya, silodan üretime uzanan konveyör köprüleri metrelerce yükseklikte ilerler ve altındaki alan çoğu zaman geçiş yoludur. Rulo değişimi, sıyırıcı ayarı, kaçak toz kapaklarının onarımı gibi işlerde platform bu köprünün yan tarafına konumlanır; bomun köprü çelik konstrüksiyonuna temas etmeden hedefe ulaşması ve alt kotun geçici olarak trafiğe kapatılması iki temel şarttır. Hattın durdurulduğu pencere kısa olduğu için makine, duruş saatinden önce noktada bekler.",
            },
            {
                baslik: "Silo ve stok sahalarında yükseklik gerçeği",
                metin:
                    "Silo gövdeleri, kapalı stok hangarları ve elevatör kuleleri bölgedeki en zorlu erişim hedefleridir; hem yükseklik hem de gövdenin dairesel biçimi sepetin sabit mesafede tutulmasını güçleştirir. Bu işlerde çalışma yüksekliğini kâğıt üzerinden değil, gerçek hedef kotundan çıkarırız: kaynak dikişi, korkuluk bağlantısı veya seviye sensörü hangi metrede ise ona sepet zemininin ulaşması gerekir. Zemin tarafında ise stok sahasının sıkışmamış malzeme yığını, tekerlek batmasına karşı ayrıca değerlendirilir.",
            },
            {
                baslik: "Kimyasal tesislerde bölge ve malzeme uyumu",
                metin:
                    "Asit, gübre ve kimya üretimi yapılan sahalarda saha planı, kimyasalın cinsine göre bölünmüştür ve her bölgenin kendi giriş kuralı vardır. Ekipman planını tesisin proses güvenliği sorumlusuyla birlikte kurarız: makinenin duracağı nokta, bomun süpüreceği hacim ve iş süresince rüzgâr yönü birlikte konuşulur. Aşındırıcı buharın yoğun olduğu kesimlerde iş, tesisin durma veya yıkama penceresine taşınır; makine iş bitiminde bekletilmeden yıkanır, aksi hâlde kalıntı boya altında sessizce çalışmaya devam eder.",
            },
            {
                baslik: "Enerji ve elektrik altyapısında erişim",
                metin:
                    "Bölgedeki enerji üretim ve dağıtım tesisleri, kendi disiplinini erişim ekipmanına da dayatır: gerilim altındaki hiçbir bölüme yaklaşma mesafesi ihlal edilmez, çalışma ancak enerji kesme ve etiketleme işlemi tamamlandıktan sonra başlar. Yalıtımlı sepet gerektiren işler ile gerektirmeyenler baştan ayrılır ve bu ayrım tesisin elektrik sorumlusunun yazılı onayıyla kesinleşir. Operatörlerimizin buradaki görevi teknik iş yapmak değil, ekibi doğru kotta ve emniyetli açıklıkta tutmaktır.",
            },
            {
                baslik: "Liman sahasında araç trafiğiyle birlikte çalışma",
                metin:
                    "Rıhtım ve arka saha, iş makinesi trafiğinin en yoğun olduğu alanlardandır: kepçeli yükleyiciler, damperli kamyonlar ve reachstacker sınıfı ekipman aynı dar güzergâhı kullanır. Platformun bu trafiğe karışması değil, trafikten ayrılması esastır — çalışma alanı bariyer ve koni ile fiziksel olarak çevrilir, saha trafik amiriyle giriş-çıkış saati kararlaştırılır. Gemi tahliyesi süren bir vardiyada erişim işi, tahliyenin bittiği veya ambarın değiştiği aralığa yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bandırma'da tesis tipine göre ekipman eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, bölgeden gelen taleplerin ana başlıklarını ve her birinde teklif öncesi netleşmesi gereken bilgiyi özetler. Kritik veri sütunu, telefonda ilk sorduğumuz sorudur; bu bilgi geldiğinde makine seçimi tek seferde doğru yapılır.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Sık erişim işi", "Uygun sınıf", "Kritik veri"],
                    satirlar: [
                        ["Dökme yük terminali", "Konveyör köprüsü, aktarma kulesi", "Teleskopik bomlu", "Hat duruş penceresi"],
                        ["Gübre-kimya üretimi", "Boru estakadı, reaktör çevresi", "Tesis onayına göre bomlu", "Bölge sınırları haritası"],
                        ["Silo ve tahıl deposu", "Gövde kaynak, seviye sensörü", "Yüksek erişimli eklemli", "Hedef kotu ve zemin"],
                        ["Enerji tesisi", "Trafo sahası, aydınlatma direği", "Yalıtımlı veya standart bomlu", "Enerji kesme onayı"],
                        ["Antrepo ve kapalı depo", "Raf, çatı altı tesisat", "Akülü makaslı + forklift", "Koridor ve tavan ölçüsü"],
                    ],
                },
            },
            {
                baslik: "Gemi takvimi kiralama planını nasıl belirler",
                paragraflar: [
                    "Liman çevresindeki her tesisin takvimi, aslında geminin takvimidir. Yanaşma saati kaydığında tahliye kayar, tahliye kaydığında hattın duracağı bakım penceresi kayar; bu zincirin son halkasında bekleyen erişim ekipmanı, esnek planlanmadığı sürece ya boş bekler ya da geç kalır. Bu yüzden liman halkasındaki işlerde takvimi tek bir güne çakmayız: iş için bir hedef gün ve onu izleyen bir yedek gün birlikte belirlenir, makine bu iki gün için ayrılır ve hangisinin gerçekleşeceği bir gün önceden teyitle netleşir.",
                    "Bu esnekliğin karşılığında biz de bir şey isteriz: haber. Tahliyenin uzayacağı sabahtan belliyse, o bilgi bize ulaştığında makine başka bir işe kaydırılıp ertesi gün geri gelebilir. Bilgi paylaşılmadığında ise saha kapısında bekleyen ekipman hem sizin faturanıza hem bizim planımıza yazılır. Liman ritmine alışkın olmanın anlamı budur: sürprizi yok saymak değil, sürprize göre kurulmuş bir plan taşımaktır.",
                ],
            },
            {
                baslik: "Tuz, nem ve poyraz: kıyı sahasında ekipman ömrü",
                paragraflar: [
                    "Marmara'nın güney kıyısında çalışan makine, iç bölgedeki eşdeğerinden daha hızlı yaşlanır. Havadaki tuz hidrolik silindir yüzeylerinde ve elektrik soketlerinde birikir; nem, kapalı panolarda yoğuşma yapar; poyrazın hâkim olduğu günlerde ise sepet yüksekte savrulmaya açık hâle gelir. Bölge işlerine ayırdığımız makinelerde silindir koruma yağlaması normalden sık tekrarlanır, pano contaları her kontrolde açılıp kurutulur ve iş dönüşü tatlı su yıkaması standart bir adımdır.",
                    "Rüzgâr tarafında ise kural teknik değil, kesindir: üreticinin makine için tanımladığı azami rüzgâr hızının üzerinde sepet yükseltilmez. Kıyıya açık bir stok sahasında öğleden sonra kuvvetlenen rüzgâr, işin yarıda kesilmesi anlamına gelebilir; bunu baştan bilen ekip günün yüksek kotlu kalemlerini sabaha, alçak kotlu kalemlerini öğleden sonraya yazar. Rüzgâr penceresini planın parçası yapmak, sahada tartışmayı da ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizde hat durunca çalışabiliyoruz ve duruş yalnızca birkaç saat sürüyor; bu kadar kısa iş için makine gelir mi?",
                cevap:
                    "Gelir, ama planı normalden sıkı kurmak gerekir. Kısa duruş penceresinde en büyük kayıp, makinenin sahaya girip yerleşmesi için harcanan zamandır; bu yüzden ekipmanı duruş saatinden önce sahaya alır, çalışma noktasının dibinde hazır bekletiriz. Hat durduğu anda kurulum değil, doğrudan çalışma başlar. Malzeme ve el aletlerinin sepete önceden yüklenmesini, iş adımlarının kısa bir listeye dökülmesini de öneririz. Birkaç saatlik pencere için günlük tarife geçerli olur; ancak aynı gün içinde birden fazla duruş penceresi varsa hepsi tek kiralama gününe toplanır ve maliyet o iş kalemlerine bölünür.",
            },
            {
                soru: "Gübre ve kimyasal ortamda çalışan makinede oluşan aşınmanın bedeli bize mi yansır?",
                cevap:
                    "Hayır. Ortam koşulunu keşifte öğrendiysek, o ortamın getirdiği bakım yükü fiyatın içindedir ve iş sonunda sürpriz bir kalem çıkmaz. Aşındırıcı ortamdan dönen makinede yıkama, kontrol ve gerekiyorsa yüzey koruma bizim standart protokolümüzdür. Kiracıya yazılan tek durum kullanım hatasıdır: kapasite aşımı, çarpma, devirme veya makineyi tanımlanan çalışma alanı dışına sokmak gibi. Bu ayrım sözleşmede açık bir maddedir. Bizim tek beklentimiz, sahanın gerçek koşulunun teklif aşamasında paylaşılmasıdır; hafif anlatılan bir ortam, iş sonunda iki taraf için de tatsız bir konuşma üretir.",
            },
            {
                soru: "Liman sahasına ve tesise girişte hangi belgeler isteniyor, süreç ne kadar sürüyor?",
                cevap:
                    "Liman ve büyük sanayi tesisleri kontrollü sahalardır; giriş için genellikle araç ve sürücü bilgisi, operatörün kimlik ve yeterlilik belgesi, ekipmanın periyodik kontrol raporu ve sigorta belgeleri istenir. Bazı tesisler ayrıca kendi işe giriş eğitimini veya saha oryantasyonunu şart koşar. Sürecin tamamı, evrak önceden gönderildiğinde çoğunlukla bir iş günü içinde tamamlanır; sevkiyat gününe bırakıldığında ise kapıda saatler kaybedilir. Uygulamamız şudur: sipariş kesinleştiği gün belge setini sahanın güvenlik veya İSG birimine göndeririz, oryantasyon gerekiyorsa süresini kiralama planına açıkça ekleriz.",
            },
            {
                soru: "Silo gövdesinde çalışacağız ama zemin sıkıştırılmamış stok sahası; makine batmadan çalışabilir mi?",
                cevap:
                    "Doğrudan malzeme yığını üzerine makine kurulmaz; çözüm ya sert zeminden erişmek ya da uygun bir yayma platformu hazırlamaktır. Keşifte üç şeye bakarız: silo çevresinde beton veya sıkıştırılmış bir kuşak var mı, hedef noktaya o kuşaktan bomla ulaşılabiliyor mu, ulaşılamıyorsa çelik plaka veya kalas yayarak taşıma yüzeyini büyütmek mümkün mü. Zemin taşıma gücü şüpheliyse tercihimiz daha uzun bomlu makineyle uzaktan erişmektir; makineyi riskli zemine sokmak yerine mesafeyi ekipmanla kapatmak her zaman daha ucuza gelir. Batan makinenin kurtarılması, doğru makinenin kirasından kat kat pahalıdır.",
            },
            {
                soru: "Yıl boyunca aralıklı işimiz var; her seferinde baştan mı anlaşacağız?",
                cevap:
                    "Gerek yok. Tesis bazlı bir çerçeve kurarız: sahanızın koşulları, giriş prosedürü, belge seti ve alıştığınız makine tipleri bir kez kaydedilir; sonraki her ihtiyaçta tek bildirimle aynı koşullar devreye girer. Aradaki boş dönemlerde hiçbir ödeme veya taahhüt doğmaz — çerçeve bir bağlayıcılık değil, hazır bekleyen bir zemindir. Getirisi en çok plansız işlerde görülür: bir arıza veya erken açılan bir bakım penceresinde belge süreci baştan yaşanmaz, sahanızı daha önce görmüş operatör atanır ve makine ilk uygun seferle yola çıkar. Yıllık bakım duruşu gibi tarihi belli işlerde ise makine önceden rezerve edilir.",
            },
            {
                soru: "Hem yüksekte erişim hem ağır parça taşıma ihtiyacımız var; tek makine ikisini görür mü?",
                cevap:
                    "Nadiren. Yükselerek çalışma ile yük taşıma iki ayrı mühendislik problemidir: platformun sepeti sınırlı taşıma kapasitesiyle tasarlanır ve kişiyle birlikte ancak el aleti ile küçük malzeme kaldırır. Ağır parça hareketi forklift, telehandler veya vinç işidir. Doğru kurgu, işi iki kaleme ayırmaktır — parçalar önce taşıyıcı ekipmanla çalışma noktasına yerleştirilir, montaj ise platformdan yapılır. Bu iki makineyi aynı sevkiyata bindirerek nakliye farkını büyük ölçüde eritiriz. Sepete kapasitesinin üzerinde yük koymak yalnızca sözleşme ihlali değil, devrilme mekaniğini doğrudan tetikleyen bir davranıştır ve operatörlerimiz bu talebi kim iletirse iletsin reddeder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bandırma'nın dökme yük limanı ile gübre-kimya ve bor işleme ekseninde bir sanayi kenti olduğu, kıyı ikliminin korozyon etkisi ve dökme yük tesislerinin konveyör-silo altyapısı kamuya açık genel bilgidir; giriş prosedürü, planlama ve bakım protokolleri firma pratiğidir.",
    },

    "bolge:erdek": {
        h1: "Erdek'te Turizm Sezonuna Göre Platform ve Manlift Kiralama",
        giris:
            "Erdek, Bandırma'nın hemen batısında bambaşka bir takvimle yaşar. Liman kuşağının yıl boyu süren sanayi ritmi burada yerini keskin bir mevsim eğrisine bırakır: kış boyunca sessiz duran oteller, pansiyonlar, yazlık siteler ve sahil işletmeleri bahar geldiğinde aynı anda uyanır ve birkaç hafta içinde bakım-onarım kuyruğu oluşturur. Ekipman kiralama açısından bunun anlamı nettir — Erdek'te iş, yıla değil sezona göre planlanır. Talep kalemleri de bu ritmi yansıtır: cephe boyası ve badana öncesi hazırlık, çatı ve oluk onarımı, klima dış ünitesi montajı, tabela yenileme, aydınlatma ve tente işleri, iskele-marina çevresinde metal aksam bakımı. Bunların çoğu tek başına yarım günlük işlerdir ama hepsi aynı dar zaman aralığına sıkışır. Bir de kıyı ilçesine özgü iki değişken vardır: sezon başladıktan sonra gürültü ve görüntü toleransının düşmesi, ve dar sahil sokaklarında ağır aracın manevra sorunu. Bu sayfa, Erdek'in mevsimlik dokusunda platform kiralamayı nasıl kurguladığımızı anlatır.",
        maddeler: [
            {
                baslik: "Sezon öncesi bakım kuyruğunun yönetimi",
                metin:
                    "Erdek'te en yoğun talep, sezon açılışından önceki haftalarda toplanır: aynı sokakta beş işletme aynı anda cephesini boyatmak, tabelasını yenilemek ve tentesini değiştirmek ister. Bu kuyruğu tek tek karşılamak hem gecikme hem gereksiz nakliye üretir. Uygulamamız, bölgeye makineyi sezon öncesi bir dönem için konumlandırmak ve işleri coğrafi sıraya dizmektir — makine gün içinde sokakta ilerler, her işletmeye kendi payı kadar süre ayrılır. Erken haber veren işletme bu sıranın başında yer alır.",
            },
            {
                baslik: "Otel ve pansiyon binalarında cephe erişimi",
                metin:
                    "Sahil hattındaki konaklama yapıları çoğunlukla üç-beş katlı, balkonlu ve cephesi hareketli binalardır; düz duvar yerine çıkma, saçak ve balkon dizisi vardır. Bu geometride makaslı platform çoğu zaman yetersiz kalır, çünkü sepetin engelin üzerinden aşırtılması gerekir; eklemli bomlu sınıf burada doğal seçimdir. Konumlanma tarafında ise sorun genellikle otoparktır: makinenin duracağı alan için birkaç aracın çekilmesi gerekir ve bu, iş gününden önce işletmeyle netleştirilir.",
            },
            {
                baslik: "Yazlık sitelerde ortak alan işleri",
                metin:
                    "İkinci konut sitelerinde talep yönetimden gelir ve genellikle paketler hâlinde olur: site aydınlatması, dış cephe kontrolü, ağaç budama, çatı oluğu temizliği, kamera ve anten işleri. Bu kalemlerin ayrı ayrı çağrılması siteye üç ayrı nakliye ödetir; tek güne toplandığında ise makine sabahtan akşama site içinde çalışır ve maliyet kalemler arasında bölünür. Site yönetimlerine önerimiz, kış boyunca biriken listeyi tek dosyada tutup sezon öncesi tek çağrıya dönüştürmeleridir.",
            },
            {
                baslik: "Marina ve tekne bakımında erişim",
                metin:
                    "Körfezdeki tekne çekek ve bakım alanları, sanayi sahalarından farklı ama kendine has bir erişim ihtiyacı üretir: karaya alınmış teknelerin üst yapısı, direk ve donanım bölümleri, iskele aydınlatması ve metal aksamın boya bakımı. Bu işlerde alan dar, zemin çoğu zaman kısmen sert, çevre ise kalabalıktır. Makine seçimini kompakt sınıftan yapar, konumlanmayı çekek sahası sorumlusuyla önceden belirleriz; askıdaki veya payandaya oturmuş bir teknenin destek hattına hiçbir koşulda destek ayağı basılmaz.",
            },
            {
                baslik: "Sezon içinde gürültü ve görünürlük disiplini",
                metin:
                    "Sezon açıldıktan sonra Erdek'te iş yapmanın kuralları değişir: misafiri olan bir otelin önünde dizel motor sesi, sabah erken saatte kabul edilmez; kaldırımı kapatan bir makine, esnafın gününü doğrudan etkiler. Bu dönemde tercihimiz akülü sınıf ve gün ortasına yazılmış kısa çalışma pencereleridir. Çalışma alanı bariyerle çevrilir, yaya geçişi için koridor bırakılır ve iş bitiminde alan aynı gün toplanır. Sezon içi işlerde hız, işin kendisi kadar önemlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Erdek'te sezon takvimine göre iş ve ekipman planı",
                paragraflar: [
                    "Bölgedeki talebin yıl içindeki dağılımı ve her dönemin pratik karşılığı aşağıdadır. Tablodaki öneri sütunu, o dönemde maliyeti düşüren davranışı gösterir.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Öne çıkan işler", "Uygun ekipman", "Öneri"],
                    satirlar: [
                        ["Kış (düşük sezon)", "Çatı, oluk, kapsamlı onarım", "Eklemli bomlu", "En uygun tarife dönemi"],
                        ["İlkbahar (hazırlık)", "Cephe boya, tabela, tente", "Eklemli + makaslı", "Erken rezervasyon şart"],
                        ["Sezon açılışı", "Son rötuş, aydınlatma", "Kompakt akülü", "Kısa pencere planlayın"],
                        ["Yaz (yoğun sezon)", "Acil arıza, klima, kamera", "Kompakt akülü", "Sabah erken saat yasak"],
                        ["Sonbahar (kapanış)", "Kışa hazırlık, söküm, koruma", "Eklemli bomlu", "Site listelerini birleştirin"],
                    ],
                },
            },
            {
                baslik: "Mevsimlik işletmeler için maliyet mantığı",
                paragraflar: [
                    "Sezonluk bir işletmenin ekipman harcamasına bakışı, yıl boyu çalışan bir fabrikanınkinden farklıdır: gelir birkaç aya sıkışmışken gider kalemlerinin sezon öncesine yığılması bütçeyi zorlar. Bu gerçeği plana yansıtırız. Düşük sezonda yapılabilecek işleri kışa kaydırmak ilk tasarruf kalemidir; bahar yoğunluğunda tarifeler ve makine bulunabilirliği doğal olarak sıkışır, kışın ise aynı iş rahat bir takvimde ve daha uygun koşullarda yapılır.",
                    "İkinci kalem paylaşımdır. Aynı sokakta veya aynı sitede birden fazla işletmenin işini tek güne toplamak, nakliye maliyetini tek başına üçe böler. Bunu organize etmeniz gerekmez; bize komşuda da iş olduğunu söylemeniz yeterlidir, koordinasyonu teslim planımız yapar. Üçüncüsü ise hazırlıktır: malzemesi hazır, ustası sahada bekleyen bir iş yarım günde biter; malzeme beklerken duran makine ise saatini boşa yazar.",
                ],
            },
            {
                baslik: "Dar sahil sokaklarında sevkiyat ve konumlanma",
                paragraflar: [
                    "Erdek'in eski yerleşim dokusunda sokaklar dar, dönüşler keskin ve park yoğundur; ağır nakliye aracının her sokağa girmesi mümkün değildir. Bu yüzden sevkiyat planını harita üzerinde birlikte yaparız: çekici sokağa en yakın uygun genişlikteki noktaya kadar gelir, makine orada indirilir ve kalan mesafeyi refakatçi eşliğinde kendi gücüyle yürür. Güzergâhtaki eğim, kasis, kanal kapağı ve havai hat yüksekliği bu yürüyüş öncesinde kontrol edilir.",
                    "Konumlanmada ikinci dikkat noktası zemindir. Sahile yakın sokaklarda parke ve kilit taşı yaygındır; destek ayakları doğrudan taşa basmaz, yük dağıtım plakası kullanılır. Rögar kapağı, kanal ve altyapı hattı üzerine ayak basmamak da temel kuraldır — görünüşte sağlam bir kapak, noktasal yük altında beklenmedik biçimde davranır. Bu kontroller birkaç dakika sürer ve sokakta çökme veya hasar riskini pratikte ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otelimizin cephe boyası sezon açılmadan bitmeli; ne kadar önceden rezervasyon yapmalıyız?",
                cevap:
                    "Bahar aylarında bölgedeki talebin tamamı birkaç haftaya sıkıştığı için, sezon öncesi işlerde en az iki-üç hafta öncesinden yer ayırtmanızı öneririz. Ancak asıl belirleyici tarih değil, esnekliktir: tarihi tek bir güne çakmak yerine bize bir haftalık aralık verirseniz, işiniz aynı bölgedeki diğer işlerle aynı sefere bağlanır ve hem daha erken hem daha ekonomik yapılır. Boya işlerinde ayrıca hava penceresi vardır — yağış ve kuvvetli rüzgâr uygulamayı doğrudan etkiler. Bu yüzden planı yaparken bir yedek gün belirleriz; hava kapanırsa iş ertesi güne kayar, makine bölgeden çekilmez.",
            },
            {
                soru: "Sitemizin ortak alanlarında biriken küçük işler var; hepsi için ayrı ayrı mı çağıralım?",
                cevap:
                    "Kesinlikle hayır — bu, en sık gördüğümüz gereksiz masraf kalemidir. Site yönetimlerine önerimiz, yıl boyunca biriken kalemleri tek bir listede toplamaktır: aydınlatma armatürleri, cephe kontrolü, oluk temizliği, kamera ayarı, anten, ağaç budama. Bu liste tek çağrıya dönüştüğünde makine gün boyu sitede kalır, işler sırayla yürür ve nakliye maliyeti tüm kalemlere bölünür. Listeyi bize önceden gönderirseniz sürenin gerçekçi tahminini yapar, tek günde bitip bitmeyeceğini önceden söyleriz. Yarım kalan iş için ikinci gün gerekiyorsa bunu baştan bilmek, sürpriz olarak yaşamaktan iyidir.",
            },
            {
                soru: "Sezon ortasında acil bir arıza çıkarsa aynı gün makine bulabilir miyiz?",
                cevap:
                    "Yoğun sezonda garanti veremeyiz, ama şansınızı ciddi biçimde artıran bir düzenimiz var: sezon boyunca bölgede konumlanmış makinelerimiz olur ve bunların günlük programında acil müdahaleler için pay bırakırız. Sabah erken saatte gelen bir talep, çoğunlukla o günün programına sıkıştırılabilir; öğleden sonra gelen talep ise büyük ihtimalle ertesi sabaha kalır. Aramadan önce üç bilgiyi hazırlamanız süreci hızlandırır: hedef yükseklik, makinenin duracağı alanın durumu ve işin ne kadar süreceği. Bu üç veriyle telefonda doğru makineyi seçer, boşuna sefer yapmayız.",
            },
            {
                soru: "Sahil şeridindeki işletmemizin önü tamamen kaldırım; makine nereye kurulacak?",
                cevap:
                    "Kaldırım üzeri çalışma, izin ve emniyet olmak üzere iki ayrı konu içerir. Emniyet tarafında makine yaya trafiğinden bariyerle ayrılır, geçiş için koridor bırakılır ve bomun süpüreceği alan işaretlenir; kaldırım altındaki altyapı nedeniyle destek ayakları yük dağıtım plakasıyla kullanılır. İzin tarafında ise kaldırım veya yol işgali gerektiren durumlarda belediye koordinasyonu gerekebilir; bu ihtimali keşifte ayıklar, gerekiyorsa işi bu sürecin tamamlanacağı tarihe planlarız. Sezon içindeyse ek bir tercih daha yaparız: çalışmayı günün en sakin dilimine alıp süresini mümkün olduğunca kısaltmak.",
            },
            {
                soru: "Çekek yerinde teknemizin direğine çıkacağız; platform bu iş için uygun mu?",
                cevap:
                    "Uygun olabilir, ancak karar teknenin nasıl durduğuna bağlıdır. Karaya alınmış ve payandaya oturtulmuş bir teknenin destek hattı hassastır; makinenin bu hatta yük bindirecek hiçbir noktaya basmaması gerekir. Keşifte çekek sahası sorumlusuyla birlikte makinenin duruş noktası ve bomun yaklaşma açısı belirlenir, tekneye temas riski olan hareketler baştan kapatılır. Direk ve donanım işlerinde sepetin sabit ve dar bir alanda konumlanması gerektiği için genellikle eklemli sınıf tercih edilir. Vinçle asılı durumdaki bir tekne çevresinde ise çalışmayız; askı altında erişim işi yapılmaz, tekne emniyetli biçimde oturtulduktan sonra başlanır.",
            },
            {
                soru: "Kışın kapalıyız; onarımları o dönemde yaptırmak gerçekten daha mı avantajlı?",
                cevap:
                    "Evet, iki nedenle. Birincisi bulunabilirlik: kış aylarında bölgedeki talep düşüktür, makine seçenekleri geniştir ve tarihinizi neredeyse serbestçe belirlersiniz — bahar yoğunluğunda bu iki lüksün ikisi de yoktur. İkincisi işin niteliği: kapsamlı onarımlar, çatı ve cephe müdahaleleri, söküm-montaj gerektiren kalemler misafir varken zaten rahat yapılamaz; kapalı dönemde ekip alanı serbestçe kullanır ve iş kesintisiz ilerler. Tek dikkat edilecek konu havadır — kış aylarında yağış ve rüzgâr çalışma günlerini daraltır, bu yüzden takvimi yedek günlerle kurmak gerekir. Kısacası kışın planlanan iş daha ucuz değil, daha rahat ve daha kaliteli biter.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Erdek'in Marmara kıyısında turizm ağırlıklı bir ilçe olduğu, ikinci konut ve konaklama dokusu ile tekne çekek faaliyetinin bölgede yaygınlığı kamuya açık genel bilgidir; sezon planlaması, sevkiyat ve konumlanma pratikleri firma uygulamasıdır.",
    },

    "bolge:gonen": {
        h1: "Gönen'de Deri, Gıda ve Termal Tesislere Platform Kiralama",
        giris:
            "Gönen, Bandırma'nın güneyinde üç ayrı ekonomiyi aynı ilçede taşıyan bir yerdir: köklü bir deri işleme geleneği, ovanın beslediği gıda ve tarımsal sanayi, ve jeotermal kaynağa dayanan termal tesis dokusu. Bu üçlü, ekipman kiralama açısından birbirine hiç benzemeyen üç saha tipi demektir. Deri tesisi nemli, buharlı ve kimyasal yüklü bir ortamdır; gıda tesisi hijyen rejimiyle yönetilir ve üretim alanına giren her şeyin izi sürülür; termal otel ise misafirin bulunduğu, gürültüye ve görüntüye toleransı düşük bir yapıdır. Aynı ilçeye hizmet verirken makinenin kendisi değişmese bile, işin kuralları her saha tipinde baştan kurulur. Buna bir de tarımsal üretimin mevsim ritmi eklenir: hasat ve işleme dönemlerinde tesisler durmaz, bakım işleri sezon dışına yığılır. Bu sayfa, Gönen'in bu üç yüzlü dokusunda platform ve forklift kiralamanın nasıl planlandığını, hangi ön bilgilerin işi kolaylaştırdığını anlatır.",
        maddeler: [
            {
                baslik: "Deri işleme tesislerinde nem ve kimyasal ortam",
                metin:
                    "Deri üretiminin doğası gereği tesis içinde sürekli su, buhar ve kimyasal buhar dolaşır; bu ortam elektrik panolarını, soketleri ve hidrolik yüzeyleri hızla yıpratır. Bu tesislere makine verirken pano koruma sınıfına bakar, iş sonrası kontrol aralığını kısaltırız. Zemin tarafında da ayrı bir gerçek vardır: ıslak ve kaygan yüzeyler tekerlek tutuşunu azaltır, eğimli bölgelerde konumlanma daha dikkatli yapılır. Havalandırma kanalı, tavan tesisatı ve çatı işleri bu tesislerdeki en sık erişim kalemleridir.",
            },
            {
                baslik: "Gıda tesislerinde hijyen rejimine uyum",
                metin:
                    "Gıda üretim alanına giren ekipman, tesisin hijyen prosedürünün parçası hâline gelir: makine giriş öncesi temizlenir, tekerlek yüzeyleri kontrol edilir, gerektiğinde koruyucu örtü ve kaplama kullanılır. Hidrolik kaçak ihtimali bu tesislerde teknik bir arıza değil, üretim durdurabilecek bir olaydır; bu yüzden gıda sahalarına giden makinelerde ön kontrol standardın üzerinde tutulur. Üretim alanında dizel çalıştırmak da söz konusu değildir — akülü sınıf burada tercih değil, zorunluluktur.",
            },
            {
                baslik: "Termal otel ve konaklama yapılarında çalışma",
                metin:
                    "Jeotermal kaynağa dayalı tesisler yıl boyu misafir ağırlar ve bu, çalışma saatlerini doğrudan belirler. Cephe, çatı, aydınlatma ve klima işleri misafirin en az bulunduğu dilimlere yazılır; gürültülü kalemler sabah erken ve akşam saatlerinden uzak tutulur. Havuz ve termal ünite çevresinde çalışırken ıslak zemin ve seramik kaplama ayrı bir dikkat gerektirir — destek ayakları yük dağıtım plakasıyla kullanılır ve kaplama üzerine doğrudan noktasal yük bindirilmez.",
            },
            {
                baslik: "Tarımsal sanayi ve depo yapılarında forklift ihtiyacı",
                metin:
                    "Ova tarımının işlendiği tesislerde talep, yılın belirli dönemlerinde keskin biçimde yükselir: hasat sonrası dönemde stok sahası büyür, istif yükselir ve mevcut ekipman yetmez hâle gelir. Bu dönemler için kısa süreli forklift takviyesi, makine satın almaya kıyasla çok daha rasyonel bir çözümdür. Kapalı depoda akülü veya LPG'li sınıf, açık yükleme sahasında dizel sınıf çalışır. Talebin tarihi büyük ölçüde öngörülebilir olduğu için bu dönemler için makine önceden rezerve edilir.",
            },
            {
                baslik: "Sezon dışına yazılan planlı bakım",
                metin:
                    "Tarıma bağlı üretim yapan tesislerde bakım penceresi genellikle sezon dışıdır ve bu pencere kısadır: birkaç hafta içinde çatıdan hatta, havalandırmadan aydınlatmaya kadar biriken tüm kalemlerin bitmesi beklenir. Bu yoğunlaşma, bölgede aynı haftalarda birden fazla tesisin aynı anda makine aramasına yol açar. Çözümümüz, planlı bakım tarihlerini tesislerden önceden almak ve park tahsisini bu takvime göre yapmaktır; erken bildirim bu dönemde doğrudan bulunabilirlik demektir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gönen'de saha tipine göre çalışma kuralları",
                paragraflar: [
                    "İlçedeki üç ana saha tipinin ekipman ve prosedür farkları aşağıda karşılaştırılmıştır. Aynı makine sınıfı farklı sahalarda kullanılabilir; değişen şey işin çerçevesidir.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Belirleyici koşul", "Ekipman tercihi", "Planlama kısıtı"],
                    satirlar: [
                        ["Deri işleme tesisi", "Nem, buhar, kimyasal", "Korumalı panolu akülü", "Islak zemin ve eğim"],
                        ["Gıda üretim tesisi", "Hijyen prosedürü", "Akülü, temizlenmiş", "Üretim durma penceresi"],
                        ["Termal otel", "Misafir varlığı", "Kompakt akülü", "Gürültü saatleri"],
                        ["Tarımsal depo", "Mevsimlik yoğunluk", "Forklift + makaslı", "Hasat takvimi"],
                        ["Açık yükleme sahası", "Zemin ve hava", "Dizel forklift/bomlu", "Yağış ve rüzgâr"],
                    ],
                },
            },
            {
                baslik: "Üretim durmadan yapılabilen işlerin ayrıştırılması",
                paragraflar: [
                    "Her bakım kalemi üretimin durmasını gerektirmez ve bu ayrımı doğru yapmak, tesisin takviminde ciddi yer açar. Hattın doğrudan üzerine gelmeyen bölümler — depo tarafı, sevkiyat ucu, koridorlar, dış cephe, çatının hat dışı kesimleri — üretim sürerken çalışılabilir. Hattın tam üstüne gelen kalemler ise planlı duruşa bırakılır. Keşifte tesis planının üzerinde bu iki bölgeyi ayırır, hangi işin hangi kategoriye girdiğini üretim sorumlunuzla birlikte işaretleriz.",
                    "Üretim sürerken çalışılan bölümlerde tek katı kural alt kotun fiziksel olarak kapatılmasıdır. Yukarıdan düşecek küçük bir parçanın hat üzerindeki bedeli, bariyerin bedeliyle karşılaştırılamaz; gıda tesislerinde bu, ürün güvenliği açısından ayrıca kritiktir. Bu nedenle çalışma alanının altı boşaltılmadan sepet yükseltilmez ve bu kural, sıkışık takvim gerekçesiyle esnetilmez.",
                ],
            },
            {
                baslik: "Bandırma'dan Gönen'e: mesafenin maliyete etkisi",
                paragraflar: [
                    "Gönen, Bandırma parkımıza yakın konumdadır ve bu yakınlık maliyet denkleminin en büyük kalemini doğrudan etkiler. Kısa süreli işlerde nakliye, kira bedelinin yanında küçümsenmeyecek bir paydır; mesafe kısaldıkça bu pay erir ve yarım günlük bir iş bile ekonomik hâle gelir. Aynı yakınlık arıza müdahalesinde de kendini gösterir: uzun kiralamada makine arızası yaşandığında ikame makinenin sahaya ulaşma süresi, mesafenin doğrudan fonksiyonudur.",
                    "Mesafeyi daha da verimli kullanmanın yolu sefer birleştirmedir. Aynı gün Gönen yönüne çıkan bir sevkiyat varsa, ikinci ve üçüncü işler o sefere eklenerek nakliye payı bölünür. Bu yüzden tarih esnekliği olan müşterilerimize her zaman şunu söyleriz: bir-iki günlük esneklik verirseniz işinizi mevcut bir sefere bağlar, farkı doğrudan fiyata yansıtırız. Tarihi kesin olan işlerde ise sefer tek başına planlanır ve maliyet buna göre hesaplanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Deri tesisimizin ortamı ağır; makineniz burada sorunsuz çalışır mı?",
                cevap:
                    "Çalışır, ancak makine seçimini ortama göre yaparız. Nem ve kimyasal buharın yoğun olduğu alanlarda pano koruma sınıfı yüksek, soket ve bağlantıları kapalı modelleri tercih ederiz; iş süresince günlük kontrol yapılır ve iş bitiminde makine bekletilmeden temizlenip kurutulur. Sizden istediğimiz tek şey, ortamın gerçek koşulunu keşifte açıkça anlatmanızdır — hafif tarif edilen bir ortam, sahada yanlış makineyle karşılaşmak demektir. Ortamın doğal etkisiyle oluşan yıpranma bizim bakım yükümüzdür ve size yansıtılmaz; bu ayrım sözleşmede yazılıdır.",
            },
            {
                soru: "Gıda üretim alanımıza dışarıdan makine sokmak istemiyoruz; alternatif var mı?",
                cevap:
                    "Birkaç alternatif var ve hangisinin uygun olduğu işin konumuna bağlıdır. Hedef nokta üretim alanının sınırına yakınsa, makineyi alan dışında konumlandırıp bomla erişmek çoğu zaman mümkündür. İçeri girmek zorunluysa hijyen protokolünüzü uygularız: makine dışarıda temizlenir, tekerlekler kontrol edilir, gerekiyorsa koruyucu örtü kullanılır ve girişten önce sizin sorumlunuz onay verir. Üçüncü seçenek işi tesisin temizlik ve dezenfeksiyon döngüsünün hemen öncesine yerleştirmektir; böylece çalışma sonrası zaten planlanmış olan temizlik süreci devreye girer ve ek yük doğmaz.",
            },
            {
                soru: "Termal otelimizde misafir varken cephe işi yapılabilir mi?",
                cevap:
                    "Yapılabilir ama çerçevesi baştan kurulmalıdır. Uygulamamız şudur: çalışma saatleri misafirin en az bulunduğu dilime alınır, gürültülü kalemler gün ortasına yazılır, sabah erken ve akşam saatlerinde çalışılmaz. Makine sınıfı akülüden seçilir; egzoz ve motor sesi konaklama yapılarında en çok şikâyet üreten iki unsurdur. Çalışma alanı bariyerle ayrılır, misafir geçiş güzergâhı açık tutulur ve çalışılan cephenin altındaki balkon ve teras bölümleri o gün için kapatılır. İşin süresini kısaltmak da bir konfor tedbiridir; bu yüzden malzeme ve ekip hazırlığını iş gününden önce tamamlarız.",
            },
            {
                soru: "Hasat döneminde forklifte ihtiyacımız artıyor ama süre kesin değil; nasıl kiralayalım?",
                cevap:
                    "Bu tam olarak esnek kuyruklu kiralamanın işe yaradığı senaryodur. Sözleşmeyi iki parçalı kurarız: garanti edilen bir çekirdek süre — yoğunluğun kesin yaşanacağı gün sayısı — ve günlük bazda uzayabilen esnek bir kuyruk. Çekirdek süre bitince makine otomatik çekilmez; siz bitti diyene kadar günlük tarifeyle sahada kalır, iki gün önceden haberle iade edilir. Böylece ne erken iade edip yeniden nakliye ödersiniz ne de kullanmadığınız günlere kira yazarsınız. Yoğun dönemin tarihini önceden bildirmeniz ayrıca önemlidir: hasat dönemlerinde bölgedeki talep aynı haftalara yığılır ve rezervasyon sırası belirleyici olur.",
            },
            {
                soru: "Planlı duruşumuz iki hafta; bu süreyi verimli kullanmak için ne yapmalıyız?",
                cevap:
                    "Kısa duruşları verimli kılan şey makine değil, sıralamadır. Önerimiz duruş öncesinde tüm kalemleri tek listede toplayıp coğrafi olarak gruplamanızdır: aynı bölgedeki işler ardışık yapılır, makine gereksiz yere sahada dolaşmaz. İkinci adım, kalemleri gerekli ekipman sınıfına göre ayırmaktır; farklı sınıf gerektiren işler karıştırıldığında makine değişimi için gün kaybedilir. Üçüncüsü malzeme hazırlığıdır — duruş başladığında beklenen malzeme yolda olmamalıdır. Bu üç hazırlık yapıldığında iki haftalık pencereye normalde sığmayacak sayıda kalem sığar; yapılmadığında ise pencere işin yarısında kapanır.",
            },
            {
                soru: "Küçük bir işletmeyiz; sadece birkaç saatlik işimiz için makine kiralamak mantıklı mı?",
                cevap:
                    "Tek başına bakıldığında nakliye payı yüksek görünür, ama denklemi değiştirmenin iki yolu var. Birincisi tarih esnekliği: birkaç saatlik işinizi aynı bölgeye giden bir sefere bağlarız, makine gün içinde size uğrar ve nakliye maliyeti diğer işlerle paylaşılır. Bunun için bir-iki günlük esneklik yeterlidir. İkincisi işi büyütmektir — nasıl olsa gelen makineyle ertelenmiş küçük kalemleri de aynı güne toplamak, ödenen bedelin karşılığını doldurur: aydınlatma, tabela, oluk, anten gibi kalemler çoğu işletmede birikmiş hâlde bekler. Tarihiniz kesin ve iş tekse, günlük tarife geçerli olur ve bunu baştan açıkça söyleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gönen'in deri işleme geleneği, ova tarımına dayalı gıda sanayisi ve jeotermal kaynağa bağlı termal tesis dokusu kamuya açık genel bölge bilgisidir; hijyen uyumu, planlama ve sefer birleştirme uygulamaları firma pratiğidir.",
    },

    "bolge:biga": {
        h1: "Biga'da Sanayi Tesislerine Manlift ve Platform Kiralama",
        giris:
            "Biga, idari olarak Çanakkale'ye bağlı olsa da ekonomik yönü büyük ölçüde kuzeye, Marmara kıyısına dönüktür. Bandırma ile arasındaki karayolu bağlantısı, bölgedeki sanayi tesislerinin hem tedarikini hem sevkiyatını bu hat üzerinden yürütmesini sağlar; ilçe bu yüzden Marmara güney kıyı kuşağının doğal bir uzantısı gibi çalışır. Ekipman kiralama tarafında bunun karşılığı somuttur: Biga'daki bir tesise Çanakkale merkezden değil, Bandırma yönünden gitmek çoğu zaman daha kısa ve daha hızlıdır. Bu sayfada ilçeye Bandırma'nın liman-lojistik ekseninden bakıyoruz — yani tesisin kendi üretim teknolojisinden çok, malzemenin geliş-gidiş ritmi, stok sahası düzeni, sevkiyat yoğunluğu ve bu ritmin bakım takvimine yansıması üzerinden. İlçedeki talep kalemleri ağırlıklı olarak üretim tesisi ve depo yapılarından gelir: hol çatısı ve tavan altı tesisatı, vinç yolu bakımı, stok sahası istifleme, dış cephe ve aydınlatma işleri. Aşağıda bu işlerin nasıl planlandığını ve mesafenin denkleme nasıl girdiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Sevkiyat yoğunluğuna göre bakım penceresi seçimi",
                metin:
                    "Lojistik ekseninde çalışan tesislerde günün ritmi kamyon trafiğine göre kurulur: sabah ve akşam sevkiyat saatlerinde saha doludur, gün ortasında ise nispeten boşalır. Erişim işlerini bu boşluğa yerleştirmek hem güvenlik hem verim kazandırır. Keşifte tesisin sevkiyat programını sorar, çalışma saatlerini bu programın dışına yazarız. Trafiğin durmadığı sahalarda ise çalışma alanı bariyerle kapatılır ve saha trafik sorumlusuyla giriş-çıkış koordinasyonu yapılır.",
            },
            {
                baslik: "Stok sahası ve açık alan istifleme",
                metin:
                    "Biga'daki tesislerin önemli bölümünde üretim kadar stoklama da yer kaplar: hammadde girişi ve mamul çıkışı arasında açık veya yarı kapalı sahalarda malzeme bekler. Bu sahalarda forklift talebi dönemsel yükselir ve makine seçimi zemine göre yapılır — sert beton için standart sınıf yeterken, stabilize veya toprak zeminde arazi tipi tercih edilir. İstif yüksekliği, palet ölçüsü ve yükün gerçek ağırlığı teklif öncesi netleşmesi gereken üç bilgidir.",
            },
            {
                baslik: "Üretim holünde tavan altı işleri",
                metin:
                    "Çelik konstrüksiyon üretim hollerinde tavan altı, sürekli bakım isteyen bir bölgedir: aydınlatma armatürleri, havalandırma kanalları, vinç yolu ve çatı makası bağlantıları. Bu işlerin ortak kısıtı, altta üretim sürerken üstte çalışılamamasıdır. Uygulamamız işi hol planı üzerinde dilimlemektir — hat üstüne gelmeyen kesimler mesai içinde, hat üstü kesimler planlı duruşta yapılır. Kapalı hol içinde egzoz nedeniyle akülü sınıf çalışır.",
            },
            {
                baslik: "Vinç yolu ve kaldırma ekipmanı çevresinde çalışma",
                metin:
                    "Hol içi tavan vinçleri, erişim ekipmanının en dikkatli olması gereken komşusudur: vinç hareket hâlindeyken vinç yolu üzerinde veya yakınında çalışılmaz. Uygulamamız nettir — çalışma öncesi vinç kilitlenir veya çalışma bölgesinin dışına park ettirilir, bu durum tesis sorumlusunca teyit edilir ve teyit alınmadan sepet yükseltilmez. Askıdaki yükün altından geçmek ise tartışmaya kapalı bir ihlaldir ve operatör brifingine yazılı madde olarak konur.",
            },
            {
                baslik: "Dış cephe, çatı ve saha aydınlatması",
                metin:
                    "Tesis dışındaki işler — cephe kaplaması, oluk ve çatı kenarı, saha aydınlatma direkleri, tabela ve kamera direkleri — hava koşullarına en açık kalemlerdir. Bölgenin rüzgârlı günlerinde yüksek kotlu çalışma penceresi daralır; bu yüzden dış işlerde takvim yedek günle kurulur. Aydınlatma direği işlerinde ayrıca enerji kesme ve etiketleme adımı beklenir; direk üzerinde çalışmaya, kesmenin teyidi alınmadan başlanmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Biga'da iş tipine göre planlama tablosu",
                paragraflar: [
                    "İlçeden gelen taleplerin ana başlıkları ve her birinde belirleyici olan kısıt aşağıdadır. Sağ sütun, planı doğrudan şekillendiren tek soruyu gösterir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Tipik konum", "Ekipman", "Planı belirleyen soru"],
                    satirlar: [
                        ["Tavan altı tesisat", "Kapalı üretim holü", "Akülü makaslı", "Hat ne zaman duruyor?"],
                        ["Vinç yolu bakımı", "Hol içi köprü vinç", "Akülü eklemli", "Vinç kilitlenebilir mi?"],
                        ["Stok istifleme", "Açık/yarı kapalı saha", "Dizel veya arazi forklift", "Zemin ve yük ağırlığı?"],
                        ["Cephe ve çatı", "Tesis dış kabuk", "Teleskopik bomlu", "Rüzgâr penceresi var mı?"],
                        ["Saha aydınlatması", "Direk ve tabela", "Eklemli bomlu", "Enerji kesilebiliyor mu?"],
                    ],
                },
            },
            {
                baslik: "Kuzey hattından hizmet: mesafe ve müdahale süresi",
                paragraflar: [
                    "Biga'ya hizmet verirken belirleyici olan idari sınır değil, yol mesafesidir. Bandırma yönünden gelen bir sevkiyat, ilçedeki tesislerin çoğuna makul bir sürede ulaşır ve bu, hem nakliye maliyetini hem arıza müdahale süresini doğrudan etkiler. Uzun süreli kiralamalarda müşterinin gerçekte satın aldığı şey makinenin kendisi değil, o makinenin çalışır kalmasıdır; ikame ekipmanın ne kadar sürede sahaya varacağı bu yüzden sözleşmenin en önemli maddelerinden biridir.",
                    "Mesafeyi ekonomik kılan ikinci mekanizma rota günüdür. Aynı hat üzerindeki işleri aynı güne toplayarak tek sefere bağlarız; planlı bakım ziyaretleri de bu rota günlerine yazılır. Tarih esnekliği olan müşteriler bu düzenden doğrudan yararlanır — bir-iki günlük esneklik, nakliye payının birkaç işe bölünmesi anlamına gelir. Kesin tarihli işlerde sefer tek başına planlanır; bu durumda maliyet farkını baştan açıkça belirtiriz, sahada sürpriz çıkarmayız.",
                ],
            },
            {
                baslik: "Yeni tesis ve büyüme yatırımlarında ekipman planı",
                paragraflar: [
                    "Bir tesisin yeni hol, yeni depo veya kapasite artışı yatırımında ekipman ihtiyacı tek seferlik değil, evreler hâlinde ortaya çıkar. Kaba yapı döneminde talep yüksek erişimli bomlu sınıfa, mekanik ve elektrik montaj döneminde makaslı ve eklemli sınıfa, devreye alma ve ince işler döneminde ise kompakt makinelere kayar. Bu eğriyi baştan bilmek, sahaya yanlış makine getirmenin önüne geçer.",
                    "Yatırım işlerinde önerimiz, ekipman planını inşaat programının yanına koymaktır: hangi evrede hangi sınıf, kaç makine ve ne kadar süre gerekecek. Bu tablo hazırlandığında makineler önceden rezerve edilir, evre geçişlerinde ekipman değişimi tek sefere bağlanır ve boş bekleyen makineye kira ödenmez. Plansız yürüyen yatırımlarda en sık görülen kayıp, sahada aylarca duran ama yalnızca birkaç gün kullanılan ekipmandır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çanakkale'ye bağlıyız ama size Bandırma'dan hizmet almak daha mı avantajlı?",
                cevap:
                    "Karar idari bağlılığa göre değil, yol mesafesine göre verilmelidir. Biga'nın kuzey yönü Marmara kıyı hattına açıktır ve bu hat üzerindeki ulaşım, ilçedeki birçok tesis için pratik olarak daha kısadır. Bunun iki somut karşılığı vardır: nakliye kaleminin düşmesi ve arıza durumunda ikame makinenin daha hızlı ulaşması. Yine de her tesis için doğru cevap aynı değildir; ilçenin güney kesimindeki bir saha için başka bir hat daha uygun olabilir. Bu yüzden teklif öncesinde tam adresinizi alır, hangi hattan gitmenin daha kısa olduğunu açıkça hesaplarız — mesafe bizim iç meselemiz değil, sizin fiyatınızın parçasıdır.",
            },
            {
                soru: "Vinç yolumuzda bakım yapılacak ama üretim vinci de kullanıyor; nasıl çözülür?",
                cevap:
                    "Bu iki iş aynı anda yürüyemez ve bunu baştan söylemek en dürüst yaklaşımdır. Uygulanabilir üç kurgu vardır. Birincisi, vincin kilitlenerek çalışma bölgesinin dışına park edilmesi ve bakımın o pencerede yapılması. İkincisi, holde iki vinç varsa çalışma bölgesinin bölünmesi — bir bölümde vinç çalışırken diğer bölümde bakım yapılır, aradaki sınır fiziksel olarak işaretlenir. Üçüncüsü, işin planlı duruşa veya hafta sonuna taşınmasıdır. Hangisi seçilirse seçilsin değişmeyen kural şudur: hareket hâlindeki vincin yolu üzerinde veya askıdaki yükün altında sepet yükseltilmez; bu, esnetilebilir bir tercih değildir.",
            },
            {
                soru: "Açık stok sahamızın zemini stabilize; forklift burada çalışır mı?",
                cevap:
                    "Standart depo forklifti bu zeminde zorlanır — küçük sert tekerlekler stabilize üzerinde hem tutunmaz hem batar. Doğru seçim arazi tipi forklifttir: büyük havalı tekerlekleri yükü daha geniş alana yayar ve düzensiz yüzeyde tutuş sağlar. Yine de zemin tek başına yeterli bilgi değildir; yükün gerçek ağırlığı, istif yüksekliği ve sahada eğim olup olmadığı da seçime girer. Yağışlı dönemlerde stabilize zeminin taşıma gücü belirgin biçimde düşer, bu dönemlerde çalışma güzergâhının ayrıca değerlendirilmesi gerekir. Keşifte bu dört veriyi birlikte alır, makineyi sahaya göre seçeriz.",
            },
            {
                soru: "Üretimimiz üç vardiya sürüyor; hiç durmadan bakım yaptırabilir miyiz?",
                cevap:
                    "Kısmen. İşleri iki gruba ayırırız: hattın üzerine gelmeyen kalemler üretim sürerken yapılabilir, hat üstü kalemler ise duruş ister. Birinci gruba giren işler sanıldığından fazladır — depo ve sevkiyat tarafı, koridorlar, dış cephe, çatının hat dışı kesimleri, saha aydınlatması. Bu kalemler için tek şart, çalışma alanının altının fiziksel olarak kapatılması ve alanın üretim trafiğinden ayrılmasıdır. İkinci grup için ise vardiya değişim aralıkları veya planlı duruşlar kullanılır. Keşifte tesis planı üzerinde bu iki bölgeyi işaretler, hangi kalemin hangi gruba girdiğini üretim sorumlunuzla birlikte kararlaştırırız.",
            },
            {
                soru: "Uzun süreli kiralamada makine arızalanırsa ne kadar sürede yenisi gelir?",
                cevap:
                    "Süre iki değişkene bağlıdır: arızanın türü ve sahanın konumu. Küçük arızaların önemli bölümü yerinde giderilir; teknik ekip sahaya gider, parça değişimi veya ayar yapılır ve makine aynı gün çalışmaya döner. Yerinde çözülemeyen durumlarda ikame makine sevk edilir; burada belirleyici olan mesafe ve o gün parkta uygun sınıfın bulunmasıdır. Uzun süreli sözleşmelerde bu konuyu tahmine bırakmayız — ikame taahhüdünün süresi sözleşmede yazılır ve tesisinizin kritiklik düzeyine göre belirlenir. Üretimi doğrudan durduran bir kullanım söz konusuysa, sahada yedek makine bulundurma seçeneğini de birlikte değerlendiririz.",
            },
            {
                soru: "Yeni hol yatırımımız var; ekipmanı ne zaman planlamalıyız?",
                cevap:
                    "İnşaat programını yaparken, yani ilk kazma vurulmadan önce. Yatırım işlerinde ekipman ihtiyacı evrelere göre değişir: kaba yapıda yüksek erişimli bomlu, mekanik-elektrik montajında makaslı ve eklemli, devreye almada kompakt sınıflar öne çıkar. Bu eğriyi program üzerine oturttuğunuzda üç kazanç doğar — makineler önceden rezerve edilir, evre geçişlerinde ekipman değişimi tek sefere bağlanır ve sahada boş bekleyen makineye kira ödenmez. Plansız yürüyen yatırımların klasik kaybı budur: aylarca sahada duran ama toplamda birkaç gün kullanılan ekipman. Programınızı paylaşırsanız bu tabloyu birlikte çıkarır, kiralama takvimini inşaat takvimine bağlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Biga'nın Çanakkale'ye bağlı, Marmara kıyı hattına açık bir sanayi ilçesi olduğu ve karayolu bağlantısıyla Bandırma yönüne dönük çalıştığı kamuya açık coğrafi bilgidir; rota günü, ikame taahhüdü ve evre bazlı ekipman planı firma uygulamasıdır.",
    },
};
