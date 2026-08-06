// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~595 canlı sayfa üretir (85+ domain × sayfa/domain).
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
// Bölge sayfaları: "Hizmet Bölgelerimiz" rozetlerinin her biri gerçek,
// içerikli bir landing page.
//
// KOPYA İÇERİK KURALI: Bu şablon 85 domainde × ~7 bölgede çalışır (~595 sayfa).
// Önceden tüm metinler sabitti ve ölçüm 8-gram örtüşmesini %56.7 gösterdi —
// yani sayfalar birbirinin kopyasıydı. Artık her metin alanı varyant havuzundan
// deterministik olarak seçilir (bkz. varyant.ts) ve varyantların içine bölge/
// uzmanlık verisi dokunur. Yeni metin eklerken TEK bir sabit cümle bırakmayın;
// her zaman en az 4-6 varyantlı bir havuz kullanın.
import type { SiteIcerik } from "./siteler";
import { urunKatalogu } from "./urun-katalogu";
import {
    varyantSec, uzmanlikIfade,
    cevapOperator, cevapNakliye, cevapSure, cevapBelge, cevapSinif, cevapTeslimat,
} from "./varyant";

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

/** Varyant tuzu bölge adını da içerir — aynı domainin farklı bölgeleri de farklılaşsın. */
function tuz(bolgeAdi: string, alan: string) {
    return `bolge-${slugla(bolgeAdi)}-${alan}`;
}

export function bolgeSayfalari(site: SiteIcerik): BolgeSayfasi[] {
    const bolgeler = site.bolge.split(",").map((s) => s.trim()).filter(Boolean);
    return bolgeler.map((bolgeAdi, i) => {
        const hizmet1 = site.hizmetler[i % site.hizmetler.length] ?? site.uzmanlik;
        const hizmet2 = site.hizmetler[(i + 1) % site.hizmetler.length] ?? site.uzmanlik;
        const urunSlug = URUN_DONGUSU[i % URUN_DONGUSU.length];
        const urun = urunKatalogu.find((u) => u.slug === urunSlug) ?? urunKatalogu[0];
        const uzm = uzmanlikIfade(site);
        const t = (alan: string) => tuz(bolgeAdi, alan);

        return {
            slug: slugla(bolgeAdi),
            bolgeAdi,
            baslik: varyantSec(site, t("baslik"), [
                `${bolgeAdi} Platform ve Forklift Kiralama`,
                `${bolgeAdi} Bölgesi Kiralık Platform ve Forklift`,
                `${bolgeAdi} Yüksekte Çalışma Platformu Kiralama`,
                `Kiralık Platform ve Forklift — ${bolgeAdi}`,
                `${bolgeAdi} İçin Platform, Manlift ve Forklift Kiralama`,
            ]),
            aciklama: varyantSec(site, t("aciklama"), [
                `${bolgeAdi} bölgesinde makaslı platform, eklemli platform ve forklift kiralama; ${uzm} kapsamında saha bilgisine göre doğru makine sınıfı ve yazılı teklif.`,
                `${bolgeAdi} sahalarına makaslı, eklemli ve teleskopik platform ile forklift kiralıyoruz. ${site.telefonGosterim} numarasından saha bilgisi paylaşın, uygun sınıfı birlikte belirleyelim.`,
                `${uzm} işlerinde ${bolgeAdi} bölgesine platform ve forklift kiralama. Çalışma yüksekliği, zemin ve süre bilgisiyle yazılı teklif hazırlıyoruz.`,
                `${bolgeAdi} ve çevresine kiralık yükseltici platform: makaslı, eklemli, teleskopik sınıflar ve forklift. Nakliye planı ve İSG evrakları dahil organize edilir.`,
                `${bolgeAdi} bölgesindeki firmalara ${uzm} kapsamında platform ve forklift kiralama hizmeti — doğru sınıf seçimi ve şeffaf yazılı teklif.`,
            ]),
            h1: varyantSec(site, t("h1"), [
                `${bolgeAdi} Bölgesinde Platform ve Forklift Kiralama`,
                `${bolgeAdi} İçin Kiralık Yükseltici Platform ve Forklift`,
                `${bolgeAdi} Sahalarına Platform, Manlift ve Forklift Kiralama`,
                `${bolgeAdi} Bölgesi Yüksekte Çalışma Ekipmanı Kiralama`,
            ]),
            giris: varyantSec(site, t("giris"), [
                `${bolgeAdi} bölgesindeki firmalara ${uzm} kapsamında makaslı platform, eklemli platform, teleskopik platform ve forklift kiralama hizmeti sunuyoruz. Saha bilgisi paylaşıldığında doğru makine sınıfı ve nakliye planı birlikte netleştirilir.`,
                `${bolgeAdi} sahalarında en sık karşılaştığımız soru "hangi makine yeter?" oluyor. Cevap üç veriye bağlı: ulaşılacak yükseklik, zeminin taşıma kapasitesi ve makinenin gireceği açıklığın ölçüsü. Bu üçünü paylaştığınızda sınıfı doğru belirliyor, gereksiz büyük makine maliyetinden sizi koruyoruz.`,
                `${uzm} işleri ${bolgeAdi} bölgesinde farklı saha koşulları getiriyor; kapalı üretim alanında akülü makine, açık ve engebeli sahada dizel 4x4 sınıf gerekiyor. Makine seçimini bu ayrımla başlatıyor, ardından yükseklik ve kapasiteye göre daralttıyoruz.`,
                `${bolgeAdi} bölgesine platform ve forklift kiralarken önce sahayı anlamaya çalışıyoruz: zemin beton mu arazi mi, çalışma kapalı alanda mı, makine hangi kapıdan girecek, kaç kişi ve ne kadar malzeme yükseğe çıkacak. Bu sorular doğru sınıfı ve gerçekçi bir bütçeyi birlikte belirliyor.`,
                `${bolgeAdi} ve çevresindeki projelerde makaslı, eklemli, teleskopik platform ve forklift filomuzla çalışıyoruz. ${uzm} deneyimimizle, iş tanımınıza en uygun makineyi ve nakliye planını yazılı teklifte netleştiriyoruz.`,
            ]),
            maddeler: [
                {
                    baslik: varyantSec(site, t("m1b"), [
                        "Bölgeye yakın hizmet",
                        "Teslimat süresi ve yakınlık",
                        "Bölgesel konumlanma avantajı",
                        "Hızlı sevkiyat",
                    ]),
                    metin: varyantSec(site, t("m1m"), [
                        `${bolgeAdi} sahasına yakın konumlanma teslimat süresini kısaltır; acil ihtiyaçlarda öncelikli planlama yapılabilir.`,
                        `${bolgeAdi} hattına düzenli sevkiyatımız olduğu için hem teslimat süresi kısalıyor hem de nakliye maliyeti düşüyor. Acil taleplerde aynı gün planlama değerlendirilebilir.`,
                        `Makine parkımızın ${bolgeAdi} bölgesine mesafesi, plansız duruşlarda hızlı ikame imkânı sağlar. Bu, süreye duyarlı işlerde belirleyici bir farktır.`,
                        `${bolgeAdi} bölgesine yakınlık iki şeyi getirir: kısa teslimat süresi ve düşük nakliye kalemi. Aynı bölgeye eşzamanlı birden fazla makine gidiyorsa nakliye paylaştırılabilir.`,
                    ]),
                },
                {
                    baslik: hizmet1.length > 60
                        ? varyantSec(site, t("m2b"), ["Saha tipi işler", "Bölgedeki yaygın iş tipi", "Sık karşılaşılan uygulamalar"])
                        : hizmet1,
                    metin: hizmet1.length > 60
                        ? hizmet1
                        : varyantSec(site, t("m2m"), [
                            `${bolgeAdi} bölgesinde sık karşılaşılan iş tipi: ${hizmet1.toLocaleLowerCase("tr-TR")}.`,
                            `${bolgeAdi} sahalarında bu kapsamda düzenli çalışıyoruz: ${hizmet1.toLocaleLowerCase("tr-TR")}. Makine sınıfı işin erişim geometrisine göre belirlenir.`,
                            `Bölgede en çok talep gören uygulamalardan biri ${hizmet1.toLocaleLowerCase("tr-TR")}. Bu tip işlerde doğru sınıf seçimi hem süreyi hem maliyeti belirgin şekilde etkiler.`,
                        ]),
                },
                {
                    baslik: hizmet2.length > 60
                        ? varyantSec(site, t("m3b"), ["Diğer saha işleri", "İkincil uygulama alanı", "Bölgedeki diğer işler"])
                        : hizmet2,
                    metin: hizmet2.length > 60
                        ? hizmet2
                        : varyantSec(site, t("m3m"), [
                            `${bolgeAdi} bölgesinde değerlendirilen bir diğer iş tipi: ${hizmet2.toLocaleLowerCase("tr-TR")}.`,
                            `${hizmet2} kapsamındaki talepler de ${bolgeAdi} bölgesinde düzenli olarak karşılanıyor.`,
                            `Bölgede ayrıca ${hizmet2.toLocaleLowerCase("tr-TR")} işleri için makine sağlıyoruz; saha koşuluna göre akülü veya dizel sınıf öneriyoruz.`,
                        ]),
                },
                {
                    baslik: varyantSec(site, t("m4b"), [
                        "Yazılı teklif süreci",
                        "Teklif nasıl hazırlanır",
                        "Fiyatlandırma yaklaşımımız",
                        "Şeffaf teklif",
                    ]),
                    metin: varyantSec(site, t("m4m"), [
                        "Çalışma yüksekliği, zemin, erişim ve süre bilgisi paylaşıldığında uygun makine sınıfı ve kesin bedel yazılı teklifte netleşir.",
                        "Telefonda tahmini rakam vermek yerine saha bilgisiyle yazılı teklif hazırlıyoruz; nakliye, operatör ve süre kalemleri ayrı ayrı görünür, sürpriz maliyet çıkmaz.",
                        "Teklif dört veriye dayanır: yükseklik, zemin tipi, erişim ölçüleri ve kiralama süresi. Bunlar netleştiğinde makine sınıfı ve bedel kesinleşir, teklifi yazılı iletiriz.",
                        "Fiyatı belirleyen kalemleri ayrıştırarak gösteriyoruz — makine sınıfı, süre, nakliye ve operatör tercihi. Böylece hangi kalemde tasarruf mümkün olduğunu siz de görebilirsiniz.",
                    ]),
                },
            ],
            sss: [
                {
                    soru: varyantSec(site, t("s1q"), [
                        `${bolgeAdi} bölgesine teslimat süresi ne kadar?`,
                        `${bolgeAdi} için makine ne kadar sürede sahada olur?`,
                        `${bolgeAdi} bölgesine ne kadar sürede teslim edebiliyorsunuz?`,
                    ]),
                    cevap: cevapTeslimat(site, slugla(bolgeAdi)),
                },
                {
                    soru: varyantSec(site, t("s2q"), [
                        `${bolgeAdi} sahasında hangi makine sınıfı önerilir?`,
                        `${bolgeAdi} için hangi platformu seçmeliyim?`,
                        `${bolgeAdi} bölgesindeki işlerde hangi sınıf uygun olur?`,
                    ]),
                    cevap: cevapSinif(site, slugla(bolgeAdi)),
                },
                {
                    soru: varyantSec(site, t("s3q"), [
                        "Operatörlü mü operatörsüz mü kiralanabilir?",
                        "Makineyi kendi personelimiz kullanabilir mi?",
                        "Operatör de sağlıyor musunuz?",
                    ]),
                    cevap: cevapOperator(site),
                },
                {
                    soru: varyantSec(site, t("s4q"), [
                        "Nakliye bedeli fiyata dahil mi?",
                        "Teslimat ücreti ayrıca mı alınıyor?",
                        "Nakliye maliyeti nasıl hesaplanıyor?",
                    ]),
                    cevap: cevapNakliye(site),
                },
                {
                    soru: varyantSec(site, t("s5q"), [
                        "Kiralama süresi ne kadar olmalı?",
                        "Günlük kiralama yapıyor musunuz?",
                        "Minimum kiralama süresi var mı?",
                    ]),
                    cevap: cevapSure(site),
                },
                {
                    soru: varyantSec(site, t("s6q"), [
                        "Periyodik kontrol belgesi veriliyor mu?",
                        "Makinenin İSG belgeleri hazır mı?",
                        "Şantiye girişi için gereken evraklar sağlanıyor mu?",
                    ]),
                    cevap: cevapBelge(site),
                },
            ],
            ilgiliUrun: { baslik: `${urun.ad} Kiralama`, slug: urun.slug },
        };
    });
}

export function bolgeSayfasiBul(site: SiteIcerik, slug: string): BolgeSayfasi | undefined {
    return bolgeSayfalari(site).find((b) => b.slug === slug);
}
