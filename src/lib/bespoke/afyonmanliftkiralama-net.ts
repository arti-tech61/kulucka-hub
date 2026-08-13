// ═══════════════════════════════════════════════════════════════════════════
// afyonmanliftkiralama.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Afyon OSB FABRİKA ve LOJİSTİK DEPOLARI için manlift kiralama.
// Mercek: genel OSB fabrika holü bakımı (aydınlatma, havalandırma), depo raf
// sistemleri, kot+2 hesabı, standart üç-soru rehberliği (tavan kotu, zemin
// cinsi, şarj/elektrik). Bu dosya kardeş domainlerden farklı olarak SEKTÖR
// HİKAYESİ anlatmaz — jenerik fabrika/depo bakım prosedürünü ve doğru sınıf
// seçimini anlatır.
//
// ⚠️ Kesişen slug'lar: afyonplatform.com.tr'de "afyonkarahisar-merkez"
// (mermer+termal+gıda), afyonmanlift.com'da "afyonkarahisar-merkez" (gıda
// tesisleri), "dinar-osb" (OSB ortak alan/parsel talepleri), "bolvadin-osb"
// (proses tesisi silo-kule), afyonplatform.com.tr'de "bolvadin" (tarımsal
// sanayi kurutma-silo), afyonplatform.com.tr'de "usak-osb-cevre-ili" (sert
// ortamdan lifli ortama geçiş anlatısı). BU DOSYA hiçbirinin anlatı biçimini,
// tablosunu veya SSS'sini kullanmaz; jenerik "üç soru → doğru sınıf" akışı ve
// kot+2 hesap mantığı üzerinden ilerler. "afyon-merkez" ve "afyonkarahisar-osb"
// ayrı sayfa anahtarlarıdır, "afyonkarahisar-merkez" ile karıştırılmaz.
//
// Sayfa iskeleti: giriş paragrafı, beş madde, üç ek bölüm (ilkinde tablo),
// altı uzun SSS ve kaynak notu. Tarih: 2026-08-13.
// Tesis adı, kapasite ve rakam kullanılmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const AFYONMANLIFTKIRALAMA_NET: Record<string, BespokeIcerik> = {
    "bolge:afyonkarahisar-osb": {
        h1: "Afyonkarahisar OSB’de Fabrika ve Depo İçin Manlift Kiralama",
        giris:
            "Afyonkarahisar Organize Sanayi Bölgesi’ndeki bir fabrikaya manlift kiralarken karşımıza çıkan soru genellikle sanıldığından basittir: parselde ne tür bir hacim var, o hacmin tavanı kaç metrede duruyor ve zemin ne kadar düz. Bölgedeki üretim parselleri birbirinden farklı sektörlerde çalışsa da, yüksekte çalışma ihtiyacının büyük bölümü aynı üç kalemde toplanır — hol aydınlatması, çatı altı havalandırma sistemi ve depo tarafındaki raf-koridor düzeni. Bu üç kalem, sektörden bağımsız olarak neredeyse her OSB parselinde tekrar eder ve bu yüzden doğru makineyi seçmek karmaşık bir mühendislik kararı değil, üç netleşmiş bilgiden çıkan doğrudan bir eşleştirmedir. Biz bu sayfada süslü bir sektör anlatısı kurmuyoruz; OSB’de en sık karşılaştığımız hacim tipini, o hacme uygun makine sınıfını ve teklif vermeden önce sizden isteyeceğimiz üç soruyu düzenli biçimde anlatıyoruz.",
        maddeler: [
            {
                baslik: "Üretim holünde aydınlatma ve havalandırma bakımı",
                metin:
                    "OSB’deki üretim holleri çoğunlukla çelik konstrüksiyon çatılı, tek katlı ve geniş açıklıklı yapılardır; bu holün tavanına asılı aydınlatma armatürleri, havalandırma fanları ve aspirasyon kanalları düzenli servis ister. Bu iş için gereken yükseklik, tavan kotunun kendisi değil, tavan kotuna sepet tabanının ulaşabileceği mesafedir — kural olarak tavan kotuna iki metre eklenerek gereken çalışma yüksekliği bulunur. Zemin çoğunlukla düz betondur ve bu, akülü makaslı sınıfı bölgedeki en pratik çözüm hâline getirir; forklift trafiği olan hollerde çalışma alanı bariyerle ayrılır.",
            },
            {
                baslik: "Depo raf sistemlerinde koridor ve raf üstü erişim",
                metin:
                    "Lojistik ve mamul depolarında iş, raf sisteminin kendisiyle ilgilidir: raf üstü aydınlatma, yangın algılama dedektörleri, sprinkler hattı ve raf konstrüksiyonunun periyodik kontrolü. Buradaki belirleyici ölçü raf yüksekliği değil koridor genişliğidir; makinenin şasesi koridora sığmadığında iş baştan tıkanır. Raflar arası koridor genişliği ve raf yüksekliği bilindiğinde dar gövdeli, iz bırakmayan tekerlekli bir sınıf seçilir. Forklift kullanılan depolarda çalışma saatleri, mal kabul ve sevkiyat yoğunluğunun dışına yazılır.",
            },
            {
                baslik: "Kot+2 hesabı: doğru sınıfı bulmanın kısayolu",
                metin:
                    "OSB’de teklif isteyen işletmelerin çoğu bize doğrudan makine yüksekliği sorar, ama asıl gereken bilgi çalışılacak noktanın zeminden kotudur. Standart hesap şudur: çalışma noktasının kotuna, operatörün sepet içinde kollarını kaldırarak erişebileceği yaklaşık iki metrelik payı eklemek, gereken çalışma yüksekliğini verir. Bu basit toplama, sahaya gitmeden doğru sınıf aralığını belirlememizi sağlar. Kotu yanlış tahmin etmek, sahada ya yetersiz kalan ya da gereksiz büyük ve pahalı bir makineyle karşılaşmak demektir.",
            },
            {
                baslik: "Çelik konstrüksiyon ve çatı altı işlerinde erişim",
                metin:
                    "Bazı parsellerde iş, holün içinden çok çatı ve çelik konstrüksiyonun kendisiyle ilgilidir: çatı ışıklığı değişimi, oluk-iniş borusu onarımı, çelik kolon ve kiriş üzerindeki detay kaynağı, cephe paneli montaj desteği. Bu kalemler tekil değil dizidir; makine parselde birkaç gün kalır. Uzun kalışlarda yağ-filtre kontrolü ve arıza hâlinde ikame süresi teklifte baştan belirtilir. Şantiye zemininde çalışılıyorsa arazi kabiliyeti yüksek bir sınıf tercih edilir, tamamlanmış beton zeminde ise standart makaslı yeterlidir.",
            },
            {
                baslik: "Kapalı hacimde güç tipi ve şarj planı",
                metin:
                    "Kapalı üretim ve depo hacimlerinde egzoz üreten dizel makine kullanılmaz; akülü sınıflar zorunludur. Bu, planlamaya tek bir ek soru getirir: makinenin vardiya boyunca kesintisiz çalışması gerekiyorsa şarj noktasının nerede olduğu ve kaç saatlik bir programın planlandığı bilinmelidir. Kısa süreli işlerde bu genellikle sorun çıkarmaz; birkaç günü aşan programlarda ise ara şarj penceresi veya yedek akü seçeneği baştan konuşulur. Açık şantiye alanlarında ise dizel veya arazi tipi sınıflar daha uygun olabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB’de hacim tipine göre sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, Afyonkarahisar OSB’de en sık karşılaştığımız hacim tiplerini ve her biri için önerdiğimiz makine sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Önerilen sınıf"],
                    satirlar: [
                        ["Üretim holü", "Aydınlatma, havalandırma fanı", "Tavan kotu", "Akülü makaslı"],
                        ["Lojistik / mamul deposu", "Raf üstü, dedektör, sprinkler", "Koridor genişliği", "Dar gövdeli makaslı"],
                        ["Çelik konstrüksiyon çatı", "Işıklık, oluk, kaynak desteği", "Erişim mesafesi", "Eklemli bomlu"],
                        ["Açık şantiye alanı", "Cephe panel, çelik montaj", "Zemin cinsi", "Arazi tipi dizel"],
                        ["Yükleme kapısı üstü", "Kapı mekanizması, körük", "Kapı yüksekliği", "Kompakt akülü"],
                        ["İdari bina / ofis bloğu", "Aydınlatma, asma tavan", "Standart koşul", "Dikey veya kompakt makaslı"],
                    ],
                },
            },
            {
                baslik: "Teklif öncesi sorduğumuz üç soru",
                paragraflar: [
                    "OSB’deki fabrika ve depo taleplerinde teklifi tek turda netleştiren şey, uzun bir form değil üç doğrudan sorudur. Birincisi zemindir: çalışma alanı düz beton mu, epoksi kaplı mı, yoksa henüz tamamlanmamış bir şantiye zemini mi? İkincisi kottur: çalışılacak noktanın zeminden yüksekliği nedir, ölçülemiyorsa tahmini tavan yüksekliği yeterlidir. Üçüncüsü erişimdir: makinenin geçeceği kapı ve koridorların eni ve yüksekliği nedir, forklift veya başka bir ekipmanla aynı alanı paylaşacak mı?",
                    "Bu üç sorunun cevabı elimizde olduğunda sınıf seçimi neredeyse kendiliğinden ortaya çıkar ve teklif sahada değişmez. Cevaplardan biri eksik kaldığında ise iki risk doğar: ya sahaya sığmayan bir makine gönderilir ya da güvenli tarafta kalmak için gereğinden büyük ve pahalı bir sınıf teklif edilir. Birkaç fotoğraf ve bu üç cevap, bu belirsizliğin tamamını ortadan kaldırır.",
                ],
            },
            {
                baslik: "OSB’de birden fazla parsele hizmet vermek",
                paragraflar: [
                    "OSB içinde komşu parsellerde çalışan işletmeler için en ekonomik model, makineyi tek seferde bölgeye indirip birden fazla parseli aynı hafta içinde dolaştırmaktır. Nakliye, kiralama süresinden bağımsız sabit bir kalemdir; bu kalem parseller arasında bölündüğünde her işletmenin ödediği pay belirgin biçimde düşer. Bunun tek koşulu, tarihlerin önceden bize bildirilmiş olmasıdır — son anda gelen tekil talepler de karşılanır, ancak sevkiyat bedeli o durumda tek başına kalır.",
                    "Uygulamada işletmelerden istediğimiz şey basittir: bakım kaleminizi ve tercih ettiğiniz haftayı bize iletin. O hafta bölgede planlanmış bir program varsa sizi araya ekler, sevkiyat payınızı düşürürüz; yoksa yeni bir program kurarız ve komşu parsellere de haber veririz. Her işletme kendi teklifini ve kendi teslim tutanağını alır; aranızda hiçbir ticari bağ oluşmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tavan yüksekliğini tam bilmiyoruz; yine de teklif alabilir miyiz?",
                cevap:
                    "Alabilirsiniz, çünkü kesin ölçü olmadan da yaklaşık bir aralık belirlemek mümkündür. Standart bir üretim holünde tavan kotu genellikle belirli bir bantta değişir ve siz bize holün yaklaşık yüksekliğini, çatının düz mü yoksa çift eğimli mi olduğunu söylerseniz biz kot+2 hesabıyla güvenli bir sınıf aralığı öneririz. Kesinleşmiş ölçüyle çalışmak her zaman daha isabetlidir; bu yüzden mümkünse metre veya lazer ölçerle tek bir noktanın kotunu almanızı öneririz. Yine de tahmini bilgiyle de makul bir teklif çıkarabiliriz, sahada son kontrolü biz yaparız.",
            },
            {
                soru: "Depo koridorlarımız dar; her makine sığar mı?",
                cevap:
                    "Sığmaz, bu yüzden koridor genişliği bizim için raf yüksekliğinden daha kritik bir bilgidir. Standart makaslı sınıfların şase genişliği dar koridorlara sığmayabilir; bu durumda dar gövdeli bir makaslı veya dikey bir sınıf tercih edilir. Koridor genişliğini, raf yüksekliğini ve sepetin istif yığınına ne kadar yaklaşabileceğini bilmemiz yeterlidir. Zemin epoksi veya cilalı ise iz bırakmayan tekerlek tipi ayrıca belirlenir. Bu üç ölçü elimizde olduğunda sınıf seçimini tek turda netleştiririz.",
            },
            {
                soru: "Forklift trafiği olan bir depoda çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, ancak çalışma alanı fiziksel olarak ayrılır ve saat planı depo yönetimiyle birlikte kurulur. Uygulamamız, mal kabul ve sevkiyat saatlerinin dışına yazılmış bir pencerede ilerlemektir; bu saatlerde koridorlar sakinleşir ve makine kesintisiz hareket eder. Bunun mümkün olmadığı sürekli hareketli depolarda çalışma alanı bariyerle çevrilir, güzergâh üzerine yönlendirme konur ve iş kısa bloklara bölünerek her blok sonunda koridor açılır. Depo trafiğinizin yoğun olduğu saatleri bize önceden bildirirseniz gün planını buna göre kurarız.",
            },
            {
                soru: "Şarj noktamız yok; akülü makine kapalı hacimde nasıl çalışır?",
                cevap:
                    "Kısa süreli işlerde genellikle sorun çıkmaz; makine dolu akü ile gelir ve tek günlük bir program bu kapasiteyle tamamlanır. Birkaç günü aşan programlarda ise şarj planı gerekir ve iki seçenek sunarız: tesisinizde geçici olarak kullanılabilecek bir priz noktası belirlemek, ya da vardiya sonunda makineyi şarj için dışarı çıkarmak. Şarj noktası hiç yoksa yedek akü grubu ile çalışan bir sınıf öneririz. Programın tahmini süresini ve tesisinizdeki elektrik altyapısını bize bildirirseniz en uygun düzeni birlikte kurarız.",
            },
            {
                soru: "Çatı ve çelik konstrüksiyon işlerinde makine kaç gün kalır?",
                cevap:
                    "Bu, kalem sayısından çok makinenin kaç kez yer değiştireceğine bağlıdır. Çatı ışıklığı, oluk ve kaynak desteği gibi kalemler genellikle parsel içinde birden fazla noktaya dağılır ve her nokta yeni bir konumlanma demektir. Kısa bir kalem listesi bile noktalar arası mesafe fazlaysa birkaç günü bulabilir. Uzun kalışlarda yağlama ve filtre kontrol aralığını kısaltır, arıza hâlinde ikame süresini sözleşmede baştan yazarız; bu ziyaretler kiralama süresinden düşülmez. Kalem listenizi ve parsel krokinizi paylaşırsanız süre tahminini önceden veririz.",
            },
            {
                soru: "Bölgede birkaç parselimiz var; hepsini tek seferde bitirebilir miyiz?",
                cevap:
                    "Bitirebilirsiniz ve bu OSB’de kiralamanın en ekonomik biçimidir. Nakliye, kiralama süresinden bağımsız sabit bir kalemdir; makine bölgeye bir kez indirilir, parseller arasında kendi tekerleğiyle veya kısa mesafeli taşımayla geçer. Her parsel kendi teklifini ve kendi teslim tutanağını alır; ortak olan yalnızca bölgeye giriş-çıkış kalemidir. Yapmanız gereken tek şey, hangi parselde hangi kalemin hangi kotta yapılacağını içeren bir liste çıkarmaktır; gün planını en az geçişle biz kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Afyonkarahisar OSB’nin karma sanayi ve lojistik yapısı kamuya açık genel bilgidir; kot+2 hesabı, üç-soru rehberliği ve sınıf eşleşmesi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:afyon-merkez": {
        h1: "Afyon Merkezde Fabrika ve Depo Yapıları İçin Manlift Kiralama",
        giris:
            "Afyon merkez sınırları içinde manlift talebi gönderen işletmelerin büyük bölümü, şehrin dışa dönük mermer ve termal kimliğinden çok, gündelik üretim ve depolama ihtiyacından gelir: küçük ve orta ölçekli imalathaneler, ambalaj ve gıda paketleme atölyeleri, nakliye ve lojistik firmalarının depoları, servis ve bakım atölyeleri. Bu yapıların ortak özelliği, her birinin kendine has bir sektör hikâyesi taşımak yerine benzer bir mimariyi paylaşmasıdır: tek katlı, çelik çatılı, orta yükseklikte bir hol ve buna bitişik bir depo veya sundurma. Bu sayfada merkezdeki bu tip yapılar için nasıl çalıştığımızı, hangi bilgiyle teklif çıkardığımızı ve hangi makine sınıfının hangi hacme gittiğini anlatıyoruz — sektöre özgü bir anlatı değil, merkezdeki fabrika ve depo işlerinin ortak paydasını.",
        maddeler: [
            {
                baslik: "Küçük ve orta ölçekli imalathanelerde standart bakım",
                metin:
                    "Merkezdeki imalathanelerin çoğu, geniş sanayi parsellerinden farklı olarak daha kompakt bir hacimde çalışır: dar bir hol, alçak bir tavan ve sık aralıklı kolon dizisi. Buradaki iş kalemleri aydınlatma değişimi, havalandırma fanı bakımı ve çatı sacındaki küçük onarımlardır. Hacmin dar olması, makine seçiminde şase genişliğini yükseklikten daha belirleyici kılar; bu yüzden merkezdeki çoğu imalathaneye kompakt gövdeli akülü bir sınıf gönderilir. Kapı genişliği ve iç manevra alanı, teklif öncesi mutlaka sorduğumuz iki ölçüdür.",
            },
            {
                baslik: "Ambalaj ve paketleme atölyelerinde hat üstü işler",
                metin:
                    "Ambalaj malzemesi üreten veya paketleme yapan atölyelerde üst kot, bant üstü aydınlatma, aspirasyon ağızları ve taşıyıcı askı noktalarıyla doludur. Bu tesislerde çalışırken hattın durup durmadığı belirleyicidir; hat çalışırken üstünde serbest parça bırakılmaz, sepet altına toplama tablası konur. Bu tür atölyelerde makine genellikle bir günden kısa sürede işini bitirir, çünkü kalem sayısı azdır ve noktalar birbirine yakındır. Kısa süreli işlerde nakliye payının toplam maliyet içindeki oranı yüksek kalabilir; bu yüzden birden fazla kalemi aynı sevkiyata toplamayı öneririz.",
            },
            {
                baslik: "Nakliye ve lojistik depolarında raf ve rampa işleri",
                metin:
                    "Merkezdeki nakliye firmalarının depoları, raf sistemi ile yükleme rampasını bir arada barındırır. Raf üstü aydınlatma ve dedektör bakımı koridor genişliğine göre planlanırken, rampa üstü kalemler — sundurma sacı, kapı mekanizması, dış aydınlatma — araç trafiğine göre sıralanır. İki bölge farklı ritimde çalışır: raf tarafı depo sakinleştiğinde, rampa tarafı ise sevkiyat arası boşluklarda ele alınır. Bu iki pencereyi aynı sevkiyat içinde birleştirmek, tek seferde iki farklı işi bitirmenin en pratik yoludur.",
            },
            {
                baslik: "Servis ve bakım atölyelerinde çatı ve vinç hattı",
                metin:
                    "Araç ve makine servisi yapan atölyelerde çelik makaslı çatı, tek hacimli plan ve bazen hafif bir kaldırma düzeneği bulunur. Buradaki kalemler çatı ışıklığı değişimi, aydınlatma yenileme ve kaldırma düzeneğinin ray hattı bakımıdır. Kaldırma düzeneği bulunan hacimlerde çalışırken düzeneğin enerjisi kesilir ve çalışma bölgesine girmeyeceği yazılı olarak teyit edilir; bu, üzerinde pazarlık yapılmayan tek maddedir. Zemin genellikle beton ve düzdür, bu da standart akülü makaslı sınıfı burada en uygun seçenek yapar.",
            },
            {
                baslik: "Merkezde kısa işleri birleştirmenin ekonomisi",
                metin:
                    "Merkez sınırları içindeki işletmelerin büyük kısmı birbirine yakın konumlanır ve bu, kısa işleri birleştirmek için elverişli bir zemin oluşturur. Aynı hafta içinde birkaç ayrı adreste küçük kalemler varsa, makineyi bir kez merkeze indirip adresler arasında dolaştırmak, her adres için ayrı sevkiyat çağırmaktan belirgin biçimde ucuza gelir. Bu modelde her işletme kendi teklifini ve kendi teslim tutanağını alır; ortak olan yalnızca merkeze giriş-çıkış kalemidir. Tarihini önceden bildiren işletme hem sırayı hem düşük birim maliyeti alır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezdeki yapı tipi ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, Afyon merkezde en sık çalıştığımız yapı tiplerini ve her biri için tercih ettiğimiz sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Önerilen sınıf"],
                    satirlar: [
                        ["Küçük imalathane", "Aydınlatma, fan, çatı onarımı", "Kapı genişliği", "Kompakt akülü"],
                        ["Ambalaj / paketleme atölyesi", "Hat üstü aydınlatma, askı", "Hat duruşu", "Akülü, tablalı"],
                        ["Nakliye deposu", "Raf üstü, rampa, dış aydınlatma", "Koridor + trafik", "Dar gövdeli makaslı"],
                        ["Servis / bakım atölyesi", "Çatı, ışıklık, vinç hattı", "Kaldırma düzeneği", "Standart makaslı"],
                        ["İdari ofis bloğu", "Asma tavan, aydınlatma", "Standart koşul", "Dikey"],
                        ["Cadde üstü dükkân / vitrin", "Tabela, klima", "Dar sokak", "Kompakt dikey"],
                    ],
                },
            },
            {
                baslik: "Kısa iş listesinde nakliyenin payı",
                paragraflar: [
                    "Merkezdeki küçük ölçekli işletmelerin en sık sorduğu soru, tek kalemlik bir iş için kiralamanın mantıklı olup olmadığıdır. Cevabımız açıktır: tek başına genellikle mantıklı değildir, çünkü nakliye kiralama süresinden bağımsız sabit bir kalemdir ve kısa bir işte bu kalemin payı büyür. Bunun yerine iki yol öneririz. Birincisi, bakım listenizi birkaç kaleme çıkarıp tek sevkiyatta bitirmek — aydınlatma, çatı, tabela gibi kalemleri aynı güne toplamak neredeyse hiç ek maliyet doğurmaz.",
                    "İkincisi, merkeze o hafta zaten planlanmış bir sevkiyat varsa işinizi ona eklemektir; bu durumda nakliye payı işler arasında bölünür ve sizin payınız belirgin biçimde düşer. Talep sırasında bize tarihinizin esnek olup olmadığını söylerseniz, bölgedeki en yakın programa denk gelip gelmediğimizi kontrol eder, size haber veririz.",
                ],
            },
            {
                baslik: "Teklif için gereken bilgi ve karşılığı",
                paragraflar: [
                    "Merkezdeki bir talebin teklifini tek turda çıkarabilmemiz için üç bilgiye ihtiyacımız var: çalışılacak noktanın zeminden kotu, makinenin geçeceği en dar kapı veya koridorun eni ve yüksekliği, ve zeminin cinsi (beton, epoksi, henüz tamamlanmamış şantiye zemini). Bu üç bilgi netleştiğinde sınıf seçimi kendiliğinden ortaya çıkar ve sahada değişmez.",
                    "Eksik bırakılan tek bir bilgi bile iki sonuçtan birini doğurur: ya makine sahaya sığmaz ya da güvenli tarafta kalmak için gereğinden büyük ve pahalı bir sınıf teklif edilir. Birkaç fotoğraf, bu belirsizliğin tamamını ortadan kaldıran en ucuz hazırlıktır ve teklif almadan önce göndermenizi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İmalathanemiz küçük; büyük bir makine sığmaz diye endişeleniyoruz.",
                cevap:
                    "Bu endişe yerinde, bu yüzden kompakt gövdeli sınıfları özellikle merkezdeki küçük imalathaneler için tutuyoruz. Belirleyici olan makinenin yüksekliği değil, kapıdan ve iç koridorlardan geçebilecek gövde genişliğidir. Bize kapı genişliğini ve içeride makinenin döneceği en dar noktayı bildirirseniz, o ölçüye uygun en dar gövdeli sınıfı öneririz. Bazı çok dar hacimlerde dikey tip modeller, makaslı sınıftan daha uygun bir çözüm olabilir; karar, ölçüler elimize geçtiğinde netleşir.",
            },
            {
                soru: "Ambalaj hattımız çalışırken üstünde iş yapılabilir mi?",
                cevap:
                    "En doğru yol hattın durmasıdır; zaten planlı bir temizlik veya bakım duruşunuz varsa iş oraya yazıldığında ek maliyet doğmaz. Zorunlu hâllerde çalışılan kesim örtülür, sepet altına toplama tablası konur, el aletleri bağlanır ve alan bariyerlenir; bu düzen riski azaltır, ortadan kaldırmaz. Kıvılcım üreten hiçbir kalem açık ürünün üstünde yapılmaz. Hattın haftalık duruş takvimini paylaşırsanız işi o pencereye yerleştiririz.",
            },
            {
                soru: "Depomuzda forklift trafiği var; ne zaman çalışırsınız?",
                cevap:
                    "Mal kabul ve sevkiyat saatlerinin dışında çalışmayı tercih ederiz; bu saatlerde koridorlar sakinleşir ve iş kesintisiz ilerler. Trafiğin hiç durmadığı depolarda çalışma alanı bariyerle ayrılır, güzergâh üzerine yönlendirme konur ve iş kısa bloklara bölünerek her blok sonunda koridor açılır. Depo yönetiminizin günlük ritmini bize önceden bildirirseniz gün planını en az kesişmeyle kurarız.",
            },
            {
                soru: "Atölyemizde vinç hattı var; bakım sırasında durdurmamız gerekir mi?",
                cevap:
                    "Çalıştığımız bölgede evet, atölyenin tamamında değil. Kaldırma düzeneğinin hareket alanı ile sepetin bulunduğu hacim çakışıyorsa düzeneğin enerjisi kesilir, şalter kilitlenir ve bu, saha sorumlusunun onayıyla iş emrine yazılır. Bunun dışında kalan kalemler — dış aydınlatma, çatı ışıklığı, oluk — normal seyrinde yapılır. Hangi kalemin hangi bölgeye düştüğünü keşifte ayırır, durması gereken süreyi mümkün olduğunca kısa tutarız.",
            },
            {
                soru: "Tek bir aydınlatma armatürü için makine göndermeniz mantıklı mı?",
                cevap:
                    "Tek başına genellikle değil, ve bunu açıkça söyleriz. Nakliye kalemi kiralama süresinden bağımsız sabittir; tek bir armatür için ayrı sevkiyat çağırmak, işin kendi değerinin üstünde bir maliyet doğurur. Önerimiz, benzer kalemleri (çatı kontrolü, tabela, oluk gibi) tek listeye toplayıp aynı sevkiyatta bitirmektir. Aciliyet varsa elbette geliriz; bu durumda nakliye bedelini teklifte ayrı bir satır olarak gösteririz, karar sizde kalır.",
            },
            {
                soru: "Birkaç farklı adresteki işlerimizi tek kiralamada bitirebilir miyiz?",
                cevap:
                    "Bitirebilirsiniz; merkezde bu, kiralamanın en ekonomik biçimidir. Makine merkeze bir kez indirilir, adresler arasında sırayla dolaşır ve nakliye kalemi işler arasında bölünür. Her adres kendi teklifini, kendi tutanağını alır; aranızda hiçbir hukuki bağ kurulmaz. Yapmanız gereken tek şey, hangi adreste hangi kalemin yapılacağını içeren bir liste çıkarmaktır; en az geçişli sıralamayı biz kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Afyon merkezde küçük-orta ölçekli imalat ve lojistik yapılarının yaygınlığı kamuya açık genel gözlemdir; sınıf eşleşmesi ve sevkiyat birleştirme yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:dinar-osb": {
        h1: "Dinar OSB’de Fabrika ve Depo Bakımı İçin Manlift Kiralama",
        giris:
            "Dinar OSB’deki bir parsele manlift gönderirken bizim için önemli olan, parselde kimin üretim yaptığı değil, hangi tip hacmin bakım beklediğidir. Bölgedeki fabrika ve depo yapıları, sektörden bağımsız olarak birbirine çok benzeyen bir kalıba oturur: çelik çatılı üretim holü, buna bitişik bir mamul veya hammadde deposu, ve idari bir blok. Her üçünün de kendi kot ve zemin özellikleri vardır ve doğru makineyi bulmak, bu üç bilginin netleşmesiyle mümkün olur. Bu sayfada Dinar OSB’de standart bir fabrika-depo ikilisinde nasıl çalıştığımızı, hangi ölçüleri istediğimizi ve hangi sınıfı hangi hacme gönderdiğimizi anlatıyoruz — parsel bazlı özel bir sektör anlatısı değil, jenerik OSB bakım akışını.",
        maddeler: [
            {
                baslik: "Üretim holünde standart aydınlatma-havalandırma turu",
                metin:
                    "Dinar OSB’deki üretim holleri, ilin diğer sanayi bölgeleriyle aynı yapı diline sahiptir: tek katlı, geniş açıklıklı, çelik çatılı. Bu holdeki en sık tekrar eden kalem, aydınlatma armatürü değişimi ve havalandırma fanı bakımıdır. Çalışma yüksekliği tavan kotuna göre belirlenir ve zemin çoğunlukla düz betondur; bu koşullarda akülü makaslı sınıf standart tercihimizdir. Yılda bir kez yapılan bu tur, arıza beklemeden yapılan planlı bir bakımdır ve genellikle bir günden kısa sürer.",
            },
            {
                baslik: "Hammadde ve mamul depolarında raf-koridor kontrolü",
                metin:
                    "Parsele bağlı depolarda iş, raf sisteminin etrafında toplanır: raf üstü aydınlatma, yangın algılama dedektörleri ve sprinkler hattı kontrolü. Buradaki karar, koridor genişliği ve raf yüksekliğine göre verilir; forklift trafiğinin yoğun olduğu depolarda çalışma, sevkiyat dışı saatlere yazılır. Dar koridorlu depolarda standart makaslı yerine dar gövdeli bir sınıf tercih edilir, geniş koridorlu depolarda ise standart makaslı yeterlidir.",
            },
            {
                baslik: "İdari blokta cephe ve iç mekân işleri",
                metin:
                    "Parsele bağlı idari bina, üretim holünden farklı bir talep üretir: dış cephe aydınlatması, tabela, asma tavan ve iç mekân aydınlatması. Bu bölümde zemin genellikle cilalı veya seramik kaplıdır ve iz bırakmayan tekerlek tipi tercih edilir. İdari bloktaki işler kısa sürer ve genellikle üretim holü işiyle aynı sevkiyata eklenir; parselde iki farklı hacim tek ziyarette kapatılmış olur.",
            },
            {
                baslik: "Şantiye aşamasındaki parsellerde ölçü belirsizliği",
                metin:
                    "Henüz yapımı tamamlanmamış parsellerde iş kalemleri çelik konstrüksiyon detayı, cephe paneli montaj desteği ve çatı ışıklığı kurulumudur. Bu aşamada zemin henüz kaplanmamış olabilir ve arazi kabiliyeti yüksek bir sınıf tercih edilir. Şantiye aşamasındaki taleplerde ölçüler net olmayabilir; bu durumda önce yaklaşık bir aralık üzerinden teklif çıkarır, sahaya inmeden önce son kontrolü yaparız.",
            },
            {
                baslik: "Standart bakımı yıllık programa bağlamak",
                metin:
                    "Dinar OSB’deki işletmelerin çoğu, aydınlatma ve havalandırma bakımını arıza çıktığında değil, yıllık bir programa bağladığında hem daha ucuza hem daha planlı çalışır. Yıllık bir tur, üretim holü, depo ve idari blok kalemlerini tek sevkiyatta toplar ve nakliye kalemini tek bir ziyarete yayar. Bu düzeni kuran işletmelerle her yıl aynı tarihte çalışırız; tarih değişikliği olduğunda önceden haber vermeniz yeterlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Parsel içi hacimlere göre sınıf seçimi",
                paragraflar: [
                    "Dinar OSB’deki bir parselin farklı bölümleri farklı sınıf gerektirir. Aşağıdaki tablo bu eşleşmeyi toplar.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Baskın kalem", "Zemin / ortam", "Önerilen sınıf"],
                    satirlar: [
                        ["Üretim holü", "Aydınlatma, fan bakımı", "Düz beton", "Akülü makaslı"],
                        ["Hammadde / mamul deposu", "Raf üstü, dedektör", "Koridor sınırlı", "Dar gövdeli makaslı"],
                        ["İdari blok", "Cephe, tabela, asma tavan", "Cilalı zemin", "İz bırakmayan tekerlekli"],
                        ["Şantiye aşamasındaki parsel", "Çelik detay, panel montajı", "Kaplanmamış zemin", "Arazi tipi dizel"],
                        ["Yükleme kapısı üstü", "Kapı mekanizması", "Standart", "Kompakt akülü"],
                        ["Dış saha / çevre aydınlatma", "Direk, kanopi", "Açık alan", "Hızlı toplanan bomlu"],
                    ],
                },
            },
            {
                baslik: "Teklif için istediğimiz üç bilgi",
                paragraflar: [
                    "Dinar OSB’deki bir parsel için teklifi tek turda çıkarabilmemiz üç bilgiye bağlıdır: çalışılacak noktanın zeminden kotu, makinenin geçeceği kapı veya koridorun eni ve yüksekliği, zeminin cinsi. Bu üç bilgi netleştiğinde sınıf seçimi doğrudan ortaya çıkar ve sahada değişmez.",
                    "Parselde birden fazla hacim varsa (hol, depo, idari blok gibi) her biri için ayrı ayrı bu üç bilgiyi isteriz, çünkü çoğu zaman farklı sınıflar gerekir. İki farklı sınıf gerekiyorsa bunu tek sevkiyatta getirir, ek nakliye doğurmadan çalışırız.",
                ],
            },
            {
                baslik: "İl içi mesafenin planlamaya katkısı",
                paragraflar: [
                    "Dinar OSB, il sınırları içinde kalan bir noktadır ve bu, merkeze göre biraz uzak olsa da hâlâ aynı gün içinde ulaşılabilecek bir mesafedir. Acil bir talep geldiğinde sıradaki programı beklemeden gelebiliriz; planlı işlerde ise listeyi toplayıp tek sevkiyatta getirmeyi öneririz, çünkü nakliye payı listeye bölündüğünde belirgin biçimde düşer.",
                    "Bölgeye o hafta zaten giden bir program varsa, talep sırasında bunu size söyleriz ve tarihinizi buna göre değerlendirebilirsiniz. Programa eklenen işletmeler kendi teklif ve tutanaklarını alır; ortak olan yalnızca bölgeye giriş-çıkış kalemidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Parselimizde hem üretim holü hem depo var; tek ziyarette bitirir misiniz?",
                cevap:
                    "Bitiririz ve bu bizim için standart bir çalışma biçimidir. Hol ve depo genellikle farklı ölçü ve zemin özellikleri taşır; bu yüzden her iki bölüm için ayrı ayrı kot ve zemin bilgisi isteriz. İki bölüm farklı sınıf gerektiriyorsa bunu tek sevkiyatta getirir, ilk bölümü bitirdikten sonra ikincisine geçeriz. Tek sevkiyatta iki hacmin bitmesi hem sizin hem bizim için en ekonomik yoldur.",
            },
            {
                soru: "Parselimiz henüz şantiye aşamasında; ölçüleri tam veremiyoruz.",
                cevap:
                    "Sorun değil, şantiye aşamasındaki parsellerde bunu sık yaşarız. Yaklaşık tavan yüksekliğini ve zeminin ne zaman kaplanacağını bize söylerseniz, önce bir aralık üzerinden teklif çıkarırız; kesin ölçüyü sahaya inmeden hemen önce, mümkünse bir gün öncesinde birlikte teyit ederiz. Zemin henüz kaplanmamışsa arazi kabiliyeti yüksek bir sınıf öneririz; bu, kaplanmamış zeminde beklenmedik bir gömülme riskini önler.",
            },
            {
                soru: "Depo koridorlarımız dar; hangi sınıf uyar?",
                cevap:
                    "Koridor genişliği bizim için raf yüksekliğinden daha belirleyicidir. Standart makaslı sınıfların şasesi dar koridorlara sığmayabilir; bu durumda dar gövdeli bir makaslı veya kompakt dikey bir sınıf tercih edilir. Koridor genişliğini, raf yüksekliğini ve sepetin istife ne kadar yaklaşabileceğini bilmemiz yeterlidir. Bu üç ölçü netleştiğinde sınıf seçimini tek turda yaparız.",
            },
            {
                soru: "Yıllık bakım programı kurmak bize ne kazandırır?",
                cevap:
                    "En büyük kazanç nakliye kaleminde görülür. Aydınlatma, havalandırma, çatı ve tabela gibi kalemleri tek bir yıllık tura toplayan işletmeler, her kalem için ayrı ayrı çağrı yapan işletmelere kıyasla belirgin biçimde daha az öder. İkinci kazanç öngörülebilirliktir: arıza çıkmadan yapılan bakım, üretim akışını kesintiye uğratmaz. Sizden istediğimiz, bakım listenizi ve tercih ettiğiniz ayı bize bildirmenizdir; her yıl aynı tarihte hatırlatma yaparız.",
            },
            {
                soru: "Acil bir arıza çıktı; aynı gün gelebilir misiniz?",
                cevap:
                    "Dinar OSB il sınırları içinde olduğu için genellikle aynı gün ulaşabiliriz. Acil çağrılarda kapsam arızayı gidermeye odaklanır; birikmiş bakım kalemleri aynı sefere sığmayabilir ve sonraki programa yazılır. Acil çağrı sırasında bize ihtiyacımız olan tek bilgi, çalışılacak noktanın yaklaşık kotu ve zeminin cinsidir; bunlar telefonda hızlıca netleşir ve makine yola çıkar.",
            },
            {
                soru: "Komşu parsellerle birlikte kiralama yapabilir miyiz?",
                cevap:
                    "Yapabilirsiniz ve bunu aktif olarak teşvik ederiz. Makine bölgeye bir kez indirilir, parseller arasında sırayla dolaşır ve nakliye kalemi işletmeler arasında bölünür. Her parsel kendi teklifini ve kendi teslim tutanağını alır; aranızda hiçbir hukuki bağ kurulmaz. Tarihinizi erken bildirmeniz, hem sırayı hem düşük birim maliyeti almanızı sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Dinar OSB’nin karma sanayi parsel yapısı kamuya açık genel bilgidir; hacim bazlı sınıf eşleşmesi ve yıllık program mantığı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:bolvadin": {
        h1: "Bolvadin’de Fabrika ve Depo Yapıları İçin Manlift Kiralama",
        giris:
            "Bolvadin’deki manlift taleplerinin önemli bir kısmı, ilçenin tarımsal sanayi kimliğinden bağımsız olarak, sıradan bir fabrika-depo ikilisinden gelir: küçük imalathaneler, ambalaj atölyeleri, nakliye depoları ve servis binaları. Bu yapılar, ilçenin öne çıkan proses tesislerinden farklı olarak karmaşık bir üretim zinciri taşımaz; aydınlatma, havalandırma ve raf sistemi bakımı gibi standart kalemlerle ilerler. Biz bu sayfada Bolvadin’in tarımsal sanayisini değil, ilçedeki sıradan fabrika ve depo yapılarının bakım ihtiyacını anlatıyoruz — hangi hacme hangi sınıfın gittiğini, teklif için hangi bilgiyi istediğimizi ve kısa işleri nasıl ekonomik hâle getirdiğimizi.",
        maddeler: [
            {
                baslik: "Küçük imalathanelerde aydınlatma ve çatı bakımı",
                metin:
                    "Bolvadin’deki küçük ölçekli imalathaneler genellikle tek hacimli, orta yükseklikte ve dar kapılı yapılardır. Buradaki iş kalemleri aydınlatma armatürü değişimi, havalandırma fanı bakımı ve çatı sacındaki küçük onarımlardır. Kapı ve iç manevra alanının dar olması, makine seçiminde şase genişliğini öne çıkarır; bu yüzden kompakt gövdeli akülü sınıflar burada standart tercihimizdir. Zemin genellikle beton ve düzdür.",
            },
            {
                baslik: "Ambalaj ve paketleme atölyelerinde hat üstü kalemler",
                metin:
                    "İlçedeki ambalaj ve küçük ölçekli paketleme atölyelerinde üst kot, bant üstü aydınlatma ve askı noktalarıyla doludur. Hat çalışırken üstünde iş yapılmaz; çalışma tercihen hattın durduğu pencereye yazılır. Bu tür atölyelerde iş kalemi sayısı azdır ve makine genellikle bir günden kısa sürede işini bitirir; bu yüzden kısa listeleri birleştirmeyi öneririz.",
            },
            {
                baslik: "Depo ve raf sistemlerinde koridor kontrolü",
                metin:
                    "İlçedeki nakliye ve ürün depolarında iş, raf sisteminin etrafında toplanır: raf üstü aydınlatma, yangın algılama dedektörleri ve sprinkler hattı. Koridor genişliği ve raf yüksekliği, sınıf seçiminde belirleyici ölçülerdir; forklift trafiğinin yoğun olduğu depolarda çalışma sevkiyat dışı saatlere yazılır. Dar koridorlu depolarda dar gövdeli bir sınıf, geniş koridorlu depolarda standart makaslı yeterlidir.",
            },
            {
                baslik: "Servis ve atölye binalarında çatı işleri",
                metin:
                    "İlçedeki servis ve bakım atölyelerinde çelik makaslı çatı ve tek hacimli plan yaygındır. Buradaki kalemler çatı ışıklığı değişimi, aydınlatma yenileme ve oluk-iniş borusu onarımıdır. Zemin genellikle beton ve düzdür, bu da standart akülü makaslı sınıfı en uygun seçenek yapar. Kalem sayısı azsa iş genellikle bir günde biter.",
            },
            {
                baslik: "İlçede kısa işleri birleştirmek",
                metin:
                    "Bolvadin ilçe merkezindeki işletmeler birbirine yakın konumlanır ve bu, kısa işleri birleştirmek için elverişli bir zemin oluşturur. Aynı hafta içinde birkaç ayrı adreste küçük kalemler varsa, makineyi bir kez ilçeye indirip adresler arasında dolaştırmak, her adres için ayrı sevkiyat çağırmaktan belirgin biçimde ucuza gelir. Tarihini önceden bildiren işletme hem sırayı hem düşük birim maliyeti alır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçedeki standart yapı tipleri ve sınıf eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, Bolvadin’de en sık çalıştığımız sıradan fabrika ve depo tiplerini toplar.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Önerilen sınıf"],
                    satirlar: [
                        ["Küçük imalathane", "Aydınlatma, çatı onarımı", "Kapı genişliği", "Kompakt akülü"],
                        ["Ambalaj / paketleme atölyesi", "Hat üstü aydınlatma, askı", "Hat duruşu", "Akülü, tablalı"],
                        ["Nakliye / ürün deposu", "Raf üstü, dedektör", "Koridor genişliği", "Dar gövdeli makaslı"],
                        ["Servis / bakım atölyesi", "Çatı, ışıklık, oluk", "Standart", "Standart akülü makaslı"],
                        ["İdari bina", "Aydınlatma, asma tavan", "Standart koşul", "Dikey"],
                        ["Dış saha / avlu", "Aydınlatma direği", "Açık alan", "Kompakt dizel"],
                    ],
                },
            },
            {
                baslik: "Teklif öncesi üç netleştirme",
                paragraflar: [
                    "İlçedeki bir talebin teklifini tek turda çıkarabilmemiz için üç bilgiye ihtiyacımız var: çalışılacak noktanın zeminden kotu, makinenin geçeceği kapı veya koridorun eni ve yüksekliği, zeminin cinsi. Bu üç bilgi netleştiğinde sınıf seçimi doğrudan ortaya çıkar ve sahada değişmez.",
                    "Eksik bırakılan bilgi, sahada ya yetersiz kalan ya da gereğinden büyük ve pahalı bir makineyle karşılaşmak demektir. Birkaç fotoğraf bu belirsizliğin tamamını kaldırır; teklif almadan önce göndermenizi öneririz.",
                ],
            },
            {
                baslik: "Kısa iş listesinde nakliyenin payı",
                paragraflar: [
                    "İlçedeki küçük ölçekli işletmelerin en sık sorduğu soru, tek kalemlik bir iş için kiralamanın mantıklı olup olmadığıdır. Nakliye, kiralama süresinden bağımsız sabit bir kalemdir ve kısa bir işte bu kalemin payı büyür; bu yüzden bakım listenizi birkaç kaleme çıkarıp tek sevkiyatta bitirmenizi öneririz.",
                    "İlçeye o hafta zaten planlanmış bir sevkiyat varsa işinizi ona ekleriz; bu durumda nakliye payı işler arasında bölünür ve sizin payınız belirgin biçimde düşer. Talep sırasında tarihinizin esnek olup olmadığını söylerseniz, bunu kontrol edip size haber veririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İmalathanemiz küçük ve kapımız dar; makine sığar mı?",
                cevap:
                    "Sığması için sınıfın kapı genişliğine göre seçilmesi gerekir ve bu, ilçedeki küçük imalathanelerde en sık yaptığımız düzeltmedir. Kapı genişliğini ve içeride makinenin döneceği en dar noktayı bildirirseniz, o ölçüye uygun en dar gövdeli sınıfı öneririz. Çok dar hacimlerde dikey tip modeller makaslı sınıftan daha uygun olabilir; karar, ölçüler elimize geçtiğinde netleşir.",
            },
            {
                soru: "Ambalaj hattımız yoğun çalışıyor; ne zaman bakım yapabiliriz?",
                cevap:
                    "En doğru yol hattın durduğu pencereye yazmaktır; planlı bir temizlik veya bakım duruşunuz varsa iş oraya taşındığında ek maliyet doğmaz. Zorunlu hâllerde çalışılan kesim örtülür, sepet altına toplama tablası konur ve el aletleri bağlanır; bu düzen riski azaltır, ortadan kaldırmaz. Hattın haftalık duruş takvimini paylaşırsanız işi o pencereye yerleştiririz.",
            },
            {
                soru: "Depomuzda koridorlar dar; hangi sınıf uygun olur?",
                cevap:
                    "Koridor genişliği bizim için raf yüksekliğinden daha belirleyicidir. Standart makaslı sınıfların şasesi dar koridorlara sığmayabilir; bu durumda dar gövdeli bir makaslı tercih edilir. Koridor genişliğini, raf yüksekliğini ve sepetin istife ne kadar yaklaşabileceğini bilmemiz yeterlidir. Bu üç ölçü netleştiğinde sınıf seçimini tek turda yaparız.",
            },
            {
                soru: "Atölyemizde tek bir çatı onarımı var; makine göndermeniz mantıklı mı?",
                cevap:
                    "Tek başına genellikle değil; nakliye kalemi kiralama süresinden bağımsız sabittir ve tek bir onarım için ayrı sevkiyat çağırmak işin kendi değerinin üstünde bir maliyet doğurur. Önerimiz, benzer kalemleri (aydınlatma, oluk, tabela gibi) tek listeye toplamaktır. Aciliyet varsa geliriz; bu durumda nakliye bedelini teklifte ayrı bir satır olarak gösteririz.",
            },
            {
                soru: "Birkaç farklı adresteki işlerimizi tek kiralamada bitirebilir miyiz?",
                cevap:
                    "Bitirebilirsiniz; ilçede bu, kiralamanın en ekonomik biçimidir. Makine ilçeye bir kez indirilir, adresler arasında sırayla dolaşır ve nakliye kalemi işler arasında bölünür. Her adres kendi teklifini, kendi tutanağını alır; aranızda hiçbir hukuki bağ kurulmaz. Hangi adreste hangi kalemin yapılacağını içeren bir liste çıkarmanız yeterlidir.",
            },
            {
                soru: "Zeminimiz düz beton değil, biraz eğimli; sorun olur mu?",
                cevap:
                    "Küçük eğimler çoğu sınıf için sorun yaratmaz; makinenin üretici tarafından belirlenmiş bir eğim toleransı vardır ve bu sınır sepet yukarıdayken daha kritik hâle gelir. Zeminin eğimini ve yüzey cinsini bize bildirirseniz, bu koşulu karşılayan bir sınıf öneririz; eğim sınırın üzerindeyse çalışma noktası değiştirilir veya zemin desteklenir. Sahayı görmeden bu kararı vermeyiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bolvadin ilçe merkezindeki karma küçük sanayi ve depolama yapılarının varlığı kamuya açık genel gözlemdir; sınıf eşleşmesi ve sevkiyat birleştirme yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:ihsaniye": {
        h1: "İhsaniye’de Fabrika ve Depo Yapıları İçin Manlift Kiralama",
        giris:
            "İhsaniye, Afyonkarahisar’ın küçük ölçekli sanayi ve tarımsal ürün işleme yapılarının bulunduğu bir ilçesidir ve buradan gelen manlift talebi çoğunlukla tek bir hacimli, sınırlı ölçekli tesislerden gelir: küçük imalathaneler, tarımsal ürün depoları, servis binaları ve ilçe merkezindeki ticari yapılar. İlçenin büyük sanayi parseli yoğunluğu taşımaması, buradaki taleplerin daha çok tekil ve kısa süreli olması anlamına gelir; bir işletmenin yılda bir kez ihtiyaç duyduğu bir aydınlatma veya çatı bakımı, komşu ilçelerdeki gibi sürekli tekrarlanan bir program değildir. Bu yüzden İhsaniye’ye giden bir sevkiyatı, mümkün olduğunca aynı haftadaki başka taleplerle birleştirerek planlarız. Bu sayfada ilçedeki yapı tiplerini, hangi sınıfın hangi hacme gittiğini ve kısa işleri nasıl ekonomik hâle getirdiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Küçük imalathane ve atölyelerde standart bakım",
                metin:
                    "İlçedeki küçük imalathaneler genellikle tek hacimli, orta yükseklikte yapılardır. Buradaki iş kalemleri aydınlatma armatürü değişimi, havalandırma fanı bakımı ve çatı sacındaki küçük onarımlardır. Kapı ve iç manevra alanının dar olması sık karşılaştığımız bir durumdur; bu yüzden kompakt gövdeli akülü sınıflar burada standart tercihimizdir. Zemin genellikle beton ve düzdür.",
            },
            {
                baslik: "Tarımsal ürün depolarında raf ve çatı işleri",
                metin:
                    "İlçedeki tarımsal ürün depolarında iş kalemleri, raf üstü aydınlatma, çatı sacı onarımı ve mahya havalandırmasıdır. Bu depolarda ürün doluyken çalışma tercih edilmez; yığın yüzeyi taşıyıcı değildir ve düşen bir parça partiyi riske atar. İşleri ürünün boşaldığı döneme yazmayı öneririz; bu dönemde hem daha güvenli hem daha hızlı ilerler.",
            },
            {
                baslik: "Servis binaları ve ticari yapılarda kısa kalemler",
                metin:
                    "İlçe merkezindeki servis binaları ve dükkânlarda iş genellikle tek kalemliktir: tabela değişimi, klima montaj desteği, aydınlatma yenileme. Bu kalemler kısa sürede biter ve makine aynı gün ilçeden ayrılır. Sokakların dar olduğu bölgelerde kompakt dikey veya kısa eklemli sınıflar tercih edilir.",
            },
            {
                baslik: "Karayolu bağlantısının sevkiyata katkısı",
                metin:
                    "İhsaniye, Afyon-Kütahya karayolu ekseni üzerinde bir konumda bulunur ve bu, sevkiyatı komşu bazı ilçelere göre daha basit kılar. Lowbed girişinde manevra sorunu çoğu tesiste yaşanmaz ve acil taleplerde aynı gün müdahale ihtimali yüksektir. Bu konum aynı zamanda ilçeyi, hat üzerindeki başka adreslerle birleştirmek için elverişli bir nokta yapar.",
            },
            {
                baslik: "Tekil talepleri programa bağlamak",
                metin:
                    "İlçedeki talepler genellikle tekil ve seyrek olduğu için, tek başına gelen bir talebin nakliye payı yüksek kalabilir. Bu yüzden İhsaniye’ye giden sevkiyatları, mümkün olduğunca aynı hafta içindeki komşu ilçe taleplerine veya kendi içindeki birden fazla kaleme bağlarız. Tarihinizi esnek tutabiliyorsanız bunu bize söylemeniz, sevkiyat payınızı belirgin biçimde düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçedeki yapı tipleri ve sınıf eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, İhsaniye’de en sık çalıştığımız yapı tiplerini ve tercih ettiğimiz sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Önerilen sınıf"],
                    satirlar: [
                        ["Küçük imalathane", "Aydınlatma, çatı onarımı", "Kapı genişliği", "Kompakt akülü"],
                        ["Tarımsal ürün deposu", "Raf üstü, mahya havalandırma", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Servis binası", "Tabela, klima, aydınlatma", "Dar sokak", "Kompakt dikey"],
                        ["Ticari cephe", "Tabela, kaplama", "Kaldırım kotu", "Dar gövdeli"],
                        ["İdari / ofis bloğu", "Asma tavan, aydınlatma", "Standart koşul", "Dikey"],
                        ["Dış saha / avlu", "Aydınlatma direği, oluk", "Açık alan", "Kompakt dizel"],
                    ],
                },
            },
            {
                baslik: "Tekil talebin ekonomisi",
                paragraflar: [
                    "İlçedeki bir işletmenin tek kalemlik bir iş için ayrı sevkiyat çağırması, nakliye kaleminin toplam maliyet içindeki payını yükseltir. Bunu önlemenin iki yolu vardır: bakım listenizi birkaç kaleme çıkarıp tek sevkiyatta bitirmek, ya da tarihinizi esnek tutup bölgeye o hafta giden bir programa eklenmek.",
                    "İkinci yöntemde, komşu ilçelerdeki (Afyon merkez, Kütahya hattı gibi) bir programın parçası olarak İhsaniye’ye uğranabilir; bu durumda nakliye payı işler arasında bölünür. Talep sırasında tarihinizin esnek olduğunu belirtirseniz, bu imkânı kontrol edip size haber veririz.",
                ],
            },
            {
                baslik: "Teklif için istediğimiz üç bilgi",
                paragraflar: [
                    "İlçedeki bir talebin teklifini tek turda çıkarabilmemiz için üç bilgiye ihtiyacımız var: çalışılacak noktanın zeminden kotu, makinenin geçeceği kapı veya yolun eni ve yüksekliği, zeminin cinsi (beton, toprak, stabilize).",
                    "Kırsal ve küçük ölçekli adreslerde bu üç bilgi genellikle telefonla tarif edilmesi zor olan detaylardır; birkaç fotoğraf, sahaya boşa yapılan bir sefere kıyasla çok daha ucuz bir hazırlıktır ve teklif almadan önce göndermenizi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İlçemizde tek bir işimiz var; makine göndermeniz mantıklı mı?",
                cevap:
                    "Tek başına genellikle nakliye payı yüksek kalır, bunu açıkça söyleriz. İki yol öneririz: bakım listenizi birkaç kaleme çıkarmak, ya da tarihinizi esnek tutup bölgeye o hafta giden bir programa eklenmek. İkinci yöntemde nakliye payı işler arasında bölünür ve sizin payınız belirgin biçimde düşer. Aciliyet varsa elbette tek başına da geliriz.",
            },
            {
                soru: "Tahıl deposumuzda çatı onarımı var; ürün doluyken çalışabilir misiniz?",
                cevap:
                    "Beklemenizi öneririz. Ürün doluyken yığın yüzeyi taşıyıcı değildir, makine içeri girse bile konumlanacak sağlam bir zemin bulamaz. Buna ürün riski eklenir: düşen bir parça partinin tamamını şüpheli hâle getirir. Boşalma dönemini bekleyemeyeceğiniz acil durumlarda dışarıdan yandan uzanarak sınırlı bir müdahale mümkündür; kalıcı onarım boşalma dönemine yazılır.",
            },
            {
                soru: "Yolumuz dar ve toprak; makine ulaşabilir mi?",
                cevap:
                    "Çoğu durumda ulaşabilir ama yöntemi önceden belirlemek gerekir. Yolun eni, zemin cinsi ve son yağıştan sonra ıslak kalıp kalmadığı bilgisi bizim için belirleyicidir. Zemin şüpheliyse makineyi çekicinin dönebildiği en yakın sert zemine indirip kalan mesafeyi kendi yürüyüşüyle almayı öneririz. Birkaç fotoğraf bu kararı önceden netleştirir.",
            },
            {
                soru: "Dükkânımızın tabelası için sokağı kapatmak gerekir mi?",
                cevap:
                    "Çoğu durumda gerekmez; kompakt dikey bir makine tek şerit veya kaldırım işgaliyle yerleşir. Belirleyici olan makinenin açılmış hâlde kapladığı alan ile sepetin uzanma yönüdür. İşgal izni gereken durumlarda ilgili başvuruyu iş planına baştan koyarız; çalışmayı sabahın erken saatlerine almak, bu süreci büyük ölçüde kısaltır.",
            },
            {
                soru: "Karayoluna yakınlığınız acil müdahaleyi etkiler mi?",
                cevap:
                    "Etkiler, ilçenin Afyon-Kütahya karayolu ekseni üzerinde olması acil müdahaleyi kolaylaştıran bir avantajdır. Lowbed girişinde manevra sorunu çoğu tesiste yaşanmaz. Yine de acil çağrılarda kapsam arızayı gidermeye odaklanır; birikmiş bakım kalemleri aynı sefere sığmayabilir ve sonraki programa yazılır.",
            },
            {
                soru: "Komşu ilçelerdeki bir programa eklenebilir miyiz?",
                cevap:
                    "Eklenebilirsiniz ve bunu öneririz. Afyon merkez veya Kütahya hattına giden bir program varsa, güzergâh üzerindeki İhsaniye’ye uğramak çoğu zaman mümkündür ve nakliye payı işler arasında bölünür. Talep sırasında tarihinizin esnek olduğunu belirtirseniz bu imkânı kontrol edip size haber veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. İhsaniye’nin küçük ölçekli sanayi ve tarımsal işleme yapıları ile Afyon-Kütahya karayolu ekseni üzerindeki konumu kamuya açık genel bilgidir; sınıf eşleşmesi ve sevkiyat birleştirme yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:usak-osb-cevre-ili": {
        h1: "Uşak OSB’de Fabrika ve Depo Yapıları İçin Manlift Kiralama",
        giris:
            "Afyon’dan Uşak OSB’ye giden bir manlift talebini biz standart bir fabrika-depo işi olarak ele alırız; sektörün tekstil mi yoksa başka bir üretim kolu mu olduğu, ilk sorduğumuz soru değildir. Bize gereken bilgi, hacmin tipi, tavan kotu, zemin cinsi ve kapı-koridor ölçüleridir — bu dört bilgi netleştiğinde sınıf seçimi kendiliğinden ortaya çıkar. İl dışı bir sevkiyatı ayıran şey teknik değil lojistiktir: mesafe, makinenin gidiş-geliş süresini kiralamanın içine sokar ve bu, tek günlük işleri ekonomik olmaktan çıkarır. Bu yüzden Uşak OSB’ye yaptığımız çıkışları her zaman program olarak kurarız — bölgeye indirilen makine birden fazla parseli kapatacak bir listeyle hareket eder. Bu sayfada standart OSB fabrika-depo bakımının nasıl işlediğini ve il dışı bir çıkışı nasıl planladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Üretim holünde standart aydınlatma-havalandırma bakımı",
                metin:
                    "Uşak OSB’deki üretim holleri, sektörden bağımsız olarak benzer bir mimariyi paylaşır: çelik çatılı, geniş açıklıklı, tek katlı. Buradaki en sık tekrar eden kalem aydınlatma armatürü değişimi ve havalandırma fanı bakımıdır. Çalışma yüksekliği tavan kotuna göre belirlenir, zemin çoğunlukla düz betondur ve bu koşullarda akülü makaslı sınıf standart tercihimizdir.",
            },
            {
                baslik: "Depo raf sistemlerinde koridor ölçüsü",
                metin:
                    "OSB’deki lojistik ve mamul depolarında iş, raf sisteminin etrafında toplanır: raf üstü aydınlatma, yangın algılama dedektörleri ve sprinkler hattı. Koridor genişliği, sınıf seçiminde raf yüksekliğinden daha belirleyicidir; dar koridorlu depolarda dar gövdeli bir sınıf tercih edilir. Forklift trafiğinin yoğun olduğu depolarda çalışma sevkiyat dışı saatlere yazılır.",
            },
            {
                baslik: "Çelik konstrüksiyon ve çatı altı işleri",
                metin:
                    "Bazı parsellerde iş çatı ve çelik konstrüksiyonun kendisiyle ilgilidir: çatı ışıklığı değişimi, oluk-iniş borusu onarımı, çelik kolon üzerindeki detay kaynağı. Bu kalemler genellikle dizidir ve makine parselde birkaç gün kalabilir. Şantiye zemininde arazi kabiliyeti yüksek bir sınıf, tamamlanmış beton zeminde ise standart makaslı tercih edilir.",
            },
            {
                baslik: "Kapalı hacimde güç tipi ve şarj planı",
                metin:
                    "Kapalı üretim ve depo hacimlerinde egzoz üreten dizel makine kullanılmaz; akülü sınıflar zorunludur. Birkaç günü aşan programlarda şarj noktasının nerede olduğu ve programın tahmini süresi baştan konuşulur. Bu netleştiğinde gün planı sahada tutar; konuşulmadığında iş yarıda kalıp ekip şarj beklerken zaman kaybedebilir.",
            },
            {
                baslik: "İl dışı çıkışın program mantığı",
                metin:
                    "Mesafe, il dışı bir işin fiyatını belirleyen tek kalemdir ve bu kalem gün sayısına bölünür. Tek günlük bir iş için yapılan çıkışta nakliye payı tek işin üstünde kalır; aynı çıkışta birden fazla parsel kapatıldığında pay bölünür. Bu yüzden Uşak OSB’ye yapılan çıkışları program olarak kurarız: parseller haritada sıralanır, gün planı önceden yazılır ve dönüş tarihi belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB’de hacim tipine göre sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, Uşak OSB’de en sık karşılaştığımız hacim tiplerini ve önerdiğimiz sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Önerilen sınıf"],
                    satirlar: [
                        ["Üretim holü", "Aydınlatma, havalandırma", "Tavan kotu", "Akülü makaslı"],
                        ["Lojistik / mamul deposu", "Raf üstü, dedektör", "Koridor genişliği", "Dar gövdeli makaslı"],
                        ["Çelik konstrüksiyon çatı", "Işıklık, oluk, kaynak desteği", "Erişim mesafesi", "Eklemli bomlu"],
                        ["Açık şantiye alanı", "Cephe panel, çelik montaj", "Zemin cinsi", "Arazi tipi dizel"],
                        ["Yükleme kapısı üstü", "Kapı mekanizması", "Kapı yüksekliği", "Kompakt akülü"],
                        ["İdari bina", "Aydınlatma, asma tavan", "Standart koşul", "Dikey"],
                    ],
                },
            },
            {
                baslik: "İl dışı çıkışta gün planının kurulması",
                paragraflar: [
                    "Bir il dışı programın kalitesi sahada değil planlama masasında belirlenir. Çıkış öncesinde üç şeyi netleştiririz: parsel sırası, her parselde geçirilecek gün sayısı ve geçiş süreleri. Bu üçlü yazıldığında dönüş tarihi de netleşir.",
                    "Uzun bir programda makinenin geceleri kalacağı bir nokta gerekir; hat üzerindeki bir parselde düz, sert ve korunaklı bir park alanı belirlenir ve akülü ünite kalacaksa şarj için erişilebilir bir enerji hattı istenir. Bu düzenleme sağlandığında program kesintisiz ilerler.",
                ],
            },
            {
                baslik: "Tek günlük işte maliyet gerçeği",
                paragraflar: [
                    "Tek günlük küçük bir iş için Uşak OSB’ye tek başına makine göndermek genellikle ekonomik değildir ve bunu açıkça söyleriz; nakliye kaleminin tamamı tek işin üstünde kalır. İki alternatif öneririz: bölgeye o hafta giden bir programa katılmak, ya da birikmiş küçük işleri tek listeye toplayıp tek çıkışta kapatmak.",
                    "Aciliyet varsa elbette tek başına da geliriz; bu durumda nakliye bedelini teklifte ayrı bir satır olarak gösteririz, karar sizde kalır. Bölgede planlanmış bir programın olup olmadığını talep sırasında söyleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek günlük küçük bir işimiz var; Uşak’a gelmeniz mantıklı mı?",
                cevap:
                    "Tek başına genellikle değil ve bunu açıkça söyleriz. Nakliye kalemi kiralama süresinden bağımsız sabittir; tek günlük bir işte bu kalemin tamamı sizin üstünüzde kalır. İki alternatif öneririz: o hafta bölgeye giden bir programa katılmak, ya da birikmiş kalemleri tek listeye toplamak. Aciliyet varsa geliriz; nakliye bedelini teklifte ayrı satır olarak gösteririz.",
            },
            {
                soru: "Depo koridorlarımız dar; hangi sınıf uygun olur?",
                cevap:
                    "Koridor genişliği raf yüksekliğinden daha belirleyicidir. Standart makaslı sınıfların şasesi dar koridorlara sığmayabilir; bu durumda dar gövdeli bir makaslı tercih edilir. Koridor genişliğini, raf yüksekliğini ve sepetin istife ne kadar yaklaşabileceğini bilmemiz yeterlidir. Bu üç ölçü netleştiğinde sınıf seçimini tek turda yaparız.",
            },
            {
                soru: "Kapalı holümüzde dizel makine kullanabilir misiniz?",
                cevap:
                    "Kullanamayız; kapalı hacimde egzoz üreten bir ünite kabul edilemez. Bu hacimlerde akülü sınıf kullanılır. Bunun getirdiği tek ek planlama şarjdır: şarj noktasının konumu ve programın tahmini süresi teslim öncesinde konuşulur. Bu netleştiğinde gün planı sahada tutar.",
            },
            {
                soru: "Program birkaç gün sürecek; makine geceleri nerede kalır?",
                cevap:
                    "Hat üzerindeki bir parselde, önceden belirlenmiş bir park alanında kalır. Park alanının düz, sert ve korunaklı olması gerekir; akülü ünite kalacaksa gece şarjı için erişilebilir bir enerji hattı isteriz. Kalış süresince makinenin muhafazası, park alanını sağlayan işletmeye ait olur; teslim ve iade anında mevcut durum fotoğrafla kayıt altına alınır.",
            },
            {
                soru: "Şantiye aşamasındaki bir parselimiz var; ölçüleri tam veremiyoruz.",
                cevap:
                    "Sorun değil, şantiye aşamasındaki parsellerde bunu sık yaşarız. Yaklaşık tavan yüksekliğini ve zeminin ne zaman kaplanacağını bize söylerseniz önce bir aralık üzerinden teklif çıkarırız; kesin ölçüyü sahaya inmeden hemen önce teyit ederiz. Zemin henüz kaplanmamışsa arazi kabiliyeti yüksek bir sınıf öneririz.",
            },
            {
                soru: "Bölgede aynı hafta başka iş varsa nakliye payımız düşer mi?",
                cevap:
                    "Düşer, ve bunu talep aşamasında açıkça söyleriz. Makine bölgeye bir kez indirilir; o hafta bölgede planlanmış başka bir program varsa sevkiyat kalemi işler arasında bölünür ve her işletmenin payı azalır. Tarihinizin esnek olduğunu belirtirseniz bölgedeki en yakın programa denk gelip gelmediğimizi kontrol eder, size haber veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Uşak OSB’nin karma sanayi ve lojistik parsel yapısı kamuya açık genel bilgidir; il dışı program kurgusu ve hacim bazlı sınıf eşleşmesi firma saha pratiğidir. Tesis adı, mesafe ve rakam kullanılmamıştır.",
    },
    "bolge:sandikli-osb": {
        h1: "Sandıklı OSB’de Fabrika ve Lojistik Depoları İçin Manlift Kiralama",
        giris:
            "Sandıklı OSB’de fabrika veya lojistik depo için manlift planlarken malzeme akışına bakarız. Hammadde üretim holüne girer, paletli ürün raflara yerleşir ve sevkiyat kapılarından çıkar; bakım ekibi aydınlatma, havalandırma, algılama hattı, kapı mekanizması ve çatı altı tesisata bu hareketin arasında ulaşır. Kardeş içeriğin termal teknik servis ve doğal taş çevresi burada işlenmez. Belirleyici olan makinenin kabul alanından hedef koridora rotası, raf aralığındaki dönüşü ve çalışma hücresinin sevkiyattan ne kadar ayrılabileceğidir. Teklif öncesinde tavan kotu, kapı, koridor, zemin ve şarj imkânı kaydedilir. Böylece gereğinden büyük sınıf yerine depo akışını az kesen gövde seçilir.",
        maddeler: [
            {
                baslik: "Mal kabul alanında kapı, saçak ve trafik ayrımı",
                metin:
                    "Mal kabul cephesinde seksiyonel kapı motoru, fotosel, saçak altı aydınlatma, oluk ve yönlendirme levhaları sık bakım kalemidir. Aynı bölgede kamyon yanaşması, forklift geçişi ve yaya kontrolü yürüdüğü için manlifti boş bir rampa gözüne bırakmak yeterli değildir. Çalışma hücresi, bomun dönüş alanı ve aşağı düşebilecek parça sınırıyla birlikte kapatılır. Rampa takozu, seviyeleyici veya kapı üzerinde iş varsa ilgili ekipman yetkili kişi tarafından hareketsiz teslim edilir. Sevkiyat sorumlusu hangi kapının ne zaman boş kalacağını önceden belirler; ekip bir kapıyı bitirip teslim etmeden yan göze geçmez. Böylece bütün kabul cephesi değil, yalnız üzerinde çalışılan bölüm kısa süreliğine akıştan çıkar.",
            },
            {
                baslik: "Raf koridorunda gövde ve dönüş ölçüsü",
                metin:
                    "Depoda hedef kot kadar önemli iki ölçü koridor genişliği ile dönüş başındaki boşluktur. Sepet gerekli yüksekliğe çıksa bile makine raf arasında dönemiyorsa doğru sınıf değildir. Koridorun en dar noktası, kolon çıkıntısı, raf koruma bariyeri ve zemindeki kılavuzlar ölçülür; yalnız mimari plandaki nominal genişliğe güvenilmez. Çalışma yapılacak koridor stok hareketine kapatılır ve komşu koridordan çatalların sepete uzanamayacağı teyit edilir. Raf gözü üzerinde gevşek ambalaj veya taşan palet varsa önce depo ekibi tarafından düzeltilir. Düz beton ve yeterli geçiş bulunan hacimde kompakt akülü makaslı sınıf; rafın arkasına yatay erişim gerekiyorsa dar gövdeli eklemli sınıf değerlendirilir.",
            },
            {
                baslik: "Üretim holü ile depo arasındaki geçiş",
                metin:
                    "Aynı parselde üretim ve depo hacmi farklı zemin, temizlik ve trafik kurallarına sahip olabilir. Üretim holündeki talaş, ambalaj artığı veya proses kalıntısı depoya taşınmamalı; depoda çalışan ünitenin tekerlek ve gövde durumu bölüm geçişinde kontrol edilmelidir. Kapı eşiği, rampa, perde kapı ve yangın kapısı makinenin geçiş ölçüsünü sınırlar. Geçiş rotası vardiya başlamadan boşaltılır, enerji kablosu araç yoluna serilmez ve akülü ünitenin şarj yeri kuru, havalandırılan bir noktada belirlenir. İş sırası mümkün olduğunda temiz depodan üretim holüne doğru kurulur. Geri dönüş gerekiyorsa tesisin kabul ettiği ara temizlik yapılmadan ünite raf alanına alınmaz.",
            },
            {
                baslik: "Tavan tesisatında hücre bazlı bakım",
                metin:
                    "Aydınlatma armatürleri, hava kanalları, kablo tavaları, sprinkler çevresi ve duman algılama bileşenleri geniş tavan boyunca dağılır. Bütün depoyu kapatmak yerine planı hücrelere böleriz. Her hücre için altındaki palet hareketi durur, alan bariyerlenir, gerekli enerji izolasyonu yapılır ve bakım ekibi o bölgedeki tüm kalemleri tek konum dizisiyle tamamlar. Elektrik veya yangın sisteminde devre dışı bırakma gerekiyorsa tesisin yetkili prosedürü uygulanır; manlift ekibi sistemi kendi kararıyla kapatmaz. Hücre teslim edilip düşen parça ve alet kontrolü bittikten sonra stok akışı yeniden açılır. Bu yöntem, makinenin aynı tavana tekrar tekrar dönmesini ve depo operasyonunun belirsiz süreyle kesilmesini önler.",
            },
            {
                baslik: "Vardiya ve sevkiyat takvimine bağlı günlük rota",
                metin:
                    "Lojistik depoda boş görünen alan birkaç saat sonra yoğun bir toplama veya yükleme noktasına dönüşebilir. Bu nedenle saha keşfi tek başına yeterli değildir; günlük sevkiyat planı bakım programına bağlanır. Sabah kabul kapıları, öğleden sonra raf koridoru ya da ters sıra işletmenin akışına göre yazılır. Her geçiş öncesinde yeni alanın izin ve bariyer hazırlığı tamamlanmış olur. Hava uygun değilse dış cephe ve saçak işleri yerine kapalı hacimde hazır bekleyen kalemlere geçilir. Makine birkaç vardiya kalacaksa park noktası, şarj sorumlusu ve vardiya başı görsel kontrolü tutanağa yazılır; yetkisiz kullanıcıya anahtar veya kumanda bırakılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo alanı ve manlift seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, Sandıklı OSB’de fabrika-depo akışında sık karşılaşılan erişim bölgelerini özetler. Nihai sınıf ölçülen geçişe, üretici çalışma sınırlarına ve saha kontrolüne göre belirlenir.",
                ],
                tablo: {
                    basliklar: ["Alan", "Bakım hedefi", "Belirleyici ölçü", "Planlama yaklaşımı"],
                    satirlar: [
                        ["Mal kabul kapısı", "Motor, fotosel, saçak", "Rampa gözü ve araç yolu", "Kapıyı sırayla kapat"],
                        ["Dar raf koridoru", "Aydınlatma ve üst bağlantı", "Koridor ile dönüş alanı", "Kompakt akülü sınıf"],
                        ["Geniş depo aksı", "Tavan tesisatı", "Kot ve düz beton", "Akülü makaslı"],
                        ["Üretim-depo geçişi", "Kapı ve üst tesisat", "Eşik, perde ve temizlik", "Geçiş sırasını yaz"],
                        ["Dış sevkiyat cephesi", "Oluk ve kaplama", "Rüzgâr ve trafik", "Bariyerli bomlu"],
                        ["Teknik koridor", "Kablo ve kanal", "Yatay engel", "Dar eklemli"],
                    ],
                },
            },
            {
                baslik: "Teklif için beş saha verisi",
                paragraflar: [
                    "İlk veri hedef kotudur; buna makinenin duracağı yerle hedef arasındaki yatay mesafe eklenir. İkinci grup, en dar kapı-koridor ve dönüş başı ölçüleridir. Üçüncü veri zemin ile eşik durumudur: düz beton, rampa, ızgara ve kanal ayrı ayrı işaretlenir. Dördüncü veri, sevkiyat ve forklift trafiğinin hangi saatlerde durabileceğidir. Son olarak kapalı hacimde şarj noktası ve dışarıda gece park alanı bildirilir. Yakın çekim arıza fotoğrafı kadar girişten hedefe kadar kesintisiz rota fotoğrafları da gerekir.",
                    "Bu bilgilerle sınıf seçimi karşılaştırılabilir hâle gelir. Büyük makine her zaman iyi değildir; geniş gövde raf koridorunu kapatabilir, ağırlık ızgara veya rampaya uygun olmayabilir. Küçük sınıf da yatay engeli aşamıyorsa işi tamamlamaz. Teklifte alan, sınıf, taşıma, şarj, operatör seçeneği ve hava bağımlı kalemler görünür. Karar tamamlanacak bakım listesi üzerinden verilir.",
                ],
            },
            {
                baslik: "Teslimden kapanışa depo disiplini",
                paragraflar: [
                    "Teslimde görünür durum ve kumandalar kaydedilir. Yetkili kullanıcı belirlenir; vardiya başında lastik, korkuluk, kumanda, acil indirme ve sızıntı kontrol edilir. Düz zemin trafik ayrımını gereksiz kılmaz. Bariyer sepetin hareket alanını da kapsar. Alarm, ses veya sızıntıda çalışma kesilir ve servis aranır.",
                    "Kapanışta her hücrenin alet-parça sayımı yapılır, izolasyonu yalnız tesis yetkilisi kaldırır ve raf koridoru depo sorumlusuna teslim edilir. Tamamlanmayan iş açık hedef olarak bırakılmaz; güvenli durumuyla birlikte sonraki vardiyanın yazılı planına girer. Makine düz, korunaklı park alanına çekilir ve akülü sınıfta kablo araç yolundan uzak tutulur. İade öncesinde gövde ile tekerlek temizliği ve durum karşılaştırması yapılır. Bu kayıt, hem kiralama tarafını hem depo işletmesini belirsiz hasar ve sorumluluk tartışmasından korur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Raf koridoru için yalnız tavan yüksekliğini vermemiz yeterli mi?",
                cevap:
                    "Yeterli değildir. Tavan kotu yalnız dikey erişimi gösterir; makinenin koridora girip dönmesi ve hedefin altına güvenle yerleşmesi için en dar koridor, dönüş başı, raf koruma bariyeri, kolon çıkıntısı ve yatay engel ölçülmelidir. Zemindeki ızgara, kanal ve eşikler de rota üzerinde işaretlenir. Raf yerleşim planı varsa ölçüler sahada doğrulanır; palet taşmaları kullanılabilir genişliği değiştirebilir. Bu bilgilerle kompakt makaslı ile dar eklemli sınıf arasında doğru seçim yapılır. Ölçü eksikse keşif öneririz; sahaya sığmayan büyük bir üniteyi değiştirmek, başta ölçüm yapmaktan daha uzun sürer.",
            },
            {
                soru: "Depo çalışırken aydınlatma bakımını sürdürebilir misiniz?",
                cevap:
                    "Deponun tamamının durması gerekmez, ancak çalışılan hücre stok ve forklift hareketinden ayrılır. Koridor girişleri bariyerlenir, komşu akstan çatal veya yükün sepete yaklaşamayacağı düzen kurulur ve elektrik devresi tesis yetkilisi tarafından güvenli duruma getirilir. Ekip o hücredeki armatürleri tamamlayıp alet-parça sayımı yaptıktan sonra alan depo sorumlusuna teslim edilir; ardından sonraki hücre açılır. Yoğun toplama saatlerinde koridor kapatılamıyorsa bakım daha sakin vardiyaya taşınır. Sepet altında trafik sürerken kısa süreli müdahale yapmak, program baskısıyla kabul ettiğimiz bir yöntem değildir.",
            },
            {
                soru: "Mal kabul kapılarının hepsini kapatmak gerekir mi?",
                cevap:
                    "Hayır; doğru plan, kapıları sırayla devre dışı bırakmaktır. Hangi rampa gözünün hangi saatte boş kalacağı sevkiyat sorumlusuyla belirlenir. O bölümde araç yanaşması durur, seviyeleyici veya kapı mekanizması yetkili kişi tarafından hareketsiz teslim edilir ve bomun hareket alanı bariyere alınır. İş tamamlanıp bağlantılar, sensör ve güvenlik elemanları kontrol edilince kapı tekrar işletmeye verilir; ekip bir sonraki göze geçer. Ancak ortak enerji veya mekanik sistem birden çok kapıyı etkiliyorsa tesis prosedürü daha geniş bir duruş isteyebilir; bunu keşif sırasında netleştiririz.",
            },
            {
                soru: "Kapalı depoda dizel manlift kullanıyor musunuz?",
                cevap:
                    "Kapalı hacimde egzoz üreten sınıfı standart çözüm olarak kullanmayız. Düz betonlu depo ve üretim hollerinde akülü makaslı veya akülü eklemli ünite seçilir. Bunun karşılığında şarj planı gerekir: priz ve hat uygunluğu tesis tarafından doğrulanır, kablo forklift ya da yaya yolundan geçirilmez ve şarj alanı kuru, havalandırılan bir noktada tutulur. Birden fazla vardiyalık programda şarj zamanı iş sırasına yazılır. Dış sahada arazi sınıfı kullanılmışsa, o ünitenin kapalı hacme geçişi enerji türü ve temizlik açısından ayrıca değerlendirilir; tek makineyle her alanı kapatma varsayımı yapılmaz.",
            },
            {
                soru: "Dış cephe işi rüzgâr nedeniyle durursa program nasıl ilerler?",
                cevap:
                    "Her ünitenin üretici tarafından tanımlanmış çalışma sınırları vardır ve rüzgâr uygun değilse dış iş durur. Kiralama gününü verimli tutmak için aynı programa kapalı hacimdeki raf, aydınlatma veya üst tesisat kalemlerini ekleriz. Bu alanların izin, enerji izolasyonu ve malzemesi önceden hazırsa ekip doğrudan içeri geçer; hava düzeldiğinde dış cepheye döner. Yalnız dış işten oluşan talepte bekleme ve erteleme koşulu teklif aşamasında yazılır. Güvenli olmayan havada işi hızlandırmak ya da geniş yüzeyli parçayı sepette taşımak bir seçenek değildir.",
            },
            {
                soru: "Makine birkaç vardiya depoda kalırsa sorumluluk nasıl yürür?",
                cevap:
                    "Teslimde görünür durum fotoğraflanır, yetkili kullanıcı ve park alanı belirlenir. Her vardiya öncesinde lastik, korkuluk, kumanda, acil indirme ve sızıntı kontrolü yapılır; olağan dışı durumda ünite durdurulup servis aranır. Akülü makine için güvenli şarj hattı gerekir ve kablo araç yoluna bırakılmaz. Gece parkı düz, korunaklı ve yetkisiz erişime kapalı olmalıdır. Kiralama şirketinin periyodik kontrolü ile işletmenin günlük kontrolü birbirinin yerine geçmez. İade anında kayıtlar ve makinenin durumu birlikte karşılaştırılır; böylece kullanım süresindeki sorumluluk açık kalır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Sandıklı OSB’nin fabrika ve depolama parsellerine yönelik genel kullanım çerçevesi kamuya açık bilgidir; raf koridoru, sevkiyat hücresi, şarj ve vardiya planı sektör geneli saha pratiğidir. Termal veya mermer tesisine ilişkin özgül iddia, tesis adı, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:bolvadin-osb": {
        h1: "Bolvadin OSB’de Fabrika ve Lojistik Depo İş Planı",
        giris:
            "Bolvadin OSB’de konu belirli bir ürünün işlenmesi değil, fabrika deposunun kabul, stok ve sevkiyat düzeninde yüksekte bakımın yürütülmesidir. Kardeş içerikteki tarımsal proses, silo, sıcak hat ve kampanya bakımı burada tekrarlanmaz. Lojistik bakış, malzemenin hangi kapıdan girdiği, hangi koridorda beklediği ve bakım makinesinin akışı nerede kesebileceğiyle ilgilenir. Aydınlatma, raf üstü algılama, havalandırma, kapı motoru ve çatı altı tesisat sektörden bağımsızdır; çalışma hücresinin açık kalacağı süre vardiyaya bağlıdır. Planı kot, koridor, zemin, şarj ve stok hareketiyle kurarız. Makine depo sorumlusunun teslim ettiği güvenli hücreye girer ve bölüm tamamlandıkça akış açılır.",
        maddeler: [
            {
                baslik: "Kabulden stok alanına güvenli geçiş rotası",
                metin:
                    "Manliftin tesise giriş rotası çoğu zaman mal kabul araçlarıyla aynıdır. Teslim saati yoğun boşaltma penceresine denk getirilmez; taşıyıcı araç için dönüş ve indirme alanı önceden ayrılır. Makine indirildikten sonra rampa, kapı eşiği, yangın kapısı ve depo içindeki en dar dönüş gözden geçirilir. Yük taşıyan forkliftle manlift aynı dar koridorda karşılaştırılmaz. Rota bariyer veya saha gözcüsüyle kısa süreli ayrılır ve ünite hedef alana ulaştığında lojistik akış yeniden açılır. Birkaç günlük programda makinenin her sabah aynı güzergâhı kullanacağı varsayılmaz; stok yerleşimi ve park edilmiş araçlar değişebileceği için vardiya başlangıcında rota yeniden kontrol edilir.",
            },
            {
                baslik: "Raf üstü tesisat ve sipariş hazırlama bölgesi",
                metin:
                    "Rafların üstünden geçen aydınlatma, kablo, algılama ve havalandırma hatları için çalışma yapılırken yalnız ilgili koridor değil, komşu toplama hareketi de değerlendirilir. Sipariş hazırlayan forkliftin çatalı veya kaldırdığı yük, bariyerin dışından sepete yaklaşmamalıdır. Raf gözündeki gevşek ambalaj ve taşan paletler depo ekibi tarafından düzeltilir. Manlift raf elemanına bağlanmaz ve rafı destek olarak kullanmaz. Koridor genişliğiyle dönüş başı ölçülür; düz betonda kompakt akülü sınıf tercih edilir. Hedefin raf arkasında kalması yatay erişim gerektiriyorsa eklemli sınıf seçilir. Bölüm tamamlandığında parçalar sayılır ve koridor stok ekibine tutanakla geri verilir.",
            },
            {
                baslik: "Sevkiyat kapıları ve rampa ekipmanında sıra",
                metin:
                    "Kapı motorları, fotoseller, saçak altı armatürleri ve yön levhaları aynı cephede bulunur; bu nedenle tek konum dizisiyle toplu bakım yapılabilir. Hangi rampanın ne zaman boş kalacağı yükleme planından alınır. Çalışılan kapı araç kabulüne kapatılır, rampa ekipmanı güvenli durumda teslim edilir ve yaya geçişi alternatif rotaya yönlendirilir. Her kapı bitirildiğinde işlev kontrolünü tesis yetkilisi yapar; ekip onaydan sonra sonraki kapıya ilerler. Tüm cephenin kapatılması gerekmese de ortak elektrik devresi veya üst yapı birden fazla gözü etkiliyorsa daha geniş izin penceresi gerekebilir. Bu bağımlılık, makine sahaya gelmeden elektrik ve bakım sorumlusuyla netleştirilir.",
            },
            {
                baslik: "Stok sayımı ve bakım penceresini eşleştirmek",
                metin:
                    "Depo bakımının verimli zamanı yalnız üretim duruşu değildir. Stok sayımı, raf düzenleme veya düşük sevkiyat dönemi bazı koridorların zaten boşaldığı doğal pencereler oluşturabilir. Bakım listesini depo yönetiminin bu takvimine bağlarız. Boşalan aksta önce üst tesisat ve raf çevresi kalemleri kapanır; ardından stok geri yerleşir. Sayım sırasında personel koridorda çalışıyorsa eş zamanlı manlift kullanımı yapılmaz. Takvim değişirse sıradaki hazır hücreye geçilir. Bu esneklik için her hücrenin malzemesi, enerji izolasyonu ve erişim ölçüsü önceden hazırlanmalıdır; sahada hangi işin yapılacağına o an karar vermek, kısa pencereyi tüketir.",
            },
            {
                baslik: "Uzun kiralamada şarj, park ve günlük kontrol",
                metin:
                    "Kapalı depo için seçilen akülü ünitenin çalışma süresi, şarj düzeni kurulmadan yalnız gün sayısıyla planlanamaz. Şarj noktası kuru ve havalandırılan alanda olmalı, kablo araç yolunu kesmemeli ve elektrik hattının uygunluğu tesis tarafından doğrulanmalıdır. Gece parkı düz, korunaklı ve yetkisiz erişime kapalı tutulur. Her vardiya başında lastik, korkuluk, kumanda, acil indirme ve görünür sızıntı kontrol edilir; olağan dışı durumda kullanım kesilir. Bir vardiyanın sözlü olarak ‘sorunsuz’ devri yeni kontrolün yerine geçmez. Teslim ve iade fotoğraflarıyla günlük kayıtlar, program sonunda makinenin durumu ve sorumluluk konusunda ortak kanıt oluşturur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolvadin OSB depo akışı eşleştirmesi",
                paragraflar: [
                    "Bu tablo proses ekipmanını değil, fabrika ve lojistik depo içindeki operasyon hücrelerini sınıflandırır. Makine seçimi her hücrenin ölçüsü ve trafik ayrımına göre kesinleşir.",
                ],
                tablo: {
                    basliklar: ["Operasyon hücresi", "Yüksek kot işi", "Akış kısıtı", "Uygulama"],
                    satirlar: [
                        ["Mal kabul", "Kapı, fotosel, saçak", "Araç yanaşması", "Rampa gözünü sırayla kapat"],
                        ["Raf koridoru", "Aydınlatma ve algılama", "Forklift ve palet", "Kompakt akülü"],
                        ["Sipariş hazırlama", "Üst tesisat", "Yoğun yaya-yük hareketi", "Düşük vardiyada hücre kur"],
                        ["Geniş stok alanı", "Tavan armatürü", "Kot ve beton zemin", "Akülü makaslı"],
                        ["Teknik geçiş", "Kablo ve kanal", "Kapı ve yatay engel", "Dar eklemli"],
                        ["Dış sevkiyat alanı", "Oluk ve cephe", "Rüzgâr ve araç yolu", "Bariyerli bomlu"],
                    ],
                },
            },
            {
                baslik: "Hücre kartıyla iş programı kurmak",
                paragraflar: [
                    "Her çalışma hücresi için kısa bir kart hazırlarız: hedefler, kot, yatay engel, en dar geçiş, zemin, enerji kesme sorumlusu, stok ve trafik kapanma saati. Fotoğraflar girişten hedefe doğru sıralanır. Aynı aks üzerindeki armatür, kanal ve algılama kontrolleri tek hücrede birleştirilir. Böylece bariyer bir kez kurulur ve manlift aynı yere farklı ekipler için dönmez. Gerekli malzeme sepete çıkmadan önce yerde hazırlanır; yük sınırı üretici etiketinden kontrol edilir ve platform malzeme vinci gibi kullanılmaz.",
                    "Kartlar vardiya sırasına dizilir. Bir hücre beklenmedik stok hareketi nedeniyle açılamazsa, izni ve malzemesi hazır başka karta geçilir. Bu yedek sıra özellikle sevkiyat programı değişken depolarda kiralama gününü korur. Tamamlanan kart depo sorumlusu tarafından kapatılır; enerji, raf güvenliği ve temizlik teyidi olmadan koridor yeniden açılmaz. Yarım kalan hedef yeni vardiyaya sözlü değil, güvenli durumu ve eksik kalemi belirtilerek yazılı devredilir.",
                ],
            },
            {
                baslik: "Sınıf seçimi ve teklif karşılaştırması",
                paragraflar: [
                    "Doğru sınıf için tavan yüksekliğinin yanında hedefe yatay uzaklık, koridor ile dönüş ölçüsü, kapı ve eşik, zemin üzerindeki ızgara-kanal, kapalı veya açık ortam ve çalışma yükü gerekir. Düz geniş aks için makaslı, engel arkasındaki hedef için eklemli sınıf uygun olabilir; ancak bu genel eşleşme saha ölçüsünün yerini tutmaz. Akülü ünite için şarj imkânı, dış saha için zemin ve hava sınırı ayrıca değerlendirilir. Tek makinenin bütün kartları kapatması mümkün değilse iki sınıf gereksinimi teklif aşamasında açıkça gösterilir.",
                    "Teklifleri yalnız günlük bedel üzerinden karşılaştırmak depo işinde yanıltıcı olabilir. Taşıma, çalışma süresi, operatör seçeneği, şarj, vardiya dışı teslim, bekleme koşulu ve hangi hücrelerin kapsama girdiği aynı tabloda görünmelidir. Daha ucuz görünen ama raf koridoruna giremeyen bir ünite iş üretmez. Biz teklif notuna kullanılan ölçüleri ve varsayımları ekleriz; stok düzeni veya kapı açıklığı değişirse sınıfın yeniden kontrol edilmesi gerektiği baştan bilinir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bolvadin OSB sayfanız silo ve proses bakımını mı kapsıyor?",
                cevap:
                    "Bu sayfanın odağı o değildir. Burada fabrika ve lojistik deponun mal kabul, raf koridoru, sipariş hazırlama, sevkiyat kapısı ve genel tavan tesisatı için iş planını anlatıyoruz. Silo, taşıma kulesi, sıcak proses hattı veya kampanya dönemi gibi özel üretim ekipmanı ayrı bir saha değerlendirmesi ister ve kardeş içerikte farklı açıyla ele alınır. Talebiniz karma bir parselden geliyorsa listeyi depo hücreleri ile proses hücrelerine ayırırız; aynı izin, makine ve çalışma sırasının ikisine otomatik olarak uygun olduğunu varsaymayız. Teklif hangi bölümün hangi sınıfla kapsandığını açıkça gösterir.",
            },
            {
                soru: "Forkliftler çalışırken raf koridorunda manlift kullanılabilir mi?",
                cevap:
                    "Çalışılan koridorda ve sepetin etkilenebileceği komşu alanda forklift hareketi durmalıdır. Yalnız manlift tabanının çevresine koni koymak yeterli değildir; yükselmiş çatal, taşınan yük veya dönüş yapan araç bomun çalışma zarfına girebilir. Koridor girişleri bariyerlenir, depo yönetim sistemi gerekiyorsa o aksa görev atamayı durdurur ve yaya rotası değiştirilir. Ekip hücreyi bitirip alet-parça sayımı ve görsel teslim yaptıktan sonra koridor açılır. Diğer, fiziksel olarak ayrılmış akslarda lojistik faaliyet sürdürülebilir; amaç tüm depoyu değil kontrol edilemeyen kesişimi durdurmaktır.",
            },
            {
                soru: "Stok doluyken tavan aydınlatması değiştirilebilir mi?",
                cevap:
                    "Rafların dolu olması tek başına engel değildir, ancak paletlerin güvenli yerleşmiş olması ve çalışma alanının stok hareketinden ayrılması gerekir. Taşan ambalaj, gevşek üst yük veya hasarlı raf koruması varsa önce depo ekibi düzeltir. El aletleri bağlanır, küçük parçalar kontrollü kapta tutulur ve sepet altındaki paletlerde düşen parça riski işletmeyle değerlendirilir. Hassas ya da açık ürün varsa daha sıkı ürün koruma kuralı gerekebilir. Koridor kapatılamıyor veya yüklerin güvenliği doğrulanamıyorsa bakım düşük stok penceresine taşınır; hızlı değişim adına kontrolsüz çalışma yapılmaz.",
            },
            {
                soru: "Bir vardiyada kaç depo hücresi tamamlanır?",
                cevap:
                    "Sabit bir sayı vermek doğru olmaz. Süreyi hedeflerin dağılımı, koridor geçişi, enerji izolasyonu, stok boşaltma zamanı, kullanılacak malzeme ve her hücrenin teslim kontrolü belirler. Keşifte iş listesini hücre kartlarına böler, her kart için erişim ve hazırlık bağımlılıklarını yazarız. Malzeme ile izin önceden hazırsa ekip konumlar arasında düzenli ilerler; raf boşaltma veya elektrik sorumlusu bekleniyorsa aynı liste uzar. Teklifte varsayılan vardiya penceresini ve kapsamı belirtiriz. Amaç yüksek bir hücre sayısı vaat etmek değil, açılan her bölümü güvenli ve tamamlanmış biçimde geri vermektir.",
            },
            {
                soru: "Akülü makineyi gece şarj ederken nelere dikkat edilir?",
                cevap:
                    "Şarj noktası kuru, havalandırılan ve araç darbesinden korunmuş bir yerde seçilir; kullanılacak elektrik hattının uygunluğu tesis yetkilisi tarafından doğrulanır. Kablo forklift, transpalet veya yaya yolundan geçirilmez ve geçici uzatma düzeni rastgele kurulmaz. Makine düz zeminde park edilir, kumanda yetkisiz kullanıma karşı güvene alınır ve şarj durumu vardiya devrine yazılır. Sabah operatör görsel kontrol yapmadan üniteyi çalıştırmaz. Olağan dışı ısınma, koku, hasarlı bağlantı veya alarm görülürse şarj kesilir ve servisle görüşülür; günlük programı yetiştirmek için belirti görmezden gelinmez.",
            },
            {
                soru: "Teklif için depo planı göndermek zorunda mıyız?",
                cevap:
                    "Mimari plan zorunlu değildir, fakat girişten hedefe rota ile kritik ölçüler zorunludur. Kapı eni-yüksekliği, koridorun en dar yeri, dönüş başı, hedef kotu, yatay engel ve zemindeki ızgara-rampa fotoğrafla birlikte paylaşılmalıdır. Mal kabul ve sevkiyat saatleri, kapatılabilecek koridorlar, şarj ile park alanı ve yapılacak işin enerji izolasyonu da belirtilir. Basit bir kroki çoğu zaman ayrıntılı projeden daha faydalıdır; stok düzeninin güncel hâlini gösterir. Bilgi eksik veya çelişkiliyse saha keşfi öneririz ve kesin sınıfı görmeden vaat etmeyiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bolvadin OSB’nin fabrika ve depolama kullanımına açık genel sanayi alanı olması kamuya açık çerçevedir; kabul-stok-sevkiyat hücreleri, vardiya kartı, şarj ve trafik ayrımı sektör geneli saha pratiğidir. Tarımsal ürün, silo, proses kapasitesi, tesis adı ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:afyonkarahisar-kucuk-sanayi-sitesi": {
        h1: "Afyonkarahisar Küçük Sanayi Sitesinde Atölye ve Depo İçin Manlift",
        giris:
            "Afyonkarahisar Küçük Sanayi Sitesinde yüksekte çalışma, tek kullanıcıya ait fabrika parselinden farklı planlanır. Yan yana atölyeler, ortak yollar, kısa yükleme, park edilmiş araçlar ve sınırlı kapılar birlikte ele alınır. Tabela, oluk, aydınlatma, hava hattı veya raf işi kısa sürebilir; makinenin taşınması, güvenli konum ve komşu geçişi ise önemli hazırlık ister. Bu yüzden aynı bloktaki hazır kalemleri bir saha turunda birleştiririz. Ağır sanayi prosesi yerine dar gövdeli, hızlı konumlanan ve ortak yolu az kapatan sınıf öne çıkar. Teklif için hedef kotu, kapı, sert zemin, araç yolu ve iç-dış saha bilgisi sorulur. Gün, her atölyeyi güvenli teslim ederek ilerler.",
        maddeler: [
            {
                baslik: "Dar atölye kapısından iç hacme erişim",
                metin:
                    "Atölye içindeki aydınlatma, kablo tavası, hava hattı, fan ve kapı motoruna ulaşmak için ilk sınır çoğu zaman tavan değil giriş kapısıdır. Kapının net eni ve yüksekliği, eşik, içerideki ilk dönüş ve tezgâhlar arasındaki kullanılabilir koridor ölçülür. Teknik katalogdaki gövde ölçüsüne ek olarak korkuluk katlama veya platformun çalışma konumu üretici talimatına göre değerlendirilir. Tezgâh, araç ve sökülmüş parçalar güvenli rota açacak biçimde işletme tarafından düzenlenir. Kapalı hacimde egzoz üretmeyen akülü sınıf tercih edilir. Yeterli geçiş yoksa makineyi zorlayarak içeri sokmak yerine dışarıdan erişim veya farklı çalışma yöntemi planlanır.",
            },
            {
                baslik: "Ortak yolda tabela, cephe ve oluk işi",
                metin:
                    "Dükkân cephesindeki tabela, aydınlatma, oluk ve kaplama işi ortak araç yoluna taşabilir. Bariyer yalnız makine çevresine değil, sepetin hareket zarfı ve düşebilecek parça alanına göre kurulur. Komşu atölyenin girişini habersiz kapatmayız; çalışma saati blok esnafıyla önceden paylaşılır ve mümkünse daha sakin pencere seçilir. Araç yolu tamamen kapanacaksa ilgili saha yönetiminin yönlendirmesi uygulanır. Sepetten uzun tabela veya panel kaldırılmaz; malzeme ayrı ve uygun yöntemle konumlandırılır. Her cephe tamamlanınca gevşek parça kontrolü yapılır, bariyer kaldırılır ve yol sonraki noktaya geçmeden güvenli biçimde açılır.",
            },
            {
                baslik: "Küçük depo rafı ve üst tesisat bakımı",
                metin:
                    "Atölye arkasındaki küçük depolarda raf koridoru büyük lojistik yapılardan daha dar olabilir ve stok düzensiz yerleşebilir. Taşan koli, gevşek parça ve zemindeki malzeme önce işletme tarafından toplanır. Koridor ile dönüş alanı ölçülür; hedefe dikey çıkış yeterliyse kompakt makaslı, raf veya tezgâh arkasına uzanmak gerekiyorsa küçük eklemli sınıf değerlendirilir. Raf sistemine manlift bağlanmaz, sepet raf gözüne dayanak yapılmaz. Çalışılan koridorda personel ve yük hareketi durur. İş sonunda sökülen bağlantılar ile el aletleri sayılır; depo, sorumlu kişi kontrol etmeden yeniden kullanıma açılmaz.",
            },
            {
                baslik: "Aynı bloktaki kısa işleri tek turda toplamak",
                metin:
                    "Tek bir armatür veya tabela için ayrı taşıma yapmak, kısa işin maliyetinde nakliyeyi baskın hâle getirir. Aynı işletmenin ertelenmiş kalemlerini bir listede toplamak ilk adımdır. Tarihler uyuyorsa komşu atölyelerin benzer yükseklik ve zemin isteyen işleri de aynı saha turuna alınabilir. Bunun için her adresin fotoğrafı, ölçüsü, malzemesi ve yetkili kişisi önceden hazır olmalıdır; makine kapıda beklerken yeni hedef aramayız. Günlük sıra blok üzerindeki konuma göre kurulur ve bir nokta teslim edilmeden diğerine geçilmez. Her işin bedel ve süre payı teklifte açıkça ayrılır; ortak tur, sorumlulukların karışması anlamına gelmez.",
            },
            {
                baslik: "Atölye faaliyeti ile bakım alanını ayırmak",
                metin:
                    "Kaynak, taşlama, araç kaldırma, boya veya parça taşıma süren bir atölyede manlift için boş görünen köşe güvenli çalışma alanı sayılmaz. Sepette yapılacak işin niteliği belirlenir; kıvılcım veya sıcak çalışma varsa işletmenin izin ve yangın önlemi uygulanır. Askılı yük, kaldırılmış araç ve hareketli makine aynı hücrede durdurulur. Boya veya solvent kullanılan hacimde ortam koşulları işletmenin risk değerlendirmesine göre teyit edilir. Küçük dükkânda bu faaliyetler fiziksel olarak ayrılamıyorsa bakım mesai dışına alınır. Kısa iş baskısı, birbirini etkileyen operasyonları aynı dar alanda sürdürme gerekçesi değildir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "KSS iş türü ve erişim yaklaşımı",
                paragraflar: [
                    "Küçük Sanayi Sitesinde sınıfı belirleyen temel unsur, kısa işin yapılacağı dar çevredir. Aşağıdaki tablo keşifte hangi ölçünün ve operasyon ayrımının öne çıktığını gösterir.",
                ],
                tablo: {
                    basliklar: ["İş alanı", "Sık bakım kalemi", "Ana kısıt", "Yaklaşım"],
                    satirlar: [
                        ["Dar atölye içi", "Aydınlatma ve hava hattı", "Kapı ve tezgâh koridoru", "Kompakt akülü"],
                        ["Dükkân cephesi", "Tabela ve kaplama", "Ortak araç yolu", "Kısa bomlu, bariyerli"],
                        ["Atölye arkası depo", "Raf ve üst tesisat", "Stok taşması", "Koridoru boşalt"],
                        ["Çatı kenarı", "Oluk ve panel", "Rüzgâr ve komşu giriş", "Hava penceresinde bomlu"],
                        ["Kapı üstü", "Motor ve ray", "Kapının enerjisi", "İzole edip kompakt çalış"],
                        ["Ortak açık alan", "Direk ve dış aydınlatma", "Yaya-araç trafiği", "Saha yönetimiyle ayır"],
                    ],
                },
            },
            {
                baslik: "Blok turu öncesi hazırlık listesi",
                paragraflar: [
                    "Her atölyeden hedefin fotoğrafı, zeminden kotu, giriş açıklığı, içerideki dönüş alanı ve dükkân önünün hangi saatte boşaltılabileceği istenir. Sepette yapılacak iş ile taşınacak alet ve malzeme belirtilir. Elektrik, kapı motoru veya hareketli ekipman için enerji kesme yetkilisi belirlenir. Cephe işinde ortak yol ve komşu girişleri gösteren geniş açı fotoğraf gerekir. Bu bilgi olmadan aynı blokta olduğu için bütün işlerin tek makineye uygun olduğunu varsaymayız.",
                    "Tur sırası yalnız adres numarasına göre değil, makine sınıfı ve çalışma ortamına göre kurulur. Temiz kapalı hacimler önce, dış saha veya kirli atölye işleri sonra gelebilir. Her işletme kendi malzemesini ve sorumlusunu saatinden önce hazır tutar. Bir nokta hazır değilse programın tamamı beklemez; ölçüsü ve izni tamamlanmış sonraki adrese geçilir. Ancak atlanan iş, ortak yol düzenini bozacak rastgele bir saate sıkıştırılmaz; uygun yeni pencereye yazılır.",
                ],
            },
            {
                baslik: "Kısa işte teslim ve sorumluluk kaydı",
                paragraflar: [
                    "Kısa süreli kullanımda dahi teslim kontrolü atlanmaz. Makinenin görünür durumu fotoğraflanır, kumanda ve acil indirme gösterilir, kullanacak kişi yetkilendirilir. Operatörlü hizmette atölye, çalışma alanını ve enerji izolasyonunu teslim eder; operatör zemini ve hareket zarfını ayrıca kontrol eder. Operatörsüz kullanımda kullanıcı yeterliliği ve günlük kontrol sorumluluğu açıkça yazılır. Sepetin yük ve kişi sınırı üretici etiketinden okunur, makine vinç veya malzeme taşıma aracı gibi kullanılmaz.",
                    "Her iş bitiminde alet-parça sayımı, bağlantı kontrolü ve alan temizliği yapılır. Kapı ya da elektrik ekipmanı yalnız tesis yetkilisinin onayıyla yeniden enerjilenir. Ortak yoldaki bariyer, sepet tamamen toplanıp makine güvenli konuma geçmeden kaldırılmaz. Tur sonunda ünite düz ve korunaklı park alanına alınır; şarj gerekiyorsa kablo araç yolundan uzak tutulur. Bu küçük kayıtlar, birden fazla işletmenin katıldığı turda hangi işin nerede tamamlandığını ve sorumluluğun ne zaman devredildiğini net tutar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek bir tabela işi için Küçük Sanayi Sitesine gelir misiniz?",
                cevap:
                    "Gelmek mümkündür, ancak tek kısa işte taşıma payının yüksek kalacağını açıkça belirtiriz. Önce aynı işletmedeki oluk, aydınlatma, kapı motoru veya iç tesisat gibi ertelenmiş kalemlerin tek listeye alınmasını öneririz. Tarih esnekse aynı blokta ölçüsü ve makine sınıfı uyumlu başka taleplerle bir tur kurulabilir. Bu birleştirme otomatik değildir; her dükkânın zemin, ortak yol ve izin koşulu ayrı kontrol edilir. Teklifte nakliye ile çalışma kalemi ayrı görünür. Acil ve tekil iş yine yapılabilir; kararınızı gerçek toplam üzerinden vermeniz için programlı tur seçeneğini de gösteririz.",
            },
            {
                soru: "Atölye kapımız dar; makinenin sığıp sığmayacağını nasıl anlarız?",
                cevap:
                    "Kapının net eni ve yüksekliği başlangıçtır; eşik, kapı kanadı, içerideki ilk dönüş, tezgâhlar arasındaki koridor ve hedefin yatay engeli de ölçülmelidir. Makinenin taşıma konumundaki gövde ölçüsü teknik veriden kontrol edilir, ancak zemindeki malzeme ve kolon çıkıntısı gerçek kullanılabilir alanı daraltabilir. Girişten hedefe ardışık fotoğraf gönderirseniz uygun kompakt sınıfı önceden eleyebiliriz. Korkuluk veya platform parçası yalnız üreticinin tarif ettiği biçimde katlanabilir; makineyi geçişe uydurmak için güvenlik bileşeni sökülmez. Ölçü sınırdaysa sahada keşif yapılır.",
            },
            {
                soru: "Dükkân önündeki yolu tamamen kapatmanız gerekir mi?",
                cevap:
                    "İşin konumu ve bomun hareket zarfına bağlıdır. Bazen tek şeritlik kontrollü alan yeterlidir; dar bir ortak yolda tabela veya çatı kenarı işi bütün geçişin kısa süre durmasını gerektirebilir. Bariyer planı komşu işletmeler ve saha yönetimiyle önceden paylaşılır, alternatif yaya-araç rotası belirlenir. Yalnız makine tabanına koni koyup sepeti aktif yolun üstüne uzatmayız. İş küçük bloklara bölünür; cephe tamamlanıp gevşek parça kontrolü yapıldıktan ve sepet toplandıktan sonra yol açılır. Daha sakin saat seçmek çoğu durumda kapanma süresini azaltır.",
            },
            {
                soru: "Atölyede kaynak veya boya sürerken bakım yapabilir misiniz?",
                cevap:
                    "Aynı dar hücrede birbirini etkileyen işleri sürdürmeyiz. Kaynak, taşlama veya sıcak çalışma için kıvılcım alanı; boya ve solvent için işletmenin risk değerlendirmesi ve havalandırma koşulları dikkate alınır. Manliftin hedefi farklı olsa bile sepet bu faaliyetlerin etkilediği alana giriyorsa ilgili işlem durdurulur veya bakım mesai dışına taşınır. Askılı yük ve hareketli tezgâhlar da çalışma koridorunda durur. Fiziksel ayrım mümkünse komşu kesit faaliyetine devam edebilir. Kararı işin kısa olmasına göre değil, enerji, atmosfer ve hareketli yüklerin gerçekten ayrılıp ayrılmadığına göre veririz.",
            },
            {
                soru: "Operatörlü ve operatörsüz kiralama arasında ne değişir?",
                cevap:
                    "Operatörlü hizmette makinenin sürüşü ve konumlandırması yetkili operatör tarafından yürütülür; işletme yine zemini, çalışma alanını, enerji izolasyonunu ve üretim trafiğinin ayrılmasını sağlar. Operatörsüz kiralamada kullanıcı yeterliliği doğrulanır, günlük kontroller ve izin verilen kullanım sınırları teslim tutanağına yazılır. Her iki modelde de makine, kaldırma vinci veya raf desteği olarak kullanılamaz ve üretici yük sınırı geçerlidir. Birden fazla atölyeli turda operatörlü model, her noktada yeni kullanıcı devri yapılmasını önleyebilir; uygun seçenek iş listesi ve süreye göre teklif edilir.",
            },
            {
                soru: "Aynı gün birkaç atölyeyi dolaşırken gecikme nasıl önlenir?",
                cevap:
                    "Her adres için fotoğraf, ölçü, yapılacak iş, hazır malzeme, yetkili kişi ve yolun boş kalacağı saat turdan önce tek listede toplanır. Sıra coğrafi yakınlıkla birlikte makine sınıfı ve temiz-kirli ortam geçişine göre kurulur. Ekip geldiğinde yeni hedef keşfedilmesi veya malzeme aranması programı bozar; hazır olmayan adres atlanıp uygun pencereye yeniden yazılır. Her nokta alet-parça sayımı ve sorumlu kabulüyle kapanır. Komşu işletmeler ortak yol saatini bildiği için bariyer kurulurken araç beklenmez. Bu hazırlık kısa işlerin toplamını öngörülebilir bir günlük programa dönüştürür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Afyonkarahisar Küçük Sanayi Sitesindeki atölye, dükkân ve küçük depo ölçeği genel sanayi sitesi kullanım biçimine dayanan kamuya açık çerçevedir; blok turu, erişim ölçüsü, ortak yol ve teslim düzeni sektör geneli saha pratiğidir. İşletme adı, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },
};
