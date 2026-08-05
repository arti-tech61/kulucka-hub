import type { SiteIcerik } from "@/lib/siteler";

// Paylaşımlı ürün kataloğu: görseller ve teknik özellikler TÜM domain'lerde
// aynıdır (mevcut bespoke temalar da /media/makasli-platform.png gibi görselleri
// zaten paylaşıyor — bkz. aydin.tsx, bozuyuk.tsx, kutahya.tsx vb.). Yalnızca
// AÇIKLAMA metni her domain için site.bolge/uzmanlik'ten otomatik türetilir,
// böylece kopya içerik oluşmaz.
export interface UrunKatalogOgesi {
    slug: string;
    ad: string;
    gorsel: string;
    ozellikler: [string, string][];
    aciklamaSablonu: (site: SiteIcerik) => string;
}

export const urunKatalogu: UrunKatalogOgesi[] = [
    {
        slug: "makasli-platform-kiralama",
        ad: "Makaslı Platform",
        gorsel: "/media/makasli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "8m - 18m"],
            ["Kaldırma Kapasitesi", "227kg - 680kg"],
        ],
        aciklamaSablonu: (site) =>
            `${site.bolge.split(",")[0].trim()} bölgesindeki düz ve taşıyıcı zeminlerde dikey erişim için; ${site.uzmanlik} işlerinde sıkça tercih edilir.`,
    },
    {
        slug: "eklemli-ve-teleskopik-platform-kiralama",
        ad: "Eklemli Platform",
        gorsel: "/media/eklemli-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "11m - 43m"],
            ["Yatay Erişim", "6m - 21m"],
        ],
        aciklamaSablonu: (site) =>
            `Engellerin üzerinden aşarak ulaşılması zor noktalara erişim sağlar; ${site.bolge.split(",")[0].trim()} sahalarında yatay erişim gerektiren işlerde tercih edilir.`,
    },
    {
        slug: "eklemli-ve-teleskopik-platform-kiralama",
        ad: "Teleskopik Platform",
        gorsel: "/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg",
        ozellikler: [
            ["Çalışma Yüksekliği", "16m - 58m"],
            ["Kaldırma Kapasitesi", "227kg - 450kg"],
        ],
        aciklamaSablonu: (site) =>
            `Uzun bom ve geniş çalışma alanıyla maksimum erişim sağlar; ${site.h1.toLowerCase()} kapsamındaki yüksek irtifa projeleri için uygundur.`,
    },
    {
        slug: "dizel-forklift-kiralama",
        ad: "Forklift",
        gorsel: "/media/forklift.jpg",
        ozellikler: [
            ["Kapasite", "1.5 - 10 Ton"],
            ["Yakıt Tipi", "Dizel / Elektrikli"],
        ],
        aciklamaSablonu: (site) =>
            `Yük taşıma ve istifleme işleri için; ${site.bolge.split(",")[0].trim()} bölgesindeki depo, saha ve lojistik ihtiyaçlarına uygun kapasite seçenekleri.`,
    },
    {
        slug: "orumcek-platform-kiralama",
        ad: "Örümcek Platform",
        gorsel: "/media/orumcek-platform.png",
        ozellikler: [
            ["Çalışma Yüksekliği", "13m - 30m"],
            ["Zemin Baskısı", "Düşük - hassas yüzeylere uygun"],
        ],
        aciklamaSablonu: (site) =>
            `Paletli hareket kabiliyeti ile dar, düzensiz veya iç mekân zeminlerde erişim sağlar; ${site.bolge.split(",")[0].trim()} bölgesinde hassas yüzeyli sahalar için tercih edilir.`,
    },
    {
        slug: "telehandler-kiralama",
        ad: "Telehandler",
        gorsel: "/media/telehandler.png",
        ozellikler: [
            ["Kaldırma Yüksekliği", "7m - 18m"],
            ["Kapasite", "3 - 5 Ton"],
        ],
        aciklamaSablonu: (site) =>
            `Çatal, sepet ve kova ataşmanlarıyla çok amaçlı kullanım sunar; ${site.bolge.split(",")[0].trim()} bölgesindeki şantiye ve saha lojistiği işlerinde tercih edilir.`,
    },
];
