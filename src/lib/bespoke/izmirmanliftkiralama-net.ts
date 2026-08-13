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
};
