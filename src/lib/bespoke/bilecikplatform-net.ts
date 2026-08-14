// ═══════════════════════════════════════════════════════════════════════════
// bilecikplatform.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Bilecik'in OSMANELİ ve PAZARYERİ OSB'lerinde platform kiralama.
// Açı: İKİ İLÇE OSB'SİNİN KARŞILAŞTIRMALI ANLATIMI — Osmaneli OSB'nin
// lojistik-depo ağırlıklı profili ile Pazaryeri OSB'nin karma küçük-orta
// ölçekli sanayi profili yan yana kurulur; iki OSB arası kısa mesafenin
// yarattığı tur ekonomisi anlatının omurgasıdır.
//
// ⚠️ Kardeş domain bilecikplatform.com aynı ilçeleri PROJE FAZI merceğiyle
// (depo kabuğu-raf montajı-devreye alma, OSB evrak-izin süreci, faz-dilim
// montaj düzeni) yazdı. Bu dosyada o fazlı anlatım, evrak-izin süreci ve
// vinç-forklift koordinasyonu cümleleri İŞLENMEZ — mercek KARŞILAŞTIRMA ve
// İKİ-OSB-TURU EKONOMİSİDİR. osmaneli sayfası orada da var; buradaki
// anlatım ilçe geneli + OSB karşılaştırma girişi olarak kurulmuştur, proje
// fazı anlatımıyla cümle/tablo/SSS ortaklığı yoktur.
//
// Sayfa iskeleti: giriş paragrafı, beş madde, üç ek bölüm (ilkinde tablo),
// altı uzun SSS ve kaynak notu. Tarih: 2026-08-13.
// Tesis adı, marka ve rakam kullanılmamıştır; yalnızca kamuya açık sektörel
// kimlik bilgisi ile firma saha pratiği yazılmıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BILECIKPLATFORM_NET: Record<string, BespokeIcerik> = {
    "bolge:osmaneli": {
        h1: "Osmaneli'de Platform Kiralama: İlçe Profili ve OSB Karşılaştırması",
        giris:
            "Osmaneli'yi Bilecik'in diğer sanayi ilçeleriyle karşılaştırırken kullandığımız ilk cümle hep aynıdır: burası bir üretim ilçesi değil, bir geçiş ve depolama ilçesidir. Marmara'ya açılan yönde konumlanmış olması, ilçenin sanayi dokusunu doğrudan şekillendirmiş — organize sanayi bölgesindeki parsellerin büyük bölümü depo, antrepo ve dağıtım merkezi işlevi görür, tekil bir üretim hattından çok malın toplandığı, ayrıştırıldığı ve yeniden yola çıktığı hacimler hâkimdir. Bu, komşu ilçe Pazaryeri'nin karma küçük-orta ölçekli imalat dokusundan belirgin biçimde farklıdır ve biz de bu farkı bilerek çalışırız: Osmaneli'ye giden bir makine büyük ölçüde geniş açıklıklı, yüksek tavanlı ve raf sistemiyle donatılmış hacimlerde çalışır; Pazaryeri'ne giden makine ise daha çeşitli, daha küçük ölçekli ve daha farklı üretim koşullarıyla karşılaşır. İki ilçe birbirine yakın olduğu için, bu farkı tek bir sevkiyat programında birleştirmek de mümkündür — bir günün sabahı Osmaneli'de bir depo raf işiyle geçerken, öğleden sonrası Pazaryeri'ndeki küçük bir atölyenin çatı bakımına ayrılabilir.",
        maddeler: [
            {
                baslik: "İlçe merkezinde depo ve antrepo yoğunluğu",
                metin:
                    "Osmaneli'nin ana yol üzerindeki parselleri, son yıllarda hızla depo ve antrepo yapılarına dönüştü. Bu yapıların ortak özelliği yüksek tavan, geniş raf koridoru ve yoğun forklift trafiğidir. Yüksekteki iş kalemleri raf üstü aydınlatma, sprinkler hattı ve çatı altı havalandırmasıdır; koridor genişliği belirleyici kısıttır ve makine, forklift güzergâhından ayrı bir hatta konumlandırılır.",
            },
            {
                baslik: "OSB dışı küçük sanayi parsellerinde çeşitlilik",
                metin:
                    "OSB sınırının dışında, ana yola yakın küçük parsellerde daha çeşitli işletmeler bulunur — nakliye firmalarının bakım atölyeleri, ambalaj tesisleri, küçük ölçekli montaj işletmeleri. Bu parseller OSB'deki gibi tek tip bir yapı stoğu sunmaz; her parselde farklı bir zemin, farklı bir tavan yüksekliği ve farklı bir erişim koşulu bulunur. Bu yüzden OSB dışı taleplerde keşif, OSB içindekinden daha ayrıntılı yapılır.",
            },
            {
                baslik: "İki ilçe arasındaki karayolu bağlantısı",
                metin:
                    "Osmaneli ile Pazaryeri arasındaki mesafe kısa ve karayolu bağlantısı düzenlidir; bu, aynı gün içinde iki ilçede iş yapmayı pratik hâle getirir. Osmaneli'nin depo ağırlıklı işleri genellikle günün büyük bölümünü alırken, Pazaryeri'ndeki küçük ölçekli işler daha kısa sürede biter — bu asimetri, iki ilçeyi aynı güne yerleştirirken bilinçli olarak kullandığımız bir avantajdır.",
            },
            {
                baslik: "Lojistik ağırlıklı talebin mevsimsel dalgalanması",
                metin:
                    "Depo ve dağıtım merkezlerinin doluluk oranı, sevkiyat sezonuna göre dalgalanır; yoğun sezon öncesinde raf düzenlemesi, aydınlatma kontrolü ve sprinkler bakımı talebi artar. Bu dalgalanma Pazaryeri'ndeki küçük imalat işletmelerinde bu kadar keskin değildir — onların talebi yıl içine daha eşit dağılır. Osmaneli'deki müşterilerimize sezon öncesi hazırlık turunu erken planlamalarını öneririz; aksi hâlde talep yığılması, makine bulmayı fiyattan daha kritik hâle getirir.",
            },
            {
                baslik: "İki ilçeyi tek programda birleştirmek",
                metin:
                    "Osmaneli ve Pazaryeri'nde aynı hafta iş yaptırmak isteyen işletmeler için makineyi bölgede tutar, iki ilçe arasında planlı biçimde dolaştırırız. Bu model, her iki ilçedeki işletmelerin ayrı ayrı sevkiyat organize etmesinden hem daha hızlı hem daha ekonomiktir. Programın işlemesi için gereken tek şey, tarihlerin önceden bildirilmesidir; elimizde iki ilçenin talep listesi varsa en az geçişli sıralamayı biz kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki OSB'nin karşılaştırmalı profili",
                paragraflar: [
                    "Osmaneli ve Pazaryeri OSB'lerinin kendine has bir profili var ve bu profil, gönderdiğimiz makine sınıfını doğrudan etkiler. Aşağıdaki tablo bu farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Osmaneli OSB", "Pazaryeri OSB", "Sonuç"],
                    satirlar: [
                        ["Ağırlıklı sektör", "Lojistik, depo, dağıtım", "Karma küçük-orta imalat", "Farklı makine sınıfı"],
                        ["Tipik hacim", "Geniş, yüksek tavan", "Değişken, orta ölçek", "Keşif ayrıntısı değişir"],
                        ["Talep ritmi", "Sezona bağlı, yığılmalı", "Yıla eşit dağılmış", "Farklı planlama önceliği"],
                        ["Zemin", "Geniş açıklıklı beton", "Parselden parsele değişken", "Sınıf seçiminde belirleyici"],
                        ["Tur ekonomisi", "Bölgede kalıcı ünite avantajlı", "Kısa iş, hızlı geçiş avantajlı", "İki ilçe aynı günde birleşir"],
                    ],
                },
            },
            {
                baslik: "Neden karşılaştırmalı bakıyoruz",
                paragraflar: [
                    "Bilecik'teki iki OSB'yi ayrı ayrı değil, birbirine göre konumlandırarak anlatmamızın nedeni basit: bir işletme sahibi genellikle kendi ilçesinin profilini bilir ama komşu ilçedeki farkın kendi işine nasıl yansıdığını bilmez. Osmaneli'deki bir depo işletmecisi, Pazaryeri'ndeki bir atölyenin neden farklı bir makine sınıfı aldığını merak edebilir; cevap, iki OSB'nin farklı bir sanayi karakterine sahip olmasıdır.",
                    "Bu karşılaştırmalı bakış, aynı zamanda bizim teklif sürecimizi de hızlandırır: hangi ilçeden geldiğini bildiğimiz bir talepte, sınıf seçiminin büyük bölümünü telefon görüşmesinde netleştirebiliriz. Keşif, o genel çerçeveyi sahaya özgü ayrıntılarla tamamlar.",
                ],
            },
            {
                baslik: "İki ilçe arası tur ekonomisi nasıl işler",
                paragraflar: [
                    "Osmaneli ile Pazaryeri arasındaki kısa mesafe, kiralama ekonomisinde somut bir fark yaratır. Tek bir ilçeye tek bir iş için makine göndermek, nakliye payının iş bedelinin büyük bölümünü oluşturmasına yol açabilir; iki ilçeyi aynı sevkiyata bağladığımızda bu pay ikiye bölünür ve her işletmenin ödediği birim maliyet düşer.",
                    "Bu modelin çalışması için gereken tek şart, tarihlerin esnek ve önceden bildirilmiş olmasıdır. Osmaneli'deki bir depo işinin süresi genellikle Pazaryeri'ndeki bir atölye işinden uzun olduğu için, günün planını Osmaneli'nin süresine göre kurar, Pazaryeri'ni o günün kalan diliminde değerlendiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Osmaneli'deki depomuz ile Pazaryeri'ndeki atölyemiz aynı gün hizmet alabilir mi?",
                cevap:
                    "Genellikle alabilir, çünkü iki ilçe arası mesafe kısadır ve karayolu bağlantısı düzenlidir. Planlamada Osmaneli'deki işin süresini önce netleştiririz — depo işleri genellikle daha uzun sürer — ve Pazaryeri'ndeki işi günün kalan dilimine yerleştiririz. Bu birleşmenin çalışması için her iki tarafın tarihini önceden bildirmesi gerekir; son anda gelen talep, o günün programına sığmayabilir ve ayrı bir sevkiyata yazılır.",
            },
            {
                soru: "Osmaneli OSB dışındaki bir parselde çalışıyoruz, teklif süreci farklı mı?",
                cevap:
                    "Biraz daha ayrıntılı bir keşif gerektirir. OSB içindeki parseller genellikle benzer bir yapı stoğu paylaşır — geniş açıklık, yüksek tavan, standart raf sistemi — bu yüzden telefonda verilen bilgiyle sınıf seçimi büyük ölçüde netleşir. OSB dışındaki parsellerde her yapı farklı olduğu için zemin tipini, tavan yüksekliğini ve giriş açıklığını ayrı ayrı sorarız; birkaç fotoğraf bu süreci hızlandırır.",
            },
            {
                soru: "Depo raf sistemimizin üst gözlerine erişim için hangi makine uygun?",
                cevap:
                    "Osmaneli'deki depo hacimlerinin geneli geniş açıklıklı ve düz beton zeminlidir; bu koşulda makaslı sınıflar rahatça çalışır. Koridor genişliği ve raf yüksekliği belirleyici olduğundan bu iki ölçüyü keşifte netleştiririz. Forklift trafiği devam edecekse, çalışma bölümünü güzergâhtan ayrı bir hatta konumlandırır ve depo yönetimiyle birlikte bir sıralama kurarız.",
            },
            {
                soru: "Pazaryeri'ndeki atölyemizin zemini ve tavanı Osmaneli'ndeki depolardan farklı, bu neden önemli?",
                cevap:
                    "Çünkü Pazaryeri OSB'nin karma sanayi yapısı, parselden parsele değişen bir yapı stoğu üretir — bir atölyenin tavanı düşük ve zemini eski olabilirken, komşusunun daha yeni ve daha yüksek bir hacmi olabilir. Osmaneli'deki depolarda genelde tekrar eden bir profil varken, Pazaryeri'nde her talebi kendi koşuluyla değerlendirmemiz gerekir. Bu yüzden Pazaryeri taleplerinde keşif adımını atlamayız; telefon bilgisiyle kesin sınıf vermeyiz.",
            },
            {
                soru: "Sezon öncesi depo hazırlığımızı ne zaman planlamalıyız?",
                cevap:
                    "Sevkiyat sezonunun başlamasından birkaç hafta önce. Osmaneli'deki depo ve dağıtım merkezlerinin talebi bu dönemde belirgin biçimde yoğunlaşır ve makine bulmak, fiyattan daha kritik bir konu hâline gelir. Raf düzenlemesi, aydınlatma kontrolü ve sprinkler bakımını tek bir hazırlık turunda birleştirmenizi öneririz; bu, sezon içinde tek tek çağrı yapmaktan hem ucuz hem hızlıdır. Tarihinizi erken bildirirseniz programa öncelikli olarak yazarız.",
            },
            {
                soru: "İki ilçedeki işlerimizi birleştirmek istiyoruz, nasıl başlayalım?",
                cevap:
                    "Bize her iki ilçedeki iş listesini ve tarih esnekliğinizi bildirmeniz yeterlidir. Biz bu listeyi tek bir güzergâha diziyor, hangi ilçede ne kadar süre kalınacağını ve geçişin nasıl yapılacağını önceden yazıyoruz. Sözleşmeler ayrı kalır — Osmaneli'deki işiniz ile Pazaryeri'ndeki işiniz kendi teklifini ve kendi teslim tutanağını alır; paylaşılan tek kalem nakliyedir ve bu kalem iki iş arasında bölünür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Osmaneli'nin Marmara yönünde konumlanmış lojistik-depo ağırlıklı OSB profili ile Pazaryeri'nin karma küçük-orta ölçekli sanayi profili kamuya açık genel bilgidir; karşılaştırmalı planlama ve tur ekonomisi firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:pazaryeri": {
        h1: "Pazaryeri'de Karma Sanayi İşletmeleri İçin Platform Kiralama",
        giris:
            "Pazaryeri'nin sanayi dokusu, komşu ilçe Osmaneli'ninkinden belirgin biçimde farklıdır; burada tek bir sektörün ağırlığı yoktur, bunun yerine metal işleme, plastik enjeksiyon, küçük ölçekli gıda üretimi ve çeşitli montaj işletmeleri yan yana sıralanır. Bu karma yapı, platform kiralama açısından bir avantaj ve bir zorluğu birlikte getirir: avantaj, ilçede bulunan bir makinenin farklı ihtiyaçlara hizmet edebilecek çok yönlü bir donanımla gitmesi gerektiğidir; zorluk ise her parselin kendine özgü bir zemin, tavan yüksekliği ve erişim koşulu sunmasıdır. Osmaneli'deki depo hacimlerinde bir kez keşfedilen ölçüler çoğu parselde tekrarlanırken, Pazaryeri'nde her talep ayrı bir değerlendirme gerektirir. İkinci belirleyici fark ölçektir — Pazaryeri'ndeki işletmelerin çoğu, büyük lojistik tesislerinden daha küçük hacimlerde çalışır ve bu, hem çalışma süresini kısaltır hem de makine seçiminde manevra kabiliyetini kapasitenin önüne geçirir. Biz Pazaryeri'ne giden sevkiyatları bu çeşitliliği gözeterek, her talebi kendi koşuluyla değerlendirerek kurgularız.",
        maddeler: [
            {
                baslik: "Metal işleme atölyelerinde çelik konstrüksiyon ve vinç hattı",
                metin:
                    "İlçedeki metal işleme atölyeleri genellikle çelik makaslı çatılı, tek hacimli yapılardır ve bir kısmında hafif kaldırma düzeneği bulunur. Buradaki iş kalemleri çatı ışıklığı değişimi, aydınlatma yenileme ve kaldırma düzeneğinin ray hattı bakımıdır. Kaldırma düzeneği bulunan hacimlerde çalışırken düzeneğin enerjisi kesilir ve çalışma bölgesine girmeyeceği yazılı olarak teyit edilir; bu, üzerinde pazarlık yapmadığımız bir koşuldur.",
            },
            {
                baslik: "Plastik enjeksiyon tesislerinde ısı ve havalandırma",
                metin:
                    "Enjeksiyon makinelerinin çalıştığı hacimlerde iş, ısı tahliye kanalları, tavan vantilatörleri ve aydınlatma armatürleridir. Bu tesislerde ortam sıcaklığı yükselebilir ve bazı proseslerde koku ve buhar açığa çıkar; çalışma öncesinde havalandırmanın yeterli düzeyde çalıştığı kontrol edilir. Zemin genellikle sağlam betondur ancak makine ve kalıp değişim alanlarında geçici engel bulunabileceğinden güzergâh önceden netleştirilir.",
            },
            {
                baslik: "Küçük ölçekli gıda üretiminde hijyen koşulu",
                metin:
                    "İlçedeki küçük gıda üretim işletmelerinde yüksekteki iş, tavan armatürü, havalandırma menfezi ve asma tavan panelidir; ancak bu hacimlere giren ünite hijyen zincirinin bir parçası olarak değerlendirilir. Tekerlek yüzeyleri girişte silinir, sepet altına toplama tablası konur ve el aletleri bağlanır. Bu hazırlık, işletme talep etmeden uygulanır.",
            },
            {
                baslik: "Montaj işletmelerinde dar hacim ve manevra",
                metin:
                    "Küçük ölçekli montaj işletmelerinin hacimleri, büyük sanayi parsellerine göre dardır ve içeride tezgah, raf veya paketleme istasyonu gibi sabit ekipman sıklıkla bulunur. Bu ortamda makine seçiminde kapasiteden çok manevra kabiliyeti öne çıkar; dar gövdeli ve kısa dönüş yarıçaplı sınıflar tercih edilir. Çalışma öncesinde hacmin plan krokisini veya birkaç fotoğrafını görmek, sahada sınıf değiştirme ihtiyacını ortadan kaldırır.",
            },
            {
                baslik: "Farklı sektörlerin aynı günde birleştirilmesi",
                metin:
                    "Pazaryeri'ndeki işletmelerin çoğu tek başına bir günü dolduracak büyüklükte değildir; bu yüzden aynı hafta içinde talep eden birkaç işletmeyi aynı sevkiyata topluyoruz. Bir metal atölyesinde başlayan gün, öğleden sonra bir gıda üretim tesisinde ya da montaj işletmesinde devam edebilir. Bu modelin çalışması için tarihlerin önceden bildirilmesi yeterlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Pazaryeri'nde sektör ve saha koşulu",
                paragraflar: [
                    "İlçedeki karma sanayi dokusunun sektöre göre farklılaşan saha koşulları aşağıdaki tabloda toplanmıştır.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Baskın iş kalemi", "Saha kısıtı", "Uygun sınıf"],
                    satirlar: [
                        ["Metal işleme", "Çatı ışıklığı, ray hattı", "Vinç/kaldırma düzeneği", "Dar gövdeli eklemli"],
                        ["Plastik enjeksiyon", "Isı kanalı, vantilatör", "Sıcaklık ve koku", "Standart makaslı"],
                        ["Küçük gıda üretimi", "Armatür, menfez", "Hijyen bölgesi", "Akülü, ön temizlikli"],
                        ["Montaj işletmesi", "Aydınlatma, kablo tavası", "Dar hacim, sabit ekipman", "Kompakt dikey"],
                        ["Depolama (küçük ölçek)", "Raf üstü", "Değişken koridor", "Kompakt makaslı"],
                    ],
                },
            },
            {
                baslik: "Karma sanayinin keşif üzerindeki etkisi",
                paragraflar: [
                    "Osmaneli'deki depo hacimlerinde bir kez öğrenilen ölçüler çoğu parselde tekrarlanırken, Pazaryeri'nde her talep kendi başına bir değerlendirme gerektirir. Bir metal atölyesinin tavan yüksekliği ile bitişiğindeki gıda işletmesininki birbirine benzemeyebilir; bu yüzden telefon görüşmesinde verilen genel bilgiyle kesin sınıf söylemekten kaçınırız ve birkaç fotoğraf isteriz.",
                    "Bu ayrıntılı keşif süreci, teklifin sahada değişmemesini sağlar. Karma sanayi ilçesinde en pahalı hata, telefonda verilen tahmini bilgiyle gönderilen makinenin sahaya sığmamasıdır; birkaç dakikalık fotoğraf paylaşımı bu riski ortadan kaldırır.",
                ],
            },
            {
                baslik: "Küçük ölçekli işleri biriktirmenin ekonomisi",
                paragraflar: [
                    "Pazaryeri'ndeki işletmelerin çoğu kısa süreli işler talep eder ve tek başına bir sevkiyatı ekonomik kılmayabilir. Bunu yönetmenin yolu, ilçedeki talepleri aynı haftaya toplamaktır — makine bir kez ilçeye girer, işletmeden işletmeye kendi tekerleğiyle geçer ve nakliye kalemi katılan işletmeler arasında bölünür.",
                    "Bu modelin ikinci faydası esnekliktir: bir işletmenin işi beklenenden uzun sürerse, program o gün için bir miktar kayar ve bu, gecikmeye neden olan tarafla konuşulur; diğer işletmelerin günü bundan etkilenmez. Tarihinizi erken bildirmeniz, hem sırayı hem daha düşük birim maliyeti getirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizde vinç var, çalışırken durdurmamız gerekiyor mu?",
                cevap:
                    "Çalıştığımız bölgede evet, tesisin tamamında hayır. Vinç hareket alanı ile sepetin bulunduğu hacim çakışıyorsa vincin enerjisi kesilir, hat sonuna alınır ve çalışma süresince hareket etmeyeceği saha sorumlusunun onayıyla iş emrine yazılır. Bunun nedeni basittir: yukarıda asılı duran bir yükün altındaki kişi hiçbir emniyet donanımıyla korunamaz. Çalışma bölgesi vincin erişemediği bir bölümdeyse üretiminiz normal seyrinde devam eder.",
            },
            {
                soru: "Enjeksiyon tesisimizde ortam sıcak ve kokulu, makine bu koşulda çalışabilir mi?",
                cevap:
                    "Çalışabilir; havalandırmanın yeterli düzeyde çalıştığı sürece bu bizim için alışılmış bir ortamdır. Çalışma öncesinde havalandırma sisteminin devrede olduğunu teyit ederiz ve uzun süreli işlerde ara kontrol öngörürüz. Sıcaklığın çok yüksek olduğu proses aşamalarında çalışmayı, üretimin göreli sakinleştiği saatlere kaydırmayı öneririz; bu, hem ekip konforu hem ekipman ömrü açısından daha uygundur.",
            },
            {
                soru: "Gıda üretim alanımızın tavanında iş var, hattı durdurmak zorunda mıyız?",
                cevap:
                    "Hattın kapalı olması en temiz çözümdür ve bunu öneririz; planlı bir temizlik duruşunuz varsa iş oraya yazıldığında ek üretim kaybı doğmaz. Kapatma imkânı yoksa çalışılacak bölüm örtülür, sepet tabanına toplama tablası takılır, aletler bağlanır ve alan çevrelenir; ancak bu riski azaltır, yok etmez. Kıvılcım çıkaran hiçbir kalem açık üretim akışının üzerinde yapılmaz.",
            },
            {
                soru: "Montaj işletmemizin hacmi dar, makine tezgahlar arasından geçebilir mi?",
                cevap:
                    "Çoğu durumda geçebilir ama önce koridor genişliğini ve sabit ekipmanın konumunu bilmemiz gerekir. Dar hacimlerde manevra kabiliyeti kapasiteden daha belirleyicidir; kısa dönüş yarıçaplı kompakt sınıflar tercih edilir. Hacmin plan krokisini veya birkaç fotoğrafını iletirseniz, sahada sınıf değiştirme ihtiyacını baştan ortadan kaldırırız.",
            },
            {
                soru: "İlçede birkaç farklı sektörden işletme aynı hafta iş yaptırmak istiyor, nasıl ilerler?",
                cevap:
                    "Bu, Pazaryeri'nde en ekonomik kiralama biçimidir ve teşvik ederiz. Makine bir kez ilçeye indirilir, işletmeden işletmeye sırayla geçer ve nakliye kalemi katılanlar arasında bölünür. Her işletme kendi teklifini, kendi tutanağını ve kendi teslim kaydını alır; aranızda hukuki bir bağ kurulmaz. Sektör farklılığı bu modelde sorun oluşturmaz; makineyi her durakta o işletmenin ihtiyacına göre hazırlarız.",
            },
            {
                soru: "Osmaneli'deki bir depoya kıyasla Pazaryeri'nde keşif neden daha uzun sürüyor?",
                cevap:
                    "Çünkü Osmaneli'deki depo hacimleri büyük ölçüde birbirine benzer bir profil paylaşır — geniş açıklık, yüksek tavan, standart raf sistemi — ve bu, telefon bilgisiyle bile büyük ölçüde netleşir. Pazaryeri'nin karma sanayi yapısında ise her parsel farklı bir zemin, tavan yüksekliği ve erişim koşulu sunar. Bu farkı atlayıp genel bir tahminle teklif vermek, sahada sınıf değiştirme riskini doğurur; bu yüzden Pazaryeri taleplerinde birkaç fotoğraf istemeyi tercih ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Pazaryeri'nin metal işleme, plastik enjeksiyon, küçük ölçekli gıda ve montaj işletmelerinden oluşan karma sanayi yapısı kamuya açık genel bilgidir; keşif yaklaşımı, vinç kilidi şartı ve işletmeler arası program kurgusu firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:osmaneli-osb": {
        h1: "Osmaneli OSB'de Depo ve Dağıtım Merkezleri İçin Platform Kiralama",
        giris:
            "Osmaneli OSB'yi Bilecik'teki diğer organize sanayi bölgelerinden ayıran şey, parsellerin çoğunun tek bir işlevi paylaşmasıdır: depolama ve dağıtım. Bölgeye girdiğinizde karşınıza çıkan yapı stoğu büyük ölçüde tekrar eder — geniş açıklıklı çelik konstrüksiyon, yüksek tavan, raf sistemiyle donatılmış hacim, geniş yükleme rampası. Bu tekrar eden profil, bizim için hem bir avantaj hem bir sorumluluktur: avantaj, bir parselde öğrendiğimiz ölçülerin komşu parselde büyük ölçüde geçerli olmasıdır; sorumluluk ise bu benzerliğe güvenip keşifi atlamamaktır, çünkü raf yüksekliği veya koridor genişliğindeki küçük bir fark, makine sınıfını değiştirebilir. OSB'nin komşu Pazaryeri OSB'sinden temel farkı da buradadır — Pazaryeri'nde her parsel farklı bir sektör ve farklı bir koşul sunarken, Osmaneli OSB'de profil daha öngörülebilirdir ve bu, sahada kalıcı ünite bulundurma modelini burada özellikle verimli kılar.",
        maddeler: [
            {
                baslik: "Raf sistemi ve koridor geometrisi",
                metin:
                    "OSB'deki depo parsellerinin neredeyse tamamında yüksek raf sistemi vardır ve buradaki iş, üst travers kontrolü, çapraz bağlantı yenileme ve raf üstü aydınlatmadır. Koridor genişliği raf tipine göre standartlaşmıştır; bu, makine sınıfını büyük ölçüde önceden belirlememizi sağlar. Ancak her parselin koridor genişliği aynı olmayabileceğinden, ilk ziyarette ölçüm yapılır ve bu ölçü sonraki taleplerde referans olarak kullanılır.",
            },
            {
                baslik: "Yükleme rampalarında araç trafiği yönetimi",
                metin:
                    "Depo ve dağıtım merkezlerinin dışa açılan yüzü, OSB'nin en yoğun trafik gören bölümüdür. Rampa üstü sundurma, kapı üstü mekanizma ve dış aydınlatma işleri, araç trafiğinin seyrek olduğu saatlere yazılır. Kapı bazlı sıralama uygulanır: hangi kapının hangi saatte boşalacağı depo yönetiminden alınır ve makine o sıraya göre ilerler; tüm rampa hattını aynı anda kapatan bir plan kabul edilmez.",
            },
            {
                baslik: "Sprinkler ve yangın algılama hattı",
                metin:
                    "Geniş depolama hacimlerinde sprinkler ana hattı ve branşmanlar, duman dedektörleri ve acil aydınlatma sistemleri düzenli kontrol gerektirir. Bu kalemler tek tek küçük görünse de bina genelinde dağıldığı için toplamda uzun sürer; bu yüzden bir depoya girdiğimizde tüm sistemi tek turda tarayan bir program kurarız — aks aks ilerleyen, her durakta o bölgedeki tüm kalemleri bitiren bir sıralama.",
            },
            {
                baslik: "Forklift trafiğiyle aynı hacmi paylaşmak",
                metin:
                    "OSB'deki depoların çoğu faal durumdadır ve platform çalışırken forklift trafiği de sürer. İstediğimiz düzen, platformun çalıştığı bölümün forklift güzergâhından fiziksel olarak ayrılması ve depo sorumlusunun alternatif güzergâhı sürücülere bildirmesidir. Bu ayrım kurulamıyorsa çalışmayı sevkiyatın seyrek olduğu saatlere alırız.",
            },
            {
                baslik: "Sahada kalıcı ünite modeli",
                metin:
                    "OSB'nin öngörülebilir yapı profili, makinenin bölgede uzun süre kalmasını verimli kılar. Tek bir tesise bağlı kalmak yerine, aynı dönemde birden fazla tesise hizmet veren bir makine kurgusu kurarız; bir tesiste biten iş, ertesi gün komşu parselde devam edebilir. Bu programı biz kurar, katılan her işletme kendi sözleşmesini ayrı imzalar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB içi tesis bölümü ve çalışma önceliği",
                paragraflar: [
                    "Osmaneli OSB'deki depo ve dağıtım tesislerinde bölümden bölüme öncelik değişir. Aşağıdaki tablo bu önceliği toplar.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Sık yapılan iş", "Kritik kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Raf koridoru", "Üst travers, aydınlatma", "Forklift trafiği", "Makaslı, koridor uyumlu"],
                        ["Yükleme rampası", "Sundurma, kapı üstü", "Araç trafiği", "Eklemli, kompakt"],
                        ["Sprinkler/dedektör hattı", "Kontrol, yenileme", "Geniş dağılım", "Aks bazlı tur usulü"],
                        ["Ofis/idari blok", "Aydınlatma, asma tavan", "Standart koşul", "Kompakt dikey"],
                        ["Dış saha/otopark", "Aydınlatma direği", "Zemin ve rüzgâr", "Arazi tipi"],
                    ],
                },
            },
            {
                baslik: "Öngörülebilir profilin getirdiği verim",
                paragraflar: [
                    "Osmaneli OSB'deki depo parsellerinin benzer bir yapı stoğu paylaşması, bizim için teklif sürecini hızlandırır: bir parselde ölçtüğümüz koridor genişliği ve raf yüksekliği, komşu parseldeki talebi telefon görüşmesinde bile büyük ölçüde netleştirir. Bu, Pazaryeri OSB'de mümkün olmayan bir avantajdır — orada her parsel kendi koşulunu taşır.",
                    "Ancak bu öngörülebilirlik, keşifsiz teklif vermeyi haklı çıkarmaz. Raf tipindeki küçük bir fark veya koridora sonradan eklenmiş bir ekipman, makine sınıfını değiştirebilir; bu yüzden ilk taleplerde ölçümü sahada yapar, sonraki taleplerde bu ölçüyü referans olarak kullanırız.",
                ],
            },
            {
                baslik: "Osmaneli-Pazaryeri hattında OSB'ler arası geçiş",
                paragraflar: [
                    "Osmaneli OSB ile Pazaryeri OSB arasındaki kısa mesafe, makineyi iki bölge arasında planlı biçimde dolaştırmayı mümkün kılar. Bu geçiş, iki OSB'nin farklı profilini de görünür kılar: Osmaneli'de bir gün genellikle tek bir büyük depo işine ayrılırken, aynı günün Pazaryeri kısmında birkaç küçük işletmenin talebi art arda karşılanabilir.",
                    "Bu modelin ekonomik faydası açıktır — nakliye kalemi iki bölge arasında paylaşılır. Modelin çalışması için gereken tek şey, her iki OSB'deki taleplerin önceden bize ulaşmasıdır; elimizdeki listeye göre en az geçişli güzergâhı biz kurarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzun raf sistemi yeni; üst traversleri kontrol ettirmek için nasıl ilerleriz?",
                cevap:
                    "Öncelikle koridor genişliğini ve raf yüksekliğini keşifte ölçeriz; OSB'deki depoların çoğu benzer bir profil paylaştığı için bu ölçüm genellikle kısa sürer. Ölçüm sonrasında makaslı bir sınıf önerir, forklift trafiğinin yoğun olduğu saatleri sizden öğreniriz. Çalışma, forklift güzergâhından ayrı bir hatta konumlandırılır ve koridor koridor ilerler; tüm deponun aynı anda kapatılması gerekmez.",
            },
            {
                soru: "Sprinkler hattımız bina genelinde dağınık, tek seferde kontrol edilebilir mi?",
                cevap:
                    "Edilebilir ve bunu öneririz. Sprinkler ana hattı ve branşmanları, dedektörler ve acil aydınlatmayı tek bir programda, aks aks ilerleyen bir tur olarak ele alırız; her durakta o bölgedeki tüm kalemler bitirilir ve makine gereksiz yere aynı noktaya tekrar dönmez. Bu yaklaşım, kalemleri ayrı ayrı çağırmaktan hem daha hızlı hem daha ekonomiktir.",
            },
            {
                soru: "Rampa önünde çalışırken sevkiyatımız durur mu?",
                cevap:
                    "Durması gerekmez; yöntem kapı bazlı sıralamadır. Depo yönetiminden hangi kapının hangi saatte boş kalacağını alır, makineyi kapıdan kapıya bu sıraya göre ilerletiriz; böylece rampa önü hiçbir zaman tümüyle kapanmaz. Çalışılan kapının önü şeritle ayrılır. Sevkiyatın hiç durmadığı yoğun günlerde dış hat işlerini erken sabaha veya vardiya değişimine alırız.",
            },
            {
                soru: "Komşu parselle aynı hafta iş yaptırmak istiyoruz, avantajı olur mu?",
                cevap:
                    "Olur ve OSB'de en verimli çalışma biçimi budur. Her iki tesis kendi kalem listesini çıkarır, biz iki listeyi tek programa dizer ve makine hafta içinde iki parsel arasında planlı şekilde geçer. Sözleşmeler ayrıdır — her işletme kendi işini, kendi süresini ve kendi bedelini imzalar; ortak olan yalnızca takvim ve makinenin bölgede bulunmasıdır.",
            },
            {
                soru: "Forklift trafiği devam ederken platform çalışabilir mi?",
                cevap:
                    "Yönetilebilir bir durumdur ama kendiliğinden yönetilmez. İstediğimiz düzen, platformun çalıştığı bölümün forklift güzergâhından fiziksel olarak ayrılması ve depo sorumlusunun alternatif güzergâhı sürücülere bildirmesidir. Sadece uyarı levhası koymak yeterli değildir. Ayrım kurulamıyorsa çalışmayı sevkiyatın durduğu saatlere almayı öneririz.",
            },
            {
                soru: "Osmaneli OSB'den Pazaryeri OSB'ye aynı gün geçebilir misiniz?",
                cevap:
                    "Geçebiliriz; iki OSB arası mesafe kısadır ve bu geçişi düzenli olarak planlarız. Osmaneli'deki işin süresini önce netleştirir, günün kalan dilimini Pazaryeri'ndeki talebe ayırırız. Bu birleşmenin çalışması için her iki tarafın tarihini önceden bildirmesi gerekir; elimizde iki bölgenin listesi varsa en az geçişli sıralamayı biz kurarız ve nakliye kalemi paylaşılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Osmaneli OSB'nin depo ve dağıtım ağırlıklı organize sanayi profili kamuya açık genel bilgidir; koridor ölçüm yaklaşımı, aks bazlı tur usulü ve OSB'ler arası geçiş kurgusu firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:bilecik-merkez": {
        h1: "Bilecik Merkezden Osmaneli ve Pazaryeri OSB'lerine Platform Kiralama",
        giris:
            "Bilecik merkez, il coğrafyası açısından Osmaneli ve Pazaryeri OSB'lerinin ortasında bir konumdadır ve bu, bizim için doğal bir koordinasyon noktası oluşturur. Makinelerimiz merkeze bağlı bir üsten hareket eder; talebe göre kuzeye Osmaneli'nin lojistik-depo dokusuna, güneye Pazaryeri'nin karma küçük-orta ölçekli sanayisine ya da doğrudan merkezin kendi iş dokusuna yönlenir. Merkezdeki iş dokusu ise bu iki OSB'den farklı bir üçüncü profil sunar: idari binalar, ticari işletmeler, eğitim yapıları ve merkeze yakın küçük sanayi siteleri. Bu çeşitlilik, merkezden çıkan bir sevkiyatın hangi yöne gideceğine göre baştan ayrışmasını gerektirir — OSB'ye giden makine geniş hacim ve yüksek tavan bekler, merkez içindeki bir işe giden makine ise dar sokak ve kaldırım kısıtıyla karşılaşır. Bu sayfada merkezin koordinasyon rolünü ve iki OSB'ye giden sevkiyatların merkezden nasıl planlandığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Merkezin koordinasyon rolü",
                metin:
                    "Bilecik merkez, makine parkımızın ve planlama masamızın bulunduğu noktadır; Osmaneli ve Pazaryeri'ne giden her sevkiyat buradan çıkar. Bu konum, iki OSB arasındaki mesafenin merkezden hemen hemen eşit olması nedeniyle bize bir esneklik sağlar — bir günün planı, hangi bölgeden hangi talebin geldiğine göre sabah kurulur ve gün içinde ihtiyaç değiştiğinde makine merkeze değil doğrudan diğer bölgeye yönlendirilebilir.",
            },
            {
                baslik: "Merkez içi ticari ve idari yapılarda erişim",
                metin:
                    "Merkezdeki iş hanları, mağazalar ve idari binalar, OSB'lerdeki geniş hacimlerden farklı bir kısıt getirir: dar sokak, kaldırım kotu ve yaya yoğunluğu. Buralarda geniş şaseli makine konumlandırılamaz; tek şerit işgaliyle yerleşen kompakt dikey veya eklemli sınıflar tercih edilir. Levha değişimi, cephe aydınlatması ve klima ünitesi asma işleri bu yerleşimle yapılır.",
            },
            {
                baslik: "Merkeze yakın küçük sanayi sitelerinde karma profil",
                metin:
                    "Merkezin kenarındaki küçük sanayi sitelerinde, Pazaryeri'ndekine benzer bir çeşitlilik görülür — küçük ölçekli imalat, bakım atölyeleri ve depolama birimleri yan yana bulunur. Bu siteler OSB'lerden daha küçük ölçekli olduğu için tek bir talep genellikle kısa sürer; bu yüzden merkez çevresindeki talepleri de bölgesel programa dahil eder, aynı haftaki OSB sevkiyatlarına eklemleriz.",
            },
            {
                baslik: "İki OSB arasında öncelik belirleme",
                metin:
                    "Aynı gün hem Osmaneli hem Pazaryeri'nden acil talep geldiğinde, önceliği belirleyen kriterler işin aciliyeti, süresi ve merkeze olan mesafedir. Osmaneli'deki bir depo arızası genellikle daha uzun bir müdahale gerektirir ve bu, günün büyük bölümünü kaplayabilir; Pazaryeri'ndeki kısa bir iş ise günün boşluklarına yerleştirilebilir. Bu önceliklendirmeyi merkezdeki planlama masasında, talep geldiği anda kurarız.",
            },
            {
                baslik: "Merkezden çıkan üç güzergâhın ekonomisi",
                metin:
                    "Merkezden Osmaneli'ye, Pazaryeri'ne veya merkezin kendi içine yapılan sevkiyatların her biri farklı bir maliyet yapısı taşır. Merkez içi işler en kısa mesafeli ama genellikle en kısa süreli işlerdir; OSB'lere giden işler daha uzun mesafeli ama genellikle daha uzun süreli ve daha ekonomik birim maliyetlidir. Bu üç güzergâhı aynı haftaya yerleştirebildiğimizde, makinenin merkeze boş dönme süresi en aza iner.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezden üç güzergâhın karşılaştırması",
                paragraflar: [
                    "Bilecik merkezden çıkan sevkiyatların üç ana güzergâhı ve her birinin tipik özellikleri aşağıdaki tabloda toplanmıştır.",
                ],
                tablo: {
                    basliklar: ["Güzergâh", "Tipik iş", "Süre", "Planlama önceliği"],
                    satirlar: [
                        ["Merkez içi", "Cephe, tabela, ofis", "Kısa", "Kaldırım ve trafik saati"],
                        ["Osmaneli OSB", "Depo, raf, rampa", "Uzun", "Koridor ve forklift trafiği"],
                        ["Pazaryeri OSB", "Karma sanayi kalemleri", "Değişken", "Sektöre göre keşif"],
                        ["Merkez çevresi küçük sanayi", "Bakım, montaj", "Kısa-orta", "Bölgesel programa ekleme"],
                    ],
                },
            },
            {
                baslik: "Merkezi konumun getirdiği esneklik",
                paragraflar: [
                    "Bilecik merkezin iki OSB'ye de yakın olması, bizim için bir esneklik kaynağıdır: sabah Osmaneli'ne planlanan bir sevkiyat, gün içinde ortaya çıkan acil bir Pazaryeri talebiyle yeniden düzenlenebilir çünkü iki bölge arasındaki mesafe fark yaratmayacak kadar kısadır. Bu esneklik, merkez dışındaki bir üsten çalışan bir tedarikçinin sunamayacağı bir avantajdır.",
                    "Bunun pratik sonucu, acil taleplerde merkezin bir tampon bölge işlevi görmesidir — hangi OSB'den geldiği fark etmeksizin, merkeze en yakın müsait ünite yönlendirilir ve mesafe kaynaklı gecikme en aza indirilir.",
                ],
            },
            {
                baslik: "Üç güzergâhı tek haftaya sığdırmak",
                paragraflar: [
                    "Merkezdeki planlama masasında, haftalık programı üç güzergâhın da talebini gözeterek kurarız. Amaç, makinenin merkeze boş dönme süresini en aza indirmektir — Osmaneli'ne giden bir sevkiyat dönüş yolunda merkez çevresindeki küçük bir işi de kapsayabilir, Pazaryeri'ne giden bir sevkiyat ise merkez içindeki bir cephe işiyle aynı güne yerleştirilebilir.",
                    "Bu planlamanın işlemesi için işletmelerden istediğimiz tek şey, tarih esnekliklerini bize erken bildirmeleridir. Esnek tarihli işler, bu üç güzergâhlı programın en avantajlı katılımcısıdır ve genellikle daha düşük birim maliyetle hizmet alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Merkezdeki iş yerimiz için mi yoksa Osmaneli'deki deponuz için mi aynı makineyi kullanıyorsunuz?",
                cevap:
                    "Filomuz merkezde tek bir üste toplu değildir; hangi bölgeden talep geldiğine göre planlama masasında güzergâh kurulur ve uygun ünite yönlendirilir. Merkez içi işler genellikle kısa sürdüğü için, aynı gün içinde bir OSB sevkiyatının başında veya sonunda değerlendirilebilir. Talebinizi merkezin hangi bölgesinde olduğunu belirterek iletirseniz, o günkü programa en uygun şekilde yerleştiririz.",
            },
            {
                soru: "Aynı gün hem Osmaneli hem Pazaryeri'nden talep gelirse önceliği nasıl belirliyorsunuz?",
                cevap:
                    "İşin aciliyetine, tahmini süresine ve merkeze olan mesafeye bakarız. Osmaneli'deki bir depo işi genellikle daha uzun sürdüğü için günün büyük bölümünü kaplar; Pazaryeri'ndeki kısa bir iş ise günün boşluklarına yerleştirilebilir. İki talep de acilse, hangisinin daha erken bildirildiği ve hangisinin bekleyemeyecek bir risk taşıdığı belirleyici olur; bu değerlendirmeyi talep anında sizinle paylaşırız.",
            },
            {
                soru: "Merkez içindeki dar sokakta çalışırken hangi makine kullanılır?",
                cevap:
                    "Dar gövdeli, tek şerit işgaliyle yerleşen kompakt dikey veya eklemli sınıflar kullanırız. Kaldırım genişliği ve yaya trafiği keşifte değerlendirilir; işgal izni gereken caddelerde başvuru iş takvimine baştan eklenir. Yoğun caddelerde çalışmayı erken sabah saatlerine almak, hem izin sürecini hem esnaf itirazını büyük ölçüde azaltır.",
            },
            {
                soru: "Merkez çevresindeki küçük sanayi sitemizdeki işimiz tek başına ekonomik olur mu?",
                cevap:
                    "Tek başına bakıldığında nakliye payı yüksek görünebilir; bunu azaltmanın yolu işi bölgesel programa eklemektir. Merkez çevresindeki küçük sanayi siteleri, aynı haftaki OSB sevkiyatlarının güzergâhına kolayca eklenir çünkü mesafe kısadır. Tarihinizi bize erken bildirirseniz, o hafta planlanmış bir Osmaneli veya Pazaryeri sevkiyatının dönüş yoluna sizin işinizi de ekleyebiliriz.",
            },
            {
                soru: "Bilecik merkezden Osmaneli'ye ya da Pazaryeri'ne ulaşım ne kadar sürer?",
                cevap:
                    "İki güzergâh da merkeze yakın mesafededir ve bu, günlük planlamada bize belirgin bir esneklik sağlar; sabah bir bölgeye planlanan sevkiyat, gün içinde ortaya çıkan acil bir talep nedeniyle diğer bölgeye yönlendirilebilir. Kesin süre, o günkü trafik ve hava koşuluna göre değişir; acil bir talepte size gerçekçi bir zaman aralığı vermek için mevcut programı ve o anki konumumuzu birlikte değerlendiririz.",
            },
            {
                soru: "Üç güzergâhı (merkez, Osmaneli, Pazaryeri) aynı haftaya nasıl sığdırıyorsunuz?",
                cevap:
                    "Haftalık programı, makinenin merkeze boş dönme süresini en aza indirecek şekilde kurarız — bir OSB'ye giden sevkiyat, dönüş yolunda merkez çevresindeki bir işi de kapsayabilir. Bunun işlemesi için işletmelerden istediğimiz tek şey, tarih esnekliklerini erken bildirmeleridir. Esnek tarihli işler bu üç güzergâhlı programın en avantajlı katılımcısıdır ve genellikle daha düşük birim maliyetle hizmet alır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bilecik merkezin Osmaneli ve Pazaryeri OSB'lerine coğrafi yakınlığı kamuya açık genel bilgidir; koordinasyon modeli, güzergâh önceliklendirme ve üç güzergâhlı haftalık program firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:bozuyuk-osb-cevre-ilce": {
        h1: "Bozüyük OSB'ye Osmaneli-Pazaryeri Hattından Platform Kiralama",
        giris:
            "Bozüyük, Osmaneli ve Pazaryeri'ne göre bizim için çevre ilçe konumundadır ve buraya giden sevkiyatları, iki OSB'nin oluşturduğu hattı genişleterek planlarız. Bozüyük OSB'nin kendi yoğun sanayi dokusu — seramik hattı, metal işleme, mamul ambarları — Osmaneli'nin lojistik ağırlığından ve Pazaryeri'nin karma küçük ölçeğinden farklı bir üçüncü profil sunar: burada iş, büyük ölçekli ve sürekli çalışan üretim hatlarının çevresinde toplanır. Bu üç bölgeyi — Osmaneli, Pazaryeri, Bozüyük — birbirine bağlayan ortak nokta mesafedir; üçü de birbirine yarım saatlik bir çevrede yer alır ve bu, tek bir haftalık program içinde üçünü de dolaşan bir tur kurmayı mümkün kılar. Bozüyük'e özel talep geldiğinde, o haftaki Osmaneli-Pazaryeri programına eklenip eklenemeyeceğini ilk sorduğumuz sorulardan biri budur; çünkü üçlü turun ekonomisi, tek başına Bozüyük'e yapılan bir sevkiyattan belirgin biçimde farklıdır.",
        maddeler: [
            {
                baslik: "Bozüyük OSB'nin üçüncü profili",
                metin:
                    "Bozüyük OSB'deki tesisler, Osmaneli'nin depo ağırlıklı ve Pazaryeri'nin karma küçük ölçekli dokusundan farklı olarak, büyük ölçekli ve sürekli çalışan üretim hatlarıyla tanımlanır. Seramik üretim hatları ve mamul ambarları, metal işleme atölyeleri burada yan yana bulunur. Bu profil, Osmaneli-Pazaryeri hattından gelen bir makinenin üçüncü bir çalışma disiplinine — planlı duruş pencereleri, yüksek istif koridorları — uyum sağlamasını gerektirir.",
            },
            {
                baslik: "Üç bölgeyi birleştiren haftalık program",
                metin:
                    "Osmaneli, Pazaryeri ve Bozüyük'ü birbirine yarım saatlik mesafe bağlar; bu, üç bölgeyi tek bir haftalık programda dolaştırmayı ekonomik kılar. Bir hafta içinde makine Osmaneli'deki bir depo işiyle başlayıp Pazaryeri'ndeki kısa bir işle devam edip Bozüyük'teki bir duruş penceresine yetişebilir. Bu güzergâhı kurarken önceliği duruş tarihi kesin olan işlere veririz; esnek tarihli işler aradaki boşluklara yerleştirilir.",
            },
            {
                baslik: "Bozüyük'teki duruş penceresine yetişmek",
                metin:
                    "Bozüyük'teki üretim hatlarının bakım pencereleri kısa ve kesindir; bu pencereye üçlü turun bir parçası olarak yetişmek, ayrı bir sevkiyat düzenlemekten hem hızlı hem ekonomiktir. Ancak bunun için Bozüyük talebinin, o haftaki Osmaneli-Pazaryeri programı kurulmadan önce bize ulaşması gerekir; program kurulduktan sonra eklenen talep, sıraya göre bir sonraki haftaya kayabilir.",
            },
            {
                baslik: "Üç bölge arasında makine sınıfı değişimi",
                metin:
                    "Osmaneli'deki geniş depo hacminden Bozüyük'teki dar üretim hattı koridoruna geçen bir makinenin, aynı sınıfta kalması her zaman mümkün değildir. Bu yüzden üçlü tur planlanırken hangi bölgede hangi sınıfın gerektiği önceden netleştirilir; gerekiyorsa aynı hafta içinde iki farklı sınıf ünite bölgede art arda kullanılır ve nakliye kalemi üç bölge arasında paylaşılır.",
            },
            {
                baslik: "Çevre ilçe modelinin ekonomik sınırı",
                metin:
                    "Her Bozüyük talebini üçlü tura eklemek mümkün olmayabilir — talep tarihinin haftalık programla çakışmaması ya da işin çok kısa süreli olması durumunda, tek başına Bozüyük'e yapılan bir sevkiyatın maliyeti yükselir. Bu durumda dürüst davranırız: maliyetin nasıl oluştuğunu açıkça gösterir, mümkünse bekleyebilecek kısmını bir sonraki haftaki programa yazarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üç bölgenin karşılaştırmalı profili",
                paragraflar: [
                    "Osmaneli, Pazaryeri ve Bozüyük'ün OSB profilleri birbirinden belirgin biçimde farklıdır. Aşağıdaki tablo bu üç profili yan yana gösterir.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Ağırlıklı sektör", "Talep ritmi", "Turdaki rolü"],
                    satirlar: [
                        ["Osmaneli OSB", "Lojistik, depo", "Sezona bağlı yığılma", "Uzun süreli ana durak"],
                        ["Pazaryeri OSB", "Karma küçük-orta sanayi", "Yıla eşit dağılım", "Kısa süreli ara durak"],
                        ["Bozüyük OSB", "Seramik, metal, ambar", "Duruş penceresine bağlı", "Kesin tarihli son durak"],
                    ],
                },
            },
            {
                baslik: "Üçlü turun kurulma mantığı",
                paragraflar: [
                    "Üç bölgeyi tek haftaya sığdırırken kullandığımız sıralama mantığı basittir: kesin tarihli ve pencere gerektiren işler (genellikle Bozüyük'teki duruş pencereleri) önce sabitlenir, ardından esnek tarihli işler (Osmaneli ve Pazaryeri'ndeki çoğu talep) bu sabit noktaların etrafına yerleştirilir. Bu sıralama, hiçbir işin kesin tarihini kaçırmadan makinenin bölgede en verimli şekilde dolaşmasını sağlar.",
                    "Talep sırasında hangi bölgeden geldiğinizi ve tarihinizin ne kadar esnek olduğunu belirtirseniz, o haftaki programa nereye yerleşeceğinizi baştan söyleyebiliriz.",
                ],
            },
            {
                baslik: "Çevre ilçede standardı korumak",
                paragraflar: [
                    "Bozüyük'e Osmaneli-Pazaryeri hattından giden makine, kendi bölgemizde teslim ettiğimizle aynı hazırlıktan geçer: kontrol belgeleri güncel, teslim öncesi kontrol listesi tamamlanmış, temizliği yapılmış. Üçlü turun yoğunluğu, bu standardı gevşetme gerekçesi değildir; her durağa ayrılan süreyi bilerek geniş tutarız.",
                    "Program sıkışıyorsa iş sayısını azaltırız, süreyi değil — bu, üç bölgeyi de aynı kalite düzeyinde hizmetlendirmemizi sağlayan temel ilkedir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bozüyük'teki tesisimiz için Osmaneli-Pazaryeri programına eklenebilir miyiz?",
                cevap:
                    "Eklenebilirsiniz ve bunu öneririz, çünkü üç bölgeyi tek haftaya sığdırmak nakliye kalemini paylaştırarak maliyeti düşürür. Bunun için Bozüyük talebinizin, o haftaki program kurulmadan önce bize ulaşması gerekir. Duruş penceresi olan işlerde tarihinizin kesin olması bizim için önemlidir; kesin tarihli işleri önce sabitler, esnek tarihli diğer bölge işlerini aralarına yerleştiririz.",
            },
            {
                soru: "Bozüyük'teki duruş penceremiz kısa, üçlü tur buna yetişebilir mi?",
                cevap:
                    "Yetişebilir ama önceliği duruş pencerenize veririz. Haftalık program kurulurken kesin tarihli işler önce sabitlenir; Osmaneli ve Pazaryeri'ndeki esnek tarihli işler bu sabit noktanın etrafına yerleştirilir. Program kurulduktan sonra gelen talep ise sıraya göre bir sonraki haftaya kayabilir; bu yüzden duruş tarihinizi olabildiğince erken bildirmenizi öneririz.",
            },
            {
                soru: "Osmaneli'deki depo işinden sonra makine aynı gün Bozüyük'e gelebilir mi?",
                cevap:
                    "Mesafe buna izin verir, ancak Osmaneli'deki işin süresine bağlıdır. Depo işleri genellikle günün büyük bölümünü kaplar; bu durumda Bozüyük'e geçiş ertesi güne planlanır. İş kısa sürüyorsa aynı gün içinde geçiş mümkündür. Hangi senaryonun geçerli olacağını, Osmaneli'deki iş listesini gördükten sonra netleştiririz.",
            },
            {
                soru: "Tek başına küçük bir işimiz var, üçlü tura sığmıyor; ne yapmalıyız?",
                cevap:
                    "Bu durumda dürüst bir maliyet tablosu sunarız: tek başına Bozüyük'e yapılan bir sevkiyatın nakliye payı, üçlü tura eklenen bir işe göre yüksek çıkar. İki seçenek öneririz — işinizin bekleyebilecek kısmını bir sonraki haftaki programa yazmak ya da aciliyet varsa maliyeti kabul ederek tekil sevkiyatı planlamak. Karar sizindir, ama toplamın nasıl oluştuğunu baştan gösteririz.",
            },
            {
                soru: "Bozüyük'teki seramik hattımızda çalışırken makine sınıfı Osmaneli'ndekinden farklı mı olur?",
                cevap:
                    "Genellikle evet. Osmaneli'deki geniş depo koridorlarına uygun bir makaslı sınıf, Bozüyük'teki dar üretim hattı koridorlarına her zaman sığmayabilir. Üçlü turu planlarken hangi bölgede hangi sınıfın gerektiğini önceden netleştiririz; gerekiyorsa aynı hafta içinde iki farklı sınıf ünite bölgede art arda kullanılır ve nakliye kalemi üç bölge arasında paylaşılır.",
            },
            {
                soru: "Üçlü tura girmek için tarihimizi ne kadar önceden bildirmeliyiz?",
                cevap:
                    "Kesin bir tarih yoksa bile bir aralık vermeniz yeterlidir — bu aralık için programda yer ayırırız ve tarih netleştiğinde kesinleştiririz. Genel önerimiz, haftalık program kurulmadan en az birkaç gün önce bize ulaşmanızdır; program kurulduktan sonra gelen talep, o haftaki sıraya göre bir sonraki haftaya kayabilir. Duruş penceresi olan işlerde bu süreyi daha da erkene almanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bozüyük OSB'nin seramik ve metal işleme ağırlıklı sanayi profili ile Osmaneli-Pazaryeri hattına yarım saatlik mesafedeki konumu kamuya açık genel bilgidir; üçlü tur kurgusu ve öncelik sıralaması firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
    "bolge:pazaryeri-osb": {
        h1: "Pazaryeri OSB’de Tekil Tesise Özel Platform Programı",
        giris:
            "Pazaryeri ilçe genelinde karma küçük ve orta ölçekli işlerin aynı turda birleştirilmesi anlamlı olabilir; Pazaryeri OSB’deki tekil tesis talebi ise bunun tersine, parselin kendi üretim düzenine göre kapalı bir program ister. Aynı OSB sınırı içindeki iki yapı bile kapı, zemin, tavan, enerji, trafik ve vardiya açısından birbirine benzemeyebilir. Bu nedenle ilçe sayfasındaki genel profil veya Osmaneli ile karşılaştırmalı tur mantığı, belirli bir OSB parseline doğrudan kopyalanmaz. Önce iş listesini tesis bölümlerine ayırır, her hedef için erişim geometrisini ve çalışma penceresini doğrularız. Manlift başka işletmeye yetişmek için gün ortasında programdan çekilmez; teslimden kapanışa kadar sorumlu tek saha planı üzerinden ilerler. Bunun karşılığında tesis de hedefleri, malzemeyi, enerji izolasyonu yetkilisini ve çalışma koridorunu önceden hazırlar. Amaç en büyük makineyi göndermek değil, tekil tesisin bütün bakım listesini mümkün olan en az konum değişimi ve en açık sorumluluk devriyle kapatmaktır.",
        maddeler: [
            {
                baslik: "Parsel girişinden hedefe ölçülü rota",
                metin:
                    "Teklif için yalnız tavan yüksekliği istenmez. Taşıyıcının veya kendinden yürür ünitenin giriş güzergâhı, en dar kapı, eşik, iç dönüş, kanal ve ızgara, makinenin duracağı taban ile hedefe yatay uzaklık birlikte kaydedilir. Üretim ekipmanı, istif veya geçici malzeme rotayı daraltıyorsa güncel fotoğraf kullanılır. Mimari plandaki açıklığın sahada boş olduğu varsayılmaz. Makine sınıfı üretici erişim diyagramıyla eşleştirilir; azami yükseklik tek karar değildir. Ölçü sınırdaysa keşif yapılır. Parsel içindeki her bölüme aynı ünitenin gireceği kabul edilmez; gerekiyorsa liste farklı sınıflara ayrılır ve bu ayrım teklif aşamasında görünür olur.",
            },
            {
                baslik: "Tesis içi hücreleri üretimden ayırmak",
                metin:
                    "Çalışılacak alan, yalnız manlift tekerlerinin çevresi kadar değildir. Bom ve sepetin bütün hareket zarfı, alttaki düşme bölgesi ve komşu araç veya makine hareketi birlikte kapatılır. Askılı yük, forklift, vinç veya başka platform aynı hücreye girecekse işler sıraya konur. Üretimin tamamı durmak zorunda olmayabilir; fiziksel olarak ayrılmış bölümler çalışmaya devam edebilir. Ancak sepet altından personel veya malzeme geçirilmez. Her hücre için tesis sorumlusu, izin başlangıcı ve geri teslim koşulu belirlenir. Ekip o bölümdeki tüm hazır kalemleri tamamlar, alet-parça sayımı yapar ve alanı teknik sorumluya vermeden sonraki noktaya geçmez.",
            },
            {
                baslik: "Enerji ve beklenmedik hareket kaynakları",
                metin:
                    "Aydınlatma, kapı motoru, havalandırma, kablo hattı veya üretim ekipmanı çevresindeki işte yalnız ana kumandanın kapalı görünmesi yeterli değildir. Tesis yetkilisi çalışılan sistemi tanımlar, enerji kaynaklarını kendi prosedürüne göre ayırır ve yeniden devreye girmeyi önleyen düzeni kurar. Pnömatik, hidrolik, mekanik veya depolanmış enerji de değerlendirilir. Platform operatörü tesis ekipmanının izolasyonunu üstlenmez; güvenli hücrenin teslimini alır. İş bitiminde koruyucu ve bağlantılar kontrol edilir, personel ile araç alanı terk eder ve sistemi yeniden çalıştırma kararı tesis sorumlusuna kalır. Son dakika hedefi yeni enerji değerlendirmesi olmadan mevcut izne eklenmez.",
            },
            {
                baslik: "Tek makineyle bölüm sırasını kurmak",
                metin:
                    "Tesisin bakım listesi yüksekliğe göre değil, ortam ve geçiş sırasına göre dizilir. Temiz kapalı hacim varsa önce tamamlanır; dış saha, tozlu veya kirli bölüm daha sonra gelir. Aynı park konumundan erişilebilen hedefler bir paket yapılır. Rüzgâr dış işi durdurduğunda, izin ve malzemesi hazır kapalı hücreye geçilebilmesi için yedek sıra oluşturulur. Akülü sınıfın şarjı, vardiya molası ve gece parkı programda yer alır. İki sınıf gerekiyorsa birincinin işi teslim edilmeden ikincisi rastgele sahaya alınmaz; indirme, park ve trafik alanlarının çakışması önlenir. Sıralama, manliftin gereksiz geçişini ve üretim koridorunun tekrar tekrar kapanmasını azaltır.",
            },
            {
                baslik: "Tekil programın kapanış ve iade kapısı",
                metin:
                    "Programın bittiği an, bakım ekibinin son hedefi terk ettiği an değildir. Açık iş izinleri, sökülmüş koruyucular, alet ve yedek parçalar, şarj veya yakıt durumu ve makinenin görünür hali kontrol edilir. Tamamlanmayan hedef güvenli durumu ve yeni gereksinimiyle yazılı kayda girer; sözlü olarak sonraki vardiyaya bırakılmaz. Tesis sorumlusu çalışma hücrelerinin yeniden açılmasını onaylar. Makine temizlenir, düz yükleme veya teslim alanına alınır ve iade fotoğrafları oluşturulur. Süre uzayacaksa karar, sonraki rezervasyon ve saha koşulu görülerek yazılı alınır; tekil tesis programı belirsiz biçimde açık tutulmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tekil tesis programının kontrol tablosu",
                paragraflar: [
                    "Pazaryeri OSB’de her parsel kendi koşuluyla ele alınır. Aşağıdaki tablo, programın bölüm bölüm hangi kanıtla ilerlediğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Temel soru", "Hazırlık", "Kapanış"],
                    satirlar: [
                        ["Keşif", "Makine hedefe nasıl ulaşır", "Rota, ölçü, zemin", "Sınıf doğrulandı"],
                        ["Teslim", "Saha kullanıma hazır mı", "Giriş, park, kullanıcı", "Durum kaydı alındı"],
                        ["Hücre açma", "Üretim güvenle ayrıldı mı", "Bariyer ve izolasyon", "İzin teslim edildi"],
                        ["İş paketi", "Aynı konumda ne kapanır", "Malzeme ve ekip", "Alet-parça sayıldı"],
                        ["Bölüm devri", "Alan yeniden açılabilir mi", "Teknik kontrol", "Sorumlu kabul etti"],
                        ["İade", "Program gerçekten bitti mi", "Açık iş ve durum kaydı", "Makine serbest"],
                    ],
                },
            },
            {
                baslik: "Teklif dosyasında bulunması gerekenler",
                paragraflar: [
                    "İşletme, hedefleri bölüm ve iş türüyle listeler. Girişten her hedefe ardışık fotoğraf, kapı-koridor ölçüsü, hedef kotu, yatay engel, taban yüzeyi ve sepette taşınacak alet-malzemeler paylaşılır. Üretimin hangi zamanda durabileceği, enerji izolasyonunu kimin yapacağı, forklift veya vinç gibi kesişen hareketler ve açık alanın hava bağımlılığı yazılır. Makine birkaç vardiya kalacaksa park, şarj ve yetkili kullanıcı düzeni de dosyanın parçasıdır.",
                    "Bu bilgilerle her hedef erişim diyagramına oturtulur ve bölüm sırası çıkarılır. Tek bir ünitenin bütün listeyi kapatamaması kusur değildir; bunu sahada öğrenmek kusurdur. Gerekli sınıflar, taşıma, kullanım süresi, operatör seçeneği ve bekleme koşulu teklif içinde ayrılır. Varsayımlar açık yazılır. Üretim yerleşimi veya hedef listesi değişirse etkisi yeniden değerlendirilir; eski teklif yeni saha düzenine otomatik uygulanmaz.",
                ],
            },
            {
                baslik: "Vardiya devri ve tesis hafızası",
                paragraflar: [
                    "Birden fazla vardiyada park alanı, şarj durumu, tamamlanan hücreler, açık izinler ve makinenin günlük kontrol sonucu yazılı devredilir. Önceki vardiyanın bariyeri veya güvenli koridoru yeni vardiyada otomatik geçerli sayılmaz; üretim ve istif düzeni değişmiş olabilir. Yetkili kullanıcı lastik, korkuluk, kumanda, acil indirme, alarm ve görünür sızıntıyı kontrol eder. Olağan dışı durumda makine kullanılmaz ve servis zinciri başlatılır; yetkisiz onarım yapılmaz.",
                    "Kapanış kayıtları sonraki bakım programının başlangıç verisidir. Hangi park noktasının çalıştığı, hangi hedefin farklı sınıf istediği, hangi izin veya malzemenin gecikme yarattığı not edilir. Bu bilgi belirli modeli kalıcı garanti etmez; parsel düzeni değişebilir. Sonraki talepte güncel fotoğrafla karşılaştırılır ve yalnız koşullar aynıysa önceki eşleşme kullanılır. Tekil tesise özel program böylece her seferinde sıfırdan kurulan bir tahmin olmaktan çıkar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Pazaryeri ilçe sayfasındaki makine önerisi OSB tesisimiz için geçerli mi?",
                cevap:
                    "İlçe genelindeki profil yalnız başlangıç bağlamıdır; kesin sınıf oluşturmaz. OSB parselinizin kapısı, iç dönüşü, zemini, hedef kotu, yatay engelleri, üretim ekipmanı ve vardiya trafiği ayrı ölçülür. Aynı ilçedeki iki tesis bile farklı manevra ve enerji koşulu sunabilir. Bu yüzden fotoğraf ve ölçüleri erişim diyagramıyla karşılaştırırız. İlçe turunda kullanılan kompakt makine sizin bütün listenize yetmeyebilir; tersine büyük bir sınıf dar koridorda iş üretemeyebilir. Teklif, tekil tesisin doğrulanmış hedeflerine dayanır ve hangi varsayımın kullanıldığını açıkça gösterir.",
            },
            {
                soru: "Makine gün içinde başka bir işletmeye gider mi?",
                cevap:
                    "Tekil tesis programı için ayrılan kullanım penceresinde, sözleşilmiş kapsam ve süre boyunca başka işletmeye rastgele kaydırılmaz. Bunun nedeni yalnız lojistik değildir; her çıkış ve dönüşte teslim, temizlik, güzergâh ve izin düzenini yeniden kurmak gerekir. Programınız erken biter ve teknik kapanış tamamlanırsa iade veya sonraki görev ayrı planlanabilir. Bekleme veya esnek kullanım koşulu varsa bu teklif aşamasında açıkça yazılır. İlçe genelindeki ortak tur modeliyle tekil OSB programını karıştırmayız; hangi modelin fiyatlandığı ve sorumluluğun ne zaman devredildiği belgede görünür.",
            },
            {
                soru: "Üretimi tamamen durdurmadan çalışabilir misiniz?",
                cevap:
                    "Fiziksel ve enerjisel olarak ayrılabilen hücrelerde tesisin geri kalanı çalışabilir. Ancak manliftin bom-sepet zarfı, alt düşme bölgesi ve komşu araç hareketi kontrol altına alınmalıdır. Çalışılan ekipmanın enerji ve beklenmedik hareket kaynakları tesis yetkilisi tarafından izole edilir. Forklift, vinç, askılı yük veya personel aynı hücreye girmez. Alan güvenle ayrılamıyorsa ilgili bölüm durdurulur veya iş daha uygun vardiyaya taşınır. Birkaç koni koyup üretim trafiğinin sepet altından sürmesi kabul edilmez. Her hücre teknik teslimden sonra yeniden açılır.",
            },
            {
                soru: "Son dakika çıkan işi aynı kiralamaya ekleyebilir miyiz?",
                cevap:
                    "Teknik olarak mümkünse eklenebilir, fakat mevcut iznin otomatik parçası değildir. Yeni hedefin erişim geometrisi, enerji kaynakları, alt alanı, malzemesi ve program kapanışına etkisi değerlendirilir. Aynı sınıf ve hazır hücreyle kapanıyorsa iş paketi güncellenir. Başka makine, uzun hazırlık veya yeni duruş gerektiriyorsa ayrı programa alınması daha doğru olabilir. Kritik listede bekleyen işleri riske atarak düşük öncelikli hedefe geçmeyiz. Değişiklik yazılı kayda girer; süre ve maliyet etkisi onaylanmadan program görünmez biçimde uzatılmaz.",
            },
            {
                soru: "İki farklı manlift sınıfı gerekirse saha nasıl yönetilir?",
                cevap:
                    "Her ünitenin iş paketleri, giriş zamanı, park alanı ve çalışma hücresi ayrı planlanır. Aynı dar alanda bom zarfları veya taşıma araçları çakışıyorsa eş zamanlı giriş yapılmaz. Temiz kapalı hacim ve dış saha gibi ortamlar da sırayı etkiler. Birinci sınıf kendi paketlerini teslim eder, gerekiyorsa sahadan çıkar ve ikinci ünitenin rotası açılır. Her makine için yetkili kullanıcı, günlük kontrol ve şarj-yakıt düzeni belirlenir. Çoklu ekipman otomatik hız sağlamaz; hazırlık doğruysa paralel, kesişme varsa ardışık çalışma verimli olur.",
            },
            {
                soru: "Program tamamlanınca makine ne zaman iade edilir?",
                cevap:
                    "Bütün hedeflerin teknik kabulü, alet-parça sayımı, açık izinlerin güvenli kapanışı ve makine durum kontrolü tamamlandığında iade kapısı açılır. Yarım iş varsa güvenli durumu ve yeni ihtiyacı yazılı kaydedilir; yalnız bakım ekibi sahadan ayrıldı diye ünite çekilmez. Tesis yükleme veya çıkış alanını diğer trafikten ayırır. Uzatma isteniyorsa sonraki rezervasyon ve teknik uygunluk görülerek yazılı karar alınır. İade anında fotoğraf, şarj veya yakıt ve görünür durum teslim kaydıyla karşılaştırılır. Böylece tekil programın sorumluluğu belirsiz biçimde açık kalmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Pazaryeri OSB’nin varlığı ve karma sanayi bağlamı uygulama belgesindeki kamuya açık genel çerçevedir; tekil tesis keşfi, hücre bazlı çalışma, vardiya devri ve kapanış kapısı sektör geneli saha pratiğidir. Özel tesis, firma, üretim kapasitesi, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:inhisar": {
        h1: "Osmaneli Aksından İnhisar’a Planlı Platform Servisi",
        giris:
            "İnhisar’a platform servisini il merkezi üzerinden verilmiş genel bir erişim sözüyle değil, Osmaneli yönünde kurulu iş programının kuzey ilçelere uzatılmasıyla planlarız. Bu sayfa ilçenin nüfus ölçeğini veya ‘her koşulda erişim’ taahhüdünü anlatmaz; odağı, bir makinenin ana programdan ayrılıp İnhisar’daki doğrulanmış hedefe nasıl ulaşacağı, sahada hazırlıksız beklemeden işi nasıl kapatacağı ve tekrar aksa nasıl döneceğidir. Tekil bir aydınlatma, çatı, depo veya yapı bakım talebi kısa sürebilir, fakat rota, taşıma ve saha kurulumu aynı hazırlığı ister. Bu yüzden iş listesi, tarih aralığı, giriş güzergâhı, zemin, hedef ölçüsü ve yerel sorumlu önceden tek kartta toplanır. Osmaneli tarafındaki kesin tarihli iş önce sabitlenir; İnhisar servisi uygun makine ve gerçek çalışma süresi doğrulandığında güzergâha eklenir. Acil talep ayrı değerlendirilir ve tutulamayacak varış sözü verilmez. Planlı modelin avantajı, sevkiyat yükünü tek kısa işin üzerine bırakmadan kuzeye uzanan düzenli bir servis günü oluşturmaktır.",
        maddeler: [
            {
                baslik: "Aks programına uygun tarih aralığı",
                metin:
                    "İnhisar’daki ertelenebilir iş için tek bir saat yerine uygulanabilir bir tarih aralığı alınır. Osmaneli yönündeki kesin duruş veya uzun depo işi önce takvime yerleşir; İnhisar hedefi aynı makinenin uygun olduğu günün başına ya da sonrasına bağlanır. Bu esneklik müşterinin habersiz beklemesi anlamına gelmez. Servis günü kesinleştiğinde varış penceresi, irtibat kişisi ve saha hazırlığı yazılı paylaşılır. Ana iş uzarsa yeni durum erken bildirilir; güvenli dönüş payını tüketmek için İnhisar çalışması geceye itilmez. Tarihi kesin olan bir arıza veya izin penceresi varsa ortak tur yerine ayrı sevkiyatın gerekip gerekmediği açıkça değerlendirilir.",
            },
            {
                baslik: "Uzak doğrulama paketiyle yanlış çıkışı önlemek",
                metin:
                    "Ekip yola çıkmadan hedefin yakın görüntüsüyle yetinmez. Ana yoldan son yaklaşım, giriş kapısı, dönme ve indirme alanı, eğim, zemin, üst engeller ve makinenin hedefe kadar izleyeceği rota ardışık fotoğraflanır. Hedef kotu, yatay mesafe ve en dar açıklık ölçülür. Yapılacak iş, sepette taşınacak malzeme, enerji izolasyonu ve alanın hangi saatte boş kalacağı belirtilir. Bilgi sınırdaysa canlı görüntü veya ön keşif istenir. Aks üzerindeki makine yalnız boş göründüğü için yönlendirilmez; teknik sınıfın İnhisar kartına uygunluğu doğrulanır. Yanlış ünitenin geri dönmesi, baştaki ölçümden daha pahalı ve yavaştır.",
            },
            {
                baslik: "Yerel sorumlu ve hazır saha kuralı",
                metin:
                    "Servis aracının varışında kapalı kapı, park edilmiş araç, eksik malzeme veya bulunamayan yetkili beklememesi gerekir. İşletme ya da işveren bir yerel sorumlu belirler; bu kişi giriş alanını açar, çalışma hücresini teslim eder ve gerekiyorsa enerji izolasyonu için yetkili ekibi hazır tutar. Makine zemini ve bom zarfı operatör tarafından ayrıca kontrol edilir. Fotoğraftan sonra yağış, istif veya trafik değişmişse eski plana dayanarak yükselme yapılmaz. Saha hazır değilse ekip rastgele başka işe başlamaz; kartın eksik maddesi kaydedilir ve rota üzerindeki hazır programa döner. Yeni servis tarihi gereken koşulla birlikte belirlenir.",
            },
            {
                baslik: "Kısa işi tek seferde kapatacak bakım listesi",
                metin:
                    "Tek bir armatür veya oluk işi için gelen makinenin aynı yapıdaki ertelenmiş hedefleri de kapatabilmesi toplam verimi artırır. Çatı kenarı, cephe, tabela, aydınlatma, kapı üstü veya depo içi gibi kalemler önceden listelenir; hepsinin aynı sınıfa uygun olduğu ölçüyle doğrulanır. Sahada son dakika hedef aramak yerine malzemeler çalışma sırasına göre hazırlanır. Her hücre bariyer ve gerekliyse enerji izolasyonuyla açılır. İş tamamlanınca alet-parça sayımı ve sorumlu kabulü yapılır. Listeyi büyütmek uğruna farklı makine veya uzun izin gerektiren bir hedef programa sıkıştırılmaz; o kalem sonraki uygun servise bırakılır.",
            },
            {
                baslik: "Kuzey servisinden ana aksa güvenli dönüş",
                metin:
                    "Günün son işi açılmadan kalan çalışma, hava ve dönüş koşulu birlikte değerlendirilir. Sepetin yükselmesi kısa sürse bile bariyer, enerji teslimi ve kapanış için yeterli zaman bırakılmalıdır. İş bittiğinde bom ve ayaklar toplanır, makinenin görünür durumu kontrol edilir, malzeme sayılır ve alan yerel sorumluya teslim edilir. Bir sonraki aks işi için yakıt veya şarj, kullanıcı ve park koşulu teyit edilir. Makine İnhisar’da kalacaksa düz, korunaklı ve yetkisiz erişime kapalı nokta önceden belirlenmiş olmalıdır; aksi halde ana programa geri döner. Dönüş, haritada görünen boş zamana değil güvenli kapanışa bağlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Osmaneli-İnhisar servis kartı",
                paragraflar: [
                    "Kuzeye uzanan servis, her aşaması doğrulanmış bir kartla yürür. Tablo, kısa işin aks programına hangi koşulla bağlandığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "İnhisar bilgisi", "Aks kontrolü", "Karar"],
                    satirlar: [
                        ["Talep", "İş listesi ve tarih aralığı", "Mevcut program", "Uygun gün adayı"],
                        ["Teknik eşleşme", "Kot, rota, zemin", "Mevcut makine sınıfı", "Uygunluk doğrulandı"],
                        ["Varış hazırlığı", "Yerel sorumlu ve açık saha", "Önceki iş kapanışı", "Çıkış onayı"],
                        ["Çalışma", "Hücre ve enerji teslimi", "Güvenli süre payı", "Liste sırayla kapanır"],
                        ["Teslim", "Alet-parça ve alan kontrolü", "Sonraki görev hazırlığı", "Kart kapalı"],
                        ["Dönüş veya park", "Güvenli koşul", "Aks takvimi", "Yeni sorumluluk devri"],
                    ],
                },
            },
            {
                baslik: "Ortak servis ile tekil sevkiyat arasındaki karar",
                paragraflar: [
                    "Tarihi esnek, kısa ve aks üzerindeki makine sınıfına uygun iş ortak servis için iyi adaydır. Müşteri tarih aralığı verir, rota ve saha paketi önceden tamamlanır. Böylece ayrı taşıma düzeni kurulmadan makine doğrulanmış bir uzantıya gider. Ancak kesin saatli duruş, acil güvenlik sorunu, farklı ekipman sınıfı veya uzun çalışma süresi ortak turun sınırlarını aşabilir. Böyle bir talebi programa sığdırıyormuş gibi göstermek yerine tekil sevkiyat ve gerçek maliyet açıkça sunulur.",
                    "Karar yalnız mesafeye bakılarak verilmez. Önceki işin kapanış belirsizliği, İnhisar’daki güvenli çalışma süresi, dönüş veya gece parkı, operatör vardiyası ve hava koşulu birlikte görülür. Ortak servis seçildiğinde her müşterinin teklifi ve teslim kaydı ayrı kalır; paylaşılan lojistik sorumlulukları karıştırmaz. Tekil sevkiyatta ise makine doğrudan hedef programa ayrılır ve başka aks işine yetişme varsayımı yapılmaz.",
                ],
            },
            {
                baslik: "Servis tekrarını azaltan kapanış kaydı",
                paragraflar: [
                    "İş bitiminde tamamlanan hedefler, erişilemeyen noktalar, kullanılan park konumu, zemin ve varsa enerji izolasyonu kaydedilir. Eksik kalemin nedeni malzeme, makine sınıfı, hava veya saha hazırlığı olarak açık yazılır. Bu kayıt bir sonraki servis için doğru sınıf ve süreyi belirler. Belirli bir makinenin her zaman uygun olacağı garantisi değildir; yapı ve yol koşulu değişebilir. Yeni talepte güncel fotoğrafla karşılaştırma yapılır.",
                    "Yerel sorumlu alanın güvenli teslimini onaylar. Makine üzerinde olağan dışı durum varsa ana aksa çalışmaya gönderilmez; kullanım durdurulur ve servis süreci başlatılır. Yakıt, şarj, temizlik ve sonraki işin malzemesi kontrol edilir. Bu disiplin, kuzey servisinin yalnız ‘uğranmış’ bir adres değil, kendi başlangıç ve bitiş kanıtı bulunan tamamlanmış iş olmasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "İnhisar talebimizi Osmaneli programına nasıl ekletebiliriz?",
                cevap:
                    "Önce iş listesini ve uygulanabilir tarih aralığını paylaşın. Hedef kotu, yatay engel, giriş güzergâhı, zemin ve çalışma alanı fotoğraflarıyla teknik kart hazırlanır. O dönemde Osmaneli aksında bulunan makinenin sınıfı ve boşluğu bu karta uygunsa servis günü önerilir. Tarih kesinleşince yerel sorumlu ve varış penceresi yazılı bildirilir. Programın önceki işi uzarsa durum erken paylaşılır; güvenli süre kalmıyorsa hedef geceye itilmez. Farklı sınıf veya kesin duruş saati gerekiyorsa ortak tur yerine tekil sevkiyat seçeneği sunulur.",
            },
            {
                soru: "Kısa bir iş için kesin aynı gün hizmet garantisi veriyor musunuz?",
                cevap:
                    "Hazırlık ve kapasite doğrulanmadan böyle bir garanti vermeyiz. Planlı serviste belirlenen gün ve varış penceresine bağlı kalırız, fakat önceki işin güvenli kapanışı, hava, yol ve ekipman durumu gerçek koşullardır. Acil talepte müsait sınıf, operatör ve rota kontrol edilir; mümkün olan en gerçekçi zaman paylaşılır. Tutulamayacak bir söz vermek, yerel ekibi ve malzemeyi boş yere bekletir. Kesin saat zorunluysa makinenin yalnız sizin programa ayrıldığı tekil sevkiyat daha uygun olabilir. Karar ve maliyet etkisi baştan görünür olur.",
            },
            {
                soru: "Saha fotoğrafları neden bu kadar ayrıntılı olmalı?",
                cevap:
                    "Hedefin yakın fotoğrafı yalnız yapılacak işi gösterir; makinenin oraya nasıl ulaşacağını göstermez. Ana yaklaşım, giriş, dönüş, en dar kapı, eğim, zemin, üst engel ve sert park noktası görülmelidir. Hedef kotu ile park yerinden yatay mesafe ölçülür. Aks üzerinde bulunan bir makine yükseklik olarak yeterli olsa da kapıdan geçmeyebilir veya engelin arkasına uzanamayabilir. Ayrıntılı paket yanlış çıkışı önler. Bilgi değişmişse saha günü operatör yeniden değerlendirir; fotoğraf güvenlik kontrolünün yerine değil, hazırlığına hizmet eder.",
            },
            {
                soru: "Makine geldiğinde iş alanı hazır değilse ne olur?",
                cevap:
                    "Yerel sorumlu ile eksik koşul belirlenir. Park edilmiş araç, kapalı giriş, eksik izolasyon veya hazır olmayan malzeme kısa sürede güvenle çözülebiliyorsa programdaki pay içinde beklenebilir. Belirsiz gecikmede ekip ana aks üzerindeki hazır işine döner; sahada rastgele başka hedef açılmaz. İnhisar kartı, eksik maddesi ve yeni hazırlık koşuluyla yeniden planlanır. Ortak servisin verimi bütün müşterilerin söz verilen saatte hazır olmasına bağlıdır. Gecikmenin sözleşme ve yeni sevkiyat etkisi açıkça bildirilir; güvenlik adımı zaman kazanmak için atlanmaz.",
            },
            {
                soru: "Aynı serviste birkaç yapımızdaki işleri birleştirebilir miyiz?",
                cevap:
                    "Birleştirmek çoğu zaman verimlidir, ancak her hedefin aynı makineye uygunluğu doğrulanmalıdır. Yapılar için ayrı rota, kapı, zemin, kot, yatay engel ve enerji bilgisi toplanır. Malzemeler durak sırasına göre hazırlanır. Aynı işletme sahasında bile temiz kapalı hacim ile dış veya kirli alanın sırası planlanır. Başka sınıf isteyen hedef sırf makine gelmişken zorlanmaz; sonraki uygun programa ayrılır. Her yapı tamamlandığında alet-parça sayımı ve sorumlu kabulü yapılır. Böylece liste büyürken teslim ve sorumluluk bulanıklaşmaz.",
            },
            {
                soru: "İş uzarsa makine İnhisar’da kalabilir mi?",
                cevap:
                    "Yalnız sonraki rezervasyon uygun, uzatma yazılı onaylı ve güvenli park koşulu hazırsa kalabilir. Park alanı düz, taşıma gücü uygun, korunaklı ve yetkisiz erişime kapalı olmalıdır. Akülü ünitede kuru ve güvenli şarj düzeni gerekir; kablo araç veya yaya yoluna bırakılmaz. Yetkili kullanıcı ve vardiya başı kontrol sorumluluğu belirlenir. Bu koşullar yoksa makine ana programa geri döner ve kalan iş yeni servis gününe alınır. İşin uzaması otomatik olarak açık uçlu kiralama veya kontrolsüz gece parkı anlamına gelmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. İnhisar’ın Bilecik’in kuzey ilçeleri arasında yer alması ve Osmaneli aksından servis yaklaşımı uygulama belgesindeki genel coğrafi çerçevedir; rota kartı, yerel sorumlu, ortak servis ve kapanış kaydı sektör geneli saha pratiğidir. İlçenin büyüklüğüne ilişkin iddia, koşulsuz erişim taahhüdü, özel tesis, mesafe, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },

    // ─────────────────────────────────────────────────────────────────────
    // HİZMET SAYFALARI — eksen: Bilecik'in traverten/mermer ocakları ve
    // doğal taş işleme tesisleri (Pazaryeri, Bozüyük ve çevresi kamuya açık
    // genel bilgidir). Kardeş domainlerin hizmet açısı (com-tr: Osmaneli OSB
    // soğuk zincir + orman ürünleri; com: Bilecik merkez genel) burada
    // İŞLENMEZ; buradaki her sayfa ocak sahası / blok-plaka işleme mercekli
    // kurulmuştur. Yazım: 2026-08-14.
    // ─────────────────────────────────────────────────────────────────────

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Bilecik'te Ocak Sahasında Sepetli / Örümcek Platform Kiralama",
        giris:
            "Bilecik'in traverten ve mermer ocaklarında standart bir makaslı ya da eklemli platformun giremediği pek çok nokta vardır: blok kesim hattının çevresindeki dar geçitler, kırıcı ve eleme ünitesinin altına sıkışmış bakım aralıkları, işleme fabrikasındaki kesme-cilalama tezgahları arasındaki koridorlar. Bu noktalarda makine tek parça hâlinde sürülerek gitmez; parçalara ayrılır, dar açıklıktan elle geçirilir ve çalışma noktasının yanında yeniden monte edilir. Örümcek platformun ocak sahasındaki en tipik kullanımı, tel kesme veya elmas disk hattının üstündeki vinç kirişine ya da kırıcı ünitesinin taşıyıcı çelik konstrüksiyonuna erişimdir — buralarda hem yükseklik hem dar manevra alanı aynı anda vardır ve tekerlekli bir platform ikisini birden karşılayamaz. İşleme fabrikasının iç kısmında ise cilalama hattı boyunca dizilmiş tezgahlar arasında kalan dar aralıklar, aynı gerekçeyle örümcek platform gerektirir. Bu sayfa, ocak ve fabrika sahasındaki dar erişim tiplerini ve örümcek platformun bu noktalarda standart platforma göre neden tek gerçekçi çözüm olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Blok kesim hattı çevresindeki dar geçitler",
                metin:
                    "Tel kesme veya elmas disk hattı, ocak yüzünde belirli bir koridor boyunca kurulur ve bu koridorun iki yanında çalışma alanı sınırlıdır. Hat üzerindeki makara sistemi, güç ünitesi ve soğutma hattı arasında yürüyen bir geçit kalır; bu geçide standart bir platform sığmaz. Örümcek platform parçalara ayrılıp geçitten taşınır, hattın kenarında monte edilir ve makara veya kablo bakımı için gereken erişim buradan sağlanır. Taş tozu ortamında olduğu için makinenin bakımı iş bitiminde ayrıca yapılır.",
            },
            {
                baslik: "Kırıcı ve eleme ünitesinin altındaki bakım aralığı",
                metin:
                    "Ocaklarda artık malzemeyi boyutlandıran kırıcı-eleme ünitesi genellikle bir çelik iskelet üzerine kurulur ve bu iskeletin alt kısmı, bakım için ancak dar bir aralıktan erişilebilir. Konveyör bandının geçtiği tünel benzeri bölüm, standart bir makaslı platformun ekseninden geçemeyeceği kadar dardır. Örümcek platform burada parça parça indirilir, ayakları konveyör hattının dışına gelecek şekilde konumlandırılır ve bakım noktasına ulaşılır. Toz ve titreşim sürekli olduğu için makinenin filtre bakımı iş sonunda mutlaka yapılır.",
            },
            {
                baslik: "İşleme fabrikasında cilalama hattı tezgahları arası",
                metin:
                    "Kesilen mermer ve traverten plakaların cilalandığı hatta, art arda dizilmiş tezgahlar arasında dar bir servis koridoru kalır. Tavan vinç rayının bakımı veya aydınlatma armatürünün değişimi için bu koridordan yukarı çıkmak gerekir. Standart bir makaslı platform bu koridora sığsa bile tezgahlar arası dönüş payı yetmez; örümcek platform, tezgahın hemen yanında monte edilerek bu sorunu çözer. Islak zeminli cilalama bölümünde makinenin ayak izi geniş tutulur ve kayganlık önceden kontrol edilir.",
            },
            {
                baslik: "Kurulum süresinin ocak vardiya programına etkisi",
                metin:
                    "Örümcek platformun parçalı yapısı, tekerlekli bir makinenin sahaya sürülmesinden daha uzun bir kurulum süresi ister. Ocak sahasında bu süre, üretim vardiyasının durdurulduğu bir pencereye denk getirilmelidir; aksi hâlde kurulum, aktif kesim veya kırma işleminin yanında güvenlik riski oluşturur. Bu yüzden ocak işletmesiyle önceden bir vardiya penceresi belirlenir ve kurulum-söküm bu pencereye sığdırılır. Kısa bir bakım için bu süre orantısız kalıyorsa, kompakt gövdeli akülü makaslı bir platform daha uygun olabilir.",
            },
            {
                baslik: "Taş tozu ve düzensiz yüzeyde ayak sağlamlığı",
                metin:
                    "Ocak sahasının hemen her noktası ince taş tozuyla kaplıdır ve zemin, kesim artığı parçalarla düzensizdir. Örümcek platformun ayakları bu zeminde geniş bir taban üzerine oturtulur ve her ayağın altı ayrı ayrı kontrol edilir; tek bir ayağın gevşek bir taş parçasına denk gelmesi makinenin dengesini bozabilir. Paletli gövde, açık ocak sahasında lastikli gövdeye göre daha güvenli bir seçenektir; işleme fabrikasının temiz iç mekânında ise lastikli gövde tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak ve fabrika içindeki dar erişim tipleri",
                paragraflar: [
                    "Aşağıdaki tablo, ocak sahası ve işleme fabrikasında en sık karşılaştığımız dar erişim noktalarını ve bunlara uygun örümcek platform yapılandırmasını özetler.",
                ],
                tablo: {
                    basliklar: ["Erişim tipi", "Tipik kısıt", "Gövde tercihi", "Belirleyici koşul"],
                    satirlar: [
                        ["Blok kesim hattı koridoru", "Dar yürüme geçidi", "Paletli, parçalı", "Taş tozu, titreşim"],
                        ["Kırıcı ünitesi alt aralığı", "Konveyör tüneli genişliği", "Paletli, dar ayak izi", "Toz ve titreşim"],
                        ["Cilalama hattı tezgah arası", "Dönüş payı yok", "Lastikli, parçalı", "Islak zemin"],
                        ["Vinç kirişi çevresi", "Yükseklik + dar alan", "Lastikli, hafif gövde", "Yapısal erişim izni"],
                        ["Açık ocak yamacı", "Düzensiz taş yüzeyi", "Paletli", "Zemin sağlamlığı"],
                    ],
                },
            },
            {
                baslik: "Parçalı taşımanın ocak sahasında pratikteki karşılığı",
                paragraflar: [
                    "Örümcek platform sahaya küçük bir araçla gelir ve oradan itibaren elle taşınır. Ocak sahasında bu taşıma, aktif çalışma alanlarından uzak, işaretlenmiş bir güzergâh üzerinden yapılır; kesim veya kırma işleminin devam ettiği bölgeden geçilmez. Kurulum ve söküm süresi kiralama süresine dahil edilir; kısa bir bakım işinde bu süre toplam zamanın önemli bir bölümünü alabilir.",
                    "Bizim tarafımızdaki hazırlık, taşıma güzergâhını ve kurulum noktasını önceden görmektir — güzergâh üzerindeki taş yığınları, aktif kesim hattına mesafe ve kurulum alanının vardiya programına göre boşta olup olmadığı sorulur. Bu bilgi netleşmeden makine sahaya gönderilmez.",
                ],
            },
            {
                baslik: "Ne zaman örümcek, ne zaman kompakt makaslı",
                paragraflar: [
                    "Ocak sahasındaki her dar nokta örümcek platform gerektirmez. Geçit genişliği bir metre civarındaysa ve dönüş yarıçapı yeterliyse kompakt gövdeli akülü makaslı platform hem daha hızlı kurulur hem daha ekonomiktir. Örümcek platform, geçit bir metrenin altına indiğinde, birden fazla dar noktadan geçilmesi gerektiğinde veya çalışma noktası konveyör ya da hat gövdesinin arkasında kaldığında öne çıkar.",
                    "Bu ayrımı doğru yapmak, hem üretim durdurma süresini hem gereksiz kurulum maliyetini azaltır. Talebinizi verirken geçit ölçüsünü, hattın hangi bölümünde çalışılacağını ve vardiya programınızı paylaşırsanız hangi gövdenin işe yarayacağını telefonda netleştirebiliriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform ocak sahasındaki toz ve titreşimden etkilenir mi?",
                cevap:
                    "Sürekli toz ve titreşim, makinenin filtre ve hidrolik sistemine ek yük bindirir; bu yüzden ocak sahasında çalışan makinenin bakımı işten hemen sonra yapılır, ertesi güne bırakılmaz. Kesim veya kırma işleminin doğrudan üzerinde çalışılmıyorsa risk düşer, fakat komşu bir hatta çalışıyorsa titreşimin makinenin ayak sağlamlığını nasıl etkilediği kurulum sırasında kontrol edilir. Sürekli yoğun titreşim varsa o hattın çalışması geçici olarak durdurulur; bu koşul ocak işletmesiyle önceden konuşulur.",
            },
            {
                soru: "Kurulum vardiya programımızı ne kadar etkiler?",
                cevap:
                    "Kurulum ve söküm, tekerlekli bir platformdan daha uzun sürdüğü için üretimin durduğu bir pencereye denk getirilmesi gerekir. Bu pencerenin uzunluğu geçit sayısına ve kurulum noktasının konveyör ya da hatta uzaklığına bağlıdır. İşletmenin vardiya takvimini paylaşmanız, bu süreyi en az kesintiyle planlamamızı sağlar. Kısa bir bakım işi için bu kesinti orantısız kalıyorsa, alternatif olarak kompakt makaslı platform önerebiliriz.",
            },
            {
                soru: "Kırıcı ünitesinin altındaki dar aralığa makine sığar mı?",
                cevap:
                    "Sığması, konveyör tünelinin net genişliğine ve makinenin monte edilmiş hâldeki ayak izine bağlıdır; bu ikisini karşılaştırmadan makine göndermeyiz. Toz ve titreşimin yoğun olduğu bu bölgede ayaklar geniş bir tabana oturtulur ve zemin sağlamlığı önceden kontrol edilir. Aralık ölçünüzü paylaştığınızda uygun gövdeyi söyleyebiliriz; ölçü net değilse sahaya çıkmadan kısa bir keşif öneririz.",
            },
            {
                soru: "Açık ocak yamacında paletli gövde neden tercih ediliyor?",
                cevap:
                    "Açık ocak sahasının zemini kesim artığı taş parçaları ve düzensiz yüzeyle kaplıdır; paletli gövde, ayak baskısını lastikli gövdeye göre daha geniş bir alana yayarak dengeyi artırır. Kayma riski yüksek eğimli yüzeylerde paletli gövde tercih edilir, düz ve sert zeminlerde ise lastikli gövde de kullanılabilir. Zeminin eğimini ve son günlerdeki hava koşulunu paylaşırsanız doğru gövdeyi önceden belirleyebiliriz.",
            },
            {
                soru: "Cilalama hattındaki tezgahlara zarar verme riski var mı?",
                cevap:
                    "Örümcek platform parçalar hâlinde taşınıp tezgahın yanında monte edildiği için tekerlekli bir makinenin geniş dönüş yarıçapı sorununu taşımaz; bu da tezgaha temas riskini azaltır. Buna rağmen kurulum öncesi tezgah kenarları ve hassas yüzeyler koruma malzemesiyle örtülür. Islak cilalama bölümünde ayakların kaymaması için zemin kontrolü ayrıca yapılır. Hattın hangi bölümünde çalışılacağını önceden belirtmeniz, koruma önlemlerini doğru kurmamızı sağlar.",
            },
            {
                soru: "Operatör bizim tarafımızdan mı, sizin tarafınızdan mı sağlanır?",
                cevap:
                    "İkisi de mümkündür. Ocak ve fabrika sahasındaki kurulum, standart bir teslimattan daha fazla teknik bilgi ve saha koşulu değerlendirmesi gerektirdiği için ilk kullanımda operatörlü kiralamayı öneririz. Ekibiniz kurulum ve söküm sürecini tecrübeyle öğrendikten sonra, belgeli personeliniz varsa makineyi operatörsüz de kiralayabilirsiniz. Her durumda teslim sırasında toz, titreşim ve zemin koşullarına özgü güvenlik noktaları sahada birlikte gözden geçirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin (özellikle Pazaryeri ve Bozüyük çevresi) traverten/mermer ocakları ve doğal taş işleme sanayisiyle bilinmesi kamuya açık genel bilgidir; örümcek platform kurulum yöntemi, gövde seçimi ve ocak sahası pratiği firma saha tecrübesidir. Tesis adı, mesafe ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Bilecik'te Ocaktan İşleme Tesisine Blok ve Plaka Nakliyesi",
        giris:
            "Bilecik'teki traverten ve mermer ocaklarına platform ve forklift teslimatı, il merkezindeki bir depoya yapılan teslimattan farklı bir hazırlık ister. Ocaklara giden yol genellikle şehirlerarası asfalttan ayrılıp bir tırmanma ve toz yolu geçişiyle devam eder; bu yol yağış sonrası kayganlaşabilir ve ağır tonajlı bir nakliye aracının manevra alanı, ocağın kendi malzeme trafiğiyle paylaşılır. İşleme fabrikalarına teslimat ise genellikle asfalt bağlantılı organize bir alanda yapılır ve burada asıl kısıt yol değil, blok ve plaka yükleme-boşaltma trafiğinin yoğunluğudur — nakliye aracımızın, aynı anda çalışan forklift ve vinçlerle aynı sahayı güvenle paylaşması gerekir. Her iki durumda da teslimat saatini ocak veya fabrikanın kendi üretim ve sevkiyat programına göre ayarlarız; makinemizin girişi, blok kesim veya plaka yükleme trafiğinin en yoğun olduğu saate denk gelmez. Bu sayfa, ocak ve fabrika sahasına teslimatın hangi koşullarla planlandığını ve teslimat öncesi hangi bilgilerin istendiğini anlatır.",
        maddeler: [
            {
                baslik: "Ocak yolu ve toz yüzeyinde araç manevrası",
                metin:
                    "Ocağa çıkan yol, çoğunlukla stabilize veya toz bir yüzeydir ve eğim, yağıştan sonra araç için ek risk taşır. Nakliye aracımız bu yola çıkmadan önce hava durumu ve yolun o günkü durumu ocak sorumlusundan teyit edilir; yoğun yağış sonrası araç, yüzey kuruyana kadar bekletilir. Manevra alanı genellikle ocağın kendi kamyon ve yükleyici trafiğiyle paylaşılır; bu yüzden teslimat saati, ocağın malzeme sevkiyatının en yoğun olmadığı bir dilime yerleştirilir.",
            },
            {
                baslik: "İşleme fabrikasında blok-plaka trafiğiyle eşzamanlılık",
                metin:
                    "İşleme fabrikasının sahası genellikle bloklar ve kesilmiş plakalarla dolu bir depolama alanına açılır; burada sürekli forklift ve vinç hareketi vardır. Platform veya forklift teslimatımız, bu hareketin en yoğun olduğu yükleme-boşaltma saatinden ayrı bir zaman dilimine yerleştirilir. Sahaya giriş öncesi fabrika yetkilisiyle güncel yerleşim teyit edilir çünkü blok ve plaka istifleri sık sık yer değiştirir; bir hafta önce boş olan bir koridor bugün dolu olabilir.",
            },
            {
                baslik: "Teslimat öncesi istenen saha bilgisi",
                metin:
                    "Teslimat öncesi ocak veya fabrika girişinin genişliği, varsa kontrol/güvenlik noktasının konumu, park ve indirme alanının zemin cinsi sorulur. Ocak sahasında bu bilgiye ek olarak aktif kesim veya kırma hattına mesafe istenir; fabrika sahasında ise blok/plaka depolama alanının o günkü doluluk durumu istenir. Bu bilgiler olmadan teslimat saati verilmez, çünkü hem güvenlik hem araç manevrası bu bilgiye bağlıdır.",
            },
            {
                baslik: "Ağır ve hacimli makinelerde ayrı planlama",
                metin:
                    "Ocak sahasındaki çelik konstrüksiyon bakımı veya kırıcı ünitesi bakımı için gönderilen eklemli boom platformlar, standart makaslı platformdan daha büyük bir taşıma aracı gerektirir. Bu araçların ocak yoluna girişi, yolun genişliği ve dönüş yarıçapı önceden değerlendirilir; dar bir yolda büyük araç güvenle dönemiyorsa teslimat, ocağın daha geniş bir noktasına kaydırılır ve makine oradan kendi gücüyle son noktaya ilerler.",
            },
            {
                baslik: "Vardiya sonrası ve hafta sonu teslimat seçeneği",
                metin:
                    "Bazı ocak ve fabrika işletmeleri, bakım işini üretimin durduğu vardiya sonrası veya hafta sonuna yerleştirmeyi tercih eder. Bu tercih bize önceden bildirildiğinde teslimat da aynı pencereye planlanır; böylece makine, üretim trafiğiyle hiç kesişmeden sahaya girer ve iş bittiğinde aynı şekilde çıkar. Bu seçenek, dar geçitli veya yoğun trafikli sahalarda özellikle tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak ve fabrika teslimatı karşılaştırması",
                paragraflar: [
                    "Ocak sahası ile işleme fabrikası, teslimat açısından farklı kısıtlar taşır. Aşağıdaki tablo bu farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Ocak sahası", "İşleme fabrikası", "Sonuç"],
                    satirlar: [
                        ["Yol yüzeyi", "Stabilize/toz, eğimli", "Asfalt, düz", "Ocakta hava koşulu belirleyici"],
                        ["Ana trafik kısıtı", "Malzeme sevkiyat aracı", "Blok/plaka forklift-vinç", "Saat planlaması farklı"],
                        ["Manevra alanı", "Değişken, dar", "Genellikle sabit düzen", "Ocakta önceden teyit şart"],
                        ["Doluluk durumu", "Sabit", "Günlük değişken (istif)", "Fabrikada güncel teyit şart"],
                        ["Tercih edilen pencere", "Kuru hava, düşük trafik", "Yükleme-boşaltma dışı saat", "İkisinde de üretimle kesişmeme"],
                    ],
                },
            },
            {
                baslik: "Teslimat gününde neye dikkat ediyoruz",
                paragraflar: [
                    "Nakliye aracımız sahaya girmeden önce ocak veya fabrika sorumlusuyla telefon teyidi alınır; yağış, doluluk veya trafik durumu son dakikada değişmişse teslimat saati esnetilir. Araç sahaya girdiğinde önce indirme noktası gösterilir, ardından makine güvenli bir hızda indirilir. İndirme sırasında ocağın kendi araçlarının geçişi durdurulmaz; sıra beklenir.",
                    "İşleme fabrikasında ise indirme noktası, blok/plaka istiflerinden yeterli mesafede seçilir; bu mesafe hem forklift manevrasına hem makinenin kendi hareketine yer bırakır. İndirme sonrası makine, çalışma noktasına kadar refakatli olarak yönlendirilir.",
                ],
            },
            {
                baslik: "Gecikme ve ertelemede izlenen yol",
                paragraflar: [
                    "Yağış nedeniyle ocak yolu güvensiz hâle gelirse teslimat ertelenir; bu karar aracın yola çıkmasından önce verilir, yolda risk alınmaz. Fabrika tarafında ise blok/plaka trafiğinin beklenenden yoğun çıkması hâlinde teslimat saati aynı gün içinde kaydırılır. Her iki durumda da yeni saat, işletmenin o günkü programına göre en az kesinti yaratacak şekilde belirlenir ve önceden bildirilir.",
                    "Tekrarlayan bir gecikme nedeni varsa (örneğin belirli bir vardiya saatinde sürekli yoğunluk), bu bilgi kaydedilir ve sonraki teslimatlar buna göre planlanır. Amaç, her seferinde aynı sorunu yeniden yaşamak yerine işletmenin gerçek ritmine uyan bir teslimat düzeni kurmaktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak yoluna büyük bir nakliye aracı çıkabilir mi?",
                cevap:
                    "Yolun genişliğine, eğimine ve dönüş noktalarına bağlıdır; bu bilgiyi teslimat öncesi ocak sorumlusundan ve mümkünse fotoğrafla teyit ederiz. Dar veya keskin dönüşlü bir yolda büyük araç güvenle manevra yapamıyorsa, teslimat ocağın daha geniş bir noktasına yapılır ve makine oradan kendi gücüyle son çalışma noktasına ilerler. Bu ayrım, aracın yolda sıkışmasını veya ocağın kendi trafiğini kilitlemesini önler.",
            },
            {
                soru: "Yağışlı havada teslimat yapılıyor mu?",
                cevap:
                    "Ocak yolunun stabilize veya toz yüzeyi yağış sonrası kayganlaşabildiği için, yoğun yağış durumunda teslimat ertelenir ve yüzey kuruyana kadar beklenir. Bu karar aracın yola çıkmasından önce verilir; riskli bir yolda ilerlemeye çalışılmaz. İşleme fabrikasının asfalt sahasında ise yağış genellikle teslimatı engellemez, yalnızca indirme alanındaki kayganlık kontrol edilir.",
            },
            {
                soru: "Blok ve plaka depolama alanı her hafta değişiyor, bu teslimatı etkiler mi?",
                cevap:
                    "Evet, bu yüzden teslimat öncesi fabrika yetkilisinden güncel yerleşim teyidi alırız. Bir önceki teslimatta boş olan bir koridor, yeni istiflerle dolmuş olabilir; bu bilgi güncellenmeden indirme noktası belirlenmez. Güncel bir fotoğraf veya kısa bir telefon teyidi, teslimat gününde sürpriz yaşanmasını önler.",
            },
            {
                soru: "Eklemli boom platform gibi büyük makineler için taşıma aracı farklı mı?",
                cevap:
                    "Evet, bu makineler standart makaslı platformdan daha büyük ve ağır bir taşıma aracı gerektirir. Ocak yoluna girişi, aracın dönüş yarıçapı ve yolun genişliği önceden değerlendirilir. Yol uygun değilse teslimat, ocağın daha geniş bir noktasına yapılır ve makine son mesafeyi kendi gücüyle tamamlar. Bu değerlendirme teslimat tarihi kesinleşmeden yapılır.",
            },
            {
                soru: "Teslimatı vardiya sonrasına veya hafta sonuna kaydırabilir miyiz?",
                cevap:
                    "Evet, bu tercih önceden bildirildiğinde teslimatı üretimin durduğu pencereye planlarız. Bu seçenek, dar geçitli ocak yollarında veya yoğun blok-plaka trafiği olan fabrika sahalarında özellikle tercih edilir; makine üretim trafiğiyle hiç kesişmeden sahaya girer ve çıkar. Vardiya programınızı paylaşmanız, bu planlamayı netleştirmemizi sağlar.",
            },
            {
                soru: "Teslimat sırasında ocağın kendi araçlarının işi durur mu?",
                cevap:
                    "Hayır, teslimat saati zaten ocağın kendi sevkiyat trafiğinin en yoğun olmadığı bir dilime yerleştirilir. Sahaya giriş sırasında ocağın kendi araçlarının geçişi önceliklidir; bizim aracımız sıra bekler ve manevra alanını paylaşırken ocak sorumlusunun yönlendirmesine uyar. Amaç, teslimatımızın ocağın üretim akışına eklenen bir kesinti değil, o akışın içine sığan bir adım olmasıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocakları ve doğal taş işleme tesislerinin il genelinde bulunması kamuya açık genel bilgidir; ocak yolu, teslimat planlaması ve saha koordinasyonu firma saha pratiğidir. Tesis adı, mesafe ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Bilecik'te Blok ve Plaka Deposunda Forklift ve İstifleme Kiralama",
        giris:
            "Traverten ve mermer bloklarının, kesilmiş plakaların depolandığı sahalarda forklift ihtiyacı, standart bir depo forkliftinden farklı bir kapasite ve dengeye ihtiyaç duyar. Ham blok, yoğunluğuna göre standart bir palete göre çok daha ağırdır ve genellikle düzensiz, kabaca kesilmiş bir yüzeye sahiptir; bu yüzden kaldırma sırasında yükün merkezinin doğru hesaplanması, standart paletli bir yükten daha kritiktir. Kesilmiş plakalar ise farklı bir risk taşır: ince, kırılgan ve genellikle dikey stantlarda depolanır; bir plaka setinin yanlış açıyla kaldırılması hem plakanın hem forkliftin dengesini bozabilir. Bilecik'teki ocak ve işleme fabrikası sahalarında forklift talebi bu iki iş için ayrı ayrı değerlendirilir — blok istiflemede ağır kapasiteli, geniş çatallı bir forklift; plaka istiflemede ise plaka standına özel ataşman veya yan kaydırmalı çatal tercih edilir. Bu sayfa, ocak ve fabrika sahasındaki forklift ihtiyacının hangi kritere göre belirlendiğini anlatır.",
        maddeler: [
            {
                baslik: "Ham blok istiflemede kapasite ve denge",
                metin:
                    "Kabaca kesilmiş bir traverten veya mermer blok, standart bir paletten belirgin şekilde ağır olabilir ve yüzeyi düzensizdir; bu düzensizlik, yükün ağırlık merkezinin tam olarak nerede olduğunu görsel tahminle belirlemeyi zorlaştırır. Forklift seçerken blok ağırlığının kapasiteye net bir payla altında kalması gerekir; sınırda çalışmak devrilme riskini artırır. Çatal genişliği bloğun tabanına göre ayarlanır ve kaldırma öncesi blok üzerinde çatlak veya kırık kontrol edilir.",
            },
            {
                baslik: "Kesilmiş plaka stantlarında yan kaydırmalı çatal",
                metin:
                    "Plakalar genellikle dikey metal stantlarda, birbirine yaslanmış hâlde depolanır. Bir plakayı standdan almak, düz bir çatalla değil yan kaydırma özelliğine sahip bir ataşmanla yapılır; bu, plakanın komşu plakalara sürtünmeden çıkarılmasını sağlar. Yan kaydırma olmadan yapılan bir çıkarma, plakanın kenarında kırılmaya veya komşu plakanın devrilmesine yol açabilir. Bu yüzden plaka deposunda çalışacak forklift talebinde ataşman türü önceden netleştirilir.",
            },
            {
                baslik: "Açık ocak sahasında zemin ve lastik seçimi",
                metin:
                    "Ocağın açık depolama alanı genellikle taş tozu ve düzensiz parçalarla kaplıdır; standart dolgu lastikli bir forklift bu zeminde daha stabil çalışır çünkü delinme riski düşüktür. Zemin eğimliyse forkliftin kaldırma yaparken eğim üzerinde durmaması, düz bir noktaya çekilerek çalışması istenir. İşleme fabrikasının kapalı deposunda ise zemin genellikle betondur ve bu kısıt ortadan kalkar.",
            },
            {
                baslik: "Sevkiyat öncesi kamyon yükleme sırası",
                metin:
                    "Blok veya plaka bir müşteriye sevk edilecekse, forklift yükleme sırasını kamyonun dengesine göre kurar; ağır parçalar dingil merkezine yakın, hafif parçalar uçlara yerleştirilir. Bu sıralama sevkiyat güvenliği için önemlidir ve genellikle fabrika veya ocağın sevkiyat sorumlusuyla birlikte planlanır. Yükleme sırasında forklift operatörünün kamyon şoförüyle sözlü koordinasyonu, çatalın kamyon kasasına güvenle girip çıkmasını sağlar.",
            },
            {
                baslik: "Kısa süreli yoğun sevkiyat dönemlerinde ek kapasite",
                metin:
                    "Bazı dönemlerde bir siparişin tamamının aynı gün sevk edilmesi istenebilir; bu durumda tek forklift yeterli hız sağlayamayabilir. Böyle bir talep önceden bildirildiğinde ikinci bir forklift geçici olarak devreye alınır ve iki makine, yükleme ve istifleme işini paralel yürütür. Bu ek kapasite, sürekli bir ihtiyaç değil, belirli bir sevkiyat gününe özgü bir çözümdür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Blok ve plaka işine göre forklift eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, ocak ve fabrika sahasındaki iki farklı istifleme işi için forklift seçim kriterlerini özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Yük özelliği", "Ekipman tercihi", "Belirleyici koşul"],
                    satirlar: [
                        ["Ham blok istifleme", "Ağır, düzensiz yüzey", "Yüksek kapasite, geniş çatal", "Ağırlık merkezi tahmini"],
                        ["Plaka standı çıkarma", "İnce, kırılgan, dikey", "Yan kaydırmalı ataşman", "Komşu plakaya temas riski"],
                        ["Açık saha depolama", "Taş tozu zemin", "Dolgu lastik", "Delinme riski"],
                        ["Kapalı fabrika deposu", "Beton zemin", "Standart lastik", "Zemin sabit"],
                        ["Sevkiyat yükleme", "Karışık boyut", "Standart + ataşman kombinasyonu", "Kamyon denge sırası"],
                    ],
                },
            },
            {
                baslik: "Ağırlık merkezi tahmininde yaşanan hata payı",
                paragraflar: [
                    "Kabaca kesilmiş bir bloğun ağırlık merkezi, düzgün bir dikdörtgen prizma gibi hesaplanamaz; yüzeydeki çıkıntı ve girintiler merkezi kaydırır. Deneyimli bir operatör bu kaydırmayı görsel olarak tahmin edebilir, fakat sınırda bir kapasitede çalışırken bu tahmin payı önemli hâle gelir. Bu yüzden blok ağırlığının forklift kapasitesinin belirgin altında kalması istenir; kapasiteye yakın çalışmak, tahmin hatasının devrilmeye dönüşme riskini artırır.",
                    "Blok ağırlığı net olarak bilinmiyorsa, ocak veya fabrika sorumlusundan tahmini ölçü ve yoğunluk bilgisi istenir. Bu bilgi olmadan sınırda bir kaldırmaya girişilmez; belirsizlik varsa daha yüksek kapasiteli bir forklift tercih edilir.",
                ],
            },
            {
                baslik: "Plaka kırılma riskini azaltan istifleme düzeni",
                paragraflar: [
                    "Plakaların dikey stantlarda depolanması, düşük bir eğimle desteklenerek plakaların birbirine yaslanmasını sağlar. Bir plaka çıkarılırken komşu plakaların desteğini kaybetmemesi için, çıkarma işlemi yavaş ve kontrollü yapılır; forklift operatörü çatalı plakanın tam altına değil, standın tasarımına uygun noktaya yerleştirir.",
                    "Yeni bir istif kurulurken de aynı özen gösterilir: plakalar boyut ve kalınlığa göre gruplanır, en ağır ve büyük plakalar altta veya standın en sağlam noktasında tutulur. Bu düzen, hem depolama güvenliğini artırır hem sonraki çıkarma işlemlerini kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ham blok kaldırmak için hangi kapasitede forklift gerekir?",
                cevap:
                    "Bloğun tahmini ağırlığı ve yoğunluğu bilinmeden kesin bir kapasite söylemeyiz; bu bilgiyi ocak veya fabrika sorumlusundan alırız. Genel kural, forklift kapasitesinin bloğun tahmini ağırlığından belirgin bir payla yüksek olmasıdır çünkü düzensiz yüzeyli bloklarda ağırlık merkezi tam olarak tahmin edilemez. Ölçü ve yoğunluk bilgisini paylaşırsanız uygun kapasiteyi doğrudan önerebiliriz.",
            },
            {
                soru: "Plaka stantlarından çıkarma işlemi için özel bir ataşman gerekiyor mu?",
                cevap:
                    "Evet, dikey stantlarda depolanan ince plakaları düz bir çatalla çıkarmak komşu plakalara zarar verme riski taşır. Yan kaydırmalı bir ataşman, plakayı standdan sürtünmeden ayırmayı sağlar. Deponuzdaki plaka boyutlarını ve stant tipini paylaşırsanız uygun ataşmanlı forklifti önceden hazırlarız.",
            },
            {
                soru: "Açık ocak sahasında forklift lastiği delinir mi?",
                cevap:
                    "Taş tozu ve kesim artığı parçalarla kaplı zeminlerde standart hava lastiği delinme riski taşır; bu yüzden açık saha işlerinde dolgu lastikli forklift tercih edilir. Dolgu lastik delinmeye karşı dayanıklıdır ve ocak sahasının düzensiz yüzeyinde daha stabil çalışır. Kapalı fabrika deposunda bu risk bulunmadığı için standart lastik yeterlidir.",
            },
            {
                soru: "Aynı gün büyük bir sevkiyatımız var, tek forklift yeterli olur mu?",
                cevap:
                    "Sevkiyatın hacmine bağlıdır; büyük bir siparişin tamamı aynı gün yüklenecekse tek forklift yeterli hızı sağlayamayabilir. Bu durumu önceden bildirirseniz ikinci bir forklifti geçici olarak devreye alır, iki makineyle paralel yükleme yaparız. Sevkiyat hacmini ve zaman penceresini paylaşmanız, doğru kapasite planlamasını yapmamızı sağlar.",
            },
            {
                soru: "Blok üzerinde çatlak varsa forklift bunu nasıl tespit eder?",
                cevap:
                    "Çatlak tespiti forkliftin kendisinden değil, kaldırma öncesi yapılan görsel kontrolden gelir; operatör bloğu kaldırmadan önce yüzeyi kontrol eder ve belirgin bir çatlak görürse kaldırmayı ocak veya fabrika sorumlusuna bildirir. Çatlaklı bir bloğun kaldırılması, kaldırma sırasında kırılma riski taşıdığı için sorumlunun onayı olmadan devam edilmez.",
            },
            {
                soru: "Kamyona yükleme sırası neye göre belirleniyor?",
                cevap:
                    "Ağır parçalar kamyonun dingil merkezine yakın, hafif parçalar uçlara yerleştirilir; bu sıralama sevkiyat sırasında aracın dengesini korur. Sıralama genellikle fabrika veya ocağın sevkiyat sorumlusuyla birlikte belirlenir çünkü müşteri talebine göre yükleme önceliği değişebilir. Yükleme planınız varsa önceden paylaşmanız, forklift operatörünün buna göre hazırlık yapmasını sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocakları ile blok/plaka işleme ve depolama tesislerinin il genelinde bulunması kamuya açık genel bilgidir; forklift ataşman seçimi, ağırlık merkezi değerlendirmesi ve sevkiyat sırası firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Bilecik'te Ocak Sahasında Eklemli Platform (Boom) Kiralama",
        giris:
            "Ocak sahasındaki en yüksek ve en zor erişilen bakım noktaları genellikle kırıcı ünitesinin taşıyıcı çelik konstrüksiyonu, konveyör bant desteği ve varsa sabit vinç sisteminin kirişleridir. Bu noktalara ulaşmak, düz bir yükselme değil yatayda da uzanma ister — kirişin altına, konveyörün yan tarafına veya kırıcının üst platformuna erişmek için sepetin hem yükselmesi hem yatay olarak öne uzanması gerekir. Bu, eklemli (boom) platformun makaslı platforma göre üstün olduğu tam noktadır. Ocak sahasının açık ve düzensiz zemini, eklemli platformun paletli veya dört tekerlekten çekişli gövdesini gerektirir; standart lastikli-dar gövdeli modeller bu zeminde güvenle çalışamaz. Bilecik'teki ocak sahalarında eklemli platform talebi büyük ölçüde bu üç noktadan gelir: kırıcı ünitesinin üst yapısı, konveyör hattı boyunca dizilmiş destek ayakları ve ocak sınırındaki aydınlatma direkleri. Bu sayfa, ocak sahasında eklemli platformun hangi işlerde tercih edildiğini ve zemin koşullarına göre gövde seçiminin nasıl yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Kırıcı ünitesinin üst yapısına erişim",
                metin:
                    "Kırıcı-eleme ünitesinin üst platformu ve besleme ağzı, zeminden birkaç metre yükseklikte, genellikle dar bir çelik iskeletin üzerindedir. Buraya düz bir yükselmeyle değil, iskeletin yan tarafından dolanarak ulaşmak gerekir; eklemli platformun boom kolu bu dolanmayı sağlar. Sepetin üst yapıya değmeden, güvenli bir mesafeden yaklaşması operatörün en dikkat ettiği noktadır çünkü kırıcı iskeleti titreşimli ve keskin kenarlı olabilir.",
            },
            {
                baslik: "Konveyör hattı boyunca destek ayağı bakımı",
                metin:
                    "Ocaktan işleme alanına malzeme taşıyan konveyör bant, düzenli aralıklarla yerleştirilmiş destek ayakları üzerinde durur. Bu ayakların bakımı, bandın altından değil yan tarafından yapılır ve her ayak farklı bir yükseklikte olabilir çünkü konveyör genellikle eğimli arazi üzerinde kurulur. Eklemli platform, bir ayaktan diğerine kısa sürede hareket edebildiği için bu tür dağınık, çok noktalı bakım işlerinde makaslı platforma göre daha hızlı sonuç verir.",
            },
            {
                baslik: "Ocak sınırındaki aydınlatma direkleri",
                metin:
                    "Gece vardiyası çalışan ocaklarda, saha sınırına yerleştirilmiş aydınlatma direkleri düzenli bakım ister. Bu direkler genellikle düzensiz, taşlık bir zeminde dururlar ve direğin etrafında sabit bir yaklaşım yolu yoktur. Paletli veya dört tekerlekten çekişli eklemli platform, bu zeminde direğe yaklaşıp armatürü değiştirebilecek tek makine sınıfıdır; standart lastikli gövde bu zeminde güvenle ilerleyemez.",
            },
            {
                baslik: "Açık sahada rüzgar ve eğim sınırı",
                metin:
                    "Ocak sahası genellikle açık ve rüzgara maruz bir alandır; sepet yükseldikçe rüzgarın etkisi artar ve belirli bir hız sınırının üzerinde çalışma durdurulur. Ayrıca zeminin eğimi, makinenin üreticisi tarafından belirlenen sınırın içinde kalmalıdır; bu sınırın üzerindeki bir eğimde makine ayaklarla dengelense bile güvenli çalışma alanı daralır. Bu iki koşul, ocak sahasındaki her boom işinde kurulum öncesi ayrıca kontrol edilir.",
            },
            {
                baslik: "Operatörün ocak trafiğiyle koordinasyonu",
                metin:
                    "Ocak sahasında kamyon, yükleyici ve kırıcı sürekli hareket hâlindedir; eklemli platform bu trafiğin içinde konumlanırken operatörün saha trafik düzenine hakim olması gerekir. Çalışma alanı, ocağın kendi trafik akışını kesmeyecek şekilde işaretlenir ve sepet açıkken bu alandan başka araç geçirilmez. İşin başında ocak sorumlusuyla birlikte bir güvenlik çevresi belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak sahasındaki boom işi tipleri ve gövde seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, ocak sahasında en sık karşılaşılan boom işlerini ve bunlara uygun gövde tipini özetler.",
                ],
                tablo: {
                    basliklar: ["İş noktası", "Erişim özelliği", "Gövde tercihi", "Belirleyici koşul"],
                    satirlar: [
                        ["Kırıcı üst yapısı", "Yatay uzanma + yükseklik", "Dizel/paletli boom", "Titreşim, keskin kenar"],
                        ["Konveyör destek ayağı", "Çok noktalı, dağınık", "Dört teker çekişli boom", "Eğimli arazi"],
                        ["Aydınlatma direği", "Düzensiz taşlık zemin", "Paletli boom", "Zemin sağlamlığı"],
                        ["Vinç kirişi", "Yükseklik + dar alan", "Eklemli, dar gövde", "Manevra alanı"],
                        ["Ocak sınır çiti/işaret", "Açık, rüzgarlı alan", "Ağır gövde, düşük ağırlık merkezi", "Rüzgar sınırı"],
                    ],
                },
            },
            {
                baslik: "Zemin eğimi neden her işte ayrıca kontrol edilir",
                paragraflar: [
                    "Ocak sahası doğası gereği düz değildir; kazı ve depolama işlemleri zemini sürekli değiştirir. Bir önceki hafta düz olan bir nokta, yeni bir malzeme yığınıyla eğimli hâle gelmiş olabilir. Bu yüzden eklemli platform her iş öncesi, kullanılacağı noktanın güncel eğimini operatör tarafından kontrol eder; üreticinin belirlediği eğim sınırının üzerinde bir zeminde makine konumlandırılmaz.",
                    "Eğim sınırı aşılıyorsa iki seçenek değerlendirilir: zeminin ocak ekibi tarafından düzeltilmesi veya makinenin daha uygun bir noktadan yaklaşacak şekilde yeniden konumlandırılması. Bu değerlendirme, işin başında operatör ve ocak sorumlusu tarafından birlikte yapılır.",
                ],
            },
            {
                baslik: "Rüzgar ve hava koşulunun çalışmaya etkisi",
                paragraflar: [
                    "Ocak sahasının açık yapısı, sepedin yükseldiği noktada rüzgarın hissedilir şekilde artmasına yol açar. Üretici tarafından belirlenen rüzgar hızı sınırının üzerinde çalışma durdurulur; bu sınır, sepetin yüksekliği ve boom'un uzanma mesafesiyle birlikte değerlendirilir. Sınırlı bir rüzgarda bile sepetin yatay uzanma mesafesi kısaltılarak çalışmaya devam edilebilir.",
                    "Yağmur veya sis gibi görüş koşullarını etkileyen hava durumlarında da çalışma değerlendirilir; kırıcı ünitesi gibi hareketli parçaların yakınında görüş kısıtlıysa iş ertelenir. Hava durumu takip edilir ve riskli bir pencereye denk gelen işler önceden ocak sorumlusuyla birlikte yeniden planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kırıcı ünitesinin üst yapısına ne kadar yakın çalışılabilir?",
                cevap:
                    "Mesafe, kırıcının titreşim seviyesine ve keskin kenarlı parçalarının konumuna göre belirlenir; sepet, üst yapıya doğrudan temas etmeyecek güvenli bir mesafede tutulur. Kırıcı çalışır durumdaysa iş genellikle üretim durdurulduktan sonra yapılır; aktif çalışırken yakın mesafede iş yapılmaz. Ünitenin hangi bölümüne erişileceğini önceden belirtmeniz, doğru mesafe ve yaklaşım açısını planlamamızı sağlar.",
            },
            {
                soru: "Ocak sahasının eğimli zemininde makine devrilme riski var mı?",
                cevap:
                    "Her kurulum öncesi zeminin eğimi operatör tarafından ölçülür ve üreticinin belirlediği sınırın üzerindeyse makine o noktada çalıştırılmaz. Ocak zemini kazı ve depolama nedeniyle sık değiştiği için bu kontrol her iş için ayrıca yapılır, önceki işten kalan bilgiye güvenilmez. Eğim sınırı aşılıyorsa zeminin düzeltilmesi veya farklı bir yaklaşım noktası değerlendirilir.",
            },
            {
                soru: "Gece vardiyasında aydınlatma direği bakımı yapılabilir mi?",
                cevap:
                    "Yapılabilir, ancak gece çalışmasında makinenin kendi aydınlatması ve operatörün görüş mesafesi ek olarak değerlendirilir. Ocak sahasının düzensiz zemini gece görüşünü zorlaştırdığı için, mümkünse iş gündüz saatlerine planlanır; zorunlu gece işlerinde ek aydınlatma ekipmanı ve daha dar bir çalışma çevresi kullanılır.",
            },
            {
                soru: "Rüzgarlı günlerde çalışma tamamen durur mu?",
                cevap:
                    "Durmaz, ancak üretici tarafından belirlenen rüzgar hızı sınırının üzerinde sepet yükseltilmez. Sınıra yakın rüzgarda boom'un yatay uzanma mesafesi kısaltılarak daha güvenli bir konumda çalışmaya devam edilebilir. Sınır aşıldığında iş durdurulur ve rüzgar düşene kadar beklenir; bu karar sahadaki operatör tarafından anlık olarak verilir.",
            },
            {
                soru: "Konveyör hattındaki birden fazla destek ayağını tek seferde bakıma alabilir miyiz?",
                cevap:
                    "Evet, bu eklemli platformun avantajlı olduğu tam senaryodur. Ayaklar arası kısa mesafe ve farklı yükseklikler nedeniyle makaslı platform her seferinde yeniden konumlanmak zorunda kalırken, eklemli platform boom kolunu kullanarak bir ayaktan diğerine daha hızlı geçer. Bakım listesini önceden paylaşırsanız ayakları en verimli sırayla planlarız.",
            },
            {
                soru: "Operatörlü mü yoksa operatörsüz mü kiralama öneriyorsunuz?",
                cevap:
                    "Ocak sahasının değişken zemini, trafik yoğunluğu ve rüzgar koşulları nedeniyle bu tür işlerde operatörlü kiralamayı öneririz. Sahadaki koşulları anlık değerlendirebilen bir operatör, eğim ve rüzgar sınırlarını doğru yorumlayarak güvenli çalışmayı sağlar. Belgeli ve deneyimli personeliniz varsa operatörsüz kiralama da mümkündür; bu durumda zemin ve rüzgar sınırları teslim sırasında birlikte gözden geçirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocaklarında kırıcı-eleme ünitesi, konveyör hattı ve saha aydınlatması gibi altyapı unsurlarının bulunması sektörün genel işleyişine dair kamuya açık bilgidir; zemin eğimi kontrolü, rüzgar sınırı ve operatör-trafik koordinasyonu firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Bilecik'te Mermer İşleme Fabrikasında İç Mekân Platform Kiralama",
        giris:
            "Mermer ve traverten işleme fabrikasının kapalı üretim hacmi, ocak sahasından tamamen farklı bir bakım profili taşır: burada zemin betondur, hava koşulu devre dışıdır, fakat kesme-cilalama sırasında ortaya çıkan taş tozu ve su karışımı, elektrik-mekanik ekipmanın bakımını zorlaştıran kendi risklerini taşır. Tavan vinç rayı, aspirasyon hattı, çatı altı aydınlatma armatürleri ve kesme suyu devridaim borularının bakımı, fabrika içindeki tipik iç mekân platform işleridir. Kapalı hacimde içten yanmalı bir makine kullanmak hem emisyon hem gürültü açısından uygun değildir; bu yüzden fabrika içi bütün işlerde akülü makaslı veya akülü eklemli platform kullanılır. Islak cilalama bölümünde zemin sürekli nemli olduğu için makinenin lastik tipi ve fren mesafesi ayrıca değerlendirilir; kuru kesme bölümünde ise havadaki ince taş tozu, makinenin elektrik aksamının korunmasını gerektirir. Bu sayfa, fabrika içindeki farklı bölümlerin platform ihtiyacını ve akülü makine seçiminde nelere dikkat edildiğini anlatır.",
        maddeler: [
            {
                baslik: "Tavan vinç rayı ve çatı altı bakımı",
                metin:
                    "Blok ve plakaları taşıyan tavan vinç sistemi, fabrika tavanına monte edilmiş bir ray üzerinde hareket eder; bu rayın periyodik bakımı ve çatı altı aydınlatma armatürlerinin değişimi, fabrikanın en yüksek noktasına erişim gerektirir. Vinç kirişinin altında çalışırken vinç sisteminin o gün için kilitlenmesi ve etiketlenmesi istenir; bu, sepette çalışan personelin üzerine beklenmedik bir hareketle yük gelmesini önler.",
            },
            {
                baslik: "Islak cilalama bölümünde zemin ve lastik seçimi",
                metin:
                    "Cilalama hattı boyunca kullanılan su, zemini sürekli nemli tutar ve bazı noktalarda ince bir taş tozu-su karışımı birikir. Bu zeminde standart lastikli bir platform kayma riski taşır; bu yüzden ıslak bölümde çalışacak makinenin lastik deseni ve fren mesafesi önceden kontrol edilir, gerekiyorsa zemin kurulum öncesi temizlenir. Makinenin kendisi de su sıçramasına karşı korunur çünkü elektrik aksamı ıslak ortamda risk taşır.",
            },
            {
                baslik: "Kuru kesme bölümünde toz ve elektrik aksamı koruması",
                metin:
                    "Bazı kesme işlemleri kuru yapılır ve bu bölümde havadaki ince taş tozu yoğundur. Akülü platformun elektrik bağlantı noktaları ve şarj soketi, toz girişine karşı korunur; iş bitiminde makine kuru bölümden çıkarılıp temizlenmeden bir sonraki işe gönderilmez. Toz filtresi olan bir solunum koruması, sepette çalışan personel için ayrıca önerilir; bu konuda fabrika güvenlik kurallarına uyulur.",
            },
            {
                baslik: "Aspirasyon ve devridaim hattı bakımı",
                metin:
                    "Kesme ve cilalama sırasında ortaya çıkan tozu ve suyu tahliye eden aspirasyon-devridaim hattı, tavana yakın veya duvar üstü seviyede kurulur. Bu hattın filtre ve boru bağlantılarının bakımı düzenli aralıklarla yapılır; hat boyunca birden fazla erişim noktası olduğu için makaslı platform, hattın altından ilerleyerek her noktada durup kısa süreli bakım yapabilir. Hat üzerindeki iş sırası önceden fabrika bakım ekibiyle belirlenir.",
            },
            {
                baslik: "Üretim durmadan planlı bakım penceresi",
                metin:
                    "Fabrika üretimi genellikle sürekli çalıştığı için bakım işleri, üretimin en az etkilendiği bir vardiya dilimine yerleştirilir. Makine, aktif kesme veya cilalama hattının doğrudan üzerinde değil, o anda boşta olan bir bölümde konumlandırılır. Vardiya programı önceden paylaşıldığında, iş bu programa göre planlanır ve üretim akışını kesintiye uğratmadan tamamlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Fabrika içi bölümlere göre platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, mermer işleme fabrikasının farklı bölümlerindeki tipik platform ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Zemin/hava durumu", "Makine tercihi", "Belirleyici koşul"],
                    satirlar: [
                        ["Islak cilalama hattı", "Nemli, kaygan", "Akülü makaslı, özel lastik", "Fren mesafesi"],
                        ["Kuru kesme hattı", "Tozlu, kuru", "Akülü makaslı, korumalı elektrik", "Toz girişi"],
                        ["Tavan vinç rayı", "Kuru, yüksek", "Akülü eklemli", "Vinç kilitleme"],
                        ["Aspirasyon hattı", "Değişken, çok noktalı", "Akülü makaslı", "Sıralı erişim"],
                        ["Depolama/istif alanı", "Kuru beton", "Akülü makaslı/forklift", "Manevra alanı"],
                    ],
                },
            },
            {
                baslik: "Neden yalnızca akülü makine kullanılıyor",
                paragraflar: [
                    "Fabrika içi kapalı hacimde içten yanmalı bir makinenin egzoz gazı, havalandırma yeterli olsa bile kesme-cilalama işlemi sırasında oluşan tozla birleşerek solunum riskini artırır. Bu yüzden fabrika içindeki bütün platform ve makaslı işlerde akülü modeller kullanılır; bu, sadece bir tercih değil sabit bir kuraldır.",
                    "Akülü makinenin şarj noktası, fabrikanın elektrik altyapısına uygun ve toz/su girişinden korunmuş bir yerde belirlenir. İş süresi bir şarj döngüsünü aşacaksa, ikinci bir makine veya gün içinde kısa bir şarj molası planlanır; bu planlama işin başında netleştirilir.",
                ],
            },
            {
                baslik: "Üretim ekibiyle koordinasyon",
                paragraflar: [
                    "Fabrika içindeki her bakım işi, o bölümdeki üretim ekibiyle birlikte koordine edilir. Vinç kilitleme, hat durdurma veya belirli bir makinenin geçici olarak devre dışı bırakılması gibi adımlar fabrika personeli tarafından yapılır; biz yalnızca platformu kullanarak erişim sağlarız. Bu ayrım, sorumluluğun net kalmasını ve iki ekibin aynı anda güvenle çalışmasını sağlar.",
                    "İş bitiminde makine bölümden çıkarılır, kalan toz ve su izleri temizlenir ve alan üretim ekibine teslim edilir. Vinç veya hat kilidi varsa bu kilit üretim ekibi tarafından kaldırılır; bu adım bizim sorumluluğumuzda değildir ama teslim sırasında birlikte teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Fabrika içinde neden sadece akülü platform kullanılıyor?",
                cevap:
                    "Kapalı üretim hacminde içten yanmalı bir makinenin egzoz gazı, kesme-cilalama işleminden çıkan tozla birleşerek solunum riskini artırır; bu yüzden fabrika içi bütün işlerde akülü model kullanılır. Bu bir tercih değil, kapalı mekân güvenliği açısından uyguladığımız sabit bir kuraldır. Açık ocak sahasında ise iş tipine göre dizel veya akülü model seçilebilir.",
            },
            {
                soru: "Islak cilalama bölümünde makine kayma riski var mı?",
                cevap:
                    "Zeminin sürekli nemli olması kayma riskini artırır; bu yüzden ıslak bölümde çalışacak makinenin lastik deseni ve fren mesafesi önceden kontrol edilir. Gerekiyorsa kurulum öncesi zemin temizlenir ve kuru bir çalışma koridoru açılır. Makinenin elektrik aksamı da su sıçramasına karşı ayrıca korunur.",
            },
            {
                soru: "Tavan vinç rayının altında çalışırken güvenlik nasıl sağlanıyor?",
                cevap:
                    "Vinç sisteminin o gün için kilitlenmesi ve etiketlenmesi istenir; bu, sepette çalışan personelin üzerine beklenmedik bir vinç hareketiyle yük gelmesini önler. Kilitleme işlemi fabrikanın bakım ekibi tarafından yapılır ve iş boyunca kilit kaldırılmaz. İş bitiminde kilit, üretim ekibiyle birlikte teyit edilerek kaldırılır.",
            },
            {
                soru: "Kuru kesme bölümündeki toz makineye zarar verir mi?",
                cevap:
                    "Uzun vadede zarar verebilir; bu yüzden akülü platformun elektrik bağlantı noktaları ve şarj soketi toz girişine karşı korunur, iş bitiminde makine temizlenmeden başka bir işe gönderilmez. Yoğun tozlu bir bölümde uzun süreli çalışma planlanıyorsa, makinenin ara kontrolü için kısa bir mola önerilir.",
            },
            {
                soru: "Bakım işi üretimimizi durdurur mu?",
                cevap:
                    "Genellikle durdurmaz; iş, üretimin en az etkilendiği bir vardiya dilimine ve o anda boşta olan bir bölüme planlanır. Vardiya programınızı önceden paylaşırsanız, çalışmayı bu programa göre kurarız. Vinç kirişi gibi doğrudan üretim ekipmanıyla ilişkili işlerde kısa bir durdurma gerekebilir; bu durum önceden netleştirilir.",
            },
            {
                soru: "Şarj süresi iş programını etkiler mi?",
                cevap:
                    "İş süresi bir şarj döngüsünü aşacak kadar uzunsa bunu önceden değerlendiririz; gerekirse ikinci bir makine devreye alınır ya da gün içinde kısa bir şarj molası planlanır. Şarj noktası, fabrikanın elektrik altyapısına uygun ve toz-su girişinden korunmuş bir yerde önceden belirlenir. Bu planlama, iş başlamadan önce netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Mermer/traverten işleme fabrikalarında tavan vinç sistemi, kesme-cilalama hattı ve aspirasyon altyapısının bulunması sektörün genel işleyişine dair kamuya açık bilgidir; akülü makine zorunluluğu, ıslak/kuru bölüm ayrımı ve üretim ekibiyle koordinasyon firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Bilecik'te Ocak Sahası Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Ocak sahasındaki kırıcı-eleme ünitesi, konveyör hattı destek kuleleri ve varsa sabit vinç sisteminin taşıyıcı iskeleti, zamanla genişleyen veya yenilenen çelik konstrüksiyon yapılardır. Yeni bir konveyör hattı eklenmesi, mevcut bir kırıcı ünitesinin büyütülmesi veya eski bir destek kulesinin güçlendirilmesi gibi işlerde montaj ekibi, kirişleri ve bağlantı noktalarını yerden yüksek bir seviyede birleştirmek zorundadır. Bu montaj işi, sabit bir noktada değil kirişin uzunluğu boyunca ilerleyen bir çalışmadır; bu yüzden platform, tek bir noktaya değil montajın ilerlediği hatta göre konumlandırılır. Açık ocak sahasının düzensiz zemini, montaj platformunun paletli veya geniş tabanlı bir gövde olmasını gerektirir. Bilecik'teki ocak sahalarında bu tür montaj talebi, genellikle üretim kapasitesinin artırıldığı veya eski bir hattın yenilendiği dönemlerde yoğunlaşır. Bu sayfa, ocak sahasındaki çelik konstrüksiyon montaj işlerinde platform kullanımının nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Kiriş montajında hat boyunca ilerleyen çalışma",
                metin:
                    "Bir konveyör destek kulesi veya kırıcı iskeleti monte edilirken, kirişler tek tek yerine yerleştirilip kaynaklanır veya cıvatalanır. Bu işlem, montaj ekibinin belirli bir kirişten diğerine geçmesini gerektirir; platform bu geçişi takip edecek şekilde günün her saatinde farklı bir noktada konumlanır. İşin başında montaj planıyla birlikte platformun hangi sırayla hangi noktalara gideceği netleştirilir.",
            },
            {
                baslik: "Kaynak işlerinde yangın ve kıvılcım önlemi",
                metin:
                    "Çelik konstrüksiyon montajının büyük bölümü kaynak içerir ve kaynak kıvılcımı, platformun kendisi ve çevresindeki malzeme için yangın riski taşır. Sepette çalışan kaynakçının altına ve çevresine yanmaz örtü serilir, platformun hidrolik hatları kıvılcımdan korunacak şekilde konumlandırılır. Kaynak işlemi bitene kadar platform o noktada sabit tutulur ve iş bitince kıvılcım söndüğünden emin olunduktan sonra hareket ettirilir.",
            },
            {
                baslik: "Ağır kirişlerin vinçle taşınmasıyla koordinasyon",
                metin:
                    "Büyük kirişler platform tarafından değil, ayrı bir mobil vinç veya sabit vinç tarafından yerine taşınır; platform bu taşıma sırasında vincin çalışma alanının dışında bekletilir. Kiriş yerine indirildikten sonra platform, bağlantı ve kaynak işlemi için konumlanır. Bu sıralama, vinç ve platformun aynı anda aynı alanda çalışarak çarpışma riski yaratmasını önler.",
            },
            {
                baslik: "Zemin sağlamlığı ve geçici destek noktaları",
                metin:
                    "Yeni bir konstrüksiyonun kurulduğu alan, henüz sahanın kalıcı zemin düzenlemesi yapılmamış, dolgu veya kazı artığı bir yüzey olabilir. Platform bu yüzeyde çalışmadan önce zeminin taşıma gücü kontrol edilir; gerekiyorsa geçici çelik plaka veya dolgu ile zemin güçlendirilir. Bu kontrol, montajın erken aşamasında, henüz sahanın düzenlenmediği dönemde özellikle önemlidir.",
            },
            {
                baslik: "Montaj tamamlandıktan sonra son kontrol erişimi",
                metin:
                    "Konstrüksiyon monte edildikten sonra, bağlantı noktalarının sıkılığı ve kaynak kalitesi genellikle bir son kontrolle doğrulanır. Bu kontrol için platform tekrar devreye girer; bu kez kaynak yapılmadığı için yangın önlemi gerekmez, fakat kontrol ekibinin her bağlantı noktasına erişmesi gerektiğinden platformun hat boyunca hareketi yine planlı yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak sahası montaj işlerinde platform rolü",
                paragraflar: [
                    "Aşağıdaki tablo, ocak sahasındaki çelik konstrüksiyon montajının farklı aşamalarında platformun rolünü özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "İşlem", "Platform rolü", "Belirleyici koşul"],
                    satirlar: [
                        ["Kiriş yerleştirme", "Vinçle taşıma", "Alan dışında bekleme", "Çarpışma önleme"],
                        ["Kaynak/bağlantı", "Kaynak, cıvata", "Sabit konumlanma", "Kıvılcım/yangın önlemi"],
                        ["Hat ilerlemesi", "Sıradaki kirişe geçiş", "Planlı hareket", "Montaj sırası"],
                        ["Zemin hazır değilken", "Erken aşama montaj", "Geçici destekle çalışma", "Taşıma gücü"],
                        ["Son kontrol", "Bağlantı doğrulama", "Hat boyunca erişim", "Kontrol listesi"],
                    ],
                },
            },
            {
                baslik: "Kaynak güvenliğinin platform seçimine etkisi",
                paragraflar: [
                    "Kaynak işlemi sırasında sepette çalışan personelin güvenliği, yalnızca kişisel koruyucu ekipmanla değil platformun kendi korunmasıyla da sağlanır. Hidrolik hortumlar ve elektrik kabloları kıvılcım sıçrama alanının dışına alınır; sepetin tabanı yanmaz malzemeyle kaplanabilir. Bu önlemler, işin başında kaynak ekibiyle birlikte gözden geçirilir.",
                    "Uzun süreli kaynak işlerinde platform sabit tutulduğu için, akülü modellerde şarj süresi ayrıca planlanır; iş kaynak nedeniyle kesintisiz devam etmesi gerekiyorsa dizel model veya yedek akülü makine tercih edilebilir.",
                ],
            },
            {
                baslik: "Montaj planıyla platform sırasının eşleşmesi",
                paragraflar: [
                    "Montaj ekibinin kendi iş sırası, platformun hangi noktada ne zaman bulunacağını belirler. Bu sıra önceden paylaşılmazsa platform, montaj ekibinin ilerleme hızına yetişemez veya gereksiz yere bekler. Bu yüzden büyük montaj işlerinde platform operatörü, montaj şefiyle birlikte günlük bir sıralama üzerinde çalışır.",
                    "Sıralama değiştiğinde (örneğin bir kirişin geç gelmesi nedeniyle), platform bir sonraki hazır noktaya yönlendirilir; boşta bekleme süresi bu esneklikle en aza indirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Platform kaynak işleri sırasında yanma riski taşıyor mu?",
                cevap:
                    "Kaynak kıvılcımı platformun hidrolik hortumları ve lastikleri için risk taşıyabilir; bu yüzden bu hatlar kıvılcım alanının dışına alınır ve sepet tabanına gerekirse yanmaz örtü serilir. Kaynak süresince platform sabit tutulur ve iş bitince kıvılcımın tamamen söndüğü kontrol edildikten sonra hareket ettirilir. Bu önlemler işin başında kaynak ekibiyle birlikte netleştirilir.",
            },
            {
                soru: "Ağır kirişler platform tarafından mı taşınıyor?",
                cevap:
                    "Hayır, ağır kirişler ayrı bir mobil veya sabit vinç tarafından taşınır; platform bu taşıma sırasında vincin çalışma alanının dışında bekler. Kiriş yerine indirildikten sonra platform devreye girer ve bağlantı-kaynak işlemi için konumlanır. Bu ayrım, iki ekipmanın aynı alanda aynı anda çalışarak çarpışma riski yaratmasını önler.",
            },
            {
                soru: "Montaj sahasının zemini henüz düzenlenmemişse platform güvenle çalışabilir mi?",
                cevap:
                    "Zeminin taşıma gücü her iş öncesi kontrol edilir; dolgu veya kazı artığı bir yüzeyde yeterli sağlamlık yoksa geçici çelik plaka veya dolgu ile zemin güçlendirilir. Bu kontrol yapılmadan platform o noktada konumlandırılmaz. Montajın hangi aşamasında olduğunuzu ve zeminin durumunu paylaşırsanız gerekli hazırlığı önceden planlarız.",
            },
            {
                soru: "Montaj işi kaç gün sürer, platform bütün süre boyunca sahada mı kalır?",
                cevap:
                    "Süre, konstrüksiyonun büyüklüğüne ve montaj ekibinin hızına bağlıdır; bu yüzden kesin bir gün sayısı vermeden önce montaj planını değerlendiririz. Platform, montaj tamamlanana veya belirlenen kiralama süresi dolana kadar sahada kalabilir; ihtiyaç uzarsa güvenli park koşulu sağlanarak süre uzatılabilir.",
            },
            {
                soru: "Son kontrol aşamasında platform hangi işi yapıyor?",
                cevap:
                    "Montaj tamamlandıktan sonra bağlantı noktalarının sıkılığı ve kaynak kalitesi genellikle bir kontrol ekibi tarafından doğrulanır; platform bu ekibin her bağlantı noktasına erişmesini sağlar. Bu aşamada kaynak yapılmadığı için yangın önlemi gerekmez, fakat platformun hat boyunca hareketi yine kontrol listesine göre planlı yapılır.",
            },
            {
                soru: "Operatörlü mü çalışıyorsunuz, yoksa montaj ekibi kendi mi kullanıyor?",
                cevap:
                    "Çelik konstrüksiyon montajı gibi teknik koordinasyon gerektiren işlerde operatörlü kiralamayı öneririz; operatör, montaj ekibinin sıralamasına göre platformu doğru noktaya taşır ve kaynak güvenliği önlemlerini takip eder. Montaj ekibinizde belgeli ve deneyimli personel varsa operatörsüz kiralama da mümkündür; bu durumda güvenlik adımları teslim sırasında birlikte gözden geçirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocaklarında kırıcı-eleme ünitesi ve konveyör hattı gibi çelik konstrüksiyon altyapısının bulunması ve bu altyapının zamanla genişletildiği/yenilendiği sektörün genel işleyişine dair kamuya açık bilgidir; montaj sıralaması, kaynak güvenliği ve vinç koordinasyonu firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Bilecik'te Ocak Yan Tesisi Silo ve Depolama Yapılarına Platform Kiralama",
        giris:
            "Ocak ve işleme fabrikası sahalarının çoğunda, ana üretim hattının yanında ikinci bir yapı grubu daha bulunur: kırma-eleme sonrası ortaya çıkan ince malzemenin veya toz filtre atığının biriktirildiği silolar, ham blok ve agrega için kullanılan kapalı depolama hangarları. Bu yapılar tarımsal bir silo kadar büyük olmasa da benzer bir bakım profili taşır — dış cephe, çatı, dolum ağzı ve varsa filtre ünitesi düzenli kontrol ister. Bilecik'in kırsal kesiminde ocak sahalarına yakın konumlanmış tarım ve hayvancılık işletmelerinin kendi silo ve depolama yapıları da benzer bir erişim ihtiyacı doğurur; bu iki yapı grubu — ocak yan tesisi silosu ile kırsal tarım silosu — aynı platform sınıfıyla hizmet alabilir çünkü ikisinin de dış cephe erişimi, zemin koşulu ve mevsimsel bakım takvimi benzer özellikler taşır. Bu sayfa, bu iki yapı grubundaki silo ve depolama bakımının nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Toz filtre silosunun dış cephe ve baca bakımı",
                metin:
                    "Kırma-eleme ünitesinden çıkan ince tozu tutan filtre silosu, düzenli olarak dış cephe ve baca kontrolü ister; filtre kapasitesi düştüğünde bacadan görünür toz sızıntısı oluşabilir ve bu erken tespit edilmelidir. Silonun dış yüzeyine erişim genellikle düz bir makaslı platformla sağlanır; siloya bitişik ekipman varsa dar bir yaklaşım gerekebilir ve bu durumda kompakt gövdeli model tercih edilir.",
            },
            {
                baslik: "Agrega deposu çatı ve dolum ağzı kontrolü",
                metin:
                    "Ham blok artığından üretilen agreganın depolandığı kapalı hangarın çatısı ve dolum ağzı, düzenli aralıklarla kontrol edilir; dolum sırasında oluşan aşırı toz birikimi çatı contalarını ve aydınlatma armatürlerini etkileyebilir. Bu kontrol için platform, hangarın iç kısmına değil genellikle dış cephesine ve çatı saçağına konumlandırılır; hangarın kendi malzeme trafiğiyle çakışmayan bir saat seçilir.",
            },
            {
                baslik: "Kırsal tarım silosunda mevsimsel bakım penceresi",
                metin:
                    "Ocak sahalarına yakın kırsal kesimdeki tarım işletmelerinin kendi silo yapıları, hasat öncesi ve sonrası dönemde yoğun bakım talebi doğurur; bu dönemde silo dolumu-boşaltımı devam ederken dış cephe, merdiven ve aydınlatma bakımı planlanır. Hasat sezonunun ortasında silo genellikle dolu ve aktif olduğu için bu dönemde bakım tercih edilmez; sezon öncesi veya sonrası pencere daha uygundur.",
            },
            {
                baslik: "Kırsal ve yarı sanayi zeminlerde ortak gövde tercihi",
                metin:
                    "Hem ocak yan tesisi silosunun çevresi hem kırsal tarım silosunun avlusu, genellikle toprak veya stabilize bir zemindir; bu zeminde geniş tabanlı, dört tekerlekten çekişli makaslı veya eklemli platform tercih edilir. Yağış sonrası zemin yumuşuyorsa çalışma ertelenir veya zemin güçlendirilir; bu değerlendirme her iki yapı tipinde de aynı kriterle yapılır.",
            },
            {
                baslik: "İki yapı grubunu tek sevkiyatta birleştirmek",
                metin:
                    "Bir ocak yan tesisindeki silo bakımı ile yakın çevredeki bir kırsal tarım silosunun bakımı, aynı bölgede ve benzer makine sınıfıyla yapıldığı için tek bir sevkiyat programında birleştirilebilir. Bu birleşim, her iki işletmenin ayrı ayrı sevkiyat düzenlemesine göre hem daha hızlı hem daha ekonomiktir; tarihlerin önceden bildirilmesi bu planlamanın tek şartıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo ve depolama yapıları karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, ocak yan tesisi silosu ile kırsal tarım silosunun bakım ihtiyacını karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Ocak yan tesisi silosu", "Kırsal tarım silosu", "Ortak sonuç"],
                    satirlar: [
                        ["Ana risk", "Toz sızıntısı, filtre", "Nem, mekanik aksam", "Dış cephe erişimi şart"],
                        ["Bakım penceresi", "Üretim durduğunda", "Hasat sezonu dışı", "Mevsime/vardiyaya bağlı"],
                        ["Zemin", "Stabilize/toprak", "Toprak/avlu", "Dört teker çekişli tercih"],
                        ["Erişim noktası", "Baca, dış cephe", "Merdiven, dış cephe", "Makaslı platform yeterli"],
                        ["Sevkiyat", "Ocak programına bağlı", "Tarım takvimine bağlı", "Bölgede birleştirilebilir"],
                    ],
                },
            },
            {
                baslik: "Toz ve nem kaynaklı bakımın erken tespiti",
                paragraflar: [
                    "Filtre silosundaki toz sızıntısı ile tarım silosundaki nem birikintisi farklı nedenlerden kaynaklansa da ikisi de erken tespit edilmezse yapının ömrünü kısaltır. Düzenli dış cephe kontrolü, bu iki sorunun büyümeden fark edilmesini sağlar; platform bu kontrolü hızlı ve güvenli bir şekilde yapmanın aracıdır.",
                    "Kontrol sırasında fark edilen bir sorun (çatlak conta, paslanmış baca bandı, nemli duvar bölgesi) fotoğraflanır ve işletme sorumlusuna raporlanır; onarım kararı işletmeye aittir, platform yalnızca erişimi sağlar.",
                ],
            },
            {
                baslik: "Hasat ve üretim takvimiyle uyumlu planlama",
                paragraflar: [
                    "Kırsal tarım silosunun bakımı hasat sezonunun ortasına denk gelirse, hem silo doluluğu hem işletmenin yoğunluğu bakımı zorlaştırır. Bu yüzden bakım talebi genellikle hasat öncesi veya hemen sonrasına planlanır. Ocak yan tesisi silosunda ise bakım penceresi üretimin durduğu vardiya dilimine bağlıdır.",
                    "İki yapı grubunun takvimi farklı olduğu için, bölgesel bir sevkiyat planlarken her iki tarafın kendi uygun penceresi ayrı ayrı sorulur; birleştirme yalnızca bu pencereler örtüştüğünde yapılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Toz filtre silosunun bacasına erişim için hangi makine yeterli?",
                cevap:
                    "Çoğu durumda standart bir makaslı platform yeterlidir; silonun yüksekliği ve bacaya olan yatay mesafe belirleyicidir. Siloya bitişik başka bir ekipman varsa dar bir yaklaşım gerekebilir, bu durumda kompakt gövdeli model tercih edilir. Silonun yüksekliğini ve çevresindeki manevra alanını paylaşırsanız doğru sınıfı önceden söyleyebiliriz.",
            },
            {
                soru: "Agrega hangarının çatı bakımı için üretim durdurulması gerekiyor mu?",
                cevap:
                    "Genellikle tam durdurma gerekmez; platform hangarın dış cephesine ve çatı saçağına konumlandığı için hangarın kendi malzeme trafiğiyle çakışmayan bir saat seçilir. Dolum işlemi doğrudan çalışma noktasının üzerinde devam ediyorsa o bölüm için kısa bir bekleme istenebilir; bu koordinasyon işin başında hangar sorumlusuyla netleştirilir.",
            },
            {
                soru: "Tarım silomuzun bakımını hangi dönemde planlamalıyız?",
                cevap:
                    "Hasat sezonunun ortasında silo genellikle dolu ve aktif olduğu için bu dönemde bakım tercih edilmez; sezon öncesi veya hemen sonrası daha uygun bir penceredir. Bu dönemde hem silo boş hem işletme daha az yoğundur. Tarihinizi erken bildirirseniz programa öncelikli olarak yazarız.",
            },
            {
                soru: "Ocak yan tesisi silosu ile yakınımızdaki tarım silosunu aynı sevkiyata alabilir miyiz?",
                cevap:
                    "Bölgede yakın konumlanmışlarsa ve makine sınıfı benzer bir işe uyuyorsa evet. Her iki tarafın uygun bakım penceresini önceden alır, tarihleri örtüştüğünde tek bir sevkiyat programında birleştiririz. Sözleşmeler ayrı kalır; paylaşılan tek kalem nakliyedir ve bu kalem iki iş arasında bölünür.",
            },
            {
                soru: "Yağmurdan sonra silo çevresindeki toprak zeminde çalışılabilir mi?",
                cevap:
                    "Yağış sonrası toprak zemin yumuşayabilir; bu durumda çalışma ya ertelenir ya da zemin güçlendirilir. Dört tekerlekten çekişli, geniş tabanlı bir platform bu zeminde daha stabil çalışır ama aşırı yumuşak bir zeminde bu bile yeterli olmayabilir. Son yağıştan bu yana geçen süreyi ve zeminin görünümünü paylaşırsanız çalışmaya uygun olup olmadığını önceden değerlendirebiliriz.",
            },
            {
                soru: "Filtre veya conta arızası fark edilirse ne yapıyorsunuz?",
                cevap:
                    "Platform yalnızca erişimi sağlar; fark edilen bir arıza (çatlak conta, paslanmış baca bandı) fotoğraflanır ve işletme sorumlusuna anında bildirilir. Onarım kararı ve uygulaması işletmeye veya onun yetkilendirdiği bir ekibe aittir. İsterseniz aynı ziyarette onarım ekibinin erişimini de platformla destekleyebiliriz; bu durumu önceden bildirmeniz yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocaklarında toz filtre silosu ve agrega depolama hangarı gibi yan tesislerin bulunması ile ilin kırsal kesiminde tarım/hayvancılık işletmelerinin kendi silo yapılarına sahip olması kamuya açık genel bilgidir; bakım penceresi planlaması ve gövde seçimi firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Bilecik'te Ocak Sahası Enerji ve Aydınlatma Bakım Platformu",
        giris:
            "Ocak sahasında gece vardiyası çalışıyorsa, saha aydınlatması yalnızca konfor değil doğrudan bir güvenlik unsurudur — kırıcı ünitesi, konveyör hattı ve blok/plaka depolama alanı yeterince aydınlatılmadan gece çalışması güvenle sürdürülemez. Bu direkler ve armatürler genellikle sabit bir noktada değil, sahanın farklı köşelerine dağılmış hâlde bulunur ve her biri farklı bir zemin koşulunda durur — bazısı düz bir beton platform üzerinde, bazısı taşlık ve düzensiz bir yamaç kenarında. İşleme fabrikasının kendi elektrik altyapısı ise daha sabit bir düzendedir; pano, trafo çevresi ve dahili aydınlatma hatları genellikle bina içinde veya hemen dışında bulunur. Bilecik'teki ocak ve fabrika sahalarında enerji-aydınlatma bakımı bu iki farklı ortamı da kapsar; direk bakımında zemin ve erişim, pano/trafo bakımında ise elektrik kesme prosedürü belirleyicidir. Bu sayfa, iki ortamın bakım ihtiyacını ve platform seçiminin nasıl yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Saha sınırındaki aydınlatma direklerinin dağınık konumu",
                metin:
                    "Ocak sahasının farklı köşelerine yerleştirilmiş aydınlatma direkleri, birbirine yakın değildir ve her biri farklı bir zemin koşulunda durur. Bir direk düz bir beton platform üzerindeyken, komşusu taşlık ve eğimli bir yamaç kenarında olabilir. Bu yüzden direk bakımı planlanırken her direğin kendi zemin durumu ayrı ayrı değerlendirilir; tek bir gövde tipi bütün direkler için uygun olmayabilir.",
            },
            {
                baslik: "Gece vardiyası öncesi armatür kontrolü",
                metin:
                    "Gece çalışan ocaklarda armatür arızası, o gecenin güvenli çalışmasını doğrudan etkiler. Bu yüzden armatür bakımı genellikle gündüz vardiyasında, gece vardiyası başlamadan önce tamamlanır. Arızalı armatür sayısı birden fazlaysa, en kritik aydınlatma noktaları (kırıcı çevresi, ana geçiş yolu) önceliklendirilir ve platform bu sıraya göre yönlendirilir.",
            },
            {
                baslik: "Pano ve trafo çevresinde elektrik kesme prosedürü",
                metin:
                    "İşleme fabrikasının elektrik panosu veya trafo çevresinde çalışacak bir platform işi, önce ilgili hattın kesilmesini ve kilitlenmesini gerektirir. Bu adım fabrikanın kendi elektrik ekibi tarafından yapılır; platform yalnızca bu kesme işlemi onaylandıktan sonra çalışma alanına yaklaşır. Kesme onayı olmadan pano çevresine yaklaşılmaz, bu kural istisnasızdır.",
            },
            {
                baslik: "Konveyör hattı boyunca aydınlatma ve kablo tavası bakımı",
                metin:
                    "Konveyör hattı boyunca döşenmiş aydınlatma ve güç kabloları, genellikle bir kablo tavası içinde taşınır ve bu tavanın periyodik kontrolü, tozdan veya titreşimden kaynaklanan hasarı erken tespit etmeyi sağlar. Platform, hat boyunca ilerleyerek her erişim noktasında durur; kablo tavasının kapağı açılmadan önce ilgili devrenin durumu elektrik ekibiyle teyit edilir.",
            },
            {
                baslik: "Kış aylarında direk bakımının zemin koşuluna göre ertelenmesi",
                metin:
                    "Kış aylarında ocak sahasındaki toprak veya taşlık zemin donabilir ya da yağış sonrası çamurlaşabilir; bu koşulda direk çevresine platform yaklaştırmak risklidir. Böyle durumlarda bakım, zeminin güvenli hâle geldiği bir güne ertelenir; acil bir arıza varsa geçici aydınlatma çözümü değerlendirilir ve kalıcı onarım uygun zemin koşulunda yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha ve fabrika enerji-aydınlatma bakımı karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, ocak sahası ile fabrika içindeki enerji-aydınlatma bakım işlerinin farkını özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Ocak sahası direği", "Fabrika pano/trafo", "Sonuç"],
                    satirlar: [
                        ["Konum düzeni", "Dağınık, farklı zemin", "Sabit, bina içi/dışı", "Farklı gövde ihtiyacı"],
                        ["Ana risk", "Zemin sağlamlığı", "Elektrik kesme prosedürü", "Farklı hazırlık"],
                        ["Bakım zamanı", "Gündüz, vardiya öncesi", "Planlı kesinti penceresi", "İkisi de önceden planlı"],
                        ["Gövde tercihi", "Paletli/dört teker", "Standart makaslı", "Zemine göre değişir"],
                        ["Onay gereksinimi", "Zemin kontrolü", "Elektrik ekibi onayı", "İkisinde de ön koşul var"],
                    ],
                },
            },
            {
                baslik: "Direk bakımında zemin kontrolünün önceliği",
                paragraflar: [
                    "Ocak sahasındaki her direğin çevresi farklı olduğu için, bakım talebi geldiğinde önce hangi direklerin bakıma alınacağı ve her birinin zemin durumu sorulur. Bu bilgi olmadan hangi gövde tipinin gönderileceğine karar verilmez; taşlık ve eğimli bir zeminde standart lastikli gövde yerine paletli veya dört tekerlekten çekişli model tercih edilir.",
                    "Birden fazla direk aynı ziyarette bakıma alınacaksa, zemin koşulu en zorlu olan direk esas alınarak gövde seçilir; böylece tek bir makine bütün direkleri kapsayabilir.",
                ],
            },
            {
                baslik: "Elektrik kesme onayı olmadan çalışma başlamaz",
                paragraflar: [
                    "Pano veya trafo çevresinde çalışacak platform işi, fabrikanın elektrik ekibi tarafından ilgili hattın kesilip kilitlendiği yazılı veya sözlü olarak teyit edilmeden başlamaz. Bu kural, platform operatörünün ve sahadaki diğer personelin güvenliği için istisnasızdır.",
                    "Kesme işlemi tamamlandıktan sonra platform çalışma alanına yaklaşır ve iş bitiminde kilidin kaldırılması yine elektrik ekibi tarafından yapılır. Bu sıralama her seferinde aynı şekilde uygulanır, aciliyet gerekçesiyle atlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak sahasındaki dağınık konumlu direkleri tek ziyarette bakıma alabilir misiniz?",
                cevap:
                    "Evet, direklerin listesini ve mümkünse her birinin zemin durumunu paylaşırsanız hepsini tek bir ziyarette planlarız. Zemin koşulu en zorlu olan direk esas alınarak gövde seçilir; böylece tek makine bütün direkleri kapsayabilir. Bazı direkler çok farklı zemin koşullarındaysa, gerekirse iki farklı gövde ile ayrı günlerde de planlanabilir.",
            },
            {
                soru: "Pano veya trafo çevresinde çalışmadan önce ne bekliyorsunuz?",
                cevap:
                    "İlgili elektrik hattının fabrikanızın elektrik ekibi tarafından kesilip kilitlendiğinin teyidini bekleriz; bu onay olmadan çalışma alanına yaklaşmayız. Bu kural istisnasızdır ve hem platform operatörünün hem sahadaki diğer personelin güvenliği içindir. Kesme prosedürünüzün ne kadar süreceğini önceden bildirirseniz, platformun varış saatini buna göre planlarız.",
            },
            {
                soru: "Gece vardiyası sırasında acil bir aydınlatma arızası olursa ne yapıyorsunuz?",
                cevap:
                    "Acil arızada müsait makine ve operatör değerlendirilir; ancak gece vardiyasında zemin görüşü zorlaştığı için mümkünse geçici bir aydınlatma çözümüyle idare edilip kalıcı onarım gündüz saatlerine planlanır. Zemin koşulu gece net görülemiyorsa, riskli bir zeminde gece çalışması yapılmaz; bu, güvenlik gerekçesiyle uyguladığımız bir kuraldır.",
            },
            {
                soru: "Kış aylarında donmuş zeminde direk bakımı yapılabilir mi?",
                cevap:
                    "Donmuş veya çamurlaşmış zeminde platform yaklaştırmak risklidir; bu koşulda bakım, zeminin güvenli hâle geldiği bir güne ertelenir. Acil bir arıza varsa geçici aydınlatma çözümü değerlendirilir ve kalıcı onarım uygun zemin koşulunda yapılır. Zeminin o günkü durumunu paylaşırsanız çalışmaya uygun olup olmadığını önceden değerlendirebiliriz.",
            },
            {
                soru: "Konveyör hattı boyunca kablo tavası kontrolü ne sıklıkla yapılmalı?",
                cevap:
                    "Sıklık, hattın toz ve titreşim maruziyetine göre değişir; bu kararı işletmenizin bakım programı belirler, biz erişimi sağlarız. Kontrol sırasında kablo tavasının kapağı açılmadan önce ilgili devrenin durumu elektrik ekibinizle teyit edilir. Düzenli bir kontrol takvimi kurmak isterseniz, platform ziyaretlerini bu takvime göre planlayabiliriz.",
            },
            {
                soru: "Operatörlü mü, operatörsüz mü kiralama öneriyorsunuz?",
                cevap:
                    "Elektrik hattı yakınında çalışılan işlerde, kesme prosedürüne ve zemin koşuluna hakim bir operatörle çalışmayı öneririz. Belgeli ve deneyimli elektrik personeliniz varsa operatörsüz kiralama da mümkündür; bu durumda kesme prosedürü ve zemin kontrolü teslim sırasında birlikte gözden geçirilir ve sorumluluk sınırları netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocaklarında gece vardiyası aydınlatması ve işleme fabrikalarının elektrik altyapısına sahip olması sektörün genel işleyişine dair kamuya açık bilgidir; zemin kontrolü, elektrik kesme prosedürü ve bakım önceliklendirmesi firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Bilecik'te Ocak ve Fabrika İçin Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Ocak sahasının toz, titreşim ve yoğun trafik gerçeği ile işleme fabrikasının ıslak-kuru bölüm ayrımı, operatörlü kiralamayı diğer sektörlere göre daha sık öne çıkan bir tercih hâline getirir. Standart bir depo veya inşaat sahasında operatörsüz kiralama sık tercih edilirken, ocak sahasında zemin her hafta değişebilir, kırıcı ve konveyör trafiği süreklidir ve rüzgar-eğim sınırları anlık değerlendirme gerektirir — bu koşullar, sahaya yeni gelen bir kullanıcı için deneyimli bir operatörün değerlendirmesini daha değerli kılar. Buna karşılık, aynı sahada sürekli çalışan ve fabrikanın kendi bakım ekibine ait belgeli personeli olan işletmeler için operatörsüz kiralama da mümkündür ve daha esnek bir çalışma programı sunar. Bilecik'teki ocak ve fabrika müşterilerimizin büyük bölümü ilk kullanımda operatörlü başlar, saha koşullarına aşina olduktan sonra operatörsüz seçeneğe geçer. Bu sayfa, iki seçenek arasındaki farkı ve hangi durumda hangisinin önerildiğini anlatır.",
        maddeler: [
            {
                baslik: "İlk kullanımda operatörlü tercih edilme nedeni",
                metin:
                    "Ocak sahasına ilk kez platform kiralayan bir işletme için, sahanın zemin değişkenliği, trafik düzeni ve toz-titreşim koşulları genellikle bilinmez. Deneyimli bir operatör, bu koşulları anlık değerlendirip güvenli bir çalışma planı kurar; örneğin eğimli bir zeminde ayak açısını doğru ayarlar veya rüzgarlı bir günde boom uzanma mesafesini kısaltır. Bu değerlendirme, sahaya yeni gelen bir kullanıcının kısa sürede öğrenebileceği bir bilgi değildir.",
            },
            {
                baslik: "Belgeli personelle operatörsüz kiralama koşulları",
                metin:
                    "İşletmenizin kendi bakım ekibinde geçerli operatör belgesine sahip personel varsa, operatörsüz kiralama mümkündür. Bu seçenekte makine teslim edilir, zemin ve güvenlik kuralları teslim sırasında birlikte gözden geçirilir ve personeliniz kendi programına göre kullanır. Operatörsüz kiralamada sorumluluk, makinenin güvenli kullanımı açısından kullanıcı işletmeye geçer; bu ayrım teslim tutanağında açıkça yazılır.",
            },
            {
                baslik: "Vardiya programına göre esneklik farkı",
                metin:
                    "Operatörlü kiralamada makine, bizim operatörümüzün vardiya programına bağlıdır; gece vardiyası veya hafta sonu çalışması önceden planlanmalıdır. Operatörsüz kiralamada ise makine sahada kaldığı sürece işletmenin kendi programına göre, gün içinde istediği saatte kullanılabilir. Sürekli ve düzensiz saatlerde çalışan fabrika bakım ekipleri için bu esneklik önemli bir avantajdır.",
            },
            {
                baslik: "Karma model: kritik işte operatörlü, rutin işte operatörsüz",
                metin:
                    "Bazı işletmeler iki modeli birlikte kullanır — kırıcı ünitesi üst yapısı gibi yüksek riskli işlerde operatörlü, rutin aydınlatma veya cephe kontrolü gibi düşük riskli işlerde operatörsüz kiralama tercih eder. Bu karma model, güvenlik gerektiren işlerde deneyimden faydalanırken rutin işlerde maliyeti ve programı esnekleştirir. Hangi işlerin hangi kategoriye gireceği, işletmeyle birlikte önceden değerlendirilir.",
            },
            {
                baslik: "Operatör değişikliği ve sürekli iletişim",
                metin:
                    "Uzun süreli operatörlü kiralamalarda, aynı operatörün sahaya aşinalığı iş verimini artırır; bu yüzden mümkün olduğunca aynı operatör atanır. Operatör değişikliği gerekiyorsa (izin, hastalık gibi nedenlerle), yeni operatöre sahanın özel koşulları önceden aktarılır ve ilk gün işletme sorumlusuyla birlikte saha turu yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, ocak ve fabrika sahasında iki kiralama modelinin farkını özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Operatörlü", "Operatörsüz", "Kimin için uygun"],
                    satirlar: [
                        ["Saha bilgisi gerekliliği", "Operatör sağlar", "Kullanıcıda olmalı", "İlk kullanımda operatörlü"],
                        ["Program esnekliği", "Operatör vardiyasına bağlı", "İşletme programına bağlı", "Sürekli kullanımda operatörsüz"],
                        ["Belge şartı", "Gerekmez", "Geçerli operatör belgesi şart", "Belgeli ekip → operatörsüz"],
                        ["Riskli iş (kırıcı üst yapı vb.)", "Önerilir", "Deneyimli belgeli personelle mümkün", "Risk değerlendirmesi önce yapılır"],
                        ["Maliyet yapısı", "Operatör ücreti dahil", "Yalnızca makine bedeli", "Uzun süreli işte operatörsüz avantajlı"],
                    ],
                },
            },
            {
                baslik: "Operatörsüz kiralamada sorumluluk sınırı",
                paragraflar: [
                    "Operatörsüz kiralamada makinenin güvenli kullanımı, teslim tutanağında belirtilen kurallar çerçevesinde kullanıcı işletmeye geçer. Bu, makinenin bakımından bizim sorumlu olmadığımız anlamına gelmez; teknik arıza durumunda destek sağlanır. Ancak zemin seçimi, rüzgar/eğim sınırına uyum ve günlük kontrol gibi operasyonel kararlar kullanıcı personelin sorumluluğundadır.",
                    "Bu sınırın net olması için, teslim sırasında hem makinenin teknik özellikleri hem sahaya özgü riskler (zemin değişkenliği, toz, titreşim) yazılı olarak paylaşılır ve kullanıcı personel bu bilgiyi imzalı olarak teslim alır.",
                ],
            },
            {
                baslik: "Hangi model sizin işletmeniz için uygun",
                paragraflar: [
                    "Ocak sahasına ilk kez makine kiralıyorsanız veya sahanız düzensiz zemin, yoğun trafik gibi değişken koşullar taşıyorsa operatörlü kiralamayla başlamanızı öneririz. Sahaya aşina olduktan ve belgeli personel yetiştirdikten sonra operatörsüz seçeneğe geçmek, hem maliyeti düşürür hem programı esnekleştirir.",
                    "Karar kesin değildir; aynı işletme farklı işler için farklı modeli seçebilir. İhtiyacınızı ve ekibinizin deneyim düzeyini paylaşırsanız size uygun modeli birlikte belirleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İlk kez ocak sahasına makine kiralıyoruz, hangi modeli önerirsiniz?",
                cevap:
                    "İlk kullanımda operatörlü kiralamayı öneririz çünkü sahanın zemin değişkenliği, trafik düzeni ve toz-titreşim koşulları genellikle bilinmez. Deneyimli operatörümüz bu koşulları anlık değerlendirerek güvenli bir çalışma planı kurar. Sahaya aşina olduktan ve belgeli personel yetiştirdikten sonra operatörsüz seçeneğe geçebilirsiniz; bu geçiş herhangi bir zamanda değerlendirilebilir.",
            },
            {
                soru: "Operatörsüz kiralama için hangi belge gerekiyor?",
                cevap:
                    "Kullanacak personelin, kullanılacak platform sınıfına uygun geçerli bir operatör belgesine sahip olması gerekir. Belge kontrolü teslim öncesi yapılır; belge yoksa operatörsüz kiralama yapılamaz ve operatörlü seçenek sunulur. Belgeli personel sayınız birden fazlaysa, vardiya değişimlerinde hangi personelin makineyi kullanacağını önceden bildirmeniz süreci hızlandırır.",
            },
            {
                soru: "Operatörsüz kiralamada bir kaza olursa sorumluluk kimde?",
                cevap:
                    "Operatörsüz kiralamada makinenin güvenli kullanımı, teslim tutanağında belirtilen kurallar çerçevesinde kullanıcı işletmeye geçer; bu sınır teslim sırasında yazılı olarak netleştirilir. Makinenin kendi teknik arızasından kaynaklanan bir sorun bizim sorumluluğumuzdadır; kullanım hatasından kaynaklanan bir durum kullanıcı personelin sorumluluğundadır. Bu ayrım, teslim tutanağında açıkça belirtilir.",
            },
            {
                soru: "Kırıcı ünitesi gibi riskli işlerde operatörsüz kiralama hiç mümkün değil mi?",
                cevap:
                    "Mümkündür, ancak bu tür işlerde belgeli ve bu spesifik iş tipinde deneyimli personel şartı ararız. Deneyim düzeyi belirsizse önce operatörlü bir denemeyle başlamanızı öneririz; bu, hem güvenliği sağlar hem personelinizin sahaya aşina olmasına yardımcı olur. Karar, işin risk düzeyi ve personelinizin deneyimine göre birlikte değerlendirilir.",
            },
            {
                soru: "Aynı kiralama içinde bazı işlerde operatörlü, bazılarında operatörsüz olabilir mi?",
                cevap:
                    "Evet, bu karma model mümkündür ve bazı işletmeler tarafından tercih edilir. Yüksek riskli işlerde (örneğin kırıcı üst yapısı) operatörlü, rutin işlerde (aydınlatma kontrolü, cephe bakımı) operatörsüz kiralama seçilebilir. Hangi işlerin hangi kategoriye gireceğini işin başında birlikte değerlendirir ve programı buna göre kurarız.",
            },
            {
                soru: "Operatör değişirse saha bilgisi kaybolur mu?",
                cevap:
                    "Mümkün olduğunca aynı operatörü atamaya çalışırız çünkü sahaya aşinalık verimi artırır. Operatör değişmesi gerekiyorsa, yeni operatöre sahanın özel koşulları (zemin, trafik, riskli noktalar) önceden aktarılır ve ilk gün işletme sorumlusuyla birlikte kısa bir saha turu yapılır; bu, bilgi kaybını en aza indirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocaklarında zemin değişkenliği, toz-titreşim ve saha trafiği gibi koşulların bulunması sektörün genel işleyişine dair kamuya açık bilgidir; operatörlü/operatörsüz model seçimi ve sorumluluk sınırı firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Bilecik'te Ocak-Fabrika-Depo Arası Çok Noktalı Rota Bakım Platformu",
        giris:
            "Bilecik'in traverten/mermer üretim zinciri genellikle üç ayrı noktadan oluşur: hammaddenin çıkarıldığı ocak sahası, blokların plakaya dönüştürüldüğü işleme fabrikası ve bitmiş ürünün sevkiyat öncesi bekletildiği depo alanı. Bu üç nokta aynı işletmeye ait olsa bile genellikle birbirinden birkaç kilometre uzakta, farklı arazi koşullarında bulunur; ocak sahası taşlık ve eğimli, fabrika sahası düz asfalt, depo alanı ise ikisi arasında bir zemin özelliği taşıyabilir. Bir işletmenin aynı hafta içinde üç noktada da bakım ihtiyacı varsa, bunları ayrı ayrı sevkiyatlar hâlinde değil tek bir rota içinde birleştirmek hem zaman hem maliyet açısından avantajlıdır. Rotanın işlemesi için her noktanın kendi zemin koşulu, erişim kısıtı ve iş süresi önceden bilinmelidir; bir noktada beklenmedik bir gecikme, sonraki noktaların programını doğrudan etkiler. Bu sayfa, ocak-fabrika-depo üçlüsünde çok noktalı rota planlamasının nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Üç noktanın farklı zemin ve erişim profili",
                metin:
                    "Ocak sahası taşlık ve eğimli, fabrika sahası düz beton veya asfalt, depo alanı ise açık stabilize bir zemin olabilir. Rota planlanırken her nokta için ayrı bir gövde değerlendirmesi yapılır; aynı makinenin üçünde de çalışabilmesi için genellikle dört tekerlekten çekişli veya paletli, çok amaçlı bir gövde tercih edilir. Tek bir noktanın zemin özelliği diğerlerinden çok farklıysa, o nokta için ayrı bir makine planlanabilir.",
            },
            {
                baslik: "İş süresi tahmininin rota sırasına etkisi",
                metin:
                    "Ocak sahasındaki bir kırıcı üst yapısı bakımı genellikle fabrikadaki bir aydınlatma kontrolünden daha uzun sürer. Rota kurulurken en uzun süren iş güne göre konumlandırılır ve daha kısa işler günün kalan dilimine yerleştirilir. Bu sıralama, bir noktada beklenmedik bir gecikme yaşandığında sonraki noktaların ne kadar etkileneceğini de önceden görünür kılar.",
            },
            {
                baslik: "Vardiya ve trafik penceresinin üç noktada farklı olması",
                metin:
                    "Ocak sahasının malzeme sevkiyat trafiği, fabrikanın blok-plaka trafiği ve deponun yükleme-boşaltma trafiği farklı saatlerde yoğunlaşır. Rota planlanırken her noktanın kendi düşük trafik penceresi belirlenir ve makinenin o noktaya varış saati bu pencereye göre ayarlanır. Üç noktanın pencereleri örtüşmüyorsa, rota günün farklı saatlerine yayılarak kurulur.",
            },
            {
                baslik: "Bir noktada gecikme olursa rota nasıl yeniden kurulur",
                metin:
                    "Ocak sahasındaki bir iş beklenenden uzun sürerse, fabrika ve depo noktalarındaki işler günün kalan dilimine göre yeniden sıralanır; en az kritik olan iş, gerekirse ayrı bir güne ertelenir. Bu esneklik, rotanın en başından itibaren hangi işin ertelenebilir olduğunun belirlenmesiyle mümkün olur. Ertelenen iş için yeni tarih, o gün içinde veya en kısa sürede bildirilir.",
            },
            {
                baslik: "Tek sözleşme mi, ayrı sözleşmeler mi",
                metin:
                    "Üç nokta aynı işletmeye aitse, rota tek bir sevkiyat programı altında birleştirilir fakat her nokta kendi teklifini ve teslim tutanağını alır. Bu ayrım, her noktadaki işin bağımsız olarak belgelenmesini sağlar; paylaşılan tek kalem nakliye maliyetidir ve bu, üç nokta arasında bölünür. Farklı işletmelere ait noktalar aynı rotaya alınacaksa, bu ayrım daha da önem kazanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak-fabrika-depo rota kartı",
                paragraflar: [
                    "Aşağıdaki tablo, üç noktalı rotanın nasıl kurulduğunu adım adım özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Bilgi", "Kontrol", "Sonuç"],
                    satirlar: [
                        ["İş listesi", "Üç noktadaki bakım kalemleri", "Süre tahmini", "Rota sırası taslağı"],
                        ["Zemin/erişim", "Her noktanın koşulu", "Gövde uygunluğu", "Makine sınıfı seçimi"],
                        ["Trafik penceresi", "Her noktanın yoğun saati", "Çakışma kontrolü", "Varış saatleri"],
                        ["Uygulama", "Sıralı ziyaret", "Gecikme takibi", "Gerekirse yeniden sıralama"],
                        ["Kapanış", "Her nokta için teslim tutanağı", "Ayrı sözleşme kaydı", "Rota tamamlandı"],
                    ],
                },
            },
            {
                baslik: "Rota planlamasında en sık yapılan hata",
                paragraflar: [
                    "En sık karşılaşılan hata, üç noktanın iş süresini birbirine çok yakın tahmin etmektir; oysa ocak sahasındaki bir iş fabrikadaki bir işten belirgin şekilde uzun sürebilir. Bu farkı hesaba katmadan kurulan bir rota, ilk noktada uzayan bir işle birlikte tamamen bozulur.",
                    "Bunu önlemek için her nokta için ayrı bir süre tahmini istenir ve rotaya bir miktar esneklik payı eklenir. Bu pay, beklenmedik bir gecikmenin bütün günü değil yalnızca son noktayı etkilemesini sağlar.",
                ],
            },
            {
                baslik: "Rotayı tekrar eden bir programa dönüştürmek",
                paragraflar: [
                    "Üç nokta arasında düzenli bakım ihtiyacı varsa (örneğin aylık bir kontrol turu), rota tek seferlik değil tekrar eden bir program hâline getirilebilir. Bu, her seferinde yeniden planlama yapmak yerine sabit bir günde ve sabit bir sırada çalışmayı mümkün kılar.",
                    "Tekrar eden bir programda bile her ziyaret öncesi zemin ve trafik koşulu kısaca teyit edilir; ocak sahası özellikle mevsime göre değişebildiği için bu teyit atlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üç noktadaki işlerimizi aynı hafta yaptırmak için ne paylaşmamız gerekiyor?",
                cevap:
                    "Her noktadaki iş listesini, tahmini süresini ve varsa tarih kısıtlarını paylaşmanız yeterlidir. Biz bu bilgiyle her noktanın zemin ve trafik koşulunu değerlendirir, en uzun süren işi güne göre konumlandırıp diğerlerini kalan dilime yerleştiririz. Rota kesinleştiğinde her noktanın varış saati ve yerel sorumlusu yazılı bildirilir.",
            },
            {
                soru: "Ocak sahasındaki iş uzarsa fabrikadaki ve depodaki işlerimiz ne olur?",
                cevap:
                    "Gecikme fark edildiğinde rota yeniden sıralanır; en az kritik olan iş gerekirse ayrı bir güne ertelenir, diğerleri günün kalan dilimine göre yeniden konumlandırılır. Bu esneklik, rotanın başında hangi işin ertelenebilir olduğunun belirlenmesiyle mümkündür. Ertelenen iş için yeni tarih en kısa sürede bildirilir.",
            },
            {
                soru: "Üç nokta farklı işletmelere aitse aynı rotaya alınabilir mi?",
                cevap:
                    "Alınabilir, ancak her işletme kendi teklifini ve teslim tutanağını ayrı alır; paylaşılan tek kalem nakliyedir ve bu, noktalar arasında bölünür. Farklı işletmeler arası koordinasyon için tarihlerin önceden ve birlikte netleştirilmesi gerekir; bir işletmenin son dakika değişikliği diğerlerini etkileyebilir.",
            },
            {
                soru: "Aynı makine üç farklı zeminde (taşlık ocak, beton fabrika, stabilize depo) çalışabilir mi?",
                cevap:
                    "Genellikle dört tekerlekten çekişli veya paletli, çok amaçlı bir gövde bu üç zeminde de çalışabilir. Ancak zeminlerden biri diğerlerinden belirgin şekilde farklıysa (örneğin ocak sahası aşırı eğimliyse), o nokta için ayrı bir makine planlanabilir. Her noktanın zemin fotoğrafını paylaşırsanız tek makinenin yeterli olup olmadığını önceden değerlendirebiliriz.",
            },
            {
                soru: "Rotayı düzenli bir aylık programa dönüştürebilir miyiz?",
                cevap:
                    "Evet, düzenli bir ihtiyacınız varsa rotayı tekrar eden bir programa dönüştürebiliriz; bu, her seferinde yeniden planlama yapmak yerine sabit bir günde ve sırada çalışmayı mümkün kılar. Yine de her ziyaret öncesi zemin ve trafik koşulu kısaca teyit edilir çünkü özellikle ocak sahası mevsime göre değişebilir.",
            },
            {
                soru: "Rota sırasında bir noktada operatör değişikliği gerekir mi?",
                cevap:
                    "Genellikle hayır; aynı operatör üç noktayı da takip eder ve her noktanın koşullarına gün içinde adapte olur. Bu, operatörün sahalar arası tutarlılığı görmesini ve rota hakkında bütünsel bir değerlendirme yapmasını sağlar. Uzun bir rota günün sonuna sarkarsa, vardiya sınırları içinde kalınması için ikinci bir operatör devreye alınabilir; bu durum önceden planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilindeki traverten/mermer üretim zincirinin ocak-işleme fabrikası-depo şeklinde ayrı sahalarda kurulu olması sektörün genel işleyişine dair kamuya açık bilgidir; rota sıralaması, süre tahmini ve sözleşme ayrımı firma saha pratiğidir. Tesis adı, mesafe ve rakamsal iddia kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Bilecik'te Ocak Sahasında Zor Zemin ve Arazi Koşullarında Platform Kiralama",
        giris:
            "Bir traverten veya mermer ocağının zemini, standart bir sanayi sahasının düz betonundan tamamen farklıdır: kesim artığı taş parçaları, düzensiz yamaç eğimleri, kazı sonrası oluşan geçici çukurlar ve mevsime göre değişen toz-çamur dengesi bir arada bulunur. Bu zeminde çalışacak bir platformun standart lastikli-dar tabanlı gövdesi yeterli değildir; paletli veya dört tekerlekten çekişli, geniş taban izli gövdeler ocak sahasının doğal koşuluna uygun tek seçenektir. Zemin ayrıca sabit de değildir — bir ay önce düz olan bir nokta, yeni bir kazı veya malzeme yığınıyla tamamen değişmiş olabilir; bu yüzden her iş öncesi zemin, önceki ziyaretteki bilgiye güvenilmeden yeniden değerlendirilir. Bilecik'teki ocak sahalarında zor zemin koşulu, sadece açık ocak yüzeyini değil, kazı artığının döküldüğü pasa sahasını ve henüz düzenlenmemiş yeni açılan bölümleri de kapsar. Bu sayfa, ocak sahasındaki zor zemin koşullarının platform seçimini ve çalışma güvenliğini nasıl belirlediğini anlatır.",
        maddeler: [
            {
                baslik: "Kesim artığı taş parçalarıyla kaplı yüzeyde denge",
                metin:
                    "Ocak yüzeyinin büyük bölümü, blok kesim ve kırma işleminden arta kalan düzensiz boyutlu taş parçalarıyla kaplıdır. Bu yüzeyde tekerlekli bir platformun her tekerleği farklı bir yükseklikte bir parçaya basabilir; bu, makinenin dengesini bozabilecek küçük ama tekrarlayan bir risktir. Paletli gövde, ağırlığı geniş bir yüzeye yayarak bu riski azaltır; kurulum öncesi yüzeydeki büyük ve gevşek parçalar mümkünse temizlenir.",
            },
            {
                baslik: "Yamaç eğiminde üretici sınırının kesin uygulanması",
                metin:
                    "Ocak yamacının eğimi, makinenin üreticisi tarafından belirlenen güvenli çalışma eğiminin üzerinde olabilir. Bu sınır, hiçbir gerekçeyle esnetilmez; eğim sınırı aşan bir noktada makine konumlandırılmaz. Böyle bir noktaya erişim gerekiyorsa, ya zemin ocak ekibi tarafından düzeltilir ya da makine daha düşük eğimli bir yaklaşım noktasından konumlandırılarak boom ile o noktaya ulaşılır.",
            },
            {
                baslik: "Pasa sahasında taze dökülmüş malzemenin taşıma gücü",
                metin:
                    "Kazı artığının döküldüğü pasa sahası, taze dökülen malzemenin henüz oturmadığı bölgelerde düşük taşıma gücüne sahiptir. Bu bölgede çalışma gerekiyorsa, malzemenin ne kadar süredir orada bulunduğu ve oturma durumu ocak ekibinden sorulur; taze dökülmüş bir alanda makine konumlandırılmaz. Gerekirse geçici bir plaka veya dolgu ile zemin desteklenir.",
            },
            {
                baslik: "Yağış sonrası toz-çamur dengesinin değişmesi",
                metin:
                    "Kuru havada sağlam görünen bir taş tozu yüzeyi, yağış sonrası kaygan bir çamur tabakasına dönüşebilir. Bu değişim, zeminin görünümünden her zaman anlaşılmaz; bu yüzden yağış sonrası ilk çalışmada zemin ayrıca test edilir. Riskli görülen bir noktada çalışma ertelenir veya zemin kuruyana kadar beklenir; bu bekleme süresi işin başında müşteriye bildirilir.",
            },
            {
                baslik: "Her ziyarette zeminin yeniden değerlendirilmesi",
                metin:
                    "Ocak sahasının zemini kazı ve depolama faaliyeti nedeniyle sürekli değişir; bir önceki ziyarette düz ve sağlam olan bir nokta, yeni bir yığın veya kazıyla tamamen farklı hâle gelmiş olabilir. Bu yüzden hiçbir zemin bilgisi bir sonraki ziyarette geçerli kabul edilmez; operatör her seferinde zemini yeniden gözden geçirir ve gerekirse ocak sorumlusundan güncel bilgi ister.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak sahasındaki zor zemin tipleri ve gövde tercihi",
                paragraflar: [
                    "Aşağıdaki tablo, ocak sahasında karşılaşılan zor zemin tiplerini ve bunlara uygun platform yapılandırmasını özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Ana risk", "Gövde tercihi", "Ek önlem"],
                    satirlar: [
                        ["Kesim artığı taş yüzeyi", "Dengesiz basış noktası", "Paletli, geniş taban", "Büyük parça temizliği"],
                        ["Yamaç eğimi", "Devrilme riski", "Paletli, düşük ağırlık merkezi", "Eğim sınırı ölçümü"],
                        ["Taze pasa sahası", "Düşük taşıma gücü", "Geniş taban + destek plakası", "Oturma süresi teyidi"],
                        ["Yağış sonrası toz-çamur", "Kayma", "Paletli", "Zemin testi, bekleme"],
                        ["Yeni açılan bölüm", "Bilinmeyen zemin", "Ön keşif sonrası karar", "Güncel değerlendirme"],
                    ],
                },
            },
            {
                baslik: "Eğim sınırının neden esnetilmediği",
                paragraflar: [
                    "Makine üreticisinin belirlediği eğim sınırı, laboratuvar koşullarında test edilmiş bir güvenlik değeridir ve sahadaki görünür istikrar bu sınırı geçersiz kılmaz. Eğimli bir zeminde makine ayaklarla desteklense bile, sepedin yükselip yatay uzanması ağırlık merkezini öngörülemeyen şekilde kaydırabilir.",
                    "Bu yüzden eğim sınırı aşan bir noktada, ne kadar acil olursa olsun makine konumlandırılmaz. Alternatif olarak zeminin düzeltilmesi, farklı bir yaklaşım açısı veya boom'un daha uzun uzanmasıyla farklı bir konumdan erişim değerlendirilir.",
                ],
            },
            {
                baslik: "Zemin bilgisinin güncel tutulması",
                paragraflar: [
                    "Ocak sahası gibi sürekli değişen bir zeminde, bir aylık bile eski bir bilgiye güvenmek risklidir. Bu yüzden her iş talebinde, mümkünse iş gününe yakın tarihli bir zemin fotoğrafı istenir; büyük bir değişiklik varsa kısa bir ön keşif önerilir.",
                    "Düzenli çalışılan bir ocak sahasında bile bu teyit atlanmaz; operatör sahaya vardığında son bilgiyle karşılaştırma yapar ve fark varsa çalışma planını buna göre günceller.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak yamacında eğim sınırını kim belirliyor?",
                cevap:
                    "Sınır, makinenin üreticisi tarafından belirlenen güvenli çalışma eğim değeridir ve bu sınır hiçbir gerekçeyle esnetilmez. Operatör her iş öncesi zeminin eğimini ölçer; sınırı aşan bir noktada makine konumlandırılmaz. Böyle bir noktaya erişim gerekiyorsa zeminin düzeltilmesi veya farklı bir yaklaşım açısı değerlendirilir.",
            },
            {
                soru: "Taze dökülmüş pasa sahasında ne zaman çalışılabilir?",
                cevap:
                    "Malzemenin oturma süresi, dökülen malzemenin cinsine ve hava koşuluna göre değişir; bu bilgiyi ocak ekibinden alırız. Taze dökülmüş, henüz oturmamış bir alanda taşıma gücü düşük olduğu için makine konumlandırılmaz. Gerekirse geçici bir plaka veya dolgu ile zemin desteklenerek erken erişim değerlendirilebilir.",
            },
            {
                soru: "Yağış sonrası ne kadar beklemeniz gerekiyor?",
                cevap:
                    "Bekleme süresi, yağışın şiddetine ve zeminin drenaj özelliğine göre değişir; kesin bir süre vermeden önce zemini sahada test ederiz. Kuru görünen bir yüzey bile altında nem tutmuş olabilir; bu yüzden görsel değerlendirmeye güvenilmez. Riskli görülen bir noktada çalışma ertelenir ve yeni bir tarih önerilir.",
            },
            {
                soru: "Her ziyarette zemin yeniden mi kontrol ediliyor, önceki bilgi kullanılamaz mı?",
                cevap:
                    "Ocak sahasının zemini kazı ve depolama faaliyeti nedeniyle sürekli değiştiği için önceki ziyaretteki bilgi bir sonraki ziyarette geçerli kabul edilmez. Operatör her seferinde zemini yeniden gözden geçirir; büyük bir değişiklik varsa ocak sorumlusundan güncel bilgi istenir. Bu, güvenliğin sürekliliğini sağlayan temel bir kuraldır.",
            },
            {
                soru: "Kesim artığı taş parçalarıyla dolu bir yüzeyde çalışmadan önce temizlik yapılıyor mu?",
                cevap:
                    "Mümkünse evet; büyük ve gevşek parçalar kurulum öncesi temizlenir çünkü bunlar makinenin dengesini etkileyebilir. Tam bir temizlik mümkün değilse, paletli gövde ağırlığı geniş bir yüzeye yayarak riski azaltır. Yüzeyin durumunu önceden paylaşırsanız gerekli hazırlığı ekiple birlikte planlarız.",
            },
            {
                soru: "Zor zeminde çalışırken operatör kararı ile işletmenin talebi çelişirse ne olur?",
                cevap:
                    "Güvenlik konusunda son kararı sahadaki operatör verir; zemin veya hava koşulu güvenli değilse, işletmenin aciliyeti ne olursa olsun çalışma başlatılmaz veya durdurulur. Bu, hem operatörün hem sahadaki diğer personelin güvenliği için istisnasız uygulanan bir kuraldır. Alternatif bir çözüm (farklı yaklaşım noktası, zemin düzeltmesi, erteleme) birlikte değerlendirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ilinin traverten/mermer ocaklarında kesim artığı taş yüzeyi, yamaç eğimi ve pasa sahası gibi zor zemin koşullarının doğal olarak bulunması sektörün genel işleyişine dair kamuya açık bilgidir; eğim sınırı uygulaması, zemin yeniden değerlendirmesi ve gövde seçimi firma saha pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },
};
