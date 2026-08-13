// ═══════════════════════════════════════════════════════════════════════════
// manliftkiralama.org.tr — ELLE YAZILMIŞ İÇERİK (GAZİANTEP)
//
// Profil: Gaziantep OSB'de tekstil ve gıda sanayisi için manlift kiralama.
// Açı: şehrin kendi üretim kimliği — halı ve makine halısı üretiminin
// dünya ölçeğindeki merkezi oluşu, iplik-dokuma tesisleri, gıda sanayisi
// (baharat, kuruyemiş, un-bulgur), plastik ve ambalaj, GAOSB'nin çok
// bölgeli yapısı, sıcak ve uzun yazın dış işlere ve operatör sağlığına
// etkisi.
//
// ⚠️ Gaziantep için ilk elle yazılmış dosya. Her sayfa kendi ilçesinin
// üretim karakterinden yazılır; sayfalar arası kalıp tekrarı yasaktır.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı ve rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALAMA_ORG_TR: Record<string, BespokeIcerik> = {
    "bolge:gaziantep-osb": {
        h1: "Gaziantep OSB'de Halı ve Dokuma Fabrikaları İçin Manlift Kiralama",
        giris:
            "Gaziantep Organize Sanayi Bölgesi denince akla önce halı gelir ve bu tesadüf değildir; şehir, makine halısı üretiminde dünya ölçeğinde bir merkez konumundadır ve bu üretim, sıradan bir fabrika mimarisiyle değil, kilometrelerce uzanan dokuma hangarları, iplik bükümü salonları ve boyahane bacalarıyla kendini gösterir. Halı dokuma tezgâhlarının dizildiği salonlar genellikle uzun, alçak tavanlı ve sıkışık raflı değil; aksine geniş açıklıklı, yüksek tavanlı ve üstten aydınlatmalı yapılardır, çünkü tezgâh hatlarının verimi düzenli ışığa ve havalandırmaya bağlıdır. Boyahane taraflarında ise buhar ve nem yüksektir, tavan vantilatörleri ve egzoz bacaları sürekli çalışır durumdadır. Bizim işimiz bu geniş hacimlerin tavanında geçer: iplik bobin askı sistemlerinin kontrolü, aydınlatma armatürü değişimi, boyahane buhar bacası bakımı ve depo raflarının denetimi. GAOSB'nin kendisi tek bir blok değil, farklı bölgelere yayılmış geniş bir sanayi ağıdır; bu yüzden bir günde birden fazla tesise hizmet vermek, bölgeler arası mesafeyi hesaba katan bir lojistik planı gerektirir.",
        maddeler: [
            {
                baslik: "Dokuma salonlarında tezgâh üstü aydınlatma ve askı sistemleri",
                metin:
                    "Halı dokuma tezgâhlarının verimli çalışması, ipliğin renk ve deseninin doğru görülmesine bağlıdır; bu yüzden tezgâh üstü aydınlatma düzenli aralıklarla yenilenir ve arızalı armatürler hızlı değiştirilir. Aynı hatta iplik besleme bobinlerinin asılı olduğu ray sistemleri de tavan seviyesindedir ve bobin değişim mekanizmasının bakımı gerektirir. Makaslı platform, tezgâh sıraları arasındaki koridorda ilerleyerek bu işleri tek tek tamamlar; koridor genişliği dar olduğunda dar gövdeli sınıf tercih edilir. Üretim durmadan çalışılabilmesi için makinenin, çalışan tezgâhın titreşim alanına girmemesi ayrıca gözetilir.",
            },
            {
                baslik: "Boyahane bacaları ve buhar tahliye sistemleri",
                metin:
                    "İplik ve halı boyama işlemleri yüksek sıcaklıkta buhar üretir ve bu buharın tahliyesi tavan seviyesindeki baca ve fan sistemleriyle sağlanır. Bacaların iç yüzeyinde biriken nem ve kireç, zamanla fan kanatlarının verimini düşürür ve bakım aralıkları bu yüzden sık tutulur. Yüksek nem ve sıcaklık ortamında çalışan ekip için kısa çalışma blokları ve sık mola uygulanır; ekipmanın kendisi de nem nedeniyle paslanmaya karşı sık kontrol edilir. Boyahane tarafında iş, üretim döngüsünün soğuma aşamasına denk getirilerek yapılır.",
            },
            {
                baslik: "İplik depolarında raf ve nem kontrolü",
                metin:
                    "İplik bobinlerinin depolandığı alanlar, nem oranına duyarlı olduğu için kapalı ve yüksek raflı kurulur. Raf üst gözlerindeki sayım, hasarlı bobinlerin indirilmesi ve nem sensörlerinin kontrolü, dar koridora sığan bir platformla yapılır. Depo trafiğinin yoğun olduğu sevkiyat saatlerinde çalışmak yerine, üretim planının sakin olduğu saat dilimi tercih edilir. Bobin istifleme düzeni değiştikçe koridor genişliği de değişebildiğinden, her ziyarette güncel ölçüm alınır.",
            },
            {
                baslik: "Kesme, tufting ve son işlem hatlarında tavan ekipmanı",
                metin:
                    "Halının dokunmasından sonra geçtiği kesme, tıraşlama ve son kontrol hatlarının üzerinde de emiş kanalları, aydınlatma rayları ve otomasyon sensörleri bulunur. Bu hatlar genelde sürekli çalıştığı için bakım, planlı duruş pencerelerine sıkıştırılır ve o pencerede birden fazla kalem aynı anda bitirilir. Hattın hemen üstünde çalışırken düşen parça riski özellikle önemlidir, bu yüzden alt bölge örtüyle kapatılır ve hat o süre için durdurulur.",
            },
            {
                baslik: "Yükleme rampası ve ihracat sevkiyat alanları",
                metin:
                    "Gaziantep'in halı üretimi büyük ölçüde ihracata gittiği için tesislerin sevkiyat rampaları yoğun ve sürekli işler. Rampa üstü aydınlatma, seksiyonel kapı bakımı ve konteyner yükleme alanındaki direk aydınlatması, sevkiyat trafiğinin durduğu saatlere planlanır. Konteynerlerin sıraya girdiği geniş sahada bomlu makine rahat manevra eder, ancak park düzeni değiştiğinde güzergâh yeniden kontrol edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üretim aşamasına göre erişim ihtiyacı",
                paragraflar: [
                    "Halı ve dokuma üretiminin farklı aşamalarında karşılaştığımız iş kalemlerini ve uygun makine sınıfını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Üretim aşaması", "Sık çıkan iş", "Uygun sınıf", "Ortam notu"],
                    satirlar: [
                        ["Dokuma salonu", "Aydınlatma, bobin askısı", "Dar gövdeli makaslı", "Titreşim alanından uzak"],
                        ["Boyahane", "Baca, fan bakımı", "Paslanmaya dayanıklı makine", "Yüksek nem-sıcaklık"],
                        ["İplik deposu", "Raf sayımı, nem sensörü", "Dar koridor makaslı", "Koridor değişken"],
                        ["Kesme-son işlem", "Emiş kanalı, sensör", "Standart makaslı", "Planlı duruş"],
                        ["Sevkiyat rampası", "Kapı, direk aydınlatması", "Bomlu, geniş saha", "Konteyner trafiği"],
                    ],
                },
            },
            {
                baslik: "GAOSB'nin çok bölgeli yapısı ve lojistik planı",
                paragraflar: [
                    "Gaziantep Organize Sanayi Bölgesi, tek bir kapıdan girilen kompakt bir alan değil, farklı zaman dilimlerinde kurulmuş ve genişlemiş, birbirine yakın ama ayrı bölgelerden oluşan geniş bir ağdır. Bu yapı, bir günde birden fazla tesise hizmet verirken bölgeler arası geçiş süresini hesaba katmayı gerektirir; aksi hâlde plan kâğıt üstünde tutarlı görünse de sahada gecikmeye döner.",
                    "Bizim yaklaşımımız, aynı bölgedeki işleri art arda sıralamak ve bölge değişimini günün en az bir kez yapılacağı şekilde planlamaktır. Müşteriden gelen çağrılarda hangi bölgede olduklarını netleştirmek, teklif ve randevu sürecinin ilk adımıdır; bölge bilgisi eksik geldiğinde randevu saatinin gerçekçiliği de düşer.",
                ],
            },
            {
                baslik: "Yaz sıcağının çalışma düzenine etkisi",
                paragraflar: [
                    "Gaziantep'te yaz uzun ve sıcaktır; öğle saatlerinde özellikle metal gövdeli makinelerin ve dış saha ekipmanının yüzey sıcaklığı belirgin şekilde yükselir. Bu koşullarda sepette uzun süre çalışmak operatör için yorucudur ve dikkat kaybı riskini artırır. Bu yüzden yaz aylarında dış saha ve çatı işlerini sabah erken saatlere kaydırmayı, öğle saatlerinde iç mekân işlerine geçmeyi standart hâline getirdik.",
                    "Su ve gölgeleme de bu düzenin parçasıdır: sepette çalışan personel için düzenli su molası verilir, mümkün olduğunda geçici gölgelik kullanılır. Sıcaklığın çok yükseldiği günlerde açık saha çalışması kısaltılır ve iş ertesi günün erken saatine taşınır; bu esneklik, teklif aşamasında müşteriyle baştan konuşulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dokuma tezgâhları çalışırken üstlerinde iş yapılabilir mi?",
                cevap:
                    "Tezgâhın doğrudan üstünde değil, ama koridorda ve tezgâh aralarında evet. Tezgâhlar çalışırken üretilen titreşim ve iplik tozunun bulunduğu alanın hemen üzerinde platformla çalışmak hem makinenin hem tezgâhın güvenliği açısından uygun değildir. Bunun yerine iş, o tezgâh grubunun bakım için durdurulduğu ya da vardiya değişiminde boşta kaldığı zaman dilimine alınır. Koridor aydınlatması ve genel havalandırma gibi tezgâhla doğrudan teması olmayan kalemler ise üretim sürerken, tezgâhtan güvenli mesafede konumlanarak yapılabilir. Hangi işin hangi kategoriye girdiğini keşifte birlikte belirliyoruz.",
            },
            {
                soru: "Boyahanede yüksek nem makineye zarar verir mi?",
                cevap:
                    "Uzun vadede evet, bu yüzden önlem alıyoruz. Sürekli buharlı ortamda çalışan makinelerin elektrik aksamı ve metal yüzeyleri normal bir kuru hole göre daha hızlı yıpranır. Bu ortamda kalacak makineleri kira süresine göre seçiyoruz; kısa süreli işlerde standart makine yeterliyken, boyahanede uzun süre kalacak makinelerde nem koşullarına daha dayanıklı ekipmanı tercih ediyoruz. Ayrıca her ziyaret sonunda makinenin elektrik bağlantılarını ve panel contalarını kontrol ediyoruz. Ekip tarafında da nemli ve sıcak ortamda çalışma süresi kısa tutuluyor, sık mola veriliyor.",
            },
            {
                soru: "İplik deposunda bobinlere zarar vermeden çalışabilir misiniz?",
                cevap:
                    "Evet, ama bunun için birkaç önlem alıyoruz. Öncelikle sepetin bobinlere temas etmeyecek mesafede hareket etmesini sağlıyoruz; koridor dar olduğunda daha dar gövdeli bir makine seçmek bu mesafeyi güvenli hâle getirir. İkinci olarak sepetten yapılan işlerde kullanılan alet ve malzemenin bağlı tutulmasına özellikle dikkat ediyoruz, çünkü düşen bir alet bobin sarımına zarar verebilir. Üçüncüsü, nem hassasiyeti olan bölgelerde çalışırken depo kapılarının gereğinden uzun açık kalmamasına özen gösteriyoruz. Hasarlı bobin tespit edilirse bunu anında depo sorumlusuna bildiriyoruz, sorumluluk belirsizliği bırakmıyoruz.",
            },
            {
                soru: "GAOSB'de birden fazla bölgede işimiz var, aynı gün hepsini yapabilir misiniz?",
                cevap:
                    "Genellikle evet, ancak bölgeler arası mesafeye göre günü planlamamız gerekiyor. GAOSB birden fazla ayrı bölgeden oluştuğu için bir bölgeden diğerine geçiş, sahada birkaç iş kalemi bitirmekten daha uzun sürebiliyor. Bu yüzden aynı gün birden fazla bölgeye gitmek istediğinizde, hangi bölgelerde ne kadar süreceğini önceden bildirmenizi istiyoruz; buna göre güzergâhı en az geçişle tamamlayacak sırayı kuruyoruz. Bazı durumlarda iki bölgeyi aynı günde bitirmek yerine ardışık iki güne yaymak, hem daha gerçekçi hem daha ucuza geliyor; bunu teklif aşamasında açıkça öneriyoruz.",
            },
            {
                soru: "Yaz aylarında öğle saatlerinde çalışmıyor musunuz?",
                cevap:
                    "Açık sahada ve çatı üstünde öğle saatlerinde çalışmayı tercih etmiyoruz, ama bu bütün işlerin durduğu anlamına gelmez. Sıcaklığın en yüksek olduğu saatlerde ekibi kapalı hol içindeki işlere yönlendiriyoruz; dış saha ve çatı kalemlerini sabah erken saatte veya akşamüstü serinlemeye başladığında yapıyoruz. Bu düzen hem operatör güvenliği hem iş kalitesi açısından gerekli, çünkü aşırı sıcakta hem dikkat kaybı hem malzeme davranışı değişiyor — örneğin sıcak yüzeyde mastik ve boya farklı kuruma gösteriyor. Programı bu şekilde bölmek toplam süreyi neredeyse hiç uzatmıyor, sadece saatleri kaydırıyor.",
            },
            {
                soru: "İhracat sevkiyatı sırasında rampa çevresinde çalışma yapabilir misiniz?",
                cevap:
                    "Yapabiliriz, ama sevkiyat trafiğinin yoğun olduğu saatlerde önermiyoruz. Rampa çevresi konteyner ve tır hareketiyle sürekli hareketli bir alan olduğu için, platform işini sevkiyat programının sakinleştiği bir saat dilimine, örneğin sevkiyatın henüz başlamadığı sabah erken saate ya da günün son sevkiyatından sonraki dilime yerleştiriyoruz. Rampa yakınında çalışırken görünürlüğü artıran koni ve şerit kullanıyor, forklift ve tır operatörleriyle konum bilgisini paylaşıyoruz. Sevkiyat programınızı bize önceden verirseniz, işi o programa hiç dokunmadan en uygun aralığa yerleştirebiliyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gaziantep'in makine halısı üretiminde dünya ölçeğinde bir merkez olduğu ve GAOSB'nin çok bölgeli yapısı kamuya açık genel bilgidir. Bölge geçişlerine dair anlatılanlar sahadaki tekrarlı deneyimden gelir; hiçbir fabrika ismi verilmez.",
    },

    "bolge:sehitkamil": {
        h1: "Şehitkamil'de Gıda Sanayi Tesislerinde Manlift Kiralama",
        giris:
            "Şehitkamil, Gaziantep'in gıda üretimine damgasını vurduğu ilçelerin başında gelir; baharat işleme atölyeleri, kuruyemiş kavurma-paketleme tesisleri, un ve bulgur fabrikaları ile şehrin mutfak kültürünü besleyen küçük-orta ölçekli imalathaneler burada sık kümelenir. Gıda üretiminin kendine has bir erişim disiplini vardır: hijyen kuralları her işin önüne geçer, çünkü tavanda yapılan bir bakım, altındaki üretim hattına toz veya yabancı madde düşürme riski taşır. Bu yüzden burada çalışırken makinenin temizliği, kullanılan malzemenin gıda güvenliğine uygunluğu ve çalışma alanının izole edilmesi, işin teknik kısmı kadar önemlidir. İlçenin bir diğer özelliği, tarihi kent merkeziyle sanayi tesislerinin iç içe geçmiş olmasıdır; bazı imalathaneler dar sokaklarda, eski dokunun içinde faaliyet gösterir ve bu da makine erişimini ayrı bir problem hâline getirir. Baharat tozunun havada asılı kaldığı atölyelerde ise hem hijyen hem de toz patlaması riski birlikte yönetilir.",
        maddeler: [
            {
                baslik: "Baharat işleme atölyelerinde toz ve hijyen kontrolü",
                metin:
                    "Baharat öğütme ve paketleme atölyelerinde ince toz hem üründen hem işlemden kaynaklanır ve bu toz havada uzun süre asılı kalabilir. Tavan aydınlatması, emiş kanalları ve filtre değişimi gibi işler, üretimin durduğu ve tozun büyük ölçüde çöktüğü saatlerde yapılır. Makinenin gövdesi işe başlamadan önce temizlenir, çalışma alanı gıda üretim bölümünden fiziksel olarak ayrılır. Bu atölyelerde kıvılcım çıkaran işler, toz yoğunluğunun düşürüldüğü ve emiş sisteminin devrede olduğu koşullar dışında yapılmaz.",
            },
            {
                baslik: "Kuruyemiş kavurma hatlarında tavan ve baca bakımı",
                metin:
                    "Kavurma işleminin ürettiği sıcak hava ve ince kabuk tozu, tavan seviyesindeki egzoz bacalarında birikir ve zamanla tahliye verimini düşürür. Baca temizliği ve fan bakımı, kavurma hattının soğuduğu ve durduğu saatlerde yapılır; sıcak bacaya yaklaşmak hem makine hem çalışan için risklidir. Aydınlatma armatürlerinin de yağlı-tozlu ortamda daha sık temizlik istediği bu tesislerde, bakım turu genellikle aydınlatma ve baca kalemini aynı ziyarette birleştirir.",
            },
            {
                baslik: "Un ve bulgur fabrikalarında silo üstü işler",
                metin:
                    "Tahıl işleyen tesislerde silo üstü kapaklar, aktarma bantları ve toz toplama sistemleri düzenli kontrol gerektirir; bu tesislerde tahıl tozunun tutuşabilir bir ortam oluşturabileceği bilinen bir risktir. Sıcak iş gerektiren kalemler, alanın temizlendiği ve emiş sisteminin çalıştığı, yazılı izinle onaylanmış bir pencerede yürütülür. Silo yüksekliği fazla olduğu için uzun erişimli bomlu makine tercih edilir ve zemin taşıma durumu önceden kontrol edilir.",
            },
            {
                baslik: "Dar sokaklı eski dokuda imalathane erişimi",
                metin:
                    "Kent merkezine yakın imalathanelerin bir kısmı, araç geçişinin sınırlı olduğu eski sokaklarda faaliyet gösterir. Buralarda standart boy bir makinenin sokağa girmesi mümkün olmayabilir; kompakt sınıf makineler veya bina içine taşınabilecek küçük ekipman tercih edilir. Bazı durumlarda makine, sokağın girebildiği en yakın noktaya konumlanır ve iş oradan uzun erişimle yürütülür. Sokak trafiğinin ve komşu esnafın etkilenmemesi için çalışma saatinin sabah erken veya öğle arası düşük yoğunluk dönemine alınması önerilir.",
            },
            {
                baslik: "Paketleme salonlarında aydınlatma ve etiketleme hattı üstü",
                metin:
                    "Paketleme salonlarının tavanında aydınlatma dışında etiket okuyucu sensörleri, metal dedektör kapıları ve konveyör üstü kameralar bulunabilir. Bu ekipmanların hizalanması ve bakımı, hattın kısa süreli durdurulduğu aralıklarda yapılır. Salon genellikle temiz ve düzenli tutulduğu için makinenin de aynı temizlik standardında gelmesi beklenir; tekerlek temizliği ve gövde silme, işe başlamadan önce standart adımdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda üretim koluna göre çalışma kuralları",
                paragraflar: [
                    "İlçedeki gıda tesislerinde en sık çıkan iş kalemlerini ve bunların hijyen-güvenlik gereksinimlerini aşağıda özetledik.",
                ],
                tablo: {
                    basliklar: ["Üretim kolu", "Sık çıkan iş", "Hijyen önlemi", "Zaman penceresi"],
                    satirlar: [
                        ["Baharat işleme", "Emiş, filtre bakımı", "Alan izolasyonu, gövde temizliği", "Üretim durduğunda"],
                        ["Kuruyemiş kavurma", "Baca, aydınlatma", "Soğuma sonrası erişim", "Hat soğuduktan sonra"],
                        ["Un-bulgur", "Silo kapağı, bant", "Toz izni, sıcak iş kontrolü", "Planlı duruş"],
                        ["Eski doku imalathane", "Genel bakım", "Kompakt makine, temiz giriş", "Düşük trafik saati"],
                        ["Paketleme salonu", "Sensör, kamera hizası", "Standart temizlik", "Kısa hat durması"],
                    ],
                },
            },
            {
                baslik: "Gıda güvenliği ile erişim işinin kesişimi",
                paragraflar: [
                    "Gıda üreten bir tesiste yüksekte yapılan her işlem, aynı zamanda bir kontaminasyon riski taşır; düşen bir vida, dökülen bir yağ damlası veya havaya karışan bir toz parçacığı, altındaki üründe iz bırakabilir. Bu yüzden Şehitkamil'deki işlerimizde standart uygulama, çalışma alanının altını tam olarak kapatmak ve mümkünse o bölgedeki üretimi geçici olarak durdurmaktır.",
                    "Makinenin kendisi de bu disiplinin parçasıdır: gıda alanına giren her ekipman önce temizlenir, yağlama noktaları kontrol edilir ve sızıntı riski taşıyan parçalar gözden geçirilir. Bazı tesislerde kendi hijyen prosedürlerine göre ek bir onay veya form istenir; bunu keşif aşamasında sorup önceden hazırlıyoruz ki teslim günü beklenmesin.",
                ],
            },
            {
                baslik: "Küçük imalathanelerle çalışma biçimi",
                paragraflar: [
                    "İlçedeki gıda imalathanelerinin önemli bir kısmı aile işletmesi ölçeğindedir ve büyük bir bakım bütçesi veya planlaması yoktur. Bu işletmelerle çalışırken bizden beklenen, sadece makineyi getirmek değil, hangi işin öncelikli olduğunu ve hangi işlerin birleştirilebileceğini söylemektir.",
                    "Bu nedenle küçük ölçekli müşterilerimize genellikle kısa bir keşif sonrası, o ziyarette bitirilebilecek bütün kalemleri tek listeye topluyoruz: aydınlatma, filtre, baca ve sensör bakımı aynı günde peş peşe yapılabiliyorsa, ayrı ayrı günlerde çağırmanın hem zaman hem maliyet kaybı olduğunu açıkça söylüyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim sürerken tavan işi yapabilir misiniz, yoksa mutlaka durmalı mıyız?",
                cevap:
                    "Gıda tesislerinde bu sorunun cevabı diğer sektörlere göre daha katı: çalışma noktasının altındaki hat, o iş süresince mutlaka durdurulur veya ürün oradan uzaklaştırılır. Bunun nedeni yalnızca güvenlik değil, kontaminasyon riskidir; düşebilecek en küçük parçacık bile gıda ürününde tespit edilirse ciddi bir kayıp doğurur. Bu yüzden keşifte önce hangi hattın hangi saatte durabileceğini soruyoruz ve programı buna göre kuruyoruz. Durdurulamayan bir hat varsa, o hattın üstündeki işi erteliyor veya alternatif bir erişim yöntemi öneriyoruz; riski göze alıp üretim sürerken çalışmıyoruz.",
            },
            {
                soru: "Baharat tozu makinenin içine kaçarsa arıza riski oluşur mu?",
                cevap:
                    "Evet, ince toz akü bölmesine ve elektrik aksamına kaçtığında hem soğutmayı bozar hem kısa devre riskini artırır. Bu yüzden baharat atölyelerinde çalışan makinelerin filtre ve havalandırma noktalarını normalden daha sık kontrol ediyoruz. Mümkünse işi, toz yoğunluğunun en düşük olduğu, üretim durduktan bir süre sonraki saate alıyoruz; toz havada asılıyken çalışmak hem makine hem operatör için gereksiz risk taşır. İş bitiminde makine gövdesi ve tekerlekleri detaylı temizlenip başka bir sahaya öyle gönderiliyor, böylece çapraz bulaşma da önleniyor.",
            },
            {
                soru: "İmalathanemiz dar bir sokakta, standart makine giremiyor; ne öneriyorsunuz?",
                cevap:
                    "Önce sokağın gerçek genişliğini ve varsa araç giriş kısıtını ölçüyoruz, çünkü haritadan bakmak yanıltıcı olabiliyor. Sığıyorsa kompakt gövdeli bir makine öneriyoruz; bu sınıf standart kapı ve dar geçitlerden rahatça geçebiliyor. Hiçbir makine sığmıyorsa iki alternatif sunuyoruz: birincisi, makineyi sokağın girebildiği en yakın açık noktaya bırakıp içeriye taşınabilir merdiven-platform kombinasyonuyla ilerlemek; ikincisi, işin büyüklüğüne göre farklı bir erişim yöntemi önermek. Dürüst olmak gerekirse bazı çok dar sokaklarda platform hiç uygun çözüm olmuyor, bunu da açıkça söylüyoruz.",
            },
            {
                soru: "Silo üstünde çalışırken tahıl tozu patlama riski oluşturur mu?",
                cevap:
                    "Belirli yoğunluk ve koşullarda evet, bu sektörün bilinen bir riskidir ve biz bunu keşiften itibaren ciddiye alıyoruz. Sıcak iş gerektiren, yani kıvılcım çıkarabilecek kesme, kaynak veya taşlama işlemleri, alan temizlenip toz yoğunluğu düşürülmeden ve emiş sistemi devreye alınmadan başlatılmaz. Bu tür işler için tesisin kendi iş güvenliği prosedürüyle birlikte yazılı izin alınır. Sıcak iş gerektirmeyen kontrol ve gözle denetim işlerinde bu kısıt aynı ölçüde katı değildir, ancak yine de toz maskesi ve statik boşalmaya karşı önlemli ekipman kullanılır.",
            },
            {
                soru: "Küçük bir kuruyemiş atölyesiyiz, tek seferlik bakım için de gelir misiniz?",
                cevap:
                    "Geliriz; ilçedeki müşterilerimizin çoğu tam olarak bu ölçekte. Tek seferlik işlerde fiyatın büyük kısmını makinenin nakliyesi oluşturduğu için, o gün yapılabilecek bütün kalemleri tek listeye toplamanızı öneriyoruz — aydınlatma, baca, filtre ve varsa tabela bakımı aynı ziyarette bitebiliyor. Ayrıca aynı sokak veya mahalledeki komşu işletmelerle aynı güne denk gelen bir randevu ayarlayabilirseniz, nakliye maliyeti paylaşılabiliyor. Bu tür küçük ölçekli işlerde önceden birkaç kalemi birlikte planlamak, ayrı ayrı çağırmaktan belirgin şekilde ucuza geliyor.",
            },
            {
                soru: "Makine gıda alanına girmeden önce ne gibi bir hazırlık yapıyorsunuz?",
                cevap:
                    "Standart hazırlığımız üç adımdan oluşuyor. Önce makinenin gövdesi ve özellikle tekerlekleri detaylı temizlenir; dışarıdan gelen toz ve kirin üretim alanına taşınmaması buna bağlı. Sonra yağlama noktaları ve sızıntı riski taşıyan bağlantılar kontrol edilir; gıda alanında damlama kabul edilemez bir durumdur. Son olarak, tesisin kendi hijyen kuralları varsa bunları önceden alıp uyguluyoruz — bazı tesisler ek olarak koruyucu galoş veya özel giriş prosedürü istiyor. Bu üç adımı atlamadan içeri giriyoruz; gıda tesislerinde bu, iş hızını değil güvenilirliği belirleyen kısım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Şehitkamil'in Gaziantep'in gıda sanayisinde ağırlıklı bir ilçe olduğu ve şehrin tarihi merkeziyle sanayinin iç içe geçtiği kamuya açık genel bilgidir. Hijyen ve izolasyon anlatımı, gıda tesislerindeki tekrarlı gözlemlere dayanır; imalathane adı geçmez.",
    },

    "bolge:sahinbey": {
        h1: "Şahinbey'de Ticaret Merkezi ve Showroom İşlerinde Manlift Kiralama",
        giris:
            "Şahinbey, Gaziantep'in tarihi çarşısını, kent merkezindeki büyük halı ve tekstil showroomlarını, alışveriş merkezlerini ve şehrin idari-ticari yoğunluğunu barındıran ilçedir. Buradaki erişim ihtiyacı, üretim tesislerinden çok satış ve sergileme mekânlarından doğar: halı mağazalarının yüksek raflı teşhir duvarları, kumaş ve ev tekstili showroomlarının aydınlatma düzeni, iş merkezlerinin ortak alan bakımı, oteller ve düğün salonlarının etkinlik hazırlığı. Kapalı çarşı ve tarihi doku ile modern ticaret merkezlerinin aynı ilçede yan yana durması, işin karakterini de ikiye ayırır: bir tarafta dar sokaklı, araç geçişi kısıtlı eski çarşı; diğer tarafta geniş otoparklı, kolay erişilen yeni ticaret aksı. Her iki ortamda da işin ortak noktası, mekânın müşteriye kapalı kalabileceği süredir — bir mağaza kapanış sonrası birkaç saat, bir otel salonu ise etkinlikler arasındaki kısa pencerede çalışılır.",
        maddeler: [
            {
                baslik: "Halı ve tekstil showroomlarında teşhir duvarı aydınlatması",
                metin:
                    "Şehrin halı üretimini doğrudan yansıtan showroomlar, tavana yakın raflarda asılı halı ve kumaş örneklerini vurgulayan yönlendirilebilir spot sistemleriyle donatılır. Koleksiyon değiştiğinde bu spotların açısı yeniden ayarlanır, yanan lambalar değiştirilir ve bazen tüm aydınlatma hattı yenilenir. Yüksek teşhir duvarlarının önünde çalışırken ürüne temas etmeden ilerlemek gerektiği için kompakt ve hassas manevra kabiliyetine sahip makaslı platform tercih edilir; iş genellikle mağaza kapanışından sonraki saatlere planlanır.",
            },
            {
                baslik: "İş merkezi ve AVM ortak alan bakımı",
                metin:
                    "İlçedeki iş merkezleri ve alışveriş merkezlerinin atriyum aydınlatması, tavan dekorasyonu, yönlendirme tabelaları ve güvenlik kamerası bakımı, ziyaretçi yoğunluğunun düştüğü saatlerde yapılır. Zemin genellikle mermer veya parlak seramik kaplı olduğu için iz bırakmayan tekerlek zorunludur. Yüksek atriyum tavanlarında uzun erişimli makaslı veya kompakt eklemli sınıf kullanılır; çalışma alanı geçici paravanla ziyaretçi akışından ayrılır.",
            },
            {
                baslik: "Otel ve düğün salonlarında etkinlik öncesi kurulum",
                metin:
                    "Şahinbey'deki oteller ve düğün salonları, yoğun bir etkinlik takvimiyle çalışır ve avize bakımı, tavan süsleme, ses-ışık düzeni kurulumu gibi işler etkinlikler arasındaki dar zaman diliminde tamamlanmalıdır. Salonun parke veya halı kaplı zemini korunarak çalışılır, makine salon kapısından ve varsa asansörden geçebilecek ölçüde seçilir. İş bittiğinde alan bir sonraki etkinlik için anında kullanıma hazır bırakılır.",
            },
            {
                baslik: "Tarihi çarşı ve dar sokaklarda dükkân cephesi işleri",
                metin:
                    "Kapalı çarşı çevresindeki dükkânların cephe tabelaları, aydınlatması ve küçük tadilat işleri, araç trafiğinin sınırlı olduğu sokaklarda yürütülür. Bu bölgede standart boy makine çoğu zaman sığmaz; kompakt gövdeli veya taşınabilir sınıf ekipman tercih edilir. Çalışma saatleri, çarşı esnafının en az etkileneceği sabah erken veya kapanış sonrası dilime alınır ve yaya trafiği için geçici yönlendirme yapılır.",
            },
            {
                baslik: "Site ve rezidans dış cephe-ortak alan bakımı",
                metin:
                    "İlçenin yeni konut bölgelerindeki site ve rezidanslarda dış cephe kaplaması, ortak alan aydınlatması ve peyzaj çevresindeki elektrik direkleri düzenli bakım ister. Bu işlerde makinenin bahçe ve otopark zemininde bırakacağı iz, yönetimle önceden konuşulan bir konudur; hassas zeminlerde yük dağıtım plakası kullanılır. Çalışma saatleri, sakinlerin en az rahatsız olacağı gündüz saatlerine planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekân tipine göre çalışma düzeni",
                paragraflar: [
                    "İlçedeki ticari ve etkinlik mekânlarında sık karşılaştığımız durumları ve çalışma tercihini aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Mekân tipi", "Uygun saat", "Makine tercihi", "Kritik nokta"],
                    satirlar: [
                        ["Halı-tekstil showroom", "Kapanış sonrası", "Kompakt akülü makaslı", "Ürüne temas etmeme"],
                        ["İş merkezi / AVM", "Düşük ziyaretçi saati", "İz bırakmayan makaslı", "Mermer zemin koruması"],
                        ["Otel / düğün salonu", "Etkinlik arası", "Dar gövdeli, sessiz", "Kapı-asansör ölçüsü"],
                        ["Tarihi çarşı", "Sabah erken", "Kompakt / taşınabilir", "Sokak genişliği"],
                        ["Site / rezidans", "Gündüz", "Kompakt eklemli bom", "Zemin taşıma kapasitesi"],
                    ],
                },
            },
            {
                baslik: "Kapalı mekânda gürültü ve toz hassasiyeti",
                paragraflar: [
                    "Ticaret merkezlerinde ve otellerde çalışmanın en büyük kısıtı, mekânın estetik ve konfor beklentisidir. Bir showroom veya otel lobisinde toz kaldıran, gürültülü veya iz bırakan bir çalışma kabul edilmez; bu yüzden burada kullanılan makineler akülü, sessiz ve iz bırakmayan tekerlekli sınıflardan seçilir.",
                    "Çalışma alanı, mümkün olduğunda görsel olarak da ayrılır — perde, paravan veya geçici bölme kullanılır, böylece hem çalışan kişi rahat çalışır hem de mekânın diğer bölümü normal işleyişine devam eder. İş bitince alan süpürülür, iz varsa temizlenir; bu, teslim sürecinin standart son adımıdır.",
                ],
            },
            {
                baslik: "Randevu ve mekân sahipliği koordinasyonu",
                paragraflar: [
                    "Şahinbey'deki işlerin çoğu, tek bir mülk sahibiyle değil bina yönetimi, kiracı işletme ve bazen etkinlik organizatörü gibi birden fazla taraf arasında koordine edilir. Bu yüzden teklif öncesi kimin karar verici olduğunu ve kimin çalışma alanına erişim izni vereceğini netleştirmek, işin gecikmeden başlaması için gerekli.",
                    "Bina yönetimiyle çalışıldığında, çalışma tarihi genellikle diğer kiracılara veya sakinlere önceden duyurulur. Bu duyuru sürecini bildiğimiz için, teslim tarihini yönetimin duyuru süresine uygun şekilde geriye doğru planlıyoruz; son dakika taleplerinde bu süre kısalabiliyor ama mümkün olduğunca erken bilgi almak işi kolaylaştırıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mağazamız açıkken çalışabilir misiniz?",
                cevap:
                    "Kısa ve küçük kalemler için mümkün, ancak showroom düzenindeki mağazalarda genellikle kapanış sonrasını öneriyoruz. Açıkken çalışılacaksa, çalışma alanı müşteriden paravanla ayrılır ve mağaza personeli müşteriyi diğer bölüme yönlendirir; ürüne temas riski olan işlerde bu yeterli olmayabilir. Teşhir duvarına çok yakın çalışılan aydınlatma ayarları gibi hassas işlerde, ürünlerin zarar görmemesi için kapanış sonrası çalışmak hem daha güvenli hem daha hızlı oluyor. Hangi kalemlerin açıkken yapılabileceğini keşifte birlikte belirliyoruz.",
            },
            {
                soru: "Otel salonunda gece geç saatte çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, oteller ve düğün salonlarında bu sık talep edilen bir düzen. Etkinlikler arasındaki tek boşluk çoğu zaman gece geç saatlerdir ve biz bu saatlere uygun sessiz, akülü makineleri tercih ediyoruz. Gece çalışmasında iki şeye özellikle dikkat ediyoruz: aydınlatmanın yeterli olması için taşınabilir nokta aydınlatma getiriyoruz, ve sabah erken saatteki ilk etkinlik hazırlığına yetişecek şekilde işi zamanında bitiriyoruz. Otel güvenlik ve giriş prosedürünün gece vardiyasına uygun ayarlanması, teslim öncesi netleştirilmesi gereken bir diğer nokta.",
            },
            {
                soru: "Tarihi çarşıya makine sokabiliyor musunuz, yoksa alternatif mi öneriyorsunuz?",
                cevap:
                    "Sokağın genişliğine göre değişiyor; bazı ana geçitlere kompakt sınıf makine girebiliyor, en dar ara sokaklara ise hiçbir tekerlekli platform sığmıyor. Bu durumda dürüstçe alternatif öneriyoruz: küçük ölçekli tabela veya aydınlatma işleri için taşınabilir platform-merdiven kombinasyonu kullanılabiliyor, daha büyük işler için ise en yakın araç giriş noktasından uzun erişimle çalışmayı deniyoruz. Sokağın gerçek genişliğini ve varsa araç kısıtlamalarını keşifte yerinde ölçüyoruz; uzaktan fotoğraftan karar vermiyoruz çünkü tarihi dokuda ölçüler yanıltıcı olabiliyor.",
            },
            {
                soru: "AVM'de mermer zeminde makine kaymaz mı, iz bırakır mı?",
                cevap:
                    "Doğru makine ve doğru hazırlıkla ikisi de önlenebilir. Mermer ve parlak seramik zeminlerde standart lastik tekerlek yerine iz bırakmayan, gri veya beyaz kauçuk tekerlekli makine kullanıyoruz; bu tekerlekler hem kaymayı azaltır hem yüzeyde siyah iz bırakmaz. Ayrıca makine hareket ettirilmeden önce zeminin kuru ve temiz olduğundan emin oluyoruz, çünkü ıslak mermerde kayma riski her tekerlek tipinde artar. Hareket rotası önceden belirlenir ve keskin dönüşlerden kaçınılır. İş bitiminde zeminde herhangi bir iz kalıp kalmadığı birlikte kontrol edilir.",
            },
            {
                soru: "Site yönetimiyle çalışırken hangi belgeleri istiyorsunuz?",
                cevap:
                    "Standart olarak işin yönetim kurulu veya yönetici tarafından onaylandığını gösteren yazılı bir talimat veya karar istiyoruz; bu, sonradan kat maliklerinden birinin işe itiraz etmesi durumunda netlik sağlıyor. Ayrıca makinenin konumlanacağı alandaki araçların o gün için kaldırılacağına dair yönetimin sakinlere yaptığı duyuruyu görmek istiyoruz. Bu iki belge olmadan da işe başlayabiliriz ama gecikme riski o zaman yönetime ait oluyor; bunu teklif aşamasında açıkça belirtiyoruz ki sürpriz yaşanmasın.",
            },
            {
                soru: "Showroom'daki ürünlere zarar verirseniz ne oluyor?",
                cevap:
                    "Bu ihtimali en aza indirmek için işe başlamadan önce çalışma alanındaki ürünleri birlikte fotoğraflayıp mevcut durumu kayıt altına alıyoruz. Çalışma sırasında ürüne temas riski olan bölgelerde koruyucu örtü kullanıyor, sepetin hareket güzergâhını ürünlerden güvenli mesafede tutuyoruz. Buna rağmen bir hasar oluşursa, bunu saklamak yerine anında bildirip sorumluluk sürecini birlikte yürütüyoruz; bu tür durumlar sözleşmede önceden tanımlanmış oluyor. Yıllardır bu tür mekânlarda çalışmamızın nedeni, tam da bu hassasiyeti standart prosedür hâline getirmiş olmamız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Şahinbey'in Gaziantep'in tarihi çarşısını ve kent merkezi ticaretini barındıran ilçe olduğu kamuya açık bilgidir. Mekân koordinasyonuna dair anlatılanlar tekrar eden saha pratiğinden çıkarılmıştır; mağaza veya otel adı verilmez.",
    },

    "bolge:nizip-osb": {
        h1: "Nizip OSB'de Plastik, Ambalaj ve Tarım Sanayisinde Manlift Kiralama",
        giris:
            "Nizip, Gaziantep'in doğusunda, Fırat'a yakın ve kendi tarımsal ile sınai üretim kimliğini taşıyan bir ilçedir; zeytin ve zeytinyağı işleme, tarım ürünleri depolama, plastik ve ambalaj üretimi burada belirgin bir sanayi kolu oluşturur. Nizip OSB'deki tesisler, merkez ilçelerin büyük halı fabrikalarından farklı bir ölçekte ve karakterde çalışır: ekstrüzyon hatları, plastik enjeksiyon salonları, ambalaj baskı ve kesim atölyeleri ile zeytinyağı sıkım ve depolama tesisleri yan yana sıralanır. Plastik üretiminin kendine özgü bir riski vardır — eritme ve ekstrüzyon işlemlerinin ürettiği ısı ve buhar, tavan seviyesindeki havalandırma sistemlerini yoğun çalıştırır ve bu sistemlerin bakımı düzenli tekrarlanır. İlçenin merkeze mesafesi de planlamayı etkiler; günü birlik tek kalemlik çağrılar yerine, birden fazla işi tek ziyarette toplamak burada daha da önemlidir. Zeytin hasat döneminde işleme tesislerinin yoğunluğu artarken, plastik ve ambalaj tesisleri yıl boyunca daha istikrarlı bir üretim temposu sürdürür.",
        maddeler: [
            {
                baslik: "Plastik ekstrüzyon ve enjeksiyon salonlarında havalandırma",
                metin:
                    "Plastik hammaddenin eritilip şekillendirildiği salonlarda ortam sıcaklığı yüksek seyreder ve tavan seviyesindeki egzoz fanları bu ısıyı sürekli tahliye eder. Fan kanatlarında biriken yağlı toz, verim kaybına yol açtığı için düzenli temizlenir; kanal bağlantılarının sızdırmazlığı da aynı turda kontrol edilir. Bu salonlarda sıcaklık nedeniyle çalışma süresi kısa bloklara bölünür ve mümkünse hattın soğuma molasına denk getirilir.",
            },
            {
                baslik: "Ambalaj baskı ve kesim atölyelerinde aydınlatma-sensör bakımı",
                metin:
                    "Baskı kalitesinin renk doğruluğuna bağlı olduğu ambalaj atölyelerinde tavan aydınlatması düzenli kontrol ister; sararan veya sönük armatürler renk algısını bozabileceği için standart ömür dolmadan değiştirilir. Kesim hatlarının üstündeki optik sensörler ve hizalama kameraları da bu turda temizlenir. İş, baskı hattının kısa duruş aralıklarına sıkıştırılır ve makine hattın titreşim etkisinden uzak konumlanır.",
            },
            {
                baslik: "Zeytinyağı işleme ve depolama tesislerinde tank üstü işler",
                metin:
                    "Zeytinyağı sıkım tesislerinde depolama tankları genellikle yüksek ve sıralı kurulur; tank üstü kapaklar, seviye sensörleri ve havalandırma valfleri düzenli kontrol edilir. Hasat sezonunda tesis yoğun çalıştığı için bakım işleri mümkün olduğunca sezon öncesi veya sezon arası dönemlere alınır. Tank çevresinde zemin yağ sızıntısı nedeniyle kaygan olabileceğinden, makinenin çalışma öncesi zemin temizliği ve tekerlek tutuşu kontrol edilir.",
            },
            {
                baslik: "Tarım ürünleri depolarında raf ve nem kontrolü",
                metin:
                    "Kuru tarım ürünlerinin depolandığı geniş ambarlarda raf sistemleri ve nem-sıcaklık sensörleri tavan yakınında konumlanır. Hasat sonrası dönemde depolar dolu olduğu için bakım işleri, depoların göreceli olarak boşaldığı ara dönemlere planlanır. Dar koridorlara sığan makaslı sınıf, raf arası denetim için tercih edilir; geniş sevkiyat sahalarında ise bomlu sınıf daha uygun çalışır.",
            },
            {
                baslik: "Açık saha ve yükleme alanlarında aydınlatma-tabela",
                metin:
                    "OSB içindeki tesislerin giriş aydınlatması, tabela sistemleri ve açık saha projektörleri, düzenli kontrol edilmesi gereken dış kalemlerdir. Bu işler genellikle gündüz, sevkiyat trafiğinin göreceli sakin olduğu saatlere alınır. Zemin çoğunlukla stabilize veya beton olduğu için lastikli veya paletli bomlu makine rahatça manevra eder; sadece yağışlı günlerin ardından zeminin oturmasını beklemek gerekir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üretim koluna göre bakım penceresi",
                paragraflar: [
                    "Nizip OSB'deki tesis tiplerini ve bunların bakım pencerelerini aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Yoğun dönem", "Bakım penceresi", "Makine tercihi"],
                    satirlar: [
                        ["Plastik ekstrüzyon", "Yıl boyu sürekli", "Hat soğuma molası", "Standart makaslı"],
                        ["Ambalaj baskı-kesim", "Yıl boyu sürekli", "Kısa hat durması", "Dar gövdeli makaslı"],
                        ["Zeytinyağı işleme", "Hasat sezonu", "Sezon öncesi-arası", "Yüksek erişimli bom"],
                        ["Tarım ürünü deposu", "Hasat sonrası dolu", "Depo ara dönemi", "Dar koridor makaslı"],
                        ["Açık saha-tabela", "Sevkiyat saatleri hariç", "Gündüz sakin saat", "Lastikli-paletli bom"],
                    ],
                },
            },
            {
                baslik: "Merkeze mesafenin iş birleştirmeye etkisi",
                paragraflar: [
                    "Nizip, Gaziantep merkezine bir günlük gidiş-dönüşü zorlaştıracak kadar uzak olmasa da, tek kalemlik kısa bir iş için makine göndermek nakliye maliyetini orantısız büyütüyor. Bu yüzden ilçedeki müşterilerimize, mümkünse birden fazla bakım kalemini aynı haftaya toplamalarını öneriyoruz; aydınlatma, havalandırma ve sensör bakımı gibi farklı kalemler tek ziyarette art arda yapılabiliyor.",
                    "OSB içindeki komşu işletmelerin taleplerini birleştirmek de maliyeti düşüren bir diğer yol. Aynı hafta içinde farklı işletmelerden gelen çağrıları aynı güne yerleştirdiğimizde nakliye bedeli paylaşılıyor; bunu planlarken işletmelerin bize önceden haber vermesi büyük fark yaratıyor.",
                ],
            },
            {
                baslik: "Zeytin hasat sezonunun bakım takvimine etkisi",
                paragraflar: [
                    "Hasat sezonunda zeytinyağı işleme tesisleri neredeyse aralıksız çalışır ve bu dönemde planlı bakım için uygun pencere daralır. Sezon başlamadan önceki haftalarda yapılan bir kontrol turu, sezon ortasında çıkabilecek arızaların önemli bir kısmını önceden yakalar; bu yüzden hasat öncesi bakımı, ilçedeki işleme tesislerine her yıl hatırlatıyoruz.",
                    "Sezon ortasında acil bir arıza çıkarsa, tesisin üretim kaybını en aza indirmek için müdahaleyi öncelikli olarak planlıyoruz; ancak bu tür acil çağrıların maliyeti, önceden planlanmış bir bakımdan doğal olarak daha yüksek oluyor. Sezon öncesi turun ekonomik olarak da anlamlı olmasının nedeni budur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Plastik hattının sıcak olduğu bölgede çalışmak güvenli mi?",
                cevap:
                    "Hattın çalışma sıcaklığına ve makinenin çalışılacak noktaya olan mesafesine bağlı. Ekstrüzyon veya enjeksiyon hattının sıcak yüzeylerine doğrudan yakın çalışmak yerine, mümkün olduğunda hattın soğuma molasını veya planlı duruşunu bekliyoruz. Zorunlu hâllerde, sıcak yüzeyle sepet arasında güvenli mesafe bırakılır ve operatör için ısıya dayanıklı koruyucu ekipman kullanılır. Havalandırma fanı gibi doğrudan sıcak yüzeye temas etmeyen ama sıcak hava akımının etkilediği bölgelerde çalışma süresi kısaltılır ve sık mola verilir. Güvenlik konusunda taviz vermiyoruz; hat soğutulamıyorsa iş başka bir güne ertelenir.",
            },
            {
                soru: "Zeytinyağı tesisinde zemin kaygan oluyor, bu makineyi etkiler mi?",
                cevap:
                    "Etkiler, bu yüzden çalışmaya başlamadan önce zemin durumu kontrol edilir. Yağ sızıntısı olan bölgelerde tekerlek tutuşu ciddi ölçüde azalır ve makine kontrolsüz kayabilir. Standart uygulamamız, çalışma güzergâhındaki yağ izlerinin temizlenmesini istemek ve gerekiyorsa kendi ekibimizle bu temizliği yapmaktır. Temizlik mümkün değilse veya sürekli sızıntı olan bir bölgeyse, o alanda çalışmayı erteliyor ya da alternatif bir yaklaşım güzergâhı belirliyoruz. Tank üstü işlerde ayrıca sepetin tank gövdesine temas etmeyecek mesafede konumlanmasına özellikle dikkat ediyoruz.",
            },
            {
                soru: "Hasat sezonunda acil arıza çıkarsa ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Sezon içindeki acil çağrıları öncelikli olarak değerlendiriyoruz çünkü üretim kaybının maliyeti yüksek olabiliyor; elimizdeki uygun makineyle en kısa sürede sahaya çıkmaya çalışıyoruz. Ancak dürüst olmak gerekirse, sezonun en yoğun haftalarında bölgedeki talep de artıyor ve bu, müdahale süresini bir miktar uzatabiliyor. Bu riski azaltmanın en etkili yolu, sezon başlamadan yapılan önleyici kontrol turudur; bu tur sırasında aşınma sınırına yaklaşmış parçaları önceden tespit edip değiştirebiliyoruz, böylece sezon ortasında sürpriz arıza ihtimali düşüyor.",
            },
            {
                soru: "Ambalaj baskı hattımız renk hassasiyetine sahip; aydınlatma değişimi bunu etkiler mi?",
                cevap:
                    "Doğru soru, çünkü yanlış renk sıcaklığında bir armatür baskı kontrolünü yanıltabilir. Bu tesislerde aydınlatma değişimi yaparken, mevcut armatürlerin renk sıcaklığı ve ışık şiddeti değerini not alıyor, yenisini aynı özelliklere göre seçiyoruz; farklı bir ürün kullanılacaksa bunu önce sizinle onaylıyoruz. Değişim sonrası, baskı kontrol ekibinizin renk doğrulaması yapabilmesi için hattı kısa bir test turuyla devreye alıyoruz. Bu adım atlanırsa, aydınlatma teknik olarak sorunsuz olsa bile üretim kalite kontrolünde tutarsızlık çıkabilir; bu yüzden bu kontrolü teslimin standart parçası hâline getirdik.",
            },
            {
                soru: "OSB'deki birkaç komşu işletme birlikte makine kiralayabilir mi?",
                cevap:
                    "Evet, ilçede mesafe nedeniyle nakliye maliyeti öne çıktığından bu modeli aktif olarak öneriyoruz. Uygulaması basit: komşu işletmeler aynı haftaya denk gelen bir tarih belirler, biz makineyi o hafta bölgede tutup gün gün farklı tesislerde çalıştırırız. Nakliye bedeli paylaşılır, her işletme kendi kullandığı sürenin kira bedelini öder ve sözleşme her işletmeyle ayrı yapılır. Bunu organize etmek için işletmelerden birinin koordinasyonu üstlenmesi yeterli oluyor; kalan planlamayı biz üstleniyoruz. Bu modelin en çok işe yaradığı durum, birbirine yakın konumlanmış küçük-orta ölçekli tesislerin benzer bakım ihtiyaçlarının çakıştığı dönemler.",
            },
            {
                soru: "Depo dolu olduğunda raf denetimi hiç yapılamıyor mu?",
                cevap:
                    "Tamamen imkânsız değil ama sınırlı. Dolu bir depoda koridor genişliği yeterliyse görsel denetim yine yapılabilir; hasar tespiti ve genel durum kontrolü bu şekilde ilerler. Ancak hasarlı bir rafın onarımı veya değişimi için o bloğun boşaltılması neredeyse her zaman gerekir, çünkü müdahale sırasında rafın taşıdığı yükün güvenli şekilde yönetilmesi gerekir. Bu yüzden büyük onarım işlerini, depo dolulugunun göreceli düştüğü ara dönemlere planlamayı öneriyoruz; bu dönemi bilen taraf genellikle deponun kendisi olduğu için, o bilgiyi bizimle paylaşmanız planı büyük ölçüde kolaylaştırıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Nizip'in Gaziantep'in doğusunda tarım ve sanayi üretimini bir arada barındıran bir ilçe olduğu kamuya açık genel bilgidir. Sezona bağlı bakım penceresi, hasat dönemini gözlemleyen saha tekrarından türetilmiştir; fabrika adı geçmez.",
    },

    "bolge:kahramanmaras-osb-cevre-ili": {
        h1: "Kahramanmaraş OSB ve Çevre İllere Manlift Kiralama — Gaziantep Merkezli Sevkiyat",
        giris:
            "Gaziantep'te tuttuğumuz filo, şehir sınırlarının ötesine de hizmet verir; Kahramanmaraş ve çevresindeki sanayi bölgeleri, Gaziantep'e yakınlığı ve benzer iklim koşulları nedeniyle aynı merkezden makul bir sürede ulaşılabilen bir hizmet alanı oluşturur. Kahramanmaraş'ın kendi sanayi kimliği iplik ve tekstil üretiminde belirgindir; bunun yanında çelik konstrüksiyon, gıda ve un sanayisi de bölgede yer tutar. Bu profil, Gaziantep'teki halı ve dokuma ağırlıklı yapıya yakın ama birebir aynı değildir; iplik bükümü ve dokuma öncesi hazırlık süreçleri burada daha öne çıkar. İki şehir arasındaki iklim de benzer şekilde sıcak ve uzun yazla karakterizedir, bu yüzden dış saha ve çatı işlerinde uyguladığımız sıcaklık önlemleri il dışı işlerde de aynı titizlikle sürdürülür. Mesafe nedeniyle il dışı işlerde tek günlük kiralama yerine, birden fazla kalemin tek ziyarette toplandığı ve makinenin günler boyunca sahada kaldığı bir çalışma düzeni daha ekonomik ve daha gerçekçidir.",
        maddeler: [
            {
                baslik: "İplik büküm ve hazırlık tesislerinde tavan erişimi",
                metin:
                    "İplik üretiminin büküm ve hazırlık aşamalarının yapıldığı salonlarda, Gaziantep'teki dokuma hollerine benzer biçimde yüksek tavanlı ve geniş açıklıklı yapılar kullanılır. Bobin askı sistemleri, aydınlatma rayları ve toz emiş kanalları düzenli bakım gerektirir. Bu tesislerde çalışma, üretim akışının bobin değişim molalarına denk getirilerek yürütülür; makinenin koridor genişliğine uygun sınıftan seçilmesi, salon içi manevra açısından belirleyicidir.",
            },
            {
                baslik: "Çelik konstrüksiyon atölyelerinde vinç ve çatı işleri",
                metin:
                    "Çelik imalat yapan tesislerde tavan vinçleri ve çatı çelik konstrüksiyonu, düzenli denetim gerektiren ağır yapı elemanlarıdır. Vinç ray hizası ve kaynak dikişi kontrolleri, vinç durdurulup enerjisi kesildikten sonra yapılır; bu tesislerde tavan kotu yüksek olduğu için uzun erişimli makine sınıfı tercih edilir. Çatı üstü işlerde ise açık saha rüzgâr koşulları sahada ölçülerek değerlendirilir.",
            },
            {
                baslik: "Un ve gıda tesislerinde silo ve bant hattı bakımı",
                metin:
                    "Bölgedeki un ve gıda işleme tesislerinde silo üstü kapaklar, aktarma bantları ve toz toplama sistemleri, tahıl tozunun tutuşabilirlik riski gözetilerek yazılı izinli bir düzende bakım görür. Sıcak iş gerektiren kalemler alan temizlendikten ve emiş sistemi devreye alındıktan sonra yapılır. Bu tesislerde zemin genellikle sağlam beton olduğundan makine manevrası kolaydır, ancak silo yüksekliği makine seçimini doğrudan belirler.",
            },
            {
                baslik: "Sıcak yaz aylarında dış saha çalışma düzeni",
                metin:
                    "Kahramanmaraş ve çevresinde yaz, Gaziantep'e benzer şekilde uzun ve sıcak geçer; bu nedenle dış saha ve çatı işleri sabah erken saatlere kaydırılır, öğle saatlerinde iç mekân işlerine geçilir. Sepette çalışan personel için düzenli su molası ve mümkün olduğunda geçici gölgeleme uygulanır. Sıcaklığın aşırı yükseldiği günlerde açık saha çalışması kısaltılıp ertesi güne taşınabilir; bu esneklik teklif aşamasında baştan konuşulur.",
            },
            {
                baslik: "Uzun süreli il dışı kiralamada makine ve ekip düzeni",
                metin:
                    "İl dışı işlerde makine genellikle günler veya haftalar boyunca sahada kalır; bu düzende günlük kontrolleri kullanan tarafın yapması, periyodik bakımı ise bizim üstlenmemiz standart uygulamadır. Teslim anında makinenin fotoğraflı durumu karşılıklı imzalanan bir belgeye işlenir, dönüşte aynı belge üzerinden karşılaştırılır. Arıza durumunda önce telefonla yönlendirme denenir, çözülemeyen durumlarda teknik ekip yola çıkar ve bu süre kira takvimine yansıtılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kahramanmaraş sahasında en çok karşılaşılan iş grupları",
                paragraflar: [
                    "İl dışı taleplerde tesis türüne göre en sık talep edilen kalemleri ve bunların çalışma koşulunu aşağıda derledik.",
                ],
                tablo: {
                    basliklar: ["Tesis türü", "En çok istenen iş", "Zorlayan koşul", "Tercih edilen sınıf"],
                    satirlar: [
                        ["İplik büküm salonu", "Bobin askı, aydınlatma", "Dar koridor, nem", "Dar gövdeli makaslı"],
                        ["Çelik atölye", "Vinç ray denetimi", "Enerji kesme prosedürü", "Uzun erişimli bom"],
                        ["Un-gıda tesisi", "Silo kapağı, bant", "Toz-kıvılcım riski", "İzinli sıcak iş"],
                        ["Açık saha-çatı", "Kaplama, aydınlatma", "Rüzgâr, öğle sıcağı", "Bom, düşük kot"],
                    ],
                },
            },
            {
                baslik: "Yaz sıcağında sahaya varış saatinin kurgulanması",
                paragraflar: [
                    "Bölgeye giden ekip için gün, hava koşuluna göre tersine kurulur: nakliye ve kurulum gece serinliğinde tamamlanır, ilk çalışma bloğu gün ağarırken başlar. Öğleye doğru sıcaklık zirveye çıktığında ekip kapalı hol içindeki kalemlere geçer, açık saha işi ancak akşamüstü serinlemeyle yeniden başlar.",
                    "Bu tersine kurgu, yerel bir alışkanlık değil, il dışına giden her ekibin uyduğu sabit bir kural. Sahaya varmadan önce müşteriyle konuşulan tek soru, hangi kalemlerin gölgeli ya da kapalı alanda yapılabileceğidir; bu bilgi öğle programını doldurmayı kolaylaştırır.",
                ],
            },
            {
                baslik: "Nakliyenin tek seferde birden fazla tesise dağıtılması",
                paragraflar: [
                    "Aynı hafta içinde bölgede birden fazla çağrı biriktiğinde, makineyi tek nakliyeyle götürüp art arda farklı tesislerde çalıştırmak, her tesis için ayrı sevkiyat yapmaktan belirgin ölçüde ucuza geliyor. Bu düzende her tesisle sözleşme ayrı yapılır, yalnızca nakliye bedeli paylaşılır.",
                    "Bunu mümkün kılan şey önceden haber verilmesidir; talebini son ana bırakan bir tesis, o hafta zaten dolu olan bir programa eklenmek zorunda kalabilir. Bölgede çalışan komşu işletmelere aynı haftaya denk gelen talepleri bize önceden iletmelerini öneriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kahramanmaraş'a makine göndermeniz ne kadar tutar, minimum süre var mı?",
                cevap:
                    "Sabit bir minimum süre dayatmıyoruz ama mesafe nedeniyle nakliyenin kira bedeline oranı kısa işlerde yükseliyor; bu yüzden birkaç günlük veya haftalık bir program önermek çoğu zaman daha akılcı oluyor. Fiyatlandırmada nakliyeyi kira bedelinden ayrı bir satır olarak gösteriyoruz, böylece süreyi uzatmanın toplam maliyeti nasıl seyrelttiğini kendiniz görebiliyorsunuz. Elinizdeki iş listesini paylaşırsanız, hangi sürenin sizin için ekonomik eşiği geçtiğini hesaplayıp öneriyoruz; karar size kalıyor.",
            },
            {
                soru: "Yerel bir operatör tutmamız mı gerekiyor, siz mi gönderiyorsunuz?",
                cevap:
                    "İkisi de mümkün. Bölgede belgeli operatörünüz varsa makineyi operatörsüz teslim ediyor, kısa bir devir eğitimiyle kumandayı size bırakıyoruz. Belgeli personel yoksa operatörümüzü makineyle birlikte gönderiyoruz; bu durumda operatörün yol ve konaklama gideri teklifte ayrı gösteriliyor, kira bedeline gizlenmiyor. Kısa ve yoğun işlerde operatörlü çalışmak toplam süreyi kısalttığı için fark genelde kapanıyor; uzun süreli işlerde ise kendi personelinizi belgelendirmek daha ekonomik çıkıyor. Hangisinin sizin durumunuza uyduğunu keşif sonrası birlikte hesaplıyoruz.",
            },
            {
                soru: "İplik büküm salonunda makine bobin ipliğine zarar verir mi?",
                cevap:
                    "Doğru önlemlerle hayır. Sepetin bobin ipliklerine temas etmeyecek mesafede hareket etmesini sağlıyor, koridor darsa daha dar gövdeli makine seçiyoruz. Sepetten kullanılan alet ve malzeme bağlı tutulur, çünkü düşen bir parça ipliğe zarar verebilir. Ayrıca büküm salonlarının nem hassasiyeti olduğunda, kapıların gereğinden uzun açık tutulmamasına dikkat ediyoruz. Herhangi bir hasar tespit edilirse anında ilgili sorumluya bildiriyoruz; bu konuda saklama veya erteleme yapmıyoruz.",
            },
            {
                soru: "Vinçli çelik atölyesinde çalışırken üretim ne kadar durur?",
                cevap:
                    "Vinç durdurulup enerjisi kesilip kilitlenene kadar ray hattına yaklaşılamaz, bu prosedür kısa ama tesis düzenine göre biraz zaman alabilir. Bu yüzden bir kez durdurulduğunda ray hizası, kaynak dikişi, takoz kontrolü ve varsa aydınlatma işlerini aynı seansta bitirmeyi öneriyoruz; böylece ikinci bir duruş gerekmiyor. Vinç dışındaki genel üretim alanı, o bölgeye yakın olmadığı sürece durmadan devam edebiliyor. Toplam duruş süresini kısaltmak için, tesisin hangi vinç hattının ne zaman müsait olacağını önceden bilmemiz büyük fark yaratıyor.",
            },
            {
                soru: "Silo işinde tahıl tozu riski nasıl yönetiliyor?",
                cevap:
                    "Kıvılcım çıkarabilecek kesme, kaynak veya taşlama işleri, alan temizlenip toz yoğunluğu düşürülmeden ve emiş sistemi devreye alınmadan başlatılmıyor; bu tür işler tesisin kendi iş güvenliği prosedürüyle birlikte yazılı izinle yapılıyor. Sıcak iş gerektirmeyen görsel kontrol ve ölçüm işlerinde bu kısıt aynı katılıkta olmasa da, toz maskesi ve statik boşalmaya karşı önlemli ekipman standart olarak kullanılıyor. Bu konuda esneklik göstermiyoruz çünkü risk hem çalışan hem tesis için gerçek; her zaman tesisin kendi güvenlik ekibiyle koordineli hareket ediyoruz.",
            },
            {
                soru: "Öğle saatinde çalışma durursa o saatler için ücret kesiliyor mu?",
                cevap:
                    "Hayır, günün sıcak diliminde açık saha işini durdurup kapalı alan kalemine geçmek bizim standart programımızın bir parçası; bunun için ayrıca ücret talep etmiyoruz çünkü toplam gün içinde iş zaten planlanan kalemlerle dolduruluyor. Farklı olan tek durum, sıcaklığın günün tamamını etkileyip çalışmanın ertesi güne kaymasıdır; bu, makinenin sahada boşta beklediği bir gün anlamına gelir ve uzun süreli kiralamalarda bu tür günler için sözleşmede önceden belirlenmiş bir bekleme bedeli uygulanır. Bu ihtimali teklif aşamasında rakamla birlikte gösteriyoruz ki program kaydığında kimse şaşırmasın.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kahramanmaraş'ın iplik-tekstil, çelik ve gıda sanayisine sahip olduğu ile Gaziantep'e coğrafi yakınlığı kamuya açık genel bilgidir. Sıcak saatte program tersine çevirme, il dışı seferlerde tekrarlanan bir alışkanlıktır; işletme ismi kullanılmamıştır.",
    },
    "bolge:nizip": {
        h1: "Nizip Merkezde Randevulu Ortak Alan Manlift Programı",
        giris: "Nizip için bu kayıt, ilçe merkezinde ve organize sanayi sınırı dışında kalan ortak kullanım noktalarındaki kısa süreli yüksek erişim bakımını konu alır. Mevcut Nizip OSB sayfasındaki üretim süreçlerine girilmez; Canik içeriğinin ticari dış yüzey, çatı ve tanıtım elemanı yaklaşımı da kullanılmaz. Belirli kurum, yerleşke, meydan, mahalle, yapı veya işletme adı verilmez. Gerçek talep; yüksek aydınlatma, kamera, anons bileşeni, kablo geçişi, tavan donanımı ve benzeri küçük teknik kalemlerin sorumlu tarafça listelenmesiyle başlar. Buradaki temel mesele tek bir hedefin yüksekliği değil, kısa süreli saha randevusuna kaç doğrulanmış işin sığdırılabileceğidir. Kullanıcı yoğunluğu, servis saati, zorunlu geçişler, acil erişim ve teknik personel uygunluğu aynı takvimde buluşturulur. Platform sınıfı her durak için park yüzeyi, dikey mesafe, yatay engel, kapı ve dönüş ölçüsüyle teyit edilir. Makaslı veya eklemli seçenek ancak üretici verileri gerçek geometriyi karşılıyorsa programa alınır. Çalışma noktası geçici olarak ayrılır, kontrollü yaya yönü kurulur ve bakım tamamlanınca ortak kullanım sorumlusuna kayıtla geri verilir. Böylece makine gelişinin sabit maliyeti, acele edilmiş tek bir müdahale yerine hazırlanmış kalemlerin ölçülü biçimde kapatılmasına hizmet eder.",
        maddeler: [
            { baslik: "Bakım kalemlerini randevudan önce olgunlaştırmak", metin: "Saha sorumlusu yapılacak işleri konum, arıza belirtisi, gerekli teknik uzmanlık ve küçük parça ihtiyacıyla listeye alır. Her madde için yakın görüntü, çevreyi gösteren görüntü, yaklaşık dikey erişim, aşağıdaki kullanım ve enerjiyi güvenli duruma getirecek yetkili kişi kaydedilir. Yalnız ampul değişecek ya da kısa sürer gibi tarifler hazırlık sayılmaz. Yedek parçası, erişim şekli veya kabul sorumlusu belirsiz kalem randevuya koşullu yazılır. Hazır işler aynı platform kurulumundan yararlanabilecek kümelere ayrılır. Bu ön eleme, makine çalışırken eksik malzeme aramak yerine ayrılan zamanın teknik sonuca kullanılmasını sağlar." },
            { baslik: "Ortak kullanım saatinden bakım aralığı üretmek", metin: "Alanı kullananların geliş-gidiş biçimi sorumlu tarafça günün farklı dilimleri için değerlendirilir. Sürekli açık tutulması gereken geçitler, hizmet noktaları ve acil erişim önce haritada işaretlenir. Bakım ekibi insanların azaldığı, teknik görevlinin hazır bulunduğu ve geçici yönlendirmenin kurulabildiği aralığa çağrılır. Pencere başlangıcı yalnız saat değildir; alanın boşaltılması, enerjinin kontrolü ve malzemenin hazır bulunması da başlangıç koşuludur. Beklenmeyen yoğunluk oluşursa sepet yukarıda tutularak insanların arasından iş sürdürülmez. Program durdurulur, ortak alan güvenli kullanıma döndürülür ve kalan kalem uygun başka aralığa taşınır." },
            { baslik: "Yaya akışını durak durak yeniden kurmak", metin: "Her çalışma durağında taban alanı, yükselme zarfı ve küçük parça düşme olasılığı birlikte çevrilir. İnsanlara yalnız yasak çizgisi gösterilmez; anlaşılır ve erişilebilir bir alternatif yön sunulur. Alanın iki tarafından gelen hareket varsa gözcüler ortak iletişim yöntemi kullanır. Zorunlu bir geçiş açılacağı zaman platform aşağı alınır, kumanda güvenli duruma getirilir ve aletler sabitlenir. Bariyer içinden kestirme yapılmasına izin verilmez. Makine bir sonraki durağa giderken sepet kapalı konumda tutulur ve güzergâh önceden boşaltılır. Eski durağın ayrımı sökülmeden yeni noktada kontrolsüz ikinci bir sınır açılmaz." },
            { baslik: "Tek erişim penceresinde benzer işleri sıralamak", metin: "Aynı yükseklik bandında ve benzer yaklaşım geometrisindeki aydınlatma, kamera, anons veya kablo kontrolleri ardışık iş paketine alınabilir. Ancak yakın olmaları otomatik olarak aynı ekipmanla yapılabilecekleri anlamına gelmez. Her hedefte alt yüzey, üst engel, sepet içindeki kişi ve malzeme toplamı yeniden teyit edilir. Teknik uzman, platform park yerine gelmeden gerekli parçayı ve el aletini hazırlar. Sepet depo ya da taşıma arabası gibi doldurulmaz; yalnız o durağın yönetilebilir malzemesi alınır. Bir kalem beklenenden farklı çıkarsa bütün pencereyi tüketmesine izin verilmez; güvenli durum kaydedilip hazır sıradaki işe geçilir." },
            { baslik: "Ortak alanı kayıtlı biçimde geri vermek", metin: "Her durak sonunda sökülen parça ve el aletleri sayılır, yapılan müdahale ilgili teknik kişi tarafından işlev açısından kontrol edilir. Çalışma seviyesinde gevşek unsur kalmadığı gözlenir. Platform aşağı alınır, kullanılan bölüm temizlenir ve geçici yönlendirme ancak sorumlu kişi alanı kabul ettikten sonra kaldırılır. Tamamlanamayan madde için arıza durumu, bırakılan güvenli koşul ve sonraki ihtiyaç yazılır; bitmiş işaretlenmez. Günün sonunda kapanan ve ertelenen kalemler tek tutanakta ayrılır. Bu teslim, sonraki randevunun hangi hazırlıkla açılacağını gösterir ve ortak alanın kullanıcıya belirsiz durumda bırakılmasını önler." },
        ],
        ekBolumler: [
            { baslik: "Nizip ortak alan randevu tablosu", paragraflar: ["Tablo herhangi bir yerel kurumun envanteri değildir; bakım çağrısını hazırlık durumuna göre düzenleyen genel bir çalışma aracıdır."], tablo: { basliklar: ["Kalem durumu", "Randevu öncesi girdi", "Pencere içi karar", "Teslim kaydı"], satirlar: [["Hazır", "Görüntü ve parça tamam", "Sıraya al", "İşlev kabulü"], ["Ölçü eksik", "Yerinde teyit gerekli", "Koşullu beklet", "Yeni plan"], ["Geçişle çakışan", "Alternatif yön", "Sakin aralığa koy", "Akış açıldı"], ["Farklı geometri", "Ekipman zarfı", "Ayrı küme oluştur", "Sınıf notu"], ["Tamamlanamayan", "Güvenli bırakma", "Pencereyi tüketme", "Takip kartı"]] } },
            { baslik: "Teknik randevu dosyasının sahipliği", paragraflar: ["Ortak kullanım sorumlusu, alan takvimini ve kullanıcı bilgilendirmesini yönetir. Teknik görevli hedefi, enerjinin hangi yöntemle kontrol edileceğini, gerekli parçayı ve sonuç kabulünü tanımlar. Platform operatörü makinenin günlük kontrolünden ve üretici sınırları içindeki hareketten sorumludur. Gözcü ise ayrılan bölümün dış hareketle bozulmasını önler.", "Rollerin adı görevden önce yazılır. Telefonla randevu verilmiş olması hedefin hazır olduğu anlamına gelmez. Vardiya veya sorumlu değişirse iletişim bilgisi güncellenir. Yetkili kişi bulunmuyorsa enerjiye müdahale edilmez ve işlev kabulü yapılmadan kalem kapatılmaz. Bu ayrım, kısa işlerde sorumluluğun aceleyle birbirine aktarılmasını engeller." ] },
            { baslik: "Gezici programda makine sınıfı kontrolü", paragraflar: ["Birden fazla durak aynı gün ele alınacaksa en dar kapı, en küçük dönüş ve her park yüzeyi ayrı ölçülür. İlk noktaya uygun ünite sonraki noktada otomatik uygun sayılmaz. Makaslı sınıfta hedefin altında park, eklemli sınıfta üreticinin erişim zarfı aranır. İç ve dış koşul değişimi de yeni bir uygunluk değerlendirmesidir.", "Operatör her vardiya başında korkuluk, lastik, kumanda, acil indirme ve görünür sızıntıyı inceler. Durak değişiminde güzergâhın kullanıcı hareketinden ayrıldığı görülür. Şüpheli yüzey veya ölçüde hareket zorlanmaz. Programı tek güne sığdırmak, platformun kapasitesini ya da kullanım sınırını genişletmez." ] },
        ],
        sss: [
            { soru: "Nizip merkez için neden randevulu bakım öneriliyor?", cevap: "Ortak kullanım alanında makinenin kendisinden çok insan hareketi, teknik görevlinin uygunluğu ve geçici ayrımın kurulacağı zaman belirleyicidir. Önceden seçilen aralıkta hedefler boşaltılır, alternatif yaya yönü hazırlanır, gerekli parçalar getirilir ve sonuç kabulünü yapacak kişi hazır olur. Böylece kısa bir erişim işi, sahada karar bekleyen uzun bir kesintiye dönüşmez. Randevu yalnız saat vermek değildir; alan, yetki, malzeme ve ekipman koşullarının birlikte kapanmasıdır. Bu koşullardan biri eksikse iş aceleyle başlatılmaz." },
            { soru: "Bir randevuda birden fazla bakım işi yapılabilir mi?", cevap: "Evet; bu kaydın temel yaklaşımı hazırlanmış kalemleri tek erişim penceresinde birleştirmektir. Bunun için işler konum, geometri, teknik uzmanlık ve gereken küçük parçaya göre önceden kümelenir. Aynı makinenin her hedefe uyduğu varsayılmaz. Her durakta park yüzeyi, üst engel, dikey-yatay erişim ve sepet yükü tekrar kontrol edilir. Hazır olmayan ya da beklenmedik yöntem isteyen kalem bütün programı kilitlemez; güvenli durumuyla takip listesine alınır. Böylece makine süresi çok sayıda yarım girişime değil, kabul edilebilir tamamlanmış işlere ayrılır." },
            { soru: "İnsan geçişi tamamen kapatılamıyorsa çalışma olur mu?", cevap: "Çalışma zarfından uzak, anlaşılır ve erişilebilir bir alternatif yön kurulabiliyorsa alanın diğer kısmı kullanılabilir. Zorunlu yol platformun altından veya sepet hareketinin içinden geçiyorsa yükselme sürmez. Geçiş ihtiyacında platform aşağı alınır, aletler sabitlenir ve gözcü kontrollü açılış yapar. Bariyer altından insan geçirilmez. Acil erişim her zaman korunur. Alternatif yön oluşturulamıyorsa bakım, kullanıcı yoğunluğunun azaldığı başka bir randevuya taşınır. İşin kısa süreceği düşüncesi yaya ayrımını gereksiz kılmaz." },
            { soru: "Ortak alanlarda hangi platform seçilir?", cevap: "Seçim alanın adına göre değil, gerçek görev geometrisine göre yapılır. Dikey mesafe, yatay engel, makinenin duracağı yüzey, kapı, dönüş, üst açıklık ve sepetteki toplam yük ölçülür. Hedefin altında güvenli konum kurulabiliyorsa uygun makaslı; arada sabit unsur bulunuyorsa erişim zarfı yeterli eklemli seçenek değerlendirilebilir. Dış ortamda yüzey ve hava koşulları ayrıca ele alınır. Bir günlük gezici programda farklı sınıf gerektiren duraklar ayrı kümeye konur; korkuluk üzerinden uzanarak uyumsuzluk telafi edilmez." },
            { soru: "Hazır olmayan bir iş kalemi sahada eklenebilir mi?", cevap: "Yeni kalem önce sorumlusu, enerji kontrolü, gerekli parçası, erişim ölçüsü ve kullanıcı akışına etkisi bakımından değerlendirilir. Mevcut ekipman ve ayrılan zaman içinde güvenle hazırlanabiliyorsa görev kartına eklenebilir. Yalnız yakında bulunması veya basit görünmesi yeterli değildir. Ölçü, yetki ya da parça belirsizse güvenli durum kaydedilir ve sonraki randevu için hazırlık listesine alınır. Platformu bekletmemek adına kontrol yapılmadan yükselmek de pencereyi doldurmak adına yarım müdahale bırakmak da kabul edilmez." },
            { soru: "Teklif ve randevu için hangi bilgileri iletmeliyiz?", cevap: "Her bakım kaleminin konumunu, yakın ve çevresel görüntüsünü, yaklaşık dikey mesafesini, yatay engelini, altındaki kullanımı ve gerekli teknik uzmanlığı paylaşın. Kapılar, dönüşler, park yüzeyi, kullanıcı yoğunluğunun azaldığı zaman, korunması gereken geçitler ve enerji kontrolünü yapacak kişi eklenmelidir. Gerekli küçük parçanın hazır olup olmadığı da belirtilir. Konumun organize sanayi dışında olduğu netleştirilir. Bilgi sınırdaysa ön saha incelemesi yapılarak işler kümelenir, uygun platform sınıfı ve ortak alan randevusu kesinleştirilir." },
        ],
        kaynak: "Metin 13 Ağustos 2026 tarihinde Nizip ilçe merkezi ve OSB dışındaki ortak kullanım bakım programı için özgün olarak yazıldı. Genişleme belgesindeki ilçe ayrımı dışında yerel kurum, tesis, yer, yapı, kapasite veya sayısal saha verisi ileri sürülmemiştir. Randevu, iş birleştirme ve kayıtlı alan iadesi genel operasyon yaklaşımıdır.",
    },
    "bolge:islahiye-osb": {
        h1: "İslahiye OSB'de Yetkilendirilmiş Manlift Çalışma Alanı",
        giris: "İslahiye OSB için manlift uygulaması, Gaziantep'in batı aksındaki bir OSB sahasında işe başlanmadan önce kapanması gereken hazırlık kapıları üzerinden ele alınır. Belirli işletme, üretim kolu, bina ölçüsü veya kapasite hakkında iddia kurulmaz. Gerçek talepte işveren temsilcisi hedefi ve kapsamı tanımlar; tesisin iş güvenliği, teknik bakım ve bölüm sorumluları kendi yetkilerini yazılı iş planında netleştirir. Platform ancak hedef geometrisi, zemin, ortam, enerji izolasyonu, bölüm sınırı, personel görevi ve kurtarma düzeni doğrulandıktan sonra yükselir. Boş ve düz iç aksta uygun makaslı düşünülebilir; önünde kalıcı engel bulunan hedef için ise üretici erişim zarfı yeterli eklemli seçenek incelenir. Dış yüzeyde zemine ve hava koşuluna uyum ayrıca aranır. Ekipman seçimi OSB adına veya yaklaşık yüksekliğe göre yapılmaz. Platform yük kaldırma aracı değildir; ürün, palet veya tesis parçası taşımaz. Tesis hareketli ekipmanı ve enerjiyi güvenli duruma getirir, erişim ekibi günlük kontrol ile çalışma sınırını korur. Alanın açılması ve iş sonunda geri verilmesi iki ayrı imzalı eşik olarak düşünülür. Böylece batı aksı vurgusu, lojistik cümleleriyle değil, uzaktaki görevin sahaya gelmeden olgunlaştırılmış bir yetki ve teslim standardıyla karşılık bulur.",
        maddeler: [
            { baslik: "Görev yetkisini isim ve sınırla tanımlamak", metin: "İş kartında talebi açan, bölümü teslim eden, enerji güvenliğini doğrulayan, platformu kullanan, yerde gözcülük yapan ve teknik sonucu kabul eden roller ayrı yazılır. Bir kişinin birden fazla rol üstlenmesi ancak tesis prosedürü ve yetkinlik şartı uygunsa mümkündür; unvan üzerinden varsayım kurulmaz. Hedef, izin verilen iş, kullanılacak küçük malzeme, çalışma saati ve durdurma ölçütü kartta bulunur. Sepetteki ekip kapsamı kendiliğinden genişletemez. Yeni bir nokta çıktığında mevcut sözlü onay yeterli sayılmaz; hedefin geometrisi ve bölüm etkisi yeniden değerlendirilip görev kartına eklenir. Yetki zinciri açık değilse çalışma başlamaz." },
            { baslik: "Bölümü fiziksel ve işlevsel olarak izole etmek", metin: "Çalışma sınırı yalnız makinenin tabanına çizilmez; sepet hareketi, düşebilecek küçük parçalar, yakın kapılar, yaya yolu ve hareketli ekipmanın dönüş alanı birlikte kapsanır. Tesis, hedef altındaki proses ve enerjiyi kendi yöntemleriyle güvenli duruma getirir. Kilitleme, etiketleme veya başka bir kontrol gerekiyorsa uygulama ve doğrulama yetkisi tesise aittir. Bariyerin iki yanında sorumlu kişiler belirlenir. Komşu bölüm ancak ses, toz, yük hareketi veya araç rotası hücreye taşmıyorsa açık kalabilir. Güvenli ayrım oluşmuyorsa iş daha uygun bir bölüm duruşuna alınır; platformun hazır bulunması izolasyonun yerine geçmez." },
            { baslik: "Ekipman sınıfını görev zarfıyla teyit etmek", metin: "Her hedef için erişim kotu, yatay uzaklık, platformun duracağı yüzey, kapı ve dönüş, üst engeller, sepet yükü ve ortam koşulu kaydedilir. Makaslı sınıf dikey yükselir; hedefin altına güvenli park yoksa korkuluk üzerinden uzanılmaz. Eklemli sınıfta yatay erişim üreticinin çalışma diyagramından okunur. Dış saha için yürüyüş yüzeyi ve hava uygunluğu ayrıca incelenir. Akülü olması her kapalı veya özel ortama otomatik giriş sağlamaz. Personel, bağlı alet ve küçük parçaların toplamı kapasite hesabına girer. Aynı vardiyadaki farklı hedefler tek modele zorlanmaz; görev zarfı değişiyorsa sınıf kararı da yeniden açılır." },
            { baslik: "Başlangıç öncesi karşılıklı alan teslimi yapmak", metin: "Tesis sorumlusu bölümün boşaltıldığını, gerekli enerji kontrollerinin uygulandığını, geçişlerin yönlendirildiğini ve teknik personelin hazır olduğunu erişim ekibiyle birlikte gözler. Operatör platformun korkuluk, lastik, kumanda, acil indirme, görünür sızıntı ve üretici işaretlerini günlük kontrol kapsamında inceler. Zemin ve üst açıklık son kez sahada karşılaştırılır. Gözcü iletişim yöntemini ve acil durumda kimin hangi işlemi başlatacağını bilir. Bu iki kontrol tek bir genel onayda eritilmez: tesis alanı, operatör makineyi teslim eder. Her iki taraf hazır demeden sepet açılmaz ve başlangıç saati kayda girmez." },
            { baslik: "İşi bölüm iadesiyle kapatmak", metin: "Hedef tamamlandığında sepet aşağı alınır; alet, bağlantı elemanı ve sökülen parçalar sayılır. Teknik sorumlu yapılan işi ve üstte gevşek parça kalmadığını kontrol eder. Açık kalem varsa konumu, güvenli durumu ve gereken takip adımı yazılır; tamamlanmış gösterilmez. Zemin ve yakın ekipman temizlenir, platform bölüm sınırının dışına çıkarılır. Enerjinin veya prosesin yeniden devreye alınmasına yalnız tesis yetkilisi karar verir. Bariyer, teknik kabul ile alan temizliği birlikte kapanmadan kaldırılmaz. Sonraki hedef başka bölümdeyse eski izin taşınmaz; yeni bölüm kendi izolasyon ve teslim adımlarıyla açılır." },
        ],
        ekBolumler: [
            { baslik: "İslahiye OSB hazırlık kapıları tablosu", paragraflar: ["Bu tablo belirli bir tesis prosedürü değildir; gerçek iş planında yetkili kişilerce doldurulacak saha eşiklerini gösterir."], tablo: { basliklar: ["Kapı", "Doğrulanan konu", "Yetkili rol", "Geçiş ölçütü"], satirlar: [["Kapsam", "Hedef ve yapılacak iş", "İşveren temsilcisi", "Kart tamam"], ["İzolasyon", "Enerji ve hareket", "Tesis sorumlusu", "Bölüm ayrılmış"], ["Ekipman", "Geometri ve ortam", "Operatör", "Sınıf uygun"], ["Başlangıç", "Makine ve acil düzen", "Ekip ve gözcü", "Ortak teyit"], ["Kapanış", "Teknik sonuç ve temizlik", "Kabul sorumlusu", "Alan iade"]] } },
            { baslik: "Yetki matrisi ve değişiklik yönetimi", paragraflar: ["Yetki matrisi, kimin hedef tarif edeceğini, enerji kontrolünü kimin uygulayacağını, platformu kimin kullanacağını ve son kabulü kimin vereceğini açıklar. Telefonla gelen genel bir onay, sahadaki bölüm sahibinin tesliminin yerine geçmez. Vardiya değişiminde isimler ve iletişim yöntemi güncellenir; önceki ekibin sözü yeni başlangıç izni sayılmaz.", "Hedef, bölüm, çalışma yöntemi, sepet yükü veya çevre faaliyeti değişirse iş güvenli durumda tutulur. Değişikliğin ekipman zarfına ve izolasyon sınırına etkisi incelenir. Uygunsa kart revize edilir; uygun değilse farklı sınıf veya yeni zaman penceresi hazırlanır. Küçük görünen ek görevler kayıt dışında yapılmaz." ] },
            { baslik: "Kurtarma düzeni ve bölüm içi iletişim", paragraflar: ["Çalışma başlamadan önce acil indirme kumandasına erişebilen, makineyi tanıyan yerdeki kişi belirlenir. İletişim yöntemi gürültü ve görüş koşuluna uygun seçilir. Yardım çağrısının tesis içindeki hangi kanaldan yürütüleceği ve bölüm hareketinin nasıl durdurulacağı saha ekibince bilinir. Plan yalnız kâğıtta kalmaz; kumandaların erişilebilirliği günlük kontrolde görülür.", "Gözcü başka bir işle meşgul edilmez ve yetkisiz kişileri hücreye almaz. İletişim kesilirse operatör yeni komut beklemek için riskli konumda ilerlemez; hareket güvenli biçimde durdurulur. Olay veya olağan dışı durum sonrasında ekipman kullanılmadan önce tesis ve teknik sorumluların belirlediği inceleme tamamlanır." ] },
        ],
        sss: [
            { soru: "İslahiye OSB çalışmasında ilk onayı kim verir?", cevap: "Tek bir genel onay bütün aşamaları kapsamaz. İşveren temsilcisi hedef ve kapsamı tanımlar; tesisin bölüm sorumlusu alanı ve çevre hareketini teslim eder; enerji güvenliği yetkili tesis personelince doğrulanır; operatör de platformun günlük kontrolünü ve görev geometrisine uygunluğunu kabul eder. Sepet ancak bu kapılar aynı iş kartında kapandığında yükselir. Kişilerin unvanı veya önceki bir görevde verdikleri izin yeni iş için otomatik yetki değildir. Roller teklif ve hazırlık aşamasında isimlendirilirse sahadaki belirsizlik azalır." },
            { soru: "Bir bölüm çalışırken yan bölümde manlift kullanılabilir mi?", cevap: "Yalnız fiziksel ve işlevsel ayrım gerçekse değerlendirilebilir. Sepet zarfı, düşen cisim alanı, yaya geçişi, araç dönüşü, toz, ses ve hareketli proses komşu faaliyetten etkilenmemelidir. Hedef altındaki enerji tesis yöntemiyle güvenli duruma getirilir. Bariyerin korunmasından sorumlu kişiler belirlenir. Komşu çalışmanın hücreye ulaşması mümkünse ilgili faaliyet durdurulur veya yüksek erişim görevi başka pencereye alınır. Platformun hazır olması, üretim hedefi veya kısa iş süresi bölüm izolasyonunun yerine geçmez." },
            { soru: "Ekipman sınıfı nasıl kesinleştirilir?", cevap: "Hedef kotu ile yatay uzaklık, park yüzeyi, kapı ve dönüş, üst engeller, ortam, sepet yükü ve çevredeki tesisat birlikte ölçülür. Dikey yaklaşım mümkün olduğunda uygun makaslı; sabit engel arkasında erişim gerektiğinde çalışma diyagramı yeterli eklemli sınıf düşünülebilir. Dış yüzeyde zemin ve hava kullanımı ayrıca doğrulanır. Yalnız yaklaşık yükseklik ya da OSB adı seçim için yeterli değildir. Üretici verisi hedefle eşleşmiyorsa daha büyük görünen bir makineyi zorlamak yerine farklı sınıf veya yöntem seçilir." },
            { soru: "Sahada yeni bir hedef eklenebilir mi?", cevap: "Eklenebilir olması otomatik değildir. Yeni hedefin görev sahibi, bölüm etkisi, enerji durumu, park geometrisi, yatay erişimi, ortamı ve gerekli malzemesi yeniden incelenir. Mevcut platform üretici sınırları içinde uygunsa ve izolasyon genişletilebiliyorsa iş kartı yetkili kişilerce güncellenir. Sözlü rica veya hedefin yakında bulunması yeterli değildir. Farklı ekipman sınıfı, ek personel ya da başka bölüm duruşu gerekiyorsa yeni bir plan açılır. Mevcut hücrenin güvenliği korunmadan kapsam büyütülmez." },
            { soru: "İş bitince alan hemen üretime açılır mı?", cevap: "Sepetin inmesi tek başına bölüm iadesi değildir. Alet ve parçalar sayılır, teknik bağlantılar yetkili kişi tarafından kontrol edilir, üstte gevşek eleman kalmadığı gözlenir ve çalışma yüzeyi temizlenir. Açık iş güvenli durumuyla kaydedilir. Platform bölüm zarfının dışına çıkarıldıktan sonra tesis sorumlusu enerji veya prosesi kendi prosedürüyle devreye alır. Bariyer ancak teknik kabul, temizlik ve ekipman çıkışı birlikte tamamlandığında kaldırılır. Sonraki vardiya için eksik bilgi varsa alan bitmiş gibi teslim edilmez." },
            { soru: "Teklif öncesinde hangi bilgileri vermeliyiz?", cevap: "Hedefi hem yakından hem çevresiyle gösteren görüntüler; dikey ve yatay ölçüler; makinenin duracağı yüzey; kapılar, dönüşler, üst açıklık ve çalışma ortamıyla birlikte paylaşılmalıdır. Hangi bölümün etkileneceğini, hareketli ekipmanı, enerji kontrolünü, uygun duruş penceresini ve hedefi kabul edecek teknik rolü belirtin. Sepette bulunacak personel, alet ve küçük malzeme de yazılmalıdır. Tesisin giriş ve iş izni gereklilikleri güncel olarak yetkili taraftan alınır. Ölçü veya rol belirsiz kaldığında ekip sahayı görür; ardından yetki matrisi, izolasyon sınırı ve ekipman sınıfı karara bağlanır." },
        ],
        kaynak: "Bu sayfa 13 Ağustos 2026 günü sıfırdan kaleme alındı. Dayanağı, genişleme planında İslahiye OSB için verilen Gaziantep batı aksı ve saha planı yönüdür. Yerel bir kuruluş, faaliyet dalı, yol tarifi, uzaklık, zaman, üretim büyüklüğü, yapı ölçüsü ya da sayısal saha verisi ileri sürülmemiştir. Hazırlık kapıları ile bölüm iadesi, genel çalışma standardı olarak anlatılmıştır.",
    },
    "bolge:oguzeli": {
        h1: "Oğuzeli Havalimanı Aksında Planlı Platform Lojistiği",
        giris: "Oğuzeli için manlift hizmetini yalnız bir ilçeye makine gönderme işi olarak değil, havalimanı aksındaki hareket düzeniyle uyumlu bir erişim lojistiği olarak planlıyoruz. Belirli yol, tesis, mesafe, uçuş veya kapasite iddiası kurmadan; taşıyıcının kabulü, platformun güvenli indirilmesi, saha içi rota, çalışma penceresi ve geri alma adımlarını tek dosyada topluyoruz. Bu aks üzerindeki işletme, depo, hizmet yapısı veya cephe işi farklı koşullar taşıyabilir. Bu nedenle yalnız hedef yüksekliğiyle model seçilmez; yatay erişim, kapı, dönüş, zemin, araç-yaya hareketi ve işin malzemesi birlikte doğrulanır. Havalimanına yakınlık özel yetki veya kesintisiz erişim anlamına gelmez; güncel saha ve ilgili alan kuralları iş sahibi tarafından teyit edilir.",
        maddeler: [
            { baslik: "Sevkiyat dosyasını hareketten önce kapatmak", metin: "Talep; açık adres, saha irtibatı, hedef fotoğrafları, erişim kotu, yatay engel, kapı-dönüş, zemin, indirme alanı ve uygun zaman penceresiyle teknik karta dönüşür. Seçilen platformun kapalı ölçüleri, çalışma diyagramı ve taşıma biçimi üretici verileriyle karşılaştırılır. Taşıyıcının yaklaşabildiği nokta ile makinenin çalışacağı nokta aynı kabul edilmez; aradaki rota ayrıca incelenir. Giriş kaydı, kabul saati veya ek belge isteniyorsa işletme bunu hareketten önce bildirir. Eksik bilgi varken kesin saat sözü verilmez. Böylece araç yola çıktıktan sonra yanlış kapı, dolu indirme alanı veya uygun olmayan platform nedeniyle oluşan zincirleme bekleme azaltılır." },
            { baslik: "İndirme alanını aks trafiğinden ayırmak", metin: "Platform taşıyıcıdan indirilirken düz, taşıma gücü doğrulanmış ve diğer araçlarla yayalardan fiziksel olarak ayrılmış bir hücre gerekir. İşletmenin günlük giriş-çıkışı, servis hareketi veya mal kabulü aynı alanda sürüyorsa farklı saat ya da alternatif nokta seçilir. Rampa açıldığı sırada başka araç hücreye alınmaz. İndirme sonrasında lastik, korkuluk, kumanda, acil indirme ve görünür sızıntı kontrolü yapılır. Makine çalışma yerine sepet indirilmiş halde ilerler; kör dönüşte tesisin görevlendirdiği gözcü kullanılır. Havalimanı aksı vurgusu, hız uğruna bu kabul adımlarını kısaltmaz; tersine hareketlerin önceden zamanlanmasını gerektirir." },
            { baslik: "Saha içi rotayı güncel durumla doğrulamak", metin: "Keşif fotoğrafında boş görülen geçit iş günü park, istif veya geçici faaliyetle daralmış olabilir. Operatör güzergâhı saha sorumlusuyla yürür; kapı, eşik, eğim, üst engel ve dönüş alanını yeniden görür. Elektrikli modelin kapalı kullanıma uygunluğu ya da dış saha sınıfının zemindeki hareketi gerçek koşullara göre değerlendirilir. Sepet açıkken yol alınmaz, korkuluk üzerine çıkarak açıklık kazanılmaz ve makine sınır dışı manevraya zorlanmaz. Rota uygun değilse hedefe başka kurulum noktası, farklı sınıf veya yeni pencere aranır. Önceden yapılmış plan, sahadaki son güvenlik kararının yerine geçmez." },
            { baslik: "Çalışma penceresini işletme hareketiyle eşleştirmek", metin: "Cephe, aydınlatma, çatı altı veya üst bağlantı işi sırasında platform zarfına giren araç ve yaya hareketi durdurulur ya da başka koridora yönlendirilir. İşletme teknik alanı teslim eder, gerekli enerji ve ekipman güvenliğini kendi prosedürüyle sağlar. Platform personel yükseltir; yük, palet veya hacimli parça taşımaz. Teknik ekip, küçük malzeme ve bağlı el aletleri pencere başlamadan hazır edilir. Aynı park noktasından erişilen kalemler gruplanır, ancak yeni iş yalnız yakın olduğu için otomatik kapsama alınmaz. Pencere sonunda sepet indirilir, teknik kabul tamamlanır ve işletme akışı ancak çalışma çevresi boşaltıldıktan sonra yeniden açılır." },
            { baslik: "Dönüş ve değişiklik iletişimini planlamak", metin: "İşin erken bitmesi taşıyıcının anında gelebileceği, uzaması da makinenin kendiliğinden sahada kalabileceği anlamına gelmez. Geri alma; açık iş listesi, güvenli yükleme alanı, taşıyıcı uygunluğu ve saha çıkış prosedürüyle eşleştirilir. Kapsam, hava veya işletme programı değiştiğinde tek irtibat zinciri üzerinden taraflara bildirilir. Gece parkı gerekiyorsa düz ve korunaklı alan, yetkisiz kullanımı önleyen anahtar düzeni ve makineye uygun enerji şartı doğrulanır. Çıkışta görünür durum kontrolü ve teslim kaydı yapılır. Böylece aks üzerindeki program yalnız varış saatine değil, güvenli ayrılışa kadar yönetilir." },
        ],
        ekBolumler: [
            { baslik: "Oğuzeli platform lojistiği tablosu", paragraflar: ["Bu tablo belirli bir işletme veya havalimanı prosedürü değildir; genel sevkiyat ve saha kabul zincirini görünür kılar."], tablo: { basliklar: ["Aşama", "Gerekli veri", "Temel risk", "Kapanış"], satirlar: [["Teknik seçim", "Hedef ve geometri", "Yanlış model", "Diyagram doğrulaması"], ["Taşıma", "Adres, irtibat, kabul", "Kapıda bekleme", "Hareket teyidi"], ["İndirme", "Düz ayrılmış hücre", "Trafik kesişimi", "Makine kontrolü"], ["Çalışma", "Pencere ve iş listesi", "İşletme akışı", "Teknik kabul"], ["Geri alma", "Açık iş ve park", "Plansız bekleme", "Teslim kaydı"]] } },
            { baslik: "Havalimanı aksı ifadesinin sınırı", paragraflar: ["Bu ifade Oğuzeli sayfasının lojistik planlama açısını tarif eder; belirli bir tesisin güvenlik bölgesi, izin yöntemi veya çalışma saatleri hakkında varsayım oluşturmaz. İş gerçek bir kontrollü alanı etkiliyorsa güncel izinleri ve yetkili koordinasyonu iş sahibi sağlar. Platform ekibi yalnız kendi ekipman, operatör ve çalışma hücresi belgelerini sunar.", "Yakınlık, platformun her noktaya girebileceği anlamına gelmez. Giriş kısıtı, üst engel, zemin veya hareket düzeni uygun değilse farklı kurulum ya da tarih gerekir. Pazarlama ifadesi güvenlik kararının önüne geçirilmez; yalnız doğrulanan saha verisi teklife ve programa alınır." ] },
            { baslik: "Beklemeyi azaltan ortak saha kartı", paragraflar: ["Taşıma ekibi, operatör, teknik ekip ve işletme sorumlusu aynı günün farklı parçalarını yönetir. Ortak kartta kimlik ve giriş hazırlığı, indirme noktası, iç rota, hedef sırası, malzeme durumu ve kapanış irtibatı bulunur. Bir değişiklik olduğunda eski mesajlar arasında bilgi aranmaz; kart güncellenir.", "Makine hazır olduğu halde teknik parçanın gelmemesi veya çalışma alanının boşaltılmaması üretken süreyi düşürür. Bu nedenle hareket onayından hemen önce kısa bir hazır olma teyidi alınır. Teyit yalnız telefonla varış bildirmek değil, sahadaki koşulların gerçekten hazır olduğunu doğrulamaktır." ] },
        ],
        sss: [
            { soru: "Oğuzeli için kesin teslim saati verebilir misiniz?", cevap: "Makine, taşıyıcı, güncel yol ve saha kabul koşulları doğrulanmadan kesin saat verilmez. Program, işletmenin uygun çalışma penceresinden geriye doğru kurulur ve hareket öncesinde irtibat kişisiyle yeniden teyit edilir. Varış, platformun çalışmaya başladığı an değildir; güvenli indirme, görünür kontrol ve iç rota kabulü gerekir. Gecikme ihtimali ortaya çıkarsa tek iletişim hattından bildirilir. Havalimanı aksı ifadesi trafiğin veya erişimin kesintisiz olduğuna dair bir garanti oluşturmaz; yalnız planlamada hareket koordinasyonuna özellikle dikkat edildiğini belirtir." },
            { soru: "Havalimanına yakın sahalarda özel izinleri siz mi alıyorsunuz?", cevap: "İşin bulunduğu alan için gerekli güncel giriş, çalışma ve kamusal alan izinlerini iş sahibi veya yetkili işletme doğrular. Biz platformun teknik belgelerini, operatör gerekliliklerini ve çalışma hücresi planını sağlarız. Bir alanın özel kurallara tabi olup olmadığı adres ve saha sorumlusundan öğrenilir; internetten veya yakınlık varsayımından karar verilmez. İzin tamamlanmadan hareket ya da çalışma başlatılmaz. Bu içerik belirli bir havalimanı prosedürü tarif etmez ve herhangi bir kontrollü alana otomatik erişim taahhüdü vermez." },
            { soru: "Yalnız yüksekliği söylememiz model seçimi için yeterli mi?", cevap: "Hayır. Hedef kotuna ek olarak yatay uzaklık, önündeki sundurma veya başka engel, kapı, dönüş, zemin, üst açıklık ve sepetteki kişi-malzemeler bilinmelidir. Düz boş hedefte makaslı, engel arkasında eklemli bir sınıf düşünülebilir; kesin karar üretici çalışma diyagramı ve gerçek saha üzerinden verilir. Taşıyıcının indirme alanı da model kadar önemlidir. Bilgi sınırdaysa keşif yapılır. Daha yüksek görünen aracı göndermek, sahaya sığmadığında veya hedefe doğru açıyla erişemediğinde çözüm değildir." },
            { soru: "İşletme açıkken cephe veya aydınlatma işi yapılabilir mi?", cevap: "Çalışma hücresi araç, yaya ve işletme hareketinden fiziksel olarak ayrılabiliyorsa komşu alan kontrollü biçimde kullanılabilir. Platformun sepet zarfı, düşen cisim alanı veya makine hareketi girişle kesişiyorsa alternatif geçiş ve zaman gerekir. İnsanlar makinenin altından geçirilmez. Teknik ekip malzemeyi önceden hazırlar, iş sonunda kabul yapar. Güvenli ayrım kurulamıyorsa işlem düşük yoğunluklu saate veya duruşa alınır. İşletmenin açık kalma isteği makine çevresini daraltmak için gerekçe değildir." },
            { soru: "Platform sahada gece bırakılabilir mi?", cevap: "Sözleşme ve saha şartları uygunsa değerlendirilebilir. Düz, korunaklı ve yetkisiz kullanımdan güvenli park alanı; kontrollü anahtar yönetimi ve gerekiyorsa makineye uygun şarj düzeni bulunmalıdır. Kablo araç-yaya yoluna serilmez. Her yeni vardiyada günlük kontrol ve alan izni yenilenir; önceki günün koşulları değişmemiş sayılmaz. Bu şartlar sağlanmıyorsa geri alma veya farklı plan yapılır. Nakliye maliyetini azaltmak, kontrolsüz açık alanda makine bırakmayı haklı çıkarmaz." },
            { soru: "Teklif hazırlamak için hangi bilgileri göndermeliyiz?", cevap: "Açık adres, güncel saha irtibatı, hedefin yakın ve geniş açı fotoğrafları, erişim kotu, yatay engeller, zemin, kapı, dönüş ve indirme noktası gerekir. İşin türü, sepetteki kişiler ile küçük malzeme, işletmenin araç-yaya saatleri ve uygun tarih aralığı eklenir. Varsa giriş belgesi ve özel alan gerekliliği iş sahibi tarafından belirtilir. Yalnız Oğuzeli ya da havalimanı aksı demek model ve fiyat belirlemez. Bilgi tamamlandığında taşıma, çalışma ve geri alma aynı teklif varsayımlarıyla açıklanır." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Oğuzeli için havalimanı aksında platform lojistiği uygulama belgesindeki çapadır. Belirli yol, tesis, işletme, mesafe, süre, kapasite, uçuş veya rakam ileri sürülmemiştir.",
    },
    "bolge:gaziantep-ayakkabicilar-sanayi-sitesi": {
        h1: "Gaziantep Ayakkabıcılar Sanayi Sitesinde Yoğun Atölye Dokusu İçin Manlift",
        giris: "Gaziantep Ayakkabıcılar Sanayi Sitesinde manlift kullanımı, tek bir geniş fabrika sahasından farklı olarak çok sayıda atölye girişi, ortak geçiş, park ve günlük malzeme hareketinin iç içe olduğu yoğun dokuda planlanır. Belirli sokak ölçüsü, işletme sayısı, üretim kapasitesi veya tesis iddiası kurmadan; cephe, tabela, aydınlatma, çatı altı bağlantı ve atölye içi üst kot işlerini küçük ve kontrollü çalışma hücrelerine ayırıyoruz. Makinenin yalnız yüksekliği değil kapalı genişliği, dönüşü, kuyruk salınımı, zemini ve sepetin hareket zarfı değerlendirilir. Siteyi bütünüyle durdurma varsayımı yerine, komşu dükkânların girişlerini koruyan saatli ve adres bazlı bir servis planı hazırlanır.",
        maddeler: [
            { baslik: "Atölye önünü gerçek ölçülerle keşfetmek", metin: "Fotoğraf yalnız cepheyi değil, platformun geleceği yaklaşım yönünü, park alanını, komşu kapıları, üst engelleri ve zemin ayrıntılarını göstermelidir. Hedef kotu ile yatay uzaklık birlikte ölçülür. Dar görünen alanda küçük modelin otomatik olarak uygun olduğu düşünülmez; çalışma diyagramı hedefe yetmeyebilir. Eklemli makinede kuyruk ve sepet zarfı, makaslıda düz kurulum ve yükselme alanı ayrıca kontrol edilir. Park edilmiş araçların iş günü kaldırılacağı yalnız sözlü varsayım olarak bırakılmaz; saha sorumlusu teyit eder. Model, katalog yüksekliğine göre değil bütün bu geometriye göre seçilir." },
            { baslik: "Ortak geçişte mikro çalışma hücresi kurmak", metin: "Bir atölyenin önü kapatıldığında komşu işletmenin müşteri, çalışan veya malzeme geçişi etkilenebilir. Bariyer yalnız makinenin tekerlek çevresine değil sepetin hareket ve düşen cisim alanına göre kurulur. İnsanlar platformun altından geçirilmez; zorunlu geçişte sepet tamamen indirilir ve operatör hareketi durdurur. Forklift, transpalet ve araçlar aynı dar hücrede eş zamanlı çalışmaz. Alan bütünüyle ayrılamıyorsa daha sakin bir pencere seçilir. Kısa tabela veya lamba işi olduğu gerekçesiyle hücre küçültülmez; yoğun dokuda asıl risk işin süresinden çok çevredeki beklenmeyen harekettir." },
            { baslik: "Atölye içi üst kotu üretimden ayırmak", metin: "İçeride aydınlatma, havalandırma, kablo veya çatı altı bağlantısına erişilecekse makinenin kapıdan geçişi, dönüş alanı, zemin ve ortam koşulu doğrulanır. İşletme hareketli ekipmanı ve gerekli enerjiyi kendi prosedürüyle güvenli duruma getirir. Üretim malzemesi ile platform rotası ayrılır; makine yük veya ürün taşımak için kullanılmaz. Kapalı alanda uygun enerji sınıfı ve havalandırma değerlendirilir. Teknik ekip ile parça pencere başlamadan hazır olur. Platform tamamen indikten, aletler sayıldıktan ve hedef teknik sorumlu tarafından kabul edildikten sonra hücre yeniden kullanıma açılır." },
            { baslik: "Tabela ve cephe malzemesini platformdan ayırmak", metin: "Hacimli tabela kasası, uzun profil, cam veya geniş levha personel yükseltici platformla kaldırılmaz. Bu parçalar korkuluk güvenliğini, dengeyi ve rüzgâr etkisini değiştirebilir. Malzeme uygun kaldırma yöntemiyle hedefe getirilip sabitlenir; manlift personeli bağlantı noktasına eriştirir. Sepette yalnız üretici sınırları içindeki kişiler, bağlı el aletleri ve yönetilebilir küçük parçalar bulunur. Kesme, delme veya sıcak iş gerekiyorsa atölyenin malzemeleri, toz ve yangın riski ayrıca ele alınır; izin ve koruma tamamlanmadan başlanmaz. Erişim aracı, teknik işin bütün risklerini kendiliğinden çözmez." },
            { baslik: "Birden çok atölyeyi kontrollü sıraya koymak", metin: "Aynı sitedeki birkaç hazır talep, makine sınıfı ve servis penceresi uyuyorsa aynı programda değerlendirilebilir. Ancak her adres için ayrı fotoğraf, sorumlu, alan teslimi ve kapanış kaydı gerekir. İlk atölyedeki ek işin sonraki işletmenin saatini sessizce tüketmesine izin verilmez; değişiklik ilgili kişilere bildirilir. Platform sepet indirilmiş halde ve ayrılmış rota üzerinden taşınır. Yakınlık, bütün cephelerin aynı araçla erişilebilir olduğunu göstermez. Toplulaştırma nakliye verimini artırabilir, fakat uygunsuz modeli zorlamak veya çevre kontrolünü atlamak için kullanılmaz." },
        ],
        ekBolumler: [
            { baslik: "Yoğun atölye sahası kontrol tablosu", paragraflar: ["Her atölye için aynı kontrol başlıkları ayrı ayrı kapatılır; bir dükkânın onayı komşu alanın yerine geçmez."], tablo: { basliklar: ["Kontrol", "Gerekli bilgi", "Yoğun dokudaki risk", "Çözüm"], satirlar: [["Geometri", "Kot, yatay engel, dönüş", "Makinenin sığmaması", "Diyagram ve ölçü"], ["Ortak geçiş", "Yaya-araç saatleri", "Hücreye giriş", "Bariyer ve pencere"], ["Atölye içi", "Kapı, zemin, ortam", "Üretim kesişimi", "Alan teslimi"], ["Malzeme", "Parça ve teknik yöntem", "Sepeti yük aracı sanmak", "Ayrı kaldırma planı"], ["Adres sırası", "Sorumlu ve hazır olma", "Zincirleme gecikme", "Ayrı kabul kaydı"]] } },
            { baslik: "Komşu işletme iletişimi", paragraflar: ["Çalışma zarfı bir başka kapıyı, park yerini veya geçişi etkiliyorsa saha sorumlusu komşu kullanıcıları önceden bilgilendirir. Platform ekibi site adına alan kapatma yetkisi varsaymaz. Ortak alanın kullanılabilirliği ve gereken güncel izinler iş sahibi tarafından doğrulanır.", "Program sırasında beklenmeyen bir araç veya yük hareketi hücreye yaklaşırsa sepet güvenli konuma alınır ve hareket durur. Gözcü, bariyerin yerine geçmez; görüşün sınırlı olduğu anda operatöre destek olur. Alan yeniden ayrılmadan iş devam etmez." ] },
            { baslik: "Gün sonu açık iş ve park düzeni", paragraflar: ["Her adreste tamamlanan, ertelenen ve yeni keşfedilen işler ayrılır. Teknik hedef işletme sorumlusuna teslim edilir; platform sonraki atölyeye geçmeden önce alet, korkuluk ve görünür durum kontrolü yapılır. Sözlü olarak bitmiş sayılan iş, sonraki gün tartışma ve tekrar ziyaret yaratabilir.", "Makine gece sitede kalacaksa ortak geçişten uzak, düz ve yetkisiz kullanıma karşı güvenli park noktası gerekir. Anahtar yönetimi ve gerekiyorsa uygun şarj koşulu yazılır. Böyle bir alan yoksa dönüş planı yapılır; yoğun dokuda makineyi rastgele bir dükkân önünde bırakmak kabul edilmez." ] },
        ],
        sss: [
            { soru: "Dar atölye sokağı için en küçük manlift yeterli olur mu?", cevap: "Her zaman değil. Küçük kapalı ölçü geçişi kolaylaştırabilir, fakat platformun çalışma diyagramı hedef kotuna ve yatay uzaklığa yetmelidir. Dönüş, kuyruk salınımı, sepet zarfı, zemin ve üst engeller de değerlendirilir. Fotoğraf ve ölçüyle uygun seçenekler elenir; sınırdaysa yerinde keşif yapılır. Sığan ama hedefe erişmeyen bir makine çözüm değildir. Aynı şekilde yüksek erişimli fakat güvenli kurulum alanı bulamayan model de gönderilmez. Seçim, bütün hareket geometrisine göre yapılır." },
            { soru: "Atölyemiz açıkken manlift çalışabilir mi?", cevap: "Platform hücresi müşteri, çalışan, araç ve malzeme hareketinden fiziksel olarak ayrılabiliyorsa komşu faaliyet kontrollü sürdürülebilir. Giriş veya üretim yolu sepet zarfıyla kesişiyorsa alternatif geçiş gerekir. İnsanlar yükseltilmiş sepet altından geçirilmez. Zorunlu geçişte sepet tamamen iner ve makine hareketi durur. İç işlerde işletme enerji ile hareketli ekipmanı kendi güvenlik yöntemiyle duruma getirir. Güvenli ayrım kurulamıyorsa daha sakin saat seçilir; açık kalma isteği bariyer alanını küçültmez." },
            { soru: "Tabelayı manlift sepetinde yukarı çıkarabilir miyiz?", cevap: "Hacimli tabela, uzun profil, cam veya geniş levha personel platformunda taşınmaz. Bu yükler korkuluk dışına uzanabilir, dengeyi bozabilir ve rüzgâr yüzeyi oluşturabilir. Uygun malzeme kaldırma yöntemi ayrı planlanır; tabela güvenli konuma getirildikten sonra manlift montaj personeline erişim sağlar. Sepette yalnız üretici sınırındaki kişi, bağlı el aleti ve küçük yönetilebilir parçalar bulunur. Teknik iş ekibi bağlantı yöntemi ile malzeme sorumluluğunu üstlenir; manlift yük vinci ya da forklift yerine geçmez." },
            { soru: "Birkaç dükkân birlikte kiralama yapabilir mi?", cevap: "Talepler aynı makineye uygun, alanları hazır ve zamanları gerçekçi biçimde sıralanabilir ise ortak servis programı değerlendirilebilir. Her dükkânın hedefi, fotoğrafı, sorumlusu ve kabul kaydı ayrı tutulur. Bir adresteki gecikme sonraki işletmeye bildirilir; kapsam habersiz genişletilmez. Makinenin atölyeler arasındaki güvenli rotası da doğrulanmalıdır. Yakın adresler otomatik olarak aynı araçla erişilebilir sayılmaz. Toplulaştırma nakliye verimi sağlar, ancak fiyat ve süre ancak bütün teknik kartlar kapandıktan sonra kesinleşir." },
            { soru: "Ortak alan veya park yeri için izni kim düzenler?", cevap: "Alanı kullanma ve gerekli güncel izinleri doğrulama sorumluluğu iş sahibine veya yetkili site yönetimine aittir. Platform ekibi makinenin çalışma zarfını, bariyer gereksinimini ve tahmini pencereyi bildirir. Park edilmiş araçların kaldırılması, komşu girişlerin yönlendirilmesi ve saha teslimi yerel sorumlu tarafından organize edilir. İzin varlığı güvenli zemin anlamına gelmez; operatör kurulum noktasını ayrıca kontrol eder. Yetki veya alan teslimi belirsizse çalışma başlatılmaz ve yeni pencere hazırlanır." },
            { soru: "Teklif için hangi bilgileri paylaşmalıyız?", cevap: "Atölyenin açık konumu, yakın ve geniş açı fotoğrafları, erişim kotu, yatay engeller, kapı, dönüş, zemin ve hedefin türü gerekir. Müşteri, çalışan, araç ve malzeme hareket saatleri; komşu girişler; sepette bulunacak kişiler ile küçük parçalar eklenir. İç işte ortam ve üretim güvenliği, cephede tabela veya levha için ayrı kaldırma yöntemi belirtilir. Birden fazla dükkân varsa her biri ayrı teknik kartla bildirilir. Yalnız sanayi sitesi veya tabela işi demek uygun model, süre ve fiyatı belirlemek için yeterli değildir." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Gaziantep Ayakkabıcılar Sanayi Sitesi için yoğun atölye dokusunda manlift kullanımı uygulama belgesindeki çapadır. Belirli sokak, işletme, atölye sayısı, ölçü, kapasite veya rakam kullanılmamıştır.",
    },
};
