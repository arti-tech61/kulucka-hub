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
};
