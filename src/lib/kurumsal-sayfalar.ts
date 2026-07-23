import type { SiteIcerik } from "@/lib/siteler";
import type { AltSayfa } from "@/lib/alt-sayfalar";

export interface KurumsalSayfa extends AltSayfa {
    indexlenebilir: boolean;
}

export function kurumsalSayfalar(site: SiteIcerik): KurumsalSayfa[] {
    const bilgiSitesi = site.kategori === "egitim" || site.kategori === "rehber";
    const hizmet = bilgiSitesi ? "bilgi ve yönlendirme" : "ekipman kiralama";
    return [
        {
            slug: "hakkimizda",
            baslik: `Hakkımızda | ${site.h1}`,
            aciklama: `${site.h1} hizmet kapsamı, sorumlu işletme, çalışma bölgesi ve teklif süreci hakkında şeffaf bilgiler.`,
            h1: `${site.h1} Hakkında`,
            indexlenebilir: true,
            paragraflar: [
                `${site.h1}, ${site.bolge} için ${hizmet} ihtiyacını doğru ekibe ve doğrulanmış sürece bağlayan ${site.anaSite.ad} tarafından işletilen uzmanlık sitesidir.`,
                `Sitenin odağı ${site.uzmanlik} konusudur. Buradaki bilgiler genel bir katalog oluşturmak için değil; ziyaretçinin ihtiyacını tarif etmesine, doğru seçeneği karşılaştırmasına ve yazılı yanıt almasına yardımcı olmak için hazırlanır.`,
                `Stok, kapasite, teslimat, belge ve fiyat gibi değişken bilgiler kesinmiş gibi yayımlanmaz. Talep tarihi ve saha bilgileri alındıktan sonra güncel uygunluk kontrol edilir; taahhütler yalnız yazılı teklif ve sözleşmede kesinleşir.`,
            ],
            maddeler: [
                { baslik: "İşleten", metin: `${site.anaSite.ad}; iletişim ve talep değerlendirmesinden sorumludur.` },
                { baslik: "Hizmet alanı", metin: site.bolge },
                { baslik: "Uzmanlık", metin: site.uzmanlik },
                { baslik: "Şeffaflık", metin: "Bu site bağımsız bir şube veya farklı bir şirket izlenimi vermez; sorumlu işletmeyi açıkça gösterir." },
            ],
        },
        {
            slug: "iletisim",
            baslik: `İletişim ve Talep Hazırlığı | ${site.h1}`,
            aciklama: `${site.h1} için telefon ve e-posta bilgileri; hızlı ve doğru yanıt için iletilmesi gereken proje ayrıntıları.`,
            h1: "İletişim ve Talep Hazırlığı",
            indexlenebilir: true,
            paragraflar: [
                `${site.bolge} kapsamındaki talebiniz için ${site.telefonGosterim} numaralı hattı arayabilir veya ${site.eposta} adresine yazabilirsiniz.`,
                bilgiSitesi
                    ? "Sorunuzu, görev veya eğitim bağlamını ve yanıt beklediğiniz tarihi yazın. Belgelendirme konusunda nihai yetkili kurumun güncel şartları ayrıca doğrulanmalıdır."
                    : "Hızlı makine eşlemesi için çalışma yüksekliği, yatay erişim, zemin, iç/dış mekân, iş adresi, başlangıç tarihi ve tahmini süreyi birlikte iletin.",
                "İletişim bilgileri yalnız talebi yanıtlamak ve hizmet sürecini yürütmek için kullanılır. İzin verilmeden pazarlama listesine eklenmez.",
            ],
            maddeler: [
                { baslik: "Telefon", metin: site.telefonGosterim },
                { baslik: "E-posta", metin: site.eposta },
                { baslik: "Yanıt kapsamı", metin: "Uygunluk, gerekli ek bilgiler ve sonraki adımlar yazılı biçimde bildirilir." },
                { baslik: "Kesinleşme", metin: "Fiyat, tarih ve kapsam yalnız yazılı teklif veya teyitle kesinleşir." },
            ],
        },
        {
            slug: "teklif-hazirligi",
            baslik: `Teklif Hazırlama | ${site.h1}`,
            aciklama: `${site.h1} için ihtiyaçları eksiksiz tarif etme, seçenekleri karşılaştırma ve yazılı kapsam kontrolü rehberi.`,
            h1: bilgiSitesi ? "Doğru Bilgi Talebi Nasıl Hazırlanır?" : "Doğru Kiralama Teklifi Nasıl Hazırlanır?",
            indexlenebilir: true,
            paragraflar: [
                `Doğru yanıtın ilk koşulu ihtiyacın ölçülebilir biçimde tarif edilmesidir. ${site.uzmanlik} kapsamındaki taleplerde yalnız hizmet adını yazmak yeterli değildir.`,
                bilgiSitesi
                    ? "Kullanıcının rolü, mevcut belge veya deneyim düzeyi, uygulama alanı ve cevaplanması istenen soru belirtilmelidir. Mevzuat ve yetkilendirme şartları tarihe göre değişebildiği için kaynak tarihi kontrol edilmelidir."
                    : "Çalışma yüksekliği ile platform yüksekliğinin farklı olduğu, yatay erişim ve zemin taşıma kapasitesinin model seçimini değiştirdiği unutulmamalıdır. Fotoğraf ve ölçüler yanlış sevkiyat riskini azaltır.",
                "Gelen yanıtta kapsam dışı kalemleri, nakliye veya operatör seçeneğini, belge sorumluluğunu, iptal şartını ve geçerlilik süresini kontrol edin. Sözlü bilgi yerine yazılı teyit isteyin.",
            ],
            maddeler: [
                { baslik: "1. İş tanımı", metin: "Yapılacak işi, hedef noktayı ve erişim engellerini tek paragrafta açıklayın." },
                { baslik: "2. Yer ve zaman", metin: `Adres, saha giriş saatleri, başlangıç tarihi ve tahmini süreyi ekleyin. Bölge: ${site.bolge}.` },
                { baslik: "3. Teknik koşullar", metin: bilgiSitesi ? "Kullanım senaryosu ve yetkinlik hedefini yazın." : "Yükseklik, yatay erişim, zemin, kapı ve koridor ölçülerini ekleyin." },
                { baslik: "4. Yazılı kontrol", metin: "Kapsam, sorumluluk, ücret ve tarih bilgilerini tek belgede doğrulayın." },
            ],
        },
        {
            slug: "gizlilik-politikasi",
            baslik: `Gizlilik Politikası | ${site.h1}`,
            aciklama: `${site.host} ziyaretçi ve iletişim verilerinin hangi amaçlarla işlendiğine ilişkin gizlilik açıklaması.`,
            h1: "Gizlilik Politikası",
            indexlenebilir: false,
            paragraflar: [
                `${site.host} üzerinde iletişim kurduğunuzda paylaştığınız ad, telefon, e-posta ve talep ayrıntıları; talebinizi yanıtlamak, uygunluk değerlendirmek ve hizmet sürecini yürütmek amacıyla işlenebilir.`,
                "Site performansı ve kullanımını ölçmek için sınırlı analitik veriler kullanılabilir. Zorunlu olmayan veriler reklam amacıyla üçüncü taraflara satılmaz. Teknik hizmet sağlayıcılar yalnız hizmetin gerektirdiği ölçüde veri işleyebilir.",
                `Verinizle ilgili erişim, düzeltme veya silme talebinizi ${site.eposta} adresine iletebilirsiniz. Yasal saklama yükümlülükleri ve devam eden sözleşme süreçleri kapsamındaki istisnalar ayrıca değerlendirilir.`,
            ],
        },
        {
            slug: "kullanim-kosullari",
            baslik: `Kullanım Koşulları | ${site.h1}`,
            aciklama: `${site.host} içeriklerinin kapsamı, güncellik sınırı ve yazılı teklif koşulları.`,
            h1: "Site Kullanım Koşulları",
            indexlenebilir: false,
            paragraflar: [
                `Bu sitedeki içerikler ${site.uzmanlik} konusunda ön bilgi sağlar. İçerik, saha keşfi, yetkili kurum görüşü, iş güvenliği planı veya imzalı sözleşmenin yerine geçmez.`,
                "Model, kapasite, stok, teslimat, mevzuat ve fiyat bilgileri zaman içinde değişebilir. Güncel bilgi talep anında yeniden doğrulanır; bağlayıcı kapsam yalnız yazılı teklif ve sözleşmede yer alır.",
                "İçeriklerin kaynak gösterilmeden topluca kopyalanması, yanıltıcı işletme beyanında kullanılması veya güvenlik uyarıları çıkarılarak yeniden yayımlanması kabul edilmez.",
            ],
        },
    ];
}

export function kurumsalSayfaBul(site: SiteIcerik, slug: string) {
    return kurumsalSayfalar(site).find((sayfa) => sayfa.slug === slug);
}
