// ═══════════════════════════════════════════════════════════════════════════
// manlifteskisehir.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Eskişehir-Bozüyük sanayi hattında PLANLI DURUŞ DÖNEMİNE özel manlift
// kiralama. Açı: DÖNEM ve KAPASİTE — tek tesisin bakımı değil, bölgedeki tüm
// tesislerin aynı haftalarda durmasının yarattığı kapasite krizi; rezervasyon
// takvimi ve erken bağlama ekonomisi, duruş haftasında çoklu makine ve saat
// bazlı slot planı, duruş öncesi hazırlık ile duruş sonrası devreye alma
// dalgası, iki şehir arasında ortak kapasite havuzu ve makine kaydırma.
//
// ⚠️ Aynı ilde üç kardeş dosya var ve beş sayfa ortak:
//   - eskisehirmanlift.net  → üretim hattı bakımı (hattın kendi tekniği)
//   - eskisehirplatform.org → havacılık-savunma tedarik rejimi (evrak/giriş)
//   - bozuyukmanlift.com    → seramik fabrikası çatı ve yüksek bakım
// Bu dosyanın merceği DÖNEMİN KAPASİTE YÖNETİMİDİR; hattın tekniği, giriş
// rejimi ya da çatı geometrisi değil. Cümle/tablo/SSS örtüşmesi YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTESKISEHIR_COM: Record<string, BespokeIcerik> = {
    "bolge:eskisehir-osb": {
        h1: "Eskişehir OSB'de Planlı Duruş Dönemine Manlift Kiralama",
        giris:
            "Bir bakım şefi bize telefon ettiğinde konuştuğumuz asıl konu makine değil, tarihtir. Eskişehir Organize Sanayi Bölgesi'nde planlı duruşlar yılın belirli haftalarına toplanır — resmî tatil blokları, yaz izin dönemi, yılbaşı ve dönem sonu kapanışları herkesin takviminde aşağı yukarı aynı yere düşer. Sonuç, tek bir tesisin değil bölgenin aynı anda bakıma girmesidir ve bu, kiralama tarafında bambaşka bir problem doğurur: o haftalarda makine sıkıntısı, kalan haftalarda ise atıl kapasite. Bölgeye hizmet veren bir ekip için işin özü burada, yani takvimin yönetiminde toplanır. Biz de bu siteyi tam olarak bunun üzerine kurduk: hangi haftanın dolduğunu, bir tesisin talebini ne kadar önceden bağlaması gerektiğini, duruş haftası içinde tek makineyle mi çoklu filoyla mı gidileceğini ve zirve hafta kapandığında Bozüyük hattındaki makinelerin nasıl kaydırılacağını konuşuyoruz. Erişim yüksekliği ve makine sınıfı elbette önemli; ama bölgede yılın kırk sekiz haftası çözülebilen bir işi çözülemez hâle getiren şey, neredeyse her zaman tarihtir.",
        maddeler: [
            {
                baslik: "Zirve haftaların önceden bilinen takvimi",
                metin:
                    "Bölgedeki duruşların dağılımı rastgele değildir; uzun tatil blokları, yaz kapanışı ve dönem sonu envanter haftaları herkesin planına aynı yerden girer. Bu öngörülebilirlik iki yönlü çalışır. Kötü tarafı, o haftalarda talebin tek noktaya yığılmasıdır. İyi tarafı ise yığılmanın önceden hesaplanabilmesidir — takvimi yılın başında açıp hangi haftaların baskı altında olacağını görmek mümkündür. Talep defterimizi bu haftalar üzerinden tutuyoruz ve bir tesis aradığında ilgili haftanın doluluk durumunu açıkça söylüyoruz; boş görünen bir haftayı doluymuş gibi göstermek de, dolu bir haftayı boş göstermek de aynı ölçüde zarar veriyor.",
            },
            {
                baslik: "Erken bağlamanın ekonomisi",
                metin:
                    "Bir duruş tarihi kesinleştiği anda makineyi bağlamanın karşılığı yalnızca güvence değildir; fiyat da farklıdır. Uzak bir tarih için yapılan rezervasyon bizim tarafımızda planlanabilir kapasite anlamına gelir — o gün için nakliye, bakım ve personel takvimi baştan kurulur. Son anda gelen talep ise kurulmuş bir planın bozulmasını gerektirir ve bunun bir bedeli olur. Bu nedenle teklif verirken tarihin ne kadar önceden bildirildiğini bir kalem olarak ele alıyoruz. Bakım takvimini yıl başında paylaşan tesislerle çalışırken hem tarih güvencesi hem daha öngörülebilir bir bedel üretebiliyoruz.",
            },
            {
                baslik: "Opsiyon: tarih belirsizken yeri tutmak",
                metin:
                    "Duruş tarihleri her zaman kesin olmaz; üretim programı, sipariş yükü ya da bir yedek parçanın tedarik süresi tarihi kaydırabilir. Bu belirsizliği rezervasyonu geciktirerek yönetmek en pahalı yoldur. Bunun yerine opsiyon uyguluyoruz: hafta bizim defterimizde tesis adına ayrılır, belirlenen bir serbest bırakma tarihine kadar bekletilir ve o tarihe kadar teyit gelmezse yer başka bir talebe açılır. Tesis açısından bu, karar vermek için ek zaman kazanmak demektir; bizim açımızdan ise defterin gerçeği yansıtmasını sağlar. İki taraf da neyin ne zaman bağlandığını bilir.",
            },
            {
                baslik: "Duruş haftasında saat bazlı slot planı",
                metin:
                    "Duruş penceresi açıldığında bir makinenin gün boyunca boş beklediği ya da tersine üç ekibin aynı makineyi beklediği durumlar sık görülür. Bunu çözmek için duruş haftasını saat dilimlerine bölüyoruz: hangi bölümün hangi saatte makineye ihtiyacı olduğu önceden yazılır, makine o sıraya göre dolaşır ve boşta kalan dilimler başka bir kaleme açılır. Plan, tesisin bakım şefiyle birlikte tek bir sayfada çıkarılır. Bu düzenin en somut faydası, aynı hafta içinde kaç makineye gerçekten ihtiyaç olduğunun net görülmesidir — çoğu zaman sanılandan az, bazen fazla çıkar.",
            },
            {
                baslik: "Duruş biterken başlayan ikinci dalga",
                metin:
                    "Bakım penceresinin kapanması işin bittiği anlamına gelmez. Devreye alma sırasında ortaya çıkan ayar, sızdırma, hizalama ve ölçüm kalemleri ilk günlerde birbiri ardına açılır ve bunların önemli bölümü yine yukarıda çözülür. Duruş bittiği gün makineyi çekip almak, bir hafta sonra ikinci bir sevkiyat yapmak anlamına gelir. Bu yüzden duruş planına bir kuyruk süresi ekliyoruz: makine devreye alma günlerinde de sahada kalır, çıkan kalemler beklemeden kapanır. Kuyruk süresini baştan yazdığımız için sonradan pazarlık gerektiren bir kalem oluşmuyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yıl içinde talep yoğunluğu ve doğru rezervasyon anı",
                paragraflar: [
                    "Aşağıdaki çerçeve, bölgede gözlediğimiz talep dağılımını ve her dönem için makineyi ne zaman bağlamanın gerçekçi olduğunu özetler. Tesisin bakım takvimi hangi satıra düşüyorsa rezervasyon konuşması da o satırın diliyle yürür.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Talep yoğunluğu", "Rezervasyon anı", "Uygun model"],
                    satirlar: [
                        ["Uzun tatil blokları", "Çok yüksek", "Tarih duyulur duyulmaz", "Çoklu makine, slot planı"],
                        ["Yaz kapanış dönemi", "Yüksek", "Aylar öncesinden", "Sahada konaklayan filo"],
                        ["Dönem sonu kapanışı", "Yüksek", "Mevsim başında", "Opsiyonlu bağlama"],
                        ["Ara aylar", "Orta", "Birkaç hafta önce", "Tek makine, esnek gün"],
                        ["Düşük sezon haftaları", "Düşük", "Kısa vadede yeterli", "Uzun süreli ekonomik kiralama"],
                        ["Plansız arıza duruşu", "Değişken", "Anlık, havuzdan", "En yakın uygun makine"],
                    ],
                },
            },
            {
                baslik: "Zirve haftada kapasiteyi büyütmenin üç yolu",
                paragraflar: [
                    "Talebin tek haftaya yığıldığı dönemlerde elimizdeki ilk araç kaydırmadır: Bozüyük hattındaki bir makine, oradaki iş penceresi kapandığında Eskişehir tarafına aktarılır ve iki şehir arasındaki kısa karayolu mesafesi bunu gün içinde mümkün kılar. İkinci araç sıralamadır — aynı bölgedeki iki tesisin duruşu birkaç gün kaydırıldığında tek makine iki işi de karşılar. Bu kaydırmayı biz talep edemeyiz ama takvimi erken gördüğümüzde tesislere önerebiliyoruz ve şaşırtıcı biçimde çoğu zaman kabul ediliyor.",
                    "Üçüncü araç ise iş listesinin ayıklanmasıdır. Bir duruş listesinin her kalemi duruş gerektirmez; hattın çalışmasıyla çakışmayan işler pencere dışına çıkarıldığında zirve haftadaki makine ihtiyacı da küçülür. Bu üç aracın hiçbiri tek başına yeterli değildir, birlikte kullanıldığında ise bölgenin en yoğun haftası bile yönetilebilir hâle geliyor. Yapmadığımız tek şey, bağlanmış bir tarihi daha büyük bir müşteri için bozmaktır.",
                ],
            },
            {
                baslik: "Duruş öncesi hazırlık: pencereye girmeden yapılabilecekler",
                paragraflar: [
                    "Bir duruş penceresinin gerçek uzunluğu, pencereden önce ne kadar hazırlık yapıldığıyla belirlenir. Pencere açılmadan tamamlanabilecek kalemler bellidir: çalışılacak noktaların tek tek gezilip işaretlenmesi, malzeme ve yedek parçanın nokta bazında ayrılması, makinenin park ve şarj noktasının belirlenmesi, ekiplerin sıraya dizilmesi. Bunların hiçbiri hattın durmasını gerektirmez ama hepsi duruş içinde yapılırsa pencerenin belirgin bir bölümünü yer.",
                    "Biz bu hazırlığa katılmayı tercih ediyoruz, çünkü makinenin izleyeceği güzergâhı önceden belirlemek sahada kazanılan en somut zamandır. Duruş öncesi yapılan bir tur, hangi noktaya hangi park pozisyonundan ulaşılacağını netleştirir ve pencere açıldığında makine tereddütsüz ilerler. Uzun revizyonlarda bu turu duruştan birkaç gün önce yapıyor, çıkan güzergâh listesini bakım şefiyle paylaşıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Duruş tarihimiz belli oldu; makineyi ne kadar önceden bağlamalıyız?",
                cevap:
                    "Tarih belli olduğu gün. Bunu abartılı bulmayın: bölgedeki duruşlar aynı haftalara toplandığı için, uzun tatil bloklarına ve yaz kapanışına denk gelen talepler o haftaların kapasitesini hızla doldurur. Erken bağlamanın iki karşılığı var. Birincisi güvence — hafta defterde sizin adınıza ayrılır. İkincisi bedel: uzak tarihli bir rezervasyon bizim tarafımızda planlanabilir kapasite anlamına geldiği için son dakika talebinden farklı fiyatlanır. Tarihiniz henüz kesin değilse opsiyon kuruyoruz; hafta belirlenen bir serbest bırakma gününe kadar sizin adınıza bekler, o güne kadar teyit gelmezse yer açılır. Bu düzen, kesinleşmemiş bir tarih için beklemekten her zaman daha iyi sonuç veriyor.",
            },
            {
                soru: "Duruş haftamızda birden fazla ekip aynı anda yukarıda çalışacak; kaç makine gerekir?",
                cevap:
                    "Bu soruya slot planı çıkarmadan sayı vermeyi doğru bulmuyoruz. Yaptığımız iş şu: duruş penceresini saat dilimlerine bölüyor, her ekibin hangi dilimde ve hangi bölgede yukarı çıkacağını tabloya yazıyoruz. Çoğu tesiste ekipler aslında farklı saatlerde ihtiyaç duyuyor ve tek makine sıraya göre dolaştığında yetiyor; bazı tesislerde ise iki ekip aynı dilimde ve hacmin iki ucunda çalışıyor, orada ikinci makine kaçınılmaz oluyor. Planı çıkardığımızda sayı kendiliğinden görünüyor. Ayrıca aynı anda yukarıda çalışan iki ekibin birbirinin altına düşmemesi de bu planla kurulur; sonradan sahada çözülmeye çalışıldığında gecikme kaçınılmaz oluyor.",
            },
            {
                soru: "Duruş tarihimiz kayarsa rezervasyonumuz ne oluyor?",
                cevap:
                    "Kayma ihtimalini baştan konuştuğumuz için genellikle sorun çıkmıyor. Rezervasyon kurarken tarihin ne kadar sağlam olduğunu soruyoruz; sağlam değilse opsiyon düzeniyle ilerliyor ve serbest bırakma gününü birlikte belirliyoruz. Tarih kesin olarak bağlandıktan sonra kayma olursa yeni tarihin doluluğuna bakıyoruz — zirve hafta dışına kayan bir duruş neredeyse her zaman kolayca karşılanır, zirve haftanın içine kayan bir duruşta ise Bozüyük hattındaki makineleri kaydırmayı deniyoruz. Yapamayacağımız durumda bunu hemen söylüyoruz, çünkü geç haber verilen bir yetersizlik, o pencerenin tümüyle kaybedilmesi anlamına geliyor. Kaymayı erken bildirmeniz çözüm alanını belirgin genişletiyor.",
            },
            {
                soru: "Zirve haftada makine bulunamazsa alternatifimiz ne?",
                cevap:
                    "Üç alternatifi sırayla değerlendiriyoruz. Birincisi kaydırma: iki şehir hattında o hafta işi erken biten bir makine varsa aktarılır, mesafe kısa olduğu için bu çoğu zaman aynı gün içinde çözülür. İkincisi duruşun birkaç gün ötelenmesi ya da öne alınmasıdır; bu size bağlı bir karar ama takvimi erken gördüğümüzde öneri olarak sunabiliyoruz ve bölgede sıkça uygulanıyor. Üçüncüsü iş listesinin ayıklanmasıdır — pencere dışında yapılabilecek kalemler ayrıldığında ihtiyaç duyulan makine sayısı ve süre küçülür, kalan iş elimizdeki kapasiteye sığar. Bu üçü de işlemiyorsa bunu açıkça söylüyoruz; olmayan kapasiteyi varmış gibi taahhüt etmek, o duruşun tamamen boşa gitmesine yol açıyor.",
            },
            {
                soru: "Duruş bittikten sonra da makineye ihtiyacımız olur mu?",
                cevap:
                    "Neredeyse her zaman oluyor ve planlamaya baştan yazmanızı öneriyoruz. Devreye alma günlerinde ayar, sızdırmazlık kontrolü, hizalama ve ölçüm kalemleri arka arkaya açılır; bunların önemli bölümü yine yukarıda çözülür. Duruş kapandığı gün makineyi çektiğimizde, bir hafta sonra ikinci bir sevkiyat gündeme geliyor ve bu hem zaman hem bedel olarak duruş içindeki kullanımdan pahalıya geliyor. Uygulamamız, duruş süresine bir kuyruk günü eklemek: makine devreye alma boyunca sahada kalır, çıkan kalem beklemez. Kuyruk süresini teklifte ayrı satır olarak gösteriyoruz, böylece hem görünür oluyor hem sonradan tartışılmıyor.",
            },
            {
                soru: "Yıllık bakım takvimimizi paylaşırsak ne değişir?",
                cevap:
                    "Konuşmanın yönü değişir. Takvimi gördüğümüzde talebiniz bizim defterimizde bir satır olmaktan çıkıp planın parçası hâline gelir: zirve haftalarınız için kapasite baştan ayrılır, ara dönemdeki kısa işleriniz iki şehir arasındaki geçişlere yerleştirilir ve devreye alma kuyruğu duruş süresine baştan eklenir. Uygulamada bunun en somut karşılığı, sizin adınıza tutulan haftanın başka bir talebe verilmemesi oluyor. İkinci karşılık öngörülebilirlik: bakım bütçenizde platform kalemi tahmine değil takvime dayanır. Ayrıntılı bir doküman gerekmiyor — hangi hattın hangi dönemde duracağını gösteren kaba bir liste, planlamayı kurmamıza fazlasıyla yetiyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir OSB'nin bölgedeki sanayi ağırlığı ve planlı duruşların tatil-izin dönemlerine toplanması kamuya açık, sektörde bilinen bir düzendir; rezervasyon, opsiyon ve slot planı uygulamaları firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:bozuyuk": {
        h1: "Bozüyük'te Duruş Dönemi Manlift Kiralama ve İki Şehir Kapasitesi",
        giris:
            "Bozüyük ile Eskişehir arasındaki karayolu mesafesi, kiralama işinde tek bir cümleyle özetlenebilecek bir imkân yaratır: bir makine sabah bir şehirdeki işini bitirip öğleden sonra diğerindeki işe başlayabilir. Bu, iki ayrı sanayi bölgesine iki ayrı filo tutmak yerine ortak bir kapasite havuzu kurmayı mümkün kılar ve duruş dönemlerinde asıl fark burada ortaya çıkar. Bozüyük tarafındaki tesislerin bakım pencereleri her zaman Eskişehir'deki tesislerin penceresiyle çakışmaz; birinin kapandığı hafta diğerinin yoğunlaştığı hafta olabilir. Bu asimetri bizim için bir planlama aracıdır — bir uçtaki boşluk, diğer uçtaki baskıyı hafifletir. Bozüyük sayfasında anlattığımız şey bu nedenle tek bir tesisin bakım tekniği değil, ilçenin bu havuz içindeki yeri: duruş tarihlerinin nasıl toplandığı, makinenin hangi koşulda ilçede bırakıldığı, hangi koşulda kuzeye çekildiği ve bir tesisin kendi penceresini bu akış içinde nasıl güvenceye alacağı. Tarihini erken bildiren tesis, bu hatta neredeyse hiçbir zaman kapasite sorunu yaşamıyor.",
        maddeler: [
            {
                baslik: "Ortak havuzun mantığı: iki uç, tek defter",
                metin:
                    "İki şehirdeki talebi ayrı ayrı değil tek bir defterde tutuyoruz. Bunun pratik anlamı şudur: bir makine Bozüyük'te bir tesisin penceresini kapattığında, o gün Eskişehir tarafında açılan bir talebe yönlendirilebilir ve tersi de geçerlidir. Ayrı filo tutan bir düzende bu mümkün olmaz — her bölge kendi zirvesinde sıkışır, kendi durgun döneminde atıl kalır. Havuz mantığı, ilçedeki bir tesise zirve haftada makine bulma şansını belirgin biçimde artırıyor; karşılığında istediğimiz tek şey tarihin erken bildirilmesi.",
            },
            {
                baslik: "Duruş takvimlerinin çakışması ve ayrışması",
                metin:
                    "İlçedeki üretim dokusu ile kuzey komşusunun dokusu birebir aynı değildir ve bu, bakım pencerelerinin farklı zamanlara düşmesine yol açar. Uzun çevrimli ekipmanı olan tesisler duruşlarını seyrek ama uzun kurar; hattı vardiya sonunda soğuyan tesisler ise sık ama kısa pencereler kullanır. Takvim defterini bu ayrımı görecek şekilde tutuyoruz. Çakışmanın en yüksek olduğu haftalar önceden işaretlenir, ayrıştığı haftalar ise kaydırma için doğal fırsat penceresi olarak kullanılır.",
            },
            {
                baslik: "Makinenin ilçede kalması ne zaman mantıklı",
                metin:
                    "Bir makinenin iş bitiminde geri çekilmesi her zaman doğru karar değildir. İlçede birkaç gün içinde açılacak başka bir pencere varsa makine yerinde bırakılır; böylece hem iki sevkiyat bedeli doğmaz hem de ikinci tesis beklemez. Bu kararı defterdeki doluluk üzerinden veriyoruz ve tesislere şeffaf biçimde aktarıyoruz: makine sizden sonra hangi adrese geçecek, ne zaman geçecek. Bu bilgi paylaşıldığında tesisler kendi pencerelerini kendi aralarında hizalayabiliyor ve bu, ilçede en çok işe yarayan eşgüdüm biçimi oluyor.",
            },
            {
                baslik: "Gece transferi ve ertesi sabah hazır olma",
                metin:
                    "Duruş pencereleri genellikle sabah başlar ve o saatte makinenin yolda olması kabul edilemez. Bu yüzden hat üzerindeki transferleri iş bitiminden sonraya, akşam ve gece saatlerine planlıyoruz: makine bir tesisten akşam çıkar, gece hattı kullanır ve ertesi sabah pencere açıldığında ikinci tesiste şarj edilmiş hâlde bekler. Kısa karayolu mesafesi bunu gerçekçi kılan tek etkendir. Transfer planını duruş takvimine göre kuruyoruz; teslim saati pencerenin başlangıcına göre değil, en az bir vardiya öncesine yazılır.",
            },
            {
                baslik: "Pencere kısaysa makine sayısı artar",
                metin:
                    "İlçedeki bazı tesislerde bakım penceresi doğası gereği kısadır ve uzatılamaz. Böyle bir pencerede tek makineyle çalışmak, iş listesinin bir bölümünü bir sonraki döneme ertelemek anlamına gelir. Bu durumlarda hesabı ters kurmayı öneriyoruz: pencerenin uzunluğu sabit alınır, iş listesi bu süreye sığacak şekilde makine sayısına bölünür. İkinci makinenin bedeli, ertelenen bir bakım kaleminin bir sonraki pencereye kadar taşıdığı riskle kıyaslandığında çoğu tesiste küçük kalıyor. Kararı birlikte, liste üzerinden veriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hattın iki ucu arasında kapasite akışı",
                paragraflar: [
                    "Aşağıdaki çerçeve, iki şehir arasındaki kapasite akışını hangi durumda hangi yöne kurduğumuzu gösterir. Talep geldiğinde ilk baktığımız şey bu tablodaki satırlardan hangisinde olduğumuzdur.",
                ],
                tablo: {
                    basliklar: ["Durum", "Kapasitenin yönü", "Transfer zamanı", "Tesise etkisi"],
                    satirlar: [
                        ["Bozüyük yoğun, kuzey sakin", "Kuzeyden ilçeye", "Bir gün önceden", "Zirve haftada yer bulunur"],
                        ["Kuzey yoğun, ilçe sakin", "İlçeden kuzeye", "İş biter bitmez", "Boş kalan gün değerlenir"],
                        ["İki uç da yoğun", "Kaydırma yok", "—", "Erken bağlayan yer alır"],
                        ["Ardışık pencereler", "Makine ilçede kalır", "Akşam transferi", "İkinci sevkiyat doğmaz"],
                        ["Plansız arıza", "En yakın uygun makine", "Aynı gün", "Süre mesafeye bağlı"],
                        ["Uzun revizyon", "Makine sabitlenir", "Proje başında", "Havuzdan çıkarılır"],
                    ],
                },
            },
            {
                baslik: "Pencerenizi güvenceye almanın pratik adımları",
                paragraflar: [
                    "İlçedeki tesislerle çalışırken üç adımlık basit bir düzen kuruyoruz. Birincisi tarihin bildirilmesi: kesin olmasa bile hangi haftaya işaret ettiğini söylemek, defterde o haftanın sizin adınıza işaretlenmesi için yeterli. İkincisi pencerenin uzunluğunun ve iş listesinin kabaca paylaşılması; bu, kaç makinenin gerekeceğini önceden görmemizi sağlıyor. Üçüncüsü teyit tarihidir — hangi güne kadar kesinleşeceğini bilmek, o güne kadar yeri tutmamızı mümkün kılıyor.",
                    "Bu üç adım tamamlandığında ilçedeki bir tesisin zirve haftada makinesiz kalması neredeyse hiç yaşanmıyor. Adımlar atlandığında ise sonuç genellikle şu oluyor: pencere yaklaşırken yapılan arama, defterin dolu olduğu bir haftaya denk geliyor ve elimizde yalnızca kaydırma seçeneği kalıyor. Kaydırma her zaman çalışan bir çözüm değil; bu yüzden erken bildirim üzerinde bu kadar duruyoruz.",
                ],
            },
            {
                baslik: "Havuz düzeninin sınırları ve dürüst çerçevesi",
                paragraflar: [
                    "Ortak kapasite havuzu güçlü bir araçtır ama sınırsız değildir. Bölgedeki tüm tesisler aynı tatil bloğunda durduğunda havuz da doluyor ve kaydıracak makine kalmıyor; böyle bir haftada verilecek dürüst cevap, kapasitenin olmadığıdır. Bu durumda yapabildiğimiz tek şey seçenekleri sıralamak: pencereyi birkaç gün kaydırmak, iş listesini pencere içi ve pencere dışı olarak ayırmak ya da kısa süreli bir kullanım için sıraya girmek.",
                    "İkinci sınır plansız taleplerdir. Bir arıza duruşunda makine nerede boşsa oradan gelir ve süre mesafeye bağlıdır; şehir içi hızında bir müdahale sözü vermiyoruz. Buna karşılık planlı işlerde ilçe ile kuzey arasında bir hizmet farkı bulunmuyor — aynı hazırlık, aynı teslim düzeni ve aynı yazılı taahhüt geçerlidir. Havuz düzeninin anlamı zaten budur: adres değil, takvim belirleyicidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bozüyük'te miyiz diye makine bulmakta zorlanır mıyız?",
                cevap:
                    "Hayır, çünkü ilçeyi ayrı bir servis noktası olarak değil, iki şehirli tek bir kapasite havuzunun ucu olarak çalıştırıyoruz. Makineler iki uç arasında talebe göre dolaşıyor ve karayolu mesafesi kısa olduğu için transfer gün içinde tamamlanabiliyor. Uygulamada zorlanılan tek durum, iki ucun aynı anda dolu olduğu haftalardır — bu da bölgesel tatil bloklarına denk gelen sayılı haftadır. Talebinizi o haftalar için erken bağladığınızda sorun yaşanmıyor. Ara dönemlerde ise ilçeye makine bulmak hiçbir zaman gündem olmuyor; asıl konuştuğumuz konu hangi sınıfın işinize uyduğu oluyor.",
            },
            {
                soru: "Makine bizden sonra nereye gidiyor; işimiz uzarsa sorun olur mu?",
                cevap:
                    "Bu bilgiyi baştan paylaşıyoruz, çünkü sürprizin bedelini iki taraf da ödüyor. Rezervasyon kurarken makinenin sizden sonra bir işi olup olmadığını söylüyoruz; varsa hangi güne bağlı olduğunu da. İş uzarsa iki durum var. Sonraki adres esnekse süreyi uzatıyoruz ve bunu tek telefonla çözüyoruz. Sonraki adres bir duruş penceresine bağlıysa uzatma mümkün olmuyor, çünkü o tesisin penceresi de kaydırılamaz. Bu ikinci durumu baştan bildiğinizde iş planınızı buna göre kurabiliyorsunuz. Uzama ihtimali yüksek işlerde makineyi baştan daha uzun süreye bağlamayı öneriyoruz; ek gün, yarım kalan bir listeden her zaman ucuz.",
            },
            {
                soru: "Bakım penceremiz çok kısa; iş listesi sığmazsa ne yapmalıyız?",
                cevap:
                    "Hesabı tersten kurmanızı öneriyoruz. Pencerenin uzunluğu sabit bir veri; değiştirebileceğiniz şey iş listesi ve makine sayısı. Önce listeyi ikiye ayırıyoruz — gerçekten duruş gerektirenler ve hattın çalışmasıyla çakışmayanlar. İkinci grup pencereden çıkınca liste belirgin kısalıyor. Kalan iş yine sığmıyorsa ikinci makineyi konuşuyoruz: nokta sayısı ve dağılıma bakarak iki makinenin işi gerçekten yarıya indirip indirmeyeceğini hesaplıyoruz, çünkü dar bir hacimde iki makine bazen birbirini bekliyor. Hesap olumluysa ikinci makinenin bedeli, ertelenen bir kalemin bir sonraki pencereye kadar taşıdığı riskin çok altında kalıyor.",
            },
            {
                soru: "Makine sabah kaçta sahada olur?",
                cevap:
                    "Pencerenin başlangıcında değil, en az bir vardiya öncesinde. Duruş pencereleri genellikle sabah açılır ve o saatte makinenin yolda olması kabul edilebilir değil; pencere içinde geçen bir saatlik bekleme doğrudan yapılamayan bir bakım kalemine dönüşüyor. Bu yüzden hat üzerindeki transferleri akşam ve gece saatlerine planlıyoruz: makine bir önceki iş yerinden mesai sonrası çıkar, gece yolu kullanır ve sabah tesisinizde şarj edilmiş hâlde bekler. Teslim saatini teklifte yazıyoruz. Sizden istediğimiz tek şey, makinenin gece bırakılabileceği kapalı ya da gözetimli bir park noktası göstermeniz.",
            },
            {
                soru: "Duruş tarihimizi kaydırmamız önerilirse buna neden razı olalım?",
                cevap:
                    "Razı olmak zorunda değilsiniz; öneri her zaman sizin lehinize olduğu durumlarda gündeme geliyor. Şöyle çalışıyor: bölgedeki duruşlar aynı haftalara toplandığında o haftada hem makine hem operatör hem de yedek kapasite sıkışıyor. Pencerenizi birkaç gün öne ya da arkaya almanız mümkünse, sıkışık olmayan bir dilimde daha rahat çalışılıyor — makine tam gün size ayrılıyor, gerekirse ikinci makine ekleniyor ve yedek bulundurma gerçekçi hâle geliyor. Kaydırma üretim programınız açısından mümkün değilse bunu söylersiniz ve biz zirve hafta için kapasiteyi baştan ayırırız. Amaç tarihi değiştirmek değil, seçeneği görünür kılmak.",
            },
            {
                soru: "İlçede birden çok tesisin duruşu aynı haftaya denk geldi; sıralama nasıl yapılıyor?",
                cevap:
                    "Sıralama defterdeki bağlanma sırasına göre yapılır ve bunu değiştirmiyoruz — daha büyük bir talep geldi diye bağlanmış bir tarihi bozmak, bizim tarafımızda kabul edilebilir bir davranış değil. Bağlama sırası eşitse ya da tarihler henüz opsiyondaysa, pencerelerin birbirini tamamlayıp tamamlamadığına bakıyoruz: bir tesisin penceresi sabah, diğerininki akşam bloğundaysa aynı makine ikisini de karşılayabiliyor. Pencereler birebir çakışıyorsa kuzey uçtan makine kaydırmayı deniyoruz. Bu üçü de işlemezse durumu her iki tesise açıkça anlatıyor, kimin ne zaman makine alacağını yazılı olarak bildiriyoruz; belirsizlik bırakmak en kötü seçenek.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün Bilecik'teki sanayi ağırlığı ve Eskişehir'e karayolu yakınlığı kamuya açık bilgidir; ortak kapasite havuzu, gece transferi ve opsiyonlu rezervasyon düzeni firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:bilecik": {
        h1: "Bilecik'te Bakım Dönemi Manlift Kiralama ve Takvim Planlaması",
        giris:
            "Bilecik genelinde bakım talebi, tek bir büyük duruş takvimi etrafında toplanmaz; il, birbirinden farklı ölçekte ve farklı ritimde çalışan tesisleri barındırır. Büyük üretim tesislerinin uzun ve seyrek pencereleri ile orta ölçekli işletmelerin sık ama kısa duruşları aynı ilde yan yana yürür. Kiralama tarafında bu ikili yapı ilginç bir sonuç üretir: ilin talep eğrisi, tek bir sanayi bölgesinin eğrisinden daha yayvandır ve tam da bu yüzden yönetilebilirdir. Büyük tesislerin pencereleri defterde önceden yer tuttuğunda, aralarda kalan günler küçük işletmelerin kısa duruşlarına açılır ve makine gün gün dolaşarak ilerler. Bu sayfada anlattığımız şey bu akışın nasıl kurulduğudur: bir tesisin talebinin defterde nereye oturduğu, kısa işlerin uzun pencerelerin arasına nasıl yerleştirildiği, bekleme listesinin nasıl işlediği ve ilde bir hafta gerçekten dolduğunda hangi seçeneklerin kaldığı. Sorulacak ilk soru burada da aynı: pencereniz hangi hafta ve ne kadar sürüyor?",
        maddeler: [
            {
                baslik: "İki farklı ritmin aynı deftere yazılması",
                metin:
                    "Uzun ve seyrek pencereler ile kısa ve sık duruşlar aynı takvimde yaşar. Uzun pencereler defterde blok olarak durur ve etrafında hareket alanı bırakmaz; kısa duruşlar ise bu blokların aralarına yerleşebilir. Planlamayı bu iki katmanı ayrı ayrı görecek şekilde yapıyoruz: önce bloklar yerleşir, sonra aralar doldurulur. Bu sıralama önemlidir, çünkü tersi yapıldığında kısa işler takvimi parçalar ve bir blok için gereken kesintisiz süre bulunamaz hâle gelir.",
            },
            {
                baslik: "Kısa duruşun kendine özgü zamanlaması",
                metin:
                    "Orta ölçekli işletmelerin duruşları çoğunlukla mesai sonrasına ya da hafta sonuna sıkışır ve süresi saatlerle ölçülür. Bu tip talepte belirleyici olan makine sınıfı değil teslim saatidir: makine pencere açılmadan sahada olmalı, pencere kapandığında ise bir sonraki adrese geçebilecek durumda bulunmalıdır. Bu yüzden kısa duruş taleplerinde saat aralığını yazılı olarak kesinleştiriyoruz. Saatler netleştiğinde bir makine gün içinde birden çok kısa pencereyi karşılayabiliyor ve birim maliyet belirgin düşüyor.",
            },
            {
                baslik: "Bekleme listesi: dolan haftada ne yapılır",
                metin:
                    "Bir hafta dolduğunda talebi geri çevirmek yerine bekleme listesine alıyoruz. Bunun boş bir jest olmamasının nedeni, defterdeki tarihlerin bir bölümünün gerçekten hareket etmesidir: opsiyonlar serbest bırakılır, pencereler kısalır, bazı işler beklenenden erken biter. Böyle bir boşluk açıldığında listedeki sıraya göre haber veriyoruz. Listede olmak bir garanti değildir ve bunu açıkça söylüyoruz; ancak ilde bir haftanın tümüyle kapalı kalması nadir, listedeki sıranın işlemesi ise sık görülüyor.",
            },
            {
                baslik: "Talebin mevsimsel dalgası ve düşük sezon avantajı",
                metin:
                    "Yılın belirli dönemlerinde talep yükselir, belirli dönemlerinde belirgin düşer. Bakımını erteleyebilen bir işletme için bu, doğrudan bir maliyet aracıdır: düşük sezon haftalarında makine daha uzun süre sahada tutulabilir, gün başına bedel düşer ve yedek makine bulundurmak gerçekçi hâle gelir. Zorunlu olmayan tavan işlerini bu haftalara taşımayı öneriyoruz. Bunun tek koşulu ertelemenin bir risk yaratmaması; bir kalem güvenlik ya da süreklilik açısından kritikse mevsim beklemesi doğru değildir ve bunu açıkça belirtiyoruz.",
            },
            {
                baslik: "İl içi dağınıklığın planlamaya etkisi",
                metin:
                    "Bilecik'te tesisler tek bir noktada toplanmaz; talepler ilin farklı yerlerinden gelir ve iki adres arasındaki mesafe bazen ilçe sınırlarını aşar. Bu, gün planını doğrudan etkiler: bir günde kaç adrese uğranabileceği makinenin hızıyla değil, adreslerin dağılımıyla belirlenir. Talep aldığımızda konumu defterdeki diğer taleplerle birlikte değerlendiriyor, aynı yöndeki işleri ardışık günlere diziyoruz. Bu sıralama tesis açısından görünmez bir ayrıntı gibi durur ama teslim saatinin tutmasını sağlayan asıl mekanizma odur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Pencere tipine göre planlama düzeni",
                paragraflar: [
                    "İl genelinden gelen talepleri pencere tipine göre ayırıyoruz. Aşağıdaki çerçeve, her tipin defterde nasıl ele alındığını ve tesisten ne beklediğimizi gösterir.",
                ],
                tablo: {
                    basliklar: ["Pencere tipi", "Tipik uzunluk", "Deftere yazılma biçimi", "Tesisten beklenen"],
                    satirlar: [
                        ["Uzun revizyon bloğu", "Birkaç gün", "Blok olarak sabitlenir", "Erken tarih bildirimi"],
                        ["Hafta sonu duruşu", "İki güne kadar", "Bloklar arasına yerleşir", "Saat aralığı teyidi"],
                        ["Mesai sonrası pencere", "Birkaç saat", "Gün içinde sıralanır", "Kesin başlangıç saati"],
                        ["Vardiya arası müdahale", "Kısa", "Aynı yöndeki işlere eklenir", "Konum ve erişim bilgisi"],
                        ["Dönemsel kontrol turu", "Esnek", "Düşük sezona kaydırılır", "Takvim payı"],
                        ["Beklenmedik duruş", "Belirsiz", "Boşluğa yerleştirilir", "Hızlı karar"],
                    ],
                },
            },
            {
                baslik: "Kısa pencerede zaman nerede kaybediliyor",
                paragraflar: [
                    "Birkaç saatlik bir duruşta kaybedilen zamanın büyük bölümü yukarıda değil, aşağıda geçer: makinenin park edeceği yerin son anda belirlenmesi, çalışma noktasının altındaki alanın boşaltılması, malzemenin depodan getirilmesi, izin formunun doldurulması. Bunların hepsi pencere açılmadan tamamlanabilir kalemlerdir ve tamamlandığında kısa bir pencerede yapılabilen iş miktarı belirgin biçimde artar.",
                    "Uygulamada tesise kısa bir hazırlık listesi bırakıyoruz: park noktası, alt alanın boşaltılması, malzemenin nokta bazında ayrılması ve izin evrakının önceden açılması. Liste küçük görünür ama kısa pencerelerde işin yarısını belirler. Uzun revizyonlarda bu hazırlığın etkisi oransal olarak azalır; asıl değerini saatlerle ölçülen duruşlarda gösteriyor.",
                ],
            },
            {
                baslik: "Erteleme kararını doğru vermek",
                paragraflar: [
                    "Her tavan işi aynı aciliyette değildir ve bunu ayırmak, ilde kapasiteyi en çok rahatlatan adımdır. Güvenlik ekipmanının kontrolü, yangın algılama hattı ve süreklilik açısından kritik ekipmanların bakımı ertelenemez; bunları zirve haftaya denk gelse bile takvime yazıyoruz. Buna karşılık estetik ya da konfor amaçlı kalemler, bir sonraki düşük sezon haftasına rahatlıkla taşınır ve orada hem daha rahat çalışılır hem daha uygun bedelle sonuçlanır.",
                    "Bu ayrımı tesisin kendi teknik ekibiyle birlikte yapıyoruz, çünkü bir kalemin kritik olup olmadığına dışarıdan karar vermek doğru değil. Bizim katkımız, hangi haftanın yoğun hangisinin sakin olduğunu göstermek oluyor. İki bilgi yan yana geldiğinde erteleme kararı kendiliğinden netleşiyor ve tartışmalı bir konu olmaktan çıkıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük bir işletmeyiz; büyük tesislerin duruş haftasında bize sıra gelir mi?",
                cevap:
                    "Gelir, çünkü defteri ölçeğe göre değil bağlanma sırasına göre işletiyoruz. Bir küçük işletmenin birkaç saatlik penceresi, büyük bir tesisin günlerce süren bloğundan sonra ya da öncesinde rahatlıkla karşılanabilir; hatta çoğu zaman aynı gün içinde ikisi de yapılır. Sizin lehinize çalışan bir ayrıntı da var: kısa pencereler esnek olduğu için takvimde daha kolay yer buluyor. Bize söylemeniz gereken tek şey pencerenizin hangi saat aralığında açıldığı. Saatler netleştiğinde makine o dilimde sizde oluyor, öncesinde ve sonrasında başka bir adreste. Bağlamayı geciktirdiğinizde ise seçenekler daralıyor; bu, ölçekten bağımsız olarak herkes için geçerli.",
            },
            {
                soru: "İstediğimiz hafta doluysa bekleme listesi işe yarıyor mu?",
                cevap:
                    "Yarıyor, ama bir garanti olarak sunmuyoruz ve bunu baştan söylüyoruz. Defterdeki tarihlerin bir bölümü yıl boyunca hareket ediyor: opsiyonlar serbest bırakılıyor, kesinleşen pencereler beklenenden kısa çıkıyor, bazı işler erken bitiyor. Böyle bir boşluk açıldığında listedeki sıraya göre haber veriyoruz ve karar için makul bir süre tanıyoruz. Listede beklerken paralel olarak iki şeyi de değerlendiriyoruz: pencerenizi birkaç gün kaydırma imkânınız var mı ve iş listenizin bir bölümü pencere dışına çıkarılabilir mi. Çoğu talep bu üç yoldan biriyle çözülüyor; hiçbiri olmuyorsa bunu erken söylüyoruz ki başka bir çözüm arayabilesiniz.",
            },
            {
                soru: "Bakım işimizi ucuza getirmenin bir yolu var mı?",
                cevap:
                    "Ertelenebilir kalemleri düşük sezona taşımak, ilde işe yarayan en somut yöntem. Talep yılın belirli dönemlerinde yükselip belirli dönemlerinde düşüyor; sakin haftalarda makine daha uzun süre sahada kalabiliyor, gün başına bedel düşüyor ve gerekirse ikinci bir makine eklemek gerçekçi hâle geliyor. İkinci yöntem, biriken küçük kalemleri tek pencereye toplamak: aynı hazırlık ve aynı teslim düzeni bir kez kurulduğunda birim maliyet belirgin iniyor. Üçüncüsü de erken bağlama; uzak tarihli bir rezervasyon bizim tarafımızda planlanabilir kapasite demek ve fiyatlaması buna göre yapılıyor. Ertelenmesi risk yaratan kalemleri ise bu hesabın dışında tutuyoruz, orada tasarruf yanlış yerden geliyor.",
            },
            {
                soru: "Birkaç saatlik duruşumuzda gerçekten iş bitirilebilir mi?",
                cevap:
                    "Hazırlık yapılmışsa evet, yapılmamışsa çoğu zaman hayır. Kısa pencerelerde kaybedilen zamanın büyük bölümü yukarıda değil aşağıda geçiyor: park yerinin son anda belirlenmesi, çalışma noktasının altındaki alanın boşaltılması, malzemenin depodan getirilmesi, izin evrakının doldurulması. Bunların hepsi pencere açılmadan bitirilebilir ve bitirildiğinde aynı sürede yapılabilen iş miktarı belirgin artıyor. Bu yüzden kısa duruş taleplerinde tesise küçük bir hazırlık listesi bırakıyoruz. Makine pencere açılmadan önce sahaya alınır, şarj edilmiş hâlde bekler ve saat geldiğinde ilk noktadan başlar; hazırlık süresi diye bir kalem oluşmaz.",
            },
            {
                soru: "Aynı gün içinde iki farklı adresimize uğrayabilir misiniz?",
                cevap:
                    "Adresler aynı yöndeyse ve saat aralıkları çakışmıyorsa evet; bunu düzenli yapıyoruz. Belirleyici olan makinenin hızı değil, iki adres arasındaki mesafe ve pencerelerin dizilişi. Talep aldığımızda konumunuzu defterdeki diğer taleplerle birlikte değerlendiriyor, aynı yöndeki işleri ardışık günlere ya da aynı güne diziyoruz. Sizden istediğimiz, iki adres için de başlangıç saatini ve tahmini süreyi vermeniz — süre tahmini tutmadığında ikinci adresteki pencere kaçıyor ve bunun telafisi olmuyor. Süreden emin değilseniz aralığı geniş tutmanızı öneriyoruz; planı gerçekçi bir tahminle kurmak, iyimser bir tahminle kurup sonra bozmaktan çok daha iyi sonuç veriyor.",
            },
            {
                soru: "Yıl boyunca düzenli ihtiyacımız var; nasıl bir düzen kurulabilir?",
                cevap:
                    "Yıllık bir plan çıkarıp defterde sabit yer ayırıyoruz. Uygulaması basit: hangi ekipmanın hangi dönemde bakıma gireceğini gösteren kaba bir liste veriyorsunuz, biz bu listeyi doluluk takvimiyle karşılaştırıp her kalem için gerçekçi bir hafta öneriyoruz. Kritik olanlar tarihe sabitleniyor, esnek olanlar sakin haftalara yerleşiyor. Bu düzenin üç somut karşılığı var: zirve haftada yer bulma sorunu ortadan kalkıyor, tekrar eden talepler için baştan süreç işletilmiyor ve bütçe tarafında platform kalemi tahmin olmaktan çıkıp takvime dayanıyor. Yıl içinde tarih değişirse defteri güncelliyoruz; planın amacı sizi bağlamak değil, sırayı görünür kılmak.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik'in farklı ölçekte üretim tesislerini birlikte barındıran yapısı kamuya açık bilgidir; bekleme listesi, düşük sezon planlaması ve pencere tipine göre defter düzeni firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:inonu": {
        h1: "İnönü'de Ana Sanayi Duruşuna Bağlı Manlift Kiralama",
        giris:
            "İnönü, Eskişehir'in sanayi ilçelerinden biridir ve buradaki üretimin önemli bölümü kendi başına ayakta duran bir program değil, başka bir tesisin programına bağlı bir haldedir: havacılık ve seramik hatlarına parça, yarı mamul ya da işleme hizmeti veren tesisler, müşterilerinin üretim ritmine göre çalışır. Bu bağımlılığın bakım tarafındaki karşılığı ilginçtir. Ana sanayinin durduğu hafta, yan sanayinin de sipariş baskısının hafiflediği haftadır; yani zincirin üst halkasındaki duruş, alt halkalar için doğal bir bakım penceresi açar. Aynı şey tersine de işler — ana sanayi çalışırken yan sanayinin duruş lüksü yoktur, çünkü teslim sözü işler. İlçedeki talebi bu zincir mantığıyla okuyoruz: bir tesisin penceresini soruyoruz ama asıl bilmek istediğimiz, o pencerenin hangi üst takvime bağlı olduğu. Bunu bildiğimizde ilçedeki taleplerin ne zaman yığılacağını haftalar öncesinden görebiliyor, kapasiteyi ona göre ayırabiliyoruz.",
        maddeler: [
            {
                baslik: "Zincir duruşu: üst halka durunca alt halka nefes alır",
                metin:
                    "Bir ana tesis planlı duruşa girdiğinde ona parça veren tesislerin sevkiyat baskısı da düşer. Bu birkaç günlük rahatlama, yan sanayi için yılın en kullanışlı bakım penceresidir; çünkü kendi hattını durdurduğunda kimsenin teslim programını bozmuş olmaz. Bu bağın farkında olan tesisler bakım takvimlerini doğrudan müşterilerinin duruş takvimine hizalıyor. Kiralama tarafında ise sonuç şudur: ilçedeki taleplerin önemli bölümü aynı haftalara düşer ve bu haftalar önceden bilinebilir.",
            },
            {
                baslik: "Teslim sözü varken duruş planlamanın maliyeti",
                metin:
                    "Ana sanayi çalışırken yapılan bir duruş, yan sanayide doğrudan gecikme riskidir. Bu yüzden ilçedeki tesisler bakım işlerini olabildiğince kısa ve kesin tarihli tutmak zorunda kalır; süre aşımı burada bir bakım sorunu değil, ticari bir sorundur. Bizim buna verdiğimiz karşılık, süre tahminini iyimser değil gerçekçi kurmaktır. Bir işin verilen pencereye sığmayacağını görüyorsak bunu baştan söylüyoruz — yarım kalan bir liste, bu zincirde kiralama bedelinden çok daha pahalıya mal oluyor.",
            },
            {
                baslik: "Havacılık ve seramik yan sanayinin farklı ritmi",
                metin:
                    "İlçedeki iki üretim kolu aynı ritimde çalışmaz. Havacılık zincirine iş yapan tesislerde program sipariş bazlıdır ve duruş pencereleri müşterinin takvimine göre açılır; seramik yan sanayinde ise pencere fırın ve kurutma çevrimlerine bağlıdır ve doğası gereği daha uzun sürer. Defteri bu iki ritmi ayrı görecek şekilde tutuyoruz, çünkü ikisi aynı haftaya düştüğünde kapasite baskısı gerçekten sertleşiyor. Ayrıştıkları haftalar ise ilçede en rahat çalışılan dönem oluyor.",
            },
            {
                baslik: "Küçük tesiste yedeklilik neden daha kritik",
                metin:
                    "Büyük bir tesiste bir makinenin arızalanması genellikle bir kalemin ertelenmesiyle sonuçlanır; teslim sözüne bağlı çalışan küçük bir tesiste ise aynı arıza doğrudan pencerenin kaybı demektir, çünkü ikinci bir pencere yakın zamanda açılmaz. Bu yüzden ilçeye giden makinelerde teslimat öncesi kontrolü geniş tutuyor, kritik tarihli işlerde havuzdaki bir makineyi yedek olarak işaretliyoruz. Yedek işaretlemesi kullanılmadığında yalnızca küçük bir hazır bulundurma kalemi doğuyor; kullanıldığında ise kaçırılmış bir teslim tarihini önlüyor.",
            },
            {
                baslik: "Pencereyi müşteri takvimine göre erken bağlamak",
                metin:
                    "Ana sanayinin duruş tarihi genellikle yan sanayiye önceden bildirilir; bu bilgi ilçedeki tesisin elinde, bizde ise değildir. Tesisin bunu bizimle paylaşması, kapasiteyi haftalar öncesinden ayırmamızı sağlıyor. Uygulamada ilçeden gelen taleplerin çoğu son anda geliyor ve nedeni bilgi eksikliği değil, alışkanlık: bakım işi ancak pencere yaklaştığında gündeme alınıyor. Oysa bilgi aylar önce elinizde oluyor ve o bilgiyle bağlanan bir tarih, sıkışık bir haftada bile sorunsuz karşılanıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zincirdeki konuma göre bakım penceresi",
                paragraflar: [
                    "İlçedeki tesislerin bakım penceresi, tedarik zincirindeki konumlarına göre farklı yerlerden belirlenir. Aşağıdaki çerçeve, talep geldiğinde önce hangi soruyu sorduğumuzu ve planı neye göre kurduğumuzu gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesisin konumu", "Pencereyi belirleyen", "Tipik zamanlama", "Planlama önceliği"],
                    satirlar: [
                        ["Doğrudan parça tedarikçisi", "Müşterinin duruş takvimi", "Ana sanayi durunca", "Erken kapasite ayırma"],
                        ["İşleme ve kaplama hizmeti", "Sipariş yoğunluğu", "Sipariş boşluğunda", "Kısa bildirimle hazır olma"],
                        ["Seramik yan sanayi", "Fırın çevrimi", "Uzun pencere", "Kuyruk süresi eklenmesi"],
                        ["Kalıp ve bakım atölyesi", "Kendi programı", "Esnek", "Sakin haftaya kaydırma"],
                        ["Depo ve sevkiyat birimi", "Bağımsız", "Yıl boyu", "Boş günlerin doldurulması"],
                        ["Ortak kullanımlı tesis", "Birden çok takvim", "Kesişim haftası", "Slot planı"],
                    ],
                },
            },
            {
                baslik: "Zincir takvimini okumanın pratik faydası",
                paragraflar: [
                    "İlçedeki bir tesisin bakım penceresini tek başına planlamak, aslında yarım bir plan yapmaktır. Asıl bilgi bir üst halkadadır: ana sanayinin duruş tarihleri belli olduğunda alt halkaların nefes alacağı haftalar da belli olur. Bu bilgiyi paylaşan tesislerle çalışırken kapasiteyi aylar öncesinden ayırabiliyor, gerekirse aynı haftaya birden çok makine planlayabiliyoruz.",
                    "Bunun ikinci faydası ilçe ölçeğinde ortaya çıkıyor. Aynı ana sanayiye çalışan birkaç tesisin penceresi aynı haftaya düştüğünde, makinelerin bu tesisler arasında gün gün dolaşacak şekilde sıralanması mümkün oluyor. Her tesis kendi kullanım süresini üstleniyor, hafta boyunca makine boşta kalmıyor ve hiçbiri diğerinin programını beklemek zorunda kalmıyor. Bu sıralamayı biz kuruyoruz; tesislerden istediğimiz tek şey pencerelerini erken bildirmeleri.",
                ],
            },
            {
                baslik: "Duruş sonrası ilk üretim günlerinin yükü",
                paragraflar: [
                    "Yan sanayide devreye alma dönemi, ana sanayidekinden daha serttir; çünkü hat yeniden çalıştığında bekleyen sipariş de aynı anda geri gelir. İlk günlerde çıkan ayar ve düzeltme kalemlerinin yukarıda çözülmesi gerekenler bölümü, tam da hattın en yoğun olduğu ana denk gelir. Bu yüzden ilçedeki tesislere duruş süresine kısa bir kuyruk günü eklemelerini öneriyoruz.",
                    "Kuyruk günü, makinenin devreye alma boyunca sahada kalması demektir ve maliyeti tek bir günün bedelidir. Alternatifi, bir hafta sonra ikinci bir sevkiyat düzenlemek ve o güne kadar çıkan kalemi bekletmektir. Teslim sözüne bağlı çalışan bir tesiste bu bekleme genellikle en pahalı seçenek oluyor. Kuyruk gününü teklifte ayrı satır olarak gösteriyoruz, isteyen çıkarabiliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bakım penceremizi müşterimizin duruşuna göre planlıyoruz; siz bunu nasıl takip ediyorsunuz?",
                cevap:
                    "Takip etmiyoruz, sizden öğreniyoruz — ve bu bilgi bizim için en değerli planlama girdisi. Ana sanayinin duruş tarihi size genellikle haftalar hatta aylar öncesinden bildiriliyor; o bilgiyi bizimle paylaştığınızda kapasiteyi aynı anda ayırabiliyoruz. Uygulamada ilçeden gelen taleplerin büyük bölümü pencere yaklaştığında geliyor ve bunun nedeni bilginin eksikliği değil, bakım işinin gündeme geç alınması. Tarihi öğrendiğiniz gün bir telefon yeterli; kesinleşmemişse opsiyon kuruyoruz, hafta sizin adınıza bekliyor ve belirlediğimiz güne kadar teyit gelmezse serbest kalıyor. Bu düzen ilçede en çok işe yarayan uygulama.",
            },
            {
                soru: "Teslim sözümüz var; iş penceremize sığmazsa ne oluyor?",
                cevap:
                    "Bunu sahada değil, teklif aşamasında konuşmayı tercih ediyoruz. Nokta sayısını, noktalar arası dağılımı ve her noktadaki tahmini süreyi alıp gerçekçi bir toplam çıkarıyoruz; iyimser tahmin vermek bu zincirde kimsenin işine yaramıyor. Süre pencerenize sığmıyorsa üç seçeneği masaya koyuyoruz: iş listesini pencere içi ve pencere dışı olarak ayırmak, ikinci makineyle paralel çalışmak ya da listenin bir bölümünü bir sonraki pencereye yazmak. Üçünün de maliyetini yan yana gösteriyoruz. Kararı siz veriyorsunuz ama bilgiyle veriyorsunuz — yarım kalan bir listenin gecikmeye dönüşmesi, bu tesislerde kiralama bedelinden kat kat pahalı.",
            },
            {
                soru: "Makine bizde arızalanırsa penceremiz gider mi?",
                cevap:
                    "Bu riski küçük tesislerde daha ciddiye alıyoruz, çünkü sizin ikinci bir pencereniz yakın zamanda açılmıyor. İki katmanlı çalışıyoruz. Birincisi önleme: ilçeye giden makinelerde teslimat öncesi kontrolü geniş tutuyoruz ve sınırda görünen bir makineyi yola çıkarmıyoruz. İkincisi yedeklilik: tarihe sıkı bağlı işlerde havuzdaki bir makineyi o hafta için yedek olarak işaretliyoruz. Yedek hiç devreye girmezse yalnızca küçük bir hazır bulundurma kalemi doğuyor; devreye girdiğinde ise kaçırılmış bir teslim tarihini önlüyor. Bu ikinci katmanı özellikle ana sanayinin duruşuna hizalanmış pencerelerde öneriyoruz, çünkü orada tarih gerçekten kaydırılamıyor.",
            },
            {
                soru: "Fırınlı üretim yapıyoruz; penceremiz uzun ama başlangıcı belirsiz. Nasıl planlanıyor?",
                cevap:
                    "Başlangıcı belirsiz ama süresi uzun pencerelerde makineyi tarihe değil döneme bağlıyoruz. Yani makine, pencerenin açılması beklenen günden önce sahaya alınır ve çalışma koşulları oluştuğu anda iş başlar; bekleme süresi kiralama süresine baştan yazılır, sonradan çıkan bir kalem olmaz. Bu düzenin alternatifi, pencere açıldığında makine aramaktır ve o noktada bulunan makine çoğu zaman istenen sınıfta olmuyor. Sizden istediğimiz iki bilgi var: pencerenin hangi haftaya işaret ettiği ve beklenen uzunluğu. Bu ikisiyle defterde uygun bir blok ayırıyor, bloğun başındaki bekleme payını da teklife yazıyoruz.",
            },
            {
                soru: "Aynı ana sanayiye çalışan komşu tesislerle aynı haftadayız; sıkıntı çıkar mı?",
                cevap:
                    "Doğru planlandığında tam tersine avantaj çıkıyor. Pencereleriniz aynı haftaya düşüyor ama saatleri ve süreleri genellikle birebir aynı değil; bu, bir makinenin hafta boyunca tesisler arasında sıralı dolaşmasını mümkün kılıyor. Her tesis yalnızca kendi kullanım süresini üstleniyor, makine boşta kalmıyor ve kimse diğerinin programını beklemiyor. Sıralamayı biz kuruyoruz ve saat aralıklarını herkese önceden bildiriyoruz. Bunun çalışması için tek şart, pencerelerin erken bildirilmesi — hafta yaklaştığında yapılan aramalarda sıralama kurmak için yeterli alan kalmıyor ve o zaman gerçekten sıkışma yaşanıyor.",
            },
            {
                soru: "Duruş bittikten sonra makineyi hemen mi göndermeliyiz?",
                cevap:
                    "Yan sanayide genellikle hayır, bir gün daha tutmanızı öneriyoruz. Hattınız yeniden çalıştığında bekleyen sipariş de aynı anda geri geliyor ve ilk günlerde çıkan ayar, hizalama, sızdırmazlık düzeltmesi gibi kalemler tam bu yoğunlukta gündeme geliyor. Bunların yukarıda çözülmesi gerekenler bölümü için makine sahadaysa iş beklemiyor; makine gitmişse ikinci bir sevkiyat gerekiyor ve o organizasyon hem zaman hem bedel olarak ek gün bedelinin üzerine çıkıyor. Kuyruk gününü teklifte ayrı satır olarak gösteriyoruz. İhtiyaç duymayacağınızı düşünüyorsanız çıkarıyoruz; ama ilçedeki tesislerin çoğunda bu satırın karşılığını gördük.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İnönü'nün Eskişehir'in sanayi ilçelerinden biri olması ve havacılık ile seramik yan sanayinin bölgedeki varlığı kamuya açık bilgidir; zincir duruşu okuma, yedek işaretleme ve kuyruk günü uygulamaları firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:odunpazari": {
        h1: "Odunpazarı'nda Duruş Sezonu Dışında Manlift Kiralama Planı",
        giris:
            "Odunpazarı'ndaki üretim işletmelerinin bakım takvimini belirleyen şey, kendi hattının ritminden çok bölgenin genel duruş sezonudur — ve bu, çoğu işletmenin farkında olmadığı bir dezavantaj yaratır. Sanayi bölgelerinin toplu olarak durduğu haftalarda ilçedeki küçük ve orta ölçekli işletmeler de bakım yapmak ister; sonuç, herkesin aynı anda makine aradığı ve en küçük ölçeğin en son sıraya düştüğü bir hafta olur. Oysa bu ilçenin en büyük avantajı tam da esnekliğidir: tek vardiya çalışan bir işletmenin bakım penceresi her akşam yeniden açılır ve bu pencere, bölgesel duruş sezonuyla hiçbir bağa sahip değildir. Bu sayfada anlattığımız şey bu avantajı kullanma biçimi — yani takvimi kalabalıktan ayırmak, işi zirve haftaların dışına çıkarmak ve sakin dönemlerde hem daha rahat hem daha ekonomik çalışmak. İlçedeki bir işletme için doğru soru şudur: bu işi mutlaka o hafta mı yapmalıyım, yoksa iki hafta sonrası her açıdan daha mı iyi?",
        maddeler: [
            {
                baslik: "Kalabalık haftaya girmemenin somut karşılığı",
                metin:
                    "Bölgesel duruş haftalarında talep tepe yapar ve bu, küçük ölçekli bir talebin en zor karşılandığı andır. Aynı işi iki hafta öteye taşımak ise tabloyu tersine çevirir: makine seçeneği genişler, teslim saati esnekleşir ve gerekirse ikinci bir makine eklemek mümkün hâle gelir. İlçedeki işletmelerin çoğunda bakım kaleminin belirli bir haftaya bağlı olması için gerçek bir neden bulunmuyor — alışkanlıkla herkesin durduğu haftaya çekiliyor. Bu alışkanlığı sorguladığımızda tesis hem daha rahat çalışıyor hem daha uygun bir teklif alıyor.",
            },
            {
                baslik: "Her akşam yeniden açılan pencere",
                metin:
                    "Tek vardiya çalışan bir işletmede bakım penceresi mesai bitiminde açılır ve ertesi sabaha kadar sürer. Bu, yılda birkaç kez açılan duruş pencerelerine kıyasla olağanüstü bir esnekliktir ve çoğu zaman değeri fark edilmez. Uygulamada bunun anlamı şudur: bir tavan iş listesi, bölgesel duruş sezonunu beklemeden, sıradan bir haftanın akşamında kapatılabilir. Makine mesai içinde teslim edilir, akşam bloğunda çalışılır ve ertesi gün başka bir adrese geçer. Kiralama süresi kısadır, bedel de buna göre oluşur.",
            },
            {
                baslik: "Biriken kalemleri tek pencereye toplamak",
                metin:
                    "İlçedeki işletmelerde tavan işleri genellikle tek tek gündeme gelir: bir armatür grubu bugün, bir aspirasyon borusu iki ay sonra, bir hava hattı kaçağı yılın başka bir zamanı. Her biri ayrı ayrı çözüldüğünde aynı hazırlık ve aynı teslim organizasyonu defalarca tekrarlanır. Bunun yerine kalemleri bir listede biriktirip tek bir akşam bloğunda kapatmayı öneriyoruz. Listeyi tutmak işletmenin işi, sıralamak bizim; makine geldiğinde noktalar güzergâh sırasına dizilmiş olur ve blok içinde boşa geçen zaman kalmaz.",
            },
            {
                baslik: "Dönemsel işleri mevsim başında bağlamak",
                metin:
                    "İlçedeki tavan iş listelerinin bir bölümü mevsimseldir: sıcaklar öncesi havalandırma bakımı, kış öncesi ısıtma hattı kontrolü, karanlığın erken bastığı döneme girmeden aydınlatma yenileme. Bu kalemlerin ortak özelliği herkeste aynı dönemde gündeme gelmesidir; yani duruş sezonundan bağımsız ikinci bir yığılma dalgası oluştururlar. Bu dalgayı da defterde işaretliyoruz ve mevsim başında bağlanan talepleri sıraya alıyoruz. Mevsim ortasında gelen aynı talep, çoğu zaman bir hafta beklemek zorunda kalıyor.",
            },
            {
                baslik: "Kısa pencerede teslim saatinin belirleyiciliği",
                metin:
                    "Akşam bloğuna dayalı bir planda en kritik değişken makine sınıfı değil, teslim saatidir. Makine bloğun başlangıcında sahada olmalı ve sabah üretim başlamadan önce alanı boşaltmış olmalıdır. Bu iki saati yazılı olarak kesinleştiriyoruz; belirsiz bırakıldığında blok kısalır ve iş listesi yarım kalır. Kent içi teslimatta belirleyici olan mesafe değil trafiktir, bu yüzden sevkiyatı yoğun saatlerin dışına planlıyoruz. Saatler netleştiğinde bir akşam bloğu şaşırtıcı derecede uzun bir çalışma süresi sunuyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş kalemine göre doğru hafta ve pencere",
                paragraflar: [
                    "İlçedeki işletmelerde en sık karşılaştığımız tavan kalemlerini, bunların gerçekten bağlı olduğu takvimi ve önerdiğimiz pencereyi aşağıda topladık. Amaç, bir kalemin gereksiz yere zirve haftaya çekilmesini önlemek.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Takvim bağı", "Önerilen dönem", "Pencere"],
                    satirlar: [
                        ["Tezgâh üstü aydınlatma", "Yok", "Sakin hafta", "Akşam bloğu"],
                        ["Aspirasyon hattı bakımı", "Üretim kirliliğine bağlı", "Sezon sonrası", "Akşam veya hafta sonu"],
                        ["Isıtma hattı kontrolü", "Mevsimsel", "Soğuklar öncesi", "Hafta sonu"],
                        ["Havalandırma ve çatı fanı", "Mevsimsel", "Sıcaklar öncesi", "Hafta sonu"],
                        ["Pano besleme yenileme", "Elektrik kesintisine bağlı", "Planlı kesinti günü", "Tam gün"],
                        ["Acil arıza müdahalesi", "Anlık", "Ertelenemez", "Aynı gün"],
                    ],
                },
            },
            {
                baslik: "Küçük ölçekte takvim payı en güçlü pazarlık aracı",
                paragraflar: [
                    "İlçedeki işletmelerin elinde büyük tesislerde bulunmayan bir koz var: tarih esnekliği. Büyük bir tesis duruş penceresini kaydıramaz, çünkü tüm üretim programı ona bağlıdır. Küçük bir imalathane ise bir tavan işini bir hafta öteye rahatlıkla alabilir. Bu esneklik, teklif masasında doğrudan karşılık buluyor — sakin bir haftaya yerleşen iş, makinenin gün içinde ikinci bir adrese geçmesine imkân verdiği için birim maliyeti düşürüyor.",
                    "Uygulamada bunu şöyle soruyoruz: bu işin yapılması gereken son tarih nedir? Cevap çoğu zaman düşünüldüğünden geniş çıkıyor ve o aralık içinde defterdeki en uygun günü birlikte seçiyoruz. Gerçekten tarihe bağlı işlerde ise esneklik aramıyoruz; bir arıza ya da denetim tarihi söz konusuysa gün sabittir ve plan ona göre kurulur.",
                ],
            },
            {
                baslik: "Gece bloğunun sınırları",
                paragraflar: [
                    "Akşamdan sabaha uzanan blok güçlü bir imkândır ama sınırsız değildir. Birinci sınır aydınlatmadır: çalışma alanının işletme tarafından yeterince aydınlatılmış olması gerekir, sepete bağlanan seyyar bir lambayla yürütülen çalışmayı güvenli saymıyoruz. İkinci sınır personeldir — gece bloğunda işletme tarafında en az bir yetkili kişinin bulunması, hem izin hem güvenlik açısından zorunludur.",
                    "Üçüncü sınır işin niteliğidir. Sıcak iş gerektiren, gürültülü ya da çevreye toz yayan kalemler kent dokusu içinde gece yapılmaya uygun değildir; bunları hafta sonu gündüz bloğuna alıyoruz. Bu üç başlığı talep aşamasında konuşuyoruz, çünkü gece bloğunun uygun olmadığı bir işi akşama planlamak, o bloğun tümüyle boşa gitmesi anlamına geliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Herkesin durduğu haftada bakım yaptırmak zorunda mıyız?",
                cevap:
                    "Çoğu işletme için hayır ve bunu sorgulamanızı öneriyoruz. Bölgesel duruş haftalarında talep tepe yapıyor; küçük ölçekli bir talep o hafta en zor karşılanan talep oluyor. Oysa tek vardiya çalışan bir işletmede bakım penceresi her akşam yeniden açılıyor ve bu pencerenin bölgesel duruş sezonuyla hiçbir bağı yok. Aynı işi sakin bir haftanın akşamına aldığınızda makine seçeneği genişliyor, teslim saati esnekleşiyor ve teklif daha uygun çıkıyor. Zirve haftaya bağlı kalmanız gereken tek durum, işin gerçekten o dönemde durması gereken bir ekipmanla ilgili olması. Bunu birlikte kontrol edip gereksiz yere kalabalığa girmenizi önlüyoruz.",
            },
            {
                soru: "Akşam bloğunda ne kadar iş bitirilebilir?",
                cevap:
                    "Sanılandan çok daha fazla, çünkü blok uzun ve kesintisiz. Mesai bitiminden ertesi sabaha uzanan sürede tezgâh üstü aydınlatma yenileme, aspirasyon borusu bakımı, hava hattı kaçak kontrolü gibi kalemler arka arkaya kapanabiliyor. Belirleyici olan blok uzunluğu değil, hazırlık: makinenin park noktası, çalışma noktalarının altındaki alanların boşaltılması ve malzemenin nokta bazında ayrılması akşamdan önce tamamlandığında blok tam verimle işliyor. Makineyi mesai içinde teslim edip bloğun başlamasını sahada bekletiyoruz, böylece ilk dakikadan itibaren çalışılıyor. Sabah üretim başlamadan alanı boşaltacak şekilde de bitiriyoruz; bu saati baştan yazıyoruz.",
            },
            {
                soru: "Küçük işlerimiz var; her biri için ayrı ayrı mı çağırmalıyız?",
                cevap:
                    "Hayır, biriktirmenizi öneriyoruz. Her çağrının sabit bir organizasyon yükü var: teslimat planlaması, park düzeni, alan hazırlığı, evrak. Bu yük iki saatlik iş için de tam akşam bloğu için de aynı. Kalemleri bir listede topladığınızda tek bir blok içinde hepsi kapanıyor ve birim maliyet belirgin iniyor. Listeyi tutmak sizin işiniz — hangi noktada ne yapılacağını not etmeniz yeterli; sıralamayı biz yapıyoruz, noktaları makinenin izleyeceği güzergâha göre diziyoruz. Aciliyeti olan bir kalem çıkarsa listeyi beklemiyoruz elbette; ama beklemeye gelen kalemleri tek pencereye toplamak ilçede en çok işe yarayan alışkanlık.",
            },
            {
                soru: "Mevsimlik işlerimizi ne zaman bağlamalıyız?",
                cevap:
                    "Mevsim başlamadan önce. Havalandırma bakımı, ısıtma hattı kontrolü ve aydınlatma yenileme gibi kalemler herkeste aynı dönemde gündeme geliyor; yani bölgesel duruş sezonundan bağımsız ikinci bir yığılma dalgası oluşuyor. Bu dalga defterimizde işaretli ve mevsim başında bağlanan talepler sıraya giriyor. Mevsim ortasında gelen aynı talep genellikle bir hafta beklemek zorunda kalıyor — sıkıntılı bir bekleme değil ama gereksiz. Pratik öneri şu: yılın hangi döneminde hangi mevsimlik kalemi yaptırdığınızı bir kez not edin, ertesi yıl aynı takvimi bir ay öne alarak bağlayın. Bu tek değişiklik ilçedeki bekleme sorununu neredeyse tamamen ortadan kaldırıyor.",
            },
            {
                soru: "Gece çalışması için bizden ne isteniyor?",
                cevap:
                    "Üç şey. Birincisi aydınlatma: çalışma alanının işletme tarafından yeterince aydınlatılmış olması gerekiyor; sepete bağlanan seyyar bir lambayla yürütülen çalışmayı güvenli saymıyoruz. İkincisi işletme tarafından bir yetkilinin blok boyunca bulunması — hem çalışma izni hem olası bir durumda karar verecek kişi açısından bu şart. Üçüncüsü işin niteliğinin gece bloğuna uygun olması: sıcak iş gerektiren, gürültülü ya da toz yayan kalemleri kent dokusu içinde gece yapmıyor, hafta sonu gündüz bloğuna alıyoruz. Bu üç başlığı talep aşamasında konuşuyoruz. Uygun olmayan bir işi akşama planlamak, o bloğun tümüyle boşa gitmesi demek oluyor.",
            },
            {
                soru: "İşimizi bir hafta erteleyebiliriz; bu bize ne kazandırır?",
                cevap:
                    "Genellikle üç şey birden. Birincisi seçenek: sakin bir haftada hangi makine sınıfının geleceğini siz belirliyorsunuz, zirve haftada ise ne varsa o geliyor. İkincisi saat esnekliği — makine yalnızca sizin bloğunuza değil, gerekiyorsa ertesi güne de kalabiliyor. Üçüncüsü bedel: sakin bir güne yerleşen iş, makinenin gün içinde başka bir adrese de geçebilmesini mümkün kıldığı için daha uygun fiyatlanıyor. Bu yüzden talep aldığımızda hep aynı soruyu soruyoruz: bu işin yapılması gereken son tarih nedir? Cevap çoğu zaman düşündüğünüzden geniş çıkıyor ve o aralık içinde defterdeki en uygun günü birlikte seçiyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Odunpazarı'nın merkez ilçe niteliği ve kent içi küçük-orta ölçekli üretim dokusu kamuya açık bilgidir; duruş sezonu dışına planlama, kalem biriktirme ve gece bloğu koşulları firma saha pratiğidir. İşletme adı ve rakam kullanılmamıştır.",
    },

    "bolge:tepebasi": {
        h1: "Tepebaşı'nda Sanayi Duruş Sezonu Dışı Manlift Kiralama",
        giris:
            "Tepebaşı, kiralama takvimimizde ilginç bir işlev görür: bu ilçedeki işlerin büyük bölümü sanayi duruş sezonuna bağlı değildir ve tam da bu yüzden, bölgedeki tesisler bakıma girdiğinde ilçedeki talep sakinleşmez, tersine sakin dönemleri doldurur. Kentin idari, teknik ve ticari yapı stokunun ağırlığı burada olduğu için çalışma pencereleri üretim programına değil kullanım yoğunluğuna göre açılır — akşam saatleri, hafta sonları, dönem araları, kapanış sonrası. Bunlar sanayi duruşlarıyla çakışmaz ve çoğu zaman onun tam tersi haftalara düşer. Bir kapasite havuzu açısından bu, dengeleyici bir yüktür: zirve haftada tüm makineler sanayi tarafındayken, ilçedeki işler bir sonraki sakin döneme yerleşir ve yıl boyunca kapasite dengeli kullanılır. Bu sayfada anlattığımız şey bu dengenin nasıl kurulduğu ve ilçedeki bir kurumun kendi takvimini bu akış içinde nereye yerleştirmesi gerektiğidir. Sorumuz burada da tarihle başlıyor, ama bu kez üretim değil kullanım takvimini soruyoruz.",
        maddeler: [
            {
                baslik: "Kullanım takvimi, üretim takvimi değil",
                metin:
                    "Bir yönetim binasında, eğitim yapısında ya da ticari holde çalışma penceresini belirleyen şey bir hattın durması değil, insanların o mekânı ne zaman kullanmadığıdır. Bu, planlamayı sanayi tarafından tümüyle ayırır: pencereler daha sık açılır, daha kısa sürer ve çoğunlukla mesai dışına düşer. Talep aldığımızda ilk sorduğumuz şey bu yüzden yapının kullanım grafiğidir — hangi gün ve saatlerde boşalır, hangi dönemlerde tümüyle kapanır. Bu grafik elimize geçtiğinde takvimdeki yer neredeyse kendiliğinden belirlenir.",
            },
            {
                baslik: "Sanayi zirvesi ile kent sakinliğinin ters döngüsü",
                metin:
                    "Uzun tatil bloklarında sanayi tarafındaki talep tepe yaparken, ilçedeki kurumsal yapıların bir bölümü de aynı dönemde kapanır ve bu, bakım için ideal bir pencere açar. Yani iki talep aynı haftaya düşebilir. Bunu defterde önceden görüyor ve iki taraf arasında bir sıralama kuruyoruz: sanayi duruşları saat ve gün olarak kaydırılamadığı için sabitlenir, kent tarafındaki işler ise dönem içinde daha geniş bir aralığa yayılabildiği için o aralığa yerleştirilir. Kurumlar bu bilgiyi erken aldığında planlarını buna göre kuruyor.",
            },
            {
                baslik: "Dönem aralarının değerlendirilmesi",
                metin:
                    "Eğitim ve araştırma yapılarında yılın en verimli çalışma pencereleri dönem aralarıdır: yapı boşalır, iş kesintisiz ilerler ve alanın uzun süre kapalı kalması sorun yaratmaz. Bu pencerelerin tarihleri önceden bellidir, dolayısıyla erken bağlanabilir. Uygulamada tam tersini görüyoruz — dönem arası başladıktan sonra yapılan aramalar, o aralığın büyük bölümünün zaten dolmuş olduğu bir noktaya denk geliyor. Tarihi mevsim başında bağlayan kurumlar, kesintisiz bir çalışma bloğunu tümüyle kendilerine ayırabiliyor.",
            },
            {
                baslik: "Bölünmüş çalışma: bina kapanmadan ilerlemek",
                metin:
                    "Bazı yapılarda kapanış imkânı hiç yoktur ve pencere beklemek işi süresiz erteler. Bu durumda takvimi güne değil bölgeye göre kuruyoruz: yapı bölümlere ayrılır, her bölüm için ayrı bir çalışma dilimi belirlenir ve iş bölüm bölüm ilerler. Bu, tek seferde bitirilecek bir işi haftaya yaymak demektir; karşılığında kullanım hiç durmaz. Planı yapının işleyişini bilen görevliyle birlikte kuruyoruz, çünkü bölümlerin gerçek yoğunluk saatleri dışarıdan doğru tahmin edilemiyor.",
            },
            {
                baslik: "Kent tarafının kapasiteyi dengeleyen rolü",
                metin:
                    "İlçedeki işler takvim açısından esnek olduğu için havuzdaki boş günleri doldurur ve bu, bize sanayi tarafında zirve haftalarda daha rahat hareket etme imkânı verir. Bu ilişkiyi kurumlara da açıkça anlatıyoruz, çünkü karşılığı doğrudan onlara dönüyor: takvim payı bırakan bir kurum, sakin bir güne yerleştiği için hem istediği makine sınıfını alıyor hem daha uygun bir bedelle çalışıyor. Tarihi kesin olan işlerde ise esneklik aramıyoruz; denetim, tören ya da açılış tarihine bağlı işler sabit gün olarak deftere yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapı tipine göre pencere kaynağı ve bağlama zamanı",
                paragraflar: [
                    "İlçedeki yapı tiplerinde çalışma penceresi farklı kaynaklardan doğar ve bu, talebin ne zaman bağlanması gerektiğini belirler. Aşağıdaki çerçeve, keşif görüşmesinde takvimi kurarken kullandığımız haritadır.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Pencereyi açan", "Bağlama zamanı", "Takvim esnekliği"],
                    satirlar: [
                        ["Eğitim ve araştırma yapısı", "Dönem arası", "Mevsim başında", "Düşük — tarih sabit"],
                        ["Yönetim ve hizmet binası", "Mesai dışı saatler", "Birkaç hafta önce", "Yüksek"],
                        ["Ticari hol ve mağaza", "Kapanış sonrası", "Kısa vadede yeterli", "Yüksek"],
                        ["Teknik tesis", "Hizmet yoğunluğu düşüşü", "Erken", "Orta"],
                        ["Bakım ve servis atölyesi", "Vardiya dışı", "Birkaç gün önce", "Yüksek"],
                        ["Tarihe bağlı iş", "Etkinlik veya denetim", "Tarih bilinir bilinmez", "Yok"],
                    ],
                },
            },
            {
                baslik: "Sabit tarihli işlerde geri sayım planı",
                paragraflar: [
                    "Bir açılış, denetim ya da etkinlik tarihine bağlı işlerde takvim tersten kurulur: bitiş günü sabittir ve her adım oradan geriye doğru yerleştirilir. Makinenin sahada olması gereken gün, hazırlık için gereken süre, olası bir hava ya da erişim aksaklığı için bırakılan pay ve evrak süreci sırayla geri sayıma yazılır. Bu düzen kurulduğunda tarihe yetişmeme riski büyük ölçüde ortadan kalkıyor.",
                    "Geri sayımın en sık atlanan kalemi tampon gündür. İşin tam olarak bitiş gününe planlanması, en küçük aksaklıkta tarihi kaçırmak anlamına gelir. Bir gün tampon bırakmanın maliyeti tek bir günün bedeli; kaçırılmış bir tarihin maliyeti ise genellikle hesaplanamaz. Sabit tarihli işlerde bu payı teklife koyuyoruz ve gerekçesini yazıyoruz.",
                ],
            },
            {
                baslik: "Kurum tarafında karar süresinin takvime etkisi",
                paragraflar: [
                    "Kurumsal ve kamu tarafında planlamayı geciktiren şey çoğunlukla teknik değil, karar süresidir: teklifin onaydan geçmesi, satın alma sürecinin tamamlanması, çalışma izninin çıkması. Bu süreler öngörülebilir olduğu için geri sayıma dâhil edilebilir; sorun, çoğu zaman hiç hesaba katılmamalarıdır. Talep aldığımızda karar sürecinizin ne kadar süreceğini soruyoruz ve rezervasyonu buna göre kuruyoruz.",
                    "Pratik çözüm opsiyondur: karar süreci işlerken hafta defterde kurum adına bekletilir, belirlenen serbest bırakma gününe kadar başka bir talebe verilmez. Bu, onay çıktığında tarihi kaybetmiş olmayı önlüyor. Tekrar eden ihtiyaçlarda ise çerçeve düzen kuruyoruz; süreç bir kez tamamlandıktan sonra sonraki talepler doğrudan takvime yazılıyor ve karar süresi tümüyle devreden çıkıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bizim binamızın bakımı sanayi duruş takvimine bağlı değil; bu bir avantaj mı?",
                cevap:
                    "Evet ve genellikle fark edilmeyen bir avantaj. Bölgedeki üretim tesisleri belirli haftalarda toplu olarak durduğu için o haftalarda kapasite baskısı yükseliyor. Sizin pencereniz üretim programına değil kullanım yoğunluğuna bağlı olduğu için bu haftalarla çakışmak zorunda değil; işi sakin bir döneme yerleştirdiğinizde makine seçeneği geniş oluyor, teslim saati esnekleşiyor ve bedel daha uygun çıkıyor. Bize söylemeniz gereken şey yapının kullanım grafiği: hangi gün ve saatlerde boşaldığı, hangi dönemlerde tümüyle kapandığı. Bu bilgiyle takvimdeki yer neredeyse kendiliğinden belirleniyor ve karşılıklı beklenti sahada değil, planda netleşiyor.",
            },
            {
                soru: "Dönem arasında çalışma yaptırmak istiyoruz; ne zaman bağlamalıyız?",
                cevap:
                    "Dönem arası başlamadan çok önce, tercihen mevsim başında. Bu pencerelerin tarihleri önceden belli olduğu için erken bağlanabilir ve erken bağlandığında kesintisiz bir çalışma bloğunu tümüyle kendinize ayırabilirsiniz. Uygulamada tam tersini görüyoruz: aramalar genellikle dönem arası başladıktan sonra geliyor ve o noktada aralığın büyük bölümü dolmuş oluyor. Kalan günlerle de iş yapılıyor elbette, ama blok parçalanıyor ve aynı iş daha uzun sürüyor. Tarihiniz kurum takviminizde zaten yazılı; onu bize bir yıl önceden bile bildirseniz deftere yazarız. Kesinleşmemiş tarihlerde opsiyon kuruyoruz, hafta sizin adınıza bekliyor.",
            },
            {
                soru: "Binamızı hiç kapatamıyoruz; iş nasıl ilerliyor?",
                cevap:
                    "Takvimi güne göre değil bölgeye göre kuruyoruz. Yapı bölümlere ayrılır, her bölüm için ayrı bir çalışma dilimi belirlenir ve iş bölüm bölüm ilerler; hiçbir anda yapının tamamı devre dışı kalmaz. Bu, tek seferde bitecek bir işi birkaç güne yaymak demektir ve süre uzar — ama kullanım hiç durmaz, ki kapatma imkânı olmayan yapılarda tek gerçekçi yol bu. Bölümlendirmeyi yapının işleyişini bilen görevlinizle birlikte yapıyoruz; bölümlerin gerçek yoğunluk saatleri dışarıdan doğru tahmin edilemiyor. Plan çıktığında hangi bölümde hangi gün çalışılacağını yazılı olarak paylaşıyoruz, böylece kurum içinde de duyurulabiliyor.",
            },
            {
                soru: "Belirli bir tarihe yetişmesi gereken bir işimiz var; nasıl planlıyorsunuz?",
                cevap:
                    "Takvimi tersten kuruyoruz. Bitiş günü sabit kabul edilir ve her adım oradan geriye doğru yerleştirilir: makinenin sahada olması gereken gün, hazırlık süresi, evrak ve izin süreci, bir de aksaklık payı. En çok atlanan kalem bu son madde oluyor — işin tam olarak bitiş gününe planlanması, en küçük aksaklıkta tarihi kaçırmak demek. Bir gün tampon bırakmanın maliyeti tek bir günün bedeli; kaçırılmış bir tarihin maliyeti ise çoğu zaman hesaplanamıyor. Bu payı teklife koyuyor ve gerekçesini yazıyoruz. Tarih kesinse rezervasyonu opsiyonsuz, doğrudan bağlıyoruz ve o gün başka bir işe vermiyoruz.",
            },
            {
                soru: "Onay sürecimiz uzun; tarih elimizden kaçar mı?",
                cevap:
                    "Kaçmaması için opsiyon kuruyoruz. Karar süreciniz işlerken istediğiniz hafta defterde kurum adına ayrılır ve birlikte belirlediğimiz serbest bırakma gününe kadar başka bir talebe verilmez. Bu düzen, onay çıktığında tarihi kaybetmiş olmayı önlüyor ve bize de defterin gerçeği yansıtmasını sağlıyor. Sizden istediğimiz tek şey, karar sürecinizin ne kadar süreceğini gerçekçi söylemeniz; iyimser bir süre verildiğinde opsiyon erken düşüyor ve aynı sorun geri geliyor. Tekrar eden ihtiyaçlarda ise çerçeve düzen kuruyoruz; süreç bir kez tamamlandıktan sonra sonraki talepler doğrudan takvime yazılıyor, onay süresi tümüyle devreden çıkıyor.",
            },
            {
                soru: "Takvim konusunda esnek olursak bize ne dönüyor?",
                cevap:
                    "Üç şey. Birincisi makine seçimi: sakin bir güne yerleşen iş için hangi sınıfın geleceğini siz belirliyorsunuz, sıkışık bir haftada ise uygun olan hangisiyse o geliyor. İkincisi süre — esnek bir güne yerleşen işte makine gerekirse ertesi güne de kalabiliyor, çünkü arkasında bekleyen sabit bir duruş penceresi yok. Üçüncüsü bedel: sakin bir gün, makinenin aynı gün içinde başka bir adrese de geçebilmesini mümkün kıldığı için teklife yansıyor. Buna karşılık işiniz gerçekten tarihe bağlıysa esneklik aramıyoruz; o gün deftere sabit yazılır ve başka bir işe verilmez. Ayrımı talep aşamasında birlikte yapıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tepebaşı'nın kentin idari, teknik ve ticari yapı stokunu yoğun olarak barındırması kamuya açık bilgidir; ters döngü planlaması, geri sayım takvimi ve opsiyon düzeni firma saha pratiğidir. Kurum adı ve rakam kullanılmamıştır.",
    },

    "bolge:eskisehir-2-osb": {
        h1: "Eskişehir 2. OSB'de İlk Duruş Takvimini Kurmak ve Manlift Planlaması",
        giris:
            "Eskişehir'in ikinci organize sanayi alanındaki tesislerin önemli bir bölümü, bakım takvimi henüz oturmamış tesislerdir. Yeni kurulan ya da hâlâ büyüyen bir işletmede duruş takvimi bir gelenek değil, ilk kez yazılan bir belgedir: hangi ekipmanın hangi aralıkla duracağı, pencerenin ne kadar süreceği ve bu pencerelerin yılın hangi haftalarına konulacağı deneyimle değil tahminle belirlenir. Bu, kiralama tarafında iki sonuç doğurur. Birincisi, talep düzensiz gelir — bazen aylarca ses çıkmaz, sonra üst üste birkaç hafta yoğun kullanım açılır. İkincisi, tahminler ilk yıllarda tutmaz; pencereler beklenenden uzun sürer ve devreye alma kuyruğu hesaba katılmamış olur. Bu sayfada anlattığımız şey, bir tesisin ilk duruş takvimini kurarken kiralama tarafından neye bakması gerektiği: pencerenin gerçek uzunluğu nasıl tahmin edilir, ilk yılın hataları nasıl kayda geçirilir ve bir sonraki yılın takvimi bu kayıtla nasıl düzeltilir.",
        maddeler: [
            {
                baslik: "İlk takvimde en sık yapılan hata: pencereyi kısa yazmak",
                metin:
                    "Bakım takvimini ilk kez kuran tesislerde pencere süreleri neredeyse her zaman olması gerekenden kısa yazılır. Nedeni basit: hesap yapılırken yalnızca işin kendisi düşünülür, hazırlık, ekip değişimi ve devreye alma hesaba katılmaz. Sonuç, ilk yılda pencerelerin taşması ve bir bölüm işin ertelenmesidir. Bunu ilk turdan sonra düzeltmenin yolu, gerçekleşen süreleri kayda geçirmektir. Biz kendi tarafımızdan bu kaydı tutuyor ve tesisle paylaşıyoruz; ikinci yılın takvimi tahmine değil ölçüme dayanıyor.",
            },
            {
                baslik: "Montaj dönemi ile bakım dönemi ayrı takvimlerdir",
                metin:
                    "Büyüyen bir tesiste platform ihtiyacı iki farklı kaynaktan gelir ve bunlar aynı deftere yazılmamalıdır. Montaj ve genişleme işleri süreklidir, haftalara yayılır ve takvimi esnektir. Bakım duruşları ise kısa, tarihe sıkı bağlı ve ertelenemezdir. İkisi tek bir kullanım kalemi gibi görüldüğünde, montaj için sahada tutulan makine bir bakım penceresine denk geldiğinde çakışma yaşanır. Talebi baştan iki başlık altında ele alıyor, montaj kullanımını sürekli, duruş kullanımını tarihli olarak deftere ayrı ayrı yazıyoruz.",
            },
            {
                baslik: "Kapasite tahminini büyüme hızına bağlamak",
                metin:
                    "Bir tesis büyüdükçe bakım yükü de büyür, ancak bu artış doğrusal olmaz: yeni bir hat eklendiğinde yalnızca kendi bakım kalemleri değil, ortak altyapının yükü de artar. İlk yılların takvimi bu artışı öngörmediği için ikinci ve üçüncü yıllarda pencereler sıkışmaya başlar. Talebi yıllık olarak konuştuğumuz tesislerde bu eğilimi birlikte izliyoruz; kullanım kayıtları büyüme hızını gösterdiğinde bir sonraki yılın kapasitesini baştan daha geniş ayırıyoruz.",
            },
            {
                baslik: "Yeni tesiste devreye alma kuyruğu daha uzundur",
                metin:
                    "Oturmuş bir tesiste duruş sonrası çıkan iş listesi kısadır; yeni bir hatta ise devreye alma dönemi haftalara yayılabilir ve bu sürede yukarıda yapılacak iş bitmez. İlk duruş takvimini kurarken bu kuyruğun uzunluğu neredeyse her zaman eksik tahmin edilir. Uygulamamız, ilk yıl için kuyruk süresini gerçekçi bir üst sınırla planlamak ve gerçekleşen süreyi kayda geçirmektir. İkinci yıldan itibaren bu sayı elinizde olur ve takvim gerçek verilere göre kurulur.",
            },
            {
                baslik: "Sahada konaklayan makine ile tarihli kiralamanın ayrımı",
                metin:
                    "Yoğun montaj dönemlerinde makinenin tesiste kalması ekonomiktir; ancak sahada konaklayan bir makine havuzdan çıkar ve o süre boyunca başka bir talebe verilemez. Bu ayrımı baştan netleştiriyoruz: konaklama süresi belirli ve yazılıdır, uzatma ihtiyacı doğduğunda defterdeki sonraki taahhütlere bakarak cevap veriyoruz. Belirsiz süreli konaklama isteklerine olumlu cevap vermiyoruz, çünkü o makinenin başka bir tesisin duruş penceresine bağlanmış olma ihtimali her zaman var.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlk duruş takvimini kurarken doldurulacak alanlar",
                paragraflar: [
                    "Bir tesis bakım takvimini ilk kez yazarken kiralama tarafını ilgilendiren alanlar sınırlıdır ama hepsi belirleyicidir. Aşağıdaki çerçeve, takvim çalışmasında birlikte doldurduğumuz alanları ve ilk yıl için önerdiğimiz yaklaşımı gösterir.",
                ],
                tablo: {
                    basliklar: ["Alan", "İlk yıl yaklaşımı", "Kaydedilecek veri", "İkinci yıl düzeltmesi"],
                    satirlar: [
                        ["Pencere uzunluğu", "Geniş tahmin", "Gerçekleşen süre", "Ölçüme göre daraltma"],
                        ["Makine sayısı", "Slot planına göre", "Bekleme süreleri", "Sayının artırılması veya azaltılması"],
                        ["Devreye alma kuyruğu", "Üst sınırdan", "Kullanılan gün", "Gerçek süreye çekme"],
                        ["Montaj kullanımı", "Süreli konaklama", "Toplam saat", "Süre yeniden pazarlığı"],
                        ["Pencere haftası", "Sakin haftaya yerleştirme", "Çakışma sayısı", "Hafta değişimi"],
                        ["Yedek makine", "Kritik pencerede işaretli", "Devreye girme sayısı", "Kapsamın daraltılması"],
                    ],
                },
            },
            {
                baslik: "Duruş haftasını bölge zirvesinden ayırmanın imkânı",
                paragraflar: [
                    "Yeni bir takvim kuran tesisin elinde, yerleşik tesislerde bulunmayan bir serbestlik var: pencereler henüz alışkanlığa dönüşmediği için hangi haftaya konulacakları hâlâ tartışılabilir. Bu, kapasiteyi doğrudan etkileyen bir karardır. Bölgenin toplu olarak durduğu haftalar dışına yerleştirilen bir pencere, makine seçiminde ve yedeklilikte belirgin bir rahatlık sağlar.",
                    "Bu öneriyi takvim çalışmasının başında sunuyoruz, çünkü sonradan değiştirmek çok daha zor oluyor. Üretim programı izin veriyorsa pencereyi bölgesel zirvenin bir iki hafta öncesine ya da sonrasına almak, yıllar boyunca sürecek bir avantaj yaratıyor. İzin vermiyorsa zirve hafta için kapasiteyi baştan ayırıyoruz; önemli olan bu kararın bilinçli verilmesi.",
                ],
            },
            {
                baslik: "Kullanım kaydının ikinci yıla faydası",
                paragraflar: [
                    "İlk yılın en değerli çıktısı yapılan işler değil, tutulan kayıttır. Her pencere için makinenin sahada kaç saat kaldığı, kaç saat fiilen çalıştığı, hangi noktalarda beklendiği ve hangi kalemlerin ertelendiği yazıldığında ikinci yılın takvimi tahmin olmaktan çıkar. Bu kaydı biz kendi tarafımızdan tutuyor ve dönem sonunda tesise veriyoruz; kullanımı tümüyle tesise ait.",
                    "Kaydın en çok işe yaradığı yer makine sayısı kararıdır. İki makinenin gerçekten gerekli olup olmadığı ancak birinci yılın bekleme süreleri görüldüğünde netleşir. Aynı şekilde, tek makineyle yürütülen bir pencerede kaç saatin sıra beklemekle geçtiği de kayıttan okunur. İkinci yılda bu iki sayı elinizdeyse takvim çalışması çok daha kısa sürüyor ve tartışmasız ilerliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bakım takvimimizi ilk kez kuruyoruz; pencereleri ne kadar uzun tutmalıyız?",
                cevap:
                    "İlk yıl için tahmininizden geniş tutmanızı öneriyoruz ve bunun somut bir gerekçesi var: ilk takvimlerde süre hesabı genellikle yalnızca işin kendisi üzerinden yapılıyor, hazırlık, ekip değişimi ve devreye alma hesaba katılmıyor. Sonuç, pencerenin taşması ve bir bölüm işin ertelenmesi oluyor. Geniş yazılmış bir pencerenin maliyeti birkaç saatlik fazla kullanım; dar yazılmış bir pencerenin maliyeti ise ertelenmiş bir bakım kalemi ve onun bir sonraki döneme kadar taşıdığı risk. İlk turda gerçekleşen süreleri kaydediyoruz ve dönem sonunda size veriyoruz; ikinci yılın takvimi tahmine değil ölçüme dayanıyor, o zaman pencereleri rahatlıkla daraltabiliyorsunuz.",
            },
            {
                soru: "Montaj işlerimiz sürüyor, bir de bakım duruşumuz var; ikisini birlikte mi planlamalıyız?",
                cevap:
                    "Ayrı planlamanızı öneriyoruz, çünkü karakterleri tümüyle farklı. Montaj kullanımı sürekli, haftalara yayılan ve takvim açısından esnek bir kalem; bakım duruşu ise kısa, tarihe sıkı bağlı ve ertelenemez. İkisi tek bir kullanım gibi görüldüğünde şu olur: montaj için sahada tutulan makine bir bakım penceresine denk gelir ve iki iş aynı makineyi bekler. Biz talebi baştan iki başlık altında deftere yazıyoruz — montaj süreli konaklama olarak, duruş ise tarihli rezervasyon olarak. Böylece montaj döneminde bir duruş açıldığında ikinci makine planlanmış oluyor ve sahada çakışma yaşanmıyor. Fiyatlama da iki kalem için ayrı ayrı yapılıyor.",
            },
            {
                soru: "Duruş haftamızı hangi döneme koymalıyız?",
                cevap:
                    "Üretim programınız izin veriyorsa bölgenin toplu olarak durduğu haftaların dışına. Yeni bir takvim kuran tesisin elinde yerleşik tesislerde olmayan bir serbestlik var: pencereler henüz alışkanlığa dönüşmediği için hangi haftaya konulacakları hâlâ tartışılabilir. Zirve hafta dışına yerleştirilen bir pencere yıllar boyunca sürecek bir avantaj sağlıyor — makine sınıfını siz seçiyorsunuz, ikinci makine eklemek mümkün oluyor ve yedek bulundurmak gerçekçi hâle geliyor. Üretim programınız buna izin vermiyorsa sorun değil, zirve hafta için kapasiteyi baştan ayırıyoruz. Önemli olan bu kararın bilinçli verilmesi; sonradan hafta değiştirmek çok daha zor oluyor.",
            },
            {
                soru: "Kaç makineye ihtiyacımız olacağını nasıl bileceğiz?",
                cevap:
                    "İlk yıl slot planıyla tahmin ediyor, ikinci yıl kayda göre kesinleştiriyoruz. Slot planı şudur: pencereyi saat dilimlerine bölüyor, hangi ekibin hangi dilimde ve hangi bölgede yukarı çıkacağını tabloya yazıyoruz. Ekipler farklı dilimlerde çalışıyorsa tek makine sıraya göre dolaşarak yetiyor; aynı dilimde ve hacmin iki ucundalarsa ikinci makine gerekiyor. Bu, ilk yıl için makul bir tahmin veriyor. Asıl kesinlik pencere kapandıktan sonra geliyor: makinenin kaç saat fiilen çalıştığı, kaç saat sıra beklendiği kayda geçiyor. İkinci yılda bu iki sayıyla makine sayısı tartışmasız belirleniyor — çoğu tesiste sayı sanılandan az çıkıyor.",
            },
            {
                soru: "Makineyi montaj boyunca sahamızda tutabilir miyiz?",
                cevap:
                    "Tutabilirsiniz, ancak süre belirli ve yazılı olmak zorunda. Sahada konaklayan bir makine havuzdan çıkıyor ve o süre boyunca başka bir tesisin duruş penceresine verilemiyor; bu yüzden belirsiz süreli konaklama isteklerine olumlu cevap vermiyoruz. Süre baştan yazıldığında planlama iki taraf için de netleşiyor: siz makinenin ne zamana kadar sizde olduğunu biliyorsunuz, biz de sonrasını planlayabiliyoruz. Uzatma ihtiyacı doğduğunda defterdeki taahhütlere bakıp cevap veriyoruz — çoğu zaman mümkün oluyor, ama sonraki adres bir duruş penceresine bağlıysa olmuyor ve bunu erken söylüyoruz. Konaklama süresince park ve şarj noktasının belirlenmiş olmasını, periyodik bakımın yerinde yapılabilmesini istiyoruz.",
            },
            {
                soru: "Tesisimiz büyüyor; kapasiteyi nasıl önden ayarlıyorsunuz?",
                cevap:
                    "Kullanım kaydınızı yıllık olarak izleyerek. Bakım yükü tesis büyüdükçe artıyor ama doğrusal değil: yeni bir hat eklendiğinde kendi kalemlerinin yanında ortak altyapının yükü de büyüyor. İlk yılların takvimi bu artışı öngörmediği için ikinci ve üçüncü yılda pencereler sıkışmaya başlıyor. Yıllık konuştuğumuz tesislerde kullanım kayıtları bu eğilimi gösteriyor ve bir sonraki yılın kapasitesini baştan geniş ayırabiliyoruz. Sizden istediğimiz, yeni bir hat ya da hacim planladığınızda bunu bakım takvimi konuşmasına dâhil etmeniz. Yatırım kararını bilmemiz gerekmiyor, yalnızca kabaca ne zaman devreye gireceğini bilmemiz yetiyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir'in ikinci organize sanayi alanının genç ve büyümekte olan tesis dokusu kamuya açık bilgidir; ilk duruş takvimi kurma, kullanım kaydı ve konaklama süresi düzeni firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:bozuyuk-osb-bilecik-cevre-ili": {
        h1: "Bozüyük OSB'de Duruş Sezonu Kapasitesi ve Manlift Kiralama (Çevre İl)",
        giris:
            "Bozüyük Organize Sanayi Bölgesi, iki şehirli kapasite havuzumuzun güney ayağıdır ve bu ayağın kendine özgü bir takvim karakteri vardır: buradaki büyük tesislerin bakım pencereleri uzun çevrimli ekipmanlara bağlı olduğu için seyrek açılır, açıldığında ise günlerce sürer ve kaydırılması neredeyse imkânsızdır. Kuzey uçtaki tesislerin daha sık ve daha kısa pencereleriyle karşılaştırıldığında ortaya iki farklı talep profili çıkar — biri uzun blok, diğeri parçalı kullanım. Bir kiralama defterinde bu ikisinin yan yana durması aslında iyi haberdir: uzun bloklar takvimde önceden yer tuttuğu için aralarındaki günler kuzeydeki kısa taleplere açılabilir ve makineler iki uç arasında dolaşır. Bu sayfada anlattığımız şey bu akışın güney ucundan görünüşü: bir bloğun deftere nasıl yazıldığı, blok içinde kaç makinenin gerçekten gerektiği, bloğun uzaması hâlinde ne olduğu ve çevre il olmanın planlı işlerde neden bir dezavantaj yaratmadığı.",
        maddeler: [
            {
                baslik: "Uzun blok: kaydırılamayan pencerenin planlaması",
                metin:
                    "Uzun çevrimli ekipmana bağlı bir bakım penceresi, tarihi belirlenen değil ortaya çıkan bir penceredir; üretim planı, ekipmanın kendi çevrimi ve enerji maliyeti birlikte tarihi dayatır. Bu tip pencerelerde kaydırma pazarlığı yapmıyoruz, çünkü karşılığı yok. Yaptığımız şey bloğu defterde erken sabitlemek ve etrafındaki günleri buna göre kurgulamak. Blok bir kez yazıldığında o tarihe makine ayrılır ve başka bir talebe verilmez — çevre il olması bu kuralı hiçbir şekilde değiştirmez.",
            },
            {
                baslik: "Blok içinde makine sayısını iş listesi belirler",
                metin:
                    "Günlerce süren bir pencerede tek makineyle çalışmak her zaman yanlış değildir; belirleyici olan iş listesinin dağılımıdır. Noktalar tesisin farklı bölümlerine yayılmışsa ve ekipler paralel çalışacaksa ikinci makine gerekir; noktalar tek bölümde toplanmışsa tek makine bloğun tamamını taşır. Bu kararı listeyi görmeden vermiyoruz. Blok uzun olduğu için hata payı da büyük — gereksiz ikinci makine günlerce boş bekler, eksik makine ise ekipleri sıraya sokar.",
            },
            {
                baslik: "Blok uzarsa ne oluyor",
                metin:
                    "Uzun pencerelerin beklenenden uzaması sık görülür ve bunu baştan konuşuyoruz. Makinenin bloktan sonra bağlı olduğu bir iş varsa uzatma mümkün olmayabilir; bu yüzden rezervasyon kurarken bloğun arkasındaki günün durumunu söylüyoruz. Uzama ihtimali yüksek pencerelerde makineyi baştan daha uzun süreye bağlamayı öneriyoruz — birkaç ek günün bedeli, pencerenin ortasında makinesiz kalmanın karşılığıyla kıyaslanamaz. Bu, çevre il işlerinde özellikle geçerli çünkü ikinci bir sevkiyat mesafeye bağlı zaman kaybı yaratıyor.",
            },
            {
                baslik: "Blok aralarının kuzey talebine açılması",
                metin:
                    "Güneydeki uzun bloklar takvimde önceden yer tuttuğu için aralarındaki günler görünür hâle gelir ve bu günler kuzeydeki kısa taleplere açılabilir. Havuzun verimini sağlayan mekanizma budur: makine bloğun bitiminde geri çekilir, birkaç gün kuzey uçta çalışır ve bir sonraki bloğa yetişecek şekilde geri döner. Bu akışın kurulabilmesi için tek gereken, blokların erken bildirilmesi. Geç bildirilen bir blok, arasındaki günlerin planlanmasını da imkânsız kılıyor.",
            },
            {
                baslik: "Çevre il olmanın planlı işlerde etkisi yok",
                metin:
                    "Planlı bir işte adres değil takvim belirleyicidir. Tarih önceden bilindiğinde makine o gün orada olur ve hazırlığı, teslim düzeni, evrakı yerel bir işle birebir aynıdır; bu konuda gevşeme kabul etmiyoruz. Fark yalnızca plansız durumlarda ortaya çıkar: sahada makine yokken doğan bir talep, yolun süresini bekler ve şehir içi hızında bir müdahale sözü vermiyoruz. Bu ayrımı baştan söylemeyi tercih ediyoruz, çünkü tutulamayacak bir taahhüt yazmak diğer taahhütlerin de güvenilirliğini düşürüyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Güney ucunda talep tipine göre defter düzeni",
                paragraflar: [
                    "Bölgeden gelen talepleri süre ve tarih bağına göre ayırıyoruz. Aşağıdaki çerçeve, bir talebin defterde nasıl yer aldığını ve buna bağlı olarak hangi güvencelerin verilebildiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Talep tipi", "Tarih bağı", "Defterdeki yeri", "Verilebilen güvence"],
                    satirlar: [
                        ["Uzun revizyon bloğu", "Kaydırılamaz", "Sabit blok", "Tarih ve makine sınıfı"],
                        ["Kısa planlı duruş", "Sınırlı esneklik", "Bloklar arası", "Gün ve saat aralığı"],
                        ["Ekipman değişimi projesi", "Proje takvimi", "Süreli konaklama", "Süre ve uzatma koşulu"],
                        ["Dönemsel kontrol", "Esnek", "Sakin haftaya kaydırılır", "Hafta aralığı"],
                        ["Ölçüm ve denetim erişimi", "Randevuya bağlı", "Tekil sevkiyat", "Randevu saati"],
                        ["Plansız arıza", "Anlık", "Boşluğa yerleştirilir", "Gerçekçi varış saati"],
                    ],
                },
            },
            {
                baslik: "Bloğu erken bildirmenin havuz üzerindeki etkisi",
                paragraflar: [
                    "Bir uzun bloğun erken bildirilmesi yalnızca o tesise değil, hattın tamamına yarar. Blok deftere yazıldığı anda öncesindeki ve sonrasındaki günler planlanabilir hâle gelir; makineler bu boşluklara yerleştirilir ve kuzey uçtaki kısa talepler karşılanır. Geç bildirilen bir blok ise iki yönlü zarar üretir — hem o tesis için kapasite bulmak zorlaşır hem de çevresindeki günler boşa gider.",
                    "Bu yüzden bloğun tarihini kesinleşmeden önce bile paylaşmanızı istiyoruz. Kesinleşmemiş bir tarih için opsiyon kuruyoruz: hafta sizin adınıza ayrılır, belirlenen güne kadar teyit gelmezse serbest kalır. Bu düzen ilk bakışta bize yük gibi görünse de gerçekte tersini yapıyor; defterin gerçeği yansıtması, kapasite planlamasının tek şartı.",
                ],
            },
            {
                baslik: "Uzun pencerede yedeklilik gerçekten anlamlı",
                paragraflar: [
                    "Kısa bir duruşta makine arızası genellikle bir kalemin ertelenmesiyle sonuçlanır; günlerce süren bir blokta ise arıza, bloğun geri kalanını riske atar ve bu blok yakın zamanda tekrar açılmaz. Bu yüzden uzun pencerelerde yedek makine işaretlemesini gerçekten öneriyoruz. İşaretlenen makine havuzda kalır ama o hafta başka bir uzun işe bağlanmaz; devreye girmediğinde yalnızca küçük bir hazır bulundurma kalemi doğar.",
                    "İkinci yedeklilik katmanı mesafeyle ilgilidir. Çevre ilde bir arızanın çözümü, kuzey uçtakine göre yol süresi kadar uzar. Bunu küçültmek için bloklara giden makinelerde teslimat öncesi kontrolü geniş tutuyor, sınırda görünen bir makineyi yola çıkarmıyoruz. Uzun bloklarda ayrıca şarj düzenini ve gece park noktasını baştan belirliyoruz; blok ortasında çözülmeye çalışılan bu iki başlık günlük kayıp üretiyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Revizyon bloğumuz günlerce sürüyor; makineyi ne kadar önceden bağlamalıyız?",
                cevap:
                    "Tarih ortaya çıktığı anda, kesinleşmesini beklemeden. Uzun çevrimli ekipmana bağlı pencerelerin tarihi belirlenmez, ortaya çıkar — üretim planı, ekipmanın çevrimi ve maliyet birlikte dayatır. Bu yüzden kaydırma pazarlığı yapmıyoruz, blok deftere sabit olarak yazılıyor ve o tarihe makine ayrılıyor. Tarih henüz kesin değilse opsiyon kuruyoruz: hafta sizin adınıza ayrılır, birlikte belirlediğimiz güne kadar teyit gelmezse serbest kalır. Erken bildirimin ikinci faydası bloğun çevresindeki günlerin de planlanabilir hâle gelmesi; bu, hattın tamamındaki kapasiteyi rahatlatıyor ve dolaylı olarak size de dönüyor.",
            },
            {
                soru: "Blok boyunca kaç makine tutmalıyız?",
                cevap:
                    "İş listesini görmeden sayı vermiyoruz, çünkü uzun bloklarda hata payı da uzun. Belirleyici olan noktaların dağılımı: kalemler tesisin farklı bölümlerine yayılmışsa ve ekipler paralel çalışacaksa ikinci makine gerekiyor; noktalar tek bölümde toplanmışsa tek makine bloğun tamamını taşıyor. Listeyi aldığımızda noktaları güzergâh sırasına diziyor, her bölümde geçecek süreyi kabaca hesaplıyor ve iki senaryonun maliyetini yan yana gösteriyoruz. Gereksiz ikinci makine günlerce boş bekler, eksik makine ise ekipleri sıraya sokar — ikisi de pahalı. Kararı liste üzerinden birlikte veriyoruz, tahminle değil.",
            },
            {
                soru: "Blok beklenenden uzarsa makine bizde kalabilir mi?",
                cevap:
                    "Çoğu zaman kalabiliyor ama bunu baştan garanti etmiyoruz ve nedenini açıkça söylüyoruz: makinenin bloktan sonra bağlı olduğu bir iş olabilir. Rezervasyon kurarken bloğun arkasındaki günün durumunu bildiriyoruz — arkası boşsa uzatma tek telefonla çözülüyor, arkası başka bir tesisin duruş penceresine bağlıysa uzatma mümkün olmuyor. Uzama ihtimalini yüksek gördüğünüz pencerelerde makineyi baştan daha uzun süreye bağlamanızı öneriyoruz. Birkaç ek günün bedeli, bloğun ortasında makinesiz kalmanın karşılığıyla kıyaslanamaz; çevre ilde ikinci bir sevkiyat ayrıca yol süresi kadar zaman kaybı demek.",
            },
            {
                soru: "Çevre il olmamız hizmet kalitesini etkiliyor mu?",
                cevap:
                    "Planlı işlerde hayır, plansız işlerde evet — ve bu ayrımı süslemeden söylüyoruz. Tarihi önceden bilinen bir işte makine o gün orada oluyor; hazırlığı, teslim düzeni ve evrakı yerel bir işle birebir aynı, bu konuda gevşeme kabul etmiyoruz. Fark plansız durumda ortaya çıkıyor: sahada makine yokken doğan acil bir talep yolun süresini bekliyor ve şehir içi hızında bir müdahale sözü vermiyoruz, çünkü tutamayacağımız bir taahhüt yazmak diğer sözlerimizin de değerini düşürür. Acil çağrılarda yaptığımız şey önce uzaktan değerlendirme yapıp doğru sınıftaki makineyle yola çıkmak ve size gerçekçi bir varış saati söylemek.",
            },
            {
                soru: "Uzun pencerede yedek makine tutmak mantıklı mı?",
                cevap:
                    "Uzun pencerelerde gerçekten mantıklı ve bunu kısa duruşlardan ayırıyoruz. Birkaç saatlik bir duruşta arıza, bir kalemin ertelenmesiyle sonuçlanır; günlerce süren bir blokta ise bloğun geri kalanını riske atar ve o blok yakın zamanda tekrar açılmaz. Yedek işaretlemesinde makine havuzda kalır ama o hafta başka bir uzun işe bağlanmaz; devreye girmezse yalnızca küçük bir hazır bulundurma kalemi doğar. Buna ek olarak bloklara giden makinelerde teslimat öncesi kontrolü geniş tutuyor, sınırda görünen bir makineyi yola çıkarmıyoruz. Şarj düzeni ve gece park noktası da baştan belirleniyor — blok ortasında çözülmeye çalışılan bu iki başlık gün kaybı üretiyor.",
            },
            {
                soru: "Blok dışında kalan kısa işlerimiz için de aynı hattı kullanabilir miyiz?",
                cevap:
                    "Kullanabilirsiniz ve havuz düzeninin asıl faydası burada ortaya çıkıyor. Uzun bloklar defterde önceden yer tuttuğu için aralarındaki günler görünür oluyor; bu günlere hem güneydeki kısa talepler hem kuzey uçtaki işler yerleşiyor. Kısa işlerinizi bu boşluklara yazdığımızda makine zaten bölgede oluyor ve ayrı bir sevkiyat organizasyonu gerekmiyor. Sizden istediğimiz, kısa işler için birkaç günlük takvim payı bırakmanız; gün sabitlendiğinde boşluğa yerleştirme imkânı kalmıyor. Tarihe bağlı kısa işlerde ise elbette gün sabit yazılıyor, sadece bedeli farklı oluşuyor ve bunu teklifte açıkça gösteriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün Bilecik'teki sanayi ağırlığı, uzun çevrimli ekipmanların bakım pencerelerini belirlemesi ve ilçenin Eskişehir'e karayolu yakınlığı kamuya açık bilgidir; blok rezervasyonu, yedek işaretleme ve havuz akışı firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:polatli-ankara-cevre-ili": {
        h1: "Polatlı'da Takvim Çakışmaları ve Duruş Dönemi Manlift Kiralama (Çevre İl)",
        giris:
            "Polatlı, kapasite defterimizde üçüncü bir eksen olarak durur ve buradaki takvim, Eskişehir-Bozüyük hattındakinden farklı bir mantıkla kurulur. İlçedeki talebin bir bölümü sanayi duruş sezonuna bağlıdır, ancak önemli bir bölümü tarımsal işleme ve depolama ritmine bağlıdır — yani takvimi belirleyen şey bir üretim programı değil, ürünün kendi mevsimidir. Bu iki takvim yılın bazı dönemlerinde birbirinden uzak durur, bazı dönemlerinde ise üst üste biner ve o haftalar ilçede kapasitenin en zorlandığı haftalar olur. Bir kiralama defteri açısından bu, üç eksenin aynı anda yönetilmesi demektir: kuzeydeki sanayi zirvesi, güneydeki uzun bloklar ve doğudaki mevsimsel dalga. Bu sayfada anlattığımız şey ilçedeki bir tesisin bu üçlü akış içinde kendi penceresini nasıl güvenceye alacağı — hangi tarihlerin çakışma riski taşıdığı, hangi işlerin mevsim dışına taşınabileceği ve eksende yapılan geçişlerin planlamaya nasıl dâhil edildiği.",
        maddeler: [
            {
                baslik: "İki takvimin üst üste bindiği haftalar",
                metin:
                    "İlçede bakım talebi iki ayrı kaynaktan gelir: üretim programına bağlı sanayi duruşları ve ürünün mevsimine bağlı işleme-depolama pencereleri. Bu ikisi yılın bazı dönemlerinde aynı haftalara düşer ve o haftalarda ilçedeki talep, iki eksenin toplamı kadar olur. Defterde bu haftaları önceden işaretliyoruz ve talep aldığımızda hangi dönemde olduğumuzu açıkça söylüyoruz. Çakışma haftasına denk gelen bir iş için erken bağlama, ilçedeki en belirleyici tek etken.",
            },
            {
                baslik: "Mevsime bağlı pencerenin sertliği",
                metin:
                    "Ürünün mevsimine bağlı bir bakım penceresi, üretim programına bağlı bir pencereden daha katıdır: kaydırmak mümkün değildir, çünkü kararı veren şey takvim değil ürünün kendisidir. Dolum öncesi ve boşalma sonrası dönemler bu yapıların doğal bakım aralığıdır ve bu aralık kaçırıldığında bir sonraki fırsat bir yıl sonrasına düşebilir. Bu tip pencerelerde rezervasyonu mevsim başında bağlamayı şart koşmuyoruz ama açıkça öneriyoruz; geç kalan talepler ilçede en sık geri çevrilen taleplerdir.",
            },
            {
                baslik: "Eksende yapılan geçişlerin planlamaya katılması",
                metin:
                    "İlçe, Eskişehir ile başkent arasındaki karayolu hattının üzerinde bulunduğu için düzenli geçişlerimizin doğal durağıdır. Bunun planlamadaki karşılığı, takvim payı bırakan işlerin bu geçişlere bağlanabilmesidir: makine zaten yolda olduğu için ayrı bir sevkiyat organizasyonu doğmaz. Geçiş günlerini defterde tutuyor ve esnek talepleri bu günlere yerleştiriyoruz. Tarihe sabit bağlı işlerde ise geçiş beklenmez, tekil sevkiyat yapılır ve bedeli teklifte ayrı satır olarak görünür.",
            },
            {
                baslik: "Üç eksenin aynı anda dolduğu nadir haftalar",
                metin:
                    "Yılın birkaç haftasında kuzeydeki sanayi zirvesi, güneydeki uzun bloklar ve ilçedeki mevsimsel dalga aynı döneme denk gelir. Bu haftalarda havuzda kaydırılabilecek makine kalmaz ve verilecek dürüst cevap kapasitenin olmadığıdır. Bunu önceden görebildiğimiz için talepleri erken uyarıyoruz: söz konusu haftalara denk gelen bir işi ya erken bağlamak ya da birkaç gün kaydırmak gerekir. Geç gelen taleplere o hafta için gerçekçi bir alternatif sunamıyoruz ve bunu peşinen söylüyoruz.",
            },
            {
                baslik: "Bekleyen işi mevsim dışına taşımanın karşılığı",
                metin:
                    "İlçedeki tavan iş listelerinin bir bölümü mevsime bağlı değildir: organize sanayi hollerindeki aydınlatma, havalandırma ve tesisat kalemleri yıl boyu planlanabilir. Bu kalemleri çakışma haftalarının dışına taşımak, hem daha rahat bir çalışma hem daha uygun bir bedel demektir. Talep aldığımızda bu ayrımı ilk adımda yapıyoruz — işiniz gerçekten mevsime bağlı mı, yoksa alışkanlıkla mı o döneme çekiliyor? Cevap çoğu zaman ikincisi çıkıyor ve takvimde belirgin bir rahatlama sağlıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçede takvim kaynağına göre planlama",
                paragraflar: [
                    "İlçeden gelen talepleri, pencereyi belirleyen kaynağa göre ayırıyoruz. Aşağıdaki çerçeve, bir talebin ne kadar esnek olduğunu ve ne zaman bağlanması gerektiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Talep kaynağı", "Pencereyi belirleyen", "Esneklik", "Bağlama zamanı"],
                    satirlar: [
                        ["Mevsimsel işleme tesisi", "Ürün takvimi", "Yok", "Mevsim başında"],
                        ["Depolama yapısı", "Dolum ve boşalma", "Çok düşük", "Bir dönem önceden"],
                        ["OSB üretim holü", "Üretim programı", "Orta", "Birkaç hafta önce"],
                        ["Bakım atölyesi", "Kendi programı", "Yüksek", "Kısa vadede yeterli"],
                        ["Kurumsal tesis", "Kullanım yoğunluğu", "Yüksek", "Esnek"],
                        ["Arıza müdahalesi", "Anlık", "Yok", "Aynı gün, mesafeye bağlı"],
                    ],
                },
            },
            {
                baslik: "Çakışma haftasını yönetmenin yolları",
                paragraflar: [
                    "İki takvimin üst üste bindiği haftalarda kullandığımız araçlar sınırlı ama etkili. Birincisi erken bağlamadır — o hafta için kapasite, talebin geliş sırasına göre dağıtılır ve sonradan gelen bir talep için makine üretmek mümkün değildir. İkincisi iş listesinin ayrıştırılmasıdır: mevsime bağlı olmayan kalemler hafta dışına çıkarıldığında ihtiyaç duyulan makine sayısı ve süre küçülür.",
                    "Üçüncü araç, geçiş günlerinin kullanılmasıdır. Eksen üzerinde zaten yapılan bir geçişe eklenen kısa bir iş, çakışma haftasında bile karşılanabiliyor, çünkü ayrı bir sevkiyat organizasyonu gerektirmiyor. Bunun tek şartı işin kısa olması ve saat aralığının esnek bırakılması. Üç araç birlikte kullanıldığında çakışma haftalarında bile ilçeden gelen taleplerin önemli bölümü karşılanabiliyor.",
                ],
            },
            {
                baslik: "Mevsimsel yığılmayı bir yıl önceden düzeltmek",
                paragraflar: [
                    "İlçedeki mevsimsel taleplerin en pratik çözümü bir yıl geriden gelir: geçen yıl hangi hafta hangi işi yaptırdığınızı not edip, bu yıl aynı talebi bir dönem öne alarak bağlamak. Mevsimsel pencereler tekrar ettiği için bu düzeltme bir kez yapıldığında kalıcı oluyor ve her yıl aynı sıkışmayı yaşamaktan kurtarıyor.",
                    "Bunu tek başınıza yapmanız gerekmiyor; kullanım kaydınızı biz de tutuyoruz ve dönem sonunda paylaşıyoruz. Kayıtta hangi işin hangi hafta yapıldığı, ne kadar sürdüğü ve o hafta kapasitenin ne durumda olduğu yer alır. Bu üç bilgi yan yana geldiğinde bir sonraki yılın takvimi kendiliğinden düzeliyor ve rezervasyon konuşması tartışmasız ilerliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mevsime bağlı bir penceremiz var; ne zaman bağlamalıyız?",
                cevap:
                    "Mevsim başında, hatta bir önceki dönemde. Ürünün mevsimine bağlı bir bakım penceresi, üretim programına bağlı bir pencereden daha katı: kaydırılamıyor, çünkü kararı veren şey takvim değil ürünün kendisi. Dolum öncesi ve boşalma sonrası dönemler bu yapıların doğal bakım aralığı ve bu aralık kaçırıldığında bir sonraki fırsat çoğu zaman bir yıl sonrasına düşüyor. İlçede en sık geri çevirmek zorunda kaldığımız talepler, tam da bu tip pencerelerin son anında gelen talepler. Tarihiniz kesin değilse opsiyon kuruyoruz; hafta sizin adınıza bekliyor ve belirlediğimiz güne kadar teyit gelmezse serbest kalıyor.",
            },
            {
                soru: "Talebimiz çakışma haftasına denk geliyor; şansımız ne?",
                cevap:
                    "Erken geldiyseniz yüksek, geç geldiyseniz sınırlı. Çakışma haftalarında kapasite talebin geliş sırasına göre dağılıyor ve sonradan makine üretmek mümkün değil. Buna karşılık elimizde üç araç var. Birincisi iş listesini ayrıştırmak: mevsime bağlı olmayan kalemler hafta dışına çıkarıldığında ihtiyaç duyulan süre ve makine sayısı küçülüyor, kalan iş sığabiliyor. İkincisi pencereyi birkaç gün öne ya da arkaya almak, mümkünse. Üçüncüsü, eksende zaten yapılan bir geçişe kısa bir iş eklemek — bu, ayrı sevkiyat gerektirmediği için çakışma haftasında bile çalışıyor. Hangisinin sizde uygulanabilir olduğunu talep aşamasında birlikte belirliyoruz.",
            },
            {
                soru: "İşimiz gerçekten o döneme bağlı mı, nasıl anlarız?",
                cevap:
                    "Sorduğumuz ilk soru bu oluyor ve cevap çoğu zaman şaşırtıyor. İlçedeki tavan iş listelerinin önemli bölümü aslında mevsime bağlı değil: organize sanayi hollerindeki aydınlatma, havalandırma, tesisat ve kablo kalemleri yıl boyu planlanabilir. Bunlar alışkanlıkla yoğun döneme çekiliyor, çünkü bakım işleri toptan gündeme alınıyor. Ayrımı yapmanın pratik yolu şu: bu kalem yapılmazsa üretim ya da depolama doğrudan etkilenir mi? Cevap hayırsa iş mevsim dışına taşınabilir. Taşındığında hem daha rahat çalışılıyor hem teklif daha uygun çıkıyor, çünkü sakin bir güne yerleşen iş makinenin gün içinde başka bir adrese de geçmesini mümkün kılıyor.",
            },
            {
                soru: "Eskişehir'den geldiğiniz için gecikme yaşar mıyız?",
                cevap:
                    "Planlı işlerde hayır. İlçe, iki şehir arasındaki karayolu hattının üzerinde olduğu için düzenli geçişlerimizin doğal durağı; tarihi önceden bilinen bir işte makine o gün orada oluyor ve hazırlığı yerel bir işle aynı. Takvim payı bırakan işlerde ayrıca avantaj var: iş zaten yapılan bir geçişe bağlandığında ayrı bir sevkiyat organizasyonu doğmuyor. Fark plansız durumlarda çıkıyor — sahada makine yokken doğan acil bir talep yolun süresini bekliyor ve gerçekçi süre çoğu zaman ertesi gün oluyor. Aynı gün mümkün olan durumlar yaşanıyor ama bunu peşinen taahhüt etmiyoruz; tutamayacağımız bir söz, yazdığımız diğer taahhütlerin de değerini düşürüyor.",
            },
            {
                soru: "Her yıl aynı dönemde sıkışıyoruz; bunu nasıl kırarız?",
                cevap:
                    "Takvimi bir yıl geriden düzelterek. Geçen yıl hangi işi hangi hafta yaptırdığınızı not edip, bu yıl aynı talebi bir dönem öne alarak bağlamak yeterli oluyor. Mevsimsel pencereler tekrar ettiği için bu düzeltme bir kez yapıldığında kalıcı hâle geliyor. Tek başınıza yapmanız da gerekmiyor: kullanım kaydınızı biz tutuyoruz ve dönem sonunda paylaşıyoruz. Kayıtta hangi işin hangi hafta yapıldığı, ne kadar sürdüğü ve o hafta kapasitenin ne durumda olduğu yer alıyor. Bu üç bilgi yan yana geldiğinde bir sonraki yılın takvimi kendiliğinden düzeliyor ve rezervasyon konuşması tartışmasız ilerliyor.",
            },
            {
                soru: "Kısa bir işimiz için ayrı sevkiyat mı yapılacak?",
                cevap:
                    "Tarihiniz esnekse gerekmiyor. Eksen üzerinde düzenli geçişlerimiz var ve bu geçiş günlerini defterde tutuyoruz; kısa ve saat aralığı esnek işleri bu günlere yerleştirdiğimizde makine zaten bölgede oluyor, ayrı bir organizasyon doğmuyor. Sizden istediğimiz tek şey, işin hangi tarih aralığında yapılabileceğini söylemeniz — tek bir güne sabitlenmiş kısa işlerde geçiş beklenmiyor, tekil sevkiyat yapılıyor ve bedeli teklifte ayrı satır olarak görünüyor. Bunu saklamıyoruz, çünkü kısa işlerde bu kalem toplamın içinde belirgin biçimde göze çarpıyor. Birkaç günlük aralık verebiliyorsanız fark doğrudan size dönüyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Polatlı'nın Ankara'nın batı ucunda ve iki şehri bağlayan karayolu hattı üzerinde bulunması ile tarımsal işleme ve depolama tesislerinin ilçedeki varlığı kamuya açık bilgidir; üç eksenli kapasite defteri, çakışma haftası yönetimi ve geçiş günü planlaması firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },
    "bolge:kutahya-cevre-ili": {
        h1: "Kütahya Seramik Ekseninde Planlı Duruş İçin Manlift Takvimi",
        giris:
            "Kütahya çevre ili için planlı duruş yönetiminde asıl sorun bir manliftin Eskişehir’den yola çıkması değil, seramik eksenindeki tesislerin benzer bakım dönemlerinde aynı erişim kapasitesini istemesidir. Kardeş sayfa taşıma zincirini, eklemli-teleskopik seçimi ve sahaya kabulü ayrıntılandırır; burada odağı takvim eşleştirmesine çeviriyoruz. Belirli bir tesisin fırını, hattı veya üretim kapasitesi hakkında varsayım yapmadan şu ortak gerçeği yönetiriz: sürekli çalışan üretim düzeninde normal zamanda açılamayan üst kot işleri, ilan edilen duruş penceresine yığılır. Makine adedi ve sınıfı, duruş haftası geldiğinde telefonda aranarak değil; kapsam dondurma, saha hazırlık kontrolü ve yeniden devreye alma sırası üzerinden önceden bağlanır. Aynı makineyi birbiriyle çakışan iki tesise vaat etmeyiz. Talep defterinde tarih kadar esneklik aralığı, kritik hedefler, yedek sınıf ve kapanış saati görünür. Böylece değerli duruş süresi teslim, ölçüm veya malzeme beklemekle tükenmez; Kütahya işi bölgesel kapasite havuzunun doğrulanmış bir slotu hâline gelir.",
        maddeler: [
            {
                baslik: "Duruş niyetini rezervasyona çevirmek",
                metin:
                    "Takvimde yalnız ‘bakım yapılacak’ notu bulunması kapasite ayırmak için yeterli değildir. İşletme önce olası pencereyi, ihtiyaç duyulan makine ailelerini, vardiya biçimini ve kritik iş gruplarını bildirir. Bu kayıt geçici kapasite görünümü oluşturur. Tarih yaklaştığında kapsam, saha ölçüleri ve sorumlu ekipler doğrulanır; ardından rezervasyon kesinleşir. Belirsiz talebi kesin kabul edip makineyi başka işlerden çekmek de, hazırlığı tamamlanmış talebi son güne bırakmak da bölgesel havuzu bozar. Bu nedenle teyit eşiği sözleşme ve plan notunda görünür. Tarih kayarsa yalnız başlangıç değil, ardındaki diğer slotlar ve geri alma planı birlikte değerlendirilir.",
            },
            {
                baslik: "Seramik ekseninde çakışan duruş haftaları",
                metin:
                    "Bölgesel üretim yapısında benzer tatil, dönem kapanışı veya bakım tercihleri talebi aynı haftalara toplayabilir. Belirli tesis adına kapasite iddiası kurmadan, rezervasyon defterini bu çakışma üzerinden yönetiriz. Her talep için vazgeçilmez sınıf, kabul edilebilir yedek sınıf ve tarihin kayabileceği aralık ayrı tutulur. Esnek iş, kritik duruşun makinesini tüketmez; kritik iş de yalnız yüksekliği benziyor diye uygun olmayan üniteye aktarılmaz. Bir haftanın doluluk durumu müşteriye açıkça bildirilir. Kapasite kalmadığında gerçek dışı söz vermek yerine alternatif pencere veya doğrulanmış başka çözüm sunulur. Bu şeffaflık, duruş günü iki işletmenin aynı makineyi beklemesini önler.",
            },
            {
                baslik: "Hazırlık kapısı geçilmeden slot başlatmamak",
                metin:
                    "Makine ayrılmış olsa bile saha hazır değilse duruş slotu üretken değildir. Başlangıçtan önce hedef listesi ve erişim ölçüleri dondurulur, giriş ile indirme alanı açılır, enerji izolasyonu sorumluları belirlenir, malzeme çalışma hücrelerine dağıtılır ve vardiya ekipleri atanır. Toz, sıcak yüzey veya başka proses koşulu varsa işletmenin risk değerlendirmesi üzerinden ek izinler tamamlanır; sektör adına ezber varsayım yapılmaz. Hazırlık kontrolündeki eksik, sorumlusu ve kapanış tarihiyle yazılır. Kritik eksik kapanmamışsa makineyi sahaya erken bırakmak çözüm değildir. Slotun başlaması, yalnız takvim saatine değil bu hazırlık kapısının yazılı kabulüne bağlanır.",
            },
            {
                baslik: "Duruş içinde makine saatini iş paketlerine bölmek",
                metin:
                    "Duruş listesi bölüm adlarına göre değil, aynı konum ve aynı izolasyon altında kapanabilecek iş paketlerine ayrılır. Bir makine bir hücrede çalışırken sonraki hücrenin malzemesi, bariyeri ve yetkilisi hazır bekler. Paket tamamlanınca alet-parça sayımı yapılır, açık bağlantı bırakılmaz ve teknik sorumlu alanı teslim alır. Son dakika çıkan hedef mevcut iznin otomatik devamı sayılmaz; erişim ve süre etkisi görülür. Kritik yol üzerindeki kalemler önce, duruş dışında güvenle yapılabilecek işler sonra planlanır. Böylece makine, yüksek öncelikli işi beklerken düşük öncelikli bir hedefte kilitlenmez ve kapanış saati öngörülebilir kalır.",
            },
            {
                baslik: "Yeniden devreye alma dalgasında kapasiteyi serbest bırakmak",
                metin:
                    "Bakım ekibinin son işi bitirmesi, manlift slotunun hemen kapandığı anlamına gelmez. Koruyucuların yerine takılması, alet ve malzemenin çıkarılması, izolasyonların yetkili kişi tarafından kaldırılması ve kontrollü test sırasında erişim ihtiyacı doğup doğmayacağı görülmelidir. Makine, üzerinde anlaşılmış test desteği penceresi tamamlanana kadar güvenli parkta tutulabilir; fakat belirsiz bir ihtimal için günlerce rezerve bırakılmaz. Kapanış kriteri önceden yazılır. Testte yeni sorun çıkarsa ek süre, ardındaki kapasite taahhütleri görülerek onaylanır. İade kararı verildiğinde durum kaydı ve yükleme alanı hazırlanır; ünite bölgesel havuza zamanında geri döner.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya duruş slotunun karar kapıları",
                paragraflar: [
                    "Duruş rezervasyonu tek tarih satırı değildir. Aşağıdaki tablo, kapasitenin hangi kanıtla bir sonraki aşamaya geçtiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Ana karar", "Gerekli kanıt", "Kapasite durumu"],
                    satirlar: [
                        ["Niyet kaydı", "Olası pencere ve sınıf", "İlk kapsam, esneklik", "Geçici görünüm"],
                        ["Kapsam dondurma", "İş paketi ve ölçüler", "Hedef listesi, saha verisi", "Sınıf doğrulandı"],
                        ["Hazırlık kapısı", "Saha başlayabilir mi", "İzin, malzeme, güzergâh", "Slot kesin"],
                        ["Duruş yürütme", "Paket sırası", "Vardiya ve hücre kaydı", "Makine sahada"],
                        ["Test desteği", "Erişim hâlâ gerekli mi", "Kontrollü devreye alma", "Kısa bekleme"],
                        ["Kapanış", "Havuza dönüş", "Teknik teslim ve iade", "Kapasite serbest"],
                    ],
                },
            },
            {
                baslik: "Bölgesel kapasite defterinde esneklik",
                paragraflar: [
                    "Her tesisin talebini kesin tarih, kabul edilebilir tarih aralığı, vazgeçilmez makine özelliği ve yedek çözümle kaydederiz. Esneklik, hazırlıksız işi sürekli ertelemek değildir; teknik olarak aynı sonucu veren komşu pencereye geçebilme yeteneğidir. Duruşu başka üretim kararına bağlı olan işletme, kesinleşme tarihini baştan bildirir. Böylece bekleme durumundaki talep, kesinleşmiş bir slotu görünmez biçimde bloke etmez. Aynı dönemde Kütahya ve Eskişehir-Bozüyük hattındaki talepler tek havuzda görülür.",
                    "Çakışma ortaya çıktığında önce kritik yol ve teknik uygunluk değerlendirilir. Yalnız günlük ücret veya arama sırası üzerinden karar verilmez. Belirli sınıfı zorunlu kılan erişim işi, daha geniş alternatif havuzu olan talepten ayrılır. Uygun müşteriye tarih kaydırma veya doğrulanmış yedek sınıf sunulur. Her değişiklik yazılı onaylanır; bir tesisten alınan makinenin diğerine yetişeceği varsayımı, kapanış ve taşıma payı görülmeden yapılmaz.",
                ],
            },
            {
                baslik: "Duruş sonu öğrenimini sonraki takvime taşımak",
                paragraflar: [
                    "Program kapanınca yalnız kira süresi değil, hazırlık kalitesi de kaydedilir. Hangi paket zamanında açıldı, hangi izin veya malzeme bekletti, seçilen sınıf hangi hedeflerde yeterli kaldı ve test desteği gerçekten kullanıldı soruları yanıtlanır. Bu kayıt belirli tesis verisini kamuya taşımak için değil, aynı müşterinin sonraki planını daha doğru kurmak içindir. Tahmin ile gerçekleşen akış arasındaki fark, gelecek rezervasyonun teyit eşiğini ve slot uzunluğunu geliştirir.",
                    "Bir sonraki dönemde eski kayıt başlangıç noktasıdır, değişmez gerçek değildir. Saha yerleşimi, üretim takvimi ve iş listesi yeniden doğrulanır. Tekrarlanan gecikme varsa sorumlu hazırlık kalemi daha erken tarihe çekilir; kullanılmayan bekleme payı azaltılır. Böylece her duruş, bölgesel yoğunluğu artıran belirsiz bir talep olmaktan çıkar ve kanıtı bulunan, ölçülü bir kapasite ihtiyacına dönüşür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kütahya’daki planlı duruş için ne zaman rezervasyon yapmalıyız?",
                cevap:
                    "Duruş niyeti ortaya çıktığında geçici kaydı açmak, tarih ve kapsam kesinleştiğinde rezervasyonu bağlamak gerekir. Özellikle bölgedeki işletmelerin benzer dönemleri tercih ettiği haftalarda son ana kalan talep uygun sınıf bulamayabilir. İlk görüşmede olası pencere, esneklik, kritik hedefler ve makine ailesi kaydedilir. Kesinleştirme için erişim ölçüleri, iş paketleri, saha hazırlığı ve sorumlu ekipler gerekir. Tarihin değişme ihtimali saklanmaz; teyit eşiği baştan yazılır. Böylece ne belirsiz bir talep kapasiteyi gereksiz bloke eder ne de hazırlığı tamamlanmış iş görünmez kalır.",
            },
            {
                soru: "Seramik tesisi olduğumuzu söylemek doğru makineyi ayırmaya yeter mi?",
                cevap:
                    "Yeterli değildir. Bölgesel seramik bağlamı duruş takvimindeki yoğunluğu anlamaya yardım eder, fakat makine sınıfını belirlemez. Hedef kotu, yatay engel, park zemini, kapı-koridor, kapalı veya açık ortam, sepet yükü ve çalışma şekli gerekir. Isı, toz veya proses yakınlığı varsa işletmenin kendi risk değerlendirmesi paylaşılır; tesis düzeni varsayılmaz. Bu veriler erişim diyagramıyla karşılaştırılır. A7’nin görevi uygun kapasiteyi doğru haftaya ayırmaktır, ancak ayrılacak kapasite önce teknik olarak doğrulanmalıdır. Yanlış sınıfı erken rezerve etmek, doğru sınıfı geç aramak kadar zararlıdır.",
            },
            {
                soru: "Duruş tarihi kayarsa ayırdığımız makineyi koruyabilir miyiz?",
                cevap:
                    "Yeni pencerenin kapasite defterindeki diğer kesin taahhütlerle çakışmaması halinde kaydırma yapılabilir; otomatik garanti verilmez. Değişiklik öğrenildiğinde başlangıç, sahada kalış, test desteği ve iade birlikte güncellenir. Makine henüz çıkmadıysa yeni slot aranır. Sahadaysa güvenli park ve bekleme koşulu yazılı ele alınır; yalnız rezervasyonu korumak için kullanılmayan ünite belirsiz süre tutulmaz. Tarih esnekliğinin ilk kayıtta belirtilmesi seçenekleri artırır. Son dakika değişikliğinde gerçek durumu açık söylemek, iki tesise aynı kapasiteyi vaat etmekten daha güvenlidir.",
            },
            {
                soru: "Duruş sırasında yeni çıkan işleri aynı listeye ekleyebilir miyiz?",
                cevap:
                    "Eklenebilir, fakat önce kritik yol, erişim ve kapanış saatine etkisi değerlendirilir. Yeni hedef mevcut makineyle ve aynı izolasyon altında güvenle kapanabiliyorsa iş paketine yazılır. Başka sınıf, yeni izin veya uzun hazırlık istiyorsa mevcut slotu bozmak yerine ayrı programa alınabilir. Son dakika işi sırf makine sahada diye otomatik öncelik kazanmaz. Önceden dondurulmuş kritik paketler tamamlanmadan düşük öncelikli ek işe geçmeyiz. Değişiklik vardiya kaydına girer ve test ile iade planı yeniden görülür; sözlü eklemeler kapasite defterini görünmez biçimde uzatmaz.",
            },
            {
                soru: "Test aşamasında makineyi ne kadar bekletmek gerekir?",
                cevap:
                    "Sabit süre söylemek yerine test planındaki gerçekten erişim gerektiren adımları belirleriz. Koruyucular kapandıktan ve hat kontrollü devreye alındıktan sonra üst kotta ayar veya doğrulama ihtimali bulunuyorsa kısa bir destek penceresi rezervasyona eklenir. Bu pencerenin kapanış kriteri ve yetkili karar kişisi önceden yazılır. Belirsiz ihtimal için üniteyi sınırsız tutmayız; yeni sorun çıkarsa ek süre, ardındaki taahhütlerle birlikte değerlendirilir. İhtiyaç kalmadığında teknik teslim ve iade hazırlığı hemen başlar, böylece makine bölgesel havuza zamanında döner.",
            },
            {
                soru: "Aynı yoğun haftada birden fazla makine ayırabilir misiniz?",
                cevap:
                    "Teknik ihtiyaç ve kapasite yeterliyse mümkündür; ancak talep erken doğrulanmalıdır. Çoklu makine planında her ünitenin ayrı iş paketi, operatörü veya yetkili kullanıcısı, park-şarj alanı ve çalışma hücresi bulunur. Aynı tavan altında daha çok makine kullanmak otomatik hız kazandırmaz; hareket zarfları ve ekipler kesişiyorsa sıra gerekir. Rezervasyon defterinde vazgeçilmez ünite ile yedek seçenek ayrılır. Yoğun hafta dolduğunda gerçek dışı kapasite yaratmayız; alternatif pencere veya doğrulanmış çözüm sunarız. Kesin söz, yalnız saha hazırlığı ve kaynak planı birlikte kapandığında verilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Kütahya’nın seramik ve çini sanayi ekseni uygulama belgesinde verilen kamuya açık genel bağlamdır; duruş rezervasyonu, kapasite defteri, hazırlık kapısı, iş paketi ve yeniden devreye alma yönetimi sektör geneli planlama pratiğidir. Özel tesis, kapasite, hat düzeni, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:beylikova-osb": {
        h1: "Beylikova OSB’de Yeni Tesis Devreye Alma Duruşları İçin Manlift",
        giris:
            "Beylikova OSB’de yeni tesis veya yeni hat devreye alma döneminde ‘duruş’ sözcüğü yalnız çalışan üretimin kapatılması anlamına gelmez. Montajın belirli bir aşamasında enerji verilir, test yapılır, eksikler görülür ve güvenli düzeltme için sistem yeniden durdurulur. Bu kısa ve tekrarlanan pencereler, klasik yıllık bakım duruşundan farklı kapasite yönetimi ister. Kardeş içerik hat kurulumu boyunca eklemli-teleskopik seçimi, çok ekipli çalışma ve zemin dönüşümünü anlatır. Burada ise manliftin test ile düzeltme çevrimleri arasında nasıl slotlandığına, ne zaman hazır bekleyeceğine ve hangi kabul kanıtıyla serbest bırakılacağına odaklanıyoruz. Belirli firma, sektör veya üretim kapasitesi varsayılmadan devreye alma kapıları kurulur: mekanik tamamlanma, enerjisiz kontrol, kontrollü enerji verme, deneme ve eksik kapatma. Her kapıda erişim listesi yeniden dondurulur. Son dakika çıkan iş yeni izinle değerlendirilir; makinenin sahada bulunması güvenli çalışma izni yerine geçmez.",
        maddeler: [
            {
                baslik: "Mekanik tamamlanma öncesi erişim listesini dondurmak",
                metin:
                    "Devreye alma başlamadan kablo tavası, kanal, sensör, aydınlatma, boru askısı ve üst bağlantı gibi erişim isteyen hedefler sistem veya alan bazında listelenir. Hangi noktanın montaj işi, hangisinin testte açılabilecek düzeltme olduğu ayrılır. Zemin, giriş, engel ve çalışma kotu güncel yerleşime göre ölçülür; şantiye başındaki fotoğrafa güvenilmez. Manlift sınıfı ile sahaya giriş tarihi bu liste üzerinden kesinleşir. Tamamlanmamış temel iş için üniteyi günlerce bekletmek yerine teslim kapısı belirlenir. İlgili alan temizlenmiş, güzergâh açılmış, malzeme ve sorumlu ekip hazır olduğunda slot başlar. Eksik hedef yazılı biçimde sonraki çevrime taşınır.",
            },
            {
                baslik: "Enerjisiz kontrol penceresinde toplu kapanış",
                metin:
                    "Sisteme enerji verilmeden önce üst kotta görsel bağlantı, kablo sabitleme, koruyucu, etiket ve erişilemeyen birleşim kontrolleri topluca yapılabilir. Bu pencere, sonradan enerji izolasyonu açıp kapatma tekrarını azaltır. Manlift aynı güvenli park konumundan ulaşabildiği hedefleri paket halinde kapatır; farklı ekipler alet ve malzemesini önceden hazırlar. Askılı yük veya başka platform aynı hücreye girmez. Her paket sonunda alet-parça sayımı ve sorumlu kabulü yapılır. Enerjisiz dönem aceleye getirilirse testte görülen eksikler daha pahalı duruşlar yaratır; buna karşılık kontrol listesini sınırsız büyütmek enerji verme takvimini gereksiz geciktirir.",
            },
            {
                baslik: "Test sırasında hazır bekleme ile aktif kullanım ayrımı",
                metin:
                    "Kontrollü test sırasında manlift her an sepette personel taşımaz. Ünite belirlenmiş güvenli park noktasında hazır tutulabilir; test sonucu üst kotta ayar gerektirirse sistem tekrar güvenli duruma alınır ve yeni iş izni açılır. Üretim veya test hareketi sürerken sepete çıkıp hızlı düzeltme yapılmaz. Hazır bekleme süresi, aktif kullanım süresinden plan notunda ayrılır ve ne zaman sona ereceği tanımlanır. Test ekibi sorunları öncelik ve erişim türüne göre toplar; her küçük bulguda ayrı ayrı makine çağırmak yerine güvenli düzeltme penceresi açar. Böylece kapasite gerçekten gerektiği anda kullanılır.",
            },
            {
                baslik: "Eksik kapatma duruşunda değişiklik kontrolü",
                metin:
                    "Test sonucu çıkan eksik, ilk montaj listesinin otomatik uzantısı değildir. Hedefin enerjisi, beklenmedik hareket kaynağı, alt çalışma alanı, erişim geometrisi ve gerekli malzeme tekrar değerlendirilir. Aynı sınıf yeterliyse iş yeni paket olarak slotlanır; başka makine gerekiyorsa kapasite defterinde ayrı talep açılır. Geçici çözüm kalıcı kabul maddesi gibi bırakılmaz. Değişiklik kaydı hangi çizim, etiket veya koruyucunun güncellendiğini sorumlu ekipte tutar. Manlift işi tamamlandıktan sonra alan test ekibine teslim edilir; yeniden enerji verme kararı platform operatörüne değil devreye alma yetkilisine aittir.",
            },
            {
                baslik: "Kabul denemesi sonrasında kapasiteyi bırakmak",
                metin:
                    "Son denemede üst erişim ihtiyacının bittiği yazılı olarak doğrulanmadan makineyi erken çekmek, küçük bir tekrar için yeni sevkiyat doğurabilir. Buna karşılık belirsiz olasılık nedeniyle üniteyi sahada süresiz tutmak da sonraki taahhütleri bozar. Kapanış kapısı bu ikisini dengeler: açık eksik listesi gözden geçirilir, erişim isteyen maddeler kapanır veya sonraki programa aktarılır, alet-malzemeler çıkarılır ve makinenin durumu kaydedilir. Saha sorumlusu iade alanını açar. Öğrenilen park konumları ve erişim kısıtları gelecekteki planlı bakım hafızasına alınır, ancak tesis düzeni değişebileceği için otomatik model garantisi oluşturmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Devreye alma çevriminde manlift slotları",
                paragraflar: [
                    "Yeni tesislerde erişim talebi tek uzun kiralama olarak değil, kanıtla açılan aşamalar olarak yönetilir. Tablo her aşamanın başlangıç ve kapanış mantığını özetler.",
                ],
                tablo: {
                    basliklar: ["Kapı", "Manlift görevi", "Başlama kanıtı", "Kapanış"],
                    satirlar: [
                        ["Mekanik tamamlanma", "Üst montaj hedefleri", "Güncel liste ve açık rota", "Paket teknik teslimde"],
                        ["Enerjisiz kontrol", "Bağlantı ve koruyucu turu", "Sistem güvenli durumda", "Kontrol listesi kapalı"],
                        ["Kontrollü enerji verme", "Güvenli parkta hazır bekleme", "Test planı ve sorumlu", "Bulgular toplandı"],
                        ["Düzeltme duruşu", "Yeni hedefe erişim", "Yeni izolasyon ve izin", "Eksik kaydı kapalı"],
                        ["Kabul denemesi", "Gerekirse son destek", "Öncelikli eksikler tamam", "Erişim ihtiyacı bitti"],
                        ["İade", "Makineyi havuza bırakma", "Saha ve durum teslimi", "Slot serbest"],
                    ],
                },
            },
            {
                baslik: "Hazır bekleme kapasitesini sınırlandırmak",
                paragraflar: [
                    "Test programında erişim gerekip gerekmeyeceği tamamen belirsizse bütün süreyi aktif kiralama gibi planlamak kapasiteyi verimsiz bağlar. Önce hangi testlerin üst kotta ayar doğurabileceği belirlenir. Manliftin hazır bulunacağı pencere, park alanı, çağrı sorumlusu ve sisteme yeniden giriş koşulu yazılır. Pencere dışında çıkan bulgular bir sonraki düzeltme duruşuna toplanır. Kritik güvenlik sorunu elbette ayrı değerlendirilir; fakat her küçük gözlem anlık çalışma emrine çevrilmez.",
                    "Hazır bekleyen makine yetkisiz kullanılmaz. Test alanındaki hareket, enerji ve malzeme akışı sepet çalışmasına uygun duruma dönmeden operatör çağrılmaz. Bekleme uzarsa ardındaki rezervasyonlar görülür ve yeni karar yazılı alınır. Gerekiyorsa kapasite başka üniteyle değiştirilir, ancak yeni sınıfın erişim ve zemin uygunluğu doğrulanır. Bu yöntem hem devreye alma ekibine gerçek destek sunar hem bölgesel havuzu belirsiz taleplerle kilitlemez.",
                ],
            },
            {
                baslik: "Devreye almadan bakım hafızasına geçiş",
                paragraflar: [
                    "Her düzeltme paketinde kullanılan park noktası, hedef geometrisi, enerji izolasyon sınırı, geçiş engeli ve uygun makine ailesi kaydedilir. Tekrarlanan erişim noktaları gelecekteki periyodik bakım listesine işlenir. Geçici iskele, açık şantiye zemini veya henüz kurulmamış ekipman sayesinde kullanılan bir rota kalıcı kabul edilmez. Tesis normal işletme düzenine geçtiğinde stok, koruyucu ve trafik koşulları değişebilir; bakım keşfi bu farkı kontrol eder.",
                    "Kapanış toplantısında manliftin beklediği süre, aktif paketler, gecikme nedenleri ve yeniden çağrı gerektiren açık maddeler görülür. Bir sonraki devreye alma veya planlı duruş için kapsam dondurma tarihi buna göre ayarlanır. Kullanılmayan hazır bekleme azaltılır, geç hazırlanan izin daha erken açılır. Bu öğrenim belirli üretim kapasitesi varsaymadan süreci geliştirir ve yeni tesisin ilk bakım döngüsünü daha öngörülebilir hâle getirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Devreye alma boyunca manlift sürekli sahada kalmalı mı?",
                cevap:
                    "Her proje için zorunlu değildir. Üst kot düzeltmesinin yoğun olacağı belirli test pencerelerinde güvenli parkta hazır bekleme planlanabilir; diğer dönemlerde eksikler toplu düzeltme duruşuna alınabilir. Karar test adımlarına, erişim ihtimaline, yeniden sevkiyat etkisine ve bölgesel kapasite durumuna göre verilir. Hazır bekleme ile aktif kullanım ayrı kaydedilir ve kapanış ölçütü yazılır. Makinenin sahada olması, test sürerken izinsiz müdahale yapılabileceği anlamına gelmez. Sistem güvenli duruma alınır, yeni izolasyon ve çalışma izni açılır, ardından sepet yükselir.",
            },
            {
                soru: "Test sırasında çıkan her eksik hemen düzeltilebilir mi?",
                cevap:
                    "Hayır. Önce bulgunun güvenlik ve devreye alma açısından önceliği belirlenir, sonra erişim ile enerji koşulu değerlendirilir. Test hareketi sürerken makine veya hat üstüne sepetle yaklaşılmaz. Eksikler uygun bir güvenli duruş penceresinde paketlenir; sistem izole edilir, alt alan ayrılır, malzeme hazırlanır ve yeni izin açılır. Aynı manlift yeterli değilse başka sınıf talebi doğar. Acil görünmesi üretici çalışma zarfını aşma veya geçici bağlantıyı kalıcı bırakma gerekçesi değildir. Yapılan düzeltme test ekibine kayıtla teslim edilir.",
            },
            {
                soru: "Yeni tesis tamamlanmadan hangi ölçülere güvenebiliriz?",
                cevap:
                    "Güncel saha ölçüsü ve onaylı yerleşim birlikte kullanılmalıdır. Projedeki kapı, kot veya park alanı sahada geçici malzeme, yeni koruyucu veya tamamlanmamış zemin nedeniyle farklı olabilir. Her erişim paketi öncesinde girişten hedefe rota, en dar geçiş, yatay engel, hedef kotu, taban ve bom hareket alanı yeniden fotoğraflanır. Zemin tamamlanmadıysa taşıma uygunluğu yetkili saha değerlendirmesiyle doğrulanır. Önceki çevrimde kullanılan makine güçlü bir referanstır, fakat düzen değişmişse otomatik garanti değildir. Sınırdaki ölçüde yeniden keşif yapılır.",
            },
            {
                soru: "Düzeltme duruşları için kapasiteyi nasıl rezerve ederiz?",
                cevap:
                    "Ana test takvimine olası düzeltme pencereleri eklenir, fakat kesin slot bulgu listesi ve hazırlık kapısıyla bağlanır. Gerekli makine ailesi, vardiya, erişim alanı ve tahmini paket kapsamı görünür tutulur. Bulgular beklenenden azsa kapasite erken serbest bırakılır; fazlaysa uzatma, ardındaki kesin rezervasyonlar görülerek değerlendirilir. Belirsizliği saklamak yerine olası aralığı baştan paylaşmak daha fazla seçenek sağlar. Son dakika sınıf değişikliği gerekiyorsa uygunluk yeniden doğrulanır. İki ayrı projeye aynı makineyi aynı pencere için kesin vaat etmeyiz.",
            },
            {
                soru: "Enerjisiz kontrolde bütün üst işleri kapatmak neden önemli?",
                cevap:
                    "Enerji verilmeden yapılan erişim, beklenmedik hareket ve tekrar izolasyon yükünü azaltır. Bağlantı, sabitleme, etiket, koruyucu ve görsel kontrol gibi hazır işler aynı hücrelerde topluca kapanırsa testte küçük eksikler için sistemi tekrar tekrar durdurma ihtiyacı düşer. Bununla birlikte liste sınırsız büyütülmez; enerji verme için kritik olan kapsam dondurulur. Her paket sonunda alet-parça sayımı ve sorumlu kabulü yapılır. Enerjisiz olması zemini, başka ekipleri veya askılı yükü güvenli kılmaz; manlift çalışma zarfı yine fiziksel olarak ayrılır.",
            },
            {
                soru: "Kabul denemesinden sonra makineyi ne zaman iade edersiniz?",
                cevap:
                    "Test sorumlusu üst erişim gerektiren açık maddelerin kapandığını veya ayrı programa aktarıldığını yazılı teyit ettiğinde kapanış başlar. Alet ve malzeme çıkarılır, çalışma izinleri kapatılır, makine temizlenir ve görünür durumu kaydedilir. İndirme ya da yükleme alanı diğer saha trafiğinden ayrılır. Belirsiz bir olasılık için ünite tutulmaz; fakat kabul planında tanımlı son destek adımı tamamlanmadan erken çekilmez. Yeni bulgu çıkarsa uzatma otomatik değildir, kapasite defteri ve teknik uygunlukla birlikte onaylanır. İade edilen ünite sonraki taahhüt için yeniden kontrol edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Beylikova OSB’nin gelişen organize sanayi alanı bağlamı uygulama belgesinde verilen kamuya açık genel bilgidir; mekanik tamamlanma, enerjisiz kontrol, test, düzeltme duruşu, kabul ve kapasite slotu yönetimi sektör geneli devreye alma pratiğidir. Özel firma, sektör, tesis, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },

    // ── HİZMET SAYFALARI (2026-08-14) ────────────────────────────────────
    // Merceğin sabiti: PLANLI DURUŞ DÖNEMİ ve bölgesel kapasite yönetimi.
    // İki sayfa bilinçli olarak en detaylı yazıldı — operatörlü-platform-
    // kiralama ve çok-noktalı-rota-bakım-platformu — çünkü ikisi de duruş
    // takvimine göre çoklu fabrika/rota planlamasının doğrudan karşılığı.
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Duruş Penceresinde Sepetli Örümcek Platform Kiralama",
        giris:
            "Bir duruş listesinin çoğu kalemi standart makaslı ya da eklemli platformla çözülür, ama her listede birkaç nokta bu iki sınıfa da uymaz: iki boru hattı arasındaki dar aralık, bir kazanın gövdesiyle duvar arasında kalan dar şerit, sahanlığın altına sarkan bir vana grubu. Duruş penceresi zaten kısa olduğu için bu tip noktalara ikinci bir sevkiyatla, ikinci bir makineyle gitmek pencereyi gereksiz uzatır. Sepetli örümcek platform bu listeler için ayrı bir kalem olarak duruyor — katlanır ayak düzeni dar geçitten geçer, hedefte açılıp standart makinenin giremediği açıyı yakalar. Bölgedeki duruş dönemlerinde bu sınıfı çoğunlukla tek başına değil, ana filoyla birlikte planlıyoruz: geniş alan standart platformla, listenin dar-kalan birkaç kalemi örümcek platformla aynı pencere içinde bitiriliyor. İki makineyi ayrı günlere yaymak yerine aynı duruş haftasında art arda çalıştırmak, pencerenin toplam süresini kısaltan asıl fark oluyor.",
        maddeler: [
            {
                baslik: "Duruş listesinin 'sığmayan' kalemleri",
                metin:
                    "Bir bakım listesi hazırlanırken çoğu kalem hangi makineyle yapılacağı belli olacak şekilde yazılır, ama listenin sonunda genellikle birkaç satır 'erişim zor' notuyla kalır. Bunlar genellikle boru arası, ekipman gövdesi ile duvar arasındaki şerit ya da sahanlık altı gibi noktalardır. Duruş takvimini hazırlarken bu satırları ayrı işaretliyor ve baştan örümcek platforma ayırıyoruz; pencere açıldığında bu kalemler için ayrıca makine aranmıyor, ana filoyla birlikte sahada hazır bulunuyor.",
            },
            {
                baslik: "Aynı pencerede iki sınıfın art arda çalışması",
                metin:
                    "Standart makaslı platform geniş ve açık alanları tararken örümcek platform aynı gün içinde dar noktaları tamamlar. İki makineyi aynı duruş penceresine, farklı ekiplere paylaştırarak veriyoruz — biri açık alanda ilerlerken diğeri dar geçitte çalışıyor ve pencere sonunda iki iş de bitmiş oluyor. Ayrı günlere yayılan bir plana kıyasla bu, duruş süresinin kısalması demek; bölgedeki duruş haftalarının kısıtlı olduğu düşünüldüğünde bu fark bazen tek başına ikinci bir makineyi haklı çıkarıyor.",
            },
            {
                baslik: "Zemin ve ayak yayılımı duruş sahasında",
                metin:
                    "Fabrika içi duruş sahaları genellikle beton zeminlidir ama duruş döneminde zemin üstünde geçici malzeme, hortum ve kablo yığını da bulunur. Örümcek platformun dört ayağı, tekerlekli makinenin aksine yükü noktasal dağıtır; bu yüzden ayak açılacak noktanın duruş öncesinde temizlenmesi gerekiyor. Duruş planına bu temizliği bir hazırlık kalemi olarak yazıyoruz, çünkü pencere içinde malzeme kaldırmakla uğraşmak zaman kaybettiriyor.",
            },
            {
                baslik: "Enerjisiz bölgede dar geçiş",
                metin:
                    "Duruş penceresinde enerjisi kesilen ekipman grupları arasında kalan dar şeritler, örümcek platformun en sık kullanıldığı noktalardır. Enerji kesintisi başladığı andan itibaren bu şeritlere erişim güvenli hâle gelir ve makine hazır beklediği için kayıpsız devreye giriyor. İzolasyon durumu değişmeden önce sepetin nerede duracağını önceden işaretliyoruz, böylece pencere açılır açılmaz makine hedefe yönleniyor.",
            },
            {
                baslik: "Duruş sonrası tekil çağrı ihtiyacı",
                metin:
                    "Devreye alma sırasında bazen listede olmayan tek bir dar nokta gündeme gelir — bir sızdırma, bir hizalama kontrolü. Bu tip tekil çağrılarda örümcek platformu ayrıca bölgeden çağırmak yerine, duruş penceresinde kullanılan makineyi kısa bir süre daha sahada tutmayı öneriyoruz; tek noktalık bir iş için ikinci bir sevkiyat açmak orantısız bir maliyet doğuruyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Duruş sahasında sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki çerçeve, duruş listesindeki bir kalemin hangi sınıfa düşeceğini hızlı değerlendirmek için kullandığımız kabaca kural setidir.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "Önerilen sınıf", "Duruş penceresindeki konum", "Tipik hazırlık"],
                    satirlar: [
                        ["Açık, geniş alan", "Standart makaslı", "Pencerenin genelinde", "Zemin temizliği"],
                        ["Boru/ekipman arası dar şerit", "Sepetli örümcek", "Enerjisiz bölge açılınca", "Ayak noktası temizliği"],
                        ["Sahanlık altı, gövde yanı", "Sepetli örümcek", "Devreye alma öncesi", "Yakın çevre boşaltma"],
                        ["Cephe/dış saçak", "Sepetli örümcek", "Pencere sonu", "Zemin türü kontrolü"],
                        ["Tek noktalık tekil çağrı", "Aynı gün ek süre", "Devreye alma sonrası", "Bekletme onayı"],
                    ],
                },
            },
            {
                baslik: "Filonun geri kalanıyla eşgüdüm",
                paragraflar: [
                    "Duruş penceresinde birden fazla makine sahada olduğunda asıl risk makinelerin birbirinin rotasına girmesidir. Örümcek platform genellikle dar bir şeritte sabit kalırken standart makaslı platform geniş alanda dolaşır; ikisinin güzergâhı çakışmasın diye duruş planına iki ayrı hat çiziyoruz. Bu ayrım özellikle aynı gün içinde çalışan iki ekip varsa önem kazanıyor, çünkü sahada iki büyük makinenin aynı koridoru paylaşması hem yavaşlatıyor hem risk yaratıyor.",
                    "Bölgedeki duruş dönemlerinde bir tesiste hem geniş alan hem dar nokta ihtiyacı aynı hafta çıkabiliyor; bu durumda iki makineyi aynı sevkiyatla göndermek, ayrı günlere yaymaktan hem zaman hem nakliye bedeli açısından daha ekonomik oluyor.",
                ],
            },
            {
                baslik: "Duruş dışı kullanımla farkı",
                paragraflar: [
                    "Duruş dışı dönemlerde örümcek platform genellikle tek bir nokta için, tek başına çağrılır ve süre kısa tutulur. Duruş penceresinde ise durum farklı işliyor: makine ana filonun bir parçası olarak plana giriyor, birden fazla dar nokta art arda taranıyor ve pencere kapanmadan tüm liste bitiriliyor. Bu fark, fiyatlamaya da yansıyor — duruş penceresinde ayrılan örümcek platform, ayrı bir sevkiyat değil ortak planın bir kalemi olarak hesaplanıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Duruş listemizde birkaç kalem 'erişim zor' diye işaretli; bunlar için ayrı mı planlama yapmalıyız?",
                cevap:
                    "Ayrı planlamayı biz yapıyoruz, sizin yapmanız gereken bu kalemleri erken işaretlemek. Duruş takvimi hazırlanırken listeyi görürsek dar noktaları baştan örümcek platforma ayırır, ana filoyla aynı pencereye yerleştiririz. Liste pencere açıldıktan sonra gelirse aynı çözümü kurarız ama makine o gün için ayrıca çağrılması gerekebilir ve bu, hazır bekleyen bir plana göre daha yavaş işler. Liste ne kadar erken paylaşılırsa dar nokta kalemleri o kadar sorunsuz ana plana oturuyor.",
            },
            {
                soru: "Aynı duruş penceresinde hem standart platform hem örümcek platform olması pencereyi uzatır mı?",
                cevap:
                    "Tam tersi — ikisini aynı pencereye, iki ayrı hat üzerinde çalışacak şekilde yerleştirmek pencereyi kısaltıyor. Standart makaslı platform geniş alanı tararken örümcek platform dar noktaları paralel olarak bitiriyor; iki iş art arda değil eş zamanlı ilerliyor. Tek riski iki makinenin güzergâhının çakışmasıdır, bunu duruş planına iki ayrı hat çizerek önlüyoruz. Sonuçta aynı pencerede iki sınıf çalıştırmak, aynı listeyi tek makineyle sırayla bitirmekten daha kısa sürüyor.",
            },
            {
                soru: "Zeminde duruş döneminde geçici malzeme ve hortum yığını oluyor; ayaklar sorun çıkarır mı?",
                cevap:
                    "Ayak açılacak nokta temizlenmemişse evet, gecikme yaşanır. Bu yüzden duruş planına bir hazırlık kalemi olarak zemin temizliğini yazıyoruz — ayakların açılacağı birkaç metrekarelik alanın malzeme ve hortumdan arındırılması, pencere açıldığında zaman kaybettirmeyen ilk adım oluyor. Zemin türü çatlak beton ya da ızgara üstüyse ayak altına takoz veya plaka koyuyoruz; bunu keşif fotoğrafıyla önceden değerlendiriyoruz.",
            },
            {
                soru: "Enerji kesintisi başlamadan makine sahada bekleyebilir mi?",
                cevap:
                    "Evet ve genellikle öneriyoruz. Enerjisiz bölgeye erişim ancak izolasyon tamamlandıktan sonra güvenli hâle geldiği için, makineyi kesinti başlamadan sahada hazır tutup izolasyon tamamlanır tamamlanmaz sepeti hedefe yönlendirmek zaman kazandırıyor. Bekleme süresi duruş planına ayrı bir satır olarak yazılır, böylece hem görünür oluyor hem sonradan tartışma konusu olmuyor.",
            },
            {
                soru: "Devreye alma sırasında listede olmayan tek bir dar nokta çıktı; ayrıca makine çağırmamız mı gerekiyor?",
                cevap:
                    "Duruş penceresinde kullanılan makine hâlâ sahadaysa genellikle hayır — kısa bir süre daha tutup tekil noktayı da bitiriyoruz. Makine pencere kapanışıyla birlikte çekildiyse ayrı bir çağrı gerekiyor ve bu, tek nokta için orantısız bir maliyet doğurabiliyor. Bu yüzden devreye alma günlerinde makineyi hemen çekmek yerine kısa bir kuyruk süresi bırakmayı öneriyoruz; tek noktalık sürprizlerin büyük bölümü bu kuyrukta karşılanıyor.",
            },
            {
                soru: "Örümcek platform ile standart makaslı platform arasındaki fiyat farkı duruş penceresinde nasıl hesaplanıyor?",
                cevap:
                    "Duruş dışı kullanımda örümcek platform ayrı bir sevkiyat olarak fiyatlanır; duruş penceresinde ise ana filonun parçası olduğu için ortak nakliye ve ortak hazırlık üzerinden hesaplanıyor, bu da birim maliyeti düşürüyor. Kesin fark, dar nokta sayısına ve bunların pencere içindeki süresine bağlı; listeyi paylaştığınızda hem standart hem örümcek platform için ayrı ayrı süre tahmini çıkarıp toplam teklifi tek kalemde sunuyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli örümcek platformun ayak-menzil mekaniği üretici teknik özellikleridir; duruş penceresinde ortak filo planlaması ve zemin hazırlığı firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Duruş Takvimine Bağlı Nakliye ve Teslimat Planlaması",
        giris:
            "Duruş penceresinde bir makinenin sahada olması yetmez; doğru saatte, doğru sırayla ve pencere kapanmadan bir sonraki adrese geçebilecek şekilde orada olması gerekir. Bölgedeki duruş dönemlerinde birden fazla tesisin aynı haftaya denk gelen talebi, nakliye tarafında bir sıralama problemine dönüşüyor: bir makine sabah bir tesiste başlarken akşam başka bir tesise geçmesi gerekebiliyor, bir diğeri ise pencere kapanana kadar tek adreste kalıyor. Bu sayfada anlattığımız, tekil bir kamyon seferi değil, duruş takvimine göre kurulan sevkiyat sırasıdır: hangi makinenin hangi saatte yüklendiği, hangi adrese hangi sırayla gidildiği, gece transferlerinin nasıl planlandığı ve pencere kapanmadan geri alımın nasıl kurgulandığı. Nakliye burada bir destek kalemi değil, duruş planının kendisinin bir parçası; teslim saati kaydığında pencere içindeki iş de kayıyor.",
        maddeler: [
            {
                baslik: "Duruş takvimine göre sevkiyat sırası",
                metin:
                    "Aynı hafta birden fazla tesisin duruşu varsa, hangi makinenin hangi adrese önce gideceğini rastgele değil pencerelerin açılış saatine göre belirliyoruz. Sabah erken açılan pencereler önce yüklenir, öğleden sonra açılanlar sıraya göre planlanır. Bu sıralama duruş takvimi netleştiği anda kurulur; son dakikada değişen bir sıralama, bir tesisin pencere başında makinesiz kalması riskini doğuruyor.",
            },
            {
                baslik: "Gece transferi ve sabah hazır olma",
                metin:
                    "Duruş pencereleri çoğunlukla sabah başlar ve o saatte makinenin yolda olması kabul edilmez. Bölge içi mesafenin kısalığından yararlanarak transferleri bir önceki işin bitiminden sonraya, akşam ve gece saatlerine planlıyoruz; makine gece hattı kullanır ve sabah pencere açıldığında şarj edilmiş hâlde bekler. Teslim saatini pencerenin başlangıcına göre değil, en az bir vardiya öncesine yazıyoruz.",
            },
            {
                baslik: "Pencere kapanmadan geri alım",
                metin:
                    "Duruş penceresinin kapanış saati sabitse, geri alım aracı da o saate göre önceden planlanır; aksi hâlde makine pencere kapandıktan sonra saatlerce boşta bekler ve bu bekleme bir sonraki tesisin sırasını geciktirir. Kapanış saatinden makul bir süre önce sökümün başlayabilmesi için bakım şefiyle birlikte bir çekiliş saati belirliyoruz; bu saat duruş planına ayrı bir kalem olarak yazılıyor.",
            },
            {
                baslik: "Ardışık iki pencere arasında makinenin bırakılması",
                metin:
                    "Bir tesisteki iş bittiğinde, birkaç gün içinde açılacak başka bir pencere varsa makineyi geri çekmek yerine yerinde bırakmayı değerlendiriyoruz — böylece hem iki sevkiyat bedeli doğmaz hem ikinci tesis beklemez. Bu kararı duruş takvimindeki doluluğa göre veriyor, hangi adrese hangi tarihte geçileceğini ilgili tesislere açıkça bildiriyoruz.",
            },
            {
                baslik: "Yükleme noktası ve saha erişimi",
                metin:
                    "Sevkiyat gecikmelerinin bir bölümü yolda değil, yükleme ve boşaltma noktasında yaşanır: dar bir kapı, kapalı bir bariyer, geç açılan bir güvenlik kontrolü. Duruş takvimine sevkiyat eklerken saha erişim bilgisini de topluyoruz — hangi kapıdan girileceği, kimin karşılayacağı, bariyer saatinin ne olduğu. Bu bilgi eksikse teslim saati kâğıt üzerinde tutarlı görünse de sahada kayıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Duruş haftasında sevkiyat türleri",
                paragraflar: [
                    "Aşağıdaki çerçeve, duruş takvimine göre kurulan sevkiyat türlerini ve her birinde önceliğin ne olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Sevkiyat türü", "Zamanlama", "Öncelik", "Tesisten beklenen"],
                    satirlar: [
                        ["İlk teslim", "Pencere açılışından önce", "Sabah hazır olma", "Yükleme noktası bilgisi"],
                        ["Ardışık tesis geçişi", "İş biter bitmez", "Bir sonraki pencereye yetişme", "Bitiş saatinin bildirimi"],
                        ["Gece transferi", "Mesai sonrası", "Sabah şarjlı bekleme", "Gece park noktası"],
                        ["Pencere kapanışı geri alımı", "Kapanıştan önce", "Bekleme süresini azaltma", "Çekiliş saati onayı"],
                        ["Ardışık pencere kalışı", "Duruşlar arasında", "İkinci sevkiyatı önleme", "Yer tahsisi"],
                        ["Plansız arıza sevkiyatı", "Anlık", "En yakın uygun makine", "Konum bilgisi"],
                    ],
                },
            },
            {
                baslik: "Birden fazla tesisin aynı haftada olması",
                paragraflar: [
                    "Bölgedeki duruş haftaları öngörülebilir olduğu için, aynı hafta içinde birden fazla tesisin talebi geldiğinde sevkiyat sırasını erken kuruyoruz. Sıralama ilkesi basit: pencere hangi saatte açılıyorsa yükleme de o saate göre önce planlanır. İki tesisin pencereleri çakışıyorsa, iki ayrı makine ve iki ayrı sevkiyat hattı kuruyoruz; tek makineyle ikisine birden yetişmeyi vaat etmiyoruz, çünkü bu tip vaatler sahada bozulduğunda telafisi zor gecikmeler doğuruyor.",
                    "Sevkiyat sırası bir kez kurulduktan sonra değiştirmek, zincirdeki diğer tesisleri de etkiliyor; bu yüzden değişiklik talebi geldiğinde etkilenen tüm adresleri güncelliyor, yeni sırayı yazılı olarak paylaşıyoruz.",
                ],
            },
            {
                baslik: "Teslim saatinin garanti edilebildiği ve edilemediği durumlar",
                paragraflar: [
                    "Planlı duruş kapsamındaki sevkiyatlarda teslim saati büyük ölçüde garanti edilebilir, çünkü tarih ve saat önceden bilinir ve rota buna göre kurulur. Plansız arıza sevkiyatlarında ise durum farklıdır — makine nerede boşsa oradan gelir ve süre bölge içi mesafeye bağlıdır; burada dakika bazlı bir söz vermiyoruz.",
                    "Bu ayrımı baştan netleştirmemizin nedeni, planlı ve plansız talebin aynı beklentiyle karşılanamamasıdır. Duruş takviminizi ne kadar erken paylaşırsanız sevkiyat tarafındaki garanti o kadar güçlü oluyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Duruş penceremiz sabah erken saatte başlıyor; makine gerçekten o saatte hazır olur mu?",
                cevap:
                    "Olur, çünkü teslim saatini pencerenin başlangıcına göre değil en az bir vardiya öncesine yazıyoruz. Transferi bir önceki işin bitiminden sonraya, akşam veya gece saatlerine planlıyor; makine gece hattı kullanıp sabah sizde şarj edilmiş hâlde bekliyor. Sizden istediğimiz tek şey, makinenin gece bırakılabileceği kapalı ya da gözetimli bir park noktası göstermeniz — bu bilgi olmadan gece transferi planlanamıyor.",
            },
            {
                soru: "Aynı hafta iki tesisimizin duruşu var; tek makineyle ikisine de yetişebilir misiniz?",
                cevap:
                    "Pencereler çakışmıyorsa evet, tek makine sırayla ikisine de gidebilir; sıralamayı pencerelerin açılış saatine göre kuruyoruz. Pencereler çakışıyorsa dürüstçe söylüyoruz: tek makineyle ikisine birden aynı anda yetişmek mümkün değil, iki ayrı makine ve iki ayrı sevkiyat hattı gerekiyor. Bu durumu erken görmek için duruş takviminizi mümkün olduğunca erken paylaşmanızı öneriyoruz; son dakikada çakışma fark edilirse ikinci makineyi bulma şansımız daralıyor.",
            },
            {
                soru: "Duruş penceremiz kapandığında makine hemen mi çekiliyor, yoksa bekleme mi oluyor?",
                cevap:
                    "Kapanış saatinden önce bakım şefiyle birlikte bir çekiliş saati belirliyoruz ve geri alım aracını o saate göre planlıyoruz; amaç makinenin pencere kapandıktan sonra saatlerce boşta beklememesi, çünkü bu bekleme bir sonraki tesisin sırasını da geciktiriyor. Çekiliş saati duruş planına ayrı bir kalem olarak yazılır. Devreye alma nedeniyle makinenin biraz daha sahada kalması gerekiyorsa bunu önceden söylemeniz yeterli; plan buna göre yeniden kurulur.",
            },
            {
                soru: "Bir tesisteki işimiz bitince makine hemen mi ayrılıyor, yoksa bekletebilir misiniz?",
                cevap:
                    "Duruş takvimindeki dolulukla ilgili — birkaç gün içinde açılacak başka bir pencereniz varsa makineyi yerinde bırakmayı değerlendiriyoruz, böylece hem ikinci bir sevkiyat bedeli doğmuyor hem ikinci pencere beklemiyor. Bu kararı sizinle birlikte veriyor, makinenin ne zaman hangi adrese geçeceğini açıkça bildiriyoruz. Yakın bir ikinci pencereniz yoksa makine planlanan bir sonraki adrese geçiyor; bu bilgiyi rezervasyon aşamasında paylaşıyoruz ki sürpriz olmasın.",
            },
            {
                soru: "Sahamıza girişte özel bir güvenlik prosedürü var; bu teslim saatini etkiler mi?",
                cevap:
                    "Etkileyebilir, bu yüzden sevkiyatı planlarken saha erişim bilgisini de ayrıca topluyoruz — hangi kapıdan girileceği, kimin karşılayacağı, bariyer veya güvenlik kontrolünün saatleri. Bu bilgi eksik kaldığında teslim saati kâğıt üzerinde tutarlı görünse de sahada gecikebiliyor. Güvenlik prosedürünüzü rezervasyon sırasında paylaşırsanız sevkiyat rotasına bu süreyi baştan ekliyoruz, böylece pencere açılışında gerçek bir gecikme yaşanmıyor.",
            },
            {
                soru: "Plansız bir arıza duruşunda ne kadar sürede makine gelir?",
                cevap:
                    "Bunu net bir dakika sözüyle vermiyoruz, çünkü planlı sevkiyattan farklı olarak makine nerede boşsa oradan gelir ve süre bölge içi mesafeye bağlıdır. Planlı duruş kapsamındaki sevkiyatlarda tarih ve saat önceden bilindiği için rota baştan kurulur ve teslim saati büyük ölçüde garanti edilir; plansız durumda ise elimizdeki en yakın uygun makineyi yönlendiriyor, gerçekçi bir süre tahmini veriyoruz. İki durumu aynı beklentiyle karşılamak yanıltıcı olur, bu yüzden farkı baştan söylüyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir-Bozüyük hattı içi karayolu mesafesinin kısalığı kamuya açık coğrafi gerçektir; duruş takvimine göre sevkiyat sıralaması ve gece transferi firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Duruş Öncesi Malzeme Hazırlığında Forklift ve İstifleme Kiralama",
        giris:
            "Bir duruş penceresinin gerçek süresi, pencere içinde ne kadar iş çıktığından çok, pencereden önce ne kadar hazırlık yapıldığından belirlenir. Malzeme ve yedek parçanın nokta bazında ayrılması, paletlerin çalışma alanına yakın bir noktada istiflenmesi, pencere içinde tekrar tekrar depo-saha arası taşıma yapılmaması — bunların hepsi forklift ve istifleme ekipmanının işidir ve manlift kadar kritik olduğu hâlde çoğu duruş planında ikinci planda kalır. Bölgedeki tesislerde bu tarafı ayrı bir kalem olarak ele alıyoruz: duruş öncesi malzeme çekme, pencere içi hızlı taşıma ve devreye alma sonrası boş palet-ambalaj toplama aynı planın parçası. Manlift yukarıda çalışırken forklift aşağıda malzeme akışını sürdürdüğünde, pencere içindeki gerçek çalışma süresi belirgin uzuyor; aksi hâlde manlift bazen malzeme beklerken boşta duruyor.",
        maddeler: [
            {
                baslik: "Duruş öncesi malzeme ayrımı",
                metin:
                    "Pencere açılmadan önce malzeme ve yedek parçanın nokta bazında ayrılması, duruş içindeki en çok zaman kazandıran hazırlık kalemlerinden biridir. Forklift bu ayrımı depo içinde yapar, paletleri çalışma noktasına en yakın alana taşır. Bu adım tamamlandığında pencere içinde 'malzeme nerede' sorusu sorulmuyor; ekip doğrudan işe başlıyor.",
            },
            {
                baslik: "Manlift ile forkliftin paralel çalışması",
                metin:
                    "Yukarıda manlift çalışırken aşağıda forklift malzeme taşımaya devam ettiğinde iki iş birbirini beklemiyor. Bunu sağlamak için duruş planına iki ayrı hat çiziyoruz — manliftin çalışma güzergâhı ile forkliftin taşıma güzergâhı çakışmayacak şekilde ayrılıyor. Aynı koridoru paylaşmaları gerektiğinde ise sıra önceden belirleniyor, sahada anlık trafik yönetimine bırakılmıyor.",
            },
            {
                baslik: "Ağır parça istifleme ve geçici depolama",
                metin:
                    "Duruş sırasında sökülen büyük parçaların geçici olarak istiflenmesi gerekiyor; bu hem yer açar hem parçanın hasar görmesini önler. İstifleme ekipmanını duruş planına dahil ederken parçanın ağırlık ve boyutuna uygun sınıfı önceden belirliyoruz, çünkü pencere içinde uygunsuz ekipmanla denenen bir kaldırma hem zaman kaybettiriyor hem risk yaratıyor.",
            },
            {
                baslik: "Devreye alma sonrası ambalaj ve atık toplama",
                metin:
                    "Devreye alma bittiğinde sahada boş palet, ambalaj ve atık malzeme birikir; bunun toplanması genelde son sırada kalır ve tesisin normal işletmeye dönüşünü geciktirir. Forklifti duruş planının sonuna, toplama görevi için ayrıca planlıyoruz — malzeme akışının başında kullanılan makine, işin sonunda da sahayı boşaltmak için kullanılabiliyor ve bu, ayrı bir ekipman talebini önlüyor.",
            },
            {
                baslik: "Dar koridor ve raf arası erişim",
                metin:
                    "Bazı tesislerde depo koridorları dardır ve standart forklift bu koridorlara giremez; bu durumda dar koridor sınıfı ekipman gerekiyor. Duruş öncesi keşifte koridor ölçüsünü kontrol ediyor, uygun sınıfı baştan planlıyoruz. Ölçü uymuyorsa alternatif bir taşıma rotası ya da malzemenin koridor dışına önceden çıkarılması öneriliyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Duruş aşamalarına göre forklift ihtiyacı",
                paragraflar: [
                    "Aşağıdaki çerçeve, duruş sürecinin hangi aşamasında forklift ve istifleme ekipmanının hangi rolde kullanıldığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Görev", "Ekipman sınıfı", "Manlift ile ilişki"],
                    satirlar: [
                        ["Duruş öncesi hazırlık", "Malzeme ayrımı ve taşıma", "Standart/dar koridor forklift", "Bağımsız çalışır"],
                        ["Duruş penceresi", "Sahaya sürekli malzeme akışı", "Standart forklift", "Paralel, ayrı güzergâh"],
                        ["Sökülen parça yönetimi", "İstifleme, geçici depolama", "Ağır sınıf istifleyici", "Manlift indirdikten sonra devralır"],
                        ["Devreye alma", "İnce ayar malzemesi taşıma", "Standart forklift", "Manlift ile aynı bölgede, sıralı"],
                        ["Kapanış", "Ambalaj ve atık toplama", "Standart forklift", "Manlift çekildikten sonra"],
                    ],
                },
            },
            {
                baslik: "Malzeme akışı kesildiğinde ortaya çıkan gizli bekleme",
                paragraflar: [
                    "Duruş planlarında en çok gözden kaçan gecikme kaynağı, manliftin veya ekibin malzeme beklemesidir. Bu bekleme genellikle raporlanmaz çünkü kimse 'makine boştaydı' demek istemez, ama pencere süresinin önemli bir kısmını yiyebilir. Forklifti duruş planına baştan dahil etmek, bu görünmez bekleme süresini ölçülebilir hâle getiriyor — malzeme akışı ayrı bir kalem olduğunda pencere içindeki gerçek çalışma süresi de netleşiyor.",
                    "Bölgedeki tesislerde bu ayrımı yaptığımızda, aynı işin daha kısa pencerede bitirilebildiğini gördük; bunun nedeni makinelerin daha hızlı çalışması değil, aralarındaki bekleme sürelerinin ortadan kalkmasıdır.",
                ],
            },
            {
                baslik: "Dar depo koridorlarında planlama",
                paragraflar: [
                    "Depo koridoru dar olduğunda standart forklift giremez ve malzeme taşıma başka bir yoldan yapılmak zorunda kalır. Bu durumu duruş öncesi keşifte tespit ediyor, dar koridor sınıfı ekipmanı ya da alternatif bir rotayı baştan planlıyoruz. Koridor ölçüsü belirsizse en dar noktanın fotoğrafını ve ölçüsünü istiyoruz; bu bilgi olmadan sahada uygunsuz ekipmanla denemek zaman kaybettiriyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Duruş penceremiz kısa; forklifti ayrıca planlamak gerçekten fark yaratır mı?",
                cevap:
                    "Kısa pencerelerde en çok fark yaratan kalemlerden biri budur. Malzeme akışı ayrı planlanmadığında manlift veya ekip malzeme beklerken pencere süresinin bir kısmı sessizce kayboluyor; bu bekleme genellikle raporlanmıyor ama toplamda önemli bir zaman tutuyor. Forklifti duruş öncesi hazırlık ve pencere içi taşıma için ayrı bir kalem olarak planladığımızda, aynı işin daha kısa sürede bittiğini görüyoruz. Kısa pencerelerde bu fark orantılı olarak daha büyük çıkıyor.",
            },
            {
                soru: "Manlift ve forklift aynı alanda çalışırken çarpışma riski olur mu?",
                cevap:
                    "Bunu önlemek için iki makinenin güzergâhını duruş planına ayrı hatlar olarak çiziyoruz — manliftin çalışma bölgesi ile forkliftin taşıma rotası çakışmıyor. Aynı koridoru paylaşmaları gerektiği durumlarda sıra önceden belirleniyor ve sahada anlık trafik yönetimine bırakılmıyor. Bu planlama duruş öncesinde, keşif sırasında yapılıyor; pencere açıldıktan sonra rota değiştirmek hem gecikme hem risk yaratıyor.",
            },
            {
                soru: "Sökülen ağır parçaları nereye koyacağız, forklift bunu taşıyabilir mi?",
                cevap:
                    "Parçanın ağırlık ve boyutuna göre değişir; standart forklift belirli bir ağırlığın üzerindeki parçalar için yeterli olmayabilir, bu durumda ağır sınıf istifleyici planlıyoruz. Duruş öncesi keşifte sökülecek parçaların yaklaşık ağırlığını ve boyutunu sorup uygun ekipmanı baştan belirliyoruz. Geçici depolama alanının da önceden ayrılması gerekiyor; alan belirlenmemişse parça sahada rastgele bırakılıyor ve bu hem güvenlik hem düzen sorunu yaratıyor.",
            },
            {
                soru: "Devreye alma bittikten sonra sahadaki ambalaj ve atığı kim topluyor?",
                cevap:
                    "Bunu duruş planının son kalemi olarak forklifte ayırıyoruz. Malzeme akışının başında kullanılan aynı ekipman, işin sonunda sahayı boşaltmak için de kullanılabiliyor; bu, ayrı bir ekipman talebi açmadan kapanışı hızlandırıyor. Toplama görevini planın sonuna yazmazsanız bu iş genellikle son sırada kalıyor ve tesisin normal işletmeye dönüşünü geciktiriyor. Erken planlarsak kapanış günü sahayı temiz teslim ediyoruz.",
            },
            {
                soru: "Depo koridorumuz dar; standart forklift giremiyorsa ne yapıyorsunuz?",
                cevap:
                    "Duruş öncesi keşifte koridor ölçüsünü kontrol ediyor, dar koridor sınıfı ekipmanı baştan planlıyoruz. Ölçü belirsizse en dar noktanın fotoğrafını ve santimetre cinsinden ölçüsünü istiyoruz. Dar koridor ekipmanı da yetmiyorsa malzemeyi koridor dışına önceden çıkarmayı ya da alternatif bir taşıma rotası kurmayı öneriyoruz. Bu değerlendirmeyi pencere açılmadan önce yapmak, sahada uygunsuz ekipmanla vakit kaybetmeyi önlüyor.",
            },
            {
                soru: "Forklifti sadece duruş günü için mi kiralayabiliriz, yoksa hazırlık günlerini de mi kapsamalı?",
                cevap:
                    "Hazırlık günlerini de kapsamasını öneriyoruz, çünkü asıl zaman kazancı pencereden önceki malzeme ayrımından geliyor. Sadece duruş günü için forklift kiralandığında malzeme ayrımı ya yapılmamış oluyor ya da pencere içinde yapılmaya çalışılıyor; ikisi de pencerenin etkin süresini kısaltıyor. Hazırlık gününü de plana dahil ettiğinizde forklift pencere açılmadan malzemeyi hazırlar, pencere içinde ise sadece akışı sürdürür — bu ayrım kısa pencerelerde belirgin fark yaratıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Duruş öncesi malzeme hazırlığının pencere süresine etkisi ve forklift-manlift paralel çalışma düzeni firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Duruş Penceresinde Eklemli Platform (Boom) ile Geniş Kapsam Erişimi",
        giris:
            "Duruş listesinin bazı kalemleri tek bir noktada değil, geniş bir hat boyunca dağılır: bir boru güzergâhının baştan sona kontrolü, bir çatı arasının tamamının taranması, birbirinden birkaç metre uzaktaki birden fazla vana grubunun sırayla kontrolü. Bu tip işlerde makineyi her nokta için ayrı ayrı yeniden konumlandırmak pencerenin büyük bölümünü yer; eklemli platform ise tek bir kurulum noktasından bomunu farklı açılara döndürerek birden fazla hedefe ulaşabilir. Bölgedeki duruş dönemlerinde bu sınıfı özellikle geniş kapsamlı, tek bir hat üzerinde yayılan kalemlerde tercih ediyoruz — makine bir kez konumlanır, bom hedefler arasında hareket eder ve pencere içinde tekrar tekrar taşınma ihtiyacı ortadan kalkar. Erişim yüksekliği kadar önemli olan diğer unsur, bomun yatay ve dikey menzilinin duruş sahasındaki engellerin (boru rafı, kablo kanalı, ekipman gövdesi) üzerinden dolaşabilmesidir.",
        maddeler: [
            {
                baslik: "Tek kurulumdan çoklu hedef",
                metin:
                    "Bir boru hattı ya da çatı arası gibi geniş kapsamlı işlerde eklemli platform bir kez konumlanır ve bomunu farklı hedeflere doğru hareket ettirir. Bu, her hedef için makineyi yeniden taşımaktan kaynaklanan zaman kaybını ortadan kaldırır. Duruş planında bu tip kalemleri belirlerken hedeflerin birbirine göre konumunu haritalıyor, tek kurulum noktasından kaç hedefe ulaşılabileceğini önceden hesaplıyoruz.",
            },
            {
                baslik: "Engel üzerinden erişim",
                metin:
                    "Fabrika içi duruş sahalarında boru rafı, kablo kanalı ya da ekipman gövdesi gibi engeller hedefle makine arasına girer. Eklemli platformun bomu dikey yükselip yatayda uzayabildiği için bu tip engellerin üzerinden dolaşarak hedefe ulaşabilir; dizel arazi tipinin düz bom hattı bu manevrayı genellikle veremiyor. Duruş öncesi keşifte engellerin konumunu ve yüksekliğini not ediyor, bomun buna yetip yetmediğini önceden kontrol ediyoruz.",
            },
            {
                baslik: "Enerjisiz bölgede geniş taramanın süresi",
                metin:
                    "Enerji kesintisi kapsamındaki geniş bir hat taramasında zaman en kritik kaynaktır; kesinti süresi sabit olduğu için tarama hızı doğrudan sonuca yansır. Eklemli platform tek kurulumdan çoklu hedef ulaşabildiği için, aynı süre içinde tekerlekli platformdan daha fazla nokta kontrol edilebiliyor. Bu farkı duruş planına yansıtırken hedef sayısını ve aralarındaki mesafeyi baştan hesaba katıyoruz.",
            },
            {
                baslik: "Dar kurulum alanında geniş menzil",
                metin:
                    "Bazı duruş sahalarında makinenin kurulabileceği düz ve boş alan sınırlıdır ama hedefler geniş bir alana yayılmıştır. Eklemli platform, dar bir kurulum noktasından bomunu geniş bir yaya açarak bu ihtiyacı karşılayabiliyor. Kurulum alanının ölçüsünü ve zeminin taşıma kapasitesini duruş öncesi keşifte kontrol ediyor, bomun menzilinin hedeflere yetip yetmediğini hesaplıyoruz.",
            },
            {
                baslik: "Birden fazla ekibin sıralı kullanımı",
                metin:
                    "Geniş kapsamlı bir hat işinde birden fazla ekip farklı hedeflerde çalışmak isteyebilir. Eklemli platform tek makine olduğu için aynı anda iki yerde olamaz; bu durumda ekiplerin hangi hedefte hangi saatte çalışacağını duruş planına yazıyor, makineyi sıraya göre yönlendiriyoruz. Bu sıralama yapılmadığında iki ekip aynı makineyi bekleyerek zaman kaybediyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli platform ile diğer sınıfların kıyası",
                paragraflar: [
                    "Geniş kapsamlı duruş işlerinde hangi sınıfın ne zaman avantajlı olduğu aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Eklemli platform", "Standart makaslı", "Dizel arazi tipi"],
                    satirlar: [
                        ["Tek hat üzerinde çoklu hedef", "Uygun, tek kurulum", "Sınırlı, sık taşınma gerekir", "Uygun, geniş alanda"],
                        ["Engel üzerinden erişim", "Uygun, bom manevrası", "Sınırlı", "Sınırlı"],
                        ["Dar kurulum alanı", "Uygun, geniş menzil telafi eder", "Uygun düz alanda", "Geniş alan gerekir"],
                        ["Kapalı alan, düşük tavan", "Sınırlı", "Uygun", "Uygun değil"],
                        ["Açık saha, uzun mesafe", "Orta", "Sınırlı", "Uygun"],
                    ],
                },
            },
            {
                baslik: "Kurulum noktası seçimi ve keşif",
                paragraflar: [
                    "Eklemli platformun asıl avantajı doğru kurulum noktası seçildiğinde ortaya çıkar; yanlış noktadan konumlanmış bir makine, bomun menzili yeterli olsa bile bazı hedeflere ulaşamayabilir. Bu yüzden geniş kapsamlı işlerde duruş öncesi keşfi ayrıntılı yapıyoruz — hedeflerin haritasını çıkarıyor, olası kurulum noktalarını değerlendiriyor ve en az taşınmayla en çok hedefe ulaşılan noktayı seçiyoruz.",
                    "Keşif sırasında zemin taşıma kapasitesi de kontrol ediliyor, çünkü eklemli platformun ağırlığı ve bom açıldığında oluşan moment, kurulum noktasındaki zemine göre değerlendirilmesi gereken bir kriter.",
                ],
            },
            {
                baslik: "Devreye alma sırasında tekrarlanan erişim",
                paragraflar: [
                    "Devreye alma sırasında bir hat üzerinde birden fazla nokta tekrar tekrar kontrol edilmek zorunda kalabilir; eklemli platformun tek kurulumdan çoklu hedefe ulaşma özelliği burada da işe yarıyor. Kullanılan kurulum noktaları ve bomun ulaştığı hedefler kayıt altına alınıyor; bu kayıt, bir sonraki periyodik bakımda aynı hattın daha hızlı planlanmasını sağlıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Boru hattımız uzun ve birden fazla nokta kontrol edilecek; makineyi her seferinde taşımak mı gerekiyor?",
                cevap:
                    "Genellikle hayır. Eklemli platform tek bir kurulum noktasından bomunu farklı hedeflere doğru hareket ettirebiliyor; hattın haritasını çıkarıp en az taşınmayla en çok hedefe ulaşılan kurulum noktasını önceden seçiyoruz. Hattın uzunluğu ve hedefler arası mesafe belirli bir sınırı aşarsa birden fazla kurulum noktası gerekebiliyor, bunu keşifte netleştiriyoruz. Hedeflerin listesini ve yaklaşık aralarındaki mesafeyi paylaşırsanız kurulum planını önceden çıkarabiliriz.",
            },
            {
                soru: "Hedefle makine arasında boru rafı gibi bir engel var; erişim mümkün mü?",
                cevap:
                    "Çoğunlukla mümkün — eklemli platformun bomu dikey yükselip yatayda uzayabildiği için bu tip engellerin üzerinden dolaşarak hedefe ulaşabiliyor. Engelin yüksekliğini ve hedefle olan konumunu keşifte ölçüyor, bomun menzilinin yetip yetmediğini önceden hesaplıyoruz. Engel çok yakın ve dar bir aralık bırakıyorsa sepetli örümcek platform gibi alternatif bir sınıfı da değerlendiriyoruz; hangisinin uygun olduğuna saha fotoğrafına bakarak karar veriyoruz.",
            },
            {
                soru: "Enerji kesintisi süremiz kısa; eklemli platform bu sürede kaç noktayı kontrol edebilir?",
                cevap:
                    "Bu, hedef sayısına ve aralarındaki mesafeye bağlı; net bir sayı vermeden önce hedeflerin listesini ve konumlarını görmek istiyoruz. Genel eğilim şu: tek kurulumdan çoklu hedefe ulaşabildiği için, aynı kesinti süresinde tekerlekli platforma göre daha fazla nokta taranabiliyor. Duruş planına bu hesabı önceden yazıyor, kesinti süresine göre gerçekçi bir hedef sayısı belirliyoruz; iyimser bir sayı verip sahada yetişememek en kötü senaryo.",
            },
            {
                soru: "Makinenin kurulacağı alan dar; bom geniş bir alana ulaşabilir mi?",
                cevap:
                    "Zemin uygunsa evet — eklemli platform dar bir kurulum noktasından bomunu geniş bir yaya açarak çalışabiliyor. Kurulum alanının ölçüsünü ve zemin taşıma kapasitesini keşifte kontrol ediyoruz, çünkü bom açıldığında oluşan momentin zemine göre değerlendirilmesi gerekiyor. Alan gerçekten çok kısıtlıysa ya da zemin yetersizse alternatif kurulum noktası veya farklı sınıf öneriyoruz; bunu sahada denemeden önce keşifte netleştirmek daha güvenli.",
            },
            {
                soru: "Aynı hat üzerinde iki ekip farklı noktalarda aynı anda çalışmak istiyor; bu mümkün mü?",
                cevap:
                    "Tek makineyle aynı anda iki farklı yerde olmak mümkün değil, bu yüzden ekiplerin hangi hedefte hangi saatte çalışacağını duruş planına baştan yazıyoruz. Bu sıralama yapılmazsa iki ekip aynı makineyi beklerken zaman kaybediyor. İki ekibin gerçekten eş zamanlı çalışması zorunluysa ikinci bir makine değerlendiriyoruz; hedef sayısı ve pencere süresine göre bunun gerekip gerekmediğini birlikte hesaplıyoruz.",
            },
            {
                soru: "Devreye alma sırasında aynı hattı tekrar tekrar kontrol etmemiz gerekebilir; her seferinde yeni keşif mi yapılıyor?",
                cevap:
                    "Hayır, ilk keşifte kullandığımız kurulum noktalarını ve bomun ulaştığı hedefleri kayıt altına alıyoruz; devreye alma sırasında aynı hat tekrar açılırsa bu kayıt üzerinden ilerliyor, sıfırdan keşif gerekmiyor. Bu kayıt, bir sonraki periyodik bakım döneminde de kullanılabiliyor ve hattın planlanmasını hızlandırıyor. Düzen sahada değiştiyse (yeni ekipman, kaldırılan boru rafı gibi) kaydı güncelliyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun bom menzil mekaniği üretici teknik özellikleridir; duruş penceresinde tek kurulumdan çoklu hedef planlaması firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Duruş Döneminde İç Mekân ve Depo İçi Platform Kiralama",
        giris:
            "Duruş listesinin büyük bölümü aslında dış saha değil, hattın kendi içidir: tavan aydınlatması, sprinkler hattı, kablo kanalı, raf üstü depolama alanı, üretim hattı üzerindeki askılı ekipman. Bu tip işlerde makine seçimini belirleyen ilk kriter erişim yüksekliği değil, kapı genişliği ve tavan yüksekliğidir — dış sahada rahatlıkla kullanılan bir sınıf, iç mekâna giremeyebilir. Bölgedeki duruş dönemlerinde iç mekân kalemleri genellikle dış saha kalemleriyle aynı pencereye yerleştirilir ve bu, makine geçişini planlamayı gerektirir: aynı gün içinde hem dışarıda hem içeride çalışabilecek akülü bir sınıf mı, yoksa iki ayrı makine mi. Bu sayfada anlattığımız, iç mekân işlerinin duruş takvimine nasıl oturtulduğu, kapı ve tavan ölçülerinin nasıl kontrol edildiği ve üretim hattının durduğu dar pencerede zeminin nasıl korunduğudur.",
        maddeler: [
            {
                baslik: "Kapı genişliği ve tavan yüksekliği kontrolü",
                metin:
                    "İç mekâna girecek makinenin ilk sınırı kapı genişliği, ikinci sınırı ise tavan yüksekliğidir. Duruş öncesi keşifte her iki ölçüyü de santimetre hassasiyetinde alıyor, uygun sınıfı buna göre belirliyoruz. Ölçü sınırdaysa alternatif bir giriş noktası ya da daha dar bir sınıf öneriyoruz; sahada denenip geri çevrilen bir makine hem zaman hem güven kaybettiriyor.",
            },
            {
                baslik: "Akülü sınıfın iç mekân tercihi",
                metin:
                    "Kapalı alanda egzoz gazı çıkarmaması gereken bir ortamda akülü makaslı platform standart tercih. Duruş penceresinde iç mekân kalemleri toplandığında akülü sınıfı önceden ayırıyor, şarj durumunu pencere başlamadan kontrol ediyoruz — pencere ortasında şarj bitmesi, ikinci bir makine ya da sarj molası gerektiriyor ve bu, planı bozan bir kalem oluyor.",
            },
            {
                baslik: "Raf arası ve dar koridor erişimi",
                metin:
                    "Depo içi raf sistemleri arasındaki koridorlar genellikle dar, standart forklift koridoru genişliğine göre kurulmuştur. Manlift bu koridora girecekse şase genişliğinin koridor ölçüsüyle uyumlu olması gerekir; uymuyorsa dar şase sınıfı ya da örümcek platform değerlendiriliyor. Bu kontrolü duruş öncesi keşifte yapıyoruz.",
            },
            {
                baslik: "Üretim hattı durduğunda zemin koruması",
                metin:
                    "Üretim hattının durduğu dar pencerede zemin genellikle hassas kaplamalı ya da özel yüzeyli olabiliyor. Makinenin tekerlek izinin zarar vermemesi için lastik türü ve zemin koruma önlemleri duruş planına önceden yazılıyor — dolgu lastikli ya da iz bırakmayan tekerlek seçimi, kaplamalı zeminlerde standart hâle getirilmiş bir uygulama.",
            },
            {
                baslik: "İç-dış geçişli işlerde tek makine kullanımı",
                metin:
                    "Bazı duruş kalemleri iç mekânda başlayıp dış cepheye çıkan bir hat üzerinde ilerler; kapı genişliğine sığan bir sınıf seçildiğinde aynı makine hem içeride hem dışarıda kullanılabiliyor. Bu, iki ayrı makine kiralama ihtiyacını ortadan kaldırıp duruş penceresi içinde tek günde tamamlanan bir iş listesi çıkarıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân duruş kalemlerinde sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki çerçeve, iç mekân duruş kalemlerinde hangi ölçütün hangi sınıfı işaret ettiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Ölçüt", "Kapı/koridor durumu", "Önerilen sınıf", "Duruş planındaki yeri"],
                    satirlar: [
                        ["Geniş kapı, düz zemin", "Standart", "Akülü makaslı", "Tavan/hat üstü işler"],
                        ["Dar kapı, dar koridor", "Sınırlı", "Dar şase akülü", "Raf arası erişim"],
                        ["Kapı içinden dışarı geçiş", "Standart-orta", "Kapı ölçüsüne uygun akülü", "İç-dış birleşik kalemler"],
                        ["Hassas kaplamalı zemin", "Değişken", "İz bırakmayan lastik", "Üretim hattı içi"],
                        ["Egzozsuz ortam zorunluluğu", "Kapalı alan", "Akülü, dizel değil", "Tüm iç mekân kalemleri"],
                    ],
                },
            },
            {
                baslik: "Şarj planlaması ve pencere süresi",
                paragraflar: [
                    "Akülü makinenin şarj durumu, duruş penceresinin uzunluğuna göre önceden kontrol edilmesi gereken bir kalem. Pencere kısa ve tek vardiyaysa genellikle tek şarjla yeterli oluyor; pencere birden fazla vardiyaya yayılıyorsa şarj molası ya da ikinci makine değerlendiriliyor. Bu hesabı duruş takvimi netleştiğinde yapıyor, planı buna göre kuruyoruz.",
                    "Şarj noktasının makineye yakın ve erişilebilir olması da önemli; pencere içinde şarj noktası aramak zaman kaybettiriyor, bu yüzden park ve şarj noktasını keşif sırasında birlikte belirliyoruz.",
                ],
            },
            {
                baslik: "Hassas zeminde iz ve leke önleme",
                paragraflar: [
                    "Bazı üretim alanlarında zemin kaplaması hem pahalı hem hassastır; standart lastik izi bırakabilir ya da leke oluşturabilir. Bu tip alanlarda iz bırakmayan (non-marking) lastikli makineyi tercih ediyor, gerekirse tekerlek altına geçici koruma bandı seriyoruz. Bu önlem duruş planına baştan yazılmazsa sahada son anda çözüm aranıyor ve bu, pencere süresinden zaman çalıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kapımızın genişliğini tam bilmiyoruz; makinenin girip girmeyeceğini nasıl anlarız?",
                cevap:
                    "Duruş öncesi keşifte kapı genişliğini ve tavan yüksekliğini santimetre hassasiyetinde ölçüyoruz; bu ölçüm olmadan sınıf önerisi vermiyoruz, çünkü sahada denenip geri çevrilen bir makine hem zaman hem güven kaybettiriyor. Kapı ölçüsü sınırdaysa alternatif bir giriş noktasını ya da daha dar şaseli bir sınıfı değerlendiriyoruz. Kapı fotoğrafını ve kaba ölçüsünü önceden paylaşırsanız uygun sınıfı keşiften önce ön görebiliyoruz.",
            },
            {
                soru: "Kapalı alanda dizel makine kullanmak mümkün mü?",
                cevap:
                    "Öneriyoruz ki kullanılmasın — kapalı alanda egzoz gazı birikimi ciddi bir güvenlik riski oluşturuyor. İç mekân kalemlerinde standart tercihimiz akülü makaslı platform; bu sınıf hem egzozsuz çalışıyor hem de kapı ve koridor ölçülerine daha kolay uyuyor. Havalandırması güçlü ve büyük bir kapalı alanda istisnai durumlar değerlendirilebilir ama bunu önceden, saha koşullarına bakarak karar veriyoruz, varsayılan olarak önermiyoruz.",
            },
            {
                soru: "Depo raf aralarımız çok dar; standart makaslı platform sığmıyorsa alternatif nedir?",
                cevap:
                    "Dar şase sınıfı akülü makaslı platform ya da sepetli örümcek platform değerlendiriyoruz. Koridor genişliğini keşifte ölçüyor, hangi sınıfın sığdığını önceden belirliyoruz. Koridor gerçekten çok darsa (standart dar şase sınıfının bile sığmadığı durumlar) örümcek platformun katlanır ayak düzeni son çare olarak devreye giriyor. Koridor fotoğrafını ve en dar noktanın ölçüsünü paylaşmanız, doğru sınıfı önceden belirlememizi kolaylaştırıyor.",
            },
            {
                soru: "Duruş penceremiz iki vardiyayı kapsıyor; akülü makine bu süre boyunca yeter mi?",
                cevap:
                    "Tek şarjla genellikle tek vardiyayı rahatlıkla karşılıyor; iki vardiyalık bir pencerede şarj molası ya da ikinci makine planlıyoruz. Bu hesabı duruş takvimi netleştiğinde yapıyoruz — pencere süresini ve tahmini kullanım yoğunluğunu öğrendiğimizde şarj planını buna göre kuruyoruz. Şarj molası planlanmışsa noktasını ve süresini önceden belirtiyor, pencere içinde beklenmedik bir duraklama yaşanmamasını sağlıyoruz.",
            },
            {
                soru: "Zeminimiz hassas kaplamalı; makine iz bırakır mı?",
                cevap:
                    "Standart lastikle iz bırakma riski var, bu yüzden hassas kaplamalı zeminlerde iz bırakmayan (non-marking) lastikli makineyi tercih ediyoruz. Gerekirse tekerlek altına geçici koruma bandı da seriyoruz. Bu önlemi duruş planına baştan yazmamızın nedeni, pencere içinde son anda çözüm aramanın hem zaman kaybettirmesi hem de riski artırmasıdır. Zemin türünü keşif öncesinde bildirirseniz uygun lastik seçimini önceden hazırlarız.",
            },
            {
                soru: "İşimiz iç mekânda başlayıp dışarıya çıkıyor; iki makine mi gerekiyor?",
                cevap:
                    "Genellikle hayır — kapı genişliğine sığan bir sınıf seçildiğinde aynı makine hem içeride hem dışarıda kullanılabiliyor; makine kapıdan geçip dışarıda çalışmasına devam ediyor. Bu, iki ayrı makine kiralama ihtiyacını ortadan kaldırıyor ve duruş penceresi içinde tek günde tamamlanan bir iş listesi çıkarıyor. Kapı ölçüsü uygun değilse ya da dış sahadaki iş çok farklı bir sınıf gerektiriyorsa (örneğin geniş arazi tipi) iki makineyi ayrı planlıyoruz; bunu keşifte netleştiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Akülü platformun kapalı alan tercihi ve iz bırakmayan lastik uygulaması üretici teknik özellikleri ve sektör geneli saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Duruş Penceresine Sığdırılan Çelik Konstrüksiyon Montaj İşleri",
        giris:
            "Bir üretim hattına yeni bir ekipman eklemek, mevcut bir çelik konstrüksiyonu değiştirmek ya da yeni bir kablo köprüsü kurmak gibi montaj işleri, hat çalışırken yapılamayacağı için genellikle planlı duruş penceresine sıkıştırılır. Bu tip işler bakım kaleminden farklıdır — kontrol değil inşa yapılır, süre daha uzun ve makine kullanımı daha yoğundur. Bölgedeki duruş dönemlerinde montaj kalemleri geldiğinde önce şunu soruyoruz: bu iş gerçekten duruş penceresine mi sığar, yoksa ayrı bir proje takvimi mi gerektirir? Bazı montaj işleri duruş penceresinin dışında, hat çalışırken bile güvenli biçimde yürütülebilir; bazıları ise mutlaka enerjisiz ve durmuş bir hat gerektirir. Bu ayrımı doğru yapmak, hem duruş penceresinin gereksiz uzamasını hem de montaj işinin yarım kalmasını önlüyor.",
        maddeler: [
            {
                baslik: "Montajın duruş penceresine gerçekten ihtiyacı var mı",
                metin:
                    "Her çelik konstrüksiyon montajı hattın durmasını gerektirmez; hattan uzak bir noktada, mevcut trafiği etkilemeyen bir montaj işi genellikle hat çalışırken de yapılabilir. Duruş penceresine gerçekten ihtiyaç duyan işler, hat üzerine ya da hattın hemen yakınına inen, güvenlik açısından enerjisiz ortam gerektiren kalemlerdir. Bu ayrımı montaj listesine bakarak baştan yapıyoruz ve gereksiz yere pencereye yazılan kalemleri ayırıyoruz.",
            },
            {
                baslik: "Uzun süreli makine kullanımı ve vardiya planı",
                metin:
                    "Montaj işleri bakım kontrolünden daha uzun sürdüğü için makine genellikle tüm pencere boyunca, birden fazla vardiyada kullanılır. Bu, tek bir makinenin sürekli meşgul olması demektir; aynı pencerede başka bir bakım kalemi varsa ikinci makine gerekebilir. Vardiya planını duruş takvimi netleştiğinde çıkarıyor, montaj ve bakım kalemlerinin aynı makineyi paylaşıp paylaşmayacağını önceden hesaplıyoruz.",
            },
            {
                baslik: "Ağır parça kaldırma ile montaj erişiminin ayrımı",
                metin:
                    "Çelik konstrüksiyon montajında iki farklı ihtiyaç var: ağır parçanın kaldırılıp yerine konması (vinç işi) ve montaj sırasında kaynak, cıvatalama gibi işlerin yapılabileceği erişim (platform işi). Bu ikisini karıştırmıyoruz — manlift erişim sağlar, ağır kaldırma ayrı bir ekipman gerektirir. Montaj listesini incelerken hangi kalemin hangi ekipmanı gerektirdiğini ayırıyor, ikisini aynı pencereye koordine ediyoruz.",
            },
            {
                baslik: "Kaynak ve kesim işlerinde güvenlik mesafesi",
                metin:
                    "Montaj sırasında kaynak ya da kesim yapılıyorsa, platform üzerindeki ekip ile çevresindeki diğer çalışmalar arasında güvenli mesafe ve yangın önlemi gerekiyor. Duruş planına bu güvenlik çerçevesini yazıyor, kaynak alanının etrafını diğer ekiplerin rotasından ayırıyoruz. Bu, aynı pencerede birden fazla ekibin çalıştığı durumlarda özellikle önem kazanıyor.",
            },
            {
                baslik: "Montaj sonrası kontrol ve teslim",
                metin:
                    "Montaj tamamlandığında platform üzerinden yapılan görsel kontrol ve bağlantı sıkılığı teyidi, işin tesise teslim edilmeden önceki son adımıdır. Bu kontrolü montaj listesine ayrı bir kalem olarak yazıyor, makinenin montaj bitince hemen çekilmemesini, kontrol tamamlanana kadar sahada kalmasını planlıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj kaleminin duruş penceresiyle ilişkisi",
                paragraflar: [
                    "Aşağıdaki çerçeve, montaj kaleminin duruş penceresine ihtiyaç duyup duymadığını ve makine kullanım yoğunluğunu değerlendirmek için kullandığımız kabaca kural setidir.",
                ],
                tablo: {
                    basliklar: ["Montaj tipi", "Duruş penceresi gerekli mi", "Makine kullanım yoğunluğu", "Ek ekipman ihtiyacı"],
                    satirlar: [
                        ["Hattan uzak, bağımsız yapı", "Hayır, hat çalışırken yapılır", "Değişken, esnek planlama", "Genellikle sadece platform"],
                        ["Hat üstü kablo köprüsü", "Evet, enerjisiz ortam", "Yüksek, çok vardiyalı", "Vinç + platform"],
                        ["Ekipman gövdesine ek yapı", "Evet", "Orta-yüksek", "Platform + kaldırma"],
                        ["Mevcut konstrüksiyon tadilatı", "Evet, kesim/kaynak varsa", "Yüksek", "Platform + güvenlik ekibi"],
                        ["Görsel kontrol/teslim", "Kısmen", "Düşük, kısa süreli", "Sadece platform"],
                    ],
                },
            },
            {
                baslik: "Platform ile ağır kaldırma ekipmanının koordinasyonu",
                paragraflar: [
                    "Montaj işlerinde en sık karşılaşılan koordinasyon sorunu, platform ve vinç gibi ağır kaldırma ekipmanının aynı sahada aynı anda çalışması gerektiğinde ortaya çıkıyor. İkisinin güzergâhı ve çalışma alanı çakıştığında hem verim düşüyor hem risk artıyor. Duruş planına bu iki ekipmanın hangi sırayla, hangi bölgede çalışacağını yazıyoruz — genellikle önce ağır parça vinçle yerine konur, ardından platform devreye girip bağlantı ve ince ayar işlerini üstlenir.",
                    "Bu sıralama montaj listesinin doğasına göre değişebilir; bazı işlerde platform önce erişim sağlar, parça sonradan indirilir. Hangi sıranın doğru olduğunu montaj mühendisliğiyle birlikte belirliyoruz.",
                ],
            },
            {
                baslik: "Duruş penceresi dışında yapılabilecek hazırlık",
                paragraflar: [
                    "Montaj işinin bir bölümü — malzeme ön montajı, kaynak öncesi hazırlık, ölçüm ve işaretleme — pencere açılmadan tamamlanabilir. Bu hazırlığın önceden bitirilmesi, pencere içindeki makine kullanım süresini kısaltıyor. Duruş öncesi hazırlığı planlarken hangi kalemin pencere dışında yapılabileceğini montaj ekibiyle birlikte belirliyor, sadece pencere gerektiren kalemleri takvime yazıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Montaj işimiz duruş penceresine mutlaka mı sığdırılmalı, yoksa hat çalışırken de yapılabilir mi?",
                cevap:
                    "Bu, montajın hatta ne kadar yakın olduğuna bağlı. Hattan uzak, mevcut üretim trafiğini etkilemeyen bir montaj işi genellikle hat çalışırken de güvenle yapılabiliyor ve bunu duruş penceresine sıkıştırmanıza gerek kalmıyor. Hat üzerine ya da hemen yakınına inen, enerjisiz ortam gerektiren kalemler ise mutlaka duruş penceresinde yapılmalı. Montaj listesini paylaştığınızda hangi kalemin pencere gerektirdiğini, hangisinin bağımsız planlanabileceğini ayırıp size gösteriyoruz.",
            },
            {
                soru: "Montaj işimiz birkaç gün sürecek; makine tüm süre boyunca sahada mı kalıyor?",
                cevap:
                    "Genellikle evet, çünkü montaj işleri bakım kontrolünden daha uzun sürüyor ve makine birden fazla vardiyada kullanılıyor. Bu süreyi duruş takvimi netleştiğinde hesaplıyor, aynı pencerede başka bir bakım kalemi varsa ikinci makinenin gerekip gerekmediğini önceden değerlendiriyoruz. Süre tahminini gerçekçi tutmanızı öneriyoruz; iyimser bir tahminle planlanan bir montaj işi, sürenin uzaması durumunda bir sonraki tesisin sırasını da etkileyebiliyor.",
            },
            {
                soru: "Hem ağır parça kaldıracağız hem de kaynak yapacağız; tek makine yeter mi?",
                cevap:
                    "Hayır, bu ikisi farklı ekipman gerektiriyor — manlift erişim sağlar, ağır parçanın kaldırılıp yerine konması ayrı bir kaldırma ekipmanı ister. İkisini karıştırmadan, montaj listesini inceleyip hangi kalemin hangi ekipmanı gerektirdiğini ayırıyoruz. Genellikle önce ağır parça yerine konur, ardından platform devreye girip bağlantı ve kaynak işlerini üstlenir; bu sıralamayı montaj mühendisliğiyle birlikte belirliyoruz.",
            },
            {
                soru: "Kaynak yaparken platformdaki ekip için özel bir güvenlik önlemi gerekiyor mu?",
                cevap:
                    "Evet, kaynak ve kesim işlerinde platform üzerindeki ekiple çevredeki diğer çalışmalar arasında güvenli mesafe ve yangın önlemi gerekiyor. Bu çerçeveyi duruş planına yazıyor, kaynak alanının etrafını diğer ekiplerin rotasından ayırıyoruz. Aynı pencerede birden fazla ekip çalışıyorsa bu ayrım özellikle önem kazanıyor; kaynak kıvılcımının başka bir çalışma alanına ulaşmaması için mesafe ve bariyer önceden planlanıyor.",
            },
            {
                soru: "Montajın bir kısmını duruş penceresi açılmadan önce hazırlayabilir miyiz?",
                cevap:
                    "Evet ve önermemiz de bu yönde. Malzeme ön montajı, kaynak öncesi hazırlık, ölçüm ve işaretleme gibi kalemler pencere açılmadan tamamlanabilir; bu hazırlığın önceden bitirilmesi pencere içindeki makine kullanım süresini kısaltıyor. Duruş öncesi hazırlığı montaj ekibinizle birlikte planlıyor, hangi kalemin pencere dışında yapılabileceğini belirleyip sadece pencere gerektiren işleri takvime yazıyoruz.",
            },
            {
                soru: "Montaj bittikten sonra platform hemen mi çekiliyor, yoksa kontrol için bekliyor mu?",
                cevap:
                    "Hemen çekilmiyor — montaj tamamlandığında platform üzerinden yapılan görsel kontrol ve bağlantı sıkılığı teyidi, işin teslim edilmeden önceki son adımı. Bu kontrolü montaj listesine ayrı bir kalem olarak yazıyor, makinenin kontrol tamamlanana kadar sahada kalmasını planlıyoruz. Kontrolde bir eksik çıkarsa aynı makineyle hemen düzeltiliyor; makine erken çekildiğinde bu, ikinci bir sevkiyat anlamına gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Duruş penceresine giren-girmeyen montaj kalemlerinin ayrımı ve platform-vinç koordinasyonu firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Tesislerinde Mevsimsel Duruş Dönemine Platform Kiralama",
        giris:
            "Eskişehir-Bozüyük hattındaki sanayi tesislerinin duruşları tatil ve dönem sonu takvimine bağlıyken, bölgedeki tarım ve silo tesislerinin duruş dönemi tamamen farklı bir takvime bağlıdır: hasat sonrası boşalan depolama kapasitesi, ekim öncesi bakım penceresi. Bu iki takvimin örtüşmemesi bizim için aslında bir avantajdır — sanayi tesislerinin yoğun olduğu haftalarda tarım tesisleri genellikle sakin, tarım tesislerinin yoğun olduğu dönemde ise sanayi tarafı görece rahat oluyor. Bu sayfada dürüstçe belirtmemiz gereken bir sınır var: ana uzmanlığımız sanayi tesisi bakım-devreye alma ve duruş dönemi kapasite yönetimi; tarım ve silo yapılarının kendine özgü teknik detaylarında (tahıl tozu patlama riski, silo iç yüzey özellikleri gibi) derinlemesine uzman değiliz. Buna karşılık silo dış yapısı, çelik konstrüksiyon bakımı ve genel erişim ihtiyaçlarında standart platform hizmetimizi aynı güvenilirlikle sunuyoruz.",
        maddeler: [
            {
                baslik: "Hasat sonrası boşalan pencere",
                metin:
                    "Silo ve depolama tesislerinde hasat dönemi biterken depolama kapasitesinin bir kısmı boşalır ve bu, bakım için doğal bir pencere açar. Bu pencere sanayi tesislerinin yoğun duruş haftalarıyla genellikle çakışmaz; bu yüzden tarım tesislerinden gelen talepleri, sanayi tarafının sakin olduğu haftalara kolaylıkla yerleştirebiliyoruz. Tarih netleştiğinde erken bağlamayı öneriyoruz, çünkü bu dönem kısa ve mevsime bağlı.",
            },
            {
                baslik: "Silo dış yapısı ve çelik konstrüksiyon erişimi",
                metin:
                    "Silo gövdesinin dış yüzeyi, merdiven ve platform bağlantıları, çatı üstü ekipman erişimi gibi kalemler standart platform hizmetimizin kapsamındadır. Bu tip işlerde dizel arazi tipi platform, açık ve genellikle stabilize zeminli silo çevresinde rahat çalışıyor. Erişim yüksekliği ve zemin durumu keşifte kontrol ediliyor.",
            },
            {
                baslik: "Açık arazi zemininde erişim koşulları",
                metin:
                    "Tarım tesislerinin çevresi genellikle asfalt değil stabilize ya da toprak zemindir ve mevsime göre (yağmur sonrası) zemin sertliği değişir. Bu koşullarda arazi tipi lastikli platform öneriyoruz; zemin çok yumuşaksa erişim öncesi zemin kontrolü yapıyor, gerekirse geçici plaka döşemeyi değerlendiriyoruz.",
            },
            {
                baslik: "İç mekân ve tahıl tozu ortamında sınırımız",
                metin:
                    "Silo iç mekânında tahıl tozu birikimi, patlama riski açısından özel ekipman ve prosedür gerektirebilen bir konu. Bu alanda ana uzmanlığımız yok ve dürüstçe söylüyoruz: ATEX sertifikalı özel ekipman gerektiren iç mekân işlerinde bu konuda uzmanlaşmış bir tedarikçiyle çalışmanızı öneririz. Silo dışındaki standart erişim işlerinde ise hizmet veriyoruz.",
            },
            {
                baslik: "Ekim öncesi kısa bakım penceresi",
                metin:
                    "Ekim öncesi dönemde bazı tesisler kısa bir bakım penceresi açar; bu pencere genellikle hasat sonrasından daha kısadır. Kısa pencerede makinenin pencere açılmadan sahada hazır olması önem kazanıyor; teslim saatini pencere başlangıcına göre değil biraz önceye planlıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapsamımız içinde ve dışında kalan işler",
                paragraflar: [
                    "Dürüstlük ilkesiyle, tarım ve silo tesislerinde hangi işlerin standart platform hizmetimizle karşılandığını, hangilerinin özel uzmanlık gerektirdiğini aşağıda ayırdık.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Kapsam", "Önerilen yaklaşım", "Mevsimsel pencere"],
                    satirlar: [
                        ["Silo dış gövde/merdiven bakımı", "Kapsamımızda", "Standart arazi tipi platform", "Hasat sonrası"],
                        ["Çatı üstü ekipman erişimi", "Kapsamımızda", "Standart platform", "Hasat sonrası / ekim öncesi"],
                        ["Silo iç mekân, tozlu ortam", "Kapsam dışı", "ATEX uzmanı tedarikçi önerilir", "—"],
                        ["Çevre çelik konstrüksiyon", "Kapsamımızda", "Standart platform", "Esnek"],
                        ["Açık arazi aydınlatma direği", "Kapsamımızda", "Arazi tipi platform", "Esnek"],
                    ],
                },
            },
            {
                baslik: "İki takvimin birbirini tamamlaması",
                paragraflar: [
                    "Sanayi tesislerinin duruş takvimi ile tarım tesislerinin mevsimsel penceresi genellikle farklı haftalara düşer; bu bizim için kapasite planlamasında bir avantaj. Sanayi tarafının yoğun olduğu tatil bloklarında tarım tesisi talebi görece azdır, tarım tarafının yoğun olduğu hasat sonrası dönemde ise sanayi tarafı görece sakindir. Bu ayrışma, aynı filo ile iki farklı talep dalgasının makul ölçüde karşılanabilmesini sağlıyor.",
                    "Bu örtüşmezlik garanti değildir; bazı yıllarda hasat takvimi kayabilir ve sanayi duruşlarıyla çakışabilir. Böyle bir durumda önceliği erken bağlayan tarafa veriyoruz ve bunu açıkça söylüyoruz.",
                ],
            },
            {
                baslik: "Zemin ve mevsim etkisi",
                paragraflar: [
                    "Tarım tesislerinin çevresindeki zemin, mevsime göre belirgin şekilde değişir; kuru dönemde sağlam olan stabilize zemin, yağmur sonrası yumuşayabilir. Bu değişkenliği keşifte dikkate alıyor, arazi tipi platform tercih ediyor ve gerekirse geçici plaka döşemeyi öneriyoruz. Zemin durumu hakkında güncel bilgi vermeniz (son yağış, zemin sertliği izlenimi), doğru makine sınıfını önceden belirlememizi kolaylaştırıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo tesisimizde hasat sonrası kısa bir bakım penceremiz var; bu dönemde makine bulmakta zorlanır mıyız?",
                cevap:
                    "Genellikle hayır, çünkü bu dönem sanayi tesislerinin yoğun duruş takvimiyle örtüşmüyor ve bu bize kapasite açısından esneklik sağlıyor. Tarih netleştiğinde erken bağlamanızı öneriyoruz, çünkü pencere kısa ve mevsime bağlı; bazı yıllarda hasat takvimi kayıp sanayi duruşlarıyla çakışabiliyor, böyle bir durumda önceliği erken bağlayan alıyor. Genel kural olarak tarım tesislerinden gelen talepleri sakin haftalara kolaylıkla yerleştirebiliyoruz.",
            },
            {
                soru: "Silo içindeki tahıl tozu ortamında çalışabilir misiniz?",
                cevap:
                    "Bunu dürüstçe sınırlıyoruz — silo iç mekânında tahıl tozu birikiminin patlama riski açısından özel ATEX sertifikalı ekipman ve prosedür gerektirdiği durumlarda ana uzmanlığımız yok. Bu tip iç mekân işlerinde bu konuda uzmanlaşmış bir tedarikçiyle çalışmanızı öneririz. Silo dışındaki gövde, merdiven ve çatı üstü erişim gibi standart işlerde ise hizmet veriyoruz ve bu konuda deneyimliyiz.",
            },
            {
                soru: "Tesisimizin çevresi stabilize zemin, yağmur sonrası yumuşuyor; makine batar mı?",
                cevap:
                    "Mevsime göre bu riski dikkate alıyoruz. Kuru dönemde sağlam olan stabilize zemin yağmur sonrası yumuşayabiliyor; bu durumda arazi tipi lastikli platform tercih ediyor, zemin çok yumuşaksa geçici plaka döşemeyi değerlendiriyoruz. Son yağış durumu ve zeminin genel sertlik izlenimini paylaşırsanız, doğru makine sınıfını ve gerekirse zemin desteğini önceden hazırlarız.",
            },
            {
                soru: "Silo gövdesinin dışındaki merdiven ve platform bağlantılarını kontrol ettirmek istiyoruz; bu sizin işiniz mi?",
                cevap:
                    "Evet, bu standart platform hizmetimizin kapsamında. Silo gövdesinin dış yüzeyi, merdiven ve platform bağlantıları, çatı üstü ekipman erişimi gibi işlerde dizel arazi tipi platform kullanıyor, açık ve genellikle stabilize zeminli silo çevresinde rahat çalışıyoruz. Erişim yüksekliğini ve zemin durumunu keşifte kontrol edip uygun makineyi öneriyoruz.",
            },
            {
                soru: "Ekim öncesi çok kısa bir pencerede çalışmamız gerekiyor; teslim saati garanti edilebilir mi?",
                cevap:
                    "Kısa pencerelerde teslim saatinin tutması özellikle önemli; bu yüzden makinenin pencere başlangıcına göre değil biraz önce sahada olacak şekilde teslim saatini planlıyoruz. Tarih ve saat ne kadar erken bildirilirse rota o kadar sağlam kurulur. Pencere gerçekten dar bir zaman dilimindeyse (birkaç saat gibi) bunu bize önceden söylemeniz, hazırlığı buna göre önceliklendirmemizi sağlıyor.",
            },
            {
                soru: "Hem silo dışı bakım hem de içeride tahıl tozu ortamı işi var; ikisini birlikte mi planlıyorsunuz?",
                cevap:
                    "İkisini ayırıyoruz — dış gövde, merdiven ve çatı üstü erişim gibi standart işleri kendimiz üstleniyoruz; tahıl tozu ortamındaki iç mekân işi için ATEX uzmanı bir tedarikçi önermemiz gerekiyor. İki işi aynı pencereye koordine etmek isterseniz, kendi kapsamımızdaki kısmı sizin belirlediğiniz uzman tedarikçiyle aynı takvime yerleştirebiliriz; ancak iç mekân tarafındaki teknik sorumluluğu üstlenmiyoruz. Bunu baştan netleştirmek, iki tarafın da beklentisini doğru kuruyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Hasat sonrası ve ekim öncesi mevsimsel bakım pencereleri tarım sektöründe kamuya açık genel bilgidir; silo iç mekân ATEX kapsam dışı sınırı firma dürüstlük ilkesidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerjisiz Duruş Penceresinde Aydınlatma ve Enerji Hattı Bakımı",
        giris:
            "Bölgedeki duruş dönemlerinin bir bölümü doğrudan enerji kesintisiyle tanımlanır: bir üretim hattının enerjisi kesilmeden yapılamayacak elektrik panosu bakımı, aydınlatma direği değişimi, kablo kanalı kontrolü. Bu tip işlerin ortak özelliği, kesinti süresinin sabit ve genellikle kısa olmasıdır — enerji ne kadar erken geri verilirse üretim de o kadar erken başlar, bu yüzden kesinti penceresi asla gereksiz uzatılmaz. Bölgedeki tesislerle çalışırken enerji bakım kalemlerini duruş takviminin en sıkı kısıtlı bölümü olarak ele alıyoruz: makine kesinti başlamadan hazır bekler, kesinti başladığı an sepet hedefe yönelir ve kesinti bitmeden iş tamamlanır. Bu sayfada anlattığımız, enerjisiz pencerenin nasıl kullanıldığı, birden fazla enerji hattının aynı pencereye nasıl sığdırıldığı ve kesinti dışı aydınlatma bakımının nasıl farklı planlandığıdır.",
        maddeler: [
            {
                baslik: "Kesinti başlamadan hazır bekleme",
                metin:
                    "Enerji kesintisi belirli bir saatte başlıyorsa, makinenin o saatten önce sahada ve hedefe yakın konumda hazır olması gerekiyor. Kesinti başladıktan sonra makine getirilirse kesinti süresinin bir bölümü boşa gidiyor. Bu yüzden enerji bakım kalemlerinde teslim saatini kesinti başlangıcından biraz önceye yazıyoruz; sepet, izin verildiği an hedefe hareket ediyor.",
            },
            {
                baslik: "Birden fazla enerji hattının sıralanması",
                metin:
                    "Bazı duruşlarda birden fazla enerji hattı ya da pano grubu aynı kesinti penceresinde bakıma alınır. Bu durumda hangi hattın önce, hangisinin sonra kontrol edileceğini önceden sıralıyoruz — kritik olan ya da en uzun süren hat genellikle önce ele alınır, kısa kontroller arta kalan süreye yerleştirilir. Bu sıralama kesinti süresinin sonuna kadar tüm hatların bitirilmesini sağlıyor.",
            },
            {
                baslik: "Aydınlatma direği bakımının kesinti dışı planlanması",
                metin:
                    "Aydınlatma direği bakımının her zaman enerji kesintisi gerektirmediği durumlar var — direk gövdesi ve armatür değişimi, ilgili hat izole edilerek kesinti dışında da yapılabiliyor. Bu tip işleri gereksiz yere duruş penceresine sıkıştırmıyoruz, ayrı bir gün için planlıyoruz; bu, hem duruş penceresini rahatlatıyor hem aydınlatma bakımını daha esnek bir takvime yerleştiriyor.",
            },
            {
                baslik: "Kablo kanalı ve pano üstü erişim",
                metin:
                    "Kablo kanalı ve pano üstü kontrol işleri genellikle dar ve enerji hattına yakın noktalardır; bu yüzden hem erişim hem güvenlik mesafesi keşifte önceden değerlendiriliyor. Makine sınıfı, hedefin dar bir aralıkta olup olmadığına göre standart makaslı platform ya da örümcek platform arasında seçiliyor.",
            },
            {
                baslik: "Kesinti süresinin aşılma riski ve yedek plan",
                metin:
                    "Enerji kesintisi süresi bazen beklenmedik bir bulguyla uzayabilir. Bu ihtimale karşı duruş planına bir yedek zaman dilimi ekliyor, makinenin kesinti bitene kadar sahada kalmasını sağlıyoruz. Süre planlanandan da fazla uzarsa bunu tesis yetkilisiyle birlikte anlık değerlendiriyoruz; makinenin bir sonraki taahhüdü varsa bu durumu açıkça bildiriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kesinti gerektiren ve gerektirmeyen enerji-aydınlatma işleri",
                paragraflar: [
                    "Aşağıdaki çerçeve, hangi enerji ve aydınlatma işinin kesinti penceresine mutlaka girmesi gerektiğini, hangisinin ayrı planlanabileceğini gösterir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Kesinti gerekli mi", "Planlama", "Öncelik sırası"],
                    satirlar: [
                        ["Enerjili pano bakımı", "Evet, zorunlu", "Duruş penceresi", "Yüksek"],
                        ["Kablo kanalı kontrolü (hat üstü)", "Evet", "Duruş penceresi", "Orta-yüksek"],
                        ["Aydınlatma direği/armatür değişimi", "Genellikle hayır (lokal izolasyon yeterli)", "Ayrı gün", "Esnek"],
                        ["Açık saha enerji hattı görsel kontrolü", "Hayır", "Ayrı gün", "Esnek"],
                        ["Santral/trafo çevresi erişim", "Evet", "Duruş penceresi", "Yüksek"],
                    ],
                },
            },
            {
                baslik: "Kesinti süresini verimli kullanmak",
                paragraflar: [
                    "Enerji kesintisi penceresi genellikle diğer duruş kalemlerinden daha kısa ve daha sıkı tutulur, çünkü üretimin yeniden başlaması doğrudan bu pencereye bağlıdır. Bu yüzden kesinti kapsamındaki her kalemi, makinenin hedefe ulaşma sırası dahil önceden planlıyoruz; sahada anlık karar vermeyi minimuma indiriyoruz. Kesinti başladığı an hangi hedefe önce gidileceği, hangi ekibin hangi noktada bekleyeceği yazılı olarak belli.",
                    "Bu titiz planlamanın nedeni basit: kesinti süresi dakika bazında hesaplanan bir kaynak ve her boşta geçen dakika üretimin gecikmesi anlamına geliyor.",
                ],
            },
            {
                baslik: "Aydınlatma bakımının duruş dışına taşınmasının faydası",
                paragraflar: [
                    "Aydınlatma direği ve armatür bakımı kesinti gerektirmediğinde bunu duruş penceresinden ayrı bir güne taşımak iki fayda sağlıyor: duruş penceresi daha kritik enerji kalemlerine ayrılıyor, aydınlatma bakımı ise daha esnek, hava koşuluna göre seçilebilen bir güne kayabiliyor. Bu ayrım özellikle birden fazla direk ya da armatürün değişeceği geniş kapsamlı işlerde zaman kazandırıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerji kesintimiz sadece kırk-elli dakika sürecek; bu sürede iş bitirilebilir mi?",
                cevap:
                    "Hazırlık doğru yapılmışsa evet. Makinenin kesinti başlamadan önce sahada, hedefe yakın konumda hazır beklemesi belirleyici — kesinti başladıktan sonra makine getirilirse sürenin önemli bir kısmı boşa gidiyor. Birden fazla hedef varsa hangisinin önce, hangisinin sonra ele alınacağını önceden sıralıyoruz. Kesinti süresini ve hedef sayısını paylaşırsanız gerçekçi bir plan çıkarır, sığmayacak kalemleri önceden söyleriz.",
            },
            {
                soru: "Aynı kesinti penceresinde birden fazla pano grubu kontrol edilecek; sırayı siz mi belirliyorsunuz?",
                cevap:
                    "Sırayı birlikte belirliyoruz ama önerimiz kritik olan ya da en uzun süren hattın önce ele alınması yönünde; kısa kontroller arta kalan süreye yerleştiriliyor. Bu sıralama, kesinti süresinin sonuna kadar tüm hatların bitirilmesini hedefliyor. Hangi hattın kritik olduğuna dair teknik önceliği tesis ekibiniz belirliyor, biz bu önceliğe göre makine ve ekip rotasını kuruyoruz.",
            },
            {
                soru: "Aydınlatma direğimizi değiştirmek istiyoruz; enerji kesintisi gerekiyor mu?",
                cevap:
                    "Çoğu durumda hayır — direk gövdesi ve armatür değişimi, ilgili hat lokal olarak izole edilerek kesinti dışında da yapılabiliyor. Bu tip işleri gereksiz yere duruş penceresine sıkıştırmıyor, ayrı bir gün için planlıyoruz; bu hem duruş penceresini rahatlatıyor hem aydınlatma bakımını daha esnek bir takvime, örneğin hava koşulunun uygun olduğu bir güne yerleştirmemizi sağlıyor. Hattın izolasyon durumu belirsizse elektrik ekibinizle birlikte netleştiriyoruz.",
            },
            {
                soru: "Kesinti süresi beklenmedik bir bulguyla uzarsa ne oluyor?",
                cevap:
                    "Bu ihtimale karşı duruş planına bir yedek zaman dilimi ekliyoruz; makine kesinti bitene kadar sahada kalıyor. Süre planlanandan da fazla uzarsa durumu tesis yetkilisiyle birlikte anlık değerlendiriyoruz — makinenin bir sonraki taahhüdü varsa bunu açıkça bildiriyor, mümkünse süreyi uzatıyoruz. Sık karşılaşılan bir durum değil ama planlamada bu payı bırakmamız, beklenmedik bir bulgunun tüm günü bozmasını önlüyor.",
            },
            {
                soru: "Pano üstüne erişim çok dar bir aralıkta; standart platform sığar mı?",
                cevap:
                    "Aralığın genişliğine bağlı; keşifte bu ölçüyü kontrol ediyor, standart makaslı platform sığmıyorsa sepetli örümcek platform gibi dar geçişe uygun bir sınıf öneriyoruz. Enerji hattına yakınlık nedeniyle güvenlik mesafesini de bu değerlendirmeye dahil ediyoruz. Aralığın fotoğrafını ve yaklaşık ölçüsünü paylaşırsanız uygun sınıfı kesinti penceresi başlamadan önce belirleyebiliriz.",
            },
            {
                soru: "Enerji kesintisi dışındaki açık saha enerji hattı işlerini de siz mi yapıyorsunuz?",
                cevap:
                    "Erişim tarafını evet — açık saha enerji hattı ve direklerinde görsel kontrol, boya, mekanik bağlantı gibi platform erişimi gerektiren işlerde hizmet veriyoruz. Bu tip işler genellikle kesinti gerektirmiyor ve daha esnek bir güne planlanabiliyor. Enerji hattının kendi elektriksel bakımı (izolasyon testi, koruma rölesi ayarı gibi) elektrik mühendisliği kapsamında kalıyor; biz bu kısımda erişimi sağlıyoruz, teknik işlemi tesisin elektrik ekibi ya da yetkili tedarikçisi yürütüyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerjisiz çalışma zorunluluğu ve kesinti penceresi sıralaması sektör geneli elektrik bakım güvenlik pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform Kiralama: Duruş Takvimine Göre Çoklu Fabrika Rotası",
        giris:
            "Bölgedeki duruş döneminin en somut karşılığı operatör tarafında ortaya çıkar. Aynı hafta içinde birden fazla tesisin duruşu varsa, her tesisin kendi operatörünü ayrı ayrı bulması hem pahalı hem verimsizdir — bir operatör bir tesiste günde birkaç saat çalışırken kalan zamanı boşta geçirebilir. Bizim kurduğumuz düzen bunun tersi: operatörlü makineyi duruş takvimine göre bir rotaya yerleştiriyoruz, aynı operatör-makine ekibi bir günde birden fazla tesisin kısa pencerelerini karşılayabiliyor, uzun pencereli tesislerde ise tüm günü tek adrese ayırıyor. Bu, sadece bir lojistik kolaylık değil; operatörün aynı hafta içinde farklı sahalarda çalışması, saha koşullarına (zemin, erişim, güvenlik prosedürü) hızlı adapte olabilen deneyimli bir ekip gerektiriyor. Bu sayfada operatörlü kiralamanın duruş takvimine nasıl bağlandığını, vardiya ve rota planının nasıl kurulduğunu, operatör yeterliliğinin nasıl doğrulandığını ve birden fazla tesisin aynı operatörü paylaşırken neye dikkat ettiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Operatörlü vs operatörsüz: duruş penceresinde karar",
                metin:
                    "Duruş penceresinde tesis kendi personelini eğitip makineyi kendisi kullanabilir (operatörsüz) ya da bizim operatörümüzle çalışabilir (operatörlü). Kısa ve yoğun bir pencerede, birden fazla nokta hızlı sırayla tarandığında operatörlü kiralama neredeyse her zaman daha hızlı sonuç veriyor — operatör makineyi ve saha güvenlik prosedürünü tanıdığı için ayrı bir eğitim veya alışma süresi gerekmiyor. Uzun süreli, tek noktada yoğunlaşan işlerde ise tesis personeli operatörsüz kiralamayı tercih edebiliyor. Kararı işin doğasına göre birlikte veriyoruz.",
            },
            {
                baslik: "Aynı günde birden fazla tesisin kısa pencerelerini karşılamak",
                metin:
                    "Bölgede birden fazla tesisin aynı gün kısa (birkaç saatlik) duruş penceresi açtığı durumlar sık görülüyor. Bu durumda tek bir operatörlü makineyi bir rotaya yerleştiriyoruz: sabah bir tesiste başlıyor, pencere kapanınca bir sonraki adrese geçiyor, günün sonuna kadar üç-dört kısa pencere art arda karşılanabiliyor. Bu rotanın işlemesi için her tesisin pencere saatinin kesin ve teyitli olması gerekiyor; belirsiz bir saat, rotanın tamamını geciktirebiliyor.",
            },
            {
                baslik: "Uzun pencereli tesiste tüm gün tek adres",
                metin:
                    "Bir tesisin duruş penceresi gün boyu sürüyorsa, operatörlü makineyi o gün için tamamen o adrese ayırıyoruz; rotaya başka bir durak eklemiyoruz. Bu karar duruş takvimi netleştiğinde veriliyor — pencerenin uzunluğu, operatörün o gün başka bir yere gidip gidemeyeceğini belirleyen ilk kriter.",
            },
            {
                baslik: "Vardiya ve dinlenme süresi planlaması",
                metin:
                    "Operatörün yasal çalışma ve dinlenme süreleri, rota planının bir parçası olarak hesaplanıyor. Bir günde birden fazla tesise gidilen rotalarda toplam çalışma süresinin sınırı aşmaması, iki tesis arasındaki geçiş süresinin de bu hesaba dahil edilmesi gerekiyor. Duruş takvimi çok yoğun bir haftaya denk geldiğinde, tek operatörün üstlenebileceği rota sayısı sınırlı kalıyor; bu durumda ikinci bir operatörlü makine planlanıyor.",
            },
            {
                baslik: "Operatör yeterlilik belgesi ve saha oryantasyonu",
                metin:
                    "Operatörlerimizin yeterlilik belgeleri güncel tutuluyor ve talep hâlinde tesise önceden iletiliyor. Her tesisin kendi giriş ve güvenlik prosedürü farklı olabildiği için, yeni bir tesise giden operatör için kısa bir saha oryantasyonu (giriş noktası, acil durum prosedürü, iletişim kişisi) rota planına ekleniyor; bu, ilk günkü gecikmeleri azaltıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Duruş penceresi tipine göre operatörlü rota kurulumu",
                paragraflar: [
                    "Aşağıdaki çerçeve, duruş penceresinin uzunluğuna ve tesis sayısına göre operatörlü makinenin nasıl planlandığını gösterir. Bu, bölgedeki en sık karşılaştığımız dört senaryo.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Pencere uzunluğu", "Rota planı", "Operatör sayısı"],
                    satirlar: [
                        ["Tek tesis, tam gün", "Gün boyu", "Tek adres, tüm gün", "1"],
                        ["İki-üç tesis, kısa pencereler", "Birkaç saat/tesis", "Sıralı rota, aynı gün", "1"],
                        ["Aynı hafta birden fazla tam gün duruş", "Gün boyu × birden fazla gün", "Ayrı günlere dağıtılmış rota", "1-2"],
                        ["Zirve hafta, çok sayıda talep", "Değişken", "Havuzdan ek operatör", "2+"],
                        ["Devreye alma sonrası tekil çağrı", "Kısa, belirsiz saat", "Yakın rotadaki operatör yönlendirilir", "1"],
                    ],
                },
            },
            {
                baslik: "Rota planının kırılma noktaları",
                paragraflar: [
                    "Sıralı rota planı, her bir tesisin pencere saatinin kesin olmasına dayanır; bir tesisteki pencere beklenenden uzun sürerse rotadaki sonraki tesis gecikir. Bu riski azaltmak için rota planına her durak arasına kısa bir tampon süre ekliyoruz; tampon yeterli gelmezse sıradaki tesise durumu erken bildiriyoruz. Erken bildirim, tesisin kendi iç planını (örneğin ekiplerin ne zaman sahaya çıkacağı) buna göre ayarlamasına imkân veriyor.",
                    "Rotanın kırılmasını tamamen önleyemesek de, hangi tesisin rotanın başında hangisinin sonunda olduğunu belirlerken kritik ya da güvenlik açısından ertelenemez işleri önceliklendiriyoruz; esnek olabilecek kalemleri rotanın sonuna yerleştiriyoruz.",
                ],
            },
            {
                baslik: "Zirve haftada operatör kapasitesi",
                paragraflar: [
                    "Bölgedeki duruşların aynı haftalara toplandığı dönemlerde operatör kapasitesi de makine kapasitesi kadar kritik hâle geliyor — makine bulunsa bile yeterlilik belgeli operatör bulunamazsa iş yapılamıyor. Bu yüzden zirve hafta planlamasında operatör sayısını da ayrı bir kalem olarak takip ediyor, gerektiğinde bölgedeki havuzdan ek operatör görevlendiriyoruz. Bu görevlendirme, tesisin duruş tarihini ne kadar erken bildirdiğine doğrudan bağlı; son dakika talepte operatör bulma şansı daralıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlü mü operatörsüz mü kiralamalıyız; duruş penceremize göre nasıl karar veriyorsunuz?",
                cevap:
                    "Pencerenin uzunluğuna ve nokta sayısına bakıyoruz. Kısa ve yoğun bir pencerede, birden fazla nokta hızlı sırayla taranacaksa operatörlü kiralama neredeyse her zaman daha hızlı sonuç veriyor — operatörümüz makineyi ve saha güvenlik prosedürünü tanıdığı için ayrı bir alışma süresi gerekmiyor. Uzun süreli, tek noktada yoğunlaşan işlerde tesis personeliniz operatörsüz kiralamayı tercih edebilir; bu durumda yeterlilik belgesi ve kısa bir kullanım eğitimi düzenliyoruz. Pencere planınızı paylaşırsanız hangisinin daha uygun olduğunu birlikte değerlendiririz.",
            },
            {
                soru: "Aynı gün üç farklı tesisimizin kısa duruş penceresi var; tek operatörlü makineyle hepsine yetişebilir misiniz?",
                cevap:
                    "Pencere saatleri kesin ve birbirini izleyecek şekilde diziliyorsa evet, tek operatörlü makineyi bir rotaya yerleştirip sabahtan akşama üç adresi sırayla karşılayabiliyoruz. Bunun işlemesi için her tesisin pencere saatinin teyitli olması şart; belirsiz bir saat rotanın tamamını geciktirebiliyor. Ayrıca operatörün yasal çalışma-dinlenme süresini de hesaba katıyoruz; üç durak bu süreyi aşıyorsa ikinci bir operatörlü makine öneriyoruz. Üç tesisin pencere saatlerini paylaşırsanız rotanın gerçekçi olup olmadığını hemen görebiliriz.",
            },
            {
                soru: "Bir tesisteki iş beklenenden uzun sürerse rotadaki diğer tesisler ne olur?",
                cevap:
                    "Rota planına her durak arasına kısa bir tampon süre ekliyoruz, bu ilk savunma hattı. Tampon yeterli gelmezse sıradaki tesise durumu erken bildiriyoruz, böylece tesis kendi iç planını (ekiplerin ne zaman sahaya çıkacağı gibi) buna göre ayarlayabiliyor. Rotanın tamamen kırılmaması için önceliği kritik ya da ertelenemez işlere veriyor, esnek kalemleri rotanın sonuna yerleştiriyoruz. Süre tahmininizi mümkün olduğunca gerçekçi paylaşmanız, tampon süreyi doğru hesaplamamızı sağlıyor.",
            },
            {
                soru: "Operatörünüzün yeterlilik belgesini görebilir miyiz?",
                cevap:
                    "Evet, operatörlerimizin yeterlilik belgeleri güncel tutuluyor ve talep hâlinde saha girişinden önce tesise iletiliyor. Bazı tesislerin kendi iç prosedürü gereği belgenin önceden ibraz edilmesi gerekiyor; bu durumu rezervasyon aşamasında belirtirseniz belgeyi zamanında ulaştırırız. Yeni bir tesise ilk kez giden operatör için ayrıca kısa bir saha oryantasyonu (giriş noktası, acil durum prosedürü, iletişim kişisi) planlıyoruz; bu, ilk günkü gecikmeleri azaltıyor.",
            },
            {
                soru: "Zirve duruş haftasında operatörlü makine bulmakta zorlanır mıyız?",
                cevap:
                    "Zirve haftalarda operatör kapasitesi de makine kapasitesi kadar kritik hâle geliyor — makine bulunsa bile yeterlilik belgeli operatör bulunamazsa iş yapılamıyor. Bu haftalarda gerektiğinde bölgedeki havuzdan ek operatör görevlendiriyoruz, ama bu görevlendirme tesisin duruş tarihini ne kadar erken bildirdiğine doğrudan bağlı. Son dakika talepte operatör bulma şansı belirgin daralıyor; bu yüzden zirve hafta için tarihinizi mümkün olduğunca erken paylaşmanızı öneriyoruz.",
            },
            {
                soru: "Bir haftada birden fazla tam günlük duruşumuz var; aynı operatör hepsine gidebilir mi?",
                cevap:
                    "Duruşlar farklı günlere dağılıyorsa evet, aynı operatör-makine ekibi hafta boyunca farklı tesislere sırayla gidebiliyor; bu, tesisin her seferinde yeni bir operatörle çalışmak zorunda kalmaması anlamına geliyor ve saha oryantasyonu ilk günden sonra daha hızlı geçiyor. Duruşlar aynı güne denk geliyorsa (iki tesis aynı gün tam gün duruş istiyorsa) tek operatörle karşılamak mümkün değil, ikinci bir operatörlü makine planlıyoruz. Haftalık duruş takviminizi paylaşırsanız hangi günlerde tek, hangi günlerde iki operatör gerektiğini önceden hesaplarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatör yeterlilik belgesi ve çalışma-dinlenme süresi düzenlemesi sektör geneli iş güvenliği mevzuatı kapsamıdır; duruş takvimine göre çoklu tesis rota planlaması firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakım Platformu: Duruş Takvimine Göre Fabrika Rotası",
        giris:
            "Bölgedeki en karmaşık planlama sorunu tek bir tesisin ihtiyacından değil, birden fazla tesisin aynı hafta ya da aynı ay içinde farklı günlerde açılan duruş pencerelerinden doğuyor. Bir hafta içinde beş-altı tesisin kısa ya da uzun pencereleri varsa, bunları rastgele sırayla karşılamak yerine coğrafi konum, pencere uzunluğu ve önceliğe göre kurulmuş bir rota gerekiyor. Bu sayfada anlattığımız tam olarak bu: Eskişehir-Bozüyük hattı boyunca birden fazla tesisin duruş takvimini tek bir haritaya yerleştirip, hangi makinenin hangi gün hangi sırayla hangi adrese gideceğini önceden kuran bir planlama yöntemi. Rota, tek bir makinenin günü boşa geçirmemesi kadar, hiçbir tesisin kendi penceresinde makinesiz kalmaması için de kuruluyor — ikisi aynı anda sağlanmadığında rota işe yaramıyor. Bu, bölgedeki duruş dönemini yöneten sitenin en çok emek verdiği planlama katmanı.",
        maddeler: [
            {
                baslik: "Haftalık duruş haritasının çıkarılması",
                metin:
                    "Hafta başlamadan önce, o hafta duruşu olan tüm tesislerin pencere tarihini, saatini ve tahmini süresini tek bir haritaya yerleştiriyoruz. Bu harita, hangi günün yoğun hangi günün sakin olduğunu, hangi tesislerin coğrafi olarak birbirine yakın düştüğünü gösteriyor. Harita çıkmadan rota kurulamıyor; bu yüzden tesislerden duruş tarihini mümkün olduğunca erken almaya çalışıyoruz.",
            },
            {
                baslik: "Coğrafi kümeleme ile rota verimliliği",
                metin:
                    "Aynı gün birden fazla tesisin penceresi varsa, coğrafi olarak birbirine yakın olanları aynı rotaya, uzak olanları ayrı rotalara ya da ayrı makinelere yerleştiriyoruz. Bu kümeleme, iki tesis arasındaki geçiş süresini minimuma indiriyor ve rotadaki toplam durak sayısını artırıyor. Coğrafi mesafe bölgede kısa olduğu için, doğru kümelemeyle bir günde üç-dört durağa kadar çıkılabiliyor; kümeleme yanlış yapıldığında ise aynı sayıda durak günü zorlukla tamamlıyor.",
            },
            {
                baslik: "Öncelik sıralaması: kritik iş önce",
                metin:
                    "Rotadaki durakların sırası sadece coğrafyaya göre değil, işin kritikliğine göre de belirleniyor. Güvenlik açısından ertelenemez bir kontrol, esnek bir görsel kontrolden önce sıralanıyor; bir tesisin penceresi kısa ve sabitse rotanın başına, esnek bir tesis ise sonuna yerleştiriliyor. Bu sıralama, rotanın herhangi bir noktada gecikmesi durumunda en kritik işlerin zaten tamamlanmış olmasını sağlıyor.",
            },
            {
                baslik: "Rota kırıldığında yeniden planlama",
                metin:
                    "Bir duraktaki iş beklenenden uzarsa ya da beklenmedik bir arıza rotayı bozarsa, geri kalan durakları anlık olarak yeniden değerlendiriyoruz — hangi tesisin ertelenebileceği, hangisinin bölgedeki başka bir makineye devredilebileceği gibi. Bu yeniden planlama, önceden hazırlanmış bir yedek makine havuzu olmadan mümkün değil; bu yüzden yoğun haftalarda bölgedeki filoyu tek başına duraklara değil, olası kırılmalara karşı bir miktar esneklikle planlıyoruz.",
            },
            {
                baslik: "Rota planının tesislere şeffaf paylaşılması",
                metin:
                    "Rotadaki her tesise, makinenin kendilerine hangi saat aralığında ulaşacağını ve rotada kaçıncı sırada olduklarını önceden bildiriyoruz. Bu şeffaflık, tesisin kendi iç hazırlığını (ekiplerin ne zaman sahaya çıkacağı, izinlerin ne zaman açılacağı) rotaya göre ayarlamasını sağlıyor. Rotada bir değişiklik olduğunda bu bilgiyi güncelleyip yeniden paylaşıyoruz; sessiz kalan bir gecikme, tesisin kendi planını da bozuyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Haftalık rota örneği ve karar kriterleri",
                paragraflar: [
                    "Aşağıdaki çerçeve, bir hafta içinde birden fazla tesisin duruşu olduğunda rotayı nasıl kurduğumuzu gösteren genel bir yapıdır; gerçek rota her hafta o haftanın duruş haritasına göre yeniden çıkarılır.",
                ],
                tablo: {
                    basliklar: ["Gün", "Durak sayısı", "Kümeleme kriteri", "Öncelik"],
                    satirlar: [
                        ["Pazartesi", "1-2, uzun pencere", "Tam gün tek adres öncelikli", "Kritik/güvenlik işleri"],
                        ["Salı-Çarşamba", "2-3, orta pencere", "Coğrafi yakınlık", "Sabit saatli tesisler önce"],
                        ["Perşembe", "3-4, kısa pencere", "Sıkı rota, tampon süreli", "Esnek tesisler sona"],
                        ["Cuma", "1-2, esnek", "Haftanın taşan işleri", "Devreye alma kuyruğu"],
                        ["Zirve hafta geneli", "Değişken, yüksek", "Kaydırma + ek makine", "Erken bağlayan önce"],
                    ],
                },
            },
            {
                baslik: "Kaç durak bir günde gerçekçi",
                paragraflar: [
                    "Bir günde kaç tesise uğranabileceği sorusuna sabit bir sayı vermiyoruz, çünkü cevap tamamen o günkü pencerelerin uzunluğuna ve coğrafi dağılımına bağlı. Kısa pencereli ve birbirine yakın üç-dört tesis bir günde rahatlıkla karşılanabilirken, uzun pencereli tek bir tesis günün tamamını alabiliyor. Rota planlamasının değeri tam olarak burada — durak sayısını tahmin etmek yerine, o haftanın gerçek duruş haritasına bakarak hesaplıyoruz.",
                    "Yanlış iyimser bir durak sayısıyla kurulan rota, ilk durakta yaşanan küçük bir gecikmeyle tamamen bozuluyor ve son duraktaki tesis makinesiz kalıyor. Bu yüzden rota planına her zaman gerçekçi bir tampon süresi ekliyoruz; bu, kâğıt üzerinde daha az iddialı görünse de sahada daha güvenilir sonuç veriyor.",
                ],
            },
            {
                baslik: "Bölgesel havuzla rota esnekliği",
                paragraflar: [
                    "Eskişehir ve Bozüyük hattı arasındaki kısa mesafe, rota planlamasına bir esneklik katmanı daha ekliyor: bir rotadaki makine beklenmedik biçimde gecikirse, hattın diğer ucundaki bir makineyi devreye sokmak mümkün olabiliyor. Bu devreye sokma her zaman garanti değil — o gün diğer uçtaki makine de meşgulse elimizde başka seçenek kalmıyor ve bunu açıkça söylüyoruz. Ama bölgesel havuzun varlığı, tek bir rotanın kırılmasının zincirleme bir felakete dönüşme ihtimalini belirgin azaltıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Beş tesisimizin duruşu aynı haftaya denk geldi; hepsine tek makineyle mi hizmet veriyorsunuz?",
                cevap:
                    "Bu, pencerelerin uzunluğuna ve coğrafi dağılımına bağlı; sabit bir cevap vermek yerine önce haftalık duruş haritasını çıkarıyoruz. Kısa pencereli ve birbirine yakın tesisler tek makinenin rotasına sığabilirken, uzun pencereli ya da birbirinden uzak tesisler ayrı makine gerektiriyor. Beş tesisin tarihini, saatini ve tahmini süresini paylaşırsanız, kaç makineyle ve hangi sırayla karşılanabileceğini size somut bir rota planı olarak sunarız.",
            },
            {
                soru: "Rotadaki bir tesiste iş beklenenden uzarsa bizim penceremiz kaçar mı?",
                cevap:
                    "Bu riski tamamen ortadan kaldıramıyoruz ama iki şekilde azaltıyoruz: her durak arasına gerçekçi bir tampon süresi ekliyoruz ve bir gecikme oluştuğunda sıradaki tesise durumu erken bildiriyoruz. Rota planlanırken öncelik sıralaması da yapılıyor — kritik ve sabit saatli tesisler rotanın başına, esnek olanlar sonuna yerleştiriliyor. Gecikme yine de büyükse, bölgedeki diğer bir makineyi devreye sokmayı deniyoruz; bu her zaman mümkün olmasa da mümkün olduğunda rotayı kurtarıyor.",
            },
            {
                soru: "Bir günde gerçekten kaç tesise uğrayabiliyorsunuz?",
                cevap:
                    "Sabit bir sayı vermiyoruz, çünkü bu tamamen o günkü pencerelerin uzunluğuna ve tesislerin birbirine coğrafi yakınlığına bağlı. Kısa pencereli ve yakın üç-dört tesis bir günde rahatlıkla karşılanabilirken, uzun pencereli tek bir tesis günün tamamını alabiliyor. Haftalık duruş haritanızı paylaştığınızda o haftaya özel gerçekçi bir durak sayısı ve rota çıkarıyoruz; iyimser bir sayı verip sahada bozulmasını istemiyoruz.",
            },
            {
                soru: "Rotadaki sıramızı ve saatimizi önceden bilebilir miyiz?",
                cevap:
                    "Evet, rotayı kurduktan sonra her tesise makinenin kendilerine hangi saat aralığında ulaşacağını ve rotada kaçıncı sırada olduklarını bildiriyoruz. Bu bilgi, sizin kendi iç hazırlığınızı (ekiplerin ne zaman sahaya çıkacağı, izinlerin ne zaman açılacağı) buna göre ayarlamanızı sağlıyor. Rotada bir değişiklik olursa bu bilgiyi güncelleyip yeniden paylaşıyoruz; sessiz kalan bir gecikme sizin planınızı da bozar, bu yüzden iletişimi kesmiyoruz.",
            },
            {
                soru: "Bizim tesisimiz rotanın sonunda mı olacak; bu bize dezavantaj mı?",
                cevap:
                    "Rotadaki sıra rastgele değil, işin kritikliğine ve pencerenin esnekliğine göre belirleniyor — sabit saatli ve ertelenemez işler başa, esnek olanlar sona yerleştiriliyor. Sonda olmak her zaman dezavantaj değil; esnek bir pencereniz varsa sondaki konum, rotanın erken kısımlarında yaşanabilecek küçük gecikmelerin size yansımasını da minimuma indiriyor. Sıralamanın gerekçesini talep ederseniz açıkça paylaşırız; sizin işiniz aslında daha kritikse bunu bildirdiğinizde sırayı yeniden değerlendiririz.",
            },
            {
                soru: "İki hattın (Eskişehir-Bozüyük) arasında makine kaydırarak rota kurtarabiliyor musunuz?",
                cevap:
                    "Bazen evet — hattın kısa mesafesi, bir rotadaki makine gecikirse diğer uçtaki bir makineyi devreye sokmayı mümkün kılıyor. Ama bu her zaman garanti değil; o gün diğer uçtaki makine de meşgulse elimizde başka seçenek kalmıyor ve bunu açıkça söylüyoruz. Bölgesel havuzun asıl faydası, tek bir rotanın kırılmasının zincirleme bir soruna dönüşme ihtimalini azaltması; mucizevi bir çözüm değil, ek bir esneklik katmanı olarak düşünmenizi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir-Bozüyük hattı içi kısa karayolu mesafesi kamuya açık coğrafi gerçektir; haftalık duruş haritası çıkarma, coğrafi kümeleme ve rota önceliklendirme firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Duruş Döneminde Zor Zemin ve Açık Arazi Platform Kiralama",
        giris:
            "Duruş listesinin bir kısmı fabrika binasının içinde değil, açık sahada geçer: dış depolama alanındaki çelik konstrüksiyon, saha sınırındaki aydınlatma direği, henüz asfaltlanmamış genişleme alanındaki ekipman. Bu tip işlerde zemin, kapı ölçüsünden daha belirleyici bir kriter hâline gelir — stabilize, toprak ya da düzensiz zemin, standart lastikli tekerlekli makinenin hareketini kısıtlayabilir ya da makineyi güvensiz kılabilir. Bölgedeki duruş dönemlerinde açık saha kalemleri genellikle iç mekân kalemleriyle aynı pencereye giriyor ve bu, iki farklı makine sınıfının aynı gün planlanmasını gerektiriyor. Bu sayfada anlattığımız, zemin tipine göre doğru makine sınıfının nasıl seçildiği, mevsime bağlı zemin değişiminin nasıl değerlendirildiği ve düzensiz arazide erişimin nasıl güvenli hâle getirildiğidir.",
        maddeler: [
            {
                baslik: "Zemin tipine göre makine sınıfı",
                metin:
                    "Stabilize ya da sıkıştırılmış toprak zeminde dizel arazi tipi platform standart tercih; büyük lastikleri ve yüksek yer tutma gücüyle bu tip zeminlerde güvenle ilerliyor. Zemin çok yumuşak ya da düzensizse arazi tipinin de sınırları var; böyle durumlarda geçici plaka döşeme ya da alternatif bir güzergâh değerlendiriliyor. Zemin tipini duruş öncesi keşifte kontrol edip uygun sınıfı belirliyoruz.",
            },
            {
                baslik: "Mevsime bağlı zemin sertliği değişimi",
                metin:
                    "Açık saha zemini mevsime göre belirgin değişir; kuru dönemde sağlam olan bir zemin, yağış sonrası yumuşayıp makinenin batma riskini artırabilir. Duruş tarihi netleştiğinde, o dönemin hava koşulunu ve zeminin güncel durumunu tesisle birlikte değerlendiriyoruz; riskli görünen bir zeminde geçici takviye ya da erişim rotası değişikliği öneriyoruz.",
            },
            {
                baslik: "Eğimli ve düzensiz arazide güvenli çalışma açısı",
                metin:
                    "Saha sınırındaki bazı noktalar düz değil, hafif eğimli ya da düzensiz zeminde bulunur. Arazi tipi platformların çoğu belirli bir eğim açısına kadar güvenle çalışabiliyor; bu sınırı aşan bir eğimde makine kullanılmıyor, alternatif erişim yöntemi (örneğin zemin düzeltme ya da farklı bir yaklaşım noktası) değerlendiriliyor. Eğim açısını keşifte ölçüyor, sınırın aşılıp aşılmadığını önceden belirliyoruz.",
            },
            {
                baslik: "İç mekân ve açık saha kalemlerinin aynı günde koordinasyonu",
                metin:
                    "Bazı duruş günlerinde hem iç mekân hem açık saha kalemi olabiliyor; bu iki iş farklı makine sınıfı gerektirdiği için genellikle iki ayrı makine planlanıyor. İki makinenin aynı gün, farklı bölgelerde çalışması güzergâh çakışmasını önlemek için duruş planına ayrı hatlar olarak yazılıyor.",
            },
            {
                baslik: "Açık sahada güvenlik çevresi ve rüzgâr etkisi",
                metin:
                    "Açık sahada çalışırken rüzgâr, kapalı alandakinden farklı bir risk faktörü olarak devreye giriyor; belirli bir rüzgâr hızının üzerinde yüksekte çalışma durduruluyor. Duruş planına bu limiti yazıyor, rüzgârlı günlerde iş programını esnek tutmayı öneriyoruz. Ayrıca açık sahada makine çevresine güvenlik bandı ve işaretleme koyuyoruz, çünkü açık alan trafiğe daha açık.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre sınıf seçim çerçevesi",
                paragraflar: [
                    "Aşağıdaki çerçeve, açık saha duruş kalemlerinde zemin tipine göre hangi makine sınıfının önerildiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Önerilen sınıf", "Mevsim riski", "Ek önlem"],
                    satirlar: [
                        ["Sıkıştırılmış stabilize", "Dizel arazi tipi", "Düşük", "Genellikle gerekmez"],
                        ["Toprak, kuru dönem", "Dizel arazi tipi", "Orta (yağış sonrası)", "Zemin gözlemi"],
                        ["Toprak, yağış sonrası", "Sınırlı/riskli", "Yüksek", "Plaka döşeme veya erteleme"],
                        ["Hafif eğimli açık alan", "Arazi tipi, açı sınırında", "Değişken", "Eğim ölçümü"],
                        ["Düz beton saha çevresi", "Standart makaslı da uygun", "Düşük", "Gerekmez"],
                    ],
                },
            },
            {
                baslik: "Yağış sonrası erteleme kararı",
                paragraflar: [
                    "Duruş tarihi kesinleşmiş olsa bile, açık saha kaleminin hemen öncesinde yağış olduysa zemin durumunu yeniden değerlendiriyoruz. Bazı durumlarda kısa bir kuruma süresi beklemek, makineyi riskli bir zeminde zorlamaktan daha güvenli ve sonuçta daha hızlı oluyor. Bu kararı tesisle birlikte, o günkü saha gözlemine göre veriyoruz; duruş penceresinin geri kalanı iç mekân kalemleriyle doldurulup açık saha kalemi zeminin izin verdiği ilk uygun ana kaydırılabiliyor.",
                    "Bu esneklik ancak duruş planında açık saha kalemleri için bir yedek gün ya da saat dilimi ayrıldığında işliyor; plan bunu içermiyorsa erteleme, bir sonraki duruş penceresine kadar beklemek anlamına gelebiliyor.",
                ],
            },
            {
                baslik: "Rüzgâr limiti ve açık saha güvenliği",
                paragraflar: [
                    "Yüksekte çalışma için üretici tarafından belirlenen rüzgâr hızı limitleri, açık sahada kapalı alana göre çok daha sık devreye giriyor; kapalı alan rüzgârdan büyük ölçüde korunurken açık saha doğrudan etkileniyor. Duruş planına bu limiti baştan yazıyor, rüzgârlı bir günde iş programını mümkünse esnek tutmayı, mümkün değilse rüzgârın düştüğü saat dilimine kaydırmayı öneriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamızın bir kısmı henüz asfaltlanmamış toprak zemin; platform buraya girebilir mi?",
                cevap:
                    "Zeminin kuruluğuna ve sıkışıklığına bağlı; kuru ve sıkıştırılmış toprak zeminde dizel arazi tipi platform genellikle güvenle çalışabiliyor. Zemin yumuşak ya da düzensizse riski keşifte değerlendiriyor, gerekirse geçici plaka döşeme öneriyoruz ya da erişim rotasını değiştiriyoruz. Zeminin güncel durumu hakkında fotoğraf ve son yağış bilgisini paylaşırsanız, duruş tarihinden önce uygun sınıfı ve gerekli önlemleri netleştirebiliriz.",
            },
            {
                soru: "Duruş tarihimizden birkaç gün önce yağmur yağarsa açık saha kalemi ertelenir mi?",
                cevap:
                    "Gerekebilir, ve bunu dürüstçe söylüyoruz — yağış sonrası zemin durumunu yeniden değerlendiriyor, riskli görünüyorsa kısa bir kuruma süresi beklemeyi öneriyoruz. Bu esnekliğin işlemesi için duruş planında açık saha kalemlerine bir yedek gün ya da saat dilimi ayrılmış olması gerekiyor; bu payı önceden konuşursak pencerenin geri kalanını iç mekân kalemleriyle doldurup açık saha işini zeminin izin verdiği ilk uygun ana kaydırabiliyoruz.",
            },
            {
                soru: "Saha sınırımızdaki nokta hafif eğimli bir tepede; makine oraya çıkabilir mi?",
                cevap:
                    "Eğim açısına bağlı; arazi tipi platformların çoğu belirli bir açıya kadar güvenle çalışabiliyor, bu sınırı aşan bir eğimde makineyi kullanmıyoruz. Eğimi keşifte ölçüyor, sınırın aşılıp aşılmadığını önceden belirliyoruz. Eğim sınırı aşılıyorsa alternatif bir yaklaşım noktası ya da zemin düzeltmesi gibi seçenekleri değerlendiriyoruz; bunu sahada denemeden önce netleştirmek daha güvenli.",
            },
            {
                soru: "Aynı gün hem içeride hem dışarıda işimiz var; iki farklı makine mi gerekiyor?",
                cevap:
                    "Genellikle evet, çünkü iç mekân ve açık saha farklı makine sınıfı gerektiriyor — iç mekânda akülü, dışarıda arazi tipi. İki makineyi aynı gün, farklı bölgelerde çalışacak şekilde planlıyor, güzergâh çakışmasını önlemek için duruş planına ayrı hatlar çiziyoruz. Bazı sınırlı durumlarda (kapı ölçüsü uygunsa ve dış saha zemini sertse) tek makine her iki işi de karşılayabiliyor; bunu keşifte değerlendiriyoruz.",
            },
            {
                soru: "Rüzgârlı bir günde açık sahada çalışma planlıyoruz; bu bir risk mi?",
                cevap:
                    "Evet, belirli bir rüzgâr hızının üzerinde yüksekte çalışma durduruluyor; bu limit açık sahada kapalı alana göre çok daha sık devreye giriyor çünkü açık alan rüzgârdan doğrudan etkileniyor. Duruş planına bu limiti baştan yazıyor, rüzgârlı bir günde iş programını mümkünse esnek tutmayı öneriyoruz. Rüzgâr tahmini kritikse duruş tarihini planlarken bu bilgiyi de değerlendirmenizi öneririz; sahada makineyi zorlamak yerine kısa bir bekleme çoğu zaman daha güvenli çıkıyor.",
            },
            {
                soru: "Açık saha zemininin taşıma kapasitesini nasıl kontrol ediyorsunuz?",
                cevap:
                    "Duruş öncesi keşifte zeminin görsel durumunu (çatlak, çökme, yumuşama belirtisi) kontrol ediyor, gerekirse basit bir sertlik testi yapıyoruz. Şüpheli bir zeminde ayak ya da tekerlek altına geçici plaka veya takoz koyuyoruz. Kesin bir zemin taşıma raporu gerekiyorsa (örneğin çok ağır bir makine sınıfı planlanıyorsa) bunu tesisin kendi zemin etüdüyle birlikte değerlendiriyoruz; bu konuda geoteknik uzmanlığımız sınırlı, ciddi şüphe durumunda uzman görüşü öneriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Arazi tipi platformların zemin ve eğim sınırları üretici teknik özellikleridir; mevsime bağlı zemin değerlendirmesi ve rüzgâr limiti sektör geneli saha güvenlik pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },
};
