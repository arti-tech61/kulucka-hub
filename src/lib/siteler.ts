import { platformAkademisiAnaSayfaParagraflari } from "./platform-akademisi-icerik";

export interface SiteIcerik {
    host: string;
    gaId: string;
    baslik: string;
    aciklama: string;
    h1: string;
    paragraflar: string[];
    hizmetler: string[];
    anaSite: { ad: string; url: string };
    bolge: string;
    telefon: string;
    telefonGosterim: string;
    eposta: string;
    uzmanlik: string;
    kategori?: "kiralama" | "egitim" | "rehber";
    bolumler?: { baslik: string; href: string }[];
}

export const siteler: SiteIcerik[] = [
    {
        host: "eklemliplatform.com.tr",
        gaId: "G-CFM36MYGHJ",
        baslik: "Eklemli Platform Kiralama | Makine Seçimi ve Teklif",
        aciklama: "Eklemli platform kiralama için çalışma yüksekliği, yatay erişim, zemin ve süreye göre makine seçimi ve yazılı teklif süreci.",
        h1: "Eklemli Platform Kiralama",
        paragraflar: [
            "Eklemli (akrobat) platformlar, düz teleskopik bomların ulaşamadığı noktalara \"kırılan kol\" yapısıyla erişir: çatı arkaları, cephe girintileri, ağaç ve tesisat üzerinden aşarak çalışma gerektiren her nokta.",
            "Makine seçimi; çalışma yüksekliği, yatay erişim, zemin taşıma kapasitesi, iç veya dış mekân koşulu ve kiralama süresi birlikte değerlendirilerek yapılır. Yakıt tipi, operatör ve nakliye seçenekleri stok ve proje koşullarına göre yazılı teklifte netleştirilir.",
            "Çalışma alanının fotoğrafını, hedef yüksekliği ve erişim engellerini paylaşın; uygun bom sınıfı, teslimat planı ve maliyet kalemleri teyit edildikten sonra teklif oluşturulsun.",
        ],
        hizmetler: ["Elektrikli eklemli platform seçenekleri", "Dizel eklemli platform seçenekleri", "Yüksek erişim bom sınıfı planlaması", "Operatör ve nakliye seçeneği", "Saha bilgisine göre bom tipi danışmanlığı"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Türkiye geneli",
        telefon: "+905305518961",
        telefonGosterim: "0530 551 89 61",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "engelli erişim gerektiren açık ve kapalı çalışma sahaları",
    },
    {
        host: "bandirmamanlift.net",
        gaId: "G-LDY8ZP140T",
        baslik: "Bandırma Manlift Kiralama | Bölgesel Teklif",
        aciklama: "Bandırma, Erdek, Gönen ve Biga hattında manlift kiralama için makaslı, eklemli ve teleskopik platform seçimi, nakliye planı ve yazılı teklif.",
        h1: "Bandırma Manlift Kiralama",
        paragraflar: [
            "Bandırma ve çevresindeki manlift taleplerinde teslimat noktası, makine sınıfı ve kiralama tarihine göre bölgesel uygunluk kontrol edilir.",
            "Liman lojistiği, fabrika bakımları, tersane işleri ve enerji tesisleri — Bandırma'nın sanayi dokusuna uygun makaslı, eklemli ve teleskopik platform seçeneklerini günlük veya proje bazlı kiralayabilirsiniz.",
            "Operatör, makine evrakı ve nakliye gereksinimleri teklif öncesinde ayrı ayrı teyit edilir. Çalışma yüksekliği, zemin, tarih ve saha giriş koşulları yazılı planın temelini oluşturur.",
        ],
        hizmetler: ["Makaslı platform kiralama (8-22 m)", "Eklemli ve teleskopik platform kiralama (16-43 m)", "Liman ve tersane çalışmalarına uygun ekipman", "Günlük ve proje bazlı kiralama", "Nakliye ve İSG evrak organizasyonu"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Bandırma, Erdek, Gönen, Biga",
        telefon: "+905331728943",
        telefonGosterim: "0533 172 89 43",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "liman, tersane, enerji ve fabrika bakım sahaları",
    },
    {
        host: "izmirforkliftkiralama.net",
        gaId: "G-E24F8SWEFE",
        baslik: "İzmir Forklift Kiralama | Günlük, Aylık, Operatörlü",
        aciklama: "İzmir'de forklift kiralama için yük ağırlığı, yük merkezi, kaldırma yüksekliği, zemin ve çalışma süresine göre kapasite seçimi ve teklif.",
        h1: "İzmir Forklift Kiralama",
        paragraflar: [
            "Kemalpaşa, Torbalı, Çiğli ve Aliağa dahil İzmir taleplerinde doğru forklift; yük ağırlığı, yük merkezi, kaldırma yüksekliği, koridor genişliği ve zemin koşuluna göre seçilir.",
            "Dizel, LPG, elektrikli ve triplex seçeneklerin kapasite, ataşman, operatör ve süre uygunluğu güncel stok üzerinden kontrol edilir. Periyodik kontrol ve saha giriş belgeleri sözleşme öncesinde teyit edilir.",
            "Teslimat tarihi ve nakliye bedeli, makine uygunluğu ile mesafe doğrulandıktan sonra yazılı teklifte belirtilir.",
        ],
        hizmetler: ["1,5-3 ton elektrikli forkliftler (depo içi)", "3-5 ton dizel/LPG forkliftler", "7-10 ton ağır hizmet forkliftleri", "Operatörlü saatlik yükleme-boşaltma", "Aylık sözleşmeli uzun dönem kiralama"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "İzmir ve çevresi",
        telefon: "+905321728943",
        telefonGosterim: "0532 172 89 43",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "depo, üretim ve yükleme sahalarında forklift seçimi",
    },
    {
        host: "kutahyaplatform.com",
        gaId: "G-6C9FTW6S1G",
        baslik: "Kütahya Platform Kiralama | Seramik Sanayisine Çözüm",
        aciklama: "Kütahya ve ilçelerinde platform kiralama için seramik tesisi, depo ve bakım işlerine uygun makine seçimi ile sevkiyat teklifi.",
        h1: "Kütahya Platform Kiralama",
        paragraflar: [
            "Kütahya ve ilçelerindeki seramik fabrikaları, depo raf sistemleri, cam ve çini atölyeleri ile kamu binalarının bakım işleri için makaslı, eklemli veya teleskopik platform sınıfı değerlendirilebilir. Uygun çalışma yüksekliği güncel makine bilgileri ve saha koşullarıyla doğrulanır.",
            "Kütahya sevkiyatı; istenen makine, tarih, adres ve nakliye uygunluğu birlikte kontrol edilerek planlanır.",
            "İç mekân için elektrikli, açık saha için dizel seçenekler değerlendirilir; nakliye ve gerekli evrakların kapsamı yazılı teklifte netleştirilir.",
        ],
        hizmetler: ["Elektrikli ve dizel makaslı platform değerlendirmesi", "Eklemli veya teleskopik platform sınıfı değerlendirmesi", "Fabrika içi hassas zemin planı", "Proje süresine göre teklif", "Stok ve rotaya göre sevkiyat planlaması"],
        anaSite: { ad: "Eskişehir Platform", url: "https://eskisehirplatform.com" },
        bolge: "Kütahya ve ilçeleri",
        telefon: "+905305518961",
        telefonGosterim: "0530 551 89 61",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "seramik üretimi, depo ve tesis bakım çalışmaları",
    },
    {
        host: "aydinplatform.net",
        gaId: "G-ZHS202Q2CZ",
        baslik: "Aydın Platform Kiralama | Efeler, Nazilli, Söke Hattı",
        aciklama: "Aydın genelinde platform kiralama için tesis, depo, otel ve inşaat işlerine uygun makine seçimi, sevkiyat planı ve teklif.",
        h1: "Aydın Platform Kiralama",
        paragraflar: [
            "Aydın merkez, Efeler, Nazilli, Söke ve Kuşadası hattındaki jeotermal enerji tesisleri, zeytin ve incir işleme sanayii, oteller ve inşaat projeleri için makaslı, eklemli veya teleskopik platform sınıfı saha bilgilerine göre değerlendirilir.",
            "Aydın, Kuşadası ve Didim sevkiyatları istenen makine sınıfı, tarih ve nakliye uygunluğuna göre planlanır; dönemsel kiralama şartları teklif sırasında belirlenir.",
            "Çalışma yüksekliği, yatay erişim, zemin, süre ve adres bilgilerini iletin; uygunluk kontrolünden sonra yazılı teklif hazırlansın.",
        ],
        hizmetler: ["Elektrikli ve dizel makaslı platform değerlendirmesi", "Eklemli veya teleskopik platform sınıfı değerlendirmesi", "Otel ve tesis bakımlarına dönemsel teklif", "Tarım sanayii depo çalışmaları", "Stok ve rotaya göre sevkiyat planlaması"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Aydın, Efeler, Nazilli, Söke, Kuşadası",
        telefon: "+905321728943",
        telefonGosterim: "0532 172 89 43",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "otel, enerji, tarım sanayisi ve tesis bakım işleri",
    },
    {
        host: "bilecikplatform.com",
        gaId: "G-W503GFYREQ",
        baslik: "Bilecik Platform Kiralama | Makine ve Sevkiyat Planı",
        aciklama: "Bilecik ve Bozüyük'te platform kiralama için seramik, metal ve depo çalışmalarına uygun makine seçimi ve sevkiyat teklifi.",
        h1: "Bilecik Platform Kiralama",
        paragraflar: [
            "Bilecik merkez, Bozüyük, Osmaneli ve Söğüt hattında makaslı, eklemli ve teleskopik platform kiralama. Seramik fabrikaları, metal işleme tesisleri ve depo projelerinde 8-32 metre aralığında çalışıyoruz.",
            "Bilecik sevkiyatı; güncel makine uygunluğu, teslimat adresi ve talep tarihine göre planlanır. Günlük veya daha uzun kiralama seçenekleri proje koşullarına göre fiyatlandırılır.",
            "Elektrikli modeller iç mekân, dizel modeller açık saha için değerlendirilir; nakliye ve gerekli evrak kapsamı sözleşmede belirtilir.",
        ],
        hizmetler: ["Makaslı platformlar (8-18 m)", "Eklemli ve teleskopik platformlar (16-32 m)", "Fabrika bakım duruşlarına günlük kiralama", "Depo ve raf sistemi kurulum çalışmaları", "Nakliye ve İSG evrak organizasyonu"],
        anaSite: { ad: "Eskişehir Platform", url: "https://eskisehirplatform.com" },
        bolge: "Bilecik, Bozüyük, Osmaneli, Söğüt",
        telefon: "+905305518961",
        telefonGosterim: "0530 551 89 61",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "seramik, metal işleme ve depo projeleri",
    },
    {
        host: "bozuyukplatform.com.tr",
        gaId: "G-80XK5R3BN2",
        baslik: "Bozüyük Platform Kiralama | OSB İçin Teklif",
        aciklama: "Bozüyük OSB ve çevresinde platform kiralama için seramik, cam ve lojistik tesislerine uygun makine seçimi ve sevkiyat planı.",
        h1: "Bozüyük Platform Kiralama",
        paragraflar: [
            "Bozüyük Organize Sanayi Bölgesi ve çevresindeki taleplerde seramik, cam ve lojistik tesislerinin bakım, raf ve aydınlatma işleri için makaslı, eklemli veya teleskopik platform seçimi yapılır.",
            "Teslimat zamanı; makine sınıfı, güncel uygunluk, adres ve saha giriş koşulları doğrulandıktan sonra belirlenir.",
            "Çalışma yüksekliği, yatay erişim ve zemin bilgisi üzerinden makine sınıfı değerlendirilir; kapasite ve ücret yazılı teklifte teyit edilir.",
            "Teklif öncesinde kapı ve koridor ölçüsü, zeminin taşıma kapasitesi, vardiya saatleri ve çalışma noktasındaki engeller paylaşılmalıdır. Düz ve taşıyıcı fabrika zeminlerinde makaslı; makine hattı, tesisat veya yapı elemanının üzerinden uzanılması gereken noktalarda eklemli veya teleskopik platform değerlendirilir. Nihai seçim saha bilgisi ve güncel makine uygunluğuna göre yapılır.",
        ],
        hizmetler: ["Makaslı platform seçenekleri", "Eklemli ve teleskopik platform seçenekleri", "OSB saha koşulu değerlendirmesi", "Günlük ve proje bazlı teklif", "Makine ve nakliye planlaması"],
        anaSite: { ad: "Eskişehir Platform", url: "https://eskisehirplatform.com" },
        bolge: "Bozüyük OSB ve çevresi",
        telefon: "+905305518961",
        telefonGosterim: "0530 551 89 61",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "OSB içi seramik, cam ve lojistik tesisleri",
    },
    {
        host: "canakkaleplatform.com",
        gaId: "G-SKXSE7ZCN5",
        baslik: "Çanakkale Platform Kiralama | Biga ve Merkeze Teslim",
        aciklama: "Çanakkale, Biga ve Çan hattında 8-32 m makaslı, eklemli ve teleskopik platform kiralama. Enerji santralleri, seramik ve gıda tesislerine uygun ekipman.",
        h1: "Çanakkale Platform Kiralama",
        paragraflar: [
            "Çanakkale merkez, Biga, Çan ve Gelibolu hattındaki enerji, metal, seramik ve inşaat işleri için makaslı, eklemli veya teleskopik platform sınıfı saha koşullarına göre değerlendirilir.",
            "Çanakkale sevkiyat günü; makine uygunluğu, çıkış noktası, feribot veya kara yolu planı ve teslimat adresi teyit edildikten sonra belirlenir.",
            "Rüzgâr santrali ve liman gibi özel sahalarda istenen makine evrakı, operatör yeterliliği ve giriş prosedürü teklif öncesinde karşılıklı doğrulanır.",
        ],
        hizmetler: ["Makaslı platform sınıfı değerlendirmesi", "Eklemli veya teleskopik platform sınıfı değerlendirmesi", "Enerji santrali bakım planı", "Proje bazlı sahada konuşlu kiralama teklifi", "Operatör yeterliliği ve uygunluk kontrolü"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Çanakkale, Biga, Çan, Gelibolu",
        telefon: "+905321728943",
        telefonGosterim: "0532 172 89 43",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "enerji, liman, metal ve seramik sahaları",
    },
    {
        host: "platformmanisa.com",
        gaId: "G-BKS6Y4X2JD",
        baslik: "Manisa Platform Kiralama | OSB ve İlçeler",
        aciklama: "Manisa OSB, Turgutlu, Salihli ve Akhisar'da platform kiralama için makine seçimi, saha koşulu değerlendirmesi ve sevkiyat teklifi.",
        h1: "Manisa Platform Kiralama",
        paragraflar: [
            "Manisa Organize Sanayi Bölgesi, Turgutlu, Salihli ve Akhisar hattındaki elektronik fabrikaları, gıda işleme tesisleri ve lojistik depoların yüksekte çalışma ihtiyaçları için makaslı, eklemli veya teleskopik platform sınıfı değerlendirilir.",
            "Manisa sevkiyatı ve varsa vardiya dışı teslimat talebi, makine ile nakliye uygunluğu teyit edildikten sonra yazılı plana bağlanır.",
            "Temiz üretim alanları için elektrikli, açık saha için dizel seçenekler değerlendirilir; kapasite seçimi zemin ve erişim bilgisine göre yapılır.",
        ],
        hizmetler: ["Elektrikli ve dizel makaslı seçenekleri", "Eklemli ve teleskopik platform seçenekleri", "OSB teslimat planlaması", "İç ve dış mekân makine seçimi", "Kapasite danışmanlığı"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Manisa OSB, Turgutlu, Salihli, Akhisar",
        telefon: "+905321728943",
        telefonGosterim: "0532 172 89 43",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "OSB üretim tesisleri, depo ve bakım operasyonları",
    },
    {
        host: "manisaforklift.com",
        gaId: "G-754SNQKTY7",
        baslik: "Manisa Forklift Kiralama | OSB İçi Saatlik ve Aylık Kiralama",
        aciklama: "Manisa'da forklift kiralama için yük ağırlığı, yük merkezi, kaldırma yüksekliği, zemin ve süreye göre kapasite seçimi ve teklif.",
        h1: "Manisa Forklift Kiralama",
        paragraflar: [
            "Manisa OSB, Turgutlu ve Akhisar taleplerinde forklift kapasitesi; en ağır yük, yük merkezi, kaldırma yüksekliği, koridor ve zemin bilgisine göre belirlenir.",
            "Kapalı üretim alanları için elektrikli ve triplex, açık saha ile rampa işleri için dizel veya LPG seçeneklerinin uygunluğu güncel stok üzerinden kontrol edilir.",
            "Makine bakım kaydı, periyodik kontrol, operatör ve teslimat koşulları talebe göre incelenir ve sözleşme öncesinde yazılı olarak teyit edilir.",
        ],
        hizmetler: ["1,5-3 ton elektrikli forkliftler (depo içi)", "3-5 ton dizel/LPG forkliftler", "7-10 ton ağır hizmet forkliftleri", "Saatlik yükleme-boşaltma operasyonu", "Aylık sözleşmeli tedarik"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Manisa OSB, Turgutlu, Akhisar",
        telefon: "+905321728943",
        telefonGosterim: "0532 172 89 43",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "yükleme, depo ve üretim hattı forklift operasyonları",
    },
    {
        host: "yuksektecalismarehberi.com",
        gaId: "G-QG5XZ2JHQQ",
        baslik: "Yüksekte Çalışma Rehberi | Platform Seçimi, İSG ve Mevzuat",
        aciklama: "Yüksekte güvenli çalışma rehberi: makaslı, eklemli ve teleskopik platform ve telehandler seçimi, İSG mevzuatı, operatör belgeleri ve pratik kontrol listeleri.",
        h1: "Yüksekte Çalışma Rehberi",
        paragraflar: [
            "Bu rehber; şantiye şefleri, bakım mühendisleri ve İSG uzmanları için yüksekte çalışma ekipmanı seçimini sadeleştirir: hangi işte makaslı platform, hangi işte eklemli veya teleskopik bom, hangi işte telehandler doğru tercihtir — gerekçeleriyle anlatıyoruz.",
            "İçerik yol haritamız: platform tipi seçim rehberi, telehandler ile personel yükseltici platform karşılaştırması, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında yüksekte çalışma yükümlülükleri, operatör belgelendirme süreçleri ve iş öncesi kontrol listeleri.",
            "Rehber içerikleri sahada makine kiralayan ve kullanan ekiplerin gerçek sorularından derlenmektedir; yeni bölümler yayınlandıkça bu sayfadan duyurulur.",
        ],
        hizmetler: ["Platform tipi seçim rehberi (makaslı / eklemli / teleskopik)", "Telehandler mı, personel yükseltici mi? Karşılaştırma", "Yüksekte çalışma İSG mevzuatı özetleri", "Operatör belgesi ve eğitim süreçleri", "İş öncesi kontrol listeleri (indirilebilir)"],
        anaSite: { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" },
        bolge: "Türkiye geneli · bilgi kaynağı",
        telefon: "+905305518961",
        telefonGosterim: "0530 551 89 61",
        eposta: "kiralama@artiplatform.com.tr",
        uzmanlik: "ekipman seçimi, yüksekte çalışma güvenliği ve saha kontrolü",
        kategori: "rehber",
        bolumler: [
            { baslik: "Telehandler mı, personel yükseltici mi? Makine seçim rehberi", href: "/rehber/telehandler-mi-personel-yukseltici-mi" },
            { baslik: "Makaslı mı, eklemli mi, teleskopik mi? Platform tipi seçim rehberi", href: "/rehber/platform-tipi-secim-rehberi" },
            { baslik: "Yüksekte çalışma mevzuatı: 6331 kapsamında yükümlülükler", href: "/rehber/yuksekte-calisma-mevzuati" },
            { baslik: "Yüksekte çalışma öncesi 10 maddelik kontrol listesi", href: "/rehber/is-oncesi-kontrol-listesi" },
        ],
    },
    {
        host: "platformakademisi.com",
        gaId: "G-3GYGQ0FR9L",
        baslik: "Platform Akademisi | Personel Yükseltici Platform Bilgi Kaynağı",
        aciklama: "Makaslı, Eklemli, Teleskopik ve Örümcek Platformlar için bağımsız operatör güvenliği, MYK, IPAF ve günlük kontrol rehberleri.",
        h1: "Personel Yükseltici Platform Bilgi Akademisi",
        paragraflar: platformAkademisiAnaSayfaParagraflari,
        hizmetler: ["Makine sınıfları ve doğru terminoloji", "MYK sürecini resmî kaynaktan doğrulama", "IPAF kategorileri ve PAL Card rehberi", "Vardiya öncesi kontrol yöntemi", "Risk değerlendirmesi ve kurtarma planı"],
        anaSite: { ad: "Platform Akademisi", url: "https://platformakademisi.com" },
        bolge: "Bağımsız dijital bilgi yayını",
        telefon: "",
        telefonGosterim: "",
        eposta: "editor@platformakademisi.com",
        uzmanlik: "operatör öğrenimi, ekipman terminolojisi ve kaynaklı güvenlik rehberleri",
        kategori: "egitim",
        bolumler: [
            { baslik: "MYK operatör belgesi: kaynaklı başvuru rehberi", href: "/rehber/myk-operator-belgesi" },
            { baslik: "IPAF eğitimi ve PAL Card: bağımsız rehber", href: "/rehber/ipaf-egitimi-nedir" },
            { baslik: "Yükseltici platform vardiya öncesi kontrol yöntemi", href: "/rehber/gunluk-kontrol-listesi" },
        ],
    },
];

type TicariSeoProfili = {
    yer: string;
    isler: string;
    rota: string;
    kritik: string;
    zemin: string;
    olcu: string;
    makine: string;
};

const ticariSeoProfilleri: Record<string, TicariSeoProfili> = {
    "eklemliplatform.com.tr": {
        yer: "Türkiye genelindeki fabrika, şantiye, AVM, lojistik tesis ve dış cephe çalışma alanları",
        isler: "boru köprüsünün, saçakların, üretim hatlarının, peyzajın veya çatı parapetinin arkasındaki çalışma noktasına erişim",
        rota: "çıkış deposu ile proje adresi arasındaki ağır vasıta rotası, saha kabul saati ve indirme alanı",
        kritik: "çalışma yüksekliğinden çok yatay erişimin ve engel aşma geometrisinin doğru hesaplanması",
        zemin: "epoksi fabrika zemini, bitmiş peyzaj, beton saha, sıkıştırılmış dolgu ve eğimli şantiye yolu",
        olcu: "kapı yüksekliği ve genişliği, en dar dönüş, çalışma noktasının dikey-yatay koordinatı, makinenin kurulacağı alan ve üst yapı engelleri",
        makine: "Elektrikli Eklemli Platform veya Dizel Eklemli Platform",
    },
    "bandirmamanlift.net": {
        yer: "Bandırma Limanı, organize sanayi alanları, Erdek, Gönen ve Biga bağlantısındaki üretim sahaları",
        isler: "liman deposu aydınlatması, fabrika bakım duruşu, çelik montaj, silo çevresi ve tesis üst yapı kontrolleri",
        rota: "liman trafiği, vardiya kapısı, kantar geçişi, nakliye aracının bekleme noktası ve Biga-Gönen bağlantı süreleri",
        kritik: "rüzgâr alan açık saha ile yoğun araç trafiğinin aynı çalışma planında güvenli biçimde ayrılması",
        zemin: "liman betonu, fabrika içi kaplama, mıcır saha, rampa ve yağış sonrası yumuşayabilen açık stok alanı",
        olcu: "hedef kot, engel derinliği, kapı-koridor ölçüsü, dönüş yarıçapı, rampa eğimi ve çalışma alanındaki yaya-araç trafiği",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "izmirforkliftkiralama.net": {
        yer: "Kemalpaşa, Torbalı, Çiğli, Aliağa ve İzmir çevresindeki depo, üretim ve açık stok sahaları",
        isler: "palet istifleme, üretim hattı besleme, konteyner yükleme-boşaltma, makine yerleştirme ve sevkiyat hazırlığı",
        rota: "şehir içi ağır araç kısıtları, OSB kabul saati, yükleme rampası sırası ve nakliye aracının güvenli boşaltma noktası",
        kritik: "etiket kapasitesini tek başına esas almak yerine yük merkezi ile kaldırma yüksekliğinde kalan kapasitenin doğrulanması",
        zemin: "depo betonu, epoksi kaplama, yükleme rampası, asfalt stok sahası ve yüzey bozukluğu bulunan fabrika çevresi",
        olcu: "yük ağırlığı, yük merkezi, palet eni-boyu, rafın en üst kiriş yüksekliği, koridor açıklığı, kapı yüksekliği ve rampa eğimi",
        makine: "Elektrikli Forklift veya Dizel Forklift",
    },
    "kutahyaplatform.com": {
        yer: "Kütahya merkez, organize sanayi bölgesi, Tavşanlı ve Gediz hattındaki seramik, maden ve üretim tesisleri",
        isler: "fırın hattı üstü bakım, tavan aydınlatması, toz toplama kanalı, depo rafı, silo ve dış cephe müdahalesi",
        rota: "Kütahya giriş rotası, tesis vardiya saati, bakım duruşunun başlangıcı ve makineyi indirecek düz alan",
        kritik: "seramik tesisindeki ısı, toz, dar geçiş ve hassas zemin koşullarını erişim ihtiyacıyla birlikte ele almak",
        zemin: "seramik kaplama, fabrika betonu, maden sahasına yakın bozuk yüzey, açık stok alanı ve kışın buzlanabilen rampa",
        olcu: "fırın veya hat çevresindeki açıklık, tavan kotu, kapı ölçüsü, makine ağırlığı sınırı, engel derinliği ve güvenli yaklaşma mesafesi",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "aydinplatform.net": {
        yer: "Efeler, Nazilli, Söke, Kuşadası ve Didim hattındaki tarım sanayisi, jeotermal tesis ve konaklama işletmeleri",
        isler: "otel sezon bakımı, jeotermal boru hattı müdahalesi, gıda deposu aydınlatması, silo kontrolü ve cephe yenilemesi",
        rota: "sahil hattındaki turizm trafiği, tesisin misafir kabul düzeni, üretim vardiyası ve nakliye aracının giriş izni",
        kritik: "sıcaklık, açık alan rüzgârı, peyzaj engelleri ve işletmenin faaliyeti sürerken çalışma bölgesinin ayrılması",
        zemin: "otel peyzajı, havuz çevresi kaplaması, gıda tesisi betonu, jeotermal saha mıcırı ve tarımsal işletme avlusu",
        olcu: "cephe yüksekliği, balkon veya saçak derinliği, kapı-koridor açıklığı, yüzey taşıma sınırı ve makinenin dönüş alanı",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "bilecikplatform.com": {
        yer: "Bilecik merkez, Bozüyük, Osmaneli ve Söğüt çevresindeki seramik, metal, ambalaj ve lojistik tesisleri",
        isler: "planlı bakım duruşu, çatı altı tesisat, raf kurulumu, üretim hattı üstü erişim ve açık saha çelik montajı",
        rota: "tesis kapı randevusu, vardiya değişimi, şehirler arası nakliye süresi ve indirme alanına ağır vasıta yaklaşımı",
        kritik: "farklı üretim hatlarındaki dar açıklıkları ve zemin yük sınırını makinenin çalışma diyagramıyla eşleştirmek",
        zemin: "epoksi üretim zemini, depo betonu, açık stok sahası, eğimli fabrika yolu ve mevsimsel çamur riski bulunan dolgu",
        olcu: "en dar kapı, kolon aralığı, raf koridoru, tavan kotu, engelin yatay genişliği, rampa ve dönüş ölçüleri",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "bozuyukplatform.com.tr": {
        yer: "Bozüyük Organize Sanayi Bölgesi ve çevresindeki seramik, cam, metal ve lojistik işletmeleri",
        isler: "üretim hattı üstü bakım, baca ve kanal kontrolü, depo rafı montajı, dış cephe ile saha aydınlatması",
        rota: "OSB güvenlik kapısı, bakım duruşu saati, nakliye aracının fabrika içi güzergâhı ve indirme rampası",
        kritik: "üretim kesintisi penceresine uygun makineyi, geçiş ölçülerini ve iş izin sürecini önceden doğrulamak",
        zemin: "fabrika içi epoksi, seramik kaplı bölüm, beton saha, rampa ve kış koşullarında donabilecek açık alan",
        olcu: "hatlar arası net genişlik, kapı yüksekliği, tavan ve çalışma kotu, engel derinliği, zemin yük sınırı ve dönüş cebi",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "canakkaleplatform.com": {
        yer: "Çanakkale merkez, Biga, Çan ve Gelibolu hattındaki enerji, liman, seramik, gıda ve inşaat sahaları",
        isler: "enerji tesisi bakımı, fabrika çatısı ve cephesi, liman deposu, çelik konstrüksiyon ile yüksek tesisat işleri",
        rota: "kara yolu veya feribot seçimi, rüzgâr ve sefer durumu, tesis kabul saati ve ağır aracın boşaltma noktası",
        kritik: "uzak sevkiyat planını, açık saha hava koşullarını ve projenin istediği giriş evraklarını aynı takvimde kesinleştirmek",
        zemin: "liman betonu, enerji sahası mıcırı, fabrika kaplaması, şantiye dolgusu ve yağıştan etkilenen eğimli yüzey",
        olcu: "çalışma kotu, yatay uzaklık, kapı-geçiş ölçüsü, zemin eğimi, indirme alanı ve enerji hattına yaklaşma sınırı",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "platformmanisa.com": {
        yer: "Manisa Organize Sanayi Bölgesi, Turgutlu, Salihli ve Akhisar'daki elektronik, gıda, otomotiv ve lojistik tesisleri",
        isler: "üretim hattı üstü tesisat, yüksek raf, yangın sistemi, çatı altı bakım, dış cephe ve saha aydınlatması",
        rota: "OSB kapı kaydı, vardiya dışı teslimat talebi, fabrika içi trafik planı ve nakliye aracının bekleme alanı",
        kritik: "temiz üretim alanının zemin ve emisyon kurallarıyla bakım ekibinin erişim geometrisini birlikte çözmek",
        zemin: "epoksi kaplama, ESD hassas alan çevresi, depo betonu, asfalt saha ve tarımsal işletmelerde bozuk avlu",
        olcu: "kapı-koridor, kolon ve hat arası açıklık, çalışma kotu, engel yüksekliği, dönüş yarıçapı ve izin verilen zemin yükü",
        makine: "Makaslı Platform, Eklemli Platform veya Teleskopik Platform",
    },
    "manisaforklift.com": {
        yer: "Manisa OSB, Turgutlu, Akhisar ve Salihli çevresindeki üretim, gıda, ambalaj ve lojistik işletmeleri",
        isler: "hammadde kabulü, hat besleme, bitmiş ürün istifi, kalıp veya makine taşıma ve araç yükleme-boşaltma",
        rota: "OSB giriş kaydı, vardiya ve rampa randevusu, ağır araç güzergâhı ve makinenin güvenle indirileceği alan",
        kritik: "yükün yalnız ağırlığını değil ağırlık merkezini, kaldırma kotunu, ataşmanı ve koridor geometrisini birlikte hesaplamak",
        zemin: "depo betonu, epoksi üretim alanı, yükleme rampası, asfalt avlu ve yüzey bozukluğu bulunan açık stok sahası",
        olcu: "yükün ağırlığı ve ölçüsü, yük merkezi, raf yüksekliği, koridor genişliği, kapı kotu, rampa eğimi ve tavan açıklığı",
        makine: "Elektrikli Forklift veya Dizel Forklift",
    },
};

function anaSayfaSeoParagraflari(site: SiteIcerik, p: TicariSeoProfili): string[] {
    return [
        `${site.h1} talebi yalnızca bir yükseklik ya da tonaj söyleyerek sonuçlandırılmamalıdır. ${p.yer} için doğru plan; işin tam konumunu, erişim güzergâhını, çalışma süresini ve çevredeki devam eden operasyonu birlikte ele alır. Bu bölgede en sık karşılaşılan görevler ${p.isler} şeklindedir. Aynı tesiste iki farklı çalışma noktası bile farklı makine sınıfı gerektirebilir. Bu nedenle ilk görüşmede işin fotoğrafları, hedef noktanın yerden ölçüsü, varsa aradaki engeller ve makinenin sahaya gireceği güzergâh istenir. Amaç büyük makine önermek değil, işi güvenli çalışma sınırları içinde yapabilecek en uygun sınıfı belirlemektir.`,
        `Karar rehberinin ilk adımı işi geometrik olarak tarif etmektir. Sahadan ${p.olcu} kaydedilmelidir. Platform işinde “bina yaklaşık on metre” demek sepetin ulaşması gereken çalışma yüksekliğini göstermez; çalışanın el seviyesinin, parapetin ve yatay uzaklığın ayrı ölçülmesi gerekir. Forklift işinde ise yükün etikette yazan ağırlığı tek başına yeterli değildir; çatal yüzünden yükün ağırlık merkezine uzaklığı ve raf kotu kapasiteyi doğrudan etkiler. Ölçüler mümkünse metre veya milimetre cinsinden, fotoğrafta başlangıç ve hedef noktası işaretlenerek paylaşılmalıdır. Belirsiz ölçü, yanlış nakliye ve iş kaybı riskini büyütür.`,
        `${p.makine} arasındaki seçim işin hareket biçimine göre yapılır. Dikey doğrultuda, düz ve taşıyıcı zeminde çalışma ile engel üzerinden yatay erişim aynı ihtiyaç değildir. Benzer biçimde kapalı depoda palet istiflemek ile açık alanda rampada yük taşımak farklı güç, lastik ve emisyon özellikleri ister. ${p.kritik}, bu bölgedeki taleplerin ayırt edici karar noktasıdır. Makinenin katalogdaki azami değeri, her konumda kullanılabilir değer anlamına gelmez. Çalışma diyagramı, kalan kapasite tablosu, sepet veya çatal yükü ve üreticinin eğim-rüzgâr sınırları seçilen model özelinde teklif öncesinde incelenmelidir.`,
        `Zemin uygunluğu çoğu talepte geç sorulur; oysa seçim sürecinin merkezindedir. ${p.zemin} aynı taşıma davranışını göstermez. Toplam makine ağırlığı kadar teker veya denge ayağında oluşan noktasal yük, kaplama altındaki döşeme yapısı, mazgal ve rögarlar, bodrum üzeri döşemeler, kenar boşlukları ve eğim değerlendirilmelidir. Hassas yüzeylerde iz bırakmayan lastik ihtiyacı, koruyucu levha kullanımı ve dönüş sırasında yüzey hasarı olasılığı saha sorumlusuyla konuşulur. Taşıma kapasitesi bilinmeyen zeminde varsayımla ilerlenmez; gerekiyorsa yapı veya zemin yetkilisinin yazılı görüşü istenir.`,
        `Sahaya giriş ayrıca ölçülmesi gereken bir iştir. Makinenin nakliye ölçüsü, çalışma ölçüsünden farklı olabilir; korkuluk katlama, bom konumu veya ataşman nedeniyle yükseklik ve uzunluk değişebilir. Kapı, koridor, kolon dönüşü, rampa, asansör kapasitesi ve manevra cebi seçilecek modelin teknik föyüyle karşılaştırılır. ${p.rota} sevkiyat planının temelidir. Nakliye aracı için yalnız adres paylaşmak yeterli olmaz; tesis kapısındaki belge kontrolü, kabul edilebilir saat aralığı, boşaltmada kullanılacak alan ve zeminin ağır araca uygunluğu da yazılı biçimde teyit edilmelidir. Bu kontrol, sahaya gelen makinenin kapıdan geçememesi gibi pahalı hataları önler.`,
        `İç ve dış mekân ayrımı motor tercihinden daha kapsamlıdır. Kapalı alanda egzoz emisyonu, gürültü, havalandırma, lastik izi, dönüş alanı ve şarj altyapısı değerlendirilir. Açık sahada çekiş, lastik yapısı, zemin bozukluğu, yağış, görüş ve rüzgâr koşulları öne çıkar. Elektrikli makinenin sessiz olması her kapalı alana sığacağı; dizel makinenin arazi tipi olması her yumuşak zeminde çalışacağı anlamına gelmez. Vardiya süresi, mola aralıkları, akü şarj noktası veya yakıt sorumluluğu da seçimi etkiler. Makine sınıfı belirlenirken işletmenin çevre, yangın ve çalışma izni kuralları talep dosyasına eklenmelidir.`,
        `En yaygın seçim hatası, erişim payı bırakmak için gereğinden büyük makine istemektir. Büyük sınıf daha ağır, daha geniş ve nakliyesi daha zor olabilir; dar sahada işi kolaylaştırmak yerine engelleyebilir. Diğer hata yalnız günlük kiralama bedelini karşılaştırıp nakliye, bekleme, operatör, yakıt, şarj, ataşman ve uzatma koşullarını gözden kaçırmaktır. Fotoğraftaki zemini sağlam kabul etmek, çalışma yüksekliği ile platform yüksekliğini karıştırmak, yük merkezini hesaba katmamak ve saha giriş evrakını son güne bırakmak da sık görülür. İyi teklif, bu belirsizlikleri fiyat verilmeden önce görünür hale getirir.`,
        `Teklif istemeden önce kısa bir saha dosyası hazırlayın: açık adres ve konum pini, irtibat kişisi, istenen başlangıç-bitiş tarihi, vardiya saatleri, yapılacak işin özeti, hedef ölçüler, zemin ve güzergâh fotoğrafları, taşınacak insan-malzemeye ilişkin ağırlık bilgisi ve tesisin evrak listesi. Elektrik hattı, hareketli vinç, araç yolu, sıcak yüzey, kimyasal bölge veya üretim hattı gibi ek riskler ayrıca belirtilmelidir. Operatör isteniyorsa çalışma saatleri ile saha oryantasyonu; operatörsüz talepte makineyi kullanacak kişinin yetkinlik koşulu önceden konuşulur. Eksiksiz dosya, farklı tedarikçilerden gelen teklifleri aynı kapsam üzerinden karşılaştırmayı sağlar.`,
        `Yazılı teklifte marka-model kesinleştirilmişse teknik föyü; yalnız sınıf belirtilmişse sevkten önce model teyidi istenmelidir. Makine veya kapasite sınıfı, çalışma yüksekliği ya da kaldırma yüksekliği, yatay erişim veya kalan kapasite, sepet/çatal ve ataşman bilgisi, kiralama tarihleri, çalışma saati sınırı, operatör kapsamı, gidiş-dönüş nakliye, yakıt veya şarj sorumluluğu, arıza bildirim yöntemi ve ödeme koşulu ayrı satırlarda görülmelidir. “Her şey dahil” gibi açık olmayan ifadeler yerine dahil ve hariç kalemler yazılmalıdır. Belge kopyalarının hangi aşamada paylaşılacağı ile saha reddinde uygulanacak süreç de sözleşmede anlaşılır olmalıdır.`,
        `Teslimat sırasında sevk edilen makinenin teklifteki sınıf ve modelle uyumu, görünür hasarlar, sayaç veya enerji seviyesi, kumandalar, acil durdurma ve acil indirme işlevleri yetkili kişilerce kontrol edilir. Kullanım kılavuzu, gerekli kontrol kayıtları ve sahaya özel istenen belgeler teslim dosyasında bulunmalıdır. Bu kontrol bir bakım veya periyodik kontrol yerine geçmez; kiracı ile tedarikçi arasındaki teslim durumunu kayda alır. Uygunsuzluk görülürse fotoğraf ve tutanakla bildirilir, makine güvenli değilse kullanılmaz. İş sonunda iade saati, yakıt-şarj durumu ve görünür hasar yine kayıt altına alınır.`,
        `İş programı, makine sahaya geldikten sonra da çevre koşullarına göre yönetilir. Çalışma alanı yaya ve araç trafiğinden ayrılır; kör noktalar için yönlendirme, gerektiğinde gözcü ve uygun bariyer planlanır. Üretici limitleri, saha risk değerlendirmesi ve yetkili personelin kararı esastır. Hava, zemin veya operasyon değiştiğinde ilk seçimin hâlâ uygun olup olmadığı yeniden değerlendirilir. Sepet kapasitesini aşan malzeme yüklemek, platformu vinç gibi kullanmak, forklifti insan yükseltmek amacıyla doğaçlama düzenlemek ya da güvenlik sistemini devre dışı bırakmak kabul edilebilir yöntemler değildir.`,
        `${site.bolge} için talep değerlendirirken kesin stok, sabit fiyat veya teslimat sözü bu sayfadan verilmez. Uygunluk; tarih, güncel makine durumu, rota, saha koşulu ve istenen belge seti görüldükten sonra doğrulanır. En sağlıklı sıra; ölçüleri toplamak, doğru sınıfı kısa listelemek, teknik uygunluğu kontrol etmek, kapsamı yazılı teklife bağlamak ve teslimatta aynı bilgileri yeniden teyit etmektir. Böylece yalnız fiyatı değil, işin durmadan tamamlanma olasılığını da karşılaştırmış olursunuz. Fotoğraf ve ölçüler ön değerlendirmeyi hızlandırır; karmaşık erişimlerde yerinde inceleme gerekip gerekmediği ayrıca kararlaştırılır.`,
    ];
}

for (const site of siteler) {
    const profil = ticariSeoProfilleri[site.host];
    if (profil) site.paragraflar.push(...anaSayfaSeoParagraflari(site, profil));
}

export function hostIcinSite(host: string): SiteIcerik | undefined {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return siteler.find((s) => s.host === temiz);
}
