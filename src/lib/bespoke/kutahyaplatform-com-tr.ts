// ═══════════════════════════════════════════════════════════════════════════
// kutahyaplatform.com.tr — ELLE YAZILMIŞ İÇERİK
//
// Profil: Kütahya merkez seramik ve çini fabrikaları platform kiralama.
// Açı: ÇİNİ SANAT ATÖLYESİ + BÜYÜK FABRİKA AYRIMI — küçük atölye/el sanatı
// çini üretimi ile büyük seri üretim seramik fabrikasının erişim ihtiyacı
// farkı, çini desen-sırlama hassasiyeti, ihracat paketleme.
//
// ⚠️ Kardeş dosya kutahyaplatform-com.ts (genel Kütahya seramik profili:
// fırın hattı, sırlama-dekor, hammadde, mamul deposu) okunmuş ve
// karşılaştırılmıştır. Buradaki eksen ATÖLYE/FABRİKA ÖLÇEK AYRIMI ve
// İHRACAT PAKETLEMEdir; cümle/tablo/kalıp tekrarı YASAK. Kardeş dosya
// kutahyaplatform-tr.ts (linyit/termik santral açısı) ile de örtüşme yoktur.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const KUTAHYAPLATFORM_COM_TR: Record<string, BespokeIcerik> = {
    "bolge:kutahya-merkez": {
        h1: "Kütahya Merkezde Çini Atölyesi ve Seramik Fabrikasına Platform Kiralama",
        giris:
            "Kütahya merkezde çini denince akla iki bambaşka üretim ölçeği gelir: bir yanda elle şekillendirilen, fırçayla desenlenen ve tek tek sırlanan küçük atölyeler, diğer yanda seri üretim hattında binlerce parçayı aynı standartla üreten büyük seramik fabrikaları. Bu iki ölçek, platform kiralama açısından da birbirinden tamamen farklı bir talep üretir. Atölyede hedef, tozdan ve titreşimden korunması gereken hassas bir desen tezgâhının üstündeki bir aydınlatma armatürü olabilir; fabrikada ise binlerce metrekarelik bir üretim holünün tavanındaki bir vinç kirişi. Bu sayfa, merkezdeki bu iki dünyanın erişim ihtiyacını, birini diğerine karıştırmadan ayrı ayrı ele alır.",
        maddeler: [
            {
                baslik: "Atölyede titreşim ve toz hassasiyeti",
                metin:
                    "El sanatı çini atölyelerinde tezgâh üstü desen çalışması, en ufak titreşimden veya tozdan etkilenir; kurutma rafındaki henüz sırlanmamış bir parçaya düşen bir toz zerresi, saatlerce süren bir işçiliği bozabilir. Bu atölyelerde çalışırken makine seçimi küçük ve hafif olur, tekerlekler titreşimi en aza indirecek şekilde yavaş hareket ettirilir ve çalışma alanının altındaki hassas yüzeyler örtülür. İş, genellikle atölyenin en sakin saatine, ustaların molada olduğu dilimlere denk getirilir.",
            },
            {
                baslik: "Büyük fabrikada üretim hattı ölçeği",
                metin:
                    "Seri üretim yapan büyük seramik fabrikalarında ise durum tam tersidir: üretim holü geniş, tavan yüksek, hedefler (aydınlatma, kablo tavası, vinç kirişi) sayıca çoktur ve iş, hızlı ilerleyen bir liste hâlinde planlanır. Burada titreşim değil verimlilik önceliklidir; makine seçimi geniş erişim alanı sağlayan, hızlı konumlanan sınıflardan yapılır. Egzoz kısıtı nedeniyle akülü sınıf yine zorunludur ama öncelik atölyedeki gibi hassasiyet değil, metrekare başına hız olur.",
            },
            {
                baslik: "Desen-sırlama hattının üst kotu",
                metin:
                    "Orta ölçekli çini üreticilerinde, elle desenleme ile yarı otomatik sırlama hattının bir arada bulunduğu geçiş tipi tesisler de vardır; bu tesislerde platform hem hassas hem hızlı çalışmayı aynı vardiyada gerektirebilir. Sırlama kabininin üstündeki havalandırma bakımı hassasiyet ister, hemen yanındaki depo raf üstü işi ise standart hızda ilerleyebilir. İş listesi bu ayrıma göre iki bloğa bölünür.",
            },
            {
                baslik: "İhracat paketleme alanlarının özel koşulu",
                metin:
                    "Kütahya çinisinin önemli bir kısmı ihracata gider ve paketleme alanları bu nedenle kendine özgü bir düzene sahiptir: kırılgan ürün, özel dolgu malzemesi, palet istifleme ve konteyner yükleme sırası. Bu alanların üstündeki aydınlatma ve raf işlerinde makine, paketleme akışını kesmeden ve titreşim üretmeden çalışır; yükleme rampası çevresindeki işler, konteyner sevkiyat saatlerinin dışına planlanır.",
            },
            {
                baslik: "İki ölçek arasında geçiş yapan tesisler",
                metin:
                    "Bazı üreticiler hem atölye tipi el işi üretim hem fabrika tipi seri üretim hattını aynı tesiste barındırır; bu karma yapılarda platform işi de karma bir yaklaşım gerektirir. Aynı vardiyada önce hassas atölye bölümünde yavaş ve dikkatli, sonra fabrika bölümünde standart hızda çalışılabilir. Bu geçişi doğru yönetmek, tesisin kendi bölüm haritasını önceden bilmekle mümkündür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezde ölçek, hassasiyet ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, çini ve seramik üretiminin farklı ölçeklerinde platformun nasıl kullanıldığını özetler.",
                ],
                tablo: {
                    basliklar: ["Üretim ölçeği", "Baskın kısıt", "Makine tercihi", "Zamanlama"],
                    satirlar: [
                        ["El sanatı atölye", "Titreşim, toz", "Küçük, hafif, yavaş", "Usta molası"],
                        ["Büyük seri üretim fabrikası", "Metrekare, hız", "Geniş erişim, hızlı", "Vardiya arası"],
                        ["Desen-sırlama geçiş hattı", "Karma", "İki bloklu plan", "Bölüme göre"],
                        ["İhracat paketleme alanı", "Kırılganlık, akış", "Titreşimsiz, düşük hız", "Sevkiyat dışı"],
                        ["Karma atölye-fabrika tesis", "Bölüme göre değişken", "Vardiyada iki mod", "Bölüm haritasına göre"],
                    ],
                },
            },
            {
                baslik: "Atölyede 'yavaş çalışmak' aslında hız kazandırır",
                paragraflar: [
                    "El sanatı atölyelerinde platformun yavaş ve dikkatli hareket etmesi, ilk bakışta zaman kaybı gibi görünse de aslında tam tersi bir sonuç doğurur: hızlı ve dikkatsiz bir hareketin bozacağı bir kurutma rafı dolusu ürün, haftalarca süren emeğin kaybı demektir. Bu yüzden atölye işlerinde biz süreyi değil sonucu önceliklendiririz — iş biraz uzasa da, sıfır hasarla biter.",
                    "Bu yaklaşımın pratik karşılığı, atölye sahibiyle iş öncesi kısa bir tur yapıp hangi rafların ve tezgâhların en hassas olduğunu birlikte işaretlememizdir. Bu on dakikalık tur, saatlerce süren bir işçiliği korumanın en ucuz yoludur.",
                ],
            },
            {
                baslik: "Fabrikada listeyi bölüme göre ayırmanın kazancı",
                paragraflar: [
                    "Büyük seri üretim fabrikalarında bakım listesi genellikle onlarca kalemden oluşur ve bunları rastgele sırayla yapmak, makinenin gereksiz yer değiştirmesine yol açar. Listeyi üretim bölümüne göre gruplayıp (hammadde, fırın, paketleme gibi) her bölümü kendi içinde bitirmek, toplam süreyi belirgin şekilde kısaltır.",
                    "Bu gruplama, listeyi önceden aldığımızda ücretsiz olarak yapılır; sahada doğaçlama sıralamaya göre kazandırdığı zaman, çoğu zaman kiralama süresinin kendisinden fazladır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizdeki henüz sırlanmamış ürünlere zarar vermeden çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz ve bu, atölye işlerindeki önceliğimizdir. Küçük ve hafif makine seçilir, hareket yavaş ve kontrollüdür, çalışma alanının altındaki hassas yüzeyler örtülür. İş öncesi atölyenizde kısa bir tur yaparak hangi rafların ve tezgâhların en hassas olduğunu birlikte işaretleriz; bu tur, sahada bir kazayı önlemenin en ucuz yoludur. Mümkünse iş, ustaların molada olduğu ve üretimin durduğu bir dilime planlanır.",
            },
            {
                soru: "Büyük fabrikamızda onlarca kalemlik bir bakım listesi var, süreyi nasıl kısaltıyorsunuz?",
                cevap:
                    "Listeyi üretim bölümüne göre gruplayarak — hammadde, fırın, paketleme gibi her bölümü kendi içinde bitirip makinenin gereksiz yer değiştirmesini önleyerek. Bu gruplama listeyi önceden aldığımızda ücretsiz yapılır ve toplam süreyi belirgin şekilde kısaltır. Egzoz kısıtı nedeniyle hol içinde akülü sınıf zorunludur; hızlı konumlanan geniş erişimli makineler bu ölçekte önceliğimizdir.",
            },
            {
                soru: "Hem el işi hem seri üretim bölümümüz var, tek kiralamada olur mu?",
                cevap:
                    "Olur ve bunu sık yapıyoruz. Aynı vardiyada önce hassas atölye bölümünde yavaş ve dikkatli, ardından fabrika bölümünde standart hızda çalışılır. Bunun için tesisin bölüm haritasını önceden almamız gerekir — hangi alan hassas, hangisi standart. Bu ayrım net olduğunda makine ve operatör, geçiş sırasında modunu değiştirir ve tek kiralamada iki farklı çalışma disiplinini bir arada yürütürüz.",
            },
            {
                soru: "İhracat paketleme alanımızda konteyner sevkiyatı sürekli, çalışma nasıl planlanır?",
                cevap:
                    "Konteyner sevkiyat saatlerinin dışına planlanır; sizden bu saatleri önceden almamız yeterli. Paketleme alanında kırılgan ürün ve dolgu malzemesi olduğu için makine titreşimsiz ve düşük hızda çalışır, yükleme rampası çevresi işlerinde geçici alan ayrımı kurulur. Sevkiyat programınız düzenliyse, bakım işlerini bu programın en sakin gününe sabitlemenizi öneririz; bu, planlamayı her seferinde yeniden kurmaktan daha verimlidir.",
            },
            {
                soru: "Atölye ölçeğindeki bir iş için sabit ücretiniz mi var, yoksa fabrika fiyatıyla mı hesaplanır?",
                cevap:
                    "Fiyat, makine sınıfına ve çalışma süresine göre hesaplanır; atölye işleri genellikle küçük ve hafif makine gerektirdiği için bu sınıfın kendi fiyatlandırması uygulanır. Fabrika işlerinde ise geniş erişimli sınıfların fiyatı geçerlidir. İki ölçek farklı ekipman gerektirdiği için maliyetleri karşılaştırmak yerine, işinizin hangi ölçekte olduğunu keşifte netleştirip ona uygun teklifi veririz.",
            },
            {
                soru: "Desen-sırlama hattımızın üstündeki havalandırmayı hattı durdurmadan yenileyebilir miyiz?",
                cevap:
                    "Genellikle yenilenebilir ama hattın çalışma hızına göre plan değişir. Hat sırasında titreşim veya toz üretmeyen bir çalışma tarzı benimseriz; sepet, hattın üstünde yavaş ve kontrollü ilerler. Hattın en hassas ürünleri işlediği anlarda çalışma kısa süreliğine durdurulabilir; bu kararı hat sorumlunuzla birlikte anlık verir, üretim akışını mümkün olduğunca korumaya çalışırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kütahya'nın çini el sanatı ve seri üretim seramik fabrikası birlikteliği kamuya açık bilgidir; ihracat odaklı üretim yapısı genel bilgidir. Tesis adı ve rakam kullanılmamıştır. Atölye-fabrika ayrımı yaklaşımı firma pratiğidir.",
    },

    "bolge:tavsanli": {
        h1: "Tavşanlı'da Çini Hammaddesi Ocakları ve Atölye Sevkiyatı",
        giris:
            "Tavşanlı, Kütahya çini sanayisinin gözden kaçan ama vazgeçilmez bir tarafını taşır: ilin çini ve seramik üretiminde kullanılan kaolen ve feldispat gibi hammaddelerin bir kısmı, bu ilçenin çevresindeki ocaklardan çıkar ve merkeze işlenmek üzere taşınır. Bu sayfa, kardeş dosyamızdaki genel Tavşanlı maden-enerji profilinden ayrı olarak, doğrudan çini hammaddesi ocaklarının kendi bakım ihtiyacını ve merkeze giden sevkiyat hattının platform açısından nasıl desteklendiğini anlatır.",
        maddeler: [
            {
                baslik: "Hammadde ocağı işleme tesislerinde bakım",
                metin:
                    "Kaolen ve feldispat gibi hammaddelerin kırılıp elenip yıkandığı işleme tesisleri, tozlu ve dikey yapılı sahalardır; silo, elevatör ve bant köprüleri farklı kotlara dağılır. Bu tesislerdeki bakım işleri, hammaddenin kendine özgü ince tozu nedeniyle filtre kontrolünü sıklaştırır ve makine seçiminde arazi kabiliyeti öne çıkar.",
            },
            {
                baslik: "Merkeze giden sevkiyat hattının lojistik uyumu",
                metin:
                    "Tavşanlı'daki ocaklardan merkezdeki çini atölye ve fabrikalarına giden hammadde sevkiyatı düzenli bir trafik oluşturur; bu hat üzerinde bakım işi olan bir müşteri, aynı sevkiyat programına eklenebilir. Ocak ile merkez arasındaki mesafe, tekil bir işte maliyeti belirgin şekilde etkiler; bu yüzden hat üzerindeki işleri birleştirmek öneririz.",
            },
            {
                baslik: "Açık ocak sahasında zemin ve erişim",
                metin:
                    "Ocak sahalarının zemini büyük ölçüde açık, düzensiz ve mevsime bağlı olarak yumuşayabilen bir yapıdadır; bu sahalarda çalışan makine, arazi tipi lastikli ve gerektiğinde yük dağıtım plakası destekli olmalıdır. Park noktası, ocak sahasının kendi güvenlik kurallarına göre önceden belirlenir.",
            },
            {
                baslik: "Ocak işletmesinde iş izni ve güvenlik prosedürü",
                metin:
                    "Maden ocağı işletmeleri, kendi iş güvenliği rejimine sahiptir; giriş izni, saha bilgilendirmesi ve bazı bölgelerde refakatçi ataması standarttır. Bu süreç iş gününden önce tamamlanır; bizim tarafımızdaki belge seti (operatör yeterlilikleri, makine kontrol kayıtları) talep edildiğinde hazırdır.",
            },
            {
                baslik: "Küçük atölyeler için hammadde tedarik zincirinin önemi",
                metin:
                    "Merkezdeki küçük çini atölyeleri için hammadde kalitesi ve düzenli tedarik, üretimin sürekliliği açısından kritiktir; ocak ile atölye arasındaki bu zincirin herhangi bir noktasındaki aksama (örneğin bir işleme tesisinin arızalı ekipmanı) üretimi geciktirebilir. Bu yüzden ocak tesislerindeki acil bakım çağrılarına öncelik veririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tavşanlı'da hammadde zinciri ve platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, çini hammaddesi zincirinin farklı noktalarında platform ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["Zincir noktası", "Baskın koşul", "Makine tercihi", "Öncelik"],
                    satirlar: [
                        ["Açık ocak sahası", "Düzensiz zemin", "Arazi tipi", "Standart"],
                        ["İşleme tesisi (kırma-eleme)", "Toz, kot farkı", "Eklemli/teleskopik", "Standart"],
                        ["Silo ve elevatör", "Dikey erişim", "Teleskopik", "Standart"],
                        ["Sevkiyat/yükleme noktası", "Trafik", "Kompakt", "Standart"],
                        ["Arızalı ekipman (acil)", "Üretim zinciri riski", "En yakın uygun sınıf", "Yüksek"],
                    ],
                },
            },
            {
                baslik: "Ocak-merkez hattında sevkiyat birleştirme",
                paragraflar: [
                    "Tavşanlı'daki ocak ve işleme tesislerinden merkeze giden hammadde hattı, bizim sevkiyat planlamamız için de bir referans oluşturur. Bu hat üzerinde bakım işi olan bir ocak işletmesi ile merkezdeki bir atölye ya da fabrika aynı hafta içinde talep açarsa, tek sevkiyata bağlanabilir ve maliyet paylaşılır.",
                    "Bu birleşimin kurulması için işlerin tarihte esnek olması yeterlidir; acil olmayan bakım kalemlerini bu şekilde planlamak, hem ocak işletmesine hem merkezdeki atölyelere kazandırır.",
                ],
            },
            {
                baslik: "Zincirdeki aksamanın öncelik kazandırması",
                paragraflar: [
                    "Hammadde ocağından merkeze giden zincirde herhangi bir noktadaki ekipman arızası, geriye doğru merkezdeki atölye ve fabrikaların üretimini etkileyebilir. Bu bağımlılığı bildiğimiz için, ocak ve işleme tesislerindeki acil bakım çağrılarına standart işlere göre daha yüksek öncelik veririz.",
                    "Bu önceliklendirme, çağrı sırasında işin hammadde zincirinin neresinde olduğunu belirtmenizle başlar; bu bilgi, bizim yönlendirme kararımızı doğrudan etkiler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak sahamızın zemini çok düzensiz, makineniz güvenle çalışabilir mi?",
                cevap:
                    "Arazi tipi lastikli makinelerle çalışabiliriz; düzensiz ve mevsime bağlı yumuşayabilen zeminlerde park noktası önceden belirlenir ve gerektiğinde yük dağıtım plakası kullanılır. Sahanın güncel durumunu (yağış sonrası yumuşama gibi) iş gününden önce sorarız; şüpheli bir bölge varsa park noktası değiştirilir. Ocak sahanızın genel zemin durumunu keşifte birlikte değerlendiririz.",
            },
            {
                soru: "İşleme tesisimizdeki arıza merkezdeki atölyeleri etkiler mi, önceliğiniz nedir?",
                cevap:
                    "Etkileyebilir, çünkü hammadde zinciri ocaktan merkeze doğrudan bağlıdır. Bu bağımlılığı bildiğimiz için ocak ve işleme tesislerindeki acil bakım çağrılarına standart işlere göre daha yüksek öncelik veririz. Çağrı sırasında işin zincirin neresinde olduğunu (kırma-eleme, elevatör, sevkiyat) belirtirseniz, doğru öncelik ve doğru makineyle hızlıca yönlendiririz.",
            },
            {
                soru: "Ocak işletmemize girişte hangi izinler gerekiyor?",
                cevap:
                    "Maden ocağı işletmelerinin kendi iş güvenliği rejimi vardır: giriş izni, saha bilgilendirmesi ve bazı bölgelerde refakatçi ataması standarttır. Bu süreç iş gününden önce tamamlanır. Bizim tarafımızdaki belge seti — operatör yeterlilikleri, makine periyodik kontrol kayıtları, sigorta evrakları — talep edildiğinde hazırdır. Tesisinizin kendi prosedürünü bildirirseniz, süreci ona göre kurarız.",
            },
            {
                soru: "Merkezdeki atölyemizle ocak tesisindeki işi aynı sevkiyata bağlayabilir misiniz?",
                cevap:
                    "Bağlayabiliriz; ocak-merkez hattı zaten düzenli bir sevkiyat trafiği oluşturuyor ve bu hat üzerindeki işleri birleştirmek maliyeti düşürür. Bunun için iki işin de tarihte biraz esnek olması yeterli. İki işin konumunu ve tercih ettiğiniz tarih aralığını verirseniz, tek turda bitirecek bir program çıkarırız.",
            },
            {
                soru: "Silo ve elevatör bakımı için hangi makine gerekir?",
                cevap:
                    "Silo ve elevatörler önü açık dikey yapılar olduğu için düz uzanan teleskopik bom genellikle en hızlı çözümdür. Belirleyici olan hedefin yüksekliği ve makinenin dibe ne kadar yanaşabildiğidir; çevrede bant köprüsü veya boru hattı varsa kırılımlı eklemli sınıf gerekebilir. Zemin tozlu ve gevşek olduğundan arazi kabiliyeti de değerlendirilir. Silonun çevre fotoğrafını gönderirseniz sınıf kararını sahaya gelmeden veririz.",
            },
            {
                soru: "Tavşanlı'daki bu sayfa ile kardeş sitedeki genel Tavşanlı sayfası arasındaki fark ne?",
                cevap:
                    "Kardeş sitedeki sayfa, Tavşanlı'nın linyit-termik santral ve genel ağır sanayi profilini anlatır; bu sayfa ise doğrudan çini ve seramik hammaddesi (kaolen, feldispat) ocaklarına ve bunların merkezdeki atölye-fabrikalara sevkiyat hattına odaklanır. İkisi aynı ilçede farklı sanayi kollarını temsil eder; işiniz hangisiyle ilgiliyse ona uygun sayfadan devam edebilirsiniz, ikisi için de aynı operatör kadromuz hizmet verir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kütahya çevresindeki kaolen-feldispat hammadde ocaklarının çini sanayisine kaynak oluşturduğu kamuya açık bilgidir; işletme adı ve rakam kullanılmamıştır. Zincir önceliklendirme ve sevkiyat birleştirme firma pratiğidir.",
    },

    "bolge:simav": {
        h1: "Simav'da Çini İhracat Paketleme ve Ahşap Sandık Atölyeleri",
        giris:
            "Simav, Kütahya'nın orman ürünleri ve ahşap işleme geleneğiyle bilinen ilçesidir; bu gelenek, merkezdeki çini ihracatının ihtiyaç duyduğu ahşap sandık ve palet üretimiyle dolaylı ama gerçek bir bağ kurar. Bu sayfa, kardeş dosyamızdaki genel Kütahya profilinde jeotermal ve orman ürünleri olarak anılan bu ilçenin, doğrudan çini ambalaj-paketleme zincirindeki rolünü ve buradaki ahşap işleme atölyelerinin platform ihtiyacını anlatır.",
        maddeler: [
            {
                baslik: "Ahşap sandık ve palet atölyelerinde çatı-depo işleri",
                metin:
                    "Simav'daki ahşap işleme atölyeleri, kereste kesim ve montaj holleriyle birlikte kurutulmuş kereste stok depolarına sahiptir; bu yapılarda platform, çatı altı aydınlatma, havalandırma ve raf üstü erişim işlerinde kullanılır. Ahşap tozu yanıcı olduğu için kıvılcım üretmeyen elektrikli ekipman ve iyi havalandırma standarttır.",
            },
            {
                baslik: "Kereste stok sahasında açık alan çalışması",
                metin:
                    "Kurutulmadan önce açık havada bekletilen kereste yığınlarının çevresindeki aydınlatma ve yükleme sundurması işleri, ilçenin açık alan sahalarında yaygındır. Bu sahalarda zemin genellikle toprak veya dolgu olduğu için arazi tipi lastikli makineler tercih edilir; yığınların arasındaki dar geçitler kompakt gövde gerektirir.",
            },
            {
                baslik: "Merkeze giden ambalaj malzemesi sevkiyatı",
                metin:
                    "Simav'da üretilen sandık ve palet, merkezdeki çini paketleme alanlarına düzenli olarak sevk edilir; bu hat üzerinde bakım işi olan bir atölye, merkezdeki bir tesisle aynı sevkiyat programına eklenebilir. Bu birleşim, iki uzak nokta arasındaki nakliye maliyetini paylaştırır.",
            },
            {
                baslik: "Jeotermal tesislerin kendi ayrı bakım profili",
                metin:
                    "İlçenin bilinen jeotermal kaynakları ve buna bağlı tesisler, ahşap işleme atölyelerinden tamamen ayrı bir bakım profili taşır — kaplıca ve konaklama yapılarının çatı, cephe ve aydınlatma işleri, standart bir turizm tesisi bakımıdır. Bu iki iş ailesini karıştırmadan, hangi talebin hangi profile ait olduğunu keşifte netleştiririz.",
            },
            {
                baslik: "Nemli ortamda ahşap tozu ve makine bakımı",
                metin:
                    "Ahşap işleme atölyelerinde çalışan makinelerde, kesim tozunun elektrik bağlantılarına ve hareketli parçalara birikmesi bakım aralığını etkiler; uzun süreli işlerde filtre ve bağlantı kontrolü sıklaştırılır. Bu, tozlu sanayi sahalarındaki genel bakım disiplininin ahşap işleme atölyesine özgü bir uygulamasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Simav'da iş ailesi ve platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki iki farklı iş ailesinin (ahşap ambalaj sanayisi ve jeotermal tesisler) platform ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["İş ailesi", "Tipik kalem", "Risk unsuru", "Makine notu"],
                    satirlar: [
                        ["Ahşap sandık-palet atölyesi", "Çatı, havalandırma", "Ahşap tozu, yanıcılık", "Kıvılcımsız elektrikli"],
                        ["Kereste stok sahası", "Saha aydınlatması", "Toprak zemin", "Arazi tipi kompakt"],
                        ["Ambalaj sevkiyat hattı", "Yükleme sundurması", "Trafik", "Standart"],
                        ["Jeotermal-kaplıca tesisi", "Çatı, cephe, aydınlatma", "Yolcu/misafir trafiği", "Standart turizm bakımı"],
                        ["Merkeze ambalaj sevkiyatı", "—", "Mesafe", "Tur birleştirme"],
                    ],
                },
            },
            {
                baslik: "Ambalaj zincirinin çini ihracatındaki yeri",
                paragraflar: [
                    "Kütahya çinisinin ihracatı, ürünün kendisi kadar ambalajın kalitesine de bağlıdır; kırılgan seramik ürünlerin güvenle taşınması için Simav'daki atölyelerde üretilen özel sandık ve palet sistemleri kullanılır. Bu zincirin herhangi bir noktasındaki aksama (örneğin bir atölyenin arızalı çatı sistemi nedeniyle üretimin durması), ihracat takvimini geriye doğru etkileyebilir.",
                    "Bu bağımlılığı bildiğimiz için, ambalaj atölyelerindeki acil bakım taleplerini standart işlere göre önceliklendiriyoruz; ihracat sezonunun yoğun olduğu dönemlerde bu öncelik daha da belirginleşir.",
                ],
            },
            {
                baslik: "İki iş ailesini karıştırmamanın önemi",
                paragraflar: [
                    "Simav'daki jeotermal-kaplıca tesisleri ile ahşap ambalaj atölyeleri, aynı ilçede olsa da tamamen farklı bakım disiplinleri gerektirir; biri turizm tesisi standardında, diğeri sanayi atölyesi standardındadır. Talep aldığımızda ilk sorduğumuz şey, işin hangi iş ailesine ait olduğudur — bu, doğru makine ve doğru ekibi baştan belirler.",
                    "Bu ayrımı net yapmak, sahada yanlış ekipmanla karşılaşmayı önler ve iş, ilk seferde doğru kurulumla başlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ahşap atölyemizde kıvılcım riski var mı, hangi ekipmanı kullanıyorsunuz?",
                cevap:
                    "Kesim tozu ve ahşap malzemenin yanıcılığı nedeniyle kıvılcım üretmeyen elektrikli ekipman kullanıyoruz ve çalışma öncesi havalandırma durumunu değerlendiriyoruz. Bu, ahşap işleme atölyelerinde standart uygulamamızdır. Atölyenizin kendi yangın güvenlik prosedürü varsa bize iletin, çalışma planını buna göre kurarız.",
            },
            {
                soru: "Kereste stok sahamızda yığınlar arasında dar geçitler var, makineniz geçebilir mi?",
                cevap:
                    "Genellikle geçebilir; dar geçitler için kompakt gövdeli makineler tercih ederiz. Zemin toprak veya dolgu olduğu için arazi tipi lastik kullanılır. Yığınların arasındaki geçit genişliğini ve zemin durumunu keşifte veya fotoğrafla önceden görürsek, doğru makine sınıfını sahaya gelmeden belirleriz.",
            },
            {
                soru: "Atölyemizdeki bir arıza merkezdeki çini paketlemeyi etkiler mi?",
                cevap:
                    "Etkileyebilir, çünkü Simav'daki ambalaj üretimi merkezdeki çini paketleme zincirinin bir parçasıdır. Bu bağımlılığı bildiğimiz için ambalaj atölyelerindeki acil bakım taleplerine öncelik veririz, özellikle ihracat sezonunun yoğun olduğu dönemlerde. Arızanın türünü ve üretim üzerindeki etkisini ilk çağrıda belirtirseniz, önceliği ona göre ayarlarız.",
            },
            {
                soru: "Jeotermal tesisimizdeki cephe bakımı, ahşap atölyelerinizdeki işlerden farklı mı?",
                cevap:
                    "Evet, tamamen farklı bir disiplin. Jeotermal ve kaplıca tesislerindeki cephe-çatı-aydınlatma işleri, standart bir turizm tesisi bakımı gibi ele alınır; misafir trafiği ve konaklama programı plana girer. Ahşap atölyelerindeki gibi kıvılcım veya toz kısıtı burada geçerli değildir. Talebinizde hangi tesis tipiyle ilgili olduğunuzu belirtirseniz, doğru yaklaşımla planlarız.",
            },
            {
                soru: "Simav'daki işimizi merkezdeki bir işle birleştirebilir misiniz?",
                cevap:
                    "Birleştirebiliriz; Simav'dan merkeze giden ambalaj sevkiyat hattı zaten düzenli bir trafik oluşturuyor ve bu hat üzerindeki işleri birleştirmek nakliye maliyetini paylaştırır. İki işin de tarihte esnek olması yeterli. Konumları ve tercih ettiğiniz tarih aralığını verirseniz tek turda bitirecek bir program çıkarırız.",
            },
            {
                soru: "Ahşap tozu makinenizde arızaya yol açar mı?",
                cevap:
                    "Bakım aralığı ortama göre kısaltılmazsa yol açabilir; kesim tozunun elektrik bağlantılarına ve hareketli parçalara birikmesi normal bir sanayi ortamı riskidir. Bu yüzden ahşap işleme atölyelerinde çalışan makinelerde filtre ve bağlantı kontrolü sıklaştırılır, uzun kiralamalarda saha ziyaret sıklığı artırılır. Bu düzenin maliyeti teklifte görünür, sonradan çıkan bir kalem olarak sunulmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Simav'ın orman ürünleri-ahşap işleme geleneği ve jeotermal kaynakları kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Ambalaj zinciri önceliklendirmesi firma pratiğidir.",
    },

    "bolge:gediz": {
        h1: "Gediz'de Tarım Depoları ve Çini Sevkiyat Bağlantısı",
        giris:
            "Gediz, Kütahya'nın tarım ağırlıklı ilçelerinden biridir ve kendi başına büyük bir çini veya seramik sanayisi barındırmaz; buna karşılık ilçenin depo ve lojistik yapıları, merkeze giden kara yolu güzergâhının bir parçası olarak zaman zaman sevkiyat hattımıza dahil olur. Bu sayfa, ilçenin kendi tarımsal depo ihtiyaçlarını ve merkezle olan lojistik bağlantısını, kardeş dosyalardaki büyük ölçekli sanayi profillerinden ayrı bir çerçevede ele alır.",
        maddeler: [
            {
                baslik: "Tarımsal ürün depolarında standart bakım",
                metin:
                    "Gediz'deki hububat ve meyve-sebze depolarının bakım ihtiyacı, çatı-oluk onarımı, aydınlatma ve havalandırma sistemleriyle sınırlıdır; bu, çini veya seramik sanayisinin özel hassasiyetlerinden bağımsız, standart bir tarımsal yapı bakımıdır. Zemin genellikle toprak veya dolgu olduğu için arazi tipi lastikli makineler tercih edilir.",
            },
            {
                baslik: "Soğuk hava deposu ve paketleme tesisleri",
                metin:
                    "Meyve ve sebze paketleme tesislerinde soğuk hava depoları, düşük sıcaklık nedeniyle çalışma bloklarını kısaltan bir kısıt getirir; bu tesislerdeki bakım işleri depo boşken veya stokun düşük olduğu dönemlerde planlanır. Egzoz kısıtı nedeniyle kapalı alanlarda akülü sınıf kullanılır.",
            },
            {
                baslik: "Merkeze giden güzergâh üzerindeki konum",
                metin:
                    "Gediz, merkeze giden bazı kara yolu güzergâhları üzerinde bulunur; bu nedenle ilçedeki bir iş, merkeze veya diğer ilçelere giden bir sevkiyatla birleştirilebilir. Bu birleşim, tekil bir sevkiyata göre maliyet avantajı sağlar ve tarih esnekliği bırakıldığında kolayca kurulur.",
            },
            {
                baslik: "Mevsim takvimine göre planlama",
                metin:
                    "İlçedeki tarımsal işletmelerin bakım ihtiyacı, hasat ve işleme dönemlerinin dışına planlandığında hem daha ucuz hem daha hızlı karşılanır; bu dönemlerde depo boş, çalışma penceresi geniştir. Yıllık bakım listesi önceden alındığında hangi kalemin hangi aya denk geleceği birlikte belirlenir.",
            },
            {
                baslik: "Küçük ölçekli işlerde makine ekonomisi",
                metin:
                    "Gediz'deki tarımsal tesislerin çoğu orta ve küçük ölçeklidir; bu ölçekte genellikle kompakt sınıf makineler yeterli olur ve büyük teleskopik sınıflara nadiren ihtiyaç duyulur. Bu, hem sevkiyat esnekliğini artırır hem de maliyeti düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gediz'de tesis tipi ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki tarımsal tesis tiplerinde platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Baskın kısıt", "Makine sınıfı", "Zamanlama"],
                    satirlar: [
                        ["Hububat deposu", "Toprak zemin", "Arazi tipi kompakt", "Boşaltma sonrası"],
                        ["Soğuk hava deposu", "Düşük sıcaklık", "Akülü, kısa blok", "Depo boşken"],
                        ["Paketleme tesisi", "Standart", "Akülü makaslı", "Sezon dışı"],
                        ["Depo çevresi aydınlatma", "Açık alan", "Standart", "Esnek"],
                        ["Merkeze güzergâh üstü iş", "Mesafe", "Değişken", "Tur birleştirme"],
                    ],
                },
            },
            {
                baslik: "Güzergâh üstü konumun sevkiyat avantajı",
                paragraflar: [
                    "Gediz'in merkeze giden güzergâh üzerindeki konumu, ilçedeki işlerin bazen doğrudan bir sevkiyat turuna eklenmesini mümkün kılar. Bu, özellikle acil olmayan bakım işlerinde belirgin bir maliyet avantajı sağlar; talebinizi tarih esnek notuyla açtığınızda, uygun bir tura yerleştirip fiyat farkını gösteririz.",
                    "Bu birleşimin kurulması için işin küçük ölçekli ve standart bir kalem olması yeterlidir; büyük ölçekli özel bir iş varsa tekil sevkiyat değerlendirilir.",
                ],
            },
            {
                baslik: "Sezon dışı bakımın ikili faydası",
                paragraflar: [
                    "Hasat ve işleme dönemlerinin dışında yapılan bakım, hem tesisin kendi operasyonunu etkilemez hem de bu dönemde genellikle makine bulunurluğu ve sevkiyat esnekliği daha rahattır. İki avantaj bir araya geldiğinde, sezon dışı bakım açık ara en verimli seçenek olur.",
                    "Yıllık bakım listenizi sezon başlamadan iletirseniz, hem tesis takviminize hem sevkiyat programımıza uygun bir tarih birlikte belirleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gediz'deki depomuz için ayrı bir sevkiyat mı gerekiyor, yoksa merkeze giden bir turdan mı faydalanabiliriz?",
                cevap:
                    "İşinizin acil olup olmamasına bağlı. Acil değilse, tarih esnek notuyla açtığınızda merkeze veya diğer ilçelere giden uygun bir sevkiyat turuna eklenir ve maliyet düşer. Acilse tekil sevkiyat yaparız; bu durumda maliyet mesafeye göre hesaplanır ve açıkça belirtilir. İşinizin ölçeğini ve konumunu söylerseniz hangi seçeneğin uygun olduğunu netleştiririz.",
            },
            {
                soru: "Soğuk hava deposunda çatı altı işi var, depo dolu olabilir mi?",
                cevap:
                    "Olabilir ama plan değişir; depo boşken çalışmak her açıdan daha hızlı ve ekonomiktir. Dolu depoda koridor genişlikleri ve ürün koruma gereksinimleri belirleyici olur, makine sınıfı buna göre seçilir. Düşük sıcaklık ayrıca çalışma bloklarını kısaltır. Önerimiz, mümkünse stokun en düşük olduğu döneme planlamanızdır.",
            },
            {
                soru: "Hububat deposu sahamızın zemini toprak, makine güvenle çalışabilir mi?",
                cevap:
                    "Arazi tipi lastikli makinelerle çalışabiliriz; toprak zeminde park noktası önceden belirlenir, yağış sonrası yumuşayan bölgelerden kaçınılır. Sahanın güncel durumunu iş gününden önce sorarız; şüpheli bir bölge varsa park noktası değiştirilir veya yük dağıtım plakası kullanılır.",
            },
            {
                soru: "Bakımımızı ne zaman yaptırmalıyız, sezon dışı gerçekten avantajlı mı?",
                cevap:
                    "Evet, açık ara avantajlı. Hasat ve işleme dönemlerinin dışında hem tesisiniz boş olur hem de bu dönemde makine bulunurluğu ve sevkiyat esnekliği daha rahat olur. İki avantaj bir araya geldiğinde toplam maliyet düşer. Yıllık bakım listenizi sezon başlamadan iletirseniz, hem tesis takviminize hem sevkiyat programımıza uygun bir tarih birlikte belirleriz.",
            },
            {
                soru: "İşimiz küçük ölçekli, büyük bir makine göndermeniz gerekir mi?",
                cevap:
                    "Genellikle hayır. Gediz'deki tarımsal tesislerin çoğu orta ve küçük ölçekte olduğu için kompakt sınıf makineler yeterli olur; büyük teleskopik sınıflara nadiren ihtiyaç duyulur. Bu, hem sevkiyat esnekliğini artırır hem maliyeti düşürür. İşinizin hedeflerini (yükseklik, konum) söylerseniz doğru sınıfı önceden belirleriz.",
            },
            {
                soru: "Gediz'deki bu sayfa neden diğer ilçe sayfalarından farklı bir profil anlatıyor?",
                cevap:
                    "Çünkü Gediz, Kütahya'nın çini ve seramik sanayisinin merkezinde değil, tarım ağırlıklı bir ilçesidir; buradaki gerçek talep tarımsal depo ve paketleme tesisi bakımıdır. Bu farkı görmezden gelip her ilçeyi aynı sanayi profiliyle anlatmak yerine, Gediz'in kendi gerçek ihtiyacını ve merkezle olan lojistik bağlantısını ayrı ele almayı doğru buluyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gediz'in tarım ağırlıklı ekonomik yapısı ve merkeze giden kara yolu bağlantısı kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Tur birleştirme ve sezon planlaması firma pratiğidir.",
    },

    "bolge:bilecik-osb-cevre-ili": {
        h1: "Bilecik OSB ve Çevresine Çini-Seramik Sevkiyat Desteği",
        giris:
            "Bilecik, Kütahya'nın kuzeybatı komşusu olarak, merkezdeki çini ve seramik sanayisinin OSB ağırlıklı sevkiyat hattına dahil olan bir komşu ildir. Bu sayfa, kardeş dosyamızdaki genel Kütahya seramik profilinden ayrı olarak, doğrudan Bilecik OSB'deki seramik ve yapı malzemesi üreticilerine ile merkezle olan çift yönlü sevkiyat ilişkisine odaklanır; bölgenin kendi sanayi kimliği merkezdekinden farklı ölçekte ele alınır.",
        maddeler: [
            {
                baslik: "Bilecik OSB'deki seramik-yapı malzemesi üreticileri",
                metin:
                    "Bilecik OSB içindeki seramik ve yapı malzemesi tesisleri, merkezdeki büyük ölçekli fabrikalara göre daha kompakt hatlarla çalışır; bakım işleri benzer bir mantıkla ama daha kısa sürede tamamlanır. OSB'nin planlı parsel yapısı, makinenin tesise ulaşımını ve parseller arası hareketini kolaylaştırır.",
            },
            {
                baslik: "Merkez-Bilecik hattında çift yönlü sevkiyat",
                metin:
                    "Merkezdeki filomuz, Bilecik OSB'ye düzenli sevkiyat yapar; bu hat üzerindeki işler tarih esnekliği bırakıldığında aynı tura eklenir. Çift yönlü ilişki, Bilecik'teki bir tesisin merkezdeki bir işle aynı sevkiyata bağlanabilmesi anlamına da gelir — hat tek yönlü değildir.",
            },
            {
                baslik: "OSB giriş düzeni ve komşuluk ekonomisi",
                metin:
                    "Bilecik OSB'nin kendi giriş kaydı ve güvenlik prosedürü, standart OSB uygulamasıyla aynıdır; operatör yeterlilik belgeleri önceden hazırlanır. Komşu parsellerdeki seramik tesisleri aynı hafta içinde talep açtığında, tek sevkiyatla birden fazla tesise hizmet vermek mümkün olur.",
            },
            {
                baslik: "Bölgedeki farklı sanayi kollarıyla birlikte çalışma",
                metin:
                    "Bilecik OSB, yalnızca seramik değil farklı sanayi kollarını da barındırır; bizim uzmanlığımız seramik ve yapı malzemesi tesislerinde yoğunlaşsa da, aynı parselde farklı bir sanayi kolunun standart bakım ihtiyacını da (aydınlatma, cephe) karşılayabiliriz. Bu, tek sevkiyatla komşu parsellerin farklı ihtiyaçlarını birleştirmeyi kolaylaştırır.",
            },
            {
                baslik: "Mesafe faktörünün maliyete etkisi",
                metin:
                    "Merkezden Bilecik'e olan mesafe, tekil bir işte nakliye maliyetinin payını artırır; bu yüzden bölgedeki müşterilerimize işlerini biriktirip tek sevkiyatta birleştirmelerini veya komşu tesislerle aynı haftayı hedeflemelerini öneriyoruz. Bu, tekil sevkiyata göre belirgin bir maliyet avantajı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bilecik'te tesis tipi ve sevkiyat modeli",
                paragraflar: [
                    "Aşağıdaki tablo, bölgedeki iş tiplerinin sevkiyat modelini özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ölçek", "Sevkiyat modeli", "Not"],
                    satirlar: [
                        ["OSB seramik tesisi", "Kompakt", "Tur içi, düzenli hat", "Merkez-Bilecik"],
                        ["Komşu parsel işleri", "Karma", "Tek sevkiyat birleşimi", "Aynı hafta"],
                        ["Farklı sanayi kolu (standart)", "Değişken", "Tur içi ek kalem", "Komşuluk ekonomisi"],
                        ["Acil arıza", "—", "En yakın uygun sınıf", "Hızlandırılmış"],
                        ["Tekil özel iş", "Büyük ölçekli", "Ayrı sevkiyat", "Mesafeye göre fiyat"],
                    ],
                },
            },
            {
                baslik: "Hattın çift yönlü çalışmasının avantajı",
                paragraflar: [
                    "Merkez-Bilecik hattı yalnızca merkezden bölgeye değil, bölgeden merkeze doğru da işler; bu, sevkiyat programının her iki yönde de doluluk oranını artırır ve tarih esnekliği olan işlerin daha hızlı bir tura yerleşmesini sağlar. Bölgedeki müşterilerimiz bu esnekliği bildiklerinde, acil olmayan işlerini bu hatta daha rahat planlayabiliyor.",
                    "Bu modelin işlemesi için bize erken bilgi vermeniz yeterli; ne kadar erken bildirirseniz, işiniz o kadar uygun bir tura denk gelir.",
                ],
            },
            {
                baslik: "Komşu parsellerle birleşimin pratikte kurulması",
                paragraflar: [
                    "Bilecik OSB'de komşu parsellerdeki tesislerin aynı hafta içinde bakım ihtiyacı olup olmadığını bilmek, bizim için değerli bir bilgidir. Bu bilgiyi bölge yönetimi üzerinden ya da doğrudan komşu firmalarla iletişime geçerek elde edebilirsiniz; talebinizi 'ortak plana açık' notuyla ilettiğinizde, bu koordinasyonu biz de destekleriz.",
                    "Birleşim kurulduğunda fatura yine ayrı ayrı düzenlenir; ortak bir muhasebe düzenlemesine ihtiyaç kalmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bilecik OSB'deki seramik tesisimiz Kütahya merkezdekilerden farklı mı ele alınıyor?",
                cevap:
                    "Ölçek olarak evet — Bilecik'teki tesisler genellikle merkezdeki büyük fabrikalara göre daha kompakt hatlarla çalışır ve bakım işleri buna bağlı olarak daha kısa sürede tamamlanır. Yaklaşım olarak ise aynı özeni gösteririz: hat üzerindeki erişim hassasiyeti, toz kontrolü ve OSB giriş prosedürüne uyum aynı standartta yürütülür.",
            },
            {
                soru: "Merkezden Bilecik'e düzenli sevkiyatınız var mı, yoksa her seferinde ayrı mı planlanır?",
                cevap:
                    "Düzenli bir hat var ve bu hat çift yönlü çalışır — merkezden Bilecik'e ve Bilecik'ten merkeze. Tarih esnekliği olan işler bu hatta kolayca yerleşir ve maliyet avantajı sağlar. Acil işlerde ayrı sevkiyat da yaparız; işinizin aciliyetini belirtirseniz size uygun seçeneği sunarız.",
            },
            {
                soru: "Komşu parseldeki firmayla birlikte kiralasak avantaj olur mu?",
                cevap:
                    "Olur; nakliye maliyeti birden fazla tesise bölündüğünde birim maliyet düşer. Komşunuzda benzer bir bakım ihtiyacı olup olmadığını bilmiyorsanız, talebinizi 'ortak plana açık' notuyla iletmeniz yeterli — bu koordinasyonu biz de destekleriz. Fatura yine ayrı ayrı düzenlenir, ortak bir muhasebe düzenlemesine gerek kalmaz.",
            },
            {
                soru: "OSB'de seramik dışı bir sanayi kolundayız, hizmet verir misiniz?",
                cevap:
                    "Veririz. Uzmanlığımız seramik ve yapı malzemesi tesislerinde yoğunlaşsa da, aynı parselde veya komşu parselde farklı bir sanayi kolunun standart bakım ihtiyacını (aydınlatma, cephe, tabela gibi) da karşılayabiliriz. Bu, özellikle tek sevkiyatla komşu parsellerin farklı ihtiyaçlarını birleştirmek istediğimizde işimize yarıyor.",
            },
            {
                soru: "Mesafe nedeniyle nakliye maliyeti yüksek çıkar mı?",
                cevap:
                    "Tekil bir işte mesafe payı elbette hissedilir; bu yüzden işlerinizi biriktirip tek sevkiyatta birleştirmenizi veya komşu tesislerle aynı haftayı hedeflemenizi öneriyoruz. Teklifte nakliye payını ayrı satır olarak gösteririz; birden fazla kalem veya komşu işle birleştiğinde bu payın nasıl düştüğü tabloda net görünür.",
            },
            {
                soru: "Acil bir arızamız var, Bilecik'e ne kadar sürede ulaşırsınız?",
                cevap:
                    "Süre, o anki sevkiyat programımıza ve bölgedeki makine bulunurluğuna bağlıdır; merkez-Bilecik hattı düzenli işlediği için genellikle kısa sürede bir makine yönlendirebiliriz. Arızanın türünü ve konumunu ilk çağrıda net verirseniz, en yakın uygun makineyi belirleyip size süre konusunda net bilgi veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik'in Kütahya'ya komşuluğu ve OSB'sindeki seramik-yapı malzemesi sanayisi kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Çift yönlü hat ve komşuluk ekonomisi firma pratiğidir.",
    },

    "bolge:usak-osb-cevre-ili": {
        h1: "Uşak OSB ve Çevresine Çini-Seramik Sevkiyat Desteği",
        giris:
            "Uşak, dokuma ve tekstil sanayisiyle bilinen bir komşu ildir; ancak OSB'sindeki üretim çeşitliliği içinde seramik ve yapı malzemesi tesisleri de yer alır ve bu tesisler, merkezdeki çini-seramik sevkiyat hattımızın bir parçasıdır. Bu sayfa, Uşak'ın kendi tekstil ağırlıklı kimliğini yok saymadan, OSB'deki seramik-yapı malzemesi üreticilerine nasıl hizmet verdiğimizi ve merkezle olan sevkiyat bağlantısını anlatır.",
        maddeler: [
            {
                baslik: "Uşak OSB'de seramik-yapı malzemesi tesisleri",
                metin:
                    "Uşak OSB içindeki seramik ve yapı malzemesi üreticileri, ilin baskın tekstil sanayisinin yanında daha küçük bir kümeyi oluşturur; bu tesislerin fırın ve paketleme hatlarındaki bakım ihtiyacı, merkezdeki büyük fabrikalara benzer bir mantıkla ama daha kompakt ölçekte karşılanır.",
            },
            {
                baslik: "Merkez-Uşak hattında sevkiyat mantığı",
                metin:
                    "Merkezden Uşak OSB'ye giden sevkiyat, mesafe nedeniyle tekil işlerde maliyet payı yüksek olan bir hattır; bu yüzden bölgedeki işleri tarih esnekliğiyle birleştirmek özellikle önemlidir. Tarih esnek notuyla açılan talepler, uygun bir tura yerleştirilir ve fiyat farkı gösterilir.",
            },
            {
                baslik: "Tekstil sanayisiyle komşuluk avantajı",
                metin:
                    "OSB içindeki seramik tesisleri, tekstil fabrikalarıyla aynı parsel düzenini paylaşır; bu komşuluk, farklı sanayi kollarının standart bakım ihtiyaçlarını (aydınlatma, cephe, çatı) aynı sevkiyata eklemeyi mümkün kılar. Uzmanlığımız seramik olsa da, komşu parseldeki standart bir tekstil holü bakımını da aynı turda karşılayabiliriz.",
            },
            {
                baslik: "OSB giriş prosedürü ve belge hazırlığı",
                metin:
                    "Uşak OSB'nin giriş kaydı ve güvenlik prosedürü, diğer OSB'lerle benzer bir düzende işler; operatör yeterlilik belgeleri ve makine kontrol kayıtları önceden hazırlanır. Bölge yönetiminin özel bir kuralı varsa, bunu iş gününden önce netleştiririz.",
            },
            {
                baslik: "Uzak mesafede acil çağrı yönetimi",
                metin:
                    "Uşak'ın merkeze olan mesafesi, acil çağrılarda müdahale süresini etkileyen bir faktördür; bölgedeki güncel sevkiyat programımıza bağlı olarak en yakın uygun makine yönlendirilir. Acil çağrılarda arızanın türünü ve konumunu net vermeniz, doğru kararı hızlı vermemizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Uşak'ta tesis tipi ve sevkiyat modeli",
                paragraflar: [
                    "Aşağıdaki tablo, Uşak OSB'deki seramik ve komşu sanayi kollarında sevkiyat modelini özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ölçek", "Sevkiyat modeli", "Not"],
                    satirlar: [
                        ["OSB seramik-yapı malzemesi", "Kompakt", "Tur içi", "Tarih esnek önerilir"],
                        ["Komşu tekstil holü (standart)", "Değişken", "Tur içi ek kalem", "Komşuluk ekonomisi"],
                        ["Acil arıza", "—", "En yakın uygun sınıf", "Hızlandırılmış"],
                        ["Tekil özel iş", "Büyük ölçekli", "Ayrı sevkiyat", "Mesafeye göre fiyat"],
                        ["Merkeze dönüş yükü", "—", "Boş dönüş azaltma", "İki yönlü iş tercih"],
                    ],
                },
            },
            {
                baslik: "Mesafenin sevkiyat planlamasına etkisi",
                paragraflar: [
                    "Uşak'ın merkeze uzaklığı, tekil bir işte nakliye maliyetinin payını belirgin şekilde artırır; bu yüzden bölgedeki müşterilerimize işlerini tarih esnekliğiyle birleştirmelerini özellikle öneriyoruz. Sevkiyat, mümkünse gidiş-dönüş boş kalmayacak şekilde planlanır — gidişte bir iş, dönüşte başka bir iş varsa toplam maliyet ikiye bölünür.",
                    "Bu planlamanın kurulması için bölgedeki işlerinizi mümkün olduğunca erken bildirmeniz yeterli; erken bilgi, uygun bir tur eşleşmesi bulma şansını doğrudan artırır.",
                ],
            },
            {
                baslik: "Farklı sanayi kolları arasında ortak sevkiyat",
                paragraflar: [
                    "Uşak OSB'nin tekstil ağırlıklı yapısı, seramik tesisleriyle aynı parsel düzenini paylaştığı için, farklı sanayi kollarının standart bakım ihtiyaçlarını aynı sevkiyata eklemek pratikte kolaydır. Bir seramik tesisinin fırın çevresi işiyle komşu tekstil holünün aydınlatma yenilemesi, tek sevkiyatla, ayrı faturalarla bitirilebilir.",
                    "Bu tür bir birleşimi kurmak için komşu firmalarla iletişime geçmeniz ya da talebinizi 'ortak plana açık' notuyla iletmeniz yeterlidir; koordinasyonu biz üstleniriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Uşak'ta seramik dışında bir sanayi kolundayız, yine de hizmet alabilir miyiz?",
                cevap:
                    "Alabilirsiniz. Uzmanlığımız seramik ve yapı malzemesi tesislerinde yoğunlaşsa da, standart aydınlatma, cephe ve çatı bakımı gibi işlerde farklı sanayi kollarına da hizmet veririz. Özellikle komşu parselde bir seramik tesisi işimiz varsa, aynı sevkiyata sizin işinizi de ekleyebiliriz; bu, maliyet avantajı sağlar.",
            },
            {
                soru: "Uşak'a mesafe uzun, nakliye maliyeti çok mu yüksek olur?",
                cevap:
                    "Tekil bir işte mesafe payı gerçekten hissedilir; bu yüzden bölgedeki işleri tarih esnekliğiyle birleştirmenizi öneriyoruz. Mümkünse gidiş-dönüş boş kalmayacak şekilde planlarız — aynı hafta içinde başka bir iş varsa toplam maliyet paylaşılır. Teklifte nakliye payını ayrı gösteririz; birleşim kurulduğunda bu payın nasıl düştüğü nettir.",
            },
            {
                soru: "OSB'ye girişte hangi belgeler isteniyor?",
                cevap:
                    "Uşak OSB'nin giriş kaydı ve güvenlik prosedürü diğer OSB'lerle benzer şekilde işler; operatör yeterlilik belgeleri, makine periyodik kontrol kayıtları ve sigorta evrakları bizim tarafımızda önceden hazırdır. Bölge yönetiminin özel bir kuralı varsa iş gününden önce netleştiririz; sizden istediğimiz, tesis içi onay sürecinizi bize bildirmeniz.",
            },
            {
                soru: "Acil bir arızamız var, ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Süre, o anki sevkiyat programımıza ve bölgedeki makine bulunurluğuna bağlıdır; mesafe nedeniyle Uşak'a müdahale süresi merkeze yakın ilçelere göre biraz daha uzun olabilir. Arızanın türünü ve konumunu ilk çağrıda net verirseniz, en yakın uygun makineyi belirleyip size gerçekçi bir süre veririz.",
            },
            {
                soru: "Komşu tekstil fabrikasıyla aynı sevkiyata girebilir miyiz?",
                cevap:
                    "Girebilirsiniz; farklı sanayi kollarının standart bakım ihtiyaçlarını aynı sevkiyata eklemek pratikte kolaydır. Bir seramik tesisinin işiyle komşu tekstil holünün aydınlatma yenilemesi tek sevkiyatla, ayrı faturalarla bitirilebilir. Komşunuzla iletişime geçip ortak bir tarih belirleyebilir ya da talebinizi 'ortak plana açık' notuyla iletebilirsiniz.",
            },
            {
                soru: "OSB'deki seramik tesisimizin fırın hattı merkezdekinden nasıl farklı?",
                cevap:
                    "Genellikle daha kompakt; Uşak OSB'deki seramik ve yapı malzemesi üreticileri, ilin baskın tekstil sanayisinin yanında daha küçük bir kümeyi oluşturur ve fırın hatları buna bağlı olarak daha kısa sürede bakım gerektirir. Erişim hassasiyeti ve soğuma penceresi kuralı ise merkezdekiyle aynıdır. Hat uzunluğunuzu ve kalem listenizi paylaşırsanız gerçekçi bir süre tahmini veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Uşak'ın tekstil ağırlıklı sanayi kimliği ve OSB'sindeki üretim çeşitliliği kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Sevkiyat birleştirme ve komşuluk ekonomisi firma pratiğidir.",
    },
};
