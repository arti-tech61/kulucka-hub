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
};
