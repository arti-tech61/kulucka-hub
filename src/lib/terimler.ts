// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~85 sözlük sayfası + ~48 derin terim sayfası besler.
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
//
// TEKNİK TERİM SÖZLÜĞÜ
//
// ⚠️ NEDEN HER DOMAİNDE AYRI TERİM SAYFASI AÇILMIYOR:
// "Makaslı platform nedir" sorusunun cevabı her domainde aynıdır. 24 terim ×
// 85 domain = 2.040 sayfa açmak, aynı sorgu için kendi sayfalarımızı birbiriyle
// yarıştırmak (self-cannibalization) ve Google'a 85 kopya sunmak demektir.
// Google bunlardan yalnızca birini gösterir, kalanı değersizleşir — hatta
// ağ genelinde kopya içerik sinyali üretir.
//
// TASARIM:
//   1. /sozluk        → TÜM domainlerde tek hub sayfası (85 sayfa).
//                       Tüm terimler burada, her domainde kendi bağlamıyla.
//   2. /sozluk/[slug] → YALNIZ bilgi/rehber kategorisindeki domainlerde
//                       (kategori: "rehber" | "egitim") derin sayfa.
//                       Orası zaten bir rehber sitesi; derinlik oraya yakışır.
//
// Toplam ~133 sayfa. Bilgi değeri korunur, doorway/kanibalizasyon riski yok.
// Bu sınırı gevşetmeden önce docs/SEO-ICERIK-URETIMI.md KURAL 5.0'ı okuyun.

import type { SiteIcerik } from "./siteler";
import { varyantSec, ilkBolge, uzmanlikIfade } from "./varyant";

export interface Terim {
    slug: string;
    ad: string;
    kisa: string;                 // Sözlük hub'ında görünen tek cümlelik tanım
    kategori: "makine" | "olcu" | "mevzuat" | "saha";
    tanim: string;                // Derin sayfada gövde (çekirdek, domainden bağımsız)
    nedenOnemli: string;          // Pratik karşılığı
    sikHata?: string;             // Sahada sık yapılan yanlış
    ilgiliUrunSlug?: string;
    anahtarlar: string[];         // Domain bağlamı eşleştirmesi için
}

export const TERIMLER: Terim[] = [
    {
        slug: "makasli-platform-nedir",
        ad: "Makaslı Platform",
        kisa: "Sepeti yalnızca dikey doğrultuda hareket ettiren, geniş çalışma tablasına sahip yükseltici platform.",
        kategori: "makine",
        tanim: "Makaslı platform, makas biçimli çapraz kollarının açılmasıyla sepeti dikey olarak yükselten bir yükseltici çalışma platformudur (İngilizce: scissor lift). Yatay erişim sunmaz; çalışma noktasının tam altına park edilmesi gerekir. Buna karşılık aynı yükseklik sınıfındaki bom tipi makinelere kıyasla belirgin biçimde daha geniş bir çalışma tablası ve daha yüksek taşıma kapasitesi sağlar.",
        nedenOnemli: "Hedefin altına park edebiliyorsanız, makaslı platform hem daha ekonomik hem de daha geniş bir çalışma alanı sunar. İki personelin malzemeyle birlikte çalışması gereken tavan tesisatı, aydınlatma ve raf işlerinde bu fark belirleyicidir.",
        sikHata: "Katalogdaki 'çalışma yüksekliği' değeri sepet zemininin yüksekliği değildir; platform yüksekliğine yaklaşık 2 metre (ortalama bir insanın uzanma mesafesi) eklenmiş değerdir. 10 metredeki bir tavana ulaşmak için 12 metre sınıfı makine gerekir.",
        ilgiliUrunSlug: "makasli-platform-12m-kiralama",
        anahtarlar: ["makaslı", "makasli", "scissor"],
    },
    {
        slug: "eklemli-platform-nedir",
        ad: "Eklemli Platform (Akrobat)",
        kisa: "Bomu birden fazla noktadan kırılabilen, engel aşarak yanal erişim sağlayan platform.",
        kategori: "makine",
        tanim: "Eklemli platform (akrobat platform, articulating boom lift), bomu birden çok mafsaldan kırılabilen bir yükseltici çalışma platformudur. Bu yapı, makinenin bir engelin yanına park edilip sepeti engelin üzerinden veya arkasından hedefe ulaştırmasına imkân verir. Yanal erişim mesafesi, aynı yükseklik sınıfındaki makaslı platformda bulunmayan bir kabiliyettir.",
        nedenOnemli: "Hedefin tam altına park edilemeyen her durumda — üretim hattı, boru rafı, konveyör, çatı çıkıntısı, su birikintisi — eklemli platform tek pratik çözümdür. Yanal erişim, ancak arada aşılması gereken bir engel varsa maliyetine değer.",
        sikHata: "Yanal erişim mesafesi her yükseklikte aynı değildir. Makine yükseldikçe kullanılabilir yanal mesafe azalır; katalogdaki maksimum değer genellikle orta yüksekliklerde geçerlidir. İş planlanırken hedef noktanın hem yüksekliği hem yatay uzaklığı birlikte kontrol edilmelidir.",
        ilgiliUrunSlug: "eklemli-platform-20m-kiralama",
        anahtarlar: ["eklemli", "akrobat", "boom", "manlift"],
    },
    {
        slug: "teleskopik-platform-nedir",
        ad: "Teleskopik Platform",
        kisa: "Bomu tek doğrultuda uzayan, aynı sınıfta en uzun yatay erişimi sağlayan platform.",
        kategori: "makine",
        tanim: "Teleskopik platform (telescopic boom lift), bomu iç içe geçmiş bölümlerden oluşan ve tek doğrultuda uzayan bir yükseltici çalışma platformudur. Engel aşma kabiliyeti eklemli platforma göre sınırlıdır, ancak aynı yükseklik sınıfında en uzun yatay erişim mesafesini sağlar.",
        nedenOnemli: "Açık sahada, engel bulunmayan ama uzak bir noktaya ulaşılması gereken işlerde (hangar, stadyum, köprü altı, enerji hattı yakını) teleskopik bom eklemli platformdan daha verimli çalışır.",
        ilgiliUrunSlug: "teleskopik-platform-22m-kiralama",
        anahtarlar: ["teleskopik", "telescopic"],
    },
    {
        slug: "orumcek-platform-nedir",
        ad: "Örümcek Platform",
        kisa: "Paletli şasesi ve açılır ayakları sayesinde dar geçişlerden girip hassas zeminde çalışabilen platform.",
        kategori: "makine",
        tanim: "Örümcek platform (spider lift), katlanabilir paletli şase ve açılır denge ayaklarına sahip kompakt bir yükseltici platformdur. Katlanmış hâlde standart bir kapıdan geçebilecek kadar dar olabilir; çalışma konumunda ayakları açılarak geniş bir tabana yayılır.",
        nedenOnemli: "Standart bir makinenin giremediği iç avlu, dar geçit, asansör boşluğu ve hassas döşemeli alanlarda genellikle tek çözümdür. Paletli şase zemine yükü dağıttığı için taşıma kapasitesi sınırlı döşemelerde çalışabilir.",
        sikHata: "Örümcek platform çalışma konumuna geçmeden yük kaldıramaz; denge ayakları açılmadan sepete binilmesi ciddi devrilme riski taşır. Ayakların oturacağı zemin de ayrıca kontrol edilmelidir.",
        ilgiliUrunSlug: "orumcek-platform-18m-kiralama",
        anahtarlar: ["örümcek", "orumcek", "spider", "tırtıl"],
    },
    {
        slug: "telehandler-nedir",
        ad: "Telehandler",
        kisa: "Teleskopik bomu üzerinde çatal, kova veya sepet taşıyabilen çok amaçlı yükleyici.",
        kategori: "makine",
        tanim: "Telehandler (teleskopik yükleyici), teleskopik bomunun ucuna farklı ataşmanlar (çatal, kova, kanca, personel sepeti) takılabilen bir iş makinesidir. Forkliftten farkı, yükü yalnızca dikey değil aynı zamanda ileri doğru uzatarak taşıyabilmesidir.",
        nedenOnemli: "Şantiyede hem yük taşıma hem yükseğe erişim gereken durumlarda tek makine iki işi görür; bu, saha lojistiğini ve makine kiralama maliyetini belirgin şekilde sadeleştirir.",
        sikHata: "Telehandler'a personel sepeti takılması, makineyi otomatik olarak yükseltici çalışma platformu yapmaz. Personel taşıma için sepetin ve makinenin bu amaca uygun sertifikalı olması, ayrıca ilgili güvenlik donanımlarının bulunması gerekir.",
        ilgiliUrunSlug: "telehandler-14m-kiralama",
        anahtarlar: ["telehandler", "teleskopik yükleyici"],
    },
    {
        slug: "forklift-nedir",
        ad: "Forklift",
        kisa: "Çatallarıyla paletli yükü kaldırıp taşıyan istifleme makinesi.",
        kategori: "makine",
        tanim: "Forklift, önündeki çatallarla paletlenmiş yükü kaldırıp taşıyan ve istifleyen bir iş makinesidir. Dizel, LPG ve akülü (elektrikli) tipleri vardır. Kaldırma kapasitesi ve maksimum kaldırma yüksekliği, seçimi belirleyen iki temel ölçüdür.",
        nedenOnemli: "Depo içi istifleme, saha yükleme-boşaltma ve malzeme taşıma işlerinin temel makinesidir. Akülü modeller kapalı alanda emisyon üretmediği için gıda, ilaç ve perakende tesislerinde zorunlu tercihtir.",
        sikHata: "Katalogdaki kaldırma kapasitesi, yükün ağırlık merkezi standart mesafedeyken geçerlidir. Uzun veya dengesiz yüklerde gerçek kapasite belirgin şekilde düşer; yük diyagramı kontrol edilmelidir.",
        ilgiliUrunSlug: "dizel-forklift-3-5-ton-kiralama",
        anahtarlar: ["forklift", "istifleme", "palet"],
    },
    {
        slug: "calisma-yuksekligi-nedir",
        ad: "Çalışma Yüksekliği",
        kisa: "Platform yüksekliğine ortalama insan uzanma mesafesi (~2 m) eklenmiş değer.",
        kategori: "olcu",
        tanim: "Çalışma yüksekliği (working height), sepet zemininin yerden yüksekliğine, sepette duran bir kişinin uzanabileceği ortalama mesafe olan yaklaşık 2 metrenin eklenmesiyle bulunan değerdir. Katalog ve teklfilerde makine sınıfını tanımlamak için bu değer kullanılır.",
        nedenOnemli: "Makine seçiminde en sık yapılan hata bu ayrımın atlanmasıdır. 10 metredeki bir tavana ulaşmak için 10 metre çalışma yüksekliğine sahip makine yetmez — sepet 8 metrede kalır ve iş yapılamaz.",
        sikHata: "'Platform yüksekliği' ile 'çalışma yüksekliği' birbirinin yerine kullanılamaz. Teklif alırken hangisinin konuşulduğunu netleştirin; aradaki 2 metre bir makine sınıfı farkı yaratır.",
        anahtarlar: ["yükseklik", "metre"],
    },
    {
        slug: "yanal-erisim-nedir",
        ad: "Yanal Erişim (Outreach)",
        kisa: "Makinenin şasesinden sepete kadar olan yatay uzanma mesafesi.",
        kategori: "olcu",
        tanim: "Yanal erişim (horizontal outreach), bom tipi platformlarda makinenin dönüş merkezinden sepetin ulaşabildiği en uzak noktaya kadar olan yatay mesafedir. Makaslı platformlarda bu değer sıfırdır.",
        nedenOnemli: "Hedefin altına park edilemeyen işlerde belirleyici ölçüdür. Aşılacak engelin genişliği ve makinenin park edebileceği en yakın nokta bilinirse, gereken yanal erişim hesaplanabilir.",
        sikHata: "Maksimum yanal erişim ile maksimum yükseklik aynı anda kullanılamaz. Bom yükseldikçe kullanılabilir yatay mesafe azalır; her makinenin bir çalışma zarfı (work envelope) diyagramı vardır ve planlama bu diyagrama göre yapılmalıdır.",
        anahtarlar: ["yanal", "outreach", "erişim"],
    },
    {
        slug: "platform-kapasitesi-nedir",
        ad: "Platform Kapasitesi",
        kisa: "Sepette taşınabilecek toplam ağırlık (personel + alet + malzeme).",
        kategori: "olcu",
        tanim: "Platform kapasitesi, sepette bulunabilecek toplam ağırlığın üst sınırıdır. Bu değere sepetteki personelin, taşınan aletlerin ve malzemenin ağırlığı birlikte dahildir.",
        nedenOnemli: "230-250 kg kapasite tek personel ve el aleti için rahat, iki personel için sınırdır. Montaj ve tesisat işlerinde malzeme de yukarı çıkacaksa 320 kg ve üzeri sınıflara geçmek gerekir.",
        sikHata: "Bazı makinelerde 'kısıtlı' ve 'kısıtsız' olmak üzere iki kapasite değeri bulunur; yüksek olan değer genellikle yalnızca bom belirli bir açının altındayken geçerlidir. Teklif alırken hangi kapasitenin hangi koşulda geçerli olduğu sorulmalıdır.",
        anahtarlar: ["kapasite", "yük", "kg"],
    },
    {
        slug: "tirmanma-kabiliyeti-nedir",
        ad: "Tırmanma Kabiliyeti (Gradeability)",
        kisa: "Makinenin yüklü hâlde çıkabileceği maksimum eğim yüzdesi.",
        kategori: "olcu",
        tanim: "Tırmanma kabiliyeti, makinenin katlanmış (sürüş) konumunda çıkabileceği en dik eğimin yüzde olarak ifadesidir. %25 değeri, 100 metrede 25 metre yükselen bir eğim anlamına gelir.",
        nedenOnemli: "Akülü iç mekan makinelerinde bu değer genellikle %25 civarındadır ve düz sert zemin varsayar. Dizel 4x4 arazi makinelerinde %40-45'e çıkar; çamurlu, eğimli veya kırmataş sahalarda bu fark makinenin çalışabilmesi ile çalışamaması arasındaki farktır.",
        anahtarlar: ["tırmanma", "eğim", "gradeability"],
    },
    {
        slug: "akulu-mu-dizel-mi",
        ad: "Akülü mü Dizel mi?",
        kisa: "Ortam kapalıysa akülü, saha engebeliyse dizel 4x4 — karar sırası budur.",
        kategori: "saha",
        tanim: "Akülü (elektrikli) platformlar emisyon üretmez, sessizdir ve düz sert zemin varsayar. Dizel platformlar daha güçlüdür, 4x4 sürüş ve yüksek tırmanma kabiliyetiyle engebeli arazide çalışır, ancak egzoz emisyonu nedeniyle kapalı alana giremez.",
        nedenOnemli: "Karar sırası şudur: (1) Ortam kapalı mı? Kapalıysa karar bitmiştir, akülü zorunludur. (2) Zemin ne? Beton/epoksi/asfalt ise akülü yeter; kırmataş, çamur veya belirgin eğim varsa dizel 4x4 gerekir. (3) Yükseklik ve kapasite ile sınıfı daralt.",
        sikHata: "Dizel makinenin kapalı alanda 'kapılar açık olduğu için' kullanılabileceği varsayımı tehlikelidir. Yeterli havalandırma olmayan ortamda egzoz emisyonu ciddi sağlık riskidir ve İSG mevzuatına aykırıdır.",
        anahtarlar: ["akülü", "dizel", "elektrikli"],
    },
    {
        slug: "en-280-nedir",
        ad: "EN 280 Standardı",
        kisa: "Yükseltici çalışma platformlarının tasarım ve güvenlik gereklerini tanımlayan Avrupa standardı.",
        kategori: "mevzuat",
        tanim: "EN 280, mobil yükseltici çalışma platformlarının (MEWP) tasarım hesapları, stabilite kriterleri, güvenlik donanımları ve muayene gereklerini tanımlayan Avrupa standardıdır. Aşırı yük algılama, eğim kilidi ve alarmı, acil durdurma ve acil iniş sistemi bu standardın gerektirdiği temel donanımlardandır.",
        nedenOnemli: "Kiralanan makinenin EN 280 uygunluğu, sahada karşılaşılabilecek devrilme ve aşırı yükleme risklerine karşı temel güvencedir. Şantiye girişinde İSG uzmanları bu uygunluğu sorgular.",
        anahtarlar: ["en 280", "standart"],
    },
    {
        slug: "periyodik-kontrol-nedir",
        ad: "Periyodik Kontrol (Yeşil Etiket)",
        kisa: "6331 Sayılı Kanun kapsamında yükseltici platformlara yapılan zorunlu yıllık muayene.",
        kategori: "mevzuat",
        tanim: "Yükseltici çalışma platformları, 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu ve İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında yılda en az bir kez periyodik kontrole tabidir. Kontrol, TÜRKAK akredite bir muayene kuruluşu tarafından yapılır ve uygunluk raporu (yaygın adıyla 'yeşil etiket') düzenlenir.",
        nedenOnemli: "Belgesi olmayan veya belge tarihi geçmiş makine şantiyeye alınmaz. Kiralama sırasında belge tarihinin kiralama dönemini kapsadığı teslimat öncesi kontrol edilmelidir.",
        sikHata: "Periyodik kontrol belgesi makinenin kendisine aittir, kiralayan firmaya değil. Farklı bir makine gönderildiğinde belge de o makineye ait olmalıdır.",
        anahtarlar: ["periyodik", "kontrol", "yeşil etiket", "6331"],
        ilgiliUrunSlug: "eklemli-platform-20m-kiralama",
    },
    {
        slug: "operator-belgesi-nedir",
        ad: "Operatör Yeterlilik Belgesi",
        kisa: "Yükseltici platform kullanacak personelin sahip olması gereken MYK belgesi.",
        kategori: "mevzuat",
        tanim: "Yükseltici çalışma platformu kullanan personelin, Mesleki Yeterlilik Kurumu (MYK) tarafından yetkilendirilmiş kuruluşlardan alınmış operatör yeterlilik belgesine sahip olması gerekir. Belge, makine tipine göre kapsamlıdır.",
        nedenOnemli: "Operatörlü kiralamada belge yükümlülüğü kiralayan firmadadır. Operatörsüz kiralamada ise makineyi kullanacak personelin belgeli olmasını sağlamak işverenin sorumluluğundadır — bu, denetimlerde ve iş kazası durumunda doğrudan sorumluluk doğurur.",
        anahtarlar: ["operatör", "myk", "belge", "yeterlilik"],
        ilgiliUrunSlug: "eklemli-platform-20m-kiralama",
    },
    {
        slug: "emniyet-kemeri-kullanimi",
        ad: "Emniyet Kemeri ve Lanyard",
        kisa: "Bom tipi platformlarda zorunlu; makaslı platformda korkuluk birincil korumadır.",
        kategori: "mevzuat",
        tanim: "Bom tipi (eklemli, teleskopik) platformlarda tam vücut emniyet kemeri ve platform içindeki ankraj noktasına bağlanan kısa lanyard kullanımı zorunludur. Makaslı platformlarda kapalı korkuluk ve kilitli kapı birincil koruma olduğu için kural farklıdır.",
        nedenOnemli: "Bom tipi makinelerde risk düşme değil fırlamadır: bom bir engele çarptığında veya tekerlek ani bir kot farkına girdiğinde sepet yaylanır ve operatör dışarı savrulabilir (catapult etkisi). Lanyardın kısa olması kritiktir; uzun lanyard savrulmayı engellemez.",
        sikHata: "Kapalı alanda çalışıldığı için kemer takmamak yaygın ve tehlikeli bir hatadır. Engel yoğunluğu kapalı alanda daha yüksek olduğu için risk azalmaz, artar.",
        anahtarlar: ["emniyet kemeri", "lanyard", "kemer"],
    },
    {
        slug: "cukur-onleme-sistemi",
        ad: "Çukur Önleme (Pothole Protection)",
        kisa: "Platform yükseldiğinde şasenin altından inen, devrilmeyi önleyen koruma plakaları.",
        kategori: "makine",
        tanim: "Çukur önleme sistemi, makaslı platformlarda sepet yükselmeye başladığında şasenin altından otomatik olarak inen koruma plakalarıdır. Bir tekerlek çukura veya kot farkına girdiğinde plakalar zemine temas ederek makinenin eğilmesini sınırlar.",
        nedenOnemli: "Yükseltilmiş konumda küçük bir eğim bile devrilmeye yol açabilir. Bu sistem devrede değilse veya arızalıysa makine yükselmemelidir.",
        anahtarlar: ["çukur", "pothole"],
    },
    {
        slug: "salinimli-aks-nedir",
        ad: "Salınımlı Aks (Oscillating Axle)",
        kisa: "Engebeli zeminde dört tekerleğin de yere temasını sağlayan aks sistemi.",
        kategori: "makine",
        tanim: "Salınımlı aks, arazi tipi makinelerde bir aksın gövdeye göre belirli bir açıda hareket edebilmesini sağlayan sistemdir. Böylece engebeli zeminde dört tekerlek de yerle temasını korur.",
        nedenOnemli: "Tekerleklerden biri havada kalırsa hem çekiş kaybolur hem de yük dağılımı bozulur. Çamurlu ve kırmataş sahalarda bu sistem, makinenin çalışabilmesinin ön şartıdır.",
        anahtarlar: ["salınımlı", "aks", "oscillating"],
    },
    {
        slug: "iz-birakmayan-lastik",
        ad: "İz Bırakmayan Lastik",
        kisa: "Hassas zeminlerde siyah iz bırakmayan, genellikle beyaz renkli dolgu lastik.",
        kategori: "saha",
        tanim: "İz bırakmayan lastik (non-marking tyre), zeminde siyah kauçuk izi bırakmayan bileşimle üretilmiş dolgu lastiktir. Genellikle beyaz veya açık gri renktedir.",
        nedenOnemli: "Epoksi kaplı fabrika zeminleri, hastane koridorları, AVM ve showroom gibi görünümün önemli olduğu alanlarda zorunludur. Standart siyah lastik bu zeminlerde temizlenmesi güç izler bırakır.",
        anahtarlar: ["iz bırakmayan", "lastik", "beyaz"],
    },
    {
        slug: "zemin-tasima-kapasitesi",
        ad: "Zemin Taşıma Kapasitesi",
        kisa: "Döşemenin metrekare başına taşıyabileceği yük — kapalı alan işlerinde kritik.",
        kategori: "saha",
        tanim: "Zemin taşıma kapasitesi, bir döşemenin birim alan başına güvenle taşıyabileceği yüktür. Makinenin toplam ağırlığı ve tekerlek temas alanı, zemine uygulanan basıncı belirler.",
        nedenOnemli: "Asma kat, bodrum üstü döşeme, otopark tavanı gibi alanlarda makine ağırlığı döşeme kapasitesini aşabilir. Kapalı alan işlerinde makine ağırlığı ve döşeme kapasitesi teslimat öncesi mutlaka karşılaştırılmalıdır.",
        sikHata: "Yalnızca makinenin toplam ağırlığına bakmak yetersizdir; tekerlek başına düşen nokta yükü daha belirleyicidir. Örümcek platformların paletli şasesi yükü yaydığı için aynı ağırlıkta daha düşük zemin basıncı üretir.",
        anahtarlar: ["zemin", "döşeme", "taşıma kapasitesi"],
    },
    {
        slug: "ruzgar-siniri-nedir",
        ad: "Rüzgâr Sınırı",
        kisa: "Platformun güvenle çalışabileceği maksimum rüzgâr hızı — genellikle 12,5 m/s.",
        kategori: "saha",
        tanim: "Yükseltici çalışma platformlarının çoğu, açık alanda 12,5 m/s (yaklaşık 45 km/s) rüzgâr hızına kadar çalışacak şekilde sertifikalandırılmıştır. Bu sınır makinenin kendi teknik belgesinde yer alır.",
        nedenOnemli: "Rüzgâr, sepetteki yüzey alanıyla birlikte artan bir devirme momenti yaratır. Sepette büyük yüzeyli malzeme (levha, pano, cam) taşınıyorsa etkin sınır belgede yazandan daha düşüktür.",
        sikHata: "Yerdeki rüzgâr hızı, 20-40 metre yükseklikteki rüzgâr hızından belirgin şekilde düşüktür. Karar yerde hissedilen rüzgâra göre değil, çalışma yüksekliğindeki ölçüme göre verilmelidir.",
        anahtarlar: ["rüzgâr", "ruzgar", "wind"],
    },
    {
        slug: "operatorlu-kiralama-nedir",
        ad: "Operatörlü Kiralama",
        kisa: "Makinenin, yeterlilik belgeli operatörüyle birlikte kiralanması.",
        kategori: "mevzuat",
        tanim: "Operatörlü kiralamada makine, MYK yeterlilik belgesine sahip bir operatörle birlikte teslim edilir. Operatörün belgesi, sigortası ve saha güvenliği eğitimi kiralayan firmanın sorumluluğundadır.",
        nedenOnemli: "Ekibinizde belgeli operatör yoksa yasal uygunluk için tek yoldur. Ayrıca makine tanıma süresi ortadan kalktığı için kısa süreli işlerde toplam süre kısalır.",
        anahtarlar: ["operatörlü", "operatorlu"],
    },
    {
        slug: "lowbed-nedir",
        ad: "Lowbed (Alçak Şaseli Dorse)",
        kisa: "Ağır ve yüksek iş makinelerinin taşındığı alçak platformlu römork.",
        kategori: "saha",
        tanim: "Lowbed, yükleme platformu normal dorselerden alçak olan bir taşıma römorkudur. Bu sayede yüksek makineler, köprü ve viyadük gabari sınırlarını aşmadan taşınabilir.",
        nedenOnemli: "Ağır arazi platformları ve büyük teleskopik makineler ancak lowbed ile sevk edilebilir. Bu, nakliye maliyetini standart araç sevkiyatına göre belirgin şekilde artırır ve teklifte ayrı kalem olarak görünür.",
        anahtarlar: ["lowbed", "nakliye", "dorse"],
    },
    {
        slug: "calisma-zarfi-nedir",
        ad: "Çalışma Zarfı (Work Envelope)",
        kisa: "Sepetin ulaşabildiği tüm noktaların oluşturduğu alanı gösteren diyagram.",
        kategori: "olcu",
        tanim: "Çalışma zarfı, bir bom tipi platformun sepetinin ulaşabildiği tüm noktaların oluşturduğu iki boyutlu alandır. Üretici kataloglarında yükseklik-yatay mesafe grafiği olarak verilir.",
        nedenOnemli: "Maksimum yükseklik ve maksimum yanal erişim aynı anda kullanılamaz. Hedef noktanın hem yüksekliği hem yatay uzaklığı zarf diyagramına işaretlendiğinde, makinenin o noktaya ulaşıp ulaşamayacağı kesin olarak görülür.",
        sikHata: "Yalnızca maksimum değerlere bakarak makine seçmek, sahada 'makine ulaşamıyor' sonucunu doğuran en yaygın hatadır.",
        anahtarlar: ["çalışma zarfı", "envelope", "diyagram"],
    },
    {
        slug: "acil-inis-sistemi",
        ad: "Acil İniş Sistemi",
        kisa: "Enerji kesildiğinde sepetin yerden indirilmesini sağlayan manuel sistem.",
        kategori: "makine",
        tanim: "Acil iniş sistemi, makinenin enerjisi kesildiğinde veya kumanda arızalandığında sepetin gövde üzerindeki bir valf ya da kol yardımıyla kontrollü olarak indirilmesini sağlayan mekanizmadır.",
        nedenOnemli: "Yükseltilmiş konumda arıza durumunda sepetteki personelin güvenle indirilmesinin tek yoludur. Teslimatta bu sistemin yeri ve kullanımı sahadaki ekibe mutlaka gösterilmelidir.",
        anahtarlar: ["acil iniş", "acil indirme"],
    },
];

export function terimBul(slug: string): Terim | undefined {
    return TERIMLER.find((t) => t.slug === slug);
}

/**
 * Terimi domainin kendi bağlamına bağlayan ek cümle.
 * Kelime karıştırmaz — o domainin bölgesi/uzmanlığıyla gerçek bağ kurar.
 */
export function terimBaglami(site: SiteIcerik, terim: Terim): string {
    const bolge = ilkBolge(site);
    const uzm = uzmanlikIfade(site);
    // Terim bu domainin hizmetleriyle eşleşiyor mu?
    const eslesen = site.hizmetler.find((h) =>
        terim.anahtarlar.some((a) => h.toLocaleLowerCase("tr-TR").includes(a))
    );
    if (eslesen) {
        return varyantSec(site, `terim-baglam-${terim.slug}`, [
            `${bolge} bölgesinde bu konu doğrudan işimize giriyor: ${eslesen.toLocaleLowerCase("tr-TR")}.`,
            `${eslesen} kapsamındaki taleplerde bu ayrım sık sık belirleyici oluyor.`,
            `${bolge} sahalarında ${eslesen.toLocaleLowerCase("tr-TR")} işleri planlanırken bu kriter ilk kontrol ettiğimiz noktalardan biri.`,
        ]);
    }
    return varyantSec(site, `terim-baglam-g-${terim.slug}`, [
        `${uzm} kapsamındaki işlerde bu ayrım makine seçimini doğrudan etkiliyor.`,
        `${bolge} sahalarında teklif hazırlarken bu kriteri mutlaka kontrol ediyoruz.`,
        `${bolge} bölgesindeki projelerde bu konu, doğru sınıfın belirlenmesinde belirleyici oluyor.`,
    ]);
}

/** Derin terim sayfaları yalnız bilgi/rehber kategorisindeki domainlerde açılır. */
export function derinTerimSayfasiVarMi(site: SiteIcerik): boolean {
    return site.kategori === "rehber" || site.kategori === "egitim";
}
