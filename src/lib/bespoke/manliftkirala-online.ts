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

    // ─────────────────────────────────────────────────────────────────────
    // HİZMET SAYFALARI (/hizmet/[slug]) — 11 sabit slug
    //
    // Açı: .online uzantısının kendine özgü vaadi — telefon/WhatsApp üzerinden
    // HIZLI TEKLİF ve AYNI GÜN SEVKİYAT süreci. Yukarıdaki bolge:* kayıtları
    // "tedarik ritmi" (ana sanayi üretim planına bağlı bakım penceresi)
    // merceğini kullanıyor; bu hizmet sayfaları farklı bir eksende durur —
    // müşterinin talebi ilettiği andan makinenin sahada olduğu ana kadar
    // geçen SÜREÇ. Kardeş domainler bursamanlift-net.ts (OSB kapı prosedürü/
    // rota birleştirme) ve bursamanliftkiralama-net.ts (uzun dönem sözleşme
    // lojistiği) aynı hizmet slug'larını FARKLI merceklerle işlemiş; bu
    // dosya onlarla cümle/tablo/SSS paylaşmaz.
    //
    // nakliye-teslimat-hizmeti ve operatorlu-platform-kiralama ANA KONU
    // olarak en detaylı işlenmiştir (hızlı teklif sürecinin iki ayağı).
    // Yazım: 2026-08-14.
    // ─────────────────────────────────────────────────────────────────────

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli / Örümcek Platform — Hızlı Teklif ile Kiralama",
        giris:
            "Sepetli platform (örümcek platform) talepleri genellikle dar bir zaman penceresinde gelir: cephe boyama ekibi yarın sabah sahada olacaktır, ışıklık camı çatlamıştır ve hafta sonuna kalmadan kapatılmalıdır, ya da bir tabela firması vinç yerine daha çevik bir çözüm arar. manliftkirala.online'ın işleyiş mantığı tam bu darlığa göre kurulmuştur: telefon ya da WhatsApp üzerinden ölçü ve zemin bilgisini paylaştığınızda, aynı görüşme içinde uygun şase genişliği ve erişim mesafesine göre bir öneri ve fiyat alırsınız — form doldurup e-posta yanıtı beklemek yerine, konuşma bitmeden karar verebileceğiniz bir teklif. Örümcek platformun kendine özgü avantajı (dar kapıdan geçebilmesi, paletli tabanla düz olmayan zeminde durabilmesi) sahaya gitmeden önce fotoğrafla teyit edilir; makine, ölçüsü sahaya uymayan bir sürprizle değil, doğrulanmış bilgiyle yola çıkar. Bu sayfa, sepetli platform ihtiyacınızı hızlı teklif sürecine nasıl aktaracağınızı anlatıyor.",
        maddeler: [
            {
                baslik: "Telefonda hangi üç bilgi teklifi hızlandırır",
                metin:
                    "Bir sepetli platform talebinde fiyat ve uygunluk üç bilgiyle büyük ölçüde netleşir: hedef yükseklik (yaklaşık metre), zeminin türü (beton, toprak, parke taşı, eğimli) ve makinenin gireceği en dar geçit ölçüsü (kapı, koridor, bahçe kapısı genişliği). Bu üçü telefonda veya WhatsApp'ta paylaşıldığında, uygun şase genişliğine sahip modeller elenir ve size sahaya uyan seçenekler sunulur. Eksik bilgiyle verilen bir teklif, sahada makinenin sığmaması riskini taşır; bu yüzden eksik bilgi varsa teklif öncesi mutlaka sorarız.",
            },
            {
                baslik: "WhatsApp'tan fotoğrafla ön değerlendirme",
                metin:
                    "Sesli anlatımın yetmediği durumlarda (örneğin dar bir bahçe girişi, engebeli bir avlu) WhatsApp üzerinden gönderilen 2-3 fotoğraf, telefon görüşmesinden çok daha hızlı netlik sağlar. Giriş kapısının, çalışılacak cephenin ve varsa engelin (ağaç, direk, kablo) fotoğrafı, doğru şase genişliğini ve erişim yönünü sahaya gitmeden belirlememizi sağlar. Bu ön değerlendirme, teklif aşamasında yanlış makine önerme riskini önemli ölçüde azaltır.",
            },
            {
                baslik: "Aynı gün sevkiyat için zamanlama gerçeği",
                metin:
                    "Aynı gün sevkiyat, uygun makinenin o an müsait olmasına ve talebin gün içinde erken saatte gelmesine bağlıdır — bunu dürüstçe söylüyoruz çünkü tutulamayacak bir söz vermek istemiyoruz. Sabah erken saatte gelen taleplerde aynı gün teslim ihtimali yüksektir; öğleden sonra geç gelen bir talepte ertesi sabah ilk iş olarak planlama daha gerçekçidir. Aciliyetinizi belirttiğinizde, en yakın uygun makineyi ve gerçekçi bir saat aralığını ilk görüşmede söyleriz.",
            },
            {
                baslik: "Dar geçitte örümcek platformun avantajı",
                metin:
                    "Standart makaslı veya eklemli platformların giremediği dar bahçe kapıları, apartman aralıkları veya iç avlularda örümcek platformun katlanabilir kolları ve dar şasesi devreye girer. Paletli tabanı sayesinde düz olmayan, hafif eğimli zeminlerde de destek ayaklarıyla dengelenerek çalışabilir. Bu esneklik, standart bir makas platformun reddedeceği pek çok sahayı çözüme kavuşturur — ama şase genişliği yine de bir alt sınıra sahiptir, bu yüzden en dar geçit ölçüsünü mutlaka paylaşmanızı isteriz.",
            },
            {
                baslik: "Teslimat sonrası hızlı kullanım başlangıcı",
                metin:
                    "Makine sahaya ulaştığında kısa bir kullanım bilgilendirmesi yapılır (kumanda, acil durdurma, destek ayaklarının konumlandırılması) ve operatörünüz aynı gün çalışmaya başlayabilir. Operatörlü talep edildiyse, operatörümüz makineyle birlikte gelir ve ek bir bekleme süresi oluşmaz. Amacımız, sevkiyattan sonraki ilk saatte işin fiilen başlamış olmasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hızlı teklif için bilgi kontrol listesi",
                paragraflar: [
                    "Aşağıdaki bilgiler telefonda veya WhatsApp'ta paylaşıldığında, sepetli platform teklifi genellikle tek görüşmede netleşir.",
                ],
                tablo: {
                    basliklar: ["Bilgi", "Neden gerekli", "Nasıl paylaşılır", "Eksikse ne olur"],
                    satirlar: [
                        ["Hedef yükseklik", "Doğru model sınıfını belirler", "Yaklaşık metre, sesli", "Sahada model değişikliği gerekebilir"],
                        ["Zemin türü", "Destek ayağı ve lastik seçimini belirler", "Sesli tarif veya fotoğraf", "Sahada zemine uygun olmayan makine riski"],
                        ["En dar geçit ölçüsü", "Şase genişliği sınırını belirler", "Metre veya fotoğraf", "Makine kapıdan geçemeyebilir"],
                        ["Engel varlığı (ağaç, kablo)", "Erişim yönünü belirler", "Fotoğraf", "Sahada rota değişikliği gerekebilir"],
                        ["Talep saati / aciliyet", "Sevkiyat sırasını belirler", "Sesli, ilk görüşmede", "Gerçekçi olmayan beklenti oluşabilir"],
                    ],
                },
            },
            {
                baslik: "Telefonla teklif ile sahada teklif farkı",
                paragraflar: [
                    "Basit ve tek katlı hedeflerde (örneğin tek bir cephe noktası, standart zemin) telefonla verilen teklif genellikle nihai fiyattan büyük sapma göstermez. Ama karmaşık sahalarda — birden fazla erişim noktası, belirsiz zemin durumu, dar ve dönemeçli bir giriş güzergâhı — telefonla verilen rakam bir ön tahmindir ve makinenin sahaya varışında kısa bir doğrulama yapılır. Bu doğrulama genellikle rakamı büyük ölçüde değiştirmez, ama şeffaflık adına baştan böyle söyleriz.",
                    "Hızlı teklif sürecinin amacı sizi karanlıkta bırakmadan hızlı karar verdirmektir; belirsizlik varsa bunu gizlemek yerine açıkça belirtir, gerekirse fotoğraf isteyerek belirsizliği görüşme sırasında kapatmaya çalışırız.",
                ],
            },
            {
                baslik: "Kısa süreli ve tek günlük taleplerde pratik yaklaşım",
                paragraflar: [
                    "Sepetli platform taleplerinin önemli bir kısmı tek günlük veya birkaç saatlik kısa işlerdir (ışıklık değişimi, tekil tabela montajı, küçük bir cephe onarımı). Bu tür kısa taleplerde süreci ağırlaştırmadan, telefonda verilen bilgiyle doğrudan sevkiyat planına geçeriz — uzun bir sözleşme süreci veya çok adımlı onay beklenmez.",
                    "Kısa süreli talebinizin ne zaman biteceğini baştan belirtmeniz, makinenin bir sonraki talebe ne zaman yönlendirilebileceğini bizim için netleştirir ve bu da genel sevkiyat akışını hızlandırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Telefonda fiyat alabilir miyim, yoksa sahaya gelip mi bakmanız gerekir?",
                cevap:
                    "Çoğu durumda evet, telefonda veya WhatsApp'ta fiyat alabilirsiniz. Hedef yükseklik, zemin türü ve en dar geçit ölçüsünü paylaştığınızda, uygun model ve fiyat aralığını aynı görüşmede söyleriz. Karmaşık sahalarda (birden fazla erişim noktası, belirsiz zemin) bu rakam ön tahmindir ve sahada kısa bir doğrulama yapılır; ama basit ve standart taleplerin büyük çoğunluğunda telefonla verilen fiyat nihai fiyattır. Şüpheli bir nokta varsa bunu size baştan söyleriz, sürpriz fatura çıkarmayız.",
            },
            {
                soru: "WhatsApp'tan fotoğraf göndersem işe yarar mı?",
                cevap:
                    "Kesinlikle yarar, hatta sesli anlatımdan daha hızlı netlik sağlar. Giriş kapısının, çalışılacak noktanın ve varsa engelin (ağaç, direk, kablo, eğim) fotoğrafı, doğru şase genişliğini ve erişim yönünü telefonla anlatmaya göre çok daha net gösterir. Özellikle dar bahçe girişleri veya engebeli avlularda fotoğraf, sahaya gitmeden 'bu makine buraya girer mi' sorusunu büyük ölçüde cevaplar.",
            },
            {
                soru: "Aynı gün sevkiyat garantisi veriyor musunuz?",
                cevap:
                    "Garantili bir söz vermiyoruz çünkü bu, o anki makine müsaitliğine ve talebin geldiği saate bağlıdır — tutulamayacak bir söz vermektense dürüst bir tahmin vermeyi tercih ediyoruz. Sabah erken gelen taleplerde aynı gün teslim ihtimali yüksektir; günün ilerleyen saatlerinde gelen talepte genellikle ertesi sabah ilk iş olarak planlanır. Aciliyetinizi ilk görüşmede belirtirseniz, o anki en gerçekçi zaman aralığını hemen söyleriz.",
            },
            {
                soru: "Bahçe kapımız çok dar, standart platform giremiyor; ne öneriyorsunuz?",
                cevap:
                    "Bu tam olarak örümcek platformun çözdüğü durum — katlanabilir kollar ve dar şase sayesinde standart makaslı platformların giremediği dar geçitlerden geçebilir. En dar geçit ölçüsünü (kapı genişliği, koridor darlığı) paylaşmanız, uygun model sınıfını belirlememiz için yeterli. Şase genişliğinin de bir alt sınırı olduğunu unutmayın; ölçü aşırı darsa (örneğin standart bir kapı genişliğinin çok altında) bunu size dürüstçe söyler, alternatif erişim noktası önerebiliriz.",
            },
            {
                soru: "Zeminimiz düz değil, hafif eğimli ve toprak; bu bir sorun mu?",
                cevap:
                    "Genellikle sorun değil. Örümcek platformun paletli tabanı ve destek ayakları, düz olmayan ve toprak zeminlerde çalışmak için tasarlanmıştır — destek ayakları eğimi dengeler. Ancak eğim veya zemin yumuşaklığı belirli bir sınırı aşıyorsa (örneğin aşırı bataklık bir zemin) bunu telefonda veya fotoğrafla değerlendirir, gerekirse alternatif bir çözüm öneririz. Zemin türünü baştan paylaşmanız, sahada uygun olmayan makine riskini ortadan kaldırır.",
            },
            {
                soru: "Operatörlü mü istemeliyim, kendim mi kullanmalıyım?",
                cevap:
                    "Bu, işin sıklığına ve ekibinizin deneyimine bağlı bir tercih; her iki seçenek de sunulur. Tek seferlik veya kısa süreli işlerde operatörlü kiralama, öğrenme süresi olmadan işe başlamayı sağlar ve operatörümüz makineyle birlikte gelir. Ekibinizde platform kullanımına aşina personel varsa operatörsüz seçenek maliyeti düşürür. Talebinizi iletirken bu tercihi belirtirseniz, teklif buna göre şekillenir; kararsızsanız, işin niteliğine göre önerimizi paylaşırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek platformun teknik özellikleri (paletli taban, katlanabilir kol, dar şase) üretici genel bilgisidir. Hızlı teklif süreci, WhatsApp fotoğraf değerlendirmesi ve aynı gün sevkiyat koşulları firma pratiğidir. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Manlift Nakliye ve Teslimat — Telefonla Teklif, Aynı Gün Sevkiyat",
        giris:
            "manliftkirala.online adının kendisi bir vaat taşır: kiralama sürecinin başından teslimata kadar mümkün olduğunca uzaktan, hızlı ve dijital kanaldan yürümesi. Nakliye-teslimat hizmetimiz bu vaadin fiilen test edildiği aşamadır — çünkü teklif ne kadar hızlı verilirse verilsin, makinenin sahada olmadığı sürece iş başlamaz. Süreç şöyle işler: telefon veya WhatsApp üzerinden talebiniz alınır, ölçü ve zemin bilgisiyle uygun makine belirlenir, sevkiyat aracı planlanır ve makine, mümkün olan en kısa sürede kapınıza gelir. Bu sürecin her adımında amacımız, sizi bir sonraki adımı beklemek zorunda bırakmadan ilerletmektir — form doldurup gün sonu yanıtı beklemek yerine, konuşma biterken sevkiyat saati elinizde olur. Bu sayfa, nakliye sürecinin her adımını ve gerçekçi zamanlama beklentilerini detaylı biçimde anlatıyor; bu hizmetin doğru çalışması, sitenin genel vaadinin doğru çalışması demektir.",
        maddeler: [
            {
                baslik: "Talep alma: telefon mu, WhatsApp mı, form mu",
                metin:
                    "Üç kanal da açıktır ama hız sıralaması nettir: telefon görüşmesi en hızlı karara ulaştırır çünkü karşılıklı soru-cevapla eksik bilgi anında tamamlanır. WhatsApp, özellikle fotoğraf paylaşımı gerektiğinde telefonu tamamlar — sesle anlatılması zor bir zemin ya da geçit ölçüsü, tek bir fotoğrafla netleşir. Web formu ise gün içinde meşgul olup daha sonra dönmek isteyenler için pratiktir, ama yanıt süresi doğal olarak telefon veya WhatsApp'a göre biraz daha uzundur. Aciliyetiniz varsa telefon veya WhatsApp'ı öneririz.",
            },
            {
                baslik: "Sevkiyat kararını belirleyen üç faktör",
                metin:
                    "Bir talebin ne zaman sevk edileceği üç şeye bağlıdır: talebin geldiği saat (sabah erken talep, aynı gün sevkiyat ihtimalini artırır), uygun makinenin o an müsaitliği (aynı sınıf makine başka bir sahada çalışıyorsa sıradaki uygun makine yönlendirilir) ve sahaya mesafe (yakın bölgelere sevkiyat süresi doğal olarak kısadır). Bu üç faktörü ilk görüşmede değerlendirip size gerçekçi bir saat aralığı söyleriz — 'birazdan geliriz' gibi belirsiz bir ifade yerine, somut bir zaman dilimi.",
            },
            {
                baslik: "Sevkiyat aracı ve indirme noktası planlaması",
                metin:
                    "Makine boyutuna göre uygun taşıyıcı araç (kamyon üstü, römork, lowbed) belirlenir ve sahaya en yakın, güvenli indirme noktası önceden konuşulur. Dar sokak, düşük tesisli geçit veya sınırlı manevra alanı gibi durumlar telefon görüşmesinde sorulur; bu bilgi eksik kaldığında sahada aracın manevra yapamaması gibi gecikmeler yaşanabilir. Sokak genişliği veya giriş kısıtı konusunda emin değilseniz, fotoğraf göndermeniz en pratik çözümdür.",
            },
            {
                baslik: "Teslim tutanağı ve makine durumu kaydı",
                metin:
                    "Makine sahaya ulaştığında kısa bir teslim tutanağı düzenlenir: sayaç/saat değeri, görünür kozmetik durum ve teslim alan kişinin bilgisi. Bu belge, hem sizin hem bizim için kiralama süresi boyunca referans noktasıdır ve iade sırasındaki durumla karşılaştırılır. Tutanak süreci birkaç dakika sürer ve sevkiyatın doğal bir parçasıdır; sürpriz bir evrak yükü getirmez.",
            },
            {
                baslik: "İade süreci: sevkiyatın ayna görüntüsü",
                metin:
                    "Kiralama süresi dolduğunda veya erken iade talep ettiğinizde, süreç girişin tersine işler: iade tarihini bildirirsiniz, taşıyıcı araç planlanır, makine alınırken ikinci bir durum tutanağı tutulur. İki tutanak arasında normal aşınma dışında bir fark varsa bu noktada birlikte değerlendirilir. İade talebinizi mümkün olduğunca erken bildirmeniz, sevkiyat aracının programımıza sorunsuz yerleşmesini sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Talep saatine göre gerçekçi sevkiyat beklentisi",
                paragraflar: [
                    "Aynı gün sevkiyat ihtimali, talebin geldiği saate ve makine müsaitliğine göre değişir. Aşağıdaki tablo genel bir beklenti çerçevesi sunar; kesin saat, telefon görüşmesinde teyit edilir.",
                ],
                tablo: {
                    basliklar: ["Talep saati", "Aynı gün sevkiyat ihtimali", "Alternatif", "Önerilen kanal"],
                    satirlar: [
                        ["Sabah erken (mesai başı)", "Yüksek", "—", "Telefon"],
                        ["Öğle civarı", "Orta — müsaitliğe bağlı", "Aynı gün geç saat veya ertesi sabah", "Telefon / WhatsApp"],
                        ["Öğleden sonra geç", "Düşük", "Ertesi sabah ilk iş", "WhatsApp (gece de yanıtlanabilir)"],
                        ["Acil / güvenlik riski", "Öncelikli değerlendirme", "En yakın uygun makine yönlendirilir", "Telefon (doğrudan arama)"],
                        ["Planlı, tarih esnek", "Programa göre en uygun gün", "Erken bildirimle optimum eşleşme", "WhatsApp / form"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat gecikmesini önleyen bilgi paylaşımı",
                paragraflar: [
                    "Sevkiyat sürecinde en sık karşılaşılan gecikme nedeni, sahaya varan aracın beklenmedik bir erişim engeliyle karşılaşmasıdır — dar bir sokak, kapalı bir kapı, bulunamayan bir adres. Bunların büyük kısmı, talep aşamasında birkaç dakikalık ek bilgi paylaşımıyla önlenebilir: tam adres, varsa özel giriş talimatı, kapı kodu veya irtibat kişisinin telefonu.",
                    "WhatsApp üzerinden konum paylaşımı (canlı konum veya harita pini), özellikle sanayi bölgelerinde parsel numaralandırmasının karışık olduğu durumlarda sözlü adres tarifinden çok daha güvenilirdir. Bu küçük ek adım, sahaya varış süresini belirgin biçimde kısaltır.",
                ],
            },
            {
                baslik: "Çoklu teslimat ve rota birleştirme",
                paragraflar: [
                    "Tarihi esnek olan talepler için, aynı gün veya yakın günlerde aynı bölgeye giden başka bir sevkiyatla birleştirme imkânı değerlendirilir. Bu, özellikle merkeze uzak bölgelerdeki taleplerde nakliye maliyetini düşürür çünkü taşıyıcı araç bölgeye zaten gidiyorsa, ek bir müşteriyi aynı güzergâhta teslim etmek marjinal bir maliyet artışıdır.",
                    "Bu tür bir eşleştirme istiyorsanız, talebinizi iletirken 'tarih esnek' notunu eklemeniz yeterlidir; kesin tarihi olan acil talepler ise standart programa göre en hızlı şekilde planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Telefonla arasam ne kadar sürede sevkiyat saati öğrenirim?",
                cevap:
                    "Genellikle aynı görüşme içinde. Hedef yükseklik, zemin ve erişim bilgisini paylaştığınızda, o anki makine müsaitliğini kontrol eder ve size gerçekçi bir saat aralığı söyleriz. Bazı durumlarda (örneğin sahaya özel bir erişim sorusu varsa) birkaç dakikalık bir teyit araması gerekebilir, ama bu istisnadır — çoğu talepte tek görüşme yeterlidir.",
            },
            {
                soru: "Aynı gün teslimat için en geç saat kaça kadar aramalıyım?",
                cevap:
                    "Kesin bir saat vermek yerine dürüst olalım: sabah erken gelen talepler aynı gün teslimat için en yüksek şansa sahiptir, günün ilerleyen saatlerinde gelen talepler ise makinenin ve taşıyıcı aracın o anki programına bağlıdır. Aciliyetiniz varsa öğleden sonra bile arayın — bazen aynı gün, bazen ertesi sabah ilk iş olarak planlanır; hangisi mümkünse ilk görüşmede söyleriz, boş vaat vermeyiz.",
            },
            {
                soru: "Sahamız dar bir sokakta, taşıyıcı araç girebilir mi bilmiyorum; ne yapmalıyım?",
                cevap:
                    "En pratik çözüm WhatsApp'tan sokağın ve giriş noktasının fotoğrafını göndermenizdir. Bu, sözlü tarife göre çok daha net bir değerlendirme sağlar ve gerekirse alternatif bir indirme noktası veya daha küçük şaseli bir taşıyıcı önerebiliriz. Bu bilgiyi sevkiyat öncesi netleştirmek, aracın sahada manevra sorunu yaşayıp geri dönmesi gibi gecikmeleri önler.",
            },
            {
                soru: "Teslim tutanağı zorunlu mu, imzalamak zorunda mıyım?",
                cevap:
                    "Evet, her teslimde kısa bir teslim tutanağı düzenlenir ve bu, sizin de yararınızadır — makinenin teslim anındaki durumu (sayaç, kozmetik durum) kayıt altına alınır ve iade sırasında bu kayıtla karşılaştırılır. Tutanak süreci birkaç dakika sürer, sevkiyatın standart bir parçasıdır. İmzalayan kişinin sahada yetkili biri olması yeterlidir; ayrıca bir belge veya evrak süreci gerekmez.",
            },
            {
                soru: "İade tarihini ne kadar önce bildirmeliyim?",
                cevap:
                    "Ne kadar erken bildirirseniz, taşıyıcı araç programımıza o kadar sorunsuz yerleşir. Aynı gün veya ertesi gün iade talepleri genellikle karşılanabilir, ama birkaç gün önceden bildirim, hem sizin için daha esnek bir saat seçme imkânı yaratır hem de bizim için planlamayı kolaylaştırır. İade sırasında da kısa bir durum tutanağı tutulur; bu, teslim anındaki kayıtla karşılaştırılır.",
            },
            {
                soru: "Bölgemiz merkeze uzak, nakliye maliyeti yüksek mi olur?",
                cevap:
                    "Mesafeye bağlı olarak nakliye bedeli değişebilir, ama tarihi esnek tutarsanız bu maliyeti düşürme imkânı vardır. Talebinizi 'tarih esnek' notuyla iletirseniz, aynı bölgeye giden başka bir sevkiyatla birleştirme imkânını değerlendiririz — taşıyıcı araç zaten o güzergâha gidiyorsa, ek teslimat marjinal bir maliyettir ve bu fark size yansır. Acil ve kesin tarihli talepler ise standart nakliye bedeliyle en hızlı şekilde planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Nakliye süreci adımları (talep alma, sevkiyat kararı, teslim tutanağı, iade) firma pratiğidir. Aynı gün sevkiyat, telefon/WhatsApp kanal hızı ve rota birleştirme koşulları genel işleyiş bilgisidir; tesis adı, mesafe rakamı ve kapasite uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift ve İstifleme — Hızlı Teklif ile Kiralama",
        giris:
            "Forklift talepleri çoğu zaman platform talepleriyle aynı anda, tek bir sevkiyat operasyonunun parçası olarak gelir: bir malzeme indirilecek, bir palet yükseğe kaldırılacak veya bir depo düzenlemesi tek günde bitirilecektir. manliftkirala.online üzerinden forklift talebi de aynı hızlı teklif mantığıyla işler — yük ağırlığı, kaldırma yüksekliği ve zemin bilgisini telefonda veya WhatsApp'ta paylaştığınızda, uygun kapasitedeki forklift ve fiyat aynı görüşmede netleşir. Platform ve forklift ihtiyacınız aynı anda varsa, tek aramada ikisini birlikte planlarız ve mümkünse aynı sevkiyatta sahaya ulaştırırız — bu, hem nakliye maliyetini böler hem de iki ayrı koordinasyon yükünü tek görüşmeye indirir. Bu sayfa, forklift kiralama sürecinin hızlı teklif akışına nasıl uyduğunu ve dikkat edilmesi gereken kapasite/zemin uyumunu anlatıyor.",
        maddeler: [
            {
                baslik: "Kapasite belirlemede telefonla hızlı doğrulama",
                metin:
                    "Forklift kapasitesi yük ağırlığı, kaldırma yüksekliği ve yükün merkez mesafesine (yükün çatal ucundan uzaklığı) göre belirlenir; bu üçü telefonda paylaşıldığında uygun kapasite sınıfı hızla netleşir. Yaklaşık bir tahminle aranmanız sorun değildir — 'yaklaşık bir palet ağırlığında, iki kat yüksekliğe kadar' gibi bir tarif bile bize başlangıç noktası verir; kesin rakamı netleştirmek için birkaç ek soru sorarız.",
            },
            {
                baslik: "Zemin uyumu: iç mekan mı, dış saha mı",
                metin:
                    "İç mekan (depo, fabrika içi) ve dış saha (açık alan, düzensiz zemin) forklift ihtiyaçları farklı lastik ve şase özelliği gerektirir; bu ayrımı ilk görüşmede sorarız. Kapalı, düz beton zeminde çalışan bir dolgu lastikli forklift, engebeli dış sahada aynı verimi göstermeyebilir. Zemin türünü baştan belirtmeniz, sahaya uygun olmayan makine gönderme riskini ortadan kaldırır.",
            },
            {
                baslik: "Platform ile birlikte tek sevkiyat planlaması",
                metin:
                    "Aynı sahada hem forklift hem platform ihtiyacı varsa (örneğin malzeme indirme forkliftle, yükseğe montaj platformla yapılacaksa), tek aramada ikisini birlikte planlarız. Uygun taşıyıcı araç iki makineyi aynı seferde taşıyabiliyorsa, nakliye bedeli tek sefere yayılır ve koordinasyon tek görüşmede tamamlanır — iki ayrı talep, iki ayrı bekleme süresi oluşturmaz.",
            },
            {
                baslik: "Operatörlü forklift talebinde ehliyet/belge kontrolü",
                metin:
                    "Operatörsüz forklift talebinde, kullanacak personelin geçerli forklift operatörlük belgesine sahip olması beklenir; bu, hem güvenlik hem yasal sorumluluk açısından önemlidir. Belge durumu konusunda emin değilseniz, operatörlü seçeneği değerlendirmenizi öneririz — bu durumda operatör bizden gelir ve belge sorunu ortadan kalkar. Talep sırasında bu tercihi netleştirmeniz, sevkiyat planını doğru kurmamızı sağlar.",
            },
            {
                baslik: "Kısa süreli istifleme işlerinde hızlı planlama",
                metin:
                    "Tek günlük veya birkaç saatlik istifleme işlerinde (bir konteyner boşaltma, bir palet düzenlemesi) süreci ağırlaştırmadan doğrudan sevkiyat planına geçeriz. Bu tür kısa taleplerde işin bitiş saatini baştan belirtmeniz, makinenin bir sonraki talebe ne zaman yönlendirilebileceğini netleştirir ve genel akışı hızlandırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapasite sınıfına göre hızlı eşleştirme",
                paragraflar: [
                    "Telefonda paylaşılan yaklaşık bilgiyle forklift kapasitesi genellikle şu şekilde eşleştirilir.",
                ],
                tablo: {
                    basliklar: ["Yük tanımı (yaklaşık)", "Ortam", "Öncelikli soru", "Not"],
                    satirlar: [
                        ["Hafif palet, tek kat", "İç mekan, düz beton", "Kaldırma yüksekliği", "Standart dolgu lastik yeterli"],
                        ["Ağır palet, çok kat raf", "İç mekan, dar koridor", "Koridor genişliği + yükseklik", "Dar şaseli model gerekebilir"],
                        ["Konteyner/büyük hacim", "Dış saha, düz zemin", "Yük ağırlığı, merkez mesafesi", "Yüksek kapasite sınıfı"],
                        ["Engebeli/düzensiz zemin", "Dış saha, açık alan", "Zemin fotoğrafı", "Arazi tipi lastik gerekebilir"],
                        ["Platformla birlikte", "Değişken", "İki iş aynı gün mü", "Tek sevkiyatla planlanabilir"],
                    ],
                },
            },
            {
                baslik: "Yaklaşık bilgiyle başlamaktan çekinmeyin",
                paragraflar: [
                    "Forklift talebinde tam teknik rakamları bilmemeniz süreci durdurmaz. 'Bir palet ağırlığında', 'iki-üç raf katı yüksekliğinde' gibi günlük dille yapılan bir tarif, bizim için yeterli başlangıç noktasıdır. Kapasiteyi netleştirmek için birkaç tamamlayıcı soru sorarız ve gerekirse fotoğraf isteriz — teknik terim bilmeniz beklenmez.",
                    "Bu yaklaşım, hızlı teklif sürecinin temel mantığıyla uyumludur: karar vermeniz için gereken bilgiyi biz sizden çıkarırız, sizin önceden teknik hazırlık yapmanız gerekmez.",
                ],
            },
            {
                baslik: "Operatörlü seçeneğin getirdiği hız",
                paragraflar: [
                    "Operatörlü forklift talebinde, makineyle birlikte gelen operatör sahada doğrudan işe başlar; ayrı bir eğitim veya alışma süresi gerekmez. Bu, özellikle tek seferlik veya nadiren forklift kullanan işletmeler için zaman kazandırır — makine geldiğinde iş de aynı anda başlar.",
                    "Sık forklift ihtiyacı olan işletmeler için operatörsüz seçenek genellikle daha ekonomiktir, çünkü kendi personelinizin deneyimi tekrar eden işlerde zaten yeterlidir. Talebinizin sıklığına göre hangi seçeneğin daha uygun olduğunu görüşme sırasında birlikte değerlendirebiliriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift kapasitesini tam bilmiyorum, yine de teklif alabilir miyim?",
                cevap:
                    "Evet, kesinlikle. Günlük dille yaptığınız bir tarif ('bir palet ağırlığında', 'iki kat raf yüksekliğine kadar') bize başlangıç noktası verir; telefonda birkaç tamamlayıcı soruyla kapasiteyi birlikte netleştiririz. Teknik rakam bilmeniz şart değildir — bu bilgiyi doğru sınıfa çevirmek bizim işimiz. Emin olmadığınız bir nokta varsa fotoğraf göndermeniz de işe yarar.",
            },
            {
                soru: "Hem platform hem forklift ihtiyacımız var, ayrı ayrı mı aramalıyız?",
                cevap:
                    "Hayır, tek aramada ikisini birlikte planlayabiliriz. İhtiyaçlarınızı aynı görüşmede paylaştığınızda, uygun taşıyıcı araç iki makineyi aynı seferde taşıyabiliyorsa nakliye tek sefere yayılır ve koordinasyon tek noktadan yürür. Bu, hem maliyeti düşürür hem de iki ayrı bekleme süresi oluşmasını önler.",
            },
            {
                soru: "Operatörsüz forklift kiralarsam ehliyet/belge sormayacak mısınız?",
                cevap:
                    "Soracağız, çünkü bu hem güvenlik hem yasal sorumluluk açısından önemli. Operatörsüz talep ederken kullanacak personelin geçerli forklift operatörlük belgesine sahip olması beklenir. Belge durumunuz konusunda emin değilseniz, operatörlü seçeneği önermemiz mümkün — bu durumda operatörümüz makineyle birlikte gelir ve belge sorunu ortadan kalkar.",
            },
            {
                soru: "Dış sahada, engebeli bir zeminde kullanacağız; standart forklift yeter mi?",
                cevap:
                    "Zemin türünü baştan belirtmeniz önemli çünkü iç mekan tipi bir forklift, engebeli dış sahada aynı verimi göstermeyebilir. Zemin durumunu (toprak, çakıl, eğim) telefonda tarif ederseniz veya fotoğraf gönderirseniz, dış saha koşullarına uygun lastik ve şase özelliğine sahip bir model öneririz. Bu ayrımı önceden yapmak, sahada uygun olmayan makine göndermek gibi bir gecikmeyi önler.",
            },
            {
                soru: "Tek günlük, birkaç saatlik bir istifleme işi için de arayabilir miyim?",
                cevap:
                    "Evet, kısa süreli talepler için süreci ağırlaştırmıyoruz. İşin ne zaman biteceğini baştan belirtirseniz, makinenin bir sonraki talebe ne zaman yönlendirilebileceğini netleştirmiş oluruz ve bu genel sevkiyat akışını da hızlandırır. Tek günlük işlerde uzun bir sözleşme süreci veya çok adımlı onay beklemezsiniz — telefon görüşmesi genellikle yeterlidir.",
            },
            {
                soru: "Forklift ile platformu aynı sevkiyatta getirmek maliyeti nasıl etkiler?",
                cevap:
                    "Genellikle olumlu etkiler çünkü tek taşıyıcı aracın iki makineyi aynı seferde taşıması, nakliye bedelinin iki ayrı sevkiyata bölünmesini önler. Bu birleştirme, makinelerin boyutuna ve taşıyıcı araç kapasitesine bağlıdır; talebinizi ilettiğinizde bu imkânı değerlendirir, mümkünse tek sevkiyat planı sunarız. Mümkün olmadığı durumlarda ise ayrı sevkiyat için en yakın uygun zamanı birlikte belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift kapasite/zemin uyumu ve operatörlük belgesi gereksinimi genel işleyiş bilgisidir. Hızlı teklif süreci ve platform ile birleşik sevkiyat imkânı firma pratiğidir. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) — Hızlı Teklif ile Kiralama",
        giris:
            "Eklemli platform (boom) talepleri, düz bir yükseklik çözümünden çok bir 'ulaşılabilirlik' sorusudur: hedef doğrudan üstte değil, bir engelin arkasında, bir çıkıntının ötesinde veya bir yapının içine doğru uzanan bir noktadadır. Bu yüzden eklemli platform teklifinde standart yükseklik sorusu tek başına yetmez — kolun yatay erişim mesafesi ve dönüş açısı da işin içine girer. manliftkirala.online üzerinden bu bilgiyi telefonda veya WhatsApp'ta (mümkünse bir fotoğrafla) paylaştığınızda, hedefin gerçekten kol erişimi içinde olup olmadığını aynı görüşmede değerlendirir ve doğru model sınıfını önereriz. Bu sayfa, eklemli platform talebinde hangi bilgilerin belirleyici olduğunu ve hızlı teklif sürecinde nelere dikkat edildiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Yükseklik yetmez: yatay erişim mesafesi de gerekli",
                metin:
                    "Eklemli platformun temel özelliği, sepetin yalnızca yukarı değil aynı zamanda yana ve öne doğru uzanabilmesidir. Bu yüzden telefonda yalnızca 'kaç metre yükseğe çıkacağız' sorusu yeterli değildir; hedefin, platformun konumlanacağı noktadan ne kadar yatay mesafede ve hangi yönde olduğu da belirleyicidir. Bir çıkıntının arkasındaki veya bir avlunun içindeki hedef, düz yükseklikten çok bu yatay erişim hesabına göre değerlendirilir.",
            },
            {
                baslik: "Fotoğrafla erişim değerlendirmesi",
                metin:
                    "Sözle tarif edilmesi zor olan erişim engelleri (bir çatı çıkıntısı, bir ağaç dalı, bir elektrik hattı) fotoğrafla çok daha net anlaşılır. WhatsApp üzerinden gönderilen bir-iki fotoğraf, kolun hangi açıyla ve ne kadar uzanarak hedefe ulaşabileceğini önceden değerlendirmemizi sağlar; bu, sahada 'makine hedefe ulaşamadı' gibi bir sürprizi önler.",
            },
            {
                baslik: "Zemin taşıma kapasitesi ve makine ağırlığı",
                metin:
                    "Eklemli platformlar, sepetli platformlara göre genellikle daha ağırdır ve zeminin bu ağırlığı taşıyabilmesi gerekir. Asfalt veya sağlam beton zeminlerde bu genellikle sorun değildir, ama yumuşak toprak veya taze dökülmüş zeminlerde ek değerlendirme gerekebilir. Zemin türünü ve varsa yakın zamanda yapılmış bir zemin çalışmasını (yeni asfalt, yeni beton) belirtmeniz, doğru model ve destek çözümünü belirlememizi sağlar.",
            },
            {
                baslik: "Aynı gün sevkiyat için model müsaitliği",
                metin:
                    "Eklemli platform sınıfı, sepetli platforma göre genellikle daha az sayıda modelden oluşur, bu yüzden aynı gün müsaitlik zaman zaman standart sepetli platforma göre daha sıkı olabilir. Bunu dürüstçe söylüyoruz: talebinizi erken saatte iletmeniz, uygun modelin o gün müsait olma ihtimalini artırır. Müsaitlik kısıtlıysa, en yakın uygun zamanı ve varsa alternatif model önerisini ilk görüşmede paylaşırız.",
            },
            {
                baslik: "Dış cephe ve endüstriyel montaj işlerinde tipik kullanım",
                metin:
                    "Eklemli platform talepleri sıklıkla dış cephe boyama, tabela montajı, endüstriyel çelik konstrüksiyon montajı veya ağaç/bahçe bakımı gibi hedefin engelin ötesinde olduğu işlerden gelir. Bu işlerin ortak noktası, sepetin doğrudan altına değil, yandan veya üstten dolanarak hedefe ulaşması gerekliliğidir — bu yüzden telefon görüşmesinde işin niteliğini kısaca anlatmanız, doğru soru setini sormamıza yardımcı olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Erişim tipine göre bilgi ihtiyacı",
                paragraflar: [
                    "Eklemli platform teklifinde hangi bilgi hangi erişim tipi için kritik, aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Erişim tipi", "Kritik bilgi", "En iyi paylaşım yolu", "Risk (bilgi eksikse)"],
                    satirlar: [
                        ["Doğrudan üst (engelsiz)", "Yükseklik", "Sesli, yaklaşık metre", "Düşük"],
                        ["Çıkıntının arkası", "Yatay mesafe + yön", "Fotoğraf + sesli tarif", "Orta-yüksek"],
                        ["Avlu/iç bahçe içi", "Giriş genişliği + hedef konumu", "Fotoğraf zorunlu", "Yüksek"],
                        ["Elektrik hattı yakını", "Hat mesafesi", "Fotoğraf + net uyarı", "Güvenlik riski"],
                        ["Yumuşak/yeni zemin", "Zemin türü, yaş", "Sesli tarif", "Makine ağırlığı taşıma riski"],
                    ],
                },
            },
            {
                baslik: "Kol erişiminin sınırlarını anlamak",
                paragraflar: [
                    "Her eklemli platform modelinin kendine özgü bir 'erişim zarfı' vardır — kolun ne kadar yükseğe çıkabildiği ve aynı anda ne kadar yatay uzanabildiğinin birlikte oluşturduğu sınır. Bir model maksimum yüksekliğe çıktığında yatay erişimi azalır, tam yatay uzandığında ise maksimum yüksekliğe ulaşamayabilir. Bu yüzden 'hem çok yüksek hem çok uzak' bir hedef, tek bir modelle her zaman çözülemeyebilir.",
                    "Hedefin hem yükseklik hem yatay mesafesini paylaştığınızda, bu erişim zarfına uyan modeli seçer, uymuyorsa bunu size dürüstçe söyler ve alternatif bir yaklaşım (farklı konumlanma noktası, farklı model sınıfı) öneririz.",
                ],
            },
            {
                baslik: "Elektrik hattı yakınında ekstra dikkat",
                paragraflar: [
                    "Hedef bir elektrik hattına yakınsa, bu bilgiyi mutlaka ve en başta paylaşmanızı isteriz — bu, güvenlik açısından belirleyici bir kriterdir. Hat mesafesi ve gerilim seviyesi bilinmiyorsa bile 'yakınında elektrik hattı var' bilgisi tek başına, keşif ve planlama aşamasında ekstra dikkat gösterilmesini sağlar.",
                    "Bu tür durumlarda telefon teklifini kesinleştirmeden önce ek bir teyit isteyebiliriz; bu, işin güvenli yürümesi için gereken bir adımdır ve süreci uzatmak için değil, riski önceden görmek için yapılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hedefimiz bir çıkıntının arkasında, düz yukarı bakan bir platform yetmez sanırım; ne önerirsiniz?",
                cevap:
                    "Haklısınız, bu tam olarak eklemli platformun çözdüğü durum. Sepetli/makaslı platform yalnızca dikey hareket ederken, eklemli platformun kolu hem yükselir hem yana/öne doğru uzanabilir. Çıkıntının arkasındaki hedefe ulaşmak için hedefin yatay mesafesini ve yönünü paylaşmanız gerekir — mümkünse bir fotoğrafla. Bu bilgiyle kolun erişim zarfına uyan modeli önereceğiz.",
            },
            {
                soru: "Fotoğraf göndermeden telefonla tarif etsem yeterli olur mu?",
                cevap:
                    "Basit ve net erişimlerde (örneğin doğrudan üstte, engelsiz bir hedef) sesli tarif genellikle yeterlidir. Ama çıkıntı, avlu veya elektrik hattı gibi karmaşık erişim durumlarında fotoğraf, sözlü tarife göre çok daha güvenilir bir değerlendirme sağlar. Emin değilseniz fotoğraf göndermenizi öneririz — bu, sahada 'makine hedefe ulaşamadı' riskini önemli ölçüde azaltır.",
            },
            {
                soru: "Zeminimiz yakın zamanda dökülmüş yeni beton; eklemli platform zarar verir mi?",
                cevap:
                    "Bu bilgiyi paylaşmanız önemli çünkü eklemli platformlar genellikle sepetli platformlara göre daha ağırdır ve taze dökülmüş zemin yeterince sertleşmemiş olabilir. Zeminin ne zaman döküldüğünü belirtirseniz, gerekiyorsa destek plakası kullanımı veya alternatif bir konumlanma noktası değerlendiririz. Bu bilgiyi paylaşmazsanız ve zemin gerçekten hazır değilse, sahada zemin hasarı riski oluşabilir.",
            },
            {
                soru: "Aynı gün eklemli platform bulabilir misiniz, yoksa daha mı kısıtlı?",
                cevap:
                    "Dürüst cevap: eklemli platform sınıfı, sepetli platforma göre genellikle daha az modelden oluşur, bu yüzden müsaitlik zaman zaman daha kısıtlı olabilir. Talebinizi sabah erken saatte iletmeniz aynı gün müsaitlik ihtimalini artırır. Müsaitlik kısıtlıysa, en yakın uygun saati ve varsa alternatif bir model önerisini ilk görüşmede açıkça söyleriz; boş bir söz vermeyiz.",
            },
            {
                soru: "Hedefimiz elektrik hattına yakın, bu bir sorun mu?",
                cevap:
                    "Bu bilgiyi mutlaka en başta paylaşmanızı isteriz çünkü güvenlik açısından belirleyici bir kriterdir. Hat mesafesi tam bilinmese bile 'yakınında elektrik hattı var' bilgisi, planlama aşamasında ekstra dikkat gösterilmesini sağlar. Bu tür durumlarda teklifi kesinleştirmeden önce ek bir teyit isteyebiliriz — bu, süreci uzatmak için değil, işin güvenli yürümesi için gereken bir adımdır.",
            },
            {
                soru: "Hem yüksek hem uzak bir hedefimiz var, tek makine yeter mi?",
                cevap:
                    "Her zaman yetmeyebilir çünkü her modelin kendine özgü bir erişim zarfı vardır — maksimum yüksekliğe çıkarken yatay erişim azalır, tam yatay uzanırken maksimum yükseklik azalır. Hedefin hem yükseklik hem yatay mesafesini paylaştığınızda bu zarfa uyan modeli önereceğiz; uymuyorsa bunu dürüstçe söyler, farklı bir konumlanma noktası veya alternatif yaklaşım öneririz. Bu değerlendirmeyi genellikle telefon görüşmesinde, fotoğraf varsa daha kesin biçimde yaparız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun teknik erişim mantığı (yükseklik-yatay mesafe dengesi, erişim zarfı) genel makine bilgisidir. Hızlı teklif süreci ve fotoğrafla erişim değerlendirmesi firma pratiğidir. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân ve Depo İçi Platform — Hızlı Teklif ile Kiralama",
        giris:
            "İç mekan ve depo içi platform talepleri, dış saha taleplerinden farklı bir soru seti gerektirir: burada zemin genellikle düzdür ama alan darlığı, tavan yüksekliği ve raf aralığı gibi kısıtlar öne çıkar. Ayrıca çoğu depo ve fabrika içi çalışma, üretim veya sevkiyat faaliyetinin devam ettiği bir ortamda yürür — bu yüzden makinenin ne zaman ve nereden gireceği de en az yükseklik kadar önemlidir. manliftkirala.online üzerinden iç mekan talebinde bu bilgileri telefonda paylaştığınızda, akülü (egzoz gazı çıkarmayan) model seçimi ve dar koridor uyumu aynı görüşmede değerlendirilir. Bu sayfa, iç mekan platform kiralamada hızlı teklif sürecinin nelere odaklandığını anlatıyor.",
        maddeler: [
            {
                baslik: "Akülü model tercihinin nedeni",
                metin:
                    "Kapalı mekanlarda, özellikle havalandırması sınırlı depo ve fabrika içlerinde, egzoz gazı çıkaran dizel makineler yerine akülü modeller tercih edilir — bu hem hava kalitesi hem gürültü açısından önemlidir. İç mekan talebinde varsayılan öneri genellikle akülü modeldir; dış mekanla bağlantılı, havalandırması iyi büyük bir hol için farklı bir tercih söz konusu olabilir, bunu telefon görüşmesinde birlikte değerlendiririz.",
            },
            {
                baslik: "Koridor genişliği ve raf arası çalışma",
                metin:
                    "Depo içi raf sistemleri arasında çalışacak bir platformun şase genişliği, koridor genişliğinden dar olmalıdır — bu ölçüyü telefonda paylaşmanız, dar şaseli model gerekip gerekmediğini belirler. Raf üstü işlerde ayrıca rafın kendi yüksekliği de hesaba katılır; hedefin raf üstünde mi yoksa raf arasında bir noktada mı olduğu, doğru model seçimini etkiler.",
            },
            {
                baslik: "Üretim devam ederken çalışma: giriş-çıkış planlaması",
                metin:
                    "Fabrika veya depo içinde üretim durmadan platform çalışması gerektiğinde, makinenin gireceği kapı, çalışacağı bölge ve üretim hattına olan mesafesi önceden netleştirilir. Bu bilgi, sahada üretim akışını kesintiye uğratmadan doğru rotayla ilerlememizi sağlar. Üretimin hangi saatlerde daha sakin olduğunu (vardiya arası, öğle molası gibi) belirtmeniz, işin en uygun pencereye yerleştirilmesine yardımcı olur.",
            },
            {
                baslik: "Tavan yüksekliği ve tesisat/boru hattı işleri",
                metin:
                    "İç mekan taleplerinin önemli bir kısmı tesisat, boru hattı veya sprinkler bakımı gibi tavana yakın işlerden gelir. Bu işlerde tavan yüksekliği kadar, tavanın altındaki engellerin (kablo tavası, havalandırma kanalı, mevcut boru hattı) konumu da önemlidir — sepetin bu engellerin arasından geçerek hedefe ulaşması gerekir. Mümkünse tavan fotoğrafı paylaşmanız, bu değerlendirmeyi hızlandırır.",
            },
            {
                baslik: "AVM ve hastane gibi hassas ortamlarda ek dikkat",
                metin:
                    "AVM, hastane gibi halka açık veya hassas kullanımlı yapılarda çalışma genellikle belirli saatlere (gece, kapalı saatler) veya özel güvenlik prosedürlerine tabidir. Bu tür taleplerde çalışma saati kısıtını ve varsa bina yönetiminin özel talimatlarını en başta paylaşmanız, sevkiyat ve çalışma planının bu kısıtlara göre kurulmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekan model seçiminde belirleyici sorular",
                paragraflar: [
                    "İç mekan talebinde telefonda sorduğumuz temel sorular ve neden önemli oldukları aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Soru", "Neden sorulur", "Etkilediği karar", "Paylaşım yolu"],
                    satirlar: [
                        ["Koridor/kapı genişliği", "Şase uyumu", "Model sınıfı", "Metre veya fotoğraf"],
                        ["Tavan yüksekliği ve engeller", "Erişim hesabı", "Yükseklik sınıfı", "Fotoğraf tercih edilir"],
                        ["Üretim devam ediyor mu", "Çalışma penceresi", "Sevkiyat saati", "Sesli"],
                        ["Zemin türü (beton/epoksi)", "Lastik/iz bırakma riski", "Lastik tipi", "Sesli"],
                        ["Bina türü (AVM/hastane/fabrika)", "Özel prosedür var mı", "Çalışma saati kısıtı", "Sesli, en başta"],
                    ],
                },
            },
            {
                baslik: "Zemine iz bırakmama önceliği",
                paragraflar: [
                    "Cilalı beton, epoksi kaplama veya hassas zeminli iç mekanlarda, standart lastikli bir makine zemine iz bırakabilir. Bu tür zeminlerde iz bırakmayan (non-marking) lastik seçeneği tercih edilir; zemin türünü baştan belirtmeniz, doğru lastik tipine sahip makinenin gönderilmesini sağlar.",
                    "Zemin tipini bilmiyorsanız bile 'parlak, cilalı görünümlü' gibi bir tarif dahi bize yeterli ipucu verir; emin olmadığınız durumlarda güvenli tarafta kalıp iz bırakmayan lastik önermeyi tercih ederiz.",
                ],
            },
            {
                baslik: "Vardiya/mesai dışı çalışma tercihi",
                paragraflar: [
                    "Üretimi kesintiye uğratmak istemeyen işletmeler, iç mekan platform işlerini genellikle vardiya arası, mesai dışı veya hafta sonu gibi düşük yoğunluklu saatlere planlar. Bu tercihi baştan belirtirseniz, sevkiyat ve operatör planlamasını bu saatlere göre kurarız.",
                    "Mesai dışı çalışma talep edildiğinde, bu bilgiyi ilk görüşmede netleştirmemiz, hem makine hem operatör müsaitliğini doğru saate göre ayırmamızı sağlar — son anda 'aslında gece istiyoruz' değişikliği planı zorlaştırabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depo içinde kullanacağız, dizel mi akülü mü almalıyız?",
                cevap:
                    "Kapalı mekanlarda, özellikle havalandırması sınırlıysa akülü model varsayılan önerimizdir çünkü egzoz gazı çıkarmaz ve daha sessizdir. Dış mekanla bağlantılı, iyi havalandırılan büyük bir holde farklı bir tercih de değerlendirilebilir. Mekanın havalandırma durumunu ve boyutunu telefonda kısaca tarif ederseniz, size en uygun seçeneği öneririz.",
            },
            {
                soru: "Koridor genişliğimizi tam ölçmedik, yaklaşık bir tarif yeterli mi?",
                cevap:
                    "Başlangıç için yeterli, ama kesinleştirmeden önce net bir ölçü veya fotoğraf istememiz muhtemel çünkü şase genişliği koridordan dar olmalı ve bu konuda hata payı bırakmak istemeyiz. 'Bir forkliftin rahat geçtiği bir koridor' gibi bir tarif bile bize kabaca bir fikir verir; kesin ölçüyü telefon görüşmesi sırasında birlikte netleştiririz.",
            },
            {
                soru: "Üretim durmadan çalışabilir misiniz?",
                cevap:
                    "Çoğu zaman evet, ama bu makinenin çalışacağı bölgenin üretim hattına olan mesafesine bağlıdır. Üretimin devam ettiğini ve hangi saatlerin daha sakin olduğunu (vardiya arası, öğle molası) belirtirseniz, işi bu pencerelere göre planlarız. Hattın doğrudan üzerinde veya çok yakınında bir çalışma söz konusuysa, kısa bir duruş gerekebilir; bunu keşif aşamasında netleştiririz.",
            },
            {
                soru: "Zeminimiz cilalı/epoksi, makine iz bırakır mı?",
                cevap:
                    "Standart lastikli bir makine hassas zeminlerde iz bırakabilir, bu yüzden bu tür zeminlerde iz bırakmayan (non-marking) lastik seçeneğini öneririz. Zemin türünü baştan belirtirseniz, doğru lastik tipine sahip makineyi göndeririz. Emin değilseniz, 'parlak/cilalı görünümlü' gibi genel bir tarif bile yeterli bir ipucudur.",
            },
            {
                soru: "AVM/hastane gibi bir yerde mesai dışı çalışmamız gerekiyor, mümkün mü?",
                cevap:
                    "Evet, bu tür ortamlarda genellikle gece veya kapalı saatlerde çalışma tercih edilir ve biz bu talebe uyum sağlarız. Bina yönetiminin özel güvenlik prosedürü varsa bunu en başta paylaşmanız, sevkiyat ve operatör planını buna göre kurmamızı sağlar. Mesai dışı çalışma talebini ilk görüşmede netleştirmeniz, makine ve operatör müsaitliğinin doğru saate göre ayrılmasını sağlar.",
            },
            {
                soru: "Tavanda kablo tavası ve boru hatları var, platform bunların arasından geçebilir mi?",
                cevap:
                    "Genellikle evet, ama bunu doğrulamak için tavan fotoğrafı istememiz muhtemel — kablo tavası, havalandırma kanalı gibi engellerin konumu, sepetin hangi rotayla hedefe ulaşacağını belirler. Fotoğraf paylaşmanız bu değerlendirmeyi büyük ölçüde hızlandırır; paylaşamıyorsanız, keşif aşamasında sahada birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Akülü model tercihi, iz bırakmayan lastik ve dar koridor uyumu genel makine/uygulama bilgisidir. Hızlı teklif süreci ve mesai dışı çalışma planlaması firma pratiğidir. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montaj Platformu — Hızlı Teklif ile Kiralama",
        giris:
            "Çelik konstrüksiyon montaj işleri, platform taleplerinin en teknik ve en planlama gerektiren kategorisidir — burada tek bir makine değil, genellikle birden fazla makinenin (platform, forklift, bazen vinç) belirli bir sırayla ve montaj takvimine bağlı olarak sahada bulunması gerekir. manliftkirala.online üzerinden bu tür bir talep geldiğinde, hızlı teklif sürecimiz biraz farklı işler: ilk görüşmede genel kapsamı (kaç gün, hangi makine tipleri, hangi sıra) alır, ayrıntılı planı takip eden bir görüşmede veya sahada netleştiririz. Tek günlük bir platform talebi gibi anında fiyat vermek bu kategoride her zaman mümkün olmayabilir, ama süreci başlatmak yine tek bir telefon görüşmesi kadar hızlıdır. Bu sayfa, çelik konstrüksiyon montaj işlerinde hızlı teklif sürecinin nasıl işlediğini ve neyin ana konumuzun dışında kaldığını dürüstçe anlatıyor.",
        maddeler: [
            {
                baslik: "Montaj takvimine bağlı çok günlük planlama",
                metin:
                    "Sanayi holü veya çelik konstrüksiyon montajı genellikle tek günde bitmez; kolon dikimi, kiriş montajı, cephe kaplaması gibi aşamalar farklı günlere yayılır ve her aşamada farklı yükseklik veya erişim ihtiyacı doğabilir. Bu yüzden telefonda 'kaç gün sürecek, hangi aşamalarda platform gerekecek' sorusunu sorarız — tek günlük bir kiralamadan farklı olarak, burada süreç boyunca makine ihtiyacının değişebileceğini baştan konuşuruz.",
            },
            {
                baslik: "Yüksek montaj noktalarında kapasite ve erişim",
                metin:
                    "Sanayi holü çatı kirişleri veya üst kolon bağlantıları gibi noktalar, standart bir depo tavanından daha yüksek olabilir ve bu, daha büyük kapasiteli eklemli platform sınıfını gerektirebilir. Hedef yüksekliği ve montaj noktasının konumunu (kirişin ortası mı, kenar bağlantısı mı) paylaşmanız, doğru sınıfın belirlenmesini hızlandırır.",
            },
            {
                baslik: "Şantiye zemininin durumu ve makine ağırlığı",
                metin:
                    "İnşaat hâlindeki bir sahanın zemini genellikle henüz tam sertleşmemiş, kısmen dolgu yapılmış veya düzensiz olabilir. Bu, hem platformun hem forkliftin taşınma ve konumlanma kararını etkiler. Şantiyenin o anki zemin durumunu (sıkıştırılmış mı, henüz mü, engebeli mi) telefonda tarif etmeniz veya fotoğraf paylaşmanız, doğru makine ve varsa destek plakası ihtiyacını önceden belirlememizi sağlar.",
            },
            {
                baslik: "Birden fazla makinenin koordinasyonu",
                metin:
                    "Büyük bir montaj işinde platform, forklift ve bazen malzeme taşıma ekipmanı aynı sahada, farklı zamanlarda veya eş zamanlı çalışabilir. Bu koordinasyonu tek elden yürütmek, sizin için ayrı ayrı arama yapma yükünü ortadan kaldırır — tüm ihtiyacınızı bize ilettiğinizde, sevkiyat sırasını ve sahadaki makine trafiğini biz planlarız.",
            },
            {
                baslik: "Ana uzmanlık sınırımız: montaj mühendisliği değil, erişim ekipmanı",
                metin:
                    "Dürüstçe belirtmek isteriz: biz montaj mühendisliği veya statik hesap hizmeti sunmuyoruz — sağladığımız şey, montaj ekibinizin ihtiyaç duyduğu erişim ekipmanıdır (platform, forklift). Montaj planı, kaldırma hesapları ve iş güvenliği sorumluluğu montaj yükleniciniz ve mühendisiniz tarafından yürütülür; biz bu planın gerektirdiği makineyi doğru zamanda, doğru kapasitede sahaya ulaştırırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşamasına göre tipik makine ihtiyacı",
                paragraflar: [
                    "Çelik konstrüksiyon montajının farklı aşamalarında hangi makine türü öne çıkar, aşağıda genel bir çerçeve olarak özetlenmiştir. Kesin ihtiyaç, projenin kendine özgü koşullarına göre değişir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Tipik ihtiyaç", "Öncelikli soru", "Not"],
                    satirlar: [
                        ["Kolon dikimi", "Forklift + orta yükseklik platform", "Kolon yüksekliği", "Zemin sertliği kritik"],
                        ["Kiriş montajı", "Yüksek kapasiteli eklemli platform", "Kiriş yüksekliği + erişim yönü", "Birden fazla nokta olabilir"],
                        ["Cephe kaplaması", "Sepetli/makaslı platform (çok sayıda)", "Cephe alanı", "Aynı anda birden fazla makine gerekebilir"],
                        ["Çatı işleri", "Eklemli platform veya sepetli", "Çatı eğimi, erişim noktası", "Güvenlik önceliği yüksek"],
                        ["Son kontrol/rötuş", "Kısa süreli, tek makine", "Hangi noktalar kaldı", "Genellikle tek günlük"],
                    ],
                },
            },
            {
                baslik: "İlk görüşmede kapsamı netleştirmek",
                paragraflar: [
                    "Çelik konstrüksiyon işlerinde ilk telefon görüşmesinin amacı kesin fiyat vermek değil, kapsamı ve zaman çizelgesini anlamaktır. Kaç gün süreceği, hangi aşamalarda hangi makine tipine ihtiyaç duyulacağı ve şantiyenin genel durumu (zemin, erişim, güvenlik prosedürü) bu ilk görüşmede toparlanır.",
                    "Bu bilgiyle bir ön plan ve fiyat aralığı sunarız; proje ilerledikçe ihtiyaç netleştiğinde (örneğin belirli bir günde hangi makinenin geleceği), detaylar kesinleştirilir. Bu, tek günlük bir kiralamaya göre daha fazla iletişim gerektirir ama süreç yine telefon ve WhatsApp üzerinden, hızlı biçimde ilerler.",
                ],
            },
            {
                baslik: "Şantiyede birden fazla makinenin trafiği",
                paragraflar: [
                    "Aynı şantiyede birden fazla makine (platform, forklift, malzeme taşıma aracı) çalıştığında, bunların birbirine engel olmadan, güvenli mesafede hareket etmesi gerekir. Bu trafiği planlamak montaj yükleniciniz ve sahadaki iş güvenliği sorumlusuyla birlikte yürütülür; bizim katkımız, hangi makinenin ne zaman sahada olacağını önceden netleştirerek bu koordinasyonu kolaylaştırmaktır.",
                    "Şantiye sahasının genel yerleşim planını (varsa) paylaşmanız, makinelerin park ve çalışma alanlarını önceden ayırt etmemize yardımcı olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Montaj işimiz birkaç gün sürecek, tek seferde mi kiralamalıyız yoksa aşama aşama mı?",
                cevap:
                    "Bu, montaj takviminize bağlı bir tercih. Bazı işlerde makineyi tüm süre boyunca sahada tutmak daha pratiktir; bazı işlerde ise yalnızca ilgili aşamada (örneğin kiriş montajı günlerinde) makine getirip, aşama bitince geri almak daha ekonomiktir. İlk görüşmede montaj takviminizi paylaşırsanız, hangi yaklaşımın sizin için daha uygun olduğunu birlikte değerlendiririz.",
            },
            {
                soru: "Şantiye zeminimiz henüz tam sertleşmedi, platform çalışabilir mi?",
                cevap:
                    "Genellikle evet ama bu, zeminin ne kadar sertleştiğine ve makinenin ağırlığına bağlı bir değerlendirme gerektirir. Zeminin o anki durumunu (sıkıştırılmış mı, henüz taze mi) telefonda tarif etmeniz veya fotoğraf paylaşmanız, gerekiyorsa destek plakası kullanımı veya daha hafif bir model tercihini önceden belirlememizi sağlar. Zemin gerçekten yetersizse bunu dürüstçe söyler, alternatif çözüm öneririz.",
            },
            {
                soru: "Montaj mühendisliği veya statik hesap desteği veriyor musunuz?",
                cevap:
                    "Hayır, bu bizim uzmanlık alanımızın dışında — biz erişim ekipmanı (platform, forklift) sağlıyoruz, montaj planı ve statik hesap sorumluluğu montaj yükleniciniz ve mühendisinizdedir. Bunu dürüstçe belirtmek istiyoruz çünkü yanlış beklenti oluşturmak istemeyiz. Bizim katkımız, montaj planınızın gerektirdiği makineyi doğru zamanda, doğru kapasitede sahaya ulaştırmaktır.",
            },
            {
                soru: "Aynı anda birden fazla makineye ihtiyacımız olacak, tek aramada mı halledebiliriz?",
                cevap:
                    "Evet, bu tür koordinasyonu tek elden yürütmek tam olarak yaptığımız şey. İhtiyacınızı (kaç makine, hangi tip, hangi tarihte) bize ilettiğinizde, sevkiyat sırasını ve sahadaki makine trafiğini biz planlarız — ayrı ayrı arama yapmanız gerekmez. Şantiye yerleşim planınız varsa paylaşmanız, park ve çalışma alanlarını önceden netleştirmemize yardımcı olur.",
            },
            {
                soru: "İlk telefon görüşmesinde kesin fiyat alabilir miyim?",
                cevap:
                    "Basit, tek günlük ve tek makineli işlerde genellikle evet. Ama çok günlük, birden fazla aşamalı montaj işlerinde ilk görüşmenin amacı kesin fiyat vermek değil, kapsamı ve takvimi netleştirmektir; bir ön plan ve fiyat aralığı sunarız, proje ilerledikçe detaylar kesinleşir. Bunu baştan söylüyoruz çünkü karmaşık bir işte anlık kesin rakam vermek gerçekçi değildir.",
            },
            {
                soru: "Yüksek montaj noktamız var, hangi makine sınıfı gerekir bilmiyoruz; ne yapmalıyız?",
                cevap:
                    "Hedef yüksekliği ve montaj noktasının konumunu (kirişin ortası mı, kenar bağlantısı mı) telefonda paylaşmanız yeterli — biz bu bilgiye göre uygun kapasiteli eklemli platform sınıfını öneririz. Emin değilseniz, montaj planınızdan bir kesit veya fotoğraf da işe yarar. Karmaşık noktalarda birden fazla makine sınıfını değerlendirip size en uygun seçeneği sunarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj aşamaları ve tipik makine ihtiyacı genel sektör bilgisidir. Hızlı teklif sürecinin çok günlü planlamaya uyarlanması ve uzmanlık sınırı (montaj mühendisliği hariç) firma pratiği/dürüstlük beyanıdır. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahası Platform — Hızlı Teklif ile Kiralama",
        giris:
            "Tarım ve silo sahası talepleri, sanayi bölgesi taleplerinden farklı bir zemin ve erişim profiline sahiptir: yollar genellikle stabilize veya toprak, saha girişleri geniş ama düzensiz, ve talebin geldiği nokta çoğu zaman şehir merkezine mesafelidir. manliftkirala.online üzerinden bu tür bir talepte hızlı teklif sürecimiz aynı kalır — telefon veya WhatsApp üzerinden zemin ve erişim bilgisini paylaştığınızda aynı görüşmede değerlendirme yaparız — ama mesafe ve zemin koşulları nedeniyle sevkiyat süresi ve makine seçimi şehir içi taleplere göre biraz farklı hesaplanır. Bu sayfa, tarım ve silo sahası platform taleplerinde nelerin öne çıktığını ve hızlı teklif sürecinin bu koşullara nasıl uyarlandığını dürüstçe anlatıyor.",
        maddeler: [
            {
                baslik: "Stabilize/toprak yol ve saha girişi değerlendirmesi",
                metin:
                    "Tarım ve silo sahalarına giden yollar çoğunlukla asfalt değil, stabilize veya toprak zemindir; bu, hem taşıyıcı aracın hem de platformun kendisinin geçişini etkiler. Yolun son yağıştan sonra ne kadar sürede kuruduğu, saha girişinin genişliği ve varsa bir eşik veya çukur, telefonda sorduğumuz temel sorulardır. Yakın zamanda yağış olduysa, bunu belirtmeniz sevkiyat zamanlamasını gerçekçi tutmamıza yardımcı olur.",
            },
            {
                baslik: "Silo yüksekliği ve dar erişim",
                metin:
                    "Silo yapıları genellikle dar bir taban çapına sahip ama yüksekliği fazla olabilir; bu, çalışma yüksekliği kadar makinenin siloya ne kadar yakın konumlanabileceğini de önemli kılar. Silo etrafındaki boşluğun genişliği ve varsa çevresindeki diğer yapılar (başka silo, konveyör, elektrik direği), doğru model ve konumlanma noktasını belirler.",
            },
            {
                baslik: "Mesafeye bağlı gerçekçi sevkiyat süresi",
                metin:
                    "Şehir merkezine uzak tarım sahalarına sevkiyat, doğal olarak yakın bölgelere göre daha uzun sürer — bunu dürüstçe söylüyoruz. Aynı gün sevkiyat isteniyorsa, talebin mümkün olduğunca erken saatte iletilmesi önemlidir; tarihi esnek tutabilen talepler ise bölgeye yapılacak başka bir sevkiyatla birleştirilerek hem daha hızlı hem daha ekonomik hâle getirilebilir.",
            },
            {
                baslik: "Sera ve çiftlik yapılarında hafif erişim ihtiyacı",
                metin:
                    "Sera çatı bakımı veya çiftlik binası çatı işleri genellikle silo montajına göre daha hafif ve kısa süreli işlerdir; bu tür işlerde standart sepetli platform çoğunlukla yeterlidir. Serayla ilgili özel bir durum varsa (örneğin dar sera koridoru, hassas örtü malzemesi), bunu telefonda belirtmeniz doğru model ve dikkat noktalarını netleştirir.",
            },
            {
                baslik: "Kırsal alanda operatörlü tercih avantajı",
                metin:
                    "Kırsal ve tarım sahalarında, sahaya aşina olmayan bir operatörün zemin ve erişim koşullarını ilk elden değerlendirmesi faydalı olabilir; bu yüzden bu tür taleplerde operatörlü seçeneği sıklıkla öneririz. Operatörümüz sahaya geldiğinde zemin ve erişimi ilk elden görür ve gerekirse konumlanma noktasını saha koşullarına göre ayarlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kırsal/tarım sahası özel koşul kontrolü",
                paragraflar: [
                    "Tarım ve silo sahası talebinde telefonda sorduğumuz ek kontrol noktaları aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kontrol noktası", "Neden önemli", "Ne zaman sorulur", "Not"],
                    satirlar: [
                        ["Yol zemin türü", "Taşıyıcı araç geçişi", "İlk görüşmede", "Stabilize/toprak ise ek dikkat"],
                        ["Son yağış tarihi", "Zemin sertliği", "İlk görüşmede", "Yakın yağış varsa gecikme riski"],
                        ["Saha giriş genişliği", "Araç manevrası", "İlk görüşmede", "Fotoğraf faydalı"],
                        ["Silo/yapı çevresi boşluk", "Konumlanma noktası", "Teklif öncesi", "Dar ise alternatif nokta gerekebilir"],
                        ["Mesafe (yaklaşık)", "Sevkiyat süresi", "İlk görüşmede", "Gerçekçi zaman aralığı için"],
                    ],
                },
            },
            {
                baslik: "Yağış sonrası zemin durumu ve zamanlama",
                paragraflar: [
                    "Stabilize veya toprak zeminli sahalarda yağış sonrası birkaç gün boyunca zemin yumuşak kalabilir ve bu, ağır makinelerin geçişini zorlaştırabilir veya zemine iz bırakmasına neden olabilir. Talebiniz yağış sonrası bir döneme denk geliyorsa, bunu telefonda belirtmeniz, sevkiyatı zeminin toparlanacağı bir güne planlamamıza veya gerekiyorsa alternatif bir erişim güzergâhı değerlendirmemize yardımcı olur.",
                    "Bu tür bir gecikme, işin kalitesini değil zamanlamasını etkiler; amacımız makinenin sahaya güvenli ve zeminine zarar vermeden ulaşmasıdır, bu bazen bir-iki günlük bir bekleme anlamına gelebilir.",
                ],
            },
            {
                baslik: "Tarihi esnek talepte bölgesel eşleştirme",
                paragraflar: [
                    "Merkeze uzak tarım ve kırsal sahalarda, tarihi esnek tutan talepler için bölgeye giden başka bir sevkiyatla eşleştirme imkânı değerlendirilir. Bu, hem nakliye maliyetini düşürür hem de bazen beklenenden daha erken bir sevkiyat tarihi çıkmasını sağlayabilir çünkü bölgeye zaten planlanmış bir sevkiyat varsa talebiniz ona eklenebilir.",
                    "Bu imkândan yararlanmak için talebinizi iletirken 'tarih esnek' notunu eklemeniz yeterlidir; kesin tarihli acil talepler ise standart programa göre en hızlı şekilde değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamıza giden yol toprak, taşıyıcı araç girebilir mi?",
                cevap:
                    "Çoğu durumda evet, ama yolun o anki durumuna (kuru mu, yakın zamanda yağış oldu mu) bağlı. Bu bilgiyi telefonda paylaşmanız, sevkiyatı gerçekçi bir zamana planlamamıza yardımcı olur. Yakın zamanda yağış olduysa, zeminin toparlanması için birkaç gün beklemek gerekebilir; bunu dürüstçe söyleriz ve alternatif bir tarih öneririz.",
            },
            {
                soru: "Silo çevresi dar, makine yeterince yaklaşabilir mi?",
                cevap:
                    "Bu, silo etrafındaki boşluğun genişliğine ve varsa çevresindeki diğer yapılara bağlı bir değerlendirme. Bu ölçüyü ve mümkünse bir fotoğrafı paylaşmanız, doğru model ve konumlanma noktasını belirlememizi sağlar. Alan gerçekten darsa, daha kompakt şaseli bir model veya farklı bir konumlanma açısı önerebiliriz.",
            },
            {
                soru: "Bölgemiz şehir merkezine uzak, aynı gün sevkiyat mümkün mü?",
                cevap:
                    "Mesafeye bağlı olarak süre uzayabilir, bunu baştan söylüyoruz. Talebinizi mümkün olduğunca erken saatte iletmeniz aynı gün sevkiyat ihtimalini artırır. Tarihi esnek tutabiliyorsanız, bölgeye giden başka bir sevkiyatla eşleştirme imkânını değerlendiririz — bu hem daha hızlı hem daha ekonomik bir sonuç verebilir.",
            },
            {
                soru: "Sera içinde çalışacağız, örtü malzemesine zarar verir mi?",
                cevap:
                    "Standart bir sepetli platform çoğu sera işinde sorun yaratmaz, ama sera koridorunun darlığı veya örtü malzemesinin hassasiyeti gibi özel durumlar varsa bunu telefonda belirtmenizi isteriz. Bu bilgiyle doğru model ve dikkatli bir konumlanma yaklaşımı planlarız; emin değilseniz, operatörlü seçeneği önerebiliriz çünkü operatörümüz sahada hassas noktalara karşı dikkatli ilerler.",
            },
            {
                soru: "Kırsal sahada operatörsüz mü operatörlü mü daha uygun?",
                cevap:
                    "Kırsal ve tarım sahalarında operatörlü seçeneği sıklıkla öneririz çünkü sahaya aşina olmayan bir operatörün zemin ve erişim koşullarını ilk elden değerlendirmesi faydalı olur. Ekibinizde saha koşullarına aşina, deneyimli personel varsa operatörsüz seçenek de değerlendirilebilir. Talebinizi iletirken bu tercihi belirtirseniz, teklif buna göre şekillenir.",
            },
            {
                soru: "Yağıştan sonra sahamız çamurlu, ne zaman gelebilirsiniz?",
                cevap:
                    "Zeminin toparlanması genellikle birkaç gün sürer, kesin süre yağışın şiddetine ve zemin türüne bağlıdır. Sahanızın o anki durumunu telefonda tarif etmeniz veya fotoğraf paylaşmanız, gerçekçi bir zamanlama önermemizi sağlar. Acil bir ihtiyacınız varsa, alternatif bir erişim güzergâhı veya farklı bir konumlanma noktası olup olmadığını birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Stabilize/toprak zemin, yağış sonrası zemin toparlanma süreci ve silo erişim mantığı genel saha bilgisidir. Hızlı teklif sürecinin mesafeye göre uyarlanması firma pratiğidir. Tesis adı, mesafe rakamı ve kapasite uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Platformu — Hızlı Teklif ile Kiralama",
        giris:
            "Enerji ve aydınlatma bakım talepleri genellikle iki uçtan birinde durur: ya planlı bir bakım turudur (birden fazla direk veya tabelanın periyodik kontrolü) ya da beklenmedik bir arızadır (sönen bir aydınlatma hattı, düşen bir tabela). manliftkirala.online üzerinden her iki durumda da hızlı teklif süreci işler, ama planlama biçimi farklıdır: planlı bakım turunda tarih ve rota önceden konuşulur, arızada ise en hızlı ulaşım öncelenir. Elektrik hattına yakın çalışmanın kendine özgü güvenlik gereksinimleri olduğu için, bu tür taleplerde telefon görüşmesinde standart sorulara ek olarak hat mesafesi ve gerilim bilgisi de sorulur. Bu sayfa, enerji ve aydınlatma bakım platformu talebinde hızlı teklif sürecinin nasıl işlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Elektrik hattına yakın çalışmada güvenlik önceliği",
                metin:
                    "Aydınlatma direği veya elektrik hattı yakınında çalışma, standart bir platform işinden farklı bir dikkat seviyesi gerektirir. Telefon görüşmesinde hattın mesafesini ve mümkünse gerilim seviyesini sorarız; bu bilgi net değilse, ilgili elektrik dağıtım kuruluşuyla veya tesis elektrikçinizle teyit edilmesini önerebiliriz. Güvenlik netleşmeden sahaya çıkmak istemeyiz — bu, süreci yavaşlatmak için değil, işin güvenli yürümesi için gereken bir adımdır.",
            },
            {
                baslik: "Planlı bakım turunda çoklu nokta rotası",
                metin:
                    "Birden fazla direk, tabela veya aydınlatma noktasının periyodik kontrolü söz konusuysa, bu noktaları tek bir rotada birleştirmek verimlidir. Telefon görüşmesinde kaç nokta olduğunu ve bu noktaların birbirine göre konumunu paylaşmanız, rotayı önceden planlamamızı ve tek sevkiyatta mümkün olduğunca fazla noktayı tamamlamamızı sağlar.",
            },
            {
                baslik: "Arıza durumunda hızlı ulaşım gerçeği",
                metin:
                    "Sönen bir aydınlatma hattı veya düşen bir tabela gibi acil durumlarda en yakın uygun makineyi yönlendiririz, ama dürüst cevap tam sürenin o anki program yoğunluğuna ve mesafeye bağlı olduğudur. Aciliyeti belirttiğinizde gerçekçi bir zaman aralığı söyleriz; güvenlik riski taşıyan durumlarda (örneğin sarkan bir kablo) öncelik geçici emniyetin sağlanmasıdır, kalıcı onarım ardından planlanır.",
            },
            {
                baslik: "Yüksekliğe göre model seçimi: direk ve santral farkı",
                metin:
                    "Standart aydınlatma direği yüksekliği ile bir enerji santrali veya yüksek gerilim hattı direği arasında ciddi bir fark vardır; bu ikisi farklı kapasitede platform gerektirir. Hedefin ne tür bir yapı olduğunu (sokak aydınlatma direği mi, endüstriyel tesis hattı mı) belirtmeniz, doğru model sınıfının ilk seferde belirlenmesini sağlar.",
            },
            {
                baslik: "Gece çalışması gerektiren aydınlatma işleri",
                metin:
                    "Bazı aydınlatma bakım işleri (örneğin sokak aydınlatmasının gece performansını test etmek) doğası gereği gece saatlerinde yapılmalıdır. Bu tür bir talep varsa, gece çalışması için operatör ve ek aydınlatma ekipmanı planlaması önceden yapılır; gündüz taleplerine göre biraz farklı bir sevkiyat zamanlaması gerektirebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Talep türüne göre planlama yaklaşımı",
                paragraflar: [
                    "Enerji ve aydınlatma bakım taleplerinde planlı ve acil durumlar farklı biçimde ele alınır. Aşağıdaki tablo bu farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Talep türü", "Öncelik", "Planlama süresi", "Öncelikli bilgi"],
                    satirlar: [
                        ["Planlı çoklu nokta turu", "Rota verimliliği", "Birkaç gün önceden", "Nokta sayısı ve konumları"],
                        ["Tekil planlı bakım", "Standart", "Aynı gün-ertesi gün", "Hedef yüksekliği ve hat mesafesi"],
                        ["Acil arıza (risk yok)", "Yüksek", "En yakın uygun zaman", "Aciliyet + konum"],
                        ["Acil arıza (güvenlik riski)", "En yüksek", "Öncelikli değerlendirme", "Risk tanımı + konum"],
                        ["Gece çalışması", "Planlı, özel saat", "Önceden koordinasyon", "Gece aydınlatma ihtiyacı"],
                    ],
                },
            },
            {
                baslik: "Hat mesafesi bilgisi netleşmeden ilerlemiyoruz",
                paragraflar: [
                    "Elektrik hattına yakın bir çalışmada hat mesafesi ve gerilim bilgisi net değilse, teklifi kesinleştirmeden önce bu bilginin teyit edilmesini isteriz. Bu, süreci geciktirmek için değil, hem operatörümüzün hem sahanızdaki ekibin güvenliği için gereken bir adımdır. Tesis elektrikçiniz veya ilgili dağıtım kuruluşu bu bilgiyi genellikle hızlıca sağlayabilir.",
                    "Bilgi netleştiğinde süreç normal hızında devam eder; bu adımı atlamak, sahada güvenlik riski oluşturabileceği için tercih etmeyiz.",
                ],
            },
            {
                baslik: "Çoklu nokta bakım turunun ekonomisi",
                paragraflar: [
                    "Birden fazla aydınlatma veya direk noktasının periyodik kontrolünü tek bir sevkiyatta birleştirmek, her noktayı ayrı ayrı talep etmeye göre belirgin biçimde daha ekonomiktir çünkü nakliye bedeli tüm noktalar arasında bölünür. Bu tür bir tur planlıyorsanız, tüm noktaların listesini ve konumlarını önceden paylaşmanız, rotayı en verimli sırayla kurmamızı sağlar.",
                    "Tur sırasında beklenmedik bir ek nokta ortaya çıkarsa, mümkünse aynı ziyarette değerlendiririz; mümkün değilse bir sonraki tur için not ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Elektrik hattına yakın çalışacağız, önceden ne bilmeniz gerekiyor?",
                cevap:
                    "Hattın mesafesini ve mümkünse gerilim seviyesini bilmemiz önemli — bu bilgi net değilse, tesis elektrikçinizle veya ilgili dağıtım kuruluşuyla teyit edilmesini önerebiliriz. Güvenlik netleşmeden teklifi kesinleştirmeyiz; bu, süreci yavaşlatmak için değil işin güvenli yürümesi için gereken bir adımdır. Bilgi netleştiğinde süreç normal hızında ilerler.",
            },
            {
                soru: "Birden fazla direğimiz var, hepsini tek seferde kontrol ettirebilir miyiz?",
                cevap:
                    "Evet, bu tam olarak önerdiğimiz yaklaşım. Tüm noktaların listesini ve birbirine göre konumunu paylaşırsanız, rotayı en verimli sırayla planlarız ve tek sevkiyatta mümkün olduğunca fazla noktayı tamamlarız. Bu, her noktayı ayrı ayrı talep etmeye göre belirgin biçimde daha ekonomiktir çünkü nakliye bedeli tüm noktalar arasında bölünür.",
            },
            {
                soru: "Aydınlatma hattımız aniden söndü, ne kadar hızlı gelirsiniz?",
                cevap:
                    "En yakın uygun makineyi yönlendiririz, ama dürüst cevap tam sürenin o anki program yoğunluğuna ve mesafeye bağlı olduğudur. Güvenlik riski taşıyan bir durum varsa (örneğin sarkan kablo), öncelik geçici emniyetin sağlanmasıdır; kalıcı onarım ardından planlanır. Aciliyeti ve riski ilk aramada net belirtmeniz, doğru önceliklendirmeyi sağlar.",
            },
            {
                soru: "Gece çalışması gerekiyor, bu mümkün mü?",
                cevap:
                    "Evet, bazı aydınlatma işleri (örneğin gece performans testi) doğası gereği gece yapılmalıdır ve buna uyum sağlarız. Gece çalışması için operatör ve ek aydınlatma ekipmanı planlaması önceden yapılır; bu yüzden gece talebini mümkün olduğunca erken bildirmeniz, sevkiyat ve operatör müsaitliğinin doğru saate göre ayrılmasını sağlar.",
            },
            {
                soru: "Hedefimiz sokak aydınlatma direği mi yoksa endüstriyel bir hat mı, bu fark yaratır mı?",
                cevap:
                    "Evet, belirgin biçimde. Standart sokak aydınlatma direği ile endüstriyel tesis hattı veya santral yapısı farklı kapasitede platform gerektirebilir. Hedefin ne tür bir yapı olduğunu belirtmeniz, doğru model sınıfının ilk seferde belirlenmesini sağlar ve sahada yetersiz kapasiteli makine göndermek gibi bir gecikmeyi önler.",
            },
            {
                soru: "Hat mesafesini veya gerilimini bilmiyoruz, yine de arayabilir miyiz?",
                cevap:
                    "Elbette arayabilirsiniz, bu bilgiyi birlikte netleştiririz. Bilmiyorsanız, tesis elektrikçinizden veya ilgili dağıtım kuruluşundan teyit almanızı önerebiliriz. Bu netleşene kadar teklifi kesinleştirmesek de, sürecin ilk adımlarını (genel bilgi toplama, uygun makine sınıfını ön değerlendirme) hemen başlatabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Elektrik hattı yakınında çalışma güvenlik gereksinimi genel iş güvenliği bilgisidir. Hızlı teklif sürecinin planlı/acil ayrımı ve çoklu nokta rota planlaması firma pratiğidir. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü / Operatörsüz Platform Kiralama — Hızlı Teklif Süreci",
        giris:
            "Operatörlü mü operatörsüz mü sorusu, hızlı teklif sürecinin en sık karşılaştığımız kararlarından biridir ve doğru cevap, işin sıklığına, ekibinizin deneyimine ve sahanın zorluğuna göre değişir. manliftkirala.online üzerinden bu kararı vermenizi kolaylaştırmak için, telefon görüşmesinde bu üç faktörü birlikte değerlendiririz — kararsızsanız, size dayatmak yerine önerimizi paylaşır, son kararı sizin vermenizi sağlarız. Operatörlü seçenekte operatör makineyle birlikte gelir ve sahada doğrudan işe başlar; operatörsüz seçenekte ise makine size teslim edilir ve kullanacak personelinizin gerekli yeterliliğe sahip olması beklenir. Bu sayfa, iki seçenek arasındaki farkı, maliyet etkisini ve hangi durumda hangisinin daha mantıklı olduğunu detaylı biçimde anlatıyor — bu, sitenin ikinci ana odak konusudur çünkü hızlı teklif sürecinin sonunda verilen bu karar, işin nasıl ilerleyeceğini doğrudan belirler.",
        maddeler: [
            {
                baslik: "Operatörlü seçeneğin getirdiği hız ve güvence",
                metin:
                    "Operatörlü kiralamada, makineyle birlikte gelen operatör sahada doğrudan işe başlar; ayrı bir eğitim, alışma veya deneme süresi gerekmez. Bu, özellikle tek seferlik işlerde, nadiren platform kullanan ekiplerde veya karmaşık/dar bir sahada zaman kazandırır. Operatörümüz aynı zamanda saha koşullarını (zemin, erişim, engel) ilk elden değerlendirir ve gerektiğinde konumlanma noktasını buna göre ayarlar — bu, deneyimsiz bir kullanıcının fark edemeyeceği riskleri önceden görmesini sağlar.",
            },
            {
                baslik: "Operatörsüz seçeneğin maliyet avantajı",
                metin:
                    "Ekibinizde platform kullanımına aşina, deneyimli personel varsa operatörsüz kiralama maliyeti belirgin biçimde düşürür — operatör bedeli ortadan kalkar ve makineyi kendi çalışma temponuza göre kullanabilirsiniz. Bu seçenek özellikle sık platform ihtiyacı olan, kendi ekibi zaten deneyimli olan işletmeler için mantıklıdır. Operatörsüz talep ederken kullanacak personelin geçerli yeterlilik belgesine sahip olması beklenir.",
            },
            {
                baslik: "Yeterlilik belgesi ve sorumluluk",
                metin:
                    "Operatörsüz kiralamada, makineyi kullanacak personelin ilgili platform/forklift operatörlük yeterliliğine sahip olması, hem güvenlik hem yasal sorumluluk açısından önemlidir. Belge durumunuz konusunda emin değilseniz, bunu telefonda açıkça belirtmenizi isteriz — bu durumda operatörlü seçeneği önerir, belge sorununu tamamen ortadan kaldırırız. Bu konuda net olmak, sahada sorumluluk belirsizliği yaşamamak için önemlidir.",
            },
            {
                baslik: "Karmaşık veya dar sahalarda operatörlü tercih",
                metin:
                    "Dar bahçe girişi, engebeli zemin, elektrik hattına yakınlık veya çok noktalı bir erişim gibi karmaşık saha koşullarında operatörlü seçeneği öneririz — bu, deneyimsiz bir kullanıcının karşılaşabileceği zorlukları operatörümüzün ilk elden yönetmesini sağlar. Basit, düz zeminli ve tek noktalı işlerde ise operatörsüz seçenek genellikle sorunsuz işler; bu ayrımı telefon görüşmesinde saha koşullarınıza göre birlikte değerlendiririz.",
            },
            {
                baslik: "Kararsızsanız: önerimizi paylaşırız, kararı siz verirsiniz",
                metin:
                    "Operatörlü mü operatörsüz mü sorusunda kesin bir doğru cevap yoktur — karar işin sıklığına, ekibinizin deneyimine ve sahanın zorluğuna bağlıdır. Telefon görüşmesinde işinizi ve sahanızı kısaca anlattığınızda, hangi seçeneğin sizin durumunuz için daha uygun olduğunu dürüstçe söyleriz; ama son kararı her zaman siz verirsiniz. Amacımız size bir seçenek dayatmak değil, doğru kararı vermeniz için gereken bilgiyi sağlamaktır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz seçenek karşılaştırması",
                paragraflar: [
                    "İki seçenek arasındaki temel farklar aşağıda özetlenmiştir; hangisinin sizin için uygun olduğu saha koşullarına ve ekibinizin deneyimine bağlıdır.",
                ],
                tablo: {
                    basliklar: ["Kriter", "Operatörlü", "Operatörsüz", "Öneri"],
                    satirlar: [
                        ["Maliyet", "Operatör bedeli dahil", "Yalnızca makine bedeli", "Sık kullanımda operatörsüz ekonomik"],
                        ["Başlangıç hızı", "Anında, eğitim gerekmez", "Personelin belgesi/deneyimi gerekli", "Tek seferlik işte operatörlü hızlı"],
                        ["Karmaşık saha uyumu", "Operatör riski ilk elden yönetir", "Kullanıcı deneyimine bağlı", "Dar/engebeli sahada operatörlü"],
                        ["Yasal sorumluluk", "Operatör bizim sorumluluğumuzda", "Personel yeterlilik belgesi şart", "Belge yoksa operatörlü"],
                        ["Esneklik (kendi tempo)", "Operatörün programına bağlı", "Tamamen sizin kontrolünüzde", "Uzun süreli işte operatörsüz esnek"],
                    ],
                },
            },
            {
                baslik: "Telefonda karar verme süreci",
                paragraflar: [
                    "Operatörlü/operatörsüz kararını telefonda hızlı vermenizi sağlamak için üç soruyu sorarız: işi ne sıklıkla yapacaksınız (tek seferlik mi, düzenli mi), ekibinizde platform kullanımına aşina personel var mı, ve saha ne kadar karmaşık (düz-basit mi, dar-engebeli mi). Bu üç sorunun cevabı, çoğu durumda kararı kendiliğinden netleştirir.",
                    "Cevaplar net değilse veya iki seçenek arasında gerçekten kararsızsanız, güvenli tarafta kalmayı (operatörlü) öneririz — özellikle ilk kez platform kiralıyorsanız veya saha hakkında tam bilginiz yoksa. Deneyim kazandıkça, sonraki taleplerinizde operatörsüz seçeneği daha rahat değerlendirebilirsiniz.",
                ],
            },
            {
                baslik: "Operatörümüzün sahadaki rolü",
                paragraflar: [
                    "Operatörlü kiralamada operatörümüz yalnızca makineyi kullanmakla kalmaz, aynı zamanda sahadaki güvenlik kurallarına uyar, gerektiğinde konumlanma noktasını saha koşullarına göre ayarlar ve iş bitiminde makinenin düzgün biçimde park edilmesini sağlar. Bu, özellikle karmaşık sahalarda ek bir güvence katmanı oluşturur.",
                    "Operatörümüzün çalışma saatleri, işin kapsamına göre önceden konuşulur; vardiya dışı veya gece çalışması gerekiyorsa bu, sevkiyat planlamasına dahil edilir ve operatör müsaitliği buna göre ayrılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hangisini seçeceğime karar veremiyorum, ne önerirsiniz?",
                cevap:
                    "Üç soruyu birlikte değerlendirelim: işi ne sıklıkla yapacaksınız, ekibinizde deneyimli personel var mı, saha ne kadar karmaşık? Tek seferlik bir iş, deneyimsiz ekip veya karmaşık bir saha söz konusuysa operatörlü öneririz. Düzenli kullanım, deneyimli ekip ve basit bir saha söz konusuysa operatörsüz daha ekonomik olur. Kararsızsanız güvenli tarafta kalıp operatörlü ile başlamanızı öneririz; son karar her zaman sizde.",
            },
            {
                soru: "Operatörsüz kiralarsam hangi belgeyi göstermem gerekiyor?",
                cevap:
                    "Makineyi kullanacak personelin ilgili platform/forklift operatörlük yeterlilik belgesine sahip olması beklenir. Belge durumunuz konusunda emin değilseniz, bunu telefonda açıkça belirtmenizi isteriz — bu durumda operatörlü seçeneği önerir ve belge sorununu tamamen ortadan kaldırırız. Bu konuda net olmak, hem sizin hem bizim için sorumluluk belirsizliğini önler.",
            },
            {
                soru: "Operatörlü kiralamada operatör sadece makineyi mi kullanır, başka ne yapar?",
                cevap:
                    "Operatörümüz makineyi kullanmanın yanında sahadaki güvenlik kurallarına uyar, saha koşullarına göre konumlanma noktasını ayarlar ve iş bitiminde makinenin düzgün park edilmesini sağlar. Karmaşık sahalarda bu, deneyimsiz bir kullanıcının fark edemeyeceği riskleri önceden görmesini sağlayan ek bir güvence katmanıdır.",
            },
            {
                soru: "Operatörsüz kiralamak ne kadar daha ekonomik?",
                cevap:
                    "Operatör bedeli ortadan kalktığı için maliyet belirgin biçimde düşer, ama kesin fark işin süresine ve makine tipine göre değişir; net rakamı telefon görüşmesinde paylaşırız. Sık platform ihtiyacı olan ve kendi ekibi deneyimli işletmeler için bu fark zamanla önemli bir tasarrufa dönüşür. Tek seferlik bir iş için ise operatörlü seçeneğin getirdiği hız ve güvence genellikle bu farkı dengeler.",
            },
            {
                soru: "Sahamız dar ve engebeli, operatörsüz risk mi oluşturur?",
                cevap:
                    "Bu tür sahalarda operatörlü seçeneği öneririz çünkü operatörümüz saha koşullarını ilk elden değerlendirir ve konumlanma noktasını buna göre ayarlar — deneyimsiz bir kullanıcının fark edemeyeceği bir riski (örneğin gizli bir eğim veya zayıf zemin noktası) operatörümüz önceden görebilir. Ekibinizde bu tür sahalarda deneyimli personel varsa operatörsüz de değerlendirilebilir; bunu telefon görüşmesinde birlikte netleştiririz.",
            },
            {
                soru: "Operatörlü kiraladığımızda operatörün çalışma saatleri bizim işimize göre mi ayarlanır?",
                cevap:
                    "Evet, operatörümüzün çalışma saatleri işin kapsamına göre önceden konuşulur ve sizin ihtiyacınıza göre planlanır. Standart mesai saatleri dışında (vardiya dışı, gece) çalışma gerekiyorsa, bunu talep sırasında belirtmeniz, sevkiyat ve operatör müsaitliğinin doğru saate göre ayrılmasını sağlar. Son anda değişen bir saat talebi, operatör programımıza bağlı olarak esneklik kısıtlayabilir; bu yüzden mümkünse erken bildirim öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü/operatörsüz kiralama farkı, yeterlilik belgesi gereksinimi ve maliyet etkisi genel sektör bilgisidir. Hızlı teklif sürecinde karar verme yaklaşımı firma pratiğidir. Tesis adı, marka adı ve rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakım Platformu — Hızlı Teklif ile Kiralama",
        giris:
            "Çok noktalı bakım rotası, tek bir sahada değil birden fazla dağınık noktada (farklı şubeler, farklı tabelalar, farklı direkler) yapılacak işleri tek bir sevkiyat operasyonunda birleştirme ihtiyacından doğar. manliftkirala.online üzerinden bu tür bir talep geldiğinde, hızlı teklif sürecimiz rota planlamasına odaklanır: kaç nokta olduğunu, bu noktaların birbirine göre konumunu ve her noktada ne kadar süre gerekeceğini telefonda veya WhatsApp'ta paylaştığınızda, en verimli sırayla bir rota önerisi ve toplu fiyat sunarız. Bu, her noktayı ayrı ayrı talep etmeye göre hem daha hızlı hem daha ekonomiktir. Bu sayfa, çok noktalı rota taleplerinde hızlı teklif sürecinin nasıl işlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Nokta listesi ve konum bilgisinin önemi",
                metin:
                    "Çok noktalı bir rota talebinde ilk adım, tüm noktaların listesini ve yaklaşık konumlarını almaktır — bu bilgi olmadan verimli bir rota kurmak mümkün değildir. Noktaları bir liste hâlinde (adres veya konum bilgisiyle) paylaşmanız, rotayı coğrafi olarak en mantıklı sırayla planlamamızı sağlar; rastgele sırayla gidilen bir rota, gereksiz yere uzun mesafe ve zaman kaybına yol açabilir.",
            },
            {
                baslik: "Her noktada tahmini süre ve iş kapsamı",
                metin:
                    "Rotadaki her noktada ne kadar süre harcanacağı (kısa bir kontrol mü, uzun bir montaj mı) toplam rotanın kaç günde tamamlanabileceğini belirler. Bu bilgiyi telefonda paylaşmanız, günlük olarak kaç noktanın gerçekçi biçimde tamamlanabileceğini önceden hesaplamamızı sağlar — aşırı iyimser bir plan, sahada gecikmeye ve rotanın uzamasına neden olabilir.",
            },
            {
                baslik: "Coğrafi kümeleme ile verimli sıralama",
                metin:
                    "Dağınık noktalar birbirine yakın kümeler oluşturuyorsa, rota bu kümelere göre gruplanır — aynı gün içinde birbirine yakın noktalar art arda ziyaret edilir, uzak noktalar ayrı günlere ayrılır. Bu kümeleme, toplam kat edilen mesafeyi ve dolayısıyla nakliye maliyetini önemli ölçüde azaltır. Noktaların birbirine göre yaklaşık mesafesini bilmiyorsanız bile, bir harita üzerinde işaretleyip paylaşmanız yeterlidir.",
            },
            {
                baslik: "Rota sırasında beklenmedik ek nokta",
                metin:
                    "Rota devam ederken bazen beklenmedik bir ek nokta ortaya çıkar (örneğin sahada fark edilen ek bir ihtiyaç). Bu, mümkünse aynı rotaya, coğrafi olarak uygun bir noktaya eklenir; rota sırası ve zamanlaması buna göre esnetilir. Eklenemiyorsa, bir sonraki rota turu için not edilir ve önceliklendirilir.",
            },
            {
                baslik: "Düzenli tekrarlayan rotalar için önceden planlama",
                metin:
                    "Bazı işletmelerin periyodik olarak tekrarlayan bir bakım rotası vardır (örneğin aylık şube kontrolü). Bu tür düzenli rotalarda, rota planı bir kez kurulduktan sonra sonraki turlarda büyük ölçüde tekrarlanır ve yalnızca değişen noktalar veya süre güncellenir — bu, her seferinde sıfırdan planlama yapmanızı gerektirmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında paylaşılması gereken bilgiler",
                paragraflar: [
                    "Çok noktalı rota talebinde verimli bir plan kurmak için ihtiyaç duyduğumuz bilgiler aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Bilgi", "Neden gerekli", "Nasıl paylaşılır", "Eksikse etkisi"],
                    satirlar: [
                        ["Nokta listesi + konumlar", "Rota sıralaması", "Liste veya harita işaretleme", "Verimsiz, uzun rota"],
                        ["Her noktada tahmini süre", "Günlük kapasite hesabı", "Sesli veya liste", "Aşırı iyimser plan, gecikme"],
                        ["Erişim özellikleri (varsa)", "Doğru makine sınıfı", "Sesli veya fotoğraf", "Uygun olmayan makine riski"],
                        ["Tekrarlayan mı tek seferlik mi", "Planlama biçimi", "Sesli, en başta", "Yanlış varsayımla planlama"],
                        ["Öncelik sırası (varsa)", "Rota içi sıralama", "Sesli", "Kritik nokta gecikebilir"],
                    ],
                },
            },
            {
                baslik: "Coğrafi kümelemenin maliyet etkisi",
                paragraflar: [
                    "Dağınık noktaları rastgele sırayla ziyaret etmek yerine coğrafi kümelere göre planlamak, toplam kat edilen mesafeyi önemli ölçüde azaltır ve bu doğrudan nakliye maliyetine yansır. Bir günde birbirine yakın üç-dört noktayı tamamlamak, aynı sayıda noktayı farklı günlere dağıtmaya göre hem daha hızlı hem daha ekonomiktir.",
                    "Bu kümelemeyi doğru yapabilmek için noktaların yaklaşık konumunu bilmemiz yeterlidir; kesin adres olmasa bile bir bölge tarifi veya harita işareti bize başlangıç noktası verir.",
                ],
            },
            {
                baslik: "Düzenli rotanın kurumsallaşması",
                paragraflar: [
                    "Periyodik olarak tekrarlayan bir bakım rotanız varsa, ilk rota planlaması sonrasında bu plan bir şablon hâline gelir ve sonraki turlarda yalnızca değişiklikleri (yeni nokta eklenmesi, bir noktanın kaldırılması, süre değişikliği) güncelleriz. Bu, her turda sıfırdan planlama yapma yükünü ortadan kaldırır ve rotanın zamanla daha da verimli hâle gelmesini sağlar.",
                    "Düzenli rota talep ediyorsanız, bunu ilk görüşmede belirtmeniz, süreci bu şekilde kurmamıza yardımcı olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "5-6 farklı noktamız var, hepsini tek seferde mi planlamalıyız?",
                cevap:
                    "Evet, bu en verimli yaklaşım. Tüm noktaların listesini ve yaklaşık konumlarını paylaşırsanız, coğrafi olarak en mantıklı sırayla bir rota öneririz ve toplu bir fiyat sunarız. Bu, her noktayı ayrı ayrı talep etmeye göre hem daha hızlı hem daha ekonomiktir çünkü nakliye tüm noktalar arasında bölünür.",
            },
            {
                soru: "Noktaların kesin adresini bilmiyorum, sadece bölge tarifim var; yeterli mi?",
                cevap:
                    "Başlangıç için yeterli. Bir harita üzerinde işaretleyip paylaşmanız veya genel bir bölge tarifi vermeniz, kümeleme mantığını kurmamız için yeterli bir başlangıç noktasıdır. Kesin adresleri rota kesinleşmeden önce netleştiririz; bu süreç genellikle telefon veya WhatsApp üzerinden hızlıca tamamlanır.",
            },
            {
                soru: "Rota sırasında sahada beklenmedik bir ek iş çıkarsa ne olur?",
                cevap:
                    "Mümkünse aynı rotaya, coğrafi olarak uygun bir noktaya ekleriz ve rota sırasını buna göre esnetiriz. Eklemek mümkün değilse (örneğin rota o gün doluysa), bir sonraki tur için not eder ve önceliklendiririz. Bu tür durumları esnek karşılıyoruz çünkü sahada beklenmedik ihtiyaçların çıkması çok noktalı işlerde sık karşılaşılan bir durumdur.",
            },
            {
                soru: "Her ay tekrarlayan bir bakım turumuz var, her seferinde yeniden mi planlamamız gerekiyor?",
                cevap:
                    "Hayır. İlk rota planlaması bir şablon hâline gelir ve sonraki turlarda yalnızca değişiklikleri (yeni nokta, kaldırılan nokta, süre değişikliği) güncelleriz. Bu, her seferinde sıfırdan planlama yapma yükünü ortadan kaldırır. Düzenli bir rota talep ettiğinizi ilk görüşmede belirtmeniz, süreci bu şekilde kurmamıza yardımcı olur.",
            },
            {
                soru: "Noktalarımız birbirine çok uzak, tek günde bitirilebilir mi?",
                cevap:
                    "Bu, noktalar arası mesafeye ve her noktada harcanacak süreye bağlı — dürüst bir değerlendirme için bu bilgileri paylaşmanızı isteriz. Uzak noktalar tek günde sığmıyorsa, rotayı coğrafi kümelere göre birden fazla güne böleriz; bu, aşırı iyimser bir planla sahada gecikme yaşamaktan daha sağlıklıdır. Gerçekçi bir gün sayısını telefon görüşmesinde birlikte netleştiririz.",
            },
            {
                soru: "Rotadaki bazı noktalar diğerlerinden daha acil, bunu belirtebilir miyim?",
                cevap:
                    "Elbette, öncelik sırasını belirtmeniz rotayı buna göre kurmamıza yardımcı olur. Acil noktalar rotanın başına alınır, daha esnek olanlar sona bırakılır. Bu bilgiyi ilk görüşmede paylaşmanız, kritik bir noktanın rota sonuna denk gelip gereksiz yere gecikmesini önler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çok noktalı rota planlaması ve coğrafi kümeleme mantığı firma pratiğidir. Hızlı teklif sürecinin rota bazlı uyarlanması firma pratiğidir. Tesis adı, mesafe rakamı ve nokta sayısı uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin / Arazi Platform Kiralama — Hızlı Teklif ile Kiralama",
        giris:
            "Zor zemin ve arazi koşullarındaki platform talepleri, standart bir sahaya göre daha fazla ön bilgi gerektirir çünkü yanlış makine seçimi burada yalnızca verimsizlik değil, makinenin sahaya giremiyor olması veya güvenli çalışamaması anlamına gelebilir. manliftkirala.online üzerinden bu tür bir talepte hızlı teklif sürecimiz aynı temel mantıkla işler — telefon veya WhatsApp üzerinden zemin bilgisini paylaşırsınız — ama zor zeminde bu bilgi paylaşımı standart bir sahaya göre daha kritik hâle gelir. Bu sayfa, zor zemin ve arazi koşullarında hangi bilgilerin belirleyici olduğunu ve hızlı teklif sürecinin bu koşullarda nasıl daha dikkatli işlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Zemin türünün doğru tarif edilmesi",
                metin:
                    "'Zor zemin' geniş bir tanımdır — engebeli toprak, çakıllı arazi, hafif bataklık, moloz dolgu veya eğimli bir yamaç, her biri farklı bir makine çözümü gerektirir. Telefonda zemin türünü olabildiğince somut tarif etmeniz (örneğin 'traktörle bile zor geçilen yumuşak bir alan' veya 'taşlık ama sert bir arazi') doğru şase ve lastik tipini belirlememizi hızlandırır. Mümkünse fotoğraf paylaşmanız, sözlü tarifin ötesinde net bir değerlendirme sağlar.",
            },
            {
                baslik: "Paletli şasenin zor zeminde avantajı",
                metin:
                    "Standart lastikli platformların zorlandığı yumuşak, engebeli veya eğimli zeminlerde paletli şaseli makineler daha geniş bir temas yüzeyiyle daha dengeli hareket eder. Zemin gerçekten zorluysa, teklifte varsayılan olarak paletli şase önerilir; zeminin göründüğünden daha sağlam olduğu durumlarda standart lastikli seçenek de değerlendirilebilir — bu ayrımı telefon görüşmesinde birlikte netleştiririz.",
            },
            {
                baslik: "Eğimli arazide destek ve dengeleme",
                metin:
                    "Eğimli bir arazide çalışacak platformun, eğimi dengeleyecek bir destek ayağı sistemine sahip olması gerekir; her makine bu özelliğe aynı ölçüde sahip değildir. Arazinin yaklaşık eğim derecesini (hafif eğimli mi, belirgin bir yamaç mı) tarif etmeniz, dengeleme kapasitesi yeterli modeli seçmemizi sağlar. Eğim belirli bir sınırı aşıyorsa, bunu dürüstçe söyler, güvenli çalışmanın mümkün olmadığı durumları da açıkça belirtiriz.",
            },
            {
                baslik: "Hazırlıksız sahada erişim güzergâhı",
                metin:
                    "Yol yapımı henüz tamamlanmamış veya erişim güzergâhı belirsiz sahalarda, makinenin sahaya nasıl ulaşacağı teklif aşamasında ayrı bir soru hâline gelir. Mevcut bir yol veya patika varsa bunun genişliğini ve zeminini paylaşmanız, taşıyıcı aracın ve platformun kendi gücüyle mi yoksa çekilerek mi ilerleyeceğini önceden planlamamızı sağlar.",
            },
            {
                baslik: "Sahaya gitmeden önce dürüst bir uygunluk değerlendirmesi",
                metin:
                    "Bazı zemin koşulları (aşırı bataklık, çok dik eğim, geçilemez engebe) hiçbir platform modeli için güvenli değildir. Bu tür bir durumla karşılaştığımızda, makineyi sahaya gönderip sahada karar vermek yerine, elimizdeki bilgiyle önceden değerlendirme yapar ve gerçekten uygun değilse bunu telefonda dürüstçe söyleriz — alternatif bir yaklaşım (örneğin zemin iyileştirmesi sonrası tekrar değerlendirme) önerebiliriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin türüne göre model tercihi",
                paragraflar: [
                    "Zor zemin ve arazi koşullarında hangi zemin türünde hangi yaklaşımın öncelendiği aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Zemin türü", "Öncelikli çözüm", "Ek değerlendirme", "Sınır durumu"],
                    satirlar: [
                        ["Engebeli/taşlık ama sert", "Paletli veya güçlü lastikli şase", "Fotoğrafla teyit", "Aşırı büyük kaya/çukur varsa risk"],
                        ["Yumuşak/bataklık eğilimli", "Paletli şase, geniş temas yüzeyi", "Zeminin ne kadar yumuşak olduğu", "Aşırı bataklıkta çalışma mümkün olmayabilir"],
                        ["Eğimli yamaç", "Dengeleme kapasitesi yüksek model", "Yaklaşık eğim derecesi", "Belirli sınırı aşan eğimde güvenli değil"],
                        ["Erişim yolu belirsiz", "Önceden güzergâh değerlendirmesi", "Yol genişliği/zemini", "Yol yoksa alternatif erişim gerekir"],
                        ["Moloz/dolgu alan", "Zemin sağlamlığı önce teyit edilir", "Dolgu yaşı ve sıkışma durumu", "Yeni dolguda taşıma riski"],
                    ],
                },
            },
            {
                baslik: "Fotoğrafın telefon tarifinden daha güvenilir olduğu durum",
                paragraflar: [
                    "Zor zemin taleplerinde sözlü tarif ile gerçek durum arasında zaman zaman fark olabilir çünkü 'zor zemin' herkes için farklı bir eşiği ifade edebilir. Bu belirsizliği ortadan kaldırmanın en pratik yolu, zeminin birkaç fotoğrafını (farklı açılardan, mümkünse bir referans nesnesiyle ölçek hissi verecek şekilde) WhatsApp'tan paylaşmaktır.",
                    "Fotoğrafla yapılan değerlendirme, telefon teklifinin sahadaki gerçek durumdan büyük sapma gösterme riskini önemli ölçüde azaltır — bu da hem sizin hem bizim için sürpriz bir durumla karşılaşma ihtimalini düşürür.",
                ],
            },
            {
                baslik: "Güvenli çalışmanın mümkün olmadığı durumları kabul etmek",
                paragraflar: [
                    "Dürüstçe belirtmek isteriz: her zemin koşulu için güvenli bir platform çözümü yoktur. Aşırı bataklık bir zemin, çok dik bir yamaç veya geçilemez bir engebe, hiçbir model için güvenli bir çalışma imkânı sunmayabilir. Böyle bir durumla karşılaştığımızda, makineyi göndermek yerine bunu önceden söylemeyi tercih ederiz.",
                    "Bu tür durumlarda alternatif bir yaklaşım önerebiliriz — örneğin zeminin kısmen iyileştirilmesi (sıkıştırma, geçici plaka döşeme) sonrası tekrar değerlendirme, veya farklı bir erişim noktasının araştırılması.",
                ],
            },
        ],
        sss: [
            {
                soru: "Zeminimizin ne kadar 'zor' olduğunu nasıl anlatabilirim?",
                cevap:
                    "Günlük dille yapılan bir tarif bile işe yarar — 'traktörle bile zor geçiliyor', 'taşlık ama sert', 'yağmurdan sonra çamurlaşıyor' gibi ifadeler bize başlangıç noktası verir. En güvenilir yöntem ise birkaç fotoğraf paylaşmanızdır; farklı açılardan çekilmiş fotoğraflar, sözlü tarife göre çok daha net bir değerlendirme sağlar ve telefon teklifinin sahadaki gerçek durumdan sapma riskini azaltır.",
            },
            {
                soru: "Paletli platform standart platformdan daha mı pahalı?",
                cevap:
                    "Genellikle biraz daha yüksek bir bedeli olabilir, ama zor zeminde bu bir tercih değil gereklilik hâline gelir — standart lastikli bir makine bu tür zeminlerde ya çalışamaz ya da güvenli değildir. Zeminin gerçekte ne kadar zorlu olduğunu paylaştığınızda, paletli şasenin gerçekten gerekli olup olmadığını dürüstçe değerlendirir, standart seçenek yeterliyse bunu öneririz.",
            },
            {
                soru: "Arazimiz eğimli, bu ne kadar bir risk oluşturur?",
                cevap:
                    "Eğim derecesine bağlı. Hafif eğimli arazilerde dengeleme kapasitesi yeterli bir model güvenle çalışabilir; ama belirli bir eğim sınırını aşan yamaçlarda hiçbir platform modeli güvenli değildir ve bunu size dürüstçe söyleriz. Arazinizin yaklaşık eğimini tarif etmeniz veya fotoğraf paylaşmanız, bu değerlendirmeyi telefonda yapmamızı sağlar.",
            },
            {
                soru: "Sahamıza giden düzgün bir yol yok, yine de gelebilir misiniz?",
                cevap:
                    "Genellikle değerlendirebiliriz, ama bu mevcut patikanın veya erişim güzergâhının genişliğine ve zeminine bağlıdır. Bu bilgiyi paylaşmanız, taşıyıcı aracın ve platformun sahaya nasıl ulaşacağını önceden planlamamızı sağlar. Erişim gerçekten mümkün değilse, bunu dürüstçe söyler, alternatif bir güzergâh veya erişim noktası olup olmadığını birlikte araştırırız.",
            },
            {
                soru: "Fotoğraf çekmeden telefonla tarif etsem yine de teklif alabilir miyim?",
                cevap:
                    "Basit tariflerle bir ön değerlendirme yapabiliriz, ama zor zemin taleplerinde fotoğraf, teklifin doğruluğunu belirgin biçimde artırır. Sözlü tarifle verilen bir teklif bu kategoride ön tahmin niteliğindedir ve sahada küçük bir sapma olabilir; fotoğrafla verilen teklif ise gerçek duruma çok daha yakındır. Mümkünse fotoğraf paylaşmanızı öneririz.",
            },
            {
                soru: "Zeminimiz gerçekten çok zor, hiçbir makine çalışamayabilir mi?",
                cevap:
                    "Evet, bu mümkün ve bunu dürüstçe söylüyoruz — aşırı bataklık bir zemin, çok dik bir yamaç veya geçilemez bir engebe, hiçbir platform modeli için güvenli olmayabilir. Böyle bir durumda makineyi göndermek yerine bunu önceden değerlendirir ve alternatif bir yaklaşım (zemin iyileştirmesi sonrası tekrar değerlendirme, farklı erişim noktası) öneririz. Amacımız, güvenli olmayan bir işi üstlenmek değil, gerçekçi bir çözüm bulmaktır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Paletli şase, eğim dengeleme ve zemin uygunluğu genel makine/uygulama bilgisidir. Hızlı teklif sürecinde fotoğrafla ön değerlendirme ve güvenli olmayan zeminin dürüstçe reddedilmesi firma pratiğidir. Tesis adı, mesafe rakamı ve eğim derecesi uydurulmamıştır.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Nilüfer-Osmangazi Yan Sanayi Atölyelerinde Makaslı Platform Kiralama",
        giris:
            "Bir otomotiv yan sanayi atölyesinin içi, açık bir sahadan çok farklı bir mekândır: pres hattı ile CNC istasyonu arasında bir metreyi geçmeyen koridorlar, tepede geçen vinç rayları, aralıksız çalışan konveyörler ve her santimin üretime ayrıldığı bir yerleşim düzeni. Böyle bir alanda yükseğe erişim gerektiren bir bakım işi geldiğinde ilk soru 'hangi makine' değil 'hangi gövde genişliği koridordan geçer' olur — ve bu soruyu doğru cevaplayan gövde, çoğunlukla dar şaseli makaslı platformdur. Nilüfer ve Osmangazi'deki yan sanayi tesislerinde makaslı platform talebi çoğunlukla tek bir olaya bağlı gelir: ana sanayi üreticisinin üretim planında açılan kısa bir pencere. Model değişikliği, hat revizyonu veya planlı bir duruş, atölyeye birkaç saatlik ya da birkaç günlük bir bakım fırsatı tanır ve bu fırsat kaçırıldığında bir sonraki pencere haftalar sonra gelebilir. Bu sayfa, dar atölye koridorlarında ve kısa bakım pencerelerinde makaslı platform kiralamanın nasıl planlandığını, hangi gövde seçiminin hangi durumda öne çıktığını anlatıyor.",
        maddeler: [
            {
                baslik: "Dar koridorda gövde genişliği, kapasiteden önce gelir",
                metin:
                    "Pres hattı ile montaj istasyonu arasındaki koridor genellikle sabit bir genişliktedir ve bu genişlik değişmez; değişebilecek olan makinenin gövdesidir. Bu yüzden Nilüfer-Osmangazi'deki atölye taleplerinde ilk sorduğumuz şey çalışma yüksekliği değil, koridorun gerçek geçiş genişliğidir — dar gövdeli bir makaslı platform, geniş taşıma kapasiteli bir modelden çoğu zaman daha değerlidir çünkü koridordan geçemeyen bir makine hangi kapasiteye sahip olursa olsun işe yaramaz. Ölçüyü telefonda net paylaşmanız, sahaya uygun olmayan bir makinenin gönderilip geri çevrilmesi riskini baştan ortadan kaldırır.",
            },
            {
                baslik: "Model değişikliği penceresinde hız, konfordan önce gelir",
                metin:
                    "Ana sanayi üreticisi bir model değişikliğine geçtiğinde, tedarikçi hattında da kısa süreli bir duruş penceresi açılır ve bu pencere önceden ilan edilmiş, sabit bir süreye sahiptir — genellikle uzatılamaz. Bu pencerede yapılacak vinç rayı bakımı, tavan aydınlatması değişimi veya hat üstü sensör kurulumu gibi işlerde makaslı platformun hızlı kurulup hızlı sökülebilmesi, çalışma konforundan daha belirleyici bir kriter hâline gelir. Pencere süresini paylaştığınızda, kurulum-söküm süresi bu pencereye sığacak gövdeyi öneririz; sığmayacaksa bunu dürüstçe söyleriz.",
            },
            {
                baslik: "Vinç rayı ve tavan aydınlatması için dengeli, sabit platform ihtiyacı",
                metin:
                    "Tavan vinç rayı hizalaması veya hat üstü aydınlatma değişimi gibi işler, operatörün belirli bir noktada uzun süre sabit ve dengeli durmasını gerektirir; bu işlerde eklemli bir kolun ucundaki sepet yerine, geniş ve sabit bir platform yüzeyi daha güvenli ve daha verimli çalışılmasını sağlar. Makaslı platformun dikey, tek eksenli hareketi, tam bu tür nokta işlerinde eklemli platforma göre öne çıkar — kol sallanması veya sepet dengesi endişesi olmadan iki elle çalışma imkânı sunar.",
            },
            {
                baslik: "Kalite kontrol istasyonunda hat durmadan çalışma zorunluluğu",
                metin:
                    "Bazı bakım işleri, hattın tamamen durmasını beklemeden, yalnızca bir istasyonun etrafında sınırlı bir alanda yapılabilir — örneğin kalite kontrol panosu üzerindeki bir aydınlatma değişimi ya da kamera kalibrasyonu. Bu tür işlerde platformun dar tabanı, komşu istasyonların çalışmasını engellemeden konumlanabilmesi açısından belirleyicidir. Hangi istasyonun çevresinde çalışılacağını ve komşu hatların o sırada aktif olup olmadığını paylaşmanız, doğru taban ölçüsüne sahip modeli önermemizi sağlar.",
            },
            {
                baslik: "Islak zemin ve elektrik hattı yakınında güvenlik gereksinimleri",
                metin:
                    "Metal işleme atölyelerinde soğutma sıvısı nedeniyle zaman zaman ıslak zemin, plastik enjeksiyon tesislerinde ise elektrik pano hatlarına yakın çalışma alanları oluşabilir. Bu koşullarda platformun tekerlek malzemesi ve elektriksel yalıtım özellikleri önem kazanır; talebinizi aldığımızda zemin durumunu ve çalışma noktasının elektrik hatlarına yakınlığını sorarak uygun donanımlı modeli seçeriz, gerekirse iş güvenliği uzmanınızla birlikte doğrularız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atölye alanı tipine göre makaslı platform seçimi",
                paragraflar: [
                    "Yan sanayi atölyesinin farklı bölümlerinde hangi gövde ve önceliğin öne çıktığı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Öncelikli gövde", "Belirleyici kısıt", "Zamanlama"],
                    satirlar: [
                        ["Pres hattı arası dar koridor", "Dar tabanlı, kompakt makaslı", "Geçiş genişliği", "Planlı duruş penceresi"],
                        ["Vinç rayı / tavan aydınlatması", "Geniş sabit platformlu makaslı", "Dengeli, uzun süreli konum", "Model değişikliği penceresi"],
                        ["Kalite kontrol istasyonu çevresi", "Dar tabanlı, düşük gürültülü", "Komşu hat aktifliği", "Hat durmadan, sınırlı alanda"],
                        ["Islak zemin / soğutma sıvısı alanı", "Uygun tekerlek/yalıtım donanımlı", "Zemin ve elektrik yakınlığı", "İş güvenliği onayına bağlı"],
                        ["Montaj hattı üstü sensör/kablo işi", "Orta kapasiteli, hızlı kurulum", "Kurulum-söküm süresi", "Kısa, sabit süreli pencere"],
                    ],
                },
            },
            {
                baslik: "Kısa pencerede kaybedilen zamanın maliyeti",
                paragraflar: [
                    "Model değişikliği veya planlı duruş pencereleri genellikle önceden ilan edilir ve süresi sabittir; bu pencerenin bir kısmının makinenin sahaya ulaşması ya da kurulumu için harcanması, geriye kalan gerçek çalışma süresini doğrudan azaltır. Bu yüzden Nilüfer-Osmangazi hattındaki taleplerde teslimat saatini pencerenin başlangıcına değil, mümkünse biraz öncesine planlamaya çalışırız.",
                    "Pencere süresi bize önceden bildirildiğinde, kurulum-söküm süresi bu pencereye rahatça sığan bir gövde önerir; sığmayacak bir durumla karşılaştığımızda bunu erkenden söyleyip alternatif bir zamanlama veya daha hızlı kurulan bir model üzerinde birlikte karar veririz.",
                ],
            },
            {
                baslik: "Eklemli platform yerine makaslı platform ne zaman doğru tercih",
                paragraflar: [
                    "Eklemli (boom) platformlar, engelli noktalara ulaşmada avantajlıdır ama tek noktada uzun süre sabit durmayı gerektiren işlerde makaslı platformun geniş ve dengeli tabanı genellikle daha konforlu ve daha verimlidir. Vinç rayı hizalaması, tavan aydınlatması değişimi veya hat üstü kablolama gibi 'aynı noktada uzun süre çalışma' gerektiren işlerde makaslı platformu öneririz.",
                    "Buna karşılık kolon arası, boru hattı üstü gibi engelli bir noktaya erişim gerekiyorsa, bu iş makaslı platformun kapsamı dışına çıkar ve eklemli platform daha uygun bir çözüm olur — böyle bir talep geldiğinde bunu dürüstçe belirtir, doğru gövdeyi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizdeki koridorlar çok dar, hangi ölçüyü paylaşmalıyız?",
                cevap:
                    "En kritik ölçü, platformun geçmesi gereken en dar noktanın genişliğidir — genellikle iki pres hattı veya iki raf arasındaki mesafe. Bu ölçüyü santimetre cinsinden paylaşmanız, gövde genişliği bu koridordan güvenle geçecek modeli önceden belirlememizi sağlar. Ölçüyü tam bilmiyorsanız, koridorun fotoğrafını bir referans nesnesiyle (örneğin bir palet) birlikte paylaşmanız da yardımcı olur.",
            },
            {
                soru: "Model değişikliği penceremiz sadece birkaç saat, bu sürede kurulum mümkün mü?",
                cevap:
                    "Pencerenin süresini önceden paylaştığınızda, kurulum-söküm süresi bu pencereye sığacak bir gövde öneririz ve teslimatı pencerenin başlangıcından biraz önce planlarız ki gerçek çalışma süreniz kısalmasın. Süre gerçekten çok kısaysa ve makinenin kurulumu bu süreye sığmıyorsa, bunu önceden söyleriz — pencereyi doldurmayacak bir taahhüt vermek yerine gerçekçi bir zamanlama üzerinde birlikte karar veririz.",
            },
            {
                soru: "Vinç rayı bakımı için neden eklemli değil makaslı platform öneriyorsunuz?",
                cevap:
                    "Vinç rayı hizalaması gibi işler, operatörün belirli bir noktada uzun süre sabit ve dengeli durmasını gerektirir. Eklemli platformun kolunun ucundaki sepet bu tür uzun süreli nokta işlerinde daha az stabil hissettirebilirken, makaslı platformun geniş ve sabit tabanı iki elle çalışma konforu sağlar. Erişilecek nokta bir engelin arkasındaysa bu değerlendirme değişir ve eklemli platform gerekebilir; talebinizi aldığımızda bu ayrımı birlikte netleştiririz.",
            },
            {
                soru: "Zeminimiz soğutma sıvısı nedeniyle zaman zaman ıslak oluyor, bu bir sorun mu?",
                cevap:
                    "Zemin durumunu bize önceden bildirmeniz önemlidir çünkü ıslak zeminlerde uygun tekerlek malzemesine sahip bir model tercih ederiz ve gerekirse çalışma noktasının elektrik hatlarına yakınlığını da sorarak ek bir yalıtım gereksinimi olup olmadığını değerlendiririz. Bu bilgi paylaşılmadan gönderilen bir makine, sahada beklenmedik bir güvenlik sorunu yaratabilir; bu yüzden bu soruyu teklif aşamasında mutlaka sorarız.",
            },
            {
                soru: "Kalite denetimi öncesi hat durmadan bir bakım yaptırabilir miyiz?",
                cevap:
                    "Genellikle evet, ama bu komşu istasyonların o sırada aktif olup olmadığına bağlıdır. Hangi istasyonun çevresinde çalışılacağını ve etrafındaki hatların çalışma durumunu paylaşmanız, dar tabanlı ve düşük hareket alanı gerektiren bir modeli önceden belirlememizi sağlar. Komşu hatların aktif olduğu bir alanda çalışmak güvenli değilse, bunu önceden söyler, kısa bir duruş penceresi planlamanızı öneririz.",
            },
            {
                soru: "Sipariş verdiğimiz makine koridordan geçmezse ne olur?",
                cevap:
                    "Bu durumun yaşanmaması için teklif aşamasında koridor genişliğini net olarak sormamız buradan kaynaklanır — ölçü doğru paylaşıldığında bu risk pratikte ortadan kalkar. Yine de ölçüde bir belirsizlik varsa, sahaya gönderilmeden önce telefon veya fotoğraf üzerinden teyit ederiz; sahada geri çevrilen bir makine hem sizin hem bizim için kaybedilen bir bakım penceresi anlamına gelir ve bunu önlemek karşılıklı çıkarımızadır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Otomotiv yan sanayi tedarik zincirinde model değişikliği/planlı duruş pencerelerinin kısa ve sabit süreli olması, ana sanayi üreticisinin üretim planına bağımlılık genel sektör bilgisidir. Dar koridor/gövde genişliği, vinç rayı bakımı ve makaslı-eklemli platform ayrımı genel makine/uygulama bilgisidir. Tesis adı ve rakam uydurulmamıştır; 'ana sanayi üreticisi' genel ifadesiyle anılmıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Nilüfer-Osmangazi Yan Sanayi Tesislerinde Manlift Kiralama — Sevkiyat ve Depo Erişimi",
        giris:
            "Bir otomotiv yan sanayi tesisinin üretim hattının içi kadar, sevkiyat kapısı ve depo sahası da sıkı bir takvime bağlıdır — ama bu takvimi belirleyen üretim planı değil, tam zamanında (JIT) teslimat programıdır. Ana sanayiye giden kamyon, belirlenen saatte yükleme rampasında olmak zorundadır ve bu rampanın, dış cephenin veya depo yüksek raflarının bakımı, kamyon trafiğinin yoğun olduğu saatlerde değil, bu trafiğin durduğu dar pencerelerde yapılmalıdır. Nilüfer ve Osmangazi'deki yan sanayi tesislerinde manlift talebi bu yüzden çoğunlukla iki farklı ihtiyaçtan gelir: dış cephe ve çatı gibi açık sahadaki yüksek erişim işleri, ve depo/sevkiyat alanındaki yüksek raf veya aydınlatma bakımı. İkisi de aynı kısıtla karşı karşıyadır — kamyon giriş-çıkışının aksamaması. Bu sayfa, sevkiyat ritmine bağlı bir tesiste eklemli ve teleskopik manlift kiralamanın nasıl planlandığını, hangi gövdenin hangi alanda öne çıktığını anlatıyor.",
        maddeler: [
            {
                baslik: "Kamyon trafiği yoğun saatlerde rampa çevresinde çalışma yasağı",
                metin:
                    "Yükleme rampasının hemen üzerindeki bir aydınlatma değişimi veya çatı oluğu bakımı, kamyonların giriş-çıkış yaptığı saatlerde yapılamaz; hem güvenlik riski oluşturur hem de sevkiyat akışını yavaşlatır. Bu yüzden rampa çevresi taleplerinde önce sevkiyat programınızı — kamyonların yoğunlaştığı saat aralıklarını — sorarız ve manlift işini bu aralıkların dışında kalan dar pencerelere yerleştiririz. Sevkiyat programınız günden güne değişiyorsa, bu değişkenliği de paylaşmanız planlamayı kolaylaştırır.",
            },
            {
                baslik: "Depo yüksek raf erişiminde teleskopik gövdenin avantajı",
                metin:
                    "Açık, engelsiz bir depo koridorunda yüksek raf üzerindeki bir aydınlatma armatürüne veya raf sistemine erişim gerektiğinde, teleskopik manlift genellikle en verimli çözümdür — düz bir hat üzerinde daha yüksek ve daha uzun erişim sağlar. Depo koridorunun genişliğini ve raf yüksekliğini paylaşmanız, gövde kapasitesi bu erişime yetecek doğru modeli önceden belirlememizi sağlar.",
            },
            {
                baslik: "Dış cephe ve çatı bakımında eklemli gövdenin gerekliliği",
                metin:
                    "Cephedeki bir tabela, çatı kenarındaki bir oluk veya bina köşesindeki bir aydınlatma direği gibi engelli noktalara erişim, düz bir hat üzerinde çalışan teleskopik gövdeyle değil, kolu kırılabilen eklemli manliftle mümkün olur. Bu tür işlerde erişilecek noktanın bina cephesine göre konumunu (köşe mi, girinti mi, parapetin arkası mı) tarif etmeniz, doğru kol uzunluğuna ve kırılma açısına sahip modeli seçmemizi sağlar.",
            },
            {
                baslik: "Hava koşulunun sevkiyat penceresiyle çakışması",
                metin:
                    "Açık sahada çalışan bir manlift için rüzgâr ve yağış gibi hava koşulları güvenlik açısından belirleyicidir; ama sevkiyat penceresi hava durumunu beklemez. Bu yüzden rampa veya çatı işlerinde, hem uygun hava koşulunu hem de sevkiyat trafiğinin düşük olduğu saati aynı anda yakalamaya çalışırız — bu iki kısıt çakıştığında pencere daralır ve erken planlama daha da önem kazanır. Esnek olabileceğiniz gün aralığını paylaşmanız, uygun pencereyi bulma şansımızı artırır.",
            },
            {
                baslik: "Konteyner ve TIR park alanı yakınında güvenli konumlanma",
                metin:
                    "Depo ve sevkiyat sahalarında park hâlindeki konteyner veya TIR'lar, manliftin manevra alanını daraltabilir ve görüş açısını kısıtlayabilir. Sahadaki park düzenini ve manevra için ayrılabilecek alanı önceden bilmemiz, hem doğru gövde boyutunu seçmemizi hem de operatörün güvenli bir rota planlamasını sağlar; bu bilgi paylaşılmadığında sahada gecikme yaşanma riski artar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sevkiyat tesisinde iş tipine göre manlift seçimi",
                paragraflar: [
                    "Yan sanayi tesisinin sevkiyat ve depo alanındaki farklı iş tiplerinde hangi gövde ve zamanlama önceliğinin öne çıktığı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Önerilen gövde", "Zamanlama penceresi", "Ek kısıt"],
                    satirlar: [
                        ["Yükleme rampası üstü bakım", "Kompakt eklemli", "Kamyon trafiği dışı saat", "Sevkiyat programına bağlı"],
                        ["Depo yüksek raf/aydınlatma", "Teleskopik, düz hat erişimli", "Depo boş saatleri", "Koridor genişliği"],
                        ["Dış cephe/tabela/oluk", "Eklemli, kırılan kollu", "Hava koşulu uygun gün", "Engelli nokta konumu"],
                        ["Çatı kenarı bakımı", "Eklemli, geniş açılı", "Rüzgârsız/kuru hava", "Sevkiyat trafiğiyle çakışma riski"],
                        ["Konteyner/TIR alanı yakını iş", "Dar manevralı, orta boy", "Park düzeni müsait saat", "Manevra alanı kısıtı"],
                    ],
                },
            },
            {
                baslik: "İki kısıtın çakıştığı dar pencere",
                paragraflar: [
                    "Açık sahada çalışan bir manlift için hava koşulu ve sevkiyat trafiğinin düşük olduğu saat aynı anda sağlanmalıdır; bu iki kısıt genellikle bağımsız değildir ve çakıştıklarında gerçek çalışma penceresi oldukça daralabilir. Nilüfer-Osmangazi hattındaki taleplerde bu yüzden mümkün olduğunca geniş bir gün aralığı ve esnek bir saat tercihi paylaşılmasını öneririz.",
                    "Pencere daraldığında öncelik sırasını birlikte belirleriz — hangi işin ertelenemez olduğunu, hangisinin bir sonraki uygun pencereye bırakılabileceğini sizinle netleştirir, sevkiyat akışınızı hiçbir şekilde riske atmayacak bir plan üzerinde anlaşırız.",
                ],
            },
            {
                baslik: "Teleskopik ile eklemli arasındaki temel ayrım",
                paragraflar: [
                    "Teleskopik manlift düz bir hat üzerinde daha yüksek ve daha uzun erişim sağlar; açık, engelsiz bir depo koridorunda veya geniş bir sahada bu avantaj öne çıkar. Eklemli manlift ise kolunu kırabildiği için bina köşesi, parapet arkası veya boru hattı gibi engelli noktalara ulaşabilir — ama düz erişimde teleskopik kadar yükseğe çıkamayabilir.",
                    "Talebinizi aldığımızda erişilecek noktanın engelli mi engelsiz mi olduğunu sorarız; bu tek soru çoğu zaman doğru gövde tipini belirlemeye yeter. Emin değilseniz, noktanın fotoğrafını paylaşmanız kararı kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sevkiyat rampamızın üstünde bakım yaptırmak istiyoruz, ne zaman uygun olur?",
                cevap:
                    "Bunun cevabı tamamen sizin sevkiyat programınıza bağlı — kamyonların en az yoğun olduğu saat aralığını paylaşırsanız, işi o pencereye yerleştiririz. Sevkiyat programı gün içinde değişkense, esnek olabileceğiniz birkaç saat aralığı vermeniz uygun bir pencere bulma şansımızı artırır. Programı bilmeden gönderilen bir makine, kamyon trafiğiyle çakışıp hem sevkiyatı hem bakım işini aksatabilir.",
            },
            {
                soru: "Depo koridorumuz oldukça dar, teleskopik manlift sığar mı?",
                cevap:
                    "Bu, koridorun genişliğine ve raf düzenine bağlı — dar bir koridorda teleskopik gövdenin manevra alanı yetersiz kalabilir ve daha kompakt bir eklemli model daha uygun olabilir. Koridor genişliğini ve raf yüksekliğini paylaşmanız, doğru gövdeyi önceden belirlememizi sağlar; emin değilseniz koridorun fotoğrafını göndermeniz kararı netleştirir.",
            },
            {
                soru: "Çatımızdaki bir oluk bakımı için hangi gövde gerekir?",
                cevap:
                    "Çatı kenarı ve oluk gibi noktalar genellikle bina cephesinin dışında, engelli bir konumdadır ve bu tür işlerde kolu kırılabilen eklemli manlift daha uygun bir çözümdür. Erişilecek noktanın bina cephesine göre nerede olduğunu (köşe, girinti, parapet arkası) tarif etmeniz, doğru kol uzunluğu ve açısına sahip modeli seçmemizi sağlar.",
            },
            {
                soru: "Hava durumu kötüyse planlanan işi erteler misiniz?",
                cevap:
                    "Açık sahada çalışan bir manlift için rüzgâr ve yağış güvenlik açısından belirleyicidir ve bu koşullar uygun değilse işi ertelemeyi öneririz — bu bir tercih değil güvenlik gereğidir. Sevkiyat penceresiyle çakışan bir erteleme sizin için sorun yaratacaksa, alternatif bir gün veya saat üzerinde birlikte hızlıca yeni bir plan yaparız.",
            },
            {
                soru: "Depomuzda park hâlinde konteynerler var, bu manevrayı etkiler mi?",
                cevap:
                    "Evet, park düzeni manliftin manevra alanını ve görüş açısını doğrudan etkiler. Sahadaki park düzenini ve manevra için ayrılabilecek alanı önceden paylaşmanız, hem doğru gövde boyutunu seçmemizi hem de operatörün güvenli bir rota belirlemesini sağlar; bu bilgi eksik olduğunda sahada gecikme yaşanma riski artar.",
            },
            {
                soru: "Sevkiyat trafiğimiz her gün farklı saatlerde yoğunlaşıyor, bu bir sorun mu?",
                cevap:
                    "Değişken bir program bizim için sorun değil, ama bu değişkenliği bilmemiz gerekiyor. Gün içindeki tipik yoğun saatlerinizi bize aktardığınızda, bu bilgiyi planlamaya dahil eder ve mümkün olan en güvenli, en az kesintili pencereyi birlikte belirleriz; program günden güne çok değişiyorsa, teslimat gününden bir gün önce kısa bir teyit araması yapmamız da işe yarar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Otomotiv yan sanayide tam zamanında (JIT) teslimat programının sevkiyat/depo bakım pencerelerini belirlemesi, teleskopik-eklemli manlift ayrımı ve hava koşulu kısıtı genel sektör/makine bilgisidir. Tesis adı ve rakam uydurulmamıştır; 'ana sanayi üreticisi' genel ifadesiyle anılmıştır.",
    },
};
