// ═══════════════════════════════════════════════════════════════════════════
// izmirforkliftkiralama.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Depo, üretim ve yükleme sahalarında FORKLİFT kiralama. Açı: tonaj
// seçimi, akülü/dizel/LPG karşılaştırması, çatal-ataşman dünyası, dar koridor
// senaryoları, rampa operasyonları, kısa-uzun dönem kiralama ekonomisi.
//
// ⚠️ Bu domain YÜK ELLEÇLEME anlatır — personel yükseltme platformu (manlift)
// DEĞİL. Aynı bölge slug'ları kardeş platform domainlerinde farklı makine
// tipiyle yazıldı; cümle kalıbı tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca sektör standardı, doğrulanabilir teknik bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIRFORKLIFTKIRALAMA_NET: Record<string, BespokeIcerik> = {
    "bolge:kemalpasa-osb": {
        h1: "Kemalpaşa OSB Lojistik Depolarında Doğru Forklift Seçimi",
        giris: "Kemalpaşa Organize Sanayi Bölgesi'ndeki bir depo için forklift seçimi, en ağır paletin tonajını söyleyip makine istemekle tamamlanmaz. KOSBİ'nin varlığı kamuya açık bir bölge gerçeğidir; belirli bir deponun raf yüksekliği, yük tipi veya vardiyası ise ölçülmeden varsayılamaz. Bu nedenle seçim dosyasını yük ağırlığı ve ağırlık merkezi, kaldırma kotu, en dar koridor, kapı-mast açıklığı, rampa eğimi, zemin ve çalışma süresiyle kurarız. Kapalı raf koridorunda akülü karşı ağırlıklı ya da uygun depo ekipmanı değerlendirilirken, açık yükleme sahasında zemin ile mesafe güç tipi kararını değiştirebilir. Ataşman eklenecekse kendi ağırlığı ve yükü öne taşıması artık kapasiteyi yeniden hesaplatır. Hedef büyük makine göndermek değil, gerçek yük diyagramında işi güvenli karşılayan ve depoda manevra edebilen en uygun sınıfı belirlemektir. Böylece sahaya gelen forklift kapıdan geçemeyen, rafa erişemeyen veya vardiyanın ortasında enerji planı biten bir ekipmana dönüşmez.",
        maddeler: [
            { baslik: "Yükü yalnız kilogramla değil geometriyle tanımlamak", metin: "Aynı ağırlıktaki kısa palet ile uzun profil demeti forklifte aynı momenti uygulamaz. Yükün boyutları, ağırlık merkezinin çatal topuğundan uzaklığı, palet girişi ve hassasiyet ihtiyacı teklif formuna eklenir. Makinenin nominal kapasitesi standart bir yük merkezi koşulunda verilir; gerçek yük öne çıktıkça kullanılabilir kapasite düşebilir. Seçim üreticinin yük diyagramı üzerinden doğrulanır. Etiketteki tonajı doğrudan her kaldırma yüksekliği ve ataşman için geçerli saymayız." },
            { baslik: "Raf kotu ile kapalı mast yüksekliğini birlikte ölçmek", metin: "Forklift en üst rafa ulaşmalı, fakat depoya girerken kapı, asma kat veya tavan altından da geçebilmelidir. Gereken kaldırma yüksekliği, üst kiriş ve yükün yerleşme payıyla belirlenir; makinenin kapalı mast ölçüsü en düşük geçişle karşılaştırılır. Konteyner ya da alçak hacim içinde kaldırma varsa serbest kaldırma ihtiyacı ayrıca incelenir. Yalnız yüksek mast seçmek giriş sorununa, yalnız kısa makine seçmek üst rafın kullanılamamasına yol açabilir. İki ölçü aynı teknik föyde kapatılır." },
            { baslik: "Koridor ve dönüş hesabını depo planında yapmak", metin: "Karşı ağırlıklı forkliftin gövde boyu, yük uzunluğu ve dönüş yarıçapı paleti raf gözüne çevirmek için gereken alanı belirler. En dar koridor net ölçülür; kolon, yangın ekipmanı, palet taşması ve koruma bariyeri etkin genişlikten düşülür. Standart forklift manevra edemiyorsa daha kompakt sınıf veya uygun depo ekipmanı değerlendirilir. Katalogdaki tek genişlik değeri yerine gerçek yükle dönüş senaryosu kullanılır. Deneme yapılacaksa raf ve yaya alanı ayrılarak kontrollü gerçekleştirilir." },
            { baslik: "Kapalı depo ve rampa arasında güç tipi kararı", metin: "Emisyon ve havalandırma koşulu kapalı alanda akülü seçeneği öne çıkarır; dış saha, bozuk zemin veya uzun mesafe ise başka bir güç ve lastik yapısı gerektirebilir. Tek forklift iki ortamı paylaşacaksa en ağır koşul kadar kapalı alan kuralı da bağlayıcıdır. Akülü modelde vardiya süresi, şarj altyapısı ve akü teknolojisi; diğer seçeneklerde işletmenin iç ortam prosedürü değerlendirilir. Güç tipi yalnız yakıt tercihi değildir, çalışma alanı ile süreklilik kararının sonucudur." },
            { baslik: "Ataşmanın net kapasite ve hidrolik ihtiyacını hesaplamak", metin: "Sideshift, çatal konumlandırıcı, klemens veya başka ataşman yükü daha kontrollü tutabilir; bunun karşılığında kendi ağırlığı ve kalınlığı kapasite merkezini değiştirir. Forklift-ataşman birleşiminin kalan kapasitesi üretici verisiyle görülür, ek hidrolik fonksiyon ve bağlantı uyumu doğrulanır. Sırf çatal açıklığı yetmediği için sahada doğaçlama uzatma kullanılmaz. Yük ailesi çeşitliyse her biri ataşman ve kapasite tablosuna yazılır; seçilen kombinasyon en kritik yükü güvenli karşılamalıdır." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa depo seçimi için veri matrisi", paragraflar: ["Tablo, makine sınıfını kesinleştirmeden önce sahadan alınacak verileri ve bunların etkilediği kararı gösterir. Sayısal değerler müşterinin gerçek ölçüsünden ve üretici föyünden gelir."], tablo: { basliklar: ["Saha verisi", "Neden gerekli", "Etkilediği seçim", "Doğrulama"], satirlar: [["En ağır ve en uzun yük", "Gerçek yük momentini belirler", "Kapasite sınıfı", "Yük diyagramı"], ["Üst raf kotu", "Yerleştirme yüksekliğini gösterir", "Mast ve kaldırma", "Ölçü/raf planı"], ["En düşük geçiş", "Kapalı mast sınırını koyar", "Mast tipi", "Net açıklık ölçüsü"], ["Dar koridor", "Yüklü dönüş alanını sınırlar", "Şase/depo ekipmanı", "Plan veya kontrollü prova"], ["İç-dış rota ve vardiya", "Emisyon, lastik ve enerji ihtiyacı", "Güç tipi", "Saha turu ve çalışma programı"]] } },
            { baslik: "Kiralama öncesi kontrollü saha provası", paragraflar: ["Karmaşık raf planı veya kritik yükte, uygun model belirlendikten sonra kontrollü prova değerlendirilebilir. Boş çatalla giriş, dönüş ve kapalı mast geçişi görülür; gerçek yük testi yapılacaksa işletmenin yetkili ekibi, kapasite diyagramı ve ayrılmış alanla yürütülür. Operatör depo hız kuralı ve yaya yolları konusunda brifing alır.", "Prova başarısı yalnız raf kotuna ulaşmak değildir. Kör nokta, dönüşte palet taşması, rampa geçişi ve şarj/park yerine erişim de kaydedilir. Uygunsuzluk varsa daha büyük makineye otomatik geçmek yerine hangi ölçünün engel olduğu belirlenir. Bazen daha kompakt şase, farklı mast veya iş akışını bölmek doğru çözümü sağlar." ] },
            { baslik: "Vardiyalı depoda enerji ve ikame planı", paragraflar: ["Akülü forkliftin günlük görev döngüsü; sürüş, kaldırma, bekleme ve rampa kullanımıyla birlikte değerlendirilir. Şarj penceresi ile güvenli şarj alanı işletme tarafından hazırlanır. Akü tipine uygun kullanım talimatı uygulanır; kablo ve bağlantı yaya koridoruna taşmaz. Birden fazla vardiyada tek enerji kaynağının yetip yetmeyeceği gerçekleşen kullanım kaydıyla izlenir.", "Kritik yükleme programında teknik arıza için bildirim, servis ve ikame sırası sözleşmeye yazılır. İkame yalnız aynı tonaj etiketine bakılarak kabul edilmez; mast, ataşman, koridor ve güç tipi eşleşmesi korunur. Böylece süreklilik adına depoya teknik olarak farklı ve kullanılamaz bir forklift gönderilmez." ] },
        ],
        sss: [
            { soru: "Depomuz için kaç tonluk forklift gerekir?", cevap: "En ağır yük tek başına cevap değildir. Yükün boyu ve ağırlık merkezi, kaldırılacağı maksimum kot, kullanılacak ataşman ve üreticinin o yükseklikte verdiği kalan kapasite birlikte incelenir. Uzun yük veya ataşman kapasiteyi nominal etiketin altına düşürebilir. En kritik yükün ölçü ve ağırlığını, palet tipini ve raf kotunu paylaşırsanız yük diyagramıyla uygun sınıf belirlenir. Güvenlik payı, sahada tahminle değil doğrulanmış teknik veriyle bırakılır." },
            { soru: "Üst rafa çıkan forklift kapımızdan geçmezse ne yapılır?", cevap: "Kaldırma yüksekliği ile kapalı mast ölçüsünü birlikte sağlayan mast seçeneği aranır; tripleks veya tam serbest kaldırmalı yapı ihtiyaca göre değerlendirilebilir. Kapının net yüksekliği, eşik ve üstteki tesisat çıkıntıları ölçülür. Mastı güvenlik dışı biçimde indirip değiştirmek veya açıklığa zorlamak çözüm değildir. Uygun tek makine bulunamıyorsa dış yükleme ve iç raf görevi farklı ekipmanlara ayrılabilir. Karar üretici ölçüleriyle verilir." },
            { soru: "Dar koridorda normal forklift çalışır mı?", cevap: "Makine modeli, yük uzunluğu ve raf yerleştirme açısı görülmeden evet denemez. Koridorun en dar net ölçüsü alınır; palet taşmaları ve korumalar hesaba katılır. Üreticinin yüklü dönüş/istif koridoru verisiyle karşılaştırılır. Karşı ağırlıklı sınıf uygun değilse reach truck veya başka depo ekipmanı düşünülebilir; bunların da düzgün zemin ve çalışma ortamı sınırları vardır. Kontrollü prova, plan üzerindeki hesabı gerçek sahada doğrulayabilir." },
            { soru: "Tek forklift hem depo içinde hem açık rampada kullanılabilir mi?", cevap: "Rota, havalandırma, zemin, eğim ve çalışma süresine göre mümkün olabilir; fakat iki ortamın şartları uzlaştırılmalıdır. Kapalı alanda işletmenin emisyon kuralı güç tipini sınırlar. Açık rampada lastik tutunması, yağış, eğim ve yükle frenleme önem kazanır. Tek makine her iki tarafta yetersiz kalıyorsa iç ve dış işi ayırmak daha güvenli ve verimli olabilir. Saha turunda geçiş hattı ile görev oranını görüp seçenekleri karşılaştırırız." },
            { soru: "Sideshift takılması kapasiteyi değiştirir mi?", cevap: "Evet, ataşmanın ağırlığı ve yükü öne taşıyan kalınlığı net kapasiteyi etkileyebilir. Değişimin miktarı forklift ve ataşman kombinasyonunun üretici verisinden okunmalıdır; genel bir oran uydurulmaz. Hidrolik devre uyumu ve görünür kapasite etiketi de doğrulanır. Ataşman takıldıktan sonra eski çıplak çatal kapasitesiyle çalışma yapılmaz. En ağır yük, maksimum kot ve gerçek yük merkezi yeni kombinasyon diyagramında güvenli bölgede kalmalıdır." },
            { soru: "Çok vardiyalı depo için akülü forklift yeterli olur mu?", cevap: "Görev döngüsü, akü teknolojisi, şarj altyapısı ve molalar görülürse hesaplanabilir. Sürekli hareket ve kaldırma ile aralıklı kullanım aynı enerji tüketimini yaratmaz. İlk günlerde çalışma ve şarj kaydı tutarak planın gerçek sahadaki yeterliliğini doğrularız. Yedek akü, fırsat şarjı veya farklı enerji çözümü yalnız uygun teknoloji ve tesis altyapısıyla değerlendirilir. Vardiya ortasında plansız enerji kaybı yaşamamak için şarj alanı ile sorumlusu teslimattan önce belirlenir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. KOSBİ'nin varlığı kamuya açık bilgidir; yük merkezi, yük diyagramı, mast, koridor ve ataşman ilkeleri sektör standardı teknik bilgidir. Seçim matrisi ile prova/ikame düzeni firma pratiğidir; depo ölçüsü, yük veya kapasite uydurulmamıştır.",
    },
    "bolge:torbali": {
        h1: "Torbalı Üretim ve Depo Sahalarında Forklift Seçim Planı",
        giris: "Torbalı'daki karma üretim-depo düzeninde aynı yük, tesise girişinden raf yerleşimine ve üretim hattı beslemesine kadar farklı zemin, mesafe ve manevra koşullarından geçebilir. İlçenin büyüyen sanayi aksı niteliği kamuya açık olsa da belirli bir işletmenin ürünü, kapasitesi veya lojistik akışı ölçülmeden varsayılamaz. Bu nedenle forklift talebini tek tonaj satırıyla değil görev zinciriyle çözüyoruz: araç boşaltma, açık saha taşıma, kapı geçişi, raf istifi, hat besleme ve boş ambalaj dönüşü ayrı ayrı inceleniyor. Her adım için yük merkezi, kaldırma kotu, koridor, eğim, emisyon ve vardiya süresi yazılıyor. Tek forklift bütün zinciri güvenle karşılıyorsa ortak sınıf seçiliyor; açık rampanın ağır koşulu ile dar kapalı koridor birbiriyle çelişiyorsa işi iki uygun ekipmana bölmek değerlendiriliyor. Amaç en yüksek kapasiteli makineyi kiralamak değil, yük akışındaki darboğazı güvenlik veya manevra kaybı yaratmadan kapatan sistemi kurmaktır.",
        maddeler: [
            { baslik: "Yükün tesiste izlediği yolu adım adım çıkarmak", metin: "Forkliftin yalnız paleti nereden alıp nereye bıraktığı değil, aradaki kapı, dönüş, rampa, yaya kesişimi ve bekleme noktası da kaydedilir. Gidiş ile dönüş rotası farklıysa ikisi ayrı yürünür. Her adımda yükün boyutu ve görüşü nasıl etkilediği görülür. Bu akış haritası, dışarıda uygun görünen bir makinenin iç koridorda neden sorun çıkaracağını ya da raf için seçilen kompakt modelin rampada neden yetersiz kalabileceğini daha kiralama başlamadan gösterir." },
            { baslik: "Araç boşaltma ile raf istifini aynı görev saymamak", metin: "Rampa veya saha boşaltmasında zemin, eğim, dorsenin yüksekliği ve araç sabitleme düzeni öne çıkar. Raf istifinde ise mast, serbest kaldırma, koridor ve hassas konumlama belirleyicidir. Bir makine iki görevi de yapacaksa her ikisinin teknik sınırını karşılamalıdır. Yalnız dış boşaltma tonajına göre büyük şase seçmek raf koridorunu kullanılamaz hâle getirebilir; yalnız depo makinesini rampaya göndermek zemin ve eğim sınırını aşabilir. Görevler bu yüzden ayrı satırlarda doğrulanır." },
            { baslik: "Hat beslemede hız yerine ritim ve görünürlük planlamak", metin: "Üretim hattına malzeme taşıyan forkliftin görevi yalnız hızlı gitmek değildir. Teslim noktası, boş kasa dönüşü, yaya geçişleri ve vardiya içi çağrı sıklığı çevrim planına eklenir. Yük görüşü kapatıyorsa geri sürüş veya yardımcı yönlendirme prosedürü işletmenin trafik kuralına göre belirlenir. Koridorlarda hız sınırı ile dur işaretleri korunur. Yeterli çevrim için kapasite artışı gerekiyorsa önce rota ve bekleme darboğazı incelenir; daha büyük forkliftin dar alanda problemi büyütmesine izin verilmez." },
            { baslik: "Tek makine mi görev bazlı iki sınıf mı kararını vermek", metin: "Ortak makine yatırım ve koordinasyonu sadeleştirir, fakat tüm görevlerin kesişim kümesi teknik olarak çok dar olabilir. Açık sahada lastik ve güç ihtiyacıyla kapalı depodaki emisyon-koridor şartları çelişiyorsa iki sınıfın görev paylaşımı değerlendirilir. İş hacmi düşükse zaman penceresiyle aynı forklift kullanılabilir; eş zamanlı yükleme ve hat besleme varsa tek makine operasyon darboğazı olabilir. Karar gerçek çevrim ve görev saatlerine dayanır, belirli bir verim yüzdesi vaat edilmez." },
            { baslik: "Sezon veya proje değişiminde seçimi yeniden doğrulamak", metin: "Yük ailesi, palet ölçüsü, raf düzeni veya sevkiyat yoğunluğu değiştiğinde önceki forklift seçimi otomatik olarak uygun kalmaz. Daha uzun yük ağırlık merkezini, yeni raf mast ihtiyacını, farklı ambalaj ataşman kararını değiştirebilir. Kısa dönem artışta ek kiralık makine, uzun dönem değişimde kalıcı sınıf revizyonu incelenir. Operatör gözlemleri ve hasar/near-miss kayıtları da değerlendirmeye alınır. Seçim dosyası, tesis akışı değiştikçe güncellenen teknik bir kayıt olarak tutulur." },
        ],
        ekBolumler: [
            { baslik: "Torbalı karma saha görev-makine matrisi", paragraflar: ["Tablo, üretim ve depo arasında değişen görevlerin hangi verilerle ayrıştırılacağını gösterir. Kesin makine üretici verileri ve müşterinin gerçek ölçüleriyle seçilir."], tablo: { basliklar: ["Görev", "Baskın koşul", "Kontrol verisi", "Seçim sonucu"], satirlar: [["Araç/rampa boşaltma", "Eğim, sabitleme ve dış zemin", "Yük, rampa, lastik", "Saha uygun karşı ağırlıklı sınıf"], ["Kapıdan içeri taşıma", "Geçiş ve emisyon", "Kapalı mast, net kapı, güç tipi", "İç ortam uyumlu model"], ["Raf istifi", "Kot ve yüklü dönüş", "Mast, serbest kaldırma, koridor", "Raf/depo ekipmanı"], ["Hat besleme", "Sık çevrim ve yaya kesişimi", "Rota, çağrı ritmi, görüş", "Kompakt ve kontrol edilebilir sınıf"], ["Açık stok alanı", "Zemin ve mesafe", "Yüzey, eğim, hava koşulu", "Dış kullanıma uygun makine"]] } },
            { baslik: "Karma görev için kontrollü deneme senaryosu", paragraflar: ["Tek forklift adayı belirlenirse prova en kolay noktada değil bütün zincirin sınırlarında yapılır. Kapalı mastla giriş, en dar yüklü dönüş, üst raf erişimi, rampada güvenli hareket ve şarj/park yerine ulaşım ayrı kontrol edilir. Deneme alanları üretim ile yaya akışından ayrılır; yük testi üretici diyagramı ve işletme sorumlusu gözetiminde yürütülür.", "Bir adım başarısız olduğunda doğrudan daha büyük modele geçilmez. Sorunun şase, mast, lastik, güç tipi veya iş akışından hangisine ait olduğu bulunur. Görevlerin bölünmesi, farklı ataşman ya da rota değişikliği seçenekleri karşılaştırılır. Prova sonucu seçim dosyasına işlenir ve operatör brifingine dönüştürülür." ] },
            { baslik: "Vardiya değişiminde forklift teslim ve görev kuyruğu", paragraflar: ["Çok vardiyalı düzende yeni operatör yalnız anahtarı değil, makinenin kontrol durumu, enerji/yakıt seviyesi, takılı ataşman, açık arıza kaydı ve sıradaki görevleri teslim alır. Günlük kontrol yeni vardiyada tekrarlanır. Üretim hattına ayrılmış makinenin plansız biçimde yüklemeye çekilmesi gerekiyorsa sorumlu kişi görev önceliğini günceller; operatör iki taraftan gelen sözlü talepler arasında seçim yapmaz.", "Devir verileri gerçek kullanım yoğunluğunu da gösterir. Sürekli bekleyen görevler makine kapasitesi, sayı veya rota kararının yeniden incelenmesini gerektirebilir. Boş geçen süre ise ikinci ekipman ihtiyacını sorgulatır. Devir kaydı pazarlama sonucu değil, Torbalı'daki ilgili tesisin kendi operasyon kararına kanıt sağlar." ] },
        ],
        sss: [
            { soru: "Tek forklift hem üretim hattını besleyip hem kamyon boşaltabilir mi?", cevap: "Görevler eş zamanlı değilse ve seçilen makine rampa, dış zemin, kapalı alan, koridor, mast ile emisyon şartlarının tamamını karşılıyorsa mümkün olabilir. Ancak yükleme çağrısı hattın beslemesini sürekli kesiyorsa tek makine operasyon darboğazına dönüşür. Önce görev saatleri ve çevrimleri çıkarılır, ardından teknik ortak sınıf değerlendirilir. İki farklı ekipman kararı yalnız yoğunluğa değil, açık ve kapalı alan şartlarının bir makinede güvenle birleşip birleşmediğine dayanır." },
            { soru: "Rampa için dizel, içerisi için akülü mü gerekir?", cevap: "Her saha için otomatik bir ikili kural yoktur. Rampanın eğimi, zemini ve açık hava kullanımı; iç alanın havalandırması, işletme emisyon kuralı ve koridoru birlikte incelenir. Uygun akülü karşı ağırlıklı bazı karma görevleri karşılayabilir; ağır dış koşul başka sınıf gerektirebilir. Tek makine teknik olarak mümkün olsa bile vardiya enerjisi ve eş zamanlı görevler ayrıca hesaplanır. Seçenekleri gerçek rota ve üretici verisiyle karşılaştırırız." },
            { soru: "Hat besleme için daha hızlı forklift seçmek üretimi artırır mı?", cevap: "Hız tek başına güvenli veya verimli çevrim oluşturmaz. Bekleme noktaları, kapı, yaya kesişimi, yük hazırlığı ve teslim alanı çevrimin büyük bölümünü belirleyebilir. İşletmenin hız sınırı aşılmaz. Önce akış haritasında duruşlar ve geri dönüş rotası görülür; doğru şase, görüş ve yük kapasitesi seçilir. Darboğaz makine sayısıysa ek ekipman, rota düzeniyse trafik iyileştirmesi değerlendirilir. Doğrulanmamış üretim artışı yüzdesi vaat etmeyiz." },
            { soru: "Yeni palet ölçüsü forklift kapasitesini değiştirir mi?", cevap: "Ağırlık aynı kalsa bile paletin derinliği veya yük dağılımı ağırlık merkezini öne taşıyabilir ve kullanılabilir kapasiteyi düşürebilir. Çatal uzunluğu, açıklığı, yük diyagramı ve raf gözü uyumu yeniden kontrol edilir. Palet dengesizse yalnız daha yüksek tonaj seçmek çözüm olmayabilir; ambalaj veya ataşman düzeni de gözden geçirilir. Yeni yük ailesi gerçek ölçü ve ağırlığıyla seçim dosyasına eklenmeden eski makineyle otomatik çalışmaya devam edilmez." },
            { soru: "Yoğun dönem için ikinci forklift kısa süreli kiralanabilir mi?", cevap: "Güncel filo uygunluğu ve saha verisiyle kısa süreli ek makine planlanabilir. İkinci forkliftin görevi net tanımlanır: örneğin yalnız rampa yükleme veya yalnız hat besleme. Böylece ana makinenin bütün teknik özelliklerini kopyalamak yerine göreve uygun sınıf seçilir. Operatör, park, enerji/yakıt ve trafik düzeni iki makineye göre güncellenir. Dönem sonunda gerçekleşen kullanım incelenerek ihtiyacın geçici mi kalıcı mı olduğu değerlendirilir." },
            { soru: "Forklift seçim dosyası ne zaman yenilenmeli?", cevap: "Yük boyutu veya ağırlığı, raf kotu, kapı-koridor, ataşman, güç tipi, vardiya süresi ya da trafik rotası değiştiğinde yeniden doğrulanmalıdır. Ayrıca tekrarlayan hasar, devrilme riski bildirimi veya görev beklemesi mevcut seçimin uygunluğunu sorgulatır. Periyodik gözden geçirme tarihini işletme kendi bakım ve İSG sistemine göre belirler. Biz kiralama kapsamında kullanılan makine ve görev verisini sunar, yeni seçim için üretici teknik föyleriyle karşılaştırma yaparız." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Torbalı'nın büyüyen sanayi aksı niteliği kamuya açık bilgidir; görev zinciri, yük merkezi, mast, koridor ve güç tipi forklift tekniğidir. Tek/iki makine matrisi ile vardiya kuyruğu firma pratiğidir; tesis, yük, kapasite veya verim rakamı uydurulmamıştır.",
    },
    "bolge:cigli-ataturk-osb": {
        h1: "Çiğli Atatürk OSB Vardiyalı Tesislerinde Akülü veya Dizel Forklift Seçimi",
        giris: "İzmir Atatürk Organize Sanayi Bölgesi'ndeki vardiyalı bir tesiste akülü ya da dizel forklift kararı, yalnız yakıt maliyeti veya alışkanlık üzerinden verilemez. İzmir Atatürk OSB'nin çok sektörlü yapısı kamuya açık olsa da belirli işletmenin kapalı alanı, vardiya süresi, yükü ve altyapısı ölçülmeden seçim yapılamaz. Önce görevlerin ne kadarının kapalı hacimde, açık sahada, rampada ve raf koridorunda gerçekleştiğini çıkarırız. Kapalı alandaki emisyon ve gürültü koşulları akülü seçeneği öne çıkarırken, dış zeminin yapısı, uzun mesafe ve çalışma çevrimi farklı teknik ihtiyaçlar doğurabilir. Akülü tarafta batarya kimyası, şarj gücü, mola penceresi ve yedekleme; dizel tarafta yalnız dış kullanım sınırı, egzoz, gürültü ve yakıt operasyonu birlikte değerlendirilir. Karma görev tek makineye sığmıyorsa iç ve dış akış ayrılır. Amaç vardiya ortasında enerji kaybeden veya çevre şartına uymayan forklift değil, görev döngüsü boyunca ölçülmüş kapasite ve erişilebilir bir ikame düzenidir.",
        maddeler: [
            { baslik: "Vardiya görev profilini enerji hesabına çevirmek", metin: "Forkliftin kontak açık kaldığı süre yerine gerçek sürüş, kaldırma, rampa, bekleme ve ataşman kullanımı ayrı kaydedilir. Aynı vardiya süresinde yoğun araç boşaltan makineyle aralıklı hat besleyen ekipmanın enerji ihtiyacı farklıdır. İlk değerlendirme iş emri ve çevrim sayısından yapılır; kiralama başladıktan sonra gerçek kullanım kaydıyla doğrulanır. Şarj veya yakıt planı bu profile göre yazılır. Tahmini tek bir çalışma saati değeri bütün tesislere genellenmez." },
            { baslik: "Kapalı alan kuralını karma görevin sınırı yapmak", metin: "Bir forklift günün kısa bölümünde bile havalandırması sınırlı kapalı alana giriyorsa işletmenin emisyon prosedürü bağlayıcıdır. Dizel makinenin dış sahadaki avantajı, içeri girmesine otomatik izin vermez. Kapı açık diye kapalı hacim açık saha sayılmaz; tesis İSG ve çevre sorumlusu koşulu belirler. Tek akülü model dış görevi teknik olarak karşılamıyorsa iş iki makineye veya aktarma noktasına bölünebilir. Güç tipi kararını en kolay görev değil, en kısıtlayıcı ortam belirler." },
            { baslik: "Şarj altyapısını makine gelmeden doğrulamak", metin: "Akülü forklift seçildiğinde uygun elektrik bağlantısı, şarj alanı, havalandırma ve yangın düzeni batarya teknolojisine göre tesisçe hazırlanmalıdır. Şarj kablosu trafik yoluna taşmaz; sorumlu kişiler ve izin verilen zamanlar vardiya planına yazılır. Fırsat şarjının mümkün olup olmadığı batarya sistemine bağlıdır, her aküye aynı yöntem uygulanmaz. Yetersiz elektrik altyapısı sahada uzatma kablosuyla doğaçlama çözülmez. Makine, şarj cihazı ve tesis bağlantısının uyumu teslimat öncesi belgelenir." },
            { baslik: "Dış saha için zemin ve görev yoğunluğunu ayrı tartmak", metin: "Açık alanda dizel tercihi otomatik değildir; yüzey, eğim, yağış, taşıma mesafesi ve yük döngüsü görülür. Düz ve düzenli zemindeki karma iş uygun akülü karşı ağırlıklıyla çözülebilirken, bozuk yüzey veya ağır dış görev farklı lastik ve güç ihtiyacı doğurabilir. Makinenin kabin, aydınlatma ve hava koşulu uygunluğu da vardiyalı kullanımda önemlidir. Seçim, motor tipini performans etiketi gibi kullanmak yerine gerçek dış saha koşuluyla eşleştirilir." },
            { baslik: "Enerji kesintisi ve arıza için vardiya ikamesi kurmak", metin: "Çok vardiyalı tesiste enerji planı başarısız olduğunda yalnız forklift değil yük akışı da durabilir. Düşük şarj uyarısı, şarj cihazı arızası, yakıt tedariki veya teknik problem için bildirim zinciri yazılır. Uygun ikame sınıfı yük, mast, ataşman ve iç-dış ortam koşuluyla önceden tanımlanır. Başka güç tipindeki makineyi aceleyle aynı alana sokmayız. İkame gelene kadar hangi görevlerin ertelenebileceği ve güvenli park düzeni işletmenin operasyon planında gösterilir." },
        ],
        ekBolumler: [
            { baslik: "Çiğli vardiyasında güç tipi karar tablosu", paragraflar: ["Bu tablo, akülü veya dizel etiketinden önce görev ve altyapı verisinin nasıl okunacağını gösterir. Kesin seçim işletme kuralları ve üretici teknik sınırlarıyla yapılır."], tablo: { basliklar: ["Koşul", "Akülü değerlendirmesi", "Dizel değerlendirmesi", "Karar kanıtı"], satirlar: [["Kapalı, sınırlı havalandırma", "Emisyonsuz kullanım yönünden uygun", "İşletme kuralınca çoğunlukla kısıtlı", "Tesis İSG/çevre prosedürü"], ["Açık düz saha", "Görev döngüsü ve lastik uygunsa mümkün", "Yoğun dış görevde değerlendirilebilir", "Zemin ve çevrim kaydı"], ["Bozuk/eğimli dış rota", "Modelin çekiş ve zemin sınırı incelenir", "Uygun dış saha sınıfı incelenir", "Üretici verisi ve saha turu"], ["Çok vardiyalı kullanım", "Şarj/batarya planı zorunlu", "Yakıt ve dış kullanım organizasyonu", "Gerçek enerji tüketimi"], ["İç-dış eş zamanlı görev", "İç akışa ayrılabilir", "Dış akışa ayrılabilir", "İki makine veya aktarma analizi"]] } },
            { baslik: "Akülü seçenekte vardiya enerji denemesi", paragraflar: ["İlk kullanım döneminde başlangıç ve bitiş enerji durumu, görev türü, kaldırma yoğunluğu, rampa ve bekleme not edilir. Operatör yalnız göstergeyi değil performans uyarılarını da devir formuna yazar. Şarjın hangi molada ve ne kadar süreyle yapıldığı batarya sisteminin talimatına göre kaydedilir.", "Veri yetersizliği görülürse hemen genel sonuç çıkarılmaz; rota, boş bekleme ve yanlış şarj uygulaması ayrıştırılır. Daha büyük batarya, yedekleme, farklı teknoloji veya görev bölme seçenekleri üretici ve tesis altyapısıyla değerlendirilir. Hedef katalog süresini ispatlamak değil, gerçek Çiğli tesisindeki görev döngüsünü güvenle tamamlayan düzeni bulmaktır." ] },
            { baslik: "İç ve dış filoyu aktarma noktasıyla ayırmak", paragraflar: ["Tek makinenin bütün ortam koşullarını karşılamadığı durumda malzeme, açık saha forkliftinden kapalı alan ekipmanına kontrollü bir aktarma noktasında devredilebilir. Nokta düz, aydınlık ve iki makinenin manevrasına uygun seçilir; yaya geçişinden ayrılır. Yük tanımı ile teslim sorumluluğu barkod, form veya işletmenin mevcut yöntemiyle korunur.", "Aktarma ek bir elleçleme adımıdır; yük hasarı ve zaman etkisi değerlendirilmelidir. Buna karşılık dizel ekipmanın kapalı alana girmesini veya depo makinesinin uygunsuz dış zeminde çalışmasını engelleyebilir. Tek ve çift filo senaryosu çevrim, personel ve alan ihtiyacıyla karşılaştırılır; doğrulanmamış verim sonucu kullanılmaz." ] },
        ],
        sss: [
            { soru: "Üç vardiya çalışan tesiste akülü forklift yeter mi?", cevap: "Yeterlilik batarya teknolojisi, gerçek görev döngüsü, şarj gücü ve molalara bağlıdır. Sürekli rampa ve kaldırma yapan makineyle aralıklı depo görevindeki tüketim aynı olmaz. İlk plan görev verisinden çıkar, kullanım kaydıyla doğrulanır. Uygun sistemde yedek batarya, fırsat şarjı veya görev bölme değerlendirilebilir; her bataryaya aynı şarj yöntemi uygulanmaz. Şarj alanı ve sorumlusu hazır değilse yalnız büyük batarya seçmek sürdürülebilir çözüm değildir." },
            { soru: "Dizel forklift kapısı açık depoya girebilir mi?", cevap: "Kapının açık olması alanın otomatik olarak dış ortam sayılması için yeterli değildir. Hacim, havalandırma, çalışma süresi, egzoz maruziyeti ve tesisin İSG/çevre prosedürü yetkili ekipçe değerlendirilir. İşletme dizel kullanımını kabul etmiyorsa makine içeri alınmaz. Dış forklift yükü aktarma noktasına bırakabilir, iç akışı akülü ekipman sürdürebilir. Operatör üretim baskısıyla saha kuralını değiştiremez." },
            { soru: "Akülü forklift dış sahada çalışabilir mi?", cevap: "Modelin dış kullanım onayı, zemin, eğim, lastik, hava koşulu ve görev yoğunluğu uygunsa çalışabilir. Bütün akülü forkliftler aynı dış saha kabiliyetine sahip değildir. Suya maruz kalma, bozuk yüzey ve uzun taşıma rotası üretici sınırlarıyla karşılaştırılır. Kapalı-depo makinesini sırf emisyonsuz diye uygunsuz zemine göndermeyiz. Karma rota saha turunda yürünür ve gerekiyorsa iç-dış görev ayrı sınıflara bölünür." },
            { soru: "Şarj cihazını herhangi bir prize bağlayabilir miyiz?", cevap: "Hayır. Cihazın elektrik gereksinimi, tesis hattının kapasitesi, topraklama, bağlantı ve batarya teknolojisinin güvenlik koşulları teknik yetkili tarafından doğrulanmalıdır. Şarj alanı trafik ve malzemeden ayrılır; kablo geçiş yolu oluşturmaz. Batarya tipine göre havalandırma ve yangın tedbiri gerekebilir. Geçici uzatma veya uyumsuz bağlantıyla çözüm üretilmez. Teslimattan önce cihaz etiketi ve tesis altyapısı karşılaştırılır." },
            { soru: "Dizel mi akülü mü daha ekonomik?", cevap: "Güncel fiyat ve gerçek kullanım olmadan genel bir sonuç vermek doğru değildir. Enerji/yakıt dışında makine sınıfı, vardiya, şarj altyapısı, bakım, iç-dış görev paylaşımı, atıl süre ve ikinci ekipman ihtiyacı toplam maliyeti etkiler. Önce teknik olarak kabul edilebilir seçenekler belirlenir; mevzuat veya kapalı alan kuralına uymayan ucuz alternatif karşılaştırmaya girmez. Teklifte kapsam ve işletme yükümlülükleri yazılı gösterilir, doğrulanmamış tasarruf yüzdesi kullanılmaz." },
            { soru: "Enerji biterse dizel yedek hemen devreye alınabilir mi?", cevap: "Yalnız yedek makinenin çalışacağı alan dizel kullanıma uygun, yük-mast-ataşman kapasitesi yeterli ve operatör yetkisi doğrulanmışsa değerlendirilebilir. Kapalı alanda akülü görevin yerine dizeli otomatik sokmak güvenli değildir. İkame senaryosu önceden iç ve dış görevler için ayrı yazılır. Enerji düşüşü erken bildirilir, makine güvenli park edilir ve yük akışı operasyon sorumlusunca yeniden sıralanır. Uygun olmayan hızlı çözüm yerine kontrollü süreklilik sağlanır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. İzmir Atatürk OSB'nin Çiğli'deki çok sektörlü yapısı kamuya açık bilgidir; akülü-dizel ortam ayrımı, yük diyagramı ve şarj güvenliği sektör tekniğidir. Vardiya enerji denemesi, aktarma ve ikame planı firma pratiğidir; tesis, tüketim veya maliyet rakamı uydurulmamıştır.",
    },
    "bolge:bornova": {
        h1: "Bornova Işıkkent Küçük Depolarında Forklift Sınıfı Seçimi",
        giris: "Bornova Işıkkent hattındaki küçük depo ve işyerlerinde forklift seçimini zorlaştıran konu çoğu zaman yükün ağırlığından önce alanın geometrisidir. Işıkkent'in ayakkabıcılar bölgesi olarak bilinen niteliği uygulama belgesinde kamuya açık gerçek olarak verilmiştir; belirli bir işletmenin stok türü, rafı veya sipariş hacmi hakkında varsayım yapmayız. Talepte en ağır koli ya da paletle birlikte yükün boyutu, kapı açıklığı, tavan altı, koridor, dönüş cebi, raf kotu ve araç boşaltma noktası ölçülür. Büyük karşı ağırlıklı forklift kapasite sunarken dar mekânda manevra kaybettirebilir; kompakt akülü sınıf kapalı depoya uyabilir fakat dış rampa veya yüksek kaldırma görevi ayrıca doğrulanmalıdır. Elleçleme yalnız birkaç saatlik boşaltmaysa operatörlü kısa görev, düzenli raf operasyonuysa dönemsel kiralama ve yetkili kullanıcı planı karşılaştırılır. Hedef kapasite etiketini büyütmek değil, küçük deponun gerçek sınırlarında yükü hasarsız ve denetlenebilir biçimde hareket ettiren en küçük uygun ekipmanı seçmektir.",
        maddeler: [
            { baslik: "Kapıdan rafa kadar net ölçü zinciri kurmak", metin: "Forklift taşıyıcıdan indikten sonra geçeceği kapı, saçak, koridor, dönüş ve raf önü tek rota olarak ölçülür. Kapı geniş olsa bile içerideki kolon, malzeme yığını veya yangın dolabı etkin alanı daraltabilir. Kapalı mast yüksekliği en düşük açıklıkla, yüklü dönüş alanı en dar koridorla karşılaştırılır. Ölçüler fotoğraf üzerinde işaretlenir. Sahada ilk kez görülen engel yüzünden daha küçük makine aramak yerine doğru sınıf rezervasyonda belirlenir." },
            { baslik: "Koli, palet ve düzensiz yükü ayrı tanımlamak", metin: "Ayakkabı ve benzeri kutulu ürünler paletli gelebilir, fakat her yük standart ve dengeli değildir. Palet ölçüsü, toplam ağırlık, istif yüksekliği, yükün çatala giriş yönü ve görüşü kapatıp kapatmadığı kaydedilir. Paletsiz veya dengesiz yük için doğaçlama bağlama yapılmaz; uygun taşıma aparatı ya da paletleme müşterinin yük güvenliği prosedürüyle değerlendirilir. Nominal kapasite, gerçek ağırlık merkezi ve kaldırma kotunda üretici diyagramıyla doğrulanır." },
            { baslik: "Dar alanda karşı ağırlıklı ile depo ekipmanını ayırmak", metin: "Kısa mesafeli araç boşaltma, raf istifi ve iç taşıma aynı makineyle yapılabilir; ancak dönüş alanı sınırdaysa reach truck, istifleyici veya başka depo ekipmanı seçenekleri gündeme gelir. Bu makinelerin düzgün zemin, eğim ve kullanım ortamı sınırları vardır; dış rampada karşı ağırlıklı forkliftin yerini otomatik tutmazlar. Görev hangi noktada başlıyor ve bitiyorsa seçim o sınırlar içinde yapılır. Daha kompakt olmak her koşulda daha uygun anlamına gelmez." },
            { baslik: "Kısa boşaltma işinde operatör ve süreyi birlikte kiralamak", metin: "Seyrek gelen araç için depoda sürekli forklift tutmak yerine operatörlü görev bazlı kiralama değerlendirilebilir. Araç saati, yük listesi, boşaltma alanı ve depoda bırakılacak noktalar önceden hazırlanır. Forklift geldiğinde araç sabitleme ve yaya ayrımı tamamlanmış olur. Bekleme ile fiilî çalışma ayrı kaydedilir. Yük sayısı veya araç saati doğrulanmadan kısa sürede biter vaadi verilmez; teklif görev kapsamı ve minimum organizasyon koşullarıyla yazılır." },
            { baslik: "Küçük depoda park, şarj ve anahtar sorumluluğunu çözmek", metin: "Makine birkaç gün ya da daha uzun kalacaksa güvenli park alanı, akülü model için uygun şarj altyapısı ve yalnız yetkili kullanıcıların erişeceği anahtar düzeni gerekir. Forklift acil çıkış, pano önü veya sevkiyat kapısına bırakılmaz. Günlük kontrol vardiya başında yapılır; hasar ve enerji durumu kayda geçer. Alan bu yükümlülükleri karşılamıyorsa konaklama yerine planlı operatörlü ziyaret daha uygun olabilir. Kiralama modeli depo alanının gerçek yönetim kapasitesiyle eşleştirilir." },
        ],
        ekBolumler: [
            { baslik: "Işıkkent küçük depo forklift karar tablosu", paragraflar: ["Tablo, küçük alanda hangi verinin hangi ekipman kararını etkilediğini gösterir. Kesin sınıf gerçek saha ölçüsü, yük bilgisi ve üretici teknik föyüyle belirlenir."], tablo: { basliklar: ["Görev", "Kritik veri", "Olası çözüm yönü", "Sınır kontrolü"], satirlar: [["Araç boşaltma", "Yük, rampa ve zemin", "Kompakt karşı ağırlıklı forklift", "Araç sabitleme ve dış alan"], ["Kapıdan içeri taşıma", "Kapalı mast ve net açıklık", "Alçak mastlı uygun sınıf", "Tavan/saçak ve dönüş"], ["Raf istifi", "Kot, koridor, yük merkezi", "Forklift veya depo ekipmanı", "Yüklü istif koridoru"], ["Paletsiz/düzensiz yük", "Kavrama ve denge", "Uygun paletleme/ataşman", "Kalan kapasite"], ["Seyrek kısa iş", "Araç takvimi ve görev listesi", "Operatörlü ziyaret", "Hazır yükleme alanı"]] } },
            { baslik: "Küçük depo için ölçülü keşif dosyası", paragraflar: ["Telefonla büyük mü küçük mü sorusu yerine basit bir krokide kapı, koridor, raf, kolon, rampa ve park alanı gösterilir. En düşük yükseklik ile en dar net genişlik ölçülür; yükün alındığı ve bırakıldığı yön okla işaretlenir. Fotoğraflarda ölçek verecek ölçü bulunur. Yük listesi ağırlık ve boyutla eşleştirilir.", "Bu dosya makine seçiminden sonra operatör brifingine dönüşür. Kör dönüş, yaya kapısı ve araç yanaşma noktası önceden görülür. Saha değişmişse teslimatta yeniden kontrol edilir; eski stok yerleşiminin aynı kaldığı varsayılmaz. Küçük alanın avantajı, doğru ölçü alındığında görev zincirinin açık biçimde modellenebilmesidir." ] },
            { baslik: "Kiralama modelini kullanım sıklığıyla karşılaştırmak", paragraflar: ["Tek seferlik araç boşaltma, mevsimsel stok girişi ve günlük raf operasyonu farklı sözleşme gerektirir. Seyrek işte operatörlü kısa ziyaret makinenin boş beklemesini önleyebilir. Belirli dönemlerde yoğunlaşan ihtiyaç haftalık veya proje bazlı planlanabilir. Her gün tekrar eden işte uzun dönem kiralama, bakım ve ikame kapsamıyla birlikte satın alma seçeneğine karşı işletme tarafından değerlendirilebilir.", "Karar için gerçekleşen görev süresi, bekleme, sevkiyat tekrarları ve depo sorumlulukları kaydedilir. Belirli bir maliyet avantajı yüzdesi uydurulmaz. Konaklayan makinede park-şarj ve yetkili operatör yükümlülüğü, ziyaret modelinde ise araç ile yük hazırlığının zamanında bitmesi toplam değerlendirmeye katılır." ] },
        ],
        sss: [
            { soru: "Işıkkent'teki küçük depomuza hangi forklift sığar?", cevap: "Kapı, kapalı mast yüksekliği, en dar koridor, yüklü dönüş alanı ve raf kotu ölçülmeden model söylemek doğru olmaz. Yükün boyutu da dönüş hesabını değiştirir. Krokide girişten bırakma noktasına kadar rotayı çıkarır, üretici istif koridoru verisiyle karşılaştırırız. Standart karşı ağırlıklı uygun değilse depo ekipmanı seçenekleri incelenir; bunların zemin ve rampa sınırları ayrıca kontrol edilir. En küçük görünen değil, bütün görevi güvenle tamamlayan sınıf seçilir." },
            { soru: "Sadece kamyondan koli paleti indireceğiz; günlük kiralama gerekir mi?", cevap: "Görev kapsamı ve güncel organizasyona göre operatörlü kısa süreli hizmet planlanabilir; ancak sabit bir saat vaadi verilmez. Araç geliş penceresi, palet sayısı, yük ağırlığı-boyutu, boşaltma zemini ve bırakma noktası önceden paylaşılır. Kamyon sabitleme ile çalışma alanı hazır olursa makine beklemeden göreve başlar. Gecikme ve bekleme koşulları teklifte yazılır. Yük uygun palet üzerinde değilse taşıma yöntemi ayrıca çözülmeden çalışma yapılmaz." },
            { soru: "Dar koridor için reach truck kullanabilir miyiz?", cevap: "Düz ve uygun depo zemini, gerekli koridor, raf kotu ve yük koşulu sağlanıyorsa değerlendirilebilir. Reach truck dış rampa, bozuk saha veya araç boşaltmanın her türü için genel çözüm değildir. Görev dışarıda başlayıp içeride bitiyorsa karşı ağırlıklı forkliftle aktarma veya iki ekipman planı gerekebilir. Üretici verisiyle yüklü dönüş ve kalan kapasite kontrol edilir. Makinenin kompakt olması tek başına uygunluk kanıtı değildir." },
            { soru: "Kutulu yük görüşü kapatıyorsa nasıl taşınır?", cevap: "Yükün güvenli yüksekliği ve istif düzeni önce müşterinin yükleme ekibince doğrulanır. Operatörün ileri görüşü kapanıyorsa işletme trafik prosedürüne göre geri sürüş, gözcü veya rotayı ayırma uygulanabilir. Yük görüş sağlamak için güvensiz biçimde eğilerek ya da yüksekte taşınmaz; hareket sırasında çatallar mümkün olan güvenli alçak konumda tutulur. Dar kapı ve yaya kesişimleri önceden boşaltılır. Dengesiz koli istifi uygun ambalaj/paletleme yapılmadan kaldırılmaz." },
            { soru: "Forklift depoda gece kalabilir mi?", cevap: "Düz, güvenli ve erişimi kontrollü park alanı varsa; acil çıkış ile yangın ekipmanını kapatmıyorsa ve anahtar sorumluluğu tanımlandıysa kalabilir. Akülü makinede uyumlu şarj alanı teknik yetkili tarafından hazırlanır; kablo koridora uzanmaz. Gün sonu hasar ve enerji kaydı tutulur. Küçük depoda bu alan ayrılamıyorsa aynı gün alım veya operatörlü ziyaret daha doğru olabilir. Karar sevkiyat yapılmadan önce sözleşmede netleştirilir." },
            { soru: "Küçük depo için uzun dönem kiralama mantıklı mı?", cevap: "Kullanım her gün tekrar ediyor, güvenli park-şarj düzeni ve yetkili operatör bulunuyorsa değerlendirilebilir. Seyrek araç boşaltmalarında makinenin büyük bölümü atıl kalabilir ve operatörlü ziyaret daha uygun çıkabilir. Önce görev sıklığı, fiilî çalışma, bekleme ile sevkiyat kaydı incelenir. Uzun dönem seçenekte bakım, arıza bildirimi ve ikame kapsamı; kısa hizmette hazırlık ve minimum organizasyon koşulları karşılaştırılır. Doğrulanmamış tasarruf oranı kullanmayız." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Işıkkent'in ayakkabıcılar bölgesi niteliği uygulama belgesinde kamuya açık gerçek olarak verilmiştir; yük merkezi, mast, koridor ve depo ekipmanı sınırları sektör tekniğidir. Ölçülü keşif ve kısa/uzun model karşılaştırması firma pratiğidir; işletme, stok, raf veya maliyet rakamı uydurulmamıştır.",
    },
    "bolge:izmir-ve-cevresi": {
        h1: "İzmir ve Çevresinde Doğru Forklift Seçimi: Tonaj, Güç Tipi ve Ataşman Rehberi",
        giris:
            "Forklift kiralarken verilen kararların çoğu, makine sahaya girmeden önce zaten verilmiş olmalıdır: kaç ton kaldırılacak ve yükün ağırlık merkezi nerede, çalışma kapalı depoda mı açık stok sahasında mı geçecek, koridorlar kaç metre, paletin cinsi ne ve vardiya kaç saat sürecek. Bu beş sorunun cevabı, tonaj sınıfından güç tipine, mast seçiminden ataşmana kadar bütün konfigürasyonu belirler. İzmir ve çevresindeki depo, üretim ve yükleme sahalarında en sık gördüğümüz hata, 'büyük makine her işi yapar' varsayımıdır — oysa 5 tonluk dizel, 2 tonluk akülünün gireceği koridora giremez; kapalı alanda çalışamaz; dönüş yarıçapıyla raf düzenini bozar. Doğru forklift, işin en ağır yükünü güvenle kaldıran EN KÜÇÜK makinedir. Bu sayfa, kiralama görüşmesine gelmeden önce kendi cevaplarınızı netleştirmeniz için yazıldı: tonaj sınıfları, üç güç tipinin gerçek farkları, mast ve serbest kaldırma meselesi, dar koridorda reach truck sınırı ve ataşman dünyasının kapasiteye etkisi.",
        maddeler: [
            {
                baslik: "Tonaj sınıfı ve yük merkezi: etiketteki rakam neyi söyler, neyi söylemez",
                metin:
                    "Forkliftin '3 ton' etiketi, yükün ağırlık merkezinin çatal topuğundan 500 mm mesafede olduğu varsayımıyla geçerlidir — sektör standardı yük merkezi budur. Yük uzadıkça (uzun profil, geniş sandık, 1200'lük yerine 1500'lük palet) ağırlık merkezi öne kayar ve gerçek kaldırma kapasitesi etiketin altına düşer; makinenin üzerindeki yük diyagramı bu düşüşü gösterir ve okunması operatör sorumluluğudur. Pratik kural: en ağır ve en uzun yükünüzü birlikte düşünün, diyagramda o noktaya bakın, sonra bir kademe pay bırakın. Kapasitenin sınırında sürekli çalışan makine hem yıpranır hem devrilme marjını eritir.",
            },
            {
                baslik: "Akülü, dizel, LPG: ortam ve vardiya karar verir",
                metin:
                    "Üç güç tipinin ayrımı zevk değil ortam meselesidir. Kapalı ve havalandırması sınırlı alanlarda egzoz emisyonu nedeniyle akülü zorunludur; gıda ve ilaç depolarında bu kural tavizsizdir. Dizel, açık stok sahasının ve bozuk zeminin makinesidir: yüksek tork, iri lastik, yağmura aldırmayan yapı. LPG ikisinin arasında durur — tüp değişimiyle kesintisiz çalışır, emisyonu dizelden temizdir ve iyi havalandırılan yarı kapalı alanlarda (yükleme sundurması, açık kapılı hangar) kullanılabilir; ancak tamamen kapalı dar hacimlerde LPG de önerilmez. Çok vardiyalı işlerde akülü tarafta hesap değişir: kurşun-asit akü ara şarjı sevmez ve ikinci vardiya için yedek akü ister; Li-Ion ise mola aralarında hızlı şarjla vardiyaları tek aküyle taşır.",
            },
            {
                baslik: "Mast tipi ve serbest kaldırma: kapıdan girmek yetmez",
                metin:
                    "Mast seçiminde iki ölçü birlikte okunur: kapalı mast yüksekliği (makine kapıdan, konteynerden, asma kat altından geçebilecek mi) ve kaldırma yüksekliği (en üst raf kirişine palet koyabilecek mi). Dupleks mast standart işlerin çözümüdür; tripleks, kısa kapalı boyla yüksek kaldırma birleştirir. Kritik ayrıntı serbest kaldırmadır (free lift): tam serbest kaldırmalı mastta çatallar, mast boyu uzamadan yükselir — konteyner içinde veya alçak tavan altında palet istiflemenin tek yolu budur. Serbest kaldırması olmayan makine konteynere girse bile ilk kaldırışta mastı tavana dayar. Raf yükseklikleriniz ve kapı ölçüleriniz, kiralama görüşmesinin ilk verisidir.",
            },
            {
                baslik: "Dar koridor gerçeği: karşı ağırlıklı forklift nerede biter, reach truck nerede başlar",
                metin:
                    "Klasik karşı ağırlıklı forkliftin palet dönüşü için ihtiyaç duyduğu koridor genişliği, tonaja göre kabaca 3,5-4 metre bandındadır. Raf aralığınız bunun altındaysa makine ya rafa çarpacak ya da koridora hiç giremeyecektir — ve depo verimi, koridor genişletmek için raf sökmeye gelmez. Reach truck bu noktada devreye girer: mastını ileri-geri kaydıran yapısı ve kompakt şasisiyle 2,7-3 metre koridorda çalışır, 10 metre üzeri raf kotlarına ulaşır; karşılığında düzgün beton zemin ve kapalı alan ister, rampada ve bozuk sahada karşı ağırlıklının yerini tutmaz. Çoğu depoda doğru cevap karmadır: sahada ve rampada karşı ağırlıklı, raf koridorlarında reach truck.",
            },
            {
                baslik: "Ataşman dünyası: sideshift'ten rotatora, her ek parça kapasiteden yer",
                metin:
                    "Ataşmanlar forkliftin el becerisidir: sideshift çatalları yana kaydırarak paleti makine oynatmadan hizalar ve rampa yüklemede zaman kazandırır; çatal pozisyonlayıcı farklı palet genişliklerine kabinden ayarlanır; rotator yükü döndürerek kasa boşaltma ve kalıp çevirme işlerini çözer; balya, rulo ve varil klempleri paletsiz yükleri gövdesinden kavrar. Ancak her ataşmanın iki bedeli vardır: kendi ağırlığı ve yükü öne taşıması nedeniyle makinenin net kapasitesini düşürür — klempli 3 tonluk makine artık 3 ton kaldırmaz — ve hidrolik devre gereksinimi kiralamada önceden bildirilmelidir. Ataşmanlı işlerde tonaj hesabı, ataşman kataloğu ve yük diyagramı birlikte yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tonaj sınıfına göre tipik iş eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, İzmir çevresindeki depo ve üretim sahalarında en sık kiralanan tonaj sınıflarını ve tipik kullanım alanlarını özetler. Kapasiteler 500 mm yük merkezi içindir; uzun yüklerde diyagram düşümü ayrıca hesaplanır.",
                ],
                tablo: {
                    basliklar: ["Sınıf", "Tipik yük", "Tipik saha", "Güç tipi eğilimi"],
                    satirlar: [
                        ["1,5 – 2 ton", "Standart euro palet, koli, kasa", "Kapalı depo, raf koridoru", "Akülü"],
                        ["2,5 – 3 ton", "Sanayi paleti, big-bag, varil", "Depo + rampa karma işler", "Akülü / LPG"],
                        ["3,5 – 5 ton", "Bobin, profil demeti, makine parçası", "Açık stok sahası, ağır üretim", "Dizel"],
                        ["7 – 10 ton", "Blok mermer, kalıp, uzun çelik", "Açık saha, ağır sanayi", "Dizel"],
                        ["Reach truck", "Palet (raf istif)", "2,7 – 3 m dar koridor, 10 m+ raf", "Akülü (zorunlu)"],
                    ],
                },
            },
            {
                baslik: "Kısa dönem mi uzun dönem mi: kiralamanın ekonomi denklemi",
                paragraflar: [
                    "Forklift kiralamada süre kararı, kullanım yoğunluğunun dürüst tahminiyle verilir. Günlük-haftalık kısa dönem, projesi belli işlerin modelidir: taşınma, sayım, sezonluk sevkiyat yığılması, arızalanan kendi makinenizin yerine geçici ikame. Aylık ve yıllık uzun dönemde birim maliyet belirgin düşer ve bakım, yedek parça, lastik gibi kalemler kiralayanın üzerinden kalkar — muhasebe tarafında yatırım harcaması yerine öngörülebilir gider yazılır. Kaba eşik şudur: makine yılın yarısından fazlasında fiilen çalışacaksa uzun dönem kiralama veya satın alma karşılaştırması yapılmalı; dalgalı ve mevsimlik ihtiyaçta ise kısa dönem esnekliği, atıl duran makinenin sabit maliyetinden her zaman ucuzdur.",
                    "Karma model çoğu tesiste en verimli çözümdür: taban yükü karşılayan bir-iki makine uzun dönem sözleşmede tutulur, sezon tepeleri kısa dönem ek makineyle karşılanır. Böylece filo, en yoğun güne göre değil ortalama güne göre boyutlanır.",
                ],
            },
            {
                baslik: "Operatör belgesi ve saha güvenliği: kiralamanın görünmeyen yarısı",
                paragraflar: [
                    "Türkiye'de forklift kullanmak belgeye bağlıdır: operatörün MYK mesleki yeterlilik belgesi veya MEB onaylı operatörlük belgesi taşıması gerekir ve iş ekipmanları mevzuatı gereği makinelerin periyodik kontrolleri yetkili kişilerce yapılmış olmalıdır. Kiralamada iki model çalışır: belgeli operatörünüz varsa yalnız makine, yoksa operatörlü kiralama. 'Depoda herkes biner' alışkanlığı, hem yasal hem fiili risktir — forklift kazalarının önemli bölümü belgesiz ve eğitimsiz kullanımdan çıkar.",
                    "Saha tarafında üç kural her kiralamada hatırlatılır: yaya yolları ile forklift trafiği ayrılır ve kesişimler işaretlenir; yük yüksekte taşınmaz, çatallar zemine yakın ve mast geriye yatık seyredilir; eğimde yük daima yokuş yukarı tarafta kalır. Bu üç madde, forklift İSG'sinin iskeletidir ve makineyle birlikte teslim ettiğimiz kullanım brifinginin de omurgasını oluşturur.",
                ],
            },
        ],
        sss: [
            {
                soru: "En ağır yükümüz 2,8 ton; 3 tonluk forklift yeterli mi?",
                cevap:
                    "Yükün boyutuna bağlıdır ve çoğu zaman hayır: 3 tonluk kapasite, ağırlık merkezi çatal topuğundan 500 mm'de olan derli toplu yük içindir. 2,8 tonluk yükünüz uzun bir profil demeti, geniş bir sandık veya öne taşan bir makine parçasıysa ağırlık merkezi 500 mm'nin ötesine geçer ve makinenin o mesafedeki gerçek kapasitesi 2,8 tonun altına iner — yük diyagramı bunu net gösterir. Bu durumda 3,5 tonluk sınıfa çıkmak doğru karardır. Yükünüzün ağırlığını ve ölçülerini (özellikle derinliğini) iletin; diyagram üzerinden birlikte bakalım ve sınırda çalışan değil payı olan makineyi seçelim.",
            },
            {
                soru: "Depomuz kapalı ama kapılar sürekli açık; LPG kullanabilir miyiz yoksa akülü şart mı?",
                cevap:
                    "Havalandırmanın gerçekliğine göre karar verilir: kapıları sürekli açık, hacmi geniş ve hava sirkülasyonu fiilen sağlanan depolarda LPG teknik olarak kullanılabilir — tüp değişimiyle kesintisiz çalışması ve dizelden temiz emisyonu bu ara kuşağın avantajıdır. Ancak kış aylarında kapılar kapanıyorsa, tavan alçaksa veya çalışanlar makineyle aynı dar hacmi uzun süre paylaşıyorsa güvenli cevap akülüdür; gıda ve ilaç depolarında ise tartışma zaten kapalıdır, akülü zorunludur. Deponuzun ölçülerini, kapı düzenini ve vardiya planını paylaşın — kararı varsayımla değil ortam gerçeğiyle verelim.",
            },
            {
                soru: "Raf aralarımız 3 metre; normal forklift girer mi?",
                cevap:
                    "Palet dönüşü yaparak çalışamaz: karşı ağırlıklı forkliftin 90 derece dönüşle rafa palet koyması için tonaja göre kabaca 3,5-4 metre koridor gerekir ve 3 metrede bu manevra raf ayaklarını riske atar. Bu koridor bandının makinesi reach truck'tır — mast kaydırma mekanizması sayesinde 2,7-3 metre aralıkta rahat çalışır ve yüksek raf kotlarına ulaşır. Şartları da bilinmelidir: düzgün beton zemin ve kapalı alan ister; rampaya ve açık sahaya uygun değildir. Depo krokinizle koridor ölçülerinizi iletin; gerekirse rampa tarafı için karşı ağırlıklı, koridorlar için reach truck olmak üzere karma plan çıkaralım.",
            },
            {
                soru: "İki vardiya çalışıyoruz; akülü forklift gün boyu dayanır mı?",
                cevap:
                    "Akü teknolojisine göre değişir: kurşun-asit akü tipik olarak bir vardiyayı dolu çıkarır, ancak ara şarj ömrünü kısalttığı için iki vardiyalı düzende yedek akü ve değişim istasyonu gerektirir — bu da alan ve süreç demektir. Li-Ion akülü modellerde denklem farklıdır: mola ve yemek aralarındaki kısa hızlı şarjlar tam gün çalışmayı tek aküyle taşır, ara şarj ömür kaybı yaratmaz. İki vardiyalı işlerde kiralama teklifini bu yüzden akü tipiyle birlikte veririz; yoğun vardiya düzeninde Li-Ion'un yüksek kirası, yedek akü ve kayıp zaman maliyetinin altında kalır. Vardiya saatlerinizi ve mola düzeninizi iletin, hesabı birlikte yapalım.",
            },
            {
                soru: "Varil ve balya taşıyoruz, paletimiz yok; forklift bu yükleri nasıl tutacak?",
                cevap:
                    "Ataşmanla: varil için varil tutucu veya döndürmeli varil klempi, balya için balya klempi, rulo-bobin için rulo klempi yükü gövdesinden kavrar ve paletsiz elleçlemeyi güvenli kılar. İki noktayı baştan planlamak gerekir: ataşman, kendi ağırlığı ve yükü öne taşıması nedeniyle makinenin net kapasitesini düşürür — klempli makinenin gerçek kaldırma değeri ataşman plakasıyla birlikte hesaplanır — ve klemp çalışması ek hidrolik devre ister, bu da makinenin ona göre hazırlanması demektir. Yükünüzün cinsini, ağırlığını ve çapını/ölçüsünü bildirin; ataşman ve tonajı birlikte, kapasite payı bırakarak seçelim.",
            },
            {
                soru: "Operatörümüz yok; makineyi kiralasak kim kullanacak?",
                cevap:
                    "İki yol vardır ve ikisi de yasal çerçevede kurulur: ya operatörlü kiralama yaparsınız — makineyle birlikte MYK belgeli operatör gelir, iş onun kullanımıyla yürür ve sizin tarafınızda yalnız iş planlaması kalır — ya da kendi personelinizden uygun kişiye operatörlük belgesi kazandırırsınız ki bu, süreklilik arz eden işlerde daha ekonomiktir. Belgesiz kullanıma makine teslim etmeyiz; bu hem mevzuata aykırıdır hem de forklift kazalarının ana kaynağıdır. Kısa ve tekil işlerde operatörlü model pratik çözümdür; uzun dönem kiralamada personel belgelendirme takvimini birlikte planlayıp geçişi kademeli yapabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tonaj/yük merkezi (500 mm), mast ve serbest kaldırma, koridor genişlikleri ve güç tipi ayrımları sektör standardı teknik bilgidir; operatör belgesi zorunluluğu Türkiye mevzuatına dayanır; kiralama ekonomisi firma pratiğidir.",
    },

    "bolge:bergama-osb": {
        h1: "Bergama OSB'de Forklift Kiralama: Gıda Kampanya Dönemlerinin Elleçleme Yükü",
        giris:
            "Bergama ve Bakırçay havzasının sanayi karakteri tarıma dayalı üretimdir ve bu karakter, forklift ihtiyacına kendine özgü bir ritim yazar: hasatla birlikte hammadde kamyonları sıklaşır, işleme hatları tam kapasiteye çıkar, dolan mamul paletleri depo kapasitesini zorlar ve birkaç ay boyunca tesisin palet trafiği yılın geri kalanının katlarına ulaşır. Kampanya bitince tempo düşer — ama forklift filosu düşmez: yoğun döneme göre alınmış makineler, sakin aylarda atıl bekler ve sabit maliyet üretir. Kiralamanın bu bölgedeki asıl değeri tam burasıdır: taban ihtiyacı karşılayan çekirdek filo yıl boyu çalışır, kampanya tepesi kiralık ek makinelerle karşılanır ve sezon kapanınca makineler iade edilir. Bu sayfa, gıda ve tarım işleme tesislerinin kampanya elleçlemesini forklift gözüyle ele alır: dönemsel filo boyutlama, hammadde kabul sahasının dizel işleri, işleme ve depo içinin akülü zorunluluğu, big-bag ve kasa elleçlemesinin ataşman ihtiyaçları.",
        maddeler: [
            {
                baslik: "Kampanya tepesine göre değil, taban yüke göre filo",
                metin:
                    "Dönemsel üretimin filo hatası klasiktir: en yoğun haftaya göre makine alınır ve yılın sekiz ayında o makineler yatar. Doğru boyutlama tersinden kurulur — sakin dönemin palet trafiğini karşılayan çekirdek filo sahiplenilir veya uzun dönem kiralanır, kampanya haftalarının ek yükü kısa dönem kiralık makinelerle taşınır. Bu modelin ön şartı takvimdir: kampanya başlangıcı tarımsal ürüne bağlı olarak yaklaşık bellidir ve ek makine rezervasyonu hasat tahminiyle birlikte, sezondan haftalar önce yapılır. Sezon ortasında 'yarına iki forklift' talebi, bölgedeki bütün tesisler aynı tempoya girdiği için en zor karşılanan taleptir.",
            },
            {
                baslik: "Hammadde kabul sahası: dizel sınıfın alanı",
                metin:
                    "Kabul sahası açık havadadır, zemin her zaman düzgün değildir ve gelen yük çeşitlidir: kasalı ürün paletleri, big-bag'ler, oktabin ve dökme sandıklar. Bu ortamın makinesi dizel karşı ağırlıklıdır — iri lastik bozuk zemini tolere eder, tork rampalı geçişleri taşır, yağmur çalışmayı durdurmaz. Tonaj tarafında kabul sahası genelde 2,5-3,5 ton bandında döner; big-bag ağırlıkları ve çift palet alma alışkanlığı hesaba katılarak seçim yapılır. Kabul sahasında sezonun ilk günü ortaya çıkan tipik eksik, aydınlatmadır: kamyon kuyruğu akşama sarktığında saha aydınlatması yetersizse elleçleme yavaşlar — makine değil saha hazırlığı darboğaz olur.",
            },
            {
                baslik: "İşleme ve paketleme içinde akülü zorunluluğu",
                metin:
                    "Gıda işleme alanının içinde egzozlu makine çalışamaz: emisyon hem çalışan sağlığı hem ürün güvenliği açısından kabul edilemez ve gıda güvenliği denetimlerinin standart maddesidir. Hat besleme, paketleme çıkışı ve iç depo transferleri akülü forklift ve akülü transpaletle yürütülür. Hijyen tarafının makineye yansıması da vardır: yağ kaçağı toleransı sıfırdır, lastikler iz bırakmayan tipte seçilir ve makine temizliği vardiya rutinine girer. Kampanyada iç trafik de yoğunlaştığı için akülü tarafta akü planı kritikleşir — uzayan vardiyalarda yedek akü veya Li-Ion seçeneği, kabul sahasındaki dizel takviyesi kadar önemlidir.",
            },
            {
                baslik: "Big-bag, kasa ve oktabin: yük tipine göre donanım",
                metin:
                    "Tarım işlemenin yük ailesi palet standardına her zaman uymaz. Big-bag elleçlemesi çatal üstü big-bag sehpası veya kancalı taşıma aparatıyla güvenli yapılır — çatal ucuna asılan big-bag, sallanan ve öne taşan yüktür, kapasite hesabı buna göre yapılır. Plastik dökme kasaların yüksek istifi, sıkıştırmadan kavrayan kasa klempi veya dikkatli çatal işçiliği ister. Oktabin ve dökme sandıklarda devirme gereken hatlarda rotator devreye girer. Bu donanımların hepsi kiralamada önceden konuşulmalıdır: sezon başında makineyle birlikte doğru aparatın da sahada olması, ilk kamyonun bekletilmemesi demektir.",
            },
            {
                baslik: "Soğuk depo ve kuru depo arasında geçiş trafiği",
                metin:
                    "Bölgedeki gıda tesislerinin çoğunda depo ikilidir: şoklanmış veya soğutulmuş ürün için soğuk oda, kuru mamul ve ambalaj için normal depo. İki rejim arasında gidip gelen forklift, yoğuşma sorunuyla tanışır — soğuktan sıcağa çıkan makinenin elektrik aksamında ve çatal yüzeyinde nem birikir. Geçiş trafiği yoğunsa makineleri rejimlere ayırmak (soğuk tarafın makinesi soğukta kalır) hem makine ömrü hem verim açısından doğrudur. Soğuk tarafta çalışacak kiralık makine, soğuk depo donanımıyla istenmelidir; bu ayrıntı sezon telaşında en sık atlanan kalemdir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kampanya dönemi forklift planı: saha-makine eşleşmesi",
                paragraflar: [
                    "Tipik bir gıda işleme tesisinin kampanya dönemi elleçleme noktaları ve makine eşleşmesi aşağıdadır. Ek makine sütunu, kampanyada kiralamayla karşılanan tipik takviyeyi gösterir.",
                ],
                tablo: {
                    basliklar: ["Nokta", "İş", "Makine", "Kampanya takviyesi"],
                    satirlar: [
                        ["Hammadde kabul", "Kamyon boşaltma, kasa-big-bag", "Dizel 2,5 – 3,5 ton", "1-2 ek dizel"],
                        ["İşleme içi", "Hat besleme, iç transfer", "Akülü 1,5 – 2 ton", "Ek akü / Li-Ion"],
                        ["Paketleme çıkışı", "Mamul palet toplama", "Akülü 2 ton", "Vardiya bazlı ek makine"],
                        ["Soğuk depo", "İstif ve sevk hazırlığı", "Akülü, soğuk donanımlı", "Rejime sabit makine"],
                        ["Sevkiyat rampası", "Dorse-konteyner yükleme", "Akülü/LPG 2,5 ton, sideshift", "Yoğun günlerde ek makine"],
                    ],
                },
            },
            {
                baslik: "Sezon öncesi hazırlık: rezervasyon, aparat, operatör",
                paragraflar: [
                    "Kampanyaya hazır girmenin üç ayağı vardır. Rezervasyon: bölgenin tesisleri aynı takvimle yoğunlaştığı için ek makine talebi hasat tahminiyle birlikte, haftalar önceden bağlanır — sezon ortasının acil talebi hem pahalı hem belirsizdir. Aparat: big-bag sehpası, kasa klempi, uzatma çatalı gibi donanımlar makineyle aynı gün sahada olacak şekilde sipariş edilir. Operatör: kampanyada geçici personelle çalışan tesislerde belge kontrolü atlanmamalıdır — yoğun dönemin belgesiz operatörü, en pahalı tasarruftur ve kaza istatistiğinin sezonluk tepesi buradan gelir.",
                    "Sezon kapanışı da plana dahildir: iade edilecek makinelerin tarihi baştan yazılır, uzatma ihtimali sözleşmede koşullarıyla yer alır ve tesis, ihtiyaç bittiği hâlde kira ödeyen konuma düşmez.",
                ],
            },
            {
                baslik: "Kampanya yoğunluğunda güvenlik disiplini: hız değil düzen",
                paragraflar: [
                    "Yoğun sezonun kaza deseni bellidir: acele eden makine, kalabalıklaşan saha ve geçici personel aynı haftalarda üst üste biner. Buna karşı düzen kurulur — hız değil: kamyon kuyruğunun beklediği kabul sahasında yaya-makine ayrımı fiziksel bariyerle çizilir, geri manevralar için gözcü kuralı işletilir, palet istif yüksekliği kampanya telaşında da sınırında tutulur ve devrilme riskine karşı yük daima mast geriye yatık taşınır. Bu maddeler İSG dosyasında değil sahada yaşar; kiraladığımız makinelerle birlikte verdiğimiz saha brifingi, kampanya düzeninin bu maddelerini tesisin kendi kurallarına ekler.",
                    "Deneyimin özeti şudur: kampanyada elleçleme hızını makine sayısı ve saha düzeni belirler, operatörün gaz pedalı değil. İki ek makineyle düzenli çalışan tesis, tek makineyi koşturan tesisten hem hızlı hem kazasızdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kampanyamız üç ay sürüyor; bu süre için forklift kiralamak mı, ikinci el almak mı mantıklı?",
                cevap:
                    "Üç aylık kullanım için kiralama neredeyse her senaryoda kazanır: ikinci el makine, satın alma bedelinin yanında bakım riskini, sezon dışında dokuz ay atıl bekleme maliyetini ve elden çıkarma belirsizliğini de taşır. Kiralamada bu kalemlerin tamamı düşer — makine sezon başında gelir, arıza riski kiralayanın bakım sorumluluğuyla karşılanır, sezon bitince iade edilir ve tesisin bilançosunda demirbaş değil dönemsel gider görünür. İkinci el hesabı ancak makinenin yıl boyu başka işlerde de çalışacağı durumda anlam kazanır. Kampanya takviminizi ve palet trafiği tahmininizi iletin; üç aylık kiralama planını rakamıyla çıkaralım.",
            },
            {
                soru: "Kabul sahamızın zemini stabilize, yağmurda çamurlaşıyor; forklift çalışabilir mi?",
                cevap:
                    "Dizel karşı ağırlıklı sınıf, iri ve derin dişli lastikleriyle stabilize zemini kuru havada rahat taşır; asıl soru yağmur sonrasıdır. Çamurlaşan zeminde riskler artar: patinaj, yükle birlikte yana kayma ve zemine gömülme. Pratik çözümler bellidir — kamyon boşaltma noktasına beton veya sıkıştırılmış agrega plaka döşemek, yoğun yağış sonrası elleçlemeyi zeminin oturmasına kadar kaydırmak ve gerekiyorsa arazi tipi (dört teker çekişli) forklift sınıfına geçmek. Sezon öncesi keşifte zemini birlikte görelim; hangi noktaya hangi iyileştirmenin yeteceği yerinde bellidir ve çoğu zaman küçük bir beton plaka, arazi makinesi farkından ucuza gelir.",
            },
            {
                soru: "Big-bag'lerimiz 1,2 ton; 2 tonluk forklift yeter mi?",
                cevap:
                    "Rakam yakın ama hesap big-bag'in doğasıyla yapılır: kancadan asılan big-bag salınım yapar, yükün tamamı çatal ucuna yakın taşınır ve ağırlık merkezi standart paletten daha öndedir — bu, makinenin gerçek kapasitesini etiketin belirgin altına çeker. 1,2 tonluk big-bag için güvenli sınıf 2,5 ton bandıdır ve taşıma, big-bag sehpası veya kancalı aparatla yapılmalıdır; çatal uçlarına geçirilen ilmeklerle 'idare etmek', ilmek kesilmesi ve yük düşmesi riskidir. Big-bag ağırlığınız, ilmek düzeni ve istif yüksekliğinizle birlikte soralım; aparatı ve tonajı birlikte netleştirelim.",
            },
            {
                soru: "Paketleme alanımıza gıda denetimi geliyor; kiralık forklift denetimde sorun çıkarır mı?",
                cevap:
                    "Doğru donanımla gelirse çıkarmaz — ve doğru donanım baştan konuşulur: kapalı gıda alanında akülü makine (emisyon sıfır), iz bırakmayan lastik, hidrolik kaçağı olmayan bakımlı gövde ve temizlenebilir yüzeyler denetimin makine tarafındaki beklentileridir. Kiralık makinelerin periyodik kontrol raporları ve bakım kayıtları dosyasıyla birlikte teslim edilir; denetimde makine evrakı sorulduğunda klasör hazırdır. Sizin tarafınızda kalan, makine temizliğinin vardiya rutinine eklenmesi ve gıda alanı-dış saha makine ayrımının korunmasıdır — dış sahanın dizeli, paketlemenin kapısından içeri girmez.",
            },
            {
                soru: "Sezonda vardiyalar 12 saate çıkıyor; akülü makineler bu tempoya dayanır mı?",
                cevap:
                    "Akü planıyla dayanır: kurşun-asit akülü makinede 12 saatlik fiili çalışma tek aküyle karşılanamaz — ya vardiya ortası akü değişimi (yedek akü + değişim düzeni) kurulur ya da makine Li-Ion sınıfından seçilir ve yemek-mola aralarındaki hızlı şarjlar günü taşır. Kampanya kiralamalarında bu yüzden ilk sorumuz vardiya düzenidir; 12 saatlik tempoda Li-Ion'un kira farkı, yedek akü ve değişim kaybının toplamından genelde küçüktür. Ayrıca yoğun tempoda şarj noktasının elleçleme rotasına yakın kurulması, günde yarım saatlik gizli kaybı geri kazandırır — kurulumda bunu birlikte planlarız.",
            },
            {
                soru: "Sezonluk operatörlerimiz oluyor; belge şart mı, tesis içinde çalışacaklar sadece?",
                cevap:
                    "Şart — tesis içi olması muafiyet getirmez: forklift operatörlüğü, sahanın neresinde olursa olsun MYK mesleki yeterlilik belgesi veya MEB onaylı operatör belgesi gerektirir ve iş müfettişi denetiminde ilk bakılan evraklardandır. Kampanyanın geçici personel düzeninde pratik yol, belgeli çekirdek operatör kadrosu kurup geçici personeli elleçlemenin makine gerektirmeyen işlerine dağıtmaktır; süreklilik kazanacak kişilere ise sezon dışında belge kazandırmak, sonraki yılın kampanyasını rahatlatır. Belgesiz kullanım hem idari yaptırım hem kaza durumunda ağır hukuki sonuç demektir — makinelerimizi bu yüzden yalnız belgeli operatöre teslim ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bakırçay havzasının tarıma dayalı sanayi karakteri kamuya açık bilgidir; big-bag/klemp elleçleme kuralları ve akü-vardiya hesapları sektör standardıdır; kampanya filo modeli firma pratiğidir.",
    },

    "bolge:menemen-deri-osb": {
        h1: "Menemen Deri OSB'de Forklift Kiralama: Islak Zemin ve Kimyasal Ortamın Makinesi",
        giris:
            "Deri işleme, forklift için sıradan bir üretim ortamı değildir: tabakhane bölümlerinde zemin gün boyu ıslaktır, proses kimyasalları (tuz, asit ve alkali karakterli banyolar, krom tuzları) zemine ve havaya iz bırakır, elleçlenen yükün önemli kısmı sızdıran ve damlayan hammadde dorse-kasalarıdır ve makine, bu ortamda hem güvenli durmak hem de korozyona direnmek zorundadır. Standart depo forkliftini bu ortama sokmak, iki yönlü hata olur: makine kısa sürede korozyonla yıpranır ve ıslak zeminde standart lastikle fren-manevra güvenliği düşer. Menemen Deri OSB'deki tesislerle çalışırken kiralama planını bu gerçek üzerine kurarız: bölüm bölüm ortam analizi, ıslak alan için lastik ve donanım seçimi, kimyasal temasına karşı bakım sıklaştırması ve kuru bölümlerle (ambalaj, sevkiyat, mamul depo) ıslak bölümler arasında makine ayrımı. Bu sayfa, deri tesisinin forklift kararlarını bölüm haritası üzerinden ele alır.",
        maddeler: [
            {
                baslik: "Islak bölüm zemini: fren mesafesi ve lastik seçimi",
                metin:
                    "Tabakhane zemininde su ve proses sıvısı kalıcıdır; üzerine yağ ve deri kırpıntısı eklenince yüzey, forklift için düşük tutunmalı hâle gelir. Bu ortamda iki karar güvenliği kurar: lastik ve hız. Islak beton için dişli (traction) desenli lastik seçilir — kuru depoların düz yüzeyli press-on lastiği ıslakta kızak gibi davranır. Hız tarafında ıslak bölüm sınırı düşük tutulur, dönüşler geniş alınır ve fren mesafesinin kuru zeminin katları olduğu operatör brifinginde açık söylenir. Zemin ızgaraları ve kanal kapakları ayrıca haritalanır: kapak üstünden yüklü geçiş, kapasite kontrolü ister.",
            },
            {
                baslik: "Kimyasal ortamda korozyon: makine neyle, nerede yıpranır",
                metin:
                    "Deri prosesinin tuzları ve asit-alkali buharı, makinenin korumasız metal yüzeylerinde korozyonu hızlandırır: çatal yüzeyleri, mast rayları, zincirler, hidrolik piston mili ve elektrik konnektörleri baş sıradadır. Islak bölümde konaklayan kiralık makinelerde bakım düzeni buna göre sıklaştırılır — zincir ve ray yağlaması kısa periyoda alınır, konnektörler korumalı tip seçilir ve vardiya sonu tatlı suyla yıkama rutine bağlanır. Bu yıkama, deri tesisinde ihmal edilirse kiralamanın gizli maliyetine dönüşür: korozyonun yediği zincir ve piston, ortam hasarı olarak faturalanır. Yıkama noktasının kurulumunu teslimatta birlikte planlarız.",
            },
            {
                baslik: "Islak ve kuru bölüm ayrımı: iki makine rejimi",
                metin:
                    "Deri tesisinin verimli forklift düzeni, makineleri bölüm rejimlerine sabitler: ıslak taraf (kabul, kireçlik-tabaklama çevresi, sıkma sonrası yaş elleçleme) kendi dişli lastikli, korozyon bakımı sıklaştırılmış makinesiyle döner; kuru taraf (finisaj sonrası, mamul depo, ambalaj-sevkiyat) standart depo düzenine yakın çalışır. Aynı makineyi iki rejim arasında gezdirmek, kimyasal kalıntıyı kuru bölüme ve mamul deriye taşımak demektir — mamulün lekelenme riski, makine ayrımının deri tesisine özgü ek gerekçesidir. Küçük tesislerde tek makine zorunluysa geçiş öncesi çatal ve lastik temizliği kurala bağlanır.",
            },
            {
                baslik: "Hammadde ve yaş deri elleçlemesi: ağır, kaygan, düzensiz yük",
                metin:
                    "Tuzlu ham derinin ve yaş işlenmiş partilerin elleçlenmesi, palet standardının dışında seyreder: yük ağırdır, formsuzdur ve sızdırır. Palet kullanılan noktalarda ahşap palet suya doyup ağırlaşır ve dayanımı düşer — plastik palet bu bölümlerin standardıdır. Yığın hâlde elleçleme gereken noktalarda dökme kasa ve sepetlerle çalışılır; kasaların darası ve dolu ağırlığı, tonaj hesabına yükün su içeriğiyle birlikte girer. Islak yükün taşınma yolu da planlanır: damlama hattı, yaya yolundan ve elektrik pano çevresinden geçirilmez — bu, saha yerleşiminin forklifte bakan yüzüdür.",
            },
            {
                baslik: "Güç tipi kararı: ıslak ortamda akülünün şartları",
                metin:
                    "Kapalı ve havalandırması sınırlı bölümlerde emisyon kuralı deri tesisinde de geçerlidir: iç mekânın makinesi akülüdür. Ancak ıslak ortamda akülü makinenin koruma sınıfı önem kazanır — su sıçramasına açık noktalarda elektrik aksamı korumalı modeller tercih edilir ve akü şarj istasyonu, ıslak bölümün dışında, kuru ve havalandırılan bir noktaya kurulur; şarj sırasında açığa çıkan hidrojen nedeniyle bu kural her tesiste, kimyasal ortamda ise iki kat geçerlidir. Açık saha ve dorse trafiği tarafında dizel çalışır; LPG, iyi havalandırılan geçiş bölümlerinde ara çözümdür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Deri tesisi bölüm haritası ve forklift donanımı",
                paragraflar: [
                    "Tipik deri işleme tesisinin bölümleri, ortam koşulu ve uygun forklift donanımı aşağıdadır. Donanım sütunu, kiralamada baştan bildirilmesi gereken kalemlerdir.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Ortam", "Makine", "Kritik donanım"],
                    satirlar: [
                        ["Hammadde kabul", "Açık saha, ıslak-tuzlu yük", "Dizel 2,5 – 3 ton", "Dişli lastik, plastik palet düzeni"],
                        ["Tabaklama çevresi", "Islak zemin, kimyasal buhar", "Akülü, korumalı", "Traction lastik, sık yıkama-bakım"],
                        ["Sıkma-kurutma arası", "Yarı ıslak", "Akülü 1,5 – 2 ton", "Bölüm geçiş temizlik kuralı"],
                        ["Finisaj-mamul depo", "Kuru, leke hassas", "Akülü, iz bırakmaz lastik", "Islak bölümden ayrık makine"],
                        ["Sevkiyat rampası", "Kuru, dorse trafiği", "Akülü/LPG, sideshift", "Rampa kapasite kontrolü"],
                    ],
                },
            },
            {
                baslik: "Kiralık makinede ortam hasarı: sınırları baştan çizmek",
                paragraflar: [
                    "Kimyasal ortamda kiralamanın en gergin konusu, iade anındaki hasar değerlendirmesidir ve gerginliğin ilacı baştan çizilen sınırdır: teslimatta makinenin fotoğraflı durum tespiti yapılır, ıslak bölümde çalışacağı bilinen makineye korozyon bakım paketi (sık yağlama, vardiya sonu yıkama, korumalı konnektör) tanımlanır ve normal ortam yıpranması ile bakım ihmalinden doğan hasar ayrımı sözleşmede tarif edilir. Tesisin tek yükümlülüğü yıkama-temizlik rutinine uymaktır; bu rutin işlerken kimyasal ortamın olağan izleri kiralama riskimizdir ve tesise fatura edilmez.",
                    "Bu şeffaflık iki tarafı da korur: tesis, iade gününde sürprizle karşılaşmaz; biz, bakımı yapılmamış makinenin bedelini üstlenmeyiz. Deri OSB'de uzun süreli çalıştığımız tesislerle düzen tam olarak böyle kuruludur.",
                ],
            },
            {
                baslik: "Islak bölümde operatör güvenliği: makine kadar insan",
                paragraflar: [
                    "Islak zeminin riski yalnız makineye değil operatöre de bakar: kaygan zeminde iniş-biniş kazaları forklift istatistiğinin sessiz kalemidir ve basamak-tutamak temizliği bu yüzden rutine girer. Kimyasal bölgede çalışan operatör, tesisin KKD kurallarına (önlük, gözlük, eldiven gereken noktalar) makine üstünde de tabidir; kabinli makine tercihi sıçrama olan bölümlerde ek koruma sağlar. Devrilme senaryosunun ıslak zeminde daha yakın olduğu — düşük tutunmada ani manevranın yükü kaydırdığı — brifingte açık anlatılır; emniyet kemeri, kapalı kabinde de açık makinede de tartışmasızdır.",
                    "Bu başlıkların tamamı, teslimat günü verdiğimiz saha brifinginin deri tesisi ekidir; tesisin İSG birimiyle brifingi birlikte vermek, kuralların sahada yaşamasını kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tabakhane bölümümüzde standart forklift kullanıyorduk, sürekli arızalanıyor; sorun makinede mi?",
                cevap:
                    "Büyük ihtimalle ortam-makine uyumsuzluğunda: standart depo forklifti, tuz ve asit-alkali buharının hızlandırdığı korozyona karşı korumasızdır — zincir, mast rayı, piston mili ve konnektörler sırayla teslim olur ve arıza zinciri 'sürekli bozuluyor' tablosunu üretir. Çözüm iki katmanlıdır: ıslak bölüme korumalı donanımlı ve dişli lastikli makine vermek, bakımı kısa periyoda alıp vardiya sonu tatlı su yıkamasını rutine bağlamak. Bu düzenle çalışan makinede arıza sıklığı normal depo seviyesine iner. Bölümünüzün kimyasal profilini ve mevcut arıza geçmişini paylaşın; doğru donanım listesini birlikte çıkaralım.",
            },
            {
                soru: "Islak bölüm ile mamul depomuz arasında tek forkliftle çalışıyoruz; risk nedir?",
                cevap:
                    "İki risk üst üste biner: kimyasal kalıntı taşınması ve leke. Islak bölümün çatalında ve lastiğinde taşınan proses kalıntısı, mamul deponun zeminine ve palet üzerinden mamul deriye ulaşabilir — finisajdan çıkmış derinin leke toleransı yoktur ve tek parti zarar, ikinci makinenin yıllık kirasından pahalıdır. Tek makine zorunluysa ara çözüm disiplindir: bölüm geçişi öncesi çatal ve lastik temizliği kurala bağlanır, ıslak bölüm işleri günün bloklarına toplanır ve geçiş sayısı azaltılır. Kalıcı çözüm ise küçük bir akülü makinenin mamul tarafına sabitlenmesidir; palet trafiğinize göre iki modelin maliyetini karşılaştırmalı gösterelim.",
            },
            {
                soru: "Zeminimiz gün boyu ıslak; devrilme riski gerçekten artıyor mu?",
                cevap:
                    "Artıyor — mekanizması da bilinmelidir: devrilmelerin çoğu ani manevrayla başlar ve ıslak zeminde lastik tutunması düştüğü için aynı manevra, kuru zeminde toparlanabilecekken ıslakta kaymaya ve yük savrulmasına dönüşür. Buna karşı dört önlem çalışır: dişli lastik, düşürülmüş bölüm hız sınırı, geniş alınan dönüşler ve yükün daima alçakta-mast geriye yatık taşınması. Ayrıca kanal kapakları ve ızgaralar haritalanır; yüklü geçişte kapak dayanımı sorgulanır. Bu önlemler brifing maddesi değil işletme kuralı olarak yaşatıldığında ıslak zemin, yönetilebilir bir risktir — deri tesislerindeki uzun dönem kiralamalarımızın kaza kaydı bunun göstergesidir.",
            },
            {
                soru: "Akülü makinenin şarj istasyonunu nereye kurmalıyız?",
                cevap:
                    "Kuru, havalandırılan ve ıslak bölümün dışında bir noktaya — üç gerekçeyle: şarj sırasında kurşun-asit aküden hidrojen açığa çıkar ve birikmemesi için havalandırma şarttır; elektrik bağlantısının su sıçramasından uzak olması gerekir; ve şarj alanı, forklift rotasına yakın ama yaya yolundan ayrık olmalıdır ki günlük şarj trafiği verim kaybı yaratmasın. Deri tesisinde buna kimyasal buhardan uzaklık da eklenir — şarj ünitesinin elektroniği korozyona karşı hassastır. Teslimat öncesi keşifte istasyon yerini birlikte seçeriz; uygun nokta yoksa Li-Ion sınıf, şarj esnekliğiyle alternatif olarak değerlendirilir.",
            },
            {
                soru: "Kiraladığımız makine kimyasal ortamda yıpranırsa iade ederken bize mi fatura edilir?",
                cevap:
                    "Sınır baştan çizilir ve sürpriz olmaz: teslimatta fotoğraflı durum tespiti yapılır, ıslak bölüm makinesine korozyon bakım paketi tanımlanır ve sözleşme, olağan ortam yıpranması ile bakım ihmali kaynaklı hasarı ayırır. Tesis, vardiya sonu yıkama ve temizlik rutinine uyduğu sürece kimyasal ortamın olağan izleri bizim kiralama riskimizdir — faturalanmaz. Faturalanan durum, tanımlı bakım rutininin yapılmamasından doğan hasarlardır (yıkanmayan makinede zincir-ray korozyonu gibi) ve bu da iade günü değil, dönem içi bakım ziyaretlerinde tespit edilip önce uyarıyla yönetilir. Düzen şeffaftır; sözleşme örneğini görüşmede birlikte okuruz.",
            },
            {
                soru: "Dorse ile gelen tuzlu ham deriyi kasalarla boşaltıyoruz; tonajı nasıl hesaplayalım?",
                cevap:
                    "Kasanın dolu ağırlığını en kötü hâliyle hesaplayın: tuzlu ham deri su içeriğiyle ağırdır, kasa darası eklenir ve ıslak yük, taşıma sırasında ağırlık merkezini oynatabilir — bu yüzden hesaplanan ağırlığın bir kademe üstünde tonaj seçmek deri kabulünün standardıdır. Dorse içinden alım yapılıyorsa makinenin kapalı mast yüksekliği dorse tavanıyla, çatal uzunluğu kasa derinliğiyle karşılaştırılır. Plastik kasa-palet kullanımı, suya doyan ahşabın dayanım sorununu da ortadan kaldırır. Kasa ölçülerinizi ve tahmini dolu ağırlıklarınızı iletin; tonaj ve çatal konfigürasyonunu kabul sahanıza göre netleştirelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Deri prosesinin ıslak-kimyasal ortam nitelikleri sektörün kamuya açık genel bilgisidir; lastik/korozyon/şarj güvenliği kuralları sektör standardıdır; bölüm rejimi ayrımı ve hasar sınırı düzeni firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:tire-osb": {
        h1: "Tire OSB'de Forklift Kiralama: Süt Tesisleri ve Soğuk Depo Elleçlemesi",
        giris:
            "Küçük Menderes havzasının süt üretimi, Tire çevresinin sanayi profilini süt işleme ve gıda tesisleri yönünde şekillendirmiştir ve bu profil, forklift ihtiyacının merkezine soğuk zinciri koyar: pastörize ve UHT hatlarından çıkan mamul paletleri soğuk veya serin depolara akar, sevkiyat frigorifik araçlarla yapılır ve elleçlemenin önemli bölümü düşük sıcaklıkta, yoğuşmalı ortamda, hijyen kuralları altında geçer. Soğuk depo, forklift için sıradan bir çalışma alanı değildir: akü kapasitesi soğukta düşer, sıcak-soğuk geçişlerinde elektronik aksamda ve çatalda yoğuşma birikir, zemindeki nem film hâlinde kayganlık üretir ve operatör konforu vardiya verimini doğrudan etkiler. Bu sayfa, süt ve gıda tesislerinin forklift kararlarını soğuk zincir gözüyle ele alır: soğuk depo donanımlı makine seçimi, akü yönetimi, geçiş rejimleri, hijyen gerekleri ve sevkiyat rampasının frigorifik düzeni.",
        maddeler: [
            {
                baslik: "Soğukta akü gerçeği: kapasite düşer, plan değişir",
                metin:
                    "Düşük sıcaklık, akünün kimyasını yavaşlatır: kurşun-asit akü soğuk odada oda sıcaklığındaki kapasitesinin belirgin altında çalışır ve 'depoda tam vardiya çıkaran' makine, soğuk odada aynı süreyi çıkaramaz. Planlama buna göre kurulur — soğuk bölge makinesinin fiili çalışma süresi kısa hesaplanır, şarj istasyonu soğuk odanın dışında ılık bölgeye kurulur (soğuk aküye şarj verimi de düşüktür) ve yoğun trafikte yedek akü düzeni düşünülür. Li-Ion sınıfta soğuk performansı daha dengelidir ancak onun da çok düşük sıcaklıklarda şarj kısıtları vardır; derin donmuş depo (eksi 18 ve altı) işlerinde makine seçimi bu ayrıntılarla yapılır.",
            },
            {
                baslik: "Yoğuşma: sıcak-soğuk geçişinin görünmez arıza kaynağı",
                metin:
                    "Soğuk odadan ılık koridora çıkan makinenin soğumuş yüzeylerinde havadaki nem anında yoğuşur: elektronik kartlar, konnektörler, mast zinciri ve çatal yüzeyi ıslanır. Sık geçiş yapan makinede bu döngü, elektrik arızalarının ve korozyonun ana kaynağıdır; çatal üzerindeki yoğuşma ise karton ambalajlı mamulde ıslanma hasarı üretir. İki çözüm birlikte uygulanır: soğuk bölge donanımlı (yalıtımlı-korumalı elektronik, uygun hidrolik yağı) makine seçmek ve geçiş sayısını azaltacak iş düzeni kurmak — makineyi rejime sabitlemek, soğuk zincir tesisinin forklift verimindeki en etkili tek karardır.",
            },
            {
                baslik: "Soğuk oda içinde istif: reach truck ve dar alan verimi",
                metin:
                    "Soğuk oda, tesisin en pahalı metreküpüdür ve raf düzeni bu yüzden sıkıdır: koridorlar dar, kotlar yüksek tutulur. Bu geometri, soğuk depo donanımlı reach truck sınıfını öne çıkarır — dar koridorda yüksek istif, soğuk metreküpün verimli kullanımı demektir. Karşı ağırlıklı makine, oda kapısına kadar getiren ve rampada çalışan rolüne çekilir. Soğukta operatör süresi de plana girer: uzun kesintisiz soğuk maruziyeti hem konforu hem dikkat düzeyini düşürür; kabin ısıtmalı makine veya dönüşümlü çalışma düzeni, soğuk oda istifinin insan tarafını yönetir.",
            },
            {
                baslik: "Hijyen rejimi: süt tesisinin makine kuralları",
                metin:
                    "Süt işleme sahasında forklift, hijyen zincirinin bir halkasıdır: kapalı üretim ve depo alanlarında emisyon nedeniyle akülü zorunludur, lastikler iz bırakmayan tipte seçilir, hidrolik kaçak toleransı sıfırdır ve makine yüzeyleri yıkanabilir-temiz tutulur. Gıda güvenliği denetimlerinde makine bakım kayıtları ve temizlik planı sorulur; kiralık makinelerin evrak dosyası bu denetime hazır teslim edilir. Üretim alanı ile dış saha makineleri ayrılır — dış sahanın lastiğindeki kir, üretim koridoruna taşınmaz. Bu kurallar süt tesisinde tartışma konusu değil giriş biletidir.",
            },
            {
                baslik: "Sevkiyat rampası: frigorifik araç yüklemenin düzeni",
                metin:
                    "Süt mamulünün sevkiyatı zamana karşıdır: soğuk zincir, rampada geçen her dakikada ısınan yük demektir ve yükleme hızı kalite göstergesidir. Rampa düzeninin forklifte bakan yüzü şudur: körük (rampa yanaşma yalıtımı) varsa makine-araç geçişi korunaklıdır; yoksa yükleme sırası mamul bekletmeyecek şekilde kurulur. Araç içine giren makinede kapalı mast yüksekliği ve dingil yükü kontrol edilir, rampa köprüsünün kapasitesi makine+yük toplamıyla karşılaştırılır ve araç, el freni-takoz kuralıyla sabitlenir. Sideshift ataşmanı, frigorifik kasanın dar toleransında paleti hizalamayı hızlandırır ve rampa verimini görünür biçimde artırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sıcaklık rejimine göre makine ve donanım",
                paragraflar: [
                    "Süt ve gıda tesisinin sıcaklık bölgeleri, forklift gereksinimlerini farklılaştırır. Aşağıdaki tablo rejim-donanım eşleşmesini özetler.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Sıcaklık bandı", "Makine", "Kritik donanım"],
                    satirlar: [
                        ["Üretim-dolum çevresi", "Ortam sıcaklığı", "Akülü 1,5 – 2 ton", "İz bırakmaz lastik, hijyen düzeni"],
                        ["Serin depo", "0 ile +8 °C", "Akülü / reach truck", "Yoğuşma korumalı elektronik"],
                        ["Soğuk oda", "Eksi bantlar", "Soğuk donanımlı reach truck", "Kabin ısıtma, uygun hidrolik yağı"],
                        ["Sevkiyat rampası", "Ortam, körüklü geçiş", "Akülü 2 – 2,5 ton", "Sideshift, rampa kapasite kontrolü"],
                        ["Dış saha", "Açık hava", "Dizel / LPG", "Üretim alanından ayrık trafik"],
                    ],
                },
            },
            {
                baslik: "Makineyi rejime sabitlemek: soğuk zincirin filo kuralı",
                paragraflar: [
                    "Soğuk zincir tesisinde forklift verimini belirleyen en önemli yapısal karar, makinelerin sıcaklık rejimlerine sabitlenmesidir: soğuk odanın makinesi soğukta kalır, ortam bölgesinin makinesi dışarıda döner ve geçişler palet aktarma noktalarında el değiştirir. Bu düzen üç sorunu birden küçültür — yoğuşma döngüsünün elektrik arızaları, çatal yoğuşmasının ambalaj ıslatması ve soğuk odaya sıcak makineyle taşınan ısı yükü. Karşılığında bir palet aktarma noktası ve net bir iş bölümü ister; küçük tesislerde bu bedel gözü korkutur ama arıza ve enerji hesabı yapıldığında sabitleme, neredeyse her ölçekte kendini öder.",
                    "Kiralama planında bu kural, makine sayısını bir artırabilir; teklif aşamasında iki senaryoyu (gezen tek makine / rejime sabit iki makine) arıza riski ve enerji yüküyle birlikte karşılaştırmalı sunarız.",
                ],
            },
            {
                baslik: "Soğuk odada insan faktörü: operatör düzeni",
                paragraflar: [
                    "Soğuk elleçlemenin insan tarafı, makine kadar planlanır: düşük sıcaklıkta uzun kesintisiz çalışma, el becerisini ve dikkat sürekliliğini düşürür; termal kıyafet hareket kabiliyetini kısıtlar ve kabin ısıtmalı makine bu noktada konfor değil verim ekipmanıdır. İyi kurulmuş düzende soğuk oda operatörü dönüşümlü çalışır, mola noktası ılık bölgededir ve makine kabini, camların buğulanmasına karşı donanımlıdır — buğulu camla dar koridorda istif, görüş kaybı demektir. Bu başlıklar, soğuk depo kiralamalarımızın teslimat brifinginde ayrı bir bölüm olarak yer alır.",
                    "Tesise önerimiz, soğuk oda vardiya düzenini forklift planıyla birlikte kurmaktır: makine ve insan aynı ritimde dönerse soğuk metreküp, tesisin en verimli alanı olarak çalışır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk odamızda standart akülü forklift kullanabilir miyiz?",
                cevap:
                    "Kısa süreli girişlerde idare eder, sürekli çalışmada etmez: standart makinenin elektroniği yoğuşmaya karşı korumasızdır, hidrolik yağı düşük sıcaklıkta ağırlaşır, akü kapasitesi soğukta düşer ve arıza-verim kaybı döngüsü kısa sürede başlar. Soğuk odada düzenli çalışacak makine, soğuk depo donanımıyla kiralanmalıdır: korumalı elektronik, uygun viskozitede hidrolik yağı, gerekiyorsa kabin ısıtması. Odanızın sıcaklık bandını (serin mi, eksi bant mı) ve makinenin içeride geçireceği fiili süreyi iletin; donanım seviyesini abartmadan — serin depoya derin donmuş paketi ödetmeden — doğru yerden seçelim.",
            },
            {
                soru: "Makinemiz soğuk oda ile sevkiyat arasında sürekli gidip geliyor ve elektrik arızaları bitmiyor; neden?",
                cevap:
                    "Tarif ettiğiniz tablo, yoğuşma döngüsünün ders kitabı hâlidir: soğuk odada soğuyan makine ılık bölgeye her çıkışında nem toplar, konnektörlere ve kartlara işleyen bu nem zamanla arıza zincirine dönüşür. İki müdahale birlikte çalışır: makineyi rejime sabitleyip geçişleri palet aktarma noktasında kesmek (yapısal çözüm) ve geçiş kaçınılmazsa yoğuşma korumalı donanım + sıklaştırılmış elektrik bakımıyla döngüyü yönetmek. Sabitleme çoğu tesiste arıza maliyetini kira farkının üzerinde geri kazandırır — palet trafiğinizin sayılarıyla iki senaryoyu karşılaştırmalı gösterelim.",
            },
            {
                soru: "Soğuk odamızın koridorları 2,8 metre; hangi makine çalışır?",
                cevap:
                    "Bu genişlik reach truck bandıdır: mast kaydırmalı yapısı 2,7-3 metre koridorda palet dönüşünü çözer ve soğuk odanın yüksek raf kotlarına ulaşır — karşı ağırlıklı forkliftin bu koridorda istif yapması mümkün değildir. Soğuk oda için makinenin soğuk donanımlı versiyonu seçilir: korumalı elektronik, uygun hidrolik yağı, buğu yönetimli kabin. Zemin şartı hatırlatılmalıdır: reach truck düzgün beton ister; soğuk oda zeminleri genelde uygundur ama kapı eşiği ve rampa geçişleri keşifte kontrol edilir. Raf kotlarınız ve palet ölçünüzle birlikte koridor krokinizi iletin; modeli netleştirelim.",
            },
            {
                soru: "Gıda denetçisi forklift için hangi evrakı sorar, kiralık makinede bunlar kimde?",
                cevap:
                    "Denetimin makine tarafında tipik olarak periyodik kontrol raporu, bakım kayıtları, operatör belgeleri ve temizlik planı sorulur. Kiralık makinede evrak düzeni şöyle çalışır: periyodik kontrol ve bakım kayıtları bizden gelir ve makineyle birlikte dosya hâlinde teslim edilir — denetim günü klasör hazırdır; operatör belgeleri, operatör kimden geliyorsa ondan (operatörlü kiralamada bizden, kendi operatörünüzde sizden); temizlik planı ise tesisin hijyen sistemine makinenin eklenmesiyle oluşur ve şablonunu teslimatta veririz. Bu üçlü tamamsa kiralık makine, denetimde demirbaş makineden farksızdır.",
            },
            {
                soru: "Frigorifik araç yüklemede kapı başına süremiz kısıtlı; forklift tarafında hızı ne artırır?",
                cevap:
                    "Dört kalem, rampa süresini görünür biçimde kısaltır: sideshift ataşmanı (paleti makine manevrası yapmadan hizalar — frigorifik kasanın dar toleransında en büyük kazanım budur), yükleme sırasının palet haritasıyla önceden kurulması (makine rampada karar vermez, uygular), körüklü yanaşma varsa kapı açık kalma süresinin kısalması ve rampa köprüsü-araç sabitleme rutininin önceden tamamlanması. Makine tarafında 2-2,5 tonluk akülü sınıf, kasa içi manevrada dengeli seçimdir. Rampa düzeninizi keşifte görelim; çoğu tesiste yükleme süresi, makine değişmeden yalnız düzen değişerek kısalır.",
            },
            {
                soru: "Sezonluk üretim artışımızda soğuk depo forkliftini kısa dönem kiralayabilir miyiz?",
                cevap:
                    "Kiralayabilirsiniz — planlama şartıyla: soğuk depo donanımlı makineler filonun özel kalemidir ve standart depo makinesi gibi gün içinde bulunmaz; sezon artışınız takvime bağlıysa (süt üretiminin arz tepeleri, bayram-kampanya dönemleri) rezervasyonun haftalar önce yapılması gerekir. Kısa dönem soğuk kiralamada teslimat brifingi de genişler: akü-şarj planı, rejim sabitleme kuralı ve yoğuşma yönetimi, kısa sürede de tam uygulanır — üç aylık makineye üç yıllık makineyle aynı disiplin işler. Sezon takviminizi paylaşın; soğuk donanımlı ek makineyi tarihiyle bağlayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Küçük Menderes havzasının süt üretimi ağırlığı kamuya açık bilgidir; soğukta akü kapasitesi düşüşü, yoğuşma mekanizması ve reach truck koridor bantları sektör standardı teknik bilgidir; rejim sabitleme kuralı firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:manisa-osb-cevre-ili": {
        h1: "Manisa OSB'de Forklift Kiralama: Beyaz Eşya Hatlarında Yük Besleme ve Hassas Mamul Elleçleme",
        giris:
            "Manisa OSB'nin ağırlık merkezi beyaz eşya ve elektronik üretimidir ve bu sanayi kolu, forklift dünyasının en disiplinli kullanım senaryolarından birini kurar: üretim hattı durmaz, malzeme beslemesi dakika hassasiyetiyle akar, elleçlenen mamul (buzdolabı, çamaşır makinesi, fırın) hem hacimli hem yüzeyi hasara açıktır ve tedarikçi ağından ana fabrikaya uzanan zincirde her halka kendi elleçleme standardını taşır. Burada forklift, kaba kuvvet makinesi değil hat ritminin parçasıdır: besleme rotaları çizilidir, geçiş saatleri bellidir, kapalı alanda akülü zorunluluğu tartışmasızdır ve hasar oranı, elleçleme kalitesinin günlük ölçütüdür. Bu sayfa, beyaz eşya ekosisteminin — ana üretim tesisleri, yan sanayi parçacıları ve bitmiş ürün depoları — forklift ihtiyacını hat besleme, hassas yük ataşmanları, dar alan istifi ve vardiya sürekliliği başlıklarında ele alır.",
        maddeler: [
            {
                baslik: "Hat besleme: forkliftin dakika hassasiyetli işi",
                metin:
                    "Üretim hattının malzeme akışı, forklift için sıradan taşımadan farklı bir disiplindir: besleme noktaları ve sıraları tanımlıdır, hat kenarı stok alanı dardır ve gecikme, hattın yavaşlaması demektir. Bu ritimde çalışan makine kompakt akülü sınıftan seçilir — dar hat kenarında manevra, sık dur-kalk trafiğine dayanıklı akü ve sessizlik bu ortamın gerekleridir. Hat besleme rotaları yaya yollarıyla kesişmeyecek biçimde çizilir; kesişim kaçınılmazsa ayna, ikaz ışığı ve hız sınırı devreye girer. Kiralamada hat besleme makinesi, 'depo forklifti' değil bu ritme uygun konfigürasyonla teslim edilir.",
            },
            {
                baslik: "Hassas mamul elleçleme: klemp dünyası ve hasar disiplini",
                metin:
                    "Bitmiş beyaz eşyanın elleçlenmesi, çatal işinden klemp işine kayar: karton ambalajlı ürünler, iç dolgusuna ve yüzeyine zarar vermeden, ayarlı basınçla kavrayan karton klempi (carton clamp) ile paletsiz taşınabilir. Klempin basınç ayarı ürün tipine göre tanımlanır — fazla basınç ambalajı ve gövdeyi ezer, az basınç yükü kaydırır. Çatalla çalışılan noktalarda palet kalitesi ve çatal giriş hizası önem kazanır: kırık palet ve eğik giriş, devrilen ürün demektir. Hasar kaydı bu sektörde günlük yönetilir; elleçleme kaynaklı hasar oranının düşüklüğü, operatör ve ekipman kalitesinin en net göstergesidir.",
            },
            {
                baslik: "Bitmiş ürün deposunda yüksek istif ve dar koridor",
                metin:
                    "Beyaz eşya mamulü hacimlidir ve depo metreküpü hızlı dolar; çözüm yüksek istif ve sıkı koridor düzenidir. Blok istifte karton klempli makineler ürünleri üst üste tanımlı sınıra kadar yığar — istif sınırı, alttaki ambalajın taşıma dayanımıyla belirlenir ve aşılması sessiz hasar üretir. Raflı düzende dar koridor geometrisi reach truck sınıfını çağırır. Her iki düzende de zemin çizgileri, adres etiketleri ve sıra disiplini forklift verimini belirler: aranan ürünün adresi bellisizse en iyi makine de bekler. Depo yerleşimi ile makine seçimi bu yüzden aynı masada planlanır.",
            },
            {
                baslik: "Yan sanayi trafiği: parça paletleri ve metal kasalar",
                metin:
                    "Ana fabrikayı besleyen yan sanayi tesislerinde yük profili farklıdır: sac parça paletleri, plastik enjeksiyon kasaları, metal taşıma sehpaları ve kalıplar. Metal kasa ve sehpa trafiği standart çatal işidir ama ağırlıklar aldatıcıdır — dolu sac kasası, görünümünden ağırdır ve tonaj hesabı tartılmış ağırlıkla yapılır. Kalıp elleçlemesi ayrı bir sınıftır: yoğun ve kompakt kütle, yüksek tonajlı makine ve dikkatli ağırlık merkezi hesabı ister; kalıp bakım atölyesi olan tesislerde 5 ton ve üzeri sınıf bu yüzden bulunur. Sevkiyat sıklığı yüksek yan sanayide rampa makinesi ayrı planlanır ki hat içi makine rampaya koşturulmasın.",
            },
            {
                baslik: "Çok vardiyalı süreklilik: akü stratejisi ve yedeklilik",
                metin:
                    "Beyaz eşya üretimi çok vardiyalı akar ve forklift planı süreklilik üzerine kurulur: kurşun-asit akülü filoda vardiya arası akü değişim istasyonu işletilir, Li-Ion filoda mola şarjları vardiyaları birbirine bağlar. Süreklilik yalnız enerji değil yedeklilik meselesidir — hat besleyen makinenin arızası hattı yavaşlatacağı için kritik rotalarda yedek makine veya hızlı ikame sözleşmesi bulunur. Uzun dönem kiralamanın bu sektördeki değeri tam burada görünür: bakım, arıza müdahalesi ve ikame makine sorumluluğu kiralayanda olduğunda üretim planlama, forklift riskini kendi listesinden çıkarır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Beyaz eşya ekosisteminde görev-makine-ataşman eşleşmesi",
                paragraflar: [
                    "Üretim zincirinin elleçleme görevleri ve uygun konfigürasyon aşağıdadır. Ataşman sütunundaki kalemler kapasite hesabına dahil edilir.",
                ],
                tablo: {
                    basliklar: ["Görev", "Makine", "Ataşman / donanım", "Not"],
                    satirlar: [
                        ["Hat kenarı besleme", "Kompakt akülü 1,5 – 2 ton", "Sideshift", "Dar alan, sık dur-kalk"],
                        ["Bitmiş ürün blok istif", "Akülü 2 – 2,5 ton", "Karton klempi", "Basınç ayarı ürüne göre"],
                        ["Raflı mamul depo", "Reach truck", "—", "Dar koridor, yüksek kot"],
                        ["Yan sanayi kasa trafiği", "Akülü/LPG 2,5 – 3 ton", "Çatal pozisyonlayıcı", "Tartılmış ağırlıkla hesap"],
                        ["Kalıp elleçleme", "Dizel/akülü 5 ton+", "Uzatma çatalı gerekirse", "Ağırlık merkezi hesabı kritik"],
                    ],
                },
            },
            {
                baslik: "Hasar oranı yönetimi: elleçleme kalitesinin günlük ölçüsü",
                paragraflar: [
                    "Beyaz eşya elleçlemesinde hasar, istatistikle yönetilir: her elleçleme kaynaklı hasar kaydedilir, nedeni sınıflanır (klemp basıncı, çatal hizası, istif aşımı, manevra teması) ve oran, vardiya ve operatör bazında izlenir. Bu kültürün kiralamaya yansıması nettir — makine tarafında bakımlı klemp (basınç sensörü doğru, pedler sağlam), düzgün çatal (uçları aşınmamış, hizası bozulmamış) ve operatör tarafında ürün tipine göre basınç-istif eğitimi. Hasar oranı yüksek tesislerde sorun çoğu zaman tek kalemde değil üçünün bileşiminde çıkar ve iyileştirme, kayıt analiziyle başlar.",
                    "Kiraladığımız klempli makinelerde basınç ayar tablosunun ürün gamınıza göre hazırlanması teslimatın parçasıdır; hasar kaydı sisteminiz yoksa basit bir başlangıç şablonu da bırakırız — ölçülmeyen hasar, yönetilemez.",
                ],
            },
            {
                baslik: "Tedarik zinciri ritmine uyum: fabrika takvimiyle kiralama",
                paragraflar: [
                    "Beyaz eşya üretiminin yıllık ritmi, forklift ihtiyacını dalgalandırır: ihracat sezonlarının sevkiyat tepeleri, yeni model geçişlerinin hat düzenlemeleri, sayım ve bakım duruşları — her biri elleçleme yükünü farklı yönde oynatır. Kiralama planını bu takvimle hizalamak, filo maliyetini görünür biçimde düşürür: taban filo uzun dönem sözleşmede sabitken sevkiyat tepelerine kısa dönem ek makine, hat düzenlemesi haftalarına yüksek tonajlı geçici takviye planlanır. Yan sanayi tesislerinde ritim ana fabrikanın siparişini izler; ana fabrikanın yoğun ayı, tedarikçinin de yoğun ayıdır ve ek makine talepleri bölgede aynı haftalara yığılır — erken rezervasyon bu yüzden burada da kuraldır.",
                    "Uzun dönem sözleşmelerimizde dönemsel ek makine koşulları baştan tanımlanır: tepe dönemde makinenin hangi sürede, hangi koşulla geleceği sözleşmede yazar ve tesis, sezonun pazarlığını sezon telaşında yapmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Buzdolabı ve çamaşır makinesini paletsiz taşımak istiyoruz; karton klempi her üründe çalışır mı?",
                cevap:
                    "Ambalajı uygun her üründe çalışır — şartı basınç yönetimidir: karton klempi, ürünü ayarlı yüzey basıncıyla kavrar ve her ürün tipi (buzdolabı, çamaşır makinesi, fırın, küçük ev aleti kolisi) kendi basınç değerini ister; tek ayarla bütün gamı taşımak, ya ezik ambalaj ya kayan yük üretir. Teslimatta ürün gamınıza göre basınç ayar tablosu hazırlanır ve operatör eğitimi bu tabloyla verilir. Ambalajı zayıf veya düzensiz formlu ürünlerde klemp yerine paletli taşıma korunur. Ürün listeniz ve ambalaj ölçülerinizle keşif yapalım; hangi ürünün klempe, hangisinin palete uygun olduğunu birlikte ayıralım.",
            },
            {
                soru: "Hat besleme forkliftimiz arızalanırsa hat duruyor; kiralamada bunun güvencesi ne?",
                cevap:
                    "İki katmanlı güvence kurulur: birincisi önleyici bakım — hat besleme makineleri sözleşmeli bakım takvimiyle izlenir ve arızaların çoğu, plansız duruşa dönüşmeden bakım penceresinde yakalanır; ikincisi ikame taahhüdü — sözleşmede kritik makine sınıfı için ikame süresi tanımlanır ve arıza hâlinde eşdeğer makine o süre içinde sahaya ulaşır. Ek olarak kritik rotalarda tesis içi yedek makine bulundurma seçeneği vardır; hat duruş maliyetiniz yüksekse yedeğin kirası, riskin yanında küçük kalır. Hat besleme rotalarınızı ve duruş maliyet hassasiyetinizi paylaşın; güvence seviyesini ona göre boyutlandıralım.",
            },
            {
                soru: "Mamul depomuzda hasar oranımız yükseldi; makine mi, operatör mü, düzen mi?",
                cevap:
                    "Kayıt analizi olmadan bilinemez — ve çoğu zaman cevap bileşiktir: klemp basınç sensörünün kayması veya ped aşınması makine kalemidir; çatal hizasız giriş ve manevra temasları operatör kalemidir; istif sınırı aşımı ve dar adres düzeni yerleşim kalemidir. Başlangıç adımı, hasarların bir ay boyunca neden sınıfıyla kaydedilmesidir — tablo çoğu tesiste ilk ayda net desen verir. Kiralık makinelerimiz devredeyse klemp-çatal kontrolünü hemen yaparız; basınç tablosu ve operatör tazeleme eğitimi de pakete dahildir. Hasar kayıtlarınız varsa paylaşın; yoksa şablonla başlayalım ve deseni birlikte okuyalım.",
            },
            {
                soru: "Kalıp atölyemiz için ayda birkaç günlük 5 tonluk makine ihtiyacımız var; sürekli kiralamak israf değil mi?",
                cevap:
                    "İsraf — ve doğru model dönemsel çağrıdır: 5 ton sınıfı, ayın birkaç gününde kalıp değişimi ve bakım işlerinde çalışıyorsa sürekli kirada tutmak yerine, planlı kalıp günlerinize tarihli kısa kiralamayla getirtmek belirgin ucuzdur. İşleyişin şartı takvimdir: kalıp bakım planınız aylık belliyse makine o tarihlere önceden bağlanır ve gününde gelir; plansız acil kalıp işlerinde ise aynı gün temini garanti edilemeyebilir — kritik kalıplarınız için bu risk kabul edilemezse ayda sabit birkaç günlük çerçeve sözleşme ara formüldür. Kalıp takviminizin ritmini paylaşın; üç modelin (sürekli, tarihli, çerçeve) rakamını yan yana koyalım.",
            },
            {
                soru: "Üç vardiya çalışıyoruz; kurşun-asit mi Li-Ion mu daha ekonomik?",
                cevap:
                    "Üç vardiyada terazi çoğunlukla Li-Ion'a döner — hesap şöyle kurulur: kurşun-asit düzeninde üç vardiya, makine başına en az iki akü, bir değişim istasyonu, değişim işçiliği ve akü bakım alanı demektir; Li-Ion düzeninde mola-vardiya arası hızlı şarjlar tek aküyle günü kapatır, değişim altyapısı tamamen kalkar ve akü ömrü çevrim sayısında uzundur. Li-Ion'un yüksek kira bedeli, bu kalemlerin toplamıyla karşılaştırıldığında üç vardiyalı tesiste genelde geride kalır. Tek-çift vardiyada ise kurşun-asit hâlâ savunulabilir. Vardiya düzeniniz, makine sayınız ve mola pencerelerinizle hesabı netleştirelim; cevap tesise göre değişir ve rakamla verilir.",
            },
            {
                soru: "Tedarikçiyiz; ana fabrikanın denetçileri bizim depoyu da denetliyor. Forklift tarafında ne beklenir?",
                cevap:
                    "Ana sanayi denetimlerinin forklift maddeleri tipik olarak şunlardır: makine periyodik kontrol raporları ve bakım kayıtları, operatör belgeleri, yaya-forklift trafik ayrımının saha üzerinde görünür olması (çizgi, bariyer, ayna), hız sınırı ve ikaz düzeni, hasarlı palet-kasa yönetimi ve elleçleme hasar kayıtları. Kiralık makinelerde evrak dosyası bizden hazır gelir; saha düzeni kalemlerinde ise denetim öncesi kontrol listesiyle birlikte yürüyebiliriz — trafik ayrımı ve işaretleme, çoğu tesiste bir günlük düzenlemeyle denetim seviyesine gelir. Denetim tarihiniz belliyse hazırlık turunu önceden planlayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Manisa OSB'nin beyaz eşya-elektronik ağırlığı kamuya açık bilgidir; karton klempi, basınç ayarı ve akü-vardiya hesapları sektör standardıdır; ikame taahhüdü ve hasar kayıt düzeni firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:aydin-osb-cevre-ili": {
        h1: "Aydın OSB'de Forklift Kiralama: İhracat Paketleme ve Konteyner Yükleme Operasyonları",
        giris:
            "Aydın ve çevresinin sanayi üretimi — kurutulmuş ve işlenmiş gıda başta olmak üzere — büyük ölçüde ihracata çalışır ve ihracatın saha karşılığı konteynerdir: mamul, paketleme hattından çıkar, sevk deposunda konsolide edilir ve günü geldiğinde 20'lik veya 40'lık konteynere, tanımlı bir yükleme planıyla istiflenir. Forklift bu zincirin her halkasında vardır ama en kritik sınavını konteyner ağzında verir: standart konteynerin iç yüksekliği sınırlıdır, kapı toleransı dardır, içeride manevra alanı yoktur ve yükleme süresi, araç ve liman terminleriyle yarışır. Konteyner içinde palet istifleyebilen makine, her forklift değildir — kapalı mast yüksekliği, serbest kaldırma ve tonaj birlikte doğru seçilmelidir. Bu sayfa, ihracatçı tesislerin forklift kararlarını paketleme hattından konteyner kapısına uzanan akış üzerinden ele alır: sevk deposu düzeni, rampa ve zemin seviyesinden yükleme, konteyner içi makine konfigürasyonu, ağırlık dağılımı ve dorse operasyonlarının İSG kuralları.",
        maddeler: [
            {
                baslik: "Konteyner içine giren makine: kapalı mast ve serbest kaldırma",
                metin:
                    "Standart konteynerin kapı ve iç yüksekliği, makine seçiminin ilk filtresidir: 20'lik ve 40'lık standart konteynerde kapı yüksekliği yaklaşık 2,28 metredir ve içeri girecek forkliftin kapalı mast yüksekliği bunun altında kalmalıdır. İkinci şart serbest kaldırmadır: tam serbest kaldırmalı mast, çatalları mast boyunu uzatmadan yükseltir ve konteyner tavanının altında paleti ikinci sıraya istiflemenin tek yolu budur — serbest kaldırmasız makine içeride ilk kaldırışta mastı tavana dayar. Üçüncü kalem tonajdır: konteyner işi genelde 2-2,5 ton bandında döner; makine ağırlığı da konteyner tabanının ve apron zemininin taşıma sınırıyla uyumlu olmalıdır.",
            },
            {
                baslik: "Rampadan mı zeminden mi: iki yükleme düzeninin gerekleri",
                metin:
                    "Konteyner yüklemenin iki düzeni vardır ve makine planı düzene göre değişir. Rampalı düzende konteyner taşıyan araç rampaya yanaşır, forklift rampa köprüsünden içeri girer — köprünün kapasitesi makine+yük toplamını taşımalı, araç el freni ve takozla sabitlenmeli, römorkun öne kayma riskine karşı destek kuralları uygulanmalıdır. Zemin düzeninde konteyner yere indirilir ve yükleme zemin seviyesinden yapılır — bu düzen konteyner rampası olmayan tesislerin çözümüdür; içeri giren makine yerine kapı ağzına palet bırakıp içeride transpaletle ilerleyen karma yöntem de dar bütçeli sahalarda işler. Hangi düzenin kurulacağı, sevkiyat sıklığına ve saha imkânına göre baştan kararlaştırılır.",
            },
            {
                baslik: "Ağırlık dağılımı ve yükleme planı: konteynerin görünmez mühendisliği",
                metin:
                    "Konteyner yüklemesi, paletleri sırayla içeri itmekten ibaret değildir: yükün ağırlığı konteyner tabanına dengeli dağıtılmalı — ağır paletler öne veya arkaya yığılmamalı — aksi hâlde karayolu taşımasında dingil yükü aşımı ve denizde istif dengesizliği doğar. İhracat paketlemesinde yükleme planı bu yüzden önceden çizilir: hangi palet hangi sıraya, ağır kalemler nereye, boşluklar neyle emniyetlenecek. Forklift operatörünün bu planla çalışması, yükleme süresini de kısaltır — kapı ağzında karar verilmez, plan uygulanır. Palet emniyeti (hava yastığı, takoz, gergi) yüklemenin son adımıdır ve forklift ekibiyle paketleme ekibinin ortak işidir.",
            },
            {
                baslik: "Sevk deposunda konsolidasyon: parti toplama ve FIFO düzeni",
                metin:
                    "İhracat deposunun günlük işi konsolidasyondur: farklı hatlardan ve günlerden gelen mamul partileri, sipariş bazında toplanır ve konteyner planına göre sıralanır. Bu işin forklift tarafı adres disiplinidir — parti etiketleri, adres sistemi ve FIFO (ilk giren ilk çıkar) düzeni işlerken makine verimli döner; adres düzensiz depoda forklift, taşımaktan çok arar. Gıda ihracatında FIFO ayrıca raf ömrü zorunluluğudur. Kapalı sevk deposunun makinesi akülüdür; sipariş toplamanın yoğun olduğu tesislerde forklifte akülü transpalet ve istif makinesi eşlik eder — her paleti karşı ağırlıklı makineyle taşımak, dar depo trafiğini gereksiz büyütür.",
            },
            {
                baslik: "Dorse ve araç üstü operasyonların güvenlik çerçevesi",
                metin:
                    "Konteyner ve dorse çevresindeki kazaların klasik senaryoları bellidir ve önlemleri de: araç, yükleme boyunca el freni çekili ve takozlu bekler; şoför, kabinde değil tanımlı güvenli bekleme alanındadır (yükleme sırasında aracın hareket etmesi, en ağır kaza senaryosudur); rampa köprüsü her yanaşmada kontrol edilir; konteyner içinde çalışan makine geri çıkarken arkası gözcüyle emniyetlenir. Aydınlatma, gece yüklemelerinde ayrı kalemdir — konteyner içi karanlıktır ve makine farı tek başına yetmez. Bu çerçeve, İSG dosyasının değil günlük rutinin parçası olduğunda konteyner ağzı, tesisin en riskli değil en düzenli noktası olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Konteyner ve dorse yükleme: operasyon-konfigürasyon tablosu",
                paragraflar: [
                    "İhracat sahasının yükleme operasyonları ve uygun forklift konfigürasyonu aşağıdadır. Konteyner içi sütunundaki şartlar, makine seçiminde birlikte sağlanmalıdır.",
                ],
                tablo: {
                    basliklar: ["Operasyon", "Makine", "Kritik şart", "Not"],
                    satirlar: [
                        ["Konteyner içi istif", "Akülü 2 – 2,5 ton", "Kapalı mast < 2,28 m + tam serbest kaldırma", "Çift kat palet istifi mümkün"],
                        ["Rampadan yükleme", "Akülü/LPG 2 – 2,5 ton", "Köprü kapasitesi, araç sabitleme", "Sideshift hız kazandırır"],
                        ["Zeminden yükleme", "Forklift + transpalet karma", "Kapı ağzı palet aktarımı", "Rampasız tesislerin düzeni"],
                        ["Sevk deposu konsolidasyon", "Akülü + istif makinesi", "Adres ve FIFO düzeni", "Trafik ayrımı"],
                        ["Açık saha dorse trafiği", "Dizel 2,5 – 3 ton", "Zemin ve hava koşulu", "Gece aydınlatma planı"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat takvimiyle kiralama: gemi terminine çalışan filo",
                paragraflar: [
                    "İhracatçının forklift yükü, sevkiyat takvimiyle dalgalanır: konteyner kapatma günleri elleçlemenin tepe noktalarıdır ve araç kapıda beklerken makine yetmezliği, terminle ölçülen bir maliyete dönüşür — kaçan gemi, sonraki seferi beklemek demektir. Filo planı bu yüzden ortalama güne değil kapatma gününe bakarak kurulur: taban trafiği taşıyan sürekli makineler uzun dönem sözleşmede, kapatma günlerinin ek yükü tarihli kısa kiralamayla karşılanır. İhracat takvimi çoğu tesiste haftalık-aylık bellidir; bu belirlilik, ek makinenin önceden bağlanmasını mümkün kılar ve son gün telaşının hem riskini hem fiyatını ortadan kaldırır.",
                    "Yoğun ihracat dönemlerinde (kurutulmuş gıdanın hasat sonrası sevk ayları gibi) bölgedeki talep aynı haftalara yığılır; dönemsel ek makine rezervasyonunu sezona haftalar kala yapmak, bu bölgede de kuraldır.",
                ],
            },
            {
                baslik: "Konteyner içinde hız ve hasar dengesi: süre nereden kazanılır",
                paragraflar: [
                    "Konteyner yüklemesinin süresi, makinenin hızından çok düzenin hazırlığından kazanılır: yükleme planının önceden çizilmesi (kapı ağzında karar yok), paletlerin plan sırasına göre konteyner hizasına dizilmesi (makine arama yapmaz), sideshift ile milimetrik hizalama (konteynerin dar toleransında manevra tekrarı biter) ve emniyetleme malzemesinin elde hazır olması. Bu dört hazırlıkla yapılan yükleme, hazırlıksız yüklemenin yarı süresinde ve daha az hasarla biter — konteyner içinde aceleyle yapılan her manevra, duvara veya yüke temas riskidir ve ihracat mamulünde varış limanında fark edilen hasar, en pahalı hasardır.",
                    "Kiralamalarımızda konteyner işine giden makineler bu düzenin ekipmanıyla teslim edilir: sideshift, içeri uygun mast konfigürasyonu ve operatör brifinginin konteyner bölümü. Yükleme planı şablonu isteyen tesislere başlangıç formatı da bırakırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftimiz konteynerin içine girmiyor; her makine giremez mi?",
                cevap:
                    "Giremez — iki ölçü filtreler: standart konteynerin kapı yüksekliği yaklaşık 2,28 metredir ve makinenizin kapalı mast yüksekliği (üst korumasıyla birlikte) bunun üstündeyse fiziken giremez; girse bile mastında tam serbest kaldırma yoksa içeride paleti yükseltemez, çünkü kaldırma hareketi mast boyunu uzatır ve tavana dayar. Konteyner işi için doğru konfigürasyon, alçak kapalı boylu ve tam serbest kaldırmalı mast taşıyan 2-2,5 tonluk akülü sınıftır. Mevcut makinenizin mast etiketindeki kapalı yükseklik ve serbest kaldırma değerlerini iletin; konteynere uygun mu birlikte bakalım, değilse yükleme günlerine uygun makineyi tarihli kiralayalım.",
            },
            {
                soru: "Konteyner rampamız yok, konteyner yere indiriliyor; yükleme nasıl yapılır?",
                cevap:
                    "İki yöntem çalışır: birincisi, konteynere uygun konfigürasyonlu forkliftin zemin seviyesinden doğrudan içeri girmesi — konteyner tabanı ile zemin arasındaki küçük eşik, uygun geçiş plakasıyla köprülenir; ikincisi, karma yöntem — forklift paletleri kapı ağzına bırakır, içeride akülü transpalet ilerletir ve istifler. Karma yöntem yavaştır ama ek makine yatırımı istemez; sevkiyat sıklığınız düşükse mantıklıdır. Sıklık arttığında içeri giren makine düzeni kendini hızla öder. Aylık konteyner sayınızı ve saha zemininizi paylaşın; iki yöntemin süre-maliyet karşılaştırmasını sahanıza göre çıkaralım.",
            },
            {
                soru: "Yüklemede ağır paletleri öne koyuyoruz, kalanı arkaya; sorun olur mu?",
                cevap:
                    "Olur — iki yerde birden: karayolunda çekicinin dingil yükleri dengesiz çıkar ve kantar denetiminde araç bağlanabilir; denizde ise konteynerin ağırlık merkezi kayması istif ve elleçleme güvenliğini bozar. Doğru düzen, ağırlığın konteyner tabanına dengeli yayılmasıdır: ağır paletler taban boyunca dağıtılır, hafif kalemler üst sıraya ve boşluklara gelir, plan önceden çizilir ve operatör planı uygular. Bu aynı zamanda hız kazandırır — kapı ağzında karar vermeyen yükleme, belirgin kısa sürer. Tipik sipariş kompozisyonunuzu paylaşırsanız yükleme planı şablonunu tesisinize göre birlikte kuralım.",
            },
            {
                soru: "Kapatma günlerimizde iki ek forklift lazım, diğer günler fazla; nasıl kiralamalıyız?",
                cevap:
                    "Tarihli kısa kiralamayla — ihracatçının standart modeli budur: taban trafiğinizi taşıyan makineler uzun dönem sözleşmede kalır, kapatma günlerinizin ek yükü için ek makineler o tarihlere önceden bağlanır ve gün sonunda iade edilir. İşleyişin anahtarı takvimdir: konteyner kapatma günleriniz haftalık-aylık belliyse rezervasyon sorunsuz kurulur; belirsiz ve sık değişen takvimde ise aylık çerçeve sözleşme (ayda tanımlı gün sayısı, esnek tarih) ara çözümdür. Yoğun sevk sezonunuz bölgeyle çakışıyorsa — hasat sonrası aylar — rezervasyonu haftalar önce yapın; o haftalarda günlük talep karşılanamayabilir.",
            },
            {
                soru: "Gece yüklemesi yapıyoruz; forklift tarafında özel bir gereklilik var mı?",
                cevap:
                    "Üç kalem kritikleşir: aydınlatma — konteyner içi gündüz bile karanlıktır, gece apron ve konteyner içi için seyyar aydınlatma planlanır, makine farı tek başına yeterli değildir; görünürlük — yaya-makine ayrımı gece daha sıkı işletilir, reflektifli yelek ve ikaz ışıkları tavizsizdir; ve yorgunluk yönetimi — gece vardiyasının dikkat düşüşü, konteyner ağzının dar toleransında gündüzden pahalıya mal olur, operatör rotasyonu buna göre kurulur. Makine tarafında ek olarak sessizlik avantajı için akülü sınıf tercih edilir; çevrede yerleşim varsa gece dizel çalışması ayrıca sorun üretir. Gece düzeninizi keşifte görelim; aydınlatma planını birlikte çıkaralım.",
            },
            {
                soru: "Yükleme sırasında şoför araçta bekliyor; bunun nesi sakıncalı?",
                cevap:
                    "En ağır kaza senaryosunun kapısı olması: yükleme sürerken aracın — yanlışlıkla, iletişim kopukluğuyla veya erken hareketle — ileri alınması, içerideki forkliftin rampa boşluğuna düşmesi demektir ve bu senaryo, sektörün bilinen ölümlü kaza tiplerindendir. Önlemi basit ve tavizsizdir: yükleme boyunca kontak anahtarının veya araç geçiş kartının yükleme sorumlusunda durması, el freni ve takoz kuralı, şoförün tanımlı güvenli bekleme alanında olması ve yükleme bitti onayının tek yetkiliden çıkması. Bu düzeni kurmak yarım günlük iştir ve kiralamayla birlikte verdiğimiz rampa brifinginde adım adım yer alır — kurulmadığı sahada makinelerimizin rampa çalışması yapılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aydın çevresinin ihracata dönük gıda işleme ağırlığı kamuya açık bilgidir; konteyner kapı yüksekliği (~2,28 m), serbest kaldırma gerekliliği ve araç sabitleme kuralları sektör standardı teknik bilgidir; kapatma günü filo modeli firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },
};
