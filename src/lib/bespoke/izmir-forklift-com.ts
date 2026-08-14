// ═══════════════════════════════════════════════════════════════════════════
// izmir-forklift.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: İzmir'in LİMAN ve HAVA KARGO lojistiği için FORKLİFT kiralama.
// Açı: YÜK ELLEÇLEME — liman geri sahasında konteyner boşaltma ve istifleme,
// ağır tonajlı forklift ile reach stacker sınıfının işbölümü, gümrüklü saha
// ve antrepo elleçlemesi, hava kargo terminalinde ULD/palet çevrimi,
// petrokimya sahasında ATEX rejimi, serbest bölge lojistiği.
//
// ⚠️ Kardeş domainlerle örtüşme yasağı:
//   • izmirforkliftkiralama.net → forklift SEÇİMİ (tonaj, güç tipi, mast,
//     ataşman) açısı. Bu dosya seçim rehberi DEĞİLDİR.
//   • manisaforklift.com → forklift OPERASYONU (hat besleme, turlu düzen,
//     vardiya, gösterge seti) açısı. Bu dosya hat besleme anlatmaz.
//   • izmir-man-lift.com → aynı ilçelerde RÜZGÂR/yüksekte çalışma açısı;
//     cigli ve menemen sayfalarında rüzgâr kurgusu tekrarlanmadı.
// Ortak 8 kelimelik söz dizisi bulunmaması gözetildi.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca sektör standardı, doğrulanabilir teknik bilgi;
// tesis adı ve firmaya özgü rakam kullanılmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIR_FORKLIFT_COM: Record<string, BespokeIcerik> = {
    "bolge:torbali": {
        h1: "Torbalı Dağıtım Depolarında Sevkiyat Dalgası İçin Forklift Kiralama",
        giris: "Torbalı'daki bir dağıtım deposunda forklift ihtiyacı, raf veya makine seçimi kadar sevkiyat dalgasının sırasını yönetme meselesidir. Siparişler toplama alanından çıkar, rota ya da müşteri grubuna göre birleştirilir, kontrol edilir, yükleme kapısında araç sırasına girer ve boş palet ya da iadeyle ters yönde geri döner. Forklift bu akışın her noktasına rastgele çağrılırsa aynı palet birkaç kez taşınır, kapılar önünde yığılma olur ve yükleme ekibi hazır olmayan araç için bekler. Bu sayfa, Torbalı'nın kamuya açık sanayi ve dağıtım aksı niteliğinden hareket eder; hiçbir işletmenin sipariş hacmi, rota sayısı, vardiyası veya depo ölçüsü hakkında varsayım kurmaz. Gerçek sevkiyat listesi ve saha krokisi üzerinden dalga başlangıcını, tampon alanları, kapı atamasını ve dönüş yükünü planlarız. Uygun forklift teknik olarak ayrıca doğrulanır. Hedef, makineyi mümkün olan en hızlı biçimde sürmek değil; her paleti yalnız gerekli devirlerde taşıyan, yaya ve araç akışını ayıran, gün sonu kapanışı ölçülebilen bir dağıtım ritmi oluşturmaktır.",
        maddeler: [
            { baslik: "Sipariş dalgasını kapı kapasitesiyle birlikte açmak", metin: "Depo aynı anda hazırlayabileceğinden fazla rotayı toplama alanına çıkarırsa yükleme kapısı önünde geçici stok büyür. Dalga; hazır araç, ayrılmış kapı, kontrol ekibi ve kullanılabilir tampon alan birlikte doğrulandığında açılır. Forklift operatörüne rota kodu ve palet sırası görünür biçimde verilir. Hazırlığı tamamlanmayan araç için paletleri aktif yola dizmek yerine dalga bekletilir veya başka onaylı rota öne alınır. Bu karar depo sorumlusuna aittir; operatör kapıdaki sözlü baskıya göre parti sırasını değiştirmez." },
            { baslik: "Her kapı için sınırlı ve işaretli tampon alan kurmak", metin: "Tampon alan ne kadar büyükse operasyonun o kadar rahat olacağı düşüncesi yanıltıcıdır; sınırsız alan hatalı paletin fark edilmeden beklemesini kolaylaştırır. Her yükleme kapısı için sınır, rota kodu ve azami kullanım kuralı depo planında tanımlanır. Paletler araç içi yükleme sırasına göre dizilir, yaya geçişi ve yangın ekipmanı açık tutulur. İptal veya gecikmede yük ana stok adresine ya da onaylı bekleme bölgesine kaydedilerek alınır. Forklift koridorda sahipsiz yük bırakmaz." },
            { baslik: "Yükleme ve iade akışını karşı karşıya getirmemek", metin: "Dağıtım aracı ürün boşalttığı yerden iade ambalaj, boş palet veya geri gelen malzeme getirebilir. Bu ters akış, çıkış paletleriyle aynı kapı ve koridorda plansız yürürse etiket ve trafik karışıklığı doğar. İadeler ayrı zaman ya da ayrılmış hücrede kabul edilir, sayım ve durum kontrolü tamamlanmadan kullanılabilir stok sayılmaz. Forkliftin gidiş-dönüş rotası tek yönlü veya öncelik kurallı tasarlanır. Operatör iadeyi uygun gördüğü boş rafa bırakmaz; depo yönetiminin verdiği karantina veya kayıtlı adrese taşır." },
            { baslik: "Araç içi sırayı teslim rotasıyla eşleştirmek", metin: "Birden çok teslim noktasına giden araçta paletlerin kapıya geliş sırası, araç içindeki nihai sırayla uyumlu olmalıdır. Yük sahibi ile taşıyıcı yerleşimi ağırlık, bağlama ve teslim sırasına göre onaylar; depo toplama listesi buna bağlanır. Forklift operatörü bir paletin etiketini veya konumunu sözlü talimatla değiştirmez. Yük ölçüsü ya da ağırlığı beyanla uyuşmuyorsa palet ayrılır. Son araç güvenliği ve bağlama ilgili yetkili ekipçe tamamlanır; forkliftin yükü bırakması hareket izni anlamına gelmez." },
            { baslik: "Dalga sonunda boş hareket ve yeniden taşıma kaydını incelemek", metin: "Gün sonunda yalnız yüklenen araç sayısına bakmak, forklift akışındaki kaybı göstermez. Her rota için yeniden taşınan palet, yanlış kapı, araç bekleme, tampon alan doluluğu, boş sürüş ve iade hareketi nedenleriyle kaydedilir. Aynı palet sürekli iki kez taşınıyorsa yerleşim veya dalga sırası düzeltilir. Makine sürekli hazır yük bekliyorsa ek forklift yerine hazırlık kapısı incelenir. Bu veriler ilgili deponun sonraki planına aittir; Torbalı genelinde doğrulanmamış performans iddiasına dönüştürülmez." },
        ],
        ekBolumler: [
            { baslik: "Torbalı dağıtım dalgası kontrol tablosu", paragraflar: ["Tablo, bir sevkiyat dalgasının açılması, ilerlemesi ve kapanması için gerekli operasyon kanıtlarını özetler."], tablo: { basliklar: ["Dalga adımı", "Girdi", "Forklift görevi", "Kapanış ölçütü"], satirlar: [["Toplama tamam", "Rota kodlu palet listesi", "Paleti kontrol noktasına taşımak", "Adet ve etiket eşleşmesi"], ["Kapı atama", "Hazır araç ve boş tampon", "Paleti sıra halinde dizmek", "Kapı sorumlusu kabulü"], ["Araç yükleme", "Onaylı yerleşim sırası", "Paleti tanımlı konuma vermek", "Son palet ve alan temizliği"], ["İade kabul", "Ayrı kayıt ve hücre", "İadeyi karantina/adrese taşımak", "Durum ve stok kararı"], ["Gün sonu", "Hareket ve bekleme kayıtları", "Makineyi devir alanına almak", "Açık görev listesi"]] } },
            { baslik: "Yoğun gün ile kalıcı filo ihtiyacını ayırmak", paragraflar: ["Kampanya, proje veya dönemsel sevkiyat artışı için kısa süreli ek forklift planlanabilir. Talep yalnız toplam palet tahminine değil, hangi saatlerde kaç hazır kapı olduğu ve ikinci makinenin güvenle kullanacağı rotaya dayanır. Operatör, park ve enerji ya da yakıt düzeni de kapasitenin parçasıdır. Aynı dar koridora iki makine koymak teorik kapasiteyi gerçek çıktı haline getirmez.", "Yoğunluk sonunda kullanım ve bekleme saatleri incelenir. Ek makine tanımlı görevde düzenli çalıştıysa sonraki dalga için yeniden rezervasyon veya daha uzun model değerlendirilebilir; çoğunlukla beklediyse hazırlık ve kapı planı düzeltilir. Satın alma ya da kalıcı filo kararı için finansal sonuç uydurulmaz, yalnız gerçekleşen kiralama verisi sağlanır." ] },
            { baslik: "Dağıtım deposunda istisna masasını görünür kılmak", paragraflar: ["Etiketi eksik, ambalajı hasarlı, rotası değişmiş veya aracı iptal edilmiş palet normal dalganın içinde bırakılmaz. İşaretli istisna alanına taşınır ve depo sorumlusunun karar kuyruğuna girer. Operatör ticari kabul, yeniden paketleme veya farklı araca yönlendirme kararı vermez. Sorun çözülene kadar stok adresi ve fiziksel konum birlikte izlenir.", "İstisna paleti için yeni talimat çıktığında ağırlık, palet bütünlüğü ve hedef kapı yeniden kontrol edilir. Dalga kapanırken istisna alanındaki açık kayıtlar vardiyaya devredilir. Böylece bir sorunlu yük bütün tampon alanı kilitlemez, fakat hız uğruna kayıtsız biçimde başka araca da gönderilmez." ] },
        ],
        sss: [
            { soru: "Torbalı dağıtım deposunda kaç forklift gerekir?", cevap: "Sabit bir ilçe veya palet sayısı kuralı yoktur. Hazır kapıların eşzamanlılığı, taşıma mesafesi, yük ve rota, tampon alan, operatör sayısı, vardiya ve mevcut bekleme nedenleri ölçülür. Bir makine çoğunlukla yük hazır olmasını bekliyorsa sayı artırmak çözüm değildir. Aynı anda güvenli biçimde çalışabilecek iki ayrı görev sürekli kuyruk oluşturuyorsa ek makine değerlendirilebilir. Deneme dönemi gerçek hareket kaydıyla kapatılır; doğrulanmamış kapasite artışı vaat edilmez." },
            { soru: "Paletleri araç gelmeden kapı önüne çıkarabilir miyiz?", cevap: "Yalnız araç ve kapı ataması teyit edilmişse, işaretli tampon alan yeterliyse ve yaya ile yangın yolları açık kalıyorsa çıkarılmalıdır. Belirsiz araç için erken yığın yapmak aktif kapıyı kilitler ve yanlış yükleme riskini artırır. Paletler rota kodu ve araç içi sıra ile dizilir. Araç iptal olursa yük sahipsiz bırakılmaz; kayıtlı ana stok veya onaylı bekleme konumuna geri alınır." },
            { soru: "İade paletlerini çıkış yükleriyle aynı anda alabilir miyiz?", cevap: "Ancak trafik ve alan fiziksel olarak ayrılmış, sayım ekibi hazır ve depo prosedürü bunu onaylıyorsa planlanabilir. Aksi halde karşı yönlü hareket forklift ve yaya kesişimini artırır. İade yükü normal stok sayılmaz; ayrı hücrede durum ve kayıt kontrolü yapılır. Forklift operatörü iadenin kabul kararını vermez. Uygun değilse iade penceresi çıkış dalgasından sonra açılır ve rota yeniden teslim edilir." },
            { soru: "Araç içindeki yükleme sırasını operatör değiştirebilir mi?", cevap: "Hayır. Nihai yerleşim, teslim sırası, ağırlık dağılımı ve bağlama ihtiyacı yük sahibi ile taşıyıcının yetkili planına dayanır. Operatör tanımlı paleti belirtilen konuma taşır ve güvenli olmayan durumda işi durdurur. Etiket, ağırlık veya ambalaj uyumsuzsa paleti istisna alanına ayırır. Sözlü acele talimatıyla sıra değişikliği yapılmaz; değişiklik yetkili listede görünür hale getirilir." },
            { soru: "Yoğun hafta için ikinci forklift kiralayabilir miyiz?", cevap: "Güncel filo uygunluğu ve doğrulanmış saha planıyla kısa dönem takviye mümkündür. İkinci makinenin görevi, rotası, parkı, kullanıcı modeli ve çalışma saatleri önceden belirlenir. Mevcut forkliftin aynısını istemek zorunlu değildir; görev için teknik uygunluk ayrıca kontrol edilir. Yoğunluk sonunda kullanım verisi incelenir ve gereksiz uzatma yapılmaz. Nakliye, bekleme ve uzatma koşulları ilk teklifte açıkça gösterilir." },
            { soru: "Yanlış kapıya çıkan palet nasıl düzeltilmeli?", cevap: "Palet aktif trafik dışında güvenli istisna alanına alınır, etiketi ve sistem kaydı doğrulanır ve yetkili depo sorumlusu yeni kapı talimatını verir. Operatör paleti tahminle başka sıraya eklemez. Yeni rota boyunca koridor ve tampon alanın açık olduğu kontrol edilir. Yanlışlığın toplama, etiketleme veya kapı atamasından kaynaklandığı kayda yazılır; gün sonu incelemesinde tekrarını önleyecek süreç adımı düzeltilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Torbalı'nın sanayi ve dağıtım aksı niteliği kamuya açıktır; sevkiyat dalgası, tampon alan, kapı ataması, iade ve istisna yönetimi genel lojistik uygulamalarıdır. İşletme, rota, palet, vardiya, süre veya verim rakamı uydurulmamıştır.",
    },
    "bolge:kemalpasa": {
        h1: "Kemalpaşa İç Lojistik Bağlantısında Randevulu Forklift Elleçlemesi",
        giris: "Kemalpaşa'daki bir depo için forklift planı, liman sahasındaki konteyner hareketini taklit etmek yerine iç lojistik bağlantısını düzenlemelidir. Burada forkliftin işi; gelen karayolu aracından uygun yükü güvenle almak, kontrol ve geçici bekleme alanına taşımak, çıkış partilerini randevu sırasına dizmek ve dağıtım aracına doğru devirle yüklemektir. İlçenin İzmir'in doğu yönündeki sanayi ve ulaşım aksında yer aldığı kamuya açıktır; ancak belirli bir işletmenin sefer sayısı, ürün deseni veya depo kapasitesi bilinmeden iddia edilemez. Bu nedenle planı gerçek araç randevuları, palet listesi, rampa düzeni ve saha ölçüsüyle kuruyoruz. Forklift seçimi bu sayfanın ana konusu değildir; asıl konu, uygunluğu ayrıca doğrulanmış makinenin kapı, tampon stok ve yükleme ekipleri arasında beklemeden fakat hız baskısı yaratmadan çalışmasıdır. Yükün tesise kabulünden dağıtım aracının çıkışına kadar her devir noktası kayıt altına alındığında, makine büyük ölçüde boş beklemez ve yanlış partinin yanlış araca gitme riski azalır.",
        maddeler: [
            { baslik: "Gelen ve giden araç kuyruğunu tek çizelgede görmek", metin: "Mal kabul ile sevkiyat ayrı ekiplerin takviminde tutulursa aynı rampa ve forklift için çakışan çağrılar oluşabilir. Günlük çizelgede araç, yük türü, tahmini parti, yanaşma yeri, hazırlık durumu ve sorumlu kişi birlikte görünür. Öncelik, kapıda en yüksek sesle talep verene göre değil onaylı programa göre değiştirilir. Gecikme olduğunda yeni sıra saha yöneticisince duyurulur. Forklift operatörü iki ekip arasında ticari seçim yapmaz. Böylece iç lojistik bağlantısının gerçek darboğazı makine mi, rampa mı, hazırlık mı kayıtlardan ayırt edilir." },
            { baslik: "Çapraz sevkiyatta yükü uzun süre depoya gömmemek", metin: "Gelen partinin kısa süre içinde başka araca aktarılacağı akışta yük ana stok sıralarına taşınırsa ek çevrim ve adres karışıklığı doğar. Onaylı çapraz sevkiyat yükü, yaya ve yangın yollarını kapatmayan işaretli tampon bölgeye alınır. Etiket, adet ve görünür ambalaj kontrolü burada tamamlanır; uyuşmayan yük normal akıştan ayrılır. Giden araç hazır olduğunda paletler belirlenmiş sırada yüklenir. Bekleme uzarsa tampon alan sürekli depoya dönüşmez; depo yönetimi yeni konum ve stok kaydı kararı verir." },
            { baslik: "Rampa devrinde üç taraflı iletişim kurmak", metin: "Sürücü, depo sorumlusu ve forklift operatörü aynı yükleme durumunu görmelidir. Araç yanaşıp sabitlenmeden operatör yaklaşmaz; depo sorumlusu kapı veya ışık prosedürüne göre izin verir. Sürücü, forklift dorse içindeyken aracı hareket ettirmeyeceğini bilir ve tamamlanma işaretini yetkili kişiden alır. Dil veya görüş engeli varsa standart el işareti ya da saha iletişim aracı belirlenir. Operatör hem makineyi kullanıp hem sürücüyü uzaktan yönlendirmeye çalışmaz; zemin koordinasyonu ayrı rolde tutulur." },
            { baslik: "Dağıtım sırasını depo toplama sırasıyla eşleştirmek", metin: "Bir araç birden fazla teslim noktasına gidiyorsa son teslim yükünü kapıya en yakın dizmek, varışta yeniden elleçleme yaratabilir. Yerleşim planı taşıyıcı ve yük sahibi tarafından teslim sırası, ağırlık dağılımı ve bağlama ihtiyacıyla birlikte hazırlanır. Depo toplama listesi bu sıraya göre tampon alana çıkar. Forklift operatörü yalnız tanımlı paleti tanımlı konuma götürür; nihai araç yük planını kendiliğinden değiştirmez. Etiket okunamıyorsa yük ayrılır. Bu disiplin, iç lojistik hızını sonraki teslim noktasında oluşacak karmaşa pahasına artırmaz." },
            { baslik: "Gerçek çevrim kaydıyla kiralık kapasiteyi ayarlamak", metin: "Kısa dönem kiralamada yalnız motor saatine bakmak operasyonu açıklamaz. Yükleme, boş hareket, rampa bekleme, palet hazırlığı, araç gecikmesi ve günlük kontrol süreleri ayrı neden kodlarıyla kaydedilir. Bekleme çoğunluktaysa ikinci forklift değil randevu veya hazırlık düzeni gerekebilir; aynı anda iki rampada hazır iş birikiyorsa ek makine penceresi değerlendirilebilir. Dönem sonunda veri yalnız ilgili işletmenin sonraki planını düzeltmek için kullanılır. Başka Kemalpaşa depolarına doğrulanmamış verim ya da tasarruf oranı olarak genellenmez." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa iç lojistik devir tablosu", paragraflar: ["Tablo, karayolu aracı ile depo arasındaki her devirde hangi kayıt tamamlanmadan forklift hareketinin başlamaması gerektiğini özetler."], tablo: { basliklar: ["Devir", "Hazırlık", "Forklift hareketi", "Tamamlanma kanıtı"], satirlar: [["Araçtan kabul", "Yanaşma, sabitleme, yük listesi", "Tanımlı paleti kontrol alanına almak", "Adet ve görünür durum"], ["Çapraz sevkiyat", "İşaretli tampon bölge", "Gelen yükü çıkış sırasına dizmek", "Hedef araç eşleşmesi"], ["Ana stok", "Onaylı depo adresi", "Paleti kayıtlı konuma taşımak", "Adres güncellemesi"], ["Dağıtım yükleme", "Yerleşim ve teslim sırası", "Paleti belirlenen konuma vermek", "Son yük ve bağlama kontrolü"], ["Vardiya devri", "Kontrol ve açık görev listesi", "Makineyi yetkili kullanıcıya bırakmak", "İmzalı veya dijital devir"]] } },
            { baslik: "Pik gün için ek forklift penceresini kanıtla açmak", paragraflar: ["Dönemsel yoğunluk tahmini tek başına ek makine için yeterli değildir. Aynı saatlerde kaç hazır araç bulunduğu, mevcut forkliftin ne kadarının gerçek taşıma ne kadarının bekleme olduğu ve ikinci operatör ile güvenli trafik alanının bulunup bulunmadığı görülür. Ek ekipman yalnız darboğaz gerçekten taşıma kapasitesindeyse planlanır.", "İkinci makine geldiğinde görevler ayrılır; örneğin biri mal kabul, diğeri dağıtım yüklemesi yürütür. Ortak tampon alan, geçiş üstünlüğü ve park noktası güncellenir. Yoğunluk bittiğinde kullanım kaydı incelenir ve makine zamanında iade edilir. Süreyi sırf olasılık için uzatmak yerine sonraki doğrulanmış pencereye yeni rezervasyon yapılır." ] },
            { baslik: "Hasarlı veya uyuşmayan yükü ana akıştan ayırmak", paragraflar: ["Yırtık ambalaj, kırık palet, okunmayan etiket ya da beyanla uyuşmayan yük, randevu baskısıyla doğrudan araca aktarılmaz. Güvenli karantina alanına alınır, fotoğraf ve liste kaydı oluşturulur ve yük sahibinin kararı beklenir. Operatör ambalaj yeterliliği veya ticari kabul hakkında tek başına hüküm vermez.", "Yeniden paletleme ya da ataşman değişikliği gerekiyorsa iş alanı, yük ağırlığı ve makine kapasitesi yeniden kontrol edilir. Sorun çözüldüğünde yeni etiket ve sevkiyat sırası sisteme işlenir. Böylece şüpheli bir palet bütün araç randevusunu kapıda tutmak yerine kontrollü bir istisna sürecine girer." ] },
        ],
        sss: [
            { soru: "Kemalpaşa deposunda tek forklift hem mal kabul hem sevkiyat yapabilir mi?", cevap: "Görevler farklı zaman pencerelerine ayrılabiliyor, makine her iki yük ve rota için teknik olarak uygunsa ve bekleme kabul edilebilir düzeydeyse mümkün olabilir. Aynı anda iki hazır araç sürekli kuyruk oluşturuyorsa görev paylaşımı veya ek makine değerlendirilir. Önce çevrim kaydı incelenir; sorun palet hazırlığı ya da rampa boşluğuysa ikinci forklift çözüm olmayabilir. Karar doğrulanmış günlük çizelge ve saha ölçüsüyle verilir, genel bir araç sayısı kuralıyla değil." },
            { soru: "Çapraz sevkiyat yükünü nereye koymalıyız?", cevap: "Ana stoktan ve aktif araç yolundan ayrılmış, işaretli, kapasitesi depo sorumlusunca onaylanmış tampon bölge kullanılmalıdır. Yük hedef araç ve sıra bilgisiyle etiketlenir. Yangın ekipmanı, yaya yolu ve rampa manevrası kapatılmaz. Bekleme planlanandan uzarsa alanın sürekli stok sahasına dönüşmesine izin verilmez; ürün için kayıtlı depo adresi belirlenir. Forklift operatörü yükün ticari hedefini kendi başına değiştirmez." },
            { soru: "Araç rampada sabitlenmeden birkaç palet yükleyebilir miyiz?", cevap: "Hayır. Forklift yaklaşmadan ve özellikle dorseye girmeden önce tesisin onaylı araç sabitleme ve hareket izni prosedürü tamamlanmalıdır. Sürücü, depo sorumlusu ve operatör aynı durumu görür. Takoz, kilitleme veya ışık sistemi hangisi kullanılıyorsa fiziksel kontrol yapılır. Randevunun kısa olması bu adımı kaldırmaz. Araç hareketi ancak forklift çıktıktan, köprü ve kapı güvenli konuma geldikten ve yetkili kişi onay verdikten sonra başlar." },
            { soru: "İkinci forklift kiralamadan önce hangi veriyi tutmalıyız?", cevap: "Araçların hazır olduğu saatler, yükleme ve boşaltma çevrimleri, palet hazırlığı, rampa bekleme, boş sürüş, arıza ve operatör beklemesi ayrı kaydedilmelidir. Ayrıca ikinci makine için güvenli rota, park, enerji veya yakıt ve yetkin kullanıcı bulunmalıdır. Kayıt, mevcut forkliftin gerçekten kapasite sınırında mı yoksa başka nedenle mi beklediğini gösterir. Ek makine ancak tanımlı görev ve süreyle planlanır; doğrulanmamış verim yüzdesi vaat edilmez." },
            { soru: "Hasarlı palet randevuyu kaçıracaksa yükleyebilir miyiz?", cevap: "Hasarın yük stabilitesini veya güvenli çatallamayı etkilediği durumda yükleme yapılmaz. Palet ayrılmış alana alınır, yük sahibine bildirilir ve yetkili yeniden ambalajlama ya da kabul kararı verir. Ağırlık ve yük merkezi yeniden doğrulanır. Operatör randevu baskısıyla kırık paletin taşıma yeterliliğine onay vermez. Diğer uygun paletler plan izin veriyorsa devam edebilir; sorunlu yük yeni sıra ve kayıtla sonraki adıma alınır." },
            { soru: "Forklift vardiya değişiminde nasıl devredilmeli?", cevap: "Yeni kullanıcı günlük kontrolü tekrarlar; mevcut hasar, enerji veya yakıt durumu, takılı ataşman, açık servis kaydı ve sıradaki görevler yazılı ya da dijital formda devredilir. Anahtar yalnız yetkili personele teslim edilir. Önceki operatörün makine sağlam demesi kontrolün yerine geçmez. Trafik veya rampa planı değiştiyse brifing güncellenir. Bu devir hem güvenliği hem gerçek çevrim verisinin vardiyalar arasında kesintisiz kalmasını sağlar." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa'nın İzmir doğu sanayi ve karayolu aksındaki konumu kamuya açıktır; çapraz sevkiyat, rampa devri, tampon alan ve çevrim kaydı genel lojistik uygulamalarıdır. Tesis, sefer, kapasite, süre veya tasarruf rakamı uydurulmamıştır.",
    },
    "bolge:alsancak-liman": {
        h1: "Alsancak Liman Çevresinde Randevulu Saha Elleçlemesi İçin Forklift Kiralama",
        giris: "Alsancak Liman çevresindeki forklift ihtiyacı, depoda gün boyu tekrarlanan sabit bir taşıma çevriminden çok, belirli bir randevu penceresine bağlanan hazırlık ve devir işidir. Yük önce depo ya da geri saha içinde sevke hazır hale gelir, araç gelişinden önce doğru sıraya alınır, evrak ve kapı akışıyla eşleşir, ardından sınırlı zaman içinde dorseden veya dorselere aktarılır. Bu sayfa konteyner istifleyicisi ya da liman vinci seçimini değil; paletli, kasalı veya uygun biçimde bağlanmış genel yükün forkliftle hazırlık alanı ile karayolu aracı arasındaki elleçleme ritmini ele alır. Planı tonajla açmak yerine randevudan geriye doğru kuruyoruz: yük ne zaman kapıda olmalı, hangi parti önce çıkacak, araç beklerken forklift başka işe çekilecek mi, güvenli tampon alan nerede? Alsancak'ın liman niteliği kamuya açıktır; belirli terminalin işleyişi, kapasitesi, yoğunluğu veya giriş süresi hakkında varsayım kurmayız. Gerçek kapı ve saha kuralları yetkili işletmeden alınır. Forklift, ancak yük bilgisi, saha sınırı ve görev paylaşımı doğrulandıktan sonra bu takvimin bir parçası olur.",
        maddeler: [
            { baslik: "Randevudan geriye doğru hazırlık çizelgesi kurmak", metin: "Araç kapıya geldiğinde palet aramak, etiket düzeltmek veya parti sırası belirlemek randevu penceresini tüketir. Çıkış ya da kabul saati sabit nokta alınır; araç yanaşması, yükleme, son kontrol, tampon alana dizme ve depo toplama adımları geriye doğru sıralanır. Her palet sevkiyat listesiyle eşleştirilir ve farklı hedefe giden yükler fiziksel olarak ayrılır. Forkliftin işe başlama saati, aracın geliş saati değil hazırlığın başlaması gereken bu noktadır. Gecikme oluşursa zincirin hangi adımında çıktığı kaydedilir ve sonraki randevu planı buna göre düzeltilir." },
            { baslik: "Tampon alanı geçici stok yığınına çevirmemek", metin: "Randevulu elleçlemede yükleme ağzına yakın bir tampon alan gerekir; fakat bu alan sürekli stokla dolarsa hazır partinin sıralanacağı güvenli yer kalmaz. Tampon bölge yalnız yaklaşan araç için açılır, paletler yükleme sırasına göre dizilir ve iptal edilen sevkiyat ana stok konumuna geri alınır. Yaya yolu, yangın ekipmanı ve araç manevrası kapatılmaz. Forklift operatörü hangi paleti önce alacağını sözlü tahminle belirlemez; liste veya görünür sıra kullanır. Alan boşaltıldıktan sonra hasarlı palet ve döküntü kontrolü yapılır." },
            { baslik: "Dorse devrinde araç sabitlemesini bağımsız kontrol etmek", metin: "Forklift dorseye girecek ya da rampa ağzında yük aktaracaksa araç hareketi ile kot farkı ayrı risklerdir. Sürücüyle anahtar ve hareket izni prosedürü kurulur, tekerlek takozu veya tesisin onaylı sabitleme sistemi uygulanır ve yükleme köprüsünün kapasitesi doğrulanır. Dorse desteği gereken durumda saha yöntemi izlenir. Yeşil ışık veya sözlü hazır bilgisi, fiziksel kontrolün yerine geçmez. Forklift dorse içindeyken araç hareket ettirilmez; tamamlanma işareti yalnız yetkili zemin sorumlusunca verilir." },
            { baslik: "Yük sırasını aks yükü ve teslim sırasıyla birlikte yönetmek", metin: "Paletleri yalnız depodan çıkış kolaylığına göre dizmek, araç üzerindeki dağılımı ve varıştaki boşaltma sırasını bozabilir. Yükleme planı taşıyıcının ve yük sahibinin onayladığı yerleşime göre yürür; ağırlığı bilinmeyen veya etiketi uyuşmayan yük çatala alınmadan ayrılır. Operatör araç üzerindeki nihai yükleme mühendisliğine tek başına karar vermez. Uzun, dengesiz ya da standart palet dışı yük varsa çatal, ataşman ve kapasite diyagramı yeniden kontrol edilir. Bağlama ve son araç emniyeti ilgili yetkili ekip tarafından tamamlanır." },
            { baslik: "Randevu kapanışını evrak ve saha devriyle tamamlamak", metin: "Son paletin araca girmesi işlemin bittiği anlamına gelmez. Yük adedi ve görünür durumu listeyle karşılaştırılır, boş palet veya ambalaj sahadan kaldırılır, rampa tekrar güvenli kullanıma açılır ve forklift belirlenmiş park noktasına alınır. Eksik veya hasarlı yük varsa sevkiyat kapatılmadan sorumluya bildirilir. Araç hareket izni, evrak ve bağlama kontrolü tamamlandıktan sonra verilir. Kullanılan forklift kısa dönem kiralıksa sayaç, yakıt veya enerji ve görünür durum teslim kaydına eklenir; iade aracı için alan boş tutulur." },
        ],
        ekBolumler: [
            { baslik: "Alsancak randevulu elleçleme akış tablosu", paragraflar: ["Aşağıdaki tablo, liman çevresindeki paletli genel yük akışında forkliftin hangi kanıtla devreye gireceğini gösterir. Terminale özgü süreçler yetkili işletmeden ayrıca doğrulanır."], tablo: { basliklar: ["Aşama", "Hazır olması gereken", "Forklift görevi", "Kontrol kapısı"], satirlar: [["Depo toplama", "Onaylı sevkiyat listesi", "Partiyi tampon alana taşımak", "Etiket ve palet eşleşmesi"], ["Araç kabul", "Yanaşma ve sabitleme", "Güvenli mesafede beklemek", "Yetkili yükleme izni"], ["Yükleme", "Sıra ve yerleşim planı", "Tanımlı yükü aktarmak", "Kapasite ve görüş"], ["Son kontrol", "Adet, hasar ve bağlama", "Alanı temizlemek", "Araç hareket onayı"], ["İade", "Park ve alım bilgisi", "Makineyi devir alanına almak", "Teslim formu"]] } },
            { baslik: "Gecikme olduğunda forklifti plansız işe çekmemek", paragraflar: ["Araç veya kapı penceresi geciktiğinde kiralık forklift boş görünebilir. Fakat onu uzak bir göreve göndermek, randevu açıldığında geri dönememesine ve ikinci bir gecikmeye yol açar. Bekleme süresi için önceden bir görev havuzu hazırlanır: yalnız yakın alanda, makine sınıfına uygun ve çağrı geldiğinde güvenle bırakılabilecek işler seçilir. Operatör kendi başına iş kabul etmez.", "Gecikmenin kaynağı ve süresi kayda alınır; yeni pencere yetkili temasla doğrulanır. Bekleme kira ve operatör süresini etkiliyorsa sözleşmedeki koşul uygulanır. Son dakika hız baskısıyla günlük kontrol, araç sabitlemesi veya palet doğrulaması atlanmaz. Bir sonraki sevkiyat planı, gerçekleşen hazırlık ve bekleme verisinden öğrenir." ] },
            { baslik: "Liman ekipmanı ile depo forkliftinin görev sınırı", paragraflar: ["Standart depo veya saha forklifti paletli ve kapasitesine uygun genel yükü taşır; konteynerin kendisini kaldırmak, terminal vinci veya konteyner istifleyicisi görevi değildir. Ağır, uzun ya da özel biçimli yük de sıradan çatalla otomatik olarak taşınamaz. Yük merkezi ve ataşman etkisi makinenin veri plakasına göre değerlendirilir. Görev kapsamı teklif üzerinde açıkça yazılır.", "Saha işletmesi trafik ve giriş yetkisini, taşıyıcı dorse ve bağlama düzenini, yük sahibi doğru ağırlık ile ambalajı, kiralama tarafı ise uygun ekipman ve kararlaştırılan operatör modelini sağlar. Bu roller karışmadığında operatör kapıda ticari veya teknik karar vermek zorunda kalmaz; belirsiz yük güvenli alana ayrılarak yetkili onayı bekler." ] },
        ],
        sss: [
            { soru: "Alsancak Liman randevusuna forklift ne zaman gelmeli?", cevap: "Saat yalnız araç randevusundan türetilmez. Forkliftin sevkiyat partisini toplaması, tampon alana sıralaması ve günlük kontrolü tamamlaması için gereken pencere geriye doğru hesaplanır. Tesis giriş ve makine teslim süresi de eklenir. Yük hazır değilse erken gelen makine bekler; geç gelirse randevu riske girer. Sevkiyat listesi, saha ölçüsü ve araç saati paylaşıldığında başlangıç planı yazılı kurulur; doğrulanmamış sabit teslim süresi vaat edilmez." },
            { soru: "Forklift konteyneri dorseden indirebilir mi?", cevap: "Standart depo forklifti konteyner gövdesini kaldırmak için değildir. Konteyner elleçleme, uygun spreader ve kapasiteye sahip özel terminal ekipmanı gerektirir. Bu sayfadaki kapsam konteyner içindeki veya karayolu aracındaki uygun paletli genel yükün taşınmasıdır. Forklift konteyner içine girecekse kapı, taban, mast, rampa ve araç sabitlemesi ayrıca değerlendirilir. Görev tanımı kutunun kendisi ile içindeki yükü açıkça ayırmalıdır." },
            { soru: "Araç gecikirse operatör başka depoda çalışabilir mi?", cevap: "Yalnız önceden tanımlanmış yakın görev makineye uygunsa, yeni alan güvenli biçimde teslim edilmişse ve randevu çağrısına dönüş planı varsa değerlendirilebilir. Operatör sözlü taleple uzak veya farklı riskteki işe geçmez. Yeni görev için yük, rota ve yetki kontrol edilir. Belirsiz gecikmede platformu sürekli taşımanın kazancı, ikinci bir hazırlık ve trafik riski yaratabilir. Bekleme ve alternatif iş düzeni sözleşme ile günlük planda görünür olmalıdır." },
            { soru: "Dorseye girmeden yükleme yapılabilir mi?", cevap: "Rampa, araç ve yük düzenine göre yük köprü üzerinden dorse içine taşınabilir veya rampa ağzında güvenli devir kurulabilir. Her iki yöntemde araç sabitlemesi, kot farkı, köprü kapasitesi, palet ölçüsü ve operatör görüşü doğrulanır. Sürücü hareket izni prosedürün dışına çıkmaz. Hangi yöntemin uygun olduğu fotoğrafla değil yalnızca genel isimle belirlenemez; gerçek yanaşma ve ekipman ölçüleri görülmelidir." },
            { soru: "İhracat paletinin ağırlığı belli değilse yükleyebilir miyiz?", cevap: "Hayır, güvenli kapasite ve araç yerleşimi için güvenilir ağırlık bilgisi gerekir. Etiketi eksik veya beyanla görünür durum arasında uyumsuzluk bulunan yük ayrılır ve yük sahibinin doğrulaması beklenir. Operatör deneme kaldırmasıyla resmi ağırlık üretmez. Ağırlık merkezi de palet derinliği ve yük dağılımından etkilenir; standart dışı yükte makine diyagramı yeniden kontrol edilir. Randevu baskısı bilinmeyen yükü çatala alma gerekçesi değildir." },
            { soru: "Kısa randevu işi için operatörlü kiralama uygun mu?", cevap: "Sahada uygun yetkin personel yoksa veya görev tek ve yoğun bir pencereye bağlıysa operatörlü model değerlendirilebilir. Tesis yine araç trafiğini, yük sırasını, saha kabulünü ve zemin gözcüsünü yönetir. Operatör makineyi kullanır; sevkiyat evrakı, yük ağırlığı ve dorse bağlama kararlarının sahibi olmaz. Teklifte mesai penceresi, bekleme, uzatma ve iptal koşulları açık yazılır; böylece kısa işin ticari kapsamı kapıda tartışılmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Alsancak'ın liman bölgesi niteliği kamuya açıktır; randevudan geriye planlama, tampon alan, araç sabitlemesi ve yük doğrulama genel elleçleme uygulamalarıdır. Terminal, kapasite, süre, yük veya yoğunluk rakamı uydurulmamıştır.",
    },
    "bolge:aliaga": {
        h1: "Aliağa'da Liman Geri Sahası İçin Forklift Kiralama: Konteyner, Kütük ve Bobin Elleçlemesi",
        giris:
            "Aliağa'nın elleçleme dünyası, bir depo sahasının mantığıyla anlaşılmaz. Burada yükün ölçüsü paletle değil konteynerle, tonla, metre boyuyla konulur: iskeleye yanaşan gemiden inen kutu geri sahaya alınır, gümrük gözetimindeki alanda sırasını bekler, kapısı açılıp içindeki genel kargo boşaltılır ve aynı gün bir başka yükle geri doldurulur. Demir-çelik tarafında yük büsbütün başkalaşır — kütük, slab, sıcak rulo bobin ve uzun profil, ne palete oturur ne standart çatalla tutulur. Bu yüzden Aliağa sahalarına makine planlarken sorduğumuz ilk soru tonaj değil, yükün liman zincirinde hangi halkada durduğudur: kutunun dışında mı çalışılacak, içinde mi; istif kaçıncı sıraya çıkacak; yük gümrüklü mü serbest dolaşımda mı. Bu sayfa, geri saha ve antrepo elleçlemesinin forklift kararlarını bu zincir üzerinden anlatıyor: hangi işin ağır tonaj forklift istediği, nerede reach stacker sınıfının başladığı, konteyner içine giren küçük makinenin şartları ve gümrüklü sahanın kendine özgü kısıtları.",
        maddeler: [
            {
                baslik: "Konteynerin dışı ve içi: iki ayrı makine dünyası",
                metin:
                    "Konteyner elleçlemesi tek bir işmiş gibi konuşulur ama fiilen iki ayrı makine ailesi çalışır. Kutunun kendisini kaldırmak — dorseden almak, yere indirmek, sıraya istiflemek — spreader donanımlı ağır makinenin işidir; dolu bir 20 ayaklık kutunun azami brüt ağırlığı sektör standardı olarak 30 tonun üzerindedir ve bu, sıradan bir depo forkliftinin kaldırma sınıfının çok ötesindedir. Kutunun içine girip yükü tek tek almak ise tam tersi profilde bir makine ister: kısa şasili, dar, alçak mastlı, 1,5-2,5 ton bandında. Sahaya tek makineyle çözüm arayan planlar hep aynı yerde tıkanır — biri kutuyu kaldırır ama içine giremez, diğeri içine girer ama kutuyu kaldıramaz. Aliağa geri sahalarında doğru kurulum, bu iki ailenin sayısını iş hacmine göre dengelemektir.",
            },
            {
                baslik: "Reach stacker nerede başlar, ağır forklift nerede biter",
                metin:
                    "Boş kutuların ve dolu konteynerlerin istifinde reach stacker sınıfı, teleskopik bomu sayesinde ön sıradan arka sıraya uzanabildiği için saha metrekaresini en verimli kullanan makinedir; kapasitesi sıra derinliği arttıkça belirgin düşer — birinci sırada taşıdığı yükü üçüncü sırada taşıyamaz ve saha yerleşimi bu düşüş eğrisine göre planlanır. Boş konteyner istifleyiciler ise hafif yükü çok daha yükseğe çıkarır ve boş kutu havuzunun makinesidir. Ağır tonajlı karşı ağırlıklı forkliftin alanı ise farklıdır: kutu değil, kutu dışındaki ağır parça — kütük demeti, kalıp, makine gövdesi, bobin. Bu üçlünün rollerini karıştırmak, kiralamada en pahalı hatadır; reach stacker kiralanıp gün boyu bobin taşımak da, 16 tonluk forkliftle boş kutu istifi denemek de sahayı yavaşlatır.",
            },
            {
                baslik: "Konteyner içi boşaltma: taban dayanımı ve mast yüksekliği",
                metin:
                    "Kutunun içine forklift sokmak, kabul edilmiş bir yöntemdir ama üç teknik şartı vardır. Birincisi mast: standart bir konteynerin kapı açıklığı, forkliftin kapalı mast yüksekliğinden alçaktır; makine tam serbest kaldırmalı mast olmadan içeride tek palet bile istifleyemez, mastı tavana dayar. İkincisi taban: konteyner döşemesi ahşaptır ve nokta yükü sınırlıdır — dolu forkliftin dar lastikli aks yükü bu sınırı zorlar, bu yüzden içeri giren makinelerin tonajı küçük tutulur. Üçüncüsü sabitleme: kutu dorsenin üzerindeyken içine makine giriyorsa dorse bacakları desteklenmiş, tekerlekler takozlanmış ve rampa ile kutu arasındaki kot farkı köprü ile kapatılmış olmalıdır. Bu üç maddenin biri eksikse, boşaltma işi hız meselesi olmaktan çıkıp kaza senaryosuna döner.",
            },
            {
                baslik: "Demir-çelik yükleri: bobin, kütük ve uzun profilin kendi donanımı",
                metin:
                    "Bölgenin ağır sanayi profili, elleçlemeye çatalın yetmediği bir yük ailesi getirir. Sıcak veya soğuk rulo bobin, silindirik gövdesi nedeniyle çatalda yuvarlanır; güvenli taşıma ya C-kanca ile göbekten ya rulo klempi ile gövdeden yapılır ve iki yöntemin de kapasite hesabı ataşman ağırlığıyla birlikte kurulur. Kütük ve uzun profil demetleri boylarıyla sorun çıkarır: standart forkliftle taşınan altı metrelik demet, dönüşte kendi boyu kadar alan süpürür ve dar geçitte hem yükü hem sahayı riske atar — bu işin makinesi, yükü şasi boyunca yanlamasına taşıyan yan yükleyici sınıfıdır. Uzatma çatalı ise ancak makinenin kapasite diyagramı yeniden okunduğunda, kısaltılmış kapasiteyle kullanılır; ucuz çözüm gibi görünen uzatma, en sık atlanan kapasite kaybıdır.",
            },
            {
                baslik: "Gümrüklü saha ritmi: makine hazır olmak zorunda, yük beklemez",
                metin:
                    "Geri sahada ve gümrüklü alanda elleçlemenin temposunu makine değil evrak belirler. Muayene için açılacak kutunun saati bellidir, memur geldiğinde yükün erişilebilir olması beklenir, numune alınacak parti önceden öne çekilir ve işlem bitince kutu aynı gün mühürlenip sıraya döner. Bu ritmin forklifte yansıması şudur: makine, iş çıktığında sahada ve çalışır olmalıdır — arıza ya da yakıt için yarım saat kaybı, o günün muayene randevusunu ertesi güne atar ve ardından ardiye günü ekler. Bu nedenle gümrüklü saha kiralamalarında sözleşmenin en kritik maddesi kira bedeli değil, arıza durumunda ikame makine süresidir. Sahaya makine verirken ikame taahhüdünü yazılı tanımlamamızın sebebi tam olarak budur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Liman geri sahasında iş türü — makine sınıfı eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, geri saha ve antrepo işlerinde hangi elleçleme türünün hangi makine sınıfına düştüğünü ve kiralamada baştan konuşulması gereken donanımı özetler. Kapasite değerleri her makinenin kendi yük diyagramından okunur; tabloda sınıf eşleşmesi verilmiştir.",
                ],
                tablo: {
                    basliklar: ["İş", "Makine sınıfı", "Kritik donanım", "Sık yapılan hata"],
                    satirlar: [
                        ["Dolu kutu indirme-istifleme", "Reach stacker / spreaderli ağır makine", "Sıra derinliğine göre kapasite eğrisi", "Sıra derinliği hesaba katılmaz"],
                        ["Boş kutu havuzu", "Boş konteyner istifleyici", "Yüksek istif kolonu, saha planı", "Dolu kutu makinesiyle çalışmak"],
                        ["Kutu içi boşaltma", "1,5 – 2,5 ton, kısa şasi", "Tam serbest kaldırmalı mast", "Standart mastla içeri girmek"],
                        ["Bobin ve rulo", "Ağır tonaj karşı ağırlıklı", "C-kanca veya rulo klempi", "Çatalla yuvarlanan yük taşımak"],
                        ["Kütük, profil, boru demeti", "Yan yükleyici veya uzun çatal", "Yük boyuna göre manevra alanı", "Uzatma çatalında kapasite düşümü"],
                    ],
                },
            },
            {
                baslik: "Gemi programına göre elleçleme kapasitesi planlamak",
                paragraflar: [
                    "Liman çevresindeki elleçleme yükü düz bir çizgi izlemez; gemi yanaşma programına göre dalgalanır. Yanaşma sonrası birkaç gün boyunca geri sahaya yük yığılır, ardından tempo düşer ve saha nefes alır. Filoyu tepe güne göre boyutlayan tesis, aradaki sakin günlerde çalışmayan makinenin kirasını öder; taban güne göre boyutlayan tesis ise yanaşma günü sahayı kilitler. Doğru kurgu ikisinin ortasındadır: sürekli işi karşılayan makineler dönemsel sözleşmeyle sabit tutulur, yanaşma yoğunluğu gün veya hafta bazlı ek makineyle karşılanır. Bu modelin tek şartı öngörüdür — gemi programı belli olduğunda ek makine talebini önceden bağlamak, aynı programı izleyen bütün sahaların aynı güne talep yığdığı gerçeği karşısında tek güvencedir.",
                    "Ek makine planında sıkça atlanan kalem operatördür. Yanaşma günü sahaya inen makine, sürücüsü olmadığında sadece park etmiş demirdir; kısa süreli takviyelerde operatörlü kiralama, personel bulma telaşını baştan ortadan kaldırdığı için tercih edilir.",
                ],
            },
            {
                baslik: "Saha güvenliği: ağır makine ile insanın aynı metrekareyi paylaşması",
                paragraflar: [
                    "Geri sahanın risk profili depo sahasından farklıdır çünkü burada makineler büyük, görüş alanları kısıtlı ve yükler görüşü kapatacak boyuttadır. Üç kural sahayı ayakta tutar. Birincisi, istif koridorlarının tek yönlü tanımlanması ve yaya geçişinin bu koridorlardan tamamen ayrılmasıdır; ikincisi, konteyner kapısı açılırken kimsenin kapı önünde durmaması — kaymış yük, kapı açıldığında dışarı devrilir ve bu, saha kazalarının en bilinen deseni olmasına rağmen en sık tekrarlananıdır. Üçüncüsü, yükün taşıma yüksekliğidir: ağır tonajlı makinede yükseğe kaldırılmış yük, görüşü kapattığı gibi devrilme marjını da eritir.",
                    "Bunlara sahaya özgü bir madde daha eklenir: yükün beyan edilen ağırlığı ile gerçek ağırlığı arasındaki fark. İhracat konteynerlerinde doğrulanmış brüt ağırlık zorunluluğunun mevcut olması boşuna değildir — ağırlığı bilinmeyen yük, kapasite hesabı yapılamayan yüktür ve makineye 'kaldırabildiği kadar' yaklaşımıyla iş verilmesi, sahada kabul ettiğimiz bir yöntem değildir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Konteynerlerimizi dorseden indirmeden içinde boşaltıyoruz; hangi forklift bu işi yapar?",
                cevap:
                    "Kutu içine girecek makinede üç ölçü belirleyicidir: kapalı mast yüksekliği kapı açıklığından alçak olmalı, mast tam serbest kaldırmalı olmalı ki içeride mast uzamadan istif yapılabilsin ve makine kısa şasili, 1,5-2,5 ton bandında seçilmelidir — konteyner ahşap tabanının nokta yükü sınırı ağır makineyi kaldırmaz. Dorse üzerinde çalışılacaksa ayrıca üç saha şartı gerekir: dorse bacaklarının desteklenmesi, tekerleklerin takozlanması ve rampa ile kutu arasındaki kot farkının köprüyle kapatılması. Kutu ölçülerinizi, rampa yüksekliğinizi ve boşaltacağınız yükün palet düzenini iletin; makineyi ve köprü çözümünü birlikte netleştirelim.",
            },
            {
                soru: "Reach stacker mı kiralamalıyız, yoksa ağır tonajlı forklift mi yeter?",
                cevap:
                    "Cevap, kaldıracağınız şeyin konteynerin kendisi mi yoksa içindeki yük mü olduğuna bağlıdır. Kutuyu kaldıracak, dorseden indirecek ve üst üste istifleyecekseniz makine reach stacker sınıfıdır; teleskopik bom sayesinde arka sıraya uzanır ve saha metrekaresini en verimli kullanan çözümdür — ancak kapasitesi sıra derinliği arttıkça düştüğü için istif planı bu eğriye göre yapılmalıdır. Yükünüz kutunun kendisi değil de ağır tekil parçalarsa (bobin, kalıp, makine gövdesi, kütük demeti) ağır tonajlı karşı ağırlıklı forklift hem daha ekonomik hem daha manevra kabiliyetlidir. Saha krokinizi ve tipik yük listenizi paylaşın; iki sınıfın günlük maliyetini iş hacminiz üzerinden karşılaştırmalı çıkaralım.",
            },
            {
                soru: "Altı metrelik profil demetlerini normal forkliftle taşıyoruz, dar geçitlerde zorlanıyoruz. Alternatif var mı?",
                cevap:
                    "Var ve bu iş için tasarlanmış sınıf yan yükleyicidir: yükü çatalla önde değil, şasi boyunca yanlamasına taşır — yani altı metrelik demet, makinenin genişliğini değil uzunluğunu kullanır ve dar geçitte manevra sorunu ortadan kalkar. Standart forkliftte aynı yükü taşımanın iki bedeli vardır; dönüşte yükün süpürdüğü alan makinenin boyunun katına çıkar ve uzatma çatalı kullanıldığında ağırlık merkezi öne kaydığı için makinenin gerçek kapasitesi diyagramda belirgin düşer. Demet boylarınızı, ortalama ağırlıklarını ve geçit genişliklerinizi iletin; yan yükleyici ile uzun çatallı karşı ağırlıklı çözümü ölçüleriniz üzerinden değerlendirelim.",
            },
            {
                soru: "Antrepomuzda gümrük muayenesi için elleçleme yapıyoruz; kiralık makine bu düzene uyar mı?",
                cevap:
                    "Uyar, ama sözleşmenin muayene ritmine göre yazılması şartıyla. Gümrüklü sahada işin saatini yük değil işlem belirler: muayene randevusu geldiğinde parti erişilebilir olmalı, numune alınacak koli öne çekilmiş olmalı ve işlem bittiğinde yük aynı gün yerine dönmelidir. Bu düzende makinenin arızalanması sadece bir gün kaybı değil, kaçan randevu ve eklenen ardiye günü demektir. Bu yüzden gümrüklü saha kiralamalarında kritik madde kira bedeli değil ikame süresidir — arıza hâlinde yerine gelecek makinenin süresi sözleşmede yazılı olmalıdır. Sahanızın günlük muayene yoğunluğunu paylaşın; ikame taahhüdünü ve gerekiyorsa yedek makine düzenini ona göre kuralım.",
            },
            {
                soru: "Bobinleri çatalla taşıyoruz ve zaman zaman yuvarlanma yaşıyoruz; ne yapmalıyız?",
                cevap:
                    "Çatal, silindirik yükü tutmak için tasarlanmamış bir arayüzdür; bobin çatalın üzerinde noktasal temasla durur ve her fren, her dönüş yuvarlanmayı davet eder — yaşadığınız durum makine hatası değil, yanlış arayüz. İki doğru yöntem vardır. C-kanca, bobini göbeğinden alır ve dik duran rulolarda hızlı çalışır; rulo klempi ise gövdeden kavrar ve yatık taşımada güvenlidir. Her iki ataşman da kendi ağırlığıyla ve yükü öne taşımasıyla makinenin net kapasitesini düşürür, bu yüzden tonaj hesabı ataşmanla birlikte yeniden yapılmalıdır. Bobin çapı, göbek çapı, ağırlığı ve taşıma yönünü (dik/yatık) iletin; ataşman ve makine eşleşmesini kapasite payı bırakarak seçelim.",
            },
            {
                soru: "Gemi yanaşma günlerinde saha kilitleniyor, diğer günler makineler boş duruyor. Nasıl bir kiralama modeli kuralım?",
                cevap:
                    "Bu dalgalanma için tek makine sayısı doğru cevap değildir; iki katmanlı model kurulur. Sürekli akan işi — antrepo içi transfer, muayene elleçlemesi, günlük çıkışlar — karşılayan makineler dönemsel sözleşmeyle sabit tutulur; yanaşma yoğunluğu ise gün veya hafta bazlı ek makineyle karşılanır ve program bittiğinde iade edilir. Modelin işlemesinin tek şartı erken haberdir: aynı liman programını izleyen bütün sahalar aynı güne talep yığdığı için, gemi programı netleştiği anda ek makine rezervasyonunu bağlamak gerekir. Kısa takviyelerde operatörlü kiralamayı öneririz — bir haftalık iş için operatör bulmak, makine bulmaktan zordur. Yanaşma takviminizi paylaşın, iki katmanı birlikte boyutlayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aliağa'nın liman, demir-çelik ve ağır sanayi karakteri kamuya açık bilgidir; konteyner brüt ağırlık sınırı, taban nokta yükü kısıtı, serbest kaldırmalı mast gereği, reach stacker kapasite-sıra ilişkisi ve doğrulanmış brüt ağırlık uygulaması sektör standardı bilgilerdir; iki katmanlı filo modeli ve ikame taahhüdü firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:gaziemir": {
        h1: "Gaziemir'de Hava Kargo ve Serbest Bölge Forklifti: Çevrim Süresi Üzerine Kurulu Elleçleme",
        giris:
            "Gaziemir'in elleçleme karakterini iki farklı saat belirler: uçağın kalkış saati ve gümrük işleminin saati. Hava kargo terminalinde yük, depoya konmak için değil bir sonraki uçağa yetişmek için gelir; genel kargo parçalara ayrılır, tartılır, uçak gövdesinin eğimine uyan konturda toplanır ve dakikası hesaplı bir programa teslim edilir. Serbest bölge tarafında ise tempo başka bir düzenle kurulur — gelen hammadde bölgeye girer, işlenir, katma değeriyle çıkar ve her giriş-çıkış kendi belgesiyle kayda geçer. İkisinin ortak paydası şudur: burada forkliftin görevi yük taşımak değil, çevrimi kesintisiz tutmaktır. Bir palet on dakika gecikirse depo kaybetmez, uçuş kaybeder. Bu sayfa, havalimanı çevresi ve serbest bölge lojistiğinin forklift kararlarını bu çevrim mantığıyla ele alıyor: terminal içinin akülü ve kompakt makine ihtiyacı, hacimsel ağırlığın tonaj hesabına etkisi, apron ile terminal arasındaki keskin sınır ve kısa vadeli talep dalgalanmasının kiralamaya yansıması.",
        maddeler: [
            {
                baslik: "Hava kargonun tonaj yanılgısı: ağırlık az, hacim çok",
                metin:
                    "Hava kargoda yükün faturası çoğu zaman kilosuyla değil kapladığı hacimle kesilir; taşımacılığın hacimsel ağırlık kuralı, hafif ama iri gönderiyi ağır gönderi gibi ücretlendirir. Bu ticari gerçeğin elleçlemeye yansıması nettir: terminalde dolaşan yüklerin büyük bölümü ağır değil, iri ve dengesizdir. Dolayısıyla buradaki forklift kararı 'kaç ton' sorusuyla değil 'ne kadar hacimli, ne kadar dengesiz' sorusuyla verilir. Yüksek tonajlı makine terminale girdiğinde kapasitesinin çeyreğini bile kullanamaz ama dönüş yarıçapıyla koridoru tıkar; doğru profil, düşük tonajlı, kompakt, iyi görüşlü ve hassas hidrolikli makinedir. Terminalde makineyi büyütmek verim getirmez, alan kaybettirir.",
            },
            {
                baslik: "Terminal içi: akülü zorunluluğu ve zemin hassasiyeti",
                metin:
                    "Kargo terminalleri kapalı, yoğun personelli ve sürekli hareket hâlindeki alanlardır; bu üçlü, içeride egzozlu makine çalıştırmayı baştan dışlar — iç mekânın makinesi akülüdür. Zemin tarafında da beklenti farklıdır: terminal zeminleri genellikle düzgün betondur ve iz bırakmayan lastik, hem görüntü hem kayma güvenliği açısından standarttır. Bir başka ayrıntı, gürültü ve manevra disiplinidir; kargo terminalinde forklift, sabit rulolu hatların, tartı noktalarının ve elle çalışan personelin arasından geçer. Bu ortamda makine seçiminin görünmeyen kriteri operatörün görüş açısıdır: yükseltilmiş yükle görüşü kapanan makine, terminalin en kalabalık koridorunda en yavaş çalışan makinedir.",
            },
            {
                baslik: "Apron ile terminal arasındaki sınır: her makine her yere giremez",
                metin:
                    "Havalimanı sahasında pist ve apron tarafı ile terminalin kara tarafı, birbirinden idari olarak ayrılmış iki dünyadır. Apron tarafına araç ve makine girişi izne bağlıdır, sürücülerin ayrı yetki belgesi taşıması gerekir ve saha, yabancı madde riskine karşı sıkı denetlenir — kopmuş bir lastik parçası ya da düşen bir cıvata, uçak motoru için ciddi tehlikedir. Kiralık makine planlanırken bu sınır baştan konuşulur: makine yalnız terminal içinde mi çalışacak, yoksa apron tarafına da geçecek mi? İkinci durumda hem izin süreci hem makinenin bakım-temizlik durumu ayrı bir standarda tabidir. Pratikte çoğu kiralama, kara tarafındaki kargo binası ve çevre depolar için yapılır; apron tarafı yer hizmetleri kuruluşlarının kendi ekipmanıyla yürür.",
            },
            {
                baslik: "Serbest bölge lojistiği: sayının ve kaydın makinesi",
                metin:
                    "Serbest bölgede elleçlemenin ayırt edici tarafı, her hareketin belgeye bağlı olmasıdır: bölgeye giren yük kayda geçer, işlem görür, çıkarken yeniden kayda geçer ve stok sayımı bu kayıtla tutar olmak zorundadır. Forklift açısından bunun anlamı, hızdan çok izlenebilirliktir — hangi paletin nereye kaldırıldığının bilinmediği bir saha, sayım günü ekipçe aranan bir sahaya döner. Bu yüzden serbest bölge depolarında makine kadar raf-adres düzeni ve palet etiketinin okunabilirliği konuşulur. Makine tarafında ise iki eğilim öne çıkar: raf koridorlarında yüksek istif yapabilen kompakt sınıf ve rampa ile depo arasında mekik dokuyan orta tonajlı makine. Bölgenin ihracat ağırlıklı çalışan tesislerinde ikinci grup, sevkiyat gününün tempo belirleyicisidir.",
            },
            {
                baslik: "Çevrim süresi: kiralamanın burada ölçüldüğü tek metrik",
                metin:
                    "Depo lojistiğinde makine performansı taşınan palet sayısıyla konuşulur; havalimanı çevresinde ise doğru metrik çevrim süresidir — yükün kapıdan girip işlem görüp çıkana kadar geçen süre. Bu metrik, makinenin gücünden çok hazır bulunuşuna bakar: şarjı biten makine, dolu akülüsü olmadığı için beklerse çevrim kırılır; kapasitesi yüksek ama koridora sığmayan makine, kısa yolu uzun yoldan gittiği için çevrim uzar. Kiralama görüşmesinde bu yüzden kaç makine gerektiğini değil, günün hangi saatlerinde kaç eşzamanlı elleçleme noktası olduğunu sorarız. Yığılmanın saati bilinirse makine sayısı kendiliğinden çıkar ve çoğu sahada sonuç, tahmin edilenden az makineyle daha kısa çevrim olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Havalimanı çevresi ve serbest bölge: alan — makine profili tablosu",
                paragraflar: [
                    "Gaziemir çevresindeki lojistik alanları, elleçleme koşulları ve uygun makine profili aşağıda karşılaştırılmıştır. Kiralama görüşmesinde bu satırlardan hangisinde çalışılacağı netleşirse, geri kalan teknik ayrıntı hızla kapanır.",
                ],
                tablo: {
                    basliklar: ["Alan", "Yükün karakteri", "Makine profili", "Baştan konuşulacak kısıt"],
                    satirlar: [
                        ["Kargo terminali içi", "Hafif, hacimli, dengesiz", "Akülü 1,5 – 2 ton, kompakt", "İz bırakmayan lastik, görüş açısı"],
                        ["Terminal çevresi depo", "Karma palet, kısa süreli stok", "Akülü 2 – 2,5 ton", "Rampa kotu ve kapı ölçüsü"],
                        ["Apron tarafı", "Uçak yükleme ekipmanı", "Yer hizmetleri ekipmanı", "Erişim izni ve yetki belgesi"],
                        ["Serbest bölge deposu", "İşlem görecek hammadde-mamul", "Raf koridoru için kompakt istif", "Adres düzeni, sayım izlenebilirliği"],
                        ["Bölge sevkiyat rampası", "İhracat paleti, dorse yükleme", "2,5 ton, sideshift", "Araç sırası ve yükleme penceresi"],
                    ],
                },
            },
            {
                baslik: "Kısa vadeli talep dalgası: uçuş programı değiştiğinde ne olur",
                paragraflar: [
                    "Hava kargo ve ihracat lojistiğinin talep eğrisi kısa vadelidir; bir uçuş programı değişikliği, bir sevkiyat sıkışması ya da sezonluk bir ihracat dalgası, elleçleme ihtiyacını günler içinde büyütür. Bu ortamda uzun dönem sözleşmeyle büyük filo tutmak, sakin haftalarda atıl kapasite ödemek demektir; her yığılmada acil makine aramak ise temin belirsizliği getirir. Uyguladığımız orta yol, çekirdek filoyu sabit tutup üzerine çağrı bazlı ek makine hakkı tanımlamaktır: ek makinenin sınıfı ve temin süresi sözleşmede yazılıdır, çağrı geldiğinde fiyat ve müsaitlik pazarlığı yapılmaz.",
                    "Bu düzenin ikinci ayağı operatördür. Kısa vadeli takviyelerde tesisin kendi personelini eğitecek zamanı olmadığı için operatörlü kiralama pratik çözümdür; ancak gelen operatörün ilk saatinde saha brifingi alması — rota, yasak alanlar, tartı ve muayene noktaları, kapı düzeni — şarttır. Sahayı bilmeyen deneyimli operatör, çevrimi hızlandırmaz.",
                ],
            },
            {
                baslik: "İzlenebilirlik: elleçlemenin kayıtla buluştuğu nokta",
                paragraflar: [
                    "Hem gümrük gözetimindeki hem serbest bölge içindeki yüklerde elleçlemenin kendisi kadar kaydı da önemlidir. Bir paletin hangi bölgeden alınıp nereye kaldırıldığı bilinmiyorsa, o palet sayım gününde fiilen kayıptır ve arama süresi, tasarruf edilen bütün elleçleme dakikalarını götürür. Sahada kurduğumuz düzen basittir ve pahalı sistem gerektirmez: depo bloklara ayrılır, bloklar fiziken işaretlenir, her kaldırma hareketi adresle kaydedilir ve sevkiyat listeleri adresle birlikte yazılır. Adressiz istif yapılmaması, bu düzenin tek kuralıdır.",
                    "Forklift tarafında bunun karşılığı, operatörün etiket okuyabilecek konumda çalışmasıdır: yüksek raf kotlarında etiketi göremeyen operatör ya paleti indirip bakar ya tahmin eder — ikisi de kayıptır. Raf kotu yüksek depolarda etiketin palet yüzüne, okunabilir boyutta ve sabit konumda basılması, makine seçiminden daha çok zaman kazandırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kargo terminalimizde yükler hafif ama çok hacimli; küçük forklift yeter mi?",
                cevap:
                    "Çoğunlukla yeter ve doğrusu da budur: hava kargonun yük profili ağır değil iridir, çünkü taşıma ücretlendirmesindeki hacimsel ağırlık kuralı iri gönderiyi zaten sisteme çeker. Bu profilde 1,5-2 ton bandındaki kompakt akülü makine, kapasite açısından fazlasıyla yeterlidir. Dikkat edilecek nokta tonaj değil geometridir — iri ve dengesiz yükte ağırlık merkezi öne kayabilir, bu yüzden yükün derinliği makinenin yük diyagramıyla birlikte okunmalıdır. İkinci nokta görüştür: hacimli yük operatörün önünü kapatırsa terminal koridorunda hız düşer, bu durumda alçak taşıma ve gerektiğinde geri manevra düzeni kurulur. Tipik gönderi ölçülerinizi paylaşın; kapasiteyi değil geometriyi birlikte kontrol edelim.",
            },
            {
                soru: "Makinemizin apron tarafına da geçmesi gerekiyor; kiralık makineyle bu mümkün mü?",
                cevap:
                    "Mümkün olup olmadığı bizim değil, saha yetkilisinin iznine bağlıdır: apron tarafı erişimi izin rejimine tabidir, sürücülerin ayrı yetki belgesi taşıması beklenir ve makinenin sahaya girmeden önce yabancı madde riski açısından kontrol edilmesi gerekir — gevşek parça, aşınmış lastik ya da kaçak yapan hidrolik, apron için kabul edilmez. Pratikte kiralamalarımızın büyük bölümü kara tarafındaki kargo binası ve çevre depolar için yapılır; apron tarafındaki yükleme genellikle yer hizmetleri kuruluşlarının kendi ekipmanıyla yürür. Yine de geçiş gerekiyorsa, izin sürecini işleten taraf siz olursunuz ve biz makineyi kontrol standardına uygun teslim ederiz. Hangi sınırda çalışacağınızı baştan belirleyelim.",
            },
            {
                soru: "Serbest bölge depomuzda sayım günleri kâbusa dönüyor; sorun forklift düzeninde mi?",
                cevap:
                    "Sorun genellikle makinede değil, kaldırma hareketinin kayıtsız yapılmasındadır: adressiz istiflenen palet, sayım gününde fiilen aranmaya başlanır ve o arama süresi, bütün yıl kazanılan elleçleme dakikalarını siler. Kurulacak düzen pahalı bir sistem gerektirmez — depo bloklara ayrılır, bloklar fiziken işaretlenir, her hareket adresle kaydedilir ve sevkiyat listeleri adresle yazılır. Tek kural, adressiz istif yapılmamasıdır. Buna bir de etiket okunabilirliğini ekleyin: yüksek raf kotunda etiketi göremeyen operatör paleti indirip bakmak zorunda kalır. İlk kurulumda mevcut stokun adreslenmesi en zahmetli adımdır; onu bir kez yaptıktan sonra sayım, gün değil saat işine döner. Kroki şablonunu paylaşabiliriz.",
            },
            {
                soru: "İhracat sevkiyatlarımız dalgalı; sabit filo mu tutmalıyız, her seferinde mi kiralamalıyız?",
                cevap:
                    "İkisinin ortası doğru cevaptır. Sürekli akan işi karşılayan çekirdek filoyu dönemsel sözleşmeyle sabit tutun — bu, sakin haftalarda da çalışan minimum makine sayısıdır. Üzerine, sözleşmede tanımlı bir ek makine hakkı ekleyin: ek makinenin sınıfı, günlük bedeli ve temin süresi baştan yazılı olsun ki yığılma geldiğinde pazarlık değil çağrı yapılsın. Bu model, hem atıl kapasite ödemenizi hem yoğun günde makine bulamama riskinizi ortadan kaldırır. Kısa takviyelerde operatörlü seçeneği öneririz; bir haftalık iş için personel bulmak ve eğitmek pratik değildir. Son üç ayın sevkiyat yoğunluğunu gün bazında paylaşın; çekirdek filo sayısını ve ek makine eşiğini veriyle çıkaralım.",
            },
            {
                soru: "Forklift sayımızı artırdık ama yükler yine geç çıkıyor; nerede yanlış yapıyoruz?",
                cevap:
                    "Bu tablonun klasik nedeni, sorunun makine sayısında değil eşzamanlılıkta olmasıdır. Yükler günün belirli saatlerinde aynı anda yığılıyorsa, makine eklemek darboğazı bir adım öteye taşır — sıra bu kez tartı noktasında, kapı ağzında ya da evrak işleminde oluşur. Doğru teşhis için bir hafta boyunca üç veriyi kaydedin: yükün kapıdan girdiği saat, işlem gördüğü saat, çıktığı saat. Bu üçlü, çevrimin nerede beklediğini doğrudan gösterir. Deneyimimizde vakaların çoğunda darboğaz elleçleme değil, elleçlemeden önceki hazırlıktır — palet hazır olmadan makine çağrılır ve makine bekler. Kayıt tablosunu paylaşabiliriz; birlikte okuyup makine sayısını veriye göre belirleyelim.",
            },
            {
                soru: "Terminal içinde dizel forklift kullanabilir miyiz, kapılar açık kalıyor?",
                cevap:
                    "Kapıların açık olması, kapalı ve yoğun personelli bir kargo terminalinde egzozlu makineyi kabul edilebilir hâle getirmez. Terminal ortamının üç özelliği bu kararı kesinleştirir: hacim kapalıdır, personel yoğunluğu yüksektir ve makine, insanların elle çalıştığı hatların hemen yanından geçer. Bu koşullarda emisyon maruziyeti kapı açıklığıyla telafi edilemez; iç mekânın makinesi akülüdür. Dizel sınıf, açık saha ve dış rampa işlerinde yerini korur — hatta yükün terminale girmeden önceki ağır elleçlemesinde tercih edilir. Uygulanan doğru düzen, iç ve dış makinelerin görev ayrımıdır: dış makine yükü kapı önündeki tampon alana bırakır, iç makine oradan çeker. Kapı ve tampon alan düzeninizi birlikte planlayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gaziemir'in havalimanı ve serbest bölge lojistiği barındırdığı kamuya açık bilgidir; hava taşımacılığında hacimsel ağırlık uygulaması, apron erişiminin izne tabi olması ve yabancı madde denetimi, kapalı alanda emisyon kısıtı sektör standardı bilgilerdir; çekirdek filo + tanımlı ek makine hakkı modeli ve çevrim süresi ölçümü firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:aliaga-petrokimya-osb": {
        h1: "Aliağa Petrokimya Sahasında Forklift: Patlayıcı Ortam Rejimi ve İzinli Çalışma Düzeni",
        giris:
            "Petrokimya ve rafineri sahalarında forklift, başka hiçbir sanayi alanında olmadığı kadar sıkı bir kural setinin içine girer. Buradaki mesele makinenin ne kadar kaldırdığı değil, çalışacağı yerde ortamın tutuşabilir olup olmadığıdır: proses ünitelerinin çevresinde hava, belirli koşullarda yanıcı gaz veya buhar barındırabilir ve standart bir dizel ya da akülü forklift, egzoz sıcaklığı, kıvılcım üreten elektrik aksamı ve sıcak yüzeyleriyle bu ortamda tutuşturucu kaynağın kendisidir. Bu yüzden saha, görünmez sınırlarla bölgelere ayrılır; her bölgenin kendi ekipman standardı, her işin kendi izin belgesi vardır. Elleçlenen yük de kendine özgüdür — granül dolu big-bag, kimyasal varil, IBC tank, katalizör kabı ve tehlikeli madde etiketli paletler. Bu sayfa, petrokimya sahalarına forklift verirken uyguladığımız düzeni anlatıyor: bölge sınıflandırmasının makine seçimine etkisi, izinli çalışma sistemiyle uyum, tehlikeli madde elleçlemesinin ayrımları ve saha içinde yükün taşınma disiplini.",
        maddeler: [
            {
                baslik: "Bölge sınıflandırması: makine seçiminin ilk ve tek başlangıcı",
                metin:
                    "Patlayıcı ortam mevzuatı, yanıcı gaz veya buharın bulunma sıklığına göre alanları bölgelere ayırır; bu sınıflandırma, sahada çalışacak her ekipmanın koruma seviyesini belirler. Forklift açısından kural nettir: sınıflandırılmış bölgeye giren makinenin patlayıcı ortama uygun sertifikalı donanıma sahip olması gerekir ve bu, standart makineye sonradan eklenen bir aksesuar değil, makinenin tasarım ve belgelendirme düzeyidir. Bölge dışında kalan alanlarda ise standart makine çalışabilir. Bu yüzden kiralama görüşmesinin ilk maddesi tonaj değil, tesisin bölge haritasıdır — hangi noktada hangi zon geçerli, makine nereye kadar girecek. Haritayı görmeden verilen teklif, sahaya girmeden geçersiz hâle gelen tekliftir.",
            },
            {
                baslik: "Sınır yönetimi: bölge dışında biten, bölge içinde başlayan iş",
                metin:
                    "Sertifikalı makine hem temini hem maliyeti bakımından standart makineden farklıdır; bu yüzden iyi kurulmuş sahalarda uygulanan yaygın çözüm, işi sınırda bölmektir. Yük, standart makineyle sınıflandırılmış bölgenin dışındaki tampon alana kadar getirilir; oradan içeri, uygun donanımlı makineyle veya elleçlemeyi gerektirmeyen yöntemlerle alınır. Bu düzenin tek şartı tampon alanın gerçekten tanımlı olmasıdır — işaretlenmiş, yeterli büyüklükte ve iki makinenin birbirini beklemeyeceği kadar tamponlu. Sınırın kâğıt üzerinde kalıp sahada bulanıklaştığı tesisler, en riskli anı yaşar: standart makine, 'sadece iki metre' diyerek bölgenin içine girer. Sınır ihlali, saha kültüründe tolere edilebilecek en son şeydir.",
            },
            {
                baslik: "İzinli çalışma sistemi: makine sahaya evrakla girer",
                metin:
                    "Petrokimya sahalarında iş, izin belgesiyle başlar. Sıcak iş izni, kapalı hacim izni ve genel çalışma izni gibi belgeler, işin yerini, süresini, alınacak önlemleri ve sorumlusunu tanımlar; forklift işleri de bu sistemin dışında değildir. Kiralık makinenin sahaya girişi için tipik olarak makinenin periyodik kontrol raporu, operatörün yeterlilik belgesi, iş güvenliği eğitim kaydı ve saha oryantasyonu tamamlanmış olmalıdır. Bu evrakın son dakikada toplanması, sahaya giriş gününü ertelemenin en yaygın nedenidir. Kiralamada bu yüzden teslim tarihini değil, evrak tarihini planlarız: belgeler hazırsa makine kapıdan geçer, hazır değilse makine kapıda bekler — ve kapıda bekleyen makinenin kirası da işlemektedir.",
            },
            {
                baslik: "Tehlikeli madde elleçlemesi: varil, IBC ve ayrıştırma kuralı",
                metin:
                    "Kimyasal yükün elleçlenmesinde iki ayrı disiplin birlikte çalışır. Birincisi mekanik güvenliktir: varil, uygun varil tutucu veya kelepçeyle taşınır — çatal ucuna alınan varil devrilmeye açık bir yüktür; IBC tank paletli yapısıyla çatala uygundur ama içindeki sıvının hareketi, dolu tankta ağırlık merkezini taşıma sırasında oynatır ve hız düşürmeyi zorunlu kılar. İkincisi kimyasal ayrıştırmadır: birbiriyle tehlikeli tepkimeye girebilecek madde sınıfları aynı istif alanında yan yana konmaz ve bu ayrım, tehlikeli madde taşımacılığı kurallarının temel maddelerindendir. Forklift operatörü etiket okuyabilmeli, yükü hangi bölgeye koyacağını bilmelidir; 'boş yere koy' talimatı, bu sahalarda geçerli bir talimat değildir.",
            },
            {
                baslik: "Sızıntı ve dökülme anı: makinenin ilk yapacağı şey durmaktır",
                metin:
                    "Kimyasal saha elleçlemesinde en kritik senaryo yükün düşmesi değil, düşen yükün içeriğidir. Yırtılan big-bag, delinen varil veya sızdıran IBC, hem zemini kayganlaştırır hem ortamı buhar açısından değiştirir. Sahada uygulanan doğru refleks tektir: makine durur, operatör motoru kapatır, alanı terk eder ve müdahaleyi eğitimli ekip devralır. Forkliftle temizlik yapma, sızıntının üzerinden geçme veya dökülen yükü kaldırmaya çalışma girişimleri, olayın büyüdüğü noktadır. Bu refleks, teslimat günü verdiğimiz saha brifingine tesisin acil durum planıyla birlikte işlenir; makine operatörünün bilmesi gereken şey kimyanın kendisi değil, hangi anda dokunmayacağıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha bölgesine göre makine ve izin gereksinimi",
                paragraflar: [
                    "Aşağıdaki tablo, petrokimya ve rafineri sahalarında forklift planlamasının çerçevesini özetler. Bölge tanımları tesisin kendi patlamadan korunma dokümanından okunur; tablo, kiralama görüşmesinde hangi soruların sorulacağını gösterir.",
                ],
                tablo: {
                    basliklar: ["Alan", "Tipik iş", "Makine gereksinimi", "Evrak / izin"],
                    satirlar: [
                        ["Sınıflandırılmış proses bölgesi", "Ünite çevresi malzeme taşıma", "Patlayıcı ortama uygun sertifikalı makine", "Çalışma izni + bölge onayı"],
                        ["Tampon / sınır alanı", "Yük devri, ara istif", "Standart makine (sınırı geçmez)", "Saha giriş izni"],
                        ["Kimyasal ambar", "Varil, IBC, torba elleçleme", "Uygun ataşman, ayrıştırmalı istif", "Tehlikeli madde istif planı"],
                        ["Granül / big-bag sahası", "Torba yükleme, dorse besleme", "Big-bag aparatı, orta tonaj", "Saha giriş izni"],
                        ["Sevkiyat ve tartı", "Araç yükleme, dorse dizimi", "2,5 – 3 ton, sideshift", "Araç giriş ve tartı kaydı"],
                    ],
                },
            },
            {
                baslik: "Duruş ve bakım dönemleri: sahanın en yoğun elleçleme haftaları",
                paragraflar: [
                    "Proses tesislerinde planlı duruş dönemleri, üretimin durduğu ama sahanın en kalabalık olduğu haftalardır: bakım ekipleri, yüklenici firmalar, iskele malzemesi, yedek parça, katalizör ve ekipman aynı anda sahaya akar. Elleçleme ihtiyacı bu dönemde olağan seviyenin çok üzerine çıkar ve kiralık makine talebi de aynı takvimde yığılır. Duruş planlaması yapılırken forklift ihtiyacının haftalar öncesinden bağlanması, bölgedeki bütün tesislerin benzer takvimlerle çalıştığı düşünüldüğünde bir tercih değil zorunluluktur.",
                    "Duruşun ikinci özelliği, sahaya çok sayıda yüklenici personelin girmesidir. Saha trafiği yoğunlaşırken makine sayısı da arttığı için, duruş dönemi kaza istatistiğinin kabardığı dönemdir. Uyguladığımız pratik, duruş için verilen her makinenin rota ve park alanının önceden belirlenmesi ve operatörlerin duruş oryantasyonuna tesis ekibiyle birlikte alınmasıdır. Kalabalık sahada disiplin, makine özelliğinden daha belirleyicidir.",
                ],
            },
            {
                baslik: "Kiralık makinenin sahaya uygunluk dosyası",
                paragraflar: [
                    "Petrokimya sahasına makine vermek, anahtarı teslim etmekten ibaret değildir; makinenin bir uygunluk dosyasıyla gelmesi beklenir. Bu dosyada tipik olarak iş ekipmanları mevzuatı uyarınca yapılmış periyodik kontrol raporu, bakım kayıtları, varsa patlayıcı ortam uygunluk belgeleri, operatörün mesleki yeterlilik belgesi ve iş güvenliği eğitim kayıtları bulunur. Tesisin İSG birimi bu dosyayı giriş öncesinde inceler ve eksik evrak, makinenin kapıdan dönmesi anlamına gelir.",
                    "Dosyanın güncelliği de dönem içinde takip edilir: kiralama süresi periyodik kontrol tarihini aşıyorsa yenileme takvimi baştan planlanır. Uzun süreli sahalarda bunu kendi takvimimizde izler ve kontrol tarihinden önce yenileme yaparız; tesisin bu takibi hatırlatmak zorunda kalması, bizim tarafımızda bir eksikliktir. Sözleşme görüşmesinde dosya içeriğini kalem kalem gösterir, tesisin ek istediği belgeleri listeye ekleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamızda patlayıcı ortam bölgeleri var; standart forklift kesinlikle giremez mi?",
                cevap:
                    "Sınıflandırılmış bölgeye giremez — bu, esnetilebilecek bir uygulama değildir. Standart forklift, egzoz sıcaklığı, sıcak yüzeyleri ve kıvılcım üretebilen elektrik aksamıyla tutuşturucu kaynak niteliği taşır; yanıcı gaz veya buharın bulunabildiği bir alanda bu, doğrudan patlama riskidir. Bölgeye girecek makinenin patlayıcı ortama uygun sertifikalı olması gerekir ve bu koruma, mevcut makineye sonradan eklenen bir donanım değil, makinenin tasarım ve belgelendirme düzeyidir. Bölge dışındaki alanlarda standart makine sorunsuz çalışır. Doğru yaklaşım, tesisin patlamadan korunma dokümanındaki bölge haritasını birlikte incelemek ve işi sınırda bölmektir. Haritanızı paylaşın; hangi noktaya hangi sınıf makinenin gireceğini birlikte çizelim.",
            },
            {
                soru: "Sertifikalı makine maliyeti yüksek; işi bölmek gerçekten çalışır mı?",
                cevap:
                    "Çalışır ve sahalarda en yaygın uygulanan çözüm budur: yük, standart makineyle sınıflandırılmış bölgenin dışındaki tampon alana kadar getirilir, oradan içeri uygun donanımlı makineyle veya elleçleme gerektirmeyen yöntemlerle alınır. Böylece sertifikalı makine yalnız gerçekten gerekli olan kısa mesafede çalışır ve maliyet ciddi biçimde düşer. Modelin işlemesi için tampon alanın gerçekten tanımlı olması şarttır — fiziken işaretlenmiş, iki-üç yüklük tamponu olan, iki makinenin birbirini beklemeyeceği bir alan. Tampon yoksa iki makine aynı noktada buluşmak zorunda kalır ve kazanılan maliyet, kaybedilen zamana gider. Saha yerleşiminizi görelim; tampon alanı ve iş bölme noktasını yerinde belirleyelim.",
            },
            {
                soru: "Kimyasal ambarımızda varilleri çatalla taşıyoruz; bu ne kadar riskli?",
                cevap:
                    "Kabul edilebilir bir yöntem değil. Varil, silindirik gövdesi nedeniyle çatal üzerinde noktasal temasla durur; fren ve dönüşte yuvarlanmaya, kayarak düşmeye açıktır ve düşen bir kimyasal varilin sonucu, kırılan bir palet değil sızıntıdır. Doğru çözüm varil tutucu veya varil kelepçesidir; döndürme gerektiren boşaltma işlerinde döndürmeli varil ataşmanı kullanılır. IBC tanklarda ise paletli yapı çatala uygundur ama dolu tanktaki sıvı hareketi ağırlık merkezini taşıma sırasında oynattığı için hız düşürülür ve ani manevradan kaçınılır. Varil çapı, dolu ağırlığı ve taşıma yöntemini iletin; ataşman ve tonaj eşleşmesini kapasite payı bırakarak birlikte kuralım.",
            },
            {
                soru: "Kiralık makineyi sahaya sokarken hangi evrak isteniyor?",
                cevap:
                    "Tesisten tesise ayrıntısı değişse de omurga aynıdır: makinenin iş ekipmanları mevzuatı uyarınca yapılmış periyodik kontrol raporu, bakım kayıtları, sınıflandırılmış bölgeye girecekse patlayıcı ortam uygunluk belgeleri, operatörün mesleki yeterlilik belgesi ve iş güvenliği eğitim kayıtları. Bunlara tesisin kendi saha giriş izni ve oryantasyon kaydı eklenir. Bu dosyanın son dakikada toplanması, sahaya giriş gününün ertelenmesinin en yaygın nedenidir — ve kapıda bekleyen makinenin kirası işlemeye devam eder. Bu yüzden kiralamayı teslim tarihine değil evrak tarihine göre planlarız. Tesisinizin giriş kontrol listesini paylaşın; dosyayı teslimattan önce eksiksiz hazırlayalım.",
            },
            {
                soru: "Planlı duruş dönemimiz için ne kadar önceden makine ayırtmalıyız?",
                cevap:
                    "Duruş takvimi netleştiği anda — çünkü duruş, sahanın üretimi durmuş ama en kalabalık olduğu dönemidir ve elleçleme ihtiyacı olağan seviyenin belirgin üzerine çıkar. Bakım ekipleri, yüklenici firmalar, iskele malzemesi, yedek parça ve ekipman aynı haftalarda sahaya akar; üstelik bölgedeki tesisler benzer takvimlerle çalıştığı için makine talebi aynı günlere yığılır. Rezervasyonu duruş tarihine yakın bırakmak, hem sınıf hem sayı bakımından esnekliği yok eder. Ayrıca duruş için verilen makinelerin rota ve park alanlarının önceden belirlenmesini, operatörlerin duruş oryantasyonuna tesis ekibiyle birlikte alınmasını öneririz. Duruş kapsamınızı ve tahmini malzeme akışını paylaşın; makine planını duruş programına göre kuralım.",
            },
            {
                soru: "Sahada sızıntı olursa operatörümüz ne yapmalı?",
                cevap:
                    "Tek doğru refleks vardır ve öğretilmesi kolaydır: makineyi durdurmak, motoru kapatmak, alanı terk etmek ve durumu tesisin acil durum hattına bildirmek. Sızıntının üzerinden geçmek, dökülen yükü kaldırmaya çalışmak veya forkliftle temizlik yapmak, olayın büyüdüğü noktadır — yırtılan big-bag ya da delinen varil hem zemini kayganlaştırır hem ortamın buhar içeriğini değiştirir ve makine, o ortamda tutuşturucu kaynak hâline gelebilir. Operatörün bilmesi gereken şey kimyasalın kendisi değil, hangi anda dokunmayacağıdır. Bu refleks, teslimat günü verdiğimiz saha brifingine tesisinizin acil durum planı ve toplanma noktalarıyla birlikte işlenir; brifingi İSG biriminizle birlikte vermeyi tercih ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aliağa'nın petrokimya ve rafineri sanayisi barındırdığı kamuya açık bilgidir; patlayıcı ortam bölge sınıflandırması ve ekipman uygunluğu, iş ekipmanlarında periyodik kontrol zorunluluğu, tehlikeli madde ayrıştırma ilkesi ve izinli çalışma sistemi Türkiye mevzuatı ile sektör standardına dayanır; sınırda iş bölme, uygunluk dosyası ve duruş planlaması firma pratiğimizdir. Tesis adı, bölge numarası ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:cigli": {
        h1: "Çiğli'de Antrepo ve Kargo Terminali Forklifti: Atatürk OSB'den Liman Bağlantısına Elleçleme",
        giris:
            "Çiğli'nin lojistik yükü iki koldan beslenir: Atatürk OSB'nin üretim tesislerinden çıkan mamul, sevkiyat öncesi bölgedeki antrepo ve dağıtım depolarında toplanır; bu depoların bir kısmı da doğrudan liman ve kargo bağlantılı transit yük taşır — yani konteynerle gelen ithal hammadde önce burada mola verir, sonra üretime dağılır. Bu ikili yapı, forklift ihtiyacını sıradan bir üretim deposundan ayırır: aynı sahada hem standart palet trafiği hem konteyner boşaltma hem de dış nakliyeciye teslim edilecek ihracat yükü aynı anda döner. İyi kurulmuş bir Çiğli antreposunda bu üç akış birbirini beklemez; kötü kurulmuşta ise konteyner kapısı açık beklerken palet trafiği durur, ya da tersine sevkiyat kamyonu antrepo kapısında saatlerce sıraya girer. Bu sayfa, Atatürk OSB çevresindeki antrepo ve dağıtım merkezlerinin forklift kararlarını bu üç akışın kesişimi üzerinden ele alıyor: konteyner-antrepo geçiş noktası, transit yükün geçici elleçleme kuralları, çok kiracılı depo sahalarının makine paylaşımı ve OSB-liman arası nakliye penceresine göre planlama.",
        maddeler: [
            {
                baslik: "Konteynerden antrepoya geçiş: iki ayrı elleçleme rejiminin buluştuğu nokta",
                metin:
                    "İthal hammadde veya yarı mamul konteynerle gelip Çiğli'deki antrepoya boşaltıldığında, forklift iki farklı rejim arasında köprü kurar: kutunun içindeki yük konteyner elleçleme kurallarına (kısa şasili makine, tam serbest kaldırmalı mast, taban dayanımı) tabidir; antrepoya girdiği andan itibaren ise standart depo raf düzenine göre çalışılır. Bu geçişte sık yapılan hata, tek makineyle iki rejimi de karşılamaya çalışmaktır — konteyner içine giren kompakt makine, antrepoda yüksek raf istifi için yetersiz kalır; raf makinesi ise kutuya giremez. Verimli antrepolarda boşaltma noktası ile raf sahası arasında bir ara toplama alanı tanımlanır: konteyner makinesi yükü buraya bırakır, raf makinesi buradan devralır.",
            },
            {
                baslik: "Transit yük: antrepoda kalış süresi kısa, elleçleme kuralı sıkı",
                metin:
                    "Bölgedeki bazı antrepolar, yükü kalıcı stoklamaz; konteynerden inen malzeme birkaç gün içinde parçalara ayrılıp OSB içindeki üretim tesislerine dağıtılır. Bu transit modelde forklift operasyonunun önceliği stoklama değil hızlı ayrıştırmadır — gelen parti daha kapıdan girerken hangi üretim hattına gideceği belli olmalı, palet buna göre etiketlenmeli ve bekleme alanı, dağıtım sırasına göre önceden bölünmelidir. Ayrıştırma gecikirse antrepo, aslında geçici konaklama yeri olması gereken alanda kalıcı stok biriktirmeye başlar ve bu da hem yer hem forklift trafiğini tıkar. Transit ağırlıklı sahalarda makine sayısından çok, gelen partinin aynı gün dağıtılabilme hızı ölçülür.",
            },
            {
                baslik: "Çok kiracılı depo sahaları: makine kimin, sorumluluk nerede biter",
                metin:
                    "Çiğli'deki bazı antrepo ve lojistik merkezleri, tek bir firmanın değil birden fazla kiracının aynı çatı altında çalıştığı yapılardır. Bu düzende forklift ya kiracıya özel (kendi makinesi, kendi operatörü, kendi rampa penceresi) ya da ortak havuzdan paylaşımlıdır. Paylaşımlı modelde çatışma noktası bellidir — iki kiracının sevkiyatı aynı saate denk geldiğinde makine kimin işini önce yapacak? Bu soru işin ortasında değil, sözleşme aşamasında cevaplanmalıdır: rampa penceresi kiracı bazında önceden paylaştırılır ve makine, o pencerede yalnız o kiracıya çalışır. Ortak alan yönetiminin olmadığı paylaşımlı depolarda, forklift kiralaması genelde kiracı sayısı kadar ayrı sözleşmeye bölünür — bu, çatışmayı en baştan ortadan kaldırır.",
            },
            {
                baslik: "OSB-liman nakliye penceresi: kamyonun geldiği saate göre saha planı",
                metin:
                    "Atatürk OSB'den limana veya kargo terminaline giden nakliyenin kendi trafik penceresi vardır — şehir içi ağır vasıta kısıtları, liman giriş kuyruğu ve gümrük işlem saatleri, kamyonun hangi saatte yola çıkması gerektiğini dolaylı olarak belirler. Antrepo tarafında forklift planı bu pencereye göre geriye doğru kurulur: kamyon şu saatte çıkmak zorundaysa, yükleme şu saatte bitmeli, palet toplama ondan önce tamamlanmalıdır. Bu zincirin en sık kırıldığı yer, yükleme öncesi hazırlığın kamyon kapıya yanaşana kadar ertelenmesidir — o noktada forklift arama moduna geçer ve pencere kaçar. Sahaların çoğunda çözüm basittir: günün sevkiyat listesi sabah bloklanır, paletler kamyon gelmeden yükleme ağzına dizilir.",
            },
            {
                baslik: "Akülü-dizel ayrımı: kapalı antrepo ile açık rampa arasında sınır",
                metin:
                    "Çiğli'deki antrepoların çoğu kapalı hacimli yapılardır ve içeride egzozlu makine çalıştırmak emisyon nedeniyle uygun değildir — antrepo içi trafik akülü makinelerle yürütülür. Dış rampa, kamyon manevra alanı ve açık konteyner boşaltma sahası ise dizel sınıfın alanıdır; bozuk zemin toleransı ve kesintisiz çalışma isteyen bu bölgelerde akülünün şarj molası vermesi verim kaybı yaratır. İki bölge arasındaki geçiş noktası — antrepo kapısı — bir devir istasyonu gibi tasarlanmalıdır: dış makine yükü kapı önündeki tampon alana bırakır, iç makine oradan devralır. Bu ayrımı yapmayan sahalarda ya dizel makine antrepoya girer ya da akülü makine dış rampada güçsüz kalır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Antrepo akışında iş noktası — makine eşleşmesi",
                paragraflar: [
                    "Çiğli çevresindeki antrepo ve dağıtım sahalarında tipik iş noktaları ve uygun makine sınıfı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Nokta", "İş", "Makine", "Kritik ayrıntı"],
                    satirlar: [
                        ["Konteyner boşaltma", "Kutu içi elleçleme", "1,5 – 2,5 ton, kısa şasi", "Serbest kaldırmalı mast"],
                        ["Ara toplama alanı", "Konteynerden raf sahasına devir", "Akülü 2 ton", "Tampon alan tanımlı olmalı"],
                        ["Raf koridoru", "Standart palet istifi", "Akülü, koridor genişliğine göre", "Dar koridorda reach truck"],
                        ["Dış rampa / kapı", "Kamyon boşaltma-yükleme", "Dizel 2,5 – 3 ton", "İç-dış makine devir noktası"],
                        ["Sevkiyat ağzı", "İhracat/OSB içi dağıtım paleti", "Akülü, sideshift", "Nakliye penceresine göre hazırlık"],
                    ],
                },
            },
            {
                baslik: "Paylaşımlı antrepoda kiralama modeli: pencere ve sorumluluk yazılı olmalı",
                paragraflar: [
                    "Birden fazla kiracının aynı sahayı paylaştığı antrepolarda forklift kiralamasının en kırılgan noktası, sözlü anlayışa dayanan paylaşım düzenidir. İki kiracının yükü aynı saate denk geldiğinde 'kim önce' sorusu sahada değil sözleşmede cevaplanmış olmalıdır — her kiracıya sabit bir rampa penceresi ayrılır ve makine o pencerede yalnız o kiracıya hizmet eder. Ortak makine havuzu kullanılıyorsa, havuzun kaç makineden oluştuğu ve yoğun saatte önceliğin nasıl belirleneceği baştan yazılır.",
                    "Bu netlik, kiracılar arasındaki sürtünmeyi ortadan kaldırdığı gibi kiralayan firma için de öngörülebilirlik sağlar: hangi saatte kaç makinenin fiilen çalıştığı bilinir, filo büyüklüğü tahminle değil kayıtla belirlenir. Yeni kiracı sahaya girdiğinde pencere planı yeniden gözden geçirilir; büyüyen antrepoda bu gözden geçirme, sorunun büyümeden çözülmesinin tek yoludur.",
                ],
            },
            {
                baslik: "Nakliye penceresine göre geriye doğru planlama",
                paragraflar: [
                    "Atatürk OSB ile liman ve kargo terminali arasındaki nakliyenin kendi zaman kısıtları vardır ve antrepo tarafındaki forklift planı bu kısıtları veri olarak alır. Kamyonun yola çıkması gereken saat sabitse, yükleme bitiş saati ondan geriye, palet toplama başlangıcı ondan da geriye hesaplanır ve her adımın süresi gerçekçi tutulur — 'hızlı yaparız' varsayımı, plan yerine geçmez. Bu geriye doğru planlamanın en büyük kazancı, forkliftin kamyon kapıda beklerken değil kamyon gelmeden önce çalışmasıdır.",
                    "Planın günlük işlemesi için sevkiyat listesinin bir gün önceden antrepo ekibine ulaşması yeterlidir; liste geç gelirse bütün geriye doğru hesap çöker ve forklift yine arama-toplama moduna geri düşer. Bu, teknik değil iletişim meselesidir ve çoğu antrepoda düzeltilmesi en kolay noktadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Antrepomuza konteynerle gelen malzemeyi boşaltıp doğrudan rafa kaldırıyoruz; tek makineyle idare edilir mi?",
                cevap:
                    "Kısa vadede idare edilir ama verim kaybıyla: konteyner içine girecek makine kısa şasili, tam serbest kaldırmalı mastlı ve düşük tonajlı olmak zorundadır — bu profil yüksek raf istifinde yetersiz kalır. Tersine, raf istifine uygun makine konteynerin kapı yüksekliğine ve taban yüküne uygun değildir. İki işi tek makineyle yapan sahalarda genelde ya boşaltma yavaşlar ya istif verimsizleşir. Önerdiğimiz düzen, boşaltma noktası ile raf sahası arasına bir ara toplama alanı koymaktır: konteyner makinesi yükü oraya bırakır, raf makinesi devralır. Günlük konteyner hacminizi ve raf kotlarınızı paylaşın; tek makine mi iki makineli akış mı daha ekonomik, birlikte hesaplayalım.",
            },
            {
                soru: "Transit malzememiz antrepoda birkaç gün kalıyor ama bazen haftalarca kalıyor; bu sorun mu?",
                cevap:
                    "Transit modelin bozulduğunun işaretidir. Antrepo geçici konaklama için tasarlandıysa, partinin üretim hattına dağıtım hızı asıl performans göstergesidir; parti haftalarca beklerse antrepo fiilen kalıcı depoya dönüşür ve bu da hem yer hem forklift trafiğini tıkar — çünkü saha, dağıtılmayı bekleyen paletlerle dolar ve yeni gelen konteynerin boşaltılacak yeri kalmaz. Kök neden genelde dağıtım kararının gecikmesidir: parti hangi hatta gideceği belirlenmeden bekletiliyordur. Çözüm, partinin daha kapıdan girerken hedef hatla etiketlenmesi ve bekleme alanının dağıtım sırasına göre önceden bölünmesidir. Ortalama bekleme sürenizi ve dağıtım kararının kimde olduğunu paylaşın; süreci birlikte kısaltalım.",
            },
            {
                soru: "Depomuzda üç farklı kiracı var, forklift zamanlaması sürekli çakışıyor; nasıl düzenleriz?",
                cevap:
                    "Çakışma, paylaşımın sözlü anlayışa bırakılmasından doğar. Kalıcı çözüm, her kiracıya sabit bir rampa/yükleme penceresi tanımlamak ve makinenin o pencerede yalnız o kiracıya çalışmasıdır — bu düzen bir kez yazılı hâle geldiğinde 'kim önce' tartışması biter. Ortak makine havuzu kullanılacaksa havuzun büyüklüğü ve yoğun saatte önceliğin nasıl belirleneceği (örneğin rezervasyon sırasına göre) baştan tanımlanmalıdır. Üç kiracının tipik sevkiyat saatlerini paylaşın; çakışan pencereleri görüp ya zaman ayrımıyla ya ek makineyle çözüme kavuşturalım.",
            },
            {
                soru: "Kamyonlarımız liman kapanış saatine yetişemiyor, antrepoda gecikme mi var?",
                cevap:
                    "Büyük ihtimalle evet ve neden genelde yükleme hazırlığının kamyon kapıya gelene kadar ertelenmesidir. Doğru kurulum tam tersine işler: kamyonun yola çıkması gereken saat sabit alınır, yükleme bitiş saati ondan geriye hesaplanır, palet toplama süresi de ondan geriye — ve her adım kamyon gelmeden tamamlanmış olur. Bunun işlemesi için sevkiyat listesinin bir gün önceden antrepo ekibine ulaşması yeterlidir; liste geç gelirse geriye doğru hesabın tamamı çöker. Liman kapanış saatinizi ve mevcut yükleme başlangıç saatinizi paylaşın; aradaki farkı geriye doğru planla kapatalım.",
            },
            {
                soru: "Antrepomuzda hem dizel hem akülü forklift çalışıyor; ikisi aynı anda kapıdan geçebilir mi?",
                cevap:
                    "Geçebilir ama düzenli değilse verim kaybettirir. Doğru kurgu, kapıyı bir devir istasyonu olarak görmektir: dış rampa ve açık saha dizelin, antrepo içi akülünün alanıdır ve ikisi aynı yükü sırayla değil devirle taşır — dış makine yükü kapı önündeki tampon alana bırakır, iç makine oradan devralır. Bu ayrım yoksa ya dizel egzozlu hâliyle antrepoya girmeye çalışır ya da akülü dış rampada bozuk zemin ve mesafe karşısında yetersiz kalır. Kapı genişliğinizi ve tampon alan için ayırabileceğiniz metrekareyi paylaşın; devir noktasını birlikte kuralım.",
            },
            {
                soru: "Yeni bir kiracı daha alacağız, mevcut forklift planımız yetecek mi?",
                cevap:
                    "Bu, yeni kiracının sevkiyat profiline bağlıdır ve mevcut pencere planının yeniden gözden geçirilmesini gerektirir. İlk soru, yeni kiracının yoğun saatlerinin mevcut kiracılarla çakışıp çakışmadığıdır — çakışmıyorsa aynı filo, farklı bir pencereyle yeni kiracıyı karşılayabilir; çakışıyorsa ya ek makine ya da pencere yeniden dağıtımı gerekir. İkinci soru, yeni kiracının yük tipidir — konteyner trafiği getiriyorsa ara toplama alanı ve kısa şasili makine ihtiyacı yeniden hesaplanmalıdır. Yeni kiracının tahmini hacmini ve sevkiyat sıklığını paylaşın; mevcut filo planını büyümeden önce birlikte test edelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çiğli'nin Atatürk OSB ve liman bağlantılı lojistik yapısı kamuya açık bilgidir; konteyner elleçleme kuralları ve kapalı alanda emisyon kısıtı sektör standardıdır; paylaşımlı antrepo pencere modeli ve geriye doğru nakliye planlaması firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:foca": {
        h1: "Foça'da Küçük Ölçekli Forklift Kiralama: Turizm Tedariki ve Tarımsal Sevkiyatın Karma İhtiyacı",
        giris:
            "Foça'nın ekonomik dokusu, bölgedeki diğer sanayi ilçelerinden farklı bir forklift talebi üretir: burada büyük bir liman geri sahası veya ağır sanayi kompleksi yoktur; bunun yerine turizm sezonunun tedarik trafiği ile küçük ölçekli tarım ve zeytincilik işletmelerinin sevkiyatı iç içe geçer. Yaz aylarında otel ve tatil köylerinin gıda-içecek-malzeme tedariki artar, kısa mesafeli ama sık teslimat düzeni kurulur; zeytin ve bahçe ürünleri tarafında ise hasat dönemi kendi dönemsel yükünü getirir. İkisinin ortak paydası küçük hacim ve düzensiz taleptir — hiçbiri sabit bir depo forkliftini tam gün meşgul edecek büyüklükte değildir. Bu profil, Foça'daki forklift kiralamasını komşu sanayi ilçelerinden ayırır: burada soru 'kaç ton, kaç makine' değil, 'ne sıklıkla, ne kadar süreyle' sorusudur. Bu sayfa, küçük ölçekli işletmelerin — depo, market tedarik merkezi, küçük paketleme atölyesi, zeytinlik ve bahçe işletmesi — forklift ihtiyacını kısa süreli ve esnek kiralama mantığıyla ele alıyor.",
        maddeler: [
            {
                baslik: "Turizm tedarik zincirinin küçük hacimli, sık teslimatlı yapısı",
                metin:
                    "Otel ve tatil tesislerine mal ulaştıran tedarik depoları, büyük partiler değil sık ve küçük partiler taşır — içecek kasası, gıda paleti, mutfak malzemesi, tekstil sevkiyatı gibi kalemler günlük veya haftalık ritimle döner. Bu düzende forkliftin işi, tek seferde çok yük kaldırmak değil, kısa sürede çok sayıda küçük yükü araca yükleyip boşaltmaktır. Makine seçiminde tonajdan çok manevra kabiliyeti öne çıkar — dar sokak ve sınırlı yükleme alanına sahip depo cephelerinde küçük dönüş yarıçaplı, kompakt akülü makine büyük tonajlı dizelden daha kullanışlıdır. Sezon içinde teslimat sıklığı arttığında ihtiyaç makinenin büyümesi değil, çalışma saatinin uzamasıdır.",
            },
            {
                baslik: "Sezonluk tepe: yaz başlangıcında talep neden aniden sıçrar",
                metin:
                    "Turizm tedarikinde talep eğrisi keskindir: sezon açılışından önceki birkaç hafta, tesislerin depolarını doldurma dönemidir ve bu dönemde forklift ihtiyacı yıl ortalamasının kat kat üzerine çıkar. Sezon ortasında talep daha düzenli bir ritme oturur, sezon kapanışında ise stok boşaltma ve depo toparlama dönemiyle küçük bir ikinci tepe oluşur. Yıl boyu sabit bir makine tutmak, sezon dışındaki aylarda bu makineyi atıl bırakmak demektir; Foça ölçeğindeki işletmeler için doğru model, sezon açılışı öncesi kısa dönem kiralamayı erkenden bağlamaktır — bölgedeki bütün tedarik depoları aynı haftalarda hareketlendiği için geç kalan talep, müsait makine bulmakta zorlanır.",
            },
            {
                baslik: "Zeytin ve bahçe ürünleri: hasat dönemi elleçlemesi küçük ama yoğun",
                metin:
                    "Foça çevresindeki küçük ölçekli zeytinlik ve bahçe işletmelerinde hasat dönemi, kısa süreli ama yoğun bir elleçleme dalgası getirir: kasalar toplama noktasından araca, araçtan işleme veya depolama noktasına taşınır. İşletme ölçeği büyük sanayi tesisleri kadar olmadığı için burada ihtiyaç genelde tek bir orta boy makinedir, ama o makinenin hasat haftalarında günün büyük bölümünde çalışması beklenir. Kısa dönem kiralamanın küçük işletme için avantajı nettir — kendi makinesini alıp yılın onbir ayında atıl bırakmak yerine, hasat haftalarına özel makine tutmak, hem sermaye hem bakım yükünü ortadan kaldırır.",
            },
            {
                baslik: "Dar sahil yolları ve sınırlı depo cepheleri: manevra alanı makineyi belirler",
                metin:
                    "Foça'nın yerleşim dokusu, sahil kesiminde dar sokaklar ve sınırlı yükleme cepheleriyle şekillenir; büyük tonajlı bir forkliftin dönüş yarıçapı, bu sokaklarda ve küçük depo avlularında fiilen çalışamaz hâle gelebilir. Bu yüzden bölgedeki küçük ölçekli kiralamalarda ilk soru kapasiteden çok saha ölçüsüdür — depo kapısının genişliği, avlunun dönüş alanı, kamyonun yanaşabileceği mesafe. Kompakt sınıf makineler, hem dar alanda hem de tarihi doku içindeki cadde sınırlamalarında (bazı bölgelerde araç giriş kısıtı olabilir) daha esnek çözüm sunar. Saha ölçüleri netleşmeden yapılan makine teklifi, sahaya sığmama riskiyle geri döner.",
            },
            {
                baslik: "Kısa süreli ve tek seferlik ihtiyaçlar: taşınma, etkinlik, stok sayımı",
                metin:
                    "Küçük ölçekli işletme ve tedarik depolarının forklift ihtiyacı her zaman düzenli bir sevkiyat ritmine bağlı değildir; depo taşınması, mevsim sonu stok sayımı, bir etkinlik veya festival için geçici kurulum-söküm gibi tek seferlik işler de bölgede sık görülür. Bu tip işlerde günlük veya birkaç günlük kısa dönem kiralama, satın almanın veya uzun sözleşmenin yerini alır ve genelde operatörlü modelle çalışılır — küçük işletmenin kendi belgeli operatörü olmadığı durumlarda makineyle birlikte operatör gelmesi, işin tek seferlik doğasına en uygun çözümdür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük ölçekli ihtiyaç profili ve kiralama süresi eşleşmesi",
                paragraflar: [
                    "Foça çevresindeki tipik küçük ölçekli işletme profilleri ve bunlara uygun kiralama süresi aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Yük profili", "Makine sınıfı", "Tipik kiralama süresi"],
                    satirlar: [
                        ["Turizm tedarik deposu", "Küçük hacimli, sık teslimat", "Akülü 1,5 – 2 ton, kompakt", "Sezonluk (haftalar-aylar)"],
                        ["Market/gıda tedarik merkezi", "Palet, koli, kasa", "Akülü 1,5 – 2 ton", "Uzun dönem veya sezonluk"],
                        ["Zeytinlik / bahçe işletmesi", "Kasa, dökme sandık", "Orta tonaj, açık saha uyumlu", "Hasat haftaları (kısa dönem)"],
                        ["Küçük paketleme atölyesi", "Karışık palet", "Akülü, kompakt", "Uzun dönem düşük yoğunluklu"],
                        ["Tek seferlik iş", "Taşınma, kurulum-söküm", "İşe göre değişken", "Günlük / birkaç gün"],
                    ],
                },
            },
            {
                baslik: "Sezon öncesi rezervasyon: erken bağlamak neden fiyat değil müsaitlik meselesidir",
                paragraflar: [
                    "Foça'da forklift talebinin sezonsallığı, komşu sanayi ilçelerinden farklı bir dinamik yaratır: burada talep bir üretim takviminden değil turizm ve hasat takviminden gelir, ama sonuç aynıdır — bölgedeki bütün işletmeler benzer haftalarda harekete geçer. Sezon açılışına yakın günlerde talep edilen makine, müsaitlik sıkıntısıyla karşılaşabilir; bu yüzden küçük işletmeler için de erken rezervasyon, büyük sanayi tesisleri kadar önemlidir. Sezon takviminizin netleştiği an — genelde birkaç ay öncesinden tahmin edilebilir — rezervasyonun bağlanacağı andır.",
                    "Erken rezervasyonun ikinci faydası, makinenin işe uygun donanımla (varsa özel ataşman, uygun lastik) hazırlanabilmesidir. Son dakika taleplerinde müsait olan makine her zaman en uygun donanımlı makine olmayabilir.",
                ],
            },
            {
                baslik: "Operatörsüz küçük işletme için pratik çözüm: operatörlü kiralama",
                paragraflar: [
                    "Küçük ölçekli işletmelerin çoğunda forklift kullanımı süreklilik arz etmez ve bu yüzden kendi bünyesinde belgeli operatör bulundurmak ekonomik olmayabilir. Bu durumda operatörlü kiralama — makineyle birlikte MYK belgeli operatörün gelmesi — hem yasal zorunluluğu karşılar hem de işletmenin personel eğitim yükünü ortadan kaldırır. Tek seferlik veya sezonluk kısa işlerde bu model neredeyse standarttır; iş bitince ilişki makineyle birlikte kapanır ve işletme yıl boyu forklift operatörü istihdam etmek zorunda kalmaz.",
                    "Sürekli, düşük yoğunluklu bir ihtiyacı olan işletmeler için ise (örneğin haftada birkaç gün çalışan küçük bir tedarik deposu) kendi personelinden birine operatörlük belgesi kazandırmak, uzun vadede daha ekonomik olabilir. Hangi modelin uygun olduğu, işin yıllık toplam forklift saatine bakılarak birlikte hesaplanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otel tedarik depomuz sadece yaz aylarında yoğun çalışıyor; yıl boyu makine tutmak zorunda mıyız?",
                cevap:
                    "Hayır ve çoğu benzer profildeki işletme için doğru olan da bu değildir. Turizm tedarikinde talep eğrisi keskin bir sezonsallık gösterir — sezon açılışı öncesi birkaç hafta yoğun, sezon ortası düzenli, sezon dışı ise çok düşük. Yıl boyu sabit makine tutmak, sezon dışındaki aylarda atıl kapasite ödemek demektir. Doğru model, sezon açılışına yakın kısa-orta dönem kiralamayı erken bağlamaktır; bölgedeki bütün tedarik depoları benzer haftalarda hareketlendiği için geç kalan talep müsaitlik sorunuyla karşılaşabilir. Sezon takviminizi ve tahmini yoğun haftalarınızı paylaşın; kiralama süresini ve makine sınıfını birlikte netleştirelim.",
            },
            {
                soru: "Depomuzun kapısı ve avlusu dar; büyük forklift giremeyeceğini düşünüyoruz. Ne önerirsiniz?",
                cevap:
                    "Haklı bir endişe — Foça'nın sahil kesimindeki dar sokak ve sınırlı depo cepheleri, büyük tonajlı makinenin dönüş yarıçapını fiilen çalışamaz hâle getirebilir. Bu profildeki sahalarda ilk soru kapasiteden çok manevra alanıdır: kapı genişliği, avlunun dönüş çapı ve kamyonun yanaşabileceği mesafe. Kompakt sınıf akülü makineler, hem dar alanlarda hem de tarihi doku içindeki olası araç kısıtlarında daha esnek çalışır ve çoğu küçük ölçekli işletmenin yük profili zaten bu sınıfın kapasitesini aşmaz. Depo kapı ölçülerinizi ve avlu fotoğraflarınızı paylaşın; sahaya sığacak makineyi birlikte belirleyelim.",
            },
            {
                soru: "Zeytin hasadımız üç hafta sürüyor; bu kısa süre için kiralama mantıklı mı, yoksa kendi makinemizi mi almalıyız?",
                cevap:
                    "Üç haftalık bir kullanım için kiralama neredeyse her senaryoda daha ekonomiktir. Kendi makinenizi almak, satın alma bedelinin yanında yılın kalan kırk dokuz haftasında atıl bekleme, bakım ve muhafaza maliyetini de üstlenmek demektir. Kiralamada bu kalemler düşer — makine hasat başında gelir, hasat bitince iade edilir ve işletmenizin bilançosunda demirbaş değil dönemsel gider görünür. Kendi makinenizi almak ancak forkliftin yıl boyu başka işlerde de (bahçe bakımı, malzeme taşıma) düzenli kullanılacağı durumda anlam kazanır. Hasat takviminizi ve günlük kasa hacminizi paylaşın; üç haftalık kiralama planını birlikte çıkaralım.",
            },
            {
                soru: "Depo taşınması için bir günlüğüne forklift lazım; bu kadar kısa süre için kiralama yapılıyor mu?",
                cevap:
                    "Yapılıyor ve bu tip tek seferlik işler bölgede sık görülüyor — depo taşınması, etkinlik kurulum-sökümü, stok sayımı gibi. Günlük kiralamada genelde operatörlü model tercih edilir: işletmenin kendi belgeli operatörü olmadığı durumlarda makineyle birlikte operatör gelmesi, hem yasal zorunluluğu karşılar hem de bir günlük iş için personel eğitme derdini ortadan kaldırır. Taşınacak yükün ölçüsünü, mesafeyi ve varsa dar geçiş noktalarını (asansör, dar koridor, kapı yüksekliği) önceden bildirin; doğru boyutta makineyi ve operatörü o güne göre planlayalım.",
            },
            {
                soru: "Sezon başında talep ettiğimizde makine bulamama riski var mı?",
                cevap:
                    "Var, çünkü Foça'daki forklift talebi keskin bir sezonsallık taşır ve bölgedeki bütün turizm tedarik depoları ile tarım işletmeleri benzer haftalarda harekete geçer. Sezon açılışına çok yakın yapılan talepler, müsait makine bulmakta zorlanabilir — özellikle belirli bir ataşman veya donanım gerekiyorsa. Bunun tek çözümü erken rezervasyondur: sezon takviminiz netleştiği an, genelde birkaç ay öncesinden, kiralamayı bağlamak hem müsaitliği garantiler hem de makinenin işinize uygun donanımla hazırlanmasına zaman tanır. Geçen yılki sezon yoğunluk tarihlerinizi hatırlıyorsanız paylaşın; bu yılın rezervasyonunu ona göre erken planlayalım.",
            },
            {
                soru: "Küçük işletmemizde forklift kullanımı haftada birkaç güne düşüyor; kendi operatörümüzü mü eğitmeliyiz, her seferinde operatörlü mü kiralamalıyız?",
                cevap:
                    "Bu, yıllık toplam forklift saatinize bağlı bir hesaptır. Kullanım gerçekten seyrekse (haftada bir-iki gün, birkaç saat) operatörlü kiralama genelde daha ekonomiktir — kendi personelinize belge kazandırmanın eğitim maliyeti ve süresi, düşük kullanım sıklığıyla karşılanamayabilir. Kullanım haftanın çoğu gününe yayılıyorsa ise kendi personelinizden birine MYK belgesi kazandırmak, tekrarlanan operatörlü kiralama maliyetinin altında kalır ve süreklilik sağlar. Haftalık ortalama forklift kullanım saatinizi paylaşın; iki modelin yıllık maliyetini birlikte karşılaştıralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Foça'nın turizm ve tarım ağırlıklı ekonomik profili kamuya açık bilgidir; operatör belgesi zorunluluğu Türkiye mevzuatına dayanır; sezonluk kiralama ekonomisi ve dar saha manevra değerlendirmesi firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:menemen-cevre-ilce": {
        h1: "Menemen ve Çevre İlçelerde Forklift Kiralama: Ova Lojistiğinden Liman Bağlantısına",
        giris:
            "Menemen ve çevresindeki ilçeler, İzmir'in liman ve hava kargo omurgasına doğrudan bağlı olmayan ama onunla sürekli alışveriş hâlindeki bir ara bölge oluşturur: ovanın tarım-gıda işleme tesisleri, karayolu boyunca dizilen küçük-orta ölçekli üretim ve depolama tesisleri, buradan çıkan malı hem yerel pazara hem de Aliağa limanına ya da Gaziemir'deki hava kargo terminaline taşır. Bu bölgenin forklift ihtiyacı, tek bir sektörün değil bu geçiş rolünün ürünüdür: bir yandan sahanın kendi içindeki standart depo ve üretim elleçlemesi, öte yandan dışarıya çıkan yükün liman veya terminal standartlarına uygun hazırlanması. Bir palet limana konteynerle gidecekse, Menemen'deki depoda o konteynerin ölçüsüne göre paletlenmesi ve yüklenmesi gerekir; hava kargoya gidecek bir gönderi ise ağırlık-hacim dengesine göre hazırlanmalıdır. Bu sayfa, çevre ilçelerdeki depo ve üretim tesislerinin forklift kararlarını bu bağlantı rolü üzerinden ele alıyor: yerel elleçleme ile liman-terminal hazırlığı arasındaki fark, karayolu nakliyesine göre yükleme disiplini ve bölgenin dağınık saha yapısında filo planlaması.",
        maddeler: [
            {
                baslik: "İki hedefli yük: yerel dağıtım ile liman-terminal sevkiyatı aynı depodan çıkar",
                metin:
                    "Menemen çevresindeki birçok tesis, ürettiği veya işlediği malı iki ayrı kanala gönderir — bir kısmı bölge içi ve yurt içi dağıtıma, bir kısmı ihracat kanalıyla limana veya hava kargoya gider. Bu ikilik, forklift operasyonunda tek bir standart yerine iki ayrı hazırlık kuralı gerektirir: yurt içi paletler standart palet ve dorse ölçülerine göre hazırlanırken, ihracat yükü konteyner iç ölçüsüne veya hava kargonun ağırlık-hacim tarifesine göre paletlenir. Aynı depoda iki farklı paletleme standardının karışması, sevkiyat gününde en çok zaman kaybettiren hatadır — yanlış ölçüde paketlenmiş yük konteynere sığmaz veya hava kargoda gereksiz yere ağır ücretlendirilir. Depo içinde iki hedefin ayrı alanlarda hazırlanması, bu karışıklığı baştan önler.",
            },
            {
                baslik: "Konteynere gidecek yükün depo içi hazırlığı: paletleme kutunun ölçüsüne göre yapılır",
                metin:
                    "Bir standart konteynerin iç genişliği ve yüksekliği, palet ölçüsü ve istif düzenini doğrudan sınırlar; bu sınır depoda değil sahada fark edilirse, ya yük yeniden paletlenir ya da konteyner boş alanla gönderilir — ikisi de kayıptır. Menemen'deki tesislerde ihracat yükü hazırlanırken forklift operatörünün bildiği bir kural vardır: istif yüksekliği, konteynerin iç yüksekliğinden pay bırakılarak belirlenir ve palet tabanı, kutunun genişliğine göre önceden hesaplanmış ölçüde kurulur. Bu hazırlığın depo içinde, konteyner sahaya gelmeden önce tamamlanması, yükleme gününde forkliftin konteyner önünde beklemeden çalışmasını sağlar.",
            },
            {
                baslik: "Karayolu nakliyesi ve dorse yükleme disiplini",
                metin:
                    "Bölgedeki tesislerin büyük kısmı, limana veya terminale kendi aracıyla değil nakliyeci dorsesiyle bağlanır ve bu, yükleme disiplinini karayolu taşımacılığı kurallarına tabi kılar: yük dorse boyunca dengeli dağıtılır, dingil yük sınırları gözetilir ve yük bağlama-sabitleme, forklift işinin bir parçası olarak sayılır — paleti dorseye koymak, işin yarısıdır; bağlamak diğer yarısıdır. Yükleme sırası da önemlidir; limana veya terminale zamanında yetişecek dorse, forkliftin doğru sırayla, bekletmeden yüklediği dorsedir. Sabah erken çıkması gereken bir dorse için yükleme, önceki akşamdan bloklanan bir sevkiyat listesiyle hazırlanmalıdır.",
            },
            {
                baslik: "Dağınık saha yapısı: tek büyük tesis değil, karayolu boyunca dizilen küçük-orta ölçekli tesisler",
                metin:
                    "Menemen ve çevresindeki sanayi dokusu, tek bir büyük OSB'de yoğunlaşmak yerine karayolu boyunca dağılmış küçük-orta ölçekli tesislerden oluşur. Bu dağınıklık, forklift kiralamasına kendine özgü bir mantık getirir: her tesisin kendi makinesini tam gün doldurması genelde mümkün değildir, ama tesisler arası mesafe de bir makinenin günde birkaç tesise hizmet vermesini pratik kılmayabilir. Bu ortamda esnek kısa-orta dönem kiralama, sabit filo yatırımından daha uygun bir model olarak öne çıkar — tesis ihtiyacına göre makine süresi ayarlanır ve iş hacmi büyüdükçe kiralama kademeli olarak uzun döneme çevrilir.",
            },
            {
                baslik: "Gecikme maliyeti: liman ve terminal randevusu kaçtığında",
                metin:
                    "Menemen'deki bir depodan çıkan yükün limana veya kargo terminaline zamanında ulaşmaması, sadece bir günlük gecikme değildir — liman rıhtım programı ve gemi yükleme sırası, hava kargoda ise uçuş programı belirli randevu pencerelerine bağlıdır ve kaçan pencere genelde bir sonraki müsait sefere kadar beklemek anlamına gelir. Depo içindeki forklift gecikmesi bu yüzden zincirin en sonunda büyür: sahada yarım saat kaybedilen bir yükleme, limanda veya terminalde günler süren bir gecikmeye dönüşebilir. Bu nedenle liman veya terminal bağlantılı sevkiyat yapan tesislerde forklift planlaması, sadece o günün işini değil bağlantılı olduğu nakliye ve liman-terminal takvimini de hesaba katar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki hedefli sevkiyatta depo içi hazırlık ayrımı",
                paragraflar: [
                    "Aşağıdaki tablo, yerel dağıtım ile liman-terminal bağlantılı sevkiyatın depo içi hazırlık farklarını özetler.",
                ],
                tablo: {
                    basliklar: ["Hedef", "Paletleme standardı", "Kritik ölçü", "Forklift önceliği"],
                    satirlar: [
                        ["Yurt içi / bölge dağıtımı", "Standart palet, dorse yerleşimi", "Dingil yükü dengesi", "Sıralı yükleme, hızlı çevrim"],
                        ["Liman / konteyner ihracatı", "Konteyner iç ölçüsüne göre", "İstif yüksekliği payı", "Konteyner önünde bekletmeden yükleme"],
                        ["Hava kargo", "Ağırlık-hacim dengesine göre", "Hacimsel ağırlık oranı", "Randevu penceresine göre hazırlık"],
                        ["Serbest bölge / gümrüklü", "Belgeli, adresli istif", "İzlenebilirlik kaydı", "Kayıt ile eşleşen kaldırma"],
                    ],
                },
            },
            {
                baslik: "Dağınık sahada kiralama modeli: kademeli büyüme",
                paragraflar: [
                    "Karayolu boyunca dizilen küçük-orta ölçekli tesislerin çoğu, iş hacmi büyüdükçe forklift ihtiyacını aşamalı olarak artırır. Başlangıçta günlük veya haftalık kısa dönem kiralama, dalgalı ve henüz oturmamış talebi karşılar; iş hacmi düzene oturdukça aylık, sonra yıllık sözleşmeye geçilir. Bu kademeli model, tesisin sermayesini erken bir makine yatırımına bağlamadan büyümesine imkân tanır ve talep beklenenden düşük çıkarsa geri adım atmak da kolaydır — kısa dönem sözleşme basitçe uzatılmaz.",
                    "Bu modelin işlemesi için tek şart, tesisin kendi hacim artışını düzenli izlemesidir: aylık sevkiyat sayısı ve ortalama palet miktarı takip edildiğinde, hangi ayda kiralama süresinin bir kademe yukarı çıkarılacağı veriyle görülür, tahminle değil.",
                ],
            },
            {
                baslik: "Liman-terminal randevusuna göre geriye doğru sevkiyat planı",
                paragraflar: [
                    "Liman veya hava kargo bağlantılı sevkiyat yapan tesislerde forklift planının başlangıç noktası, o günün işi değil bağlı olduğu randevudur. Gemi yükleme sırası veya uçuş kargo kabul saati sabitse, dorsenin yola çıkması gereken saat ondan geriye, depodaki yükleme bitiş saati ondan geriye, palet hazırlığının başlangıcı da ondan geriye hesaplanır. Bu geriye doğru zincirin her halkasına gerçekçi bir süre payı bırakılması, trafik veya küçük bir gecikmenin bütün planı çökertmemesini sağlar.",
                    "Bu planlamanın en sık kırıldığı nokta, hazırlığın 'dorse geldiğinde başlarız' anlayışıyla ertelenmesidir. Sevkiyat listesinin bir gün önceden depo ekibine ulaşması ve palet hazırlığının dorse gelmeden tamamlanmış olması, randevuyu kaçırmamanın en basit ve en etkili önlemidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzdan hem yurt içine hem ihracata mal çıkıyor; aynı forklift ve aynı düzenle mi çalışmalıyız?",
                cevap:
                    "Makine aynı kalabilir ama paletleme standardı ayrılmalıdır. Yurt içi sevkiyat standart palet ve dorse ölçülerine göre hazırlanırken, ihracat yükü konteynerin iç ölçüsüne veya hava kargonun ağırlık-hacim dengesine göre paletlenmelidir; bu iki standardın depo içinde karışması, sevkiyat gününde en sık yaşanan gecikme nedenidir — yanlış ölçüde hazırlanmış yük konteynere sığmaz veya hava kargoda fazla ücretlendirilir. Depo içinde iki hedefin ayrı bir bölgede, ayrı paletleme kurallarıyla hazırlanması bu karışıklığı önler. Hangi oranda yurt içi, hangi oranda ihracat sevkiyatı yaptığınızı paylaşın; depo yerleşimini bu ayrıma göre birlikte gözden geçirelim.",
            },
            {
                soru: "Konteynere yüklediğimiz paletler bazen sığmıyor, boş alan kalıyor; sorun nerede?",
                cevap:
                    "Sorun neredeyse her zaman paletlemenin konteyner sahaya gelmeden önce, kutunun ölçüsüne göre yapılmamasındandır. Standart bir konteynerin iç genişliği ve yüksekliği palet ölçüsünü ve istif düzenini doğrudan sınırlar; bu sınır depoda hesaba katılmazsa saha da fark edilir ve ya yeniden paletleme yapılır ya da konteyner eksik doldurulmuş gönderilir. Doğru yöntem, istif yüksekliğini konteynerin iç yüksekliğinden pay bırakarak önceden belirlemek ve palet tabanını kutunun genişliğine göre kurmaktır — bu hesap konteyner kapıya gelmeden, depo içinde tamamlanır. Kullandığınız konteyner tipini ve tipik palet ölçülerinizi paylaşın; istif planını birlikte önceden çıkaralım.",
            },
            {
                soru: "Dorse sabah erken çıkmak zorunda ama yükleme her seferinde gecikiyor; neden?",
                cevap:
                    "Genelde nedeni, yükleme hazırlığının dorse kapıya yanaşana kadar başlamamasıdır. Doğru düzen tam tersidir: dorsenin çıkış saati sabit alınır, yükleme bitiş saati ondan geriye, palet hazırlığının başlangıcı ondan da geriye hesaplanır — yani forklift, dorse gelmeden önce paletleri yükleme ağzına dizmiş olur. Bunun işlemesi için sevkiyat listesinin bir gün önceden depo ekibine ulaşması yeterlidir; liste sabah geldiğinde geriye doğru hesap için zaman kalmaz ve gecikme kronikleşir. Mevcut dorse çıkış saatinizi ve şu anki yükleme başlangıç saatinizi paylaşın; geriye doğru planı birlikte kuralım.",
            },
            {
                soru: "Tesisimiz küçük, forklifti tam gün dolduramıyoruz ama komşu tesisle paylaşmak da pratik değil; ne öneriyorsunuz?",
                cevap:
                    "Bölgenin dağınık saha yapısında bu, sık karşılaşılan bir durumdur ve çözüm genelde makine paylaşımı değil, kiralama süresinin iş hacmine göre esnetilmesidir. İş hacminiz dalgalıysa günlük veya haftalık kısa dönem kiralama, sabit bir makineyi atıl bırakmadan ihtiyacı karşılar; hacim düzene oturdukça aylık, sonra yıllık sözleşmeye kademeli geçiş yapılır. Bu model, sermayenizi erken bir makine yatırımına bağlamadan büyümenize imkân tanır. Aylık ortalama sevkiyat sayınızı ve forklift kullanım saatinizi paylaşın; hangi kademede olduğunuzu birlikte değerlendirelim.",
            },
            {
                soru: "Limana gönderdiğimiz bir sevkiyat rıhtım programını kaçırdı, günler bekledi; bunu nasıl önleriz?",
                cevap:
                    "Kaçan randevunun bedeli genelde depo içindeki küçük bir gecikmenin zincirin sonunda büyümesidir — gemi yükleme sırası belirli pencerelere bağlıdır ve kaçan pencere bir sonraki müsait sefere kadar beklemek demektir. Önlem, forklift planını o günün işi değil bağlı olduğu liman randevusu üzerinden geriye doğru kurmaktır: dorsenin liman kapısına ulaşması gereken saat sabitlenir, oradan geriye doğru yola çıkış, yükleme bitişi ve palet hazırlığı saatleri hesaplanır ve her adıma gerçekçi pay bırakılır. Son sevkiyatınızda hangi adımda gecikme yaşandığını (hazırlık, yükleme, yola çıkış) paylaşın; zincirin zayıf halkasını birlikte tespit edip düzeltelim.",
            },
            {
                soru: "Hava kargoya gönderdiğimiz bir parti beklenenden çok ücretlendirildi; forklift veya paletlemeyle ilgisi olabilir mi?",
                cevap:
                    "Olabilir ve sık karşılaşılan bir nedeni var: hava taşımacılığında ücretlendirme çoğu zaman gerçek ağırlık değil hacimsel ağırlık üzerinden yapılır — yani gönderinin kapladığı hacim, ağırlığından bağımsız olarak maliyeti belirler. Depoda paletleme yapılırken gereksiz boşluk bırakılması veya palet üzerinde yükün verimsiz istiflenmesi, hacmi büyütüp maliyeti artırır. Paletleme sırasında yükün hacmini sıkılaştırmak — boşluğu azaltmak, istifi yükün gerçek ölçüsüne göre kurmak — bu maliyeti doğrudan düşürür. Son sevkiyatınızın palet ölçülerini ve içeriğini paylaşın; hacim-ağırlık dengesini birlikte gözden geçirelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Menemen ve çevresinin tarım-gıda ağırlıklı sanayi dokusu ile İzmir'in liman-hava kargo altyapısına yakınlığı kamuya açık bilgidir; konteyner iç ölçü kısıtı, dorse dingil yükü dengesi ve hava kargoda hacimsel ağırlık uygulaması sektör standardı bilgilerdir; kademeli kiralama modeli ve geriye doğru sevkiyat planlaması firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    // ── HİZMET SAYFALARI (11 sabit slug, src/lib/hizmet-konulari.ts) ────
    // Yazım: 2026-08-14. Domain açısı korunmuştur: liman geri sahası, gümrüklü
    // antrepo, hava kargo terminali. forklift-istifleme-kiralama ve
    // nakliye-teslimat-hizmeti en detaylı işlenen iki sayfadır — domainin
    // çekirdek işi. Kişi taşıma platformu gerektiren hizmetlerde (sepetli-
    // örümcek, eklemli-platform-boom, enerji-aydınlatma bakımı) kapsam dışı
    // olduğu dürüstçe belirtilmiştir; forklift filosunun malzeme taşıma rolüyle
    // kesiştiği ölçüde (çelik konstrüksiyon, tarım-silo) kısmi/yönlendirmeli
    // içerik yazılmıştır.

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Forklift Teslimatı: Liman Kapısı, Gümrüklü Saha ve Hava Kargo Terminali Erişimi",
        giris:
            "İzmir'in liman ve hava kargo çevresinde forklift teslimatının asıl zorluğu yol üzerinde değil, teslim noktasının kendisindedir — çünkü hedef nokta çoğunlukla açık bir depo avlusu değil, kendi giriş kuralı olan kontrollü bir sahadır. Liman geri sahasına giren her taşıyıcı önce kapı kaydından geçer; gümrüklü antrepoya veya serbest bölgeye makine sokmak, malın kendisi değilse de sahanın güvenlik ve kayıt disiplinine tabidir; hava kargo terminalinde ise apron ile terminal içi arasındaki sınır kesin ve makinenin bu sınırı hiçbir koşulda geçmemesi gerekir. Bu üç ortamın ortak noktası, teslimatın taşıyıcı seçimiyle bitmediğidir — asıl iş, makinenin doğru kapıdan, doğru izinle ve sahanın kendi trafiğini bozmadan içeri girmesini planlamaktır. Bu sayfa, forkliftin İzmir'deki liman, gümrük ve hava kargo sahalarına nasıl teslim edildiğini, hangi sahada hangi erişim kısıtının geçerli olduğunu ve teslim anında hangi kayıtların tutulduğunu anlatır; nakliye burada bağımsız bir lojistik değil, doğru makinenin kontrollü bir sahaya güvenle girmesinin son adımıdır.",
        maddeler: [
            {
                baslik: "Liman geri sahasına giriş, kendi kapı kaydından geçer",
                metin: "Liman geri sahasına giren her ağır taşıyıcı, sahanın kendi güvenlik ve giriş kayıt sürecine tabidir; plaka, sürücü ve yük bilgisinin önceden bildirilmemesi kapıda beklenmedik bir gecikmeye yol açar. Forklift teslimatını planlarken bu kaydı bağımsız bir adım olarak ele alır, taşıyıcı bilgisini sahanın kural setine göre önceden iletiriz. Kapı yoğunluğunun tahmin edilebilir olduğu saatler (vardiya değişimi, gemi yanaşma sonrası) teslimat penceresinden bilinçli olarak dışarıda tutulur.",
            },
            {
                baslik: "Gümrüklü antrepo ve serbest bölgeye makine sokmak ayrı bir konudur",
                metin: "Forklift, gümrüklü sahaya giren bir mal değildir; ancak sahanın fiziksel güvenlik ve kayıt kuralı makineler için de geçerlidir — özellikle serbest bölge girişlerinde araç ve ekipman kaydı, malzeme kaydından ayrı işletilir. Teslimat öncesi bu ayrımı netleştirir, makinenin hangi kayıt altında sahaya alınacağını sahanın yetkilisiyle teyit ederiz. Bu adım atlanırsa makine kapıda beklerken sahanın kendi malzeme kabul kuyruğu da gecikir.",
            },
            {
                baslik: "Hava kargo terminalinde apron sınırı kesindir",
                metin: "Hava kargo terminaline teslim edilen forklift, terminal içi ve rampa çevresiyle sınırlıdır; uçağın bulunduğu apron alanına giriş ayrı bir yetki ve eğitim gerektirir ve bu sayfanın kapsamı dışındadır. Teslimat planlarken makinenin çalışacağı alanın apron sınırının hangi tarafında kaldığı önceden netleştirilir; sınırın belirsiz olduğu durumlarda terminal yetkilisinin onayı olmadan teslimat tamamlanmaz.",
            },
            {
                baslik: "Saha içi erişim: dar geçit, rampa ve kontrol noktaları",
                metin: "Liman geri sahası ve gümrüklü antrepolar genellikle birden fazla iç kontrol noktasından oluşur — geri saha girişi, antrepo kapısı, tartı noktası gibi. Taşıyıcının bu noktaların her birinden geçebilecek boyutta olması, teslimat rotası çizilirken kontrol edilir. Rampa eğimi ve zemin taşıma kapasitesi, özellikle ağır tonajlı makinelerin gümrüklü saha içine indirilmesinde ayrıca doğrulanır; sahaya özgü bir kısıt varsa taşıyıcı ona göre değiştirilir.",
            },
            {
                baslik: "Teslim anında kontrol, saha kaydıyla birlikte tutulur",
                metin: "Forklift sahaya ulaştığında yakıt veya enerji seviyesi, görünür hasar, takılı ataşman ve saat sayacı birlikte kontrol edilir; gümrüklü veya liman sahalarında bu kayıt, sahanın kendi giriş kaydıyla da eşleştirilir — böylece makinenin hangi tarihte, hangi izinle sahaya girdiği hem bizim hem sahanın kayıtlarında aynı anda görünür. Kontrol tamamlanmadan makine teslim edilmiş sayılmaz; eksik veya hasar tespit edilirse sahaya girmeden çözülür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Teslim noktası tipine göre erişim şartı ve kritik kontrol",
                paragraflar: [
                    "Aşağıdaki tablo, İzmir'in liman ve hava kargo çevresindeki dört farklı teslim noktası tipini ve her birinde teslimattan önce netleştirilmesi gereken erişim şartını özetler. Sahaya özgü kesin kural, ilgili işletmenin güvenlik biriminden ayrıca teyit edilir.",
                ],
                tablo: {
                    basliklar: ["Teslim noktası", "Erişim şartı", "Kritik kontrol", "Sık yapılan hata"],
                    satirlar: [
                        ["Liman geri sahası", "Kapı kaydı, plaka bildirimi", "Vardiya/gemi yanaşma yoğunluğu", "Bildirimsiz taşıyıcı gönderme"],
                        ["Gümrüklü antrepo", "Saha güvenlik kaydı", "Malzeme kabul kuyruğuyla çakışma", "Araç ile mal kaydının karıştırılması"],
                        ["Serbest bölge", "Araç/ekipman girişi ayrı kayıt", "Giriş-çıkış belgesinin eksiksizliği", "Malzeme kaydıyla aynı işlem sanılması"],
                        ["Hava kargo terminali (iç)", "Terminal içi erişim, apron dışı", "Apron sınırının netliği", "Sınırın teyit edilmeden varsayılması"],
                    ],
                },
            },
            {
                baslik: "Gümrüklü sahada teslim saati, muayene ve işlem takvimine göre kurulur",
                paragraflar: [
                    "Gümrüklü bir antrepoya veya serbest bölgeye forklift teslim ederken, sahanın kendi muayene ve işlem takvimi teslim saatini belirleyen asıl değişkendir. Muayene randevusuna denk gelen bir teslimat, hem makinenin girişini hem de sahanın o anki işlemini yavaşlatabilir; bu yüzden teslim penceresi sahanın günlük işlem yoğunluğu düşükken planlanır.",
                    "Yeni makinenin ilk saatinden itibaren kullanılabilir olması için rota ve görev ataması teslimattan önce netleştirilir; aksi hâlde makine sahaya girse bile ilk saatlerini bekleyerek geçirir. Bu hazırlık, özellikle sahanın kendi güvenlik brifingi (yaya yolu, kontrol noktası, acil durum prosedürü) verilene kadar tamamlanmış sayılmaz.",
                ],
            },
            {
                baslik: "İade süreci aynı erişim disipliniyle tersine işletilir",
                paragraflar: [
                    "Kiralama süresi bitince makinenin sahadan çıkışı, girişteki kaydın simetriğidir: liman veya gümrüklü sahanın çıkış kaydı, taşıyıcı temini ve çıkış rotası yeniden doğrulanır. Makinenin son durumu (yakıt/enerji, hasar, sayaç) teslim anındaki kayıtla karşılaştırılır; fark varsa sahanın yetkilisi ile birlikte belgelenir.",
                    "Birden fazla sahaya (liman geri sahası, antrepo, terminal) hizmet veren bir işletmenin aynı gün birden fazla makineyi iade etmesi gerekiyorsa, çıkışlar her sahanın kendi trafik ve işlem yoğunluğuna göre sıraya konur; tek bir sahanın çıkış kuralı diğerine uygulanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Liman geri sahasına makine gönderdiğimizde kapıda ne kadar bekleniyor?",
                cevap: "Sabit bir bekleme süresi yoktur; bekleme, sahanın o anki kapı yoğunluğuna ve bildirim zamanlamasına bağlıdır. Gecikme riskini azaltmak için plaka, sürücü ve yük bilgisini sahanın kural setine göre önceden bildiririz; buna rağmen gemi yanaşma sonrası veya vardiya değişimi gibi yoğun saatlere denk gelen teslimatlarda bekleme uzayabilir. Bu yüzden mümkün olduğunda teslim penceresini bu yoğun saatlerin dışına planlarız; sahanızın tipik yoğunluk saatlerini paylaşırsanız planı ona göre kurarız.",
            },
            {
                soru: "Forklift apron alanına girebiliyor mu?",
                cevap: "Hayır. Bu domainin kapsamı terminal içi ve rampa çevresiyle sınırlıdır; uçağın bulunduğu apron alanına giriş ayrı bir yetki, eğitim ve güvenlik izni gerektirir ve standart forklift teslimatının kapsamı dışındadır. Teslimat öncesi makinenin çalışacağı alanın apron sınırının hangi tarafında kaldığı netleştirilir; belirsizlik varsa terminal yetkilisinin onayı alınmadan teslimat tamamlanmaz.",
            },
            {
                soru: "Gümrüklü antrepoya makine sokmak için ayrı bir evrak mı gerekiyor?",
                cevap: "Forklift malın kendisi değildir, ancak sahanın fiziksel güvenlik ve araç-ekipman kaydı buna rağmen işletilir; bu kayıt malzeme kabul kaydından ayrıdır ve sahanın kendi kuralına göre yürütülür. Hangi kaydın gerekli olduğunu teslimattan önce sahanın yetkilisiyle teyit eder, taşıyıcı bilgisini buna göre iletiriz. Bu adım atlanırsa makine kapıda beklerken sahanın malzeme kabul kuyruğu da etkilenebilir.",
            },
            {
                soru: "Teslimat hangi saatlerde yapılıyor?",
                cevap: "Sabit bir saat dilimi yoktur; sahanızın türüne göre belirleyici değişken farklıdır — liman geri sahasında gemi yanaşma programı, gümrüklü antrepoda muayene ve işlem takvimi, hava kargo terminalinde uçuş yoğunluğu. Teslim saati bu değişkenler görüşülerek belirlenir ve mümkün olduğunda sahanın en sakin penceresine yerleştirilir. Sahanıza habersiz araç gönderilmez, saat önceden netleştirilir.",
            },
            {
                soru: "Makine arızalanırsa gümrüklü sahaya ikame gönderme süreci nasıl işliyor?",
                cevap: "İkame makinenin sahaya girişi de aynı kapı ve kayıt disiplinine tabidir; bu yüzden gümrüklü veya liman bağlantılı kiralamalarda ikame süresi sözleşmede yazılı olarak tanımlanır ve ikame aracın giriş kaydı önceden hazırlanır. Arıza anında beklenmedik bir kapı gecikmesi yaşanmaması için ikame taşıyıcının bilgileri, mümkünse orijinal teslimatla birlikte sahaya önceden bildirilir.",
            },
            {
                soru: "Aynı gün liman, antrepo ve terminale ayrı ayrı teslimat yapabilir misiniz?",
                cevap: "Yapabiliriz; her sahanın kendi giriş kuralı, kayıt süreci ve trafik yoğunluğu farklı olduğu için her teslimat ayrı planlanır ve tek bir gün planı içinde sıralanır. Sahalar arası mesafe ve her birinin tipik yoğunluk saati önceden çıkarılır, teslimatlar bu sıraya göre planlanır; böylece bir sahadaki gecikme diğerine yansımaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Liman geri sahasının kapı/güvenlik kaydı, gümrüklü antrepo ve serbest bölgede araç-ekipman girişinin malzeme kaydından ayrı işletilmesi, hava kargo terminalinde apron erişiminin ayrı yetki gerektirmesi kamuya açık, sektör standardı bilgilerdir. Teslim anı kontrol kaydı ve ikame makine taahhüdü firma pratiğimizdir. Tesis adı, süre veya rakam uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift İstifleme Kiralama: Gümrüklü Antrepoda Adresli İstif ve Konteyner Yükleme Deseni",
        giris:
            "İzmir'in liman ve gümrük çevresinde forklift istiflemesi iki farklı hedefe aynı anda hizmet eder ve bu ikisi genellikle karıştırılır. Birincisi, gümrüklü antrepo veya serbest bölge deposu içindeki klasik raf istiflemesidir — burada asıl mesele kapasite değil izlenebilirliktir, çünkü her palet belirli bir adrese kaydedilmek zorundadır ve adressiz istiflenen bir yük sayım gününde fiilen kayıptır. İkincisi ise ihracata hazırlanan yükün konteynerin iç ölçüsüne göre paletlenmesi ve istiflenmesidir — burada mesele adres değil geometridir, çünkü depoda kurulan istif deseni konteynerin kapı yüksekliğine ve iç genişliğine oturmuyorsa saha da bu hata fark edilir ve ya yeniden paletleme yapılır ya da konteyner eksik doldurulmuş gönderilir. Bu sayfa istifleme forkliftini bu iki hedef üzerinden ele alır: raf koridorunda hangi makine sınıfının çalışacağı, konteyner yükleme öncesi istif yüksekliğinin nasıl hesaplandığı, gemi veya uçuş programına göre istifleme kapasitesinin nasıl planlandığı ve hasarlı ya da etiketsiz yükün istif akışından nasıl ayrıldığı.",
        maddeler: [
            {
                baslik: "Adresli istif: gümrüklü depoda hız değil izlenebilirlik önceliklidir",
                metin: "Gümrüklü antrepo ve serbest bölge depolarında forkliftin görevi, paleti sadece rafa kaldırmak değil, kaldırdığı yeri kayda geçirmektir. Depo bloklara ayrılır, her blok fiziken işaretlenir ve her kaldırma hareketi adresle birlikte kaydedilir. Operatör hangi paleti nereye kaldıracağını görünür bir liste veya sistem üzerinden alır, sahada tahminle adres belirlemez. Bu disiplin, sayım günü aranan bir palet yerine anında bulunan bir palet farkı yaratır; istifleme kiralama kararı bu yüzden yalnız makinenin kapasitesine değil, adresli çalışma alışkanlığına da bakılarak verilir.",
            },
            {
                baslik: "Konteyner yükleme öncesi istif yüksekliği, kapı ölçüsünden geriye hesaplanır",
                metin: "Bir yük konteynerle limana gidecekse, depodaki istif deseni konteynerin iç ölçüsüne göre önceden kurulmalıdır. Standart bir konteynerin iç yüksekliği, kapı açıklığı ve genişliği sabit bantlardadır; palet istifinin toplam yüksekliği bu iç yüksekliğe güvenli bir boşluk payı bırakılarak hesaplanır, aksi hâlde yükleme sırasında son sıra paletler kapıya sığmaz veya tavana sürtünür. Bu hesap, konteyner sahaya gelmeden, depo içinde forklift tarafından paletleme yapılırken tamamlanır — konteyner kapıda beklerken yeniden paletleme yapmak hem zaman hem palet bütünlüğü kaybıdır.",
            },
            {
                baslik: "Raf kotu ve koridor genişliği, makine ailesini belirler",
                metin: "Antrepo içindeki raf kotu ne kadar yüksekse ve koridor ne kadar darsa, standart karşı ağırlıklı forkliftin yerini kompakt bir sınıf almak zorunda kalır; bu ayrım depo planı çıkarılırken netleştirilir, sahada makine değiştirilerek çözülmez. Gümrüklü depoların çoğunda koridor genişliği sabit bir standarda göre kurulduğu için makine seçimi de bu sabit ölçüye göre yapılır; ölçü paylaşılmadan sınıf önerilmez.",
            },
            {
                baslik: "Sevkiyat dalgasına göre ek istifleme kapasitesi",
                metin: "Gemi yanaşma programı veya uçuş yoğunluğu, istifleme yükünü düz bir çizgide değil dalga hâlinde getirir; yanaşma öncesi birkaç gün boyunca depoya yük yığılır, ardından tempo düşer. Bu dalgayı sabit bir filo ile karşılamak, sakin günlerde atıl makine kirası ödemek anlamına gelir; taban güne göre boyutlamak ise yoğun günde depoyu kilitler. Doğru kurgu, sürekli işi karşılayan çekirdek makineleri sabit tutup yoğunluk günlerini kısa süreli ek makineyle karşılamaktır — bu ek kapasite, program belli olduğunda önceden bağlanır.",
            },
            {
                baslik: "Hasarlı veya etiketsiz yükün istif akışından ayrılması",
                metin: "Yırtık ambalaj, kırık palet veya sistemle uyuşmayan etiket taşıyan yük, adresli istif akışına dâhil edilmez; işaretli karantina alanına alınır ve depo sorumlusunun kararına bırakılır. Operatör böyle bir yükü kendi kararıyla normal rafa kaldırmaz, çünkü hem sayım kaydını hem de olası ihracat evrakını bozar. Sorun çözüldüğünde yük yeni etiket ve adresle sisteme yeniden girer; bu ayrım, tek bir sorunlu paletin bütün istif planını yavaşlatmasını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İstifleme senaryosuna göre makine sınıfı ve kritik nokta",
                paragraflar: [
                    "Aşağıdaki tablo, liman ve gümrük çevresindeki dört yaygın istifleme senaryosunu ve her birinde öncelikli kontrol noktasını özetler. Kesin makine sınıfı gerçek raf kotu, koridor ölçüsü ve yük tipiyle doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Öncelikli hedef", "Tipik sınıf", "Kritik nokta"],
                    satirlar: [
                        ["Gümrüklü depo raf istifi", "İzlenebilirlik", "Koridor ölçüsüne göre kompakt/standart", "Adresli kaldırma kaydı"],
                        ["Konteyner yükleme paletleme", "Geometri (kapı/iç ölçü)", "Standart karşı ağırlıklı", "İstif yüksekliği payı"],
                        ["Açık saha stok istifi", "Dayanıklılık", "Havalı lastikli, orta-ağır tonaj", "Zemin ve hava koşulu"],
                        ["Hava kargo iç mekân hazırlığı", "Hacim disiplini", "Akülü, kompakt", "Paletleme sıkılığı"],
                    ],
                },
            },
            {
                baslik: "Konteyner paletleme matematiği: iç ölçü, palet ölçüsü, boşluk payı",
                paragraflar: [
                    "Konteynere yönelik istifleme, üç ölçünün birlikte düşünülmesini gerektirir: konteynerin iç yüksekliği ve genişliği, kullanılan palet tabanının ölçüsü ve istif sırasında bırakılan güvenlik payı. Bu üçü depoda önceden hesaplanmazsa saha kendini konteyner kapısında gösterir — ya son sıra sığmaz ya da genişlik kullanılmadan boşluk kalır. Doğru yöntem, istif yüksekliğini konteynerin iç yüksekliğinden pay bırakarak sabitlemek ve palet tabanını konteynerin genişliğine göre kurmaktır.",
                    "Bu hesap bir kere doğru kurulduğunda, aynı konteyner tipine giden tekrarlayan sevkiyatlarda yeniden hesaplanmaz; depo ekibi aynı istif desenini tekrar kullanır. Konteyner tipiniz değiştiğinde (örneğin standart yükseklikten yüksek gövdeye geçildiğinde) desenin yeniden kontrol edilmesi gerekir.",
                ],
            },
            {
                baslik: "Gemi ve uçuş programına göre istifleme kapasitesini önceden bağlamak",
                paragraflar: [
                    "İstifleme yükü liman ve hava kargo çevresinde düz bir tempoda gelmez; gemi yanaşma ve uçuş yoğunluğu belli günlere veya saatlere yığılır. Bu yığılmayı öngörmeden filo boyutlandırmak iki uçtan birine düşer: ya sakin günlerde atıl makine kirası ödenir ya da yoğun günde depo kilitlenir. Programın önceden bilindiği durumlarda ek istifleme makinesi, yoğunluk gününden önce rezerve edilir; bu, aynı programı izleyen komşu sahaların aynı güne talep yığdığı gerçeği karşısında tek güvenilir yöntemdir.",
                    "Ek makine planında sıkça atlanan kalem operatördür; yoğunluk günü sahaya inen makine, operatörü olmadan sadece park etmiş bir ekipmandır. Kısa süreli istifleme takviyelerinde operatörlü kiralama, personel bulma telaşını baştan ortadan kaldırdığı için tercih edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gümrüklü depoda hangi forklift sınıfı istifleme için uygundur?",
                cevap: "Tek bir cevap yoktur; raf kotu, koridor genişliği ve tipik yük ölçüsü birlikte değerlendirilir. Dar koridor ve yüksek raf kompakt bir sınıfı gerektirirken, geniş koridor ve orta yükseklik standart karşı ağırlıklı makineyle rahatça karşılanır. Adresli çalışma disiplini her iki sınıfta da aynı şekilde uygulanır — makine sınıfından bağımsız olarak operatör her kaldırmayı kayıtlı adrese göre yapar. Depo planınızı ve raf kotunuzu paylaşırsanız uygun sınıfı birlikte belirleriz.",
            },
            {
                soru: "İstiflediğimiz paletler konteynere yüklerken bazen sığmıyor, sorun nerede olabilir?",
                cevap: "Sorun neredeyse her zaman istif deseninin, konteyner sahaya gelmeden önce kutunun iç ölçüsüne göre kurulmamasındandır. İstif yüksekliği ve palet tabanı konteynerin iç yüksekliği ve genişliğine göre depo içinde önceden hesaplanmalıdır; bu hesap yapılmazsa saha konteyner kapısında fark edilir. Kullandığınız konteyner tipini ve tipik palet ölçülerinizi paylaşın; istif desenini konteynere gitmeden önce birlikte netleştirelim.",
            },
            {
                soru: "Adresli istif sistemi için özel bir yazılım mı gerekiyor?",
                cevap: "Hayır, pahalı bir sistem şart değildir. Sahada kurduğumuz düzen basittir: depo bloklara ayrılır, bloklar fiziken işaretlenir, her kaldırma hareketi adresle kaydedilir ve sevkiyat listeleri adresle birlikte yazılır. Bu yazılı veya basit dijital kayıt, sayım gününde paletin yerini bulmak için yeterlidir; asıl kural adressiz istif yapılmamasıdır.",
            },
            {
                soru: "Yoğun sevkiyat haftası için ikinci istifleme forklifti kiralayabilir miyiz?",
                cevap: "Gemi yanaşma veya uçuş programı önceden biliniyorsa evet, ek makineyi bu programa göre bağlarız. Programın önceden bilinmediği ani yoğunluklarda da kısa süreli takviye değerlendirilebilir, ancak aynı dönemde komşu sahaların da benzer talep yaratabileceği unutulmamalıdır. Tipik yoğunluk günlerinizi ve tahmini palet hacminizi paylaşırsanız ek makine penceresini önceden planlarız.",
            },
            {
                soru: "Hasarlı bir palet fark edilirse istif planını nasıl etkiler?",
                cevap: "Hasarlı veya etiketi uyuşmayan palet normal adresli istif akışına dâhil edilmez; işaretli karantina alanına alınır ve depo sorumlusunun kararı beklenir. Operatör bu paleti kendi kararıyla rafa kaldırmaz, çünkü hem sayım kaydını hem de ihracat evrakını etkileyebilir. Diğer paletler plan izin verdiği sürece akışa devam eder; sorunlu palet ayrı bir kayıtla sonraki adıma alınır.",
            },
            {
                soru: "Reach truck mı yoksa standart forklift mi istifleme için daha uygun?",
                cevap: "Bu, koridor genişliği ve raf kotuna bağlıdır: dar koridor ve yüksek raf kompakt bir sınıfı öne çıkarır, ancak bu sınıf genellikle düzgün beton zemin ve kapalı alan ister. Açık sahada veya konteyner yükleme rampasında standart karşı ağırlıklı forklift gereklidir. Gümrüklü depoların çoğunda doğru çözüm karma kullanımdır — raf koridorunda kompakt sınıf, rampa ve açık alanda standart sınıf.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Adresli istif ve blok-adres sistemi, konteyner iç ölçüsüne göre paletleme hesabı, koridor genişliğinin makine sınıfını belirlemesi sektör standardı, doğrulanabilir teknik bilgilerdir. Gemi/uçuş programına göre ek kapasite planlaması firma pratiğimizdir. Tesis adı, kapasite veya rakam uydurulmamıştır.",
    },

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli / Örümcek Platform Kiralama — Bu Domainde Sunulmayan Bir Hizmet",
        giris:
            "İzmir-forklift.com'un filosu, liman geri sahası, gümrüklü antrepo ve hava kargo terminalinde yük elleçlemesi için kurulmuştur; sepetli veya örümcek platform ise tamamen farklı bir amaca hizmet eder — cephe, çatı veya dar erişimli noktalarda personeli güvenle yükseğe taşımak. İki makine sınıfı arasındaki fark isimden ibaret değildir: forklift çatalları üzerinde yük taşır ve dengesini karşı ağırlıkla sağlar, sepetli platform ise sepetinde insan taşır ve dengesini kendi ayak açıklığı veya araç üzeri montajıyla kurar. Bu farkı gizlemeden söylüyoruz çünkü forklift filomuza sepet takıp personel yükseltmek hem mevzuata aykırıdır hem de güvenlik riski taşır. Liman ve gümrük sahalarında zaman zaman bu tür bir talep bize ulaşıyor — örneğin bir antrepo çatısındaki bir noktaya erişim ya da bir aydınlatma direğinin bakımı gibi. Bu sayfa, bu talebi neden karşılamadığımızı ve doğru çözüm için nereye yönlenilmesi gerektiğini dürüstçe anlatır.",
        maddeler: [
            {
                baslik: "Forklift ile sepetli platform farklı makine aileleridir",
                metin: "Forklift, çatalları üzerindeki yükü karşı ağırlıkla dengeleyerek taşır; sepetli veya örümcek platform ise sepetindeki personeli kendi şasesi, ayak açıklığı veya araç üzeri montaj sistemiyle dengeler. Bu iki denge mantığı birbirinin yerine geçmez; forklife personel sepeti bağlamak üretici onayı ve mevzuat açısından kabul edilmez, güvenlik riskini doğrudan artırır.",
            },
            {
                baslik: "Neden bu hizmeti filoya eklemedik",
                metin: "Sepetli ve örümcek platform operasyonu, forklift işimizden farklı bir teknik derinlik (dengeleme sistemi, ayak açıklığı hesabı, rüzgar sınırı) ve farklı bir bakım-sertifikasyon süreci gerektirir. Bu alanı ana iş kolumuz gibi sunmak yanıltıcı olur; filomuzu ve uzmanlığımızı yük elleçleme üzerinde yoğunlaştırdık.",
            },
            {
                baslik: "Liman ve gümrük sahasında bu talep nasıl ortaya çıkıyor",
                metin: "Forklift kiraladığımız bir antrepo veya terminal sahasında, aynı proje kapsamında bir çatı noktasına veya yüksek bir aydınlatma direğine erişim ihtiyacı doğabiliyor. Bu, forkliftin doğrudan karşılayabileceği bir iş değildir; personel taşıma amaçlı ayrı bir makine sınıfı gerektirir.",
            },
            {
                baslik: "Doğru yönlendirme",
                metin: "Böyle bir talep geldiğinde, erişilmesi gereken nokta ve çalışma yüksekliği hakkında elimizdeki bilgiyi paylaşarak sizi sepetli veya örümcek platform konusunda esas uzmanlığa sahip bir kiralama firmasına yönlendiriyoruz. Amacımız, kapasitemiz dışındaki bir işi üstlenip sahada güvenlik açığı yaratmak değil, doğru makineye doğru hızlı ulaşmanızı sağlamaktır.",
            },
            {
                baslik: "Dürüst kapsam sınırı",
                metin: "Bu domainde sepetli ve örümcek platform kiralama hizmeti sunmuyoruz ve bunu gizlemiyoruz. Forklift ihtiyacınızla birlikte bu tür bir erişim talebiniz varsa, ikisini ayrı iki tedarikçiyle, ayrı iki güvenlik protokolüyle planlamanızı öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift ile sepetli/örümcek platform karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo iki makine sınıfının temel farkını özetler; kesin ihtiyaç saha ölçümüyle netleşir ve bu domain yalnız sol sütunu kapsar.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Forklift (bu domain)", "Sepetli / örümcek platform"],
                    satirlar: [
                        ["Ana görevi", "Yük taşıma, istifleme", "Personel yükseltme"],
                        ["Dengeleme", "Karşı ağırlık", "Ayak açıklığı / araç montajı"],
                        ["Bu domaindeki rolü", "Ana hizmet", "Sunulmuyor"],
                        ["Yönlendirme", "—", "Uzman platform firmasına"],
                    ],
                },
            },
            {
                baslik: "Liman/gümrük sahasında karışan iki ihtiyaç",
                paragraflar: [
                    "Bir antrepo veya terminal sahasında forklift ile yük taşınırken, aynı sahada bir çatı noktasına, dış cepheye veya yüksek bir direğe erişim ihtiyacı ayrı bir proje olarak ortaya çıkabilir. Bu iki iş aynı sahada, aynı gün planlanabilir ama aynı makineyle karşılanamaz.",
                    "Sahanızda her iki ihtiyaç birden varsa, forklift tarafını biz planlarız; erişim/yükseltme tarafını uzman bir platform firmasıyla koordine etmenizi öneririz — böylece iki iş birbirinin trafiğini bozmadan ilerler.",
                ],
            },
            {
                baslik: "Mevzuat ve güvenlik açısından neden karışmaması gerekiyor",
                paragraflar: [
                    "Forklife sepet bağlayarak personel yükseltmek, üretici onayı dışında bir kullanım şeklidir ve iş güvenliği mevzuatına aykırıdır; bu uygulama hem denetimlerde hem gerçek bir kaza senaryosunda ciddi risk taşır. Bu nedenle bu talebi hiçbir koşulda karşılamıyoruz.",
                    "Doğru çözüm, personel yükseltme için tasarlanmış ve bu amaçla sertifikalandırılmış bir makine kullanmaktır. Bu makineyi filomuzda tutmadığımız için, ihtiyacınızı esas uzmanlığa sahip bir firmaya yönlendiriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftinize sepet takıp personel taşıyabilir misiniz?",
                cevap: "Hayır. Forklift yük taşımak için tasarlanmıştır ve dengesini karşı ağırlıkla sağlar; personel sepeti bağlayıp yükseltme yapmak üretici onayı dışındadır ve mevzuata aykırıdır. Bu talebi hiçbir koşulda karşılamıyoruz; personel erişimi için sepetli veya örümcek platform konusunda uzman bir firmayla çalışmanızı öneririz.",
            },
            {
                soru: "Sepetli platformu forklift ile birlikte aynı firmadan kiralayabilir miyiz?",
                cevap: "Bu domainin filosu forklift ile sınırlıdır; sepetli veya örümcek platform hizmeti sunmuyoruz. Sahanızda her iki ihtiyaç birden varsa forklift tarafını biz planlarız, erişim/yükseltme tarafı için sizi uzman bir platform firmasına yönlendiririz.",
            },
            {
                soru: "Neden bu hizmeti filonuza eklemiyorsunuz?",
                cevap: "Sepetli ve örümcek platform operasyonu farklı bir teknik derinlik ve sertifikasyon gerektirir; bunu ana iş kolumuz gibi sunmak yanıltıcı olur. Uzmanlığımızı liman ve gümrük çevresinde yük elleçlemesi üzerinde yoğunlaştırdık.",
            },
            {
                soru: "Hangi firmayı önerirsiniz?",
                cevap: "Belirli bir firma adı vermiyoruz; bölgenizde sepetli veya örümcek platform konusunda esas uzmanlığa sahip bir kiralama firmasıyla doğrudan çalışmanızı öneririz. Erişilmesi gereken nokta ve çalışma yüksekliği hakkında elimizdeki saha bilgisini paylaşarak sürecinizi hızlandırabiliriz.",
            },
            {
                soru: "Talebimiz küçük ve tek seferlik olsa da karşılamıyor musunuz?",
                cevap: "Hayır, ölçek fark etmiyor. Forklife personel sepeti bağlamak tek seferlik dahi olsa mevzuata aykırıdır ve güvenlik riskini ortadan kaldırmaz. Küçük veya büyük her erişim talebi için doğru makine sınıfını kullanan bir firmayla çalışmanızı öneririz.",
            },
            {
                soru: "Forklift ile personel taşımanın riski tam olarak nedir?",
                cevap: "Forkliftin dengeleme sistemi yük taşımaya göre hesaplanmıştır; sepet bağlandığında yükün konumu, ağırlık merkezi ve hareket dinamiği personel için tasarlanan makinelerdekinden farklıdır. Bu fark, ani bir hareket veya zemin dengesizliğinde devrilme riskini artırır. Bu yüzden personel yükseltme, yalnız bu amaçla üretilmiş ve sertifikalandırılmış makinelerle yapılmalıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift ile sepetli/örümcek platformun ayrı dengeleme mantığına sahip farklı makine sınıfları olduğu ve forklife personel sepeti bağlamanın mevzuata aykırı olduğu sektör standardı bilgidir. Bu domainin forklift ile sınırlı olduğu ve bu hizmeti sunmadığı firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Boom Lift Talebi Geldiğinde: izmir-forklift.com'un Yönlendirme Süreci",
        giris:
            "Filomuzda tek bir ekipman ailesi var: yük elleçleme forklifti. Bu yüzden 'boom lift lazım' diye başlayan her aramayı doğrudan reddetmek yerine önce ne istendiğini dinliyoruz, çünkü çoğu zaman arayan kişi aslında farklı bir çözümle de işini bitirebiliyor. Liman geri sahasında bir çatı altına, bir gümrük deposu cephesinin arkasına ya da bir boru köprüsünün üstüne erişmek gerektiğinde akla ilk gelen isim boom lift oluyor, ama bizim tarafımızdan verilecek doğru cevap bu makineyi kendi filomuzda tutmadığımızdır. Aşağıda bu telefon görüşmesinin nasıl işlediğini ve sizi nereye yönlendirdiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "İlk soru: gerçekten kol mu lazım, yoksa forklift mi yeter",
                metin: "Bir 'boom lift' talebinin arkasında bazen aslında bir forklift ataşmanıyla (platform sepeti değil, malzeme taşıma amaçlı) çözülebilecek bir iş çıkabiliyor — örneğin raf üstüne malzeme koymak forklift işidir, kişi çıkarmak değildir. Telefonda ilk yaptığımız ayrım budur: yük mü taşınacak, insan mı yükseltilecek? Cevap ikincisiyse, bu bizim filomuzun sınırının dışındadır ve bunu hemen söyleriz.",
            },
            {
                baslik: "Neden filomuza katmıyoruz",
                metin: "Boom lift'in kendi bakım takvimi, kendi sertifikasyon zinciri ve kendi operatör eğitimi vardır; bunları forklift filosunun yanına yarım yamalak eklemek, ikisinde de vasat kalmak anlamına gelir. izmir-forklift.com'un iddiası liman ve gümrük sahasında yük elleçlemede derinlik kurmaktır — bu iddiayı korumak, kapsam dışı bir makineyi 'de sunuyoruz' diye eklememeyi gerektiriyor.",
            },
            {
                baslik: "Yönlendirme nasıl işliyor",
                metin: "Erişilmesi gereken nokta, yükseklik ve varsa engelin niteliği hakkında elimizdeki bilgiyi not alıp, bu iş için gerçekten uzmanlaşmış bir platform tedarikçisine yönlendiriyoruz. Aynı sahada bizim forkliftimiz de çalışıyorsa iki ekibin aynı gün, çakışmadan girip çıkmasını koordine ediyoruz — bu bizim üstlenebileceğimiz tek pratik katkı.",
            },
            {
                baslik: "Sahada iki ekip aynı anda olursa",
                metin: "Bir antrepo veya geri saha projesinde hem forklift hem boom lift aynı gün çalışacaksa, saha giriş sırası ve park alanı paylaşımı önceden netleştirilmezse birbirinin önünü keser. Biz kendi forklift programımızı, diğer tedarikçinin giriş saatiyle çakışmayacak şekilde ayarlıyoruz; bu koordinasyonu talep eden müşteriye ayrıca bir bedel yansıtmıyoruz.",
            },
            {
                baslik: "Bu sayfanın amacı ne",
                metin: "Arama motorunda 'boom lift kiralama' aratıp bu sayfaya gelen birinin zamanını almadan doğru yöne yönlendirmek — sayfa bunun için var. Burada bir hizmet satmıyoruz; hangi ihtiyacın bizim işimiz olmadığını ve kimin işi olduğunu açıkça yazıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Telefonda sorduğumuz üç soru",
                paragraflar: [
                    "Boom lift talebiyle gelen her aramada aynı üç soruyu sorarız; cevaplar hem sizin hem bizim doğru kararı hızlı vermemizi sağlar.",
                ],
                tablo: {
                    basliklar: ["Soru", "Neden soruyoruz", "Cevaba göre yönlendirme"],
                    satirlar: [
                        ["Taşınacak şey yük mü, insan mı?", "Yük ise forklift çözebilir, insan ise boom lift gerekir", "Yük → kendi filomuz; insan → uzman firma"],
                        ["Erişim noktası kapalı mı açık mı?", "Kapalı hacimde farklı bir makine sınıfı gerekebilir", "Bilgiyi yönlendirdiğimiz firmaya iletiriz"],
                        ["Aynı sahada forklift işimiz var mı?", "İki ekibin giriş-çıkışını çakıştırmamak için", "Varsa koordinasyonu biz üstleniriz"],
                    ],
                },
            },
            {
                baslik: "Liman ve gümrük sahasında bu talebin sık geldiği yerler",
                paragraflar: [
                    "En sık karşılaştığımız senaryo, bir antrepo çatısının alt kirişine, bir yükleme rampasının üst kısmına veya bir cephe aydınlatmasının arkasına erişim ihtiyacıdır. Bunların hiçbiri forkliftle çözülecek işler değildir; hepsi kol hareketiyle engel arkasına dolanmayı gerektirir.",
                    "Bu tip taleplerde saha zaten bize forklift işi için açık olduğundan, ikinci bir tedarikçinin girişini organize etmek bizim için yeni değildir — sahanın giriş prosedürünü zaten biliyoruz, bu bilgiyi yeni gelen ekiple paylaşırız.",
                ],
            },
            {
                baslik: "Ne zaman kendimiz üstlenmeyi bile düşünmüyoruz",
                paragraflar: [
                    "Kol menzili uzun, rüzgara duyarlı veya dış destek ayağı kurulumu gerektiren hiçbir işte 'biz de hallederiz' demiyoruz — bunu söylemek güvenlik açığı yaratır. Tek yaptığımız, doğru numarayı elinize ulaştırmaktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "izmir-forklift.com boom lift de kiralıyor mu?",
                cevap: "Hayır, filomuz sadece yük elleçleme forkliftinden oluşuyor. Boom lift talebiyle ararsanız ihtiyacınızı dinler, gerçekten forkliftle çözülebilecek bir iş olup olmadığına bakar, değilse sizi bu konuda uzmanlaşmış bir tedarikçiye yönlendiririz.",
            },
            {
                soru: "Forkliftinize platform sepeti taktırıp insan çıkarabilir miyiz?",
                cevap: "Hayır, bu mevzuata aykırıdır ve önermiyoruz. Forklift karşı ağırlıkla dengelenir, sepetli erişim makineleri ise kendi şase/destek sistemleriyle farklı bir denge mantığı taşır. İnsan yükseltme ihtiyacınız varsa bunun için üretilmiş bir makine kullanılmalı.",
            },
            {
                soru: "Aynı sahada hem forklift hem boom lift lazım, ikisini ayrı ayrı mı ayarlamalıyız?",
                cevap: "Forklift tarafını biz üstleniriz, boom lift için sizi yönlendirdiğimiz firmayla siz anlaşırsınız — ama iki ekibin sahaya giriş saatini çakışmayacak şekilde biz koordine ederiz, bu ek bir ücret gerektirmez.",
            },
            {
                soru: "Hangi firmaya yönlendiriyorsunuz, sabit bir isim mi var?",
                cevap: "Sabit bir ortaklık ilan etmiyoruz; sahanızın konumuna ve iş büyüklüğüne göre o an uygun, gerçekten bu işte uzmanlaşmış bir tedarikçiyi önermeye çalışırız. Kararı siz verirsiniz, biz bir yönlendirme noktasıyız.",
            },
            {
                soru: "Talebimiz küçükse (bir günlük, tek nokta) yine de kendi filonuzla bakar mısınız?",
                cevap: "Hayır, iş büyüklüğü fark etmez — bu makine sınıfı filomuzda yok. Küçük tek günlük işler için de aynı yönlendirmeyi yaparız, çünkü kapasite sorunu değil ekipman sınıfı sorunudur.",
            },
            {
                soru: "Neden bu sayfayı hâlâ tutuyorsunuz, hizmet vermiyorsanız?",
                cevap: "Çünkü bu arama bize düzenli geliyor ve insanların doğru yere yönlenmesi bizim için de değerli — yanlış beklentiyle arayan birini boşa çevirmek yerine, en azından doğru soruyu sorup doğru yöne işaret ediyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift ile boom lift'in ayrı ekipman sınıfları olduğu ve forklife personel sepeti bağlamanın mevzuata aykırı olduğu sektör standardı bilgidir. Telefon yönlendirme süreci ve saha koordinasyonu firma pratiğimizdir. Tesis adı, tedarikçi adı veya rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Gümrüklü Antrepo ve Kapalı Depo İçi Forklift Kiralama",
        giris:
            "Gümrüklü antrepo, serbest bölge deposu veya kapalı sanayi holü içinde çalışan forklift, açık sahadaki kardeşinden üç noktada ayrışır: güç tipi, lastik yapısı ve manevra alanı. Kapalı hacim, egzozlu bir makineyi kabul edilebilir kılmaz — antrepo içi işlerde akülü güç tipi standarttır. Zemin tarafında da beklenti nettir: antrepo zeminleri genellikle perdahlı betondur ve standart siyah lastik burada iz bırakır; iz bırakmayan lastikli modeller bu yüzden kapalı depo işlerinde tercih edilir. Üçüncü ayrışma noktası ise manevra alanıdır — raf koridoru, malzeme kabul bandı ve personel yürüyüş yolu aynı kapalı hacmi paylaştığı için makinenin görüş açısı ve dönüş yarıçapı, açık sahadakinden daha sıkı bir sınırla çalışır. Bu sayfa, gümrüklü ve kapalı depo içi forklift kararının bu üç eksende nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Kapalı hacimde güç tipi tartışmasızdır",
                metin: "Gümrüklü antrepo, serbest bölge deposu veya kapalı sanayi holünde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller zorunludur. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimat öncesi planlanır; tek vardiyalık işlerde gece şarjı yeterliyken, çok vardiyalı sahalarda değişim akülü çözüm veya hızlı şarj istasyonu değerlendirilir.",
            },
            {
                baslik: "Zemin, lastik tipini belirler",
                metin: "Antrepo ve depo zeminleri çoğunlukla epoksi kaplı veya perdahlı betondur. Bu yüzeylerde standart siyah lastik iz bırakır; iz bırakmayan (beyaz dolgu) lastikli modeller, özellikle ihracat malının depolandığı temiz alanlarda tercih edilir. Yükleme rampası çevresindeki kot farkları için de çukur önleme sisteminin devrede olması istenir.",
            },
            {
                baslik: "Raf koridoru ve malzeme bandı aynı hacmi paylaşır",
                metin: "Kapalı depo içinde raf koridoru, malzeme kabul-çıkış bandı ve personel yürüyüş yolu genellikle iç içedir; bu yüzden makinenin dönüş yarıçapı ve görüş açısı açık sahadakinden daha kısıtlı bir alanda test edilir. Koridor genişliği raf planından önce ölçülür ve makine sınıfı buna göre belirlenir; sahada deneme yanılmayla makine değiştirmek üretim veya sevkiyat akışını kesintiye uğratır.",
            },
            {
                baslik: "Malzeme kabul-çıkış bandıyla forklift trafiğinin ayrılması",
                metin: "Kapalı antrepolarda malzeme kabul bandı ile forklift güzergahı kesişiyorsa bu kesişim noktası işaretlenir ve öncelik kuralı tanımlanır; aksi hâlde bant çalışırken forklift geçişi kesintiye uğrar veya güvenlik riski doğar. Bu ayrım, depo planı çıkarılırken raf yerleşimiyle birlikte netleştirilir.",
            },
            {
                baslik: "Aydınlatma ve görüş koşulları",
                metin: "Kapalı depo içi aydınlatma, açık sahaya göre daha kontrollü ama bazen daha zayıf olabilir; yüksek raf istiflemesinde makinenin kendi aydınlatması ve operatörün görüş açısı bu koşula göre değerlendirilir. Gece vardiyası çalışan antrepolarda bu kontrol ayrıca yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapalı depo işlerinde güç tipi ve lastik seçim tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, gümrüklü antrepo ve kapalı depo içi yaygın senaryolarda hangi güç tipi ve lastiğin tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Güç tipi", "Lastik", "Kritik kontrol"],
                    satirlar: [
                        ["Gümrüklü antrepo, tek vardiya", "Akülü", "İz bırakmayan (beyaz dolgu)", "Gece şarj planı"],
                        ["Çok vardiyalı depo", "Akülü (değişim akü)", "İz bırakmayan", "Şarj/değişim düzeni"],
                        ["Serbest bölge, temiz alan", "Akülü", "İz bırakmayan", "Zemin temizliği"],
                        ["Rampa ile içi karma iş", "Akülü + dizel görev ayrımı", "Ayrı görev, ayrı lastik", "İç-dış makine sınırı"],
                    ],
                },
            },
            {
                baslik: "Çok vardiyalı antrepoda akü ve şarj planlaması",
                paragraflar: [
                    "Gümrüklü antrepolarda tek vardiyalı işlerde makine gece boyunca şarj olur ve ertesi gün tam kapasiteyle başlar. Çok vardiyalı sahalarda ise akü, vardiya arasında yeterli şarj süresi bulamayabilir; bu durumda değişim akülü sistem veya hızlı şarj istasyonu değerlendirilir.",
                    "Şarj noktasının konumu, forklift güzergahının bir parçası olarak planlanır; şarj için makinenin depo dışına veya uzak bir noktaya taşınması gerekiyorsa bu ek süre, günlük çevrim hesabına dahil edilir.",
                ],
            },
            {
                baslik: "Rampa ile depo içi arasında görev ayrımı",
                paragraflar: [
                    "Bazı antrepolarda hem açık rampa boşaltması hem kapalı depo içi istifleme aynı gün yapılır. Bu iki iş için tek makine kullanmak, dizel makinenin depo içine girmesine ya da akülü makinenin rampa dışına çıkmasına yol açabilir; ikisi de önerilmez.",
                    "Doğru düzen, iki işi ayrı makinelerle karşılamak veya tampon alanda yükü aktarmaktır — dış makine yükü kapı önündeki tampon alana bırakır, iç makine oradan devralır. Bu ayrım depo planı çıkarılırken netleştirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Antrepomuzda dizel forklift kullanabilir miyiz?",
                cevap: "Kapalı hacimde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller zorunludur. Dizel sınıf yalnız açık rampa veya dış saha işlerinde tercih edilir. İki işi de yapmanız gerekiyorsa görev ayrımı yapılır: dış makine yükü tampon alana bırakır, iç makine akülü olarak devralır.",
            },
            {
                soru: "İz bırakmayan lastik neden gerekiyor?",
                cevap: "Antrepo zeminleri genellikle perdahlı veya epoksi kaplı betondur ve standart siyah lastik bu yüzeyde iz bırakır. İz bırakmayan (beyaz dolgu) lastik, özellikle ihracat malının depolandığı temiz alanlarda tercih edilir; bu, hem görüntü hem zemin bakım maliyeti açısından önemlidir.",
            },
            {
                soru: "Çok vardiyalı çalışıyoruz, akü yetmiyor; ne öneriyorsunuz?",
                cevap: "Vardiyalar arasında yeterli şarj süresi yoksa değişim akülü sistem veya hızlı şarj istasyonu değerlendirilir. Şarj noktasının konumu forklift güzergahının bir parçası olarak planlanır; vardiya düzeninizi paylaşırsanız uygun akü modelini birlikte belirleriz.",
            },
            {
                soru: "Malzeme kabul bandı ile forklift güzergahımız kesişiyor, risk oluşturur mu?",
                cevap: "Kesişim noktası işaretlenip öncelik kuralı tanımlanmazsa evet risk oluşturur. Bu kesişim, depo planı çıkarılırken raf yerleşimiyle birlikte netleştirilir ve forklift operatörüne görünür biçimde bildirilir; bandın çalıştığı saatlerde geçiş önceliği tanımlı kurala göre işler.",
            },
            {
                soru: "Dar koridorumuzda standart forklift çalışır mı?",
                cevap: "Koridorun net genişliği görülmeden kesin cevap verilemez; kapalı depo içinde dönüş yarıçapı açık sahadan daha sıkı bir sınırla test edilir. Koridor dar ise kompakt bir sınıf değerlendirilir. Raf planınızı ve koridor ölçünüzü paylaşırsanız uygun makineyi netleştiririz.",
            },
            {
                soru: "Gece vardiyasında aydınlatma yeterli değilse ne yapılır?",
                cevap: "Yüksek raf istiflemesinde makinenin kendi aydınlatması ve operatörün görüş açısı gece koşuluna göre ayrıca değerlendirilir. Aydınlatma yetersizse iş güvenliği açısından ek aydınlatma veya çalışma saatinin yeniden planlanması önerilir; bu kontrol teslimat öncesi saha ziyaretinde netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı alanda dizel emisyon kısıtı, antrepo zemininde iz bırakmayan lastik tercihi ve koridor genişliğinin makine sınıfını belirlemesi sektör standardı bilgilerdir. Vardiya bazlı akü/şarj planlaması ve rampa-depo görev ayrımı firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Sahasında Forklift Rolü — Montaj Erişimi Değil, Malzeme Besleme",
        giris:
            "Çelik konstrüksiyon montaj platformu genellikle bir personel yükseltme hizmetini akla getirir — kirişe, kolona veya çatı aşığına erişip kaynak ya da bulon işi yapmak. İzmir-forklift.com bu erişim hizmetini sunmaz; filomuzun rolü, aynı sahada farklı ama tamamlayıcı bir iştir: profil, kiriş, sac paketi ve bağlantı elemanlarını sahaya taşımak, doğru sıraya dizmek ve montaj ekibinin çalıştığı noktaya en yakın erişilebilir konumda hazır tutmak. Bu ayrımı net tutuyoruz çünkü aksi hâlde müşteri, forklift kiraladığında montaj erişiminin de dahil olduğunu düşünebilir. Bu sayfa, liman ve sanayi bölgesindeki çelik konstrüksiyon sahalarında forkliftin gerçek rolünü ve montaj erişimi için nereye yönlendirdiğimizi anlatır.",
        maddeler: [
            {
                baslik: "Forkliftin sahadaki gerçek görevi: malzeme besleme",
                metin: "Çelik konstrüksiyon sahasında forklift, profil demeti, kiriş paketi veya sac yığınını depodan veya tırdan alıp montaj noktasına en yakın erişilebilir alana taşır. Bu iş, Aliağa ve liman çevresindeki ağır sanayi sahalarında sıkça karşılaştığımız uzun ve ağır yük taşımacılığıyla aynı mantıkla yürür; yük boyu ve ağırlık merkezi öncelikle değerlendirilir.",
            },
            {
                baslik: "Montaj erişimi (kaynak, bulon, kiriş üstü çalışma) bu domainin kapsamı dışındadır",
                metin: "Kirişe, kolona veya çatı aşığına çıkıp personel eliyle yapılan montaj işleri, forkliftin karşılayamayacağı bir erişim türüdür; bu iş için tasarlanmış personel yükseltme platformu gerekir. Bu domainde bu hizmeti sunmuyoruz; sahanızda montaj erişimi gerekiyorsa uzman bir platform firmasıyla ayrıca çalışmanızı öneririz.",
            },
            {
                baslik: "Malzeme sırasının montaj programıyla eşleşmesi",
                metin: "Çelik montaj işlerinde malzemenin sahaya geliş sırası, montaj ekibinin çalışma sırasıyla uyumlu olmalıdır; yanlış sırayla gelen bir kiriş, montaj ekibini bekletir veya sahada geçici depolama sorunu yaratır. Forklift operatörü, malzemeyi montaj programına göre belirlenen sıraya göre yerleştirir; sıralamayı kendi kararıyla değiştirmez.",
            },
            {
                baslik: "Ağır ve uzun profilin taşınmasında dikkat edilen noktalar",
                metin: "Uzun profil ve kiriş demetleri, standart forkliftle taşındığında dönüşte kendi boyu kadar alan süpürür; dar sahalarda bu, hem yükü hem çevredeki ekibi riske atar. Yük boyu ve saha manevra alanı birlikte değerlendirilir; gerekiyorsa yük şasi boyunca yanlamasına taşınan bir makine sınıfı önerilir.",
            },
            {
                baslik: "Forklift ile montaj ekibinin saha koordinasyonu",
                metin: "Forklift, montaj ekibinin çalıştığı bölgeye yaklaşırken görüş açısı ve yük yüksekliği özellikle kontrol edilir; kirişin altında veya yakınında çalışan personel varsa forklift o bölgeye yaklaşmadan önce saha koordinatörünün onayı beklenir. Bu koordinasyon, montaj erişimini biz sağlamasak da malzeme besleme sırasında güvenliği korumak için gereklidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çelik konstrüksiyon sahasında görev ayrımı",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon sahasındaki iki farklı ihtiyacı ve bu domainin hangisini karşıladığını gösterir.",
                ],
                tablo: {
                    basliklar: ["İhtiyaç", "Bu domainin rolü", "Gereken makine", "Kim sağlar"],
                    satirlar: [
                        ["Profil/kiriş/sac taşıma", "Ana hizmet", "Forklift (uzun yük donanımlı)", "İzmir-forklift.com"],
                        ["Kiriş üstü kaynak/bulon erişimi", "Sunulmuyor", "Personel yükseltme platformu", "Uzman platform firması"],
                        ["Malzeme sıralama, montaj programına göre", "Ana hizmet", "Forklift + saha koordinasyonu", "İzmir-forklift.com"],
                        ["Cephe/çatı montaj erişimi", "Sunulmuyor", "Eklemli/makaslı platform", "Uzman platform firması"],
                    ],
                },
            },
            {
                baslik: "Liman ve sanayi bölgesinde çelik konstrüksiyon malzeme akışı",
                paragraflar: [
                    "Liman ve sanayi bölgesindeki çelik konstrüksiyon projelerinde malzeme genellikle tırla veya konteynerle sahaya gelir; forklift bu malzemeyi araçtan alıp montaj noktasına en yakın erişilebilir alanda hazır tutar. Bu akış, montaj programındaki her aşamanın malzeme gecikmesi yaşamadan ilerlemesini sağlar.",
                    "Malzeme teslim sırası önceden bilindiğinde forklift planı da buna göre kurulur; aksi hâlde sahada geçici depolama alanı büyür ve montaj ekibi doğru parçayı bulmak için zaman kaybeder.",
                ],
            },
            {
                baslik: "Montaj erişimi için doğru yönlendirme süreci",
                paragraflar: [
                    "Sahanızda hem malzeme besleme hem montaj erişimi ihtiyacı varsa, biz malzeme tarafını üstleniriz ve montaj erişimi için elimizdeki saha bilgisini (yükseklik, engel durumu, zemin) paylaşarak sizi uzman bir platform firmasına yönlendiririz.",
                    "İki hizmetin aynı sahada, aynı gün koordine edilmesi gerekiyorsa forklift trafiği ile personel yükseltme platformunun çalışma alanını çakışmayacak şekilde ayırırız; bu koordinasyon saha güvenliği açısından önemlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftinizle kirişin üstüne çıkıp montaj yapabilir miyiz?",
                cevap: "Hayır. Forklift yük taşımak için tasarlanmıştır, personel yükseltme için değildir. Kiriş üstü kaynak veya bulon işi gibi montaj erişimleri için bu amaçla tasarlanmış bir personel yükseltme platformu gerekir; bu domainde bu hizmeti sunmuyoruz.",
            },
            {
                soru: "Çelik konstrüksiyon sahasında forkliftiniz tam olarak ne yapıyor?",
                cevap: "Profil demeti, kiriş paketi ve sac yığınını depodan veya tırdan alıp montaj noktasına en yakın erişilebilir alana taşır ve montaj programına göre belirlenen sırayla yerleştirir. Kiriş üstü veya cephe montaj erişimi bu hizmetin kapsamında değildir.",
            },
            {
                soru: "Malzeme besleme ile montaj erişimini aynı gün koordine edebilir misiniz?",
                cevap: "Evet, forklift trafiği ile personel yükseltme platformunun çalışma alanını çakışmayacak şekilde ayırarak koordine edebiliriz; ancak montaj erişimini biz sağlamıyoruz, bu tarafı uzman bir platform firmasıyla birlikte planlarız.",
            },
            {
                soru: "Uzun profil demetlerini dar sahada nasıl taşıyorsunuz?",
                cevap: "Standart forkliftle taşınan uzun yük dönüşte kendi boyu kadar alan süpürür; dar sahalarda bu riski azaltmak için yük boyu ve manevra alanı birlikte değerlendirilir, gerekiyorsa yükü şasi boyunca yanlamasına taşıyan bir makine sınıfı önerilir.",
            },
            {
                soru: "Montaj erişimi için hangi firmayı önerirsiniz?",
                cevap: "Belirli bir firma adı vermiyoruz; kiriş üstü veya cephe montaj erişimi konusunda esas uzmanlığa sahip bir platform kiralama firmasıyla doğrudan çalışmanızı öneririz. Erişim noktası ve yükseklik hakkında elimizdeki saha bilgisini paylaşarak sürecinizi hızlandırabiliriz.",
            },
            {
                soru: "Malzeme sırası montaj programıyla uyuşmazsa ne olur?",
                cevap: "Yanlış sırayla gelen malzeme montaj ekibini bekletir veya sahada geçici depolama sorunu yaratır. Bu yüzden forklift operatörü malzemeyi montaj programına göre belirlenen sıraya göre yerleştirir; sıralamayı kendi kararıyla değiştirmez, değişiklik saha koordinatöründen gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon sahasında malzeme besleme (forklift) ile montaj erişiminin (personel yükseltme platformu) ayrı iş ve makine sınıfları olduğu sektör standardı bilgidir. Bu domainin yalnız malzeme besleme tarafını sunduğu ve montaj erişimi için yönlendirme yaptığı firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım Ürünü İhracatında Forklift Rolü — Çuval, Big-Bag ve Palet Taşıma",
        giris:
            "Tarım ve silo platform kiralama başlığı genellikle silo üstü bakım veya erişim platformunu akla getirir; izmir-forklift.com bu hizmeti sunmaz. Ancak filomuzun bu alanla gerçek bir kesişimi var: İzmir'in liman ve serbest bölge altyapısından ihraç edilen tarım ürünleri — kuru meyve, bakliyat, tütün, yağlı tohum gibi — genellikle çuval, big-bag veya palet üzerinde sahaya gelir ve buradan konteynere ya da depoya taşınır. Bu taşımada forkliftin görevi silonun kendisiyle değil, ürünün ambalaj biriminin ağırlığı, istifleme deseni ve konteyner ölçüsüyle ilgilidir. Bu sayfa, tarım ürünü ihracatına bağlı forklift taşımacılığını ve silo üstü erişim gibi kapsam dışı taleplerde nasıl yönlendirme yaptığımızı anlatır.",
        maddeler: [
            {
                baslik: "Silo üstü erişim ve bakım bu domainin kapsamı dışındadır",
                metin: "Silonun kendisine (üst platform, merdiven, bakım noktası) erişim gerektiren işler personel yükseltme veya sabit erişim ekipmanı gerektirir; forklift bu işi karşılamaz. Böyle bir talep geldiğinde bunu net biçimde belirtir ve uzman bir firmaya yönlendiririz.",
            },
            {
                baslik: "Forkliftin gerçek rolü: çuval, big-bag ve palet taşıma",
                metin: "Tarım ürünü ihracatında forklift, dolum tesisinden veya depodan çıkan çuval ya da big-bag yükünü palet üzerinde taşır ve sevkiyat noktasına dizer. Big-bag'lerin ağırlık merkezi standart palet yüklerinden farklı davranabilir; bu yüzden yük diyagramı ve ataşman (varsa big-bag askı çubuğu) uyumu her seferinde kontrol edilir.",
            },
            {
                baslik: "Konteyner iç ölçüsüne göre istif deseni",
                metin: "Tarım ürünü çoğunlukla konteynerle ihraç edildiği için, çuval veya big-bag istifleme deseni konteynerin iç yüksekliği ve genişliğine göre depoda önceden kurulur. Ürün nemine ve ambalaj tipine göre istif yüksekliği ayrıca sınırlandırılabilir; bu sınır depo yönetimiyle birlikte belirlenir.",
            },
            {
                baslik: "Mevsimsel yoğunluk ve kısa dönem kiralama",
                metin: "Tarım ürünü ihracatı hasat dönemine göre belirgin bir mevsimsellik gösterir; yoğun dönemde ek forklift kısa süreli kiralamayla karşılanır, sakin dönemde filo küçültülür. Bu esneklik, sabit bir makine yatırımına bağlanmadan mevsimsel talebi karşılamanın pratik yoludur.",
            },
            {
                baslik: "Ürün hassasiyeti ve dikkatli elleçleme",
                metin: "Bazı tarım ürünleri (kuru meyve, bakliyat) ambalaj hasarına veya nem almaya karşı hassastır; forklift operatörü çatal ucunun ambalajı delmemesi ve yükün aşırı sallanmadan taşınması konusunda özellikle dikkatli çalışır. Hasarlı ambalaj tespit edilirse yük normal akıştan ayrılır ve depo sorumlusuna bildirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım ürünü ihracatında forklift görev tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, tarım ürünü ihracatına bağlı sahalarda forkliftin karşıladığı ve karşılamadığı işleri özetler.",
                ],
                tablo: {
                    basliklar: ["İş", "Bu domainin rolü", "Kritik nokta"],
                    satirlar: [
                        ["Çuval/big-bag palet taşıma", "Ana hizmet", "Yük diyagramı, ataşman uyumu"],
                        ["Konteynere istif ve yükleme", "Ana hizmet", "İç ölçüye göre istif deseni"],
                        ["Silo üstü bakım/erişim", "Sunulmuyor", "Uzman firmaya yönlendirme"],
                        ["Sera/kırsal saha zor zemin taşıma", "Kısmi (zemin uygunsa)", "Zemin ve lastik uyumu"],
                    ],
                },
            },
            {
                baslik: "Big-bag taşımada dikkat edilen ağırlık merkezi",
                paragraflar: [
                    "Big-bag yükler, standart palet yüklerine göre daha yüksek ve ağırlık merkezi daha değişken olabilir; dolu bir big-bag'in askı noktalarından düzgün asılmaması yükün taşıma sırasında sallanmasına yol açar. Bu yüzden big-bag taşımada uygun ataşman (askı çubuğu) kullanımı ve yükün dengeli asılması özellikle kontrol edilir.",
                    "Big-bag'lerin istiflenmesi de standart palet istiflemesinden farklı bir kararlılık gerektirir; alt sıradaki torbaların üst yükü güvenle taşıyıp taşımadığı depo yönetimiyle birlikte değerlendirilir.",
                ],
            },
            {
                baslik: "Silo üstü erişim talebi geldiğinde yönlendirme",
                paragraflar: [
                    "Silonun kendisine bakım veya erişim ihtiyacı bildirildiğinde, bu talebin forklift kapsamı dışında olduğunu net biçimde belirtiriz ve erişim türüne (sabit merdiven, personel yükseltme platformu) uygun bir uzman firmaya yönlendiririz.",
                    "Aynı sahada hem ürün taşıma hem silo erişimi ihtiyacı varsa, ürün taşıma tarafını biz üstleniriz; silo erişimi için elimizdeki saha bilgisini paylaşarak süreci hızlandırırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silonun üstüne çıkıp bakım yapabilir misiniz?",
                cevap: "Hayır, bu domain forklift ile sınırlıdır ve silo üstü erişim veya bakım hizmeti sunmuyoruz. Bu tür bir ihtiyacınız varsa sabit erişim ekipmanı veya personel yükseltme platformu konusunda uzman bir firmayla çalışmanızı öneririz.",
            },
            {
                soru: "Big-bag taşımak için özel bir ataşman mı gerekiyor?",
                cevap: "Genellikle evet; big-bag'in askı noktalarından düzgün asılması için uygun bir askı çubuğu ataşmanı kullanılır. Bu ataşman takıldığında forkliftin net kapasitesi değişebilir; yükünüzün ağırlığını ve big-bag tipini paylaşırsanız uygun ataşman ve kapasiteyi birlikte netleştiririz.",
            },
            {
                soru: "Hasat döneminde kısa süreli ek forklift kiralayabilir miyiz?",
                cevap: "Evet, tarım ürünü ihracatındaki mevsimsel yoğunluk için kısa süreli ek makine yaygın bir çözümdür. Tipik hasat döneminizi ve tahmini yük hacminizi paylaşırsanız ek kapasiteyi önceden planlarız; sakin dönemde filo aynı esneklikle küçültülür.",
            },
            {
                soru: "Çuvalları konteynere yüklerken hangi ölçüler önemli?",
                cevap: "İstif yüksekliği ve genişliği, konteynerin iç ölçüsüne göre depoda önceden hesaplanır; bu hesap yapılmazsa saha konteyner kapısında fark edilir. Ürün nemine ve ambalaj tipine göre istif yüksekliği ayrıca sınırlandırılabilir; bu sınırı depo yönetiminizle birlikte netleştiririz.",
            },
            {
                soru: "Ambalajı hassas ürünlerde forklift nasıl çalışıyor?",
                cevap: "Operatör çatal ucunun ambalajı delmemesine ve yükün aşırı sallanmadan taşınmasına özellikle dikkat eder. Hasarlı ambalaj tespit edilirse yük normal akıştan ayrılır, depo sorumlusuna bildirilir ve karar bekletmeden yeni talimatla devam edilir.",
            },
            {
                soru: "Kırsal veya sera sahasında zemin bozuksa forklift çalışabilir mi?",
                cevap: "Zemin durumuna bağlıdır; düzensiz veya sıkışmamış zeminde uygun lastik tipi (havalı/pnömatik) ve gerekiyorsa daha kompakt olmayan, dengeli bir makine sınıfı değerlendirilir. Saha fotoğrafı veya krokinizi paylaşırsanız zemine uygun makineyi birlikte belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tarım ürünü ihracatında çuval/big-bag taşımacılığı, konteyner iç ölçüsüne göre istifleme ve mevsimsel talep dalgalanması sektör standardı bilgilerdir. Silo üstü erişimin bu domainin kapsamı dışında olduğu ve yönlendirme yapıldığı firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Platformu — Bu Domainde Sunulmayan Bir Hizmet",
        giris:
            "Saha aydınlatma direği, elektrik hattı veya trafo bakımı gibi işler, yüksekte çalışma gerektiren ve bu amaçla tasarlanmış bir erişim platformu isteyen işlerdir; izmir-forklift.com'un filosu bu hizmeti karşılamaz. Liman geri sahası ve gümrüklü antrepo çevresinde çalıştığımız sahalarda zaman zaman bir aydınlatma direğinin veya elektrik panosunun bakımı için talep geliyor; bu talebi gizlemeden karşılamadığımızı belirtiyoruz çünkü forklift, bu tür bir bakım erişimi için tasarlanmamış bir makinedir. Bu sayfa, bu talebin neden kapsam dışı olduğunu ve doğru yönlendirmeyi anlatır.",
        maddeler: [
            {
                baslik: "Forklift bu iş için tasarlanmamıştır",
                metin: "Aydınlatma direği veya elektrik hattı bakımı, elektrik kesintisi prosedürü, izolasyon ve yüksekte çalışma sertifikası gerektiren ayrı bir uzmanlık alanıdır; forklift ne bu erişimi ne bu güvenlik prosedürünü karşılar.",
            },
            {
                baslik: "Bu talep sahalarımızda nasıl ortaya çıkıyor",
                metin: "Forklift kiraladığımız bir liman geri sahası veya antrepoda, aynı proje kapsamında bir aydınlatma direğinin lambası değişecek veya bir enerji panosu bakımı yapılacak olabilir. Bu, forkliftin karşılayabileceği bir iş değildir; enerji ve aydınlatma bakımı için tasarlanmış ayrı bir erişim ekipmanı ve sertifikalı ekip gerekir.",
            },
            {
                baslik: "Yönlendirme süreci",
                metin: "Böyle bir talep geldiğinde, direğin veya panonun yüksekliği ve konumu hakkında elimizdeki bilgiyi paylaşarak sizi enerji ve aydınlatma bakımı konusunda uzman bir firmaya yönlendiriyoruz.",
            },
            {
                baslik: "Aynı sahada koordinasyon",
                metin: "Forklift işimizle aynı sahada, aynı gün bir aydınlatma bakımı planlanıyorsa, forklift trafiğinin bakım ekibinin çalışma alanına girmemesi için saha koordinasyonunu birlikte sağlarız.",
            },
            {
                baslik: "Dürüst kapsam sınırı",
                metin: "Enerji ve aydınlatma bakım platformu hizmetini bu domainde sunmuyoruz. Sahanızda böyle bir ihtiyaç varsa, bu konuda uzman bir firmayla ayrı bir sözleşme kurmanızı öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift ile enerji/aydınlatma bakım platformu karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, bu domainin kapsamı ile enerji-aydınlatma bakımının gerektirdiği hizmeti karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Forklift (bu domain)", "Enerji/aydınlatma bakım platformu"],
                    satirlar: [
                        ["Ana görevi", "Yük taşıma, istifleme", "Elektrik hattı/direk bakım erişimi"],
                        ["Gerekli sertifika", "Forklift operatör belgesi", "Elektrik ve yüksekte çalışma sertifikası"],
                        ["Bu domaindeki rolü", "Ana hizmet", "Sunulmuyor"],
                        ["Yönlendirme", "—", "Uzman bakım firmasına"],
                    ],
                },
            },
            {
                baslik: "Liman ve antrepo sahasında bu talebin ortaya çıktığı durumlar",
                paragraflar: [
                    "Geri saha aydınlatma direkleri veya antrepo çatısındaki enerji hattı zamanla bakım gerektirir; bu ihtiyaç genellikle forklift kiraladığımız aynı sahada, ayrı bir proje olarak ortaya çıkar.",
                    "Bu iki iş aynı sahada, aynı gün planlanabilir ama aynı ekipmanla karşılanamaz; forklift malzeme ve genel saha işlerini yürütürken, enerji bakımı sertifikalı bir ekip ve uygun erişim platformu gerektirir.",
                ],
            },
            {
                baslik: "Neden bu riski almıyoruz",
                paragraflar: [
                    "Elektrik hattı veya enerji panosuna yakın çalışmak, izolasyon ve kesinti prosedürü bilmeyen bir ekip için ciddi risk taşır. Forklift operatörümüz bu prosedürler konusunda eğitimli değildir ve makinemiz bu erişim için tasarlanmamıştır.",
                    "Bu nedenle enerji ve aydınlatma bakımı talebini her koşulda uzman bir firmaya yönlendiriyoruz; kendi kapasitemizin dışındaki bir işi üstlenip saha güvenliğini riske atmıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aydınlatma direğinin lambasını değiştirebilir misiniz?",
                cevap: "Hayır, bu domain forklift ile sınırlıdır ve enerji-aydınlatma bakım hizmeti sunmuyoruz. Bu iş için yüksekte çalışma ve elektrik güvenliği konusunda uzman bir firmayla çalışmanızı öneririz.",
            },
            {
                soru: "Forkliftinizle direğe erişip bakım yapılabilir mi?",
                cevap: "Hayır, forklift bu tür bir erişim için tasarlanmamıştır ve elektrik kesinti/izolasyon prosedürleri konusunda operatörümüz eğitimli değildir. Bu riski almıyoruz; sahanızda böyle bir ihtiyaç varsa uzman bir bakım firmasına yönlendiririz.",
            },
            {
                soru: "Forklift işimizle aynı gün enerji bakımı da planlanabilir mi?",
                cevap: "Koordinasyon açısından evet; forklift trafiğinin bakım ekibinin çalışma alanına girmemesi için saha planını birlikte yaparız. Ancak bakım işinin kendisini biz gerçekleştirmiyoruz, bunun için uzman bir firmayla ayrıca çalışmanız gerekir.",
            },
            {
                soru: "Hangi firmayı önerirsiniz?",
                cevap: "Belirli bir firma adı vermiyoruz; enerji ve aydınlatma bakımı konusunda uzman, gerekli sertifikalara sahip bir firmayla çalışmanızı öneririz. Direğin veya panonun konumu hakkında elimizdeki saha bilgisini paylaşarak sürecinizi hızlandırabiliriz.",
            },
            {
                soru: "Bu hizmeti neden filonuza eklemiyorsunuz?",
                cevap: "Elektrik ve yüksekte çalışma, forklift operatörlüğünden tamamen farklı bir sertifikasyon ve güvenlik prosedürü gerektirir. Bunu ana iş kolumuz gibi sunmak hem yanıltıcı olur hem de saha güvenliğini riske atar.",
            },
            {
                soru: "Küçük bir bakım işi için de mi yönlendiriyorsunuz?",
                cevap: "Evet, işin büyüklüğü fark etmez. Elektrik hattına veya enerji panosuna yakın her çalışma, uygun sertifika ve prosedür gerektirir; küçük görünen bir iş bile bu riski taşır. Bu yüzden her ölçekte uzman bir firmaya yönlendiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Elektrik hattı ve enerji ekipmanı bakımının izolasyon/kesinti prosedürü ile sertifikalı erişim gerektirdiği sektör standardı bilgidir. Bu domainin forklift ile sınırlı olduğu ve enerji-aydınlatma bakımı sunmadığı firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü / Operatörsüz Forklift Kiralama: Liman ve Gümrüklü Saha Giriş Yetkisi",
        giris:
            "Liman geri sahası, gümrüklü antrepo veya hava kargo terminalinde operatörlü mü yoksa operatörsüz mü forklift kiralanacağı sorusu, çoğu sahada beklenenden farklı bir yerden cevaplanır: makinenin kapasitesinden değil, sahaya giriş yetkisinden. Bu tür kontrollü alanlara giren her personelin kendi güvenlik kaydı, bazen özel bir giriş kartı ve saha oryantasyonu olması gerekir; işletmenin kendi personeli için bu süreci yürütmesi zaman alabilir, özellikle kısa süreli veya proje bazlı ihtiyaçlarda. Operatörlü kiralama, bu süreci baştan basitleştirir çünkü operatör bizim tarafımızdan sağlanır ve saha giriş prosedürüne önceden hazırlanır. Bu sayfa, operatörlü ve operatörsüz modelin liman ve gümrük çevresinde nasıl işlediğini, hangi durumda hangisinin tercih edildiğini ve saha giriş yetkisinin bu kararı nasıl etkilediğini anlatır.",
        maddeler: [
            {
                baslik: "Saha giriş yetkisi, operatör kararının ilk belirleyicisidir",
                metin: "Liman geri sahası, gümrüklü antrepo ve hava kargo terminali gibi kontrollü alanlara giren her personel için sahanın kendi güvenlik ve giriş prosedürü geçerlidir; bazı sahalarda bu, önceden başvurulan bir giriş kartı, bazılarında ise günlük ziyaretçi kaydı şeklindedir. İşletmenin kendi operatörü bu sahaya daha önce girmemişse, kayıt sürecinin tamamlanması zaman alabilir; operatörlü kiralamada bu süreç bizim tarafımızdan önceden yürütülür.",
            },
            {
                baslik: "Operatörlü model: belgeli personel ve saha oryantasyonu birlikte gelir",
                metin: "Operatörlü kiralamada makineyle birlikte MYK veya MEB onaylı yeterlilik belgesine sahip bir operatör sağlanır; bu operatör, teslimat öncesi sahanın giriş prosedürüne göre kayıt altına alınır ve saha oryantasyonunu (yaya yolu, kontrol noktası, acil durum prosedürü) alarak işe başlar. Kısa süreli veya tek seferlik liman/gümrük işlerinde bu model, işletmenin kendi personeli için giriş kartı çıkarma sürecini beklemeden işe başlamayı sağlar.",
            },
            {
                baslik: "Operatörsüz model: işletmenin kendi belgeli personeli sahaya zaten girebiliyorsa",
                metin: "İşletmenin kendi forklift operatörü sahaya zaten kayıtlı ve düzenli giriyorsa, operatörsüz kiralama (yalnız makine) daha esnektir; işletme kendi vardiya düzenine göre makineyi kullanır. Bu modelde operatörün geçerli yeterlilik belgesine sahip olması ve sahanın güvenlik kuralına uyması sözleşme öncesi teyit edilir.",
            },
            {
                baslik: "Proje bazlı ve dönemsel ihtiyaçlarda model değişebilir",
                metin: "Uzun süreli, düzenli bir sevkiyat işinde işletme genellikle kendi personelini sahaya kayıtlı hâle getirir ve operatörsüz modele geçer; kısa süreli, tek seferlik veya beklenmedik bir yoğunluk işinde ise operatörlü model, giriş kaydı beklemeden hızlı başlamayı sağladığı için tercih edilir. Bu geçiş, sabit bir kural değil, işin süresine ve mevcut personel durumuna göre birlikte değerlendirilir.",
            },
            {
                baslik: "Belgesiz kullanım hem yasal hem fiili risktir",
                metin: "Hangi model seçilirse seçilsin, forklift kullanan personelin geçerli operatör yeterlilik belgesine sahip olması zorunludur; belgesiz kullanım hem denetimde hem sahada ciddi risk taşır. Operatörlü modelde bu belge bizim tarafımızdan garanti edilir; operatörsüz modelde işletmenin kendi personelinin belgesi teslimat öncesi kontrol edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sahaya göre operatörlü/operatörsüz model tercihi",
                paragraflar: [
                    "Aşağıdaki tablo, farklı saha ve iş sürelerinde hangi modelin genellikle daha pratik olduğunu özetler. Kesin karar sahanızın giriş kuralı ve personel durumuyla birlikte verilir.",
                ],
                tablo: {
                    basliklar: ["Durum", "Önerilen model", "Neden", "Kritik kontrol"],
                    satirlar: [
                        ["Kısa süreli/tek seferlik liman işi", "Operatörlü", "Giriş kaydı beklemeden başlama", "Operatör saha oryantasyonu"],
                        ["Uzun süreli, düzenli sevkiyat", "Operatörsüz", "İşletme kendi vardiyasını yönetir", "Personel belgesi ve saha kaydı"],
                        ["Beklenmedik yoğunluk (ek makine)", "Operatörlü", "Hızlı devreye alma", "Operatör mevcudiyeti"],
                        ["Gümrüklü antrepo, sabit personel", "Operatörsüz", "Personel zaten sahaya kayıtlı", "Belge güncelliği"],
                    ],
                },
            },
            {
                baslik: "Saha giriş kaydı ile operatör ataması aynı anda planlanır",
                paragraflar: [
                    "Operatörlü kiralamada, operatörün sahaya giriş kaydı ile makinenin teslimatı aynı zaman çizelgesinde planlanır; operatör kayıtsız sahaya girmeye çalışmaz, kayıt tamamlanmadan işe başlamaz. Bu, özellikle ilk kez çalıştığımız gümrüklü sahalarda ekstra bir gün gerektirebilir; bu süre teklif aşamasında müşteriye açıkça bildirilir.",
                    "Sahanın kendi güvenlik biriminden önceden bilgi almak, hem operatörün hem taşıyıcının kapıda beklenmedik bir gecikme yaşamasını önler; bu adım, teslimat planının ayrılmaz bir parçasıdır.",
                ],
            },
            {
                baslik: "Operatör değişikliği ve vardiya devri",
                paragraflar: [
                    "Operatörlü kiralamada, operatör değişikliği gerekirse (hastalık, izin gibi) yeni operatörün de aynı saha giriş kaydından geçmesi gerekir; bu süreç mümkün olduğunca önceden planlanır ki sahada operatörsüz makine beklemesi yaşanmasın.",
                    "Vardiya devrinde yeni operatör günlük makine kontrolünü tekrarlar ve sahanın güncel kurallarını (varsa değişen trafik düzeni) brifingle alır; bu devir hem güvenliği hem sahadaki sürekliliği korur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kısa süreli bir liman işi için operatörlü mü operatörsüz mü tercih etmeliyiz?",
                cevap: "Kısa süreli veya tek seferlik işlerde operatörlü model genellikle daha pratiktir çünkü operatörün saha giriş kaydı bizim tarafımızdan önceden hazırlanır ve işletmenizin kendi personeli için giriş kartı çıkarma sürecini beklemeden işe başlanır. İşin süresi uzarsa veya tekrarlanırsa operatörsüz modele geçiş değerlendirilebilir.",
            },
            {
                soru: "Operatörümüz sahaya daha önce hiç girmedi, operatörsüz kiralama yapabilir miyiz?",
                cevap: "Yapılabilir, ancak operatörünüzün sahanın giriş prosedüründen geçmesi gerekir ve bu süreç ilk seferde zaman alabilir. Bu süreyi işin başlangıcına dahil etmenizi öneririz; alternatif olarak ilk teslimatı operatörlü modelle başlatıp, personeliniz kayıtlı hâle geldikten sonra operatörsüz modele geçmek de değerlendirilebilir.",
            },
            {
                soru: "Operatörlü kiralamada operatör sahanın güvenlik kurallarını biliyor mu?",
                cevap: "Operatör, teslimat öncesi sahanın giriş prosedürüne göre kayıt altına alınır ve saha oryantasyonunu (yaya yolu, kontrol noktası, acil durum prosedürü) alarak işe başlar. İlk kez çalıştığımız bir sahada bu oryantasyon süreci teslimat planına dahil edilir.",
            },
            {
                soru: "Gümrüklü antrepoda operatörsüz kiralama için hangi belgeler gerekiyor?",
                cevap: "İşletmenizin kendi personelinin geçerli operatör yeterlilik belgesine (MYK veya MEB onaylı) sahip olması ve sahanın güvenlik kuralına uygun kayıtlı olması gerekir. Bu belgeler sözleşme öncesi kontrol edilir; belgesiz kullanım hem yasal hem fiili risk taşıdığı için kiralama bu kontrol tamamlanmadan başlamaz.",
            },
            {
                soru: "Operatör değişmesi gerekirse (izin, hastalık) süreç nasıl işliyor?",
                cevap: "Yeni operatörün de aynı saha giriş kaydından geçmesi gerekir; bu süreç mümkün olduğunca önceden planlanır ki sahada operatörsüz makine beklemesi yaşanmasın. Ani bir değişiklik gerekirse sahanın güvenlik birimiyle hızlı kayıt imkânı olup olmadığı kontrol edilir.",
            },
            {
                soru: "Uzun süreli sevkiyat işinde operatörlü modelden operatörsüz modele geçebilir miyiz?",
                cevap: "Evet, işletmenizin kendi personeli sahaya kayıtlı hâle geldiğinde ve gerekli belgeye sahip olduğunda operatörsüz modele geçiş yapılabilir. Bu geçiş, sözleşme koşulları ve kalan süre birlikte değerlendirilerek planlanır; ani bir kesinti yaşanmaması için geçiş tarihi önceden netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kontrollü alanlara (liman, gümrüklü antrepo, hava kargo terminali) giriş için ayrı güvenlik kaydı gerekmesi ve MYK/MEB operatör yeterlilik belgesi mevzuat ve sektör standardı bilgisidir. Operatörlü/operatörsüz model tercihinin saha giriş yetkisine göre yapılması firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Filo Yönetimi: Liman Geri Sahası, Gümrüklü Antrepo ve Hava Kargo Terminali Arasında Forklift Planlaması",
        giris:
            "İzmir'in liman ve hava kargo altyapısına bağlı çalışan bazı işletmelerin forklift ihtiyacı tek bir sahada değil, birden fazla noktada aynı anda ortaya çıkar — liman geri sahasındaki bir antrepo, gümrüklü bir depo ve hava kargo terminali çevresindeki bir tesis aynı işletmeye ait olabilir. Bu durumda forklift kiralama kararı, tek bir makinenin kapasitesinden çok, hangi sahada hangi makinenin ne zaman gerektiğinin doğru sıralanmasıdır. Her sahanın kendi giriş kuralı, trafik yoğunluğu ve iş temposu farklı olduğu için, çok noktalı bir filo planı tek bir şablonla kurulamaz. Bu sayfa, birden fazla liman/gümrük/terminal sahasına hizmet veren işletmeler için forklift filosunun nasıl planlandığını, hangi sahanın hangi önceliğe sahip olduğunu ve bir sahadaki aksamanın diğerine nasıl yansımaması gerektiğini anlatır.",
        maddeler: [
            {
                baslik: "Her sahanın kendi giriş kuralı, filo çizelgesinin ilk girdisidir",
                metin: "Liman geri sahası, gümrüklü antrepo ve hava kargo terminali, birbirinden farklı giriş kayıt süreçlerine sahiptir. Birden fazla sahaya hizmet veren bir filo planlanırken, her sahanın kendi giriş süresi ve kısıtı ayrı ayrı hesaba katılır; bir sahadaki hızlı giriş süreci diğerine genellenmez.",
            },
            {
                baslik: "Sahalar arası makine transferi, boş sürüş kaybı yaratabilir",
                metin: "Bir makineyi bir sahadan diğerine taşımak, o sürede her iki sahanın da makinesiz kalması demektir; bu transfer süresi görünmez bir kayıptır ve filo planında ayrı bir kalem olarak hesaplanmalıdır. Sık transfer gerektiren bir düzen yerine, her sahada asgari bir çekirdek makine bulundurmak, transfer kaybını azaltır.",
            },
            {
                baslik: "Sahaların iş temposu farklıysa öncelik sırası önceden belirlenir",
                metin: "Liman geri sahası gemi yanaşma programına, hava kargo terminali uçuş yoğunluğuna, gümrüklü antrepo ise muayene takvimine göre iş temposunu değiştirir. Bu üç ritim aynı anda yoğunlaştığında hangi sahanın önceliğe sahip olduğu önceden netleştirilir; sahada anlık karar verilmez.",
            },
            {
                baslik: "Ortak operatör havuzu, sahalar arası esneklik sağlar",
                metin: "Birden fazla sahaya hizmet veren bir işletme, her sahada sabit bir operatör yerine, saha giriş yetkisine sahip ortak bir operatör havuzu kurabilir; bu, bir sahadaki beklenmedik yoğunlukta diğer sahadan operatör kaydırmayı mümkün kılar. Bu esneklik ancak operatörlerin ilgili sahaların giriş kaydından geçmiş olmasıyla çalışır.",
            },
            {
                baslik: "Sahalar arası kayıt ve devir tek bir sistemde tutulur",
                metin: "Her sahadaki makinenin durumu (yakıt/enerji, hasar, sayaç) ayrı ayrı kaydedilse de, filo genelinde tek bir devir kaydı sistemi kullanılması, hangi makinenin hangi sahada, ne zamandır çalıştığını görünür kılar. Bu görünürlük, bakım ve iade planlamasını sahalar arası tutarlı hâle getirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çok noktalı filo planlamasında saha tipi ve öncelik",
                paragraflar: [
                    "Aşağıdaki tablo, üç farklı saha tipinin iş temposunu belirleyen değişkeni ve filo planında bu sahanın nasıl ele alındığını özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Temponun belirleyicisi", "Filo yaklaşımı", "Kritik risk"],
                    satirlar: [
                        ["Liman geri sahası", "Gemi yanaşma programı", "Çekirdek + dönemsel ek makine", "Yığılma günü makinesiz kalma"],
                        ["Gümrüklü antrepo", "Muayene/işlem takvimi", "Sabit çekirdek makine", "Arızada randevu kaçırma"],
                        ["Hava kargo terminali", "Uçuş yoğunluğu", "Akülü, kompakt, çekirdek", "Şarj/enerji beklemesi"],
                        ["Sahalar arası transfer", "İşletmenin kendi programı", "Asgari transfer, ortak operatör havuzu", "Görünmez boş sürüş kaybı"],
                    ],
                },
            },
            {
                baslik: "Üç sahanın aynı anda yoğunlaşması senaryosu",
                paragraflar: [
                    "Gemi yanaşması, uçuş yoğunluğu ve gümrük muayene takvimi bazen aynı haftaya, hatta aynı güne denk gelebilir. Bu durumda tek bir ortak filo havuzundan üç sahayı aynı anda karşılamak mümkün olmayabilir; öncelik sırası, her sahanın kaçırdığı pencerenin bedeline göre önceden belirlenir — örneğin kaçan bir gemi randevusu genellikle gün(ler) süren bir bekleme yaratırken, terminaldeki bir gecikme daha kısa sürede telafi edilebilir.",
                    "Bu öncelik sırası bir kere kurulduğunda, benzer yoğunluk tekrarlandığında yeniden tartışılmaz; işletme ve bizim aramızda önceden anlaşılmış bir kural olarak uygulanır.",
                ],
            },
            {
                baslik: "Sahalar arası ortak devir kaydının faydası",
                paragraflar: [
                    "Her sahada ayrı ayrı tutulan devir kayıtları, bir işletmenin filo genelindeki toplam kullanım ve bekleme oranını görmesini zorlaştırır. Sahalar arası tek bir devir kaydı sistemi kullanıldığında, hangi sahanın makineyi daha yoğun kullandığı, hangi sahada bekleme fazla olduğu karşılaştırılabilir hâle gelir.",
                    "Bu karşılaştırma, bir sonraki dönem filo boyutlandırmasında hangi sahaya ek makine, hangi sahaya daha az makine ayrılacağı kararını doğrulanmış veriyle destekler; tahmine dayalı genelleme yapılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Liman, antrepo ve terminal sahalarımız için tek bir filo mu, yoksa ayrı ayrı mı planlıyorsunuz?",
                cevap: "Her sahanın kendi giriş kuralı ve iş temposu olduğu için filo tek bir şablonla kurulmaz; her saha için ayrı çekirdek makine sayısı belirlenir, ancak operatör havuzu ve devir kayıt sistemi ortak tutulur. Bu, hem saha bazlı özelleşmeyi hem filo genelinde görünürlüğü sağlar.",
            },
            {
                soru: "Bir sahadaki makineyi diğerine transfer etmek mantıklı mı?",
                cevap: "Sık transfer, her iki sahanın da geçici olarak makinesiz kalmasına yol açtığı için genellikle tercih edilmez; her sahada asgari bir çekirdek makine bulundurmak daha güvenilirdir. Transfer yalnız beklenmedik ve kısa süreli bir yoğunlukta, transfer süresi filo planına dahil edilerek değerlendirilir.",
            },
            {
                soru: "Üç sahamız aynı hafta yoğunlaşırsa hangisine öncelik veriyorsunuz?",
                cevap: "Öncelik sırası önceden, her sahanın kaçırdığı pencerenin bedeline göre belirlenir — örneğin kaçan bir gemi randevusu genellikle günler süren bir bekleme yaratırken, terminaldeki bir gecikme daha kısa sürede telafi edilebilir. Bu sıralama işletmenizle önceden netleştirilir, yoğunluk anında tartışılmaz.",
            },
            {
                soru: "Ortak operatör havuzu nasıl çalışıyor?",
                cevap: "Operatörler, hizmet verdiğimiz sahaların giriş kaydından geçmiş olarak bir havuzda tutulur; bir sahada beklenmedik yoğunluk olduğunda, ilgili sahaya kayıtlı bir operatör diğer sahadan kaydırılabilir. Bu esneklik ancak operatörün o sahanın giriş yetkisine sahip olmasıyla mümkündür; yetkisiz operatör hiçbir sahaya kaydırılmaz.",
            },
            {
                soru: "Sahalar arası devir kaydını nasıl tutuyorsunuz?",
                cevap: "Her sahadaki makinenin durumu ayrı ayrı kaydedilir, ancak tüm kayıtlar filo genelinde tek bir sistemde toplanır; bu, hangi makinenin hangi sahada ne zamandır çalıştığını ve kullanım/bekleme oranını görünür kılar. Bu görünürlük bakım ve iade planlamasını sahalar arası tutarlı hâle getirir.",
            },
            {
                soru: "Yeni bir saha eklemek istiyoruz, mevcut filo planını nasıl güncelliyorsunuz?",
                cevap: "Yeni sahanın giriş kuralı, iş temposunu belirleyen değişken ve tipik yoğunluk saatleri önce netleştirilir; ardından bu saha mevcut filo planına, öncelik sırası ve operatör havuzu güncellenerek dahil edilir. Mevcut sahaların hizmet düzeyi, yeni saha eklenirken bozulmayacak şekilde planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Liman, gümrüklü antrepo ve hava kargo terminalinin farklı giriş kuralları ve iş temposu değişkenleri (gemi yanaşma, uçuş yoğunluğu, muayene takvimi) kamuya açık, sektör standardı bilgilerdir. Çok sahalı öncelik sıralaması, ortak operatör havuzu ve tek devir kaydı sistemi firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Açık Saha Forklift Kiralama: Liman Geri Sahasında Zemin ve Hava Koşulu",
        giris:
            "Liman geri sahasının açık stok alanları, depo içindeki düzgün betondan farklı bir zemin gerçeğiyle çalışır: sıkıştırılmış çakıl, kısmen asfaltlı ama zamanla bozulmuş yüzeyler, yağış sonrası su tutan çukurlar ve mevsime göre değişen zemin sertliği. Bu koşullarda forklift seçimi, tonaj kadar lastik tipi, zemin taşıma kapasitesi ve hava koşuluna dayanıklılık üzerinden yapılır. Depo içi işlerde standart olan dolgu (solid) lastik, açık ve düzensiz sahada erken aşınır veya yeterli tutunmayı sağlamaz; bu sahalarda havalı (pnömatik) lastik ve daha sağlam süspansiyon tercih edilir. Bu sayfa, liman geri sahası ve benzer açık stok alanlarındaki zor zemin koşullarının forklift kararını nasıl şekillendirdiğini, yağışlı dönemde ve gece çalışmada nelere dikkat edildiğini anlatır.",
        maddeler: [
            {
                baslik: "Açık sahada lastik tipi, depo içinden farklı bir mantıkla seçilir",
                metin: "Depo içi düz betonda dolgu (solid) lastik dayanıklılık ve kesin manevra sağlarken, açık ve düzensiz zeminde bu lastik erken aşınır ve sürüş konforu düşer. Liman geri sahası gibi açık stok alanlarında havalı (pnömatik) lastik, düzensiz yüzeyde daha iyi tutunma ve amortisman sağlar; ancak havalı lastik patlama riskine karşı da ayrıca değerlendirilmelidir, özellikle sahada keskin döküntü veya hurda malzeme varsa.",
            },
            {
                baslik: "Zemin taşıma kapasitesi, ağır tonajlı makinede öncelikli kontrol noktasıdır",
                metin: "Ağır tonajlı bir forklift veya reach stacker sınıfı makinenin aks yükü, sıkıştırılmamış veya yağış sonrası yumuşamış bir zeminde saplanma riskine yol açabilir. Bu risk, özellikle yeni açılan veya geçici stok alanlarında önceden değerlendirilir; gerekiyorsa geçici plaka veya zemin güçlendirme önerilir.",
            },
            {
                baslik: "Yağışlı dönemde drenaj ve çalışma programı birlikte planlanır",
                metin: "İzmir'in yağışlı aylarında açık saha zemini su tutabilir; bu dönemde çalışma programı, zeminin en kuru olduğu saatlere göre ayarlanabilir veya drenajı iyi olan bölümler öncelikli kullanılır. Su birikintisi olan bölgelerde makine geçişi, zemin altının görünmeyen yumuşaklığı nedeniyle ayrıca dikkat gerektirir.",
            },
            {
                baslik: "Gece çalışmasında aydınlatma ve görüş koşulu",
                metin: "Açık sahada gece çalışması, sahanın kendi aydınlatmasına ve makinenin üzerindeki aydınlatma donanımına bağlıdır; liman geri sahalarının çoğunda genel saha aydınlatması bulunur ama makine çevresindeki yakın görüş operatörün kendi değerlendirmesine kalır. Bu koşul, gece vardiyası çalışan sahalarda teslimat öncesi ayrıca kontrol edilir.",
            },
            {
                baslik: "Mevsime göre zemin sertliği değişebilir, sabit bir makine sınıfı garanti edilmez",
                metin: "Yaz aylarında sert ve kuru olan bir zemin, kış aylarında yağışla birlikte tamamen farklı bir taşıma kapasitesine dönüşebilir. Uzun süreli kiralamalarda bu mevsimsel değişim önceden konuşulur; gerekiyorsa kış döneminde lastik tipi veya makine sınıfı gözden geçirilir, yaz koşulundaki makine kışın aynı sahada değişmeden kullanılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Açık saha zemin tipine göre lastik ve makine yönelimi",
                paragraflar: [
                    "Aşağıdaki tablo, liman geri sahası ve benzer açık stok alanlarında yaygın zemin tiplerini ve bunlara uygun lastik/makine yönelimini özetler. Kesin seçim gerçek zemin durumu ve yük tipiyle doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Önerilen lastik", "Risk", "Kritik kontrol"],
                    satirlar: [
                        ["Sıkıştırılmış çakıl, kuru", "Havalı (pnömatik)", "Orta düzensizlik", "Zemin sertliği"],
                        ["Bozuk asfalt/beton", "Havalı, sağlam süspansiyon", "Çukur, kot farkı", "Görünmeyen çukur"],
                        ["Yağış sonrası yumuşamış", "Havalı, geniş taban", "Saplanma", "Zemin altı yumuşaklığı"],
                        ["Döküntü/hurda içeren saha", "Havalı, patlamaya dayanıklı seçenek", "Delinme", "Rota temizliği"],
                    ],
                },
            },
            {
                baslik: "Yağışlı dönemde açık saha çalışma disiplini",
                paragraflar: [
                    "İzmir'in yağışlı aylarında liman geri sahasının açık stok alanlarında zemin, görünürde kuru olsa bile altta yumuşamış olabilir; bu durum özellikle ağır tonajlı makinelerde saplanma riskini artırır. Bu dönemde çalışma programı, mümkünse zeminin en kuru olduğu saatlere göre ayarlanır veya drenajı iyi olan bölümler öncelikli kullanılır.",
                    "Su birikintisi olan noktalarda makine geçişinden önce zeminin görsel kontrolü yapılır; sürekli su tutan bir bölge varsa, o bölge geçici olarak stok alanı dışına alınır ve alternatif bir alan kullanılır.",
                ],
            },
            {
                baslik: "Mevsimsel lastik ve makine gözden geçirmesi",
                paragraflar: [
                    "Uzun süreli açık saha kiralamalarında, yaz ve kış koşulları arasındaki zemin farkı sözleşme başında konuşulur. Yaz aylarında sert zeminde iyi çalışan bir lastik tipi, kış yağışlarıyla birlikte yetersiz kalabilir; bu durumda lastik değişimi veya makine sınıfı gözden geçirmesi önceden planlanır.",
                    "Bu gözden geçirme, sahanın geçmiş yıllardaki yağış deseni ve zemin davranışı biliniyorsa daha isabetli yapılır; işletmenin kendi gözlemleri bu planlamaya dahil edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Liman geri sahamızda zemin bozuk, hangi lastik tipini önerirsiniz?",
                cevap: "Açık ve düzensiz zeminde havalı (pnömatik) lastik, depo içi standardı olan dolgu lastikten daha iyi tutunma ve amortisman sağlar. Sahada döküntü veya hurda malzeme varsa patlamaya karşı daha dayanıklı seçenekler değerlendirilir. Zemin fotoğrafı veya krokinizi paylaşırsanız uygun lastik tipini birlikte netleştiririz.",
            },
            {
                soru: "Yağışlı dönemde ağır tonajlı makine sahaya saplanır mı?",
                cevap: "Risk vardır ve bu, zeminin yağış sonrası ne kadar yumuşadığına bağlıdır. Bu dönemde çalışma programını zeminin en kuru olduğu saatlere göre ayarlamayı veya drenajı iyi olan bölümleri öncelikli kullanmayı öneririz; gerekiyorsa geçici plaka veya zemin güçlendirme değerlendirilir.",
            },
            {
                soru: "Yaz aylarında kullandığımız makine kışın da aynı şekilde çalışır mı?",
                cevap: "Her zaman değil; yaz aylarında sert olan bir zemin kışın yağışla birlikte farklı bir taşıma kapasitesine dönüşebilir. Uzun süreli kiralamalarda bu mevsimsel değişimi önceden konuşuruz; gerekirse kış döneminde lastik tipi veya makine sınıfı gözden geçirilir.",
            },
            {
                soru: "Gece vardiyasında açık sahada çalışma güvenli mi?",
                cevap: "Sahanın genel aydınlatması ve makinenin kendi aydınlatma donanımı birlikte değerlendirilir. Liman geri sahalarının çoğunda genel saha aydınlatması bulunur, ancak makine çevresindeki yakın görüş ayrıca kontrol edilir; bu kontrol gece vardiyası çalışan sahalarda teslimat öncesi yapılır.",
            },
            {
                soru: "Sahada su birikintisi var, makine oradan geçebilir mi?",
                cevap: "Su birikintisi altındaki zemin görünenden daha yumuşak olabilir; bu yüzden geçişten önce görsel kontrol yapılır. Sürekli su tutan bir bölge varsa, o bölgeyi geçici olarak stok alanı dışına almanızı ve alternatif bir alan kullanmanızı öneririz.",
            },
            {
                soru: "Zor zeminde çalışacak makine ile depo içi makine aynı olabilir mi?",
                cevap: "Genellikle önerilmez; depo içi standardı olan dolgu lastik açık ve düzensiz zeminde erken aşınır, açık saha standardı olan havalı lastik ise düz betonda gereksiz yumuşaklık yaratabilir. İki ortam için görev ayrımı yapılması, hem makine ömrü hem performans açısından daha uygundur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Dolgu/havalı lastik ayrımının zemin tipine göre yapılması, ağır tonajlı makinede zemin taşıma kapasitesi riski ve İzmir'in yağışlı dönem koşulları sektör standardı ve kamuya açık iklim bilgisidir. Mevsimsel lastik/makine gözden geçirmesi ve yağışlı dönem çalışma programı firma pratiğimizdir. Tesis adı veya rakam uydurulmamıştır.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Makaslı Platform Kiralama: Gümrüklü Antrepo ve Hava Kargo Deposunda İç Mekân Yükseklik Erişimi",
        giris:
            "Liman geri sahası, gümrüklü antrepo ve hava kargo terminalinde çalışan filomuz uzun süredir yalnız yük elleçleme üzerine kuruluydu; ama aynı depoların içinde forkliftin çözemediği farklı bir ihtiyaç sürekli tekrarlanıyordu — raf üstü envanter kontrolü, çatı altı aydınlatma bakımı, sprinkler ve yangın hattı denetimi, kamera veya anten montajı gibi personelin bizzat yükseğe çıkması gereken işler. Forklift bu işler için uygun bir makine değildir; çatalları üzerinde yük taşımak üzere tasarlanmıştır ve personeli güvenle sabit bir noktaya çıkarmaz. Bu ihtiyacı fark ettikten sonra filomuza makaslı platform ekledik — aynı liman ve hava kargo müşteri tabanına, aynı sahalarda, tamamlayıcı bir hizmet olarak sunuyoruz. Makaslı platform, sepetini dikey olarak yukarı kaldırır ve geniş, düz bir çalışma tabanı sağlar; bu özellik onu antrepo içindeki raf üstü ve tavan altı işler için forkliftten çok daha uygun kılar. Bu sayfa, gümrüklü depo ve hava kargo tesisinde makaslı platformun hangi işlerde kullanıldığını, tavan yüksekliğine göre sınıf seçimini, zemin tipinin lastik kararını nasıl etkilediğini ve aynı sahada forklift operasyonuyla nasıl çakışmadan yürütüldüğünü anlatır.",
        maddeler: [
            {
                baslik: "Forklift yük taşır, makaslı platform personeli yükseğe çıkarır — iş bölümü net",
                metin: "Forklift, çatalları üzerindeki paleti veya konteyner içeriğini kaldırıp taşımak için tasarlanmıştır; dengesini karşı ağırlıkla kurar ve sepetine personel bindirilmesi mevzuata aykırıdır. Makaslı platform ise tam tersi bir görevi yerine getirir: sepetinde bir veya birkaç kişiyi güvenle, düz bir çalışma tabanında yukarı taşır. Aynı antrepoda her iki ihtiyaç da varsa — örneğin bir palet rafa kaldırılırken aynı gün rafın üst gözündeki bir ürün sayılacaksa — iki makine ayrı görevlerle birlikte çalışır, biri diğerinin yerine geçmez.",
            },
            {
                baslik: "Tavan yüksekliği, platform sınıfını belirleyen ilk veridir",
                metin: "Gümrüklü depo ve hava kargo hangarlarının tavan yüksekliği genellikle sabit bir bantta durur ve bu ölçü, hangi makaslı platform sınıfının işi güvenle görebileceğini belirler. Çalışma yüksekliği hesaplanırken yalnızca sepet tabanının kotu değil, üzerine çıkan kişinin boyu ve elini uzattığı mesafe de payına eklenir; bu pay hesaba katılmadan seçilen bir makine, hedef noktaya birkaç santim yetişemeyebilir. Bu yüzden platform sınıfı, sahaya gitmeden önce gerçek tavan ölçüsü paylaşılarak netleştirilir.",
            },
            {
                baslik: "Antrepo zemini, lastik tipini forklift sahasından farklı bir mantıkla belirler",
                metin: "Gümrüklü depo ve hava kargo tesislerinin çoğu epoksi kaplı veya perdahlı beton zemine sahiptir; bu yüzeylerde standart siyah lastik iz bırakabilir ve bu iz hem görsel hem de bazı sertifikalı depo standartlarında kabul edilmez bir durumdur. Bu nedenle iç mekân makaslı platformlarında iz bırakmayan (beyaz dolgu) lastik tercih edilir. Yükleme kapısı çevresindeki kot farkları veya rampa geçişleri varsa, bu noktalar platform teslim edilmeden önce ayrıca değerlendirilir.",
            },
            {
                baslik: "Akülü tahrik, kapalı alan ve gece operasyonu için varsayılan tercihtir",
                metin: "Antrepo ve hava kargo hangarı gibi kapalı alanlarda egzoz gazı çıkarmayan akülü makaslı platform tercih edilir; bu hem havalandırma yükünü azaltır hem de ses seviyesini düşük tutar. Hava kargo terminalinin gece vardiyasında sessiz çalışma özellikle önemlidir, çünkü aynı hangarda o saatte başka operasyonlar da sürebilir. Şarj döngüsü, vardiya uzunluğuna göre önceden planlanır; tam vardiya boyunca kesintisiz kullanım öngörülüyorsa yedek batarya veya rotasyonlu şarj değerlendirilir.",
            },
            {
                baslik: "Dar koridor ve raf arası geçiş, saha planı paylaşılmadan varsayılmaz",
                metin: "Gümrüklü depoların raf koridor genişliği sabit bir standarda göre kurulur ve bu ölçü, hangi makaslı platform şasesinin koridora sığacağını belirler. Geniş tabanlı bir platform dar bir koridora giremez, aşırı dar bir şase ise stabilite payını düşürür. Bu yüzden koridor genişliği ve raf düzeni, makine gönderilmeden önce netleştirilir; sahada tahminle karar verilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân yükseklik erişim senaryosuna göre platform sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, gümrüklü antrepo ve hava kargo tesisinde en sık karşılaşılan dört makaslı platform senaryosunu ve her birinde öncelikli kontrol noktasını özetler. Kesin sınıf, gerçek tavan yüksekliği ve koridor ölçüsüyle doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Öncelikli hedef", "Tipik sınıf", "Kritik nokta"],
                    satirlar: [
                        ["Raf üstü envanter kontrolü", "Dar koridora uygunluk", "Kompakt, dar şase", "Koridor genişliği"],
                        ["Çatı altı aydınlatma bakımı", "Erişim yüksekliği", "Orta-yüksek sınıf, geniş sepet", "Tavan kotu"],
                        ["Sprinkler / yangın hattı denetimi", "Sabit nokta hassasiyeti", "Dar şase, hassas kumanda", "Sepet konumlama"],
                        ["Kamera / anten iç mekân montajı", "Uzun süreli sabit duruş", "Akülü, sessiz sınıf", "Şarj döngüsü"],
                    ],
                },
            },
            {
                baslik: "Çalışma yüksekliği hesabı: tavan kotu, kişi boyu ve uzanım payı birlikte düşünülür",
                paragraflar: [
                    "Makaslı platform seçiminde en sık yapılan hata, yalnızca tavan yüksekliğine bakıp sepet tabanının o kotu karşılayacağını varsaymaktır. Gerçek hesap üç bileşenden oluşur: sepet tabanının kotu, üzerinde duran kişinin boyu ve elini kaldırarak uzanabildiği mesafe. Bu üçü toplandığında ulaşılabilir gerçek yükseklik ortaya çıkar; hedef nokta bu toplamın biraz altında kalacak şekilde makine sınıfı seçilir, tam sınırda bırakılmaz.",
                    "Bu hesap bir kere doğru kurulduğunda, aynı bina tipindeki tekrarlayan bakım turlarında yeniden yapılmaz; saha ekibi aynı sınıfı talep eder. Bina değiştiğinde veya tavan üzerinde yeni bir engel (kanal, boru hattı) eklendiğinde hesap yeniden gözden geçirilir.",
                ],
            },
            {
                baslik: "Aynı sahada forklift ve makaslı platformun eşzamanlı koordinasyonu",
                paragraflar: [
                    "Gümrüklü antrepo veya hava kargo hangarında forklift ve makaslı platform aynı gün, hatta aynı koridorda çalışabilir. Bu durumda ikisinin rotası çakışmayacak şekilde önceden ayrılır: forklift palet taşıma güzergâhını kullanırken, platform sabit bir noktada durur ve çevresi geçici olarak işaretlenir. Bu ayrım sahada doğaçlama yapılmaz; iş programı hazırlanırken hangi saatte hangi makinenin hangi bölgede olacağı belirlenir.",
                    "Kısa süreli işlerde (örneğin tek bir aydınlatma armatürü değişimi) platform genellikle birkaç saatliğine sahaya girer ve forklift operasyonunu durdurmadan tamamlanır; uzun süreli raf üstü sayım gibi işlerde ise günlük çalışma penceresi forklift trafiğinin en düşük olduğu saatlere denk getirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift filonuz varken neden makaslı platform da kiralıyorsunuz?",
                cevap: "Çünkü ikisi farklı işleri görür. Forklift yük taşır, makaslı platform ise personeli güvenle sabit bir noktaya çıkarır; forkliflere personel sepeti bağlamak mevzuata aykırıdır ve güvenlik riski taşır. Liman ve hava kargo müşterilerimizde raf üstü kontrol, çatı altı aydınlatma bakımı gibi ihtiyaçlar sürekli tekrarlandığı için filomuza bu makineyi ayrıca ekledik; aynı sahaya, aynı ekiple hizmet veriyoruz.",
            },
            {
                soru: "Antrepomuzun tavan yüksekliği ne kadar olursa hangi sınıf gerekir?",
                cevap: "Tek bir sabit cevap yoktur; çalışma yüksekliği tavan kotu, çalışan kişinin boyu ve elini uzattığı mesafenin toplamıyla hesaplanır. Gerçek tavan ölçünüzü ve hedef noktanın konumunu paylaşırsanız uygun sınıfı birlikte netleştiririz; tahminle sınıf önerilmez.",
            },
            {
                soru: "Antrepo zeminimiz epoksi kaplı, lastik iz bırakır mı?",
                cevap: "Standart siyah lastik epoksi veya perdahlı beton zeminde iz bırakabilir; bu yüzden iç mekân makaslı platformlarında iz bırakmayan (beyaz dolgu) lastik kullanırız. Zemin tipinizi ve varsa depo standardınızdaki lastik şartını paylaşırsanız uygun donanımı önceden ayarlarız.",
            },
            {
                soru: "Hava kargo hangarında gece vardiyasında platform çalıştırabilir miyiz?",
                cevap: "Evet, bu durumlar için akülü ve sessiz çalışan sınıfları tercih ederiz; egzoz gazı çıkarmadıkları için kapalı alanda ve gece vardiyasında rahatlıkla kullanılabilirler. Vardiya uzunluğuna göre şarj döngüsünü önceden planlarız; tam vardiya kesintisiz kullanım gerekiyorsa yedek batarya seçeneğini birlikte değerlendiririz.",
            },
            {
                soru: "Raf koridorumuz dar, her makaslı platform sığar mı?",
                cevap: "Hayır, şase genişliği koridor ölçüsünden geniş olan bir platform koridora giremez. Bu yüzden koridor genişliğini ve raf düzenini sahaya makine gönderilmeden önce isteriz; ölçü paylaşıldığında uygun dar şaseli sınıfı öneririz.",
            },
            {
                soru: "Forklift çalışırken aynı anda makaslı platform da sahada olabilir mi?",
                cevap: "Olabilir, ancak rotalar önceden ayrılır. Forklift palet güzergâhını kullanırken platform sabit bir noktada durur ve çevresi geçici olarak işaretlenir; hangi saatte hangi makinenin hangi bölgede çalışacağı iş programında netleştirilir. Kısa süreli işlerde bu koordinasyon genellikle forklift operasyonunu hiç durdurmadan tamamlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çalışma yüksekliği hesabının tavan kotu + kişi boyu + uzanım payından oluşması, epoksi/perdahlı beton zeminde iz bırakmayan lastik gerekliliği, kapalı alanda akülü tercih edilmesi sektör standardı ve doğrulanabilir teknik bilgilerdir. Forklift-platform sahada eşzamanlı koordinasyon planlaması firma pratiğimizdir. Tesis adı, kapasite veya rakam uydurulmamıştır.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Manlift Kiralama: Liman ve Hava Kargo Sahasında Konteyner Üstü, Çatı ve Aydınlatma Direği Erişimi",
        giris:
            "Liman geri sahası ve hava kargo terminalinde yükseklik erişimi ihtiyacı, antrepo içindeki dikey işlerden farklı bir karakter taşır: hedef nokta çoğunlukla açık havada, bir engelin arkasında veya üzerinde bulunur. Konteyner istifleri arasında etiket kontrolü gereken bir konteyner üstü, saha aydınlatma direğinin lambası, depo çatısının dış yüzeyi veya bir kamera direğinin tepesi gibi noktalara düz bir platformla ulaşmak çoğu zaman mümkün değildir — makinenin hem yukarı çıkması hem de yatay bir mesafe kadar öne uzanması gerekir. İşte forklift filomuza manlift eklememizin sebebi tam olarak bu: eklemli veya teleskopik bombasıyla manlift, sepetini hem yukarı hem de öne doğru hareket ettirerek engelin arkasındaki veya üzerindeki noktaya ulaşır; makaslı platformun aksine yalnız dikey değil, menzilli bir erişim sağlar. Aynı liman ve hava kargo müşteri tabanına, aynı sahalarda hizmet veriyoruz. Bu sayfa, konteyner üstü erişimde manlift kullanımını, saha aydınlatma direği ve çatı dış yüzeyi bakımında sınıf seçimini, açık saha zemin ve tahrik tipini ve gümrüklü/petrokimya yakını sahalarda ek güvenlik protokolünü anlatır.",
        maddeler: [
            {
                baslik: "Bombanın yatay menzili, manlifti konteyner üstü erişimde forkliften ve platformdan ayırır",
                metin: "Bir konteynerin üst yüzeyinde etiket kontrolü, mühür değişimi veya hasar tespiti gerektiğinde, makinenin konteyner yığınının kenarından değil üzerinden erişmesi gerekir. Eklemli veya teleskopik bombalı manlift, sepetini yukarı kaldırırken aynı zamanda öne doğru uzatabildiği için, altındaki konteyner sırasına veya başka bir engele takılmadan hedef yüzeye ulaşır. Makaslı platform bu hareketi yapamaz çünkü sepeti yalnız dikey eksende hareket eder; bu yüzden konteyner üstü işlerde varsayılan tercih manlifttir.",
            },
            {
                baslik: "Saha aydınlatma direği ve kulesi bakımı, direğin yüksekliğine göre sınıflandırılır",
                metin: "Liman geri sahası ve hava kargo apron çevresindeki aydınlatma direkleri farklı yükseklik bantlarında bulunur; kısa saha direkleri ile yüksek aydınlatma kuleleri aynı manlift sınıfıyla karşılanmaz. Direğin gerçek yüksekliği ve armatürün direk üzerindeki konumu paylaşıldığında, bombanın hem dikey hem yatay erişim payını karşılayan sınıf belirlenir. Rüzgârlı günlerde yüksek sınıf makinelerin çalışma sınırı üretici tarafından belirlenmiştir; bu sınır sahada aşılmaz.",
            },
            {
                baslik: "Depo ve antrepo çatısının dış yüzeyi, iç mekân işlerinden ayrı bir erişim gerektirir",
                metin: "Çatının dış yüzeyindeki su yalıtımı kontrolü, oluk temizliği veya güneş paneli bakımı, binanın dışından yapılan bir iştir ve içeriden makaslı platformla ulaşılamaz. Manlift, bina çevresinde uygun bir konumlanma noktasından bombasını çatı kenarına veya üzerine uzatarak bu erişimi sağlar. Konumlanma noktasının zemin sağlamlığı ve bina cephesine mesafesi, iş başlamadan önce sahada değerlendirilir.",
            },
            {
                baslik: "Açık sahada zemin tipi, tahrik ve yakıt seçimini belirler",
                metin: "Liman geri sahası ve hava kargo apron çevresi genellikle sert zeminli olsa da, saha kenarındaki toprak veya çakıl bölümlerde standart tahrikli manlift yetersiz kalabilir; bu noktalarda dört tekerlekten çekişli (4x4) ve dizel veya hibrit tahrikli sınıflar tercih edilir. Kapalı hangar yakınında veya apron üzerinde çalışılacaksa, egzoz kısıtı olan alanlarda akülü ya da hibrit sessiz mod özelliğine bakılır. Zemin tipini ve çalışma noktasının hangara olan mesafesini paylaşmak, doğru tahrik seçimini hızlandırır.",
            },
            {
                baslik: "Gümrüklü ve petrokimya yakını sahalarda ek güvenlik protokolü uygulanır",
                metin: "Liman çevresindeki bazı sahalar gümrük denetimine veya petrokimya tesislerine yakın bölgelerde bulunur; bu tür alanlarda çalışan personel ve makine giriş-çıkışı ayrı bir izin ve güvenlik protokolüne tabidir. Manlift operatörünün yeterlilik belgesi ve makinenin varsa ilgili sertifikaları, saha girişinden önce ibraz edilir. Bu protokol saha yönetiminin kuralına göre şekillenir; biz kendi tarafımızdan gereken belgeleri eksiksiz hazır tutarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Erişim senaryosuna göre manlift sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, liman ve hava kargo sahasında en sık karşılaşılan dört manlift erişim senaryosunu ve her birinde öncelikli kontrol noktasını özetler. Kesin sınıf, gerçek yükseklik ve konumlanma mesafesiyle doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Öncelikli hedef", "Tipik sınıf", "Kritik nokta"],
                    satirlar: [
                        ["Konteyner üstü kontrol / etiket", "Yatay menzil", "Eklemli bombalı, orta sınıf", "Engel aşma mesafesi"],
                        ["Saha aydınlatma direği bakımı", "Dikey + yatay erişim payı", "Teleskopik, yüksek sınıf", "Direk yüksekliği"],
                        ["Depo çatısı dış yüzey bakımı", "Konumlanma güvenliği", "Eklemli, geniş menzil", "Zemin sağlamlığı"],
                        ["Anten / kamera dış cephe kurulumu", "Sabit nokta hassasiyeti", "Teleskopik, hassas kumanda", "Rüzgâr sınırı"],
                    ],
                },
            },
            {
                baslik: "Menzil hesabı: dikey yükseklik, yatay uzanım ve engel aşma payı birlikte hesaplanır",
                paragraflar: [
                    "Manlift seçiminde tek başına 'kaç metreye çıkıyor' sorusu yeterli değildir; hedef nokta bir engelin arkasındaysa bombanın yatay uzanımı da hesaba katılmalıdır. Doğru yöntem, hedef noktanın yerden yüksekliğini, makinenin duracağı konumdan hedefe olan yatay mesafeyi ve aradaki engelin (konteyner sırası, bina çıkıntısı) yüksekliğini birlikte değerlendirmektir. Bu üç veri toplandığında, bombanın hem dikeyde hem yatayda yeterli payı olan sınıf belirlenir.",
                    "Bu hesap özellikle konteyner üstü işlerde kritiktir çünkü konteyner sırası günden güne değişebilir; sabit bir sınıf her zaman aynı sırayı aşamayabilir. Bu yüzden tekrarlayan konteyner üstü işlerde güncel istif düzeni her seferinde teyit edilir.",
                ],
            },
            {
                baslik: "Açık saha zemin ve hava koşulu, çalışma penceresini belirler",
                paragraflar: [
                    "Liman ve hava kargo sahasının açık bölümlerinde zemin sertliği ve hava koşulu, dikey işlerden farklı olarak makinenin duruş stabilitesini doğrudan etkiler. Yağış sonrası yumuşamış zeminde yüksek sınıf bir manlift konumlanma noktasında saplanma riskiyle karşılaşabilir; bu risk, konumlanma noktası sahada önceden değerlendirilerek azaltılır.",
                    "Rüzgâr, yüksek sınıf manliftlerde üretici tarafından belirlenen bir çalışma sınırına tabidir; bu sınır aşıldığında iş ertelenir. Saha aydınlatma direği veya çatı işleri gibi ertelenebilir bakım kalemlerinde bu sınır her zaman gözetilir, sabit bir program için sınır zorlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Konteyner üstünde kontrol yapacağız, forklift sepeti yeterli olur mu?",
                cevap: "Hayır, forklife personel sepeti bağlamak mevzuata aykırıdır ve güvenlik riski taşır. Konteyner üstü erişim için eklemli veya teleskopik bombalı manlift kullanırız; bomba hem yukarı çıkar hem öne uzanır, böylece konteyner sırasının üzerinden hedef yüzeye güvenle ulaşılır.",
            },
            {
                soru: "Saha aydınlatma direğimiz yüksek, hangi manlift sınıfı gerekir?",
                cevap: "Direğin gerçek yüksekliği ve armatürün direk üzerindeki konumu bilinmeden kesin sınıf söylenemez; bu ikisi birlikte bombanın gereken dikey ve yatay erişim payını belirler. Direk yüksekliğinizi paylaşırsanız uygun teleskopik sınıfı birlikte netleştiririz.",
            },
            {
                soru: "Manlift ile makaslı platform arasındaki fark tam olarak nedir?",
                cevap: "Makaslı platform sepetini yalnız dikey eksende yukarı kaldırır ve geniş, düz bir tabanla iç mekân işleri için uygundur. Manlift ise eklemli veya teleskopik bombasıyla hem yukarı hem öne uzanabilir; bu yüzden bir engelin arkasındaki veya üzerindeki noktaya (konteyner üstü, çatı kenarı gibi) ulaşmak gerektiğinde tercih edilir. İç mekân raf üstü işlerde platform, açık sahada engel arkası erişimde manlift kullanılır.",
            },
            {
                soru: "Rüzgârlı günlerde manlift çalışabilir mi?",
                cevap: "Yüksek sınıf manliftlerin rüzgâr için üretici tarafından belirlenmiş bir çalışma sınırı vardır ve bu sınır sahada aşılmaz. Ertelenebilir bakım işlerinde (aydınlatma direği, çatı kontrolü gibi) rüzgâr sınırı aşıldığında işi erteleriz; acil olmayan işlerde sabit bir programı zorlamayız.",
            },
            {
                soru: "Gümrük bölgesine yakın sahada manlift çalıştırmak için ek izin gerekiyor mu?",
                cevap: "Bazı liman çevresi sahalar gümrük denetimine veya petrokimya tesislerine yakın bölgelerde bulunur ve bu alanlarda saha yönetiminin kendi giriş-çıkış ve güvenlik protokolü uygulanır. Operatör yeterlilik belgesi ve gerekli makine sertifikaları tarafımızdan eksiksiz hazır tutulur; sahanızın özel bir protokolü varsa önceden bildirin, buna göre hazırlanırız.",
            },
            {
                soru: "Açık sahada toprak veya çakıl zeminde manlift kullanılabilir mi?",
                cevap: "Evet, ancak bu tür zeminlerde standart tahrikli makine yerine dört tekerlekten çekişli (4x4) sınıf tercih edilir. Yağış sonrası yumuşamış zeminde konumlanma noktası ayrıca değerlendirilir; gerekirse geçici plaka veya alternatif konumlanma noktası önerilir. Zemin tipinizi paylaşırsanız uygun tahrik sınıfını önceden belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli/teleskopik bombalı manliftin dikey+yatay erişim sağlaması, makaslı platformdan farkı, rüzgâr sınırının üretici tarafından belirlenmesi ve zemin tipine göre tahrik seçimi sektör standardı ve doğrulanabilir teknik bilgilerdir. Gümrük/petrokimya yakını saha protokolü ve konteyner üstü erişim uygulaması firma pratiğimizdir. Tesis adı, kapasite veya rakam uydurulmamıştır.",
    },
};
