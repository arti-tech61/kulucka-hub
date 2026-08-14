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

    "bolge:kutahya-seramik-sanayi-bolgesi": {
        h1: "Kütahya Seramik Sanayi Bölgesinde Fırın Hattı ve Sırlama Kabini Çevresi Çalışma",
        giris:
            "Kütahya Seramik Sanayi Bölgesi denince akla önce vitrindeki tabak ve fincan gelir, ama bu ürünlerin arkasında sürekli çalışan bir üretim hattı vardır: hammadde presi, kurutma tüneli, sırlama kabini ve tünel fırın, birbirine bağlı bir zincir gibi işler ve zincirin hiçbir halkası uzun süre durdurulamaz. Bu sayfa, sanayi bölgesindeki seramik üretim hattının kendisini — fırın üstü ve çevresi, sırlama kabininin havalandırma sistemi, presleme bölümünün toz toplama düzeni — platform kiralama açısından ele alır; bölgedeki depo veya paylaşımlı küçük işletme kiralaması bu sayfanın konusu değildir, burada anlatılan doğrudan üretim hattının teknik gereksinimidir.",
        maddeler: [
            {
                baslik: "Tünel fırının üst kotu ve ısı bekleme süresi",
                metin:
                    "Tünel fırınlar, seramik sanayi bölgesindeki en uzun yapısal hatlardan biridir ve üstündeki baca gövdesi, çekme fanı ve yalıtım paneli bakımı fırının söndürülmesini gerektirir; ancak bir tünel fırının tam soğuması saatler sürebilir, bu yüzden bakım takvimi genellikle fırının zaten planlı olarak durduğu revizyon dönemine denk getirilir. Fırın üstünde çalışırken makine, hâlâ ılık olabilecek yüzeylere ve baca gazının kalıntı ısısına karşı, ısıya dayanıklı kişisel koruyucu donanımla desteklenen bir operatör tarafından kullanılır; bu, standart bir çatı işinden farklı bir hazırlık gerektirir.",
            },
            {
                baslik: "Sırlama kabininin havalandırma ve filtre bakımı",
                metin:
                    "Sırlama kabini, sırlama tozunun ve buharının işçiye ulaşmadan emilmesini sağlayan bir emiş sistemiyle çalışır; bu sistemin filtre değişimi ve kanal temizliği, kabinin tavanına ve arkasına yerleşmiş menfezlerde yapılır. Sır kalıntısı zamanla kanal iç yüzeyinde sertleşen bir tabaka bırakır, bu yüzden bakım aralığı standart bir havalandırma bakımından daha sık tutulur. Kabin üstü dar ve düşük tavanlıdır, bu da kompakt gövdeli bir makineyi neredeyse zorunlu kılar.",
            },
            {
                baslik: "Presleme bölümünde toz toplama hattı",
                metin:
                    "Kuru presleme yöntemiyle çalışan hatlarda, kalıptan taşan ince toz sürekli üretilir ve bu tozu havadan çeken bir toz toplama sistemi (siklon, torba filtre) genellikle presin hemen üstünde veya yan tarafında konumlanır. Bu sistemin torba değişimi ve kanal bağlantı kontrolü, presin tam durduğu ve tozun çökeldiği bir ara vermeyi gerektirir; presin çalışır hâldeyken üstünde iş yapmak hem tehlikeli hem verimsizdir. Bakım öncesi presin kapatılıp kısa bir bekleme süresi tanınması standart uygulamadır.",
            },
            {
                baslik: "Kurutma tüneli ve nem dengesinin hassasiyeti",
                metin:
                    "Presten çıkan ham ürün, sırlanmadan önce bir kurutma tünelinden geçer; bu tünelin iç nem ve sıcaklık dengesi çok hassastır çünkü dengesiz kuruma çatlağa yol açar. Tünel üstündeki fan veya ısıtıcı elemanların bakımı sırasında tünelin kapağının uzun süre açık kalması iç ortamı bozabileceği için, iş genellikle tünelin boş olduğu bir üretim arası penceresine planlanır ve kapak açık kaldığı süre elimizden geldiğince kısa tutulur.",
            },
            {
                baslik: "Hat boyunca vardiya geçişinin iş penceresi",
                metin:
                    "Seramik üretim hattı genellikle vardiyalı çalışır ve hattın tamamen durduğu tek an, vardiyalar arasındaki kısa geçiş dilimidir; bu dilim on-on beş dakika kadar kısa olabilir ve bakım işi için tek başına yeterli değildir. Bunun yerine, hattın planlı revizyon veya bakım durakları (genellikle haftalık veya aylık bir program dahilinde) esas alınır; biz iş planımızı bu duraklara göre kurarız, vardiya geçişine göre değil.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üretim hattı bölümüne göre bakım koşulu",
                paragraflar: [
                    "Aşağıdaki tablo, seramik üretim hattının farklı bölümlerinde platformun karşılaştığı koşulu özetler.",
                ],
                tablo: {
                    basliklar: ["Hat bölümü", "Baskın koşul", "Gerekli ara", "Makine notu"],
                    satirlar: [
                        ["Tünel fırın üstü", "Kalıntı ısı", "Tam soğuma veya revizyon durağı", "Isıya dayanıklı hazırlık"],
                        ["Sırlama kabini üstü", "Sır kalıntısı, dar tavan", "Kabin durağı", "Kompakt gövde"],
                        ["Presleme toz toplama", "İnce toz, tehlike", "Pres durağı + bekleme", "Standart erişim"],
                        ["Kurutma tüneli üstü", "Nem-sıcaklık hassasiyeti", "Tünel boşken", "Hızlı iş, kısa kapak açıklığı"],
                        ["Vardiya geçiş dilimi", "Çok kısa süre", "Yetersiz — kullanılmaz", "Revizyon durağı esas"],
                    ],
                },
            },
            {
                baslik: "Fırının soğuma süresini planın parçası hâline getirmek",
                paragraflar: [
                    "Tünel fırınların soğuması, fırının boyutuna ve son çalışma sıcaklığına göre değişir ve bu süre, bakım işinin başlangıç saatini doğrudan belirler; erken girip yüzeye dokunmak hem operatör güvenliği hem malzeme açısından risklidir. Bu yüzden fırın bakımı planlarken ilk sorduğumuz şey, fırının ne zaman söndürüldüğü ve bize verilecek çalışma penceresinin ne zaman başlayacağıdır.",
                    "Bu bilgi netleştiğinde, işi fırının soğuma eğrisine göre kurarız — örneğin baca üstü işleri daha geç, alt kısımdaki işleri daha erken sıraya alarak toplam bekleme süresini en aza indiririz. Bu sıralama, aynı revizyon durağı içinde iki-üç kalemi art arda bitirmemizi mümkün kılar.",
                ],
            },
            {
                baslik: "Sır kalıntısının bakım aralığına etkisi",
                paragraflar: [
                    "Sırlama kabini ve çevresindeki kanal sisteminde biriken sır kalıntısı, standart bir toz veya kir birikiminden farklı davranır — zamanla sertleşir ve mekanik olarak temizlenmesi gerekir. Bu nedenle sırlama hattı üstü işlerde bakım aralığını, tesisin kendi üretim hacmine göre (yüksek hacimli hatlarda daha sık) ayarlamasını öneririz; sabit bir takvim yerine kalıntı birikim hızına göre kurulan bir program, uzun vadede daha az acil çağrı doğurur.",
                    "Bu önerimizi ilk keşifte, kabin içindeki mevcut kalıntı durumunu görerek somutlaştırırız; tesisin kendi bakım kayıtlarıyla birleştiğinde gerçekçi bir aralık ortaya çıkar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tünel fırının üstünde çalışmak için fırının tamamen soğumasını mı beklemeniz gerekiyor?",
                cevap:
                    "Çoğu zaman evet, en azından yüzeyin dokunulabilir bir sıcaklığa inmesini bekleriz; kalıntı ısı hem operatör güvenliği hem malzeme açısından risklidir. Bazı işlerde (örneğin baca gövdesinin dış yüzeyi) tam soğuma gerekmeyebilir ama bu, fırının o anki durumuna ve iş tipine göre keşifte değerlendirilir. Fırının söndürülme zamanını ve planlı revizyon durağınızı önceden bildirirseniz, işi bu pencereye göre kurarız.",
            },
            {
                soru: "Sırlama kabininin filtre bakımı ne sıklıkla yapılmalı?",
                cevap:
                    "Sabit bir sayı vermek yerine kabin içindeki sır kalıntı birikim hızına göre bir aralık öneririz; yüksek hacimli hatlarda kalıntı daha hızlı sertleştiği için aralık kısalır. İlk keşifte kabin ve kanal içindeki mevcut durumu görüp tesisinizin kendi üretim temposuyla birleştirerek gerçekçi bir program öneririz. Bu program, sabit takvimden daha az acil çağrıya yol açar çünkü kalıntı sertleşmeden temizlenir.",
            },
            {
                soru: "Pres çalışırken toz toplama sisteminde acil bir arıza çıkarsa ne yapıyorsunuz?",
                cevap:
                    "Öncelik presin güvenli şekilde durdurulmasıdır; toz toplama sistemi arızalıyken pres çalışmaya devam ederse hem iş güvenliği hem üretim kalitesi riske girer. Pres durduktan ve toz çökeldikten sonra makineyi yönlendiririz; bekleme süresi kısa olsa da atlanmaz. Acil çağrılarda arızanın türünü ve presin o anki durumunu net belirtirseniz, en yakın uygun makineyi hızlı yönlendiririz.",
            },
            {
                soru: "Kurutma tünelinin kapağını açık tutma süremiz sınırlı mı?",
                cevap:
                    "Evet, mümkün olduğunca kısa tutulmalı çünkü tünelin iç nem-sıcaklık dengesi bozulursa üründe çatlak riski oluşur. Bu yüzden tünel üstü işlerde önceden hazırlık yapıp kapağı açtığımız andan itibaren işi hızlıca bitirmeyi hedefleriz; gerekli parça ve ekipman işe başlamadan hazır bulundurulur. Tünelin boş olduğu bir üretim arası varsa, iş bu pencereye planlanarak kapak açıklığı süresi daha da kısaltılabilir.",
            },
            {
                soru: "Vardiya geçiş dilimini bakım için kullanabilir misiniz?",
                cevap:
                    "Genellikle hayır; vardiya geçişi on-on beş dakika gibi çok kısa bir dilimdir ve platform kurulumu, hedefe erişim ve iş bitirme için yeterli değildir. Bunun yerine hattın planlı revizyon veya bakım durağını (haftalık ya da aylık program dahilindeki daha uzun duruş) esas alırız. Tesisinizin revizyon takvimini önceden paylaşırsanız, işi bu durağa göre planlarız.",
            },
            {
                soru: "Hat üstü işlerde operatörünüz üretim sürecine dair eğitim alıyor mu?",
                cevap:
                    "Operatörlerimiz genel makine yeterliliğine sahiptir ve fırın-sırlama-presleme gibi bölümlere özgü riskleri (kalıntı ısı, sır kalıntısı, ince toz) keşif ve iş öncesi brifingle öğrenir; bu bilgi, tesisin kendi vardiya sorumlusuyla birlikte iş başında da teyit edilir. Tesisinize özgü bir güvenlik prosedürünüz varsa (örneğin fırın çevresinde belirli bir bekleme mesafesi), bunu bize önceden iletmeniz yeterli; operatörümüz sahada buna uyar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Seramik üretiminde tünel fırın, sırlama kabini, kuru presleme ve kurutma tüneli aşamalarının genel işleyişi kamuya açık teknik bilgidir; tesis adı ve rakam kullanılmamıştır. Revizyon durağına göre planlama ve kalıntı birikimine göre bakım aralığı firma pratiğidir.",
    },

    "bolge:altintas": {
        h1: "Altıntaş'ta Merkezden Sevkiyatlı Seramik Tesisi Bakım Planlaması",
        giris:
            "Altıntaş, Kütahya merkezine yakın bir ilçe olduğu için buradaki seramik ve çini üretim tesislerinin bakım işleri, çoğunlukla merkezdeki filomuzun günlük sevkiyat rotasına eklenerek yürütülür. Bu, Altıntaş'taki bir tesisin ayrı bir uzak bölge sevkiyatı gibi değil, merkez içi bir iş gibi planlanabildiği anlamına gelir; mesafe kısa olduğu için makine aynı gün içinde merkezdeki bir işten çıkıp Altıntaş'taki bir işe geçebilir. Bu sayfa, bu yakınlığın Altıntaş'taki seramik tesisleri için pratikte ne anlama geldiğini ve iş planının nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Merkez-Altıntaş hattının aynı gün kapasitesi",
                metin:
                    "Altıntaş'ın merkeze olan yakınlığı, makinenin bir günde iki ayrı tesise hizmet verebilmesini mümkün kılar; sabah merkezdeki bir seramik fabrikasında başlayan bir iş, öğleden sonra Altıntaş'taki bir tesise geçebilir. Bu, tekil bir uzak bölge sevkiyatına göre hem daha hızlı hem daha ekonomik bir model kurar çünkü nakliye süresi saatler değil dakikalar mertebesindedir.",
            },
            {
                baslik: "Küçük ölçekli üretim tesislerinde fırın-sırlama bakımı",
                metin:
                    "Altıntaş'taki seramik üretim tesisleri, merkezdeki büyük fabrikalara göre genellikle daha kompakt bir hat kurar; fırın ve sırlama bölümü aynı hol içinde daha yakın konumlanabilir. Bu kompakt yapı, bakım işini basitleştirir çünkü makinenin bir bölümden diğerine geçişi kısa mesafede olur; ancak dar geçitler ve düşük tavan yüksekliği de bu kompaktlıkla birlikte gelir, bu yüzden makine sınıfı seçimi genellikle küçük ve manevra kabiliyeti yüksek sınıflara kayar.",
            },
            {
                baslik: "Merkeze giden ürün sevkiyatıyla koordinasyon",
                metin:
                    "Altıntaş'ta üretilen yarı mamul veya mamul ürünler, zaman zaman merkezdeki daha büyük bir tesise nihai işlem için sevk edilir; bu ürün sevkiyat hattı, bizim bakım sevkiyatımızla aynı güzergâhı paylaşır. Bu örtüşme sayesinde, Altıntaş'taki bir tesisin bakım talebini merkeze giden bir ürün sevkiyat gününe denk getirmek, ilave bir planlama katmanı gerektirmeden mümkün olur.",
            },
            {
                baslik: "İlçe merkezindeki küçük atölyelerin erişim ihtiyacı",
                metin:
                    "Altıntaş ilçe merkezinde, büyük üretim tesislerinin dışında küçük ölçekli çini işleme veya perakende satış noktasına bağlı küçük atölyeler de bulunur; bu atölyelerin bakım ihtiyacı (aydınlatma, tabela, cephe) büyük tesislerden farklı, daha küçük ölçekli bir taleptir. Bu tip işler, merkez-Altıntaş hattındaki büyük tesis işiyle aynı güne denk getirildiğinde nakliye maliyeti paylaşılır.",
            },
            {
                baslik: "Acil çağrılarda kısa müdahale süresi",
                metin:
                    "Altıntaş'ın merkeze yakınlığı, acil bir arıza çağrısında müdahale süresini kısaltan doğrudan bir avantajdır; merkezdeki makine bulunurluğuna bağlı olarak genellikle aynı gün içinde bir makine yönlendirilebilir. Bu, uzak ilçelere göre belirgin bir fark yaratır ve Altıntaş'taki tesisler için acil bakım planlamasını daha esnek kılar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Altıntaş'ta iş tipi ve sevkiyat modeli",
                paragraflar: [
                    "Aşağıdaki tablo, Altıntaş'taki iş tiplerinin merkez hattına göre nasıl planlandığını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ölçek", "Sevkiyat modeli", "Not"],
                    satirlar: [
                        ["Seramik üretim tesisi (fırın-sırlama)", "Kompakt", "Aynı gün, merkez turu içi", "Kısa geçit, küçük sınıf"],
                        ["Merkeze ürün sevkiyatı örtüşmesi", "—", "Ürün hattıyla eşleşme", "İlave planlama gerekmez"],
                        ["İlçe merkezi küçük atölye", "Küçük", "Tur içi ek kalem", "Büyük tesis işiyle birleşir"],
                        ["Acil arıza", "—", "Aynı gün müdahale", "Merkez yakınlığı avantajı"],
                        ["Tekil özel iş", "Büyük ölçekli", "Bağımsız planlama", "Standart"],
                    ],
                },
            },
            {
                baslik: "Aynı günde iki tesise hizmet vermenin sınırı",
                paragraflar: [
                    "Merkez-Altıntaş hattının aynı gün kapasitesi sınırsız değildir; makinenin bir tesisteki işi ne kadar sürerse, ikinci tesise ayrılabilecek zaman o kadar kısalır. Bu yüzden aynı gün iki tesise hizmet planlarken, her iki işin de kapsamını (kalem sayısı, tahmini süre) önceden netleştiririz; kapsam net değilse, ilk iş uzayıp ikinci işi geciktirebilir.",
                    "Bu netleştirme genellikle kısa bir telefon görüşmesiyle yapılır — her iki tesisten de iş listesini alıp toplam süreyi tahmin eder, gerekirse günü ikiye bölmek yerine ayrı günlere yayarız.",
                ],
            },
            {
                baslik: "Kompakt hat yapısında makine seçiminin önemi",
                paragraflar: [
                    "Altıntaş'taki kompakt üretim hatlarında yanlış makine sınıfı seçimi, sahada geri gönderme ve gecikmeye yol açabilir; dar geçit veya düşük tavan bilgisi eksik geldiğinde bu risk artar. Bu yüzden keşifte veya telefonda, hattın geçit genişliği ve tavan yüksekliği hakkında en azından yaklaşık bir bilgi almayı isteriz — kesin ölçü olmasa bile bu, doğru sınıfı önceden daraltmamıza yardımcı olur.",
                    "Fotoğraf paylaşımı, bu bilgiyi netleştirmenin en hızlı yoludur; hattın genel görünümünü gösteren birkaç fotoğraf, sahaya gelmeden makine kararını büyük ölçüde kesinleştirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Altıntaş'taki tesisimiz için ayrı bir sevkiyat mı düzenleniyor, yoksa merkez turuna mı ekleniyor?",
                cevap:
                    "Genellikle merkez turuna eklenir çünkü Altıntaş'ın merkeze yakınlığı, makinenin aynı gün içinde iki tesise hizmet vermesini mümkün kılar. Bu, hem daha hızlı hem daha ekonomik bir çözümdür. İşinizin büyüklüğüne göre bazen tek başına bir gün de ayrılabilir; bu, iş kapsamını netleştirdikten sonra karara bağlanır.",
            },
            {
                soru: "Fırın hattımızın çevresi dar, standart makine sığar mı?",
                cevap:
                    "Altıntaş'taki tesislerin çoğunda hat kompakt olduğu için küçük ve manevra kabiliyeti yüksek makine sınıfları tercih edilir; standart büyük sınıflar bu tip dar geçitlerde zorlanabilir. Kesin uygunluk, geçit genişliği ve tavan yüksekliği bilgisiyle netleşir. Fotoğraf paylaşırsanız sahaya gelmeden doğru sınıfı büyük ölçüde belirleyebiliriz.",
            },
            {
                soru: "Ürün sevkiyatımızla bakım işini aynı güne getirebilir miyiz?",
                cevap:
                    "Getirebiliriz; Altıntaş'tan merkeze giden ürün sevkiyat hattı bizim bakım sevkiyatımızla aynı güzergâhı paylaştığı için bu örtüşme ilave bir planlama katmanı gerektirmez. Ürün sevkiyat tarihinizi bize önceden bildirirseniz, bakım işini o güne veya bir gün öncesine-sonrasına yerleştirmeye çalışırız.",
            },
            {
                soru: "İlçe merkezindeki küçük atölyemiz için de hizmet alabilir miyiz?",
                cevap:
                    "Alabilirsiniz. Büyük üretim tesisi işiyle aynı güne denk getirildiğinde nakliye maliyeti paylaşılır ve bu, küçük atölye bütçesine daha uygun bir maliyet çıkarır. Talebinizi ilettiğinizde, o hafta Altıntaş'ta başka bir iş olup olmadığını kontrol edip size uygun bir tarih öneririz.",
            },
            {
                soru: "Acil bir arızamız var, ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Altıntaş'ın merkeze yakınlığı sayesinde genellikle aynı gün içinde bir makine yönlendirebiliriz; kesin süre merkezdeki o anki makine bulunurluğuna bağlıdır. Arızanın türünü ve tesisinizin konumunu ilk çağrıda net verirseniz, en yakın uygun makineyi belirleyip size gerçekçi bir süre bildiririz.",
            },
            {
                soru: "Aynı gün merkezde başka bir iş varsa, bizim işimiz gecikir mi?",
                cevap:
                    "Gecikebilir, bu yüzden aynı gün iki tesise hizmet planlarken her iki işin kapsamını önceden netleştiririz. İş listenizi ve tahmini kalem sayısını paylaşırsanız, toplam süreyi tahmin edip günü buna göre kurarız; kapsam belirsizse ve iki iş sığmayacaksa, işinizi ayrı bir güne yerleştirmeyi öneririz. Bu netleştirme, sahada gecikme yaşamamanın en pratik yoludur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Altıntaş'ın Kütahya merkezine yakın konumu ve ilçedeki seramik üretim faaliyeti kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Aynı gün tur birleştirme ve ürün sevkiyat örtüşmesi firma pratiğidir.",
    },

    "bolge:kutahya-osb": {
        h1: "Kütahya OSB'de Seramik ve Çini Üretim Hattının Fırın-Sırlama-Presleme Bölümleri",
        giris:
            "Kütahya OSB'nin seramik ve çini üreticileri arasında dolaşırken, bakım açısından en çok tartışılan alan genellikle depo veya ofis değil, üretim hattının kendisidir — hammaddenin preslendiği bölüm, ürünün sırlandığı kabin ve son olarak fırınlandığı tünel. Bu üç bölüm, aynı çatı altında olsa da birbirinden çok farklı bakım koşulu taşır: biri toz, biri kimyasal buhar, biri kalıntı ısı ile uğraşır. Bu sayfa, OSB'deki seramik-çini üretim hattının bu üç bölümünü tek tek ele alır ve her birinde platformun nasıl kullanıldığını, hattın çalışma temposunu bozmadan anlatır; OSB'nin depo-lojistik tarafı veya küçük işletmelerin paylaşımlı kiralaması bu sayfanın konusu değildir.",
        maddeler: [
            {
                baslik: "OSB'deki fırın hattının revizyon durağına göre planlanması",
                metin:
                    "OSB içindeki orta-büyük ölçekli seramik üreticilerinde tünel fırın, günün büyük bölümünde kesintisiz çalışır ve bakım işi ancak fırının planlı revizyon durağında yapılabilir; bu durak genellikle önceden belirlenmiş bir program dahilindedir ve tesis yönetimi tarafından haftalar öncesinden bilinir. Bizim işimiz, bu durağı bilip iş planımızı ona göre kurmaktır — durak günü geldiğinde makine ve operatör hazır bulunur, fırının soğuma süresine göre işe başlanır.",
            },
            {
                baslik: "Sırlama kabininin OSB ölçeğindeki emiş sistemi",
                metin:
                    "OSB'deki büyük ölçekli sırlama hatlarında emiş sistemi, küçük atölyelere göre çok daha kapsamlı bir kanal ağına sahiptir ve bu ağ genellikle hol tavanının büyük bir kısmına yayılır. Kanal bakımı ve filtre değişimi, hattın hangi bölümünün o an aktif olduğuna göre parça parça yapılır — tüm hattı aynı anda durdurmak yerine, bir bölümün emiş sistemi bakımdayken diğer bölüm çalışmaya devam eder. Bu, OSB ölçeğindeki hatların küçük atölyelere göre bakım sırasında üretimi daha az kesintiye uğratmasını sağlayan bir avantajdır.",
            },
            {
                baslik: "Presleme bölümünde OSB ölçeğinde toz toplama kapasitesi",
                metin:
                    "OSB'deki büyük presleme hatlarında toz toplama sistemi, tek bir siklon değil birden fazla toplama noktasından oluşan bir ağ olabilir; her toplama noktasının kendi torba veya filtre bakım periyodu vardır ve bunlar genellikle rotasyonlu bir programla, hattı tamamen durdurmadan sırayla bakımdan geçirilir. Bu rotasyon, hangi presin o an bakımda olduğunu ve diğerlerinin çalışmaya devam ettiğini bilmemizi gerektirir; bu bilgi tesis vardiya sorumlusundan iş günü sabahı teyit edilir.",
            },
            {
                baslik: "Hat içi geçiş koridorlarının OSB'ye özgü genişliği",
                metin:
                    "OSB'deki üretim holleri, şehir içindeki küçük atölyelere göre genellikle daha geniş plana sahiptir ve pres-kurutma-sırlama-fırın bölümleri arasındaki geçiş koridorları da buna bağlı olarak daha ferahtır. Bu, makinenin bir bölümden diğerine geçişini kolaylaştırır ve aynı iş gününde birden fazla bölümde art arda çalışmayı mümkün kılar; ancak koridorun genişliği bölümden bölüme değişebileceği için, iş öncesi hattın genel planını görmek hâlâ faydalıdır.",
            },
            {
                baslik: "OSB'deki çok bölümlü tesislerde vardiya sorumlusuyla koordinasyon",
                metin:
                    "OSB'deki büyük seramik tesislerinde üretim hattı vardiyalı çalıştığı için, bakım işinin hangi anda hangi bölümde yapılabileceği bilgisi genellikle tek bir kişide değil, vardiya sorumlusunda ve bölüm ustabaşılarında dağılmış olarak bulunur. İş gününe girmeden önce bu koordinasyonu netleştirmek — hangi bölüm ne zaman durur, hangi bölüm sürekli çalışır — sahadaki bekleme süresini büyük ölçüde azaltır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB ölçeğinde üretim hattı bölümü ve bakım rejimi",
                paragraflar: [
                    "Aşağıdaki tablo, OSB'deki büyük ölçekli seramik-çini üretim hattının bölümlerine göre bakım rejimini özetler.",
                ],
                tablo: {
                    basliklar: ["Hat bölümü", "OSB ölçeğinde özellik", "Bakım rejimi", "Makine notu"],
                    satirlar: [
                        ["Tünel fırın", "Kesintisiz uzun hat", "Planlı revizyon durağı", "Isıya dayanıklı hazırlık"],
                        ["Sırlama kabini + kanal ağı", "Geniş, çok bölümlü emiş sistemi", "Bölüm bazlı, rotasyonlu", "Kompakt, kanal erişimli"],
                        ["Presleme + toz toplama", "Çoklu toplama noktası", "Rotasyonlu, hat sürerken", "Standart erişim"],
                        ["Bölümler arası koridor", "Geniş plan", "—", "Aynı günde çoklu bölüm"],
                        ["Vardiya koordinasyonu", "Çok kişili bilgi kaynağı", "İş öncesi teyit", "—"],
                    ],
                },
            },
            {
                baslik: "Rotasyonlu bakımın hattı durdurmadan işlemesi",
                paragraflar: [
                    "OSB ölçeğindeki büyük hatlarda bakımı tüm hattı durdurarak yapmak hem tesise hem bize maliyetlidir; bu yüzden mümkün olduğunda rotasyonlu bir yaklaşım tercih ederiz — hattın bir bölümü bakımdayken diğer bölümler üretime devam eder. Bu yaklaşımın çalışması için tesisin bize hangi bölümün ne zaman 'bakıma uygun' olduğunu (örneğin o bölümün stok tamponunun dolu olduğu, kısa süreli durmanın üretimi etkilemeyeceği bir an) bildirmesi gerekir.",
                    "Bu bilgi paylaşıldığında, biz de makine ve operatörü bu rotasyona göre bölümden bölüme kaydırarak, toplam iş süresini hem kısaltır hem tesisin üretim kaybını en aza indiririz.",
                ],
            },
            {
                baslik: "Büyük hatlarda ekipman hazırlığının önceden yapılması",
                paragraflar: [
                    "OSB'deki büyük seramik tesislerinde fırın revizyon durağı gibi kısıtlı zaman pencereleri söz konusu olduğunda, ekipman ve parça hazırlığını iş gününden önce tamamlamak kritik önem taşır; durak başladığında makine ve operatör sahada hazır beklemeli, gerekli malzeme elde bulunmalıdır. Bu hazırlık, revizyon durağının kısıtlı süresini bakım işine değil bekleme veya malzeme tedarikine harcamamak için yapılır.",
                    "Bu yüzden büyük ölçekli hat işlerinde, iş kapsamını (kaç kalem, hangi malzeme gerekiyor) mümkün olduğunca erken netleştirmenizi öneririz; bu netleştirme, revizyon durağı geldiğinde işin ilk dakikadan itibaren ilerlemesini sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'deki fırın hattımızın revizyon durağı ne zaman olacağını bilmiyoruz, siz nasıl planlıyorsunuz?",
                cevap:
                    "Bu bilgiyi genellikle tesis yönetiminden veya bakım sorumlusundan alırız; siz de bu tarihi netleştirdiğinizde bize erken bildirirseniz, iş planımızı buna göre kurarız. Revizyon durağı tarihi kesinleşmeden randevu vermeyiz çünkü fırın çalışırken üstünde iş yapılamaz. Tarih netleştiğinde, durak başlar başlamaz makine ve operatörün sahada hazır olması için hazırlığı önceden tamamlarız.",
            },
            {
                soru: "Sırlama kanal ağımız çok geniş, tüm hattı aynı anda mı temizliyorsunuz?",
                cevap:
                    "Genellikle hayır; OSB ölçeğindeki geniş kanal ağlarında rotasyonlu bir yaklaşım tercih ederiz — hattın bir bölümü bakımdayken diğer bölümler çalışmaya devam eder. Bu, tüm hattı aynı anda durdurmaktan daha az üretim kaybı yaratır. Hangi bölümün ne zaman bakıma uygun olduğunu tesis vardiya sorumlunuzla birlikte netleştirir, iş planını buna göre kurarız.",
            },
            {
                soru: "Presleme hattımızda birden fazla toz toplama noktası var, hepsini tek seferde mi bakımdan geçiriyorsunuz?",
                cevap:
                    "Hayır, genellikle rotasyonlu bir programla sırayla bakımdan geçiririz; bu sayede diğer presler çalışmaya devam eder. Hangi presin o an bakımda olduğu ve diğerlerinin durumu, iş günü sabahı vardiya sorumlunuzla teyit edilir. Bu rotasyon, hattın toplam üretim kaybını en aza indirmek için kurulur; kapsamlı bir toz toplama ağınız varsa, iş öncesi bu ağın haritasını görmek bize yardımcı olur.",
            },
            {
                soru: "OSB'deki hattımızda aynı gün birden fazla bölümde çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz; OSB'deki üretim holleri genellikle geniş planlı olduğu için pres-kurutma-sırlama-fırın bölümleri arasındaki geçiş koridorları ferahtır ve makine aynı gün içinde birden fazla bölüme geçebilir. Hangi bölümlerin o gün müsait olduğunu (hangisi çalışıyor, hangisi bakıma uygun) önceden netleştirirsek, günü buna göre sıralı bir plana bağlarız.",
            },
            {
                soru: "Vardiya sorumlusu ile ustabaşılar arasında bilgi tutarsız olursa ne oluyor?",
                cevap:
                    "Bu durumda sahada bekleme süresi uzayabilir, bu yüzden iş gününe girmeden önce koordinasyonu netleştirmeye özellikle önem veririz — hangi bölüm ne zaman durur, hangi bölüm sürekli çalışır bilgisini tek bir kaynaktan (genellikle vardiya sorumlusu) teyit ederiz. Tesisinizde bu bilginin kimde toplandığını bize önceden belirtirseniz, iletişimi doğrudan o kişiyle kurarız ve sahadaki belirsizliği azaltırız.",
            },
            {
                soru: "Fırın revizyon durağı beklenenden kısa sürerse işimiz yarım mı kalır?",
                cevap:
                    "Bu riski azaltmak için ekipman ve parça hazırlığını iş gününden önce tamamlarız, böylece durak başladığı andan itibaren zaman bekleme veya tedarikte kaybolmaz. Yine de durak beklenenden kısa sürerse, önceliği en kritik kalemlere veririz ve kalan işleri bir sonraki revizyon durağına veya ayrı bir kısa pencereye planlarız; bu senaryo keşifte konuşulur ve önceliklendirme sizinle birlikte belirlenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. OSB ölçeğindeki seramik-çini üretim hatlarının genel işleyişi (tünel fırın, sırlama emiş sistemi, presleme toz toplama) kamuya açık teknik bilgidir; tesis adı ve rakam kullanılmamıştır. Rotasyonlu bakım ve revizyon durağı planlaması firma pratiğidir.",
    },

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Çini Atölyesi ve Sırlama Kabini İçinde Örümcek Platform Kiralama",
        giris:
            "Seramik ve çini üretim hattının en dar noktaları genellikle kapı önlerinden değil, hattın içinden geçer: sırlama kabininin arkasındaki dar kanal boşluğu, fırın girişindeki alçak geçit veya kurutma tünelinin yan koridoru gibi standart bir makaslı ya da eklemli platformun sığamayacağı aralıklar. Sepetli örümcek platform, gövdesini paletlerin üzerinde sabitleyip yalnızca bomunu hedefe uzattığı için, bu tip dar ve düşük tavanlı geçitlerde çalışabilen neredeyse tek makine sınıfıdır. Bu sayfa, örümcek platformun Kütahya'daki çini atölyesi ve seramik fabrikası içindeki bu özel kullanım alanını anlatır; geniş üretim holünde metrekare hızı gereken standart işler için bu sınıf değil, eklemli veya makaslı sınıflar önerilir.",
        maddeler: [
            {
                baslik: "Sırlama kabini arkasındaki kanal boşluğuna erişim",
                metin:
                    "Sırlama kabininin emiş kanalları, kabinin arkasında dar bir servis koridoru içinde ilerler ve bu koridorun genişliği çoğu zaman bir örümcek platformun paletli gövdesinden biraz fazla olacak şekilde tasarlanmıştır. Standart bir makaslı platform buraya giremez; örümcek sınıf, gövdesini koridor girişine sabitleyip bomunu kanal boyunca uzatarak filtre ve bağlantı noktalarına erişir.",
            },
            {
                baslik: "Fırın girişindeki alçak geçit sorunu",
                metin:
                    "Bazı tünel fırınların giriş bölümünde tavan yüksekliği, hattın diğer kısımlarına göre belirgin şekilde düşüktür; bu alçak geçitte çalışan bir makine hem dar hem alçak olmalıdır. Örümcek platformun katlanmış hâldeki taşıma yüksekliği, bu tip geçitlerden geçebilecek kadar küçültülebilir; bom açıldıktan sonra hedefe ulaşan uzunluk, gövde boyutunu aşan bir erişim sağlar.",
            },
            {
                baslik: "Zemin taşıma kapasitesi kısıtlı üretim holleri",
                metin:
                    "Eski üretim holünün bazı bölümlerinde zemin taşıma kapasitesi, ağır tekerlekli makineler için sınırlı olabilir; örümcek platformun paletli ve düşük nokta yükü dağıtan gövdesi, bu tip hassas zeminlerde tekerlekli sınıflara göre daha güvenli bir seçenektir. Zeminin taşıma durumu belirsizse, keşifte bu bilgiyi birlikte değerlendiririz.",
            },
            {
                baslik: "Merdivenle taşınabilen küçük gövde",
                metin:
                    "Bazı atölye içi hedefler, ana giriş kapısından değil, dar bir iç merdiven veya kapı boşluğundan geçilerek ulaşılan bir bölümdedir; örümcek platformun bazı modelleri parçalara ayrılıp bu tip dar geçişlerden elle taşınabilir, sonra hedef alanda yeniden monte edilir. Bu, standart bir makinenin hiçbir şekilde giremeyeceği bölümlere erişim sağlar.",
            },
            {
                baslik: "Elektrikli sessiz çalışma ve iç mekân uyumu",
                metin:
                    "Örümcek platformların büyük kısmı elektrikli veya akülü çalışır; bu, egzoz kısıtı olan kapalı sırlama ve fırın bölümlerinde zorunlu bir özelliktir. Ayrıca sessiz çalışma, aynı anda üretimin sürdüğü bir bölümde makinenin gürültüyle vardiyayı rahatsız etmemesini sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Örümcek platform ile diğer sınıfların hattaki iş bölümü",
                paragraflar: [
                    "Aşağıdaki tablo, seramik-çini üretim hattında hangi bölümde hangi makine sınıfının tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Hat bölümü", "Kısıt", "Tercih edilen sınıf", "Neden"],
                    satirlar: [
                        ["Sırlama kanal koridoru", "Dar, düşük tavan", "Örümcek", "Paletli gövde, uzayan bom"],
                        ["Fırın alçak giriş geçidi", "Alçak tavan", "Örümcek (katlanmış)", "Küçültülebilir taşıma boyu"],
                        ["Geniş üretim holü", "Metrekare hızı", "Eklemli/makaslı", "Hızlı konumlanma"],
                        ["Hassas eski zemin", "Taşıma kapasitesi", "Örümcek (paletli)", "Düşük nokta yükü"],
                        ["Dar iç merdivenli bölüm", "Fiziksel giriş sınırı", "Örümcek (parçalı)", "Elle taşınabilir gövde"],
                    ],
                },
            },
            {
                baslik: "Doğru sınıf kararının keşifte verilmesi",
                paragraflar: [
                    "Örümcek platform her dar alan için otomatik doğru cevap değildir; bazı dar koridorlar aslında kompakt bir makaslı sınıfla da geçilebilir ve bu durumda daha ekonomik bir seçenek sunarız. Kararı, koridor genişliği, tavan yüksekliği ve hedefin yerden yüksekliği birlikte belirler.",
                    "Bu üç ölçüyü tam bilmiyorsanız bile, hattın ilgili bölümünün birkaç fotoğrafını paylaşmanız, bize sahaya gelmeden yaklaşık bir sınıf kararı vermemize yardımcı olur; kesin karar iş günü sabahı sahada teyit edilir.",
                ],
            },
            {
                baslik: "Parçalı taşımanın iş süresine etkisi",
                paragraflar: [
                    "Örümcek platformun dar bir geçitten parçalara ayrılarak taşınması, standart bir makinenin kapıdan girip doğrudan çalışmaya başlamasına göre daha fazla kurulum süresi gerektirir; bu süre teklifte ayrı bir kalem olarak gösterilir, sonradan sürpriz çıkmaz.",
                    "Kurulum süresini kısaltmak için, taşıma güzergâhını ve montaj noktasını iş öncesi birlikte planlarız; bu planlama, sahada geçiş sırasında beklenmedik bir engelle karşılaşma riskini azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sırlama kabininin arkasındaki kanal koridoru çok dar, hangi makine gerekir?",
                cevap:
                    "Koridor genişliği standart bir makaslı platformun gövdesinden dar geldiğinde örümcek sınıf gerekir; bu makine gövdesini koridor girişine sabitleyip bomunu kanal boyunca uzatarak filtre ve bağlantı noktalarına erişir. Koridorun genişliğini net bilmiyorsanız, bir fotoğraf veya ölçüm paylaşmanız kararı hızlandırır.",
            },
            {
                soru: "Fırın giriş geçidimiz alçak, standart platform sığmıyor, çözüm var mı?",
                cevap:
                    "Var; örümcek platformun bazı modelleri katlandığında oldukça düşük bir taşıma yüksekliğine iner ve alçak geçitlerden geçebilir. Geçidin tam yüksekliğini ve genişliğini bildirirseniz, hangi modelin sığacağını sahaya gelmeden netleştiririz. Sığmayan bir durumda, parçalı taşıma seçeneğini değerlendiririz.",
            },
            {
                soru: "Eski üretim holümüzün zemini hassas, ağır makine zarar verir mi?",
                cevap:
                    "Verebilir, bu yüzden hassas zeminlerde tekerlekli ağır sınıflar yerine paletli örümcek platformu öneririz; bu gövde tipi nokta yükünü daha geniş bir alana dağıtır. Zeminin taşıma durumundan emin değilseniz, keşifte birlikte değerlendirir, gerekirse ek koruma önlemi (plaka, kaplama) öneririz.",
            },
            {
                soru: "Makine dar bir iç kapıdan geçmiyor, tamamen çalışamaz mı?",
                cevap:
                    "Bazı örümcek platform modelleri parçalara ayrılıp dar kapı veya merdivenlerden elle taşınabilir, sonra hedef alanda yeniden monte edilir. Bu, standart bir makinenin giremeyeceği bölümlere erişim sağlar ancak kurulum süresi normalden uzun sürer; bu süreyi teklifte ayrı gösteririz.",
            },
            {
                soru: "Kapalı sırlama bölümünde egzozlu makine kullanabilir misiniz?",
                cevap:
                    "Kullanmayız; kapalı ve havalandırması sınırlı sırlama-fırın bölümlerinde egzoz kısıtı nedeniyle elektrikli veya akülü örümcek platform zorunludur. Bu, hem işçi sağlığı hem üretim ortamının kalitesi açısından standart uygulamamızdır.",
            },
            {
                soru: "Örümcek platform mu yoksa kompakt makaslı mı, kararı nasıl veriyorsunuz?",
                cevap:
                    "Koridor genişliği, tavan yüksekliği ve hedefin yerden yüksekliği birlikte belirler; bazı dar koridorlar aslında kompakt makaslı sınıfla da geçilebilir ve bu daha ekonomiktir. Bu üç ölçüyü tam bilmiyorsanız, ilgili bölümün fotoğraflarını paylaşmanız yeterli; sahaya gelmeden yaklaşık bir karar veririz, kesinleştirme iş günü sabahı yapılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek platformun paletli gövde ve uzayan bom yapısı genel makine bilgisidir; seramik-çini üretim hattındaki dar geçit ve alçak tavan senaryoları kardeş dosyadaki (bölge sayfaları) hat tanımlarıyla tutarlıdır. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Çini ve Seramik Fabrikalarına Platform Nakliye ve Teslimat Hizmeti",
        giris:
            "Kütahya'daki çini ve seramik üretim tesislerinde bir platform kiralamanın ikinci yarısı, makinenin fabrika kapısından üretim hattının içine kadar sorunsuz ulaşmasıdır. Bu, şehir merkezindeki bir OSB parselinde basit bir kamyon indirmesi olabileceği gibi, dar bir yükleme rampasından hassas bir sırlama holüne geçiş de olabilir. Bu sayfa, teslimat sürecinin kendisini — araç seçimi, indirme noktası, fabrika içi son kilometre ve teslim alma prosedürü — çini-seramik sanayisine özgü koşullarla birlikte anlatır; makinenin sahadaki kullanımı diğer hizmet sayfalarımızın konusudur.",
        maddeler: [
            {
                baslik: "Yükleme rampası ve konteyner sahası çevresinde teslimat",
                metin:
                    "İhracat ağırlıklı çini fabrikalarının çoğunda yükleme rampası ve konteyner sahası, günün belirli saatlerinde yoğun bir trafiğe sahne olur; platform teslimatını bu saatlerin dışına planlamak, hem bizim aracımızın hem sevkiyat kamyonlarının birbirini beklemesini önler. Sevkiyat programınızı önceden bildirirseniz, teslimatı bu boşluğa göre kurarız.",
            },
            {
                baslik: "Hammadde giriş kapısından ayrı teslimat noktası",
                metin:
                    "Bazı büyük tesislerde hammadde girişi (kaolen, feldispat gibi malzemelerin boşaltıldığı kapı) ile mamul çıkış kapısı ayrı noktalardadır ve platform teslimatı genellikle üçüncü, daha sakin bir noktadan yapılır. Doğru kapıyı önceden netleştirmek, aracımızın fabrika içinde gereksiz dolaşmasını önler.",
            },
            {
                baslik: "Fabrika içi son kilometrenin planlanması",
                metin:
                    "Kamyondan indirilen makinenin, hedef bölüme (fırın çevresi, sırlama kabini, depo) kendi gücüyle mi yoksa refakatli mi ilerleyeceği, hattın o anki çalışma durumuna bağlıdır; üretim sürerken bu geçiş, çalışan personelin güvenliği gözetilerek yavaş ve refakatli yapılır. Bu son kilometre, teslimat süresinin görünmeyen ama önemli bir parçasıdır.",
            },
            {
                baslik: "OSB dışı küçük atölyelere teslimat",
                metin:
                    "Kütahya merkezindeki küçük çini atölyeleri genellikle şehir içi dar sokaklarda konumlanır; bu tip teslimatlarda araç boyutu ve park noktası önceden değerlendirilir, gerekirse daha küçük bir taşıma aracı tercih edilir. Atölyenizin çevresindeki sokak genişliğini bilmiyorsanız, adres bilgisiyle bunu önceden kontrol ederiz.",
            },
            {
                baslik: "Teslim alma ve iade sürecinin belgelenmesi",
                metin:
                    "Teslimat sırasında makinenin durumu, teslim alan yetkiliyle birlikte kısa bir kontrol listesiyle kayıt altına alınır; bu, hem bizim hem sizin tarafınızda iş bitiminde makinenin durumu hakkında bir referans oluşturur. İade teslimatında aynı kontrol tekrarlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Teslimat noktası tipine göre planlama",
                paragraflar: [
                    "Aşağıdaki tablo, çini-seramik sanayisindeki farklı teslimat noktası tiplerinde planlama önceliğini özetler.",
                ],
                tablo: {
                    basliklar: ["Teslimat noktası", "Baskın kısıt", "Planlama önceliği", "Not"],
                    satirlar: [
                        ["İhracat yükleme rampası", "Konteyner trafiği", "Sevkiyat dışı saat", "Program paylaşımı gerekir"],
                        ["Hammadde giriş kapısı", "Malzeme boşaltma trafiği", "Ayrı kapı tercih", "Üçüncü nokta önerilir"],
                        ["Üretim holü içi son kilometre", "Personel güvenliği", "Refakatli, yavaş", "Hat durumuna bağlı"],
                        ["Şehir içi küçük atölye", "Dar sokak", "Küçük araç, önceden kontrol", "Adres bazlı değerlendirme"],
                        ["OSB standart parsel", "Düşük", "Standart teslimat", "Ek planlama gerekmez"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat programının önceden paylaşılmasının değeri",
                paragraflar: [
                    "İhracat ağırlıklı tesislerde sevkiyat programı genellikle haftalık bir düzen izler; bu programı bize önceden ilettiğinizde, platform teslimatını sevkiyatın en sakin gününe veya saatine göre kurarız. Bu, hem sizin rampanızın hem bizim aracımızın gereksiz beklemesini önler.",
                    "Program paylaşımı olmadığında da teslimat yapılır, ancak o durumda gün içindeki en uygun saat sahada anlık belirlenir; bu, bazen küçük bir bekleme süresi doğurabilir.",
                ],
            },
            {
                baslik: "Küçük atölyelerde araç boyutunun önemi",
                paragraflar: [
                    "Kütahya merkezindeki dar sokaklı bölgelerde standart büyük bir taşıma aracı bazen atölyenin önüne kadar ulaşamaz; bu durumda makine, sokağın girebildiği bir noktaya kadar taşınıp son kısmı kısa bir yürüme mesafesiyle atölyeye ulaştırılır. Bu ek adım, teslimat süresini biraz uzatabilir ama önceden bilindiğinde plana dahil edilir.",
                    "Atölyenizin adresini paylaştığınızda, sokak genişliğini harita üzerinden önceden kontrol eder, gerekirse küçük araç seçeneğini teklife dahil ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İhracat sevkiyatımız sürekli, teslimat rampamızı bloke eder mi?",
                cevap:
                    "Bloke etmemesi için sevkiyat programınızı önceden almamız yeterli; teslimatı bu programın en sakin dilimine göre kurarız. Program paylaşılmazsa, gün içindeki uygun saat sahada anlık belirlenir ve bu bazen küçük bir bekleme doğurabilir. Düzenli sevkiyatınız varsa, bu bilgiyi ilk talepte iletmenizi öneririz.",
            },
            {
                soru: "Hammadde giriş kapımızdan mı yoksa başka bir kapıdan mı teslimat yapıyorsunuz?",
                cevap:
                    "Genellikle hammadde girişi dışında, daha sakin üçüncü bir noktayı tercih ederiz çünkü bu kapı malzeme boşaltma trafiğiyle meşguldür. Tesisinizde uygun bir kapı belirtmezseniz, adres ve genel yerleşim bilgisine göre en mantıklı noktayı önceden öneririz; iş günü sabahı bu nokta birlikte teyit edilir.",
            },
            {
                soru: "Makine hattın içine nasıl ulaşıyor, üretim durur mu?",
                cevap:
                    "Kamyondan indirilen makine, hedef bölüme kendi gücüyle veya refakatli olarak ilerler; üretim sürerken bu geçiş yavaş ve çalışan personelin güvenliği gözetilerek yapılır, genellikle üretimi durdurmaz. Hattın o anki yoğunluğuna göre bazen kısa bir bekleme gerekebilir; bu, iş günü sabahı vardiya sorumlusuyla koordine edilir.",
            },
            {
                soru: "Şehir içindeki küçük atölyemizin sokağı dar, teslimat yapılabilir mi?",
                cevap:
                    "Genellikle yapılabilir; adres bilgisini paylaştığınızda sokak genişliğini harita üzerinden önceden kontrol eder, gerekirse daha küçük bir taşıma aracı kullanırız. Aracın sokağa giremediği durumlarda makine uygun bir noktaya kadar taşınır, kalan kısa mesafe için ek bir adım planlanır; bu, teklife önceden dahil edilir.",
            },
            {
                soru: "Teslimat sırasında makinenin durumu nasıl kayıt altına alınıyor?",
                cevap:
                    "Teslim alan yetkiliyle birlikte kısa bir kontrol listesi doldurulur; bu, hem bizim hem sizin tarafınızda iş bitiminde makinenin durumu hakkında ortak bir referans oluşturur. İade teslimatında aynı kontrol tekrarlanır, böylece olası bir anlaşmazlık baştan önlenir.",
            },
            {
                soru: "OSB dışındaki bir konumda teslimat için ek ücret var mı?",
                cevap:
                    "Mesafeye bağlı bir nakliye payı olabilir; bu pay teklifte ayrı satır olarak gösterilir, sonradan eklenmez. Konumunuzu ilk talepte belirtirseniz, teklifte bu payı net görürsünüz ve varsa tur birleştirme fırsatlarını da (yakın bir başka işle aynı sevkiyat) birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İhracat ağırlıklı çini üretim tesislerinde yükleme rampası ve hammadde giriş kapısı ayrımı, sanayi tesislerinde genel bir lojistik uygulamadır. Tesis adı ve rakam kullanılmamıştır. Teslimat kontrol listesi firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Çini Hammaddesi ve Mamul Depoda Forklift ile İstifleme Kiralama",
        giris:
            "Bir çini veya seramik fabrikasının deposu, tek bir istifleme mantığıyla çalışmaz: bir tarafta torbalanmış kaolen ve feldispat gibi hammaddeler palet üzerinde istiflenirken, diğer tarafta kırılgan mamul ürünler özel dolgu malzemesiyle sarılmış kutular hâlinde ihracat sırasına konur. Bu iki istifleme türü hem yük tipi hem hassasiyet açısından birbirinden ayrılır. Bu sayfa, forklift ile istifleme hizmetimizin çini-seramik sanayisindeki bu iki yüzünü — hammadde deposu ve mamul/ihracat deposu — ayrı ayrı ele alır; platformla yapılan yükseklik erişimi diğer hizmet sayfalarımızın konusudur.",
        maddeler: [
            {
                baslik: "Torbalanmış hammadde depolarında standart istifleme",
                metin:
                    "Kaolen, feldispat ve benzeri hammaddelerin torbalı veya çuvallı hâlde depolandığı alanlarda forklift, palet üzerine düzenli istifleme yapar; bu iş, standart bir depo forklift işinden farklı değildir ama torbaların nemden korunması gereken alanlarda istifleme yüksekliği ve raf düzeni önceden belirlenir.",
            },
            {
                baslik: "Kırılgan mamul deposunda hassas istifleme",
                metin:
                    "Mamul çini ve seramik ürünlerin istiflendiği depoda, standart bir palet forkliftinin hızlı ve sert hareketi ürüne zarar verebilir; bu bölümde operatör, yavaş ve kontrollü kaldırma-indirme yapar, çatal genişliği ve yaklaşma açısı paletin altına dikkatli şekilde ayarlanır. Kırılgan yük deneyimi olan operatör tercih edilir.",
            },
            {
                baslik: "İhracat paketleme öncesi ara istifleme",
                metin:
                    "Konteynere yüklenmeden önce mamul ürünler, paketleme alanında geçici bir ara istifleme aşamasından geçer; bu aşamada forklift, paketleme akışına uygun bir sırayla paletleri taşır ve konteyner yükleme rampasına yaklaştırır. Sıralama, paketleme ekibiyle iş öncesi netleştirilir.",
            },
            {
                baslik: "Dar depo koridorlarında kompakt forklift kullanımı",
                metin:
                    "Eski veya küçük ölçekli atölye depolarında koridor genişliği standart forkliftler için dar olabilir; bu durumda daha kompakt gövdeli veya dar koridor forklift sınıfı tercih edilir. Koridor genişliğini önceden bilmek, sahaya uygun makineyle gitmemizi sağlar.",
            },
            {
                baslik: "Zemin ve raf yüksekliğine göre kapasite seçimi",
                metin:
                    "Depo rafının yüksekliği ve zeminin taşıma kapasitesi, forklift sınıfının kaldırma yüksekliği ve yük kapasitesini belirler; bu iki bilgi netleşmeden makine gönderilmesi, sahada uygunsuz bir sınıfla karşılaşma riski taşır. Raf yüksekliği ve tipik palet ağırlığı bilgisini keşifte veya telefonda alırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo bölümüne göre forklift ve istifleme yaklaşımı",
                paragraflar: [
                    "Aşağıdaki tablo, çini-seramik fabrikasının farklı depo bölümlerinde forklift kullanım yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["Depo bölümü", "Yük tipi", "Yaklaşım", "Operatör notu"],
                    satirlar: [
                        ["Hammadde deposu", "Torba/çuval, palet", "Standart istifleme", "Genel forklift yeterliliği"],
                        ["Mamul depo", "Kırılgan seramik/çini", "Yavaş, kontrollü", "Kırılgan yük deneyimi"],
                        ["İhracat ara istifleme", "Paketlenmiş mamul", "Akışa uygun sıralama", "Paketleme ekibiyle koordinasyon"],
                        ["Dar atölye deposu", "Karma", "Kompakt/dar koridor sınıfı", "Koridor ölçüsü önceden alınır"],
                        ["Yüksek raflı depo", "Palet", "Yüksek kaldırma kapasiteli", "Raf yüksekliği bilgisi gerekir"],
                    ],
                },
            },
            {
                baslik: "Kırılgan yükte hız yerine kontrolün önceliklendirilmesi",
                paragraflar: [
                    "Mamul çini deposunda forklift operatörünün önceliği hız değil kontroldür; bir paletin sert bir hareketle sarsılması, içindeki onlarca parçayı aynı anda etkileyebilir. Bu yüzden mamul depo işlerinde operatörümüz, standart bir depo işine göre daha yavaş ama daha güvenli bir tempo tutar.",
                    "Bu yaklaşımın maliyeti, iş süresinin biraz uzamasıdır; ancak bu, bir palet dolusu ürünün zarar görmesinin maliyetiyle karşılaştırıldığında ihmal edilebilir düzeydedir.",
                ],
            },
            {
                baslik: "Raf ve zemin bilgisinin önceden alınmasının faydası",
                paragraflar: [
                    "Depo rafının yüksekliği ve zeminin taşıma kapasitesi bilgisi olmadan gönderilen bir forklift, sahada ya yetersiz kaldırma yüksekliğiyle ya da zemin için fazla ağır bir sınıfla karşılaşabilir; bu, işin sahada yeniden planlanmasına yol açar. Bu bilgiyi telefonda veya fotoğrafla önceden almak, doğru sınıfı ilk seferde göndermemizi sağlar.",
                    "Raf yüksekliği tam ölçülmemişse bile, yaklaşık bir tahmin (örneğin kaç sıra palet) bize önemli bir fikir verir; kesinleştirme sahada yapılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mamul çini deposundaki istiflemede kırılma riski nasıl azaltılıyor?",
                cevap:
                    "Kırılgan yük deneyimi olan operatör, standart bir depo işine göre daha yavaş ve kontrollü çalışır; çatal genişliği ve yaklaşma açısı paletin altına dikkatli şekilde ayarlanır, sert kaldırma-indirme hareketinden kaçınılır. Bu yaklaşım iş süresini biraz uzatabilir ama ürün güvenliğini önceliklendirir.",
            },
            {
                soru: "Hammadde deposundaki torbaların istiflenmesi mamul depodan farklı mı?",
                cevap:
                    "Evet, torbalanmış hammadde (kaolen, feldispat gibi) istiflemesi standart bir depo işidir ve hız açısından mamul depoya göre daha az kısıtlıdır; öncelik nem korunması ve düzenli raf sıralamasıdır. Mamul depoda ise kırılganlık nedeniyle yavaş ve kontrollü bir tempo tutulur. İki iş farklı önceliklere sahiptir ve operatör buna göre yaklaşım değiştirir.",
            },
            {
                soru: "Depo koridorumuz dar, standart forklift geçebilir mi?",
                cevap:
                    "Geçemeyebilir; bu durumda kompakt gövdeli veya dar koridor forklift sınıfı öneririz. Koridor genişliğini önceden bildirirseniz, sahaya uygun sınıfla gideriz. Genişlik bilinmiyorsa, birkaç fotoğraf paylaşmanız kararı hızlandırır; kesinleştirme iş günü sabahı yapılır.",
            },
            {
                soru: "İhracat öncesi paketleme alanındaki istiflemeyi nasıl planlıyorsunuz?",
                cevap:
                    "Paketleme ekibinizle iş öncesi kısa bir koordinasyon yaparız; forklift, paketleme akışına uygun bir sırayla paletleri taşır ve konteyner yükleme rampasına yaklaştırır. Bu sıralama, paketleme akışını kesmeden ilerlemeyi sağlar ve konteyner sevkiyat saatlerinin dışına planlanır.",
            },
            {
                soru: "Raf yüksekliğimizi tam bilmiyoruz, doğru forklift sınıfını nasıl belirliyorsunuz?",
                cevap:
                    "Yaklaşık bir tahmin (örneğin kaç sıra palet olduğu) bize önemli bir fikir verir; bu bilgiyle sahaya uygun kaldırma yüksekliğine sahip bir sınıfla gideriz, kesin ölçüm sahada teyit edilir. Zeminin taşıma kapasitesi de belirsizse, keşifte birlikte değerlendiririz.",
            },
            {
                soru: "Operatörlü mü yoksa kendi operatörümüzle mi çalışabiliriz?",
                cevap:
                    "İkisi de mümkün; operatörlü kiralamada kırılgan yük deneyimi olan bir operatör görevlendiririz, kendi operatörünüzle çalışmak isterseniz makineyi teslim eder ve kısa bir saha bilgilendirmesi yaparız. Mamul depo gibi hassas alanlarda operatörlü seçeneği önermekle birlikte, kararı sizinle birlikte veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çini-seramik sanayisinde hammadde ve mamul depolarının farklı istifleme hassasiyeti genel sektör bilgisidir; tesis adı ve rakam kullanılmamıştır. Operatör yaklaşımı ve koordinasyon süreci firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Seramik Fabrikası Dış Cephesinde ve Yüksek Holde Eklemli Platform Kiralama",
        giris:
            "Bir seramik fabrikasının en yüksek noktaları genellikle üretim hattının içinde değil, dışındadır: tünel fırının baca gövdesi, üretim holünün dış cephesi, çatı üstü havalandırma bacaları ve yükleme rampasının üzerindeki sundurma çatısı gibi. Bu noktalara ulaşmak için gereken erişim, hattın içindeki dar geçitlerden farklı bir makine sınıfı ister — geniş açılı, engelli hedeflere ulaşabilen eklemli (boom) platform. Bu sayfa, eklemli platformun Kütahya'daki çini ve seramik fabrikalarının dış cephe ve yüksek hol işlerindeki kullanımını anlatır; hat içindeki dar alan işleri örümcek platform sayfamızın, geniş hol içi düz erişim işleri ise iç mekân sayfamızın konusudur.",
        maddeler: [
            {
                baslik: "Baca gövdesi ve çatı üstü havalandırma erişimi",
                metin:
                    "Tünel fırının baca gövdesi ve üretim holünün çatı üstündeki havalandırma bacaları, düz bir teleskopik bomla değil, engelleri aşabilen eklemli bomla daha güvenli erişilir; boru hattı, kablo tavası veya çatı çıkıntısı gibi engellerin etrafından dolaşarak hedefe ulaşmak eklemli sınıfın güçlü olduğu bir alandır.",
            },
            {
                baslik: "Dış cephe boya ve tadilat işleri",
                metin:
                    "Üretim holünün dış cephesindeki boya yenileme, panel değişimi veya tabela montajı gibi işlerde eklemli platform, cepheye paralel hareket ederek geniş bir alanı tek konumdan kapsayabilir; bu, sabit bir iskeleye göre hem daha hızlı hem daha esnektir.",
            },
            {
                baslik: "Yükleme rampası sundurma çatısı bakımı",
                metin:
                    "İhracat yükleme rampasının üzerindeki sundurma çatısının aydınlatma ve oluk bakımı, rampa altındaki trafik devam ederken yapılmak zorunda kalabilir; eklemli platform bu tip yarı açık alanlarda, konteyner geçiş güzergâhının dışında konumlanarak çalışabilir.",
            },
            {
                baslik: "Engebeli dış saha zemininde erişim",
                metin:
                    "Fabrika dışındaki açık sahalar bazen düzensiz veya eğimli bir zemine sahiptir; arazi tipi lastikli eklemli platform modelleri, bu tip zeminlerde standart iç mekân modellerine göre daha güvenli çalışır. Zeminin durumu keşifte değerlendirilerek doğru model seçilir.",
            },
            {
                baslik: "İç mekân ile dış mekân eklemli sınıfların farkı",
                metin:
                    "Kapalı üretim holü içinde kullanılan eklemli platformlar genellikle elektrikli ve dar gövdelidir; dış cephede kullanılan modeller ise daha geniş erişim yüksekliğine ve bazen dizel veya hibrit güç kaynağına sahip olabilir. Hangi modelin gerektiği, işin iç mi dış mekânda mı olduğuna göre baştan netleşir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dış cephe ve yüksek hol hedeflerine göre eklemli sınıf",
                paragraflar: [
                    "Aşağıdaki tablo, seramik fabrikasının dış cephe ve yüksek hedeflerinde eklemli platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Hedef", "Engel tipi", "Model tercihi", "Zemin"],
                    satirlar: [
                        ["Baca gövdesi", "Boru, kablo tavası", "Engel aşan eklemli", "Sabit zemin"],
                        ["Dış cephe boya/panel", "Düşük", "Standart eklemli", "Beton/asfalt"],
                        ["Yükleme rampası sundurma", "Trafik güzergâhı", "Eklemli, yan konumlanan", "Rampa çevresi"],
                        ["Çatı üstü havalandırma", "Çatı çıkıntısı", "Engel aşan eklemli", "Çatı erişim noktası"],
                        ["Engebeli dış saha", "Zemin düzensizliği", "Arazi tipi eklemli", "Toprak/dolgu"],
                    ],
                },
            },
            {
                baslik: "Engel aşan bom hareketinin pratik faydası",
                paragraflar: [
                    "Baca gövdesi veya çatı üstü hedeflerde çoğu zaman düz bir yol yoktur; boru hattı, destek kirişi veya çatı çıkıntısı gibi engeller araya girer. Eklemli platformun bomu bu engellerin altından veya üstünden dolaşarak hedefe ulaşabilir, bu da düz teleskopik bomun ulaşamayacağı noktalara erişim sağlar.",
                    "Bu esneklik, iş öncesi engel haritasının net olmasıyla daha verimli kullanılır; hedefin çevresindeki engelleri fotoğrafla paylaşmanız, doğru model ve bom hareket planını önceden kurmamıza yardımcı olur.",
                ],
            },
            {
                baslik: "İç-dış mekân model karışıklığının önlenmesi",
                paragraflar: [
                    "Bazı işlerde hem iç mekân (üretim holü içi bir kısım) hem dış mekân (cephe) hedefi aynı iş kapsamında olabilir; bu durumda iki farklı model gerekebilir çünkü iç mekân elektrikli modeli dışarıda zemin ve rüzgar koşulları için yetersiz kalabilir, dış mekân modeli ise kapalı alanda egzoz kısıtına takılabilir.",
                    "İş kapsamınızı hem iç hem dış hedef içeriyorsa, bunu baştan belirtmeniz, doğru iki modeli veya tek bir uygun modeli önceden planlamamızı sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Baca gövdemizin çevresinde boru hattı var, platform bunun etrafından geçebilir mi?",
                cevap:
                    "Geçebilir; eklemli platformun bomu engellerin altından veya üstünden dolaşarak hedefe ulaşabilir, bu düz teleskopik bomdan farklı bir avantajdır. Boru hattının ve diğer engellerin konumunu fotoğrafla paylaşırsanız, doğru model ve bom hareket planını sahaya gelmeden netleştiririz.",
            },
            {
                soru: "Yükleme rampamızın üzerindeki sundurma çatısında konteyner trafiği sürerken çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz; eklemli platform, konteyner geçiş güzergâhının dışında konumlanarak yan taraftan çalışır. Yine de sevkiyat saatlerinizin dışına planlamanızı öneririz çünkü bu, hem daha güvenli hem daha hızlı bir çalışma sağlar. Sevkiyat programınızı önceden paylaşırsanız buna göre kurarız.",
            },
            {
                soru: "Fabrika dışındaki sahamız düzensiz, standart eklemli platform çalışabilir mi?",
                cevap:
                    "Zemin düzensizse arazi tipi lastikli eklemli platform modelini öneririz; standart iç mekân modelleri bu tip zeminlerde güvenli olmayabilir. Sahanın zemin durumunu keşifte veya fotoğrafla değerlendirir, doğru modeli önceden belirleriz.",
            },
            {
                soru: "Hem üretim holü içinde hem dışarıda cephede iş var, tek makineyle mi hallediyorsunuz?",
                cevap:
                    "Genellikle hayır; iç mekân elektrikli modeli dış koşullar için yetersiz kalabilir, dış mekân modeli ise kapalı alanda egzoz kısıtına takılabilir. İş kapsamınız hem iç hem dış hedef içeriyorsa bunu baştan belirtmeniz, doğru iki modeli veya uygun tek modeli önceden planlamamızı sağlar.",
            },
            {
                soru: "Dış cephe boyama işimiz geniş bir alanı kapsıyor, iskeleye göre avantajı ne?",
                cevap:
                    "Eklemli platform, cepheye paralel hareket ederek geniş bir alanı tek konumdan kapsayabilir; bu, sabit bir iskele kurmaya göre hem daha hızlı kurulur hem de iş bittiğinde hızla sökülür. Cephenin toplam uzunluğunu ve yüksekliğini paylaşırsanız, kaç konumlama gerektiğini önceden tahmin ederiz.",
            },
            {
                soru: "Çatı üstü havalandırma bacalarına erişim için hangi model gerekiyor?",
                cevap:
                    "Çatı çıkıntısı gibi engeller varsa engel aşan eklemli bir model gerekir; çatının erişim noktası ve çevresindeki engelleri fotoğrafla paylaşırsanız, doğru modeli sahaya gelmeden belirleriz. Çatı erişiminde ayrıca çatı yükü ve düşme önleme prosedürünüz varsa, bunu da önceden bildirmeniz gerekir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun engel aşan bom hareketi ve iç-dış mekân model farkı genel makine bilgisidir; seramik fabrikası baca-cephe-rampa senaryoları kardeş dosyadaki hat tanımlarıyla tutarlıdır. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Seramik ve Çini Fabrikası İçinde Fırın Hattı, Kurutucu ve Toz Kontrollü Alanlarda Platform Kiralama",
        giris:
            "Kütahya'daki bir çini veya seramik fabrikasının içine girdiğinizde, karşınıza tek bir 'üretim holü' değil, birbirine bağlı ama çok farklı koşullara sahip birkaç ayrı bölüm çıkar: hammaddenin preslendiği toz dolu bölüm, ürünün kurutulduğu nem hassasiyeti yüksek tünel, sırlamanın yapıldığı kimyasal buharlı kabin ve son olarak fırının bulunduğu, kalıntı ısının hâlâ hissedildiği bölüm. Bu sayfa, iç mekân platform kiralamamızın tam olarak bu dört bölümde nasıl şekillendiğini — hangi makine sınıfının seçildiğini, hangi zamanlamanın gözetildiğini ve hangi güvenlik önleminin alındığını — tek tek ve ayrıntılı olarak anlatır. Bu, sitemizin en kapsamlı hizmet sayfasıdır çünkü fabrika içi erişim, çini-seramik sanayisinde platform kiralamanın çekirdek talebidir; diğer hizmet sayfalarımız (dış cephe, hammadde deposu, sevkiyat) bu çekirdeğin etrafındaki tamamlayıcı hizmetlerdir.",
        maddeler: [
            {
                baslik: "Presleme bölümünde toz kontrolü ve makine hazırlığı",
                metin:
                    "Kuru presleme yöntemiyle çalışan bölümlerde havada asılı kalan ince toz, hem görünürlüğü azaltır hem makinenin hareketli parçalarına (hidrolik silindir contaları, elektrik bağlantıları) zamanla zarar verir. Bu bölümde çalışan platform, iş öncesi toz koruma önlemleriyle (bağlantı noktalarının örtülmesi, filtre kontrolü) hazırlanır ve iş sonrası temizlik standart bir prosedürdür; uzun süreli işlerde bu kontrol aralığı sıklaştırılır.",
            },
            {
                baslik: "Kurutma tünelinde nem-sıcaklık dengesini bozmadan çalışma",
                metin:
                    "Kurutma tünelinin iç ortamı, ham ürünün çatlamadan kurumasını sağlayacak şekilde hassas bir nem-sıcaklık dengesinde tutulur; tünelin kapağını uzun süre açık bırakmak bu dengeyi bozup ürün kaybına yol açabilir. Bu yüzden tünel üstü işlerde ekipman ve parça hazırlığı işe başlamadan tamamlanır, kapak açık kaldığı süre elimizden geldiğince kısaltılır ve iş mümkünse tünelin boş olduğu bir üretim arası penceresine planlanır.",
            },
            {
                baslik: "Sırlama kabininde kimyasal buhar ve emiş sistemi hassasiyeti",
                metin:
                    "Sırlama kabininin havalandırma ve emiş sistemi, sırlama sırasında oluşan tozu ve buharı işçiye ulaşmadan uzaklaştırır; bu sistemin filtre değişimi ve kanal temizliği, kabin içindeki kimyasal kalıntıya karşı uygun kişisel koruyucu donanımla yapılır. Kabin genellikle dar ve düşük tavanlı olduğu için kompakt gövdeli bir makine tercih edilir; sır kalıntısının kanal iç yüzeyinde biriktiği göz önünde bulundurularak bakım aralığı standart bir havalandırma bakımından daha sık tutulur.",
            },
            {
                baslik: "Tünel fırın çevresinde kalıntı ısı ve soğuma süresi",
                metin:
                    "Tünel fırının çekme fanı, baca gövdesi ve yalıtım paneli bakımı, fırının söndürülmesini ve yüzeylerin dokunulabilir bir sıcaklığa düşmesini gerektirir; bu soğuma saatler sürebileceği için bakım işi genellikle fırının zaten planlı olarak durduğu revizyon durağına denk getirilir. Fırın üstünde çalışan operatör, ısıya dayanıklı kişisel koruyucu donanımla desteklenir ve iş, standart bir çatı işinden farklı bir hazırlık süreciyle başlar.",
            },
            {
                baslik: "Bölümler arası geçişte tek iş gününde çoklu hedef",
                metin:
                    "Büyük ölçekli tesislerde presleme, kurutma, sırlama ve fırın bölümleri genellikle aynı üretim holü içinde art arda sıralanır; bu, tek bir iş gününde birden fazla bölümde art arda çalışmayı mümkün kılar. Ancak her bölümün kendi zamanlama kısıtı (pres durağı, tünel boşluğu, revizyon durağı) farklı olduğu için, günün iş sırası bu kısıtlara göre önceden planlanır — rastgele bir sırayla ilerlemek gereksiz bekleme süresine yol açar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Fabrika içi dört bölümün karşılaştırmalı özeti",
                paragraflar: [
                    "Aşağıdaki tablo, çini-seramik fabrikası içindeki dört ana bölümün platform kiralama açısından farklarını özetler; bu tablo, keşif öncesi hangi bölümde hangi hazırlığın gerektiğini hızlıca görmek için kullanılabilir.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Baskın kısıt", "Zamanlama", "Makine ve donanım notu"],
                    satirlar: [
                        ["Presleme", "İnce toz", "Pres durağı + bekleme", "Toz korumalı hazırlık"],
                        ["Kurutma tüneli", "Nem-sıcaklık dengesi", "Tünel boşken, hızlı iş", "Önceden hazırlık şart"],
                        ["Sırlama kabini", "Kimyasal buhar, dar tavan", "Kabin durağı", "Kompakt gövde, KKD"],
                        ["Tünel fırın", "Kalıntı ısı", "Revizyon durağı", "Isıya dayanıklı KKD"],
                        ["Bölümler arası geçiş", "Farklı kısıtların çakışması", "Önceden sıralanmış plan", "Tek günde çoklu hedef"],
                    ],
                },
            },
            {
                baslik: "Revizyon durağının iş planının merkezine alınması",
                paragraflar: [
                    "Fırın ve büyük ölçekli sırlama hatlarında bakım işi, hattın vardiya geçişi gibi kısa aralarla değil, tesisin kendi planlı revizyon durağıyla senkronize edilir; bu durak genellikle haftalık veya aylık bir program dahilinde önceden bellidir. Bizim iş planımız bu durağı merkeze alır — durak başladığında makine ve operatör sahada hazır bulunur, gerekli parça ve ekipman önceden hazırlanmış olur.",
                    "Bu senkronizasyonun kurulması için revizyon durağı tarihinin bize mümkün olduğunca erken (idealde birkaç hafta önceden) bildirilmesi gerekir; erken bilgi, hem doğru makinenin hem doğru operatörün o tarihte müsait olmasını garanti eder.",
                ],
            },
            {
                baslik: "Toz ve kimyasal ortamda makine bakım disiplini",
                paragraflar: [
                    "Presleme ve sırlama bölümlerinde çalışan makinelerin hidrolik ve elektrik sistemleri, standart bir iç mekân ortamına göre daha hızlı kirlenir; toz ve kimyasal kalıntı, bağlantı noktalarında ve contalarda birikerek bakım aralığını etkiler. Bu yüzden bu bölümlerde uzun süreli kiralamalarda makinenin kendi bakım kontrolü, standart programa göre sıklaştırılır.",
                    "Bu sıklaştırılmış bakımın maliyeti, teklifte önceden gösterilir; sahada sonradan çıkan bir ek kalem olarak sunulmaz. Uzun süreli bir kiralama planlıyorsanız, bu bakım programını baştan birlikte kurmanızı öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Presleme bölümündeki toz makinenize zarar vermez mi, nasıl önlem alıyorsunuz?",
                cevap:
                    "Zarar verebilir, bu yüzden iş öncesi bağlantı noktalarını örter, filtre kontrolünü yapar ve iş sonrası standart bir temizlik prosedürü uygularız. Uzun süreli işlerde bu kontrol aralığını sıklaştırırız; bu sıklaştırmanın maliyeti teklifte önceden gösterilir, sahada sonradan eklenmez. Presleme bölümünün toz yoğunluğu tesisten tesise değişebileceği için, keşifte bu bölümü görüp hazırlığı ona göre kurarız.",
            },
            {
                soru: "Kurutma tünelimizin kapağını ne kadar süre açık tutabiliriz?",
                cevap:
                    "Mümkün olduğunca kısa tutulmalı çünkü tünelin iç nem-sıcaklık dengesi bozulursa üründe çatlak riski oluşur. İş öncesi ekipman ve parça hazırlığını tamamlayıp kapağı açtığımız andan itibaren hızlıca çalışırız. Tünelin boş olduğu bir üretim arası varsa, işi bu pencereye planlayarak kapak açıklığı süresini daha da kısaltırız.",
            },
            {
                soru: "Sırlama kabini içinde çalışırken hangi koruyucu donanım kullanılıyor?",
                cevap:
                    "Kabin içindeki kimyasal kalıntıya karşı uygun kişisel koruyucu donanım (solunum koruması, eldiven gibi) operatörümüz tarafından kullanılır; kabin genellikle dar ve düşük tavanlı olduğu için kompakt gövdeli bir makine tercih ederiz. Tesisinizin kendi güvenlik prosedürü varsa (örneğin belirli bir bekleme süresi sonrası girme kuralı), bunu bize önceden iletmeniz yeterli.",
            },
            {
                soru: "Tünel fırının üstünde çalışmak için ne kadar beklemeniz gerekiyor?",
                cevap:
                    "Fırının söndürülmesinden sonra yüzeylerin dokunulabilir bir sıcaklığa inmesi saatler sürebilir; bu yüzden fırın üstü işleri genellikle tesisin planlı revizyon durağına denk getiririz. Fırının söndürülme zamanını ve revizyon durağı tarihini önceden bildirirseniz, işi bu pencereye göre kurar, ekipman hazırlığını durak başlamadan tamamlarız.",
            },
            {
                soru: "Aynı gün içinde presleme, kurutma, sırlama ve fırın bölümlerinin hepsinde çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, ancak her bölümün kendi zamanlama kısıtı farklı olduğu için günün iş sırasını önceden planlarız; örneğin pres durağının olduğu saat ile fırın revizyon durağının olduğu saat aynı güne denk gelmeyebilir. İş listenizi ve her bölümün müsaitlik penceresini paylaşırsanız, günü bu kısıtlara göre sıralı bir plana bağlarız.",
            },
            {
                soru: "Fabrika içi işlerde operatörünüz üretim güvenlik kurallarımıza nasıl uyum sağlıyor?",
                cevap:
                    "Operatörlerimiz genel makine yeterliliğine sahiptir ve presleme-kurutma-sırlama-fırın gibi bölümlere özgü riskleri (toz, nem hassasiyeti, kimyasal buhar, kalıntı ısı) keşif ve iş öncesi brifingle öğrenir. Tesisinize özgü bir güvenlik prosedürünüz varsa (örneğin belirli bir bölgede refakatçi zorunluluğu), bunu bize önceden iletmeniz yeterli; operatörümüz sahada buna uyar ve gerekirse vardiya sorumlunuzla iş başında teyit eder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Seramik üretiminde presleme, kurutma tüneli, sırlama kabini ve tünel fırın aşamalarının genel işleyişi kamuya açık teknik bilgidir; tesis adı ve rakam kullanılmamıştır. Revizyon durağına göre planlama ve sıklaştırılmış bakım kontrolü firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Seramik Fabrikası Genişletme ve Yeni Üretim Holü Çelik Konstrüksiyon Montajında Platform Kiralama",
        giris:
            "Kütahya'daki seramik ve çini üreticilerinin bir kısmı, üretim kapasitesini artırmak için mevcut tesisin yanına yeni bir üretim holü ekler veya eski bir çatı sistemini yeniler; bu tip genişletme işleri, günlük üretim bakımından farklı olarak çelik konstrüksiyon montajı, kiriş kaynağı ve panel kaplama gibi inşaat aşaması işleri gerektirir. Bu sayfa, çelik konstrüksiyon montaj platformu hizmetimizin bu genişletme ve yeni yapı senaryolarındaki kullanımını anlatır; mevcut ve çalışır durumdaki üretim hattı içi bakım işleri iç mekân sayfamızın konusudur.",
        maddeler: [
            {
                baslik: "Yeni üretim holü çatı kirişi montajı",
                metin:
                    "Yeni bir üretim holü inşaatında çatı kirişlerinin montajı, yerden yüksek bir noktada kaynak ve cıvatalama gerektirir; bu aşamada platform, montaj ekibinin kirişe güvenli ve kararlı bir çalışma yüzeyinden ulaşmasını sağlar. İnşaat aşamasında zemin henüz tamamlanmamış olabileceği için, makine seçiminde zeminin o anki durumu (dolgu, sıkıştırılmamış toprak) dikkate alınır.",
            },
            {
                baslik: "Mevcut tesise bitişik genişletmede erişim kısıtı",
                metin:
                    "Mevcut ve çalışır durumdaki bir üretim holünün yanına yapılan genişletmede, inşaat sahası ile üretim hattı arasındaki sınır net çizilmelidir; platformun üretim tarafına taşmaması, hem güvenlik hem üretim sürekliliği açısından önemlidir. Bu sınır, iş öncesi tesis yönetimiyle birlikte belirlenir.",
            },
            {
                baslik: "Panel kaplama ve cephe montajında yatay hareket",
                metin:
                    "Çatı ve cephe panellerinin montajı, kirişler arasında yatay olarak ilerleyen bir çalışma gerektirir; eklemli veya makaslı platform, bu yatay hareketi sağlayarak montaj ekibinin panel sırasını takip etmesine imkân verir. Panel montaj sırası önceden planlandığında, platformun konumlanma sayısı azalır.",
            },
            {
                baslik: "İnşaat aşamasında malzeme kaldırma desteği",
                metin:
                    "Çelik konstrüksiyon montajında bazı işler, montaj ekibinin kendisini yükseğe taşımasının yanı sıra küçük malzeme ve ekipmanın da yükseğe taşınmasını gerektirir; platformun sepetindeki taşıma kapasitesi, bu tip malzeme taşıma ihtiyacını da karşılayabilir. Kapasiteyi aşan ağır malzemeler için ayrı bir vinç çözümü değerlendirilir.",
            },
            {
                baslik: "İnşaat ve üretim takviminin birlikte yönetilmesi",
                metin:
                    "Genişletme inşaatı sürerken mevcut üretim hattı genellikle çalışmaya devam eder; bu yüzden platform işlerinin zamanlaması, hem inşaat ekibinin takvimine hem üretim hattının kısıtlarına (gürültü, toz taşması) göre birlikte kurulur. İki takvimin çakıştığı noktalarda öncelik, tesis yönetimiyle birlikte belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Genişletme inşaatı aşamalarına göre platform kullanımı",
                paragraflar: [
                    "Aşağıdaki tablo, seramik fabrikası genişletme inşaatının farklı aşamalarında platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["İnşaat aşaması", "Tipik iş", "Zemin durumu", "Makine notu"],
                    satirlar: [
                        ["Çatı kirişi montajı", "Kaynak, cıvatalama", "Sıkıştırılmamış olabilir", "Arazi tipi tercih"],
                        ["Panel kaplama", "Yatay ilerleme", "Kısmen tamamlanmış", "Eklemli/makaslı"],
                        ["Cephe montajı", "Dikey-yatay hareket", "Genellikle tamamlanmış", "Standart"],
                        ["Malzeme taşıma desteği", "Küçük parça taşıma", "Değişken", "Sepet kapasitesine bağlı"],
                        ["Mevcut tesise bitişik iş", "Sınır içi çalışma", "Karma", "Üretim tarafına taşmama"],
                    ],
                },
            },
            {
                baslik: "İnşaat sahası zemininin makine seçimine etkisi",
                paragraflar: [
                    "Yeni bir üretim holü inşaatında zemin, projenin ilerleme aşamasına göre değişkenlik gösterir; temel atıldıktan sonra ama beton dökülmeden önceki dönemde zemin genellikle sıkıştırılmamış dolgu veya toprak hâlindedir. Bu dönemde çalışan platform, standart iç mekân modeline göre arazi tipi lastikli bir modelle daha güvenli çalışır.",
                    "Zeminin hangi aşamada olduğunu iş öncesi netleştirmek, doğru modeli önceden belirlememizi sağlar; inşaat takviminizin hangi haftasında platform işine ihtiyaç duyacağınızı bilmek bu kararı kolaylaştırır.",
                ],
            },
            {
                baslik: "Mevcut üretimi kesintiye uğratmadan genişletme",
                paragraflar: [
                    "Mevcut tesise bitişik bir genişletmede, inşaat sahası ile üretim hattı arasındaki fiziksel sınırı net tutmak, hem iş güvenliği hem üretim sürekliliği için kritiktir; platform operatörümüz bu sınırı bilir ve üretim tarafına geçmez. Gürültü veya toz taşıması riski olan işler, mümkünse üretimin daha sakin olduğu saatlere planlanır.",
                    "Bu koordinasyonun kurulması için inşaat sahası planını ve üretim hattının sınırlarını gösteren bir kroki veya fotoğraf paylaşmanız yeterli; bu bilgi, iş öncesi net bir sınır çizmemize yardımcı olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni üretim holümüzün inşaatı sürüyor, zemin henüz tamamlanmadı, çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz; inşaat sahasının zemini genellikle sıkıştırılmamış dolgu veya toprak hâlindedir, bu dönemde arazi tipi lastikli bir platform modeli öneririz. Zeminin hangi inşaat aşamasında olduğunu (temel sonrası, beton öncesi gibi) bildirirseniz, doğru modeli sahaya gelmeden belirleriz.",
            },
            {
                soru: "Genişletme mevcut fabrikamıza bitişik, üretimimiz durmadan çalışabilir misiniz?",
                cevap:
                    "Genellikle evet; inşaat sahası ile üretim hattı arasındaki sınırı iş öncesi net çizeriz ve operatörümüz bu sınıra uyar. Gürültü veya toz taşıması riski olan işleri, üretimin daha sakin olduğu saatlere planlamayı öneririz. İnşaat sahası planını veya bir kroki paylaşırsanız, sınırı önceden netleştiririz.",
            },
            {
                soru: "Panel montajında platform hangi sırayla ilerliyor?",
                cevap:
                    "Montaj ekibinizin panel sırasını takip ederek yatay ilerleriz; panel montaj sırası önceden planlandığında platformun konumlanma sayısı azalır ve iş daha hızlı ilerler. Montaj planınızı paylaşırsanız, platform hareketini bu plana göre önceden kurarız.",
            },
            {
                soru: "Küçük malzeme ve ekipmanı yukarı taşımamıza yardımcı olabilir misiniz?",
                cevap:
                    "Sepet taşıma kapasitesi dahilinde evet; küçük parça ve ekipmanı montaj ekibinizle birlikte yukarı taşıyabiliriz. Kapasiteyi aşan ağır malzemeler için ayrı bir vinç çözümü değerlendirmenizi öneririz; malzeme ağırlığını önceden bildirirseniz uygun çözümü birlikte belirleriz.",
            },
            {
                soru: "İnşaat takviminiz ile üretim takvimimiz çakışırsa öncelik nasıl belirleniyor?",
                cevap:
                    "Bu durumda öncelik, tesis yönetiminizle birlikte belirlenir; genellikle üretim hattının kısıtları (gürültü, toz) önceliklendirilir ve inşaat işleri buna uygun saatlere kaydırılır. İki takvimi önceden bize iletirseniz, çakışan noktaları erken tespit edip bir plan öneririz.",
            },
            {
                soru: "Çatı kirişi montajında kaynak işi yaparken güvenlik önlemi nasıl alınıyor?",
                cevap:
                    "Kaynak işi sırasında platform, kararlı bir çalışma yüzeyi sağlar ve operatörümüz yüksekte kaynak işine uygun güvenlik ekipmanıyla çalışır; kıvılcım riski olan alanlarda çevredeki yanıcı malzemelerin uzaklaştırılması montaj ekibinizin sorumluluğundadır ve bunu iş öncesi birlikte kontrol ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sanayi tesisi genişletme inşaatında çelik konstrüksiyon montaj süreçleri (kiriş, panel, cephe) genel inşaat sektörü bilgisidir; tesis adı ve rakam kullanılmamıştır. Mevcut üretimle koordinasyon yaklaşımı firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Kütahya'da Hammadde Silosu ve Tarımsal Silo Sahalarında Platform Kiralama",
        giris:
            "Kütahya'da 'silo' denince iki farklı sektör akla gelir: bir yanda çini ve seramik üretiminde kullanılan kaolen, feldispat gibi hammaddelerin depolandığı sanayi silosu, diğer yanda ilin tarım ağırlıklı ilçelerindeki hububat deposu ve silosu. Bu iki silo tipi farklı sektörlere ait olsa da, platform kiralama açısından benzer bir erişim sorunu paylaşır: dikey yapı, elevatör bağlantısı ve bant köprüsü gibi hedeflere düz uzanan bir bomla ulaşmak. Bu sayfa, her iki silo tipini de ele alır ve aralarındaki farkı netleştirir.",
        maddeler: [
            {
                baslik: "Hammadde silosunda kaolen-feldispat toz kontrolü",
                metin:
                    "Çini ve seramik hammaddesinin depolandığı silolarda ince toz, silo çevresinde ve elevatör bağlantı noktalarında birikir; bu bölgede çalışan platform, toz koruma önlemleriyle hazırlanır ve iş sonrası temizlik standart prosedürdür. Silonun dolu ya da boş olması, çalışma güvenliği açısından fark yaratmaz ama dolu siloda titreşim hassasiyeti biraz daha önceliklidir.",
            },
            {
                baslik: "Tarımsal hububat silosunda mevsimsel yoğunluk",
                metin:
                    "Tarımsal silolarda bakım ihtiyacı, hasat ve depolama döneminin dışına planlandığında hem daha ucuz hem daha hızlı karşılanır; bu dönemlerde silo boş, çalışma penceresi geniştir. Hasat döneminde silo doluyken çalışmak gerekirse, boşaltma-doldurma trafiğinin dışına bir zaman dilimi belirlenir.",
            },
            {
                baslik: "Elevatör ve bant köprüsü erişiminde bom seçimi",
                metin:
                    "Her iki silo tipinde de elevatör ve bant köprüsü, önü açık dikey yapılar olduğu için düz uzanan teleskopik bom genellikle en hızlı çözümdür; ancak çevrede boru hattı veya başka bir bant köprüsü varsa engel aşan eklemli sınıf gerekebilir. Silonun çevre fotoğrafı, sınıf kararını sahaya gelmeden vermemizi sağlar.",
            },
            {
                baslik: "Açık saha zemininde arazi tipi makine ihtiyacı",
                metin:
                    "Her iki silo tipinin de bulunduğu açık sahalar genellikle toprak veya dolgu zemine sahiptir; bu zeminlerde arazi tipi lastikli makineler tercih edilir ve park noktası önceden belirlenir. Yağış sonrası yumuşayan zeminlerde park noktası değiştirilir veya yük dağıtım plakası kullanılır.",
            },
            {
                baslik: "İki sektörün birbirinden ayrı önceliklendirilmesi",
                metin:
                    "Hammadde silosundaki bir arıza, merkezdeki çini üretim zincirini geriye doğru etkileyebileceği için standart işlere göre daha yüksek öncelik alır; tarımsal silolardaki bakım ise genellikle acil olmayan, sezon dışına planlanabilir bir iştir. Talep sırasında hangi sektöre ait olduğunuzu belirtmeniz, doğru önceliklendirmeyi baştan kurar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki silo tipinin karşılaştırmalı özeti",
                paragraflar: [
                    "Aşağıdaki tablo, hammadde silosu ile tarımsal silonun platform kiralama açısından farklarını özetler.",
                ],
                tablo: {
                    basliklar: ["Silo tipi", "Baskın kısıt", "Zamanlama", "Öncelik"],
                    satirlar: [
                        ["Çini hammaddesi silosu (kaolen/feldispat)", "İnce toz", "Esnek, üretim zincirine bağlı", "Yüksek (zincir riski)"],
                        ["Tarımsal hububat silosu", "Mevsimsel doluluk", "Hasat dışı dönem", "Standart"],
                        ["Elevatör/bant köprüsü (her iki tip)", "Dikey erişim, engel", "Değişken", "Standart"],
                        ["Açık saha zemini (her iki tip)", "Toprak/dolgu", "Zemin durumuna göre", "Standart"],
                        ["Acil arıza (hammadde tarafı)", "Üretim zinciri riski", "Öncelikli", "Yüksek"],
                    ],
                },
            },
            {
                baslik: "Hammadde zincirindeki aksamanın önceliklendirilmesi",
                paragraflar: [
                    "Kaolen-feldispat gibi hammaddelerin depolandığı siloda bir arıza (örneğin elevatör arızası), merkezdeki çini atölye ve fabrikalarının hammadde tedarikini geriye doğru etkileyebilir; bu bağımlılığı bildiğimiz için hammadde silolarındaki acil çağrılara standart işlere göre daha yüksek öncelik veririz.",
                    "Bu önceliklendirme, çağrı sırasında işin hangi sektöre (çini hammaddesi mi, tarımsal ürün mü) ait olduğunu belirtmenizle başlar; bu bilgi bizim yönlendirme kararımızı doğrudan etkiler.",
                ],
            },
            {
                baslik: "Tarımsal silolarda sezon dışı planlamanın avantajı",
                paragraflar: [
                    "Hasat ve depolama döneminin dışında yapılan tarımsal silo bakımı, hem tesisin kendi operasyonunu etkilemez hem de bu dönemde makine bulunurluğu ve sevkiyat esnekliği daha rahattır. Yıllık bakım listenizi sezon başlamadan iletirseniz, hem tesis takviminize hem sevkiyat programımıza uygun bir tarih birlikte belirleriz.",
                    "Bu planlama, hammadde silolarındaki üretim zincirine bağlı aciliyetten farklı bir mantıkla işler; iki sektörü aynı kalıpla değil, kendi gerçek ihtiyacına göre ele alırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çini hammaddesi silomuzdaki elevatör arızası ne kadar önceliklidir?",
                cevap:
                    "Yüksek önceliklidir; bu tip arızalar merkezdeki çini üretim zincirini geriye doğru etkileyebileceği için standart işlere göre daha hızlı yönlendiririz. Çağrı sırasında arızanın türünü ve zincir üzerindeki etkisini belirtirseniz, en yakın uygun makineyi hızlıca sizinle eşleştiririz.",
            },
            {
                soru: "Tarımsal silomuz için ne zaman bakım yaptırmalıyız?",
                cevap:
                    "Hasat ve depolama döneminin dışında planlamanızı öneririz; bu dönemde silo boş olur, çalışma penceresi geniştir ve makine bulunurluğu daha rahattır. Yıllık bakım listenizi sezon başlamadan iletirseniz, hem tesis takviminize hem bizim sevkiyat programımıza uygun bir tarih birlikte belirleriz.",
            },
            {
                soru: "Silo ve elevatör bakımı için hangi makine gerekiyor?",
                cevap:
                    "Silo ve elevatörler önü açık dikey yapılar olduğu için düz uzanan teleskopik bom genellikle en hızlı çözümdür; çevrede boru hattı veya bant köprüsü gibi engel varsa engel aşan eklemli sınıf gerekebilir. Silonun çevre fotoğrafını paylaşırsanız, sınıf kararını sahaya gelmeden veririz.",
            },
            {
                soru: "Açık saha zeminimiz toprak, makine güvenle çalışabilir mi?",
                cevap:
                    "Arazi tipi lastikli makinelerle çalışabiliriz; toprak zeminde park noktası önceden belirlenir, yağış sonrası yumuşayan bölgelerden kaçınılır. Sahanın güncel durumunu iş gününden önce sorarız; şüpheli bir bölge varsa park noktası değiştirilir veya yük dağıtım plakası kullanılır.",
            },
            {
                soru: "Hammadde silosu ile tarımsal silo işini aynı standartla mı ele alıyorsunuz?",
                cevap:
                    "Erişim tekniği açısından benzer bir yaklaşım kullanırız (dikey erişim, arazi tipi zemin) ama önceliklendirme farklıdır: hammadde silosundaki arıza üretim zincirini etkilediği için yüksek öncelik alır, tarımsal silo bakımı ise genellikle sezon dışına planlanabilir standart bir iştir. Talep sırasında hangi sektöre ait olduğunuzu belirtmeniz, doğru yaklaşımı baştan kurar.",
            },
            {
                soru: "Silo dolu hâldeyken üstünde çalışmak güvenli mi?",
                cevap:
                    "Genellikle güvenlidir ama dolu siloda titreşim hassasiyeti biraz daha önceliklidir; makine hareketleri daha kontrollü tutulur. Silonun doluluk durumunu ve varsa özel bir kısıtınızı (örneğin belirli bir bölgeye yaklaşmama kuralı) önceden bildirirseniz, çalışma tarzını buna göre ayarlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın hem çini hammaddesi (kaolen-feldispat) silolarını hem tarım ağırlıklı ilçelerindeki hububat silolarını barındırdığı kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Sektörel önceliklendirme firma pratiğidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Seramik Fabrikası Üretim Holü Aydınlatma ve Enerji Hattı Bakımında Platform Kiralama",
        giris:
            "Bir seramik veya çini fabrikasının üretim holü, standart bir depodan çok daha yoğun bir aydınlatma ve enerji altyapısına sahiptir; yüksek tavanlı hollerde yeterli görüş sağlamak için sık aralıklı armatürler, fırın ve pres gibi yüksek güç tüketen makinelerin beslendiği kablo tavaları ve bazı tesislerde kendi trafo-pano sistemleri bulunur. Bu sayfa, aydınlatma ve enerji hattı bakımı hizmetimizin üretim holü içindeki bu özel koşullarını anlatır; genel çatı-cephe aydınlatması dış cephe sayfamızın, üretim hattının kendisi iç mekân sayfamızın konusudur — bu sayfa ikisi arasındaki enerji-aydınlatma katmanına odaklanır.",
        maddeler: [
            {
                baslik: "Yüksek tavanlı holde armatür değişimi",
                metin:
                    "Üretim holünün tavan yüksekliği, standart bir merdiven veya küçük platformla ulaşılamayacak kadar yüksek olabilir; armatür değişimi veya temizliği bu durumda teleskopik ya da eklemli platform gerektirir. Armatürlerin sık aralıklı olduğu hollerde, bir konumlamadan birden fazla armatüre ulaşmak mümkün olduğunda iş süresi kısalır.",
            },
            {
                baslik: "Kablo tavası ve enerji hattı denetimi",
                metin:
                    "Pres ve fırın gibi yüksek güç tüketen makinelere giden kablo tavaları, genellikle tavana yakın bir yükseklikte hol boyunca uzanır; bu hatların periyodik görsel denetimi veya bağlantı sıkılığı kontrolü, platform ile hat boyunca yavaş ilerleyerek yapılır. Enerji hattı üzerinde çalışırken elektrik kesintisi gerekip gerekmediği, tesisin elektrik sorumlusuyla önceden netleştirilir.",
            },
            {
                baslik: "Trofo-pano çevresinde erişim ve güvenlik mesafesi",
                metin:
                    "Bazı büyük tesislerde kendi trafo ve pano sistemleri üretim holüne yakın bir noktada bulunur; bu alanların çevresindeki aydıntlatma veya yapısal bakım işlerinde güvenlik mesafesi standart bir elektrik tesisi kuralına göre belirlenir ve operatörümüz bu mesafeyi bilerek çalışır.",
            },
            {
                baslik: "Toz ve nem ortamında elektrik ekipmanı bakımı",
                metin:
                    "Presleme bölümündeki toz veya sırlama bölümündeki nem, aydınlatma armatürlerinin ve elektrik bağlantılarının kirlenmesini standart bir ortama göre hızlandırır; bu bölümlerde armatür ve bağlantı kontrolü, genel bakım programına göre daha sık tutulur. Bu, hem aydınlatma kalitesini korur hem elektrik arızası riskini azaltır.",
            },
            {
                baslik: "Vardiyalı çalışan holde iş penceresi",
                metin:
                    "Aydınlatma bakımı, üretim durmadan da yapılabilir çünkü platform genellikle üretim hattının dışında, tavana yakın bir bölgede çalışır; ancak enerji hattı üzerinde kesinti gerektiren işler, hattın planlı durak zamanına göre planlanır. Hangi işin kesinti gerektirdiği, keşifte veya telefon görüşmesinde netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma ve enerji işi tipine göre planlama",
                paragraflar: [
                    "Aşağıdaki tablo, üretim holü içindeki aydınlatma ve enerji hattı işlerinin tipine göre planlamayı özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Kesinti gerekli mi", "Zamanlama", "Makine notu"],
                    satirlar: [
                        ["Armatür değişimi/temizliği", "Genellikle hayır", "Üretim sürerken", "Teleskopik/eklemli"],
                        ["Kablo tavası görsel denetim", "Hayır", "Esnek", "Yavaş, hat boyunca"],
                        ["Bağlantı sıkılığı kontrolü", "Bazen evet", "Planlı durak", "Elektrik sorumlusuyla koordinasyon"],
                        ["Trafo-pano çevresi iş", "Duruma bağlı", "Güvenlik mesafesiyle", "Standart erişim"],
                        ["Toz/nem bölgesi armatür bakımı", "Hayır", "Sıklaştırılmış program", "Standart"],
                    ],
                },
            },
            {
                baslik: "Bir konumlamadan çoklu armatüre ulaşmanın verimliliği",
                paragraflar: [
                    "Sık aralıklı armatürlerin bulunduğu bir holde, platformu her armatür için yeniden konumlamak yerine, bir konumlamadan bomu genişleterek birden fazla armatüre ulaşmak toplam iş süresini belirgin şekilde kısaltır. Bu, özellikle uzun bir hol boyunca yapılan toplu armatür değişiminde önemli bir zaman kazancı sağlar.",
                    "Bu verimliliği en üst düzeye çıkarmak için, armatür listesini ve hol krokisini iş öncesi paylaşmanız, konumlama sırasını en verimli şekilde planlamamıza yardımcı olur.",
                ],
            },
            {
                baslik: "Kesinti gerektiren işlerde elektrik sorumlusuyla koordinasyon",
                paragraflar: [
                    "Kablo tavası veya pano çevresindeki bazı işler, güvenlik açısından ilgili hattın kısa süreli kesilmesini gerektirebilir; bu karar bizim değil, tesisin elektrik sorumlusunun yetkisindedir. Kesinti gereken bir iş tespit edildiğinde, bu kararı ve zamanlamasını doğrudan sorumlunuzla netleştiririz, platform işini bu zamanlamaya göre kurarız.",
                    "Bu koordinasyon, işin güvenli ve tesis operasyonunu en az etkileyecek şekilde ilerlemesini sağlar; kesinti gerektiren işleri mümkünse tesisin zaten planlı olan bir durağına denk getirmeyi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim holümüzün tavanı çok yüksek, standart merdivenle ulaşamıyoruz, hangi makine gerekir?",
                cevap:
                    "Tavan yüksekliğine göre teleskopik veya eklemli platform önereriz; hedefin yüksekliğini ve armatürlerin aralığını bildirirseniz doğru sınıfı sahaya gelmeden belirleriz. Sık aralıklı armatürlerde bir konumlamadan birden fazla armatüre ulaşmak mümkün olduğunda iş süresi kısalır.",
            },
            {
                soru: "Kablo tavası denetimi için elektrik kesintisi gerekiyor mu?",
                cevap:
                    "Genellikle hayır, görsel denetim ve dış kontrol kesinti gerektirmez; ancak bağlantı sıkılığı kontrolü gibi bazı işler güvenlik açısından kısa süreli kesinti gerektirebilir. Bu karar tesisin elektrik sorumlusunun yetkisindedir, biz doğrudan onunla koordine oluruz ve işi bu karara göre planlarız.",
            },
            {
                soru: "Trafo-pano çevresinde çalışırken güvenlik mesafesi nasıl belirleniyor?",
                cevap:
                    "Standart bir elektrik tesisi güvenlik mesafesi kuralına göre belirlenir; operatörümüz bu mesafeyi bilerek çalışır. Tesisinizin kendi ek güvenlik prosedürü varsa (örneğin belirli bir izin süreci), bunu bize önceden iletmeniz yeterli, işi buna göre planlarız.",
            },
            {
                soru: "Toz yoğun presleme bölümündeki armatürler ne sıklıkla bakım ister?",
                cevap:
                    "Standart bir bölgeye göre daha sık; toz, armatür ve bağlantıların kirlenmesini hızlandırır. Bu bölümlerde armatür ve bağlantı kontrolünü genel programa göre sıklaştırmanızı öneririz; uzun süreli bir bakım anlaşması yapıyorsanız bu sıklığı birlikte belirleriz.",
            },
            {
                soru: "Aydınlatma bakımı için üretimimizi durdurmamız gerekiyor mu?",
                cevap:
                    "Genellikle hayır; platform çoğunlukla üretim hattının dışında, tavana yakın bir bölgede çalışır ve üretim sürerken de armatür değişimi yapılabilir. Yalnızca kesinti gerektiren enerji hattı işlerinde, bu kesintinin zamanlaması tesisin planlı durak zamanına göre kurulur.",
            },
            {
                soru: "Uzun bir hol boyunca toplu armatür değişimi yaptıracağız, süreyi nasıl kısaltıyorsunuz?",
                cevap:
                    "Bir konumlamadan bomu genişleterek birden fazla armatüre ulaşarak; bu, her armatür için yeniden konumlamaya göre toplam süreyi belirgin şekilde kısaltır. Armatür listesini ve hol krokisini önceden paylaşırsanız, konumlama sırasını en verimli şekilde planlar, süreyi teklifte netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sanayi tesislerinde yüksek tavanlı üretim holü aydınlatması ve kablo tavası denetimi genel elektrik bakım bilgisidir; tesis adı ve rakam kullanılmamıştır. Elektrik sorumlusuyla koordinasyon süreci firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Seramik Fabrikası İçinde Operatörlü ve Operatörsüz Platform Kiralama",
        giris:
            "Bir çini veya seramik fabrikasında platform kiralarken karşılaşılan ilk karar, makinenin operatörlü mü yoksa kendi personelinizle mi kullanılacağıdır; bu karar, hattın hassasiyetine, işin süresine ve tesisin kendi iç güvenlik politikasına göre değişir. Bu sayfa, operatörlü ve operatörsüz seçeneklerin çini-seramik sanayisindeki fabrika içi kullanımda nasıl farklılaştığını, hangi durumda hangisinin önerildiğini ve yeterlilik belgesi sürecinin nasıl işlediğini anlatır.",
        maddeler: [
            {
                baslik: "Hassas hat bölümlerinde operatörlü tercih",
                metin:
                    "Sırlama kabini, kurutma tüneli veya fırın çevresi gibi hassasiyet gerektiren bölümlerde operatörlü kiralama önerilir; bu bölümlerde çalışacak operatörümüz, hattın kendine özgü risklerini (kalıntı ısı, nem hassasiyeti, kimyasal buhar) keşif ve iş öncesi brifingle öğrenir. Deneyimsiz bir kullanıcının bu bölümlerde çalışması, hem operatör güvenliği hem ürün kalitesi açısından risk taşır.",
            },
            {
                baslik: "Kendi operatörünüzle çalışma ve yeterlilik doğrulaması",
                metin:
                    "Tesisinizin kendi yetkili operatörü varsa, makineyi operatörsüz teslim eder, kısa bir saha bilgilendirmesi yaparız; bu durumda operatörün yeterlilik belgesi teslimat öncesi doğrulanır. Bu doğrulama, hem yasal bir gereklilik hem de sahada güvenli çalışmanın ön koşuludur.",
            },
            {
                baslik: "Uzun süreli kiralamada operatör rotasyonu",
                metin:
                    "Haftalar süren uzun bir kiralamada, tek bir operatörün sürekli aynı işte çalışması yorgunluk riski taşıyabilir; bu tip işlerde operatör rotasyonu planlanır ve her yeni operatör, hattın özel koşulları hakkında önceki operatörden veya bizim iç kayıtlarımızdan bilgilendirilir. Bu, iş kalitesinin süreklilik boyunca korunmasını sağlar.",
            },
            {
                baslik: "Kısa süreli acil işlerde hızlı operatörlü çözüm",
                metin:
                    "Acil bir arıza çağrısında, operatörlü kiralama genellikle daha hızlı bir çözümdür çünkü tesisin kendi personelinin o an müsait ve yetkili olması gerekmez; bizim operatörümüz makineyle birlikte gelir ve işe hemen başlayabilir. Bu, özellikle üretim zincirini etkileyen acil durumlarda tercih edilir.",
            },
            {
                baslik: "Maliyet farkı ve karar sürecinde şeffaflık",
                metin:
                    "Operatörlü ve operatörsüz seçenekler arasındaki maliyet farkı teklifte ayrı satırlarda gösterilir; kararınızı işin hassasiyeti, süresi ve kendi personelinizin müsaitliğine göre verebilirsiniz. Emin değilseniz, işin niteliğine göre önerimizi keşifte paylaşırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre operatörlü/operatörsüz önerisi",
                paragraflar: [
                    "Aşağıdaki tablo, çini-seramik fabrikası içindeki farklı iş tiplerinde operatörlü ve operatörsüz seçeneklerin önerilme durumunu özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Öneri", "Gerekçe", "Belge süreci"],
                    satirlar: [
                        ["Sırlama/fırın çevresi hassas iş", "Operatörlü", "Hat riskine aşinalık", "Bizim tarafımızda hazır"],
                        ["Standart depo/hol içi iş", "İkisi de uygun", "Düşük hassasiyet", "Kendi operatör için doğrulama"],
                        ["Uzun süreli kiralama", "Operatörlü + rotasyon", "Yorgunluk riski", "Rotasyon kaydı tutulur"],
                        ["Acil arıza çağrısı", "Operatörlü", "Hız önceliği", "Anlık müsaitlik gerekmez"],
                        ["Kendi personeli yetkili tesis", "Operatörsüz", "Maliyet avantajı", "Teslimat öncesi doğrulama"],
                    ],
                },
            },
            {
                baslik: "Yeterlilik belgesi doğrulamasının teslimat öncesi tamamlanması",
                paragraflar: [
                    "Operatörsüz kiralamada, kendi personelinizin yeterlilik belgesi teslimat gününden önce bizim tarafımızda doğrulanır; bu, teslimat gününde beklenmedik bir gecikmeyi önler. Belgenizi önceden e-posta veya belge paylaşım kanalıyla iletmeniz, bu doğrulamayı hızlandırır.",
                    "Doğrulama sırasında bir eksiklik tespit edilirse, sizi önceden bilgilendirir ve gerekirse operatörlü seçeneğe geçiş için alternatif sunarız; bu, teslimat gününde saha içinde çözüm aramaktan daha verimlidir.",
                ],
            },
            {
                baslik: "Operatör rotasyonunda bilgi sürekliliği",
                paragraflar: [
                    "Uzun süreli bir kiralamada operatör değiştiğinde, yeni operatörün hattın özel koşullarını (hangi bölüm hassas, hangi saatte kesinti var gibi) sıfırdan öğrenmesi verimliliği düşürebilir; bu yüzden her operatör değişiminde bir bilgi aktarım notu tutar ve yeni operatörü bu notla hazırlarız.",
                    "Bu süreklilik, özellikle haftalar süren büyük bir revizyon işinde önemlidir çünkü hattın küçük ama kritik detayları (örneğin belirli bir menfezin daha hassas olduğu) operatörden operatöre aktarılmazsa tekrar keşfedilmesi gerekir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sırlama kabini gibi hassas bir bölümde kendi operatörümüzle çalışabilir miyiz?",
                cevap:
                    "Çalışabilirsiniz, ancak bu bölümlerde operatörlü kiralamayı öneririz çünkü operatörümüz hattın kendine özgü risklerini (kimyasal buhar, dar tavan) keşif ve brifingle önceden öğrenir. Kendi operatörünüzle devam etmek isterseniz, yeterlilik belgesini doğrularız ve saha bilgilendirmesini birlikte yaparız.",
            },
            {
                soru: "Kendi operatörümüzün yeterlilik belgesi hangi süreçte doğrulanıyor?",
                cevap:
                    "Belgeyi teslimat gününden önce e-posta veya belge paylaşım kanalıyla iletmeniz yeterli; bu, doğrulamayı teslimat günü öncesinde tamamlamamızı ve gecikme yaşanmamasını sağlar. Bir eksiklik tespit edilirse önceden bilgilendirir, operatörlü seçeneğe geçiş için alternatif sunarız.",
            },
            {
                soru: "Uzun süreli kiralamada operatör değişirse iş kalitesi düşer mi?",
                cevap:
                    "Düşmemesi için her operatör değişiminde bir bilgi aktarım notu tutarız; yeni operatör, hattın hassas noktaları ve özel kısıtları hakkında bu notla önceden bilgilendirilir. Bu, özellikle haftalar süren büyük işlerde küçük ama kritik detayların kaybolmasını önler.",
            },
            {
                soru: "Acil bir arızada operatörlü mü daha hızlı çözüm sağlar?",
                cevap:
                    "Genellikle evet; operatörlü kiralamada tesisin kendi personelinin o an müsait ve yetkili olması gerekmez, bizim operatörümüz makineyle birlikte gelir ve işe hemen başlayabilir. Bu, özellikle üretim zincirini etkileyen acil durumlarda tercih edilir.",
            },
            {
                soru: "Operatörlü ve operatörsüz arasındaki fiyat farkı ne kadar?",
                cevap:
                    "Fark teklifte ayrı satırlarda gösterilir ve işin niteliğine, süresine göre değişir. Kararınızı işin hassasiyeti, süresi ve kendi personelinizin müsaitliğine göre verebilirsiniz; emin değilseniz, işin niteliğine göre önerimizi keşifte paylaşırız.",
            },
            {
                soru: "Standart depo veya hol içi bir işte hangisi daha uygun?",
                cevap:
                    "Düşük hassasiyetli standart işlerde ikisi de uygun olabilir; kendi yetkili personeliniz varsa operatörsüz seçenek maliyet avantajı sağlar. Yine de kararı, işin süresine ve personelinizin o gün müsaitliğine göre keşifte birlikte netleştirmenizi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü/operatörsüz platform kiralama seçeneği ve yeterlilik belgesi doğrulaması sektörde genel bir uygulamadır; tesis adı ve rakam kullanılmamıştır. Operatör rotasyonu ve bilgi aktarım notu firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Kütahya ve Çevresindeki Birden Fazla Seramik Tesisine Rota Bazlı Bakım Platformu",
        giris:
            "Kütahya çini-seramik sanayisinde, tek bir büyük müşterinin merkezde, Bilecik'te ve Uşak OSB'sinde ayrı ayrı tesisi olabilir; ya da merkezdeki komşu parsellerde farklı firmaların aynı hafta içinde bakım ihtiyacı ortaya çıkabilir. Bu tip dağınık ama zamanlaması esnek işleri tek tek sevkiyatla değil, birleşik bir rota üzerinde planlamak, hem müşteri hem bizim için maliyet ve zaman avantajı sağlar. Bu sayfa, çok noktalı rota bazlı bakım hizmetimizin çini-seramik sanayisindeki bu kullanımını anlatır.",
        maddeler: [
            {
                baslik: "Aynı firmaya ait birden fazla tesisin tek rotada birleşmesi",
                metin:
                    "Merkezde, Bilecik'te veya Uşak'ta birden fazla üretim noktası olan bir firmanın yıllık bakım listesi, tek bir rota planına bağlanabilir; bu rota, her tesisin kendi zamanlama kısıtını (revizyon durağı, üretim yoğunluğu) gözeterek sırayla kurulur. Bu, her tesise ayrı ayrı sevkiyat yapmaya göre belirgin bir maliyet avantajı sağlar.",
            },
            {
                baslik: "Komşu parsellerdeki farklı firmaların ortak rotası",
                metin:
                    "OSB içindeki komşu parsellerde farklı firmalara ait tesisler, aynı hafta içinde bakım talebi açtığında tek bir rotaya eklenebilir; bu birleşim, nakliye maliyetinin birden fazla tesise bölünmesini sağlar. Fatura yine ayrı ayrı düzenlenir, ortak bir muhasebe düzenlemesine gerek kalmaz.",
            },
            {
                baslik: "Rota planlamasında tarih esnekliğinin rolü",
                metin:
                    "Çok noktalı rota, ancak işlerin bir kısmının tarihte esnek olmasıyla verimli kurulabilir; tamamen sabit tarihli işlerde rota birleşimi zorlaşır. Talebinizi 'tarih esnek' notuyla açtığınızda, uygun bir rotaya yerleştirilme şansı artar ve fiyat farkı size gösterilir.",
            },
            {
                baslik: "Acil işlerin rota dışında ayrı ele alınması",
                metin:
                    "Rota planlaması, acil olmayan ve zamanlaması esnek işler için işler; üretim zincirini etkileyen acil bir arıza, rota beklenmeden ayrı ve hızlandırılmış olarak ele alınır. İki iş tipini karıştırmadan, talebinizin aciliyetini ilk çağrıda netleştirmemiz, doğru yönlendirmeyi sağlar.",
            },
            {
                baslik: "Rota kapsamının önceden netleştirilmesi",
                metin:
                    "Bir rotaya kaç tesisin ve hangi kalemlerin dahil olacağı, rota başlamadan önce netleştirilir; bu netleştirme, sahada beklenmedik bir ek işin rotayı geciktirmesini önler. Her tesisin iş listesini önceden almak, rota süresini gerçekçi tahmin etmemizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota bazlı bakımın senaryo bazlı özeti",
                paragraflar: [
                    "Aşağıdaki tablo, çok noktalı rota bakımının farklı senaryolarda nasıl işlediğini özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Rota uygunluğu", "Koşul", "Fatura"],
                    satirlar: [
                        ["Aynı firmanın çoklu tesisi", "Yüksek", "Zamanlama kısıtlarına göre sıralama", "Tek veya konsolide"],
                        ["Komşu parsellerdeki farklı firmalar", "Yüksek", "Tarih esnekliği + koordinasyon", "Ayrı ayrı"],
                        ["Tek tesis, tek iş", "Uygulanamaz", "Standart tekil sevkiyat", "Tekil"],
                        ["Acil arıza", "Uygulanamaz", "Hızlandırılmış ayrı çözüm", "Tekil"],
                        ["Sabit tarihli çoklu iş", "Düşük", "Rota kurulumu zorlaşır", "Ayrı ayrı"],
                    ],
                },
            },
            {
                baslik: "Rota süresinin gerçekçi tahmin edilmesi",
                paragraflar: [
                    "Bir rotanın toplam süresi, her tesisteki iş kapsamına ve tesisler arası mesafeye bağlıdır; bu süreyi rota başlamadan önce gerçekçi tahmin etmek için her tesisin iş listesini önceden almak gerekir. Eksik bilgiyle kurulan bir rota, sahada beklenmedik uzamalara yol açabilir.",
                    "Bu yüzden çok noktalı bir rota talebinde, katılacak tesislerin sayısını, her tesisteki tahmini kalem sayısını ve tercih edilen tarih aralığını birlikte topluyoruz; bu bilgi netleştiğinde rota planı size önceden gösterilir.",
                ],
            },
            {
                baslik: "Komşu firmalarla koordinasyonun pratikte kurulması",
                paragraflar: [
                    "Komşu parsellerdeki farklı firmaların aynı rotaya girmesi için, bu firmaların birbirleriyle veya bölge yönetimiyle iletişime geçip aynı hafta içinde talep açması gerekir; biz bu koordinasyonu, talebi 'ortak plana açık' notuyla aldığımızda destekleriz.",
                    "Bu koordinasyon kurulduğunda, her firma kendi işini kendi şartlarıyla alır — sadece nakliye maliyeti paylaşılır, iş kapsamı veya fiyatlandırma birbirinden bağımsız kalır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Merkezde, Bilecik'te ve Uşak'ta ayrı tesislerimiz var, tek bir yıllık plana bağlayabilir misiniz?",
                cevap:
                    "Bağlayabiliriz; her tesisin kendi zamanlama kısıtını (revizyon durağı, üretim yoğunluğu) gözeten bir rota planı kurarız. Bu, her tesise ayrı ayrı sevkiyat yapmaya göre belirgin bir maliyet avantajı sağlar. Tesislerinizin listesini ve yıllık bakım ihtiyaçlarını paylaşırsanız, taslak bir rota önerisi hazırlarız.",
            },
            {
                soru: "Komşu firmayla aynı rotaya girmek için ne yapmamız gerekiyor?",
                cevap:
                    "Komşunuzla iletişime geçip aynı hafta içinde talep açmanız veya talebinizi 'ortak plana açık' notuyla iletmeniz yeterli; bu koordinasyonu biz de destekleriz. Fatura yine ayrı ayrı düzenlenir, sadece nakliye maliyeti paylaşılır.",
            },
            {
                soru: "İşimizin tarihi kesinlikle sabit, rotaya girebilir mi?",
                cevap:
                    "Girebilir ama rota kurulumu zorlaşır çünkü diğer işlerin de o tarihe uyması gerekir; tamamen sabit tarihli işlerde genellikle tekil sevkiyat daha pratik olur. Tarihinizde biraz esneklik olabilirse, rota birleşimi şansı artar ve fiyat farkı size gösterilir.",
            },
            {
                soru: "Acil bir arızamız var ama rota planımıza dahil miyiz, ne kadar bekleriz?",
                cevap:
                    "Acil arızalar rota beklenmeden ayrı ve hızlandırılmış olarak ele alınır; rota planlaması yalnızca acil olmayan, zamanlaması esnek işler için kullanılır. Acil durumunuzu ilk çağrıda net belirtirseniz, rota dışında hemen yönlendirme yaparız.",
            },
            {
                soru: "Rota süresi ne kadar sürer, nasıl tahmin ediyorsunuz?",
                cevap:
                    "Süre, her tesisteki iş kapsamına ve tesisler arası mesafeye bağlıdır; gerçekçi bir tahmin için katılacak tesislerin sayısını, her tesisteki tahmini kalem sayısını ve tercih edilen tarih aralığını önceden topluyoruz. Bu bilgi netleştiğinde, rota planını ve tahmini süreyi size önceden gösteririz.",
            },
            {
                soru: "Rotaya sonradan yeni bir tesis eklenebilir mi?",
                cevap:
                    "Rota henüz kesinleşmediyse eklenebilir; rota kesinleştikten sonra eklenen bir tesis, mevcut planı geciktirebileceği için ayrı bir ek sevkiyat ya da bir sonraki rota dönemine dahil edilmesi önerilir. Yeni tesisinizi mümkün olduğunca erken bildirirseniz, rotaya dahil etme şansı artar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya çini-seramik sanayisinde merkez ve komşu iller (Bilecik, Uşak) arasındaki OSB dağılımı kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Rota planlama ve komşu firma koordinasyonu firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Kaolen-Feldispat Hammadde Ocağı ve Açık Sahalarda Zor Zemin Platform Kiralama",
        giris:
            "Çini ve seramik hammaddesinin kaynağı, temiz ve düz zeminli bir fabrika değil, açık ve düzensiz bir maden ocağı sahasıdır; kaolen ve feldispat gibi hammaddelerin çıkarıldığı ocaklarda zemin, mevsime ve kazı aşamasına göre sürekli değişen bir yapıya sahiptir. Bu sayfa, zor zemin ve arazi koşullarında platform kiralama hizmetimizin bu hammadde ocağı bağlamındaki kullanımını anlatır; ocaktan merkeze giden sevkiyat hattı ayrı bir konudur ve nakliye hizmetimiz sayfasında ele alınır.",
        maddeler: [
            {
                baslik: "Açık ocak sahasının düzensiz ve değişken zemini",
                metin:
                    "Kaolen-feldispat ocaklarının açık sahaları, kazı ilerledikçe şekil değiştiren bir zemine sahiptir; bir bölgenin geçen ay düz olan zemini bu ay kazı nedeniyle engebeli hâle gelmiş olabilir. Bu yüzden ocak sahasındaki her iş, o günün güncel zemin durumuna göre değerlendirilir, geçmiş bir ziyarete güvenilmez.",
            },
            {
                baslik: "Mevsime bağlı yumuşayan zemin riski",
                metin:
                    "Yağış sonrası ocak sahasının bazı bölgeleri geçici olarak yumuşayabilir; bu durumda standart bir tekerlekli makine batma riski taşır. Arazi tipi lastikli makineler ve gerektiğinde yük dağıtım plakası, bu riski azaltan standart önlemlerdir; park noktası da bu duruma göre önceden belirlenir.",
            },
            {
                baslik: "İşleme tesisi ile açık ocak arasındaki geçiş zemini",
                metin:
                    "Hammaddenin kırılıp elendiği işleme tesisi ile açık kazı alanı arasındaki geçiş yolu, genellikle sık kullanımdan oluşan bir toprak yol niteliğindedir; bu yolun taşıma kapasitesi ağır makine trafiğine göre değişkendir. Geçiş yolunun o günkü durumu, iş günü öncesi ocak işletmesiyle teyit edilir.",
            },
            {
                baslik: "Ocak işletmesinin kendi güvenlik ve zemin kurallarına uyum",
                metin:
                    "Maden ocağı işletmeleri, kendi iş güvenliği ve zemin kullanım kurallarına sahiptir; hangi bölgeye makine sokulabileceği, hangi bölgenin o an kazı nedeniyle yasak olduğu bilgisi ocak işletmesinden alınır. Bu bilgi olmadan sahaya girmek hem güvenlik hem operasyonel risk taşır.",
            },
            {
                baslik: "Zor zeminde makine seçiminin iş süresine etkisi",
                metin:
                    "Doğru arazi tipi makine seçilmediğinde, sahada makinenin sıkışması veya güvenli ilerleyememesi, işin durup yeniden planlanmasına yol açabilir; bu, hem zaman kaybı hem ek maliyet demektir. Zemin durumunu önceden netleştirmek, doğru makineyle ilk seferde sahaya gitmemizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ocak sahası zemin durumuna göre makine ve önlem",
                paragraflar: [
                    "Aşağıdaki tablo, hammadde ocağı sahasındaki farklı zemin durumlarına göre makine ve önlemi özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Risk", "Makine tercihi", "Ek önlem"],
                    satirlar: [
                        ["Kuru, düz açık saha", "Düşük", "Arazi tipi standart", "—"],
                        ["Kazı sonrası engebeli alan", "Orta", "Arazi tipi, dikkatli rota", "Güncel zemin kontrolü"],
                        ["Yağış sonrası yumuşamış zemin", "Yüksek", "Arazi tipi + plaka", "Park noktası değişimi"],
                        ["İşleme tesisi-ocak geçiş yolu", "Değişken", "Arazi tipi", "İş günü öncesi teyit"],
                        ["Ocak işletmesi yasak bölge", "—", "Girilmez", "İşletme onayı şart"],
                    ],
                },
            },
            {
                baslik: "Zemin durumunun iş günü öncesi teyidi",
                paragraflar: [
                    "Ocak sahası zemininin sürekli değişken yapısı nedeniyle, bir işin planlanmasından uygulanmasına kadar geçen sürede zemin durumu değişebilir; bu yüzden iş gününden hemen önce ocak işletmesiyle güncel zemin durumunu teyit ederiz. Şüpheli bir bölge tespit edilirse, park noktası veya güzergâh değiştirilir.",
                    "Bu teyit süreci, sahada beklenmedik bir zemin sorunuyla karşılaşma riskini büyük ölçüde azaltır ve işin ilk seferde doğru makineyle başlamasını sağlar.",
                ],
            },
            {
                baslik: "Yük dağıtım plakasının pratik kullanımı",
                paragraflar: [
                    "Zemin yumuşak veya taşıma kapasitesi belirsizse, makinenin altına yerleştirilen yük dağıtım plakası, nokta yükünü daha geniş bir alana yayarak batma riskini azaltır. Bu önlem, özellikle yağış sonrası dönemde veya taşıma kapasitesi test edilmemiş yeni bir bölgede standart uygulamamızdır.",
                    "Plaka kullanımı iş süresine küçük bir hazırlık zamanı ekler ama bu, makinenin sahada sıkışıp işin tamamen durmasına göre çok daha az maliyetlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak sahamızın zemini sürekli değişiyor, her seferinde yeniden mi değerlendiriyorsunuz?",
                cevap:
                    "Evet, geçmiş bir ziyarete güvenmeyiz; kazı ilerledikçe zemin şekil değiştirdiği için her iş günü öncesi ocak işletmenizle güncel zemin durumunu teyit ederiz. Şüpheli bir bölge varsa park noktası veya güzergâh değiştirilir, gerekirse yük dağıtım plakası kullanılır.",
            },
            {
                soru: "Yağış sonrası zeminimiz yumuşuyor, makineniz batmadan çalışabilir mi?",
                cevap:
                    "Arazi tipi lastikli makinelerle ve gerektiğinde yük dağıtım plakasıyla çalışabiliriz; bu, nokta yükünü daha geniş bir alana yayarak batma riskini azaltır. Yağış sonrası dönemde sahanın durumunu iş gününden önce sorarız; riskli görünen bir bölge varsa park noktasını değiştiririz.",
            },
            {
                soru: "İşleme tesisi ile açık ocak arasındaki yol makinenizi taşıyabilir mi?",
                cevap:
                    "Genellikle taşıyabilir ama bu yolun taşıma kapasitesi değişken olabileceği için iş günü öncesi ocak işletmenizle güncel durumu teyit ederiz. Yolun son kullanım durumunu (ağır araç trafiği, yağış etkisi) bilmiyorsanız bile, işletmenizin bakım ekibinden bu bilgiyi almanızı öneririz.",
            },
            {
                soru: "Ocağınızda hangi bölgeye girip giremeyeceğimizi nasıl biliyorsunuz?",
                cevap:
                    "Bu bilgiyi doğrudan ocak işletmesinden alırız; hangi bölgenin o an kazı nedeniyle yasak olduğu veya hangi bölgeye makine sokulabileceği, işletmenizin güvenlik prosedürüne göre belirlenir. Bu bilgi olmadan sahaya girmeyiz, bu yüzden iş öncesi işletme onayı sürecini birlikte netleştiririz.",
            },
            {
                soru: "Yanlış makine seçimi işimizi geciktirir mi?",
                cevap:
                    "Geciktirebilir; doğru arazi tipi makine seçilmediğinde sahada sıkışma veya güvensiz ilerleme riski oluşur, bu da işin durup yeniden planlanmasına yol açar. Zemin durumunu önceden netleştirmek — fotoğraf veya güncel bilgi paylaşarak — doğru makineyle ilk seferde sahaya gitmemizi sağlar.",
            },
            {
                soru: "Yük dağıtım plakası kullanmak ek ücret gerektiriyor mu?",
                cevap:
                    "Zemin durumuna göre gerekli görülürse kullanılır ve bu, teklifte ayrı bir kalem olarak gösterilir; sahada sonradan sürpriz bir ek ücret çıkmaz. Zemin durumunuzu önceden paylaşırsanız, plaka gerekip gerekmediğini teklif aşamasında netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kaolen-feldispat hammadde ocaklarının açık saha ve değişken zemin yapısı, maden işletmeciliğinde genel bir gerçekliktir; işletme adı ve rakam kullanılmamıştır. Zemin teyidi ve plaka kullanımı firma pratiğidir.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Çini Atölyesinde ve İhracat Paketleme Masasında Makaslı Platform Kiralama",
        giris:
            "Makaslı platformun diğer platform tiplerinden ayrılan temel özelliği, sepetin dar bir nokta değil geniş ve düz bir çalışma yüzeyi sunmasıdır; bu yüzey tek bir kişiyi değil, aynı anda birkaç kişiyi ve önlerindeki malzemeyi taşıyabilir. Kütahya merkezdeki çini atölyelerinde bu özellik iki farklı ihtiyaçla örtüşür. Birincisi, ihracat siparişi hazırlanırken paketleme masasının yüksek bir raf seviyesine taşınması gereken durumlarda, iki paketleme elemanının platformda yan yana durup aynı anda sarma ve istifleme yapabilmesidir — dar bir sepetli platformda bu iş bölünür ve yavaşlar. İkincisi, atölyenin dar koridorlarında dikey doğrultuda hareket eden makaslı platformun, tezgâhlar arasında yanal sallanma yapmadan düz yukarı-aşağı hareket etmesidir; bu, hassas desen tezgâhlarının yakınında çalışırken titreşim riskini azaltan bir avantajdır. Bu sayfa, makaslı platformun bu iki özelliğinin — geniş düz yüzey ve dikey düz hareket — atölye ve paketleme bağlamındaki kullanımını anlatır; dış cephe ve yüksek hol işleri eklemli platform (boom) hizmetimizde, sandık istifleri arasında yanal erişim gerektiren işler ise manlift hizmetimizde ayrı ele alınır.",
        maddeler: [
            {
                baslik: "Geniş sepet, ekip hâlinde paketleme",
                metin:
                    "İhracat siparişi hazırlığında çini parçaları önce yumuşak dolgu malzemesiyle sarılır, sonra ahşap sandığa yerleştirilir; bu iş genellikle iki kişilik bir ekiple yürütülür. Sandık yüksek bir raf seviyesinde hazırlanacaksa, makaslı platformun geniş sepeti bu iki kişiyi ve önlerindeki malzeme yığınını aynı anda taşıyabilir. Dar sepetli bir platformda bu iş bölünür, malzeme aşağı-yukarı taşınır ve süre uzar.",
            },
            {
                baslik: "Dar atölye koridorunda dikey düz hareket",
                metin:
                    "Küçük çini atölyelerinin tezgâhlar arası koridorları genellikle bir kişinin rahatça geçebileceği genişliktedir. Makaslı platform bu koridorlarda dikey doğrultuda düz yukarı-aşağı hareket eder, yanal sallanma yapmaz; bu, yakınındaki hassas desen tezgâhı veya kurutma rafı için titreşim açısından avantajlıdır. Koridor genişliği dar ise, önceden makine şase ölçüsü ile koridor ölçüsü karşılaştırılır.",
            },
            {
                baslik: "Sabit ve düz zeminde en stabil seçenek",
                metin:
                    "Atölye içi zemin genellikle düz ve sabit betondur; bu tür zeminlerde makaslı platform, eklemli veya teleskopik modellere göre daha stabil bir çalışma tabanı sunar çünkü ağırlık merkezi düşük ve sepet hareketi tek eksenlidir. Vitrin raf düzenlemesi veya tavan aydınlatması gibi sabit noktada uzun süre kalınan işlerde bu stabilite fark yaratır.",
            },
            {
                baslik: "Akülü model zorunluluğu",
                metin:
                    "Kapalı atölye içinde egzoz emisyonu kabul edilemeyeceği için makaslı platform akülü modelden seçilir. Toz ve boya buharına duyarlı sırlama alanlarına yakın çalışmalarda bu zaten standart uygulamamızdır; dizel model bu tür alanlara sokulmaz.",
            },
            {
                baslik: "İhracat sevkiyat deposunda raf üstü istifleme desteği",
                metin:
                    "Paketlenmiş sandıklar sevkiyat öncesi genellikle depo raflarının üst seviyelerinde bekletilir. Makaslı platform, bu sandıkların rafa yerleştirilmesi veya sevkiyat için indirilmesi sırasında geniş sepetiyle hem sandığı hem de onu taşıyan personeli güvenli şekilde taşır; forklift ile yapılan istiflemeden farklı olarak personelin sandığı elle yönlendirmesine izin verir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atölye içi kullanım alanına göre makaslı platform seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, çini atölyesi ve paketleme alanındaki farklı kullanım noktalarına göre makaslı platform tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Kullanım noktası", "Sepet ihtiyacı", "Zemin", "Güç tipi"],
                    satirlar: [
                        ["İhracat paketleme masası (2 kişi)", "Geniş, düz", "Sabit beton", "Akülü"],
                        ["Dar tezgâh koridoru", "Dar şase, düz hareket", "Sabit beton", "Akülü"],
                        ["Vitrin/raf düzenleme", "Orta, stabil", "Sabit beton", "Akülü"],
                        ["Sevkiyat deposu raf üstü", "Geniş, yük taşıma", "Sabit beton", "Akülü"],
                        ["Sırlama kabini yakını", "Dar, düşük titreşim", "Sabit beton", "Akülü, toz kontrollü"],
                    ],
                },
            },
            {
                baslik: "Şase ölçüsü ile koridor ölçüsünün önceden karşılaştırılması",
                paragraflar: [
                    "Atölye koridorları standart bir ölçüye sahip değildir; her atölye kendi tezgâh düzenine göre farklı bir koridor genişliği oluşturur. Bu yüzden makaslı platform gönderilmeden önce koridorun en dar noktasının ölçüsü alınır ve makinenin şase genişliğiyle karşılaştırılır.",
                    "Bu karşılaştırma yapılmadan sahaya gönderilen bir makine, koridora sığmadığında geri döndürülmek zorunda kalır; bu hem zaman hem maliyet kaybıdır. Fotoğraf veya ölçü paylaşımı, bu riski iş günü öncesinde ortadan kaldırır.",
                ],
            },
            {
                baslik: "Paketleme ekibiyle koordineli çalışma saati",
                paragraflar: [
                    "İhracat paketleme işleri genellikle sevkiyat tarihine bağlı bir zaman baskısı taşır; bu yüzden makaslı platformun atölyeye ulaşım saati, paketleme ekibinin o günkü iş planına göre önceden koordine edilir.",
                    "Ekibin sandık hazırlığını tamamladığı ve rafa yerleştirmeye hazır olduğu an ile platformun sahada olduğu an örtüşürse, iş akışında boşluk oluşmaz ve sevkiyat takvimi aksamaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform iki kişiyi birden taşıyabilir mi, paketleme ekibimiz birlikte çalışabilir mi?",
                cevap:
                    "Evet, makaslı platformun geniş ve düz sepeti bu amaç için tasarlanmıştır; iki paketleme elemanı ve önlerindeki malzeme aynı anda taşınabilir. Sepet kapasitesini aşan ağır yük durumlarında önceden bilgi vermenizi öneririz, doğru modeli buna göre planlarız.",
            },
            {
                soru: "Atölyemizin koridoru çok dar, makaslı platform sığar mı?",
                cevap:
                    "Sığıp sığmayacağını netleştirmek için koridorun en dar noktasının ölçüsünü isteriz ve makinenin şase genişliğiyle karşılaştırırız. Bu karşılaştırma yapılmadan makine gönderilmez; ölçü uymuyorsa daha dar şaseli bir model veya alternatif bir platform tipi önerilir.",
            },
            {
                soru: "Makaslı platform sırlama kabinine yakın çalışabilir mi, toz ve boya buharı sorun olur mu?",
                cevap:
                    "Akülü model kullanıldığı için egzoz kaynaklı bir sorun oluşmaz; ancak toza ve buhara duyarlı yüzeyler varsa bu alanlar önceden örtülür ve çalışma, kabinin en sakin olduğu saate denk getirilir. Bu, sepetli örümcek platform hizmetimizde de uyguladığımız aynı önlem mantığıdır.",
            },
            {
                soru: "Dizel makaslı platform seçeneğiniz var mı, atölye dışı açık alan için?",
                cevap:
                    "Atölye ve depo içi kapalı alan işlerinde akülü model zorunludur; açık sahada egzoz kısıtı olmayan durumlarda dizel model değerlendirilebilir. Hangi modelin uygun olduğu, çalışma alanının kapalı mı açık mı olduğuna göre iş günü öncesi netleştirilir.",
            },
            {
                soru: "Sevkiyat öncesi rafa sandık yerleştirirken makaslı platform mu forklift mi daha uygun?",
                cevap:
                    "Sandık ağır ve tek parçaysa forklift daha hızlı bir çözümdür; ancak personelin sandığı elle yönlendirmesi, hassas yerleştirme gerektirmesi veya raf üstünde ek bir düzenleme yapılması gerekiyorsa makaslı platform daha uygundur çünkü personeli sandıkla birlikte aynı seviyeye taşır. İki hizmeti birlikte de planlayabiliriz.",
            },
            {
                soru: "Vitrin ve raf düzenleme işi için makaslı platform ne kadar sürede hazır olur?",
                cevap:
                    "Bu, atölyenizin merkeze uzaklığına ve o günkü makine müsaitliğine göre değişir; net bir süre için önce konum ve iş kapsamını netleştiririz. Sevkiyat takvimine bağlı acil bir paketleme işi ise, öncelik verilerek planlama yapılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platformun geniş sepet ve dikey düz hareket özellikleri, ekipman tipinin genel teknik gerçeğidir. İhracat paketleme ve atölye koridoru kullanım senaryoları, sayfanın mevcut çini atölyesi profiliyle tutarlı biçimde tasarlanmıştır; işletme adı ve rakam kullanılmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Çini Atölyesi Avlusunda ve Sandık İstifleri Arasında Engel Aşan Manlift Kiralama",
        giris:
            "Manlift (eklemli veya teleskopik bomlu platform), makaslı platformdan farklı olarak yalnızca dikey değil, yanal doğrultuda da uzanabilen bir kol yapısına sahiptir; bu özellik, sepetin bir engelin üzerinden veya yanından dolaşarak hedefe ulaşmasını mümkün kılar. Kütahya merkezdeki küçük çini atölyelerinin çoğu, üretim alanının hemen yanında bir avlu veya açık depolama sahasına sahiptir; burada ihracat sevkiyatını bekleyen ahşap sandıklar sıra sıra istiflenir, atölyenin kendi çatı sundurması ve bazen bir aydınlatma direği veya ağaç bu avluyu çevreler. Avlunun duvarına, sundurma çatısına veya direğe düz bir platformla erişmek çoğu zaman mümkün olmaz çünkü istiflenmiş sandıklar veya sundurma kirişleri araya girer. Manlift'in yanal uzanım özelliği tam bu noktada devreye girer: sepet, sandık istiflerinin üzerinden veya yanından dolaşarak hedefe ulaşır, sandıkların yerinin değiştirilmesine gerek kalmaz. Bu sayfa, manlift'in bu engel-aşma kullanımını atölye avlusu bağlamında anlatır; fabrika dış cephesi ve yüksek hol işleri eklemli platform (boom) hizmetimizde, atölye içi düz paketleme işleri ise makaslı platform hizmetimizde ayrı ele alınır.",
        maddeler: [
            {
                baslik: "Sandık istifleri arasından yanal erişim",
                metin:
                    "İhracat sevkiyatını bekleyen ahşap sandıklar, avluda genellikle sıra sıra ve birbirine yakın istiflenir; bu istifler arasında düz bir platform için yeterli boşluk kalmayabilir. Manlift'in kolu, istiflerin üzerinden veya kenarından dolaşarak sepeti hedef noktaya taşıyabilir; bu sayede sandıkların geçici olarak yerinin değiştirilmesi gerekmez ve sevkiyat düzeni bozulmaz.",
            },
            {
                baslik: "Sundurma çatısı ve kiriş altı erişimi",
                metin:
                    "Küçük atölyelerin avluya bakan cephesinde genellikle bir sundurma veya saçak bulunur; bu sundurmanın kiriş altı bakımı veya aydınlatma değişimi, düz bir platformla değil, kirişin altından yana doğru uzanan bir kol ile daha güvenli yapılır. Manlift'in eklemli kolu, kirişe çarpmadan altından geçip hedef noktaya ulaşabilir.",
            },
            {
                baslik: "Avlu çevresindeki direk ve ağaç gibi sabit engeller",
                metin:
                    "Aydınlatma direği, elektrik hattı veya avlu kenarındaki bir ağaç, düz bir platformun dikey rotasını kesebilir. Manlift bu tür sabit engelleri kolun yanal hareketiyle aşarak çalışma noktasına ulaşır; hangi engelin sahada bulunduğu ve kolun hangi yönden yaklaşması gerektiği, iş günü öncesi sahadan alınan bilgiyle netleştirilir.",
            },
            {
                baslik: "Açık avluda arazi tipi lastik ve zemin durumu",
                metin:
                    "Atölye avluları genellikle beton değil, sıkıştırılmış toprak veya parke taşı zeminlidir; bu zeminlerde arazi tipi lastikli manlift modeli tercih edilir. Yağış sonrası zeminin yumuşayıp yumuşamadığı, iş günü öncesi teyit edilir; gerekirse park noktası sağlam bir bölgeye kaydırılır.",
            },
            {
                baslik: "Sandık istifi yüksekliğine göre kol uzunluğu seçimi",
                metin:
                    "İstiflenen sandıkların yüksekliği mevsime ve sipariş hacmine göre değişir; istif ne kadar yüksekse, kolun bu istifi aşması için gereken yanal ve dikey uzanım da o kadar artar. Bu yüzden çalışma öncesi istif yüksekliği ve hedef noktanın konumu birlikte değerlendirilip uygun kol uzunluğuna sahip model seçilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Avlu senaryosuna göre manlift tercihi",
                paragraflar: [
                    "Aşağıdaki tablo, atölye avlusundaki farklı engel senaryolarına göre manlift tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Engel türü", "Erişim yönü", "Kol tipi", "Zemin lastiği"],
                    satirlar: [
                        ["Sandık istifi (orta yükseklik)", "Üstünden/yanından", "Eklemli", "Arazi tipi"],
                        ["Sundurma kiriş altı", "Alttan yana", "Eklemli", "Arazi tipi"],
                        ["Aydınlatma direği/ağaç", "Yandan dolaşarak", "Teleskopik/eklemli", "Arazi tipi"],
                        ["Yüksek sandık istifi", "Üstten geniş açı", "Teleskopik", "Arazi tipi"],
                        ["Toprak/parke taşı zemin", "—", "—", "Arazi tipi zorunlu"],
                    ],
                },
            },
            {
                baslik: "Sahadaki engellerin iş günü öncesi netleştirilmesi",
                paragraflar: [
                    "Avlu düzeni her atölyede farklıdır; bir atölyede sandık istifleri avlunun ortasında, diğerinde kenarında olabilir, bazılarında ek olarak bir direk veya ağaç bulunur. Bu yüzden manlift gönderilmeden önce avlunun güncel fotoğrafı veya kısa bir tarifiyle hangi engellerin bulunduğu netleştirilir.",
                    "Bu ön bilgi, hem doğru kol uzunluğuna sahip modelin seçilmesini hem de operatörün sahaya vardığında zaman kaybetmeden çalışmaya başlamasını sağlar.",
                ],
            },
            {
                baslik: "Sevkiyat takvimiyle çakışmayan çalışma planı",
                paragraflar: [
                    "Avludaki sandık istifleri genellikle bir sevkiyat tarihine bağlı olarak oluşur ve o tarihe kadar yerinde kalması gerekir; manlift çalışması bu istifleri geçici olarak engellememelidir.",
                    "Bu yüzden çalışma saati, sevkiyat için araç yükleme zamanlarının dışında planlanır; büyük bir sevkiyat günü öncesinde avluda çalışma gerekiyorsa bu, atölyeyle birlikte önceden takvime bağlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Avlumuzda sandık istifleri var, bunları kaldırmadan manlift çalışabilir mi?",
                cevap:
                    "Genellikle evet; manlift'in yanal uzanan kolu istiflerin üzerinden veya yanından dolaşarak hedefe ulaşabilir, bu yüzden sandıkların yerinin değiştirilmesi çoğu durumda gerekmez. İstifin yüksekliği ve konumu hakkında önceden bilgi verirseniz, doğru kol uzunluğuna sahip modeli seçeriz.",
            },
            {
                soru: "Sundurma çatımızın kirişi var, kola çarpar mı?",
                cevap:
                    "Bu riski önlemek için kirişin konumu ve yüksekliği iş günü öncesi netleştirilir; manlift'in eklemli kolu kirişin altından yana doğru uzanarak hedefe ulaşacak şekilde yönlendirilir. Net bir ölçü veya fotoğraf paylaşırsanız operatör sahada zaman kaybetmez.",
            },
            {
                soru: "Avlumuzun zemini toprak, makine batar mı?",
                cevap:
                    "Bu ihtimale karşı arazi tipi lastikli model kullanırız; yağış sonrası zeminin yumuşayıp yumuşamadığını iş günü öncesi sorarız ve riskli görünüyorsa park noktasını daha sağlam bir bölgeye kaydırırız. Toprak zemin, manlift için standart bir çalışma koşuludur.",
            },
            {
                soru: "Manlift ile makaslı platform arasındaki fark nedir, hangisini seçmeliyiz?",
                cevap:
                    "Makaslı platform yalnızca dikey hareket eder ve düz erişimin yeterli olduğu paketleme veya raf işlerinde uygundur; manlift ise yanal uzanan koluyla sandık istifi, direk veya kiriş gibi engelleri aşarak hedefe ulaşabilir. Avlunuzda engel varsa manlift, düz ve açık bir alanda çalışacaksanız makaslı platform daha ekonomik bir seçenektir.",
            },
            {
                soru: "Aydınlatma direğimiz avlunun ortasında, manlift bu direği aşabilir mi?",
                cevap:
                    "Evet, direk gibi sabit engeller manlift'in tipik çalışma senaryosudur; kol, direği yandan dolaşarak hedef noktaya ulaşır. Direğin tam konumunu ve hedef noktanın direğe göre yönünü önceden belirtirseniz, uygun kol uzunluğu ve yaklaşım açısını buna göre planlarız.",
            },
            {
                soru: "Sevkiyat gününde avluda çalışma yapabilir misiniz, araç yükleme trafiğini engellemez mi?",
                cevap:
                    "Sevkiyat günü çalışma trafiğini engellememek için manlift çalışma saatini araç yükleme zamanlarının dışında planlarız; büyük bir sevkiyat öncesinde avluda iş gerekiyorsa bu, atölyenizin sevkiyat takvimiyle birlikte önceden netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manlift'in (eklemli/teleskopik bomlu platform) yanal uzanım özelliği ve makaslı platforma göre farkı, ekipman tipinin genel teknik gerçeğidir. Atölye avlusu, sandık istifi ve sevkiyat senaryoları mevcut çini atölyesi profiliyle tutarlı biçimde tasarlanmıştır; işletme adı ve rakam kullanılmamıştır.",
    },
};
