// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~833 canlı sayfa üretir (85 domain × ilk 3 bölge × gerçek hizmet).
// Buraya yazacağınız TEK BİR SABİT CÜMLE, o kadar sayfada birebir tekrarlanır.
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
//
// BÖLGE × HİZMET KESİŞİM SAYFALARI — "Gerede'de forklift kiralama" tipi
//
// ⚠️ NEDEN KARTEZYEN ÇARPIM DEĞİL:
// Tüm bölge × tüm hizmet kombinasyonu 6.446 sayfa ederdi, ancak bunun yalnızca
// %32'si sitenin GERÇEKTEN sunduğunu beyan ettiği bir hizmete karşılık geliyor.
// Kalan %68 sahte kombinasyon olurdu (sadece makaslı platform kiralayan bir
// siteye "örümcek platform kiralama" sayfası açmak gibi) — bu hem yalan hem
// Google'ın doorway page tanımına birebir uyuyor. Ağ 2.1 katına çıkar ve
// ceza riski 85 domainin tamamını birden etkilerdi.
//
// BU YÜZDEN İKİ SINIR KONULDU:
//   1. Yalnız site.hizmetler ile GERÇEKTEN eşleşen hizmet konuları
//      (hizmetSayfalari()'nın aksine — orada kapsam için eşleşmeyenler de
//      listeye ekleniyor, burada eklenmiyor)
//   2. Yalnız ilk MAKS_BOLGE bölge (en önemli/merkez bölgeler)
// Sonuç: ~833 sayfa, hepsi gerçek bir hizmet-bölge eşleşmesine dayanıyor.
//
// Bu sınırları gevşetmeden önce docs/SEO-ICERIK-URETIMI.md'yi okuyun.

import type { SiteIcerik } from "./siteler";
import { urunKatalogu } from "./urun-katalogu";
import { HIZMET_KONULARI, type HizmetKonusu } from "./hizmet-konulari";
import {
    varyantSec, kur, ilkBolge, uzmanlikIfade,
    cevapOperator, cevapNakliye, cevapSure, cevapBelge, cevapTeslimat,
} from "./varyant";

/** Kesişim sayfası açılacak maksimum bölge sayısı (domain başına). */
const MAKS_BOLGE = 3;

export interface BolgeHizmetSayfasi {
    slug: string;              // "gerede/forklift-istifleme-kiralama"
    bolgeSlug: string;
    hizmetSlug: string;
    bolgeAdi: string;
    konu: HizmetKonusu;
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
        .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
        .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
        .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const URUN_DONGUSU = [
    "makasli-platform-12m-kiralama",
    "eklemli-platform-20m-kiralama",
    "teleskopik-platform-22m-kiralama",
    "dizel-forklift-3-5-ton-kiralama",
    "orumcek-platform-18m-kiralama",
    "telehandler-14m-kiralama",
];

/**
 * Sitenin beyan ettiği hizmetlerle GERÇEKTEN eşleşen konular.
 * hizmetSayfalari()'ndan farkı: eşleşmeyenler listeye EKLENMEZ.
 */
function gercekEslesenKonular(site: SiteIcerik): HizmetKonusu[] {
    return HIZMET_KONULARI.filter((k) =>
        site.hizmetler.some((h) => k.anahtarlar.some((a) => h.toLocaleLowerCase("tr-TR").includes(a)))
    );
}

function uret(site: SiteIcerik, bolgeAdi: string, konu: HizmetKonusu, i: number): BolgeHizmetSayfasi {
    const bSlug = slugla(bolgeAdi);
    const hSlug = konu.slug;
    const konuAd = konu.baslikTaban;
    const konuKucuk = konuAd.toLocaleLowerCase("tr-TR");
    const uzm = uzmanlikIfade(site);
    const urun = urunKatalogu.find((u) => u.slug === URUN_DONGUSU[i % URUN_DONGUSU.length]) ?? urunKatalogu[0];
    // Tuz hem bölgeyi hem hizmeti içerir → her kesişim kendi varyantını alır
    const t = (alan: string) => `bh-${bSlug}-${hSlug}-${alan}`;
    // Sitenin bu konuyla eşleşen kendi hizmet metni (gerçek bilgi)
    const eslesenHizmet = site.hizmetler.find((h) =>
        konu.anahtarlar.some((a) => h.toLocaleLowerCase("tr-TR").includes(a))
    );

    return {
        slug: `${bSlug}/${hSlug}`,
        bolgeSlug: bSlug,
        hizmetSlug: hSlug,
        bolgeAdi,
        konu,
        baslik: varyantSec(site, t("baslik"), [
            `${bolgeAdi} ${konuAd}`,
            `${bolgeAdi} Bölgesinde ${konuAd}`,
            `${konuAd} — ${bolgeAdi}`,
            `Kiralık ${konuAd} | ${bolgeAdi}`,
        ]),
        aciklama: varyantSec(site, t("aciklama"), [
            `${bolgeAdi} bölgesinde ${konuKucuk}. ${uzm} kapsamında saha bilgisine göre doğru makine sınıfı, nakliye planı ve yazılı teklif.`,
            `${bolgeAdi} sahalarına ${konuKucuk} hizmeti. Çalışma yüksekliği ve zemin bilgisiyle uygun sınıfı belirliyor, ${site.telefonGosterim} numarasından teklif veriyoruz.`,
            `${konuAd} işleriniz için ${bolgeAdi} ve çevresine ekipman sağlıyoruz — ${uzm} deneyimiyle sınıf seçimi ve şeffaf fiyatlandırma.`,
            `${bolgeAdi} bölgesindeki ${konuKucuk} talepleri için makine parkımız, nakliye organizasyonu ve İSG evrak desteği.`,
        ]),
        h1: varyantSec(site, t("h1"), [
            `${bolgeAdi} Bölgesinde ${konuAd}`,
            `${bolgeAdi} İçin ${konuAd}`,
            `${konuAd} — ${bolgeAdi} ve Çevresi`,
        ]),
        giris: kur(site, t("giris"),
            eslesenHizmet
                ? [
                    `${bolgeAdi} bölgesinde ${eslesenHizmet.toLocaleLowerCase("tr-TR")} kapsamındaki talepleri düzenli olarak karşılıyoruz.`,
                    `${eslesenHizmet} işleri ${bolgeAdi} sahalarında sık karşılaştığımız uygulamalardan biri.`,
                    `${bolgeAdi} ve çevresinde ${eslesenHizmet.toLocaleLowerCase("tr-TR")} talebi yoğun.`,
                    `${bolgeAdi} bölgesindeki ${eslesenHizmet.toLocaleLowerCase("tr-TR")} işlerinde makine parkımızla çalışıyoruz.`,
                ]
                : [
                    `${bolgeAdi} bölgesinde ${konuKucuk} hizmeti veriyoruz.`,
                    `${konuAd} işleri için ${bolgeAdi} ve çevresine ekipman sağlıyoruz.`,
                    `${bolgeAdi} sahalarında ${konuKucuk} talepleri karşılanıyor.`,
                    `${bolgeAdi} bölgesindeki ${konuKucuk} ihtiyaçlarınız için makine parkımız hazır.`,
                ],
            [
                `Bu tip işlerde makine seçimini üç veri belirliyor: ulaşılacak yükseklik, zeminin taşıma kapasitesi ve makinenin gireceği açıklığın ölçüsü.`,
                `Doğru sınıfı belirlerken önce ortamı ayırıyoruz — kapalı üretim alanında akülü, açık ve engebeli sahada dizel 4x4 makine gerekiyor.`,
                `${uzm} kapsamındaki deneyimimiz, gereğinden büyük makine kiralamanın hem maliyeti hem nakliye zorluğunu artırdığını gösteriyor; bu yüzden sınıfı saha bilgisiyle daraltıyoruz.`,
                `Karar sırası şu: önce ortam (kapalı/açık), sonra yükseklik, en son kapasite. Bu sıra atlandığında yanlış sınıf seçiliyor.`,
            ],
            [
                `${bolgeAdi} sahasına yakın konumlanmamız teslimat süresini kısaltıyor; saha bilgisini paylaştığınızda uygun makineyi ve nakliye planını yazılı teklifte netleştiriyoruz.`,
                `Saha bilgisi paylaşıldığında sınıf ve bedel yazılı teklifte kesinleşiyor — telefonda tahmini rakam vermiyoruz.`,
                `${site.telefonGosterim} numarasından iş tanımınızı iletin, ${bolgeAdi} için uygun makineyi ve teslimat tarihini birlikte planlayalım.`,
                `Çalışma yüksekliği, zemin tipi ve süre bilgisiyle teklifi yazılı hazırlıyoruz; nakliye ve operatör kalemleri ayrı ayrı görünüyor.`,
            ],
        ),
        maddeler: [
            {
                baslik: varyantSec(site, t("m1b"), [`${bolgeAdi} sahalarında bu iş`, "Bölgedeki uygulama", "Saha karşılığı"]),
                metin: eslesenHizmet
                    ? varyantSec(site, t("m1m"), [
                        `${eslesenHizmet} — ${bolgeAdi} bölgesinde bu kapsamda düzenli çalışıyoruz.`,
                        `${bolgeAdi} sahalarında ${eslesenHizmet.toLocaleLowerCase("tr-TR")} işleri için makine sınıfı, erişim geometrisine göre belirleniyor.`,
                        `Bu bölgede ${eslesenHizmet.toLocaleLowerCase("tr-TR")} talebi düzenli; doğru sınıf seçimi hem süreyi hem maliyeti belirgin şekilde etkiliyor.`,
                    ])
                    : varyantSec(site, t("m1m2"), [
                        `${bolgeAdi} bölgesinde ${konuKucuk} ihtiyacı için makine parkımızdan uygun sınıf belirlenir.`,
                        `${konuAd} kapsamındaki işlerde sınıf, erişilecek yükseklik ve sahanın geometrisine göre seçilir.`,
                        `Bu iş tipinde doğru makine, işin süresini ve güvenliğini doğrudan etkiler.`,
                    ]),
            },
            {
                baslik: varyantSec(site, t("m2b"), ["Teslimat ve lojistik", `${bolgeAdi}'a sevkiyat`, "Nakliye planı"]),
                metin: varyantSec(site, t("m2m"), [
                    `${bolgeAdi} hattına düzenli sevkiyatımız var; bu hem teslimat süresini hem nakliye kalemini düşürüyor.`,
                    `${bolgeAdi} sahasına yakın konumlanma, acil taleplerde öncelikli planlama imkânı sağlıyor.`,
                    `Makine parkımızın ${bolgeAdi} bölgesine mesafesi, plansız duruşlarda hızlı ikame anlamına geliyor.`,
                    `${bolgeAdi} bölgesine aynı anda birden fazla makine gidiyorsa nakliye maliyeti paylaştırılabiliyor.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m3b"), ["Önerilen makine sınıfı", "Sınıf seçimi", "Uygun ekipman"]),
                metin: varyantSec(site, t("m3m"), [
                    `${konuAd} işlerinde çalışma yüksekliği ve erişim geometrisine göre ${urun.ad.toLocaleLowerCase("tr-TR")} veya dengi sınıf değerlendirilir.`,
                    `Bu kapsamda sık tercih edilen sınıflardan biri ${urun.ad.toLocaleLowerCase("tr-TR")}; kesin seçim zemin ve açıklık ölçüsüyle yapılır.`,
                    `${urun.ad} bu iş tipinde yaygın kullanılır, ancak hedef yükseklik ve engel durumuna göre bir alt veya üst sınıfa geçmek gerekebilir.`,
                ]),
            },
            {
                baslik: varyantSec(site, t("m4b"), ["Belge ve mevzuat", "İSG ve evrak", "Yasal uygunluk"]),
                metin: varyantSec(site, t("m4m"), [
                    "Yükseltici platformlar 6331 Sayılı İSG Kanunu kapsamında yıllık periyodik kontrole tabidir; makineler uygunluk raporuyla teslim edilir.",
                    "Teslimat dosyasında periyodik kontrol raporu ve EN 280 uygunluk bilgisi yer alır; şantiye girişinde bu belgeler talep edilir.",
                    "Operatörlü kiralamada MYK yeterlilik belgesi bizim tarafımızdan sağlanır; operatörsüz kiralamada bu sorumluluk işverendedir.",
                ]),
            },
        ],
        sss: [
            {
                soru: varyantSec(site, t("s1q"), [
                    `${bolgeAdi} bölgesinde ${konuKucuk} için teslimat ne kadar sürer?`,
                    `${bolgeAdi}'a makine ne kadar sürede gelir?`,
                    `Bu iş için ${bolgeAdi}'a ne kadar sürede teslimat yapıyorsunuz?`,
                ]),
                cevap: cevapTeslimat(site, `${bSlug}-${hSlug}`),
            },
            {
                soru: varyantSec(site, t("s2q"), [
                    `${bolgeAdi} sahalarında bu iş için hangi makine önerilir?`,
                    `${konuAd} işinde hangi sınıfı seçmeliyim?`,
                    "Doğru makineyi nasıl belirliyorsunuz?",
                ]),
                cevap: kur(site, t("s2a"),
                    [
                        `${bolgeAdi} sahalarında karar zemin ve yükseklikle başlıyor.`,
                        "Seçim üç ölçüye bakıyor: yükseklik, zemin ve erişim açıklığı.",
                        `${konuAd} işlerinde önce ortamı ayırıyoruz.`,
                        "Doğru sınıf sahayı tanımadan belirlenemez.",
                    ],
                    [
                        "Kapalı alanda akülü, engebeli açık sahada dizel 4x4 sınıf gerekiyor.",
                        `Beton ve epoksi zeminde akülü makine yeterliyken, kırmataş veya çamurlu sahada arazi sınıfına geçmek gerekiyor.`,
                        "Hedefin altına park edilebiliyorsa makaslı, arada engel varsa eklemli sınıf uygun oluyor.",
                        "Çalışma yüksekliği platform tabanına yaklaşık 2 metre eklenerek hesaplanıyor.",
                    ],
                    [
                        `${bolgeAdi} için saha fotoğrafı paylaşırsanız daha net öneri veriyoruz.`,
                        "Ölçüleri iletin, uygun sınıfı yazılı teklifte gösterelim.",
                        "Gereksiz büyük makine maliyetinden sizi korumak için sınıfı birlikte daraltıyoruz.",
                        "",
                    ],
                ),
            },
            { soru: "Operatörlü mü operatörsüz mü kiralanabilir?", cevap: cevapOperator(site) },
            {
                soru: varyantSec(site, t("s4q"), [
                    `${bolgeAdi}'a nakliye bedeli ne kadar?`,
                    "Teslimat ücreti fiyata dahil mi?",
                    "Nakliye maliyeti nasıl hesaplanıyor?",
                ]),
                cevap: cevapNakliye(site),
            },
            { soru: varyantSec(site, t("s5q"), ["Kiralama süresi ne kadar olmalı?", "Günlük kiralama mümkün mü?", "Uzun süreli kiralamada avantaj var mı?"]), cevap: cevapSure(site) },
            { soru: varyantSec(site, t("s6q"), ["Periyodik kontrol belgesi veriliyor mu?", "İSG evrakları makineyle geliyor mu?", "Şantiye girişi için belge sağlanıyor mu?"]), cevap: cevapBelge(site) },
        ],
        ilgiliUrun: { baslik: `${urun.ad} Kiralama`, slug: urun.slug },
    };
}

export function bolgeHizmetSayfalari(site: SiteIcerik): BolgeHizmetSayfasi[] {
    const bolgeler = site.bolge.split(",").map((s) => s.trim()).filter(Boolean).slice(0, MAKS_BOLGE);
    const konular = gercekEslesenKonular(site);
    const out: BolgeHizmetSayfasi[] = [];
    let i = 0;
    for (const bolgeAdi of bolgeler) {
        for (const konu of konular) {
            out.push(uret(site, bolgeAdi, konu, i++));
        }
    }
    return out;
}

export function bolgeHizmetSayfasiBul(
    site: SiteIcerik,
    bolgeSlug: string,
    hizmetSlug: string,
): BolgeHizmetSayfasi | undefined {
    return bolgeHizmetSayfalari(site).find((s) => s.bolgeSlug === bolgeSlug && s.hizmetSlug === hizmetSlug);
}
