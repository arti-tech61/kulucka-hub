// "Fırsat" sayfaları: nakliye avantajı ve uzun süreli kiralama fiyat avantajı.
// Blog şablonu ile aynı ilke — sabit 2 konu, her domain'in kendi SiteIcerik
// verisiyle (bolge/uzmanlik/hizmetler/telefon) doldurulur, kopya içerik oluşmaz.
import type { SiteIcerik } from "./siteler";
import type { AltSayfa } from "./alt-sayfalar";

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
            { baslik: "Şeffaf nakliye bedeli", metin: "Nakliye kalemi teklifte ayrı satır olarak gösterilir; mesafe ve araç tipine göre hesaplanır." },
            { baslik: "Saha girişine uygun araç seçimi", metin: "Dar geçit veya kısıtlı erişimi olan sahalar için uygun araç ve makine ölçüsü önceden planlanır." },
            { baslik: "Acil teslimat değerlendirmesi", metin: "Araç ve makine uygunluğuna göre aynı gün veya ertesi gün teslimat talep edilebilir." },
        ],
        sss: [
            { soru: "Nakliye bedeli fiyata dahil mi?", cevap: "Hayır, mesafe ve araç tipine göre değişir; yazılı teklifte ayrı kalem olarak gösterilir." },
            { soru: `${bolge} teslimat süresi ne kadar sürer?`, cevap: "Araç ve makine uygunluğuna göre değişir; acil ihtiyaçlarda aynı gün veya ertesi gün teslimat değerlendirilir." },
            { soru: "Nakliye sırasında makine sigortalı mı?", cevap: "Nakliye ve kullanım süresince sigorta kapsamı tedarikçi tarafından sağlanır; detaylar teklif ile birlikte paylaşılır." },
            { soru: "Dar sahalara nakliye yapılabilir mi?", cevap: "Evet, saha ölçüleri önceden paylaşıldığında uygun araç ve makine ölçüsü birlikte planlanır." },
            { soru: "Nakliye ücreti iade ediliyor mu?", cevap: "Tek yönlü ve çift yönlü nakliye seçenekleri ve ücretlendirmesi teklif aşamasında netleştirilir." },
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
            { baslik: "Süre arttıkça düşen birim maliyet", metin: "Aylık kiralamada günlük birim bedel, kısa süreli kiralamaya göre genellikle daha avantajlıdır." },
            { baslik: "Bakım ve arıza garantisi dahil", metin: "Uzun süreli sözleşmelerde periyodik bakım ve ikame makine süreci birlikte planlanabilir." },
            { baslik: "Esnek ödeme planı", metin: "Kurumsal müşteriler için fatura karşılığı ve dönemsel ödeme seçenekleri değerlendirilir." },
            { baslik: "Süre uzatma ve erken iade", metin: "İhtiyaç değişirse süre uzatma veya erken iade koşulları sözleşmede baştan netleştirilir." },
        ],
        sss: [
            { soru: "Uzun süreli kiralama kaç aydan itibaren başlar?", cevap: "Genellikle 1 aylık kiralama uzun süreli kabul edilir; kesin eşik ve indirim oranı talep edilen süreye göre teklifte belirtilir." },
            { soru: "Aylık kiralamada bakım kime aittir?", cevap: "Periyodik bakım genellikle kiralayan firma tarafından planlanır; detay sözleşmede belirtilir." },
            { soru: "Süre ortasında makine değiştirilebilir mi?", cevap: "İhtiyaç değişirse farklı sınıfa geçiş değerlendirilebilir; bu durum önceden bildirilmelidir." },
            { soru: "Uzun süreli kiralamada ön ödeme gerekir mi?", cevap: "Ödeme planı süre ve tutara göre teklif aşamasında belirlenir; kurumsal müşteriler için fatura karşılığı seçenekler değerlendirilebilir." },
            { soru: "Erken sonlandırmada ceza var mı?", cevap: "Erken iade ve sözleşme fesih koşulları imzalanan kiralama sözleşmesinde açıkça tanımlanır; olası kesinti ücreti varsa önceden bildirilir." },
        ],
    };
}

export function firsatSayfalari(site: SiteIcerik): AltSayfa[] {
    return [nakliyeSayfasi(site), uzunSureliFiyatSayfasi(site)];
}
