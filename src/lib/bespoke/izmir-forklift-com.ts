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
};
