// ═══════════════════════════════════════════════════════════════════════════
// kutahyaplatform.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: KÜTAHYA'DAKİ 4. DOMAİN — KOBİ/KÜÇÜK-ORTA ÖLÇEKLİ İŞLETME BÜTÇE
// EKONOMİSİ AÇISI. Diğer üç Kütahya dosyası şu eksenlerde yazılmıştır:
//   - kutahyaplatform-com.ts     → seramik sanayi geneli + ilçe bazlı sektör
//                                   çeşitliliği (maden/enerji, jeotermal, tarım)
//   - kutahyaplatform-com-tr.ts  → çini atölyesi/ihracat paketleme + hammadde
//                                   ocakları, ahşap sandık atölyeleri
//   - kutahyaplatform-tr.ts      → enerji sektörü (linyit ocağı, termik santral,
//                                   jeotermal, enerji nakliye hattı)
// BU dosya bambaşka bir mercek kullanır: büyük tesis veya sektör anlatmaz,
// KÜÇÜK ATÖLYE VE KOBİ'NİN BÜTÇE MANTIĞINI anlatır — tek atölyenin kira
// bedelini karşılayamadığı durumda komşu atölyeyle birleşme, dönemsel toplu
// bakım turu, kısa süreli/parça-parça kiralamanın büyük işletmeye göre farklı
// ekonomisi. Sektör (çini/seramik) arka planda kalır, ön planda KOBİ'nin
// nakit akışı ve karar verme mantığı vardır.
//
// ⚠️ ÇAKIŞMA KONTROLÜ: Diğer 3 dosyadaki tavsanli/gediz sayfalarıyla aynı
// ilçe adı kullanılıyor ama konu ekseni (maden/enerji/tarım/çini-ihracat)
// yerine burada KOBİ bütçe ortaklığı/toplu bakım anlatılıyor; cümle ve tablo
// düzeyinde tekrar yoktur.
//
// Bilgi kuralı: Kütahya'nın çini-seramik ve enerji sanayisiyle bilinmesi,
// OSB'lerin küçük-orta ölçekli atölyelerden oluşması kamuya açık genel
// bilgidir. Tesis adı, firma adı, rakam UYDURULMAMIŞTIR.
//
// Simetri: giriş (tek uzun paragraf) → 5 madde → 3 ek bölüm (ilkinde tablo)
// → 6 uzun SSS → kaynak. Hedef ~1000-1200 kelime/sayfa.
// Yazım: 2026-08-13.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const KUTAHYAPLATFORM_NET: Record<string, BespokeIcerik> = {
    "bolge:kutahya-merkez": {
        h1: "Kütahya Merkezde Küçük Atölye ve KOBİ'ler İçin Bütçe Dostu Platform Kiralama",
        giris:
            "Kütahya merkezdeki sanayi dokusunun büyük kısmı, on-elli kişilik atölyelerden, aile işletmesi seramik fırınlarından ve küçük metal-mobilya imalathanelerinden oluşur; bu işletmelerin hiçbiri büyük bir fabrikanın bütçesine sahip değildir ama aynı büyük fabrika gibi arada bir yüksekte çalışma ihtiyacı doğar — çatı bakımı, aydınlatma değişimi, cephe boyası, baca temizliği. Sorun, bu ihtiyacın nadiren tek başına bir haftalık kiralamayı ekonomik kılacak kadar büyük olmasıdır; küçük bir atölye sahibi genellikle 'iki günlük iş için bir haftalık kira mı ödeyeceğim' sorusuyla karşı karşıya kalır ve çoğu zaman işi merdivenle, güvensiz biçimde kendi imkânlarıyla halletmeye çalışır. Bu sayfa tam olarak bu boşluğu hedefler: küçük işletmenin bütçesine uyacak kısa süreli, parça-parça ve mümkünse komşu atölyeyle paylaşılan bir kiralama modelini anlatır. Amaç, büyük sanayi tesisine sunulan hizmetin küçültülmüş bir kopyası değil, küçük işletmenin kendi nakit akışına göre kurgulanmış ayrı bir modeldir.",
        maddeler: [
            {
                baslik: "Neden küçük atölye için 'standart' kiralama modeli işlemiyor",
                metin:
                    "Büyük bir tesiste haftalarca süren bir bakım programı, makinenin sahada kalış süresini uzun tutarak günlük maliyeti aşağı çeker; küçük bir atölyede ise iş genellikle bir-iki günde biter ve makinenin nakliye-kurulum maliyeti, kullanım süresine oranla orantısız büyür. Standart tarife bu farkı görmezden gelirse, küçük işletme sahibi teklifi aldığında 'bu iş için bu para çok' der ve vazgeçer. Kütahya merkezdeki küçük atölyelere yönelik kiralamada bu yüzden ayrı bir yaklaşım gerekir: nakliye maliyetini tek işletmeye değil birden fazla küçük işe yaymak.",
            },
            {
                baslik: "Komşu atölye birleştirme mantığı",
                metin:
                    "Aynı sanayi sitesinde veya aynı sokakta yan yana duran iki-üç küçük atölyenin, birbirinden habersiz ayrı ayrı makine çağırması hem onlar hem bizim açımızdan verimsizdir. Komşu atölyeler bakım ihtiyaçlarını aynı haftaya denk getirip tek bir makine talebinde birleştiğinde, nakliye bir kez yapılır ve makine bir atölyeden diğerine yürüyerek geçer; her işletme yalnızca kendi kullandığı saat için öder. Bu modelin tek koşulu, atölyelerin bakım tarihini önceden koordine etmesidir — bu koordinasyonu genellikle sanayi sitesi yönetimi veya esnaf odası üzerinden kurarız.",
            },
            {
                baslik: "Dönemsel toplu bakım turu",
                metin:
                    "Yılın belirli dönemlerinde (örneğin kış öncesi çatı kontrolü veya yaz öncesi cephe bakımı) aynı sanayi sitesindeki birçok atölyenin aynı anda benzer bir ihtiyacı olur. Bu dönemlerde tek bir makineyi ve operatörü bir hafta boyunca o siteye tahsis edip, önceden sıraya giren atölyeleri gün gün dolaşan bir 'toplu bakım turu' kurarız. Her atölye kendi gününü bilir, makine o gün geldiğinde iş biter, ertesi gün komşu atölyeye geçer. Bu düzen, tek atölyenin makineyi bir haftalığına tutmasından çok daha ucuza mal olur.",
            },
            {
                baslik: "Yarım gün ve saatlik kısa iş modeli",
                metin:
                    "Küçük bir atölyenin ihtiyacı bazen gerçekten birkaç saati geçmez — tek bir aydınlatma armatürü, tek bir baca gözlemi, tek bir tabela montajı. Bu ölçekteki işler için günlük tarife yerine yarım gün veya saatlik paket sunulur; makine ve operatör aynı gün içinde birden fazla küçük işe planlanarak hem bizim tarafımızda hem işletmenin tarafında maliyet düşürülür. Bu modelin işlemesi için işlerin önceden bir araya toplanması (aynı bölgede aynı gün üç-dört küçük iş) gerekir; tek başına gelen bir yarım günlük talep, günün geri kalanında boş kalan makine yüzünden hâlâ pahalı kalabilir.",
            },
            {
                baslik: "Peşin ödeme yerine iş bazlı faturalama",
                metin:
                    "Büyük işletmeler genellikle aylık sözleşme ve toplu faturalama ile çalışır; küçük atölye sahibi için bu model nakit akışı açısından zorlayıcıdır çünkü aylık taahhüt, düzensiz gelen bir iş hacmiyle uyuşmaz. Kütahya merkezdeki küçük işletmelere sunduğumuz modelde her iş kendi başına faturalanır, aylık asgari kullanım şartı aranmaz. Bu, işletme sahibinin yalnızca gerçekten ihtiyaç duyduğu ay hizmet almasını ve boş aylarda hiçbir yükümlülük taşımamasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ölçeğe göre kiralama modeli karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, işletme ölçeğine göre hangi kiralama modelinin daha ekonomik olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme ölçeği", "Tipik ihtiyaç", "Önerilen model", "Maliyet mantığı"],
                    satirlar: [
                        ["Tek kişilik/aile atölyesi", "Yılda 1-2 kısa iş", "Saatlik/yarım gün paket", "Kullanım kadar öde"],
                        ["Küçük atölye (5-15 kişi)", "Dönemsel bakım", "Komşu atölye birleştirme", "Nakliye paylaşımı"],
                        ["Orta ölçekli sanayi sitesi", "Yıllık 2-3 dönem", "Toplu bakım turu", "Tek nakliye, çok durak"],
                        ["Büyük tesis (referans)", "Sürekli/uzun süreli", "Standart aylık sözleşme", "Uzun süre = düşük günlük"],
                    ],
                },
            },
            {
                baslik: "Sanayi sitesi yönetimiyle koordinasyon nasıl kurulur",
                paragraflar: [
                    "Komşu atölye birleştirme veya toplu bakım turu modelinin işlemesi için tek tek işletmelerle değil, mümkünse sanayi sitesi yönetimi veya esnaf odasıyla iletişime geçilir. Bu kurumlar, üye işletmelerin bakım ihtiyacını toplu duyurabilir ve talepleri belirli bir tarihte bir araya getirebilir; bu, bizim tek tek her atölyeyi arayıp tarih koordine etmemize göre çok daha hızlı işler. Kütahya merkezdeki bazı sanayi sitelerinde yıllık bakım dönemi zaten bir gelenek hâline gelmiştir (örneğin kış öncesi çatı kontrolü); bu geleneğe erişim ekipmanı kiralamasını eklemek, sitenin mevcut düzenine yeni bir katman eklemekten ibarettir.",
                    "Sanayi sitesi yönetimiyle kurulan bu koordinasyon, tek seferlik değil süreklidir — bir kez kurulan iletişim hattı, sonraki dönemlerde yeniden sıfırdan başlamadan, geçen yılın listesi güncellenerek çalışır.",
                ],
            },
            {
                baslik: "Küçük işletmenin bütçesini koruyan pratik öneriler",
                paragraflar: [
                    "Küçük bir atölye sahibinin kiralama maliyetini düşürmesinin en pratik yolu, ihtiyacı erkenden bildirmektir — son dakika talep edilen tek işlerde nakliye maliyeti tam olarak o işe yazılır, ama haftalar önceden bildirilen bir ihtiyaç, komşu bir işle birleştirilme veya dönemsel tura eklenme şansı bulur. İkinci öneri, mümkünse birden fazla küçük işi (örneğin hem çatı kontrolü hem aydınlatma değişimi) aynı güne toplamaktır; makine bir kez geldiğinde iki iş bitirilirse, ikinci iş için ayrı nakliye ödenmez.",
                    "Üçüncü öneri, komşu işletmelerle konuşmaktır — birçok küçük atölye sahibi, yan atölyenin de benzer bir ihtiyacı olduğunu bilmez; oysa bu bilgi paylaşıldığında ikisi birlikte talep ederek toplam maliyeti ciddi biçimde aşağı çekebilir. Bu üç öneri de bir araya geldiğinde, küçük işletmenin yüksekte çalışma ihtiyacı büyük tesisle kıyaslanabilir bir birim maliyete iner.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek başımıza küçük bir atölyeyiz, komşumuzla birlikte kiralama gerçekten daha mı ucuz oluyor?",
                cevap:
                    "Evet, çünkü kiralama maliyetinin önemli bir kısmı nakliye ve kurulumdan gelir ve bu kalem makine kaç saat kullanılırsa kullanılsın sabittir. İki atölye aynı haftaya denk gelen bir ihtiyaçla tek makine talep ettiğinde, nakliye bir kez yapılır ve bu sabit maliyet ikiye bölünür; her işletme yalnızca kendi kullandığı saat için normal tarifeyi öder. Pratikte bu, özellikle birkaç saatlik kısa işlerde toplam faturayı belirgin ölçüde düşürür. Tek koşul, iki tarafın bakım tarihini önceden koordine etmesidir; bu koordinasyonu isterseniz biz üstleniriz.",
            },
            {
                soru: "Sanayi sitemizde yıllık bakım dönemi yok, biz nasıl başlatabiliriz?",
                cevap:
                    "Site yönetiminize veya esnaf odanıza, üye işletmelerin bakım ihtiyacını topladığınız bir duyuru yapmasını önerebilirsiniz; bu genellikle tek bir yazı veya toplantı gündemiyle başlar. Biz bu süreçte, hangi tarihlerin uygun olduğu ve kaç işletmenin ilgilendiği netleştiğinde devreye gireriz ve bir haftalık tur programı öneririz. İlk yıl bu koordinasyonu kurmak biraz zaman alır, ama bir kez kurulduğunda gelenek hâline gelir ve sonraki yıllarda liste güncellenerek aynı düzen tekrarlanır.",
            },
            {
                soru: "Bizim işimiz gerçekten iki-üç saat sürüyor, bu kadar kısa iş için makine çağırmak mantıklı mı?",
                cevap:
                    "Tek başına geldiğinde bazen mantıklı olmayabilir çünkü nakliye süresi işin kendisinden uzun sürebilir; bu yüzden gerçekten kısa işlerde önce aynı bölgede aynı gün başka bir talep olup olmadığına bakarız. Varsa, makine ve operatör aynı gün içinde birkaç küçük işi art arda yapar ve her işletme yalnızca kendi payına düşen kısa süre için öder. Yoksa, saatlik/yarım gün paketi yine sunulur ama maliyet biraz daha yüksek kalır; bu durumda işinizi birkaç hafta önceden bildirmeniz, başka bir işle eşleşme şansını artırır.",
            },
            {
                soru: "Aylık sözleşme yapmadan, sadece ihtiyaç oldukça çağırabilir miyiz?",
                cevap:
                    "Evet, küçük işletmelere sunduğumuz modelde aylık asgari kullanım veya sabit sözleşme şartı yoktur; her iş kendi başına değerlendirilir ve faturalanır. Bu, düzensiz iş hacmi olan küçük atölyeler için özellikle uygundur çünkü boş geçen aylarda hiçbir ödeme veya yükümlülük taşımazsınız. İsterseniz yine de yıl içinde tahmini ihtiyacınızı bize önceden bildirebilirsiniz; bu, dönemsel tur veya komşu birleştirme fırsatlarından haberdar olmanızı kolaylaştırır ama bir taahhüt anlamına gelmez.",
            },
            {
                soru: "Toplu bakım turunda sıramız geldiğinde biz hazır değilsek ne olur?",
                cevap:
                    "Tur programı önceden paylaşılan bir takvime göre ilerlediği için, sıranız geldiğinde atölyenizin hazır olması (erişilecek alanın boş, malzemenin temin edilmiş olması gibi) beklenir. Hazır değilseniz, mümkünse turun o günkü sırası bir sonraki durakla değiştirilir ve size ayrı bir gün ayarlanır; ama bu, turun genel akışını bozabileceği için mümkünse önceden haber vermeniz istenir. Sık sık hazır olunmaması, gelecek dönemlerde o atölyenin tur programına dahil edilme önceliğini düşürebilir çünkü tur, katılan herkesin zamanına saygı üzerine kurulur.",
            },
            {
                soru: "Küçük atölye için sunduğunuz makineler büyük tesislerden farklı mı, yoksa aynı filo mu kullanılıyor?",
                cevap:
                    "Aynı filodan makineler kullanılır; küçük atölye için ayrı, daha düşük kaliteli bir ekipman havuzu yoktur. Fark makinede değil, kiralama modelindedir — süre, faturalama ve nakliye paylaşımı küçük işletmenin bütçesine göre esnetilir. Makine seçimi yine işin gereğine göre yapılır: çatı bakımı için uygun erişim yüksekliği, atölye içi iş için uygun gövde genişliği gibi kriterler büyük tesiste de küçük atölyede de aynı titizlikle değerlendirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Kütahya merkezdeki sanayi dokusunun büyük oranda küçük ve orta ölçekli atölyelerden oluştuğu kamuya açık genel bilgidir; komşu atölye birleştirme, dönemsel toplu bakım turu ve iş bazlı faturalama modelleri firma pratiğidir.",
    },

    "bolge:kutahya-osb": {
        h1: "Kütahya OSB'de Küçük ve Orta Ölçekli İşletmeler İçin Paylaşımlı Kiralama Modeli",
        giris:
            "Bir organize sanayi bölgesi dışarıdan bakıldığında tek tip, büyük ölçekli bir sanayi kompleksi gibi görünebilir, ama Kütahya OSB'nin içindeki parsel dağılımı bu izlenimi doğrulamaz — büyük üretim tesislerinin yanı sıra, çok sayıda küçük ve orta ölçekli işletme de aynı bölgede parsel veya kiralık hol kullanır. Bu küçük işletmelerin bakım ihtiyacı büyük komşularıyla aynı türdendir (çatı, cephe, iç mekân aydınlatması) ama bütçesi aynı değildir; büyük bir tesis yıllık bakım sözleşmesini rahatça karşılarken, OSB'deki küçük bir imalathane için tek seferlik bir kiralama bile dikkatli planlanması gereken bir kalemdir. OSB'nin avantajı, bu küçük işletmelerin birbirine coğrafi olarak çok yakın olmasıdır — aynı cadde üzerindeki üç-dört parsel arasında yürüme mesafesi dakikalarla ölçülür. Bu sayfa, OSB içindeki küçük ve orta ölçekli işletmelerin bu yakınlığı nasıl bir bütçe avantajına çevirebileceğini anlatır.",
        maddeler: [
            {
                baslik: "OSB içi parsel yakınlığının maliyete yansıması",
                metin:
                    "Bir OSB'nin iç yol ağı, parseller arası mesafeyi genellikle birkaç yüz metreyle sınırlar; bu, makinenin bir parselden diğerine kendi gücüyle, ayrı bir nakliye aracı gerekmeden yürüyebileceği anlamına gelir. Şehir içindeki dağınık küçük atölyelerde bu mesafe kilometrelerle ölçülürken, OSB'de komşu parseller arası geçiş neredeyse maliyetsizdir. Bu fark, OSB'deki küçük işletmeler için paylaşımlı kiralama modelini şehir merkezindekinden bile daha avantajlı kılar.",
            },
            {
                baslik: "OSB yönetimi üzerinden toplu talep organizasyonu",
                metin:
                    "Kütahya OSB yönetimi, üye işletmelerin ortak ihtiyaçlarını (güvenlik, temizlik, bazen bakım) koordine eden bir yapıya sahiptir; bu yapı, küçük işletmelerin erişim ekipmanı ihtiyacını toplu duyurmak için de kullanılabilir. Yönetim üzerinden gelen bir duyuru, tek tek işletmeyle telefon trafiğine göre çok daha hızlı sonuç verir — bir hafta içinde kaç işletmenin ilgilendiği netleşir ve buna göre bir program kurulur. Bu koordinasyonu kurmak isteyen işletmeler için OSB yönetimiyle bağlantıyı biz de destekleriz.",
            },
            {
                baslik: "Küçük imalathanede iç mekân erişim ihtiyacı",
                metin:
                    "OSB'deki küçük imalathanelerin çoğunda tavan yüksekliği büyük fabrika holüne göre daha alçaktır ve iç mekân erişim ihtiyacı (aydınlatma, havalandırma kanalı, çatı makası kontrolü) daha kompakt bir makine sınıfıyla karşılanır. Kompakt akülü makaslı sınıf, hem düşük tavanlı hole sığması hem egzozsuz çalışması nedeniyle küçük imalathaneler için standart tercih hâline gelmiştir; bu sınıfın günlük kiralama bedeli de büyük dizel sınıfa göre düşüktür, bu da küçük işletme bütçesine ayrıca uyar.",
            },
            {
                baslik: "Ortak cephe ve dış alan bakımında maliyet paylaşımı",
                metin:
                    "Bazı OSB parselleri bitişik nizamda inşa edilmiştir ve komşu binaların dış cephesi neredeyse aynı hizadadır; böyle durumlarda bir cephe boyası veya tabela işi, komşu binanın benzer ihtiyacıyla aynı makine turunda birleştirilebilir. Bu birleşme, özellikle OSB'nin belirli bir caddesinde art arda sıralı küçük işletmeler olduğunda pratik bir sonuç verir — makine caddeyi baştan sona dolaşır, her işletme kendi cephesindeki işi bitirdiğinde makine bir sonrakine geçer.",
            },
            {
                baslik: "Kısa vadeli üretim artışında geçici erişim ihtiyacı",
                metin:
                    "Küçük ölçekli işletmelerde sipariş yoğunluğu dönemseldir; bazı aylarda üretim hattı genişletilir, yeni raf sistemi kurulur veya geçici depolama alanı oluşturulur. Bu geçici genişleme sırasında ortaya çıkan yüksekte çalışma ihtiyacı (raf montajı, geçici aydınlatma) kalıcı bir yatırım değil, birkaç günlük bir kiralamayla karşılanır. OSB'deki küçük işletmeler için bu tip kısa vadeli ihtiyaçlarda esnek günlük tarife, sabit haftalık pakete göre daha ekonomik kalır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB içi mesafeye göre maliyet karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, OSB içindeki parsel yakınlığının nakliye maliyetine nasıl yansıdığını basitçe özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Nakliye ihtiyacı", "Maliyet etkisi", "Uygun işletme profili"],
                    satirlar: [
                        ["Tek parsel, tek iş", "Standart giriş-çıkış nakliyesi", "Tam nakliye bedeli", "Bağımsız büyük iş"],
                        ["İki komşu parsel, aynı gün", "Parseller arası kendi gücüyle geçiş", "Nakliye ikiye bölünür", "Küçük-orta ölçekli komşular"],
                        ["Cadde boyu 3-4 parsel", "Tek giriş, sıralı geçiş", "Nakliye 3-4'e bölünür", "Bitişik nizam küçük işletmeler"],
                        ["OSB geneli dönemsel tur", "Tek haftalık program", "En düşük birim maliyet", "Çok sayıda küçük işletme"],
                    ],
                },
            },
            {
                baslik: "OSB yönetimiyle iletişim kurma adımları",
                paragraflar: [
                    "Küçük işletmelerin OSB içi paylaşımlı kiralamadan faydalanabilmesi için ilk adım, OSB yönetimine veya varsa üye işletmeler derneğine durumu bildirmektir; bu bildirim genellikle bir dilekçe veya toplantı talebi kadar basittir. Yönetim, üyelerine yönelik ortak duyuru kanalı (panolar, ortak yazışma grubu gibi) üzerinden talebi paylaşabilir ve ilgilenen işletmeleri bir araya getirebilir.",
                    "Bu süreçte biz de teknik tarafı üstleniriz — kaç işletmenin, hangi tarihte, ne tür bir ihtiyacı olduğu netleştiğinde, en verimli güzergâh ve makine sınıfı önerisini biz hazırlarız. İlk organizasyon bir miktar zaman alsa da, bir kez kurulan bu düzen OSB içinde kalıcı bir alışkanlığa dönüşebilir.",
                ],
            },
            {
                baslik: "Küçük işletmenin karar verme sürecinde dikkat edilmesi gerekenler",
                paragraflar: [
                    "Küçük bir işletme sahibi kiralama kararını genellikle son ana bırakır çünkü bakım ihtiyacı acil değilmiş gibi görünür; oysa erken planlama, hem paylaşımlı modelden faydalanma hem de daha uygun tarih seçme şansı verir. Son dakika talep edilen tek başına bir iş, hem daha yüksek birim maliyetle hem de makine müsaitliğine bağlı gecikmeyle karşılaşabilir.",
                    "İkinci dikkat noktası, işin kapsamını net tanımlamaktır — 'çatıya bir şey bakılacak' gibi belirsiz bir talep, doğru makine sınıfını seçmeyi zorlaştırır ve sahada ek süre kaybına yol açabilir. Kısa bir keşif görüşmesi, küçük işletme için bile bu belirsizliği gidermenin en ucuz yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'deki komşu parselle aynı anda kiralama yapmak için resmi bir anlaşma mı gerekiyor?",
                cevap:
                    "Hayır, resmi bir ortak anlaşma şart değildir; her işletme kendi adına ayrı fatura alır, yalnızca kiralama tarihi ve makine turu koordine edilir. Pratikte biz, iki veya daha fazla komşu işletmeyle ayrı ayrı görüşüp aynı haftaya denk gelen bir program öneririz; her taraf kendi işini kendi bütçesiyle onaylar. Tek gereken, tarafların bakım tarihini bize önceden bildirmesidir; bu bildirim ne kadar erken gelirse, uygun bir ortak tarih bulma ihtimali o kadar artar.",
            },
            {
                soru: "Küçük imalathanemizin tavanı alçak, standart makaslı platform sığar mı?",
                cevap:
                    "Çoğu küçük imalathane holünde kompakt akülü makaslı sınıf rahatlıkla çalışır çünkü bu sınıf düşük tavan yüksekliği ve dar geçitler için tasarlanmıştır; büyük dizel sınıfın aksine egzoz gazı çıkarmadığı için kapalı ve düşük tavanlı alanlarda kullanımı da uygundur. Kesin uygunluk, tavan yüksekliği ve kapı/geçit genişliğinin keşifte ölçülmesiyle netleşir; bu ölçüm olmadan makine sahaya yönlendirilmez çünkü sığmayan bir makinenin geri gönderilmesi hem zaman hem maliyet kaybıdır.",
            },
            {
                soru: "OSB yönetimi bize henüz böyle bir toplu duyuru yapmadı, biz kendimiz nasıl başlatabiliriz?",
                cevap:
                    "OSB yönetimine veya üye işletmeler derneğine kısa bir dilekçeyle talebinizi iletebilirsiniz; birçok yönetim, üyelerinden gelen somut bir talebe olumlu yanıt verir çünkü bu tür bir organizasyon üyelerine fayda sağlar. Talebinizi iletirken bizimle de iletişime geçerseniz, teknik tarafı (program, makine sınıfı, maliyet paylaşımı mantığı) hazırlayıp yönetime birlikte sunabiliriz; bu, sürecin daha hızlı ilerlemesini sağlar.",
            },
            {
                soru: "Bizim işimiz sadece birkaç saat ama komşumuzun ihtiyacı yok, yine de uygun fiyat alabilir miyiz?",
                cevap:
                    "Komşu paylaşımı olmadan da saatlik/yarım gün paket sunulur ama bu durumda birim maliyet, paylaşımlı modele göre bir miktar daha yüksek kalır çünkü nakliye tek işe yazılır. Maliyeti düşürmenin alternatif yolu, işinizi birkaç hafta önceden bildirmenizdir — bu süre içinde OSB'deki başka bir işletmenin benzer bir talebiyle eşleşme ihtimali oluşabilir. Eşleşme garanti edilmez ama erken bildirim bu ihtimali gerçek anlamda artırır.",
            },
            {
                soru: "Dönemsel üretim artışında kısa süreliğine raf sistemi kuracağız, bu ne kadar sürer ve maliyeti nasıl hesaplanır?",
                cevap:
                    "Süre, raf sisteminin büyüklüğüne ve montaj karmaşıklığına bağlıdır; küçük bir genişleme genellikle bir-iki gün sürer. Maliyet, günlük kiralama bedeli üzerinden hesaplanır ve büyük bir yatırım gerektirmediği için işletmenin geçici ihtiyacına uygun düşer. Kesin süre ve maliyet, raf sisteminin planı ve montaj yüksekliği paylaşıldığında netleştirilir; bu bilgi olmadan verilen bir tahmin, sahada değişebilir.",
            },
            {
                soru: "Büyük komşumuzun yıllık bakım sözleşmesi var, biz de aynı sözleşmeye dahil olabilir miyiz?",
                cevap:
                    "Doğrudan aynı sözleşmeye dahil olmak genellikle mümkün değildir çünkü sözleşme büyük işletmenin kendi ihtiyaç hacmine göre kurulmuştur, ama komşuluk avantajından yine faydalanabilirsiniz. Büyük komşunuzun bakım makinesi sahada olduğu günlerde, sizin kısa süreli ihtiyacınızı aynı makineye ek bir saat olarak eklemek mümkündür; bu, ayrı bir nakliye gerektirmediği için düşük maliyetli bir seçenektir. Bu tip bir eşleşme için büyük komşunuzun bakım takvimini önceden öğrenmemiz gerekir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Kütahya OSB'nin büyük ve küçük-orta ölçekli işletmeleri bir arada barındıran bir sanayi bölgesi olduğu, OSB'lerin genellikle üye işletmeler için ortak koordinasyon yapısına sahip olduğu kamuya açık genel bilgidir; paylaşımlı kiralama ve toplu duyuru modeli firma pratiğidir.",
    },

    "bolge:tavsanli": {
        h1: "Tavşanlı'da Küçük İşletmeler İçin Bölgesel Bütçe Paylaşımlı Kiralama",
        giris:
            "Tavşanlı, Kütahya'nın büyük sanayi tesislerinden bazılarına ev sahipliği yapsa da, ilçe merkezindeki esnaf ve küçük işletme dokusu bu büyük tesislerden bağımsız, kendi ölçeğinde işler. Küçük bir nakliyeci deposu, bir oto tamir atölyesi, bir mobilya imalathanesi ya da bir gıda üretim atölyesi — bunların hiçbiri büyük tesislerin bakım bütçesine sahip değildir ama aynı büyük tesisler gibi arada bir çatı kontrolüne, tabela değişimine veya aydınlatma bakımına ihtiyaç duyar. Bu sayfa, Tavşanlı merkezindeki küçük işletmelerin bu ihtiyacı, büyük tesislerin gölgesinde kalmadan, kendi bütçelerine uygun bir modelle nasıl karşılayabileceğini anlatır — büyük sanayi tesisinin maden veya enerji bağlantılı yoğun bakım programı bu sayfanın konusu değildir; burada anlatılan, ilçe merkezindeki küçük işletmenin gündelik ve dönemsel ihtiyacıdır.",
        maddeler: [
            {
                baslik: "İlçe merkezinde dağınık küçük işletme dokusu",
                metin:
                    "Tavşanlı merkezindeki küçük işletmeler, büyük bir OSB gibi tek bir kompakt alanda değil, ilçenin farklı mahallelerine ve ana yol kenarına dağılmış hâlde bulunur. Bu dağınıklık, paylaşımlı kiralama modelini OSB'ye göre biraz daha zorlaştırır çünkü işletmeler arası mesafe daha büyüktür; buna rağmen aynı cadde veya aynı sanayi sitesi içindeki komşu işletmeler arasında yine de birleştirme fırsatı bulunur. Fırsatı bulmanın anahtarı, işletmelerin ihtiyaçlarını bize veya birbirine önceden bildirmesidir.",
            },
            {
                baslik: "Haftalık pazar ve ticaret yoğunluğuna göre planlama",
                metin:
                    "İlçe merkezindeki bazı işletmeler (özellikle cadde üzerindeki dükkan ve depolar) haftanın belirli günlerinde daha yoğun çalışır; erişim makinesinin bu işletmelerin önüne park edilmesi gereken işlerde, yoğun günlerin dışına planlama yapmak hem işletme hem müşteri trafiği açısından daha uygundur. Bu bilgi keşifte işletme sahibinden alınır ve kiralama takvimine yansıtılır.",
            },
            {
                baslik: "Küçük nakliye ve depo işletmelerinde raf-çatı bakımı",
                metin:
                    "Tavşanlı'daki küçük nakliye ve depo işletmelerinin bakım ihtiyacı genellikle deponun çatı kaplaması, yükleme rampası aydınlatması ve iç raf sisteminin üst katlarıdır. Bu işler, büyük bir lojistik merkezine göre çok daha küçük ölçekte olduğu için kompakt makine sınıfı ve kısa süreli kiralama yeterlidir; büyük depo işletmelerine sunulan uzun süreli sözleşme modeli burada gerekli değildir.",
            },
            {
                baslik: "Mevsimsel bakım ihtiyacında komşu işletme koordinasyonu",
                metin:
                    "Kış öncesi çatı kontrolü veya yaz öncesi cephe bakımı gibi mevsimsel ihtiyaçlar, Tavşanlı'daki küçük işletmelerde de büyük tesislerdeki gibi belirli dönemlerde yoğunlaşır. Aynı dönemde ihtiyacı olan birkaç işletme bir araya geldiğinde, tek bir haftalık program içinde art arda planlanabilir; bu koordinasyonu kurmak için işletmelerin birbirini tanıması yeterlidir, resmi bir kurum aracılığına gerek yoktur — küçük bir ilçede bu tanışıklık zaten büyük ölçüde mevcuttur.",
            },
            {
                baslik: "Tek seferlik acil ihtiyaçlarda esnek çözüm",
                metin:
                    "Bazen küçük işletmenin ihtiyacı planlanamayacak kadar acildir — fırtınada hasar gören bir tabela, aniden arızalanan bir aydınlatma armatürü. Bu tip acil ve tek seferlik işlerde paylaşım fırsatı genellikle olmaz, ama kısa süreli tek makine kiralaması yine de mümkündür; maliyet standart tarifeye göre biraz daha yüksek kalabilir çünkü nakliye tek işe yazılır. İşletme sahibine bu maliyet farkı önceden açıkça belirtilir, sürpriz fatura çıkarılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tavşanlı'da işletme tipine göre tipik ihtiyaç",
                paragraflar: [
                    "Aşağıdaki tablo, Tavşanlı merkezindeki küçük işletme tiplerine göre en sık karşılaşılan erişim ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik ihtiyaç", "Önerilen sıklık", "Uygun model"],
                    satirlar: [
                        ["Küçük nakliye/depo", "Çatı, rampa aydınlatması", "Yılda 1 kez", "Mevsimsel tur"],
                        ["Oto tamir/servis", "Tabela, cephe bakımı", "Yılda 1 kez veya arıza anı", "Tek seferlik/acil"],
                        ["Mobilya imalathanesi", "İç mekân aydınlatma", "Dönemsel", "Komşu birleştirme"],
                        ["Gıda üretim atölyesi", "Havalandırma, çatı", "Yılda 1-2 kez", "Mevsimsel tur"],
                    ],
                },
            },
            {
                baslik: "Küçük ilçede komşuluk ağının avantajı",
                paragraflar: [
                    "Tavşanlı gibi orta büyüklükteki bir ilçe merkezinde, işletme sahipleri genellikle birbirini tanır — aynı esnaf kahvesine gider, aynı tedarikçiyi kullanır, aynı ticaret odası toplantısına katılır. Bu tanışıklık, paylaşımlı kiralama modelini büyük şehirlerdeki anonim sanayi bölgelerine göre daha kolay kurulabilir hâle getirir; bir işletme sahibinin komşusuna 'benim de çatı kontrolüm lazımdı, birlikte yapalım mı' demesi, resmi bir kurum aracılığından çok daha hızlı sonuç verir.",
                    "Biz bu tanışıklığı bir avantaj olarak görürüz ve mümkün olduğunda işletme sahiplerini birbirine yönlendiririz — elbette ticari bilgi paylaşmadan, yalnızca 'aynı hafta benzer bir ihtiyacı olan başka bir işletme var, ister misiniz iletişime geçelim' düzeyinde bir aracılıkla.",
                ],
            },
            {
                baslik: "Acil ve planlı işin maliyet farkını anlamak",
                paragraflar: [
                    "Tavşanlı'daki küçük işletme sahiplerinin çoğu, planlı ile acil kiralama arasındaki maliyet farkının nereden geldiğini ilk seferde tam bilmez. Fark basittir: planlı işte nakliye maliyeti paylaşım veya tur programıyla bölünebilir, acil işte ise makine ve operatör o anki müsaitliğe göre tek başına o işe ayrılır ve nakliye tam olarak o işe yazılır. Bu farkı önceden bilmek, işletme sahibinin gerçekten acil olmayan bir ihtiyacı ('bu ay olsa da olur, gelecek ay olsa da') planlı tarafa kaydırmasını kolaylaştırır.",
                    "Pratik öneri, işletme sahibinin yıl içinde öngördüğü bakım ihtiyaçlarını (kesin tarih olmasa da) bize önceden bildirmesidir; bu bilgi, ihtiyacı planlı tarafa taşımak için yeterlidir ve maliyet avantajının kapısını açar.",
                ],
            },
        ],
        sss: [
            {
                soru: "İlçe merkezinde işletmemiz dağınık bölgede, komşu işletme bulmak zor değil mi?",
                cevap:
                    "Tavşanlı merkezi, büyük bir OSB kadar kompakt olmasa da, aynı cadde veya aynı sanayi sitesi içindeki işletmeler arasında hâlâ pratik bir yakınlık vardır; işletmenizin tam konumunu bildiğinizde, aynı bölgedeki benzer ihtiyaç sahibi işletmeleri sizinle eşleştirmeye çalışırız. Eşleşme her zaman garanti edilmez ama küçük bir ilçede işletme sahiplerinin birbirini tanıması, bu süreci büyük şehirlere göre kolaylaştırır. Erken bildirim, eşleşme ihtimalini her zaman artırır.",
            },
            {
                soru: "Fırtınada tabelamız hasar gördü, hemen makine gönderebiliyor musunuz?",
                cevap:
                    "Acil ve tek seferlik işlerde mümkün olan en kısa sürede makine planlanır; bu tip işlerde paylaşım fırsatı genellikle olmadığı için maliyet standart tarifeye göre biraz daha yüksek kalabilir, çünkü nakliye tam olarak o işe yazılır. Bu farkı size teklif aşamasında açıkça belirtiriz; acil durumlarda önceliğimiz hızlı çözümdür, sürpriz maliyetle karşılaşmamanız için fiyat işe başlamadan netleştirilir.",
            },
            {
                soru: "Depomuzun çatısını her yıl kontrol ettirmek istiyoruz, bunu nasıl düzenli hâle getiririz?",
                cevap:
                    "Yıllık mevsimsel kontrolü (örneğin her yıl kış öncesi aynı hafta) önceden bize bildirirseniz, bu tarihi takvime not eder ve o dönemde bölgenizdeki başka işletmelerin de benzer talebi varsa sizi bir tur programına dahil ederiz. Düzenli bir tarih belirlemek, hem sizin unutmanızı önler hem bizim o dönemde bölgeye makine planlamamızı kolaylaştırır; bu, resmi bir sözleşme gerektirmez, yalnızca yıllık bir hatırlatma ve tercih kaydıdır.",
            },
            {
                soru: "Mobilya atölyemizde tavan alçak, iç mekân aydınlatması için hangi makine uygun?",
                cevap:
                    "Alçak tavanlı atölyelerde kompakt akülü makaslı sınıf genellikle en uygun seçimdir; egzozsuz çalışması kapalı mekânda güvenlik açısından da avantajdır. Kesin uygunluk, atölyenizin tavan yüksekliği ve kapı genişliği bilgisiyle netleşir; bu ölçüleri paylaştığınızda size uygun makine sınıfını ve tahmini süreyi bildiririz.",
            },
            {
                soru: "Komşu işletmeyle birlikte kiralama yaparsak fatura nasıl bölünüyor?",
                cevap:
                    "Her işletme kendi kullandığı süre için ayrı fatura alır; ortak olan yalnızca nakliye maliyetidir ve bu, katılan işletme sayısına göre bölünür. Örneğin iki işletme aynı makineyi aynı gün art arda kullanırsa, nakliye bedeli ikiye bölünür ve her işletme kendi kullanım süresinin normal tarifesini öder. Bu paylaşım, işe başlamadan önce her iki tarafa da yazılı olarak bildirilir; belirsizlik kalmaz.",
            },
            {
                soru: "Büyük sanayi tesisleriyle aynı firmadan mı hizmet alıyoruz, yoksa ayrı bir küçük işletme birimi mi var?",
                cevap:
                    "Aynı firma ve aynı makine filosundan hizmet alırsınız; ayrı bir 'küçük işletme birimi' yoktur. Fark, size sunulan kiralama modelinde ve fiyatlandırma mantığındadır — büyük tesislere sunulan uzun süreli sözleşme yerine, kısa süreli, paylaşımlı ve iş bazlı faturalama modeli küçük işletmenin bütçesine göre uygulanır. Makine kalitesi veya operatör yeterliliğinde bir fark yoktur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Tavşanlı ilçe merkezinin küçük ve orta ölçekli esnaf/işletme dokusuna sahip olduğu kamuya açık genel bilgidir; paylaşımlı kiralama, mevsimsel tur ve komşuluk koordinasyonu modeli firma pratiğidir.",
    },

    "bolge:gediz": {
        h1: "Gediz'de Küçük İşletmeler İçin Uzak Bölge Bütçe Kiralama Çözümü",
        giris:
            "Gediz, Kütahya merkezine göre daha uzak bir ilçe olduğu için, buradaki küçük işletmelerin kiralama maliyetinde nakliye mesafesi daha büyük bir pay tutar; bu durum, zaten sınırlı bütçesi olan küçük bir işletme için ekstra bir dezavantaj gibi görünebilir. Ancak mesafenin getirdiği bu dezavantajı azaltmanın yolları vardır — ilçedeki birden fazla küçük işletmenin ihtiyacını aynı seferde birleştirmek, mesafenin sabit maliyetini paylaşılan bir kaleme dönüştürür. Gediz'deki küçük atölyeler, un değirmenleri, tarım ürünleri işleme tesisleri ve küçük depo işletmeleri, birbirinden habersiz ayrı ayrı talep ettiğinde her biri mesafenin tam bedelini öder; aynı hafta içinde bir araya geldiklerinde ise bu bedel bölüşülür. Bu sayfa, Gediz'in merkeze uzaklığını dezavantaj olmaktan çıkarıp, ilçe içi koordinasyonla nasıl yönetilebilir bir kaleme dönüştürüldüğünü anlatır.",
        maddeler: [
            {
                baslik: "Mesafenin maliyete somut etkisi",
                metin:
                    "Gediz'e yapılan bir sefer, Kütahya merkezine göre daha uzun sürer ve bu süre doğrudan nakliye maliyetine yansır; tek bir küçük işletmenin kısa süreli ihtiyacı için bu maliyet, işin kendisinden bile büyük olabilir. Bu gerçeği gizlemek yerine baştan açıkça söyleriz: Gediz'deki tek başına bir yarım günlük iş, merkeze göre daha pahalıya gelir. Çözüm maliyeti yok saymak değil, aynı seferde birden fazla işi birleştirerek mesafenin payını küçültmektir.",
            },
            {
                baslik: "İlçe içi işletmeleri bir araya getirme",
                metin:
                    "Gediz merkezindeki ve çevresindeki küçük işletmelerin ihtiyacını önceden toplamak, mesafe dezavantajını azaltmanın en etkili yoludur. Bu toplama süreci genellikle birkaç hafta önceden başlar — ilgilenen işletmelerden gelen talepler bir listeye eklenir, yeterli sayıya (örneğin üç-dört işletme) ulaşıldığında tek bir sefer planlanır ve makine ilçede birkaç gün kalarak sırayla her işletmeye uğrar.",
            },
            {
                baslik: "Tarım ve gıda işleme tesislerinde mevsimsel yoğunluk",
                metin:
                    "Gediz'in tarım ürünleri işleme ve depolama faaliyeti, hasat dönemine göre mevsimsel bir yoğunluk gösterir; bu dönemlerde depo ve işleme tesislerinin bakım ihtiyacı da (havalandırma, çatı, aydınlatma) artar. Hasat öncesi dönemde planlanan bir bakım turu, hem işletmelerin yoğun sezon öncesinde ekipmanlarını hazır hâle getirmesini sağlar hem de aynı dönemde birden fazla tesisin ihtiyacını birleştirerek nakliye maliyetini paylaştırır.",
            },
            {
                baslik: "Küçük değirmen ve atölyelerde kısa süreli iç mekân işleri",
                metin:
                    "Gediz'deki küçük un değirmenleri ve atölyelerin iç mekân erişim ihtiyacı genellikle kısa sürelidir — bir aydınlatma değişimi, bir havalandırma kanalı temizliği. Bu kısa işler, ilçe içi birleştirme programına dahil edilmediği takdirde mesafe maliyeti nedeniyle orantısız pahalı kalabilir; bu yüzden bu tip küçük işletmelere, ihtiyaçlarını mümkün olduğunca erken bildirmeleri ve mümkünse komşu işletmelerle aynı döneme denk getirmeleri özellikle önerilir.",
            },
            {
                baslik: "Acil durumda mesafenin kabul edilmesi gereken maliyeti",
                metin:
                    "Bazı durumlarda (ani arıza, hasar) beklemek mümkün olmaz ve tek başına bir sefer gerekir; bu durumda mesafe maliyeti kabul edilmesi gereken bir gerçektir ve önceden açıkça belirtilir. Acil işlerde bile, eğer aynı gün içinde Gediz çevresinde başka bir talep varsa (örneğin bizim zaten planlı bir turumuz o hafta o bölgedeyse) acil işi bu tura eklemeye çalışırız; bu her zaman mümkün olmasa da denenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gediz'de tek iş ile birleştirilmiş iş maliyet karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, Gediz'deki bir işin tek başına mı yoksa birleştirilmiş bir turda mı planlandığına göre maliyet mantığındaki farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Nakliye payı", "Planlama süresi", "Uygunluk"],
                    satirlar: [
                        ["Tek işletme, acil iş", "Tam mesafe bedeli", "Aynı gün/birkaç gün", "Kaçınılmaz durumlar"],
                        ["Tek işletme, planlı iş", "Tam mesafe bedeli", "1-2 hafta önceden", "Alternatif yoksa"],
                        ["2-3 işletme, aynı hafta", "Mesafe bedeli bölüşülür", "2-3 hafta önceden", "Orta vadeli ihtiyaç"],
                        ["Mevsimsel tur (hasat öncesi)", "En düşük birim maliyet", "1 ay önceden", "Tarım/gıda tesisleri"],
                    ],
                },
            },
            {
                baslik: "İlçe içi talep toplama süreci nasıl işler",
                paragraflar: [
                    "Gediz'de birleştirilmiş bir sefer planlamak istediğimizde, önce ilgilenen işletmelerden gelen talepleri bir listeye toplarız; bu liste genellikle bizimle daha önce iletişime geçmiş işletmelerden ve varsa ilçe esnaf odası veya ziraat odası aracılığıyla ulaştığımız yeni işletmelerden oluşur. Liste belirli bir eşiğe (genellikle üç-dört işletme) ulaştığında, en verimli güzergâhı ve sırayı belirleyip bir tarih öneririz; her işletme kendi katılımını onayladığında sefer kesinleşir.",
                    "Bu süreç, tek bir işletmenin beklentisiyle değil, ilçedeki toplam talebin olgunlaşma hızıyla ilerler; bu yüzden Gediz'deki işletmelere, ihtiyaçlarını mümkün olduğunca erken bildirmelerini öneririz — erken bildirim, listenin daha hızlı dolmasına ve sizin beklemenizin kısalmasına yardımcı olur.",
                ],
            },
            {
                baslik: "Mesafeyi dezavantaj olmaktan çıkaran uzun vadeli yaklaşım",
                paragraflar: [
                    "Gediz gibi merkeze uzak bir ilçede tek seferlik düşünmek, mesafe maliyetini her seferinde tam olarak ödemek anlamına gelir; oysa işletmenin yıllık bakım ihtiyacını önceden bize bildirmesi ve bizim de bu bilgiyi bölgedeki diğer taleplerle eşleştirmemiz, zaman içinde mesafe maliyetini önemli ölçüde azaltır. Bu yaklaşım bir kerelik bir çözüm değil, sürekli bir alışkanlıktır — Gediz'deki işletmelerle kurduğumuz ilişki ne kadar uzun sürerse, birleştirme fırsatlarını yakalama oranımız o kadar yükselir.",
                    "Bu nedenle Gediz'deki işletmelere, tek seferlik bir talep yerine, yıl başında kabaca bir bakım takvimi paylaşmalarını öneririz; bu takvim kesin tarihler içermese de, bizim bölgesel planlama yapmamız için yeterli bir çerçeve sunar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gediz'e gelen makinenin nakliye maliyeti neden merkeze göre bu kadar fazla?",
                cevap:
                    "Nakliye maliyeti büyük ölçüde mesafe ve süreyle orantılıdır; Gediz, Kütahya merkezine göre daha uzak olduğu için tek başına yapılan bir sefer, merkezdeki bir işe göre daha yüksek maliyetli olur. Bu farkı gizlemeyiz, teklif aşamasında açıkça gösteririz. Maliyeti düşürmenin yolu, ihtiyacınızı erken bildirip aynı bölgedeki başka bir talep ile birleştirilmiş bir sefere dahil olmaktır; bu birleşme gerçekleştiğinde mesafe maliyeti paylaşılır.",
            },
            {
                soru: "Hasat döneminde depomuzun bakımını yaptırmak istiyoruz, ne zaman talep etmeliyiz?",
                cevap:
                    "Hasat öncesi mevsimsel bakım turu genellikle bir ay kadar önceden planlanır çünkü bu dönemde bölgedeki birden fazla tarım/gıda tesisinin benzer ihtiyacı olur ve bunları tek bir turda birleştirmek zaman alır. Talebinizi ne kadar erken iletirseniz, turun kapsamına dahil olma ve mesafe maliyetini paylaşma ihtimaliniz o kadar artar. Son dakika gelen talepler, tur programı zaten kesinleşmişse tek başına planlanmak zorunda kalabilir.",
            },
            {
                soru: "İlçede bizden başka ilgilenen işletme yoksa ne oluyor, iş yapılamaz mı?",
                cevap:
                    "Yapılır — birleştirme fırsatı olmasa dahi işiniz tek başına planlanır, yalnızca maliyet mesafenin tam bedelini içerir. Birleştirme, maliyeti düşürmek için bir fırsattır, işin yapılabilmesinin ön koşulu değildir. Talebinizi erken bildirmeniz, hem tek başına planlansa bile size uygun bir tarih bulmamızı kolaylaştırır hem de zaman içinde başka bir işletmenin talebiyle eşleşme ihtimalini açık tutar.",
            },
            {
                soru: "Acil bir arızamız var ama Gediz'de o hafta planlı bir tur yok, ne kadar sürede gelirsiniz?",
                cevap:
                    "Acil işlerde öncelik hızlı çözümdür; planlı bir tur olmasa dahi makine ve operatör müsaitliğine göre mümkün olan en kısa sürede sefer düzenlenir. Bu durumda maliyet tam mesafe bedelini içerir, bunu size işe başlamadan önce açık şekilde bildiririz. Acil işin tam süresi, arızanın türüne ve o anki müsaitliğe göre değişir; kesin süreyi talep anında netleştiririz.",
            },
            {
                soru: "Yıl başında bakım takvimimizi paylaşırsak bize bir taahhüt mü yükler?",
                cevap:
                    "Hayır, paylaştığınız takvim bir taahhüt değil, bizim bölgesel planlama yapmamıza yardımcı olan bir tahmindir. Tarihler değişebilir, ihtiyaç iptal olabilir; bunun için herhangi bir yükümlülük veya ceza yoktur. Bu paylaşımın tek amacı, sizin ihtiyacınızı diğer Gediz'deki işletmelerin ihtiyacıyla zaman içinde eşleştirebilmemizdir; ne kadar erken ve ne kadar gerçekçi bir tahmin paylaşırsanız, eşleşme ihtimali o kadar artar.",
            },
            {
                soru: "Birleştirilmiş turda bizim işimiz en son sıraya denk gelirse bekleme süremiz uzar mı?",
                cevap:
                    "Evet, tur programında sıralama güzergâh verimliliğine göre belirlendiği için bazı işletmeler ilk gün, bazıları son gün hizmet alır; ama tur genellikle birkaç gün içinde tamamlandığı için toplam bekleme süresi sınırlı kalır. Sıralamayı belirlerken mümkün olduğunca aciliyet durumunu da göz önünde bulundururuz — gerçekten acil bir iş varsa, turun başına alınması için esneklik gösterebiliriz. Bu tercihi talep sırasında bize belirtmeniz yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Gediz'in Kütahya merkezine göre daha uzak bir ilçe olduğu ve bölgenin tarım/gıda işleme faaliyetiyle bilindiği kamuya açık coğrafi bilgidir; ilçe içi talep birleştirme ve mevsimsel tur modeli firma pratiğidir.",
    },

    "bolge:afyon-cevre-ili": {
        h1: "Afyon ve Çevresine Kütahya'dan KOBİ Bütçeli Kiralama Desteği",
        giris:
            "Kütahya'daki filomuzun komşu ile Afyon'daki küçük ve orta ölçekli işletmelere de hizmet götürmesi, iki ilin birbirine olan yakınlığından doğan doğal bir sonuçtur; ama bu hizmeti büyük Afyon sanayi tesislerine sunduğumuz standart modelle değil, Kütahya'daki küçük işletmelere uyguladığımız aynı bütçe dostu mantıkla kurguluyoruz. Afyon çevresindeki küçük atölyeler, un değirmenleri, mermer kesim atölyeleri ve küçük gıda işletmeleri de tıpkı Kütahya'daki benzerleri gibi düzensiz ve genellikle kısa süreli bir yüksekte çalışma ihtiyacına sahiptir; bu ihtiyaç için standart il dışı kiralama tarifesi çoğu zaman orantısız kalır. Bu sayfa, çevre il olarak Afyon'a yönelik hizmetimizde de aynı paylaşımlı ve dönemsel toplu bakım mantığının nasıl uygulandığını, iki il arasındaki mesafenin bu modelle nasıl yönetildiğini anlatır.",
        maddeler: [
            {
                baslik: "İki il arası mesafenin çevre il hizmetine etkisi",
                metin:
                    "Kütahya'dan Afyon'a yapılan bir sefer, il içi bir seferden daha uzun sürer ve bu, tek başına küçük bir işin maliyetini yükseltir. Ancak Afyon çevresindeki işletmelerin talebini birleştirdiğimizde bu maliyet, Gediz gibi Kütahya'nın uzak ilçelerine yaptığımız birleştirilmiş seferlerle aynı mantıkla paylaşılır — fark, sınırın il sınırı olmasıdır, yoksa yaklaşım aynıdır.",
            },
            {
                baslik: "Afyon'daki küçük işletmelerle talep toplama",
                metin:
                    "Afyon çevresindeki küçük işletmelerle ilişkimiz, Kütahya'dakinden farklı olarak daha yeni kurulan bir ilişkidir; bu yüzden talep toplama süreci biraz daha uzun sürebilir. İlgilenen işletmelerden gelen talepler bir listeye eklenir, yeterli sayıya ulaşıldığında bir sefer planlanır. İlk birkaç seferde liste dolması zaman alsa da, düzenli hizmet aldıkça bu süreç hızlanır çünkü işletmeler birbirine referans olur.",
            },
            {
                baslik: "Mermer kesim atölyelerinde iç mekân erişim ihtiyacı",
                metin:
                    "Afyon çevresinin mermer sanayisiyle bilinen kimliği, buradaki küçük kesim ve işleme atölyelerinin de belirli bir yüksekte çalışma ihtiyacı doğurmasına neden olur — tavan vinci bakımı, aydınlatma değişimi, toz filtresi çevresi kontrolü. Bu atölyelerin çoğu küçük ölçekli olduğu için, ihtiyaç genellikle kısa süreli ve kompakt makine sınıfıyla karşılanabilir düzeydedir; büyük mermer fabrikalarının kapsamlı bakım programından farklı bir ölçektir.",
            },
            {
                baslik: "Sınır bölgesindeki işletmeler için ortak planlama",
                metin:
                    "Kütahya-Afyon sınırına yakın bölgelerdeki işletmeler (örneğin her iki il sınırına da yakın küçük sanayi siteleri), coğrafi olarak hangi ile daha yakınsa o ilden hizmet almayı tercih edebilir, ama bazen iki ilden gelen taleplerin birleştirilmesi de mümkündür. Bu tip sınır bölgesi işletmeleriyle çalışırken, hangi ilden hangi güzergâhla hizmet verileceği, en kısa ve en ekonomik seçeneğe göre belirlenir.",
            },
            {
                baslik: "Çevre il hizmetinde dönemsel tur önceliği",
                metin:
                    "Afyon çevresine yönelik hizmetimiz henüz Kütahya içindeki kadar sık ve düzenli değildir; bu yüzden dönemsel toplu bakım turu modelini burada özellikle öneriyoruz çünkü tek seferlik taleplerin mesafe maliyeti Kütahya içine göre daha belirgindir. İlgilenen işletmelerin yıl başında kabaca bir ihtiyaç bildirmesi, bizim Afyon çevresine yönelik tur sıklığını artırmamıza doğrudan yardımcı olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya içi ve Afyon çevre il hizmeti karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, Kütahya il içi hizmetle Afyon çevre il hizmeti arasındaki pratik farkları özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Kütahya il içi", "Afyon çevre il"],
                    satirlar: [
                        ["Sefer sıklığı", "Düzenli, sık", "Talep birikimine bağlı"],
                        ["Talep birleştirme hızı", "Hızlı (kurulu ilişki)", "Daha yavaş (yeni ilişki)"],
                        ["Mesafe maliyeti (tek iş)", "Görece düşük", "Görece yüksek"],
                        ["Önerilen model", "Her model uygulanabilir", "Dönemsel tur öncelikli"],
                    ],
                },
            },
            {
                baslik: "Afyon'da yeni işletmelerle ilişki kurma süreci",
                paragraflar: [
                    "Afyon çevresinde ilk kez hizmet verdiğimiz bir işletmeyle ilişki, genellikle tek bir iş üzerinden başlar; bu ilk işte mesafe maliyeti tam olarak yansır çünkü henüz birleştirilecek başka bir talep yoktur. Ancak bu ilk deneyim olumlu geçtiğinde, işletme sahibi çoğu zaman komşu işletmelere de bizi önerir ve zamanla bölgede bir talep havuzu oluşur; bu havuz oluştuğunda birleştirilmiş sefer ve dönemsel tur modeli devreye girebilir.",
                    "Bu nedenle Afyon çevresindeki ilk müşterilerimize, ilk işin maliyetinin sonraki işlere göre nispeten daha yüksek olabileceğini ama düzenli hizmet ilişkisi kuruldukça bu farkın kapanacağını açıkça anlatırız; şeffaflık, uzun vadeli bir ilişkinin temelidir.",
                ],
            },
            {
                baslik: "Sınır bölgesi işletmeleri için pratik öneri",
                paragraflar: [
                    "İki il sınırına yakın bir işletmeyseniz, hangi ilden hizmet aldığınız kadar, hangi ildeki talep havuzuna dahil olduğunuz da önemlidir; bir bölgede daha sık sefer yapılıyorsa, o bölgenin talep listesine kayıtlı olmak sizin için avantajlıdır. Bu tercihi netleştirmek için bize konumunuzu ve ihtiyacınızı bildirmeniz yeterlidir; size hangi güzergâhın ve hangi talep havuzunun daha uygun olduğunu birlikte değerlendiririz.",
                    "Bu değerlendirme, tek seferlik bir karar değildir — bölgesel talep yoğunluğu zamanla değişebileceği için, sizin için en avantajlı seçenek de zaman içinde güncellenebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kütahya'dan Afyon'a gelen makinenin fiyatı, Kütahya içindekinden ne kadar farklı?",
                cevap:
                    "Fark, esas olarak ek mesafeden kaynaklanan nakliye maliyetine bağlıdır ve tek başına planlanan bir işte bu fark belirgin biçimde hissedilir. Ancak Afyon çevresindeki başka bir işletmenin talebiyle birleştirilmiş bir seferde bu fark önemli ölçüde azalır. Kesin fiyat farkını görmek için, iş tanımınızı paylaştığınızda hem tek başına hem (varsa) birleştirilmiş seçenek için ayrı ayrı teklif sunarız; hangisinin size uygun olduğuna siz karar verirsiniz.",
            },
            {
                soru: "Afyon'da ilk kez sizden hizmet alacağız, süreç Kütahya'dakinden farklı mı işliyor?",
                cevap:
                    "Teknik süreç (keşif, makine seçimi, saha güvenliği) aynıdır; fark, henüz bölgede birleştirilecek başka bir talebin olmayabilmesidir. İlk işiniz bu yüzden tek başına planlanabilir ve mesafe maliyetini tam olarak taşıyabilir. Zamanla bölgede başka işletmelerle de çalıştıkça, sizin de dahil olabileceğiniz bir talep havuzu oluşur ve sonraki işleriniz bu havuzdan faydalanabilir.",
            },
            {
                soru: "Mermer atölyemizde tavan vinci bakımı için erişim gerekiyor, bu iş için hangi makine uygun?",
                cevap:
                    "Çoğu küçük-orta ölçekli mermer atölyesinde kompakt eklemli veya makaslı sınıf, tavan vinci rayına ve çevresindeki ekipmana erişim için yeterlidir; kesin seçim tavan yüksekliği, atölye içi geçit genişliği ve toz-parça birikimi gibi ortam koşullarına bağlıdır. Mermer tozu, makinenin hareketli aksamı için aşındırıcı olabileceği için, iş sonrası temizlik kiralama sürecine dahil edilir.",
            },
            {
                soru: "Sınırda bir sanayi sitesindeyiz, hem Kütahya hem Afyon'dan hizmet alabilir miyiz?",
                cevap:
                    "İkisi de teknik olarak mümkündür ama pratikte hangi bölgenin talep havuzu size daha yakınsa (sefer sıklığı ve mesafe açısından) o taraftan hizmet almanız daha ekonomik olur. Konumunuzu ve ihtiyacınızı bildirdiğinizde, hangi güzergâhın sizin için daha uygun olduğunu birlikte değerlendiririz; bu tercih zamanla bölgesel talep yoğunluğuna göre değişebilir.",
            },
            {
                soru: "Afyon çevresinde dönemsel tur ne sıklıkla yapılıyor?",
                cevap:
                    "Sıklık, bölgedeki talep birikimine bağlıdır ve henüz Kütahya içindeki kadar düzenli değildir; bu yüzden ilgilenen işletmelerin yıl başında kabaca bir ihtiyaç bildirmesi, bizim tur sıklığını artırmamıza doğrudan katkı sağlar. Talep arttıkça, Afyon çevresi için de Kütahya'daki ilçelerde uyguladığımıza benzer düzenli bir mevsimsel tur takvimi kurmayı hedefliyoruz.",
            },
            {
                soru: "Küçük işletmemiz için çevre il maliyeti hâlâ yüksek geliyorsa başka seçenek var mı?",
                cevap:
                    "Varsa, en pratik seçenek ihtiyacınızı erkenden bildirip bölgedeki başka bir talebin oluşmasını beklemektir; birleştirme fırsatı çıktığında maliyet önemli ölçüde düşer. Gerçekten acil bir ihtiyaç değilse, birkaç hafta beklemek genellikle daha ekonomik bir sonuç verir. Acil bir durumsa, tam mesafe maliyetiyle tek başına planlama tek gerçekçi seçenektir; bu maliyeti işe başlamadan önce açıkça sizinle paylaşırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Afyon'un Kütahya'ya komşu bir il olduğu ve bölgenin mermer sanayisiyle bilindiği kamuya açık coğrafi bilgidir; çevre il talep birleştirme ve dönemsel tur modeli firma pratiğidir.",
    },
};
