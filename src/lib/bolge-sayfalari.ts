// Bölge sayfaları: "Hizmet Bölgelerimiz" rozetlerinin her biri artık gerçek,
// içerikli bir landing page. Aynı blog/fırsat sayfası ilkesi — sabit şablon,
// bölge adı + site verisiyle (uzmanlik/hizmetler/paragraflar) doldurulur.
import type { SiteIcerik } from "./siteler";
import { urunKatalogu } from "./urun-katalogu";

export interface BolgeSayfasi {
    slug: string;
    bolgeAdi: string;
    baslik: string;
    aciklama: string;
    h1: string;
    giris: string;
    maddeler: { baslik: string; metin: string }[];
    sss: { soru: string; cevap: string }[];
    ilgiliUrun: { baslik: string; slug: string };
}

function slugla(s: string) {
    return s
        .toLocaleLowerCase("tr-TR")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

const URUN_DONGUSU = [
    "makasli-platform-12m-kiralama",
    "eklemli-platform-20m-kiralama",
    "teleskopik-platform-22m-kiralama",
    "dizel-forklift-3-5-ton-kiralama",
    "orumcek-platform-18m-kiralama",
    "telehandler-14m-kiralama",
];

export function bolgeSayfalari(site: SiteIcerik): BolgeSayfasi[] {
    const bolgeler = site.bolge.split(",").map((s) => s.trim()).filter(Boolean);
    return bolgeler.map((bolgeAdi, i) => {
        const hizmet1 = site.hizmetler[i % site.hizmetler.length] ?? site.uzmanlik;
        const hizmet2 = site.hizmetler[(i + 1) % site.hizmetler.length] ?? site.uzmanlik;
        const urunSlug = URUN_DONGUSU[i % URUN_DONGUSU.length];
        const urun = urunKatalogu.find((u) => u.slug === urunSlug) ?? urunKatalogu[0];
        return {
            slug: slugla(bolgeAdi),
            bolgeAdi,
            baslik: `${bolgeAdi} Platform ve Forklift Kiralama`,
            aciklama: `${bolgeAdi} bölgesinde makaslı platform, eklemli platform ve forklift kiralama; ${site.uzmanlik.toLocaleLowerCase("tr-TR")} kapsamında saha bilgisine göre doğru makine sınıfı ve yazılı teklif.`,
            h1: `${bolgeAdi} Bölgesinde Platform ve Forklift Kiralama`,
            giris: `${bolgeAdi} bölgesindeki firmalara ${site.uzmanlik.toLocaleLowerCase("tr-TR")} kapsamında makaslı platform, eklemli platform, teleskopik platform ve forklift kiralama hizmeti sunuyoruz. Saha bilgisi paylaşıldığında doğru makine sınıfı ve nakliye planı birlikte netleştirilir.`,
            maddeler: [
                { baslik: "Bölgeye yakın hizmet", metin: `${bolgeAdi} sahasına yakın konumlanma, teslimat süresini kısaltır; acil ihtiyaçlarda öncelikli planlama yapılabilir.` },
                { baslik: hizmet1.length > 60 ? "Saha tipi işler" : hizmet1, metin: hizmet1.length > 60 ? hizmet1 : `${bolgeAdi} bölgesinde sık karşılaşılan iş tipi: ${hizmet1.toLocaleLowerCase("tr-TR")}.` },
                { baslik: hizmet2.length > 60 ? "Diğer saha işleri" : hizmet2, metin: hizmet2.length > 60 ? hizmet2 : `${bolgeAdi} bölgesinde değerlendirilen bir diğer iş tipi: ${hizmet2.toLocaleLowerCase("tr-TR")}.` },
                { baslik: "Yazılı teklif süreci", metin: "Çalışma yüksekliği, zemin, erişim ve süre bilgisi paylaşıldığında, uygun makine sınıfı ve kesin bedel yazılı teklifte netleşir." },
            ],
            sss: [
                { soru: `${bolgeAdi} bölgesine teslimat süresi ne kadar?`, cevap: "Araç ve makine uygunluğuna göre değişir; acil ihtiyaçlarda aynı gün veya ertesi gün teslimat değerlendirilir." },
                { soru: `${bolgeAdi} sahasında hangi makine sınıfı önerilir?`, cevap: "Sahanın erişim geometrisi ve zemin koşuluna göre değişir; kesin sınıf saha bilgisiyle birlikte teklif aşamasında belirlenir." },
                { soru: "Operatörlü mü operatörsüz mü kiralanabilir?", cevap: "Her iki seçenek de sunulur; operatörlü kiralamada yeterlilik belgesi ve tarih uygunluğu teklif aşamasında doğrulanır." },
                { soru: "Nakliye bedeli fiyata dahil mi?", cevap: `${bolgeAdi} mesafesine göre değişir; dahil olup olmadığı yazılı teklifte ayrı kalem olarak belirtilir.` },
            ],
            ilgiliUrun: { baslik: `${urun.ad} Kiralama`, slug: urun.slug },
        };
    });
}

export function bolgeSayfasiBul(site: SiteIcerik, slug: string): BolgeSayfasi | undefined {
    return bolgeSayfalari(site).find((b) => b.slug === slug);
}
