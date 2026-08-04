/**
 * Hazirlanan siteler.
 *
 * Bu alan adlarinin DNS kaydi yoktu; hicbiri yayinda degildi. Tam site
 * hazirlanana kadar her biri KENDI sehir, ilce ve makine odagiyla gecici bir
 * tanitim sayfasi sunar.
 *
 * Neden her birine ayri icerik: `hostIcinSite` bilinmeyen bir host'u
 * `siteler[0]`a dusuruyor. Tanimlanmadan yonlendirilirlerse hepsi ayni
 * (eklemliplatform.com.tr) icerigini sunar ve kopya icerik olusur.
 *
 * Ayni sehir icin birden fazla alan adi var (Izmir 6, Eskisehir 4). Ayni metni
 * tekrarlamak dogrudan "kapi sayfasi" kalibidir; bu yuzden her alan adina
 * farkli ilce hatti ve farkli makine odagi verilmistir. Gercek icerik
 * yazilana kadar bu sayfalar gecicidir.
 *
 * Terminoloji: Makasli / Eklemli / Teleskopik / Orumcek Platform, Dikey
 * Personel Yukseltici, Elektrikli ve Dizel-LPG Forklift, Telehandler.
 * "Bomlu platform" bir urun adi DEGILDIR (arama terimi olarak gecebilir).
 */

export interface HazirlananSite {
    host: string;
    sehir: string;
    baslik: string;
    aciklama: string;
    h1: string;
    /** Sayfanin ana metni; her alan adinda farklidir. */
    paragraflar: string[];
    /** Bu alan adinin one cikardigi makine/hizmet hatti. */
    odakHizmetler: string[];
    /** Hizmet verilecek ilce ve sanayi bolgeleri. */
    bolgeler: string[];
    anaSite: { ad: string; url: string };
    telefon?: string;
    telefonGosterim?: string;
    eposta?: string;
}

const ARTI = { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" };
const ARTI_TEL = "+905305518961";
const ARTI_TEL_GOSTERIM = "0530 551 89 61";
const ARTI_EPOSTA = "kiralama@artiplatform.com.tr";

export const hazirlananSiteler: HazirlananSite[] = [
    // ---------------------------------------------------------------- ANKARA
    {
        host: "ankara-platform.com",
        sehir: "Ankara",
        baslik: "Ankara Platform Kiralama | Hazırlanıyor",
        aciklama:
            "Ankara ve çevresinde makaslı, eklemli ve teleskopik platform kiralama hizmeti hazırlanıyor. OSTİM ve İvedik sanayi hattı öncelikli.",
        h1: "Ankara Platform Kiralama",
        paragraflar: [
            "Ankara sanayi hattında yüksekte çalışma ihtiyacı, çoğunlukla üretim tesislerinin iç hacimlerinde ve depo raf sistemlerinde ortaya çıkar. Bu sayfa, OSTİM ve İvedik başta olmak üzere Ankara genelinde platform kiralama hizmetimiz için hazırlanıyor.",
            "Makine seçimi tek bir ölçüye bakılarak yapılmaz: çalışma yüksekliği, zeminin taşıma kapasitesi, kapının geçiş genişliği, iç mekân mı açık saha mı olduğu ve kiralama süresi birlikte değerlendirilir. İç mekân işlerinde akülü makaslı platform, dış sahada dizel seçenekler öne çıkar.",
            "Sayfa yayına alınana kadar makine uygunluğu, nakliye planı ve yazılı teklif için doğrudan iletişime geçebilirsiniz.",
        ],
        odakHizmetler: [
            "Akülü makaslı platform kiralama",
            "Elektrikli makaslı platform kiralama",
            "Eklemli platform kiralama",
            "Teleskopik platform kiralama",
            "Dikey personel yükseltici",
        ],
        bolgeler: ["OSTİM", "İvedik", "Yenimahalle", "Sincan", "Etimesgut", "Başkent OSB"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "ankaramanlift.net",
        sehir: "Ankara",
        baslik: "Ankara Manlift Kiralama | Hazırlanıyor",
        aciklama:
            "Ankara'da eklemli ve teleskopik manlift kiralama hizmeti hazırlanıyor. Sincan, Etimesgut ve Kazan hattında dış saha erişimi.",
        h1: "Ankara Manlift Kiralama",
        paragraflar: [
            "Manlift, sahada çoğunlukla eklemli ve teleskopik platformların ortak adı olarak kullanılır. Bu sayfa Ankara'nın batı hattında — Sincan, Etimesgut, Kazan ve Temelli çevresinde — manlift kiralama hizmetimiz için hazırlanıyor.",
            "Eklemli platformlar, kırılan kol yapısı sayesinde önünde engel bulunan noktalara ulaşır: cephe girintileri, çatı arkaları, tesisat üzerinden aşarak çalışılması gereken alanlar. Teleskopik platformlar ise engelsiz sahada daha uzun tek yönlü erişim sağlar. Hangi sınıfın uygun olduğu, hedef noktaya giden yolun açık olup olmadığına göre belirlenir.",
            "Çalışma alanının fotoğrafını ve hedef yüksekliği paylaşmanız, uygun bom sınıfının ilk konuşmada netleşmesini sağlar.",
        ],
        odakHizmetler: [
            "Eklemli platform (manlift) kiralama",
            "Teleskopik platform kiralama",
            "Dizel manlift seçenekleri",
            "Operatörlü kiralama",
            "Nakliye ve saha planlaması",
        ],
        bolgeler: ["Sincan", "Etimesgut", "Kazan", "Temelli", "Polatlı", "Akyurt"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "ankaraplatform.net",
        sehir: "Ankara",
        baslik: "Ankara Makaslı Platform Kiralama | Hazırlanıyor",
        aciklama:
            "Ankara'da iç mekân ağırlıklı makaslı platform ve dikey personel yükseltici kiralama hizmeti hazırlanıyor.",
        h1: "Ankara Makaslı Platform Kiralama",
        paragraflar: [
            "Kapalı hacimlerde yüksekte çalışma, dış sahadan farklı kısıtlar getirir: zemin işaretleri, tavan yüksekliği, kapı geçiş ölçüsü ve egzoz salınımı. Bu sayfa Ankara'da iç mekân ağırlıklı makaslı platform hizmetimiz için hazırlanıyor.",
            "Akülü makaslı platformlar egzoz üretmediği için depo, üretim salonu, AVM ve otopark gibi kapalı alanlarda tercih edilir. Dar koridor ve raf aralarında ise dikey personel yükseltici, makaslı platformun geçemediği ölçülerde çalışır.",
            "Zemin tipi, tavan yüksekliği ve geçiş genişliği bilgisini paylaşın; hangi sınıfın sahaya girdiği baştan netleşsin.",
        ],
        odakHizmetler: [
            "Akülü makaslı platform kiralama",
            "Dikey personel yükseltici kiralama",
            "İç mekân yüksekte çalışma çözümleri",
            "Depo ve raf sistemi bakım desteği",
            "Uzun süreli kiralama",
        ],
        bolgeler: ["Yenimahalle", "Başkent OSB", "Ostim", "Çankaya", "Kırıkkale", "Organize Sanayi"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },

    // ----------------------------------------------------------------- BURSA
    {
        host: "bursamanlift.net",
        sehir: "Bursa",
        baslik: "Bursa Manlift Kiralama | Hazırlanıyor",
        aciklama:
            "Bursa'da eklemli ve teleskopik manlift kiralama hizmeti hazırlanıyor. Nilüfer, DOSAB ve Hasanağa OSB hattı.",
        h1: "Bursa Manlift Kiralama",
        paragraflar: [
            "Bursa'nın sanayi yoğunluğu Nilüfer, DOSAB ve Hasanağa OSB hattında toplanır; yüksekte çalışma talebi de çoğunlukla bu bölgelerden gelir. Bu sayfa Bursa manlift kiralama hizmetimiz için hazırlanıyor.",
            "Tesis dışı cephe, çatı ve aydınlatma işlerinde eklemli platformun kırılan kolu, önünde engel bulunan noktalara erişim sağlar. Açık ve engelsiz sahalarda teleskopik platform daha uzun erişim verir. Zeminin taşıma kapasitesi, özellikle yağış sonrası açık sahada belirleyici olur.",
            "Hedef yükseklik, zemin durumu ve çalışma süresi bilgisiyle yazılı teklif hazırlanabilir.",
        ],
        odakHizmetler: [
            "Eklemli platform (manlift) kiralama",
            "Teleskopik platform kiralama",
            "Cephe ve çatı erişim çözümleri",
            "Dizel platform seçenekleri",
            "Nakliye planlaması",
        ],
        bolgeler: ["Nilüfer", "DOSAB", "Hasanağa OSB", "Osmangazi", "Yıldırım", "Bursa OSB"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "bursamanliftkiralama.net",
        sehir: "Bursa",
        baslik: "Bursa Manlift Kiralama Fiyatları | Hazırlanıyor",
        aciklama:
            "Bursa'da uzun süreli manlift ve platform kiralama hizmeti hazırlanıyor. İnegöl, Kestel ve Gemlik hattı.",
        h1: "Bursa Manlift ve Platform Kiralama",
        paragraflar: [
            "Uzun süreli kiralama, günlük kiralamadan farklı planlanır: makinenin sahada kalacağı süre boyunca periyodik bakımı, arıza durumunda yedeklenmesi ve şarj/yakıt düzeni baştan konuşulur. Bu sayfa Bursa'nın doğu hattında — İnegöl, Kestel, Gürsu ve Gemlik çevresinde — kiralama hizmetimiz için hazırlanıyor.",
            "Mobilya ve otomotiv yan sanayinin yoğun olduğu bu hatta talep genellikle üretim salonu içi bakım ve depo işlerinden gelir; bu da akülü makaslı platform ile eklemli platformun birlikte planlanmasını gerektirir.",
            "Kiralama süresi ve çalışma programını paylaşın; makine kombinasyonu ve maliyet kalemleri yazılı olarak netleştirilsin.",
        ],
        odakHizmetler: [
            "Uzun süreli platform kiralama",
            "Akülü makaslı platform kiralama",
            "Eklemli platform kiralama",
            "Periyodik bakım ve yedekleme",
            "Proje bazlı makine planlaması",
        ],
        bolgeler: ["İnegöl", "Kestel", "Gürsu", "Gemlik", "Mudanya", "Organize Sanayi"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },

    // ------------------------------------------------------------- ESKİŞEHİR
    {
        host: "eskisehirmanlift.net",
        sehir: "Eskişehir",
        baslik: "Eskişehir Manlift Kiralama | Hazırlanıyor",
        aciklama:
            "Eskişehir'de eklemli ve teleskopik manlift kiralama hizmeti hazırlanıyor. Odunpazarı ve Organize Sanayi hattı.",
        h1: "Eskişehir Manlift Kiralama",
        paragraflar: [
            "Eskişehir Organize Sanayi Bölgesi ile Odunpazarı hattındaki tesislerde yüksekte çalışma talebi, ağırlıkla üretim hattı bakımı ve dış cephe işlerinden doğar. Bu sayfa Eskişehir manlift kiralama hizmetimiz için hazırlanıyor.",
            "Eklemli platform, önünde engel bulunan noktalara kırılan kol yapısıyla ulaşır; teleskopik platform ise açık sahada daha uzun tek yönlü erişim sağlar. Seçim, hedefe giden yolun açık olup olmadığına göre yapılır — yükseklik tek başına belirleyici değildir.",
            "Sahanın fotoğrafı ve hedef yükseklik ile uygun bom sınıfı ilk görüşmede belirlenebilir.",
        ],
        odakHizmetler: [
            "Eklemli platform (manlift) kiralama",
            "Teleskopik platform kiralama",
            "Üretim hattı bakım desteği",
            "Dış cephe erişimi",
            "Operatörlü kiralama",
        ],
        bolgeler: ["Odunpazarı", "Eskişehir OSB", "Tepebaşı", "Muttalip", "Organize Sanayi"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "eskisehirplatformkiralama.net",
        sehir: "Eskişehir",
        baslik: "Eskişehir Platform Kiralama | Hazırlanıyor",
        aciklama:
            "Eskişehir'de makaslı platform ve dikey personel yükseltici kiralama hizmeti hazırlanıyor. Tepebaşı ve şehir merkezi hattı.",
        h1: "Eskişehir Platform Kiralama",
        paragraflar: [
            "Şehir içi bakım işleri — mağaza, otel, spor salonu, kamu binası — dar geçiş ve temiz zemin koşulu getirir. Bu sayfa Eskişehir'de iç mekân ağırlıklı platform kiralama hizmetimiz için hazırlanıyor.",
            "Akülü makaslı platform egzoz üretmediği için kapalı hacimlerde çalışabilir; dar koridor ve raf aralarında ise dikey personel yükseltici, makaslı platformun sığmadığı ölçülerde iş görür. Kapı geçiş genişliği çoğu zaman yükseklikten daha kısıtlayıcıdır.",
            "Tavan yüksekliği ve giriş ölçülerini paylaşın; sahaya giren makine baştan netleşsin.",
        ],
        odakHizmetler: [
            "Akülü makaslı platform kiralama",
            "Dikey personel yükseltici kiralama",
            "İç mekân bakım çözümleri",
            "Kısa süreli kiralama",
            "Şehir içi nakliye",
        ],
        bolgeler: ["Tepebaşı", "Odunpazarı", "Şehir merkezi", "Çifteler", "Alpu"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "eskisehirvincplatform.com",
        sehir: "Eskişehir",
        baslik: "Eskişehir Sepetli Vinç ve Platform Kiralama | Hazırlanıyor",
        aciklama:
            "Eskişehir'de sepetli platform ve yüksek erişim çözümleri hazırlanıyor. Sivrihisar, Alpu ve kırsal hat.",
        h1: "Eskişehir Sepetli Platform ve Yüksek Erişim",
        paragraflar: [
            "Şehir dışı hatlarda — enerji nakil hatları, aydınlatma direkleri, tarımsal tesisler — erişim mesafesi şehir içinden uzundur ve zemin çoğunlukla hazırlıksızdır. Bu sayfa Eskişehir'in kırsal hattında yüksek erişim hizmetimiz için hazırlanıyor.",
            "Sepetli platformlar, aracın üzerine monte edilmiş bom ile noktadan noktaya hızlı geçiş sağlar; sabit sahada uzun süre çalışılacaksa teleskopik veya eklemli platform daha uygundur. Hangi çözümün doğru olduğu, gün içinde kaç farklı noktaya gidileceğine bağlıdır.",
            "Çalışılacak nokta sayısı ve aralarındaki mesafeyi paylaşın; araç mı sabit platform mu gerektiği netleşsin.",
        ],
        odakHizmetler: [
            "Sepetli platform kiralama",
            "Teleskopik platform kiralama",
            "Çok noktalı saha planlaması",
            "Kırsal hat erişimi",
            "Operatörlü kiralama",
        ],
        bolgeler: ["Sivrihisar", "Alpu", "Mahmudiye", "Seyitgazi", "Eskişehir çevre yolu"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "manlifteskisehir.com",
        sehir: "Eskişehir",
        baslik: "Manlift Eskişehir | Bakım ve Saha Desteği | Hazırlanıyor",
        aciklama:
            "Eskişehir ve Bozüyük-Bilecik hattında manlift kiralama ve saha bakım desteği hazırlanıyor.",
        h1: "Manlift Eskişehir ve Bozüyük Hattı",
        paragraflar: [
            "Eskişehir ile Bozüyük arasındaki sanayi hattı, iki ili birlikte planlamayı gerektirir: aynı makine gün içinde iki tesise gidebilir, nakliye maliyeti buna göre değişir. Bu sayfa bu hat için hazırlanıyor.",
            "Seramik, cam ve otomotiv yan sanayinin yoğun olduğu bölgede yüksekte çalışma çoğunlukla planlı duruş dönemlerinde yoğunlaşır. Bu da makinenin belirli tarihlerde hazır olmasını, gerekirse yedeklenmesini gerektirir.",
            "Planlı duruş takviminizi önceden paylaşırsanız makine tahsisi o tarihlere göre ayrılabilir.",
        ],
        odakHizmetler: [
            "Eklemli platform kiralama",
            "Makaslı platform kiralama",
            "Planlı duruş dönemi makine tahsisi",
            "Çok tesisli nakliye planı",
            "Telehandler seçenekleri",
        ],
        bolgeler: ["Eskişehir OSB", "Bozüyük", "Bilecik", "İnönü", "Organize Sanayi"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },

    // ----------------------------------------------------------------- İZMİR
    {
        host: "izmir-man-lift.com",
        sehir: "İzmir",
        baslik: "İzmir Manlift Kiralama | Hazırlanıyor",
        aciklama:
            "İzmir'de eklemli ve teleskopik manlift kiralama hizmeti hazırlanıyor. Çiğli ve Menemen sanayi hattı.",
        h1: "İzmir Manlift Kiralama — Çiğli ve Menemen",
        paragraflar: [
            "Çiğli Atatürk Organize Sanayi ile Menemen hattı, İzmir'in yüksekte çalışma talebinin en yoğun olduğu bölgelerdendir. Bu sayfa bu hat için manlift kiralama hizmetimiz için hazırlanıyor.",
            "Eklemli platformun kırılan kolu, tesis içindeki tesisat ve makine üzerinden aşarak erişim sağlar; teleskopik platform ise açık sahada daha uzun tek yönlü erişim verir. Deniz kıyısına yakın sahalarda rüzgâr, çalışma yüksekliğinin üst sınırını belirleyen ayrı bir etkendir.",
            "Hedef yükseklik ve saha koşullarını paylaşın; uygun sınıf ve teslim planı yazılı olarak netleşsin.",
        ],
        odakHizmetler: [
            "Eklemli platform (manlift) kiralama",
            "Teleskopik platform kiralama",
            "Organize sanayi saha desteği",
            "Dizel platform seçenekleri",
            "Nakliye planlaması",
        ],
        bolgeler: ["Çiğli", "Menemen", "Atatürk OSB", "Karşıyaka", "Bayraklı"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "izmir-manlift.net",
        sehir: "İzmir",
        baslik: "İzmir Manlift ve Platform Kiralama | Hazırlanıyor",
        aciklama:
            "İzmir'de manlift ve platform kiralama hizmeti hazırlanıyor. Kemalpaşa ve Torbalı organize sanayi hattı.",
        h1: "İzmir Manlift ve Platform Kiralama",
        paragraflar: [
            "Kemalpaşa ve Torbalı hattı, İzmir'in üretim yoğunluğu en yüksek bölgesidir; yüksekte çalışma talebi burada çoğunlukla fabrika içi bakım ve depo işlerinden gelir. Bu sayfa bu hat için hazırlanıyor.",
            "Kapalı üretim hacimlerinde akülü makaslı platform egzoz üretmediği için tercih edilir; dış sahada ve engelli erişimde eklemli platform devreye girer. Çoğu tesiste ikisi birlikte planlanır, çünkü aynı bakım programı hem iç hem dış işleri kapsar.",
            "Çalışma programınızı paylaşın; hangi makinenin hangi tarihte sahada olacağı baştan planlansın.",
        ],
        odakHizmetler: [
            "Akülü makaslı platform kiralama",
            "Eklemli platform kiralama",
            "Fabrika içi bakım desteği",
            "Kombine makine planlaması",
            "Uzun süreli kiralama",
        ],
        bolgeler: ["Kemalpaşa", "Torbalı", "Kemalpaşa OSB", "Bornova", "Pancar OSB"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "izmirmanliftkiralama.net",
        sehir: "İzmir",
        baslik: "İzmir Manlift Kiralama Süreci | Hazırlanıyor",
        aciklama:
            "İzmir'de manlift kiralama süreci, teklif ve teslimat planı hazırlanıyor. Aliağa ve Menderes hattı.",
        h1: "İzmir Manlift Kiralama — Aliağa ve Menderes",
        paragraflar: [
            "Aliağa ve Menderes hattındaki büyük ölçekli tesislerde kiralama, tek bir makine kararından ibaret değildir: saha giriş izni, iş güvenliği evrakları, operatör belgeleri ve teslim saati birlikte planlanır. Bu sayfa bu sürecin İzmir hattı için hazırlanıyor.",
            "Rafineri ve liman çevresindeki sahalarda genellikle belgeli operatör ve ek güvenlik koşulu aranır; bu koşulların teklif aşamasında netleşmesi, sahada zaman kaybını önler.",
            "Saha giriş koşullarınızı baştan paylaşın; evrak ve operatör planı teklifle birlikte hazırlansın.",
        ],
        odakHizmetler: [
            "Belgeli operatörlü kiralama",
            "Eklemli platform kiralama",
            "Teleskopik platform kiralama",
            "Saha giriş ve evrak planlaması",
            "Zaman kritik teslimat",
        ],
        bolgeler: ["Aliağa", "Menderes", "Gaziemir", "Nemrut", "Serbest Bölge"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "izmirmanliftkiralama.org",
        sehir: "İzmir",
        baslik: "İzmir Manlift Kiralama | Bornova ve Gaziemir | Hazırlanıyor",
        aciklama:
            "İzmir Bornova ve Gaziemir hattında manlift kiralama hizmeti hazırlanıyor.",
        h1: "İzmir Manlift Kiralama — Bornova ve Gaziemir",
        paragraflar: [
            "Bornova ve Gaziemir hattı, üretim tesisleriyle şehir içi ticari yapıların iç içe geçtiği bir bölgedir; bu da aynı gün içinde hem kapalı hacim hem dış cephe işine çıkılmasını sık kılar. Bu sayfa bu hat için hazırlanıyor.",
            "Şehir içi işlerde makinenin sahaya giriş saati ve park düzeni, makine seçimi kadar belirleyici olur. Trafik kısıtı bulunan noktalarda teslimat saatinin önceden planlanması gerekir.",
            "Adres ve giriş kısıtlarını paylaşın; teslim saati buna göre ayarlansın.",
        ],
        odakHizmetler: [
            "Makaslı platform kiralama",
            "Eklemli platform kiralama",
            "Şehir içi teslimat planı",
            "Kısa süreli kiralama",
            "Dikey personel yükseltici",
        ],
        bolgeler: ["Bornova", "Gaziemir", "Buca", "Pınarbaşı", "Işıkkent"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "izmirplatformkiralama.org",
        sehir: "İzmir",
        baslik: "İzmir Platform Kiralama | Hazırlanıyor",
        aciklama:
            "İzmir'de makaslı ve eklemli platform kiralama hizmeti hazırlanıyor. Buca ve Karabağlar hattı.",
        h1: "İzmir Platform Kiralama",
        paragraflar: [
            "Buca ve Karabağlar hattında talep, ağırlıkla küçük ve orta ölçekli işletmelerin depo, atölye ve mağaza bakımından gelir. Bu sayfa bu hat için platform kiralama hizmetimiz için hazırlanıyor.",
            "Bu ölçekteki işlerde belirleyici olan yükseklik değil, çoğunlukla geçiş genişliği ve zemin durumudur. Akülü makaslı platform temiz zeminli kapalı alanlarda; eklemli platform ise önünde engel bulunan dış noktalarda kullanılır.",
            "Kapı genişliği, zemin tipi ve hedef yüksekliği paylaşın; uygun sınıf ilk görüşmede belirlensin.",
        ],
        odakHizmetler: [
            "Akülü makaslı platform kiralama",
            "Eklemli platform kiralama",
            "Atölye ve depo bakım desteği",
            "Günlük ve haftalık kiralama",
            "Dikey personel yükseltici",
        ],
        bolgeler: ["Buca", "Karabağlar", "Konak", "Gaziemir", "Küçük sanayi siteleri"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },
    {
        host: "izmirplatformskiralama.com",
        sehir: "İzmir",
        baslik: "İzmir Platform Kiralama | Konak ve Karşıyaka | Hazırlanıyor",
        aciklama:
            "İzmir Konak ve Karşıyaka hattında platform kiralama hizmeti hazırlanıyor.",
        h1: "İzmir Platform Kiralama — Konak ve Karşıyaka",
        paragraflar: [
            "Şehir merkezinde yüksekte çalışma, sanayi sahasından farklı bir planlama gerektirir: yaya trafiği, park kısıtı, çalışma saati sınırı ve gerekli izinler. Bu sayfa İzmir merkez hattı için hazırlanıyor.",
            "Tabela, cephe temizliği, aydınlatma ve klima montajı gibi işlerde makine genellikle kısa süre sahada kalır; bu nedenle teslim ve toplama saatlerinin netliği maliyeti doğrudan etkiler.",
            "Çalışma saatiniz ve adres kısıtlarını paylaşın; teslim planı buna göre kurulsun.",
        ],
        odakHizmetler: [
            "Makaslı platform kiralama",
            "Eklemli platform kiralama",
            "Cephe ve tabela işleri desteği",
            "Saatlik ve günlük kiralama",
            "Merkez içi teslim planı",
        ],
        bolgeler: ["Konak", "Karşıyaka", "Alsancak", "Bayraklı", "Şehir merkezi"],
        anaSite: ARTI,
        telefon: ARTI_TEL,
        telefonGosterim: ARTI_TEL_GOSTERIM,
        eposta: ARTI_EPOSTA,
    },

    // ------------------------------------------------- FARKLI DIKEY: TABELA
    {
        host: "bursa-tabela.net",
        sehir: "Bursa",
        baslik: "Bursa Tabela ve Reklam Üretimi | Hazırlanıyor",
        aciklama:
            "Bursa'da tabela, ışıklı harf ve cephe giydirme üretimi için hazırlık sürüyor.",
        h1: "Bursa Tabela ve Reklam Üretimi",
        paragraflar: [
            "Bu alan adı, platform kiralama değil tabela ve açık hava reklam üretimi içindir. Bursa'da tabela, kutu harf, ışıklı pano ve cephe giydirme işleri için sayfa hazırlanıyor.",
            "Tabela işi iki ayrı aşamadan oluşur: üretim ve montaj. Yüksek cephelerde montaj aşaması, ayrıca yüksekte çalışma ekipmanı gerektirir; bu iki tarafın birlikte planlanması iş süresini kısaltır.",
            "Ölçü, cephe fotoğrafı ve malzeme tercihinizi paylaşın; üretim ve montaj planı birlikte çıkarılsın.",
        ],
        odakHizmetler: [
            "Tabela üretimi",
            "Kutu harf ve ışıklı pano",
            "Cephe giydirme",
            "Yüksek cephe montajı",
            "Kurumsal kimlik uygulaması",
        ],
        bolgeler: ["Nilüfer", "Osmangazi", "Yıldırım", "İnegöl", "Bursa geneli"],
        anaSite: { ad: "Simya Reklam", url: "https://www.simyareklam.com.tr" },
    },
];

export function hostIcinHazirlananSite(host: string): HazirlananSite | undefined {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return hazirlananSiteler.find((s) => s.host === temiz);
}
