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
};
