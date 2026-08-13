// ═══════════════════════════════════════════════════════════════════════════
// bozuyukplatform.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: Bozüyük ve çevresindeki YENİ FABRİKA İNŞAATLARI ve ÇELİK
// KONSTRÜKSİYON işlerine özel platform kiralama. Açı: ÇELİK KONSTRÜKSİYON
// MONTAJ FAZI — çelik iskelet montajı (kolon-kiriş birleşimi, aşık montajı,
// cephe kuşağı), montaj sırası ve vinç koordinasyonu, kaynak/cıvata bağlantı
// noktalarına erişim, yeni yatırım bölgesinin şantiye evre planı (kaba
// yapı → kapama → iç imalat).
//
// ⚠️ Bu dosyanın merceği MONTAJ FAZI'dır — bitmiş binanın bakımı değil, henüz
// ayakta duran çelik iskeletin kurulma süreci. bursamanlift-net.ts (dış
// kabuk/bakım), bozuyukmanlift-com.ts (seramik çatı/yüksek bakım) ve
// ankara-platform-com.ts (faz sözleşmesi anlatımı) ile cümle/tablo/SSS
// örtüşmesi YASAK. Kardeş dosya bozuyukplatform-com-tr.ts (arıza müdahalesi)
// ile de örtüşme YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi; marka/rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BOZUYUKPLATFORM_XYZ: Record<string, BespokeIcerik> = {
    "bolge:bozuyuk-yeni-sanayi-yatirim-alanlari": {
        h1: "Bozüyük Yeni Sanayi Yatırım Alanlarında Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Bozüyük'ün yeni açılan yatırım parsellerinde bir fabrika inşaatının en görünür dönemi, betonarme temel bittikten sonra çelik iskeletin ayağa kalktığı haftalardır. Bu dönemde şantiye sahası hızla değişir: dün boş bir arsa gören göz, birkaç hafta sonra sıra sıra dikilmiş kolonlar, aralarına atılmış çatı kirişleri ve gerilmekte olan aşıklarla karşılaşır. Bizim işimiz bu değişimin içindedir — kolon dikimi bittikten sonra kolon-kiriş birleşim noktalarındaki cıvata sıkma turları, kiriş üstüne atılan aşıkların hizalanması, cephe kuşağı profillerinin montajı ve rüzgâr çaprazlarının gerdirilmesi platform gerektiren işlerdir. Vinç, ağır elemanı kaldırıp yaklaşık konumuna oturtur; platform ise montaj ekibinin bağlantı noktasında saatlerce kalıp cıvatayı sıkması, kaynağı çekmesi ve hizayı ince ayarlaması için gereken sabit erişimi sağlar. Yeni parsellerde art arda birden fazla inşaat aynı anda ilerlediği için, bu bölgedeki taleplerimiz sık sık aynı hafta içinde birden fazla şantiyeyi kapsar.",
        maddeler: [
            {
                baslik: "Kolon-kiriş birleşiminde cıvata sıkma sırası",
                metin:
                    "Çelik iskelette kolon başlığı ile ana kirişin birleştiği nokta, taşıyıcı sistemin en kritik detaylarından biridir ve cıvatalar üretici projesinde belirtilen sırayla, belirli bir tork değerine kadar sıkılır. Bu iş vinçle yapılamaz — kiriş vinçle yaklaşık konumuna getirilip geçici olarak tutturulduktan sonra, platform ekibi birleşim noktasına yaklaşıp cıvataları elle sırayla sıkar ve tork anahtarıyla kontrol eder. Birden fazla kolon başlığı art arda dizildiğinde platform, aynı kottaki noktaları sırayla dolaşarak ilerler; her birleşim tamamlanmadan bir sonrakine geçilmez, çünkü henüz sıkılmamış bir bağlantı üzerinde iskelet geçici olarak asılı kalmış demektir.",
            },
            {
                baslik: "Aşık montajı ve çatı eğim hizası",
                metin:
                    "Ana kirişler yerine oturduktan sonra aralarına atılan aşıklar, çatı kaplamasının taşıyıcı ızgarasını oluşturur ve doğru aralıkla, doğru eğimle bağlanmaları gerekir. Aşık montajı, kiriş boyunca ilerleyen tekrarlı bir iştir: her aşık vinçle yaklaşık yerine indirilir, platform ekibi hizayı gözle ve mastarla kontrol eder, klips veya cıvata bağlantısını tamamlar. Eğim toleransı dışına çıkan bir aşık, üzerine serilecek kaplamanın dalgalı durmasına yol açar; bu yüzden montaj sırasında hiza kontrolü, bağlantıdan önce değil bağlantıyla birlikte yapılır.",
            },
            {
                baslik: "Cephe kuşağı ve rüzgâr çaprazı gerdirme",
                metin:
                    "Kolonlar dikildikten sonra binanın yan yüzeyine yatay olarak bağlanan cephe kuşakları, hem cephe kaplamasının taşıyıcısıdır hem de iskeletin yanal stabilitesine katkı verir. Kuşak montajı kolon dizisi boyunca yürür ve platform, cephe hattında kolon aralarını sırayla gezer. Aynı aşamada gerilen rüzgâr çaprazları, iskeletin henüz kaplamasız hâldeyken rüzgâra karşı geçici dayanımını sağlar; gerdirme işlemi belirli bir sırayla yapılmazsa iskelet dengesiz kalır, bu yüzden çapraz gerdirme sırası şantiye şefinin montaj planına göre platform ekibiyle birlikte takip edilir.",
            },
            {
                baslik: "Vinç ile platform arasında iş bölümü",
                metin:
                    "Bir montaj sahasında vinç ve platform aynı anda çalışır ama farklı işler görür: vinç ağır elemanı kaldırır, taşır ve yaklaşık konuma indirir; platform, o elemanın kesin bağlantısının yapıldığı süre boyunca insanı sabit ve güvenli biçimde noktada tutar. İkisinin sahada aynı anda dönmesi koordinasyon ister — vinç kancasının hareket yarıçapı ile platformun bulunduğu konum çakışmamalı, kaldırılan eleman platformun üzerinden geçerken platform o an boşaltılmış olmalıdır. Bu koordinasyon şantiye şefinin günlük iş emriyle belirlenir, biz de sahadaki ekiple sabah toplantısında o günün kaldırma sırasını netleştiririz.",
            },
            {
                baslik: "Kaba yapıdan kapamaya geçiş sınırında erişim",
                metin:
                    "İskelet tamamlanıp cephe ve çatı kaplaması başladığında saha bambaşka bir erişim düzenine geçer: artık kolon-kiriş noktaları değil, panel montaj hattı ve saçak kenarları çalışılır. Bu geçiş döneminde iki iş bir arada sürebilir — bir bölümde hâlâ son kuşak cıvataları sıkılırken diğer bölümde ilk paneller asılmaya başlamış olabilir. Platform filomuzu bu ara döneme göre ayarlarız: montaj fazının dar erişimli makineleri kademeli olarak kapama fazının geniş sepetli makineleriyle yer değiştirir, iki fazın çakıştığı haftalarda saha ihtiyacına göre her ikisi de aynı anda sahada bulunabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj fazının şantiye evrelerine göre platform ihtiyacı",
                paragraflar: [
                    "Yeni bir fabrika şantiyesinde çelik konstrüksiyon süreci üç evreye ayrılır ve her evrede platformun rolü değişir; aşağıdaki tablo bu ayrımı özetler.",
                ],
                tablo: {
                    basliklar: ["Şantiye evresi", "Platformun rolü", "Baskın iş", "Vinçle ilişki"],
                    satirlar: [
                        ["Kaba yapı — iskelet dikimi", "Birleşim noktası erişimi", "Cıvata sıkma, kaynak kontrolü", "Vinç sonrası, aynı anda değil"],
                        ["Kaba yapı — aşık ve çapraz", "Kiriş üstü hat erişimi", "Aşık hizalama, çapraz gerdirme", "Vinç indirir, platform bağlar"],
                        ["Kapama — cephe ve çatı", "Panel montaj hattı erişimi", "Sandviç panel, saçak detayı", "Vinç malzeme taşır, platform detay yapar"],
                        ["İç imalat", "Tavan altı tesisat erişimi", "Aydınlatma, kablo tavası askısı", "Vinç genellikle sahadan ayrılmış"],
                    ],
                },
            },
            {
                baslik: "Montaj sırasının bozulmaması",
                paragraflar: [
                    "Çelik iskelet montajı, sıralı bir iştir: bir kolon dizisi tam bağlanmadan yan dizinin kaldırılması, henüz oturmamış bir sistemin üzerine yeni yük bindirmek demektir. Bu yüzden platform ekibimiz şantiyeye kendi başına bir program getirmez — o günün kaldırma ve bağlama sırasını şantiye şefinden alır, kendi hareketini o sıraya göre kurar. Bir birleşim noktasında iş yarım kalmışsa, ekip bir sonraki noktaya geçmeden önce mutlaka o noktanın tamamlandığını teyit eder.",
                    "Bu disiplinin pratik sonucu, aynı platformun bir günde birden fazla noktayı gezmesidir ama her noktada net bir başlangıç ve bitiş vardır. Şantiye şefiyle sabah kısa bir koordinasyon görüşmesi yapmamız, günün geri kalanında sahada beklenmedik duraksama yaşanmasını önler.",
                ],
            },
            {
                baslik: "Aynı hafta içinde birden fazla şantiye",
                paragraflar: [
                    "Bozüyük'ün yeni yatırım parsellerinde inşaatlar genellikle art arda başlar; bir parselde iskelet dikimi sürerken komşu parselde temel atılıyor, bir başkasında kapama fazı bitmek üzeredir. Bu durum bizim için avantajlı bir planlama imkânı yaratır — aynı hafta içinde birden fazla şantiyeye kısa süreli montaj desteği verebiliriz, çünkü nakliye mesafesi parseller arasında kısadır. Şantiye şefleri montaj takvimini bize erken bildirdiğinde, platformu hangi günün hangi saatinde hangi sahada konumlandıracağımızı önceden planlarız.",
                    "Bu koordinasyonun tek şartı takvim netliğidir: vinç programı kaydığında montaj günü de kayar, biz de platformu buna göre yeniden sıralarız. Erken bilgi paylaşan şantiyeler, sahaya en yakın uygun tarihi alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kolon-kiriş birleşimindeki cıvataları vinç sepetiyle sıkamaz mıyız, neden ayrı platform gerekiyor?",
                cevap:
                    "Vinç kancası bir elemanı taşımak ve konumlandırmak için tasarlanmıştır, sabit bir noktada saatlerce insan tutmak için değildir; ayrıca vinç kancasındaki bir sepet, kaldırma operasyonu sürerken o an boşta kalır ve şantiyenin en pahalı ekipmanını atıl bırakır. Platform ayrı bir makine olduğu için vinç kaldırma yaparken platform ekibi başka bir birleşimde çalışmaya devam edebilir; ikisi paralel ilerler ve toplam montaj süresi kısalır. Ayrıca platform sepeti cıvata sıkma gibi hassas işler için sabit, titremeyen bir çalışma zemini sunar; vinç kancasında bu sabitlik yoktur.",
            },
            {
                soru: "Aynı anda hem vinç hem platform sahada çalışırken çarpışma riski nasıl önleniyor?",
                cevap:
                    "Sabah koordinasyon görüşmesinde o günkü kaldırma sırası ve platformun çalışacağı bölgeler birlikte belirlenir; vinç kancasının hareket edeceği yarıçap ile platformun konumlanacağı nokta çakışmayacak şekilde ayrılır. Bir eleman platformun üzerinden geçecekse platform o an boşaltılır ve geçiş bitene kadar bekletilir. Şantiye şefiyle sürekli görüş teması kurulur, telsiz veya el işaretiyle kaldırma başlangıcı platform operatörüne bildirilir. Bu disiplin, büyük şantiyelerde standart bir güvenlik uygulamasıdır ve bizim ekibimiz de aynı kurala uyar.",
            },
            {
                soru: "Aşık montajında hizalama toleransı ne kadar sıkı, gözle mi kontrol ediliyor?",
                cevap:
                    "Aşık aralığı ve eğimi projede belirtilen değerlere göre kontrol edilir; montaj ekibi mastar, şerit metre ve gerektiğinde lazer hizalama aletiyle her aşığı bağlamadan önce doğrular. Yalnızca göz kararıyla ilerlemek, üzerine kaplama serildiğinde dalgalı bir çatı yüzeyi ortaya çıkarır ve bu sonradan düzeltilmesi zor bir hatadır. Platform, aşık boyunca ilerlerken ekibin aynı kotta durup ölçüm aletini rahatça kullanmasını sağlar; bu, merdiven veya iskeleyle yapılan ölçümden hem daha hızlı hem daha güvenilirdir çünkü ekip her aşıkta yeniden konumlanmak zorunda kalmaz.",
            },
            {
                soru: "Rüzgâr çaprazları gerilmeden önce iskelet rüzgârda güvende mi sayılır?",
                cevap:
                    "Hayır, bu yüzden çaprazların gerdirilmesi montaj sırasında öncelikli işlerden biridir. Kaplaması olmayan çıplak bir çelik iskelet, rüzgâr çaprazları tamamlanana kadar yanal yüklere karşı görece zayıftır; bu nedenle montaj planı genellikle bir dikili aksın çaprazlarını, komşu aksa geçmeden tamamlamayı öngörür. Sert rüzgâr tahmini olan günlerde şantiye şefi montaj sırasını buna göre önceliklendirebilir ve bizden o gün öncelikli olarak çapraz gerdirme noktalarına yoğunlaşmamızı isteyebilir; bu talebi karşılamak için programımızı esnek tutarız.",
            },
            {
                soru: "Kaba yapı bitmeden kapama fazının makinesini şantiyeye getirmenin bir anlamı var mı?",
                cevap:
                    "Genellikle yoktur ve biz de bunu önermeyiz — kapama fazının geniş sepetli makineleri, henüz iskelet dikilirken sahada kullanılmaz, sadece yer kaplar ve nakliye bedelini erken ödetmiş olur. Bizim yaklaşımımız, montaj takvimine göre makine değişimini planlamaktır: iskelet biterken kaba yapı makinesini geri çeker, kapama başlarken panel montajına uygun makineyi getiririz. Geçiş haftalarında iki fazın işi çakışıyorsa, o dönem için kısa süreli olarak her iki makine sınıfını da bulundurabiliriz; bu karar şantiyenin gerçek ilerleme hızına göre birlikte verilir.",
            },
            {
                soru: "Bir haftada birden fazla şantiyeye hizmet verebiliyor musunuz, program nasıl kuruluyor?",
                cevap:
                    "Evet, özellikle yeni yatırım parsellerinde birbirine yakın birden fazla inşaat aynı dönemde ilerlediğinde bu mümkün olur. Program kurulurken her şantiyenin vinç takvimini ve montaj aşamasını isteriz; hangi günün hangi saatinde hangi sahada ihtiyaç olduğunu birlikte netleştiririz ve platformu bu takvime göre şantiyeler arasında kaydırırız. Takvim netse nakliye kısa mesafede kolayca planlanır; ancak vinç programı son anda değişirse platform günü de değişir, bu yüzden erken ve güncel bilgi paylaşımı bu düzenin işlemesinin şartıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün yeni sanayi yatırım parsellerindeki inşaat yoğunluğu genel gözlem bilgisidir; çelik konstrüksiyon montaj sırası (kolon-kiriş, aşık, çapraz), vinç-platform iş bölümü ve şantiye evre yapısı sektör standardı inşaat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:bilecik": {
        h1: "Bilecik'te Fabrika İnşaatlarında Çelik Montaj Platformu Kiralama",
        giris:
            "Bilecik il merkezi çevresinde yürüyen fabrika inşaatları, çoğunlukla orta ölçekli üretim binalarıdır ve çelik iskeletleri de bu ölçeğe uygun, tek katlı, geniş açıklıklı bir geometriyle kurulur. Bu tür binalarda montaj süreci genellikle kısa ve yoğun geçer — kolon dikimi birkaç gün içinde biter, ardından kirişler ve aşıklar hızla takılır. Kısa süreli ama yoğun bu montaj döneminde platform talebi de sıkışık gelir: bir hafta içinde birleşim sıkma, aşık hizalama ve kuşak montajı art arda istenebilir. Bizim buradaki rolümüz, bu yoğun pencereye uyacak esneklikte makine ve ekip sağlamaktır — merkeze yakınlık sayesinde şantiyeye kısa sürede ulaşır, montaj ekibinin günlük ritmine göre platformu bir bölgeden diğerine kaydırırız. Bu sayfa, Bilecik merkezindeki fabrika inşaatlarında montaj fazı boyunca çalışma düzenimizi anlatıyor.",
        maddeler: [
            {
                baslik: "Tek katlı geniş açıklıkta kolon dikim sırası",
                metin:
                    "Orta ölçekli üretim binalarında kolon aralıkları genellikle geniş tutulur ve kolonlar bir uçtan başlanarak sırayla dikilir; her kolon dikildikten sonra bir önceki ile arasındaki kiriş bağlanır ki iskelet dikilirken kendi ağırlığı altında tek başına stabil kalabilsin. Platform, bu sıralı ilerleyişin gerisinden takip eder — az önce bağlanan kolon-kiriş noktasına yaklaşıp cıvataları tork değerine kadar sıkar. Sıra bozulup ileri bir kolona atlanırsa, henüz sıkılmamış bir bağlantı üzerinde yük birikmiş olur; bu yüzden platform ekibi her zaman montaj sırasının bir adım gerisinde, boşluk bırakmadan ilerler.",
            },
            {
                baslik: "Kısa süreli yoğun montaj penceresi",
                metin:
                    "Tek katlı binalarda iskelet montajı, çok katlı bir yapıya göre görece kısa sürer ve bu kısalık, platform talebini de sıkıştırır: bir haftada kolon dikimi, ertesi hafta aşık ve kuşak montajı istenebilir. Bu yoğun pencerede makine değişikliği yapmadan tek bir platformla bütün montaj kalemlerini karşılamaya çalışırız — sabah kolon başlıklarında cıvata sıkılırken öğleden sonra aynı makineyle kiriş üstünde aşık hizalanabilir. Sıkışık takvimde asıl belirleyici, makinenin kendisi değil şantiye şefinin günlük iş emrine göre önceden planlanmış saat çizelgesidir.",
            },
            {
                baslik: "Merkeze yakınlığın montaj takvimine katkısı",
                metin:
                    "Bilecik merkezindeki şantiyelere ulaşım mesafemiz kısadır ve bu, montaj fazında özellikle değerlidir — çünkü bu fazda plan sık değişir: vinç bir gün gecikir, bir kolon grubu beklenenden erken biter, ertesi güne planlanan iş bugüne kayar. Kısa mesafe sayesinde bu değişikliklere aynı gün içinde tepki verebiliriz; şantiye şefinin sabah aradığı bir değişiklik, öğleden önce sahaya yansıtılabilir. Uzak mesafeden gelen bir makinede aynı esneklik mümkün olmaz, çünkü nakliye süresi plan değişikliğini bir gün geciktirir.",
            },
            {
                baslik: "Cephe kuşağı ve saçak bitişinde son montaj kalemleri",
                metin:
                    "İskeletin son aşamasında cephe kuşakları ve saçak bitiş profilleri takılır; bu kalemler kolon-kiriş montajına göre daha ince işçilik ister çünkü doğrudan görünen yüzeylerdir ve kaplama bunların üzerine oturacaktır. Platform, cephe hattı boyunca kolon aralarını sırayla gezerek kuşak bağlantılarını tamamlar; saçak bitişinde ise mahya ve alın profillerinin hizası kontrol edilir. Bu kalem, montaj fazının kapamaya devrettiği son noktadır — kuşak ve saçak bittiğinde saha panel montaj ekibine teslim edilmeye hazır hâle gelir.",
            },
            {
                baslik: "Şantiye şefiyle günlük iş emri koordinasyonu",
                metin:
                    "Kısa süreli montaj işlerinde resmi bir haftalık program yerine günlük iş emri daha yaygın kullanılır — şantiye şefi sabah o günün öncelikli kaldırma ve bağlama sırasını belirler, biz de platformu bu sıraya göre konumlandırırız. Bu düzen esneklik sağlar ama iletişim gerektirir: sabah kısa bir görüşme, günün hangi bölgesinde ne kadar süre kalınacağını netleştirir. Bilecik merkezindeki küçük-orta ölçekli şantiyelerde bu günlük koordinasyon, büyük projelerdeki haftalık plana göre daha pratik işliyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bilecik merkez şantiyelerinde tipik montaj haftası",
                paragraflar: [
                    "Tek katlı orta ölçekli bir fabrika iskeletinde montaj kalemlerinin haftalar içindeki tipik sırası ve platformun o haftadaki rolü aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Hafta", "Baskın iş", "Platform rolü", "Not"],
                    satirlar: [
                        ["1. hafta", "Kolon dikimi", "Bir adım geriden cıvata sıkma", "Sıra bozulmadan ilerlenir"],
                        ["2. hafta", "Ana kiriş ve aşık", "Hiza kontrolü ve bağlama", "Mastar ile ölçüm eşlik eder"],
                        ["2-3. hafta", "Rüzgâr çaprazı", "Öncelikli aks tamamlama", "Sert rüzgâr günü öncelik değişir"],
                        ["3. hafta", "Cephe kuşağı, saçak", "Cephe hattı boyunca gezinme", "Kapama fazına teslim noktası"],
                    ],
                },
            },
            {
                baslik: "Tek makineyle çok kalem çalışmanın sınırı",
                paragraflar: [
                    "Kısa montaj penceresinde aynı platformla kolon başlığı, aşık ve kuşak gibi farklı kalemleri art arda çalışmak genellikle mümkündür, çünkü hepsi benzer kotta ve benzer erişim geometrisinde durur. Ancak bu esnekliğin bir sınırı var: eleman büyüklüğü ve kaldırma ağırlığı vinçle sınırlıdır, platform yalnızca bağlantı ve hizalama işini üstlenir. Şantiye şefinin bize ilettiği günlük listede hangi kalemin hangi saatte hazır olacağı belirtildiğinde, tek makineyle günü verimli doldurmak kolaylaşır; liste geç veya belirsiz geldiğinde makine sahada boş bekleme süresi yaşayabilir.",
                    "Bu yüzden Bilecik merkezindeki müşterilerimizden, mümkünse bir önceki akşamdan ertesi günün kaba planını istiyoruz. Kısa bir mesajla gelen bu bilgi, sabah saatlerini boşa geçirmeden başlamamızı sağlıyor.",
                ],
            },
            {
                baslik: "Montaj bitiminde kapamaya devir",
                paragraflar: [
                    "İskelet montajı bittiğinde saha, farklı bir ekip ve farklı bir makine profiline devredilir: artık kolon-kiriş noktalarında değil, panel montaj hattında çalışılır. Bu devir anını net bir sınırla tarif ederiz — son kuşak cıvatası sıkılıp saçak hizası onaylandığında montaj fazı bizim tarafımızdan tamamlanmış sayılır. Devam eden kapama işleri için farklı erişim ihtiyacı doğarsa, bu talebi ayrı bir kiralama olarak ele alırız; iki fazın makinesi aynı olmayabilir çünkü aranan erişim biçimi değişmiştir.",
                    "Bazı şantiyelerde iki faz kısa süre çakışabilir — kuşak montajı son aksta sürerken diğer aksta panel asılmaya başlanabilir. Bu durumda iki makineyi kısa süreliğine aynı anda sahada tutmak, geçişi hızlandırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kolon dikimi bir haftada bitecek deniyor; platform sürecin başında mı sonunda mı devreye giriyor?",
                cevap:
                    "İkisi arasında, sürekli bir adım geriden. Kolonlar vinçle dikilip geçici olarak tutturulduktan hemen sonra platform o noktaya yaklaşır ve kalıcı cıvata bağlantısını tamamlar; bu, bir sonraki kolon dikilmeden önce bitirilmesi gereken bir iştir. Yani platform ne montajın en başında tek başına çalışır ne de en sonunda toplu bir tur atar — kolon dikimiyle aynı hafta, onu adım adım takip eder. Bu yüzden platform kiralama süresini kolon dikim takviminizle aynı haftaya planlamanızı öneririz; iş bitmeden makineyi erken çekmek, tamamlanmamış bağlantı bırakma riski taşır.",
            },
            {
                soru: "Şantiye şefimiz plan değiştirirse aynı gün platform da değişebilir mi?",
                cevap:
                    "Merkeze yakınlığımız sayesinde çoğu zaman evet. Montaj fazında plan değişikliği sık yaşanır — bir kolon grubu erken biter, vinç bir gün gecikir, öncelik başka bir akse kayar; sabah bildirilen bir değişiklik, kısa nakliye mesafesi sayesinde öğleden önce sahaya yansıtılabilir. Değişiklik büyükse (örneğin makine sınıfının değişmesi gerekiyorsa) bu aynı gün mümkün olmayabilir, ama günlük iş emri içindeki sıralama değişiklikleri genellikle aynı gün karşılanabiliyor. Değişikliği ne kadar erken bildirirseniz, o kadar sorunsuz karşılanır.",
            },
            {
                soru: "Aynı platformla hem kolon başlığında hem kiriş üstünde aşık montajında çalışabilir miyiz?",
                cevap:
                    "Genellikle evet, çünkü ikisi de benzer kotta ve benzer erişim geometrisinde durur; sabah kolon başlıklarında cıvata sıkılırken öğleden sonra aynı makineyle kiriş üstünde aşık hizalanabilir. Sınır, eleman ağırlığıdır — platform kaldırma değil bağlama ve hizalama işi yapar, ağır elemanı vinç taşır. Günün planını önceden bilirsek (hangi saatte hangi kalem hazır olacak), tek makineyle günü verimli doldururuz; liste geç geldiğinde makine bazen bir sonraki kalemi bekleyerek zaman kaybedebilir.",
            },
            {
                soru: "Rüzgâr çaprazları henüz gerilmedi ama hava kötüleşiyor; önceliği değiştirebilir misiniz?",
                cevap:
                    "Evet ve bunu öneririz. Rüzgâr tahmini kötüleştiğinde şantiye şefinin önceliği genellikle çaprazsız kalan aksların çaprazlarını hızla tamamlamaya kayar, çünkü kaplaması olmayan çıplak iskelet rüzgâra karşı görece zayıftır. Bu tür bir öncelik değişikliğini bize bildirdiğinizde platformu o gün için çapraz gerdirme noktalarına yönlendiririz, diğer kalemler ertesi güne kayar. Bu tarz esneklik, günlük iş emri düzeninin tam olarak sağladığı şeydir — sabit haftalık plana bağlı kalmadan hava koşuluna göre öncelik kaydırılabilir.",
            },
            {
                soru: "Montaj bitip panel asma dönemine geçince aynı makineyle devam mı ediyoruz?",
                cevap:
                    "Genellikle hayır, çünkü aranan erişim biçimi değişir: montaj fazında kolon-kiriş noktalarına nokta erişim gerekirken kapama fazında cephe hattı boyunca sürekli hareket eden geniş sepetli bir erişim aranır. Son kuşak cıvatası sıkılıp saçak hizası onaylandığında montaj fazını tamamlanmış sayarız ve kapama için ayrı bir makine profilini öneririz. İki faz kısa süre çakışıyorsa — bir akste kuşak sürerken diğerinde panel başlıyorsa — geçiş haftasında iki makineyi kısa süreliğine aynı anda tutmak mümkündür, bu geçişi hızlandırır.",
            },
            {
                soru: "Bir önceki akşamdan ertesi günün planını size iletmek zorunlu mu?",
                cevap:
                    "Zorunlu değil ama şiddetle öneririz. Kısa süreli montaj işlerinde makine genellikle günlük iş emrine göre yönlendirilir; bir önceki akşamdan gelen kaba bir plan (hangi bölgede hangi kalem hazır olacak) sabah saatlerini boşa geçirmeden başlamamızı sağlar. Plan gelmezse sahada şantiye şefini bekleyerek başlarız, bu da günün ilk saatini verimsiz geçirebilir. Merkeze yakınlığımız acil değişikliklerde bize esneklik veriyor ama düzenli bir günlük bilgi akışı, o esnekliği daha iyi kullanmamızı sağlıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik merkezindeki fabrika inşaatlarının tek katlı orta ölçekli karakteri genel gözlem bilgisidir; çelik montaj sırası ve vinç-platform iş bölümü sektör standardı inşaat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:bilecik-osb": {
        h1: "Bilecik OSB'de Yeni Fabrika Çelik Montajına Platform Desteği",
        giris:
            "Organize sanayi bölgesindeki boş parseller, Bilecik'in yeni yatırımlarının önemli bir kısmını barındırır ve bu parsellerde inşaat, OSB'nin kendi alt yapı takvimine göre ilerler — yol, elektrik ve su bağlantısı hazır olan parsellerde temel atımı hızlı başlar, çelik montaj ise genellikle beklemeden ardından gelir. OSB içindeki şantiyelerin bir avantajı, birbirine yakın birden fazla parselde eş zamanlı inşaat sürmesidir; bu da montaj platformu talebini kümeler hâlinde getirir. Bizim OSB'deki rolümüz, bu kümeli talebe uygun bir planlama kurmaktır: bir parselde kolon dikimi sürerken komşu parselde kiriş ve aşık montajı başlamış olabilir, biz de platformu günün farklı saatlerinde farklı parsellere yönlendiririz. Bu sayfa, OSB içindeki fabrika inşaatlarında montaj fazı boyunca çalışma düzenimizi anlatıyor.",
        maddeler: [
            {
                baslik: "OSB alt yapı takviminin montaj sırasına etkisi",
                metin:
                    "OSB parsellerinde inşaat başlamadan önce yol, elektrik ve su bağlantısının bölge idaresi tarafından tamamlanmış olması gerekir; bu alt yapı takvimi, komşu parsellerin inşaat başlangıcını da birbirine yakınlaştırır. Sonuç olarak birkaç parselde temel atımı ve ardından çelik montaj neredeyse aynı dönemde başlar. Bu eş zamanlılık bizim için bir planlama fırsatıdır — aynı hafta içinde birden fazla parsele kısa mesafeli sevkiyatla hizmet verebiliriz, ancak bunun şartı her parselin montaj takvimini önceden bilmemizdir; takvim çakışırsa öncelik sırası şantiye şefleriyle birlikte belirlenir.",
            },
            {
                baslik: "Komşu parsellerde eş zamanlı kolon dikimi",
                metin:
                    "Birden fazla parselde aynı anda kolon dikimi sürerken platform ihtiyacı da eş zamanlı doğar; ancak her parselin dikim hızı farklıdır ve bu farkı bizim lehimize kullanırız — bir parselde kolon dizisi henüz vinçle devam ederken platform komşu parselde bir önceki günün bağlantılarını tamamlayabilir. Bu geçişkenlik, tek makinenin OSB içinde günü verimli doldurmasını sağlar. Şantiye şeflerinin bize günlük olarak hangi parselde hangi kolon grubunun hazır olduğunu bildirmesi, bu geçişin sorunsuz işlemesinin tek şartıdır.",
            },
            {
                baslik: "Parsel içi zemin ve makine giriş güzergâhı",
                metin:
                    "Henüz peyzajı tamamlanmamış yeni parsellerde zemin, sahanın neresinde olduğunuza göre değişir — girişe yakın bölüm sıkıştırılmış dolgu olabilirken, parsel içi hâlâ doğal zemin hâlinde kalabilir. Montaj platformunun destek ayaklarını güvenle açabilmesi için zeminin taşıma gücü bilinmelidir; yağışlı dönemde doğal zemin yumuşayabilir. Bu yüzden OSB'deki her yeni parselde ilk çalışmadan önce makinenin giriş güzergâhını ve konumlanacağı noktaları şantiye şefiyle birlikte yürüyerek belirleriz; gerekirse yük dağıtım plakası kullanılır.",
            },
            {
                baslik: "OSB içi kısa mesafe ile hızlı müdahale",
                metin:
                    "OSB parselleri arasındaki mesafe kısa olduğu için, bir parseldeki montaj planı değiştiğinde platformu aynı gün içinde komşu parsele kaydırmak pratik bir çözümdür. Bu esneklik özellikle vinç programının değiştiği günlerde işe yarar — bir parselde vinç arızası veya gecikme yaşanırsa, o parseldeki montaj günü ertelenir ve platform aynı gün başka bir parseldeki bekleyen işe yönlendirilebilir. OSB dışındaki dağınık şantiyelerde bu tür bir yönlendirme, nakliye süresi nedeniyle aynı gün mümkün olmaz.",
            },
            {
                baslik: "Montaj sonrası OSB kabul turu",
                metin:
                    "Bir parselde çelik iskelet tamamlandığında, kapama fazına geçmeden önce montaj kalitesinin son kontrolü yapılır: kolon-kiriş birleşimlerinin tork değerleri, aşık hizası ve çapraz gerilme durumu platformdan gezilerek doğrulanır. Bu kabul turu, yüklenici ile yatırımcı arasındaki devir noktasıdır ve bulgular varsa kapama başlamadan düzeltilir. OSB'deki birden fazla parselde çalıştığımız dönemlerde bu kabul turlarını da aynı haftaya sığdırabiliriz — bir parselin montajı biterken komşu parselin montajı henüz sürüyor olabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB'de eş zamanlı parsel yönetimi",
                paragraflar: [
                    "Aynı dönemde inşaat süren parsellerde platformun bir günü nasıl paylaştığını, tipik bir senaryo üzerinden aşağıdaki tabloda özetliyoruz.",
                ],
                tablo: {
                    basliklar: ["Saat dilimi", "Parsel durumu", "Platform işi", "Koordinasyon"],
                    satirlar: [
                        ["Sabah", "A parseli — dünkü kolonlar hazır", "Cıvata sıkma turu", "A parseli şefiyle sabah görüşmesi"],
                        ["Öğle", "B parseli — aşık montajı sürüyor", "Hiza kontrolü ve bağlama", "B parseli şefiyle telefonla teyit"],
                        ["Öğleden sonra", "A parseli — yeni kolon grubu dikildi", "Geri dönüp bağlantı tamamlama", "Vinç programına göre esnek"],
                        ["Akşama doğru", "C parseli — kabul turu istendi", "Montaj kalite kontrolü", "Yüklenici ile birlikte gezilir"],
                    ],
                },
            },
            {
                baslik: "Alt yapı takviminin gizli etkisi",
                paragraflar: [
                    "OSB'de bir parselin inşaat hızını yalnızca yüklenicinin kendi programı değil, bölge idaresinin alt yapı teslim takvimi de belirler; elektrik bağlantısı gecikirse vinç şantiyeye geç girer, bu da çelik montajın başlangıcını erteler. Bu bağımlılık, komşu parsellerin de birbirine yakın bir ritimde ilerlemesine yol açar — bir parselin alt yapısı hazır olduğunda genellikle komşularınınki de yakın zamanda tamamlanmıştır. Bizim planlamamız bu ritmi hesaba katar: OSB'ye giriş yaptığımız dönemde tek bir parsele değil, o dönem aktif olan parsel kümesine göre kapasite ayırırız.",
                    "Bu yaklaşımın faydası, tek bir parselin gecikmesinde makinenin boşta kalmamasıdır — komşu parseldeki iş, boşalan zamanı doldurur ve toplam verim yükselir.",
                ],
            },
            {
                baslik: "Zemin hazırlığı olmayan parsellerde dikkat",
                paragraflar: [
                    "Yeni açılan bazı parsellerde inşaat, çevre peyzajı ve saha içi yol kaplaması tamamlanmadan başlar; bu durumda platformun konumlanacağı zemin henüz doğal hâldedir ve yağışlı günlerde taşıma gücü düşebilir. Bu koşulda destek ayaklarının altına yük dağıtım plakası koymak standart bir önlemdir, ancak bazen daha basit bir çözüm de işe yarar — makinenin konumlandığı güzergâhı, inşaatın kendi malzeme sevkiyat yolunu paylaşacak şekilde seçmek. Bu yol genellikle diğer araç trafiği tarafından zaten sıkıştırılmıştır.",
                    "Zemin durumu belirsizse ilk çalışmadan önce sahayı birlikte yürüyüp konumlama noktalarını işaretleriz; bu kısa hazırlık, çalışma gününde beklenmedik saplanma veya devrilme riskini önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'de birden fazla parselde işimiz var; tek platformla hepsine hizmet verilebilir mi?",
                cevap:
                    "Parsellerin birbirine yakınlığı ve montaj takvimlerinin ne kadar çakıştığına bağlı olarak genellikle evet. Her parselin şantiye şefinden günlük olarak hangi kalemin hazır olduğunu alırız ve platformu gün içinde parseller arasında kısa mesafeli olarak kaydırırız — sabah bir parselde kolon başlığı sıkılırken öğleden sonra komşu parselde aşık hizalanabilir. Takvimler çok yakın zamanlı çakışırsa (aynı saatte iki parselde acil iş varsa) ikinci bir makine gerekebilir; bu durumu erken haber verirseniz kapasiteyi buna göre ayarlarız.",
            },
            {
                soru: "Parselimizde henüz yol kaplaması yok, zemin toprak; platform çalışabilir mi?",
                cevap:
                    "Çoğu durumda evet ama önce zemini birlikte değerlendiririz. Doğal zemin kuru ve sıkışıksa destek ayakları altına yük dağıtım plakası koyarak güvenle çalışılır; yağışlı dönemde zemin yumuşamışsa ya kuruyana kadar beklenir ya da inşaatın kendi malzeme sevkiyat güzergâhı gibi zaten sıkışmış bir hat kullanılır. İlk çalışmadan önce sahayı yürüyüp makinenin giriş güzergâhını ve konumlanma noktalarını işaretleriz; bu, çalışma gününde saplanma riskini önceden ortadan kaldırır.",
            },
            {
                soru: "Bir parselde vinç arızalanırsa platformumuz o gün boşa mı geçer?",
                cevap:
                    "Genellikle hayır. OSB içindeki parseller arasındaki mesafe kısa olduğu için, bir parselde vinç arızası ya da gecikme yaşandığında o parseldeki montaj günü ertelenir ve platformu aynı gün içinde komşu bir parseldeki bekleyen işe yönlendiririz. Bu yönlendirme, o parselin şantiye şefiyle önceden kısa bir görüşmeyle koordine edilir. OSB dışındaki uzak şantiyelerde aynı esneklik nakliye süresi nedeniyle mümkün olmaz; OSB içindeki kısa mesafe bu konuda bize avantaj sağlıyor.",
            },
            {
                soru: "Montaj kabul turu nedir, neden ayrı bir hizmet olarak sunuluyor?",
                cevap:
                    "Kabul turu, çelik iskelet tamamlandığında kapama fazına geçmeden önce yapılan bir doğrulamadır: kolon-kiriş birleşimlerinin tork değerleri, aşık hizası ve çapraz gerilme durumu platformdan gezilerek kontrol edilir ve bulgular varsa panel montajı başlamadan düzeltilir. Bunu ayrı bir hizmet olarak sunmamızın nedeni, montajı yapan ekip yerine bağımsız bir gözle kontrolün daha güvenilir sonuç vermesidir. Yüklenici ile yatırımcı arasındaki devir noktasında bu tur, ileride ortaya çıkabilecek bir montaj hatasının kapama altında kalıp gizlenmesini önler.",
            },
            {
                soru: "OSB alt yapısı gecikirse bizim montaj takvimimiz de mi kayar, siz bunu nasıl takip ediyorsunuz?",
                cevap:
                    "Evet, elektrik veya su bağlantısı gecikirse vinç şantiyeye geç girer ve çelik montaj da buna bağlı olarak ertelenir; bu OSB'deki inşaatların yaygın bir gerçeğidir. Biz bu riski, tek bir parsele değil o dönem aktif olan parsel kümesine göre kapasite ayırarak yönetiriz — bir parsel gecikirse platform komşu parseldeki işe kayar, boşta beklemez. Sizin tarafınızdan istediğimiz tek şey, alt yapı teslim tarihinde bir değişiklik olduğunda bize erken haber vermenizdir; bu bilgi, planımızı gün kaybetmeden güncellememizi sağlar.",
            },
            {
                soru: "Aynı hafta birden fazla parselde çalışırken fiyatlandırma nasıl oluyor?",
                cevap:
                    "Her parsel kendi iş kapsamına göre ayrı fiyatlandırılır; ancak aynı hafta içinde OSB'de birden fazla parsele hizmet verdiğimizde nakliye maliyeti kısa mesafeler arasında paylaşıldığı için toplamda avantajlı bir teklif çıkar. Şantiye şefleriyle görüşüp her parselin tahmini iş süresini aldıktan sonra haftalık bir plan ve buna karşılık gelen teklif sunarız; parsellerden biri planlanandan uzun sürerse fark ayrıca not edilir. Bu düzenin işlemesi için parsellerin birbirine yakın olması ve takvimlerin bize erken bildirilmesi yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik OSB'nin organize sanayi bölgesi olarak alt yapı teslim süreciyle parsel tahsis ettiği kamuya açık genel bilgidir; çelik montaj sırası ve şantiyeler arası koordinasyon sektör standardı inşaat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:sogut": {
        h1: "Söğüt'te Fabrika İnşaatı Çelik Montajına Platform Desteği",
        giris:
            "Söğüt'teki yeni fabrika inşaatları, ilçenin iklim karakteriyle sıkı bir takvim ilişkisi kurar: iç bölgeye yakın bu coğrafyada kış erken bastırdığı için çelik montaj işlerinin büyük kısmı ilkbahar ile sonbahar arasındaki pencereye sıkıştırılır. Bir şantiye şefinin en çok korktuğu senaryo, kolon dikimi tamamlanmış ama kuşak ve çapraz montajı bitmemiş bir iskeletin kışa yakalanmasıdır — çıplak çelik, kar yükü ve donmuş zeminde çalışma güçlüğüyle birlikte aylarca beklemek zorunda kalabilir. Bizim Söğüt'teki rolümüz bu takvim baskısını tanıyıp ona göre kapasite ayırmaktır: elverişli mevsimde talep yoğunlaştığında platform programını sıkılaştırır, montaj ekibinin günlük temposuna ayak uydururuz. Bu sayfa, Söğüt'teki fabrika inşaatlarında mevsime bağlı montaj planlamasını ve çalışma düzenimizi anlatıyor.",
        maddeler: [
            {
                baslik: "Donma öncesi montajı bitirme baskısı",
                metin:
                    "Söğüt'te sonbahar sonu yaklaştığında, henüz kapanmamış bir çelik iskelet için zaman daralır: donmuş zeminde platformun destek ayaklarını güvenle açmak zorlaşır ve düşük sıcaklıkta bazı bağlantı işlemleri (özellikle kaynak) daha dikkatli, daha yavaş yürür. Bu yüzden sonbaharın son haftalarında Söğüt'teki şantiyelerde montaj temposu genellikle hızlanır ve platform talebi de buna paralel yoğunlaşır. Şantiye şefleriyle bu dönemde daha sık iletişim kurar, hangi kalemin kışa kalmadan bitirilmesi gerektiğini önceliklendiririz.",
            },
            {
                baslik: "Kar yükü altında çıplak iskeletin riski",
                metin:
                    "Rüzgâr çaprazları henüz gerilmemiş, kaplaması olmayan bir çelik iskelet kışı geçirmek zorunda kalırsa kar yükü ayrı bir risk oluşturur — kirişler ve aşıklar üzerine biriken kar, henüz tam stabilize olmamış bir sistemde beklenmedik yükler yaratabilir. Bu senaryodan kaçınmanın en pratik yolu, kritik stabilite elemanlarını (çapraz, kuşak) kolon-kiriş montajıyla eş zamanlı bitirmektir; bu elemanlar tamamlandığında iskelet kaplamasız da olsa kışı görece güvenle bekleyebilir. Platform programımızı bu önceliğe göre kurarız — kaplama bekleyebilir ama stabilite elemanları beklemez.",
            },
            {
                baslik: "İlkbahar başında yeniden başlayan montaj",
                metin:
                    "Kışı yarım kalmış bir iskeletle geçiren şantiyelerde ilkbahar, montajın kaldığı yerden devam ettiği dönemdir; ancak kışın etkisiyle bazı bağlantıların yeniden kontrol edilmesi gerekebilir — donma-çözülme çevrimi, henüz tam sıkılmamış bir cıvatanın gevşemesine yol açabilir. İlkbaharda ilk platform turumuz genellikle bu kontrolle başlar: kışı geçirmiş bütün birleşim noktaları yeniden tork kontrolünden geçirilir, gevşeyen varsa sıkılır, ardından kalan montaj kalemlerine geçilir. Bu ek kontrol, montaj takvimine küçük bir gün eklese de kalan işin sağlam bir zemin üzerine kurulmasını sağlar.",
            },
            {
                baslik: "Elverişli mevsimde yoğunlaşan talep",
                metin:
                    "Söğüt'te mevsim penceresi dar olduğu için, ilkbahar ile sonbahar arasındaki elverişli aylarda birden fazla şantiye aynı anda platform talep edebilir. Bu yoğunlukta kapasitemizi önceden planlamak kritik hâle gelir — şantiye şeflerinin montaj takvimini bize erken, mümkünse birkaç hafta önceden bildirmesini isteriz. Erken bilgi, elverişli mevsimin dar penceresinde makinenin hangi şantiyede ne zaman bulunacağını netleştirir ve son dakika taleplerinde yaşanabilecek çakışmayı azaltır.",
            },
            {
                baslik: "Kaynak işlerinde soğuk hava dikkati",
                metin:
                    "Bazı birleşim detayları cıvata yerine kaynakla yapılır ve kaynağın kalitesi ortam sıcaklığından etkilenir — çok düşük sıcaklıkta metal hızlı soğur, kaynak dikişinin soğuma hızı kontrolsüz kalırsa çatlak riski artar. Bu yüzden Söğüt'te kış aylarına yakın dönemde planlanan kaynaklı montaj işlerinde ısıtma önlemi (ön ısıtma, rüzgâr perdesi) montaj ekibinin standart uygulamasıdır ve platform bu önlemler alınana kadar bağlantı noktasında beklemez, ekip hazır olduğunda devreye girer. Sıcaklığın kritik eşiğin altına indiği günlerde kaynaklı işler ertelenip cıvatalı kalemlere öncelik verilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Söğüt'te mevsime göre montaj önceliği",
                paragraflar: [
                    "Elverişli montaj penceresinin dar olduğu Söğüt'te, hangi kalemin hangi mevsimde öncelikli olduğunu aşağıdaki tabloda özetliyoruz.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Öncelikli kalem", "Neden", "Platform yaklaşımı"],
                    satirlar: [
                        ["Sonbahar sonu", "Çapraz ve kuşak", "Kışa çıplak iskelet bırakmamak", "Kaplamadan önce stabilite tamamlanır"],
                        ["Kış", "Yalnızca zorunlu işler", "Donmuş zemin, kaynak riski", "Kapasite sınırlı, öncelik sıkılaştırılır"],
                        ["İlkbahar başı", "Kışlık kontrol turu", "Donma-çözülme gevşetmesi", "Tork yeniden doğrulanır"],
                        ["İlkbahar-yaz", "Kalan tüm montaj", "Elverişli hava penceresi", "Talep yoğun, erken program şart"],
                    ],
                },
            },
            {
                baslik: "Erken bildirimin değeri",
                paragraflar: [
                    "Söğüt'te elverişli montaj penceresi dar olduğu için, aynı dönemde birden fazla şantiyenin platform talep etmesi kaçınılmazdır. Bu yoğunlukta hizmet kalitesini korumanın tek yolu erken planlamadır — bir şantiye şefi montaj takvimini bize birkaç hafta önceden bildirdiğinde, o dönemin en uygun günlerini ayırabiliriz. Son dakika talepler karşılanmaya çalışılır ama elverişli mevsimin ortasında bu, başka bir şantiyenin programını sıkıştırmak anlamına gelebilir.",
                    "Bu yüzden Söğüt'teki müşterilerimize, özellikle sonbahar öncesi kritik dönem için montaj planını mümkün olduğunca erken paylaşmalarını öneririz. Erken paylaşılan bir takvim, hem sizin işinizin zamanında bitmesini hem de bizim kapasitemizi adil dağıtmamızı kolaylaştırır.",
                ],
            },
            {
                baslik: "Kışı yarım geçiren iskeletin bahar kontrolü",
                paragraflar: [
                    "Bir iskelet, planlanmamış biçimde kışı yarım montajla geçirdiyse, ilkbaharda işe devam etmeden önce yapılan kontrol standart bir hazırlık değil zorunlu bir adımdır. Donma-çözülme çevrimi boyunca metal genleşip büzülür ve henüz tam sıkılmamış bağlantılarda bu hareket gevşemeye yol açabilir; gözle fark edilmeyen bir gevşeme, üzerine yeni yük binince sorun çıkarabilir. Bu yüzden ilkbahar başında yapılan ilk platform turu, kalan montaja geçmeden önce bu kontrolü tamamlar.",
                    "Kontrolün süresi iskeletin büyüklüğüne göre değişir ama genellikle bir günü aşmaz; bulunan gevşek bağlantılar aynı turda sıkılır. Bu adımı atlayıp doğrudan kalan işe geçmek, kısa vadede zaman kazandırsa da uzun vadede fark edilmemiş bir zayıflığı sahada bırakma riski taşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İskeletimiz kışa yarım kalacak gibi görünüyor; şimdiden ne yapmalıyız?",
                cevap:
                    "Öncelik sırasını değiştirmenizi öneririz: kaplama ve ince detaylar bekleyebilir ama rüzgâr çaprazları ve cephe kuşakları gibi stabilite sağlayan elemanların kolon-kiriş montajıyla eş zamanlı, kışa girmeden tamamlanması önemlidir. Bu elemanlar tamamlandığında iskelet kaplamasız da olsa kar yükünü ve rüzgârı görece güvenle karşılayabilir. Platform programımızı bu önceliğe göre yeniden kurabiliriz — sizden istediğimiz, hangi akslarda çapraz ve kuşağın eksik olduğunun bir listesini çıkarmanızdır; biz o listeye göre kalan haftaları planlarız.",
            },
            {
                soru: "Kışın montaj işi tamamen duruyor mu, yoksa sınırlı da olsa devam edilebilir mi?",
                cevap:
                    "Tamamen durmaz ama kapasitemiz sınırlanır. Donmuş zeminde platformun destek ayaklarını güvenle açmak zorlaşabilir, bu yüzden zemin durumunu her çalışmadan önce ayrıca değerlendiririz; ayrıca düşük sıcaklıkta kaynaklı bağlantılar için ek ısıtma önlemi gerekir ve bu, işi yavaşlatır. Zorunlu ve güvenlik açısından ertelenemeyecek işleri (örneğin eksik kalmış bir çapraz gerdirme) kışın da üstleniriz, ancak kapsamı gerçekçi tutar ve hava koşuluna göre günü esnek planlarız. Planlanabilir büyük montaj kalemlerini ise elverişli mevsime yazarız.",
            },
            {
                soru: "İlkbaharda montaja devam etmeden önce neden ekstra bir kontrol turu isteniyor?",
                cevap:
                    "Çünkü donma-çözülme çevrimi, henüz tam sıkılmamış bir bağlantıda gözle görülmeyen bir gevşemeye yol açabilir. Bu gevşeme fark edilmeden üzerine yeni kolon ya da kiriş yükü binerse, sonradan tespit edilmesi çok daha zor bir sorun hâline gelir. İlkbahar başındaki ilk platform turumuz, kışı geçirmiş tüm birleşim noktalarını yeniden tork kontrolünden geçirir; bu genellikle bir günü aşmayan bir iştir ama kalan montajın sağlam bir zemin üzerine kurulmasını sağlar. Bu adımı atlamanızı önermeyiz.",
            },
            {
                soru: "Elverişli mevsimde birden fazla şantiyeniz varsa bizim işimiz sıraya mı giriyor?",
                cevap:
                    "Talep yoğunluğuna ve bildirim zamanına bağlı olarak evet, bir sıralama söz konusu olabilir. Söğüt'te elverişli montaj penceresi dar olduğu için ilkbahar-yaz döneminde birden fazla şantiye aynı anda platform isteyebiliyor. Bu yoğunlukta erken bildirim belirleyicidir — montaj takviminizi birkaç hafta önceden paylaşırsanız o dönemin uygun günlerini önceden ayırırız. Son dakika gelen talepleri de karşılamaya çalışırız ama bu, bazen başka bir şantiyenin programına sıkışarak olabilir; bu yüzden erken planlama her iki taraf için de daha güvenli.",
            },
            {
                soru: "Kaynaklı bağlantılarda soğuk havada neden bekleme oluyor?",
                cevap:
                    "Kaynak kalitesi, dikişin ne hızda soğuduğuyla doğrudan ilişkilidir; çok düşük ortam sıcaklığında metal beklenenden hızlı soğur ve bu, dikişte çatlak riskini artırabilir. Bu yüzden düşük sıcaklıkta kaynaklı işler için montaj ekibi ön ısıtma veya rüzgâr perdesi gibi önlemler alır ve platform, bu önlemler tamamlanana kadar o noktada beklemek yerine sırasını başka bir kaleme (örneğin cıvatalı bir bağlantıya) devreder. Sıcaklık kritik eşiğin belirgin altına indiği günlerde kaynaklı işler tamamen ertelenip cıvatalı kalemlere öncelik verilir; bu karar montaj ekibinin sorumluluğundadır, biz onların önceliğine göre hareket ederiz.",
            },
            {
                soru: "Sonbahar sonuna doğru montaj hızlandırılmak isteniyor; platform kapasitesi buna yetiyor mu?",
                cevap:
                    "Genellikle yetiyor ama bunun şartı erken bildirimdir. Sonbaharın son haftalarında Söğüt'teki şantiyelerin çoğu benzer bir baskıyla karşılaşır — kışa çıplak iskelet bırakmamak için tempo artar — ve bu dönem bizim için de yoğun geçer. Şantiye şefinden kışa kadar tamamlanması gereken kalemlerin bir listesini erken aldığımızda, platform programını buna göre sıkılaştırır ve öncelik sırasını netleştiririz. Bildirim son haftaya kalırsa kapasite başka şantiyelere ayrılmış olabilir; bu yüzden sonbahar planınızı yazın ortasında paylaşmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Söğüt'ün iç bölgeye yakın konumu ve erken başlayan kışı genel iklim bilgisidir; çelik montajda donma-çözülme etkisi, kaynaklı bağlantıda soğuk hava riski ve stabilite elemanı önceliği sektör standardı inşaat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:pazaryeri": {
        h1: "Pazaryeri'nde Yeni Yatırım İnşaatlarında Çelik Montaj Platformu",
        giris:
            "Pazaryeri, Bilecik'in daha küçük ölçekli sanayi ilçelerinden biridir ve buradaki yeni yatırım inşaatları da bu ölçeğe uygun, genellikle tek katlı ve tek yapı bloklu fabrikalardır. Küçük ölçek, montaj sürecini basitleştirir ama bir dezavantajı da beraberinde getirir: ilçede sürekli aktif birden fazla büyük şantiye olmadığı için, platform talebi düzensiz ve seyrek aralıklarla gelir — bir ay hiç talep olmayabilir, ardından tek bir şantiyeden birkaç haftalık yoğun bir ihtiyaç doğabilir. Bizim Pazaryeri'ndeki yaklaşımımız bu düzensizliğe uyum sağlamaktır: talep geldiğinde makineyi komşu ilçelerden hızla yönlendirir, küçük ölçekli tek blokluk iskeletin montajını başından sonuna kesintisiz takip ederiz. Bu sayfa, Pazaryeri'ndeki fabrika inşaatlarında montaj fazı boyunca çalışma düzenimizi anlatıyor.",
        maddeler: [
            {
                baslik: "Tek bloklu iskelette baştan sona tek ekip takibi",
                metin:
                    "Küçük ölçekli tek bloklu bir fabrika iskeletinde kolon sayısı sınırlı olduğu için montaj, büyük tesislere göre daha kısa sürede ve genellikle tek bir ekip tarafından baştan sona takip edilerek tamamlanır. Bu, bizim için de bir avantajdır — aynı platform ve operatör, kolon dikiminden cephe kuşağına kadar bütün süreci tanıyarak ilerler, iş yarım kalıp başka bir ekibe devredilmez. Sürekliliğin faydası özellikle detay işlerde görülür: bir önceki gün hangi bağlantının hangi aşamada bırakıldığı, yeni bir ekibe anlatılmak yerine doğrudan bilinir.",
            },
            {
                baslik: "Seyrek talebin komşu ilçelerden karşılanması",
                metin:
                    "Pazaryeri'nde sürekli aktif büyük şantiye sayısı az olduğu için platform talebi düzensiz gelir; bu durumda makineyi bölgede boşta tutmak yerine, talep geldiğinde komşu ilçelerdeki (Bozüyük, Bilecik merkez) programımızdan uygun bir aralıkta yönlendiririz. Bu model, Pazaryeri'ndeki müşteriye sürekli bekleyen bir makine maliyeti yüklemez ama talep anında hızlı yanıt vermeyi de mümkün kılar — şart, montaj takviminin birkaç gün önceden bildirilmesidir ki komşu ilçedeki programla çakışmadan bir aralık ayrılabilsin.",
            },
            {
                baslik: "Küçük ölçekte vinç-platform koordinasyonunun basitliği",
                metin:
                    "Tek bloklu küçük bir iskelette vinç ve platform arasındaki koordinasyon, büyük çok kollu şantiyelere göre daha basittir — sahada tek bir vinç, tek bir montaj sırası ve genellikle tek bir platform vardır, çakışma riski düşüktür. Bu basitlik montaj hızını artırır: platform vincin bir adım gerisinden takip eder, günün büyük kısmında bekleme yaşanmadan ilerlenir. Küçük ölçeğin bu avantajı, iş kapsamının kısıtlı olmasından değil, koordinasyon karmaşıklığının az olmasından gelir.",
            },
            {
                baslik: "Tek katlı geometride kuşak ve saçak montajı",
                metin:
                    "Pazaryeri'ndeki yeni yatırımların çoğu tek katlı olduğu için cephe kuşağı ve saçak bitişi, kolon-kiriş montajından hemen sonra gelen doğal bir sonraki adımdır. Kuşak montajı cephe hattı boyunca ilerler, saçak bitişinde mahya ve alın profillerinin hizası kontrol edilir. Küçük yapı ölçeğinde bu kalem genellikle birkaç günde tamamlanır ve montaj fazının kapanışını oluşturur — kuşak ve saçak bittiğinde iskelet, kapama fazına devredilmeye hazır hâle gelir.",
            },
            {
                baslik: "Tek şantiyeye odaklı esnek program",
                metin:
                    "Pazaryeri'nde aynı anda birden fazla şantiyeye hizmet verme ihtiyacı nadir olduğu için, aktif bir montaj sürerken platform genellikle o tek şantiyeye odaklanır ve programını o şantiyenin günlük ihtiyacına göre şekillendirir. Bu, büyük OSB'lerdeki çoklu parsel yönetiminin tersi bir modeldir — burada esneklik, birden fazla saha arasında paylaşım yerine tek sahanın değişen günlük temposuna tam uyum sağlamaktan gelir. Şantiye şefinin sabah verdiği plan, o günün tamamını belirler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük ölçekli tek bloklu montajın haftalık gidişatı",
                paragraflar: [
                    "Tek katlı, tek bloklu bir fabrika iskeletinde montajın tipik haftalık ilerleyişi ve platformun o haftadaki odağı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Hafta", "Baskın iş", "Platform odağı", "Ekip sürekliliği"],
                    satirlar: [
                        ["1. hafta", "Kolon dikimi", "Bir adım geriden bağlama", "Aynı operatör baştan sona"],
                        ["2. hafta", "Kiriş ve aşık", "Hizalama ve tork kontrolü", "Bir önceki günü hatırlayarak ilerler"],
                        ["2-3. hafta", "Kuşak ve çapraz", "Cephe hattı boyunca gezinme", "Kesintisiz devam"],
                        ["3. hafta", "Saçak bitişi", "Mahya-alın profili kontrolü", "Montaj fazı kapanışı"],
                    ],
                },
            },
            {
                baslik: "Düzensiz talebin planlama karşılığı",
                paragraflar: [
                    "Pazaryeri'nde platform talebinin seyrek ve düzensiz gelmesi, bizim açımızdan bölgeye sabit bir makine tahsis etmeyi ekonomik kılmıyor; bunun yerine komşu ilçelerdeki programımızla entegre bir esneklik kuruyoruz. Bir şantiyeden montaj talebi geldiğinde, o dönem komşu ilçelerde çalışan makinelerin programına bakıp en uygun aralığı ayırırız. Bu model, Pazaryeri'ndeki müşteriye sürekli bekleyen makine maliyeti yansıtmadan, ihtiyaç anında makul bir sürede hizmet sunmayı hedefler.",
                    "Bu düzenin işlemesi için tek bir şey gerekiyor: montaj takviminin birkaç gün önceden bize bildirilmesi. Aynı gün talep gelen acil durumlarda da elimizden geleni yaparız, ancak en uygun aralığı ayırabilmemiz erken bilgiyle mümkün olur.",
                ],
            },
            {
                baslik: "Küçük ölçeğin getirdiği hız avantajı",
                paragraflar: [
                    "Tek bloklu küçük bir iskelette montaj süreci, büyük çok kollu bir fabrikaya göre daha kısa ve daha az karmaşıktır — sahada tek vinç, tek montaj sırası, genellikle tek platform vardır ve bunlar arasındaki koordinasyon büyük şantiyelerdeki gibi çok yönlü değildir. Bu basitlik, günün büyük kısmının bekleme değil çalışma ile geçmesi anlamına gelir; platform vincin bir adım gerisinden sürekli hareket eder.",
                    "Aynı operatörün baştan sona sürece eşlik etmesi de bu hızı destekler — bir önceki günün hangi noktada bırakıldığını yeniden anlatmaya gerek kalmaz, ekip kaldığı yerden devam eder. Küçük ölçekli şantiyelerde bu süreklilik, büyük şantiyelerdeki vardiya ve ekip değişimlerinin getirdiği zaman kaybını ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Pazaryeri'nde sürekli bir makineniz yok mu, talep geldiğinde ne kadar sürede geliyorsunuz?",
                cevap:
                    "Doğru, Pazaryeri'nde platform talebi düzensiz geldiği için burada sabit bir makine bulundurmuyoruz; talep geldiğinde komşu ilçelerdeki (Bozüyük, Bilecik merkez) programımızdan uygun bir makineyi yönlendiririz. Süre, o anki programın doluluğuna bağlı değişir ama montaj takviminizi birkaç gün önceden bildirdiğinizde genellikle sorunsuz bir aralık ayırabiliyoruz. Acil ve beklenmeyen bir talep gelirse elimizden geleni yaparız, ancak planlı bir montaj takvimi paylaşmanız bize en uygun günü ayırma imkânı verir.",
            },
            {
                soru: "Küçük ölçekli iskeletimizde aynı operatör mü çalışacak, yoksa gün gün değişebilir mi?",
                cevap:
                    "Tek bloklu küçük ölçekli işlerde genellikle aynı operatörle baştan sona ilerlemeyi tercih ederiz, çünkü süreklilik montaj hızını artırır — bir önceki günün hangi bağlantıda bırakıldığını yeni bir ekibe anlatmaya gerek kalmaz. İstisnai durumlarda (operatörün başka bir acil işe yönlendirilmesi gibi) değişiklik olabilir, ama bu durumda devir bilgisini eksiksiz aktarırız; hangi kolon-kiriş noktalarının tamamlandığı, hangilerinin beklediği net biçimde yeni operatöre iletilir.",
            },
            {
                soru: "Tek katlı yapımızda kuşak ve saçak montajı ne kadar sürer?",
                cevap:
                    "Küçük ölçekli tek katlı bir iskelette bu kalem genellikle birkaç günde tamamlanır, çünkü cephe hattı ve saçak uzunluğu büyük tesislere göre kısadır. Kuşak montajı cephe boyunca sırayla ilerler, saçak bitişinde mahya ve alın profillerinin hizası kontrol edilir. Bu kalem montaj fazının son adımıdır — bittiğinde iskelet kapama fazına devredilmeye hazır hâle gelir. Kesin süre, kolon aralığı ve cephe uzunluğuna göre keşifte netleşir.",
            },
            {
                soru: "Şantiyemizde tek vinç ve tek platform varken koordinasyon nasıl yürüyor?",
                cevap:
                    "Küçük ölçekli tek bloklu şantiyelerde koordinasyon büyük çok kollu şantiyelere göre görece basittir — tek montaj sırası, tek vinç, tek platform olduğu için çakışma riski düşüktür. Platform, vincin bir adım gerisinden takip eder: vinç bir elemanı kaldırıp yaklaşık konumuna indirir, platform hemen ardından o noktaya gidip kesin bağlantıyı tamamlar. Bu basit döngü, günün büyük kısmının bekleme değil çalışma ile geçmesini sağlar; şantiye şefiyle sabah kısa bir görüşme, günün sırasını netleştirmek için yeterlidir.",
            },
            {
                soru: "Talebimiz aniden çıktı, birkaç gün önceden haber veremedik; yine de hizmet alabilir miyiz?",
                cevap:
                    "Genellikle evet, ancak süre komşu ilçelerdeki o anki programın doluluğuna bağlı olarak değişebilir. Aniden çıkan taleplerde komşu ilçelerdeki programımıza bakıp en yakın uygun aralığı bulmaya çalışırız; bazen aynı gün, bazen bir-iki gün içinde çözülür. Güvenlik açısından acil bir durum varsa (örneğin yarım kalmış bir bağlantı riski) bunu önceliklendiririz. Mümkünse gelecekteki işleriniz için birkaç gün önceden bildirim yapmanızı öneririz; bu, planlamayı her iki taraf için de kolaylaştırır.",
            },
            {
                soru: "Küçük ölçekli işimiz büyük şantiyelere göre daha mı ucuza geliyor?",
                cevap:
                    "İş kapsamı küçük olduğu için toplam süre ve dolayısıyla toplam maliyet genellikle daha düşük çıkar, ama birim bazda (günlük kiralama bedeli) büyük şantiyelerle aynı fiyatlandırmayı kullanırız — sabit hazırlık maliyeti (nakliye, kurulum) küçük işte de aynı şekilde ödenir. Komşu ilçedeki bir işe yakın tarihte planlanabilen taleplerde nakliye payını paylaştırarak avantaj sağlayabiliriz. Kesin teklif için montaj kapsamınızı (kolon sayısı, açıklık, yükseklik) bilmemiz yeterli; keşif sonrası net rakam çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Pazaryeri'nin Bilecik'in küçük ölçekli sanayi ilçelerinden biri olması genel gözlem bilgisidir; tek bloklu iskelette montaj sırası ve vinç-platform koordinasyonu sektör standardı inşaat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:eskisehir-osb-cevre-ili": {
        h1: "Eskişehir OSB Çevresinde Bozüyük Merkezli Çelik Montaj Platformu",
        giris:
            "Eskişehir OSB'ye komşu ildeki konumumuzdan bakınca, Bozüyük'teki merkezimiz bu büyük sanayi bölgesine kısa mesafede bir çelik montaj desteği anlamına gelir. Eskişehir OSB'nin ölçeği Bilecik'in ilçelerine göre büyüktür ve buradaki fabrika inşaatları, daha uzun cephe hatları ve daha fazla kolon aksı içeren, çok bloklu yapılar olabilir. Bu ölçek farkı montaj sürecinin mantığını değiştirmez ama tempoyu değiştirir — büyük bir tesiste kolon dikiminden kuşak montajına kadar geçen süre haftalarca sürebilir ve bu süre boyunca platform talebi kesintisiz devam eder. Bozüyük'ten Eskişehir OSB'ye kısa mesafemiz, bu uzun süreli işlerde makineyi sahada sabit tutmak yerine gerektiğinde iki bölge arasında esnek biçimde kullanmamıza imkân tanır. Bu sayfa, Eskişehir OSB çevresindeki fabrika inşaatlarında Bozüyük merkezli montaj desteğimizi anlatıyor.",
        maddeler: [
            {
                baslik: "Büyük ölçekli OSB'de uzun süreli montaj taahhüdü",
                metin:
                    "Eskişehir OSB'deki fabrika inşaatları, Bilecik'in ilçelerindeki tek bloklu yapılara göre daha büyük ölçekli olabilir — çok bloklu, uzun cephe hatlı, birden fazla kolon aksını içeren tesisler. Bu ölçekte montaj süreci haftalar sürer ve platform, tek seferlik bir görev yerine sürecin tamamına eşlik eden bir taahhüt hâline gelir. Bu tür işlerde makineyi baştan sona aynı şantiyede tutmayı öneririz — sürekli gidiş geliş yerine sahada kalıcı bulunmak, uzun süreli montajda hem verimlilik hem koordinasyon açısından daha uygundur.",
            },
            {
                baslik: "Bozüyük'ten kısa mesafeli sevkiyat",
                metin:
                    "Bozüyük'teki merkezimizin Eskişehir OSB'ye yakınlığı, özellikle acil ek makine ihtiyacı doğduğunda değer taşır — büyük bir montaj işinde beklenmedik biçimde ikinci bir platforma ihtiyaç duyulursa (örneğin iki aks aynı anda ilerletilmek istendiğinde), bu ihtiyacı uzak bir depodan değil Bozüyük'ten kısa sürede karşılayabiliriz. Aynı yakınlık, bir makinenin periyodik bakım için kısa süreliğine geri çekilip yerine yedeğinin gönderilmesi gibi operasyonel değişikliklerde de işe yarar; şantiyede iş durmadan makine değişimi yapılabilir.",
            },
            {
                baslik: "Çok bloklu tesiste aks bazlı montaj sırası",
                metin:
                    "Büyük ölçekli tesislerde montaj genellikle aks bazlı ilerler — bina, kolon aralıklarına göre akslara bölünür ve her aks kendi içinde sıralı biçimde (kolon, kiriş, aşık, kuşak) tamamlanır. Birden fazla aks aynı anda farklı aşamalarda olabilir: bir akste kolon dikimi sürerken diğerinde kuşak montajı bitmiş olabilir. Platform bu çok aksli yapıda şantiye şefinin günlük öncelik sırasına göre akslar arasında hareket eder; küçük tek bloklu şantiyelerdeki tek sıralı ilerleyişten farklı olarak burada birden fazla iş kolu paralel takip edilir.",
            },
            {
                baslik: "Uzun cephe hattında kuşak montajının süresi",
                metin:
                    "Büyük bir tesisin cephe hattı, küçük ölçekli bir binaya göre kat kat uzundur ve kuşak montajı bu uzunluk boyunca günler sürebilir. Platform, cephe hattı boyunca kademeli olarak ilerler — bir günde belirli bir kolon aralığı bitirilir, ertesi gün bir sonraki aralığa geçilir. Bu uzun süreli ilerleyişte tempo, malzeme tedarikinin hızına da bağlıdır; kuşak profilleri sahaya zamanında gelmezse platform o bölümde bekler, bu yüzden malzeme sevkiyat takvimi montaj programıyla birlikte izlenir.",
            },
            {
                baslik: "OSB dışı ile OSB içi arasında lojistik denge",
                metin:
                    "Bozüyük'ten Eskişehir OSB'ye hizmet verirken, Bozüyük'teki kendi şantiyelerimizin programını da göz ardı etmeyiz — iki bölge arasında makine kapasitesini dengeli dağıtmak, her iki taraftaki müşteriye de tutarlı hizmet sunmanın şartıdır. Büyük ve uzun süreli bir Eskişehir OSB işi aldığımızda, bu işin süresi boyunca Bozüyük'teki kapasitemizi buna göre planlarız; kısa süreli Bozüyük talepleri farklı bir makineyle karşılanır, uzun süreli OSB işi kesintiye uğramaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ölçeğe göre montaj süresi ve platform taahhüdü",
                paragraflar: [
                    "Bilecik'in küçük ölçekli şantiyeleri ile Eskişehir OSB'nin büyük ölçekli tesisleri arasındaki farkı, montaj süresi ve platform kullanım biçimi üzerinden aşağıdaki tabloda karşılaştırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Ölçek", "Tipik montaj süresi", "Platform kullanımı", "Aks yapısı"],
                    satirlar: [
                        ["Küçük tek bloklu", "2-3 hafta", "Tek makine, tek sıralı iş", "Genellikle tek aks"],
                        ["Orta ölçekli", "3-5 hafta", "Tek makine, günlük öncelik", "2-3 aks, kısmen paralel"],
                        ["Büyük çok bloklu (OSB)", "5+ hafta", "Sahada kalıcı, gerektiğinde ek makine", "Çok aks, paralel ilerleme"],
                    ],
                },
            },
            {
                baslik: "Sahada kalıcı bulunmanın verimi",
                paragraflar: [
                    "Uzun süreli büyük ölçekli işlerde platformu her gün Bozüyük'ten getirip götürmek yerine şantiyede sabit tutmak, hem nakliye maliyetini düşürür hem de günün ilk saatlerinde kayıp yaşanmasını önler — makine zaten sahadaysa gün, montaj ekibiyle aynı anda başlar. Bu düzende sadece periyodik bakım veya operatör değişimi gibi durumlarda kısa süreli giriş-çıkış olur, bunlar da önceden planlanarak montaj takvimini aksatmayacak günlere yazılır.",
                    "Bozüyük'e yakınlığımız bu düzenin güvencesidir: sahada kalıcı duran makinede beklenmedik bir arıza çıkarsa, yedek makine uzak bir depodan değil kısa mesafeden gelir ve iş kaybı sınırlı kalır.",
                ],
            },
            {
                baslik: "Malzeme tedarikiyle senkron çalışma",
                paragraflar: [
                    "Büyük ölçekli tesislerde montaj hızını sınırlayan çoğu zaman platform kapasitesi değil, çelik elemanların sahaya ulaşma hızıdır. Kuşak profili, aşık veya özel kesim eleman zamanında gelmezse platform o bölümde bekler ve sıradaki hazır aksa geçer. Bu yüzden büyük işlerde şantiye şefinden yalnızca montaj sırasını değil, malzeme sevkiyat takvimini de almak isteriz — ikisi birlikte okunduğunda platformun hangi günü hangi akste geçireceği daha isabetli planlanır.",
                    "Malzeme gecikmesi yaşanan dönemlerde platformu tamamen boş bırakmak yerine, hazır olan başka bir kaleme (örneğin tamamlanmış bir aksın kabul kontrolüne) yönlendiririz; bu, sahadaki zamanın verimli kullanılmasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bozüyük'ten Eskişehir OSB'ye ne kadar sürede makine gönderebiliyorsunuz?",
                cevap:
                    "Komşu il sınırındaki bu mesafe, acil ek makine ihtiyaçlarında bize hız avantajı sağlıyor; kesin süre trafik ve o günkü programımıza göre değişir ama uzak bölgelerden gelen bir sevkiyata göre belirgin kısadır. Planlı büyük işlerde zaten sahada kalıcı bir makine bulundurmayı öneririz, bu durumda ek sevkiyat yalnızca beklenmedik durumlar (arıza, ikinci aks ihtiyacı) için gerekir. Bu tür acil bir ihtiyaç doğduğunda bizi aradığınızda, o anki programımıza göre en hızlı seçeneği bildiririz.",
            },
            {
                soru: "Büyük tesisimizde birden fazla akste aynı anda montaj yapılıyor; tek platform yeterli mi?",
                cevap:
                    "Aksların kaç tanesinin aynı anda aktif olduğuna ve her birinin platform ihtiyacının ne kadar sürdüğüne bağlı. Çoğu durumda tek platform, şantiye şefinin günlük öncelik sırasına göre akslar arasında hareket ederek yeterli olur — bir akste sabah çalışılırken diğerine öğleden sonra geçilir. Ancak iki aks aynı anda ve aynı yoğunlukta ilerletilmek isteniyorsa ikinci bir makine gerekebilir; Bozüyük'e yakınlığımız sayesinde bu ek makineyi kısa sürede sahaya getirebiliriz. Aks sayınızı ve hedef tamamlanma tarihinizi paylaşırsanız kapasite ihtiyacını birlikte hesaplarız.",
            },
            {
                soru: "Kuşak profilleri sahaya geç gelirse platform o süre boyunca boşta mı bekliyor, buna ücret ödüyor muyuz?",
                cevap:
                    "Malzeme gecikmesi yaşandığında platformu mümkün olduğunca boş bırakmamaya çalışırız — hazır olan başka bir aks veya kalem varsa oraya yönlendiririz. Kısa süreli gecikmelerde (bir-iki gün) bu esneklik genellikle yeterlidir. Uzun süreli, önceden bilinen bir malzeme gecikmesi söz konusuysa bunu birlikte değerlendirip makinenin o dönem için geçici olarak Bozüyük'teki başka bir işe yönlendirilmesi de bir seçenektir; bu durumda sözleşme koşulları buna göre düzenlenir. Şeffaflık için malzeme takvimini bizimle paylaşmanızı öneririz.",
            },
            {
                soru: "Makineyi şantiyede sabit tutmak mı, her gün getirip götürmek mi daha mantıklı?",
                cevap:
                    "Uzun süreli büyük ölçekli işlerde (birkaç haftayı aşan montaj) sahada sabit tutmayı öneririz; bu hem nakliye maliyetini düşürür hem de günün ilk saatlerinde kayıp yaşanmasını önler, çünkü makine zaten sahadaysa gün montaj ekibiyle aynı anda başlar. Kısa süreli işlerde (birkaç günlük) günlük taşıma daha ekonomik olabilir. Karar, işin toplam süresine ve günlük kullanım yoğunluğuna göre keşifte netleşir; ikisinin maliyet karşılaştırmasını isteyen müşterilere ayrıca gösteririz.",
            },
            {
                soru: "Periyodik bakım için makineyi geri çektiğinizde şantiyemiz bir gün boş mu kalıyor?",
                cevap:
                    "Bunu önlemeye çalışırız. Bozüyük'e kısa mesafemiz sayesinde periyodik bakım genellikle yedek makine devreye alınarak yapılır — bakıma giden makinenin yerine kısa sürede başka bir makine sahaya gelir ve montaj takvimi aksamaz. Bakım tarihini önceden planlarız ve mümkünse şantiyenin daha az yoğun olduğu bir güne denk getiririz. Beklenmedik bir arıza durumunda ise yedek makinenin sahaya ulaşma süresi, uzak bölgelerden gelen bir sevkiyata göre belirgin kısadır.",
            },
            {
                soru: "Eskişehir OSB'deki işimiz uzun sürerken Bozüyük'teki taleplerinizi nasıl karşılıyorsunuz?",
                cevap:
                    "Büyük ve uzun süreli bir OSB işi aldığımızda, o işin süresi boyunca kapasite planımızı buna göre ayarlarız — Bozüyük'teki kısa süreli talepler farklı bir makineyle karşılanır, böylece uzun süreli OSB işi kesintiye uğramaz. İki bölge arasında kapasiteyi dengeli dağıtmak, hem OSB'deki hem Bozüyük'teki müşterilere tutarlı hizmet sunmanın şartı; büyük bir iş aldığımızda bunun diğer taahhütlerimizi nasıl etkileyeceğini baştan hesaplar, gerekirse ek makine kapasitesi ayarlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir OSB'nin Bilecik'e komşu ildeki büyük ölçekli sanayi bölgesi olduğu ve Bozüyük'ün buna kısa mesafede olduğu coğrafi genel bilgidir; büyük ölçekli çok bloklu tesislerde aks bazlı montaj sırası sektör standardı inşaat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:inegol-osb-bursa-cevre-ili": {
        h1: "İnegöl OSB Çevresinde Bozüyük Merkezli Çelik Montaj Desteği",
        giris:
            "Bursa'nın İnegöl OSB'si, mobilya ve metal sanayi tesisleriyle tanınan büyük bir sanayi bölgesidir ve Bozüyük'ten bu bölgeye ulaşım, komşu il sınırının yakınlığı sayesinde makul bir mesafede kalır. İnegöl OSB'deki yeni fabrika inşaatları arasında mobilya üretimine özgü geniş açıklıklı, tek katlı ama uzun cephe hatlı yapılar sık görülür — bu geometri, çelik montajda uzun kuşak hatları ve çok sayıda tekrarlayan kolon aksı anlamına gelir. Bizim buradaki rolümüz, Bozüyük merkezli kapasitemizi bu komşu OSB'nin montaj taleplerine göre esnek biçimde ayarlamaktır; özellikle mobilya sektörünün yatırım dönemlerinde talep yoğunlaştığında, birden fazla şantiyeye kısa aralıklarla hizmet verebiliriz. Bu sayfa, İnegöl OSB çevresindeki fabrika inşaatlarında Bozüyük merkezli montaj desteğimizi anlatıyor.",
        maddeler: [
            {
                baslik: "Mobilya sanayi tesislerinde geniş açıklık geometrisi",
                metin:
                    "Mobilya üretim tesisleri, üretim hattının ve malzeme akışının serbest hareket edebilmesi için genellikle geniş kolon aralıklarıyla tasarlanır; bu, ana kirişlerin daha uzun açıklıkları geçmesi ve montaj sırasında geçici destekleme ihtiyacının standart tek katlı bir binaya göre daha dikkatli planlanması anlamına gelir. Platform bu geniş açıklıkta kiriş üstü aşık montajını dilim dilim yürütür; her aşık, uzun açıklığın ortasında sarkma göstermeyecek şekilde önce geçici mesnetle desteklenir, sonra kalıcı bağlantı tamamlanır.",
            },
            {
                baslik: "Uzun cephe hattında tekrarlayan aks montajı",
                metin:
                    "İnegöl OSB'deki tesislerin cephe hatları, tekrarlayan kolon akslarının art arda dizilmesiyle oluşur ve bu tekrarlayan yapı, montaj temposunu öngörülebilir kılar — bir aks tamamlandığında bir sonrakinin süresi de benzer çıkar. Platform bu tekrarlayan ritme göre çalışır: aks başına ortalama bir süre belirlenir, şantiye şefiyle bu süreye göre günlük program kurulur. Tekrarlayan yapının avantajı, ilk birkaç aksta öğrenilen deneyimin sonraki akslarda hızı artırmasıdır.",
            },
            {
                baslik: "Bozüyük'ten İnegöl OSB'ye komşu il sevkiyatı",
                metin:
                    "Bozüyük ile İnegöl arasındaki mesafe il sınırını geçse de, ana karayolu bağlantısı sayesinde sevkiyat süresi makul kalır ve bu, İnegöl OSB'deki büyük ölçekli işlerde ek makine veya yedek ihtiyacında bize esneklik verir. Uzun süreli bir montaj işi aldığımızda makineyi genellikle şantiyede sabit tutarız; komşu il sevkiyatı öncelikle beklenmedik durumlar (arıza, ek kapasite talebi) için devreye girer. Bu düzenleme, il sınırının pratikte bir engel değil yalnızca bir mesafe farkı olduğunu gösteriyor.",
            },
            {
                baslik: "Mobilya sektörünün yatırım dönemi yoğunluğu",
                metin:
                    "Mobilya sanayi, talep döngüsüne bağlı olarak zaman zaman yeni kapasite yatırımlarını yoğunlaştırır ve bu dönemlerde İnegöl OSB'de birden fazla şantiye aynı anda çelik montaj aşamasına girebilir. Böyle bir dönemde Bozüyük merkezli kapasitemizi önceden planlamak kritik hâle gelir — şantiye şeflerinin montaj takvimlerini erken bildirmesi, birden fazla işi çakışmadan sıraya koymamızı sağlar. Yoğun dönemlerde erken bildirim yapmayan taleplerde bekleme süresi uzayabilir.",
            },
            {
                baslik: "Metal sanayi tesislerinde farklılaşan montaj detayı",
                metin:
                    "İnegöl OSB'de mobilyanın yanında metal işleme tesisleri de bulunur ve bu tesislerin çelik iskeleti, ağır vinç köprüsü taşıyacak şekilde ek güçlendirme kirişleri içerebilir. Vinç köprüsü raylarının montajı, standart kiriş-aşık montajından ayrı bir kalemdir ve hassas hizalama gerektirir — ray ekseninin boyu boyunca sapma toleransı dardır. Bu tür işlerde platform, ray hattı boyunca yavaş ve kontrollü ilerler, her destek noktasında hizalama ölçümü tekrarlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İnegöl OSB'de tesis tipine göre montaj farkı",
                paragraflar: [
                    "Mobilya ve metal sanayi tesislerinin çelik montaj sürecindeki farklılıkları aşağıdaki tabloda özetliyoruz.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Geometri özelliği", "Montaj güçlüğü", "Platform yaklaşımı"],
                    satirlar: [
                        ["Mobilya üretim holü", "Geniş kolon açıklığı", "Uzun açıklıkta geçici destekleme", "Aşık dilim dilim, mesnetle"],
                        ["Metal işleme (vinç köprülü)", "Güçlendirme kirişi + ray", "Dar toleranslı ray hizası", "Yavaş, kontrollü, tekrar ölçüm"],
                        ["Standart depo/atölye", "Tek düze açıklık", "Görece basit", "Standart tempoda ilerleme"],
                    ],
                },
            },
            {
                baslik: "Tekrarlayan aksın öngörülebilirliği",
                paragraflar: [
                    "İnegöl OSB'deki uzun cephe hatlı tesislerde montajın en yararlı özelliği tekrarlayan yapıdır: bir kolon aksı ile bir sonraki neredeyse aynı işlemi gerektirir. Bu tekrar, hem şantiye şefinin hem bizim programımızın öngörülebilir olmasını sağlar — ilk birkaç akste geçen süre ölçüldükten sonra kalan akslar için gerçekçi bir tarih verebiliriz. Öngörülebilirlik, komşu il sevkiyatı gibi ek koordinasyon gerektiren durumlarda özellikle değerlidir çünkü ne zaman ek makineye ihtiyaç duyulacağı önceden kestirilebilir.",
                    "Tekrarlayan akslarda hızlanma genellikle üçüncü veya dördüncü akstan sonra belirginleşir; montaj ekibi ve platform operatörü aynı sırayı tekrarladıkça koordinasyon daha akıcı hâle gelir.",
                ],
            },
            {
                baslik: "Vinç köprüsü raylarında toleransın önemi",
                paragraflar: [
                    "Metal işleme tesislerinde vinç köprüsü rayının montajı, standart kiriş montajından farklı bir hassasiyet ister — ray ekseni boyunca sapma toleransı dar tutulur, çünkü köprü vinci bu ray üzerinde hareket ederken küçük bir sapma bile zamanla aşınma veya sıkışmaya yol açabilir. Platform bu montajda hız yerine kontrolü önceliklendirir: her destek noktasında hizalama tekrar ölçülür, bir sonraki noktaya geçmeden önce mevcut noktanın toleransı içinde olduğu teyit edilir.",
                    "Bu titizlik montaj süresini standart bir kirişe göre uzatır, ancak ray hizasındaki bir hatanın sonradan düzeltilmesi çok daha maliyetli olduğu için bu süre farkı kabul edilebilir bir yatırımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bozüyük'ten İnegöl OSB'ye il sınırını geçen bir sevkiyat ek maliyet mi getiriyor?",
                cevap:
                    "Mesafe biraz daha uzun olduğu için nakliye bedeli Bilecik içi işlere göre bir miktar farklılık gösterebilir, ancak ana karayolu bağlantısı sayesinde süre makul kalır ve bu fark büyük ölçekli, uzun süreli işlerde toplam maliyet içinde küçük bir paya düşer. Uzun süreli montaj işlerinde makineyi şantiyede sabit tutmayı önerdiğimiz için nakliye zaten tek seferlik bir maliyet olur, günlük tekrarlanmaz. Kesin rakam için iş kapsamını ve tahmini süreyi aldıktan sonra net teklif sunarız.",
            },
            {
                soru: "Mobilya üretim holümüzün açıklığı geniş; standart bir kiriş montajından farkı ne olacak?",
                cevap:
                    "Geniş açıklıkta ana kirişler daha uzun mesafeyi geçtiği için montaj sırasında geçici destekleme ihtiyacı artar — kiriş kalıcı bağlantısı tamamlanana kadar sarkma göstermemesi için ara mesnetler kullanılır. Platform bu süreçte aşık montajını dilim dilim yürütür, her aşığı önce geçici mesnetle destekleyip sonra kalıcı bağlantıyı tamamlar. Bu ek adım, standart dar açıklıklı bir binaya göre montaj süresini biraz uzatır ama açıklığın güvenli biçimde kapanmasını sağlar. Kesin açıklık ölçüleriniz varsa keşifte süre tahminini netleştiririz.",
            },
            {
                soru: "Vinç köprüsü raylarımızın montajı için özel bir hazırlık gerekiyor mu?",
                cevap:
                    "Evet, ray montajı standart kiriş işinden farklı bir hassasiyet gerektirir ve bu iş için platformdan yavaş, kontrollü bir çalışma bekleriz — her destek noktasında hizalama ölçümü tekrarlanır ve bir sonraki noktaya geçmeden önce mevcut noktanın tolerans içinde olduğu teyit edilir. Sizden istediğimiz, ray projesindeki tolerans değerlerini ve ölçüm yönteminizi (hangi ekip, hangi aletle kontrol edecek) önceden paylaşmanızdır; bu bilgi olmadan platform kendi başına tolerans kararı veremez, üretici veya mühendislik ekibinizin onayı gerekir.",
            },
            {
                soru: "İnegöl OSB'de aynı dönemde başka şantiyelere de hizmet veriyor musunuz, bu bizim işimizi etkiler mi?",
                cevap:
                    "Mobilya sektörünün yatırım dönemlerinde İnegöl OSB'de birden fazla şantiyeye aynı anda hizmet verdiğimiz oluyor. Bu durumda etkiyi en aza indirmenin yolu erken bildirimdir — montaj takviminizi erken paylaşırsanız kapasitemizi birden fazla işe çakışmadan sıraya koyabiliriz. Uzun süreli büyük bir işte makineyi genellikle sahada sabit tutuyoruz, bu da o şantiyenin programının başka bir işten etkilenme riskini azaltıyor. Yoğun dönemde geç bildirilen taleplerde bekleme süresi uzayabilir, bu yüzden erken planlamayı öneririz.",
            },
            {
                soru: "Tekrarlayan kolon akslarımız var; her aks için aynı süreyi mi bekleyelim?",
                cevap:
                    "İlk birkaç akste ölçtüğümüz süre, kalan akslar için güvenilir bir referans oluşturur — tekrarlayan yapı sayesinde montaj ekibi ve platform operatörü sırayı öğrendikçe süre genellikle üçüncü veya dördüncü akstan sonra biraz kısalır. Kesin bir süre taahhüdü vermeden önce ilk birkaç aksı birlikte tamamlamanızı, ardından kalan akslar için gerçekçi bir program çıkarmamızı öneririz. Bu yaklaşım, baştan verilen iyimser bir tahminin sahada tutmaması riskini azaltır.",
            },
            {
                soru: "Metal işleme tesisimizde hem standart kiriş montajı hem vinç köprüsü rayı var; aynı platform mı ikisini de yapıyor?",
                cevap:
                    "Genellikle evet, aynı platform sınıfı ikisini de karşılayabilir, ancak çalışma biçimi değişir — standart kiriş ve aşık montajında tempo görece hızlıdır, ray montajında ise yavaş ve kontrollü ilerlenir. Günlük programda bu iki işi ayrı bloklar hâlinde ele alırız: sabah standart montaja odaklanılır, ray montajı için ayrı ve daha uzun bir zaman dilimi ayrılır. Ray montajının hassasiyeti nedeniyle bu kalemi günün sonuna, ekibin daha az yorgun olduğu bir zamana almayı da tercih edebiliriz; bu tercih şantiye şefiyle birlikte netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İnegöl OSB'nin mobilya ve metal sanayi ile anılması ve Bursa'nın Bilecik'e komşu il olması kamuya açık coğrafi/sektörel genel bilgidir; geniş açıklık montajı ve vinç köprüsü ray toleransı sektör standardı inşaat mühendisliği bilgisidir. Tesis adı ve rakam verilmemiştir.",
    },
    "bolge:yenipazar": {
        h1: "Bilecik Yenipazar’da Yeni Yapı ve Tesis Kurulumu İçin Platform",
        giris:
            "Bu sayfa Aydın’daki değil, Bilecik iline bağlı Yenipazar’daki yeni yapı ve tesis kurulumlarını ele alır. B10 kardeş kaydı mevcut yapılardaki kısa bakım işinin Bozüyük OSB servis programına nasıl bağlandığını anlatır; burada bakım, ortak servis ve geri dönüş slotu yoktur. Yeni proje için makine kendi şantiye takvimine ayrılır ve kaba zemin hazırlığından çelik iskelet, çatı-cephe kapama, iç tesisat ve devreye alma öncesi kontrole kadar değişen fazlara göre planlanır. Belirli bir yatırım, tesis kapasitesi veya proje ölçüsü varsayılmaz. Çelik elemanı vinç kaldırır; platform montaj personelini bağlantı noktasına taşır. İki ekipmanın hareket zarfı aynı anda kesişmez. Her faz geçişinde zemin, giriş, hedef geometrisi ve gerekli sınıf yeniden doğrulanır. Şantiyenin başında uygun olan arazi tipi bomlu, bina kapandıktan sonra iç hacme giremeyebilir; kompakt akülü sınıfın erken gelmesi de tamamlanmamış zeminde risk yaratabilir. B12 programı bu değişimi tek uzun kiralama varsayımıyla değil, teslim kanıtlarıyla açılan fazlar dizisi olarak yönetir.",
        maddeler: [
            {
                baslik: "Kaba zeminde ilk erişim ve kurulum rotası",
                metin:
                    "Yeni yapı sahasında beton yollar ve son zemin henüz tamamlanmamış olabilir. Makinenin taşıyıcıdan indirileceği alan, giriş eğimi, dolgu, kazı, drenaj hattı ve geçici malzeme yolları şantiye sorumlusuyla görülür. Arazi kabiliyeti yüksek bir sınıf seçilse bile taşıma gücü belirsiz yüzeye girilmez. Destek ayağı kullanılacaksa her basma noktası ayrıca değerlendirilir. Yağış önceki keşfi geçersiz kılabilir; günlük kontrol tekrarlanır. Vinç, beton pompası ve malzeme araçlarının güzergâhı platform rotasıyla çakışıyorsa zaman dilimleri ayrılır. İlk fazda açılan rota, iskelet yükseldikçe aynı kalmayabilir; her büyük yerleşim değişikliği plan üzerine işlenir.",
            },
            {
                baslik: "Çelik iskelette vinç-platform ardışıklığı",
                metin:
                    "Kolon, kiriş veya diğer ağır yapı elemanlarını kaldırma görevi vinç ve yetkili kaldırma ekibine aittir. Platform, eleman projedeki geçici veya kalıcı güvenli konumuna alındıktan sonra bağlantı personeline erişim sağlar. Askılı yükün altında, salınım yönünde ya da vincin bom zarfıyla kesişen bölgede sepet yükselmez. Kaldırma planı, işaretçi, iletişim yöntemi ve yasak alan şantiye koordinasyonunda belirlenir. Platform malzeme vinci olarak kullanılmaz; sepete yalnız üretici sınırındaki alet ve hafif bağlantı parçaları alınır. Bir aks tamamlanmadan sonraki kaldırma başlatılmaz. Bağlantı kabulü, vincin yükü bırakması ve platformun yeni konuma geçmesi ayrı adımlar olarak kaydedilir.",
            },
            {
                baslik: "Çatı ve cephe kapamada hava penceresi",
                metin:
                    "İskelet güvenli biçimde tamamlandığında çatı ve cephe kuşakları, kaplama bağlantıları, oluk-saçak ve dış tesisat işleri açılır. Sepetten geniş panel kaldırılmaz; panel uygun kaldırma yöntemiyle taşınır, platform personelin bağlantı noktasına erişimini sağlar. Rüzgâr, geniş yüzeyli elemanlarla birlikte daha kritik hâle gelir ve makine üretici sınırı aşıldığında çalışma durur. Hava bağımsız yerde hazırlık işleri ayrı listede tutulur. Cephe boyunca zemin değişebilir; aynı kotta görünen her aks aynı park koşulunu sunmaz. Tamamlanan bölüm bağlantı ve gevşek parça kontrolünden sonra teslim edilir. Açık bırakılan kaplama, hava değişmeden güvenli geçici durumda sabitlenir.",
            },
            {
                baslik: "Bina kapandığında iç sınıfa geçiş",
                metin:
                    "Dış kabuk kapandıkça elektrik, mekanik, havalandırma, yangın hattı ve aydınlatma ekipleri iç hacimde yoğunlaşır. Egzoz üreten dış saha sınıfı kapalı yapıya otomatik taşınmaz. Kapı yüksekliği ve eni, iç dönüş, tamamlanmış zemin, kanal ve yeni kurulan ekipman ölçülür; akülü makaslı veya eklemli seçenek değerlendirilir. Dışarıda çalışan ünitenin alt takım temizliği zemin ve iç ortam açısından kontrol edilir. Aynı anda farklı ekiplerin hareketi hücrelere ayrılır; askılı yük ve başka platform aynı zarfa girmez. Faz değişimi yalnız makine değişimi değil, kullanıcı, şarj, bariyer ve günlük kontrol düzeninin yeniden teslimidir.",
            },
            {
                baslik: "Kurulum kapanışı ve devreye alma öncesi eksik turu",
                metin:
                    "Montaj sonunda üst kotta bağlantı, etiket, koruyucu, kablo sabitleme ve erişim gerektiren eksikler sistem bazında listelenir. Enerji verilmeden kapanabilecek işler aynı paketlerde tamamlanır. Son dakika hedefi mevcut iznin otomatik uzantısı sayılmaz; erişim ve alt alanı değerlendirilir. Platform işi bitince alet-parça sayımı yapılır, koruyucular ve çalışma alanı teknik sorumluya teslim edilir. Kontrollü test sırasında yeni erişim gerekirse sistem tekrar güvenli duruma alınır ve yeni izin açılır. Geçici şantiye çözümü kalıcı bakım yöntemi kabul edilmez. Kullanılan park noktaları gelecekteki bakım hafızasına yazılır, fakat işletme düzeni değişeceği için model garantisi oluşturmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yenipazar yeni proje fazları ve platform görevi",
                paragraflar: [
                    "Bilecik Yenipazar’daki proje, yapı türü varsayılmadan saha fazları üzerinden planlanır. Tablo her fazda değişen temel kısıtı gösterir.",
                ],
                tablo: {
                    basliklar: ["Faz", "Platform görevi", "Baskın kısıt", "Geçiş kanıtı"],
                    satirlar: [
                        ["Kaba saha", "İlk yüksek erişim", "Dolgu, kazı, araç rotası", "Zemin ve giriş kabulü"],
                        ["Çelik iskelet", "Bağlantı noktasına personel", "Askılı yük ve vinç zarfı", "Eleman güvenli konumda"],
                        ["Çatı-cephe", "Bağlantı ve kenar işleri", "Rüzgâr ve açık zemin", "Bölüm sabitlendi"],
                        ["İç imalat", "Tesisat ve aydınlatma", "Kapı, egzoz, çok ekip", "İç rota teslimi"],
                        ["Eksik turu", "Üst kot kapanış", "Değişen liste ve izin", "Teknik kabul"],
                        ["İade", "Şantiye kapasitesini bırakma", "Temizlik ve yükleme", "Durum kaydı kapalı"],
                    ],
                },
            },
            {
                baslik: "Faz kapısı ve makine değişim kararı",
                paragraflar: [
                    "Her faz başlamadan hedef listesi, güncel yerleşim, zemin, giriş, diğer kaldırma operasyonları ve sorumlu ekip doğrulanır. Makinenin erken getirilmesi hazırlık açığını kapatmaz; güvenli park ve hasar riski yaratabilir. Faz kapısı yazılı kabul edildiğinde sevkiyat yapılır. Birkaç gün sahada kalacak ünitenin parkı, yakıt veya şarjı, kullanıcıları ve vardiya kontrolü belirlenir. Şantiye planı değişirse eski kabul yeni alana taşınmaz.",
                    "Dış saha sınıfından iç mekân sınıfına geçiş, işin ilerlemesine bağlı teknik karardır. Kalan dış hedeflerin sayısı, kapalı hacmin ölçüsü, zemin koruması ve iki ünitenin sahada çakışma ihtiyacı görülür. Gerekirse kısa bir devir penceresinde iki makine bulunur, fakat çalışma zarfları ayrılır. Birinin teslimi ve durum kaydı tamamlanmadan sorumluluk diğerine belirsiz biçimde geçmez.",
                ],
            },
            {
                baslik: "Şantiye koordinasyonu ve değişiklik kaydı",
                paragraflar: [
                    "Günlük toplantıda vinç, platform, malzeme aracı, elektrik ve mekanik ekiplerin çalışma hücreleri işaretlenir. Platformun bom-sepet zarfı ile düşme alanı, yalnız taban çevresinden daha geniştir. Bir ekip gecikirse diğerinin hücresine izinsiz girilmez; hazır yedek iş paketi kullanılır. Rüzgâr veya zemin dış işi durdurursa yerde yapılabilecek malzeme hazırlığı, ölçü ve işaretleme devreye girer. Güvenli olmayan koşulda yüksek iş sürdürülmez.",
                    "Proje değişikliği yeni bir bağlantı veya üst hedef doğurduğunda çizim, malzeme, erişim ve süre etkisi kaydedilir. Mevcut kiralamaya otomatik ekleme yapılmaz. Aynı sınıf ve hazır hücreyle kapanıyorsa sıra güncellenir; farklı ekipman ya da yeni faz istiyorsa ayrı kapasite açılır. Bu kayıt, montajın görünmez biçimde uzamasını ve bir sonraki şantiye taahhüdünün bozulmasını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bu içerik hangi Yenipazar ilçesi içindir?",
                cevap:
                    "Yalnız Bilecik iline bağlı Yenipazar içindir; Aydın Yenipazar bu kapsamda değildir. Talep açılırken il, açık adres, harita konumu, yaklaşım yönü ve şantiye sorumlusu yazılı doğrulanır. Yeni projenin yerleşim krokisi ve giriş-indirme alanı bu kayda bağlanır. İlçe adı tek başına taşıma veya saha planı oluşturmak için kullanılmaz. Yanlış coğrafi kayıt, teknik olarak doğru seçilmiş makineyi bile yanlış rotaya gönderir. Adres teyidinden sonra zemin, faz ve erişim paketi değerlendirilir; her değişiklik güncel proje kaydına işlenir.",
            },
            {
                soru: "B10’daki mevcut bakım servisiyle aynı teklif kullanılabilir mi?",
                cevap:
                    "Hayır. B10 kısa ve doğrulanmış mevcut bakım işini Bozüyük OSB servis slotuna bağlar. B12 yeni yapı veya tesis kurulumudur; fazlar değişir, zemin tamamlanmamış olabilir, vinç ve çoklu ekip koordinasyonu gerekir ve makine projeye daha uzun süre ayrılır. Aynı adreste bakım ile yeni kurulum bulunuyorsa kapsamlar ayrı teklif edilir. Servis için uygun kompakt ünitenin çelik iskelet aşamasına, arazi tipi dış sınıfın kapalı iç imalata uygun olduğu varsayılmaz. Doğru sözleşme taşıma, makine değişimi, park ve proje değişikliklerini baştan görünür kılar.",
            },
            {
                soru: "Vinç yükü tutarken platform ekibi bağlantı yapabilir mi?",
                cevap:
                    "Kaldırma planı ve proje yöntemi elemanın geçici bağlantısını tarif eder; ancak personel askılı yükün altında veya olası salınım alanında çalışmaz. Vinç elemanı güvenli konuma getirir, yetkili montaj ekibi gerekli geçici sabitlemeyi yapar ve yükün durumu teyit edilir. Platform bundan sonra bağlantı noktasına yaklaşır. İki makinenin bom zarfları kesişmez ve iletişim belirlenmiş işaretçi üzerinden yürür. Sepet vinç yükünü yönlendiren dayanak veya malzeme kaldırma aracı olarak kullanılmaz. Acele, kaldırma ile personel erişimini aynı riskli anda birleştirme gerekçesi değildir.",
            },
            {
                soru: "Tek platform bütün proje fazlarında kalabilir mi?",
                cevap:
                    "Bazı projelerde teknik olarak mümkün olabilir, fakat otomatik hedef değildir. Kaba zeminde arazi uyumu ve açık erişim öne çıkarken bina kapandığında kapı, iç dönüş, egzoz ve tamamlanmış zemin belirleyici olur. Her faz geçişinde kalan hedefler ve erişim diyagramı yeniden görülür. Tek ünitenin gereğinden büyük veya uygunsuz kaldığı noktada makine değişimi daha güvenli ve verimli olabilir. Devir penceresi, taşıma ve şarj-yakıt planı baştan hazırlanır. Sırf yeniden sevkiyat olmasın diye uygun olmayan sınıf kapalı hacme zorlanmaz.",
            },
            {
                soru: "Rüzgâr çatı ve cephe programını durdurursa ne yapılır?",
                cevap:
                    "Makinenin üretici sınırı aşıldığında bom indirilir; geniş yüzeyli kaplama elemanında risk ayrıca değerlendirilir. Programda yerde yapılabilecek malzeme hazırlığı, bağlantı kontrolü, ölçü ve işaretleme gibi yedek işler tutulur. Kapalı hacim fazı güvenli biçimde açılmış ve uygun makine mevcutsa o pakete geçilebilir; hazır olmayan alana sırf günü doldurmak için girilmez. Açık kaplama güvenli geçici durumda sabitlenir. Hava beklemesinin süre ve maliyet karşılığı sözleşmede görünür olur. Güvenlik sınırı proje takvimine yetişmek adına esnetilmez.",
            },
            {
                soru: "Kurulum sonunda platformu ne zaman iade edersiniz?",
                cevap:
                    "Üst kot eksik listesi teknik sorumlu tarafından kapatıldığında veya ayrı programa aktarıldığında, alet-parça sayımı ve alan teslimi yapılır. Kontrollü testte yeniden erişim gerekip gerekmediği görülür; tanımlı destek penceresi varsa o tamamlanır. Belirsiz ihtimal için makine süresiz tutulmaz, fakat açık güvenlik veya bağlantı maddesiyle erken çekilmez. Ünite temizlenir, görünür durumu ve enerji seviyesi kaydedilir, güvenli yükleme alanı açılır. Uzatma veya yeni faz talebi sonraki kapasite taahhütleriyle birlikte yazılı değerlendirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Yenipazar’ın Bilecik’e bağlı ilçe olması uygulama belgesindeki kamuya açık coğrafi bilgidir; yeni yapı fazları, vinç-platform ardışıklığı, saha geçişi ve eksik turu sektör geneli inşaat pratiğidir. Aydın Yenipazar, mevcut bakım servis teması, özel proje, tesis, kapasite, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:bilecik-kucuk-sanayi-sitesi": {
        h1: "Bilecik Küçük Sanayi Sitesinde Genişleme ve Yeni Dükkân İmalatı",
        giris:
            "Bilecik Küçük Sanayi Sitesindeki bu B12 kaydı faal dükkânların karma bakım işlerini veya Bozüyük OSB’den gelen kısa servis slotunu anlatmaz. Konu, mevcut site dokusu içinde yeni bir dükkân, ek atölye hacmi ya da genişleme bölümünün inşa ve montaj sürecidir. İşleyen komşu atölyelerle ortak yolun yanında çelik eleman, panel, tesisat ve platform hareketi aynı sınırlı sahaya girer. Bu nedenle boş bir sanayi parselindeki şantiyeden farklı olarak proje sınırı her gün görünür tutulur; komşu giriş, yaya-araç geçişi ve mevcut işletmenin üretimi yeni imalat alanından ayrılır. Vinç ağır elemanı kaldırır, platform bağlantı personeline erişim sağlar ve görevler birbirine karıştırılmaz. Kaba zemin, çelik iskelet, dış kabuk, iç tesisat ve teslim öncesi eksik turu kendi makine ve izin koşuluna sahiptir. Program yalnız yüksekliğe göre değil, ortak alanı ne zaman ve ne kadar süre kapatacağına göre kurulur.",
        maddeler: [
            {
                baslik: "Mevcut site içinde şantiye sınırı kurmak",
                metin:
                    "Yeni dükkân veya genişleme alanı fiziksel bariyerle çevrilir; malzeme girişi, vinç kurulumu ve platform rotası komşu işletmelerin günlük geçişinden ayrılır. Acil yol, yangın erişimi ve ortak altyapı noktaları kapatılmaz. İş programı site yönetimi ve etkilenen dükkânlarla önceden paylaşılır. Bariyer yalnız zemin alanını değil kaldırma ve sepet hareket zarfını da dikkate alır. Şantiye malzemesi ortak yola taşarsa aynı vardiyada düzenlenir; geçici depolama kalıcı koridor engeline dönüşmez. Mevcut işletmenin üretimi güvenli ayrım kurulabiliyorsa sürebilir, fakat askılı yük veya düşme alanıyla kesişen hücrede eş zamanlı faaliyet yapılmaz.",
            },
            {
                baslik: "Çelik taşıyıcı ve bağlantı montajı",
                metin:
                    "Kolon, kiriş, aşık veya diğer ağır elemanlar onaylı kaldırma yöntemiyle vinç tarafından yerleştirilir. Platform elemanı kaldırmaz; montaj personelini cıvata, kaynak veya bağlantı noktasına taşır. Askılı yük altında kişi bulunmaz, vinç ve platform zarfları aynı anda kesişmez. Geçici sabitleme tamamlanmadan yük bırakılmaz ve sepet sonraki aksa geçmez. Kaynak yapılacaksa sıcak çalışma izni, yangın önlemleri ve komşu işletmeye sıçrama-duman etkisi değerlendirilir. Bağlantı kabulü proje sorumlusu tarafından kaydedilir. Bir aksın tamamlanması, ortak yolun ve vinç alanının ne zaman yeniden açılacağını belirleyen kapanış noktasıdır.",
            },
            {
                baslik: "Cephe ve çatı kapamada komşu girişleri korumak",
                metin:
                    "Panel, kaplama, oluk ve saçak montajı şantiye sınırının dışına uzanan bom hareketi veya malzeme düşme alanı oluşturabilir. Komşu dükkânın girişini habersiz kapatmayız; çalışma penceresi paylaşılır ve alternatif rota belirlenir. Geniş panel sepette kaldırılmaz, uygun kaldırma ekipmanıyla konumlandırılır. Rüzgâr üretici ve malzeme sınırına uygun değilse çalışma durur. Tamamlanmayan yüzey güvenli biçimde sabitlenir. Cephe aksı bitince bağlantı ve gevşek parça kontrolü yapılır, bom tamamen toplanır ve ancak bundan sonra ortak yol açılır. Kısa süre uğruna açık panel veya kontrolsüz geçiş bırakılmaz.",
            },
            {
                baslik: "İç imalat başladığında kompakt sınıfa geçmek",
                metin:
                    "Kabuk kapandıktan sonra aydınlatma, kablo, hava hattı, havalandırma ve yangın tesisatı iç hacimde ilerler. Dış saha platformunun kapıdan geçeceği veya tamamlanmış zemine uygun olduğu varsayılmaz. Kapı, eşik, ilk dönüş, iç koridor, kanal ve hedef kotu ölçülür; egzoz üretmeyen akülü sınıf değerlendirilir. Yeni zemin kir ve lastik etkisine karşı korunur. Farklı teknik ekipler hücrelere ayrılır, sepet altında eş zamanlı iş yapılmaz. Şarj noktası kuru ve ortak yoldan uzakta seçilir. Dış ünite temizlenmeden içeri alınmaz; gerekiyorsa faz değişiminde farklı platform teslim edilir.",
            },
            {
                baslik: "Yeni dükkân tesliminden önce erişim eksiklerini kapatmak",
                metin:
                    "Teslim öncesi armatür, yönlendirme, kapı motoru, üst tesisat etiketi, koruyucu ve bağlantı gibi yüksekte kalan eksikler tek listede toplanır. Her teknik ekip kendi malzemesini ve sorumlusunu hazırlar. Aynı konumdan erişilen kalemler paketlenir; son dakika yeni hedefi izin ve geometri görülmeden eklenmez. Enerji verilmeden yapılabilecek kontroller önce tamamlanır. İş sonunda alet-parça sayımı ve teknik kabul yapılır, geçici bariyer veya açık bağlantı bırakılmaz. Yeni hacmin işletmeye açılmasıyla bakım dönemi başlar; şantiye platformunun gelecekte her iş için uygun olacağı varsayılmaz. Kalıcı bakım rotası ayrıca kayda alınır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "KSS genişleme projesinde faz ve ortak alan kontrolü",
                paragraflar: [
                    "Yeni imalatın her fazı, faal site üzerindeki farklı bir etkiyi yönetir. Tablo makine görevini ve alanın yeniden açılma koşulunu gösterir.",
                ],
                tablo: {
                    basliklar: ["Faz", "Platform işi", "Ortak alan riski", "Kapanış koşulu"],
                    satirlar: [
                        ["Saha hazırlığı", "İlk erişim ve işaretleme", "Malzeme ve araç rotası", "Şantiye sınırı kuruldu"],
                        ["Çelik montaj", "Bağlantı personeli erişimi", "Vinç ve askılı yük", "Aks güvenli kabulde"],
                        ["Çatı-cephe", "Panel bağlantısı ve kenar", "Komşu giriş, rüzgâr", "Yüzey sabitlendi"],
                        ["İç tesisat", "Tavan ve hat montajı", "Dar kapı, yeni zemin", "Hücre teknik teslimde"],
                        ["Eksik turu", "Üst kot kapanış", "Çoklu ekip ve enerji", "Açık liste kapandı"],
                        ["İşletmeye teslim", "Platform çıkışı", "Ortak yol ve temizlik", "Yeni dükkân güvenli"],
                    ],
                },
            },
            {
                baslik: "Site yönetimiyle günlük koordinasyon",
                paragraflar: [
                    "Gün başlamadan vinç, platform, malzeme aracı ve teknik ekiplerin saatleri tek plan üzerinde görülür. Hangi ortak yolun ne zaman kısmen veya tamamen ayrılacağı, komşu girişlerin nasıl korunacağı ve acil erişimin nereden süreceği belirlenir. Kaldırma anında daha geniş yasak alan kurulur; yük sabitlenince sınır yeni çalışma hücresine daraltılır. Bir ekibin gecikmesi diğerlerinin alanına izinsiz girmesine yol açmaz.",
                    "Gün sonunda tamamlanan akslar, açık yüzeyler, bariyerler ve ertesi günün malzemesi kontrol edilir. Ortak yol gereksiz kapalı bırakılmaz, fakat güvenli sabitlemesi tamamlanmayan bölüm trafiğe açılmaz. Hava veya teslimat değişikliği ertesi programı etkiliyorsa site yönetimine yazılı bildirilir. Bu koordinasyon B1’deki faal dükkân bakım turundan farklıdır; burada tek projenin geçici şantiye etkisi yönetilir.",
                ],
            },
            {
                baslik: "Proje değişikliği ve teslim hafızası",
                paragraflar: [
                    "Genişleme sırasında kapı, cephe, tesisat veya iç yerleşim değişirse platform sınıfı ve rota yeniden değerlendirilir. Yeni hedef mevcut kiralamanın otomatik parçası olmaz. Çizim, ölçü, malzeme, izin ve süre etkisi kaydedilir. Aynı sınıfla hazır hücrede kapanıyorsa sıra güncellenir; başka ekipman veya faz gerekiyorsa ayrı kapasite açılır. Bu değişiklik kontrolü, ortak site yolunun tahmin edilenden uzun kapanmasını önler.",
                    "Teslimde kullanılan park noktaları, iç geçişler, yüksekteki periyodik bakım hedefleri ve enerji izolasyon sınırları kayda alınır. Şantiye engelleri kalkınca erişim geometrisi değişebilir; bu nedenle kayıt gelecekteki bakım için referanstır, otomatik garanti değildir. B10’daki OSB servis modeli ancak yapı işletmeye geçtikten ve gerçek bakım kartı oluştuğunda ayrıca değerlendirilebilir. Proje kapanışı iki hizmeti birbirine karıştırmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bu sayfa faal KSS dükkânlarındaki bakım işleri için mi?",
                cevap:
                    "Hayır. Faal dükkânlardaki karma aydınlatma, tabela, raf ve atölye işleri B1’in konusudur; Bozüyük OSB’den kısa bakım servisi B10’da ele alınır. B12 yalnız yeni dükkân imalatı, ek atölye veya mevcut site içindeki genişleme projesine odaklanır. Çelik taşıyıcı, çatı-cephe kapama, iç tesisat ve teslim öncesi eksik turu fazlar halinde planlanır. Aynı adreste mevcut bakım ihtiyacı varsa proje kapsamından ayrılır. Şantiye makinesinin kısa bakım işi için otomatik kullanılacağı veya servis teklifinin yeni imalata uygulanacağı varsayılmaz.",
            },
            {
                soru: "Komşu atölyeler çalışırken çelik montaj yapılabilir mi?",
                cevap:
                    "Yalnız kaldırma ve düşme alanı fiziksel olarak şantiye sınırı içinde tutulabiliyor, ortak yol ve komşu giriş güvenle ayrılabiliyorsa komşu faaliyet sürebilir. Vinçle askılı yük hareketinde daha geniş yasak alan kurulur; yük altında veya salınım yönünde kimse bulunmaz. Kaynak dumanı, kıvılcım ve gürültü etkisi de değerlendirilir. Ayrım mümkün değilse ilgili işletme ve site yönetimiyle kısa duruş penceresi planlanır. Üretimi sürdürmek adına bariyer daraltılmaz. Her aks güvenli kabul edilip vinç alanı boşalmadan yol yeniden açılmaz.",
            },
            {
                soru: "Vinç yerine platformla çelik parça kaldırabilir miyiz?",
                cevap:
                    "Hayır. Yükseltilebilir platform personel ve üretici sınırındaki el aletlerine erişim sağlar; kolon, kiriş, panel veya ağır parça kaldırma vinci değildir. Ağır eleman onaylı kaldırma planı ve uygun ekipmanla taşınır. Platform ekibi, eleman güvenli konuma alınıp geçici sabitleme doğrulandıktan sonra bağlantı noktasına çıkar. Sepete dışarı taşan yük bağlanmaz, bom elemanı itmek veya hizalamak için dayanak yapılmaz. İki ekipmanın görevini ayırmak hem sepet dengesini hem askılı yük alanını kontrol edilebilir tutar.",
            },
            {
                soru: "Aynı platform dış kabuk ve iç tesisatta kullanılabilir mi?",
                cevap:
                    "Teknik koşullar uygunsa olabilir, fakat faz geçişinde yeniden değerlendirme gerekir. Dışarıda zemin ve yatay erişim öne çıkarken içeride kapı, dönüş, egzoz, yeni zemin ve şarj belirleyicidir. Dış saha sınıfı kapalı hacme sığmayabilir veya enerji türü uygun olmayabilir. Dışarıda kirlenen ünite temizlenmeden yeni zemine alınmaz. Kalan hedeflerin erişim diyagramı karşılaştırılır. Farklı kompakt akülü sınıf daha uygunsa makine değişimi planlanır; yalnız tek taşıma yapmak için uygunsuz ünitede ısrar edilmez.",
            },
            {
                soru: "Ortak yol ne kadar süre kapalı kalır?",
                cevap:
                    "Sabit süre vermek doğru değildir; kaldırma planı, eleman sayısı, bağlantı, rüzgâr, araç yerleşimi ve site düzeni belirleyicidir. Program, yolu bütün gün belirsiz kapatmak yerine aks ve kaldırma pencerelerine böler. Vinç kurulumu ve askılı yük sırasında gerekli alan ayrılır; eleman sabitlenip araçlar güvenli konuma geçtiğinde mümkün olan geçiş açılır. Cephe işinde bom zarfı ve düşme alanı korunur. Tahmini pencereler site yönetimine önceden bildirilir, değişiklik erken paylaşılır. Acil erişim rotası hiçbir zaman malzeme deposu olarak kullanılmaz.",
            },
            {
                soru: "Yeni dükkân tesliminden sonra platformu bakım için bırakabilir miyiz?",
                cevap:
                    "Yalnız ayrı kullanım ihtiyacı, uygun sınıf, süre, kullanıcı, park ve şarj koşulu yeni sözleşmeyle doğrulanırsa değerlendirilebilir. Şantiye fazı bittiğinde dış engeller ve iç yerleşim değişir; kurulumda kullanılan model kalıcı bakım için uygun olmayabilir. Önce eksik listesi teknik olarak kapanır ve proje kiralaması iade kaydıyla tamamlanır. Sonraki bakım hedefleri yeni kartta ölçülür. B10 servis modeli veya tesiste kalış seçeneği bu gerçek ihtiyete göre ayrıca planlanır. Belirsiz olasılık için makine şantiyede süresiz tutulmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bilecik Küçük Sanayi Sitesinin varlığı uygulama belgesindeki kamuya açık genel bilgidir; mevcut site içinde yeni dükkân-genişleme fazları, vinç-platform ayrımı, ortak alan koordinasyonu ve teslim kaydı sektör geneli inşaat pratiğidir. Faal karma bakım, OSB servis teması, özel proje, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },
};
