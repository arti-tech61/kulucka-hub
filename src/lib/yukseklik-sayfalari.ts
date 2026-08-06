// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~935 canlı sayfa üretir (11 yükseklik × 85 domain).
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
//
// YÜKSEKLİK NİYETLİ SAYFALAR — "12 metre platform kiralama" tipi
//
// Ürün sayfaları makine sınıfı odaklıdır ("Makaslı Platform 12m Sınıfı");
// bu sayfalar ise KULLANICININ NİYETİ odaklıdır: "12 metreye çıkmam lazım,
// ne kiralamalıyım?" Aynı veriyi farklı bir soruya cevap verecek şekilde
// sunar.
//
// ⚠️ DÜRÜSTLÜK KURALI (izmir-manlift.com'daki exactMatch deseninden):
// Filoda tam o metrajda makine yoksa sayfa bunu AÇIKÇA söyler ve neden bir
// üst sınıfın önerildiğini ölçülerle anlatır. "12 metre platformumuz var"
// demek, yoksa, yalandır. Uzun kuyruklu sorguyu yakalamak için yalan
// söylemek yasaktır — sayfa yine açılır ama doğruyu yazar.

import type { SiteIcerik } from "./siteler";
import { FILO, type FiloMakinesi } from "./filo";
import { urunKatalogu } from "./urun-katalogu";
import { varyantSec, kur, ilkBolge, uzmanlikIfade, cevapOperator, cevapBelge, cevapNakliye } from "./varyant";

/** Gerçek arama hacmi olan metrajlar. Kat karşılığı ~3 m kat yüksekliği varsayar. */
const METRAJLAR = [8, 10, 12, 14, 16, 18, 20, 26, 34, 43, 58] as const;

/** Metraja göre tipik iş tanımı — sabit değil, gerçek kullanım karşılığı. */
const METRAJ_ISLERI: Record<number, { yapi: string; isler: string[] }> = {
    8: { yapi: "2-3 katlı bina yüksekliği", isler: ["mağaza ve ofis içi bakım", "depo raf sistemleri", "tabela ve aydınlatma"] },
    10: { yapi: "3 katlı bina yüksekliği", isler: ["fabrika içi tesisat", "depo çatı altı", "AVM iç alan bakım"] },
    12: { yapi: "4 katlı bina yüksekliği", isler: ["fabrika tavan ve havalandırma", "sprinkler hattı", "lojistik depo raf üstü"] },
    14: { yapi: "4-5 katlı bina yüksekliği", isler: ["yüksek tavanlı üretim alanı", "çatı makas kontrolü", "dış cephe alt bölüm"] },
    16: { yapi: "5 katlı bina yüksekliği", isler: ["fabrika çatı altı", "dış cephe orta bölüm", "çelik konstrüksiyon montaj"] },
    18: { yapi: "6 katlı bina yüksekliği", isler: ["hangar ve büyük açıklıklı yapı", "endüstriyel boru hattı", "dış cephe kaplama"] },
    20: { yapi: "6-7 katlı bina yüksekliği", isler: ["yüksek raflı depo", "çelik çatı montajı", "silo ve tank bakımı"] },
    26: { yapi: "8-9 katlı bina yüksekliği", isler: ["petrokimya tesis bakımı", "liman ve tersane", "yüksek cephe işleri"] },
    34: { yapi: "11 katlı bina yüksekliği", isler: ["endüstriyel baca ve silo", "büyük ölçekli çelik yapı", "enerji tesisi bakımı"] },
    43: { yapi: "14 katlı bina yüksekliği", isler: ["tersane ve gemi inşa", "çimento tesisi", "yüksek dış cephe"] },
    58: { yapi: "19 katlı bina yüksekliği", isler: ["rüzgâr türbini bakımı", "rafineri", "köprü ve viyadük"] },
};

export interface YukseklikSayfasi {
    slug: string;
    metraj: number;
    /** Sepet tabanı yüksekliği — çalışma yüksekliğinden ~2 m düşük. */
    platformYuksekligi: number;
    katKarsiligi: number;
    /** Filoda TAM bu metrajda (±0.5 m) makine var mı? */
    tamEslesme: boolean;
    /** Önerilen filo makineleri — tam eşleşme yoksa en yakın ÜST sınıf. */
    onerilenMakineler: FiloMakinesi[];
    /** Ürün kataloğundan eşleşen sınıflar. */
    urunSluglari: string[];
    baslik: string;
    aciklama: string;
    h1: string;
    giris: string;
    /** Tam eşleşme yoksa gösterilecek dürüstlük uyarısı. */
    uyari?: string;
    maddeler: { baslik: string; metin: string }[];
    sss: { soru: string; cevap: string }[];
}

function slugla(metraj: number) {
    return `${metraj}-metre-platform-kiralama`;
}

export function metrajListesi(): readonly number[] {
    return METRAJLAR;
}

/** Filoda bu metrajı karşılayan makineler — tam eşleşme yoksa en yakın üst sınıf. */
function makineSec(metraj: number): { makineler: FiloMakinesi[]; tam: boolean } {
    const tamOlanlar = FILO.filter((m) => Math.abs(m.yukseklik - metraj) <= 0.5);
    if (tamOlanlar.length > 0) {
        return { makineler: tamOlanlar.sort((a, b) => a.yukseklik - b.yukseklik).slice(0, 4), tam: true };
    }
    // Tam eşleşme yok — hedefe ulaşabilen en düşük metrajlı makineler (üst sınıf)
    const ustler = FILO.filter((m) => m.yukseklik >= metraj).sort((a, b) => a.yukseklik - b.yukseklik);
    return { makineler: ustler.slice(0, 4), tam: false };
}

function urunSec(metraj: number): string[] {
    // Ürün slug'ları "...-12m-kiralama" biçiminde metraj taşır
    return urunKatalogu
        .filter((u) => {
            const m = u.slug.match(/-(\d+)m-/);
            if (!m) return false;
            const um = Number(m[1]);
            return um >= metraj - 2 && um <= metraj + 4;
        })
        .map((u) => u.slug)
        .slice(0, 4);
}

export function yukseklikSayfalari(site: SiteIcerik): YukseklikSayfasi[] {
    return METRAJLAR.map((metraj) => uret(site, metraj)).filter((s): s is YukseklikSayfasi => s !== undefined);
}

export function yukseklikSayfasiBul(site: SiteIcerik, slug: string): YukseklikSayfasi | undefined {
    const metraj = METRAJLAR.find((m) => slugla(m) === slug);
    return metraj === undefined ? undefined : uret(site, metraj);
}

function uret(site: SiteIcerik, metraj: number): YukseklikSayfasi | undefined {
    const { makineler, tam } = makineSec(metraj);
    // Filoda bu yüksekliğe ulaşabilen hiç makine yoksa sayfa AÇILMAZ.
    // (Olmayan bir kabiliyeti pazarlamak yasaktır.)
    if (makineler.length === 0) return undefined;

    const bolge = ilkBolge(site);
    const uzm = uzmanlikIfade(site);
    const is = METRAJ_ISLERI[metraj];
    const t = (alan: string) => `yuks-${metraj}-${alan}`;
    const enYakin = makineler[0];

    return {
        slug: slugla(metraj),
        metraj,
        platformYuksekligi: metraj - 2,
        katKarsiligi: Math.round(metraj / 3),
        tamEslesme: tam,
        onerilenMakineler: makineler,
        urunSluglari: urunSec(metraj),
        baslik: varyantSec(site, t("baslik"), [
            `${metraj} Metre Platform Kiralama | ${bolge}`,
            `${bolge} ${metraj} Metre Kiralık Platform`,
            `${metraj} Metre Yükseklikte Çalışma Platformu — ${bolge}`,
        ]),
        aciklama: varyantSec(site, t("aciklama"), [
            `${bolge} bölgesinde ${metraj} metre çalışma yüksekliğine ulaşan kiralık platform. ${is.yapi}; ${is.isler[0]} gibi işler için uygun sınıflar ve yazılı teklif.`,
            `${metraj} metreye çıkmanız gerekiyorsa ${bolge} ve çevresine uygun makineyi biz belirliyoruz — sepet tabanı ${metraj - 2} m, yaklaşık ${is.yapi}.`,
            `${bolge} sahalarına ${metraj} m çalışma yüksekliğinde platform kiralama: ${is.isler.slice(0, 2).join(", ")} işlerinde kullanılan sınıflar.`,
        ]),
        h1: varyantSec(site, t("h1"), [
            `${bolge} Bölgesinde ${metraj} Metre Platform Kiralama`,
            `${metraj} Metre Çalışma Yüksekliği — ${bolge}`,
            `${bolge} İçin ${metraj} Metre Kiralık Platform`,
        ]),
        giris: kur(site, t("giris"),
            [
                `${metraj} metre çalışma yüksekliği, sepet tabanının ${metraj - 2} metrede olması demektir — yaklaşık ${is.yapi}.`,
                `Bu sınıfta sepet tabanı ${metraj - 2} metreye çıkar; üzerine bir kişinin uzanma mesafesi eklenerek ${metraj} metre çalışma yüksekliği elde edilir.`,
                `${metraj} metre, katalogda çalışma yüksekliği olarak geçer; sepetin kendisi ${metraj - 2} metreye kadar yükselir. Kaba karşılığı ${is.yapi}.`,
            ],
            [
                `${bolge} bölgesinde bu metraj en çok ${is.isler.join(", ")} işlerinde talep ediliyor.`,
                `${is.isler[0].charAt(0).toLocaleUpperCase("tr-TR")}${is.isler[0].slice(1)} ve ${is.isler[1]} bu yükseklik bandının tipik işleridir.`,
                `${uzm} kapsamında bu metraj ${is.isler.slice(0, 2).join(" ve ")} gibi işlerde devreye giriyor.`,
            ],
            [
                "Doğru sınıfı belirlerken yüksekliğin yanında zemin tipi ve makinenin gireceği açıklık da kontrol edilir.",
                `${bolge} için müsait makineyi ve teslimat tarihini iş tanımıyla birlikte netleştiriyoruz.`,
                "Yükseklik tek başına yetmez; kapasite ve zemin uyumu da sınıfı belirler.",
            ],
        ),
        uyari: tam
            ? undefined
            : varyantSec(site, t("uyari"), [
                `Filomuzda tam ${metraj} metre etiketli makine bulunmuyor. Bu yüksekliğe ulaşmak için bir üst sınıf öneriyoruz: ${enYakin.ad} (${enYakin.yukseklik.toFixed(2)} m). Aradaki fark sahada sorun yaratmaz — üst sınıf makine hedefe rahatlıkla ulaşır; dikkat edilecek nokta makinenin ölçüleri ve ağırlığının sahaya uygunluğudur.`,
                `Dürüst olmak gerekirse filomuzda tam ${metraj} metrelik bir model yok. En yakın seçenek ${enYakin.ad} (${enYakin.yukseklik.toFixed(2)} m) — hedefinize ulaşır, ancak ${enYakin.agirlik.toLocaleString("tr-TR")} kg ağırlığı ve ölçüleri sahaya uygun mu, teslimat öncesi birlikte kontrol ediyoruz.`,
                `Filomuzda ${metraj} metre etiketli makine yok; bu metraj için bir üst sınıfa çıkıyoruz (${enYakin.ad}, ${enYakin.yukseklik.toFixed(2)} m). Üst sınıf makine daha büyük ve ağır olduğu için saha giriş ölçülerini önceden teyit etmek gerekir.`,
            ]),
        maddeler: [
            {
                baslik: varyantSec(site, t("m1b"), ["Hangi işler için uygun?", "Tipik kullanım", "Bu metrajın işleri"]),
                metin: varyantSec(site, t("m1m"), [
                    `${is.yapi} karşılığındaki bu bant, ${bolge} bölgesinde ${is.isler.join(", ")} işlerinde kullanılıyor.`,
                    `${is.isler[0].charAt(0).toLocaleUpperCase("tr-TR")}${is.isler[0].slice(1)}, ${is.isler[1]} ve ${is.isler[2]} bu yükseklikte yapılan başlıca işler.`,
                    `Bu metraj yaklaşık ${is.yapi}; pratikte ${is.isler.slice(0, 2).join(" ve ")} taleplerini karşılıyor.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m2b"), ["Yükseklik nasıl hesaplanır?", "Çalışma yüksekliği ne demek?", "Metraj okuma"]),
                metin: varyantSec(site, t("m2m"), [
                    `Çalışma yüksekliği, sepet tabanı yüksekliğine ortalama uzanma mesafesi olan ~2 metre eklenerek bulunur. ${metraj} m sınıfta sepet ${metraj - 2} metreye çıkar. Hedefiniz ${metraj - 2} metredeyse bu sınıf yeterlidir; ${metraj} metredeyse bir üst sınıfa bakmak gerekebilir.`,
                    `Katalogdaki ${metraj} m değeri sepetin yüksekliği değildir. Sepet ${metraj - 2} metreye çıkar, kalan ~2 metre sepette duran kişinin uzanma payıdır. Bu ayrım atlandığında sahada "makine ulaşmıyor" durumu yaşanır.`,
                    `${metraj} metre = ${metraj - 2} metre sepet yüksekliği + ~2 metre uzanma payı. Hedef noktanın gerçek yüksekliğini ölçüp bu formüle koyduğunuzda doğru sınıf net çıkar.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m3b"), ["Zemin ve güç tipi", "Akülü mü dizel mi?", "Ortam seçimi"]),
                metin: varyantSec(site, t("m3m"), [
                    `Bu metrajda hem akülü hem dizel seçenekler bulunabilir. Kapalı üretim alanında emisyon nedeniyle akülü zorunludur; kırmataş veya çamurlu açık sahada dizel 4x4 sınıf gerekir.`,
                    `Karar sırası: önce ortam (kapalı/açık), sonra zemin (beton/arazi), en son metraj. ${metraj} m sınıfında bu ayrım makine ağırlığı ve şase genişliğini de değiştirir.`,
                    `${bolge} sahalarında bu metrajda zemin belirleyici oluyor — düz beton zeminde akülü model yeterliyken, engebeli sahada dizel arazi tipine geçmek gerekiyor.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m4b"), ["Saha giriş ölçüleri", "Makine sahaya girebilir mi?", "Erişim kontrolü"]),
                metin: varyantSec(site, t("m4m"), [
                    `Metraj yükseldikçe makine büyür ve ağırlaşır. ${enYakin.ad} için ağırlık ${enYakin.agirlik.toLocaleString("tr-TR")} kg; kapalı alan işlerinde döşeme taşıma kapasitesi bu değere göre kontrol edilmelidir.`,
                    `Yalnız yükseklik değil, makinenin gireceği kapı genişliği ve manevra alanı da seçimi belirler. Bu metrajda ${enYakin.agirlik.toLocaleString("tr-TR")} kg civarı ağırlıklar söz konusu.`,
                    `Teslimat öncesi üç ölçü teyit edilir: giriş açıklığı, manevra alanı ve zemin taşıma kapasitesi. ${metraj} m sınıfında bu kontrol özellikle önemlidir.`,
                ]),
            },
        ],
        sss: [
            {
                soru: varyantSec(site, t("s1q"), [
                    `${metraj} metre platform kaç katlı binaya çıkar?`,
                    `${metraj} metre ne kadar yükseklik demek?`,
                    `${metraj} metreyle hangi yüksekliğe ulaşırım?`,
                ]),
                cevap: kur(site, t("s1a"),
                    [
                        `${metraj} metre çalışma yüksekliği kabaca ${is.yapi} karşılığıdır (${Math.round(metraj / 3)} kat, 3 m kat yüksekliği varsayımıyla).`,
                        `Yaklaşık ${is.yapi} — yani ${Math.round(metraj / 3)} katlı bir binanın çatı hizası.`,
                        `${is.yapi} demek; sepet ${metraj - 2} metreye çıkar, üzerine uzanma payı eklenir.`,
                    ],
                    [
                        "Ancak endüstriyel yapılarda kat yüksekliği 3 metreden fazla olabilir; fabrika ve depo tavanları çoğu zaman 6-12 metre arasındadır.",
                        "Kat sayısı kaba bir referanstır; kesin karar için hedef noktanın gerçek yüksekliği ölçülmelidir.",
                        "Bu hesap konut tipi yapılar içindir; sanayi yapılarında tek kat 8 metreyi bulabilir.",
                    ],
                    [
                        "Ulaşmak istediğiniz noktanın yerden yüksekliğini ölçüp paylaşın, sınıfı ona göre belirleyelim.",
                        `${bolge} için doğru metrajı iş tanımıyla birlikte netleştiriyoruz.`,
                        "",
                    ],
                ),
            },
            {
                soru: varyantSec(site, t("s2q"), [
                    `Filonuzda ${metraj} metre makine var mı?`,
                    `Bu yükseklik için hangi makineleri veriyorsunuz?`,
                    `${metraj} metre için hangi modeller müsait?`,
                ]),
                cevap: tam
                    ? `Evet. Filomuzda bu metrajı karşılayan modeller: ${makineler.map((m) => `${m.ad} (${m.yukseklik.toFixed(2)} m, ${m.kapasite} kg)`).join("; ")}. Hangisinin uygun olduğunu zemin tipi ve saha giriş ölçüleriyle birlikte belirliyoruz.`
                    : `Filomuzda tam ${metraj} metre etiketli model bulunmuyor; bu yüksekliğe bir üst sınıfla çıkıyoruz: ${makineler.map((m) => `${m.ad} (${m.yukseklik.toFixed(2)} m)`).join("; ")}. Üst sınıf makine hedefe ulaşır, ancak daha büyük ve ağır olduğu için saha giriş ölçülerini önceden teyit ediyoruz.`,
            },
            {
                soru: varyantSec(site, t("s3q"), [
                    "Bu metrajda kapalı alanda çalışabilir miyim?",
                    "Akülü model var mı?",
                    "Fabrika içinde kullanabilir miyim?",
                ]),
                cevap: (() => {
                    const akulu = makineler.filter((m) => m.gucTipi === "akulu");
                    if (akulu.length > 0) {
                        return `Evet. Bu metrajda filomuzda akülü model var (${akulu.map((m) => m.ad).join(", ")}); emisyon üretmediği için kapalı üretim alanı, depo ve ticari binalarda kullanılabilir. Dikkat edilecek nokta zemindir: akülü modeller düz ve sert zemin varsayar.`;
                    }
                    return `Bu metrajda filomuzdaki modeller dizel/hibrit güç grubunda. Dizel makineler egzoz emisyonu nedeniyle havalandırması yetersiz kapalı alanlarda kullanılamaz. Kapalı alan ihtiyacınız varsa daha düşük bir metrajda akülü modellere bakmamız gerekir — hedef yüksekliğinizi paylaşın, birlikte değerlendirelim.`;
                })(),
            },
            { soru: "Operatörlü mü operatörsüz mü kiralanabilir?", cevap: cevapOperator(site) },
            { soru: varyantSec(site, t("s5q"), ["Nakliye bedeli nasıl hesaplanıyor?", "Teslimat ücreti dahil mi?"]), cevap: cevapNakliye(site) },
            { soru: varyantSec(site, t("s6q"), ["Periyodik kontrol belgesi veriliyor mu?", "İSG evrakları makineyle geliyor mu?"]), cevap: cevapBelge(site) },
        ],
    };
}
