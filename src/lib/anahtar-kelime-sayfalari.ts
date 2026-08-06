// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~420 canlı sayfa üretir (85+ domain × sayfa/domain).
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
// Anahtar kelime eşleşmeli SEO/blog sayfaları: "İzmir manlift kiralama",
// "İzmir makaslı platform kiralama" gibi gerçek arama terimlerine yakın
// başlıklar. Google'da üst sıralardaki rakip sayfaların ele aldığı konular
// (fiyatı etkileyen faktörler, bölge kapsamı, elektrikli/dizel ayrımı,
// teslimat hızı) referans alınarak — kopyalanmadan, sitenin kendi
// bolge/uzmanlik/telefon verisiyle özgün olarak — üretildi.
import type { SiteIcerik } from "./siteler";
import { cesitle } from "./varyant";
import type { BlogYazisi } from "./blog";
import { blogGorsel } from "./blog";
import { urunKatalogu } from "./urun-katalogu";

// Domain'in hizmet verdiği il — anahtar kelime başlıkları için (bolge alanı
// genelde ilçe/OSB adı taşıyor, il adını host'tan çıkarıyoruz).
const IL_ANAHTARLARI: [string, string][] = [
    ["bolu", "Bolu"], ["bozuyuk", "Bilecik"], ["canakkale", "Çanakkale"], ["kutahya", "Kütahya"],
    ["mugla", "Muğla"], ["eskisehir", "Eskişehir"], ["afyon", "Afyonkarahisar"], ["ankara", "Ankara"],
    ["bilecik", "Bilecik"], ["izmir", "İzmir"], ["denizli", "Denizli"], ["usak", "Uşak"], ["konya", "Konya"],
    ["bandirma", "Balıkesir"], ["aydin", "Aydın"], ["manisa", "Manisa"], ["bursa", "Bursa"],
    ["manlifteskisehir", "Eskişehir"],
];

function ilCikar(host: string): string {
    const normalize = host.replace(/ı/g, "i");
    for (const [anahtar, il] of IL_ANAHTARLARI) {
        if (normalize.includes(anahtar)) return il;
    }
    return "Türkiye";
}

function ilIfade(il: string): string {
    return il === "Türkiye" ? "Türkiye genelinde" : `${il} bölgesinde`;
}

function bolgeIlk(site: SiteIcerik) {
    return site.bolge.split(",")[0].trim();
}

function ilceler(site: SiteIcerik) {
    return site.bolge.split(",").map((s) => s.trim()).filter((s) => s && !/^türkiye/i.test(s));
}

const GORSELLER = [blogGorsel.holTavan, blogGorsel.makinePark, blogGorsel.forkliftDepo, blogGorsel.depo, blogGorsel.celikMontaj, blogGorsel.tesisat] as const;
const GORSEL_ALT = [
    "Sahada makaslı platformla yüksekte çalışma",
    "Makine parkında dikey personel yükseltici",
    "Fabrika deposunda forklift ve makaslı platform",
    "Depo içinde yükseltici platformla erişim",
    "Çelik konstrüksiyon montajında platform ve forklift",
    "Fabrika tesisat montajında makaslı platform",
] as const;

interface Sablon {
    slugTaban: string;
    kategori: BlogYazisi["kategori"];
    baslik: (il: string) => string;
    ozet: (il: string, site: SiteIcerik) => string;
    giris: (il: string, site: SiteIcerik) => string;
    bolumler: (il: string, site: SiteIcerik) => BlogYazisi["bolumler"];
    sss: (il: string, site: SiteIcerik) => { soru: string; cevap: string }[];
}

const SABLONLAR: Sablon[] = [
    {
        slugTaban: "manlift-kiralama",
        kategori: "Ürün Rehberi",
        baslik: (il) => `${il} Manlift Kiralama`,
        ozet: (il, s) => `${il} bölgesinde manlift (yükseltici platform) kiralama; makine sınıfı, kapsanan ilçeler ve teslimat süreci hakkında güncel rehber.`,
        giris: (il, site) => `${ilIfade(il)} manlift kiralama arayan firmalar için doğru makine sınıfı, sahanın erişim geometrisi ve zemin koşuluyla belirlenir. ${site.uzmanlik} kapsamındaki işlerde bu rehber, ilk aramadan yazılı teklife kadar sürece bakıyor.`,
        bolumler: (il, site) => {
            const ilceListesi = ilceler(site);
            return [
                {
                    baslik: `${il} genelinde kapsanan ilçeler`,
                    paragraflar: [
                        ilceListesi.length > 0
                            ? `${ilceListesi.slice(0, -1).join(", ")}${ilceListesi.length > 1 ? " ve " : ""}${ilceListesi[ilceListesi.length - 1]} başta olmak üzere ${il} genelindeki sahalara manlift kiralama hizmeti sunuyoruz.`
                            : `${il} genelindeki sahalara manlift kiralama hizmeti sunuyoruz.`,
                        `Sahanın hangi ilçede olduğu, nakliye süresini ve araç planlamasını belirleyen ilk bilgidir; teklif öncesinde bu bilgi paylaşıldığında sevkiyat günü netleşir.`,
                    ],
                },
                {
                    baslik: "Manlift mi, makaslı platform mu?",
                    paragraflar: [
                        `"Manlift" günlük kullanımda genellikle tüm yükseltici platform ailesini (makaslı, eklemli, teleskopik) kapsayan bir üst kavramdır. ${site.uzmanlik} kapsamındaki işlerde hangi alt sınıfın uygun olduğu, çalışma noktasının erişim geometrisiyle belirlenir.`,
                        "Çalışma noktasının tam altına makine koyabiliyorsanız makaslı, bir engeli aşmanız gerekiyorsa eklemli, açık sahada uzun yatay erişim gerekiyorsa teleskopik sınıf değerlendirilir.",
                    ],
                },
                {
                    baslik: "Kiralama süreci nasıl işler?",
                    paragraflar: [
                        "Çalışma yüksekliği, zemin tipi ve süre bilgisi paylaşıldığında, uygun makine sınıfı ve nakliye planı birlikte netleşir. Operatörlü veya operatörsüz seçenek, ekibin belge durumuna göre belirlenir.",
                        "Kesin bedel ve teslimat tarihi, saha bilgisiyle birlikte yazılı teklifte iletilir.",
                    ],
                },
            ];
        },
        sss: (il, s) => [
            { soru: `${il} genelinde manlift teslimat süresi ne kadar?`, cevap: cesitle(s, "anahta-1", "Araç ve makine uygunluğuna göre değişir; acil ihtiyaçlarda aynı gün veya ertesi gün teslimat değerlendirilir.") },
            { soru: "Manlift ile makaslı platform aynı şey mi?", cevap: cesitle(s, "anahta-2", "Manlift genellikle tüm yükseltici platform ailesini kapsayan genel bir terimdir; makaslı platform bunun bir alt sınıfıdır.") },
            { soru: "Operatörlü kiralama mümkün mü?", cevap: cesitle(s, "anahta-3", "Evet; operatörlü kiralamada yeterlilik belgesi ve tarih uygunluğu teklif aşamasında doğrulanır.") },
        ],
    },
    {
        slugTaban: "makasli-platform-kiralama-rehberi",
        kategori: "Ürün Rehberi",
        baslik: (il) => `${il} Makaslı Platform Kiralama`,
        ozet: (il, s) => `${il} bölgesinde makaslı platform kiralama: hangi metraj sınıfı seçilir, zemin ve kapasite nasıl değerlendirilir, kiralama süreci nasıl işler?`,
        giris: (il, s) => `${ilIfade(il)} makaslı platform kiralamak, çoğu iç mekân ve düz zeminli açık saha işinde ilk tercihtir. Bu rehber, doğru metraj sınıfını seçmek için bakılması gereken noktaları özetliyor.`,
        bolumler: (il, site) => [
            {
                baslik: "Metraj sınıfı nasıl belirlenir?",
                paragraflar: [
                    "Katalogdaki değer platform (sepet zemini) yüksekliğidir; gerçek çalışma yüksekliği bunun yaklaşık 2 metre üzeridir. Çalışma noktasının yüksekliği ölçülüp buna göre sınıf seçilir.",
                    `${site.uzmanlik} kapsamındaki işlerde 8-12 metre sınıfı çoğu iç mekân ihtiyacını karşılar; 14 metre ve üzeri sınıflar yüksek sanayi holü ve depo işlerinde tercih edilir.`,
                ],
            },
            {
                baslik: `${il} sahalarında zemin ve erişim`,
                paragraflar: [
                    `${bolgeIlk(site)} ve çevresindeki sahalarda zemin düz ve taşıyıcıysa standart lastikli model yeterlidir; düzensiz veya açık arazi zeminlerde arazi tipi (4x4) model değerlendirilir.`,
                    "Kapı ve geçit genişliği, sepet ölçüsüyle karşılaştırılarak makinenin sahaya girip giremeyeceği önceden teyit edilir.",
                ],
            },
            {
                baslik: "Elektrikli mi, dizel mi?",
                paragraflar: [
                    "İç mekânda (AVM, fabrika içi, hastane) elektrikli modeller sıfır emisyon ve düşük gürültüyle tercih edilir; açık sahada dizel modeller daha güçlü performans sağlar.",
                    "Şarj süresi ve saha elektrik altyapısı, elektrikli model tercih edilecekse önceden değerlendirilir.",
                ],
            },
        ],
        sss: (il, s) => [
            { soru: `${il}'de makaslı platform kiralama fiyatını ne belirler?`, cevap: cesitle(s, "anahta-4", "Metraj sınıfı, kiralama süresi, nakliye mesafesi ve operatör tercihi fiyatı belirleyen ana kalemlerdir; kesin bedel yazılı teklifte netleşir.") },
            { soru: "Hangi metraj en çok tercih ediliyor?", cevap: cesitle(s, "anahta-5", "Sahanın ihtiyacına göre değişir; iç mekân işlerinde 8-12 metre, yüksek sanayi hollerinde 14 metre ve üzeri sınıflar daha sık tercih edilir.") },
            { soru: "Aynı gün teslimat mümkün mü?", cevap: cesitle(s, "anahta-6", "Araç ve makine uygunluğuna göre değerlendirilir; acil ihtiyaçlarda öncelikli planlama yapılabilir.") },
        ],
    },
    {
        slugTaban: "manlift-kiralama-fiyatlarini-etkileyen-faktorler",
        kategori: "Maliyet",
        baslik: (il) => `${il} Manlift Kiralama Fiyatları Neye Göre Değişir?`,
        ozet: (il, s) => `${il} bölgesinde manlift ve platform kiralama bedelini belirleyen kalemler: makine sınıfı, süre, nakliye ve operatör tercihi.`,
        giris: (il, s) => `${ilIfade(il)} manlift kiralama fiyatı tek bir sayı değildir; makine sınıfı, kiralama süresi, nakliye mesafesi ve operatör tercihi birlikte bedeli belirler.`,
        bolumler: (il, site) => [
            {
                baslik: "Makine sınıfı ve süre",
                paragraflar: [
                    "Erişim yüksekliği arttıkça günlük kiralama bedeli de artar; aynı sınıfta günlük, haftalık ve aylık kiralamada birim maliyet süre uzadıkça genellikle avantajlı hale gelir.",
                    `${site.uzmanlik} kapsamındaki kısa süreli işlerde günlük/haftalık, tekrarlayan ihtiyaçlarda aylık kiralama değerlendirilir.`,
                ],
            },
            {
                baslik: `${il} içinde nakliye mesafesi`,
                paragraflar: [
                    `Sahanın ${bolgeIlk(site)} veya ${il} genelindeki konumuna göre nakliye bedeli değişir; bu kalem yazılı teklifte her zaman ayrı satır olarak gösterilir, fiyata gizli şekilde eklenmez.`,
                    "Merkeze yakın sahalarda nakliye süresi ve bedeli genellikle daha düşüktür.",
                ],
            },
            {
                baslik: "Operatör ve ek hizmetler",
                paragraflar: [
                    "Operatörlü kiralamada operatör ücreti günlük bedele eklenir; operatörsüz kiralamada kullanıcının SRC/G sınıfı belgeye sahip olması gerekir.",
                    "Hafta sonu teslimat, uzatılmış süre veya ek güvenlik ekipmanı talepleri de ayrı kalem olarak değerlendirilebilir.",
                ],
            },
        ],
        sss: (il, s) => [
            { soru: "En ucuz makine her zaman doğru tercih mi?", cevap: `Hayır; ${il} sahasının ihtiyacını karşılamayan bir makine iş gecikmesine yol açabilir, bu da toplamda daha maliyetli olabilir.` },
            { soru: "Fiyat teklifi ne kadar sürede geliyor?", cevap: cesitle(s, "anahta-7", "Saha bilgisi (yükseklik, zemin, süre, konum) paylaşıldığında yazılı teklif kısa sürede iletilir.") },
            { soru: "Uzun süreli kiralamada indirim var mı?", cevap: cesitle(s, "anahta-8", "Genellikle evet; kesin oran talep edilen süreye göre teklifte netleşir.") },
        ],
    },
    {
        slugTaban: "manlift-kiralama-nasil-yapilir",
        kategori: "Karşılaştırma",
        baslik: (il) => `${il}'de Manlift Kiralama Nasıl Yapılır?`,
        ozet: (il, s) => `${il} bölgesinde manlift kiralama adım adım süreç: saha bilgisi, makine seçimi, teklif ve teslimat.`,
        giris: (il, s) => `${ilIfade(il)} manlift kiralamak isteyenler için süreç dört adımda özetlenebilir: saha bilgisi paylaşımı, makine sınıfı seçimi, yazılı teklif ve teslimat.`,
        bolumler: (il, site) => [
            {
                baslik: "1. Saha bilgisini paylaşın",
                paragraflar: [
                    "Çalışma yüksekliği, zemin tipi, kapı/geçit ölçüleri ve süre bilgisi paylaşıldığında, uygun makine sınıfı hızlıca belirlenir. Fotoğraf paylaşımı, sahanın erişim geometrisini anlamayı kolaylaştırır.",
                ],
            },
            {
                baslik: "2. Makine sınıfı ve model seçilir",
                paragraflar: [
                    `${site.uzmanlik} kapsamındaki işin türüne göre makaslı, eklemli, teleskopik platform veya forklift arasından uygun sınıf önerilir; elektrikli/dizel tercihi saha koşuluna göre netleşir.`,
                ],
            },
            {
                baslik: "3. Yazılı teklif alınır",
                paragraflar: [
                    "Makine sınıfı, süre, nakliye ve operatör kalemlerini içeren yazılı teklif hazırlanır; onay sonrası teslimat tarihi netleşir.",
                ],
            },
            {
                baslik: `4. ${il} sahasına teslimat`,
                paragraflar: [
                    "Planlanan gün ve saatte makine sahaya ulaştırılır; periyodik kontrol belgesi ve kullanım kılavuzu teslimatla birlikte paylaşılır.",
                ],
            },
        ],
        sss: (il, s) => [
            { soru: "Saha ziyareti şart mı?", cevap: `Çoğu durumda değil; ${il} sahasının fotoğraf ve ölçüleri paylaşıldığında uzaktan da doğru sınıf belirlenebilir.` },
            { soru: "Kiralama için minimum süre var mı?", cevap: cesitle(s, "anahta-9", "Günlük kiralama seçenekleri mevcuttur; asgari süre makine sınıfına göre teklif aşamasında belirtilir.") },
            { soru: "Teklif bağlayıcı mı?", cevap: cesitle(s, "anahta-10", "Yazılı teklif, belirtilen saha bilgisi ve süre için geçerlidir; saha koşulu değişirse teklif güncellenir.") },
        ],
    },
    {
        slugTaban: "forklift-kiralama-rehberi",
        kategori: "Ürün Rehberi",
        baslik: (il) => `${il} Forklift Kiralama`,
        ozet: (il, s) => `${il} bölgesinde forklift kiralama: kapasite sınıfı, elektrikli/dizel seçimi ve saha koşuluna göre doğru model.`,
        giris: (il, site) => `${ilIfade(il)} forklift kiralamak isteyen ${site.uzmanlik.toLocaleLowerCase("tr-TR")} kapsamındaki firmalar için kapasite ve yakıt tipi seçimi, sahanın günlük yük profiline göre belirlenir.`,
        bolumler: (il, site) => [
            {
                baslik: "Kapasite sınıfı nasıl seçilir?",
                paragraflar: [
                    "1.5-3 ton sınıfı depo içi standart istifleme işlerinde, 3-5 ton ve üzeri sınıflar ağır yük ve açık saha işlerinde tercih edilir. Yük merkezi (kaldırılacak yükün çatal ucundan uzaklığı) kapasiteyi doğrudan etkiler.",
                    `${bolgeIlk(site)} ve çevresindeki depo/üretim tesislerinde en sık talep edilen sınıf, günlük yük profiline göre değişir.`,
                ],
            },
            {
                baslik: "Elektrikli mi, dizel mi?",
                paragraflar: [
                    "Kapalı alanda (depo, üretim hattı, soğuk hava deposu) elektrikli forklift emisyonsuz ve sessiz çalışır; açık saha ve yoğun vardiyada dizel model daha yüksek performans sağlar.",
                    "LPG modeller, iç ve dış mekân arasında geçiş yapan işlerde ara bir seçenek olarak değerlendirilir.",
                ],
            },
            {
                baslik: "Ataşman ve özel ihtiyaçlar",
                paragraflar: [
                    "Sideshift, klemp veya uzun çatal gibi ataşmanlar, yükün tipine göre kapasiteyi ve kullanım kolaylığını etkiler; ihtiyaç teklif aşamasında birlikte değerlendirilir.",
                ],
            },
        ],
        sss: (il, s) => [
            { soru: `${il}'de hangi forklift kapasitesi en çok kiralanıyor?`, cevap: cesitle(s, "anahta-11", "Sahanın yük profiline göre değişir; depo içi işlerde 1,5-3 ton, ağır sanayi ve açık saha işlerinde 3-5 ton ve üzeri sınıflar daha sık tercih edilir.") },
            { soru: "Forklift operatörlü mü kiralanır?", cevap: cesitle(s, "anahta-12", "Hem operatörlü hem operatörsüz seçenek sunulur; operatörsüz kiralamada kullanıcının forklift operatör belgesine sahip olması gerekir.") },
            { soru: "Dolgu mu havalı lastik mi tercih edilmeli?", cevap: cesitle(s, "anahta-13", "Delinme riski olan sahalarda dolgu (solid) lastik, düz beton zeminlerde havalı lastik değerlendirilir.") },
        ],
    },
    {
        slugTaban: "eklemli-platform-kiralama-rehberi",
        kategori: "Ürün Rehberi",
        baslik: (il) => `${il} Eklemli Platform Kiralama`,
        ozet: (il, s) => `${il} bölgesinde eklemli (akrobat) platform kiralama; engel aşan erişim gerektiren işlerde doğru sınıf seçimi.`,
        giris: (il, s) => `${ilIfade(il)} eklemli platform kiralamak, çalışma noktasının önünde bir engel (kolon, boru hattı, çatı çıkıntısı) olduğunda devreye giren doğru tercihtir.`,
        bolumler: (il, site) => [
            {
                baslik: "Eklemli platform ne zaman seçilir?",
                paragraflar: [
                    "Bomun birden fazla noktadan kırılan yapısı, makineyi engelin yanına konumlandırıp sepeti engelin üzerinden veya arkasına ulaştırmaya izin verir. Düz bomlu makinelerin ulaşamadığı noktalara bu sınıfla erişilir.",
                    `${site.uzmanlik} kapsamındaki cephe, çatı arkası ve boru köprüsü işlerinde eklemli platform tipik tercihtir.`,
                ],
            },
            {
                baslik: "İç mekân ve açık saha modelleri",
                paragraflar: [
                    `${bolgeIlk(site)} bölgesindeki kapalı alan işlerinde elektrikli eklemli modeller sıfır emisyon ve iz bırakmayan lastikleriyle tercih edilir; açık saha ve şantiye işlerinde dizel modellerin 4x4 çekiş gücü öne çıkar.`,
                ],
            },
            {
                baslik: "Yatay erişimi doğru okumak",
                paragraflar: [
                    "Maksimum yatay erişim genellikle orta yükseklikte elde edilir ve sepet yükü arttıkça düşebilir; bu yüzden en zorlu nokta (en yüksek + en uzak + en ağır) baz alınarak sınıf seçilir.",
                ],
            },
        ],
        sss: (il, s) => [
            { soru: "Eklemli platform ile teleskopik platform farkı nedir?", cevap: cesitle(s, "anahta-14", "Eklemli bomun kırılan yapısı engel aşmaya, teleskopik bomun düz yapısı ise aynı yükseklikte daha uzun yatay erişime uygundur.") },
            { soru: `${il}'de iç mekânda eklemli platform kullanılır mı?`, cevap: cesitle(s, "anahta-15", "Evet; elektrikli eklemli modeller sıfır emisyon ve iz bırakmayan lastikle kapalı alanlarda kullanılır.") },
            { soru: "Eklemli platform kaç kişilik sepete sahip?", cevap: cesitle(s, "anahta-16", "Modele göre değişir; kesin kapasite ve sepet ölçüsü teklif aşamasında paylaşılır.") },
        ],
    },
];

export function anahtarKelimeSayfalari(site: SiteIcerik): BlogYazisi[] {
    const il = ilCikar(site.host);
    return SABLONLAR.map((sablon, i) => {
        const gorselIndex = i % GORSELLER.length;
        return {
            slug: sablon.slugTaban,
            kategori: sablon.kategori,
            baslik: sablon.baslik(il),
            ozet: sablon.ozet(il, site),
            gorsel: GORSELLER[gorselIndex],
            gorselAlt: GORSEL_ALT[gorselIndex],
            tarih: "2026-08-06",
            okuma: 5,
            giris: sablon.giris(il, site),
            bolumler: sablon.bolumler(il, site),
            sss: sablon.sss(il, site),
            ilgiliUrun: { baslik: `${urunKatalogu[i % urunKatalogu.length].ad} Kiralama`, slug: urunKatalogu[i % urunKatalogu.length].slug },
        };
    });
}
