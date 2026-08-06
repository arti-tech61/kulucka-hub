// /hizmet/[slug] SEO/GEO landing sayfaları — "Hizmetlerimiz" kartlarının tıklama
// hedefi. Aynı bolge-sayfalari.ts ilkesi: sabit şablon (11 hizmet konusu),
// sitenin kendi bolge/uzmanlik/telefon verisiyle doldurulur → kopya içerik olmaz.
import type { SiteIcerik } from "./siteler";
import { urunKatalogu } from "./urun-katalogu";
import { HIZMET_KONULARI, hizmetKonusuSlugIle, type HizmetKonusu } from "./hizmet-konulari";

export interface HizmetSayfasi {
    slug: string;
    konu: HizmetKonusu;
    baslik: string;
    aciklama: string;
    h1: string;
    giris: string;
    maddeler: { baslik: string; metin: string }[];
    sss: { soru: string; cevap: string }[];
    ilgiliUrun: { baslik: string; slug: string };
}

const URUN_DONGUSU = [
    "makasli-platform-12m-kiralama",
    "eklemli-platform-20m-kiralama",
    "teleskopik-platform-22m-kiralama",
    "dizel-forklift-3-5-ton-kiralama",
    "orumcek-platform-18m-kiralama",
    "telehandler-14m-kiralama",
];

function bolgeIlk(site: SiteIcerik) {
    return site.bolge.split(",")[0].trim();
}

function hizmetSayfasiUret(konu: HizmetKonusu, i: number, site: SiteIcerik): HizmetSayfasi {
    const bolge = bolgeIlk(site);
    const urunSlug = URUN_DONGUSU[i % URUN_DONGUSU.length];
    const urun = urunKatalogu.find((u) => u.slug === urunSlug) ?? urunKatalogu[0];
    const eslesenHizmet = site.hizmetler.find((h) => konu.anahtarlar.some((a) => h.toLocaleLowerCase("tr-TR").includes(a)));
    return {
        slug: konu.slug,
        konu,
        baslik: `${bolge} ${konu.baslikTaban}`,
        aciklama: `${bolge} bölgesinde ${konu.baslikTaban.toLocaleLowerCase("tr-TR")} — ${site.uzmanlik.toLocaleLowerCase("tr-TR")} kapsamında saha bilgisine göre doğru makine sınıfı ve yazılı teklif.`,
        h1: `${bolge} Bölgesinde ${konu.baslikTaban}`,
        giris: eslesenHizmet
            ? `${bolge} sahalarında sık karşılaşılan bir iş tipi: ${eslesenHizmet.toLocaleLowerCase("tr-TR")}. Bu kapsamda ${site.uzmanlik.toLocaleLowerCase("tr-TR")} deneyimimizle doğru makine sınıfını ve yazılı teklifi birlikte belirliyoruz.`
            : `${bolge} bölgesinde ${konu.baslikTaban.toLocaleLowerCase("tr-TR")} kapsamında ${site.uzmanlik.toLocaleLowerCase("tr-TR")} deneyimimizle doğru makine sınıfı ve yazılı teklif süreci sunuyoruz.`,
        maddeler: [
            { baslik: "Saha tipi iş", metin: eslesenHizmet ?? `${bolge} bölgesinde ${konu.baslikTaban.toLocaleLowerCase("tr-TR")} ihtiyacı için makine parkımızdan uygun sınıf belirlenir.` },
            { baslik: "Bölgeye yakın hizmet", metin: `${bolge} sahasına yakın konumlanma, teslimat süresini kısaltır; acil ihtiyaçlarda öncelikli planlama yapılabilir.` },
            { baslik: "Doğru makine sınıfı", metin: `${konu.baslikTaban} işlerinde çalışma yüksekliği ve erişim geometrisine göre ${urun.ad.toLocaleLowerCase("tr-TR")} veya dengi bir sınıf değerlendirilir.` },
            { baslik: "Yazılı teklif süreci", metin: "Çalışma yüksekliği, zemin, erişim ve süre bilgisi paylaşıldığında, uygun makine sınıfı ve kesin bedel yazılı teklifte netleşir." },
        ],
        sss: [
            { soru: `${bolge} bölgesinde ${konu.baslikTaban.toLocaleLowerCase("tr-TR")} için teslimat süresi ne kadar?`, cevap: "Araç ve makine uygunluğuna göre değişir; acil ihtiyaçlarda aynı gün veya ertesi gün teslimat değerlendirilir." },
            { soru: "Bu iş tipi için hangi makine sınıfı önerilir?", cevap: "Sahanın erişim geometrisi ve zemin koşuluna göre değişir; kesin sınıf saha bilgisiyle birlikte teklif aşamasında belirlenir." },
            { soru: "Operatörlü mü operatörsüz mü kiralanabilir?", cevap: "Her iki seçenek de sunulur; operatörlü kiralamada yeterlilik belgesi ve tarih uygunluğu teklif aşamasında doğrulanır." },
            { soru: "Nakliye bedeli fiyata dahil mi?", cevap: `${bolge} mesafesine göre değişir; dahil olup olmadığı yazılı teklifte ayrı kalem olarak belirtilir.` },
        ],
        ilgiliUrun: { baslik: `${urun.ad} Kiralama`, slug: urun.slug },
    };
}

// Sitenin gerçekte sunduğu hizmetlerle eşleşen konular öne alınır; kalan
// konular da (link/SEO kapsamı için) sona eklenir — hiçbir /hizmet/[slug]
// 404 vermez, kart her zaman geçerli bir sayfaya gider.
export function hizmetSayfalari(site: SiteIcerik): HizmetSayfasi[] {
    const eslesenSluglar = new Set(
        site.hizmetler
            .map((h) => HIZMET_KONULARI.find((k) => k.anahtarlar.some((a) => h.toLocaleLowerCase("tr-TR").includes(a)))?.slug)
            .filter((s): s is string => Boolean(s))
    );
    const siraliKonular = [
        ...HIZMET_KONULARI.filter((k) => eslesenSluglar.has(k.slug)),
        ...HIZMET_KONULARI.filter((k) => !eslesenSluglar.has(k.slug)),
    ];
    return siraliKonular.map((k, i) => hizmetSayfasiUret(k, i, site));
}

export function hizmetSayfasiBul(site: SiteIcerik, slug: string): HizmetSayfasi | undefined {
    const konu = hizmetKonusuSlugIle(slug);
    if (!konu) return undefined;
    const i = HIZMET_KONULARI.findIndex((k) => k.slug === slug);
    return hizmetSayfasiUret(konu, i === -1 ? 0 : i, site);
}
