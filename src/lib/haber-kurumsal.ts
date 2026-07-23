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
    const guvenlikYayini = site.host === "guvenliyukselis.com";
    const yayinAlani = guvenlikYayini
        ? "yüksekte çalışma, iş sağlığı ve güvenliği, ekipman standartları ve saha uygulamaları"
        : "İzmir iş dünyası, sanayi, lojistik, enerji, organize sanayi bölgeleri ve bölgesel yatırımlar";
    const kaynakYaklasimi = guvenlikYayini
        ? "Mevzuat haberlerinde Resmî Gazete ve yetkili kamu kurumları; standart ve teknik konularda standardı yayımlayan kuruluş, üretici dokümanı ve alan uzmanlarının doğrulanabilir açıklamaları önceliklidir. Bir ürün broşürü bağımsız güvenlik değerlendirmesi gibi sunulmaz."
        : "Bölgesel gelişmelerde kamu kurumları, belediyeler, oda ve borsalar, organize sanayi bölgesi müdürlükleri, şirketlerin resmî açıklamaları ve doğrulanabilir saha bilgileri önceliklidir. Yatırım niyeti, ihale sonucu ve faaliyete geçen yatırım birbirine karıştırılmaz.";
    const haberOnerisi = guvenlikYayini
        ? "Bildiriminizde konu başlığını, ilgili mevzuat veya teknik dokümanı, olayın tarihini ve yayımlanmasında kamu yararı bulunan yönü belirtin. Kaza bildirimlerinde kişisel sağlık verisi, yüz görüntüsü veya kimliği açığa çıkaran belge göndermeyin."
        : "Bildiriminizde olayın veya gelişmenin tarihini, İzmir ile bağını, doğrulanabilir kaynak bağlantılarını ve varsa görüş alınabilecek kurumları belirtin. Ticari tanıtım metinleri haber metni olarak aynen yayımlanmaz.";
    const hassasIcerikIlkesi = guvenlikYayini
        ? "İş kazalarında hızdan önce doğruluk, insan onuru ve yakınların mahremiyeti gözetilir. Ölüm veya yaralanma bilgisi yetkili kaynakla doğrulanmadan kesinleştirilmez; suçlayıcı dil ve kazanın yöntemini gereksiz ayrıntıyla yeniden üreten görseller kullanılmaz."
        : "Şirketler ve yatırımlar hakkındaki iddialarda ilgili tarafa makul yanıt imkânı tanınır. Borsa, istihdam veya yatırım kararını etkileyebilecek doğrulanmamış bilgi, söylenti diliyle de olsa kesinlik izlenimi yaratacak biçimde yayımlanmaz.";
    return [
        {
            slug: "hakkimizda",
            baslik: `Hakkımızda | ${marka}`,
            aciklama: `${marka} yayın amacı, kapsamı, editoryal yaklaşımı ve okuyucu düzeltme süreci.`,
            h1: `${marka} Hakkında`,
            indexlenebilir: true,
            paragraflar: [
                `${marka}, ${yayinAlani} hakkında açıklayıcı haber, rehber ve analiz yayımlayan tematik bir dijital yayındır. İçerik kapsamı, okuyucunun gelişmeleri kaynakları ve sınırlarıyla anlayabilmesine göre belirlenir.`,
                "Yayın, ticari kiralama sitelerinden ayrı bir editoryal kimlikle çalışır. Haber başlıkları reklam veya bağlantı ağı oluşturmak için seçilmez; okuyucunun bölgesel gelişmeyi ya da güvenlik konusunu anlamasına yardımcı olacak bağlam sunmayı amaçlar.",
                "İçeriklerde kesinleşmemiş stok, fiyat, yatırım veya mevzuat iddiası kesin bilgi gibi sunulmaz. Zamanla değişebilen bilgilerde tarih belirtilir; okuyucu nihai karar öncesinde resmî ve birincil kaynağı kontrol etmeye yönlendirilir.",
                "Yayın planı gündemdeki konu, doğrulanabilir kaynak bulunabilirliği ve kamu yararı dikkate alınarak hazırlanır. Bir kurumun basın bülteni ya da ticari talebi tek başına yayın garantisi oluşturmaz.",
                hassasIcerikIlkesi,
            ],
            maddeler: [
                { baslik: "Yayın alanı", metin: site.slogan },
                { baslik: "Düzeltme", metin: "Maddi hata bildirimleri incelenir; doğrulanan düzeltme içerikte açık biçimde uygulanır." },
                { baslik: "Ticari ayrım", metin: "Sponsorlu veya ticari içerik varsa okuyucudan gizlenmez; haber görünümünde örtülü reklam yayımlanmaz." },
                { baslik: "Kaynak şeffaflığı", metin: "Kaynağın açıklanması mümkün olduğunda haber içinde bağlantı veya kurum adı verilir; kaynağın niteliği okuyucudan saklanmaz." },
                { baslik: "Görüş hakkı", metin: "Eleştiri ya da ciddi iddia içeren haberlerde konu edilen tarafın doğrulanabilir açıklaması değerlendirmeye alınır." },
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
                haberOnerisi,
                "Her ileti aynı sonuca bağlanmayabilir. Editoryal ekip; doğrulanamayan, kaynağı belirsiz, kişisel veri içeren veya yalnızca arama görünürlüğü sağlamayı amaçlayan talepleri yayımlamama hakkını saklı tutar. Maddi hata bildirimleri ve cevap hakkı talepleri öncelikli olarak incelenir.",
            ],
            maddeler: [
                { baslik: "E-posta", metin: "arti.tech61@gmail.com" },
                { baslik: "Düzeltme bildirimi", metin: "URL, hatalı bölüm, doğru bilgi ve doğrulanabilir kaynak ekleyin." },
                { baslik: "Yanıt hakkı", metin: "Haberde adı geçen kişi ve kuruluşların somut yanıtları editoryal incelemeye alınır." },
                { baslik: "Haber önerisi", metin: "Konu, tarih, yer, kamu yararı ve teyit edilebilir kaynakları tek iletide özetleyin." },
                { baslik: "Gizlilik", metin: "Hassas belge göndermeden önce gerekli olmayan kişisel alanları kapatın; şifre ve kimlik doğrulama kodu paylaşmayın." },
            ],
        },
        {
            slug: "yayin-ilkeleri",
            baslik: `Yayın İlkeleri ve Kaynak Politikası | ${marka}`,
            aciklama: `${marka} doğrulama, kaynak, düzeltme, çıkar çatışması ve yapay zekâ kullanım ilkeleri.`,
            h1: "Yayın İlkeleri ve Kaynak Politikası",
            indexlenebilir: true,
            paragraflar: [
                kaynakYaklasimi,
                "İsim vermeyen veya doğrudan yayımlanamayan bir kaynak kullanılması gerektiğinde, kaynağın bilgiye erişim gerekçesi ayrıca değerlendirilir. Tek ve kimliği belirsiz bir anlatım ciddi bir iddiayı doğrulamak için yeterli sayılmaz. Güvenlik riski ya da açık kamu yararı bulunmadıkça kaynak ismi okuyucudan saklanmaz.",
                "Başlık, içerikte kanıtlanmayan bir sonucu kesinmiş gibi söylemez. Tahmin, yorum ve doğrulanmış olgu birbirinden ayrılır. Güvenlik ve hukuk içerikleri kişiye özel danışmanlık değildir; uygulama öncesinde güncel mevzuat ve yetkili uzman görüşü gerekir.",
                "Haber, analiz, görüş ve ticari içerik birbirinden ayırt edilebilir biçimde sunulur. Editoryal metin içinde bağlantı verilmesi, bağlantı verilen kurumun veya ürünün onaylandığı anlamına gelmez. Bağlantı değişimi karşılığında haber görünümünde içerik yayımlanmaz.",
                "Yazar veya editörün konu edilen kurumla maddi bağı ya da kararını etkileyebilecek bir çıkar çatışması varsa içerik başka bir editoryal göz tarafından değerlendirilir veya ilişki okuyucuya açıklanır. Hediye, ücretsiz hizmet ve seyahat desteği olumlu yayın sözü oluşturmaz.",
                "Üretken yapay zekâ, taslak düzenleme veya dil kontrolünde kullanılabilir; kaynak uydurmak, sahte alıntı üretmek ya da insan kontrolü olmadan toplu içerik yayımlamak için kullanılmaz. Yayımlanan metnin sorumluluğu editoryal süreçtedir.",
                "Doğrulanmış maddi hata sessizce korunmaz. Düzeltme, içerik anlamını değiştiriyorsa güncelleme notuyla; küçük yazım düzeltmeleriyse metin içinde uygulanır.",
                "Düzeltme talebi, yalnızca ilgili kişi veya kurumdan geldiği için otomatik kabul ya da reddedilmez. İlk yayımdaki kaynaklar, yeni sunulan belge ve haberin kamu yararı birlikte incelenir. İçeriğin bütünü kaldırılmadan giderilebilen hata, doğru bilgi ve gerekli bağlam eklenerek düzeltilir.",
                hassasIcerikIlkesi,
            ],
            maddeler: [
                { baslik: "Olgu ve yorum", metin: "Doğrulanabilir olgular, yorum ve öngörüden dil ve bağlam yoluyla ayrılır." },
                { baslik: "Düzeltme kaydı", metin: "Anlamı etkileyen güncellemelerde değişikliğin niteliği okuyucuya açıklanır." },
                { baslik: "Görsel doğrulama", metin: "Tarihi, konumu veya kaynağı doğrulanamayan görsel olayın kanıtı gibi kullanılmaz." },
                { baslik: "Bağımsızlık", metin: "Reklam, bağlantı veya tanıtım talebi haber seçimini ve ulaşılan sonucu belirlemez." },
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
