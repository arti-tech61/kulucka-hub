// ═══════════════════════════════════════════════════════════════════════════
// izmirmanliftkiralama.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: İzmir/Aliağa, RAFİNERİ VE LİMAN sahalarına belgeli operatörlü,
// İSG uyumlu manlift kiralama. Açı: ağır sanayi İSG rejimi, iş izni
// sistemleri, operatörlü hizmet.
//
// ⚠️ Bergama OSB / Menemen Deri OSB / Tire OSB / Manisa-Aydın çevre sayfaları
// iki kardeş domainde de elle yazıldı (depo/raf ve kesintisiz üretim
// açılarıyla). Bu dosya ÜÇÜNCÜ açıdan yazılır: izin sistemi, operatör,
// yüksek riskli saha. Cümle/tablo tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (≥1 tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIRMANLIFTKIRALAMA_NET: Record<string, BespokeIcerik> = {
    "bolge:kemalpasa-osb": {
        h1: "Kemalpaşa OSB Manlift Kiralama: İzin Dosyası Hazır Saha Düzeni",
        giris:
            "Kemalpaşa Organize Sanayi Bölgesi'nde yüksekte çalışma, makinenin tesise ulaşmasından önce başlayan bir izin zinciridir. Güvenlik birimi işin sınırını görmek, bakım sorumlusu enerji kesme noktalarını belirlemek, yüklenici yönetimi personel ile ekipman belgelerini denetlemek ister. Biz bu zinciri tek bir hazırlık dosyasında toplarız: yapılacak iş ve kullanılacak erişim yöntemi tarif edilir, manliftin güncel kontrol evrakı eşleştirilir, operatörün yeterlilik ve sağlık kayıtları giriş başvurusuna bağlanır. Böylece sevkiyat saati tahmine göre değil, onaylanan çalışma penceresine göre konur. Kemalpaşa OSB için yaklaşımımızın odağında hız vaadi değil, kapıda geri çevrilmeyen makine ve sahada yeniden yazılmayan risk analizi vardır. Üretim holü, açık stok alanı veya idari bina işi birbirinden farklı tehlikeler doğurduğu için keşif notunu da aynı kalıba sıkıştırmayız; izin planı gerçek çalışma noktasına göre kurulur.",
        maddeler: [
            { baslik: "Yüklenici dosyasını işe göre kapatmak", metin: "Tesise giriş için istenen belgeleri genel bir klasör hâlinde göndermek yeterli değildir. Makinenin seri numarası ile periyodik kontrol raporu, operatör kimliği ile yeterlilik kaydı ve iş emri ile risk değerlendirmesi birbiriyle uyuşmalıdır. Talep alındığında tesisin kontrol listesini ister, süre sonu yaklaşan evrakı ayırır ve yalnız görevlendirilen personeli bildiririz. Güvenlik biriminin ek formatı varsa başvuru o biçimde hazırlanır. Bu eşleştirme, giriş günü farklı makine veya adı bildirilmemiş operatör yüzünden işlemin durmasını önler; sorumlulukların kime ait olduğunu da yazılı hâle getirir." },
            { baslik: "Çalışma izninde alanı ve zamanı daraltmak", metin: "İyi bir iş izni bütün fabrikayı kapsayan belirsiz bir ifade kullanmaz. Hangi hol, hangi aks, hangi kot ve hangi vardiya aralığında çalışılacağı açıkça yazılır. Kemalpaşa OSB taleplerinde keşif fotoğraflarını iş adımlarına böler; sepetin duracağı alanı, alt koridorun nasıl ayrılacağını ve komşu operasyonu izin ekinde gösteririz. İş başka aksa geçtiğinde eski izinle devam edilmez, alan sorumlusuyla kapsam güncellenir. Dar tanım bürokrasi artırmak için değil, üretim ekibinin kendi güzergâhını güvenle sürdürebilmesi ve vardiya tesliminde yanlış anlaşılma doğmaması içindir." },
            { baslik: "Enerji kaynaklarıyla temas ihtimalini önceden elemek", metin: "Tavan aydınlatması, kablo tavası ve mekanik hat işleri aynı yükseklikte görünse de enerji riski aynı değildir. Elektrik panosundan beslenen bir hatta müdahale varsa tesisin kilitleme ve etiketleme adımı tamamlanmadan sepet yükseltilmez. Hareketli vinç, konveyör veya otomatik kapı çalışma hacmine girebiliyorsa ilgili ekipman güvenli duruma alınır. Operatörümüz izolasyon kararını tek başına vermez; tesisin yetkili kişisi enerjisizliği doğrular, ekip bunu izin formunda görür. Bu düzen, manlifti yalnızca erişim aracı olarak tutar ve bakım işinin teknik sorumluluğunu doğru tarafta bırakır." },
            { baslik: "İç trafik için ayrı bir hareket planı", metin: "OSB fabrikalarında yaya yolları, forklift rotaları ve sevkiyat kapıları gün boyunca değişen yoğunluk taşır. Manlift çalışma noktasına giderken sepet tamamen indirilir, gözcü kör dönüşlerde önden yürür ve geçici bariyer yalnız çalışma başladığında değil, makine hareket ederken de kullanılır. Teslimat aracı için boşaltma yeri ayrıca belirlenir; rampanın operasyonunu kesen doğaçlama indirme yapılmaz. Vardiya değişimi veya yükleme dalgası biliniyorsa hareket o aralığın dışına alınır. İzin dosyasına eklenen bu küçük trafik krokisi, saha içindeki en sık temas risklerinden birini daha iş başlamadan azaltır." },
            { baslik: "Vardiya devrinde izni canlı tutmak", metin: "Bir bakım işi tek vardiyada bitmediğinde yalnız makine sahada kalmaz; açık iş izinleri, anahtarlar, bariyerler ve tamamlanmamış bağlantılar da devredilir. Gün sonu kontrolünde sepet aşağı alınır, ekipman güvenli park alanına çekilir ve kalan iş fotoğraflı notla yeni vardiyaya aktarılır. Ertesi ekip aynı noktada şartların değişip değişmediğini kontrol eder; üretim düzeni değişmişse eski bariyer planı otomatik kabul edilmez. Belgeli operatörlü modelimiz bu devir zincirinde kimin makineyi kullanacağını sabit tutar ve yetkisiz kullanım ihtimalini ortadan kaldırır." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa OSB için izin kapıları", paragraflar: ["Aşağıdaki matris, tekliften çalışmanın kapanışına kadar hangi kanıtın kim tarafından tamamlandığını gösterir. Tesisin kendi prosedürü her durumda önceliklidir; tablo ortak hazırlık dilidir."], tablo: { basliklar: ["Aşama", "Bizim hazırlığımız", "Tesis doğrulaması", "Geçiş kanıtı"], satirlar: [["Talep", "Makine ve operatör adayını eşleştirme", "İş yeri ile zamanı bildirme", "Kapsamlı iş emri"], ["Giriş", "Kontrol raporu ve personel dosyası", "Yüklenici kabulü", "Onaylı giriş kaydı"], ["Kurulum", "Günlük makine kontrolü", "Zemin ve enerji durumunu teyit", "İmzalı çalışma izni"], ["Uygulama", "Operatör ve gözcü disiplini", "Alan sorumlusu koordinasyonu", "Aktif bariyerli bölge"], ["Kapanış", "Makineyi güvenli park etme", "İş alanını teslim alma", "Kapatılmış izin formu"]] } },
            { baslik: "Keşiften izin formuna bilgi akışı", paragraflar: ["Telefonla yalnız yükseklik söylemek, OSB işi için eksik başlangıçtır. Hedefin altındaki üretim düzeni, yaklaşma koridoru, zemindeki kapak ve kanallar, yakın enerji kaynakları ile çalışmanın vardiya ilişkisini aynı keşif kaydına alırız. Bu kayıt makine seçimini yapan ekip, nakliyeyi planlayan kişi ve operatör tarafından ortak okunur; farklı kişilerin farklı saha varsayımlarıyla hareket etmesi engellenir.", "Keşif uzaktan yapılabiliyorsa ölçülü fotoğraf ve kısa video kullanılır; belirsiz kalan geçiş veya zemin için yerinde kontrol istenir. Onaydan sonra hazırlanan yöntem metni müşterinin İSG ekibine gönderilir. Revizyon gelirse sevkiyat yapılmadan işlenir. Böylece izin, sahada formalite olarak imzalanan bir kâğıt değil, gerçekten uygulanacak çalışma düzeninin özeti olur." ] },
            { baslik: "İş bitiminde kayıt ve sonraki bakım turu", paragraflar: ["Kapanışta çalışma alanındaki malzeme ve alet sayılır, geçici ayrımlar kaldırılır, makinede yeni hasar veya uyarı olup olmadığı günlük forma yazılır. Tamamlanan noktalar ile ertelenen işler birbirinden ayrılır; eksik kalan bir bölüm tamamlandı gibi kapatılmaz. Tesis sorumlusu alanı teslim aldıktan sonra izin sonlandırılır.", "Aynı tesiste dönemsel bakım tekrarlanıyorsa bu kayıt bir sonraki turun başlangıç verisine dönüşür. Hangi geçişin dar olduğu, hangi vardiya penceresinin işe yaradığı ve hangi evrak formatının istendiği korunur. Bu kurumsal hafıza yeni bir iddia üretmez; sahada doğrulanmış koşulların yeniden ölçülmesini ve her seferinde sıfırdan evrak aramayı azaltır." ] },
        ],
        sss: [
            { soru: "Kemalpaşa OSB giriş dosyasında hangi belgeler hazırlanır?", cevap: "Kesin liste tesisin yüklenici prosedüründen alınır. Genel hazırlıkta görevlendirilen makinenin periyodik kontrol ve bakım kaydı, operatörün yeterlilik ile talep edilen sağlık ve eğitim kayıtları, araç-personel bildirimleri, işin yöntemi ve risk değerlendirmesi bulunur. Biz belgeyi yalnız var diye göndermeyiz; tarihini, makine ve kişi eşleşmesini kontrol ederiz. Tesis ek form, oryantasyon veya ön bildirim isterse takvime eklenir. Giriş onayı görülmeden sevkiyat saatini kesinleştirmemek, aracın kapıda beklemesini önleyen temel kuralımızdır." },
            { soru: "Üretim sürerken manlift çalışmasına izin çıkar mı?", cevap: "Çıkabilir; fakat cevap işin altındaki faaliyet ve tehlike kaynaklarına bağlıdır. Yaya ile forklift akışı ayrılabiliyor, düşen cisim bölgesi fiziksel olarak kapatılabiliyor ve yakın enerji ya da hareketli ekipman güvenli duruma getirilebiliyorsa paralel düzen kurulabilir. Açık ürün, durdurulamayan hareketli hat veya ayrıştırılamayan yoğun trafik varsa çalışma vardiya arasına alınır. Keşif sonunda iki plan sunarız: üretimle beraber uygulanabilen düzen ve bunun mümkün olmadığı noktalar için kısa duruş penceresi." },
            { soru: "Operatörümüz var; yalnız makine kiralayabilir miyiz?", cevap: "Tesis prosedürü ve operatörünüzün belgesi uygunsa değerlendirilebilir. Kullanacak kişilerin yeterlilik kayıtları önceden görülür, makineye özgü kumanda ve acil indirme teslim eğitimi tutanakla yapılır, yetkisiz kişilerin anahtara erişmemesi için sorumlu belirlenir. Çok vardiyalı kullanımda her vardiyanın ayrı yetkili operatörü olmalıdır; bir kişinin belgesi bütün ekibi kapsamaz. İzin zincirinin yoğun olduğu işlerde operatörlü hizmet, personel dosyası ve vardiya devri sorumluluğunu daha belirgin tuttuğu için tercih edilir." },
            { soru: "İş izni uzarsa kiralama bedeli nasıl yönetilir?", cevap: "Teklifte makinenin rezervasyon tarihiyle izin başlangıcını ayırırız. Evrak henüz onaylanmadıysa sevkiyatı başlatmayarak sahada boş bekleme oluşmasını önleriz. Makine tesise girdikten sonra işletme kaynaklı izin kapanması yaşanırsa sözleşmedeki bekleme ve uzatma koşulları uygulanır; bu koşullar işe başlamadan yazılı paylaşılır. Uzun veya değişken onay süreçlerinde esnek başlangıç penceresi kurmak mümkündür. Amaç belirsizliği saklamak değil, hangi sürenin operasyon, hangisinin bekleme olduğunu iki taraf için görünür kılmaktır." },
            { soru: "Acil arızada aynı gün çalışma mümkün mü?", cevap: "Makine uygunluğu tek başına yeterli değildir. İş alanı, enerji izolasyonu, tesis giriş evrakı ve operatör kabulü aynı gün tamamlanabiliyorsa acil plan kurulabilir. Önce fotoğraf ve ölçülerle doğru sınıf seçilir, eş zamanlı olarak güvenlik birimine dosya iletilir ve nakliye onay saatine bağlanır. Prosedürü atlayarak hızlandırma yapmayız; acil durumun baskısı, yetkisiz giriş veya eksik risk değerlendirmesine gerekçe olamaz. Daha önce çerçeve dosyası açılmış tesislerde süreç doğal olarak daha kısa ilerler." },
            { soru: "İzin kapanışında bize hangi kayıtlar bırakılır?", cevap: "Çalışılan zaman aralığı, görevlendirilen operatör, günlük makine kontrolü ve varsa saha gözlemleri teslim dosyasına eklenir. Tesisin kendi izin formu alan sorumlusuyla kapatılır; yarım kalan maddeler açıkça işaretlenir. Bir uygunsuzluk veya makine arızası yaşandıysa düzeltici işlem kaydı ayrıca tutulur. Sonraki bakım için yararlı olan geçiş, park ve vardiya notları müşteri onayıyla saklanabilir. Böylece denetimde yalnız faturaya değil, işin hangi güvenlik düzeniyle tamamlandığını gösteren izlenebilir bir zincire sahip olursunuz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. KOSBİ'nin varlığı kamuya açık bilgidir; izin dosyası, görev eşleştirme, trafik planı ve vardiya devri anlatımı firma saha pratiğidir. Tesis adı, kapasite veya performans rakamı uydurulmamıştır.",
    },
    "bolge:cigli-ataturk-osb": {
        h1: "Çiğli Atatürk OSB'de Vardiya Uyumlu Belgeli Manlift Hizmeti",
        giris: "İzmir Atatürk Organize Sanayi Bölgesi'nde bir yüksekte çalışma ekibi aynı gün içinde farklı vardiya sorumluları, değişen iç trafik ve süren üretim faaliyetleriyle karşılaşabilir. Bu nedenle Çiğli'deki hizmetimizi tek seferlik makine teslimi gibi değil, vardiyalar arasında bozulmadan devredilecek bir güvenlik düzeni olarak kurarız. İşin konumu ve yöntemi yazılı tanımlanır; manlift ile operatör belgeleri tesisin yüklenici kabulüne önceden sunulur; her vardiya başında alan, enerji kaynakları ve yaya-makine ayrımı yeniden gözden geçirilir. İzmir Atatürk OSB'nin kamuya açık çok sektörlü yapısı, her tesis için aynı risk varsayımını kullanmayı zaten olanaksız kılar. Metal işleme alanındaki sıcak iş çevresiyle kapalı bir depodaki raf koridoru aynı izin metniyle yönetilemez. Bizim açımızı belirleyen nokta budur: belge dosyası ortak bir taban sağlar, fakat uygulama planı çalışma noktasının gerçek koşullarına göre yeniden yazılır.",
        maddeler: [
            { baslik: "Vardiya başlangıcında koşulları yeniden doğrulamak", metin: "Önceki ekipten kalan izin otomatik olarak güvenli çalışma anlamına gelmez. Yeni vardiyada koridora malzeme bırakılmış, yakın makine devreye alınmış veya çalışma alanının altındaki rota değiştirilmiş olabilir. Operatör sepeti kaldırmadan önce zemin çevresini dolaşır, acil indirme bölgesinin açık olduğunu görür ve alan sorumlusuyla iznin hâlâ geçerli olduğunu teyit eder. Değişiklik varsa bariyer krokisi ile yöntem notu güncellenir. Bu kısa devir kontrolü, kâğıt üzerindeki onay ile sahadaki anlık düzen arasındaki boşluğu kapatır." },
            { baslik: "Personel yetkisini vardiya listesine bağlamak", metin: "Çok vardiyalı tesiste bir operatör belgesinin fotokopisini dosyaya koymak yeterli olmaz. Hangi vardiyada kimin makineyi kullanacağı ad-soyad ve görevle tanımlanır; anahtar teslimi bu listeye göre yapılır. Operatör değişirse yeni kişinin yeterliliği görülmeden kullanım devredilmez. Operatörlü kiralamada kendi ekip planımızı tesisin vardiya çizelgesiyle eşleştirir, dinlenme sürelerini de iş programına katarız. Böylece geceye uzayan çalışma, gündüz görevlisinin kontrolsüz biçimde devam etmesine dönüşmez." },
            { baslik: "Bakım penceresini izin süresiyle eşlemek", metin: "Üretim hattında ayrılan kısa pencerenin bir bölümü evrak ve kurulum bekleyerek tüketilmemelidir. Makine kontrolü, alet sayımı, operatör bildirimi ve bariyer malzemesi pencere açılmadan hazır edilir. Tesis enerjiyi güvenli duruma aldığında ekip doğrudan tanımlı noktaya geçer. İş uzayacak görünüyorsa izin bitmeden alan sorumlusuna bildirilir; sessizce süre aşımı yapılmaz. Pencere kapanınca sepet indirilir, aletler sayılır ve hat teslim edilir. Bu sıralama üretimin durduğu dakikaları erişim hazırlığından ayırır." },
            { baslik: "Ortak koridorda hareket yetkisi oluşturmak", metin: "Forkliftler, çekiciler ve yayalarla paylaşılan bir güzergâhta manliftin önceliği kendiliğinden oluşmaz. Hareket saati vardiya amiriyle belirlenir, kör köşelerde gözcü kullanılır ve yükseltilmiş sepetle yer değiştirilmez. Çalışma yerine ulaşıldığında teker çevresi ile düşen cisim alanı görünür şekilde ayrılır. Bariyerin depo operasyonunu kapatması gerekiyorsa alternatif rota önce devreye alınır. Güvenliğin üretime karşı konumlandığı bir çatışma yerine, iki akışın hangi saatte nereden geçeceği tanımlanmış olur." },
            { baslik: "Değişen ekipte acil durum bilgisini korumak", metin: "Acil indirme kumandası, kurtarma sorumlusu ve tesis içi alarm yöntemi yalnız ilk ekibe anlatılırsa gece vardiyası bilgisiz kalabilir. Her devirde yeni saha sorumlusu makinenin yerini, alt kumandayı ve kurtarma erişimini görür. İletişim kanalı denenir; sepet operatörüyle zemin gözcüsü aynı işaretleri kullanır. Bir tahliye yolu veya yangın ekipmanı bariyer içinde kalıyorsa düzen değiştirilir. Acil durum planının görünür ve tekrar edilebilir olması, çok vardiyalı çalışmanın temel kabul şartıdır." },
        ],
        ekBolumler: [
            { baslik: "Vardiyalar arası kontrol matrisi", paragraflar: ["Bu tablo, süren bir işin yeni ekibe hangi kanıtlarla devredileceğini özetler. Her tesisin kendi izin ve acil durum prosedürü tabloya eklenir."], tablo: { basliklar: ["Kontrol", "Çıkan vardiya", "Giren vardiya", "Kayıt"], satirlar: [["İş kapsamı", "Tamamlanan noktaları işaretler", "Kalan adımları sahada görür", "Devir notu"], ["Makine", "Park ve şarj durumunu yazar", "Günlük kontrol yapar", "Kontrol formu"], ["Alan", "Bariyeri ve açık riskleri bırakır", "Trafik ile zemini yeniden inceler", "Alan teyidi"], ["Enerji", "İzolasyon durumunu bildirir", "Yetkili kişiden doğrular", "İzin eki"], ["Acil durum", "Kurtarma sorumlusunu tanıtır", "Alt kumandayı yerinde görür", "Brifing kaydı"]] } },
            { baslik: "Gece çalışmasına geçiş hazırlığı", paragraflar: ["Gece vardiyası yalnız gündüz planının karanlıkta sürdürülmesi değildir. Yükleme alanındaki aydınlık düzeyi, gözcünün görünürlüğü, tesis irtibat kişisinin erişilebilirliği ve dinlenme düzeni ayrı değerlendirilir. Çalışma noktasında gölge bırakan aydınlatma varsa seyyar ışık yerleştirilir; bu ekipman manliftin hareket koridoruna konmaz.", "Operatör değişiminde kumanda alışkanlığı varsayılmaz. Yeni kişi makine başı kontrolünü yapar, platformun uyarılarını ve acil durdurmayı sınar. Gece bitimindeki kapanış da kayda bağlanır; sabah ekibi geldiğinde sahada kime ait olduğu belirsiz bir açık izin veya şarjsız makine bulmaz." ] },
            { baslik: "Çerçeve dosyayla tekrar eden işleri hızlandırmak", paragraflar: ["Aynı işletmede periyodik bakım turu yapılıyorsa şirket ve operatör belgelerinin doğrulanmış nüshaları bir çerçeve dosyada tutulabilir. Her yeni işte yalnız güncel tarih, görevlendirilen ekip, makine ve yöntem bölümü yenilenir. Süresi geçmiş rapor veya değişmiş personel kaydı eski dosyadan taşınmaz.", "Bu yaklaşım izni atlamaz; tekrar eden idari veriyle işe özgü güvenlik kararını birbirinden ayırır. Tesisin talep ettiği format ve bildirim süresi kayıtlı olduğu için bakım penceresi yaklaşırken kimden hangi onayın beklendiği görünür olur. Hız, kontrol adımlarını silmekten değil, doğru kanıtı doğru zamanda hazırlamaktan gelir." ] },
        ],
        sss: [
            { soru: "Üç vardiya boyunca aynı manlift kullanılabilir mi?", cevap: "Teknik uygunluk ve şarj planı sağlanıyorsa kullanılabilir; fakat her vardiyada yetkili operatör, günlük kontrol ve sorumlu devir kaydı gerekir. Akülü makinenin çalışma ile şarj aralığı iş yoğunluğuna göre planlanır, derin deşarja bırakılmaz. Kullanıcı listesi vardiya bazında doğrulanır ve anahtar yetkisiz kişiye geçmez. Alan koşulu değiştiğinde eski izin otomatik sürdürülmez. Kesintisiz kullanım hedefi, kontrol ve dinlenme adımlarını ortadan kaldırmadan kurulmalıdır." },
            { soru: "Gece bakımında ek belge istenir mi?", cevap: "Belgenin adı tesise göre değişebilir; önemli olan gece koşullarının yöntem ve risk değerlendirmesinde görünmesidir. Aydınlatma, iletişim, acil durum irtibatı, gözcü düzeni ve operatör çalışma süresi açıkça ele alınır. Tesis gece çalışma bildirimi veya ayrı izin istiyorsa önceden tamamlanır. Gündüz onaylanan formun saat hanesini değiştirmeden geceye taşımak doğru değildir; çalışma aralığı ve görevli ekip gerçek durumu göstermelidir." },
            { soru: "Vardiya değişiminde üretim hattını yeniden durdurmak gerekir mi?", cevap: "Her zaman değil. Enerji izolasyonu yetkili prosedürle korunuyor, alan ayrımı bozulmamış ve yeni ekip devri yerinde aldıysa iş aynı güvenli durumda sürebilir. Buna karşın kilit sorumlusu değişiyor, bariyer açılmış veya hat yeniden devreye girmişse çalışma yeniden başlatma izni bekler. Kararı manlift operatörü tek başına vermez; tesisin alan ve enerji yetkilileri doğrular. Devir planı bu nedenle üretim programıyla birlikte yazılır." },
            { soru: "Tesisimiz farklı operatör kabul etmiyor; ekip nasıl sabitlenir?", cevap: "Talep aşamasında kabul edilecek operatörleri vardiya planına bağlarız ve belgelerini ön onaya göndeririz. Hastalık veya zorunlu değişim için yedek kişi de baştan bildirilebilir; onaysız personel kapıda değiştirilmez. Oryantasyon gerekiyorsa ana ve yedek ekip aynı programa alınır. Böylece bir kişinin kullanılamaması işi tamamen durdurmaz, tesis de tanımadığı bir operatörü acil baskısıyla kabul etmek zorunda kalmaz." },
            { soru: "Makine vardiya arasında nerede bırakılmalı?", cevap: "Tesisle belirlenmiş, düz ve trafiği engellemeyen park alanında; sepet aşağıda, kumandalar kapalı ve anahtar sorumlu kişide bırakılır. Şarj yapılacaksa alanın elektrik ve havalandırma koşulu uygun olmalı, kablo yaya yolundan geçirilmemelidir. Acil çıkış, yangın ekipmanı veya pano önü park alanı olarak kullanılmaz. Gün sonu kontrolünde hasar, şarj ve uyarı durumu forma yazılır; yeni vardiya makineyi bu kayıtla teslim alır." },
            { soru: "Kısa bakım penceresinde evrak gecikmesini nasıl önlersiniz?", cevap: "İş tarihinden önce tesisin kontrol listesini alır, görevlendirilen makine ile personeli kesinleştirir ve dosyayı ön incelemeye yollarız. Eksik görülen kayıt pencere gününe bırakılmaz. Sevkiyat, yüklenici kabulü ve alan izni için sorumlu kişiler ile saatler aynı programda gösterilir. Makine geldiğinde yalnız saha kontrolü ve aktif izin imzası kalır. Daha önce çalışılmış tesiste çerçeve dosya kullanılabilir, ancak tarih ve görev eşleşmesi her yeni talepte tekrar denetlenir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. İzmir Atatürk OSB'nin Çiğli'deki çok sektörlü yapısı kamuya açık bilgidir; vardiya devri, izin matrisi ve gece çalışma hazırlığı firma pratiğidir. Özel tesis bilgisi veya doğrulanmamış sayı kullanılmamıştır.",
    },
    "bolge:torbali": {
        h1: "Torbalı Sanayi Aksında İş İzinli Manlift Kiralama",
        giris: "Torbalı'da yeni kurulan, genişleyen veya işletme hâlindeyken tadilat gören sanayi yapılarında yüksekte çalışma sınırı sık değişir: bugün çelik montaj alanı olan bölüm yarın üretim koridoruna, sevkiyat yolu da bir sonraki vardiyada yüklenici geçişine dönüşebilir. Bu hareketli ortamda manlift hizmetini sabit bir risk formuna bağlamak yerine, yapılacak işi etaplara ayıran bir work-permit düzeni kuruyoruz. Her etap için giriş yetkisi, enerji durumu, alt alan ayrımı ve yetkili operatör yeniden doğrulanıyor; makine evrakı ile personel dosyası görevlendirme kaydıyla eşleştiriliyor. Torbalı'nın kamuya açık biçimde büyüyen sanayi karakteri bizim için tesis veya sektör hakkında varsayım üretme gerekçesi değildir. Tam tersine, yeni şantiye disipliniyle faal işletme kurallarının yan yana geldiği sahalarda kimin alanı teslim edeceğini ve hangi koşul gerçekleşince sepetin yükseleceğini daha açık yazmayı gerektirir. Buradaki hizmet açımız, hızın izin adımlarını atlamakla değil, değişen alanı kontrollü biçimde yeniden devralmakla sağlanmasıdır.",
        maddeler: [
            { baslik: "Şantiye sınırı değiştikçe izni etaplandırmak", metin: "Genişleme projelerinde tek bir genel izin haftalar boyunca geçerli tutulursa sahadaki gerçeklik kısa sürede formdan kopar. Çelik karkas, mekanik tesisat, elektrik bağlantısı ve devreye alma için ayrı çalışma bölgeleri tanımlarız. Bir etap bittiğinde platform park edilir, alan ana yükleniciye teslim edilir ve sonraki bölümün yaklaşma yolu yeniden incelenir. Yeni kurulan duvar, bırakılan malzeme veya açılan zemin boşluğu keşif koşulunu değiştirmişse makine hareketi başlamaz. Etaplı izin, her ekibin kendi işini görünür kılar ve eski onayın yeni tehlikeleri örtmesini engeller." },
            { baslik: "Faal tesis ile proje yüklenicisini aynı plana almak", metin: "İşletme personeli üretim ve iç lojistiği, proje ekibi montaj sırasını, manlift operatörü ise makinenin çalışma zarfını bilir. Üç taraf aynı saha turuna katılmadığında herkes kendi açısından doğru fakat birbiriyle çelişen plan üretebilir. Başlangıç toplantısında ortak koridorlar, durdurulamayacak faaliyetler, malzeme kaldırma işleri ve yaya geçişleri işaretlenir. İzin sorumlusu tek isimle belirlenir; operatör farklı ekiplerden sözlü talimat alarak alan değiştirmez. Böylece yüklenici koordinasyonu, sorumluluğun dağıldığı bir telefon zinciri olmaktan çıkar." },
            { baslik: "Geçici zemin ve açıklıkları makine rotasından ayırmak", metin: "Yeni yapı ve kapasite artışı sahalarında bitmiş betonun yanında dolgu alan, kanal kapağı, döşeme boşluğu veya geçici rampa bulunabilir. Manliftin ağırlığı yalnız tekerin bastığı noktaya değil, sürüş ve yükselme sırasında zemine farklı biçimde aktarılır. Rota saha yetkilisiyle yürünür; taşıma yeterliliği belirsiz kapak veya dolgu üzerinden geçiş yapılmaz. Güvenli yol yoksa uygun makine sınıfı, zemin iyileştirmesi ya da farklı erişim noktası değerlendirilir. Operatörün göz kararıyla zemini denemesi iş yöntemi olarak kabul edilmez." },
            { baslik: "Sıcak iş ve yüksekte erişimi ayrı izinlerde bağlamak", metin: "Sepetten taşlama, kesme veya kaynak yapılacaksa yalnız yüksekte çalışma tedbirleri yeterli değildir. Kıvılcım yayılımı, yanıcı malzeme temizliği, yangın gözcüsü, söndürme ekipmanı ve iş sonrası alan kontrolü sıcak iş izninde tanımlanır. Manlift sepetinin kapasitesi, kablo ve ekipmanın yerleşimi ayrıca değerlendirilir; korkuluk üzerine malzeme asılmaz. Sıcak iş onayı kapanırsa platform erişim izni açık olsa bile işlem sürmez. İki izin arasındaki bu bağ, proje temposunun farklı risk disiplinlerini birbirine karıştırmasını önler." },
            { baslik: "Devreye alma aşamasında yetki değişimini yönetmek", metin: "Bir bölüm ana yükleniciden işletmeye geçtiğinde alanın kuralları da değişebilir. Şantiye kartıyla girilen koridor artık tesis oryantasyonu, hijyen veya üretim izni isteyebilir. Devir tarihi iş programında görülür; operatör ve makine bildirimleri yeni sorumlu birime aktarılır. Enerji verilen ekipman çevresindeki çalışma için eski montaj yöntemi kullanılmaz, tesisin izolasyon prosedürü devreye girer. Yetki sınırındaki bu geçişi önceden planlamak, tamamlanmaya yakın projelerde en sık görülen izin boşluklarından birini kapatır." },
        ],
        ekBolumler: [
            { baslik: "Torbalı projesinde izin-etap eşleştirmesi", paragraflar: ["Matris, büyüyen bir sanayi sahasında manlift işinin hangi aşamada hangi kabulü bekleyeceğini gösterir. Gerçek görevler ve yetkililer proje başlangıcında tesisle birlikte doldurulur."], tablo: { basliklar: ["Etap", "Alan durumu", "Ana kontrol", "İzin kapanış koşulu"], satirlar: [["Kaba montaj", "Geçici yollar ve açık işler", "Zemin rotası ile alt alan", "Montaj bölgesi temiz teslim"], ["Mekanik-elektrik", "Birden çok yüklenici aynı hacimde", "Enerji ve iş çakışması", "Test öncesi alet sayımı"], ["Sıcak iş", "Kıvılcım ve yangın riski", "Ayrı sıcak iş onayı", "İş sonrası alan gözetimi"], ["Devreye alma", "Ekipman kısmen enerjili", "İzolasyon yetkisi", "Fonksiyon testi sorumlusuna teslim"], ["Faal işletme", "Üretim ve lojistik sürüyor", "Tesis work-permit sistemi", "Alan sahibinin kapanış imzası"]] } },
            { baslik: "Günlük koordinasyon toplantısının çıktısı", paragraflar: ["Kısa saha toplantısında o günün manlift hareketleri, üst üste gelecek yüklenici işleri ve kapatılacak koridorlar ele alınır. Toplantı genel bir güvenlik konuşmasıyla sınırlı kalmaz; makinenin hangi saat aralığında hangi aksa gideceği ve alanı kimin teslim edeceği yazılır. Vinç kaldırması, beton dökümü veya yoğun sevkiyatla çakışan pencere başka saate alınır.", "Günün sonunda tamamlanan noktalar işaretlenir, yeni engeller fotoğraflanır ve ertesi vardiyanın planına aktarılır. Bu kayıt özellikle proje hızlandığında değerlidir: sözlü değişikliklerin arasında eski rota veya izin bilgisinin kullanılmasını engeller. Program kayarsa kiralama süresi de görünür biçimde güncellenir; bekleme ile fiilî çalışma birbirine karışmaz." ] },
            { baslik: "Belge setini proje boyunca güncel tutmak", paragraflar: ["Uzun süren sahalarda bir raporun işe başlarken geçerli olması, proje sonunda da geçerli kalacağı anlamına gelmez. Makine kontrol tarihi, operatör sağlık ve eğitim kayıtları ile araç bildirimlerinin süreleri takip edilir. Değişim gerekiyorsa yeni makine veya kişinin dosyası sahaya gelmeden onaya sunulur; seri numarası değişikliği sessizce yapılmaz.", "Tesisin oryantasyonu dönemsel yenileme istiyorsa ekip takvimine eklenir. Alt yüklenici zincirinde sözleşme tarafı değiştiğinde giriş yetkisi de teyit edilir. Belge yönetimini yalnız ilk gün yapılan bir kabul değil, projenin her etabında yaşayan bir kontrol olarak ele almak, Torbalı'daki değişken sahalarda operasyonun kesintiye uğramasını azaltır." ] },
        ],
        sss: [
            { soru: "Torbalı'daki yeni fabrika sahasına hangi evraklarla giriyorsunuz?", cevap: "Listeyi tesis veya ana yüklenicinin kabul prosedüründen alırız. Makineye ait güncel kontrol ve bakım kayıtları, görevlendirilen operatörün yeterlilik ile istenen sağlık-eğitim belgeleri, araç-personel bildirimleri ve işe özgü yöntem/risk dosyası temel seti oluşturur. Sıcak iş ya da enerji izolasyonu varsa bunlar ayrı izin akışına bağlanır. Belgelerde kişi, makine ve iş emri eşleşmesini kontrol eder; onay görülmeden sevkiyatı kesinleştirmeyiz. Şantiye aşamasından işletmeye geçişte kabul birimi değişebileceği için dosya yeni sorumluya yeniden sunulur." },
            { soru: "İş alanı her gün değişiyorsa her seferinde yeni izin mi gerekir?", cevap: "İznin kapsamı yeni alanı ve yeni tehlikeleri karşılamıyorsa evet, revizyon veya yeni izin gerekir. Aynı aks içinde şartlar değişmeden ilerleyen işler etap ekiyle yönetilebilir; başka hol, farklı enerji kaynağı, yeni trafik rotası veya sıcak iş başlangıcı eski formun sınırını aşar. Operatör sözlü olarak başka noktaya gönderilmez. Alan sahibiyle yerinde kontrol yapılır, bariyer ve yaklaşım planı güncellenir, sonra çalışma başlar. Bu yöntem işi yavaşlatmak yerine uygunsuz alana kurulup geri dönme kaybını önler." },
            { soru: "Ana yüklenici izin verdiğinde tesis onayı ayrıca gerekli mi?", cevap: "Sorumluluk yapısı projeye göre değişir ve başlangıçta yazılı netleştirilmelidir. Faal tesis içinde enerji, üretim veya lojistik alanına dokunan bir işte yalnız proje yüklenicisinin onayı yeterli olmayabilir; alan sahibi işletmenin yetkili birimi de devreye girer. Biz tek izin sorumlusunun kim olduğunu ve hangi konularda tesis teyidi gerektiğini iş emrinde görmek isteriz. Çelişkili talimat geldiğinde sepet kaldırılmaz, taraflar ortak karara çağrılır. Operatör yetki anlaşmazlığını sahada yorumlamak zorunda bırakılmaz." },
            { soru: "Geçici dolgu zeminde arazi tipi manlift kullanılabilir mi?", cevap: "Makinenin arazi tipi olması zeminin taşıma yeterliliğini garanti etmez. Dolgunun sıkışması, eğim, kenar mesafesi, gömülü hatlar ve yağış sonrası değişim saha yetkilisi tarafından değerlendirilmelidir. Gerekirse mühendislik doğrulaması veya yük dağıtıcı düzen istenir. Güvenli rota belirlenemiyorsa çalışma ertelenir ya da farklı erişim yöntemi seçilir. Operatör zemini tekerle deneyerek karar vermez. Makine seçiminden önce rota fotoğrafı ve zemin bilgisi istememizin nedeni budur." },
            { soru: "Sıcak iş için manlift operatörü kaynakçı olabilir mi?", cevap: "Görev ve yeterlilikler ayrı değerlendirilir. Manlifti kullanan kişinin platform operatörlüğü için, sıcak işi yapan kişinin de ilgili iş için gerekli yetkinliği bulunmalıdır. Aynı kişinin iki rolü üstlenmesi tesis prosedürü, belgeler ve güvenli kumanda düzeniyle açıkça kabul edilmedikçe varsayılmaz. Yangın gözcüsü de bağımsız sorumluluktur. Sepetteki kişi sayısı ve ekipman toplamı kapasite sınırını aşamaz. Talepte işi kimin yapacağını belirtmeniz, doğru ekip ve izin yapısını baştan kurmamızı sağlar." },
            { soru: "Proje takvimi kayarsa makine sahada kalabilir mi?", cevap: "Güvenli park, yetkisiz kullanımı önleme ve sözleşme uzatma koşulları sağlanırsa kalabilir. Bekleme günlerinin nasıl ücretleneceği teklif aşamasında yazılır; program kayması ortaya çıktığında yeni bitiş tarihi birlikte teyit edilir. Makine sepeti aşağıda ve anahtarı sorumluda park edilir, kontrol ile şarj düzeni bekleme sırasında da sürer. Evraklardan birinin süresi dolacaksa çalışma yeniden başlamadan yenilenir. Belirsiz süre boyunca sahada bırakmak yerine etaplara bağlı uzatma planı maliyet ve güvenliği daha görünür tutar." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Torbalı'nın gelişen sanayi aksı niteliği kamuya açık bilgidir; etaplı work-permit, yüklenici koordinasyonu ve belge takibi firma saha pratiğidir. Tesis, kapasite, süre veya başarı iddiası uydurulmamıştır.",
    },
    "bolge:itob-osb": {
        h1: "İTOB OSB Manlift Kiralama: Girişten İzin Kapanışına Kontrollü Hizmet",
        giris: "İTOB Organize Sanayi Bölgesi'ndeki bir manlift görevinin güvenli başlangıcı, nakliye aracının kapıya gelmesi değil; bölge ve işletme kurallarının aynı iş planında buluşmasıdır. OSB sahasına araç-personel bildirimi, tesisin yüklenici kabulü, makineye ait kontrol kayıtları ve işe özgü çalışma izni birbirini tamamlayan fakat farklı sorumlularca yönetilebilen adımlardır. Biz talebi bu kapılara ayırır, her birinin sahibi ile onay kanıtını sevkiyat programında gösteririz. İTOB OSB'nin varlığı ve sanayi alanı niteliği kamuya açık bir gerçek olmakla birlikte, tek tek işletmelerin üretim biçimi, vardiyası veya iç kuralı hakkında varsayım yapmayız. Teklif öncesi form bu nedenle yalnız metraj sormaz; giriş yetkilisini, çalışma alanını, yakın enerji kaynaklarını, iç trafik düzenini ve işin kim tarafından teslim alınacağını da sorar. Belgeli operatörlü modelimiz, çok taraflı izin akışında personel ile ekipman dosyasının tek elden güncel tutulmasını ve saha talimatının makineyi kullanan kişiye doğrudan ulaşmasını sağlar.",
        maddeler: [
            { baslik: "OSB kapısı ile tesis kapısını birbirinden ayırmak", metin: "Bölgeye girebilen nakliye aracının otomatik olarak üretim sahasına kabul edildiği düşünülmemelidir. Araç ve personel ön bildirimi OSB güvenlik adımını, yüklenici dosyası ise işletmenin kendi kabulünü karşılar. Talep aşamasında iki kontrolün iletişim kişilerini belirler, plaka ve personel listesini kesinleşmeden göndermeyiz. Makine taşıyıcıdan indirilecek alan da tesisle teyit edilir. Birinci kapının onayı ikinci kapının yerine kullanılmadığı için, sevkiyat günü güvenlik noktasında başlayan telefon trafiği ve sorumluluk belirsizliği azalır." },
            { baslik: "Makine dosyasını seri numarası üzerinden kurmak", metin: "Periyodik kontrol raporunun geçerli olması kadar sahaya gelen manlifte ait olması da zorunludur. Rezervasyondaki makinenin seri numarasını rapor ve bakım kaydıyla eşleştirir, değişim gerekirse yeni dosyayı onaya sunarız. Operatör günlük kontrolde güvenlik tertibatı, acil indirme, lastik, korkuluk ve uyarıları gözden geçirir; uygunsuzluğu olan ekipman izin açık olsa bile kullanılmaz. Bu izlenebilirlik, genel filo belgesi göstererek sahada farklı bir makine çalıştırılması riskini ortadan kaldırır." },
            { baslik: "İzin sorumlularını isim ve rolle tanımlamak", metin: "Çalışma iznini kimin açacağı, enerji izolasyonunu kimin doğrulayacağı ve alanı kimin teslim alacağı baştan bilinmelidir. Bu roller aynı kişide olabilir veya farklı birimlere dağılabilir; biz organizasyonu tahmin etmeyiz. İş emrinde her rol için tesisin bildirdiği irtibatı kaydederiz. Operatör çalışma alanını sözlü yönlendirmeyle değiştirmez, izin sahibi görmeden enerji durumuna karar vermez. Yetki haritası, acil veya vardiya dışı saatlerde kimin aranacağı sorusunu da çalışma başlamadan çözer." },
            { baslik: "Boşaltma ve iç hareketi izin kapsamına almak", metin: "Manliftin taşıyıcıdan indirilmesi de operasyonun parçasıdır. Düz ve taşıma kapasitesi uygun boşaltma alanı seçilir; yol eğimi, yaya geçişi ve çalışan tesis araçları değerlendirilir. Makine indirildikten sonra çalışma noktasına giden rota gözcüyle yürünür, dar kapı ve dönüşler ölçülür. Sepet indirilmiş durumda hareket edilir ve yetkisiz biri makineyi yönlendirmez. Teslimatın güvenlik planına dâhil edilmesi, asıl iş başlamadan oluşabilecek araç-makine temasını görünür kılar." },
            { baslik: "İzin kapanışını fiziksel alan teslimiyle bağlamak", metin: "İş tamamlandı denmesi, izin formunu kapatmak için tek başına yeterli değildir. Sepette kullanılan alet ve malzeme sayılır, düşen parça ihtimali kontrol edilir, geçici bariyerler alan sahibinin onayıyla kaldırılır. Enerji izolasyonu uygulanmışsa yalnız yetkili tesis personeli geri alır. Manlift güvenli park veya yükleme noktasına çekildikten sonra alan teslim tutanağı kapanır. Ertelenen bir görev varsa tamamlanmış işten ayrılır ve yeni izin gerektireceği açıkça yazılır; açık risk sonraki vardiyaya görünmeden bırakılmaz." },
        ],
        ekBolumler: [
            { baslik: "İTOB OSB giriş ve izin sorumluluk tablosu", paragraflar: ["Aşağıdaki tablo süreçteki kapıları birbirine karıştırmadan izlemek için kullanılır. Gerçek belge adları ve yetkililer ilgili tesisin prosedürüyle doldurulur."], tablo: { basliklar: ["Kontrol kapısı", "Gerekli veri", "Onay tarafı", "Bizim doğrulamamız"], satirlar: [["OSB girişi", "Araç ve personel bildirimi", "Bölge güvenliği", "Liste ile geliş bilgisinin eşleşmesi"], ["Tesis kabulü", "Yüklenici ve görev dosyası", "İşletme güvenliği", "Süre ve görevlendirme kontrolü"], ["Makine kabulü", "Seri numaralı kontrol raporu", "Tesis İSG/bakım", "Gelen makineyle belge eşleştirme"], ["Çalışma izni", "Alan, zaman, yöntem ve risk", "Alan sahibi", "Operatör brifingi"], ["Kapanış", "Alet sayımı ve alan teslimi", "İzin sahibi", "Makine park/yükleme kaydı"]] } },
            { baslik: "Tekliften sevkiyata belge takvimi", paragraflar: ["İlk görüşmede hedef yükseklik ve makine tipinden önce giriş süresini etkileyen bilgiler toplanır: çalışma tarihi, görevli şirket, tesis irtibatı, operatör tercihi ve özel izin başlıkları. Uygun makine belirlendiğinde seri numaralı evrak paketi hazırlanır. Personel bilgileri yalnız görevlendirilecek kişiler için paylaşılır ve istenen kanaldan ön onaya gönderilir.", "Eksik veya revize talebi geldikten sonra takvim yeniden değerlendirilir. Onaylanmamış dosyayla aracı yola çıkarmak hız değil, bekleme maliyeti üretir. Bütün kapılar hazır olduğunda boşaltma saati ve alanı teyit edilir. Bu program müşteriye yazılı sunulduğu için, gecikmenin hangi onayda olduğu ve sonraki adımın kime ait bulunduğu görünür kalır." ] },
            { baslik: "Operatör brifingi ve saha disiplininin kaydı", paragraflar: ["Operatöre yalnız adres gönderilmez. İzin kapsamı, yasak bölgeler, iç trafik yönü, acil toplanma ve tesis irtibatı işe çıkmadan paylaşılır; sahada alan sorumlusu ile tekrar edilir. Makineye özgü günlük kontrol tamamlanır, zemin gözcüsünün rolü açıklanır ve iletişim yöntemi denenir.", "Çalışma sırasında koşul değişirse operatör durdurma yetkisini kullanır ve alan sorumlusuna haber verir. Bu davranış gecikme olarak değil, yöntem planının bir parçası olarak kabul edilir. Gün sonu notunda duruş nedeni, tamamlanan iş ve makinenin park durumu bulunur. Tekrarlanan bakımda doğrulanmış saha bilgisi sonraki brifingi güçlendirir, fakat yeni koşul kontrolünün yerine geçmez." ] },
        ],
        sss: [
            { soru: "İTOB OSB'ye teslimat için kaç gün önce bildirim gerekir?", cevap: "Sabit bir süre vermek doğru olmaz; bildirim kuralı tesisin ve bölge girişinin güncel prosedürüne, işin niteliğine ve personel kabul şartlarına bağlıdır. Talep geldiğinde iki kontrol kanalından gereken evrak ile değerlendirme süresini yazılı öğreniriz. Makine ve operatör dosyasını buna göre hazırlar, onay saatini görmeden kesin teslim sözü vermeyiz. Daha önce doğrulanmış çerçeve dosyası olan tesiste tekrar eden bilgiler hız kazandırabilir; seri numarası, tarih ve görev eşleşmesi her yeni işte yine kontrol edilir." },
            { soru: "OSB giriş onayı çalışma izni yerine geçer mi?", cevap: "Hayır. Giriş onayı aracın ve personelin bölgeye kabulünü gösterir; çalışma izni ise belirli alanda, belirli zamanda ve tanımlı yöntemle iş yapılmasına izin verir. Tesis yüklenici kabulü de ayrı bir kapı olabilir. Operatörümüz bu onayların kapsamını görmeden makineyi çalışma konumuna kurmaz. Bir belgenin diğerinin yerine kullanılması, özellikle enerji izolasyonu ve iç trafik sorumluluğunda ciddi boşluk yaratır. Programda her kapıyı ayrı satırda izlememizin nedeni budur." },
            { soru: "Son anda farklı manlift gönderilebilir mi?", cevap: "Ancak yeni makinenin teknik uygunluğu doğrulanır ve seri numarasına bağlı evrakı tesis tarafından kabul edilirse gönderilebilir. Aynı model olması, kontrol raporunun otomatik taşınacağı anlamına gelmez. Değişim ihtiyacı oluştuğunda yeni dosyayı paylaşır, nakliye saatini onay sonrasına bağlarız. Acil baskıyla belgede bir makine görünürken sahada başka bir ekipman çalıştırmayız. Bu kural hem denetim izini hem gerçek bakım ve kontrol durumunu korur." },
            { soru: "Kendi operatörümüz makineyi teslim alabilir mi?", cevap: "Tesis kuralları izin veriyor ve kullanacak kişinin geçerli yeterliliği doğrulanıyorsa mümkündür. Kişi listesi önceden bildirilir; makine başında kumanda, acil indirme, günlük kontrol ve şarj/park uygulaması tutanakla aktarılır. Bir kişinin teslim alması diğer çalışanlara kullanım yetkisi vermez. Vardiya değişecekse tüm operatörler ayrı listelenir. Yetki sınırı ve hasar bildirimi sözleşmede açık yazılır; anahtar sorumlu kişide tutulur." },
            { soru: "Boşaltma alanını önceden bilmek neden gerekli?", cevap: "Taşıyıcı aracın manevrası ve manliftin rampadan inişi, çalışma sahasından farklı riskler taşır. Eğimli, yoğun trafikli veya zemini belirsiz bir noktada doğaçlama boşaltma hem ekipmanı hem çevredeki kişileri tehlikeye atar. Net konum, yaklaşma yönü, zemin ve araç bekleme alanı önceden görülür. Tesis sevkiyat sorumlusu saati onaylar ve gerekiyorsa güzergâhı geçici olarak ayırır. Böylece araç kapıda yer aramaz, makine de uygunsuz noktada indirilmez." },
            { soru: "İş bittikten sonra hangi belgeler teslim edilir?", cevap: "Tesisin formatına göre kapatılmış çalışma izni, alan teslim kaydı, operatör günlük kontrolü ve varsa uygunsuzluk/duruş notu dosyada yer alır. Enerji izolasyonunun kaldırılması tesis yetkilisinin kaydıyla gösterilir. Alet veya malzeme sayımı istenen işlerde sonuç eklenir. Makine iade kontrolü de ayrı tutulur; iş alanının kapanışıyla ekipman teslimi karıştırılmaz. Bu kayıtlar denetim için geriye dönük iz sağlar ve tekrarlanan işte hangi hazırlığın işe yaradığını görmeye yardım eder." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. İTOB OSB'nin varlığı kamuya açık bilgidir; iki aşamalı giriş, seri numarası eşleştirmesi, izin sorumluluk matrisi ve kapanış düzeni firma pratiğidir. İşletme adı, kapasite veya doğrulanmamış yerel ayrıntı kullanılmamıştır.",
    },
    "bolge:kinik": {
        h1: "Kınık'ta Belgeli Operatörlü Manlift Kiralama ve İSG Planı",
        giris: "Kınık'taki bir yüksekte çalışma talebinin ilçe ölçeğinde olması, uygulanacak güvenlik standardını küçültmez. Tek günlük çatı detayı, belediye çevresindeki bir bakım noktası, işyeri tabelası veya kapalı bir işletme alanındaki tesisat işi; makinenin güncel kontrol belgesi, yetkin operatör, uygun zemin, çevre ayrımı ve kurtarma planı olmadan başlatılamaz. Biz Kınık sevkiyatını büyük bir sanayi tesisindeki hazırlıkla aynı temel üzerinden yürütür, yalnız işin gerçek kapsamına göre sadeleştiririz. Ön görüşmede hedef, yaklaşma yolu ve kamusal etkileşim öğrenilir; seri numarasına bağlı ekipman dosyası hazırlanır; operatör ile saha sorumlusunun görevleri yazılır. İlçe hakkında doğrulanmamış tesis, faaliyet veya yoğunluk iddiası kullanmak yerine her başvuruyu kendi fotoğrafı, ölçüsü ve işveren bilgisiyle değerlendiririz. Böylece küçük iş bahanesiyle belgesiz ve doğaçlama çalışma normalleşmez; gereksiz evrak yığını da yaratılmadan denetlenebilir bir saha düzeni kurulur.",
        maddeler: [
            { baslik: "Küçük iş ile düşük risk varsayımını ayırmak", metin: "Bir armatürü değiştirmek kısa sürebilir, fakat sepete çıkış yüksekliği, elektrik teması, araç trafiği ve düşen cisim tehlikesi süreyle küçülmez. Talebi görev süresine bakarak sınıflandırmak yerine hedefin çevresini inceleriz. Enerji kesme gereksinimi, alt alanın kapatılabilirliği ve makinenin güvenli kurulum noktası netleşmeden fiyat ve araç seçimi kesinleştirilmez. Kısa işte hazırlığın oranı büyük görünebilir; buna rağmen kazayı önleyen adımların hiçbiri yalnız iş birkaç saat sürecek diye atlanmaz." },
            { baslik: "Uzak sevkiyatta yanlış makine riskini azaltmak", metin: "Merkezden uzaktaki bir teslimatta eksik ölçü yüzünden makine değiştirmek hem zamanı hem nakliyeyi büyütür. Hedef kotu, altındaki engel, giriş genişliği, zemin yüzeyi ve park mesafesi ölçülü fotoğrafla toplanır. Makaslı, eklemli veya farklı erişim çözümü çalışma zarfına göre seçilir; yalnız istenen metre ifadesine güvenilmez. Güzergâhta erişimi etkileyen dar dönüş veya yol kısıtı varsa sevkiyat öncesi belirtilir. Doğru bilgi ilk araçla doğru ekipmanı götürmenin ve ilçedeki işi bekletmemenin esas yoludur." },
            { baslik: "Kamusal çevrede üçüncü kişiyi korumak", metin: "Çalışma alanı işletme sınırının dışına taşıyor veya yaya ile araçların kullandığı bir bölgeye yaklaşıyorsa, yalnız sepet içindeki personelin emniyeti yeterli değildir. Makinenin dönüş ve bom tarama alanı fiziksel olarak ayrılır, yönlendirme için zemin görevlisi konur ve geçişler güvenli alternatif rotaya alınır. Yetkili kurum ya da alan sahibinden gereken kullanım onayı işverence sağlanır; biz uygulama planını bu onaya göre kurarız. Sepetten malzeme düşmesini önleyen alet bağlama ve kontrollü taşıma kuralları bütün süre boyunca sürer." },
            { baslik: "Yerel saha sorumlusu ile operatörün görevini netleştirmek", metin: "Operatör manlifti güvenli kullanır, fakat binanın enerji tesisatını, mülkiyet sınırını veya işverenin teknik yöntemini tek başına doğrulayamaz. Kınık'taki her iş için alanı teslim edecek ve gerekli izolasyonları onaylayacak bir saha sorumlusu isteriz. Operatör günlük kontrolü ile çalışma zarfını yönetir; saha sorumlusu enerji, izin ve çevre koşullarını teyit eder. Görev paylaşımı başlangıç brifinginde yazılır. Böylece bir sorun çıktığında kararın kime ait olduğu sözlü tahminlere kalmaz." },
            { baslik: "Geri dönüş planını teslimattan önce kurmak", metin: "İş bitişi ve makinenin alınacağı saat ilk sevkiyat kadar önemlidir. Taşıyıcının tekrar kurulacağı alan boş tutulur, çalışma sonunda ekipman güvenli park noktasına çekilir ve iade kontrolü yapılır. Hava, saha izni veya teknik nedenle iş tamamlanamazsa uzatma kararı sözleşme koşullarına göre yazılı verilir; makine sahipsiz bırakılmaz. Operatörlü günlük işlerde personelin dönüş ve dinlenme planı da programa dâhildir. Bu düzen, ilçe sevkiyatını tek yönlü bir teslimat değil başı ve sonu tanımlı operasyon yapar." },
        ],
        ekBolumler: [
            { baslik: "Kınık işi için ölçekten bağımsız güvenlik kontrolü", paragraflar: ["Tablo, iş birkaç saat de sürse birkaç gün de sürse korunacak asgari kontrol halkalarını gösterir. Sahanın ek kuralları varsa bunlar ayrıca plana eklenir."], tablo: { basliklar: ["Halka", "Sorulan kanıt", "Sorumlu taraf", "Başlama koşulu"], satirlar: [["Makine", "Seri numaralı güncel kontrol", "Kiralayan", "Dosya ile ekipman eşleşmiş"], ["Operatör", "Yeterlilik ve görevlendirme", "Kiralayan/işveren", "Yetkili kullanıcı belirlenmiş"], ["Alan", "Zemin ve çevre ayrımı", "Saha sorumlusu", "Kurulum yeri teslim edilmiş"], ["Enerji", "İzolasyon veya güvenli mesafe", "İşveren teknik yetkilisi", "Tehlike kaynağı kontrol altında"], ["Kurtarma", "Alt kumanda ve iletişim", "Operatör ile zemin görevlisi", "Uygulamalı brifing tamam"]] } },
            { baslik: "Uzaktan keşif ile yerinde son kontrolün sınırı", paragraflar: ["Fotoğraf, video ve ölçü paylaşımı Kınık sevkiyatında doğru ekipmanı önceden ayırmayı sağlar. Görseller hedefin tamamını, makinenin yaklaşacağı rotayı ve zemini göstermelidir. Yüksekliğin tahmini yerine ölçü veya yapı planı, kapının ise net açıklığı istenir. Bu veri teklif ile taşıma planının dayanağıdır.", "Uzaktan keşif, operatörün sahadaki son kontrolünün yerini tutmaz. Yağış sonrası zemin, park edilmiş araç, açık bırakılmış kapak veya yeni bir enerji hattı geliş anında koşulu değiştirebilir. Operatör uygunsuzluk görürse çalışma durur; çözüm alan sorumlusuyla kayda alınır. Ön bilgi hazırlığı hızlandırır, nihai güvenlik kararı gerçek sahada doğrulanır." ] },
            { baslik: "Belgelendirilmiş kapanış ve tekrar eden talep", paragraflar: ["Tamamlanan noktalar işverenle gezilir, alandaki bariyer ve malzeme kontrollü kaldırılır. Günlük makine formu, çalışma zamanı ve varsa duruş nedeni teslim kaydına eklenir. Teknik işin kabulü müşterinin yetkili kişisine aittir; operatör erişim sağladığı için yapılan bakımın doğruluğunu onaylayan taraf olmaz.", "Aynı adreste yeniden ihtiyaç oluşursa ölçü ve erişim notları başlangıç verisi olarak kullanılabilir. Bununla birlikte makine raporu, personel ve saha koşulu yeni tarih için tekrar kontrol edilir. Eski fotoğrafa dayanarak zeminin veya çevrenin değişmediği kabul edilmez. Bu ayrım hem hazırlık süresini azaltır hem geçmiş kaydın yanlış bir kalıcı izin gibi kullanılmasını önler." ] },
        ],
        sss: [
            { soru: "Kınık'a tek günlük manlift gönderilir mi?", cevap: "Uygun makine, nakliye ve operatör takvimi eşleştiğinde tek günlük iş planlanabilir. Ancak kısa süre belge, keşif ve alan ayrımı gerekliliğini kaldırmaz. Hedef yüksekliği, alt engeller, zemin, giriş rotası ve çalışma tarihi önceden alınır; seri numaralı makine dosyası hazırlanır. Operatörlü hizmette geliş, uygulama ve dönüş aynı programda yazılır. Net teklif, bu bilgiler ile güncel uygunluk görüldükten sonra verilir; doğrulanmamış bir aynı gün sözüyle prosedürü atlamayız." },
            { soru: "Sadece tabela işi için operatör belgesi gerekli mi?", cevap: "Manlifti kullanan kişinin yetkinliği, yapılan bakımın türüne değil ekipmanın kullanımına bağlıdır. Tabela işi kısa olsa da yetkisiz kişinin platformu sürmesi kabul edilmez. Operatörlü seçenekte belgeli personeli biz görevlendiririz. Müşterinin operatörü kullanacaksa yeterlilik önceden görülür ve makineye özgü teslim eğitimi yapılır. Tabelayı monte eden kişinin teknik yeterliliği ise işverence ayrıca yönetilir; manlift operatörü olmak montaj uzmanlığı anlamına gelmez." },
            { soru: "Yol veya kaldırım kenarında çalışma nasıl planlanır?", cevap: "Önce alanın kullanım yetkisi ve gerekli kurum/alan sahibi onayı işveren tarafından netleştirilir. Makinenin ayak izi, hareket zarfı ve düşen cisim bölgesi yaya ile araç akışından fiziksel olarak ayrılır. Güvenli geçiş rotası ve yönlendirme görevlisi belirlenir; yalnız uyarı şeridine güvenilmez. Trafiği etkileyen bir düzen için yetkili mercilerin koşulları uygulanır. Kurulum alanı sağlanamıyorsa makine çalıştırılmaz ve farklı erişim yöntemi değerlendirilir." },
            { soru: "Fotoğraf göndererek makine seçilebilir mi?", cevap: "Çoğu standart işte ölçülü fotoğraf ve kısa video ön seçim için yeterli olabilir. Hedef kotu, hedefin altındaki engelin yatay mesafesi, en dar geçiş ve zemin görüntüsü birlikte gerekir. Görselin ölçeği bilinmiyorsa yanıltıcı olabilir; bu yüzden ölçü talep ederiz. Karmaşık enerji, zemin veya kamusal alan koşulunda yerinde keşif gerekir. Uzaktan seçilen makine de teslimatta operatör kontrolünden geçer; sahadaki gerçek durum uygun değilse çalışma başlamaz." },
            { soru: "Elektrik armatürü değişirken enerjiyi operatör kesebilir mi?", cevap: "Hayır; tesisatın izolasyonu işverenin yetkili elektrik personeli tarafından kendi prosedürüne göre yapılmalı ve doğrulanmalıdır. Operatör manlifti konumlandırır ve erişimi yönetir, enerji güvenliğinin teknik sorumluluğunu üstlenmez. Kilitleme/etiketleme veya ilgili güvenli çalışma yöntemi tamamlanmadan sepet yükseltilmez. İş bittikten sonra enerjiyi geri verme kararı da tesis yetkilisine aittir. Bu görev ayrımını başlangıç brifinginde açıkça kaydederiz." },
            { soru: "Hava nedeniyle iş yarım kalırsa ne olur?", cevap: "Makinenin üretici sınırı, görüş, yağış, zemin ve yapılacak iş birlikte değerlendirilir. Güvenli koşul yoksa operatör çalışmayı durdurur. Alan bariyerleri emniyetli biçimde bırakılır veya kaldırılır, ekipman düz park noktasına çekilir ve işverene durum kaydı verilir. Yeni pencere ile kiralama uzatması yazılı kararlaştırılır; belirsiz biçimde sahada beklenmez. Güvenlik kaynaklı durdurma, işi tamamlama baskısıyla geçersiz kılınamaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kınık'ın İzmir ilçesi olması kamuya açık bilgidir; ölçekten bağımsız belge standardı, uzaktan keşif sınırı ve kapanış düzeni firma pratiğidir. Yerel tesis, sektör, süre veya mesafe iddiası üretilmemiştir.",
    },
    "bolge:foca-cevre-ilce": {
        h1: "Foça Çevre İlçede Kamusal Alan Güvenlikli Manlift Kiralama",
        giris: "Foça çevresindeki bir cephe, çatı, aydınlatma veya tabela işi; makine özel mülk içinde kalsa bile yaya yolu, komşu kullanım, araç geçişi ve açık hava koşullarıyla birlikte değerlendirilmelidir. İlçenin kamuya açık sahil ve turizm karakteri, özellikle üçüncü kişilerin çalışma alanına yaklaşabileceği senaryolarda belirgin bir çevre kontrolü gerektirir; fakat bu genel özellikten hareketle belirli bir işletme, sokak yoğunluğu veya proje hakkında iddia üretmeyiz. Her talepte alan kullanım yetkisini, makinenin kurulacağı yüzeyi, bom ya da şase hareket zarfını ve güvenli yaya yönlendirmesini somut konum üzerinden doğrularız. Belgeli operatör manliftin sınırlarını yönetirken işveren gerekli alan izinlerini ve teknik izolasyonu sağlar; zemin görevlisi ise çevrenin ayrımını korur. Foça çevre ilçe hizmetimizin temel ilkesi, işi kısa sürede bitirmek için kamusal güvenliği gevşetmek değil, doğru saat, doğru kurulum noktası ve görünür bir dış çevre planıyla çalışmayı başlatmaktır.",
        maddeler: [
            { baslik: "Alan kullanım yetkisini makine rezervasyonundan önce görmek", metin: "Kaldırım, yol kenarı, ortak otopark veya başkasının geçiş hakkını etkileyen bir kurulum için işverenin ilgili alan sahibi ya da yetkili kurumla koşulları netleştirmesi gerekir. Biz makinenin kaplayacağı alanı, hareket zarfını ve tahmini çalışma düzenini bu başvuruya esas olacak biçimde tarif ederiz; izin vermeye yetkili tarafın yerine karar vermeyiz. Onay saat veya bariyer koşulu içeriyorsa sevkiyat buna göre planlanır. Alan kullanımı kesinleşmeden makineyi gönderip sahada yer aramak, güvenli ve kabul edilebilir bir yöntem değildir." },
            { baslik: "Yaya akışını yalnız şeritle değil rota ile yönetmek", metin: "Uyarı şeridi tehlikeyi gösterir, fakat insanların nereye geçeceğini tek başına çözmez. Çalışma alanının iki ucunda görünür yönlendirme yapılır; çocuk, yaşlı veya hareket kısıtlı kişiler için kesintisiz alternatif güzergâh korunur. Bina girişi kapatılacaksa kullanıcılar önceden bilgilendirilir ve kontrollü geçiş zamanları saha sorumlusunca yönetilir. Operatör sepet yukarıdayken bariyeri terk edip yaya yönlendiremez; bu görev zemin ekibine aittir. Böylece erişim işi çevredeki kişileri doğaçlama biçimde araç yoluna itmez." },
            { baslik: "Sahil koşulunda rüzgâr kararını kayıtlı vermek", metin: "Açık alandaki çalışma için üreticinin makineye tanımladığı rüzgâr sınırı ve kullanım koşulları esastır. Yer seviyesindeki sakinlik, sepet kotundaki durumu garanti etmez; operatör yükselmeden önce ve iş boyunca koşulu izler. Sepette levha, branda veya geniş yüzeyli malzeme yelken etkisi yaratacağı için ayrıca değerlendirilir. Sınır veya güvenli kontrol kaybedildiğinde sepet indirilir ve iş ertelenir. Program baskısı ya da alan izninin o günle sınırlı olması, ekipman kılavuzundaki güvenlik şartını değiştirmez." },
            { baslik: "Bina ve çevreyi düşen cisim riskinden ayırmak", metin: "Cephe bağlantısı sökülürken küçük parça dahi yaya bölgesine ulaşabilir. Aletler uygun bağlarla emniyete alınır, sepet içinde malzeme düzenli tutulur ve korkuluk üstüne yük konmaz. Çalışma alanının altı yalnız makinenin tabanı kadar değil, yapılacak işin düşme ihtimaline göre ayrılır. Kapı, pencere veya balkon kullanımı etkilenecekse bina sorumlusu kullanıcıları bilgilendirir. İş bitiminde cephede gevşek parça bırakılmadığı teknik ekipçe doğrulanmadan dış çevre bariyeri kaldırılmaz." },
            { baslik: "Gün sonunda kamusal alanı temiz ve açık teslim etmek", metin: "İzin penceresi kapandığında yalnız manliftin sepeti indirilmez. Malzeme, bağlantı parçası ve bariyer ekipmanı sayılır; zemin üzerindeki atık veya kayganlık giderilir; makine güvenli park ya da yükleme konumuna alınır. Geçiş yolu alan sahibine birlikte kontrol edilerek teslim edilir. İş ertesi güne kalacaksa çevre ayrımının gece nasıl korunacağı ayrıca kararlaştırılır; uyarısız makine veya malzeme bırakılmaz. Kapanış kaydı, kamusal kullanımın ne zaman normale döndüğünü açıkça gösterir." },
        ],
        ekBolumler: [
            { baslik: "Foça çevresinde dış alan çalışma matrisi", paragraflar: ["Bu matris, açık veya ortak kullanımlı bir alandaki manlift işinin başlaması için birbirinden bağımsız kontrolleri gösterir. Somut konumun izin şartları her zaman ayrıca uygulanır."], tablo: { basliklar: ["Başlık", "Kontrol sorusu", "Sorumlu", "Geçiş ölçütü"], satirlar: [["Alan yetkisi", "Kurulum yeri kimin kullanımında?", "İşveren/alan sahibi", "Yazılı koşullar net"], ["Yaya düzeni", "Kesintisiz alternatif rota var mı?", "Saha sorumlusu", "Bariyer ve yönlendirme hazır"], ["Makine", "Zemin ve çalışma zarfı uygun mu?", "Operatör", "Günlük kontrol tamam"], ["Hava", "Üretici sınırları korunuyor mu?", "Operatör", "Koşul sürekli izlenebilir"], ["Kapanış", "Geçiş güvenle açılabilir mi?", "Alan sahibi ile ekip", "Atık ve açık risk kalmamış"]] } },
            { baslik: "Saat seçimi ve çevre bilgilendirmesi", paragraflar: ["Çalışma saati yalnız makine uygunluğuna göre seçilmez. Alan sahibinin izin penceresi, bina kullanıcılarının erişimi, teslimat aracının güvenli manevrası ve işin ışık ihtiyacı birlikte ele alınır. Daha sakin olduğu varsayılan bir saat kanıtsız kabul edilmez; konumu yöneten kişi gerçek kullanım düzenini bildirir. Gereken duyuru metni ve kapatılacak girişler önceden belirlenir.", "Program değişirse bilgilendirme de güncellenir. Makine geç kaldığında eski kapanış saatini aşarak çalışma sürdürülmez; izin sahibiyle yeni pencere teyit edilir. Bu disiplin, çevredeki kişilerin bir anda bariyerle karşılaşmasını ve iş ekibinin süre baskısıyla kontrol alanını daraltmasını önler." ] },
            { baslik: "Rüzgâr duruşu ve yeniden başlatma kuralı", paragraflar: ["Operatör hava koşulu nedeniyle çalışmayı durdurduğunda sepet güvenli biçimde indirilir, makine uygun konuma alınır ve durum saha sorumlusuna kaydedilir. Kısa süreli sakinleşme tek başına yeniden başlatma ölçütü değildir; koşulun güvenli ve izlenebilir olduğu doğrulanır, geniş yüzeyli malzeme varsa yöntem tekrar değerlendirilir.", "Bekleme sırasında yaya ayrımı gereksiz yere korunup kamusal alan kapalı tutulmaz; makinenin durumuna göre bariyer güvenli ölçüde yeniden düzenlenir. Yeni çalışma penceresi alan izniyle eşleştirilir. Kiralama uzayacaksa bedel ve iade programı yazılı güncellenir. Güvenlik duruşunun ticari belirsizliğe dönüşmemesi için süreç baştan sözleşmede tanımlanır." ] },
        ],
        sss: [
            { soru: "Foça'da kaldırım üzerinde manlift kurulabilir mi?", cevap: "Somut alan için yetkili kurum veya alan sahibinin koşulları görülmeden kurulabileceğini söyleyemeyiz. İşveren gerekli kullanım onayını sağlar; biz makinenin ölçüsü, çalışma zarfı, bariyer alanı ve taşıyıcı araç ihtiyacını plan için bildiririz. Onay alındıktan sonra yaya için güvenli alternatif rota, zemin taşıma durumu ve çevredeki girişler kontrol edilir. Yalnız uyarı şeridi çekerek ortak alanı kullanmak kabul edilmez. Gerekli alan ayrılamıyorsa farklı kurulum noktası veya erişim yöntemi seçilir." },
            { soru: "Sahil rüzgârında hangi hızda çalışma durur?", cevap: "Tek bir genel sayı vermek yerine kullanılacak makinenin üretici kılavuzu, iç/dış kullanım sınıfı ve yapılacak iş birlikte esas alınır. Operatör makine üzerindeki sınırı bilir ve koşulu çalışma kotuna göre izler. Sepette panel, levha veya branda bulunması rüzgâr etkisini artırabilir ve yöntemi daha erken durdurmayı gerektirebilir. Ölçüm ya da güvenli kontrol mümkün değilse sepet indirilir. Sahadaki karar, hissedilen hava veya program baskısıyla değil ekipman talimatıyla verilir." },
            { soru: "Bina girişi çalışma boyunca açık kalabilir mi?", cevap: "Düşen cisim alanı ve makinenin hareket zarfı girişe ulaşmıyorsa kontrollü açık düzen mümkün olabilir. Risk girişin üzerine taşıyorsa bina sorumlusu alternatif kapıyı veya belirli geçiş pencerelerini planlar; kişiler sepet altından geçirilmez. Bu karar keşifte krokiye işlenir ve zemin görevlisi tarafından uygulanır. Acil çıkış hiçbir şekilde kapatılamaz; güvenli alternatif sağlanamıyorsa çalışma saati bina kullanımının durduğu uygun pencereye alınır." },
            { soru: "Manlift gece ortak alanda bırakılabilir mi?", cevap: "Ancak alan sahibi izin veriyor, düz ve güvenli park noktası bulunuyor, yetkisiz kullanım ile çevre teması önleniyor ve acil geçişler açık kalıyorsa değerlendirilebilir. Sepet tamamen indirilir, enerji kapatılır, anahtar sorumluya teslim edilir ve görünür çevre ayrımı kurulur. Kamusal kullanımda bunu sağlamak çoğu zaman güç olduğu için aynı gün yükleme tercih edilebilir. Karar sahada doğaçlama verilmez; teklif ve dönüş programında baştan tanımlanır." },
            { soru: "Cephe işi sırasında yoldan geçenleri kim yönlendirir?", cevap: "Bu görev sepet operatörüne verilemez; operatör makine ve çalışma zarfına odaklanmalıdır. İşverenle belirlenen zemin görevlisi bariyeri korur, yayaları güvenli rotaya yönlendirir ve çevre koşulu değiştiğinde operatörle iletişim kurar. Trafiği etkileyen durumda yetkili kurumun istediği ek düzen uygulanır. Zemin görevlisinin görüşü kesiliyorsa çalışma durur. Rol ve kullanılacak işaretler başlangıç brifinginde bütün ekiple paylaşılır." },
            { soru: "Hava bozduğu için iş bitmezse alan izni ne olur?", cevap: "Mevcut iznin süresi ve uzatma yetkisi alan sahibinden teyit edilir; izin otomatik olarak ertesi güne taşınmaz. Makine güvenli duruma getirilir, kamusal geçiş mümkün olduğu ölçüde açılır ve yarım kalan teknik nokta bina sorumlusuna bildirilir. Yeni tarih, operatör ve nakliye programıyla birlikte yazılı kararlaştırılır. Kiralama uzatma koşulu sözleşmedeki çerçeveye göre uygulanır. Hava kaynaklı duruş, süresi dolmuş alan izniyle çalışmayı sürdürme gerekçesi olamaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Foça'nın sahil ve turizm karakteri kamuya açık bilgidir; alan yetkisi, yaya rotası, rüzgâr duruşu ve kapanış prosedürü firma saha pratiğidir. İşletme, proje, yoğunluk veya hava istatistiği uydurulmamıştır.",
    },
    "bolge:aliaga": {
        h1: "Aliağa'da Rafineri ve Ağır Sanayi Sahalarına Manlift Kiralama",
        giris:
            "Aliağa, Türkiye ağır sanayisinin en yoğun noktalarından biridir: rafineri ve petrokimya kompleksi, demir-çelik tesisleri, gemi söküm bölgesi ve enerji santralleri aynı sahil şeridinde çalışır. Bu sahalarda platform kiralamak, makine teslim etmekten çok bir uygunluk sürecini yönetmektir — permit-to-work (çalışma izni) sistemleri, sızdırmaz alan sınıflandırmaları, sıcak iş prosedürleri ve saha-özel operatör şartları, işin kendisinden önce gelir. Filomuzun bu bölgeye ayrılmış tarafı buna göre kurulmuştur: evrak setleri rafineri yüklenici sistemlerine uygun tutulur, operatörlerimiz ağır sanayi saha deneyimlidir ve makine sevkiyatı, izin takvimiyle senkron planlanır. Aliağa'da 'yarın makine lazım' cümlesinin gerçekçi karşılığı, iznin ne zaman çıkacağıdır — ve biz bu süreci baştan yönetiyoruz.",
        maddeler: [
            {
                baslik: "Permit-to-work: işin gerçek takvimi",
                metin:
                    "Rafineri ve petrokimya sahalarında hiçbir iş, çalışma izni (PTW) olmadan başlamaz: iş tanımı, risk analizi, gaz ölçümü, alan sorumlusu onayı ve günlük izin yenileme. Platform işlerinde izin dosyasına makine belgeleri (periyodik kontrol, bakım kaydı) ve operatör belgeleri (MYK, saha eğitimleri) eklenir. Süreci hızlandıran tek şey hazırlıktır — dosyamız bu sistemlere standart formatta hazırdır ve talep açıldığı gün izin sürecine girer. İzin çıkış süresi sahaya göre değişir; sevkiyat, izne senkron planlanır ve makine kapıda bekletilmez.",
            },
            {
                baslik: "Alan sınıflandırması ve makine seçimi",
                metin:
                    "Petrokimya sahalarının patlayıcı ortam bölgeleri (Zone sınıflı alanlar) standart platformlara kapalıdır; bu bölgelerdeki işler ya alan gazdan arındırılıp ölçümle belgelendikten sonra ya da Zone dışına taşınan erişim planıyla yapılır. Zone dışı alanlarda dizel makineler kıvılcım tutucu (spark arrestor) şartına tabi olabilir — saha şartnamesi neyi istiyorsa makine ona göre donatılır. Hangi bölgenin hangi sınıfta olduğu saha haritasından okunur ve iş planı bu haritayla başlar; 'makine geldi ama alana giremedi' senaryosu, Aliağa'da en pahalı hatadır.",
            },
            {
                baslik: "Belgeli operatör: bu sahaların standardı",
                metin:
                    "Ağır sanayi sahalarında operatörsüz kiralama fiilen istisnaıdır: saha yönetimleri platform operatöründe MYK yeterlilik belgesinin yanında saha oryantasyonu, İSG eğitim kayıtları ve çoğu zaman deneyim şartı arar. Operatörlerimiz bu profile göre seçilir — rafineri/çelik sahası deneyimi, güncel eğitim dosyası ve izin sistemlerine aşinalık. Operatörlü modelde izin sürecinin operatör ayağı (eğitim kayıtları, sağlık raporu) bizden hazır gider; işverenin yükü, alan sorumlusu ve refakat düzenine iner.",
            },
            {
                baslik: "Çelik ve gemi söküm sahalarında ağır koşul",
                metin:
                    "Demir-çelik tesislerinde yüksek sıcaklık bölgeleri, vinç trafiği ve skrap sahası tozu; gemi söküm bölgesinde ise değişken zemin ve kesme işleri çevresindeki sıcak iş rejimi platform çalışmasını şekillendirir. Bu sahalarda dizel arazi tipi makineler ağırlıktadır — zemin ve menzil bunu gerektirir — ve makine bakım periyodu toz/ısı katsayısıyla sıklaştırılır. Sıcak iş yapılan bölgelerin yakınında çalışma, o bölgenin izin rejimine bağlanır; kıvılcım düşme mesafeleri iş planında hesaba katılır.",
            },
            {
                baslik: "Liman içi operasyonlarla koordinasyon",
                metin:
                    "Aliağa'nın iskele ve terminallerinde platform işleri (aydınlatma direkleri, vinç bakımı destek işleri, ambar kapağı çevresi) liman operasyon programına tabidir: gemi yanaşma takvimi, elleçleme sahası trafiği ve İSPS güvenlik rejimi çalışma penceresini belirler. Liman sahasına giriş, araç ve personel bildirimiyle önceden kurulur; makine hareketleri operasyon sahasının boş olduğu pencerelere planlanır. Rıhtım kenarı çalışmalarında rüzgâr sınırı, açık deniz etkisiyle iç sahalardan daha sık devreye girer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aliağa sahalarında izin ve şart haritası",
                paragraflar: [
                    "Bölgedeki saha tiplerinin izin rejimi ve makine şartları aşağıdadır. Her sahanın kendi şartnamesi esastır — tablo, planlamanın başlangıç haritasıdır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "İzin rejimi", "Tipik makine şartı", "Operatör şartı"],
                    satirlar: [
                        ["Rafineri / petrokimya", "PTW + gaz ölçümü + günlük yenileme", "Zone haritasına göre; kıvılcım tutucu", "MYK + saha oryantasyonu + deneyim"],
                        ["Demir-çelik", "Saha izni + sıcak bölge koordinasyonu", "Dizel arazi tipi, sık bakım", "MYK + İSG dosyası"],
                        ["Gemi söküm", "Sıcak iş rejimi + bölge izni", "Arazi tipi, değişken zemin planı", "MYK + deneyim"],
                        ["Liman / terminal", "İSPS + operasyon programı", "Rüzgâr sınırı takibi", "MYK + liman bildirimi"],
                        ["Enerji santrali", "Santral İSG sistemi", "Alan sınıfına göre", "MYK + santral oryantasyonu"],
                    ],
                },
            },
            {
                baslik: "İzin süreciyle senkron sevkiyat planı",
                paragraflar: [
                    "Aliağa işlerinde en sık yaşanan verim kaybı, makinenin izinden önce sahaya gelmesidir: kira işler, makine kapıda bekler. Bizim düzenimiz terstir — izin süreci talep günü başlar, dosya (makine + operatör evrakları) standart formatta saha sistemine girer ve sevkiyat, izin onayının teyit edildiği güne planlanır. İzin gecikirse sevkiyat kayar, kira sayacı sahada boş beklemeyle işlemez.",
                    "Düzenli çalıştığımız sahalarda süreç daha da kısadır: yüklenici kaydımız ve operatör dosyalarımız sistemde açık kaldığı için yeni iş, yalnızca iş-özel izin adımlarını (risk analizi, gaz ölçümü) bekler. Aynı sahada tekrarlayan işleri olan firmalara bu kayıt sürekliliğini özellikle öneriyoruz.",
                ],
            },
            {
                baslik: "Yüksek riskli sahada çalışma disiplini",
                paragraflar: [
                    "Ağır sanayi sahalarında platform çalışmasının güvenlik seti, standart sahaların üzerine üç katman ekler: bom tipi makinelerde tam vücut kemer + kısa lanyard (fırlama riski), gaz ölçüm cihazıyla çalışma (sepette taşınır, alarm limitlerinde iş durur) ve acil tahliye planının makine özelinde kurulması (acil iniş sistemi, alan tahliye rotası). Operatörlerimiz bu seti sahaya özgü brifingle uygular; işveren tarafının refakatçi ve alan sorumlusu düzeni izin dosyasında tanımlanır.",
                    "Makine tarafında sızdırmazlık ve kıvılcım kontrolü periyodik olarak belgelenir; hidrolik kaçak, bu sahalarda yalnızca kalite değil güvenlik konusudur. Saha denetimlerinde istenen tüm kayıtlar (bakım, kontrol, eğitim) dosya hâlinde makineyle birlikte bulunur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Rafineri sahamızdaki iş için makine ne kadar sürede gelir?",
                cevap:
                    "Belirleyici olan sevkiyat değil izin sürecidir: PTW dosyası (iş tanımı, risk analizi, makine ve operatör evrakları) saha sisteminize girer, gaz ölçümü ve alan onayı tamamlanır, sevkiyat izin onayına senkron planlanır. Evrak setimiz standart formatta hazır olduğu için süreç talep günü başlar; düzenli çalıştığımız sahalarda yüklenici kaydımız açık olduğundan yalnızca iş-özel adımlar kalır. Makineyi izinden önce sahaya yığmıyoruz — kapıda bekleyen makine, ödenen ama çalışmayan gündür.",
            },
            {
                soru: "Zone sınıflı alanda platform kullanılabilir mi?",
                cevap:
                    "Standart platform Zone sınıflı (patlayıcı ortam) alanda çalışamaz — bu kural esnetilemez. İki çözüm yolu vardır: alanın gazdan arındırılıp ölçümle güvenli belgelendiği pencerede çalışmak veya erişim planını Zone dışından kurmak (komşu alandan yanal erişim, hedefin Zone dışı kalan kısmında çalışma). Hangisinin uygulanacağı saha haritası ve alan sorumlusuyla birlikte kararlaştırılır. Zone dışı alanlarda da saha şartnamesi kıvılcım tutucu isteyebilir — makine, şartnameye göre donatılıp gönderilir.",
            },
            {
                soru: "Kendi personelimiz kullansın istiyoruz; ağır sanayi sahasında mümkün mü?",
                cevap:
                    "Teoride mümkün, pratikte nadiren verimli: saha yönetimi operatörde MYK belgesinin yanında saha oryantasyonu, güncel İSG eğitim kayıtları ve çoğu zaman deneyim şartı arar — kendi personeliniz bu dosyayı tamamlayana kadar izin süreci uzar. Operatörlü modelde bu ayak bizden hazır gider: belgeler, eğitim kayıtları ve saha deneyimi dosyada mevcuttur, izin süreci kısalır. Uzun projelerde karma model kurulabilir — başlangıç operatörümüzle, personeliniz saha dosyasını tamamladığında devir.",
            },
            {
                soru: "Çelik tesisimizin sıcak bölgeleri yakınında çalışma nasıl planlanır?",
                cevap:
                    "Bölgenin izin rejimiyle: sıcak iş yapılan alanların çevresinde çalışma, o bölgenin koordinasyonuna bağlanır — kıvılcım düşme mesafeleri, ısı kaynaklarının konumu ve vinç trafiği iş planına işlenir. Makine tarafında dizel arazi tipi ağırlıktadır (zemin ve menzil gereği) ve bakım periyodu toz/ısı katsayısıyla sıklaştırılır. Operatörlerimizin çelik sahası deneyimi burada belirleyicidir: skrap sahası trafiği ve sıcak bölge disiplinini bilen operatör, alan sorumlusunun yükünü azaltır.",
            },
            {
                soru: "Liman sahamızda gemi operasyonları sürerken iş yapılabilir mi?",
                cevap:
                    "Operasyon programına senkron planla evet: gemi yanaşma takvimi ve elleçleme trafiği çalışma pencerelerini belirler, makine hareketleri saha boşken yapılır ve İSPS rejimi gereği araç-personel bildirimi önceden tamamlanır. Rıhtım kenarı işlerde rüzgâr sınırını iç sahalardan daha sık izliyoruz — açık deniz etkisiyle sepet kotundaki rüzgâr, yerdekinden belirgin yüksek olabilir. Aydınlatma direkleri ve yüksek yapı işleri bu düzenle, liman operasyonu hiç aksamadan tamamlanır.",
            },
            {
                soru: "İzin gecikirse kira işlemeye devam eder mi?",
                cevap:
                    "Hayır — düzenimiz bunu önlemek üzerine kurulu: sevkiyat izin onayına senkron planlandığı için makine sahaya izinle birlikte girer ve kira fiili çalışma dönemiyle başlar. İzin süreci uzarsa sevkiyat kayar; sahada boş bekleyen makine için sayaç işlemez. Bunun tek istisnası, sizin talebinizle makinenin önceden saha içinde konumlandırılmasıdır (izin çıkar çıkmaz başlamak için) — bu durumda bekleme koşulları sözleşmede açıkça tanımlanır, sürpriz olmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aliağa'nın rafineri/petrokimya/çelik/gemi söküm profili kamuya açık bilgidir; PTW, Zone ve İSPS rejimleri mevzuat ve saha standartlarıdır.",
    },

    "bolge:nemrut": {
        h1: "Nemrut Limanları Bölgesinde Manlift Kiralama",
        giris:
            "Nemrut Körfezi, Türkiye'nin en yoğun liman kümelerinden birini barındırır: demir-çelik tesislerinin kendi iskeleleri, genel kargo ve dökme yük terminalleri aynı körfez hattında sıralanır. Bu bölgede platform işinin doğası, liman operasyonunun kesintisizliğiyle tanımlanır — gemi bekletmek dünyanın en pahalı duruşlarından biridir ve hiçbir bakım işi yanaşma programının önüne geçemez. Çalışma düzenimiz buna göre kurulur: işler gemi penceresi aralarına planlanır, makine hareketleri terminal trafiğiyle koordine edilir ve rıhtım hattının rüzgâr gerçeği her planın içindedir. İskele aydınlatması, vinç yolu, konveyör galerisi ve silo-bunker yapıları, bölgedeki manlift işlerinin ana konularıdır; hepsinde belgeli operatör ve liman güvenlik rejimi standarttır.",
        maddeler: [
            {
                baslik: "Gemi penceresi arasına iş planlamak",
                metin:
                    "Terminal işlerinin takvimi gemi programından okunur: yanaşma-tahliye-kalkış döngüsünün araları, rıhtım ve ekipman bakımının doğal pencereleridir. Bu pencereler kısa ve kesin sınırlıdır — iş bloklara bölünür, makine pencere açılmadan konumlanmış olur ve blok bitiminde saha operasyona temiz teslim edilir. Programı oynak terminallerde (spot yük ağırlıklı) pencereler son güne kadar netleşmeyebilir; bu profilde makinenin sahada konaklaması ve işlerin 'pencere açıldıkça' ilerlemesi tek gerçekçi modeldir.",
            },
            {
                baslik: "Rıhtım hattında rüzgâr yönetimi",
                metin:
                    "Körfez hattında rüzgâr, iç sahalardan farklı davranır: deniz yüzeyinde engelsiz hızlanır ve sepet kotunda yerden okunandan belirgin yüksek eser. Rıhtım kenarı işlerde (aydınlatma direkleri, vinç yolu, iskele yapıları) rüzgâr planı işin parçasıdır — günün sakin saatleri (çoğunlukla sabah erken) yüksek işlere ayrılır, öğleden sonra güçlenen deniz meltemi döneminde alçak işler yapılır. Makinelerin 12,5 m/s sertifika sınırı, sepet kotundaki ölçümle izlenir; geniş yüzeyli malzeme taşınan işlerde etkin sınır daha da aşağı çekilir.",
            },
            {
                baslik: "Vinç yolu ve konveyör galerisi işleri",
                metin:
                    "Liman ekipmanının çevresindeki platform işleri iki tipik hedefe odaklanır: rıhtım vinçlerinin yolu boyunca aydınlatma-elektrik işleri ve dökme yük terminallerinin konveyör galerileri. Vinç yolu işlerinde vinç hareket alanıyla kesişim, terminal operasyonuyla dakika bazında koordine edilir — vinç kilitleme pencereleri kısa tutulur ki operasyon esnekliği korunmuş olsun. Konveyör galerilerinde ise dar-yüksek geometri belirleyicidir: galeri altından eklemli erişim veya galeri içinde dar şase modeller, yapının ölçüsüne göre seçilir.",
            },
            {
                baslik: "Silo, bunker ve toz yükü ortamı",
                metin:
                    "Dökme yük terminallerinin silo ve bunker yapılarında iki koşul birleşir: yükseklik (silo üstü ve cidar işleri 20 metre bandına uzanabilir) ve toz (tahıl, kömür, klinker tozu hem görüşü hem makine bakımını etkiler). Yüksek metrajlı dizel makineler bu işlerin standardıdır; hava filtresi ve soğutma bakımı toz katsayısıyla sıklaştırılır. Organik toz (tahıl) birikimli alanlarda patlayıcı ortam değerlendirmesi yapılır — bu alanlar Zone sınıfındaysa standart makine giremez ve iş, temizlik-ölçüm sonrası pencereye alınır.",
            },
            {
                baslik: "Liman güvenlik rejimi ve saha erişimi",
                metin:
                    "Bölge terminallerinde İSPS güvenlik rejimi geçerlidir: personel ve araç bildirimi, kimlik-geçiş süreci ve bazı terminallerde eskortlu hareket. Operatörlerimizin liman sahası deneyimi bu süreci pürüzsüzleştirir; evrak seti (MYK, İSG kayıtları, makine belgeleri) terminal sistemlerine hazır formatta sunulur. Çelik tesislerinin kendi iskelelerinde ise tesisin İSG sistemi liman rejimiyle birleşir — iki kapılı bu yapıda erişim planı, her iki sistemin şartını birden karşılayacak şekilde kurulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Nemrut bölgesinde iş-pencere-makine haritası",
                paragraflar: [
                    "Bölgedeki tipik işler, zamanlama modeli ve makine sınıfı aşağıdadır. Liman ortamında zamanlama sütunu, makine sütunundan daha belirleyicidir.",
                ],
                tablo: {
                    basliklar: ["İş", "Zamanlama", "Makine", "Özel koşul"],
                    satirlar: [
                        ["İskele / rıhtım aydınlatması", "Gemi penceresi arası, sabah saatleri", "Dizel eklemli 20 m+", "Rüzgâr planı"],
                        ["Vinç yolu elektrik-bakım destek", "Kısa vinç kilitleme pencereleri", "Dizel / akülü makaslı", "Dakika bazlı koordinasyon"],
                        ["Konveyör galerisi", "Hat duruş blokları", "Eklemli veya dar şase", "Geometriye göre seçim"],
                        ["Silo / bunker cidarı", "Operasyon dışı bloklar", "Dizel eklemli yüksek metraj", "Toz bakım katsayısı, Zone kontrolü"],
                        ["Terminal binaları", "Serbest", "Akülü makaslı", "Standart düzen"],
                    ],
                },
            },
            {
                baslik: "Konaklamalı terminal modeli",
                paragraflar: [
                    "Gemi programının oynaklığı, Nemrut işlerinde kısa kiralamayı verimsizleştirir: pencere kaydıkça sevkiyat da kayar ve nakliye tekrarlanır. Konaklamalı modelde makine terminalde kalır, pencere açıldıkça iş ilerler ve program oynaklığı maliyete dönüşmez. Terminalin tek yükümlülüğü güvenli park alanı ve (akülü modellerde) şarj noktasıdır; bakım sahada, operasyonu aksatmayan saatlerde yapılır.",
                    "Aynı körfez hattındaki komşu terminallerin işleri tek konaklama dönemine birleştirildiğinde model daha da güçlenir: makine terminaller arasında kısa mesafede yer değiştirir, her terminal yalnızca kendi kullanım günlerini üstlenir. Körfez hattı kompakt olduğu için bu tur modeli Nemrut'ta özellikle verimlidir.",
                ],
            },
            {
                baslik: "Yüksek metrajda rüzgâr-güvenlik dengesi",
                paragraflar: [
                    "Silo üstü ve aydınlatma direği işleri bölgenin en yüksek metrajlı kalemleridir ve yükseklik arttıkça rüzgâr penceresi daralır: 20 metre sepet kotunda güvenli çalışma saatleri, deniz kenarında günün sınırlı dilimidir. Planlama bu gerçeğe göre yapılır — yüksek işler sabah bloklarına, gün içi saatler alçak işlere. Bom tipi makinelerde tam vücut kemer + kısa lanyard kuralı tavizsizdir; sepette anemometreyle çalışılır ve limit aşımında iş, tartışmasız durdurulur.",
                    "Bu disiplinin pratik sonucu şudur: yüksek metrajlı işlerin süresi hava penceresine bağlı tahmin edilir ve takvime pay konur. 'Yarın bitmesi lazım' baskısıyla rüzgârda çalışmak, bu sahalarda kabul etmediğimiz tek taleptir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gemi programımız sık değişiyor; iş planı nasıl kurulur?",
                cevap:
                    "Konaklamalı modelle: makine terminalinizde kalır, gemi penceresi açıldıkça iş bloklar hâlinde ilerler ve program oynaklığı sevkiyat maliyetine dönüşmez. Pencereler kısa olduğu için işler blok yapısına bölünür — her blok, pencere süresine sığacak şekilde tanımlanır ve yarım kalan iş sonraki pencereye devredilir. Operasyon ekibinizle günlük kısa koordinasyon (yarının pencereleri) yeterlidir; planın gerisini biz yönetiriz.",
            },
            {
                soru: "Rıhtım aydınlatma direklerimiz 25 metre; hangi makine gerekir?",
                cevap:
                    "Yüksek metraj dizel eklemli sınıf — direk kotu + uzanma payı hesabıyla seçilir ve lowbed ile sevk edilir. Bu metrajda asıl planlama konusu rüzgârdır: deniz kenarında 25 metre sepet kotu, günün yalnızca sakin saatlerinde (çoğunlukla sabah erken) güvenli çalışma verir. İşi sabah bloklarına planlıyor, sepette anemometreyle çalışıyor ve limit aşımında durduruyoruz. Takvimi hava penceresi payıyla kuruyoruz — direk başına süre, iç saha işlerinden uzun tahmin edilir.",
            },
            {
                soru: "Tahıl terminalimizde toz patlaması riski var; platform çalışabilir mi?",
                cevap:
                    "Alan değerlendirmesine bağlı: organik toz birikimi patlayıcı ortam (Zone) sınıflaması gerektirebilir ve Zone sınıflı alanda standart makine çalışamaz. Pratik akış şöyledir: alan temizlenir, ölçüm yapılır, güvenli sınıf belgelenir ve iş bu pencerede tamamlanır — silo-bunker işlerinde bu döngü operasyon duruşlarıyla eşzamanlanır. Zone dışı alanlarda standart düzen geçerlidir; toz yoğunluğu yalnızca makine bakım katsayısını etkiler. Alan sınıflamanızı keşifte netleştiriyoruz.",
            },
            {
                soru: "Vinç yolumuz üzerinde iş var ama vinci uzun süre kilitleyemeyiz; çözüm?",
                cevap:
                    "Kısa kilitleme pencereleri: iş, vincin operasyonda olmadığı doğal boşluklara dakika bazında bölünür — her blokta vinç o bölgede kilitlenir, blok biter, kilit açılır, vinç çalışır. Bu model operasyon esnekliğinizi korur ama sıkı koordinasyon ister; operatörümüz ve vinç operatörünüz arasında telsiz düzeni kurulur. Alternatif, işi gemi penceresi arasındaki uzun bloğa toplamaktır — hangisinin verimli olduğu iş hacmine göre keşifte kararlaştırılır.",
            },
            {
                soru: "İSPS kapsamında saha erişimi ne kadar sürer?",
                cevap:
                    "Terminale göre değişir — kimlik-geçiş süreci ve araç bildirimi çoğunlukla birkaç gün içinde tamamlanır; evrak setimiz (personel bilgileri, MYK belgeleri, makine evrakları, sigortalar) terminal sistemlerine hazır formatta sunulduğu için süreç bizden gecikmez. Düzenli çalıştığımız terminallerde geçişlerimiz açıktır ve yeni iş aynı gün başlayabilir. İlk kiralamada talebi erişim payıyla açın; sonraki işlerde bu adım ortadan kalkar.",
            },
            {
                soru: "Çelik tesisinin kendi iskelesindeyiz; hangi kurallar geçerli?",
                cevap:
                    "İkisi birden — tesisin İSG sistemi ve liman güvenlik rejimi üst üste biner: tesis tarafından iş izni, İSG dosyası ve saha oryantasyonu; liman tarafından İSPS bildirimi ve geçiş düzeni. Erişim planını iki sistemin şartını birden karşılayacak şekilde kuruyoruz ve evrak setimiz her iki formata hazırdır. Bu çift kapılı yapı ilk seferde birkaç gün ister; kayıtlar açıldıktan sonra tekrarlayan işler tek koordinasyonla yürür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Nemrut Körfezi'nin liman/çelik kümesi kamuya açık bilgidir; İSPS, Zone ve rüzgâr limitleri mevzuat/standart, pencere-blok modeli firma pratiğidir.",
    },

    "bolge:menderes": {
        h1: "Menderes'te İSG Uyumlu Manlift Kiralama",
        giris:
            "Menderes, İzmir'in güney aksında İTOB Organize Sanayi Bölgesi'ni ve havalimanı çevresinin lojistik-teknik kuşağını barındırır. Bölgenin İSG profili iki uçludur: İTOB'un orta ölçekli üretim tesisleri standart sanayi rejimiyle çalışırken, havalimanına komşu operasyonlar (kargo tesisleri, teknik binalar, akaryakıt ikmal altyapısı) havacılık güvenlik kurallarının gölgesinde iş yapar. Bu ikinci grupta yüksekte çalışma, alan izinlerinin ötesinde yükseklik sınırlamalarına da tabidir — havalimanı mania düzlemleri, belirli bölgelerde vinç ve platform çalışmasını bildirime bağlar. Belgeli operatörlü modelimiz her iki uçta da aynı ilkeyle çalışır: iş, izin ve şartlar netleşmeden makine yola çıkmaz; netleştiğinde ise tek seferde, İSG dosyası eksiksiz hâlde tamamlanır.",
        maddeler: [
            {
                baslik: "İTOB'da orta ölçek tesislerin İSG pratiği",
                metin:
                    "İTOB'un mobilya, metal ve plastik ağırlıklı orta ölçekli tesislerinde İSG altyapısı kurumsaldan zayıf olabilir: risk analizi güncel değildir, yüksekte çalışma prosedürü yazılı yoktur, KKD eksiktir. Operatörlü modelimiz bu açığı pratikte kapatır — operatörümüz kendi güvenlik setini (kemer, lanyard, bariyer) ve çalışma disiplinini getirir, iş öncesi kısa saha değerlendirmesiyle riskleri işaretler ve işveren tarafına yazılı bırakır. Küçük tesisin denetimde en çok zorlandığı 'belgeli operatör + belgeli makine' çifti, kiralamayla tek kalemde çözülür.",
            },
            {
                baslik: "Havalimanı çevresinde yükseklik bildirimi",
                metin:
                    "Havalimanı mania düzlemleri içinde kalan bölgelerde belirli yüksekliğin üzerine çıkan geçici ekipman (vinç, platform) bildirime veya izne tabi olabilir; sınırlar bölgeye ve yüksekliğe göre değişir. Bu kuşaktaki işlerde (kargo tesisi cephesi, yüksek depo, aydınlatma direkleri) planlamanın ilk adımı, çalışma noktasının mania haritasındaki konumunu ve gereken bildirimi netleştirmektir — işletmenin tesisi yönetiyorsa bu bilgi genellikle elindedir, değilse süreç birlikte yürütülür. Bildirimsiz yüksek çalışma, bu kuşakta ciddi yaptırım riskidir.",
            },
            {
                baslik: "Akaryakıt ve teknik altyapı çevresinde iş",
                metin:
                    "Havalimanı çevresinin akaryakıt ikmal hatları ve teknik binaları, petrokimya benzeri bir rejim ister: tank ve dolum sahalarının emniyet mesafeleri, statik topraklama kuralları ve sıcak iş yasakları platform çalışmasını çerçeveler. Bu alanlarda dizel makine kullanımı saha şartnamesine tabidir (kıvılcım tutucu şartı yaygındır) ve akülü model çoğu senaryoda ilk tercihtir. İş izni ve refakat düzeni tesis işletmecisinin sistemine göre kurulur; operatör dosyamız bu sistemlere hazırdır.",
            },
            {
                baslik: "Lojistik tesislerde standart yüksek raf düzeni",
                metin:
                    "Havalimanı kuşağının kargo ve lojistik depoları, yüksek raflı standart profildedir ve İSG tarafında bilinen kural seti geçerlidir: raf koridorunda çalışırken koridorun trafiğe kapatılması, forklift-platform ayrımı, iz bırakmayan lastik ve vardiya-şarj planı. Bu tesislerde operatörlü modelin katkısı hızdır — operatörümüz raf işlerinin tipik risklerini (palet taşması, sprinkler hattı yakınlığı, koridor kesişimleri) bilir ve iş, saha ekibini yormadan akar.",
            },
            {
                baslik: "Güney aksında sevkiyat ve destek",
                metin:
                    "Menderes, İzmir merkez-Torbalı-Aydın eksenimizin üzerindedir: teslimat standart 1-2 iş günü, tur birleştirmelerinde daha kısa. İTOB içi işlerde OSB giriş süreci hızlıdır; havalimanı kuşağında ise tesise göre değişen güvenlik bildirimleri süreye eklenir ve talep bu payla açılır. Arıza-ikame desteği aynı eksenden gün içinde ulaşır; uzun işlerde makine sahada konaklar ve bakım yerinde yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Menderes'te saha tipine göre İSG çerçevesi",
                paragraflar: [
                    "Bölgenin iki uçlu yapısında her saha tipinin İSG çerçevesi farklıdır. Aşağıdaki tablo, keşif öncesi beklentiyi netleştirir.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "İSG çerçevesi", "Ön süreç", "Makine tercihi"],
                    satirlar: [
                        ["İTOB üretim tesisi", "Standart sanayi + operatör desteği", "OSB girişi (hızlı)", "Akülü makaslı 8 – 12 m"],
                        ["Kargo / lojistik depo", "Raf düzeni kuralları", "Tesis bildirimi", "Akülü makaslı 12 – 14 m"],
                        ["Havalimanı mania kuşağı", "Yükseklik bildirimi/izni", "Mania kontrolü + bildirim", "İşe göre"],
                        ["Akaryakıt / teknik altyapı", "Emniyet mesafesi + topraklama", "İşletmeci izin sistemi", "Akülü öncelikli"],
                        ["Açık saha / cephe", "Rüzgâr + zemin kontrolü", "Standart keşif", "Dizel veya akülü"],
                    ],
                },
            },
            {
                baslik: "Küçük tesise İSG paketi: kiralamayla gelen uyum",
                paragraflar: [
                    "Orta-küçük ölçekli işletmenin yüksekte çalışma uyumu, çoğu zaman tek eksik zincirinden kopar: belge var makine yok, makine var operatör belgesiz, ikisi var prosedür yazılmamış. Operatörlü kiralama bu zinciri tek kalemde tamamlar — belgeli makine (periyodik kontrol), belgeli operatör (MYK + eğitim kayıtları), iş öncesi saha değerlendirmesi ve iş sonrası yazılı kayıt. Denetim gününde işverenin dosyasına giren bu set, kiralama bedelinin görünmeyen ama gerçek değeridir.",
                    "İTOB'daki tekrarlayan müşterilerimizde bu paket çerçeve anlaşmaya bağlanır: yıllık periyodik işler (aydınlatma, vinç yolu kontrolü, çatı altı bakım) takvimlenir ve her turda aynı dosya düzeni tekrarlanır — işletmenin İSG klasörü, kiralama geçmişiyle birlikte kendiliğinden oluşur.",
                ],
            },
            {
                baslik: "Mania kuşağında iş planlama akışı",
                paragraflar: [
                    "Havalimanı çevresindeki yüksek çalışmalarda akışımız dört adımdır: çalışma noktasının ve maksimum ekipman yüksekliğinin netleştirilmesi, mania haritası kontrolü (nokta hangi düzlemin altında), gereken bildirim/izin sürecinin işletilmesi ve iş planının izin şartlarına (tarih, saat, yükseklik sınırı) göre kurulması. Süreç tesise göre birkaç gün sürebilir; bu payla açılan talep sorunsuz ilerler.",
                    "Pratik not: mania sınırlaması makine seçimini de etkileyebilir — izin verilen maksimum yükseklik, hedefe uzanan en alçak profilli çözümü (örneğin yüksek makaslı yerine eklemli erişim) gerektirebilir. Bu optimizasyonu izin şartı netleştikten sonra yapıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük atölyemizde İSG prosedürlerimiz eksik; kiralama yine de yapılabilir mi?",
                cevap:
                    "Yapılır — ve operatörlü model tam bu durum için doğrudur: belgeli makine ve belgeli operatör bizden gelir, operatörümüz iş öncesi kısa saha değerlendirmesi yapar, güvenlik düzenini (bariyer, kemer, alan ayrımı) kurar ve iş sonrası yazılı kayıt bırakır. Böylece iş güvenle biter ve dosyanıza denetimde geçerli belgeler girer. Kalıcı çözüm olarak yüksekte çalışma prosedürünüzü yazdırmanızı öneririz; tekrarlayan işlerde çerçeve anlaşma, bu düzeni her turda otomatik tekrarlar.",
            },
            {
                soru: "Havalimanına yakın tesisimizde yüksek çalışma için izin gerekir mi?",
                cevap:
                    "Konuma ve yüksekliğe bağlı — mania düzlemleri içinde kalan noktalarda belirli yüksekliğin üzerine çıkan geçici ekipman bildirime veya izne tabi olabilir. İlk adım, çalışma noktanızın harita kontrolü ve planlanan maksimum ekipman yüksekliğinin netleştirilmesidir; tesis işletmeniz bu bilgiye genellikle sahiptir, değilse süreci birlikte yürütürüz. Bildirimsiz yüksek çalışma bu kuşakta ciddi risktir — 'kimse sormaz' yaklaşımıyla iş almıyoruz. İzin şartı netleşince makine ve takvim ona göre kurulur.",
            },
            {
                soru: "Akaryakıt hattımızın yakınında aydınlatma işi var; dizel makine sokabilir miyiz?",
                cevap:
                    "Saha şartnamesi belirler — akaryakıt altyapısı çevresinde dizel kullanımı kıvılcım tutucu şartına veya tam yasağa tabi olabilir; emniyet mesafeleri ve statik topraklama kuralları da işin çerçevesini çizer. Pratik tercihimiz bu alanlarda akülü modeldir: emisyonsuz, kıvılcım riski düşük ve çoğu şartnameyle uyumlu. İşletmecinin izin sistemine iş izni dosyası hazırlarız; metraj akülü sınıfı aşıyorsa şartnameye uygun donanımlı dizel alternatifi değerlendirilir.",
            },
            {
                soru: "İTOB'daki tesisimize teslimat ne kadar sürer?",
                cevap:
                    "Standart 1-2 iş günü — Menderes, İzmir merkez-Torbalı-Aydın eksenimizin üzerinde olduğu için tur birleştirmelerinde daha da kısalır. İTOB giriş süreci hızlıdır ve teslimatı geciktirmez. Talepte üç bilgi süreci tek seferde bitirir: hedef yükseklik, zemin-kapı ölçüleri ve işin tipi (operatörlü/operatörsüz). Operatörlü işlerde operatör planı sevkiyatla birlikte kurulur; arıza-ikame desteği aynı eksenden gün içinde ulaşır.",
            },
            {
                soru: "Kargo depomuzda gece vardiyasında iş yapılabilir mi?",
                cevap:
                    "Yapılır — lojistik tesislerin doğal modeli budur: gündüz elleçleme yoğunken raf koridoru kapatılamaz, gece bloğunda koridor trafiğe kapanır ve iş güvenle akar. Akülü makine sessizdir; gece operasyonun devam eden kısmını (sevkiyat kapıları) rahatsız etmez. Makine gündüz teslim alınır, gece bloğunda çalışılır. Operatörlü modelde gece vardiya planı operatör tarafında da kurulur — uzun gece işlerinde operatör rotasyonu sözleşmede tanımlanır.",
            },
            {
                soru: "Denetimde 'yüksekte çalışma' başlığından eksik çıktık; kiralama bunu çözer mi?",
                cevap:
                    "Kalıcı kısmını çözer: denetimin aradığı 'belgeli makine + belgeli operatör + yazılı düzen' üçlüsü, operatörlü kiralamada dosya hâlinde sağlanır — periyodik kontrol belgesi, MYK ve eğitim kayıtları, iş öncesi değerlendirme ve iş kaydı. Prosedür eksiğiniz (yazılı yüksekte çalışma talimatı) işletmenize aittir ve yazdırılması gerekir; bu konuda yönlendirme yapabiliriz. Sonraki denetimde aynı başlıktan eksik çıkmamanın yolu, işleri belgeli düzenle yapmak ve kayıtları klasörde biriktirmektir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Menderes'in İTOB ve havalimanı kuşağı profili kamuya açık bilgidir; mania düzlemi ve akaryakıt sahası kuralları mevzuat çerçevesidir, İSG paketi firma pratiğidir.",
    },

    "bolge:gaziemir-serbest-bolge": {
        h1: "Gaziemir Ege Serbest Bölgesi'nde Manlift Kiralama",
        giris:
            "Ege Serbest Bölgesi, Türkiye'nin en yoğun serbest bölgelerinden biridir ve Gaziemir'de havalimanının hemen yanında konumlanır. Buradaki platform kiralamanın ilk gerçeği gümrüktür: serbest bölge, gümrük hattının ötesidir ve kiralık makinenin bölgeye girişi-çıkışı, geçici ithalat benzeri bir evrak düzenine tabidir. Bu süreç doğru kurulduğunda rutindir, eksik kurulduğunda ise makine kapıda günlerce bekleyebilir. İkinci gerçek, bölgenin üretim profilidir: elektronik, havacılık komponetleri, tekstil ve medikal ağırlıklı, ihracat disiplinli ve denetim alışkanlığı yüksek tesisler — İSG ve kalite dokümantasyonu bu tesislerde refleks hâlindedir ve platform işinin evrak kalitesi de aynı seviyede beklenir. Belgeli operatörlü modelimiz iki gerçeğin de karşılığıdır: gümrük evrakı ve İSG dosyası, makineyle aynı titizlikte hazırlanır.",
        maddeler: [
            {
                baslik: "Gümrük süreci: makinenin bölgeye giriş düzeni",
                metin:
                    "Serbest bölgeye giren kiralık ekipman, bölge mevzuatının evrak düzenine tabidir: giriş beyanı, ekipman kimliği (seri no, değer beyanı), süre tanımı ve çıkışta aynı düzenin tersine işlemesi. Bu süreci bölge işleticisinin ve kullanıcı firmanın gümrük müşavirliğiyle koordineli yürütüyoruz — evrak setimiz (fatura, makine kimlik belgeleri, sözleşme) sürece hazır formatta gider. Kiralama süresinin uzaması hâlinde süre uzatımı da aynı düzenle yapılır; 'makine içeride, evrak süresi geçmiş' durumuna düşülmez.",
            },
            {
                baslik: "Yüksek dokümantasyon kültürüne uyum",
                metin:
                    "Bölge tesislerinin çoğu uluslararası müşterilere üretir ve denetim alışkanlığı yüksektir: yüklenici İSG dosyası, çalışma izni, ekipman belgeleri ve iş kayıtları standart beklentidir. Platform işlerimizde bu beklenti karşılanır — makine periyodik kontrol belgesi, operatör MYK ve eğitim kayıtları, iş öncesi risk değerlendirmesi ve iş sonu kayıtları dosya hâlinde teslim edilir. Havacılık ve medikal tedarik zincirindeki tesislerde müşteri-özel şartnameler (FOD kontrolü gibi) varsa iş planına işlenir.",
            },
            {
                baslik: "Elektronik ve hassas üretimde çalışma düzeni",
                metin:
                    "Bölgenin elektronik ve medikal üreticilerinde hassas ortam kuralları geçerlidir: ESD kontrol alanlarında topraklama ve uygun donanım, temiz alan yaklaşımı olan bölümlerde partikül disiplini, üretim hattı üstünde düşen parça (FOD) kontrolü. Akülü makaslı ve kompakt eklemli modeller bu ortamların standardıdır; iz bırakmayan lastik ve makine temizliği ön hazırlıktır. Hat üstü işler, tesisin kalite biriminin onayladığı pencere ve prosedürle yapılır — bu tesislerde 'kalite onayı' İSG onayı kadar bağlayıcıdır.",
            },
            {
                baslik: "Depo ve sevkiyat alanlarında ihracat ritmi",
                metin:
                    "Serbest bölge tesislerinin depo-sevkiyat alanları ihracat terminlerine kilitli çalışır: konteyner yükleme günleri ve uçak kargo kesimleri (havalimanı komşuluğunun avantajı) haftalık ritmi belirler. Raf ve kapı üstü işler bu ritmin boşluklarına planlanır; yoğun sevkiyat günlerinde alan trafiği platform çalışmasına kapalıdır. Standart yüksek raf kuralları (koridor kapatma, forklift ayrımı, şarj planı) burada da geçerlidir.",
            },
            {
                baslik: "Bölge içi lojistik ve konumun avantajı",
                metin:
                    "Gaziemir, İzmir merkez filomuza en yakın hedeflerden biridir: sevkiyat kısa, arıza-ikame desteği hızlıdır. Ancak gümrük süreci nedeniyle 'aynı gün makine' serbest bölgede gerçekçi değildir — evrak hazırlığıyla birlikte tipik planlama 2-3 iş günüdür. Bu yüzden bölge içi işlerde iki model öne çıkar: işleri biriktirip tek girişte bitirmek (giriş-çıkış evrak yükü teke iner) ve uzun dönem konaklama (makine içeride kalır, evrak süresi uzatılır, işler takvimle akar).",
            },
        ],
        ekBolumler: [
            {
                baslik: "Serbest bölge kiralama akışı: evraktan işe",
                paragraflar: [
                    "Bölge işlerinde standart akışımız aşağıdadır. Gümrük adımı ilk kiralamada en uzun kalemdir; tekrarlayan işlerde kısalır.",
                ],
                tablo: {
                    basliklar: ["Adım", "İçerik", "Sorumlu", "Tipik süre"],
                    satirlar: [
                        ["1. Keşif + iş tanımı", "Hedefler, ortam kuralları, pencere planı", "Birlikte", "Aynı gün"],
                        ["2. Gümrük evrak seti", "Giriş beyanı, makine kimliği, süre tanımı", "Biz + müşavirlik", "1 – 2 iş günü"],
                        ["3. Tesis İSG/kalite onayı", "Yüklenici dosyası, çalışma izni", "Biz + tesis", "Paralel yürür"],
                        ["4. Giriş + iş", "Sevkiyat, saha düzeni, iş blokları", "Biz", "Plana göre"],
                        ["5. Çıkış evrakı", "Giriş düzeninin tersi", "Biz + müşavirlik", "1 iş günü"],
                    ],
                },
            },
            {
                baslik: "Tek girişte çoklu iş: evrak ekonomisi",
                paragraflar: [
                    "Serbest bölgede her giriş-çıkış bir evrak dosyasıdır; bu yüzden bölge içi işlerin ekonomisi, iş birleştirmeyle kurulur. Aynı tesisin dağınık işleri (aydınlatma + raf + cephe) tek girişte sırayla bitirilir; komşu tesislerin işleri de — her birinin kendi kullanıcı evrakıyla — aynı makine döneminde art arda planlanabilir. Bölgenin kompakt yerleşimi tesisler arası geçişi dakikalara indirir.",
                    "Uzun dönem ihtiyaçta konaklama modeli evrak yükünü daha da azaltır: makine bir kez girer, süre uzatımlarıyla içeride kalır ve işler takvimle akar. İhracat yoğun dönemlerin öncesindeki bakım dalgası (denetim + sezon hazırlığı) bu modelin en verimli penceresidir.",
                ],
            },
            {
                baslik: "Havacılık ve medikal tedarikçilerinde FOD disiplini",
                paragraflar: [
                    "Havacılık komponenti ve medikal üretim yapan tesislerde yabancı madde (FOD) kontrolü, platform işinin her adımını şekillendirir: sepete çıkan her alet listelenir, iş sonunda sayım yapılır, makine üzerinde gevşek parça kontrolü iş öncesi tamamlanır ve çalışma alanının altı yalnızca bariyerle değil toplama örtüsüyle korunabilir. Bu disiplin bize yabancı değildir ve müşteri şartnamenize göre uygulanır — kalite biriminizin onay sürecine hazır prosedür dosyamız vardır.",
                    "ESD kontrol alanlarında ek olarak topraklama sürekliliği ve uygun donanım kuralları geçerlidir. Her iki disiplinin kayıtları, tesisisinizin müşteri denetimlerinde kullanılabilir formatta teslim edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Serbest bölgeye makine girişi ne kadar sürüyor?",
                cevap:
                    "İlk kiralamada evrak hazırlığıyla birlikte tipik 2-3 iş günü: giriş beyanı ve makine kimlik seti müşavirlikle koordineli hazırlanır, tesis onayı paralel yürür ve sevkiyat evrakın netleştiği güne planlanır. Tekrarlayan işlerde süreç kısalır — düzen kurulu, format hazırdır. 'Aynı gün makine' serbest bölgede gerçekçi olmadığı için acil ihtimalli dönemlerde (denetim öncesi, sezon hazırlığı) işleri önceden planlamak tek sağlıklı yoldur.",
            },
            {
                soru: "Kiralama süremiz uzarsa gümrük tarafında sorun olur mu?",
                cevap:
                    "Doğru yönetilirse olmaz: süre uzatımı, giriş düzeninin devamı olarak müşavirlikle koordineli işletilir ve makinenin evrak süresi hiçbir gün açıkta kalmaz. Bunu takvimle biz izliyoruz — uzatma ihtiyacı görünür görünmez süreç başlar, 'evrak süresi geçmiş makine' durumu yaşanmaz. Uzun dönem konaklama planlarında uzatım periyotları sözleşmeye baştan yazılır ve her periyot otomatik takip edilir.",
            },
            {
                soru: "Müşterimizin denetimi var; platform işi kayıtları denetime uygun mu?",
                cevap:
                    "Evet — bölge tesislerinin denetim kültürüne göre çalışıyoruz: makine periyodik kontrol belgesi, operatör MYK ve eğitim kayıtları, iş öncesi risk değerlendirmesi, çalışma izinleri ve iş sonu kayıtları dosya hâlinde teslim edilir. FOD veya ESD şartnameniz varsa uygulama kayıtları da eklenir. Bu dosya, müşteri denetiminde 'yüklenici yönetimi' başlığının kanıt setidir — formatı denetim standardınıza göre uyarlayabiliriz.",
            },
            {
                soru: "Üretim hattımızın üzerinde FOD hassasiyetiyle iş yapılabilir mi?",
                cevap:
                    "Yapılır — FOD prosedürüyle: sepet aleti listelenir ve iş sonunda sayılır, makine gevşek parça kontrolünden geçer, çalışma altı bariyer + gerekirse toplama örtüsüyle korunur ve iş, kalite biriminizin onayladığı pencerede yürür. Hat üstü doğrudan müdahaleler çoğunlukla hat duruş bloklarına alınır; hat kenarı işler bu düzenle paralel yapılabilir. Prosedür dosyamız kalite onay sürecinize hazırdır — şartnamenizi keşifte alıyoruz.",
            },
            {
                soru: "Bölgedeki üç ayrı işimizi tek kiralamada yapabilir miyiz?",
                cevap:
                    "Evet ve bu, serbest bölgenin en ekonomik modelidir: her giriş-çıkış bir evrak dosyası olduğu için işleri tek girişte birleştirmek evrak yükünü ve maliyeti teke indirir. Aydınlatma + raf + cephe gibi dağınık işler sırayla bitirilir; komşu tesislerin işleri de aynı makine döneminde art arda planlanabilir (her biri kendi kullanıcı evrakıyla). İş listenizi talepte paylaşın — giriş dosyası, tüm listeyi kapsayacak şekilde tek seferde hazırlanır.",
            },
            {
                soru: "ESD alanımız için makine şartlarımız var; karşılanır mı?",
                cevap:
                    "Karşılanır: topraklama sürekliliği belgelenir, operatör ESD donanımıyla çalışır ve iletken lastik şartı varsa uygun model sevk edilir. Elektronik üretim ortamının ek kuralları (partikül disiplini, yavaş hareket, temizlik) iş planına işlenir. Şartnamenizi talepte alıyor, hazırlığı ona göre belgeliyor ve kalite biriminizin onayına hazır dosyayla geliyoruz — ilk işte kurulan bu düzen, sonraki tüm kiralamalarınızda hazır tekrarlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ege Serbest Bölgesi'nin Gaziemir konumu, gümrük hattı niteliği ve elektronik/havacılık/medikal profili kamuya açık bilgidir; FOD/ESD disiplinleri sektör standartlarıdır.",
    },

    "bolge:bergama-osb": {
        h1: "Bergama OSB'de Belgeli Operatörlü Manlift Kiralama",
        giris:
            "Bergama OSB ve çevresindeki işletmelerin platform ihtiyacında bir gerçek öne çıkar: bu bölgede MYK belgeli platform operatörü bulmak, makinenin kendisini bulmaktan zordur. İzmir merkezin operatör havuzu 100 kilometre uzaktadır ve bölge tesislerinin kadrolarında belgeli operatör istisnadır. Operatörlü kiralama modelimiz bu açığın doğrudan cevabıdır — makine ve belgeli operatör birlikte gelir, iş güvenle ve hızla biter, işletme ne belge peşinde koşar ne denetim riski taşır. Gıda tesislerinden maden destek yapılarına uzanan yelpazede operatörlerimiz, her saha tipinin kendi rejimini (hijyen, maden İSG, yüksek riskli alan) bilerek çalışır; uzak sahada operatör planlaması — konaklama, vardiya, rotasyon — sözleşmenin doğal parçasıdır.",
        maddeler: [
            {
                baslik: "Operatör açığı ve yasal zorunluluk",
                metin:
                    "Yükseltilebilir platformu kullanacak kişinin MYK yeterlilik belgesi taşıması yasal zorunluluktur ve belge makine tipine göredir. Bergama gibi merkeze uzak bölgelerde bu belgeye sahip personel azdır; işletmelerin 'forkliftçimiz kullanır' yaklaşımı hem yasal risk hem kaza riskidir — platform, forkliftten farklı bir makine sınıfıdır ve belgesi ayrıdır. Operatörlü modelde bu zincir bizden tamamlanır: operatör belgesi, eğitim kayıtları ve sigortası dosyada hazırdır; denetimde işverenin eli güçlüdür.",
            },
            {
                baslik: "Uzak sahada operatör lojistiği",
                metin:
                    "Merkeze uzak işlerde operatör planı, makine planı kadar önemlidir: günübirlik işlerde operatör sevkiyatla gelir-döner; çok günlük işlerde konaklama düzeni kurulur (tesis misafirhanesi veya bölgede konaklama) ve uzun projelerde operatör rotasyonu sözleşmede tanımlanır. Bu lojistik bizim tarafımızdan yönetilir — işletmenin tek muhatabı iş planıdır. Kampanya dönemi gece bloklarında çalışan gıda tesislerinde operatör vardiyası, tesisin pencere düzenine göre kurulur.",
            },
            {
                baslik: "Gıda tesislerinde operatörün hijyen uyumu",
                metin:
                    "Bölgenin gıda işleyicilerinde operatör, tesisin hijyen rejimine tabidir: sağlık raporu, hijyen eğitimi kaydı, tesise uygun kıyafet-KKD ve davranış kuralları (takı, kişisel eşya, yeme-içme alanları). Operatör dosyamız bu beklentiye hazırdır ve gıda sahası deneyimli operatörler önceliklendirilir. Hat üstü ve açık ürün çevresindeki işlerde operatörün alet disiplini (bağlama, sayım) tesisin yabancı madde prosedürüne entegre çalışır.",
            },
            {
                baslik: "Maden destek sahalarında operatör şartları",
                metin:
                    "Bölgedeki maden operasyonlarının sahalarında operatör şartları en ağır seviyededir: maden İSG mevzuatı kapsamında saha eğitimi-oryantasyonu, sağlık gözetimi kaydı ve izin sistemine kayıtlı çalışma. Operatörlerimizden maden sahası dosyası tamamlanmış olanlar bu işlere atanır; ilk kayıt sürecinin birkaç gün alabildiği bilinerek talep erken açılır. Toz ve arazi koşullarında makine bakımı sıklaştırılır; operatör, günlük kontrol listesini saha kayıt düzenine işler.",
            },
            {
                baslik: "Operatörün ikinci değeri: keşif ve önleme",
                metin:
                    "Deneyimli operatörün işe katkısı kullanmaktan ibaret değildir: sahaya bakışı bir ön keşiftir — zemin zayıflığını, elektrik hattı yakınlığını, rüzgâr riskini iş başlamadan görür ve düzeltilmesini ister. Uzak sahada bu yeti kritiktir; merkezden destek saatler uzaktayken sahadaki doğru karar, kaybedilecek günü kurtarır. Operatörlerimiz her iş sonunda kısa saha notu bırakır: yapılan iş, kullanılan pencere, gözlenen riskler — işletmenin bakım klasörüne doğrudan giren bir kayıt.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bergama'da operatörlü kiralama senaryoları",
                paragraflar: [
                    "Bölgedeki tipik senaryolar ve operatör düzeni aşağıdadır. Uzak saha lojistiği her senaryonun içine işlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Operatör düzeni", "Süre modeli", "Not"],
                    satirlar: [
                        ["Günübirlik bakım işi", "Sevkiyatla gelir-döner", "Günlük", "İşler birleştirilirse verim artar"],
                        ["Gıda tesisi hazırlık dönemi", "Konaklamalı, pencere vardiyası", "Haftalık / aylık", "Hijyen dosyası hazır"],
                        ["Maden destek sahası", "Saha kayıtlı operatör", "Haftalık +", "İlk kayıt birkaç gün"],
                        ["Kampanya içi acil protokol", "Çağrıya hazır operatör", "Blok bazlı", "Önceden kurulmuş protokol şart"],
                        ["Uzun proje (kurulum, revizyon)", "Rotasyonlu", "Aylık", "Rotasyon sözleşmede"],
                    ],
                },
            },
            {
                baslik: "Belgesiz kullanım: bölgede en sık gördüğümüz risk",
                paragraflar: [
                    "Merkeze uzak bölgelerin ortak deseni şudur: makine kiralanır, belgeli operatör bulunamaz, 'idare eden' bir personel kullanır. Bu desen üç riski birden taşır — iş kazasında işverenin doğrudan kusuru, denetimde idari yaptırım ve sigorta tarafında ret gerekçesi. Platform kazalarının önemli bölümü devrilme ve sıkışma kaynaklıdır ve bunların çoğunda ortak nokta eğitimsiz kullanımdır: çukur önleme sistemini devre dışı bırakmak, eğimde çalışmak, sepette merdiven kullanmak.",
                    "Operatörlü model bu deseni kökünden keser ve maliyeti sanıldığından düşüktür: operatör bedeli, tek bir kaza gününün — üretim kaybı, tazminat, yaptırım — yanında ihmal edilebilir kalır. Tekrarlayan ihtiyacı olan işletmelere ikinci yol da öneriyoruz: kendi personeline MYK belgesi aldırmak; süreç ve eğitim kaynakları konusunda yönlendirme yapıyoruz.",
                ],
            },
            {
                baslik: "Uzak sahada iş güvencesi: plan + protokol + kayıt",
                paragraflar: [
                    "Bergama işlerinde güvence üç ayaklıdır. Plan: keşif formu eksiksiz doldurulur (hedefler, zemin, geçişler, pencereler) ve makine-operatör çifti işe tam uyumla gönderilir — uzakta 'yanlış gönderim' telafisi bir gündür. Protokol: düzenli müşterilerde acil iş akışı önceden kurulur; kampanya ortasında doğan iş, telefonla başlayıp ilk pencerede biter. Kayıt: her işin dosyası (izinler, kontroller, saha notu) işletmeye teslim edilir ve tekrarlayan işlerde birikimli bir bakım geçmişi oluşur.",
                    "Bu üçlü, uzak sahanın belirsizliğini merkez işi rutinine indirger — Bergama'daki müşterilerimizin tekrarlama oranının yüksek olmasının nedeni budur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizde platform kullanacak belgeli kimse yok; iş nasıl yapılır?",
                cevap:
                    "Operatörlü kiralamayla — bölgede en yaygın modelimiz budur: makine ve MYK belgeli operatör birlikte gelir, iş operatörümüzle yapılır ve dosya (belge, eğitim kayıtları, sigorta) denetime hazır teslim edilir. 'İdare eden personel kullanır' yaklaşımı yasal değildir ve kaza riskinin ana kaynağıdır — bu yolu önermiyoruz ve desteklemiyoruz. İhtiyacınız tekrarlayacaksa paralel olarak kendi personelinize belge aldırmayı planlayın; yönlendirmesini yapıyoruz.",
            },
            {
                soru: "Birkaç günlük iş için operatör Bergama'da nasıl konaklar?",
                cevap:
                    "Sözleşmede tanımlı düzenle: tesisinizin misafirhane imkânı varsa o kullanılır, yoksa bölgede konaklama bizim organizasyonumuzla kurulur ve koşullar teklifte açık kalemdir. Gece bloklu çalışmalarda (kampanya pencereleri) operatör vardiyası pencere düzeninize göre planlanır. Uzun projelerde rotasyon devreye girer — operatör değişimlerinde iş devri, saha notlarıyla kesintisiz yapılır. Bu lojistiğin tamamı bizden yönetilir; muhatabınız yalnızca iş planıdır.",
            },
            {
                soru: "Gıda tesisiyiz; operatörünüz hijyen kurallarımıza uyar mı?",
                cevap:
                    "Uyar — gıda sahası bizim standart profillerimizden biridir: operatör sağlık raporu ve hijyen eğitim kaydıyla gelir, tesise uygun kıyafet-KKD kullanır ve davranış kurallarınıza (takı, kişisel eşya, alan sınırları) tabidir. Hat üstü işlerde alet bağlama-sayım disiplini, yabancı madde prosedürünüze entegre çalışır. Dosya, müşteri denetimlerinizde 'yüklenici yönetimi' kanıtı olarak kullanılabilir formattadır. Gıda deneyimli operatör ataması için talepte tesis tipini belirtmeniz yeterlidir.",
            },
            {
                soru: "Maden sahamızda çalışacak operatörün ek şartları var; süreç nasıl işler?",
                cevap:
                    "Maden İSG mevzuatının şartlarıyla: saha eğitimi-oryantasyonu, sağlık gözetimi kaydı ve izin sistemine kayıt. Maden dosyası tamamlanmış operatörlerimiz bu işlere atanır; sahanıza özel ilk kayıt birkaç gün alabildiği için talep erken açılmalıdır. Makine tarafında toz-arazi koşullarına göre (çoğunlukla dizel arazi tipi) seçim yapılır ve bakım sıklaştırılır. Operatör, günlük kontrol listesini saha kayıt düzeninize işler — denetim izlenebilirliği tam olur.",
            },
            {
                soru: "Kampanya ortasında acil iş çıkarsa operatörlü makine ne kadar sürede gelir?",
                cevap:
                    "Protokol kuruluysa ilk uygun pencerede — iş tanımları, bariyer-izin düzeni ve çağrı akışı önceden hazır olduğu için süreç telefonla başlar ve vardiya arasında biter. Protokolsüz durumda gerçekçi süre ertesi gündür: mesafe ve operatör planlaması bunu belirler. Kampanya dönemine giren tesislere önerimiz bu yüzden nettir: hazırlık işlerini kampanya öncesi bitirin ve acil protokolü baştan kurun — kriz anında plan yapılmaz, işletilir.",
            },
            {
                soru: "Operatörlü model, operatörsüzden ne kadar pahalı?",
                cevap:
                    "Fark, operatör günlük bedelidir ve uzak sahada bu farkın karşılığı nettir: belge-denetim riski sıfırlanır, iş deneyimli elde hızlanır (çoğu işte süre kısalır ve toplam fark daralır), saha riskleri önceden görülür ve kayıt düzeni hazır gelir. Kaza senaryosunun maliyeti — üretim kaybı, tazminat, yaptırım — yanında operatör bedeli ihmal edilebilir kalır. Uzun projelerde iki modelin toplamını karşılaştırmalı gösteriyoruz; kararı rakamla verirsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. MYK belge zorunluluğu mevzuattır; Bergama'nın operatör havuzu gerçeği ve uzak saha lojistiği firma pratiğidir. Kaza desenleri sektör İSG istatistiklerinin genel bilgisidir.",
    },

    "bolge:menemen-deri-osb": {
        h1: "Menemen Deri OSB'de Kimyasal Ortam İSG'siyle Manlift Kiralama",
        giris:
            "Deri işleme tesislerinde yüksekte çalışmanın gerçek zorluğu yükseklik değil, altındaki kimyadır: tabaklama prosesinin asit ve baz banyoları, sülfür bileşikleri ve çözücüler, platform işine sıradan bir sanayi holünde bulunmayan bir risk katmanı ekler. Menemen Deri OSB'deki işlerimizde İSG planı bu katmandan başlar — hangi bölümde hangi kimyasal var, hangi noktada gaz ölçümü gerekir, operatör hangi KKD setiyle çalışır ve acil durumda tahliye nereden yapılır. Belgeli operatörlü modelimizin bu bölgedeki değeri tam burada ortaya çıkar: kimyasal ortam deneyimi olan operatör, riski bilerek çalışır ve işletmenin İSG ekibiyle aynı dili konuşur. İhtisas OSB'nin homojen yapısı, bir kez kurulan güvenlik düzeninin tüm bölgeye taşınabilmesi demektir.",
        maddeler: [
            {
                baslik: "Kimyasal risk haritası: iş planının ilk adımı",
                metin:
                    "Deri tesisindeki platform işi, tesisin kimyasal envanteriyle başlar: ıslak bölümün banyo kimyasalları, sprey boyama alanlarının çözücüleri ve atık hatlarının gaz üretme potansiyeli (H2S) haritalanır. Bu harita üç kararı belirler — hangi alanlarda gaz ölçümü ön koşuldur, hangi işler havalandırma sonrası pencereye alınır ve operatör hangi KKD setiyle (maske tipi, filtre sınıfı) çalışır. Harita çoğu tesiste İSG ekibinde hazırdır; yoksa keşifte birlikte çıkarılır ve sonraki tüm işlerde kullanılır.",
            },
            {
                baslik: "Kapalı ve az havalandırılan noktalarda ölçüm disiplini",
                metin:
                    "Tesislerin atık kanalı çevresi, bodrum kotları ve kapalı tank yakınları, gaz birikimi riski taşıyan noktalardır ve buralardaki yüksekte çalışma, ölçüm ön koşuluna bağlanır: çalışma öncesi ölçüm, sepette taşınan sürekli ölçüm cihazı ve alarm limitinde işin tartışmasız durdurulması. Operatörlerimiz bu disiplinle çalışır ve ölçüm kayıtları iş dosyasına girer. 'Kokuyu duyunca çıkarız' yaklaşımı bu ortamlarda ölümcüldür — H2S yüksek konsantrasyonda koku duyusunu felç eder.",
            },
            {
                baslik: "Operatör KKD ve sağlık gözetimi",
                metin:
                    "Kimyasal ortamda çalışan operatörün donanımı standart setin üzerindedir: ortama uygun solunum koruması, kimyasala dayanıklı eldiven-tulum ve göz koruması tesis envanterine göre seçilir. Sağlık gözetimi tarafında operatörlerimizin periyodik muayene kayıtları günceldir ve kimyasal maruziyet gerektiren işlere uygunlukları belgelidir. Bu dosya, tesisin İSG sistemine yüklenici kaydında girer — denetimde 'yüklenici personeli gözetimi' başlığı hazır kapanır.",
            },
            {
                baslik: "Asma kat ve kurutma katlarında yapısal güvenlik",
                metin:
                    "Deri tesislerinin asma katlı kurutma alanları, yapısal güvenlik kontrolünün en kritik olduğu noktadır: kat taşıma kapasitesi makine ağırlığıyla belgeli olarak karşılaştırılmadan çalışma başlamaz. Kapasite raporu yoksa iki yol vardır — statik değerlendirme yaptırmak veya erişimi kat altından (eklemli bomla) kurmak. İkinci yol çoğu durumda hem hızlı hem kesin güvenlidir ve dar şase gerektirmez; kurutma katı işlerinde ilk önerimiz budur. Bu kararın kaydı, iş dosyasında yapısal güvenlik satırı olarak yer alır.",
            },
            {
                baslik: "OSB ortak altyapısında izinli çalışma",
                metin:
                    "Arıtma tesisi, kimyasal depo sahası ve pompa istasyonları OSB yönetiminin iş izni sistemine tabidir ve gaz riski nedeniyle bu izinler ölçüm şartlıdır. Operatörlü modelde iznin personel ayağı (eğitim, sağlık, KKD kayıtları) bizden hazır gider; işletme tarafında alan sorumlusu ve refakat düzeni kalır. Havuz üstü ve boru köprüsü işlerinde düşmeye karşı çift koruma (platform + yapısal ankraj değerlendirmesi) uygulanır — su üstü çalışmanın kendine özgü kurtarma planı iş öncesi kurulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Deri OSB'de alan-risk-önlem matrisi",
                paragraflar: [
                    "Bölge tesislerindeki alan tiplerinin risk profili ve çalışma önkoşulları aşağıdadır. Matris, her yeni işin İSG planına temel oluşturur.",
                ],
                tablo: {
                    basliklar: ["Alan", "Ana risk", "Önkoşul", "Operatör donanımı"],
                    satirlar: [
                        ["Islak bölüm (banyolar)", "Kimyasal buhar, ıslak zemin", "Havalandırma kontrolü, hız sınırı", "Solunum + kimyasal KKD"],
                        ["Atık hattı / bodrum kotu", "H2S birikimi", "Ölçüm + sürekli cihaz", "Gaz cihazı + tam set"],
                        ["Kurutma katları", "Yapısal kapasite", "Kapasite belgesi veya alt erişim", "Standart + kat planı"],
                        ["Sprey / finisaj", "Çözücü buharı", "Havalandırma penceresi", "Filtre sınıfına göre maske"],
                        ["OSB arıtma sahası", "Gaz + su üstü çalışma", "İzin + ölçüm + kurtarma planı", "Tam set + can yeleği (havuz üstü)"],
                    ],
                },
            },
            {
                baslik: "İş dosyası: denetimden önce denetime hazır",
                paragraflar: [
                    "Deri OSB işlerinde her iş, kapanışında bir dosya bırakır: kimyasal risk değerlendirmesi, ölçüm kayıtları, kullanılan KKD seti, yapısal kontrol satırı (asma kat işlerinde), izin belgeleri ve iş sonu saha notu. Bu dosya işletmenin İSG klasörüne doğrudan girer ve hem resmi denetimde hem müşteri denetiminde 'yüksekte çalışma + kimyasal ortam' başlıklarını kanıtlarıyla kapatır.",
                    "Tekrarlayan işlerde dosyalar birikimli bir geçmiş oluşturur: hangi alanda ne zaman ne yapıldı, hangi ölçüm ne gösterdi. Bu geçmiş, tesisin kendi risk değerlendirmesini güncellerken de kullanılabilir — kiralamanın görünmeyen ama kalıcı değeri budur.",
                ],
            },
            {
                baslik: "Acil durum planı: kimyasal ortamda yüksekte kurtarma",
                paragraflar: [
                    "Yüksekte çalışan operatörün kimyasal ortamda fenalaşması, iki riskin bileşimidir ve standart acil planla yönetilemez: sepetteki kişiye ulaşma süresi, gazlı ortamda kurtarıcının da korunmasını gerektirir. Bu yüzden deri tesislerindeki işlerde acil plan iş öncesi kurulur — acil iniş sisteminin yer seviyesinden kullanımı saha ekibine gösterilir, kurtarma sırasında kimin hangi KKD ile yaklaşacağı belirlenir ve tesis revirinin/112 akışının bilgisi plana işlenir.",
                    "Bu plan çoğu işte hiç kullanılmaz — ama varlığı, hem yasal gereklilik hem de gerçek güvencedir. Operatörlerimiz planın kurulmadığı sahada yüksekte çalışmaya başlamaz; bu, esnetilebilir bir tercih değil çalışma standardımızdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tabakhanemizde platform işi için önce ne yapmalıyız?",
                cevap:
                    "Kimyasal risk haritanızı paylaşın — İSG ekibinizde büyük olasılıkla hazırdır: hangi bölümde hangi kimyasal, hangi noktalar az havalandırılıyor. Bu harita üzerinden gaz ölçüm noktaları, çalışma pencereleri ve operatör KKD seti belirlenir; makine (korumalı aksamlı akülü) ve operatör buna göre hazırlanıp gelir. Harita yoksa keşifte birlikte çıkarıyoruz ve sonraki tüm işlerinizde kullanılıyor. İlk işin hazırlığı bu yüzden birkaç gün ister; sonrakiler rutindir.",
            },
            {
                soru: "Atık kanalı üzerindeki boru hattında iş var; özel önlem gerekir mi?",
                cevap:
                    "Evet — H2S protokolü: çalışma öncesi gaz ölçümü, sepette sürekli ölçüm cihazı ve alarm limitinde tartışmasız duruş. H2S yüksek konsantrasyonda koku duyusunu devre dışı bıraktığı için 'kokarsa çıkarız' yaklaşımı geçersizdir — ölçüm cihazsız bu noktalarda çalışmıyoruz. Operatör uygun solunum korumasıyla çalışır, kurtarma planı iş öncesi kurulur ve ölçüm kayıtları dosyanıza girer. Bu iş tipini talepte 'atık hattı çevresi' olarak işaretlemeniz hazırlığı doğru başlatır.",
            },
            {
                soru: "Kurutma katımızın taşıma kapasitesini bilmiyoruz; iş yapılabilir mi?",
                cevap:
                    "Yapılır — ama katın üzerine makine çıkarmadan: erişim kat altından eklemli bomla kurulur, hedefe yanal ulaşılır ve yapısal belirsizlik riski tamamen ortadan kalkar. Bu çoğu kurutma katı işinde zaten en hızlı çözümdür. Kat üstü çalışma isteniyorsa önce statik değerlendirme gerekir — kapasite belgesi olmadan asma kata makine çıkarmıyoruz; bu, deri tesislerindeki en ciddi yapısal risktir ve 'bugüne kadar bir şey olmadı' kanıt değildir.",
            },
            {
                soru: "Operatörünüzün kimyasal ortam donanımı kimin sorumluluğunda?",
                cevap:
                    "Standart ve kimyasal KKD seti (solunum koruması, dayanıklı eldiven-tulum, göz koruması) operatörümüzle birlikte bizden gelir; filtre sınıfı, tesisinizin kimyasal envanterine göre seçilir. Sağlık gözetimi kayıtları günceldir ve yüklenici dosyanıza girer. Tesise düşen taraf, alan-özel bilgilendirmedir: hangi banyoda ne var, hangi saatte hangi proses çalışıyor. Bu bilgi keşifte alınır — doğru filtreyle gelen operatör, sahada donanım beklemez.",
            },
            {
                soru: "OSB arıtma havuzunun üzerindeki yürüyüş yolunda iş var; nasıl planlanır?",
                cevap:
                    "Üç katmanlı planla: OSB iş izni ve gaz ölçüm şartı (yönetim sistemi üzerinden), su üstü çalışma önlemi (kurtarma planı, gerekirse can yeleği) ve platform erişiminin havuz kenarından güvenli kurulumu (zemin ve devrilme mesafesi kontrolü). Operatörlü modelde iznin personel ayağı hazır gider; alan sorumlusu ve refakat tesisçe sağlanır. Bu işler kısa ama hazırlığı yoğundur — talebi izin süreciyle birlikte, birkaç gün payla açın.",
            },
            {
                soru: "Denetimde kimyasal ortam + yüksekte çalışma kesişimi soruluyor; dosyanız yeterli mi?",
                cevap:
                    "Evet — tam bu kesişim için tasarlandı: kimyasal risk değerlendirmesi, ölçüm kayıtları, KKD seti kaydı, yapısal kontrol satırı, izinler ve saha notu tek dosyada teslim edilir. Resmi denetimde 'yüklenici yönetimi' ve 'yüksekte çalışma' başlıklarını, müşteri denetiminde kimyasal güvenlik beklentisini kanıtlarıyla kapatır. Tekrarlayan işlerde dosyalar birikir ve tesisinizin risk değerlendirme güncellemelerine veri sağlar — bu arşiv, kiralamanın kalıcı değeridir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Deri prosesinin kimyasal envanteri (asit/baz banyoları, H2S riski) sektör bilgisidir; ölçüm ve kurtarma disiplinleri İSG mevzuat çerçevesidir.",
    },

    "bolge:tire-osb": {
        h1: "Tire OSB'de Gıda Güvenliği Uyumlu Manlift Kiralama",
        giris:
            "Süt işleme tesisinde çalışacak bir platform operatörü, iki ayrı dünyanın kurallarını aynı anda taşır: yüksekte çalışmanın İSG rejimi ve gıda güvenliğinin hijyen rejimi. Tire OSB'nin süt ürünleri ağırlıklı dokusunda bu çifte uyum, kiralamanın asıl konusudur — makine herkes tarafından bulunabilir; sağlık raporu güncel, hijyen eğitimi kayıtlı, gıda sahası refleksleri oturmuş operatörle birlikte gelen makine ise bölgede gerçek ihtiyacın karşılığıdır. Belgelendirme baskısı bu ihtiyacı büyütür: BRC/IFS denetimleri ve zincir market tedarik şartnameleri, tesise giren her yüklenicinin kayıtlarını sorgular. İşlerimiz bu sorguya hazır dosyayla yapılır; süt prosesinin durmaz ritmi içinde iş pencereleri kalite ekibiyle birlikte planlanır.",
        maddeler: [
            {
                baslik: "Operatörün gıda sahası dosyası",
                metin:
                    "Gıda tesisine giren operatörün dosyası, İSG belgelerinin ötesine geçer: güncel sağlık raporu (portör muayenesi dahil), hijyen eğitimi kaydı, tesise uygun kıyafet-bone-galoş düzeni ve davranış taahhüdü (takı, kişisel eşya, belirlenmiş alanlar). Operatörlerimizin gıda profili bu seti hazır taşır ve tesisinizin yüklenici kayıt sistemine doğrudan girer. Denetimde 'tesise giren yüklenici personeli' sorgusu, eksiksiz dosyayla kapanır — son dakika sağlık raporu koşturması yaşanmaz.",
            },
            {
                baslik: "Alet ve yabancı madde disiplini",
                metin:
                    "Süt tesisinde sepetten düşen bir vida, hat durdurma ve parti imha nedenidir. Çalışma disiplinimiz buna göre kuruludur: sepete çıkan her alet listelenir ve bağlanır, sarf malzemesi sayımla girer-çıkar, makine üzerinde gevşek parça kontrolü iş öncesi yapılır ve kırılabilir malzeme (cam, sert plastik) tesis kuralına göre yönetilir. Bu disiplinin kaydı, tesisin yabancı madde (cam-sert plastik) prosedürüne entegre formatta tutulur — kalite ekibi kendi sistemine doğrudan işler.",
            },
            {
                baslik: "Hijyen bariyerleri ve makine hazırlığı",
                metin:
                    "Makine, gıda tesisine üretim ekipmanı titizliğiyle girer: sevkiyat öncesi yıkama-dezenfeksiyon, hidrolik kaçak kontrolünün belgelenmesi, iz bırakmayan lastik ve tesis içinde bölge geçişlerinde tekerlek dezenfeksiyonu (paspas/havuz düzenine uyum). Islak alan çalışmalarında (CIP dönüşü henüz kurumamış zeminler) hız ve dönüş kuralları uygulanır. Bu hazırlığın kaydı makine dosyasında yer alır ve denetimde 'tesise giren ekipman' sorgusunu karşılar.",
            },
            {
                baslik: "Soğuk alan çalışmasında operatör sağlığı",
                metin:
                    "Soğuk depo ve olgunlaştırma odalarındaki uzun işlerde operatör maruziyeti planlanır: soğukta kesintisiz çalışma süreleri sınırlanır, ısınma molaları iş bloklarına işlenir ve uygun termal kıyafet kullanılır. Bu yalnızca konfor değil güvenlik konusudur — üşüyen elin hassasiyeti düşer, yüksekte hata payı artar. Akünün soğukta azalan performansıyla operatörün mola ritmi birlikte planlandığında ikisi de aynı pencereye oturur ve iş verimli akar.",
            },
            {
                baslik: "Belgelendirme takvimine hizalı çalışma",
                metin:
                    "Tire tesislerinin BRC/IFS ve müşteri denetim takvimleri, platform işlerinin doğal takvimidir: denetim öncesi hazırlık dalgası (tavan, aydınlatma, sinek-kuş önleme) ve denetim sonrası bulgu kapatma işleri. İki dalgayı da denetim tarihinden geriye planlıyoruz — hazırlık en geç iki hafta önce biter, bulgu kapatma ise termin süresine göre önceliklenir. Denetim dosyasına girecek yüklenici kayıtlarımız formatlıdır; kalite ekibinin ek çevirisine gerek kalmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda tesisinde yüklenici uyum seti",
                paragraflar: [
                    "Süt işleme tesisine platform işi için giren ekibin uyum seti aşağıdadır. Bu set, BRC/IFS tipi denetimlerin yüklenici başlığına doğrudan karşılık gelir.",
                ],
                tablo: {
                    basliklar: ["Uyum kalemi", "İçerik", "Kayıt", "Sorumlu"],
                    satirlar: [
                        ["Operatör sağlık", "Rapor + portör + hijyen eğitimi", "Yüklenici dosyası", "Biz"],
                        ["Makine hijyeni", "Dezenfeksiyon + kaçak kontrolü", "Makine giriş kaydı", "Biz"],
                        ["Alet disiplini", "Liste + bağlama + sayım", "Yabancı madde formu", "Biz + kalite"],
                        ["Bölge geçişleri", "Kıyafet + tekerlek dezenfeksiyonu", "Tesis prosedürü", "Birlikte"],
                        ["İş pencereleri", "CIP / duruş bloklarına hizalama", "İş planı", "Birlikte"],
                    ],
                },
            },
            {
                baslik: "Denetim öncesi ve sonrası: iki dalgalı iş modeli",
                paragraflar: [
                    "Belgelendirmeli tesislerde platform ihtiyacı iki öngörülebilir dalgada gelir. Hazırlık dalgası denetimden 3-4 hafta önce başlar ve en geç iki hafta önce biter: tavan-boru üstü temizlik erişimi, aydınlatma yenileme, sinek-kuş önleme montajı, boya-onarım. Bulgu kapatma dalgası denetim raporuyla gelir ve termin baskısı taşır: minör bulgular ilk uygun pencerede, majörler önceliklendirilmiş planla kapatılır. İki dalgayı tek çerçevede planlayan tesisler, hem makine güvencesi hem maliyet avantajı kazanır.",
                    "Denetim tarihiniz netleştiğinde geriye doğru takvim kuruyoruz; bulgu raporu geldiğinde ise kapatma işleri, kanıt fotoğrafı ve kayıt düzeniyle birlikte teslim ediliyor — denetçiye sunulacak dosya, işin doğal çıktısıdır.",
                ],
            },
            {
                baslik: "Süt prosesi penceresinde operatör-kalite iş birliği",
                paragraflar: [
                    "Durmaz proseste iş penceresi kalite ekibinin onayıyla açılır ve operatörün pencere disiplini işin sigortasıdır: blok süresine sığmayan iş zorlanmaz, sonraki pencereye devredilir; zon kapanış onayı alınmadan bariyer kaldırılmaz; her pencere açılış-kapanış saatiyle kayda girer. Bu ritim, kalite ekibinin platform işini 'risk' değil 'yönetilen rutin' olarak görmesini sağlar — ve sonraki işlerin onay süreci kısalır.",
                    "CIP bloklarına hizalanan işlerde operatörümüz, zonun kapalı-temiz statüsünü kalite onayından teyit ederek başlar. Bu çift kontrol (bizim disiplinimiz + tesisin onayı), gıda güvenliği kültürünün platform işine yansımasıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörünüz süt tesisimize hangi belgelerle girer?",
                cevap:
                    "Gıda sahası tam setiyle: güncel sağlık raporu ve portör muayenesi, hijyen eğitimi kaydı, MYK operatör belgesi ve İSG eğitim dosyası. Kıyafet düzeni (bone, galoş, tesise uygun tulum) ve davranış kuralları taahhüdü sete dahildir. Dosya, yüklenici kayıt sisteminize hazır formatta sunulur ve denetimlerde 'tesise giren yüklenici personeli' başlığını kapatır. Gıda deneyimli operatör ataması için talepte tesis tipinizi belirtmeniz yeterlidir.",
            },
            {
                soru: "Hat üzerinde çalışırken vida düşerse ne olur? Bunu nasıl önlüyorsunuz?",
                cevap:
                    "Önleme katmanlı kuruludur: sepete çıkan her alet listelenip bağlanır (tool lanyard), sarf malzemesi sayımla giriş-çıkış yapar, makine gevşek parça kontrolünden geçer ve çalışma altı bariyer + gerekirse toplama örtüsüyle korunur. Açık ürün zonunun üzerinde ise hiç çalışılmaz — o işler CIP penceresine alınır. Buna rağmen şüpheli durumda dürüstlük ilkesi geçerlidir: olası düşme anında iş durur ve kalite ekibinize derhâl bildirilir — saklanan şüphe, gıda tesisinde en büyük ihanettir.",
            },
            {
                soru: "BRC denetimimiz var; sizin kayıtlarınız denetçiye sunulabilir mi?",
                cevap:
                    "Evet — formatı buna göre tasarlandı: operatör dosyası, makine hijyen kaydı, yabancı madde disiplini formları, iş pencereleri kaydı ve iş sonu notları, yüklenici yönetimi başlığının kanıt seti olarak doğrudan sunulabilir. Denetim öncesi hazırlık işlerinde ayrıca kanıt fotoğrafı düzeni tutuyoruz. Kalite ekibinizin kendi formatı varsa kayıtları ona uyarlıyoruz — çeviri yükü size kalmaz.",
            },
            {
                soru: "Soğuk depomuzdaki uzun iş operatör için sorun olur mu?",
                cevap:
                    "Planlanırsa olmaz: soğukta kesintisiz çalışma süreleri sınırlanır, ısınma molaları bloklara işlenir ve operatör termal donanımla çalışır. Bu plan aynı zamanda işin kalitesidir — üşümüş elin hassasiyeti düşer ve yüksekte hata payı artar; molasız 'hızlı bitirme' aslında yavaşlatır. Akünün soğuk performans planıyla operatör mola ritmi aynı pencereye oturtulur; soğuk oda işleri bu düzenle, tahmin edilen sürede ve güvenle biter.",
            },
            {
                soru: "Denetim bulgumuz çıktı, iki haftada kapatmamız gerekiyor; yetişir mi?",
                cevap:
                    "Çoğu durumda evet — bulgu kapatma bizim öncelikli iş kategorimizdir: rapor geldiği gün işler sınıflanır (platform gerektiren/gerektirmeyen), gerektiren kalemler ilk uygun pencerelere yerleştirilir ve her kapatma, kanıt fotoğrafı + kayıtla teslim edilir. Termin baskılı işlerde makine-operatör çifti öncelikli atanır. Tek risk, bölgesel yoğunluk dönemleridir — bu yüzden bulgu raporunu aldığınız gün aramanız, terminin garantisidir.",
            },
            {
                soru: "Tesisimizde birden fazla yüklenici çalışıyor; sizin ekip nasıl ayrışır?",
                cevap:
                    "Kayıt ve alan disipliniyle: ekibimiz kendi yüklenici kaydıyla, tanımlı alanda, onaylı pencerede çalışır ve diğer yüklenicilerin alanlarıyla kesişim, tesis koordinasyonuna bağlanır. Ortak alan kullanımı (koridor, geçiş) gerektiğinde saat planı kurulur. Bu ayrışmanın pratik değeri denetimde görünür — hangi işin kime ait olduğu, kayıtlardan tartışmasız okunur. Çok yüklenicili dönemlerde (büyük revizyon, denetim hazırlığı) koordinasyon toplantısına katılırız; iş planımız ortak takvime hizalanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Süt tesislerinin BRC/IFS yüklenici beklentileri ve portör/hijyen şartları sektör standartlarıdır; iki dalgalı denetim modeli firma pratiğidir.",
    },

    "bolge:manisa-osb-cevre-ili": {
        h1: "Manisa OSB'de Kurumsal Yüklenici Uyumlu Manlift Kiralama (Çevre İl)",
        giris:
            "Manisa OSB'nin küresel üreticileriyle çalışmak, bir yeterlilik sınavından geçmektir: yüklenici olarak kabul edilmeden önce İSG performans geçmişiniz, belge altyapınız, sigorta limitleriniz ve personel dosyalarınız sistematik olarak sorgulanır — ve bu sorgu her yıl yenilenir. Bölgedeki beyaz eşya ve elektronik devlerinin yüklenici yönetim sistemleri, Türkiye'deki en olgun örneklerdendir; platform kiralama gibi 'küçük' görünen bir hizmet bile aynı elemeden geçer. İzmir merkezli operasyonumuz bu sistemlere kayıtlı çalışma pratiğine sahiptir: ön yeterlilik dosyamız hazırdır, operatör kayıtlarımız günceldir ve saha kurallarına uyum, sözleşme maddesi değil çalışma alışkanlığıdır. Sabuncubeli bağlantısı, bu uyumu İzmir hızıyla birleştirir.",
        maddeler: [
            {
                baslik: "Ön yeterlilik: işin başlamadan kazanıldığı yer",
                metin:
                    "Kurumsal tesislerin yüklenici sistemine giriş, ön yeterlilik dosyasıyla başlar: firma belgeleri, İSG politikası ve performans kayıtları, sigorta poliçeleri (işveren mali mesuliyet dahil), ekipman belgeleri ve personel yeterlilikleri. Dosyamız bu sorgulara standart formatta hazırdır ve ilk kayıt, tesisin süreç hızında tamamlanır. Kayıt sonrası her iş, yalnızca iş-özel adımları (çalışma izni, alan onayı) bekler — bu yüzden ilk kiralamayı erken planlamak, sonraki tüm işlerin hızını satın almaktır.",
            },
            {
                baslik: "Saha İSG kurallarına operasyonel uyum",
                metin:
                    "Bu tesislerin saha kuralları ayrıntılıdır ve tavizsiz uygulanır: hız limitleri, yaya yolları, telefon kullanımı, KKD standardı, atık ayrımı — platform operatörü bu kuralların tamamına tabidir. Operatörlerimizin kurumsal saha deneyimi burada belirleyicidir: kural setini bilen operatör, saha İSG ekibiyle sürtüşme üretmez ve iş, gözetim yükü yaratmadan akar. İhlalin sonucu bu sahalarda nettir (puan sistemi, saha yasağı) ve bizim sicilimizin temizliği, müşterilerimizin de referansıdır.",
            },
            {
                baslik: "Çalışma izni sistemlerinde platform işi",
                metin:
                    "Kurumsal tesislerin izin sistemleri (yüksekte çalışma izni, sıcak iş, kapalı alan) dijitalleşmiştir ve platform işi çoğunlukla 'yüksekte çalışma' iznine bağlanır: risk değerlendirmesi, düşme önleme planı, ekipman kontrol kaydı ve onay zinciri. İzin dosyasının teknik ayağını (makine belgeleri, kontrol kayıtları, operatör yeterlilikleri) hazır formatta sağlıyoruz; işletme ayağı (alan sorumlusu onayı) tesis içinde kalır. Günlük izin yenileme düzeninde operatörümüz, sabah izin turunu saha ekibiyle birlikte tamamlar.",
            },
            {
                baslik: "Üretim alanında davranış standardı",
                metin:
                    "Takt süreli üretim hatlarının yanında çalışmak, davranış standardı ister: hat personeliyle temasın sınırları, fotoğraf-video yasağı (ürün gizliliği), yabancı madde disiplini ve hat durdurma butonlarına mesafe. ESD kontrollü ve temiz alan yaklaşımlı bölgelerde ek katmanlar devreye girer. Operatörlerimiz bu standartla çalışır; tesisin oryantasyon eğitimini alır ve alan-özel kuralları iş planına işler. 'Dışarıdan gelen ekip' riski, bu disiplinle 'sistemin parçası' güvenine dönüşür.",
            },
            {
                baslik: "Çevre ilden kurumsal hizmetin lojistiği",
                metin:
                    "Sabuncubeli bağlantısı, İzmir filosunu Manisa OSB'ye fiilen komşu yapar: teslimat 1-2 iş günü, ikame ve teknisyen desteği aynı gün. Kurumsal işlerin asıl lojistiği ise evrak ve insandır — ve orada mesafe zaten yoktur: yüklenici kayıtları dijital sistemlerde, operatör dosyaları hazır, izin süreçleri uzaktan başlatılabilir durumdadır. Uzun dönem işlerde (duruş haftaları, proje bazlı) makine ve operatör sahada konaklar; günlük operasyon tümüyle yerinde yönetilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kurumsal yüklenici sürecinin adımları",
                paragraflar: [
                    "Manisa OSB'nin kurumsal tesislerinde tipik süreç aşağıdadır. İlk üç adım yalnızca ilk kiralamada tam yaşanır; sonraki işlerde süreç 4. adımdan başlar.",
                ],
                tablo: {
                    basliklar: ["Adım", "İçerik", "Süre", "Not"],
                    satirlar: [
                        ["1. Ön yeterlilik", "Firma + İSG + sigorta dosyası", "Tesise göre birkaç gün", "Dosyamız standart formatta hazır"],
                        ["2. Personel kaydı", "Operatör belgeleri + oryantasyon", "1 – 2 gün", "Eğitim tesiste alınır"],
                        ["3. Ekipman onayı", "Makine belgeleri + saha kontrolü", "Girişte", "Periyodik kontrol + bakım kaydı"],
                        ["4. Çalışma izni", "İş-özel risk değerlendirme + onay", "Günlük döngü", "Teknik ayak bizden hazır"],
                        ["5. İş + kayıt", "Uygulama + günlük kapanış", "Plana göre", "Kayıtlar tesis sistemine"],
                    ],
                },
            },
            {
                baslik: "Duruş haftasında yüklenici koordinasyonu",
                paragraflar: [
                    "Planlı duruş haftaları, bu tesislerde onlarca yüklenicinin aynı sahada çalıştığı dönemlerdir ve koordinasyon, işin kendisi kadar önemlidir: alan çakışmaları, vinç-platform kesişimleri, enerji kesinti pencereleri ve ortak koridor trafiği duruş yönetim planında birleşir. Platform işlerimiz bu plana slot bazında entegre olur — hangi holde hangi saatte, hangi diğer yüklenicilerle komşu çalışılacağı önceden bellidir ve operatörümüz duruş koordinasyon toplantılarına katılır.",
                    "Duruş kapasitesi bölgede aylar önce dolduğu için rezervasyon takvimi de kurumsaldır: duruş tarihi kesinleştiğinde iş listesi ve slot planı bağlanır, yedek makine rezervasyonu pakete eklenir. Geç kalan talepler o hafta fiilen karşılanamaz — bu, bölgenin bilinen gerçeğidir.",
                ],
            },
            {
                baslik: "Sicil: kurumsal sahada en değerli varlık",
                paragraflar: [
                    "Kurumsal yüklenici sistemleri geçmişi puanlar: iş güvenliği ihlalleri, termin performansı, kayıt kalitesi ve saha geri bildirimleri, sonraki işlerin onay hızını ve kapsamını belirler. Bizim yaklaşımımız bu gerçeğe göre kuruludur — her iş, sicile yazılan bir kayıttır ve temiz sicil, müşterilerimize de yansır: bizimle çalışan yüklenici firmalar, kendi puanlarına olumlu kayıt ekler.",
                    "Bu nedenle kural esnetme taleplerini (izinsiz alan, eksik KKD, 'hızlıca hallederiz') kibarca ama net reddediyoruz: bir günlük pratiklik, yılların sicilinden pahalıdır — sizin için de, bizim için de.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizin yüklenici sistemine kayıtlı değilsiniz; süreç ne kadar sürer?",
                cevap:
                    "Tesisin süreç hızına bağlı — dosyamız hazır olduğu için bizden gecikme olmaz: ön yeterlilik seti (firma, İSG, sigorta belgeleri) standart formatta sunulur, operatör kayıtları ve oryantasyon 1-2 günde tamamlanır, ekipman onayı girişte yapılır. Tipik toplam birkaç gün ile bir hafta arasıdır. Bu süreç yalnızca ilk kiralamada yaşanır — kayıt açıldıktan sonra her yeni iş, iş-özel izin adımlarından başlar ve telefon hızında planlanır.",
            },
            {
                soru: "Yüksekte çalışma izni sistemimiz günlük onay istiyor; operatörünüz buna uyar mı?",
                cevap:
                    "Uyar — bu düzen operatörlerimizin çalışma alışkanlığıdır: sabah izin turu saha ekibinizle birlikte tamamlanır, günlük risk değerlendirmesi ve ekipman kontrol kaydı imzalanır, iş gün sonunda kayıtla kapatılır. İzin dosyasının teknik ayağı (makine belgeleri, kontrol kayıtları, operatör yeterlilikleri) bizden hazır gelir. Dijital izin sistemlerine kullanıcı tanımlanması gerekiyorsa ilk kayıtta çözülür — sonrası rutindir.",
            },
            {
                soru: "Duruş haftamızda beş farklı yüklenici çalışacak; platform işleri nasıl koordine olur?",
                cevap:
                    "Duruş yönetim planına slot bazında entegre olarak: iş listemiz saat-hol-ekip detayında plana işlenir, vinç-platform kesişimleri ve enerji kesinti pencereleri koordinasyon toplantısında netleşir ve operatörümüz bu toplantılara katılır. Alan çakışması riskine karşı slot planında tampon bırakılır; yedek makine rezervasyonu pakete dahildir. Kritik nokta zamanlamadır — duruş kapasitesi bölgede aylar önce dolduğu için tarih kesinleştiğinde rezervasyonu bağlamak gerekir.",
            },
            {
                soru: "Üretim alanında fotoğraf yasağımız var; iş kayıtları nasıl tutulur?",
                cevap:
                    "Tesis kuralına uygun düzenle: kayıtlar yazılı formda tutulur, görsel gerektiğinde tesisin onay süreciyle ve tesisin cihazıyla çekim yapılır veya çekim tesis personeline bırakılır. Ürün gizliliği bu sahalarda standarttır ve operatörlerimiz kişisel telefon kullanımının saha kurallarına tabi olduğunu bilir. Kayıt düzeni ilk işte kalite/güvenlik ekibinizle netleştirilir — sonraki işlerde otomatik uygulanır.",
            },
            {
                soru: "Sigorta limiti şartımız yüksek; karşılıyor musunuz?",
                cevap:
                    "Poliçe setimiz kurumsal şartnamelerin yaygın limitlerine göre kuruludur ve ön yeterlilik dosyasında sunulur; şartnamenizin limitiyle karşılaştırma ilk adımda yapılır. Yetersiz kalması hâlinde ek teminat süreci başlatılabilir — bu durum önceden görülür ve sürpriz olmaz. İşveren mali mesuliyet, üçüncü şahıs ve ekipman poliçelerinin güncel örnekleri dosyada mevcuttur; yıllık yenileme kayıtları da sisteme işlenir.",
            },
            {
                soru: "Geçmişte bir yüklenicinin İSG ihlali başımıza iş açtı; sizden farkı ne bekleyelim?",
                cevap:
                    "Sicille konuşuyoruz: kurumsal sistemlerdeki kayıtlarımız — ihlal geçmişi, termin performansı, saha geri bildirimleri — referansımızdır ve ilk kayıtta bu geçmişi sorabilirsiniz. Çalışma pratiğimizde kural esnetme talepleri (izinsiz alan, eksik KKD, aceleyle atlama) net reddedilir; bu, sizin puanınızı da koruyan bir ilkedir. Her iş kayıtla kapanır ve dosya, sisteminize girer — 'ne yapıldığı belirsiz yüklenici işi' kategorisi bizimle oluşmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kurumsal yüklenici yönetim sistemlerinin yapısı (ön yeterlilik, izin sistemleri, puanlama) sektör pratiğidir; Manisa OSB profili kamuya açık bilgidir.",
    },

    "bolge:aydin-osb-cevre-ili": {
        h1: "Aydın OSB'de Enerji ve Gıda Sahaları İçin Manlift Kiralama (Çevre İl)",
        giris:
            "Aydın havzasında iki sektörün İSG rejimi, platform işini iki ayrı disipline böler: jeotermal enerji sahalarının ağır endüstri rejimi ve gıda-tarım tesislerinin hijyen rejimi. İlkinde H2S ölçümleri, sıcak akışkan hatları ve santral izin sistemleri; ikincisinde ihracat denetimleri, operatör sağlık dosyaları ve sezon baskısı işi çerçeveler. Belgeli operatörlü modelimiz her iki disiplinde de aynı ilkeyle çalışır — operatör, sahanın rejimini bilerek gelir. Havzanın mevsimsel iş yoğunluğu üçüncü bir katman ekler: kampanya dönemlerinde iş gücü ve makine talebi aynı haftalara sıkışır ve güvenlik disiplini, tam da bu aceleci dönemlerde en kritik hâlini alır. İzmir-Aydın otoyolu, bu üç katmanlı ihtiyaca merkez filodan hızlı destek sağlar.",
        maddeler: [
            {
                baslik: "Jeotermal sahada H2S ve sıcak hat disiplini",
                metin:
                    "Jeotermal santrallerin platform işlerinde iki risk süreklidir: H2S gazı (kuyu başları, separatör çevresi, düşük kotlar) ve sıcak akışkan hatları (buhar-brine boruları, reenjeksiyon hatları). Çalışma düzenimiz buna göre kurulur — gaz ölçüm cihazıyla çalışma, alarm limitinde tartışmasız duruş, sıcak hatlardan tanımlı mesafe ve izolasyon işlerinde yüzey sıcaklığı kontrolü. Operatörlerimizin santral dosyası (saha eğitimi, sağlık gözetimi, izin sistemi kaydı) hazırdır; ilk kayıt sürecinin payı planlamaya eklenir.",
            },
            {
                baslik: "Santral izin sisteminde ekipman bakım pencereleri",
                metin:
                    "7/24 üreten santralde platform işi, ekipman redundansının açtığı bakım pencerelerine oturur ve izin sistemi bu pencereleri yönetir: hangi ünite ne zaman bakımda, hangi alanda hangi izinle çalışılır. İş planımız santralın bakım programına hizalanır — pencere açılmadan izinler tamam, makine konumlanmış, operatör brifingli olur. Pencere kaçırmanın maliyeti bir sonraki bakım dönemini beklemektir; bu yüzden jeotermal işlerde hazırlık disiplini, iş disiplininden önce gelir.",
            },
            {
                baslik: "Gıda tesislerinde ihracat denetimi hazırlığı",
                metin:
                    "Havzanın incir, zeytin ve süt işleyicileri ihracat denetimlerine tabidir ve platform işleri bu takvimle dalgalanır: denetim öncesi hazırlık (tavan, aydınlatma, sinek-kuş önleme) ve bulgu kapatma dönemleri. Operatörün gıda dosyası (sağlık, portör, hijyen eğitimi) ve makinenin hijyen hazırlığı (dezenfeksiyon, kaçak kontrolü, iz bırakmayan lastik) bu tesislerde standart settir. Denetim kayıtlarına girecek yüklenici belgeleri formatlı teslim edilir.",
            },
            {
                baslik: "Sezon baskısında güvenlikten taviz vermeme düzeni",
                metin:
                    "Kampanya öncesi haftaların acelesi, havzadaki en büyük İSG riskidir: 'yetişsin de nasıl olursa olsun' baskısı, tam da kazaların olduğu iklimi üretir. Düzenimiz bu baskıya iki cevap verir — işleri erken takvime çekmek (kampanya öncesi son haftaya iş bırakmamak) ve sıkışan işlerde süreyi değil kaynağı artırmak (ikinci makine-operatör çifti, gece bloğu ekleme). Rüzgârda yüksek iş, ölçümsüz kapalı alan, belgesiz kullanım gibi kısayollar, takvim ne olursa olsun reddedilir.",
            },
            {
                baslik: "Havza genelinde mevsim-uyumlu kapasite",
                metin:
                    "Otoyol ekseni ve Torbalı-Tire tur düzeni, havzanın mevsimsel dalgalarına esnek kapasite sağlar: kampanya öncesi yoğun haftalarda ek makine-operatör takviyesi, sakin dönemlerde standart tur ritmi. Kırsal tesislere (dağ köyleri zeytinyağı işletmeleri dahil) güzergâh kontrolüyle teslimat yapılır; uzak noktalarda operatör konaklama düzeni sözleşmede tanımlanır. Arıza-ikame desteği otoyol üzerinden gün içinde ulaşır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydın havzasında iki rejimin karşılaştırması",
                paragraflar: [
                    "Havzanın iki ana sektöründe platform işinin İSG çerçevesi aşağıda karşılaştırılır. Operatör ataması, bu çerçeveye göre yapılır — iki rejimin dosyaları farklıdır.",
                ],
                tablo: {
                    basliklar: ["Başlık", "Jeotermal saha", "Gıda tesisi"],
                    satirlar: [
                        ["Ana risk", "H2S + sıcak hatlar", "Yabancı madde + hijyen"],
                        ["Operatör dosyası", "Santral eğitimi + gaz ölçüm yetkinliği", "Sağlık + portör + hijyen eğitimi"],
                        ["İzin düzeni", "Santral izin sistemi + ölçüm şartı", "Kalite onayı + pencere planı"],
                        ["Makine hazırlığı", "Arazi tipi ağırlıklı + sık bakım", "Dezenfeksiyon + iz bırakmayan lastik"],
                        ["Zamanlama", "Ekipman bakım pencereleri", "Sezon dışı + denetim takvimi"],
                    ],
                },
            },
            {
                baslik: "Kampanya öncesi güvenli yoğunluk planı",
                paragraflar: [
                    "Sezon baskısını güvenlikle bağdaştırmanın yolu, yoğunluğu öne çekmektir: kampanya öncesi son ayın işleri, iki ay önceden başlayan takvime yayılır ve son hafta yalnızca küçük kalemlere kalır. Sıkışma yaşandığında ilkemiz kaynak artırmaktır — ikinci makine-operatör çifti veya gece bloğu ekleyerek süre korunur, tempo değil kapasite artar. Bu yaklaşım, 'aceleyle atlanan adım' riskini ortadan kaldırır.",
                    "Havza genelinde kampanya takvimleri bilinir olduğu için kapasite planımız mevsime göre kurulur; erken bağlanan işler hem takvim hem fiyat avantajı alır. Son haftaya kalan taleplerde ise dürüst cevap veririz — yetişmeyecek işi 'yetişir' diye almak, bu bölgede en pahalı yalandır.",
                ],
            },
            {
                baslik: "Uzak ve kırsal sahada operatörlü iş düzeni",
                paragraflar: [
                    "Havzanın dağınık yerleşimi (kırsal sıkım tesisleri, dağ köyleri yakınındaki işletmeler), operatörlü modelin lojistik değerini büyütür: makine ve yetkin kullanıcı birlikte gider, sahada 'kim kullanacak' sorunu doğmaz ve iş tek seferde biter. Güzergâh kontrolü (köprü tonajı, dar geçit) sevkiyat öncesi yapılır; çok günlük işlerde operatör konaklaması sözleşmede tanımlı düzenle kurulur.",
                    "Kırsal işletmelerin İSG altyapısı çoğunlukla incedir; operatörümüzün getirdiği düzen (güvenlik seti, çalışma disiplini, iş kaydı) bu açığı iş süresince kapatır ve işletmeye yazılı kayıt bırakır. Tekrarlayan ihtiyaçta bu kayıtlar, işletmenin kendi İSG dosyasının çekirdeği olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Jeotermal santralimizde çalışacak operatörün hangi eğitimleri olmalı?",
                cevap:
                    "Santral rejiminin tam seti: saha İSG eğitimi-oryantasyonu, gaz ölçüm cihazı kullanım yetkinliği, sağlık gözetimi kaydı ve izin sistemine kayıt — MYK platform belgesinin üzerine. Santral dosyası hazır operatörlerimiz bu işlere atanır; sahanıza özel ilk kayıt birkaç gün alabildiği için talebi erken açın. H2S disiplini (sürekli ölçüm, alarm duruşu) ve sıcak hat mesafeleri çalışma standardımızdır — bu konularda esneme talebi kabul edilmez.",
            },
            {
                soru: "Bakım penceremiz üç gün; işler bu sürede biter mi?",
                cevap:
                    "Hazırlık önceden tamamlanırsa biter — jeotermal işlerin kuralı budur: izinler pencere açılmadan hazır, makine konumlanmış, operatör brifingli ve iş listesi saat planına dökülmüş olur. Pencere içinde yalnızca iş yapılır; evrak, sevkiyat ve keşif pencere dışında biter. Üç günlük pencereye sığmayan liste görünüyorsa çözüm tempoyu artırmak değil kaynağı artırmaktır — ikinci makine-operatör çiftiyle paralel çalışma. Pencere kaçırmanın maliyeti bir sonraki bakım dönemi olduğu için planlamayı birlikte ve erken yapıyoruz.",
            },
            {
                soru: "İncir işleme tesisimizde denetim öncesi işler için operatör şartları neler?",
                cevap:
                    "Gıda sahası seti: güncel sağlık raporu ve portör muayenesi, hijyen eğitimi kaydı, tesise uygun kıyafet düzeni ve yabancı madde disiplini (alet listeleme-bağlama-sayım). Makine dezenfekte edilmiş, kaçak kontrolü belgeli ve iz bırakmayan lastikli gelir. Denetim kayıtlarınıza girecek yüklenici belgeleri formatlı teslim edilir. Denetim tarihinizden geriye doğru takvim kurup hazırlık işlerini son iki haftaya bırakmadan bitiriyoruz.",
            },
            {
                soru: "Kampanyaya bir hafta kaldı ve işlerimiz bitmedi; ne yapabilirsiniz?",
                cevap:
                    "Dürüst değerlendirme ve kaynak artırma: kalan listeyi birlikte sınıflar, gerçekçi sığanı ikinci makine-operatör çifti ve gece bloklarıyla hızlandırır, sığmayanı kampanya sonrasına yazarız. 'Hepsi yetişir' diye alıp aceleyle atlanmış adımlarla çalışmak — ölçümsüz alan, rüzgârda yüksek iş, belgesiz kullanım — kabul etmediğimiz tek yoldur; kampanya arifesindeki kaza, işin kendisinden pahalıdır. Gelecek sezon için notumuz da nettir: bu sıkışma, işleri iki ay önce başlatan takvimle tamamen önlenebilir.",
            },
            {
                soru: "Dağ köyündeki sıkım tesisimize operatörlü makine gelir mi?",
                cevap:
                    "Gelir — güzergâh kontrolü ve konaklama düzeniyle: konum bilginizle köprü tonajı ve dar geçit değerlendirmesi yapılır, çok günlük işlerde operatör konaklaması sözleşmede tanımlanır ve iş tek seferde bitirilir. Operatörlü modelin kırsaldaki değeri özellikle nettir: sahada 'kim kullanacak' sorunu yoktur, işletmenizin İSG altyapısı inceyse operatörün getirdiği düzen bu açığı kapatır ve yazılı iş kaydı kalır. Sezon öncesi bu tesislerin işlerini bölge turlarıyla birleştiriyoruz — maliyet belirgin düşer.",
            },
            {
                soru: "Hem santralimiz hem paketleme tesisimiz var; tek sözleşme olur mu?",
                cevap:
                    "Olur — iki rejimli tek çerçeve: jeotermal işler santral izin sistemi ve bakım pencerelerine, gıda işleri hijyen setine ve sezon dışı takvime bağlanır; operatör ataması her sahanın dosya gereksinimine göre yapılır (gerekirse iki farklı operatör profili). Yıllık çerçeve sözleşmede iki sahanın takvimi birlikte kurulur ve makine-operatör planı mevsim ritmine oturur. Muhasebe tarafında tek sözleşme-tek muhatap kolaylığı, saha tarafında rejim ayrımı disiplini korunur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Jeotermal H2S/sıcak hat riskleri ve gıda ihracat denetim çerçevesi sektör bilgisidir; kampanya dönemi güvenlik yaklaşımı firma pratiğidir.",
    },
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli Örümcek Platform Kiralama: Rafineri Boru Hattı ve Tank Üstü ATEX Erişimi",
        giris:
            "Rafineri proses ünitelerinde ve liman tank çiftliklerinde klasik makaslı ya da eklemli platformun giremediği aralıklar vardır: boru rafları arasındaki dar koridor, tank kabuğuyla çevre duvarı arasındaki sınırlı şerit, pompa istasyonunun etrafını saran ekipman yığını. Paletli örümcek platform bu boşluklara girebilecek kadar dar şaseye sahiptir; ayaklarını farklı zeminlere ayrı ayrı basarak eğimli veya kademeli yüzeylerde de dengesini korur. Biz bu makineyi yalnız ölçü uyumu için değil, ATEX bölge sınıflandırmasına uygun elektrik ve mekanik donanımla birlikte sunarız — proses ünitesinin Zon 1 ya da Zon 2 olarak tanımlanan kısmına girecek her makine, o bölgenin patlayıcı ortam riskine göre seçilmiş olmalıdır. Sevkiyat öncesi hangi ünitede, hangi zon sınıfında ve hangi erişim koridorunda çalışılacağı tesisin izin biriminden netleştirilir; makine seçimi bu bilgiye göre yapılır, tersi değil. Aliağa hattındaki rafineri ve liman sahalarında bu yaklaşım, hem işin fiziksel olarak mümkün olmasını hem de patlayıcı ortam kuralının ihlal edilmemesini aynı anda sağlar.",
        maddeler: [
            { baslik: "Boru rafları arasında şase genişliği", metin: "Proses ünitelerindeki boru rafları genellikle sabit aralıklarla dizilir ve bu aralık standart bir platformun geçişine izin vermeyebilir. Örümcek platformun paletli ayakları katlanabilir yapıdadır; dar geçişte ayaklar daraltılıp geçildikten sonra çalışma noktasında yeniden açılarak stabilite kazanılır. Keşif aşamasında geçilecek en dar noktanın ölçüsü alınır, makinenin daraltılmış ve açılmış hâldeki genişlikleri bu ölçüyle karşılaştırılır. Geçiş mümkün görünmüyorsa alternatif güzergâh veya farklı makine sınıfı önerilir; ölçü tutmayan bir geçişten zorla geçmeye çalışmak boru hattına temas riski doğurur." },
            { baslik: "ATEX bölge sınıfına göre donanım seçimi", metin: "Tesisin proses güvenlik dokümanında her alan bir zon sınıfıyla tanımlanır; bu sınıf, o bölgede hangi elektrik ve mekanik ekipmanın kullanılabileceğini belirler. Zon 2 sayılan bir açık saha ile Zon 1 sayılan bir pompa istasyonu çevresi aynı makineyle çalışılamaz. Talep alındığında tesisten zon bilgisini yazılı isteriz; bu bilgi olmadan sevkiyat planlanmaz. Makinenin ATEX uygunluk belgesi ve zon karşılığı iş emrine eklenir, sahaya girmeden önce tesisin elektrik güvenlik sorumlusuyla teyit edilir." },
            { baslik: "Tank çatısı ve nozul erişiminde ankraj", metin: "Tank çatısına veya yan kabuğundaki nozul, mahfaza ve merdiven bağlantı noktalarına erişimde zemin çoğu zaman eğimli sactır; standart tekerlekli platform bu yüzeyde güvenli duramaz. Örümcek platformun ayrı ayarlanabilen ayakları, eğimli veya kademeli yüzeyde her ayağı farklı yükseklikte sabitleyerek gövdeyi yatay tutar. Kurulumdan önce tank çatısının taşıma kapasitesi ve mevcut açıklıkların konumu tesis mühendislik biriminden teyit edilir; bu teyit olmadan makine tank üstüne çıkarılmaz." },
            { baslik: "Kıvılcım ve statik elektrik önlemleri", metin: "Yanıcı buhar bulunabilecek bir alanda hareket eden her ekipman statik yük biriktirebilir. Makinenin topraklama hattı kurulum öncesi kontrol edilir, palet ve şase üzerinde kıvılcım çıkarabilecek serbest metal temas noktası olmadığından emin olunur. Operatör, çalışma alanına girmeden önce gaz ölçüm sonucunu tesisin izin biriminden sorar; ölçüm onaylanmadan makine hareket ettirilmez. Bu adım proses güvenlik kuralının bir parçasıdır, makinenin teknik özelliğinden bağımsız olarak her seferinde tekrarlanır." },
            { baslik: "Vinç ve boru hattı işleriyle eşzamanlı koordinasyon", metin: "Proses durdurma dönemlerinde aynı bölgede vinç kaldırması, boru hattı izolasyonu ve yalıtım söküm işleri aynı anda sürebilir. Örümcek platformun çalışma alanı bu işlerin güzergâhıyla çakışıyorsa saha koordinatörü hareket saatlerini ayırır; vinç yükü askıdayken platform o hat üzerinde çalışmaz. Günlük saha toplantısında hangi ekibin hangi saatte hangi koridoru kullanacağı yazılır, operatörümüz bu programın dışına kendi kararıyla çıkmaz." },
        ],
        ekBolumler: [
            { baslik: "Rafineri erişiminde platform sınıfı karşılaştırması", paragraflar: ["Aşağıdaki tablo, proses ünitesi içindeki tipik erişim sorunlarında hangi platform sınıfının daha uygun olduğunu özetler. Kesin seçim her zaman sahanın zon sınıfı ve geçiş ölçüsüyle birlikte yapılır."], tablo: { basliklar: ["Erişim durumu", "Örümcek platform", "Standart makaslı", "Eklemli boom"], satirlar: [["Dar boru rafı arası", "Uygun — daraltılabilir ayak", "Genelde uygun değil", "Şase genişse sınırlı"], ["Eğimli tank çatısı", "Uygun — bağımsız ayak ayarı", "Uygun değil", "Sepetle yandan yaklaşım mümkün"], ["Düz beton saha, uzun mesafe", "Yavaş, amaca uygun değil", "Uygun ve hızlı", "Uygun"], ["Zon 1 alan", "Yalnız ATEX sertifikalı model", "Nadiren ATEX modeli bulunur", "Model bazında değişir"]] } },
            { baslik: "Proses ünitesine giriş öncesi hazırlık", paragraflar: ["Proses ünitesine her giriş, tesisin kendi iş izni sistemine bağlıdır. Makinenin ATEX belgesi, periyodik kontrol kaydı ve operatörün proses sahası oryantasyonu giriş başvurusuna eklenir. Gaz ölçüm sonucu, izolasyon durumu ve komşu iş çakışması izin formunda ayrı ayrı görülür; bu bilgi olmadan platform proses sınırına sokulmaz.", "Sahaya girmeden önce keşif fotoğrafları üzerinden geçiş güzergâhı işaretlenir, boru rafı altında bırakılmış geçici ekipman varsa tesis bunu kaldırana kadar çalışma başlamaz. Bu hazırlık, saha içinde makinenin duraksayıp geri dönmesini ve zaman kaybını önler."] },
            { baslik: "İş sonrası proses alanından çıkış kontrolü", paragraflar: ["Çalışma bittiğinde makine proses sınırından çıkmadan önce üzerinde yağ sızıntısı, gevşek bağlantı veya yabancı cisim olmadığı kontrol edilir; bu kontrol tesisin yabancı madde ve temizlik prosedürünün bir parçasıdır. Palet izleri veya bırakılan malzeme varsa alan teslim edilmeden temizlenir.", "İş izni sahanın yetkilisiyle kapatılır, gaz ölçüm ve izolasyon durumu tekrar teyit edilmeden çıkış onayı verilmez. Aynı ünitede tekrar eden bakım turlarında bu çıkış kaydı, bir sonraki girişin hazırlık verisi olarak saklanır."] },
        ],
        sss: [
            { soru: "Örümcek platform ATEX sertifikalı mı geliyor?", cevap: "Filoda ATEX uygunluğu belgeli modeller bulunur; hangi modelin geleceği tesisin bildirdiği zon sınıfına göre belirlenir. Sertifika, platformun elektrik ve mekanik aksamının patlayıcı ortamda güvenli sayıldığını gösteren belgedir ve iş emrine eklenir. Zon bilgisi paylaşılmadan sevkiyat planlanmaz, çünkü yanlış sınıf makine göndermek hem güvenlik hem tesis kabul süreci açısından kabul edilmez." },
            { soru: "Boru rafları arasındaki dar koridordan geçebilir mi?", cevap: "Bu, koridorun gerçek ölçüsüne ve makinenin daraltılmış şase genişliğine bağlıdır. Keşif aşamasında en dar noktanın ölçüsü istenir; bu ölçü makinenin teknik verisiyle karşılaştırılır. Geçiş mümkünse güzergâh planına işlenir, mümkün değilse alternatif erişim noktası veya farklı makine sınıfı önerilir. Ölçü paylaşılmadan sadece görsel tahminle geçiş garantisi verilmez." },
            { soru: "Tank çatısına çıkarken makinenin ağırlığı sorun olur mu?", cevap: "Olabilir; bu nedenle tank çatısının taşıma kapasitesi tesis mühendislik biriminden önceden teyit edilir. Makinenin ayak izi ve toplam ağırlığı bu teyitle karşılaştırılır, gerekirse yük dağıtım plakası kullanılır. Kapasite bilgisi paylaşılmadan veya belirsizken makine tank üstüne çıkarılmaz; bu karar sahada operatörün inisiyatifine bırakılmaz." },
            { soru: "Kıvılcım riskine karşı hangi önlemler alınıyor?", cevap: "Kurulum öncesi topraklama hattı kontrol edilir, şase üzerinde serbest metal temas noktası olmadığından emin olunur ve makine hareket etmeden önce tesisin güncel gaz ölçüm sonucu istenir. Ölçüm sonucu onaylanmadan platform proses alanında hareket ettirilmez. Bu adımlar makinenin teknik özelliğinden bağımsız, her girişte tekrarlanan sabit bir kontrol dizisidir." },
            { soru: "Operatör proses sahası için ayrıca eğitim alıyor mu?", cevap: "Evet, proses ünitesine girecek operatör tesisin oryantasyon ve saha kurallarını görür; bu genellikle genel yüksekte çalışma eğitiminden ayrı bir adımdır. Gaz ölçüm sonucunu okuma, izolasyon durumunu anlama ve acil tahliye güzergâhını bilme bu oryantasyonun parçasıdır. Oryantasyonu tamamlamamış operatör proses sınırına sokulmaz." },
            { soru: "Gece vardiyasında proses ünitesinde çalışılabilir mi?", cevap: "Tesis izin verirse mümkündür; ancak gece koşulunda aydınlatma, gaz ölçüm sıklığı ve acil durum iletişimi ayrıca planlanır. Görünürlüğü düşük bir bölgede boru rafları arasında hareket riski gündüze göre artar, bu nedenle gece çalışması için ek gözcü ve aydınlatma talebi öncelikli değerlendirilir. Karar tek başına makinenin uygunluğuna değil, tesisin gece çalışma prosedürüne bağlıdır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. ATEX bölge sınıflandırması ve proses ünitesi iş izni kavramları sektörde bilinen genel bilgidir; makine seçimi, ankraj ve çıkış kontrolü anlatımı firma saha pratiğidir. Tesis adı veya doğrulanmamış rakam kullanılmamıştır.",
    },
    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Rafineri ve Liman Girişine Manlift Teslimatı: Kontrol Noktası Prosedürlü Sevkiyat",
        giris:
            "Bir manliftin fabrika sahasına ulaşması ile rafineri veya liman kapısından geçmesi aynı işlem değildir. Sanayi bölgesinde araç genellikle güvenlik kaydıyla girer; rafineri ve liman sahalarında ise araç plakası, sürücü kimliği, taşınan ekipmanın seri numarası ve girişin amacı önceden bildirilmiş olmalı, kapıdaki görevli bu bilgiyi sistemde bulmalıdır. Biz teslimat planını kapı prosedürüne göre kurarız: sevkiyat tarihinden önce araç ve sürücü bilgisi tesisin güvenlik birimine iletilir, makinenin periyodik kontrol raporu ve varsa ATEX uygunluk belgesi dosyaya eklenir, giriş saatiyle çalışma izninin başlangıç saati eşleştirilir. Liman sahalarında buna ayrıca gümrüklü alan veya serbest bölge geçiş kuralı eklenebilir; araç gümrük hattından geçecekse bu süreç ayrı bir zaman bloğu olarak plana yazılır. Amaç aracın kapıda beklememesi değil, beklerse bile bu bekleme süresinin bilinen ve planlanmış olmasıdır — rafineri kapısında önceden bildirilmemiş bir aracın geri çevrilmesi, iş programının tamamını geciktiren bir sonuç doğurur.",
        maddeler: [
            { baslik: "Kapı bildirimini sevkiyattan önce tamamlamak", metin: "Rafineri ve liman güvenlik birimleri genellikle araç ve sürücü bilgisinin belli bir süre önceden bildirilmesini ister. Sevkiyat tarihi netleşir netleşmez plaka, sürücü kimlik bilgisi, taşınan makinenin seri numarası ve girişin amacı tesise iletilir. Bu bildirim tek seferlik bir e-posta değil, tesisin istediği formatta doldurulmuş bir kayıttır; format uyuşmazsa başvuru işleme alınmayabilir. Bildirim onayı görülmeden araç yola çıkarılmaz, çünkü onaysız aracın kapıda bekleyip geri dönmesi hem maliyetli hem programı bozan bir sonuçtur." },
            { baslik: "Gümrük ve serbest bölge geçişini ayrı planlamak", metin: "Liman ve serbest bölge sahalarına giriş bazen gümrüklü alan sınırından geçişi gerektirir; bu durumda ayrı bir belge seti ve bazen ayrı bir kapı söz konusu olabilir. Bu geçiş normal fabrika girişinden farklı süre alabileceği için sevkiyat programına ayrı bir zaman bloğu olarak eklenir. Gümrük sürecinin kimin sorumluluğunda olduğu iş emrinde açıkça yazılır; belirsiz bırakılan bir sorumluluk sahada aracın saatlerce beklemesine yol açabilir." },
            { baslik: "Makine belgesini seri numarasıyla eşlemek", metin: "Tesise giren her makinenin periyodik kontrol raporu, taşınan ekipmanın seri numarasıyla birebir eşleşmelidir. Son anda filo içinde makine değişikliği olursa güncel raporun yeni seri numarasıyla yeniden gönderilmesi gerekir; eski raporla yeni makineyi sokmaya çalışmak kapıda reddedilir. Bu eşleştirmeyi sevkiyat öncesi son kez kontrol ederiz, böylece kapıda evrak-makine uyuşmazlığı yaşanmaz." },
            { baslik: "İndirme noktasını iç trafikle çakıştırmamak", metin: "Rafineri ve liman sahalarında iç yollar forklift, tanker ve vardiya değişimi trafiğiyle yoğun olabilir. İndirme noktası ve saati, tesisin trafik yoğunluğunun düşük olduğu bir aralığa göre belirlenir; bu bilgi tesisin lojistik sorumlusuyla önceden teyit edilir. Rampanın veya iç yolun geçici olarak kapatılması gerekiyorsa bu talep sevkiyat saatinden önce iletilir, sahada doğaçlama indirme yapılmaz." },
            { baslik: "Teslim tesliminden sonra makinenin çalışma noktasına yönlendirilmesi", metin: "Kapıdan giren makine doğrudan çalışma noktasına gitmeyebilir; iç saha rehberliği veya refakatçi aracı gerekebilir. Bu ihtiyaç önceden tesisle netleştirilir; aksi hâlde sürücü sahada yönünü bulamayıp yanlış bölgeye girme riskiyle karşılaşır. Çalışma noktasına ulaşıldığında makinenin park ve kurulum alanı, iş izninde tanımlanan sınırın içinde kalır." },
        ],
        ekBolumler: [
            { baslik: "Sevkiyat aşamalarının kapı gereksinimiyle eşleşmesi", paragraflar: ["Tablo, rafineri veya liman girişine yapılan bir teslimatın hangi aşamasında hangi belgenin hazır olması gerektiğini gösterir. Tesisin kendi kapı prosedürü her zaman önceliklidir."], tablo: { basliklar: ["Aşama", "Gerekli bilgi", "Sorumlu", "Zamanlama"], satirlar: [["Bildirim", "Plaka, sürücü, seri numarası", "Sevkiyat planlama", "Sevkiyattan günler önce"], ["Belge", "Kontrol raporu, ATEX belgesi", "Filo kayıt", "Bildirimle birlikte"], ["Gümrük/serbest bölge", "Geçiş izni, ilgili form", "İlgili birim", "Ayrı zaman bloğu"], ["Giriş", "Onaylı kayıt, kimlik kontrolü", "Kapı güvenliği", "Sevkiyat günü"], ["İndirme", "Trafikle çakışmayan saat", "Lojistik sorumlusu", "Belirlenen pencere"]] } },
            { baslik: "Bildirim reddedildiğinde izlenen yol", paragraflar: ["Kapı bildirimi bazen eksik bilgi, süresi geçmiş belge veya tesisin son anda değişen kuralı nedeniyle reddedilebilir. Bu durumda araç yola çıkmadan önce eksik netleştirilir; sevkiyat saati eksik tamamlanana kadar ertelenir. Aracı yola çıkarıp kapıda çözüm aramak, hem sürücü için hem programın geri kalanı için daha büyük bir kayıp doğurur.", "Ret gerekçesi kayıt altına alınır ve bir sonraki sevkiyatta aynı hatanın tekrarlanmaması için kontrol listesine eklenir. Sık çalışılan tesislerde bu liste zamanla kısalır, çünkü tesisin özel istekleri önceden bilinir hâle gelir."] },
            { baslik: "Tekrar eden teslimatlarda süreci kısaltmak", paragraflar: ["Aynı tesise dönemsel bakım için tekrar giriş yapılıyorsa şirket ve sürücü bilgisinin doğrulanmış bir nüshası saklanabilir; her seferinde yalnız güncel tarih, araç ve makine bilgisi yenilenir. Süresi geçmiş kontrol raporu veya değişen sürücü bilgisi eski dosyadan otomatik taşınmaz.", "Bu yaklaşım kapı kuralını atlamaz; tekrar eden idari bilgiyle her sevkiyata özgü güncel veriyi ayırır. Tesisin talep ettiği bildirim süresi kayıtlı tutulduğu için bir sonraki teslimat planlanırken hangi adımın ne zaman başlaması gerektiği baştan bellidir."] },
        ],
        sss: [
            { soru: "Rafineri kapısına giriş için ne kadar önce bildirim yapılmalı?", cevap: "Süre tesisin kendi güvenlik prosedürüne göre değişir; bazı sahalar birkaç gün, bazıları daha uzun bildirim süresi ister. Sevkiyat tarihi netleşir netleşmez tesisin istediği süreyi öğrenir, bildirimi bu takvime göre planlarız. Son dakika bildirimi reddedilme riski taşıdığı için erken planlama tercih ederiz; acil durumlarda tesisle doğrudan görüşerek hızlandırılmış bir yol olup olmadığı sorulur." },
            { soru: "Sürücü değişirse yeniden bildirim gerekir mi?", cevap: "Evet, kapı kaydı genellikle belirli bir sürücü kimliğine bağlı olduğu için değişiklik olursa yeni sürücünün bilgisi tesise yeniden bildirilir. Bildirilmemiş bir sürücüyle kapıya gelmek girişin reddedilmesine yol açabilir. Sürücü değişikliği öngörülüyorsa mümkünse birden fazla aday isim baştan bildirilir; bu, son dakika değişimlerinde kesintiyi önler." },
            { soru: "Liman sahasında gümrük süreci sevkiyatı ne kadar uzatır?", cevap: "Kesin süre sahaya, geçiş yoğunluğuna ve evrakın eksiksiz olup olmadığına göre değişir; bu nedenle sabit bir rakam vermeyiz. Programda bu adım ayrı bir zaman bloğu olarak gösterilir ve mümkün olduğunca erken başlatılır. Evrak eksiksiz ve önceden hazırlanmışsa süreç genellikle öngörülebilir ilerler; eksik belgeyle son anda gelmek gecikmenin en sık nedenidir." },
            { soru: "İndirme noktası tesis içinde değişebilir mi?", cevap: "Evet, özellikle iç trafik yoğunluğu veya devam eden başka bir iş varsa lojistik sorumlusu indirme noktasını değiştirebilir. Bu değişiklik bize mümkün olan en erken saatte bildirilirse sürücü güzergâhını buna göre ayarlar. Kapıda ani değişiklik bildirilirse sürücü sahada tesisin yönlendirmesini bekler, kendi kararıyla alternatif nokta seçmez." },
            { soru: "Makine son anda değişirse belge süreci nasıl işler?", cevap: "Filo içinde uygunluk veya arıza nedeniyle son anda makine değişikliği olursa yeni makinenin kontrol raporu ve varsa ATEX belgesi güncel seri numarasıyla tesise yeniden gönderilir. Bu güncelleme sevkiyat saatinden önce tamamlanmadan araç yola çıkarılmaz. Değişikliğin nedeni ve yeni makinenin bilgisi kayıt altına alınır." },
            { soru: "Kapıda araç geri çevrilirse süreç nasıl toparlanır?", cevap: "Öncelik ret gerekçesini netleştirmektir; eksik belge, süresi geçmiş kayıt veya bildirim uyuşmazlığı olabilir. Eksik tamamlanır tamamlanmaz yeni bir giriş talebi oluşturulur, mümkünse aynı gün içinde. Yaşanan olay kayıt altına alınır ve aynı tesise yapılacak sonraki sevkiyatlarda tekrarlanmaması için kontrol listesine eklenir; bu, tekrar eden işlerde giderek daha az yaşanan bir durumdur." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Rafineri ve liman sahalarında kapı bildirimi, gümrük geçişi ve seri numarası eşleştirmesi gibi uygulamalar sektörde bilinen genel kurallardır; anlatım firma saha pratiğidir. Tesis adı veya süre/kapasite rakamı uydurulmamıştır.",
    },
    "hizmet:forklift-istifleme-kiralama": {
        h1: "Liman Ardiye ve Serbest Bölge İstifleme İçin Forklift Kiralama",
        giris:
            "Liman ardiyelerinde ve serbest bölge depolarında istifleme işi, açık sanayi sahasındaki forklift kullanımından farklı kurallara tabidir. Konteyner sahası çevresinde araç trafiği yoğun ve rota büyük ölçüde sabittir; ardiye içinde ise palet yükseklikleri, koridor genişliği ve yangın güvenlik şeridi genellikle tesisin kendi iç yönetmeliğiyle belirlenir. Biz forklift talebini yalnız kapasite ve direk yüksekliğiyle değil, çalışılacak alanın zemin türü, koridor ölçüsü ve tesisin yük taşıma kuralına göre değerlendiririz. Serbest bölgede ayrıca malzemenin gümrük statüsü, hangi sahaya hangi ekipmanla girilebileceğini de etkileyebilir; bu bilgi netleşmeden makine seçimi kesinleştirilmez. Rafineri ve liman odaklı işleyişimizde forklift hizmeti, tek başına bir kaldırma ekipmanı kiralamak değil, o sahanın yükleme-boşaltma ritmine ve giriş kuralına uyan bir çözüm kurmaktır.",
        maddeler: [
            { baslik: "Koridor genişliğine göre direk ve şase seçimi", metin: "Ardiye içi raf koridorları genellikle sabit bir genişlikte tasarlanır ve bu genişlik forkliftin dönüş yarıçapını doğrudan sınırlar. Geniş şaseli standart bir forklift dar koridorda güvenli manevra yapamayabilir; bu durumda dar koridor tipi veya reach truck sınıfı değerlendirilir. Talep alındığında koridor ölçüsü ve raf yüksekliği istenir, bu ölçüye göre direk tipi ve şase genişliği eşleştirilir. Ölçü paylaşılmadan sadece tonaj bilgisine göre makine önerilmez." },
            { baslik: "Zemin ve yük taşıma kapasitesi uyumu", metin: "Ardiye zemini genellikle sağlam beton olsa da açık istifleme alanlarında parke taş, stabilize zemin veya geçici dolgu bulunabilir. Ağır yüklü forkliftin tekerlek altındaki nokta yükü, zeminin taşıma kapasitesini aşarsa çökme riski doğar. Açık alanda çalışılacaksa zeminin türü ve son durumu keşifte sorulur; belirsizlik varsa daha geniş lastikli veya daha hafif sınıf makine önerilir." },
            { baslik: "Gümrüklü alan ve serbest bölge giriş kuralı", metin: "Serbest bölgede bazı sahalara yalnız belirli izinlere sahip ekipman ve personel girebilir; malzemenin gümrük statüsü değişiyorsa forkliftin de aynı alan içinde mi yoksa alan dışına taşıma yaparak mı çalışacağı netleşmelidir. Bu ayrım baştan yapılmazsa makine yanlış sahada bekletilebilir veya iş durabilir. Talep formunda çalışma alanının gümrüklü olup olmadığını sorarız, cevaba göre sevkiyat ve giriş belgesi hazırlanır." },
            { baslik: "Yangın koridoru ve istif yüksekliği sınırı", metin: "Ardiyelerde yangın güvenlik şeridi ve maksimum istif yüksekliği genellikle tesisin kendi yangın güvenlik prosedürüyle belirlenir. Forklift operatörü bu şeridi kapatacak şekilde palet bırakmaz, tesisin belirlediği azami yükseklik sınırını aşmaz. Sınır bilgisi talep aşamasında tesisten istenir; belirsizse iş başlamadan tesis yetkilisiyle teyit edilir." },
            { baslik: "Vardiyalı yükleme-boşaltma temposuna uyum", metin: "Liman ve serbest bölge ardiyelerinde yükleme-boşaltma trafiği genellikle gemi veya araç programına bağlı olarak dalgalanır. Forklift operatörü bu programa göre çalışma saatini planlar; yoğun yükleme penceresinde başka bir iş için makineyi meşgul etmeyiz. Operatörlü kiralamada vardiya planı tesisin lojistik programıyla önceden eşleştirilir." },
        ],
        ekBolumler: [
            { baslik: "Ardiye koşuluna göre forklift sınıfı", paragraflar: ["Tablo, liman ve serbest bölge ardiyelerinde sık görülen koşullarda hangi forklift sınıfının daha uygun olduğunu özetler. Kesin seçim koridor ölçüsü ve zemin bilgisiyle birlikte yapılır."], tablo: { basliklar: ["Çalışma koşulu", "Uygun sınıf", "Dikkat noktası", "Alternatif"], satirlar: [["Dar raf koridoru", "Dar koridor / reach truck", "Dönüş yarıçapı", "Elektrikli dar şase"], ["Açık istif alanı, düz beton", "Standart dizel/LPG", "Tonaj-direk yüksekliği uyumu", "Daha büyük tekerlekli model"], ["Geçici dolgu zemin", "Hafif sınıf, geniş lastik", "Nokta yükü", "Zemin iyileştirmesi sonrası standart"], ["Kapalı, havalandırması sınırlı alan", "Elektrikli", "Emisyon yasağı", "Yok — elektrikli zorunlu"]] } },
            { baslik: "Talep formunda istediğimiz saha bilgisi", paragraflar: ["Doğru makineyi ilk seferde göndermek için koridor genişliği, raf yüksekliği, zeminin türü, çalışma alanının gümrüklü olup olmadığı ve yükleme-boşaltma programının yoğun olduğu saatler sorulur. Bu bilgi eksik geldiğinde makine sahada uygun çalışamayabilir ve değişim zaman kaybına yol açar.", "Fotoğraf veya kısa video ile paylaşılan saha görüntüsü, telefonla anlatılan tariften daha güvenilir bir referans sağlar. Belirsiz kalan noktalar için yerinde keşif önerilir, özellikle geniş ardiyelerde farklı koridorların farklı ölçülerde olabileceği unutulmamalıdır."] },
            { baslik: "Operatörlü kullanımda devir ve kontrol düzeni", paragraflar: ["Operatörlü forklift kiralamasında her vardiya başında makinenin günlük kontrolü yapılır, hasar veya uyarı varsa forma yazılır. Anahtar yalnız görevlendirilen operatöre teslim edilir; vardiya değişiminde yeni operatör makineyi kontrol formuyla teslim alır.", "Ardiyede birden fazla forklift aynı anda çalışıyorsa güzergâh çakışmasını önlemek için saha sorumlusu koridor kullanım sırasını belirler. Bu düzen, yoğun yükleme-boşaltma saatlerinde çarpışma riskini azaltan temel önlemdir."] },
        ],
        sss: [
            { soru: "Serbest bölge ardiyesine forklift sokmak için ayrı izin gerekir mi?", cevap: "Genellikle evet; serbest bölge içi hareket, tesisin ve bölge yönetiminin kendi giriş kuralına tabidir. Makine ve operatör bilgisi önceden bildirilir, malzemenin gümrük statüsüne göre çalışma alanının sınırı netleştirilir. Bu bilgi paylaşılmadan sevkiyat kesinleştirilmez; aksi hâlde makine sahaya girip yanlış alanda bekletilebilir." },
            { soru: "Dar koridorlu yüksek raflı depoda hangi forklift önerilirsiniz?", cevap: "Koridor genişliği ve raf yüksekliği bilgisiyle karar veririz; genellikle dar koridor tipi veya reach truck sınıfı bu tür depolarda daha güvenli manevra sağlar. Standart geniş şaseli model dar koridorda dönemeyebilir. Ölçü paylaşılmadan tek bir model önerisi vermeyiz, çünkü depo tasarımları birbirinden belirgin farklılık gösterebilir." },
            { soru: "Açık istif alanında zemin dolgu ise forklift çalışabilir mi?", cevap: "Zeminin sıkışma durumu ve taşıma kapasitesi bilinmeden kesin cevap veremeyiz. Belirsiz dolgu zeminde daha hafif sınıf ve geniş lastikli makine tercih edilir, gerekirse zemin iyileştirmesi önerilir. Zemin bilgisi paylaşılmadan ağır tonajlı makineyle çalışma başlatılmaz; bu, çökme riskine karşı aldığımız temel önlemdir." },
            { soru: "Yükleme-boşaltma yoğun saatte ek forklift istenebilir mi?", cevap: "Talep önceden bildirilirse değerlendirilebilir; gemi veya araç programı belliyse yoğun pencereye göre ikinci makine ve operatör planlanabilir. Aynı gün son dakika talepte makine ve uygun operatör bulunabilirse karşılanır, ancak garanti verilmez. Yoğunluk tahmin edilebiliyorsa erken planlama gecikmeyi önler." },
            { soru: "Elektrikli forklift kapalı ardiyede zorunlu mu?", cevap: "Kapalı ve havalandırması sınırlı alanlarda egzoz emisyonu birikebileceği için elektrikli model tercih edilir; bazı tesisler bunu kendi kuralıyla zorunlu tutar. Açık istif alanında zemin ve mesafeye göre dizel veya LPG model de değerlendirilebilir. Tesisin kendi emisyon veya güvenlik kuralı varsa bu kural bizim önerimizin önüne geçer." },
            { soru: "Operatörsüz forklift kiralamak mümkün mü?", cevap: "Kullanacak kişinin geçerli operatör belgesi ve tesis giriş kabulü varsa değerlendirilebilir. Teslim öncesi makineye özgü kumanda eğitimi tutanakla yapılır, belge kaydı tarafımızda tutulur. Vardiyalı kullanımda her vardiyanın kendi yetkili operatörü olmalıdır; tek belgeyle birden fazla kişinin kullanması kabul edilmez." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Liman ardiyesi ve serbest bölge işleyişine dair genel kurallar (gümrük statüsü, giriş izni) kamuya açık bilgidir; makine seçim mantığı ve saha değerlendirmesi firma pratiğidir. Tesis adı veya doğrulanmamış kapasite verilmemiştir.",
    },
    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) Kiralama: Rafineri Boru Hattı ve Tank Çiftliği Engel Aşma",
        giris:
            "Rafineri ve liman sahalarında hedef noktaya dümdüz yükselmek çoğu zaman mümkün değildir; boru hattı, kablo tavası, destek konstrüksiyonu veya bir tank gövdesi araya girer. Eklemli platformun kolları hem yükselir hem yatay uzanır, bu sayede sepet engelin üzerinden veya yanından dolaşarak hedefe ulaşabilir. Biz bu makineyi rafineri ve liman sahasındaki tipik engel senaryolarına göre seçeriz: boru hattı üstünden geçiş için menzil ve erişim açısı, tank çiftliği aralarında dönüş için şase genişliği, kablo tavası altına eğik yaklaşım için sepet açı kapasitesi ayrı ayrı değerlendirilir. Zon sınıflandırması yapılmış alanlarda ATEX uygun model şart koşulur; proses ünitesi dışındaki açık liman sahalarında ise daha çok menzil ve rüzgâr sınırı ön plana çıkar. Doğru eklemli platform seçimi, önce keşifte engelin geometrisini doğru okumakla başlar.",
        maddeler: [
            { baslik: "Boru hattı üstünden yatay erişim planlaması", metin: "Bir boru hattının üstündeki bir noktaya erişmek gerektiğinde makine hattın hemen yanına konumlanır, kol yükselip yatay uzanarak sepeti hattın üzerinden hedefe taşır. Bu sırada sepetin boru hattına veya izolasyon malzemesine temas etmemesi için mesafe payı bırakılır. Keşifte hattın yüksekliği, çapı ve izolasyon durumu not edilir; bu bilgi makinenin menzil ve açı kapasitesiyle karşılaştırılır." },
            { baslik: "Tank çiftliği aralarında dönüş ve konumlanma", metin: "Bitişik tanklar arasındaki servis yolu genellikle dar ve sabit genişliktedir. Eklemli platformun şasesi bu yolda manevra yapabilecek genişlikte olmalı, dönüş noktaları önceden belirlenmelidir. Tank duvarına çok yakın konumlanma, kolun açılma yarıçapını kısıtlayabileceği için hedefe göre en uygun duruş noktası keşifte işaretlenir." },
            { baslik: "Kablo tavası ve destek konstrüksiyonu altına eğik yaklaşım", metin: "Kablo tavası veya çelik destek altındaki bir noktaya doğrudan üstten değil, yandan eğik açıyla yaklaşmak gerekebilir. Eklemli platformun sepeti bu açıyı sağlayacak şekilde döndürülüp eğilebilir; ancak bu manevra sırasında üstteki yapıya olan mesafe sürekli izlenmelidir. Operatör bu tip yaklaşımlarda ikinci bir gözcünün mesafe teyidine ihtiyaç duyabilir." },
            { baslik: "ATEX bölgesinde model kısıtı", metin: "Proses ünitesi içinde zon sınıflandırması yapılmışsa yalnız o sınıfa uygun sertifikalı eklemli platform kullanılır. Bu kısıt makinenin menzil veya kapasite tercihinin önüne geçer; zon uygunluğu olmayan bir model, teknik olarak işe yetse bile proses alanına sokulmaz. Zon bilgisi netleşmeden makine ataması kesinleştirilmez." },
            { baslik: "Açık liman sahasında rüzgâr ve menzil sınırı", metin: "Liman rıhtımı veya açık depolama sahasında yükseklik arttıkça rüzgâr etkisi de artar; üreticinin belirlediği azami rüzgâr hızı aşıldığında sepet kaldırılmaz. Rüzgârlı günlerde iş programı esnek tutulur, gerekirse çalışma saat kaydırılır. Menzil hesaplanırken üreticinin yük-menzil tablosu esas alınır, sepetteki kişi ve ekipman ağırlığı bu tabloyla karşılaştırılır." },
        ],
        ekBolumler: [
            { baslik: "Engel tipine göre eklemli platform seçimi", paragraflar: ["Tablo, rafineri ve liman sahasında sık karşılaşılan engel tiplerinde hangi özelliğin öncelikli değerlendirildiğini gösterir. Kesin model seçimi keşif ölçüleriyle birlikte yapılır."], tablo: { basliklar: ["Engel tipi", "Öncelikli özellik", "Dikkat noktası", "Tipik yaklaşım"], satirlar: [["Boru hattı üstü", "Yatay menzil", "İzolasyon malzemesine temas", "Yandan konumlanıp üstten geçiş"], ["Tank çiftliği arası", "Şase genişliği, dönüş yarıçapı", "Tank duvarına mesafe", "Servis yolunda ilerleyip konumlanma"], ["Kablo tavası altı", "Sepet açı kapasitesi", "Üst yapıya mesafe", "Eğik açıyla yandan yaklaşım"], ["Açık rıhtım, yüksek nokta", "Rüzgâr sınırı, menzil", "Üretici yük-menzil tablosu", "Rüzgâr durumuna göre programlama"]] } },
            { baslik: "Keşifte engel geometrisini belgelemek", paragraflar: ["Telefonla yalnız yükseklik bildirmek eklemli platform seçiminde yetersizdir; engelin konumu, yatay mesafesi ve hedefe olan açısı da gereklidir. Mümkünse ölçülü fotoğraf veya kısa video istenir, birden fazla açıdan çekim engelin gerçek geometrisini daha net gösterir.", "Bu bilgi makine seçimini yapan ekip ile operatör arasında ortak referans olur; sahada farklı varsayımlarla hareket edilmesi önlenir. Belirsizlik yüksekse yerinde keşif önerilir, özellikle proses ünitesi gibi erişimi kısıtlı sahalarda."] },
            { baslik: "Sepet hareketinde ikinci gözcü kullanımı", paragraflar: ["Engelin arkasında veya sepet operatörün doğrudan görüş açısında olmadığı durumlarda yerde bir gözcü mesafe teyidi yapar. Gözcü ile operatör arasında önceden belirlenmiş el işareti veya telsiz protokolü kullanılır; belirsiz sözlü yönlendirme kabul edilmez.", "Bu uygulama özellikle boru hattı üstü geçiş ve kablo tavası altı yaklaşım gibi mesafe payının dar olduğu işlerde standart olarak uygulanır."] },
        ],
        sss: [
            { soru: "Eklemli platform boru hattının üstünden güvenle geçebilir mi?", cevap: "Hattın yüksekliği, çapı ve izolasyon durumu bilinirse menzil ve açı hesaplanarak güvenli bir geçiş planı kurulabilir. Sepetle hat arasında her zaman mesafe payı bırakılır, doğrudan temas riski taşıyan bir manevra yapılmaz. Bu bilgi keşifte netleşmeden geçiş planı kesinleştirilmez." },
            { soru: "Tank çiftliği arasındaki dar servis yolunda hangi makine önerilirsiniz?", cevap: "Yolun genişliği ve dönüş noktalarına göre değişir; genellikle daha dar şaseli eklemli model tercih edilir. Servis yolunun ölçüsü keşifte alınır, makinenin açılmış ve kapalı hâldeki genişlikleriyle karşılaştırılır. Ölçü paylaşılmadan kesin model önerisi verilmez." },
            { soru: "ATEX bölgesinde her eklemli platform çalışabilir mi?", cevap: "Hayır. Zon sınıflandırması yapılmış bir alanda yalnız o sınıfa uygun sertifikalı model kullanılır. Zon bilgisi tesisten yazılı istenir, bu bilgi olmadan makine ataması yapılmaz. Sertifikasız bir model teknik olarak işe yetse bile proses alanına sokulmaz." },
            { soru: "Rüzgârlı günde açık limanda çalışmaya devam edilir mi?", cevap: "Üreticinin belirlediği azami rüzgâr hızı aşılıyorsa sepet kaldırılmaz; bu karar operatörün kişisel değerlendirmesine değil ölçülen veya bildirilen rüzgâr hızına dayanır. Rüzgârlı dönemlerde iş programı esnek tutulur, mümkünse çalışma daha sakin saatlere kaydırılır." },
            { soru: "Kablo tavası altına eğik yaklaşırken ek önlem alınıyor mu?", cevap: "Evet, bu tip yaklaşımlarda yerde bir gözcü mesafe teyidi yapar ve operatörle önceden belirlenmiş işaretlerle iletişim kurar. Sepetin üst yapıya olan mesafesi sürekli izlenir, belirsizlik varsa hareket durdurulup mesafe yeniden ölçülür." },
            { soru: "Menzil hesaplaması sepetteki malzeme ağırlığını da kapsıyor mu?", cevap: "Evet, üreticinin yük-menzil tablosu sepetteki kişi sayısı ve taşınan malzeme ağırlığını birlikte değerlendirir. Menzil arttıkça taşınabilir yük genellikle azalır; bu nedenle sepete konacak malzeme önceden bildirilir ve tabloyla karşılaştırılır. Tabloyu aşan bir yükleme yapılmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Rafineri boru hattı, tank çiftliği ve ATEX bölge kavramları sektörde bilinen genel bilgidir; makine seçim mantığı ve gözcü uygulaması firma saha pratiğidir. Tesis adı veya doğrulanmamış rakam kullanılmamıştır.",
    },
    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Serbest Bölge Depo Tesisatı İçin İç Mekan Platform Kiralama",
        giris:
            "Serbest bölgedeki depo yapılarında tesisat işleri genellikle işletme sürerken, dar zaman pencerelerinde yapılır: sprinkler hattı bakımı, aydınlatma değişimi, HVAC kanal montajı veya raf üstü kablo çekimi gibi işler malzeme akışını durdurmadan tamamlanmalıdır. Biz bu tür işler için akülü, iz bırakmayan lastikli iç mekan platformlarını tercih ederiz; kapalı alanda egzoz emisyonu kabul edilemeyeceği için dizel model kullanılmaz. Serbest bölge deposuna girişte malzemenin gümrük statüsü, tesisin kendi yüklenici kabul kuralı ve raf düzeninin koridor genişliği ayrı ayrı değerlendirilir. Hedefimiz depo operasyonunu durdurmadan, raf trafiğiyle çakışmayan bir çalışma penceresi kurmak ve bu pencereyi aşmadan işi tamamlamaktır — serbest bölgede zaman kaybı yalnız bizim değil, depo sahibinin operasyonel maliyetini de doğrudan etkiler.",
        maddeler: [
            { baslik: "Egzoz emisyonu nedeniyle akülü makine zorunluluğu", metin: "Kapalı depo hacminde dizel veya LPG motorlu makine kullanmak havalandırma yetersizse sağlık riski doğurur; bu nedenle iç mekan işlerinde akülü platform standarttır. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası önceden planlanır; şarj sırasında makine yaya veya forklift yoluna bırakılmaz." },
            { baslik: "Raf koridorunda iz bırakmayan lastik", metin: "Depo zeminleri genellikle epoksi kaplı veya perdahlı betondur; standart siyah lastik bu yüzeyde iz bırakabilir. İz bırakmayan beyaz dolgu lastikli modeller tercih edilir, özellikle depo sahibinin zemin temizlik standardı katıysa bu tercih zorunlu hâle gelir. Talep formunda zemin türü sorulur, cevaba göre lastik tipi belirlenir." },
            { baslik: "Raf trafiğiyle çakışmayan çalışma penceresi", metin: "Depo içi forklift ve el paleti trafiği belirli saatlerde yoğunlaşabilir. Platform çalışması bu yoğunluğun düşük olduğu bir pencereye planlanır; koridor geçici olarak kapatılacaksa bu, depo sorumlusuna önceden bildirilir ve alternatif rota gösterilir. Sepet raf koridorunda dururken forklift geçişi engellendiği için bu koordinasyon atlanmaz." },
            { baslik: "Gümrüklü alan sınırına dikkat", metin: "Serbest bölge deposunun bir kısmı gümrüklü statüde, bir kısmı serbest dolaşımda olabilir. Platform ve operatörün hangi alan sınırı içinde çalışacağı önceden netleştirilir; gümrüklü alana giriş ayrı bir izin gerektirebilir. Bu ayrım yapılmadan sevkiyat planı kesinleştirilmez." },
            { baslik: "Sprinkler ve yangın algılama sistemine mesafe", metin: "Tavan altı işlerde sepet veya taşınan malzeme sprinkler başlığına ya da duman dedektörüne temas etmemelidir; bu ekipmana yanlışlıkla dokunmak yangın sistemini devre dışı bırakabilir. Çalışma öncesi bu noktaların konumu işaretlenir, gerekirse tesisin yangın güvenlik sorumlusuna bilgi verilir." },
        ],
        ekBolumler: [
            { baslik: "Depo tesisatı işlerinde platform seçim tablosu", paragraflar: ["Tablo, serbest bölge deposunda sık görülen tesisat işlerinde tipik çalışma yüksekliği ve öncelikli özelliği gösterir."], tablo: { basliklar: ["İş tipi", "Tipik yükseklik", "Öncelikli özellik", "Uygun sınıf"], satirlar: [["Sprinkler hattı bakımı", "6 – 10 m", "Dar koridor manevrası", "Akülü dar şase makaslı"], ["Aydınlatma değişimi", "8 – 12 m", "Hızlı konumlanma", "Akülü makaslı"], ["HVAC kanal montajı", "6 – 9 m", "Yatay uzanma", "Akülü eklemli"], ["Raf üstü kablo çekimi", "8 – 12 m", "İz bırakmama", "Beyaz lastikli akülü makaslı"]] } },
            { baslik: "Depo sorumlusuyla önceden koordinasyon", paragraflar: ["İş tarihinden önce depo sorumlusuyla hangi koridorun ne zaman kapatılacağı, forklift trafiğinin nasıl yönlendirileceği ve gümrüklü alan sınırının nerede olduğu netleştirilir. Bu görüşme yazılı bir plana dönüştürülür ve iş günü operatöre iletilir.", "Depo sürekli çalışıyorsa iş, malzeme akışının en düşük olduğu saat aralığına planlanır; bu aralık genellikle depo sorumlusunun kendi operasyon verisinden bilinir."] },
            { baslik: "İş sonrası zemin ve raf kontrolü", paragraflar: ["Çalışma bittiğinde zeminde iz, sıvı sızıntısı veya bırakılan malzeme olmadığı kontrol edilir; raf yapısına veya ürüne temas olmadığından emin olunur. Bu kontrol depo sahibinin teslim alma sürecinin bir parçasıdır.", "Tekrar eden bakım turlarında bu kayıt saklanır; hangi koridorun dar olduğu, hangi saatin uygun olduğu bilgisi bir sonraki iş için referans olur."] },
        ],
        sss: [
            { soru: "Depo işletme sürerken platform çalışabilir mi?", cevap: "Genellikle evet; koridor trafiğiyle çakışmayan bir pencere belirlenir ve bu pencerede çalışılır. Yoğun yükleme-boşaltma saatlerinde iş ertelenir. Depo sorumlusuyla önceden yapılan koordinasyon bu planın temelini oluşturur, planlama yapılmadan sahaya gidilmez." },
            { soru: "Dizel makine iç mekanda hiç kullanılamaz mı?", cevap: "Kapalı, havalandırması sınırlı alanlarda egzoz emisyonu birikme riski nedeniyle kullanılmaz; akülü model standarttır. Depo kısmen açık ve havalandırması iyiyse istisnai durumlar değerlendirilebilir, ancak bu karar tesisin kendi güvenlik kuralına bağlıdır ve varsayılan tercih değildir." },
            { soru: "Raf koridoru çok dar; her makine geçebilir mi?", cevap: "Hayır, koridor genişliği makinenin şase ölçüsüyle karşılaştırılmadan kesin cevap verilemez. Dar koridorlarda daha küçük şaseli akülü model tercih edilir. Ölçü paylaşılmadan makine ataması kesinleştirilmez, sahada uygunsuz makineyle karşılaşmayı önlemenin tek yolu budur." },
            { soru: "Gümrüklü alan sınırı depo içinde nasıl anlaşılır?", cevap: "Bu bilgi tesisin kendi yerleşim planından ve gümrük statüsü kayıtlarından gelir; biz bunu depo sorumlusuna sorarak netleştiririz. Sınır belirsizken platform gümrüklü alana sokulmaz. Netleşme sağlanmadan çalışma planı kesinleştirilmez." },
            { soru: "Sprinkler başlığına yanlışlıkla temas riski nasıl azaltılır?", cevap: "Çalışma öncesi tavan altındaki sprinkler ve dedektör konumları işaretlenir, sepet bu noktalara mesafeli konumlandırılır. Operatör yukarı bakarak sürekli kontrol eder, belirsizlik varsa hareket durdurulup mesafe yeniden değerlendirilir. Tesisin yangın güvenlik sorumlusuna bilgi vermek bu sürecin bir parçasıdır." },
            { soru: "İz bırakmayan lastik talep etmezsem ne olur?", cevap: "Talep formunda zemin türü belirtilmezse standart lastikli makine gönderilebilir; epoksi veya perdahlı zeminde bu iz bırakma riski taşır. Bu riski önlemek için zemin türünü baştan bildirmenizi isteriz; belirsizlik varsa iz bırakmayan lastik varsayılan olarak önerilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Serbest bölge deposu ve gümrük statüsü kavramları kamuya açık genel bilgidir; makine seçim mantığı ve koridor koordinasyonu firma saha pratiğidir. Tesis adı veya doğrulanmamış kapasite kullanılmamıştır.",
    },
    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Liman ve Rafineri Sahasında Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "Liman ve rafineri sahalarındaki çelik yapı montajı — destek konstrüksiyonu, boru köprüsü, platform iskeleti veya çatı aksamı — genellikle vinç ile birlikte yürütülen, kaynak ve cıvatalama işlerinin sepetli erişimle tamamlandığı karma bir operasyondur. Biz montaj platformunu bu ortak çalışmaya göre konumlandırırız: vinç yükünün geçtiği güzergâh boş bırakılır, sepetin çalışma alanı montaj sırasıyla eşleştirilir ve kaynak işi varsa ayrı bir sıcak iş izni koşulu devreye girer. Rafineri sahasında ATEX bölge sınıfı, liman sahasında ise açık alan rüzgâr sınırı ön plana çıkar; her iki ortamda da platformun görevi malzemeyi taşımak değil, montaj ekibine güvenli ve stabil bir çalışma yüzeyi sağlamaktır. Doğru koordinasyon, vinç operatörü, kaynakçı ve platform operatörünün aynı saha planını görmesiyle başlar.",
        maddeler: [
            { baslik: "Vinç güzergâhıyla çakışmayı önlemek", metin: "Çelik montajında vinç yükü belirli bir güzergâh üzerinden taşınır; bu güzergâh üzerinde platform bulunmamalıdır. Günlük saha planında vinç hareket saatleri ile platformun çalışma noktası ayrı ayrı işaretlenir. Yük askıdayken platform o hat üzerinde konumlanmaz, gerekirse geçici olarak alandan çekilir." },
            { baslik: "Kaynak işi için ayrı sıcak iş izni", metin: "Sepetten kaynak yapılacaksa yalnız yüksekte çalışma izni yeterli değildir; kıvılcım yayılımı, yanıcı malzeme temizliği ve yangın gözcüsü sıcak iş izninde ayrıca tanımlanır. Platform bu izin olmadan kaynak noktasına yaklaştırılmaz. İki iznin birbirine bağlı olduğu iş emrinde açıkça belirtilir." },
            { baslik: "Montaj sırasına göre erişim planlaması", metin: "Çelik konstrüksiyon montajı genellikle belirli bir sıra izler: temel bağlantı, ana kiriş, tali eleman, son kontrol. Platformun çalışma noktası bu sıraya göre önceden planlanır; sıra değiştiğinde erişim planı da güncellenir. Montaj ekibiyle günlük koordinasyon, platformun doğru noktada ve doğru zamanda bulunmasını sağlar." },
            { baslik: "Rüzgâr ve yük dengesine dikkat", metin: "Açık liman sahasında yükseklik arttıkça rüzgâr etkisi artar; kaldırılan çelik parça ile platformun sepeti aynı bölgede olduğunda rüzgâr her ikisi için de risk oluşturur. Üreticinin belirlediği azami rüzgâr hızı aşıldığında sepet kaldırılmaz, vinç operasyonuyla eşzamanlı çalışma da bu sınıra göre değerlendirilir." },
            { baslik: "ATEX bölgesinde kaynak ve erişim kısıtı", metin: "Rafineri proses ünitesi yakınında çelik montaj yapılacaksa zon sınıflandırması kaynak işini de etkiler; bazı bölgelerde soğuk çalışma dışında hiçbir sıcak iş yapılamaz. Bu kısıt platform seçimini ve iş programını doğrudan belirler; tesisin proses güvenlik biriminden onay alınmadan sıcak iş planlanmaz." },
        ],
        ekBolumler: [
            { baslik: "Çelik montaj ekiplerinin görev-alan eşleşmesi", paragraflar: ["Tablo, bir çelik konstrüksiyon montajında farklı ekiplerin aynı sahada hangi sırayla ve hangi güvenlik koşuluyla çalıştığını özetler."], tablo: { basliklar: ["Aşama", "Sorumlu ekip", "Platformun rolü", "Kısıt"], satirlar: [["Kaldırma", "Vinç ekibi", "Alandan çekilme", "Yük güzergâhında bulunmama"], ["Bağlantı-kaynak", "Montaj/kaynak ekibi", "Sepetle erişim sağlama", "Sıcak iş izni"], ["Kontrol-sıkma", "Kalite kontrol", "Sepetle erişim sağlama", "Yüksekte çalışma izni"], ["Son teslim", "Saha sorumlusu", "Alanı boşaltma", "Temiz teslim"]] } },
            { baslik: "Günlük saha koordinasyon toplantısı", paragraflar: ["Her sabah vinç operatörü, montaj ekibi ve platform operatörü o günün sırasını, hangi saatte hangi bölgenin kimin kullanımında olacağını ve kaynak işi varsa ayrı iznin durumunu görüşür. Bu toplantının çıktısı yazılı olarak sahada asılır veya operatöre iletilir.", "Program gün içinde değişirse — örneğin vinç işi gecikirse — platformun çalışma saati de buna göre güncellenir; sessizce eski plana devam edilmez."] },
            { baslik: "Montaj sonrası platformun alandan çekilmesi", paragraflar: ["Bir montaj bölümü tamamlandığında platform alanı vinç ve montaj ekibine görünür şekilde teslim eder; sepet indirilir, geçici bariyer varsa kaldırılır. Kalan iş varsa bu açıkça işaretlenir, tamamlandı gibi kapatılmaz.", "Tekrar eden montaj turlarında bu teslim kaydı, bir sonraki aşamanın başlangıç bilgisi olarak kullanılır."] },
        ],
        sss: [
            { soru: "Vinç çalışırken platform aynı alanda durabilir mi?", cevap: "Yük askıdayken ve platform vinç güzergâhının üzerinde veya altında ise hayır. Günlük saha planında iki ekibin çalışma alanı ayrı tutulur; vinç hareketi sırasında platform güvenli mesafeye çekilir veya geçici olarak durur. Bu koordinasyon vinç operatörü ile platform operatörü arasında sözlü değil, yazılı plana göre yürütülür." },
            { soru: "Sepetten kaynak yapmak için ek belge gerekiyor mu?", cevap: "Evet, yüksekte çalışma izninin yanında ayrı bir sıcak iş izni gerekir. Bu izin kıvılcım yayılımı, yanıcı malzeme temizliği ve yangın gözcüsü gibi unsurları kapsar. İki izin de tamamlanmadan sepet kaynak noktasına yaklaştırılmaz." },
            { soru: "Rafineri yakınında sıcak iş her zaman yapılabilir mi?", cevap: "Hayır, proses ünitesine yakın bazı bölgelerde zon sınıflandırması sıcak işi tamamen yasaklayabilir. Bu durumda soğuk bağlantı yöntemleri değerlendirilir veya iş proses durdurma dönemine ertelenir. Karar tesisin proses güvenlik biriminin onayına bağlıdır." },
            { soru: "Montaj sırası değişirse platform planı nasıl güncellenir?", cevap: "Günlük koordinasyon toplantısında sıra değişikliği bildirilirse platformun çalışma noktası ve saati aynı gün güncellenir. Değişiklik son dakika ise operatöre doğrudan bildirilir; eski plana göre hareket edilmez. Bu esneklik, montaj işlerinin doğasında sık görülen program kaymalarını yönetmek içindir." },
            { soru: "Açık liman sahasında rüzgâr montaj işini durdurur mu?", cevap: "Üreticinin belirlediği azami rüzgâr hızı aşılırsa hem vinç hem platform operasyonu durur. Bu sınır ölçülen veya bildirilen rüzgâr hızına göre uygulanır, operatörün kişisel tahminine bırakılmaz. Rüzgârlı dönemlerde iş programı esnek tutulur." },
            { soru: "Farklı ekiplerin aynı sahada koordinasyonunu kim sağlıyor?", cevap: "Genellikle proje veya saha sorumlusu bu koordinasyonu yürütür; biz platform operatörünü bu sorumlunun günlük planına bağlarız. Vinç, kaynak ve platform ekipleri arasında çelişkili talimat geldiğinde sepet hareket ettirilmez, taraflar ortak karara çağrılır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montajında vinç-platform koordinasyonu ve sıcak iş izni kavramı sektörde bilinen genel bilgidir; anlatım firma saha pratiğidir. Tesis adı veya doğrulanmamış proje bilgisi kullanılmamıştır.",
    },
    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım Silo Platform Kiralama: Aliağa Çevresinde Sınırlı Talep Alanı",
        giris:
            "Aliağa merkezli hizmet ağımızın ağırlığı rafineri ve liman sahalarında olduğu için tarım silo işleri, portföyümüzde marjinal ve düzensiz aralıklarla gelen bir taleptir; bunu olduğundan büyük göstermeyeceğiz. Bölgedeki tarım silosu ve kurutma tesisi işleri genellikle bakım dönemine denk gelen, tek seferlik aydınlatma veya bakım erişimi talepleridir; sürekli bir hizmet hattı değildir. Yine de talep geldiğinde aynı belgeli operatörlü ve ISG uyumlu yaklaşımı uygularız: silo dış cephesine erişimde zemin, silo çevresindeki toz birikimi ve varsa tahıl tozu patlama riski değerlendirilir. Silo işleri rafineri sahası kadar sık karşılaştığımız bir profil olmadığı için, önerimiz her zaman önce kısa bir keşif görüşmesiyle işin gerçek kapsamını netleştirmektir; genel bir kapasite veya süre iddiasında bulunmayız.",
        maddeler: [
            { baslik: "Silo dış cephesi erişiminde zemin durumu", metin: "Tarım tesislerinde silo çevresi genellikle stabilize toprak veya kısmi beton olabilir; bu zemin sanayi sahasındaki gibi standart olmayabilir. Erişim öncesi zeminin taşıma kapasitesi ve düzlüğü keşifte değerlendirilir, belirsizse arazi tipi makine veya zemin iyileştirmesi önerilir." },
            { baslik: "Toz birikimi ve yanıcı ortam kontrolü", metin: "Silo çevresinde tahıl tozu birikimi bazı koşullarda yanıcı ortam riski taşıyabilir. Sıcak iş yapılacaksa bu risk ayrıca değerlendirilir, gerekirse tesisin kendi güvenlik prosedürü uygulanır. Bu değerlendirme her işte tesisle birlikte yapılır, varsayılan bir risk seviyesi öne sürülmez." },
            { baslik: "Mevsimsel yoğunluk ve talep düzensizliği", metin: "Tarım tesislerinde bakım işleri genellikle hasat sonrası veya kurutma sezonu öncesi yoğunlaşabilir; bu dönem dışında talep seyrektir. Biz bu düzensizliği saklamayız; talep geldiğinde uygunluk ve makine planlaması o anki filo durumuna göre değerlendirilir, sabit bir rezervasyon takvimi sunulmaz." },
            { baslik: "Sınırlı erişim yollarında sevkiyat planlaması", metin: "Bazı tarım tesisleri ana yol ağından uzakta, dar köy yollarıyla ulaşılan konumlarda olabilir. Sevkiyat öncesi güzergâh ve köprü tonaj sınırı kontrol edilir; büyük araçla ulaşım mümkün değilse daha küçük sınıf makine değerlendirilir." },
            { baslik: "Dürüst kapsam belirleme", metin: "Silo işlerinde her talebi karşılayabileceğimizi iddia etmeyiz. İş, filomuzun ve uzmanlığımızın kapsamı dışına çıkıyorsa bunu açıkça söyleriz ve mümkünse alternatif yönlendirme yaparız. Rafineri ve liman odaklı yapımız, tarım sahasında geniş bir referans birikimi anlamına gelmez." },
        ],
        ekBolumler: [
            { baslik: "Silo işlerinde tipik erişim durumu", paragraflar: ["Aşağıdaki tablo, tarım silosu çevresinde sık karşılaşılan iki erişim durumunu özetler. Bu bilgi genel bir kılavuzdur, her tesiste yerinde doğrulama gerekir."], tablo: { basliklar: ["Durum", "Zemin", "Öncelikli önlem", "Not"], satirlar: [["Silo dış cephe bakımı", "Stabilize/kısmi beton", "Zemin taşıma kontrolü", "Arazi tipi makine değerlendirilebilir"], ["Kurutma tesisi iç aydınlatma", "Beton, kapalı alan", "Toz birikimi kontrolü", "Akülü makine tercih edilir"]] } },
            { baslik: "Talep öncesi kısa görüşme", paragraflar: ["Silo işleri sık karşılaştığımız bir profil olmadığı için her talepte önce kısa bir görüşme yapılır: işin tam olarak ne olduğu, erişim yolu, zemin durumu ve varsa toz/yanıcı ortam riski sorulur. Bu görüşme, sahaya uygun olmayan makine göndermeyi önlemek içindir.", "Görüşme sonunda iş kapsamımızın dışında kalıyorsa bunu açıkça belirtiriz; yalnızca üstlenebileceğimiz kadarını teklif ederiz."] },
            { baslik: "Bölgedeki gerçek talep hacmi", paragraflar: ["Aliağa ve çevresindeki tarım faaliyeti, rafineri ve liman sanayisinin yanında sınırlı bir alan kaplar. Bu nedenle silo ve kurutma tesisi talebi yılın belirli dönemlerinde ve düşük sıklıkla gelir. Bunu abartmadan, sayfayı yalnızca gerçekten karşılayabileceğimiz bir hizmet olarak tutuyoruz.", "İlerleyen dönemde talep artarsa bu sayfa daha fazla saha bilgisiyle güncellenebilir; şu an için amaç dürüst bir kapsam tanımı sunmaktır."] },
        ],
        sss: [
            { soru: "Tarım silosu işlerini ne sıklıkla alıyorsunuz?", cevap: "Sık değil; ana odağımız rafineri ve liman sahaları olduğu için silo işleri düzensiz aralıklarla, genellikle bakım dönemine denk gelen tekil taleplerdir. Bunu abartmadan söylüyoruz; talep geldiğinde değerlendirir, filomuzun uygunluğuna göre teklif sunarız." },
            { soru: "Silo çevresinde toz birikimi varsa çalışma yapılabilir mi?", cevap: "Değerlendirme gerektirir. Toz birikimi bazı koşullarda yanıcı ortam riski taşıyabilir; sıcak iş varsa bu risk ayrı ele alınır. Kesin bir güvenlik seviyesi öne sürmeden önce tesisin kendi durumunu yerinde veya fotoğrafla incelemek isteriz." },
            { soru: "Köy yolundan ulaşılan bir siloya makine gelir mi?", cevap: "Yol genişliği ve köprü tonaj sınırı uygunsa gelir. Sevkiyat öncesi güzergâh kontrol edilir; büyük araçla ulaşım mümkün değilse daha küçük sınıf makine değerlendirilir. Bu bilgi önceden paylaşılmazsa aracın yolda ilerleyemediği bir durumla karşılaşılabilir." },
            { soru: "Hasat sezonunda talep artarsa makine bulunur mu?", cevap: "Garanti veremeyiz; o dönemde rafineri ve liman işlerimiz de yoğun olabilir. Erken planlama şansı artırır, son dakika talepte uygun makine bulunamayabilir. Dürüst olmak adına sabit bir rezervasyon vaadinde bulunmuyoruz." },
            { soru: "Silo dış cephesinde arazi tipi makine mi gerekir?", cevap: "Zemin stabilize veya kısmen düzensizse arazi tipi makine daha uygun olabilir. Kesin karar zemin fotoğrafı veya yerinde keşif sonrası verilir. Standart sanayi tipi makine her zaman bu zeminde güvenle çalışmayabilir." },
            { soru: "Bu alanda deneyiminiz sınırlıysa neden hizmet sunuyorsunuz?", cevap: "Talep geldiğinde reddetmek yerine, kapsamımızın gerçekte ne olduğunu açıkça söyleyerek değerlendiriyoruz. İş bizim uzmanlık ve filo kapasitemizin dışındaysa bunu saklamayız. Amaç her işi almak değil, üstlendiğimiz işi güvenli ve doğru şekilde tamamlamaktır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Aliağa çevresinin sanayi ağırlıklı yapısı ve tarım faaliyetinin sınırlı payı kamuya açık genel bilgidir; talep sıklığı ve kapsam sınırı hakkındaki ifadeler dürüstlük ilkesiyle yazılmıştır, abartılı iddia içermez.",
    },
    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Rafineri ve Liman Aydınlatma-Elektrik Bakım Platformu: ATEX Kurallı Erişim",
        giris:
            "Rafineri ve liman sahalarında aydınlatma direği, saha projektörü veya proses ünitesi çevresindeki elektrik bakım işleri, standart bir sanayi tesisindeki elektrik bakımından daha katı bir kural setine tabidir. Proses ünitesi yakınındaki her elektrik müdahalesi önce enerjinin güvenli duruma alınmasını, sonra da o bölgenin ATEX zon sınıfına uygun ekipman kullanılmasını gerektirir. Biz bu işleri iki ayrı kural katmanı üzerinden yürütürüz: birincisi genel elektrik güvenliği — kilitleme-etiketleme, gerilim testi, yetkili elektrikçi onayı; ikincisi ise proses güvenliği — zon sınıfına uygun makine, gaz ölçümü, sıcak iş kısıtı. Liman sahasındaki açık alan aydınlatma direği bakımı bu iki katmandan yalnız birincisini taşıyabilirken, rafineri proses ünitesi çevresindeki bir aydınlatma armatürü değişimi her iki katmanı da taşır. Doğru sınıflandırma, işin başında hangi bölgede çalışıldığının netleşmesiyle başlar; bu bizim en detaylı ve en sık uyguladığımız hizmet profillerimizden biridir.",
        maddeler: [
            { baslik: "Enerji kesme ve kilitleme-etiketleme onayı", metin: "Aydınlatma veya elektrik panosuna müdahale gerektiren her işte, ilgili hat tesisin yetkili elektrikçisi tarafından kilitleme-etiketleme prosedürüyle güvenli duruma alınır. Platform operatörü bu onayı görmeden sepeti enerjili hatta yaklaştırmaz. Gerilim testi yapılmadan hat enerjisiz kabul edilmez; bu adım her seferinde tekrarlanan, atlanmayan bir kontroldür." },
            { baslik: "ATEX zon sınıfına göre makine ve el aleti seçimi", metin: "Proses ünitesi çevresinde zon sınıflandırması yapılmışsa yalnız o sınıfa uygun sertifikalı platform ve el aletleri kullanılır. Standart bir elektrik tornavidası veya test cihazı bile zon sınıfına uygun değilse proses alanına sokulmaz. Bu kısıt işin hızını değil, hangi ekipmanla çalışılabileceğini belirler; tesisten zon bilgisi alınmadan ekipman listesi hazırlanmaz." },
            { baslik: "Gaz ölçümü ve sıcak iş kısıtı", metin: "Proses ünitesi yakınındaki aydınlatma bakımında bazen kablo lehimleme veya benzeri ısı gerektiren işlem sıcak iş sayılabilir. Bu durumda tesisin güncel gaz ölçüm sonucu istenir, sonuç onaylanmadan işlem başlamaz. Ölçüm periyodik olarak tekrarlanabilir; çalışma süresince gaz seviyesinde değişiklik olursa iş durdurulur." },
            { baslik: "Açık liman sahasında direk ve projektör bakımı", metin: "Liman rıhtımı veya konteyner sahasındaki aydınlatma direklerinde çalışma genellikle proses güvenliği katmanı taşımaz, ancak yükseklik ve rüzgâr etkisi önemlidir. Direk tepesindeki armatüre erişimde platform menzili ve rüzgâr sınırı üreticinin tablosuna göre değerlendirilir; araç trafiğiyle çakışan bir konumlanma varsa geçici bariyer kurulur." },
            { baslik: "Periyodik bakım programına dahil olma", metin: "Rafineri ve liman tesislerinin çoğunda aydınlatma ve elektrik bakımı belirli periyotlarla tekrarlanır. Bu tür işlerde çerçeve sözleşme kurup makine ve operatör belgelerini önceden onaya sunmak, her turda sıfırdan evrak hazırlamayı azaltır. Periyodik bakım takvimi tesisin bildirdiği aralığa göre planlanır." },
        ],
        ekBolumler: [
            { baslik: "İki kural katmanı arasındaki fark", paragraflar: ["Aşağıdaki tablo, sahanın konumuna göre hangi kural katmanının devreye girdiğini özetler. Kesin sınıflandırma her zaman tesisin kendi proses güvenlik dokümanından alınır."], tablo: { basliklar: ["Çalışma alanı", "Genel elektrik güvenliği", "Proses/ATEX güvenliği", "Tipik ek gereksinim"], satirlar: [["Liman rıhtımı, açık saha direği", "Uygulanır", "Genellikle uygulanmaz", "Rüzgâr sınırı, trafik bariyeri"], ["Depo/ofis binası aydınlatması", "Uygulanır", "Uygulanmaz", "Standart kilitleme-etiketleme"], ["Proses ünitesi çevresi", "Uygulanır", "Uygulanır", "Zon sertifikalı ekipman, gaz ölçümü"], ["Tank çiftliği aydınlatma direği", "Uygulanır", "Genellikle uygulanır", "Zon bilgisi teyidi"]] } },
            { baslik: "Yetkili elektrikçi ile platform operatörünün ortak çalışması", paragraflar: ["Aydınlatma bakımında genellikle iki ayrı yetkinlik bir araya gelir: tesisin veya bizim yetkili elektrikçimiz hattın enerji durumunu yönetir, platform operatörü ise erişimi sağlar. Bu iki kişi aynı iş emrinde görevlendirilir, sorumluluk sınırı yazılı belirlenir.", "Elektrikçi enerjiyi kesmeden platform sepeti hatta yaklaştırılmaz; platform operatörü de elektrik işine kendi kararıyla müdahale etmez. Bu net görev ayrımı, karışık sorumluluktan doğan hataları önler."] },
            { baslik: "Bakım sonrası test ve enerjilendirme", paragraflar: ["İş bittiğinde önce görsel kontrol yapılır, ardından yetkili elektrikçi hattı kademeli olarak enerjilendirir. Platform bu sırada güvenli mesafede tutulur. Enerjilendirme sonrası armatür veya panonun doğru çalıştığı test edilir.", "Kilitleme-etiketleme kaldırılmadan önce tüm çalışanların alanı terk ettiği teyit edilir; bu, işin en sık atlanan ama en kritik kapanış adımlarından biridir."] },
        ],
        sss: [
            { soru: "Aydınlatma direğine çıkmadan önce enerji nasıl kesiliyor?", cevap: "Tesisin veya bizim yetkili elektrikçimiz ilgili hattı kilitleme-etiketleme prosedürüyle güvenli duruma alır ve gerilim testiyle enerjisiz olduğunu doğrular. Platform operatörü bu onay ve test kaydını görmeden sepeti hatta yaklaştırmaz. Bu adım her işte, hattın küçük veya büyük olmasından bağımsız uygulanır." },
            { soru: "Proses ünitesi yakınında hangi ek belgeler isteniyor?", cevap: "Zon sınıfı bilgisi, o sınıfa uygun ekipman sertifikası ve güncel gaz ölçüm sonucu temel gereksinimdir. Sıcak iş içeren bir işlemse ayrıca sıcak iş izni gerekir. Bu belgeler olmadan proses alanına giriş yapılmaz; tesisin proses güvenlik biriminden onay beklenir." },
            { soru: "Liman aydınlatma direği bakımı da aynı katı kurallara mı tabi?", cevap: "Genellikle daha az katmanlıdır; proses güvenliği katmanı çoğunlukla devreye girmez. Ancak genel elektrik güvenliği (kilitleme-etiketleme) her zaman uygulanır, ayrıca yükseklik ve rüzgâr etkisi önemli hâle gelir. Sahanın tam konumu ve tesis kuralı netleşmeden varsayım yapılmaz." },
            { soru: "Gaz ölçümü sırasında değer değişirse iş durur mu?", cevap: "Evet, çalışma süresince gaz seviyesinde onaylanan aralığın dışına çıkış olursa iş derhal durdurulur ve ekip alanı terk eder. Yeni ölçüm sonucu güvenli seviyeyi gösterene kadar işe devam edilmez. Bu karar operatörün takdirine değil, ölçüm sonucuna dayanır." },
            { soru: "Periyodik aydınlatma bakımında evrak süreci kısaltılabilir mi?", cevap: "Tekrar eden işlerde çerçeve dosya kullanılabilir; makine ve personel belgelerinin doğrulanmış nüshaları saklanır, her turda yalnız güncel tarih ve görev bilgisi yenilenir. Bu, iznin kendisini atlamaz, yalnız tekrar eden idari süreci hızlandırır." },
            { soru: "Elektrikçi ile platform operatörü aynı kişi olabilir mi?", cevap: "Görevler ayrı yetkinlik gerektirir; aynı kişinin ikisini de üstlenmesi tesis prosedürü ve belgelerle açıkça kabul edilmedikçe varsayılmaz. Genellikle iki ayrı görevli aynı iş emrinde birlikte çalışır, sorumluluk sınırı baştan yazılı olarak belirlenir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Kilitleme-etiketleme, ATEX zon sınıflandırması ve gaz ölçümü kavramları sektörde bilinen genel güvenlik uygulamalarıdır; iş akışı anlatımı firma saha pratiğidir. Tesis adı veya doğrulanmamış rakam kullanılmamıştır.",
    },
    "hizmet:operatorlu-platform-kiralama": {
        h1: "Belgeli Operatörlü Platform Kiralama: Rafineri ve Liman Sahasında ISG Zorunluluğu",
        giris:
            "Rafineri ve liman sahalarında bir yükseltilebilir platformu kimin kullandığı, makinenin kendisinden çoğu zaman daha kritik bir güvenlik değişkenidir. Bu sahalarda çoğu tesis, kendi yüklenici prosedüründe yalnız belgeli ve tesisin kabul ettiği operatörlerin platform kullanmasına izin verir; makineyi doğru seçmiş olmak, yetkisiz veya eğitimsiz bir kişinin kumandaya geçmesini engellemez. Operatörlü kiralama modelimiz tam olarak bu boşluğu kapatmak için kurulmuştur: görevlendirdiğimiz her operatörün geçerli yeterlilik belgesi, gerekli sağlık ve eğitim kayıtları önceden tesisin yüklenici kabul birimine sunulur; sahada yalnız bu listede yer alan kişi kumandayı kullanır. Rafineri proses ünitesi çevresinde bu kural ayrıca ATEX oryantasyonu ve proses sahası bilgisiyle genişler; liman sahasında ise gümrüklü alan giriş yetkisi ve iç trafik kuralları eklenir. Belgeli operatörlü hizmet, müşterinin kendi İSG sorumluluğunu paylaşan değil, onu görünür ve denetlenebilir kılan bir çözümdür — bu sayfa, ağımızdaki en çok talep edilen hizmet profillerinden biri olarak en detaylı yazdığımız sayfadır.",
        maddeler: [
            { baslik: "Yeterlilik belgesinin tesis kabulüne uygunluğu", metin: "Her tesisin yüklenici prosedürü, kabul ettiği operatör yeterlilik belgesinin türünü ve geçerlilik süresini kendi kurallarıyla tanımlar. Görevlendirme yapmadan önce operatörün belgesi bu kurala göre kontrol edilir; süresi yaklaşan veya tesisin formatına uymayan belge varsa yenileme veya farklı operatör ataması önceden planlanır. Belge kontrolü sahada değil, giriş başvurusu aşamasında tamamlanır." },
            { baslik: "Sağlık ve eğitim kayıtlarının güncelliği", metin: "Yükseklikte çalışacak operatörün periyodik sağlık muayenesi ve platform kullanım eğitimi kaydı güncel olmalıdır. Bu kayıtlar operatör dosyasında saklanır ve her yeni işte tarihleri kontrol edilir. Süresi geçmiş bir kayıtla operatör sahaya gönderilmez; bu, işin gecikmesi pahasına da olsa esnetilmeyen bir kuraldır." },
            { baslik: "Makineye özgü kumanda ve acil indirme eğitimi", metin: "Genel platform yeterliliği, her makine modelinin kumanda düzenini otomatik olarak kapsamaz. Teslim sırasında operatöre o makineye özgü kumanda, acil indirme prosedürü ve uyarı sistemleri tutanakla anlatılır. Bu kısa teslim eğitimi atlanmaz; özellikle nadiren kullanılan bir model söz konusuysa bu adım ekstra önem taşır." },
            { baslik: "Proses ve gümrüklü alan oryantasyonu", metin: "Rafineri proses ünitesine girecek operatör ayrıca ATEX ve proses güvenlik oryantasyonundan geçer; gaz ölçüm sonucunu okuma, izolasyon durumunu anlama gibi bilgiler bu oryantasyonun parçasıdır. Liman gümrüklü alanına girecek operatör ise bölgenin giriş kuralı ve iç trafik düzenine dair bilgilendirmeyi alır. Oryantasyonu tamamlamamış operatör ilgili alana sokulmaz." },
            { baslik: "Vardiyalı kullanımda yetki devri disiplini", metin: "Çok vardiyalı işlerde her vardiyanın kendi yetkili operatörü olmalıdır; bir kişinin belgesi bütün ekibi kapsamaz. Anahtar ve kumanda yetkisi yalnız görevlendirme listesindeki kişiye teslim edilir, vardiya devrinde yeni operatörün belgesi ve makine durumu birlikte kontrol edilir." },
        ],
        ekBolumler: [
            { baslik: "Operatörlü kiralama karar tablosu", paragraflar: ["Aşağıdaki tablo, hangi durumlarda operatörlü kiralamanın belirgin biçimde tercih sebebi olduğunu özetler."], tablo: { basliklar: ["Durum", "Operatörsüz risk", "Operatörlü avantaj", "Bizim uygulamamız"], satirlar: [["Proses ünitesi çevresi", "Zon/oryantasyon bilgisizliği", "ATEX oryantasyonlu operatör", "Zorunlu operatörlü öneri"], ["Gümrüklü liman alanı", "Giriş yetkisi karmaşası", "Alan kuralına hakim operatör", "Operatörlü öneri"], ["Çok vardiyalı iş", "Belirsiz yetki devri", "Vardiya bazlı görevlendirme listesi", "Yazılı devir kaydı"], ["Kısa süreli tek seferlik iş", "Eğitim maliyeti orantısız olabilir", "Esnek, isteğe bağlı", "Müşteri operatörü + belge kontrolü de mümkün"]] } },
            { baslik: "Müşterinin kendi operatörünü kullanma koşulları", paragraflar: ["Bazı müşteriler kendi operatörüyle yalnız makine kiralamak ister. Bu durumda kullanacak kişilerin yeterlilik kaydı önceden görülür, makineye özgü kumanda ve acil indirme teslim eğitimi tutanakla yapılır ve yetkisiz kişilerin anahtara erişmemesi için sorumlu belirlenir.", "Tesis prosedürü dışarıdan gelen operatörü kabul etmiyorsa veya belge tesisin formatına uymuyorsa bu net biçimde baştan söylenir; belirsizlikle sahaya gidip kapıda sorun yaşanması istenmez."] },
            { baslik: "Operatör dosyasının sürekli güncel tutulması", paragraflar: ["Belge ve sağlık kayıtları yalnız işe başlarken değil, projenin veya periyodik bakımın her aşamasında kontrol edilir. Süresi dolan bir kayıt fark edildiğinde operatör görevlendirmesi otomatik olarak durdurulur, yenileme tamamlanmadan sahaya gönderilmez.", "Sık çalışılan tesislerde operatör dosyası çerçeve kayıt olarak tutulabilir; bu, iznin kendisini atlamaz, yalnız tekrar eden idari işlemi hızlandırır."] },
        ],
        sss: [
            { soru: "Operatörlü kiralama ile operatörsüz kiralama arasındaki fiyat farkı neye bağlı?", cevap: "Fark, operatörün eğitim/belge maliyeti, vardiya süresi ve proses sahası gibi ek oryantasyon gerekip gerekmediğine göre değişir. Rakam vermeden önce işin süresini, saha tipini ve vardiya sayısını sorarız; bu bilgiye göre net bir teklif hazırlanır." },
            { soru: "Kendi operatörümüz var ama tesis onu kabul etmiyor, ne yapılır?", cevap: "Bu durumda bizim belgeli operatörümüz görevlendirilir; tesisin kabul kriterine uygun belge ve oryantasyon önceden hazırlanır. Alternatif olarak müşterinin operatörü için tesisin istediği ek eğitim veya belge tamamlanabiliyorsa bu yol da değerlendirilir, ancak karar tesisin prosedürüne bağlıdır." },
            { soru: "Operatör hastalanırsa iş durur mu?", cevap: "Talep aşamasında ana operatörün yanında yedek bir isim de tesisin ön onayına gönderilebilir; bu sayede beklenmedik değişiklikte iş durmadan devam eder. Yedek bildirilmemişse yeni operatörün belge ve oryantasyon süreci tamamlanana kadar iş askıya alınır; onaysız kişi kumandaya geçirilmez." },
            { soru: "ATEX oryantasyonu almış bir operatörü nereden buluyorsunuz?", cevap: "Kendi operatör kadromuz proses sahalarında düzenli çalıştığı için bu oryantasyonu daha önce almış kişiler önceliklidir; almamışsa görevlendirmeden önce tesisin sunduğu oryantasyon programına dahil edilir. Oryantasyon tamamlanmadan operatör proses alanına sokulmaz." },
            { soru: "Vardiya sayısı arttıkça operatör sayısı da artıyor mu?", cevap: "Evet, her vardiyanın kendi yetkili operatörü olması gerektiği için vardiya sayısı doğrudan görevlendirilecek operatör sayısını belirler. Tek operatörün art arda vardiyalarda çalıştırılması dinlenme süresi kurallarına aykırı olabileceği için planlamada bu sınır gözetilir." },
            { soru: "Operatörün belgesi süre dolmadan sahada yenilenebilir mi?", cevap: "Belge yenileme genellikle sahada değil, yetkili kurum veya eğitim merkezinde yapılır; bu nedenle süre dolmadan önce planlanması gerekir. Yaklaşan bir süre dolumu fark edildiğinde görevlendirme öncesi yenileme tamamlanır, süresi geçmiş belgeyle sahaya operatör gönderilmez." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Tesis yüklenici kabul prosedürü, ATEX oryantasyonu ve vardiya bazlı yetki devri kavramları sektörde bilinen genel uygulamalardır; anlatım firma saha pratiğidir. Tesis adı, fiyat rakamı veya doğrulanmamış performans iddiası kullanılmamıştır.",
    },
    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Rafineri, Liman ve Serbest Bölgeyi Aynı Turda Kapsayan Bakım Platformu",
        giris:
            "Aliağa hattında bazı müşterilerimizin birden fazla sahası aynı gün içinde bakım gerektirir: sabah rafineri proses ünitesi çevresinde bir aydınlatma bakımı, öğleden sonra liman ardiyesinde bir raf üstü iş, akşam serbest bölge deposunda bir tesisat kontrolü. Bu tür çok noktalı turları tek bir makine ve operatörle planlamak mümkün olabilir, ancak her sahanın kendi giriş prosedürü, izin sistemi ve zon/gümrük kuralı farklı olduğu için turun sırası bu kurallara göre kurulmalıdır. Biz güzergâhı önce her sahanın giriş bildirim süresine göre haritalar, sonra iş sürelerini gerçekçi tahminle sıralarız; bir sahadaki gecikme diğerinin programını otomatik olarak kaydırır ve bu kayma önceden müşteriye bildirilir. Çok noktalı rota hizmeti, tek seferlik bir kolaylık değil, birden fazla sahayı yöneten işletmeler için tekrarlanabilir bir bakım modelidir.",
        maddeler: [
            { baslik: "Sahaların giriş bildirim süresine göre sıralama", metin: "Rafineri, liman ve serbest bölge sahalarının her biri farklı bir giriş bildirim süresi isteyebilir; bazısı birkaç gün öncesinden bildirim isterken bazısı daha kısa sürede işlem yapabilir. Tur planı, en uzun bildirim süresi gereken sahaya göre baştan kurulur; diğer sahaların bildirimi bu takvime göre ayarlanır." },
            { baslik: "Zon ve gümrük kuralına göre makine hazırlığı", metin: "Rafineri proses sahası ATEX uygun ekipman, serbest bölge ise gümrük statüsüne uygun giriş yetkisi gerektirebilir; aynı gün içinde farklı kural setine tabi iki sahaya girecek makinenin her iki gereksinimi de karşılaması gerekir. Bu nedenle çok noktalı turda kullanılacak makine, en katı kurala göre seçilir." },
            { baslik: "Bir sahadaki gecikmenin diğerine etkisini yönetmek", metin: "İlk sahadaki iş beklenenden uzun sürerse sonraki sahanın giriş saati de kayabilir. Bu durumda ikinci sahaya erken bilgi verilir; sessizce geç kalınmaz. Gerekirse turun sırası değiştirilir veya ikinci saha bir sonraki güne planlanır; müşteriyle bu karar birlikte alınır." },
            { baslik: "Tek operatörle güvenli geçiş süresi", metin: "Bir sahadan diğerine geçişte operatörün dinlenme ve yol süresi de programa dahil edilir; art arda yorucu işler arasında yeterli ara bırakılmadan yeni sahaya giriş yapılmaz. Uzun bir tur planlanıyorsa ikinci bir operatör değerlendirilir." },
            { baslik: "Ortak dosyalama ile tekrar eden turları hızlandırmak", metin: "Aynı müşterinin birden fazla sahası düzenli olarak bakım alıyorsa her sahanın giriş kuralı, tercih ettiği saat aralığı ve belge formatı ortak bir dosyada tutulur. Yeni tur planlanırken bu bilgi baştan hazır olduğu için hazırlık süresi kısalır." },
        ],
        ekBolumler: [
            { baslik: "Örnek bir günlük tur yapısı", paragraflar: ["Aşağıdaki tablo, üç farklı saha tipini kapsayan bir günün nasıl sıralanabileceğini gösterir. Gerçek sıralama her zaman sahaların o günkü giriş uygunluğuna göre değişir."], tablo: { basliklar: ["Sıra", "Saha tipi", "Öncelikli kural", "Programlama notu"], satirlar: [["1", "Rafineri proses çevresi", "ATEX/gaz ölçümü", "En uzun bildirim süresi, sabah erken"], ["2", "Liman ardiyesi", "İç trafik yoğunluğu", "Öğle öncesi düşük trafik penceresi"], ["3", "Serbest bölge deposu", "Gümrük statüsü", "Öğleden sonra, koridor trafiği düşük saat"]] } },
            { baslik: "Müşteriyle rota planlamasını birlikte kurmak", paragraflar: ["Çok noktalı tur talep edildiğinde önce her sahanın adresi, giriş kuralı ve tercih edilen saat aralığı istenir. Bu bilgi eksikse rota tahmini olarak kurulur ve gün içinde değişebileceği baştan belirtilir.", "Mümkünse ilk turdan önce her sahayla ayrı ayrı iletişime geçilir; bu, sahada beklenmedik bir giriş sorunu yaşanma ihtimalini azaltır."] },
            { baslik: "Tur sonunda ortak rapor", paragraflar: ["Gün sonunda her sahada yapılan iş, kullanılan süre ve varsa yaşanan gecikme tek bir rapora işlenir. Bu rapor, birden fazla sahayı yöneten müşterinin kendi iç takibinde kullanılabilir.", "Rapor aynı zamanda bir sonraki turun planlamasında referans olur; hangi sahanın hangi saatte daha az yoğun olduğu bilgisi zamanla netleşir."] },
        ],
        sss: [
            { soru: "Aynı gün üç farklı sahaya girmek gerçekten mümkün mü?", cevap: "Sahaların giriş kuralları ve iş süreleri uygunsa mümkündür; ancak garanti vermeden önce her sahanın bildirim süresini ve o günkü uygunluğunu kontrol ederiz. Bir sahanın bildirim süresi uzunsa tur o sahaya göre birkaç gün önceden planlanmalıdır." },
            { soru: "Bir sahada gecikme olursa diğer sahalar iptal mi olur?", cevap: "Genellikle iptal değil, erteleme veya sıralama değişikliği yapılır. Gecikme fark edildiği anda sonraki sahaya bilgi verilir; mümkünse aynı gün geç saatte, mümkün değilse başka bir güne planlanır. Müşteri bu değişiklikten önceden haberdar edilir." },
            { soru: "Farklı zon kurallarına uygun tek makine bulunur mu?", cevap: "Evet, çok noktalı turlarda en katı kurala uygun makine seçilir; örneğin rafineri proses sahası ATEX gerektiriyorsa bu makine gün boyunca kullanılır, diğer sahalarda da bu makineyle çalışılabilir. Bu, farklı makineler arasında geçiş kaynaklı zaman kaybını önler." },
            { soru: "Tek operatör bütün günü kaldırabilir mi?", cevap: "İş yoğunluğuna ve sahalar arası mesafeye bağlıdır; dinlenme ve yol süresi programa dahil edilir. Yorucu bir gün planlanıyorsa ikinci operatör değerlendirilir. Operatörün güvenli çalışma süresini aşan bir program kurulmaz." },
            { soru: "Çok noktalı tur tek seferlik mi, düzenli mi olabilir?", cevap: "İkisi de mümkündür. Tek seferlik bir tur talep edilebileceği gibi, aynı müşterinin birden fazla sahası düzenli bakım alıyorsa bu tur periyodik hâle getirilebilir; bu durumda saha bilgileri ortak dosyada saklanarak hazırlık süresi kısaltılır." },
            { soru: "Turun maliyeti ayrı ayrı sahalara gitmekten daha mı düşük?", cevap: "Genellikle sevkiyat ve operatör süresi paylaşıldığı için ayrı ayrı planlanan işlere göre daha verimli olur; ancak kesin rakam sahaların mesafesine, iş sürelerine ve makine ihtiyacına göre değişir. Net teklif, rota bilgisi netleştikten sonra hazırlanır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Rafineri, liman ve serbest bölge sahalarının farklı giriş kuralları taşıması kamuya açık genel bilgidir; çok noktalı rota planlama yöntemi firma saha pratiğidir. Tesis adı veya doğrulanmamış süre/maliyet rakamı kullanılmamıştır.",
    },
    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Liman ve Rafineri Açık Sahasında Zor Zemin İçin Arazi Tipi Platform Kiralama",
        giris:
            "Liman ve rafineri sahalarının açık alanları her zaman düz, sağlam beton değildir; yeni inşaat bölgesindeki dolgu zemin, yağmur sonrası yumuşayan stabilize yol, rıhtım kenarındaki eğimli geçiş veya tank çiftliği çevresindeki bakımsız çakıl saha, standart tekerlekli platformun güvenle çalışamayacağı koşullar yaratabilir. Arazi tipi platform bu koşullar için tasarlanmıştır: daha büyük ve derin dişli lastikler, dört teker aktif dengeleme ve daha yüksek yer açıklığıyla düzensiz zeminde stabilitesini korur. Ancak arazi tipi olması, her zemin koşulunda otomatik güvenlik anlamına gelmez — dolgunun sıkışma durumu, eğim derecesi, gömülü hatlar ve yağış sonrası değişim her seferinde ayrıca değerlendirilmelidir. Biz bu değerlendirmeyi sahada tekerle deneyerek değil, önceden zemin bilgisi toplayarak yaparız; belirsizlik yüksekse mühendislik doğrulaması veya yük dağıtıcı düzen önerilir.",
        maddeler: [
            { baslik: "Dolgu zemin ve sıkışma durumu", metin: "Yeni inşaat veya genişleme alanlarında zemin genellikle dolgu malzemeyle oluşturulmuştur; bu malzemenin sıkışma derecesi görsel olarak anlaşılmaz. Ağır bir makinenin tekerlek altındaki nokta yükü, yeterince sıkışmamış dolguda çökmeye yol açabilir. Zemin bilgisi belirsizse saha yetkilisinden sıkıştırma testi sonucu istenir; sonuç yoksa daha hafif sınıf makine veya yük dağıtıcı plaka önerilir." },
            { baslik: "Eğim ve kenar mesafesi", metin: "Rıhtım kenarı, hendek kenarı veya şev üzerindeki çalışmalarda platformun üreticinin belirlediği azami eğim sınırını aşmaması gerekir. Kenara olan mesafe önceden ölçülür, güvenlik payı bırakılmadan kenara yaklaşılmaz. Eğim ölçümü görsel tahminle değil, saha yetkilisiyle birlikte yapılan ölçümle belirlenir." },
            { baslik: "Gömülü hat ve altyapı riski", metin: "Açık sahalarda yer altında boru hattı, kablo veya drenaj sistemi bulunabilir; bu hatların konumu her zaman yüzeyden belli olmaz. Ağır makinenin bu hatların üzerinden geçmesi hasar riski taşır. Tesisin altyapı planı önceden istenir, plan yoksa güzergâh saha yetkilisiyle birlikte yürünerek belirlenir." },
            { baslik: "Yağış sonrası zemin değişimi", metin: "Bir zemin kuru havada taşıyıcı görünse de yağış sonrası önemli ölçüde yumuşayabilir. Yağışlı dönemlerde çalışma öncesi zemin yeniden değerlendirilir; önceki ziyarette güvenli görülen bir güzergâh yağmurdan sonra tekrar kontrol edilmeden kullanılmaz. Bu, arazi tipi makinelerde bile atlanmayan bir adımdır." },
            { baslik: "Güvenli rota bulunamadığında alternatif çözüm", metin: "Zemin koşulu hiçbir şekilde güvenli hâle getirilemiyorsa çalışma ertelenir veya farklı erişim yöntemi değerlendirilir — örneğin sabit vinç, geçici platform kurulumu veya zemin iyileştirmesi sonrası tekrar deneme. Operatör zemini tekerle deneyerek karar vermez; bu karar saha yetkilisiyle birlikte, ölçülebilir veriye dayanarak alınır." },
        ],
        ekBolumler: [
            { baslik: "Zemin koşuluna göre önlem tablosu", paragraflar: ["Tablo, açık sahada sık karşılaşılan zemin koşullarında hangi önlemin öncelikli olduğunu özetler. Kesin karar her zaman sahada yapılan ölçüm ve gözlemle verilir."], tablo: { basliklar: ["Zemin koşulu", "Risk", "Öncelikli önlem", "Alternatif"], satirlar: [["Yeni dolgu zemin", "Çökme", "Sıkıştırma testi, yük dağıtıcı plaka", "Daha hafif sınıf makine"], ["Eğimli rıhtım kenarı", "Devrilme", "Eğim ölçümü, kenar mesafesi payı", "Farklı yaklaşım açısı"], ["Gömülü hat üzeri", "Hat hasarı", "Altyapı planı kontrolü", "Güzergâh değişikliği"], ["Yağış sonrası zemin", "Kayma, batma", "Zemin yeniden değerlendirme", "Çalışmayı erteleme"]] } },
            { baslik: "Zemin bilgisini toplama yöntemi", paragraflar: ["Sahaya gitmeden önce mümkünse zeminin fotoğrafı, varsa geoteknik veya sıkıştırma raporu istenir. Bu bilgi yoksa yerinde keşif sırasında saha yetkilisiyle birlikte zemin gözlemlenir; yumuşak nokta, çatlak veya çökme izi varsa işaretlenir.", "Bu bilgi toplama adımı atlanırsa makine sahaya gidip güvenli çalışma noktası bulunamadan geri dönebilir; bu hem zaman hem maliyet kaybı doğurur, bu nedenle önceden zemin bilgisi almayı önceliklendiririz."] },
            { baslik: "Operatörün zemin kararını sahada yeniden teyit etmesi", paragraflar: ["Önceden toplanan bilgi ne kadar iyi olursa olsun, operatör sahaya vardığında zemini gözle ve ilk hareketle tekrar değerlendirir. Beklenmedik bir yumuşama veya çatlak görülürse ilerleme durdurulur, saha yetkilisine bildirilir.", "Bu iki aşamalı kontrol — önceden toplanan bilgi ve sahada yeniden teyit — zor zemin işlerinde tek başına hiçbir adımın yeterli olmadığı ilkesine dayanır."] },
        ],
        sss: [
            { soru: "Arazi tipi platform her zemin koşulunda güvenli midir?", cevap: "Hayır, arazi tipi olması zeminin taşıma yeterliliğini garanti etmez. Dolgunun sıkışması, eğim, kenar mesafesi ve gömülü hatlar ayrı ayrı değerlendirilmelidir. Bu değerlendirme yapılmadan sadece makine sınıfına güvenerek çalışma başlatılmaz." },
            { soru: "Zemin sıkıştırma testi yoksa ne yapılır?", cevap: "Test sonucu yoksa daha hafif sınıf makine veya yük dağıtıcı plaka gibi önlemler önerilir; belirsizlik yüksekse mühendislik doğrulaması istenir. Test verisi olmadan ağır tonajlı makineyle çalışma başlatılmaz, bu bizim temel önlemimizdir." },
            { soru: "Rıhtım kenarına ne kadar yaklaşılabilir?", cevap: "Kesin mesafe üreticinin eğim ve kenar mesafesi kurallarına, ayrıca kenarın yapısal durumuna göre belirlenir. Bu ölçüm saha yetkilisiyle birlikte yapılır; güvenlik payı bırakılmadan kenara yaklaşılmaz. Görsel tahminle karar verilmez." },
            { soru: "Gömülü hat olup olmadığını nasıl anlıyorsunuz?", cevap: "Öncelik tesisin altyapı planını incelemektir; plan yoksa saha yetkilisiyle birlikte güzergâh yürünerek bilinen risk noktaları işaretlenir. Kesin bir hat taraması yapılmıyorsa bu belirsizlik açıkça söylenir ve güzergâh temkinli seçilir." },
            { soru: "Yağmurdan sonra önceden kullanılan güzergâh tekrar kullanılabilir mi?", cevap: "Otomatik olarak hayır; yağış sonrası zemin yeniden değerlendirilir. Önceki ziyarette güvenli görülen bir yol yağmurdan sonra yumuşamış olabilir. Bu kontrol yapılmadan aynı güzergâh varsayılan olarak kullanılmaz." },
            { soru: "Güvenli zemin bulunamazsa iş tamamen iptal mi oluyor?", cevap: "Hemen iptal değil; önce alternatif erişim yöntemi, zemin iyileştirmesi veya farklı makine sınıfı değerlendirilir. Hiçbiri mümkün değilse iş ertelenir. Karar, riskli bir denemeyle ilerlemek yerine ölçülebilir veriye dayalı bir alternatif bulmaya odaklanır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Açık saha zemin koşulları (dolgu, eğim, gömülü hat) ve arazi tipi makine kavramı sektörde bilinen genel bilgidir; değerlendirme yöntemi firma saha pratiğidir. Tesis adı veya doğrulanmamış rakam kullanılmamıştır.",
    },
};
