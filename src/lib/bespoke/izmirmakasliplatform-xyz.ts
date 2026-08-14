// ═══════════════════════════════════════════════════════════════════════════
// izmirmakasliplatform.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: İzmir, lojistik depo yüksek raf erişimi, makaslı platform odağı.
// Yazım: 2026-08-12. Kaynak ilkesi: yalnızca doğrulanabilir coğrafi/sektörel
// bilgi (OSB konumları, karayolu hatları, yapı standartları). Tesis-özel
// rakam uydurulmadı.
//
// Sayfa düzeni SİMETRİK tutulur (kullanıcı kuralı):
//   giriş → 5 madde → 3 ek bölüm (en az 1 tablo) → 6 uzun SSS
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIRMAKASLIPLATFORM_XYZ: Record<string, BespokeIcerik> = {
    "bolge:aliaga": {
        h1: "Aliağa Sanayi Depoları ve Açık Avlularında Makaslı Platform Kiralama",
        giris: "Aliağa'da ağır sanayi tesislerine komşu bir depo veya açık stok avlusunda makaslı platform işi, üretim ekipmanına müdahale ya da liman yük elleçleme işiyle aynı değildir. Buradaki konu; depo cephesi, raf sırası, aydınlatma hattı, sundurma ve avlu üzerindeki doğrudan dikey hedeflere güvenli erişim kurmaktır. Buna rağmen çevredeki ağır araç hareketi, dış ortam zemini, toz, rüzgâr ve saha kabul kuralları seçimi etkiler. Biz önce iş sınırını netleştiririz: platform hangi parsel ve bina içinde kalacak, rota tır yolunu kesiyor mu, hedefin altı boş mu, zemin düz ve taşıyıcı mı? Makaslı platform yalnız dikey erişimin uygun olduğu noktaya verilir; engel üzerinden yatay uzanma isteyen hedef için çalışanı korkuluk dışına yönelten bir çözüm kurulmaz. Depo içi ve avlu dışı işler farklı makine veya farklı zaman penceresi gerektirebilir. Aliağa'nın ağır sanayi kimliği kamuya açıktır, ancak belirli tesisin yükü, zemini, izin rejimi ya da rüzgâr değeri varsayılmaz. Her seçim saha ölçüsü, üretici sınırı ve yetkili işveren bilgisinden türetilir.",
        maddeler: [
            { baslik: "Depo içi ile açık avluyu iki ayrı çalışma ortamı saymak", metin: "Kapalı alanda emisyonsuz güç, temiz zemin ve dar geçiş öne çıkarken açık avluda yüzey düzgünlüğü, eğim, rüzgâr ve hava koşulu belirleyicidir. Tek makinenin iki ortamda kullanılacağı düşünülüyorsa her iki koşula da uygunluğu doğrulanır; yalnız depo içindeki başarısına bakılarak avluya çıkarılmaz. Güzergâhta eşik, drenaj kanalı, gevşek dolgu veya kapak varsa işaretlenir. Uygun olmayan zemin için makineyi zorlamak yerine hedefin yeri, çalışma yöntemi ya da ekipman sınıfı yeniden değerlendirilir." },
            { baslik: "Tır yolu ile platform hücresini fiziksel olarak ayırmak", metin: "Açık depo avlusunda yüksek görünürlük tek başına koruma sağlamaz. Platformun çalışma zarfı, düşen cisim alanı ve acil indirme erişimi bariyer içine alınır; tır ve forkliftler için işveren alternatif rota tanımlar. Kör köşe veya geri manevra alanına çalışma hücresi kurulmaz. Araç geçişi zorunlu hale gelirse sepet indirilir ve alan kontrollü biçimde devredilir. Gözcü yalnız araçları uyarmakla kalmaz, operatörle iletişimi sürdürür ve bariyer ihlalinde işi durdurur. Zaman baskısı bu ayrımı kaldırma gerekçesi değildir." },
            { baslik: "Dikey hedef ile engel arkasındaki hedefi ayırmak", metin: "Makaslı platform, sağlam ve düz zeminden hedefin doğrudan altına yaklaşabildiğinde verimli çalışır. Raf, sabit makine, boru hattı veya yapı çıkıntısı hedefin altını kapatıyorsa güverte uzatması her mesafeyi çözmez. Operatör korkuluğa tırmanamaz, merdiven koyamaz veya sepet dışına uzanamaz. Keşifte yatay uzaklık da ölçülür; güvenli çalışma konumu bulunamıyorsa uygun bomlu erişim ya da farklı yöntem uzman değerlendirmesine alınır. Doğru olmayan makineyi sahaya getirip davranışla telafi etmek kabul edilmez." },
            { baslik: "Dış ortam kontrolünü her vardiyada yenilemek", metin: "Avluda zemin ve hava, teslim günündeki haliyle sabit kalmayabilir. Operatör başlangıçta yüzeyi, çukuru, birikintiyi, eğimi ve makinenin görünür durumunu kontrol eder; hava şartlarını üreticinin sınırları ve saha prosedürüyle karşılaştırır. Rüzgâr sınırı tahminle değil makinenin veri ve talimatıyla yönetilir. Yağış zemini değiştirmişse rota yeniden incelenir. Uygunsuzlukta sepet indirilir ve çalışma durdurulur. Kayıp süreyi telafi etme baskısı, makineyi sınır dışında kullanma yetkisi vermez." },
            { baslik: "Tozlu çevrede temizlik ve günlük kontrolü sıkı tutmak", metin: "Sanayi ve açık stok çevresinde biriken toz, kumanda etiketlerini, basamakları ve zemin görüşünü etkileyebilir. Günlük kontrolde korkuluk kapısı, lastikler, hidrolik izler, çukur koruma düzeni, ikazlar ve acil indirme gözden geçirilir. Basamak ve platform tabanı kaygan malzemeden temizlenir; basınçlı veya kimyasal temizlik üretici önerisi dışında uygulanmaz. Arıza işareti kapatılıp çalışmaya devam edilmez. Bakım kaydı teknik servise aktarılır, gerekiyorsa makine güvenli park alanına çekilir ve sözleşmedeki müdahale zinciri başlatılır." },
        ],
        ekBolumler: [
            { baslik: "Aliağa depo ve avlu işi karar tablosu", paragraflar: ["Bu tablo, ağır sanayi çevresindeki depo erişimini ağır üretim veya elleçleme anlatısından ayırarak makaslı platformun uygunluk sınırlarını gösterir."], tablo: { basliklar: ["Çalışma noktası", "Ana kontrol", "Uygun yaklaşım", "Durdurma nedeni"], satirlar: [["Kapalı raf koridoru", "Geçiş, dönüş ve zemin", "Akülü kompakt sınıf", "Koridor trafik ayrımı yok"], ["Açık depo cephesi", "Düzlük, taşıma ve hava", "Dış ortama uygun dikey erişim", "Zemin veya hava sınır dışı"], ["Tır yolu yakını", "Araç manevra zarfı", "Bariyer ve alternatif rota", "Hücreye araç girişi"], ["Sundurma altı", "Hedef altına yaklaşım", "Doğrudan dikey konum", "Yatay engel aşılamıyor"], ["Tozlu avlu", "Günlük kontrol ve temizlik", "Kayıtlı vardiya başlangıcı", "Güvenlik sistemi arızası"]] } },
            { baslik: "Depo işi için saha izin sınırını doğru çizmek", paragraflar: ["Aliağa adı tek başına her işin aynı ağır sanayi izin rejimine tabi olduğunu göstermez. Çalışmanın yapılacağı gerçek tesis, parsel ve alan sınıfı işverenden doğrulanır. Giriş evrakı, operatör şartı, kişisel koruma ve iş izni o alanın yetkili prosedürüne göre hazırlanır. Komşu tesiste geçerli bir kural kopyalanmaz; daha gevşek olduğu da varsayılmaz.", "İş planı depo sınırından üretim, iskele veya sınıflandırılmış başka bir alana taşarsa mevcut değerlendirme durdurulur. Yeni hedef için alan yetkilisi, ekipman uygunluğu ve izinler yeniden ele alınır. Kiralanan makinenin sahada bulunması, tanımlanmamış alana girme izni vermez. Bu sınır harita, rota veya iş emrinde görünür tutulur." ] },
            { baslik: "Hava nedeniyle duran işi ve kira süresini yönetmek", paragraflar: ["Dış işlerde program yalnız ideal havaya göre kurulmaz. Öncelikli hedefler sıralanır, kapalı alanda yapılabilecek işler ayrı tutulur ve duruş halinde makinenin güvenli park yeri belirlenir. Operatör sepeti indirir, enerjiyi keser ve bariyerin devam edip etmeyeceğini saha sorumlusuyla kararlaştırır. Çalışma yeniden başlamadan günlük kontroller tekrarlanır.", "Kiralama teklifinde uzatma bildirimi, erken iade, ikame ve hava beklemesinin nasıl ele alınacağı açıkça yazılır. Sağlayıcı belirli hava sonucu vaat etmez; işveren de üretici sınırını aşan çalışmayı talep etmez. Böylece ticari karar ile güvenlik kararı birbirine karıştırılmaz ve duruş anında ekip üzerinde pazarlık baskısı oluşmaz." ] },
        ],
        sss: [
            { soru: "Aliağa'daki depo ile açık avlu için aynı platform kullanılabilir mi?", cevap: "Ancak teslim edilen model her iki ortamın zemin, eğim, hava, emisyon, ölçü ve çalışma yüksekliği koşullarını karşılıyorsa kullanılabilir. Kapalı depoya uygun kompakt bir makine dış avludaki yüzeye otomatik olarak uygun sayılmaz. İki rota ayrı ayrı keşfedilir ve üreticinin dış ortam kullanım koşulları okunur. Uygunluk kesişmiyorsa işi bölmek veya iki farklı sınıf planlamak daha güvenlidir; tek nakliye isteği teknik sınırların önüne geçmez." },
            { soru: "Açık avluda rüzgâr varken çalışılabilir mi?", cevap: "Karar teslim edilen makinenin üretici verisi, saha prosedürü ve o andaki koşula göre verilir. Genel bir bölge tahmini tek başına yeterli değildir. Operatör koşulları vardiya başlangıcında ve değişim görüldüğünde yeniden değerlendirir. Sınır aşılırsa sepet indirilir ve makine güvenli duruma alınır. İş programı veya kamyon sırası, üretici sınırının üzerinde devam gerekçesi olamaz; yeniden başlama ancak şartlar uygun olduğunda yapılır." },
            { soru: "Makaslı platformla sundurmanın arkasına uzanabilir miyiz?", cevap: "Makaslı platform esas olarak dikey erişim sağlar; güverte uzatması yalnız üreticinin tanımladığı kullanım ve yük sınırlarında ek erişim sunar. Sabit engel hedefin altına yaklaşmayı önlüyorsa çalışanın korkuluğa çıkması, merdiven kullanması veya dışarı aşırı uzanması yasaktır. Hedefin yatay uzaklığı keşifte ölçülür. Güvenli dikey konum yoksa uygun bomlu platform ya da başka yöntem değerlendirilir; yanlış model davranışla telafi edilmez." },
            { soru: "Tır trafiğini tamamen durdurmadan cephe bakımı yapılabilir mi?", cevap: "Çalışma hücresi ile araç rotası fiziksel olarak ayrılabiliyor ve güvenli alternatif yol kurulabiliyorsa avlunun diğer bölümü çalışabilir. Kör köşe, geri manevra ve düşen cisim alanı hesaba katılır. Gözcü atanır, bariyer korunur ve platform yükselmişken hücreye araç alınmaz. Alternatif rota yoksa ilgili hareket penceresi durdurulmalıdır. Yalnız reflektif yelek veya ikaz lambası, ağır araçla ortak alan riskini yeterince azaltmaz." },
            { soru: "Toz platforma zarar verirse ne yapmalıyız?", cevap: "Operatör kumanda, basamak, sensör ve güvenlik sistemlerinde anormallik görürse makineyi güvenli konuma alır ve teknik destek kaydı açar. Yetkisiz sökme, sensörü devre dışı bırakma veya arızayı gizleme yapılmaz. Üreticiye uygun rutin temizlik uygulanır; hidrolik iz ya da güvenlik sistemi sorunu varsa kullanım durur. Servis veya ikame sırası sözleşmeye göre yürür. Tozlu ortam bilgisi talepte verilirse bakım ve kontrol düzeni baştan buna göre planlanabilir." },
            { soru: "Depo işi sonradan üretim sahasına taşınırsa devam edebilir miyiz?", cevap: "Hayır, mevcut depo planı yeni alan için otomatik yetki oluşturmaz. Üretim sahasının izinleri, tehlike kaynakları, zemin, ekipman ve operatör şartları yeniden doğrulanır. Gerekirse farklı makine ve belge seti hazırlanır. Değerlendirme tamamlanana kadar platform tanımlı sınırda kalır. İş kapsamındaki değişiklik yazılı iş emrine ve risk planına işlenir; sahadaki ekibin sözlü talebiyle bilinmeyen bölgeye geçiş yapılmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Aliağa'nın ağır sanayi ve lojistik karakteri kamuya açıktır; metin yalnız depo ve açık avlu dikey erişimine odaklanır. Tesis, izin sınıfı, zemin, hava değeri, vardiya veya trafik hacmi uydurulmamıştır.",
    },
    "bolge:gaziemir-ege-serbest-bolgesi": {
        h1: "Gaziemir Ege Serbest Bölgesi Depolarında Makaslı Platform Kiralama",
        giris: "Gaziemir'deki Ege Serbest Bölgesi içinde bir depo rafına erişim planlarken makinenin yüksekliği kadar giriş ve kayıt zinciri de önem taşır. Platformun sahaya hangi araçla geleceği, sürücü ve ekip bilgilerinin ne zaman bildirileceği, teslim noktasından depoya kadar kim tarafından refakat edileceği ve iş bitince çıkışın nasıl kayda alınacağı önceden netleşmelidir. Depo içinde ise raf koridoru, palet akışı, kaplamalı zemin ve yangın tesisatı aynı çalışma hacmini paylaşır. Biz bu talepleri iki bağlı plan halinde kuruyoruz: önce saha kabulü ve belge akışı, ardından koridor bazlı güvenli erişim. Makine seçimi gerçek hedef kotu, en dar açıklık, dönüş alanı, zemin ve platform yüküne dayanır; serbest bölge adı tek başına belirli bir model gerektirmez. İşletmeye özgü prosedürler ilgili saha sorumlusundan yazılı alınır, kamuya açık olmayan kural veya süre varsayılmaz. Böylece doğru makine kapıya zamanında gelir, kabul tamamlandığında doğrudan belirlenmiş park alanına geçer ve depo operasyonuyla çakışmadan raf, aydınlatma ya da çatı altı bakım turuna başlar.",
        maddeler: [
            { baslik: "Giriş dosyasını sevkiyattan önce kapatmak", metin: "Araç ve personel bildirimi, ekipman belgeleri, operatör yeterliği ve iş emri saha yönetiminin istediği biçimde önceden hazırlanır. Gerekli listenin güncel hali tesis yetkilisinden alınır; başka bir sahadaki uygulamanın burada da geçerli olduğu varsayılmaz. Plaka veya personel değişirse bildirim yenilenir. Makineyi evrak eksikken kapıya göndermek, nakliye aracını bekletir ve planlanan koridor penceresini tüketir. Kabul onayı, teslim kişisi ve iletişim zinciri sevkiyat çıkmadan teyit edilerek bu belirsizlik azaltılır." },
            { baslik: "Depo rotasını giriş kapısından hedefe kadar ölçmek", metin: "Platform yalnız raf arasında değil, dış teslim noktasından depo içine uzanan bütün rotada uygun olmalıdır. Kapı yüksekliği, eşik, rampa eğimi, dönüş köşesi, kolon arası ve koridor başı ölçülür. Zemindeki kapak ve derzler işaretlenir; taşıma yeterliği bilinmeyen bölgeden geçiş yapılmaz. Makinenin kapalı ölçüleri ve üretici eğim sınırı bu rota ile karşılaştırılır. Bir engel varsa daha kompakt sınıf, alternatif kapı veya farklı indirme noktası değerlendirilir; teslim günü deneme yanılma yapılmaz." },
            { baslik: "Stok doğruluğunu bozmadan raf hücresi açmak", metin: "Bakım yapılacak raf gözünün boşaltılması depo yönetiminin stok prosedürüyle yürütülür. Palet başka konuma alınırken adres kaydı güncellenir ve iş bitince hangi yükün nereye döneceği belirlenir. Platform ekibi ürünü kendiliğinden taşımaz. Boşaltılan hücre iki uçtan ayrılır; forklift yolu alternatif koridora verilir. Üstteki çalışma tamamlandıktan sonra alet sayımı, bağlantı kontrolü ve alan temizliği yapılır. Depo sorumlusu hücreyi teslim almadan raf tekrar yüklenmez. Böylece erişim işi envanter karışıklığı üretmez." },
            { baslik: "Temiz kapalı alana uygun ekipman düzeni kurmak", metin: "Kapalı depoda akülü güç, uygun lastik ve sızıntı kontrolü temel seçim başlıklarıdır. Günlük kontrolde hidrolik iz, teker hasarı, korkuluk, kapı ve acil indirme sistemi gözden geçirilir. Sepete gereksiz ambalaj alınmaz; küçük parçalar kapalı kutuda tutulur. Şarj alanı stoktan, yaya yolundan ve forklift trafiğinden ayrılır, bağlantı üreticinin talimatına göre yapılır. Depoya ait temizlik veya kıyafet kuralı varsa işe başlamadan ekibe aktarılır. Uygunsuzluk görülürse makine yükseltilmeden sorumluya bildirilir." },
            { baslik: "Çıkış ve iade zincirini iş planına katmak", metin: "Serbest bölge içindeki işin kapanışı, platformun son raftan inmesiyle tamamlanmaz. İş emri sonuçları kaydedilir, geçici olarak taşınan stokların devri depo sorumlusuna bırakılır ve makine temiz park alanına alınır. İade aracının plaka ve zaman bildirimi gerekiyorsa önceden yapılır. Anahtar, şarj durumu, sayaç ve görünür hasarlar teslim formuna yazılır. Çıkış belgesini kimin kapatacağı netleştirilir. Bu son adımlar planlanmadığında bitmiş makine sahada gereksiz gün bekleyebilir ve yeni sevkiyat zinciri aksayabilir." },
        ],
        ekBolumler: [
            { baslik: "Serbest bölge depo erişim kontrol tablosu", paragraflar: ["Aşağıdaki sıra, saha kabulü ile depo içi güvenli çalışmanın birbirinden kopmamasını sağlar. Kesin belge listesi ilgili yönetimden alınır."], tablo: { basliklar: ["Aşama", "Doğrulanacak bilgi", "Sorumlu temas", "Kayıt"], satirlar: [["Sevkiyat öncesi", "Araç, kişi ve ekipman şartları", "Tesis kabul yetkilisi", "Onaylı bildirim"], ["Teslim", "İndirme ve refakat noktası", "Saha sorumlusu", "Teslim formu"], ["Depo rotası", "Kapı, eğim ve dönüş ölçüsü", "Depo yöneticisi", "Ölçülü güzergâh"], ["Raf işi", "Boş hücre ve alternatif trafik", "Operasyon sorumlusu", "İş emri listesi"], ["İade", "Çıkış saati ve araç kaydı", "Kabul ve güvenlik", "Kapanış formu"]] } },
            { baslik: "Kabul süresi ile kira süresini karıştırmamak", paragraflar: ["Teklif hazırlanırken saha kabulü için gereken hazırlık iş programına dahil edilir, ancak doğrulanmamış sabit bir bekleme süresi uydurulmaz. Belgeler tamamlanmadan sevkiyat çıkarmak yerine planlanan çalışma penceresiyle kabul onayı eşleştirilir. Depo ekibi de ilk koridoru, parçaları ve bariyer düzenini makine gelmeden hazırlar.", "İş birden fazla güne yayılıyorsa makinenin gece parkı, anahtar yönetimi, şarj ve erişim yetkisi belirlenir. Tatil veya vardiya değişimi çıkış işlemini etkileyebiliyorsa iade zamanı önceden teyit edilir. Günlük bedel kadar bekleme, nakliye ve yeniden giriş ihtimali de toplam planın parçasıdır; uzatma ancak yazılı uygunlukla yapılır." ] },
            { baslik: "Belge, makine ve teknik iş sorumluluklarını ayırmak", paragraflar: ["Kiralayan taraf uygun ve belgeli ekipmanı, kararlaştırılmış operatör modelini ve teknik destek zincirini sağlar. Tesis, giriş yetkisini, depo trafiğini, stok hareketini ve iş alanının teslimini yönetir. Raf veya tesisat işini yapan ekip kendi teknik yönteminden sorumludur. Platform operatörü bu teknik onayın yerine geçmez.", "Başlangıç toplantısında acil indirme görevlisi, zemin gözcüsü, izin sahibi ve işi durdurabilecek kişiler isim veya rol bazında belirlenir. Prosedür değişikliği sözlü söylentiyle değil yetkili saha temasından doğrulanır. Bu ayrım, güvenlik kontrolünün yalnız kapıdaki evraka indirgenmesini önler ve depo içindeki gerçek riski görünür tutar." ] },
        ],
        sss: [
            { soru: "Ege Serbest Bölgesi'ne platform getirirken hangi belgeler gerekir?", cevap: "Kesin listeyi ilgili tesis ve saha kabul biriminden güncel olarak almak gerekir; araç, sürücü, operatör, ekipman ve iş emri bilgileri istenebilir. Periyodik kontrol ve operatör yeterlik kayıtları hazır tutulur, fakat başka tesiste kabul edilen dosyanın burada otomatik geçerli olduğu varsayılmaz. Talep açıldığında iletişim kişisini paylaşırsanız belge zinciri sevkiyat öncesinde eşleştirilir. Eksik onayla araç kapıya gönderilmez." },
            { soru: "Serbest bölge deposunda yalnız akülü platform mu kullanılır?", cevap: "Kapalı depo için emisyonsuz akülü sınıf genellikle uygun başlangıçtır; kesin karar ortam, saha kuralı, zemin, hedef ve üretici talimatına göre verilir. Güç tipi tek ölçüt değildir. Şase, kapalı yükseklik, dönüş alanı, platform kapasitesi ve lastik de doğrulanır. İş dış alana taşıyorsa aynı makinenin zemin ve eğim uygunluğu ayrıca incelenir. Saha yetkilisinin daha sıkı şartı varsa o şart uygulanır." },
            { soru: "Raf gözlerini boşaltmadan üstte bakım yapılabilir mi?", cevap: "Hedefe ve risk değerlendirmesine bağlı olmakla birlikte düşebilecek parça, platform yaklaşımı ve raf hasarı nedeniyle ilgili hücrelerin kontrollü biçimde boşaltılması güvenli planın temelidir. Stok taşımasını depo ekibi kendi kayıt sistemiyle yapar. Platform ekibi ürün adresini değiştirmez. Alan temizlenip bariyerlenir; iş sonunda alet sayımı ve teknik kabul yapılmadan yük geri konulmaz. Böylece ürün, çalışan ve stok doğruluğu birlikte korunur." },
            { soru: "Makine girişte beklerse kira nasıl yönetilir?", cevap: "Başlangıç, bekleme ve sorumluluk koşulları teklif ve sözleşmede açıkça tanımlanmalıdır. Biz kabul onayını ve teslim kişisini sevkiyattan önce doğrulayarak bekleme riskini azaltırız. Son dakika araç veya personel değişikliği varsa bildirim yenilenir. Saha kaynaklı belirsizlik ortaya çıkarsa taraflar kayıt oluşturur ve yeni çalışma penceresini kararlaştırır; doğrulanmamış bir kapı süresi için peşinen kesin vaat verilmez." },
            { soru: "İş birkaç vardiya sürerse anahtar kimde kalır?", cevap: "Anahtar ve makine erişimi başlangıçta isim ya da rol bazında belirlenir. Operatörsüz kullanımda yalnız yetkilendirilmiş personel makineyi çalıştırır; vardiya devri kontrol formuyla yapılır. Makine iş bitiminde tamamen indirilmiş, kapatılmış ve trafiğe kapalı park alanında bırakılır. Şarj görevi de açıkça atanır. Anahtarın ortak alanda bırakılması, yetkisiz kullanım ve günlük kontrolün atlanması riskini doğurur." },
            { soru: "İade aracı için yeniden bildirim gerekir mi?", cevap: "Güncel gereklilik saha kabul biriminden teyit edilir. İade aracı veya sürücüsü ilk teslimattan farklıysa yeni bildirim gerekebilir; bu nedenle araç bilgisi belli olur olmaz paylaşılır. Yükleme noktası, refakat ve çıkış kapanışı da aynı anda planlanır. Makine son anda kapıya çıkarılmaz. Kayıt tamamlanmadan yapılan araç değişikliği beklemeye yol açabileceği için iade süreci iş programının gerçek bir adımı olarak ele alınır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Ege Serbest Bölgesi'nin Gaziemir'deki serbest bölge niteliği kamuya açıktır; giriş prosedürü ilgili saha yetkilisinden doğrulanır. Tesis, belge listesi, bekleme süresi, raf yüksekliği veya operasyon hacmi uydurulmamıştır.",
    },
    "bolge:itob-osb": {
        h1: "İTOB OSB Orta Ölçekli Depolarında Raf Bakımı İçin Makaslı Platform",
        giris: "İTOB Organize Sanayi Bölgesi'ndeki orta ölçekli bir depoda yüksekte bakım, büyük bir dağıtım merkezinin filo mantığıyla değil, sınırlı alanı doğru sıraya koyan yalın bir programla çözülür. Aynı koridor gün içinde mal kabul, toplama ve sevkiyat için kullanılabilir; raf üstündeki bağlantı, yönlendirme levhası, aydınlatma veya tesisat işi ise bu akıştan güvenli bir pencere ister. Biz talebi makine metresinden önce görev listesiyle açıyoruz: hedef hangi raf sırasında, altındaki göz dolu mu, yaklaşım düz mü, platform kapı ve dönüş noktasından geçebiliyor mu? Ardından birbirine yakın işler tek kiralama döneminde gruplanır. Bu yaklaşım, küçük bir bakım için gereğinden uzun kira yazılmasını ve yanlış ölçülü makinenin kapıda kalmasını önler. İTOB OSB hakkında tesis özelinde yükseklik, yoğunluk ya da vardiya varsayımı yapmadan; gerçek fotoğraf, ölçü ve depo sorumlusunun iş planıyla ilerleriz. Sonuç, operasyonun tamamını durdurmaya çalışmayan, fakat platform ile hareketli depo araçlarını aynı hücrede buluşturmayan ölçülebilir bir raf bakım düzenidir.",
        maddeler: [
            { baslik: "Bakım listesini tek seferde görünür kılmak", metin: "Dağınık arızalar ayrı ayrı sevkiyat oluşturduğunda nakliye ve tesis kabulü gerçek işten daha büyük maliyete dönüşebilir. Depo sorumlusu raf kodu, hedef türü ve önceliğiyle bir liste hazırlar; bakım ekibi gerekli bağlantı parçası, armatür veya etiketi bu listeye bağlar. Aynı koridordaki işler arka arkaya, farklı makine isteyen hedefler ayrı bloklarda planlanır. Acil güvenlik konusu rutin işlerden ayrılır. Böylece teklif yalnız tahmini gün sayısına değil, görülebilen iş paketine dayanır ve tamamlanma kaydı satır satır tutulur." },
            { baslik: "Orta depoda kompakt makinenin avantajını doğrulamak", metin: "Kompakt şase çoğu zaman raf arası için yararlıdır, ancak küçük görünmek her hedefe uygun olmak anlamına gelmez. Çalışma yüksekliği, platform kapasitesi, uzatılabilir güverte kullanımı ve eğim sınırı birlikte okunur. Makinenin kapalı yüksekliği giriş kapısı ve varsa iç geçişlerle karşılaştırılır; koridor başında dönüş zarfı kontrol edilir. Sepet uzatması kullanılacaksa yükün dağılımı üretici talimatına göre korunur. İhtiyacın üzerinde büyük bir model manevrayı zorlaştırırken yetersiz sınıf çalışanı korkuluk üstüne uzanmaya teşvik eder; ikisi de kabul edilmez." },
            { baslik: "Mal kabul ve sevkiyat penceresinden kaçınmak", metin: "Platform rotası yükleme kapılarının önünden geçiyorsa teslim ve çalışma saati depo programıyla eşleştirilir. Kamyon hareketinin yoğun olduğu pencereye makine indirmek, hem rampayı kapatır hem yaya ile araç trafiğini artırır. Makine daha sakin aralıkta teslim alınır, belirlenmiş park yerine götürülür ve çalışma koridoru depo sorumlusunca boşaltılır. Operasyon önceliği değiştiğinde platform yükselmiş halde bekletilmez; sepet indirilir, alan emniyete alınır ve yeni pencere yazılı veya kayıtlı şekilde teyit edilir." },
            { baslik: "Raf altında temiz ve kontrollü çalışma hücresi kurmak", metin: "Üstte yapılan küçük bir müdahalede dahi vida, el aleti veya sökülen parça düşebilir. Bu nedenle yalnız makinenin teker çevresi değil, hedefin altındaki düşen cisim alanı da bariyer içine alınır. Raf gözlerindeki gevşek ürünler güvenli konuma alınır; platform korkuluğuna malzeme asılmaz. Zemindeki ambalaj, streç ve palet kıymıkları makine gelmeden temizlenir. Gözcü, yaklaşan depo araçlarını alternatif yola yönlendirir ve operatörle kararlaştırılmış işaretleri kullanır. Hücre taşınırken bütün bu düzen yeni konumda yeniden kurulur." },
            { baslik: "Kira bitişini depo devriyle kapatmak", metin: "Son hedef tamamlanınca iş yalnız makineyi park etmekle bitmez. Raf kodlu liste üzerinden sonuçlar kontrol edilir, tamamlanamayan noktanın nedeni yazılır ve sökülen parçaların sahadan ayrıldığı doğrulanır. Platform tamamen indirilir, temizlenir, şarj ve görünür hasar durumu kayda alınır. Yükleme aracının erişeceği alan sevkiyat trafiğini bozmayacak biçimde boş tutulur. İade saati, tesis çıkış prosedürü ve anahtar teslimi taraflarca teyit edilir. Bu kapanış, sonradan hangi hasarın raf işine, hangisinin ekipmana ait olduğu tartışmasını azaltır." },
        ],
        ekBolumler: [
            { baslik: "İTOB OSB depo bakım karar tablosu", paragraflar: ["Tablo, orta ölçekli bir depoda işi gereksiz büyütmeden hangi kanıtla karar verileceğini özetler. Model uygunluğu saha verileriyle kesinleştirilir."], tablo: { basliklar: ["Karar noktası", "Gerekli veri", "Uygulama", "Kaçınılan sorun"], satirlar: [["Makine boyutu", "Hedef ve geçiş ölçüsü", "Kompakt uygun sınıf", "Kapıda kalma veya yetişememe"], ["Çalışma zamanı", "Mal kabul ve sevkiyat planı", "Sakin operasyon penceresi", "Rampa çatışması"], ["Koridor kapanışı", "Alternatif toplama rotası", "İki uçlu bariyer", "Forkliftle aynı hücre"], ["İş süresi", "Raf kodlu görev listesi", "Komşu işleri gruplama", "Tekrarlı nakliye"], ["İade", "Çıkış ve yükleme düzeni", "Kayıtlı saha devri", "Belirsiz hasar ve bekleme"]] } },
            { baslik: "Kısa bakım paketinin gerçek süresini hesaplamak", paragraflar: ["Bir armatür değişimi kısa sürebilir; fakat evrak kabulü, indirme, günlük kontrol, alan ayırma ve iade de programın parçalarıdır. Gün hesabı bu hazırlıkları yok sayarsa ekip hedefe ulaştığında kiralama penceresi tükenir. İş listesi önceden toplandığında aynı hazırlıkla birkaç komşu görev tamamlanabilir ve toplam maliyet daha anlaşılır hale gelir.", "Belirsiz arıza araştırması ile parçası hazır bakım da ayrılır. Teşhis yapılacaksa yedek süre bırakılır; parça hazırsa koridor sırası kesinleştirilir. Uzatma kararı son dakikaya kalmasın diye bildirim saati ve sonraki rezervasyon etkisi sözleşmede yer alır. Fiyat karşılaştırması yalnız günlük bedel üzerinden değil, nakliye ve kullanılabilir çalışma süresi üzerinden yapılır." ] },
            { baslik: "Operatörlü ve operatörsüz modelde görev paylaşımı", paragraflar: ["Operatörlü kiralamada makine kullanımını sağlayıcı tarafın yetkin personeli üstlenir; depo yine koridoru boşaltır, trafiği yönlendirir ve yapılacak teknik işi tarif eder. Operatörsüz modelde işverenin uygun belgeli ve makineye aşina personeli bulunmalıdır. Her iki durumda da raf müdahalesini yapacak teknik kişinin yetkisi ayrıca doğrulanır; platform operatörlüğü raf onarım uzmanlığı yerine geçmez.", "Başlangıç brifinginde acil indirme, günlük kontrol, anahtar yönetimi, şarj, gözcü ve işi durdurma yetkisi belirlenir. Vardiya değişirse yeni ekibe sözlü varsayımla değil kayıtlı devirle bilgi aktarılır. Sorumlulukların açık olması küçük depo ekibinde aynı kişinin farkında olmadan çelişen görevler üstlenmesini önler." ] },
        ],
        sss: [
            { soru: "İTOB OSB'de bir günlük raf işi için kiralama yapılabilir mi?", cevap: "Uygun makine ve sevkiyat programı varsa kısa süreli kiralama mümkündür. Ancak bir günün içine tesis kabulü, indirme, kontrol, bariyer kurulması ve iade hazırlığı da girer. Bu yüzden hedefleri raf koduyla önceden toplamak ve parçaları hazır etmek gerekir. Tek nokta yerine aynı erişim sınıfındaki komşu bakım işleri birleştirildiğinde nakliye daha verimli kullanılır. Kesin süre, fotoğraf ve görev listesi görülmeden yalnız sözlü tahminle garanti edilmez." },
            { soru: "Standart platform raf koridorunda döner mi?", cevap: "Bunu yalnız koridor genişliği belirlemez. Makinenin dış ölçüsü, iç ve dış dönüş yarıçapı, koridor başı boşluğu, raf koruyucuları ve yerdeki palet taşmaları birlikte incelenir. Girişten hedefe kadar en dar noktalar ölçülür. Dönüş yetersizse daha kompakt sınıf, farklı giriş yönü veya çalışma sırası seçilir. Makineyi sahada zorlayarak döndürmek raf ayağına ve ekipmana çarpma riski yaratır; uygunluk sevkiyattan önce doğrulanır." },
            { soru: "Bakım sırasında aynı koridordan forklift geçebilir mi?", cevap: "Hayır, platformun çalışma hücresi ile forklift yolu çakıştırılmaz. Koridor iki uçtan fiziksel olarak ayrılır ve alternatif rota depo yönetimince duyurulur. Forkliftin acil erişimi gerekiyorsa platform tamamen indirilir, aletler güvene alınır ve alan sorumlu kişiler arasında devredilir. Geçiş bittikten sonra zemin ve bariyer yeniden kontrol edilmeden çalışma başlamaz. Yalnız ikaz lambasına güvenmek, hareketli araçla yükseltilmiş platform arasındaki riski yönetmez." },
            { soru: "Sepete bakım malzemesi ve iki kişi alınabilir mi?", cevap: "Yalnız seçilen modelin platform kapasitesi, kişi sayısı ve yük dağılımı buna izin veriyorsa alınabilir. İnsanların, aletlerin ve parçaların toplam ağırlığı hesaplanır; güverte uzatmasının kendi yük sınırı ayrıca okunur. Uzun veya hacimli parçalar korkuluk dışına gelişigüzel taşırılmaz. Gerekirse malzeme küçük partiler halinde hazırlanır. Kapasite hesabı katalogdaki genel isimden değil, teslim edilen makinenin veri plakası ve kullanım kılavuzundan yapılır." },
            { soru: "Operatörsüz kiralamada kısa bir tanıtım yeterli midir?", cevap: "Teslim tanıtımı makinenin kumandalarını ve acil düzenini gösterir, ancak gerekli operatör yetkinliğinin yerine geçmez. İşveren uygun belgeye, görevlendirmeye ve saha eğitimine sahip kişiyi seçmelidir. Kullanıcı işe başlamadan günlük kontrolü yapar ve üretici talimatlarına uyar. Belgeli personel yoksa operatörlü seçenek değerlendirilir. Başka bir platform tipindeki deneyimin teslim edilen makine için otomatik yeterlilik sayılmaması gerekir." },
            { soru: "İş uzarsa aynı makineyi tutabilir miyiz?", cevap: "Uzatma, makinenin sonraki rezervasyonu ve yazılı bildirim zamanına bağlıdır. İhtimal görüldüğünde son gün yerine erken haber verilmelidir. Uygunluk varsa yeni süre ve bedel teyit edilir; yoksa işin güvenli kapanışı veya uygun ikame planlanır. Onaysız biçimde makineyi sahada tutmak sonraki sevkiyatı ve sorumluluk zincirini bozar. Belirsiz teşhis işlerinde uzatma senaryosunu ilk teklifte konuşmak bu riski azaltır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. İTOB'un organize sanayi bölgesi niteliği kamuya açıktır; raf işi gruplama, trafik ayrımı, kapasite kontrolü ve teslim devri genel güvenli çalışma uygulamalarıdır. Tesis özelinde yükseklik, vardiya, yoğunluk veya süre uydurulmamıştır.",
    },
    "bolge:pancar-osb": {
        h1: "Pancar OSB Depolarında Raf Bakımı İçin Makaslı Platform Kiralama",
        giris: "Pancar Organize Sanayi Bölgesi çevresindeki bir depo için yüksekte çalışma planı, yalnızca tavan kotuna bakılarak kurulamaz. Raf sıraları, palet taşmaları, yangın tesisatı, aydınlatma hatları ve forklift yolları aynı hacmi paylaşır. Bu nedenle doğru makaslı platformu seçmek kadar, makinenin hangi kapıdan gireceğini, hangi koridorda döneceğini ve iş sürerken hangi raf gözlerinin boşaltılacağını belirlemek gerekir. Biz Pancar OSB taleplerini depo krokisi, hedef listesi ve günlük sevkiyat akışıyla birlikte ele alıyoruz. Amaç bütün depoyu kapatmak değil; raf kontrolü, bağlantı sıkma, etiketleme, armatür ve tesisat işlerini güvenli çalışma hücrelerine bölerek ilerletmektir. Makine sınıfı gerçek hedef yüksekliğine, en dar geçişe, zemin durumuna ve sepette bulunacak kişi ile malzemeye göre doğrulanır. Böylece gereğinden büyük bir platformun koridorda sıkışması da küçük bir makinenin hedefe yetişmemesi de daha sevkiyat yapılmadan önlenir. Bu sayfa, Pancar OSB'deki tesislere ilişkin özel rakam veya işletme varsayımı kurmadan, depo ve raf işi için uygulanabilir kiralama düzenini anlatır.",
        maddeler: [
            { baslik: "Raf gözlerini iş emrine göre bölmek", metin: "Raf bakımında aynı sıranın bütün gözleri eşit öncelikte değildir. Eğilmiş koruyucu, gevşek bağlantı, hasarlı travers etiketi veya tesisat erişimi ayrı iş emirleri olarak işaretlenir. Konumlar koridor, sıra ve göz koduyla listeye alınır; gerekli malzeme başlamadan sepete hazırlanır. Birbiriyle komşu işler tek çalışma hücresinde tamamlanınca platformun gereksiz yürüyüşü azalır. Kritik görülen hasar için rafın kullanım kararı yetkili teknik değerlendirmeye bırakılır; makaslı platform yalnız güvenli erişim aracıdır, rafın taşıma yeterliliğine dair kendiliğinden onay üretmez." },
            { baslik: "Koridor genişliği ile dönüş alanını birlikte ölçmek", metin: "Katalogdaki şase genişliği tek başına geçiş garantisi değildir. Raf ayağı koruyucuları, yerdeki paletler, kolon çıkıntıları ve açık yangın dolapları kullanılabilir açıklığı daraltabilir. Ayrıca makinenin koridora girmeden önce doksan derecelik dönüş yapacağı baş boşluğu gerekir. Saha keşfinde kapı, rampa, ana yol, koridor ve son yaklaşım ayrı ayrı ölçülür. En dar değer makine seçimini belirler; dönüş mümkün değilse daha dar şase veya farklı giriş sırası değerlendirilir. Ölçülerin fotoğrafla kaydedilmesi teslimat günü yapılan tahminleri ortadan kaldırır." },
            { baslik: "Palet hareketi ile yüksekte çalışmayı ayırmak", metin: "Raf koridorunda platform yükselmişken forklift veya transpaletin aynı hücreye girmesine izin verilmez. Çalışılacak gözler önceden boşaltılır, koridor iki uçtan bariyerlenir ve depo yönetimi alternatif toplama rotasını duyurur. Platform yalnız tamamen indirilmiş durumda yer değiştirir; bariyer yeni hücreye taşındıktan ve zemin yeniden kontrol edildikten sonra yükselir. Bu düzen, yukarıdaki ekibi hareketli yükten korurken depo operasyonunun diğer koridorlarda sürmesine imkân verir. Acil ihtiyaç halinde palet alma önceliği doğarsa platform indirilir ve alan resmen devredilir." },
            { baslik: "Zemin, akü ve lastik koşullarını doğrulamak", metin: "Depo içinde emisyonsuz akülü makine ve kaplamayı kirletmeyen lastik seçimi öne çıkar. Ancak düzgün görünen zeminde genleşme derzi, kırık kapak, rampa ağzı veya seviye farkı bulunabilir. Güzergâh yürünür, taşıma yeterliği belirsiz kapaklar işaretlenir ve eğimli geçişler üretici sınırlarına göre değerlendirilir. Şarj noktası yaya ve forklift yolundan ayrılmış bir park alanında kurulur; uzatma kablosu koridora serilmez. Vardiya süresi ile şarj penceresi birlikte planlanınca değerli bakım saatinin ortasında akü nedeniyle bekleme yaşanmaz." },
            { baslik: "Teslim alma ve kapanış kaydı oluşturmak", metin: "Makine tesise girdiğinde periyodik kontrol belgesi, acil indirme düzeni, kumandalar ve görünür hasarlar sorumlu kişiyle kontrol edilir. Operatör günlük kontrolünü işe başlamadan yapar; sorun varsa kullanım yerine servis süreci açılır. Her çalışma hücresi bittiğinde alet ve bağlantı parçaları sayılır, bariyer kaldırılmadan raf önü temizlenir ve tamamlanan iş emri kapatılır. Son gün makine şarja uygun seviyede, temiz ve erişilebilir yükleme noktasına alınır. Bu kayıt zinciri hem bakım ekibinin hangi gözü tamamladığını hem kiralık ekipmanın hangi durumda teslim edildiğini açık tutar." },
        ],
        ekBolumler: [
            { baslik: "Pancar OSB raf işi seçim tablosu", paragraflar: ["Aşağıdaki tablo, makine modelinden önce doğrulanması gereken saha bilgisini gösterir. Kesin seçim üreticinin yük diyagramı ve yerinde ölçüyle yapılır."], tablo: { basliklar: ["İş durumu", "Kontrol", "Planlama kararı", "Teslimat kanıtı"], satirlar: [["Dar raf koridoru", "Net açıklık ve dönüş başı", "Dar şase ve uygun rota", "Ölçülü fotoğraf"], ["Üst raf bağlantısı", "Gerçek hedef kotu", "Yeterli çalışma yüksekliği", "İşaretli raf krokisi"], ["Aktif toplama alanı", "Forklift ve yaya akışı", "Bölünmüş çalışma hücresi", "Onaylı alternatif rota"], ["Kaplamalı zemin", "Derz, kapak ve yüzey", "Uygun lastik ve güzergâh", "Teslim öncesi zemin turu"], ["Vardiyalı bakım", "Kullanım ve şarj aralığı", "Akü planı ve park yeri", "Günlük kontrol formu"]] } },
            { baslik: "Bir günlük iş ile dönemsel raf programını ayırmak", paragraflar: ["Tek noktadaki etiket veya bağlantı işiyle bütün raf sıralarını kapsayan kontrol aynı kiralama biçimine sokulmamalıdır. Kısa işte nakliye, tesis girişi ve teslim alma toplam sürenin önemli bölümünü oluşturur; bu yüzden erişilebilen komşu işler aynı güne toplanır. Dönemsel programda ise koridorlar vardiyalara bölünür, tamamlanan hücreler işaretlenir ve makinenin boş kalacağı günler önceden çıkarılır.", "Süre hesabı yalnız sepette geçirilen dakikaya dayanmaz. Paletin boşaltılması, bariyer kurulması, malzemenin hazırlanması ve alanın yeniden operasyona verilmesi de takvime yazılır. Teklifte günlük, haftalık veya daha uzun süre seçenekleri bu gerçek akış üzerinden karşılaştırılır; erken iade, uzatma ve ikame koşulları başlamadan yazılı hale getirilir." ] },
            { baslik: "Raf bakımında yetki sınırlarını korumak", paragraflar: ["Platform operatörü makinenin güvenli kullanımından sorumludur; rafın onarım yöntemini veya yeniden yüklenebilirliğini tek başına belirlemez. Hasarlı bileşenler yetkili raf uzmanının yöntemine göre değiştirilir, depolama ekibi ilgili gözleri kullanıma kapatır ve işveren alan trafiğini yönetir. Kiralama ekibi uygun makineyi, belge setini ve gerektiğinde operatörü sağlar.", "Bu rol ayrımı başlangıç toplantısında kayda alınır. Acil indirmeyi kimin uygulayacağı, zemin gözcüsünün kim olduğu, işi kimin durdurabileceği ve vardiya sonunda anahtarın kime teslim edileceği açıkça belirlenir. Böylece hız baskısı teknik kararların önüne geçmez." ] },
        ],
        sss: [
            { soru: "Pancar OSB'deki raf koridorumuz için platformu nasıl seçersiniz?", cevap: "Önce hedef yüksekliğini, en dar net koridoru, koridor başındaki dönüş alanını, giriş kapısını ve zemin güzergâhını isteriz. Raf ayağı koruyucusu ve palet taşması gibi gerçek engeller ölçüye dahil edilir. Sepetteki kişi, alet ve malzemenin toplamı üreticinin platform kapasitesiyle karşılaştırılır. Bu bilgiler fotoğraf ve krokide doğrulandıktan sonra çalışma yüksekliği ile şase sınıfı birlikte seçilir; yalnız tavan yüksekliğine bakarak model gönderilmez." },
            { soru: "Depoyu tamamen kapatmadan raf bakımı yapılabilir mi?", cevap: "Evet, iş koridor ve hücrelere ayrılabiliyorsa diğer alanlar çalışmayı sürdürebilir. Platformun bulunduğu koridor iki uçtan ayrılır, ilgili raf gözleri boşaltılır ve forkliftler için başka rota duyurulur. Hücre değiştirilirken sepet indirilir ve bariyer yeniden kurulur. Depo yönetiminin trafik yetkisi sürer; acil palet ihtiyacında alan karşılıklı devirle açılır. Aynı hücrede platform ve forklift eşzamanlı çalıştırılmaz." },
            { soru: "Rafın hasarlı olup olmadığına operatör karar verebilir mi?", cevap: "Hayır. Operatör gözle görülen sorunu bildirebilir ve güvenli olmayan alanda çalışmayı durdurabilir; rafın taşıma kapasitesi, onarım yöntemi ve yeniden kullanıma açılması yetkili teknik değerlendirme gerektirir. Platform kiralama, bu mühendislik kararının yerine geçmez. İş emrinde onaylayan kişi ve uygulanacak parça önceden belirtilirse ekip yalnız tanımlı müdahaleyi yapar ve sonuç fotoğrafla kapatılır." },
            { soru: "Akülü makine vardiya boyunca çalışır mı?", cevap: "Çalışma süresi model, akü durumu, sürüş mesafesi, kaldırma çevrimi ve ortam koşuluna bağlıdır; sabit bir saha süresi vaat edilmez. Günlük görev listesi ve vardiya araları paylaşıldığında şarj penceresi planlanır. Makine güvenli, havalandırılan ve trafikten ayrılmış alanda üretici talimatına göre şarj edilir. Kablo koridora uzatılmaz. Çok yoğun programda şarj düzeni veya alternatif makine ihtiyacı teklif aşamasında değerlendirilir." },
            { soru: "Makine arızalanırsa raf programı nasıl korunur?", cevap: "Önce makine güvenli duruma alınır, çalışma hücresi kapalı tutulur ve teknik destek kaydı açılır. Uzaktan kontrolle çözülemeyen durumda servis veya sözleşmede tanımlanan ikame süreci uygulanır. Ekip, makineyi yetkisiz biçimde onarmaya çalışmaz. Kritik koridorlar ve bekleme maliyeti talep sırasında bildirilirse ikame önceliği gerçek operasyon etkisine göre kurulabilir; süre ve kapsam teklif metninde açıkça yazılır." },
            { soru: "Teslimattan önce hangi bilgileri göndermeliyiz?", cevap: "Hedeflerin raf kodlu listesi, ölçülü koridor ve kapı fotoğrafları, zemin ve rampa bilgisi, vardiya saatleri, forklift rotası, sepette bulunacak kişi ile malzeme ve tesis giriş evrakı beklentisi yeterli bir başlangıç setidir. Şarj için uygun priz ve park konumu da belirtilmelidir. Bilgi değişirse sevkiyattan önce güncellenir; ölçüsü doğrulanmamış bir geçiş için tahmine dayalı uygunluk sözü verilmez." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Pancar OSB'nin organize sanayi bölgesi niteliği kamuya açıktır; raf koridoru ölçümü, trafik ayrımı, akülü platform ve teslim kontrolü sektör uygulamasıdır. Tesis adı, raf yüksekliği, vardiya veya kapasite rakamı uydurulmamıştır.",
    },
    "bolge:kemalpasa-osb": {
        h1: "Kemalpaşa OSB'de Makaslı Platform Kiralama",
        giris:
            "Kemalpaşa Organize Sanayi Bölgesi, İzmir'in doğu çıkışında Ankara karayolu üzerinde konumlanır ve İzmir'in en geniş sanayi alanlarından biridir. Bölgenin karakterini iki yapı tipi belirler: yüksek raflı lojistik depolar ve büyük açıklıklı üretim holleri. Her ikisinin de ortak özelliği beton zemin, 8-14 metre bandında tavan yüksekliği ve kapalı alanda emisyonsuz çalışma zorunluluğudur — bu üç koşul bir arada, akülü makaslı platformu Kemalpaşa'daki işlerin doğal makinesi hâline getirir. Alsancak ve Nemrut limanlarına karayolu bağlantısı, bölgeye konteyner elleçleme ve depolama yatırımlarını çekmiştir; makaslı platform taleplerinin önemli bölümü bu depoların raf montajı, aydınlatma, yangın sprinkleri ve çatı altı tesisat işlerinden gelir.",
        maddeler: [
            {
                baslik: "Yüksek raflı depoda metraj seçimi",
                metin:
                    "Lojistik depolarda raf üstü çalışma yüksekliği, en üst rafın kotuna sepet tabanı payı eklenerek hesaplanır: hedefin gerçek yüksekliği ölçülür, üzerine yaklaşık 2 metre uzanma payı konur. Kemalpaşa'daki yeni nesil depolarda 10-12 metre tavan yaygındır; bu 12-14 metre çalışma yüksekliği sınıfına denk gelir. Raf koridorunda çalışılacaksa makinenin şase genişliği koridor ölçüsüyle karşılaştırılmalıdır — dar koridorlu depolarda standart 1,15 m şase yerine 0,76-0,81 m dar şaseli modeller gerekir.",
            },
            {
                baslik: "Zemin: epoksi ve perdahlı beton",
                metin:
                    "Depo zeminleri çoğunlukla epoksi kaplama veya perdahlı betondur. Standart siyah lastik bu yüzeylerde iz bırakır; iz bırakmayan beyaz dolgu lastikli modeller tercih edilmelidir. Yükleme rampası çevresindeki kot farkları ve genleşme derzleri, çukur önleme (pothole protection) sisteminin devrede olmasını zorunlu kılar. Zemin taşıma kapasitesi asma kat üzerinde çalışılacaksa ayrıca kontrol edilir.",
            },
            {
                baslik: "Kapalı alanda güç tipi ve vardiya planı",
                metin:
                    "Depo içinde dizel makine kullanılamaz; akülü model zorunludur. Kemalpaşa'daki depoların çoğu çift vardiya çalıştığı için akü kapasitesi ve şarj noktası teslimat öncesi planlanmalıdır: makine her vardiya sonunda şarja bağlanmalı, derin deşarj edilmemelidir. Forklift trafiği yoğun depolarda çalışma alanının bariyerlenmesi hem İSG gereği hem operasyonun kesintisiz sürmesinin koşuludur.",
            },
            {
                baslik: "Ankara karayolu üzerinden hızlı sevkiyat",
                metin:
                    "Kemalpaşa OSB'nin İzmir-Ankara karayolu üzerindeki konumu, makine sevkiyatını hızlandırır: bölgeye düzenli sevkiyat hattımız vardır ve planlı bir sevkiyata ek makine eklemek, sıfırdan araç organize etmekten her zaman hızlıdır. Akülü makaslı modeller standart araçla taşınır; lowbed gerektirmez. Sabah teslim edilen makine aynı gün öğleden önce çalışmaya başlayabilir.",
            },
            {
                baslik: "Raf montajı projelerinde iş akışı",
                metin:
                    "Komple raf montajı, Kemalpaşa'daki en uzun soluklu platform işidir ve kendine özgü bir akışı vardır: önce zemin ankrajı (platform gerekmez), sonra dikme ve traves montajı (10-14 m çalışma, iki makine paralel çalışırsa süre yarıya iner), en sonda sprinkler ve aydınlatmanın rafa göre yeniden konumlanması. Montaj firmasıyla kiralama planını aynı masada kurmak — hangi hafta kaç makine, hangi koridorda — hem makine boş bekleme gününü hem toplam süreyi kısaltır. Raf yükseldikçe alt koridorlar daralacağı için dar şase ihtiyacı proje ortasında ortaya çıkabilir; bunu baştan öngörmek ikinci sevkiyat maliyetini önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kemalpaşa depo tiplerinde metraj seçim tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, bölgede yaygın yapı tiplerinde gereken çalışma yüksekliğini ve uygun makine sınıfını gösterir. Değerler tavan/raf kotuna ~2 metre uzanma payı eklenerek hesaplanmıştır; kesin seçim saha ölçüsüyle yapılır.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Tipik kot", "Gereken çalışma yüksekliği", "Uygun sınıf"],
                    satirlar: [
                        ["Standart depo / antrepo", "8 – 10 m tavan", "10 – 12 m", "Akülü makaslı 12 m"],
                        ["Yüksek raflı lojistik depo", "10 – 12 m tavan", "12 – 14 m", "Akülü makaslı 14 m"],
                        ["Dar koridorlu raf arası", "8 – 12 m raf", "10 – 14 m", "Dar şase (0,76 – 0,81 m) akülü makaslı"],
                        ["Üretim holü", "6 – 8 m tavan", "8 – 10 m", "Akülü makaslı 8 – 10 m"],
                        ["Yükleme kapısı üstü", "5 – 6 m", "7 – 8 m", "Akülü makaslı 8 m"],
                    ],
                },
            },
            {
                baslik: "Kiralama süresi ve maliyet planı",
                paragraflar: [
                    "Kemalpaşa'daki depo işlerinin çoğu iki tip süreye ayrılır: kısa nokta işleri (aydınlatma değişimi, tek koridor raf onarımı — 1-3 gün) ve dönemsel projeler (komple raf montajı, sprinkler revizyonu, depo devri — 2-8 hafta). Kısa işlerde günlük tarife doğaldır; ancak üç günü geçen her işte haftalık paket hemen her zaman daha ekonomiktir, çünkü nakliye ve hazırlık maliyeti tek güne değil haftaya yayılır. Dönemsel projelerde aylık tarife devreye girer ve günlük birim maliyet belirgin düşer.",
                    "Proje süresi belirsizse kural şudur: kısa minimum süreyle başlayıp uzatmak, uzun süreyle başlayıp erken iade etmekten avantajlıdır — erken iadede minimum süre bedeli geçerli olur. Uzatma ve erken iade koşulları sözleşmede baştan yazılıdır; teklif aşamasında hem kısa hem uzun senaryoyu karşılaştırmalı olarak gösteriyoruz. Aynı depoya birden fazla makine gerekiyorsa (örneğin raf montajında iki koridor paralel ilerleyecekse) nakliye tek organizasyonda birleştirilir ve toplam maliyet düşer.",
                ],
            },
            {
                baslik: "Teslimat öncesi saha kontrol listesi",
                paragraflar: [
                    "Kemalpaşa'daki teslimatlarda şu beş bilgiyi talep aşamasında netleştiriyoruz: hedef noktanın gerçek yüksekliği, zemin tipi ve kaplaması, makinenin gireceği en dar açıklığın ölçüsü, raf koridoru genişliği (raf arası çalışılacaksa) ve vardiya düzeni. Bu bilgiler saha fotoğrafıyla birlikte geldiğinde teklif aynı gün netleşir ve yanlış makine sevkiyatı riski ortadan kalkar.",
                    "OSB içi teslimatlarda tesis giriş prosedürü (iş izni, İSG evrakı, araç kaydı) süreye dahildir; evraklar önceden hazırlanırsa makine kapıda beklemez. Periyodik kontrol belgesi (yeşil etiket) makineyle birlikte teslim edilir — belge makineye aittir ve denetimde ilk sorulan evraktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kemalpaşa OSB'ye makaslı platform ne kadar sürede teslim edilir?",
                cevap:
                    "Standart planlamada 1-2 iş günü; bölgeye düzenli sevkiyat hattımız olduğu için sabah gelen taleplerde aynı gün teslim çoğu zaman mümkündür. Akülü makaslı modeller standart araçla taşındığından lowbed organizasyonu gerekmez. Süreyi en çok kısaltan şey, talep sırasında yükseklik-zemin-giriş ölçüsü bilgilerinin hazır olmasıdır; eksik bilgiyle seçilen makine ikinci sevkiyat gerektirir ve kazanılan zamanı boşa çıkarır.",
            },
            {
                soru: "Yüksek raflı depo için hangi metraj makaslı platform gerekir?",
                cevap:
                    "En üst rafın kotu ölçülür ve üzerine yaklaşık 2 metre uzanma payı eklenir: 10 metre raf için 12 metre, 12 metre raf için 14 metre çalışma yüksekliği sınıfı seçilir. Sepet tabanının hedefin altında kaldığı unutulmamalıdır — katalogdaki 'çalışma yüksekliği' operatörün uzanabildiği kotu, 'platform yüksekliği' sepet tabanını ifade eder. İkisini karıştırmak, sahada 'makine yetmiyor' sonucunun en yaygın nedenidir.",
            },
            {
                soru: "Dar raf koridorlarında standart makaslı platform çalışır mı?",
                cevap:
                    "Koridor ölçüsüne bağlıdır. Standart akülü makaslı şase genişliği yaklaşık 1,15 metredir; koridor bundan darsa 0,76-0,81 metre şaseli dar modeller gerekir. Koridor genişliğini raf ayağından raf ayağına, en dar noktadan ölçün — palet taşmaları ve sprinkler boruları etkin genişliği düşürür. Talepte koridor ölçüsünü belirtirseniz doğru şase ilk seferde gelir.",
            },
            {
                soru: "Depo zemini epoksi kaplı; makine iz bırakır mı?",
                cevap:
                    "Standart siyah lastik epoksi ve perdahlı betonda iz bırakabilir. Bu yüzeyler için iz bırakmayan (non-marking, beyaz dolgu) lastikli modeller sevk ediyoruz; talep sırasında zemin kaplamasını belirtmeniz yeterlidir. Ayrıca genleşme derzleri ve rampa çevresindeki kot farkları için makinenin çukur önleme sistemi devrede olmalıdır — teslimatta bu sistem saha ekibine gösterilir.",
            },
            {
                soru: "Çift vardiya çalışan depoda akü yeter mi?",
                cevap:
                    "Tek şarjla tipik kullanımda bir vardiya rahat çıkarılır; çift vardiyada kural, makinenin her vardiya sonunda şarja bağlanmasıdır. Şarj noktasının makinenin park alanına yakın belirlenmesi vardiya ortası duruşları önler. Derin deşarj akü ömrünü kısaltır; vardiya planınızı talepte paylaşırsanız şarj düzenini teslimat öncesi birlikte kurgularız.",
            },
            {
                soru: "Operatörsüz kiralayabilir miyiz? Belge şartı nedir?",
                cevap:
                    "Evet — makineyi kullanacak personelinizin MYK operatör yeterlilik belgesi olması koşuluyla operatörsüz kiralama mümkündür. Belge makine tipine göredir: makaslı platform belgesi bom tipi makineyi kapsamaz. Ekibinizde belgeli personel yoksa operatörlü kiralama tek yasal seçenektir; karma model de kurulabilir — ilk gün operatörlü başlanır, ekibiniz makineye alıştıktan sonra operatörsüz devam edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Coğrafi bilgiler (Kemalpaşa OSB'nin İzmir-Ankara karayolu konumu, liman bağlantıları) kamuya açık; metraj/şase değerleri sektör standardı (EN 280 sınıf ölçüleri).",
    },

    "bolge:torbali-osb": {
        h1: "Torbalı OSB'de Makaslı Platform Kiralama",
        giris:
            "Torbalı, İzmir-Aydın karayolu ve demiryolu hattı üzerindeki konumuyla İzmir'in güney sanayi koridorunun merkezidir. Bölge son yıllarda hızlı sanayileşen bir hat üzerindedir: yapı malzemesi ve prefabrik üretim tesisleri, gıda işleme ve ambalaj fabrikaları ile bunları besleyen depo yapıları iç içedir. Bu karışım, makaslı platform talebini iki farklı senaryoya böler: tamamlanmış tesislerde bakım-tesisat işleri (kapalı alan, akülü model) ve devam eden fabrika inşaatlarında montaj işleri (açık saha, gerekirse dizel arazi tipi). Torbalı'daki işlerin doğru makineyle eşleşmesi için ilk soru her zaman aynıdır: çalışma tamamlanmış binada mı, şantiyede mi?",
        maddeler: [
            {
                baslik: "Tamamlanmış tesiste: akülü makaslı",
                metin:
                    "Üretim holü ve depo içindeki tavan tesisatı, aydınlatma, havalandırma kanalı ve sprinkler işlerinde akülü makaslı platform standart çözümdür. Torbalı'daki üretim yapılarında 6-10 metre tavan yaygındır; bu 8-12 metre çalışma yüksekliği sınıfına denk gelir. Gıda ve ambalaj tesislerinde emisyon kısıtı ürün güvenliği meselesidir — dizel makine kapalı alanda hiçbir gerekçeyle kullanılamaz.",
            },
            {
                baslik: "Şantiyede: dizel arazi tipi makaslı",
                metin:
                    "Devam eden fabrika inşaatlarında zemin henüz saha betonu değilse — kırmataş, stabilize dolgu, çamur — akülü modelin %25 tırmanma kabiliyeti ve küçük tekerleği yetersiz kalır. Bu koşullarda 4x4 dizel arazi tipi makaslı platform gerekir: çelik konstrüksiyon montajı, cephe paneli, çatı kaplama ve dış aydınlatma direkleri bu sınıfın işleridir. Şantiye bitip iç imalata geçildiğinde makine akülü modelle değiştirilebilir; iki dönemli kiralama planı bu geçişi maliyet avantajına çevirir.",
            },
            {
                baslik: "Prefabrik ve yapı malzemesi tesislerinde yük",
                metin:
                    "Yapı malzemesi üretiminde platform sepetine sık sık malzeme alınır: profil, kanal, boru, izolasyon rulosu. Makaslı platformun geniş sepeti bu iş için uygundur ancak sepet kapasitesi (tipik 230-450 kg, modele göre) kişi + malzeme toplamıyla karşılaştırılmalıdır. Aşırı yük algılama sistemi kapasite aşımında makineyi durdurur; yükü baştan doğru planlamak duruş kaybını önler.",
            },
            {
                baslik: "İzmir-Aydın hattında sevkiyat",
                metin:
                    "Torbalı'nın karayolu üzerindeki konumu, hem İzmir merkez hem Aydın yönünden sevkiyata açıktır; bölgeye düzenli hattımız vardır. Akülü modeller standart araçla gelir; dizel arazi tipi ağırdır ve lowbed gerektirir — şantiye işlerinde teslimat bu yüzden 1 gün daha önceden planlanmalıdır. Aynı sahaya birden fazla makine gidiyorsa nakliye paylaştırılır.",
            },
            {
                baslik: "Gıda tesislerinde hijyen bölgesi kuralları",
                metin:
                    "Torbalı'daki gıda ve içecek tesislerinde platform çalışması hijyen bölgelerine göre planlanır: üretim alanında çalışma çoğunlukla hat durduğunda veya vardiya arasında yapılır, makine tesise girmeden önce temizlenir ve hidrolik kaçak kontrolünden geçer. İz bırakmayan lastik bu tesislerde tercih değil şarttır. Gıda güvenliği denetimlerinde (BRC, IFS gibi sertifikalı tesislerde) yabancı madde riski ayrı bir başlıktır — sepette taşınan alet ve sarf malzemesinin listelenmesi ve çalışma sonrası sayımı prosedüre eklenir. Bu düzeni tesis kalite ekibiyle teslimat öncesi kuruyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Torbalı'da iş tipine göre makine eşleşmesi",
                paragraflar: [
                    "Bölgedeki tipik iş senaryoları ve doğru makine sınıfı aşağıdadır. Belirleyici iki değişken zemin ve güç tipidir; metraj üçüncü sıradadır çünkü yanlış sınıf seçildiğinde metraj doğru olsa bile makine çalışamaz.",
                ],
                tablo: {
                    basliklar: ["İş senaryosu", "Zemin", "Doğru sınıf", "Tipik metraj"],
                    satirlar: [
                        ["Depo/hol tavan tesisatı", "Beton, düz", "Akülü makaslı", "10 – 14 m"],
                        ["Gıda/ambalaj tesisi bakım", "Epoksi, düz", "Akülü makaslı (iz bırakmayan lastik)", "8 – 12 m"],
                        ["Çelik konstrüksiyon montajı", "Stabilize/kırmataş", "Dizel 4x4 arazi makaslı", "12 – 18 m"],
                        ["Cephe paneli / çatı kaplama", "Saha betonu veya dolgu", "Dizel 4x4 arazi makaslı", "10 – 16 m"],
                        ["Raf montajı", "Beton, düz", "Akülü makaslı (gerekirse dar şase)", "10 – 14 m"],
                    ],
                },
            },
            {
                baslik: "İnşaattan işletmeye geçiş: iki dönemli kiralama",
                paragraflar: [
                    "Torbalı'da sık karşılaştığımız durum şudur: fabrika inşaatı biterken iç imalat (tesisat, aydınlatma, raf) başlar ve sahada hem arazi tipi hem akülü makineye sırayla ihtiyaç duyulur. İki ayrı kısa kiralama yerine tek sözleşmede iki dönemli plan kurmak — önce dizel arazi tipi, saha betonu atıldıktan sonra akülü makaslı — hem nakliyeyi hem birim maliyeti düşürür. Geçiş tarihi kesinleşmemiş olabilir; sözleşmede esnek tarih aralığı tanımlanır.",
                    "Şantiye döneminde makine güvenli park alanı ve yakıt ikmali, işletme döneminde şarj noktası planlanır. Her iki dönemde de periyodik kontrol belgesi makineyle birlikte sahada bulunur.",
                ],
            },
            {
                baslik: "Şantiyede ve işletmede İSG sorumluluk paylaşımı",
                paragraflar: [
                    "Torbalı'daki işlerin iki farklı ortamda geçmesi, İSG sorumluluğunun da iki farklı çerçevede kurulmasını gerektirir. Şantiye ortamında 6331 sayılı İSG Kanunu ve yapı işleri mevzuatı geçerlidir: saha risk değerlendirmesi, iş izni ve kişisel koruyucu donanım işverenin/ana yüklenicinin yükümlülüğüdür; makinenin periyodik kontrol belgesi, güvenlik donanımlarının çalışır durumda teslimi ve operatörlü kiralamada operatörün MYK belgesi bizim yükümlülüğümüzdür.",
                    "İşletme ortamında (tamamlanmış fabrika) buna tesis prosedürleri eklenir: hat kilitleme, çalışma alanı bariyerleme, forklift trafiği yönetimi. Denetimde iki belge ayrı ayrı sorulur — makinenin yeşil etiketi ve operatörün yeterlilik belgesi — ve ikisi farklı taraflara ait olabilir. Bu paylaşımı sözleşmede yazılı tanımlıyoruz; \"makineyi kiraladık, sorumluluk kiralayanda\" varsayımı hukuken geçerli değildir ve iş kazasında işveren açısından doğrudan kusur doğurur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Torbalı'daki şantiyemize hangi makaslı platform gelir?",
                cevap:
                    "Zemin belirler. Saha betonu atılmamışsa — kırmataş, stabilize, çamur — 4x4 dizel arazi tipi makaslı gerekir; akülü modelin tırmanma kabiliyeti ve tekerleği bu zeminde yetersizdir. Saha betonu hazırsa akülü model açık sahada da çalışabilir. Talepte zemin fotoğrafı paylaşmanız doğru sınıfın ilk seferde gelmesini sağlar; yanlış sınıf sevkiyatı hem gün hem nakliye kaybıdır.",
            },
            {
                soru: "Fabrikamız üretimdeyken tavan işi yapılabilir mi?",
                cevap:
                    "Evet — akülü makaslı platform emisyonsuz ve düşük gürültülü olduğu için üretim durdurulmadan çalışılabilir. Koşullar: çalışma alanının altı bariyerlenir (düşen alet riski tesis çalışanlarını da kapsar), makinenin güzergâhı boşaltılır ve forklift trafiği çalışma saatlerinde yönlendirilir. Gıda ve ambalaj tesislerinde bu düzen ürün güvenliği prosedürünün parçasıdır ve teslimat öncesi birlikte planlanır.",
            },
            {
                soru: "Sepete malzeme alacağız; kapasite nasıl hesaplanır?",
                cevap:
                    "Makaslı platform sepet kapasitesi modele göre tipik 230-450 kg arasındadır ve bu toplam kişi + alet + malzeme ağırlığıdır. İki kişi ve montaj malzemesiyle çalışılacaksa 320 kg ve üzeri kapasiteli model seçilmelidir. Aşırı yük algılama sistemi kapasite aşımında yükselmeyi durdurur — bu bir arıza değil güvenlik fonksiyonudur. Talepte kaç kişi ve ne malzemeyle çalışılacağını belirtin; kapasiteyi buna göre eşleştiririz.",
            },
            {
                soru: "İnşaat bitince makineyi değiştirebilir miyiz?",
                cevap:
                    "Evet — iki dönemli kiralama tam bu senaryo için var: şantiye döneminde dizel arazi tipi, saha betonu atılıp iç imalata geçildiğinde akülü makaslı. Tek sözleşmede planlandığında ikinci makinenin sevkiyatı ilk makinenin iadesiyle birleştirilir ve nakliye maliyeti düşer. Geçiş tarihi esnek aralık olarak tanımlanabilir; şantiye programı kayarsa sözleşme güncellenir.",
            },
            {
                soru: "Dizel arazi tipi makaslı ne kadar sürede teslim edilir?",
                cevap:
                    "Arazi tipi modeller ağır olduğu için lowbed ile sevk edilir; organizasyon standart araçtan uzundur ve 2 iş günü planlamak gerekir. Akülü modeller standart araçla 1-2 iş günü, çoğu zaman ertesi gün teslim edilir. Acil şantiye taleplerinde mümkünse hafif sınıfa yönelmek teslimatı hızlandırır — metraj ve zemin uygunsa bu alternatifi teklifte ayrıca gösteririz.",
            },
            {
                soru: "Şantiyede İSG sorumluluğu kimde — bizde mi, kiralayanda mı?",
                cevap:
                    "Paylaşımlıdır ve sözleşmede yazılı tanımlanır. Bizim tarafımız: makinenin periyodik kontrol belgesi (yeşil etiket), güvenlik donanımlarının çalışır teslimi ve operatörlü kiralamada operatörün MYK belgesi. Sizin tarafınız: saha risk değerlendirmesi, iş izni süreci, kişisel koruyucu donanım ve operatörsüz kiralamada belgeli personel bulundurmak. Denetimde makine belgesi ile personel belgesi ayrı ayrı sorulur; 'makineyi kiraladık, sorumluluk kiralayanda' varsayımı hukuken geçerli değildir ve iş kazasında işveren açısından doğrudan kusur doğurur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Torbalı'nın İzmir-Aydın karayolu/demiryolu konumu ve sanayi profili (yapı malzemesi, gıda, ambalaj) kamuya açık bilgidir; kapasite/metraj değerleri sektör standardı.",
    },

    "bolge:cigli-ataturk-osb": {
        h1: "Çiğli Atatürk OSB'de Makaslı Platform Kiralama",
        giris:
            "Atatürk Organize Sanayi Bölgesi, Çiğli'de İzmir'in kuzey aksında yer alır ve kent merkezine en yakın büyük OSB'dir. Bölge, İzmir'in en köklü organize sanayi alanı olarak çok sektörlü bir dokuya sahiptir: plastik ve ambalaj, makine imalatı, tekstil, gıda ve elektronik üretimi aynı cadde üzerinde bulunabilir. Bu çeşitlilik, makaslı platform taleplerini de çeşitlendirir — ancak yapıların ortak paydası bellidir: orta yükseklikte (6-10 metre tavan) üretim holleri, beton zemin ve kapalı alan ağırlıklı çalışma. Körfeze yakınlık nedeniyle nem ve tuzlu hava, açık sahada uzun süre kalan ekipmanda korozyon bakımını önemli kılar; filomuzda bu bakım periyodik olarak yapılır. Kent içinden gelen sevkiyatlarda mesai saati trafiği planlamaya dahil edilir.",
        maddeler: [
            {
                baslik: "Çok sektörlü OSB'de tek soru seti",
                metin:
                    "Sektör ne olursa olsun makine seçimini aynı üç veri belirler: hedef noktanın gerçek yüksekliği, zemin tipi ve makinenin gireceği en dar açıklık. Atatürk OSB'deki eski nesil hollerde servis kapıları yeni yapılardan dardır; makinenin kapıdan geçişi (genişlik ve yükseklik) teslimat öncesi teyit edilmelidir. Standart akülü makaslı 0,76-1,15 m genişlik ve 2 m altı kapalı yükseklikle çoğu kapıdan geçer — ama 'çoğu' saha ölçüsünün yerini tutmaz.",
            },
            {
                baslik: "Plastik, ambalaj ve gıda hatlarında emisyon",
                metin:
                    "Bölgedeki plastik, ambalaj ve gıda tesislerinde emisyon kısıtı ürün güvenliğinin parçasıdır: kapalı alanda yalnızca akülü model kullanılır. Üretim hattı durdurulmadan çalışılacaksa düşük gürültü ek avantajdır; hat üstü geçişlerde çalışma alanının altı bariyerlenir ve düşen alet riski prosedüre bağlanır. Hassas zeminlerde iz bırakmayan lastik standarttır.",
            },
            {
                baslik: "Makine imalat hollerinde vinç sahası ile koordinasyon",
                metin:
                    "Makine imalatı yapan tesislerde tavan vinci (gezer köprü vinç) yaygındır. Platform çalışması vinç hattının altında planlanıyorsa vinç o bölgede kilitlenmeli ve çalışma izni prosedürü uygulanmalıdır — platform sepeti vinç kancasıyla aynı düşeyde bulunamaz. Bu koordinasyon teslimat öncesi tesis yetkilisiyle kurulur; İSG tarafında sorumluluk paylaşımı yazılı yapılır.",
            },
            {
                baslik: "Kent içi konum: teslimat penceresi",
                metin:
                    "Atatürk OSB kent merkezine yakın olduğu için sevkiyat hızlıdır; ancak sabah ve akşam trafiği teslimat saatini etkiler. Standart uygulamamız sabah erken pencere (trafik öncesi) veya öğle arası teslimattır. OSB giriş prosedürü ve tesis içi araç kaydı süreye dahildir — evraklar önceden iletildiğinde makine kapıda beklemez.",
            },
            {
                baslik: "Elektrik ve enerji hatları yakınında çalışma",
                metin:
                    "OSB içindeki trafo binaları, hol içi busbar hatları ve cephe boyunca ilerleyen kablo tavaları, platform çalışmasında güvenli mesafe kuralını devreye sokar: platform iletken bir gövdedir ve enerjili hatla temas ölümcül olabilir. Hat yakınında çalışılacaksa ya hat enerjisiz hâle getirilir (tesis elektrik sorumlusuyla kilitleme prosedürü) ya da gerilim sınıfına göre tanımlı güvenli mesafe korunur. Aydınlatma armatürü değişimi gibi işlerde bu kontrol sık atlanır çünkü 'sadece armatür' diye düşünülür — oysa armatürün beslemesi kesilmeden sepetten müdahale edilmez. Teslimat öncesi saha turunda bu noktaları birlikte işaretliyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atatürk OSB yapı tiplerinde makine eşleşmesi",
                paragraflar: [
                    "Bölgedeki yaygın yapı tipleri ve uygun makaslı platform sınıfı aşağıdadır. Eski nesil yapılarla yeni yapılar arasındaki kapı/tavan farkı seçimi etkiler; tabloda iki kuşak ayrı satırda gösterilmiştir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Tipik tavan", "Kritik kontrol", "Uygun sınıf"],
                    satirlar: [
                        ["Eski nesil üretim holü", "5 – 7 m", "Servis kapısı ölçüsü", "Akülü makaslı 8 m (dar şase gerekebilir)"],
                        ["Yeni nesil üretim holü", "8 – 10 m", "Hat üstü geçiş bariyeri", "Akülü makaslı 10 – 12 m"],
                        ["Depo / sevkiyat alanı", "8 – 12 m", "Raf koridoru genişliği", "Akülü makaslı 12 – 14 m"],
                        ["Vinçli imalat holü", "8 – 12 m", "Vinç kilitleme prosedürü", "Akülü makaslı 10 – 14 m"],
                        ["Dış cephe / çatı kenarı", "6 – 10 m", "Zemin ve rüzgâr", "Dizel makaslı veya akülü (saha betonu varsa)"],
                    ],
                },
            },
            {
                baslik: "Körfez ikliminde ekipman bakımı ve güvenlik",
                paragraflar: [
                    "Çiğli'nin körfeze yakın konumunda nem ve tuzlu hava, açık alanda bekleyen ekipmanda korozyonu hızlandırır. Uzun süreli kiralamalarda makinenin gece kapalı veya üstü örtülü alanda park edilmesi ömrü uzatır; filomuzdaki makinelerde korozyon kontrolü periyodik bakımın parçasıdır. Açık sahada çalışılacaksa rüzgâr sınırı devrededir: çoğu makine 12,5 m/s ile sertifikalıdır ve karar yerdeki hisse değil yükseklikteki koşula göre verilir.",
                    "Her teslimatta periyodik kontrol belgesi (yeşil etiket), kullanım kılavuzu ve acil iniş talimatı makineyle birlikte verilir; saha ekibine acil iniş ve ankraj noktaları uygulamalı gösterilir. Bu devir teslim tutanakla kayıt altına alınır.",
                ],
            },
            {
                baslik: "Kısa süreli ve periyodik ihtiyaçlarda planlama",
                paragraflar: [
                    "Atatürk OSB'deki taleplerin belirgin bölümü kısa sürelidir: yıllık bakım duruşunda üç günlük tesisat işi, sigorta denetimi öncesi aydınlatma yenileme, tek seferlik havalandırma filtresi değişimi. Bu profildeki işlerde en büyük maliyet kalemi kiralamanın kendisi değil yanlış planlamadır — makine sahada beklerken geçen her gün ödenmiş ama kullanılmamış gündür. Kısa işlerde teslimatı işin fiilen başlayacağı sabaha, iadeyi bitiş akşamına denk getirmek tek başına anlamlı tasarruf sağlar.",
                    "Yılda birkaç kez düzenli platform ihtiyacı olan tesisler için çerçeve anlaşma daha verimlidir: fiyat ve evrak bir kez netleşir, sonraki talepler tek telefonla makine sevkiyatına dönüşür. Planlı bakım dönemlerinde (yaz duruşları, yıl sonu sayım haftaları) bölge genelinde makine talebi yoğunlaşır; bakım takviminiz netleştiğinde erken rezervasyon, o hafta makine bulamama riskini ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atatürk OSB'deki eski binamızın kapısı dar; makine girer mi?",
                cevap:
                    "Büyük olasılıkla evet — ama ölçüyle kesinleştirilir. Dar şaseli akülü makaslı modeller 0,76-0,81 metre genişliğindedir ve kapalı yükseklikleri 2 metrenin altındadır; standart kapıların çoğundan geçerler. Kapının net genişliğini ve yüksekliğini (kasadan kasaya, en dar noktadan) talepte iletin; gerekirse ölçüye uygun model sevk ederiz. Kapıdan geçemeyen makine sahada işe yaramaz — bu kontrol teslimatın önkoşuludur.",
            },
            {
                soru: "Üretim hattımız durmadan tavan aydınlatması değişebilir mi?",
                cevap:
                    "Evet. Akülü makaslı platform emisyonsuz ve düşük gürültülü olduğundan hat çalışırken kullanılabilir. Uygulama düzeni şöyledir: çalışma alanının altı bariyerlenir, hat üstü geçişlerde düşen alet riski için alet bağlama (tool lanyard) kullanılır, makinenin güzergâhı vardiya planına göre boşaltılır. Bu düzen ilk gün kurulduktan sonra iş, hat programına paralel ilerler ve üretim kaybı yaşanmaz.",
            },
            {
                soru: "Tavan vinçli holümüzde platform kullanmak güvenli mi?",
                cevap:
                    "Doğru prosedürle evet. Kural nettir: platform sepeti ile vinç kancası aynı düşeyde bulunamaz. Çalışma öncesi vinç, ilgili bölgede kilitlenir (LOTO veya tesis prosedürü), vinç operatörü bilgilendirilir ve çalışma izni yazılı alınır. Bu koordinasyonu teslimat öncesi tesis yetkilinizle birlikte kuruyoruz; sorumluluk paylaşımı sözleşmede tanımlanır.",
            },
            {
                soru: "Çiğli'ye teslimat ne kadar sürer, trafik etkiler mi?",
                cevap:
                    "Atatürk OSB kent merkezine yakın olduğu için sevkiyat kısa sürer; standart planlamada 1-2 iş günü, uygunluk varsa aynı gün mümkündür. Kent içi trafik teslimat saatini etkileyebildiği için sabah erken pencere veya öğle arası teslimatı tercih ediyoruz. OSB giriş evrakları önceden iletilirse araç kapıda beklemez — bu küçük hazırlık, teslim saatini yarım güne kadar öne çekebilir.",
            },
            {
                soru: "Uzun süreli kiralamada bakımı kim yapar?",
                cevap:
                    "Kiralayan firma olarak biz. Aylık ve üzeri kiralamalarda periyodik bakım planı sözleşmeye eklenir ve bakımlar iş programınıza en az duruş yaratacak şekilde takvimlenir. Körfez iklimindeki nem/tuz etkisine karşı korozyon kontrolü bakım kapsamındadır. Normal kullanım kaynaklı arızalarda onarım ve gerekirse ikame makine yükümlülüğü bizdedir; hatalı kullanım hasarları sözleşmede ayrı tanımlanır. Yıllık periyodik kontrol (yeşil etiket) yenilemesi de bize aittir.",
            },
            {
                soru: "Açık sahada rüzgâr sınırı nedir?",
                cevap:
                    "Çoğu makaslı platform 12,5 m/s rüzgâr hızıyla sertifikalıdır. Kritik nokta ölçümün yeridir: yerdeki his yükseklikteki rüzgârdan belirgin düşüktür, karar sepet kotundaki koşula göre verilmelidir. Sepette geniş yüzeyli malzeme (levha, panel, cam) taşınıyorsa yelken etkisi nedeniyle etkin sınır daha da düşer. Körfez hattında öğleden sonra rüzgârın artması yaygındır; dış cephe işlerini sabah saatlerine planlamak duruş riskini azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Atatürk OSB'nin Çiğli konumu, kent merkezine yakınlığı ve çok sektörlü yapısı kamuya açık bilgidir; ölçü/limit değerleri EN 280 ve üretici standartları.",
    },

    "bolge:bornova": {
        h1: "Bornova'da Makaslı Platform Kiralama",
        giris:
            "Bornova, İzmir'in kent içi sanayi ile kurumsal yapıların iç içe geçtiği ilçesidir: Ankara asfaltı boyunca uzanan küçük ve orta ölçekli sanayi dokusu, iki büyük üniversite kampüsü, hastaneler, AVM'ler ve zincir marketlerin bölge depoları aynı ilçe sınırında yer alır. Bu karışım, makaslı platform talebini diğer OSB ağırlıklı bölgelerden ayırır: işlerin önemli bölümü fabrika holü değil, kampüs binası, hastane teknik hacmi, mağaza deposu ve kent içi cephe işidir. Kent içi çalışmanın kendi kuralları vardır — çalışma saatleri gürültü yönetmeliğine tabidir, yaya trafiği bariyerleme gerektirir ve makinenin geceleyeceği güvenli alan önceden planlanmalıdır. Bornova'daki işlerin çoğunda makine seçimini metrajdan önce bu operasyonel koşullar belirler.",
        maddeler: [
            {
                baslik: "Kampüs ve kurumsal binalarda iç mekân işleri",
                metin:
                    "Üniversite ve hastane binalarında tipik işler amfi/konferans salonu aydınlatması, spor salonu tavanı, laboratuvar havalandırması ve giriş atriumu işleridir. Bu yapılarda zemin çoğunlukla hassas kaplamadır (epoksi, PVC, granit) ve iz bırakmayan lastik şarttır. Asansörle kat çıkması gereken işlerde mikro makaslı sınıf devreye girer: 0,76 m genişliğinde, standart asansöre sığabilen ve kapalı yüksekliği 2 metrenin altında modeller. Bina içi geçiş güzergâhı — kapı, koridor, asansör kabini — talep aşamasında ölçülmelidir.",
            },
            {
                baslik: "Mağaza ve bölge depolarında gece penceresi",
                metin:
                    "AVM ve zincir mağaza işlerinde çalışma çoğunlukla kapanış sonrası gece penceresinde yapılır: raf üstü aydınlatma, tabela, sprinkler ve iklimlendirme işleri müşteri alanı boşken tamamlanır. Akülü makaslı platform bu senaryonun standart makinesidir — sessizdir ve kapalı alanda emisyon üretmez. Gece çalışmasında teslimat aynı gün mesai saatinde yapılır, makine mağazanın belirlediği alanda bekletilir ve iş sabaha karşı bittiğinde alan temiz teslim edilir. Bu akışın pürüzsüz işlemesi için mağaza güvenlik ve temizlik vardiyalarıyla koordinasyon önceden kurulur.",
            },
            {
                baslik: "Ankara asfaltı sanayi hattında atölye işleri",
                metin:
                    "Bornova'nın sanayi dokusu büyük OSB hollerinden çok orta ölçekli atölye ve imalathanelerden oluşur: 4-7 metre tavanlı, dar servis kapılı, forklift trafiği yoğun yapılar. Bu profilde 8 metre sınıfı akülü makaslı çoğu işi karşılar; kritik kontrol kapı ölçüsü ve manevra alanıdır. Atölye içinde vinç rayı, asma kat ve stok rafları manevrayı kısıtlar — saha fotoğrafı bu yüzden Bornova taleplerinde özellikle önemlidir.",
            },
            {
                baslik: "Kent içi cephe ve tabela işlerinde dış koşullar",
                metin:
                    "Cadde üzerindeki cephe, tabela ve yağmur oluğu işlerinde iki koşul birlikte yönetilir: yaya/araç trafiği ve rüzgâr. Çalışma alanı bariyerlenir, gerekiyorsa belediyeden işgaliye izni alınır ve kaldırım işlerinde zemin taşıma kapasitesi (altında otopark veya bodrum olan kaldırımlar) kontrol edilir. Rüzgâr sınırı — çoğu makinede 12,5 m/s — sepet kotundaki koşula göre değerlendirilir; geniş yüzeyli tabela taşınıyorsa etkin sınır düşer ve iş sabah saatlerine planlanır.",
            },
            {
                baslik: "Küçük işlerde doğru süre planı",
                metin:
                    "Bornova taleplerinin belirgin bölümü 1-2 günlük nokta işleridir: tek salon aydınlatması, bir cephe tabelası, depo kapısı üstü onarım. Bu profilde maliyetin ana kalemi nakliyedir ve iki pratik kural geçerlidir: birincisi, aynı binada birden fazla küçük iş varsa tek kiralamada art arda planlamak nakliyeyi teke indirir; ikincisi, işin fiilen başlayacağı saat netse teslimatı o saate denk getirmek beklemede geçen ödenmiş saatleri sıfırlar. Kampüs ve AVM gibi tekrarlayan ihtiyacı olan kurumlarda çerçeve anlaşma, her seferinde fiyat-evrak turunu ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bornova iş tiplerinde makine eşleşmesi",
                paragraflar: [
                    "İlçedeki yaygın iş senaryoları ve uygun makine sınıfı aşağıdadır. Kent içi profilde belirleyici olan çoğunlukla metraj değil erişim kısıtıdır — kapı, asansör, koridor ve zemin hassasiyeti.",
                ],
                tablo: {
                    basliklar: ["İş senaryosu", "Ortam", "Kritik kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Amfi / konferans salonu aydınlatma", "Kampüs içi", "Hassas zemin, kapı ölçüsü", "Akülü makaslı 8 – 10 m, iz bırakmayan lastik"],
                        ["Kat içi teknik hacim", "Hastane / kurum", "Asansör ölçüsü", "Mikro makaslı (0,76 m, asansöre sığar)"],
                        ["Mağaza / depo raf üstü", "AVM, market deposu", "Gece penceresi", "Akülü makaslı 10 – 12 m"],
                        ["Atölye tavan tesisatı", "Sanayi hattı", "Dar kapı, manevra", "Akülü makaslı 8 m (dar şase)"],
                        ["Cephe / tabela", "Cadde üzeri", "Yaya trafiği, rüzgâr, işgaliye", "Akülü veya dizel makaslı 10 – 14 m"],
                    ],
                },
            },
            {
                baslik: "Gece ve hafta sonu çalışma planı",
                paragraflar: [
                    "Kent içi işlerin önemli bölümü mesai dışı pencerelere sıkışır: mağazalar kapanış sonrası, kampüsler ders dönemine göre, hastaneler ise teknik hacim bazında saat planlar. Bu pencerelerde çalışmanın anahtarı, makinenin pencereden önce sahada hazır olmasıdır — teslimat mesai saatinde yapılır, makine güvenli alanda bekletilir, iş penceresi açıldığında vakit kaybı olmaz. İade de aynı mantıkla ertesi mesai gününe planlanır; gece biten iş için gece nakliyesi beklemek gerekmez.",
                    "Gürültü yönetmeliği gece çalışmasında dizel makineyi fiilen devre dışı bırakır; akülü model bu pencerelerde tek seçenektir. Aydınlatması yetersiz alanlarda çalışma alanı aydınlatması işveren tarafından sağlanır — sepet üzerinden seyyar aydınlatma ile çalışmak güvenli değildir.",
                ],
            },
            {
                baslik: "Kurumsal tesislerde evrak ve erişim süreci",
                paragraflar: [
                    "Üniversite, hastane ve AVM gibi kurumsal yapılarda saha erişimi OSB'lerden farklı işler: yüklenici kaydı, araç plakası bildirimi, İSG evrak seti ve bazı kurumlarda çalışan sabıka/sağlık belgeleri önceden istenir. Bu süreç ilk kiralamada birkaç gün alabilir; evrak setini talep aşamasında başlatmak teslimatın gecikmemesinin tek yoludur. Takip eden kiralamalarda kayıt zaten açık olduğu için süreç telefon hızına iner.",
                    "Periyodik kontrol belgesi ve operatör yeterlilik belgesi bu kurumların denetimlerinde standart olarak sorulur; her teslimatta makineyle birlikte dosya hâlinde verilir. Kurum tarafında iş izni ve refakat düzeni netleştirilmelidir — özellikle hastanelerde çalışma alanına erişim refakatle olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bornova'da üniversite kampüsüne makine sokmak için ne gerekir?",
                cevap:
                    "Kampüs yönetiminin yüklenici kayıt süreci tamamlanmalıdır: firma evrakları, araç plakası, İSG belgeleri ve makinenin periyodik kontrol belgesi. İlk kayıtta bu birkaç gün alabildiği için talebi erken açmak gerekir; sonraki kiralamalarda kayıt açık olduğundan süreç hızlıdır. Bina içine girilecekse geçiş güzergâhının (kapı, koridor, gerekirse asansör) ölçüleri de talepte paylaşılmalıdır — asansörle kat çıkacak işlerde mikro makaslı sınıf sevk ediyoruz.",
            },
            {
                soru: "Mağazamız kapandıktan sonra gece çalışılabilir mi?",
                cevap:
                    "Evet — bu Bornova'daki en yaygın senaryolardan biridir. Makine mesai saatinde teslim edilir ve mağazanın gösterdiği alanda bekletilir; kapanışta iş başlar, sabaha karşı biter. Akülü model sessiz ve emisyonsuz olduğu için gece penceresinde tek uygun sınıftır. Güvenlik ve temizlik vardiyalarıyla koordinasyonu teslimat öncesi kuruyoruz; iade ertesi mesai gününe planlanır ve gece nakliye bedeli oluşmaz.",
            },
            {
                soru: "Asansöre sığan platform var mı?",
                cevap:
                    "Var — mikro makaslı sınıf bu ihtiyaç için üretilir: yaklaşık 0,76 m genişlik, 2 m altı kapalı yükseklik ve standart yük asansörüne sığan gövde. Çalışma yüksekliği tipik 6-8 metredir; kat içi tavan işlerinin neredeyse tamamını karşılar. Talepte asansör kabin ölçüsünü (genişlik × derinlik × kapı yüksekliği) ve kapasitesini iletin; makine ağırlığı kabin kapasitesiyle karşılaştırılarak teyit edilir.",
            },
            {
                soru: "Kaldırım üzerinde cephe işi için izin gerekir mi?",
                cevap:
                    "Çoğu durumda evet — kaldırım veya yol işgali belediyenin işgaliye iznine tabidir ve yaya güvenliği için çalışma alanı bariyerlenir. İzin süreci ilçeye göre değişir; planlamada birkaç gün pay bırakmak gerekir. Ayrıca altında bodrum veya otopark bulunan kaldırımlarda zemin taşıma kapasitesi kontrol edilir — gerekirse yük dağıtıcı plaka kullanılır. Bu kontrolleri teslimat öncesi saha turunda birlikte yapıyoruz.",
            },
            {
                soru: "Tek günlük küçük bir iş için kiralama ekonomik olur mu?",
                cevap:
                    "Olur — doğru planlanırsa. Tek günlük işte maliyetin önemli kalemi nakliyedir; bu yüzden iki pratik kural uyguluyoruz: aynı binadaki birden fazla küçük işi tek kiralamada art arda planlamak ve teslimatı işin fiilen başlayacağı saate denk getirmek. Düzenli ihtiyacı olan kurumlar için çerçeve anlaşma daha da ekonomiktir — fiyat ve evrak bir kez netleşir, sonraki talepler doğrudan sevkiyata dönüşür.",
            },
            {
                soru: "Hastane ortamında çalışmanın özel koşulları neler?",
                cevap:
                    "Üç başlık öne çıkar: erişim refakatle yapılır (çalışma alanına kadar kurum personeli eşlik eder), hijyen hassasiyeti olan bölümlerde makine temizlenmiş ve hidrolik kaçak kontrolünden geçmiş olarak girer, gürültülü işler bölüm bazında saat planına bağlanır. İz bırakmayan lastik hastane zeminlerinde standarttır. Evrak seti (periyodik kontrol, operatör belgesi, İSG dosyası) hastane teknik işletmesine teslimat öncesi iletilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bornova'nın üniversite/hastane/sanayi karışımı ve Ankara asfaltı sanayi hattı kamuya açık bilgidir; mikro makaslı ölçüleri üretici standartları.",
    },

    "bolge:menemen": {
        h1: "Menemen'de Makaslı Platform Kiralama",
        giris:
            "Menemen, İzmir'in kuzey aksında Çanakkale karayolu üzerinde yer alır ve iki farklı çalışma ortamını tek ilçede toplar: bir yanda plastik ve geri dönüşüm ağırlıklı sanayi dokusuyla deri üretiminin yoğunlaştığı organize sanayi alanları, diğer yanda Gediz ovasının tarımsal işletmeleri — seralar, soğuk hava depoları, paketleme tesisleri. Bu ikili yapı, makaslı platform taleplerini de ikiye böler: sanayi tarafında klasik hol içi bakım-tesisat işleri, tarım tarafında ise soğuk depo ve paketleme tesislerinin kendine özgü koşulları. Aliağa'ya komşuluğu nedeniyle bölgeden geçen ağır sanayi trafiği, karayolu teslimatlarını kolaylaştırır; Menemen'e sevkiyat İzmir merkezden kısa sürede yapılır.",
        maddeler: [
            {
                baslik: "Deri ve plastik tesislerinde ortam koşulları",
                metin:
                    "Deri işleme tesislerinde nem ve kimyasal buhar, makine seçiminde iki sonuç doğurur: elektrik aksamı korunmuş akülü modeller tercih edilir ve çalışma sonrası makine temizliği standart prosedürdür. Plastik ve geri dönüşüm tesislerinde ise toz ve granül birikimi zeminde kayganlık yaratabilir — çalışma alanının süpürülmüş olması hem İSG hem makine stabilitesi gereğidir. Her iki sektörde de tavan tipik 6-10 metre banttadır ve 8-12 metre sınıfı akülü makaslı çoğu işi karşılar.",
            },
            {
                baslik: "Soğuk hava depolarında çalışma",
                metin:
                    "Gediz ovasının tarım ürünleri, Menemen çevresinde soğuk hava depoculuğunu besler. Soğuk depoda platform çalışmasının üç kuralı vardır: akü performansı düşük sıcaklıkta azalır (çalışma süresi planı buna göre yapılır ve makine molalarda oda sıcaklığındaki bölmeye alınır), yoğuşma nedeniyle zemin kaygan olabilir (hız düşürülür, dönüşler geniş alınır) ve kapı açık kalma süresi tesisin soğuk zinciri açısından sınırlıdır (iş, kapı planına göre bölümlenir). Evaporatör bakımı ve tavan aydınlatması bu depolardaki en yaygın platform işleridir.",
            },
            {
                baslik: "Paketleme ve gıda tesislerinde hijyen düzeni",
                metin:
                    "Meyve-sebze paketleme ve gıda işleme tesislerinde makine tesise temizlenmiş girer, hidrolik kaçak kontrolü yapılır ve iz bırakmayan lastik kullanılır. Üretim hattı üzerinde çalışılacaksa hat durdurulur veya bant üstü bariyerlenir; yabancı madde riski (düşen alet, sarf malzemesi) prosedüre bağlanır. Sezonluk yoğunluk dönemlerinde — hasat ve ihracat haftaları — tesisler duruş istemez; bu dönemlerde işler vardiya arası pencerelere planlanır.",
            },
            {
                baslik: "Sera ve tarımsal yapılarda erişim",
                metin:
                    "Modern seraların iskelet, ısıtma borusu ve perde motoru işleri platform gerektirir; ancak sera içi zemin çoğunlukla toprak veya membrandır ve akülü makaslının düz-sert zemin şartını sağlamaz. Bu işlerde ya geçici platform yolu (plaka) serilir ya da dizel arazi tipi kullanılır. Sera dışı işlerde — depo, sundurma, pakethane — standart kurallar geçerlidir. Tarımsal yapılarda elektrik altyapısı sanayi tesislerinden zayıf olabilir; şarj noktasının gücü teslimat öncesi teyit edilir.",
            },
            {
                baslik: "Çanakkale karayolu hattında sevkiyat",
                metin:
                    "Menemen'in karayolu üzerindeki konumu ve Aliağa-İzmir hattının düzenli ağır araç trafiği, makine sevkiyatını pratikleştirir: akülü modeller standart araçla 1-2 iş günü içinde teslim edilir, çoğu zaman ertesi gün mümkündür. Ovadaki dağınık tarımsal tesislere teslimatta saha girişinin araç için uygunluğu (dar köy yolu, köprü tonaj sınırı) önceden sorulur — lowbed gereken arazi tipi makinelerde bu kontrol daha da önemlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Menemen'de ortam tipine göre makine eşleşmesi",
                paragraflar: [
                    "İlçenin ikili yapısına göre yaygın senaryolar aşağıdadır. Sanayi tarafında belirleyici olan ortam koşulu (nem, toz, hijyen), tarım tarafında ise zemin ve elektrik altyapısıdır.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Tipik iş", "Kritik koşul", "Uygun sınıf"],
                    satirlar: [
                        ["Deri işleme tesisi", "Tavan tesisat, havalandırma", "Nem/kimyasal buhar, temizlik", "Akülü makaslı 8 – 12 m"],
                        ["Plastik / geri dönüşüm", "Aydınlatma, vinç rayı bakım", "Toz, zemin temizliği", "Akülü makaslı 8 – 12 m"],
                        ["Soğuk hava deposu", "Evaporatör, aydınlatma", "Düşük sıcaklıkta akü, kaygan zemin", "Akülü makaslı 10 – 14 m (mola planlı)"],
                        ["Paketleme / gıda", "Hat üstü, tavan", "Hijyen, yabancı madde", "Akülü makaslı, iz bırakmayan lastik"],
                        ["Sera / tarımsal yapı", "İskelet, ısıtma borusu", "Toprak zemin, zayıf elektrik", "Dizel arazi tipi veya plaka üzeri akülü"],
                    ],
                },
            },
            {
                baslik: "Sezonluk yoğunlukta planlama",
                paragraflar: [
                    "Menemen'in tarım-gıda ekseni, platform talebini mevsimsel yapar: hasat öncesi bakım haftalarında (soğuk depo hazırlığı, pakethane revizyonu) talep yoğunlaşır, sezon ortasında tesisler duruş istemez, sezon sonunda ise ertelenen işler birikir. Bu döngüde iki pratik sonuç var: bakım işlerini sezon öncesine planlamak hem makine bulunabilirliği hem tesisin iş takvimi açısından en verimli penceredir; sezon içinde zorunlu çıkan işler ise vardiya arası kısa pencerelere bölümlenir ve makine tesiste birkaç gün konaklar.",
                    "Sanayi tarafında böyle bir mevsimsellik yoktur; planlı duruşlar (yaz bakımı, yıl sonu) belirleyicidir. İki profilin taleplerinin çakıştığı haftalarda erken rezervasyon makine güvencesinin tek yoludur.",
                ],
            },
            {
                baslik: "Teslimat öncesi kontrol listesi",
                paragraflar: [
                    "Menemen taleplerinde şu bilgileri talep aşamasında netleştiriyoruz: ortam tipi (sanayi holü / soğuk depo / gıda / sera), hedef yükseklik, zemin tipi ve kaplaması, tesise araç girişinin uygunluğu ve — soğuk depo işlerinde — çalışma sıcaklığı ile kapı planı. Bu bilgiler geldiğinde doğru makine ve doğru aksesuarlar (iz bırakmayan lastik, plaka) ilk seferde sevk edilir.",
                    "Her teslimatta periyodik kontrol belgesi makineyle birlikte verilir; saha ekibine acil iniş ve devrilme önleme kuralları uygulamalı gösterilir. Tarımsal tesislerde makine kullanacak personelin MYK belgesi operatörsüz kiralamanın önkoşuludur — belge yoksa operatörlü model tek yasal seçenektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk hava depomuzda platform çalışabilir mi?",
                cevap:
                    "Evet — üç koşulun yönetilmesiyle. Akü performansı düşük sıcaklıkta azalır: çalışma bloklar hâlinde planlanır ve makine molalarda oda sıcaklığındaki bölmeye alınır. Yoğuşma kaynaklı kayganlığa karşı hız düşürülür ve dönüşler geniş alınır. Kapı açık kalma süresi soğuk zincirinizi etkilediği için iş, kapı planınıza göre bölümlenir. Evaporatör bakımı ve aydınlatma bu düzenle sorunsuz tamamlanır; çalışma sıcaklığını talepte belirtmeniz yeterlidir.",
            },
            {
                soru: "Sera içinde akülü makaslı kullanılabilir mi?",
                cevap:
                    "Zemin belirler. Akülü makaslı düz ve sert zemin ister; sera içi toprak veya membran zemin bu şartı sağlamaz. İki çözüm var: çalışma hattı boyunca geçici plaka yolu sermek (kısa hatlarda pratik) veya dizel arazi tipi makaslı kullanmak (uzun hatlarda ve dış işlerde). Sera iskeleti ve ısıtma borusu işlerinde hangisinin ekonomik olduğu hat uzunluğuna bağlıdır — saha krokisiyle birlikte değerlendirip teklifte iki seçeneği de gösteriyoruz.",
            },
            {
                soru: "Deri OSB'deki tesisimizde nem sorun olur mu?",
                cevap:
                    "Yönetilebilir. Nemli ve kimyasal buharlı ortamlar için elektrik aksamı korunmuş akülü modeller sevk ediyoruz ve çalışma sonrası makine temizliği prosedüre dahildir. Tesisinizdeki ortam koşulunu (nem, buhar, kimyasal sınıfı) talepte belirtin; makine seçimi ve bakım planı buna göre yapılır. Uzun süreli kiralamalarda periyodik bakım sıklığı nemli ortamlarda artırılır — bu, sözleşmede tanımlanır ve ek süreç gerektirmez.",
            },
            {
                soru: "Hasat sezonunda tesisimiz durmadan iş yapılabilir mi?",
                cevap:
                    "Evet — vardiya arası pencerelerle. Sezonda pakethane ve soğuk depo duruş istemediği için işler kısa bloklara bölümlenir: her vardiya arasında 2-3 saatlik pencerede bir bölüm tamamlanır, makine tesiste konaklar ve iş birkaç günde biter. Akülü model gece penceresinde de sessiz çalışır. En verimli çözümse bakımı sezon öncesine almaktır — hem makine bulunabilirliği hem tesis takvimi açısından; sezon takviminiz netleştiğinde erken rezervasyonla planlıyoruz.",
            },
            {
                soru: "Menemen kırsalındaki tesisimize teslimat yapılır mı?",
                cevap:
                    "Yapılır — araç erişimi teyit edilerek. Ovadaki dağınık tesislere giden yollar her zaman standart nakliye aracına uygun olmayabilir: dar köy yolu, alçak geçit, köprü tonaj sınırı. Talepte tesis konumunu paylaşın; güzergâh kontrolünü biz yapıyoruz. Akülü modeller standart araçla gelir; dizel arazi tipi lowbed gerektirdiği için kırsal teslimatta güzergâh kontrolü daha da önemlidir. Uygun olmayan son kilometrede çekici/traktör desteği tesisçe sağlanabiliyorsa bu da planlanır.",
            },
            {
                soru: "Elektriği zayıf tarımsal tesiste şarj sorunu olur mu?",
                cevap:
                    "Kontrol edilirse olmaz. Akülü makaslı şarjı standart 220V hat ister; şebekesi zayıf veya jeneratörle çalışan tesislerde şarj noktasının gücü ve hattın sağlamlığı teslimat öncesi teyit edilir. Jeneratörle şarjda dalgalı gerilim akü ömrünü kısaltabilir — regülatörlü hat önerilir. Günlük çalışma süresi tek şarjı aşmayacaksa gece şarjı yeterlidir; yoğun kullanımda yedek planı (ek şarj penceresi veya ikinci makine) birlikte kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Menemen'in deri/plastik sanayi ve Gediz ovası tarım-gıda profili ile Çanakkale karayolu konumu kamuya açık bilgidir; soğuk ortam/akü davranışı üretici standartları.",
    },

    "bolge:bergama-osb": {
        h1: "Bergama OSB'de Makaslı Platform Kiralama",
        giris:
            "Bergama, İzmir'in kuzey ucunda, kent merkezine yaklaşık 100 kilometre mesafededir ve organize sanayi bölgesi bu uzaklığın avantajıyla büyüyen, arsa maliyeti düşük yeni nesil bir sanayi alanıdır. Bölgede gıda işleme (özellikle domates ve tarım ürünleri), tekstil ve madencilik destek tesisleri öne çıkar. Mesafe, Bergama'daki platform kiralamanın ana değişkenidir: nakliye maliyeti toplam içinde İzmir merkez işlerine göre daha büyük pay tutar ve bu, planlamanın mantığını değiştirir — kısa işleri birleştirmek, kiralama süresini nakliyeye göre optimize etmek ve makineyi tesiste konaklatmak Bergama'da ekonominin anahtarıdır. Yeni yapılaşan OSB'nin bir avantajı da yapı standardıdır: geniş servis kapıları, düzgün saha betonu ve yüksek tavanlar makine operasyonunu kolaylaştırır.",
        maddeler: [
            {
                baslik: "Mesafe ekonomisi: kiralama planının merkezi",
                metin:
                    "İzmir merkezden Bergama'ya nakliye, kısa işlerde toplam maliyetin belirgin kalemine dönüşür. Üç pratik sonuç: birincisi, tek günlük iş için makine getirmek yerine bölgedeki birkaç işi aynı kiralamada birleştirmek (aynı tesiste veya komşu tesislerde) birim maliyeti ciddi düşürür; ikincisi, 2-3 günlük işlerde bile haftalık paket çoğu zaman daha ekonomiktir çünkü nakliye zaten sabittir; üçüncüsü, tekrarlayan bakım ihtiyacı olan tesislerde makinenin aylık kiralamayla sahada konaklaması, her seferinde nakliye ödemekten avantajlıdır.",
            },
            {
                baslik: "Gıda işleme tesislerinde sezon ve hijyen",
                metin:
                    "Bergama ve çevresinin tarımsal üretimi, bölge OSB'sinde gıda işleme tesislerini besler; salça ve konserve üretimi yaz sonunda kampanya dönemine girer. Kampanyada tesis 24 saat çalışır ve duruş kabul etmez — platform işleri bu yüzden kampanya öncesi bakım penceresine (ilkbahar-yaz başı) yoğunlaşır. Hijyen kuralları standarttır: makine temiz girer, hidrolik kaçak kontrolü yapılır, iz bırakmayan lastik kullanılır ve hat üstü çalışmalarda yabancı madde prosedürü uygulanır.",
            },
            {
                baslik: "Yeni nesil OSB yapılarında çalışma",
                metin:
                    "Bergama OSB'nin görece yeni yapı stoku, platform operasyonu için elverişlidir: 8-12 metre tavanlı geniş holler, standart üstü servis kapıları ve düzgün saha betonu. Bu profilde 10-14 metre sınıfı akülü makaslı işlerin çoğunu karşılar; dar şase ihtiyacı nadirdir. Yeni tesislerin kurulum dönemi işleri — raf montajı, vinç rayı, yangın hattı, aydınlatma — bölgedeki talebin önemli bölümünü oluşturur ve bu işler çoğunlukla birkaç haftalık projelerdir; haftalık/aylık paketler doğal seçimdir.",
            },
            {
                baslik: "Madencilik destek tesislerinde ağır koşul",
                metin:
                    "Bölgedeki maden operasyonlarının bakım atölyeleri ve cevher işleme destek yapıları, platform için ağır koşul ortamlarıdır: toz yoğunluğu yüksektir, zeminde malzeme birikintisi olabilir ve bazı yapılar açık-yarı açık niteliktedir. Bu profilde dizel arazi tipi makaslı devreye girer; kapalı atölyelerde ise akülü model kullanılır ancak filtre/temizlik bakımı sıklaştırılır. Maden sahası İSG kuralları (özel eğitim, refakat, izin sistemi) OSB standartlarından ağırdır ve evrak süreci önceden başlatılmalıdır.",
            },
            {
                baslik: "Çanakkale karayolu hattında teslimat",
                metin:
                    "Bergama, İzmir-Çanakkale karayolu üzerindedir ve teslimat güzergâhı standarttır; akülü modeller normal araçla sevk edilir. Mesafe nedeniyle aynı gün teslim istisnadır — standart planlama 1-2 iş günüdür ve sabah yola çıkan araç öğleden önce sahadadır. Bölgeye planlı sevkiyat günlerimizde ek makine eklemek nakliye paylaşımı sağlar; talepte tarih esnekliğiniz varsa bunu belirtmek maliyeti düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bergama'da iş tipine göre makine eşleşmesi",
                paragraflar: [
                    "Bölgedeki yaygın senaryolar aşağıdadır. Mesafe faktörü nedeniyle 'hangi makine' kadar 'hangi süre paketi' de tabloya dahildir — Bergama'da ikisi birlikte optimize edilir.",
                ],
                tablo: {
                    basliklar: ["İş senaryosu", "Uygun sınıf", "Tipik süre", "Ekonomik paket"],
                    satirlar: [
                        ["Gıda tesisi kampanya öncesi bakım", "Akülü makaslı 10 – 12 m", "3 – 7 gün", "Haftalık"],
                        ["Yeni tesis kurulum (raf, tesisat)", "Akülü makaslı 10 – 14 m", "2 – 6 hafta", "Aylık"],
                        ["Tekstil holü aydınlatma/iklimlendirme", "Akülü makaslı 8 – 12 m", "2 – 4 gün", "Haftalık"],
                        ["Maden destek atölyesi", "Dizel arazi tipi veya akülü (kapalı)", "1 – 2 hafta", "Haftalık + sık bakım"],
                        ["Tek günlük nokta işi", "Akülü makaslı 8 – 10 m", "1 gün", "Komşu işlerle birleştir"],
                    ],
                },
            },
            {
                baslik: "Kampanya takvimine göre yıllık bakım planı",
                paragraflar: [
                    "Gıda işleme ağırlıklı bölgede en verimli desen, yıllık bakım takvimini kampanya dönemine göre tersine kurmaktır: kampanya yaz sonu-sonbaharsa, tavan-tesisat-aydınlatma işleri ilkbaharda tamamlanır; kampanya çıkışında (kış başı) ise yıpranma onarımları yapılır. Bu iki pencere dışında kalan acil işler vardiya aralarına sıkıştırılır ve makine tesiste konaklar.",
                    "Aynı OSB'de birden fazla tesisin bakım penceresi çakıştığında bölgeye tek sevkiyatla birden fazla makine getiriyoruz — komşu tesislerle eşgüdüm, Bergama'nın mesafe maliyetini paylaştırmanın en etkili yoludur. OSB yönetimi üzerinden bu eşgüdümü başlatmak mümkündür; talebinizde 'tarih esnek, komşu işlerle birleşebilir' notu bu optimizasyonu açar.",
                ],
            },
            {
                baslik: "Uzak saha teslimatında evrak ve hazırlık",
                paragraflar: [
                    "Mesafeli teslimatın telafisi pahalı olduğu için Bergama'da saha hazırlığı listesi daha sıkı uygulanır: hedef yükseklik ve zemin bilgisi, servis kapısı ölçüsü, şarj noktası, tesis giriş evrakları ve — maden bağlantılı sahalarda — özel İSG izin süreci talep aşamasında netleştirilir. Eksik bilgiyle giden yanlış makinenin geri dönüşü, İzmir merkez işlerindeki gibi birkaç saatlik değil bir günlük kayıptır.",
                    "Periyodik kontrol belgesi ve operatör belgeleri makineyle birlikte dosya hâlinde teslim edilir. Operatörsüz kiralamada tesiste MYK belgeli personel bulunması şarttır; belge yoksa operatörlü paket planlanır ve operatörün konaklama düzeni (uzun işlerde) sözleşmede tanımlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bergama'ya nakliye maliyeti işi ekonomik olmaktan çıkarır mı?",
                cevap:
                    "Doğru planlanırsa çıkarmaz. Nakliye sabit olduğu için kaldıraç süre ve birleştirmededir: 2-3 günlük işlerde haftalık paket, tekrarlayan işlerde aylık konaklama, tek günlük işlerde komşu tesislerle birleştirme. Bölgeye planlı sevkiyat günlerimize denk gelen esnek tarihli talepler nakliye paylaşımından yararlanır. Teklifte nakliyeyi ayrı satır olarak gösteriyoruz — hangi paketin toplamda ekonomik olduğu karşılaştırmalı görülür.",
            },
            {
                soru: "Salça kampanyası döneminde bakım işi yapılabilir mi?",
                cevap:
                    "Teknik olarak mümkün ama verimsizdir — kampanyada tesis 24 saat çalışır, duruş penceresi yoktur ve işler kısa vardiya aralarına sıkışır. Doğru desen, tavan-tesisat-aydınlatma işlerini kampanya öncesi bakım penceresine (ilkbahar-yaz başı) almaktır; yıpranma onarımları ise kampanya çıkışına planlanır. Kampanya takviminiz netleştiğinde yıllık bakım planını birlikte kuruyoruz — makine bulunabilirliği de bu pencerede güvenceye alınır.",
            },
            {
                soru: "Yeni kurulan tesisimizin raf ve tesisat işleri için hangi paket uygun?",
                cevap:
                    "Kurulum işleri tipik 2-6 haftalık projelerdir ve aylık paket neredeyse her zaman en ekonomik seçenektir: nakliye tek sefere iner, günlük birim maliyet düşer ve makine proje boyunca sahada kalır. Raf montajında iki koridor paralel ilerleyecekse ikinci makine aynı sevkiyatla gelir. Proje süresi belirsizse kısa başlayıp uzatmak yerine — Bergama'da nakliye nedeniyle — gerçekçi süreyi baştan aylık pakete bağlamak avantajlıdır; erken bitişte iade koşulları sözleşmede tanımlıdır.",
            },
            {
                soru: "Maden sahamızın atölyesinde platform kullanmak için ne gerekir?",
                cevap:
                    "OSB standardından ağır bir İSG süreci: maden sahası giriş izni, özel eğitim/oryantasyon, refakat düzeni ve iş izin sistemi. Bu evrak süreci birkaç gün alabildiği için taleple birlikte başlatılmalıdır. Makine tarafında kapalı atölyelerde akülü model (sıklaştırılmış filtre/temizlik bakımıyla), açık-yarı açık yapılarda dizel arazi tipi kullanılır. Toz yoğun ortamda çalışma sonrası temizlik ve kontrol prosedürü sözleşmeye eklenir.",
            },
            {
                soru: "Bergama'ya teslimat ne kadar sürer?",
                cevap:
                    "Standart planlama 1-2 iş günüdür; sabah yola çıkan araç öğleden önce sahadadır. Mesafe nedeniyle aynı gün teslim istisnadır ve ancak aracın o gün bölge yönünde olmasıyla mümkündür. Süreyi güvenceye almanın yolu erken talep ve tam saha bilgisidir — eksik bilgiyle giden yanlış makinenin telafisi Bergama'da bir günlük kayıptır. Acil durumlarda talebi 'acil' olarak işaretleyin; öncelik planlaması yapıyoruz.",
            },
            {
                soru: "Birkaç komşu tesisin işini birleştirmek mümkün mü?",
                cevap:
                    "Mümkün ve Bergama'da özellikle mantıklı. Aynı OSB'deki tesislerin bakım pencereleri çakıştığında tek sevkiyatla birden fazla makine getiriyoruz veya tek makine art arda tesisleri dolaşıyor — nakliye paylaşılır ve herkesin birim maliyeti düşer. Bunun için taleplerde tarih esnekliği notu yeterlidir; eşgüdümü biz kuruyoruz. OSB yönetimi üzerinden dönemsel bakım kampanyası düzenlemek de mümkün — birden fazla tesisin yıllık planını aynı pencereye almak en verimli desendir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bergama'nın İzmir'e uzaklığı, OSB'nin gıda/tekstil profili ve bölgedeki maden operasyonları kamuya açık bilgidir; kampanya dönemi genel sektör pratiğidir.",
    },

    "bolge:tire-osb": {
        h1: "Tire OSB'de Makaslı Platform Kiralama",
        giris:
            "Tire, Küçük Menderes havzasının merkezinde yer alır ve organize sanayi bölgesi, İzmir'in güneydoğu aksında tarım-gıda işleme ile karışık imalatın buluştuğu bir üretim alanıdır. Bölgede süt ve süt ürünleri işleme öne çıkar; bunun yanında tekstil, ambalaj ve tarım makineleri atölyeleri OSB dokusunu tamamlar. Süt işleme tesislerinin hijyen rejimi, Tire'deki platform işlerinin karakterini belirler: makine temizliği, iz bırakmayan lastik ve hat üstü çalışma prosedürleri burada istisna değil standarttır. Ödemiş-Tire hattının tarımsal lojistiği bölgeye düzenli araç trafiği sağlar; İzmir merkezden teslimat Torbalı üzerinden işler ve standart planlamada 1-2 iş günü sürer.",
        maddeler: [
            {
                baslik: "Süt işleme tesislerinde hijyen rejimi",
                metin:
                    "Süt ve süt ürünleri tesisleri, gıda sanayinin en sıkı hijyen rejimine sahiptir: makine tesise dezenfekte edilerek girer, hidrolik sistem kaçak kontrolünden geçer, iz bırakmayan lastik zorunludur ve üretim alanında çalışma çoğunlukla CIP yıkama sonrası gece penceresinde yapılır. Paslanmaz ekipman yoğun ortamda platform sepetinden düşecek tek parça bile hat durdurma nedenidir — alet bağlama ve sarf sayımı prosedürü uygulanır. Bu rejim iş süresini uzatmaz; doğru planlanırsa gece penceresinde tavan ve tesisat işleri vardiya kaybı olmadan tamamlanır.",
            },
            {
                baslik: "Soğutma ve buhar altyapısı işleri",
                metin:
                    "Süt işleme tesislerinin teknik omurgası soğutma ve buhar hatlarıdır; evaporatör bakımı, soğuk oda tavanı, buhar hattı izolasyonu ve kompresör dairesi işleri platform gerektirir. Soğuk alanlarda akü performans planı (bloklar hâlinde çalışma, molada ılık bölme), buhar hatları çevresinde ise sıcak yüzey mesafesi ve izolasyon işlerinde malzeme taşıma kapasitesi devreye girer. Bu işlerin çoğu 10-12 metre sınıfı akülü makaslıyla yapılır; dar makine dairelerinde dar şase gerekebilir.",
            },
            {
                baslik: "Tekstil ve ambalaj hollerinde standart işler",
                metin:
                    "OSB'nin tekstil ve ambalaj tesislerinde işler klasik hol profilindedir: 6-10 metre tavan, aydınlatma-havalandırma-sprinkler bakımı, vinç rayı ve iklimlendirme kanalı işleri. 8-12 metre akülü makaslı bu profili karşılar. Tekstilde toz (elyaf uçuntusu) birikimi elektrik panolarında ve aydınlatma armatürlerinde yangın riski oluşturduğu için periyodik temizlik işleri düzenli platform talebi yaratır — bu tesislerle çerçeve anlaşma en verimli modeldir.",
            },
            {
                baslik: "Tarım makineleri atölyelerinde karma ihtiyaç",
                metin:
                    "Tire çevresinin tarım makineleri atölyeleri, OSB'deki karma imalat profilinin örneğidir: kaynak ve montaj holleri, boyahane ve açık stok sahası bir arada. Kapalı alanda akülü model kullanılırken açık stok sahasında zemin çoğunlukla stabilizedir ve dizel arazi tipi gerekir. Boyahane işlerinde havalandırma ve patlayıcı ortam sınıfı (solvent buharı) kontrol edilir — standart makine ATEX ortamına giremez; bu alanlarda çalışma, havalandırma sonrası ölçümle planlanır.",
            },
            {
                baslik: "Küçük Menderes hattında teslimat ve konaklama",
                metin:
                    "Tire'ye teslimat İzmir merkezden Torbalı üzerinden işler; akülü modeller standart araçla 1-2 iş günü içinde sahadadır. Ödemiş-Tire-Bayındır üçgenindeki tesislere aynı sevkiyat turunda birden fazla teslimat yapılabilir — tarih esnekliği nakliye paylaşımı sağlar. Tekrarlayan bakım ihtiyacı olan süt tesislerinde makinenin aylık paketle sahada konaklaması, her seferinde sevkiyat beklemekten hem hızlı hem ekonomiktir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tire'de tesis tipine göre makine eşleşmesi",
                paragraflar: [
                    "OSB'deki yaygın tesis profilleri ve uygun makine sınıfı aşağıdadır. Süt işleme rejimi ayrı satırda gösterilmiştir çünkü aynı metrajda bile prosedür farkı makine hazırlığını değiştirir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Tipik iş", "Özel koşul", "Uygun sınıf"],
                    satirlar: [
                        ["Süt işleme — üretim alanı", "Tavan, hat üstü tesisat", "Dezenfeksiyon, gece penceresi, alet sayımı", "Akülü makaslı 10 – 12 m, iz bırakmayan"],
                        ["Süt işleme — teknik hacim", "Evaporatör, buhar hattı", "Soğuk/sıcak alan planı", "Akülü makaslı 10 – 12 m (dar şase gerekebilir)"],
                        ["Tekstil holü", "Aydınlatma, elyaf temizliği", "Toz/yangın riski, periyodik", "Akülü makaslı 8 – 12 m, çerçeve anlaşma"],
                        ["Ambalaj tesisi", "Sprinkler, iklimlendirme", "Standart hol", "Akülü makaslı 8 – 12 m"],
                        ["Tarım makineleri atölyesi", "Kaynak holü, stok sahası", "Karma zemin, boyahane ATEX", "Akülü (kapalı) + dizel arazi (açık)"],
                    ],
                },
            },
            {
                baslik: "Gıda denetimi öncesi hazırlık işleri",
                paragraflar: [
                    "Süt ve gıda tesislerinde belgelendirme ve müşteri denetimleri (BRC, IFS, büyük zincir tedarik denetimleri), platform talebinin öngörülebilir tetikleyicisidir: denetim öncesi tavan temizliği, aydınlatma yenileme, sinek-kuş önleme sistemleri ve boya-onarım işleri yoğunlaşır. Bu işler denetim tarihinden en az 2-3 hafta önce planlanmalıdır — son haftaya sıkışan işler hem makine bulunabilirliği hem işçilik kalitesi açısından risklidir.",
                    "Denetim takviminiz netleştiğinde tek kiralamayla tüm hazırlık işlerini art arda planlıyoruz: makine bir kez gelir, tavan-aydınlatma-montaj işleri sırayla tamamlanır, alan temiz teslim edilir. Bu desen hem nakliyeyi teke indirir hem denetim öncesi son kontrol turuna zaman bırakır.",
                ],
            },
            {
                baslik: "Teslimat öncesi kontrol listesi",
                paragraflar: [
                    "Tire taleplerinde netleştirdiğimiz bilgiler: tesis tipi ve hijyen rejimi (süt/gıda ise dezenfeksiyon gereksinimi), hedef yükseklik, çalışma penceresi (gece/vardiya arası), zemin kaplaması, dar hacim varsa geçiş ölçüleri ve boyahane benzeri özel ortam sınıfları. Süt tesislerinde makine hazırlığı (dezenfeksiyon, kaçak kontrolü, lastik) sevkiyat öncesi yapıldığı için bu bilgilerin talepte gelmesi teslimatı hızlandırır.",
                    "Periyodik kontrol belgesi ve operatör belgeleri dosya hâlinde teslim edilir; operatörsüz kiralamada MYK belgeli personel şartı geçerlidir. Gece penceresi işlerinde makine mesai saatinde teslim alınır ve tesiste bekletilir — gece nakliyesi gerekmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Süt işleme tesisimizin üretim alanında platform çalışabilir mi?",
                cevap:
                    "Evet — süt sanayi rejimine uygun hazırlıkla. Makine sevkiyat öncesi dezenfekte edilir, hidrolik kaçak kontrolünden geçer ve iz bırakmayan lastikle gelir. Çalışma çoğunlukla CIP yıkama sonrası gece penceresine planlanır; alet bağlama ve sarf malzemesi sayımı prosedürü uygulanır. Bu düzen kalite ekibinizle teslimat öncesi kurulur ve denetim dosyanıza girecek evrak (makine temizlik kaydı, belgeler) tarafımızdan sağlanır.",
            },
            {
                soru: "Denetim öncesi hazırlık için ne zaman kiralama yapmalıyız?",
                cevap:
                    "Denetim tarihinden en az 2-3 hafta önce. Tavan temizliği, aydınlatma yenileme ve montaj işlerinin son haftaya sıkışması iki risk taşır: o hafta bölgede makine bulunamayabilir ve aceleyle biten işler denetimde göze batar. En verimli desen, denetim takvimi netleşir netleşmez tek kiralamayla tüm hazırlık işlerini art arda planlamaktır — makine bir kez gelir, işler sırayla biter, son kontrol turuna zaman kalır.",
            },
            {
                soru: "Tekstil holümüzdeki elyaf tozu temizliği için düzenli çözüm var mı?",
                cevap:
                    "Var — çerçeve anlaşmayla periyodik plan. Elyaf uçuntusu aydınlatma armatürlerinde ve pano üstlerinde biriktikçe yangın riski büyüdüğü için bu iş tek seferlik değil periyodiktir. Çerçeve anlaşmada temizlik sıklığı (tipik 3-6 ay), makine sınıfı ve sabit koşullar bir kez tanımlanır; sonraki her tur tek telefonla sevkiyata dönüşür. Temizlik vardiya arası veya hafta sonu pencerelerine planlanır ve üretim etkilenmez.",
            },
            {
                soru: "Boyahanemizde platform kullanılabilir mi?",
                cevap:
                    "Ortam sınıfına bağlı. Solvent buharı bulunan boyahane ATEX (patlayıcı ortam) sınıfına girer ve standart platform bu ortamda çalışamaz. Pratik çözüm: boya operasyonu durdurulur, alan havalandırılır, ortam ölçümüyle güvenli seviye teyit edilir ve çalışma bu pencerede yapılır. Su bazlı sistemlerde ve boya alanı dışındaki işlerde standart akülü model kullanılır. Boyahane işi talebinde ortam sınıfını ve havalandırma imkânını belirtin; planı buna göre kuruyoruz.",
            },
            {
                soru: "Tire'ye teslimat süresi ve maliyeti nasıl işliyor?",
                cevap:
                    "Standart planlama 1-2 iş günü; güzergâh Torbalı üzerinden işler ve akülü modeller normal araçla gelir. Nakliye teklifte ayrı satırdır. Ödemiş-Tire-Bayındır hattındaki tesislere aynı turda birden fazla teslimat yapabildiğimiz için tarih esnekliği olan talepler nakliye paylaşımından yararlanır. Tekrarlayan ihtiyaçta aylık konaklama, her seferinde sevkiyat beklemekten hem hızlı hem ekonomiktir.",
            },
            {
                soru: "Soğuk oda ve buhar hattı işleri aynı kiralamada yapılabilir mi?",
                cevap:
                    "Yapılır ve önerilir. Aynı makine önce soğuk alan bloklarında (akü performans planıyla), sonra buhar hattı çevresinde (sıcak yüzey mesafesi korunarak) çalışır; tek kiralama ve tek nakliyeyle teknik hacmin tüm işleri biter. Dar makine dairelerinde geçiş ölçüsüne göre dar şase seçilir. İş listenizi talepte paylaşın — sıralamayı soğuk zincir ve üretim programınıza göre birlikte kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tire'nin Küçük Menderes havzası konumu ve süt/tekstil/tarım makineleri profili kamuya açık bilgidir; hijyen/ATEX kuralları sektör standartları.",
    },

    "bolge:menemen-deri-osb": {
        h1: "Menemen Deri OSB'de Makaslı Platform Kiralama",
        giris:
            "Menemen Deri Organize Sanayi Bölgesi, Türkiye'nin deri işleme sektöründe uzmanlaşmış sayılı ihtisas OSB'lerinden biridir ve İzmir'in kuzey sanayi aksında, deri üretiminin çevresel gereklilikleri (ortak arıtma, atık yönetimi) etrafında örgütlenmiş bir yerleşkedir. İhtisas OSB olmanın platform kiralamaya yansıması nettir: buradaki her tesis benzer proses akışına, benzer yapı tipine ve benzer ortam koşullarına sahiptir — nemli ortam, kimyasal buhar, tambur ve dolap makinelerinin yerleşimi, kurutma katları. Bu tekdüzelik iş planlamayı kolaylaştırır; makine hazırlığı (korumalı elektrik aksamı, temizlik prosedürü) bölgeye özgü standart hâline gelmiştir. Arıtma tesisi ve ortak altyapı yapıları da düzenli bakım-platform ihtiyacı üretir.",
        maddeler: [
            {
                baslik: "Tabakhane ortamında makine koşulları",
                metin:
                    "Deri işleme atölyelerinde ıslak proses alanları (sulama, kireçlik, tabaklama tamburları) yüksek nem ve kimyasal buhar içerir. Bu alanlarda çalışacak platformda elektrik aksamının korunma sınıfı önemlidir ve çalışma sonrası temizlik-kurulama prosedürü standarttır. Kuru proses alanlarında (tıraş, kurutma, finisaj) koşullar hol standardına yaklaşır. Talepte çalışmanın hangi proses alanında olduğunu belirtmek, doğru hazırlıklı makinenin gelmesini sağlar — ıslak alan bilgisi atlanırsa makine bakım ömrü kısalır ve kiralama sonrası kontrol tartışması doğar.",
            },
            {
                baslik: "Kurutma katları ve asma katlı yapılar",
                metin:
                    "Deri tesislerinin karakteristik yapısı asma katlı kurutma alanlarıdır: derinin asılarak kurutulduğu, kat yüksekliği görece düşük ama erişimi zor hacimler. Bu katlarda tavan işleri (aydınlatma, havalandırma kanalı, askı sistemi onarımı) dar ve alçak hacim nedeniyle mikro veya dar şase makaslı ister; standart 1,15 m şase çoğu kurutma katına girmez. Asma katın taşıma kapasitesi makine ağırlığıyla mutlaka karşılaştırılır — bu, deri tesislerinde en kritik güvenlik kontrolüdür.",
            },
            {
                baslik: "Ana üretim hollerinde standart işler",
                metin:
                    "Tambur ve dolap makinelerinin bulunduğu ana holler 6-9 metre tavanlıdır; aydınlatma, havalandırma, sprinkler ve vinç rayı işleri 8-10 metre sınıfı akülü makaslıyla yapılır. Tamburların yerleşimi manevra alanını kısıtlar — makine güzergâhı, tambur aralarındaki geçiş ölçüsüne göre planlanır. Zemin ıslak alanlarda kaygan olabilir; çalışma öncesi kuru süpürme ve hız sınırlama uygulanır.",
            },
            {
                baslik: "Arıtma ve ortak altyapı yapıları",
                metin:
                    "İhtisas OSB'nin ortak arıtma tesisi, kimyasal depoları ve pompa istasyonları düzenli bakım-platform ihtiyacı üretir: havuz üstü yürüyüş yolları, boru köprüleri, aydınlatma direkleri ve yapı dış cepheleri. Bu işlerin bir kısmı açık sahadadır ve zemine göre dizel arazi tipi gerekebilir. Arıtma çevresinde H2S gibi gaz riski olan noktalarda tesis gaz ölçüm prosedürü uygulanır ve çalışma izni bu ölçüme bağlanır — OSB yönetiminin iş izni sistemi bu alanlarda devrededir.",
            },
            {
                baslik: "Bölgeye özgü teslimat düzeni",
                metin:
                    "Deri OSB, Menemen'in ana sanayi aksındadır ve İzmir merkezden teslimat 1-2 iş günü sürer; Çanakkale karayolu güzergâhı standarttır. Bölgedeki tesislerin benzerliği sayesinde aynı sevkiyat turunda birden fazla tesise teslimat sık yapılır — tarih esnekliği nakliye paylaşımı sağlar. Sektörün dönemsel yoğunluğunda (sipariş sezonları öncesi bakım haftaları) OSB genelinde talep çakışır; erken rezervasyon bu haftalarda makine güvencesidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Deri OSB'de proses alanına göre makine eşleşmesi",
                paragraflar: [
                    "İhtisas OSB'nin tekdüze yapısı, alan bazlı standart eşleşme kurmayı mümkün kılar. Aşağıdaki tablo bölgedeki tipik alanları ve makine gereksinimlerini gösterir.",
                ],
                tablo: {
                    basliklar: ["Proses alanı", "Ortam koşulu", "Kritik kontrol", "Uygun sınıf"],
                    satirlar: [
                        ["Islak proses (tambur, kireçlik)", "Nem + kimyasal buhar", "Elektrik koruma, sonrası temizlik", "Korumalı akülü makaslı 8 – 10 m"],
                        ["Kurutma katı (asma kat)", "Alçak-dar hacim", "Kat taşıma kapasitesi, şase ölçüsü", "Mikro / dar şase makaslı"],
                        ["Kuru proses ve finisaj", "Standart hol", "Manevra, toz", "Akülü makaslı 8 – 10 m"],
                        ["Arıtma ve altyapı", "Açık saha, gaz riski", "Gaz ölçümü, zemin", "Dizel arazi tipi veya akülü"],
                        ["Depo / sevkiyat", "Standart", "Raf koridoru", "Akülü makaslı 10 – 12 m"],
                    ],
                },
            },
            {
                baslik: "Islak ortam sonrası makine bakım prosedürü",
                paragraflar: [
                    "Deri tesislerindeki kiralamalarda sözleşmeye bölgeye özgü bir madde ekliyoruz: ıslak/kimyasal alanda çalışan makine, iade öncesi tesiste kaba temizlikten geçirilir ve tarafımızda detaylı temizlik-kurulama-koruyucu bakım yapılır. Bu prosedür iki tarafı da korur — tesisin hasar sorumluluğu tartışması yaşamaması, bizim makine ömrünü koruyabilmemiz. Kimyasal sınıfı (asidik/bazik proses) talepte belirtilirse koruyucu hazırlık ona göre yapılır.",
                    "Uzun süreli kiralamalarda (aylık konaklama) periyodik bakım sıklığı nemli ortam nedeniyle artırılır ve bakım takvimi tesisin proses programına göre kurulur. Elektrik aksamının periyodik kontrolü bu ortamda standart bakımın parçasıdır.",
                ],
            },
            {
                baslik: "OSB iş izni ve güvenlik süreci",
                paragraflar: [
                    "İhtisas OSB'nin ortak altyapı alanlarında (arıtma, kimyasal depo çevresi) çalışma, OSB yönetiminin iş izni sistemine tabidir: izin formu, gaz ölçüm kaydı ve refakat düzeni. Tesis içi işlerde ise tesisin kendi İSG prosedürü geçerlidir. Her iki durumda da makinenin periyodik kontrol belgesi ve operatörün MYK belgesi dosya hâlinde hazır bulunur. Bu süreçleri teslimat öncesi başlatmak, makinenin sahada beklemesini önler.",
                    "Kimyasal buharlı alanlarda kişisel koruyucu donanım (uygun maske, gözlük) işveren yükümlülüğüdür; platform operatörü de bu donanımla çalışır. Operatörlü kiralamada operatörümüzün bu donanımı ve ortam bilgilendirmesi teslimat kapsamındadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Islak proses alanında hangi makine çalışabilir?",
                cevap:
                    "Elektrik aksamı korunmuş akülü makaslı modeller. Nem ve kimyasal buhar standart makinenin elektronik kartlarını ve bağlantılarını zamanla yıpratır; bu alanlara koruma sınıfı uygun modeller sevk ediyoruz ve çalışma sonrası temizlik-kurulama prosedürü uyguluyoruz. Talepte proses alanını (ıslak/kuru) ve kimyasal sınıfını belirtin — doğru hazırlıklı makine ilk seferde gelir ve iade kontrolünde tartışma doğmaz.",
            },
            {
                soru: "Kurutma katımıza standart makine girmiyor; çözüm nedir?",
                cevap:
                    "Mikro veya dar şase makaslı sınıf. Kurutma katları alçak ve dar hacimlerdir; 0,76-0,81 m şaseli, kapalı yüksekliği 2 metrenin altında modeller bu katlara girer. Ancak önce iki ölçü teyit edilir: katın giriş açıklığı (genişlik × yükseklik) ve asma katın taşıma kapasitesi — makine ağırlığı kat kapasitesini aşıyorsa çalışma yapılmaz, bu deri tesislerindeki en kritik güvenlik kontrolüdür. İki ölçüyü talepte paylaşın; uygun model ve gerekirse yük dağıtıcı plakayla plan kuruyoruz.",
            },
            {
                soru: "Arıtma tesisi çevresinde çalışmanın koşulları neler?",
                cevap:
                    "OSB yönetiminin iş izni sistemi devrededir: izin formu, gaz riski olan noktalarda ölçüm kaydı (H2S vb.) ve refakat düzeni. Açık sahadaki işlerde zemin kontrolü yapılır — stabilize zeminde dizel arazi tipi gerekir. Havuz üstü ve boru köprüsü işlerinde düşme koruması tesisin prosedürüne göre planlanır. İzin sürecini teslimatla paralel başlatıyoruz; evraklar hazır olduğunda makine bekletilmeden çalışmaya girer.",
            },
            {
                soru: "Makine iade edilirken temizlik kimin sorumluluğunda?",
                cevap:
                    "Paylaşımlı ve sözleşmede yazılı: tesiste kaba temizlik (kimyasal/organik kalıntının giderilmesi) sizin, detaylı temizlik-kurulama-koruyucu bakım bizim tarafımızda. Bu düzen deri OSB kiralamalarında standarttır ve iki tarafı da korur. Kimyasal kalıntıyla iade edilen makinede oluşan hasar sözleşmedeki hatalı kullanım kapsamına girer — kaba temizlik bu yüzden atlanmamalıdır.",
            },
            {
                soru: "Birden fazla tesisin işini aynı sevkiyatta birleştirebilir miyiz?",
                cevap:
                    "Evet — Deri OSB'de bu özellikle verimlidir. Tesislerin benzer yapısı sayesinde aynı turda birden fazla teslimat yapıyoruz veya tek makine art arda tesisleri dolaşıyor; nakliye paylaşılır. Sipariş sezonu öncesi bakım haftalarında OSB genelinde talep çakıştığı için bu eşgüdüm hem maliyet hem makine bulunabilirliği avantajı sağlar. Taleplerde 'tarih esnek' notu bu optimizasyonu açar; OSB yönetimi üzerinden dönemsel plan da kurulabilir.",
            },
            {
                soru: "Nemli ortamda uzun süreli kiralamada bakım nasıl işler?",
                cevap:
                    "Sıklaştırılmış periyodik bakımla. Aylık ve üzeri kiralamalarda bakım takvimi nemli ortam katsayısıyla kurulur: elektrik aksamı kontrolü, yağlama ve korozyon önleme standart bakıma eklenir, sıklık artırılır. Bakımlar proses programınıza göre takvimlenir ve duruş yaratmaz. Arıza durumunda normal kullanım kapsamındaki onarım ve gerekirse ikame makine bizim yükümlülüğümüzdedir — nemli ortam bilgisi baştan verildiyse bu kapsam tartışmasızdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Menemen Deri OSB'nin ihtisas OSB niteliği ve deri prosesinin genel akışı (ıslak/kuru alan, kurutma katı, ortak arıtma) kamuya açık sektör bilgisidir.",
    },

    "bolge:manisa-osb-cevre-ili": {
        h1: "Manisa OSB'ye Makaslı Platform Hizmeti (Çevre İl)",
        giris:
            "Manisa Organize Sanayi Bölgesi, İzmir'in hemen doğusunda, Sabuncubeli geçidinin ötesinde Türkiye'nin en büyük sanayi yoğunlaşmalarından birini barındırır: beyaz eşya ve elektronik üretiminin küresel ölçekli tesisleri, bunların yan sanayi ekosistemi ve lojistik yapıları. İzmir merkezli filomuz için Manisa OSB bir 'çevre il' hedefidir ama pratikte İzmir'in doğu OSB'lerinden farksız işler: Kemalpaşa üzerinden karayolu bağlantısı kısadır ve düzenli sevkiyat hattımız vardır. Bu sayfa, Manisa OSB'deki tesislerin İzmir'den makine kiralarken bilmesi gerekenleri toplar — hangi işlerde İzmir filosundan sevkiyat mantıklıdır, teslimat nasıl planlanır ve büyük tesis rejiminin (vardiya düzeni, yüklenici yönetimi) kiralamaya etkisi nedir.",
        maddeler: [
            {
                baslik: "Beyaz eşya ve elektronik hatlarında hassas ortam",
                metin:
                    "Manisa OSB'nin karakteristik tesisleri — beyaz eşya, elektronik, kablo — hassas üretim ortamlarıdır: hat üstü çalışmada düşen parça riski ana kontroldür, iz bırakmayan lastik standarttır ve bazı alanlarda ESD (statik elektrik) kuralları geçerlidir. Hat durdurulmadan yapılan tavan işlerinde bant üstü bariyerleme ve alet bağlama prosedürü uygulanır. Bu tesislerin yüklenici yönetim sistemleri kurumsaldır; evrak seti (makine belgeleri, operatör belgeleri, İSG dosyası) giriş kaydında eksiksiz istenir.",
            },
            {
                baslik: "Yan sanayi hollerinde standart profil",
                metin:
                    "Ana üreticilerin çevresindeki yan sanayi tesisleri — plastik enjeksiyon, metal şekillendirme, kablo ve ambalaj — 6-10 metre tavanlı standart hollerdir ve 8-12 metre akülü makaslı işlerin çoğunu karşılar. Kalıp ve pres hatlarının yerleşimi manevrayı kısıtlayabilir; vinç hattı altında çalışmada kilitleme prosedürü uygulanır. Bu profildeki işler İzmir'den tek günlük sevkiyatla rahat planlanır.",
            },
            {
                baslik: "Lojistik depolarında yüksek raf işleri",
                metin:
                    "Üretim yoğunluğu, Manisa OSB çevresinde büyük hacimli lojistik depoları besler: bitmiş ürün depoları, yedek parça merkezleri ve ihracat konsolidasyon alanları. Yüksek raflı bu yapılarda 12-14 metre akülü makaslı ve dar koridorlarda dar şase modeller gerekir — İzmir'deki depo işleriyle aynı kural seti geçerlidir: raf kotu + 2 metre uzanma payı, koridor ölçüsü, iz bırakmayan lastik ve vardiya-şarj planı.",
            },
            {
                baslik: "Sabuncubeli hattında teslimat planı",
                metin:
                    "İzmir-Manisa arası karayolu bağlantısı (Sabuncubeli tüneli) sevkiyatı pratikleştirir: standart planlama 1-2 iş günüdür ve Kemalpaşa OSB sevkiyat turlarıyla birleştirilebildiğinde aynı gün teslim de mümkündür. Akülü modeller standart araçla gider; ağır dizel sınıfta lowbed planı bir gün önceden yapılır. Manisa yönünde düzenli hattımız olduğu için tarih esnekliği olan talepler nakliye paylaşımından yararlanır.",
            },
            {
                baslik: "Büyük tesis rejiminde yüklenici süreci",
                metin:
                    "Küresel ölçekli üreticilerin yüklenici yönetimi OSB standardının üzerindedir: online yüklenici kaydı, İSG eğitim/oryantasyon şartı, araç ve personel bildirimi, bazı tesislerde sigorta poliçesi şartları. İlk kiralamada bu süreç birkaç gün alabilir — talebi erken açmak teslimatın gecikmemesinin tek yoludur. Kayıt bir kez tamamlandığında sonraki kiralamalar hızlı işler. Evrak setimiz (belgeler, poliçeler, eğitim kayıtları) bu sistemlere hazır formatta sunulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manisa OSB iş tiplerinde makine eşleşmesi",
                paragraflar: [
                    "Bölgedeki yaygın senaryolar ve İzmir filosundan sevkiyat planı aşağıdadır. Çevre il hedefi olmasına rağmen teslimat süreleri İzmir doğu OSB'leriyle aynı banttadır.",
                ],
                tablo: {
                    basliklar: ["İş senaryosu", "Kritik koşul", "Uygun sınıf", "Teslimat"],
                    satirlar: [
                        ["Üretim hattı üstü tavan işi", "Düşen parça riski, ESD", "Akülü makaslı 10 – 12 m", "1 – 2 iş günü"],
                        ["Yan sanayi hol bakımı", "Manevra, vinç kilitleme", "Akülü makaslı 8 – 12 m", "1 – 2 iş günü"],
                        ["Lojistik depo raf üstü", "Koridor ölçüsü, vardiya", "Akülü makaslı 12 – 14 m / dar şase", "1 – 2 iş günü"],
                        ["Dış saha / çatı kenarı", "Zemin, rüzgâr", "Dizel makaslı (lowbed)", "2 iş günü"],
                        ["Planlı duruş dönemi işleri", "Yoğun talep haftası", "Erken rezervasyon", "Takvimli"],
                    ],
                },
            },
            {
                baslik: "Planlı duruş dönemlerinde kapasite planı",
                paragraflar: [
                    "Büyük üreticilerin planlı bakım duruşları (yaz dönemi, yıl sonu) Manisa OSB genelinde platform talebini aynı haftalara yığar: ana tesis duruşa girdiğinde yan sanayi de aynı pencereyi kullanır. Bu haftalarda makine bulunabilirliği bölgenin ana kısıtıdır ve tek çözüm erken rezervasyondur — duruş takvimi netleştiğinde (çoğunlukla aylar önce bellidir) kiralama planını bağlamak, duruş haftasında makinesiz kalmamanın tek güvencesidir.",
                    "Duruş haftalarında İzmir ve Manisa taleplerini tek kapasite havuzundan yönettiğimiz için erken bağlanan rezervasyonlara sevkiyat önceliği veriyoruz. Çok makineli ihtiyaçlarda (aynı tesiste 3-4 nokta paralel) makine karması — farklı metrajlar, dar şase ihtiyacı — duruş planına göre önceden kurulur.",
                ],
            },
            {
                baslik: "İzmir'den kiralamanın Manisa'daki pratiği",
                paragraflar: [
                    "Manisa OSB'deki tesisler için İzmir filosundan kiralamanın işleyişi yerel kiralamadan farksızdır: teslimat 1-2 iş günü, nakliye teklifte ayrı satır, bakım-arıza müdahalesi aynı gün karayoluyla. Uzun süreli kiralamalarda (aylık konaklama) makine sahada kalır ve periyodik bakım yerinde yapılır — mesafenin operasyona etkisi yoktur.",
                    "Bölgeye özgü tek fark yüklenici kayıt sistemleridir: büyük tesislerde ilk kayıt birkaç gün alır ve talep bu payla açılmalıdır. Kayıt sonrası her kiralama telefon hızında işler. Kemalpaşa-Manisa hattındaki turlarımıza eklenen teslimatlar nakliye avantajı sağlar; tarih esnekliğini talepte belirtin.",
                ],
            },
        ],
        sss: [
            {
                soru: "İzmir'den Manisa OSB'ye kiralama yapmak mantıklı mı?",
                cevap:
                    "Evet — Sabuncubeli bağlantısı sayesinde Manisa OSB, İzmir doğu OSB'leriyle aynı teslimat bandındadır: 1-2 iş günü, Kemalpaşa turlarıyla birleştiğinde aynı gün de mümkün. Nakliye teklifte ayrı satır olarak görünür ve karşılaştırma yapabilirsiniz. Bakım-arıza müdahalesi aynı gün karayoluyla sağlanır; uzun kiralamalarda makine sahada konakladığı için mesafenin operasyona etkisi kalmaz.",
            },
            {
                soru: "Üretim hattımız durmadan tavan işi yapılabilir mi?",
                cevap:
                    "Yapılır — beyaz eşya ve elektronik tesislerindeki standart düzenle: bant üstü bariyerleme, alet bağlama (tool lanyard), sarf malzemesi sayımı ve hat sorumlusuyla anlık koordinasyon. Akülü makaslı emisyonsuz ve sessiz olduğu için hat ortamına uygundur; ESD kuralı olan alanlarda topraklama prosedürü uygulanır. Bu düzen ilk gün kurulur ve iş, hat programına paralel ilerler — üretim kaybı yaşanmaz.",
            },
            {
                soru: "Tesisimizin yüklenici kayıt sistemi var; süreç nasıl işler?",
                cevap:
                    "İlk kiralamada kayıt birkaç gün alabilir: online yüklenici formu, İSG eğitim/oryantasyon, araç-personel bildirimi ve istenirse sigorta poliçeleri. Evrak setimiz bu sistemlere hazır formatta sunulur — makine belgeleri, operatör MYK belgeleri, poliçeler ve eğitim kayıtları. Talebi kayıt payıyla erken açmak teslimatın gecikmemesini sağlar; kayıt tamamlandıktan sonra tüm sonraki kiralamalar telefon hızında işler.",
            },
            {
                soru: "Yaz duruşumuzda çok sayıda iş var; kapasite garantisi mümkün mü?",
                cevap:
                    "Erken rezervasyonla evet. Duruş haftalarında OSB genelinde talep çakışır — ana tesis ve yan sanayi aynı pencereyi kullanır — ve makine bulunabilirliği o haftanın ana kısıtı olur. Duruş takviminiz netleştiğinde (çoğunlukla aylar önce) iş listesini ve makine karmasını (metrajlar, dar şase ihtiyacı, adet) birlikte planlıyoruz; erken bağlanan rezervasyonlara sevkiyat önceliği veriyoruz. Son haftaya kalan talepler o dönemde karşılanamayabilir.",
            },
            {
                soru: "Yüksek raflı yedek parça depomuz için hangi makine gerekir?",
                cevap:
                    "Raf kotuna göre 12-14 metre akülü makaslı; dar koridorlarda 0,76-0,81 m dar şase modeller. Kural İzmir depo işleriyle aynıdır: en üst raf kotu + ~2 metre uzanma payı = gereken çalışma yüksekliği. Koridor ölçüsünü raf ayağından raf ayağına, en dar noktadan ölçün. Epoksi zeminde iz bırakmayan lastik standarttır; çift vardiya düzeninde şarj planı teslimat öncesi kurulur.",
            },
            {
                soru: "ESD kontrollü alanda platform kullanılabilir mi?",
                cevap:
                    "Kullanılır — tesisinizin ESD prosedürüne uyumla. Statik hassas üretim alanlarında makinenin topraklama sürekliliği ve operatörün ESD donanımı (bileklik, uygun ayakkabı) tesis kuralına göre planlanır; bazı tesisler makine için ayrıca iletken lastik ister. ESD şartlarınızı talepte paylaşın — makine hazırlığı ve operatör bilgilendirmesi buna göre yapılır ve kalite ekibinizin onayına hazır belgelenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Manisa OSB'nin beyaz eşya/elektronik profili, Sabuncubeli karayolu bağlantısı ve büyük tesis yüklenici sistemleri kamuya açık/sektörel bilgidir.",
    },

    "bolge:aydin-osb-cevre-ili": {
        h1: "Aydın OSB'ye Makaslı Platform Hizmeti (Çevre İl)",
        giris:
            "Aydın Organize Sanayi Bölgesi ve çevresindeki sanayi dokusu — ASTİM OSB ile birlikte — İzmir'in güney komşuluğunda, tarım-gıda işlemenin ağırlıkta olduğu bir üretim havzasıdır: zeytin ve zeytinyağı tesisleri, incir ve kestane işleme-paketleme, süt ürünleri ve bunları destekleyen ambalaj-soğuk zincir yapıları. İzmir merkezli filomuz için Aydın bir çevre il hedefidir; teslimat İzmir-Aydın otoyolu üzerinden işler ve Torbalı-Tire turlarıyla birleştirilebilir. Bu sayfa, Aydın OSB ve çevresindeki tesislerin İzmir'den kiralama yaparken bilmesi gerekenleri toplar: gıda-tarım tesislerinin sezon ritmi, jeotermal enerji yapılarının özel koşulları ve otoyol hattında teslimat planı.",
        maddeler: [
            {
                baslik: "Zeytinyağı ve gıda tesislerinde sezon ritmi",
                metin:
                    "Aydın havzasının gıda işleme takvimi platform talebini mevsimsel yapar: zeytin kampanyası sonbahar-kış aylarında tesisleri 24 saat çalıştırır ve bu dönemde duruş istenmez; incir işleme yaz sonunda yoğunlaşır. Doğru desen, tavan-tesisat-aydınlatma işlerini kampanya öncesi pencereye (yaz sonu zeytin için, ilkbahar incir için) almaktır. Kampanya içinde zorunlu çıkan işler vardiya arası kısa bloklara bölümlenir ve makine tesiste konaklar. Hijyen kuralları gıda standardındadır: temiz makine, kaçak kontrolü, iz bırakmayan lastik.",
            },
            {
                baslik: "Soğuk zincir ve paketleme yapıları",
                metin:
                    "İhracat ağırlıklı incir-kestane-zeytin işletmelerinin soğuk hava depoları ve paketleme holleri, bölgedeki platform işlerinin önemli bölümünü üretir: evaporatör bakımı, soğuk oda tavanı, paketleme hattı üstü aydınlatma ve sprinkler işleri. Soğuk alan kuralları standarttır — akü performans planı, kaygan zemin kontrolü, kapı planına bölümlenmiş iş — ve 10-14 metre akülü makaslı bu profili karşılar. Denetim (BRC, müşteri denetimleri) öncesi hazırlık işleri talepte yoğunlaşır; 2-3 hafta önceden planlanmalıdır.",
            },
            {
                baslik: "Jeotermal tesislerde özel koşullar",
                metin:
                    "Aydın havzası Türkiye'nin jeotermal enerji merkezidir; santral binaları, boru hatları ve kuyu başı yapıları platform gerektiren bakım işleri üretir. Bu sahalarda koşullar endüstri standardının üzerindedir: H2S gaz riski olan noktalarda ölçüm ve izin prosedürü, sıcak yüzey mesafeleri, açık sahada stabilize zemin (dizel arazi tipi) ve santral İSG sistemine kayıt. Kapalı türbin ve pompa binalarında akülü model kullanılır. Evrak ve izin süreci santral yönetimine göre birkaç gün alabilir — talep erken açılmalıdır.",
            },
            {
                baslik: "Tekstil ve karma imalat holleri",
                metin:
                    "Aydın OSB ve ASTİM'deki tekstil, ambalaj ve makine imalat tesisleri standart hol profilindedir: 6-10 metre tavan, aydınlatma-havalandırma-vinç rayı işleri, 8-12 metre akülü makaslı. Tekstilde elyaf tozu temizliği periyodik talep üretir; çerçeve anlaşma modeli bu tesislerde verimlidir. Karma imalatta boyahane (ATEX) ve kaynak alanı (duman tahliyesi) özel pencerelerle planlanır.",
            },
            {
                baslik: "İzmir-Aydın otoyolunda teslimat",
                metin:
                    "Otoyol bağlantısı Aydın teslimatını standartlaştırır: 1-2 iş günü planlama, akülü modellerde normal araç, ağır sınıfta lowbed. Torbalı-Tire yönündeki düzenli turlarımızla birleştirilebilen teslimatlar nakliye paylaşımı sağlar — tarih esnekliği maliyeti düşürür. Havzadaki dağınık tarımsal tesislere (köy yolu, dar geçit) teslimatta güzergâh kontrolü önceden yapılır. Uzun işlerde aylık konaklama, tekrarlayan sevkiyat maliyetini ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydın havzasında iş tipine göre makine eşleşmesi",
                paragraflar: [
                    "Bölgedeki yaygın senaryolar ve İzmir filosundan sevkiyat planı aşağıdadır. Gıda sezonu ve jeotermal izin süreçleri, teslimat planının iki bölgeye özgü değişkenidir.",
                ],
                tablo: {
                    basliklar: ["İş senaryosu", "Özel koşul", "Uygun sınıf", "Planlama notu"],
                    satirlar: [
                        ["Zeytinyağı tesisi bakım", "Kampanya takvimi", "Akülü makaslı 8 – 12 m", "Kampanya öncesi pencere"],
                        ["Soğuk depo / paketleme", "Soğuk alan, hijyen", "Akülü makaslı 10 – 14 m", "Denetimden 2-3 hafta önce"],
                        ["Jeotermal santral binası", "Gaz izni, sıcak yüzey", "Akülü (kapalı) + dizel (saha)", "İzin süreci erken başlar"],
                        ["Tekstil elyaf temizliği", "Periyodik ihtiyaç", "Akülü makaslı 8 – 12 m", "Çerçeve anlaşma"],
                        ["Tarımsal tesis (kırsal)", "Güzergâh, zemin", "Duruma göre akülü/dizel", "Güzergâh kontrolü önceden"],
                    ],
                },
            },
            {
                baslik: "Kampanya takvimine göre yıllık plan",
                paragraflar: [
                    "Aydın havzasında en verimli kiralama deseni, yıllık bakım planını ürün takvimine göre tersine kurmaktır: zeytin kampanyası sonbahar-kışsa tesisat-tavan işleri yaz sonunda biter; incir sezonu yaz sonuysa o tesislerde ilkbahar penceresi kullanılır. Sezonlar çakışmadığı için aynı havzadaki farklı ürün tesisleri yılın farklı dönemlerinde makine talep eder — bu, bölgeye düzenli sevkiyat ritmi yaratır ve esnek tarihli taleplerin nakliye paylaşımını kolaylaştırır.",
                    "Kampanya içi zorunlu işlerde makine tesiste konaklar ve iş vardiya arası bloklara bölümlenir. Sezon çıkışı yıpranma onarımları (kampanyada ertelenen her şey) ikinci talep dalgasını oluşturur; bu dönem için de erken rezervasyon geçerlidir.",
                ],
            },
            {
                baslik: "İzmir'den kiralamanın Aydın'daki pratiği",
                paragraflar: [
                    "Aydın OSB ve çevresi için İzmir filosundan kiralama, otoyol sayesinde yerel kiralamayla aynı bantta işler: teslimat 1-2 iş günü, nakliye ayrı satır, arıza müdahalesi aynı gün. Uzun kiralamalarda makine sahada kalır ve periyodik bakım yerinde yapılır. Jeotermal sahalar ve büyük gıda işletmelerindeki kayıt-izin süreçleri tek fark yaratır: ilk kiralamada birkaç gün pay bırakın, sonraki kiralamalar hızlı işler.",
                    "Torbalı-Tire-Aydın hattı düzenli turumuzdur; bu hatta birleştirilebilen teslimatlar maliyet avantajı sağlar. Kırsal tesislere teslimatta konum paylaşımı yeterlidir — güzergâh uygunluğunu (köprü tonajı, dar geçit) biz kontrol ediyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Zeytin kampanyası sırasında tesiste iş yapılabilir mi?",
                cevap:
                    "Zorunluysa yapılır ama verimsizdir — kampanyada tesis 24 saat çalışır ve işler kısa vardiya aralarına bölümlenir; makine tesiste konaklar ve iş birkaç güne yayılır. Doğru desen, tavan-tesisat-aydınlatma işlerini kampanya öncesi yaz sonu penceresine almaktır: tesis boşken işler hızlı biter, hijyen prosedürleri rahat uygulanır. Kampanya takviminiz netleştiğinde yıllık planı birlikte kuruyoruz — sezon öncesi haftalarda makine bulunabilirliği de güvenceye alınır.",
            },
            {
                soru: "İzmir'den Aydın'a teslimat süresi ve maliyeti nasıl?",
                cevap:
                    "Otoyol sayesinde standart: 1-2 iş günü planlama, akülü modellerde normal araç. Nakliye teklifte ayrı satırdır ve Torbalı-Tire yönündeki düzenli turlarımızla birleştirilebilen teslimatlarda paylaşım avantajı oluşur — tarih esnekliğinizi talepte belirtin. Uzun işlerde aylık konaklama tekrarlayan sevkiyat maliyetini kaldırır; arıza müdahalesi aynı gün otoyol üzerinden sağlanır.",
            },
            {
                soru: "Jeotermal santralimizdeki bakım işi için süreç nasıl işler?",
                cevap:
                    "Santral İSG sistemine kayıtla başlar: yüklenici kaydı, gaz riski olan noktalarda ölçüm-izin prosedürü (H2S), personel oryantasyonu ve iş izni. Bu süreç santral yönetimine göre birkaç gün alabilir; talep erken açılmalıdır. Makine tarafında kapalı binalarda akülü, açık sahada stabilize zemin nedeniyle dizel arazi tipi kullanılır; sıcak yüzey mesafeleri iş planına işlenir. Evrak setimiz santral sistemlerine hazır formatta sunulur.",
            },
            {
                soru: "İhracat denetimimiz yaklaşıyor; hazırlık işleri nasıl planlanmalı?",
                cevap:
                    "Denetimden en az 2-3 hafta önce tek kiralamayla: tavan temizliği, aydınlatma yenileme, sinek-kuş önleme montajı ve boya-onarım işleri art arda planlanır — makine bir kez gelir, işler sırayla biter, son kontrole zaman kalır. Soğuk depo işlerinde akü ve kapı planı, paketleme alanında hijyen prosedürü uygulanır. Denetim dosyanıza girecek makine evrakları (temizlik kaydı, belgeler) tarafımızdan sağlanır.",
            },
            {
                soru: "Kırsaldaki zeytinyağı tesisimize araç girişi dar; teslimat yapılır mı?",
                cevap:
                    "Yapılır — güzergâh önceden kontrol edilerek. Konum paylaşmanız yeterli: köprü tonaj sınırı, dar geçit ve son kilometre yol durumunu biz değerlendiriyoruz. Akülü modeller standart araçla gelir ve çoğu köy yolunda sorun yaşanmaz; dizel arazi tipinde lowbed güzergâhı ayrıca planlanır. Son kilometrede araç giremiyorsa tesisin çekici/traktör desteğiyle plan kurulabilir — bu durumlar teslimat öncesi netleştirilir, sürpriz bırakılmaz.",
            },
            {
                soru: "Hem soğuk depo hem paketleme holü işimiz var; tek makine yeter mi?",
                cevap:
                    "Çoğu durumda evet — metrajlar uyumluysa aynı akülü makaslı iki alanda art arda çalışır: önce soğuk alan blokları (akü planıyla), sonra paketleme holü işleri. Tek kiralama ve tek nakliyeyle iki alanın işi biter. Metraj farkı büyükse (örneğin 8 m hol + 14 m depo) iki seçenek karşılaştırılır: tek büyük makine mi, iki ayrı makine mi — iş listenizi talepte paylaşın, toplam maliyeti iki senaryoda gösterelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aydın havzasının zeytin/incir/süt işleme profili, jeotermal enerji yoğunluğu ve İzmir-Aydın otoyolu bağlantısı kamuya açık bilgidir.",
    },

    // ── HİZMET SAYFALARI (2026-08-13) ───────────────────────────────────
    // Bu domainin çekirdek kimliği yukarıdaki bolge:kemalpasa-osb kaydında
    // kuruludur: Kemalpaşa OSB merkezli, lojistik depo yüksek raf erişimi,
    // akülü makaslı platform odağı. Aşağıdaki 11 hizmet sayfası aynı kimliği
    // sabit hizmet konularına uygular; jenerik ürün tanımı yerine bu depo/
    // OSB çerçevesine kök salar.
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Kemalpaşa OSB'de Sepetli Örümcek Platform Kiralama",
        giris:
            "Kemalpaşa OSB'deki depolarda makaslı platformun çözemediği bir grup iş var: hedef üst kata veya çatı hattına yakın ama makinenin oraya ulaşacağı yol standart bir sepetli platformun geçemeyeceği kadar dar. Paletli örümcek platform (spider lift) tam bu boşluğu dolduruyor — 70-80 cm genişliğinde tek kanat kapıdan geçebiliyor, merdiven boşluğundaki dar sahanlıkta veya asma kat rampasında paletli tabanıyla tutunabiliyor, sonra kollarını açıp 12-18 metre sınıfında çalışma yüksekliğine çıkabiliyor. Kemalpaşa'daki depoların bir kısmında asma kat ofis girişi, dar servis merdiveni veya sonradan eklenmiş bölme duvarı standart makaslı platformun raf hattına ulaşmasını engelliyor; örümcek platform bu engeli aşan tarafın makinesidir. Talep genellikle iki nedenden geliyor: ya çatı altı çelik konstrüksiyona (aydınlatma raylı sistemi, yangın algılama sensörü) dar bir koridordan erişim gerekiyor, ya da ana giriş kapısı kapalıyken servis kapısından makine sokmak isteniyor. İkisinde de karar zemin taşıma gücü ve geçiş genişliğinin gerçek ölçüsüne dayanıyor, katalog değerine değil.",
        maddeler: [
            { baslik: "Dar geçiş ölçüsünü kapı bazında doğrulamak", metin: "Örümcek platformun avantajı paletli tabanın daraltılabilmesi; ancak kapı kasası, tokmak çıkıntısı ve eşik yüksekliği gerçek geçişi sınırlar. Kemalpaşa'daki depo servis kapılarının çoğu 80-90 cm net genişliktedir; bu makinenin daraltılmış hâliyle uyumludur ama kapı önündeki rampa açısı da ölçülmelidir. Talep sırasında kapı fotoğrafı ve eşik yüksekliği istiyoruz; sahada ilk defa ölçmek, teslimat günü makinenin geri gönderilmesi riskini taşır." },
            { baslik: "Asma kat ve merdiven yükü hesabı", metin: "Paletli taban zemine noktasal değil çizgisel yük bindirir, bu yüzden asma kat döşemesi veya merdiven sahanlığı üzerinde çalışacaksa taşıma kapasitesi projeden veya yapı ustasından teyit edilir. Kemalpaşa'daki depoların çoğunda asma kat ofis bölümüdür ve standart döşeme yükü ofis kullanımına göre hesaplanmıştır; platform ağırlığı bunun üzerine binince kontrol şarttır. Belirsizlik varsa makine zemin katta kalır ve teleskopik kol uzunluğu üst kata erişecek şekilde yeniden planlanır." },
            { baslik: "Çelik konstrüksiyon hattına dar açıdan yaklaşım", metin: "Depo çatı hattındaki aydınlatma rayı veya sprinkler borusu genellikle kolon aralarında, raf üstünden geçer. Standart makaslı platform bu araya giremiyorsa örümcek platformun teleskopik kolu yandan yaklaşıp yukarı uzanabilir. Bu yaklaşım açısı keşifte üç boyutlu ölçülür: kol uzunluğu, yatay erişim ve raf üstündeki serbest yükseklik birlikte kontrol edilir. Kol açısı üreticinin yük diyagramındaki sınırı aşarsa kapasite düşer; sepetteki kişi ve alet ağırlığı buna göre yeniden hesaplanır." },
            { baslik: "Elektrikli tahrik ile depo içi sessiz çalışma", metin: "Örümcek platformların çoğu elektrikli veya hibrit tahrikli üretilir; bu, kapalı depo içinde emisyon kısıtını karşılar ve gece/hafta sonu mesai gibi düşük gürültü gereken saatlerde de kullanılabilir kılar. Palet zincirleri zemin kaplamasında iz bırakabileceği için epoksi veya perdahlı beton üzerinde koruyucu paspas veya lastik palet ekleri istenebilir; bu talep önceden bildirilirse teslimatla birlikte hazırlanır." },
            { baslik: "Operatör eğitimi ve kurulum süresi", metin: "Örümcek platform standart makaslı platformdan farklı bir kumanda mantığına sahiptir: taban önce paletlerle konumlanır, sabitlenir, sonra kol açılır. Bu nedenle operatörün bu tip makineye özgü kısa bir yerinde tanıtımdan geçmesi gerekir; MYK belgesi genel platform yeterliliğini kapsasa da örümcek tipi ilk kullanımda ek bilgilendirme faydalıdır. Kurulum süresi standart makaslı platforma göre biraz daha uzundur çünkü taban dengeleme adımı vardır; bu süre iş programına dahil edilmelidir." },
        ],
        ekBolumler: [
            { baslik: "Örümcek platform ile makaslı platform karşılaştırması", paragraflar: ["Aşağıdaki tablo, Kemalpaşa OSB'deki depo işlerinde iki makine tipi arasında seçim yaparken bakılan gerçek kriterleri gösterir."], tablo: { basliklar: ["Kriter", "Sepetli örümcek platform", "Standart makaslı platform"], satirlar: [["Geçiş genişliği", "70-90 cm dar kapı/koridor", "En az 90-115 cm koridor"], ["Zemin türü", "Merdiven, rampa, düzensiz kot", "Düz, sağlam beton/epoksi"], ["Erişim şekli", "Yandan teleskopik kol ile", "Doğrudan hedef altından dikey"], ["Kurulum süresi", "Taban dengeleme dahil daha uzun", "Doğrudan sürüş, hızlı"], ["Tipik kullanım", "Asma kat, dar servis kapısı, köşe hedef", "Açık raf koridoru, geniş hol"]] } },
            { baslik: "Kemalpaşa OSB'de talep öncesi keşif rutini", paragraflar: ["Örümcek platform talebi geldiğinde önce standart makaslı platformun neden yetmediğini soruyoruz; çoğu zaman cevap net bir dar geçiş veya asma kat kısıtıdır, bazen de sadece varsayımdır. Varsayımsa saha ölçüsü isteniyor; gerçekten dar geçiş varsa kapı, koridor ve hedefe kadar olan güzergâh fotoğrafla kayıt altına alınır. Bu adım, teslimat günü makinenin geri çevrilme ihtimalini ortadan kaldırır çünkü örümcek platformun nakliyesi ve kurulumu standart makineye göre daha fazla planlama gerektirir.", "Kemalpaşa'daki depoların bir kısmı sonradan bölme duvarı veya ofis eklentisi almış eski yapılardır; bu tip binalarda orijinal proje ile bugünkü hâl arasında fark olabilir. Keşifte güncel hâl esas alınır, orijinal mimari çizim değil."] },
            { baslik: "Nakliye ve saha içi taşıma", paragraflar: ["Örümcek platformlar katlanabilir yapıda olduğu için standart bir araçla taşınabilir ve depo kapısından elle veya küçük bir çekiciyle içeri alınabilir; bu, lowbed gerektiren ağır makinelere göre Kemalpaşa OSB içindeki sevkiyatı hızlandırır. Ancak makinenin kendi ağırlığı yine de 1-2,5 ton bandındadır; kapı önündeki rampa veya kaldırım kenarı bu ağırlığı taşıyacak sağlamlıkta olmalıdır.", "Aynı sahada birden fazla dar nokta varsa makine bir kurulumda birkaç hedefi sırayla dolaşabilir; bu, her hedef için ayrı taşıma yapmaktan daha hızlıdır. İş listesi önceden hazırlanırsa kurulum-söküm döngüsü minimize edilir."] },
        ],
        sss: [
            { soru: "Örümcek platform ile makaslı platform arasındaki fark iş süremizi nasıl etkiler?", cevap: "Örümcek platformun taban dengeleme adımı ve teleskopik kol açma süresi standart makaslı platforma göre kurulumu biraz uzatır, ancak dar geçişten dolayı makaslı platformun hiç giremediği bir işte bu fark önemsizdir. Gerçek karşılaştırma iki makinenin süresi değil, hangisinin işi tamamlayabildiğidir. Standart makaslı platform geçebiliyorsa zaten daha hızlı ve ekonomik seçenektir; keşifte bu ayrım netleştirilir." },
            { soru: "Asma kat üzerinde çalışmak güvenli mi?", cevap: "Zeminin taşıma kapasitesi doğrulanmadan güvenli sayılmaz. Asma kat döşemesi genellikle ofis kullanımına göre hesaplanmıştır; makine ve operatör ağırlığı buna eklendiğinde proje değerinin aşılıp aşılmadığı kontrol edilmelidir. Belirsizlik durumunda platform zemin katta bırakılır ve teleskopik kolla üst kata erişilir; bu, riski taşıma hesabı yapılana kadar sıfırlar." },
            { soru: "Dar kapıdan geçen makine sepet kapasitesini de düşürür mü?", cevap: "Evet, genellikle örümcek platformların sepet kapasitesi geniş şaseli makaslı platformlara göre daha düşüktür ve kol açısı arttıkça bu kapasite üreticinin diyagramına göre daha da azalır. Sepette taşınacak kişi ve malzeme ağırlığı talep aşamasında bildirilmelidir; kapasitenin yetersiz kalması hâlinde iş iki aşamaya bölünebilir." },
            { soru: "Depo içinde zemine zarar verir mi?", cevap: "Standart lastik tekerlekli platformlara göre risk farklıdır; paletli taban zincirleri hassas kaplamalı zeminlerde iz bırakabilir. Epoksi veya perdahlı beton üzerinde koruyucu palet veya lastik ek parçası kullanılması istenebilir. Bu ihtiyaç önceden bildirilirse teslimatla birlikte hazırlanır; sahada sonradan fark edilirse iş durdurulup koruyucu düzen kurulur." },
            { soru: "Operatörümüzün makaslı platform belgesi var, örümcek platform kullanabilir mi?", cevap: "MYK platform operatörü yeterliliği genel olarak bu makine tipini kapsayabilir, fakat örümcek platformun kumanda mantığı ve taban dengeleme adımı farklıdır. Belgeli olsa bile operatörün ilk kullanımda kısa bir yerinde tanıtımdan geçmesi önerilir. Ekipte bu tip makineye aşina personel yoksa operatörlü kiralama seçeneği değerlendirilir." },
            { soru: "Her dar geçiş için örümcek platform mu gerekir?", cevap: "Hayır. Bazı durumlarda koridor genişliği dar şaseli standart makaslı platform (0,76-0,81 m) ile de çözülür; örümcek platform yalnız merdiven, kademeli zemin veya çok dar tek kanat kapı gibi standart şasenin de geçemediği noktalarda gerekir. Bu yüzden talep geldiğinde önce geçiş ölçüsü ve zemin tipi netleştirilir, gereksiz yere daha pahalı makine önerilmez." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'nin depo yapı karakteri (asma kat ofis, servis kapısı ölçüleri) önceki bölge sayfalarımızdaki saha gözlemine dayanır; örümcek platform teknik sınırları (palet yükü, kol açısı-kapasite ilişkisi) üretici genel prensipleridir, tesis özelinde rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Kemalpaşa OSB'ye Makaslı Platform Nakliye ve Teslimat Hizmeti",
        giris:
            "Kemalpaşa OSB'ye platform sevkiyatı, İzmir-Ankara karayolunun il çıkışına yakın bir kavşakta olmasından dolayı diğer birçok İzmir bölgesine göre daha öngörülebilir bir rota izler; ama teslimatı geciktiren şey çoğunlukla yol değil, OSB içindeki giriş prosedürü ve depo adresinin tarifidir. Kemalpaşa OSB büyük bir alana yayılmıştır ve aynı cadde üzerinde art arda benzer isimli tesisler bulunabilir; bu yüzden sevkiyat planı yalnız il-ilçe bilgisiyle değil, parsel numarası veya bina kapı numarasıyla kurulur. Akülü makaslı platformlar standart kamyonla taşınır ve lowbed gerektirmez, bu da OSB içi teslimatı hızlandırır; dizel arazi tipi makineler ağırlığı nedeniyle ayrı bir lowbed organizasyonu ister ve bu bir gün öncesinden planlanmalıdır. Sevkiyatın kendisi kadar önemli olan ikinci konu OSB kapısındaki araç ve ekipman kaydıdır — bazı tesisler kendi güvenlik biriminde ayrı bir giriş bildirimi ister, bazıları sadece OSB'nin genel kapı kaydıyla yetinir. Bu farkı önceden bilmek, aracın kapıda beklemeden doğrudan depo önüne ulaşmasını sağlar.",
        maddeler: [
            { baslik: "Parsel ve kapı numarasıyla adres netleştirme", metin: "Kemalpaşa OSB'de aynı sokak üzerinde birbirine yakın numaralı çok sayıda depo bulunabilir; sadece cadde adı ile gelen sürücü yanlış tesisin önünde durabilir. Talep alınırken parsel numarası, varsa OSB'nin kendi blok/ada kodu ve tesis girişindeki tabela bilgisi istenir. Bu bilgi sevkiyat öncesi sürücüye iletilir; navigasyon uygulamalarının OSB içi sokakları her zaman doğru göstermediği bilinir, bu yüzden son 500 metrelik tarif sözlü olarak da doğrulanır." },
            { baslik: "OSB kapı kaydı ile tesis güvenliğini ayrı yönetmek", metin: "OSB'ye giriş genel kapı kaydından geçer; bu genellikle araç plakası ve sürücü kimliğiyle hızlı işler. Ancak bazı tesisler kendi güvenlik biriminde ayrıca ziyaretçi/tedarikçi bildirimi ister ve bu bildirim önceden yapılmazsa araç tesis önünde ikinci bir bekleme yaşar. İki kaydın da hangi bilgiyi istediği talep aşamasında saha yetkilisinden teyit edilir; iki ayrı kayıt varsa ikisi de sevkiyat çıkmadan tamamlanır." },
            { baslik: "Akülü ve dizel makine için farklı araç planı", metin: "Akülü makaslı platformlar standart kasa kamyonla taşınır ve Kemalpaşa'ya sabah çıkan sevkiyatlarda çoğu zaman öğleden önce teslim edilir. Dizel arazi tipi makineler ağır olduğu için lowbed gerekir; bu araç bulma ve trafik planlaması standart araçtan daha uzun sürer, bu yüzden 1 gün önceden planlanması istenir. İki makine türü aynı sahaya gidiyorsa nakliye tek organizasyonda birleştirilebilir ve toplam maliyet düşer." },
            { baslik: "Rampa, geçiş yüksekliği ve indirme noktası kontrolü", metin: "Teslimat aracı depo önüne ulaştığında platform genellikle kendi rampasından iner; bu rampanın açacağı alan ve zemin sağlamlığı önceden kontrol edilir. Bazı depolarda yükleme kapısı önü sürekli forklift trafiğine açıktır; bu durumda indirme için ayrı bir zaman penceresi veya alternatif giriş noktası saha sorumlusuyla kararlaştırılır. Kapı yüksekliği ve geçiş genişliği de teslimat öncesi ölçüyle doğrulanır, sahada tahmine bırakılmaz." },
            { baslik: "İade sevkiyatını iş bitişiyle senkronize etmek", metin: "İş tamamlandığında makinenin ne zaman alınacağı, teslimattaki gibi net bir zaman penceresiyle planlanır. Vardiya sonu veya OSB kapı kapanış saati iade aracının geçişini etkileyebilir; bu bilgi iş başlarken netleştirilir. Makine son gün şarj seviyesi uygun, temiz ve erişilebilir bir noktada bırakılır; iade aracı geldiğinde beklemeden yükleme yapılabilir. Plaka veya sürücü değişikliği olursa OSB kapı kaydı yeniden yapılmalıdır." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa OSB teslimat süreç tablosu", paragraflar: ["Aşağıdaki tablo, sevkiyatın hangi aşamasında hangi bilginin gerekli olduğunu özetler; adımların sırası atlanırsa araç kapıda veya tesis önünde bekler."], tablo: { basliklar: ["Aşama", "Gerekli bilgi", "Kim doğrular", "Riskli eksik"], satirlar: [["Adres", "Parsel/kapı numarası, tabela", "Talep eden firma", "Yanlış tesis önünde bekleme"], ["OSB kapı kaydı", "Plaka, sürücü kimliği", "OSB güvenlik", "Kapıda bekleme"], ["Tesis girişi", "Ziyaretçi/tedarikçi bildirimi", "Tesis güvenlik birimi", "İkinci bekleme noktası"], ["İndirme", "Rampa alanı, zaman penceresi", "Saha sorumlusu", "Forklift trafiğiyle çakışma"], ["İade", "Çıkış saati, araç bilgisi", "Depo/OSB kabul", "Makinenin sahada fazladan gün beklemesi"]] } },
            { baslik: "Aynı OSB içinde birden fazla teslimat", paragraflar: ["Kemalpaşa OSB'de birden fazla tesise aynı gün teslimat yapılacaksa rota, mesafeye göre değil kapı prosedürüne göre sıralanır; kaydı hızlı olan tesis önce, ek bildirim isteyen tesis ona göre planlanan zamanda ziyaret edilir. Bu sıralama, ilk tesiste beklemenin ikinci teslimatı geciktirmesini önler.", "Birden fazla makine aynı güzergâhta taşınıyorsa tek araçta konsolide edilip edilemeyeceği değerlendirilir; akülü makinelerin çoğu standart kasa araca sığar. Konsolide sevkiyat hem maliyeti hem OSB kapı geçiş sayısını azaltır."] },
            { baslik: "Acil ihtiyaç ve aynı gün teslimat sınırları", paragraflar: ["Kemalpaşa OSB'nin karayoluna yakınlığı sayesinde sabah açılan taleplerde aynı gün teslimat çoğu zaman mümkündür, ancak bu OSB kapı kaydının da aynı hızda tamamlanmasına bağlıdır. Kayıt gecikirse araç yolda değil kapıda bekler; bu yüzden acil talep açıldığında ilk adım tesisin güvenlik biriminden hızlı kayıt onayı almaktır.", "Dizel arazi tipi gibi lowbed gerektiren makinelerde aynı gün teslimat genellikle mümkün değildir; bu tip acil taleplerde teklif aşamasında gerçekçi bir zaman çizelgesi verilir, garanti edilmeyen bir süre söylenmez."] },
        ],
        sss: [
            { soru: "Kemalpaşa OSB içindeki teslimat süresi ne kadar?", cevap: "Akülü makaslı platformlarda standart planlama 1-2 iş günüdür; sabah açılan taleplerde OSB kapı kaydı hızlı tamamlanırsa aynı gün teslimat çoğu zaman mümkündür. Dizel arazi tipi makinelerde lowbed organizasyonu gerektiği için süre en az 1 gün daha uzundur. Kesin süre, tesisin kendi giriş prosedürüne ve talep anındaki araç uygunluğuna göre değişir." },
            { soru: "OSB kapı kaydı için hangi bilgiler önceden istenir?", cevap: "Genel kural araç plakası ve sürücü kimlik bilgisidir; bazı tesisler ayrıca firma ismi, iş tanımı veya iletişim kişisi ister. Kesin liste tesisin güvenlik biriminden teyit edilir çünkü OSB genelinde tek bir standart yoktur. Bu bilgiler sevkiyat çıkmadan önce toplanır ve sürücüye önceden iletilir; kapıda son dakika bilgi tamamlama teslimatı geciktirir." },
            { soru: "Depo adresini sadece cadde ismiyle verirsek sorun olur mu?", cevap: "Olabilir. Kemalpaşa OSB'de aynı cadde üzerinde birbirine yakın numaralı çok sayıda tesis bulunur ve navigasyon uygulamaları OSB içi sokakları her zaman doğru göstermez. Parsel numarası veya tesis girişindeki tabela bilgisi verilirse sürücü doğrudan hedefe ulaşır; sadece cadde bilgisiyle gelen araç yanlış tesis önünde durup zaman kaybedebilir." },
            { soru: "Aynı sahaya iki makine gönderilecekse nakliye nasıl planlanır?", cevap: "Mümkünse tek araçta konsolide edilir; akülü makinelerin çoğu standart kasa araca birlikte sığar ve bu hem maliyeti hem OSB kapı geçiş sayısını azaltır. Farklı türde makineler (biri akülü biri dizel arazi tipi) gerekiyorsa iki ayrı araç planlanır ama teslim saatleri saha programına göre eşleştirilir, gereksiz iki ayrı bekleme yaratılmaz." },
            { soru: "İade aracı ilk teslimattan farklı olursa ne değişir?", cevap: "Sürücü veya plaka değişirse OSB kapı kaydı ve varsa tesisin kendi güvenlik bildirimi yeniden yapılmalıdır. Bu bilgi belli olur olmaz paylaşılmalıdır; son anda değişiklik kayıt gecikmesine ve makinenin sahada fazladan beklemesine yol açabilir. İade planı, iş bitiş tarihine yakın bir zamanda kesinleştirilip her iki tarafça teyit edilir." },
            { soru: "Yükleme kapısı sürekli forklift trafiğine açıksa indirme nasıl yapılır?", cevap: "Bu durumda indirme için ayrı bir zaman penceresi veya depo yönetiminin belirlediği alternatif giriş noktası kullanılır. Saha sorumlusuyla önceden koordinasyon kurulursa platform, mal kabul/sevkiyat yoğunluğunun düşük olduğu bir aralıkta indirilir ve rampa alanı kısa süreliğine forklift trafiğine kapatılır; bu koordinasyon yapılmazsa indirme süresi uzayabilir ve depo operasyonu aksayabilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'nin İzmir-Ankara karayoluna yakınlığı ve OSB içi tesislerin kendi güvenlik prosedürü uygulayabilmesi genel OSB işleyiş bilgisidir; belirli tesisin kapı kuralı, bekleme süresi veya adres uydurulmamıştır — güncel bilgi ilgili saha yetkilisinden teyit edilir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Kemalpaşa OSB Depolarında İstifleme Forklift Kiralama",
        giris:
            "Kemalpaşa OSB'deki lojistik depolarda yüksek raf erişimi tek başına platform işi değildir; günlük stok hareketi forkliftle yürür ve raf üstü bakım genellikle bu operasyonun aksamadan devam etmesi istenen bir ortamda yapılır. Bu yüzden platform talebiyle birlikte istifleme forklift talebi de sık gelir — ya raf montajı sırasında paletin taşınması için, ya da bakım öncesi rafın boşaltılması için. Kemalpaşa'daki depoların büyük bölümünde koridor genişliği ve raf yüksekliği birbirine bağlı iki değişkendir: dar koridorlu depo genellikle daha yüksek rafla dengelenir, bu da reach truck veya dar koridor istif forkliftini gerektirir. Standart karşı ağırlıklı forklift geniş koridorlarda hızlı çalışırken, 9-11 metre raf yüksekliğine çıkan dar koridor modelleri koridor genişliğine göre şase ölçüsü ayrı seçilir. Talep alırken raf yüksekliği kadar koridor genişliği ve palet ağırlığı da netleştirilir; bunlar birlikte doğru mast ve şase kombinasyonunu belirler.",
        maddeler: [
            { baslik: "Raf yüksekliği ile mast sınıfını eşleştirmek", metin: "Kemalpaşa'daki depolarda raf yüksekliği 8-12 metre bandında yaygındır; bu, forkliftin mast uzatma kapasitesiyle karşılaştırılır. Katalogtaki maksimum kaldırma yüksekliği genellikle çatal ucundaki değeri gösterir, palet üstündeki serbest alan ayrıca hesaplanmalıdır. En üst raf gözüne palet koyarken tavan veya sprinkler hattına çarpma riski olmaması için gerçek serbest yükseklik ölçülür; bu ölçü depo krokisinden değil sahadan alınır." },
            { baslik: "Koridor genişliğine göre şase seçimi", metin: "Dar koridorlu depolarda standart karşı ağırlıklı forklift dönemez; reach truck veya dar koridor istif forklifti gerekir. Koridor genişliği raf ayağından raf ayağına en dar noktadan ölçülür, palet taşmaları ve varsa sprinkler kolonu etkin genişliği daraltabilir. Şase seçimi bu net ölçüye göre yapılır; geniş şaseli bir makine dar koridora zorlanırsa raf hasarı veya çarpma riski doğar." },
            { baslik: "Palet ağırlığı ve kaldırma kapasitesi", metin: "Forkliftin kaldırma kapasitesi yükseklikle birlikte düşer; katalogdaki maksimum kapasite genellikle düşük yükseklikte geçerlidir, üst raf katına çıkarken gerçek kapasite üreticinin yük diyagramından okunur. Ağır paletler (500 kg üzeri) için bu fark önemlidir; talep sırasında palet ağırlığı ve hedef raf katı birlikte bildirilirse doğru kapasiteli model seçilir." },
            { baslik: "Akülü tahrik ve şarj planı", metin: "Kapalı depo içinde dizel forklift kullanılmaz; akülü model zorunludur. Kemalpaşa'daki depoların çoğu çift vardiya çalıştığından akü kapasitesi ve şarj noktası günlük operasyona göre planlanır. Yoğun kullanımda hızlı şarj veya yedek akü değişimi gerekebilir; bu ihtiyaç önceden bildirilirse teslimatla birlikte kurgulanır. Şarj alanı yaya ve araç trafiğinden ayrı, havalandırılan bir noktada olmalıdır." },
            { baslik: "Raf montajı ile stok istiflemeyi ayrı planlamak", metin: "Raf montajı sırasında forklift ağır çelik parçaları taşırken, günlük stok istiflemede palet hareketi öncelik alır; ikisi aynı koridoruysa zaman dilimi ayrılır. Montaj bitene kadar o koridorda stok hareketi durdurulabilir veya alternatif rotaya yönlendirilebilir. Bu ayrım depo yönetimiyle iş başlamadan netleştirilir; aksi hâlde montaj ekibiyle depo operasyonu aynı dar alanda çakışır." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa depo forklift seçim tablosu", paragraflar: ["Aşağıdaki tablo, koridor ve raf ölçüsüne göre hangi forklift sınıfının uygun olduğunu gösterir; kesin seçim sahadan alınan ölçüyle netleşir."], tablo: { basliklar: ["Koridor genişliği", "Raf yüksekliği", "Uygun sınıf", "Not"], satirlar: [["3,5 m ve üzeri", "6 – 8 m", "Standart karşı ağırlıklı", "Geniş koridor, hızlı çevrim"], ["2,5 – 3,5 m", "8 – 10 m", "Reach truck", "Orta koridor, yüksek raf"], ["1,8 – 2,5 m", "10 – 12 m", "Dar koridor istif forklift", "Çok dar koridor, yüksek raf"], ["Değişken", "Montaj aşaması", "Standart karşı ağırlıklı (geçici)", "Raf henüz kurulmamış, açık alan"]] } },
            { baslik: "Forklift ile platform işini aynı sahada birleştirmek", paragraflar: ["Raf montajı veya büyük bakım projelerinde forklift malzeme taşırken platform yüksekte montaj yapar; bu iki makine aynı koridorda eşzamanlı çalışmaz. İş planı forklift saatleri ile platform saatlerini ayırır, ya da koridor iki bölüme ayrılıp her makine kendi bölümünde ilerler. Kemalpaşa'daki geniş depolarda bu ayrım toplam süreyi kısaltır çünkü iki ekip birbirini beklemeden ilerleyebilir.", "Aynı nakliyeyle iki makine geliyorsa lowbed veya standart araç kombinasyonu önceden planlanır; forklift genellikle standart araçla, ağır raf malzemesi ayrı bir araçla taşınabilir."] },
            { baslik: "Operatör belgesi ve kısa süreli kiralama", paragraflar: ["Forklift operatörlüğü ayrı bir MYK yeterlilik belgesi gerektirir; platform operatörü belgesi forklift kullanımını kapsamaz. Ekipte belgeli forklift operatörü yoksa operatörlü kiralama seçeneği değerlendirilir. Kısa süreli raf montaj işlerinde günlük tarife, birkaç haftayı bulan projelerde haftalık/aylık paket daha ekonomiktir; bu karar iş süresine göre teklif aşamasında karşılaştırılır.", "Forklift ve platform aynı projede birlikte kiralanıyorsa nakliye tek organizasyonda birleştirilerek toplam maliyet düşürülebilir."] },
        ],
        sss: [
            { soru: "Dar koridorlu deponuz için hangi forklift gerekir?", cevap: "Koridor genişliği raf ayağından raf ayağına en dar noktadan ölçülür; 2,5 metrenin altındaki koridorlarda standart karşı ağırlıklı forklift dönemez, reach truck veya dar koridor istif forklifti gerekir. Raf yüksekliği de bu seçimi etkiler çünkü dar şaseli modellerin çoğu yüksek mast sınıfında üretilir. Talep sırasında koridor ölçüsü ve raf yüksekliği birlikte bildirilirse doğru model ilk seferde gelir." },
            { soru: "Forklift ile platform aynı anda aynı koridorda çalışabilir mi?", cevap: "Hayır, ikisi eşzamanlı aynı koridoruysa çarpışma riski oluşur. İş planı ya zaman dilimlerine ayrılır ya da koridor fiziksel olarak iki bölüme ayrılıp her makine kendi bölümünde çalışır. Raf montajı gibi büyük projelerde bu ayrım depo yönetimiyle iş başlamadan netleştirilir; aksi hâlde iki ekip birbirini bekler ve toplam süre uzar." },
            { soru: "Forkliftin kaldırma kapasitesi yükseklikle değişir mi?", cevap: "Evet. Katalogdaki maksimum kapasite genellikle düşük yükseklikte geçerlidir; üst raf katına çıkarken gerçek kapasite üreticinin yük diyagramına göre düşer. Ağır paletler için bu fark önemlidir. Palet ağırlığı ve hedef raf katı talep sırasında bildirilirse, o yükseklikte gerçek kapasiteyi karşılayan model seçilir; katalog rakamına güvenip sahada kapasite aşımı yaşanmaz." },
            { soru: "Çift vardiyada akü yetiyor mu?", cevap: "Tek şarjla tipik kullanımda bir vardiya genellikle yeterlidir; çift vardiyada makinenin her vardiya sonunda şarja bağlanması kuraldır. Yoğun kullanımda hızlı şarj veya yedek akü değişimi gerekebilir. Vardiya planı talep sırasında paylaşılırsa şarj düzeni teslimat öncesi buna göre kurgulanır ve vardiya ortasında akü nedeniyle duruş yaşanmaz." },
            { soru: "Raf montajı için forklift ile platformu birlikte mi kiralamalıyız?", cevap: "Genellikle evet; montaj sırasında forklift ağır çelik parçaları taşırken platform yüksekte bağlantı ve montaj yapar. İkisi aynı proje kapsamında planlanırsa nakliye tek organizasyonda birleşir ve toplam maliyet düşer. Ancak eşzamanlı çalışma yerine iş saatleri veya koridor bölümleri ayrılarak ilerlenir; bu planlama proje başlamadan yapılır." },
            { soru: "Operatörsüz forklift kiralayabilir miyiz?", cevap: "Ekibinizde geçerli MYK forklift operatör belgesi olan personel varsa evet, operatörsüz kiralama mümkündür. Belge platform operatörlüğünden ayrıdır; iki makineyi kullanacak ayrı yeterlilikler gerekir. Belgeli personel yoksa operatörlü kiralama tek yasal seçenektir; karma model de kurulabilir, ilk günler operatörlü başlanıp ekip alıştıktan sonra devam edilebilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB depolarındaki koridor/raf yükseklik ilişkisi önceki bölge sayfalarımızdaki saha gözlemine dayanır; forklift mast/kapasite ilişkisi sektör standardı genel bilgisidir, tesis özelinde rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Kemalpaşa OSB'de Eklemli Platform (Boom) Kiralama",
        giris:
            "Kemalpaşa OSB'deki depoların tavan altı, makaslı platformun doğrudan dikey erişimiyle her zaman çözülmez. Aydınlatma rayı, sprinkler hattı ve kablo tavası genellikle kolonlar arasında, raf üstünden geçer; bazen bu hat bir boru köprüsünün, vinç ray sisteminin veya çelik konstrüksiyon çaprazının arkasında kalır. Makaslı platform hedefin doğrudan altına yaklaşabildiğinde verimlidir, ama engelin arkasına uzanmak gerektiğinde eklemli platform (boom lift) devreye girer — kolu yukarı, yana ve gerekirse aşağı doğru bükülerek engelin üstünden veya yanından hedefe ulaşabilir. Kemalpaşa'daki depolarda bu ihtiyaç en çok kablo tavası çaprazlaması, boru hattı geçişi veya sprinkler başlığının kolon arkasında kalması durumunda ortaya çıkar. Eklemli platform seçimi, hedefin yatay uzaklığı ve engelin yüksekliği birlikte ölçülerek yapılır; sadece çalışma yüksekliğine bakmak yanlış model seçimine yol açar çünkü boom'un asıl değeri yukarı-üstünden-aşağı erişim yeteneğindedir.",
        maddeler: [
            { baslik: "Yatay erişim ile çalışma yüksekliğini birlikte ölçmek", metin: "Boom platformun katalog değeri genellikle maksimum çalışma yüksekliği ve maksimum yatay erişimi ayrı ayrı verir; gerçek hedef ikisinin kesişiminde bir noktadadır. Kemalpaşa'daki depo tavanında bir boru köprüsünün arkasındaki sprinkler başlığına ulaşmak için hem yükseklik hem yatay mesafe aynı anda gerekir, bu da üreticinin yük-erişim diyagramında daha düşük bir kapasite noktasına denk gelebilir. Keşifte hedefin üç boyutlu konumu (yükseklik, yatay uzaklık, engelin kalınlığı) birlikte ölçülür." },
            { baslik: "Elektrikli eklemli platform ile kapalı alan uyumu", metin: "Kapalı depo içinde dizel boom kullanılmaz; elektrikli eklemli platform tercih edilir. Elektrikli modellerin çalışma yüksekliği genellikle 12-18 metre bandında, yatay erişimi ise 6-8 metreye kadar çıkar. Bu sınıf, Kemalpaşa'daki standart depo tavanı ve orta büyüklükteki engelleri aşmak için çoğunlukla yeterlidir; daha büyük yatay erişim gerekiyorsa geniş dönüş yarıçapı ve zemin taşıma kontrolü ayrıca yapılır." },
            { baslik: "Kolon ve raf arasında dönüş alanı", metin: "Boom platformun taşıma şasesi makaslı platforma göre genellikle daha uzundur; koridor içinde 180 derece dönüş gerektiğinde bu uzunluk sorun yaratabilir. Kemalpaşa'daki raf aralarında boom kullanılacaksa dönüş yarıçapı önceden kolon ve raf ayağı arası net mesafeyle karşılaştırılır. Dönüş yetersizse makine koridor dışından, açık ana yoldan hedefe yaklaşacak şekilde konumlandırılır; bu, keşifte belirlenmesi gereken bir rota kararıdır." },
            { baslik: "Engelin arkasına uzanırken yük ve denge kontrolü", metin: "Kol tam açıldığında ve yatay uzanma maksimuma yaklaştığında platformun taşıyabileceği kişi ve alet ağırlığı üreticinin diyagramına göre düşer. Sepette iki kişi ve montaj malzemesiyle çalışılacaksa bu senaryo için kapasite özel olarak kontrol edilir; aşırı yük algılama sistemi sınırı aştığında kolu durdurur, bu bir arıza değil güvenlik fonksiyonudur. Doğru kapasiteli model talep sırasında iş tanımına göre seçilir." },
            { baslik: "Forklift trafiğiyle boom şasesini ayırmak", metin: "Boom platformun taban şasesi geniş bir alana yayılabilir ve kol hareket ederken sepetin izlediği yörünge değişir; bu yörünge forklift yoluyla kesişmemelidir. Çalışma hücresi, kolun tüm hareket menzilini kapsayacak şekilde bariyerlenir, sadece taban etrafı değil. Depo yönetimi bu süre boyunca alternatif forklift rotası tanımlar; kol hareket hâlindeyken hücreye araç girişine izin verilmez." },
        ],
        ekBolumler: [
            { baslik: "Makaslı platform ile eklemli platform karar tablosu", paragraflar: ["Aşağıdaki tablo, Kemalpaşa OSB'deki tipik depo hedeflerinde iki makine tipi arasında seçimi neyin belirlediğini gösterir."], tablo: { basliklar: ["Hedef durumu", "Uygun makine", "Belirleyici ölçü", "Kaçınılan hata"], satirlar: [["Hedef doğrudan altından erişilebilir", "Makaslı platform", "Dikey mesafe", "Gereksiz yere pahalı boom seçimi"], ["Hedef boru/kablo tavası arkasında", "Eklemli platform (boom)", "Yatay erişim + yükseklik", "Sepetten aşırı uzanma girişimi"], ["Kolon çaprazı üstünde nokta hedef", "Eklemli platform", "Kol açısı-kapasite ilişkisi", "Kapasite aşımıyla otomatik durma"], ["Dar raf koridoru, düz hedef", "Dar şase makaslı platform", "Koridor genişliği", "Boom'un dönüş alanı yetmemesi"]] } },
            { baslik: "Keşif sırasında engel haritası çıkarmak", paragraflar: ["Boom talebi geldiğinde önce depo tavanının fotoğrafı ve varsa tesisat projesi istenir; kablo tavası, sprinkler hattı ve boru köprüsünün gerçek konumu bu şekilde önceden görülür. Saha ziyaretinde bu engellerin yüksekliği ve kalınlığı ölçülür, hedefin arkasında kalıp kalmadığı netleştirilir. Bu adım atlanırsa doğru makine gelse bile operatör sahada kolun engelle çarpışmayacağı açıyı bulmakla vakit kaybedebilir.", "Kemalpaşa'daki bazı depolarda tesisat sonradan eklenmiştir ve orijinal projede yoktur; bu durumda saha ölçüsü esas alınır, eski proje referans olarak kullanılmaz."] },
            { baslik: "Nakliye ve kurulum süresi", paragraflar: ["Elektrikli eklemli platformlar akülü makaslı platformlara benzer şekilde standart araçla taşınır ve lowbed gerektirmez; Kemalpaşa OSB'nin karayoluna yakınlığı sayesinde teslimat süresi genellikle akülü makaslı platformla aynı bandda kalır. Kurulum, kolun test hareketiyle başlar; operatör kolu tam açmadan önce çalışma alanının bariyerli ve serbest olduğunu doğrular.", "Uzun süreli montaj projelerinde (raf sistemine entegre aydınlatma gibi) boom ile makaslı platform aynı sahada farklı iş paketleri için birlikte kiralanabilir; nakliye tek organizasyonda birleştirilerek maliyet düşürülür."] },
        ],
        sss: [
            { soru: "Boom platform ile makaslı platform arasındaki temel fark nedir?", cevap: "Makaslı platform doğrudan dikey erişim sağlar ve hedefin altına yaklaşabildiğinde en verimli seçenektir. Eklemli platform (boom) kolunu yukarı, yana ve aşağı bükerek bir engelin üstünden veya arkasından hedefe ulaşabilir. Kemalpaşa'daki depo tavanında boru köprüsü veya kablo tavası gibi bir engel varsa ve hedef bunun arkasındaysa boom gerekir; engel yoksa makaslı platform hem daha ekonomik hem daha hızlı kurulur." },
            { soru: "Boom kolunu tam açtığımızda sepet kapasitesi düşer mi?", cevap: "Evet. Kol açıldıkça ve yatay uzanma arttıkça üreticinin yük diyagramına göre taşınabilir kişi ve alet ağırlığı azalır. Sepette iki kişi ve malzemeyle çalışılacaksa bu senaryo talep aşamasında bildirilmelidir; aşırı yük algılama sistemi sınır aşımında kolu otomatik durdurur, bu arıza değil güvenlik fonksiyonudur. Doğru kapasiteli model iş tanımına göre önceden seçilir." },
            { soru: "Depo koridorunda boom platform dönebilir mi?", cevap: "Boom'un taşıma şasesi makaslı platforma göre genelde daha uzundur, bu yüzden dar raf koridorunda dönüş zor olabilir. Kolon ve raf ayağı arası net mesafe önceden ölçülür; dönüş yetersizse makine açık ana yoldan hedefe yaklaşacak şekilde konumlandırılır. Bu rota kararı keşifte netleştirilir, teslimat gününe bırakılmaz." },
            { soru: "Kapalı depoda dizel boom kullanılabilir mi?", cevap: "Hayır, kapalı alanda emisyon kısıtı nedeniyle dizel boom kullanılmaz; elektrikli eklemli platform tercih edilir. Elektrikli modeller genellikle 12-18 metre çalışma yüksekliği ve 6-8 metre yatay erişim sunar, bu Kemalpaşa'daki standart depo tavanı ve orta büyüklükteki engeller için çoğunlukla yeterlidir. Daha büyük yatay erişim gerekiyorsa üst sınıf modeller ayrıca değerlendirilir." },
            { soru: "Boom kolu hareket ederken forklift geçebilir mi?", cevap: "Hayır. Kolun tüm hareket menzili bariyerlenir, sadece makinenin taban çevresi değil; sepet hareket ederken izlediği yörünge de bu alana dahildir. Depo yönetimi bu süre boyunca alternatif forklift rotası tanımlar. Kol hareket hâlindeyken hücreye araç girişine izin verilmez; geçiş gerekiyorsa kol önce güvenli konuma indirilir." },
            { soru: "Engelin arkasındaki hedefi görmeden teklif verebilir misiniz?", cevap: "Kesin model önerisi için engelin yüksekliği, kalınlığı ve hedefe olan yatay uzaklığı gerekir; bu bilgi olmadan verilen teklif tahminidir. Fotoğraf ve varsa tesisat projesi talep aşamasında istenir, gerekirse kısa bir saha ziyaretiyle ölçü tamamlanır. Bu adım, teslimat günü kolun engelle çarpışmayacağı açının sahada aranmasını önler." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB depolarındaki tesisat/kablo tavası yerleşimi genel depo yapı bilgisine dayanır; boom platform yükseklik/erişim/kapasite ilişkisi üretici genel prensipleridir, tesis özelinde rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Kemalpaşa OSB'de İç Mekan Depo Platform Kiralama",
        giris:
            "İç mekan depo platform kiralama, bu şirketin kuruluş nedenidir: Kemalpaşa OSB'deki yüksek raflı lojistik depolarda tavan altı erişimi. Depo içi iş, açık saha veya inşaat işinden farklı bir mantıkla ilerler — zemin genellikle beton veya epoksi kaplamayla düz ve sağlamdır, hava koşulu sorun değildir, ama forklift trafiği, raf koridoru dar geçişleri, stok doğruluğu ve emisyon kısıtı gibi kendine özgü kısıtlar vardır. Kemalpaşa'daki depoların büyük bölümü 8-14 metre tavan yüksekliği bandındadır ve bu, akülü makaslı platformu neredeyse her işin doğal makinesi hâline getirir; dizel makine kapalı alanda hiçbir gerekçeyle kullanılmaz. İç mekan işin dört ana kalemi vardır: raf üstü bakım ve montaj, aydınlatma ile tesisat hattı çalışması, sprinkler ve yangın sistemi erişimi, ve depo devri sırasındaki genel bakım turu. Bu sayfa bu dört kalemi de kapsayan genel iç mekan platform hizmetini anlatır; daha spesifik ihtiyaçlar (dar geçiş, boom erişimi, aydınlatma bakımı) için ayrı hizmet sayfalarımız da vardır.",
        maddeler: [
            { baslik: "Raf yüksekliğine göre metraj hesabı", metin: "Depo içi işin ilk adımı hedefin gerçek yüksekliğini ölçmektir; en üst raf gözünün kotu veya tavan tesisatının yüksekliği alınır, üzerine yaklaşık 2 metre uzanma payı eklenir. Kemalpaşa'daki yeni nesil depolarda 10-12 metre tavan yaygındır, bu 12-14 metre çalışma yüksekliği sınıfına denk gelir. Sepet tabanının hedefin altında kaldığı unutulmamalıdır — çalışma yüksekliği operatörün uzanabildiği kotu, platform yüksekliği ise sepet tabanını ifade eder; bu ikisinin karıştırılması sahada en sık görülen 'makine yetmiyor' şikâyetinin nedenidir." },
            { baslik: "Koridor genişliği ve şase eşleşmesi", metin: "Raf arasında çalışılacaksa makinenin şase genişliği koridor ölçüsüyle karşılaştırılır. Standart akülü makaslı şase yaklaşık 1,15 metredir; koridor bundan darsa 0,76-0,81 metre şaseli dar modeller gerekir. Koridor genişliği raf ayağından raf ayağına en dar noktadan ölçülür — palet taşmaları ve sprinkler boruları etkin genişliği düşürebilir. Bu ölçü talepte belirtilirse doğru şase ilk seferde gelir, teslimat günü ikinci sevkiyat gerekmez." },
            { baslik: "Zemin kaplaması ve iz bırakmama şartı", metin: "Kemalpaşa'daki depo zeminleri çoğunlukla epoksi kaplama veya perdahlı betondur. Standart siyah lastik bu yüzeylerde iz bırakır; iz bırakmayan (non-marking) beyaz dolgu lastikli modeller tercih edilmelidir. Yükleme rampası çevresindeki kot farkları ve genleşme derzleri için makinenin çukur önleme sistemi devrede olmalıdır. Zemin kaplaması talep sırasında belirtilirse doğru lastik tipi teslimatla birlikte hazır gelir." },
            { baslik: "Forklift trafiğiyle çalışma hücresini ayırmak", metin: "Depo içi işin en sık göz ardı edilen kısmı, platformun forklift trafiğinden fiziksel olarak ayrılmasıdır. Çalışılacak koridor iki uçtan bariyerlenir, ilgili raf gözleri gerekiyorsa önceden boşaltılır ve depo yönetimi alternatif toplama rotasını duyurur. Platform yalnız tamamen indirilmiş durumda yer değiştirir. Bu düzen, yukarıdaki ekibi hareketli yükten korurken depo operasyonunun diğer koridorlarda kesintisiz sürmesine imkân verir." },
            { baslik: "Akülü tahrik ve vardiya-şarj planı", metin: "Depo içinde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü model zorunludur. Kemalpaşa'daki depoların çoğu çift vardiya çalıştığı için akü kapasitesi ve şarj noktası teslimat öncesi planlanmalıdır: makine her vardiya sonunda şarja bağlanmalı, derin deşarj edilmemelidir. Şarj noktası yaya ve forklift trafiğinden ayrı, makinenin park alanına yakın belirlenmelidir; bu, vardiya ortası duruşları önler." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa depo tiplerinde iç mekan iş-makine tablosu", paragraflar: ["Aşağıdaki tablo, bölgedeki tipik depo içi iş senaryolarında hangi makine sınıfının gerektiğini gösterir. Kesin seçim saha ölçüsüyle netleşir."], tablo: { basliklar: ["İş türü", "Tipik metraj", "Uygun sınıf", "Ek koşul"], satirlar: [["Raf üstü genel bakım", "10 – 14 m", "Akülü makaslı, standart/dar şase", "Koridor genişliğine göre"], ["Aydınlatma/tesisat hattı", "8 – 12 m", "Akülü makaslı", "İz bırakmayan lastik"], ["Sprinkler/yangın sistemi", "10 – 14 m", "Akülü makaslı veya eklemli", "Engel varsa boom gerekir"], ["Raf montajı (yeni)", "10 – 14 m", "Akülü makaslı, iki makine paralel", "Forklift ile koordinasyon"], ["Depo devri genel turu", "Değişken", "Akülü makaslı", "Çoklu koridor rotası"]] } },
            { baslik: "Depo içi işi bir günlük mü, dönemsel mi planlamak", paragraflar: ["Kemalpaşa'daki depo içi işler iki tipe ayrılır: kısa nokta işleri (aydınlatma değişimi, tek koridor raf onarımı — 1-3 gün) ve dönemsel projeler (komple raf montajı, sprinkler revizyonu, depo devri — 2-8 hafta). Kısa işlerde günlük tarife doğaldır; üç günü geçen işlerde haftalık paket genellikle daha ekonomiktir çünkü nakliye ve hazırlık maliyeti tek güne değil haftaya yayılır.", "Proje süresi belirsizse kısa minimum süreyle başlayıp uzatmak, uzun süreyle başlayıp erken iade etmekten avantajlıdır; erken iadede minimum süre bedeli geçerli olur. Bu karşılaştırma teklif aşamasında iki senaryo hâlinde gösterilir."] },
            { baslik: "Talep öncesi hazırlanacak bilgi seti", paragraflar: ["Kemalpaşa'daki depo içi teslimatlarda beş bilgiyi talep aşamasında netleştiriyoruz: hedef noktanın gerçek yüksekliği, zemin tipi ve kaplaması, makinenin gireceği en dar açıklığın ölçüsü, raf koridoru genişliği (raf arası çalışılacaksa) ve vardiya düzeni. Bu bilgiler saha fotoğrafıyla birlikte geldiğinde teklif aynı gün netleşir ve yanlış makine sevkiyatı riski ortadan kalkar.", "OSB içi teslimatlarda tesis giriş prosedürü (iş izni, İSG evrakı, araç kaydı) süreye dahildir; evraklar önceden hazırlanırsa makine kapıda beklemez. Periyodik kontrol belgesi (yeşil etiket) makineyle birlikte teslim edilir."] },
        ],
        sss: [
            { soru: "İç mekan depo işi için hangi platform tipi standarttır?", cevap: "Kapalı depo içinde akülü makaslı platform standart çözümdür; emisyonsuz çalışır, epoksi ve perdahlı betonda uygun lastikle iz bırakmaz, dikey erişimde verimlidir. Hedef doğrudan altına yaklaşılamıyorsa (bir engel arkasındaysa) eklemli platform (boom), koridor çok darsa dar şaseli veya paletli örümcek platform gibi alternatif sınıflar devreye girer; bu ayrım hedefin gerçek konumuna göre keşifte yapılır." },
            { soru: "Sepet tabanı ile çalışma yüksekliği arasındaki fark nedir?", cevap: "Çalışma yüksekliği, operatörün sepetten uzanarak eriştiği en üst noktayı ifade eder; platform yüksekliği ise sepetin tabanının yerden yüksekliğidir. Aradaki fark yaklaşık 1,8-2 metredir. 10 metre raf için 12 metre çalışma yüksekliği sınıfı seçilir demek, sepet tabanının 10 metreye değil yaklaşık 8-8,5 metreye çıkacağı anlamına gelir. Bu ikisinin karıştırılması sahada makinenin yetmediği hissini yaratan en yaygın nedendir." },
            { soru: "Forklift trafiği varken depo içinde platform çalıştırılabilir mi?", cevap: "Evet, koridor iki uçtan bariyerlenip alternatif forklift rotası tanımlandığında mümkündür. Platform çalıştığı koridorda forklift geçişine izin verilmez; forkliftin acil erişimi gerekirse platform tamamen indirilir ve alan geçici olarak devredilir. Bu düzen depo operasyonunun diğer koridorlarda kesintisiz sürmesine imkân verirken, yukarıdaki ekibi hareketli yükten korur." },
            { soru: "Dar raf koridorunda standart makaslı platform çalışır mı?", cevap: "Koridor ölçüsüne bağlıdır. Standart akülü makaslı şase genişliği yaklaşık 1,15 metredir; koridor bundan darsa 0,76-0,81 metre şaseli dar modeller gerekir. Koridor genişliği raf ayağından raf ayağına en dar noktadan ölçülmelidir çünkü palet taşmaları ve sprinkler boruları etkin genişliği düşürür. Bu ölçü talepte belirtilirse doğru şase ilk seferde gelir." },
            { soru: "Çift vardiyalı depoda akü ortasında biter mi?", cevap: "Tek şarjla tipik kullanımda bir vardiya rahat çıkarılır; çift vardiyada kural, makinenin her vardiya sonunda şarja bağlanmasıdır. Şarj noktasının makinenin park alanına yakın belirlenmesi vardiya ortası duruşları önler. Derin deşarj akü ömrünü kısaltır. Vardiya planı talepte paylaşılırsa şarj düzeni teslimat öncesi birlikte kurgulanır ve operasyon aksamaz." },
            { soru: "Depo devri sırasında birden fazla koridoru aynı kiralamayla gezebilir miyiz?", cevap: "Evet, çoğu zaman aynı akülü makaslı platform metrajlar uyumluysa birden fazla koridoru art arda gezer; tek kiralama ve tek nakliyeyle iş biter. Metraj farkı büyükse (örneğin bir bölümde 8 m, diğerinde 14 m) tek büyük makine mi yoksa iki ayrı makine mi kullanılacağı karşılaştırılır. İş listesi önceden paylaşılırsa toplam maliyet iki senaryoda gösterilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'deki depo tavan yüksekliği, zemin kaplaması ve koridor/şase ilişkisi önceki bölge sayfamızdaki saha bilgisiyle tutarlıdır; metraj/kapasite değerleri sektör standardı (EN 280 sınıf ölçüleri). Tesis adı veya işletme özel rakamı uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Kemalpaşa OSB'de Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "Kemalpaşa OSB büyümeye devam eden bir sanayi bölgesi; her yıl yeni depo ve antrepo binaları çelik konstrüksiyon hâlinde yükseliyor. Bu aşamadaki platform ihtiyacı, tamamlanmış bir depodaki bakım işinden temelden farklıdır: zemin henüz saha betonu değildir, çelik dikme ve çatı aşıkları henüz kaplama almamıştır, elektrik ve aydınlatma hattı yoktur. Bu koşullarda akülü makaslı platform çoğu zaman yetersiz kalır çünkü zemin kırmataş, stabilize dolgu veya çamurdur ve akülü modelin küçük tekerleği ile sınırlı tırmanma kabiliyeti bu yüzeyde takılır. Kemalpaşa'daki yeni inşaat sahalarında standart çözüm 4x4 dizel arazi tipi makaslı platform veya daha büyük yatay erişim gerektiren noktalarda dizel eklemli platformdur. İnşaat bitip saha betonu döküldükten sonra iç imalata (tesisat, aydınlatma, raf) geçilince makine akülü modelle değiştirilir; bu geçişi tek sözleşmede iki dönemli plan olarak kurmak hem nakliyeyi hem toplam maliyeti düşürür.",
        maddeler: [
            { baslik: "Saha betonu dökülmeden zemin uygunluğu", metin: "Çelik konstrüksiyon montajı sırasında saha genellikle henüz betonlanmamıştır; kırmataş, stabilize dolgu veya taşıma yeterliği belirsiz doğal zemin bulunur. Bu zeminde akülü makaslı platformun tırmanma kabiliyeti ve dar tekerleği yetersiz kalır. 4x4 dizel arazi tipi makaslı platform veya paletli/tekerlekli arazi tipi eklemli platform bu koşulda gerekli sınıftır. Zemin taşıma gücü belirsizse geoteknik veya şantiye şefinin onayı istenir; makine sahaya girmeden önce güzergâh yürünüp yumuşak nokta işaretlenir." },
            { baslik: "Çatı aşığı ve dikme montajında erişim yüksekliği", metin: "Kemalpaşa'daki yeni depo binalarında çatı aşıkları genellikle 10-14 metre bandında kurulur; bu, 12-18 metre çalışma yüksekliği sınıfına denk gelir. Dikme ve travers montajı sırasında iki makine paralel çalışırsa süre yaklaşık yarıya iner; ancak bu, sahada iki makinenin birbirinin çalışma alanına girmeyecek şekilde konumlandırılmasını gerektirir. Montaj firmasıyla hangi hafta kaç makine, hangi aksta çalışılacağı aynı masada planlanır." },
            { baslik: "Cephe paneli ve çatı kaplama işinde açık saha koşulları", metin: "Çelik iskelet tamamlandıktan sonra cephe paneli ve çatı kaplama aşamasına geçilir; bu iş açık havada, rüzgâr ve yağış koşullarına maruz devam eder. Panel taşırken sepet kapasitesi malzeme ağırlığına göre kontrol edilir, rüzgâr sınırı üreticinin sınır değeriyle karşılaştırılarak yönetilir. Zemin bu aşamada henüz düzgün olmayabilir; arazi tipi makinenin dört tekerlek dengeleme sistemi eğimli veya düzensiz yüzeyde platformu yatay tutar." },
            { baslik: "İnşaattan işletmeye geçişte makine değişimi", metin: "Saha betonu döküldükten ve bina kapalı hâle geldikten sonra iç imalat (tesisat, aydınlatma, raf montajı) başlar; bu aşamada dizel arazi tipi makine yerini akülü makaslı platforma bırakır çünkü artık kapalı alan emisyon kısıtı geçerlidir. İki dönemli kiralama tek sözleşmede planlanırsa ikinci makinenin sevkiyatı ilk makinenin iadesiyle birleştirilir ve nakliye maliyeti düşer. Geçiş tarihi kesin değilse sözleşmede esnek tarih aralığı tanımlanır." },
            { baslik: "Şantiye İSG sorumluluk paylaşımı", metin: "Şantiye ortamında 6331 sayılı İSG Kanunu ve yapı işleri mevzuatı geçerlidir: saha risk değerlendirmesi, iş izni ve kişisel koruyucu donanım işverenin veya ana yüklenicinin yükümlülüğüdür; makinenin periyodik kontrol belgesi, güvenlik donanımlarının çalışır durumda teslimi ve operatörlü kiralamada operatörün MYK belgesi kiralayan tarafın yükümlülüğüdür. Bu paylaşım sözleşmede yazılı tanımlanır; sorumluluğun otomatik olarak kiralayan tarafta olduğu varsayımı hukuken geçerli değildir." },
        ],
        ekBolumler: [
            { baslik: "Kemalpaşa şantiye aşamasına göre makine seçim tablosu", paragraflar: ["Aşağıdaki tablo, çelik konstrüksiyon projesinin farklı aşamalarında hangi makine sınıfının gerektiğini gösterir. Zemin durumu belirleyici faktördür."], tablo: { basliklar: ["Aşama", "Zemin", "Uygun sınıf", "Tipik metraj"], satirlar: [["Dikme/travers montajı", "Stabilize/kırmataş", "Dizel 4x4 arazi tipi makaslı", "12 – 18 m"], ["Çatı aşığı ve kaplama", "Saha betonu veya dolgu", "Dizel 4x4 arazi tipi makaslı/eklemli", "10 – 16 m"], ["Cephe paneli montajı", "Değişken, açık saha", "Dizel arazi tipi eklemli (yatay erişim için)", "10 – 14 m"], ["Saha betonu sonrası iç imalat", "Beton, düz", "Akülü makaslı", "10 – 14 m"], ["Raf montajı (bina kapalı)", "Beton, düz", "Akülü makaslı, iki makine paralel", "10 – 14 m"]] } },
            { baslik: "İki dönemli kiralamanın maliyet mantığı", paragraflar: ["Kemalpaşa'da sık karşılaştığımız durum şudur: fabrika/depo inşaatı biterken iç imalat başlar ve sahada hem arazi tipi hem akülü makineye sırayla ihtiyaç duyulur. İki ayrı kısa kiralama yerine tek sözleşmede iki dönemli plan kurmak — önce dizel arazi tipi, saha betonu atıldıktan sonra akülü makaslı — hem nakliyeyi hem birim maliyeti düşürür.", "Şantiye döneminde makine güvenli park alanı ve yakıt ikmali, işletme döneminde şarj noktası planlanır. Her iki dönemde de periyodik kontrol belgesi makineyle birlikte sahada bulunur. Geçiş tarihi kayarsa sözleşme güncellenir, ceza şartı önceden netleştirilir."] },
            { baslik: "Nakliye: lowbed organizasyonu ve zaman planı", paragraflar: ["Dizel arazi tipi makineler ağırdır ve lowbed ile sevk edilir; bu organizasyon standart araçtan uzun sürer, en az 1-2 iş günü önceden planlanmalıdır. Kemalpaşa OSB'nin İzmir-Ankara karayoluna yakınlığı sevkiyatı hızlandırsa da lowbed bulma süreci trafiğe değil araç uygunluğuna bağlıdır.", "Aynı sahaya birden fazla makine gidiyorsa (örneğin iki koridor paralel montaj için) nakliye tek organizasyonda birleştirilir; bu hem maliyeti düşürür hem şantiye giriş kaydını basitleştirir."] },
        ],
        sss: [
            { soru: "Saha betonu henüz dökülmemiş, hangi makine gerekir?", cevap: "Zemin kırmataş, stabilize dolgu veya çamursa akülü makaslı platform yetersiz kalır; 4x4 dizel arazi tipi makaslı platform gerekir. Bu sınıf hem tırmanma kabiliyeti hem geniş tekerlek yapısıyla düzensiz zeminde dengeli çalışabilir. Zemin taşıma gücü belirsizse şantiye şefinin onayı istenir ve güzergâh önceden yürünüp yumuşak noktalar işaretlenir." },
            { soru: "İki makine paralel çalışırsa montaj süresi gerçekten yarıya iner mi?", cevap: "Tipik olarak evet, dikme ve travers montajında iki makine farklı akslarda eşzamanlı çalışırsa toplam süre önemli ölçüde kısalır; ancak bu, makinelerin birbirinin çalışma alanına girmeyecek şekilde konumlandırılmasını ve montaj ekibinin iki eşzamanlı işi koordine edebilmesini gerektirir. Bu planlama montaj firmasıyla aynı masada, hangi hafta kaç makine hangi akста çalışacak şeklinde önceden kurulur." },
            { soru: "İnşaat bitince akülü platforma nasıl geçiyoruz?", cevap: "Saha betonu döküldükten ve bina kapalı hâle geldikten sonra dizel arazi tipi makine iade edilir, akülü makaslı platform devreye girer; bu geçiş tek sözleşmede iki dönemli plan olarak kurulursa ikinci makinenin sevkiyatı ilk makinenin iadesiyle birleştirilip nakliye maliyeti düşer. Geçiş tarihi kesin değilse sözleşmede esnek tarih aralığı tanımlanır, şantiye programı kayarsa güncellenir." },
            { soru: "Cephe paneli montajında rüzgâr sınırı nasıl yönetilir?", cevap: "Karar teslim edilen makinenin üretici verisine ve o andaki koşula göre verilir; genel bir bölge tahmini yeterli değildir. Operatör koşulları vardiya başlangıcında ve değişim görüldüğünde yeniden değerlendirir. Sınır aşılırsa sepet indirilir ve makine güvenli duruma alınır. Panel taşırken rüzgâr etkisi malzeme yüzey alanı nedeniyle arttığından bu sınır normalden daha sıkı uygulanır." },
            { soru: "Şantiyede İSG sorumluluğu kimde?", cevap: "Paylaşımlıdır ve sözleşmede yazılı tanımlanır. Kiralayan tarafın yükümlülüğü: makinenin periyodik kontrol belgesi, güvenlik donanımlarının çalışır teslimi ve operatörlü kiralamada operatörün MYK belgesi. İşveren/ana yüklenicinin yükümlülüğü: saha risk değerlendirmesi, iş izni süreci ve kişisel koruyucu donanım. Denetimde iki belge ayrı ayrı sorulur; sorumluluğun otomatik olarak kiralayan tarafta olduğu varsayımı hukuken geçerli değildir." },
            { soru: "Dizel arazi tipi makine ne kadar sürede teslim edilir?", cevap: "Ağır olduğu için lowbed ile sevk edilir; organizasyon standart araçtan uzundur ve en az 1-2 iş günü planlanmalıdır. Kemalpaşa OSB'nin karayoluna yakınlığı yol süresini kısaltsa da lowbed bulma süreci ayrı bir değişkendir. Acil şantiye taleplerinde metraj ve zemin uygunsa daha hafif ve hızlı temin edilebilen bir sınıfa yönelmek alternatif olarak teklifte gösterilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'nin büyüyen sanayi bölgesi niteliği ve yeni depo inşaatlarının sıklığı kamuya açık bilgidir; makine sınıfı/metraj değerleri sektör standardıdır (EN 280), 6331 sayılı İSG Kanunu atfı mevzuat metnine dayanır. Belirli şantiye veya proje adı uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Kemalpaşa Bölgesinde Tarım ve Silo Tesisleri İçin Platform Kiralama",
        giris:
            "Bu konuda dürüst olmak gerekiyor: Kemalpaşa OSB'nin kendisi ağırlıklı olarak sanayi ve lojistik bölgesidir, tarımsal işleme veya silo tesisi yoğunluğu yüksek değildir. Buna karşılık Kemalpaşa ilçesi genelinde meyve yetiştiriciliği (özellikle şeftali ve diğer meyve bahçeleri) bilinen bir tarımsal kimliktir ve bu tarımsal üretimi destekleyen soğuk hava deposu, paketleme tesisi veya yem/tahıl silosu gibi yapılar OSB çevresinde zaman zaman bulunabilir. Bu sayfa, ağımızın diğer bölgelerindeki gibi yoğun bir tarım sanayi talebini değil, OSB'ye komşu veya bölgedeki münferit tarım/silo tesislerinde ortaya çıkabilecek makaslı platform ihtiyacını anlatır. Talep sıklığı düşüktür ve bunu olduğu gibi söylüyoruz — sahte bir yoğunluk iddiası kurmak yerine, gerçekten karşılaşılan iş türlerini (silo dış yüzey bakımı, soğuk depo tavan işi, paketleme holü aydınlatması) doğru makineyle eşleştirmeye odaklanıyoruz.",
        maddeler: [
            { baslik: "Silo dış yüzeyinde erişim sınırları", metin: "Tahıl veya yem silosu dış yüzeyinde merdiven, kapak veya havalandırma bakımı gerektiğinde makaslı platform ancak silonun etrafında düz ve sağlam bir zemin şeridi varsa kullanılabilir; silonun kendi eğik tabanı veya dolgu zemini platformun ulaşamayacağı bir alan yaratabilir. Bu durumda eklemli platform veya farklı erişim yöntemi (sabit merdiven, cephe iskelesi) değerlendirilir. Silo yüksekliği genellikle 15-25 metre bandında olabileceğinden, bu üst sınırda standart makaslı platformun yetmediği durumlar da olur; bu ihtimal talep aşamasında konuşulur, sahada sürpriz yaratılmaz." },
            { baslik: "Soğuk depo ve paketleme tesisinde tavan işi", metin: "Meyve/sebze paketleme tesislerinde soğuk depo tavan aydınlatması veya soğutma ünitesi bakımı için akülü makaslı platform kullanılabilir; ancak düşük sıcaklık ortamında akü performansı ve hidrolik yağ viskozitesi etkilenebileceğinden, uzun süreli soğuk oda çalışmaları için üreticinin sıcaklık sınırı önceden kontrol edilir. Gıda güvenliği kuralları gereği (varsa BRC/IFS sertifikası) platform tesise girmeden temizlenir ve hidrolik kaçak kontrolünden geçer." },
            { baslik: "Mevsimsel talep dalgalanması", metin: "Tarımsal işleme tesislerinde platform ihtiyacı genellikle hasat öncesi bakım dönemine (tesis boşken yapılan onarım/temizlik) veya hasat sonrası ekipman revizyonuna denk gelir; yıl boyu sabit bir talep değildir. Bu mevsimsellik nedeniyle kısa süreli kiralama modeli (birkaç gün) bu segment için tipiktir; uzun dönemli sözleşme nadiren gerekir. Talep geldiğinde mevsim ve tesisin o anki doluluk durumu (boş mu, üretimde mi) netleştirilir." },
            { baslik: "Açık saha silo çevresinde zemin durumu", metin: "Bazı silo tesisleri OSB dışında, tarım arazisine yakın konumlanır ve çevre zemin her zaman beton değildir — toprak, çakıl veya stabilize dolgu olabilir. Bu durumda akülü makaslı platformun standart lastikleri ve sınırlı tırmanma kabiliyeti yetersiz kalabilir; dizel arazi tipi makaslı platform veya yürüyüş yolu döşenmiş bir güzergâh gerekebilir. Zemin fotoğrafı talep aşamasında istenir, tahmine dayalı makine gönderilmez." },
            { baslik: "Küçük ölçekli işletmede maliyet gerçekçiliği", metin: "Tarım/silo segmentindeki işletmeler genellikle OSB'deki büyük lojistik depolara göre daha küçük ölçeklidir ve bütçe hassasiyeti daha yüksek olabilir. Bu nedenle iş kapsamı net tanımlanır — tek bir kısa bakım mı, yoksa birkaç ekipmanı kapsayan bir tur mu — ve gereksiz büyük makine önerilmez. Mümkünse aynı bölgedeki başka bir işle nakliye paylaştırılarak maliyet düşürülür; bu fırsat teklif aşamasında değerlendirilir." },
        ],
        ekBolumler: [
            { baslik: "Tarım/silo tesisi iş-makine tablosu", paragraflar: ["Bu segment düşük hacimli olduğu için tablo genel bir yol haritası niteliğindedir; kesin makine seçimi her zaman saha ölçüsüyle netleşir."], tablo: { basliklar: ["Tesis türü", "Tipik iş", "Zemin durumu", "Uygun sınıf"], satirlar: [["Tahıl/yem silosu", "Dış yüzey, kapak, havalandırma bakımı", "Genelde açık, değişken", "Akülü veya dizel arazi tipi (zemine göre)"], ["Soğuk hava deposu", "Tavan aydınlatma/soğutma bakımı", "Beton, düz", "Akülü makaslı"], ["Paketleme holü", "Aydınlatma, tesisat", "Beton/epoksi, düz", "Akülü makaslı"], ["Açık saha silo çevresi", "Merdiven/kapak erişimi", "Toprak/stabilize", "Dizel arazi tipi"]] } },
            { baslik: "Bu segmentte dürüstlük ilkesi", paragraflar: ["Kemalpaşa OSB merkezli hizmetimizin ana odağı lojistik depo ve sanayi tesisleridir; tarım/silo işleri bizim için düzenli ve yoğun bir iş kolu değildir. Bu sayfayı, var olmayan bir uzmanlık iddiasıyla değil, gerçekten karşılaşabileceğimiz bir talep türünü dürüstçe tanımlamak için yazdık. Talep geldiğinde aynı titizlikle (zemin, yükseklik, erişim ölçüsü) değerlendiriyoruz; ancak bölgedeki tarım sanayi yoğunluğu hakkında abartılı bir istatistik veya vaka sayısı sunmuyoruz çünkü elimizde böyle bir veri yok.", "Yoğun tarımsal işleme ihtiyacı olan işletmeler için bölgedeki daha büyük ölçekli tarım makineleri veya özel ekipman tedarikçileriyle karşılaştırma yapmalarını öneririz; biz makaslı/eklemli platform kiralamada uzmanız, tarım ekipmanı genel tedarikçisi değiliz."] },
            { baslik: "Talep öncesi netleştirilecek bilgiler", paragraflar: ["Bu segmentte teklif hızının önündeki en büyük engel eksik saha bilgisidir; tesis genellikle OSB dışında ve bize daha az tanıdık bir bölgede olabilir. Bu yüzden konum, zemin fotoğrafı, hedef yükseklik ve tesisin o anki üretim durumu (çalışıyor mu, boş mu) talep aşamasında istenir.", "Silo gibi yüksek yapılarda (15 metre üzeri) standart makaslı platformun yetmeyebileceği ihtimali baştan konuşulur; bu durumda alternatif erişim yöntemleri (sabit merdiven, cephe iskelesi, farklı ekipman tedarikçisi) dürüstçe önerilir, uygun olmayan makine zorla önerilmez."] },
        ],
        sss: [
            { soru: "Kemalpaşa OSB'de tarım sanayi tesisi çok mu?", cevap: "Hayır, OSB'nin kendisi ağırlıklı olarak genel sanayi ve lojistik bölgesidir; tarım işleme tesisi yoğunluğu düşüktür. Kemalpaşa ilçesi genelinde meyve yetiştiriciliği bilinen bir tarımsal kimlik olsa da, bunu destekleyen soğuk depo veya silo tesisleri OSB çevresinde münferit sayıdadır. Bu segmentteki talebimiz düzenli değil, ara sıra gelen bir iş türüdür; bunu olduğu gibi söylüyoruz." },
            { soru: "25 metrelik bir silonun dış yüzeyine makaslı platform yeter mi?", cevap: "Genellikle hayır, standart makaslı platform sınıfları çoğunlukla 14-18 metre bandında üst sınıra ulaşır; daha yüksek silolarda ya özel yüksek sınıf ekipman ya da sabit merdiven/cephe iskelesi gibi alternatif erişim yöntemi gerekir. Silo yüksekliği ve erişilecek nokta talep aşamasında netleştirilir, uygun olmayan bir makine zorla önerilmez." },
            { soru: "Soğuk depoda platform çalışırken akü etkilenir mi?", cevap: "Düşük sıcaklık akü performansını ve hidrolik yağ viskozitesini etkileyebilir; uzun süreli soğuk oda çalışmalarında üreticinin sıcaklık sınırı önceden kontrol edilir. Kısa süreli işlerde genellikle sorun yaşanmaz ama iş süresi ve soğuk odanın gerçek sıcaklığı talep aşamasında bildirilirse buna göre planlama yapılır." },
            { soru: "Silo çevresi toprak zeminse platform çalışabilir mi?", cevap: "Zemine bağlıdır. Düz ve sıkışmış toprak bazı arazi tipi makinelerle çalışılabilir ama standart akülü makaslı platform bu zeminde yetersiz kalır. Zemin fotoğrafı ve mümkünse örnek bir sıkışma durumu talep aşamasında istenir; gerekirse dizel arazi tipi makaslı platform önerilir ya da zemin güçlendirmesi tesis tarafından yapılana kadar iş ertelenir." },
            { soru: "Hasat sezonu dışında da hizmet veriyor musunuz?", cevap: "Evet, tarım/silo segmentindeki iş mevsime bağlı olsa da yıl boyunca talep gelebilir; en sık dönem tesisin boş olduğu hasat öncesi bakım veya hasat sonrası revizyon zamanıdır. Talep geldiğinde mevsim fark etmeksizin aynı süreçle (zemin, yükseklik, erişim ölçüsü) değerlendiririz." },
            { soru: "Küçük ölçekli tesis için de teklif alabilir miyiz?", cevap: "Evet, iş kapsamı ne kadar küçük olursa olsun aynı titizlikle değerlendirilir; gereksiz büyük veya pahalı makine önerilmez. Mümkünse aynı bölgedeki başka bir sevkiyatla nakliye paylaştırılarak maliyet düşürülür. Tek şart, gerçek saha bilgisinin (zemin, yükseklik, erişim) paylaşılmasıdır; bu olmadan verilen tahmini teklif sahada değişebilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa ilçesinin meyve yetiştiriciliği kimliği kamuya açık genel bilgidir; OSB'nin tarım sanayi yoğunluğunun düşük olduğu bilgisi dürüstlük ilkesiyle belirtilmiştir — abartılı vaka sayısı veya tesis adı uydurulmamıştır. Silo yükseklik sınıfları ve zemin/makine ilişkisi sektör standardı genel bilgidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Kemalpaşa OSB'de Enerji ve Aydınlatma Bakım Platformu Kiralama",
        giris:
            "Kemalpaşa OSB'deki depo ve fabrika binalarında aydınlatma ve enerji hattı bakımı, platform kiralama taleplerinin en düzenli tekrarlanan kalemlerinden biridir çünkü bu iş bir kereye mahsus değil, periyodik bir ihtiyaçtır — LED armatür ömrü dolar, sensörler arızalanır, dış cephe aydınlatma direği bakım ister. Depo içi aydınlatma genellikle 8-12 metre tavan yüksekliğinde asılı armatürlerden oluşur ve bu iş akülü makaslı platformla verimli yapılır; dış cephe ve otopark aydınlatma direkleri ise açık havada, bazen sabit bir zeminde bazen de peyzaj alanında bulunur ve farklı bir makine sınıfı gerektirebilir. Bu sayfa, iç mekan aydınlatma bakımından dış cephe direk bakımına kadar Kemalpaşa'daki depoların enerji-aydınlatma ihtiyacını platform seçimi açısından ele alıyor; elektrik işinin kendisi (kablolama, pano bağlantısı) yetkili elektrik teknisyeninin işidir, platform yalnız güvenli erişimi sağlar.",
        maddeler: [
            { baslik: "İç mekan armatür değişiminde metraj ve erişim", metin: "Depo içi LED armatür değişimi veya sensör bakımı genellikle 8-12 metre tavan yüksekliğinde, sabit beton zeminde yapılır; bu iş için akülü makaslı platform standart çözümdür. Armatür sırası raf koridoruyla aynı hizadaysa koridor genişliği şaseyle karşılaştırılır. İş genellikle birden fazla armatürü kapsadığından, platform bir kurulumda güzergâh boyunca ilerleyip her noktada durarak çalışır; bu tur planı önceden armatür listesiyle hazırlanırsa gereksiz duruş yaşanmaz." },
            { baslik: "Dış cephe ve otopark direk bakımı", metin: "Dış aydınlatma direkleri genellikle 6-10 metre yüksekliğindedir ve çevresindeki zemin asfalt, beton veya bazen peyzaj alanıdır. Zemin sağlamsa akülü makaslı platform bu iş için de kullanılabilir ama dış ortam kullanım onayı olan model tercih edilir; zemin düzensizse (peyzaj, hafif eğim) dizel veya akülü arazi tipi makaslı platform gerekir. Direk çevresindeki trafik (araç park alanı, yaya yolu) bariyerle ayrılır." },
            { baslik: "Sensör ve otomasyon sistemi bakımında hassasiyet", metin: "Modern depolarda aydınlatma genellikle hareket sensörü veya merkezi otomasyon sistemine bağlıdır; bakım sırasında sistemin geçici olarak devre dışı bırakılması gerekebilir. Bu işlem tesisin elektrik/bakım sorumlusuyla koordine edilir, platform ekibi kendiliğinden sistem müdahalesi yapmaz. Sepette taşınan alet ve yedek parça (armatür, sensör, kablo ucu) önceden listelenir; iş sonunda sayım yapılır." },
            { baslik: "Elektrik işi ile platform işini ayırmak", metin: "Platform operatörünün görevi güvenli ve doğru konuma erişim sağlamaktır; kablolama, pano bağlantısı veya devre kesici müdahalesi yetkili elektrik teknisyeninin işidir. İki rol karışmamalıdır — platform ekibi elektrik işi yapmaz, elektrik teknisyeni platform kullanmaz (yetkili değilse). Enerjili hat yakınında çalışılacaksa güvenlik mesafesi ve varsa hat kesme prosedürü tesis elektrik sorumlusundan önceden teyit edilir." },
            { baslik: "Periyodik bakım programı ve tekrar eden kiralama", metin: "Aydınlatma bakımı genellikle yıllık veya altı aylık periyotlarla tekrarlanan bir iştir; bu düzenlilik önceden bilinirse tekrar eden kiralama planı kurulabilir — aynı tarih aralığında, aynı iş kapsamıyla her seferinde yeniden keşif yapmadan hızlı teklif verilir. Bu, hem müşteri hem sağlayıcı için planlama kolaylığı sağlar; ilk keşifte oluşturulan armatür/direk listesi sonraki kiralamalarda referans olarak kullanılır." },
        ],
        ekBolumler: [
            { baslik: "İç mekan ve dış mekan aydınlatma bakımı karşılaştırması", paragraflar: ["Aşağıdaki tablo, Kemalpaşa OSB'deki tipik aydınlatma bakım senaryolarında makine seçimini belirleyen ana farkları gösterir."], tablo: { basliklar: ["Ortam", "Tipik yükseklik", "Zemin", "Uygun sınıf"], satirlar: [["Depo içi tavan armatürü", "8 – 12 m", "Beton, düz", "Akülü makaslı"], ["Yükleme kapısı üstü aydınlatma", "6 – 8 m", "Beton, düz", "Akülü makaslı"], ["Otopark/dış cephe direği", "6 – 10 m", "Asfalt/beton", "Akülü (dış ortam onaylı) veya dizel arazi tipi"], ["Peyzaj alanı direği", "5 – 8 m", "Düzensiz/eğimli", "Dizel arazi tipi"]] } },
            { baslik: "Tur planlaması: tek kiralamada çok noktalı bakım", paragraflar: ["Aydınlatma bakımı nadiren tek bir noktayla sınırlıdır; genellikle bir depo içinde onlarca armatür veya bir OSB kompleksinde birden fazla direk aynı bakım programına girer. Bu iş, platformun bir kurulumda güzergâh boyunca ilerleyip her noktada durarak çalıştığı bir tur olarak planlanır. Armatür/direk listesi ve konumları önceden hazırlanırsa tur sırası en verimli rotaya göre kurulur, gereksiz geri dönüş önlenir.", "Bu tip çok noktalı işlerde günlük tarife yerine iş kapsamına göre paket fiyat genellikle daha öngörülebilir bir maliyet sunar; liste netleştiğinde teklif buna göre hazırlanır."] },
            { baslik: "Enerji hattı yakınında güvenlik mesafesi", paragraflar: ["Aydınlatma direği bakımı bazen enerji nakil hattına veya orta gerilim panosuna yakın bir noktada yapılır; bu durumda platform ile enerjili hat arasındaki güvenlik mesafesi tesis elektrik sorumlusundan önceden teyit edilir. Mesafe yetersizse hattın geçici olarak kesilmesi veya izolasyonlu ekipman kullanımı gündeme gelir; bu karar platform ekibinin değil tesis elektrik biriminin yetkisindedir.", "Bu tip riskli noktalar talep aşamasında bildirilirse iş planı ve gerekli izinler teslimat öncesi hazırlanır; sahada son dakika enerji hattı fark edilirse iş güvenli hâle gelene kadar durdurulur."] },
        ],
        sss: [
            { soru: "Depo içi armatür değişimi için hangi makine gerekir?", cevap: "8-12 metre tavan yüksekliğindeki standart depo aydınlatmasında akülü makaslı platform yeterlidir. Armatür sırası raf koridoruyla aynı hizadaysa koridor genişliğine göre standart veya dar şase seçilir. İş birden fazla armatürü kapsıyorsa liste önceden hazırlanır ve platform tek kurulumda güzergâh boyunca ilerler; bu, her armatür için ayrı kurulum yapmaktan daha hızlıdır." },
            { soru: "Otopark direği bakımı için akülü platform yeterli mi?", cevap: "Zemin asfalt veya beton gibi düz ve sağlamsa, dış ortam kullanımına onaylı akülü makaslı platform genellikle yeterlidir. Zemin peyzaj alanı gibi düzensiz veya eğimliyse akülü modelin tekerleği ve tırmanma kabiliyeti yetersiz kalabilir, bu durumda dizel arazi tipi makaslı platform önerilir. Zemin tipi talep aşamasında belirtilirse doğru sınıf ilk seferde gelir." },
            { soru: "Aydınlatma sistemini platform ekibi mi devre dışı bırakır?", cevap: "Hayır, bu işlem tesisin elektrik veya bakım sorumlusuyla koordine edilir; platform ekibi sistem müdahalesi yapmaz. Platform operatörünün görevi güvenli erişim sağlamaktır, kablolama veya devre kesici müdahalesi yetkili elektrik teknisyeninin işidir. Bu roller iş başlamadan netleştirilir ve karışıklık yaşanmaz." },
            { soru: "Enerji nakil hattına yakın bir direkte çalışabilir miyiz?", cevap: "Güvenlik mesafesi yeterliyse evet, ama bu mesafe tesis elektrik sorumlusundan önceden teyit edilmelidir. Mesafe yetersizse hattın geçici kesilmesi veya izolasyonlu ekipman kullanımı gerekebilir; bu karar platform ekibinin yetkisinde değildir. Riskli nokta talep aşamasında bildirilirse gerekli izinler ve önlemler teslimat öncesi hazırlanır." },
            { soru: "Yıllık bakım programımız var, her seferinde yeniden keşif gerekir mi?", cevap: "Hayır, ilk keşifte oluşturulan armatür/direk listesi ve konum bilgisi sonraki periyodik kiralamalarda referans olarak kullanılabilir. Bu, tekrar eden bakım işlerinde teklif sürecini hızlandırır. Liste üzerinde değişiklik (yeni eklenen armatür, kaldırılan direk) varsa güncelleme yapılır, ama sıfırdan keşif gerekmez." },
            { soru: "Çok sayıda armatürü tek kiralamada bitirebilir miyiz?", cevap: "Evet, bu tip çok noktalı bakım işleri platformun bir kurulumda güzergâh boyunca ilerlediği bir tur olarak planlanır. Armatür veya direk listesi ve konumları önceden hazırlanırsa tur en verimli rotaya göre kurulur. Çok noktalı işlerde günlük tarife yerine iş kapsamına göre paket fiyat genellikle daha öngörülebilir bir maliyet sunar." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'deki depo tavan yüksekliği ve dış aydınlatma direk yüksekliği önceki bölge sayfalarımızdaki saha bilgisiyle tutarlıdır; elektrik işi ile platform işi arasındaki yetki ayrımı genel iş güvenliği ilkesidir. Belirli tesis adı veya bakım sözleşmesi rakamı uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Kemalpaşa OSB'de Operatörlü Makaslı Platform Kiralama",
        giris:
            "Kemalpaşa OSB'deki tesislerin bir kısmı kendi güvenlik prosedürüne sahip ve bu prosedürler bazen sadece ekipmanın belgeli olmasını değil, kullanan kişinin de tesise özgü bir onaydan geçmesini ister. Operatörlü kiralama tam bu noktada devreye giriyor: makineyi biz getiriyoruz, MYK yeterlilik belgeli operatörümüz kullanıyor, tesisin giriş prosedürüne (İSG oryantasyonu, ziyaretçi/tedarikçi kaydı, iş izni) operatörümüz uyum sağlıyor. Bu model özellikle iki durumda tercih ediliyor: müşterinin kendi ekibinde belgeli platform operatörü yoksa, veya iş kısa süreli ve tek seferlikse (operatör eğitimi/belgelendirme yatırımı yapmak mantıklı değilse). Kemalpaşa OSB'deki tesislerin çoğunda operatörlü kiralamada da tesisin kendi güvenlik oryantasyonundan geçmek gerekir; bu süreç iş başlamadan önce planlanmalı, sahaya gelindiğinde sürpriz olmamalıdır.",
        maddeler: [
            { baslik: "MYK operatör yeterlilik belgesi ve kapsamı", metin: "Operatörlü kiralamada görevlendirilen personelin MYK platform operatörü yeterlilik belgesi bulunur; bu belge makine tipine göre kapsam taşır — makaslı platform belgesi bom tipi (eklemli platform) makineyi otomatik kapsamaz, farklı makine tipi kullanılacaksa operatörün o tipe uygun belgesi de doğrulanır. Belge güncelliği ve makine tipiyle uyumu iş başlamadan kontrol edilir; bu kontrol formalite değil, denetimde ilk sorulan evraktır." },
            { baslik: "OSB tesis güvenlik oryantasyonuna uyum", metin: "Kemalpaşa OSB'deki bazı tesisler, kendi sahasında çalışacak her personelden kısa bir İSG oryantasyonu (genellikle tesise özgü tehlike kaynakları, acil durum prosedürü, kişisel koruyucu donanım kuralları) geçmesini ister. Operatörümüz bu oryantasyona katılır; süre tesise göre 15 dakikadan bir saate kadar değişebilir. Bu süre iş programına dahil edilir, teslimat gününe eklenmez — operatör oryantasyon tamamlanmadan makineyi çalıştırmaz." },
            { baslik: "Tesis içi trafik ve iletişim protokolüne uyum", metin: "Operatörlü kiralamada operatör yalnız makineyi kullanmakla kalmaz, tesisin forklift trafiği, gözcü işaretleri ve iş durdurma yetkisi gibi saha protokollerine de uyar. Depo yönetiminin belirlediği alternatif rota ve bariyer düzenine operatörümüz saygı gösterir; tesisin gözcüsü veya saha sorumlusu işi durdurduğunda operatör anında uyar. Bu koordinasyon, iş başlamadan önce kısa bir brifingle netleştirilir." },
            { baslik: "Karma model: operatörlü başlangıç, operatörsüz devam", metin: "Ekibinizde belgeli personel var ama bu makine tipine aşina değilse karma model kurulabilir: ilk gün veya ilk birkaç saat operatörümüz makineyi kullanır ve ekibinize yerinde tanıtım yapar, ardından belgeli personeliniz devralır. Bu model, hem güvenli bir başlangıç sağlar hem de uzun süreli operatörlü kiralamanın maliyetinden kaçınır. Geçiş anı ve sorumluluk devri iş emrine yazılı olarak işlenir." },
            { baslik: "Vardiya ve iş süresi planlaması", metin: "Operatörlü kiralamada personel çalışma saati mevzuata (haftalık çalışma süresi, dinlenme hakları) tabidir; uzun süreli veya çift vardiyalı işlerde birden fazla operatör rotasyonu gerekebilir. Bu ihtiyaç talep aşamasında netleştirilir — tek vardiya mı, çift vardiya mı, hafta sonu çalışma var mı. Vardiya planı önceden bilinirse doğru sayıda operatör organize edilir, sahada personel eksikliği yaşanmaz." },
        ],
        ekBolumler: [
            { baslik: "Operatörlü ve operatörsüz kiralama karşılaştırması", paragraflar: ["Aşağıdaki tablo, Kemalpaşa OSB'deki iş senaryolarına göre hangi modelin daha uygun olduğunu gösterir."], tablo: { basliklar: ["Durum", "Uygun model", "Gerekçe"], satirlar: [["Ekipte belgeli operatör yok", "Operatörlü", "Yasal zorunluluk"], ["Kısa süreli, tek seferlik iş", "Operatörlü", "Eğitim/belge yatırımı gereksiz"], ["Ekipte belgeli ama makineye yabancı personel", "Karma (operatörlü başlangıç)", "Güvenli geçiş + maliyet dengesi"], ["Uzun dönemli, sık kullanım", "Operatörsüz (belgeli personelle)", "Maliyet avantajı"], ["Tesisin kendi güvenlik oryantasyonu şart koşuyor", "Operatörlü (oryantasyonlu)", "Tesis uyumu"]] } },
            { baslik: "Sorumluluk paylaşımı ve sözleşme netliği", paragraflar: ["Operatörlü kiralamada makinenin güvenli kullanımından ve operatörün yeterliliğinden kiralayan taraf sorumludur; tesisin saha kuralları, trafik yönetimi ve iş izni süreci ise işveren/tesis yönetiminin sorumluluğundadır. Bu ayrım sözleşmede yazılı tanımlanır — 'operatörlü kiraladık, her şey kiralayanın sorumluluğunda' varsayımı hukuken geçerli değildir, tesis kurallarına uyumsuzluktan doğan sorunlarda işveren tarafının da yükümlülüğü vardır.", "Başlangıç brifinginde acil indirme, gözcü, izin sahibi ve işi durdurabilecek kişiler rol bazında belirlenir; bu netlik, hız baskısının güvenlik kararının önüne geçmesini engeller."] },
            { baslik: "Operatör değişikliği ve vardiya devri", paragraflar: ["Uzun süreli işlerde veya çift vardiyada operatör değişebilir; bu durumda yeni operatörün belgesi ve tesise özgü oryantasyon durumu ayrıca doğrulanır — önceki operatörün oryantasyonu yeni operatöre otomatik geçmez. Vardiya devri kontrol formuyla yapılır: makinenin durumu, akü/yakıt seviyesi ve tamamlanan iş listesi yeni operatöre aktarılır.", "Plaka veya personel değişikliği OSB kapı kaydını da etkileyebileceği için, operatör değişimi belli olur olmaz hem tesise hem OSB güvenliğine bildirilir."] },
        ],
        sss: [
            { soru: "Operatörlü kiralamada hangi belge aranır?", cevap: "Görevlendirilen personelin MYK platform operatörü yeterlilik belgesi bulunur ve bu belge kullanılacak makine tipiyle uyumlu olmalıdır; makaslı platform belgesi bom tipi makineyi kapsamaz. Belge güncelliği iş başlamadan kontrol edilir. Tesisin kendi güvenlik oryantasyonu şart koşuyorsa operatörümüz bu oryantasyona da katılır; bu süre iş programına dahil edilir." },
            { soru: "Tesisin kendi İSG oryantasyonuna operatörünüz katılır mı?", cevap: "Evet, Kemalpaşa OSB'deki bazı tesisler her sahaya giren personelden kısa bir oryantasyon geçmesini ister; operatörümüz bu sürece uyum sağlar. Süre tesise göre değişir, genellikle 15 dakika ile bir saat arasındadır. Bu süre iş programına dahil edilir ve operatör oryantasyon tamamlanmadan makineyi çalıştırmaz." },
            { soru: "Ekibimizde belgeli operatör var ama bu makineye yabancı, ne yapmalıyız?", cevap: "Karma model kurulabilir: ilk gün veya ilk birkaç saat bizim operatörümüz makineyi kullanır ve ekibinize yerinde tanıtım yapar, sonra belgeli personeliniz devralır. Bu, güvenli bir başlangıç sağlarken uzun süreli operatörlü kiralamanın maliyetinden kaçınmanızı sağlar. Geçiş anı iş emrine yazılı olarak işlenir." },
            { soru: "Operatörlü kiralamada sorumluluk tamamen kiralayan firmada mı?", cevap: "Hayır, sorumluluk paylaşımlıdır. Makinenin güvenli kullanımı ve operatörün yeterliliği bizim tarafımızdadır; tesisin saha kuralları, trafik yönetimi ve iş izni süreci işveren/tesis yönetiminin sorumluluğundadır. Bu ayrım sözleşmede yazılı tanımlanır; 'her şey kiralayanın sorumluluğunda' varsayımı hukuken geçerli değildir." },
            { soru: "Çift vardiyalı işte kaç operatör gerekir?", cevap: "Personel çalışma saati mevzuata tabidir, bu yüzden uzun süreli veya çift vardiyalı işlerde genellikle birden fazla operatör rotasyonu gerekir. Vardiya planı (tek/çift vardiya, hafta sonu çalışma var mı) talep aşamasında netleştirilirse doğru sayıda operatör önceden organize edilir; sahada son dakika personel eksikliği yaşanmaz." },
            { soru: "Operatör değişirse tesis kaydı yeniden mi yapılmalı?", cevap: "Evet, yeni operatörün belgesi ve tesise özgü oryantasyon durumu ayrıca doğrulanır; önceki operatörün oryantasyonu otomatik olarak yeni operatöre geçmez. Plaka veya personel değişikliği OSB kapı kaydını da etkileyebileceği için değişiklik belli olur olmaz hem tesise hem OSB güvenliğine bildirilir; bu, kapıda beklemeyi önler." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. MYK operatör yeterlilik belgesi kapsamı ve makine tipine özgülüğü kamuya açık mesleki yeterlilik sistemine dayanır; Kemalpaşa OSB'deki tesislerin kendi güvenlik oryantasyonu uygulayabilmesi genel OSB işleyiş bilgisidir. Belirli tesisin oryantasyon süresi veya kuralı uydurulmamıştır — güncel bilgi ilgili saha yetkilisinden teyit edilir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Kemalpaşa OSB'de Çok Noktalı Rota Bakım Platformu Hizmeti",
        giris:
            "Kemalpaşa OSB geniş bir alana yayılmıştır ve bazı işletmelerin birden fazla deposu veya aynı grup şirketine ait komşu tesisleri aynı bölgede bulunur. Bu durumda tek bir platform kiralaması, tek bir binayı değil, aynı turda birden fazla depo veya fabrikayı gezen bir rota olarak planlanabilir. Çok noktalı rota bakımı özellikle şu senaryolarda değer yaratır: aynı firmanın OSB içinde iki-üç ayrı deposu varsa ve her birinde benzer küçük bakım işleri (aydınlatma, raf kontrolü, tesisat) birikmişse, ya da bir bakım/taşeron firması birden fazla müşterisine aynı gün hizmet vermek istiyorsa. Tek makine bir kurulumda değil ama bir günlük veya birkaç günlük tur içinde art arda birkaç noktayı gezer; bu, her nokta için ayrı ayrı nakliye ve kurulum yapmaktan daha hızlı ve ekonomiktir. Planlamanın anahtarı, rotanın coğrafi yakınlığa göre değil, her noktadaki iş süresine ve OSB içi geçiş süresine göre kurulmasıdır.",
        maddeler: [
            { baslik: "Rota sırasını iş süresine göre kurmak", metin: "Çok noktalı bir turda sıralama sadece harita mesafesine göre yapılmaz; her noktadaki tahmini iş süresi de hesaba katılır. Kısa bir kontrol (30 dakika) ile uzun bir montaj işi (birkaç saat) aynı turda art arda planlanıyorsa, uzun iş günün başına alınıp kısa kontroller sona bırakılabilir; böylece günün ilerleyen saatlerinde plan sarkması riski azalır. Her noktanın iş listesi ve tahmini süresi tur başlamadan netleştirilir." },
            { baslik: "OSB içi geçiş süresini rotaya dahil etmek", metin: "Kemalpaşa OSB'nin genişliği nedeniyle iki tesis arasındaki mesafe göründüğünden uzun sürebilir; ayrıca her tesiste ayrı bir giriş kaydı (kapı prosedürü, İSG oryantasyonu) gerekebilir. Bu geçiş süreleri tur planına dahil edilmezse gün sonunda son nokta atlanabilir. Her tesisin kendi giriş prosedürü önceden öğrenilir ve tur programına eklenir; hızlı kayıt alan tesisler önce, uzun prosedürlü tesisler ona göre planlanan saatte ziyaret edilir." },
            { baslik: "Tek makine ile birden fazla farklı iş tipini karşılamak", metin: "Bir turda gezilen noktalarda iş tipi benzer olabilir (hepsinde aydınlatma kontrolü) ya da farklılaşabilir (birinde raf bakımı, diğerinde sprinkler kontrolü). Tek makine bu farklı işleri karşılayabiliyorsa (örneğin standart akülü makaslı platform hem raf hem aydınlatma işine yetiyorsa) tur tek makineyle tamamlanır. Farklı noktalarda farklı makine sınıfı gerekiyorsa (biri dar koridor, diğeri geniş hol) bu, tur planına ikinci bir makine veya ayrı bir gün olarak eklenir." },
            { baslik: "Malzeme ve alet lojistiğini tur boyunca yönetmek", metin: "Çok noktalı turda her nokta için farklı yedek parça veya malzeme gerekebilir (bir depoda armatür değişimi, diğerinde bağlantı sıkma); bu malzemelerin hangi noktada kullanılacağı önceden etiketlenip sepete veya araca göre ayrılır. Karışıklığı önlemek için her nokta bitince kullanılan malzeme ve kalan stok not edilir; bu, son noktada malzeme eksikliği yaşanmasını önler." },
            { baslik: "Tekrar eden çok noktalı programlar", metin: "Bazı işletmeler aynı çok noktalı rotayı periyodik olarak (aylık, üç aylık) tekrarlar; bu durumda ilk turda oluşturulan rota, süre tahmini ve giriş prosedürü bilgisi sonraki turlarda referans olarak kullanılır ve teklif süreci hızlanır. Rota üzerinde değişiklik (yeni eklenen tesis, kapanan nokta) olursa güncellenir, ama sıfırdan planlama gerekmez." },
        ],
        ekBolumler: [
            { baslik: "Çok noktalı rota planlama tablosu", paragraflar: ["Aşağıdaki tablo, çok noktalı bir bakım turunun hangi aşamalarında hangi bilginin gerekli olduğunu gösterir."], tablo: { basliklar: ["Aşama", "Gerekli bilgi", "Etki"], satirlar: [["Nokta listesi", "Her tesisin adresi ve iş tanımı", "Rota sırası ve makine seçimi"], ["İş süresi tahmini", "Her noktadaki tahmini çalışma süresi", "Günlük program dengesi"], ["Giriş prosedürü", "Her tesisin kapı/İSG kaydı", "Toplam geçiş süresi"], ["Malzeme listesi", "Nokta bazlı yedek parça/alet", "Sahada eksik malzeme riski"], ["Tekrar sıklığı", "Periyodik mi, tek seferlik mi", "Referans rota kullanımı"]] } },
            { baslik: "Tek nakliye, çok nokta: maliyet mantığı", paragraflar: ["Çok noktalı rotanın temel avantajı nakliyenin tek seferde birden fazla iş için kullanılmasıdır; her nokta için ayrı sevkiyat yapılsaydı toplam nakliye maliyeti kat kat artardı. Kemalpaşa OSB'nin karayoluna yakınlığı bu avantajı büyütür çünkü OSB dışından gelen makine, bölgeye girdikten sonra iç rotada ek maliyet yaratmadan birkaç noktayı gezebilir.", "Günlük tarife yerine tur bazlı paket fiyat, çok noktalı işlerde genellikle daha öngörülebilir bir maliyet sunar; nokta listesi netleştiğinde teklif buna göre hazırlanır. Turun bir günde bitmemesi durumunda ikinci gün planı da aynı mantıkla kurulur."] },
            { baslik: "Farklı firmalara aynı gün hizmet: taşeron/bakım firması senaryosu", paragraflar: ["Kemalpaşa OSB'de faaliyet gösteren bakım veya taşeron firmaları, kendi müşterilerine ait birden fazla tesise aynı gün hizmet vermek isteyebilir. Bu durumda platform kiralaması taşeron firma adına yapılır ama her tesisin kendi giriş prosedürü ayrı ayrı takip edilir; bir tesisteki kayıt diğerine geçerli değildir.", "Taşeron firmanın kendi iş programıyla bizim tur planımız senkronize edilir; taşeronun her noktada ne kadar süre çalışacağı bilgisi olmadan rota planı sağlıklı kurulamaz, bu yüzden bu bilgi talep aşamasında istenir."] },
        ],
        sss: [
            { soru: "Aynı OSB içindeki iki deponuzu tek kiralamayla gezebilir miyiz?", cevap: "Evet, iki tesis birbirine yakınsa ve iş listesi netse tek makine bir tur içinde her ikisini de gezebilir. Rota sırası, mesafeden çok her noktadaki iş süresi ve giriş prosedürüne göre kurulur. Nokta listesi ve tahmini süreler talep aşamasında paylaşılırsa tek nakliye ve tek kiralamayla iki tesisin işi tamamlanabilir." },
            { soru: "Her tesiste ayrı giriş kaydı gerekiyorsa tur uzar mı?", cevap: "Evet, her tesisin kendi kapı/İSG prosedürü tur süresine eklenir; bu süre tur planına dahil edilmezse gün sonunda son nokta atlanabilir. Hızlı kayıt alan tesisler önce, uzun prosedürlü tesisler ona göre planlanan saatte ziyaret edilir. Giriş prosedürü bilgisi önceden öğrenilirse gerçekçi bir tur programı kurulabilir." },
            { soru: "Farklı noktalarda farklı makine gerekiyorsa ne olur?", cevap: "Bir noktada geniş koridor, diğerinde dar raf arası gibi farklı ihtiyaçlar varsa tek makine yetmeyebilir; bu durumda tur planına ikinci bir makine eklenir ya da işler ayrı günlere bölünür. Bu ayrım, her noktadaki koridor/zemin bilgisi keşif veya talep aşamasında paylaşıldığında netleşir; sahada sürpriz makine yetersizliği yaşanmaması için bu bilgi önceden istenir." },
            { soru: "Çok noktalı tur, tek nokta kiralamadan daha mı ekonomik?", cevap: "Genellikle evet, çünkü nakliye maliyeti tek sevkiyatla birden fazla iş için kullanılır; her nokta ayrı sevkiyat yapılsaydı toplam maliyet kat kat artardı. Kesin karşılaştırma nokta sayısına, aralarındaki mesafeye ve her noktadaki iş süresine bağlıdır; nokta listesi netleştiğinde teklif tek tur ve ayrı ayrı senaryo olarak karşılaştırmalı gösterilir." },
            { soru: "Periyodik tekrarlanan bir rota için her seferinde yeniden mi planlıyorsunuz?", cevap: "Hayır, ilk turda oluşturulan nokta listesi, süre tahmini ve giriş prosedürü bilgisi sonraki periyodik turlarda referans olarak kullanılır; bu, teklif sürecini hızlandırır. Rotada değişiklik (yeni eklenen tesis, kapanan nokta) olursa güncellenir, ama sıfırdan planlama gerekmez." },
            { soru: "Taşeron firma olarak birden fazla müşterimize aynı gün hizmet verebilir miyiz?", cevap: "Evet, ama her tesisin kendi giriş prosedürü ayrı ayrı takip edilir; bir tesisteki kayıt diğerine geçerli değildir. Taşeron firmanın kendi iş programıyla tur planı senkronize edilir; her noktada ne kadar süre çalışılacağı bilgisi talep aşamasında paylaşılırsa rota buna göre sağlıklı kurulur." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'nin geniş alana yayılmış yapısı ve tesis bazlı ayrı giriş prosedürü uygulayabilme ihtimali önceki bölge sayfalarımızdaki genel OSB işleyiş bilgisiyle tutarlıdır. Belirli firma, tesis sayısı veya rota mesafesi uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Kemalpaşa OSB'de Zor Zemin ve Arazi Tipi Platform Kiralama",
        giris:
            "Kemalpaşa OSB büyümeye devam eden bir sanayi bölgesi olduğu için her zaman tamamlanmış, düz betonlu parseller kadar hafriyat veya inşaat aşamasındaki sahalar da bulunur. Yeni parsel tahsisi almış bir yatırımcının önce zemin hazırlığı yapması, sonra temel atması, sonra çelik konstrüksiyonu yükseltmesi süreci aylar sürebilir ve bu sürecin çoğunda saha henüz standart akülü platformun çalışabileceği düz beton zemine sahip değildir. Zor zemin ve arazi tipi platform kiralama, bu ara dönemdeki ihtiyacı karşılar: kırmataş, stabilize dolgu, çamurlu veya eğimli hafriyat sahası gibi zeminlerde 4x4 dizel arazi tipi makaslı veya eklemli platform kullanılır. Bu makineler geniş tekerlekli, yüksek tırmanma kabiliyetli ve dört nokta dengeleme sistemine sahiptir; standart akülü modelin küçük tekerleği ve sınırlı eğim toleransı bu zeminlerde yetersiz kalır. Karar her zaman zeminin gerçek durumuna dayanır, sahanın 'inşaat alanı' olması tek başına makine sınıfını belirlemez — bazı hafriyat sahaları beklenenden daha sıkışmış olabilir, bazı görünüşte düz alanlar altında yumuşak dolgu barındırabilir.",
        maddeler: [
            { baslik: "Zemin sınıfını sahada doğrulamak", metin: "Zor zemin kararı katalogdan değil sahadan verilir. Kırmataş, stabilize dolgu, çamur veya doğal toprak zeminin taşıma gücü görsel olarak yanıltıcı olabilir; sıkışmış görünen bir yüzey altında yumuşak dolgu barındırabilir. Keşifte zemin yürünür, yumuşak nokta ve su birikintisi işaretlenir, eğim açısı ölçülür. Belirsizlik varsa şantiye şefinin geoteknik bilgisi veya basit bir sıkışma testi istenir; makine sahaya girmeden önce güzergâh netleştirilir." },
            { baslik: "4x4 dizel arazi tipi makaslı platformun avantajı", metin: "Standart akülü makaslı platform genellikle %25 civarı tırmanma kabiliyetine ve dar, sert tekerleğe sahiptir; bu, düzensiz hafriyat sahasında yetersiz kalır. 4x4 dizel arazi tipi makaslı platform geniş, derin dişli tekerlek, yüksek tırmanma kabiliyeti ve dört nokta otomatik dengeleme sistemiyle eğimli ve düzensiz zeminde platformu yatay tutabilir. Bu sınıf Kemalpaşa'daki yeni parsellerde çelik konstrüksiyon öncesi hazırlık ve montaj işlerinin standart makinesidir." },
            { baslik: "Eğimli sahada dengeleme ve çalışma sınırı", metin: "Arazi tipi makinelerin otomatik dengeleme sistemi belirli bir eğim açısına kadar platformu yatay tutar; bu sınırın ötesinde makine kendini kilitleyip yükselmeyi engeller. Bu bir arıza değil güvenlik fonksiyonudur. Saha eğimi keşifte ölçülür ve üreticinin sınır değeriyle karşılaştırılır; eğim sınırı aşan bir nokta varsa zemin düzeltmesi yapılana kadar o bölüm ertelenir veya farklı bir erişim yöntemi (sabit iskele) değerlendirilir." },
            { baslik: "Yağış sonrası zemin değişimini yönetmek", metin: "Hafriyat veya stabilize dolgu zemin, yağış sonrası önemli ölçüde değişebilir; kuru günde sağlam görünen bir yüzey yağıştan sonra çamurlu ve kaygan hâle gelebilir. Operatör her vardiya başlangıcında zemini yeniden değerlendirir; koşullar kötüleştiyse çalışma ertelenir veya güzergâh değiştirilir. Kemalpaşa'daki inşaat sahalarında bu değerlendirme, önceki günün planına körü körüne güvenmek yerine her gün tekrarlanan bir rutin olmalıdır." },
            { baslik: "Lowbed nakliye ve saha içi konumlandırma", metin: "4x4 dizel arazi tipi makineler ağırdır ve lowbed ile sevk edilir; bu organizasyon standart araçtan uzun sürer ve en az 1-2 iş günü önceden planlanmalıdır. Saha girişindeki yol da makinenin ağırlığını taşıyacak sağlamlıkta olmalıdır — bazı yeni parsellerde giriş yolu henüz tam sağlamlaşmamış olabilir, bu da lowbed dahil tüm sevkiyat aracının giriş güzergâhını etkiler. Bu kontrol nakliye planlanmadan önce yapılır." },
        ],
        ekBolumler: [
            { baslik: "Zemin durumuna göre makine seçim tablosu", paragraflar: ["Aşağıdaki tablo, Kemalpaşa OSB'deki inşaat aşamasındaki sahalarda zemin tipine göre uygun makine sınıfını gösterir."], tablo: { basliklar: ["Zemin durumu", "Risk", "Uygun sınıf", "Ek önlem"], satirlar: [["Kırmataş/stabilize dolgu", "Orta sertlik, düzensiz yüzey", "4x4 dizel arazi tipi makaslı", "Güzergâh yürüyüşü"], ["Çamurlu/yağış sonrası zemin", "Kayganlık, batma", "4x4 dizel arazi tipi (koşullu)", "Günlük zemin kontrolü"], ["Eğimli hafriyat sahası", "Devrilme riski", "4x4 dizel, dengeleme sistemi sınır içinde", "Eğim ölçümü"], ["Saha betonu dökülmüş", "Düşük risk", "Akülü makaslı", "Standart kontrol"]] } },
            { baslik: "İnşaattan işletmeye geçiş planı", paragraflar: ["Zor zemin ihtiyacı geçicidir — saha betonu döküldükten ve bina kapalı hâle geldikten sonra iç imalat için akülü makaslı platforma geçilir. Bu geçiş tek sözleşmede iki dönemli plan olarak kurulursa ikinci makinenin sevkiyatı ilk makinenin iadesiyle birleştirilip nakliye maliyeti düşer. Geçiş tarihi kesin değilse sözleşmede esnek tarih aralığı tanımlanır.", "Şantiye döneminde makine güvenli park alanı ve yakıt ikmali planlanır; bu alan da zemin sağlamlığı açısından ayrıca kontrol edilir çünkü park hâlindeki makine de ağırlığını taşıyacak bir zemine ihtiyaç duyar."] },
            { baslik: "Şantiye İSG ve zemin sorumluluğu paylaşımı", paragraflar: ["Zemin taşıma gücünün ve genel şantiye risk değerlendirmesinin sorumluluğu işveren/ana yüklenicidedir; makinenin zemine uygun sınıfta seçilmesi ve güvenli kullanımı kiralayan tarafın sorumluluğundadır. Bu ayrım, zemin kaynaklı bir sorunda (örneğin beklenmedik yumuşak nokta) hangi tarafın hangi adımı atacağını sözleşmede netleştirir.", "Sahada beklenmedik bir zemin sorunu (gizli boşluk, aşırı yumuşak nokta) fark edilirse iş derhal durdurulur ve zemin düzeltmesi tamamlanana kadar o bölgede çalışılmaz; bu karar operatörün güvenlik yetkisi kapsamındadır ve iş programı baskısıyla ertelenmez."] },
        ],
        sss: [
            { soru: "Sahamız henüz betonlanmadı, hangi platform gerekir?", cevap: "Zemin kırmataş, stabilize dolgu veya çamursa 4x4 dizel arazi tipi makaslı platform gerekir; standart akülü model bu zeminde yetersiz kalır. Kesin karar sahadan alınan bilgiyle verilir — zemin fotoğrafı ve mümkünse eğim bilgisi talep aşamasında istenir. Belirsizlik varsa kısa bir saha ziyaretiyle zemin doğrulanır." },
            { soru: "Yağmurdan sonra zemin değişirse ne olur?", cevap: "Operatör her vardiya başlangıcında zemini yeniden değerlendirir; kuru günde sağlam görünen bir yüzey yağıştan sonra çamurlu ve kaygan hâle gelebilir. Koşullar kötüleştiyse çalışma ertelenir veya güzergâh değiştirilir. Bu değerlendirme her gün tekrarlanan bir rutindir, önceki günün planına güvenilmez." },
            { soru: "Eğimli bir sahada platform devrilme riski var mı?", cevap: "Arazi tipi makinelerin otomatik dengeleme sistemi belirli bir eğim açısına kadar platformu yatay tutar; bu sınırın ötesinde makine kendini kilitleyip yükselmeyi engeller, bu bir güvenlik fonksiyonudur. Saha eğimi keşifte ölçülür ve üreticinin sınırıyla karşılaştırılır; sınırı aşan noktalarda zemin düzeltmesi yapılana kadar o bölüm ertelenir." },
            { soru: "4x4 dizel arazi tipi makine ne kadar sürede teslim edilir?", cevap: "Ağır olduğu için lowbed ile sevk edilir; organizasyon standart araçtan uzundur ve en az 1-2 iş günü önceden planlanmalıdır. Ayrıca saha girişindeki yolun makinenin ağırlığını taşıyacak sağlamlıkta olup olmadığı nakliye planlanmadan önce kontrol edilir; bazı yeni parsellerde giriş yolu henüz tam sağlamlaşmamış olabilir." },
            { soru: "İnşaat bitince akülü platforma ne zaman geçiyoruz?", cevap: "Saha betonu döküldükten ve bina kapalı hâle geldikten sonra iç imalat için akülü makaslı platform devreye girer. Bu geçiş tek sözleşmede iki dönemli plan olarak kurulursa nakliye maliyeti düşer. Geçiş tarihi kesin değilse sözleşmede esnek tarih aralığı tanımlanır, şantiye programı kayarsa güncellenir." },
            { soru: "Sahada beklenmedik bir yumuşak nokta fark edilirse ne yapılır?", cevap: "İş derhal durdurulur ve zemin düzeltmesi tamamlanana kadar o bölgede çalışılmaz; bu karar operatörün güvenlik yetkisi kapsamındadır ve iş programı baskısıyla ertelenmez. Zemin taşıma gücünün genel değerlendirmesi işveren/ana yüklenicinin sorumluluğundadır, ancak sahada fark edilen anlık riske operatör doğrudan müdahale eder." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kemalpaşa OSB'nin büyüyen sanayi bölgesi olması ve yeni parsellerde inşaat aşamasındaki sahaların bulunması kamuya açık genel bilgidir; arazi tipi makine tırmanma/dengeleme değerleri sektör standardıdır. Belirli parsel, şantiye adı veya zemin raporu uydurulmamıştır.",
    },
};
