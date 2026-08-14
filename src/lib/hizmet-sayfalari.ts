// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~935 canlı sayfa üretir (85+ domain × sayfa/domain).
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
// /hizmet/[slug] SEO/GEO landing sayfaları — "Hizmetlerimiz" kartlarının tıklama
// hedefi. Aynı bolge-sayfalari.ts ilkesi: sabit şablon (11 hizmet konusu),
// sitenin kendi bolge/uzmanlik/telefon verisiyle doldurulur → kopya içerik olmaz.
import type { SiteIcerik } from "./siteler";
import { urunKatalogu } from "./urun-katalogu";
import { varyantSec, uzmanlikIfade, cevapOperator, cevapNakliye, cevapSure, cevapBelge, cevapSinif, cevapTeslimat } from "./varyant";
import { HIZMET_KONULARI, hizmetKonusuSlugIle, type HizmetKonusu } from "./hizmet-konulari";
import { bespokeBul, bespokeUygula, type BespokeIcerik } from "./bespoke-icerik";

export interface HizmetSayfasi {
    /** Elle yazılmış içerik varsa true — sayfa şablonu ek bölümleri gösterir. */
    elleYazilmis?: boolean;
    ekBolumler?: BespokeIcerik["ekBolumler"];
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
    const konuAd = konu.baslikTaban;
    const konuKucuk = konuAd.toLocaleLowerCase("tr-TR");
    const uzm = uzmanlikIfade(site);
    // Varyant tuzu konu slug'ını da içerir — aynı domainin 11 hizmet sayfası da birbirinden farklılaşır.
    const t = (alan: string) => `hizmet-${konu.slug}-${alan}`;

    const sablon: HizmetSayfasi = {
        slug: konu.slug,
        konu,
        baslik: varyantSec(site, t("baslik"), [
            `${bolge} ${konuAd}`,
            `${konuAd} — ${bolge}`,
            `${bolge} Bölgesinde ${konuAd}`,
            `Kiralık ${konuAd} | ${bolge}`,
        ]),
        aciklama: varyantSec(site, t("aciklama"), [
            `${bolge} bölgesinde ${konuKucuk} — ${uzm} kapsamında saha bilgisine göre doğru makine sınıfı ve yazılı teklif.`,
            `${konuAd} işleriniz için ${bolge} ve çevresine makine sağlıyoruz. Yükseklik, zemin ve süre bilgisiyle net teklif hazırlıyoruz.`,
            `${bolge} sahalarında ${konuKucuk} kapsamında kiralık platform ve ekipman. ${site.telefonGosterim} numarasından saha bilgisi paylaşabilirsiniz.`,
            `${uzm} deneyimiyle ${bolge} bölgesinde ${konuKucuk}: doğru sınıf seçimi, nakliye planı ve şeffaf fiyatlandırma.`,
        ]),
        h1: varyantSec(site, t("h1"), [
            `${bolge} Bölgesinde ${konuAd}`,
            `${bolge} İçin ${konuAd}`,
            `${konuAd} — ${bolge} ve Çevresi`,
        ]),
        giris: eslesenHizmet
            ? varyantSec(site, t("giris-e"), [
                `${bolge} sahalarında sık karşılaşılan bir iş tipi: ${eslesenHizmet.toLocaleLowerCase("tr-TR")}. Bu kapsamda ${uzm} deneyimimizle doğru makine sınıfını ve yazılı teklifi birlikte belirliyoruz.`,
                `${eslesenHizmet} işleri ${bolge} bölgesinde düzenli olarak yaptığımız uygulamalardan. Bu tip işlerde makine seçimini erişim geometrisi ve zemin koşulu belirler; ikisini de sahayı tanıyarak değerlendiriyoruz.`,
                `${bolge} bölgesinde ${eslesenHizmet.toLocaleLowerCase("tr-TR")} talebi yoğun. ${uzm} kapsamındaki tecrübemizle, işin gerektirdiği yüksekliğe ve zemine uygun sınıfı öneriyor, gereksiz büyük makine maliyetinden kaçınmanızı sağlıyoruz.`,
            ])
            : varyantSec(site, t("giris-g"), [
                `${bolge} bölgesinde ${konuKucuk} kapsamında ${uzm} deneyimimizle doğru makine sınıfı ve yazılı teklif süreci sunuyoruz.`,
                `${konuAd} işleri için ${bolge} ve çevresine makine sağlıyoruz. Doğru sınıfı belirlemek için çalışma yüksekliği, zemin tipi ve erişim ölçülerini birlikte değerlendiriyoruz.`,
                `${bolge} sahalarında ${konuKucuk} ihtiyacınıza uygun ekipmanı ${uzm} tecrübemizle seçiyoruz. Saha bilgisi paylaşıldığında sınıf ve bedel yazılı teklifte netleşir.`,
            ]),
        maddeler: [
            {
                baslik: varyantSec(site, t("m1b"), ["Saha tipi iş", "İş kapsamı", "Uygulama alanı"]),
                metin: eslesenHizmet ?? varyantSec(site, t("m1m"), [
                    `${bolge} bölgesinde ${konuKucuk} ihtiyacı için makine parkımızdan uygun sınıf belirlenir.`,
                    `${konuAd} kapsamındaki işlerde makine sınıfı, erişilecek yükseklik ve sahanın geometrisine göre seçilir.`,
                    `Bu iş tipinde doğru makine, işin süresini ve güvenliğini doğrudan etkiler; ${bolge} sahalarındaki deneyimimizle sınıfı netleştiriyoruz.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m2b"), ["Bölgeye yakın hizmet", "Teslimat ve lojistik", "Sevkiyat planı"]),
                metin: varyantSec(site, t("m2m"), [
                    `${bolge} sahasına yakın konumlanma, teslimat süresini kısaltır; acil ihtiyaçlarda öncelikli planlama yapılabilir.`,
                    `${bolge} hattındaki düzenli sevkiyatımız hem teslimat süresini hem nakliye maliyetini düşürür.`,
                    `Makine parkımızın ${bolge} bölgesine mesafesi, plansız duruşlarda hızlı ikame imkânı sağlar.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m3b"), ["Doğru makine sınıfı", "Sınıf seçimi", "Önerilen ekipman"]),
                metin: varyantSec(site, t("m3m"), [
                    `${konuAd} işlerinde çalışma yüksekliği ve erişim geometrisine göre ${urun.ad.toLocaleLowerCase("tr-TR")} veya dengi bir sınıf değerlendirilir.`,
                    `Bu kapsamdaki işlerde sık tercih edilen sınıflardan biri ${urun.ad.toLocaleLowerCase("tr-TR")}; kesin seçim sahanın zemin ve açıklık ölçülerine göre yapılır.`,
                    `${urun.ad} bu iş tipinde yaygın kullanılan bir sınıftır, ancak hedef yükseklik ve engel durumuna göre bir alt veya üst sınıfa geçmek gerekebilir.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m4b"), ["Yazılı teklif süreci", "Teklif nasıl çıkar", "Fiyatlandırma"]),
                metin: varyantSec(site, t("m4m"), [
                    "Çalışma yüksekliği, zemin, erişim ve süre bilgisi paylaşıldığında, uygun makine sınıfı ve kesin bedel yazılı teklifte netleşir.",
                    "Teklifi yazılı veriyoruz; makine, nakliye, operatör ve süre kalemleri ayrı ayrı görünür, sonradan sürpriz maliyet çıkmaz.",
                    "Saha bilgisi netleştiğinde sınıf ve bedel kesinleşir. Fiyatı etkileyen kalemleri ayrıştırarak gösteriyoruz.",
                ]),
            },
        ],
        sss: [
            {
                soru: varyantSec(site, t("s1q"), [
                    `${bolge} bölgesinde ${konuKucuk} için teslimat süresi ne kadar?`,
                    `${konuAd} için makine ne kadar sürede sahada olur?`,
                    `Bu iş için ne kadar sürede teslimat yapabiliyorsunuz?`,
                ]),
                cevap: cevapTeslimat(site, konu.slug),
            },
            {
                soru: varyantSec(site, t("s2q"), [
                    "Bu iş tipi için hangi makine sınıfı önerilir?",
                    `${konuAd} işinde hangi platformu seçmeliyim?`,
                    "Doğru makineyi nasıl belirliyorsunuz?",
                ]),
                cevap: cevapSinif(site, konu.slug),
            },
            {
                soru: varyantSec(site, t("s3q"), [
                    "Operatörlü mü operatörsüz mü kiralanabilir?",
                    "Makineyi kendi ekibimiz kullanabilir mi?",
                    "Operatör de sağlıyor musunuz?",
                ]),
                cevap: cevapOperator(site),
            },
            {
                soru: varyantSec(site, t("s4q"), [
                    "Nakliye bedeli fiyata dahil mi?",
                    "Teslimat ücreti ayrı mı hesaplanıyor?",
                    "Nakliye maliyeti nasıl belirleniyor?",
                ]),
                cevap: cevapNakliye(site),
            },
            {
                soru: varyantSec(site, t("s5q"), [
                    "Kiralama süresini nasıl belirlemeliyim?",
                    "Günlük kiralama mümkün mü?",
                    "Uzun süreli kiralamada avantaj var mı?",
                ]),
                cevap: cevapSure(site),
            },
            {
                soru: varyantSec(site, t("s6q"), [
                    "Periyodik kontrol belgesi veriliyor mu?",
                    "İSG evrakları makineyle birlikte geliyor mu?",
                    "Şantiye girişi için gereken belgeler sağlanıyor mu?",
                ]),
                cevap: cevapBelge(site),
            },
        ],
        ilgiliUrun: { baslik: `${urun.ad} Kiralama`, slug: urun.slug },
    };
    // Elle yazılmış içerik varsa şablonun yerine geçer (kısmi override).
    return bespokeUygula(sablon, bespokeBul(site, `hizmet:${konu.slug}`));
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
