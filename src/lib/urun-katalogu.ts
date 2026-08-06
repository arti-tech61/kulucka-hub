// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~2.125 canlı sayfa üretir (85+ domain × sayfa/domain).
// Buraya yazacağınız TEK BİR SABİT CÜMLE, o kadar sayfada birebir tekrarlanır.
//
//   ❌ cevap: "Her iki seçenek de sunulur."          → 85 domainde aynı
//   ❌ giris: `${bolge} bölgesinde hizmet veriyoruz.` → mad-lib, hâlâ kopya
//   ✅ varyantSec(site, `tuz-${slug}`, [4-6 YAPISAL OLARAK FARKLI varyant])
//   ✅ kur(site, "tuz", [5 açılış], [5 gövde], [5 kapanış])  ← yüksek hacimde
//
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik   (eşik: örtüşme < %20)
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
import type { SiteIcerik } from "@/lib/siteler";

// Paylaşımlı ürün kataloğu: görseller ve teknik özellikler TÜM domain'lerde
// aynıdır. Görseller Sinoboom'un resmi ürün sayfalarından (2025 stüdyo çekim
// serisi, tamamı 800x540 tutarlı format) + forklift için Zoomlion'un resmi
// sayfasından alındı — tek tip, showroom kalitesinde, marka-tutarlı görünüm
// için. `pt-` önekli dosya adları kasıtlı: mevcut 9 bespoke temanın kullandığı
// /media/makasli-platform.png gibi paylaşılan dosyalarla ÇAKIŞMASIN diye ayrı
// tutuldu (o temalar kendi görsellerini korur, dokunulmadı).
// Her kategori altında birden fazla metraj/kapasite sınıfı ayrı ürün olarak
// listelenir (aynı makine kategorisinin gerçek filo çeşitliliğini yansıtır,
// aynı zamanda metraja özel arama terimlerini karşılar). Görsel kategori
// başına ortaktır (aynı sınıfın farklı metrajları farklı fotoğraflarla temsil
// edilemeyecek kadar benzer); yalnızca AÇIKLAMA metni her domain için
// site.bolge/uzmanlik'ten otomatik türetilir, böylece kopya içerik oluşmaz.
export interface UrunKatalogOgesi {
    slug: string;
    ad: string;
    gorsel: string;
    ozellikler: [string, string][];
    aciklamaSablonu: (site: SiteIcerik) => string;
}

export const urunKatalogu: UrunKatalogOgesi[] = [
    // ------------------------------------------------------------ MAKASLI
    {
        slug: "makasli-platform-8m-kiralama",
        ad: "Makaslı Platform (8m Sınıfı)",
        gorsel: "/media/pt-makasli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "8m"],
            ["Güç", "Akülü / Elektrikli"],
        ],
        aciklamaSablonu: (site) =>
            `Düşük tavan yüksekliğine sahip iç mekânlarda dar kapı ve koridor geçişlerine uygundur; ${site.bolge.split(",")[0].trim()} bölgesindeki mağaza, depo ve atölye içi kısa süreli işlerde tercih edilir.`,
    },
    {
        slug: "makasli-platform-10m-kiralama",
        ad: "Makaslı Platform (10m Sınıfı)",
        gorsel: "/media/pt-makasli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "10m"],
            ["Güç", "Akülü / Elektrikli"],
        ],
        aciklamaSablonu: (site) =>
            `Standart depo ve fabrika iç hacimlerinde raf, aydınlatma ve tavan bakımı için en sık talep edilen sınıftır; ${site.bolge.split(",")[0].trim()} bölgesinde ${site.uzmanlik.toLowerCase()} kapsamında düzenli kullanılır.`,
    },
    {
        slug: "makasli-platform-12m-kiralama",
        ad: "Makaslı Platform (12m Sınıfı)",
        gorsel: "/media/pt-makasli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "12m"],
            ["Güç", "Elektrikli / Dizel"],
        ],
        aciklamaSablonu: (site) =>
            `Orta yükseklikli çelik konstrüksiyon ve depo raf sistemlerinde geniş platform alanıyla çoklu personel çalışmasına imkân verir; ${site.bolge.split(",")[0].trim()} sahalarında tercih edilir.`,
    },
    {
        slug: "makasli-platform-14m-arazi-tipi-kiralama",
        ad: "Makaslı Platform (14m Arazi Tipi)",
        gorsel: "/media/pt-makasli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "14m"],
            ["Güç", "Dizel — 4x4 Arazi Tipi"],
        ],
        aciklamaSablonu: (site) =>
            `Düzensiz ve açık saha zeminlerinde dört tekerlekten çekiş desteğiyle çalışır; ${site.bolge.split(",")[0].trim()} bölgesindeki dış cephe ve çatı işlerinde tercih edilir.`,
    },
    {
        slug: "makasli-platform-18m-arazi-tipi-kiralama",
        ad: "Makaslı Platform (18m Arazi Tipi)",
        gorsel: "/media/pt-makasli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "18m"],
            ["Kaldırma Kapasitesi", "680kg'a kadar"],
        ],
        aciklamaSablonu: (site) =>
            `Filodaki en yüksek makaslı platform sınıfıdır; ağır ekipman ve çoklu personel taşıma kapasitesiyle ${site.bolge.split(",")[0].trim()} bölgesindeki yüksek depo ve fabrika hangarı işlerinde kullanılır.`,
    },
    // ------------------------------------------------------------- EKLEMLİ
    {
        slug: "eklemli-platform-16m-kiralama",
        ad: "Eklemli Platform (16m Sınıfı)",
        gorsel: "/media/pt-eklemli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "16m"],
            ["Yatay Erişim", "6-8m"],
        ],
        aciklamaSablonu: (site) =>
            `Kompakt gövdesiyle dar sahalarda manevra kabiliyeti sunar; ${site.bolge.split(",")[0].trim()} bölgesindeki cephe ve iç mekân engel aşma işlerinde tercih edilir.`,
    },
    {
        slug: "eklemli-platform-20m-kiralama",
        ad: "Eklemli Platform (20m Sınıfı)",
        gorsel: "/media/pt-eklemli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "20m"],
            ["Yatay Erişim", "10m"],
        ],
        aciklamaSablonu: (site) =>
            `Orta yükseklikli çatı ve cephe işlerinde kırılan kol yapısıyla boru hattı ve tesisat üzerinden aşarak erişim sağlar; ${site.bolge.split(",")[0].trim()} sahalarında yaygın kullanılır.`,
    },
    {
        slug: "eklemli-platform-26m-kiralama",
        ad: "Eklemli Platform (26m Sınıfı)",
        gorsel: "/media/pt-eklemli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "26m"],
            ["Yatay Erişim", "14m"],
        ],
        aciklamaSablonu: (site) =>
            `Yüksek yapı cepheleri ve endüstriyel baca işlerinde geniş kurulum alanı gerektirir; ${site.bolge.split(",")[0].trim()} bölgesindeki ${site.uzmanlik.toLowerCase()} projelerinde değerlendirilir.`,
    },
    {
        slug: "eklemli-platform-34m-kiralama",
        ad: "Eklemli Platform (34m Sınıfı)",
        gorsel: "/media/pt-eklemli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "34m"],
            ["Yatay Erişim", "18m"],
        ],
        aciklamaSablonu: (site) =>
            `Ağır sanayi tesislerinde çelik konstrüksiyon ve silo çevresi bakım işleri için tercih edilir; ${site.bolge.split(",")[0].trim()} bölgesindeki büyük ölçekli sahalara uygundur.`,
    },
    {
        slug: "eklemli-platform-43m-kiralama",
        ad: "Eklemli Platform (43m Sınıfı)",
        gorsel: "/media/pt-eklemli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "43m"],
            ["Yatay Erişim", "21m"],
        ],
        aciklamaSablonu: (site) =>
            `Filodaki en yüksek eklemli platform sınıfıdır; ${site.bolge.split(",")[0].trim()} bölgesindeki yüksek irtifa ve geniş engel aşma gerektiren özel projeler için ayrılır.`,
    },
    // --------------------------------------------------------- TELESKOPİK
    {
        slug: "teleskopik-platform-16m-kiralama",
        ad: "Teleskopik Platform (16m Sınıfı)",
        gorsel: "/media/pt-teleskopik-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "16m"],
            ["Yatay Erişim", "9m"],
        ],
        aciklamaSablonu: (site) =>
            `Açık ve engelsiz sahalarda tek yönlü uzun erişim sunar; ${site.bolge.split(",")[0].trim()} bölgesindeki şantiye ve açık depolama alanlarında tercih edilir.`,
    },
    {
        slug: "teleskopik-platform-22m-kiralama",
        ad: "Teleskopik Platform (22m Sınıfı)",
        gorsel: "/media/pt-teleskopik-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "22m"],
            ["Yatay Erişim", "14m"],
        ],
        aciklamaSablonu: (site) =>
            `Geniş yatay menzili sayesinde tek konumdan çok noktaya erişim sağlar; ${site.bolge.split(",")[0].trim()} bölgesinde liman ve depo sahalarında kullanılır.`,
    },
    {
        slug: "teleskopik-platform-28m-kiralama",
        ad: "Teleskopik Platform (28m Sınıfı)",
        gorsel: "/media/pt-teleskopik-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "28m"],
            ["Yatay Erişim", "18m"],
        ],
        aciklamaSablonu: (site) =>
            `Yüksek fabrika hangarı ve enerji nakil hattı bakımında tercih edilen orta-üst sınıftır; ${site.bolge.split(",")[0].trim()} bölgesindeki ağır sanayi tesislerine uygundur.`,
    },
    {
        slug: "teleskopik-platform-43m-kiralama",
        ad: "Teleskopik Platform (43m Sınıfı)",
        gorsel: "/media/pt-teleskopik-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "43m"],
            ["Kaldırma Kapasitesi", "300kg"],
        ],
        aciklamaSablonu: (site) =>
            `Rafineri, liman vinç ray hattı ve yüksek silo bakımı gibi özel projeler için ayrılan üst sınıf ekipmandır; ${site.bolge.split(",")[0].trim()} bölgesinde belgeli operatörle sevk edilir.`,
    },
    {
        slug: "teleskopik-platform-58m-kiralama",
        ad: "Teleskopik Platform (58m Sınıfı)",
        gorsel: "/media/pt-teleskopik-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "58m"],
            ["Kaldırma Kapasitesi", "227kg"],
        ],
        aciklamaSablonu: (site) =>
            `Filodaki en yüksek erişimli platform sınıfıdır; ${site.bolge.split(",")[0].trim()} bölgesindeki büyük ölçekli endüstriyel tesislerin maksimum irtifa projelerinde kullanılır.`,
    },
    // -------------------------------------------------------------- FORKLİFT
    {
        slug: "elektrikli-forklift-1-3-ton-kiralama",
        ad: "Elektrikli Forklift (1.5-3 Ton)",
        gorsel: "/media/pt-forklift.jpg",
        ozellikler: [
            ["Kapasite", "1.5 - 3 Ton"],
            ["Yakıt Tipi", "Elektrikli"],
        ],
        aciklamaSablonu: (site) =>
            `Egzoz üretmediği için kapalı depo ve üretim salonlarında tercih edilir; ${site.bolge.split(",")[0].trim()} bölgesindeki iç mekân palet taşıma işlerine uygundur.`,
    },
    {
        slug: "dizel-forklift-3-5-ton-kiralama",
        ad: "Dizel Forklift (3-5 Ton)",
        gorsel: "/media/pt-forklift.jpg",
        ozellikler: [
            ["Kapasite", "3 - 5 Ton"],
            ["Yakıt Tipi", "Dizel"],
        ],
        aciklamaSablonu: (site) =>
            `Açık sahada ve rampalı zeminlerde güçlü çekiş sunar; ${site.bolge.split(",")[0].trim()} bölgesindeki ${site.uzmanlik.toLowerCase()} işlerinde standart tercih edilen kapasite sınıfıdır.`,
    },
    {
        slug: "agir-hizmet-forklift-5-10-ton-kiralama",
        ad: "Ağır Hizmet Forklift (5-10 Ton)",
        gorsel: "/media/pt-forklift.jpg",
        ozellikler: [
            ["Kapasite", "5 - 10 Ton"],
            ["Yakıt Tipi", "Dizel"],
        ],
        aciklamaSablonu: (site) =>
            `Ağır makine parçası, çelik konstrüksiyon elemanı ve büyük paletli yük taşımada kullanılır; ${site.bolge.split(",")[0].trim()} bölgesindeki liman ve fabrika sahalarına uygundur.`,
    },
    // ------------------------------------------------------------- ÖRÜMCEK
    {
        slug: "orumcek-platform-13m-kiralama",
        ad: "Örümcek Platform (13m Sınıfı)",
        gorsel: "/media/pt-orumcek-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "13m"],
            ["Zemin Baskısı", "Düşük"],
        ],
        aciklamaSablonu: (site) =>
            `Paletli hareket kabiliyeti ile dar kapı ve merdiven boşluklarından geçebilir; ${site.bolge.split(",")[0].trim()} bölgesindeki iç mekân ve hassas zeminli sahalarda tercih edilir.`,
    },
    {
        slug: "orumcek-platform-18m-kiralama",
        ad: "Örümcek Platform (18m Sınıfı)",
        gorsel: "/media/pt-orumcek-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "18m"],
            ["Zemin Baskısı", "Düşük"],
        ],
        aciklamaSablonu: (site) =>
            `Atrium, cam tavan ve iç avlu gibi hassas yüzeyli alanlarda zemine zarar vermeden çalışır; ${site.bolge.split(",")[0].trim()} bölgesindeki AVM ve otel projelerinde kullanılır.`,
    },
    {
        slug: "orumcek-platform-23m-kiralama",
        ad: "Örümcek Platform (23m Sınıfı)",
        gorsel: "/media/pt-orumcek-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "23m"],
            ["Zemin Baskısı", "Düşük - hassas yüzeylere uygun"],
        ],
        aciklamaSablonu: (site) =>
            `Bahçe, teras ve düzensiz zeminlerde ayarlanabilir ayaklarıyla dengeli çalışma imkânı sunar; ${site.bolge.split(",")[0].trim()} bölgesindeki peyzaj ve cephe işlerine uygundur.`,
    },
    {
        slug: "orumcek-platform-30m-kiralama",
        ad: "Örümcek Platform (30m Sınıfı)",
        gorsel: "/media/pt-orumcek-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "30m"],
            ["Kurulum Genişliği", "Dar alanlara uygun katlanır ayak"],
        ],
        aciklamaSablonu: (site) =>
            `Filodaki en yüksek örümcek platform sınıfıdır; ${site.bolge.split(",")[0].trim()} bölgesindeki yüksek atrium, kilise kubbesi ve tarihi yapı restorasyon işlerinde kullanılır.`,
    },
    // ----------------------------------------------------------- TELEHANDLER
    {
        slug: "telehandler-7m-kiralama",
        ad: "Telehandler (7m Sınıfı)",
        gorsel: "/media/pt-telehandler.png",
        ozellikler: [
            ["Kaldırma Yüksekliği", "7m"],
            ["Kapasite", "3 Ton"],
        ],
        aciklamaSablonu: (site) =>
            `Kompakt gövdesiyle dar şantiye sahalarında palet ve malzeme taşımada kullanılır; ${site.bolge.split(",")[0].trim()} bölgesindeki küçük-orta ölçekli inşaat projelerine uygundur.`,
    },
    {
        slug: "telehandler-14m-kiralama",
        ad: "Telehandler (14m Sınıfı)",
        gorsel: "/media/pt-telehandler.png",
        ozellikler: [
            ["Kaldırma Yüksekliği", "14m"],
            ["Kapasite", "4 Ton"],
        ],
        aciklamaSablonu: (site) =>
            `Çatal, sepet ve kova ataşmanlarıyla çok amaçlı kullanım sunar; ${site.bolge.split(",")[0].trim()} bölgesindeki şantiye ve saha lojistiği işlerinde standart tercih edilir.`,
    },
    {
        slug: "telehandler-18m-kiralama",
        ad: "Telehandler (18m Sınıfı)",
        gorsel: "/media/pt-telehandler.png",
        ozellikler: [
            ["Kaldırma Yüksekliği", "18m"],
            ["Kapasite", "5 Ton"],
        ],
        aciklamaSablonu: (site) =>
            `Filodaki en yüksek erişimli telehandler sınıfıdır; ${site.bolge.split(",")[0].trim()} bölgesindeki yüksek çatı montajı ve ağır malzeme yükleme işlerinde kullanılır.`,
    },
];
