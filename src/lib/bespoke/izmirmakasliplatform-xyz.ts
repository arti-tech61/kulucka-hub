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
};
