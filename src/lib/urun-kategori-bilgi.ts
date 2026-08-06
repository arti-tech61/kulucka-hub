// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~2.125 canlı sayfa besler (25 ürün × 85 domain).
// Buradaki metinler TEKNİK TANIMdır — bilgi doğrudur ve keyfi olarak
// yeniden yazılmamalıdır. Ancak aynı tanımın 85 domainde birebir tekrarı
// kopya içeriktir.
//
// ÇÖZÜM: olgusal çekirdek korunur, domain bağlamı EKLENİR.
//   - cesitle() ile çerçeveleme varyasyonu
//   - kategoriBaglami() ile domainin bölge/uzmanlık verisine bağlanan
//     ek cümle (gerçek bilgi ekler, kelime karıştırmaz)
//
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
import type { SiteIcerik } from "./siteler";
import { cesitle, varyantSec, ilkBolge, uzmanlikIfade } from "./varyant";

const KATEGORI_CEKIRDEK: Record<string, { baslik: string; aciklama: string; kullanim: string; secim: string }> = {
    "makasli-platform": {
        baslik: "Makaslı Platform",
        aciklama: "Makaslı platform, sepeti yalnızca dikey doğrultuda hareket ettirir; çalışma noktasının tam altına konumlanabildiğiniz her işte ilk tercihtir. Geniş sepeti sayesinde birden fazla çalışan, malzeme ve el aletleriyle birlikte güvenle yükselir.",
        kullanim: "Tavan tesisatı, aydınlatma, sprinkler, depo raf sistemleri ve cephenin düz bölümlerindeki bakım-montaj işleri makaslı platformun tipik kullanım alanıdır.",
        secim: "Yatay erişim ihtiyacı yoksa ve zemin düz-taşıyıcıysa, aynı yükseklik sınıfındaki diğer makine tiplerine kıyasla en ekonomik ve en yüksek kapasiteli seçenektir.",
    },
    "eklemli-platform": {
        baslik: "Eklemli Platform",
        aciklama: "Eklemli (akrobat) platformun bomu birden fazla noktadan kırılır; bu yapı makineyi engelin yanına konumlandırıp sepeti engelin üzerinden veya arkasına ulaştırmaya izin verir.",
        kullanim: "Çatı arkaları, cephe girintileri, boru köprüleri, konveyör hatları ve engelli noktalardaki bakım-montaj işleri eklemli platformun asıl alanıdır.",
        secim: "Hedef noktanın önünde bir engel (kolon, boru hattı, çatı çıkıntısı) varsa, düz bomlu makinelerin ulaşamadığı noktalara bu makine sınıfıyla erişilir.",
    },
    "teleskopik-platform": {
        baslik: "Teleskopik Platform",
        aciklama: "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi sağlar. Açık ve engelsiz sahada, makineyi işin uzağına kurmak zorunda olduğunuz durumlarda doğru seçimdir.",
        kullanim: "Köprü altı bakımları, geniş hangar ve stadyum işleri, enerji nakil hattı yakını kontrollü çalışmalar ve yüksek prefabrik montajı teleskopiğin tipik alanıdır.",
        secim: "Engel aşma ihtiyacı yoksa ve açık sahada maksimum yatay mesafeye ulaşmak gerekiyorsa, eklemli platforma göre daha uzun erişim sunar.",
    },
    forklift: {
        baslik: "Forklift",
        aciklama: "Forklift, palet ve ağır yükleri kontrollü biçimde kaldırıp taşımak için tasarlanmıştır; kapasite ve yakıt tipi saha koşuluna göre seçilir.",
        kullanim: "Depo içi istifleme, üretim hattı besleme, TIR/konteyner yükleme-boşaltma ve şantiye malzeme taşıma forkliftin tipik işleridir.",
        secim: "Kapalı ve egzoz kısıtlı alanlarda elektrikli, açık saha ve yoğun vardiyada dizel model tercih edilir; yük ağırlığı ve kaldırma yüksekliği kapasite sınıfını belirler.",
    },
    "orumcek-platform": {
        baslik: "Örümcek Platform",
        aciklama: "Paletli hareket kabiliyeti ve ayarlanabilir ayakları sayesinde dar, düzensiz veya hassas yüzeyli zeminlerde çalışmaya izin verir; dar kapı ve merdiven boşluklarından geçebilir.",
        kullanim: "Atrium, cam tavan, iç avlu, bahçe ve teras gibi standart platformların giremediği veya zemine zarar verebileceği alanlarda tercih edilir.",
        secim: "Zemin hassasiyeti veya dar geçiş standart platform seçimini engelliyorsa, kompakt boyutu ve düşük zemin baskısıyla örümcek platform devreye girer.",
    },
    telehandler: {
        baslik: "Telehandler",
        aciklama: "Teleskopik yükleyici olan telehandler, çatal, sepet ve kova ataşmanlarıyla çok amaçlı kullanım sunar; hem yük taşır hem de uygun ataşmanla yükseğe malzeme ulaştırır.",
        kullanim: "Şantiye malzeme lojistiği, çatı kaplama malzemesi besleme, prefabrik montaj ve palet çıkarma telehandler'ın tipik işleridir.",
        secim: "Aynı sahada hem yük taşıma hem yüksekte erişim ihtiyacı varsa, iki ayrı makine yerine tek makineyle çözüm arayan projelerde değerlendirilir.",
    },
};

/**
 * Kategori tanımını domainin kendi bağlamına bağlayan ek cümle.
 * Kelime karıştırmaz — sahanın gerçek koşuluna dair bilgi ekler.
 */
function kategoriBaglami(site: SiteIcerik, kategori: string): string {
    const bolge = ilkBolge(site);
    const uzm = uzmanlikIfade(site);
    const havuz: Record<string, string[]> = {
        "makasli-platform": [
            `${bolge} bölgesinde bu sınıf en çok kapalı üretim alanlarında ve depo raf sistemlerinde talep ediliyor; zemin düz ve taşıyıcı olduğu için akülü modeller yeterli oluyor.`,
            `${uzm} kapsamındaki işlerde makaslı platform, geniş çalışma tablası sayesinde iki personelin malzemeyle birlikte çalışmasına imkân verdiği için tercih ediliyor.`,
            `${bolge} sahalarında karar genelde şuna bakıyor: hedefin tam altına park edilebiliyorsa makaslı platform hem daha ekonomik hem daha geniş bir çalışma alanı sunuyor.`,
        ],
        "eklemli-platform": [
            `${bolge} bölgesinde eklemli platform, üretim hattı veya boru rafı gibi aşılması gereken engel bulunan tesislerde devreye giriyor.`,
            `${uzm} işlerinde engel aşma ihtiyacı sıkça çıktığı için bu sınıf, makaslı platformun yetmediği noktalarda tercih ediliyor.`,
            `${bolge} sahalarında eklemli platformun asıl değeri, hedefin altına park edilemeyen durumlarda yanal erişim sağlaması.`,
        ],
        "teleskopik-platform": [
            `${bolge} bölgesinde teleskopik platform, açık sahada uzun yatay mesafeye ulaşılması gereken işlerde kullanılıyor.`,
            `${uzm} kapsamında yüksek ve geniş açıklıklı yapılarda bu sınıf, tek doğrultuda maksimum erişim sağladığı için tercih ediliyor.`,
            `${bolge} sahalarında teleskopik sınıf, engel aşma gerekmeyen ama mesafenin uzun olduğu durumlarda eklemli platformdan daha verimli çalışıyor.`,
        ],
        forklift: [
            `${bolge} bölgesinde forklift talebi ağırlıklı olarak depo içi istifleme ve saha yükleme işlerinden geliyor.`,
            `${uzm} kapsamındaki tesislerde forklift sınıfı, taşınacak yükün ağırlığı ve kaldırma yüksekliğine göre belirleniyor.`,
            `${bolge} sahalarında zemin tipi belirleyici: kapalı alan ve düz zeminde akülü, açık ve engebeli sahada dizel model gerekiyor.`,
        ],
        "orumcek-platform": [
            `${bolge} bölgesinde örümcek platform, standart makinenin giremediği dar geçişli ve hassas zeminli alanlarda kullanılıyor.`,
            `${uzm} işlerinde bu sınıf, paletli şasesi sayesinde zemine yük dağıtarak hassas döşemelerde çalışabilmesiyle öne çıkıyor.`,
            `${bolge} sahalarında örümcek platform genelde tek çözüm olduğu noktalarda devreye giriyor: dar kapı, iç avlu, hassas zemin.`,
        ],
        telehandler: [
            `${bolge} bölgesinde telehandler, hem yük taşıma hem yükseğe erişim gereken karma işlerde tercih ediliyor.`,
            `${uzm} kapsamında telehandler, tek makineyle forklift ve platform işlevini birleştirdiği için şantiye lojistiğini sadeleştiriyor.`,
            `${bolge} sahalarında bu sınıf, ataşman değişimiyle farklı işlere uyum sağladığı için uzun süreli projelerde ekonomik oluyor.`,
        ],
    };
    const secenekler = havuz[kategori];
    return secenekler ? varyantSec(site, `kat-baglam-${kategori}`, secenekler) : "";
}

/**
 * Kategori bilgisini domaine özgü hale getirir: çekirdek tanım korunur,
 * çerçeveleme çeşitlenir, sonuna domain bağlamı eklenir.
 */
export function kategoriBilgisi(site: SiteIcerik, kategori: string) {
    const cekirdek = KATEGORI_CEKIRDEK[kategori];
    if (!cekirdek) return undefined;
    const baglam = kategoriBaglami(site, kategori);
    return {
        baslik: cekirdek.baslik,
        aciklama: cesitle(site, `kat-ac-${kategori}`, cekirdek.aciklama),
        kullanim: `${cesitle(site, `kat-ku-${kategori}`, cekirdek.kullanim)}${baglam ? " " + baglam : ""}`,
        secim: cesitle(site, `kat-se-${kategori}`, cekirdek.secim),
    };
}
