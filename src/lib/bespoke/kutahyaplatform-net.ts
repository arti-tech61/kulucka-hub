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

    "bolge:gediz-osb": {
        h1: "Gediz OSB'de Küçük Üretim Tesisleri İçin Bütçeli Kiralama Modeli",
        giris:
            "Gediz OSB, ilçe merkezine göre daha küçük ölçekli ama kendi içinde yine de bir parsel düzeni ve ortak altyapı barındıran bir organize sanayi bölgesidir; buradaki üretim tesislerinin çoğu, ilçenin kendi ölçeğine uygun şekilde küçük-orta boyuttadır. Kardeş sayfamız 'bolge:gediz' ilçenin merkeze uzaklığından doğan genel mesafe maliyetini anlatırken, bu sayfa doğrudan OSB içindeki üretim tesislerinin kendine özgü durumuna odaklanır: OSB'nin kompakt parsel yapısı, mesafe dezavantajını bir miktar azaltsa da, OSB'nin kendisi merkeze uzak olduğu için birleştirme ihtiyacı burada da geçerliliğini korur — üstelik OSB içindeki tesis sayısı, ilçe merkezindeki dağınık işletmelere göre daha azdır, bu da birleştirme fırsatını bulmayı bazen daha zor kılar.",
        maddeler: [
            {
                baslik: "OSB'nin küçük ölçeğinin birleştirmeye etkisi",
                metin:
                    "Gediz OSB'deki parsel sayısı, büyük şehirlerin OSB'lerine göre sınırlıdır; bu, aynı hafta içinde birden fazla tesisin benzer bir platform ihtiyacı doğurma ihtimalini de sınırlar. Büyük bir OSB'de haftalık birkaç talep bir araya gelebilirken, Gediz OSB'de bu birleşme daha uzun bir bekleme süresi (örneğin iki-üç hafta) gerektirebilir; bu gerçeği baştan açıkça söyleriz, boş bir beklenti yaratmayız.",
            },
            {
                baslik: "OSB içi parsel yakınlığının yine de sağladığı avantaj",
                metin:
                    "OSB'nin küçük ölçeği birleştirme fırsatını sınırlasa da, parseller arası kısa mesafe kendi başına bir avantaj kalır: bir kez birleştirilmiş bir sefer kurulduğunda, OSB içindeki iki-üç tesis arasında makinenin kendi gücüyle geçmesi neredeyse maliyetsizdir. Bu yüzden Gediz OSB'deki tesislere, ihtiyaçlarını ne kadar erken bildirirlerse birleştirme ihtimalinin o kadar arttığını özellikle vurgularız.",
            },
            {
                baslik: "Küçük üretim tesisinde tipik erişim ihtiyacı",
                metin:
                    "OSB'deki küçük üretim tesislerinin platform ihtiyacı genellikle iç mekân aydınlatması, havalandırma kanalı bakımı ve düşük-orta yükseklikteki raf sistemi kurulumunda yoğunlaşır; bu tesislerin tavan yüksekliği büyük fabrika holüne göre daha alçak olduğu için kompakt akülü makaslı sınıf çoğu işte yeterli olur. Bu sınıfın günlük kiralama bedeli de büyük dizel sınıfa göre düşüktür, bu da küçük tesis bütçesine ayrıca uyar.",
            },
            {
                baslik: "OSB yönetimi ile erken bildirim düzeni kurma",
                metin:
                    "Gediz OSB'nin kendi yönetim yapısı, üye tesisler arasında ortak duyuru yapılmasına imkân tanır; bu kanalı kullanarak platform ihtiyacını toplu duyurmak, sınırlı sayıdaki tesis arasında birleştirme fırsatını yakalama şansını artırır. OSB yönetimiyle bu tür bir düzen henüz kurulmadıysa, biz bu bağlantıyı kurmak isteyen tesislere destek oluruz.",
            },
            {
                baslik: "Acil ihtiyaçta OSB'nin küçük ölçeğinin dezavantajı",
                metin:
                    "Sınırlı sayıda tesis barındıran bir OSB'de acil bir ihtiyaç doğduğunda, aynı gün içinde birleştirilebilecek başka bir talebin bulunma ihtimali büyük bir OSB'ye göre daha düşüktür; bu durumda iş genellikle tek başına planlanır ve mesafe maliyeti tam olarak yansır. Bu maliyeti teklif aşamasında açıkça gösteririz, sürpriz bir fatura çıkarmayız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gediz OSB'de senaryoya göre maliyet karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, Gediz OSB'deki bir işin planlama süresine göre maliyet mantığındaki farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Nakliye payı", "Beklenen bekleme", "Uygunluk"],
                    satirlar: [
                        ["Tek tesis, acil iş", "Tam mesafe bedeli", "Yok, en hızlı planlama", "Kaçınılmaz durumlar"],
                        ["Tek tesis, planlı iş", "Tam mesafe bedeli", "1-2 hafta", "Alternatif bulunamazsa"],
                        ["2 tesis, aynı hafta", "Mesafe bedeli bölüşülür", "2-3 hafta", "Orta vadeli ihtiyaç"],
                        ["OSB geneli dönemsel tur", "En düşük birim maliyet", "3-4 hafta", "Yıllık bakım kalemi"],
                    ],
                },
            },
            {
                baslik: "Sınırlı tesis sayısıyla birleştirme kurmanın yolu",
                paragraflar: [
                    "Gediz OSB'de büyük bir OSB'deki gibi haftalık yoğun bir talep havuzu oluşmadığı için, birleştirme fırsatını yakalamanın en pratik yolu tesislerin yıllık bakım ihtiyacını önceden bize bildirmesidir; kesin tarih olmasa bile 'bu yıl içinde çatı kontrolü yaptıracağız' bilgisi, bizim OSB'deki diğer taleplerle eşleştirme yapmamız için yeterlidir.",
                    "Bu erken bildirim alışkanlığı yerleştikçe, Gediz OSB için de zamanla daha düzenli bir dönemsel tur takvimi kurmayı hedefliyoruz; şu an bu düzen, Kütahya merkezdeki kadar sık değildir ama talep arttıkça sıklaşabilir.",
                ],
            },
            {
                baslik: "Küçük tesisin bütçe kararında dikkat etmesi gerekenler",
                paragraflar: [
                    "Gediz OSB'deki bir tesis sahibi, bakım kararını genellikle ihtiyaç ortaya çıktığında alır; oysa OSB'nin sınırlı tesis sayısı düşünüldüğünde, erken planlama burada büyük OSB'lere göre daha da belirleyicidir — çünkü birleştirme fırsatı zaten seyrek doğar ve bu fırsatı kaçırmamak için erken bildirim şarttır.",
                    "İkinci öneri, iş kapsamını net tanımlamaktır; belirsiz bir talep hem doğru makine sınıfını seçmeyi zorlaştırır hem de sahada ek süre kaybına yol açar. Kısa bir keşif görüşmesi bu belirsizliği en ucuz şekilde giderir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gediz OSB'de tek tesisiz, komşu bulma ihtimalimiz düşük mü?",
                cevap:
                    "Gediz OSB'nin tesis sayısı büyük şehirlerin OSB'lerine göre sınırlı olduğu için, aynı hafta içinde birleştirilebilecek başka bir talep bulma ihtimali de sınırlıdır; bunu size dürüstçe söylüyoruz. Yine de ihtiyacınızı ne kadar erken bildirirseniz (örneğin birkaç hafta önceden), o kadar geniş bir zaman penceresinde eşleşme arayabiliriz. Erken bildirim, tek başına planlamaya göre her zaman daha avantajlıdır.",
            },
            {
                soru: "OSB içindeki komşu tesisle makine paylaşırsak fatura nasıl bölünüyor?",
                cevap:
                    "Her tesis kendi kullandığı süre için ayrı fatura alır; ortak olan yalnızca nakliye maliyetidir ve katılan tesis sayısına göre bölünür. Bu paylaşım işe başlamadan önce her iki tarafa da yazılı olarak bildirilir, belirsizlik kalmaz.",
            },
            {
                soru: "Küçük üretim tesisimizin tavanı alçak, hangi makine sığar?",
                cevap:
                    "Çoğu küçük OSB tesisinde kompakt akülü makaslı sınıf rahatlıkla çalışır; düşük tavan yüksekliği ve dar geçitler için tasarlanmıştır, egzoz gazı çıkarmadığı için kapalı alanda da uygundur. Kesin uygunluk, tavan yüksekliği ve geçit genişliğinin keşifte ölçülmesiyle netleşir.",
            },
            {
                soru: "OSB yönetimi henüz toplu duyuru yapmıyor, biz nasıl başlatabiliriz?",
                cevap:
                    "OSB yönetimine kısa bir dilekçeyle talebinizi iletebilirsiniz; bizimle de iletişime geçerseniz, teknik tarafı (program, makine sınıfı, maliyet paylaşımı mantığı) hazırlayıp yönetime birlikte sunabiliriz. Sınırlı tesis sayısı nedeniyle bu tür bir organizasyonun kurulması biraz zaman alabilir ama bir kez kurulduğunda kalıcı bir düzene dönüşür.",
            },
            {
                soru: "Acil bir ihtiyacımız var, OSB'de kimse yoksa maliyet nasıl olur?",
                cevap:
                    "Acil ve tek başına planlanan işlerde mesafe maliyeti tam olarak yansır çünkü nakliye tek işe yazılır; bu farkı teklif aşamasında açıkça gösteririz. Gerçekten acilse önceliğimiz hızlı çözümdür, sürpriz bir maliyetle karşılaşmamanız için fiyat işe başlamadan netleştirilir.",
            },
            {
                soru: "Gediz OSB için düzenli bir dönemsel tur var mı?",
                cevap:
                    "Şu an Kütahya merkezdeki kadar sık ve düzenli bir tur takvimimiz yok çünkü OSB'nin tesis sayısı bunu henüz gerektirmiyor; talep arttıkça bu takvimi sıklaştırmayı hedefliyoruz. Şimdilik en pratik yol, yıllık bakım ihtiyacınızı (kesin tarih olmasa da) bize önceden bildirmenizdir; bu bilgi, OSB'deki diğer taleplerle eşleştirme yapmamız için yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Gediz OSB'nin ilçe ölçeğine uygun küçük-orta boyutlu üretim tesisleri barındıran bir organize sanayi bölgesi olduğu kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Sınırlı tesis sayısına göre birleştirme ve erken bildirim modeli firma pratiğidir.",
    },

    "bolge:simav": {
        h1: "Simav'da Jeotermal-Sera İşletmeleri İçin Bütçeli Kiralama Modeli",
        giris:
            "Simav, Kütahya'nın diğer üç kardeş dosyasında jeotermal kaynakları, termal turizm işletmeleri ve ahşap-orman ürünleri sanayisiyle anlatılmıştır; bu dosya o sektörel tabloyu tekrar etmez, doğrudan jeotermal ısıtmalı sera işletmeleri ve bunlara komşu küçük termik-sanayi bağlantılı atölyelerin bütçe mantığına odaklanır. Simav'daki jeotermal kaynak yalnızca kaplıca ve enerji üretiminde değil, bölgedeki seraların ısıtılmasında da kullanılır; bu seraların çoğu aile işletmesi ölçeğindedir ve bir platform kiralama kararı, büyük bir termik santral işletmesinin verdiği kararla aynı bütçe mantığıyla ilerlemez. Bu sayfa, Simav'daki küçük jeotermal-sera işletmelerinin bakım ihtiyacını nasıl daha ekonomik hâle getirebileceğini anlatır.",
        maddeler: [
            {
                baslik: "Jeotermal ısıtmalı seraların bakım takvimi",
                metin:
                    "Jeotermal kaynakla ısıtılan seraların çatı ve boru hattı bakımı, ısıtma sisteminin en az kullanıldığı yaz aylarına planlandığında hem sera üretimini aksatmaz hem de aynı dönemde ihtiyacı olan başka bir sera işletmesiyle birleştirilme ihtimalini artırır; kış aylarında ise sera aktif ısıtıldığı için bakım işleri yalnızca zorunlu arızalarla sınırlı tutulur.",
            },
            {
                baslik: "Küçük sera işletmesinin bütçe kısıtı",
                metin:
                    "Aile işletmesi ölçeğindeki bir seranın yıllık bakım bütçesi, büyük bir jeotermal santral işletmesinin bakım bütçesiyle kıyaslanamayacak kadar küçüktür; bu yüzden tek başına bir kiralama, sera işletmesi için orantısız bir kalem hâline gelebilir. Çözüm, birden fazla küçük sera işletmesinin ihtiyacını aynı yaz döneminde birleştirmek ve nakliye maliyetini paylaşmaktır.",
            },
            {
                baslik: "Jeotermal-termik sanayi bağlantılı küçük atölyeler",
                metin:
                    "Simav çevresinde, jeotermal enerji ekipmanına küçük ölçekli bakım-yedek parça desteği veren birkaç atölye de bulunur; bu atölyelerin kendi bina bakımı (çatı, aydınlatma) standart bir sanayi holü profilindedir ama jeotermal sektörünün mevsimsel yoğunluğundan (özellikle kış öncesi hazırlık dönemi) dolaylı olarak etkilenir. Bu atölyelerin bakım işlerini, sektörün en yoğun olmadığı döneme planlamalarını öneririz.",
            },
            {
                baslik: "Sera ve atölye ihtiyacını birlikte değerlendirme",
                metin:
                    "Simav'daki bir sera işletmesi ile yakınındaki bir jeotermal yan sanayi atölyesinin bakım ihtiyacı aynı haftaya denk geldiğinde, biz bu iki farklı iş ailesini tek bir sefer içinde birleştirebiliriz; sera ve atölye farklı sektörlerde olsa da coğrafi yakınlık, nakliye paylaşımı için yeterlidir. Bu birleşim, iki işletmenin de mesafe maliyetini önemli ölçüde azaltır.",
            },
            {
                baslik: "Erken bildirimin küçük işletme bütçesine katkısı",
                metin:
                    "Simav gibi merkeze uzak bir ilçede küçük ölçekli bir işletmenin bakım ihtiyacını son ana bırakması, mesafe maliyetini tam olarak ödemesi anlamına gelir; oysa yaz dönemi bakım planını kışın başında bize bildirmek, bizim o dönemde bölgedeki diğer taleplerle eşleştirme yapmamız için yeterli süre tanır ve maliyet avantajının kapısını açar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Simav'da işletme ölçeğine göre kiralama senaryosu",
                paragraflar: [
                    "Aşağıdaki tablo, Simav'daki küçük ölçekli jeotermal-sera ve yan sanayi işletmelerinde kiralama senaryosuna göre maliyet mantığını özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "İşletme profili", "Nakliye payı", "Uygun dönem"],
                    satirlar: [
                        ["Tek sera, acil arıza", "Aile işletmesi", "Tam mesafe bedeli", "Kış, kaçınılmaz durumlar"],
                        ["2-3 sera, birlikte", "Aile işletmesi kümesi", "Paylaşılır", "Yaz, ısıtma dışı sezon"],
                        ["Sera + yan sanayi atölyesi", "Karma iş ailesi", "Paylaşılır", "Sektör dışı dönem"],
                        ["Tek atölye, planlı", "Küçük-orta atölye", "Tam mesafe bedeli", "Alternatif yoksa"],
                    ],
                },
            },
            {
                baslik: "Yaz dönemi sera bakım programı nasıl kurulur",
                paragraflar: [
                    "Simav çevresindeki sera işletmelerinden yaz dönemi bakım talebi topladığımızda, önce ilgilenen işletmeleri bir listeye ekler, yeterli sayıya ulaştığında (genellikle iki-üç işletme) en verimli güzergâhı belirleyip bir tarih öneririz. Bu süreç, kışın başında başladığında yaza kadar rahatça olgunlaşır; son ana bırakılan bir talep ise genellikle tek başına planlanmak zorunda kalır.",
                    "Sera işletmelerine, ısıtma sistemini kapattıkları anda bakım ihtiyaçlarını not almalarını ve yaz başında bize iletmelerini öneririz; bu basit alışkanlık, birleştirme fırsatını büyük ölçüde artırır.",
                ],
            },
            {
                baslik: "Küçük işletmenin karar sürecinde gerçekçi beklenti",
                paragraflar: [
                    "Simav'daki küçük bir sera veya atölye işletmesi, mesafe nedeniyle Kütahya merkezindeki bir işletmeyle aynı fiyatı beklememelidir; bunu baştan açıkça söyleriz. Ancak bu mesafe dezavantajını tamamen yok edemesek de, doğru zamanlama ve birleştirmeyle önemli ölçüde azaltabiliriz — bu, Simav'daki küçük işletmelere sunduğumuz gerçekçi ve dürüst bir çözüm yaklaşımıdır.",
                    "İşletme sahibinin bizden beklemesi gereken şey, mesafeyi yok sayan bir vaat değil, mesafeyi yönetilebilir kılan somut bir planlama önerisidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Seramızın ısıtma sistemi kapalıyken bakım yaptırmak istiyoruz, ne zaman bildirmeliyiz?",
                cevap:
                    "Isıtma sistemini kapattığınız anda (genellikle yaz başı) bize bildirmenizi öneririz; bu bize, aynı dönemde ihtiyacı olan başka sera işletmeleriyle sizi eşleştirmek için yeterli süre tanır. Ne kadar erken bildirirseniz, birleştirme fırsatını yakalama ihtimaliniz o kadar artar; son ana bırakılan bir talep genellikle tek başına planlanmak zorunda kalır ve mesafe maliyeti tam olarak yansır.",
            },
            {
                soru: "Küçük bir aile işletmesiyiz, büyük bir jeotermal santral işletmesiyle aynı fiyatı mı ödüyoruz?",
                cevap:
                    "Hayır, size sunduğumuz model farklıdır; büyük işletmelere uzun süreli sözleşme mantığı uygulanırken, küçük sera ve atölye işletmelerine kısa süreli, paylaşımlı ve iş bazlı faturalama sunulur. Makine kalitesi veya operatör yeterliliğinde bir fark yoktur, fark yalnızca fiyatlandırma mantığındadır.",
            },
            {
                soru: "Jeotermal yan sanayi atölyemizin bina bakımını ne zaman planlamalıyız?",
                cevap:
                    "Sektörün en yoğun olduğu kış öncesi hazırlık dönemini bilinçli olarak dışarıda bırakmanızı öneririz; bu dönemde hem sizin üretim yoğunluğunuz artar hem bizim bölgedeki kapasitemiz sektöre yönelir. Bunun dışındaki bir dönemde bildirdiğinizde, hem daha rahat bir tarih hem birleştirme fırsatı bulma ihtimaliniz yükselir.",
            },
            {
                soru: "Seramız ile komşu atölye farklı sektörlerde, yine de aynı seferde birleşebilir miyiz?",
                cevap:
                    "Birleşebilirsiniz; birleştirme kararımızda belirleyici olan sektör benzerliği değil coğrafi yakınlıktır. Sera ve jeotermal yan sanayi atölyesi farklı işler yapsa da, aynı bölgede olduğunuz için tek bir sefer içinde ikinize de hizmet verebiliriz; her işletme kendi kullandığı süre için ayrı fatura alır, yalnızca nakliye payı paylaşılır.",
            },
            {
                soru: "Acil bir arızamız var, kışın seraya makine gönderebiliyor musunuz?",
                cevap:
                    "Gönderebiliriz; kış aylarında acil bir arıza için tek başına bir sefer planlarız ve mesafe maliyeti bu durumda tam olarak yansır, bunu teklif aşamasında açıkça belirtiriz. Acil durumlarda önceliğimiz hızlı çözümdür; sürpriz bir maliyetle karşılaşmamanız için fiyat işe başlamadan netleştirilir.",
            },
            {
                soru: "Simav için düzenli bir yaz dönemi tur takvimi kurabilir misiniz?",
                cevap:
                    "Talep yeterince olgunlaştığında evet; şu an bu takvim, ilgilenen sera ve atölye işletmelerinden gelen bildirimlerin birikmesiyle her yıl yeniden şekilleniyor. Yıl başında (veya ısıtma sezonu kapanır kapanmaz) bize ihtiyacınızı bildirmeniz, bu takvimin sizin için de düzenli bir alışkanlığa dönüşmesini sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Simav'daki jeotermal kaynağın sera ısıtmasında da kullanıldığı ve bölgedeki seraların genellikle aile işletmesi ölçeğinde olduğu kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Sektörler arası birleştirme ve yaz dönemi tur programı firma pratiğidir.",
    },
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Toplu Konut Şantiyesinde Blok İçi Dar Geçitlerde Sepetli Örümcek Platform Kiralama",
        giris:
            "Kaba inşaatı tamamlanmış bir TOKİ veya toplu konut bloğunun içine girildiğinde, standart bir sanayi holünden çok farklı bir geometriyle karşılaşılır: merdiven boşluğu dar ve dönüşlüdür, kat yükseklikleri düşüktür, asansör kuyusu henüz kapalı değildir ve kalıp iskelesinin sökülmediği bölümlerde geçiş genişliği bir metrenin altına iner. Bu koşullarda büyük gövdeli bir makaslı veya eklemli platform bloğun içine giremez; giren tek makine sınıfı, katlanmış hâlde standart bir kapı boşluğundan geçebilen ve içeride ayaklarını açarak dengesini kuran sepetli örümcek platformdur. Kütahya'daki toplu konut şantiyelerinde bu ihtiyaç en çok üç noktada doğar: merdiven boşluğu tavanındaki sıva-boya bitişi, asansör kuyusu içindeki ray montaj kontrolü ve iç avlu cephesindeki mantolama detay işleri. Bu sayfa, örümcek platformun şantiye içindeki bu dar-geçit kullanımını anlatır; blokların dış cephesindeki geniş yüzey işleri ayrı bir hizmet sayfamızın konusudur çünkü orada farklı bir makine sınıfı daha verimli çalışır.",
        maddeler: [
            {
                baslik: "Merdiven boşluğu ve asansör kuyusunda çalışma mantığı",
                metin:
                    "Bir toplu konut bloğunun merdiven boşluğu, inşaat aşamasında henüz korkuluksuz ve bazen aydınlatmasız bir dikey boşluktur; buraya sabit iskele kurmak hem yavaş hem her kat geçişinde sökülüp yeniden kurulması gereken bir işlemdir. Örümcek platform, gövdesini kat düzlemine sabitleyip bomunu boşluğa uzatarak bu işi tek seferde ve kat kat ilerleyerek çözer. Asansör kuyusunda ise iş biraz farklıdır: kuyu dikey ve dardır, makine genellikle kuyunun dibinden değil, en üst kattan veya ara bir kattan bomunu aşağı doğru uzatarak çalışır; bu, kuyu içi ray montajının kontrolü ve son rötuş işleri için standart yöntemdir.",
            },
            {
                baslik: "Kalıp iskelesi sökülmemiş katlarda dar geçiş",
                metin:
                    "Kaba inşaatın hemen ardından gelen bitirme işlerinde, bazı katlarda kalıp iskelesi henüz tam sökülmemiş olabilir; bu durumda kat içindeki geçiş genişliği standart bir makaslı platformun şasisine göre daralmış olur. Örümcek platform katlanmış taşıma pozisyonunda bu daralmış geçitlerden manevra ederek geçebilir ve hedef noktada açılır; bu, iskele söküm takvimini beklemeden bitirme işlerinin başlamasını sağlar.",
            },
            {
                baslik: "Zemin yükü ve döşeme dayanımı",
                metin:
                    "Toplu konut inşaatında kat döşemeleri, nihai kullanım yüküne göre projelendirilmiştir ama inşaat aşamasında henüz kür süresini tamamlamamış beton veya şap üzerinde ağır bir makine hareket ettirmek risklidir. Örümcek platformun paletli ve göreli hafif gövdesi, bu erken aşama döşemelerinde makaslı platforma göre daha güvenli bir seçenektir; yine de her katta döşeme yaşı ve kür durumu şantiye şefiyle birlikte teyit edilmeden çalışma başlatılmaz.",
            },
            {
                baslik: "İç avlu ve ortak alan tavan işleri",
                metin:
                    "Toplu konut projelerinde blok arası iç avlu, genellikle son aşamada peyzaj ve ortak alan aydınlatması için açılır; bu avlunun çevresindeki düşük saçak ve pergola gibi elemanların altına giriş standart bir vinç veya büyük platform için dar kalır. Örümcek platform, avlu girişindeki dar kapıdan geçip içeride açılarak bu tip ortak alan tavan ve aydınlatma işlerini tamamlar.",
            },
            {
                baslik: "Birden fazla blok arasında sıralı kullanım",
                metin:
                    "Bir toplu konut şantiyesinde genellikle birden fazla blok aynı anda veya art arda bitirme aşamasındadır; aynı örümcek platform, bir blokta işini bitirdikten sonra komşu bloğa taşınarak sıralı biçimde çalışabilir. Bu, her blok için ayrı makine kiralamak yerine tek bir makinenin şantiye içi rota ile ilerlemesini sağlar; rota planlaması şantiye şefinin blok teslim takvimine göre yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Toplu konut şantiyesinde örümcek platform kullanım noktaları",
                paragraflar: [
                    "Aşağıdaki tablo, blok içi ve çevresindeki tipik kullanım noktalarını ve bunların belirleyici koşulunu özetler.",
                ],
                tablo: {
                    basliklar: ["Kullanım noktası", "Belirleyici koşul", "Erişim yönü", "Zamanlama"],
                    satirlar: [
                        ["Merdiven boşluğu tavanı", "Dar dönüşlü geçiş", "Kat kat yukarı", "Boya-sıva bitişi"],
                        ["Asansör kuyusu içi", "Dikey dar boşluk", "Üst kattan aşağı", "Ray montaj sonrası"],
                        ["Kalıp iskeleli kat", "Daralmış geçiş genişliği", "Katlanmış giriş", "İskele söküm öncesi"],
                        ["İç avlu / ortak alan", "Düşük saçak, dar kapı", "İçeriden açılma", "Peyzaj öncesi"],
                        ["Blok arası geçiş", "Şantiye içi mesafe", "Yürüyerek taşıma", "Blok teslim sırasına göre"],
                    ],
                },
            },
            {
                baslik: "Şantiye şefiyle koordinasyon: hangi bilgi önceden istenir",
                paragraflar: [
                    "Örümcek platformun bir toplu konut bloğuna doğru makineyle ve doğru katta çalışmaya başlaması için, şantiye şefinden üç bilgi önceden istenir: hangi katların döşemesi yeterince kürünü tamamlamış, kalıp iskelesinin hangi katlarda hâlâ ayakta olduğu ve merdiven-asansör boşluğunda geçici korkuluk veya bariyer olup olmadığı. Bu bilgi eksik geldiğinde, makine sahaya ulaştığında beklenmedik bir engelle karşılaşabilir ve iş günü kaybedilebilir; bu yüzden ilk keşif genellikle telefon veya saha planı üzerinden yapılır, makine ancak bu üç soru netleştikten sonra sevk edilir.",
                    "Birden fazla blok söz konusu olduğunda, şantiye şefinin bloklar arası öncelik sırasını (hangi blok önce teslim edilecek) baştan bildirmesi, makinenin rota planını buna göre kurmamızı sağlar; öncelik sırası şantiye ilerledikçe değişebilir, bu durumda rota güncellenir.",
                ],
            },
            {
                baslik: "Operatör güvenliği ve şantiye iş güvenliği kurallarıyla uyum",
                paragraflar: [
                    "Toplu konut şantiyeleri genellikle kendi iş güvenliği talimatına ve giriş-çıkış kayıt sistemine sahiptir; operatörümüz sahaya girmeden önce şantiyenin oryantasyon eğitimini alır ve kişisel koruyucu donanımını (baret, emniyet kemeri, çelik burunlu ayakkabı) şantiye standardına göre tamamlar. Merdiven boşluğu ve asansör kuyusu gibi düşme riski yüksek alanlarda çalışırken, platformun kendi güvenlik sistemine ek olarak şantiyenin geçici korkuluk düzenine de uyulur; korkuluk henüz kurulmamışsa iş, korkuluk tamamlanana kadar ertelenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Merdiven boşluğumuz henüz korkuluksuz, yine de çalışabilir misiniz?",
                cevap:
                    "Korkuluksuz bir merdiven boşluğunda çalışmayız; bu hem operatörümüz hem sahadaki diğer işçiler için düşme riski taşır. Genellikle önerimiz, en azından geçici bir bariyer veya ip korkuluk kurulmasıdır — bu, çok kısa sürede ve düşük maliyetle yapılabilecek bir önlemdir. Korkuluk tamamlandığında haber verirseniz, işi hızlıca planlarız; korkuluksuz sahada çalışma talebini iş güvenliği gerekçesiyle geri çeviririz.",
            },
            {
                soru: "Blok içindeki kat döşemesi daha yeni döküldü, makine üzerinde durabilir mi?",
                cevap:
                    "Bu, döşemenin kür yaşına ve şantiyenizin beton dayanım raporuna bağlıdır; genel kural olarak beton en az yaklaşık bir hafta kür süresini tamamlamadan üzerinde ağır bir makine hareket ettirmemenizi öneririz, kesin süre beton sınıfına ve hava koşuluna göre değişir. Şantiye şefinizin veya şantiye mühendisinizin döşeme için verdiği onay tarihini bize iletirseniz, çalışmayı o tarihten sonrasına planlarız; onay olmadan riskli bir dökümün üzerine makine çıkarmayız.",
            },
            {
                soru: "Aynı anda üç blok bitirme aşamasında, tek makineyle hepsini yetiştirebilir miyiz?",
                cevap:
                    "Bu tamamen blok başına gereken iş süresine ve tesim takviminize bağlıdır; her blokta örümcek platformla yapılacak iş genellikle birkaç güne yayılır, üç blok art arda planlandığında toplam süre uzar ama tek makine nakliye maliyetini üçe bölmüş olursunuz. Teslim tarihleri sıkışıksa, ikinci bir makineyi paralel çalıştırmayı da değerlendirebiliriz; hangi seçeneğin daha ekonomik olduğunu blok sayısı ve iş yoğunluğuna göre birlikte hesaplarız.",
            },
            {
                soru: "Asansör kuyusunda çalışırken kuyu dibi henüz açık, tehlike arz eder mi?",
                cevap:
                    "Evet, açık kuyu dibi ciddi bir düşme riskidir; bu yüzden asansör kuyusu içi çalışmalarda makinenin üst kattan aşağı doğru bom uzatma yöntemini tercih ederiz — operatör ve makine üst kat döşemesinde sabit kalır, kuyu dibine inmez. Kuyu dibinin açık olması, alttan yukarı çalışma planlanan istisnai durumlarda ayrı bir güvenlik önlemi (geçici kapak, bariyer) gerektirir; bu önlem alınmadan alttan çalışma yapılmaz.",
            },
            {
                soru: "Kalıp iskelesi hâlâ ayaktayken makineniz kata sığar mı, önce iskelenin sökülmesini mi beklemeliyiz?",
                cevap:
                    "Örümcek platform katlanmış taşıma pozisyonunda dar geçitlerden geçebildiği için, çoğu durumda iskele tam sökülmeden de kata girebilir; ancak bu, iskelenin bıraktığı geçiş genişliğine bağlıdır ve kesin cevap sahayı görmeden verilemez. İlk keşifte katın fotoğrafını veya ölçüsünü paylaşmanız, iskele söküm takviminizi beklemeden çalışıp çalışamayacağımızı netleştirir.",
            },
            {
                soru: "Şantiyemizin kendi iş güvenliği oryantasyonu var, operatörünüz bunu alabilir mi?",
                cevap:
                    "Evet, operatörümüz şantiyenizin oryantasyon eğitimini almaya ve giriş-çıkış kayıt prosedürünüze uymaya hazırdır; bu genellikle sahaya ilk giriş günü kısa bir süre alır. Oryantasyon içeriği ve süresi şantiyeden şantiyeye değişebileceği için, işe başlamadan önce bu sürecin ne kadar süreceğini bize bildirmeniz, iş takvimimizi buna göre ayarlamamızı sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut/TOKİ şantiyelerinde blok içi merdiven boşluğu, asansör kuyusu ve kalıp iskelesi gibi inşaat aşamalarının genel akışı kamuya açık, sektörde bilinen inşaat pratiğidir; belirli bir şantiye adı veya rakam kullanılmamıştır. Operatör oryantasyonu ve rota planlaması firma pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Hazır Beton Santrali ve Şantiye Sahasına Platform-Forklift Nakliye ve Teslimat Hizmeti",
        giris:
            "Bir inşaat şantiyesine veya hazır beton santraline makine teslimatı, sabit bir sanayi tesisine yapılan teslimattan farklı bir planlama ister; çünkü şantiyenin kendisi zaman içinde değişir. Hafriyat aşamasındaki bir arsa, birkaç ay sonra kaba inşaatın başladığı bir şantiyeye, daha sonra da bitirme işlerinin yapıldığı bir bloklar dizisine dönüşür ve her aşamada makinenin ineceği nokta, giriş yolu ve zemin koşulu değişir. Hazır beton santralleri ise daha sabit bir düzene sahiptir ama silo ve konveyör hattı çevresindeki dar servis yolları, büyük araçların manevra alanını kısıtlar. Bu sayfa, nakliye-teslimat hizmetimizin şantiye ve santral tarafındaki bu iki farklı teslimat mantığını — değişken şantiye erişimi ile sabit ama dar santral erişimi — ayrı ayrı ele alır; makinenin sahadaki kullanımı diğer hizmet sayfalarımızın konusudur.",
        maddeler: [
            {
                baslik: "Hafriyat aşamasında değişen giriş yolu",
                metin:
                    "Bir şantiyenin hafriyat aşamasında, arsaya giriş genellikle henüz sabit bir yol değil, hafriyat kamyonlarının açtığı geçici bir güzergâhtır; bu güzergâh yağış sonrası çamurlaşabilir veya hafriyat ilerledikçe konumu değişebilir. Nakliye aracımız bu aşamada şantiyeye girmeden önce güncel giriş noktasını ve zemin durumunu şantiye şefinden teyit eder; sabit bir adres bilgisi bu aşamada genellikle yetersiz kalır, güncel bir tarif veya konum paylaşımı istenir.",
            },
            {
                baslik: "Kaba inşaat aşamasında vinç ve malzeme trafiğiyle paylaşım",
                metin:
                    "Kaba inşaat sürerken şantiye sahası kule vinç, malzeme kamyonları ve beton mikserleri gibi başka araçlarla da yoğun biçimde paylaşılır; platform veya forklift teslimatımızın bu trafiğe eklenmesi, şantiye şefinin belirlediği bir zaman penceresinde yapılır. Genellikle beton dökümü günlerinde teslimat yapılmaması istenir çünkü saha girişi mikser araçlarına ayrılır; bu yüzden teslimat tarihi, şantiyenin döküm takvimiyle çakışmayacak şekilde önceden planlanır.",
            },
            {
                baslik: "Bitirme aşamasında blok bazlı indirme noktası",
                metin:
                    "Bitirme işleri başladığında şantiye artık tek bir geniş sahadan çok, birbirine yakın birden fazla blok girişinden oluşur; makinenin hangi blok girişine indirileceği, o gün hangi blokta çalışılacağına göre değişir. Bu aşamada teslimat notumuz yalnızca 'şantiye adresi' değil, 'X blok, Y girişi' gibi ayrıntılı bir konum içerir; bu bilgi eksik geldiğinde araç şantiye içinde doğru girişi ararken zaman kaybedebilir.",
            },
            {
                baslik: "Hazır beton santralinde dar servis yolu ve manevra",
                metin:
                    "Hazır beton santrallerinin iç düzeni, silo, konveyör hattı ve mikser dolum istasyonları etrafında sıkışık bir yerleşime sahiptir; büyük bir nakliye aracının bu dar servis yollarında geri manevra yapması zaman alabilir. Santral tarafına teslimatlarda, aracımız santral yönetiminden hangi servis yolunun o gün açık olduğunu ve indirme noktasının neresi olacağını önceden öğrenir; bu, özellikle santralin üretim yaptığı saatlerde manevra çakışmasını önler.",
            },
            {
                baslik: "Hafta sonu ve hava koşulu bağımlı planlama",
                metin:
                    "İnşaat şantiyeleri genellikle hafta sonu da çalışabildiği için teslimat talebi hafta içiyle sınırlı kalmaz; ancak yağışlı günlerde hafriyat ve kaba inşaat aşamasındaki sahalara giriş riskli hâle gelebileceğinden, bu tip günlerde teslimat tarihini hava durumuna göre bir gün ertelemeyi önerebiliriz. Bitirme aşamasındaki bloklara (kapalı, zemin döşeli) teslimat ise hava koşulundan bağımsız olarak daha az kısıtlıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İnşaat aşamasına göre teslimat koşulu",
                paragraflar: [
                    "Aşağıdaki tablo, şantiyenin farklı aşamalarında teslimatı belirleyen koşulu ve buna göre alınan önlemi özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Belirleyici koşul", "Teslimat önlemi", "Zamanlama notu"],
                    satirlar: [
                        ["Hafriyat", "Geçici yol, zemin durumu", "Güncel konum teyidi", "Yağış sonrası ertelenebilir"],
                        ["Kaba inşaat", "Vinç/mikser trafiği", "Zaman penceresi ayarlanır", "Döküm günü dışında"],
                        ["Bitirme (blok)", "Çoklu giriş noktası", "Blok+giriş bazlı konum", "Günlük çalışma bloğuna göre"],
                        ["Hazır beton santrali", "Dar servis yolu", "Açık yol önceden teyit", "Üretim saatleri dışı tercih"],
                    ],
                },
            },
            {
                baslik: "Şantiye trafiğiyle çakışmayı önlemenin yolu",
                paragraflar: [
                    "Bir şantiyede aynı gün içinde birden fazla tedarikçinin araç göndermesi sık rastlanan bir durumdur; hafriyat kamyonu, hazır beton mikseri, demir taşıyan tır ve bizim platform-forklift aracımız aynı giriş kapısını kullanabilir. Bu çakışmayı önlemek için, teslimat saatimizi mümkünse şantiye şefinin o günkü araç trafiği planına göre ayarlarız; bu bilgi genellikle sabah brifinginde netleşir, bu yüzden teslimat saatini gün öncesinden değil, mümkünse sabah erken saatte teyit etmeyi tercih ederiz.",
                    "Hazır beton santrallerinde bu çakışma daha öngörülebilirdir çünkü santralin kendi üretim programı sabittir; santral yönetimiyle kurulan iletişim genellikle tek seferlik değil, düzenli teslimat yapılan santrallerde süreklidir.",
                ],
            },
            {
                baslik: "Teslim alma ve zemin uygunluğu kontrolü",
                paragraflar: [
                    "Makine şantiyeye ulaştığında, indirme noktasının zemin taşıma gücü aracımızın şoförü tarafından gözle kontrol edilir; özellikle hafriyat aşamasındaki yumuşak veya çamurlu bir zeminde ağır bir platformu doğrudan indirmek makinenin batmasına yol açabilir. Bu durumda ya indirme noktası şantiye şefiyle birlikte daha sağlam bir alana kaydırılır ya da geçici bir plaka döşeme önerilir. Bitirme aşamasındaki blok girişlerinde bu risk düşüktür çünkü zemin genellikle döşeli veya sıkıştırılmıştır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemiz henüz hafriyat aşamasında, sabit bir adres yok; nasıl teslimat yapıyorsunuz?",
                cevap:
                    "Bu aşamada sabit bir adres yerine, güncel bir konum paylaşımı (harita pini veya en yakın belirgin nokta tarifi) ve şantiyeye giriş için kullanılan geçici yolun tarifini isteriz. Aracımız şantiyeye yaklaşırken şantiye şefinizle telefon üzerinden son teyidi alır; bu, özellikle hafriyat ilerledikçe giriş noktası değiştiğinde aracın yanlış noktaya gitmesini önler.",
            },
            {
                soru: "Beton döküm günü teslimat yapabilir misiniz, yoksa kesinlikle kaçınmamız mı gerekir?",
                cevap:
                    "Kesin bir yasak değildir ama önermeyiz; döküm günü şantiye girişi genellikle mikser araçlarının sırasına ayrılır ve bizim aracımız bu sıraya girerse hem kendi teslimatımız gecikir hem döküm trafiği aksayabilir. Mümkünse döküm gününden bir gün önce veya sonra planlamanızı öneririz; zorunlu bir durumda döküm saatleri dışında (örneğin döküm sabah ise öğleden sonra) bir pencere ayarlayabiliriz.",
            },
            {
                soru: "Bitirme aşamasında birden fazla blokta aynı anda çalışıyoruz, makineyi hangi girişe göndereceksiniz?",
                cevap:
                    "Bu tamamen sizin bize ilettiğiniz bilgiye bağlıdır; 'şantiye adresi' yerine 'A blok, güney girişi' gibi net bir konum bildirirseniz aracımız doğrudan o noktaya gider. Bilgi belirsiz geldiğinde şoförümüz şantiye içinde doğru girişi ararken zaman kaybedebilir, bu yüzden bitirme aşamasındaki teslimatlarda blok ve giriş bilgisini teslimat talebinizle birlikte iletmenizi rica ederiz.",
            },
            {
                soru: "Hazır beton santralimizde üretim saatleri boyunca dar yollar kamyonlarla dolu oluyor, ne zaman teslimat yapabilirsiniz?",
                cevap:
                    "Santral yönetiminizle üretim programınızı önceden konuşarak, kamyon trafiğinin göreli az olduğu bir saat aralığı belirlemeyi öneririz; genellikle vardiya değişim saatleri veya üretim programının ara verdiği dönemler bu amaca uygundur. Santralinizin kendi trafik yoğunluğu size bizden daha iyi bilindiği için, ilk teslimatta önerdiğiniz saat aralığını esas alırız ve gerekirse sonraki teslimatlar için bu saati sabitleriz.",
            },
            {
                soru: "Yağmurlu bir günde hafriyat sahasına araç girebilir mi, makine batma riski var mı?",
                cevap:
                    "Yağış sonrası hafriyat sahasında zemin genellikle yumuşar ve ağır bir aracın veya makinenin batma riski artar; bu yüzden yağışlı günlerde, özellikle zemin killi ise, teslimatı bir gün ertelemenizi öneririz. Zorunlu bir teslimat söz konusuysa, şoförümüz sahaya varmadan önce zemin durumunu şantiye şefinizden sorar ve gerekirse indirme noktasına geçici plaka döşenmesini talep eder.",
            },
            {
                soru: "Aynı gün hem hafriyat kamyonu hem sizin aracınız hem de demir taşıyan tır geliyor, çakışma olur mu?",
                cevap:
                    "Çakışma riski gerçek bir risktir, bu yüzden mümkünse teslimat saatimizi sabah brifinginde netleşen günlük araç trafiği planına göre ayarlamanızı öneririz. Şantiye şefinizin o gün için bize önerdiği bir saat aralığı varsa bunu esas alırız; net bir saat verilmezse, genellikle sabah erken bir saati tercih ederiz çünkü gün ilerledikçe şantiye trafiği yoğunlaşma eğilimindedir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İnşaat şantiyelerinin hafriyat-kaba inşaat-bitirme aşamalarına göre erişim koşullarının değiştiği ve hazır beton santrallerinin silo/konveyör etrafında dar bir yerleşime sahip olduğu, inşaat sektöründe genel bilinen bir pratiktir; belirli bir şantiye veya santral adı kullanılmamıştır. Zaman penceresi planlaması firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Şantiye İnşaat Malzeme Deposunda Forklift ile İstifleme Kiralama",
        giris:
            "Bir toplu konut şantiyesinin malzeme deposu, tek bir yük tipiyle değil, birbirinden çok farklı ağırlık ve hassasiyette malzemelerle doludur: bir tarafta paletlenmiş tuğla ve gazbeton blok, diğer tarafta demetlenmiş inşaat demiri, bir başka köşede torbalanmış çimento ve harç, bir de kırılgan seramik-fayans paletleri ihracat gibi özenli bir istifleme ister. Bu malzemelerin her biri farklı bir forklift yaklaşımı gerektirir — demir demeti ağır ama esnek değildir, çimento torbası nem hassasiyetine sahiptir, fayans paleti darbeye karşı kırılgandır. Bu sayfa, forklift ve istifleme hizmetimizin şantiye malzeme deposundaki bu çeşitliliği nasıl karşıladığını anlatır; platformla yapılan yükseklik erişimi diğer hizmet sayfalarımızın konusudur.",
        maddeler: [
            {
                baslik: "Blok ve tuğla paletlerinin istiflenmesi",
                metin:
                    "Gazbeton blok ve tuğla paletleri, göreli hafif ama hacimli yüklerdir; şantiye deposunda genellikle iki-üç kat üst üste istiflenir ve inşaat ilerledikçe en alttaki palet önce kullanılacak şekilde bir sıra düzeni gözetilir. Forklift operatörümüz bu istiflemede yalnızca yükü kaldırmakla kalmaz, hangi paletin önce tüketileceğini şantiye şefiyle konuşarak sıralamayı buna göre kurar; aksi hâlde yanlış sıralanmış bir istif, ihtiyaç anında altındaki paleti çıkarmak için tüm yığının yeniden düzenlenmesini gerektirebilir.",
            },
            {
                baslik: "İnşaat demiri demetlerinin taşınması",
                metin:
                    "İnşaat demiri, uzun ve esnek bir yük olduğu için standart bir forklift çatalıyla taşınırken demet ortadan sarkabilir veya çatal üzerinde kayabilir; bu tip yükler için çatal genişliği ve demet bağlama noktası özel dikkat ister. Demir demetleri genellikle şantiyenin demirci atölyesine yakın bir noktada, boyuna göre ayrılmış sıralar hâlinde istiflenir; forklift operatörümüz demeti taşırken hem demetin kendi bütünlüğünü hem de geçtiği güzergâhtaki diğer malzeme ve işçi trafiğini gözetir.",
            },
            {
                baslik: "Torbalanmış çimento ve harcın nem korumalı istiflenmesi",
                metin:
                    "Çimento ve hazır harç torbaları neme karşı hassastır; açık havada veya zemin nemi yüksek bir depoda doğrudan zemine istiflenirse alt sıra torbalar kısa sürede bozulabilir. Bu malzemeler mümkünse palet üzerine, kapalı veya en azından üzeri örtülü bir alanda istiflenir; forklift operatörümüz bu tip yükleri taşırken hem torbanın yırtılmaması için nazik bir kaldırma hem de istif yüksekliğinin torbanın kendi ağırlığıyla alt sıraları ezmeyecek bir sınırda kalmasını gözetir.",
            },
            {
                baslik: "Kırılgan seramik-fayans ve tesisat malzemesi",
                metin:
                    "Bitirme aşamasında depoya giren fayans, seramik ve tesisat malzemesi kutuları, inşaat demirine göre çok daha kırılgan bir yük profilidir; bu malzemeler genellikle üretici paletlerinde gelir ve forklift bu paletleri değiştirmeden, orijinal paketleme bütünlüğünü bozmadan taşır. İstifleme yüksekliği, alt kutuların üst yükün ağırlığı altında kırılmasını önleyecek şekilde üretici etiketindeki sınırlara göre belirlenir.",
            },
            {
                baslik: "Şantiye içi kısa mesafe taşıma ve kat çıkışları",
                metin:
                    "Malzeme deposundan bina girişine veya kat bazlı depolama noktasına kısa mesafeli taşıma, forklift hizmetimizin bir başka boyutudur; bodrum kat veya zemin kat gibi araç girişinin mümkün olduğu noktalara malzeme forkliftle taşınırken, üst katlara çıkış genellikle ayrı bir taşıma yöntemi (asansör, vinç) gerektirir. Forklift bu noktada malzemeyi bina girişine kadar getirir, üst kat taşıması şantiyenin kendi düşey taşıma sistemine devredilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Malzeme tipine göre forklift istifleme yaklaşımı",
                paragraflar: [
                    "Aşağıdaki tablo, şantiye deposundaki başlıca malzeme tiplerini ve bunlara özgü istifleme dikkatini karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Malzeme tipi", "Temel risk", "İstifleme dikkati", "Depolama koşulu"],
                    satirlar: [
                        ["Gazbeton blok / tuğla", "Yanlış sıralama", "İlk giren ilk çıkar düzeni", "Açık saha uygun"],
                        ["İnşaat demiri demeti", "Kayma, sarkma", "Uygun çatal genişliği", "Boya göre ayrım"],
                        ["Torbalanmış çimento/harç", "Nem, ezilme", "Palet üzeri, örtülü alan", "Kapalı/örtülü tercih"],
                        ["Fayans/seramik kutusu", "Kırılma", "Orijinal palet korunur", "Üretici sınırına göre yükseklik"],
                    ],
                },
            },
            {
                baslik: "Şantiye deposunun günlük değişen düzeni",
                paragraflar: [
                    "Bir sanayi deposunun aksine, şantiye malzeme deposu inşaatın ilerlemesiyle birlikte sürekli değişir; bugün boş olan bir alan yarın yeni gelen bir malzeme partisiyle dolabilir, dün kullanılan bir sıra bugün tamamen boşalabilir. Forklift operatörümüz bu değişkenliğe alışkındır ve her gelişte depo düzenini şantiye şefiyle birlikte hızlıca gözden geçirir; sabit bir yerleşim planına güvenmek yerine, güncel durumu görerek çalışmak şantiye deposunda daha güvenilir bir yöntemdir.",
                    "Malzeme partileri büyük hacimlerde ve genellikle önceden haber verilmeden geldiğinde, forklift talebimizin de aynı gün içinde artabileceğini göz önünde bulundurarak, mümkün olduğunca esnek bir kapasite ayırırız; yoğun teslimat dönemlerinde önceden haber verilmesi, bu esnekliği daha iyi planlamamızı sağlar.",
                ],
            },
            {
                baslik: "İş güvenliği: forklift ve yaya trafiğinin paylaşımı",
                paragraflar: [
                    "Şantiye malzeme deposu, forkliftin yanı sıra sürekli yaya işçi trafiğine de açıktır; bu, sanayi deposundan farklı bir risk taşır çünkü şantiye işçileri bazen forklift güzergâhını kesecek şekilde hareket edebilir. Operatörümüz bu riski azaltmak için düşük hızda ilerler, kör noktalarda kornaya basar ve mümkünse depo içindeki yaya-araç ayrımını şantiye şefiyle birlikte işaretlemeyi önerir; bu işaretleme yoksa, ilk günden itibaren geçici bir güzergâh çizgisi önerilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Demir demetlerini standart forklift çatalıyla taşımak güvenli mi, özel ekipman mı gerekir?",
                cevap:
                    "Kısa demetler ve düşük ağırlıklar için standart çatal genellikle yeterlidir, ancak uzun demetlerde demet ortadan sarkabilir; bu durumda çatal genişliğini demet uzunluğuna göre ayarlar ve gerekirse demeti bağlayan kayışların sağlam olduğunu kontrol ederiz. Demet çok uzun veya ağırsa, taşımayı iki aşamaya bölmeyi ya da farklı bir ekipmanla desteklemeyi önerebiliriz; bu karar demetin boyu ve ağırlığı görüldükten sonra netleşir.",
            },
            {
                soru: "Çimento torbalarını açık sahaya istiflemek zorundayız, yağmurdan nasıl korunur?",
                cevap:
                    "Açık sahaya istiflemek zorunda kalırsanız, en azından paletin altına nem geçirmez bir tabaka ve üzerine su geçirmez bir örtü koymanızı öneririz; forklift operatörümüz istifi bu örtüye göre şekillendirebilir ama örtünün kendisi genellikle şantiyenin sorumluluğundadır. Mümkünse örtülü bir alan veya konteyner ayırmanız, uzun vadede malzeme kaybını belirgin biçimde azaltır.",
            },
            {
                soru: "Fayans paletlerini üç kat üst üste istifleyebilir miyiz, yoksa kırılır mı?",
                cevap:
                    "Bu tamamen üretici etiketindeki istifleme sınırına bağlıdır; bazı paletler iki kata kadar güvenliyken bazıları üç kata izin verebilir. Operatörümüz palet üzerindeki etiketi kontrol eder ve etiket yoksa veya belirsizse, güvenli tarafta kalarak daha düşük bir istif yüksekliği önerir; kırılma riskini göze alıp etiket sınırının üzerine çıkmayız.",
            },
            {
                soru: "Şantiye deposunda sabit bir yerleşim planımız yok, her gün değişiyor; bu sorun olur mu?",
                cevap:
                    "Sorun olmaz, aksine şantiye depolarının çoğu bu şekilde işler; operatörümüz her gelişte güncel durumu şantiye şefinizle birlikte hızlıca gözden geçirir ve ona göre çalışır. Sabit bir plana ihtiyacımız yok, ama o günkü öncelikli malzemenin ne olduğunu (hangi malzeme hemen kullanılacak) bilmemiz, istifleme sırasını daha isabetli kurmamızı sağlar.",
            },
            {
                soru: "Büyük bir malzeme partisi aniden geldi, aynı gün forklift talebimizi artırabilir misiniz?",
                cevap:
                    "Mümkün olduğunca esnek davranmaya çalışırız ama aynı gün içinde ek kapasite garantisi veremeyiz; yoğun teslimat dönemlerinde bir-iki gün önceden haber verilmesi, ek forklift veya uzatılmış çalışma saati ayarlamamızı büyük ölçüde kolaylaştırır. Ani gelen bir parti için elimizdeki kapasiteyi önce mevcut işe göre değerlendirir, mümkünse aynı gün, değilse en kısa sürede planlarız.",
            },
            {
                soru: "Forklift ile yaya işçi trafiği aynı depoda nasıl çakışmadan çalışır?",
                cevap:
                    "Operatörümüz düşük hızda ilerler ve kör noktalarda korna kullanır ama asıl güvenlik, depo içinde yaya ve araç güzergâhının ayrılmasından gelir; bu ayrım yoksa ilk günden itibaren geçici bir şerit veya işaretleme önermemiz standart pratiktir. Şantiyenizde zaten bir yaya-araç ayrımı varsa, operatörümüz bu düzene uyar; yoksa, işaretleme yapılana kadar ekstra dikkatli ve düşük hızda çalışırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İnşaat malzemelerinin (tuğla, demir, çimento, fayans) genel ağırlık ve hassasiyet özellikleri kamuya açık, sektörde bilinen genel bilgidir; belirli bir şantiye veya tedarikçi adı kullanılmamıştır. İstifleme sıralaması ve yerleşim koordinasyonu firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Toplu Konut Bloğu Dış Cephesinde Mantolama ve Sıva İşlerinde Eklemli Platform Kiralama",
        giris:
            "Toplu konut ve TOKİ projelerinde bloklar genellikle birbirine yakın, dar aralıklarla dizilir; bu yerleşim, dış cephe mantolama ve sıva işlerinde standart bir vinç veya sabit iskeleye göre farklı bir erişim sorunu yaratır. Blok cephesi ile komşu bloğun cephesi arasındaki mesafe bazen bir platformun düz uzanan bomunu rahatça kullanmasına izin vermeyecek kadar dar olabilir, bazen de bina girişindeki saçak veya pergola gibi çıkıntılar cepheye düz bir yaklaşımı engeller. Eklemli platform, birden fazla mafsallı kolu sayesinde önce yukarı sonra yatay uzanarak bu tip engelli hedeflere ulaşabildiği için, toplu konut cephe işlerinde tercih edilen makine sınıfıdır. Bu sayfa, eklemli platformun blok dış cephesi, saçak altı ve giriş kanopisi gibi engelli noktalardaki kullanımını anlatır; blok içindeki dar geçit işleri örümcek platform sayfamızın konusudur.",
        maddeler: [
            {
                baslik: "Bloklar arası dar aralıkta manevra",
                metin:
                    "Toplu konut yerleşimlerinde bloklar arası mesafe genellikle standart bir yol genişliğiyle sınırlıdır ve bu mesafe, düz teleskopik bomlu bir platformun geniş açıyla çalışmasına izin vermeyebilir. Eklemli platform, gövdesini dar aralığa sığdırıp kolunu mafsallardan kırarak cepheye tırmanabilir; bu, aynı dar aralıkta teleskopik sınıfın erişemeyeceği noktalara ulaşmayı sağlar.",
            },
            {
                baslik: "Giriş kanopisi ve saçak altı işleri",
                metin:
                    "Blok girişlerindeki kanopi veya saçak, cephenin düz bir yüzey olmadığı, çıkıntılı bir engel taşıdığı noktalardır; bu çıkıntının altına veya üstüne ulaşmak için kol önce yukarı, sonra çıkıntının üzerinden dolanarak yatay uzanmalıdır. Eklemli platformun çok noktalı mafsal yapısı tam olarak bu hareketi yapabilir; düz bomlu bir makine bu tip çıkıntılı hedeflerde genellikle yetersiz kalır.",
            },
            {
                baslik: "Mantolama kalınlığına göre yaklaşma mesafesi",
                metin:
                    "Mantolama işinde platform sepetinin cepheye yaklaşma mesafesi, uygulanacak yalıtım levhası kalınlığına göre ayarlanır; kaba sıva aşamasında cepheye yakın çalışılırken, mantolama levhası ve son kat sıva eklendikçe sepet mesafesi bu kalınlığı hesaba katacak şekilde yeniden konumlandırılır. Bu, tek bir sabit mesafeyle değil, işin aşamasına göre değişen bir yaklaşımla yürütülür.",
            },
            {
                baslik: "Çoklu blok arasında sıralı cephe programı",
                metin:
                    "Bir toplu konut projesinde genellikle birden fazla blok aynı dönemde cephe aşamasındadır; eklemli platform bir bloğun cephesini bitirdikten sonra komşu bloğa geçerek sıralı biçimde ilerler. Bu sıralama, hangi bloğun önce teslim edileceğine göre şantiye yönetimi tarafından belirlenir ve platform rotası buna göre kurulur; sıralama değiştiğinde rota da güncellenir.",
            },
            {
                baslik: "Rüzgârlı günlerde yükseklik ve çalışma sınırı",
                metin:
                    "Toplu konut blokları genellikle çok katlı olduğu için, üst kat cephe işlerinde rüzgâr hızı belirleyici bir güvenlik faktörüdür; üretici tarafından belirlenen rüzgâr sınırının üzerinde çalışma durdurulur. Açık ve yüksek konumdaki bloklarda bu sınır daha sık devreye girebilir, bu yüzden rüzgârlı dönemlerde iş programı esnek tutulur ve alternatif olarak rüzgârdan daha korunaklı alt katlardaki işler öne alınabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Cephe noktası tipine göre eklemli platform kullanımı",
                paragraflar: [
                    "Aşağıdaki tablo, toplu konut cephesindeki tipik engelli noktaları ve eklemli platformun buradaki rolünü özetler.",
                ],
                tablo: {
                    basliklar: ["Cephe noktası", "Engel tipi", "Kol hareketi", "İş aşaması"],
                    satirlar: [
                        ["Bloklar arası düz cephe", "Dar aralık", "Kısa gövde, dik uzanım", "Kaba/son sıva"],
                        ["Giriş kanopisi altı", "Çıkıntılı saçak", "Yukarı sonra yatay dolanım", "Mantolama sonrası"],
                        ["Pergola / balkon altı", "Kısmi kapalı hacim", "Çok noktalı mafsal", "Detay sıva"],
                        ["Üst kat / çatı saçağı", "Rüzgâr etkisi", "Sınırlı yükseklikte dikey", "Rüzgârsız pencere"],
                    ],
                },
            },
            {
                baslik: "Mantolama ekibiyle senkron çalışma",
                paragraflar: [
                    "Mantolama işi genellikle platform operatörünün tek başına değil, cephede çalışan bir uygulama ekibiyle birlikte yürüdüğü bir süreçtir; ekip levha yapıştırma, dübel çakma ve sıva uygulama gibi ardışık adımları takip ederken, platform bu adımların her birinde sepeti doğru yükseklik ve mesafeye taşır. Bu senkronu sağlamak için operatörümüz genellikle mantolama ekibinin ustabaşıyla doğrudan iletişim kurar ve günlük ilerleme hızına göre sepet konumunu ayarlar.",
                    "Birden fazla katta aynı anda çalışan büyük bir mantolama ekibi söz konusuysa, tek platformun tüm katlara yetişmesi zaman alabilir; bu durumda ikinci bir makinenin paralel çalıştırılması değerlendirilir, karar ekip büyüklüğü ve teslim takvimine göre verilir.",
                ],
            },
            {
                baslik: "Rüzgâr ve hava koşulu takibi",
                paragraflar: [
                    "Yüksek katlı blok cephelerinde çalışırken operatörümüz, üreticinin belirlediği rüzgâr hızı sınırını sahada anlık olarak takip eder; sınır aşıldığında iş derhal durdurulur ve sepet güvenli konuma indirilir. Bu, özellikle açık arazide veya rüzgâra maruz cephelerde daha sık gündeme gelebilir; bu tip günlerde iş programını esnek tutmak, bir günün tamamen kaybolmasını önler çünkü rüzgâr genellikle gün içinde değişkenlik gösterir ve sakin bir pencere bulunabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bloklar arası mesafe çok dar, platform gerçekten sığar mı?",
                cevap:
                    "Çoğu toplu konut yerleşiminde eklemli platformun kompakt gövdesi bu dar aralıklara sığar, ama kesin cevap aralığın ölçüsüne bağlıdır; ilk keşifte bloklar arası mesafeyi ölçüp uygun gövde genişliğindeki makineyi öneririz. Aralık gerçekten çok darsa, örümcek platform gibi daha küçük bir sınıfı da değerlendirebiliriz; karar sahayı gördükten sonra netleşir.",
            },
            {
                soru: "Mantolama kalınlığı arttıkça sepet mesafesini siz mi ayarlıyorsunuz, yoksa biz mi bildirmeliyiz?",
                cevap:
                    "Operatörümüz sepeti cepheye yaklaştırırken genel bir mesafe tutar ama mantolama levhası kalınlığı işin ilerleyen aşamalarında değiştiğinde, bu değişikliği bize bildirmeniz mesafenin daha isabetli ayarlanmasını sağlar. Uygulama ekibinizin ustabaşısı ile doğrudan iletişimde olmamız, bu bilgi akışını genellikle otomatik hâle getirir.",
            },
            {
                soru: "Rüzgârlı bir günde iş tamamen iptal mi olur, yoksa bekleyip devam edebilir miyiz?",
                cevap:
                    "Rüzgâr sınırı aşıldığında iş o an için durur ama gün boyunca rüzgâr genellikle sabit kalmaz; sakin bir pencere oluştuğunda operatörümüz işe devam eder. Tamamen iptal etmek yerine, o gün alt katlarda veya rüzgârdan korunaklı cephede çalışmaya geçmeyi öneririz; bu, günün tamamen boşa geçmesini önler.",
            },
            {
                soru: "Aynı anda üç blokta mantolama sürüyor, tek platformla yetişir mi?",
                cevap:
                    "Blok başına gereken süreye ve ekiplerin hızına bağlıdır; tek platform bloklar arasında sıralı geçiş yaparak çalışabilir ama bu, toplam süreyi uzatır. Teslim tarihleriniz sıkışıksa ikinci bir makineyi paralel çalıştırmayı öneririz; hangi seçeneğin bütçenize daha uygun olduğunu, ekip sayınız ve blok büyüklüğünüze göre birlikte hesaplarız.",
            },
            {
                soru: "Giriş kanopisinin altına platform sepeti girebilir mi, yoksa çarpma riski mi var?",
                cevap:
                    "Eklemli platformun mafsallı kolu, kanopinin altına önce yandan yaklaşıp sonra sepeti dikkatle içeri sokacak şekilde kullanılabilir, ama bu hassas bir manevradır ve operatörümüz kanopinin gerçek yüksekliğini ve derinliğini önceden ölçer. Ölçü belirsizse, ilk yaklaşımda düşük hızda ve mesafeli bir deneme yapılır; çarpma riski taşıyan bir durumda iş güvenli mesafeden yeniden planlanır.",
            },
            {
                soru: "Şantiyemizde birden fazla eklemli platform ihtiyacımız olursa aynı anda temin edebilir misiniz?",
                cevap:
                    "Kapasitemize ve o dönemki diğer taahhütlerimize bağlı olarak birden fazla makineyi aynı anda sağlayabiliriz; büyük bir toplu konut projesinde bu talep sık karşımıza çıkar. Erken planlama (özellikle yoğun dönemlerde birkaç hafta öncesinden) birden fazla makinenin aynı anda ayrılmasını kolaylaştırır; son dakika talep edilen ikinci veya üçüncü makine, mevcut kapasiteye göre gecikebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut/TOKİ projelerinde blokların birbirine yakın dizildiği ve dış cephe mantolama işinin katmanlı bir uygulama süreci olduğu, inşaat sektöründe genel bilinen bir pratiktir; belirli bir proje veya blok adı kullanılmamıştır. Rüzgâr sınırı takibi ve rota planlaması firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Hazır Beton Santrali Silo ve Konveyör Hattı İçinde Platform Kiralama",
        giris:
            "Bir hazır beton santralinin dış görünümü sade olsa da, iç yapısı — özellikle silo gövdesi, konveyör bant hattı ve karışım ünitesinin çevresi — dar, tozlu ve dikey bir erişim gerektiren bir düzene sahiptir. Silo içindeki agrega akış sensörünün kontrolü, konveyör bandının üstündeki bakım işleri veya karışım ünitesinin üzerindeki motor-redüktör bakımı gibi işler, santralin normal üretim akışını kesmeden ve genellikle çimento tozunun yoğun olduğu bir ortamda yapılır. Bu sayfa, iç mekân platform kiralamamızın hazır beton santralindeki bu özel kullanım alanını anlatır; santral dışındaki açık stok sahası ve şantiye teslimatı diğer hizmet sayfalarımızın konusudur.",
        maddeler: [
            {
                baslik: "Silo gövdesi içi ve üstü erişim",
                metin:
                    "Agrega ve çimento siloları, dikey ve dar bir gövdeye sahiptir; silo üstündeki dolum ağzı, seviye sensörü veya filtre bakımı için genellikle sabit bir merdiven bulunur ama bu merdiven yalnızca ulaşım sağlar, çalışma alanı sunmaz. Platform, silo çevresindeki servis alanından bomunu dikey uzatarak bu üst noktalara güvenli bir çalışma sepeti sağlar; silo gövdesinin dar çapı nedeniyle genellikle kompakt gövdeli bir sınıf tercih edilir.",
            },
            {
                baslik: "Konveyör bant hattı üstü bakım",
                metin:
                    "Konveyör bant hattı, santral içinde uzun ve genellikle eğimli bir güzergâh izler; bandın kendisi, ruloları veya üstündeki toz kapağı bakımı, bandın altından değil üstünden veya yanından erişimle yapılır. Platform, bant hattı boyunca ilerleyerek her bakım noktasına sırayla yaklaşır; bant çalışırken bu işlem yapılmaz, bakım genellikle üretim durduğunda planlanan bir pencerede gerçekleştirilir.",
            },
            {
                baslik: "Çimento tozu yoğun ortamda çalışma önlemleri",
                metin:
                    "Santral içindeki toz yoğunluğu, özellikle dolum ve karıştırma noktalarında yüksektir; bu ortamda çalışan operatörümüz toz maskesi kullanır ve makinenin hareketli aksamının tozdan etkilenmemesi için çalışma sonrası temel bir temizlik uygulanır. Toz birikimi, platformun kumanda panelinde görünürlüğü de etkileyebileceği için, uzun süreli işlerde ara temizlik molaları planlanır.",
            },
            {
                baslik: "Üretim durmadan yapılabilecek işler ile duruş gerektiren işler ayrımı",
                metin:
                    "Bazı bakım işleri (örneğin dış gövde temizliği veya aydınlatma değişimi) santral üretim yaparken de yapılabilirken, konveyör bandı veya silo içi işler genellikle bandın veya dolum hattının durdurulmasını gerektirir. Bu ayrım, iş talebi alındığında santral yetkilisiyle birlikte netleştirilir; hangi işin ne zaman yapılabileceği, santralin günlük üretim programına göre planlanır.",
            },
            {
                baslik: "Karışım ünitesi üstü motor-redüktör erişimi",
                metin:
                    "Karışım ünitesinin üstünde bulunan motor ve redüktör grubu, santralin en yoğun titreşim ve ısı gören bileşenlerindendir; bu noktaya düzenli bakım için erişim, sabit bir platform veya merdiven yoksa hareketli bir makineyle sağlanır. Platform bu noktaya yaklaşırken, ünitenin çevresindeki dar boru ve kablo yoğunluğuna dikkat ederek konumlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Santral içi bakım noktaları ve erişim özeti",
                paragraflar: [
                    "Aşağıdaki tablo, hazır beton santralindeki başlıca bakım noktalarını ve platformla erişim koşulunu karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Bakım noktası", "Ortam koşulu", "Erişim yönü", "Üretim durumu"],
                    satirlar: [
                        ["Silo üstü / dolum ağzı", "Dikey, dar çap", "Servis alanından yukarı", "Duruş gerekli"],
                        ["Konveyör bant hattı", "Eğimli, uzun güzergâh", "Yandan/üstten ilerleyerek", "Duruş gerekli"],
                        ["Karışım ünitesi üstü", "Dar boru-kablo yoğunluğu", "Kontrollü yaklaşma", "Duruş gerekli"],
                        ["Dış gövde / aydınlatma", "Açık alan", "Standart dikey erişim", "Üretimle birlikte mümkün"],
                    ],
                },
            },
            {
                baslik: "Santral üretim takvimiyle koordinasyon",
                paragraflar: [
                    "Hazır beton santralleri, sipariş yoğunluğuna göre değişen ama genellikle önceden bilinen bir üretim programına sahiptir; bu program içinde bakım için ayrılan duruş pencereleri sınırlıdır ve genellikle sabah erken saat veya sipariş yoğunluğunun düştüğü dönemlere denk gelir. Platform hizmetimiz, bu pencereleri kaçırmamak için santral yetkilisiyle bakım tarihini önceden netleştirir; pencere dar olduğunda, iş listesi önceliklendirilir ve en kritik nokta önce ele alınır.",
                    "Beklenmedik bir arıza (örneğin silo seviye sensörünün devre dışı kalması) söz konusu olduğunda, planlı pencereyi beklemeden acil bir müdahale de organize edilebilir; bu durumda üretim geçici olarak durdurulur ve iş en kısa sürede tamamlanır.",
                ],
            },
            {
                baslik: "Toz ve kimyasal katkı maddelerine karşı önlem",
                paragraflar: [
                    "Bazı hazır beton santrallerinde çimentoya ek olarak kimyasal katkı maddeleri de kullanılır; bu maddelerin depolandığı veya karıştırıldığı bölgelerde çalışırken operatörümüz santralin kendi güvenlik bilgi formlarını (varsa) dikkate alır ve gerekli kişisel koruyucu donanımı kullanır. Bu tip alanlarda çalışma öncesi santral yetkilisinden hangi maddelerin o bölgede bulunduğuna dair bilgi alınması standart bir güvenlik adımıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo üstündeki sensör bakımı için üretimi tamamen durdurmamız mı gerekiyor?",
                cevap:
                    "Genellikle evet, çünkü silo dolum hattı çalışırken üst noktaya güvenli erişim sağlamak risklidir; bu yüzden silo içi ve üstü işler için kısa bir duruş penceresi planlarız. Duruş süresi işin kapsamına göre değişir, genellikle birkaç saatlik bir pencere yeterli olur; bu süreyi santral yetkilinizle birlikte önceden netleştiririz.",
            },
            {
                soru: "Konveyör bandı çalışırken yanından geçen bir platformla bakım yapılabilir mi?",
                cevap:
                    "Hayır, bant çalışırken üzerinde veya çok yakınında platformla çalışmak ciddi bir yakalanma ve düşme riski taşır; bu tür işler için bandın durdurulması standart güvenlik gereğidir. Bant durdurulmadan yapılabilecek tek iş, banttan güvenli mesafede kalan dış gözlem veya görsel kontroldür, bunun dışındaki tüm müdahaleler duruş gerektirir.",
            },
            {
                soru: "Santralimiz sürekli sipariş alıyor, bakım için uygun bir pencere bulmak zor; ne öneriyorsunuz?",
                cevap:
                    "Sipariş yoğunluğunun görece düştüğü saatleri (genellikle sabah çok erken veya akşam geç) veya haftanın daha sakin bir gününü belirlemenizi öneririz; bu bilgiyi paylaştığınızda planımızı buna göre kurarız. Sürekli yoğun bir santralde bile genellikle kısa bir pencere bulunur, önemli olan bu pencereyi önceden belirleyip bize bildirmenizdir.",
            },
            {
                soru: "Toz yoğun bir ortamda platformun elektronik aksamı zarar görür mü?",
                cevap:
                    "Kısa süreli çalışmalarda ciddi bir risk beklemeyiz ama uzun süreli veya sık tekrarlanan işlerde toz birikimi kumanda panelinin görünürlüğünü ve bazı hareketli aksamı etkileyebilir; bu yüzden uzun işlerde ara temizlik molaları planlarız. İş bitiminde makinenin temel bir temizliği yapılır; bu, hem makinenin ömrünü korur hem bir sonraki kullanıcıya temiz bir ekipman teslim etmemizi sağlar.",
            },
            {
                soru: "Acil bir arıza oldu, planlı bakım penceresini beklemeden gelebilir misiniz?",
                cevap:
                    "Evet, acil arızalarda planlı pencereyi beklemeyiz; santralinizin o an üretimi geçici olarak durdurması gerekebilir ama biz mümkün olan en kısa sürede sahaya ulaşmaya çalışırız. Acil durumlarda önceliğimiz üretiminizin en kısa sürede yeniden başlayabilmesidir, bu yüzden bu tip taleplerde normal planlama sürecini kısaltırız.",
            },
            {
                soru: "Kimyasal katkı maddesi depolanan bölgede çalışırken özel bir önlem alıyor musunuz?",
                cevap:
                    "Evet, bu tip bölgelerde çalışmadan önce santral yetkilinizden o bölgede hangi maddelerin bulunduğuna dair bilgi alırız ve operatörümüz buna uygun kişisel koruyucu donanımı kullanır. Santralinizin güvenlik bilgi formu (varsa) bize önceden paylaşılırsa, hazırlığımızı daha isabetli yaparız; paylaşılmazsa sahada yetkiliye sorarak öğreniriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Hazır beton santrallerinin silo, konveyör bant hattı ve karışım ünitesi gibi bileşenlerden oluştuğu ve bu bileşenlerin dar/tozlu bir erişim gerektirdiği, sektörde genel bilinen teknik bir gerçektir; belirli bir santral adı veya rakam kullanılmamıştır. Duruş penceresi planlaması ve acil müdahale süreci firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Hazır Beton Santrali Genişletme ve Şantiye Şantiye Ofisi Çelik Yapı Montajında Platform Kiralama",
        giris:
            "Kütahya'daki hazır beton santrallerinin bir kısmı, artan sipariş hacmine karşılık ikinci bir silo grubu veya ek bir konveyör hattı ekleyerek kapasitesini büyütür; bu tip genişletme işleri, günlük üretim bakımından farklı olarak yeni çelik konstrüksiyonun kurulması, kiriş ve dikme montajı, bağlantı cıvatalarının sıkılması gibi inşaat aşaması işleri gerektirir. Benzer bir çelik montaj ihtiyacı, büyük şantiyelerin saha ofisi, malzeme deposu veya vardiya barınma birimleri gibi geçici çelik yapılarının kurulumunda da ortaya çıkar. Bu sayfa, çelik konstrüksiyon montaj platformu hizmetimizin bu iki senaryodaki — santral genişletme ve şantiye geçici yapıları — kullanımını anlatır; mevcut ve çalışır durumdaki santral içi bakım işleri iç mekân sayfamızın konusudur.",
        maddeler: [
            {
                baslik: "Yeni silo grubu montajında dikey erişim",
                metin:
                    "Bir silo grubunun çelik iskeleti, temelden başlayarak kat kat yükselen dikmeler ve bunları birbirine bağlayan kirişlerden oluşur; montaj sırasında her kaynak veya cıvata noktasına erişim, iskelet henüz tamamlanmadığı için sabit bir merdivenle sağlanamaz. Platform, iskeletin yanında konumlanıp yükseklik arttıkça sepeti buna göre yükselterek montaj ekibine her seviyede erişim sağlar; iskelet tamamlandıkça platformun konumu da yeni eklenen üst seviyelere göre güncellenir.",
            },
            {
                baslik: "Konveyör köprüsü ek hattı kaynak ve bağlantı kontrolü",
                metin:
                    "Mevcut santrale eklenen yeni bir konveyör köprüsü, genellikle mevcut hatla belirli bir açıda veya yükseklikte birleşir; bu birleşim noktasındaki kaynak ve cıvata bağlantılarının kontrolü, hem yeni hem eski yapının kesiştiği dar bir bölgede yapılır. Platform bu kesişim noktasına, mevcut ekipmana zarar vermeyecek bir açıdan yaklaşarak montaj ekibine çalışma alanı sağlar.",
            },
            {
                baslik: "Şantiye saha ofisi ve geçici yapı kurulumu",
                metin:
                    "Büyük bir toplu konut şantiyesinin saha ofisi, malzeme deposu veya vardiya barınma birimleri genellikle hafif çelik konstrüksiyon üzerine kurulur; bu yapıların çatı kirişi montajı ve panel kaplaması, kalıcı bir bina kadar büyük olmasa da yükseklikte çalışma gerektirir. Platform, bu geçici yapıların montajında hızlı kurulum ve sökümle uyumlu, kısa süreli bir çözüm sunar.",
            },
            {
                baslik: "Rüzgâr ve açık arazi koşulunda montaj güvenliği",
                metin:
                    "Hazır beton santralleri ve büyük şantiyeler genellikle şehir dışında, rüzgâra açık arazilerde konumlanır; bu koşul, yüksekte çelik montaj yaparken rüzgâr hızının daha sık takip edilmesini gerektirir. Üretici sınırının üzerinde rüzgâr ölçüldüğünde iş durdurulur; açık arazi koşulunda bu durum kapalı bir sanayi holüne göre daha sık gündeme gelebilir, bu yüzden montaj takvimi hava tahminine göre esnek tutulur.",
            },
            {
                baslik: "Montaj ekibiyle kademeli yükseklik takibi",
                metin:
                    "Çelik montaj işi, tek bir sabit yükseklikte değil, iskelet yükseldikçe artan bir çalışma seviyesinde ilerler; platform operatörü montaj ekibinin ustabaşısıyla sürekli iletişimde kalarak, o gün hangi seviyede çalışılacağını takip eder ve sepeti buna göre konumlandırır. Bu kademeli takip, montaj hızının platform erişimiyle uyumlu ilerlemesini sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çelik montaj senaryosuna göre platform kullanımı",
                paragraflar: [
                    "Aşağıdaki tablo, santral genişletme ve şantiye geçici yapı senaryolarında platformun kullanım özelliklerini karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Yapı tipi", "Erişim özelliği", "Süre"],
                    satirlar: [
                        ["Yeni silo grubu", "Kalıcı dikey iskelet", "Kademeli yükselen erişim", "Haftalar"],
                        ["Konveyör köprüsü eki", "Kesişim bölgesi", "Dar açılı yaklaşım", "Günler"],
                        ["Şantiye saha ofisi", "Hafif çelik geçici yapı", "Hızlı kurulum uyumlu", "Kısa süreli"],
                        ["Vardiya barınma birimi", "Tek katlı çelik yapı", "Standart dikey erişim", "Kısa süreli"],
                    ],
                },
            },
            {
                baslik: "Montaj ile mevcut üretim arasındaki sınır",
                paragraflar: [
                    "Santral genişletme çalışırken mevcut santral genellikle üretime devam eder; bu, yeni iskeletin montaj alanı ile mevcut üretim alanının net bir sınırla ayrılmasını gerektirir. Platform, bu sınırın içinde kalarak çalışır ve mevcut ekipmana (özellikle çalışan konveyör bant hattına) güvenli mesafeyi korur; sınır, montaj başlamadan önce santral yetkilisiyle birlikte fiziksel olarak işaretlenir.",
                    "Bu ayrım, hem montaj ekibinin hem santral personelinin güvenliği için önemlidir; sınır ihlali riski taşıyan bir durumda (örneğin rüzgârla sepetin sınıra yaklaşması) iş geçici olarak durdurulur ve konum yeniden değerlendirilir.",
                ],
            },
            {
                baslik: "Açık arazide rüzgâr takibi ve montaj takvimi",
                paragraflar: [
                    "Şehir dışındaki santral ve büyük şantiye sahalarında rüzgâr, kapalı bir sanayi holüne göre daha değişken ve daha güçlü olabilir; bu yüzden çelik montaj takvimimiz genellikle hava tahminine göre esnek tutulur ve rüzgârlı günler için alternatif iş (örneğin zeminde hazırlanabilecek kaynak işleri) planlanır. Rüzgâr sınırı aşıldığında sepet güvenli konuma indirilir ve iş sakin bir pencerede devam eder; bu, montaj süresini bazen birkaç gün uzatabilir ama güvenlik açısından taviz verilmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo montajı sırasında iskelet henüz tamamlanmadı, platform buna göre nasıl konumlanıyor?",
                cevap:
                    "İskelet tamamlanmadığı için platform, iskeletin dışında kendi bağımsız zemininde durur ve bomunu iskelete doğru uzatır; iskeletin üzerine veya içine binmez. İskelet yükseldikçe platformun kendi konumu da (gerekirse) mesafe ve açı olarak yeniden ayarlanır; bu, montaj ekibinin ustabaşısıyla günlük koordinasyonla yapılır.",
            },
            {
                soru: "Mevcut santral üretim yaparken yeni silo montajı güvenli mi?",
                cevap:
                    "Güvenli olması için montaj alanı ile üretim alanı arasında net bir fiziksel sınır kurulması şarttır; bu sınır montaj başlamadan önce santral yetkilinizle birlikte belirlenir ve platform bu sınırın dışına çıkmaz. Sınır belirlenmeden veya işaretlenmeden montaja başlamayız çünkü bu, hem montaj ekibi hem üretim personeli için risk taşır.",
            },
            {
                soru: "Şantiye saha ofisimiz için çelik montaj çok kısa sürecek, yine de platform kiralamaya değer mi?",
                cevap:
                    "Kısa süreli bir montaj için bile sabit iskele kurup sökmek genellikle platform kiralamaktan daha yavaş ve emek yoğun olur; bu yüzden birkaç günlük geçici yapı montajlarında platform genellikle daha hızlı bir çözümdür. Kesin karar, yapının yüksekliği ve montaj kapsamına bağlıdır; küçük bir yapı için en uygun makine sınıfını ilk keşifte birlikte belirleriz.",
            },
            {
                soru: "Açık arazide rüzgâr çok değişken, montaj takvimini nasıl planlıyorsunuz?",
                cevap:
                    "Hava tahminini takip ederek rüzgârlı günler için zeminde hazırlanabilecek alternatif işleri öne alırız, yüksekte çalışma gerektiren kısımları sakin günlere denk getirmeye çalışırız. Rüzgâr aniden arttığında iş anında durur ve sepet indirilir; bu, montaj süresini bazen birkaç gün uzatabilir ama güvenlik açısından bir istisna yapılmaz.",
            },
            {
                soru: "Konveyör köprüsü eklerken mevcut banda zarar verme riski var mı?",
                cevap:
                    "Bu riski en aza indirmek için platform, mevcut banda güvenli mesafeyi koruyacak bir açıdan yaklaşır ve operatörümüz banda temas riski taşıyan hareketlerden kaçınır. Kesişim noktası dar olduğunda, mümkünse bandın kısa süreliğine durdurulması istenir; bu, hem montaj hassasiyetini artırır hem çarpma riskini ortadan kaldırır.",
            },
            {
                soru: "Montaj ekibimiz büyük, birden fazla seviyede aynı anda çalışıyor; tek platform yeterli mi?",
                cevap:
                    "Tek platform, aynı anda yalnızca bir seviyeye erişim sağlayabildiği için, birden fazla seviyede paralel çalışan büyük bir ekip için ikinci bir makine gerekebilir. Ekip büyüklüğünüzü ve kaç seviyede aynı anda çalışıldığını paylaşırsanız, tek makinenin yeterli olup olmadığını veya ikinci bir makinenin gerekip gerekmediğini birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Hazır beton santrallerinin silo/konveyör genişletmesi ve büyük şantiyelerin geçici çelik saha ofisi/barınma yapıları kurduğu, inşaat ve sanayi sektöründe genel bilinen bir pratiktir; belirli bir santral veya şantiye adı kullanılmamıştır. Sınır işaretleme ve kademeli yükseklik takibi firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Hazır Beton Santrali Agrega ve Kum-Çakıl Silosu Sahasında Platform Kiralama",
        giris:
            "Kütahya'da 'silo' denince akla ilk gelen genellikle tarımsal hububat deposu olsa da, hazır beton santrallerinin agrega, kum ve çakıl stoklamak için kullandığı silo ve bunker yapıları da ilin sanayi silosu profilinin önemli bir parçasıdır. Bu iki silo tipi farklı sektörlere ait olsa da, platform kiralama açısından benzer bir erişim sorunu paylaşır: dikey yapı, üst dolum ağzı ve besleme bandı bağlantısı gibi hedeflere düz uzanan bir bomla ulaşmak. Bu sayfa, hazır beton santrali agrega silosu ve açık stok sahasındaki platform kullanımını ele alır; santralin iç kısmındaki konveyör ve karışım ünitesi bakımı iç mekân sayfamızın konusudur, burada odak açık sahadaki silo ve stok yığınlarıdır.",
        maddeler: [
            {
                baslik: "Agrega silosu üst dolum ağzı erişimi",
                metin:
                    "Kum ve çakıl silosunun üst dolum ağzı, malzemenin kamyon veya bantla üstten dökülmesi için açık bırakılan bir noktadır; bu noktanın çevresindeki metal koruma ızgarası veya seviye göstergesi zamanla aşınabilir ve kontrol gerektirir. Platform, silo çevresindeki açık sahadan bomunu dikey uzatarak bu üst noktaya erişim sağlar; silo tepesi genellikle dar bir çalışma alanı sunduğu için sepetin konumu dikkatle ayarlanır.",
            },
            {
                baslik: "Açık stok yığını üzerindeki besleme bandı bakımı",
                metin:
                    "Bazı santrallerde agrega, kapalı bir silo yerine açık bir stok yığını hâlinde tutulur ve buradan bir besleme bandıyla karışım ünitesine taşınır; bu bandın yığın üzerindeki bölümü, zeminden değil yığının kendisinden erişilmesi gereken bir noktadır. Platform, yığının yanına konumlanıp bandın üstündeki bakım noktasına ulaşır; yığının kendisi düzensiz ve kaygan olabileceği için platform doğrudan yığının üzerine çıkmaz, yanından erişir.",
            },
            {
                baslik: "Toz kontrolü ve rüzgârlı günlerde çalışma",
                metin:
                    "Açık agrega ve kum stok sahaları, rüzgârlı günlerde toz kaldırabilir; bu hem görüş mesafesini hem platform operatörünün çalışma konforunu etkiler. Yoğun tozlu günlerde iş mümkünse ertelenir veya rüzgârın göreli sakin olduğu saatlere kaydırılır; bu, hem operatör sağlığı hem iş kalitesi açısından tercih edilir.",
            },
            {
                baslik: "Zemin taşıma gücü ve stok sahası düzensizliği",
                metin:
                    "Agrega stok sahasının zemini, sürekli kamyon ve yükleyici trafiğiyle düzensiz hâle gelebilir; tekerlekli veya paletli iz bırakan çukurlar, platformun düz durmasını zorlaştırabilir. Platform sahaya girmeden önce zemin genellikle gözle kontrol edilir, gerekirse daha düzgün bir noktaya konumlanır; ciddi çukurlu bir zeminde çalışma, santral yetkilisinden geçici düzeltme istenerek ertelenebilir.",
            },
            {
                baslik: "Bunker altı besleme kapağı kontrolü",
                metin:
                    "Silonun alt kısmındaki besleme kapağı ve titreşimli besleyici, malzeminin bant hattına düzenli akmasını sağlayan kritik bir noktadır; bu nokta genellikle yerden erişilebilir ama üstündeki muayene kapağı veya sensör bazen daha yüksek bir konumda olabilir. Bu tip ara yükseklikteki noktalar için platform, tam silo tepesi kadar yüksek olmayan ama zeminden de erişilemeyen bir aralığı kapatır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Agrega silosu ve stok sahasında erişim noktaları",
                paragraflar: [
                    "Aşağıdaki tablo, hazır beton santrali agrega/kum-çakıl sahasındaki başlıca erişim noktalarını özetler.",
                ],
                tablo: {
                    basliklar: ["Erişim noktası", "Yükseklik profili", "Zemin koşulu", "Hava hassasiyeti"],
                    satirlar: [
                        ["Silo üst dolum ağzı", "Tam yükseklik", "Sabit beton platform", "Rüzgâra orta hassas"],
                        ["Açık yığın üstü bant", "Değişken (yığın boyuna göre)", "Düzensiz agrega yüzeyi", "Toza yüksek hassas"],
                        ["Bunker altı kapak", "Orta yükseklik", "Sabit zemin", "Düşük hassasiyet"],
                        ["Stok sahası genel", "Düşük-orta", "Kamyon iziyle düzensiz", "Rüzgârda toz riski"],
                    ],
                },
            },
            {
                baslik: "Tarımsal silo ile sanayi silosu farkı — karışıklığı önlemek",
                paragraflar: [
                    "Kütahya'da 'silo bakımı' talebi geldiğinde, önce tarımsal hububat silosu mu yoksa hazır beton santrali agrega silosu mu kastedildiğini netleştiririz çünkü bu iki yapı farklı ölçek, farklı zemin ve farklı erişim mantığına sahiptir. Tarımsal silo genellikle daha ince duvarlı ve tarım arazisi zemininde bulunurken, sanayi silosu daha ağır beton temelli ve santral iç trafiğine bitişiktir. Bu ayrım netleşmeden gönderilen bir makine, yanlış sınıfta veya yanlış zemin varsayımıyla sahaya ulaşabilir; bu yüzden ilk görüşmede hangi tip silodan bahsedildiği mutlaka teyit edilir.",
                ],
            },
            {
                baslik: "Santral üretim programıyla stok sahası erişiminin çakışması",
                paragraflar: [
                    "Agrega stok sahası, santralin üretim yaptığı saatlerde sürekli yükleyici ve kamyon trafiğine açıktır; platformun bu sahada çalışması, bu trafikle çakışmayacak bir zaman dilimine denk getirilir. Genellikle üretim programının göreli sakin olduğu saatler tercih edilir; bu saat santral yetkilisiyle birlikte belirlenir ve platform o pencerede sahaya girer, iş bitince alanı hızlıca boşaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bizim siloumuz tarım silosu değil, beton santrali agrega silosu; aynı hizmeti mi veriyorsunuz?",
                cevap:
                    "Evet, agrega silosu için de platform hizmeti veriyoruz ama bu, tarımsal silodan farklı bir erişim mantığı gerektirir; santral silosunun zemini genellikle beton, tarımsal silonunki ise toprak veya çakıl olabilir. İlk görüşmede hangi tip silodan bahsettiğinizi netleştirmemiz, doğru makine sınıfı ve doğru zemin varsayımıyla gelmemizi sağlar.",
            },
            {
                soru: "Stok yığınının üzerine platform çıkabilir mi, yoksa sadece yanından mı çalışıyorsunuz?",
                cevap:
                    "Genellikle yığının üzerine çıkmayız çünkü agrega yüzeyi düzensiz ve kaygan olabilir, bu da platformun dengesini bozabilir; bunun yerine yığının yanına konumlanıp bomu üzerine doğru uzatırız. Yığının şekli ve besleme bandının konumu çok özel bir yaklaşım gerektiriyorsa, bunu ilk keşifte sahayı görerek değerlendiririz.",
            },
            {
                soru: "Toz nedeniyle görüş kötüyse iş yine de yapılabilir mi?",
                cevap:
                    "Yoğun toz operatörün görüşünü ve iş kalitesini olumsuz etkileyebileceği için, mümkünse rüzgârın göreli sakin olduğu bir saate ertelemenizi öneririz. Ertelenemeyecek acil bir durum varsa, operatörümüz ek koruyucu ekipmanla ve daha yavaş bir tempoyla çalışmayı sürdürebilir, ancak bu ideal koşul değildir.",
            },
            {
                soru: "Stok sahasının zemini kamyon izleriyle çukurlu, platform buraya girebilir mi?",
                cevap:
                    "Ciddi çukurlu bir zeminde platform dengesini kaybedebileceği için, önce zemini gözle kontrol ederiz ve gerekirse daha düzgün bir noktaya konumlanırız. Çukurlar çok yoğunsa, santral yetkilinizden geçici bir düzeltme (dolgu veya greyder geçişi) istenmesini öneririz; bu, hem güvenlik hem işin hızlı tamamlanması açısından faydalıdır.",
            },
            {
                soru: "Silo üstü dolum ağzına ne sıklıkla bakım gerekir, siz bunu planlıyor musunuz?",
                cevap:
                    "Bakım sıklığı santralin kendi kullanım yoğunluğuna ve ekipman yaşına bağlıdır, bu konuda kesin bir program biz belirlemeyiz; santralinizin kendi bakım takvimine göre ihtiyaç duyduğunuzda bizi çağırırsınız. İsterseniz yıllık veya mevsimlik bir kontrol döngüsü kurmanızı önerebiliriz, bu düzenli bir hatırlatma ve planlama kolaylığı sağlar.",
            },
            {
                soru: "Santral üretim yaparken stok sahasında platform çalıştırmak güvenli mi?",
                cevap:
                    "Üretim saatlerinde stok sahası yoğun kamyon ve yükleyici trafiğine açık olduğu için, bu trafikle çakışmayacak bir zaman dilimi seçilmesi güvenlik açısından önemlidir. Santral yetkilinizle üretim programının göreli sakin olduğu bir saati belirleyip o pencerede çalışırız; tamamen üretim dışı bir saat bulmak her zaman mümkün olmayabilir ama trafiğin en az olduğu dilim tercih edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Hazır beton santrallerinin agrega/kum-çakıl stoklamak için silo ve açık stok sahası kullandığı, sektörde genel bilinen teknik bir gerçektir; belirli bir santral adı veya rakam kullanılmamıştır. Silo tipi teyidi ve üretim programıyla koordinasyon firma pratiğidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Şantiye Sahası, Agrega Tesisi ve Toplu Konut Ortak Alan Aydınlatma-Bakım Platformu",
        giris:
            "İnşaat sektöründe aydınlatma ve enerji hattı bakımı üç farklı yüz alır: büyük bir şantiyenin gece çalışması için kurulan direk aydınlatması, hazır beton santralinin agrega tesisi ve konveyör hattı çevresindeki üretim aydınlatması ve toplu konut projesinin teslim aşamasına yaklaşırken devreye giren ortak alan-peyzaj aydınlatması. Bu üç durumun ortak paydası, işin çoğunlukla değişken bir sahada ve bazen enerjili bir hat yakınında geçmesidir; ama her biri farklı bir zamanlama ve farklı bir öncelik taşır. Bu sayfa, enerji ve aydınlatma bakım hizmetimizin bu üç senaryoda nasıl uygulandığını anlatır.",
        maddeler: [
            {
                baslik: "Şantiye direk aydınlatmasının kurulum ve bakımı",
                metin:
                    "Büyük şantiyelerde gece veya erken sabah çalışması gerektiğinde, saha genelinde geçici direk aydınlatması kurulur; bu direklerin armatür değişimi veya kablo bağlantı kontrolü, şantiyenin farklı noktalarına dağılmış çok sayıda direk olduğu için tek tek dolaşılarak yapılır. Platform, bir direkten diğerine ilerleyerek bu dolaşımı hızlandırır; direk sayısı fazlaysa iş birkaç güne yayılabilir.",
            },
            {
                baslik: "Agrega tesisi ve konveyör hattı üretim aydınlatması",
                metin:
                    "Hazır beton santralinin agrega tesisi ve konveyör hattı çevresi, gece vardiyası çalışan santrallerde sürekli aydınlık tutulması gereken bir bölgedir; bu bölgedeki armatürler toz ve titreşime maruz kaldığı için standart bir sanayi aydınlatmasından daha sık arıza verebilir. Platform, konveyör hattı boyunca ilerleyerek her armatür noktasına erişir; bakım genellikle santralin bakım penceresine denk getirilir.",
            },
            {
                baslik: "Toplu konut ortak alan ve peyzaj aydınlatması",
                metin:
                    "Toplu konut projesi teslim aşamasına yaklaştığında, blok arası yürüyüş yolu, otopark ve peyzaj alanlarındaki kalıcı aydınlatma direkleri devreye girer; bu direklerin montajı ve ilk kontrolü, projenin teslim öncesi son iş kalemlerinden biridir. Platform, bu direklerin üst kısmındaki armatür montajı ve kablo bağlantısı için kullanılır; iş genellikle teslim tarihine yakın yoğun bir programla ilerler.",
            },
            {
                baslik: "Enerjili hat yakınında güvenlik protokolü",
                metin:
                    "Şantiye veya santral sahasında bazı aydınlatma-enerji hatları çalışır durumda tutulur; bu hatlara yakın çalışırken elektrik kesme prosedürü uygulanır — mümkünse hat geçici olarak kesilir, kesilemiyorsa güvenli mesafe korunur ve izole ekipman kullanılır. Bu protokol, iş başlamadan önce sahanın elektrik sorumlusuyla birlikte netleştirilir.",
            },
            {
                baslik: "Mevsimsel ve teslim takvimine bağlı yoğunluk",
                metin:
                    "Toplu konut projelerinde aydınlatma işleri genellikle teslim tarihine yakın yoğunlaşırken, şantiye direk aydınlatması inşaatın başından itibaren sürekli bir ihtiyaçtır ve santral aydınlatması yıl boyunca dağılan bir bakım döngüsüne sahiptir. Bu üç farklı ritim, talep geldiğinde hangi senaryodan bahsedildiğinin netleşmesini ve buna göre bir zamanlama kurulmasını gerektirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Senaryoya göre aydınlatma-bakım işi karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, üç farklı senaryodaki aydınlatma-bakım işinin ortam ve zamanlama farkını özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Ortam", "Belirleyici koşul", "Zamanlama"],
                    satirlar: [
                        ["Şantiye direk aydınlatması", "Değişken açık saha", "Direk sayısı, dağınıklık", "İnşaat boyunca sürekli"],
                        ["Santral üretim aydınlatması", "Toz, titreşim", "Vardiya sürekliliği", "Bakım penceresine göre"],
                        ["Toplu konut ortak alan", "Peyzaj, yürüyüş yolu", "Teslim yakınlığı", "Teslim öncesi yoğun"],
                    ],
                },
            },
            {
                baslik: "Elektrik kesme-emniyet prosedürünün işleyişi",
                paragraflar: [
                    "Enerjili bir hat yakınında çalışırken, öncelikli tercih hattın geçici olarak kesilmesidir; bu kesme işlemi santral veya şantiyenin elektrik sorumlusu tarafından yapılır ve kesildiği operatörümüze açıkça teyit edilmeden çalışma başlamaz. Hat kesilemiyorsa (örneğin sürekli üretim gerektiren bir hat), güvenli mesafe korunur ve izole ekipman kullanılır; bu durumda iş normalden daha yavaş ve daha dikkatli ilerler.",
                    "Bu prosedür, hem şantiye hem santral sahalarında aynı titizlikle uygulanır; farklılık yalnızca kimin elektrik sorumlusu olduğunda ve kesme yetkisinin kimde bulunduğundadır.",
                ],
            },
            {
                baslik: "Teslim öncesi yoğun dönemde planlama önerisi",
                paragraflar: [
                    "Toplu konut projelerinde ortak alan aydınlatması genellikle teslim tarihine yakın diğer birçok iş kalemiyle (peyzaj, asfalt, tabela) aynı döneme denk gelir; bu yoğunlukta platform talebini son haftaya bırakmak, kapasite bulma şansını azaltabilir. Mümkünse teslim tarihinden birkaç hafta önce aydınlatma direği montajının planlanmasını öneririz; bu, hem bizim tarafımızda hem şantiyenizin genel programında daha rahat bir sıralama sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemizde yirmiden fazla direk var, hepsini tek seferde mi kontrol ediyorsunuz?",
                cevap:
                    "Direk sayısı fazlaysa işi genellikle birkaç güne yayarız; platform bir direkten diğerine ilerleyerek dolaşır ve her direkte armatür ve bağlantı kontrolü yapılır. Direklerin şantiye içindeki dağılımını (yakın mı, birbirinden uzak mı) önceden bilmemiz, iş süresini daha isabetli tahmin etmemizi sağlar.",
            },
            {
                soru: "Santralimizde gece vardiyası sürekli çalışıyor, aydınlatma bakımı için ne zaman uygun bir pencere buluruz?",
                cevap:
                    "Gece vardiyası sürekli olsa da genellikle vardiya değişim saatleri veya üretim programının göreli sakinleştiği bir dilim bulunabilir; bu saati santralinizin yetkilisiyle birlikte belirleriz. Tamamen kesintisiz bir üretim söz konusuysa, bakımı bölümler hâlinde (bir seferde birkaç armatür) planlayarak toplam kesintiyi en aza indiririz.",
            },
            {
                soru: "Ortak alan aydınlatma direklerini teslim tarihine çok yakın bildirdik, yetişir mi?",
                cevap:
                    "Teslim tarihine çok yakın bildirilen işlerde kapasite bulma riski artar çünkü bu dönem genellikle birçok şantiyede aynı anda yoğunlaşır; yine de elimizdeki kapasiteye göre mümkün olan en hızlı planı yaparız. Bir dahaki sefere birkaç hafta önceden bildirmeniz, daha rahat bir sıralama ve daha düşük acil iş riski sağlar.",
            },
            {
                soru: "Enerjili bir hattı kesmeden çalışabilir misiniz, yoksa mutlaka kesilmesi mi gerekiyor?",
                cevap:
                    "Mümkünse hattın kesilmesini tercih ederiz çünkü bu en güvenli yöntemdir; kesilemeyen sürekli üretim hatlarında güvenli mesafe koruyarak ve izole ekipman kullanarak çalışabiliriz, ancak bu durumda iş normalden daha yavaş ilerler ve ek dikkat gerektirir. Hangi yöntemin uygulanacağı, işe başlamadan önce sahanın elektrik sorumlusuyla birlikte netleştirilir.",
            },
            {
                soru: "Şantiye direk aydınlatması ile santral aydınlatması aynı fiyata mı geliyor?",
                cevap:
                    "Fiyat, işin kapsamına (direk sayısı, mesafe, süre) göre değişir, sektöre göre sabit bir fiyat farkı yoktur. Şantiye direk dolaşımı genellikle daha fazla noktayı kapsadığı için toplam süre uzayabilirken, santral aydınlatması daha yoğun ama daha az noktalı olabilir; her iki durumda da teklif, sahayı ve iş kapsamını gördükten sonra netleşir.",
            },
            {
                soru: "Peyzaj aydınlatma direklerinin montajını biz mi, siz mi yapıyorsunuz — sadece erişim mi sağlıyorsunuz?",
                cevap:
                    "Standart hizmetimiz platform ve operatör erişimidir; direğin elektrik bağlantısını genellikle şantiyenizin veya alt yüklenicinizin elektrik ekibi yapar, biz onlara yükseklikte güvenli bir çalışma alanı sağlarız. Talep edilirse, kendi ekibimizle birlikte montaj işini de üstlenebiliriz; bu durumda kapsamı teklif aşamasında netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Şantiyelerde geçici direk aydınlatması kurulduğu, hazır beton santrallerinde üretim aydınlatmasının toz-titreşime maruz kaldığı ve toplu konut projelerinde teslim öncesi ortak alan aydınlatmasının son iş kalemlerinden biri olduğu, inşaat sektöründe genel bilinen bir pratiktir; belirli bir şantiye veya santral adı kullanılmamıştır. Elektrik kesme-emniyet prosedürü ve teslim öncesi planlama önerisi firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Şantiye ve TOKİ İhalesi Şartnamesinde Operatörlü Platform Kiralama Zorunluluğu",
        giris:
            "Büyük ölçekli toplu konut ve TOKİ ihalelerinde, yükseklikte çalışma ekipmanı kiralaması genellikle şartname maddeleriyle sınırlandırılır; birçok ihale, platformun yalnızca sertifikalı ve yetkilendirilmiş bir operatör eşliğinde kullanılmasını zorunlu tutar. Bu zorunluluk, şantiyenin kendi iş güvenliği politikasından da kaynaklanabilir — bazı yükleniciler, kendi personelinin platform kullanmasına izin vermek yerine, her zaman dışarıdan sertifikalı bir operatör talep eder. Bu sayfa, operatörlü ve operatörsüz kiralama arasındaki farkı, şantiye ve ihale bağlamında hangi durumda hangisinin tercih edildiğini ve operatör sertifikasyonunun nasıl doğrulandığını anlatır.",
        maddeler: [
            {
                baslik: "İhale şartnamesinde operatörlü kiralama şartı",
                metin:
                    "Kamu ihaleli toplu konut projelerinde, teknik şartname genellikle yükseklikte çalışma ekipmanının 'operatörlü' temin edilmesini şart koşar; bu, hem iş güvenliği sorumluluğunu netleştirmek hem de kullanım hatasından kaynaklanan kaza riskini azaltmak içindir. Bu şart varsa, yüklenici firma kendi personeline platform kullandıramaz, bizim sertifikalı operatörümüz makineyi bizzat kullanır ve iş bu şekilde teslim edilir.",
            },
            {
                baslik: "Operatör sertifikası ve yeterlilik belgesi doğrulaması",
                metin:
                    "Operatörümüzün platform kullanım sertifikası ve iş güvenliği eğitim belgesi, talep edildiğinde şantiye yönetimine veya ihale kontrol ekibine sunulur; bazı büyük şantiyelerde bu belge girişte fiziksel olarak kontrol edilir ve şantiyenin kendi kayıt sistemine işlenir. Belge güncelliği (süresi dolmamış olması) düzenli olarak takip edilir; bu, hem yasal uyum hem şantiyenin denetim süreçlerinde sorun yaşamaması için önemlidir.",
            },
            {
                baslik: "Operatörsüz kiralamanın şantiyede sınırlı kullanımı",
                metin:
                    "Küçük ölçekli veya özel sektör şantiyelerinde, deneyimli bir ekip üyesi varsa operatörsüz kiralama da mümkündür; ancak bu durumda kullanıcının platform kullanım eğitimi aldığını gösteren bir belge genellikle istenir. Büyük ölçekli veya kamu ihaleli projelerde bu seçenek neredeyse hiç sunulmaz çünkü şartname buna izin vermez; bu yüzden proje tipi netleşmeden operatörlü mü operatörsüz mü sorusuna kesin cevap verilmez.",
            },
            {
                baslik: "Vardiya süresi ve operatör değişimi",
                metin:
                    "Büyük şantiyelerde iş bazen tek vardiyayı aşan bir süreye yayılabilir; bu durumda operatör değişimi (vardiya sonunda bir operatörün diğerine devretmesi) önceden planlanır ve devir sırasında makinenin o ana kadarki durumu (yakıt/şarj, arıza varsa) yeni operatöre aktarılır. Bu, işin sürekliliğini bozmadan operatör yorgunluğunu da önlemiş olur.",
            },
            {
                baslik: "Operatörün şantiye iş güvenliği kurallarına uyumu",
                metin:
                    "Sertifikalı olması, operatörün otomatik olarak her şantiyenin kendine özgü kuralına aşina olduğu anlamına gelmez; bu yüzden operatörümüz her yeni şantiyede kısa bir oryantasyon sürecinden geçer ve şantiyenin giriş-çıkış, kişisel koruyucu donanım ve acil durum prosedürlerini öğrenir. Bu oryantasyon genellikle ilk gün birkaç saat sürer ve şantiye yönetimi tarafından yürütülür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proje tipine göre operatör gereksinimi",
                paragraflar: [
                    "Aşağıdaki tablo, farklı proje tiplerinde operatörlü kiralamanın zorunlu mu tercihe bağlı mı olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Proje tipi", "Operatör şartı", "Belge kontrolü", "Tipik gerekçe"],
                    satirlar: [
                        ["Kamu ihaleli TOKİ projesi", "Genellikle zorunlu", "Şantiye girişinde", "Şartname maddesi"],
                        ["Büyük özel şantiye", "Sıklıkla zorunlu", "Yüklenici talebiyle", "Kurumsal iş güvenliği politikası"],
                        ["Küçük özel şantiye", "Tercihe bağlı", "İş bazında", "Maliyet-esneklik dengesi"],
                        ["Hazır beton santrali (kendi bakımı)", "Tercihe bağlı", "İş bazında", "Deneyimli personel varsa"],
                    ],
                },
            },
            {
                baslik: "İhale şartnamesinde operatörlü ibaresi geçtiğinde ne yapılır",
                paragraflar: [
                    "Şartnamede 'operatörlü' ibaresi geçen bir projede teklif verirken, bu şartı doğrudan fiyata ve sözleşmeye yansıtırız; operatörsüz bir teklif sunulmaz çünkü bu, ihale şartına aykırı olur ve şantiyenin denetim sürecinde sorun çıkarabilir. Şartnamenin tam metnini paylaşmanız, hangi belgelerin (sertifika, sigorta, sağlık raporu gibi) talep edildiğini netleştirmemizi ve bunları önceden hazırlamamızı sağlar.",
                    "Bazı ihalelerde operatör belgelerinin ihale dosyasına eklenmesi de istenebilir; bu durumda belgeleri işe başlamadan önce, ihale sürecinin zamanlamasına uygun şekilde iletiriz.",
                ],
            },
            {
                baslik: "Operatör değişikliği ve süreklilik",
                paragraflar: [
                    "Uzun süreli bir şantiye işinde aynı operatörün sürekli görev yapması, hem şantiye ekibiyle kurulan iş birliğinin devamlılığı hem de sahaya aşinalık açısından tercih edilir; ancak izin, hastalık veya vardiya değişimi gibi durumlarda operatör değişikliği kaçınılmaz olabilir. Böyle bir durumda yeni operatör, devraldığı işin durumunu (hangi noktalar tamamlandı, hangi noktalar kaldı) önceki operatörden veya şantiye şefinden teslim alarak işe devam eder; bu geçiş genellikle iş akışını kesintiye uğratmayacak şekilde planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İhale şartnamemizde 'operatörlü platform' yazıyor, bu tam olarak ne anlama geliyor?",
                cevap:
                    "Bu ibare, platformun yalnızca bizim sertifikalı operatörümüz tarafından kullanılabileceği, şantiye personelinizin makineyi bizzat kullanamayacağı anlamına gelir. Operatörümüz işi baştan sona kendisi yürütür, sizin ekibiniz yalnızca hangi noktalara erişim gerektiğini yönlendirir. Bu, hem sorumluluğu netleştirir hem şartname uyumluluğunu sağlar.",
            },
            {
                soru: "Operatörünüzün sertifikasını ihale dosyasına ekleyebilir miyiz?",
                cevap:
                    "Evet, operatör sertifikası ve iş güvenliği eğitim belgesini talep etmeniz hâlinde paylaşırız; ihale sürecinin zamanlamasına göre belgeleri erken iletmemiz gerekiyorsa, bu ihtiyacı önceden bildirmeniz belgelerin zamanında hazır olmasını sağlar. Belgelerin güncel (süresi dolmamış) olmasına dikkat ederiz.",
            },
            {
                soru: "Küçük bir özel şantiyeyiz, kendi ekibimiz platformu kullanabilir mi?",
                cevap:
                    "Küçük özel şantiyelerde bu genellikle mümkündür, ancak kullanıcının platform kullanım eğitimi aldığını gösteren bir belge istenir ve şantiyenizin kendi iş güvenliği politikasının buna izin vermesi gerekir. Politikanız veya sigortanız operatörlü kiralamayı şart koşuyorsa, bu durumda operatörsüz seçenek sunulmaz; bu konuyu ilk görüşmede netleştirmenizi öneririz.",
            },
            {
                soru: "İşimiz vardiyayı aşan bir süreye yayılırsa operatör değişir mi, iş yarıda mı kalır?",
                cevap:
                    "İş yarıda kalmaz; vardiya sonunda bir operatörümüz görevi diğerine devreder ve makinenin o ana kadarki durumu (tamamlanan noktalar, varsa küçük arıza notu) yeni operatöre aktarılır. Bu devir işlemi genellikle kısa sürer ve iş akışını kesintiye uğratmayacak şekilde planlanır; sizin tarafınızdan ek bir işlem gerekmez.",
            },
            {
                soru: "Operatörünüz bizim şantiyenin özel kurallarını (örneğin belirli bir güzergâh yasağı) nasıl öğrenir?",
                cevap:
                    "Operatörümüz her yeni şantiyede kısa bir oryantasyon sürecinden geçer; bu süreçte şantiyenizin giriş-çıkış prosedürü, kişisel koruyucu donanım şartı ve varsa özel güzergâh kısıtlamaları öğrenilir. Bu oryantasyonu genellikle şantiye yönetiminiz yürütür, biz operatörümüzün bu sürece tam katılmasını sağlarız; özel bir kural varsa işe başlamadan önce bize de ayrıca bildirmeniz faydalı olur.",
            },
            {
                soru: "Operatörlü kiralama operatörsüze göre ne kadar daha pahalıya geliyor?",
                cevap:
                    "Fark, operatörün çalışma süresine ve işin kapsamına göre değişir, sabit bir oran vermek doğru olmaz; ancak kamu ihaleli projelerde bu fark genellikle şartname zaten operatörlü kiralamayı zorunlu kıldığı için bir karşılaştırma konusu olmaktan çıkar. Özel sektör şantiyelerinde, operatörlü ve operatörsüz seçeneklerin maliyet farkını işin kapsamını gördükten sonra netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kamu ihaleli toplu konut/TOKİ projelerinde teknik şartnamelerin yükseklikte çalışma ekipmanı için genellikle operatörlü kiralama şartı koştuğu, inşaat ve kamu ihale sektöründe genel bilinen bir pratiktir; belirli bir ihale veya proje adı kullanılmamıştır. Belge doğrulama ve oryantasyon süreci firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Bloklu Toplu Konut Şantiyesinde Çok Noktalı Rota Bakım Platformu",
        giris:
            "Büyük bir toplu konut projesi, tek bir bina değil, genellikle onlarca bloktan oluşan geniş bir alana yayılır; bu bloklarda bitirme işleri aynı anda değil, kademeli bir teslim programına göre ilerler — bir grup blok bu ay teslim edilirken, başka bir grup henüz sıva aşamasındadır. Bu durum, tek bir platformun tek bir noktada değil, şantiye içindeki birden fazla blok arasında önceden planlanmış bir rotayla dolaşmasını gerektirir. Bu sayfa, çok noktalı rota bakım hizmetimizin toplu konut şantiyelerindeki bu kullanımını — rota sıralamasının nasıl kurulduğunu ve teslim programına göre nasıl güncellendiğini — anlatır.",
        maddeler: [
            {
                baslik: "Blok teslim önceliğine göre rota sıralaması",
                metin:
                    "Bir toplu konut projesinde bloklar genellikle teslim sırasına göre gruplanır; ilk teslim edilecek bloklar cephe ve ortak alan işlerinde önceliklidir. Platform rotamız bu önceliğe göre kurulur — önce teslim tarihine en yakın bloklar dolaşılır, ardından daha geriden gelen bloklara geçilir. Bu sıralama, şantiye yönetiminin güncel teslim programına göre haftalık olarak yeniden değerlendirilir.",
            },
            {
                baslik: "Blok arası taşıma süresi ve günlük iş kapasitesi",
                metin:
                    "Bloklar arası mesafe kısa olsa da, platformun bir bloktan diğerine taşınması (özellikle şantiye içi malzeme trafiğiyle paylaşılan dar yollarda) zaman alır; bu taşıma süresi, bir günde kaç blok ziyaret edilebileceğini doğrudan etkiler. Rota planlanırken, blok başına gereken iş süresi ile bloklar arası taşıma süresi birlikte hesaplanır; günlük kapasite bu iki değişkene göre belirlenir.",
            },
            {
                baslik: "Aynı anda birden fazla makine ile paralel rota",
                metin:
                    "Şantiye çok büyükse veya teslim programı sıkışıksa, tek bir platformun tüm blokları tek başına dolaşması yetersiz kalabilir; bu durumda birden fazla makine, şantiyeyi bölgelere ayırarak paralel rotalar izler. Her makinenin kendi bölgesi ve kendi rota sırası olur; bu, toplam süreyi kısaltır ama koordinasyon ihtiyacını artırır.",
            },
            {
                baslik: "Beklenmedik değişiklik: teslim tarihi öne alınan blok",
                metin:
                    "Şantiye planları sabit kalmaz; bazen bir blok, satış veya kurumsal nedenlerle beklenenden önce teslim edilmek istenebilir. Bu tip bir değişiklik bildirildiğinde, mevcut rota bu bloğu öne alacak şekilde yeniden düzenlenir; bu, planlanan diğer blokların sırasını kısmen kaydırabilir ama acil önceliğe göre esnetilir.",
            },
            {
                baslik: "Rota sonunda toplu raporlama",
                metin:
                    "Çok noktalı bir rota tamamlandığında, hangi bloklarda hangi işlerin yapıldığı, hangi noktaların ek iş gerektirdiği toplu bir şekilde şantiye yönetimine iletilir; bu, tek tek blok raporları yerine bütün rotanın özetini tek seferde görmelerini sağlar. Bu raporlama, bir sonraki rota turunun planlanmasında da referans olarak kullanılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında dikkate alınan değişkenler",
                paragraflar: [
                    "Aşağıdaki tablo, çok bloklu şantiyede rota planlamasını belirleyen değişkenleri özetler.",
                ],
                tablo: {
                    basliklar: ["Değişken", "Etkisi", "Güncelleme sıklığı", "Kim belirler"],
                    satirlar: [
                        ["Blok teslim önceliği", "Ziyaret sırası", "Haftalık", "Şantiye yönetimi"],
                        ["Bloklar arası mesafe", "Taşıma süresi", "Sabit (şantiye düzenine göre)", "Saha planına göre"],
                        ["Blok başına iş süresi", "Günlük kapasite", "İşe göre değişken", "Ortak değerlendirme"],
                        ["Acil öncelik değişikliği", "Rota yeniden sıralama", "Anlık", "Şantiye yönetimi bildirir"],
                    ],
                },
            },
            {
                baslik: "Paralel rota koordinasyonu nasıl işler",
                paragraflar: [
                    "Birden fazla makine paralel çalıştığında, her makinenin operatörü kendi bölgesindeki blokları takip eder ama şantiye genelindeki koordinasyonu tek bir kişi (genellikle bizim saha sorumlumuz) üstlenir; bu kişi, hangi makinenin hangi blokta olduğunu ve rotalar arasında bir çakışma olup olmadığını takip eder. Şantiye trafiğinin yoğun olduğu saatlerde iki makinenin aynı dar yolu aynı anda kullanmaya çalışması gibi durumlar, bu koordinasyonla önceden önlenir.",
                    "Şantiye yönetiminizin kendi saha koordinatörüyle bizim saha sorumlumuz arasında doğrudan bir iletişim hattı kurulması, özellikle büyük ve karmaşık projelerde rota değişikliklerinin hızlı iletilmesini sağlar.",
                ],
            },
            {
                baslik: "Rota dışı acil talep nasıl karşılanır",
                paragraflar: [
                    "Planlanan rota dışında beklenmedik bir ihtiyaç (örneğin bir blokta acil bir aydınlatma arızası) ortaya çıktığında, bu talebi mevcut rotanın en yakın uğrağına ekleyerek veya rotayı kısa süreliğine sapmaya yönlendirerek karşılarız. Bu, planlanan sırayı biraz geciktirebilir ama acil ihtiyacı beklemeden çözer; sık tekrarlanan acil talepler, bir sonraki rota planlamasında ayrı bir kalem olarak değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Projemizde otuza yakın blok var, tek platform hepsine yetişir mi?",
                cevap:
                    "Blok sayısı bu kadar yüksekse ve teslim programı sıkışıksa, tek platform muhtemelen yetersiz kalır; bu durumda birden fazla makineyi paralel rotalarla çalıştırmayı öneririz. Kesin sayı, blok başına gereken iş süresi ve teslim takviminize göre hesaplanır; ilk görüşmede bu hesabı birlikte yaparız.",
            },
            {
                soru: "Bir blok beklenmedik şekilde öne alındı, rotayı nasıl güncelliyorsunuz?",
                cevap:
                    "Bu bilgiyi aldığımız an mevcut rotayı yeniden düzenleriz ve öne alınan bloğu önceliklendiririz; bu, planlanan diğer blokların sırasını kısmen kaydırabilir ama acil önceliğe göre esnetiriz. Bu tip değişiklikleri mümkün olduğunca erken bildirmeniz, rotayı daha az sarsıntıyla güncellememizi sağlar.",
            },
            {
                soru: "İki makineyi paralel çalıştırırken aralarında çakışma olur mu?",
                cevap:
                    "Çakışma riskini azaltmak için, paralel çalışan makinelerin bölgelerini ve rotalarını bizim saha sorumlumuz merkezi olarak takip eder; dar bir yolun aynı anda iki makine tarafından kullanılması gibi durumlar bu koordinasyonla önceden planlanarak önlenir. Şantiyenizin kendi trafik yoğun saatlerini bize bildirmeniz, bu koordinasyonu daha isabetli kurmamızı sağlar.",
            },
            {
                soru: "Rota sırasında bir blokta beklenmeyen ek iş çıkarsa, rota sonraki blokları kaçırır mı?",
                cevap:
                    "Bir blokta iş beklenenden uzun sürerse, sonraki blokların sırası biraz gecikebilir ama tamamen atlanmaz; günlük programı gerçekçi tutmak için genellikle blok başına bir miktar esneme payı bırakırız. Sık sık beklenmedik ek iş çıkıyorsa, bunu bir sonraki rota planlamasında blok başına ayrılan süreyi artırarak dikkate alırız.",
            },
            {
                soru: "Rota tamamlandığında hangi blokta ne yapıldığını nasıl öğreniyoruz?",
                cevap:
                    "Rota sonunda hangi bloklarda hangi işlerin tamamlandığı ve hangi noktaların ek iş gerektirdiği toplu bir özet hâlinde şantiye yönetiminize iletilir; bu, tek tek blok raporlarını takip etmek yerine bütün turun sonucunu tek seferde görmenizi sağlar. İsterseniz bu özeti belirli bir formatta (örneğin blok listesi ve durum) hazırlamamızı da talep edebilirsiniz.",
            },
            {
                soru: "Şantiyemizin kendi saha koordinatörü var, sizinle nasıl iletişime geçiyor?",
                cevap:
                    "Büyük projelerde saha koordinatörünüzle bizim saha sorumlumuz arasında doğrudan bir iletişim hattı kurulmasını öneririz; bu, rota değişikliklerinin ve acil taleplerin hızlı iletilmesini sağlar. Bu iletişim genellikle telefon veya mesaj üzerinden yürür, resmi bir sistem gerektirmez ama düzenli ve net olması önemlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Büyük toplu konut projelerinin çok sayıda bloktan oluştuğu ve tesliminin kademeli bir programa göre ilerlediği, inşaat sektöründe genel bilinen bir pratiktir; belirli bir proje veya blok sayısı uydurulmamıştır. Rota planlaması ve paralel makine koordinasyonu firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Hafriyat ve Temel Aşamasındaki Şantiyede Zor Zemin Platform Kiralama",
        giris:
            "Bir inşaat şantiyesinin en zorlu zemin koşulu, genellikle işin en başında — hafriyat ve temel aşamasında — ortaya çıkar; bu dönemde arsa henüz sıkıştırılmış bir yol veya döşenmiş bir zemine sahip değildir, hafriyat fazlası toprak yığınları, kazı çukurları ve mevsime göre çamurlaşan geçici yollar sahayı kaplar. Standart tekerlekli bir platform bu koşullarda ya batar ya devrilme riski taşır; bu yüzden hafriyat-temel aşamasındaki erişim işleri, dört çeker tahrikli ve düzensiz zemine uygun arazi tipi makine sınıfını gerektirir. Bu sayfa, zor zemin platform kiralamamızın şantiyenin bu en kritik erken aşamasındaki kullanımını anlatır; şantiye ilerleyip zemin sabitlendiğinde diğer standart hizmet sayfalarımız devreye girer.",
        maddeler: [
            {
                baslik: "Hafriyat çukuru çevresinde erişim",
                metin:
                    "Temel kazısı sürerken, kazı çukurunun çevresi genellikle çıkarılan toprakla yığılı ve düzensizdir; bu bölgede yapılacak bir iş (örneğin çukur kenarındaki geçici destek elemanının kontrolü) standart bir zeminde değil, eğimli ve gevşek toprak üzerinde erişim gerektirir. Arazi tipi platform, dört çeker tahriki ve geniş lastikleriyle bu gevşek zeminde diğer sınıflara göre daha güvenli ilerler; yine de her zeminde mutlak güvenlik garantisi verilmez, keşif şarttır.",
            },
            {
                baslik: "Mevsime göre çamurlaşan geçici şantiye yolu",
                metin:
                    "Yağışlı dönemde, henüz sıkıştırılmamış bir hafriyat sahasının zemini hızla çamurlaşır ve standart tekerlekli araçların ilerlemesini zorlaştırır; bu koşulda makinenin sahaya girip giremeyeceği, zeminin o günkü durumuna bağlıdır. Aracımız sahaya yaklaşmadan önce zemin durumunu şantiye şefinden teyit eder; çok yumuşak bir zeminde iş, zemin biraz kuruyana veya geçici bir dolgu yapılana kadar ertelenebilir.",
            },
            {
                baslik: "Eğimli arsa ve kademeli platform işi",
                metin:
                    "Bazı toplu konut arsaları düz değil, hafif eğimli bir topografyaya sahiptir; bu tip arsalarda platformun düz durabileceği bir konum bulmak, eğimin yönüne ve derecesine göre değişir. Arazi tipi platformun kendini düzeltme (self-leveling) veya geniş ayak açıklığı gibi özellikleri, orta dereceli eğimlerde çalışmayı mümkün kılar; aşırı eğimli noktalarda ise önce zeminin bir kısmının düzeltilmesi istenir.",
            },
            {
                baslik: "Hafriyat makineleriyle aynı sahada güvenli mesafe",
                metin:
                    "Hafriyat aşamasında sahada ekskavatör, dozer ve kamyon gibi büyük hafriyat makineleri de çalışır; platformumuzun bu makinelerle aynı anda aynı bölgede bulunması, çarpışma ve devrilme riskini artırır. Bu yüzden platform işi, mümkünse hafriyat makinelerinin o bölgede aktif çalışmadığı bir zaman dilimine veya farklı bir bölgeye denk getirilir; bu koordinasyon şantiye şefiyle önceden kurulur.",
            },
            {
                baslik: "Zeminin taşıma gücü belirsizken kademeli yaklaşım",
                metin:
                    "Zemin taşıma gücü net olarak bilinmiyorsa (örneğin yeni doldurulmuş bir alan), platform doğrudan tam yükle ilerlemek yerine önce kısa mesafelerde ve düşük hızda kademeli bir yaklaşım uygular; bu, zeminin ani bir şekilde çökmesi riskini erken fark etmeyi sağlar. Zemin güvenilir bulunmazsa iş durdurulur ve şantiye şefinden zemin iyileştirmesi istenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hafriyat-temel aşamasında zemin tipi ve makine kararı",
                paragraflar: [
                    "Aşağıdaki tablo, şantiyenin erken aşamasında karşılaşılan zemin tiplerini ve bunlara uygun yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Risk", "Önerilen yaklaşım", "Zamanlama notu"],
                    satirlar: [
                        ["Kazı çukuru çevresi", "Gevşek, eğimli toprak", "Dört çeker arazi tipi", "Hafriyat makineleri dışı saat"],
                        ["Çamurlaşan geçici yol", "Batma, kayma", "Zemin teyidi sonrası giriş", "Yağış sonrası ertelenebilir"],
                        ["Eğimli arsa", "Devrilme riski", "Kendini düzeltme özellikli sınıf", "Eğim ölçümü sonrası"],
                        ["Yeni doldurulmuş alan", "Belirsiz taşıma gücü", "Kademeli düşük hız yaklaşım", "Zemin testi öncelikli"],
                    ],
                },
            },
            {
                baslik: "Hafriyat ekibiyle zaman ve alan koordinasyonu",
                paragraflar: [
                    "Hafriyat aşamasındaki bir şantiyede platform işimizin güvenli ilerlemesi, büyük ölçüde hafriyat ekibiyle kurulan koordinasyona bağlıdır; ekskavatör veya dozer aktif çalışırken aynı bölgede platform çalıştırmak yerine, ya farklı bir bölgeye ya da hafriyat makinelerinin ara verdiği bir zaman dilimine denk getiririz. Bu koordinasyon, iş başlamadan önce şantiye şefiyle günlük hafriyat programı üzerinden konuşularak kurulur.",
                    "Hafriyat programı günden güne değişebileceği için, bu koordinasyonu tek seferlik değil, her ziyaret öncesi güncel olarak teyit edilen bir süreç olarak yürütürüz.",
                ],
            },
            {
                baslik: "Zemin iyileştirme önerisi ve şantiyenin rolü",
                paragraflar: [
                    "Zemin taşıma gücü yetersiz bulunduğunda, platformun kendisi bu sorunu çözemez; çözüm genellikle şantiyenin geçici bir dolgu, plaka döşeme veya sıkıştırma yapmasıdır. Bu tip bir iyileştirme önerildiğinde, hangi alanın iyileştirilmesi gerektiğini net biçimde işaretleriz ve iyileştirme tamamlandıktan sonra zemini yeniden değerlendiririz. Bu adım atlanıp doğrudan riskli zemine makine sokulmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hafriyat çukurunun hemen kenarında çalışmamız gerekiyor, güvenli mi?",
                cevap:
                    "Çukur kenarı, çıkarılan toprağın gevşekliği ve olası çökme riski nedeniyle dikkat gerektiren bir bölgedir; arazi tipi platformumuz bu tip zeminlerde standart sınıflara göre daha uygun olsa da, kesin güvenlik zeminin o günkü durumuna bağlıdır. Sahaya varmadan önce ve varır varmaz zemin gözle kontrol edilir; risk yüksek görülürse, çukurdan güvenli mesafede kalacak bir konum tercih edilir.",
            },
            {
                soru: "Yağmur yağdı, şantiye sahası çamur içinde; makineniz gelebilir mi?",
                cevap:
                    "Bu, zeminin ne kadar yumuşadığına bağlıdır; çok yumuşak ve batma riski taşıyan bir zeminde makineyi sokmayız çünkü hem makinenin hem operatörün güvenliği risk altına girer. Zemin durumunu şantiye şefinizden teyit ederiz; gerekirse işi zemin biraz kuruyana kadar birkaç gün erteleriz veya geçici bir plaka döşenmesini öneririz.",
            },
            {
                soru: "Arsamız hafif eğimli, platform bu eğimde düz durabilir mi?",
                cevap:
                    "Orta dereceli eğimlerde arazi tipi platformların kendini düzeltme özelliği genellikle yeterlidir, ama eğim derecesi ölçülmeden kesin bir cevap veremeyiz. İlk keşifte eğimi ölçer, uygun makine sınıfını buna göre öneririz; eğim çok dikse, önce zeminin bir kısmının düzeltilmesini önerebiliriz.",
            },
            {
                soru: "Hafriyat makineleri sahada sürekli çalışıyor, platformumuz onlarla çarpışma riski taşır mı?",
                cevap:
                    "Aynı bölgede aynı anda çalışmak gerçek bir risk taşır, bu yüzden işimizi mümkünse hafriyat makinelerinin aktif olmadığı bir zaman dilimine veya farklı bir bölgeye denk getiririz. Bu koordinasyonu şantiye şefinizle günlük hafriyat programı üzerinden kurarız; program günden güne değişebileceği için her ziyaret öncesi güncel durumu teyit ederiz.",
            },
            {
                soru: "Zeminin taşıma gücünden emin değiliz, nasıl test ediyorsunuz?",
                cevap:
                    "Biz resmi bir zemin testi yapmayız; bunun yerine platformu kademeli, düşük hızlı ve kısa mesafeli bir yaklaşımla ilerletip zeminin tepkisini gözlemleriz. Zemin şüpheli bulunursa iş durdurulur ve şantiyenizin geoteknik veya saha mühendisinin değerlendirmesini önereriz; resmi bir test raporu varsa, bunu bize önceden paylaşmanız işimizi hızlandırır.",
            },
            {
                soru: "Zemin iyileştirme gerekiyorsa bunu siz mi yapıyorsunuz, biz mi?",
                cevap:
                    "Zemin iyileştirme (dolgu, plaka döşeme, sıkıştırma) genellikle şantiyenin kendi kapsamındadır, biz bu işi üstlenmeyiz; ancak hangi alanın iyileştirilmesi gerektiğini net biçimde işaretleyip önerimizi paylaşırız. İyileştirme tamamlandıktan sonra zemini yeniden değerlendirip işe başlarız; iyileştirme yapılmadan riskli zemine makine sokmayız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İnşaat şantiyelerinin hafriyat ve temel aşamasında henüz sıkıştırılmamış, düzensiz ve mevsime göre çamurlaşan bir zemine sahip olduğu, inşaat sektöründe genel bilinen bir pratiktir; belirli bir şantiye veya arsa adı kullanılmamıştır. Zemin teyidi ve hafriyat ekibiyle koordinasyon firma pratiğidir.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Kütahya'da Küçük Atölye Bütçesine Uygun Makaslı Platform Kiralama",
        giris:
            "Makaslı platform, dikey yükselen ve sepeti düz zeminde taşıyan yapısı sayesinde küçük bir atölyenin iç mekân işleri için genellikle en ucuza gelen sınıftır — ama bu 'ucuzluk' ancak doğru süre ve doğru paket seçildiğinde gerçekleşir. Kütahya merkez ve çevresindeki küçük-orta ölçekli işletmelerin çoğu, makaslı platform kiralarken aslında büyük bir fabrikanın kullandığı aynı tarife tablosuyla karşılaşır; oysa bir atölyenin ihtiyacı çoğu zaman bir günü, hatta birkaç saati geçmez. Bu sayfa, makaslı platformu spesifik olarak KOBİ bütçesi çerçevesinde ele alır: hangi durumda günlük tarife mantıklı, hangi durumda saatlik veya yarım günlük paket daha ucuza gelir, hangi durumda komşu atölyeyle makineyi paylaşmak toplam maliyeti aşağı çeker. Amaç, işletme sahibinin 'bu iş için platform tutmaya değer mi' sorusunu somut bir maliyet mantığıyla cevaplamaktır — büyük tesislerin ihtiyaç duyduğu geniş sepetli veya yüksek kapasiteli modeller değil, küçük atölyenin dar koridorlarına ve düşük tavanlı deposuna uygun kompakt sınıflar bu sayfanın odağındadır.",
        maddeler: [
            {
                baslik: "Kompakt sınıfın küçük atölyeye uygunluğu",
                metin:
                    "Küçük bir imalathane veya perakende deposunun koridor genişliği genellikle bir metrenin biraz üzerindedir; büyük tesislerde kullanılan geniş şaseli makaslı platformlar bu koridorlara sığmaz. Dar şaseli kompakt makaslı platform sınıfı hem koridor genişliğine uyar hem de düşük tavan yüksekliği nedeniyle sepedin tam kapasiteye çıkması gerekmeyen işlerde (raf üstü toz alma, aydınlatma değişimi) yeterli olur. Bu sınıfın günlük kirası da geniş sınıfa göre daha düşüktür — küçük işletme için bu fark önemlidir.",
            },
            {
                baslik: "Saatlik/yarım gün paketin mantığı",
                metin:
                    "Bir kırtasiyeci deposunun tavan lambası değişimi veya bir terzi atölyesinin raf üstü düzenlemesi gibi işler genellikle bir-iki saati geçmez; bu ölçekteki bir işe tam günlük tarife uygulamak işletme sahibini vazgeçirir. Saatlik veya yarım gün paketi, makine ve operatörün aynı gün içinde birden fazla küçük işe planlanabildiği durumlarda sunulur — tek başına gelen izole bir yarım günlük talep, günün geri kalanı boş kaldığı için yine de görece pahalı kalabilir; bu yüzden yakın tarihli başka bir talep varsa paket fiyatı daha avantajlı çıkar.",
            },
            {
                baslik: "Komşu atölyeyle makine paylaşımı",
                metin:
                    "Aynı sanayi sitesinde yan yana duran iki-üç küçük atölye, makaslı platform ihtiyacını aynı güne denk getirip tek bir kiralama talebinde birleştiğinde, nakliye maliyeti tek seferde karşılanır ve makine bir atölyeden diğerine yürüyerek geçer. Her işletme yalnızca kendi kullandığı saat kadar öder. Bu modelin tek koşulu, atölyelerin ihtiyaç tarihini önceden koordine etmesidir; bu koordinasyonu genellikle sanayi sitesi yönetimiyle kurarız.",
            },
            {
                baslik: "Zemin taşıma yükü ve küçük atölye binaları",
                metin:
                    "Eski yapı küçük atölye binalarının bazılarında zemin taşıma kapasitesi, yeni inşa büyük depolar kadar yüksek olmayabilir; akülü makaslı platformun ağırlığı bu tip zeminlerde bir risk oluşturabilir. İşletme sahibi bina yaşını ve zemin tipini bildirdiğinde, ağırlığı daha düşük kompakt sınıfı öneririz; bina statiği konusunda kesin bir garanti veremeyiz, şüpheli durumlarda işletmenin kendi teknik sorumlusuna danışmasını öneririz.",
            },
            {
                baslik: "Operatörlü mü, işletme personeli mi kullansın",
                metin:
                    "Küçük bir atölyenin kendi personeli platformu kullanmak isteyebilir; bu, personelin temel eğitimi aldığı ve işin basit (düz zeminde dikey hareket) olduğu durumlarda mümkündür. Ancak işletme personelinin platform kullanım deneyimi yoksa veya iş karmaşık bir manevra gerektiriyorsa (dar koridorda hassas konumlandırma), operatörlü kiralama önerilir — küçük işletme bütçesinde operatörlü seçenek daha maliyetli görünse de, bir kaza veya hasar riskinin maliyeti bundan çok daha yüksektir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük atölye ölçeğinde makaslı platform paket karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, küçük işletmelerin sık karşılaştığı iş ölçeklerine göre önerilen paket ve yaklaşık maliyet mantığını özetler; kesin fiyat, iş tanımına ve tarihe göre değişir.",
                ],
                tablo: {
                    basliklar: ["İş ölçeği", "Önerilen paket", "Sınıf", "Maliyet mantığı"],
                    satirlar: [
                        ["1-2 saatlik tekil iş", "Saatlik paket (yoğunlaştırılmış gün)", "Kompakt dar şase", "Aynı gün başka işle birleştirilirse ucuzlar"],
                        ["Yarım günlük iş", "Yarım gün tarifesi", "Kompakt/standart", "Tek başına orta maliyetli"],
                        ["Tam günlük iş", "Günlük tarife", "İhtiyaca göre", "Uzun süreli işte birim maliyet düşer"],
                        ["Komşu atölyelerle ortak ihtiyaç", "Paylaşımlı kiralama", "Kompakt", "Nakliye maliyeti bölünür, en ucuz seçenek"],
                    ],
                },
            },
            {
                baslik: "Küçük işletmenin nakit akışı ve kiralama zamanlaması",
                paragraflar: [
                    "Büyük bir fabrika bakım bütçesini yıllık planlar ve harcamayı önceden ayırır; küçük bir atölye ise genellikle aylık nakit akışına göre karar verir ve beklenmedik bir kira gideri o ayın bütçesini zorlayabilir. Bu yüzden küçük işletme müşterilerimizle, mümkün olduğunda ihtiyacı önceden (birkaç hafta öncesinden) bildirmelerini ve ödemeyi işin tamamlandığı tarihe göre planlamalarını öneririz.",
                    "Acil ve plansız talep de karşılanır, ama plansız taleplerde hem makine müsaitliği hem de paylaşımlı paket avantajından yararlanma ihtimali düşer — bu yüzden mümkün olan en erken bildirim, küçük işletmenin bütçesi açısından da avantajlıdır.",
                ],
            },
            {
                baslik: "Kompakt sınıfın sınırları",
                paragraflar: [
                    "Kompakt makaslı platform, dar koridor ve düşük tavan avantajı sunar ama yüksek kapasiteli veya geniş sepetli işler için (örneğin iki kişinin birlikte ağır malzeme taşıdığı bir montaj) yeterli olmayabilir. Böyle bir iş tarif edildiğinde, işletmeye kompakt sınıfın yetersiz kalacağını açıkça belirtir ve standart sınıfı öneririz; standart sınıfın günlük maliyeti daha yüksektir ama yanlış sınıfla işi iki kez tekrarlamaktan daha ucuza gelir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İki saatlik bir iş için platform tutmaya değer mi?",
                cevap:
                    "Tek başına iki saatlik bir iş için tam günlük tarife ödemek genellikle ekonomik değildir; bunun yerine saatlik veya yoğunlaştırılmış paket öneririz. Bu paketin en avantajlı hâli, aynı gün ve yakın bölgede başka bir kısa iş de varsa ortaya çıkar — makine ve operatör aynı gün içinde iki işe planlanır, nakliye maliyeti bölünür. Tek başına gelen izole bir iki saatlik talep de karşılanır ama fiyatı, birleştirilmiş bir talebe göre daha yüksek olabilir.",
            },
            {
                soru: "Komşu atölyeyle aynı makineyi paylaşmak güvenli mi, sorumluluk kime ait?",
                cevap:
                    "Paylaşımlı kiralamada her atölye yalnızca kendi kullandığı saat için sorumludur; makine bir atölyeden diğerine geçerken aradaki teslim durumu (hasar, yakıt/şarj seviyesi) not edilir ki hangi atölyenin hangi durumda teslim aldığı netleşsin. Koordinasyonu genellikle sanayi sitesi yönetimi veya bizim saha ekibimiz üzerinden kurarız; atölyeler arasında doğrudan bir sözleşme ilişkisi kurulmasını istemiyoruz, her atölye bizimle ayrı kiralama kaydı yapar.",
            },
            {
                soru: "Atölyemizin zemini eski, platform ağırlığını kaldırır mı?",
                cevap:
                    "Eski yapı atölye binalarında zemin taşıma kapasitesi bilinmeyebilir; biz bina statiği konusunda kesin bir garanti veremeyiz. Bina yaşı ve genel durumu bildirildiğinde, daha hafif kompakt sınıfı öneririz ve şüpheli bir zeminde makineyi kademeli, düşük hızlı bir yaklaşımla test ederiz. Ciddi şüphe varsa işletmenin kendi teknik sorumlusuna veya bir inşaat mühendisine danışmasını öneririz.",
            },
            {
                soru: "Kendi personelimiz platformu kullanabilir mi, yoksa operatör şart mı?",
                cevap:
                    "Basit, düz zeminde dikey hareket gerektiren işlerde, temel eğitim almış işletme personeli platformu kullanabilir. Ancak iş dar bir koridorda hassas manevra veya karmaşık bir konumlandırma gerektiriyorsa, ya da personelin deneyimi yoksa, operatörlü kiralamayı öneririz. Operatörlü seçenek küçük işletme bütçesinde daha maliyetli görünür ama bir kaza veya ekipman hasarının maliyeti çok daha yüksek olabilir.",
            },
            {
                soru: "Fiyat teklifini nasıl daha ucuza getirebiliriz?",
                cevap:
                    "En etkili üç yol şunlardır: ihtiyacı mümkün olduğunca erken bildirmek (plansız acil taleplerde müsaitlik ve paket avantajı azalır), komşu atölyelerle aynı haftaya denk gelen ihtiyacı birleştirmek, ve işin gerçek süresini net tarif etmek (gereğinden uzun bir süre talep etmek yerine gerçek ihtiyacı söylemek daha doğru paketin seçilmesini sağlar). Bu üçü birlikte uygulandığında maliyet farkı gözle görülür olabilir.",
            },
            {
                soru: "Kompakt sınıf her işe yeter mi?",
                cevap:
                    "Hayır. Kompakt sınıf dar koridor ve düşük tavan avantajı sunar ama yüksek kapasiteli veya iki kişinin birlikte ağır malzeme taşıdığı işlerde yetersiz kalabilir. İş tarif edildiğinde kompakt sınıfın yetip yetmeyeceğini önceden değerlendirir, gerekirse standart sınıfı öneririz; yanlış sınıfla işe başlayıp yarıda değiştirmek, doğru sınıfı baştan seçmekten daha maliyetli ve zaman kaybettirici olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'daki küçük-orta ölçekli atölye ve işletmelerin OSB ile sanayi sitelerinde yoğunlaştığı, bu işletmelerin genellikle sınırlı bakım bütçesine sahip olduğu kamuya açık genel bilgidir. Saatlik/paylaşımlı kiralama modeli ve kompakt sınıf önerisi firma pratiğidir; tesis adı veya rakam uydurulmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Kütahya'da Küçük İşletme Bütçesiyle Manlift (Eklemli/Teleskopik) Kiralama",
        giris:
            "Manlift, makaslı platforma göre daha uzağa ve daha karmaşık açılara ulaşabilen bir sınıftır — ama bu esneklik genellikle daha yüksek bir günlük kira bedeliyle gelir, ve küçük bir işletme için bu fark bütçe kararında belirleyici olur. Kütahya'daki küçük-orta ölçekli işletmelerin manlift ihtiyacı çoğunlukla dış cephe, tabela, bahçe ağacı budaması veya çatı kenarı gibi makaslı platformun erişemediği açılı noktalardan gelir; ama bu ihtiyaç nadiren birkaç günden uzun sürer ve nadiren tam kapasiteli bir manlift gerektirir. Bu sayfa, manlift kiralamayı spesifik olarak küçük işletme bütçesi çerçevesinde ele alır: hangi işte küçük eklemli sınıf yeterli, hangi işte teleskopik sınıf gerekli, kısa süreli kiralamada maliyeti nasıl aşağı çekebileceğiniz. Büyük inşaat şantiyelerinin ihtiyaç duyduğu uzun erişimli ağır sınıflar değil, küçük işletmenin tek seferlik veya yılda birkaç kez tekrarlanan dış mekân işine uygun kompakt manlift modelleri bu sayfanın odağındadır.",
        maddeler: [
            {
                baslik: "Eklemli mi teleskopik mi — küçük işletme için karar",
                metin:
                    "Eklemli manlift, kolun eklem noktasından bükülebilmesi sayesinde bir engelin (örneğin bir tabela direği veya ağaç dalı) üzerinden veya arkasından geçerek hedefe ulaşabilir; teleskopik manlift ise düz bir kol ile daha uzağa ama daha az manevra kabiliyetiyle ulaşır. Küçük bir işletmenin dış cephe veya tabela işi genellikle bina cephesine yakın ve engelli bir alanda geçtiği için eklemli sınıf daha sık tercih edilir; teleskopik sınıf, açık ve engelsiz bir alanda uzak bir noktaya (örneğin geniş bir arsanın kenarındaki direk) ulaşmak gerektiğinde önerilir.",
            },
            {
                baslik: "Kısa süreli iş için kompakt sınıfın maliyet avantajı",
                metin:
                    "Bir tabela montajı veya bahçe ağacı budaması genellikle bir günü geçmez; bu ölçekteki bir iş için büyük kapasiteli bir manlift kiralamak hem gereksiz maliyetlidir hem de nakliyesi daha zordur (daha büyük araç, daha uzun kurulum). Kompakt eklemli sınıf, hem günlük kira bedeli hem nakliye kolaylığı açısından küçük işletmenin tek günlük ihtiyacına daha uygun düşer; iş büyükse veya erişim mesafesi kompakt sınıfın sınırını aşıyorsa bunu önceden netleştiririz.",
            },
            {
                baslik: "Yılda birkaç kez tekrarlanan iş için önceden anlaşma",
                metin:
                    "Bazı küçük işletmelerin manlift ihtiyacı yılda iki-üç kez tekrarlanır (örneğin bahar ve sonbahar bahçe bakımı, ya da yıllık tabela kontrolü); bu tip tekrarlayan ihtiyaçlar için işletmeyle önceden bir anlaşma kurup, her seferinde yeniden fiyat pazarlığı yapmak yerine sabit bir yıllık paket önerebiliriz. Bu, hem işletmenin bütçe planlamasını kolaylaştırır hem de bizim tarafımızda müsaitlik planlamasını netleştirir.",
            },
            {
                baslik: "Dar sokak ve küçük işletme çevresindeki erişim kısıtı",
                metin:
                    "Kütahya'nın eski yerleşim dokusundaki bazı küçük işletmeler dar sokaklara veya sınırlı avlu girişine sahiptir; standart boyutlu bir manlift bu alana giremeyebilir. Bu durumda kompakt/dar gövdeli eklemli sınıf tek seçenek olabilir, ya da makine sokağa park edilip kolun uzatılmasıyla iş yapılabilir — bu ikinci seçenek kolun erişim mesafesine bağlıdır ve her işte mümkün olmayabilir. Erişim durumunu iş öncesi telefon veya fotoğrafla teyit ederiz.",
            },
            {
                baslik: "Operatörlü zorunluluk ve küçük işletme maliyeti",
                metin:
                    "Manlift kullanımı, makaslı platforma göre daha fazla manevra becerisi ve yükseklik farkındalığı gerektirdiği için, küçük işletmelerde operatörsüz kiralama nadiren önerilir; işletme personelinin belgeli deneyimi yoksa operatörlü kiralama fiilen zorunlu hâle gelir. Bu, küçük işletme bütçesinde ek bir maliyet kalemidir, ama manlift işlerinde (özellikle dar sokak veya engelli alanda) yanlış manevranın maliyeti — çarpma, devrilme — operatör maliyetinden kat kat yüksektir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük işletme ölçeğinde manlift sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, küçük işletmelerin sık karşılaştığı iş tiplerine göre önerilen manlift sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Önerilen sınıf", "Süre", "Maliyet notu"],
                    satirlar: [
                        ["Tabela montaj/kontrol", "Kompakt eklemli", "1 gün", "Nakliyesi kolay, düşük maliyet"],
                        ["Bahçe ağacı budama", "Kompakt eklemli", "1 gün, yılda 1-2 kez", "Yıllık paket avantajlı"],
                        ["Bina cephesi engelli alan", "Kompakt eklemli (dar gövde)", "1-2 gün", "Erişim önceden teyit edilmeli"],
                        ["Açık arsa kenarı, uzak nokta", "Teleskopik", "1 gün", "Eklemliye göre biraz daha yüksek maliyet"],
                    ],
                },
            },
            {
                baslik: "Yıllık tekrarlayan iş için sabit paket mantığı",
                paragraflar: [
                    "Bahçe bakımı veya tabela kontrolü gibi yılda birkaç kez tekrarlanan ihtiyaçlarda, işletmeyle her seferinde sıfırdan fiyat görüşmesi yapmak yerine önceden anlaşılmış bir yıllık paket kurmak her iki taraf için de zaman kazandırır. Paket, yılın hangi dönemlerinde işin yapılacağını ve yaklaşık süresini önceden belirler; kesin tarih, mevsim koşullarına göre (örneğin budama için uygun hava) esnek tutulur.",
                    "Bu paket modeli yalnızca gerçekten tekrarlayan ihtiyacı olan işletmeler için anlamlıdır; tek seferlik bir iş için yıllık paket önerilmez.",
                ],
            },
            {
                baslik: "Dar sokak erişiminin önceden teyidi",
                paragraflar: [
                    "Kütahya'nın merkez bölgesindeki bazı küçük işletmeler eski yerleşim dokusunun dar sokaklarında yer alır; bu sokakların genişliği standart bir manlift aracının geçişine her zaman uygun olmayabilir. İş öncesi, işletme sahibinden sokak genişliği ve varsa engel (elektrik direği, çıkma) fotoğrafını isteriz; bu bilgi olmadan doğru sınıfı önceden garanti edemeyiz. Sahaya varıp aracın giremediği durumlarda iş ertelenir ve alternatif bir erişim planı (örneğin komşu bir noktadan kol uzatma) değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek bir tabela montajı için manlift tutmak mantıklı mı, yoksa daha ucuz bir yöntem var mı?",
                cevap:
                    "Tabela yüksekliği ve bina cephesine yakınlığına bağlı olarak bazen kompakt bir makaslı platform da yeterli olabilir, bu genellikle manliftten daha ucuzdur. Ama tabela bina cephesinden çıkıntılı bir noktaya (örneğin bir direk üzerine) monteliyse ve düz zeminde erişim yoksa, eklemli manlift tek pratik seçenek olur. İşin tam konumunu ve yüksekliğini bize tarif ettiğinizde en ucuz uygun sınıfı öneririz.",
            },
            {
                soru: "Bahçe ağacı budaması için her yıl ayrı ayrı mı anlaşmalıyız?",
                cevap:
                    "Hayır, tekrarlayan bir ihtiyacınız varsa yıllık sabit bir paket kurabiliriz; bu, her sezon yeniden fiyat görüşmesi yapmaktan hem sizin hem bizim için daha az zaman alır. Kesin tarih mevsim koşullarına göre esnek tutulur ama yaklaşık dönem ve süre önceden belirlenir. Tek seferlik bir budama işiyse, yıllık paket yerine standart tek seferlik kiralama daha uygundur.",
            },
            {
                soru: "Sokağımız dar, manlift aracı girebilir mi?",
                cevap:
                    "Bu, sokağın genişliğine ve varsa direk/çıkma gibi engellere bağlıdır; kesin bir cevap için iş öncesi sokak fotoğrafı ve genişlik bilgisi isteriz. Standart araç giremiyorsa kompakt/dar gövdeli bir sınıf denenir; o da giremiyorsa aracı en yakın uygun noktaya park edip kolu uzatarak işi yapmayı değerlendiririz — bu, kolun erişim mesafesine bağlı olarak her zaman mümkün olmayabilir.",
            },
            {
                soru: "Eklemli mi teleskopik mi daha ucuz?",
                cevap:
                    "Genel eğilim olarak kompakt eklemli sınıf, teleskopik sınıfa göre biraz daha düşük günlük maliyete sahiptir; ama asıl belirleyici, işin gerektirdiği erişim tipidir. Engelli bir alanda (bina cephesi, ağaç dalları arasında) eklemli sınıf hem daha ucuz hem daha uygundur; açık ve engelsiz ama uzak bir noktada ise teleskopik sınıf gerekebilir ve bu durumda maliyet farkı işin gereğidir, tercih meselesi değildir.",
            },
            {
                soru: "Kendi personelimiz manlift kullanabilir mi?",
                cevap:
                    "Manlift, makaslı platforma göre daha fazla manevra ve yükseklik farkındalığı gerektirir; personelinizin belgeli ve güncel bir kullanım deneyimi yoksa operatörlü kiralamayı öneririz. Özellikle dar sokak veya engelli bir alanda çalışılacaksa, deneyimsiz bir kullanımın çarpma veya devrilme riski, operatör maliyetinden çok daha yüksek bir maliyete (hasar, iş kaybı) yol açabilir.",
            },
            {
                soru: "İş bir günden uzarsa fiyat nasıl değişir?",
                cevap:
                    "İş öncesi tahmin edilen süreden uzarsa, ek gün için günlük tarifenin bir kısmı (genellikle tam günden daha düşük bir oranla) uygulanır; bu, işin son ana kadar planlanmadığı küçük işletmeler için beklenmedik bir maliyet artışı olabilir. Bu yüzden mümkün olduğunca gerçekçi bir süre tahminiyle başlamanızı, belirsizlik varsa bunu bize önceden söylemenizi öneririz — böylece esnek bir paket önerebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın eski yerleşim dokusunda dar sokaklı bölgelerin bulunması ve küçük işletmelerin bahçe/tabela gibi tekrarlayan dış mekân ihtiyaçları olması genel bilinen yerel gerçeklerdir. Yıllık paket modeli ve sınıf seçim mantığı firma pratiğidir; tesis adı veya doğrulanamayan rakam kullanılmamıştır.",
    },
};
