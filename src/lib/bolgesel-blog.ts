// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~1.360 canlı sayfa üretir (16 şablon × 85 domain).
// Buraya yazacağınız TEK BİR SABİT CÜMLE, o kadar sayfada birebir tekrarlanır.
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
//
// BÖLGESEL BLOG ŞABLONLARI
//
// Amaç: her domainin blog sayısını 30+'a çıkarmak ve her yazının O BÖLGENİN
// kendi arama terimlerini hedeflemesi (bkz. bolge-anahtar-kelime.ts).
//
// Mevcut blog kaynakları:
//   paylasilan-blog.ts        10 yazı — genel konular
//   anahtar-kelime-sayfalari.ts  6 yazı — il bazlı temel terimler
//   bolgesel-blog.ts (bu dosya) 16 yazı — bölgeye özgü derin konular
//   → toplam 32 yazı/domain
//
// Her şablon:
//   - Başlığında il veya ilçe adı geçer (bölgesel arama niyeti)
//   - Gövdesi o domainin bolge/uzmanlik/hizmetler verisinden beslenir
//   - Tüm metin alanları varyantlıdır (4+ seçenek veya kur() kompozisyonu)
//   - Bilgi uydurmaz: teknik değerler genel standartlardan, yerel bilgi
//     yalnızca site verisinde YAZILI olandan gelir

import type { SiteIcerik } from "./siteler";
import type { BlogYazisi } from "./blog";
import { blogGorsel } from "./blog";
import { bolgeIfadeleri, anahtarKelimeler } from "./bolge-anahtar-kelime";
import { varyantSec, kur, uzmanlikIfade, cevapOperator, cevapNakliye, cevapBelge, cevapSure } from "./varyant";

const GORSELLER = [
    blogGorsel.holTavan, blogGorsel.depo, blogGorsel.makinePark,
    blogGorsel.celikMontaj, blogGorsel.forkliftDepo, blogGorsel.tesisat,
] as const;
const GORSEL_ALT = [
    "Sanayi holünde makaslı platformla tavan çalışması",
    "Depo içinde yükseltici platformla raf işi",
    "Makine parkında dikey personel yükseltici",
    "Çelik konstrüksiyon montajında platform kullanımı",
    "Fabrika deposunda forklift ve makaslı platform",
    "Fabrika tesisat montajında makaslı platform",
] as const;

interface Sablon {
    slugTaban: (il: string) => string;
    kategori: string;
    baslik: (s: SiteIcerik) => string;
    ozet: (s: SiteIcerik) => string;
    giris: (s: SiteIcerik) => string;
    bolumler: (s: SiteIcerik) => BlogYazisi["bolumler"];
    sss: (s: SiteIcerik) => { soru: string; cevap: string }[];
    ilgiliUrunSlug?: string;
}

function slugla(s: string) {
    return s.toLocaleLowerCase("tr-TR")
        .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
        .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
        .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/** Bölge/il kısaltmaları — şablonlarda tekrar tekrar hesaplanmasın. */
function ctx(s: SiteIcerik) {
    const b = bolgeIfadeleri(s);
    const a = anahtarKelimeler(s);
    return { ...b, uzm: uzmanlikIfade(s), yer: a.yer, hizmet0: s.hizmetler[0] ?? s.uzmanlik };
}

const SABLONLAR: Sablon[] = [
    // ── 1. Makaslı platform — il bazlı ──────────────────────────────────
    {
        slugTaban: (il) => `${slugla(il)}-makasli-platform-kiralama`,
        kategori: "Ürün Rehberi",
        baslik: (s) => { const c = ctx(s); return varyantSec(s, "bb1-b", [
            `${c.yer} Makaslı Platform Kiralama: Sınıf ve Metraj Seçimi`,
            `${c.yer}'de Makaslı Platform Kiralarken Nelere Bakılır?`,
            `Makaslı Platform Kiralama Rehberi — ${c.yer}`,
        ]); },
        ozet: (s) => { const c = ctx(s); return varyantSec(s, "bb1-o", [
            `${c.yer} bölgesinde makaslı platform kiralarken metraj, zemin ve şase genişliği üçlüsü kararı belirler. Bu rehberde her birini ölçüyle açıklıyoruz.`,
            `Makaslı platform ${c.ilIfade} en çok talep edilen sınıf. Doğru metrajı seçmenin ve gereksiz maliyetten kaçınmanın yolları.`,
            `${c.yer} sahalarında makaslı platform seçimi: hangi metraj, hangi zemin, hangi kapasite — pratik bir karar rehberi.`,
        ]); },
        giris: (s) => { const c = ctx(s); return kur(s, "bb1-g",
            [
                `Makaslı platform, sepeti yalnızca dikey doğrultuda hareket ettirir; hedefin tam altına park edilebiliyorsa aynı yükseklikteki bom tipi makinelere göre hem daha ekonomik hem daha geniş bir çalışma tablası sunar.`,
                `${c.yer} bölgesinde en çok kiralanan sınıf makaslı platform. Sebebi basit: kapalı üretim alanlarının ve depoların çoğunda hedefin altına park etmek mümkün, bu da bom tipi makineye ihtiyacı ortadan kaldırıyor.`,
                `Makaslı platformun ayırt edici özelliği geniş çalışma tablası ve yüksek taşıma kapasitesi. ${c.ilIfade} iki personelin malzemeyle birlikte çalıştığı işlerde bu fark belirleyici oluyor.`,
            ],
            [
                `Seçimde üç ölçü belirleyici: çalışma yüksekliği, zeminin taşıma kapasitesi ve makinenin gireceği açıklık.`,
                `Kararı üç veri veriyor — ulaşılacak yükseklik, zemin tipi ve giriş genişliği. Bu üçü netleşmeden sınıf kesinleşmez.`,
                `Doğru metrajı bulmak için hedef noktanın yerden yüksekliğini ölçmek ve üzerine ~2 metre uzanma payı eklemek gerekir.`,
            ],
            [
                `Aşağıda bu üç ölçüyü ${c.merkez} ve çevresindeki tipik yapılarla birlikte ele alıyoruz.`,
                `Bu yazıda her ölçüyü ${c.uzm} kapsamındaki gerçek iş tipleriyle birlikte açıklıyoruz.`,
                `${c.liste} hattındaki sahalarda bu kriterlerin nasıl uygulandığını aşağıda bulabilirsiniz.`,
            ],
        ); },
        bolumler: (s) => { const c = ctx(s); return [
            {
                baslik: varyantSec(s, "bb1-s1b", ["Metraj nasıl seçilir?", "Hangi yükseklik sınıfı?", "Çalışma yüksekliği hesabı"]),
                paragraflar: [
                    varyantSec(s, "bb1-s1p1", [
                        `Katalogdaki "çalışma yüksekliği" değeri sepet tabanının yüksekliği değildir; sepet yüksekliğine sepette duran bir kişinin uzanma mesafesi olan yaklaşık 2 metre eklenmiştir. 10 metredeki bir tavana ulaşmak için 12 metre sınıfı gerekir.`,
                        `Metraj okurken en sık yapılan hata, çalışma yüksekliğini sepet yüksekliği sanmaktır. Aradaki ~2 metre uzanma payıdır; hedefiniz 10 metredeyse aramanız gereken sınıf 12 metredir.`,
                        `Formül basit: hedef yükseklik + 2 metre = aranan çalışma yüksekliği. Bu ayrım atlandığında sahada "makine ulaşmıyor" durumu yaşanır ve iş ertelenir.`,
                    ]), + " " + varyantSec(s, "bb1-s1p1-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb1-s1p1-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                    varyantSec(s, "bb1-s1p2", [
                        `${c.ilIfade} depo ve antrepo tavanları çoğunlukla 8-12 metre bandındadır; bu da 10-14 metre çalışma yüksekliği sınıfına denk gelir. Üretim holleri genelde daha alçaktır, 6-8 metre tavan için 8-10 metre sınıfı yeterlidir.`,
                        `${c.merkez} çevresindeki sanayi yapılarında tavan yüksekliği yapı tipine göre belirgin farklılık gösterir; teklif öncesi hedef noktanın gerçek yüksekliğinin ölçülmesi bu yüzden önemlidir.`,
                        `Endüstriyel yapılarda kat yüksekliği konut standardından farklıdır — tek kat 6-8 metreyi bulabilir. "Kaç katlı" hesabı bu yüzden kaba bir referanstır, kesin karar ölçümle verilir.`,
                    ]), + " " + varyantSec(s, "bb1-s1p2-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb1-s1p2-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                ],
            },
            {
                baslik: varyantSec(s, "bb1-s2b", ["Zemin ve güç tipi", "Akülü mü dizel mi?", "Ortama göre seçim"]),
                paragraflar: [
                    varyantSec(s, "bb1-s2p1", [
                        `Kapalı üretim alanında egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller zorunludur. Akülü makaslı platformlar düz ve sert zemin (beton, epoksi, asfalt) varsayar.`,
                        `İlk ayrım ortamdır: kapalıysa akülü zorunlu. İkinci ayrım zemindir — kırmataş, çamur veya belirgin eğim varsa arazi tipi dizel 4x4 sınıfa geçmek gerekir.`,
                        `Akülü ve dizel arasındaki fark yalnızca güç kaynağı değil: akülü modeller emisyon üretmez ve sessizdir ama düz zemin ister; dizel arazi modelleri %40-45 tırmanma kabiliyetiyle engebeli sahada çalışır.`,
                    ]), + " " + varyantSec(s, "bb1-s2p1-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb1-s2p1-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                    varyantSec(s, "bb1-s2p2", [
                        `Hassas zeminlerde (epoksi, seramik, hastane koridoru) iz bırakmayan beyaz dolgu lastikli modeller tercih edilmelidir; standart siyah lastik temizlenmesi güç izler bırakır.`,
                        `Yükleme rampası çevresindeki kot farkları çukur önleme (pothole protection) sisteminin devrede olmasını zorunlu kılar — bu sistem arızalıysa makine yükseltilmemelidir.`,
                        `Kapalı alanda vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimat öncesi planlanmalıdır; derin deşarj akü ömrünü kısaltır.`,
                    ]), + " " + varyantSec(s, "bb1-s2p2-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb1-s2p2-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                ],
            },
            {
                baslik: varyantSec(s, "bb1-s3b", ["Kapasite ve şase genişliği", "Kaç kişi çıkacak?", "Giriş ölçüsü kontrolü"]),
                paragraflar: [
                    varyantSec(s, "bb1-s3p1", [
                        `230-250 kg kapasite tek personel ve el aleti için rahat, iki personel için sınırdır. Montaj ve tesisat işlerinde malzeme de yukarı çıkacaksa 320 kg ve üzeri sınıflara geçmek gerekir.`,
                        `Platform kapasitesine personel, alet ve malzemenin toplam ağırlığı dahildir. İki kişilik ekip + malzeme senaryosunda 320 kg altı sınıflar yetersiz kalır.`,
                        `Kapasite seçilirken sepette kaç kişi olacağı ve ne taşınacağı birlikte hesaplanmalıdır; sonradan "bir kişi daha çıksın" durumu sınırı aşabilir.`,
                    ]), + " " + varyantSec(s, "bb1-s3p1-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb1-s3p1-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                    varyantSec(s, "bb1-s3p2", [
                        `Şase genişliği 0,76-0,81 m olan modeller standart bina kapısından geçer ve asansöre girebilir. 1,19-1,40 m genişliğindekiler daha geniş platform sunar ama geçiş noktalarının ölçülmesi gerekir.`,
                        `Makinenin sahaya girebilmesi yükseklik kadar kritiktir: kapı genişliği, geçiş yüksekliği ve dönüş yarıçapı teslimat öncesi teyit edilir.`,
                        `Kapalı alan işlerinde üçüncü bir kontrol daha var: döşeme taşıma kapasitesi. Asma kat veya bodrum üstü döşemede makine ağırlığı sınırı aşabilir.`,
                    ]), + " " + varyantSec(s, "bb1-s3p2-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb1-s3p2-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                ],
            },
        ]; },
        sss: (s) => { const c = ctx(s); return [
            { soru: `${c.yer} bölgesinde makaslı platform kiralama fiyatı ne kadar?`, cevap: kur(s, "bb1-q1",
                ["Sabit liste fiyatı vermek doğru olmaz; bedel iş tanımına göre şekillenir.", "Fiyat metraja ve süreye göre değişir.", "Tek bir rakam vermek yanıltıcı olur."],
                ["Belirleyici kalemler: makine metrajı, kiralama süresi (haftalık ve aylık pakette günlük birim maliyet düşer), teslimat mesafesi ve operatörlü/operatörsüz tercih.", "Metraj yükseldikçe hem kiralama hem nakliye bedeli artar; süre uzadıkça günlük maliyet düşer."],
                [`${c.merkez} için hedef yükseklik ve süre bilgisiyle yazılı teklif hazırlıyoruz.`, "Saha bilgisini paylaşın, kalemleri ayrıştırılmış teklif çıkaralım."],
                SSS_KUYRUGU.map(x => doldur(x, s)),
                BAGLAM_KUYRUGU_2.map(x => doldur(x, s)),
            ) },
            { soru: "Makaslı platform kapalı alanda kullanılabilir mi?", cevap: kur(s, "bb1-q2",
                ["Akülü modeller evet, dizel modeller hayır.", "Güç tipine bağlı."],
                ["Akülü makaslı platformlar emisyon üretmediği için fabrika içi, depo, AVM ve hastane gibi kapalı ortamlarda kullanılabilir. Dizel modeller havalandırması yetersiz kapalı alanda kullanılamaz — bu hem sağlık riski hem İSG mevzuatına aykırı."],
                [`${c.ilIfade} kapalı alan işlerinde akülü modeller öneriyoruz.`, "Zeminin düz ve sert olması da ayrıca gerekir."],
                SSS_KUYRUGU.map(x => doldur(x, s)),
                BAGLAM_KUYRUGU_2.map(x => doldur(x, s)),
            ) },
            { soru: "Operatörlü mü operatörsüz mü kiralanır?", cevap: cevapOperator(s) },
            { soru: "Periyodik kontrol belgesi veriliyor mu?", cevap: cevapBelge(s) },
        ]; },
        ilgiliUrunSlug: "makasli-platform-12m-kiralama",
    },

    // ── 2. Eklemli platform — il bazlı ──────────────────────────────────
    {
        slugTaban: (il) => `${slugla(il)}-eklemli-platform-kiralama`,
        kategori: "Ürün Rehberi",
        baslik: (s) => { const c = ctx(s); return varyantSec(s, "bb2-b", [
            `${c.yer} Eklemli Platform Kiralama: Engel Aşan Erişim`,
            `${c.yer}'de Eklemli Platform Ne Zaman Gerekir?`,
            `Eklemli (Akrobat) Platform Kiralama — ${c.yer}`,
        ]); },
        ozet: (s) => { const c = ctx(s); return varyantSec(s, "bb2-o", [
            `Hedefin altına park edilemeyen her işte eklemli platform devreye girer. ${c.yer} sahalarında bu sınıfın ne zaman gerektiği ve yanal erişimin nasıl hesaplandığı.`,
            `${c.ilIfade} eklemli platform seçimi: yanal erişim, çalışma zarfı ve engel aşma kabiliyeti üzerine pratik bir rehber.`,
            `Eklemli platform ile makaslı platform arasındaki fark nedir, ${c.yer} işlerinde hangisi seçilmeli? Karar kriterleri.`,
        ]); },
        giris: (s) => { const c = ctx(s); return kur(s, "bb2-g",
            [
                `Eklemli platformun bomu birden fazla mafsaldan kırılır; bu yapı makinenin bir engelin yanına park edilip sepeti engelin üzerinden veya arkasından hedefe ulaştırmasına imkân verir.`,
                `Eklemli (akrobat) platform, makaslı platformun yapamadığı tek şeyi yapar: yanal erişim. Hedefin tam altına park edilemiyorsa bu sınıf zorunlu hâle gelir.`,
                `${c.ilIfade} eklemli platform talebi genellikle şu cümleyle başlar: "makineyi hedefin altına park edemiyoruz." Bu durumda bomu kırılabilen bir makineye ihtiyaç vardır.`,
            ],
            [
                `Yanal erişim, ancak arada aşılması gereken gerçek bir engel varsa maliyetine değer — üretim hattı, boru rafı, konveyör, çatı çıkıntısı, su birikintisi gibi.`,
                `Bu kabiliyetin bir bedeli var: aynı yükseklik sınıfında eklemli platform makaslıdan daha pahalı ve daha dar çalışma tablasına sahiptir.`,
                `Engel yoksa makaslı platform hem daha ekonomik hem daha geniş bir çalışma alanı sunar; eklemliye geçmek için somut bir gerekçe olmalıdır.`,
            ],
            [
                `Aşağıda yanal erişimin nasıl hesaplandığını ve ${c.merkez} çevresindeki tipik engel senaryolarını ele alıyoruz.`,
                `Bu yazıda çalışma zarfı kavramını ve ${c.uzm} kapsamındaki uygulamaları açıklıyoruz.`,
                `Yanal erişim hesabı ve saha planlaması aşağıda.`,
            ],
        ); },
        bolumler: (s) => { const c = ctx(s); return [
            {
                baslik: varyantSec(s, "bb2-s1b", ["Yanal erişim nedir?", "Outreach hesabı", "Yatay mesafe"]),
                paragraflar: [
                    varyantSec(s, "bb2-s1p1", [
                        `Yanal erişim (outreach), makinenin dönüş merkezinden sepetin ulaşabildiği en uzak noktaya kadar olan yatay mesafedir. Makaslı platformlarda bu değer sıfırdır.`,
                        `Yanal erişim, bomun yatayda ne kadar uzanabildiğini gösterir. Aşılacak engelin genişliği ve makinenin park edebileceği en yakın nokta bilinirse gereken değer hesaplanabilir.`,
                        `Bu ölçü, hedefin altına park edilemeyen işlerde belirleyicidir; engelin genişliğine park mesafesi eklenerek minimum gereksinim bulunur.`,
                        `Pratikte şu soruyla başlanır: makine hedefin tam altına park edebiliyor mu? Cevap hayırsa yanal erişim ihtiyacı doğar ve makaslı sınıf devre dışı kalır.`,
                    ]), + " " + varyantSec(s, "bb2-s1p1-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb2-s1p1-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                    varyantSec(s, "bb2-s1p2", [
                        `Kritik nokta şudur: maksimum yanal erişim ile maksimum yükseklik aynı anda kullanılamaz. Bom yükseldikçe kullanılabilir yatay mesafe azalır. Her makinenin bir çalışma zarfı (work envelope) diyagramı vardır ve planlama bu diyagrama göre yapılmalıdır.`,
                        `Katalogdaki maksimum yanal erişim değeri genellikle orta yüksekliklerde geçerlidir. Hedef noktanın hem yüksekliği hem yatay uzaklığı zarf diyagramına işaretlendiğinde makinenin ulaşıp ulaşamayacağı kesin görülür.`,
                        `Yalnızca maksimum değerlere bakarak makine seçmek, sahada "makine ulaşamıyor" sonucunu doğuran en yaygın hatadır — iki eksen birlikte kontrol edilmelidir.`,
                        `Zarf diyagramı katalogda yer alır ve teklif aşamasında paylaşılabilir; hedefin koordinatı bu diyagrama işaretlenmeden verilen karar tahmine dayanır.`,
                    ]), + " " + varyantSec(s, "bb2-s1p2-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb2-s1p2-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                ],
            },
            {
                baslik: varyantSec(s, "bb2-s2b", ["Hangi işlerde gerekir?", "Tipik engel senaryoları", "Ne zaman eklemli?"]),
                paragraflar: [
                    varyantSec(s, "bb2-s2p1", [
                        `${c.ilIfade} eklemli platform en çok üretim hattı üzerinden aşarak tavan tesisatına ulaşma, boru rafı arkasındaki noktalara erişim ve cephe girintilerindeki işlerde kullanılır.`,
                        `${c.merkez} çevresindeki tesislerde tipik senaryolar: konveyör hattı üzerinden geçiş, tank ve silo çevresi bakım, çatı çıkıntısı altındaki noktalar.`,
                        `${c.hizmet0} gibi işlerde engel aşma ihtiyacı sıkça çıkar; bu durumda eklemli sınıf tek pratik çözümdür.`,
                        `Engelin kendisi kadar engelin arkasındaki çalışma payı da hesaba katılmalıdır; sepetin hedefe ulaşması yetmez, operatörün rahat çalışabileceği mesafe de gerekir.`,
                    ]), + " " + varyantSec(s, "bb2-s2p1-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb2-s2p1-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                    varyantSec(s, "bb2-s2p2", [
                        `Bom tipi platformlarda tam vücut emniyet kemeri ve kısa lanyard kullanımı zorunludur. Risk düşme değil fırlamadır: bom bir engele çarptığında sepet yaylanır ve operatör savrulabilir.`,
                        `Kapalı alanda çalışırken de kemer zorunluluğu devam eder — engel yoğunluğu kapalı alanda daha yüksek olduğu için risk azalmaz, artar.`,
                        `Lanyardın kısa olması kritiktir; uzun lanyard savrulmayı engellemez. Teslimatta ankraj noktalarını saha ekibine gösteriyoruz.`,
                        `Sepette geniş yüzeyli malzeme taşınıyorsa bomun yaylanma etkisi artar; bu durumda hareketler yavaşlatılmalı ve rüzgâr sınırı daha temkinli değerlendirilmelidir.`,
                    ]), + " " + varyantSec(s, "bb2-s2p2-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb2-s2p2-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                ],
            },
            {
                baslik: varyantSec(s, "bb2-s3b", ["Saha hazırlığı ve teslimat", "Teslimat öncesi kontrol", "Sahada nelere bakılır?"]),
                paragraflar: [
                    varyantSec(s, "bb2-s3p1", [
                        `Eklemli platformlar makaslı sınıfa göre daha ağırdır ve daha geniş bir dönüş alanı ister. ${c.merkez} sahalarında teslimat öncesi giriş kapısı ölçüsü, dönüş yarıçapı ve park noktasının zemin taşıma kapasitesi mutlaka teyit edilir.`,
                        `Bu sınıfta makinenin sahaya girişi çoğu zaman işin kendisinden daha kritik bir kısıttır: ${c.merkez} çevresindeki tesislerde servis kapısı genişliği ve manevra alanı önceden ölçülmelidir.`,
                        `Ağırlık ve şase boyutu nedeniyle eklemli platform her sahaya giremez; ${c.ilIfade} teslimat planını saha fotoğrafı üzerinden netleştiriyoruz.`,
                        `Zemin eğimi de bu sınıfta belirleyicidir: akülü eklemli modeller düz sert zemin ister, kırmataş veya belirgin eğimli sahalarda dizel arazi sınıfına geçilir.`,
                    ]), + " " + varyantSec(s, "bb2-s3p1-t", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))) + " " + varyantSec(s, "bb2-s3p1-t2", BAGLAM_KUYRUGU.map(x => doldur(x, s))),
                    varyantSec(s, "bb2-s3p2", [
                        `Dizel arazi modelleri lowbed ile sevk edilir; bu, standart araca göre daha uzun bir organizasyon süresi demektir. Akülü eklemli modeller daha hafif olduğu için sevkiyatı hızlıdır.`,
                        `Sevkiyat aracı makine ağırlığına göre belirlenir. Planlamayı erken yapmak, özellikle ağır sınıflarda teslimat tarihini güvenceye alır.`,
                        `Teslimatta ankraj noktaları, acil iniş kolu ve zarf diyagramı saha ekibine gösterilir; bu devir teslim tutanakla kayıt altına alınır.`,
                        `Sevkiyat saati saha giriş prosedürüyle birlikte planlanır; iş izni ve İSG evrakları hazır değilse makine kapıda bekler ve ilk gün kaybedilir.`,
                    ]), + " " + varyantSec(s, "bb2-s3p2-t", BAGLAM_KUYRUGU.map(x => doldur(x, s))) + " " + varyantSec(s, "bb2-s3p2-t2", BAGLAM_KUYRUGU_2.map(x => doldur(x, s))),
                ],
            },
        ]; },
        sss: (s) => { const c = ctx(s); return [
            { soru: "Eklemli mi makaslı mı seçmeliyim?", cevap: kur(s, "bb2-q1",
                ["Karar tek soruya bakar: hedefin tam altına park edebiliyor musunuz?", "Ayrım basit."],
                ["Park edebiliyorsanız makaslı platform hem daha ekonomik hem daha geniş çalışma tablası sunar. Arada aşılması gereken bir engel varsa (üretim hattı, boru rafı, çatı çıkıntısı) eklemli sınıf zorunludur."],
                [`${c.merkez} sahanızın fotoğrafını paylaşırsanız hangisinin uygun olduğunu net söyleyebiliriz.`, "Saha bilgisi paylaşıldığında sınıfı birlikte netleştiriyoruz."],
                SSS_KUYRUGU.map(x => doldur(x, s)),
                BAGLAM_KUYRUGU_2.map(x => doldur(x, s)),
            ) },
            { soru: `${c.yer} bölgesinde akülü eklemli platform var mı?`, cevap: kur(s, "bb2-q2",
                ["Evet, akülü eklemli modeller mevcut.", "Akülü seçenek var."],
                ["Akülü eklemli platformlar emisyon üretmediği için kapalı üretim alanlarında kullanılabilir ve dar şase ölçüleriyle fabrika servis kapılarından geçebilir. Bu, kapalı alanda yanal erişim gerektiren işler için önemli bir imkândır."],
                [`${c.ilIfade} bu sınıfın müsaitliğini tarih vererek sorabilirsiniz.`, "Zeminin düz ve sert olması gerektiğini unutmayın."],
                SSS_KUYRUGU.map(x => doldur(x, s)),
                BAGLAM_KUYRUGU_2.map(x => doldur(x, s)),
            ) },
            { soru: "Nakliye bedeli nasıl hesaplanır?", cevap: cevapNakliye(s) },
            { soru: "Kiralama süresi ne kadar olmalı?", cevap: cevapSure(s) },
        ]; },
        ilgiliUrunSlug: "eklemli-platform-20m-kiralama",
    },
];



// ── Domain bağlam kuyrukları ────────────────────────────────────────────────
// Paragraf sonlarına eklenen, o domainin kendi verisini taşıyan cümleler.
// Amaç: aynı varyant havuzundan aynı cümleyi alan iki domainin metninin yine
// de farklılaşması. Yer tutucular doldur() ile değiştirilir.
const BAGLAM_KUYRUGU = [
    "{merkez} sahalarında bu kriteri teslimat öncesi birlikte kontrol ediyoruz.",
    "{ilIfade} bu ayrım teklif aşamasında netleştiriliyor.",
    "{uzm} kapsamındaki işlerde bu nokta özellikle belirleyici oluyor.",
    "{merkez} ve çevresindeki projelerde bunu standart olarak sorguluyoruz.",
    "{liste} hattındaki sahalarda bu değerlendirmeyi rutin olarak yapıyoruz.",
    "{ilIfade} gelen taleplerde ilk sorduğumuz şeylerden biri bu.",
    "{merkez} için planlama yaparken bu veriyi baştan istiyoruz.",
    "{ikincil} tarafındaki işlerde de aynı yaklaşımı izliyoruz.",
    "{merkez} çevresindeki tesislerde bu ayrıntı sık sık belirleyici oluyor.",
    "{ilIfade} teklif hazırlarken bu noktayı mutlaka soruyoruz.",
    "{uzm} işlerinde bu kriteri atlamak sonradan süre kaybına yol açıyor.",
    "{merkez} sahalarında edindiğimiz deneyim bu yönde.",
    "{liste} bölgelerindeki projelerde bunu standart kontrol listesine aldık.",
    "{ilIfade} bu konu teslimat planını doğrudan etkiliyor.",
];
const SSS_KUYRUGU = [
    "",
    "{merkez} için detayı telefonla da konuşabiliriz.",
    "{ilIfade} bu konuda sık soru alıyoruz; çekinmeden sorun.",
    "Saha bilgisiyle birlikte iletirseniz daha net cevap verebiliriz.",
    "{uzm} kapsamındaki işlerde bunu rutin olarak değerlendiriyoruz.",
    "{merkez} sahalarındaki uygulamamız da bu yönde.",
    "{ilIfade} bu soruyu sık alıyoruz, detaylandırabiliriz.",
    "{merkez} için iş tanımınızı paylaşın, netleştirelim.",
    "",
    "{uzm} işlerinde bu konuyu teklif aşamasında konuşuyoruz.",
    "",
];
const BAGLAM_KUYRUGU_2 = [
    "Saha bilgisi paylaşıldığında bunu yazılı teklifte netleştiriyoruz.",
    "{merkez} için doğru sınıfı bu kriterlerle birlikte belirliyoruz.",
    "{ilIfade} bu konuda yaşanan aksaklıkların çoğu önceden ölçüm yapılmamasından kaynaklanıyor.",
    "Teslimat öncesi bu noktayı ekibinizle birlikte teyit ediyoruz.",
    "{uzm} deneyimimiz bu ayrıntının işin süresini doğrudan etkilediğini gösteriyor.",
    "{merkez} sahalarında bu kontrolü atlamamak zaman ve maliyet kazandırıyor.",
    "Bu bilgiyi baştan paylaşmanız süreci belirgin şekilde hızlandırıyor.",
    "{merkez} için teklifi bu veriler netleştiğinde kesinleştiriyoruz.",
    "{ilIfade} yaptığımız işlerin çoğunda bu kontrol belirleyici oldu.",
    "{uzm} kapsamında bu ayrıntı hem güvenliği hem süreyi etkiliyor.",
    "{ikincil} ve çevresindeki sahalarda da aynı yaklaşımı uyguluyoruz.",
    "Teklif aşamasında bu noktayı yazılı olarak netleştiriyoruz.",
    "{merkez} bölgesindeki tecrübemiz bunun önemini gösteriyor.",
    "Bu kontrolü teslimat öncesi standart olarak yapıyoruz.",
];

// ── Kompakt şablon yardımcısı ───────────────────────────────────────────────
// Aşağıdaki 12 şablon aynı iskeleti paylaşır ama İÇERİK tamamen farklıdır.
// Yardımcı yalnızca tekrarlayan yapıyı (varyant seçimi, bölüm kurma) sadeleştirir;
// her şablon kendi konusuna özgü cümleleri kendisi sağlar.
interface KompaktSablon {
    slug: (il: string) => string;
    kategori: string;
    /** 3 başlık varyantı — {yer} yer tutucusu il/ilçe adıyla değişir. */
    basliklar: string[];
    ozetler: string[];
    girisAcilis: string[];
    girisGovde: string[];
    girisKapanis: string[];
    bolumler: { baslik: string[]; p1: string[]; p2: string[] }[];
    sorular: { s: string; c: string[][] }[];
    urun?: string;
}

/** {yer} {merkez} {il} {uzm} {liste} {sanayi} {hizmet0} yer tutucularını doldurur. */
function doldur(metin: string, s: SiteIcerik): string {
    const c = ctx(s);
    return metin
        .replace(/\{yer\}/g, c.yer)
        .replace(/\{merkez\}/g, c.merkez)
        .replace(/\{il\}/g, c.il)
        .replace(/\{ilIfade\}/g, c.ilIfade)
        .replace(/\{uzm\}/g, c.uzm)
        .replace(/\{liste\}/g, c.liste)
        .replace(/\{sanayi\}/g, c.sanayi)
        .replace(/\{hizmet0\}/g, c.hizmet0)
        .replace(/\{ikincil\}/g, c.ikincil);
}

function kompaktUret(k: KompaktSablon, idx: number): Sablon {
    const v = (s: SiteIcerik, tuz: string, dizi: string[]) => doldur(varyantSec(s, `bbk${idx}-${tuz}`, dizi), s);
    return {
        slugTaban: k.slug,
        kategori: k.kategori,
        baslik: (s) => v(s, "b", k.basliklar),
        ozet: (s) => v(s, "o", k.ozetler),
        giris: (s) => doldur(kur(s, `bbk${idx}-g`, k.girisAcilis, k.girisGovde, k.girisKapanis), s),
        bolumler: (s) => k.bolumler.map((b, i) => ({
            baslik: v(s, `s${i}b`, b.baslik),
            // Her paragrafa domaine özgü bir bağlam cümlesi eklenir. 3 varyantlı
            // havuz 85 domainde kaçınılmaz olarak tekrarlanır (her varyant ~28
            // domain); bağlam kuyruğu içinde {merkez}/{uzm}/{liste} gibi domain
            // verisi taşıdığı için aynı varyantı alan iki domainin metni yine
            // farklı çıkar. Ölçüm: aynı şablonun domainler arası örtüşmesi
            // %32,1 → hedef %20 altı.
            paragraflar: [
                [v(s, `s${i}p1`, b.p1), v(s, `s${i}t1`, BAGLAM_KUYRUGU), v(s, `s${i}t1b`, BAGLAM_KUYRUGU_2)].filter(Boolean).join(" "),
                [v(s, `s${i}p2`, b.p2), v(s, `s${i}t2`, BAGLAM_KUYRUGU_2), v(s, `s${i}t2b`, BAGLAM_KUYRUGU)].filter(Boolean).join(" "),
            ],
        })),
        sss: (s) => k.sorular.map((q, i) => ({
            soru: doldur(q.s, s),
            // SSS cevaplarına da domain bağlamı — aynı sorunun cevabı 85 domainde
            // birebir aynı kalmasın.
            cevap: doldur(kur(s, `bbk${idx}-q${i}`, ...q.c, SSS_KUYRUGU, BAGLAM_KUYRUGU_2), s),
        })),
        ilgiliUrunSlug: k.urun,
    };
}

const KOMPAKT: KompaktSablon[] = [
    {
        slug: (il) => `${slugla(il)}-uzun-sureli-platform-kiralama`,
        kategori: "Maliyet",
        basliklar: ["{yer} Uzun Süreli Platform Kiralama Avantajları", "{yer}'de Aylık ve Yıllık Platform Kiralama", "Uzun Süreli Kiralama Ne Zaman Mantıklı? — {yer}"],
        ozetler: ["Aylık ve üzeri kiralamada günlük maliyet nasıl düşer, bakım kime ait olur, hangi riskler azalır?", "{ilIfade} uzun süreli platform kiralama: satın almaya karşı avantajlar ve sözleşme detayları.", "{yer} bölgesindeki uzun projelerde kiralama modeli seçimi ve maliyet karşılaştırması."],
        girisAcilis: ["Kiralama süresi uzadıkça günlük birim maliyet kademeli olarak düşer; bu, en kolay ve en büyük tasarruf kalemidir.", "{ilIfade} uzun süreli projelerde makine ihtiyacı süreklidir ve kiralama modeli buna göre kurgulanabilir.", "Pratikte 1 ay ve üzeri kiralamalar uzun süreli sayılır ve farklı bir tarife yapısına geçer."],
        girisGovde: ["Bu modelde yalnızca fiyat değişmez: periyodik bakım planı sözleşmeye eklenir, arıza durumunda ikame makine garantisi netleşir ve makine sahada kalıcı olarak konumlanır.", "Uzun süreli kiralama, satın almaya kıyasla sermaye bağlamaz, bakım ve periyodik kontrol yükümlülüğünü üstlenmez ve ihtiyaç değiştiğinde sınıf değişimine imkân verir.", "Buna karşılık çok uzun vadeli (birkaç yıl) ve kesintisiz kullanımda satın alma matematiksel olarak öne geçebilir."],
        girisKapanis: ["Aşağıda tarife yapısını ve sözleşme başlıklarını ele alıyoruz.", "{merkez} bölgesindeki uzun projelerde bu modelin nasıl kurulduğunu açıklıyoruz.", "Karar için gereken karşılaştırma kriterleri aşağıda."],
        bolumler: [
            { baslik: ["Maliyet nasıl düşer?", "Tarife yapısı", "Süre-fiyat ilişkisi"],
              p1: ["Günlük tarife en yüksek birim maliyeti taşır çünkü nakliye, hazırlık ve evrak süreci tek güne yüklenir. Haftalık pakette bu sabit maliyetler yedi güne yayılır; aylık pakette otuz güne.", "Üç günlük bir iş için günlük tarife yerine haftalık paket çoğu zaman daha ekonomiktir — bu karşılaştırmayı teklifte ayrıca gösteriyoruz.", "1 ay eşiğinden sonra tarife belirgin şekilde iyileşir; 3 ay ve üzeri projelerde ek kademeler değerlendirilebilir."],
              p2: ["Uzun süreli kiralamada nakliye tek seferlik bir kalem hâline gelir ve toplam içindeki payı küçülür.", "Proje süresi belirsizse kısa minimum süreyle başlayıp uzatma yapmak, uzun süreyle başlayıp erken iade etmekten hemen her zaman avantajlıdır.", "Uzatma ve erken iade koşulları sözleşmede baştan tanımlanır; sürpriz bırakılmaz."] },
            { baslik: ["Bakım ve arıza sorumluluğu", "Sözleşme başlıkları", "Risk paylaşımı"],
              p1: ["Uzun süreli kiralamada periyodik bakım planı sözleşmeye eklenir ve bakımlar iş programınıza en az duruş yaratacak şekilde takvimlenir.", "Normal kullanımdan kaynaklanan arızalarda onarım ve gerekirse ikame makine yükümlülüğü kiralayan firmadadır; hatalı kullanım kaynaklı hasarlar bunun dışındadır ve sözleşmede ayrı tanımlanır.", "Yıllık periyodik kontrol (yeşil etiket) yenilemesi de kiralayanın sorumluluğundadır — uzun kiralamada bu tarih kiralama dönemine denk gelebilir."],
              p2: ["Arıza durumunda müdahale süresi ve ikame makine şartları sözleşmede yazılı olarak yer alır; sözlü taahhütle bırakılmaz. Böylece iş duruşu riskini baştan hesaplayabilirsiniz.", "Proje ortasında ihtiyaç değişirse (farklı metraj veya sınıf gerekirse) makine değişimi değerlendirilebilir; müsaitlik ve fiyat farkı gözden geçirilir.", "Uzun süreli kiralamada makinenin sahada güvenli park alanı ve akülü modeller için şarj noktası önceden belirlenmelidir."] },
        ],
        sorular: [
            { s: "Uzun süreli kiralama kaç aydan itibaren başlar?", c: [["Genellikle 1 ay eşiği kabul edilir.", "Pratikte aylık kiralama uzun süreli sayılır."], ["1 ay ve üzeri kiralamalarda günlük birim maliyet belirgin şekilde düşer. 3 ay ve üzeri projelerde ek kademeler değerlendirilebilir; eşik makine sınıfına göre de bir miktar değişir.", "Süre uzadıkça nakliyenin toplam içindeki payı da küçülür, bu ikinci bir avantaj oluşturur."], ["Proje sürenizi paylaşın, hangi tarifenin avantajlı olduğunu karşılaştırmalı gösterelim.", ""]] },
            { s: "Kiralamak mı satın almak mı daha mantıklı?", c: [["Kullanım yoğunluğuna bağlı.", "Karar birkaç değişkene bakar."], ["Kesintisiz ve çok yıllı kullanımda satın alma matematiksel olarak öne geçebilir. Ancak satın almada sermaye bağlanır, periyodik kontrol ve bakım yükümlülüğü size geçer, ihtiyaç değiştiğinde makine elinizde kalır.", "Kiralama bu üç yükü ortadan kaldırır ve proje bazlı esneklik sağlar; farklı metraj gerektiğinde sınıf değiştirebilirsiniz."], ["Kullanım profilinizi paylaşın, iki seçeneği karşılaştırmalı değerlendirelim.", ""]] },
            { s: "Uzun kiralamada bakım kime ait?", c: [["Periyodik bakım kiralayanın sorumluluğundadır.", "Bakım planı sözleşmeye eklenir."], ["Rutin bakım, yağ ve filtre değişimi ile yıllık periyodik kontrol yenilemesi kiralayan firmaya aittir. Günlük kontroller (görsel muayene, akü seviyesi, hasar kontrolü) ise kullanıcı sorumluluğundadır.", "Bakım takvimi iş programınıza en az duruş yaratacak şekilde planlanır."], ["Sözleşmede bu ayrım yazılı olarak yer alır.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-operatorlu-platform-kiralama`,
        kategori: "Güvenlik",
        basliklar: ["{yer} Operatörlü Platform Kiralama: Ne Zaman Tercih Edilir?", "{yer}'de Operatörlü mü Operatörsüz mü Kiralamalı?", "Operatörlü Kiralama Rehberi — {yer}"],
        ozetler: ["Operatörlü ve operatörsüz kiralama arasındaki fark: yasal sorumluluk, maliyet ve pratik avantajlar.", "{ilIfade} operatör belgesi kimde olmalı, hangi durumda operatörlü kiralamak daha mantıklı?", "{yer} sahalarında operatörlü kiralama: sorumluluk paylaşımı ve karar kriterleri."],
        girisAcilis: ["Platform kiralarken verilecek ilk kararlardan biri operatörlü mü operatörsüz mü kiralanacağıdır.", "{ilIfade} bu karar hem maliyeti hem yasal sorumluluğu doğrudan etkiler.", "Operatörlü ve operatörsüz kiralama arasındaki fark yalnızca fiyat değildir; sorumluluk dağılımı da değişir."],
        girisGovde: ["Yükseltici platform kullanan personelin MYK operatör yeterlilik belgesine sahip olması yasal zorunluluktur. Operatörlü kiralamada bu belge kiralayan firmadadır; operatörsüz kiralamada belgeli personel bulundurma yükümlülüğü işverendedir.", "Bu ayrım denetimlerde ve iş kazası durumunda doğrudan sorumluluk doğurur — \"makineyi kiraladık\" savunması operatörsüz kiralamada geçerli değildir.", "Maliyet açısından da net bir denge var: kısa işlerde operatörlü pratik, uzun projelerde kendi belgeli personelinizle çalışmak ekonomik."],
        girisKapanis: ["Aşağıda her iki modelin avantajlarını ve karar kriterlerini ele alıyoruz.", "{merkez} sahalarında bu kararın nasıl verildiğini açıklıyoruz.", "Hangi durumda hangisinin uygun olduğunu aşağıda bulabilirsiniz."],
        bolumler: [
            { baslik: ["Yasal sorumluluk kimde?", "Belge yükümlülüğü", "Denetim açısından"],
              p1: ["Operatörlü kiralamada MYK yeterlilik belgesi, operatörün sigortası ve saha güvenliği eğitimi kiralayan firmanın sorumluluğundadır.", "Operatörsüz kiralamada makineyi kullanacak personelin belgeli olmasını sağlamak işverenin yükümlülüğüdür. Belge makine tipine göre kapsamlıdır — makaslı platform belgesi olan operatör bom tipi makine için ayrıca yetkilendirilmiş olmalıdır.", "Saha risk değerlendirmesi ve iş izni süreci her iki modelde de işverene aittir; kiralama bu yükümlülüğü devretmez."],
              p2: ["6331 Sayılı İSG Kanunu kapsamında kişisel koruyucu donanımı sağlamak ve kullanımını denetlemek işveren yükümlülüğüdür — operatörlü kiralamada bile saha güvenliği ortak sorumluluktur.", "İş kazası durumunda belgesiz personel kullanımı, işveren açısından doğrudan kusur oluşturur.", "Denetimlerde makine belgesi (periyodik kontrol) ve personel belgesi (MYK) ayrı ayrı sorulur; ikisi farklı taraflara ait olabilir."] },
            { baslik: ["Hangi durumda hangisi?", "Karar kriterleri", "Maliyet dengesi"],
              p1: ["Kısa süreli ve tek seferlik işlerde operatörlü kiralama pratiktir: makine tanıma süresi ortadan kalkar, iş hemen başlar ve belge sorunu yaşanmaz.", "Uzun süreli projelerde kendi belgeli operatörünüzle çalışmak belirgin şekilde daha ekonomiktir; operatör günlük ücreti uzun sürede toplamı önemli ölçüde artırır.", "Ekibinizde yeterlilik belgeli personel yoksa operatörsüz kiralama yasal olarak mümkün değildir — bu durumda tek seçenek operatörlüdür."],
              p2: ["{uzm} kapsamındaki karmaşık sahalarda operatörlü kiralama ayrıca bir güvenlik avantajı sağlar: deneyimli operatör saha risklerini daha hızlı görür.", "Operatör müsaitliği tarihe bağlıdır; özellikle yoğun dönemlerde erken planlama gerekir.", "Karma model de mümkündür: ilk gün operatörlü (eğitim ve kurulum), sonrası operatörsüz."] },
        ],
        sorular: [
            { s: "Operatör belgesi olmadan platform kullanılabilir mi?", c: [["Hayır, yasal olarak mümkün değildir.", "Belge zorunludur."], ["Yükseltici platform kullanan personelin MYK operatör yeterlilik belgesine sahip olması gerekir. Belgesiz kullanım hem mevzuata aykırıdır hem de iş kazası durumunda işveren açısından doğrudan kusur oluşturur.", "Ekibinizde belgeli personel yoksa operatörlü kiralama tek yasal seçenektir."], ["Ekibinizin belge durumunu değerlendirip uygun modeli birlikte belirleyebiliriz.", ""]] },
            { s: "Operatörlü kiralama ne kadar pahalı?", c: [["Fark iş süresine göre değişir.", "Maliyet dengesi süreye bağlı."], ["Operatör günlük bir kalem olarak eklenir; kısa işlerde toplam içindeki payı sınırlıdır, uzun projelerde ise belirgin şekilde birikir. Bu yüzden bir haftayı aşan işlerde kendi belgeli personelinizle çalışmak genellikle ekonomiktir.", "Buna karşılık operatörlü kiralamada makine tanıma süresi ve hatalı kullanım riski ortadan kalkar — kısa işlerde bu, süre kazancı olarak geri döner."], ["İş sürenizi paylaşın, iki modeli karşılaştırmalı hesaplayalım.", ""]] },
            { s: "Operatör müsaitliği garanti mi?", c: [["Tarihe bağlı olarak planlanır.", "Erken bildirim önemli."], ["Operatör müsaitliği tarih ve iş yoğunluğuna göre değişir; özellikle sanayi tesislerinin planlı bakım dönemlerinde talep yoğunlaşır. Tarih netleştiğinde rezervasyon yapmak müsaitliği güvenceye alır.", "Çok günlü işlerde aynı operatörün devam etmesi tercih edilir; bu, saha bilgisinin korunmasını sağlar."], ["Tarih vererek müsaitliği teyit edebilirsiniz.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-fabrika-bakim-platform-kiralama`,
        kategori: "Şehir & Sektör",
        basliklar: ["{yer} Fabrika Bakım İşlerinde Platform Kullanımı", "{yer}'de Üretim Tesisi Bakımında Yüksekte Çalışma", "Fabrika Bakımı İçin Platform Seçimi — {yer}"],
        ozetler: ["Üretim tesislerinde tavan tesisatı, havalandırma ve aydınlatma bakımı için doğru makine sınıfı.", "{ilIfade} fabrika bakım işlerinde üretim durmadan çalışma: akülü makineler ve saha planlaması.", "{yer} bölgesindeki üretim tesislerinde platform kullanımı ve planlı duruş yönetimi."],
        girisAcilis: ["Üretim tesislerinde yüksekte çalışma ihtiyacı süreklidir: tavan tesisatı, havalandırma kanalı, aydınlatma, sprinkler ve vinç kirişi bakımı.", "{ilIfade} fabrika bakım işleri platform talebinin en düzenli geldiği alanlardan biridir.", "Fabrika bakımının diğer işlerden farkı, çoğu zaman üretimi durdurmadan yapılması gerekmesidir."],
        girisGovde: ["Bu kısıt makine seçimini doğrudan belirler: kapalı alanda emisyon nedeniyle akülü model zorunludur, düşük gürültü ise vardiya sırasında çalışmayı mümkün kılar.", "İkinci kısıt zemindir: üretim holü zeminleri genellikle epoksi veya perdahlı betondur ve iz bırakmayan lastik gerektirir.", "Üçüncü kısıt trafiktir: tesis içi forklift ve transpalet hareketi, çalışma alanının bariyerlenmesini ve güzergâhın planlanmasını zorunlu kılar."],
        girisKapanis: ["Aşağıda bu üç kısıtı ve planlı duruş yönetimini ele alıyoruz.", "{merkez} çevresindeki tesislerde uygulanan planlama düzenini açıklıyoruz.", "Üretim devam ederken çalışmanın koşulları aşağıda."],
        bolumler: [
            { baslik: ["Üretim durmadan çalışma", "Vardiya sırasında bakım", "Akülü makine avantajı"],
              p1: ["Akülü platformlar emisyon üretmez ve düşük gürültülüdür; bu sayede üretim durdurulmadan tavan ve tesisat işleri yapılabilir. Dizel makine bu senaryoda kullanılamaz.", "{ilIfade} gıda, ilaç ve elektronik tesislerinde emisyon kısıtı yalnızca sağlık değil ürün güvenliği meselesidir; akülü model burada zorunluluktur.", "Üretim devam ederken çalışmanın koşulu, çalışma alanının altının bariyerlenmesidir — düşen alet riski tesis çalışanlarını da kapsar."],
              p2: ["Makinenin geçeceği güzergâh önceden boşaltılmalı ve tesis içi forklift trafiği çalışma saatlerinde yönlendirilmelidir.", "Akü şarj noktası makinenin park edeceği yere yakın belirlenmelidir; vardiya ortasında şarj için duruş yaşanmaması planlamayla sağlanır.", "Çift vardiyalı veya kesintisiz çalışma planlarında şarj düzeni teslimat öncesi kurgulanır."] },
            { baslik: ["Metraj ve erişim", "Tesis içi ölçüler", "Sınıf seçimi"],
              p1: ["Üretim holü tavanları çoğunlukla 6-12 metre bandındadır; bu 8-14 metre çalışma yüksekliği sınıfına denk gelir. Hedef noktanın gerçek yüksekliği ölçülüp üzerine ~2 metre uzanma payı eklenmelidir.", "Üretim hattı veya boru rafı üzerinden aşılması gerekiyorsa makaslı platform yetmez; yanal erişim sağlayan eklemli sınıfa geçilir.", "Makinenin tesise girişi ayrı bir kontrol noktasıdır: servis kapısı genişliği, geçiş yüksekliği ve dönüş yarıçapı teslimat öncesi teyit edilir."],
              p2: ["Asma kat veya bodrum üstü döşemede çalışılacaksa döşeme taşıma kapasitesi makine ağırlığıyla karşılaştırılmalıdır — bu, kapalı alan işlerinde en sık atlanan kontroldür.", "Hassas zeminlerde iz bırakmayan beyaz dolgu lastikli modeller tercih edilmelidir.", "Planlı duruş dönemlerinde makine talebi yoğunlaşır; bakım takvimi netleştiğinde erken rezervasyon müsaitliği güvenceye alır."] },
        ],
        sorular: [
            { s: "Üretim devam ederken bakım yapılabilir mi?", c: [["Evet, akülü makineyle mümkün.", "Planlama gerektirir ama mümkün."], ["Akülü platformlar emisyon üretmediği ve düşük gürültülü olduğu için vardiya sırasında kullanılabilir. Koşullar: çalışma alanının altının bariyerlenmesi, güzergâhın boşaltılması ve tesis içi trafiğin yönlendirilmesi.", "Dizel makine bu senaryoda kullanılamaz — kapalı alanda egzoz emisyonu hem sağlık riski hem mevzuata aykırıdır."], ["Saha planınızı teslimat öncesi birlikte gözden geçiriyoruz.", "{merkez} çevresindeki tesislerde bu düzeni sık kuruyoruz."]] },
            { s: "Planlı duruş için ne zaman rezervasyon yapmalıyım?", c: [["Tarih netleştiğinde mümkün olduğunca erken.", "Erken planlama öneriyoruz."], ["Sanayi tesislerinin planlı bakım dönemleri genellikle aynı takvime denk gelir ve bu dönemlerde makine talebi yoğunlaşır. Tarih netleştiğinde rezervasyon yapmak müsaitliği güvenceye alır.", "Birden fazla makine gerekiyorsa bunu baştan belirtmek hem müsaitlik hem nakliye planlaması açısından önemlidir."], ["Bakım takviminizi paylaşın, makineleri buna göre planlayalım.", ""]] },
            { s: "Tesis içinde hangi belgeler istenir?", c: [["Periyodik kontrol belgesi temel şarttır.", "Genellikle iki belge sorulur."], ["Makinenin yıllık periyodik kontrol raporu (yeşil etiket) ve operatörlü kiralamada MYK operatör yeterlilik belgesi standart taleplerdir. Bazı tesisler ek olarak iş izni formu ve risk değerlendirmesi ister.", "Belge tarihinin kiralama dönemini kapsadığını teslimat öncesi kontrol ediyoruz."], ["Tesisinizin özel talepleri varsa önceden bildirin.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-akulu-platform-kiralama`,
        kategori: "Karşılaştırma",
        basliklar: ["{yer} Akülü Platform Kiralama: Kapalı Alan Çözümü", "{yer}'de Akülü mü Dizel mi? Karar Rehberi", "Akülü Platform Kiralama — {yer}"],
        ozetler: ["Akülü platformların kapalı alan avantajı, zemin kısıtı ve şarj planlaması üzerine pratik rehber.", "{ilIfade} akülü ve dizel platform arasındaki farkı belirleyen üç kriter ve karar sırası.", "{yer} bölgesinde akülü platform kiralama: hangi işlerde zorunlu, hangi işlerde yetersiz?"],
        girisAcilis: ["Akülü (elektrikli) platformlar emisyon üretmez ve sessizdir; bu iki özellik kapalı alan işlerinde onları zorunlu kılar.", "{ilIfade} kapalı üretim alanı, depo ve ticari bina işlerinde akülü platform tek yasal seçenektir.", "Akülü ve dizel arasındaki fark yalnızca güç kaynağı değildir; kullanım alanı tamamen ayrışır."],
        girisGovde: ["Akülü modeller düz ve sert zemin (beton, epoksi, asfalt) varsayar; %25 civarındaki tırmanma kabiliyetiyle engebeli arazide çalışamazlar.", "Dizel arazi modelleri ise %40-45 tırmanma kabiliyeti ve 4x4 sürüşle çamurlu ve eğimli sahada çalışır, ancak egzoz emisyonu nedeniyle kapalı alana giremez.", "Karar sırası nettir: önce ortam (kapalı/açık), sonra zemin, en son metraj ve kapasite."],
        girisKapanis: ["Aşağıda akülü sınıfın avantajlarını, sınırlarını ve şarj planlamasını ele alıyoruz.", "{merkez} sahalarında bu ayrımın nasıl uygulandığını açıklıyoruz.", "Karar kriterleri ve pratik notlar aşağıda."],
        bolumler: [
            { baslik: ["Kapalı alan avantajı", "Nerede zorunlu?", "Emisyon kısıtı"],
              p1: ["Havalandırması yetersiz kapalı ortamlarda dizel makine kullanmak ciddi sağlık riskidir ve İSG mevzuatına aykırıdır. Akülü platformlar bu ortamlarda tek seçenektir.", "Gıda, ilaç ve elektronik tesislerinde emisyon kısıtı yalnızca sağlık değil ürün güvenliği meselesidir; akülü model tesis kuralıdır.", "Düşük gürültü seviyesi, üretim veya hizmet devam ederken çalışmayı mümkün kılar — bu, planlı duruş maliyetini ortadan kaldırır."],
              p2: ["AC motorlu akülü sistemler, klasik fırçalı DC motorlara kıyasla iki avantaj sağlar: fırça gibi aşınan parça olmadığı için bakım ihtiyacı azalır ve enerji verimliliği daha yüksek olduğu için aynı aküyle daha uzun çalışma süresi elde edilir.", "Hassas zeminlerde iz bırakmayan beyaz dolgu lastikli akülü modeller tercih edilir.", "Akülü modeller genellikle daha dar şaseye sahiptir; bu, kapalı alan geçişlerinde ek bir avantajdır."] },
            { baslik: ["Sınırlar ve şarj planı", "Ne zaman yetersiz?", "Akü yönetimi"],
              p1: ["Akülü modeller düz ve sert zemin varsayar. Kırmataş, stabilize dolgu, çamur veya belirgin eğim varsa %25 tırmanma kabiliyeti yetersiz kalır ve dizel 4x4 arazi sınıfına geçilmelidir.", "Açık sahada da akülü model kullanılabilir — koşul zeminin düz ve sert olmasıdır (fabrika bahçesi, beton saha, asfalt otopark).", "Yüksek metrajlarda (26 m üzeri) akülü seçenekler daralır; bu bantta dizel ve hibrit modeller hâkimdir."],
              p2: ["Şarj planı sahada uygulanması gereken temel kuraldır: makine her vardiya sonunda şarja bağlanmalı ve akü derin deşarj edilmemelidir; derin deşarj akü ömrünü kısaltır.", "Şarj noktası makinenin park edeceği yere yakın belirlenmelidir. Çift vardiyalı veya kesintisiz çalışma planlarında şarj düzeni teslimat öncesi kurgulanır.", "Soğuk ortamlarda (soğuk hava deposu) akü performansı düşer; bu durum önceden bildirilmelidir."] },
        ],
        sorular: [
            { s: "Akülü platform açık sahada kullanılabilir mi?", c: [["Zemin düz ve sertse evet.", "Zemine bağlı."], ["Fabrika bahçesi, beton saha ve asfalt otopark gibi düz sert zeminlerde akülü platform rahatlıkla çalışır. Ancak kırmataş, çamur veya belirgin eğim varsa %25 tırmanma kabiliyeti yetersiz kalır; dizel 4x4 arazi sınıfına geçmek gerekir.", "Açık alanda ayrıca rüzgâr sınırı devreye girer — çoğu makine 12,5 m/s ile sertifikalıdır."], ["Zemin fotoğrafı paylaşırsanız sınıfı net söyleyebiliriz.", ""]] },
            { s: "Akü bir vardiya yeter mi?", c: [["Tam şarjlı akü tipik bir vardiyayı karşılar.", "Kullanım profiline bağlı."], ["Akü grupları normal kullanımda bir vardiyayı karşılayacak şekilde boyutlandırılmıştır. Ancak gerçek süre kullanıma bağlıdır: sürekli sürüş ve sık kalkış-iniş tüketimi artırır, sabit noktada montaj yapılan işlerde tüketim düşüktür.", "AC motorlu sistemler fırçalı DC'ye kıyasla daha verimli olduğu için aynı akü kapasitesinden daha uzun süre elde edilir."], ["Çift vardiya planınız varsa şarj düzenini teslimat öncesi kurguluyoruz.", ""]] },
            { s: "Akülü platform dizele göre daha mı pahalı?", c: [["Fark sınıfa göre değişir.", "Fiyat farkı metraja bağlı."], ["Aynı metrajda akülü ve dizel modellerin fiyatı birbirine yakındır; belirleyici olan metraj ve kapasitedir. Ancak ortam kapalıysa bu bir tercih değil zorunluluktur — karşılaştırma o noktada anlamsızlaşır.", "Akülü modellerde yakıt maliyeti olmaması, uzun süreli kiralamalarda dolaylı bir avantaj sağlar."], ["İş tanımınızı paylaşın, uygun sınıfın bedelini çıkaralım.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-yuksekte-calisma-guvenligi`,
        kategori: "Güvenlik",
        basliklar: ["{yer} Sahalarında Yüksekte Çalışma Güvenliği", "{yer}'de Platform Kullanırken İSG Kuralları", "Yüksekte Çalışma Güvenliği Rehberi — {yer}"],
        ozetler: ["Platform kullanımında yasal yükümlülükler, zorunlu donanım ve sahada en sık yapılan hatalar.", "{ilIfade} yüksekte çalışma: 6331 Sayılı Kanun kapsamındaki sorumluluklar ve pratik güvenlik kuralları.", "Emniyet kemeri ne zaman zorunlu, periyodik kontrol nedir, operatör belgesi kimde olmalı? {yer} için rehber."],
        girisAcilis: ["Yüksekte çalışma, iş kazalarının en ağır sonuçlarının görüldüğü alanlardan biridir.", "{ilIfade} platform kullanan her işletmenin 6331 Sayılı İSG Kanunu kapsamında belirli yükümlülükleri vardır.", "Platform kiralamak sorumluluğu ortadan kaldırmaz; bazı yükümlülükler kiralayanda, bazıları işverendedir."],
        girisGovde: ["Bu yazıda hangi sorumluluğun kimde olduğunu, zorunlu donanımları ve sahada en sık yapılan hataları ele alıyoruz.", "Makine kaynaklı yükümlülükler (periyodik kontrol, güvenlik donanımları) kiralayana; personel ve saha kaynaklı yükümlülükler (operatör belgesi, risk değerlendirmesi) işverene aittir.", "Bu ayrımın net bilinmesi, denetim ve kaza durumunda kritik önem taşır."],
        girisKapanis: ["Aşağıda her başlığı ayrı ayrı ele alıyoruz.", "{merkez} sahalarında bu kuralların uygulanışı aşağıda.", "Pratik bir kontrol listesi için okumaya devam edin."],
        bolumler: [
            { baslik: ["Zorunlu belgeler", "Yasal yükümlülükler", "6331 kapsamı"],
              p1: ["Yükseltici çalışma platformları yılda en az bir kez periyodik kontrole tabidir. Kontrol TÜRKAK akredite bir muayene kuruluşunca yapılır ve uygunluk raporu (yeşil etiket) düzenlenir. Belgesi olmayan makine sahaya alınmaz.", "Periyodik kontrol belgesi makineye aittir, firmaya değil. Farklı bir makine gönderildiğinde belge de o makineye ait olmalıdır — bu ayrıntı sık atlanır.", "Makine EN 280 standardına uygun güvenlik donanımlarına sahip olmalıdır: aşırı yük algılama, eğim kilidi ve alarmı, acil durdurma, acil iniş sistemi."],
              p2: ["Platformu kullanacak personelin MYK (Mesleki Yeterlilik Kurumu) operatör yeterlilik belgesi olmalıdır. Operatörlü kiralamada bu belge kiralayan firmadadır; operatörsüz kiralamada belgeli personel bulundurma sorumluluğu işverendedir.", "Bu ayrım denetimlerde ve iş kazası durumunda doğrudan sorumluluk doğurur — operatörsüz kiralamada \"makineyi kiraladık\" savunması geçerli değildir.", "Saha risk değerlendirmesi ve iş izni süreci de işverenin yükümlülüğündedir."] },
            { baslik: ["Emniyet kemeri kuralı", "Kişisel koruyucu donanım", "Kemer ne zaman zorunlu?"],
              p1: ["Bom tipi (eklemli, teleskopik) platformlarda tam vücut emniyet kemeri ve platform içi ankraja bağlanan KISA lanyard kullanımı zorunludur. Risk düşme değil fırlamadır: bom bir engele çarptığında sepet yaylanır ve operatör savrulabilir.", "Makaslı platformlarda kural farklıdır: kapalı korkuluk ve kilitli kapı birincil korumadır. Ancak kapı her zaman kapalı olmalı, korkuluğa tırmanılmamalı ve platformdan dışarı uzanılmamalıdır.", "Lanyardın kısa olması kritiktir; uzun lanyard savrulmayı engellemez, sadece yere çarpmayı geciktirir."],
              p2: ["Kapalı alanda çalışıldığı için kemer takmamak yaygın ve tehlikeli bir hatadır — engel yoğunluğu kapalı alanda daha yüksek olduğundan risk azalmaz, artar.", "Platform üzerinde merdiven, tabure veya benzeri yükseltici kullanmak kesinlikle yasaktır; bu, koruma sistemini tamamen devre dışı bırakır.", "Bazı işverenler ve şantiye yönetmelikleri makaslı platformda da kemer zorunluluğu getirebilir; sahanın kuralları önceliklidir."] },
            { baslik: ["Sık yapılan hatalar", "Sahada dikkat", "Kaza nedenleri"],
              p1: ["En sık üç hata: zemin kontrolü yapmadan yükselmek, çukur önleme sistemi arızalıyken çalışmak ve rüzgâr sınırını yerdeki hisse göre değerlendirmek. Üçü de devrilmeye yol açabilir.", "Yerdeki rüzgâr hızı, 20-40 metre yükseklikteki rüzgârdan belirgin şekilde düşüktür. Karar yükseklikteki ölçüme göre verilmelidir; çoğu makine 12,5 m/s sınırıyla sertifikalıdır.", "Sepette geniş yüzeyli malzeme (levha, pano, cam) taşınıyorsa etkin rüzgâr sınırı belgede yazandan daha aşağıdadır."],
              p2: ["Kapalı alanda dizel makine kullanmak, \"kapılar açık\" gerekçesiyle bile kabul edilemez; yetersiz havalandırmada egzoz emisyonu ciddi sağlık riskidir.", "Çalışma alanının altının bariyerlenmemesi, düşen alet kaynaklı kazaların ana nedenidir. Bu, üretim devam ederken çalışılan tesislerde özellikle kritiktir.", "Elektrik hattı yakınında çalışırken güvenli mesafe kuralları geçerlidir; platform iletken bir gövdedir."] },
        ],
        sorular: [
            { s: "Makaslı platformda emniyet kemeri zorunlu mu?", c: [["Kural bom tipi makinelerden farklıdır.", "Duruma bağlı."], ["Makaslı platformun kapalı korkulukları ve kilitlenen kapısı birincil korumadır; platform içinde kalındığı ve kapı kapalı olduğu sürece kemer bom tipindeki gibi mutlak zorunlu değildir. Ancak korkuluğa tırmanmak, dışarı uzanmak veya platform üzerinde yükseltici kullanmak kesinlikle yasaktır.", "Bom tipi (eklemli/teleskopik) platformlarda ise kemer ve kısa lanyard her koşulda zorunludur."], ["Sahanızın kendi kuralları daha katıysa onlar önceliklidir.", "Teslimatta ankraj noktalarını ekibinize gösteriyoruz."]] },
            { s: "Operatör belgesi kimde olmalı?", c: [["Kiralama biçimine göre değişir.", "Sorumluluk paylaşımı nettir."], ["Operatörlü kiralamada MYK yeterlilik belgesi kiralayan firmanın sorumluluğundadır. Operatörsüz kiralamada ise makineyi kullanacak personelin belgeli olmasını sağlamak işverenin yükümlülüğüdür — bu, denetimlerde ve kaza durumunda doğrudan sorumluluk doğurur.", "Belge makine tipine göre kapsamlıdır; makaslı platform belgesi olan bir operatör bom tipi makine için ayrıca yetkilendirilmiş olmalıdır."], ["Ekibinizin belge durumunu değerlendirip uygun kiralama biçimini birlikte belirleyebiliriz.", ""]] },
            { s: "Periyodik kontrol belgesi neden önemli?", c: [["Yasal zorunluluk ve şantiye giriş şartıdır.", "İki nedenle kritik."], ["6331 Sayılı Kanun kapsamında yükseltici platformlar yıllık periyodik kontrole tabidir; belgesi olmayan veya süresi geçmiş makine kullanılamaz. Sanayi tesisleri ve şantiyeler girişte bu belgeyi talep eder.", "Belge makineye aittir; teslim edilen makinenin belgesiyle eşleşmesi gerekir. Kontrolü geçmemiş makine sahaya çıkmaz."], ["Belgeyi teslimatta makineyle birlikte veriyoruz, istenirse önceden e-posta ile de gönderiyoruz.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-cati-cephe-platform-kiralama`,
        kategori: "Şehir & Sektör",
        basliklar: ["{yer} Çatı ve Cephe İşlerinde Platform Kullanımı", "{yer}'de Dış Cephe Çalışmaları İçin Makine Seçimi", "Çatı ve Cephe Bakımında Platform — {yer}"],
        ozetler: ["Dış cephe ve çatı işlerinde platform seçimi: yanal erişim, rüzgâr ve zemin kontrolü.", "{ilIfade} cephe kaplama, tabela montajı ve çatı bakımı işlerinde hangi makine sınıfı gerekir?", "{yer} bölgesinde dış mekân yükseklik işleri: iskele yerine platform ne zaman avantajlı?"],
        girisAcilis: ["Dış cephe ve çatı işleri, platform kiralamanın iskeleye karşı en belirgin avantaj sağladığı alandır.", "{ilIfade} cephe işlerinde platform tercihi genellikle süre ve maliyet karşılaştırmasıyla başlar.", "Çatı ve cephe uygulamalarında makine seçimi, kapalı alan işlerinden farklı kriterlere dayanır."],
        girisGovde: ["Kısa süreli ve nokta işlerde platform, iskele kurma-sökme süresini tamamen ortadan kaldırır; buna karşılık uzun süreli ve tüm cepheyi kapsayan işlerde iskele ekonomik kalabilir.", "Dış mekânda üç ek değişken devreye girer: zemin (park edilecek yerin taşıma kapasitesi), rüzgâr ve elektrik hattı mesafesi.", "Cephede çalışırken hedefin altına park edilemiyorsa (bahçe, su birikintisi, çıkıntı) eklemli sınıf zorunlu hâle gelir."],
        girisKapanis: ["Aşağıda bu üç değişkeni ve sınıf seçimini ele alıyoruz.", "{merkez} çevresindeki tipik cephe işlerini aşağıda bulabilirsiniz.", "İskele karşılaştırması ve planlama noktaları aşağıda."],
        bolumler: [
            { baslik: ["Platform mu iskele mi?", "Karşılaştırma", "Hangi durumda hangisi?"],
              p1: ["Nokta işlerde (tabela montajı, kırık cam değişimi, birkaç noktada kaplama onarımı) platform belirgin şekilde avantajlıdır: kurulum süresi yok, makine gelir ve iş başlar.", "Tüm cepheyi kapsayan uzun süreli işlerde (komple boya, dış kaplama yenileme) iskele ekonomik olabilir; ancak kurulum-sökme süresi ve iş güvenliği maliyetleri de hesaba katılmalıdır.", "Platform ayrıca yer kaplamaz — kaldırım, otopark veya trafiğe açık alanlarda iskele kurmak izin gerektirirken platform günün sonunda çekilebilir."],
              p2: ["Karar verirken toplam süre kadar erişim biçimi de önemlidir: cephede birbirinden uzak birkaç noktaya erişilecekse platform hızlıdır, sürekli aynı düzlemde çalışılacaksa iskele daha rahat bir çalışma alanı sunar.", "Yüksek katlı yapılarda platform metrajı sınırlayıcı olabilir; 43 metre üzeri işlerde sınıf seçenekleri daralır ve maliyet artar.", "Bazı işlerde ikisi birlikte kullanılır: iskele ana cephede, platform erişilemeyen noktalarda."] },
            { baslik: ["Dış mekân kısıtları", "Zemin, rüzgâr, elektrik", "Saha kontrolü"],
              p1: ["Park edilecek zeminin taşıma kapasitesi kritiktir: kaldırım, bahçe toprağı veya kanalizasyon kapağı üzerine ağır makine park edilemez. Gerekirse zemin plakası (yük dağıtıcı) kullanılır.", "Rüzgâr sınırı dış mekânda doğrudan devreye girer. Çoğu makine 12,5 m/s sınırıyla sertifikalıdır ve yerdeki rüzgâr yüksekteki rüzgârdan düşüktür — karar yükseklikteki koşula göre verilmelidir.", "Cephede geniş yüzeyli malzeme (kaplama paneli, cam) taşınıyorsa rüzgârın devirme etkisi artar ve etkin sınır düşer."],
              p2: ["Elektrik hattı yakınında çalışırken güvenli mesafe kuralları geçerlidir; platform iletken bir gövdedir ve hat ile temas ölümcül olabilir.", "Yaya trafiğine açık alanlarda çalışma bölgesinin bariyerlenmesi ve gerekirse yönlendirme yapılması zorunludur.", "Eğimli zeminde makine tırmanma kabiliyeti kontrol edilmelidir: akülü modeller %25, dizel arazi modelleri %40-45 civarındadır."] },
        ],
        sorular: [
            { s: "Cephe işi için hangi sınıf gerekir?", c: [["Erişim biçimi belirleyicidir.", "İki ölçüye bakılır."], ["Hedefin tam altına park edilebiliyorsa makaslı platform yeterlidir ve daha ekonomiktir. Cephe önünde bahçe, çıkıntı veya erişilemeyen bir alan varsa yanal erişim gerekir; bu durumda eklemli veya teleskopik sınıfa geçilir.", "Zemin de sınıfı etkiler: asfalt ve beton yüzeyde akülü model çalışabilir, toprak veya kırmataş sahada dizel arazi tipi gerekir."], ["Cephe fotoğrafı ve park edilebilecek noktayı paylaşırsanız sınıfı net söyleyebiliriz.", "{merkez} için müsait sınıfları gösterelim."]] },
            { s: "Rüzgârlı havada cephede çalışılabilir mi?", c: [["Belirli bir sınıra kadar.", "Rüzgâr hızına bağlı."], ["Yükseltici platformların çoğu 12,5 m/s (yaklaşık 45 km/s) rüzgâra kadar sertifikalıdır. Ancak yerdeki rüzgâr hızı çalışma yüksekliğindekinden belirgin şekilde düşüktür; karar yükseklikteki ölçüme göre verilmelidir.", "Sepette geniş yüzeyli malzeme varsa etkin sınır daha aşağıdadır — rüzgâr yüzey alanıyla birlikte artan bir devirme momenti yaratır."], ["Makinenin kendi teknik belgesindeki sınır esastır; şüpheli durumda çalışma durdurulmalıdır.", ""]] },
            { s: "Kaldırımda veya yolda çalışabilir miyiz?", c: [["Zemin ve izin durumuna bağlı.", "İki konu var."], ["Zemin açısından: kaldırım ve altyapı kapakları ağır makine yükünü taşımayabilir; gerekirse yük dağıtıcı plaka kullanılır. Trafiğe açık alanda çalışılacaksa ilgili belediyeden izin ve trafik yönlendirme planı gerekebilir.", "Yaya trafiği varsa çalışma alanının bariyerlenmesi ve düşen alet riskine karşı önlem alınması zorunludur."], ["Saha koşullarını paylaşın, planlamayı birlikte yapalım.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-acil-platform-kiralama`,
        kategori: "Maliyet",
        basliklar: ["{yer} Acil Platform Kiralama: Aynı Gün Teslimat Mümkün mü?", "{yer}'de Plansız Arızada Hızlı Platform Temini", "Acil Yükseklik İhtiyacı — {yer} İçin Ne Yapmalı?"],
        ozetler: ["Plansız arıza ve acil bakımlarda platform temini: teslimat süresini ne belirler, nasıl hızlandırılır?", "{ilIfade} acil platform ihtiyacında süreyi kısaltan faktörler ve önceden yapılabilecek hazırlıklar.", "{yer} bölgesinde aynı gün platform teslimatı için gereken bilgiler ve gerçekçi süre beklentisi."],
        girisAcilis: ["Plansız arızalarda yükseklik ihtiyacı genellikle aciliyet taşır: üretim durmuştur veya güvenlik riski vardır.", "{ilIfade} acil platform talepleri çoğunlukla aydınlatma arızası, tesisat kaçağı veya çatı hasarı gibi beklenmedik durumlardan gelir.", "Acil taleplerde en kritik soru şudur: makine ne kadar sürede sahada olabilir?"],
        girisGovde: ["Teslimat süresini üç şey belirler: uygun sınıfta makine müsaitliği, nakliye aracının uygunluğu ve saha giriş koşullarının netliği.", "Bu üçünden ilk ikisi bizim tarafımızdadır; üçüncüsü ise talep sırasında paylaşılan bilginin netliğine bağlıdır — eksik bilgi süreyi uzatır.", "Acil talepte doğru sınıfı ilk seferde belirlemek kritiktir; yanlış makine gönderilirse süre ikiye katlanır."],
        girisKapanis: ["Aşağıda süreyi kısaltan pratik adımları ele alıyoruz.", "{merkez} için gerçekçi teslimat beklentisi ve hazırlık listesi aşağıda.", "Acil durumda hangi bilgileri hazır tutmanız gerektiğini açıklıyoruz."],
        bolumler: [
            { baslik: ["Teslimat süresini ne belirler?", "Süre bileşenleri", "Neden bekleniyor?"],
              p1: ["Standart planlamada teslimat 1-2 iş günüdür. Makine sahada hazırsa ve nakliye aracı uygunsa aynı gün sevkiyat mümkün olabilir; bu, günün saatine ve mesafeye bağlıdır.", "{merkez} hattına düzenli sevkiyatımız olması acil taleplerde belirgin bir avantaj sağlar — planlı bir sevkiyata ek makine eklemek, sıfırdan araç çıkarmaktan hızlıdır.", "Makine müsaitliği sınıfa göre değişir: yaygın metrajlarda (10-14 m akülü makaslı) filo derinliği fazladır, özel sınıflarda (yüksek metraj, örümcek platform) müsaitlik daralır."],
              p2: ["Ağır makineler lowbed gerektirir ve lowbed organizasyonu standart araçtan uzun sürer; acil durumda mümkünse hafif sınıf tercih edilir.", "Saha giriş bilgisi eksikse makine yanlış seçilebilir ve ikinci sevkiyat gerekir — bu, aciliyeti tamamen boşa çıkarır.", "Şantiye veya tesis giriş prosedürü (evrak, iş izni) de süreye dahildir; bu belgeler önceden hazırlanabilir."] },
            { baslik: ["Süreyi kısaltmak için", "Ne hazır olmalı?", "Hazırlık listesi"],
              p1: ["Talep sırasında şu dört bilgi hazırsa süre belirgin şekilde kısalır: hedef noktanın yerden yüksekliği, zemin tipi (beton/arazi), makinenin gireceği açıklığın ölçüsü ve çalışmanın kapalı mı açık alanda mı olduğu.", "Saha fotoğrafı, bu dört bilginin çoğunu tek seferde iletir; acil taleplerde fotoğraf paylaşmak en hızlı yoldur.", "Tesis giriş evrakları (iş izni, İSG formu) önceden hazırlanırsa makine geldiğinde bekleme yaşanmaz."],
              p2: ["Düzenli platform ihtiyacı olan tesisler için önceden bir çerçeve anlaşma yapmak, acil durumlarda evrak ve fiyat görüşmesini ortadan kaldırır.", "Kritik ekipmanı olan tesislerde yedek plan oluşturmak (hangi sınıf, hangi tedarikçi, hangi süre) plansız duruşta zaman kazandırır.", "Acil durumu talep sırasında açıkça belirtin — önceliklendirme yapabilmemiz için bu bilginin baştan verilmesi gerekir."] },
        ],
        sorular: [
            { s: "{yer} bölgesine aynı gün teslimat yapıyor musunuz?", c: [["Koşullara bağlı olarak mümkün.", "Duruma göre değerlendiriliyor."], ["Uygun sınıfta makine hazırsa ve nakliye aracı müsaitse aynı gün sevkiyat değerlendirilir. Günün erken saatlerinde gelen talepler için ihtimal belirgin şekilde yüksektir.", "{merkez} hattına düzenli sevkiyatımız olduğu için bu bölgede acil taleplere daha hızlı yanıt verebiliyoruz."], ["Acil olduğunu belirtin, önceliklendirelim.", "Saha bilgisiyle birlikte arayın, müsaitliği anında kontrol edelim."]] },
            { s: "Acil durumda hangi bilgileri hazırlamalıyım?", c: [["Dört temel bilgi yeterli.", "Hazırlık listesi kısa."], ["Hedef noktanın yerden yüksekliği, zemin tipi, makinenin gireceği açıklığın ölçüsü ve çalışmanın kapalı mı açık alanda mı olacağı. Bu dördü doğru sınıfı ilk seferde belirlememizi sağlar.", "Saha fotoğrafı bu bilgilerin çoğunu tek seferde iletir ve en hızlı yoldur."], ["Bu bilgilerle arayın, sınıfı ve süreyi hemen söyleyelim.", ""]] },
            { s: "Acil kiralamada fiyat farklı mı?", c: [["Aciliyet ayrı bir kalem değildir.", "Fiyat aynı mantıkla hesaplanır."], ["Bedel yine makine sınıfı, süre ve nakliye üzerinden belirlenir. Ancak acil sevkiyatta nakliye planlı bir sevkiyata eklenemiyorsa araç maliyeti tek işe yüklenir; bu, nakliye kalemini artırabilir.", "Kısa süreli acil işlerde nakliye toplam maliyetin önemli bir bölümünü oluşturabilir."], ["Teklifi kalem kalem veriyoruz, aciliyet gizli bir zam olarak yansımaz.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-platform-kiralama-fiyatlari`,
        kategori: "Maliyet",
        basliklar: ["{yer} Platform Kiralama Fiyatlarını Ne Belirler?", "{yer}'de Platform Kiralama Maliyeti Nasıl Hesaplanır?", "Platform Kiralama Fiyatları — {yer} Rehberi"],
        ozetler: ["{ilIfade} platform kiralama bedelini belirleyen kalemler: metraj, süre, nakliye, operatör. Her birinin maliyete etkisi.", "Fiyat sorusuna tek rakamla cevap verilemez. {yer} için maliyeti belirleyen değişkenleri ve nerede tasarruf edilebileceğini açıklıyoruz.", "{yer} bölgesinde platform kiralarken bütçeyi etkileyen faktörler ve teklif okuma rehberi."],
        girisAcilis: ["Platform kiralama fiyatı tek bir rakam değildir; iş tanımına göre şekillenen birkaç kalemin toplamıdır.", "{ilIfade} en sık gelen soru fiyat. Ancak sağlıklı cevap ancak iş tanımı netleştiğinde verilebilir.", "Kiralama bedeli dört ana kalemden oluşur ve bunların her biri farklı ölçüde değişkendir."],
        girisGovde: ["Bu kalemler: makine metrajı ve sınıfı, kiralama süresi, teslimat mesafesi ve nakliye organizasyonu, operatörlü veya operatörsüz tercih.", "Sürpriz maliyet çıkmaması için teklifi kalem kalem ayrıştırılmış olarak vermek gerekir — nakliye kiralama bedelinin içinde gizlenmemelidir.", "Bu kalemlerin bazısında tasarruf mümkündür (süre planlaması), bazısında değildir (metraj — işin gerektirdiği yükseklik pazarlık konusu olamaz)."],
        girisKapanis: ["Aşağıda her kalemi ayrı ayrı ele alıyoruz.", "{merkez} için bu kalemlerin nasıl işlediğini açıklıyoruz.", "Nerede tasarruf edilebileceğini ve nerede edilemeyeceğini aşağıda bulabilirsiniz."],
        bolumler: [
            { baslik: ["Süre en belirleyici kalem", "Kiralama süresinin etkisi", "Günlük mü haftalık mı?"],
              p1: ["Süre uzadıkça günlük birim maliyet belirgin şekilde düşer. Üç günlük bir iş için günlük tarife yerine haftalık paket çoğu zaman daha ekonomiktir — bu, en kolay ve en büyük tasarruf kalemidir.", "Kiralama süresi maliyeti doğrusal etkilemez: haftalık ve aylık paketlerde günlük birim bedel kademeli olarak azalır.", "İşin gerçek süresini baştan doğru tahmin etmek bütçe açısından kritiktir; kısa süreyle başlayıp uzatmak, uzun süreyle başlayıp erken iade etmekten hemen her zaman avantajlıdır."],
              p2: ["Uzun süreli kiralamalarda (1 ay ve üzeri) periyodik bakım planı da sözleşmeye eklenir; bu, makine duruşu riskini azaltarak dolaylı bir maliyet avantajı sağlar.", "Erken iade koşulları sözleşmede tanımlıdır: minimum süre dolmadan yapılan iadelerde minimum süre bedeli geçerli olur.", "Proje süresi belirsizse teklifte hem kısa hem uzun süre senaryosunu karşılaştırmalı istemek faydalıdır."] },
            { baslik: ["Nakliye ayrı bir kalem", "Teslimat maliyeti", "Sevkiyat bedeli"],
              p1: ["Nakliye bedeli mesafeye, makine ağırlığına ve gereken araç tipine göre değişir. Küçük akülü makineler standart araçla, ağır arazi makineleri lowbed ile sevk edilir — aradaki maliyet farkı belirgindir.", "{merkez} içi teslimatlarda nakliye kalemi düşük kalır; bölge dışı ve ağır makine sevkiyatlarında lowbed organizasyonu gerektiği için bedel artar.", "Nakliyeyi teklifte ayrı satır olarak görmek önemlidir; kiralama bedeline gömülmüş bir nakliye kalemi karşılaştırma yapmayı imkânsız kılar."],
              p2: ["Aynı bölgeye eşzamanlı birden fazla makine gidiyorsa nakliye maliyeti paylaştırılabilir — birden fazla makine ihtiyacınız varsa bunu baştan belirtin.", "İade nakliyesi ayrı bir hizmettir; gidiş ve dönüş kalemleri teklifte ayrıştırılmış olarak yer alır.", "{ilIfade} düzenli sevkiyat hattımız olan noktalarda nakliye avantajı oluşur."] },
            { baslik: ["Metraj ve sınıf", "Makine seçiminin maliyete etkisi", "Gereğinden büyük makine tuzağı"],
              p1: ["Metraj yükseldikçe hem kiralama hem nakliye bedeli artar. Bu yüzden \"ne olur ne olmaz\" diyerek bir üst sınıfa çıkmak, çoğu zaman gereksiz maliyet demektir.", "Doğru metrajı belirlemek için hedef noktanın yerden yüksekliğini ölçüp üzerine ~2 metre uzanma payı eklemek yeterlidir; bu hesap yapılmadan seçilen makine ya yetersiz ya gereğinden büyük olur.", "Sınıf farkı da maliyeti etkiler: aynı yükseklikte makaslı platform, eklemli platformdan belirgin şekilde ekonomiktir. Engel yoksa eklemli seçmek gereksiz harcamadır."],
              p2: ["Kapasite de bir maliyet kalemidir: 320 kg ve üzeri sınıflar 230 kg sınıflardan pahalıdır. Sepette gerçekte ne taşınacağı hesaplanmadan yüksek kapasite seçmek bütçeyi şişirir.", "Akülü ve dizel arasındaki fiyat farkı sınıfa göre değişir; ancak ortam kapalıysa bu bir tercih değil zorunluluktur.", "Teklif alırken bir alt ve bir üst sınıfı da sormak, doğru yerde olup olmadığınızı görmenizi sağlar."] },
        ],
        sorular: [
            { s: "{yer} bölgesinde günlük platform kiralama ne kadar?", c: [["Tek bir rakam vermek yanıltıcı olur.", "Bedel iş tanımına göre değişir."], ["Günlük fiyat makine sınıfına ve metraja göre belirgin şekilde farklılaşır; ayrıca nakliye ve operatör tercihi toplam maliyeti etkiler. Aynı gün için 8 metre akülü makaslı ile 43 metre teleskopik bomun bedeli kıyaslanamaz.", "Kısa süreli işlerde nakliye kalemi toplam maliyetin önemli bir bölümünü oluşturabilir — bu yüzden günlük fiyat tek başına yanıltıcıdır."], ["Hedef yükseklik, süre ve saha adresini paylaşın; kalemleri ayrıştırılmış yazılı teklif hazırlayalım.", "{merkez} için net rakamı iş tanımıyla çıkarabiliriz."]] },
            { s: "Uzun süreli kiralamada indirim var mı?", c: [["Evet, süre uzadıkça günlük birim maliyet düşer.", "Uzun süreli kiralamada tarife kademeli olarak iyileşir."], ["Pratikte 1 ay ve üzeri kiralamalar uzun süreli sayılır ve günlük birim bedel bu eşikten sonra belirgin şekilde azalır. 3 ay ve üzeri projelerde ek kademeler değerlendirilebilir.", "Uzun süreli kiralamada periyodik bakım planı da sözleşmeye eklendiği için duruş riski azalır — bu da dolaylı bir tasarruftur."], ["Proje sürenizi paylaşın, hangi tarifenin avantajlı olduğunu karşılaştırmalı gösterelim.", "Süre belirsizse esnek bir yapı kurabiliriz."]] },
            { s: "Teklifte hangi kalemler yer alır?", c: [["Kalemleri ayrıştırılmış veriyoruz.", "Teklif kalem kalem hazırlanır."], ["Yazılı teklifte makine sınıfı ve süre bedeli, nakliye (gidiş/dönüş ayrı), operatör tercihi ve varsa ek hizmetler ayrı satırlar hâlinde gösterilir. Böylece hangi kalemde tasarruf mümkün olduğunu siz de görebilirsiniz.", "Periyodik kontrol belgesi ve temel İSG evrakları bedele dahildir, ayrıca ücretlendirilmez."], ["Sonradan sürpriz maliyet çıkmaması için tüm kalemler baştan yazılıdır.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-osb-platform-kiralama`,
        kategori: "Şehir & Sektör",
        basliklar: ["{yer} Organize Sanayi Bölgelerinde Platform Kiralama", "{sanayi} ve Çevresinde Yüksekte Çalışma Ekipmanı", "{yer} Sanayi Bölgesi Platform Kiralama Rehberi"],
        ozetler: ["{sanayi} gibi sanayi bölgelerindeki tesislerde platform kullanımı: tipik işler, giriş prosedürleri ve makine seçimi.", "{ilIfade} organize sanayi bölgelerinde çalışırken saha giriş kuralları ve İSG evrakları makine seçimi kadar önemlidir.", "{yer} sanayi tesislerinde yüksekte çalışma: hangi makine, hangi belge, hangi planlama?"],
        girisAcilis: ["Organize sanayi bölgelerindeki tesisler, yüksekte çalışma ekipmanı talebinin en yoğun olduğu alanlardır.", "{sanayi} çevresindeki tesislerde platform ihtiyacı genellikle planlı bakım dönemlerinde yoğunlaşır.", "{ilIfade} sanayi tesislerinde platform kullanımı, standart bir şantiyeden farklı kurallara tabidir."],
        girisGovde: ["Bu tesislerin ortak özelliği: yüksek tavanlı üretim holleri, kapalı alan nedeniyle emisyon kısıtı, ve şantiye girişinde talep edilen İSG evrakları.", "Sanayi tesislerinde makine seçimi kadar saha giriş prosedürü de planlanmalıdır — periyodik kontrol belgesi, operatör yeterlilik belgesi ve iş izni formu genellikle zorunludur.", "Üretim devam ederken çalışılacaksa ek kısıtlar devreye girer: gürültü, emisyon, tesis içi trafik ve çalışma alanının bariyerlenmesi."],
        girisKapanis: ["Aşağıda hem makine seçimini hem saha prosedürünü ele alıyoruz.", "{uzm} kapsamındaki tesis işlerinde dikkat edilmesi gerekenler aşağıda.", "Planlama ve evrak süreci için pratik bir kontrol listesi aşağıda."],
        bolumler: [
            { baslik: ["Tesis içi tipik işler", "Sanayi tesislerinde ne yapılır?", "Yaygın uygulamalar"],
              p1: ["Üretim holü tavan tesisatı, havalandırma kanalı bakımı, aydınlatma armatürü değişimi, sprinkler hattı kontrolü ve vinç kirişi bakımı bu tesislerdeki en yaygın işlerdir.", "{sanayi} çevresindeki tesislerde platform talebi genellikle planlı duruş dönemlerinde yoğunlaşır; bu dönemlerde makine müsaitliği kritik hâle gelir.", "Depo ve sevkiyat alanlarında raf sistemi montajı ile çatı altı işleri de düzenli olarak platform gerektirir."],
              p2: ["Üretim holü tavanları çoğunlukla 8-12 metre bandındadır; bu 10-14 metre çalışma yüksekliği sınıfına denk gelir.", "Kapalı alan olduğu için akülü modeller zorunludur — dizel makine havalandırması yetersiz ortamda kullanılamaz.", "Hassas zeminli tesislerde (gıda, ilaç, elektronik) iz bırakmayan lastikli modeller talep edilir."] },
            { baslik: ["Saha giriş prosedürü", "Gereken evraklar", "İSG hazırlığı"],
              p1: ["Sanayi tesislerinin çoğu, makinenin periyodik kontrol belgesini (yeşil etiket) girişte talep eder. Bu belge 6331 Sayılı İSG Kanunu kapsamında yıllık olarak yenilenir ve makineye aittir, firmaya değil.", "Operatörlü kiralamada MYK yeterlilik belgesi de girişte sorulur; operatörsüz kiralamada bu belgeyi işveren sağlamalıdır.", "Bazı tesisler ek olarak iş izni formu, risk değerlendirmesi ve çalışan sigorta kayıtlarını talep eder — bunlar teslimat öncesi hazırlanmalıdır."],
              p2: ["Üretim devam ederken çalışılacaksa çalışma alanının altının bariyerle kapatılması gerekir; düşen alet riski tesis çalışanlarını da etkiler.", "Tesis içi forklift ve transpalet trafiği, makinenin geçeceği güzergâhın çalışma saatlerinde yönlendirilmesini gerektirir.", "Kapalı alanda akü şarj noktası önceden belirlenmelidir; vardiya ortasında şarj için duruş yaşanmaması planlamayla sağlanır."] },
        ],
        sorular: [
            { s: "Tesise giriş için hangi belgeler gerekir?", c: [["Periyodik kontrol belgesi temel şarttır.", "Girişte genellikle iki belge sorulur."], ["Makinenin yıllık periyodik kontrol raporu (yeşil etiket) ve operatörlü kiralamada MYK operatör yeterlilik belgesi standart taleplerdir. Bazı tesisler ek olarak iş izni formu ve risk değerlendirmesi ister.", "Belge tarihinin kiralama dönemini kapsadığını teslimat öncesi kontrol ediyoruz; süresi geçmiş belgeyle makine sahaya çıkmaz."], ["Tesisinizin özel talepleri varsa önceden bildirin, evrakları buna göre hazırlayalım.", "Belgeleri istenirse teslimat öncesi e-posta ile gönderiyoruz."]] },
            { s: "Üretim devam ederken çalışılabilir mi?", c: [["Evet, akülü makinelerle mümkün.", "Planlama yapılırsa mümkün."], ["Akülü platformlar emisyon üretmez ve düşük gürültülüdür; bu sayede üretim durdurulmadan çalışılabilir. Ancak çalışma alanının altının bariyerlenmesi, tesis içi trafiğin yönlendirilmesi ve güzergâhın boşaltılması gerekir.", "Dizel makine bu senaryoda kullanılamaz — kapalı alanda egzoz emisyonu hem sağlık riski hem mevzuata aykırıdır."], ["Saha planınızı teslimat öncesi birlikte gözden geçiriyoruz.", "{sanayi} çevresindeki tesislerde bu düzeni sık kuruyoruz."]] },
            { s: "Planlı duruş dönemlerinde makine bulunur mu?", c: [["Bu dönemler yoğun geçtiği için erken planlama öneriyoruz.", "Müsaitlik tarihe bağlı."], ["Sanayi tesislerinin planlı bakım dönemleri genellikle aynı takvime denk gelir; bu dönemlerde makine talebi yoğunlaşır. Tarih netleştiğinde rezervasyon yapmak müsaitliği güvenceye alır.", "Birden fazla makine gerekiyorsa bunu baştan belirtmek hem müsaitlik hem nakliye planlaması açısından önemlidir."], ["Bakım takviminizi paylaşın, makineleri buna göre planlayalım.", "Erken rezervasyon bu dönemlerde belirleyici oluyor."]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-depo-raf-platform-kiralama`,
        kategori: "Şehir & Sektör",
        basliklar: ["{yer} Depo ve Raf İşlerinde Platform Kullanımı", "{yer}'de Lojistik Depo İçin Platform Seçimi", "Depo Raf Sistemlerinde Yüksekte Çalışma — {yer}"],
        ozetler: ["Depo ve antrepo işlerinde platform seçimi: raf arası genişlik, tavan yüksekliği ve zemin hassasiyeti.", "{ilIfade} lojistik depolarda raf montajı, çatı altı bakım ve sprinkler işleri için doğru makine sınıfı.", "{yer} depo işlerinde makine seçerken koridor genişliği ve şase ölçüsü kararı belirler."],
        girisAcilis: ["Depo ve antrepo yapıları, platform kiralamanın en düzenli talep geldiği alanlardan biridir.", "{ilIfade} lojistik yapılarındaki platform ihtiyacı raf sistemleri, çatı altı ve sevkiyat alanı işlerinden gelir.", "Depo işlerinin platform seçimi açısından kendine özgü bir kısıtı vardır: raf arası koridor genişliği."],
        girisGovde: ["Bu yapılarda tavan yüksekliği genellikle 8-12 metre bandındadır ve zemin betondur — bu iki koşul akülü makaslı platformu en pratik çözüm hâline getirir.", "Ancak makine raf arasına girecekse şase genişliği koridor ölçüsüyle karşılaştırılmalıdır; bu, depo işlerini diğer kapalı alan işlerinden ayıran temel kısıttır.", "Raf üstü işlerde hedef yükseklik hesaplanırken rafın kendi yüksekliği de dikkate alınmalıdır."],
        girisKapanis: ["Aşağıda koridor ölçüsü, metraj ve zemin konularını ele alıyoruz.", "{merkez} çevresindeki depo yapılarında bu kriterlerin uygulanışı aşağıda.", "Depo işlerine özgü planlama noktaları aşağıda."],
        bolumler: [
            { baslik: ["Koridor genişliği kısıtı", "Raf arasına girebilir mi?", "Şase ölçüsü"],
              p1: ["Raf arası koridorlar genellikle forklift manevrasına göre boyutlandırılır ve platform için dar kalabilir. Şase genişliği 0,76-0,81 m olan modeller çoğu koridora girer; 1,19 m ve üzeri modeller için ölçüm şarttır.", "Makine koridora girse bile dönüş yarıçapı yetmeyebilir; koridor sonunda manevra alanı olup olmadığı ayrıca kontrol edilmelidir.", "Dar koridorlarda dikey mast platformlar da değerlendirilebilir — 1 metrenin altındaki şase genişlikleriyle bu sınıf raf araları için tasarlanmıştır."],
              p2: ["Ölçüm yapılırken raflardaki taşma payı da hesaba katılmalıdır; katalogdaki koridor genişliği boş raf ölçüsüdür, dolu rafta palet taşması alanı daraltır.", "Makinenin depoya girişi de ayrı bir kontrol noktasıdır: yükleme kapısı yüksekliği ve rampanın eğimi geçişi engelleyebilir.", "Asma kat veya bodrum üstü döşemede çalışılacaksa döşeme taşıma kapasitesi makine ağırlığıyla karşılaştırılmalıdır."] },
            { baslik: ["Zemin ve iz bırakma", "Depo zemininde dikkat", "Lastik seçimi"],
              p1: ["Depo ve antrepo zeminleri genellikle epoksi veya perdahlı betondur. Bu yüzeylerde standart siyah lastik temizlenmesi güç izler bırakır; iz bırakmayan beyaz dolgu lastikli modeller tercih edilmelidir.", "Gıda ve ilaç depolarında iz bırakmayan lastik çoğu zaman bir tercih değil, tesis kuralıdır.", "Soğuk hava deposu gibi özel ortamlarda makine ve akü performansı düşük sıcaklıktan etkilenir; bu durum önceden bildirilmelidir."],
              p2: ["Yükleme rampası çevresindeki kot farkları çukur önleme sisteminin devrede olmasını zorunlu kılar.", "Depo içi forklift trafiği çalışma alanının bariyerlenmesini gerektirir — düşen alet riski hem çalışanları hem stoğu etkiler.", "Sprinkler hattı çevresinde çalışırken tesisin yangın sistemi sorumlusuyla koordinasyon gerekir."] },
        ],
        sorular: [
            { s: "Raf arasına giren platform var mı?", c: [["Evet, dar şaseli modeller mevcut.", "Koridor genişliğine bağlı."], ["Şase genişliği 0,76-0,81 m olan modeller çoğu depo koridoruna girer. Daha dar geçişler için dikey mast platformlar değerlendirilir — bu sınıf 1 metrenin altındaki genişlikleriyle raf araları için tasarlanmıştır.", "Koridor genişliğini dolu raf üzerinden ölçmek gerekir; palet taşması katalogdaki boş raf ölçüsünü daraltır."], ["Koridor ölçünüzü paylaşın, giren modelleri gösterelim.", "{merkez} depo işlerinde bu ölçümü teslimat öncesi teyit ediyoruz."]] },
            { s: "Depo tavanı için hangi metraj gerekir?", c: [["Tavan yüksekliğine ~2 metre eklemek gerekir.", "Hesap basit."], ["Depo tavanları çoğunlukla 8-12 metre bandındadır; bu da 10-14 metre çalışma yüksekliği sınıfına denk gelir. Raf üstü işlerde ise rafın kendi yüksekliği değil, ulaşılacak noktanın yerden yüksekliği esastır.", "Çatı makas ve sprinkler işlerinde hedef tavanın kendisi olduğu için tavan yüksekliği + 2 metre formülü doğrudan uygulanır."], ["Tavan yüksekliğini ölçüp paylaşın, sınıfı netleştirelim.", ""]] },
            { s: "Nakliye ve teslimat nasıl planlanır?", c: [["Depo giriş ölçüleri teslimat planını belirler.", "Sevkiyat öncesi ölçü teyidi yapılır."], ["Makine lowbed veya standart araçla getirilir; deponun yükleme rampası ve kapı yüksekliği araç seçimini etkiler. Rampadan indirme mümkün değilse vinçli indirme planlanır.", "Teslimat saati depo operasyonuna göre ayarlanır — sevkiyat yoğunluğunun düşük olduğu saatler tercih edilir."], ["Depo giriş fotoğrafı paylaşırsanız sevkiyatı buna göre planlarız.", ""]] },
        ],
    },
    {
        slug: (il) => `${slugla(il)}-teleskopik-platform-kiralama`,
        kategori: "Ürün Rehberi",
        basliklar: ["{yer} Teleskopik Platform Kiralama: Uzun Erişim", "{yer}'de Teleskopik Platform Ne Zaman Tercih Edilir?", "Teleskopik Platform Kiralama — {yer}"],
        ozetler: ["Açık sahada uzak bir noktaya ulaşmak gerektiğinde teleskopik bom en verimli çözümdür. {yer} işlerinde bu sınıfın yeri.", "{ilIfade} teleskopik platform: en uzun yatay erişim, en yüksek metraj. Ne zaman gerekir, ne zaman gereksiz?", "Teleskopik ve eklemli platform arasındaki fark ve {yer} sahalarında seçim kriterleri."],
        girisAcilis: ["Teleskopik platformun bomu iç içe geçmiş bölümlerden oluşur ve tek doğrultuda uzar.", "{ilIfade} teleskopik platform, açık sahada mesafenin uzun olduğu işlerde devreye girer.", "Teleskopik bom, aynı yükseklik sınıfında en uzun yatay erişimi sağlayan makine tipidir."],
        girisGovde: ["Engel aşma kabiliyeti eklemli platforma göre sınırlıdır; buna karşılık aynı sınıfta belirgin şekilde daha uzağa ulaşır.", "Bom tek parça hâlinde uzadığı için altından veya arkasından dolaşma imkânı yoktur — engel varsa eklemli sınıfa geçmek gerekir.", "Bu sınıf yüksek metrajlarda (26 m ve üzeri) hâkimdir; makaslı ve eklemli platformlar bu yüksekliklere genellikle çıkamaz."],
        girisKapanis: ["Aşağıda {merkez} çevresindeki tipik kullanım alanlarını ve seçim kriterlerini ele alıyoruz.", "{uzm} kapsamındaki işlerde bu sınıfın nasıl konumlandığını açıklıyoruz.", "Hangi durumda teleskopik, hangi durumda eklemli seçilmeli — aşağıda."],
        bolumler: [
            { baslik: ["Nerede kullanılır?", "Tipik iş alanları", "Uygulama alanları"],
              p1: ["Köprü altı bakımları, geniş açıklıklı hangar ve stadyum işleri, enerji nakil hattı yakını kontrollü çalışmalar ve yüksek dış cephe uygulamaları bu sınıfın alanıdır.", "{ilIfade} teleskopik platform en çok açık sahada, engel bulunmayan ama uzak noktalara erişim gereken işlerde kullanılır.", "Tersane, silo, çimento tesisi ve rüzgâr santrali gibi 40 metre üzeri erişim gerektiren projelerde bu sınıf zorunlu hâle gelir."],
              p2: ["Yüksek metrajlarda rüzgâr sınırı kritik bir kısıt olur: çoğu makine 12,5 m/s (yaklaşık 45 km/s) rüzgâra kadar sertifikalıdır ve yerdeki rüzgâr hızı 30-40 metredekinden belirgin şekilde düşüktür.", "Sepette büyük yüzeyli malzeme (levha, pano, cam) taşınıyorsa etkin rüzgâr sınırı belgede yazandan daha aşağıdadır.", "Yüksek metrajda makine ağırlığı 20 tonu aşabilir; nakliye lowbed ile yapılır ve zemin taşıma kapasitesi ayrıca kontrol edilir."] },
            { baslik: ["Teleskopik mi eklemli mi?", "Sınıf karşılaştırması", "Karar kriteri"],
              p1: ["Karar tek soruya bakar: arada aşılması gereken bir engel var mı? Varsa eklemli, yoksa teleskopik. Engel yokken eklemli seçmek gereksiz maliyet, engel varken teleskopik seçmek ise işin yapılamaması demektir.", "İki sınıf farklı problemleri çözer: eklemli engel aşar, teleskopik uzağa ulaşır. Sahayı tanımadan bu ayrım yapılamaz.", "Aynı yükseklikte teleskopik bom daha uzağa ulaşır ama engelin arkasına dolaşamaz; eklemli tersini yapar."],
              p2: ["Her iki sınıf da bom tipidir; tam vücut emniyet kemeri ve kısa lanyard kullanımı zorunludur.", "Bom tipi makinelerde catapult (fırlama) riski nedeniyle kemer kuralı kapalı alanda da geçerlidir.", "Teslimat öncesi çalışma zarfı diyagramı üzerinden hedef noktanın ulaşılabilirliği doğrulanır."] },
        ],
        sorular: [
            { s: "{yer} bölgesinde en yüksek kaç metreye çıkabiliyorsunuz?", c: [["Filomuzdaki metraj aralığı ürün sayfalarımızda listelidir.", "Yükseklik ihtiyacınıza göre sınıf öneriyoruz."], ["Teleskopik sınıfta 22, 28, 43 ve 58 metre bantları bulunuyor; hangisinin uygun olduğu hedef yüksekliğe ve sahanın erişim koşullarına bağlı.", "Yüksek metrajlarda makine ağırlığı ve nakliye planı da seçimi etkiler."], ["{merkez} için müsaitliği tarih vererek sorabilirsiniz.", "Hedef yüksekliği paylaşın, uygun sınıfı gösterelim."]] },
            { s: "Rüzgârlı havada çalışılabilir mi?", c: [["Belirli bir sınıra kadar evet.", "Rüzgâr hızına bağlı."], ["Yükseltici platformların çoğu açık alanda 12,5 m/s rüzgâra kadar sertifikalıdır. Ancak yerdeki rüzgâr hızı çalışma yüksekliğindekinden düşüktür; karar yükseklikteki ölçüme göre verilmelidir.", "Sepette geniş yüzeyli malzeme varsa etkin sınır daha aşağıdadır çünkü rüzgâr yüzey alanıyla birlikte artan bir devirme momenti yaratır."], ["Makinenin kendi teknik belgesindeki sınır esastır.", "Şüpheli durumda çalışma durdurulmalıdır."]] },
        ],
        urun: "teleskopik-platform-22m-kiralama",
    },
    {
        slug: (il) => `${slugla(il)}-forklift-kiralama`,
        kategori: "Ürün Rehberi",
        basliklar: ["{yer} Forklift Kiralama: Kapasite ve Zemin Seçimi", "{yer}'de Forklift Kiralarken Nelere Dikkat Edilir?", "Forklift Kiralama Rehberi — {yer}"],
        ozetler: ["{ilIfade} forklift kiralama: kaldırma kapasitesi, zemin tipi ve güç seçimi üzerine pratik rehber.", "Forklift seçiminde kapasite tek başına yetmez — {yer} sahalarında yük diyagramı, zemin ve mast yüksekliği birlikte değerlendirilir.", "{yer} bölgesinde forklift kiralama: dizel mi akülü mü, hangi tonaj, hangi mast?"],
        girisAcilis: ["Forklift, çatallarıyla paletlenmiş yükü kaldırıp taşıyan ve istifleyen bir iş makinesidir.", "{ilIfade} forklift talebi ağırlıklı olarak depo içi istifleme ve saha yükleme işlerinden gelir.", "Forklift seçiminde iki temel ölçü vardır: kaldırma kapasitesi ve maksimum kaldırma yüksekliği."],
        girisGovde: ["Ancak katalogdaki kapasite değeri, yükün ağırlık merkezi standart mesafedeyken geçerlidir; uzun veya dengesiz yüklerde gerçek kapasite belirgin şekilde düşer.", "Kapasite seçilirken yük diyagramı kontrol edilmelidir — bu, en sık atlanan ve en pahalıya mal olan ayrıntıdır.", "Zemin tipi de belirleyicidir: kapalı alanda emisyon nedeniyle akülü model zorunludur, açık ve engebeli sahada dizel gerekir."],
        girisKapanis: ["Aşağıda kapasite hesabını ve {merkez} çevresindeki tipik kullanım senaryolarını ele alıyoruz.", "{uzm} kapsamındaki işlerde forklift seçim kriterlerini açıklıyoruz.", "Doğru tonajı ve güç tipini belirlemenin yolları aşağıda."],
        bolumler: [
            { baslik: ["Kapasite nasıl seçilir?", "Tonaj hesabı", "Yük diyagramı"],
              p1: ["Katalogda yazan kapasite (örneğin 3 ton), yükün ağırlık merkezi çatal ucundan standart mesafede (genellikle 500 mm) olduğunda geçerlidir. Yük uzunsa veya ağırlık merkezi daha ileridedir, gerçek kapasite düşer.", "Her forkliftin bir yük diyagramı vardır: kaldırma yüksekliği arttıkça ve ağırlık merkezi uzaklaştıkça taşınabilir yük azalır. Bu diyagram makine üzerinde bulunur.", "Taşınacak yükün ağırlığı kadar boyutu da önemlidir; iki farklı yük aynı ağırlıkta olsa bile farklı forklift sınıfı gerektirebilir."],
              p2: ["Kaldırma yüksekliği ikinci kritik ölçüdür. Depo raf sistemine istifleme yapılacaksa en üst raf seviyesi ve mast yüksekliği karşılaştırılmalıdır.", "Kapalı alanda mast yüksekliği bir de tavan kısıtına takılır: makine kapıdan geçecek ama içeride tam yükseğe çıkabilecek mi?", "Serbest kaldırma (free lift) özelliği, alçak tavanlı alanlarda mast uzamadan yük kaldırabilmeyi sağlar."] },
            { baslik: ["Dizel mi akülü mü?", "Güç tipi seçimi", "Ortam kısıtı"],
              p1: ["Akülü forkliftler emisyon üretmez ve sessizdir; gıda, ilaç ve perakende tesislerinde zorunlu tercihtir. Dizel modeller daha güçlüdür ve açık sahada, engebeli zeminde çalışır.", "{ilIfade} kapalı depo işlerinde akülü, açık saha yükleme işlerinde dizel model tercih edilir.", "LPG'li modeller ara bir çözümdür: dizele göre daha temiz, akülüye göre daha uzun kesintisiz çalışma."],
              p2: ["Akülü modellerde şarj planı önemlidir: vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası önceden planlanmalıdır.", "Dizel forklift kapalı alanda kullanılamaz — havalandırması yetersiz ortamda egzoz emisyonu ciddi sağlık riskidir.", "Zemin tipi lastik seçimini de belirler: hassas zeminlerde iz bırakmayan lastik gerekir."] },
        ],
        sorular: [
            { s: "{yer} bölgesinde kaç tonluk forklift kiralayabilirim?", c: [["Filomuzda farklı tonaj sınıfları bulunuyor.", "Tonaj ihtiyacınıza göre seçim yapıyoruz."], ["1-3 ton sınıfı depo içi genel istifleme, 3-5 ton orta ağırlıklı saha işleri, 5-10 ton ise ağır yük ve konteyner işleri için kullanılır. Doğru sınıf taşınacak yükün ağırlığı ve boyutuyla belirlenir.", "Yük diyagramı nedeniyle nominal kapasitenin tamamı her koşulda kullanılamaz; bu yüzden bir üst sınıfa çıkmak bazen gerekli olur."], ["Taşınacak yükün ağırlığı ve boyutunu paylaşın, uygun tonajı belirleyelim.", "{merkez} için müsait sınıfları gösterelim."]] },
            { s: "Forklift operatörü de sağlıyor musunuz?", c: [["Operatörlü ve operatörsüz kiralama yapılır.", "İki seçenek de mevcut."], ["Forklift kullanımı için operatör yeterlilik belgesi gereklidir. Operatörlü kiralamada bu belgeyi biz sağlarız; operatörsüz kiralamada belgeli personel bulundurma sorumluluğu işverendedir.", "Operatörsüz tercih ediyorsanız saha İSG planınızın forklift trafiğini kapsaması da gerekir."], ["Tarih vererek operatör müsaitliğini sorabilirsiniz.", "İş süresine göre hangisinin ekonomik olduğunu birlikte değerlendirelim."]] },
        ],
        urun: "dizel-forklift-3-5-ton-kiralama",
    },
];

// Kompakt şablonlar ana listeye eklenir.
KOMPAKT.forEach((k, i) => SABLONLAR.push(kompaktUret(k, i)));

/**
 * Bölgesel blog yazıları — her domain kendi il/ilçe adıyla üretilir.
 */
export function bolgeselBloglar(site: SiteIcerik): BlogYazisi[] {
    const c = ctx(site);
    return SABLONLAR.map((sab, i) => {
        const slug = sab.slugTaban(c.yer);
        return {
            slug,
            kategori: sab.kategori,
            baslik: sab.baslik(site),
            ozet: sab.ozet(site),
            gorsel: GORSELLER[i % GORSELLER.length],
            gorselAlt: GORSEL_ALT[i % GORSEL_ALT.length],
            tarih: "2026-08-06",
            okuma: 6,
            giris: sab.giris(site),
            bolumler: sab.bolumler(site),
            sss: sab.sss(site),
            ...(sab.ilgiliUrunSlug
                ? { ilgiliUrun: { baslik: "İlgili makine sınıfı", slug: sab.ilgiliUrunSlug } }
                : {}),
        };
    });
}

export function bolgeselBlogSayisi(): number {
    return SABLONLAR.length;
}
