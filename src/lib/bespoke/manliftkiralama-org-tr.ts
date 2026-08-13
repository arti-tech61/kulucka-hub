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
            "Elle yazıldı — 2026-08-12. Şahinbey'in Gaziantep'in tarihi çarşısını ve kent merkezi ticaretini barındıran ilçe olduğu kamuya açık bilgidir; mekân koordinasyonu ve zemin koruma uygulamaları firma pratiğidir. İşletme veya kurum adı verilmemiştir.",
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
            "Elle yazıldı — 2026-08-12. Nizip'in Gaziantep'in doğusunda tarım ve sanayi üretimini bir arada barındıran bir ilçe olduğu kamuya açık genel bilgidir; sezon planlaması ve mesafeye bağlı iş birleştirme uygulamaları firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
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
                    "İl dışı işlerde makine genellikle günler veya haftalar boyunca sahada kalır; bu düzende günlük kontrolleri kullanan tarafın yapması, periyodik bakımı ise bizim üstlenmemiz standart uygulamadır. Kira başlangıcında makinenin durumu ayrıntılı tutanakla kayda geçirilir. Arıza durumunda önce telefonla yönlendirme denenir, çözülemeyen durumlarda teknik ekip yola çıkar ve bu süre kira takvimine yansıtılmaz.",
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
            "Elle yazıldı — 2026-08-12. Kahramanmaraş'ın iplik-tekstil, çelik ve gıda sanayisine sahip olduğu ile Gaziantep'e coğrafi yakınlığı kamuya açık genel bilgidir; il dışı kiralama düzeni ve sıcaklık önlemleri firma uygulamasıdır. Tesis adı ve rakam kullanılmamıştır.",
    },
};
