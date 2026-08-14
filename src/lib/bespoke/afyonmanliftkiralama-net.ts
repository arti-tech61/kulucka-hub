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

    // ═══════════════════════════════════════════════════════════════════════
    // "hizmet:*" SAYFALARI — Afyon'un termal otel/turizm kümesi mercek olarak
    // seçilmiştir. Kardeş domain afyonplatform.com.tr'nin "bolge:*" sayfaları
    // mermer ocağı + zor zemin anlatısı kullanır; bu bölüm ONA hiç değinmez,
    // otel iç mekanı, kaplıca dış alanı ve sezon takvimini işler. Ana konu
    // (en detaylı iki sayfa): ic-mekan-depo-platform-kiralama (lobi/spa/
    // konferans) ve enerji-aydinlatma-bakim-platformu (dış aydınlatma/peyzaj).
    // Tarih: 2026-08-14. Tesis adı, kapasite ve rakam uydurulmamıştır.
    // ═══════════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Termal Otel Lobisinde Sepetli / Örümcek Platform Kiralama",
        giris:
            "Afyon'un termal otel bölgesindeki bir lobi veya atriyum, standart bir fabrika holünden çok farklı bir erişim problemi doğurur: tavan genellikle yüksek ve dekoratiftir, zemin mermer veya parkedir, giriş ise döner kapı ya da resepsiyon bankosunun hemen yanından geçen dar bir koridordur. Bu üç koşul bir araya geldiğinde standart bir makaslı platform çoğu zaman işe yaramaz — şase ya kapıdan geçmez ya da lobiye girse bile avizenin altına yeterince yaklaşamaz. Örümcek platform (paletli sepetli tip) burada devreye girer, çünkü katlanmış hâldeyken dar bir kapıdan geçebilir, kendi ayaklarını mermer zemine göre ayrı ayrı ayarlayabilir ve içeride açıldığında uzun kollarıyla yüksek ve merkezden uzak noktalara ulaşabilir. Bu sayfada otel lobisi, atriyum ve balo salonu gibi hacimlerde bu makinenin nasıl konumlandırıldığını, zemin korumasının nasıl yapıldığını ve hangi mevsimde çalışıldığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Lobi ve atriyum avizesi bakımı",
                metin:
                    "Çok katlı bir otel lobisinde asılı duran büyük avizeler, düzenli temizlik ve ampul değişimi ister; bu iş genellikle yılda bir veya iki kez planlanır. Avizenin merkezi konumu, makinenin lobinin ortasına kadar girmesini ve oradan yukarı uzanmasını gerektirir. Örümcek platformun paletli ayakları farklı yüksekliklere ayrı ayrı ayarlanabildiği için, resepsiyon önündeki hafif kot farkı veya basamak da bir engel oluşturmaz. Avize kristalleri hassas olduğu için sepetin son yaklaşımı yavaş ve kontrollüdür.",
            },
            {
                baslik: "Döner kapı ve resepsiyon geçişinden içeri giriş",
                metin:
                    "Otel girişlerinin çoğunda ana giriş döner kapıdır ve bu, sabit genişlikte bir açıklık sunmaz; yan taraftaki servis kapısı veya yangın çıkışı genellikle daha geniş ve daha uygun bir güzergâhtır. Makine otele girmeden önce servis girişinin genişliği, yüksekliği ve zemin kotu resepsiyon veya teknik müdürle birlikte doğrulanır. İçeride resepsiyon bankosu, oturma grubu ve halı gibi sabit unsurlar arasında bir güzergâh belirlenir; bu güzergâh önceden fotoğrafla planlanır, sahada rota aramak yerine hazır bir plan üzerinden ilerlenir.",
            },
            {
                baslik: "Kaplıca havuzu üstü şeffaf tavan temizliği",
                metin:
                    "Bazı termal otellerde kapalı havuz üzerinde şeffaf veya yarı şeffaf bir tavan bulunur; bu tür yüzeylerde mineral birikintisi ve buhar lekesi zamanla görüş netliğini azaltır. Havuz kenarındaki nemli ve kaygan zemin, makinenin ayak basıncını dağıtan takozlarla desteklenir. Çalışma öncesi havuz suyu boşaltılmaz, yalnızca o bölüm misafir kullanımına kapatılır ve nem oranı yüksek ortamda elektrikli bağlantılar ayrıca kontrol edilir.",
            },
            {
                baslik: "Konferans ve balo salonunda ışık-ses sistemi bakımı",
                metin:
                    "Otel konferans salonlarında asma tavana gömülü aydınlatma, projeksiyon ve ses sistemi periyodik kontrol ister; bu salonlar genellikle geniş ama alçak tavanlıdır ve zemin genellikle halı kaplıdır. Halı üzerinde iz bırakmamak için tekerlek altına koruma plakası serilir. Salon bir etkinliğe hazırlanıyorsa bakım, etkinlik takviminin dışına, genellikle sabah erken saatlere yazılır.",
            },
            {
                baslik: "Mermer ve parke zeminde iz bırakmama",
                metin:
                    "Otel zeminlerinin büyük kısmı cilalı mermer, granit veya parkedir; bu yüzeyler standart siyah lastikle iz bırakır ve çizilebilir. Bu yüzden otel içi işlerde her zaman beyaz dolgu, iz bırakmayan tekerlek tipi kullanılır. Ayrıca makinenin geçeceği güzergâh boyunca zemin koruma keçesi veya karton serilir; bu, hem tekerlek izini hem olası bir sızıntıyı önler. İş bitiminde zemin, teknik müdürle birlikte kontrol edilerek teslim edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Otel iç mekanlarına göre sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, termal otellerde en sık çalıştığımız iç mekan tiplerini ve her biri için tercih ettiğimiz sınıfı özetler.",
                ],
                tablo: {
                    basliklar: ["Mekan tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Önerilen sınıf"],
                    satirlar: [
                        ["Lobi / atriyum", "Avize bakımı", "Giriş kapısı eni", "Örümcek (sepetli, paletli)"],
                        ["Kapalı havuz / spa", "Şeffaf tavan, buhar lekesi", "Nem ve kayganlık", "Örümcek, takozlu ayak"],
                        ["Konferans / balo salonu", "Aydınlatma, projeksiyon", "Halı zemin, etkinlik takvimi", "Kompakt makaslı"],
                        ["Oda katı koridoru", "Duman dedektörü, aydınlatma", "Koridor genişliği", "Dikey / kompakt akülü"],
                        ["Restoran / açık büfe salonu", "Aydınlatma, asma tavan", "Servis saatleri", "Kompakt akülü"],
                        ["Dış cephe girişi", "Tabela, kanopi", "Araç-yaya trafiği", "Hızlı toplanan bomlu"],
                    ],
                },
            },
            {
                baslik: "Sezon dışı bakım penceresi",
                paragraflar: [
                    "Termal otellerin doluluğu yıl boyunca sabit değildir; hafta içi ve düşük sezon dönemlerinde lobi ve ortak alanlar daha sakin kalır. Otel yönetimleriyle çoğunlukla bu düşük doluluk pencerelerinde çalışmayı tercih ederiz, çünkü hem misafir rahatsızlığı azalır hem makinenin lobide geçireceği süre daha esnek planlanabilir. Yüksek sezonda da çalışma yapılabilir, ancak bu durumda saat aralığı genellikle gece geç veya sabah erken saatlere kaydırılır.",
                    "Otel yönetiminden istediğimiz tek şey, bir önceki hafta doluluk tahminini ve o hafta planlanan etkinlikleri paylaşmasıdır. Bu bilgiyle bakım gününü, salonun boş kaldığı ve misafir trafiğinin en az olduğu dilime yerleştiririz.",
                ],
            },
            {
                baslik: "Zemin koruma ve misafir güvenliği",
                paragraflar: [
                    "Otel içi bir çalışmada zemin korumasının yanında misafir güvenliği de ayrı bir planlama konusudur. Makinenin geçtiği güzergâh boyunca geçici bariyer veya yönlendirme standı konur, sepetin hareket alanına misafir girmemesi için görevli personel eşlik eder. Çalışma alanı mümkün olduğunca dar tutulur ve iş bitiminde hemen kaldırılır; lobi hiçbir zaman uzun süre kapalı tutulmaz.",
                    "Gürültü de bir diğer dikkat noktasıdır; akülü sistemler bu açıdan avantajlıdır çünkü egzoz sesi veya kokusu üretmez. Buna rağmen kumanda ve hidrolik sesleri tamamen sessiz değildir; bu yüzden resepsiyon ve oturma alanına yakın çalışmalarda kısa süreli, bölünmüş bloklar hâlinde ilerlemeyi tercih ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otel açıkken lobide çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, ancak çalışma saatini otelin en sakin dilimine yerleştirmeyi öneririz. Genellikle sabah erken veya gece geç saatler, resepsiyon trafiğinin en düşük olduğu zamanlardır. Çalışma alanı geçici bariyerle ayrılır ve bir görevli sepetin hareket alanına misafir girmesini engeller. Etkinlik veya check-in yoğunluğu varsa bunu bize önceden bildirmeniz, gün planını buna göre kurmamızı sağlar.",
            },
            {
                soru: "Mermer zeminde iz veya çizik bırakır mısınız?",
                cevap:
                    "Otel içi işlerde standart olarak iz bırakmayan (beyaz dolgu) tekerlek tipi kullanırız ve makinenin geçeceği güzergâh boyunca koruma keçesi seriz. Buna rağmen sıfır risk taahhüt edemeyiz; bu yüzden iş öncesi zeminin mevcut durumunu birlikte fotoğraflarız ve iş sonunda aynı noktaları tekrar kontrol ederek teslim ederiz. Zemin özellikle hassas bir malzemeyse (örneğin cilalı traverten) bunu önceden bildirmenizi isteriz.",
            },
            {
                soru: "Döner kapıdan makine geçmiyor; ne yaparsınız?",
                cevap:
                    "Döner kapılar sabit genişlikte olduğu için çoğu zaman uygun değildir; bu durumda yan taraftaki servis girişi veya yangın çıkışı kullanılır. Talep alırken servis girişinin ölçülerini isteriz; ölçü uygun değilse en dar gövdeli örümcek modelini önce dener, o da sığmıyorsa alternatif bir erişim yöntemi (örneğin dışarıdan çalışma) üzerinde otel teknik ekibiyle birlikte konuşuruz.",
            },
            {
                soru: "Havuz kenarında çalışırken suyu boşaltmanız gerekir mi?",
                cevap:
                    "Hayır, havuzun boşaltılması gerekmez. Yalnızca çalışılan bölüm misafir kullanımına geçici olarak kapatılır ve makinenin ayakları kaygan zemine göre takozla desteklenir. Nem oranı yüksek olduğu için elektrikli bağlantılar ve kumanda kutusu ayrıca su geçirmezlik açısından kontrol edilir. Su seviyesi veya kimyasal dozajlama sistemine dokunulmaz; bu, otelin kendi teknik ekibinin sorumluluğunda kalır.",
            },
            {
                soru: "Balo salonunda bir etkinlik varken bakım yapabilir misiniz?",
                cevap:
                    "Salon dolu veya kurulum aşamasındayken çalışmayız; bu, hem güvenlik hem düzen açısından uygun değildir. Bunun yerine salonun boş olduğu günü veya etkinlik öncesi-sonrası kısa pencereyi kullanırız. Otelin etkinlik takvimini paylaşmanız, bakım tarihini bu boşluklara yerleştirmemizi sağlar; böylece salon hazırlığı hiçbir şekilde aksamaz.",
            },
            {
                soru: "Lobi tavanı çok yüksek; her makine ulaşabilir mi?",
                cevap:
                    "Ulaşamayabilir, bu yüzden tavan yüksekliği ve avizenin merkeze olan yatay uzaklığı bizim için belirleyici iki ölçüdür. Örümcek platformların uzun ve katlanabilir kolları, standart makaslı sınıfın ulaşamadığı merkezi noktalara yandan erişebilir. Yaklaşık tavan yüksekliğini ve avizenin lobi girişine olan mesafesini bildirirseniz, sığacak ve ulaşacak doğru sınıfı önceden belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon'un termal otel kümesinin lobi/atriyum/spa mimarisi ve sezonsal doluluk döngüsü kamuya açık genel bilgidir; zemin koruma yöntemi ve sınıf eşleşmesi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Afyon Termal Otel Bölgesine Nakliye ve Teslimat Hizmeti",
        giris:
            "Afyon'un termal otel kümesi, il merkezine belirli bir mesafede, birbirine yakın konumlanmış oteller ve kaplıca tesislerinden oluşur. Bu coğrafi yakınlık, nakliye planlaması açısından hem bir fırsat hem bir zorunluluktur: fırsattır çünkü aynı bölgeye giden bir sevkiyat birden fazla oteli aynı hafta içinde dolaşabilir; zorunluluktur çünkü sezonun yoğun dönemlerinde (özellikle kış tatili ve resmi tatil haftaları) bölgedeki tüm otellerin bakım talebi aynı anda yükselir ve nakliye takvimi bu yığılmaya göre önceden kurulmalıdır. Bu sayfada bölgeye makine teslimatının nasıl planlandığını, sezon yoğunluğunun takvime nasıl yansıdığını ve birden fazla otelin nakliye maliyetini nasıl paylaşabileceğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Bölgeye ilk teslimat ve keşif",
                metin:
                    "Bir otelle ilk kez çalışırken, makineyi göndermeden önce genellikle fotoğraf üzerinden bir ön değerlendirme yaparız: giriş kapısının ölçüsü, zemin cinsi, tavan yüksekliği ve çalışma saatine dair kısıtlar. Bu bilgi netse doğrudan teslimat planlanır; belirsizse önce kısa bir keşif ziyareti önerilir. Keşif, özellikle otelin kendine özgü mimarisi (örneğin kubbe çatı, çok katlı atriyum) varsa maliyeti ve süreyi netleştirmek için değerlidir.",
            },
            {
                baslik: "Sezon yoğunluğunun teslimat takvimine etkisi",
                metin:
                    "Termal otellerin doluluğu kış aylarında ve resmi tatillerde belirgin biçimde artar; bu dönemlerde bakım talepleri de yoğunlaşır çünkü oteller yüksek doluluğa girmeden önce son kontrolleri tamamlamak ister. Bu yoğun döneme denk gelen taleplerde nakliye programı erkenden kurulur; son dakika taleplerde ise sıraya girme riski vardır. Düşük sezon aylarında ise nakliye takvimi çok daha esnektir ve aynı hafta içinde birden fazla teslimat kolayca birleştirilebilir.",
            },
            {
                baslik: "Otel servis girişinden teslim noktasına ulaşım",
                metin:
                    "Otellerin ana girişleri genellikle misafir trafiğine ayrılmıştır; makine teslimatı bunun yerine servis girişinden, mutfak arkasından veya personel park alanından yapılır. Bu güzergâhın genişliği ve zemin kotu, teslimat aracının içeri girip giremeyeceğini belirler; dar bir servis yolunda büyük bir tır yerine daha küçük bir araçla parça parça taşıma gerekebilir. Bu bilgi teslimat öncesi otel teknik müdürüyle netleştirilir.",
            },
            {
                baslik: "Birden fazla otelin nakliyeyi paylaşması",
                metin:
                    "Bölgedeki oteller birbirine yakın olduğu için, aynı hafta içinde iki veya üç otelin bakım tarihini birleştirmek nakliye maliyetini belirgin biçimde düşürür. Bu model özellikle küçük ve orta ölçekli otellerde tercih edilir; büyük otel zincirleri genellikle kendi takvimini bağımsız kurar. Paylaşımlı teslimatta her otel kendi teklifini ve kendi teslim tutanağını alır; aralarında hiçbir ticari bağ oluşmaz, ortak olan yalnızca bölgeye giriş-çıkış kalemidir.",
            },
            {
                baslik: "Acil teslimat ve arıza durumu",
                metin:
                    "Bir otelde beklenmedik bir arıza (örneğin lobi avizesinin düşme riski taşıyan bir bağlantısı) ortaya çıktığında, programlı sıradan bağımsız acil teslimat yapılabilir. Bu durumda nakliye bedeli ayrı bir kalem olarak teklife yazılır ve sıradaki planlı işler etkilenmeden acil talep önce karşılanır. Acil çağrılarda telefonda alınan yaklaşık ölçü bilgisiyle uygun sınıf belirlenir, makine yola çıkar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sezon dönemine göre teslimat planlaması",
                paragraflar: [
                    "Aşağıdaki tablo, termal otel bölgesindeki tipik sezon dönemlerini ve bunların nakliye planlamasına yansımasını özetler.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Doluluk eğilimi", "Nakliye planlama süresi", "Öneri"],
                    satirlar: [
                        ["Kış tatili / resmi tatil haftası", "Yüksek", "Erken (birkaç hafta önce)", "Tarihi önceden bildirin"],
                        ["Hafta içi düşük sezon", "Düşük", "Kısa (birkaç gün)", "Esnek tarih, düşük maliyet"],
                        ["Hafta sonu", "Orta-yüksek", "Orta", "Sabah erken pencere tercih edin"],
                        ["Bayram öncesi hazırlık", "Yüksek talep", "Erken", "Kontrol listesini önceden çıkarın"],
                        ["Acil arıza", "Değişken", "Aynı gün / birkaç saat", "Telefonla ölçü paylaşın"],
                    ],
                },
            },
            {
                baslik: "Teslimat öncesi paylaşılması gereken bilgiler",
                paragraflar: [
                    "Bir otelin teslimat talebini tek turda netleştirebilmemiz için üç bilgiye ihtiyacımız olur: servis girişinin eni ve yüksekliği, çalışılacak noktanın yaklaşık kotu ve zeminin cinsi (mermer, halı, beton). Bu bilgi fotoğrafla birlikte geldiğinde genellikle yeterlidir.",
                    "Eksik bilgiyle çıkan bir teslimat, sahada ya makinenin sığmaması ya da güvenli tarafta kalmak için gereğinden büyük bir sınıfın gönderilmesiyle sonuçlanabilir. Bu yüzden fotoğraf ve ölçü paylaşımını teklif almadan önce isteriz.",
                ],
            },
            {
                baslik: "Bölgesel program ve haber verme",
                paragraflar: [
                    "Talep sırasında bölgeye o hafta zaten planlanmış bir sevkiyat varsa bunu size bildiririz; tarihiniz esnekse bu programa eklenip nakliye payınızı düşürebilirsiniz. Bu bilgi paylaşımı otomatik değildir, çünkü her otelin bakım listesi ve zamanlaması farklıdır — biz yalnızca o hafta bölgeye giden bir araç varsa bunu şeffaf biçimde sizinle paylaşırız.",
                    "Düzenli çalıştığımız oteller için yıllık bir bakım takvimi öneriyoruz; bu, hem nakliye maliyetini öngörülebilir kılar hem otelin kendi bakım planlamasını kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otelimize daha önce hiç makine gelmedi; keşif şart mı?",
                cevap:
                    "Şart değil ama öneririz, özellikle otelin kendine özgü bir mimarisi (kubbe çatı, çok katlı atriyum, dar servis girişi gibi) varsa. Fotoğraf ve temel ölçülerle de teklif çıkarabiliriz; belirsizlik yüksekse kısa bir keşif ziyareti, sahada yanlış sınıf gönderme riskini tamamen ortadan kaldırır. Keşif genellikle teslimat tarihinden birkaç gün önce, kısa bir ziyaretle tamamlanır.",
            },
            {
                soru: "Yoğun sezonda ne kadar önceden randevu almalıyız?",
                cevap:
                    "Kış tatili ve resmi tatil haftaları gibi yoğun dönemlerde en az birkaç hafta önceden tarih almanızı öneririz, çünkü bölgedeki tüm oteller benzer dönemde bakım talep eder. Düşük sezon aylarında ise birkaç günlük bir bildirim genellikle yeterlidir. Tarihiniz kesinleşmemişse dahi bize önceden haber vermeniz, sırayı sizin lehinize almamızı sağlar.",
            },
            {
                soru: "Servis girişimiz dar; makine oraya sığar mı?",
                cevap:
                    "Bu, teslimat öncesi netleştirdiğimiz ilk sorudur. Servis girişinin eni, yüksekliği ve zemin kotu bilindiğinde uygun taşıma yöntemini (büyük araç veya parça parça taşıma) belirleriz. Ölçü çok dar çıkarsa, makinenin en kompakt gövdeli sınıfını önerir, o da sığmıyorsa alternatif bir güzergâhı otel teknik ekibiyle birlikte değerlendiririz.",
            },
            {
                soru: "Yakın çevredeki başka bir otelle nakliyeyi paylaşabilir miyiz?",
                cevap:
                    "Paylaşabilirsiniz ve bu bölgedeki en ekonomik çalışma biçimidir. Talep sırasında bize tarihinizin esnek olup olmadığını söylerseniz, bölgede o hafta planlanmış bir program varsa sizi araya ekleriz. Her otel kendi teklifini ve kendi teslim tutanağını alır; aranızda hiçbir ticari bağ oluşmaz, yalnızca nakliye kalemi paylaşılır.",
            },
            {
                soru: "Acil bir arıza çıktı; aynı gün gelebilir misiniz?",
                cevap:
                    "Bölgenin merkeze yakınlığı sayesinde çoğu zaman aynı gün ulaşabiliriz. Acil çağrılarda telefonda paylaşacağınız yaklaşık kot ve zemin bilgisiyle uygun sınıfı belirler, makineyi yola çıkarırız. Acil teslimat bedeli, programlı işlerden ayrı bir kalem olarak teklifte gösterilir; sıradaki planlı işleriniz bundan etkilenmez.",
            },
            {
                soru: "Yıllık bakım takvimi kurmak nakliyede fark yaratır mı?",
                cevap:
                    "Evet, belirgin biçimde. Aydınlatma, tavan ve dış cephe bakımını yıllık bir programa bağlayan oteller, her seferinde ayrı ayrı çağrı yapan otellere kıyasla daha düşük birim nakliye maliyeti öder çünkü tarih önceden bilindiği için bölgedeki diğer taleplerle birleştirilebilir. Sizden istediğimiz, bakım listenizi ve tercih ettiğiniz ayı bildirmenizdir; her yıl aynı döneme hatırlatma yaparız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon termal otel bölgesinin il merkezine yakınlığı ve sezonsal doluluk döngüsü kamuya açık genel bilgidir; nakliye paylaşım modeli ve keşif süreci firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Termal Otel Depo ve Çamaşırhanesinde Forklift / İstifleme Kiralama",
        giris:
            "Bir termal otelin görünmeyen ama kesintisiz çalışması gereken kısmı depo ve çamaşırhane bölümüdür: mobilya ve yatak stoku, temizlik malzemesi paletleri, mutfak hammadde depoları ve çamaşırhanenin kendi sarf malzemesi. Bu alanlarda forklift ve istifleme ihtiyacı, sezon başı ve sezon sonu gibi belirli dönemlerde yoğunlaşır — örneğin kış sezonuna girerken ek yatak ve mobilyanın depodan odalara taşınması, ya da yaz sonunda kullanılmayan ekipmanın depoya kaldırılması. Bu sayfada otel depo ve çamaşırhane bölümlerinde forklift ve istifleme kiralamasının nasıl planlandığını, hangi dönemlerde talebin arttığını ve dar koridorlu otel depolarında hangi sınıfın tercih edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Sezon başı mobilya ve yatak taşıması",
                metin:
                    "Otel doluluğunun arttığı döneme girmeden önce, depoda bekleyen ek yatak, masa ve sandalye gibi mobilyaların odalara veya salonlara taşınması gerekir. Bu iş, kısa bir zaman diliminde yoğunlaşan ama tekrar eden bir kalemdir. Forklift, paletlenmiş veya ambalajlı mobilyayı depo raflarından indirmede kullanılırken, tekil parçaların iç mekana taşınması personel eliyle yapılır; forklift genellikle bina dışında veya geniş servis koridorunda kalır.",
            },
            {
                baslik: "Çamaşırhane sarf malzemesi istiflemesi",
                metin:
                    "Otel çamaşırhaneleri büyük miktarda deterjan, kimyasal ve tekstil sarfı tüketir; bu malzemeler genellikle paletli gelir ve raf sistemine istiflenir. Çamaşırhane koridorları genellikle dardır ve nemli-sıcak bir ortamdır; bu koşullarda standart forklift yerine daha kompakt, dar gövdeli bir istifleme makinesi tercih edilir. Kimyasal madde istiflemesinde raf etiketleme ve malzeme güvenlik bilgi formuna göre ayrım otel tesis yönetimi tarafından önceden yapılır.",
            },
            {
                baslik: "Mutfak ve gıda deposunda hijyen kısıtı",
                metin:
                    "Otel mutfağına bağlı gıda depolarında forklift kullanımı, hijyen kurallarına tabidir; makine mutfağın kendisine girmez, yalnızca depo ve teslim rampası arasında çalışır. Gıda ile temas eden yüzeylere yakın çalışmalarda lastik ve şase temizliği önceden kontrol edilir. Teslim rampasındaki yoğun saatlerde (sabah erken mal kabul saati gibi) forklift çalışması bu pencerenin dışına planlanır.",
            },
            {
                baslik: "Sezon sonu ekipman kaldırma",
                metin:
                    "Sezon değişiminde kullanılmayan bahçe mobilyası, şezlong, güneşlik gibi ekipmanlar depoya kaldırılır; bu iş genellikle sezon başındaki taşımanın ters yönüdür ve benzer bir yoğunlukta gerçekleşir. Dış mekan ekipmanı genellikle daha büyük hacimli olduğu için forklift bu aşamada daha sık kullanılır; iç mekana taşıma gerekmediği için çalışma dış saha veya servis avlusunda yoğunlaşır.",
            },
            {
                baslik: "Dar depo koridorunda sınıf seçimi",
                metin:
                    "Otel depolarının çoğu, sanayi tipi lojistik depolardan daha dar planlanmıştır çünkü bina asıl olarak konaklama için tasarlanmıştır. Bu yüzden standart forklift yerine dar gövdeli istifleme makinesi veya elektrikli transpalet tercih edilir. Koridor genişliği ve raf yüksekliği önceden ölçülür; bu iki bilgi olmadan doğru sınıf belirlenemez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Otel depo alanlarına göre makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, otel bünyesindeki farklı depo tiplerini ve her biri için tercih ettiğimiz makineyi özetler.",
                ],
                tablo: {
                    basliklar: ["Depo tipi", "Baskın malzeme", "Kısıt", "Önerilen makine"],
                    satirlar: [
                        ["Mobilya / yatak deposu", "Ambalajlı mobilya", "Sezonluk yoğunluk", "Standart forklift"],
                        ["Çamaşırhane deposu", "Kimyasal, tekstil sarfı", "Dar koridor, nem", "Dar gövdeli istifleme"],
                        ["Gıda / mutfak deposu", "Paletli gıda malzemesi", "Hijyen kısıtı", "Elektrikli transpalet"],
                        ["Dış saha / bahçe deposu", "Şezlong, güneşlik", "Sezon geçişi", "Standart forklift"],
                        ["Teknik malzeme deposu", "Yedek parça, boya", "Küçük hacim", "El forkliftli transpalet"],
                    ],
                },
            },
            {
                baslik: "Sezon geçişini önceden planlamak",
                paragraflar: [
                    "Otellerin sezon başı ve sezon sonu taşıma ihtiyacı öngörülebilir bir takvime bağlıdır; bu yüzden bu iki dönemi önceden bize bildiren oteller, hem daha uygun tarih hem daha düşük nakliye payı alır. Talebin yoğunlaştığı haftalarda birden fazla otelin aynı dönemde taşıma yapması, makinenin bölgede kalış süresini uzatmamızı ve birkaç oteli art arda dolaşmamızı mümkün kılar.",
                    "Sizden istediğimiz, taşınacak malzemenin yaklaşık hacmini ve depo-hedef arasındaki mesafeyi bildirmenizdir; bu bilgiyle hem süre hem makine sınıfı önceden netleşir.",
                ],
            },
            {
                baslik: "Personel ve forklift operatörü koordinasyonu",
                paragraflar: [
                    "Forklift kiralamasında operatörlü ve operatörsüz seçenek sunulur; operatörlü kiralamada makineyi kullanan kişi bizim ekibimizden, operatörsüz kiralamada ise otelin kendi yetkili personelinden olur. Otel deposunda genellikle kısa süreli ve yoğun bir iş söz konusu olduğu için operatörlü seçenek daha hızlı ilerler; ancak düzenli, uzun süreli kullanımlarda otel kendi personelini yetkilendirmeyi tercih edebilir.",
                    "Hangi seçeneğin uygun olduğuna, taşınacak malzeme miktarı ve otelin kendi teknik personel kapasitesi birlikte değerlendirilerek karar verilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sezon başında mobilya taşıması ne kadar sürer?",
                cevap:
                    "Süre, taşınacak mobilya miktarına ve depo ile hedef nokta arasındaki mesafeye bağlıdır. Genellikle bir günlük bir kiralama, standart bir otelin sezon başı taşımasını karşılar; büyük bir mobilya envanteri varsa bu birkaç güne yayılabilir. Taşınacak yaklaşık parça sayısını ve mesafeyi bildirirseniz süre tahminini önceden veririz.",
            },
            {
                soru: "Çamaşırhane koridorumuz çok dar; forklift sığar mı?",
                cevap:
                    "Standart forklift çoğu zaman sığmaz; bu yüzden çamaşırhane gibi dar koridorlu alanlarda dar gövdeli istifleme makinesi veya elektrikli transpalet öneririz. Koridor genişliğini ve raf yüksekliğini bildirirseniz, o ölçüye uygun en dar makineyi belirleriz. Kimyasal madde istifi varsa, hangi rafın hangi malzemeye ayrıldığını önceden bilmemiz de gerekir.",
            },
            {
                soru: "Gıda deposunda forklift kullanımı hijyen açısından sorun yaratır mı?",
                cevap:
                    "Doğru önlemlerle sorun yaratmaz. Makine mutfağın kendisine girmez, yalnızca depo ve teslim rampası arasında çalışır; lastik ve şase temizliği önceden kontrol edilir. Gıdayla doğrudan temas eden yüzeylere yaklaşmadan önce otelin hijyen kurallarına göre ek önlem alınabilir; bu detayları talep sırasında sizinle netleştiririz.",
            },
            {
                soru: "Operatörlü mü yoksa kendi personelimizle mi çalışmalıyız?",
                cevap:
                    "Kısa süreli ve yoğun işlerde (örneğin sezon başı taşıması) operatörlü seçenek genellikle daha hızlı ilerler çünkü ekibimiz makineye ve depo düzenine aşinadır. Uzun süreli veya düzenli kullanımda ise otelin kendi personelini yetkilendirmesi daha ekonomik olabilir. İkisi de mümkündür; kararı taşınacak malzeme miktarına ve sizin teknik personel kapasitenize göre birlikte veririz.",
            },
            {
                soru: "Sezon sonu dış mekan ekipmanını ne zaman kaldırmalıyız?",
                cevap:
                    "Genellikle hava koşullarının bozulmaya başladığı, doluluğun düştüğü geçiş haftalarında planlarız. Bu dönemde bölgedeki diğer otellerin de benzer taşıma ihtiyacı doğduğu için, tarihinizi erken bildirmeniz hem sırayı hem düşük nakliye payını almanızı sağlar. Taşınacak ekipmanın yaklaşık hacmini bildirirseniz uygun makine ve süreyi önceden belirleriz.",
            },
            {
                soru: "Forklift ile birlikte istifleme makinesi de kiralayabilir miyiz?",
                cevap:
                    "Kiralayabilirsiniz; otel depolarında genellikle geniş servis avlusunda forklift, dar raf koridorlarında ise istifleme makinesi veya transpalet birlikte kullanılır. İki makineyi aynı sevkiyatta getirerek nakliye payını tek kaleme indiririz. Hangi alanda hangi makinenin çalışacağını önceden planlarsak, gün içinde makineler arası geçiş sorunsuz ilerler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otellerin sezonluk mobilya/ekipman taşıma döngüsü ve depo-çamaşırhane ayrımı genel otel işletmeciliği bilgisidir; sınıf eşleşmesi ve hijyen önlemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Termal Otel Dış Cephesi ve Kubbe Çatısında Eklemli Platform (Boom) Kiralama",
        giris:
            "Termal otellerin ve kaplıca tesislerinin mimarisi, standart bir ticari binadan farklı bir dış görünüm taşır: kubbe veya yarım kubbe çatılı havuz binaları, geniş cam cepheler, çıkıntılı balkonlar ve bazen birden fazla kütlenin farklı yüksekliklerde birleştiği bir siluet. Bu mimari çeşitlilik, dış cephe ve çatı işlerinde düz bir makaslı platformun ulaşamayacağı noktalar doğurur — kubbenin eğimli yüzeyi, balkonun altına giren bir nokta veya iki kütle arasındaki dar boşluk gibi. Eklemli platform (boom), kollarının yatay ve dikey eksende hareket edebilmesi sayesinde bu tür engebeli ve girintili-çıkıntılı yüzeylerde standart makaslı sınıfın yapamadığı erişimi sağlar. Bu sayfada otel dış cephesi ve kubbe çatılarında bu makinenin nasıl kullanıldığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kubbe çatılı havuz binasının dış yüzeyi",
                metin:
                    "Kapalı havuz binalarının kubbe veya yarım kubbe çatıları, düz bir yüzey değil sürekli eğim değiştiren bir geometri sunar. Bu yüzeyde çatı kaplama kontrolü, oluk temizliği veya aydınlatma bakımı yapılırken makine kubbenin etrafında birden fazla noktadan yaklaşır; her nokta farklı bir açı ve mesafe gerektirir. Eklemli kolun dirsek noktası, kubbenin eğimine takılmadan sepeti doğru açıyla yüzeye yaklaştırmayı mümkün kılar.",
            },
            {
                baslik: "Balkon altı ve çıkıntılı cephe noktaları",
                metin:
                    "Otel odalarının balkonları, dış cepheden dışarı çıkıntı yapar ve bu çıkıntının altındaki veya arkasındaki noktalara düz bir kolla ulaşmak mümkün olmaz. Eklemli platform, kolunu önce yukarı sonra içeri doğru bükerek bu tür 'gölgede kalan' noktalara ulaşabilir. Bu özellik özellikle balkon altı aydınlatma, klima dış ünitesi bakımı veya cephe boyası kontrolünde kullanılır.",
            },
            {
                baslik: "İki kütle arasındaki dar geçiş",
                metin:
                    "Bazı otel yapıları, ana bina ile ek bina (spa, konferans salonu) arasında dar bir geçiş veya avlu bırakır. Bu dar alanda büyük bir makaslı platform manevra yapamaz; eklemli platformun daha kompakt taban izi ve dönebilen kolu, dar avludan girip her iki cepheye de erişebilir. Bu tür avlularda çalışırken rüzgâr etkisi de ayrıca değerlendirilir, çünkü dar geçitler rüzgârı hızlandırabilir.",
            },
            {
                baslik: "Dış aydınlatma ve tabela montajı",
                metin:
                    "Otel giriş cephesindeki tabela, logo aydınlatması ve kanopi altı ışıklandırma, genellikle yerden belirli bir yükseklikte ve öne çıkıntılı konumdadır. Eklemli platform, kolunu yatayda uzatarak bu tür öne çıkan noktalara doğrudan altından değil, yandan veya üstten yaklaşabilir; bu, hem tabelaya zarar verme riskini azaltır hem çalışma açısını iyileştirir.",
            },
            {
                baslik: "Rüzgâr ve hava koşulu sınırı",
                metin:
                    "Dış cephe ve çatı işlerinde her makinenin üretici tarafından belirlenmiş bir rüzgâr hızı sınırı vardır; bu sınır aşıldığında çalışma güvenlik gereği durdurulur. Otel dış cephesindeki iş rüzgâr nedeniyle ertelendiğinde, aynı programa iç mekandaki bir kalemi (örneğin lobi aydınlatması) ekleyerek kiralama gününü verimli tutmayı öneririz; yalnızca dış işten oluşan bir talepte bekleme koşulu teklif aşamasında yazılı olarak belirtilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Otel dış cephesinde erişim noktası ve sınıf eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, termal otel dış cephesinde en sık karşılaştığımız erişim noktalarını ve bunlara uygun sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Erişim noktası", "Geometri", "Ana kısıt", "Önerilen sınıf"],
                    satirlar: [
                        ["Kubbe çatı yüzeyi", "Sürekli eğim", "Açı değişkenliği", "Eklemli, uzun kollu"],
                        ["Balkon altı", "Çıkıntılı, gölgede", "Dikey + yatay erişim", "Eklemli, katlanabilir"],
                        ["İki kütle arası avlu", "Dar, kapalı", "Manevra alanı", "Kompakt eklemli"],
                        ["Giriş tabelası / kanopi", "Öne çıkıntılı", "Görsel hassasiyet", "Eklemli, yandan yaklaşım"],
                        ["Düz cephe (yan bina)", "Düz, sürekli", "Standart erişim", "Standart makaslı"],
                    ],
                },
            },
            {
                baslik: "Dış cephe işini iç mekan kalemleriyle birleştirmek",
                paragraflar: [
                    "Dış cephe işleri hava koşuluna bağlı olduğu için, tek başına planlandığında ertelenme riski taşır. Bu riski azaltmak için otel yönetimlerine, aynı kiralama gününe iç mekandaki bir veya iki kalemi (asma tavan aydınlatması, konferans salonu bakımı gibi) eklemelerini öneririz. Hava uygun olduğunda önce dış cepheye, uygun olmadığında doğrudan iç mekana geçilir; kiralama günü hiçbir koşulda boşa geçmez.",
                    "Bu birleştirme, özellikle rüzgârlı geçiş mevsimlerinde (sonbahar, ilkbahar) planlanan işlerde faydalıdır. Kış ve yaz aylarında hava genellikle daha kararlı seyreder.",
                ],
            },
            {
                baslik: "Kubbe ve cephe ölçüsünü paylaşmanın önemi",
                paragraflar: [
                    "Kubbe çatı gibi standart olmayan geometrilerde teklifi tek turda netleştirebilmemiz için yaklaşık kubbe yüksekliği, tabanının yatay çapı ve makinenin konumlanabileceği zemin alanının genişliğini isteriz. Fotoğraf her zaman faydalıdır ama kubbenin farklı açılardan çekilmiş birkaç fotoğrafı, tek bir cepheden çekilen fotoğraftan çok daha isabetli bir sınıf tahmini sağlar.",
                    "Ölçü belirsizse, sahaya makine göndermeden önce kısa bir keşif öneririz; bu, özellikle kubbe gibi tekrarı az olan yapılarda yanlış sınıf gönderme riskini ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kubbe çatımızın eğimi standart bir platformla çalışılabilir mi?",
                cevap:
                    "Standart makaslı bir platformla genellikle çalışılamaz çünkü bu sınıf düz yüzeyler için tasarlanmıştır. Eklemli platformun kolu, dirsek noktasından bükülerek kubbenin eğimine uygun açıyla yaklaşabilir. Kubbenin yaklaşık yüksekliğini ve tabanının yatay çapını bildirirseniz, uygun kol uzunluğuna sahip sınıfı önceden belirleriz.",
            },
            {
                soru: "Balkonların altındaki noktalara nasıl ulaşıyorsunuz?",
                cevap:
                    "Eklemli platformun kolu önce yukarı, sonra içeri doğru bükülerek çıkıntının altında kalan 'gölgeli' noktalara ulaşabilir; bu, düz kollu makaslı sınıfın yapamadığı bir harekettir. Balkon derinliğini ve zeminden yüksekliğini bildirirseniz, bu erişimi sağlayacak kol uzunluğunu önceden hesaplarız.",
            },
            {
                soru: "Rüzgârlı bir günde çalışma tamamen durur mu?",
                cevap:
                    "Üretici tarafından belirlenen rüzgâr sınırı aşıldığında dış cephe ve çatı çalışması güvenlik gereği durdurulur; bu konuda pazarlık yapmayız. Bu durumda aynı gün için planlanmış iç mekan kalemlerine (varsa) geçeriz; yalnızca dış cephe işi planlandıysa erteleme koşulu teklifte baştan yazılır. Hava durumu geçiş mevsimlerinde (ilkbahar, sonbahar) daha değişken olduğu için bu dönemde iç mekan kalemlerini yedek olarak hazırlamanızı öneririz.",
            },
            {
                soru: "Ana bina ile spa binası arasındaki dar avluda çalışabilir misiniz?",
                cevap:
                    "Avlunun genişliğine bağlıdır. Kompakt eklemli sınıflar, standart makaslı sınıftan daha dar bir taban iziyle manevra yapabilir ve dönebilen kolu sayesinde tek konumdan her iki cepheye de erişebilir. Avlunun en dar noktasının genişliğini ve zemin cinsini bildirirseniz sığacak sınıfı önceden belirleriz; sığmıyorsa alternatif bir erişim yöntemini birlikte değerlendiririz.",
            },
            {
                soru: "Giriş tabelamıza zarar vermeden nasıl çalışırsınız?",
                cevap:
                    "Eklemli platformun kolunu yandan veya üstten yaklaştırarak tabelaya doğrudan alttan dayanmadan çalışırız; bu, hem tabelaya temas riskini azaltır hem operatöre daha iyi bir görüş açısı sağlar. Tabelanın malzemesi hassas (örneğin ışıklı akrilik panel) ise bunu önceden bildirmeniz, ek koruma önlemi almamızı sağlar.",
            },
            {
                soru: "Eklemli platform mu yoksa örümcek platform mu daha uygun?",
                cevap:
                    "İkisi de dış cephede kullanılabilir ama farklı avantajlar sunar: eklemli platform genellikle daha uzun kol mesafesi ve daha yüksek erişim sağlar, örümcek platform ise dar kapı ve iç mekan geçişlerinde daha esnektir. Otel dış cephesinde çoğunlukla eklemli sınıfı öneririz; ancak makinenin önce iç mekandan geçip dışarıya çıkması gerekiyorsa örümcek tipi daha uygun olabilir. Güzergâhı bildirirseniz doğru sınıfı birlikte belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otel ve kaplıca tesislerinin kubbe çatı ve girintili-çıkıntılı cephe mimarisi kamuya açık genel gözlemdir; erişim yöntemi ve sınıf eşleşmesi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Termal Otel İç Mekanında (Lobi, Spa, Konferans) Platform Kiralama",
        giris:
            "Bir termal otelin iç mekanı, tek bir hacim değil birbirinden çok farklı beş altı ayrı bölümün toplamıdır: yüksek tavanlı lobi, kapalı havuz ve spa alanı, konferans-balo salonu, restoran, oda katı koridorları ve arka planda kalan depo-teknik hacimler. Her bölümün kendine özgü tavan yüksekliği, zemin malzemesi, nem oranı ve misafir trafiği vardır; bu yüzden 'otel içi platform kiralama' tek bir sınıfla çözülebilecek bir talep değildir. Bu sayfa, ağın içindeki en detaylı hizmet sayfasıdır çünkü otel içi çalışma, hem teknik hem operasyonel açıdan en çok değişkeni barındıran hizmet türüdür — makine seçimi kadar, hangi saatte, hangi bölümde, hangi zemin korumasıyla çalışılacağı da eşit ölçüde belirleyicidir. Aşağıda otelin altı temel iç mekan bölümünü, her birinin kendine özgü çalışma koşulunu ve doğru sınıf seçimini ayrı ayrı ele alıyoruz.",
        maddeler: [
            {
                baslik: "Lobi ve resepsiyon alanı: sürekli misafir trafiği",
                metin:
                    "Lobi, otelin gün boyu en yoğun geçiş alanıdır; check-in/check-out saatleri, bagaj taşıma ve genel misafir sirkülasyonu neredeyse hiç durmaz. Bu yüzden lobi çalışmaları genellikle gece geç veya sabah çok erken saatlere, misafir trafiğinin en düşük olduğu dilime yazılır. Zemin çoğunlukla mermer veya granittir; makine iz bırakmayan tekerlekle çalışır ve güzergâh boyunca koruma keçesi serilir. Tavan yüksekliği ve avizenin merkeze olan uzaklığı, örümcek platform ile standart makaslı arasındaki seçimi belirler.",
            },
            {
                baslik: "Kapalı havuz ve spa: nem, kaygan zemin, kimyasal ortam",
                metin:
                    "Kapalı havuz ve spa alanları, otel içindeki en zorlu çalışma ortamıdır çünkü sürekli yüksek nem, kaygan zemin ve klor gibi kimyasal madde buharı bir arada bulunur. Bu ortamda çalışan makinenin elektrikli aksamı nem geçirmezlik açısından ek kontrole tabi tutulur ve ayaklar kaygan zemine göre takozla desteklenir. Havuz suyu boşaltılmaz; yalnızca çalışılan bölüm geçici olarak misafir kullanımına kapatılır. Şeffaf tavan, mineral kaplı duvar veya seramik yüzeylerde çalışılırken kimyasal temizlik maddesi kullanılmaz, çünkü bu maddeler havuz suyu kimyasıyla etkileşime girebilir.",
            },
            {
                baslik: "Konferans ve balo salonu: etkinlik takvimine bağlı pencere",
                metin:
                    "Konferans salonları, otelin en değişken doluluk oranına sahip bölümüdür; bazı haftalar tamamen boş kalırken bazı haftalar art arda etkinlikle doludur. Bakım işi bu yüzden salonun etkinlik takvimine göre planlanır ve genellikle iki etkinlik arasındaki boşluğa veya günün en erken saatine yerleştirilir. Zemin genellikle halı kaplıdır; tekerlek altına koruma plakası konur. Asma tavana gömülü aydınlatma ve projeksiyon sistemi, tavan yüksekliği düşük olsa bile geniş bir alana yayıldığı için makinenin salon içinde birden fazla kez konumlanması gerekebilir.",
            },
            {
                baslik: "Restoran ve açık büfe salonu: servis saatleri dışı çalışma",
                metin:
                    "Restoran ve açık büfe alanları, kahvaltı, öğle ve akşam servis saatleri dışında görece boş kalır; bakım genellikle bu aralıklara, örneğin öğle servisi ile akşam servisi arasındaki geçiş saatine yazılır. Zemin genellikle seramik veya parkedir ve gıda hazırlama alanına yakın çalışmalarda hijyen kuralları geçerlidir. Asma tavan aydınlatması ve havalandırma ızgarası bu bölümdeki en sık tekrar eden kalemlerdir; masa ve sandalye düzeni, çalışma öncesi otel personeli tarafından geçici olarak toplanır.",
            },
            {
                baslik: "Oda katı koridorları ve depo-teknik hacimler",
                metin:
                    "Oda katı koridorları dar ve uzundur; duman dedektörü, sprinkler başlığı ve koridor aydınlatması bu bölümün tipik bakım kalemleridir. Koridor genişliği standart makaslı sınıfın çoğu zaman sığmadığı kadar dardır; bu yüzden dikey tip veya çok kompakt gövdeli akülü sınıf tercih edilir. Depo ve teknik hacimlerde ise (jeneratör odası, kazan dairesi üstü tesisat gibi) zemin genellikle beton ve düzdür, misafir trafiği yoktur; bu bölümler genellikle gündüz saatlerinde, otel operasyonunu hiç etkilemeden tamamlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Otelin altı iç mekan bölümüne göre sınıf ve zamanlama tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, bir termal otelin tipik iç mekan bölümlerini, her birinin baskın kısıtını ve tercih ettiğimiz sınıf-zamanlama kombinasyonunu bir arada gösterir.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Baskın kısıt", "Önerilen sınıf", "Tercih edilen saat"],
                    satirlar: [
                        ["Lobi / resepsiyon", "Sürekli misafir trafiği", "Örümcek / kompakt makaslı", "Gece geç / sabah erken"],
                        ["Kapalı havuz / spa", "Nem, kayganlık, kimyasal", "Örümcek, takozlu ayak", "Havuz kapalıyken"],
                        ["Konferans / balo salonu", "Etkinlik takvimi", "Kompakt makaslı", "Etkinlikler arası boşluk"],
                        ["Restoran / açık büfe", "Servis saatleri", "Kompakt akülü", "Servisler arası geçiş"],
                        ["Oda katı koridoru", "Dar geçit", "Dikey / kompakt akülü", "Gün içi, düşük trafik"],
                        ["Depo / teknik hacim", "Yok (düşük trafik)", "Standart akülü makaslı", "Gündüz, esnek"],
                    ],
                },
            },
            {
                baslik: "Tek ziyarette birden fazla bölümü kapatmak",
                paragraflar: [
                    "Otel içi bir bakım programı, tek bir bölümle sınırlı kalmak zorunda değildir. Aynı kiralama gününde lobi, konferans salonu ve depo gibi farklı bölümleri art arda kapatmak mümkündür; bunun için her bölümün kendi zamanlama penceresi (lobi için gece, konferans salonu için etkinlik boşluğu, depo için gündüz) önceden bir güne yerleştirilir. Bu, hem nakliye kalemini tek seferde amorti eder hem otelin farklı departmanlarındaki bakım ihtiyacını tek bir ziyarette kapatır.",
                    "Bu tür çok bölümlü bir programı kurabilmemiz için otel teknik müdüründen her bölümün o gün için müsait olduğu saat aralığını isteriz; program bu saat aralıklarına göre kurulur, sahada saat aramayız.",
                ],
            },
            {
                baslik: "Zemin koruma ve misafir deneyimini bozmama ilkesi",
                paragraflar: [
                    "Otel içi çalışmanın temel kısıtı, bir fabrika veya depodan farklı olarak, çalışmanın kendisinin misafir deneyimini bozmaması gerekliliğidir. Bu, yalnızca gürültü veya görsel rahatsızlıkla sınırlı değildir; zemin hasarı, koku (özellikle hidrolik yağ kokusu) ve geçici erişim kısıtları da bu değerlendirmeye girer. Akülü sistemler bu yüzden otel içi işlerde standart tercihimizdir; egzoz kokusu üretmezler ve daha sessiz çalışırlar.",
                    "Her bölüm için zemin koruma malzemesi (keçe, karton, kauçuk plaka) önceden hazırlanır ve iş bitiminde geçen güzergâh baştan sona kontrol edilerek teslim edilir. Bu kontrol, otel teknik müdürüyle birlikte yapılır ve bir teslim tutanağına yazılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek bir ziyarette lobi, spa ve konferans salonunu birlikte kapatabilir misiniz?",
                cevap:
                    "Kapatabiliriz; bu, otel içi çalışmalarda en sık kurduğumuz program türüdür. Her bölümün kendi uygun saat penceresi (lobi için gece geç, spa için havuz kapalıyken, konferans salonu için etkinlikler arası boşluk) önceden belirlenir ve tek bir kiralama gününe yerleştirilir. Bunun için otel teknik müdüründen her bölümün o gün müsait olduğu saatleri isteriz; program bu bilgiyle önceden kurulur.",
            },
            {
                soru: "Spa alanında kimyasal koku veya buhar makineye zarar verir mi?",
                cevap:
                    "Kısa süreli çalışmalarda genellikle sorun yaratmaz, ancak nem ve kimyasal buhar sürekli maruziyette elektrikli aksama zarar verebilir. Bu yüzden spa alanında çalışan makinenin elektrikli bağlantıları önceden nem geçirmezlik açısından kontrol edilir ve çalışma süresi mümkün olduğunca kısa tutulur. Uzun süreli bir iş gerekiyorsa, çalışma birkaç kısa bloğa bölünerek ilerler.",
            },
            {
                soru: "Konferans salonumuzda hafta boyunca art arda etkinlik var; bakımı ne zaman yaparız?",
                cevap:
                    "Bu durumda etkinlikler arasındaki en küçük boşluğu (örneğin bir etkinliğin bitişi ile diğerinin kurulumu arasındaki birkaç saat) veya günün en erken saatini kullanırız. Etkinlik takviminizi paylaşırsanız, bakımı bu boşluklardan birine yerleştiririz; salon dolu veya kurulum aşamasındayken kesinlikle çalışmayız.",
            },
            {
                soru: "Oda katı koridorumuz çok dar; hangi makine kullanılır?",
                cevap:
                    "Oda katı koridorları genellikle standart makaslı sınıfın sığmadığı kadar dardır; bu yüzden dikey tip veya çok kompakt gövdeli akülü modeller tercih edilir. Koridor genişliğini ve tavan yüksekliğini bildirirseniz, o ölçüye uygun en dar sınıfı belirleriz. Bu tür dar koridorlarda çalışma, misafir odalarına giriş-çıkışın en az olduğu saatlere yazılır.",
            },
            {
                soru: "Hidrolik yağ kokusu misafirleri rahatsız eder mi?",
                cevap:
                    "Akülü sistemlerde bu risk oldukça düşüktür ve otel içi işlerde standart olarak akülü sınıfları tercih ederiz. Yine de her hidrolik sistemde çok az miktarda koku olasılığı vardır; bu yüzden misafir odalarına veya restorana yakın çalışmalarda kısa süreli, bölünmüş bloklar hâlinde ilerleriz ve çalışma alanı geçici olarak havalandırılır.",
            },
            {
                soru: "Restoran servis saatleri dışında ne kadar süre çalışabilirsiniz?",
                cevap:
                    "Bu, servisler arası boşluğun uzunluğuna bağlıdır; genellikle öğle ile akşam servisi arasındaki birkaç saatlik pencere yeterlidir. İş listesi bu pencereye sığmayacak kadar büyükse, kalan kısmı ertesi günün aynı penceresine böleriz. Masa-sandalye düzeninin toplanması otel personeli tarafından önceden yapılırsa, çalışma bu pencerede daha verimli ilerler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otellerin lobi/spa/konferans/restoran/koridor/depo iç mekan ayrımı genel otel işletmeciliği bilgisidir; bölüm bazlı zamanlama ve zemin koruma yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Termal Otel Ek Bina ve Kubbe İnşaatında Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Termal otel bölgesinde yeni bir ek bina, ilave havuz kubbesi veya spa genişletmesi yapılırken, inşaatın çelik konstrüksiyon aşaması standart bakım işlerinden tamamen farklı bir çalışma düzeni gerektirir: zemin henüz tamamlanmamıştır, saha bir şantiyedir ve makine bitmiş bir binaya değil, hâlâ yükselen bir yapıya hizmet eder. Bu aşamada iş kalemleri kolon-kiriş birleşim noktalarının kaynağı, çatı aşık montajı, cephe paneli kurulumu ve kubbe iskeletinin son montaj noktalarıdır. Bu sayfada otel bölgesindeki yeni yapım veya genişleme projelerinde çelik konstrüksiyon montajı için platform kiralamanın nasıl planlandığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Şantiye zemininde arazi tipi makine gerekliliği",
                metin:
                    "İnşaat hâlindeki bir otel ek binasının çevresi, henüz kaplanmamış toprak veya moloz dolgu zemin olabilir; bu zeminde standart akülü makaslı sınıf yetersiz kalır ve saplanma riski taşır. Bu aşamada arazi kabiliyeti yüksek, kalın tekerlekli dizel veya hibrit sınıflar tercih edilir. Zeminin güncel durumu (kuru, ıslak, henüz sıkışmamış) her ziyarette şantiye şefiyle birlikte kontrol edilir.",
            },
            {
                baslik: "Kolon-kiriş birleşim noktalarında kaynak desteği",
                metin:
                    "Çelik iskeletin kolon-kiriş birleşim noktalarındaki kaynak işlemi, sepetin belirli bir süre tek noktada sabit kalmasını gerektirir. Bu noktalar genellikle bina genelinde dağınık konumdadır; makine bir noktadan diğerine geçerken her seferinde yeniden konumlanır. Kaynak sırasında kıvılcım riski nedeniyle sepetin altındaki alan boşaltılır ve yanıcı malzeme uzaklaştırılır.",
            },
            {
                baslik: "Kubbe iskeletinin son montaj noktaları",
                metin:
                    "Havuz kubbesi gibi eğrisel çelik yapılarda, iskeletin tepe noktası ve segment birleşim yerleri, inşaatın en son ve en hassas aşamasını oluşturur. Bu noktalara erişim genellikle eklemli bir platformla sağlanır çünkü kubbenin eğimi düz bir kolla karşılanamaz. Segment birleşimleri tamamlanana kadar kubbe henüz yapısal olarak tam oturmamış olabilir; bu yüzden makinenin kubbenin kendisine değil, yanındaki iskele veya zemine dayanması gerekir.",
            },
            {
                baslik: "Cephe paneli montaj desteği",
                metin:
                    "Ek binanın dış cephe panelleri (kompozit panel, cam cephe birimi) genellikle vinç ile yukarı taşınır, ancak panelin son hizalama ve sabitleme işlemi platform üzerindeki bir montaj ekibi tarafından yapılır. Bu aşamada platform, panelin hemen yanında sabit durur ve ekip elle son ayarları yapar; panel ağırlığı platform tarafından taşınmaz, yalnızca ekip taşınır.",
            },
            {
                baslik: "Şantiye ile bitmiş otel binası arasındaki geçiş",
                metin:
                    "Ek bina inşaatı, çoğu zaman otelin işletmede olan ana binasının hemen yanında sürer; bu, iki farklı çalışma disiplininin (şantiye güvenliği ile otel misafir güvenliği) aynı sahada bir arada yürütülmesi anlamına gelir. Şantiye alanı, otel tarafından kullanılan alandan fiziksel olarak bariyerle ayrılır ve makinenin güzergâhı bu ayrımı bozmayacak şekilde planlanır; misafir trafiğine açık hiçbir noktadan şantiye ekipmanı geçirilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İnşaat aşamasına göre makine ve zemin eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, otel ek bina inşaatının farklı aşamalarında hangi zeminle ve hangi sınıfla çalışıldığını özetler.",
                ],
                tablo: {
                    basliklar: ["İnşaat aşaması", "Zemin durumu", "Baskın iş", "Önerilen sınıf"],
                    satirlar: [
                        ["Kaba iskelet (kolon-kiriş)", "Kaplanmamış, dolgu", "Kaynak, birleşim", "Arazi tipi dizel"],
                        ["Kubbe segment montajı", "Kısmen düzenlenmiş", "Eğrisel erişim", "Eklemli, uzun kollu"],
                        ["Cephe paneli montajı", "Kaplanmakta", "Hizalama, sabitleme", "Eklemli veya makaslı"],
                        ["İç kaba inşaat", "Beton, henüz kaplanmamış", "Tesisat ön montajı", "Standart akülü makaslı"],
                        ["Teslim öncesi ince işler", "Tamamlanmış zemin", "Son kontroller", "Kompakt akülü, iz bırakmayan"],
                    ],
                },
            },
            {
                baslik: "Şantiye şefinden istediğimiz bilgiler",
                paragraflar: [
                    "Bir inşaat aşamasındaki talebe doğru teklif verebilmemiz için şantiye şefinden üç bilgi isteriz: zeminin güncel durumu (kaplı mı, dolgu mu), çalışılacak noktaların yaklaşık kotu ve makinenin şantiyeye giriş güzergâhı. Bu bilgi, inşaatın hangi haftasında olduğuna göre sık sık değişebilir; bu yüzden şantiye aşamasındaki taleplerde tek seferlik değil, haftalık güncellenen bir bilgi akışı öneririz.",
                    "Zemin belirsizse veya haftadan haftaya değişiyorsa, her ziyaret öncesi kısa bir telefon teyidiyle güncel durumu kontrol ederiz; bu, saplanma veya devrilme riskini en aza indirir.",
                ],
            },
            {
                baslik: "Otel operasyonunu şantiyeden ayırmak",
                paragraflar: [
                    "Ek bina inşaatı sürerken ana otel binası genellikle işletmede kalmaya devam eder; bu yüzden şantiye trafiği ile misafir trafiğinin kesinlikle kesişmemesi gerekir. Makinenin şantiyeye giriş güzergâhı, otelin misafir giriş ve servis girişinden ayrı, mümkünse tamamen bağımsız bir noktadan planlanır.",
                    "Şantiye gürültüsü ve tozu da otel tarafında bir değerlendirme konusudur; kaynak ve kesim gibi gürültülü işler, otel yönetimiyle birlikte belirlenen saat aralıklarına yazılır ve bu aralıklar genellikle misafirlerin oda dışında olduğu gündüz saatleridir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otelimiz açıkken hemen yanında inşaat sürüyor; misafirler etkilenir mi?",
                cevap:
                    "Etkilenmemesi için şantiye alanı fiziksel bariyerle otel operasyon alanından ayrılır ve makinenin güzergâhı misafir trafiğinden tamamen bağımsız planlanır. Gürültülü işler (kaynak, kesim) otel yönetimiyle belirlenen saat aralıklarına yazılır. Şantiye ile otel arasındaki bu ayrım, talep alınırken ilk konuştuğumuz konudur.",
            },
            {
                soru: "Kubbe iskeletinin henüz tam oturmadığı bir aşamada platform kubbeye dayanabilir mi?",
                cevap:
                    "Hayır, bu risklidir. Segment birleşimleri tamamlanıp yapısal olarak onaylanmadan platform kubbenin kendisine dayanmaz; bunun yerine yanındaki iskele veya zemine dayanarak yandan yaklaşılır. Kubbenin hangi aşamada olduğunu ve yapısal onayın verilip verilmediğini şantiye mühendisinden teyit ettikten sonra çalışma planlanır.",
            },
            {
                soru: "Şantiye zemini haftadan haftaya değişiyor; her seferinde yeniden mi değerlendiriyorsunuz?",
                cevap:
                    "Evet, inşaat aşamasındaki taleplerde zemin durumu sabit kabul edilmez. Her ziyaret öncesi şantiye şefiyle kısa bir teyit yaparız; zemin kaplanmışsa daha standart bir sınıfa geçebiliriz, hâlâ dolgu veya ıslaksa arazi tipi sınıfta devam ederiz. Bu esneklik, saplanma veya devrilme riskini en aza indirmenin tek yoludur.",
            },
            {
                soru: "Kaynak işlemi sırasında ne gibi önlemler alıyorsunuz?",
                cevap:
                    "Kaynak sırasında sepetin altındaki alan boşaltılır, yanıcı malzeme uzaklaştırılır ve gerekiyorsa kıvılcım perdesi kullanılır. Ekip yangın söndürme ekipmanını yakınında bulundurur. Bu önlemler, otel binasının hemen yanında çalışıldığında daha da katı uygulanır çünkü yakındaki yapılara kıvılcım sıçraması riski ayrıca değerlendirilir.",
            },
            {
                soru: "Cephe panelleri vinçle mi yoksa platformla mı taşınıyor?",
                cevap:
                    "Panelin kendisi genellikle vinçle yukarı taşınır; platform, panelin son hizalama ve sabitleme işlemini yapan ekibi taşır, panelin ağırlığını taşımaz. Bu ayrım önemlidir çünkü platformlar malzeme kaldırma ekipmanı olarak tasarlanmamıştır; yalnızca kişi ve el aleti taşırlar.",
            },
            {
                soru: "İnşaat bitip otel açıldıktan sonra aynı ekiple mi çalışırsınız?",
                cevap:
                    "Genellikle evet; inşaat aşamasında sahayı tanıyan ekip, teslim sonrası ince iş ve son kontrol aşamasında da devam eder. Bu, sahanın geçmişini (hangi noktada hangi malzeme kullanıldı, hangi bölüm en son tamamlandı) bilen bir ekiple çalışmanın getirdiği bir süreklilik avantajıdır. Teslim sonrası otel işletmeye geçtiğinde ise çalışma saatleri ve zemin koruma kuralları, standart otel içi işlerdeki gibi misafir öncelikli bir düzene geçer.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otel bölgesindeki ek bina/kubbe genişleme projelerinin genel inşaat aşamaları (kaba iskelet, kubbe montajı, cephe kaplama) yapı sektörünün kamuya açık genel bilgisidir; zemin değerlendirme ve şantiye-otel ayrımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Afyon Kırsalında Tarım ve Silo Sahası Platform Kiralama",
        giris:
            "Afyon'un termal otel kümesinin çevresi, aynı zamanda ilin tarımsal üretiminin sürdüğü kırsal bir bölgedir; haşhaş, şeker pancarı ve tahıl gibi ürünlerin depolandığı silo tesisleri ve kurutma-depolama yapıları bu kırsal kesimde bulunur. Otel bölgesine göndereceğimiz makine filosu ile aynı bölgedeki bu tarımsal tesislere hizmet vermek, farklı bir zemin ve yapı tipiyle çalışmak anlamına gelir: silo dış cephesi, kurutma tesisinin çelik kule yapısı ve tarım aracı trafiğinin yoğun olduğu geniş açık sahalar. Bu sayfada kırsal kesimdeki tarımsal tesislerde platform kiralamanın nasıl planlandığını anlatıyoruz — otel iç mekanından tamamen farklı bir çalışma ortamıdır ve bu farkı baştan netleştirmek isteriz.",
        maddeler: [
            {
                baslik: "Silo dış cephesi ve merdiven-galeri bakımı",
                metin:
                    "Tahıl veya şeker pancarı silolarının dış cephesinde, dikey merdiven, galeri köprüsü ve üst kapak mekanizması periyodik kontrol ister. Silo genellikle dairesel bir yapı olduğu için, platformun sepeti cephe boyunca birkaç farklı açıdan yaklaşmalıdır. Zemin genellikle açık toprak veya stabilize sahadır; mevsime göre kuru veya çamurlu olabilir, bu yüzden arazi kabiliyeti yüksek bir sınıf tercih edilir.",
            },
            {
                baslik: "Kurutma tesisinin çelik kule yapısı",
                metin:
                    "Kampanya döneminde (hasat sonrası yoğun işleme dönemi) çalışan kurutma kuleleri, yüksek ve dar bir çelik konstrüksiyondur; bakım genellikle kampanya öncesi veya sonrası, tesis dururken yapılır. Kule etrafındaki dar geçitler ve boru hatları, makinenin manevra alanını sınırlar; bu yüzden dar gövdeli ve uzun uzanmalı bir sınıf tercih edilir.",
            },
            {
                baslik: "Açık sahada tarım aracı trafiği",
                metin:
                    "Hasat döneminde silo ve depo sahaları, traktör ve kamyon trafiğiyle doludur; bu dönemde bakım çalışması mümkünse ertelenir veya trafiğin en az olduğu saatlere sıkıştırılır. Kampanya dışı dönemlerde saha görece boş kalır ve çalışma günü daha esnek planlanabilir. Açık saha zemini toprak, stabilize veya kısmen betonlu olabilir; her durumda zeminin o günkü durumu ziyaret öncesi kontrol edilir.",
            },
            {
                baslik: "Mevsimsel erişim: yağış ve don etkisi",
                metin:
                    "Kırsal kesimdeki açık toprak zeminler, yağışlı dönemlerde çamurlaşır ve makinenin saplanma riski artar; kışın ise don-çözülme döngüsü zemini geçici olarak yumuşatabilir. Bu iki mevsimsel etken, kırsal tesislerdeki çalışmayı otel iç mekanından çok daha fazla hava koşuluna bağımlı kılar. Yağışlı veya donlu dönemlerde çalışma, zeminin en sağlam olduğu saatlere (örneğin kışın sabah, yazın kuru dönemde herhangi bir saat) yazılır.",
            },
            {
                baslik: "Kampanya dışı dönemde planlı bakım",
                metin:
                    "Kurutma ve silo tesislerinin çoğu, yılın belirli bir kampanya döneminde yoğun çalışır ve geri kalan zamanda görece durgun kalır. Bu durgun dönem, bakım için en uygun penceredir çünkü tesis trafiği azalır ve çalışma saatleri daha esnek olur. Tesis yönetimleriyle kampanya takvimini paylaşmalarını isteriz; bu bilgiyle bakım programını kampanya dışı döneme yerleştiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kırsal tesis tiplerine göre sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, Afyon kırsalındaki tarımsal tesis tiplerini ve her biri için tercih ettiğimiz sınıfı özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Baskın iş kalemi", "Zemin", "Önerilen sınıf"],
                    satirlar: [
                        ["Tahıl / pancar silosu", "Cephe, merdiven, kapak", "Toprak / stabilize", "Arazi tipi dizel"],
                        ["Kurutma kulesi", "Boru hattı, dar geçit", "Beton / stabilize", "Dar gövdeli, uzun uzanmalı"],
                        ["Açık depolama sahası", "Aydınlatma, direk", "Toprak, mevsime bağlı", "Arazi tipi dizel"],
                        ["Kapalı depo (silo yanı)", "Raf, aydınlatma", "Beton", "Standart akülü makaslı"],
                        ["İdari / ofis bloğu", "Aydınlatma, tabela", "Beton / cilalı", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Otel bölgesiyle aynı sevkiyata dahil etmek",
                paragraflar: [
                    "Kırsal tesisler, termal otel bölgesine görece yakın konumlandığı için, aynı hafta içinde her iki bölgeye hizmet verecek bir sevkiyat planlamak mümkündür. Bu, kırsal tesisin nakliye payını belirgin biçimde düşürür, çünkü makine bölgeye zaten iniyor olur. Bu birleşim otomatik değildir; tesisin bakım tarihini otel bölgesindeki programla örtüştürmek için önceden haber vermesi gerekir.",
                    "Kampanya öncesi ve sonrası dönemler, hem tarımsal tesisler hem termal oteller için görece sakin haftalara denk geldiğinden, bu iki talep türü genellikle aynı takvim dilimlerinde buluşur.",
                ],
            },
            {
                baslik: "Zemin bilgisini önceden almanın önceliği",
                paragraflar: [
                    "Kırsal bir tesise doğru teklif verebilmemiz için üç bilgiye ihtiyacımız var: zeminin o anki durumu (kuru, çamurlu, donlu), çalışılacak noktanın yaklaşık kotu ve sahaya giriş güzergâhının genişliği. Bu bilgi mevsime göre hızla değişebileceği için, ziyaretten kısa bir süre önce güncellenmiş hâliyle istenir.",
                    "Zemin belirsizse veya son yağıştan sonra durum netleşmemişse, ziyaret tarihini birkaç gün erteleyip zeminin toparlanmasını beklemeyi öneririz; bu, riskli bir zemine ısrarla makine indirmekten daha güvenlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo sahamız hasat döneminde çok yoğun; bakım yapılabilir mi?",
                cevap:
                    "Yapılabilir ama önerimiz kampanya dışı döneme ertelemektir; hasat döneminde traktör ve kamyon trafiği yoğunken çalışma alanının ayrılması zorlaşır. Kampanya takviminizi paylaşırsanız, bakımı öncesi veya sonrasındaki sakin haftaya yerleştiririz. Acil bir arıza varsa, trafiğin en az olduğu saatlere (genellikle sabah çok erken) sıkıştırılmış kısa bir ziyaret de mümkündür.",
            },
            {
                soru: "Zeminimiz yağmurdan sonra çamurlaştı; yine de gelebilir misiniz?",
                cevap:
                    "Zeminin durumuna bağlıdır; çok çamurlu bir zeminde arazi kabiliyeti yüksek bir sınıf kullansak bile saplanma riski taşır. Bu durumda genellikle zeminin birkaç gün kuruması için ziyareti ertelemeyi öneririz. Acil bir iş varsa, zeminin en sağlam olduğu güzergâhı önceden birlikte belirleriz ve gerekirse yük dağıtma plakası kullanırız.",
            },
            {
                soru: "Kurutma kulesinin dar geçitlerinde hangi makine kullanılır?",
                cevap:
                    "Kule etrafındaki dar geçitlerde standart makaslı sınıf çoğu zaman sığmaz veya manevra yapamaz; bu yüzden dar gövdeli ve uzun uzanmalı bir sınıf tercih ederiz. Geçit genişliğini ve kulenin yüksekliğini bildirirseniz, sığacak ve ulaşacak doğru sınıfı önceden belirleriz.",
            },
            {
                soru: "Otel bölgesine gelen makineyi bizim tesisimize de yönlendirebilir misiniz?",
                cevap:
                    "Yönlendirebiliriz, bu bölgedeki en ekonomik çalışma biçimidir. Tesisinizin konumu otel bölgesine yakınsa, aynı hafta içindeki bir sevkiyata eklenip nakliye payınızı düşürebilirsiniz. Bunun için tarihinizi önceden bildirmeniz yeterlidir; o hafta bölgede planlanmış bir program varsa sizi araya ekleriz.",
            },
            {
                soru: "Kışın don olduğunda zemin güvenli mi?",
                cevap:
                    "Don-çözülme döngüsü, yazın sağlam görünen bir zemini geçici olarak yumuşatabilir; bu yüzden kış çalışmalarını zeminin en donuk olduğu sabah saatlerine yazarız. Zemin ziyaret sabahı ayrıca kontrol edilir; öğleye doğru çözülme belirtisi görülürse çalışma o gün için ertelenir.",
            },
            {
                soru: "Silo cephesindeki merdiven ve galeriye nasıl yaklaşıyorsunuz?",
                cevap:
                    "Silo genellikle dairesel bir yapı olduğu için, cephe boyunca birden fazla noktadan yaklaşılması gerekir; her nokta farklı bir açı gerektirebilir. Makinenin duracağı her nokta, zemin sağlamlığına göre önceden seçilir ve sepet merdiven veya galeri yapısına doğrudan dayanmaz, yanından yaklaşır. Cephenin yaklaşık çapını ve merdivenin konumunu bildirirseniz, güzergâhı önceden planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon kırsalının tarımsal silo ve kurutma tesisi varlığı ile kampanya dönemi çalışma takvimi kamuya açık genel bilgidir; zemin değerlendirmesi ve otel bölgesiyle sevkiyat birleştirme yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Termal Otel ve Kaplıca Dış Alanında Enerji ve Aydınlatma Bakım Platformu",
        giris:
            "Bir termal otelin dış görünümü, gece saatlerinde büyük ölçüde aydınlatmayla şekillenir: bahçe yürüyüş yolları, havuz çevresi peyzaj aydınlatması, giriş kanopisi, otopark direkleri ve bina cephesindeki vurgu ışıkları. Bu aydınlatma ağı, otel içindeki tek bir odadan farklı olarak geniş bir açık alana yayılır ve her biri farklı yükseklikte, farklı direk tipinde ve farklı erişim koşulunda onlarca noktadan oluşur. Bu sayfa, ağın içindeki ikinci en detaylı hizmet sayfasıdır çünkü dış aydınlatma ve enerji hattı bakımı, otel işletmelerinin en sık tekrarlayan ama en çok göz ardı edilen bakım kalemidir — bir ampul yanmadığında fark edilir, ama peyzaj aydınlatma sisteminin bütünü olarak ne zaman kontrol edildiği nadiren takip edilir. Aşağıda otel dış alanındaki aydınlatma ve enerji hattı bakımının farklı noktalarını, hangi sınıfın hangi noktaya gittiğini ve yıllık bir bakım programının nasıl kurulduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Bahçe ve yürüyüş yolu aydınlatma direkleri",
                metin:
                    "Otel bahçesindeki alçak boy aydınlatma direkleri (genellikle diz ile bel hizası arası) çoğu zaman merdiven veya seyyar platform gibi basit yöntemlerle bakımı yapılabilir gibi görünse de, direk sayısının fazla olduğu geniş bahçelerde bu yöntem hem yavaş hem güvenlik açısından risklidir. Bu tür alçak ama sayıca çok noktada, hızlı konumlanan kompakt bir platform, tur şeklinde direk direk ilerleyerek işi tek günde bitirir. Bahçe zemini çim, taş döşeme veya toprak olabilir; tekerlek tipi bu zemine göre önceden seçilir.",
            },
            {
                baslik: "Havuz çevresi peyzaj aydınlatması",
                metin:
                    "Açık veya kapalı havuzun çevresindeki peyzaj aydınlatması, hem estetik hem güvenlik amaçlı çalışır; bu armatürler genellikle zemine gömülü veya alçak duvarlara monte edilmiştir. Havuz kenarındaki nemli ve kaygan zemin, makinenin ayak basıncını dağıtan takozlarla desteklenir; su birikintisi olan noktalarda elektrik kesintisi önceden yapılmadan hiçbir armatüre dokunulmaz. Bu bölümdeki iş, genellikle havuzun kapalı olduğu erken saatlere yazılır.",
            },
            {
                baslik: "Giriş kanopisi ve otopark direkleri",
                metin:
                    "Otelin araç girişindeki kanopi altı aydınlatma ve otopark direkleri, en yüksek kullanım yoğunluğuna sahip dış alan noktalarıdır; bu yüzden bakım genellikle araç trafiğinin en az olduğu gece geç veya sabah çok erken saatte yapılır. Kanopi altı çalışırken araç geçişi geçici olarak yönlendirilir; otopark direklerinde ise çalışılan direğin çevresi koni ile işaretlenir, araç park etmesi engellenir.",
            },
            {
                baslik: "Bina cephesi vurgu ışıkları ve tabela aydınlatması",
                metin:
                    "Otel binasının gece görünümünü belirleyen cephe vurgu ışıkları ve marka tabelası aydınlatması, genellikle yerden belirli bir yükseklikte, bazen çıkıntılı bir noktada konumlanır. Bu noktalara erişim için, cephenin geometrisine göre eklemli veya örümcek platform seçilir; ışığın rengi veya açısı değiştirilecekse otel yönetiminin görsel onayı iş bitmeden alınır, çünkü bu tür değişiklikler geri dönüşü zor bir görsel etki yaratabilir.",
            },
            {
                baslik: "Enerji hattı ve trafo çevresi güvenlik önlemi",
                metin:
                    "Bazı otellerin kendi trafo merkezi veya orta gerilim hattı çevresinde çalışma gerekebilir; bu tür işlerde standart bakım kurallarının üzerine elektrik güvenlik protokolü eklenir. Çalışma öncesi ilgili hattın enerjisi tesis elektrik sorumlusu tarafından kesilir ve bu, yazılı olarak teyit edilir. Enerjili hat yakınında hiçbir koşulda çalışma yapılmaz; bu, üzerinde pazarlık yapılmayan tek kuraldır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dış alan aydınlatma noktalarına göre sınıf ve zamanlama",
                paragraflar: [
                    "Aşağıdaki tablo, termal otel dış alanındaki tipik aydınlatma ve enerji noktalarını, ana kısıtını ve önerdiğimiz sınıf-zamanlama kombinasyonunu özetler.",
                ],
                tablo: {
                    basliklar: ["Nokta", "Ana kısıt", "Önerilen sınıf", "Tercih edilen saat"],
                    satirlar: [
                        ["Bahçe / yürüyüş yolu direği", "Çok sayıda, alçak boy", "Kompakt, hızlı konumlanan", "Gündüz, esnek"],
                        ["Havuz çevresi peyzaj ışığı", "Nem, kayganlık", "Örümcek, takozlu ayak", "Havuz kapalıyken"],
                        ["Giriş kanopisi / otopark", "Yüksek araç trafiği", "Eklemli veya makaslı", "Gece geç / sabah erken"],
                        ["Cephe vurgu ışığı / tabela", "Görsel hassasiyet, çıkıntı", "Eklemli, örümcek", "Gündüz, görüş netken"],
                        ["Trafo / orta gerilim çevresi", "Elektrik güvenliği", "Standart, enerji kesilmiş", "Enerji kesim onayı sonrası"],
                    ],
                },
            },
            {
                baslik: "Yıllık aydınlatma bakım turu",
                paragraflar: [
                    "Otel dış aydınlatmasının en verimli bakım biçimi, arıza çıktıkça tek tek müdahale etmek yerine yılda bir veya iki kez planlı bir turla bütün noktaları taramaktır. Bu turda bahçe, havuz çevresi, giriş ve cephe noktaları tek bir kiralama gününde art arda dolaşılır; her noktanın zamanlama kısıtı (havuz kapalıyken, araç trafiği azken gibi) önceden bir güne yerleştirilir.",
                    "Yıllık tur kuran oteller, hem arızayı önceden yakalar hem her ampul veya armatür için ayrı ayrı çağrı yapmanın nakliye maliyetinden kurtulur. Sizden istediğimiz, tercih ettiğiniz dönemi (örneğin yüksek sezon öncesi) bildirmenizdir; her yıl aynı döneme hatırlatma yaparız.",
                ],
            },
            {
                baslik: "Elektrik sorumlusuyla koordinasyon",
                paragraflar: [
                    "Dış aydınlatma ve enerji hattı bakımında, otelin kendi elektrik sorumlusuyla koordinasyon çalışmanın ayrılmaz bir parçasıdır. Hangi hattın hangi panodan beslendiği, hangi noktanın ortak devrede olduğu ve enerji kesiminin diğer sistemleri (örneğin havuz filtrasyon pompası) nasıl etkileyeceği, çalışma başlamadan netleştirilir.",
                    "Bu koordinasyon olmadan başlanan bir iş, beklenmedik bir kesintiye veya yanlış devrenin kapatılmasına yol açabilir. Bu yüzden trafo veya orta gerilim çevresindeki işlerde, otelin elektrik sorumlusunun sahada fiilen bulunmasını şart koşarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bahçemizde çok sayıda direk var; hepsini tek günde bitirebilir misiniz?",
                cevap:
                    "Direk sayısına ve aralarındaki mesafeye bağlıdır, ama kompakt ve hızlı konumlanan bir platformla çoğu orta ölçekli bahçe turu tek günde tamamlanır. Direklerin yaklaşık sayısını ve bahçenin genel büyüklüğünü bildirirseniz, süre tahminini önceden veririz. Tur, en uzak noktadan başlayıp girişe doğru ilerleyecek şekilde planlanır; böylece makine her seferinde en kısa mesafeyi kat eder.",
            },
            {
                soru: "Havuz çevresindeki ışıklara su varken dokunulabilir mi?",
                cevap:
                    "Hayır, su birikintisi olan bir noktadaki armatüre elektrik kesilmeden dokunulmaz. Çalışma öncesi ilgili devrenin enerjisi kesilir ve bu, tesis elektrik sorumlusu tarafından yazılı olarak teyit edilir. Su tamamen çekilene veya alan kurutulana kadar iş ertelenebilir; bu, elektrik güvenliği açısından üzerinde pazarlık yapmadığımız bir kuraldır.",
            },
            {
                soru: "Giriş kanopisinin altında araç trafiğini durdurmadan çalışabilir misiniz?",
                cevap:
                    "Kısa süreli işlerde araç geçişini geçici olarak yönlendirerek çalışabiliriz, ancak trafiğin en az olduğu gece geç veya sabah çok erken saatler her zaman daha güvenli ve daha hızlıdır. Kanopi altı tamamen kapatılmadan önce alternatif bir araç geçiş rotası otel güvenlik ekibiyle birlikte belirlenir.",
            },
            {
                soru: "Cephedeki ışığın rengini değiştirmek istiyoruz; bunu siz mi öneriyorsunuz?",
                cevap:
                    "Işık rengi veya açısı gibi görsel değişiklikleri biz önermeyiz; bu tamamen otel yönetiminin tercihidir. Talep ederseniz teknik olarak uygulanabilirliğini değerlendirir, uygulamadan önce görsel onayınızı isteriz çünkü bu tür değişiklikler geri dönüşü zor bir etki yaratabilir. Onay alındıktan sonra uygulama, standart bir bakım işinden farklı bir süreç izlemez.",
            },
            {
                soru: "Trafo merkezimizin yakınında çalışma güvenli mi?",
                cevap:
                    "Doğru protokolle güvenlidir. Çalışma öncesi ilgili hattın enerjisi otelin elektrik sorumlusu tarafından kesilir ve bu yazılı olarak teyit edilir; enerjili hat yakınında hiçbir koşulda çalışma yapılmaz. Elektrik sorumlunuzun çalışma sırasında sahada bulunmasını şart koşarız; bu, hem bizim ekibimiz hem otelinizin sistemleri için ek bir güvence katmanıdır.",
            },
            {
                soru: "Yıllık bakım turu kurmak bize ne kazandırır?",
                cevap:
                    "En büyük kazanç, arızayı misafir fark etmeden önce yakalamaktır; ikinci kazanç ise nakliye maliyetidir, çünkü bahçe, havuz çevresi, giriş ve cephe noktaları tek bir ziyarette birleştirildiğinde her biri için ayrı ayrı çağrı yapmaktan belirgin biçimde daha ucuza gelir. Sizden istediğimiz, tercih ettiğiniz dönemi (örneğin sezon öncesi) bildirmenizdir; her yıl aynı döneme hatırlatma yaparız ve program yıldan yıla benzer bir akışta ilerler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otellerin bahçe/havuz/giriş/cephe dış aydınlatma ağının genel yapısı otel işletmeciliğinin kamuya açık genel bilgisidir; sınıf-zamanlama eşleşmesi ve elektrik koordinasyon yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Termal Otellerde Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Bir termal otelin teknik kadrosu genellikle elektrik, sıhhi tesisat ve genel bakımdan sorumlu az sayıda personelden oluşur; bu ekip, yüksekte çalışma platformunu günlük olarak kullanma konusunda her zaman deneyimli olmayabilir. Bu yüzden otel işletmelerinden gelen taleplerin büyük kısmı operatörlü kiralamaya yönelir — makineyi bizim eğitimli operatörümüz kullanır, otel personeli yalnızca çalışılacak noktayı ve erişim koşullarını bildirir. Bazı büyük otellerde ise teknik ekip yeterince deneyimliyse operatörsüz kiralama tercih edilir. Bu sayfada iki modelin otel bağlamında nasıl işlediğini, hangi durumda hangisinin uygun olduğunu ve sorumluluk paylaşımının nasıl yapıldığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Operatörlü kiralamada otel personelinin rolü",
                metin:
                    "Operatörlü bir kiralamada otel personeli makineyi kullanmaz; onun rolü, çalışılacak noktayı göstermek, gerekli erişim izinlerini (örneğin bir salonun boşaltılması, bir kapının kilidinin açılması) sağlamak ve varsa özel hassasiyetleri (örneğin bir avizenin kristallerine dokunmama) önceden bildirmektir. Operatörümüz, otel personelinin yönlendirmesiyle sepeti doğru noktaya taşır ve işi bizim teknik ekibimiz yürütür.",
            },
            {
                baslik: "Operatörsüz kiralamada yeterlilik ve sorumluluk",
                metin:
                    "Operatörsüz kiralamada, makineyi kullanacak otel personelinin yüksekte çalışma platformu kullanım yeterliliği belgesi doğrulanır; bu belge olmadan makine teslim edilmez. Teslim sırasında kısa bir kullanım eğitimi ve kumanda tanıtımı yapılır. Bu modelde günlük kontrol (lastik, korkuluk, acil indirme) ve güvenli kullanım sorumluluğu otel personeline geçer; kiralama şirketinin periyodik bakımı ise devam eder.",
            },
            {
                baslik: "Hangi işlerde operatörlü seçenek tercih edilir",
                metin:
                    "Kısa süreli, tek seferlik veya teknik olarak hassas işlerde (örneğin lobi avizesi, kubbe çatısı) operatörlü seçenek genellikle daha hızlı ve güvenli ilerler; çünkü operatörümüz makineye ve otel içi erişim tekniklerine (dar kapı geçişi, zemin koruma) aşinadır. Otel personelinin bu makineyi yalnızca birkaç saatliğine kullanacağı durumlarda, kısa bir eğitimle güvenli kullanım seviyesine ulaşmak her zaman mümkün olmayabilir.",
            },
            {
                baslik: "Hangi işlerde operatörsüz seçenek tercih edilir",
                metin:
                    "Uzun süreli veya düzenli tekrar eden işlerde (örneğin haftalık aydınlatma kontrolü) operatörsüz kiralama daha ekonomik olabilir, çünkü otel kendi personelini bir kez eğitip makineyi tekrar tekrar kullanabilir. Bu model, teknik ekibi büyük ve deneyimli olan büyük otel zincirlerinde daha sık tercih edilir; küçük ve orta ölçekli otellerde ise operatörlü seçenek genellikle daha pratik kalır.",
            },
            {
                baslik: "İki modelin bir arada kullanılması",
                metin:
                    "Bazı oteller, yıllık büyük bakım turunu operatörlü, günlük küçük müdahaleleri ise kendi personeliyle operatörsüz yürütmeyi tercih eder. Bu karma model, hem yıllık turun profesyonel ve hızlı ilerlemesini hem günlük küçük ihtiyaçların otel içinde hızla karşılanmasını sağlar. Hangi modelin hangi iş için uygun olduğuna, işin süresine ve otel personelinin deneyimine göre birlikte karar verilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki kiralama modelinin otel bağlamındaki farklarını özetler.",
                ],
                tablo: {
                    basliklar: ["Kriter", "Operatörlü", "Operatörsüz"],
                    satirlar: [
                        ["Makineyi kim kullanır", "Bizim eğitimli operatörümüz", "Otel personeli (belgeli)"],
                        ["Uygun iş süresi", "Kısa / tek seferlik", "Uzun / tekrar eden"],
                        ["Otel personeli hazırlığı", "Erişim izni, yönlendirme", "Kullanım belgesi + eğitim"],
                        ["Günlük kontrol sorumluluğu", "Bizim ekibimizde", "Otel personelinde"],
                        ["Hassas işlerde uygunluk", "Yüksek (deneyimli operatör)", "Personelin deneyimine bağlı"],
                    ],
                },
            },
            {
                baslik: "Belge ve yeterlilik doğrulama süreci",
                paragraflar: [
                    "Operatörsüz kiralama talebinde, makineyi kullanacak kişinin yüksekte çalışma platformu kullanım belgesi teslim öncesi kontrol edilir; belge yoksa makine bu modelde teslim edilmez, bunun yerine operatörlü seçeneğe geçilir veya otel personelinin belgelendirme sürecini tamamlaması beklenir. Bu kontrol, hem yasal hem güvenlik gerekliliğidir ve üzerinde esneklik gösterilmez.",
                    "Belge doğrulandıktan sonra teslim sırasında makineye özgü kısa bir tanıtım yapılır; bu, genel platform kullanım bilgisinin ötesinde, o spesifik modelin kumanda düzenini ve acil durdurma noktasını içerir.",
                ],
            },
            {
                baslik: "Karma model ile yıllık program kurmak",
                paragraflar: [
                    "Düzenli çalıştığımız otellerde genellikle karma bir model öneririz: yılda bir veya iki kez yapılan büyük bakım turu (lobi, spa, konferans salonu, dış cephe) operatörlü olarak yürütülür, arada çıkan küçük ihtiyaçlar ise otel personelinin operatörsüz kullanabileceği bir makineyle karşılanır. Bu model, hem büyük turun profesyonel hızda ilerlemesini hem küçük ihtiyaçların beklemeden çözülmesini sağlar.",
                    "Bu programı kurmak için otel teknik müdürünün deneyim seviyesini ve yıllık bakım takvimini bilmemiz yeterlidir; ilk yıl genellikle operatörlü ağırlıklı başlar, personel deneyim kazandıkça operatörsüz payı artırılabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Personelimizin belgesi yok; yine de operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Hayır, belge olmadan makineyi operatörsüz teslim etmeyiz; bu, güvenlik ve yasal gereklilik açısından esneklik gösterilmeyen tek kuraldır. Bunun yerine operatörlü seçeneği öneririz; işiniz tamamlanırken personeliniz operatörümüzle birlikte gözlemleyerek deneyim kazanabilir, ileride belgelendirme sürecini bu gözlemle destekleyebilir.",
            },
            {
                soru: "Operatörlü kiralamada otel personelinin hiç işi yok mu?",
                cevap:
                    "Var, ama makineyi kullanmak değil. Otel personeli çalışılacak noktayı gösterir, gerekli erişim iznini sağlar (salon boşaltma, kapı açma gibi) ve varsa hassas noktaları (örneğin kırılgan bir avize) önceden bildirir. Operatörümüz bu bilgiyle sepeti doğru ve güvenli biçimde yönlendirir; koordinasyon sürekli iki taraflı ilerler.",
            },
            {
                soru: "Hangi model daha ekonomik?",
                cevap:
                    "İşin süresine bağlıdır. Kısa süreli veya tek seferlik işlerde operatörlü genellikle daha ekonomiktir çünkü otel personelini eğitmek ve belgelendirmek tek seferlik bir iş için maliyetli olabilir. Uzun süreli veya sık tekrar eden ihtiyaçlarda ise operatörsüz model, personel bir kez belgelendirildikten sonra daha ekonomik hâle gelir. Kararı, işinizin sıklığını bildirdiğinizde birlikte veririz.",
            },
            {
                soru: "Operatörünüz otel içindeki hassas alanlara (spa, lobi) aşina mı?",
                cevap:
                    "Evet, otel içi işlerde görevlendirdiğimiz operatörler, zemin koruma, dar kapı geçişi ve misafir trafiğine göre çalışma gibi otel özel koşullarına aşinadır. Yine de her otelin kendine özgü düzeni farklı olduğu için, ilk ziyarette otel teknik müdürüyle kısa bir yönlendirme turu yapılır; bu, sonraki ziyaretlerde işi hızlandırır.",
            },
            {
                soru: "Karma model (bazen operatörlü, bazen operatörsüz) mümkün mü?",
                cevap:
                    "Mümkündür ve düzenli çalıştığımız otellerde sıkça tercih edilen bir modeldir. Yıllık büyük bakım turu operatörlü yürütülürken, arada çıkan küçük ihtiyaçlar için otel personeli belgelendirilip operatörsüz kullanım hakkı tanınabilir. Hangi işin hangi modelle yürütüleceğini, işin niteliğine ve süresine göre birlikte planlarız.",
            },
            {
                soru: "Operatörsüz kullanımda bir arıza çıkarsa ne olur?",
                cevap:
                    "Otel personeli, günlük kontrolde fark ettiği olağan dışı bir durumda (ses, sızıntı, alarm) makineyi durdurur ve bizi arar; servis ekibimiz durumu değerlendirir. Periyodik bakım her koşulda kiralama şirketinin sorumluluğunda kalır; günlük kullanım sırasındaki gözle görülür kontrol ise operatörsüz modelde personelin sorumluluğundadır. Bu ayrım, teslim tutanağında baştan açıkça yazılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otellerin teknik kadro büyüklüğüne göre operatörlü/operatörsüz tercih eğilimi genel otel işletmeciliği gözlemidir; yeterlilik doğrulama ve karma model firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Afyon Termal Otel Kümesinde Çok Noktalı Rota Bakım Platformu",
        giris:
            "Afyon'un termal otel ve kaplıca bölgesi, birbirine yakın konumlanmış birden fazla tesisten oluşan bir küme oluşturur; bu yakınlık, tek bir makineyi bölgeye bir kez indirip birden fazla oteli aynı hafta içinde dolaştırmayı mümkün kılar. Çok noktalı rota bakımı, her otelin kendi bakım listesini bağımsız tutarken nakliye maliyetini paylaşan bir çalışma biçimidir. Bu sayfada bölgedeki birden fazla otele aynı programda nasıl hizmet verdiğimizi, rotanın nasıl kurulduğunu ve her otelin kendi teklif ve tutanağını nasıl aldığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Rota kurgusunun mantığı",
                metin:
                    "Bir hafta içinde bölgeye giden makine, o hafta bakım talebi olan otelleri coğrafi yakınlığa ve iş kalemi benzerliğine göre sıralar. Örneğin dış cephe ve aydınlatma işi olan iki otel art arda planlanırken, iç mekan işi olan bir otel farklı bir güne yazılabilir. Rota, her otelin kendi zamanlama kısıtını (örneğin lobi için gece, konferans salonu için etkinlik boşluğu) da hesaba katarak kurulur.",
            },
            {
                baslik: "Her otelin bağımsız teklif ve tutanağı",
                metin:
                    "Çok noktalı rotada oteller arasında hiçbir ticari bağ oluşmaz; her otel kendi iş kalemi için ayrı bir teklif alır ve iş bitiminde kendi teslim tutanağını imzalar. Paylaşılan tek kalem nakliyedir; bu da her otelin payına düşen kısmı ayrı ayrı gösterecek biçimde teklife yazılır. Bir otelin işi uzarsa veya iptal olursa, bu diğer otellerin programını etkilemez, yalnızca rota sırası yeniden düzenlenir.",
            },
            {
                baslik: "Yeni bir otelin rotaya eklenmesi",
                metin:
                    "Bölgede daha önce çalışmadığımız bir otel, mevcut bir haftalık rotaya kolayca eklenebilir; bunun için otelin bakım listesini ve tercih ettiği tarih aralığını paylaşması yeterlidir. O hafta bölgeye zaten planlanmış bir program varsa, yeni otel bu programa dahil edilir ve nakliye payı düşer; program yoksa yeni bir rota kurulur ve bölgedeki diğer bilinen otellere de haber verilir.",
            },
            {
                baslik: "Acil talebin rotayı bozmadan karşılanması",
                metin:
                    "Bir otelde beklenmedik bir arıza çıktığında, programlı rotadan bağımsız acil bir ziyaret yapılabilir; bu, rotadaki diğer otellerin sırasını bozmaz çünkü acil çağrı ayrı bir sevkiyat olarak değerlendirilir. Acil çağrı bedeli teklifte ayrı bir kalem olarak gösterilir; eğer acil talep zaten planlanmış bir rota haftasına denk gelirse, rotaya küçük bir ek durak olarak eklenir ve ek nakliye doğmaz.",
            },
            {
                baslik: "Yıllık takvimle rota öngörülebilirliği",
                metin:
                    "Bölgedeki birkaç otel, bakım takvimini yıllık bir programa bağladığında, rota her yıl benzer bir dönemde tekrar eder ve hem otel hem bizim için planlama kolaylaşır. Bu düzeni kuran otellerle her yıl aynı döneme yaklaşırken hatırlatma yaparız; tarih değişikliği olduğunda önceden haber vermeleri yeterlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tipik bir bölgesel rota haftası",
                paragraflar: [
                    "Aşağıdaki tablo, bölgede birden fazla otele hizmet veren tipik bir hafta içi rotanın nasıl kurulduğunu örnekler; gerçek sıralama her hafta otellerin talebine göre yeniden kurulur.",
                ],
                tablo: {
                    basliklar: ["Gün", "Odak", "Zamanlama kısıtı", "İş kalemi örneği"],
                    satirlar: [
                        ["1. gün", "Otel A – dış cephe", "Gündüz, görüş netken", "Aydınlatma, tabela"],
                        ["2. gün", "Otel B – lobi/spa", "Gece geç / havuz kapalı", "Avize, peyzaj ışığı"],
                        ["3. gün", "Otel C – depo/çamaşırhane", "Gündüz, esnek", "İstifleme, raf bakımı"],
                        ["4. gün", "Otel A – konferans salonu", "Etkinlikler arası boşluk", "Asma tavan aydınlatması"],
                        ["5. gün", "Yedek / acil çağrı", "Değişken", "Rotaya eklenen ek durak"],
                    ],
                },
            },
            {
                baslik: "Rotaya katılmak için gereken bilgi",
                paragraflar: [
                    "Bölgesel rotaya dahil olmak isteyen bir otelden istediğimiz bilgi basittir: bakım listesi, tercih edilen tarih aralığı ve varsa zamanlama kısıtları (örneğin belirli bir salon hafta boyunca doluysa). Bu bilgiyle otel, o haftaki rotaya en uygun güne yerleştirilir.",
                    "Tarih tercihi kesin değilse dahi esnek olduğunu belirtmeniz, rotayı en verimli biçimde kurmamıza yardımcı olur; kesin tarihi olan talepler önceliklidir, esnek talepler boşluklara yerleştirilir.",
                ],
            },
            {
                baslik: "Rotanın sınırları: her otel kendi kararını verir",
                paragraflar: [
                    "Bölgesel rota, nakliye maliyetini paylaşan bir modeldir ama her otelin kendi bakım kapsamı, bütçesi ve zamanlaması bağımsız kalır. Bir otel rotaya dahil olmayı tercih etmese bile, kendi tarihinde bağımsız bir teslimat almaya devam edebilir; bu durumda yalnızca nakliye payı paylaşılmadığı için biraz daha yüksek olur.",
                    "Rota, hiçbir otelin bakım kapsamını veya standardını diğerine göre belirlemez; her otel kendi ihtiyaç listesini bağımsız oluşturur, biz yalnızca lojistik açıdan bunları aynı haftaya yerleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bölgedeki hangi otellerin rotada olduğunu bilebilir miyiz?",
                cevap:
                    "Müşteri gizliliği gereği hangi otellerle çalıştığımızı isim vererek paylaşmayız, ancak o hafta bölgeye planlanmış bir programın olup olmadığını ve sizin talebinizin bu programa eklenip eklenemeyeceğini açıkça söyleriz. Rotaya dahil olduğunuzda dahi diğer otellerin bakım listesi veya teklif detayı sizinle paylaşılmaz; her otel kendi bilgisinde kalır.",
            },
            {
                soru: "Rotaya dahil olursak nakliye maliyetimiz ne kadar düşer?",
                cevap:
                    "Kesin bir oran vermek zordur çünkü bu, rotadaki otel sayısına ve her otelin iş kalemine bağlıdır; ancak genel eğilim olarak paylaşılan bir rotada nakliye payı bağımsız bir teslimata göre belirgin biçimde düşer. Talep sırasında tarihinizi bildirirseniz, o hafta bölgede bir program olup olmadığını kontrol eder, size somut bir teklif sunarız.",
            },
            {
                soru: "Rotadaki bir otelin işi uzarsa bizim tarihimiz kayar mı?",
                cevap:
                    "Genellikle kaymaz; rota, her otelin işi için ayrı bir zaman dilimi ayırarak kurulur ve küçük gecikmeler için tampon süre bırakılır. Ancak beklenmedik büyük bir gecikme olursa, sıradaki otele önceden haber veririz ve alternatif bir saat veya kısa bir erteleme önerisi sunarız; sizi habersiz bırakmayız.",
            },
            {
                soru: "Rotaya sonradan eklenmek mümkün mü?",
                cevap:
                    "Mümkündür, özellikle talebiniz acil değilse. Bakım listenizi ve tarih tercihinizi paylaşırsanız, o hafta bölgede planlanmış bir rota varsa sizi uygun bir güne ekleriz. Rota tamamen dolu veya çok yakın bir tarihe denk geliyorsa, bir sonraki haftaki rotaya veya bağımsız bir teslimata yönlendiririz.",
            },
            {
                soru: "Küçük bir otel olarak büyük otellerle aynı rotada yer alabilir miyiz?",
                cevap:
                    "Alabilirsiniz; rota, otel büyüklüğüne göre değil coğrafi yakınlık ve tarih uyumuna göre kurulur. Küçük bir otelin kısa süren bir iş kalemi, büyük bir otelin uzun süren işiyle aynı haftaya, farklı günlere yerleştirilebilir. Her otel kendi teklifini aldığı için büyüklük farkı, hizmetin kapsamını veya fiyatını doğrudan etkilemez.",
            },
            {
                soru: "Rotayı yıllık olarak sabitleyebilir miyiz?",
                cevap:
                    "Sabitleyebilirsiniz; düzenli çalıştığımız birkaç otel bu şekilde ilerliyor. Yıllık bir dönem (örneğin sezon öncesi belirli bir hafta) üzerinde anlaşırsak, her yıl o döneme yaklaşırken size hatırlatma yapar, rotayı önceden kurarız. Tarih değişikliği gerekirse önceden haber vermeniz yeterlidir; yıllık program esnek kalır, katı bir taahhüt değildir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon termal otel bölgesinin coğrafi kümelenmesi kamuya açık genel bilgidir; rota kurgusu, bağımsız teklif modeli ve nakliye paylaşımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Termal Otel Bahçesi ve Açık Sahasında Zor Zemin / Arazi Platform Kiralama",
        giris:
            "Bir termal otelin dış alanı, her zaman düz ve tamamlanmış bir peyzaj değildir; yeni açılan bir bahçe bölümü, henüz kaplanmamış bir otopark genişlemesi veya kaplıca kaynağına yakın doğal zeminli bir alan, standart bir platformun tasarım varsayımından uzak bir zemin sunabilir. Bu tür noktalarda çalışırken zemin, tek seferlik bir gözlemle değil, her ziyarette yeniden değerlendirilen bir konudur. Bu sayfada otel dış sahasındaki zor zemin senaryolarını, hangi durumda arazi tipi makinenin tercih edildiğini ve mevsimsel etkenlerin plana nasıl yansıdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Yeni açılan bahçe bölümünde gevşek toprak",
                metin:
                    "Otel bahçesinin genişletildiği veya yeniden düzenlendiği bir bölümde, toprak henüz sıkışmamış ve düzensiz bir yapı taşıyabilir. Bu alanda çalışma gerekiyorsa, makinenin duracağı nokta mümkünse zaten sıkışmış bir kesimden seçilir; henüz işlenmemiş toprak üzerine platform indirilmez. Zeminin durumu konusunda tereddüt varsa, peyzaj ekibinin son çalışma tarihi ve hangi bölümün tamamlandığı bilgisi talep alınırken sorulur.",
            },
            {
                baslik: "Kaplanmamış otopark genişlemesi",
                metin:
                    "Otoparkın yeni eklenen bir bölümü, henüz asfalt veya parke kaplanmamış stabilize zeminde olabilir. Bu zeminde standart akülü makaslı sınıf yetersiz kalabilir; arazi kabiliyeti yüksek bir sınıf tercih edilir. Zeminin sıkışma derecesi, özellikle yağıştan sonra hızla değişebileceği için, ziyaret tarihine yakın bir kontrol yapılır.",
            },
            {
                baslik: "Kaplıca kaynağına yakın doğal zemin",
                metin:
                    "Bazı termal tesislerde kaynak suyu çevresi, kaplanmamış doğal bir zemin olarak bırakılır; bu zemin mineral birikimi nedeniyle zamanla sertleşmiş ama düzensiz bir yüzey oluşturabilir. Bu tür alanlarda çalışmadan önce zeminin sağlamlığı fiziksel olarak kontrol edilir; gerekiyorsa yük dağıtma plakası kullanılır ve makinenin duracağı nokta en düzenli kesimden seçilir.",
            },
            {
                baslik: "Yağışlı ve donlu dönemlerde zemin değişimi",
                metin:
                    "Açık toprak veya stabilize zeminler, yağışlı dönemlerde çamurlaşır ve saplanma riski taşır; kışın ise don-çözülme döngüsü zemini geçici olarak yumuşatabilir. Bu iki mevsimsel etken, otel dış sahasındaki çalışmayı iç mekandan çok daha fazla hava koşuluna bağımlı kılar. Yağışlı veya donlu dönemlerde çalışma, zeminin en sağlam olduğu saatlere yazılır ve gerekirse birkaç gün ertelenir.",
            },
            {
                baslik: "İnşaat sonrası henüz oturmamış dolgu zemin",
                metin:
                    "Yeni bir bina eki veya peyzaj düzenlemesi sonrası bırakılan dolgu zemin, üstten bakıldığında düz görünse de altında boşluk veya gevşek katman barındırabilir; yeni dökülmüş bir dolgu haftalar içinde bile tam oturmaz. Bu zeminde çalışma zorunluysa, önce dolgunun yaşı öğrenilir, ardından makinenin duracağı nokta dolgunun en eski ve sağlam kesiminden seçilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Otel dış sahasında zemin karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, otel dış sahasında en sık karşılaştığımız zemin tiplerini, taşıdıkları riski ve alınan önlemi özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Ana risk", "Alınan önlem", "Önerilen sınıf"],
                    satirlar: [
                        ["Yeni açılan bahçe toprağı", "Batma, düzensiz oturma", "Sıkışmış kesimden konumlanma", "Arazi tipi dizel"],
                        ["Kaplanmamış otopark", "Yağıştan sonra yumuşama", "Ziyaret öncesi kontrol", "Arazi tipi dizel"],
                        ["Kaynak çevresi doğal zemin", "Düzensiz sertlik", "Yük dağıtma plakası", "Arazi tipi, kalın tekerlekli"],
                        ["Yeni dolgu zemin", "Gizli boşluk", "Dolgu yaşı sorgusu", "Arazi tipi, plakalı"],
                        ["Tamamlanmış peyzaj yolu", "Düşük risk", "Standart önlem", "Standart akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Peyzaj ekibinden zemin bilgisini almanın önceliği",
                paragraflar: [
                    "Fotoğraf çoğu zaman genel bir fikir verir, ama bahçenin güncel durumu — hangi bölümde toprak işi tamamlandı, hangi dolgu ne zaman döküldü, hangi alanda son sulama yapıldı — yalnızca otelin peyzaj veya bahçe ekibinin kendi bilgisinde bulunur. Bu yüzden talep alınırken fotoğrafın yanında bu bilgi de istenir; sahaya makine indirmeden önce bu bilgi olmadan karar verilmez.",
                    "Bilgi eksikse veya belirsizse, yerinde kısa bir kontrol önerilir. Bu kontrolde zeminin farklı noktalarından fiziksel değerlendirme yapılır ve makinenin izleyeceği güzergâh, sahadaki en sağlam hat üzerinden çizilir.",
                ],
            },
            {
                baslik: "Zor zemin işini otel içi işlerle ayırmak",
                paragraflar: [
                    "Otel dış sahasındaki zor zemin işleri, otel iç mekanındaki hassas zemin (mermer, halı) işlerinden tamamen farklı bir makine ve yaklaşım gerektirir; bu yüzden aynı günde hem dış sahada arazi tipi hem içeride kompakt akülü bir makine kullanmak gerekebilir. Bu iki işi aynı sevkiyatta birleştirmek mümkündür ve nakliye maliyetini düşürür, ancak her iş kendi makinesiyle ve kendi zamanlamasıyla yürütülür — arazi tipi bir makine, mermer lobiye asla sokulmaz.",
                    "Bu ayrım, talep alınırken netleştirilir: hangi kalemin dışarıda hangisinin içeride olduğu baştan belirlenir, teklif buna göre iki ayrı makine kalemiyle çıkarılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bahçemiz yeni düzenlendi; zemin henüz oturmadı, yine de çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz ama önce zeminin durumunu değerlendiririz. Yeni açılmış toprak henüz sıkışmamış olabilir ve bu zeminde platform batma riski taşır; makinenin duracağı noktayı, mümkünse zaten sıkışmış bir kesimden seçeriz. Peyzaj ekibinizin son çalışma tarihini ve hangi bölümün tamamlandığını paylaşın, konumlandırmayı buna göre yapalım.",
            },
            {
                soru: "Otoparkımızın yeni bölümü henüz asfaltlanmadı; makine oraya girebilir mi?",
                cevap:
                    "Girebilir, ancak arazi kabiliyeti yüksek bir sınıf kullanırız çünkü kaplanmamış stabilize zemin standart akülü makaslı için yeterince sağlam olmayabilir. Zeminin sıkışma derecesi yağıştan sonra hızla değişebileceği için, ziyaret tarihine yakın bir kontrol yaparız; çok yumuşaksa ziyareti birkaç gün ertelemeyi öneririz.",
            },
            {
                soru: "Kaynak suyu çevresindeki doğal zeminde çalışma yapılabilir mi?",
                cevap:
                    "Yapılabilir, ancak bu zemin mineral birikimi nedeniyle düzensiz bir sertlik gösterebilir; çalışmadan önce fiziksel kontrol yapar, gerekiyorsa yük dağıtma plakası kullanırız. Makinenin duracağı nokta, zeminin en düzenli ve sağlam göründüğü kesimden seçilir. Bu tür alanlarda genellikle kısa bir ön kontrol, sahada zaman kaybını önler.",
            },
            {
                soru: "Yağmurdan sonra dış saha çalışması ertelenir mi?",
                cevap:
                    "Zeminin durumuna bağlıdır; çok çamurlaşmışsa arazi tipi sınıf kullansak bile saplanma riski taşıyabilir, bu durumda birkaç gün erteleme öneririz. Hafif nemli ama sağlam kalan zeminlerde çalışmaya devam edebiliriz. Ziyaret öncesi son yağış durumunu bize bildirmeniz, doğru kararı önceden vermemizi sağlar.",
            },
            {
                soru: "Aynı gün hem bahçede hem otel içinde çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, ancak bu iki iş farklı makinelerle yürütülür; arazi tipi bir makine otel içine, özellikle mermer zeminli lobiye sokulmaz. İki işi aynı sevkiyata koyarak nakliye maliyetini düşürebiliriz, ancak her biri kendi sınıfı ve kendi zamanlamasıyla ayrı ayrı planlanır. Talep sırasında hangi kalemin dışarıda hangisinin içeride olduğunu belirtirseniz, teklifi buna göre iki ayrı kalemle çıkarırız.",
            },
            {
                soru: "Zemin durumu hakkında emin değiliz; keşif ister misiniz?",
                cevap:
                    "Belirsiz durumlarda kısa bir yerinde kontrol öneririz; bu, sahaya yanlış sınıfta bir makine göndermenin veya saplanma riskiyle karşılaşmanın önüne geçer. Kontrolde zeminin farklı noktalarından fiziksel değerlendirme yapılır ve makinenin izleyeceği güzergâh en sağlam hat üzerinden çizilir. Bu kısa kontrol, özellikle daha önce hiç çalışmadığımız bir otel sahasında değerli bir adımdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Termal otel dış sahalarında bahçe/otopark genişleme ve doğal kaynak çevresi zemin çeşitliliği genel gözlemdir; zemin değerlendirme yöntemi ve mevsimsel önlem firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
};
