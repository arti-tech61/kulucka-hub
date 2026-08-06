// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~166 canlı sayfa üretir (85+ domain × sayfa/domain).
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
// "Fırsat" sayfaları: nakliye avantajı ve uzun süreli kiralama fiyat avantajı.
// Blog şablonu ile aynı ilke — sabit 2 konu, her domain'in kendi SiteIcerik
// verisiyle (bolge/uzmanlik/hizmetler/telefon) doldurulur, kopya içerik oluşmaz.
import type { SiteIcerik } from "./siteler";
import type { AltSayfa } from "./alt-sayfalar";
import { varyantSec, cevapNakliye, cevapOdeme, cevapIade , cesitle } from "./varyant";

function bolgeIlk(site: SiteIcerik) {
    return site.bolge.split(",")[0].trim();
}

// "Türkiye geneli" gibi jenerik değerlerde "X bölgesinde" yerine "X genelinde"
// kullanır; şehir adlarında ise güvenli, ek almayan "X bölgesinde" kalıbına döner.
function bolgeIfade(site: SiteIcerik) {
    const ilk = bolgeIlk(site);
    if (/^türkiye/i.test(ilk)) return { ad: "Türkiye", ifade: "Türkiye genelinde" };
    return { ad: ilk, ifade: `${ilk} bölgesinde` };
}

function hizmet(site: SiteIcerik, i: number) {
    return site.hizmetler[i] ?? site.hizmetler[0] ?? site.uzmanlik;
}

function nakliyeSayfasi(site: SiteIcerik): AltSayfa {
    const { ad: bolge, ifade } = bolgeIfade(site);
    const bolgeler = site.bolge.split(",").map((s) => s.trim());
    return {
        slug: "nakliye-avantaji-hizli-teslimat",
        baslik: `${bolge} — Hızlı Nakliye ve Teslimat Avantajı`,
        aciklama: `${ifade} makaslı platform, eklemli platform ve forklift kiralamada nakliye süresi, araç tipi ve teslimat planlaması nasıl işler?`,
        h1: `${bolge} — Nakliye ve Hızlı Teslimat Avantajı`,
        paragraflar: [
            `${ifade.charAt(0).toUpperCase()}${ifade.slice(1)}ki sahalara yakın konumlanmamız, ${bolge} ve çevresindeki işlerde teslimat süresini kısaltıyor. ${hizmet(site, 0)} gibi zaman baskılı işlerde, aracın sahaya ulaşma süresi genellikle işin başlama tarihini belirleyen kritik kalemlerden biridir.`,
            `Nakliye bedeli mesafeye, araç tipine ve makine ölçüsüne göre değişir; bu kalem yazılı teklifte her zaman ayrı satır olarak gösterilir, fiyata gizli şekilde eklenmez. ${site.uzmanlik} kapsamındaki işlerde saha girişi dar veya erişimi kısıtlıysa, bu bilgi teklif öncesinde paylaşıldığında uygun araç ve makine ölçüsü birlikte planlanır.`,
            `${bolgeler.length > 1 ? `${bolgeler.slice(0, -1).join(", ")} ve ${bolgeler[bolgeler.length - 1]}` : bolge} firmalarına aynı gün veya ertesi gün teslimat, araç ve makine uygunluğuna göre değerlendirilir; acil ihtiyaçlarda öncelikli planlama yapılabilir.`,
        ],
        maddeler: [
            { baslik: "Bölgeye yakın konuşlanma", metin: `${ifade.charAt(0).toUpperCase()}${ifade.slice(1)}ki sahalara kısa mesafeden sevkiyat, teslimat süresini kısaltır.` },
            { baslik: "Şeffaf nakliye bedeli", metin: cesitle(site, "firsat-1", "Nakliye kalemi teklifte ayrı satır olarak gösterilir; mesafe ve araç tipine göre hesaplanır.") },
            { baslik: "Saha girişine uygun araç seçimi", metin: cesitle(site, "firsat-2", "Dar geçit veya kısıtlı erişimi olan sahalar için uygun araç ve makine ölçüsü önceden planlanır.") },
            { baslik: "Acil teslimat değerlendirmesi", metin: cesitle(site, "firsat-3", "Araç ve makine uygunluğuna göre aynı gün veya ertesi gün teslimat talep edilebilir.") },
        ],
        sss: [
            { soru: "Nakliye bedeli fiyata dahil mi?", cevap: cevapNakliye(site) },
            { soru: `${bolge} teslimat süresi ne kadar sürer?`, cevap: varyantSec(site, "f-teslim", [
                "Araç ve makine uygunluğuna göre değişir; acil ihtiyaçlarda aynı gün veya ertesi gün teslimat değerlendirilir.",
                `${bolge} hattına düzenli sevkiyatımız olduğu için teslimat çoğunlukla 1-2 iş gününde tamamlanır; acil taleplerde önceliklendirme yapılır.`,
                "Standart planlamada 1-2 iş günü sürer. Makine sahada hazırsa ve nakliye aracı uygunsa aynı gün sevkiyat da mümkündür.",
                "Süre, makine müsaitliği ve nakliye aracı planına bağlıdır. Tarih verdiğinizde kesin teslimat gününü teyit ediyoruz.",
            ]) },
            { soru: "Nakliye sırasında makine sigortalı mı?", cevap: varyantSec(site, "f-sigorta", [
                "Nakliye ve kullanım süresince sigorta kapsamı tedarikçi tarafından sağlanır; detaylar teklifte belirtilir.",
                "Makine sigortası bizim tarafımızdadır; kapsam, muafiyet tutarı ve hasar bildirim süreci sözleşmede yazılı olarak tanımlanır.",
                "Sigorta kiralama paketine dahildir. Ancak hatalı kullanım kaynaklı hasarlar kapsam dışıdır; sınırlar teklifte açıkça yazılır.",
                "Nakliye ve kiralama dönemi sigorta kapsamındadır. Poliçe detaylarını teklif ekinde paylaşıyoruz.",
            ]) },
            { soru: "Dar sahalara nakliye yapılabilir mi?", cevap: varyantSec(site, "f-dar", [
                "Evet, saha ölçüleri önceden paylaşıldığında uygun araç ve makine ölçüsü birlikte planlanır.",
                "Dar sahalar için kompakt şaseli modellerimiz var. Giriş kapısı genişliği ve manevra alanını paylaşırsanız uygun makineyi seçiyoruz.",
                "Mümkün. Kritik olan giriş açıklığı, dönüş yarıçapı ve zemin taşıma kapasitesi; bu üçünü teslimat öncesi teyit ediyoruz.",
                "Evet. Dar erişimli sahalarda küçük araçla sevkiyat veya makinenin sahada montajı gibi alternatifleri değerlendiriyoruz.",
            ]) },
            { soru: "Nakliye ücreti iade ediliyor mu?", cevap: varyantSec(site, "f-iade-nak", [
                "Tek yönlü ve çift yönlü nakliye seçenekleri ve ücretlendirmesi teklif aşamasında netleştirilir.",
                "Nakliye gidiş ve dönüş olarak ayrı ayrı fiyatlandırılır; iade nakliyesini kendiniz organize ederseniz o kalem düşer.",
                "Gidiş-dönüş nakliye tek kalemde de fiyatlandırılabilir, ayrı ayrı da. Hangisinin uygun olduğunu teklifte gösteriyoruz.",
                "İade nakliyesi ayrı bir hizmettir; teklifte gidiş ve dönüş kalemleri ayrıştırılmış olarak yer alır.",
            ]) },
        ],
    };
}

function uzunSureliFiyatSayfasi(site: SiteIcerik): AltSayfa {
    const { ad: bolge, ifade } = bolgeIfade(site);
    return {
        slug: "uzun-sureli-kiralama-fiyat-avantaji",
        baslik: `${bolge} — Uzun Süreli Kiralama Fiyat Avantajı`,
        aciklama: `${ifade} aylık ve uzun süreli platform/forklift kiralamada birim maliyet, ödeme planı ve bakım kapsamı nasıl işler?`,
        h1: `${bolge} — Uzun Süreli Kiralamada Fiyat Avantajı`,
        paragraflar: [
            `Kiralama süresi uzadıkça günlük birim maliyet genellikle düşer; bu yüzden ${hizmet(site, 1)} gibi birden fazla ay sürecek işlerde aylık kiralama, günlük veya haftalık kiralamaya göre toplamda daha ekonomik olabilir.`,
            `${ifade.charAt(0).toUpperCase()}${ifade.slice(1)} uzun süreli kiralanan makineler için periyodik bakım, arıza durumunda ikame makine garantisi ve periyodik kontrol belgesi süreci sözleşme kapsamına dahil edilebilir; bu da işletmenin bakım yükünü azaltır.`,
            `${site.uzmanlik} kapsamındaki kurumsal müşteriler için fatura karşılığı ödeme ve esnek ödeme planı seçenekleri değerlendirilir; kesin oran, talep edilen süre ve makine sınıfına göre yazılı teklifte netleşir.`,
        ],
        maddeler: [
            { baslik: "Süre arttıkça düşen birim maliyet", metin: cesitle(site, "firsat-4", "Aylık kiralamada günlük birim bedel, kısa süreli kiralamaya göre genellikle daha avantajlıdır.") },
            { baslik: "Bakım ve arıza garantisi dahil", metin: cesitle(site, "firsat-5", "Uzun süreli sözleşmelerde periyodik bakım ve ikame makine süreci birlikte planlanabilir.") },
            { baslik: "Esnek ödeme planı", metin: cesitle(site, "firsat-6", "Kurumsal müşteriler için fatura karşılığı ve dönemsel ödeme seçenekleri değerlendirilir.") },
            { baslik: "Süre uzatma ve erken iade", metin: cesitle(site, "firsat-7", "İhtiyaç değişirse süre uzatma veya erken iade koşulları sözleşmede baştan netleştirilir.") },
        ],
        sss: [
            { soru: "Uzun süreli kiralama kaç aydan itibaren başlar?", cevap: varyantSec(site, "f-uzun", [
                "Genellikle 1 aylık kiralama uzun süreli kabul edilir; kesin eşik ve indirim oranı talep edilen makine ve süreye göre belirlenir.",
                "Pratikte 1 ay ve üzeri kiralamalar uzun süreli sayılır. Günlük birim maliyet bu eşikten sonra belirgin şekilde düşer.",
                "Uzun süreli tarife çoğunlukla aylık kiralamada devreye girer; 3 ay ve üzeri projelerde ek kademeler değerlendirilebilir.",
                "Eşik makine sınıfına göre değişmekle birlikte genelde 30 gündür. Proje sürenizi paylaşın, karşılaştırmalı gösterelim.",
            ]) },
            { soru: "Aylık kiralamada bakım kime aittir?", cevap: varyantSec(site, "f-bakim", [
                "Periyodik bakım genellikle kiralayan firma tarafından planlanır; detay sözleşmede belirtilir.",
                "Uzun süreli kiralamalarda periyodik bakım bizim yükümlülüğümüzdedir ve bakım takvimi sözleşmeye eklenir.",
                "Bakım sorumluluğu bize aittir; planlı bakımlar iş programınıza en az duruş yaratacak şekilde takvimlenir.",
                "Rutin bakım ve yağ/filtre değişimi kiralama paketine dahildir. Günlük kontroller ise kullanıcı sorumluluğundadır.",
            ]) },
            { soru: "Süre ortasında makine değiştirilebilir mi?", cevap: varyantSec(site, "f-degisim", [
                "İhtiyaç değişirse farklı sınıfa geçiş değerlendirilebilir; bu durum önceden bildirilmelidir.",
                "Evet, makine sınıfı değişimi mümkündür. Müsaitlik ve fiyat farkı gözden geçirilir; talebi birkaç gün önceden iletmeniz yeterli.",
                "Proje ilerledikçe ihtiyaç değişebiliyor; bu durumda makine değişimi planlanabilir. Nakliye ve tarife farkı ayrıca hesaplanır.",
                "Sınıf değişikliği talebi değerlendirmeye alınır. Filo müsaitliğine bağlı olarak genelde birkaç gün içinde uygulanabiliyor.",
            ]) },
            { soru: "Uzun süreli kiralamada ön ödeme gerekir mi?", cevap: cevapOdeme(site) },
            { soru: "Erken sonlandırmada ceza var mı?", cevap: cevapIade(site) },
        ],
    };
}

export function firsatSayfalari(site: SiteIcerik): AltSayfa[] {
    return [nakliyeSayfasi(site), uzunSureliFiyatSayfasi(site)];
}
