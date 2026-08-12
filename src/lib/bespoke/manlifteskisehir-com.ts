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
};
