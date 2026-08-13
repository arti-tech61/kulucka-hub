// ═══════════════════════════════════════════════════════════════════════════
// manliftkirala.online — ELLE YAZILMIŞ İÇERİK
//
// Profil: Bursa Nilüfer-Osmangazi sanayi bölgesinde manlift kiralama.
// Açı: OTOMOTİV YAN SANAYİ TEDARİK RİTMİ — ana sanayi üreticisinin üretim
// planına bağlı tedarikçi ritmi, hat besleme baskısı, müşteri kalite
// denetimleri (audit), vardiya yoğunluğu ve bakım penceresi kıtlığı,
// yan sanayi atölyesinin ölçek sıkıntısı.
//
// ⚠️ Bursa'da iki kardeş domain var ve aynı bölge slug'ları (nilufer,
// osmangazi, yildirim, kestel, dosab) onlarda da yazılı:
// bursamanlift.net (cephe-çatı erişimi — kaplama, oluk, ışıklık, panel derz)
// bursamanliftkiralama.net (uzun dönem sözleşme — paylaşımlı model, bakım
// rotası, tutanak düzeni).
// Bu dosyanın merceği TEDARİK RİTMİ'dir: kabuk/çatı bakımı ve uzun dönem
// sözleşme mekaniği burada ANA KONU DEĞİLDİR. Cümle/tablo/SSS tekrarı YASAK,
// 8 kelimelik ortaklık dahi aranmamalı.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-13. Yalnızca doğrulanabilir bilgi; tesis/marka adı ve
// rakam uydurulmadı — "ana sanayi üreticisi" genel ifadesiyle anılmıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALA_ONLINE: Record<string, BespokeIcerik> = {
    "bolge:nilufer": {
        h1: "Nilüfer'de Otomotiv Yan Sanayi Tedarikçilerine Manlift Kiralama",
        giris:
            "Nilüfer'deki bir yan sanayi atölyesinin takvimi kendi elinde değildir; takvimi belirleyen, birkaç kilometre ötedeki ana sanayi hattının üretim planıdır. Ana firma haftalık çekme planını değiştirdiğinde tedarikçinin vardiya sayısı, hat hızı ve dolayısıyla bakım için ayırabileceği her dakika o plana göre yeniden şekillenir. Bu bağımlılık, yükseğe erişim gerektiren işleri de sıradan bir hizmet kalemi olmaktan çıkarır — burada mesele yalnızca 'makine ne zaman gelir' değil, 'hat besleme durmadan makine ne zaman gelebilir' sorusudur. Nilüfer'in yoğun tedarik dokusunda çalışırken bizim işimiz, sizin üretim takviminizi anlamak ve platform işini o takvimin boşluklarına, kesintiye neden olmayacak biçimde yerleştirmektir. Bu sayfa, tedarik ritmine bağlı bir atölyenin bakım-kurulum işlerini nasıl planladığını anlatıyor.",
        maddeler: [
            {
                baslik: "Hat besleme baskısı: neden 'yarın' cevabı yetmiyor",
                metin:
                    "Ana sanayiye parça besleyen bir atölyede duruş, kendi üretiminizi değil müşterinizin hattını etkiler ve bu, bakım kararlarını sıradan işletmeden farklı bir aciliyet düzeyine taşır. Aydınlatma zayıflayan bir kalite kontrol istasyonu, tıkanan bir emiş hattı ya da bakımı geciken bir vinç rayı, üretimde küçük bir sorun gibi görünse de hat hızını düşürebilir ve düşen hız, ana sanayiye giden sevkiyat programını geciktirebilir. Bu yüzden Nilüfer'deki tedarikçi taleplerinde ilk sorduğumuz şey hangi hattı beslediğiniz değil, işin hat durmadan mı yoksa hat penceresinde mi yapılacağıdır — cevaba göre plan tümüyle değişir.",
            },
            {
                baslik: "Müşteri kalite denetimi öncesi hazırlık baskısı",
                metin:
                    "Yan sanayi tedarikçisinin takviminde bir de ana sanayinin veya onun kalite biriminin yaptığı periyodik saha denetimleri vardır ve bu denetimler, bakım işlerini toplu hâle getiren gerçek tetikleyicidir. Denetim tarihi bilindiğinde atölyenin öncelik listesi birden değişir: aydınlatma standardı, temizlik seviyesi, işaretleme ve erişim güvenliği gibi kalemler denetim tarihine göre geriye doğru planlanır. Bu işlerin ortak özelliği zamana duyarlı olmalarıdır — denetimden bir hafta önce yapılan iş işe yarar, denetimden sonra yapılan iş yalnızca bir sonraki denetime hazırlıktır. Denetim takviminizi paylaştığınızda, işi doğru pencereye biz yerleştiririz.",
            },
            {
                baslik: "Vardiya yoğunluğunda bakım penceresi aramak",
                metin:
                    "Ana sanayiye bağlı tedarikçilerin çoğu iki veya üç vardiya çalışır ve bu, 'boş saat' kavramını neredeyse ortadan kaldırır. Bakım penceresi burada gün içinde değil, vardiya geçişlerinde, planlı duruş bloklarında veya hafta sonu kısmi çalışma saatlerinde aranır. Pencere dar olduğu için iş, geldiğinde hazır ve hızlı yapılmalıdır — malzemesi eksik ya da kapsamı belirsiz bir iş, kısa pencereyi doldurup üretime taşabilir. Vardiya planınızı paylaşmanız, bize doğru pencereyi göstermekle kalmaz, aynı zamanda o pencerede işin gerçekten bitecek kapsamda tutulmasını da sağlar.",
            },
            {
                baslik: "Küçük atölyenin ölçek sıkıntısı",
                metin:
                    "Nilüfer'in yan sanayi dokusunda çok sayıda küçük-orta atölye, büyük tedarikçilerin altında ikinci-üçüncü kademe iş yapar ve bu atölyelerin platform ihtiyacı genellikle küçüktür — yılda birkaç kez, kısa süreli. Ölçek küçük olduğu için tekil kiralamanın sabit maliyetleri (nakliye, kurulum) toplam faturada büyük paya çıkar. Aynı sanayi bölgesindeki komşu tedarikçilerin işlerini aynı güne toplamak, bu ölçek sıkıntısının doğrudan çözümüdür ve tedarik zincirinin alt kademesindeki atölyeler için Nilüfer'de en sık önerdiğimiz düzendir.",
            },
            {
                baslik: "Hat durmadan çalışmanın pratik yolu",
                metin:
                    "Hattı durdurmadan yükseğe erişim gerektiren işlerin çoğu, aslında tam duruş değil bölge boşaltma ister: çalışılacak istasyonun altındaki birkaç metrekare geçici olarak boşaltılır, iş orada biterken hattın geri kalanı çalışmaya devam eder. Bu yöntem yalnızca hattın doğrudan üzerindeki veya kesiştiği noktalarda işlemez — o kalemler gerçek duruşa, genellikle vardiya değişimine veya planlı bakım bloğuna yazılır. Hat yerleşiminizi ve hangi istasyonların kritik yol üzerinde olduğunu bilmemiz, işin hangi yöntemle yapılacağını keşif aşamasında netleştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tedarik ritmine göre pencere seçimi",
                paragraflar: [
                    "Nilüfer'deki yan sanayi tedarikçilerinde platform işinin hangi pencereye yazılacağı, işin hat ile ilişkisine göre değişir. Aşağıdaki tablo bu ayrımı özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Hatla ilişkisi", "Uygun pencere", "Tipik süre"],
                    satirlar: [
                        ["Kalite istasyonu aydınlatması", "Hat dışı, yakın", "Vardiya arası", "Kısa"],
                        ["Hat üstü tavan/tesisat", "Doğrudan kesişen", "Planlı duruş bloğu", "Orta"],
                        ["Depo-stok alanı raf üstü", "Bağımsız", "Gün içi, boş saat", "Kısa"],
                        ["Denetim öncesi genel hazırlık", "Tesis geneli", "Denetimden 1-2 hafta önce", "Orta-uzun"],
                        ["Acil arıza müdahalesi", "Değişken", "Program dışı, en yakın boşluk", "Değişken"],
                    ],
                },
            },
            {
                baslik: "Vardiya planını paylaşmanın getirisi",
                paragraflar: [
                    "İki-üç vardiyalı bir tedarikçide bakım penceresi doğal olarak dar olduğu için, vardiya planının önceden paylaşılması işin hızını doğrudan belirler. Plan elimizde olduğunda, işin hangi vardiya geçişine, hangi kısmi duruş bloğuna yazılacağı keşif aşamasında netleşir ve makine, pencerenin açıldığı dakikada sahada hazır olur — pencere kapanmadan önce değil, tam açıldığı anda. Plan paylaşılmadığında ise işin başlaması, o günün akışına göre belirlenir ve bu, hem bizim hem sizin için beklenmedik gecikmelere yol açabilir.",
                    "Bu paylaşımın ikinci faydası kapsam netliğidir: dar bir pencerede yapılacak işin listesi önceden kesinleştiğinde, pencere içinde iş bitmeme riski büyük ölçüde ortadan kalkar. Kapsamı gün içinde büyüyen iş, dar pencerede en sık karşılaşılan sorundur ve bunu önlemenin tek yolu, pencereye girmeden önce listeyi kapatmaktır.",
                ],
            },
            {
                baslik: "Kademeli tedarikçi ağında komşu birleştirmesi",
                paragraflar: [
                    "Nilüfer'in yan sanayi haritasında birinci kademe tedarikçilerin etrafında ikinci ve üçüncü kademe atölyeler kümelenir ve bu kümelenme, küçük ölçekli işletmeler için doğal bir birleştirme fırsatı sunar. Aynı sanayi bölgesindeki, benzer vardiya düzenine sahip birkaç atölyenin kısa süreli işlerini aynı güne dizmek, nakliye ve kurulum payını böler ve her atölyenin ödediği tutarı belirgin biçimde düşürür.",
                    "Bu düzenin işlemesi için tek şart, atölyelerin kendi pencerelerini önceden bildirmesidir — vardiya saatleri farklı olsa bile, makine bir atölyeden diğerine geçerken kısa mesafe avantajı korunur. Kümelenmiş taleplerinizi bize iletirseniz, ortak günü ve sırayı biz kurarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hattımız durmadan bakım işini nasıl yaptırabiliriz?",
                cevap:
                    "Çoğu iş için tam duruş gerekmez; gereken şey, çalışılacak istasyonun altındaki alanın geçici olarak boşaltılmasıdır. Hat, o bölge dışında çalışmaya devam eder ve iş bitince alan geri açılır. Bu yöntem, hattın doğrudan üzerinde veya kritik yolda kesişmeyen işlerde neredeyse her zaman işler. Hattın tam üzerindeki ya da hızını doğrudan etkileyen kalemler ise gerçek duruşa, genellikle vardiya değişimine yazılır. Hat yerleşiminizi ve kritik noktaları paylaşırsanız, hangi kalemin hangi yöntemle yapılacağını keşifte netleştiririz.",
            },
            {
                soru: "Müşterimizin kalite denetimi yaklaşıyor; ne kadar önceden hazırlanmalıyız?",
                cevap:
                    "Bir-iki hafta önce başlamak, işlerin acele değil planlı yapılmasını sağlar. Denetim öncesi hazırlık genellikle aydınlatma standardı, temizlik-erişim düzeni ve işaretleme gibi görünürlüğü yüksek kalemleri kapsar; bunlar denetim gününe çok yakın yapılırsa hem aceleye gelir hem de o gün başka bir acil işle çakışma riski taşır. Denetim tarihinizi ve öncelikli kalemlerinizi paylaşın; işi geriye doğru planlayıp denetimden önce tamamlanmasını sağlayalım.",
            },
            {
                soru: "İki-üç vardiya çalışıyoruz; boş saatimiz neredeyse yok. Ne öneriyorsunuz?",
                cevap:
                    "Boş saat aramak yerine vardiya geçişini ve varsa planlı kısmi duruş bloklarını kullanmayı öneriyoruz — bu pencereler kısa ama düzenlidir ve önceden bilindiğinde işi tam o dakikaya kurabiliriz. Pencerenin verimli kullanılması için işin kapsamının önceden kesinleşmiş olması şarttır; dar pencerede kapsam büyürse iş taşar ve üretime yansır. Vardiya planınızı paylaşın, hangi geçişin işe uygun olduğunu ve o pencerede neyin bitirilebileceğini birlikte belirleyelim.",
            },
            {
                soru: "Küçük bir atölyeyiz, yılda birkaç kez ihtiyacımız oluyor; her seferinde tam nakliye bedeli mi ödeyeceğiz?",
                cevap:
                    "Zorunlu değil. Nilüfer'in yoğun tedarikçi dokusunda aynı bölgedeki komşu atölyelerin kısa süreli işlerini aynı güne toplamak yaygın ve etkili bir yöntemdir — makine bir atölyeden diğerine kısa mesafede geçer, nakliye ve kurulum payı katılımcılar arasında bölünür. Tek koşul, katılan atölyelerin kendi vardiya pencerelerini önceden bildirmesidir. Talebinizi 'tarih esnek' notuyla iletirseniz, bölgedeki ilk uygun ortak güne eklenir ve tekil nakliye bedeli ödemezsiniz.",
            },
            {
                soru: "Ana sanayiye giden sevkiyatımızı geciktirebilecek bir arıza çıktı; ne kadar hızlı gelirsiniz?",
                cevap:
                    "Aciliyeti belirttiğinizde en yakın uygun makineyi yönlendiririz ve Nilüfer'in yoğun sanayi dokusu bize sevkiyat açısından avantaj sağlar; ancak dürüst cevap, tam saatin makinelerin o anki program yoğunluğuna bağlı olduğudur. Gerçekçi olamayacağımız durumda saatiyle söyleriz, tutulamayacak bir 'hemen geliriz' sözü vermeyiz. Aciliyet bilgisiyle birlikte işin ne olduğunu (hat üzerinde mi, hat dışında mı) ilk aramada iletmeniz, doğru makinenin ilk seferde gelmesini sağlar.",
            },
            {
                soru: "Vardiya planımızı ve hat yerleşimimizi sizinle paylaşmak zorunda mıyız?",
                cevap:
                    "Zorunlu değil ama paylaşırsanız iş belirgin hızlanır. Vardiya planı, işin hangi pencereye yazılacağını gösterir; hat yerleşimi ise hangi kalemlerin bölge boşaltmayla, hangilerinin gerçek duruşla yapılacağını netleştirir. Bu bilgiler olmadan da çalışırız — ama o durumda plan, sahada ilk gördüğümüz koşullara göre kurulur ve bu, dar pencereli tedarikçi ortamında beklenmedik gecikme riskini artırır. Paylaştığınız bilgi yalnızca bu iş için kullanılır ve talep dışında saklanmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Nilüfer'in Bursa otomotiv ana sanayi ve yan sanayi tedarik ekosistemine yakınlığı kamuya açık coğrafi bilgidir; pencere seçimi, vardiya planı paylaşımı ve komşu birleştirme düzeni firma pratiğidir. Tesis ve marka adı verilmemiştir.",
    },

    "bolge:osmangazi": {
        h1: "Osmangazi'de Ana Sanayi Tedarikçilerine Manlift Kiralama",
        giris:
            "Osmangazi'deki tedarikçi atölyeleri, ilçenin karma yapısı içinde otomotiv yan sanayinin şehre en yakın halkasını oluşturur ve bu yakınlık bir avantaj olduğu kadar bir baskıdır: merkeze yakın parsellerde büyüme alanı sınırlıdır, üretim genellikle mevcut hacmin içinde sıkışarak artar ve bakım için ayrılan alan da zamanla daralır. Ana sanayiye parça besleyen bir işletmenin burada karşılaştığı asıl mesele, işin zorluğu değil işin sığacağı zaman ve alanın darlığıdır. Sevkiyat programı sıkıştığında bakım ilk ertelenen kalemdir, ama aynı program bir aksama yaşadığında bakım eksikliği ilk suçlanan sebep olur. Bu sayfa, Osmangazi'deki tedarikçi ölçeğindeki işletmelere, üretim programını bozmadan bakım ve kurulum işlerinin nasıl sıkıştırılacağını anlatıyor — dar alanda erişim değil, dar zamanda planlama üzerine.",
        maddeler: [
            {
                baslik: "Sevkiyat programı ile bakım takviminin çatışması",
                metin:
                    "Ana sanayiye parça besleyen bir tedarikçinin sevkiyat programı, kendi belirlediği bir takvim değildir ve genellikle önceden yalnızca birkaç haftalık görünürlükle gelir. Bu, bakım işlerinin uzun vadeli planlanmasını zorlaştırır — 'üç ay sonra bakım yapalım' demek kolaydır ama üç ay sonrasının sevkiyat yoğunluğu bugünden bilinmez. Osmangazi'deki tedarikçilerle çalışırken bu belirsizliği, kesin tarih yerine 'esnek pencere' mantığıyla yönetiyoruz: iş, önceden belirlenmiş dar bir tarih aralığında, sevkiyat programınız netleştiğinde kesinleşen bir günde yapılır.",
            },
            {
                baslik: "Dar alanda kurulum: büyümenin sınırına sıkışan üretim",
                metin:
                    "Merkeze yakın parsellerde genişleme alanı kısıtlı olduğu için üretim, mevcut hacmin içine yeni hatlar, yeni istasyonlar veya yeni depolama alanları eklenerek büyür. Bu, tavan yüksekliğinin daha yoğun kullanıldığı, koridorların daraldığı ve makine kurulum alanının önceki yıllara göre azaldığı anlamına gelir. Platform kurulumunda bu darlık, makine seçiminden önce konumlanma sorununa dönüşür — makinenin park edeceği boşluk, çalışacağı hedeften daha kritik bir ölçü hâline gelir. Keşifte istediğimiz ilk şey bu yüzden hedefin fotoğrafı değil, makinenin park edeceği alanın fotoğrafıdır.",
            },
            {
                baslik: "Kısa vadeli sipariş dalgalanmasının bakıma etkisi",
                metin:
                    "Ana sanayinin haftalık çekme siparişleri dalgalanabilir ve bu dalgalanma, tedarikçinin ekipman kullanım yoğunluğunu doğrudan etkiler — yoğun haftada aynı vinç, aynı havalandırma sistemi, aynı aydınlatma hattı normalden fazla çalışır ve aşınma hızlanır. Bakım rutinini sabit takvime değil, sipariş yoğunluğuna duyarlı bir esneklikle kurmak, Osmangazi'deki tedarikçiler için daha gerçekçi bir yaklaşımdır: durgun haftalar bakım için öncelikli aday olur, yoğun haftalar mümkün olduğunca dokunulmadan geçirilir.",
            },
            {
                baslik: "Kalite denetiminin fiziksel izleri",
                metin:
                    "Ana sanayi veya onun kalite ekibi tarafından yapılan saha denetimleri, genellikle sözlü değerlendirmeden fazlasını bırakır — bazı bulgular yazılı düzeltici faaliyet talebine dönüşür ve bunların bir kısmı doğrudan yükseğe erişim gerektirir: yetersiz aydınlatma seviyesi, işaretleme eksikliği, erişim güvenliği bulguları. Bu bulgular geldiğinde takvim artık esnek değildir — düzeltici faaliyetin bir kapanış tarihi vardır ve o tarih genellikle kısadır. Böyle bir bulgu aldığınızda erken haber vermeniz, işin sıkışık takvime rağmen zamanında kapanmasını sağlar.",
            },
            {
                baslik: "Küçük tedarikçinin pazarlık gücü: birlikte planlama",
                metin:
                    "Tek başına küçük bir tedarikçinin ekipman kiralama sürecinde pazarlık gücü sınırlıdır — iş küçük, süre kısa ve talep düzensizdir. Ama aynı ana sanayiye bağlı komşu tedarikçilerin taleplerini birlikte planlamak bu dengeyi değiştirir: ortak bir güne toplanan birkaç küçük iş, hem nakliye maliyetini böler hem de her bir işletmenin tek başına elde edemeyeceği bir öncelik ve esneklik kazanmasını sağlar. Osmangazi'deki tedarikçi kümelerinde bu tür birlikte planlamayı kurmak, sanıldığından daha kolaydır — genellikle eksik olan tek şey iletişimdir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tedarikçi ölçeğinde bakım-üretim dengesi",
                paragraflar: [
                    "Osmangazi'deki küçük-orta ölçekli tedarikçilerin karşılaştığı temel gerilim aşağıda özetlenmiştir: hangi durumda hangi yaklaşım daha gerçekçidir.",
                ],
                tablo: {
                    basliklar: ["Durum", "Risk", "Önerilen yaklaşım", "Zamanlama"],
                    satirlar: [
                        ["Sevkiyat programı belirsiz", "Bakım hep ertelenir", "Esnek pencere, kısa bildirimle kesinleşme", "1-2 hafta önceden aday"],
                        ["Sipariş yoğun hafta", "Ekipman aşınması hızlanır", "Bakımı durgun haftaya çek", "Yoğunluk verisiyle takip"],
                        ["Düzeltici faaliyet bulgusu", "Kapanış tarihi sabit", "Öncelikli, hızlı planlama", "Bulgudan hemen sonra"],
                        ["Alan darlığı", "Kurulum riski", "Park alanı fotoğrafla önceden teyit", "Keşif aşamasında"],
                        ["Tek başına küçük iş", "Yüksek birim maliyet", "Komşu tedarikçiyle ortak gün", "Talep toplama"],
                    ],
                },
            },
            {
                baslik: "Esnek pencere modeli: kesin tarih yerine dar aralık",
                paragraflar: [
                    "Sevkiyat programı önceden tam netleşmeyen tedarikçiler için önerdiğimiz pratik çözüm, tek bir kesin tarih yerine dar bir tarih aralığı belirlemektir — örneğin bir haftalık pencere. Bu pencere içinde makine bölgeye ayrılmış sayılır ve sevkiyat programınız netleştiğinde, pencerenin içindeki en uygun günü birkaç gün öncesinden bildirerek kesinleştirirsiniz. Bu model, hem sizin programınızın belirsizliğine hem de bizim planlama ihtiyacımıza aynı anda cevap verir.",
                    "Modelin işlemesi için tek şart, pencerenin makul genişlikte tutulmasıdır — çok geniş pencere planlamayı zorlaştırır, çok dar pencere ise sizin esnekliğinizi ortadan kaldırır. Osmangazi'deki tedarikçilerle deneyimimiz, bir haftalık pencerenin çoğu durumda dengeyi doğru kurduğunu gösteriyor.",
                ],
            },
            {
                baslik: "Kurulum alanı darlığında keşfin rolü",
                paragraflar: [
                    "Merkeze yakın ve büyüme alanı sınırlı parsellerde, keşif aşamasının önemi standart bir sanayi sahasına göre daha büyüktür. Fotoğraf ve ölçüyle yapılan bir ön değerlendirme, makinenin gerçekten girip çalışabileceğini sahaya gelmeden doğrular — aksi hâlde makine gelip park edecek yer bulamayabilir ve bu, hem zaman hem güven kaybıdır.",
                    "İstediğimiz üç görüntü nettir: makinenin gireceği kapı veya geçit, park edeceği alan ve hedefe olan mesafe. Bu üçü, dar alanlı Osmangazi tesislerinde neredeyse her zaman doğru makineyi ilk seferde belirlememizi sağlıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sevkiyat programımız üç hafta öncesinden bile netleşmiyor; bakım planı nasıl yapılır?",
                cevap:
                    "Kesin tarih yerine dar bir tarih aralığı belirleyerek — genellikle bir haftalık bir pencere yeterli oluyor. Bu pencere içinde makineyi size ayırmış sayarız; programınız netleştiğinde pencerenin içindeki en uygun günü birkaç gün öncesinden bildirerek kesinleştirirsiniz. Bu yöntem, sizin programınızın belirsizliğiyle bizim planlama ihtiyacımızı aynı anda karşılıyor. Pencere çok dar tutulursa esneklik kalmaz, çok geniş tutulursa planlama zorlaşır; deneyimimiz bir haftanın çoğu durumda doğru denge olduğunu gösteriyor.",
            },
            {
                soru: "Fabrikamız merkeze yakın ve alanımız çok dar; makine gerçekten girebilir mi?",
                cevap:
                    "Çoğu durumda evet, ama bunu keşifte net biçimde doğrularız. Dar alanlı tesislerde bizim için kritik olan hedefin yüksekliği değil, makinenin gireceği kapı-geçit ölçüsü ve park edeceği alandır. Üç fotoğraf (giriş, park alanı, hedefe mesafe) çoğu zaman doğru makineyi belirlemeye yeter; sığmayan senaryolarda dar şaseli kompakt sınıfları veya alternatif erişim noktalarını değerlendiririz. Sahaya makine gönderip 'girmedi' demek yerine, bu üç görüntüyle önceden netleştirmeyi tercih ediyoruz.",
            },
            {
                soru: "Müşterimizden düzeltici faaliyet talebi geldi, kapanış tarihi kısa; ne kadar hızlı planlarsınız?",
                cevap:
                    "Bu tür bulguları öncelikli sayarız çünkü kapanış tarihi genellikle esnek değildir. Bulguyu ve kapanış tarihini paylaştığınız anda, en yakın uygun pencereyi belirleriz ve gerekirse programımızda öncelik veririz. Kritik olan erken haberdir — bulgu size ulaştığı gün bize iletilirse, kısa kapanış süresine rağmen planlı ve düzgün bir iş kurabiliriz; son güne kalan bildirim ise seçenekleri daraltır. Bulgunun içeriğini (aydınlatma, işaretleme, erişim güvenliği vb.) bilmemiz, doğru ekipmanla gelmemizi de sağlar.",
            },
            {
                soru: "Yoğun sipariş haftasında ekipmanımız daha çok aşınıyor; bunu bakıma nasıl yansıtmalıyız?",
                cevap:
                    "Bakımı sabit bir takvime değil, sipariş yoğunluğunuza duyarlı bir esnekliğe bağlayarak. Yoğun geçen haftalarda vinç, havalandırma ve aydınlatma gibi sürekli çalışan sistemler normalden fazla yorulur; bu haftaları bakımdan uzak tutup, durgun geçen haftaları öncelikli bakım adayı olarak işaretlemek daha gerçekçi bir yaklaşımdır. Sipariş yoğunluğunuzu yaklaşık olarak paylaşırsanız, bakım önerilerimizi bu döngüye göre zamanlarız.",
            },
            {
                soru: "Küçük bir tedarikçiyiz; komşu işletmelerle birlikte planlama gerçekten fark yaratır mı?",
                cevap:
                    "Belirgin biçimde yaratır. Tek başına küçük ve düzensiz bir talebin nakliye-kurulum maliyeti toplam faturada büyük paya çıkar; aynı bölgedeki birkaç komşu tedarikçinin taleplerini aynı güne toplamak bu payı böler ve her işletme için birim maliyeti düşürür. Ayrıca ortak planlama, tek başına elde edilemeyen bir öncelik ve esneklik de kazandırır. Kurulması için gereken tek şey iletişimdir — bölgenizdeki komşu işletmelerle konuşup taleplerinizi birlikte bize iletmeniz yeterli, sıralamayı ve günü biz kurarız.",
            },
            {
                soru: "Ana sanayiye giden sevkiyatımızı etkileyecek bir arıza çıkarsa önceliğimiz olur mu?",
                cevap:
                    "Bu tür acil işlerde aciliyeti belirttiğinizde en yakın uygun makineyi öncelikli olarak yönlendiririz; ancak dürüst cevap, tam sürenin o andaki program yoğunluğuna bağlı olduğudur ve tutulamayacak bir söz vermeyiz. Bunu en aza indirmenin yolu, kritik kalemleri arıza beklemeden esnek pencere modeliyle plana almaktır — planlı işte gün sizin seçtiğiniz aralıktadır, arızada ise takvim tarafından dayatılır. Sevkiyat programınıza etki eden noktaları önceden bize işaretlerseniz, o kalemleri arıza riskine karşı öncelikli izlemeye alırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Osmangazi'nin merkeze yakın sanayi dokusu ve otomotiv yan sanayi bağlantısı kamuya açık coğrafi bilgidir; esnek pencere modeli, düzeltici faaliyet önceliklendirmesi ve ortak planlama düzeni firma pratiğidir. Tesis ve marka adı verilmemiştir.",
    },

    "bolge:bursa-osb": {
        h1: "Bursa OSB'de Ana Sanayi Tedarik Zincirine Manlift Kiralama",
        giris:
            "Bursa OSB, Türkiye'nin otomotiv üretim haritasında köklü bir konuma sahiptir ve bu köklülük, bölgedeki tedarikçi ilişkilerini de olgunlaştırmıştır: burada çalışan pek çok işletme, ana sanayiyle onlarca yıllık bir tedarik geçmişine sahiptir ve bu geçmiş, üretim disiplinini sıradan bir atölyeden farklı bir seviyeye taşımıştır. Ama olgun tedarik ilişkisi, bakım baskısını azaltmaz — tam tersine, güvenilirlik beklentisini yükseltir. Uzun süredir aynı ana sanayiye parça besleyen bir tedarikçi için beklenmedik bir duruş, yeni kurulmuş bir tedarikçininkinden daha ağır bir itibar maliyeti taşır çünkü karşı taraf sizden istikrar bekler. Bu sayfa, Bursa OSB'nin köklü tedarikçi dokusunda yükseğe erişim gerektiren işlerin, üretim planına bağlı ritimle nasıl uyumlu hâle getirileceğini anlatıyor — hat besleme önceliği, planlı duruş pencereleri ve çok istasyonlu üretim hatlarında bölge bazlı çalışma düzeni.",
        maddeler: [
            {
                baslik: "Uzun soluklu tedarikçide güvenilirlik beklentisi",
                metin:
                    "Bursa OSB'deki köklü tedarikçilerin çoğu, ana sanayiyle yıllara yayılan bir ilişki kurmuştur ve bu ilişkinin sürmesi büyük ölçüde istikrara bağlıdır: zamanında teslimat, sabit kalite, öngörülebilir kapasite. Bu istikrarı bozan her aksama — planlanmamış bir duruş, aniden ortaya çıkan bir arıza — yalnızca o haftanın sevkiyatını değil, uzun vadeli güven ilişkisini de riske atar. Bakım işlerini bu gözle ele almak, işi bir maliyet kalemi olmaktan çıkarıp bir güvenilirlik yatırımına dönüştürür; bizim Bursa OSB'deki yaklaşımımız da buna göre kuruludur — plan, sadece o günün işini değil, tedarikçinin genel güvenilirlik kaydını da düşünerek yapılır.",
            },
            {
                baslik: "Planlı duruş bloklarını yakalamak",
                metin:
                    "Köklü ve büyük ölçekli tedarikçilerin çoğunda, tamamen rastgele olmayan, önceden tanımlı planlı duruş blokları vardır — genel bakım günleri, yıllık toplu izin dönemi, ana sanayinin kendi planlı duruşuna bağlı ara dönemler. Bu bloklar, yükseğe erişim gerektiren büyük kapsamlı işler için en verimli penceredir çünkü hat zaten durmuş durumdadır ve iş, üretimden çalınan bir zaman değil, zaten var olan bir boşluğa yerleşen bir zamandır. Bu blokları erken bilmek, işin hem kapsamını hem zamanlamasını iyileştirir — blok tarihini ne kadar erken paylaşırsanız, o kadar geniş bir iş listesini o pencereye sığdırabiliriz.",
            },
            {
                baslik: "Çok istasyonlu hatlarda bölge bazlı çalışma",
                metin:
                    "Bursa OSB'deki büyük tedarikçi tesislerinde tek bir hat değil, birbirine bağlı çok sayıda istasyon bulunur ve bu istasyonların hepsi aynı anda kritik değildir. İş listesi istasyon bazında ikiye ayrılır: kritik yol üzerindeki istasyonlar (bunlarda çalışma, hattın genel hızını doğrudan etkiler ve gerçek duruş ister) ve kritik yol dışındaki istasyonlar (bunlarda bölge boşaltmayla, hat çalışırken iş yapılabilir). Bu ayrımı yapmak için tesisin hat akış şemasına ihtiyacımız var — elinizde varsa paylaşmanız, planlamayı büyük ölçüde hızlandırır.",
            },
            {
                baslik: "Tedarik zincirinde ikinci-üçüncü kademe baskısı",
                metin:
                    "Bursa OSB'de yalnızca ana sanayiye doğrudan satan birinci kademe tedarikçiler değil, onlara parça besleyen ikinci ve üçüncü kademe atölyeler de yoğun biçimde bulunur ve bu kademeler arasındaki baskı zinciri aşağı doğru büyür — birinci kademenin talebi ne kadar sıkışıksa, ikinci kademenin teslim baskısı o kadar artar. Alt kademedeki küçük atölyeler için bu, bakım penceresinin daha da daralması demektir. Bu atölyelerle çalışırken önerimiz, bakımı büyük kapsamlı tek operasyona değil, kısa ve sık aralıklı küçük işlere bölmektir — her biri kısa pencereye sığar ve birikmiş büyük iş riskini taşımaz.",
            },
            {
                baslik: "Sezonluk talep dalgalanmasının bakım takvimine yansıması",
                metin:
                    "Otomotiv tedarik zincirinde talep, yıl içinde düzenli değildir — model değişim dönemleri, yeni araç lansmanları veya pazar dalgalanmaları, ana sanayinin sipariş hacmini değiştirir ve bu değişim tedarikçiye doğrudan yansır. Yoğun dönemlerde bakım penceresi daralır, durgun dönemlerde ise genişler. Bursa OSB'deki tedarikçilerle bakım takvimini kurarken bu döngüyü göz önünde bulundurur, büyük kapsamlı işleri mümkün olduğunca durgun döneme, küçük ve zorunlu işleri ise yıl boyu dağıtılmış biçimde planlarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tedarikçi kademesine göre planlama farkı",
                paragraflar: [
                    "Bursa OSB'deki tedarik zincirinin farklı kademelerinde bakım planlaması farklı biçimde kurulur. Aşağıdaki tablo bu farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Kademe", "Tipik baskı", "Bakım stratejisi", "Pencere tipi"],
                    satirlar: [
                        ["Birinci kademe (ana sanayiye doğrudan)", "Yüksek görünürlük, planlı duruş bilgisi var", "Büyük iş, planlı bloğa yazılır", "Yıllık/dönemsel duruş"],
                        ["İkinci kademe", "Birinci kademenin baskısını taşır", "Orta ölçekli, sık aralıklı iş", "Vardiya arası, kısa duruş"],
                        ["Üçüncü kademe / küçük atölye", "Dar ve düzensiz pencere", "Küçük, bölünmüş işler", "Gün içi boş saat"],
                        ["Model değişim dönemi", "Talep düşüşü, geçici boşluk", "Büyük kapsamlı iş için fırsat", "Haftalar süren boşluk"],
                        ["Yeni lansman öncesi yoğunluk", "Kapasite zorlanır", "Yalnızca zorunlu iş", "Neredeyse hiç"],
                    ],
                },
            },
            {
                baslik: "Planlı duruş bloğunu verimli kullanmak",
                paragraflar: [
                    "Yıllık toplu izin dönemi ya da genel bakım günleri gibi planlı duruş blokları, Bursa OSB'deki büyük tedarikçiler için yılın en değerli bakım penceresidir ve bu pencereyi verimli kullanmanın anahtarı erken planlamadır. Blok tarihi kesinleştiği anda paylaşılan bir iş listesi, hem malzeme temini hem ekipman ayrılması için yeterli zaman tanır; bloğa bir-iki gün kala gelen talep ise ya kapsamı daraltmak ya da başka bir tesisin önceden ayrılmış ekipmanıyla çakışmak zorunda kalır.",
                    "Bu bloklarda genellikle birden fazla kalem aynı anda yapılır — aydınlatma, havalandırma, vinç rayı, çatı erişimi gibi farklı kalemler tek pencerede toplanır. Listeyi önceden bölge ve öncelik sırasına göre dizmek, bloğun kısıtlı süresinde mümkün olan en fazla kalemi kapatmanın yoludur.",
                ],
            },
            {
                baslik: "Hat akış şemasının planlamadaki rolü",
                paragraflar: [
                    "Çok istasyonlu bir üretim tesisinde hangi bölgenin kritik yol üzerinde olduğunu bilmek, iş planının doğruluğunu doğrudan belirler. Kritik yol dışındaki bir istasyonda yapılan iş, hat çalışırken bitirilebilirken, kritik yoldaki aynı büyüklükte bir iş gerçek duruş gerektirebilir. Elinizde hat akış şeması veya basit bir yerleşim krokisi varsa, bu ayrımı keşif öncesinde netleştirebiliriz ve planlı duruş bloğuna yalnızca gerçekten gerekli kalemleri yazarız — kritik yol dışındaki işler ayrı, daha esnek bir pencereye taşınır.",
                    "Şema paylaşılmadığında bu ayrımı sahada, keşif sırasında yaparız; bu da mümkündür ama önceden bilgiyle kurulan plana göre daha fazla zaman alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ana sanayiyle yıllardır çalışıyoruz; bir aksama itibarımızı nasıl etkiler?",
                cevap:
                    "Uzun soluklu tedarik ilişkilerinde beklenti, sabit kaliteyle birlikte öngörülebilir kapasitedir ve beklenmedik bir duruş bu öngörülebilirliği zedeler — o haftanın sevkiyatından daha büyük bir güven maliyeti taşır. Bizim yaklaşımımız bunu göz önünde bulundurur: bakım işlerini yalnızca o günün kapsamıyla değil, sizin genel güvenilirlik kaydınızı koruyacak biçimde planlarız. Kritik kalemleri arıza beklemeden planlı duruş bloklarına yazmak, bu riski en aza indiren yoldur; arıza her zaman öngörülemeyen zamanda gelir, planlı iş ise sizin seçtiğiniz zamanda.",
            },
            {
                soru: "Yıllık toplu izin dönemimiz var; bu dönemde neler yapılabilir?",
                cevap:
                    "Bu dönem, büyük kapsamlı işler için yılın en verimli penceresidir çünkü hat zaten durmuş olur ve üretimden zaman çalınmaz. Aydınlatma yenileme, vinç rayı kontrolü, havalandırma temizliği, çatı erişimi gibi farklı kalemler tek pencerede toplanabilir. Verimin anahtarı erken planlamadır — blok tarihi kesinleştiği anda iş listesini paylaşırsanız, malzeme temini ve ekipman ayrılması için yeterli süre kalır. Son anda gelen talep, kapsamı daraltmak zorunda kalabilir çünkü aynı dönemde bölgedeki başka tesisler de benzer planlı duruşlarını kullanır.",
            },
            {
                soru: "Tesisimizde birden çok istasyon var; hangisi duruş gerektirir bilmiyoruz?",
                cevap:
                    "Bunu belirlemenin en hızlı yolu hat akış şemanız veya basit bir yerleşim krokinizdir — elinizde varsa paylaşın, kritik yol üzerindeki istasyonları ve kritik yol dışındaki istasyonları keşif öncesinde ayırırız. Kritik yoldaki işler gerçek duruş ister ve planlı bloğa yazılır; kritik yol dışındakiler bölge boşaltmayla, hat çalışırken yapılabilir. Şemanız yoksa bu ayrımı sahada, keşif sırasında birlikte yaparız; bu da işler ama önceden bilgiyle kurulan plana göre daha fazla zaman alır.",
            },
            {
                soru: "Biz ikinci kademe tedarikçiyiz; birinci kademenin baskısı bize nasıl yansıyor?",
                cevap:
                    "Genellikle pencerenizi daraltarak — birinci kademenin talebi sıkıştıkça sizin teslim programınız da sıkışır ve bakım için ayırabileceğiniz zaman azalır. Bu durumda önerimiz, bakımı tek büyük operasyona değil, kısa ve sık aralıklı küçük işlere bölmektir; her biri dar bir pencereye sığar ve birikmiş büyük bir işin doğuracağı uzun duruş riskini taşımaz. Vardiya aralarını ve varsa kısa duruş bloklarınızı bize bildirin, iş listesini bu küçük pencerelere göre parçalayalım.",
            },
            {
                soru: "Model değişim dönemimizde talebimiz düşüyor; bunu bakıma nasıl çevirebiliriz?",
                cevap:
                    "Tam olarak önerdiğimiz şey bu — talebin düştüğü, hattın nispeten rahatladığı dönemler, büyük kapsamlı bakım işleri için doğal bir fırsat penceresidir. Yeni lansman öncesi yoğunluğa girmeden bu boşluğu değerlendirmek, ileride yoğun dönemde çıkabilecek arızaların önünü keser. Talep döngünüzü yaklaşık olarak paylaşırsanız, büyük kapsamlı işleri bu durgun pencerelere, zorunlu küçük işleri ise yıl boyu dağıtılmış biçimde planlarız.",
            },
            {
                soru: "Planlı duruş bloğumuza bir hafta kala talep etsek yetişir mi?",
                cevap:
                    "Küçük kapsamlı bir iş için genellikle yetişir, ama büyük kapsamlı bir liste için risklidir — malzeme temini ve ekipman ayrılması zaman ister ve aynı dönemde bölgedeki başka tesisler de benzer bloklarını kullanır. Bir haftalık bildirimle gelen talepte, listeyi önceliğe göre sıralar ve pencereye sığan kadarını garanti ederiz; sığmayan kalemler bir sonraki uygun pencereye ertelenir. Blok tarihini bildiğiniz an paylaşmanız, bu riski büyük ölçüde ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bursa OSB'nin köklü otomotiv tedarik zinciri konumu kamuya açık coğrafi bilgidir; kademeye göre planlama, duruş bloğu kullanımı ve hat akış şeması yaklaşımı firma pratiğidir. Tesis ve marka adı verilmemiştir.",
    },

    "bolge:demirtas-osb": {
        h1: "Demirtaş OSB'de Vardiya Yoğunluğuna Uyumlu Manlift Kiralama",
        giris:
            "Demirtaş OSB'deki tedarikçi tesislerinin ortak özelliği, üretimin neredeyse hiç durmamasıdır — çok vardiyalı çalışma düzeni, bu bölgedeki otomotiv yan sanayi işletmelerinde istisna değil kuraldır. Sürekli çalışan bir tesiste 'ne zaman bakım yapalım' sorusunun cevabı, diğer sanayi bölgelerindeki gibi 'uygun bir gün bulalım' değildir; cevap, vardiyaların arasındaki dar aralıkları, planlı kısa duruşları ve üretimin doğal olarak yavaşladığı anları tek tek avlamaktır. Bu sayfa, Demirtaş OSB'deki tedarikçi işletmelere, sürekli çalışan bir hattın etrafında yükseğe erişim gerektiren işlerin nasıl sıkıştırılacağını anlatıyor: vardiya geçiş dakikaları nasıl kullanılır, gece vardiyasının kendine özgü koşulları nelerdir, hangi işler vardiya beklemeden yapılabilir ve sürekli çalışan tesiste bakım borcunun büyümesini önlemenin yolu nedir.",
        maddeler: [
            {
                baslik: "Vardiya geçişinin dar ama düzenli penceresi",
                metin:
                    "Üç vardiyalı bir tesiste, bir vardiyanın bitip diğerinin başladığı geçiş anı, üretimin fiilen en yavaş olduğu dakikalardır — personel değişimi, devir teslim ve kısa bir toparlanma süresi bu pencereyi oluşturur. Pencere kısadır, genellikle yarım saat ile bir saat arasındadır, ama düzenlidir ve her gün tekrarlanır. Kısa süreli, tek istasyonluk işler için bu pencere yeterlidir; işin önceden hazır malzemeyle, net bir sırayla gelmesi şartıyla. Demirtaş OSB'deki sürekli çalışan tesislerde bu pencereyi düzenli kullanmak, bakımı yıl içine yaymanın en pratik yoludur.",
            },
            {
                baslik: "Gece vardiyasının kendine özgü koşulları",
                metin:
                    "Gece vardiyasında çalışma, gündüzden birkaç bakımdan farklıdır: aydınlatma koşulları farklıdır (dış saha işlerinde ek aydınlatma gerekebilir), personel yoğunluğu genellikle daha düşüktür ve karar verecek yetkili kişiye ulaşmak daha zor olabilir. Gece penceresinde yapılacak işler için önceden net bir kapsam ve tek bir yetkili kişi belirlenmesi, işin sorunsuz ilerlemesini sağlar. Bazı işler — özellikle sessizlik gerektiren veya dikkat dağıtmaması gereken kalemler — tam olarak bu yüzden bilinçli biçimde gece penceresine yazılır; gündüz vardiyasının yoğunluğundan uzak, sakin bir ortamda çalışılır.",
            },
            {
                baslik: "Vardiya beklemeden yapılabilecek işler",
                metin:
                    "Her iş vardiya penceresi beklemek zorunda değildir. Hattın doğrudan üzerinde olmayan, bağımsız çalışan alanlardaki kalemler — dış saha aydınlatması, ayrı bir depo binasının çatı bakımı, üretim hattından fiziksel olarak uzak bir idari blok — üretim vardiyasından bağımsız olarak, gün içinde herhangi bir saatte yapılabilir. Demirtaş OSB'deki taleplerin bir kısmı bu kategoriye girer ve bu ayrımı erkenden yapmak, gereksiz yere dar vardiya pencerelerine sıkıştırılan işleri serbest bırakır.",
            },
            {
                baslik: "Bakım borcunun büyümesi: sürekli çalışan tesisin sessiz riski",
                metin:
                    "Vardiya penceresi dar olduğu için sürekli çalışan tesislerde bakım kalemleri kolayca ertelenir ve erteleme birikince 'bakım borcu' oluşur — yapılmamış, listede bekleyen işlerin toplamı. Bu borç, dar pencerede tek tek eritilmeye çalışıldığında yetersiz kalır ve borç büyümeye devam eder. Demirtaş OSB'deki tesislerle çalışırken önerdiğimiz yöntem, yılda bir-iki kez daha uzun bir planlı duruş bloğu (varsa yıllık bakım dönemi veya düşük sipariş haftası) ayırıp borcun büyük kısmını orada kapatmak, vardiya pencerelerini ise yalnızca yeni birikimi önlemek için kullanmaktır.",
            },
            {
                baslik: "Sürekli çalışan tesiste malzeme hazırlığının kritikliği",
                metin:
                    "Dar vardiya penceresinde en pahalı hata, malzemesi eksik bir işe başlamaktır — pencere kapandığında iş yarım kalır ve bir sonraki pencereyi, yani genellikle ertesi günün aynı saatini beklemek gerekir. Bu yüzden Demirtaş OSB'deki vardiya işlerinde malzeme listesi, işin kendisi kadar önceden netleştirilir: hangi parça, hangi ölçüde, ne zamana kadar hazır olmalı. Malzemesi hazır olmayan kalem, vardiya penceresine hiç alınmaz — bunun yerine daha uzun bir pencereye (hafta sonu kısmi çalışma veya planlı duruş bloğu) ertelenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Vardiya döngüsünde iş türü eşleşmesi",
                paragraflar: [
                    "Sürekli çalışan bir tesiste hangi işin hangi pencereye uygun olduğu aşağıdaki gibi ayrılır. Ayrım, işin hatla ilişkisine ve süresine göre yapılır.",
                ],
                tablo: {
                    basliklar: ["İş türü", "Süre", "Uygun pencere", "Not"],
                    satirlar: [
                        ["Hat üstü tekil kalem", "Kısa (30-60 dk)", "Vardiya geçişi", "Malzeme önceden hazır olmalı"],
                        ["Sessizlik gerektiren iş", "Değişken", "Gece vardiyası", "Tek yetkili kişi belirlenir"],
                        ["Bağımsız alan (depo, idari blok)", "Değişken", "Gün içi, herhangi saat", "Vardiyadan bağımsız"],
                        ["Birikmiş bakım borcu", "Uzun", "Yıllık duruş / düşük sezon", "Yılda 1-2 kez toplu kapama"],
                        ["Acil arıza", "Değişken", "En yakın boşluk", "Program dışı"],
                    ],
                },
            },
            {
                baslik: "Vardiya penceresini kaçırmamanın yöntemi",
                paragraflar: [
                    "Kısa ve düzenli tekrarlanan bir pencereyi verimli kullanmak, önceden kesinleşmiş bir kapsam ve hazır malzeme gerektirir. Demirtaş OSB'deki vardiya işlerinde uyguladığımız yöntem şudur: iş talebi geldiğinde önce kapsam netleştirilir, sonra gereken malzeme listesi çıkarılır ve malzeme temin edilene kadar iş takvime yazılmaz. Malzeme hazır olduğunda en yakın uygun vardiya geçişi belirlenir ve ekip, pencere açılır açılmaz işe başlayacak biçimde önceden konumlanır.",
                    "Bu disiplin, dar pencerenin en büyük düşmanı olan 'başladık ama bitiremedik' senaryosunu önler. Bir vardiya penceresinde başlayıp bitirilemeyen iş, yalnızca o günün kaybı değildir — bir sonraki pencereye kadar geçen sürede iş yarım kalmış bir hâlde bekler ve bu genellikle üretim alanında geçici, istenmeyen bir durum yaratır.",
                ],
            },
            {
                baslik: "Bakım borcunu görünür kılmak",
                paragraflar: [
                    "Sürekli çalışan bir tesiste bakım borcunun büyüklüğünü fark etmek zordur çünkü her tekil erteleme küçük görünür. Bunu görünür kılmanın basit yolu, ertelenen her kalemi tek bir listede toplamaktır — hangi kalem, ne zamandan beri bekliyor, neden ertelendi. Bu liste birkaç ay biriktiğinde, borcun gerçek büyüklüğü ve hangi kalemlerin artık beklemeye değmediği netleşir.",
                    "Bu listeyi yıllık duruş bloğundan önce bizimle paylaşmanız, o bloğun kapsamını doğru belirlememizi sağlar — hangi kalemlerin gerçekten o güne yazılması gerektiğini, hangilerinin hâlâ vardiya pencereleriyle idare edilebileceğini birlikte ayırırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimiz üç vardiya çalışıyor, hiç durmuyor; bakım için ne zaman geliyorsunuz?",
                cevap:
                    "Tam duruş beklemek yerine vardiya geçiş dakikalarını kullanıyoruz — bu pencere kısadır ama her gün düzenli tekrarlanır ve kısa süreli, tek istasyonluk işler için yeterlidir. Daha büyük kapsamlı işleri ise yılda bir-iki kez ayrılan planlı duruş bloğuna (varsa yıllık bakım dönemi veya düşük sipariş haftası) topluyoruz. İki pencerenin birlikte kullanılması, sürekli çalışan bir tesiste bile bakımın düzenli yürümesini sağlıyor. Vardiya saatlerinizi paylaşırsanız, hangi geçişin işe en uygun olduğunu belirleriz.",
            },
            {
                soru: "Gece vardiyasında iş yaptırmak güvenli mi, kim yetkili olacak?",
                cevap:
                    "Güvenli, ama gündüzden farklı bir hazırlık ister. Gece penceresinde çalışırken net bir kapsam ve tek bir yetkili kişi belirlenmesini istiyoruz — karar gerektiren bir durumda kime danışılacağı önceden bilinmeli. Dış saha işlerinde ek aydınlatma ihtiyacı varsa bunu keşifte belirleriz. Bazı işler zaten gece penceresine bilinçli olarak yazılır çünkü gündüz vardiyasının yoğunluğundan uzak, sakin bir ortamda daha hızlı biter. Gece vardiyanızın kendine özgü kurallarını (giriş-çıkış, güvenlik bildirimi) paylaşırsanız, plana baştan dahil ederiz.",
            },
            {
                soru: "Depo binamız üretim hattından ayrı bir yapıda; bunun için vardiya penceresi beklemek gerekir mi?",
                cevap:
                    "Genellikle hayır. Üretim hattından fiziksel olarak bağımsız alanlar — ayrı depo binaları, idari bloklar, hat dışı dış saha kalemleri — vardiyadan bağımsız olarak gün içinde herhangi bir saatte çalışılabilir. Bu ayrımı erkenden yapmak, gereksiz yere dar vardiya pencerelerine sıkıştırılan işleri serbest bırakır ve hem sizin hem bizim planlamamızı kolaylaştırır. Tesisinizin yerleşimini paylaşırsanız, hangi kalemlerin bağımsız, hangilerinin vardiyaya bağlı olduğunu birlikte ayırırız.",
            },
            {
                soru: "Bakım işlerimiz sürekli erteleniyor ve liste büyüyor; ne yapmalıyız?",
                cevap:
                    "Önce büyüklüğü görünür kılın — ertelenen her kalemi tek bir listede, ne zamandan beri beklediğiyle birlikte toplayın. Bu liste elinizde olduğunda gerçek büyüklük netleşir ve dar vardiya pencerelerinin bu borcu eritmeye yetmediği görülür. Çözüm genellikle iki katmanlıdır: birikmiş büyük borcu yılda bir-iki kez ayrılan uzun bir duruş bloğunda toplu kapatmak, vardiya pencerelerini ise yalnızca yeni birikimi önlemek için kullanmak. Listenizi paylaşırsanız, hangi kalemlerin bloğa hangilerinin vardiya penceresine gideceğini birlikte ayırırız.",
            },
            {
                soru: "Vardiya penceresinde iş yarım kalırsa ne olur?",
                cevap:
                    "Bunu önlemek için asıl önlemi baştan alıyoruz: malzemesi hazır olmayan hiçbir kalemi vardiya penceresine almıyoruz. Kapsam ve malzeme önceden netleşmemişse, iş daha uzun bir pencereye (hafta sonu kısmi çalışma veya planlı duruş bloğu) erteleniyor. Buna rağmen beklenmedik bir gecikme yaşanırsa, iş güvenli bir noktada durdurulur ve bir sonraki uygun pencerede — genellikle ertesi günün aynı vardiya geçişinde — tamamlanır. Yarım kalma riski, büyük ölçüde önceden yapılan hazırlığa bağlıdır ve bu yüzden hazırlık aşamasını atlamayız.",
            },
            {
                soru: "Vardiya saatlerimizi sizinle paylaşmazsak yine de çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz ama sürekli çalışan bir tesiste bu, planlamayı belirgin biçimde zorlaştırır. Vardiya saatleri bilinmediğinde, doğru pencereyi bulmak sahada, ilk vardığımız anda yapılan bir gözlemle olur ve bu, hem işin başlama saatini hem de kısa penceredeki verimi düşürür. Saatlerinizi paylaşmanız, işin hangi geçişte, ne kadar sürede biteceğini önceden netleştirir ve dar pencereyi verimli kullanmamızı sağlar — bu bilgi yalnızca planlama için kullanılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Demirtaş OSB'nin çok vardiyalı otomotiv yan sanayi dokusu kamuya açık coğrafi bilgidir; vardiya penceresi kullanımı, gece vardiyası koşulları ve bakım borcu yönetimi firma pratiğidir. Tesis ve marka adı verilmemiştir.",
    },

    "bolge:yildirim": {
        h1: "Yıldırım'da Yan Sanayi Atölyelerine Manlift Kiralama",
        giris:
            "Yıldırım'daki küçük ve orta ölçekli imalathanelerin bir bölümü, doğrudan ya da dolaylı biçimde otomotiv yan sanayi zincirine bağlıdır ve bu bağlantı, atölyenin kendi ölçeğinin çok üzerinde bir disiplin beklentisi getirir. Küçük bir atölye, büyük bir ana sanayinin standartlarına göre değerlendirilir ama büyük bir atölyenin kaynaklarına sahip değildir — ayrı bir bakım ekibi, ayrı bir planlama birimi, esnek bir bütçe genellikle yoktur. Bu uyumsuzluk, yükseğe erişim gerektiren işlerde de kendini gösterir: iş küçük ve nadir olduğu için tekil kiralamanın maliyeti orantısız büyür, ama iş atlanırsa ortaya çıkan risk (denetim bulgusu, hat besleme aksaması) küçük atölyenin taşıyamayacağı kadar büyük olabilir. Bu sayfa, Yıldırım'daki küçük ölçekli yan sanayi atölyelerine, bu ölçek uyumsuzluğunu nasıl yöneteceklerini anlatıyor.",
        maddeler: [
            {
                baslik: "Büyük standart, küçük kaynak: ölçek uyumsuzluğu",
                metin:
                    "Otomotiv zincirine bağlı bir atölyenin karşılaştığı standartlar — kalite belgelendirme, işaretleme kuralları, erişim güvenliği — genellikle büyük tesisler için tasarlanmıştır ve küçük atölyenin bunları kendi ölçeğinde karşılaması zordur. Yıldırım'ın dar parsellerinde, tek katlı imalathanelerde bu standartları tutturmak, önce fiziksel bir erişim sorununu çözmeyi gerektirir — bakım gerektiren nokta genellikle dar bir avluda ya da bitişik nizamda bir çatıda durur. Bizim buradaki rolümüz, büyük tesis standardını küçük atölyenin fiziksel gerçekliğine uyacak biçimde uygulanabilir kılmaktır.",
            },
            {
                baslik: "Nadir ama zorunlu işlerin ekonomisi",
                metin:
                    "Küçük bir yan sanayi atölyesinde yükseğe erişim gerektiren işler yılda birkaç kez, kısa süreli ve genellikle belirli bir tetikleyiciye bağlı olarak ortaya çıkar — bir denetim bulgusu, bir ana sanayi talebi, bir arıza. Bu nadirlik, tekil kiralamanın sabit maliyetlerini (nakliye, kurulum) orantısız büyütür ve atölye sahibi bu maliyeti işin gerçek değerinden fazla hisseder. Doğru yaklaşım, işi tek başına değil bölgedeki benzer durumdaki atölyelerle birlikte planlamaktır — Yıldırım'ın yoğun atölye dokusu, bu tür birleştirmeler için elverişlidir.",
            },
            {
                baslik: "Denetim bulgusunun küçük atölyedeki ağırlığı",
                metin:
                    "Büyük bir tesiste bir denetim bulgusu, ilgili birim tarafından rutin biçimde ele alınır; küçük bir atölyede ise aynı bulgu, atölye sahibinin doğrudan kendisinin çözmesi gereken bir kriz hâline gelir çünkü ayrı bir kalite veya bakım biriminden bahsedilemez. Yıldırım'daki müşterilerimizden gelen taleplerin önemli bir kısmı, tam da bu şekilde bir denetim sonrası aciliyetle gelir. Bu durumlarda hızlı hareket etmek kadar, bulgunun ne olduğunu doğru anlamak da önemlidir — 'aydınlatma yetersiz' bulgusu ile 'erişim güvenliği eksik' bulgusu farklı işler gerektirir ve doğru kapsamı baştan netleştirmek, tekrar çağrı riskini ortadan kaldırır.",
            },
            {
                baslik: "Dar sokakta erişim, dar bütçede iş kapsamı",
                metin:
                    "Yıldırım'ın bitişik nizam dokusu, hem fiziksel hem bütçesel bir kısıtı aynı anda getirir: dar sokaktan erişim genellikle kompakt ekipman ve dikkatli planlama ister, bu da işin süresini ve dolayısıyla maliyetini etkiler. Küçük atölye bütçesiyle bu maliyeti dengelemenin yolu, işin kapsamını net tutmaktır — 'bir bakın, ne gerekiyorsa yapın' yaklaşımı yerine, denetim bulgusunun veya ihtiyacın tam olarak ne olduğunu baştan tarif etmek, hem erişim planlamasını hem fiyatlandırmayı öngörülebilir kılar.",
            },
            {
                baslik: "Ana sanayi zincirinde küçük atölyenin görünürlüğü",
                metin:
                    "Küçük bir atölye genellikle zincirin ikinci veya üçüncü kademesinde yer alır ve ana sanayinin doğrudan gözünde değildir — ama bu, atölyenin standart dışı kalabileceği anlamına gelmez. Bir üstteki tedarikçi, kendi denetiminde bu atölyeyi de değerlendirebilir ve bulgular yukarı doğru yansıyabilir. Yıldırım'daki küçük atölyelerle çalışırken, görünürlüğün düşük olmasının rehavete yol açmaması gerektiğini, tam tersine düzenli ve kayıtlı bir bakım pratiğinin küçük atölyeyi zincirde güvenilir bir halka olarak konumlandırdığını anlatıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük atölye için tetikleyici bazlı iş listesi",
                paragraflar: [
                    "Yıldırım'daki küçük yan sanayi atölyelerinde yükseğe erişim işleri genellikle belirli bir tetikleyiciyle ortaya çıkar. Aşağıdaki tablo bu tetikleyicileri ve doğru yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Tetikleyici", "Tipik iş", "Aciliyet", "Öneri"],
                    satirlar: [
                        ["Ana sanayi/üst tedarikçi denetimi", "Aydınlatma, işaretleme, erişim", "Yüksek, tarihli", "Bulguyu net tarif edip erken bildir"],
                        ["Arıza (aydınlatma, havalandırma)", "Onarım", "Değişken", "Kapsamı önceden netleştir"],
                        ["Periyodik kendi kontrolü", "Genel gözden geçirme", "Düşük", "Komşu atölyeyle birleştir"],
                        ["Yeni hat/istasyon kurulumu", "Montaj desteği", "Planlı", "Kurulum takvimine göre erken planla"],
                        ["Belge yenileme (varsa)", "Kayıt gerektiren kontrol", "Tarihli", "Belge süresinden önce planla"],
                    ],
                },
            },
            {
                baslik: "Denetim bulgusunu doğru tarif etmek",
                paragraflar: [
                    "Bir denetim raporunda karşınıza çıkan madde genellikle teknik bir dille yazılır ve bu dilin işe doğru çevrilmesi, gereksiz kapsam genişlemesini önler. Bize bulguyu ilettiğinizde, raporun ilgili maddesini olduğu gibi paylaşmanız yeterlidir — biz bunu hangi fiziksel işe karşılık geldiğini (armatür değişimi mi, erişim platformu mu, işaretleme mi) netleştirir ve size doğru kapsamda bir teklif çıkarırız.",
                    "Bu netlik, bütçenin gereğinden fazla harcanmasını da önler: bazı bulgular basit bir kontrol ve küçük düzeltmeyle kapanırken, bazıları gerçekten kapsamlı bir yenileme gerektirir; ikisini ayırt etmek, atölyenin kısıtlı bütçesini doğru yere yönlendirir.",
                ],
            },
            {
                baslik: "Yıldırım'ın atölye kümelerinde ortak planlama",
                paragraflar: [
                    "Yıldırım'ın yoğun imalathane dokusunda, benzer sektörde ve benzer büyüklükte çalışan atölyeler birbirine yakın konumlanır ve bu yakınlık, ortak planlama için doğal bir fırsattır. Denetim döngüleri benzer olan ya da aynı üst tedarikçiye bağlı atölyeler, bakım turlarını aynı haftaya toplayarak hem maliyeti böler hem de birbirlerinin deneyiminden faydalanır — bir atölyede karşılaşılan bir bulgu, komşusunda da aranacak bir kalem hâline gelir.",
                    "Bu düzeni kurmak için gereken, bir atölyenin inisiyatif alıp komşularına sormasıdır. Talebinizi ilettiğinizde, bölgenizdeki benzer taleplerle eşleştirme imkânını da değerlendiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Denetimden 'erişim güvenliği yetersiz' bulgusu aldık; bu tam olarak ne anlama geliyor?",
                cevap:
                    "Bu ifade genellikle yüksekte çalışılan bir noktaya güvenli ve standarda uygun erişimin sağlanamadığı anlamına gelir — örneğin merdivenle veya güvensiz bir yöntemle ulaşılan bir bakım noktası. Raporun ilgili maddesini bize ilettiğinizde, bunun fiziksel karşılığını (o noktaya platformla erişim sağlanması, gerekiyorsa kalıcı bir erişim çözümü) netleştirir ve doğru kapsamda bir teklif çıkarırız. Bulguyu olduğu gibi paylaşmanız, gereksiz kapsam genişlemesini önler ve bütçenizi doğru yere yönlendirir.",
            },
            {
                soru: "Küçük bir atölyeyiz, yılda belki bir kez ihtiyacımız oluyor; her seferinde yüksek nakliye bedeli mi ödeyeceğiz?",
                cevap:
                    "Zorunlu değil. Yıldırım'ın yoğun atölye dokusunda benzer durumdaki komşu atölyelerin taleplerini birleştirmek yaygın bir çözümdür — nakliye ve kurulum payı katılımcılar arasında bölünür. Talebinizi ilettiğinizde bölgenizdeki benzer taleplerle eşleştirme imkânını değerlendiririz; ayrıca 'tarih esnek' notuyla gelen talepler, bölgeden geçen ilk uygun turlara eklenerek tekil nakliye maliyetinden kaçınabilir.",
            },
            {
                soru: "Dar sokağımızdan makine gerçekten girer mi?",
                cevap:
                    "Yıldırım'ın bitişik nizam dokusunda bu, keşifte netleştirdiğimiz ilk sorudur. Kompakt ekipman, dar şase ve dikkatli bom planlamasıyla çoğu dar sokakta çalışma mümkündür; sokak ölçüsü ve fotoğrafı bize ulaştığında hangi sınıfın uygun olduğunu önceden söyleyebiliriz. Sokaktan hiç çözülemeyen nadir durumlarda komşu parselden erişim veya alternatif yöntemler değerlendirilir. Sığmayan makineyi sahaya göndermek yerine, bunu telefonda veya fotoğrafla önceden netleştirmeyi tercih ediyoruz.",
            },
            {
                soru: "Bize ulaşan denetim bulgusu aslında bir üst tedarikçiden geliyor; bu normal mi?",
                cevap:
                    "Evet, bu zincirin doğal işleyişidir. Ana sanayinin doğrudan denetlediği birinci kademe tedarikçi, kendi altındaki ikinci-üçüncü kademe atölyeleri de değerlendirebilir ve bulgular yukarıdan aşağıya yansır. Küçük atölye olarak ana sanayinin doğrudan gözünde olmasanız da, standart beklentisi aynı şekilde geçerlidir. Düzenli ve kayıtlı bir bakım pratiği, sizi zincirde güvenilir bir halka olarak konumlandırır ve gelecekteki denetimlerde bulgu çıkma riskini azaltır.",
            },
            {
                soru: "Bütçemiz sınırlı; her bulguyu aynı anda mı kapatmalıyız?",
                cevap:
                    "Hayır, bunu bulgunun aciliyetine göre ayırmak daha doğru bir yaklaşımdır. Bazı bulgular basit bir kontrol ve küçük düzeltmeyle kapanırken bazıları gerçekten kapsamlı bir iş gerektirir; bulguyu bize ilettiğinizde bu ayrımı netleştirir, hangisinin acil hangisinin bir sonraki döneme bırakılabileceğini birlikte belirleriz. Denetim raporunda kapanış tarihi belirtilmiş bulgular önceliklidir; diğerleri bütçenize uygun bir takvime yayılabilir.",
            },
            {
                soru: "Yeni bir hat kuruyoruz; kurulum sırasında da destek verebiliyor musunuz?",
                cevap:
                    "Evet — yeni hat veya istasyon kurulumu, planlı bir süreç olduğu için erken bilgi verildiğinde en rahat planlanabilen iş türüdür. Kurulum takviminizi paylaştığınızda, hangi aşamada (aydınlatma, tesisat, erişim noktaları) yükseğe erişim gerektiğini birlikte belirler ve işi kurulum programınıza göre kurarız. Kurulum sırasında ortaya çıkan ek işler için de aynı ziyarette destek verebiliriz; bu, ayrı bir kiralama sürecinden daha ekonomiktir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Yıldırım'ın yoğun imalathane-atölye dokusu ve otomotiv yan sanayi zincirine dolaylı bağlantısı kamuya açık coğrafi bilgidir; ölçek uyumsuzluğu yaklaşımı, denetim bulgusu çevirisi ve ortak planlama düzeni firma pratiğidir. Tesis ve marka adı verilmemiştir.",
    },

    "bolge:kestel": {
        h1: "Kestel'de Otomotiv Yan Sanayi Tedarik Ritmine Uyumlu Manlift Kiralama",
        giris:
            "Kestel'deki tedarikçi tesislerinin çoğu, doğu koridorunun karma sanayi dokusu içinde otomotiv zincirine değişen yoğunlukta bağlıdır — kimi tesis için bu bağlantı üretiminin büyük bölümünü oluştururken, kimi tesis için tali bir müşteri ilişkisidir. Bu değişkenlik, bakım planlamasını da farklılaştırır: ana sanayiye yoğun bağımlı bir tesiste plan tümüyle o üretim ritmine göre kurulurken, tali bağlantısı olan bir tesiste daha esnek bir takvim mümkündür. Kestel'de doğru yaklaşım, her tesisin otomotiv zincirine bağımlılık derecesini önce anlamak, sonra bakım takvimini o dereceye göre kurmaktır. Bu sayfa, bu ayrımın nasıl yapılacağını ve doğu koridorundaki tedarikçi tesislerinde yükseğe erişim gerektiren işlerin üretim ritmine nasıl uydurulacağını anlatıyor.",
        maddeler: [
            {
                baslik: "Bağımlılık derecesini önce anlamak",
                metin:
                    "Kestel'deki bir tesisin bakım takvimini kurmadan önce sorduğumuz ilk soru, üretiminizin ne kadarının tek bir ana sanayi müşterisine bağlı olduğudur. Üretiminin büyük bölümü tek bir hatta bağlı tesislerde, bakım planı o hattın ritmine sıkı sıkıya bağlanır ve esneklik payı azdır. Birden fazla müşterisi olan veya otomotiv dışı işleri de bulunan tesislerde ise bakım takvimi daha rahat kurulabilir, çünkü tek bir üretim programına bağımlılık yoktur. Bu ayrımı baştan netleştirmek, gereksiz yere katı bir plan kurmamızı ya da tam tersine kritik bir bağımlılığı hafife almamızı önler.",
            },
            {
                baslik: "Karma müşteri portföyünde takvim çakışması",
                metin:
                    "Birden fazla ana sanayiye veya birden fazla sektöre birden hizmet veren Kestel tesislerinde bakım takvimi, tek bir üretim programına değil birkaç farklı programın kesişimine bağlıdır. Bu tesislerde en zor kısım, hepsinin aynı anda düşük yoğunlukta olduğu ortak bir pencere bulmaktır — böyle bir pencere nadiren geniştir ve bulunduğunda değerlendirilmelidir. Karma portföylü tesislerle çalışırken, her müşteri programının kabaca ne zaman yoğunlaştığını bilmek, bu ortak pencereyi önceden tahmin etmemizi sağlar.",
            },
            {
                baslik: "Doğu koridorunun lojistik avantajı",
                metin:
                    "Kestel'in doğu koridorundaki konumu, bakım işlerinin hızlı ve esnek yönetilmesine katkı sağlar — bölgedeki tedarikçi yoğunluğu, aynı hafta içinde birden fazla tesise kısa mesafeli sevkiyat yapmayı mümkün kılar. Bu, özellikle dar pencereli tesislerde işe yarar: bir tesisteki iş beklenenden kısa sürerse, aynı gün içinde koridordaki başka bir talebe geçilebilir; bir tesiste gecikme yaşanırsa, koridordaki yakınlık telafi süresini kısaltır. Kestel'deki tedarikçi kümesinin yoğunluğu, bu esnekliği mümkün kılan temel etken.",
            },
            {
                baslik: "Tali bağlantılı tesislerde esnek planlama fırsatı",
                metin:
                    "Otomotiv zincirine tali biçimde bağlı, üretiminin küçük bir kısmını bu kanala ayıran Kestel tesislerinde bakım planlaması, yoğun bağımlı tesislere göre çok daha rahat kurulabilir. Bu tesisler için önerimiz, esnekliği bir avantaja çevirmektir — kritik olmayan bakım işlerini, koridordaki diğer tesislerin dar pencerelerinin arasına, boşluk dolduracak biçimde yerleştirmek. Bu, hem tesise uygun fiyat avantajı sağlar hem de bizim koridor planlamamızı daha verimli kılar.",
            },
            {
                baslik: "Bağımlılık derecesi değiştiğinde planı güncellemek",
                metin:
                    "Bir tesisin otomotiv zincirine bağımlılık derecesi zamanla değişebilir — yeni bir müşteri kazanılması, mevcut bir hattın büyümesi veya bir sözleşmenin sona ermesi, bakım takviminin esnekliğini doğrudan etkiler. Kestel'deki tesislerle uzun vadeli çalıştığımızda, bu değişimi takip eder ve bakım yaklaşımını buna göre güncelleriz — geçen yıl esnek planlanabilen bir tesis, bu yıl yeni bir hat kazandıysa artık daha katı bir pencereye ihtiyaç duyabilir. Bu güncellemeyi doğru yapabilmemiz için, üretim yapınızdaki önemli değişiklikleri bize erken bildirmeniz faydalı olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bağımlılık derecesine göre planlama modeli",
                paragraflar: [
                    "Kestel'deki tedarikçi tesislerinin otomotiv zincirine bağımlılık derecesi, bakım planının esnekliğini belirler. Aşağıdaki tablo bu ilişkiyi özetler.",
                ],
                tablo: {
                    basliklar: ["Bağımlılık derecesi", "Plan esnekliği", "Pencere kaynağı", "Örnek yaklaşım"],
                    satirlar: [
                        ["Yüksek (tek ana sanayi hattı)", "Düşük", "Hattın kendi duruş bloğu", "Katı, önceden kesinleşmiş tarih"],
                        ["Orta (birden fazla müşteri)", "Orta", "Programların ortak boşluğu", "Kısa bildirimli esnek pencere"],
                        ["Düşük (tali bağlantı)", "Yüksek", "Koridor boşlukları", "Diğer tesislerin arasına yerleştirme"],
                        ["Otomotiv dışı ağırlıklı", "Çok yüksek", "Kendi takvimi", "Standart planlama"],
                        ["Değişen (yeni hat/sözleşme)", "Değişken", "Güncellenen bilgiye göre", "Periyodik gözden geçirme"],
                    ],
                },
            },
            {
                baslik: "Karma portföyde ortak pencereyi bulmak",
                paragraflar: [
                    "Birden fazla ana sanayi müşterisine hizmet veren bir Kestel tesisinde, tüm programların aynı anda düşük yoğunlukta olduğu bir pencere bulmak, tek bir programa bağlı tesise göre daha zor ama daha değerlidir — böyle bir pencere bulunduğunda, genellikle daha kapsamlı bir iş listesi için kullanılabilir. Bu pencereyi önceden tahmin edebilmek için, her müşteri programınızın kabaca ne zaman yoğunlaştığını (örneğin biri yaz aylarında, diğeri yıl sonunda) bilmemiz yeterlidir; kesin tarihleri paylaşmanız gerekmez.",
                    "Ortak pencere bulunamadığında, iş listesini parçalara ayırıp her parçayı farklı bir programın boşluğuna yerleştirmek ikinci bir seçenektir — bu, tek seferlik büyük bir işten daha fazla koordinasyon gerektirir ama dar pencereli tesislerde işe yarayan bir yöntemdir.",
                ],
            },
            {
                baslik: "Koridor yoğunluğunun tesise yansıyan faydası",
                paragraflar: [
                    "Kestel'in doğu koridorundaki tedarikçi yoğunluğu, tek bir tesise özel değil bölgesel bir avantajdır. Aynı hafta içinde koridordaki birden fazla tesise kısa mesafeli sevkiyat yapabilmemiz, hem acil taleplere daha hızlı cevap vermemizi hem de planlı işlerde beklenmedik boşlukları verimli doldurmamızı sağlar.",
                    "Bu avantajdan en çok faydalanan, esnek pencereli tesislerdir — işini 'tarih esnek' olarak bildiren bir Kestel tesisi, koridordaki ilk uygun boşluğa eklenir ve genellikle beklediğinden daha kısa sürede hizmet alır. Katı pencereli tesisler için ise avantaj, acil durumlarda telafi süresinin kısalması biçiminde kendini gösterir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretimimizin ne kadarının otomotiv zincirine bağlı olduğunu size nasıl anlatmalıyız?",
                cevap:
                    "Kabaca bir oran yeterli — üretim hacminizin yaklaşık ne kadarının tek bir ana sanayi hattına, ne kadarının başka müşterilere veya işlere gittiğini bilmemiz, bakım planının ne kadar esnek kurulabileceğini belirler. Yüksek bağımlılıkta plan o hattın ritmine sıkı bağlanır ve esneklik azdır; düşük bağımlılıkta plan çok daha rahat kurulabilir. Kesin rakamlara ihtiyacımız yok, genel bir tablo yeterli — bu bilgi, işin size doğru pencerede ve doğru fiyatla sunulmasını sağlar.",
            },
            {
                soru: "Birden fazla ana sanayiye çalışıyoruz; ortak boş pencere nasıl bulunur?",
                cevap:
                    "Her müşteri programınızın kabaca ne zaman yoğunlaştığını bilmemiz yeterli — kesin tarihlere ihtiyacımız yok. Örneğin bir programınız yaz aylarında yoğunlaşıyor, diğeri yıl sonunda; bu durumda iki program arasındaki ortak sakin dönem tahmin edilebilir ve bakım işi oraya planlanır. Ortak bir pencere bulunamazsa, iş listesini parçalara ayırıp her parçayı farklı bir programın kendi boşluğuna yerleştirmek ikinci bir yöntemdir; bu daha fazla koordinasyon gerektirir ama dar pencereli tesislerde işe yarar.",
            },
            {
                soru: "Otomotive tali bağlantımız var; bu bize bir avantaj sağlıyor mu?",
                cevap:
                    "Evet, esneklik avantajı sağlıyor. Üretiminin küçük bir kısmını otomotiv zincirine ayıran tesislerde bakım planı, yoğun bağımlı tesislere göre çok daha rahat kurulabilir. Bu esnekliği bir fiyat avantajına çeviriyoruz — kritik olmayan işlerinizi, koridordaki diğer tesislerin dar pencerelerinin arasına, boşluk dolduracak biçimde yerleştiriyoruz. 'Tarih esnek' notuyla gelen talepler, koridordan geçen ilk uygun boşluğa eklenir ve genellikle standart planlamadan daha ekonomik çıkar.",
            },
            {
                soru: "Yeni bir ana sanayi hattı kazandık; bu bakım planımızı nasıl etkiler?",
                cevap:
                    "Muhtemelen esnekliğinizi azaltır — daha önce rahat planlanabilen bir tesis, yeni hattın ritmine bağlı olarak daha katı bir pencereye ihtiyaç duyabilir. Bu tür üretim yapısı değişikliklerini erken bildirmeniz, bakım yaklaşımımızı zamanında güncellememizi sağlar; aksi hâlde eski esnek varsayımla kurulan bir plan, yeni hattın kritik dönemleriyle çakışabilir. Değişikliği bize ilettiğinizde, mevcut bakım takviminizi yeni duruma göre birlikte gözden geçiririz.",
            },
            {
                soru: "Kestel'deki konumunuz bize gerçekten bir hız avantajı sağlıyor mu?",
                cevap:
                    "Sağlıyor, çünkü doğu koridorundaki tedarikçi yoğunluğu bize aynı hafta içinde birden fazla tesise kısa mesafeli sevkiyat yapma imkânı veriyor. Bu, hem acil taleplere daha hızlı cevap vermemizi hem de planlı işlerde beklenmedik boşlukları verimli doldurmamızı sağlıyor. Esnek pencereli tesisler bu avantajdan en çok faydalanan taraf — 'tarih esnek' bir talep, koridordaki ilk uygun boşluğa eklenir. Katı pencereli tesisler için ise avantaj, acil durumlarda telafi süresinin kısalması biçiminde ortaya çıkıyor.",
            },
            {
                soru: "Bakım planımızı ne sıklıkla gözden geçirmeliyiz?",
                cevap:
                    "Sabit bir sıklık önermek yerine, üretim yapınızda değişiklik olduğunda gözden geçirmenizi öneriyoruz — yeni bir müşteri, yeni bir hat, biten bir sözleşme gibi gelişmeler bağımlılık derecenizi değiştirir ve bu da bakım planının esnekliğini etkiler. Böyle bir değişiklik olmasa bile, yılda bir kez genel bir gözden geçirme yapmak faydalıdır çünkü küçük değişimler zamanla birikip fark edilmeden planın gerçeklikten uzaklaşmasına yol açabilir. Değişiklikleri bize erken bildirmeniz, planı güncel tutmamızı kolaylaştırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Kestel'in doğu sanayi koridorundaki karma tedarikçi dokusu kamuya açık coğrafi bilgidir; bağımlılık derecesine göre planlama modeli ve koridor yoğunluğu yaklaşımı firma pratiğidir. Tesis ve marka adı verilmemiştir.",
    },

    "bolge:teknosab": {
        h1: "TEKNOSAB'de Kuruluş Dönemi İşletmelerine Vardiya Öncesi Manlift Kiralama",
        giris:
            "TEKNOSAB'deki işletmelerin büyük bölümü henüz kuruluş veya genişleme aşamasındadır ve bu, bölgeyi diğer Bursa sanayi bölgelerinden farklı bir talep profiline sokar — burada ağırlıklı ihtiyaç rutin bakım değil, hat kurulumu, montaj ve devreye alma dönemi işleridir. Yeni kurulan bir teknoloji üretim tesisinde çatı, tesisat, aydınlatma ve yükseklik gerektiren montaj kalemleri, üretim henüz başlamadan önceki dar bir zaman diliminde tamamlanmak zorundadır ve bu dilim genellikle bir açılış veya devreye alma tarihine kilitlenmiştir. Aynı zamanda bazı işletmeler kuruluşu tamamlayıp ilk vardiyalarına geçmiştir ve bu işletmelerde artık montaj değil, vardiya öncesi kısa teslimat penceresi öne çıkar. Bu sayfa, TEKNOSAB'in iki farklı döneminde — kuruluş ve ilk üretim — yükseğe erişim işlerinin nasıl planlandığını anlatıyor.",
        maddeler: [
            {
                baslik: "Kuruluş dönemi: sabit bir açılış tarihine bağlı iş listesi",
                metin:
                    "Yeni kurulan bir tesiste yükseğe erişim gerektiren işlerin çoğu, birbirinden bağımsız küçük kalemler değil, tek bir açılış veya devreye alma tarihine bağlı bir listenin parçalarıdır — çatı tesisatı, aydınlatma armatürü montajı, cephe işaretleme, vinç rayı kontrolü gibi kalemler aynı takvime yazılır. Bu durumda tek bir kalemin gecikmesi, listenin geri kalanını değil doğrudan açılış tarihini riske atar. TEKNOSAB'deki kuruluş dönemi taleplerinde bu yüzden önce açılış tarihini, sonra o tarihe geriye doğru sığması gereken iş listesini birlikte kurarız — hangi kalemin ne zaman bitmiş olması gerektiğini net biçimde sıralarız.",
            },
            {
                baslik: "Montaj ekipleriyle aynı sahada çalışmak",
                metin:
                    "Kuruluş aşamasındaki bir tesiste sahada aynı anda birden fazla montaj ekibi bulunur — elektrik, mekanik tesisat, çelik konstrüksiyon, iç donanım — ve platform işi bu kalabalık sahanın bir parçası olarak planlanmalıdır. Burada asıl mesele erişim değil sıralamadır: bir alanın tavan tesisatı bitmeden aydınlatma montajı yapılamaz, aydınlatma bitmeden bazı işaretleme kalemleri tamamlanamaz. TEKNOSAB'deki montaj dönemi işlerinde diğer ekiplerin genel iş programını bilmek, platformun sahada doğru sırada ve boş çalışan alanlarda konumlanmasını sağlar; aksi hâlde makine, henüz hazır olmayan bir alanda beklemek zorunda kalabilir.",
            },
            {
                baslik: "İlk vardiyaya geçiş: montajdan işletmeye dönüş",
                metin:
                    "Kuruluşunu tamamlayıp üretime başlayan bir TEKNOSAB işletmesinde ihtiyaç profili birdenbire değişir — artık geniş kapsamlı montaj değil, kısa ve hedefli teslimat söz konusudur. İlk vardiya planı netleştiğinde, geriye kalan küçük tamamlama işlerinin (bir armatürün değiştirilmesi, bir işaretlemenin düzeltilmesi, bir denetim bulgusunun kapatılması) üretim başlamadan önce, yani vardiya öncesi dar bir pencerede bitmesi gerekir. Bu geçiş döneminde işin aciliyeti, kapsamının küçüklüğüyle ters orantılıdır — küçük görünen bir kalem, vardiya başlama saatine yetişmezse üretim takvimini geciktirebilir.",
            },
            {
                baslik: "Yeni OSB'de altyapı ve erişim belirsizliği",
                metin:
                    "TEKNOSAB henüz yeni gelişen bir bölge olduğu için bazı parsellerde iç yol, saha zemini veya çevre düzenlemesi tam oturmamış olabilir — bu, makinenin sahaya girişini ve konumlanmasını doğrudan etkileyen bir değişkendir. Kuruluş dönemindeki bir işletmenin sahasına ilk kez gittiğimizde, zeminin taşıma kapasitesini, geçici yol durumunu ve makine giriş noktasını keşifte netleştiririz; bu, oturmuş bir sanayi bölgesindeki standart keşiften daha dikkatli bir adımdır çünkü saha koşulları haftadan haftaya değişebilir.",
            },
            {
                baslik: "Kuruluş takviminde erken bilgi paylaşımının değeri",
                metin:
                    "TEKNOSAB'deki kuruluş dönemi işlerinde en büyük risk, iş listesinin son anda, dar bir pencereye sıkışmış biçimde ortaya çıkmasıdır — inşaat ve montaj süreçleri kendi içinde gecikebilir ve bu gecikme, platform işinin de son güne kaymasına yol açar. Açılış tarihini ve kaba bir iş listesini erken paylaşmak, bu riski büyük ölçüde azaltır; makine ve ekip programımızı o tarihe göre önceden ayırabiliriz. Son ana kalan bir talepte de elimizden geleni yaparız, ama planlı bir kuruluş süreci her zaman daha güvenli sonuçlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kuruluş döneminden ilk üretime iş profili",
                paragraflar: [
                    "TEKNOSAB'deki bir işletmenin kuruluştan ilk üretime geçişinde platform ihtiyacının niteliği değişir. Aşağıdaki tablo bu değişimi özetler.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Tipik iş", "Zaman baskısı", "Uygun yaklaşım"],
                    satirlar: [
                        ["İnşaat/montaj başlangıcı", "Çatı-cephe tesisatı, çelik konstrüksiyon desteği", "Orta, program bağlı", "Diğer ekiplerle sıralı planlama"],
                        ["Montaj ortası", "Aydınlatma, işaretleme, vinç rayı", "Yüksek, açılışa bağlı", "Geriye doğru takvim"],
                        ["Açılış öncesi son hafta", "Tamamlama, düzeltme", "Çok yüksek", "Öncelikli, hazır malzeme"],
                        ["İlk vardiya geçişi", "Küçük tamamlama, bulgu kapama", "Yüksek, vardiya öncesi", "Vardiya başlamadan biten dar pencere"],
                        ["Yerleşik üretim", "Rutin bakım", "Düşük-orta", "Standart planlama"],
                    ],
                },
            },
            {
                baslik: "Geriye doğru takvim kurmak",
                paragraflar: [
                    "Sabit bir açılış tarihine bağlı iş listesinde en güvenilir yöntem, takvimi ileriye doğru değil geriye doğru kurmaktır: açılış tarihinden başlayarak, her kalemin bitmiş olması gereken tarih geriye doğru işaretlenir ve platform işi de bu sıraya yerleştirilir. Bu yöntem, hangi kalemin gerçekten kritik yolda olduğunu, hangisinin birkaç gün esneyebileceğini netleştirir — TEKNOSAB'deki kuruluş dönemi taleplerinde bu ayrımı yapmak, dar pencereyi doğru kalemlere ayırmamızı sağlar.",
                    "Geriye doğru takvim kurulurken malzeme temin süresi de hesaba katılır; bazı armatür veya işaretleme malzemeleri kısa sürede temin edilemeyebilir ve bu, platform işinin tarihini değil malzemenin tarihini geciktirebilir. Bu yüzden malzeme durumu netleşmeden platform tarihini kesinleştirmiyoruz.",
                ],
            },
            {
                baslik: "Yeni saha koşullarında keşfin ağırlığı",
                paragraflar: [
                    "Henüz oturmamış bir OSB'de saha koşulları hızlı değişebileceği için, TEKNOSAB'deki kuruluş dönemi taleplerinde keşif adımına oturmuş bölgelere göre daha fazla ağırlık veriyoruz. Zemin taşıma durumu, geçici yol genişliği ve makine giriş-çıkış noktası, işin planlanan günde sorunsuz başlaması için önceden doğrulanması gereken üç unsurdur.",
                    "İşletmenin inşaat veya proje ekibinden güncel bir saha planı veya en azından güncel fotoğraf almak, bu doğrulamayı hızlandırır. Saha koşulları önceki ziyaretten bu yana değiştiyse, bunu bildirmeniz keşfin tekrarlanma ihtiyacını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizin açılış tarihi kesin, geciken bir kalem olursa ne yaparsınız?",
                cevap:
                    "Açılış tarihine bağlı listelerde takvimi geriye doğru kurarız ve hangi kalemin kritik yolda olduğunu baştan işaretleriz; bir kalem gecikirse önceliği artırıp mümkün olan en kısa sürede tamamlamaya odaklanırız. Kritik olmayan kalemler, açılıştan sonraki ilk uygun güne kaydırılabilir. Gecikme riskini en aza indirmenin yolu, malzeme ve diğer montaj ekiplerinin programını önceden bilmektir — bu bilgiyi paylaştığınızda platform işini gerçek kritik yola göre konumlandırırız.",
            },
            {
                soru: "Sahada aynı anda birden fazla montaj ekibi çalışıyor; çakışma yaşar mıyız?",
                cevap:
                    "Bunu önlemenin yolu, diğer ekiplerin genel iş programını bilmemizdir — hangi alanın tesisatının ne zaman biteceğini bilirsek, platform işini o alan boşaldığında planlarız. Program paylaşılmazsa sahada gözlemleyerek ilerleriz, bu da mümkündür ama zaman kaybettirebilir. Genel bir montaj takvimi veya en azından haftalık bir öncelik listesi almamız, sahada doğru sırada ve boş çalışan alanlarda hızlı ilerlememizi sağlar.",
            },
            {
                soru: "İlk vardiyamız başlamadan önce küçük bir düzeltme kalmış; vardiya öncesi yetişir mi?",
                cevap:
                    "Genellikle evet, çünkü küçük tamamlama işleri kısa sürer ve vardiya öncesi dar pencereye sığdırılabilir — yeter ki iş net tarif edilmiş ve malzemesi hazır olsun. Vardiya başlama saatinizi ve tam kapsamı bize ilettiğinizde, o saatten önce biten bir plan kurarız. Kapsam netleşmemişse ya da malzeme eksikse pencereye sığmama riski artar; bu yüzden küçük görünen kalemleri de erken bildirmenizi öneriyoruz.",
            },
            {
                soru: "Sahamızın iç yolu ve zemini henüz tam oturmadı; makine girebilir mi?",
                cevap:
                    "Bunu keşifte netleştiririz. Yeni gelişen bir OSB'de zemin taşıma kapasitesi ve geçici yol durumu haftadan haftaya değişebileceği için, TEKNOSAB'deki taleplerde keşfe standart bir ziyaretten daha fazla önem veriyoruz. Güncel bir saha fotoğrafı veya kısa bir açıklama, hangi makine sınıfının uygun olduğunu önceden belirlememizi sağlar. Zemin veya yol koşulu değiştiyse bunu iş tarihine yakın tekrar bildirmeniz, sahaya uygun makinenin gitmesini garanti eder.",
            },
            {
                soru: "Açılış tarihimiz henüz kesinleşmedi; şimdiden bir şey konuşabilir miyiz?",
                cevap:
                    "Evet, kaba bir tarih aralığı ve kaba bir iş listesiyle bile önden konuşmak faydalıdır — bu, program ve ekip ayırma açısından bize zaman kazandırır. Tarih kesinleştiğinde geriye doğru takvimi birlikte netleştiririz. Son ana kalan taleplerde de elimizden geleni yaparız, ama erken paylaşılan bir kaba plan, dar pencereye sıkışma riskini büyük ölçüde azaltır.",
            },
            {
                soru: "Kuruluş dönemi bitti, artık rutin üretimdeyiz; talep süreci değişir mi?",
                cevap:
                    "Evet, olumlu yönde değişir. Yerleşik üretime geçen bir TEKNOSAB işletmesinde artık geniş kapsamlı montaj takvimi değil, standart bakım planlaması geçerlidir — vardiya saatlerinizi ve varsa periyodik bakım ihtiyaçlarınızı bildirmeniz yeterlidir. Kuruluş dönemindeki saha koşulu belirsizliği de büyük ölçüde ortadan kalkar çünkü yollar ve zemin artık oturmuştur; bu, keşif ve planlama sürecini de hızlandırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. TEKNOSAB'in yeni kurulan teknoloji OSB'si olma niteliği kamuya açık bilgidir; kuruluş dönemi geriye doğru takvim yaklaşımı ve vardiya öncesi teslimat yöntemi firma pratiğidir. Tesis ve marka adı verilmemiş, rakam uydurulmamıştır.",
    },

    "bolge:karacabey": {
        h1: "Karacabey'de Gıda ve Tarıma Dayalı Sanayiye Üretim Akışını Kesmeyen Manlift Kiralama",
        giris:
            "Karacabey'in sanayi dokusu, Bursa merkezindeki otomotiv ağırlıklı yapıdan belirgin biçimde farklıdır — burada üretim, tarım ve hayvancılığa dayalı gıda işleme, süt ve et ürünleri, yem ve tarımsal girdi üretimi etrafında şekillenir. Bu fark, bakım ve kurulum işlerinin planlanma mantığını da değiştirir: gıda üretimi yapan bir tesiste bakım kararı yalnızca üretim programına değil, hijyen kurallarına ve gıda güvenliği denetimlerine de bağlıdır. Bir platformun üretim alanına girmesi, otomotiv fabrikasındaki gibi yalnızca erişim ve güvenlik meselesi değil, aynı zamanda temizlik ve kontaminasyon riski meselesidir. Bu sayfa, Karacabey'deki gıda ve tarıma dayalı sanayi tesislerinde yükseğe erişim gerektiren işlerin, üretim akışını ve hijyen kurallarını bozmadan nasıl planlandığını anlatıyor.",
        maddeler: [
            {
                baslik: "Hijyen kuralları: platform işinin gıda üretiminde farkı",
                metin:
                    "Gıda işleme yapılan bir alanda çalışacak herhangi bir ekipman, önce hijyen kriterlerinden geçmelidir — makinenin temizliği, yağ sızıntısı riski, üretim alanına girerken uygulanacak dezenfeksiyon adımları gibi konular otomotiv veya tekstil sahalarında bu kadar öne çıkmaz. Karacabey'deki gıda tesislerinde platform işine başlamadan önce sorduğumuz sorular bu yüzden farklıdır: iş üretim alanının içinde mi yoksa dışında mı, üretim alanındaysa hangi hijyen protokolü uygulanacak, iş bitince alan nasıl teslim edilecek. Bu protokolü tesisin kendi kalite biriminden almak, işin baştan doğru kurulmasını sağlar.",
            },
            {
                baslik: "Üretim akışını kesmeden bakım: soğuk zincir ve sürekli hat baskısı",
                metin:
                    "Süt, et veya hazır gıda işleyen tesislerde üretim hattı genellikle soğuk zincire bağlıdır ve bu zincirin kesilmesi hem ürün kaybı hem gıda güvenliği riski demektir — bu da bakım işlerinin, üretim durmadan yapılması gereken bir zorunluluk olarak öne çıkmasına yol açar. Bölge boşaltma yöntemi burada da geçerlidir: çalışılacak nokta çevresi geçici olarak izole edilir, hat çalışmaya devam eder. Ancak gıda tesisinde bu izolasyon, otomotiv hattındaki gibi yalnızca fiziksel güvenlik değil aynı zamanda hijyenik ayrım da gerektirir — açık gıda ürünlerinin bulunduğu bir hat üzerinde çalışma, ek örtü ve koruma önlemi ister.",
            },
            {
                baslik: "Tarımsal sezonun üretim yoğunluğuna etkisi",
                metin:
                    "Karacabey'deki tarıma dayalı sanayi tesislerinin üretim yoğunluğu, otomotiv tedarikçisininki gibi sabit bir program yerine tarımsal sezona bağlı dalgalanır — hasat dönemi, süt verim sezonu veya belirli ürünlerin işlenme dönemi, tesisin en yoğun çalıştığı zamanlardır. Bu dönemlerde bakım penceresi daralır, sezon dışı dönemlerde ise genişler. Karacabey'deki tesislerle bakım takvimini kurarken bu sezonluk döngüyü göz önünde bulundurur, büyük kapsamlı işleri mümkün olduğunca sezon dışına, küçük ve zorunlu işleri ise sezon içinde dar pencerelere yayarız.",
            },
            {
                baslik: "Gıda güvenliği denetimi öncesi hazırlık",
                metin:
                    "Gıda işleyen tesislerde yapılan denetimler — resmi gıda güvenliği denetimleri veya müşteri kaynaklı kalite denetimleri — aydınlatma yeterliliği, temizlenebilir yüzey standardı ve erişim güvenliği gibi kalemleri de kapsayabilir ve bu kalemlerin bir kısmı yükseğe erişim gerektirir. Denetim tarihi bilindiğinde, bu kalemlerin denetimden yeterince önce tamamlanmış ve alanın denetime hazır hâlde teslim edilmiş olması gerekir. Karacabey'deki tesislerden gelen taleplerin bir kısmı bu denetim takvimine bağlıdır; denetim tarihini erken paylaşmanız, işin doğru pencereye yerleşmesini sağlar.",
            },
            {
                baslik: "Depolama ve soğuk hava deposu yapılarında bakım özellikleri",
                metin:
                    "Karacabey'deki gıda tesislerinin bir kısmında soğuk hava deposu veya kapalı depolama yapıları bulunur ve bu yapılarda çalışmak, sıcaklık farkı ve yoğuşma gibi standart üretim alanlarında karşılaşılmayan koşullar getirir. Soğuk depo içinde uzun süreli çalışma, hem ekipman hem ekip için farklı bir hazırlık ister; bu tür alanlarda iş öncesi sıcaklık ve çalışma süresi planlaması, işin güvenli ve verimli ilerlemesi için önceden netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda tesisinde iş tipine göre hijyen ve pencere gereksinimi",
                paragraflar: [
                    "Karacabey'deki gıda ve tarıma dayalı sanayi tesislerinde iş tipine göre hijyen gereksinimi ve uygun pencere değişir. Aşağıdaki tablo bu ayrımı özetler.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Hijyen gereksinimi", "Uygun pencere", "Not"],
                    satirlar: [
                        ["Açık üretim hattı üzeri", "Yüksek, örtü/izolasyon gerekir", "Üretim durağı veya bölge boşaltma", "Kalite birimi onayı gerekir"],
                        ["Kapalı ambalajlama alanı", "Orta", "Vardiya arası", "Standart temizlik yeterli"],
                        ["Soğuk hava deposu içi", "Orta, sıcaklık planlaması ekli", "Planlı, süre sınırlı", "Ekip rotasyonu gerekebilir"],
                        ["Depo/idari bina dışı", "Düşük", "Gün içi, herhangi saat", "Üretim alanından bağımsız"],
                        ["Denetim öncesi hazırlık", "Yüksek, görünürlük odaklı", "Denetimden önceki hafta", "Aydınlatma, işaretleme öncelik"],
                    ],
                },
            },
            {
                baslik: "Hijyen protokolünü baştan netleştirmek",
                paragraflar: [
                    "Gıda üretimi yapılan bir alanda çalışacak platformun hangi hijyen adımlarından geçeceği, tesisten tesise farklılık gösterebilir — bazı tesislerde makinenin dezenfekte edilmiş tekerlekle girmesi yeterliyken, bazılarında ek örtü veya belirli saatlerde çalışma zorunluluğu olabilir. Bu protokolü işin başında, tesisin kalite veya üretim biriminden net biçimde almak, sahada gecikmeye yol açacak sürprizleri önler.",
                    "Protokol netleşmeden sahaya gitmek, bazen işin o gün yapılamaması ve ertelenmesi anlamına gelebilir — bu yüzden Karacabey'deki gıda tesisi taleplerinde hijyen protokolünü keşif aşamasının zorunlu bir parçası olarak ele alıyoruz.",
                ],
            },
            {
                baslik: "Sezonluk yoğunlukta bakım takvimini kurmak",
                paragraflar: [
                    "Tarımsal sezona bağlı üretim yoğunluğu, Karacabey'deki tesislerin bakım takviminde otomotiv tedarikçisininkinden farklı bir ritim yaratır — burada döngü haftalık vardiya değil yıllık sezondur. Hasat veya yoğun işleme dönemi öncesinde büyük kapsamlı bakım işlerini tamamlamak, sezon içinde beklenmedik arıza riskini azaltır ve sezon ortasında bakım için zaman ayırma zorunluluğunu ortadan kaldırır.",
                    "Sezon takviminizi yaklaşık olarak paylaşırsanız, büyük kapsamlı işleri sezon öncesine, küçük ve zorunlu işleri ise sezon içindeki dar pencerelere göre planlarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Platform üretim alanımıza girecek; hijyen açısından nelere dikkat edersiniz?",
                cevap:
                    "Öncelikle tesisin kendi hijyen protokolünü sizden veya kalite biriminizden alırız — bazı tesislerde dezenfekte edilmiş tekerlekle giriş yeterli, bazılarında ek örtü veya belirli saatlerde çalışma şartı olabilir. Bu bilgi netleşmeden üretim alanına giriş planlamıyoruz çünkü sürpriz bir kural, işin o gün yapılamamasına yol açabilir. Protokolü baştan netleştirmeniz, işin ilk seferde ve doğru hazırlıkla yapılmasını sağlar.",
            },
            {
                soru: "Soğuk zincirimiz kesintisiz çalışıyor; bakım işini nasıl yaparsınız?",
                cevap:
                    "Bölge boşaltma yöntemiyle — çalışılacak nokta çevresi geçici olarak izole edilir, hattın geri kalanı soğuk zincire dokunulmadan çalışmaya devam eder. Gıda tesisinde bu izolasyon fiziksel güvenliğin yanı sıra hijyenik ayrımı da içerir; açık ürünlerin bulunduğu alanlarda ek örtü kullanılır. Hattın doğrudan üzerinde veya kritik noktada kesişen kalemler için gerçek durağa ihtiyaç olabilir; bu ayrımı keşifte netleştiririz.",
            },
            {
                soru: "Hasat sezonunda çok yoğunuz; bakım için sezon dışını mı beklemeliyiz?",
                cevap:
                    "Büyük kapsamlı işler için evet, sezon dışı dönem daha uygundur — üretim yoğunluğu düştüğünde bakım penceresi genişler ve iş üretime dokunmadan tamamlanabilir. Ancak zorunlu ve küçük kapsamlı işleri sezon içinde de dar pencerelere sığdırabiliriz; bunun için pencerenin net ve kısa tutulması gerekir. Sezon takviminizi yaklaşık paylaşırsanız, hangi işin hangi döneme gideceğini birlikte planlarız.",
            },
            {
                soru: "Gıda güvenliği denetimimiz yaklaşıyor; aydınlatma ve erişim kalemleri ne zaman bitmeli?",
                cevap:
                    "Denetimden en az bir hafta önce tamamlanmış ve alan denetime hazır teslim edilmiş olmalı — son güne bırakılan işler hem aceleye gelir hem de beklenmedik bir gecikmede denetim tarihini riske atar. Denetim tarihinizi ve öncelikli kalemlerinizi (aydınlatma standardı, işaretleme, erişim güvenliği) paylaşın; işi geriye doğru planlayıp denetimden önce bitirelim.",
            },
            {
                soru: "Soğuk hava deposunda çalışacaksınız; ekip ve makine için ek bir hazırlık gerekir mi?",
                cevap:
                    "Evet, soğuk depo içi çalışma standart üretim alanından farklı bir hazırlık ister — düşük sıcaklıkta çalışma süresi sınırlı tutulur ve gerekirse ekip rotasyonu yapılır, ayrıca sıcaklık farkından kaynaklanan yoğuşma ekipman açısından değerlendirilir. Depo sıcaklığını ve çalışılacak sürenin yaklaşık uzunluğunu bize önceden bildirmeniz, işi güvenli ve verimli biçimde planlamamızı sağlar.",
            },
            {
                soru: "Karacabey'de gıda dışında tarımsal girdi (yem, gübre vb.) üreten bir tesisiz; farklı bir yaklaşım mı gerekir?",
                cevap:
                    "Temel yaklaşım benzer ama hijyen gereksinimi genellikle daha düşüktür çünkü açık gıda ürünü teması söz konusu değildir — bu, bazı kalemlerde daha esnek bir pencere anlamına gelebilir. Buna karşılık toz, granül madde gibi malzemelerin bulunduğu alanlarda ekipman koruma önlemleri farklı bir başlık olarak öne çıkar. Tesisinizin üretim tipini ve sezonluk yoğunluk döngüsünü paylaşırsanız, buna uygun bir plan kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Karacabey'in tarım ve hayvancılığa dayalı gıda sanayi ağırlıklı yapısı kamuya açık coğrafi bilgidir; hijyen protokolü yaklaşımı, sezonluk bakım takvimi ve soğuk depo çalışma hazırlığı firma pratiğidir. Tesis ve marka adı verilmemiş, rakam uydurulmamıştır.",
    },

    "bolge:mustafakemalpasa": {
        h1: "Mustafakemalpaşa OSB'de Planlı Sevkiyatla Manlift Kiralama",
        giris:
            "Mustafakemalpaşa, Bursa merkezine belirli bir mesafede konumlanan bir ilçe sanayi bölgesidir ve bu mesafe, buradaki işletmelerin platform kiralama talebini merkezdeki bir sanayi bölgesinden farklı biçimde ele almasını gerektirir. Merkeze yakın bir OSB'de aynı gün içinde birkaç kez sevkiyat yapmak mümkünken, Mustafakemalpaşa'da her sevkiyat daha planlı bir organizasyon ister — makinenin gidiş-dönüş süresi, aynı güzergâhtaki başka taleplerle birleştirme imkânı ve işin toplam süresine göre kurulan bir program devreye girer. Bu, ilçedeki işletmeler için dezavantaj değil, doğru anlaşıldığında bir verimlilik fırsatıdır: planlı sevkiyat, aynı bölgedeki birden fazla talebi aynı güzergâhta birleştirerek hem bekleme süresini hem birim maliyeti düşürür. Bu sayfa, Mustafakemalpaşa OSB'deki işletmelere, mesafe gerçeğini hesaba katan bir planlama yaklaşımını anlatıyor.",
        maddeler: [
            {
                baslik: "Mesafenin sevkiyat programına etkisi",
                metin:
                    "Bursa merkezinden Mustafakemalpaşa'ya yapılan bir sevkiyat, merkez içi bir sanayi bölgesine göre daha uzun sürer ve bu süre, tek bir talep için tek bir sevkiyat yapıldığında toplam iş süresine önemli bir pay olarak eklenir. Bu gerçeği gizlemek yerine baştan açıkça konuşuyoruz: Mustafakemalpaşa'daki bir talep için en verimli sonuç, işin tarihinin birkaç gün esnek tutulup bölgeye yapılacak sevkiyatla eşleştirilmesinden gelir. Kesin bir gün şart olan işlerde de hizmet veririz, ancak o durumda sevkiyat süresi işin toplam maliyetine ve zamanlamasına yansır.",
            },
            {
                baslik: "Güzergâh birleştirmesi: mesafeyi avantaja çevirmek",
                metin:
                    "Mustafakemalpaşa OSB'deki birden fazla işletmenin taleplerini aynı güzergâha yerleştirmek, mesafenin getirdiği maliyeti doğrudan düşüren bir yöntemdir — makine bölgeye bir kez gelir, birkaç işletmede sırayla çalışır ve dönüş de tek seferde olur. Bu yöntemin işlemesi için talebin tarih esnekliğine ihtiyaç vardır; kesin bir güne kilitlenmiş talepler bu birleştirmeden faydalanamaz. İlçedeki sanayi dokusunu takip ederek, bölgeye yapılan sevkiyatları mümkün olduğunca birleştirmeye çalışıyoruz ve esnek tarihli taleplere bu birleşik güzergâhı öncelikli sunuyoruz.",
            },
            {
                baslik: "Planlı duruş ve bakım bloklarını mesafeyle uyumlu kurmak",
                metin:
                    "Mustafakemalpaşa'daki işletmelerin yıllık toplu izin dönemi veya planlı bakım blokları gibi önceden bilinen duruş dönemleri varsa, bu tarihleri erken paylaşmak mesafe dezavantajını neredeyse tamamen ortadan kaldırır — erken bilinen bir tarihe göre sevkiyat programı rahatlıkla kurulabilir ve gerekirse aynı döneme başka bölge taleplerini de ekleyebiliriz. Son anda gelen ve kesin tarihli bir talepte ise mesafe, programımızın o anki yoğunluğuna göre bekleme süresini artırabilir; bu yüzden ilçedeki işletmelere planlı dönemlerini mümkün olduğunca erken bildirmelerini öneriyoruz.",
            },
            {
                baslik: "İlçe OSB'sinde tesis çeşitliliği ve iş kapsamı",
                metin:
                    "Mustafakemalpaşa OSB'de tek bir sektör ağırlıklı değil, karma bir sanayi yapısı bulunur ve bu çeşitlilik, taleplerin kapsamını da çeşitlendirir — kimi işletme kısa bir aydınlatma bakımı isterken kimi işletme çok kalemli bir kurulum desteği talep edebilir. Talebin kapsamı ne olursa olsun, mesafe faktörü sevkiyat planlamasında sabit bir değişken olarak kalır; bu yüzden kapsamı ne kadar erken ve net paylaşırsanız, sevkiyatı o kadar verimli kurabiliriz — özellikle çok kalemli işlerde, tek seferde tüm listeyi tamamlamak, ek bir sevkiyat gereksinimini ortadan kaldırır.",
            },
            {
                baslik: "Acil talepte mesafenin dürüst yönetimi",
                metin:
                    "Mustafakemalpaşa'dan gelen acil bir talepte, en yakın uygun makineyi yönlendiririz ama mesafe gerçeğini saklamayız — merkeze yakın bir bölgeden gelen acil talebe göre ulaşım süresi doğal olarak daha uzun olabilir. Tutulamayacak bir 'hemen geliriz' sözü vermek yerine, gerçekçi bir varış saatini baştan söylemeyi tercih ediyoruz. Acil durumun ne olduğunu ve işin kapsamını ilk aramada net iletmeniz, doğru makinenin ilk seferde ve mümkün olan en kısa sürede yola çıkmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Talep tipine göre mesafe-lojistik yaklaşımı",
                paragraflar: [
                    "Mustafakemalpaşa OSB'deki taleplerde mesafe faktörünün nasıl yönetildiği, talebin tarih esnekliğine göre değişir. Aşağıdaki tablo bu ayrımı özetler.",
                ],
                tablo: {
                    basliklar: ["Talep tipi", "Tarih esnekliği", "Yaklaşım", "Beklenen etki"],
                    satirlar: [
                        ["Esnek tarihli, tek kalem", "Yüksek", "Güzergâh birleştirmesine eklenir", "Düşük birim maliyet"],
                        ["Kesin tarihli, planlı", "Orta (erken bildirilmiş)", "Tekil sevkiyat, programa erken yazılır", "Standart maliyet"],
                        ["Çok kalemli kurulum işi", "Değişken", "Tek sevkiyatta tüm liste", "Ek sevkiyat önlenir"],
                        ["Planlı duruş bloğu", "Erken bilinen", "Bölgesel programla eşleştirme", "Mesafe dezavantajı azalır"],
                        ["Acil, program dışı", "Yok", "En yakın uygun makine", "Gerçekçi varış süresi bildirilir"],
                    ],
                },
            },
            {
                baslik: "Tarih esnekliğinin mesafeye etkisi",
                paragraflar: [
                    "Mustafakemalpaşa'daki bir talebin 'tarih esnek' olarak iletilmesi, mesafenin getirdiği maliyeti düşürmenin en doğrudan yoludur. Esnek talep, bölgeye yapılacak bir sonraki sevkiyatla eşleştirilir ve bu eşleştirme sayesinde tekil sevkiyatın tüm maliyeti tek bir işletmeye değil, güzergâhtaki birkaç talebe paylaştırılır.",
                    "Esnekliğin pratikte ne anlama geldiği nettir: talebinizi belirli bir güne değil birkaç günlük bir aralığa yaymanız yeterlidir. Bu aralık içindeki ilk uygun güzergâh eşleşmesinde işiniz planlanır ve size önceden haber verilir.",
                ],
            },
            {
                baslik: "Çok kalemli işlerde tek sevkiyat planlaması",
                paragraflar: [
                    "Mustafakemalpaşa gibi mesafeli bir bölgede, birden fazla kalemi olan bir işin tek sevkiyatta tamamlanması özellikle önemlidir — ikinci bir sevkiyat gerektiren eksik bir kapsam, mesafe maliyetini iki katına çıkarır. Bu yüzden çok kalemli taleplerde keşif aşamasında listeyi olabildiğince eksiksiz çıkarmaya özen gösteriyoruz; sahada karşımıza çıkan ek bir ihtiyaç, mümkünse aynı ziyarette değerlendirilir.",
                    "İşletmenizin bildiği ama henüz bize iletmediği ek kalemler varsa, keşif öncesinde paylaşmanız, tek sevkiyatla tüm listenin kapanma ihtimalini artırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bursa merkezinden uzak olduğumuz için fiyatımız daha mı yüksek olur?",
                cevap:
                    "Mesafe, sevkiyat süresine yansıyan bir maliyet unsurudur ve bunu saklamıyoruz. Ancak talebinizi tarih esnek olarak iletirseniz, bölgeye yapılacak bir sonraki sevkiyatla eşleştirilir ve bu paylaşım sayesinde birim maliyet belirgin biçimde düşer. Kesin tarihli tekil bir talepte mesafe maliyeti tek başınıza taşınır. Hangi seçeneğin sizin için daha uygun olduğunu, talebinizi ilettiğinizde birlikte değerlendirebiliriz.",
            },
            {
                soru: "Tarihimiz kesin olmak zorunda değil; bunu nasıl bildirmeliyiz?",
                cevap:
                    "Talebinizi 'tarih esnek, şu aralıkta uygun' notuyla iletmeniz yeterli — biz bunu bölgeye yapılacak bir sonraki güzergâhla eşleştiririz ve eşleşme netleştiğinde size önceden haber veririz. Aralık ne kadar geniş tutulursa, uygun bir eşleşme bulma ihtimali o kadar artar ve birim maliyetiniz o kadar düşer.",
            },
            {
                soru: "Yıllık bakım dönemimiz belli; bunu ne zaman bildirmeliyiz?",
                cevap:
                    "Ne kadar erken bildirirseniz o kadar iyi. Planlı duruş bloğunuzu erken paylaştığınızda, sevkiyat programımızı bu tarihe göre önceden kurabilir, hatta mümkünse aynı döneme düşen başka bölge taleplerini de eşleştirebiliriz — bu, mesafe dezavantajını neredeyse tamamen ortadan kaldırır. Son anda gelen bir talepte ise mesafe, programımızın o anki yoğunluğuna göre bekleme süresini artırabilir.",
            },
            {
                soru: "Birden fazla kalemimiz var; hepsini tek seferde yaptırabilir miyiz?",
                cevap:
                    "Bu, mesafeli bir bölgede en verimli yaklaşımdır ve biz de bunu öneririz. Keşif aşamasında iş listesini olabildiğince eksiksiz çıkarmaya çalışırız; elinizdeki tüm kalemleri o aşamada paylaşırsanız, tek sevkiyatta tamamlama ihtimali artar. Sahada ek bir ihtiyaç ortaya çıkarsa, mümkünse aynı ziyarette değerlendiririz; mümkün değilse ikinci sevkiyat için ayrı bir tarih planlarız.",
            },
            {
                soru: "Acil bir arızamız var; Mustafakemalpaşa'ya ne kadar sürede ulaşırsınız?",
                cevap:
                    "En yakın uygun makineyi yönlendiririz, ama dürüst cevap, merkeze yakın bir bölgeye göre ulaşım süresinin doğal olarak daha uzun olabileceğidir. Tutulamayacak bir 'hemen geliriz' sözü vermek yerine gerçekçi bir varış saati söyleriz. İşin kapsamını ve aciliyetini ilk aramada net iletmeniz, doğru makinenin ilk seferde ve en kısa sürede yola çıkmasını sağlar.",
            },
            {
                soru: "Bölgemizdeki başka işletmelerle sevkiyatı paylaşmak mümkün mü?",
                cevap:
                    "Evet, bu tam olarak önerdiğimiz yöntem. Mustafakemalpaşa OSB'deki birden fazla işletmenin tarih esnek taleplerini aynı güzergâha yerleştirdiğimizde, makine bölgeye bir kez gelir ve birkaç işletmede sırayla çalışır; bu, hem bekleme süresini hem birim maliyeti düşürür. Talebinizi ilettiğinizde, bölgenizdeki benzer esnek taleplerle eşleştirme imkânını değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Mustafakemalpaşa'nın Bursa merkezine olan mesafesi ve ilçe OSB niteliği kamuya açık coğrafi bilgidir; güzergâh birleştirmesi, tarih esnekliği ve tek sevkiyat planlaması firma pratiğidir. Tesis ve marka adı verilmemiş, rakam uydurulmamıştır.",
    },
};
