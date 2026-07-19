export interface Yazi {
    slug: string;
    kategori: string;
    baslik: string;
    ozet: string;
    tarih: string; // ISO
    paragraflar: string[];
}

export const kategoriler = ["Sanayi", "Lojistik", "Enerji", "İş Dünyası", "İş Güvenliği"] as const;

export const yazilar: Yazi[] = [
    {
        slug: "izmir-organize-sanayi-bolgeleri-rehberi",
        kategori: "Sanayi",
        baslik: "İzmir'in Organize Sanayi Bölgeleri: Yatırımcı ve Tedarikçi Rehberi",
        ozet: "Kemalpaşa'dan Aliağa'ya, Torbalı'dan Çiğli'ye — İzmir'in üretim coğrafyasını, bölgelerin sektörel ağırlıklarını ve tedarikçiler için pratik ipuçlarını derledik.",
        tarih: "2026-07-19",
        paragraflar: [
            "İzmir, Ege'nin üretim merkezi olarak birden fazla organize sanayi bölgesini bir arada barındırır. Kemalpaşa hattı metal, makine ve gıda işleme tesisleriyle; Çiğli'deki Atatürk Organize Sanayi Bölgesi elektronik, plastik ve ambalaj sanayiiyle; Torbalı çevresi yapı malzemeleri ve lojistik depolarıyla; Aliağa ise ağır sanayi, petrokimya ve gemi söküm tesisleriyle öne çıkar.",
            "Bölge seçimi yapan yatırımcı için üç pratik ölçüt öne çıkıyor: limana ve otoyola uzaklık, nitelikli işgücüne erişim ve bölgenin altyapı kapasitesi. Alsancak Limanı'na ve Aliağa'daki özel iskelelere yakınlık, ihracat ağırlıklı üreticiler için taşıma maliyetini doğrudan etkiler.",
            "Tedarikçiler açısından İzmir OSB'lerinin ortak özelliği, bakım-onarım ve ekipman kiralama taleplerinin yıl boyu sürmesidir: fabrika bakım duruşları, depo raf kurulumları, çatı ve cephe işleri bölgedeki hizmet ekonomisinin düzenli kalemleridir.",
            "İzmir Sektör olarak bu rehberi, bölgeye yeni gelen işletmelerin doğru muhataplara hızla ulaşması için güncel tutacağız; katkı ve düzeltmeleriniz için bize yazabilirsiniz.",
        ],
    },
    {
        slug: "alsancak-limani-izmir-lojistik-ekosistemi",
        kategori: "Lojistik",
        baslik: "Alsancak Limanı ve İzmir'in Lojistik Ekosistemi",
        ozet: "Konteyner hatları, demiryolu bağlantısı ve arka saha depoculuğu: İzmir'in dış ticaret kapısının işleyişi ve bölge işletmelerine sunduğu imkânlar.",
        tarih: "2026-07-19",
        paragraflar: [
            "Alsancak Limanı, Ege ihracatının ana kapısı olarak konteyner ve genel kargo trafiğinde bölgenin en işlek tesisidir. Limanın demiryolu bağlantısı, iç bölgelerdeki üreticilerin yükünü karayoluna göre daha öngörülebilir maliyetle kıyıya ulaştırır.",
            "Liman çevresinde ve Kemalpaşa-Torbalı hattında gelişen arka saha depoculuğu, İzmir lojistiğinin ikinci katmanını oluşturur: gümrüklü antrepolar, soğuk zincir tesisleri ve e-ticaret dağıtım merkezleri son yıllarda bu koridorda yoğunlaştı.",
            "Lojistik tesislerin işletmecileri için yüksek raf sistemleri, otomasyon ve bakım hizmetleri sürekli bir ihtiyaç kalemidir; bölgedeki hizmet sağlayıcı ağı da bu talebe paralel büyüyor.",
            "Aliağa'daki özel iskeleler ve Çandarlı'da planlanan kapasite, uzun vadede İzmir'in kuzey aksını güçlendirecek gelişmeler arasında izlenmeyi hak ediyor.",
        ],
    },
    {
        slug: "izmir-ruzgar-enerjisi-yenilenebilir-sektor",
        kategori: "Enerji",
        baslik: "İzmir'de Yenilenebilir Enerji: Rüzgârın Başkenti Neden Burası?",
        ozet: "Türbin kanadı üretiminden santral bakım hizmetlerine — İzmir'in rüzgâr enerjisi kümelenmesi ve bölge iş dünyasına yansımaları.",
        tarih: "2026-07-19",
        paragraflar: [
            "İzmir ve çevresi, Türkiye'nin rüzgâr enerjisi kapasitesinde başı çeken bölgeler arasında yer alır. Çeşme, Aliağa, Bergama ve Foça hattındaki santraller, kentin enerji üretimindeki payını her yıl büyütüyor.",
            "Kümelenme yalnız santrallerden ibaret değil: İzmir, türbin kanadı ve komponent üretiminde uluslararası tedarik zincirine çalışan fabrikalara ev sahipliği yapıyor. Bu tesisler bölgede nitelikli istihdam ve yan sanayi talebi yaratıyor.",
            "Santral işletmecileri için türbin bakımı, kanat onarımı ve yüksekte çalışma organizasyonu düzenli bir hizmet kalemidir; İSG standartlarına uygun ekipman ve belgeli personel bu işlerin ön şartıdır.",
            "Güneş tarafında da çatı tipi kurulumlar sanayi tesislerinde hızla yaygınlaşıyor; öz tüketim modelleri, enerji maliyetini yönetmek isteyen üreticilerin gündeminde.",
        ],
    },
    {
        slug: "santiyede-yuksekte-calisma-guvenligi-temel-kurallar",
        kategori: "İş Güvenliği",
        baslik: "Şantiyede Yüksekte Çalışma: Vazgeçilmez Beş Kural",
        ozet: "Düşme, iş kazalarının başlıca nedenlerinden. Platform seçiminden operatör belgesine, İzmir sanayisinde yüksekte çalışmanın temel güvenlik çerçevesi.",
        tarih: "2026-07-19",
        paragraflar: [
            "Yüksekten düşme, inşaat ve bakım işlerindeki ciddi iş kazalarının başında gelir. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ve ilgili yönetmelikler, yüksekte çalışmayı özel risk değerlendirmesine tabi tutar.",
            "Birinci kural doğru ekipman seçimidir: seyyar merdiven ve iskelenin yetersiz kaldığı işlerde makaslı veya bomlu yükseltici platformlar hem daha hızlı hem daha güvenli bir çalışma zemini sağlar.",
            "İkinci kural belgeli operatördür: yükseltici platform kullanan personelin operatör eğitimi almış ve belgelendirilmiş olması gerekir. Üçüncüsü günlük kontroldür: her vardiya öncesi makinenin fren, acil indirme ve korkuluk kontrolleri kayıt altına alınmalıdır.",
            "Dördüncü kural kişisel koruyucu donanım — bomlu platformlarda tam vücut emniyet kemeri kullanımı zorunludur. Beşincisi ise saha organizasyonu: çalışma alanının şeritle sınırlanması ve zemin uygunluğunun teyididir.",
            "İzmir Sektör'de bu başlığı düzenli işleyeceğiz; sahadan soru ve vaka paylaşımlarınız içerik gündemimizi belirleyecek.",
        ],
    },
    {
        slug: "izmirde-is-kurmak-sanayi-yatirimcisi-ilk-adimlar",
        kategori: "İş Dünyası",
        baslik: "İzmir'de İş Kurmak: Sanayi Yatırımcısı İçin İlk Adımlar",
        ozet: "Yer seçiminden teşvik başvurusuna, ilk personelden tedarikçi ağına — İzmir'de üretim yatırımına başlarken izlenecek pratik yol haritası.",
        tarih: "2026-07-19",
        paragraflar: [
            "İzmir'de üretim yatırımı planlayan bir girişimci için ilk karar yer seçimidir: OSB içinde hazır altyapılı parsel mi, OSB dışında münferit tesis mi? OSB'ler ruhsat süreçlerinin görece hızlı ilerlemesi ve ortak altyapı maliyetleri açısından çoğu yatırımcı için ilk tercihtir.",
            "İkinci adım teşvik araştırmasıdır: yatırım teşvik belgesi, bölgesel destekler ve Ar-Ge/tasarım merkezi imkânları, kuruluş maliyetini belirgin biçimde etkileyebilir. Başvuru öncesi güncel mevzuatın yetkin bir danışmanla taranması zaman kazandırır.",
            "Üçüncü adım tedarikçi ağıdır: inşaat ve kurulum döneminde ekipman kiralama, elektrik-mekanik taahhüt ve lojistik hizmetleri için bölgeye hâkim tedarikçilerle erken temas, hem maliyeti hem takvimi korur.",
            "İzmir Sektör, bölgede iş kuran ve büyüten işletmelerin deneyimlerini görünür kılmayı amaçlıyor; hikâyesini paylaşmak isteyen girişimcilere sayfalarımız açık.",
        ],
    },
];

export function slugIleYazi(slug: string): Yazi | undefined {
    return yazilar.find((y) => y.slug === slug);
}
