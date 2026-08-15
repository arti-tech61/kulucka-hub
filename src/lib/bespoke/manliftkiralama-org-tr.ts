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

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Gaziantep'te Sepetli Örümcek Platform Kiralama",
        giris:
            "Gaziantep'in üretim dokusu iki farklı erişim problemi doğurur: bir yanda GAOSB'nin dokuma salonları, boyahaneleri ve iplik depoları gibi geniş ama tezgah, boru ve raf diziliyle sıklaşmış iç mekanları; diğer yanda Şahinbey ve Şehitkamil'in dar sokaklı çarşı dokusunda araç geçişi kısıtlı imalathaneler ve dükkanlar. Standart tekerlekli makaslı veya bomlu platformun gövde genişliği, dönüş yarıçapı veya kapı yüksekliği bu noktaların bir kısmına yetmez. Örümcek (sepetli tırmanan) platform, paletli veya dar tekerlekli yürüyüş takımı, katlanabilir kolları ve tek kapı genişliğinden geçebilen gövdesiyle tam bu boşluğu doldurur; dar bir dükkan kapısından içeri girip zemin katta açılabilir, ya da dokuma salonunun tezgah sıraları arasında sepet genişliğini aşmadan ilerleyebilir. Makinenin ayak izi hafif olduğu için parke, mermer veya hassas boyalı zeminlerde de standart lastik tekerlekli makinelere göre daha az risk taşır. Bu sayfada örümcek platformun Gaziantep'teki tekstil, gıda ve ticaret dokusunda hangi dar noktalarda tercih edildiğini ve seçim mantığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Dar kapı ve merdiven boşluğundan geçiş",
                metin:
                    "Şahinbey ve Şehitkamil'deki eski yapılı dükkan ve imalathanelerin giriş kapıları çoğunlukla standart bir kişi genişliğine yakındır; hatta bazı çarşı dükkanlarında iç mekana ulaşmak için dar bir merdiven boşluğu da aşılması gerekir. Katlanmış hâldeki örümcek platform bu genişliğe sığacak ölçüde daralabilir ve tekerlekleri merdiven basamağı yüksekliğini tolere edecek şekilde ayarlanabilir. İçeri girdikten sonra kollar açılır ve iş normal bir platform gibi ilerler. Standart makaslı platform için bu geçiş neredeyse hiçbir zaman mümkün değildir.",
            },
            {
                baslik: "Boyahane baca dibi ve dar servis koridorları",
                metin:
                    "GAOSB'deki boyahanelerde baca ve fan sistemlerine servis koridorundan erişilir; bu koridorlar genellikle boru hatları ve elektrik kablo tavaları ile daralmıştır. Standart gövdeli bir makine bu koridora giremediğinde iş ya iskele kurularak ya da örümcek platformla yapılır. Örümcek platformun kolları, boru hattının üzerinden veya yanından dolanarak baca dibine ulaşabilir; bu esneklik dar servis koridorunda büyük fark yaratır.",
            },
            {
                baslik: "Halı ve tekstil showroomlarında dar teşhir köşeleri",
                metin:
                    "Şahinbey'deki halı ve tekstil showroomlarının bazı teşhir köşeleri, raf düzeni veya sütun aralığı nedeniyle standart platformun manevra yapamayacağı kadar dardır. Örümcek platform bu köşelerde tek noktadan içeri girip kollarını hedefe doğru uzatabildiği için ürüne temas riskini de düşürür; gövde ürünlerden uzakta durup yalnızca kol hedefe yaklaşır.",
            },
            {
                baslik: "Tarihi çarşı dokusunda dükkan içi tavan işleri",
                metin:
                    "Kapalı çarşı çevresindeki bazı dükkanlarda tavan aydınlatması veya küçük tadilat işi, dükkanın kendisi dar olduğu için zemin alanının büyük kısmını kaplayacak bir makineyle yapılamaz. Örümcek platform, dükkanın bir köşesine sığacak ayak izi ile kurulup diğer köşedeki hedefe kolunu uzatabilir; bu sırada dükkanın geri kalanı kullanılabilir kalır.",
            },
            {
                baslik: "Hassas zeminde hafif ayak izi",
                metin:
                    "Showroom, otel lobisi veya yeni döşenmiş parke zeminlerde ağır bir makinenin tekerlek izi bırakma riski vardır. Örümcek platformun ayak destekleri geniş bir alana yayıldığı ve nokta basıncı düşük olduğu için bu tür zeminlerde standart tekerlekli makinelere göre daha güvenli bir seçenektir; yine de hassas zeminlerde ek koruma plakası kullanmayı öneriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekan tipine göre örümcek platform avantajı",
                paragraflar: [
                    "Gaziantep'te örümcek platformun standart platforma göre öne çıktığı durumları aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Mekan tipi", "Kısıt", "Örümcek avantajı", "Not"],
                    satirlar: [
                        ["Dar çarşı dükkanı", "Kapı genişliği", "Katlanarak geçiş", "Merdiven varsa önceden bildirin"],
                        ["Boyahane koridoru", "Boru-kablo dolu koridor", "Kol hedefe uzanır", "Gövde koridor dışında kalabilir"],
                        ["Showroom köşesi", "Sütun-raf aralığı", "Ürüne temas etmeme", "Tek noktadan kurulum"],
                        ["Tarihi doku dükkan", "Küçük zemin alanı", "Köşede kurulum, geri kalan alan açık", "Elektrik gerekebilir"],
                        ["Hassas zemin (parke/mermer)", "İz bırakma riski", "Hafif ayak izi", "Yine de koruma önerilir"],
                    ],
                },
            },
            {
                baslik: "Kapı ve koridor ölçümü keşif aşamasının parçası",
                paragraflar: [
                    "Örümcek platform dar alanlara sığsa da sınırsız değildir; katlanmış gövde ölçüsü, ağırlığı ve kol açılım uzunluğu modelden modele değişir. Bu yüzden keşif aşamasında kapı genişliğini, varsa merdiven basamak yüksekliğini ve zemin dayanımını yerinde ölçüyoruz; telefonla verilen tahmini ölçüye göre makine göndermiyoruz, çünkü yanlış tahmin hem müşterinin hem bizim zamanımızı boşa harcar.",
                    "Bazı çok dar dükkanlarda hiçbir tekerlekli platform sığmaz; bu durumda dürüstçe alternatif öneriyoruz, örneğin taşınabilir merdiven-platform kombinasyonu. Sığmayan bir makineyi zorla sokmaya çalışmak hem yapıya hem makineye zarar verebilir.",
                ],
            },
            {
                baslik: "Dar alanda operatör güvenliği",
                paragraflar: [
                    "Dar mekanlarda çalışmanın kendine özgü riskleri vardır: kolun hareket alanı sınırlı olduğu için çevredeki raf, duvar veya ürüne temas riski artar. Bu yüzden dar alan işlerinde operatör hareketi yavaş ve kontrollü tutulur, gerekiyorsa yerde bir yardımcı kişi kol hareketini izler ve gerektiğinde uyarır.",
                    "Ayrıca dar alanda acil durdurma ve iniş prosedürünün net olması önemlidir; işe başlamadan önce operatör ve saha sorumlusu bu prosedürü birlikte gözden geçirir. Elektrik hattı yakınında çalışılıyorsa, hattın kesilip kesilmediği ayrıca teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform gerçekten normal bir dükkan kapısından geçebiliyor mu?",
                cevap:
                    "Çoğu modelde evet, ama bu kesin bir kural değil; katlanmış hâldeki genişlik ve yükseklik modelden modele değişir. Bu yüzden telefonda kesin bir cevap vermek yerine, kapı genişliğini ve varsa yükseklik kısıtını sizden net ölçüyle istiyoruz, mümkünse fotoğrafla birlikte. Ölçü uyuyorsa makineyi katlı hâlde içeri sokup dükkan içinde açıyoruz. Uymuyorsa, dükkanın büyüklüğüne göre alternatif bir erişim yöntemi öneriyoruz; sığmayan bir makineyi zorlamak hem kapı çerçevesine hem makineye zarar verebileceği için bunu hiç denemiyoruz.",
            },
            {
                soru: "Boyahanenin dar koridorunda çalışırken boru hatlarına zarar verme riski var mı?",
                cevap:
                    "Dikkatli planlamayla bu risk düşük, ama sıfır değil, bu yüzden ciddiye alıyoruz. İşe başlamadan önce koridordaki boru ve kablo tavalarının konumunu birlikte gözden geçiriyoruz, kolun hareket yolunu bu engellerden uzak tutacak şekilde planlıyoruz. Kolun hareket hızı dar alanlarda düşük tutulur ve mümkünse yerde bir yardımcı kişi hareketi izler. Isıtmalı veya basınçlı hatlara yakın çalışılıyorsa, tesisin kendi teknik ekibinden hattın durumu hakkında bilgi alıyoruz. Zarar riski taşıyan bir nokta varsa işi orada durdurup alternatif bir yaklaşım açısı arıyoruz.",
            },
            {
                soru: "Showroomdaki ürünlere yakın çalışırken hasar olursa ne oluyor?",
                cevap:
                    "Bu ihtimali azaltmak için önce çalışma alanındaki ürünleri birlikte kayıt altına alıyoruz, sonra kolun hareket güzergahını ürünlerden güvenli mesafede tutuyoruz. Örümcek platformun avantajı, gövdenin ürünlerden uzakta sabit kalıp yalnızca ince kolun hedefe yaklaşmasıdır, bu da temas riskini standart platforma göre azaltır. Buna rağmen bir hasar oluşursa, saklamak yerine anında bildirip sorumluluk sürecini birlikte yürütüyoruz; bu koşullar teklif aşamasında konuşuluyor.",
            },
            {
                soru: "Örümcek platform için elektrik veya özel bir güç kaynağı gerekiyor mu?",
                cevap:
                    "Çoğu model akülü olduğu için bağımsız çalışır ve dükkan içinde ayrı bir elektrik hattına ihtiyaç duymaz; bu da iç mekan işlerinde önemli bir avantajdır çünkü egzoz emisyonu da yoktur. Akü kapasitesi işin süresine göre planlanır; uzun süren işlerde şarj için bir prizin erişilebilir olması istenir. Bazı büyük modellerde şarj kablosunun uzunluğu sınırlı olabileceğinden, en yakın prizin konumunu keşifte kontrol ediyoruz.",
            },
            {
                soru: "Dar sokaklarda hiçbir makine sığmazsa ne yapıyorsunuz?",
                cevap:
                    "Bu durumda dürüstçe söylüyoruz: bazı çok dar tarihi doku sokaklarında ne örümcek ne de başka bir tekerlekli platform giremiyor. Böyle bir durumda ya taşınabilir merdiven-platform kombinasyonu öneriyoruz ya da işin büyüklüğüne göre farklı bir erişim yöntemine yönlendiriyoruz. Sığmayacağı belli olan bir makineyi göndermek hem sizin hem bizim zamanımızı boşa harcar; bu yüzden şüpheli durumlarda önce telefonla veya fotoğrafla ön değerlendirme yapıyoruz.",
            },
            {
                soru: "Örümcek platform normal makaslı platforma göre daha mı yavaş çalışır?",
                cevap:
                    "Kurulum ve dar alan manevrası biraz daha zaman alabilir, çünkü katlanmış hâlden açılıp konumlanma süreci standart platforma göre bir adım fazladır. Ancak asıl kazanç, hiç erişilemeyecek bir noktaya erişebilmesidir; alternatifi iskele kurmak olan bir iş için örümcek platform çoğu zaman toplamda daha hızlı ve ucuzdur. Basit ve geniş alanlı bir iş için ise standart makaslı platform hem daha hızlı hem daha ekonomiktir; hangi işin hangi makineye uygun olduğunu keşifte birlikte belirliyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in GAOSB dokuma-boyahane dokusu ve Şahinbey-Şehitkamil'in tarihi çarşı dokusu daha önceki bölge sayfalarında da işlenen, kamuya açık coğrafi/sektörel bilgidir. Örümcek platformun teknik geçiş mantığı genel ekipman bilgisidir; dar alan senaryoları sahadaki tekrarlı iş türlerinden çıkarılmıştır, belirli dükkan veya tesis adı verilmez.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Gaziantep'te Manlift Nakliye ve Teslimat Hizmeti",
        giris:
            "Gaziantep'te manlift nakliyesini sıradan bir şehir içi teslimattan ayıran şey, GAOSB'nin tek bir kapıdan girilen kompakt bir alan olmayıp, farklı dönemlerde kurulmuş ve genişlemiş, birbirine yakın ama ayrı bölgelerden oluşan geniş bir sanayi ağı olmasıdır. Bir makinenin bir bölgeden diğerine taşınması, kentin merkezinde birkaç kilometre gitmekten daha uzun sürebilir, çünkü OSB içi trafik, TIR ve konteyner yoğunluğu ile kesişir. Buna ek olarak Nizip gibi merkeze belirli bir mesafedeki ilçelerde tek kalemlik bir iş için makine göndermek, nakliye maliyetini orantısız büyütür; bu yüzden nakliye planlamamız yalnızca aracın yola çıkması değil, hangi işlerin aynı sefere sığdırılabileceğinin hesaplanmasıdır. Şehir merkezindeki showroom ve ticaret alanlarında ise teslimat, gündüz trafiğinden çok dar sokak ve yükleme rampası erişimiyle ilgilidir. Bu sayfada nakliye ve teslimat sürecimizi, GAOSB'nin çok bölgeli yapısından tarihi çarşının dar sokaklarına kadar Gaziantep'e özgü koşullarla anlatıyoruz.",
        maddeler: [
            {
                baslik: "GAOSB'nin çok bölgeli yapısında güzergah planlama",
                metin:
                    "GAOSB birden fazla ayrı bölgeden oluştuğu için, bir günde birden fazla tesise teslimat yapılacaksa bölgeler arası geçiş süresi güzergahın ana belirleyicisidir. Aynı bölgedeki teslimatları art arda sıralıyor, bölge değişimini günün en az sayıda yapılacağı şekilde kuruyoruz. Müşteriden gelen çağrılarda hangi bölgede olduklarının net belirtilmesi, teslimat saatinin gerçekçiliğini doğrudan etkiler.",
            },
            {
                baslik: "Nizip gibi merkeze uzak ilçelerde iş birleştirme",
                metin:
                    "Merkeze belirli bir mesafedeki ilçelerde tek kalemlik kısa bir iş için makine göndermek nakliye maliyetini orantısız büyütür. Bu yüzden bu tür ilçelerdeki müşterilerimize mümkünse birden fazla iş kalemini aynı haftaya toplamalarını öneriyoruz; aynı OSB içindeki komşu işletmelerin taleplerini birleştirmek de nakliye bedelini paylaştırarak düşürür.",
            },
            {
                baslik: "Dar sokaklı çarşı ve tarihi dokuda teslimat",
                metin:
                    "Şahinbey ve Şehitkamil'in tarihi çarşı çevresinde araç geçişi sınırlı sokaklarda standart boy taşıyıcı araç giremeyebilir. Bu durumda makine sokağın girebildiği en yakın açık noktaya bırakılır ve oradan kısa mesafeli manevra ile hedefe ulaştırılır. Teslimat saati, çarşı esnafının en az etkileneceği sabah erken veya düşük trafik dilimine planlanır.",
            },
            {
                baslik: "Sevkiyat rampalarında yükleme-boşaltma koordinasyonu",
                metin:
                    "Gaziantep'in ihracat ağırlıklı üretim yapısı nedeniyle birçok tesisin sevkiyat rampası TIR ve konteyner trafiğiyle sürekli işler. Manlift teslimatı bu rampalardan yapılacaksa, tesisin kendi sevkiyat programının sakin olduğu bir zaman dilimine yerleştirilir; rampa yakınında çalışırken forklift ve TIR operatörleriyle konum bilgisi paylaşılır.",
            },
            {
                baslik: "Acil çağrı ve planlı teslimat farkı",
                metin:
                    "Planlı bir teslimat, güzergah ve zaman penceresi önceden netleştiği için en verimli şeklidir. Acil bir arıza veya beklenmedik ihtiyaç durumunda ise makine mevcut güzergahtan bağımsız olarak en kısa sürede yönlendirilir; ancak bu tür acil teslimatların maliyeti, önceden planlanmış bir teslimattan doğal olarak daha yüksek olur, çünkü güzergah optimizasyonu devre dışı kalır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bölgeye göre teslimat özellikleri",
                paragraflar: [
                    "Gaziantep'in farklı bölgelerinde teslimat sürecini etkileyen ana faktörleri aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Bölge/alan tipi", "Ana kısıt", "Planlama önceliği", "Not"],
                    satirlar: [
                        ["GAOSB (çoklu bölge)", "Bölgeler arası geçiş süresi", "Aynı bölge işlerini birleştirme", "Bölge bilgisi net verilmeli"],
                        ["Nizip / uzak ilçe", "Mesafe-nakliye maliyeti", "Haftalık iş birleştirme", "Komşu işletmeyle paylaşım"],
                        ["Tarihi çarşı (Şahinbey/Şehitkamil)", "Dar sokak erişimi", "En yakın açık noktadan manevra", "Düşük trafik saati"],
                        ["Sevkiyat rampası", "TIR-konteyner trafiği", "Sevkiyat programına uyum", "Forklift ile koordinasyon"],
                        ["Acil çağrı", "Güzergah dışı yönlendirme", "En kısa sürede müdahale", "Standart teslimden daha maliyetli"],
                    ],
                },
            },
            {
                baslik: "Teslimat öncesi bilgi akışı",
                paragraflar: [
                    "Teslimat gününün sorunsuz geçmesi, büyük ölçüde teslimat öncesi paylaşılan bilginin doğruluğuna bağlıdır. Adres, bölge, giriş noktası, varsa özel araç geçiş kısıtı ve teslim alacak kişinin iletişim bilgisi, sevkiyat planlanmadan önce netleştirilir. Eksik veya belirsiz bilgi, sahada beklenmedik gecikmelere yol açar ve bu gecikme diğer teslimatları da etkileyebilir.",
                    "GAOSB gibi geniş ve çok bölgeli alanlarda özellikle bölge ve blok bilgisinin net olması önemlidir; yalnızca 'GAOSB' demek, aracın hangi bölgeye yöneleceğini belirlemek için yeterli değildir. Bu bilgiyi teklif aşamasında netleştirmeyi standart hale getirdik.",
                ],
            },
            {
                baslik: "Geri alma (makinenin sahadan çıkarılması) süreci",
                paragraflar: [
                    "Kiralama süresi bitiminde makinenin sahadan alınması da aynı güzergah mantığıyla planlanır; mümkünse aynı bölgedeki başka bir teslimat veya geri alma işiyle birleştirilir. Bu, hem maliyeti düşürür hem araç trafiğini azaltır.",
                    "Geri alma öncesinde makinenin çalışma alanı boşaltılır ve varsa hasar birlikte kontrol edilir; bu kontrol, sonradan çıkabilecek anlaşmazlıkları önler. Geri alma saati de teslimat gibi tesisin kendi trafik yoğunluğuna göre planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "GAOSB'de birden fazla bölgede işimiz var, tek seferde teslimat yapabilir misiniz?",
                cevap:
                    "Genellikle evet, ama bölgeler arası mesafeye göre planlama gerekiyor. GAOSB birden fazla ayrı bölgeden oluştuğu için bir bölgeden diğerine geçiş, sahada birkaç iş kalemi bitirmekten daha uzun sürebiliyor. Bu yüzden aynı gün birden fazla bölgeye teslimat istediğinizde, hangi bölgelerde ne olduğunu önceden bildirmenizi istiyoruz; buna göre en az geçişle tamamlayacak sırayı kuruyoruz. Bazı durumlarda iki bölgeyi aynı günde bitirmek yerine ardışık iki güne yaymak hem daha gerçekçi hem daha ucuza geliyor, bunu teklif aşamasında açıkça öneriyoruz.",
            },
            {
                soru: "Nizip'e tek bir makine için gönderim yapıyor musunuz?",
                cevap:
                    "Yapıyoruz, ama dürüst olmak gerekirse tek kalemlik bir iş için nakliye maliyeti orantısız çıkabiliyor, çünkü mesafe merkeze göre daha uzun. Bu yüzden Nizip'teki müşterilerimize mümkünse birden fazla iş kalemini aynı haftaya toplamalarını, hatta OSB içindeki komşu işletmelerle aynı güne denk gelen bir randevu ayarlamalarını öneriyoruz; bu şekilde nakliye bedeli paylaşılabiliyor. Tek seferlik acil bir ihtiyaç varsa elbette gönderiyoruz, sadece maliyet farkını teklif aşamasında açıkça belirtiyoruz.",
            },
            {
                soru: "Tarihi çarşıya makine sokamıyorsanız teslimatı nasıl yapıyorsunuz?",
                cevap:
                    "Sokağın gerçek genişliğine göre değişiyor; bazı ana geçitlere taşıyıcı araç girebiliyor, en dar ara sokaklara ise hiçbir araç sığmıyor. Bu durumda makineyi sokağın girebildiği en yakın açık noktaya bırakıp oradan kısa mesafeli manevrayla hedefe ulaştırıyoruz. Sokağın gerçek ölçüsünü ve varsa araç kısıtlamalarını keşifte yerinde ölçüyoruz; uzaktan fotoğraftan karar vermiyoruz çünkü tarihi dokuda ölçüler yanıltıcı olabiliyor.",
            },
            {
                soru: "Sevkiyat rampası TIR trafiğiyle doluysa teslimatı nasıl planlıyorsunuz?",
                cevap:
                    "Rampa çevresi konteyner ve TIR hareketiyle sürekli hareketli bir alan olduğu için, teslimatı sevkiyat programının sakinleştiği bir saat dilimine yerleştiriyoruz; örneğin sevkiyatın henüz başlamadığı sabah erken saat ya da günün son sevkiyatından sonraki dilim. Rampa yakınında çalışırken görünürlüğü artıran koni ve şerit kullanıyor, forklift ve TIR operatörleriyle konum bilgisini paylaşıyoruz. Sevkiyat programınızı önceden verirseniz, teslimatı o programa hiç dokunmadan en uygun aralığa yerleştirebiliyoruz.",
            },
            {
                soru: "Acil bir arıza çıktı, aynı gün makine gönderebilir misiniz?",
                cevap:
                    "Çoğu durumda evet, ama bu bir garanti değil; o anki filo müsaitliği ve güzergah durumu belirleyici. Acil çağrılarda mevcut planlı güzergahtan bağımsız olarak en kısa sürede yönlendirme yapıyoruz, ancak bu tür acil teslimatların maliyeti planlı teslimattan daha yüksek oluyor çünkü güzergah optimizasyonu devre dışı kalıyor. Acil ihtiyacınızı bize telefonla bildirdiğinizde önce filo durumunu kontrol edip gerçekçi bir süre veriyoruz; boş vaat vermiyoruz.",
            },
            {
                soru: "Makineyi geri almak için ayrıca ücret alıyor musunuz?",
                cevap:
                    "Geri alma, standart kiralama paketinin bir parçası ve ayrı bir sürpriz ücret değil; nakliye bedeli genellikle teslimat ve geri almayı birlikte kapsar. Geri alma tarihini, kiralama süresi netleştiğinde birlikte planlıyoruz; mümkünse aynı bölgedeki başka bir işle birleştirerek güzergahı optimize ediyoruz. Geri alma öncesinde çalışma alanının boşaltılmış olması ve varsa hasarın birlikte kontrol edilmesi bekleniyor; bu, sonradan çıkabilecek anlaşmazlıkları önlüyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. GAOSB'nin çok bölgeli yapısı ve Gaziantep'in ihracat ağırlıklı sevkiyat trafiği kamuya açık genel bilgidir. Güzergah ve maliyet birleştirme anlatımı sahadaki tekrarlı nakliye pratiğinden çıkarılmıştır; belirli tesis veya güzergah adı verilmez.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Gaziantep'te Forklift ve İstifleme Kiralama",
        giris:
            "Gaziantep'te forklift ihtiyacı, manlift talebiyle aynı iki üretim kolundan besleniyor: GAOSB'deki halı ve dokuma tesislerinde iplik bobini ile halı rulolarının istiflenmesi, Şehitkamil ve Nizip'teki gıda tesislerinde un-bulgur çuvalları, baharat kolileri ve kuruyemiş paketlerinin palet üstü taşınması. Bu iki üretim türü, forklifte farklı beklentiler yükler: dokuma tesislerinde bobin ve rulo gibi uzun, hacimli ama görece hafif yükler söz konusuyken, gıda depolarında standart palet yükseklikleri ve gıda güvenliği kuralları öne çıkar. Kapalı hollerde çalışan forkliftlerde egzoz emisyonu önemli bir kısıt olduğu için elektrikli modeller tercih edilir; açık sahada ve sevkiyat rampasında ise dizel modellerin gücü daha pratik olur. Bu sayfada forklift ve istifleme hizmetimizi, Gaziantep'in bu iki üretim koluna özgü yük tipleri ve saha koşullarıyla anlatıyoruz; manlift ile forklift kombinasyonunun aynı ziyarette birlikte planlandığı durumlara da değiniyoruz.",
        maddeler: [
            {
                baslik: "Dokuma salonlarında iplik bobini ve halı rulosu istifleme",
                metin:
                    "İplik bobinleri ve dokunmuş halı ruloları, standart paletten farklı bir geometriye sahiptir; uzun ve silindirik yükler forklift çatalının doğru konumlanmasını gerektirir. Bobin depolarındaki yüksek raflarda istifleme, rafın taşıma kapasitesi ve koridor genişliğine göre planlanır; koridor dar olduğunda standart forklift yerine dar koridor sınıfı tercih edilir.",
            },
            {
                baslik: "Gıda depolarında palet yüksekliği ve hijyen kuralları",
                metin:
                    "Un, bulgur ve kuruyemiş depolarında palet istifleme, tesisin kendi hijyen prosedürüne tabidir; forklift gövdesinin temizliği ve yağlama noktalarının sızıntı riski, gıda alanına girmeden önce kontrol edilir. Palet yükseklikleri tesisten tesise değişir, bu yüzden raf kapasitesi ve istifleme yüksekliği keşifte netleştirilir.",
            },
            {
                baslik: "Kapalı hollerde elektrikli, açık sahada dizel tercih",
                metin:
                    "Dokuma salonu veya gıda üretim holü gibi kapalı alanlarda egzoz emisyonu kabul edilemez olduğu için elektrikli forklift zorunludur. Sevkiyat rampası, açık depolama sahası veya OSB içi kısa mesafe taşımada ise dizel modellerin gücü ve çalışma süresi avantaj sağlar. Hangi modelin uygun olduğu, çalışma alanının kapalı-açık niteliğine göre belirlenir.",
            },
            {
                baslik: "Sevkiyat rampasında yükleme-boşaltma hızı",
                metin:
                    "İhracata yönelik üretim yapan tesislerde sevkiyat rampasında forklift trafiği yoğun ve süreklidir; konteyner yükleme temposuna uyum sağlayacak kapasite ve manevra hızı önemlidir. Bu tür işlerde forklift operatörünün rampa trafiğine hakim olması, gecikmesiz bir sevkiyat için belirleyicidir.",
            },
            {
                baslik: "Manlift ile birlikte planlanan işler",
                metin:
                    "Bazı işlerde forklift ve manlift aynı ziyarette birlikte kullanılır; örneğin bir raf sistemi kurulumunda alt seviyedeki paletleme forkliftle, üst seviyedeki montaj ise manliftle yapılır. Bu tür kombine işlerde iki ekipmanın aynı sahada güvenli mesafede çalışması için trafik planı önceden çıkarılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üretim koluna göre forklift seçimi",
                paragraflar: [
                    "Gaziantep'teki iki ana üretim kolunda sık çıkan forklift ihtiyaçlarını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Üretim kolu", "Tipik yük", "Uygun sınıf", "Ortam notu"],
                    satirlar: [
                        ["Dokuma-iplik", "Bobin, halı rulosu", "Dar koridor elektrikli", "Rafta hassas manevra"],
                        ["Gıda deposu", "Çuval, koli palet", "Standart elektrikli", "Hijyen kontrolü"],
                        ["Sevkiyat rampası", "Konteyner yükü", "Dizel, yüksek kapasite", "Trafik yoğun"],
                        ["Açık saha depolama", "Karışık palet", "Dizel", "Zemin stabilize/beton"],
                        ["Kombine iş (manlift+forklift)", "Raf montajı", "İkisi birlikte", "Trafik planı gerekir"],
                    ],
                },
            },
            {
                baslik: "Operatör yeterliliği ve güvenlik",
                paragraflar: [
                    "Forklift operatörlüğü, geçerli bir sertifika ve düzenli uygulama gerektiren bir iştir; özellikle dar koridorlu bobin depolarında veya yüksek raf istiflemesinde deneyimsiz bir operatör hem yükü hem rafı riske atabilir. Operatörlü kiralamada bu yeterlilik teslim öncesi doğrulanır.",
                    "Gıda tesislerinde ayrıca forklift operatörünün tesisin kendi hijyen ve güvenlik kurallarına uyması istenir; bazı tesisler ek bir güvenlik oryantasyonu talep eder, bunu keşif aşamasında öğrenip önceden hazırlıyoruz.",
                ],
            },
            {
                baslik: "Kısa süreli ve uzun süreli kiralama farkı",
                paragraflar: [
                    "Tek seferlik bir sevkiyat yoğunluğu için kısa süreli forklift kiralama yeterliyken, sürekli üretim yapan bir depoda uzun süreli kiralama hem maliyet hem bakım açısından daha avantajlı olabilir. Uzun süreli kiralamalarda periyodik bakım planı da kiralama paketine dahil edilir.",
                    "Hangi süre modelinin uygun olduğu, tesisin günlük forklift kullanım yoğunluğuna göre belirlenir; nadiren kullanılan bir tesiste uzun süreli kiralamayı önermiyoruz, çünkü boşta duran makine gereksiz maliyet demektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İplik bobini deposunda dar koridorda forklift çalışabilir mi?",
                cevap:
                    "Koridor genişliğine göre değişir, bu yüzden koridor ölçüsünü keşifte netleştiriyoruz. Standart forklift dar koridorlara sığmadığında dar koridor sınıfı elektrikli modeller kullanılır; bu modeller daha kompakt dönüş yarıçapına sahiptir. Bobin sarımına zarar vermemek için çatal hareketi yavaş ve kontrollü tutulur, gerekiyorsa yerde bir yardımcı kişi manevrayı izler. Koridor genişliği depo düzeni değiştikçe değişebileceği için her ziyarette güncel ölçüm alınır.",
            },
            {
                soru: "Gıda deposuna giren forklift için özel bir hazırlık yapıyor musunuz?",
                cevap:
                    "Evet, standart hazırlığımız üç adımdan oluşur: önce forkliftin gövdesi ve tekerlekleri detaylı temizlenir, sonra yağlama noktaları ve sızıntı riski taşıyan bağlantılar kontrol edilir, son olarak tesisin kendi hijyen kuralları varsa önceden öğrenip uyguluyoruz. Bazı tesisler ek olarak koruyucu galoş veya özel giriş prosedürü istiyor, bunu keşif aşamasında sorup önceden hazırlıyoruz ki teslim günü beklenmesin.",
            },
            {
                soru: "Kapalı dokuma salonunda dizel forklift kullanabilir miyiz?",
                cevap:
                    "Önermiyoruz. Kapalı bir salonda dizel motorun egzoz emisyonu hem çalışan sağlığı hem iplik ve kumaş gibi hassas ürünler için kabul edilemez bir risk taşır. Bu tür kapalı alan işlerinde elektrikli forklift zorunlu tutuyoruz; akü kapasitesi işin süresine göre planlanır ve şarj noktasının erişilebilir olması teslim öncesi kontrol edilir. Açık saha veya iyi havalandırılan geniş hollerde dizel seçenek değerlendirilebilir, ama bunu da saha koşuluna göre birlikte karar veriyoruz.",
            },
            {
                soru: "Manlift ve forklifti aynı sahada aynı anda çalıştırabilir misiniz?",
                cevap:
                    "Evet, ama bunun için önceden bir trafik planı çıkarıyoruz. İki ekipmanın hareket alanları çakışmayacak şekilde ayrılır; forklift alt seviyede palet taşırken manlift üst seviyede farklı bir noktada çalışır. Aynı koridoru aynı anda kullanmaları gerekiyorsa, işler sıraya konur ve biri tamamlanmadan diğeri başlamaz. Operatörler arası iletişim, özellikle görüş açısının sınırlı olduğu raf aralarında önemlidir; bu yüzden gerekiyorsa telsizle koordinasyon sağlanır.",
            },
            {
                soru: "Sevkiyat rampasında forklift bekleme süresi olmadan çalışabilir mi?",
                cevap:
                    "Genellikle evet, ama rampa trafiğinin yoğunluğuna bağlı. İhracata yönelik tesislerde konteyner yükleme temposu yüksek olduğu için forklift operatörünün rampa düzenine hakim olması gerekir; bu yüzden mümkünse aynı forklift operatörünü birden fazla ziyarette kullanmayı tercih ediyoruz, çünkü tesisin kendine özgü sevkiyat düzenini öğrenmiş oluyor. Yoğun saatlerde bekleme kaçınılmaz olabilir, bunu teklif aşamasında gerçekçi şekilde belirtiyoruz.",
            },
            {
                soru: "Kısa süreli mi yoksa aylık kiralama mı daha uygun, nasıl karar veriyorsunuz?",
                cevap:
                    "Bu, tesisin günlük forklift kullanım yoğunluğuna bağlı bir karar; tek seferlik yoğun bir sevkiyat için kısa süreli kiralama yeterli olurken, sürekli üretim yapan bir depoda aylık kiralama hem maliyet hem bakım planlaması açısından daha avantajlı çıkabiliyor. Karar vermeden önce tahmini kullanım sıklığınızı soruyoruz ve iki seçeneğin maliyetini karşılaştırmalı şekilde sunuyoruz; nadiren kullanılacak bir tesiste uzun süreli kiralamayı önermiyoruz çünkü bu sizin için gereksiz maliyet demek.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in halı-dokuma ve gıda sanayisi ağırlığı kamuya açık genel bilgidir. Forklift sınıfı ve saha uygulaması genel ekipman bilgisine dayanır; hijyen ve koridor anlatımı sahadaki tekrarlı deneyimden çıkarılmıştır, tesis adı verilmez.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Gaziantep'te Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli platformun asıl değeri, düz bir yükselme değil hedefin etrafından dolanarak erişebilmesidir; bu da onu Gaziantep'in engebeli erişim noktalarında öne çıkarır. GAOSB'deki boyahane bacaları genellikle çatı hattının gerisinde, doğrudan altından yaklaşılamayacak bir konumdadır; dokuma salonlarının yüksek tavanındaki emiş kanalları da tezgah sıralarının üzerinden dolanarak ulaşılması gereken hatlardır. Nizip'teki zeytinyağı tank grupları ve tarım depolarının silo üstü kapakları ise hem yükseklik hem de tank gövdesinin etrafından dolanma gerektiren bir geometri sunar. Makaslı platform yalnızca düz yukarı çıkabildiği için bu tür engelli erişimlerde yetersiz kalırken, eklemli bomun kollarını bükerek hedefe yandan veya üstten yaklaşması mümkündür. Bu sayfada eklemli platformun Gaziantep'teki hangi engebeli erişim senaryolarında tercih edildiğini ve dizel-akülü seçim mantığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Boyahane bacasına çatı hattının gerisinden erişim",
                metin:
                    "Boyahane bacaları genellikle çatının kenarına yakın ama doğrudan altından erişilemeyecek bir konumda kurulur; bacanın önünde başka ekipman veya boru hattı olabilir. Eklemli platform, gövdeyi güvenli bir noktaya konumlandırıp kolu bacanın etrafından dolandırarak hedefe ulaşabilir; bu esneklik makaslı platformda mümkün değildir.",
            },
            {
                baslik: "Dokuma salonu tavanındaki emiş kanalı hatları",
                metin:
                    "Emiş kanalları genellikle tezgah sıralarının üzerinden geçer ve doğrudan altına platform kurmak, çalışan tezgahın titreşim alanına girmek anlamına gelebilir. Eklemli platform, tezgah aralığındaki güvenli bir noktadan kolunu kanala doğru uzatarak titreşim alanına girmeden işi tamamlayabilir.",
            },
            {
                baslik: "Zeytinyağı tank grubu çevresinde erişim",
                metin:
                    "Nizip'teki zeytinyağı işleme tesislerinde tank grupları sık aralıklarla dizilir ve tek bir tankın üstüne erişmek için komşu tankların etrafından dolanmak gerekebilir. Eklemli bomun kolu, tank gövdelerine temas etmeden hedef tanka yandan yaklaşabilir; bu, düz yükselen bir makinenin başaramayacağı bir manevradır.",
            },
            {
                baslik: "Sanayi holü çelik konstrüksiyon çatı altı",
                metin:
                    "GAOSB'deki yeni yapılan sanayi hollerinde çatı kirişleri ve aydınlatma rayları arasında dar geçişler olabilir. Eklemli platform bu geçişlerde kolunu kirişler arasından geçirerek hedefe ulaşabilir; gövde ise kirişlerden uzak, güvenli bir noktada kalır.",
            },
            {
                baslik: "Dizel ve akülü seçim: kapalı-açık alan ayrımı",
                metin:
                    "Kapalı dokuma salonu veya boyahane içinde egzoz emisyonu kabul edilemez olduğu için akülü eklemli platform tercih edilir. Açık sahada, örneğin OSB dışı zeytinyağı tesisinin açık tank sahasında, dizel modelin daha uzun çalışma süresi ve gücü avantaj sağlar. Hangi güç tipinin uygun olduğu, çalışma alanının kapalı-açık niteliğine göre belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Engelli erişim senaryolarına göre boom tercihi",
                paragraflar: [
                    "Gaziantep'teki tipik engelli erişim senaryolarını ve boom platformun bu senaryolardaki rolünü aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Engel türü", "Boom avantajı", "Güç tipi"],
                    satirlar: [
                        ["Boyahane bacası", "Çatı hattı gerisi", "Kol dolanarak erişim", "Akülü (kapalı alan)"],
                        ["Dokuma tavanı", "Tezgah üstü titreşim alanı", "Yandan güvenli yaklaşım", "Akülü"],
                        ["Zeytinyağı tank grubu", "Komşu tank engeli", "Kol tank etrafından dolanır", "Dizel (açık saha)"],
                        ["Sanayi holü çatısı", "Kiriş arası dar geçiş", "Kol kirişler arasından geçer", "Akülü"],
                        ["OSB dış saha", "Yükseklik + mesafe", "Uzun erişim kapasitesi", "Dizel"],
                    ],
                },
            },
            {
                baslik: "Kol hareketi ve komşu ekipman güvenliği",
                paragraflar: [
                    "Eklemli platformun kolu, düz yükselen bir makineye göre daha geniş bir hareket zarfına sahiptir; bu esneklik aynı zamanda çevredeki boru, kablo tavası veya komşu ekipmana temas riskini de artırabilir. Bu yüzden dar ve engelli alanlarda kol hareketi yavaş ve kontrollü tutulur, operatör hedefe yaklaşırken adım adım ilerler.",
                    "Keşif aşamasında hedefin etrafındaki tüm engelleri (boru, kablo, komşu ekipman, tavan yüksekliği) fotoğraf ve ölçüyle netleştiriyoruz; bu bilgi, doğru kol uzunluğuna sahip modeli seçmemizi sağlıyor.",
                ],
            },
            {
                baslik: "Zemin taşıma kapasitesi ve stabilizasyon",
                paragraflar: [
                    "Eklemli bomlu platformlar, özellikle uzun erişimli modellerde, dengelenmek için ayak (outrigger) kullanabilir ve bu ayakların bastığı zeminin taşıma kapasitesi kontrol edilmelidir. Nizip'teki açık tank sahalarında zemin stabilize veya toprak olabileceğinden, ayak altına yük dağıtım plakası konur.",
                    "GAOSB'deki beton zeminli hollerde bu risk daha düşüktür, ama yeni dökülmüş veya hasarlı beton bölgelerde yine de kontrol yapılır. Zemin durumu şüpheliyse iş başlamadan önce netleştirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform ile makaslı platform arasında nasıl seçim yapıyorsunuz?",
                cevap:
                    "Karar, hedefin doğrudan altına erişilip erişilemeyeceğine bağlı. Hedefin altı boşsa ve düz yükselme yeterliyse makaslı platform hem daha ekonomik hem daha hızlı kurulur. Ancak hedefin önünde boru, komşu ekipman, tank veya çatı kirişi gibi bir engel varsa ve hedefe yandan veya üstten dolanarak yaklaşmak gerekiyorsa eklemli platform tek çözümdür. Keşifte hedefin fotoğrafını ve engellerin konumunu görerek bu kararı birlikte veriyoruz; yanlış sınıf seçimi sahada zaman kaybına yol açar.",
            },
            {
                soru: "Boyahane bacasına erişirken kol sıcak yüzeye çok mu yaklaşıyor?",
                cevap:
                    "Bu, kolun hareket güzergahını planlarken özellikle dikkat ettiğimiz bir nokta. Sıcak baca yüzeyine güvenli mesafe bırakılır ve mümkünse iş, bacanın soğuduğu üretim molası veya duruş aralığına planlanır. Zorunlu hâllerde operatör için ısıya dayanıklı koruyucu ekipman kullanılır ve çalışma süresi kısaltılır. Kolun sıcak yüzeye temas etme riski varsa iş başlamadan önce bu riski müşteriyle birlikte değerlendiriyoruz.",
            },
            {
                soru: "Tank grupları arasında dar geçişte platform tanklara zarar verir mi?",
                cevap:
                    "Dikkatli planlamayla bu risk düşük tutulabilir. Gövdeyi tanklardan güvenli mesafede konumlandırıp, yalnızca kolu tank etrafından dolandırarak hedefe yaklaşıyoruz. Kol hareketi bu tür dar geçişlerde yavaş tutulur, gerekiyorsa yerde bir yardımcı kişi mesafeyi izler. Tank grubunun düzeni sıkışıksa, keşifte gerçek ölçüyü almadan makine göndermiyoruz; ölçü uymuyorsa alternatif bir yaklaşım açısı arıyoruz.",
            },
            {
                soru: "Kapalı sanayi holünde dizel eklemli platform kullanabilir miyiz?",
                cevap:
                    "Önermiyoruz. Kapalı bir holde dizel motorun egzoz emisyonu hem çalışan sağlığı hem üretimdeki hassas malzemeler için risk taşır. Bu tür kapalı alan işlerinde akülü eklemli modeller kullanılır; akü kapasitesi işin süresine ve kol hareketinin yoğunluğuna göre planlanır. Açık sahada veya iyi havalandırılan geniş hollerde dizel seçenek değerlendirilebilir, bunu saha koşuluna göre birlikte karar veriyoruz.",
            },
            {
                soru: "Eklemli platformun ayakları (outrigger) her zeminde açılabilir mi?",
                cevap:
                    "Hayır, zeminin taşıma kapasitesine bağlı. Beton veya sıkıştırılmış zeminlerde genellikle sorun olmazken, stabilize toprak veya yumuşak zeminlerde ayak altına yük dağıtım plakası koymak gerekir. Yağışlı bir dönemin ardından açık sahalarda zemin daha da yumuşayabileceği için, şüpheli durumlarda iş başlamadan önce zemin kontrolü yapıyoruz. Zemin yeterince sağlam değilse ayakların tam açılamayacağı, dolayısıyla erişim menzilinin daralabileceği durumu da önceden bildiriyoruz.",
            },
            {
                soru: "Çatı kirişleri arasında çalışırken kirişe çarpma riski nasıl önleniyor?",
                cevap:
                    "Keşif aşamasında kiriş aralığını ve tavan yüksekliğini net ölçüyle alıyoruz; bu ölçüye göre kol uzunluğu ve gövde genişliği uygun modeli seçiyoruz. Sahada çalışırken kol hareketi kirişlere yaklaşırken yavaşlatılır ve mümkünse yerde bir yardımcı kişi görüş açısını destekler. Kiriş aralığı modelin geçemeyeceği kadar darsa, bunu dürüstçe belirtip alternatif bir erişim yöntemi öneriyoruz; riski göze alıp zorlama yapmıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in dokuma-boyahane ve Nizip'in zeytinyağı-tarım sanayisi daha önceki bölge sayfalarında da işlenen kamuya açık bilgidir. Eklemli platformun teknik erişim mantığı genel ekipman bilgisidir; engel senaryoları sahadaki tekrarlı iş türlerinden çıkarılmıştır, tesis adı verilmez.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Gaziantep'te Tekstil Fabrikası İç Mekan ve Depo İçi Platform Kiralama",
        giris:
            "Gaziantep'in üretim kimliğinin merkezinde halı ve makine halısı imalatı olduğu için, şehirdeki iç mekan platform talebinin en büyük payı GAOSB'deki dokuma salonları, iplik depoları ve boyahanelerden gelir. Bu tesislerin iç mekanı, tipik bir depo veya ofis binasından farklı bir mantıkla kurulmuştur: dokuma tezgahlarının dizildiği salonlar geniş açıklıklı ve yüksek tavanlıdır çünkü tezgah verimliliği düzenli ışığa ve havalandırmaya bağlıdır; iplik bobinlerinin depolandığı alanlar nem hassasiyeti nedeniyle kapalı ve yüksek raflı kurulur; boyahane tarafında ise sürekli buhar ve nem, tavan seviyesindeki ekipmanın yıpranmasını hızlandırır. Bu üç iç mekan tipi -dokuma salonu, iplik deposu, boyahane- birbirinden çok farklı çalışma koşulları sunar ve her biri kendi makine sınıfını, çalışma saatini ve güvenlik önlemini gerektirir. Standart bir 'iç mekan platformu' tanımı bu farkı yakalayamaz; bu yüzden bu sayfada üç iç mekan tipini ayrı ayrı, kendi koşullarıyla ele alıyoruz. Genel prensip şu: iç mekanda egzoz emisyonu olan makine kullanılmaz, akülü ve mümkünse iz bırakmayan tekerlekli sınıf tercih edilir; tezgah, raf veya boru hattı gibi sabit ekipmana temas riski her zaman ayrıca değerlendirilir.",
        maddeler: [
            {
                baslik: "Dokuma salonunda tezgah sıraları arası dar koridor çalışması",
                metin:
                    "Dokuma tezgahlarının dizildiği salonlarda koridor genişliği, tezgah düzenine göre değişir ve genellikle standart bir platformun rahat manevra edemeyeceği kadar dardır. Bu koridorlarda dar gövdeli akülü makaslı platform tercih edilir; makinenin çalışan tezgahın titreşim alanına girmemesi ayrıca gözetilir. Tezgah üstü aydınlatma ve iplik besleme bobin ray sistemlerinin bakımı bu koridorlardan yapılır.",
            },
            {
                baslik: "İplik deposunda yüksek raf ve nem hassasiyeti",
                metin:
                    "İplik bobinlerinin depolandığı alanlar nem oranına duyarlı olduğu için kapalı ve yüksek raflı kurulur. Raf üst gözlerindeki sayım, hasarlı bobinlerin indirilmesi ve nem sensörü kontrolü, dar koridora sığan bir platformla yapılır. Sepetin bobinlere temas etmeyecek mesafede hareket etmesi özellikle önemlidir; koridor dar olduğunda daha dar gövdeli makine bu mesafeyi güvenli hale getirir.",
            },
            {
                baslik: "Boyahanede nem-buhar dayanıklı ekipman seçimi",
                metin:
                    "Boyahane tarafında sürekli buhar ve yüksek nem, standart makinenin elektrik aksamını ve metal yüzeyini normal bir kuru hole göre daha hızlı yıpratır. Bu ortamda uzun süre kalacak makineler kira süresine göre seçilir; kısa süreli işlerde standart makine yeterliyken, uzun süreli işlerde nem koşullarına daha dayanıklı ekipman tercih edilir. Her ziyaret sonunda makinenin elektrik bağlantıları ve panel contaları kontrol edilir.",
            },
            {
                baslik: "Kesme-tufting ve son işlem hatlarında planlı duruş penceresi",
                metin:
                    "Halının dokunmasından sonra geçtiği kesme, tıraşlama ve son kontrol hatlarının üzerinde emiş kanalları, aydınlatma rayları ve otomasyon sensörleri bulunur. Bu hatlar genelde sürekli çalıştığı için bakım, planlı duruş pencerelerine sıkıştırılır ve o pencerede birden fazla kalem aynı anda bitirilir. Hattın hemen üstünde çalışırken düşen parça riski özellikle önemlidir, alt bölge örtüyle kapatılır ve hat o süre için durdurulur.",
            },
            {
                baslik: "İç mekanda enerji tipi ve zemin koruması",
                metin:
                    "Kapalı hollerde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller zorunludur. Beton zeminlerde standart lastik tekerlek genellikle sorun oluşturmazken, cilalı veya hassas kaplı zeminlerde iz bırakmayan tekerlekli model tercih edilir. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimat öncesi planlanmalıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekan tipine göre platform seçimi",
                paragraflar: [
                    "GAOSB'deki tekstil tesislerinin üç ana iç mekan tipinde sık çıkan iş kalemlerini ve uygun makine sınıfını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İç mekan tipi", "Sık çıkan iş", "Uygun sınıf", "Kritik nokta"],
                    satirlar: [
                        ["Dokuma salonu", "Aydınlatma, bobin askısı", "Dar gövdeli akülü makaslı", "Titreşim alanından uzak"],
                        ["İplik deposu", "Raf sayımı, nem sensörü", "Dar koridor akülü", "Bobine temas etmeme"],
                        ["Boyahane", "Baca, fan, panel kontrolü", "Nem dayanıklı akülü", "Yüksek nem-sıcaklık"],
                        ["Kesme-son işlem", "Emiş kanalı, sensör", "Standart akülü makaslı", "Planlı duruş penceresi"],
                        ["Genel iç mekan", "Zemin koruması", "İz bırakmayan tekerlek", "Cilalı/hassas zeminde"],
                    ],
                },
            },
            {
                baslik: "Üretim durmadan çalışma mümkün mü?",
                paragraflar: [
                    "Bu sorunun cevabı iş kalemine göre değişir. Tezgahın doğrudan üstünde veya titreşim alanında değil, ama koridorda ve tezgah aralarında evet. Tezgahlar çalışırken üretilen titreşim ve iplik tozunun bulunduğu alanın hemen üzerinde platformla çalışmak hem makinenin hem tezgahın güvenliği açısından uygun değildir. Bunun yerine iş, o tezgah grubunun bakım için durdurulduğu ya da vardiya değişiminde boşta kaldığı zaman dilimine alınır.",
                    "Koridor aydınlatması ve genel havalandırma gibi tezgahla doğrudan teması olmayan kalemler ise üretim sürerken, tezgahtan güvenli mesafede konumlanarak yapılabilir. Hangi işin hangi kategoriye girdiğini keşifte birlikte belirliyoruz; bu ayrım, üretim kaybını en aza indiren ama güvenlikten ödün vermeyen bir denge kurar.",
                ],
            },
            {
                baslik: "Kapalı alanda akü ve şarj planlaması",
                paragraflar: [
                    "İç mekan işlerinin çoğu akülü makine gerektirdiği için, uzun süren bir çalışma gününde akü kapasitesinin yetip yetmeyeceği önceden hesaplanır. Tek vardiyalık kısa işlerde standart akü kapasitesi genellikle yeterlidir; vardiya boyunca kesintisiz kullanım gerekiyorsa şarj noktasının erişilebilir olması ve gerekiyorsa yedek akülü makine planlanması gerekir.",
                    "Boyahane gibi yüksek nem ortamlarında akü ve elektrik bağlantılarının nem koruması, standart bir kuru hol makinesine göre daha sık kontrol edilir; bu kontrol her ziyaretin standart bir parçasıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dokuma tezgahları çalışırken üstlerinde iş yapılabilir mi?",
                cevap:
                    "Tezgahın doğrudan üstünde değil, ama koridorda ve tezgah aralarında evet. Tezgahlar çalışırken üretilen titreşim ve iplik tozunun bulunduğu alanın hemen üzerinde platformla çalışmak hem makinenin hem tezgahın güvenliği açısından uygun değildir. Bunun yerine iş, o tezgah grubunun bakım için durdurulduğu ya da vardiya değişiminde boşta kaldığı zaman dilimine alınır. Koridor aydınlatması ve genel havalandırma gibi tezgahla doğrudan teması olmayan kalemler ise üretim sürerken, tezgahtan güvenli mesafede konumlanarak yapılabilir. Hangi işin hangi kategoriye girdiğini keşifte birlikte belirliyoruz.",
            },
            {
                soru: "Boyahanede yüksek nem makineye zarar verir mi?",
                cevap:
                    "Uzun vadede evet, bu yüzden önlem alıyoruz. Sürekli buharlı ortamda çalışan makinelerin elektrik aksamı ve metal yüzeyleri normal bir kuru hole göre daha hızlı yıpranır. Bu ortamda kalacak makineleri kira süresine göre seçiyoruz; kısa süreli işlerde standart makine yeterliyken, boyahanede uzun süre kalacak makinelerde nem koşullarına daha dayanıklı ekipmanı tercih ediyoruz. Ayrıca her ziyaret sonunda makinenin elektrik bağlantılarını ve panel contalarını kontrol ediyoruz. Ekip tarafında da nemli ve sıcak ortamda çalışma süresi kısa tutuluyor, sık mola veriliyor.",
            },
            {
                soru: "İplik deposunda bobinlere zarar vermeden çalışabilir misiniz?",
                cevap:
                    "Evet, ama bunun için birkaç önlem alıyoruz. Öncelikle sepetin bobinlere temas etmeyecek mesafede hareket etmesini sağlıyoruz; koridor dar olduğunda daha dar gövdeli bir makine seçmek bu mesafeyi güvenli hale getirir. İkinci olarak sepetten yapılan işlerde kullanılan alet ve malzemenin bağlı tutulmasına özellikle dikkat ediyoruz, çünkü düşen bir alet bobin sarımına zarar verebilir. Üçüncüsü, nem hassasiyeti olan bölgelerde çalışırken depo kapılarının gereğinden uzun açık kalmamasına özen gösteriyoruz. Hasarlı bobin tespit edilirse bunu anında depo sorumlusuna bildiriyoruz.",
            },
            {
                soru: "İç mekanda dizel makine hiç kullanılmıyor mu?",
                cevap:
                    "Kullanılmıyor, bu bizim için geçilmez bir kural. Dokuma salonu, iplik deposu veya boyahane gibi kapalı hollerde dizel motorun egzoz emisyonu hem çalışanların sağlığı hem hassas iplik ve kumaş için kabul edilemez bir risk taşır. Bu yüzden iç mekan işlerinin tamamında akülü makine kullanıyoruz. Tek istisna, işin bir kısmının açık yükleme rampasında veya dış cephede olduğu karma projelerdir; o bölümlerde dizel değerlendirilebilir, ama iç mekana giren makine her zaman akülüdür.",
            },
            {
                soru: "Kesme hattının üzerinde çalışırken hat mutlaka durmalı mı?",
                cevap:
                    "Evet, çünkü hattın hemen üstünde çalışırken düşen bir parça (vida, alet, küçük malzeme) hattın altındaki halıya veya operatöre zarar verebilir. Bu yüzden hat, bakım süresince durdurulur ve alt bölge koruyucu örtüyle kapatılır. Bakım genellikle hattın zaten planlı duruş penceresine denk getirilir, böylece üretim kaybı ekstra bir duruştan değil, zaten var olan bir molanın verimli kullanılmasından ibaret olur. Planlı duruş penceresi dışında acil bir bakım gerekiyorsa, bunu tesis yönetimiyle birlikte planlıyoruz.",
            },
            {
                soru: "Akülü makine bir vardiya boyunca yetiyor mu, şarj gerekiyor mu?",
                cevap:
                    "Standart tek vardiyalık işlerde akü kapasitesi genellikle yeterli oluyor, ama işin yoğunluğuna ve kol hareketinin sıklığına göre değişebilir. Vardiya boyunca kesintisiz kullanım gerekiyorsa, bunu önceden bildirmenizi istiyoruz; buna göre ya daha yüksek kapasiteli bir model öneriyoruz ya da sahada erişilebilir bir şarj noktası planlıyoruz. Boyahane gibi yüksek nem ortamlarında akü ve elektrik bağlantılarının nem koruması standart bir kuru hol makinesine göre daha sık kontrol ediliyor; bu, her ziyaretin standart bir parçası.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in makine halısı üretiminde dünya ölçeğinde bir merkez olduğu ve GAOSB'deki dokuma-boyahane-depo yapısının genel karakteri kamuya açık bilgidir. Tezgah, koridor ve nem koşullarına dair anlatılanlar sahadaki tekrarlı iç mekan deneyiminden çıkarılmıştır; hiçbir fabrika ismi verilmez.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Gaziantep'te Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "Gaziantep'in üretim kapasitesi büyüdükçe GAOSB'de ve çevre OSB'lerde yeni dokuma hangarları, gıda üretim holleri ve depolama tesisleri sürekli inşa ediliyor; bu inşaat sürecinin önemli bir parçası çelik konstrüksiyon montajıdır. Çelik konstrüksiyon işleri, tamamlanmış bir tesiste yapılan bakım işinden farklı bir ortam sunar: zemin henüz beton dökülmemiş veya stabilize hâlde olabilir, çatı kirişleri henüz kapanmamış olduğu için hava koşullarına açıktır, ve sahada aynı anda vinç, kaynak ekibi ve farklı taşeronlar birlikte çalışır. Bu koşullarda platform, hem yüksek erişim hem de düzensiz zeminde stabil durabilme kapasitesine sahip olmalıdır; genellikle dizel 4x4 eklemli veya bomlu sınıf tercih edilir çünkü akülü modellerin zemin koşullarına dayanıklılığı ve çalışma süresi bu tür şantiye ortamında yetersiz kalabilir. Bu sayfada çelik konstrüksiyon montaj sürecindeki platform kullanımını, Gaziantep'in genişleyen sanayi hollerine özgü koşullarla anlatıyoruz.",
        maddeler: [
            {
                baslik: "İnşaat aşamasında zemin durumu ve makine tipi",
                metin:
                    "Yeni yapılan sanayi hollerinde beton zemin henüz dökülmemiş veya kür süresi tamamlanmamış olabilir; bu durumda stabilize toprak veya kaba dolgu zeminde çalışmak gerekir. Bu koşullarda lastikli veya paletli 4x4 dizel platform, standart akülü makaslı platforma göre çok daha uygun bir seçimdir çünkü düzensiz zeminde denge ve manevra kabiliyeti daha yüksektir.",
            },
            {
                baslik: "Çatı kirişi montajında yüksek erişim ve kol esnekliği",
                metin:
                    "Çelik çatı kirişlerinin montajı, kirişin yerine oturtulması ve kaynak/bulon bağlantısının yapılması sırasında hem yükseklik hem de kirişin farklı noktalarına erişim gerektirir. Eklemli bomlu platform, kolunu kirişin altından veya yanından yönlendirerek montaj ekibinin ihtiyaç duyduğu açıyı sağlar; bu esneklik düz yükselen makaslı platformda yoktur.",
            },
            {
                baslik: "Vinç ve diğer şantiye ekipmanıyla eş zamanlı çalışma",
                metin:
                    "Çelik konstrüksiyon şantiyelerinde platform genellikle vinç, forklift ve diğer taşeron ekiplerle aynı sahada çalışır. Bu yüzden platformun çalışma alanı, vincin yük hareket zarfından ve diğer ekiplerin güzergahından ayrılır; iş başlamadan önce şantiye şefiyle birlikte bir trafik ve alan paylaşım planı çıkarılır.",
            },
            {
                baslik: "Hava koşullarına açık sahada rüzgar ve yağış etkisi",
                metin:
                    "Çatısı henüz kapanmamış bir hol, açık saha gibi rüzgar ve yağıştan doğrudan etkilenir. Yüksek rüzgarda özellikle eklemli bomlu platformların kol açıklığı rüzgar yüzeyini artırdığı için üretici sınırları aşıldığında çalışma durdurulur. Yağış sonrası zemin yumuşayabileceği için, açık sahada çalışmadan önce zemin durumu tekrar kontrol edilir.",
            },
            {
                baslik: "Kaynak ve sıcak iş güvenliği",
                metin:
                    "Çelik montajın önemli bir kısmı kaynak içerdiği için, platform üzerinde veya yakınında kaynak yapılacaksa kıvılcım ve ısıya karşı ek önlem alınır; platform gövdesi ve hidrolik hatları kıvılcımdan korunacak şekilde konumlanır. Kaynak dumanının biriktiği kapalı bölgelerde havalandırma ayrıca değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İnşaat aşamasına göre platform seçimi",
                paragraflar: [
                    "Çelik konstrüksiyon montajının farklı aşamalarında karşılaştığımız durumları ve uygun makine sınıfını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İnşaat aşaması", "Zemin durumu", "Uygun sınıf", "Kritik nokta"],
                    satirlar: [
                        ["Temel-zemin hazırlığı", "Stabilize/dolgu", "4x4 dizel lastikli/paletli", "Denge ve manevra"],
                        ["Çatı kirişi montajı", "Kısmen tamamlanmış zemin", "Eklemli bomlu dizel", "Kiriş altına-yanına erişim"],
                        ["Vinç ile eş zamanlı iş", "Karışık", "Trafik planına uygun sınıf", "Alan paylaşımı"],
                        ["Açık hava (çatısız)", "Rüzgar-yağış etkisi", "Rüzgar limitine uygun model", "Hava durumu takibi"],
                        ["Kaynak-sıcak iş", "Değişken", "Kıvılcıma dayanıklı önlem", "Havalandırma"],
                    ],
                },
            },
            {
                baslik: "Şantiye koordinasyonu ve iş güvenliği",
                paragraflar: [
                    "Çelik konstrüksiyon şantiyelerinde birden fazla taşeron aynı anda çalıştığı için, platform işinin şantiye genel güvenlik programına entegre edilmesi gerekir. İşe başlamadan önce şantiye şefinden günün genel iş programını ve platform çalışma alanının hangi saatlerde diğer ekiplerden bağımsız kullanılabileceğini öğreniyoruz.",
                    "Operatörümüz şantiyenin kendi güvenlik prosedürüne (baret, yelek, giriş kaydı gibi) uyar; bazı şantiyeler ek bir güvenlik oryantasyonu talep eder, bunu önceden öğrenip hazırlıyoruz.",
                ],
            },
            {
                baslik: "Tamamlanmamış yapıda elektrik ve aydınlatma kısıtı",
                paragraflar: [
                    "İnşaat hâlindeki bir holde kalıcı elektrik altyapısı henüz kurulmamış olabilir; bu durumda akülü makinenin şarjı için geçici jeneratör veya şantiye elektriği kullanılır. Dizel makineler bu açıdan bağımsız çalıştığı için inşaat aşamasında pratik bir avantaj sağlar.",
                    "Aydınlatma da benzer şekilde kısıtlı olabilir; erken sabah veya akşamüstü çalışmalarda platform üzerine taşınabilir aydınlatma eklenmesi gerekebilir, bunu iş planına dahil ediyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İnşaat hâlindeki bir hangarda zemin henüz beton değil, platform çalışabilir mi?",
                cevap:
                    "Genellikle evet, ama zemin türüne uygun makine seçimi şart. Stabilize toprak veya sıkıştırılmış dolgu zeminlerde 4x4 dizel lastikli veya paletli platform, standart akülü makaslı platforma göre çok daha güvenli çalışır çünkü denge ve manevra kabiliyeti düzensiz zemine göre tasarlanmıştır. Zemin çok yumuşak veya çamurluysa, iş başlamadan önce zeminin sıkıştırılmasını veya geçici bir taşıma plakası döşenmesini öneriyoruz. Zemin durumu şüpheliyse keşifte yerinde kontrol ediyoruz, uzaktan karar vermiyoruz.",
            },
            {
                soru: "Çatı kirişi montajında platform vince alternatif mi, yoksa birlikte mi çalışıyor?",
                cevap:
                    "Birlikte çalışıyor, alternatif değil. Vinç ağır çelik kirişi kaldırıp yerine yaklaştırırken, platform montaj ekibini kirişin bağlantı noktasına taşıyarak kaynak veya bulon işlemini yapmasını sağlar. İki ekipmanın çalışma alanları çakışmayacak şekilde önceden planlanır; vincin yük hareket zarfına platform girmez. Bu koordinasyon şantiye şefiyle birlikte günlük olarak gözden geçirilir çünkü kiriş montaj sırası değiştikçe alan kullanımı da değişebilir.",
            },
            {
                soru: "Rüzgarlı günlerde açık çatılı holde çalışabilir misiniz?",
                cevap:
                    "Rüzgar hızına bağlı, bu konuda üretici sınırlarını katı şekilde uyguluyoruz. Çatısı henüz kapanmamış bir hol açık saha gibi rüzgardan doğrudan etkilenir ve özellikle eklemli bomlu platformların kol açıklığı rüzgar yüzeyini artırır. Rüzgar üretici limitini aştığında çalışmayı durduruyoruz, bunu hava durumu tahminine göre önceden planlıyoruz. Rüzgarlı günlerde işi ertelemek, riski göze almaktan her zaman daha ucuza gelir.",
            },
            {
                soru: "Şantiyede vardiya öncesi güvenlik brifingine katılıyor musunuz?",
                cevap:
                    "Evet, çoğu çelik konstrüksiyon şantiyesi günlük güvenlik brifingi yapar ve operatörümüz bu brifinge katılır. Şantiyenin o günkü genel iş programını, hangi bölgelerin hangi saatte kullanılabileceğini ve varsa özel riskleri (örneğin üstte devam eden vinç işi) bu brifingde öğreniyoruz. Bu bilgi, platformun günlük çalışma planını doğrudan etkiliyor; brifing olmadan sahaya girmiyoruz.",
            },
            {
                soru: "İnşaat hâlindeki sahada elektrik yoksa akülü makine nasıl şarj oluyor?",
                cevap:
                    "Şantiyede geçici jeneratör veya şantiye elektriği varsa akülü makine oradan şarj edilebilir; yoksa bu tür sahalarda genellikle dizel makine tercih ediyoruz çünkü bağımsız çalışır ve şarj bağımlılığı taşımaz. Hangi seçeneğin uygun olduğunu, sahadaki mevcut elektrik altyapısını keşifte sorup öğrendikten sonra belirliyoruz; sürprizle karşılaşmamak için bu bilgiyi teklif öncesi netleştiriyoruz.",
            },
            {
                soru: "Kaynak işlemi platform yakınında yapılırken yangın riski nasıl yönetiliyor?",
                cevap:
                    "Kaynak kıvılcımı platformun hidrolik hatlarına veya lastik/plastik parçalarına sıçrayabileceği için, platform kaynak noktasından güvenli mesafede veya koruyucu perde arkasında konumlandırılır. Kaynak yapılan bölgede yanıcı malzeme varsa önceden uzaklaştırılır ve gerekiyorsa yangın söndürücü hazır bulundurulur. Kapalı veya yarı kapalı bölgelerde kaynak dumanı birikebileceği için havalandırma ayrıca değerlendirilir. Bu önlemler şantiyenin kendi iş güvenliği prosedürüyle birlikte uygulanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in sanayi kapasitesinin büyümesi ve GAOSB'de yeni hangar inşaatlarının sürmesi kamuya açık genel bilgidir. Şantiye koşulları ve zemin-güç tipi seçimi genel ekipman ve inşaat güvenliği bilgisine dayanır; belirli şantiye adı verilmez.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Gaziantep'te Un-Bulgur Silo ve Gıda Depolama Tesislerinde Platform Kiralama",
        giris:
            "Gaziantep denince ilk akla gelen sanayi kolu halıcılık olsa da, şehrin ikinci büyük üretim damarı gıda sanayisidir ve bu damarın önemli bir kısmı tahıl işleme ile silo-depolama tesislerinden oluşur: Şehitkamil ve çevresindeki un ve bulgur fabrikaları, baklava ve fıstık işleme atölyelerinin hammadde depoları, kuruyemiş kavurma-paketleme tesislerinin silo grupları. Bu tesislerin ortak özelliği, tahıl ve kuruyemiş tozunun havada asılı kalabilmesi ve belirli yoğunlukta tutuşabilir bir ortam oluşturabilmesidir; bu, sektörün bilinen ve ciddiye alınması gereken bir risktir. Silo üstü kapaklar, aktarma bantları, toz toplama sistemleri ve seviye sensörleri düzenli kontrol gerektirir, ama bu kontroller sıradan bir bakım turu gibi değil, toz yoğunluğu ve sıcak iş kısıtı gözetilerek planlanır. Ayrıca un-bulgur üretiminin kendine has bir hijyen disiplini vardır: tavanda yapılan bir işlem, altındaki gıda ürününe toz veya yabancı madde düşürme riski taşır. Bu sayfada silo üstü işlerin toz-patlama riskini nasıl yönettiğimizi, un-bulgur ve baklava-fıstık işleme hattının kendine özgü koşullarını ve sıcak iş izin sürecini detaylı anlatıyoruz; bu, Gaziantep'teki en dikkatli planlanan iş kalemlerinden biridir.",
        maddeler: [
            {
                baslik: "Un ve bulgur fabrikalarında silo üstü kapak ve aktarma bandı bakımı",
                metin:
                    "Tahıl işleyen tesislerde silo üstü kapaklar, aktarma bantları ve toz toplama sistemleri düzenli kontrol gerektirir; silonun yüksekliği fazla olduğu için genellikle uzun erişimli bomlu makine tercih edilir ve zemin taşıma durumu önceden kontrol edilir. Kontrol sırasında kapak contalarının sağlamlığı, bant gerginliği ve toz toplama filtresinin tıkanıklığı birlikte değerlendirilir; bu üç kalem genellikle aynı ziyarette tamamlanır.",
            },
            {
                baslik: "Tahıl tozu patlama riski ve sıcak iş kısıtı",
                metin:
                    "Belirli yoğunluk ve koşullarda tahıl tozu tutuşabilir bir ortam oluşturabilir; bu sektörün bilinen bir riskidir ve keşiften itibaren ciddiye alınır. Sıcak iş gerektiren, yani kıvılcım çıkarabilecek kesme, kaynak veya taşlama işlemleri, alan temizlenip toz yoğunluğu düşürülmeden ve emiş sistemi devreye alınmadan başlatılmaz. Bu tür işler için tesisin kendi iş güvenliği prosedürüyle birlikte yazılı izin alınır. Sıcak iş gerektirmeyen kontrol ve gözle denetim işlerinde bu kısıt aynı ölçüde katı değildir, ancak yine de toz maskesi ve statik boşalmaya karşı önlemli ekipman kullanılır.",
            },
            {
                baslik: "Baklava ve fıstık işleme hattında hammadde depolama alanı erişimi",
                metin:
                    "Gaziantep'in baklava ve fıstık işleme tesislerinde hammadde (un, şeker, fıstık) depolama alanları, ürünün nem ve sıcaklığa duyarlılığı nedeniyle sıkı kontrollü ortamlardır. Bu alanlarda tavan seviyesindeki havalandırma, aydınlatma ve nem sensörü bakımı, üretimin durduğu veya alanın boşaltıldığı saatlerde yapılır; makine gövdesi işe başlamadan önce temizlenir ve çalışma alanı üretim bölümünden fiziksel olarak ayrılır.",
            },
            {
                baslik: "Kuruyemiş kavurma tesislerinde silo grubu ve baca bakımı",
                metin:
                    "Kavurma işleminin ürettiği sıcak hava ve ince kabuk tozu, silo grubuna yakın egzoz bacalarında birikir ve zamanla tahliye verimini düşürür. Baca temizliği ve fan bakımı, kavurma hattının soğuduğu ve durduğu saatlerde yapılır; sıcak bacaya yaklaşmak hem makine hem çalışan için risklidir. Silo üstü seviye sensörlerinin kontrolü de genellikle aynı ziyarette baca bakımıyla birleştirilir.",
            },
            {
                baslik: "Hasat ve sezon dönemine göre bakım penceresi planlaması",
                metin:
                    "Tahıl ve fıstık işleme tesislerinde hasat sonrası dönem depoların en dolu olduğu, dolayısıyla bakım için en kısıtlı zaman dilimidir. Bu yüzden silo üstü kapsamlı bakımı, mümkünse sezon öncesi veya deponun göreceli boşaldığı ara dönemlere planlıyoruz; sezon ortasında çıkan acil bir arızada ise tesisin üretim kaybını en aza indirmek için müdahaleyi öncelikli olarak ele alıyoruz, ancak bu tür acil çağrıların maliyeti planlı bakımdan doğal olarak daha yüksek oluyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tesis tipine göre silo bakım penceresi ve risk yönetimi",
                paragraflar: [
                    "Gaziantep'in gıda-tahıl sanayisindeki tesis tiplerini, bakım penceresini ve risk yönetimini aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Ana risk", "Bakım penceresi", "Uygun sınıf"],
                    satirlar: [
                        ["Un-bulgur fabrikası", "Tahıl tozu patlaması", "Planlı duruş, sıcak iş izni", "Uzun erişimli bomlu"],
                        ["Baklava-fıstık işleme", "Hijyen-kontaminasyon", "Üretim durduğunda", "Standart akülü, temiz gövde"],
                        ["Kuruyemiş kavurma", "Sıcak baca-toz", "Hat soğuduktan sonra", "Standart akülü"],
                        ["Genel gıda deposu", "Nem-toz-kirlenme", "Depo ara dönemi", "Dar koridor makaslı"],
                        ["Sıcak iş gerektiren onarım", "Kıvılcım-tutuşma", "Yazılı izinle, temizlik sonrası", "Emiş sistemiyle birlikte"],
                    ],
                },
            },
            {
                baslik: "Sıcak iş izin süreci nasıl işliyor",
                paragraflar: [
                    "Silo üstünde veya yakınında kesme, kaynak veya taşlama gibi kıvılcım çıkarabilecek bir işlem gerekiyorsa, önce alanın toz yoğunluğu düşürülür ve emiş sistemi devreye alınır. Ardından tesisin kendi iş güvenliği sorumlusuyla birlikte yazılı bir sıcak iş izni hazırlanır; bu izin, işin süresini, gözcü gerekliliğini ve yangın söndürme ekipmanının hazır bulunmasını kapsar.",
                    "İzin tamamlanmadan sıcak iş başlatılmaz; bu, tartışmaya açık olmayan bir kuraldır. Sıcak iş gerekmeyen, yalnızca gözle kontrol veya sensör bakımı gibi işlerde bu süreç daha hafif olsa da, toz maskesi ve statik önlem yine de standarttır.",
                ],
            },
            {
                baslik: "Gıda güvenliği ile erişim işinin kesişimi",
                paragraflar: [
                    "Gıda üreten bir tesiste yüksekte yapılan her işlem aynı zamanda bir kontaminasyon riski taşır; düşen bir vida, dökülen bir yağ damlası veya havaya karışan bir toz parçacığı altındaki üründe iz bırakabilir. Bu yüzden un-bulgur ve baklava-fıstık işleme tesislerindeki işlerimizde standart uygulama, çalışma alanının altını tam olarak kapatmak ve mümkünse o bölgedeki üretimi geçici olarak durdurmaktır.",
                    "Makinenin kendisi de bu disiplinin parçasıdır: gıda alanına giren her ekipman önce temizlenir, yağlama noktaları kontrol edilir ve sızıntı riski taşıyan parçalar gözden geçirilir. Bazı tesislerde kendi hijyen prosedürlerine göre ek bir onay veya form istenir; bunu keşif aşamasında sorup önceden hazırlıyoruz ki teslim günü beklenmesin.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo üstünde çalışırken tahıl tozu patlama riski oluşturur mu?",
                cevap:
                    "Belirli yoğunluk ve koşullarda evet, bu sektörün bilinen bir riskidir ve biz bunu keşiften itibaren ciddiye alıyoruz. Sıcak iş gerektiren, yani kıvılcım çıkarabilecek kesme, kaynak veya taşlama işlemleri, alan temizlenip toz yoğunluğu düşürülmeden ve emiş sistemi devreye alınmadan başlatılmaz. Bu tür işler için tesisin kendi iş güvenliği prosedürüyle birlikte yazılı izin alınır. Sıcak iş gerektirmeyen kontrol ve gözle denetim işlerinde bu kısıt aynı ölçüde katı değildir, ancak yine de toz maskesi ve statik boşalmaya karşı önlemli ekipman kullanılır.",
            },
            {
                soru: "Baklava-fıstık işleme tesisinde hammadde deposuna girerken özel bir hazırlık yapıyor musunuz?",
                cevap:
                    "Evet, standart hazırlığımız üç adımdan oluşuyor. Önce makinenin gövdesi ve özellikle tekerlekleri detaylı temizlenir; dışarıdan gelen toz ve kirin üretim alanına taşınmaması buna bağlı. Sonra yağlama noktaları ve sızıntı riski taşıyan bağlantılar kontrol edilir; gıda alanında damlama kabul edilemez bir durumdur. Son olarak, tesisin kendi hijyen kuralları varsa bunları önceden alıp uyguluyoruz — bazı tesisler ek olarak koruyucu galoş veya özel giriş prosedürü istiyor. Bu üç adımı atlamadan içeri giriyoruz.",
            },
            {
                soru: "Hasat sonrası dönemde silo doluyken bakım yapılabilir mi?",
                cevap:
                    "Sınırlı ölçüde mümkün ama önermiyoruz. Hasat sonrası dönemde silolar en dolu hâlindedir ve bu dönemde kapsamlı bir bakım için uygun pencere daralır; tesisin üretim temposu da bakımı zorlaştırır. Bu yüzden kapsamlı silo üstü bakımı mümkünse sezon öncesi veya deponun göreceli boşaldığı ara döneme planlamayı öneriyoruz. Acil bir arıza çıkarsa elbette müdahale ediyoruz, ama bu tür acil çağrıların maliyeti planlı bir bakımdan doğal olarak daha yüksek oluyor çünkü hazırlık ve güzergah optimizasyonu için zaman kalmıyor.",
            },
            {
                soru: "Sıcak iş izni almadan silo üstünde kaynak yapabilir misiniz?",
                cevap:
                    "Hayır, bu konuda taviz vermiyoruz. Silo üstünde veya yakınında kıvılcım çıkarabilecek kesme, kaynak veya taşlama işlemi gerekiyorsa önce alanın toz yoğunluğu düşürülür, emiş sistemi devreye alınır ve tesisin iş güvenliği sorumlusuyla birlikte yazılı bir sıcak iş izni hazırlanır. Bu izin işin süresini, gözcü gerekliliğini ve yangın söndürme ekipmanının hazır bulunmasını kapsar. İzin tamamlanmadan iş başlatılmaz; bu süreç bazen işi bir gün geciktirebilir, ama tutuşma riskini göze almak bundan çok daha maliyetlidir.",
            },
            {
                soru: "Un fabrikasında toz maskesi ve statik önlemsiz çalışmıyor musunuz?",
                cevap:
                    "Çalışmıyoruz, bu standart bir gereklilik. Un ve tahıl tozunun yoğun olduğu ortamlarda operatörümüz toz maskesi kullanır ve ekipmanımızda statik elektrik boşalmasına karşı önlemli parçalar bulunur, çünkü statik kıvılcım da tutuşmaya yol açabilecek bir kaynak olarak değerlendirilir. Bu önlemler sıcak iş yapılmayan, yalnızca kontrol amaçlı ziyaretlerde de uygulanır; toz yoğunluğu ne olursa olsun bu ekipmanı çıkarmıyoruz.",
            },
            {
                soru: "Silo üstü kontrolde hangi bilgileri önceden bilmemiz gerekiyor?",
                cevap:
                    "Silonun gövde yüksekliğini (temelden en üst erişim noktasına), etrafındaki diğer silo veya ekipmanlarla olan mesafeyi, zeminin türünü (beton, stabilize, açık saha) ve o an silonun doluluk durumunu bilmemiz gerekiyor. Ayrıca sıcak iş gerekip gerekmediğini önceden netleştirmek, hangi izin sürecinin işleyeceğini baştan planlamamızı sağlıyor. Bu bilgiler keşifte veya teklif öncesi telefonla netleştirilir; eksik bilgiyle gelen makine sahada doğru sınıfta olmayabilir ve bu da zaman kaybına yol açar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in gıda sanayisinin şehrin ikinci büyük üretim kolu olduğu ve tahıl tozunun bilinen bir tutuşma riski taşıdığı kamuya açık genel bilgidir. Sıcak iş izin süreci ve hijyen anlatımı sahadaki tekrarlı gözlemlere ve sektörün genel güvenlik pratiğine dayanır; hiçbir tesis adı, kapasite rakamı veya mesafe rakamı verilmez.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Gaziantep'te OSB İçi Enerji ve Aydınlatma Bakım Platformu Kiralama",
        giris:
            "GAOSB'nin geniş ve çok bölgeli yapısı, kendi içinde uzun cadde aydınlatması, orta gerilim hatları ve tesis giriş direkleriyle küçük bir şehir gibi işler; bu altyapının bakımı, tek bir fabrika binasından farklı bir ölçekte planlama gerektirir. Aydınlatma direği değişimi, tabela ve yönlendirme levhası bakımı, tesis giriş kapısı üstü projektör kontrolü gibi işler genellikle OSB'nin farklı bölgelerine dağılmış çok sayıda noktada tekrarlanır. Bunun yanında tekstil ve gıda tesislerinin kendi enerji hatları -örneğin trafo çevresi aydınlatması veya jeneratör alanı bakımı- da ayrı bir dikkat gerektirir çünkü enerji hatlarına yakın çalışmak elektrik kesintisi koordinasyonunu zorunlu kılar. Bu sayfada OSB içi ve tesis çevresi enerji-aydınlatma bakımını, Gaziantep'in çok bölgeli sanayi yapısına özgü lojistik ve güvenlik koşullarıyla anlatıyoruz.",
        maddeler: [
            {
                baslik: "OSB cadde aydınlatması ve direk bakımı",
                metin:
                    "GAOSB'nin ana ve ara caddelerindeki aydınlatma direkleri, farklı bölgelere dağılmış olduğu için tek bir güzergahta toplu bakım yapmak güzergah planlamasını gerektirir. Direk üstü armatür değişimi ve kablo bağlantı kontrolü, bomlu platformla ulaşılır; direk çevresindeki trafik akışı bakım saatinin belirleyicisidir, genellikle düşük trafik saatine planlanır.",
            },
            {
                baslik: "Trafo ve enerji hattı yakınında güvenli çalışma mesafesi",
                metin:
                    "Tesis çevresindeki trafo ve orta gerilim hatlarına yakın çalışırken, platform ile enerjili hat arasında güvenli mesafe korunur; bu mesafe hattın gerilim seviyesine göre değişir. Enerji hattına çok yakın bir iş gerekiyorsa, ilgili elektrik dağıtım şirketinden veya tesisin kendi elektrik ekibinden kesinti koordinasyonu istenir; kesinti sağlanmadan hatta yakın çalışılmaz.",
            },
            {
                baslik: "Tesis giriş tabelası ve yönlendirme levhası bakımı",
                metin:
                    "OSB içindeki tesislerin giriş tabelaları ve yönlendirme levhaları, açık havada sürekli güneş ve toza maruz kaldığı için düzenli aydınlatma ve gövde bakımı ister. Bu işler genellikle gündüz, sevkiyat trafiğinin göreceli sakin olduğu saatlere alınır; tabelanın giriş kapısına yakın konumu nedeniyle araç geçişini engellememek için çalışma alanı geçici olarak işaretlenir.",
            },
            {
                baslik: "Jeneratör ve yedek güç alanı çevresi bakımı",
                metin:
                    "Tesislerin yedek güç için kullandığı jeneratör alanlarının üstü, egzoz bacası ve havalandırma menfezi içerdiği için düzenli kontrol gerektirir. Jeneratör çalışır durumdayken üstünde iş yapılmaz; bakım, jeneratörün test veya bakım için zaten durdurulduğu pencereye denk getirilir.",
            },
            {
                baslik: "Çok noktalı aydınlatma turlarında iş birleştirme",
                metin:
                    "Birden fazla direk veya tabelanın aynı bölgede olduğu durumlarda, tek bir ziyarette birden fazla noktayı sırayla tamamlamak nakliye ve kurulum maliyetini düşürür. Bu tür çok noktalı turlar için önceden bir liste ve güzergah çıkarılır; liste ne kadar netse tur o kadar verimli ilerler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre güvenlik ve zamanlama",
                paragraflar: [
                    "OSB içi ve tesis çevresi enerji-aydınlatma işlerinde sık karşılaştığımız durumları aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ana risk", "Zamanlama", "Uygun sınıf"],
                    satirlar: [
                        ["Cadde aydınlatması", "Trafik", "Düşük trafik saati", "Bomlu, geniş saha"],
                        ["Trafo-enerji hattı yakını", "Elektrik teması", "Kesinti koordinasyonuyla", "Yalıtımlı ekipman"],
                        ["Giriş tabelası", "Araç geçişi", "Gündüz, işaretlenmiş alan", "Kompakt bomlu"],
                        ["Jeneratör alanı", "Çalışır motora yakınlık", "Jeneratör durduğunda", "Standart makaslı"],
                        ["Çok noktalı tur", "Güzergah verimliliği", "Önceden liste-güzergah", "Değişken"],
                    ],
                },
            },
            {
                baslik: "Elektrik dağıtım şirketiyle koordinasyon",
                paragraflar: [
                    "Orta gerilim hatlarına yakın işlerde, güvenli çalışma mesafesi tek başına yeterli olmayabilir; bazı işlerde hattın geçici olarak kesilmesi gerekir. Bu koordinasyon tesisin kendi elektrik ekibi veya bölgesel dağıtım şirketiyle önceden planlanır; kesinti talebi genellikle birkaç gün önceden bildirilmesi gereken bir süreçtir, bu yüzden enerji hattına yakın işleri mümkün olduğunca erken haber vermenizi öneriyoruz.",
                    "Kesinti sağlanamayan acil durumlarda, hatta güvenli mesafe daha da artırılır ve iş yalnızca zorunlu asgari süreyle sınırlı tutulur; bu durumda işin kapsamı da daraltılabilir.",
                ],
            },
            {
                baslik: "Çok bölgeli OSB'de aydınlatma turunun planlanması",
                paragraflar: [
                    "GAOSB'nin farklı bölgelere yayılmış yapısı, aydınlatma bakım turlarını da etkiler; bir bölgeden diğerine geçiş, aynı bölgedeki birkaç direk arasında geçmekten daha uzun sürebilir. Bu yüzden aynı bölgedeki işleri art arda sıralıyor, bölge değişimini günün en az sayıda yapılacağı şekilde planlıyoruz.",
                    "Müşteriden gelen aydınlatma bakım taleplerinde hangi bölgede kaç nokta olduğunu netleştirmek, teklif ve randevu sürecinin ilk adımı; bölge ve nokta sayısı bilgisi eksik geldiğinde randevu saatinin gerçekçiliği düşer.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerji hattına yakın çalışırken elektrik kesintisi mutlaka gerekiyor mu?",
                cevap:
                    "Her zaman değil, hattın gerilim seviyesine ve platformla arasındaki mesafeye bağlı. Güvenli mesafe korunabiliyorsa kesinti gerekmeden çalışabiliyoruz. Ancak iş, güvenli mesafenin altına inmeyi gerektiriyorsa, ilgili elektrik dağıtım şirketinden veya tesisin kendi elektrik ekibinden kesinti koordinasyonu istiyoruz; kesinti sağlanmadan hatta yakın çalışmıyoruz. Kesinti talebi genellikle birkaç gün önceden bildirilmesi gereken bir süreç olduğu için, enerji hattına yakın işleri mümkün olduğunca erken haber vermenizi öneriyoruz.",
            },
            {
                soru: "OSB'deki birden fazla direği tek ziyarette bakım yapabilir misiniz?",
                cevap:
                    "Evet, bu tür çok noktalı turlar hem sizin hem bizim için daha verimli. Önceden bir liste ve güzergah çıkarıyoruz; hangi bölgede kaç direk veya tabela olduğunu netleştirdiğinizde, aynı bölgedeki noktaları art arda sıralayarak tek seferde tamamlıyoruz. Liste ne kadar netse, tur o kadar hızlı ve ekonomik ilerliyor; eksik bilgiyle gelen bir tur sahada beklenmedik ek noktalarla uzayabiliyor.",
            },
            {
                soru: "Jeneratör çalışırken üstünde bakım yapılabilir mi?",
                cevap:
                    "Hayır, jeneratör çalışır durumdayken üstünde iş yapmıyoruz; hem egzoz gazı hem hareketli parça riski kabul edilemez. Bakımı, jeneratörün zaten test veya periyodik bakım için durdurulduğu pencereye denk getiriyoruz. Jeneratörün durdurulacağı zamanı tesis yönetimiyle önceden netleştiriyoruz; bu koordinasyon olmadan işe başlamıyoruz.",
            },
            {
                soru: "OSB cadde aydınlatmasında trafik akışını nasıl etkiliyorsunuz?",
                cevap:
                    "Etkilemeye çalışmıyoruz, bu yüzden bakımı düşük trafik saatlerine planlıyoruz. Direk çevresinde çalışırken görünürlüğü artıran koni ve şerit kullanıyor, aracın geçiş şeridini olabildiğince açık tutuyoruz. Yoğun sevkiyat saatlerinde cadde aydınlatması bakımı önermiyoruz; bunun yerine sabah erken veya öğle sonrası göreceli sakin saatleri tercih ediyoruz.",
            },
            {
                soru: "Tesis giriş tabelasının aydınlatması bozulduğunda ne kadar sürede müdahale ediyorsunuz?",
                cevap:
                    "Bu, o anki filo müsaitliğine ve OSB'nin hangi bölgesinde olduğunuza bağlı olarak değişiyor; kesin bir süre vaat etmek yerine çağrı geldiğinde gerçekçi bir zaman aralığı veriyoruz. Acil bir güvenlik riski varsa (örneğin tabelanın düşme riski) önceliklendiriyoruz. Planlı bir bakım ise, aynı bölgedeki başka bir işle birleştirerek en verimli tarihe yerleştiriyoruz.",
            },
            {
                soru: "Aydınlatma bakımı için hangi bilgileri önceden vermemiz gerekiyor?",
                cevap:
                    "Direk veya tabelanın konumunu (mümkünse OSB bölge/blok bilgisiyle), yüksekliğini, sorunun ne olduğunu (yanmıyor, titriyor, kablo görünür şekilde hasarlı gibi) ve varsa yakınında enerji hattı olup olmadığını bilmemiz işi hızlandırıyor. Birden fazla nokta varsa, hepsinin listesini tek seferde almak, tek tek ayrı çağrı almaktan daha verimli bir tur planlamamızı sağlıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. GAOSB'nin çok bölgeli yapısı ve OSB içi altyapı bakımının genel karakteri kamuya açık bilgidir. Enerji hattı yakınında çalışma ve kesinti koordinasyonu genel elektrik güvenliği pratiğine dayanır; belirli direk, tabela veya tesis adı verilmez.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Gaziantep'te Operatörlü ve Operatörsüz Platform Kiralama",
        giris:
            "Operatörlü mü operatörsüz mü kiralama sorusu, Gaziantep'te iki farklı müşteri profilinden geliyor: bir yanda GAOSB'deki tekstil ve gıda tesislerinin kendi bakım ekibi olan, düzenli ve tekrarlayan işler için operatörsüz (yalnızca makine) kiralamayı tercih eden orta-büyük işletmeler; diğer yanda Şahinbey ve Şehitkamil'deki küçük ölçekli imalathane ve dükkanların, tek seferlik bir işi kendi ekibi olmadan tamamlamak için operatörlü kiralamayı tercih eden işletmeler. Bu iki profil arasındaki fark yalnızca tercih değil, aynı zamanda güvenlik ve yeterlilik meselesidir: operatörsüz kiralamada makineyi kullanacak kişinin sertifikalı ve deneyimli olması zorunludur, operatörlü kiralamada ise bu sorumluluk bize aittir. Gaziantep'in dar sokaklı çarşı dokusu ve GAOSB'nin geniş sanayi sahaları gibi birbirinden farklı çalışma ortamları, operatör kararını da etkiler; dar ve hassas bir alanda deneyimli bir operatörün varlığı, işin güvenliği açısından belirgin fark yaratır. Bu sayfada iki kiralama modelinin Gaziantep'teki hangi iş tipine daha uygun olduğunu ve karar sürecini anlatıyoruz.",
        maddeler: [
            {
                baslik: "GAOSB tesislerinde kendi ekibiyle çalışan işletmeler için operatörsüz kiralama",
                metin:
                    "Kendi bakım ekibi ve sertifikalı operatörü olan tekstil veya gıda tesisleri, tekrarlayan ve tanıdık işler için genellikle operatörsüz kiralamayı tercih eder; bu, günlük kiralama maliyetini düşürür ve tesisin kendi programına göre esnek kullanım sağlar. Operatörsüz kiralamada, makineyi kullanacak kişinin geçerli bir sertifikaya sahip olduğu teslim öncesi belgeyle doğrulanır; bu adım atlanmaz.",
            },
            {
                baslik: "Küçük imalathane ve dükkanlar için operatörlü kiralama",
                metin:
                    "Şahinbey ve Şehitkamil'deki küçük ölçekli imalathane ve dükkanların çoğunda kendi platform operatörü bulunmaz; bu işletmeler için operatörlü kiralama, hem makineyi hem yeterlilik sorununu tek seferde çözer. Operatörümüz işin türüne ve mekana (dar sokak, showroom, tarihi doku) aşina olduğu için, bu tür işlerde ek bir yönlendirmeye gerek kalmadan çalışabilir.",
            },
            {
                baslik: "Dar ve hassas alanlarda deneyimli operatör avantajı",
                metin:
                    "Tarihi çarşı dokusunda dar bir dükkan içinde veya showroom teşhir köşesinde çalışırken, operatörün deneyimi işin hızını ve güvenliğini doğrudan etkiler. Bu tür işlerde operatörsüz kiralama yapılıyorsa, kullanıcı firmanın operatörünün benzer dar alan deneyimine sahip olduğundan emin olması önerilir; deneyimsiz bir operatör dar alanda hem makineye hem çevreye zarar verebilir.",
            },
            {
                baslik: "Gıda ve boyahane gibi hassas ortamlarda operatör sorumluluğu",
                metin:
                    "Gıda tesislerinde hijyen kurallarına uyum veya boyahanede nem koşullarına dikkat gibi ortam kısıtlarında, operatörlü kiralama bu kuralların doğru uygulandığından emin olmanın bir yoludur çünkü operatörümüz bu koşullara aşina şekilde çalışır. Operatörsüz kiralamada bu sorumluluk tamamen kiralayan tarafa geçer; bu farkı teklif aşamasında açıkça belirtiyoruz.",
            },
            {
                baslik: "Uzun süreli kiralamalarda operatör modelini değiştirme",
                metin:
                    "Bazı işletmeler kiralama süresinin başında operatörlü başlayıp, kendi ekiplerini eğittikten veya sertifikalandırdıktan sonra operatörsüz modele geçmek ister. Bu geçiş mümkündür; ancak geçiş anında kullanıcı firmanın operatörünün sertifikasının geçerli olduğu doğrulanmadan model değiştirilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İşletme profiline göre model karşılaştırması",
                paragraflar: [
                    "Gaziantep'teki iki farklı müşteri profilinin operatör tercihini aşağıda karşılaştırdık.",
                ],
                tablo: {
                    basliklar: ["İşletme profili", "Tipik ihtiyaç", "Önerilen model", "Not"],
                    satirlar: [
                        ["GAOSB büyük tesis", "Tekrarlayan, tanıdık iş", "Operatörsüz", "Sertifika doğrulanır"],
                        ["Küçük imalathane/dükkan", "Tek seferlik, dar alan", "Operatörlü", "Ek yönlendirmeye gerek yok"],
                        ["Showroom-tarihi doku", "Hassas, dar mekan", "Operatörlü tercih edilir", "Deneyim önemli"],
                        ["Gıda-boyahane tesisi", "Ortam kısıtlı iş", "Operatörlü veya sertifikalı operatör", "Hijyen/nem sorumluluğu"],
                        ["Uzun süreli kiralama", "Model değişebilir", "Başta operatörlü, sonra operatörsüz", "Geçişte sertifika kontrolü"],
                    ],
                },
            },
            {
                baslik: "Sertifika ve yeterlilik doğrulama süreci",
                paragraflar: [
                    "Operatörsüz kiralamada, makineyi kullanacak kişinin platform operatörlüğü sertifikasının geçerlilik tarihini ve kapsamını teslim öncesi kontrol ediyoruz; bu belge olmadan makineyi teslim etmiyoruz, çünkü sertifikasız kullanım hem yasal hem güvenlik açısından kabul edilemez bir risktir.",
                    "Operatörlü kiralamada ise bizim operatörümüzün sertifikası ve ilgili sınıftaki deneyimi zaten güncel tutulur; müşterinin bu konuda ayrıca bir kontrol yapmasına gerek kalmaz.",
                ],
            },
            {
                baslik: "Maliyet farkı ve karar süreci",
                paragraflar: [
                    "Operatörsüz kiralama günlük maliyeti düşürür çünkü operatör ücreti dahil değildir; ancak bu, yalnızca kendi sertifikalı operatörü olan işletmeler için gerçek bir tasarruftır. Sertifikalı operatörü olmayan bir işletme için operatörlü kiralama, ayrıca bir operatör bulup eğitme maliyetinden kaçındığı için genellikle daha ekonomik çıkar.",
                    "Hangi modelin sizin için uygun olduğuna karar verirken, kendi ekibinizin sertifikalı operatörü olup olmadığını ve işin ne kadar sık tekrarlanacağını soruyoruz; tek seferlik bir iş için operatör eğitmek mantıklı değildir, sık tekrarlayan bir ihtiyaç için ise kendi operatörünüzü yetiştirmek uzun vadede avantajlı olabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörsüz kiraladığımızda kendi personelimiz sertifikasız kullanabilir mi?",
                cevap:
                    "Hayır, kesinlikle kullanamaz. Operatörsüz kiralamada makineyi kullanacak kişinin geçerli bir platform operatörlüğü sertifikasına sahip olması zorunludur ve bu belgeyi teslim öncesi kontrol ediyoruz. Sertifika olmadan makineyi teslim etmiyoruz; bu, hem yasal hem güvenlik açısından taviz vermediğimiz bir kural. Sertifikalı personeliniz yoksa operatörlü kiralama modelini öneriyoruz.",
            },
            {
                soru: "Operatörünüz bizim tesisimizin özel kurallarına (hijyen, güvenlik) uyum sağlıyor mu?",
                cevap:
                    "Evet, operatörlü kiralamada operatörümüz tesisinizin kendi hijyen ve güvenlik prosedürüne uyar; bu prosedürleri keşif aşamasında öğrenip önceden hazırlanıyoruz. Gıda tesisleri için galoş, özel giriş prosedürü gibi ek kurallar; boyahane gibi hassas ortamlar için nem koruma önlemleri, operatörümüzün standart çalışma disiplininin bir parçası. Özel bir prosedürünüz varsa teklif öncesi bize iletmeniz, teslim gününde beklenmemesini sağlar.",
            },
            {
                soru: "Dar sokaklı çarşıda operatörsüz kiralama önermiyor musunuz?",
                cevap:
                    "Kesin bir kural değil ama tercih ederiz operatörlü olsun, çünkü dar alan manevrası deneyim gerektirir. Operatörsüz kiralama istiyorsanız, kullanıcınızın benzer dar alan ve tarihi doku deneyimine sahip olduğundan emin olmanızı öneririz; deneyimsiz bir operatör dar sokakta hem makineye hem çevredeki yapıya zarar verebilir. Bu riski açıkça belirtiyoruz ve kararı sizinle birlikte veriyoruz; ısrar ederseniz operatörsüz de kiralayabiliyoruz ama sorumluluğun nerede olduğunu net konuşuyoruz.",
            },
            {
                soru: "Operatörlü kiralamada operatörün yemek ve mola süreleri işi nasıl etkiliyor?",
                cevap:
                    "Operatörümüzün standart çalışma düzeni içinde makul mola ve öğün süreleri planlanır; bu süreler işin toplam süresine dahil edilir ve teklif aşamasında şeffaf şekilde belirtilir. Uzun süren bir iş günü için mola planı önceden paylaşılır, böylece sizin de saha akışınızı buna göre ayarlamanız mümkün olur. Sürpriz bir kesinti yaşanmaması için bu detayı teklif öncesi netleştiriyoruz.",
            },
            {
                soru: "Kendi ekibimizi eğitip zamanla operatörsüz modele geçebilir miyiz?",
                cevap:
                    "Evet, bu mümkün ve bazı müşterilerimiz bu yolu tercih ediyor. Kiralama süresinin başında operatörlü başlayıp, kendi personeliniz sertifika aldıktan sonra operatörsüz modele geçebilirsiniz. Geçiş anında personelinizin sertifikasının geçerli olduğunu doğrulamamız gerekiyor; bu doğrulama olmadan model değiştirmiyoruz. Geçiş sürecini önceden planlarsanız, kiralama sözleşmesine bu değişikliği de dahil edebiliyoruz.",
            },
            {
                soru: "Operatörlü ve operatörsüz arasındaki fiyat farkı ne kadar?",
                cevap:
                    "Kesin bir oran vermek yanıltıcı olur çünkü fark, makinenin sınıfına ve işin süresine göre değişir; ama genel eğilim, operatörsüz kiralamanın günlük maliyeti operatör ücreti kadar düşürdüğü yönünde. Bunun karşılığında operatörsüz modelde sertifikalı personel bulundurma ve makinenin güvenli kullanımından sorumlu olma yükü size geçiyor. Hangi modelin toplamda sizin için daha ekonomik olduğunu, işin sıklığı ve kendi operatör kapasiteniz üzerinden birlikte hesaplıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in GAOSB büyük tesis dokusu ile Şahinbey-Şehitkamil küçük işletme dokusu daha önceki bölge sayfalarında da işlenen kamuya açık bilgidir. Operatör sertifikasyonu genel yasal-güvenlik pratiğidir; karar süreci sahadaki tekrarlı müşteri profillerinden çıkarılmıştır, işletme adı verilmez.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Gaziantep'te Çok Noktalı Rota Bakım Platformu Kiralama",
        giris:
            "GAOSB tek bir kapıdan girilen kompakt bir alan değil, farklı dönemlerde kurulmuş ve genişlemiş, birbirine yakın ama ayrı bölgelerden oluşan geniş bir sanayi ağıdır; bu yapı, tek bir günde birden fazla tesise hizmet vermeyi gerektiren müşteriler için özel bir planlama problemi doğurur. Bir zincir mağaza grubunun farklı şubelerindeki tabela bakımı, bir OSB yönetiminin birden fazla bölgedeki aydınlatma turu, ya da bir yatırımcının farklı bölgelerdeki inşaat hâlindeki tesislerinin denetimi gibi işler, tek noktalı bir randevudan farklı bir güzergah mantığı ister. Bu sayfada, aynı gün veya aynı hafta içinde Gaziantep'in farklı bölgelerinde birden fazla noktaya hizmet verme sürecimizi, GAOSB'nin çok bölgeli yapısına özgü lojistik gerçeklerle anlatıyoruz.",
        maddeler: [
            {
                baslik: "GAOSB'nin çok bölgeli yapısında güzergah kurgusu",
                metin:
                    "GAOSB birden fazla ayrı bölgeden oluştuğu için, bir günde birden fazla tesise hizmet verirken bölgeler arası geçiş süresini hesaba katmak gerekir; aksi hâlde plan kâğıt üstünde tutarlı görünse de sahada gecikmeye döner. Bizim yaklaşımımız, aynı bölgedeki işleri art arda sıralamak ve bölge değişimini günün en az bir kez yapılacağı şekilde planlamaktır.",
            },
            {
                baslik: "Zincir işletmelerin farklı şubelerinde tekrarlayan iş",
                metin:
                    "Birden fazla şubesi olan bir işletme (örneğin bir showroom zinciri) için tabela, aydınlatma veya cephe bakımı, her şubede benzer nitelikte tekrarlanır. Bu tür işlerde tek bir standart iş listesi çıkarılır ve her şube ziyaretinde aynı kontrol listesi uygulanır; bu, hem verimliliği artırır hem de şubeler arası tutarlılık sağlar.",
            },
            {
                baslik: "OSB genelinde dağınık noktalarda denetim ve kontrol turu",
                metin:
                    "Bir OSB yönetimi veya büyük bir işletme grubu, farklı bölgelerdeki birden fazla noktanın (direk, tabela, giriş aydınlatması) periyodik kontrolünü tek bir tur hâlinde planlamak isteyebilir. Bu tür turlarda önceden bir nokta listesi ve harita çıkarılır, güzergah bu listeye göre optimize edilir.",
            },
            {
                baslik: "Farklı bölgelerdeki inşaat hâlindeki tesislerin sıralı ziyareti",
                metin:
                    "Birden fazla bölgede aynı anda inşaat hâlinde tesisi olan bir yatırımcı için, her sahadaki çelik konstrüksiyon veya montaj işini aynı hafta içinde sıralı olarak planlamak mümkündür. Bu tür işlerde her sahanın kendi zemin ve erişim koşulu ayrı değerlendirilir, ama nakliye güzergahı ortak planlanır.",
            },
            {
                baslik: "Bölge bilgisinin netliği randevu gerçekçiliğini belirler",
                metin:
                    "Müşteriden gelen çok noktalı çağrılarda hangi bölgede kaç nokta olduğunu netleştirmek, teklif ve randevu sürecinin ilk adımıdır. Bölge bilgisi eksik geldiğinde randevu saatinin gerçekçiliği düşer; bu yüzden çok noktalı talep alırken önce eksiksiz bir liste ve bölge bilgisi istiyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çok noktalı iş tiplerine göre planlama",
                paragraflar: [
                    "Gaziantep'te sık karşılaştığımız çok noktalı iş tiplerini ve planlama yaklaşımını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Nokta dağılımı", "Planlama yaklaşımı", "Not"],
                    satirlar: [
                        ["Zincir şube bakımı", "Şehir geneli", "Standart kontrol listesi", "Şubeler arası tutarlılık"],
                        ["OSB denetim turu", "Çok bölgeli GAOSB", "Önceden harita-liste", "Bölge sıralaması optimize"],
                        ["İnşaat sahaları turu", "Farklı OSB'ler", "Haftalık sıralı ziyaret", "Her saha ayrı değerlendirilir"],
                        ["Tek işletme, çok kalem", "Tek bölge", "Aynı ziyarette birleştirme", "Nakliye maliyeti düşer"],
                        ["Acil çok noktalı arıza", "Değişken", "Öncelik sıralaması", "Standart turdan daha maliyetli"],
                    ],
                },
            },
            {
                baslik: "Nokta listesi ve harita hazırlığı",
                paragraflar: [
                    "Çok noktalı bir iş talebi geldiğinde, önce her noktanın konumunu (mümkünse bölge/blok bilgisiyle), yapılacak işi ve tahmini süresini içeren bir liste hazırlamanızı istiyoruz. Bu liste ne kadar netse, güzergahı o kadar verimli kurabiliyoruz; eksik bilgiyle gelen bir talep sahada beklenmedik ek noktalarla uzayabiliyor ve diğer noktaların zamanlamasını da etkileyebiliyor.",
                    "Liste elimize geçtiğinde, coğrafi olarak yakın noktaları gruplandırıp bir güzergah taslağı çıkarıyoruz; bu taslağı sizinle paylaşıp onay aldıktan sonra kesinleştiriyoruz.",
                ],
            },
            {
                baslik: "Gecikme durumunda diğer noktalara etkisi",
                paragraflar: [
                    "Çok noktalı bir turda ilk noktadaki iş beklenenden uzun sürerse, bu gecikme sonraki noktaların zamanlamasını da etkiler. Bu durumda etkilenen noktalardaki ilgili kişilere mümkün olan en kısa sürede haber veriyoruz; sessizce geç kalmak yerine gerçekçi bir yeni saat bildirmeyi tercih ediyoruz.",
                    "Bazı durumlarda, ilk noktadaki ek iş kapsamı önceden bilinmiyorsa, tur planını gün içinde yeniden düzenlememiz gerekebilir; bu esnekliği turun başında sizinle konuşuyoruz ki sürpriz olmasın.",
                ],
            },
        ],
        sss: [
            {
                soru: "GAOSB'de birden fazla bölgede işimiz var, aynı gün hepsini yapabilir misiniz?",
                cevap:
                    "Genellikle evet, ancak bölgeler arası mesafeye göre günü planlamamız gerekiyor. GAOSB birden fazla ayrı bölgeden oluştuğu için bir bölgeden diğerine geçiş, sahada birkaç iş kalemi bitirmekten daha uzun sürebiliyor. Bu yüzden aynı gün birden fazla bölgeye gitmek istediğinizde, hangi bölgelerde ne kadar süreceğini önceden bildirmenizi istiyoruz; buna göre güzergahı en az geçişle tamamlayacak sırayı kuruyoruz. Bazı durumlarda iki bölgeyi aynı günde bitirmek yerine ardışık iki güne yaymak hem daha gerçekçi hem daha ucuza geliyor.",
            },
            {
                soru: "Zincir şubelerimizin hepsinde aynı standart işi mi uyguluyorsunuz?",
                cevap:
                    "Evet, sizinle birlikte belirlediğimiz standart bir kontrol listesini her şubede aynı şekilde uyguluyoruz; bu hem tutarlılık sağlar hem de her ziyarette yeniden iş tanımlamaya gerek kalmaz. Elbette bazı şubelerin fiziksel koşulları farklı olabilir (bir showroom dar bir sokakta, diğeri geniş bir cadde üzerinde gibi); bu farkları ilk ziyarette not alıp sonraki turlarda göz önünde bulunduruyoruz.",
            },
            {
                soru: "İlk noktadaki iş uzarsa sonraki randevular ne oluyor?",
                cevap:
                    "Bu durumda etkilenen noktalardaki ilgili kişilere mümkün olan en kısa sürede haber veriyoruz; sessizce geç kalmak yerine gerçekçi bir yeni saat bildirmeyi tercih ediyoruz. Eğer gecikme çok büyükse, o günkü turu yeniden sıralayıp en kritik noktaları öne alabiliyoruz. Bu tür esnekliği turun başında sizinle konuşuyoruz ki sürpriz olmasın; çok sıkı bir zaman çizelgesi gerekiyorsa bunu baştan belirtmenizi öneririz.",
            },
            {
                soru: "Nokta listesini nasıl paylaşmalıyız, hangi bilgiler gerekiyor?",
                cevap:
                    "Her nokta için konum (mümkünse bölge/blok bilgisiyle), yapılacak iş türü, tahmini süre ve varsa özel erişim kısıtını (dar sokak, kapı ölçüsü gibi) içeren bir liste istiyoruz. Liste ne kadar detaylıysa, güzergahı o kadar doğru kurabiliyoruz. Fotoğraf eklenebiliyorsa özellikle erişim kısıtı olan noktalarda bu çok yardımcı oluyor; telefonla sözlü aktarılan bilgi genellikle eksik kalıyor.",
            },
            {
                soru: "Çok noktalı tur, tek tek ayrı randevu almaktan ne kadar ucuz?",
                cevap:
                    "Kesin bir oran vermek doğru olmaz çünkü fark, noktaların birbirine uzaklığına ve iş yoğunluğuna göre değişir; ama genel eğilim, tek bir nakliye ve kurulum maliyetinin birden fazla nokta arasında paylaşılmasının, her nokta için ayrı ayrı randevu almaktan belirgin şekilde ucuza geldiği yönünde. Teklif hazırlarken hem tek tek hem birleştirilmiş senaryonun maliyetini karşılaştırmalı gösteriyoruz, böylece kararı net verilere göre verebiliyorsunuz.",
            },
            {
                soru: "Acil bir arıza çok noktalı planı bozar mı?",
                cevap:
                    "Bozabilir, bu yüzden acil çağrıları önceliklendiriyoruz ama planlı turu tamamen iptal etmek yerine mümkünse yeniden sıralıyoruz. Acil arızanın konumu, o günkü güzergaha yakınsa turun bir parçası olarak eklenebilir; uzaksa ayrı bir sefer gerekebilir ve bu durumda maliyet planlı turdan daha yüksek olur. Acil durumu bildirdiğinizde önce filo ve güzergah durumunu kontrol edip gerçekçi bir süre veriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. GAOSB'nin çok bölgeli yapısı daha önceki bölge sayfalarında da işlenen kamuya açık bilgidir. Çok noktalı güzergah planlama yaklaşımı sahadaki tekrarlı lojistik pratiğinden çıkarılmıştır; belirli müşteri, şube veya nokta adı verilmez.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Gaziantep'te Zor Zemin ve Açık Saha Platform Kiralama",
        giris:
            "Bu sayfada dürüst bir kapsam belirlemek gerekiyor: Gaziantep'teki hizmetimizin ağırlığı GAOSB'nin dokuma-boyahane-gıda tesisleri ve tarihi çarşının dar sokaklarıdır, yani büyük ölçüde beton veya stabilize zeminli, yapılaşmış alanlardır. Geniş tarım arazilerinde veya kırsal, hazırlıksız tarlalarda düzenli çalışma talebimiz sınırlıdır ve bu tür işler için özel bir uzmanlığımız yoktur. Buna karşılık, OSB içindeki inşaat hâlindeki hollerin stabilize veya dolgu zeminleri, Nizip'teki zeytinyağı ve tarım ürünleri tesislerinin açık saha ve depolama alanları, ve yağış sonrası yumuşayan OSB dış saha bölgeleri gibi 'zor ama yapılaşmış sanayi sahası' zemin türlerinde düzenli deneyimimiz var. Bu sayfada hangi zor zemin senaryolarını gerçekten kapsadığımızı, hangilerinde dürüstçe sınırlı kaldığımızı ve açık saha işlerinde makine seçim mantığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "İnşaat hâlindeki hollerde stabilize ve dolgu zemin",
                metin:
                    "Yeni yapılan sanayi hollerinde beton henüz dökülmemiş olabilir; bu durumda stabilize toprak veya kaba dolgu zeminde çalışmak gerekir. Bu koşullarda lastikli veya paletli 4x4 dizel platform, standart akülü makaslı platforma göre çok daha uygun bir seçimdir çünkü düzensiz zeminde denge ve manevra kabiliyeti daha yüksektir.",
            },
            {
                baslik: "Nizip'teki açık saha tarım ve zeytinyağı tesislerinde zemin",
                metin:
                    "Nizip OSB'deki tarım ürünleri deposu ve zeytinyağı tesislerinin açık saha ve yükleme alanları çoğunlukla stabilize veya beton kaplıdır; bu, kırsal bir tarla zemininden farklıdır çünkü sanayi sahası olarak düzenlenmiştir. Bu tür sahalarda lastikli veya paletli bomlu makine rahatça manevra eder; sadece yağışlı günlerin ardından zeminin oturmasını beklemek gerekir.",
            },
            {
                baslik: "Yağış sonrası zemin yumuşaması ve bekleme kararı",
                metin:
                    "Gaziantep'te özellikle kış aylarında yağış sonrası açık saha ve stabilize zeminler geçici olarak yumuşayabilir. Bu durumda ağır bir makineyi zemine sokmak hem makinenin batma riskini hem de zeminin kalıcı hasar görme riskini artırır. Bu tür durumlarda işi birkaç gün ertelemeyi veya zemine geçici taşıma plakası döşemeyi öneriyoruz.",
            },
            {
                baslik: "Gerçek tarım arazisi ve kırsal iş taleplerinde kapsam sınırı",
                metin:
                    "Şehir dışındaki gerçek tarım arazilerinde, örneğin bir sera kompleksinin veya çiftlik binasının hazırlıksız toprak zemininde düzenli çalışma talebimiz azdır ve bu koşullar için özel ekipman veya deneyim biriktirmiş değiliz. Böyle bir talep gelirse, önce zemin fotoğrafı ve koşulunu isteyip dürüstçe değerlendiriyoruz; uygun olmadığını düşündüğümüz durumlarda bunu açıkça söylüyoruz.",
            },
            {
                baslik: "Zemin taşıma kapasitesi kontrolü ve yük dağıtım plakası",
                metin:
                    "Zor zeminlerde çalışırken makinenin toplam ağırlığının zemine yaydığı basınç, zeminin taşıma kapasitesini aşmamalıdır. Şüpheli zeminlerde ayak (outrigger) veya tekerlek altına yük dağıtım plakası konur; bu, hem makinenin batmasını hem zeminde kalıcı iz oluşmasını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre kapsam ve makine tercihi",
                paragraflar: [
                    "Gaziantep'teki farklı zor zemin senaryolarını ve bunlardaki kapsamımızı aşağıda dürüstçe özetledik.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Kapsam", "Uygun sınıf", "Not"],
                    satirlar: [
                        ["İnşaat hâlindeki hol (stabilize/dolgu)", "Düzenli deneyim", "4x4 dizel lastikli/paletli", "Zemin kür durumu kontrol edilir"],
                        ["OSB açık saha/depolama", "Düzenli deneyim", "Lastikli-paletli bomlu", "Yağış sonrası bekleme"],
                        ["Yağış sonrası yumuşamış zemin", "Düzenli deneyim, dikkatli planlama", "Yük dağıtım plakalı", "Gerekirse erteleme"],
                        ["Gerçek tarım arazisi/kırsal toprak", "Sınırlı, özel uzmanlık yok", "Değerlendirme sonrası", "Dürüstçe reddedilebilir"],
                        ["Şüpheli taşıma kapasiteli zemin", "Düzenli deneyim", "Ayak altı plaka zorunlu", "Keşifte kontrol"],
                    ],
                },
            },
            {
                baslik: "Zemin değerlendirmesi nasıl yapılıyor",
                paragraflar: [
                    "Açık saha veya zemin durumu şüpheli olan her iş için, telefonda verilen tahmini bilgiyle makine göndermiyoruz; mümkünse fotoğraf, mümkün değilse yerinde keşifle zeminin türünü (beton, stabilize, dolgu, doğal toprak) ve o anki nem durumunu değerlendiriyoruz.",
                    "Zemin, planlanan makinenin ağırlığını güvenle taşıyamayacak durumdaysa üç seçenek sunuyoruz: işi zeminin kuruyacağı bir tarihe ertelemek, yük dağıtım plakası kullanmak, veya daha hafif bir makine sınıfına geçmek. Hangi seçeneğin uygun olduğuna birlikte karar veriyoruz.",
                ],
            },
            {
                baslik: "Kapsam dışı taleplerde yönlendirme",
                paragraflar: [
                    "Gerçek tarım arazisi veya kırsal, hazırlıksız zeminde düzenli iş talebi geldiğinde, bunu üstlenmek yerine dürüstçe sınırımızı belirtiyoruz; bu tür işler için arazi tipi ekipmanda uzmanlaşmış başka bir tedarikçiyi araştırmanızı öneriyoruz. Amacımız, uygun olmadığımızı bildiğimiz bir işi üstlenip sahada sorun yaşamak yerine, baştan doğru beklenti kurmak.",
                    "Sınırda kalan durumlarda (örneğin OSB'ye yakın ama tam sanayi sahası sayılmayan bir arazi), zemin fotoğrafını görüp değerlendirdikten sonra karar veriyoruz; kesin bir kural yerine somut duruma bakıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gerçek bir tarlada veya kırsal arazide çalışabiliyor musunuz?",
                cevap:
                    "Dürüst olmak gerekirse, bu bizim ana uzmanlık alanımız değil. Hizmetimiz büyük ölçüde GAOSB'nin sanayi tesisleri ve Gaziantep'in ticaret-yerleşim dokusu üzerine kurulu; gerçek tarım arazilerinde veya hazırlıksız toprak zeminde düzenli çalışma deneyimimiz sınırlı. Böyle bir talep gelirse zemin fotoğrafını isteyip değerlendiriyoruz; uygun olmadığını düşündüğümüz durumlarda bunu açıkça söylüyor ve arazi tipi ekipmanda uzmanlaşmış bir tedarikçi aramanızı öneriyoruz. Riski göze alıp uygun olmayan bir işi üstlenmiyoruz.",
            },
            {
                soru: "İnşaat hâlindeki bir holde zemin henüz beton değil, çalışabilir misiniz?",
                cevap:
                    "Evet, bu bizim düzenli deneyimimiz olan bir alan. Stabilize toprak veya sıkıştırılmış dolgu zeminlerde 4x4 dizel lastikli veya paletli platform kullanıyoruz; bu sınıf düzensiz zemine göre tasarlanmıştır. Zemin çok yumuşak veya çamurluysa, iş başlamadan önce zeminin sıkıştırılmasını veya geçici bir taşıma plakası döşenmesini öneriyoruz. Zemin durumu şüpheliyse keşifte yerinde kontrol ediyoruz.",
            },
            {
                soru: "Yağış sonrası açık sahada hemen çalışabilir misiniz, yoksa bekliyor musunuz?",
                cevap:
                    "Zeminin türüne ve yağış miktarına göre değişir. Beton veya iyi sıkıştırılmış stabilize zeminlerde yağıştan kısa süre sonra da çalışılabilir, ama gevşek dolgu veya doğal toprak zeminlerde yağış sonrası birkaç gün beklemek gerekebilir çünkü zemin geçici olarak yumuşar ve makinenin batma riski artar. Acil bir iş varsa, bekleme yerine yük dağıtım plakası kullanarak riski azaltmayı deniyoruz; ama zemin çok riskliyse dürüstçe ertelemeyi öneriyoruz.",
            },
            {
                soru: "Zemin taşıma kapasitesini nasıl ölçüyorsunuz, laboratuvar testi mi yapıyorsunuz?",
                cevap:
                    "Hayır, laboratuvar testi yapmıyoruz; bu, saha gözlemine dayanan pratik bir değerlendirme. Zeminin türünü, o anki nem durumunu ve varsa daha önce üzerinden ağır araç geçip geçmediğini gözlemleyerek karar veriyoruz. Şüpheli bir durumda, riski göze almak yerine daha hafif bir makine sınıfına geçmeyi veya yük dağıtım plakası kullanmayı tercih ediyoruz. Çok kritik veya büyük ölçekli bir iş için zemin etüdü gerekiyorsa, bunu sizin kendi mühendisiniz veya danışmanınızla koordine etmenizi öneriyoruz; bu bizim uzmanlık alanımızın dışında.",
            },
            {
                soru: "Nizip'teki açık tarım tesisi sahası ile gerçek bir tarla arasındaki fark ne?",
                cevap:
                    "Nizip OSB'deki tarım ürünleri deposu ve zeytinyağı tesislerinin açık sahaları, sanayi sahası olarak düzenlendiği için genellikle stabilize veya beton kaplıdır; bu, hazırlıksız bir tarla zemininden temelde farklıdır. Bizim düzenli deneyimimiz bu tür düzenlenmiş sanayi sahalarında; gerçek bir tarlanın doğal toprak zemininde ise deneyimimiz sınırlı. Bir sahanın hangi kategoriye girdiğinden emin değilseniz, fotoğrafını paylaşmanızı isteriz, birlikte değerlendiririz.",
            },
            {
                soru: "Zor zeminde çalışırken makine zarar görürse sorumluluk kimde?",
                cevap:
                    "Zemin değerlendirmesini biz yapıp uygun makineyi ve gerekirse yük dağıtım plakasını önerdiğimiz için, doğru değerlendirme yapıldıysa risk düşük kalır. Ancak zemin koşulu hakkında bize yanlış veya eksik bilgi verilmişse (örneğin gizli bir boşluk veya önceden bilinmeyen yumuşak bölge), bu durumun sorumluluğu ayrıca değerlendirilir; bu tür ayrıntılar sözleşmede önceden netleştirilir. Şüpheli bir zeminde çalışmadan önce durumu açıkça konuşmak, sonradan çıkabilecek anlaşmazlıkları önlüyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in GAOSB sanayi dokusu ve Nizip'in tarım-zeytinyağı sanayisi kamuya açık genel bilgidir. Zemin değerlendirme yaklaşımı genel ekipman güvenliği pratiğine dayanır; kapsam dışı bırakılan tarım arazisi alanı dürüstçe belirtilmiştir, uydurma kapasite veya rakam verilmemiştir.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Gaziantep'te Makaslı Platform Kiralama",
        giris:
            "Makaslı platformun gücü karmaşık bir manevra değil, dikey doğrultuda dar bir ayak iziyle sağlam ve dengeli yükselmesidir; bu da onu Gaziantep'in düz zeminli, tekrarlı iç mekan işlerinde birinci tercih hâline getirir. GAOSB'deki makine halısı ve dokuma tesislerinde tezgah sıraları arasında düzenli aralıklarla tekrarlanan tavan aydınlatması, kanal bakımı veya iplik askı sistemi kontrolü gibi işler, hedefin tam altına dik çıkmayı gerektirir; burada eklemli bir kolun esnekliğine ihtiyaç yoktur, aksine makaslı platformun geniş ve sabit sepeti iki kişinin malzemeyle birlikte çalışmasına daha uygundur. Boyahanelerin iç mekanında da benzer bir durum var: geniş açık salon, düz beton zemin ve tekrar eden istasyon aralıkları, makaslı platformun hızlı kurulup hızlı sökülmesini avantaja çevirir. Depo raf sistemlerinde etiketleme, stok sayımı veya raf onarımı gibi işler de aynı şekilde dik erişim ister. Bu sayfada makaslı platformun Gaziantep'in tekstil ve halı üretim dokusundaki tipik kullanım alanlarını, elektrikli-dizel seçim mantığını ve dar koridor geçişlerindeki sınırlarını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Makine halısı üretim hattı üstü bakım",
                metin:
                    "Makine halısı üretim hatlarında iplik besleme sistemleri, tavan rayları ve aydınlatma armatürleri düzenli aralıklarla hattın üzerinde sıralanır. Bu noktaların her biri hattın tam altından erişilebilir konumdadır; makaslı platform hat boyunca ilerleyip her istasyonda dik yükselerek işi tamamlar. Hat çalışırken değil, planlı duruş aralığında yapılan bu işlerde hız önemlidir, makaslı platformun kurulum-sökme süresi kısa olduğu için art arda birçok istasyon aynı vardiyada bitirilebilir.",
            },
            {
                baslik: "Dokuma salonu ve boyahanede tekrarlı istasyon işi",
                metin:
                    "GAOSB'deki dokuma salonlarının tavan yapısı genellikle düzenli aralıklarla tekrar eden aydınlatma ve havalandırma noktalarından oluşur. Boyahanelerde de benzer şekilde, boya kazanları arasındaki servis noktaları düz bir sırada dizilir. Bu tekrarlı düzende her seferinde aynı hizaya dik çıkmak yeterli olduğundan, eklemli bir kolun manevra kabiliyetine gerek kalmaz; makaslı platform bu işi hem daha ekonomik hem daha hızlı yapar.",
            },
            {
                baslik: "Depo raf sistemlerinde etiketleme ve stok kontrolü",
                metin:
                    "İplik ve kumaş depolarındaki raf sistemleri düz koridorlarla ayrılır ve her koridorda tekrarlı bir yükseklik profili vardır. Etiketleme, stok sayımı veya raf onarımı gibi işlerde platform koridor boyunca ilerleyip her raf önünde dik yükselir. Sepetin geniş ve düz tabanlı olması, malzeme kutusu veya el terminaliyle çalışan iki kişinin aynı anda sepette durmasını da kolaylaştırır.",
            },
            {
                baslik: "GAOSB'nin düz betonlu hollerinde hız ve ekonomi avantajı",
                metin:
                    "GAOSB'de yeni yapılan sanayi hollerinin zemini genellikle düz, sağlam dökülmüş betondur ve engel yoğunluğu düşüktür. Böyle bir zeminde eklemli platformun kol esnekliğine ödenen bedel gereksizdir; makaslı platform hem kiralama maliyeti hem kurulum süresi açısından daha uygun bir seçenek olur. Engel yoğunluğu arttıkça (boru, komşu ekipman, tank grubu gibi) bu denge eklemli platform lehine döner; hangi tip uygun olduğuna keşifte hedefin fotoğrafına bakarak karar veriyoruz.",
            },
            {
                baslik: "Elektrikli-dizel seçim: kapalı salon önceliği",
                metin:
                    "Dokuma salonu, boyahane veya kapalı depo gibi iç mekan işlerinde elektrikli makaslı platform tercih edilir; egzoz emisyonu olmadığı için hem çalışan sağlığı hem hassas iplik ve kumaş malzemesi için risk taşımaz. Açık saha işlerinde (örneğin Nizip'teki tarım deposu açık yükleme alanı) dizel model daha uzun çalışma süresi sunar. Elektrikli modelin şarj süresi ve akü kapasitesi, işin süresine göre keşifte planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ne zaman makaslı, ne zaman eklemli platform",
                paragraflar: [
                    "Gaziantep'teki tipik iç mekan senaryolarını ve makaslı platformun bu senaryolardaki rolünü aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Zemin/engel durumu", "Uygun tip", "Gerekçe"],
                    satirlar: [
                        ["Halı üretim hattı üstü", "Düz, hat boyunca tekrarlı", "Makaslı", "Dik erişim yeterli"],
                        ["Dokuma tavanı aydınlatma", "Düz, sabit hizada", "Makaslı", "Manevraya gerek yok"],
                        ["Depo raf koridoru", "Dar ama düz koridor", "Makaslı (dar gövde model)", "Koridor genişliğine uyar"],
                        ["Boyahane baca dibi", "Çatı hattı gerisi, engelli", "Eklemli", "Kol dolanarak erişim gerekir"],
                        ["Tank grubu çevresi", "Komşu ekipman engeli", "Eklemli", "Yandan yaklaşım gerekir"],
                    ],
                },
            },
            {
                baslik: "Dar koridor ve kapı genişliği sınırı",
                paragraflar: [
                    "Makaslı platformun sepet genişliği düz erişimde avantaj sağlasa da, standart gövdeli modellerin dar depo koridorlarına veya standart kapı genişliğine sığmadığı durumlar olabilir. Bu tür alanlar için daha dar gövdeli makaslı modeller mevcuttur, ama bunların da bir sınırı vardır; kapı ve koridor genişliğini keşifte net ölçüyle kontrol ediyoruz.",
                    "Koridor çok darsa veya hedefin önünde bir engel varsa, makaslı platform yerine örümcek platform veya eklemli platform öneriyoruz; yanlış tip seçimi sahada zaman kaybına yol açar, bu yüzden telefonla verilen tahmini ölçüye göre makine göndermiyoruz.",
                ],
            },
            {
                baslik: "Zemin dayanımı ve tekerlek izi",
                paragraflar: [
                    "GAOSB'deki yeni dökülmüş beton hollerde zemin dayanımı genellikle yeterlidir, ama yeni dökülmüş ve henüz tam sertleşmemiş beton bölgelerde tekerlek izi bırakma riski olabilir; bu durumda iş, betonun yeterince sertleştiği tarihe ertelenir veya koruma plakası kullanılır.",
                    "Hassas boyalı veya parlatılmış zeminlerde (örneğin showroom bağlantılı üretim alanları) tekerlek izini önlemek için koruma plakası önerilir. Zemin durumu şüpheliyse keşifte yerinde kontrol ediyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform ile eklemli platform arasındaki temel fark ne, hangisini önerirsiniz?",
                cevap:
                    "Fark, hedefe nasıl yaklaşıldığında. Hedefin tam altı boşsa ve düz yukarı çıkmak yeterliyse makaslı platform hem daha ekonomik hem daha hızlı kurulur; makine halısı hattı üstü veya dokuma tavanı gibi düzenli tekrarlı işlerde bu tam olarak geçerli. Ama hedefin önünde boru, tank veya komşu ekipman gibi bir engel varsa ve yandan ya da üstten dolanarak yaklaşmak gerekiyorsa eklemli platform gerekir. Keşifte hedefin fotoğrafını görüp birlikte karar veriyoruz.",
            },
            {
                soru: "Dar bir depo koridorunda standart makaslı platform sığar mı?",
                cevap:
                    "Standart gövdeli modeller çoğu depo koridoruna sığar, ama bazı dar tasarlanmış koridorlarda sığmayabilir. Bu durumlar için daha dar gövdeli makaslı modeller var, ancak bunların da bir alt sınırı var. Koridor genişliğini telefonla tahmin etmek yerine net ölçü istiyoruz; ölçü uymuyorsa dar gövdeli model veya örümcek platform gibi bir alternatif öneriyoruz.",
            },
            {
                soru: "İki kişi aynı sepette malzemeyle birlikte çalışabilir mi?",
                cevap:
                    "Evet, makaslı platformun sepeti bu tür işler için tasarlanmıştır ve eklemli platforma göre genellikle daha geniş, daha düz bir taban sunar. Halı üretim hattı bakımında olduğu gibi bir kişi teknik işi yaparken diğeri malzeme veya el terminaliyle destek olabilir. Sepet kapasitesi modelden modele değiştiği için, iki kişi ve malzeme ağırlığının toplamını keşifte birlikte hesaplıyoruz.",
            },
            {
                soru: "Kapalı dokuma salonunda dizel makaslı platform kullanabilir miyiz?",
                cevap:
                    "Önermiyoruz. Kapalı bir salonda dizel motorun egzoz emisyonu hem çalışan sağlığı hem hassas iplik-kumaş malzemesi için risk taşır. Bu tür kapalı alan işlerinde elektrikli makaslı modeller kullanılır; akü kapasitesi işin süresine göre planlanır, uzun süren işlerde şarj için erişilebilir bir priz gerekir. Açık sahada dizel seçenek değerlendirilebilir.",
            },
            {
                soru: "Yeni dökülmüş beton zeminde makaslı platform tekerlek izi bırakır mı?",
                cevap:
                    "Beton yeterince sertleşmemişse evet, bu risk var. Bu yüzden yeni dökülmüş bölgelerde önce betonun sertleşme durumunu soruyoruz; henüz erken bir aşamadaysa işi erteliyoruz ya da koruma plakası kullanarak yükü daha geniş bir alana yayıyoruz. Tam sertleşmiş standart sanayi betonunda bu risk düşüktür.",
            },
            {
                soru: "Makaslı platform ile örümcek platform arasında dar alan için nasıl seçim yapılır?",
                cevap:
                    "Makaslı platform dar gövdeli modellerde bile belirli bir minimum genişliğin altına inemez, çünkü dengesini geniş bir taban üzerinden sağlar. Örümcek platform ise katlanarak çok daha dar bir kapı veya merdiven boşluğundan geçebilir. Koridor veya kapı genişliği standart bir aralıktaysa dar gövdeli makaslı model yeterli olur; genişlik çok dar veya merdiven varsa örümcek platform gerekir. Bu ayrımı keşifte net ölçüyle yapıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in GAOSB makine halısı, dokuma ve boyahane sanayisi kamuya açık genel bilgidir. Makaslı platformun teknik erişim mantığı ve elektrikli-dizel seçim yaklaşımı genel ekipman bilgisine dayanır; kullanım senaryoları sahadaki tekrarlı iş türlerinden çıkarılmıştır, tesis adı verilmez, uydurma kapasite veya rakam yazılmamıştır.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Gaziantep'te Manlift Kiralama",
        giris:
            "\"Manlift\" Gaziantep'te sahada tek bir makine tipini değil, insanı yükseğe taşıyan tüm ekipman ailesini tanımlamak için kullanılan şemsiye bir terim; makaslı platform, eklemli (boom) platform, dikey direkli platform ve örümcek platform bu ailenin farklı üyeleri, her biri farklı bir erişim problemine cevap veriyor. GAOSB'deki bir işletme sahibi genellikle \"manlift lazım\" diyerek arıyor ve ilk konuşmada asıl ihtiyacın hangi tip olduğu netleşiyor; bu yüzden hizmetimizin bu bölümünde ihtiyaç tanımından kiralama süresine kadar genel süreci anlatıyoruz. Gaziantep'in tekstil, halı ve gıda sanayisinde manlift ihtiyacı iki farklı ritimde ortaya çıkıyor: bir yanda ani bir arıza veya acil bakım için günlük kiralanan tek makine, diğer yanda yeni bir üretim hattı kurulumu veya toplu bakım kampanyası için haftalar süren proje bazlı kiralama. Bu sayfada hangi süre modelinin hangi ihtiyaca uyduğunu, filo seçim sürecini ve operatörlü-operatörsüz kiralama ayrımının genel mantığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "\"Manlift\" teriminin kapsamı",
                metin:
                    "Sahada \"manlift\" kelimesi genellikle makaslı platform, eklemli (boom) platform, dikey direkli platform ve örümcek platformun tamamını kapsayan genel bir isim olarak kullanılır. Telefonda \"manlift istiyorum\" diyen bir müşteriyle konuştuğumuzda ilk sorduğumuz şey işin ne olduğu ve hedefin nasıl bir noktada bulunduğu; bu bilgiden hangi alt tipin uygun olduğunu birlikte çıkarıyoruz. Yanlış tip tahmini sahada zaman kaybına yol açtığı için bu ilk ayrımı telefonda netleştirmeye özen gösteriyoruz.",
            },
            {
                baslik: "Günlük kiralama: acil arıza ve kısa bakım",
                metin:
                    "GAOSB'deki bir üretim hattında beklenmedik bir arıza (örneğin tavan aydınlatması veya kanal sorunu) ortaya çıktığında, ihtiyaç genellikle bir günlük, tek seferlik bir kiralamadır. Bu tür işlerde hız önceliklidir; makine tipini telefonda netleştirip aynı gün veya ertesi gün sahaya ulaştırmaya çalışıyoruz. Günlük kiralamada makine genellikle işin bitiminde aynı gün geri alınır.",
            },
            {
                baslik: "Haftalık-aylık kiralama: proje bazlı işler",
                metin:
                    "Yeni bir üretim hattı kurulumu, toplu bakım kampanyası veya inşaat hâlindeki bir holün elektrik-mekanik montajı gibi işler haftalar sürebilir. Bu tür projelerde makine sahada kalır, gerekirse aynı proje içinde farklı günlerde farklı noktalarda kullanılır. Uzun süreli kiralamalarda bakım ve yakıt/şarj sorumluluğu, kiralama süresinin başında netleştiriliyor.",
            },
            {
                baslik: "Operatörlü-operatörsüz seçim süreci",
                metin:
                    "Müşterinin kendi sertifikalı operatörü varsa makine operatörsüz teslim edilebilir; operatör yoksa veya belgesi güncel değilse bizim operatörümüzle birlikte kiralama öneriyoruz. Bu tercih işin süresine, tekrarlanma sıklığına ve müşterinin kendi ekibinin deneyimine göre değişir; hangisinin uygun olduğuna teklif aşamasında birlikte karar veriyoruz.",
            },
            {
                baslik: "Filo seçim sürecinde keşifin rolü",
                metin:
                    "Hangi manlift tipinin uygun olduğuna karar verirken telefon görüşmesi bir başlangıç noktasıdır ama tek başına yeterli değildir; hedefin yüksekliği, çevresindeki engeller ve zemin durumu net olarak bilinmeden makine göndermiyoruz. Mümkünse fotoğraf, şüpheli durumlarda yerinde keşif isteniyor; bu adım yanlış makine gönderimini ve sahada kaybedilen zamanı önlüyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Süre modeline göre tipik kullanım",
                paragraflar: [
                    "Gaziantep'teki manlift ihtiyaçlarını süre modeline göre aşağıda özetledik; hangi modelin size uygun olduğuna işin niteliğine bakarak karar veriyoruz.",
                ],
                tablo: {
                    basliklar: ["Süre modeli", "Tipik ihtiyaç", "Makine sahada kalış", "Operatör tercihi"],
                    satirlar: [
                        ["Günlük", "Acil arıza, tek nokta bakım", "Aynı gün geri alınır", "Genelde bizim operatörümüz"],
                        ["Haftalık", "Bölümsel bakım kampanyası", "İş bitene kadar sahada", "Duruma göre değişir"],
                        ["Aylık/proje bazlı", "Hat kurulumu, inşaat montajı", "Proje süresince sahada", "Genelde müşteri operatörü"],
                        ["Tekrarlı kısa dönem", "Mevsimsel/periyodik bakım", "Her seferinde teslim-iade", "Duruma göre değişir"],
                    ],
                },
            },
            {
                baslik: "Birden fazla makine aynı anda",
                paragraflar: [
                    "Büyük ölçekli bir bakım kampanyasında veya çok noktalı bir hat kurulumunda birden fazla manlift aynı anda gerekebilir; bu durumda farklı tiplerin (örneğin bir makaslı ve bir eklemli) birlikte planlanması gerekebilir. Böyle bir talepte, hangi noktada hangi tipin çalışacağını önceden netleştirip filoyu buna göre ayırıyoruz.",
                    "Aynı anda birden fazla makine sahada olduğunda operatörler arası koordinasyon ve saha trafiği de planlamanın bir parçası; bu detayları büyük projelerde önceden konuşuyoruz.",
                ],
            },
            {
                baslik: "Güvenlik belgeleri ve operatör yeterliliği",
                paragraflar: [
                    "Kiraladığımız her manlift periyodik bakım ve muayene kaydına sahiptir; talep edildiğinde bu belgeler paylaşılır. Kendi operatörünüzle çalışacaksanız, operatörün ilgili ekipman sınıfı için geçerli yeterlilik belgesine sahip olması bekleniyor; belge güncel değilse bizim operatörümüzle çalışmayı öneriyoruz.",
                    "Sahada iş güvenliği kurallarına (kişisel koruyucu ekipman, çalışma alanının işaretlenmesi gibi) uyum, kiralama sözleşmesinin bir parçasıdır; bu kurallar işe başlamadan önce sahada birlikte gözden geçiriliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "\"Manlift\" derken hangi makineyi kastediyorsunuz, hepsi aynı mı?",
                cevap:
                    "Hayır, \"manlift\" sahada kullanılan genel bir isim; makaslı platform, eklemli (boom) platform, dikey direkli platform ve örümcek platform gibi birbirinden farklı makineleri kapsıyor. Her biri farklı bir erişim problemine cevap veriyor: makaslı platform düz dik yükselmede, eklemli platform engelli erişimde, örümcek platform dar alanlarda öne çıkıyor. \"Manlift istiyorum\" dediğinizde ilk yaptığımız şey, işin ne olduğunu sorup hangi alt tipin uygun olduğunu birlikte netleştirmek.",
            },
            {
                soru: "Minimum kiralama süresi var mı, yarım gün için kiralayabilir miyim?",
                cevap:
                    "Çoğu işimiz günlük kiralama üzerinden ilerliyor; yarım günlük bir işi de günlük ücretlendirme kapsamında değerlendiriyoruz çünkü nakliye ve kurulum süresi zaten günün önemli bir kısmını alıyor. Çok kısa süreli tekrarlayan bir ihtiyacınız varsa (örneğin haftada birkaç saat), bunu ayrıca konuşup size uygun bir düzen önerebiliriz; standart bir paket yerine ihtiyaca göre değerlendiriyoruz.",
            },
            {
                soru: "Aynı anda hem makaslı hem eklemli platforma ihtiyacım olursa nasıl planlıyorsunuz?",
                cevap:
                    "Büyük bir bakım kampanyası veya çok noktalı bir hat kurulumunda bu sık karşılaştığımız bir durum. Önce her noktanın hangi tipe ihtiyaç duyduğunu (düz erişim mi, engelli erişim mi) belirliyoruz, sonra filoyu buna göre ayırıp aynı gün veya aynı hafta içinde koordineli şekilde sahaya gönderiyoruz. Operatörler arası koordinasyon ve saha trafiği gibi detayları büyük projelerde işe başlamadan önce netleştiriyoruz.",
            },
            {
                soru: "Kendi operatörümüz var, belgesi olması yeterli mi?",
                cevap:
                    "Evet, operatörünüzün ilgili ekipman sınıfı için geçerli ve güncel bir yeterlilik belgesi olması yeterli; bu durumda makineyi operatörsüz teslim ediyoruz. Belge güncel değilse veya operatörünüzün o spesifik makine tipinde deneyimi sınırlıysa, güvenlik açısından bizim operatörümüzle çalışmanızı öneriyoruz. Bu tercihi teklif aşamasında netleştiriyoruz, sahada sürpriz olmasın diye.",
            },
            {
                soru: "Hangi manlift tipine ihtiyacım olduğunu bilmiyorum, nasıl karar veriyorsunuz?",
                cevap:
                    "Bu çok sık karşılaştığımız bir durum, çoğu müşteri makine tipini değil işi tarif ediyor ve bu tamamen normal. Telefonda hedefin ne olduğunu (tavan yüksekliği, önünde engel var mı, zemin nasıl) soruyoruz; mümkünse fotoğraf istiyoruz. Bu bilgiyle genellikle doğru tipi belirleyebiliyoruz, şüpheli durumlarda yerinde keşif yapıp kesinleştiriyoruz. Yanlış tip göndermek sahada zaman kaybettirdiği için bu adımı atlamıyoruz.",
            },
            {
                soru: "Proje bazlı uzun süreli kiralamada bakım sorumluluğu kimde?",
                cevap:
                    "Standart periyodik bakım ve muayene bizim sorumluluğumuzda kalır; kiralama süresi boyunca makinenin teknik durumunu biz takip ederiz. Günlük yakıt/şarj ve temel temizlik gibi operasyonel konular ise genellikle sahada makineyi kullanan tarafla paylaşılır; bu detaylar kiralama süresinin başında sözleşmeyle netleştiriliyor, sonradan belirsizlik yaşanmasın diye.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gaziantep'in GAOSB tekstil-halı-gıda sanayi dokusu kamuya açık genel bilgidir. Manlift terminolojisi ve kiralama süreç mantığı genel ekipman kiralama pratiğine dayanır; süre modelleri ve senaryolar sahadaki tekrarlı iş türlerinden çıkarılmıştır, uydurma fiyat, kapasite veya tesis adı verilmemiştir.",
    },
};
