// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~595 canlı sayfa üretir (7 marka × 85 domain).
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
//
// MARKA SAYFALARI
//
// ⚠️ BU SAYFALAR BAYİLİK/DİSTRİBÜTÖRLÜK SAYFASI DEĞİLDİR.
// Yalnızca KİRALADIĞIMIZ kendi makinelerimizi tanıtırlar. Marka hakkında
// sadece genel ve doğrulanabilir bilgi (menşe, segment, ürün ailesi karakteri)
// yazılır. "Yetkili bayi", "distribütör", "resmi temsilci" gibi ifadeler
// KULLANILAMAZ — bu hem yanlış hem hukuki risk taşır.
//
// Teknik künyeler src/lib/filo.ts'ten birebir gelir; elle rakam yazılmaz.
// Filoda olmayan bir makine buraya eklenemez.

import type { SiteIcerik } from "./siteler";
import { FILO, markaMakineleri, type MarkaAdi, type FiloMakinesi } from "./filo";
import { varyantSec, kur, ilkBolge, uzmanlikIfade, cevapOperator, cevapBelge, cevapSure } from "./varyant";

export interface MarkaProfili {
    slug: string;
    marka: MarkaAdi;
    mense: string;
    segment: string;
    /** Markanın mühendislik karakteri — genel, doğrulanabilir bilgi. */
    karakter: string;
}

/**
 * Marka profilleri — yalnızca genel, doğrulanabilir bilgi.
 * Satış iddiası, bayilik iması veya doğrulanmamış rakam İÇERMEZ.
 */
export const MARKA_PROFILLERI: MarkaProfili[] = [
    {
        slug: "dingli-platform-kiralama",
        marka: "Dingli",
        mense: "Çin (Zhejiang)",
        segment: "Akülü makaslı platform ve ağır hizmet teleskopik bom",
        karakter: "Dingli (Zhejiang Dingli Machinery), yükseltici çalışma platformu üretiminde geniş bir metraj yelpazesi sunar. Ürün gamının ağırlık merkezi akülü makaslı platformlardır; JCPT serisi 6 metre sınıfından 16 metre sınıfına kadar kesintisiz bir aralık kapsar. Markanın İtalya'daki AR&D merkezinde geliştirilen BT serisi teleskopik bomları ise 40 metre üzeri sınıfta konumlanır. Mühendislik karakterinde iki eğilim öne çıkar: dar şase ölçüleriyle iç mekan uyumluluğu ve AC motorlu tahrik sistemlerine geçiş.",
    },
    {
        slug: "sinoboom-platform-kiralama",
        marka: "Sinoboom",
        mense: "Çin (Hunan)",
        segment: "Akülü makaslı ve akülü eklemli platform",
        karakter: "Sinoboom, ürün gamı makaslı ve bom tipi platformlardan oluşan bir üreticidir. Marka özellikle akülü (elektrikli) bom sınıfına yaptığı yatırımla uluslararası kiralama filolarında yaygınlaşmıştır. GTJZ serisi makaslı platformlar 6-16 metre bandını kapsar. Mühendislik yaklaşımında AC motorlu tahrik ve dar şase ölçüleri belirgindir; bu ikisi kapalı alan çalışmalarında doğrudan avantaja dönüşür.",
    },
    {
        slug: "zoomlion-platform-kiralama",
        marka: "Zoomlion",
        mense: "Çin (Changsha)",
        segment: "Akülü makaslı platform — geniş metraj yelpazesi",
        karakter: "Zoomlion, inşaat makinesi üretiminde geniş bir ürün yelpazesine sahip bir üreticidir. Yükseltici platform segmentinde ZS serisi akülü makaslı platformlarla öne çıkar; seri 6 metre sınıfından 16 metre sınıfına kadar kesintisiz metraj sunar. Bu süreklilik kiralama filoları için pratik bir avantajdır: aynı marka içinde her iş yüksekliğine karşılık gelen bir model bulunduğu için operatör eğitimi ve yedek parça yönetimi sadeleşir.",
    },
    {
        slug: "haulotte-platform-kiralama",
        marka: "Haulotte",
        mense: "Fransa",
        segment: "Arazi tipi eklemli bom ve dikey mast platform",
        karakter: "Haulotte, Avrupa menşeli köklü bir yükseltici platform üreticisidir. Ürün gamı makaslı, eklemli, teleskopik ve dikey mast platformlarını kapsar. Markanın ayırt edici mühendislik özellikleri arasında Activ'Shield Bar sıkışma önleme sistemi ve 4 tekerlekten yönlendirme (yengeç yürüyüşü) kabiliyeti sayılabilir. Arazi tipi eklemli bom sınıfında rüzgârlı ve engebeli sahalardaki stabilitesiyle bilinir.",
    },
    {
        slug: "jlg-platform-kiralama",
        marka: "JLG",
        mense: "ABD",
        segment: "Ultra yüksek teleskopik bom",
        karakter: "JLG Industries, yükseltici çalışma platformu sektörünün kurucu markalarından biridir. Ürün gamı makaslı platformlardan 60 metre üzeri ultra teleskopik bomlara uzanır. Ultra Boom serisi, endüstriyel dev projelerde (tersane, silo, çimento tesisi) yüksek platform kapasitesiyle birlikte 40 metre üzeri erişim gerektiren işlerde konumlanır. SkyGuard optik sıkışma önleme ve dual-capacity yük yönetimi markanın belirgin teknik yaklaşımlarıdır.",
    },
    {
        slug: "genie-platform-kiralama",
        marka: "Genie",
        mense: "ABD",
        segment: "Arazi tipi eklemli bom ve makaslı platform",
        karakter: "Genie (Terex AWP), yükseltici platform sektörünün yerleşik markalarından biridir. Ürün gamı makaslı, eklemli ve teleskopik platformları kapsar. Z serisi eklemli bomlar, salınımlı aks ve pozitif çekiş kontrolü ile çamurlu ve engebeli şantiye koşullarında çalışacak şekilde tasarlanmıştır. Fast Mast hızlı iniş-kalkış sistemi markanın verimlilik odaklı yaklaşımının bir örneğidir.",
    },
    {
        slug: "manitou-platform-kiralama",
        marka: "Manitou",
        mense: "Fransa",
        segment: "Kompakt dikey mast platform ve telehandler",
        karakter: "Manitou, teleskopik yükleyici (telehandler) ve yükseltici platform üretiminde köklü bir Fransız üreticidir. VJR serisi dikey mast platformlar, 1 metrenin altındaki şase genişliği ve döner kule kabiliyetiyle dar koridor ve hassas zeminli iç mekan işleri için konumlanır. Marka, kompakt makinelerde manevra kabiliyeti ve hassas oransal kontrol ile bilinir.",
    },
];

/** Marka karakterini domainin kendi saha bağlamına bağlayan ek cümle. */
function markaBaglami(site: SiteIcerik, profil: MarkaProfili, makineler: FiloMakinesi[]): string {
    const bolge = ilkBolge(site);
    const uzm = uzmanlikIfade(site);
    const akulu = makineler.filter((m) => m.gucTipi === "akulu").length;
    const dizel = makineler.length - akulu;
    return kur(site, `marka-baglam-${profil.slug}`,
        [
            `${bolge} bölgesindeki işlerde bu markanın filomuzdaki payı belirgin.`,
            `${bolge} sahalarına en çok gönderdiğimiz makineler arasında bu marka da var.`,
            `${uzm} kapsamındaki taleplerde bu markanın modelleri düzenli olarak devreye giriyor.`,
            `Filomuzda bu markanın kapsadığı metraj aralığı ${bolge} taleplerinin önemli bir kısmını karşılıyor.`,
        ],
        akulu > 0 && dizel > 0
            ? [`Bu markadan filomuzda ${akulu} akülü ve ${dizel} dizel/hibrit model bulunuyor; ilki kapalı üretim alanları, ikincisi açık ve engebeli sahalar için.`]
            : akulu > 0
                ? [`Bu markadan filomuzdaki ${akulu} modelin tamamı akülü; kapalı üretim alanı, depo ve ticari bina işlerinde emisyon kısıtı olmadan çalışıyorlar.`]
                : [`Bu markadan filomuzdaki modeller dizel/hibrit güç grubuna sahip; açık saha ve engebeli arazi işleri için konumlanıyorlar.`],
        [
            "Hangi modelin işinize uyduğunu saha bilgisiyle birlikte belirliyoruz.",
            `${bolge} için müsaitliği tarih verdiğinizde teyit ediyoruz.`,
            "İş tanımınızı paylaşın, uygun sınıfı karşılaştırmalı gösterelim.",
            "",
        ],
    );
}

export interface MarkaSayfasi {
    slug: string;
    marka: MarkaAdi;
    profil: MarkaProfili;
    makineler: FiloMakinesi[];
    baslik: string;
    aciklama: string;
    h1: string;
    giris: string;
    baglam: string;
    sss: { soru: string; cevap: string }[];
}

export function markaProfilBul(slug: string): MarkaProfili | undefined {
    return MARKA_PROFILLERI.find((m) => m.slug === slug);
}

/** Filoda gerçekten makinesi olan markalar (boş marka sayfası açılmaz). */
export function aktifMarkalar(): MarkaProfili[] {
    return MARKA_PROFILLERI.filter((p) => markaMakineleri(p.marka).length > 0);
}

function metrajAraligi(makineler: FiloMakinesi[]): string {
    const y = makineler.map((m) => m.yukseklik).sort((a, b) => a - b);
    if (y.length === 1) return `${y[0].toFixed(2)} m`;
    return `${y[0].toFixed(2)} m – ${y[y.length - 1].toFixed(2)} m`;
}

export function markaSayfasiUret(site: SiteIcerik, profil: MarkaProfili): MarkaSayfasi {
    const makineler = markaMakineleri(profil.marka);
    const bolge = ilkBolge(site);
    const uzm = uzmanlikIfade(site);
    const aralik = metrajAraligi(makineler);
    const adet = makineler.length;
    const t = (alan: string) => `marka-${profil.slug}-${alan}`;
    const sinifAdlari = [...new Set(makineler.map((m) => m.kategoriAdi))].join(", ").toLocaleLowerCase("tr-TR");

    return {
        slug: profil.slug,
        marka: profil.marka,
        profil,
        makineler,
        baslik: varyantSec(site, t("baslik"), [
            `${profil.marka} Platform Kiralama | ${bolge}`,
            `${bolge} ${profil.marka} Kiralık Platform`,
            `Kiralık ${profil.marka} Platform — ${bolge}`,
        ]),
        aciklama: varyantSec(site, t("aciklama"), [
            `${bolge} bölgesinde kiralık ${profil.marka} platform: filomuzda ${adet} model, ${aralik} çalışma yüksekliği aralığı. TÜRKAK periyodik kontrollü, yazılı teklif.`,
            `Filomuzdaki ${adet} adet ${profil.marka} makinesi ${aralik} aralığında; ${uzm} kapsamındaki işler için ${bolge} ve çevresine kiralanır.`,
            `${profil.marka} ${sinifAdlari} — ${bolge} sahalarına kiralık. ${aralik} metraj aralığı, İSG evrakları ve nakliye organizasyonu dahil.`,
        ]),
        h1: varyantSec(site, t("h1"), [
            `${bolge} Bölgesinde ${profil.marka} Platform Kiralama`,
            `${profil.marka} Platform Kiralama — ${bolge}`,
            `Kiralık ${profil.marka} Makineler | ${bolge}`,
        ]),
        giris: kur(site, t("giris"),
            [
                `Filomuzda ${profil.marka} markasından ${adet} makine bulunuyor; çalışma yüksekliği aralığı ${aralik}.`,
                `${profil.marka} markasından filomuzda ${adet} model var ve bunlar ${aralik} aralığını kapsıyor.`,
                `Bu sayfada, filomuzdaki ${adet} adet ${profil.marka} makinesini tanıtıyoruz — ${aralik} metraj aralığı.`,
            ],
            [
                `${profil.karakter.split(".")[0]}.`,
                `${profil.mense} menşeli marka, ${profil.segment.toLocaleLowerCase("tr-TR")} sınıfında konumlanıyor.`,
                `Markanın ürün karakteri ${profil.segment.toLocaleLowerCase("tr-TR")} alanında yoğunlaşıyor.`,
            ],
            [
                `Bu sayfa bir bayilik veya distribütörlük sayfası değildir; yalnızca ${bolge} ve çevresine kiraladığımız kendi makinelerimizi tanıtıyoruz.`,
                `Burada satış değil kiralama anlatılıyor — makineler ${bolge} bölgesindeki sahalarınıza teslim edilmek üzere filomuzda bulunuyor.`,
                `Yetkili bayi veya temsilci değiliz; bu sayfa yalnızca kiraladığımız kendi ${profil.marka} makinelerimizi kapsıyor.`,
            ],
        ),
        baglam: markaBaglami(site, profil, makineler),
        sss: [
            {
                soru: varyantSec(site, t("s1q"), [
                    `Filomuzda hangi ${profil.marka} modelleri var?`,
                    `${profil.marka} markasından hangi makineleri kiralayabilirim?`,
                    `${profil.marka} filonuz hangi metrajları kapsıyor?`,
                ]),
                cevap: kur(site, t("s1a"),
                    [
                        `Filomuzda ${adet} adet ${profil.marka} makinesi bulunuyor:`,
                        `${profil.marka} markasından filomuzdaki ${adet} model şunlar:`,
                        `Şu anda ${adet} adet ${profil.marka} makinemiz var:`,
                    ],
                    [
                        `${makineler.map((m) => `${m.ad.replace(profil.marka + " ", "")} (${m.yukseklik.toFixed(2)} m)`).join(", ")}. Metraj aralığı ${aralik}.`,
                    ],
                    [
                        "Hangi modelin işinize uygun olduğunu çalışma yüksekliği, zemin tipi ve erişim ölçüsüyle birlikte belirliyoruz.",
                        `${bolge} sahanız için doğru sınıfı iş tanımıyla birlikte netleştiriyoruz.`,
                        "Saha bilgisi paylaşıldığında uygun modeli ve müsaitliği teyit ediyoruz.",
                        `Hedef yüksekliği ve zemin tipini iletin, ${bolge} için müsait olanı önerelim.`,
                    ],
                ),
            },
            {
                soru: varyantSec(site, t("s2q"), [
                    `${profil.marka} yetkili bayisi misiniz?`,
                    `Bu makineleri satıyor musunuz?`,
                    `${profil.marka} distribütörü müsünüz?`,
                ]),
                cevap: varyantSec(site, t("s2a"), [
                    `Hayır. ${profil.marka} markasının yetkili bayisi veya distribütörü değiliz; bu sayfa yalnızca kiraladığımız kendi makinelerimizi tanıtır. Satış, servis veya yedek parça için markanın Türkiye temsilcisine başvurmanız gerekir.`,
                    `Bayilik veya distribütörlüğümüz yok — ${profil.marka} makineleri filomuzda kiralama amacıyla bulunuyor. Satın alma ve garanti işlemleri için markanın resmi temsilcisiyle görüşmelisiniz.`,
                    `Hayır, biz kiralama firmasıyız. Filomuzda ${profil.marka} makineleri var ancak marka adına satış veya servis yetkimiz bulunmuyor.`,
                ]),
            },
            {
                soru: varyantSec(site, t("s3q"), [
                    `Marka farkı işimi etkiler mi?`,
                    `Hangi markayı seçmeliyim?`,
                    `Marka mı yoksa metraj mı önemli?`,
                ]),
                cevap: kur(site, t("s3a"),
                    [
                        "Pratikte belirleyici olan marka değil, makinenin teknik künyesidir.",
                        "Doğru soru 'hangi marka' değil, 'hangi metraj ve kapasite' olmalı.",
                        "Marka tercihi çoğu işte sonucu değiştirmez.",
                    ],
                    [
                        "Çalışma yüksekliği, platform kapasitesi, şase genişliği ve güç tipi (akülü/dizel) işin yapılabilirliğini doğrudan belirler; bu dört ölçü uyduğunda farklı markaların aynı sınıf makineleri birbirinin yerine kullanılabilir.",
                        "Aynı sınıftaki makineler EN 280 standardına göre üretildiği için güvenlik donanımları ve temel kabiliyetler benzerdir; fark ayrıntılarda kalır.",
                        "Sahada işi belirleyen şey yükseklik, kapasite ve zemin uyumudur; bu üçü tutuyorsa marka ikincil kalır.",
                    ],
                    [
                        `${bolge} için müsait olan ve iş tanımınıza uyan makineyi öneriyoruz; marka tercihiniz varsa müsaitliğe göre değerlendiriyoruz.`,
                        "Belirli bir marka tercihiniz varsa belirtin, filo müsaitliğine göre planlayalım.",
                        "İş tanımınızı paylaşın, uygun sınıftaki müsait makineleri karşılaştırmalı gösterelim.",
                    ],
                ),
            },
            { soru: "Operatörlü mü operatörsüz mü kiralanabilir?", cevap: cevapOperator(site) },
            { soru: varyantSec(site, t("s5q"), ["Periyodik kontrol belgesi veriliyor mu?", "İSG evrakları makineyle geliyor mu?"]), cevap: cevapBelge(site) },
            { soru: varyantSec(site, t("s6q"), ["Kiralama süresi ne kadar olmalı?", "Günlük kiralama mümkün mü?"]), cevap: cevapSure(site) },
        ],
    };
}

export function markaSayfalari(site: SiteIcerik): MarkaSayfasi[] {
    return aktifMarkalar().map((p) => markaSayfasiUret(site, p));
}

export function markaSayfasiBul(site: SiteIcerik, slug: string): MarkaSayfasi | undefined {
    const profil = markaProfilBul(slug);
    if (!profil || markaMakineleri(profil.marka).length === 0) return undefined;
    return markaSayfasiUret(site, profil);
}

/** Filo istatistikleri — marka hub sayfasında kullanılır. */
export function filoOzeti() {
    return {
        toplamMakine: FILO.length,
        markaSayisi: aktifMarkalar().length,
        enDusuk: Math.min(...FILO.map((m) => m.yukseklik)),
        enYuksek: Math.max(...FILO.map((m) => m.yukseklik)),
    };
}
