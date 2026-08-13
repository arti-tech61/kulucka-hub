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
            "Elle yazıldı — 2026-08-12. Gaziantep'in makine halısı üretiminde dünya ölçeğinde bir merkez olduğu ve GAOSB'nin çok bölgeli yapısı kamuya açık genel bilgidir; çalışma düzeni ve makine eşleştirmesi firma pratiğidir. Tesis adı ve sayısal veri kullanılmamıştır.",
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
            "Elle yazıldı — 2026-08-12. Şehitkamil'in Gaziantep'in gıda sanayisinde ağırlıklı bir ilçe olduğu ve şehrin tarihi merkeziyle sanayinin iç içe geçtiği kamuya açık genel bilgidir; hijyen ve izolasyon uygulamaları firma pratiğidir. Tesis adı ve sayısal veri kullanılmamıştır.",
    },
};
