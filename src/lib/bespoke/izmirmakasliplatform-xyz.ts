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
};
