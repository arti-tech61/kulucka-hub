import type { HaberSitesi } from "@/lib/haber-config";

export interface HaberKurumsalSayfa {
    slug: string;
    baslik: string;
    aciklama: string;
    h1: string;
    paragraflar: string[];
    maddeler?: { baslik: string; metin: string }[];
    indexlenebilir: boolean;
}

export function haberKurumsalSayfalar(site: HaberSitesi): HaberKurumsalSayfa[] {
    const marka = `${site.adOn} ${site.adSon}`;
    return [
        {
            slug: "hakkimizda",
            baslik: `Hakkımızda | ${marka}`,
            aciklama: `${marka} yayın amacı, kapsamı, editoryal yaklaşımı ve okuyucu düzeltme süreci.`,
            h1: `${marka} Hakkında`,
            indexlenebilir: true,
            paragraflar: [
                `${marka}, ${site.slogan.toLocaleLowerCase("tr-TR")} alanında açıklayıcı haber, rehber ve analiz yayımlayan tematik bir dijital yayındır.`,
                "Yayın, ticari kiralama sitelerinden ayrı bir editoryal kimlikle çalışır. Haber başlıkları reklam veya bağlantı ağı oluşturmak için seçilmez; okuyucunun bölgesel gelişmeyi ya da güvenlik konusunu anlamasına yardımcı olacak bağlam sunmayı amaçlar.",
                "İçeriklerde kesinleşmemiş stok, fiyat, yatırım veya mevzuat iddiası kesin bilgi gibi sunulmaz. Zamanla değişebilen bilgilerde tarih belirtilir; okuyucu nihai karar öncesinde resmî ve birincil kaynağı kontrol etmeye yönlendirilir.",
            ],
            maddeler: [
                { baslik: "Yayın alanı", metin: site.slogan },
                { baslik: "Düzeltme", metin: "Maddi hata bildirimleri incelenir; doğrulanan düzeltme içerikte açık biçimde uygulanır." },
                { baslik: "Ticari ayrım", metin: "Sponsorlu veya ticari içerik varsa okuyucudan gizlenmez; haber görünümünde örtülü reklam yayımlanmaz." },
            ],
        },
        {
            slug: "iletisim",
            baslik: `İletişim | ${marka}`,
            aciklama: `${marka} için haber önerisi, düzeltme, görüş ve gizlilik taleplerinin iletişim kanalı.`,
            h1: "Yayınla İletişim",
            indexlenebilir: true,
            paragraflar: [
                "Haber önerisi, maddi hata bildirimi, görüş hakkı veya içerik kullanım talebi için arti.tech61@gmail.com adresine yazabilirsiniz.",
                "İletinizde ilgili sayfanın bağlantısını, düzeltilmesini istediğiniz ifadeyi ve mümkünse birincil kaynak belgesini paylaşın. Kimlik veya ticari sır içeren belgeleri gereksiz yere göndermeyin.",
                "Reklam talebi editoryal değerlendirmeyi etkilemez. Ücretli içerik yayımlanması hâlinde bunun niteliği okuyucuya açıkça belirtilir.",
            ],
            maddeler: [
                { baslik: "E-posta", metin: "arti.tech61@gmail.com" },
                { baslik: "Düzeltme bildirimi", metin: "URL, hatalı bölüm, doğru bilgi ve doğrulanabilir kaynak ekleyin." },
                { baslik: "Yanıt hakkı", metin: "Haberde adı geçen kişi ve kuruluşların somut yanıtları editoryal incelemeye alınır." },
            ],
        },
        {
            slug: "yayin-ilkeleri",
            baslik: `Yayın İlkeleri ve Kaynak Politikası | ${marka}`,
            aciklama: `${marka} doğrulama, kaynak, düzeltme, çıkar çatışması ve yapay zekâ kullanım ilkeleri.`,
            h1: "Yayın İlkeleri ve Kaynak Politikası",
            indexlenebilir: true,
            paragraflar: [
                "Birincil kaynaklara öncelik verilir: mevzuatta Resmî Gazete ve yetkili kurumlar, şirket açıklamalarında şirketin resmî kanalları, istatistikte veri üreticisi kurum esas alınır. İkincil kaynak kullanıldığında bilgi birden fazla işaretle karşılaştırılır.",
                "Başlık, içerikte kanıtlanmayan bir sonucu kesinmiş gibi söylemez. Tahmin, yorum ve doğrulanmış olgu birbirinden ayrılır. Güvenlik ve hukuk içerikleri kişiye özel danışmanlık değildir; uygulama öncesinde güncel mevzuat ve yetkili uzman görüşü gerekir.",
                "Üretken yapay zekâ, taslak düzenleme veya dil kontrolünde kullanılabilir; kaynak uydurmak, sahte alıntı üretmek ya da insan kontrolü olmadan toplu içerik yayımlamak için kullanılmaz. Yayımlanan metnin sorumluluğu editoryal süreçtedir.",
                "Doğrulanmış maddi hata sessizce korunmaz. Düzeltme, içerik anlamını değiştiriyorsa güncelleme notuyla; küçük yazım düzeltmeleriyse metin içinde uygulanır.",
            ],
        },
        {
            slug: "gizlilik-politikasi",
            baslik: `Gizlilik Politikası | ${marka}`,
            aciklama: `${marka} ziyaretçi, analitik ve iletişim verilerinin işlenmesine ilişkin açıklama.`,
            h1: "Gizlilik Politikası",
            indexlenebilir: false,
            paragraflar: [
                "Siteyi ziyaret ettiğinizde güvenlik, performans ve toplu kullanım ölçümü için sınırlı teknik veriler işlenebilir. İletişim kurduğunuzda gönderdiğiniz e-posta ve mesaj içeriği talebinizi yanıtlamak amacıyla saklanabilir.",
                "İletişim bilgileri izinsiz pazarlama listesine eklenmez ve reklam amacıyla satılmaz. Barındırma, e-posta ve analitik sağlayıcıları yalnız hizmetin gerektirdiği ölçüde veri işleyebilir.",
                "Veri erişim, düzeltme veya silme talebinizi arti.tech61@gmail.com adresine iletebilirsiniz. Yasal saklama yükümlülükleri kapsamındaki istisnalar ayrıca değerlendirilir.",
            ],
        },
        {
            slug: "kullanim-kosullari",
            baslik: `Kullanım Koşulları | ${marka}`,
            aciklama: `${marka} içeriklerinin bilgilendirme sınırı, telif ve sorumluluk koşulları.`,
            h1: "Kullanım Koşulları",
            indexlenebilir: false,
            paragraflar: [
                "Yayımlanan haber ve rehberler genel bilgilendirme amaçlıdır; hukuk, yatırım, mühendislik veya iş güvenliği danışmanlığının yerine geçmez. Zamanla değişen bilgiler karar öncesinde birincil kaynaktan yeniden doğrulanmalıdır.",
                "Metinlerin kaynak gösterilmeden topluca kopyalanması veya anlamı değiştirilerek yayımlanması kabul edilmez. Kısa alıntılarda yayın ve sayfa bağlantısı belirtilmelidir.",
                "Dış bağlantılar okuyucuya kaynak veya ek bağlam sağlamak amacıyla verilir; bağlantı verilen üçüncü taraf sayfaların sonraki değişikliklerinden yayın sorumlu değildir.",
            ],
        },
    ];
}

export function haberKurumsalSayfaBul(site: HaberSitesi, slug: string) {
    return haberKurumsalSayfalar(site).find((sayfa) => sayfa.slug === slug);
}
