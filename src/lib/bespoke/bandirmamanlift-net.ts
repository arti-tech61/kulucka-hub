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

    "bolge:balikesir-osb": {
        h1: "Balıkesir OSB'de Platform, Manlift ve Forklift Kiralama",
        giris:
            "Balıkesir il merkezindeki organize sanayi dokusu, Bandırma kıyı kuşağından farklı bir mantıkla çalışır. Kıyıda üretimin ritmini gemi ve liman belirlerken, il merkezinde belirleyici olan karayolu ağı ve iç pazara dönük üretim düzenidir. OSB parselleri planlı yerleşimlidir: yollar geniş, altyapı hazır, tesisler birbirine yakındır. Ekipman kiralama açısından bu, kıyı sahalarına kıyasla daha öngörülebilir bir çalışma ortamı demektir — kapı düzeni bellidir, zemin çoğunlukla betondur, nakliye aracının manevra sorunu neredeyse yoktur. Buna karşılık kendi kısıtları vardır: bölgenin ortak altyapı kuralları, tesislerin kendi giriş prosedürleri ve üretimi durdurmadan çalışma zorunluluğu. Bölgedeki talep karma bir yelpaze oluşturur — gıda ve yem üretimi, makine ve metal imalatı, plastik ve ambalaj, yapı malzemesi tesisleri aynı bölgede yan yana bulunur. Bu sayfa, Balıkesir OSB dokusunda kiralamanın nasıl planlandığını ve hangi ön bilgilerin doğru makineyi tek seferde belirlediğini anlatır.",
        maddeler: [
            {
                baslik: "Parsel içi yerleşimden çıkan makine seçimi",
                metin:
                    "OSB tesislerinde makine seçimi çoğu zaman işin kendisinden değil, tesisin geometrisinden çıkar: hol kapısının ölçüsü, kapı sonrası ilk dönüşün alanı, hol içi net yükseklik ve kolon aralıkları. Aynı yükseklikteki iki iş, tesisin iç düzenine göre farklı makine ister — geniş açıklıklı bir holde makaslı sınıf yeterken, kolonlarla bölünmüş bir alanda engeli aşırtacak eklemli sınıf gerekir. Bu üç ölçüyü telefonda alırsak sevkiyattan önce doğru makineyi kesinleştiririz.",
            },
            {
                baslik: "Gıda ve yem tesislerinde temizlik uyumu",
                metin:
                    "Bölgedeki gıda ve yem üretim tesislerinde ekipman, üretim güvenliğinin parçası sayılır: makine girişte temizlenir, tekerlek yüzeyleri kontrol edilir, hidrolik kaçak riski en aza indirilecek şekilde ön kontrol sıkılaştırılır. Toz yoğun ortamlarda ise makinenin filtre kontrol aralığı kısaltılır. Kapalı üretim alanında akülü sınıf çalışır; dizel bir makinenin bu alanlara sokulması gündeme bile gelmez. Bu uyum kalemleri kiralama bedelinin içindedir, sonradan fark çıkarılmaz.",
            },
            {
                baslik: "Metal ve makine imalatında tezgâh üstü işler",
                metin:
                    "İmalat tesislerinde erişim ihtiyacı çoğunlukla tezgâh hatlarının üzerinde doğar: aydınlatma, havalandırma, kablo tavası, pano ve otomasyon işleri. Buradaki asıl kısıt yükseklik değil, altta duran ekipmandır — tezgâhın üzerine makine kurulamaz, sepetin yandan uzanması gerekir. Bu geometride eklemli sınıf öne çıkar ve konumlanma noktası hol planı üzerinde önceden belirlenir. Talaş, yağ ve kaygan zemin bölgelerinde tekerlek tutuşu ayrıca değerlendirilir.",
            },
            {
                baslik: "Depo ve sevkiyat bölümlerinde forklift takviyesi",
                metin:
                    "OSB tesislerinin depo bölümleri, forklift kiralamanın ana talep kaynağıdır: dönemsel yoğunlukta ek makine, kendi makinesi bakıma girdiğinde yedek, raf yenilemesinde proje bazlı takviye. Kapalı depoda akülü veya LPG'li sınıf, açık sevkiyat sahasında dizel sınıf çalışır. Teslimatta iki şeyi standart olarak isteriz: yüklerin gerçek ağırlık bilgisi ve zemindeki kanal-mazgal haritası. İkisi de operatöre ilk gün verilir; kapasite tartışması sahada yapılmaz.",
            },
            {
                baslik: "Bölge ortak altyapısında çalışma",
                metin:
                    "OSB içinde parsel dışı işler de vardır: bölge aydınlatma direkleri, yol kenarı tabelaları, ortak altyapı hatları. Bu işlerde muhatap tesis değil bölge yönetimidir ve çalışma, bölge trafiğini etkilemeyecek şekilde planlanır. Yol üzerinde çalışılacaksa alan koni ve levhayla işaretlenir, ağır araç geçiş güzergâhı açık tutulur. Direk üzerinde çalışmalarda enerji kesme teyidi alınmadan sepet yükseltilmez; bu kural bölge içinde de tesis içindeki kadar katıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sanayi koluna göre ekipman ve ön koşul tablosu",
                paragraflar: [
                    "Balıkesir OSB'de yaygın sanayi kollarının ekipman profili ve teklif öncesi netleşmesi gereken koşullar aşağıdadır. Sağdaki sütun, keşif randevusundan önce telefonda sorduğumuz bilgidir.",
                ],
                tablo: {
                    basliklar: ["Sanayi kolu", "Yaygın erişim işi", "Ekipman sınıfı", "Ön koşul"],
                    satirlar: [
                        ["Gıda ve yem", "Tavan tesisatı, silo çevresi", "Akülü makaslı", "Hijyen prosedürü"],
                        ["Makine-metal imalat", "Tezgâh üstü, pano işleri", "Akülü eklemli", "Zemin ve kolon düzeni"],
                        ["Plastik ve ambalaj", "Hat üstü kanal, aydınlatma", "Akülü makaslı", "Duruş penceresi"],
                        ["Yapı malzemesi", "Stok istifi, hol vinci", "Forklift + bomlu", "Toz ve zemin durumu"],
                        ["Depo ve lojistik", "Raf montajı, çatı altı", "Makaslı + forklift", "Koridor ve tavan ölçüsü"],
                    ],
                },
            },
            {
                baslik: "İki kapı kuralı: bölgeden tesise giriş",
                paragraflar: [
                    "Organize sanayi bölgesinde makine iki kapıdan geçerek işe başlar: önce bölgenin ana giriş kontrolü, sonra tesisin kendi güvenlik düzeni. İlk kapı için araç ve sürücü bilgileri, ikinci kapı için ekipman evrakı ve operatör belgeleri gerekir. Bu iki adımı sevkiyat gününe sıkıştırmak yerine bir gün önceden yazışmayla bitiririz; kapıda bekleyen ağır nakliye aracı hem sizin vaktinizi hem bölge trafiğini yer.",
                    "Bazı tesisler bu iki adıma bir üçüncüsünü ekler: kendi işe giriş eğitimi veya saha oryantasyonu. Süresi genellikle yarım günü bulmaz ama takvimde yeri olmalıdır. Operatör o tesise ilk kez giriyorsa bu süreyi kiralama planına açıkça yazarız; takvimden gizlenen yarım gün, ilk sabah sahaya alınmayan makine olarak geri döner ve kimseye kazandırmaz.",
                ],
            },
            {
                baslik: "Üretimi durdurmadan çalışmanın pratiği",
                paragraflar: [
                    "OSB tesislerinde en pahalı şey duran hattır; bu yüzden işlerin önemli bölümü hattın zaten durduğu aralıklara veya hattın etkilenmediği bölgelere yerleştirilir. Vardiya arası çalışmanın başarısı üç hazırlığa bağlıdır: makine molada değil çalışma noktasının dibinde bekler, malzeme ve el aleti sepete önceden yüklenir, iş adım listesine dökülmüştür. Bu hazırlık yapıldığında kısa bir arada gerçekten iş biter; yapılmadığında ara, işin yarısında hat sesiyle kapanır.",
                    "Birden fazla arayı kapsayan işlerde kalemler küçük paketlere bölünür ve her paket tek araya sığacak boyutta tutulur. Buradaki altın kural yarım kalan iş bırakmamaktır — tavana yarı bağlanmış bir kanal veya sökülüp yerine takılmamış bir armatür, bir sonraki araya kadar üretimin üzerinde risk olarak asılı kalır. Paketleme keşifte yapılır ve üretim sorumlunuzun onayıyla takvime bağlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hol içi net yüksekliğimiz 10 metre; hangi makine sınıfını istemeliyiz?",
                cevap:
                    "Net yükseklik tek başına yeterli veri değildir, ama iyi bir başlangıçtır. Bu bandda makaslı platformlar genellikle yeterli çalışma yüksekliğine ulaşır ve dar gövdeli akülü modeller hol içinde rahat hareket eder. Belirleyici olan ikinci soru şudur: hedef noktanın altında ne var? Doğrudan zeminden erişilebilen bir tavan noktası için makaslı sınıf en ekonomik çözümdür; ancak hedefin altında tezgâh, hat veya raf varsa sepetin yandan uzanması gerekir ve eklemli sınıfa geçilir. Üçüncü soru kapı ölçüsüdür — makinenin hole girebilmesi gerekir. Bu üç bilgiyi verirseniz sevkiyattan önce doğru modeli kesinleştiririz.",
            },
            {
                soru: "Kendi forkliftimiz bakıma girecek; kısa süreli yedek makine sağlıyor musunuz?",
                cevap:
                    "Evet, bu bölgeden en sık gelen taleplerden biridir ve genellikle birkaç gün ile birkaç hafta arasında sürer. Süreci hızlandırmak için üç bilgiye ihtiyacımız var: taşınacak yükün gerçek ağırlığı, azami istif yüksekliği ve makinenin çalışacağı alanın kapalı mı açık mı olduğu. Kapalı alanda akülü veya LPG'li, açık sahada dizel sınıf öneririz. Bakım tarihinizi önceden bildirirseniz makine o güne rezerve edilir ve kendi makineniz servise girdiği gün yedeği sahada olur; bildirim geç geldiğinde ise parkın o günkü doluluğuna bağlı olarak bir-iki gün bekleme yaşanabilir. Operatörsüz kiralamada kullanacak kişinin yeterlilik belgesi teslimatta görülür.",
            },
            {
                soru: "Tesisimizde toz yoğun; makineye zarar verirse fark bize mi yansır?",
                cevap:
                    "Hayır. Ortam koşulu keşifte öğrenildiyse onun bakım yükü fiyatın içindedir ve iş sonunda ek kalem çıkmaz. Tozlu ortama giden makinede filtre kontrol aralığı kısaltılır, hareketli yüzeyler iş sonunda temizlenip korunur; bu işçilik bizim standart protokolümüzdür ve makinenin ömrünü korumak öncelikle bizim çıkarımızadır. Kiracıya yazılan tek durum kullanım hatasıdır — kapasite aşımı, çarpma, devirme gibi. Bu ayrım sözleşmede açık maddedir; belirsiz bırakılan sorumluluk iş bitiminde tartışma üretir ve biz o tartışmayı baştan kapatmayı tercih ederiz. Bize düşen tek beklenti, ortamın gerçek hâlinin teklif aşamasında paylaşılmasıdır.",
            },
            {
                soru: "Bölge içinde birden fazla tesisimiz var; makineyi kendimiz taşıyabilir miyiz?",
                cevap:
                    "Taşımamanızı isteriz. İş makinesinin araca yüklenmesi, bağlanması ve karayolunda taşınması kendi başına uzmanlık ve sigorta konusudur; hatalı bağlanan bir makinenin yolda kayması, kiralama bedelinin çok üzerinde hasar üretir. Doğrusu şudur: tesisler arası transferi bize bildirirsiniz, taşımayı bizim nakliye düzenimiz yapar ve makine yeni tesiste zemin ve konum kontrolüyle işe başlar. Bölge içi kısa transferler uygun tarifeyle döner ve iki tesisin işini aynı kiralama dönemine yerleştirmek, iki ayrı kiralamadan belirgin biçimde ekonomiktir. Transferi önceden planlarsanız makine ertesi sabah ikinci tesiste hazır olur, gün kaybı yaşanmaz.",
            },
            {
                soru: "Üretimi hiç durduramıyoruz; çatı ve tavan işleri nasıl yapılacak?",
                cevap:
                    "İşi hattın coğrafyasına göre dilimleyerek. Holün sevkiyat ucu, ara stok bölgesi ve hat dışı koridorlar mesai içinde çalışılabilir; doğrudan hat üzerine gelen kesimler ise planlı duruşa veya hafta sonuna bırakılır. Çalışılan dilimde alt kot fiziksel olarak kapatılır — üstten düşen küçük bir parçanın hat üzerindeki maliyeti, bariyerin maliyetiyle kıyaslanamaz. Bu dilimlemeyi keşifte hol planınız üzerinde yapar, hangi kalemin hangi dilime girdiğini üretim müdürünüzle birlikte işaretleriz. Planı olmayan bir hol çalışması, çoğu zaman hem işi hem üretimi yarım bırakır; birkaç saatlik planlama bu riski büyük ölçüde ortadan kaldırır.",
            },
            {
                soru: "Yıllık planlı bakımımız her yıl aynı dönemde; makineyi önceden ayırtabilir miyiz?",
                cevap:
                    "Ayırtabilirsiniz ve şiddetle öneririz. Planlı bakım dönemleri bölgede kümelenir; birçok tesis benzer takvimlerde durduğu için o haftalarda talep aynı anda yükselir. Tarihini önceden bildiren tesis makineyi garanti altına alır, bildirmeyen ise parkın doluluğuna göre sıraya girer. Rezervasyon için kesin tarih şart değildir — hedeflenen hafta bile makinenin o döneme ayrılması için yeterlidir, kesinleşme yaklaştıkça takvim daraltılır. Ayrıca her yıl tekrarlanan bakımlar için tesis bazlı bir kayıt tutarız: sahanızın koşulları, giriş prosedürü ve kullandığınız makine sınıfı kayıtlıdır, böylece ertesi yıl keşif ve evrak süreci baştan yaşanmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Balıkesir il merkezinde planlı organize sanayi yerleşimi bulunduğu ve bölgede gıda-yem, makine-metal, plastik-ambalaj ile yapı malzemesi üretiminin yaygın olduğu kamuya açık genel bilgidir; giriş süreci, dilimleme ve rezervasyon uygulamaları firma pratiğidir.",
    },

    "bolge:susurluk-sanayi-bolgesi": {
        h1: "Susurluk Sanayi Bölgesinde Manlift ve Forklift Kiralama",
        giris:
            "Susurluk, adını süt ve süt ürünleriyle duyurmuş bir ilçedir ve bu kimlik, ilçedeki sanayi dokusunun da omurgasını oluşturur. Süt toplama ve işleme tesisleri, yem üretimi, hayvancılık işletmeleri ve bunlara bağlı soğuk zincir yapıları aynı coğrafyada iç içe çalışır. Ekipman kiralama açısından bu doku, ağır sanayiden tamamen farklı bir çalışma disiplini gerektirir. Gıda üretiminde hijyen bir tercih değil, üretimin kendisidir: alana giren her ekipmanın temizliği, hidrolik sızıntı riski ve bıraktığı iz doğrudan ürün güvenliğini ilgilendirir. İkinci belirleyici, soğuk zincirdir — soğuk hava depolarında ve düşük sıcaklıklı alanlarda ekipmanın davranışı normal ortamdan farklıdır ve bu, makine seçiminden çalışma süresine kadar planı etkiler. Üçüncüsü ise takvimdir: hayvancılığa dayalı üretim durmaz, süt her gün gelir ve tesis bu akışa göre nefes alır. Bu sayfa, Susurluk'un gıda ağırlıklı sanayi dokusunda erişim ekipmanı kiralamanın nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Süt işleme tesislerinde temizlik döngüsüne uyum",
                metin:
                    "Süt işleme tesislerinde üretim, düzenli temizlik ve dezenfeksiyon döngüleriyle birlikte yürür ve bu döngü aynı zamanda bakım işleri için doğal bir penceredir. Erişim işlerini bu pencereye yerleştirmek iki yönlü kazandırır: hat zaten durmuştur ve çalışma sonrası temizlik zaten programdadır. Makine alana girmeden temizlenir, tekerlek yüzeyleri kontrol edilir, gerekiyorsa koruyucu örtü kullanılır. Bu adımlar kiralama planında ayrı bir kalem olarak yer alır, sahada doğaçlama yapılmaz.",
            },
            {
                baslik: "Soğuk hava depolarında ekipman davranışı",
                metin:
                    "Düşük sıcaklıklı depolarda ekipman farklı davranır: akü performansı düşer, hidrolik akışkan soğukta ağırlaşır, yoğuşma nedeniyle zemin kaygan hâle gelebilir. Bu alanlarda çalışma süresi baştan gerçekçi hesaplanır ve makinenin soğuk ortamda kalacağı süre sınırlandırılır. Zemin tarafında ise buzlanma riski her vardiya öncesi kontrol edilir. Soğuk depo işlerinde ekip için de plan yaparız — kısa çalışma dilimleri, uzun aralar; bu, hem insan hem makine için doğru olan yaklaşımdır.",
            },
            {
                baslik: "Yem ve tahıl tesislerinde toz ortamı",
                metin:
                    "Yem üretimi ve tahıl işleme yapılan tesislerde havadaki organik toz, hem makine hem güvenlik açısından dikkat gerektirir: filtreler hızla dolar, hareketli yüzeylerde birikinti oluşur ve tozun yoğun olduğu kapalı hacimlerde kıvılcım üreten hiçbir işlem izinsiz yapılmaz. Bu tesislere giden makinelerde filtre kontrol aralığı kısaltılır ve iş dönüşü temizlik standart adımdır. Sıcak iş gerektiren kalemler ise tesisin izin sistemine bağlanır; izin olmadan bu alanlarda kaynak veya taşlama yapılmaz.",
            },
            {
                baslik: "Çiftlik ve hayvancılık yapılarında erişim",
                metin:
                    "Büyük hayvancılık işletmelerinin barınak yapıları geniş açıklıklı, yüksek tavanlı ve genellikle yarı açıktır; havalandırma fanları, aydınlatma, çatı sacı ve yemleme sistemi bakımı düzenli erişim ister. Bu yapılarda zemin çoğunlukla beton olsa da nemli ve kaygandır; ayrıca hayvanların bulunduğu bölümlerde çalışma, işletmenin yönlendirmesine göre bölünür. Barınak içinde egzoz nedeniyle akülü sınıf tercih edilir ve gürültülü kalemler mümkün olduğunca hayvanların bulunmadığı bölümlere yazılır.",
            },
            {
                baslik: "Günlük akışın durmadığı üretimde plan",
                metin:
                    "Süt üretimi takvim tanımaz: hammadde her gün gelir ve işlenmesi gerekir. Bu, bakım penceresinin kısa ve düzenli olduğu anlamına gelir — birkaç saatlik günlük duruşlar, uzun kapanışlardan daha sık kullanılır. Bu ritme uygun kiralama, işi büyük paketler yerine küçük ve tekrarlı ziyaretlere bölmektir. Aynı tesise düzenli gelen ekip, sahayı ve prosedürü bildiği için her ziyarette hazırlık süresi kısalır; bu kazanç, kısa pencerelerde doğrudan iş süresine dönüşür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Susurluk'ta çalışma ortamına göre plan tablosu",
                paragraflar: [
                    "İlçedeki başlıca çalışma ortamlarının ekipman ve prosedür farkları aşağıdadır. Kısıt sütunu, o ortamda planı doğrudan belirleyen unsuru gösterir.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Erişim işi", "Ekipman", "Belirleyici kısıt"],
                    satirlar: [
                        ["Süt işleme alanı", "Tavan tesisatı, boru hattı", "Akülü makaslı", "Temizlik döngüsü"],
                        ["Soğuk hava deposu", "Evaporatör, aydınlatma", "Akülü, kısa dilim", "Sıcaklık ve akü"],
                        ["Yem-tahıl tesisi", "Elevatör, silo çevresi", "Eklemli bomlu", "Toz ve sıcak iş izni"],
                        ["Hayvan barınağı", "Fan, çatı, yemleme hattı", "Akülü eklemli", "Hayvan bölümü düzeni"],
                        ["Açık yükleme sahası", "İstif, sevkiyat", "Dizel forklift", "Zemin ve hava"],
                    ],
                },
            },
            {
                baslik: "Gıda tesisinde hidrolik risk yönetimi",
                paragraflar: [
                    "Gıda üretim alanında hidrolik sızıntı, teknik bir arıza değil doğrudan ürün güvenliği olayıdır; bir damla, bir partinin imhasına yol açabilir. Bu yüzden gıda sahalarına giden makinelerde ön kontrol standardın üzerinde tutulur: hortum ve rakor bağlantıları iş öncesinde tek tek gözden geçirilir, aşınma emaresi gösteren parça sahaya çıkmadan değiştirilir. Bu kontrol, makinenin son bakım tarihinden bağımsız olarak her gıda sevkiyatı öncesi tekrarlanır.",
                    "İkinci katman sahada alınır: çalışma noktasının altına koruyucu örtü serilir, gerekiyorsa emici malzeme hazır bulundurulur ve makine üretim hattının doğrudan üzerine konumlandırılmaz. Bu tedbirlerin hiçbiri kiralama bedeline ek kalem olarak yazılmaz; gıda tesisine hizmet vermenin doğal maliyetidir. Tesis tarafında ise tek beklentimiz, çalışılacak alanın ürün akışına göre önceden boşaltılmış olmasıdır.",
                ],
            },
            {
                baslik: "Kırsal yerleşimde sevkiyat ve zemin",
                paragraflar: [
                    "İlçedeki tesislerin bir bölümü yerleşim merkezinin dışında, tarım ve hayvancılık alanlarının içindedir; buraya giden yollar her zaman ağır nakliyeye uygun genişlikte olmayabilir. Sevkiyat planını bu yüzden adres üzerinden değil, güzergâh üzerinden yaparız: yol genişliği, keskin dönüşler, köprü ve menfez durumu ile son yüz metrenin zemini önceden değerlendirilir. Gerekiyorsa makine uygun bir noktada indirilip kalan mesafeyi refakatçi eşliğinde kendi gücüyle yürür.",
                    "Zemin tarafında kırsal sahaların ortak sorunu yağış sonrası taşıma gücü kaybıdır. Stabilize veya toprak zeminli bir işletme sahasında yağmurun ardından makine hem batma hem kayma riski taşır. Bu yüzden dış saha işlerinde hava durumu plana dahil edilir ve gerekiyorsa çalışma birkaç gün ertelenir. Ertelemenin maliyeti, batmış bir makinenin kurtarma maliyetinin yanında her zaman küçüktür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim alanımıza giren ekipman için hijyen belgesi veya sertifika istiyor musunuz?",
                cevap:
                    "Ekipmanın kendisi için gıda sertifikası diye bir belge yoktur; olan şey, tesisin kendi hijyen prosedürüne uyumdur ve biz o prosedürü uygularız. Pratikte şu adımları izleriz: makine tesis dışında temizlenir, tekerlek yüzeyleri ve şase alt bölümü kontrol edilir, hidrolik bağlantılar iş öncesi gözden geçirilir ve gerekiyorsa koruyucu örtü kullanılır. Sizin sorumlunuz giriş öncesi makineyi görür ve onay verir. Bunun yanında operatörün kişisel hijyen kurallarınıza uyması — kullanacağı koruyucu donanım, alana giriş-çıkış düzeni — sizin talimatınıza göre belirlenir. Prosedürünüzü önceden paylaşırsanız hazırlığı sevkiyattan önce tamamlarız.",
            },
            {
                soru: "Soğuk hava deposunda ne kadar süre kesintisiz çalışılabilir?",
                cevap:
                    "Kesin bir saat vermek yanıltıcı olur; süre depo sıcaklığına, makine sınıfına ve işin niteliğine göre değişir. Ancak değişmeyen gerçekler var: düşük sıcaklıkta akü kapasitesi belirgin biçimde düşer, hidrolik sistem ısınana kadar daha ağır çalışır ve ekip için de maruziyet süresi sınırlıdır. Bu yüzden soğuk depo işlerini kısa çalışma dilimlerine böler, aralarda makineyi ılık bölgeye çıkarırız. Planı yaparken deponun çalışma sıcaklığını ve işin tahmini süresini bize bildirmeniz yeterlidir; buna göre hem makine seçimini hem dilimleme düzenini kurarız. Kesintisiz çalışmayı zorlamak, işin ortasında biten aküyle sonuçlanır ve toplam süreyi uzatır.",
            },
            {
                soru: "Tesisimiz günde sadece birkaç saat duruyor; bu ritimde bakım yürür mü?",
                cevap:
                    "Yürür ve aslında bu ritim, doğru kurgulandığında uzun kapanışlardan daha verimlidir. Anahtar, işi küçük ve tamamlanabilir paketlere bölmektir: her paket tek duruş penceresine sığacak boyutta tanımlanır ve yarım kalan iş bırakılmaz. Makine, duruş saatinden önce çalışma noktasının dibinde hazır bekler; malzeme ve el aletleri sepete önceden yüklenir. Aynı tesise düzenli gelen ekip sahayı bildiği için hazırlık süresi her ziyarette kısalır ve bu kazanç doğrudan iş süresine eklenir. Bu düzende kiralamayı da tekrarlı kısa ziyaretler biçiminde kurgular, makineyi sahada gereksiz yere bekletmeyiz.",
            },
            {
                soru: "Barınakta hayvanlar varken çalışılabilir mi?",
                cevap:
                    "İşletmenin yönlendirmesiyle çoğu zaman çalışılabilir, ama düzeni birlikte kurmak gerekir. Uygulamamız, barınağı bölümlere ayırıp hayvanların bulunmadığı kesimden başlamaktır; işletme bölüm değiştirdikçe çalışma da onu takip eder. Makine sınıfı akülüden seçilir — kapalı barınakta egzoz hem hayvan hem ekip için sorundur. Gürültülü kalemler mümkün olduğunca boş bölümlere yazılır, yukarıdan malzeme düşme riski taşıyan işlerde alt alan geçici olarak boşaltılır. Zemin tarafında nem ve kaygan yüzey her ziyarette kontrol edilir. Bu koordinasyonu işletme sorumlunuzla keşifte yapar, çalışma sırasını yazılı olarak belirleriz.",
            },
            {
                soru: "Yem tesisimizde kaynak işi var; tozlu ortamda bu nasıl yapılır?",
                cevap:
                    "Organik tozun yoğun olduğu kapalı hacimlerde kıvılcım üreten hiçbir işlem, tesisin izin sistemi devreye girmeden yapılmaz. Süreç şöyle işler: iş, tesisin sıcak iş izni prosedürüne bağlanır; alan izin şartlarına göre temizlenir ve gerekiyorsa havalandırılır, çalışma bölgesinin altı ve çevresi boşaltılır, uygun sınıf yangın söndürücü çalışma noktasında hazır bulundurulur. Bizim payımıza düşen, makineyi ve operatörü bu şartlara uygun hâle getirmektir — sepet tabanı korunur, bom izin kapsamındaki bölgenin dışına uzatılmaz ve izin saatleri dışında çalışılmaz. İznin bir kopyası gün boyu makinede kalır. İzin alınamıyorsa iş yapılmaz; bu konuda esneme payımız yoktur.",
            },
            {
                soru: "Sahamıza giden yol dar ve yağmurdan sonra çamurlaşıyor; makine nasıl gelecek?",
                cevap:
                    "Bu durumu sipariş anında bize söylemeniz en önemli adımdır; gerisini planla çözeriz. İlk olarak güzergâhı harita üzerinden birlikte inceleriz: yol genişliği, dönüş yarıçapları ve son yüz metrenin zemini. Ağır çekicinin giremediği noktada makine indirilir ve kalan mesafeyi refakatçi eşliğinde kendi gücüyle yürür; bu yürüyüş öncesi eğim, menfez ve havai hat yüksekliği kontrol edilir. Yağış sonrası taşıma gücü düşmüşse tercihimiz açıktır: işi birkaç gün ertelemek. Çamura giren bir makinenin kurtarılması hem gecikme hem masraf üretir ve bu maliyet, ertelemenin maliyetiyle kıyaslanamaz. Zemin durumundan emin değilseniz sevkiyattan önce fotoğraf paylaşmanız yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Susurluk'un süt ve süt ürünleriyle tanınan, hayvancılık ve yem üretimine dayalı bir ilçe olduğu kamuya açık genel bilgidir; hijyen adımları, soğuk depo dilimlemesi ve sevkiyat pratikleri firma uygulamasıdır.",
    },

    "bolge:canakkale-osb-cevre-ili": {
        h1: "Çanakkale ve Çevre İlde Platform, Manlift Kiralama",
        giris:
            "Bandırma parkımızın hizmet alanı il sınırında bitmez; Marmara'nın güney kıyısı boyunca batıya uzanan hat, Çanakkale'yi de doğal bir çalışma alanı hâline getirir. Bu hattaki tesisler için idari sınır pratik bir anlam taşımaz — belirleyici olan yol mesafesi ve müdahale süresidir. Çanakkale tarafındaki talep karma bir yapı gösterir: kıyı şeridinde su ürünleri ve gıda işleme tesisleri, iç kesimde tarımsal sanayi ve depolama yapıları, kent merkezinde ise ticari bina, otel ve kamu yapılarının bakım ihtiyacı bulunur. Bu çeşitlilik, tek bir makine tipiyle karşılanabilecek bir talep değildir; her işin kendi sınıfı ve kendi planlama mantığı vardır. Çevre il hizmetinde bizim için asıl mesele mesafeyi ekonomik kılmaktır — çünkü uzak bir sahaya tek makine için yapılan sefer, kiralama bedelinin dengesini bozar. Bu sayfada, çevre il çalışmasını nasıl planladığımızı, hangi durumlarda avantajlı olduğunu ve hangi durumlarda açıkça daha yakın bir çözüm önerdiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Mesafeyi ekonomik kılan rota mantığı",
                metin:
                    "Çevre il işlerinde nakliye, kısa süreli kiralamalarda toplam bedelin belirleyici kalemi hâline gelebilir. Bunu eriten mekanizma rota günüdür: aynı hat üzerindeki işleri aynı güne toplayıp tek sefere bağlarız ve nakliye payı işler arasında bölünür. Bu düzenden yararlanmanın tek şartı tarih esnekliğidir — bir-iki günlük esneklik veren müşteri, işini mevcut bir sefere bağlar. Tarihi kesin olan işlerde sefer tek başına planlanır ve bu farkı teklif aşamasında açıkça belirtiriz.",
            },
            {
                baslik: "Uzun süreli işlerde konaklamalı çalışma",
                metin:
                    "Mesafenin gerçekten avantaja dönüştüğü senaryo, makinenin sahada uzun süre kalmasıdır. Haftalar süren bir montaj, bakım veya yatırım işinde nakliye tek seferlik bir kalem olarak amorti olur ve günlük maliyet yakın mesafeli işlerle eşitlenir. Bu tür işlerde makinenin sahada konaklaması için güvenli bir alan, şarj veya yakıt düzeni ve gece güvenliği baştan konuşulur. Uzun süreli çalışmalarda periyodik bakım ziyaretleri de plana yazılır; makine sahada unutulmaz.",
            },
            {
                baslik: "Su ürünleri ve gıda tesislerinde çalışma",
                metin:
                    "Kıyı şeridindeki su ürünleri ve gıda işleme tesisleri, hijyen ve nem olmak üzere iki koşulu birlikte dayatır. Üretim alanına giren makine temizlenir, hidrolik bağlantılar iş öncesi kontrol edilir ve alanda akülü sınıf kullanılır. Nemli ortam elektrik aksamı için yıpratıcı olduğundan pano koruma düzeyi seçim kriteridir. Bu tesislerde çalışma penceresi genellikle temizlik döngüsüne bağlıdır; işi bu döngüye yerleştirmek hem tesise hem bize zaman kazandırır.",
            },
            {
                baslik: "Kent merkezinde bina ve ticari yapı işleri",
                metin:
                    "Çanakkale merkezindeki talep, sanayi sahalarından farklı bir dille gelir: otel ve iş merkezi cepheleri, mağaza tabelaları, kamu binalarında aydınlatma ve bakım, çatı ve oluk işleri. Bu işlerde makine sınıfı kompakt akülüdür ve asıl planlama konusu teknik değil sosyaldir — park alanının boşaltılması, yaya güvenliği, çalışma saati sınırları. Kaldırım veya yol işgali gerektiren durumlarda belediye koordinasyonu gerekebilir; bu ihtimal keşifte ayıklanır ve takvime yansıtılır.",
            },
            {
                baslik: "Tarımsal sanayi ve depolama yapıları",
                metin:
                    "İç kesimdeki tarımsal işleme ve depolama tesislerinde talep mevsimlik yükselir: hasat sonrası dönemde stok sahası büyür, forklift ihtiyacı artar, sezon dışında ise bakım kalemleri yığılır. Bu tesislerde çalışmanın ana kısıtları zemin ve hava koşullarıdır; stabilize sahalarda arazi tipi ekipman tercih edilir, yağış sonrası taşıma gücü ayrıca değerlendirilir. Mevsimlik talebin tarihi büyük ölçüde öngörülebilir olduğundan, bu dönemler için makine önceden rezerve edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çevre il işlerinde süre-maliyet dengesi",
                paragraflar: [
                    "Aşağıdaki tablo, iş süresinin çevre il hizmetinde maliyeti nasıl değiştirdiğini gösterir. Amacımız her işi almak değil, hangi kurgunun sizin için mantıklı olduğunu baştan söylemektir.",
                ],
                tablo: {
                    basliklar: ["İş süresi", "Nakliye payı", "Uygun kurgu", "Öneri"],
                    satirlar: [
                        ["Yarım-1 gün", "Yüksek", "Rota gününe bağlama", "Tarih esnekliği verin"],
                        ["2-5 gün", "Orta", "Tek sefer, sahada kalış", "Kalemleri birleştirin"],
                        ["1-3 hafta", "Düşük", "Konaklamalı kiralama", "Bakım ziyareti planlayın"],
                        ["Aylık ve üzeri", "Çok düşük", "Uzun dönem düzeni", "İkame süresini yazın"],
                        ["Tekrarlı kısa iş", "Bölünmüş", "Periyodik rota", "Sabit gün belirleyin"],
                    ],
                },
            },
            {
                baslik: "Arıza müdahalesinde mesafenin karşılığı",
                paragraflar: [
                    "Uzak sahaya makine vermenin en dürüst konuşulması gereken tarafı arıza senaryosudur. Yakın mesafede teknik ekip aynı gün sahaya ulaşır; uzak sahada bu süre uzar. Bunu gizlemek yerine üç katmanlı bir düzenle karşılarız. Birinci katman önlemedir: uzak sahaya çıkan makine, sefer öncesi standardın üzerinde kontrolden geçer ve aşınma emaresi gösteren parçalar peşinen değiştirilir. Uzak mesafede en ucuz arıza, hiç yaşanmayan arızadır.",
                    "İkinci katman uzaktan destektir — arızaların önemli bölümü kullanıcı kaynaklı veya basit ayar meselesidir ve telefonla yönlendirmeyle çözülebilir. Üçüncü katman ise saha müdahalesi ve gerekirse ikame makinedir; uzun süreli sözleşmelerde ikame süresi yazılı olarak taahhüt edilir ve bu süre mesafeye göre gerçekçi belirlenir. Üretimi doğrudan durduran kritik kullanımlarda ise sahada yedek makine bulundurma seçeneğini baştan masaya koyarız.",
                ],
            },
            {
                baslik: "Ne zaman daha yakın bir çözüm öneririz",
                paragraflar: [
                    "Her işi almak doğru değildir ve bunu açıkça söyleriz. Tek günlük, tek kalemlik, tarihi kesin bir iş için uzun mesafeli sefer, ödeyeceğiniz bedelin büyük bölümünün yola gitmesi anlamına gelir; böyle durumlarda size daha yakın bir çözüm aramanızı önermekten çekinmeyiz. Aynı şekilde, günlük müdahale gerektiren ve duruşa tahammülü olmayan bir kullanımda mesafenin getirdiği risk, fiyat avantajını götürür.",
                    "Buna karşılık üç durumda çevre il hizmeti net biçimde mantıklıdır: iş uzun sürelidir ve nakliye amorti olur; birden fazla kalem aynı sefere toplanabilir; ya da ihtiyaç duyulan makine sınıfı yakın çevrede kolay bulunmuyordur. Bu üçünden biri varsa mesafe bir dezavantaj olmaktan çıkar. Teklif aşamasında hangi kategoride olduğunuzu birlikte belirler, sonucu olduğu gibi paylaşırız — yanlış kurgulanmış bir kiralama, iki taraf için de kayıptır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çanakkale'deyiz ama Bandırma'dan hizmet almak mantıklı mı?",
                cevap:
                    "Cevap işin süresine ve niteliğine bağlıdır, adresin kendisine değil. Uzun süreli işlerde — haftalar süren bir montaj, bakım veya yatırım çalışmasında — nakliye tek seferlik bir kalem olarak amorti olur ve günlük maliyet yakın mesafeli bir kiralamayla eşitlenir; bu durumda mesafe pratik bir sorun oluşturmaz. Tek günlük ve tarihi kesin bir iş için ise durum tersine döner: bedelin önemli bölümü yola gider. Bu ikinci durumda size ya rota günümüze bağlanmayı ya da daha yakın bir çözüm aramayı öneririz. Kararı sizin adınıza vermeyiz ama hesabı olduğu gibi paylaşırız; süreyi ve tarihi söylerseniz hangi kategoride olduğunuz birkaç dakikada netleşir.",
            },
            {
                soru: "Makineyi haftalarca sahada tutacağız; bakımı kim, nasıl yapacak?",
                cevap:
                    "Uzun süreli kiralamalarda bakım bizim yükümlülüğümüzdür ve sahada unutulan makine diye bir şey olmaz. Kiralama başlarken periyodik bakım ziyaretlerinin takvimi belirlenir ve teknik ekip bu tarihlerde sahaya gelir; ziyaretler önceden bildirildiği için tesisinizin iş izni süreci de buna göre planlanır. Aradaki günlük kontroller — yağ seviyesi, lastik durumu, hidrolik kaçak kontrolü — operatörlü kiralamada operatörümüz, operatörsüz kiralamada ise kullanıcınız tarafından günlük kontrol formu üzerinden yapılır. Bu form basit ve kısadır; amacı erken uyarıdır. Formda dikkat çeken bir bulgu olduğunda ekip planlı ziyareti beklemeden gelir.",
            },
            {
                soru: "Su ürünleri tesisimize makine sokmadan iş yapılabilir mi?",
                cevap:
                    "Hedef noktanın konumuna bağlı olarak çoğu zaman evet. Erişilecek nokta üretim alanının sınırına yakınsa makineyi alan dışında konumlandırıp bomla uzanmak mümkündür; bu, hem hijyen sürecini hem de üretim kesintisini en aza indirir. Keşifte tesis planınız üzerinde makinenin duracağı noktayı ve bomun süpüreceği hacmi çizerek bunun mümkün olup olmadığını netleştiririz. İçeri girmek zorunluysa hijyen prosedürünüzü uygularız: makine dışarıda temizlenir, tekerlekler kontrol edilir, koruyucu örtü kullanılır ve girişten önce sorumlunuz onay verir. Üçüncü bir seçenek de işi temizlik döngüsünün hemen öncesine yerleştirmektir; böylece zaten planlanmış temizlik süreci devreye girer.",
            },
            {
                soru: "Kent merkezinde cadde üstünde çalışacağız; izin süreci ne kadar sürer?",
                cevap:
                    "Süre işin niteliğine ve ilgili belediyenin uygulamasına göre değişir, bu yüzden tek bir rakam vermek doğru olmaz. Belirleyici olan şudur: kaldırım veya yol işgali gerekiyor mu, trafik akışı etkilenecek mi. Yalnızca kendi mülkünüzün önünde ve yaya geçişini engellemeyecek bir kurulum çoğu zaman ek izin gerektirmez; yol şeridini kapatan bir çalışma ise koordinasyon ister. Keşifte bu ayrımı yapar, izin gerekiyorsa süreci takvime dahil ederiz. Emniyet tarafında ise her durumda aynı düzeni kurarız: çalışma alanı bariyerle ayrılır, yaya için koridor bırakılır, destek ayakları yük dağıtım plakasıyla kullanılır ve altyapı kapakları üzerine ayak basılmaz.",
            },
            {
                soru: "Aynı bölgede birkaç ayrı işimiz var; hepsini tek seferde yaptırabilir miyiz?",
                cevap:
                    "En verimli kurgu tam olarak budur ve çevre il hizmetinde maliyeti en çok düşüren yaklaşımdır. Yapmanız gereken, işleri bize tek liste hâlinde bildirmektir: her kalemin konumu, tahmini süresi ve gerektirdiği yükseklik. Bu listeyi aldığımızda kalemleri coğrafi olarak sıralar, gerekli makine sınıflarını gruplar ve tek sevkiyata sığıp sığmadığını hesaplarız. Farklı sınıf gerektiren kalemler varsa iki makineyi aynı araca bindirmeyi değerlendiririz — bu, iki ayrı sevkiyata kıyasla belirgin tasarruf sağlar. Listede tarih esnekliği olan kalemler varsa onları rota gününe bağlar, kesin tarihli olanları sabitleriz. Sonuçta tek bir plan ve tek bir nakliye kalemi çıkar.",
            },
            {
                soru: "Uzak sahada makine arızalanırsa kaç gün kaybederiz?",
                cevap:
                    "Bunu tahmine bırakmayız, sözleşmede yazarız. Önce şunu belirtelim: uzak sahaya çıkan makine sefer öncesi standardın üzerinde kontrolden geçer ve aşınma emaresi gösteren parçalar peşinen değiştirilir — uzak mesafede en ucuz arıza, hiç yaşanmayandır. Arıza yine de olursa üç katman işler: birçok durum telefonla yönlendirmeyle aynı saat içinde çözülür; yerinde müdahale gerekiyorsa teknik ekip sevk edilir; yerinde çözülemeyen durumda ikame makine yola çıkar. İkame süresi mesafeye göre gerçekçi belirlenir ve sözleşmeye yazılır. Üretimi doğrudan durduran bir kullanımınız varsa, sahada yedek makine bulundurma seçeneğini teklif aşamasında birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çanakkale'nin kıyı şeridinde su ürünleri ve gıda işleme, iç kesiminde tarımsal sanayi ve depolama faaliyetinin bulunduğu kamuya açık genel bilgidir; rota günü, ikame taahhüdü ve süre-maliyet dengesi firma uygulamasıdır.",
    },

    "bolge:gemlik-bursa-cevre-ili": {
        h1: "Gemlik ve Bursa Çevresinde Proje Bazlı Platform Kiralama",
        giris:
            "Gemlik, Bandırma ile aynı denizin farklı bir köşesinde durur: iki nokta arasında körfezi dolaşan bir kara bağlantısı vardır ve her ikisi de Marmara'nın liman ekonomisine bağlıdır. Bu benzerlik, bölgeye hizmet verirken işimizi kolaylaştırır — liman çevresi tesislerin ritmi, gemi takviminin bakım planına yansıması ve kıyı ikliminin ekipmana etkisi bizim için tanıdık konulardır. Bu sayfada Gemlik'e uzun süreli sözleşme kurgusundan değil, proje bazlı ve tanımlı süreli işler açısından bakıyoruz: yatırım ve montaj dönemleri, planlı duruş çalışmaları, tesis genişletme projeleri ve belirli bir işin başından sonuna kadar süren ekipman ihtiyacı. Bu tür işlerin ortak özelliği, başlangıcı ve bitişi belli olması ve ekipman planının doğrudan proje takvimine bağlanmasıdır. Bölgedeki doku ise karma bir yelpaze sunar: liman ve depolama yapıları, zeytin ve gıda işleme tesisleri, sanayi kuşağındaki üretim tesisleri ve bunlara bağlı lojistik alanlar. Aşağıda proje işlerinin nasıl planlandığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Proje takvimine bağlı ekipman eğrisi",
                metin:
                    "Bir montaj veya yatırım projesinde ekipman ihtiyacı sabit değildir, evrelere göre değişir: kaba montaj döneminde yüksek erişimli bomlu sınıf, mekanik ve elektrik işlerinde makaslı ve eklemli sınıf, devreye alma ve ince işlerde kompakt makineler öne çıkar. Bu eğriyi proje programının yanına koyduğumuzda makineler önceden rezerve edilir ve evre geçişlerinde ekipman değişimi tek sevkiyata bağlanır. Sahada aylarca duran ama birkaç gün kullanılan makine, plansızlığın en pahalı sonucudur.",
            },
            {
                baslik: "Planlı duruş projelerinde yoğun ekipman kullanımı",
                metin:
                    "Tesislerin planlı duruş dönemleri kısa ama yoğundur: birkaç hafta içinde biriken tüm bakım kalemleri tamamlanmalıdır. Bu dönemlerde birden fazla makine aynı sahada, farklı noktalarda çalışır ve koordinasyon kritik hâle gelir. Uygulamamız, duruş öncesinde kalemleri coğrafi olarak gruplamak ve her gruba kendi makinesini atamaktır. Duruş başlamadan makineler sahada, evrakları tamamlanmış ve operatörleri oryantasyonunu almış olarak hazır bekler.",
            },
            {
                baslik: "Liman ve depolama yapılarında proje işleri",
                metin:
                    "Körfez çevresindeki depolama ve elleçleme yapılarında proje işleri genellikle kapasite artışına bağlıdır: yeni raf sistemi, ek çatı ve cephe kaplaması, yükleme kapısı ve rampa düzenlemesi, aydınlatma yenileme. Bu işlerde makine seçimi yapının geometrisinden çıkar — tavan yüksekliği, kolon aralığı ve zemin durumu. Depo işleyişi sürerken yapılan projelerde ise çalışma alanı sevkiyat trafiğinden fiziksel olarak ayrılır ve saha sorumlusuyla günlük koordinasyon yapılır.",
            },
            {
                baslik: "Zeytin ve gıda işleme tesislerinde sezon dışı projeler",
                metin:
                    "Bölgenin zeytin ve gıda işleme tesislerinde üretim mevsimliktir ve bu, proje işleri için net bir pencere yaratır: sezon dışı dönem. Bu pencerede tesis boştur, çalışma serbest yürür ve hijyen kısıtları üretim dönemine kıyasla daha rahattır. Ancak pencere kısadır ve bölgedeki birçok tesis aynı dönemde çalıştığı için talep kümelenir. Bu yüzden sezon dışı projeler için makine rezervasyonunun aylar öncesinden yapılmasını öneririz; geç kalan tesis, kendi penceresini dar bir ekipman seçeneğiyle geçirmek zorunda kalır.",
            },
            {
                baslik: "Proje sonunda ekipmanın düzenli çıkışı",
                metin:
                    "Proje işlerinin sıkça ihmal edilen kısmı bitiştir. Makinenin sahadan ne zaman çıkacağı baştan belirlenmezse, iş bittikten sonra günlerce sahada bekleyen ekipmana kira yazılır. Uygulamamız, proje planına bir çıkış tarihi ve iki günlük bildirim kuralı koymaktır: iş bittiğinde haber verirsiniz, makine iki gün içinde alınır. Erken biten projelerde makine erken çekilir ve kullanılmayan günler faturaya girmez; uzayan projelerde ise günlük tarifeyle devam edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proje evrelerine göre ekipman planı",
                paragraflar: [
                    "Tipik bir montaj veya yatırım projesinde ekipman ihtiyacının nasıl değiştiği aşağıdadır. Bu tabloyu proje programınızın yanına koyduğunuzda rezervasyon takvimi kendiliğinden çıkar.",
                ],
                tablo: {
                    basliklar: ["Proje evresi", "Tipik iş", "Ekipman sınıfı", "Planlama notu"],
                    satirlar: [
                        ["Saha hazırlık", "Söküm, temizlik, ölçüm", "Kompakt bomlu", "Kısa süreli, esnek"],
                        ["Kaba montaj", "Çelik konstrüksiyon, çatı", "Teleskopik bomlu", "Rüzgâr penceresi"],
                        ["Mekanik-elektrik", "Boru, kanal, kablo tavası", "Makaslı + eklemli", "En uzun evre"],
                        ["İnce işler", "Yalıtım, kaplama, aydınlatma", "Akülü makaslı", "İç mekân, egzozsuz"],
                        ["Devreye alma", "Test, ayar, düzeltme", "Kompakt akülü", "Kısa ve tekrarlı"],
                    ],
                },
            },
            {
                baslik: "Çok makineli projelerde saha koordinasyonu",
                paragraflar: [
                    "Aynı sahada birden fazla erişim makinesi çalıştığında ortaya çıkan sorunlar teknik değil, organizasyoneldir: makinelerin birbirinin çalışma alanına girmesi, aynı anda aynı vinç veya asansörü beklemesi, şarj ve yakıt sıralarının çakışması. Bu yüzden çok makineli projelerde saha planı üzerine bölge paylaşımı çizilir ve her makinenin çalışacağı alan ile geçiş güzergâhı tanımlanır. Bu paylaşım, işler ilerledikçe haftalık olarak güncellenir.",
                    "İkinci koordinasyon başlığı enerji ve yakıttır. Akülü makinelerin şarj noktaları ve süreleri, dizel makinelerin ikmal düzeni proje başında belirlenir; bunun plansız bırakıldığı sahalarda sabaha karşı biten aküyle kaybedilen yarım gün klasik bir manzaradır. Vardiyalı çalışan projelerde şarj pencerelerinin vardiya değişimlerine göre kurgulanması, ekipmanın kesintisiz çalışmasını sağlayan en basit tedbirdir.",
                ],
            },
            {
                baslik: "Körfez çevresinde nem ve tuz etkisi",
                paragraflar: [
                    "Denize yakın çalışan ekipman, iç bölgedeki eşdeğerinden daha hızlı yıpranır: havadaki tuz hidrolik silindir yüzeylerinde ve elektrik bağlantılarında birikir, nem kapalı panolarda yoğuşma yapar. Kıyı bölgesinde uzun süre kalan proje makinelerinde bu yüzden koruma protokolünü sıklaştırırız — silindir yüzeylerinin koruyucu yağlaması normalden sık tekrarlanır, pano ve soket contaları periyodik ziyaretlerde açılıp kontrol edilir, boya kalkan noktalar bekletilmeden kapatılır.",
                    "Bu protokolün proje sahibine yansıyan tarafı kesintisizliktir. Aylar süren bir montaj işinin ortasında korozyon kaynaklı bir elektrik arızasıyla durmak, proje takviminde telafisi zor bir gedik açar. Koruyucu bakımın maliyeti bu gediğin maliyeti yanında önemsizdir ve kiralama bedelinin içinde yer alır; ayrı bir kalem olarak faturaya yansımaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Projemizin süresi kesin değil; kiralamayı nasıl kurgulayalım?",
                cevap:
                    "Proje işlerinde süre belirsizliği kuraldır, istisna değil. Bu yüzden kiralamayı iki parçalı kurarız: garanti edilen bir çekirdek süre — projenin kesinlikle süreceği gün sayısı — ve günlük bazda uzayabilen esnek bir kuyruk. Çekirdek süre bittiğinde makine otomatik çekilmez; siz bitti diyene kadar günlük tarifeyle sahada kalır ve iki gün önceden bildirimle iade edilir. Bu kurgunun iki yönlü faydası vardır: erken biten projede kullanılmayan günlere kira ödemezsiniz, uzayan projede ise yeniden nakliye ve yeniden evrak süreci yaşanmaz. Çekirdek süreyi gerçekçi belirlemek önemlidir — abartılı uzun tutmak gereksiz maliyet, kısa tutmak ise plan belirsizliği üretir.",
            },
            {
                soru: "Sahamızda aynı anda üç makine çalışacak; koordinasyonu kim yapıyor?",
                cevap:
                    "Saha koordinasyonu sizin proje yönetiminizin işidir, ama biz bunu kolaylaştıracak yapıyı kurarız. Proje başında saha planı üzerine bölge paylaşımı çizilir: her makinenin çalışacağı alan, geçiş güzergâhı ve bekleme noktası tanımlanır. Operatörlerimiz arasında ortak bir iletişim düzeni kurulur ve günlük çalışma programı sabah kısa bir toplantıyla paylaşılır. Şarj ve yakıt ikmal sıraları da baştan planlanır; bu, çok makineli sahalarda en sık yaşanan zaman kaybının kaynağıdır. İşler ilerledikçe bölge paylaşımı haftalık güncellenir. Sizden beklediğimiz tek şey, saha planındaki değişiklikleri bize zamanında bildirmenizdir — plan güncel kalmadığında koordinasyon kâğıt üzerinde kalır.",
            },
            {
                soru: "Planlı duruşumuz iki hafta ve kalem sayısı çok; nasıl yetiştiririz?",
                cevap:
                    "Kısa duruşta belirleyici olan makine sayısı değil, hazırlıktır. Önerimiz üç adımlıdır. Birincisi, kalemleri coğrafi olarak gruplayın — aynı bölgedeki işler ardışık yapılsın, makine sahada gereksiz dolaşmasın. İkincisi, kalemleri gerektirdikleri ekipman sınıfına göre ayırın; farklı sınıf isteyen işler karıştırıldığında makine değişimi için gün kaybedilir. Üçüncüsü, malzeme ve ekip hazırlığını duruş başlamadan tamamlayın; duruş saati başladığında beklenen malzeme yolda olmamalıdır. Bizim tarafımızda ise makineler duruş başlamadan sahada, evrakları tamamlanmış ve operatörleri oryantasyonunu almış olarak hazır bekler. Bu hazırlıkla iki haftalık pencereye normalde sığmayacak sayıda kalem sığar.",
            },
            {
                soru: "Zeytin tesisimizde sezon dışında çalışacağız; ne zaman rezervasyon yapmalıyız?",
                cevap:
                    "Mümkün olan en erken tarihte — ideal olarak sezon kapanmadan aylar önce. Bunun nedeni basittir: bölgedeki tesislerin çoğu aynı mevsimsel takvimle çalışır, dolayısıyla sezon dışı bakım ve proje talebi aynı haftalara kümelenir. Erken rezervasyon yapan tesis istediği makine sınıfını istediği tarihte alır; geç kalan ise elde kalan seçeneklerle çalışmak zorunda kalır ve bazen işini bölmek durumunda kalır. Rezervasyon için kesin tarih şart değildir, hedeflenen hafta bile yeterlidir; kesinleşme yaklaştıkça takvimi daraltırız. Ayrıca sezon dışı çalışmanın bir avantajını da hatırlatalım: tesis boş olduğu için hijyen kısıtları üretim dönemine kıyasla daha rahat işler ve iş kesintisiz ilerler.",
            },
            {
                soru: "Proje erken biterse kalan günlerin kirasını öder miyiz?",
                cevap:
                    "Hayır — bu, proje kiralamalarında en çok sorulan ve en net cevaplanması gereken sorudur. Kurgumuzda çekirdek süre dışındaki günler için taahhüt yoktur: iş bittiğinde haber verirsiniz, makine iki gün içinde sahadan alınır ve kullanılmayan günler faturaya girmez. Çekirdek süre ise garanti edilen bölümdür ve o kısım işlemeye devam eder; bu yüzden çekirdek süreyi belirlerken gerçekçi olmak iki tarafın da yararınadır. Erken bitişi bize mümkün olduğunca önceden bildirmenizi isteriz — makineyi başka bir işe planlayabilmemiz, gelecekteki tekliflerimizde de esneklik olarak size döner. Geç bildirilen bitişte makine sahada bekler ve o günler doğal olarak kirada kalır.",
            },
            {
                soru: "Makine proje boyunca sahada kalacak; gece güvenliği ve şarj düzenini kim sağlıyor?",
                cevap:
                    "Bu iki başlık proje başında sözleşmeye yazılır ve belirsiz bırakılmaz. Makinenin gece konakladığı alanın güvenliği, sahanın kontrolü sizde olduğu için sizin sorumluluğunuzdadır; bizden beklenen ise makinenin uygun biçimde park edilmesi, kilitlenmesi ve bomun indirilmiş konumda bırakılmasıdır. Konaklama noktasını keşifte birlikte seçeriz — trafikten uzak, zemini sağlam ve gerekiyorsa çevresi kapalı bir alan. Şarj tarafında akülü makineler için uygun bir elektrik beslemesi tesis tarafından sağlanır; ihtiyaç duyulan besleme özelliklerini önceden bildiririz. Dizel makinelerde yakıt ikmal düzeni de aynı şekilde baştan kararlaştırılır. Bu ayrıntılar küçük görünür ama plansız bırakıldığında proje sabahlarını yiyen konulardır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gemlik'in Marmara kıyısında liman ve depolama faaliyetiyle öne çıkan, zeytin ve gıda işleme geleneği bulunan bir ilçe olduğu kamuya açık genel bilgidir; proje evresi planlaması, çok makineli koordinasyon ve konaklama düzeni firma uygulamasıdır.",
    },

    "bolge:bandirma-osb": {
        h1: "Bandırma OSB'de Fabrika Bakım Duruşuna Manlift ve Forklift Kiralama",
        giris:
            "Bandırma OSB'yi kentin liman ve rıhtım hattından ayıran şey, işin kapıda başlamasıdır. Rıhtımda yük gemiden doğrudan sahaya iner ve trafik gümrük-tahliye ritmiyle akarken, OSB'de her araç önce bölge girişinde, sonra parselin kendi kapısında durur; ikisi de kayıt ister. Bu iki kademeli giriş, tesadüfen konan bir formalite değil, bölgenin trafik ve güvenlik düzeninin omurgasıdır — özellikle ağır tonajlı sevkiyat araçlarının günün belirli saatlerinde kantardan geçme zorunluluğu olan tesislerde bu sıra hiç bozulmaz. Manlift ve forklift de bu düzenin dışında kalmaz: sahaya girecek her ekipman, kendi aracı ve operatörü gibi kapı kaydına, çoğu zaman da kantar tartımına tabidir. İkinci belirleyici unsur ise fabrikaların kendi bakım takvimidir. OSB'deki üretim tesisleri limandan farklı olarak sürekli değil, planlı aralıklarla durur — yıllık bakım duruşu, hat revizyonu, ekipman değişimi gibi dönemlerde tesis günler veya haftalar boyunca kapasitesinin bir kısmını bakıma ayırır ve bu pencerede biriken onlarca kalem aynı anda sahaya çıkar. Bu sayfa, Bandırma OSB'nin kapı-kantar düzeni ile fabrika duruş takviminin kiralama planını nasıl şekillendirdiğini anlatır.",
        maddeler: [
            {
                baslik: "Bölge kapısı ve parsel kapısı: iki ayrı kayıt",
                metin:
                    "Bandırma OSB'ye giren her ağır araç, önce bölge ana girişinde durur; burada araç plakası, sürücü kimliği ve varış parseli kayda geçer. Bu adım geçildikten sonra araç parsele yönelir ve orada tesisin kendi güvenlik noktasında ikinci bir kayıt yaşanır — bu kez ekipmanın periyodik kontrol belgesi, operatör yeterliliği ve iş emri sorulur. Manlift veya forklift sevkiyatında bu iki kaydı sevkiyat gününe bırakmayız; evrak seti bir gün önceden hem bölge güvenliğine hem parsel güvenliğine ayrı ayrı iletilir. Sevkiyat sabahı yaşanan gecikmelerin neredeyse tamamı, bu iki kaydın aynı anda ilk kez yapılmaya çalışılmasından doğar.",
            },
            {
                baslik: "Kantar geçişi olan tesislerde ekipman tartımı",
                metin:
                    "Bölgedeki bazı tesisler, giren-çıkan her ağır aracı kantardan geçirir; bu uygulama malzeme sevkiyatı için kurulmuş olsa da iş makinesi taşıyan araç da aynı kurala tabi tutulur. Kantar sırası, tesisin kendi malzeme trafiğiyle paylaşılan bir kaynaktır ve sabah-akşam sevkiyat yoğunluğunda uzayabilir. Bu yüzden manlift ve forklift sevkiyatını mümkün olduğunca gün ortasına, kantarın en boş olduğu saate yazarız. Kantar fişi ayrıca giriş kaydının bir parçası olarak saklanır; bazı tesislerde bu fiş olmadan parsel içine geçiş verilmez.",
            },
            {
                baslik: "Yıllık bakım duruşunda kalem yığılması",
                metin:
                    "OSB'deki üretim tesislerinin çoğu, yılda bir veya iki kez planlı bir bakım duruşu yapar ve bu pencerede normal zamanda aylara yayılacak kadar iş birkaç güne sıkışır: çatı ve cephe kontrolü, tavan tesisatı, vinç yolu bakımı, aydınlatma yenileme, boya ve kaplama işleri aynı anda gündeme gelir. Duruş takvimi netleştiği anda bize iletilmesini isteriz — bu bilgi ne kadar erken gelirse makine ve operatör o pencereye o kadar güvenli biçimde ayrılır. Duruş günü belirsiz kalan taleplerde ise bölgedeki diğer tesislerin de aynı haftalarda durma ihtimali olduğunu, dolayısıyla makine bulunabilirliğinin daralabileceğini baştan söyleriz.",
            },
            {
                baslik: "Parsel içi geometri ve kapı ölçüsü uyumu",
                metin:
                    "OSB parselleri standart planlı yapılmış olsa da hol kapısı genişliği, kapı sonrası ilk dönüş alanı ve çatı makası altındaki net yükseklik tesisten tesise değişir. Bu üç ölçü sevkiyattan önce netleşmezse, makine parsel kapısına kadar gelip hol içine giremeyen bir durumla karşılaşabilir. Telefonda kapı genişliği, katlanmış makine yüksekliği ve iç manevra mesafesini sorarız; belirsizlik varsa keşifte bizzat ölçeriz. Bu kontrol, sevkiyat gününde yaşanacak bir geri dönüşten çok daha ucuza gelir.",
            },
            {
                baslik: "Vardiya değişimi ve gece bekleme düzeni",
                metin:
                    "Sürekli üretim yapan bazı OSB tesislerinde vardiya değişim saatleri, kapı trafiğinin en yoğun olduğu andır; bu saatte hem personel hem malzeme aracı aynı kapıdan geçer. Manlift veya forklift sevkiyatını bu dar pencereye denk getirmemeye çalışırız, mümkünse vardiya arasındaki sakin saatlere yazarız. Duruşun birden fazla güne yayıldığı işlerde makine geceyi sahada geçirebilir; bu durumda konaklama noktası tesis güvenliğiyle birlikte belirlenir ve makinenin kilitli, bomu indirilmiş biçimde bırakılması standart kuraldır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bandırma OSB'de duruş evresine göre ekipman planı",
                paragraflar: [
                    "Fabrika bakım duruşunun tipik evreleri ve her evrede öne çıkan ekipman ihtiyacı aşağıdadır. Tablo, duruş programınızın hangi gününde hangi makineyi ayırmanız gerektiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Duruş evresi", "Tipik iş", "Ekipman sınıfı", "Kapı/kantar notu"],
                    satirlar: [
                        ["Duruş öncesi hazırlık", "Malzeme yerleşimi, iskele kontrolü", "Kompakt akülü", "Erken evrak seti şart"],
                        ["Duruş başlangıcı", "Söküm, çatı-cephe kontrolü", "Teleskopik bomlu", "Kantar en yoğun saat"],
                        ["Orta evre", "Tavan tesisatı, vinç yolu, boya", "Eklemli + makaslı", "En uzun ve yoğun evre"],
                        ["Duruş sonu", "Devreye alma, son kontrol", "Kompakt akülü", "Vardiya dışı saat tercih"],
                        ["Duruş dışı sevkiyat", "Depo takviyesi, istif", "Forklift", "Kantar fişi zorunlu"],
                    ],
                },
            },
            {
                baslik: "Evrak seti bir gün önceden neden gitmeli",
                paragraflar: [
                    "OSB'deki iki kademeli kapı düzeninde her adım kendi evrakını ister ve bu evrakların ikisi de aynı anda sevkiyat sabahı hazırlanırsa gecikme neredeyse kaçınılmaz olur. Bizim uygulamamız, sipariş kesinleştiği anda evrak setini iki ayrı adrese göndermektir: bölge güvenliğine araç ve sürücü bilgisi, parsel güvenliğine ekipmanın periyodik kontrol raporu ve operatör yeterlilik belgesi. Bu iki gönderim ayrı sistemlere gittiği için birini yapıp diğerini atlamak sık görülen bir hatadır; kontrol listemizde ikisi de ayrı kalem olarak işaretlenir.",
                    "Bazı parseller üçüncü bir adım daha ekler: ekipmanın kendisine ait bir saha oryantasyonu veya iş güvenliği brifingi. Bu adım genellikle kısa sürer ama takvimde bir yeri olmalıdır; ilk kez giren bir operatör için bu süreyi kiralama planına açık biçimde yazarız. Aksi hâlde duruşun ilk saatinde beklenen makine, oryantasyon kuyruğunda kaybedilen yarım saatle başlar.",
                ],
            },
            {
                baslik: "Kantar sırasını plana nasıl dahil ederiz",
                paragraflar: [
                    "Kantarlı tesislerde sevkiyat planı tek bir varış saatiyle değil, bir aralıkla kurulur. Sabah ve akşam sevkiyat yoğunluğunun dışına düşen bir gün ortası penceresi belirler, aracı o pencereye göre yola çıkarırız; kantarda beklenmedik bir sıra oluşursa bu pay gecikmeyi yutar. Kantar fişinin kaydı, hem tesisin hem bizim tarafımızın iş emrine eklenir — özellikle uzun süreli kiralamalarda makinenin giriş-çıkış tarihini belgeleyen tek resmi kayıt çoğu zaman bu fiş olur.",
                    "İkinci husus tartım hassasiyetidir. Bazı kantarlar dingil bazında tartım yapar ve ağır bir platformun dingil dağılımı standart bir kamyondan farklıdır; bu durumda kantar operatörüyle önceden bir bilgi paylaşımı gerekebilir. Bu ayrıntı küçük görünse de ilk kez o kantardan geçen bir ekipman için sürprizleri önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bölge kapısında kayıt yaptırdık ama parsel kapısında tekrar bekledik; bunu tek seferde çözebilir miyiz?",
                cevap:
                    "Büyük ölçüde evet. İki kapı ayrı sistemlere bağlı olduğu için ikisinin de önceden bilgilendirilmesi gerekir — bölge kapısına araç ve sürücü bilgisi, parsel kapısına ekipman ve operatör evrakı ayrı ayrı gönderilmelidir. Bizim standart uygulamamız, sipariş kesinleştiği gün her iki adrese de evrakı aynı anda yollamaktır; bu yapıldığında sevkiyat sabahı her iki kapıda da sadece kimlik teyidi kalır, evrak tekrar sorulmaz. Gecikme genellikle iki adresten birinin atlanmasından doğar; kontrol listemizde bu ayrım net biçimde işaretlidir ve ikisi de tamamlanmadan sevkiyat planlanmaz.",
            },
            {
                soru: "Tesisimiz kantardan geçiş istiyor; manlift veya forklift için de mi geçerli?",
                cevap:
                    "Çoğu zaman evet — kantar uygulaması malzeme sevkiyatı için kurulmuş olsa da parsele giren her ağır araç, dolayısıyla iş makinesi taşıyan araç da aynı kurala tabi tutulur. Bu bilgiyi keşifte veya sipariş aşamasında sorarız; kantar geçişi varsa sevkiyat saatini kantarın en boş olduğu gün ortasına yazarız ve kantar fişini giriş kaydının parçası sayarız. Kantar sırası tesisin kendi malzeme trafiğiyle paylaşıldığı için sabah-akşam saatlerinde uzayabilir; bu yüzden dar bir varış saatinden çok bir pencere üzerinden planlarız.",
            },
            {
                soru: "Yıllık bakım duruşumuzun tarihi henüz kesinleşmedi; şimdiden makine ayırtabilir miyiz?",
                cevap:
                    "Ayırtabilirsiniz ve öneririz. Kesin tarih şart değildir — hedeflenen hafta bilgisi bile makinenin o döneme geçici olarak ayrılması için yeterlidir, tarih kesinleştikçe planı daraltırız. Bunu önermemizin nedeni basit: OSB'deki birçok tesis benzer dönemlerde yıllık duruşa girer, dolayısıyla o haftalarda bölgedeki toplam talep aynı anda yükselir. Erken bildirim yapan tesis istediği makine sınıfını ve tarihini büyük ölçüde garanti eder; duruş tarihi kesinleştiğinde bize haber vermeyi bekleyen tesis ise elde kalan seçeneklerle çalışmak durumunda kalabilir.",
            },
            {
                soru: "Duruşumuzda onlarca kalem var ve süre kısa; nasıl bir sıralama öneriyorsunuz?",
                cevap:
                    "Kısa duruşta belirleyici olan kalem sayısı değil, hazırlıktır. Önerimiz üç adımlıdır: kalemleri gerektirdikleri ekipman sınıfına göre gruplamak — aynı sınıfın işleri art arda yapılınca makine değişimi için gün kaybedilmez; hangi kalemin hattın üzerine geldiğini, hangisinin geçilebilir bölgede olduğunu ayırmak; ve malzeme-el aleti hazırlığını duruş başlamadan tamamlamak. Bizim tarafımızda makine ve operatör duruş saatinden önce sahada, evrakı tamamlanmış olarak hazır bekler. Bu hazırlıkla kısa bir pencereye normalde sığmayacak sayıda kalem sığdırılabilir; hazırlıksız başlayan bir duruşta ise pencere işin ortasında kapanır.",
            },
            {
                soru: "Operatörümüz bu parsele ilk kez girecek; oryantasyon süresi kiralama süresine dahil mi sayılır?",
                cevap:
                    "Hayır, ayrı sayılır ve takvimde açıkça belirtilir. Bazı tesisler ilk giren operatöre kısa bir saha oryantasyonu veya iş güvenliği brifingi uygular; bu süre genellikle yarım saat ile bir saat arasındadır. Kiracıya yansıyan kiralama süresi, makinenin fiilen çalıştığı süredir — oryantasyon bekleme süresi kira saatine yazılmaz. Bunu önceden bilmemizin faydası şudur: duruş programınızda o güne bir başlangıç payı bırakabilirsiniz, aksi hâlde duruşun ilk saatinin bir kısmı beklenmedik biçimde oryantasyonda geçebilir.",
            },
            {
                soru: "Duruş birkaç gün sürecek; makine geceyi parselde geçirebilir mi?",
                cevap:
                    "Geçirebilir, bunun için ayrı bir sevkiyat-geri alım maliyeti ödemenize gerek kalmaz. Konaklama noktasını keşifte tesis güvenliğiyle birlikte belirleriz — trafikten uzak, zemini sağlam bir alan tercih edilir. Makine gece için kilitlenir, bomu indirilmiş konumda bırakılır ve sahanın gece güvenliği tesisin sorumluluğunda kalır. Akülü makinelerde şarj için uygun bir elektrik beslemesi gerekir; bu ihtiyacı önceden bildiririz ki duruş sabahı makine dolu bataryayla hazır olsun. Bu düzen, özellikle çok günlü duruşlarda günlük sevkiyat-geri alım trafiğini ortadan kaldırdığı için hem bölge kapısındaki yükü hem maliyeti azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bandırma OSB'nin planlı parsel yerleşimi, iki kademeli giriş kontrolü (bölge ve parsel) ile bazı tesislerde kantar tartım uygulaması bulunduğu ve üretim tesislerinin yıllık planlı bakım duruşu yaptığı kamuya açık genel bilgidir; evrak akışı, kantar planlaması ve duruş kalem sıralaması firma pratiğidir.",
    },

    "bolge:bandirma-limani": {
        h1: "Bandırma Limanı Sahasında Aydınlatma ve Üst Yapı İşlerine Manlift Kiralama",
        giris:
            "Liman sahasını diğer çalışma alanlarından ayıran şey, hiçbir noktasının durağan olmamasıdır. Rıhtım boyunca kepçeli yükleyiciler, damperli kamyonlar ve reachstacker sınıfı elleçleme ekipmanı sürekli hareket hâlindedir; bu trafiğin üzerine bir de rüzgârın kendi değişkenliği eklenir — Marmara'nın güney kıyısında öğleden sonra kuvvetlenen poyraz, açık sahada yükseğe çıkan her ekipman için ayrı bir hesap gerektirir. Bandırma limanının aydınlatma direkleri, vinç ve konveyör üst yapıları, çelik iskelet elemanları ve depolama hangarlarının çatı-cephe kesimleri bu iki değişkenin — araç trafiği ve rüzgâr — tam ortasında durur. Bu sayfa, OSB'deki fabrika bakımından veya ilçe merkezindeki genel sanayi işlerinden farklı olarak, doğrudan liman sahasının kendi çalışma düzenine odaklanır: araç trafiğinden fiziksel ayrışma, rüzgâr penceresine göre iş planlama ve gemi operasyonunun getirdiği zaman kısıtları. Bandırma limanında manlift ve platform kiralamayı bu üç eksen üzerinden kuruyoruz.",
        maddeler: [
            {
                baslik: "Rıhtım aydınlatma direklerinde erişim",
                metin:
                    "Liman sahasının aydınlatma direkleri, gece operasyonunun güvenliğini doğrudan taşıyan elemanlardır ve arıza durumunda beklenmez — armatür değişimi, kablo onarımı veya direk gövde kontrolü çoğunlukla aynı gün planlanır. Bu işlerde makinenin duracağı nokta, direğin tabanına en yakın ama araç güzergâhının tamamen dışında kalan bir yer olmalıdır; rıhtımda sabit bir 'kenar şerit' yoktur, her direk kendi trafiğine göre değerlendirilir. Enerji kesme ve etiketleme, direk üzerinde çalışmaya başlamadan önce tesisin elektrik sorumlusundan yazılı teyitle alınır; bu adım rüzgârlı ve karanlık koşullarda daha da kritik hâle gelir.",
            },
            {
                baslik: "Vinç ve konveyör üst yapılarında bakım",
                metin:
                    "Liman vinçlerinin ve dökme yük konveyörlerinin çelik üst yapısı — köprü kirişleri, ray bağlantıları, kablo taşıyıcı sistemler — düzenli kontrol ister ve bu kontrol genellikle vincin veya hattın operasyon dışı kaldığı dar bir pencerede yapılır. Platformun bu köprü ve ray hattına yaklaşırken iki şeye dikkat edilir: bomun hareketli parçalara temas etmemesi ve makinenin kendisinin, vincin hareket güzergâhı üzerinde durmaması. Vinç operatörüyle önceden kurulan bir iletişim — vinç kilitli mi, hangi bölüm hareketsiz — çalışmanın ön şartıdır; bu teyit alınmadan sepet yükseltilmez.",
            },
            {
                baslik: "Depolama hangarlarında çatı ve cephe erişimi",
                metin:
                    "Liman arka sahasındaki kapalı stok hangarları ve depolama yapıları geniş açıklıklı çelik çatılıdır; çatı sacı onarımı, oluk temizliği ve cephe kaplama işleri bu yapılarda sık görülen kalemlerdir. Hangar çevresi genellikle iş makinesi park ve manevra alanı olarak da kullanıldığından, platformun konumlanacağı nokta hangar sorumlusuyla birlikte, mevcut yükleme-boşaltma trafiğinin dışında belirlenir. Rüzgârlı günlerde açık cephe tarafındaki çalışma, kapalı taraftaki çalışmadan önce durdurulur — hangarın kendisi rüzgârı bir yönde kesse de diğer yönde tam olarak açığa çıkarır.",
            },
            {
                baslik: "Araç trafiğinden fiziksel ayrışma",
                metin:
                    "Rıhtım ve arka sahada iş makinesi trafiği hiç durmadığı için, platformun trafikle aynı şeride girmesi kabul edilmez; ayrışma öneri değil kuraldır. Çalışma alanı bariyer ve koniyle fiziksel olarak çevrilir, saha trafik amiriyle giriş-çıkış saati ve güzergâh önceden kararlaştırılır. Gemi tahliyesinin sürdüğü bir vardiyada erişim işi, tahliyenin durduğu veya ambarın değiştiği kısa aralığa yazılır; bu aralık genellikle önceden tam olarak bilinmez, bu yüzden saha trafik amiriyle sürekli iletişim hâlinde kalınır.",
            },
            {
                baslik: "Rüzgâr penceresine göre günlük plan",
                metin:
                    "Liman sahası açık ve engelsiz olduğu için rüzgâr, iç sahalardaki eşdeğerinden daha erken ve daha sert hisseder. Üreticinin makine için tanımladığı azami rüzgâr hızının üzerinde sepet yükseltilmez; bu kural teknik değil kesindir. Bandırma'da poyraz genellikle öğleden sonra kuvvetlenir, bu yüzden yüksek kotlu kalemler sabaha, alçak kotlu ve rüzgâra daha az duyarlı kalemler öğleden sonraya yazılır. Rüzgâr aniden kuvvetlenirse iş yarıda kesilir ve sepet indirilir; bu durum planlama hatası değil, sahanın doğasıdır ve günlük programa yedek zaman olarak baştan eklenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Liman sahasında iş tipine göre ayrışma ve zamanlama",
                paragraflar: [
                    "Liman sahasındaki başlıca erişim işleri ve her birinde trafik-rüzgâr açısından dikkat edilen unsur aşağıdadır. Kritik veri sütunu, işi planlarken önce netleştirdiğimiz bilgidir.",
                ],
                tablo: {
                    basliklar: ["İş alanı", "Ana risk", "Zamanlama tercihi", "Kritik veri"],
                    satirlar: [
                        ["Aydınlatma direği", "Araç trafiği, karanlık", "Trafiğin seyrek olduğu saat", "Enerji kesme teyidi"],
                        ["Vinç/konveyör üst yapı", "Hareketli ekipman", "Operasyon dışı pencere", "Vinç kilitleme teyidi"],
                        ["Depo hangar çatısı", "Rüzgâr, manevra sahası", "Sabah, rüzgâr öncesi", "Hangar trafik programı"],
                        ["Rıhtım genel erişim", "Sürekli araç trafiği", "Tahliye arası boşluk", "Trafik amiri onayı"],
                        ["Açık saha çelik konstrüksiyon", "Rüzgâr yükü", "Poyraz öncesi sabah", "Azami rüzgâr sınırı"],
                    ],
                },
            },
            {
                baslik: "Gemi tahliyesi ile erişim işinin aynı sahayı paylaşması",
                paragraflar: [
                    "Liman sahasında erişim işi hiçbir zaman tek başına planlanmaz; her zaman o anki gemi operasyonunun gölgesinde kurulur. Bir geminin tahliyesi sürerken rıhtımın o kesimi kepçe, bant ve kamyon trafiğine kilitlenir; platformun aynı kesimde çalışması ne güvenli ne de pratiktir. Bu yüzden liman sahasındaki işler için tek bir kesin saat vermeyiz — tahliyenin durduğu, ambarın değiştiği veya vardiyanın kapandığı aralığı saha trafik amiriyle birlikte izleriz ve makineyi bu aralığa göre devreye alırız.",
                    "Bu belirsizliğin karşılığında makineyi sahaya erken alır, çalışma noktasının güvenli bir mesafesinde bekletiriz; aralık açıldığında kurulum değil doğrudan iş başlar. Tahliye programının uzayacağı önceden belliyse bu bilgiyi bize iletmenizi isteriz — makineyi başka bir kısa işe kaydırıp aralık açıldığında geri getirebiliriz. Bilgi paylaşılmadığında ise makine sahada bekler ve bu bekleme her iki tarafın planına da yazılır.",
                ],
            },
            {
                baslik: "Poyraz ve tuzlu havanın açık sahadaki ekipmana etkisi",
                paragraflar: [
                    "Liman sahasında çalışan makine, kapalı bir hol içindeki eşdeğerinden çok daha ağır bir hava yüküyle karşılaşır: tuzlu rüzgâr metal yüzeylerde ve elektrik bağlantılarında hızlı iz bırakır, açık sahada biriken nem panolarda yoğuşma yapar. Liman işlerine ayrılan makinelerde silindir koruma yağlaması sıklaştırılır, pano contaları her sefer sonunda kontrol edilir ve iş dönüşü tatlı su yıkaması atlanmaz. Bu bakım yükü fiyatın içindedir ve ayrıca faturalandırılmaz.",
                    "Rüzgâr tarafında ise uyguladığımız kural nettir: sabah saatlerinde ölçülen rüzgâr hızı güne göre değerlendirilir, öğleden sonra poyraz kuvvetlendiğinde yüksek kotlu iş kalemleri o gün için kapatılır. Bu, sahada tartışma konusu olmaz; ekip günün başında hangi kalemlerin hangi saate düştüğünü bilir ve rüzgâr sınırına ulaşıldığında sepeti indirmek otomatik bir adımdır, karar anında tartışılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aydınlatma direğimiz arızalandı ve gece operasyonu etkileniyor; ne kadar hızlı müdahale edebilirsiniz?",
                cevap:
                    "Liman sahasındaki aydınlatma arızalarını öncelikli değerlendiriyoruz, çünkü gece operasyon güvenliğini doğrudan etkiliyor. Aramadan önce üç bilgiyi hazırlamanız süreci hızlandırır: direğin sahadaki konumu ve araç trafiğine göre yeri, hedef yükseklik, enerji kesme işleminin daha önce yapılıp yapılmadığı. Makine sahaya ulaştığında ilk adım her zaman enerji kesme teyididir — bu teyit alınmadan direk üzerinde çalışılmaz, arızanın aciliyeti bu kuralı esnetmez. Trafik yoğun bir noktadaysa çalışma alanı hızla bariyerlenir ve saha trafik amiriyle koordinasyon eş zamanlı yürütülür.",
            },
            {
                soru: "Vinç bakımı için platform istiyoruz ama vinç operatörü de sahada olacak; nasıl bir düzen kurulur?",
                cevap:
                    "Bu tip işlerde ilk adım, vincin kilitlenmesi veya çalışma bölgesinin dışına park ettirilmesi konusunda vinç operatörüyle yazılı bir teyit almaktır; bu teyit alınmadan platform vinç yapısına yaklaşmaz. Çalışma süresince iki taraf arasında sürekli görsel veya telsiz iletişimi kurulur — platform operatörü vinç tarafında beklenmedik bir hareket görürse işi anında durdurur. Askıdaki bir yükün altından geçmek veya vinç hareket hâlindeyken yapıya yaklaşmak kesinlikle yapılmaz; bu, operatörlerimizin hiçbir gerekçeyle esnetmediği bir kuraldır.",
            },
            {
                soru: "Rüzgâr yüzünden işimiz yarıda kaldı; bu durumda ek ücret ödüyor muyuz?",
                cevap:
                    "Hayır. Rüzgâr nedeniyle durdurulan bir iş için ek bir kalem çıkmaz; bu, açık liman sahasında çalışmanın doğal bir parçasıdır ve planlamaya baştan dahil edilir. İşin devamı için ise iki yol izleriz: aynı gün içinde rüzgâr düşerse kaldığı yerden devam edilir, düşmezse ertesi güne yedek gün olarak taşınır. Liman işlerinde bu yüzden takvimi tek bir güne kilitlemeyiz — hedef gün ve onu izleyen bir yedek gün birlikte planlanır. Rüzgâr sınırını esnetip işi zorlamak bizim için bir seçenek değildir; bu sınır üreticinin makine için belirlediği teknik bir değerdir.",
            },
            {
                soru: "Gemi tahliyesi ne zaman biteceği belli değil; sizi ne zaman çağıralım?",
                cevap:
                    "Kesin bitiş saatini beklemenize gerek yok — bize tahliyenin başladığı bilgiyi ve tahmini süreyi verin, makineyi sahaya yakın bir noktada erken konumlandırırız. Aralık açıldığında saha trafik amirinden gelen sinyalle makine hemen çalışma noktasına girer; bu şekilde tahliyenin tam bitişini beklemek yerine ambar değişimi veya vardiya arası gibi ara boşluklardan da yararlanabiliriz. Tahliyenin önemli ölçüde uzayacağı belli olursa bu bilgiyi bize iletmenizi rica ederiz; makineyi o aralıkta başka bir kısa işe yönlendirip geri getirebiliriz.",
            },
            {
                soru: "Hangar çatısında iş var ama hangar çevresi sürekli forklift ve kamyon trafiğine açık; nasıl güvenli çalışılır?",
                cevap:
                    "Konumlanma noktasını hangar sorumlusuyla birlikte, mevcut yükleme-boşaltma güzergâhının tamamen dışında belirleriz. Çalışma alanı bariyer ve koniyle fiziksel olarak çevrilir, forklift ve kamyon operatörlerine bu alanın kapalı olduğu sabah brifinginde bildirilir. Trafiğin en yoğun olduğu saatler — genellikle sevkiyat başlangıcı ve sonu — mümkünse çalışma dışı bırakılır. Rüzgârlı taraftaki cephe işleri ayrıca ayrı değerlendirilir; hangar bir yönde rüzgârı kesse de karşı yönde tam açığa çıkarabilir, bu yüzden çalışılacak cephe rüzgâr yönüne göre seçilir.",
            },
            {
                soru: "Liman sahasına giriş için özel bir izin süreci var mı, bu süre kiralama takvimine dahil mi?",
                cevap:
                    "Evet, liman kontrollü bir sahadır ve giriş için araç-sürücü bilgisi, operatör kimlik ve yeterlilik belgesi, ekipmanın periyodik kontrol raporu ve sigorta belgeleri istenir; bazı liman işletmeleri ayrıca kendi saha oryantasyonunu şart koşar. Bu süreç evrak önceden gönderildiğinde genellikle bir iş günü içinde tamamlanır. Süreç kiralama süresine dahil edilmez — kiracıya yansıyan süre makinenin fiilen çalıştığı süredir. Bunu önden bilmemizin faydası şudur: sipariş kesinleştiği gün evrak setini limanın güvenlik biriminize göndeririz ve sevkiyat günü kapıda beklenmeden içeri geçilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bandırma'nın dökme yük limanı ile araç trafiği yoğun bir rıhtım-elleçleme sahasına sahip olduğu ve Marmara'nın güney kıyısında öğleden sonra kuvvetlenen poyraz rüzgârının bölgede bilinen bir iklim özelliği olduğu kamuya açık genel bilgidir; trafik ayrışması, rüzgâr penceresi planlaması ve gemi operasyonu koordinasyonu firma pratiğidir.",
    },

    "bolge:manyas": {
        h1: "Manyas'a Bandırma-Gönen Hattından Bölgesel Sevkiyat ile Platform Kiralama",
        giris:
            "Manyas'a hizmet, Bandırma parkımızdan bakıldığında bir güzergâh problemidir: ilçe Bandırma ile Gönen arasındaki hattın ortasında kalır ve buraya çıkan her sefer, aslında bu iki nokta arasında zaten işleyen bir hattın uzantısıdır. Bu konum, kiralama maliyetini ve makine bulunabilirliğini doğrudan etkiler — Manyas'a tek başına çıkan bir sefer ile Bandırma-Gönen hattı üzerindeki bir sefere eklenen bir durak arasında nakliye payı bakımından ciddi fark vardır. Bu sayfa ilçenin kendi tesis dokusundan değil, sevkiyat ve lojistik ekseninden bakar: makinenin Manyas'a nasıl ulaştığı, hangi güzergâh seçeneklerinin var olduğu, teslim ve geri alım zamanlamasının hat üzerindeki diğer duraklarla nasıl birleştiği. Ekipmanın ilçe içinde hangi tesiste ne iş yaptığından çok, oraya ulaşmanın en verimli yolunu ve bu verimliliğin fiyata nasıl yansıdığını konu alıyoruz.",
        maddeler: [
            {
                baslik: "Bandırma-Gönen hattı üzerinde bir durak olarak Manyas",
                metin:
                    "Bandırma ile Gönen arasındaki karayolu bağlantısı, bölgedeki sevkiyat planlamamızın omurgasıdır; Manyas bu hattın üzerinde, iki noktaya da yakın bir konumda durur. Sefer planlaması yaparken önce hattın o gün hangi yönde ve hangi sıklıkla işlediğine bakarız — Bandırma'dan Gönen'e giden veya dönen bir sevkiyat varsa, Manyas'a bir uğrak eklemek güzergâhı neredeyse hiç uzatmaz. Bu yüzden Manyas talebini, mümkün olduğunca mevcut hat trafiğine bağlamayı öncelik olarak görürüz.",
            },
            {
                baslik: "Tek başına sefer ile hatta eklenen durak arasındaki fark",
                metin:
                    "Manyas'a özel olarak çıkan bir sefer, aracın gidiş-dönüş mesafesinin tamamını tek işe yükler. Aynı gün Bandırma-Gönen hattında zaten planlı bir sevkiyat varsa, Manyas durağı bu seferin güzergâhına eklenir ve nakliye maliyeti iki işe bölünür. Bu fark, özellikle kısa süreli veya tek günlük kiralamalarda toplam maliyetin önemli bir kısmını oluşturur. Talebinizi aldığımızda önce hat üzerinde o güne veya yakın güne denk gelen başka bir sefer olup olmadığına bakarız; varsa teklifi bu birleştirilmiş sefer üzerinden çıkarırız.",
            },
            {
                baslik: "Teslim ve geri alım zamanlamasının hatla senkronu",
                metin:
                    "Makinenin Manyas'a ne zaman varacağı ve ne zaman geri alınacağı, hattın o günkü diğer duraklarına göre şekillenir. Sabah Bandırma'dan çıkan bir sevkiyat Manyas'a öğleden önce ulaşır ve devam ederek Gönen'deki durağını tamamlar; dönüş seferi ise ters sırayla işler. Bu düzende Manyas'taki teslim saati dakik bir randevudan çok bir aralık olarak verilir — hattaki önceki durağın süresi teslim saatini birkaç saat kaydırabilir. Kesin bir saat gerektiren işlerde bunu baştan belirtmenizi isteriz, o durumda hattı bu kesinliğe göre yeniden kurarız.",
            },
            {
                baslik: "Geri dönüş yükü ve boş sefer maliyeti",
                metin:
                    "Nakliye maliyetinin bir bölümü, aracın Manyas'tan boş dönmesinden kaynaklanır. Aynı gün ilçede veya hat üzerinde geri dönüşte alınacak başka bir makine ya da tamamlanan bir kiralamanın iadesi varsa, araç boş dönmez ve bu doğrudan fiyata yansır. Bu yüzden Manyas'taki bir teslimatı planlarken, o civardaki diğer aktif kiralamalarımızın iade tarihlerini de kontrol eder, mümkünse aynı sefere bağlarız. Müşteriden beklediğimiz tek şey, tarihte bir-iki günlük esneklik verebilmesidir; bu esneklik sefer birleştirmenin en büyük belirleyicisidir.",
            },
            {
                baslik: "Acil talep ile planlı talebin güzergâh üzerindeki farkı",
                metin:
                    "Planlı bir Manyas talebi hat trafiğine kolayca yedirilirken, aynı gün içinde çıkan acil bir talep bu avantajı her zaman bulamaz. Acil durumda öncelik hızdır ve gerekirse özel sefer düzenlenir; bu, standart hat birleştirmesine göre daha yüksek bir nakliye payı taşır ama bunu talep anında açıkça söyleriz, sürpriz bir kalem çıkmaz. Planlı işlerde ise bir-iki günlük esneklik tanınması, talebin hat trafiğine yedirilme ihtimalini büyük ölçüde artırır ve bu fark doğrudan teklife yansır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manyas sevkiyatında güzergâh senaryoları",
                paragraflar: [
                    "Manyas'a ulaşımın farklı senaryoları ve her birinin maliyet-zamanlama etkisi aşağıdadır. Hangi senaryonun geçerli olacağı, talebin geldiği güne ve hat üzerindeki mevcut trafiğe bağlıdır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Güzergâh", "Nakliye payı", "Zamanlama"],
                    satirlar: [
                        ["Hatta eklenen durak", "Bandırma → Manyas → Gönen (veya tersi)", "Paylaşılan, düşük", "Aralık üzerinden verilir"],
                        ["Tek başına sefer", "Bandırma → Manyas → Bandırma", "Tam, tek işe yüklü", "Kesin saat mümkün"],
                        ["Geri dönüş yüklü sefer", "Manyas'tan başka iş iadesiyle birleşik", "Paylaşılan, düşük", "İade tarihine bağlı"],
                        ["Acil/plan dışı talep", "Doğrudan özel sefer", "Yüksek, tek işe yüklü", "En hızlı, ek payla"],
                        ["Çok noktalı toplu talep", "Manyas köyleri arası rota", "Noktalar arası paylaşılan", "Gün içi sıralı"],
                    ],
                },
            },
            {
                baslik: "Tarih esnekliği neden fiyatı doğrudan değiştirir",
                paragraflar: [
                    "Bandırma-Gönen hattı her gün aynı yoğunlukta işlemez; bazı günler hatta birden fazla sevkiyat varken bazı günler hiç sefer düzenlenmez. Manyas talebinizin tarihi kesin ve tek bir güne kilitliyse, o gün hatta uygun bir sefer olmama ihtimaline karşı özel sefer düzenlenmesi gerekebilir. Buna karşılık bir-iki günlük esneklik tanındığında, talebi hattaki en yakın uygun sefere bağlama ihtimalimiz belirgin biçimde artar ve bu doğrudan daha düşük bir nakliye payı olarak teklife yansır.",
                    "Bu mantık iade tarafında da işler. Manyas'taki bir kiralamanın bitiş tarihi esnekse, geri alım seferini o civardaki başka bir iş için gidecek araca bağlarız; kesin bir bitiş tarihi gerekiyorsa bunu baştan bilmemiz yeterlidir, sadece sefer tek başına planlanır ve maliyet buna göre hesaplanır. İki durumda da şeffaflık esastır — hangi sefer türünün uygulandığını ve neden o maliyetin çıktığını teklifte açıkça belirtiriz.",
                ],
            },
            {
                baslik: "Manyas içinde çok noktalı talep için rota mantığı",
                paragraflar: [
                    "İlçe merkezi dışındaki köy ve mahallelerde birden fazla işletmenin aynı dönemde talebi olduğunda, bunları Bandırma-Gönen ana hattından ayrı, kendi içinde bir rotaya bağlarız. Araç ana hattaki durağını bıraktıktan sonra ilçe içinde talepleri coğrafi sıraya göre dolaşır; her nokta kendi payına düşen kısa bir süre alır ve nakliye maliyeti noktalar arasında bölünür. Bu düzenin işlemesi için gereken tek şey, taleplerin aynı haftaya toplanabilmesidir — birbirinden aylarca uzak tarihli talepler aynı rotaya bağlanamaz.",
                    "Rota kurulumunda önceliği, bize önce ulaşan ve tarih esnekliği tanıyan talep alır; rotanın ortasına sonradan eklenen bir durak, güzergâhı uzatmadığı sürece kabul edilir. Bu yüzden komşu bir işletmenin de ihtiyacı olduğunu bilmeniz hâlinde bunu bize iletmeniz, hem sizin hem onun maliyetini düşürür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manyas'a tek başına bir kiralama için sefer düzenletirsek maliyet ne kadar farklı olur?",
                cevap:
                    "Fark somut ve öngörülebilir: tek başına düzenlenen bir sefer, aracın gidiş-dönüş mesafesinin tamamını tek işe yükler, bu yüzden nakliye payı bir hatta eklenen duraktan belirgin biçimde yüksek çıkar. Kesin rakamı önceden vermemiz güçtür çünkü bu, o günkü hat trafiğine göre değişir; ama talebinizi aldığımızda önce Bandırma-Gönen hattında yakın bir tarihte planlı başka bir sefer olup olmadığına bakarız. Varsa, teklifi doğrudan bu birleştirilmiş sefer üzerinden çıkarırız ve fark size yansır. Tarihte bir-iki günlük esneklik tanımanız, bu birleştirme ihtimalini büyük ölçüde artırır.",
            },
            {
                soru: "Kesin bir teslim saati istiyoruz; hat birleştirmesi bunu engeller mi?",
                cevap:
                    "Engellemez, ama ikisi arasında bir denge kurmamız gerekir. Hatta eklenen bir durakta teslim saati genellikle bir aralık olarak verilir, çünkü önceki durağın süresi saati birkaç saat kaydırabilir. Kesin bir saat şartınız varsa bunu baştan belirtmenizi isteriz; bu durumda ya hattı bu kesinliğe göre yeniden kurarız ya da işi tek başına bir sefere ayırırız. İkinci seçenek nakliye payını artırır ama saat garantisi verir. Hangi seçeneğin sizin için doğru olduğuna, işin ne kadar zaman-kritik olduğuna bakarak birlikte karar veririz.",
            },
            {
                soru: "Manyas'taki iş bitince makine hemen mi alınır, yoksa bir sonraki sefere mi bırakılır?",
                cevap:
                    "Bu, iade tarihinizdeki esnekliğe bağlıdır. Kesin bir bitiş tarihi varsa, o tarihte tek başına bir geri alım seferi düzenleriz. Tarihte bir-iki günlük esneklik varsa, geri alımı o civardaki başka bir iş için zaten gidecek araca bağlarız — bu durumda makine bitiş gününden hemen sonra değil, en yakın uygun sefere göre alınır, ama nakliye payınız düşer. İki seçeneği de teklif aşamasında açıkça sunarız; hangisini seçtiğiniz size kalır, biz sadece maliyet farkını önceden görünür kılarız.",
            },
            {
                soru: "Aynı köyde birkaç işletmenin talebi var; hepsini tek sefere nasıl bağlarız?",
                cevap:
                    "Bize sadece komşuda da talep olduğunu bildirmeniz yeterli; koordinasyonu biz kurarız. Araç ana Bandırma-Gönen hattındaki durağını bıraktıktan sonra ilçe içinde talepleri coğrafi sıraya göre dolaşır, her noktada gerektiği kadar kalır ve nakliye maliyeti noktalar arasında paylaşılır. Bu düzenin tek şartı, taleplerin birbirine yakın bir tarihte toplanabilmesidir; aylarca ayrı tarihli talepler aynı rotaya bağlanamaz. Rotayı kurarken önceliği erken bildiren ve tarih esnekliği tanıyan talep alır.",
            },
            {
                soru: "Acil bir arızamız var, hemen Manyas'a makine gelebilir mi?",
                cevap:
                    "Gelir, ama bu durumda öncelik hız olduğu için standart hat birleştirmesini bekleyemeyiz; gerekirse özel bir sefer düzenlenir ve bu, planlı taleplere göre daha yüksek bir nakliye payı taşır. Bunu talep anında açıkça söyleriz, işin sonunda sürpriz bir kalem çıkmaz. Aramadan önce üç bilgiyi hazırlamanız süreci hızlandırır: hedef yükseklik veya taşınacak yük, makinenin çalışacağı alanın durumu ve işin ne kadar süreceği. Bu bilgilerle telefonda doğru makineyi seçer, boşuna sefer yapmayız.",
            },
            {
                soru: "Manyas'a Bandırma'dan mı yoksa Gönen'den mi makine geliyor, bunu biz mi belirliyoruz?",
                cevap:
                    "Hayır, bunu biz belirleriz ve karar tamamen o günkü hat trafiğine göre şekillenir. İki park noktasından hangisi Manyas'a daha yakın bir sefer planlıyorsa veya hangisinde uygun makine boştaysa oradan çıkarız; sizin için önemli olan tek şey makinenin doğru zamanda ve doğru durumda sahanıza ulaşmasıdır, hangi yönden geldiği maliyeti veya işin kalitesini değiştirmez. Nadiren, her iki noktadan da o gün için uygun sefer yoksa bunu size baştan söyler, en yakın uygun tarihi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Manyas'ın Bandırma ile Gönen arasındaki karayolu hattı üzerinde yer aldığı kamuya açık genel bilgidir; sefer birleştirme, güzergâh planlama ve maliyet paylaşımı uygulamaları firma pratiğidir.",
    },
};
