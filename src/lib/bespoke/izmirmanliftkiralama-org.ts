// ═══════════════════════════════════════════════════════════════════════════
// izmirmanliftkiralama.org — ELLE YAZILMIŞ İÇERİK
//
// Profil: Şehir içi trafik kısıtlarına uygun PLANLI MANLİFT TESLİMATI.
// Açı: TESLİMAT LOJİSTİĞİ VE ZAMANLAMA — çekici/lowbed güzergâhları, saat
// pencereli teslim, randevulu teslim-alım, tesise giriş saatleri. Her sayfa
// makinenin nasıl geldiği-gittiği merceğinden yazılır; işin kendisi değil,
// sevkiyatın planı anlatılır.
//
// ⚠️ Bornova/Gaziemir/Buca/Bergama OSB/Menemen Deri OSB/Tire OSB/Manisa OSB/
// Aydın OSB kardeş domainlerde başka açılarla elle yazıldı. Cümle, tablo
// satırı ve SSS tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi + firma pratiği.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIRMANLIFTKIRALAMA_ORG: Record<string, BespokeIcerik> = {
    "bolge:bornova": {
        h1: "Bornova'ya Saat Pencereli Manlift Teslimatı",
        giris:
            "Bornova'ya makine göndermek, İzmir trafiğinin en kalabalık kavşak ağını hesaba katmak demektir: Ankara yolu aksı, çevre yolu bağlantıları ve üniversite çevresinin gün içi yoğunluğu, çekici üzerindeki bir manliftin varış saatini kolayca iki katına çıkarabilir. Bizim Bornova hattımız bu yüzden saat pencereli çalışır — sevkiyat, trafiğin akışkan olduğu dilimlere yazılır, şoföre güzergâh ve yedek güzergâh birlikte verilir, tesisteki indirme noktası daha araç yola çıkmadan telefonla netleştirilir. Alıcı tarafın tek yapması gereken, kapıda makineyi karşılayacak kişiyi ve indirme sahasını bildirmektir; kalan her adım — çekici tipi seçimi, rampa açısı, iade günü randevusu — sevkiyat planının içinde önceden yazılıdır. Bu sayfa, Bornova teslimatlarımızın nasıl kurgulandığını adım adım anlatır.",
        maddeler: [
            {
                baslik: "Çevre yolu bağlantısıyla varış planı",
                metin:
                    "Bornova'nın şansı, İzmir çevre yolunun ilçeyi birden fazla kavşakla beslemesidir: depomuzdan çıkan çekici, kent merkezine hiç girmeden çevre yolu üzerinden ilçenin sanayi ve işyeri kuşağına iner. Varış planında hangi kavşaktan çıkılacağı adrese göre seçilir; yanlış kavşak seçimi, ağır araçla geri dönüşü zor bir kent içi sapmaya dönüşür. Sevkiyat föyünde bu yüzden kavşak adı, çıkış sonrası dönüş sırası ve son 500 metrenin tarifi ayrı satır olarak yazılır.",
            },
            {
                baslik: "Sabah zirvesinden önce kapıda olmak",
                metin:
                    "İlçenin ana arterleri sabah işe gidiş saatlerinde belirgin biçimde tıkanır ve ağır araç bu tıkanıklıkta en yavaş halkadır. Standart uygulamamız, Bornova teslimatlarını zirve öncesine çekmektir: çekici depodan erken çıkar, makine mesai başlamadan sahada indirilmiş olur ve müşteri güne makineyle başlar. Zirve saatine denk düşen zorunlu sevkiyatlarda varış tahmini pay ile verilir ve alıcıya gecikme ihtimali baştan söylenir — sürpriz, teslimat planının düşmanıdır.",
            },
            {
                baslik: "İndirme noktası keşfi: son 50 metrenin planı",
                metin:
                    "Teslimatın en çok aksadığı yer güzergâh değil, tesisin kendi kapısıdır: dar giriş, alçak saçak, eğimli rampa veya dolu yükleme sahası, çekiciyi kapıda bekletir. Bornova sevkiyatlarında indirme noktası önceden fotoğrafla veya kısa bir telefon keşfiyle doğrulanır — kapı genişliği, saçak yüksekliği, zeminin rampa inişine uygunluğu ve makinenin park edeceği alan. Bu beş dakikalık ön kontrol, teslim günü yaşanacak yarım saatlik kapı krizini bütünüyle ortadan kaldırır.",
            },
            {
                baslik: "Randevulu iade: makinenin dönüş yolculuğu",
                metin:
                    "Kiralama biterken ikinci bir sevkiyat başlar: makinenin alınması. İade randevusu, teslim gününde birlikte kararlaştırılır ve alım aracı o güne göre planlanır — böylece makine sahada atıl beklemez, siz de kullanmadığınız gün için ödeme yapmazsınız. Bornova'da alım turları çoğu zaman aynı gün başka bir teslimatla birleştirilir; bir tesise makine bırakan araç, komşu tesisten bitmiş makineyi yükleyip döner. Bu döngü, bölgedeki nakliye maliyetini herkes için aşağı çeker.",
            },
            {
                baslik: "Üniversite ve hastane çevresinde özel pencereler",
                metin:
                    "Ege Üniversitesi kampüsü ve çevresindeki sağlık yapıları, Bornova'nın kendine özgü teslimat adresleridir: kampüs kapılarında araç kayıt prosedürü vardır, servis ve öğrenci trafiği belirli saatlerde yoğunlaşır ve indirme alanları kurum tarafından tahsis edilir. Bu adreslere sevkiyat, kurumun yazılı izin ve saat penceresi alındıktan sonra planlanır; şoföre kapı numarası ve irtibat kişisi verilir. Kurum içi teslimatın kuralı basittir: kapıya plansız gelen araç, planlı gelenin iki katı bekler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bornova teslimatında adres tipi ve sevkiyat penceresi",
                paragraflar: [
                    "Aynı ilçe içinde adres tipi değiştikçe teslimat kurgusu da değişir. Aşağıdaki tablo, Bornova sevkiyatlarında kullandığımız pencere ve araç eşleşmesini özetler.",
                ],
                tablo: {
                    basliklar: ["Adres tipi", "Tercih edilen pencere", "Araç", "Kritik nokta"],
                    satirlar: [
                        ["Sanayi kuşağı tesisleri", "Sabah erken", "Çekici + hidrolik rampa", "Çevre yolu kavşak seçimi"],
                        ["Cadde üstü işyerleri", "Trafik ara dilimi", "Kısa şasili araç", "Yol kenarı indirme süresi"],
                        ["Kampüs ve kurum adresleri", "Kurumun verdiği saat", "Kayıtlı araç", "Kapı izni ve irtibat kişisi"],
                        ["Şantiye adresleri", "Şantiye kabul saati", "Lowbed (ağır sınıf)", "Saha içi manevra alanı"],
                        ["AVM ve site adresleri", "Gece / erken sabah", "Sessiz indirme düzeni", "Yönetim onayı"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat föyü: her teslimatın yazılı planı",
                paragraflar: [
                    "Her Bornova sevkiyatı, araç çıkmadan önce tek sayfalık bir föyle kurulur: alıcı adı ve telefonu, adresin kavşak bazlı tarifi, indirme noktası notu, makinenin yüklü yüksekliği ve genişliği, tahmini varış saati ile gecikme durumunda aranacak kişi. Föy şoförün elinde, kopyası ofistedir; teslim anında iki taraf aynı bilgiye bakar. Bu küçük disiplin, 'araç nerede kaldı' telefonlarını neredeyse sıfırlar çünkü cevap zaten föyde yazılıdır.",
                    "Föyün alıcıya bakan yüzü de vardır: teslim tutanağı. Makine indirildiğinde saat, sayaç değeri ve gözle görülür durum birlikte kayda geçer; iade gününde aynı tutanağın ikinci yarısı doldurulur. Kiralamanın başı ve sonu böylece tartışmasız iki belgeye bağlanır.",
                ],
            },
            {
                baslik: "Aynı gün ikinci sefer: Bornova'nın yoğunluk avantajı",
                paragraflar: [
                    "Bornova, teslimat ağımızın en sık uğranan durağıdır ve bu yoğunluğun müşteriye dönen bir avantajı vardır: bölgeye çoğu gün zaten araç çıkar. Sabah planına yetişemeyen bir talep, öğleden sonraki ikinci seferle aynı gün karşılanabilir; küçük sınıf makinelerde bu esneklik daha da geniştir. Acil taleplerde ilk sorumuz adresinizin o günkü tur güzergâhına uzaklığıdır — güzergâh üstündeyseniz, 'yarın' cevabı çoğu zaman 'bugün'e döner.",
                    "Bu esnekliğin sınırı da dürüstçe söylenir: ağır sınıf makineler lowbed ister ve lowbed günlük tura eklenemez; onun sevkiyatı her koşulda ayrı planlanır. Talebinizi iletirken makine sınıfını belirtmeniz, size verilecek saatin gerçekçi olmasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makine sabah 08:00'de sahamızda olabilir mi?",
                cevap:
                    "Bornova için bu, en sık verdiğimiz söz ve en rahat tuttuğumuz sözdür: sabah zirvesi öncesi çıkan araç, çevre yolu üzerinden ilçeye trafiğe yakalanmadan iner ve mesai başlamadan indirme tamamlanır. Bunun tek koşulu, bir önceki gün adresin ve indirme noktasının netleşmiş olmasıdır — sabah saat 07:30'da adres tarif etmeye çalışan bir teslimat, penceresini kaçırır. Siparişi bir gün önceden kapatın; sabah kapınızda makine ile karşılaşırsınız.",
            },
            {
                soru: "Teslimat saatine biz mi karar veriyoruz, siz mi?",
                cevap:
                    "Birlikte karar verilir ama öneri bizden gelir: adresinizin bulunduğu aksın trafik ritmini ve o günkü araç turlarını biz gördüğümüz için, size birkaç gerçekçi pencere sunarız — örneğin 'sabah erken' veya 'öğle arası dilimi'. Siz tesisinizin kabul saatlerine göre birini seçersiniz. Kesin saat dayatması iki yönde de çalışmaz: bizim 'ne zaman gelirse' dememiz sizi belirsizliğe, sizin dakikası dakikasına saat istemeniz aracı trafik kumarına iter. Pencere modeli ikisinin dengesidir.",
            },
            {
                soru: "Tesisimizin kapısı dar; makine içeri nasıl girecek?",
                cevap:
                    "Bu sorunun cevabı teslim günü değil, sipariş günü aranır: kapı genişliğinizi ve varsa saçak yüksekliğinizi bildirirsiniz, biz makinenin katlanmış boyutlarıyla karşılaştırırız. Makine kapıdan geçiyorsa araç içeride indirir; geçmiyorsa iki seçenek konuşulur — makinenin kapı önünde indirilip kendi yürüyüşüyle içeri alınması ya da daha dar gövdeli bir modelin planlanması. Kapıda keşfedilen darlık teslimatı böler; telefonda keşfedilen darlık yalnızca planı değiştirir.",
            },
            {
                soru: "Kiralama uzarsa iade aracını nasıl erteliyoruz?",
                cevap:
                    "Tek telefonla: iade randevusu sabit bir tarih değil, karşılıklı güncellenen bir kayıttır. Alım aracı planlanmadan önce haber verdiğinizde randevu ileri alınır ve kiralama kesintisiz devam eder. Kritik olan zamanlamadır — alım aracı yola çıktıktan sonra gelen erteleme, boş sefer maliyeti doğurur ve bunu yansıtmak zorunda kalırız. Bu yüzden pratiğimiz şudur: iade gününden bir gün önce biz sizi arar, 'yarın alıyor muyuz' diye teyit ederiz. Cevabınız planı belirler.",
            },
            {
                soru: "Cadde üstündeki dükkânımıza teslimat trafiği aksatır mı?",
                cevap:
                    "Doğru pencerede yapılırsa aksatmaz: cadde üstü indirmelerde aracı en kısa süre yolda tutan düzeni kurarız — makine rampadan iner inmez araç ayrılır, makine kaldırım hizasında güvenli noktaya alınır. Bu operasyon dakikalarla ölçülür ama yanlış saatte dakikalar bile kuyruk yaratır; bu yüzden cadde üstü teslimatlar trafik ara dilimlerine, gerekiyorsa mesai öncesine yazılır. Yoğun kavşak yakınındaki adreslerde yan sokaktan indirme alternatifi de keşifte değerlendirilir.",
            },
            {
                soru: "Aynı anda iki farklı adresimize makine gerekiyor; nakliye ikiye mi katlanır?",
                cevap:
                    "Katlanmaz — tur planına bağlanır: iki adres birbirine yakınsa tek araç ardışık iki indirme yapar ve nakliye tek sefer üzerinden hesaplanır; uzaksa iki araç kullanılır ama aynı bölge turuna denk getirilerek maliyet yine tekil sevkiyatların toplamının altında tutulur. Bornova içindeki çift teslimatlar çoğunlukla ilk senaryoya girer. Sipariş verirken iki adresi birlikte iletin; planlama ikisini tek kurguda çözer ve fark, teklife yansır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bornova'nın çevre yolu bağlantıları, Ankara yolu aksı ve Ege Üniversitesi kampüsü kamuya açık coğrafi bilgidir; saat penceresi, sevkiyat föyü ve tur birleştirme düzeni firma pratiğidir.",
    },

    "bolge:gaziemir": {
        h1: "Gaziemir ve Serbest Bölgeye Randevulu Manlift Sevkiyatı",
        giris:
            "Gaziemir teslimatlarının karakterini iki komşuluk belirler: Adnan Menderes Havalimanı'nın çevresindeki denetimli trafik düzeni ve Ege Serbest Bölgesi'nin kapı prosedürü. Buraya makine göndermek yalnızca yola çıkmak değil, evrakla yola çıkmaktır — serbest bölge kapısında aracın, şoförün ve yükün önceden bildirilmiş olması gerekir; bildirilmemiş araç, kapıda bekleyerek herkesin saatini yakar. Bizim Gaziemir hattımız bu gerçeğin üzerine kuruludur: sevkiyat tarihi belirlenirken önce alıcının bölge içi giriş yazısı sorulur, araç ve şoför bilgileri bir gün önceden iletilir ve varış, kapının işlek olmadığı dilime yazılır. İzmir-Aydın otoyolunun ilçeyi doğrudan beslemesi ise güzergâh tarafını kolaylaştırır — Gaziemir, depodan çıkışı en akıcı adreslerimizden biridir; zorluk yolda değil, kapıdadır ve biz kapıyı önceden açarız.",
        maddeler: [
            {
                baslik: "Serbest bölge kapısında evrak öncelikli sevkiyat",
                metin:
                    "Ege Serbest Bölgesi'ne makine sokmak, sıradan bir adres teslimatından farklı işler: bölgeye giriş, işleticinin kurallarına tabidir ve araç-şoför-yük bilgilerinin önceden kayda geçmesi gerekir. Sevkiyat planımızda bu yüzden ilk kalem evraktır — kiracı firmadan giriş organizasyonunu başlatması istenir, plaka ve kimlik bilgileri iletilir, makinenin belgeleri araca konur. Evrakı tamamlanmadan hiçbir aracı Gaziemir'e çıkarmayız; kapıda bekleyen çekici, hem sizin gününüzü hem bizim tur planımızı bozar.",
            },
            {
                baslik: "Otoyol erişimi: depodan kapıya kısa hat",
                metin:
                    "Gaziemir'in İzmir-Aydın otoyoluna doğrudan bağlanması, sevkiyatın yol kısmını öngörülebilir kılar: çekici kent içi arterlere hiç girmeden ilçeye ulaşır ve varış süresi trafikten görece bağımsızdır. Bu öngörülebilirlik, randevulu teslimatın temelidir — kapıya '10:00-10:30 arası' diyebilmek, güzergâhın sürprizsiz olmasına bağlıdır. Otoyol çıkışı sonrası son kilometrelerin tarifi föye ayrıca yazılır; ilçe içinde sanayi adresleri ile konut dokusunun iç içe geçtiği sokaklarda son dönüşler önemlidir.",
            },
            {
                baslik: "Havalimanı çevresi adreslerde denetimli teslim",
                metin:
                    "Havalimanına komşu lojistik ve kargo tesislerine yapılan teslimatlarda, tesislerin kendi güvenlik düzenleri devreye girer: araç kaydı, şoför kimlik kontrolü, bazı sahalarda refakatli giriş. Bu adreslerde teslim saati, tesisin kabul penceresiyle birlikte belirlenir ve şoföre giriş prosedürü önceden anlatılır — hangi kapı, hangi bekleme cebi, kimden onay. Denetimli sahaların ortak kuralı bekletmeye toleranssızlıktır; planlı gelen araç dakikalar içinde işini bitirir, plansız gelen kapı sırasında öğleni bulur.",
            },
            {
                baslik: "İhracatçı tempoya uyumlu saat pencereleri",
                metin:
                    "Gaziemir'in üretici ve ihracatçı profili, yükleme rampalarının gün boyu dolu olması demektir: konteyner araçları, kamyon sıraları ve sevkiyat çıkışları, bizim makinemizin indirileceği sahayı da kullanır. Bu yüzden teslim penceresi, alıcının kendi sevkiyat trafiğine sorularak seçilir — 'rampalarınız hangi saatte nefes alıyor?' sorusu, Gaziemir föylerimizin standart satırıdır. Çoğu tesiste cevap sabah erken veya öğle arasıdır; makinemiz o boşluğa iner ve sizin yükleme düzeniniz hiç bozulmaz.",
            },
            {
                baslik: "İade gününde bölgeden çıkış planı",
                metin:
                    "Serbest bölge içindeki kiralamalarda iade, girişin aynadaki görüntüsüdür: makinenin bölgeden çıkışı da kayıt ister ve alım aracının bilgileri önceden bildirilmelidir. İade randevusu bu yüzden en az bir gün önce kesinleştirilir; aynı gün 'gelin alın' modeli serbest bölgede çalışmaz. Bölge dışı Gaziemir adreslerinde ise standart esnek alım düzenimiz geçerlidir. İki rejimin farkını sözleşme aşamasında açıkça anlatırız ki iade haftasında kimse evrak sürprizi yaşamasın.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gaziemir sevkiyatında adres rejimi ve hazırlık süresi",
                paragraflar: [
                    "Gaziemir'de teslimatın hazırlık süresi, adresin hangi rejimde olduğuna göre değişir. Tablo, sipariş ile teslim arasında geçmesi gereken asgari süreyi gösterir.",
                ],
                tablo: {
                    basliklar: ["Adres rejimi", "Asgari hazırlık", "Gereken ön bilgi", "Teslim penceresi"],
                    satirlar: [
                        ["Serbest bölge içi", "1 iş günü", "Giriş kaydı + plaka + kimlik", "Kapı yoğunluğu dışı dilim"],
                        ["Havalimanı çevresi tesis", "1 iş günü", "Tesis araç kaydı", "Tesisin kabul saati"],
                        ["Bölge dışı sanayi adresi", "Aynı gün mümkün", "İndirme noktası teyidi", "Sabah veya öğle arası"],
                        ["Cadde üstü işyeri", "Aynı gün mümkün", "Yol kenarı uygunluğu", "Trafik ara dilimi"],
                        ["Şantiye", "Duruma göre", "Saha kabul saati", "Şantiye programı"],
                    ],
                },
            },
            {
                baslik: "Evrak çantası: araçla birlikte giden belgeler",
                paragraflar: [
                    "Denetimli adreslerin çokluğu, Gaziemir sevkiyatlarında belge disiplinini zorunlu kılar. Her araçta makineye ait standart bir belge seti bulunur: periyodik kontrol raporu, makine kimlik bilgileri ve sevk irsaliyesi. Serbest bölge teslimatlarında bu sete bölgeye özgü giriş evrakı eklenir. Belgelerin araçta olması yetmez, güncel olması gerekir — kapı görevlisinin çevirdiği tek eksik belge, o günün penceresini kapatır ve teslimatı ertesi güne atar.",
                    "Alıcıya düşen pay da nettir: bölge içi firmaysanız giriş organizasyonunu sizin başlatmanız gerekir çünkü kaydı kiracı firma açtırır. Biz süreci adım adım tarif ederiz, bilgileri anında iletiriz; ama kapıyı açan imza sizindir. Bu iş bölümü baştan konuşulduğunda süreç bir günde biter.",
                ],
            },
            {
                baslik: "Randevu kültürü: Gaziemir'in bize öğrettiği düzen",
                paragraflar: [
                    "Denetimli sahalarla yıllarca çalışmak, sevkiyat pratiğimizi bütün bölgeler için değiştirdi: Gaziemir'de zorunluluk olan randevulu teslim, artık her teslimatımızın varsayılanıdır. Randevu, iki tarafı da disipline eder — biz aracı doğru saatte çıkarmak için tur planını sıkı kurarız, alıcı da indirme sahasını ve karşılayacak kişiyi o saate hazırlar. Sonuç, iki tarafın da beklemediği bir teslimattır.",
                    "Randevunun esnek yüzü de vardır: uçuş ertelemesi gibi, sevkiyatta da kaymalar olur. Farkımız kaymanın yönetimidir — araç gecikecekse alıcı, tahmini yeni varışla birlikte aranır; alıcının sahası dolduysa araç, yakındaki bekleme noktasına alınır ve saha boşalınca yanaşır. Kayma yönetilirse randevu bozulmaz, yalnızca güncellenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Serbest bölgedeki firmamıza makine kiralamak istiyoruz; süreç normalden farklı mı?",
                cevap:
                    "Bir adım fazladır, o kadar: standart kiralamadaki her şey aynı işler, üstüne bölgeye giriş kaydı eklenir. Sizden bölge içi giriş organizasyonunu başlatmanızı isteriz; biz plaka, şoför kimliği ve makine belgelerini aynı gün iletiriz. Kayıt tamamlanınca sevkiyat, kapının sakin dilimine yazılır. Toplamda bir iş günlük hazırlık payı yeterlidir. İlk kiralamada süreci telefonla adım adım yürütürüz; ikinci kiralamada artık siz de ezbere bilirsiniz.",
            },
            {
                soru: "Havalimanı yakınındaki depomuza teslimat için özel izin gerekiyor mu?",
                cevap:
                    "Havalimanı çevresindeki tesislerin çoğu kendi araç kayıt düzenini işletir; kamusal bir özel izinden çok, tesisinizin güvenlik prosedürü belirleyicidir. Sizden tesise araç bildirimi yapmanızı isteriz — plaka ve şoför bilgisini biz veririz — ve teslim saati, tesisinizin kabul penceresine yazılır. Şoförümüz giriş prosedürünüzü önceden bilerek gelir: hangi kapı, nerede bekleme, kimden onay. Bu hazırlıkla teslimat, kapı sıranıza takılmadan dakikalar içinde biter.",
            },
            {
                soru: "Sipariş verdikten kaç saat sonra makine elimizde olur?",
                cevap:
                    "Adres rejiminize bağlıdır: bölge dışı, denetimsiz bir Gaziemir adresi için aynı gün teslim çoğu zaman mümkündür — özellikle adresiniz o günkü otoyol turunun üstündeyse. Serbest bölge içi ve denetimli tesis adreslerinde ise evrak ve kayıt adımları nedeniyle bir iş günlük hazırlık gerçekçi süredir. Telefonda adresinizi aldığımız anda hangi rejimde olduğunuzu söyler ve gerçek bir saat veririz; 'hemen geliyoruz' deyip kapıda evrak yüzünden bekleyen araç, kimseye kazandırmaz.",
            },
            {
                soru: "Rampalarımız gün boyu konteyner yüklüyor; makine indirme sahamız yok gibi. Ne yapıyorsunuz?",
                cevap:
                    "Sahanızın nefes aldığı dilimi birlikte buluruz: sipariş görüşmesinde yükleme programınızı sorarız ve teslim, rampa trafiğinizin seyrek olduğu pencereye yazılır — çoğu ihracatçıda bu sabah ilk saat veya öğle arasıdır. Makinemizin indirilmesi rampa istemez; düz ve sağlam bir zemin parçası yeterlidir, bu yüzden konteyner sahanızın kenarındaki kısa bir boşluk bile iş görür. İndirme dakikalar sürer ve aracımız sahayı hemen terk eder; sizin sevkiyat düzeniniz kesintiye uğramaz.",
            },
            {
                soru: "Bölge içindeki kiralamamız bitti; makineyi kapıya biz mi çıkarmalıyız?",
                cevap:
                    "Hayır — makineyi sahanızdan biz alırız; sizden istenen yalnızca çıkış kaydının açılmasıdır. İade tarihini bir gün önceden kesinleştiririz, alım aracının bilgilerini iletiriz ve siz bölge çıkış evrakını hazırlatırsınız. Alım günü şoförümüz makineyi bulunduğu noktadan yükler, çıkış kapısında evrak kontrolüyle bölgeden ayrılır. Makineyi kapıya taşımak, ara depoya çekmek gibi bir yükünüz yoktur; sizin katkınız evrak, bizim işimiz nakliyedir.",
            },
            {
                soru: "Teslimat günü uçak kargo sevkiyatımızla çakışırsa ne olur?",
                cevap:
                    "Randevu güncellenir, teslimat kaybolmaz: sahanızın dolduğunu bildirdiğiniz anda aracımız yakın bekleme noktasına alınır ve saha boşaldığında yanaşır — Gaziemir turlarımız bu tür kaymalara pay bırakılarak planlanır. Çakışmayı önceden görüyorsanız, teslim penceresini bir dilim kaydırmak daha da temiz çözümdür; tek telefon yeter. Bizim tarafımızdan kaynaklanan gecikmelerde de aynı şeffaflık işler: araç yoldayken tahmini varış güncellenir ve siz sahayı boşuna hazır bekletmezsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ege Serbest Bölgesi'nin Gaziemir'deki konumu, giriş kayıt düzeni ve Adnan Menderes Havalimanı komşuluğu kamuya açık bilgidir; hazırlık süreleri, föy ve bekleme noktası düzeni firma pratiğidir.",
    },

    "bolge:buca": {
        h1: "Buca'nın Eğimli Dokusuna Planlı Manlift Teslimatı",
        giris:
            "Buca'ya makine taşımak, İzmir'in en kalabalık ilçelerinden birinin topografyasıyla sözleşme yapmaktır: yamaca kurulmuş mahalleler, eğimli ve dar sokaklar, gün boyu dolu ana caddeler ve ilçenin iç kesimlerine ağır araçla ulaşmanın sınırlı sayıda güzergâhı. Burada teslimatın başarısı, aracın hangi yoldan gireceğinin ve makinenin tam olarak nerede indirileceğinin önceden çizilmesine bağlıdır — eğimli bir sokakta rampa indirmek, düz zemindekiyle aynı iş değildir ve yanlış noktada durdurulan çekici, arkasında mahalle trafiğini biriktirir. Buca hattımız bu yüzden keşif ağırlıklı çalışır: adres geldiğinde önce sokağın eğimi, genişliği ve araç dönüş kabiliyeti değerlendirilir, indirme için düz bir cep belirlenir ve teslim saati, hem trafiğin hem mahallenin sakin dilimine yazılır. Sanayi tarafında ise ilçenin işlek üretim adacıkları, ana arterlere yakınlıkları sayesinde çok daha standart bir sevkiyat düzeniyle beslenir.",
        maddeler: [
            {
                baslik: "Eğimli sokakta indirme: düz cep kuralı",
                metin:
                    "Makine rampadan inerken araç ve rampa hattının olabildiğince düz zeminde olması gerekir; belirgin eğimde indirme, hem makine hem çevre için risk üretir. Buca'nın yamaç mahallelerinde bu yüzden 'düz cep kuralı' uygularız: adresin dibi eğimliyse, en yakın düz zemin parçası — bir kavşak ağzı, okul önü genişliği, market otoparkı köşesi — indirme noktası seçilir ve makine son mesafeyi kendi yürüyüşüyle tırmanır. Bu noktanın seçimi keşfin işidir ve teslim gününden önce netleşir.",
            },
            {
                baslik: "Ağır araç güzergâhı: ilçeye giriş kapıları",
                metin:
                    "Buca'nın iç kesimlerine ağır araçla ulaşmak, her sokaktan mümkün değildir; çekici için uygun geniş güzergâhlar bellidir ve sevkiyat planı bu ana girişlerden birine bağlanır. Yanlış navigasyon tarifi, çekiciyi dönemeyeceği bir dar sokağa sokabilir — ağır araçta geri manevra, kent içinde en pahalı hatadır. Föylerimizde bu yüzden navigasyon uygulaması değil, şoförün anlayacağı kavşak-cadde dizisi yazar ve Buca'ya ilk kez giden şoföre güzergâh telefonla da anlatılır.",
            },
            {
                baslik: "Okul saatleri ve mahalle ritmine uyum",
                metin:
                    "Buca'nın yoğun konut dokusunda teslimat, mahallenin gün ritmini gözetmek zorundadır: okul giriş-çıkış saatlerinde servis araçları sokakları doldurur, akşamüstü cadde üstü parklanma sıklaşır ve ağır aracın manevra alanı daralır. Konut bölgesi teslimatlarını bu yüzden sabah ortası veya erken öğleden sonra dilimine yazarız — servis dalgası geçmiş, akşam parklanması başlamamıştır. Site içi adreslerde yönetimle saat teyidi yapılır; bazı siteler yük aracını yalnızca belirli saatlerde kabul eder.",
            },
            {
                baslik: "Sanayi adacıklarına standart sevkiyat",
                metin:
                    "İlçenin üretim ve depolama tesisleri, konut dokusunun tersine, ana arterlere yakın konumlanır ve buralara teslimat standart düzenle akar: arter üzerinden kısa sapma, tesis içi indirme, hızlı dönüş. Bu adreslerde kritik konu saha içi trafiktir — servis ve yükleme araçlarıyla çakışmamak için tesisin kabul saati sorulur. Buca sanayi teslimatlarının çoğu, sabah turunun ilk duraklarına yazılır; araç arterden sapıp döndüğünde kent trafiği daha uyanmamıştır.",
            },
            {
                baslik: "Alım gününde eğim hesabı yeniden yapılır",
                metin:
                    "İade sevkiyatı, teslimatın tekrarı değildir: makine günlerce çalıştıktan sonra bulunduğu nokta, indirildiği nokta olmayabilir ve alım aracı için yükleme cebi yeniden belirlenir. Eğimli bölgelerde bu hesap önemlidir — yüklemede de düz zemin gerekir ve makinenin alım noktasına kendi gücüyle inmesi planlanır. İade randevusunda bu yüzden makinenin o anki konumunu sorarız; 'bıraktığınız yerde' cevabı işi kolaylaştırır, değilse yeni cep telefonda birlikte seçilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Buca teslimatında sokak tipi ve indirme çözümü",
                paragraflar: [
                    "Buca'da adresin sokak tipi, indirme çözümünü doğrudan belirler. Tablo, keşifte kullandığımız eşleştirmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Sokak tipi", "İndirme çözümü", "Teslim dilimi", "Not"],
                    satirlar: [
                        ["Ana cadde üstü", "Yol kenarı hızlı indirme", "Trafik ara dilimi", "Araç bekleme süresi en kısa"],
                        ["Eğimli dar sokak", "En yakın düz cep + makine yürüyüşü", "Sabah ortası", "Cep keşifle önceden seçilir"],
                        ["Site içi adres", "Site otoparkı / yük kapısı", "Yönetimin verdiği saat", "Yük aracı kabul kuralı sorulur"],
                        ["Sanayi adacığı", "Tesis sahası içi", "Sabah turu ilk durak", "Kabul saati teyidi"],
                        ["Okul-kurum çevresi", "Kurum bahçesi / arka kapı", "Servis dalgası dışı", "Giriş izni önceden"],
                    ],
                },
            },
            {
                baslik: "Telefon keşfi: üç soruda sokak profili",
                paragraflar: [
                    "Buca adreslerinde her teslimatı üç soruluk bir telefon keşfiyle açarız: sokağınız araç trafiğine iki yönlü mü açık, kapınızın önü eğimli mi, en yakın düz ve geniş zemin neresi? Bu üç cevap, indirme kurgusunun iskeletini verir; gerekirse alıcıdan kapı önünün ve sokağın birer fotoğrafı istenir. Fotoğraf, sokağı hiç görmemiş planlamacıya bile doğru kararı verdirir — kaldırım taşı, elektrik direği, parklanma düzeni gibi ayrıntılar karede kendini gösterir.",
                    "Keşfin maliyeti beş dakikadır; keşifsiz teslimatın maliyeti ise ölçülemez: dönemeyen çekici, indirilemeden geri dönen makine ve kaybedilen gün. Buca gibi dokusu değişken ilçelerde bu beş dakika, sevkiyat planımızın en yüksek getirili yatırımıdır.",
                ],
            },
            {
                baslik: "Mahalle içinde ağır araç nezaketi",
                paragraflar: [
                    "Konut dokusunda çalışan bir sevkiyat aracı, mahallenin misafiridir ve buna göre davranır: indirme sırasında motor gereksiz çalıştırılmaz, sokak tamamen kapatılacaksa süre dakikalarla sınırlanır ve komşu araç sahiplerinin çıkışı engellenmez. Alıcıdan ricamız, teslim saatinde kapı önünün park halindeki araçlardan arındırılmasına yardım etmesidir — çoğu zaman bir komşuya önceden söylenmiş tek cümle, indirme cebini açık tutar.",
                    "Bu nezaket kuralları yazılı prosedür değil, saha tecrübesidir; ama sonucu ölçülebilir: mahalle içinde sorunsuz biten her teslimat, aynı sokağa bir sonraki gelişi kolaylaştırır. Buca'da aynı mahallelere yıllardır teslimat yapıyor olmamızın açıklaması budur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sokağımız hem dar hem yokuş; makine bize gelebilir mi?",
                cevap:
                    "Çoğu durumda evet — ama makine kapınıza araçla değil, kendi tekerleğiyle gelir: çekici, sokağınıza en yakın düz ve geniş zeminde durur, makine orada indirilir ve son mesafeyi kendi yürüyüşüyle tırmanır. Modern makinelerin tırmanma kabiliyeti çoğu Buca yokuşu için yeterlidir; sınırda kalan eğimlerde model seçimi buna göre yapılır. Sizden istediğimiz, sokağın ve kapı önünün birer fotoğrafı ile en yakın düzlüğün tarifi. Bu bilgiyle plan telefonda kurulur ve teslim günü sürprizsiz geçer.",
            },
            {
                soru: "Teslimat için sokağı kapatmanız gerekir mi?",
                cevap:
                    "Çoğu teslimatta gerekmez; gerektiğinde de dakikalarla sınırlı tutulur. İndirme düzenimiz aracı yolda en kısa süre tutacak şekilde kurulur: rampa iner, makine iner, rampa kalkar, araç ayrılır. Dar sokaklarda bu işlem sırasında geçiş kısa süre durabilir — bu durumda teslim saati, sokağın en sakin dilimine yazılır ve komşuların araç çıkışlarıyla çakışma en aza iner. Uzun süreli yol kapatma gerektiren istisnai durumlar keşifte belli olur ve gerekli koordinasyon önceden konuşulur.",
            },
            {
                soru: "Sitemizin yönetimi yük araçlarını sadece belirli saatte alıyor; buna uyabilir misiniz?",
                cevap:
                    "Uyarız — zaten ilk sorularımızdan biri budur: site adreslerinde yönetimin yük aracı kabul kuralını sipariş aşamasında sorar, teslim penceresini o kurala göre yazarız. Yönetime bildirilecek plaka ve şoför bilgisini önceden iletiriz; bazı sitelerin istediği geçici giriş formu gibi evrakları da doldururuz. Sizin katkınız, yönetimle ilk teması kurmak ve bize kuralı iletmektir. Bu koordinasyon kurulduğunda site teslimatı, cadde teslimatından farksız akar.",
            },
            {
                soru: "Makineyi hafta sonu teslim alabilir miyiz?",
                cevap:
                    "Alabilirsiniz ve Buca için hafta sonu tesliminin bir avantajı da vardır: cumartesi sabahı trafik hafta içinden belirgin hafiftir, dar sokaklarda parklanma henüz yoğunlaşmamıştır ve indirme cebi bulmak kolaylaşır. Hafta sonu sevkiyatları için tek koşul, planın cuma gününe kadar kesinleşmesidir — araç ve şoför programı hafta kapanmadan yazılır. Pazartesi başlayacak bir iş için cumartesi teslimi, hem sahada hazırlık günü kazandırır hem de pazartesi sabahının teslimat telaşını ortadan kaldırır.",
            },
            {
                soru: "İndirme sırasında kapı önündeki park halindeki araçlar sorun olur mu?",
                cevap:
                    "Olabilir ve çözümü iş birliğidir: indirme cebinin teslim saatinde boş olması gerekir, park halindeki tek bir araç bile rampa hattını kapatabilir. Teslim saatini size önceden bildirmemizin nedeni budur — kapı önünüzü ve seçilen cebi o saat için açık tutmanızı rica ederiz; çoğu mahallede komşuya söylenmiş bir cümle yeterlidir. Cep doluysa şoförümüz alternatif düzlüğe kayar ve makine yürüyüş mesafesi biraz uzar; teslimat yine tamamlanır ama en temiz kurgu, planlanan cebin açık olmasıdır.",
            },
            {
                soru: "Buca'daki tesisimize sabah çok erken teslimat mümkün mü?",
                cevap:
                    "Sanayi adresleri için en verimli dilim zaten budur: araç, kent trafiği yoğunlaşmadan arterden sapar, tesisinizde indirir ve gün başlarken sahadan çıkmış olur. Erken teslimin koşulu tesisinizin o saatte açık olmasıdır — kapıyı açacak ve teslim tutanağını imzalayacak bir yetkilinin sahada bulunması gerekir. Vardiyalı çalışan tesislerde gece vardiyasının teslim alması da mümkündür; yetkilinin adını föye yazarız. Konut dokusundaki adreslerde ise çok erken saat mahalle ritmine uymaz; oralarda sabah ortası dilimini öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Buca'nın yamaç topografyası, yoğun konut dokusu ve sanayi adacıkları kamuya açık bilgidir; düz cep kuralı, üç soruluk telefon keşfi ve mahalle nezaket düzeni firma pratiğidir.",
    },

    "bolge:pinarbasi": {
        h1: "Pınarbaşı Sanayi Bölgesine Arter Üstü Manlift Teslimatı",
        giris:
            "Pınarbaşı, Bornova'nın Ankara yolu üzerindeki sanayi yüzüdür: İzmir'i Kemalpaşa ve iç bölgelere bağlayan ana aksın kenarında dizilmiş üretim tesisleri, depolar ve ticari işletmeler, teslimat lojistiği açısından şehrin en erişilebilir kuşaklarından birini oluşturur. Buraya sevkiyat, kent içi sokak labirentine girmeden, ana arterden doğrudan parsele sapmakla biter — ama bu kolaylığın kendi kuralı vardır: işlek bir devlet yolunun kenarında araç durdurulmaz, indirme her koşulda parsel içinde yapılır ve arterden sapış ile kapıdan giriş arasındaki saniyeler önceden planlanır. Pınarbaşı hattımız bu ilkeyle çalışır: teslim öncesi tesisin kapı düzeni ve saha içi indirme alanı teyit edilir, araç arterin akışını hiç bozmadan içeri alınır ve makine dakikalar içinde yere iner. Ankara yolu aksının çift yönlü yoğun akışı, sevkiyat saatinin seçiminde tek belirleyicidir ve biz o saati trafiğin ritmine bakarak seçeriz.",
        maddeler: [
            {
                baslik: "Arter kenarında durmama ilkesi",
                metin:
                    "Ankara yolu gibi yüksek hızlı ve yoğun bir aksın kenarında yük indirmek, hem trafik güvenliği hem hukuki sorumluluk açısından kabul edilemez bir kurgudur; Pınarbaşı teslimatlarında ilk kuralımız, aracın yalnızca parsel içinde veya tesisin kendi cebinde durmasıdır. Bu yüzden sipariş aşamasında tesisin kapısından içeri çekicinin sığıp sığmadığı sorulur — kapı dar, saha dolu veya giriş eğimliyse, indirme için tesisin arka cephesi ya da yan parsel anlaşması gibi alternatifler önceden kurulur.",
            },
            {
                baslik: "Sapak planı: yön ve dönüş hesabı",
                metin:
                    "Bölünmüş bir arterde tesise hangi yönden yaklaşıldığı, teslimatın süresini belirler: yanlış yönden gelen çekici, ilk dönüş imkânına kadar kilometrelerce ilerleyip geri dönmek zorunda kalır. Pınarbaşı föylerinde bu yüzden adresin hangi yönde kaldığı ve aracın hangi kavşaktan dönüş yapacağı açıkça yazılır. Depodan çıkış rotası da buna göre kurulur; doğru yönden yaklaşan araç, sapak-kapı-indirme zincirini tek hamlede tamamlar ve arter üzerinde gereksiz kilometre yapmaz.",
            },
            {
                baslik: "Ağır tesis trafiğiyle sıra paylaşımı",
                metin:
                    "Pınarbaşı parsellerinin çoğunda gün boyu kamyon giriş çıkışı vardır: hammadde kabulü, sevkiyat yüklemesi, hafriyat ve atık araçları aynı kapıyı kullanır. Bizim çekicimiz bu sıraya dahil olur ve plan, sıranın en kısa olduğu dilime yazılır — tesise 'kapınız hangi saatte sakin?' diye sormak, Pınarbaşı teslimatının standart açılışıdır. Kapı sırası öngörülemeyen tesislerde şoföre içeride bekleme noktası tarif edilir; arterde bekleyen araç seçeneği masada yoktur.",
            },
            {
                baslik: "Mermer ve ağır yük sahalarında zemin uyumu",
                metin:
                    "Bölgedeki doğaltaş, metal ve ağır emtia işleyen sahalarda zemin, forklift ve vinç trafiğine göre düzenlenmiştir: blok stok alanları, ray hatları ve yüklü tonajın izleri, indirme noktası seçiminde dikkat ister. Makinenin indirileceği zemin parçasının düz, sağlam ve saha içi araç trafiğinden ayrılabilir olması gerekir. Teslim öncesi telefonda bu nokta birlikte seçilir; sahayı bilen bir yetkilinin 'şuraya indirin' diyebilmesi, teslimatı dakikalar mertebesine indirir.",
            },
            {
                baslik: "Kemalpaşa aksına uzayan turlarla maliyet paylaşımı",
                metin:
                    "Pınarbaşı, depomuzdan Kemalpaşa yönüne çıkan her sevkiyatın doğal güzergâhı üzerindedir ve bu konum, bölgeye özgü bir maliyet avantajı üretir: Kemalpaşa turuna çıkan araç, gidiş veya dönüşte Pınarbaşı teslimatını aynı sefere ekleyebilir. Tarihi esnek olan talepler bu turlara bağlanır ve nakliye bedeli paylaşımlı hesaplanır. Sipariş verirken 'şu gün şart mı, esnek mi' sorumuzun nedeni budur — esneklik, Ankara yolu aksında doğrudan paraya dönüşür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Pınarbaşı teslimatında saha tipi ve indirme düzeni",
                paragraflar: [
                    "Arter üstü konum ortak olsa da parsel içi düzen tesisten tesise değişir. Tablo, Pınarbaşı'nda karşılaştığımız saha tiplerini ve uyguladığımız indirme düzenini gösterir.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "İndirme düzeni", "Uygun dilim", "Dikkat noktası"],
                    satirlar: [
                        ["Üretim tesisi + yükleme sahası", "Saha içi ayrılmış köşe", "Kapı sırasının sakin saati", "Kamyon sırasıyla çakışma"],
                        ["Doğaltaş / ağır emtia sahası", "Yetkilinin gösterdiği düz zemin", "Sabah", "Blok stoku ve vinç hattı"],
                        ["Depo ve antrepo", "Rampa dışı düz alan", "Sabah erken", "Rampa trafiğini kesmeme"],
                        ["Cadde arkası küçük işletme", "Parsel içi veya arka cephe", "Öğle arası", "Kapı genişliği teyidi"],
                        ["Açık stok / satış sahası", "Giriş yakını cep", "Gün içi esnek", "Müşteri araç trafiği"],
                    ],
                },
            },
            {
                baslik: "Sapak-kapı-indirme: üç adımlı hız standardı",
                paragraflar: [
                    "Pınarbaşı teslimatını üç adıma indirger ve her adımı önceden çözeriz. Sapak: araç doğru yönden yaklaşır, dönüş kavşağı föyde yazılıdır. Kapı: tesis, aracın geleceği saati bilir ve kapı görevlisi plakayı tanır; araç arterden ayrıldığı anda içeri süzülür. İndirme: nokta önceden seçilmiştir, rampa iner, makine yere alınır, tutanak imzalanır. Bu üç adımın toplamı, hazırlıklı bir tesiste çeyrek saati geçmez.",
                    "Standardın bozulduğu tek senaryo, adımlardan birinin plansız kalmasıdır: kapıda tanınmayan araç bekletilir, seçilmemiş indirme noktası saha içinde gezinmeye yol açar. Bu yüzden Pınarbaşı siparişlerinde üç adımın üçünü de telefonda kapatmadan aracı yola çıkarmayız.",
                ],
            },
            {
                baslik: "Arter aksında iade turları ve dönüş yükü",
                paragraflar: [
                    "Ankara yolu aksının çift yönlü doğası, iade lojistiğinde de kullanılır: Kemalpaşa yönünden boş dönen araç, Pınarbaşı'ndan bitmiş bir makineyi yükleyerek depoya döner. Bu 'dönüş yükü' modeli, iade randevularında esneklik sağlar — iade tarihiniz kesinleştiğinde, o günlerdeki dönüş seferlerine bakarız ve alımı boş dönen araca bağlarız. Sonuç, hem hızlı alım hem düşük maliyettir.",
                    "Modelin işlemesi için tek gereken, iade tarihini son güne bırakmamanızdır: birkaç gün önceden bildirilen iade, dönüş seferleriyle eşleşme şansı bulur. Son dakika iadeleri de alırız elbette — ama o alım için özel araç planlanır ve fark faturaya yansır. Erken haber, ucuz nakliyedir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimiz Ankara yolu üzerinde; araç yol kenarında indirme yapabilir mi?",
                cevap:
                    "Yapamaz — bu, pazarlık ettiğimiz değil baştan kapattığımız bir konudur: yüksek hızlı arterin kenarında rampa indirmek trafik güvenliği açısından kabul edilemez ve indirme her koşulda parsel içinde planlanır. Kapınızdan çekici giremiyorsa alternatifleri birlikte kurarız: arka cephe girişi, komşu parselle kısa süreli anlaşma veya makinenin sığdığı daha kompakt bir araç. Sipariş aşamasında kapı genişliğinizi ve saha durumunuzu sormamızın nedeni budur; çözüm her zaman vardır ama arterde durmak çözüm değildir.",
            },
            {
                soru: "Gün içinde kapımızda sürekli kamyon sırası var; makineniz sıraya mı girecek?",
                cevap:
                    "Sıraya girmek yerine sıranın boşluğuna gelir: sipariş görüşmesinde kapınızın en sakin saatini sorarız ve teslim o dilime yazılır — çoğu tesiste bu, sabah kabul dalgasından önce veya öğle molasındaki durgunluktur. Çekicimizin işi kamyonlardan kısadır: rampa, indirme ve çıkış çeyrek saat mertebesindedir; doğru dilimde geldiğinde sıranıza hissedilir bir yük bindirmez. Kapı görevlinize plakamızı önceden bildiririz ki araç, kabul listesinde tanınarak beklemesiz içeri alınsın.",
            },
            {
                soru: "Sahamızda vinç ve forklift trafiği yoğun; indirme nerede yapılır?",
                cevap:
                    "Sahanızı bilen yetkiliyle telefonda seçtiğimiz noktada: düz, sağlam ve saha içi trafikten ayrılabilen bir zemin parçası yeterlidir — çoğu ağır yük sahasında giriş yakınında böyle bir köşe bulunur. İndirme sırasında o bölgenin birkaç dakikalığına forklift geçişine kapatılması gerekir; bunu saha düzeninizi bozmadan yapmanın yolu, teslim saatini sizin belirlediğiniz sakin dilime yazmaktır. Şoförümüz sahaya girdiğinde noktayı arar durumda olmaz; 'şuraya' cevabı föyde önceden yazılıdır.",
            },
            {
                soru: "Nakliye ücretinde neden tarih esnekliği soruyorsunuz?",
                cevap:
                    "Çünkü Pınarbaşı, Kemalpaşa yönüne çıkan turlarımızın güzergâhı üzerindedir ve esnek tarihli bir teslimat, zaten geçecek olan araca eklenebilir — bu durumda sefer maliyeti paylaşılır ve size yansıyan nakliye bedeli düşer. Sabit tarihli, tek başına planlanan sevkiyat ise kendi aracını taşır ve tam bedel öder. İki seçeneği de açıkça fiyatlandırırız; karar sizindir. İşiniz birkaç günlük pencereye sığabiliyorsa, bunu söylemeniz doğrudan tasarruftur.",
            },
            {
                soru: "Makineyi teslim alacak kişi sahada olmazsa ne olur?",
                cevap:
                    "Teslimat tamamlanamaz ve bu, en kolay önlenebilir aksaklıktır: makine indirilse bile teslim tutanağının imzalanması, sayaç ve durum kaydının birlikte yapılması gerekir — imzasız bırakılan makine, iki taraf için de belirsizlik üretir. Föye bu yüzden teslim alacak kişinin adı ve telefonu yazılır; araç yola çıkmadan ve sapağa yaklaşırken o kişi aranır. Yetkiliniz o saatte sahada olamayacaksa yerine bir vekil belirlemeniz yeterlidir; isim föyde güncellenir ve teslimat aksamaz.",
            },
            {
                soru: "Acil bir arıza için birkaç saat içinde makine getirebilir misiniz?",
                cevap:
                    "Pınarbaşı, acil taleplere en hızlı cevap verebildiğimiz bölgelerdendir: arter üstü konum, depodan çıkan aracın kent trafiğine girmeden ulaşmasını sağlar ve gün içindeki turlardan birinin güzergâhı çoğu zaman yakınınızdan geçer. Gerçekçi süre, makine sınıfına ve o anki araç durumuna bağlıdır — telefonda net bir saat veririz ve o saate uyarız. Aciliyetin tek kısaltamayacağı adım güvenliktir: kapı, indirme noktası ve teslim alacak kişi yine netleşir; bu üçü telefonla dakikalar içinde kapatılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Pınarbaşı'nın Bornova'da Ankara yolu aksı üzerindeki sanayi konumu kamuya açık bilgidir; parsel içi indirme ilkesi, üç adımlı hız standardı ve dönüş yükü modeli firma pratiğidir.",
    },
};
