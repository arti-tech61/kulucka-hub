// ═══════════════════════════════════════════════════════════════════════════
// kutahyaplatform.tr — ELLE YAZILMIŞ İÇERİK
//
// Profil: Tavşanlı MADEN-TERMİK SANTRAL ve Gediz bölgesi platform kiralama.
// Açı: LİNYİT MADEN + TERMİK SANTRAL AĞIRLIKLI — linyit ocağı destek
// tesisleri, termik santral bacaları ve soğutma kuleleri, kömür taşıma bant
// sistemleri, maden İSG rejimi. (Tavşanlı-Seyitömer havzası kamuya açık
// bilgidir.)
//
// ⚠️ Kardeş dosya kutahyaplatform-com.ts'teki Tavşanlı anlatımı (genel Kütahya
// seramik profili içinde kısa maden-enerji değinmesi) okunmuş; buradaki eksen
// TERMİK SANTRAL AĞIRLIKLI ve TÜM SAYFA Tavşanlı'ya adanmıştır — o dosyada
// genel Kütahya idi. Kardeş dosya kutahyaplatform-com-tr.ts (çini atölye/
// hammadde ocağı açısı) ile de örtüşme yoktur; cümle/tablo/kalıp tekrarı
// YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const KUTAHYAPLATFORM_TR: Record<string, BespokeIcerik> = {
    "bolge:kutahya": {
        h1: "Kütahya'da Enerji Sektörüne Platform Kiralama Merkezi",
        giris:
            "Kütahya merkez, ilin linyit-termik santral kuşağına giden sevkiyatın toplandığı ve dağıtıldığı noktadır; depomuz buradan Tavşanlı'daki ocak ve santral sahalarına, Gediz'deki destek tesislerine düzenli araç gönderir. Merkezin kendi enerji sektörü talebi ise daha çok bu kuşağa hizmet veren yan sanayiden — bakım-onarım atölyeleri, yedek parça depoları, nakliye firmaları — gelir. Bu sayfa, kardeş dosyalarımızdaki seramik-çini odaklı Kütahya merkez profilinden ayrı olarak, doğrudan enerji sektörünün merkezdeki lojistik ve destek yapısını anlatır.",
        maddeler: [
            {
                baslik: "Santral yan sanayisinde atölye ve depo bakımı",
                metin:
                    "Merkezdeki bazı atölye ve depo işletmeleri, doğrudan Tavşanlı'daki termik santral ve maden işletmelerine yedek parça, ekipman bakımı veya nakliye hizmeti verir; bu işletmelerin kendi çatı, aydınlatma ve raf üstü bakım ihtiyaçları standart bir sanayi holü profilindedir ama santral sektörünün getirdiği yoğun sevkiyat trafiği çalışma saatlerini etkiler.",
            },
            {
                baslik: "Merkez-Tavşanlı hattında sevkiyat koordinasyonu",
                metin:
                    "Merkezdeki depomuz, Tavşanlı yönüne düzenli sevkiyat yapar; bu hat üzerinde bakım işi olan bir işletme, aynı sevkiyat programına eklenebilir. Ocak ve santral sahalarındaki acil çağrılar önceliklidir; merkezdeki makine bulunurluğu bu önceliğe göre yönetilir.",
            },
            {
                baslik: "Ağır nakliye firmalarının depo-atölye bakımı",
                metin:
                    "Kömür ve maden ekipmanı taşıyan ağır nakliye firmalarının merkezdeki garaj ve bakım atölyeleri, yüksek tavanlı ve geniş açıklıklı yapılardır; bu yapılarda aydınlatma ve çatı işleri, araç trafiğinin en az olduğu saatlere planlanır. Zemin genellikle sağlam beton olduğu için standart akülü sınıf yeterlidir.",
            },
            {
                baslik: "Enerji sektörü personeli için idari-sosyal tesisler",
                metin:
                    "Santral ve maden işletmelerinin merkezdeki idari büro ve personel sosyal tesislerinde standart bina bakımı (aydınlatma, cephe, çatı) yapılır; bu işler enerji sektörünün özel risklerinden (kömür tozu, yüksek sıcaklık) bağımsızdır ve normal bir ofis-sosyal tesis bakımı gibi ele alınır.",
            },
            {
                baslik: "Kış aylarında sevkiyat lojistiği",
                metin:
                    "Kütahya'nın yüksek rakımlı platosunda kışlar sert geçer; merkezden Tavşanlı ve Gediz yönüne yapılan sevkiyatlarda kar ve buzlanma, teslimat gününü etkileyebilir. Kış aylarında planlanan işlerde, alternatif bir teslimat günü önceden konuşulur ve makinenin indirileceği alanın düz ve buz tutmayan bir yüzey olması istenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezde enerji sektörü yan sanayisi ve platform kullanımı",
                paragraflar: [
                    "Aşağıdaki tablo, merkezdeki enerji sektörü yan sanayisinde platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik kalem", "Zamanlama", "Not"],
                    satirlar: [
                        ["Yedek parça atölyesi", "Çatı, aydınlatma", "Standart mesai", "Sevkiyat trafiği dikkate alınır"],
                        ["Ağır nakliye garajı", "Çatı, aydınlatma", "Trafik dışı saat", "Standart akülü"],
                        ["İdari-sosyal tesis", "Cephe, çatı", "Esnek", "Ofis bakımı gibi"],
                        ["Tavşanlı hattı ara iş", "Değişken", "Tur içi", "Öncelik santral/ocakta"],
                        ["Kış dönemi sevkiyatı", "—", "Hava koşullu", "Alternatif gün planı"],
                    ],
                },
            },
            {
                baslik: "Merkezin lojistik rolü ve öncelik sırası",
                paragraflar: [
                    "Merkezdeki depomuz, Tavşanlı'daki ocak ve santral sahalarına giden sevkiyatın çıkış noktasıdır; bu nedenle merkezdeki makine bulunurluğu, doğrudan Tavşanlı hattındaki taleple ilişkilidir. Santral ve ocak sahalarındaki acil çağrılar, üretim sürekliliği açısından kritik olduğu için önceliklidir.",
                    "Merkezdeki standart işler (yedek parça atölyesi, idari tesis) bu önceliğin dışında kalan zaman dilimlerine planlanır; bu, merkez müşterilerimize açıkça anlattığımız bir gerçektir ve genellikle işin aciliyetine göre makul bir bekleme süresi oluşturur.",
                ],
            },
            {
                baslik: "Kış lojistiğinde gerçekçi planlama",
                paragraflar: [
                    "Kütahya platosunun kış koşulları, merkezden Tavşanlı ve Gediz yönüne yapılan sevkiyatları etkileyebilir; bu yüzden kış aylarında planlanan işlerde teslimat tarihine bir miktar esneklik payı bırakılmasını öneririz. Makinenin indirileceği alanın düz, drenajlı ve buz tutmayan bir yüzey olması, sevkiyat gününün sorunsuz geçmesi için belirleyicidir.",
                    "Acil bir kış işi varsa, hava koşulunu göz önünde bulundurarak en gerçekçi teslimat penceresini baştan söyleriz; sürpriz bir gecikme yaşatmamak önceliğimizdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Merkezdeki yedek parça atölyemizde bakım işimiz var, Tavşanlı hattındaki işlerle çakışır mı?",
                cevap:
                    "Çakışabilir çünkü merkezdeki makine bulunurluğu, Tavşanlı hattındaki taleple doğrudan ilişkilidir; santral ve ocak sahalarındaki acil çağrılar öncelik kazanır. Standart bir atölye bakımı olduğu için genellikle makul bir bekleme süresiyle karşılanır. İşinizi ne kadar erken bildirirseniz, uygun bir tarihe o kadar rahat yerleştiririz.",
            },
            {
                soru: "Ağır nakliye garajımızın çatı bakımını araç trafiğini aksatmadan yapabilir misiniz?",
                cevap:
                    "Yapabiliriz; çalışma, araç giriş-çıkış trafiğinin en az olduğu saatlere planlanır. Garaj zemini genellikle sağlam beton olduğu için standart akülü sınıf yeterlidir. Trafiğinizin en yoğun olduğu saatleri bildirirseniz, planı doğrudan bu saatlerin dışına kurarız.",
            },
            {
                soru: "Kış aylarında Tavşanlı yönüne sevkiyat yapabiliyor musunuz?",
                cevap:
                    "Yapıyoruz ama kar ve buzlanma teslimat gününü etkileyebilir; bu yüzden kış aylarında planlanan işlerde alternatif bir teslimat günü önceden konuşulur. Makinenin indirileceği alanın düz ve buz tutmayan bir yüzey olmasını isteriz — bu, sevkiyat gününün sorunsuz geçmesi için belirleyicidir. Acil bir kış işiniz varsa, hava koşulunu göz önünde bulundurarak en gerçekçi teslimat penceresini baştan söyleriz.",
            },
            {
                soru: "İdari binamızın cephe bakımı enerji sektörünün özel risklerini taşır mı?",
                cevap:
                    "Taşımaz; idari büro ve personel sosyal tesislerindeki bakım, kömür tozu veya yüksek sıcaklık gibi santral-ocak sahasına özgü risklerden bağımsız, standart bir ofis-sosyal tesis bakımıdır. Bu işlerde çalışma planı esnektir ve santral hattındaki öncelik sırasından etkilenmez; bize uygun tarihi söylerseniz kolayca planlarız.",
            },
            {
                soru: "Merkezdeki işimizi Tavşanlı'daki bir işle birleştirebilir misiniz?",
                cevap:
                    "Birleştirebiliriz; merkez-Tavşanlı hattı düzenli işlediği için bu hat üzerindeki işler tarih esnekliği bırakıldığında aynı sevkiyat programına eklenebilir. Bunun için iki işin de tarihte biraz esnek olması yeterlidir. Konumları ve tercih ettiğiniz tarih aralığını verirseniz tek turda bitirecek bir program çıkarırız.",
            },
            {
                soru: "Neden merkez sayfanız Tavşanlı'ya bu kadar bağlı anlatılmış?",
                cevap:
                    "Çünkü bu domainin odağı Kütahya'nın linyit-maden ve termik santral kuşağıdır ve merkezdeki depomuz bu kuşağa giden sevkiyatın çıkış noktasıdır. Merkezin kendi enerji sektörü talebi de büyük ölçüde bu kuşağa hizmet veren yan sanayiden geliyor. Seramik ve çini odaklı bir işiniz varsa, kardeş sitemizdeki ilgili sayfalardan devam etmenizi öneririz; aynı operatör kadromuz her iki alanda da hizmet verir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kütahya merkezin Tavşanlı linyit-termik santral kuşağına lojistik yakınlığı ve platonun kış iklimi kamuya açık bilgidir; işletme adı ve rakam kullanılmamıştır. Öncelik sırası ve kış planlaması firma pratiğidir.",
    },

    "bolge:tavsanli": {
        h1: "Tavşanlı'da Linyit Ocağı ve Termik Santral Platform Kiralama",
        giris:
            "Tavşanlı-Seyitömer havzası, Kütahya'nın linyit üretimi ve buna bağlı termik santral kapasitesiyle bilinen bölgesidir; ilçenin ekonomisi uzun yıllardır bu iki yapı — açık ocak madenciliği ve termik enerji üretimi — etrafında şekillenir. Bu sayfa, kardeş dosyamızdaki genel Kütahya seramik profilinin dışında, doğrudan linyit ocağı destek tesislerine ve termik santral bacaları, soğutma kuleleri, kömür taşıma bant sistemlerine odaklanır; buradaki iş, sanayi holünde değil açık havada, ağır çelik yapıların arasında ve kömür tozunun her yüzeye indiği bir atmosferde geçer.",
        maddeler: [
            {
                baslik: "Açık ocak madenciliğinde destek tesisleri",
                metin:
                    "Linyit ocağının çevresinde kurulu bant konveyör köprüleri, eleme-yıkama tesisleri ve nakliye ekipmanı bakım atölyeleri, ocağın kendisinden ayrı ama ona hizmet eden yapılardır. Bu tesislerdeki platform işleri çelik konstrüksiyon kontrolü, aydınlatma ve bant hattı çevresi bakımlarda yoğunlaşır; zemin genellikle sıkıştırılmış dolgu ve moloz karışımıdır, bu yüzden arazi tipi lastikli makineler ve gerektiğinde yük dağıtım plakası standarttır.",
            },
            {
                baslik: "Termik santral bacaları ve emisyon ekipmanı",
                metin:
                    "Termik santralin baca sistemleri ve emisyon kontrol ekipmanı, tesisin en yüksek ve en sıkı düzenlemeye tabi yapılarıdır; bu bölgedeki bakım işleri, santral işletmesinin kendi çevre ve iş güvenliği prosedürüne göre yürütülür. Baca çevresi işlerde düz uzanan teleskopik bom, çevrede boru veya çelik yapı engeli yoksa en hızlı erişim yöntemidir.",
            },
            {
                baslik: "Soğutma kuleleri çevresinde nem ve buhar etkisi",
                metin:
                    "Soğutma kulelerinin çevresi sürekli nem ve buhar altındadır; bu ortam hem görüşü hem makinenin elektrik bağlantılarını etkiler. Bu bölgede çalışan ekipmanda su geçirmez bağlantı ve düzenli elektrik kontrolü standarttır; zemin ıslak olduğu için lastik tutuşu ayrıca değerlendirilir ve gerekirse çalışma öncesi bölgesel kurutma istenir.",
            },
            {
                baslik: "Kömür taşıma bant sistemlerinde erişim",
                metin:
                    "Ocaktan santrale ve santral içindeki kömür hazırlama ünitelerine kömür taşıyan bant sistemleri, kilometrelerce uzanan galeri ve köprülerden oluşur; bakım noktaları bu hat boyunca dağılmıştır. Bant değişimi, tambur-rulo müdahaleleri ve galeri aydınlatması en sık talep edilen kalemlerdir. Enerji ayrımı — sistemin kilitli ve etiketli olduğunun doğrulanması — her yeni noktada tekrarlanan zorunlu adımdır.",
            },
            {
                baslik: "Maden İSG rejimi ve saha giriş prosedürü",
                metin:
                    "Maden ve termik santral sahalarına giriş, standart bir sanayi tesisinden çok daha ağır bir iş güvenliği rejimine tabidir: giriş izinleri, iş izni formları, kilitleme-etiketleme uygulamaları, refakatçi ataması ve gaz ölçümü gerekebilir. Bu süreç iş gününden önce tamamlanır; bizim tarafımızdaki belge seti (operatör yeterlilikleri, makine kontrol kayıtları, sigorta evrakları) bu tür sahalar için hazır tutulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tavşanlı'da saha bölümü ve platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, linyit ocağı ve termik santral sahasının farklı bölümlerinde platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Belirleyici koşul", "Makine tercihi", "İzin ağırlığı"],
                    satirlar: [
                        ["Ocak destek tesisleri", "Gevşek zemin, toz", "Arazi tipi, plaka destekli", "Orta"],
                        ["Baca ve emisyon ekipmanı", "Yükseklik, sıkı denetim", "Teleskopik", "Yüksek"],
                        ["Soğutma kulesi çevresi", "Nem, buhar, ıslak zemin", "Su geçirmez bağlantılı", "Orta"],
                        ["Kömür bant galerisi", "Dar erişim, enerji ayrımı", "Kompakt eklemli", "Yüksek"],
                        ["İdari-yardımcı yapılar", "Standart", "Standart akülü", "Düşük"],
                    ],
                },
            },
            {
                baslik: "Planlı duruş takviminde makine hazırlığı",
                paragraflar: [
                    "Termik santral ve maden tesislerinde yüksek kotlu bakım kalemlerinin büyük kısmı planlı duruş dönemlerine sıkışır; bu dönemde her saat pahalıdır ve makinenin duruş başlamadan sahada, kontrol edilmiş ve konumlandırılmış olması işin bitip bitmemesini belirler. Duruş listesi kot ve konuma göre önceden gruplandığında, makinenin gereksiz yer değiştirmesi önlenir.",
                    "Kritik kalemleri olan tesislerde yedeklilik senaryosu da baştan konuşulur: arıza hâlinde ne kadar sürede ikinci makine sahada olur, hangi kalem beklemeye alınabilir. Bu konuşmayı önceden yapmak, duruşun ortasında yapmaktan çok daha ucuzdur.",
                ],
            },
            {
                baslik: "Tozlu ve nemli ortamda ekipman bakım disiplini",
                paragraflar: [
                    "Linyit ocağı ve santral sahasında çalışan bir makine, standart bir sanayi holünde çalışan aynı makineden daha hızlı yıpranır — kömür tozu filtre ve radyatör tarafını, soğutma kulesi çevresindeki nem ise elektrik bağlantılarını yorar. Bu koşulu gizlemek yerine bakım planına yazıyoruz: filtre ve radyatör bakımları sıklaştırılır, elektrik bağlantıları düzenli kontrol edilir, dönüş bakımında aşınma noktaları ayrıca incelenir.",
                    "Bu maliyet teklifte görünür durumdadır; sonradan çıkan bir kalem olarak sunulmaz. Karşılığında makine, kiralama süresi boyunca performans kaybı yaşamadan çalışır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak sahamızın zemini çok gevşek, makine devrilme riski taşır mı?",
                cevap:
                    "Zemin kontrol edilmeden çalışılırsa taşır, bu yüzden park noktası seçimi bu sahalarda işin ilk maddesidir. Sıkıştırılmış dolgu ve moloz karışımı yüzeyler yağış sonrası aldatıcı olabilir; park noktaları önceden belirlenir, şüpheli yerlerde yük dağıtım plakası serilir. Operatör, duruşta tereddüt varsa çalışmayı başlatmaz — nokta değiştirilir. Bu iki önlemle ocak sahalarında yıllardır sorunsuz çalışıyoruz.",
            },
            {
                soru: "Baca çevresindeki işimiz için hangi bom boyu gerekir?",
                cevap:
                    "Baca tepesi işleri önü açık dikey hedeflerdir ve bu geometride düz uzanan teleskopik bom en kısa yoldur. Belirleyici olan bacanın yüksekliği ile makinenin park edebileceği en yakın noktanın mesafesidir; çevrede boru hattı veya çelik yapı varsa gereken bom boyu belirgin artar. Bacanın çevre fotoğrafını gönderirseniz sınıf kararını sahaya gelmeden veririz.",
            },
            {
                soru: "Soğutma kulesi çevresinde sürekli nem var, makineniz bundan etkilenir mi?",
                cevap:
                    "Etkilenmemesi için önlem alıyoruz: bu bölgede çalışan ekipmanda su geçirmez elektrik bağlantısı ve düzenli kontrol standarttır. Zemin ıslak olduğu için lastik tutuşunu ayrıca değerlendiririz; gerekirse çalışma öncesi bölgesel kurutma isteriz. Soğutma kulenizin çevresindeki genel zemin durumunu keşifte birlikte gözden geçiririz.",
            },
            {
                soru: "Kömür bant galerisinde çalışacaksınız, hangi hazırlığı istiyorsunuz?",
                cevap:
                    "Tek bir şart var ve tartışmaya kapalı: sistemin enerjisinin kesilmiş, kilitlenmiş ve etiketlenmiş olduğunun doğrulanması. Bu doğrulanmadan sepet kaldırılmaz. İkinci hazırlık erişimle ilgilidir; galeriler dar olduğu için makinenin gireceği noktayı önceden bilmemiz gerekir — bu bilgi kompakt sınıf mı yoksa daha büyük bir sınıf mı gerektiğini belirler.",
            },
            {
                soru: "Santral sahasına girişte hangi izinler ve ne kadar süre gerekiyor?",
                cevap:
                    "Giriş izni, iş izni formu, kilitleme-etiketleme uygulaması, refakatçi ataması ve gerekiyorsa gaz ölçümü standarttır; bunlar aynı gün içinde toplanmaz. Bizim tarafımızdaki belge seti — operatör yeterlilikleri, makine periyodik kontrol kayıtları, sigorta evrakları — hazır durumdadır ve talep edildiği anda iletilir. Tesis prosedürünüzün gerektirdiği süreyi baştan söylerseniz, makine ve operatörü o tarihe rezerve ederiz.",
            },
            {
                soru: "Planlı duruşumuz kısa; birden fazla makine göndermeniz mümkün mü?",
                cevap:
                    "Mümkün ve duruş işlerinde sık yaptığımız kurgu budur. Kalem listesi kot ve konuma göre bölünür, birbirinden bağımsız çalışabilecek gruplar ayrılır ve her gruba uygun sınıf atanır. Böylece duruş süresi paralel kullanılır. Karar vermeden önce iki senaryoyu rakamla karşılaştırırız: iki makineyle kısa süre mi, tek makineyle uzun süre mi. Duruş maliyetiniz yüksekse ilk seçenek genellikle açık ara öne çıkar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tavşanlı-Seyitömer havzasının linyit üretimi ve termik santral kapasitesi kamuya açık bölgesel bilgidir; tesis adı, kapasite ve rakam kullanılmamıştır. Duruş planlaması, zemin ve İSG prosedürü yaklaşımı firma pratiğidir.",
    },

    "bolge:gediz": {
        h1: "Gediz'de Enerji Nakliye Hattı ve Destek Tesisleri",
        giris:
            "Gediz, kendi başına bir maden veya santral sahası barındırmasa da, Tavşanlı havzasından çıkan bazı sevkiyat güzergâhlarının ve enerji sektörüne malzeme-ekipman sağlayan küçük ölçekli destek işletmelerinin bulunduğu bir ilçedir. Bu sayfa, ilçenin kendi tarım ağırlıklı ekonomik yapısını göz ardı etmeden, enerji sektörüyle olan dolaylı bağlantısını ve buradaki destek tesislerinin platform ihtiyacını anlatır.",
        maddeler: [
            {
                baslik: "Enerji sektörüne malzeme sağlayan küçük atölyeler",
                metin:
                    "Gediz'deki bazı metal işleme ve bakım atölyeleri, Tavşanlı'daki ocak ve santral işletmelerine yedek parça veya bakım hizmeti sağlar; bu atölyelerin kendi çatı ve aydınlatma bakımı standart bir sanayi holü profilindedir ama enerji sektörünün sevkiyat yoğunluğu, çalışma programını dolaylı olarak etkiler.",
            },
            {
                baslik: "Tavşanlı hattı üzerindeki ara durak konumu",
                metin:
                    "Merkezden Tavşanlı'ya giden bazı sevkiyat güzergâhları Gediz çevresinden geçebilir; bu, ilçedeki bir müşterinin işini aynı sevkiyata ekleyebileceği anlamına gelir. Bu tür bir birleşim, nakliye maliyetini düşürür ve tarih esnekliği bırakıldığında kolayca kurulur.",
            },
            {
                baslik: "Tarımsal depoların standart bakım ihtiyacı",
                metin:
                    "İlçenin asıl ekonomik ağırlığı tarımdır ve hububat-meyve depolarının bakım ihtiyacı, enerji sektöründen bağımsız, standart bir tarımsal yapı bakımıdır — çatı-oluk onarımı, aydınlatma, havalandırma. Bu işler enerji hattındaki sevkiyattan etkilenmez ve kendi mevsim takvimine göre planlanır.",
            },
            {
                baslik: "Acil çağrılarda hat üzerindeki makinenin yönlendirilmesi",
                metin:
                    "Tavşanlı'ya giden bir sevkiyat sırasında Gediz'de acil bir çağrı gelirse, hat üzerindeki makine kısa bir sapmayla bu çağrıya yönlendirilebilir; bu, ayrı bir sevkiyat beklemeye göre belirgin şekilde hızlıdır. Bu tür yönlendirmeler o anki sevkiyat programına bağlı olarak değerlendirilir.",
            },
            {
                baslik: "İki farklı ekonomik dokunun bir arada yönetimi",
                metin:
                    "Gediz'de hem tarımsal hem enerji sektörüne bağlı küçük ölçekli işler bir arada bulunur; biz bu iki iş ailesini birbirine karıştırmadan, her birinin kendi zamanlama mantığına (tarımda sezon, enerjide sevkiyat hattı) göre ayrı ayrı planlıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gediz'de iş ailesi ve sevkiyat modeli",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki iki farklı iş ailesinin sevkiyat modelini özetler.",
                ],
                tablo: {
                    basliklar: ["İş ailesi", "Enerji hattı bağlantısı", "Zamanlama", "Not"],
                    satirlar: [
                        ["Enerji sektörü destek atölyesi", "Dolaylı, sevkiyat trafiği", "Standart mesai", "Tavşanlı hattı önceliği dikkate alınır"],
                        ["Tavşanlı hattı ara iş", "Doğrudan", "Tur içi", "Tarih esnek önerilir"],
                        ["Tarımsal depo", "Yok, bağımsız", "Sezon dışı", "Standart"],
                        ["Acil arıza (genel)", "Hat üzeri sapma", "En hızlı", "Sevkiyat programına bağlı"],
                        ["Standart cephe-tabela", "Yok", "Esnek", "Programa kolayca eklenir"],
                    ],
                },
            },
            {
                baslik: "Ara durak modelinin işleyişi",
                paragraflar: [
                    "Merkezden Tavşanlı'ya giden düzenli sevkiyatlarımız, güzergâh üzerindeki Gediz'de kısa bir durak yapabilir. Bu model, ilçedeki müşterinin işinin acil olmadığı ve tarihte esneklik gösterdiği durumlarda en verimli sonucu verir; sevkiyat programımızı önceden paylaşır, uygun tarihi birlikte seçeriz.",
                    "Acil işlerde bu modeli beklemek yerine tekil sevkiyat yaparız; bu durumda maliyet mesafeye göre hesaplanır ve açıkça belirtilir.",
                ],
            },
            {
                baslik: "İki takvimi ayrı tutmanın gerekliliği",
                paragraflar: [
                    "Gediz'deki tarımsal işler hasat ve işleme dönemlerinin dışına, enerji sektörü destek işleri ise Tavşanlı hattındaki sevkiyat programına göre planlanır; bu iki takvim birbirinden bağımsızdır ve karıştırılması gereksiz gecikmelere yol açar.",
                    "Talep aldığımızda ilk sorduğumuz şey, işin hangi iş ailesine ait olduğudur — bu, doğru zamanlama mantığını baştan belirler ve müşteriye gerçekçi bir tarih vermemizi sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerji sektörüne malzeme sağlayan atölyemizin bakımı, Tavşanlı hattındaki işlerle çakışır mı?",
                cevap:
                    "Kısmen çakışabilir çünkü bu hat üzerindeki makine bulunurluğu, Tavşanlı'daki taleple ilişkilidir; ama atölyenizdeki standart bir bakım işi genellikle makul bir bekleme süresiyle karşılanır. İşinizi ne kadar erken bildirirseniz, uygun bir tarihe o kadar rahat yerleştiririz.",
            },
            {
                soru: "İşimiz Tavşanlı'ya giden sevkiyata eklenebilir mi?",
                cevap:
                    "Ekleyebiliriz; merkezden Tavşanlı'ya giden düzenli sevkiyatlarımız güzergâh üzerindeki Gediz'de kısa bir durak yapabilir. Bunun için işinizi tarih esnek notuyla açmanız yeterli — ilk uygun sevkiyata yerleştirir, tekil sevkiyata göre fiyat farkını size gösteririz.",
            },
            {
                soru: "Tarımsal deponuzun bakımı enerji sektöründeki yoğunluktan etkilenir mi?",
                cevap:
                    "Etkilenmez; tarımsal depo bakımı, enerji hattındaki sevkiyattan bağımsız, kendi mevsim takvimine göre planlanır — hasat ve işleme dönemlerinin dışına. Bu iki iş ailesini birbirine karıştırmadan ayrı ayrı ele alıyoruz; talep aldığımızda hangi iş ailesine ait olduğunu netleştirip ona uygun zamanlamayı sunarız.",
            },
            {
                soru: "Acil bir arızamız var, hat üzerinde makine varsa daha mı hızlı gelir?",
                cevap:
                    "Evet, hat üzerinde zaten hareket hâlinde bir makinemiz varsa kısa bir sapmayla acil çağrıya yönlendirilebilir; bu, ayrı bir sevkiyat beklemeye göre belirgin şekilde hızlıdır. Bu tür yönlendirme o anki sevkiyat programına bağlıdır ve garanti edilemez ama mümkün olduğunda önceliklidir.",
            },
            {
                soru: "Standart cephe veya tabela işimizi ne zaman planlamalıyız?",
                cevap:
                    "Bu tür işler enerji hattı bağlantısı gerektirmediği için esnektir; sektörel yoğunluğun düşük olduğu dönemlerde programa kolayca eklenir. Tarihinizi esnek bırakırsanız uygun bir aralığa yerleştirip haber veririz; acilse standart tekil sevkiyatla da hızlıca planlarız.",
            },
            {
                soru: "Gediz'in kendi bir maden veya santral sahası yok, neden bu domainde yer alıyor?",
                cevap:
                    "Çünkü ilçe, Tavşanlı havzasına giden sevkiyat güzergâhı üzerinde bulunuyor ve enerji sektörüne malzeme-hizmet sağlayan küçük ölçekli destek işletmeleri barındırıyor. Bu bağlantıyı görmezden gelip ilçeyi yok saymak yerine, hem kendi tarımsal kimliğini hem enerji hattındaki dolaylı rolünü ayrı ayrı ve dürüstçe anlatmayı tercih ettik.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gediz'in tarım ağırlıklı ekonomik yapısı ve Tavşanlı sevkiyat güzergâhına yakınlığı kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Ara durak modeli ve iki takvim ayrımı firma pratiğidir.",
    },

    "bolge:simav": {
        h1: "Simav'da Jeotermal Enerji Tesislerine Platform Kiralama",
        giris:
            "Simav, Tavşanlı'nın kömürlü termik enerjisinden tamamen farklı bir enerji kaynağıyla öne çıkar: ilçenin jeotermal kaynakları, hem enerji üretimi hem kaplıca-termal turizm amacıyla kullanılır. Bu sayfa, kardeş sayfamızdaki linyit-termik santral profilinden bilinçli olarak ayrılarak, jeotermal tesislerin ve buna bağlı kaplıca işletmelerinin kendine özgü bakım ihtiyacını anlatır; iki enerji türü aynı ilde bulunsa da çalışma koşulları birbirinden çok farklıdır.",
        maddeler: [
            {
                baslik: "Jeotermal santral ekipmanında sıcaklık ve mineral birikimi",
                metin:
                    "Jeotermal enerji üretim tesislerinde borular ve ekipman yüzeyleri, yer altından gelen sıcak suyun mineral içeriği nedeniyle zamanla kabuklanma yaşayabilir; bu, kömür tozundan tamamen farklı bir bakım disiplini gerektirir. Platform işleri genellikle boru hattı çevresi kontrolü, izolasyon bakımı ve saha aydınlatmasında yoğunlaşır; sıcak yüzeylere güvenli mesafe operatör brifinginde vurgulanır.",
            },
            {
                baslik: "Kaplıca ve termal tesislerde misafir programına uyum",
                metin:
                    "Jeotermal kaynağa bağlı kaplıca ve termal otel işletmelerinde bakım işleri, standart bir termik santral sahasından farklı olarak misafir trafiği ve konaklama programına göre planlanır; cephe, çatı ve aydınlatma bakımı, misafir yoğunluğunun düşük olduğu dönemlere veya günün sakin saatlerine yazılır.",
            },
            {
                baslik: "Sera ve tarımsal ısıtma tesislerinde jeotermal kullanım",
                metin:
                    "Jeotermal kaynağın bir kısmı bölgedeki sera ve tarımsal ısıtma sistemlerinde kullanılır; bu tesislerin çatı ve boru hattı bakımı, ısıtma sisteminin çalışma döneminin dışına (genellikle yaz ayları) planlanır. Sera yapıları hafif konstrüksiyonlu olduğu için makine ağırlığı ve zemin taşıma gücü ayrıca değerlendirilir.",
            },
            {
                baslik: "Temiz enerji sahasında farklı güvenlik önceliği",
                metin:
                    "Jeotermal sahalarda maden ocağı veya termik santraldeki gibi kömür tozu, İSG rejiminin ağırlığı farklı yönde şekillenir: burada öncelik sıcak akışkan hatlarına güvenli mesafe ve gaz emisyonu (özellikle hidrojen sülfür) kontrolüdür. Bu riskler tesis yetkilisinden önceden öğrenilir ve operatör brifingine yazılır.",
            },
            {
                baslik: "Simav'ın enerji çeşitliliğinin sevkiyat açısından anlamı",
                metin:
                    "Simav'daki jeotermal tesisler ile Tavşanlı'daki termik santral, aynı domainin hizmet verdiği iki farklı enerji türünü temsil eder; bu çeşitlilik, sevkiyat planlamasında farklı ekipman ve farklı operatör bilgisi gerektirir. Bir işin jeotermal mi yoksa termik santral sahasına mı ait olduğunu baştan netleştirmek, doğru hazırlığı garanti eder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Simav'da tesis tipi ve platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki jeotermal bağlantılı tesis tiplerinde platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Baskın risk", "Zamanlama", "Makine notu"],
                    satirlar: [
                        ["Jeotermal santral ekipmanı", "Sıcak yüzey, mineral kabuk", "Bakım penceresi", "Sıcaklık mesafesi"],
                        ["Kaplıca-termal otel", "Misafir trafiği", "Sakin dönem/saat", "Standart, iz bırakmayan"],
                        ["Sera ısıtma sistemi", "Hafif konstrüksiyon", "Isıtma dışı sezon", "Zemin taşıma kontrolü"],
                        ["Boru hattı çevresi", "Gaz emisyonu (H2S)", "Tesis onayı", "Emisyon kontrolü sonrası"],
                        ["İdari-yardımcı yapı", "Standart", "Esnek", "Standart akülü"],
                    ],
                },
            },
            {
                baslik: "İki enerji türünü ayrı tutmanın önemi",
                paragraflar: [
                    "Tavşanlı'nın kömürlü termik enerjisi ile Simav'ın jeotermal kaynağı, aynı 'enerji sektörü' başlığı altında toplanabilir görünse de sahadaki riskler ve bakım disiplini tamamen farklıdır: biri kömür tozu ve yüksek ısılı baca sistemleriyle, diğeri sıcak akışkan hatları ve mineral birikimiyle uğraşır. Bu farkı bilerek operatör ve ekipman hazırlığı yapmak, sahada yanlış varsayımla karşılaşmayı önler.",
                    "Talep aldığımızda işin hangi enerji türüne ait olduğunu netleştiririz; bu, hem doğru güvenlik brifingini hem doğru makine sınıfını baştan belirler.",
                ],
            },
            {
                baslik: "Kaplıca sezonuna göre bakım planlaması",
                paragraflar: [
                    "Simav'daki kaplıca ve termal tesislerin misafir yoğunluğu yıl boyunca dengeli dağılmaz; belirli dönemlerde belirgin şekilde artar. Cephe, çatı ve aydınlatma gibi kalemler bu yoğun dönemin dışına, mümkünse sezon geçiş haftalarına planlandığında hem makine bulunurluğu rahat olur hem işletmenin misafir akışı etkilenmez.",
                    "Sezon içinde doğan zorunlu işlerde ise kısa bloklar ve misafir trafiğinin en az olduğu saatler kullanılır; bu, misafir konforunu koruyan standart yaklaşımımızdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Jeotermal santral ekipmanınızın çevresinde çalışırken hangi riskleri dikkate alıyorsunuz?",
                cevap:
                    "Öncelikli riskler sıcak akışkan hatlarına güvenli mesafe ve gaz emisyonu (özellikle hidrojen sülfür) kontrolüdür; bu, kömürlü termik santraldeki toz ve baca riskinden farklıdır. Bu riskleri tesis yetkilinizden önceden öğrenir ve operatör brifingine yazarız. Boru ve ekipman yüzeylerindeki mineral kabuklanma da park noktası ve erişim planını etkileyebilir; bunu keşifte birlikte değerlendiririz.",
            },
            {
                soru: "Kaplıca tesisimizde misafir varken çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz ama misafir konforu önceliğimizdir. Cephe, çatı ve aydınlatma işleri, misafir yoğunluğunun düşük olduğu dönemlere veya günün sakin saatlerine planlanır. Mümkünse büyük bakım kalemlerini sezon geçiş haftalarına almanızı öneririz; bu dönemde hem makine bulunurluğu rahat hem misafir akışı etkilenmez.",
            },
            {
                soru: "Sera ısıtma sistemimizin bakımını ne zaman yapmalıyız?",
                cevap:
                    "Isıtma sisteminin çalışma döneminin dışına, genellikle yaz aylarına planlamanızı öneririz; bu dönemde sistem soğuk ve müdahaleye açıktır. Sera yapıları hafif konstrüksiyonlu olduğu için makine ağırlığı ve zemin taşıma gücünü ayrıca değerlendiririz — bu, standart bir sanayi holünden farklı bir kontrol gerektirir.",
            },
            {
                soru: "Simav'daki işiniz Tavşanlı'dakinden nasıl farklı, aynı ekip mi geliyor?",
                cevap:
                    "Sahadaki riskler tamamen farklı — Tavşanlı'da kömür tozu ve baca sistemleri, Simav'da sıcak akışkan hatları ve gaz emisyonu öncelikli risktir. Aynı operatör kadromuz her iki alanda da çalışır ama her sahaya özgü güvenlik brifingi ayrı verilir. Talebinizde hangi tesis tipiyle ilgili olduğunuzu belirtirseniz, doğru hazırlıkla geliriz.",
            },
            {
                soru: "Boru hattı çevresinde gaz riski varsa nasıl bir onay süreci işliyor?",
                cevap:
                    "Tesisin kendi emisyon kontrol prosedürüne göre; genellikle çalışma öncesi gaz ölçümü yapılır ve sonucu güvenli aralıkta çıkarsa iş başlar. Bu onay süreci tesis yetkilinizin sorumluluğundadır, bizim tarafımızda ise operatörümüzün bu riski bilerek ve gerekli koruyucu ekipmanla sahaya girmesi standarttır. Onay sürecinin ne kadar süreceğini bildirirseniz, makine ve operatörü buna göre planlarız.",
            },
            {
                soru: "Kaplıca sezonu dışında bakım yaptırırsak avantajı olur mu?",
                cevap:
                    "Olur. Sezon dışında misafir yoğunluğu düşük olduğu için çalışma penceresi geniştir ve makine bulunurluğu daha rahattır; bu iki avantaj bir araya geldiğinde toplam maliyet ve süre düşer. Yıllık bakım listenizi sezon başlamadan iletirseniz, hangi kalemin hangi geçiş haftasına yazılacağını birlikte planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Simav'ın jeotermal kaynakları ve buna bağlı kaplıca-termal turizm ile sera ısıtma kullanımı kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Sıcak akışkan/gaz riski ayrımı ve sezon planlaması firma pratiğidir.",
    },

    "bolge:bilecik-osb-cevre-ili": {
        h1: "Bilecik ve Çevresinde Enerji Sektörü Destek Hizmeti",
        giris:
            "Bilecik, Tavşanlı havzasının doğu komşusu olarak, linyit-termik santral kuşağına ekipman ve hizmet sağlayan bazı işletmelerin bulunduğu bir komşu ildir. Bu sayfa, Bilecik OSB'deki enerji sektörü destek tesislerine ve merkez-Tavşanlı hattıyla olan sevkiyat bağlantısına odaklanır; bölgenin kendi genel sanayi profili (metal, yapı malzemesi) enerji sektörüyle karıştırılmadan ayrı ele alınır.",
        maddeler: [
            {
                baslik: "OSB'deki enerji ekipmanı bakım-onarım atölyeleri",
                metin:
                    "Bilecik OSB içinde, maden ve santral ekipmanının bakım-onarımını yapan bazı metal işleme atölyeleri bulunur; bu atölyelerin çatı, aydınlatma ve vinç kirişi çevresi işleri standart bir ağır sanayi holü profilindedir ama enerji sektörüne bağlı sevkiyat programı, çalışma zamanlamasını dolaylı etkiler.",
            },
            {
                baslik: "Tavşanlı hattı ile Bilecik arasında sevkiyat birleşimi",
                metin:
                    "Merkez-Tavşanlı hattı ile Bilecik OSB'ye giden sevkiyat, coğrafi olarak farklı yönlerde olsa da, aynı hafta içinde iki işin varlığı hâlinde sevkiyat programımız bu ikisini değerlendirip en verimli rotayı çıkarabilir; bu, tekil sevkiyata göre maliyet avantajı sağlar.",
            },
            {
                baslik: "OSB'nin genel sanayi profiliyle enerji sektörünün ayrımı",
                metin:
                    "Bilecik OSB'nin geneli enerji sektörüne değil, farklı sanayi kollarına (metal, yapı malzemesi) hizmet eder; bu yüzden bölgedeki her talebi enerji sektörü bağlamında değerlendirmiyoruz. İşin enerji sektörüne bağlı olup olmadığını (kimin için üretim yapıldığını) keşifte netleştiririz — bu, doğru öncelik ve doğru planlamayı belirler.",
            },
            {
                baslik: "Acil çağrılarda öncelik değerlendirmesi",
                metin:
                    "Bilecik'teki bir işletme, doğrudan Tavşanlı'daki bir santral veya ocak için kritik bir yedek parça üretiyorsa, bu işletmedeki acil bir platform çağrısı, üretim zincirindeki bu bağımlılık nedeniyle standart işlere göre öncelik kazanabilir. Bu önceliklendirme, çağrı sırasında işin niteliğinin açıkça belirtilmesine bağlıdır.",
            },
            {
                baslik: "Mesafe ve sevkiyat ekonomisi",
                metin:
                    "Bilecik'in hem merkeze hem Tavşanlı'ya olan mesafesi, tekil bir işte nakliye maliyetinin payını artırır; bu yüzden bölgedeki işleri tarih esnekliğiyle veya komşu tesislerle birleştirmeyi öneriyoruz. Bu, tekil sevkiyata göre belirgin bir maliyet avantajı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bilecik'te iş tipi ve enerji sektörü bağlantısı",
                paragraflar: [
                    "Aşağıdaki tablo, bölgedeki iş tiplerinin enerji sektörüyle bağlantısını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Enerji sektörü bağlantısı", "Öncelik", "Sevkiyat modeli"],
                    satirlar: [
                        ["Maden/santral ekipmanı atölyesi", "Doğrudan (tedarikçi)", "Yüksek (kritik parça)", "Tur içi veya öncelikli"],
                        ["Genel metal/yapı malzemesi OSB", "Yok", "Standart", "Tur içi"],
                        ["Acil arıza (tedarikçi işletme)", "Doğrudan", "Yüksek", "Hızlandırılmış"],
                        ["Standart bakım işleri", "Yok", "Standart", "Esnek, tur içi"],
                        ["Tekil özel iş", "Değişken", "Standart", "Ayrı sevkiyat"],
                    ],
                },
            },
            {
                baslik: "Tedarik zincirindeki bağımlılığın önceliğe etkisi",
                paragraflar: [
                    "Bilecik'teki bir atölyenin doğrudan Tavşanlı'daki bir santral veya ocak için kritik parça ürettiği durumlarda, bu atölyedeki bir ekipman arızası geriye doğru üretim zincirini etkileyebilir. Bu bağımlılığı bildiğimiz için, bu tür işletmelerin acil çağrılarına standart işlere göre daha yüksek öncelik veriyoruz.",
                    "Bu önceliklendirmenin işlemesi için çağrı sırasında işletmenizin hangi tesise tedarik yaptığını belirtmeniz yeterlidir; bu bilgi bizim yönlendirme kararımızı doğrudan etkiler.",
                ],
            },
            {
                baslik: "İki hattı birlikte değerlendirmenin faydası",
                paragraflar: [
                    "Merkez-Tavşanlı hattı ile Bilecik OSB'ye giden sevkiyat, aynı hafta içinde değerlendirildiğinde, en verimli rotayı çıkarmak mümkün olur; bu, iki ayrı sevkiyata göre hem zaman hem maliyet tasarrufu sağlar. Bizim tarafımızdaki katkı, haftalık sevkiyat programını bu iki hattı birlikte gözeterek kurmaktır.",
                    "Bölgedeki işlerinizi mümkün olduğunca erken bildirmeniz, bu birleşimin kurulma şansını doğrudan artırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemiz Tavşanlı'daki bir santral için parça üretiyor, bu bize öncelik sağlar mı?",
                cevap:
                    "Sağlayabilir. Doğrudan santral veya ocak için kritik parça üreten işletmelerin acil çağrılarına, bu üretim zincirindeki bağımlılık nedeniyle standart işlere göre daha yüksek öncelik veriyoruz. Çağrı sırasında hangi tesise tedarik yaptığınızı belirtmeniz, bu önceliği doğru şekilde uygulamamızı sağlar.",
            },
            {
                soru: "Bilecik OSB'deki genel sanayi işimiz enerji sektörüyle ilgisi yoksa nasıl planlanır?",
                cevap:
                    "Standart bir OSB işi olarak, enerji hattı önceliğinden bağımsız şekilde planlanır. Merkez-Tavşanlı ve Bilecik hatları aynı hafta içinde değerlendirildiğinde, işiniz uygun bir sevkiyat programına eklenir. Enerji sektörüyle bir bağlantınız olup olmadığını keşifte netleştiririz; bu, doğru planlamayı baştan belirler.",
            },
            {
                soru: "Merkez-Tavşanlı hattı ile Bilecik arasındaki işleri birleştirmek mümkün mü?",
                cevap:
                    "Mümkün; aynı hafta içinde iki işin varlığı hâlinde sevkiyat programımız bu ikisini değerlendirip en verimli rotayı çıkarabilir. Bunun için işlerin tarihte esnek olması yeterlidir. Konumları ve tercih ettiğiniz tarih aralığını verirseniz tek programda bitirecek bir rota çıkarırız.",
            },
            {
                soru: "Mesafe nedeniyle nakliye maliyeti yüksek çıkar mı?",
                cevap:
                    "Tekil bir işte mesafe payı hissedilir; bu yüzden işlerinizi tarih esnekliğiyle veya komşu tesislerle birleştirmenizi öneriyoruz. Teklifte nakliye payını ayrı satır olarak gösteririz; birleşim kurulduğunda bu payın nasıl düştüğü tabloda görünür.",
            },
            {
                soru: "Acil bir arızamız var, ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Süre, işletmenizin enerji sektörüne olan bağlantısına ve o anki sevkiyat programımıza bağlıdır. Doğrudan santral veya ocak için kritik üretim yapıyorsanız öncelik verilir ve müdahale hızlanır. Standart bir işletmeyseniz, bölgedeki makine bulunurluğuna göre süre belirlenir. Arızanın türünü, konumunu ve işletmenizin niteliğini ilk çağrıda net verirseniz doğru önceliği uygularız.",
            },
            {
                soru: "Bilecik'in bu sayfası neden enerji sektörüne odaklanıyor, OSB'nin geneli enerji değil ki?",
                cevap:
                    "Doğru tespit — OSB'nin geneli farklı sanayi kollarına hizmet ediyor. Bu sayfa, spesifik olarak enerji sektörüne tedarik yapan veya Tavşanlı hattıyla sevkiyat bağlantısı olan işletmelere odaklanıyor; OSB'deki genel sanayi işleriniz için de hizmet veriyoruz, sadece bu sayfanın odağı enerji bağlantısı olan kısmı. İşinizin niteliğini belirtirseniz, size en uygun planlamayı sunarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik'in Kütahya ve Tavşanlı havzasına komşuluğu kamuya açık bölgesel bilgidir; işletme adı, kapasite ve rakam kullanılmamıştır. Tedarik zinciri önceliklendirmesi ve hat birleştirme firma pratiğidir.",
    },

    "bolge:usak-osb-cevre-ili": {
        h1: "Uşak OSB Tekstil Fabrikalarında Kazan Dairesi ve Enerji Ekipmanı Bakımı",
        giris:
            "Uşak'ın OSB'sinde boyama, apre ve terbiye hatları çalıştıran tekstil fabrikalarının büyük kısmı, üretimi sürdürebilmek için kendi buhar kazanı, kojenerasyon ünitesi veya yüksek kapasiteli elektrik dağıtım panosuna sahiptir. Bu, işletmenin sanayi sınıfının 'tekstil' olarak kalmasıyla çelişmez; sadece üretim sürecinin içinde ayrı bir enerji ekipmanı katmanı bulunur. Bu sayfa, Uşak'ın tekstil kimliğini değiştirmeden, o katmandaki kazan-buhar-elektrik bakımını nasıl planladığımızı; Tavşanlı havzasındaki termik santral kazan dairelerinde edindiğimiz tecrübenin burada nasıl işe yaradığını anlatır.",
        maddeler: [
            {
                baslik: "Buhar kazanı ve hat basıncı bakımı",
                metin:
                    "Boyama ve apre süreçleri kesintisiz buhar akışına dayanır; kazanın verimsiz çalışması ya da hat basıncındaki düşüş doğrudan üretim hızını etkiler. Kazan dairesindeki periyodik bakımı, üretim durmadan yapılabilecek şekilde vardiya aralarına planlarız.",
            },
            {
                baslik: "Kojenerasyon ve jeneratör bakım programı",
                metin:
                    "Kendi elektriğini üreten bazı büyük tesislerde kojenerasyon ünitesi ve yedek jeneratör, hem ısı hem güç kaynağı olarak çalışır; bu ikili sistemin senkronizasyonu ve soğutma devresi, tek başına elektrik bakımından farklı bir uzmanlık gerektirir.",
            },
            {
                baslik: "Yüksek güç tüketen makine panolarının izlenmesi",
                metin:
                    "Ram makinesi, kurutma silindiri gibi yüksek güç çeken ekipmanların bağlı olduğu panolarda ısınma ve gerilim dalgalanması riski standart tekstil holündekinden daha yüksektir; bu panoları ayrı bir izleme takvimine alırız.",
            },
            {
                baslik: "Standart dokuma-iplik işleriyle ayrım",
                metin:
                    "OSB'deki dokuma ve iplik hollerinin çoğunda kazan veya kojenerasyon bulunmaz; buradaki iş aydınlatma, klima ve genel elektrik bakımından ibarettir. Talep aldığımızda tesiste kazan dairesi olup olmadığını netleştiririz, çünkü bu iki iş kolunun bakım takvimi ve ekip yapısı farklıdır.",
            },
            {
                baslik: "Termik santral kazan tecrübesinin buraya taşınması",
                metin:
                    "Tavşanlı havzasındaki santral kazan dairelerinde çalışan ekibimiz, büyük ölçekli buhar sistemlerinin arıza belirtilerini erken tanır; bu tecrübe, Uşak'taki tekstil kazanlarında da aynı arıza kalıplarını daha hızlı teşhis etmemizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Uşak OSB'de enerji ekipmanı türleri ve bakım profili",
                paragraflar: [
                    "Aşağıdaki tablo, OSB'deki tekstil tesislerinde karşılaştığımız enerji ekipmanı türlerini ve bakım yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["Ekipman türü", "Bulunduğu tesis profili", "Bakım sıklığı", "Öncelik"],
                    satirlar: [
                        ["Buhar kazanı", "Boyama/apre tesisi", "Periyodik + arıza bazlı", "Yüksek (üretim durur)"],
                        ["Kojenerasyon ünitesi", "Büyük ölçekli tesis", "Aylık kontrol", "Yüksek"],
                        ["Yedek jeneratör", "Kojenerasyonlu tesis", "Üç aylık test", "Orta-yüksek"],
                        ["Ram/kurutma pano hattı", "Apre-terbiye hattı", "Periyodik izleme", "Orta"],
                        ["Genel aydınlatma-klima", "Dokuma/iplik holü", "Standart takvim", "Standart"],
                    ],
                },
            },
            {
                baslik: "Kazan dairesi arızalarında müdahale sırası",
                paragraflar: [
                    "Kazan veya kojenerasyon arızası üretim hattını doğrudan durdurabildiği için, bu tür çağrılar standart hol bakımına göre önceliklidir. Arıza bildirilirken kazanın basınç düşüşü mü, yakıt besleme sorunu mu, yoksa kontrol panosu arızası mı olduğunu belirtmeniz, doğru ekibin doğru ekipmanla gelmesini sağlar.",
                    "Kojenerasyon senkronizasyon hatalarında elektrik ve mekanik ekiplerimiz birlikte gider; bu ikili müdahale, tek uzmanlık alanıyla çözülemeyecek karışık arızalarda süre kaybını azaltır.",
                ],
            },
            {
                baslik: "Basınçlı kap mevzuatı ve periyodik kontrol takibi",
                paragraflar: [
                    "Buhar kazanları basınçlı kap sınıfına girdiği için periyodik test ve işletme belgesi takibi işletmenin kendi sorumluluğundadır; biz bu takibi yapmayız ama periyodik testten önceki hazırlık bakımını (conta, valf, emniyet ventili kontrolü) planlayabiliriz.",
                    "Test tarihinizi bildirirseniz, hazırlık bakımını o tarihten yeterince önce tamamlayacak şekilde takvime alırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizde buhar kazanı var, bakımını siz mi yapıyorsunuz?",
                cevap:
                    "Kazan dairesindeki periyodik bakımı ve arıza müdahalesini yapıyoruz; basınçlı kap mevzuatı gereği periyodik test ve işletme belgesi süreci işletmenizin kendi sorumluluğunda kalıyor. Test öncesi hazırlık bakımını (conta, valf, emniyet ventili) test tarihinize göre planlayabiliriz.",
            },
            {
                soru: "Kojenerasyon ünitemizde senkronizasyon sorunu yaşıyoruz, kim ilgilenir?",
                cevap:
                    "Kojenerasyon senkronizasyon arızalarında elektrik ve mekanik ekiplerimiz birlikte gelir; bu, hem güç hem ısı tarafını aynı anda değerlendirmemizi sağlar. Arıza bildirirken senkronizasyon hatasının ne zaman başladığını ve hangi uyarı kodunun göründüğünü belirtmeniz teşhisi hızlandırır.",
            },
            {
                soru: "OSB'deki dokuma holümüzde kazan yok, standart aydınlatma bakımı istiyoruz, öncelik farkı olur mu?",
                cevap:
                    "Kazan dairesi olmayan standart hollerde iş, genel aydınlatma-klima bakım takvimine göre planlanır; kazanlı tesislerdeki üretim durdurma riski burada söz konusu olmadığı için önceliklendirme farklı işler. Talep alırken tesisinizde kazan veya kojenerasyon olup olmadığını sorarız, bu ayrım baştan netleşir.",
            },
            {
                soru: "Ram makinesi panomuzda ısınma fark ettik, acil mi değerlendirilir?",
                cevap:
                    "Yüksek güç çeken makine panolarındaki ısınma, gerilim dalgalanmasının erken belirtisi olabileceği için bunu öncelikli değerlendiriyoruz. Panonun hangi makineye bağlı olduğunu ve ısınmanın ne zaman fark edildiğini belirtirseniz, kontrolü mümkün olan en kısa sürede planlarız.",
            },
            {
                soru: "Termik santral bakım tecrübenizin tekstil kazanına ne katkısı oluyor?",
                cevap:
                    "Büyük ölçekli buhar sistemlerinde arıza kalıpları benzer şekilde ilerler; santral kazan dairelerinde gördüğümüz basınç düşüşü, yakıt besleme ve valf arızası belirtilerini tanımak, tekstil kazanlarındaki aynı belirtileri daha erken fark etmemizi sağlıyor. Ölçek farklı olsa da fiziksel ilkeler aynı kalıyor.",
            },
            {
                soru: "Uşak tekstil ili olarak biliniyor, neden enerji ekipmanına odaklı bir sayfa var?",
                cevap:
                    "Çünkü OSB'deki boyama ve apre tesislerinin önemli bir kısmı, üretim sürecinin gereği olarak kendi kazan, kojenerasyon veya yüksek kapasiteli elektrik altyapısına sahip; bu sayfa o özel ekipman katmanına odaklanıyor. Uşak'ın genel kimliğinin tekstil olduğunu biliyoruz — kazanı olmayan standart hollerde de aynı hizmeti sunuyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Uşak OSB'de boyama-apre tesislerinin buhar/kojenerasyon kullanımı ve basınçlı kap mevzuatının işletme sorumluluğunda olduğu bilgisi kamuya açık genel sanayi bilgisidir; işletme adı, kapasite ve rakam kullanılmamıştır. Kazan dairesi önceliklendirmesi ve santral tecrübesi transferi firma pratiğidir.",
    },

    "bolge:tuncbilek-termik-santral-bolgesi": {
        h1: "Tunçbilek Termik Santral Bölgesinde Bakım Disiplini ve Platform Kiralama",
        giris:
            "Tunçbilek, Tavşanlı'nın linyit-termik santral kuşağının en eski yerleşimlerinden biridir; buradaki santral çevresinde onlarca yıldır süregelen bir işletme kültürü vardır ve bu kültür, sahaya giren her dış ekip için belirli bir bakım disiplinini önceden şart koşar. Kardeş sayfamız 'bolge:tavsanli' ilçenin genel linyit-termik profilini anlatırken, bu sayfa doğrudan Tunçbilek santral çevresindeki sahaya odaklanır: kömür tozunun her yüzeye çöktüğü bir atmosferde ekipman seçimi, iş izni prosedürü ve zamanlama, standart bir sanayi holünden çok farklı bir mantıkla ilerler. Buradaki iş, tek seferlik bir bakım çağrısı değil, santralin kendi işletme takvimine sıkı sıkıya bağlı bir disiplindir.",
        maddeler: [
            {
                baslik: "Kömür tozu atmosferinde ekipman seçimi",
                metin:
                    "Tunçbilek santral sahasında havadaki kömür tozu yoğunluğu, özellikle kömür stok sahası ve nakil bant hatları çevresinde yüksektir; bu ortamda çalışacak platform, filtre ve elektrik bağlantı noktaları toz sızdırmazlığı açısından değerlendirilir. Dizel motorlu makineler, açık havadaki geniş sahalarda tercih edilse de, kapalı türbin binası veya kontrol odası yakınında akülü sınıfa geçilir; bu geçiş kararı sahaya girmeden önce santral yetkilisiyle netleştirilir.",
            },
            {
                baslik: "Santral iş izni prosedürünün zamanlamaya etkisi",
                metin:
                    "Santral sahasına giren her ekip, tesisin kendi iş güvenliği biriminden çalışma izni almak zorundadır; bu izin süreci genellikle bir-iki günlük bir öncül hazırlık ister — sahaya giriş kartı, iş tanımı formu, risk değerlendirmesi. Bu prosedürü bilmeyen bir dış ekip, sahaya vardığında beklenmedik bir gecikmeyle karşılaşabilir; biz Tunçbilek'teki işleri planlarken bu izin süresini takvime baştan dahil ederiz, böylece müşteriye verdiğimiz tarih gerçekçi kalır.",
            },
            {
                baslik: "Soğutma kulesi ve baca çevresinde erişim",
                metin:
                    "Santralin soğutma kuleleri ve baca gövdesi çevresindeki bakım-kontrol işleri, yükseklik ve sıcak yüzeye yakınlık nedeniyle özel bir dikkat gerektirir; bu bölgelerde çalışma daima santralin kendi duruş veya düşük yük penceresine denk getirilir, tam kapasite çalışan bir üniteye bitişik alanda platformla iş yapılmaz. Sepet konumu ve erişim yönü, baca çevresindeki rüzgâr ve sıcak hava akımı göz önünde bulundurularak seçilir.",
            },
            {
                baslik: "Kömür nakil bant hattı çevresinde güvenli mesafe",
                metin:
                    "Kömürü stok sahasından kazan dairesine taşıyan bant hatları, santral sahasının en uzun ve en sürekli hareket eden ekipman grubudur; bu hatların üstünde veya çok yakınında çalışma, bandın durdurulduğu kısa bakım pencerelerine sıkıştırılır. Bandın tamamen durdurulamadığı durumlarda, platform bant hattından güvenli mesafede konumlandırılır ve çalışma alanı fiziksel bariyerle santral ekibi tarafından işaretlenir.",
            },
            {
                baslik: "Uzun süreli sahada operatör ve santral ekibi koordinasyonu",
                metin:
                    "Tunçbilek gibi kapsamlı bir santral sahasında birkaç günü bulan bir bakım işi, tek bir operatörün kararıyla değil, santralin kendi vardiya amiriyle sürekli koordinasyonla ilerler; her gün sahaya giriş öncesi kısa bir brifing yapılır ve o günün özel riskleri (örneğin planlı bir bant durdurması veya yük değişimi) operatöre aktarılır. Bu günlük koordinasyon, sahadaki değişken koşullara karşı en pratik güvenlik önlemidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tunçbilek santral sahasında bölge tipine göre çalışma kuralı",
                paragraflar: [
                    "Aşağıdaki tablo, santral sahasının farklı bölgelerinde geçerli olan baskın kısıtı ve zamanlama mantığını özetler.",
                ],
                tablo: {
                    basliklar: ["Saha bölgesi", "Baskın kısıt", "Zamanlama", "Makine notu"],
                    satirlar: [
                        ["Kömür stok sahası", "Toz yoğunluğu", "Rüzgâr durumuna göre", "Filtre kontrolü sıklaştırılır"],
                        ["Nakil bant hattı", "Hareketli ekipman", "Bant durdurma penceresi", "Güvenli mesafe/bariyer"],
                        ["Soğutma kulesi/baca", "Yükseklik, sıcak hava", "Duruş/düşük yük", "Rüzgâr yönü değerlendirilir"],
                        ["Kazan dairesi çevresi", "Sıcaklık, basınç", "Planlı duruş", "Isıl koruma donanımı"],
                        ["İdari-kontrol binası", "Standart", "Esnek", "Akülü, toz sızdırmaz"],
                    ],
                },
            },
            {
                baslik: "İzin süreci neden takvimin bir parçası olmalı",
                paragraflar: [
                    "Santral sahasına özgü iş izni prosedürünü göz ardı ederek verilen bir teslimat tarihi, sahaya varıldığında bozulmaya mahkûmdur; bu yüzden Tunçbilek'teki her iş için izin başvurusunu, sahaya asıl giriş tarihinden en az bir-iki gün önce başlatırız. Bu, müşteriye verdiğimiz tarihin gerçek bir taahhüt olmasını sağlar — sahada beklenmedik bir izin gecikmesiyle karşılaşma riski önceden elenmiş olur.",
                    "İzin süreci santralin kendi yoğunluğuna göre bazen uzayabilir; böyle bir durumda güncellemeyi anında müşteriye iletiriz, sürpriz bir gecikme yaşatmayız.",
                ],
            },
            {
                baslik: "Kömür tozunun makine bakımına yansıması",
                paragraflar: [
                    "Tunçbilek sahasında birkaç gün çalışan bir makine, standart bir sanayi holündeki aynı süreye göre belirgin şekilde daha fazla toz maruziyeti alır; bu, iş sonrası temizlik ve filtre kontrolünü zorunlu bir adım hâline getirir. Uzun süreli işlerde makinenin günlük temizliğini sahada, kısa bir rutin olarak uygularız — bu, ertesi gün performansını korur ve iş bitiminde makinenin bir sonraki işe hazır dönmesini sağlar.",
                    "Bu ek bakım adımı maliyete önceden yansıtılır; sahadan çıkışta sürpriz bir ek ücretle karşılaşılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tunçbilek santral sahasına girmek için hangi belgeler gerekiyor?",
                cevap:
                    "Santralin kendi iş güvenliği biriminin talep ettiği giriş kartı başvurusu, iş tanımı formu ve genellikle bir risk değerlendirmesi gerekir; bu belgeler santral tarafından istenir, biz kendi ekipmanımız ve operatör belgelerimizle bu sürece destek veririz. Süreç genellikle bir-iki gün sürer; bu süreyi işin teslimat tarihine baştan dahil ederiz ki sahaya vardığınızda beklenmedik bir gecikme yaşamayasınız.",
            },
            {
                soru: "Kömür stok sahasında toz yoğunluğu makineye zarar verir mi?",
                cevap:
                    "Uzun süreli maruziyet, filtre ve elektrik bağlantı noktalarında birikime yol açabilir; bu yüzden stok sahası çevresinde çalışan makinelerde günlük temizlik ve filtre kontrolünü rutin hâline getiririz. Rüzgârın toz yoğunluğunu artırdığı günlerde çalışma saatini veya konumunu santral yetkilisiyle birlikte yeniden değerlendiririz; bu, hem makinenin hem operatörün korunması içindir.",
            },
            {
                soru: "Bant hattı çalışırken yakınında iş yapabilir misiniz?",
                cevap:
                    "Bandın tamamen durdurulamadığı durumlarda, platform banttan güvenli mesafede konumlandırılır ve çalışma alanı fiziksel bariyerle işaretlenir; bandın doğrudan üstünde veya çok yakınında çalışma ise bandın durdurulduğu kısa bakım pencerelerine sıkıştırılır. Bu pencereler santralin kendi programına bağlıdır ve genellikle önceden bildirilir; biz de işimizi bu pencereye göre planlarız.",
            },
            {
                soru: "Soğutma kulesi çevresindeki işi santral tam kapasitedeyken yapabilir miyiz?",
                cevap:
                    "Genellikle hayır; bu bölgedeki çalışma daima santralin duruş veya düşük yük penceresine denk getirilir çünkü sıcak hava akımı ve yükseklik birlikte önemli bir risk oluşturur. Santralin planlı duruş takvimini bildiğinizde bize önceden haber verirseniz, işi bu pencereye yerleştirir ve gereksiz bekleme süresini en aza indiririz.",
            },
            {
                soru: "Birkaç günlük bir işte her gün aynı izinle mi giriyorsunuz?",
                cevap:
                    "Giriş kartı genellikle işin süresi için bir kez alınır ama her gün sahaya girmeden önce kısa bir brifing yapılır; bu brifingde o günün özel riskleri (planlı bir bant durdurması, yük değişimi gibi) operatöre aktarılır. Bu günlük koordinasyon, santral vardiya amiriyle sürekli iletişim hâlinde kalmamızı ve sahadaki değişken koşullara hızlı uyum sağlamamızı mümkün kılar.",
            },
            {
                soru: "Tunçbilek'teki işiniz kardeş sayfanızdaki genel Tavşanlı anlatımından nasıl farklı?",
                cevap:
                    "Genel Tavşanlı sayfamız ilçenin linyit ocağı ve termik santral profilini bütün olarak anlatırken, bu sayfa doğrudan Tunçbilek santral sahasının kendi iş izni prosedürünü, bölge bazlı çalışma kısıtlarını ve toz-bant hattı gibi somut saha koşullarını ele alır. Genel bir Tavşanlı işiniz varsa kardeş sayfamızdan devam edebilirsiniz; doğrudan Tunçbilek santral sahasında planlı bir işiniz varsa bu sayfadaki bilgiler sahaya özgüdür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Tunçbilek'in Tavşanlı linyit-termik santral kuşağındaki köklü santral yerleşimi olduğu kamuya açık bölgesel bilgidir; işletme/tesis adı ve rakam kullanılmamıştır. İzin süreci takvimlemesi, bölge bazlı çalışma kısıtları ve günlük koordinasyon firma pratiğidir.",
    },

    "bolge:seyitomer-termik-santral-bolgesi": {
        h1: "Seyitömer Termik Santral Bölgesinde Duruş Dönemi Bakım Planlaması",
        giris:
            "Seyitömer, Tavşanlı havzasının diğer büyük termik santral yerleşimidir ve Tunçbilek'ten farklı olarak bu sayfanın ekseni günlük saha koşulları değil, santralin periyodik duruş (bakım durdurması) dönemleridir. Bir termik santral ünitesi, belirli aralıklarla planlı bakım için tamamen veya kısmen devre dışı bırakılır; bu duruş penceresi, normalde erişilemeyen ekipmanın (kazan iç yüzeyi, baca gövdesi, türbin çevresi) kontrol ve bakımı için tek fırsattır ve bu yüzden kısa sürede yoğun bir iş listesi ortaya çıkar. Bu sayfa, Seyitömer'deki duruş dönemlerinde platform talebinin nasıl yoğunlaştığını ve bu yoğunluğun önceden nasıl planlanması gerektiğini anlatır.",
        maddeler: [
            {
                baslik: "Duruş döneminin santral takvimindeki yeri",
                metin:
                    "Termik santral üniteleri, üretimi sürdürebilmek için belirli aralıklarla planlı duruşa alınır; bu duruş tarihleri santral tarafından aylar öncesinden belirlenir çünkü hem içeride hem dışarıda çok sayıda ekip ve kaynağın koordine edilmesi gerekir. Duruş tarihi kesinleştiğinde, santral çevresinde hizmet veren bizim gibi tedarikçilere de erken haber verilmesi, hazırlık için kritik zaman kazandırır.",
            },
            {
                baslik: "Duruş penceresinde erişilebilir hâle gelen alanlar",
                metin:
                    "Ünite tam kapasite çalışırken kazan iç yüzeyi, baca gövdesinin üst kesimleri ve türbin salonu çevresindeki bazı noktalar sıcaklık veya hareketli ekipman nedeniyle erişilemez; duruş döneminde bu alanlar soğur ve durur, bu da platform erişimine açılır. Bu kısa pencere içinde, normalde aylarca bekleyen kontrol ve bakım kalemleri bir arada sıkışır — bu yüzden duruş dönemi, santral çevresindeki en yoğun platform talebi dönemidir.",
            },
            {
                baslik: "Kısa sürede yoğun talep ve makine planlaması",
                metin:
                    "Duruş dönemi genellikle birkaç haftayla sınırlıdır ve bu süre içinde santral kendi ekipleri dışında birden fazla dış tedarikçiyle eşzamanlı çalışır; bu, platform talebinin de aynı kısa pencereye yığılması anlamına gelir. Bu yoğunluğu karşılamak için, duruş tarihi netleştiği anda hangi makine sınıfından kaç adet gerekeceğini önceden planlarız ve gerekirse filomuzun ilgili sınıfını bu döneme rezerve ederiz.",
            },
            {
                baslik: "Duruş dışı dönemde sınırlı ve öncelikli erişim",
                metin:
                    "Ünite çalışır durumdayken santral çevresinde platform ihtiyacı devam eder ama bu, duruş dönemine göre çok daha sınırlı ve nokta bazlı bir taleptir — idari bina bakımı, dış çevre aydınlatması, stok sahası işleri gibi üretimi doğrudan etkilemeyen kalemler. Bu dönemki işler, duruş dönemindeki yoğun programın dışında kaldığı için daha esnek bir tarihle planlanabilir.",
            },
            {
                baslik: "Erken bildirimin duruş döneminde kazandırdığı avantaj",
                metin:
                    "Duruş tarihi kesinleştiğinde bize ne kadar erken haber verilirse, o dönem için makine ve operatör ayırma şansımız o kadar yüksek olur; son dakika gelen bir talep, o dönemde tüm filo zaten diğer duruş işlerine ayrılmış olabileceği için karşılanamayabilir veya beklemeli olabilir. Bu yüzden Seyitömer çevresinde düzenli çalışan işletmelere, santralin bir sonraki duruş tarihini öğrendikleri anda bizimle paylaşmalarını öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Duruş dönemi ile normal işletme döneminin karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, Seyitömer santral çevresinde duruş dönemi ile normal işletme dönemi arasındaki platform talebi farkını özetler.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Erişilebilir alan", "Talep yoğunluğu", "Planlama süresi"],
                    satirlar: [
                        ["Planlı duruş", "Kazan içi, baca, türbin çevresi", "Çok yüksek, kısa pencere", "Aylar öncesinden"],
                        ["Normal işletme", "İdari, çevre, stok sahası", "Düşük-orta, dağınık", "Günler-haftalar öncesinden"],
                        ["Acil arıza (duruş dışı)", "Değişken", "Anlık, öngörülemez", "Aynı gün"],
                    ],
                },
            },
            {
                baslik: "Duruş tarihini öğrenir öğrenmez atılacak ilk adım",
                paragraflar: [
                    "Seyitömer çevresinde bakım-onarım hizmeti veren işletmelerin çoğu, santralin duruş tarihini kendi resmi kanallarından veya santralle olan iş ilişkisinden öğrenir; bu bilgiye ulaştığınız anda bizimle paylaşmanız, o dönem için makine rezervasyonu yapmamızın ilk adımıdır. Rezervasyon kesin bir sözleşme anlamına gelmez, ama o döneme dair niyet beyanınızı bilmemiz, filomuzu planlarken sizi öncelikli listeye almamızı sağlar.",
                    "Duruş tarihi yaklaştıkça (genellikle son bir-iki ay içinde) iş kapsamınızı netleştirdiğinizde, kesin makine sayısı ve süre üzerinden bağlayıcı bir program kurarız.",
                ],
            },
            {
                baslik: "Duruş sonrası ilk hafta yoğunluğu",
                paragraflar: [
                    "Duruş dönemi bittiğinde bile, santral çevresinde bir miktar tamamlanmamış iş veya son kontrol kalemi kalabilir; bu, duruş sonrası ilk haftada da bir miktar platform talebinin devam etmesine yol açar. Bu geçiş haftasını da planımıza dahil ederiz — duruş döneminin resmi bitiş tarihinden hemen sonra makinelerimizi tamamen başka bir bölgeye çekmek yerine, kısa bir geçiş süresi için sahada tutarız.",
                    "Bu yaklaşım, duruş programının son anda uzaması veya bir kalemin ertelenmesi gibi durumlarda esneklik sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Seyitömer'de duruş döneminin ne zaman olacağını nasıl öğreniyorsunuz?",
                cevap:
                    "Duruş tarihini biz kendimiz belirlemeyiz; bu bilgi santralin kendi işletme takviminden gelir ve genellikle santralle doğrudan iş ilişkisi olan işletmeler bu tarihi bize aktarır. Sizin de santralle bağlantınız varsa ve duruş tarihini öğrendiyseniz, bunu bize en erken şekilde iletmeniz, o dönem için makine planlamamızı doğrudan kolaylaştırır.",
            },
            {
                soru: "Duruş döneminde talep bu kadar yoğunsa, son dakika başvursak makine bulabilir miyiz?",
                cevap:
                    "Bulma ihtimali düşer çünkü duruş dönemi kısa bir pencerede yoğunlaşır ve filomuzun ilgili sınıfı genellikle önceden rezerve edilmiş olur. Yine de son dakika bir ihtiyaç doğarsa müsaitlik durumumuzu kontrol eder, mümkünse alternatif bir makine sınıfıyla çözüm sunarız; ama en gerçekçi yaklaşım, duruş tarihini öğrenir öğrenmez bizimle iletişime geçmenizdir.",
            },
            {
                soru: "Duruş dışı dönemde santral çevresinde acil bir işimiz olursa ne kadar sürede gelirsiniz?",
                cevap:
                    "Normal işletme döneminde talep yoğunluğu duruş dönemine göre çok daha düşük olduğu için acil çağrılara genellikle daha hızlı yanıt verebiliriz; bu dönemde filomuzun büyük kısmı başka bölgesel işlere dağılmış olsa da bölgesel önceliklendirmeyle en yakın uygun makineyi yönlendiririz. Kesin süre, o anki bölgesel makine dağılımına bağlıdır.",
            },
            {
                soru: "Kazan içi bakım için hangi makine sınıfı kullanılıyor?",
                cevap:
                    "Kazan içi ve dar geçitli alanlarda genellikle kompakt eklemli sınıf tercih edilir çünkü bu sınıf dar açıklıklardan geçebilir ve karmaşık erişim noktalarına ulaşabilir; kesin sınıf, santralin kendi mühendislik ekibiyle birlikte, erişilecek noktanın konumu ve geçit ölçüleri üzerinden belirlenir. Bu belirleme genellikle duruş tarihinden haftalar önce, ön keşif aşamasında yapılır.",
            },
            {
                soru: "Duruş programı beklenenden uzarsa makineniz sahada kalabilir mi?",
                cevap:
                    "Mümkün olduğunca evet; duruş döneminin resmi bitişinden sonra da kısa bir geçiş süresi için makinelerimizi sahada tutarız, çünkü programın son anda uzaması santral projelerinde sık karşılaşılan bir durumdur. Uzama süresi belirli bir noktayı aşarsa, bu durumda güncel müsaitlik durumumuza göre yeniden değerlendirme yaparız; bu ihtimali baştan açıkça konuşuruz.",
            },
            {
                soru: "Tunçbilek'teki kardeş sayfanızla bu sayfa arasındaki fark ne?",
                cevap:
                    "Tunçbilek sayfamız santral sahasının günlük çalışma kısıtlarına (toz, iş izni, bant hattı) odaklanırken, bu sayfa Seyitömer'in periyodik duruş dönemlerine ve bu dönemlerdeki talep yoğunluğunun nasıl planlanması gerektiğine odaklanır. İki santral de aynı Tavşanlı havzasında olsa da, bu sayfadaki konu zamanlama ve kapasite planlamasıdır, saha bazlı günlük kısıtlar değil.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Seyitömer'in Tavşanlı havzasındaki termik santral yerleşimi olduğu ve termik santrallerin periyodik planlı duruşa alındığı kamuya açık genel enerji sektörü bilgisidir; işletme/tesis adı ve rakam kullanılmamıştır. Rezervasyon mantığı ve geçiş haftası uygulaması firma pratiğidir.",
    },

    "bolge:tavsanli-osb": {
        h1: "Tavşanlı OSB'de Maden Yan Sanayi İşletmelerine Platform Kiralama",
        giris:
            "Tavşanlı'nın kendi organize sanayi bölgesi, ilçenin linyit ocağı ve termik santral ekonomisine doğrudan bağlı bir yan sanayi kümesi barındırır — santral ve ocak işletmelerine yedek parça üreten atölyeler, bakım-onarım firmaları, nakliye ve lojistik işletmeleri. Kardeş sayfamız 'bolge:kutahya' merkezdeki benzer yan sanayiyi anlatırken, bu sayfa doğrudan Tavşanlı OSB içindeki parsel yapısına, ortak altyapıya ve OSB'ye özgü organizasyona odaklanır; buradaki işletmeler merkezdekinden farklı olarak birbirine fiziksel olarak çok yakın, aynı OSB altyapısını paylaşan bir küme oluşturur.",
        maddeler: [
            {
                baslik: "Maden yan sanayisinin OSB içindeki yoğunlaşması",
                metin:
                    "Tavşanlı OSB'deki parsellerin önemli bir kısmı, doğrudan veya dolaylı olarak linyit ocağı ve termik santral ekonomisine hizmet eder — kaynak-montaj atölyeleri, hidrolik parça bakım servisleri, konveyör bant onarım işletmeleri. Bu yoğunlaşma, OSB'nin genel bakım talebini de santral-ocak sektörünün kendi yoğunluk döngüsüne bağımlı kılar; santral tarafında bir duruş dönemi yaşanırken OSB'deki yan sanayi işletmelerinde de iş hacmi artar.",
            },
            {
                baslik: "OSB altyapısında parsel arası kısa mesafe avantajı",
                metin:
                    "Tavşanlı OSB'nin iç yol ağı, diğer OSB'lerde olduğu gibi parseller arası mesafeyi kısa tutar; bu, makinenin bir parselden diğerine kendi gücüyle geçebilmesi anlamına gelir. Aynı hafta içinde OSB'deki iki-üç komşu işletmenin benzer bir ihtiyacı varsa, bu yakınlık nakliye maliyetinin paylaşılmasını kolaylaştırır — özellikle maden yan sanayisindeki küçük-orta ölçekli atölyelerin bütçesi için bu paylaşım belirgin bir fark yaratır.",
            },
            {
                baslik: "Ağır parça ve ekipman atölyelerinde zemin ve yük taşıma",
                metin:
                    "Konveyör bandı, hidrolik silindir veya ağır maden ekipmanı parçalarıyla çalışan atölyelerin zemini genellikle güçlendirilmiş beton olsa da, atölye içinde büyük ve ağır parçaların bulunduğu alanlar daralmış geçit yaratabilir; bu durumda makine sınıfı, geçit genişliği ve parça çevresindeki manevra alanına göre seçilir. Kaynak atölyelerinde ayrıca kıvılcım ve duman tahliyesi için havalandırma bakımı da sık talep edilen bir kalemdir.",
            },
            {
                baslik: "Santral duruş döneminin OSB'ye yansıması",
                metin:
                    "Seyitömer veya Tunçbilek'te bir planlı duruş dönemi başladığında, OSB'deki yedek parça ve bakım atölyelerinde de üretim ve onarım hacmi artar; bu dönemde atölyelerin kendi bina bakımı (çatı, aydınlatma, havalandırma) genellikle ertelenir çünkü öncelik santrale giden parça teslimatındadır. Bu yoğun dönem geçtikten sonra, ertelenen bakım kalemleri toplu hâlde talep edilir — biz bu döngüyü bildiğimiz için, duruş sonrası dönemde OSB'ye ekstra makine kapasitesi ayırırız.",
            },
            {
                baslik: "OSB dışı standart işletmelerle karşılaştırma",
                metin:
                    "Tavşanlı OSB'deki işletmelerin bakım ihtiyacı, ilçe merkezindeki dağınık küçük işletmelere göre daha öngörülebilir bir düzen içindedir çünkü OSB'nin kendi yönetim yapısı ortak duyuru ve koordinasyon imkânı sunar. Bu, OSB'deki işletmelerin merkez dışındaki benzerlerine göre paylaşımlı kiralamadan daha kolay faydalanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tavşanlı OSB'de işletme tipine göre platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, OSB'deki maden yan sanayi işletme tiplerinde tipik platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik kalem", "Zemin/geçit notu", "Zamanlama"],
                    satirlar: [
                        ["Kaynak-montaj atölyesi", "Havalandırma, çatı", "Kıvılcım tahliyesi", "Duruş dışı dönem"],
                        ["Hidrolik parça servisi", "İç mekân aydınlatma", "Dar geçit, kompakt sınıf", "Esnek"],
                        ["Konveyör bant onarım", "Depo çatısı", "Ağır parça manevra alanı", "Duruş sonrası yoğun"],
                        ["Nakliye-lojistik ofis", "Cephe, tabela", "Standart", "Esnek"],
                        ["OSB idari bina", "Standart bakım", "Standart", "Esnek"],
                    ],
                },
            },
            {
                baslik: "Duruş döngüsünü bilerek OSB'ye kapasite ayırma",
                paragraflar: [
                    "Tavşanlı OSB'deki maden yan sanayisinin iş yoğunluğu, santralin kendi duruş takvimiyle doğrudan ilişkili olduğu için, biz de OSB'ye ayırdığımız makine kapasitesini bu döngüye göre planlarız. Santral tarafında bir duruş döneminin yaklaştığını öğrendiğimizde, OSB'deki bilinen müşterilerimize bu bilgiyi paylaşır, ertelenmiş bakım kalemlerini duruş öncesi veya sonrası uygun bir pencereye yerleştirmelerini öneririz.",
                    "Bu proaktif yaklaşım, OSB işletmelerinin kendi yoğun döneminde bakım telaşı yaşamasını önler ve bizim de kapasite planlamamızı kolaylaştırır.",
                ],
            },
            {
                baslik: "OSB içi komşuluk ile paylaşımlı kiralamanın kurulması",
                paragraflar: [
                    "OSB'deki işletmeler arasında paylaşımlı kiralama kurmak için resmi bir aracı kuruma her zaman ihtiyaç yoktur; OSB yönetimi veya sanayici dernekleri üzerinden bir duyuru yapılabilir, ya da komşu işletmeler doğrudan birbiriyle iletişime geçebilir. Biz bu süreçte teknik tarafı üstleniriz — en verimli güzergâhı ve makine sınıfını, katılan işletmelerin ihtiyaçlarına göre belirleriz.",
                    "İlk kez bu modeli deneyen işletmelere, önce tek bir komşuyla küçük bir pilot birleştirme önererek başlamalarını tavsiye ederiz; sonuç memnun edici olduğunda, daha geniş bir OSB içi koordinasyona genişletmek kolaylaşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tavşanlı OSB'deki atölyemiz maden sektörüne parça üretiyor, bakım işimizde öncelik alır mıyız?",
                cevap:
                    "Santral duruş dönemleri gibi bilinen yoğunluk pencerelerinde, maden yan sanayisine parça-hizmet sağlayan atölyelerin bina bakımını duruş öncesi veya sonrası uygun bir pencereye taşımanızı öneririz; bu şekilde kendi üretim yoğunluğunuzla bakım işiniz çakışmaz. Doğrudan bir 'öncelik sırası' garantisi vermesek de, üretim yoğunluğunuzu bize bildirdiğinizde planı buna göre kurarız.",
            },
            {
                soru: "OSB'deki komşu atölyeyle aynı hafta kiralama yapmak istiyoruz, nasıl başlarız?",
                cevap:
                    "İkiniz de ihtiyacınızı bize ayrı ayrı bildirebilir veya birlikte tek bir talep olarak iletebilirsiniz; biz iki işi aynı haftaya, mümkünse art arda güne yerleştirir, nakliye maliyetini paylaştırırız. Her işletme kendi kullanımı için ayrı fatura alır, yalnızca nakliye payı bölüşülür. Bu süreç için resmi bir OSB onayına ihtiyaç yoktur.",
            },
            {
                soru: "Kaynak atölyemizde kıvılcım riski var, hangi ekipmanla geliyorsunuz?",
                cevap:
                    "Kıvılcım ve kaynak dumanı riski taşıyan atölyelerde, mümkün olduğunda çalışmayı üretim molası veya vardiya dışı saatlere planlarız; kullanılacak ekipman, atölyenizin kendi yangın güvenlik prosedürüne göre değerlendirilir. Havalandırma bakımı gibi işlerde toz ve duman birikimini keşifte gözlemleyip buna göre bir çalışma planı öneririz.",
            },
            {
                soru: "Santralde duruş dönemi başladığında OSB'deki işimiz gecikir mi?",
                cevap:
                    "Duruş döneminde öncelik genellikle santral sahasındaki işlere kayar, bu da OSB'deki standart bakım işlerinin bir miktar gecikebileceği anlamına gelebilir; bu yüzden OSB müşterilerimize duruş tarihini öğrenir öğrenmez bakım kalemlerini duruş öncesi veya sonrasına kaydırmalarını öneririz. Gerçekten acil bir OSB işi varsa, duruş döneminde bile mümkün olan en hızlı çözümü ararız.",
            },
            {
                soru: "Hidrolik parça atölyemizin tavanı alçak, hangi makine sınıfı öneriyorsunuz?",
                cevap:
                    "Alçak tavanlı ve dar geçitli atölyelerde kompakt akülü makaslı sınıf genellikle en uygun seçimdir; egzozsuz çalışması kapalı mekânda ek bir avantajdır. Kesin uygunluk, atölyenizin tavan yüksekliği ve geçit genişliği bilgisiyle netleşir; bu ölçüleri paylaştığınızda size uygun sınıfı önceden bildiririz.",
            },
            {
                soru: "OSB'deki idari binamızın standart bakımı için özel bir kısıt var mı?",
                cevap:
                    "Hayır, idari ve ofis yapılarındaki bakım standart bir bina bakımı gibi ele alınır ve OSB'nin maden yan sanayisine özgü risklerinden (toz, kıvılcım, ağır parça) bağımsızdır. Bu işlerde tarih esnekliği yüksektir; uygun bir tarihi bize bildirdiğinizde kolayca planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Tavşanlı OSB'nin ilçenin linyit-termik santral ekonomisine bağlı yan sanayi işletmeleri barındırdığı kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Duruş döngüsüne göre kapasite ayırma ve OSB içi paylaşımlı kiralama modeli firma pratiğidir.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI — Kütahya linyit-termik santral / jeotermal enerji
    // ekseni burada da korunur; her sayfa 11 sabit hizmet konusunu bu
    // domainin enerji sektörü perspektifinden ele alır. Kardeş dosya
    // kutahyaplatform-com-tr.ts (seramik/çini fabrika açısı) ile hizmet
    // kaydı çakışması yok (orada hizmet: kaydı bulunmuyor); yine de üslup
    // ve kalıp tekrarından kaçınıldı.
    // Yazım: 2026-08-14. Tesis adı ve rakam uydurulmadı.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Kütahya Enerji Sahalarında Sepetli / Örümcek Platform Kiralama",
        giris:
            "Termik santral ve maden destek tesislerinin iç mekânları, standart bir sanayi holünden farklı bir geometriye sahiptir: kazan dairesi çevresinde boru hatları, çelik konstrüksiyon dikmeleri ve ekipman gövdeleri arasında dar ve düzensiz boşluklar bulunur. Bu tür alanlarda klasik makaslı veya büyük boomlu platform genellikle giremez ya da manevra alanı bulamaz. Sepetli/örümcek platform (paletli, kompakt gövdeli, geniş açılı erişim sunan sınıf), tam da bu boşluklara girip hedefe ulaşabilen tek çözüm olduğu için Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek hattındaki santral ve ocak destek tesislerinde düzenli talep görür. Bu sayfa, bu sınıfın hangi saha koşullarında tercih edildiğini ve nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Kazan dairesi ve boru hattı arası dar geçişler",
                metin:
                    "Kazan dairesi çevresinde borular, kanal sistemleri ve çelik dikmeler arasında kalan geçiş koridorları genellikle bir metrenin biraz üzerindedir; bu genişlikte standart bir makaslı platform giremez. Örümcek platformun paletli gövdesi ve dar şasesi, bu koridorlardan geçip hedefin yakınında konumlanabilir; ayrıca stabilizatör ayakları farklı yüzey kotlarına ayrı ayrı ayarlanabildiği için eğik veya kademeli zeminlerde de düzgün duruş sağlanır.",
            },
            {
                baslik: "Merdiven ve kapı boşluğundan geçerek iç sahaya taşınma",
                metin:
                    "Bazı iç mekân hedeflerine ulaşmak için platformun bina dışından içeri, dar bir kapı veya merdiven boşluğundan geçirilmesi gerekir; örümcek platformlar katlanabilir gövdeleri sayesinde bu tür geçişlerden sığabilir, hedefe ulaştıktan sonra tam açılıma geçer. Bu özellik, bina dışına vinç veya farklı bir kaldırma ekipmanı çağırmadan iç mekân işini tamamlamayı mümkün kılar.",
            },
            {
                baslik: "Kırık ve çok yönlü hedeflerde erişim avantajı",
                metin:
                    "Çelik konstrüksiyon dikmeleri, boru dirsekleri ve ekipman gövdeleri arasında hedef nokta genellikle düz bir hatta değil, birkaç engelin arkasında kırık bir açıdadır. Örümcek platformun çok eklemli kolu, önce yukarı sonra yatay uzanarak bu engellerin üzerinden dolanabilir; bu, sabit bomlu sınıfların yapamadığı bir manevradır ve iş süresini kısaltır.",
            },
            {
                baslik: "Zemin taşıma kapasitesi düşük alanlarda hafiflik",
                metin:
                    "Bazı iç mekân zeminleri (asma kat, ızgara platform, hafif çelik döşeme) yüksek noktasal yük taşımaz; örümcek platformların paletli tabanı yükü geniş bir alana yayar ve toplam ağırlığı büyük makaslı sınıflara göre belirgin şekilde düşüktür. Bu, zemin mühendislik raporunun izin verdiği yük sınırını aşmadan çalışmayı mümkün kılar; şüpheli zeminlerde önceden zemin taşıma bilgisini tesis yetkilisinden alırız.",
            },
            {
                baslik: "Operatör kararının sahada devreye girmesi",
                metin:
                    "Dar ve çok engelli bir sahada bile operatörün gördüğü anlık koşul (beklenmedik bir boru kolu, geçici bir malzeme yığını) plan aşamasında öngörülemez; bu yüzden örümcek platform işlerinde operatörümüz sahaya girmeden önce güzergâhı yürüyerek kontrol eder ve gerekirse rota üzerinde küçük değişiklik yapar. Bu adım, dar alan işlerinde aracın bir engele sıkışmasını önleyen en pratik tedbirdir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji sahalarında örümcek platform kullanım alanları",
                paragraflar: [
                    "Aşağıdaki tablo, hangi saha tipinde örümcek platformun standart bir sınıfa göre neden tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Engel türü", "Neden örümcek platform", "Zemin notu"],
                    satirlar: [
                        ["Kazan dairesi iç sahası", "Boru, kanal, dikme", "Dar koridor geçişi", "Genellikle sağlam beton"],
                        ["Soğutma kulesi çevresi", "Nem, çelik iskelet", "Katlanabilir gövde, dar geçiş", "Islak, kaygan olabilir"],
                        ["Bant galerisi içi", "Dar tünel, düşük tavan", "Kompakt boy, dönüş yarıçapı", "Toz birikimi"],
                        ["Asma kat / ızgara döşeme", "Düşük taşıma kapasitesi", "Hafif toplam ağırlık", "Yük mühendislik raporu şart"],
                        ["Merdivenli iç mekân", "Dar kapı/merdiven boşluğu", "Katlanarak geçiş, sahada açılım", "Standart"],
                    ],
                },
            },
            {
                baslik: "Sabit bomlu sınıfın yetersiz kaldığı noktalar",
                paragraflar: [
                    "Standart teleskopik veya eklemli bomlu bir platform, hedefe düz bir hatta ulaşabildiğinde verimlidir; ama Kütahya'nın santral ve maden destek tesislerinde hedefin önünde genellikle bir veya birden fazla çelik yapı ya da boru engeli bulunur. Bu durumda sabit bomlu sınıf ya hedefe ulaşamaz ya da dolanmak için gereksiz uzun bir kol açıklığı gerektirir — bu da makinenin park noktasında geniş bir boş alan ihtiyacı doğurur ki dar iç mekânlarda bu alan zaten yoktur.",
                    "Örümcek platformun çok eklemli kolu bu sorunu farklı çözer: kol önce dikey yükselir, sonra yatay uzanarak engelin üzerinden dolanır; makinenin kendisi ise dar bir noktada sabit kalabilir. Bu, aynı işi daha küçük bir ayak izi ile bitirmeyi sağlar.",
                ],
            },
            {
                baslik: "Keşifte doğru sınıf kararı nasıl verilir",
                paragraflar: [
                    "Bir iç mekân işinin örümcek platform mu yoksa standart makaslı/eklemli sınıf mı gerektirdiği, sahadaki en dar geçişin genişliği, hedefin çevresindeki engel sayısı ve zeminin taşıma kapasitesiyle belirlenir. Bu üç veriyi fotoğraf ve ölçüyle önceden aldığımızda, sahaya gelmeden doğru sınıfı önerebiliriz; bu, sahada 'bu makine giremiyor' sürprizini önler.",
                    "Belirsiz kalan durumlarda kısa bir ön keşif öneririz — özellikle kazan dairesi gibi karmaşık iç mekânlarda bu, hem zaman hem maliyet açısından en güvenli yoldur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform hangi genişlikteki bir koridordan geçebilir?",
                cevap:
                    "Bu, seçtiğimiz makinenin modeline göre değişir; genel olarak standart bir makaslı platforma göre belirgin şekilde daha dar geçişlerden geçebilirler. Kesin ölçü için koridorun en dar noktasının genişliğini ve varsa tavan yüksekliğini paylaşmanızı isteriz — bu bilgiyle size uygun modeli önceden söyleyebiliriz.",
            },
            {
                soru: "Kazan dairesi zemininin yük taşıma kapasitesini bilmiyoruz, ne yapmalıyız?",
                cevap:
                    "Zemin mühendislik raporu veya tesis yetkilisinden alınacak bir bilgi bu konuda en sağlıklı kaynaktır; bu bilgi olmadan ağır bir makineyi hassas bir döşemeye çıkarmayız. Örümcek platformların toplam ağırlığı büyük sınıflara göre düşük olsa da, kesin karar için bu bilgiyi önceden talep ederiz.",
            },
            {
                soru: "Makine hedefe ulaşamayacak kadar çok engel varsa ne olur?",
                cevap:
                    "Böyle bir durumda operatörümüz sahaya girmeden önce güzergâhı yürüyerek kontrol eder; gerekirse rota üzerinde küçük bir değişiklik yapılır veya farklı bir erişim açısı denenir. Gerçekten imkânsız bir geometri varsa bunu sahaya varmadan, keşif fotoğrafları üzerinden tespit etmeye çalışırız ki gereksiz bir sevkiyat yapılmasın.",
            },
            {
                soru: "Soğutma kulesi çevresindeki nemli zeminde örümcek platform güvenli mi?",
                cevap:
                    "Paletli tabanı ıslak zeminlerde standart lastikli tekerlere göre genellikle daha iyi tutunma sağlar ama tam güvenlik için zemin eğimi ve kayganlık derecesini keşifte değerlendiririz; gerekirse çalışma öncesi bölgesel kurutma isteriz. Operatörümüz zemin durumunda tereddüt varsa çalışmayı başlatmaz.",
            },
            {
                soru: "Bina dışından içeri nasıl taşınıyor, ayrı bir vinç gerekir mi?",
                cevap:
                    "Genellikle gerekmez; örümcek platformlar katlanabilir gövdeleri sayesinde standart bir kapı veya merdiven boşluğundan kendi gücüyle geçebilir, hedefe ulaştıktan sonra tam açılıma geçer. Kapı/merdiven ölçülerini önceden paylaşırsanız, bu geçişin mümkün olup olmadığını sahaya gelmeden teyit ederiz.",
            },
            {
                soru: "Bu sınıfın kiralama süresi ve operatör gerekliliği nasıl işliyor?",
                cevap:
                    "Örümcek platformlar genellikle operatörlü kiralanır çünkü çok eklemli kolun dar alanda doğru sırayla hareket ettirilmesi deneyim ister; bu, hem işin hızını hem güvenliğini doğrudan etkiler. Süre, iş kapsamına göre günlük veya haftalık planlanabilir; iç mekân işinizin kapsamını verirseniz size uygun süre ve makine önerisini birlikte çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek hattındaki termik santral ve maden destek tesislerinin kazan dairesi/bant galerisi gibi dar iç mekân geometrisi kamuya açık genel tesis bilgisidir; tesis adı ve rakam kullanılmamıştır. Sınıf seçim mantığı ve keşif süreci firma pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Kütahya Enerji Hattında Nakliye ve Teslimat Hizmeti",
        giris:
            "Kütahya'daki depomuz, ilin linyit-termik santral ve jeotermal enerji sahalarına düzenli sevkiyat yapan bir merkez konumundadır: Tavşanlı-Seyitömer-Tunçbilek hattındaki santral ve ocak sahaları, Simav'daki jeotermal tesisler, Gediz ve Bilecik'teki destek işletmeleri, Uşak OSB'deki yan sanayi — bu rotaların her biri kendi zamanlama ve öncelik mantığına sahiptir. Bu sayfa, nakliye ve teslimat hizmetimizin bu çok yönlü rota ağında nasıl işlediğini, hangi durumda tekil sevkiyat hangi durumda birleşik rota kullanıldığını ve kış aylarındaki gerçekçi planlamayı anlatır.",
        maddeler: [
            {
                baslik: "Santral ve ocak sahalarına öncelikli sevkiyat",
                metin:
                    "Tavşanlı-Seyitömer-Tunçbilek hattındaki termik santral ve linyit ocağı sahalarına yapılan sevkiyatlar, üretim sürekliliğiyle doğrudan ilişkili olduğu için sevkiyat programımızda önceliklidir; özellikle planlı duruş dönemlerinde bu öncelik daha da belirginleşir. Bu sahalara giden bir sevkiyat, aynı zamanda tesisin kendi iş izni ve giriş prosedürüyle senkronize edilir — makine sahaya vardığında izin süreci tamamlanmamışsa teslimat gecikir, bu yüzden izin durumu teslimat tarihinden önce teyit edilir.",
            },
            {
                baslik: "Merkez-ilçe hattında birleşik sevkiyat modeli",
                metin:
                    "Merkezden Tavşanlı, Gediz veya Simav yönüne yapılan düzenli sevkiyatlar, güzergâh üzerindeki başka bir müşterinin işini de aynı tura ekleyebilir; bu, tarih esnekliği bırakan müşteriler için tekil sevkiyata göre belirgin bir maliyet avantajı sağlar. Acil işlerde bu modeli beklemeden tekil sevkiyat yapılır; iki seçenek arasındaki fiyat farkı teklifte açıkça gösterilir.",
            },
            {
                baslik: "Jeotermal ve tarımsal bölgelere farklı zamanlama",
                metin:
                    "Simav'daki jeotermal tesislere ve Gediz'deki tarımsal depolara yapılan sevkiyatlar, santral hattındaki üretim önceliğinden bağımsız, kendi mevsim ve misafir yoğunluğu takvimine göre planlanır. Bu iki farklı zamanlama mantığını aynı haftalık programda ayrı ayrı yönetiyoruz; bir talep geldiğinde önce hangi takvime ait olduğunu netleştiririz.",
            },
            {
                baslik: "Kış aylarında plato iklimine göre gerçekçi teslimat",
                metin:
                    "Kütahya'nın yüksek rakımlı platosunda kışlar sert geçer; merkez ile Tavşanlı, Gediz ve Simav arasındaki sevkiyatlarda kar ve buzlanma teslimat gününü etkileyebilir. Kış aylarında planlanan işlerde alternatif bir teslimat günü önceden konuşulur; makinenin indirileceği alanın düz ve buz tutmayan bir yüzey olması istenir. Acil bir kış işinde, hava koşulunu göz önünde bulundurarak en gerçekçi teslimat penceresini baştan söyleriz.",
            },
            {
                baslik: "Boşaltma noktası hazırlığı ve teslim tesellümü",
                metin:
                    "Sevkiyatın sorunsuz tamamlanması için boşaltma noktasının araç ve makine giriş-çıkışına uygun, düz bir zeminde olması ve mümkünse önceden işaretlenmiş olması gerekir; özellikle santral ve maden sahalarında bu nokta tesis yetkilisiyle birlikte belirlenir. Teslimat sırasında makinenin durumu ve çalışırlığı birlikte kontrol edilir, bu kontrol her iki tarafın da imzasıyla kayıt altına alınır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji hattında sevkiyat rotası ve öncelik",
                paragraflar: [
                    "Aşağıdaki tablo, ilin farklı bölgelerine yapılan sevkiyatların öncelik ve zamanlama mantığını özetler.",
                ],
                tablo: {
                    basliklar: ["Hedef bölge", "Bağlantı türü", "Öncelik", "Zamanlama mantığı"],
                    satirlar: [
                        ["Tavşanlı-Seyitömer-Tunçbilek", "Santral/ocak — doğrudan", "Yüksek", "Duruş/üretim takvimine bağlı"],
                        ["Simav", "Jeotermal/kaplıca", "Standart-yüksek (misafir sezonu)", "Sezon dışı önerilir"],
                        ["Gediz", "Tarım + enerji hattı ara durak", "Standart", "Sezon dışı / tur içi"],
                        ["Bilecik OSB", "Enerji tedarikçisi işletmeler", "Değişken (bağımlılığa göre)", "Haftalık rota birleşimi"],
                        ["Uşak OSB", "Genel sanayi + enerji-yoğun tesis", "Standart", "Tur içi"],
                    ],
                },
            },
            {
                baslik: "Tekil sevkiyat mı, birleşik rota mı",
                paragraflar: [
                    "Acil bir işte tekil sevkiyat en hızlı çözümdür ve maliyeti mesafeye göre doğrudan hesaplanır; bu, teklifte ayrı bir kalem olarak gösterilir. Tarihte esneklik olan işlerde ise güzergâh üzerindeki haftalık düzenli sevkiyata eklenmek, belirgin bir maliyet avantajı sağlar — özellikle Bilecik ve Gediz gibi ana hattan sapma gerektiren bölgelerde bu fark daha da hissedilir.",
                    "Bir işin hangi modele uygun olduğunu belirlemek için işin aciliyetini ve tarih esnekliğini talep aşamasında sorarız; bu, doğru fiyat ve doğru teslimat penceresini baştan netleştirir.",
                ],
            },
            {
                baslik: "İzin süreçleriyle senkron teslimat",
                paragraflar: [
                    "Santral ve maden sahalarına yapılan teslimatlar, tesisin kendi giriş izni ve iş izni prosedürüyle senkronize edilmezse, makine sahaya varsa bile içeri giremeyebilir. Bu yüzden bu tür sahalara yapılan her sevkiyatta izin durumunu teslimattan önce teyit ederiz; izin süreci uzarsa teslimat tarihini buna göre güncelleriz ve müşteriye önceden haber veririz.",
                    "Standart sanayi veya tarımsal tesislere yapılan teslimatlarda böyle bir izin süreci genellikle bulunmaz; bu tür işlerde teslimat, doğrudan sevkiyat programına göre planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tavşanlı'daki santral sahasına ne kadar sürede teslimat yapabiliyorsunuz?",
                cevap:
                    "Süre, tesisin giriş izni sürecinin ne kadar sürdüğüne ve o anki sevkiyat programımıza bağlıdır; santral ve ocak sahaları öncelikli olduğu için genellikle hızlı planlanır. İzin sürecini bilmiyorsanız, tesis yetkilinizden bu bilgiyi almanızı öneririz — bu bilgiyle teslimat tarihini gerçekçi şekilde birlikte belirleriz.",
            },
            {
                soru: "İşimizi başka bir müşterinin sevkiyatıyla birleştirebilir misiniz?",
                cevap:
                    "Evet, güzergâh üzerinde başka bir müşterinin düzenli sevkiyatı varsa işinizi bu tura ekleyebiliriz; bunun için tarihte biraz esneklik bırakmanız yeterlidir. Bu model, tekil sevkiyata göre belirgin bir maliyet avantajı sağlar; teklifte iki seçeneği de karşılaştırmalı gösteririz.",
            },
            {
                soru: "Kış aylarında Simav veya Tavşanlı yönüne sevkiyat garantisi verebiliyor musunuz?",
                cevap:
                    "Kesin bir garanti veremeyiz çünkü kar ve buzlanma hava koşuluna bağlıdır; ama kış aylarında planlanan işlerde alternatif bir teslimat günü önceden konuşuruz ve makinenin indirileceği alanın düz, buz tutmayan bir yüzey olmasını isteriz. Acil bir kış işinde en gerçekçi teslimat penceresini baştan söyleriz, sürpriz bir gecikme yaşatmayız.",
            },
            {
                soru: "Boşaltma noktamızın uygun olup olmadığını nasıl anlarız?",
                cevap:
                    "Genel kural, aracın ve makinenin rahatça girip çıkabileceği, düz ve mümkünse önceden işaretlenmiş bir zemin olmasıdır. Emin değilseniz, boşaltma noktasının fotoğrafını önceden gönderebilirsiniz — bu, sevkiyat gününde bir sorunla karşılaşma riskini önceden eler.",
            },
            {
                soru: "Bilecik OSB'deki bir işi Tavşanlı hattındaki sevkiyatla birleştirmek mümkün mü?",
                cevap:
                    "Mümkün; merkez-Tavşanlı hattı ile Bilecik OSB'ye giden sevkiyat aynı hafta içinde değerlendirildiğinde en verimli rota çıkarılabilir. Bunun için iki işin de tarihte esnek olması gerekir; konumları ve tercih ettiğiniz tarih aralığını verirseniz birlikte planlarız.",
            },
            {
                soru: "Sevkiyat sırasında makinenin durumu nasıl kontrol ediliyor?",
                cevap:
                    "Teslimat anında makinenin çalışırlığı ve genel durumu birlikte kontrol edilir, bu kontrol her iki tarafın imzasıyla kayıt altına alınır; bu, hem sizin hem bizim için netlik sağlar. Herhangi bir sorunuz veya gözleminiz varsa bu tesellüm sırasında not edilir ve gerekiyorsa hemen çözülür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek termik santral hattı, Simav jeotermal bölgesi ve platonun kış iklimi kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Rota birleşimi, izin senkronizasyonu ve kış planlaması firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Kütahya Enerji ve Maden Yan Sanayisinde Forklift ve İstifleme Kiralama",
        giris:
            "Kütahya'nın linyit-termik santral kuşağına hizmet veren yedek parça atölyeleri, bakım-onarım depoları ve ağır nakliye garajları, günlük işleyişlerinde sürekli malzeme istifleme ihtiyacı duyar: gelen yedek parça paletlerinin depoya yerleştirilmesi, bakım için ayrılan ekipmanın raflara alınması, sevkiyata hazır malzemenin araca yüklenmesi. Bu sayfa, forklift ve istifleme hizmetimizin bu yan sanayi işletmelerinde nasıl kullanıldığını, hangi zemin ve yük koşullarının makine seçimini belirlediğini anlatır.",
        maddeler: [
            {
                baslik: "Yedek parça depolarında raf yüksekliği ve palet ağırlığı",
                metin:
                    "Santral ve maden ekipmanına hizmet veren yedek parça depolarında raf yükseklikleri genellikle standart bir ticari depodan daha yüksektir; ayrıca bazı parçalar (dişli grupları, hidrolik bileşenler) standart bir paletten belirgin şekilde ağırdır. Bu iki faktör, forklift kapasitesinin ve maksimum kaldırma yüksekliğinin önceden netleştirilmesini gerektirir; yanlış kapasiteli bir makine hem verimsiz hem risklidir.",
            },
            {
                baslik: "Ağır nakliye garajlarında malzeme ve parça yönetimi",
                metin:
                    "Kömür ve maden ekipmanı taşıyan ağır nakliye firmalarının garajlarında, araç bakımı için ayrılan büyük parçaların (lastik, akü grubu, yedek şase parçaları) düzenli istiflenmesi ve gerektiğinde hızlı erişimi önemlidir; bu tür alanlarda forklift, hem istifleme hem araç bakım alanına malzeme taşıma amacıyla kullanılır. Zemin genellikle sağlam beton olduğu için standart dizel veya LPG'li forklift sınıfı yeterlidir.",
            },
            {
                baslik: "OSB'deki metal işleme atölyelerinde hammadde-mamul akışı",
                metin:
                    "Bilecik ve Uşak OSB'lerindeki, enerji sektörüne ekipman üreten metal işleme atölyelerinde forklift, hammadde girişinden mamul ürün sevkiyatına kadar sürekli devrede olan bir ekipmandır; bu atölyelerde vinç kirişi çevresinde çalışma da olabileceği için forklift operatörünün tepe vinç hareketine karşı dikkatli olması gerekir — bu, sahaya özgü bir koordinasyon konusudur.",
            },
            {
                baslik: "Açık sahada düzensiz zeminde istifleme",
                metin:
                    "Linyit ocağı çevresindeki bazı açık depolama alanlarında zemin sıkıştırılmış dolgu veya moloz karışımıdır; bu tür zeminlerde standart lastikli forklift yerine arazi tipi (dört tekerlekten çekişli) forklift tercih edilir. Zemin durumu belirsizse, keşifte birlikte değerlendirilir ve gerekirse yük dağıtım önlemleri konuşulur.",
            },
            {
                baslik: "Kısa süreli yoğun istifleme dönemlerinde ek makine",
                metin:
                    "Planlı duruş dönemleri öncesinde, santral ve ocak sahalarına yedek parça ve malzeme sevkiyatı yoğunlaşır; bu dönemlerde depolardaki istifleme yükü kısa sürede artar. Böyle bir yoğunluk öngörüldüğünde, standart bir forklifte ek olarak kısa süreli ikinci bir makine önerebiliriz — bu, duruş öncesi hazırlığın gecikmeden tamamlanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji yan sanayisinde forklift kullanım profili",
                paragraflar: [
                    "Aşağıdaki tablo, farklı işletme tiplerinde forklift ve istifleme ihtiyacının nasıl şekillendiğini özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik yük", "Zemin", "Makine tercihi"],
                    satirlar: [
                        ["Yedek parça deposu", "Ağır palet, yüksek raf", "Beton", "Yüksek kapasiteli, uzun direk"],
                        ["Ağır nakliye garajı", "Lastik, akü, şase parçası", "Beton", "Standart dizel/LPG"],
                        ["OSB metal atölyesi", "Hammadde-mamul, vinç koordinasyonu", "Beton", "Standart, vinç uyumlu çalışma"],
                        ["Açık ocak depolama alanı", "Değişken, dış hava", "Dolgu/moloz", "Arazi tipi (4x4)"],
                        ["Duruş öncesi yoğun dönem", "Kısa süreli artan hacim", "Değişken", "Ek geçici makine"],
                    ],
                },
            },
            {
                baslik: "Kapasite kararının doğru verilmesi",
                paragraflar: [
                    "Bir forklift talebinde en sık karşılaştığımız eksik bilgi, kaldırılacak en ağır parçanın gerçek ağırlığıdır; santral ve maden ekipmanı parçaları görünüşte küçük olsa da çok ağır olabilir (dişli grupları, hidrolik silindirler gibi). Bu bilgiyi önceden almadan verilen bir kapasite tahmini, sahada yetersiz kalabilir.",
                    "Bu yüzden yedek parça deposu veya atölye işlerinde, en ağır kalemin ağırlığını ve raf/istifleme yüksekliğini talep formunda ayrıca sorarız; bu iki veri doğru makinenin seçilmesini garanti eder.",
                ],
            },
            {
                baslik: "Duruş öncesi yoğunluğa hazırlıklı olmak",
                paragraflar: [
                    "Termik santral ve ocak sahalarındaki planlı duruş dönemleri yaklaştığında, yedek parça ve malzeme sevkiyatı belirgin şekilde artar; bu artışı önceden bilen depo işletmeleri bize duruş tarihini erken bildirdiğinde, o döneme ek makine ayırabiliriz. Son anda gelen bir talep, o dönemde makine bulunurluğunun daralmış olması nedeniyle daha zor karşılanabilir.",
                    "Yıllık duruş takviminiz varsa, bu tarihleri bizimle paylaşmanızı öneririz — bu, hem sizin hem bizim için planlamayı kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yedek parça deponuzdaki en ağır kalemi bilmiyoruz, ne yapmalıyız?",
                cevap:
                    "Emin değilseniz, en büyük veya en şüpheli gördüğünüz birkaç kalemin tahmini ağırlığını (üretici etiketi, sevkiyat belgesi gibi kaynaklardan) paylaşmanızı öneririz. Bu bilgi olmadan verilen bir kapasite tahmini sahada yetersiz kalabilir; belirsizlik varsa bir üst kapasiteli makineyi güvenli tarafta kalarak öneririz.",
            },
            {
                soru: "Açık ocak sahasındaki depolama alanımızın zemini gevşek, forklift kullanılabilir mi?",
                cevap:
                    "Kullanılabilir ama standart lastikli sınıf yerine arazi tipi (4x4) forklift öneririz; bu sınıf gevşek dolgu ve moloz karışımı zeminlerde daha güvenli çalışır. Zemin durumunu keşifte birlikte değerlendirir, gerekirse ek önlem konuşuruz.",
            },
            {
                soru: "OSB atölyemizde tepe vinç de çalışıyor, forklift ile çakışma riski var mı?",
                cevap:
                    "Bu, sahaya özgü bir koordinasyon konusudur; forklift operatörümüz tepe vinç hareketine karşı dikkatli çalışacak şekilde brifing alır. Atölyenizin vinç kullanım programını önceden bilirsek, forklift işini bu programla çakışmayacak şekilde planlarız.",
            },
            {
                soru: "Duruş dönemi öncesi ek forklift talep edebilir miyiz?",
                cevap:
                    "Evet, duruş tarihinizi ne kadar erken bildirirseniz, o döneme ek makine ayırma şansımız o kadar yüksek olur. Son anda gelen taleplerde, o dönemdeki genel makine bulunurluğuna bağlı olarak bir bekleme süresi oluşabilir; bu yüzden yıllık duruş takviminizi paylaşmanızı öneririz.",
            },
            {
                soru: "Ağır nakliye garajımızdaki lastik ve akü depolama işini nasıl planlıyorsunuz?",
                cevap:
                    "Bu tür işler standart bir forklift sınıfıyla ve genellikle sağlam beton zeminde yürütülür; araç trafiğinizin en az olduğu saatleri bildirirseniz, çalışmayı bu saatlere göre planlarız. Malzeme hacmi büyükse, önceden bir istifleme planı üzerinde birlikte çalışırız.",
            },
            {
                soru: "Kısa süreli bir kiralama mı yoksa uzun süreli mi daha uygun?",
                cevap:
                    "Bu, işinizin sürekliliğine bağlıdır; duruş öncesi yoğun dönem gibi kısa süreli bir artış için günlük veya haftalık kiralama, düzenli bir depo işleyişi için ise aylık kiralama genellikle daha ekonomiktir. İhtiyacınızın süresini ve hacmini paylaşırsanız size en uygun modeli önereceğiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın linyit-termik santral yan sanayisindeki yedek parça deposu ve ağır nakliye garajı profili, OSB'lerdeki metal işleme atölyeleri kamuya açık genel sanayi bilgisidir; işletme adı ve rakam kullanılmamıştır. Kapasite belirleme yöntemi ve duruş öncesi planlama firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Kütahya Termik Santral ve Maden Sahalarında Eklemli Platform (Boom) Kiralama",
        giris:
            "Açık ocak madenciliği ve termik santral sahaları, hedefin genellikle düz bir hatta değil, bir boru hattının, çelik konstrüksiyon dikmesinin veya ekipman gövdesinin arkasında kaldığı bir geometri sunar. Eklemli (boom) platformun çok noktalı kolu, önce yukarı sonra yatay uzanarak bu tür engellerin üzerinden dolanabilir — bu, düz uzanan teleskopik bomun yapamadığı bir manevradır. Bu sayfa, Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek hattındaki santral ve ocak sahalarında eklemli platformun ne zaman teleskopik sınıfa tercih edildiğini ve nasıl konumlandırıldığını anlatır.",
        maddeler: [
            {
                baslik: "Engelli hedeflerde 'yukarı ve üzerinden' erişim",
                metin:
                    "Baca çevresi, kazan dairesi dışı veya bant galerisi üstü gibi hedeflerde önünde boru hattı, çelik yapı elemanı veya başka bir ekipman bulunduğunda, eklemli kol önce dikey yükselip sonra yatay uzanarak bu engelin üzerinden dolanabilir. Teleskopik bir bom bu geometride ya hedefe ulaşamaz ya da makinenin çok daha uzağa park edilmesini gerektirir; eklemli sınıf bu ihtiyacı ortadan kaldırır.",
            },
            {
                baslik: "Kısıtlı park alanında maksimum erişim",
                metin:
                    "Santral ve ocak sahalarında makinenin park edebileceği düz ve güvenli alan sınırlı olabilir; eklemli platformun kolu, sınırlı bir park noktasından farklı yönlere ve yüksekliklere erişebildiği için bu kısıtı telafi eder. Bu, özellikle bant galerisi kenarı veya dar bir saha köşesi gibi noktalarda belirleyici bir avantajdır.",
            },
            {
                baslik: "Açık ocak destek tesislerinde çelik konstrüksiyon çevresi",
                metin:
                    "Linyit ocağı çevresindeki bant konveyör köprüleri ve eleme-yıkama tesislerinin çelik konstrüksiyon kontrolü, çok sayıda dikme ve çapraz kiriş arasında yapılır; eklemli kol bu yapılar arasında farklı açılardan yaklaşarak her noktaya erişebilir. Zemin genellikle sıkıştırılmış dolgu olduğu için arazi tipi lastikli eklemli platform tercih edilir.",
            },
            {
                baslik: "Dizel veya akülü sınıf kararı — açık saha ile kapalı mekân farkı",
                metin:
                    "Santral ve ocak sahalarının açık kısımlarında dizel motorlu eklemli platform tercih edilir çünkü menzil ve güç ihtiyacı yüksektir; kapalı kazan dairesi veya kontrol odası yakınında ise egzoz kısıtı nedeniyle akülü eklemli sınıfa geçilir. Bu geçiş kararı, işin hangi bölgede geçtiğine göre keşifte netleştirilir.",
            },
            {
                baslik: "Rüzgâr ve yükseklik birlikte değerlendirilir",
                metin:
                    "Baca çevresi gibi yüksek noktalarda çalışan eklemli platformlarda rüzgâr hızı, sepetin stabilitesini doğrudan etkiler; bu yüzden yüksek rüzgâr uyarısı olan günlerde bu tür işler ertelenir veya daha erken/geç saatlere kaydırılır. Bu karar operatörün sahadaki gözlemine ve varsa tesisin kendi rüzgâr ölçüm verisine dayanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli platformun teleskopik sınıfa göre tercih edildiği durumlar",
                paragraflar: [
                    "Aşağıdaki tablo, hangi saha koşulunda eklemli platformun neden tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Saha koşulu", "Engel/kısıt", "Neden eklemli", "Enerji tipi"],
                    satirlar: [
                        ["Baca çevresi (engelli)", "Boru/çelik yapı önde", "Üzerinden dolanma", "Dizel (açık saha)"],
                        ["Bant galerisi üstü", "Dar park alanı", "Sınırlı noktadan geniş erişim", "Arazi tipi dizel"],
                        ["Kazan dairesi dışı", "Kısmen kapalı, egzoz kısıtı", "Akülüye geçiş gerekebilir", "Akülü"],
                        ["Ocak destek çelik yapı", "Çok sayıda dikme/kiriş", "Farklı açılardan erişim", "Arazi tipi dizel"],
                        ["Kontrol odası çevresi", "Kapalı mekân", "Egzozsuz çalışma zorunlu", "Akülü"],
                    ],
                },
            },
            {
                baslik: "Teleskopik ile eklemli arasındaki karar süreci",
                paragraflar: [
                    "Hedefin önü açıksa ve engel yoksa, teleskopik bom genellikle daha hızlı ve daha basit bir çözümdür; ama önde bir boru hattı, çelik dikme veya başka bir ekipman varsa eklemli sınıf tek gerçekçi seçenektir. Bu kararı vermek için hedefin çevre fotoğrafını ve varsa engelin yaklaşık konumunu önceden isteriz.",
                    "Bazı işlerde her iki sınıf da teknik olarak mümkün olabilir; bu durumda sahadaki park alanı kısıtını ve iş süresini birlikte değerlendirerek daha verimli olanı öneririz.",
                ],
            },
            {
                baslik: "Rüzgâr ve hava koşulu takibi",
                paragraflar: [
                    "Baca ve yüksek yapı çevresindeki eklemli platform işlerinde rüzgâr, çalışmanın başlayıp başlamayacağını belirleyen en kritik faktördür; operatörümüz sahaya vardığında rüzgâr durumunu değerlendirir ve tereddüt varsa çalışmayı ertelemekten çekinmez. Tesisin kendi rüzgâr ölçüm verisi varsa, bu veriyi de değerlendirmeye dahil ederiz.",
                    "Rüzgârlı bir dönemde planlanan bir iş için, alternatif bir gün veya saat aralığını baştan konuşuruz; bu, sahaya boşuna gelinmesini önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Baca çevresindeki işimizde önde bir boru hattı var, hangi sınıfı önerirsiniz?",
                cevap:
                    "Böyle bir durumda eklemli platform öneririz çünkü kol önce yukarı sonra yatay uzanarak boru hattının üzerinden dolanabilir; teleskopik bir bom bu geometride hedefe ulaşamayabilir. Boru hattının konumunu ve bacanın yüksekliğini gösteren bir fotoğraf gönderirseniz, kesin sınıf kararını sahaya gelmeden veririz.",
            },
            {
                soru: "Bant galerisi kenarında park alanımız çok dar, çalışabilir misiniz?",
                cevap:
                    "Genellikle çalışabiliriz; eklemli platformun kolu sınırlı bir park noktasından farklı yön ve yüksekliklere erişebildiği için dar park alanlarında teleskopik sınıfa göre daha esnektir. Park alanının genişliğini ve galeri kenarının konumunu paylaşırsanız uygunluğu önceden teyit ederiz.",
            },
            {
                soru: "Kazan dairesi dışında mı yoksa içinde mi çalışacağız, bu makine sınıfını değiştirir mi?",
                cevap:
                    "Evet, değiştirebilir; açık sahada dizel motorlu eklemli platform tercih edilirken, kapalı veya yarı kapalı bir alanda egzoz kısıtı nedeniyle akülü sınıfa geçilir. Çalışma alanının açık mı kapalı mı olduğunu belirtirseniz, doğru sınıfı baştan öneririz.",
            },
            {
                soru: "Rüzgârlı bir günde işimiz iptal olur mu?",
                cevap:
                    "Yüksek rüzgâr uyarısı olan günlerde baca çevresi gibi yüksek işler ertelenir veya farklı bir saate kaydırılır; bu, sepet stabilitesi açısından zorunlu bir güvenlik kararıdır. İşinizi planlarken alternatif bir tarih veya saat aralığını baştan konuşuruz ki rüzgâr durumunda hazırlıksız kalmayasınız.",
            },
            {
                soru: "Ocak destek tesisindeki çelik konstrüksiyon kontrolü için hangi zemin sınıfı gerekir?",
                cevap:
                    "Bu sahalarda zemin genellikle sıkıştırılmış dolgu olduğu için arazi tipi lastikli eklemli platform tercih edilir; standart sert zemin lastikleri bu tür yüzeylerde yeterli tutunmayı sağlamayabilir. Zemin durumunu keşifte birlikte değerlendirir, gerekirse yük dağıtım önlemi öneririz.",
            },
            {
                soru: "Eklemli platform operatörlü mü kiralanır, süre nasıl belirlenir?",
                cevap:
                    "Santral ve ocak sahalarındaki eklemli platform işleri, karmaşık geometri ve saha güvenlik prosedürü nedeniyle çoğunlukla operatörlü kiralanır. Süre işin kapsamına göre belirlenir; tek bir baca kontrolü mü yoksa çok noktalı bir bakım turu mu olduğunu belirtirseniz size uygun süre önerisini çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek termik santral ve linyit ocağı sahalarının çelik konstrüksiyon yoğun geometrisi kamuya açık genel tesis bilgisidir; tesis adı ve rakam kullanılmamıştır. Sınıf seçim mantığı ve rüzgâr değerlendirmesi firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Kütahya Enerji Sektörü Atölye ve Depolarında İç Mekân Platform Kiralama",
        giris:
            "Kütahya'nın linyit-termik santral kuşağına hizmet veren yedek parça atölyeleri, idari-sosyal tesisler ve depo yapıları, iç mekân bakım ihtiyacı açısından standart bir sanayi holü profiline yakındır; ama santral ve ocak sahalarının getirdiği sevkiyat yoğunluğu ve zaman zaman farklı öncelik sıralaması, bu iç mekân işlerinin planlanma şeklini etkiler. Bu sayfa, iç mekân platform hizmetimizin bu yan sanayi yapılarında nasıl kullanıldığını, akülü sınıfın neden standart olduğunu ve zamanlama önceliklerini anlatır.",
        maddeler: [
            {
                baslik: "Atölye çatı ve aydınlatma bakımında akülü standart",
                metin:
                    "Yedek parça atölyeleri ve bakım holleri kapalı mekân olduğu için, buradaki çatı, aydınlatma ve raf üstü işlerde akülü makaslı veya akülü eklemli platform standarttır; egzozsuz çalışması, kapalı mekânda hava kalitesi ve gürültü açısından ek bir avantajdır. Zemin genellikle sağlam beton olduğu için özel bir zemin hazırlığı gerekmez.",
            },
            {
                baslik: "İdari-sosyal tesislerde standart bina bakımı",
                metin:
                    "Santral ve maden işletmelerinin idari büro ve personel sosyal tesislerindeki iç mekân bakımı (aydınlatma, tavan, cephe içi) standart bir ofis-sosyal tesis bakımı gibi ele alınır; bu işler enerji sektörünün özel risklerinden (toz, yüksek sıcaklık) bağımsızdır ve tarih esnekliği yüksektir.",
            },
            {
                baslik: "Depo raf sistemleri üzeri kontrol ve bakım",
                metin:
                    "Yedek parça ve malzeme depolarındaki yüksek raf sistemlerinin üst kısmındaki aydınlatma, havalandırma kanalı veya sprinkler hattı bakımı, düzenli bir iç mekân platform işidir; raf aralarının dar olduğu depolarda makine genişliği koridor ölçüsüyle önceden karşılaştırılır.",
            },
            {
                baslik: "Sevkiyat trafiğinin iç mekân işlerine etkisi",
                metin:
                    "Bu yapılardaki atölye ve depoların bir kısmı, doğrudan santral ve ocak sahalarına yedek parça sağladığı için, iç mekân bakım işleri bu işletmenin kendi sevkiyat yoğunluğuna göre planlanır; sevkiyatın en az olduğu saatler tercih edilir, bu da hem çalışanların hem malzeme akışının bakım işinden en az etkilenmesini sağlar.",
            },
            {
                baslik: "Kısa bloklar hâlinde çalışma esnekliği",
                metin:
                    "İç mekân işlerinin çoğu birkaç saatlik veya bir günlük kısa bloklar hâlinde tamamlanabilir; bu, atölye ve depo işletmesinin günlük işleyişini bölmeden bakım yapılmasını mümkün kılar. İşin kapsamı büyükse, birden fazla kısa blok hâlinde birkaç güne yayılabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji yan sanayisinde iç mekân platform kullanımı",
                paragraflar: [
                    "Aşağıdaki tablo, farklı iç mekân yapı tiplerinde platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Tipik kalem", "Zamanlama", "Makine sınıfı"],
                    satirlar: [
                        ["Yedek parça atölyesi", "Çatı, aydınlatma, raf üstü", "Sevkiyat trafiği dışı saat", "Akülü makaslı"],
                        ["İdari-sosyal tesis", "Aydınlatma, tavan, cephe içi", "Esnek", "Akülü, standart"],
                        ["Yüksek raf depo", "Aydınlatma, havalandırma, sprinkler", "İş saati dışı", "Akülü, dar koridor uyumlu"],
                        ["Kontrol/idari bina koridoru", "Kablo, aydınlatma", "Esnek", "Kompakt akülü"],
                        ["Sosyal tesis salonu", "Tavan, aydınlatma", "Kullanım dışı saat", "Standart akülü"],
                    ],
                },
            },
            {
                baslik: "Dar koridorlu depolarda makine seçimi",
                paragraflar: [
                    "Yedek parça depolarındaki raf aralıkları genellikle dar tutulur çünkü depo alanı sınırlıdır; bu koridorlarda çalışacak platformun genişliği, raf arası mesafeden belirgin şekilde dar olmalıdır. Bu ölçüyü önceden almadan gönderilen bir makine, sahada rafın önünde kalıp içeri giremeyebilir — bu yüzden koridor genişliği talep formunda ayrıca sorulur.",
                    "Bazı depolarda raf düzeni bölüm bölüm farklıdır; böyle durumlarda en dar koridorun ölçüsü esas alınır.",
                ],
            },
            {
                baslik: "Sevkiyat trafiğiyle çakışmayan planlama",
                paragraflar: [
                    "Doğrudan santral veya ocak sahasına parça sağlayan bir atölyede, sevkiyat trafiğinin en yoğun olduğu saatlerde iç mekân bakım işi yapmak hem çalışanları hem malzeme akışını engelleyebilir; bu yüzden bu tür atölyelerde çalışma saatlerini işletmenin kendi trafiğine göre belirleriz.",
                    "İşletmenizin sevkiyat programını (örneğin sabah erken saatlerde yoğun mu, öğleden sonra mı) bize bildirirseniz, bakım işini bu programın dışına kolayca yerleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizin sevkiyat trafiği yoğun, iç mekân bakım işi bunu etkiler mi?",
                cevap:
                    "Etkilememesi için çalışma saatlerini işletmenizin kendi sevkiyat trafiğine göre planlarız; sevkiyatın en az olduğu saatleri bildirirseniz, bakım işini bu saatlere yerleştiririz. Bu, hem çalışanlarınızı hem malzeme akışını en az etkileyen yöntemdir.",
            },
            {
                soru: "Deponuzdaki raf aralıkları dar, hangi makine sınıfı gerekir?",
                cevap:
                    "Kompakt akülü makaslı sınıf, dar koridorlu depolarda en uygun seçimdir; kesin uygunluk için en dar koridorun genişliğini paylaşmanızı isteriz. Bu ölçü olmadan gönderilen bir makine sahada içeri giremeyebilir, bu yüzden bu bilgiyi talep aşamasında ayrıca sorarız.",
            },
            {
                soru: "İdari binamızın bakımı için özel bir kısıt var mı?",
                cevap:
                    "Hayır, idari ve sosyal tesislerdeki iç mekân bakımı standart bir ofis bakımı gibi ele alınır ve enerji sektörünün özel risklerinden (toz, yüksek sıcaklık) bağımsızdır. Bu işlerde tarih esnekliği yüksektir; uygun bir tarihi bildirdiğinizde kolayca planlarız.",
            },
            {
                soru: "İşimiz birkaç gün sürebilir, günlük çalışmayı bölebilir misiniz?",
                cevap:
                    "Evet, iç mekân işlerinin çoğunu birkaç saatlik veya bir günlük kısa bloklar hâlinde tamamlıyoruz; bu, işletmenizin günlük işleyişini bölmeden bakım yapılmasını sağlar. İşin kapsamı büyükse, bu blokları birkaç güne yayarak planlarız.",
            },
            {
                soru: "Akülü platform kapalı mekânda ne kadar süre kesintisiz çalışabilir?",
                cevap:
                    "Bu, makinenin modeline ve kullanım yoğunluğuna göre değişir; genel olarak tam bir iş gününü kapsayacak şekilde planlanır. Şarj durumu operatörümüz tarafından takip edilir; uzun süreli işlerde gerekirse kısa bir şarj molası verilir, bu iş programına önceden dahil edilir.",
            },
            {
                soru: "Sosyal tesis salonunda etkinlik varken bakım yapabilir misiniz?",
                cevap:
                    "Bu tür işleri salonun kullanım dışı olduğu saatlere planlarız; etkinlik takviminizi önceden paylaşırsanız, bakım işini bu takvimle çakışmayacak şekilde ayarlarız. Acil bir işiniz varsa, etkinlik dışındaki en yakın uygun saati birlikte buluruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın linyit-termik santral yan sanayisindeki yedek parça atölyesi ve idari-sosyal tesis profili kamuya açık genel sanayi bilgisidir; işletme adı ve rakam kullanılmamıştır. Koridor ölçüsü ve sevkiyat trafiği uyumlu planlama firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Kütahya Enerji Sahalarında Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Linyit ocağı destek tesisleri ve termik santral sahaları, geniş çelik konstrüksiyon yapılarıyla doludur: bant konveyör köprüleri, eleme-yıkama tesisi çelik iskeletleri, kazan dairesi çevresindeki taşıyıcı sistemler. Bu yapıların montaj kontrolü, cıvata sıkma denetimi ve yerinde küçük çelik ekleme işleri, yüksekte ve genellikle dar aralıklı bir çelik ağın içinde yapılır. Bu sayfa, çelik konstrüksiyon montaj platformu hizmetimizin bu sahalarda nasıl kullanıldığını ve hangi makine sınıfının hangi yapı tipine uygun olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Bant konveyör köprülerinde montaj ve kontrol erişimi",
                metin:
                    "Ocaktan santrale kömür taşıyan bant konveyör köprüleri, kilometrelerce uzanan çelik yapılardır; bu yapıların montaj kontrolü ve periyodik cıvata-kaynak denetimi, köprü boyunca dağılmış çok sayıda noktada yapılır. Bu noktalara erişim genellikle kompakt eklemli platformlarla sağlanır; galeri içindeki dar geçişlerde makine boyu ve dönüş yarıçapı önceden değerlendirilir.",
            },
            {
                baslik: "Eleme-yıkama tesisi çelik iskeletinde çok kotlu çalışma",
                metin:
                    "Eleme-yıkama tesislerinin çelik iskeleti, farklı kotlarda platformlar ve merdivenlerle birbirine bağlıdır; montaj sırasında farklı yükseklikteki kirişlere erişim gerekir. Bu tür çok kotlu yapılarda teleskopik veya eklemli platform, kotlar arası geçişi tek makineyle sağlayarak ayrı iskele kurulumuna göre belirgin zaman kazandırır.",
            },
            {
                baslik: "Kazan dairesi çevresi taşıyıcı sistem denetimi",
                metin:
                    "Kazan dairesinin çevresindeki ağır çelik taşıyıcı sistemler, yüksek sıcaklık ve titreşime maruz kaldığı için periyodik denetim gerektirir; bu denetim genellikle santralin planlı duruş dönemine denk getirilir çünkü tam kapasite çalışan bir kazan çevresinde platformla yakın mesafe çalışması güvenlik açısından uygun değildir.",
            },
            {
                baslik: "Yerinde küçük çelik ekleme ve kaynak destek işleri",
                metin:
                    "Bazı bakım işlerinde mevcut çelik yapıya küçük bir destek elemanı veya platform eklenmesi gerekebilir; bu tür işlerde platform hem erişim hem de kaynakçının malzeme ve ekipmanını taşıma amacıyla kullanılır. Kaynak işlemi sırasında yangın riski nedeniyle çevredeki yanıcı malzeme önceden uzaklaştırılır ve bir yangın gözcüsü bulundurulur.",
            },
            {
                baslik: "Zemin ve konum kısıtlarına göre makine seçimi",
                metin:
                    "Çelik konstrüksiyon işlerinin bir kısmı açık sahada (dolgu zemin), bir kısmı ise kapalı galeri veya bina içinde (beton zemin) geçer; bu fark, dizel arazi tipi ile akülü kompakt sınıf arasındaki seçimi belirler. Zemin ve konum bilgisi keşifte netleştirilir, doğru sınıf önceden önerilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji sahalarında çelik yapı tipine göre platform seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, farklı çelik konstrüksiyon yapı tiplerinde platform seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Erişim zorluğu", "Makine tercihi", "Zamanlama"],
                    satirlar: [
                        ["Bant konveyör köprüsü", "Dar galeri, uzun hat", "Kompakt eklemli", "Bant durdurma penceresi"],
                        ["Eleme-yıkama iskeleti", "Çok kotlu", "Teleskopik/eklemli", "Standart mesai"],
                        ["Kazan dairesi çevresi", "Sıcaklık, yoğun ağ", "Kompakt, ısıl korumalı", "Planlı duruş"],
                        ["Açık saha çelik yapı", "Dolgu zemin", "Arazi tipi dizel", "Hava koşullu"],
                        ["Kapalı galeri/bina içi", "Beton zemin, egzoz kısıtı", "Akülü kompakt", "Esnek"],
                    ],
                },
            },
            {
                baslik: "Tek makineyle çok kotlu erişimin avantajı",
                paragraflar: [
                    "Eleme-yıkama tesisi gibi çok kotlu çelik yapılarda, her kot için ayrı bir iskele kurulumu hem zaman hem maliyet açısından verimsizdir; teleskopik veya eklemli bir platform, operatörün kumandasıyla farklı kotlara sırayla erişebilir. Bu, özellikle kısa süreli denetim işlerinde belirgin bir zaman avantajı sağlar.",
                    "Kotlar arasındaki geçiş sırasını önceden planlamak, işin toplam süresini daha da kısaltır; bu planlama, denetim listesinin kot bazında önceden gruplanmasıyla yapılır.",
                ],
            },
            {
                baslik: "Duruş dönemine bağlı denetim programı",
                paragraflar: [
                    "Kazan dairesi çevresi gibi yüksek riskli çelik yapıların denetimi, santralin planlı duruş dönemine sıkıştırıldığı için bu dönemde iş yoğunluğu artar; bu yoğunlukta makinenin duruş başlamadan sahada hazır olması, denetimin zamanında bitmesini belirler. Duruş takviminiz varsa, bu tarihi erken paylaşmanız makine ayırmamızı kolaylaştırır.",
                    "Kısa süren duruşlarda birden fazla denetim noktasını paralel yürütmek için birden fazla makine göndermeyi de değerlendirebiliriz; bu karar duruş süresine ve kalem sayısına göre verilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bant konveyör köprüsünün cıvata denetimi için hangi makine gerekir?",
                cevap:
                    "Köprü galerisi genellikle dar olduğu için kompakt eklemli platform öneririz; bu sınıf dönüş yarıçapı düşük olduğu için dar geçişlerde rahat manevra yapar. Galerinin genişliğini ve bandın durdurulup durdurulamayacağını önceden bilirsek, çalışmayı bant durdurma penceresine göre planlarız.",
            },
            {
                soru: "Eleme-yıkama tesisimizin farklı kotlarındaki işi tek seferde bitirebilir misiniz?",
                cevap:
                    "Genellikle evet; teleskopik veya eklemli bir platform, operatör kumandasıyla farklı kotlara sırayla erişebilir, bu da ayrı iskele kurulumuna göre belirgin zaman kazandırır. Denetim listenizi kot bazında önceden gruplarsanız, sırayı bu gruplamaya göre planlar ve gereksiz yer değiştirmeyi önleriz.",
            },
            {
                soru: "Kazan dairesi çevresindeki çelik denetimi santral çalışırken yapılabilir mi?",
                cevap:
                    "Genellikle hayır; tam kapasite çalışan bir kazan çevresinde platformla yakın mesafe çalışması güvenlik açısından uygun değildir, bu yüzden bu tür işler santralin planlı duruş dönemine denk getirilir. Duruş tarihinizi bildirirseniz, işi bu döneme göre planlarız.",
            },
            {
                soru: "Yerinde kaynak işi sırasında güvenlik önlemi nasıl alınıyor?",
                cevap:
                    "Kaynak işlemi sırasında çevredeki yanıcı malzeme önceden uzaklaştırılır ve bir yangın gözcüsü bulundurulur; bu, standart bir güvenlik protokolüdür ve tesisin kendi yangın güvenliği kurallarıyla birlikte uygulanır. Kaynak işinin kapsamını önceden bildirirseniz, gerekli önlemleri sahaya gelmeden planlarız.",
            },
            {
                soru: "Açık sahadaki çelik yapı işimizde zemin dolgu, bu makine seçimini nasıl etkiler?",
                cevap:
                    "Dolgu zeminlerde dizel arazi tipi platform tercih edilir çünkü standart lastikler bu tür yüzeylerde yeterli tutunma sağlamayabilir. Zemin durumunu keşifte birlikte değerlendirir, gerekirse yük dağıtım plakası veya benzer bir önlem öneririz.",
            },
            {
                soru: "Duruş dönemimiz kısa, birden fazla denetim noktasını paralel yürütebilir misiniz?",
                cevap:
                    "Evet, bunu duruş işlerinde sık uyguluyoruz; denetim listesi kot ve konuma göre bölünür, birbirinden bağımsız çalışabilecek gruplar ayrılır ve her gruba bir makine atanır. Bu, duruş süresini paralel kullanmayı sağlar; kalem sayınızı ve kotlarını paylaşırsanız uygun makine sayısını önereceğiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın linyit ocağı ve termik santral sahalarındaki bant konveyör köprüsü, eleme-yıkama tesisi ve kazan dairesi çevresi çelik konstrüksiyon yapıları kamuya açık genel tesis bilgisidir; tesis adı ve rakam kullanılmamıştır. Kot bazlı denetim planlaması ve duruş senkronizasyonu firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Kütahya'da Tarım ve Silo Sahalarında Platform Kiralama — Enerji Hattı Bağlantılı Bölgeler",
        giris:
            "Kütahya'nın enerji ağırlıklı ekseni yanında, Gediz'in tarımsal depo-silo yapıları ve Simav'ın jeotermal kaynaklı sera ısıtma sistemleri, ilin farklı ama enerji hattıyla dolaylı olarak kesişen iki tarımsal profilini oluşturur. Bu sayfa, bu iki farklı tarımsal-enerji kesişimini birbirine karıştırmadan, her birinin kendi mevsim ve zemin koşuluna göre platform ihtiyacını anlatır.",
        maddeler: [
            {
                baslik: "Gediz'de hububat-meyve deposu çatı ve havalandırma bakımı",
                metin:
                    "Gediz'deki tarımsal depoların çatı-oluk onarımı, aydınlatma ve havalandırma bakımı standart bir kırsal yapı bakımıdır; bu işler enerji hattındaki sevkiyat yoğunluğundan bağımsız, kendi hasat ve depolama mevsimine göre planlanır. Depo çatıları genellikle hafif çelik konstrüksiyonlu olduğu için makine ağırlığı ve zemin taşıma gücü ayrıca değerlendirilir.",
            },
            {
                baslik: "Silo yapılarında yükseklik ve dar erişim",
                metin:
                    "Tahıl siloları, dar tabanlı ve dikey yükselen yapılar olduğu için üst kısımlarındaki bakım (havalandırma bacası, aydınlatma, çatı kaplaması) genellikle teleskopik bomlu platformla yapılır; silo çevresindeki manevra alanı sınırlıysa kompakt bir sınıf tercih edilir. Silo dolu ya da boş olması, çevresindeki araç trafiğini ve dolayısıyla makinenin park noktasını etkileyebilir.",
            },
            {
                baslik: "Simav'da sera ısıtma sisteminin jeotermal bağlantısı",
                metin:
                    "Simav'daki seraların bir kısmı jeotermal kaynaklı ısıtma sistemi kullanır; bu seraların çatı ve boru hattı bakımı, ısıtma sisteminin çalışma döneminin dışına (genellikle yaz ayları) planlanır. Sera yapıları hafif konstrüksiyonlu olduğu için makine ağırlığı ve zemin taşıma gücü standart bir sanayi holünden farklı şekilde değerlendirilir.",
            },
            {
                baslik: "Mevsimsel takvimin enerji hattından bağımsızlığı",
                metin:
                    "Tarımsal depo ve sera işleri, santral ve ocak sahalarındaki üretim ve duruş takviminden bağımsız, kendi hasat/ısıtma sezonuna göre planlanır; bu iki takvimi karıştırmadan ayrı ayrı yönetiyoruz. Bir talep geldiğinde işin hangi takvime ait olduğunu netleştirerek doğru zamanlamayı baştan belirleriz.",
            },
            {
                baslik: "Hafif konstrüksiyonlu yapılarda zemin ve ağırlık kontrolü",
                metin:
                    "Sera ve bazı tahıl deposu yapıları hafif çelik konstrüksiyonlu olduğu için, ağır bir makinenin yakınından geçmesi veya yanında park etmesi zemin basıncı açısından dikkat gerektirir; bu tür yapıların çevresinde çalışırken makine ağırlığı ve lastik izi genişliği önceden değerlendirilir, gerekirse daha hafif bir sınıf tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya tarım-enerji kesişiminde platform kullanımı",
                paragraflar: [
                    "Aşağıdaki tablo, iki farklı tarımsal-enerji kesişiminde platform kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Bölge/yapı", "Enerji bağlantısı", "Zamanlama", "Makine notu"],
                    satirlar: [
                        ["Gediz tarımsal depo", "Yok, bağımsız", "Sezon dışı", "Standart, hafif zemin kontrolü"],
                        ["Tahıl silosu", "Dolaylı (lojistik hat)", "Trafik dışı saat", "Teleskopik, kompakt manevra"],
                        ["Simav jeotermal sera", "Doğrudan (ısıtma kaynağı)", "Isıtma dışı sezon (yaz)", "Hafif, zemin taşıma kontrolü"],
                        ["Sera boru hattı", "Doğrudan", "Isıtma dışı sezon", "Standart akülü"],
                        ["Depo idari yapı", "Yok", "Esnek", "Standart"],
                    ],
                },
            },
            {
                baslik: "İki tarımsal profili ayrı tutmanın gerekliliği",
                paragraflar: [
                    "Gediz'in tarımsal deposu ile Simav'ın jeotermal seraları, aynı 'tarım' başlığı altında toplanabilir görünse de biri enerji hattından tamamen bağımsız, diğeri doğrudan jeotermal ısıtma kaynağına bağlıdır; bu fark bakım zamanlamasını belirler. Bir talep aldığımızda, işin hangi profile ait olduğunu netleştiririz — bu, doğru mevsim penceresini baştan belirler.",
                    "Bu ayrımı yapmadan verilen bir tarih, sera işinde ısıtma sezonuyla çakışabilir veya depo işinde hasat yoğunluğuyla örtüşebilir; bu yüzden mevsim bilgisini talep formunda ayrıca sorarız.",
                ],
            },
            {
                baslik: "Hafif yapı çevresinde zemin basıncı yönetimi",
                paragraflar: [
                    "Sera ve bazı depo yapılarının çevresindeki zemin, ağır bir makinenin sürekli geçişine göre tasarlanmamıştır; bu yüzden bu tür sahalarda makine rotası önceden belirlenir ve mümkünse sabit bir güzergâh kullanılır, rastgele manevra yapılmaz. Zeminde yumuşak veya sulak bir bölge varsa bu bölgeden kaçınılır.",
                    "Şüpheli bir zemin durumunda, çalışma öncesi kısa bir zemin kontrolü yapılır; gerekirse yük dağıtım önlemi eklenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gediz'deki deponuzun çatı bakımını hangi mevsimde yapmalıyız?",
                cevap:
                    "Hasat ve yoğun depolama döneminin dışına planlamanızı öneririz; bu dönemde depo trafiği düşük olduğu için hem makine bulunurluğu rahat olur hem işletmenizin işleyişi etkilenmez. Kesin bir mevsim penceresi belirlemek için sizin depolama takviminizi bilmemiz yeterli.",
            },
            {
                soru: "Silo üstündeki havalandırma bacası bakımı için hangi makine sınıfı gerekir?",
                cevap:
                    "Silolar dar tabanlı ve dikey yükselen yapılar olduğu için genellikle teleskopik bomlu platform öneririz; çevredeki manevra alanı dar ise kompakt bir sınıfa geçeriz. Silonun yüksekliğini ve çevresindeki boş alanı paylaşırsanız, kesin sınıfı sahaya gelmeden belirleriz.",
            },
            {
                soru: "Sera ısıtma sistemimiz jeotermal, bakımı ne zaman yapmalıyız?",
                cevap:
                    "Isıtma sisteminin çalışma döneminin dışına, genellikle yaz aylarına planlamanızı öneririz; bu dönemde sistem soğuk ve müdahaleye açıktır. Sera yapıları hafif konstrüksiyonlu olduğu için makine ağırlığını ve zemin taşıma gücünü ayrıca değerlendiririz.",
            },
            {
                soru: "Depo ve sera işlerimiz enerji sektöründeki santral duruş takviminden etkilenir mi?",
                cevap:
                    "Hayır, bu işler santral ve ocak sahalarındaki üretim/duruş takviminden bağımsız, kendi mevsim döngüsüne göre planlanır. Bu iki takvimi karıştırmadan ayrı ayrı yönetiyoruz; talep aldığımızda hangi profile ait olduğunu netleştirip ona uygun zamanlamayı sunarız.",
            },
            {
                soru: "Sera çevresindeki zemin yumuşak, makine batma riski var mı?",
                cevap:
                    "Böyle bir risk varsa, çalışma öncesi kısa bir zemin kontrolü yaparız ve gerekirse yük dağıtım plakası gibi bir önlem ekleriz. Makine rotasını önceden belirleyip sabit bir güzergâh kullanmak, rastgele manevradan kaynaklanan riski de azaltır.",
            },
            {
                soru: "Gediz'deki işimizi Tavşanlı hattındaki bir sevkiyatla birleştirebilir misiniz?",
                cevap:
                    "Evet, güzergâh üzerindeyse mümkündür; merkez-Tavşanlı hattı Gediz çevresinden geçebildiği için işinizi tarih esnekliğiyle bu sevkiyata ekleyebiliriz. Bu, tekil sevkiyata göre maliyet avantajı sağlar; konumunuzu ve tercih ettiğiniz tarih aralığını verirseniz birlikte planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gediz'in tarımsal depo-silo yapıları ve Simav'ın jeotermal kaynaklı sera ısıtması kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Mevsim ayrımı ve zemin basıncı yönetimi firma pratiğidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Kütahya'da Enerji ve Aydınlatma Bakım Platformu Hizmeti",
        giris:
            "Enerji ve aydınlatma bakımı, Kütahya'nın linyit-termik santral ve jeotermal hattındaki tüm saha tiplerinde ortak bir ihtiyaçtır; ama bu ihtiyacın somut karşılığı sahaya göre çok farklı görünür — santral sahasında baca dibi aydınlatma direği, ocak destek tesisinde bant hattı aydınlatması, idari binada standart çatı-cephe aydınlatması. Bu sayfa, enerji-aydınlatma bakım hizmetimizin bu farklı saha tiplerinde nasıl uygulandığını ve elektrik kesme-emniyet prosedürünün nasıl işlediğini anlatır.",
        maddeler: [
            {
                baslik: "Santral sahası aydınlatma direği ve armatür bakımı",
                metin:
                    "Termik santral sahasındaki aydınlatma direkleri, genellikle standart bir sanayi direğinden daha yüksek ve daha sağlam yapılıdır; armatür değişimi veya kablo kontrolü öncesinde direğin bağlı olduğu hattın enerjisinin kesildiği tesis yetkilisi tarafından doğrulanır. Bu doğrulama olmadan platform armatüre yaklaştırılmaz.",
            },
            {
                baslik: "Bant hattı ve galeri aydınlatmasında enerji ayrımı",
                metin:
                    "Kömür taşıma bant sistemlerinin galeri aydınlatması, bandın kendisiyle aynı elektrik hattına bağlı olabilir; bu nedenle aydınlatma bakımı öncesinde hem aydınlatma hem bant hattının enerjisinin kilitli ve etiketli olduğu doğrulanır. Bu, standart bir sanayi holü aydınlatma bakımından daha sıkı bir enerji ayrımı prosedürüdür.",
            },
            {
                baslik: "Elektrik hattı çevresinde güvenli mesafe",
                metin:
                    "Santral ve ocak sahalarında yüksek gerilim hatlarına yakın çalışma söz konusu olduğunda, platform ile hat arasındaki güvenli mesafe önceden belirlenir ve bu mesafe operatör brifinginde vurgulanır; hattın enerjili olup olmadığı bilinmiyorsa, tesis yetkilisinden bu bilgi alınmadan çalışma başlatılmaz.",
            },
            {
                baslik: "İdari-sosyal tesislerde standart aydınlatma bakımı",
                metin:
                    "İdari büro ve personel sosyal tesislerindeki aydınlatma bakımı, santral-ocak sahasındaki yüksek gerilim risklerinden bağımsız, standart bir ofis aydınlatma bakımıdır; bu işlerde tarih esnekliği yüksektir ve enerji ayrımı prosedürü daha basittir (tek bir sigortanın kapatılması genellikle yeterlidir).",
            },
            {
                baslik: "Gece çalışması gereken aydınlatma testleri",
                metin:
                    "Bazı aydınlatma bakım işlerinde (örneğin yeni armatürün ışık seviyesi kontrolü), işin gece saatlerinde test edilmesi gerekebilir; bu tür işler, sahanın gece güvenlik prosedürüne göre ayrıca planlanır ve genellikle ek bir refakatçi ataması istenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji sahalarında aydınlatma bakım profili",
                paragraflar: [
                    "Aşağıdaki tablo, farklı saha tiplerinde aydınlatma-elektrik bakımının enerji ayrımı gereksinimini özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Enerji ayrımı gereksinimi", "Zamanlama", "Makine notu"],
                    satirlar: [
                        ["Santral sahası direk/armatür", "Yüksek (tesis onayı şart)", "Tesis prosedürüne bağlı", "Yüksek erişim, teleskopik"],
                        ["Bant galerisi aydınlatması", "Yüksek (kilitleme-etiketleme)", "Bant durdurma penceresi", "Kompakt eklemli"],
                        ["Yüksek gerilim hattı çevresi", "Çok yüksek (mesafe kritik)", "Tesis onayı sonrası", "Güvenli mesafe korunur"],
                        ["İdari-sosyal tesis", "Düşük (tek sigorta)", "Esnek", "Standart akülü"],
                        ["Gece test çalışması", "Standart + refakatçi", "Gece saatleri", "Standart"],
                    ],
                },
            },
            {
                baslik: "Enerji ayrımının değişmez ilk adım olması",
                paragraflar: [
                    "Aydınlatma ve elektrik bakımında, saha tipi ne olursa olsun ilk ve tartışmasız adım, çalışılacak hattın enerjisinin kesilip kesilmediğinin doğrulanmasıdır; bu doğrulama tesis yetkilisi veya işletmenin kendi elektrikçisi tarafından yapılır ve platform bu doğrulama tamamlanmadan armatüre veya kabloya yaklaştırılmaz.",
                    "Bu kural, santral sahasında olduğu kadar standart bir idari binada da geçerlidir; tek fark, doğrulama sürecinin karmaşıklığı ve süresidir. Santral sahasında bu süreç saatler sürebilirken, idari binada dakikalar içinde tamamlanabilir.",
                ],
            },
            {
                baslik: "Yüksek gerilim hattı yakınında çalışma disiplini",
                paragraflar: [
                    "Yüksek gerilim hattına yakın bir aydınlatma bakım işinde, platformun hatta olan mesafesi işin en kritik parametresidir; bu mesafe, hattın gerilim seviyesine göre değişir ve tesis yetkilisinin belirlediği güvenlik mesafesine kesinlikle uyulur. Operatörümüz bu mesafeyi öncesinde bilir ve sahada bu sınırı aşmayacak şekilde konumlanır.",
                    "Hattın enerjili olup olmadığından emin değilsek, bu bilgiyi tesis yetkilisinden almadan çalışmayı başlatmayız; bu, tartışmaya kapalı bir güvenlik kuralıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Santral sahasındaki aydınlatma direğinin bakımı için hangi izinler gerekir?",
                cevap:
                    "Direğin bağlı olduğu hattın enerjisinin kesildiğinin tesis yetkilisi tarafından doğrulanması, en önemli ve tartışmasız gerekliliktir; bu doğrulama olmadan çalışma başlamaz. Tesisin kendi iş izni prosedürü de genellikle bu sürece dahildir; süreyi baştan bildirirseniz, işi buna göre planlarız.",
            },
            {
                soru: "Bant galerisi aydınlatmasının bakımını bant çalışırken yapabilir misiniz?",
                cevap:
                    "Hayır, aydınlatma bantla aynı hatta bağlı olabileceği için, hem aydınlatma hem bant hattının enerjisinin kilitli ve etiketli olduğu doğrulanmadan çalışmaya başlamayız. Bu doğrulama genellikle bandın kısa bir bakım penceresinde durdurulmasıyla sağlanır; bu pencereyi tesisle birlikte planlarız.",
            },
            {
                soru: "Yüksek gerilim hattına ne kadar mesafede çalışabiliyorsunuz?",
                cevap:
                    "Kesin mesafe, hattın gerilim seviyesine göre değişir ve bu bilgiyi tesis yetkilisinden alırız; bu mesafeye operatörümüz sahada kesinlikle uyar. Hattın enerjili olup olmadığından emin değilsek, bu netleşmeden çalışmayı başlatmayız.",
            },
            {
                soru: "İdari binamızın aydınlatma bakımı için santral seviyesinde bir izin süreci mi gerekiyor?",
                cevap:
                    "Hayır, idari ve sosyal tesislerdeki aydınlatma bakımı, standart bir ofis aydınlatma bakımı gibi ele alınır ve enerji ayrımı genellikle tek bir sigortanın kapatılmasıyla sağlanır. Bu işlerde tarih esnekliği yüksektir; uygun bir tarihi bildirdiğinizde kolayca planlarız.",
            },
            {
                soru: "Gece aydınlatma testi yapabiliyor musunuz?",
                cevap:
                    "Evet, ışık seviyesi kontrolü gibi bazı testler gece saatlerinde yapılmak zorundadır; bu tür işler sahanın gece güvenlik prosedürüne göre ayrıca planlanır ve genellikle bir refakatçi ataması istenir. Test tarihini önceden bildirirseniz, gerekli hazırlığı tamamlarız.",
            },
            {
                soru: "Aydınlatma bakımı sırasında elektrik kesintisi olursa ne olur, işiniz durur mu?",
                cevap:
                    "Beklenmedik bir kesinti sahadaki güvenlik prosedürünü etkilemez çünkü zaten çalıştığımız hattın enerjisi önceden kesilmiş ve doğrulanmıştır; ama sahadaki genel aydınlatma etkilenirse operatörümüz güvenlik açısından çalışmayı geçici olarak durdurabilir. Bu tür bir durumda tesis yetkilisiyle birlikte durumu değerlendirir, güvenli olduğunda devam ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın termik santral ve linyit ocağı sahalarındaki aydınlatma-elektrik altyapısının tesis onaylı enerji kesme prosedürüne tabi olduğu genel sanayi/santral güvenlik bilgisidir; tesis adı ve rakam kullanılmamıştır. Enerji ayrımı adımları ve mesafe disiplini firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Kütahya Maden ve Santral Sahalarında Operatörlü Platform Kiralama",
        giris:
            "Linyit ocağı ve termik santral sahalarına giriş, standart bir sanayi tesisinden çok daha ağır bir iş güvenliği rejimine tabidir; bu sahalarda çalışacak platform operatörünün belge ve yeterlilik durumu, tesis giriş onayının ön koşuludur. Bu sayfa, Kütahya'nın enerji sahalarında operatörlü kiralamanın neden neredeyse zorunlu bir standart hâline geldiğini, hangi belgelerin hazır tutulduğunu ve operatör-tesis koordinasyonunun nasıl işlediğini anlatır.",
        maddeler: [
            {
                baslik: "Maden ve santral İSG rejiminin operatör seçimine etkisi",
                metin:
                    "Maden ve termik santral sahalarına giriş, giriş izinleri, iş izni formları, kilitleme-etiketleme uygulamaları ve gaz ölçümü gibi adımlar gerektirebilir; bu süreçlerin çoğu, sahada çalışacak kişinin (operatörün) bu prosedürlere aşina olmasını gerektirir. Bu nedenle bu tür sahalarda operatörsüz kiralama neredeyse hiç tercih edilmez; operatörlü kiralama standart hâle gelmiştir.",
            },
            {
                baslik: "Operatör yeterlilik belgeleri ve tesis onayı",
                metin:
                    "Santral ve ocak sahaları, sahaya giren her operatörden geçerli bir yeterlilik belgesi (sertifika) ister; bizim operatör kadromuzun bu belgeleri hazır ve güncel tutulur, tesis talep ettiğinde anında iletilir. Bazı tesisler ayrıca kendi saha güvenlik eğitimini operatöre verir; bu eğitim genellikle sahaya ilk giriş öncesinde kısa bir oryantasyon şeklindedir.",
            },
            {
                baslik: "Saha güvenlik prosedürüne operatör aşinalığı",
                metin:
                    "Enerji sahalarında çalışan operatörlerimiz, kilitleme-etiketleme doğrulaması, gaz ölçümü sonucu bekleme, refakatçi ataması gibi prosedürlere düzenli maruz kaldığı için bu adımları atlamadan uygular; bu deneyim, sahaya yeni giren bir operatöre göre işin daha hızlı ve güvenli ilerlemesini sağlar.",
            },
            {
                baslik: "Karmaşık geometride operatör kararının önemi",
                metin:
                    "Kazan dairesi, bant galerisi gibi dar ve engelli alanlarda platformun doğru sırayla hareket ettirilmesi, sahayı önceden görmüş ve benzer geometrilerde çalışmış bir operatör gerektirir; bu tür işlerde operatörsüz kiralama, yeterli deneyimi olmayan bir kullanıcının makineyi bir engele sıkıştırma riskini artırır.",
            },
            {
                baslik: "Standart iç mekân işlerinde operatörsüz seçenek",
                metin:
                    "İdari-sosyal tesis gibi standart risklerin bulunmadığı iç mekân işlerinde, uygun eğitimli personeliniz varsa operatörsüz kiralama da sunulur; bu tercih, işin niteliğine ve müşterinin kendi personel yeterliliğine bağlı olarak keşifte değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji sahalarında operatörlü/operatörsüz karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, farklı saha tiplerinde operatörlü kiralamanın ne kadar zorunlu olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "İSG rejimi ağırlığı", "Operatör tercihi", "Not"],
                    satirlar: [
                        ["Ocak destek tesisi", "Orta-yüksek", "Operatörlü önerilir", "Zemin/erişim deneyimi gerekir"],
                        ["Santral kazan dairesi", "Çok yüksek", "Operatörlü zorunlu", "Tesis onayı gerektirir"],
                        ["Bant galerisi", "Yüksek", "Operatörlü zorunlu", "Enerji ayrımı deneyimi"],
                        ["İdari-sosyal tesis", "Düşük", "Operatörlü veya operatörsüz", "Müşteri personeli yeterliyse"],
                        ["Jeotermal/kaplıca tesisi", "Orta (gaz riski)", "Operatörlü önerilir", "Emisyon prosedürü bilgisi"],
                    ],
                },
            },
            {
                baslik: "Belge hazırlığının teslimat hızına etkisi",
                paragraflar: [
                    "Santral ve ocak sahalarına giriş için istenen belge seti (operatör yeterlilik sertifikası, makine periyodik kontrol kayıtları, sigorta evrakları) tesis tarafından talep edildiği anda hazır olmalıdır; bu belgeleri her zaman güncel ve erişilebilir tutarız. Belgelerin eksik veya güncel olmaması, sahaya girişte beklenmedik bir gecikmeye yol açabilir.",
                    "Tesisinizin özel bir belge formatı veya ek gereksinimi varsa, bunu bize önceden bildirmeniz, işin ilk gün sorunsuz başlamasını sağlar.",
                ],
            },
            {
                baslik: "Operatörsüz kiralamada müşteri sorumluluğu",
                paragraflar: [
                    "Operatörsüz kiralama tercih edildiğinde, makineyi kullanacak personelin yeterlilik belgesi ve saha güvenlik eğitimi müşterinin sorumluluğundadır; biz bu durumda makinenin teknik durumunu ve temel kullanım brifingini eksiksiz veririz ama sahadaki operasyonel kararlar müşteri personeline aittir.",
                    "Enerji sahalarında bu seçeneği nadiren öneririz çünkü sahaya özgü prosedürlere aşinalık, güvenlik açısından belirleyicidir; ama standart iç mekân işlerinde bu, müşterinin tercihine bırakılan makul bir seçenektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Santral sahasında operatörsüz kiralama mümkün mü?",
                cevap:
                    "Genellikle önermiyoruz çünkü santral sahasındaki İSG rejimi (giriş izni, kilitleme-etiketleme, gaz ölçümü) sahaya aşina bir operatör gerektirir; tesis de çoğu zaman kendi güvenlik prosedürü gereği operatörlü kiralamayı tercih eder. Standart bir idari bina işiyse operatörsüz seçenek değerlendirilebilir.",
            },
            {
                soru: "Operatörünüzün yeterlilik belgeleri tesise nasıl iletiliyor?",
                cevap:
                    "Operatör kadromuzun yeterlilik sertifikaları, makine periyodik kontrol kayıtları ve sigorta evrakları her zaman güncel ve hazır tutulur; tesis talep ettiğinde bu belgeleri anında iletiriz. Tesisinizin özel bir belge formatı varsa, bunu önceden bildirirseniz süreci hızlandırırız.",
            },
            {
                soru: "Operatörümüz sahaya ilk kez giriyor, ek bir eğitim gerekir mi?",
                cevap:
                    "Bazı tesisler, sahaya ilk giren operatöre kısa bir oryantasyon eğitimi verir; bu, tesisin kendi prosedürüdür ve genellikle sahaya giriş gününde tamamlanır. Bu eğitimin süresini bilmiyorsak tesis yetkilisinden önceden öğrenir, işin zamanlamasına dahil ederiz.",
            },
            {
                soru: "Kendi personelimiz operatörsüz kiralayabilir mi, hangi şartlar var?",
                cevap:
                    "Standart iç mekân işlerinde bu mümkündür; personelinizin geçerli bir kullanım yeterliliği olması ve tesisin bu tercihe izin vermesi gerekir. Sorumluluk bu durumda operasyonel açıdan müşteri personeline geçer; biz makinenin teknik durumunu ve temel kullanım brifingini eksiksiz veririz.",
            },
            {
                soru: "Bant galerisi gibi dar alanlarda neden operatörlü kiralama öneriyorsunuz?",
                cevap:
                    "Bu tür alanlarda platformun doğru sırayla hareket ettirilmesi, benzer geometrilerde deneyimli bir operatör gerektirir; yeterli deneyimi olmayan bir kullanıcı makineyi bir engele sıkıştırabilir. Operatörlerimiz bu tür sahalara düzenli girdiği için riski önceden öngörüp önlem alır.",
            },
            {
                soru: "Operatörlü kiralamada ücretlendirme nasıl değişiyor?",
                cevap:
                    "Operatörlü kiralamada, makine kirası dışında operatör hizmeti ayrı bir kalem olarak teklifte gösterilir; bu, işin süresine ve saha karmaşıklığına göre hesaplanır. İşinizin kapsamını verirseniz, operatörlü ve operatörsüz seçeneğin maliyet farkını size karşılaştırmalı gösteririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın linyit ocağı ve termik santral sahalarındaki ağır İSG rejimi (giriş izni, kilitleme-etiketleme) kamuya açık genel maden/santral güvenlik bilgisidir; tesis adı ve rakam kullanılmamıştır. Belge hazırlığı ve operatör-tesis koordinasyonu firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Kütahya Enerji Hattında Çok Noktalı Rota Bakım Platformu",
        giris:
            "Kütahya'nın enerji ve destek sanayisi, tek bir noktada değil merkez-Tavşanlı-Seyitömer-Tunçbilek-Gediz-Simav-Bilecik-Uşak hattı boyunca dağılmış durumdadır; bu dağınık yapı, birden fazla saha için tek bir platform ve tek bir sevkiyat programıyla hizmet verilebilecek bir rota fırsatı da yaratır. Bu sayfa, çok noktalı rota bakım hizmetimizin bu enerji hattında nasıl kurgulandığını ve hangi işlerin bu modele uygun olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Hat üzerindeki birden fazla sahanın tek turda birleşimi",
                metin:
                    "Merkezden başlayan bir sevkiyat, Tavşanlı'daki bir santral işine, ardından Gediz'deki bir ara işe uğrayabilir; bu tür bir rota, her sahanın ayrı ayrı sevkiyatına göre belirgin bir zaman ve maliyet tasarrufu sağlar. Rota kurgusu, her sahanın tarih esnekliğine ve iş süresine göre önceden planlanır.",
            },
            {
                baslik: "Farklı öncelik seviyesindeki işlerin aynı rotada dengelenmesi",
                metin:
                    "Santral ve ocak sahalarındaki acil çağrılar önceliklidir, ama bu öncelik rotadaki diğer standart işleri tamamen dışlamaz; rota planlanırken önce acil ve yüksek öncelikli duraklar sabitlenir, ardından esnek tarihli standart işler bu duraklar arasındaki boşluklara yerleştirilir.",
            },
            {
                baslik: "Farklı enerji türlerinin (termik-jeotermal) aynı rotada yönetimi",
                metin:
                    "Tavşanlı'nın termik santral hattı ile Simav'ın jeotermal sahası farklı risk profillerine sahiptir; bir rota her ikisini de kapsıyorsa, operatör her sahaya özgü güvenlik brifingini ayrı ayrı alır. Bu, aynı günde veya aynı hafta içinde iki farklı enerji türüne hizmet verilmesini mümkün kılar.",
            },
            {
                baslik: "OSB destek işletmelerinin ana hatta eklenmesi",
                metin:
                    "Bilecik ve Uşak OSB'lerindeki enerji sektörü tedarikçisi işletmelerin işleri, ana hattan bir sapma gerektirse de, aynı hafta içinde değerlendirildiğinde rotaya eklenebilir; bu, tekil sevkiyata göre maliyet avantajı sağlar ama sapma mesafesi rota süresini uzatabileceği için bu süre önceden hesaba katılır.",
            },
            {
                baslik: "Rota planlamasında hava koşulu ve mevsim payı",
                metin:
                    "Kütahya platosunun kış iklimi, çok noktalı bir rotanın toplam süresini etkileyebilir; kar ve buzlanma riskinin yüksek olduğu günlerde rota süresine ekstra pay bırakılır veya bazı duraklar bir sonraki güne kaydırılır. Bu esneklik, rotadaki tüm müşterilere önceden bildirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji hattında tipik rota kurgusu",
                paragraflar: [
                    "Aşağıdaki tablo, hattaki farklı durak tiplerinin rota içindeki önceliğini özetler.",
                ],
                tablo: {
                    basliklar: ["Durak tipi", "Öncelik", "Tarih esnekliği", "Rotaya eklenme şekli"],
                    satirlar: [
                        ["Santral/ocak acil işi", "Çok yüksek", "Düşük", "Rota bu durağa göre kurulur"],
                        ["Santral/ocak standart bakım", "Yüksek", "Orta", "Sabit duraklar arası"],
                        ["Gediz/Bilecik ara iş", "Orta", "Yüksek", "Esnek tarihte eklenir"],
                        ["Simav jeotermal işi", "Orta", "Orta (misafir sezonuna bağlı)", "Ayrı güvenlik brifingiyle"],
                        ["Uşak OSB tedarikçi işi", "Değişken", "Orta", "Haftalık rota değerlendirmesi"],
                    ],
                },
            },
            {
                baslik: "Rota kurgusunun adım adım işleyişi",
                paragraflar: [
                    "Bir hafta için rota kurarken önce o hafta bildirilen acil ve yüksek öncelikli işler sabitlenir; bu işler genellikle santral ve ocak sahalarındandır. Ardından tarih esnekliği olan standart işler, bu sabit duraklar arasındaki coğrafi ve zamansal boşluklara yerleştirilir. Son olarak, sapma gerektiren OSB veya ara durak işleri, toplam rota süresine kattıkları ek zaman değerlendirilerek eklenir veya bir sonraki haftaya bırakılır.",
                    "Bu süreç, müşterilere kesin bir tarih verilmeden önce tamamlanır; bu yüzden çok noktalı rotaya dahil edilmek isteyen müşterilerden işlerini mümkün olduğunca erken bildirmelerini isteriz.",
                ],
            },
            {
                baslik: "Farklı saha tiplerinde operatör hazırlığının yönetimi",
                paragraflar: [
                    "Aynı rotada bir termik santral durağı ile bir jeotermal saha durağı varsa, operatörümüz her durağa özgü güvenlik brifingini ayrı ayrı alır; bu, iki sahanın risklerinin (kömür tozu-baca sistemi ile sıcak akışkan-gaz emisyonu) birbirine karıştırılmamasını sağlar. Rotadaki her durağın kendi belge ve izin gereksinimi ayrı ayrı takip edilir.",
                    "Bu çoklu hazırlık, rota süresine bir miktar ek zaman ekler ama güvenlik açısından atlanmaz; bu süre rota planına baştan dahil edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İşimizi çok noktalı rotaya nasıl dahil ettirebiliriz?",
                cevap:
                    "İşinizi mümkün olduğunca erken bildirmeniz ve tarihte esneklik bırakmanız yeterli; bu, işinizin uygun bir haftalık rotaya yerleştirilme şansını doğrudan artırır. Konumunuzu ve işin kapsamını verirseniz, en yakın uygun rotaya ekleyip size haber veririz.",
            },
            {
                soru: "Rotadaki acil bir santral işi bizim işimizi geciktirir mi?",
                cevap:
                    "Geciktirebilir çünkü santral ve ocak sahalarındaki acil çağrılar rotada önceliklidir; ama rota kurgusu bu önceliği baştan hesaba kattığı için, standart işler genellikle makul bir bekleme süresiyle karşılanır. Acil bir durum olursa güncellemeyi anında paylaşırız.",
            },
            {
                soru: "Aynı rotada hem termik santral hem jeotermal sahaya gidiliyorsa güvenlik nasıl yönetiliyor?",
                cevap:
                    "Operatörümüz her sahaya özgü güvenlik brifingini ayrı ayrı alır çünkü iki sahanın riskleri (kömür tozu-baca sistemi ile sıcak akışkan-gaz emisyonu) tamamen farklıdır. Bu ayrım rotanın planlama aşamasında netleştirilir; her durağın kendi belge ve izin gereksinimi ayrı takip edilir.",
            },
            {
                soru: "Bilecik OSB'deki işimiz ana hattan sapma gerektiriyor, rotaya girer mi?",
                cevap:
                    "Girebilir; aynı hafta içinde değerlendirildiğinde bu sapma rotaya eklenebilir, ama sapma mesafesi toplam rota süresini uzatacağı için bu süre önceden hesaba katılır. Bu, tekil sevkiyata göre yine de maliyet avantajı sağlar; teklifte iki seçeneği karşılaştırmalı gösteririz.",
            },
            {
                soru: "Kış aylarında rota süresi ne kadar uzayabilir?",
                cevap:
                    "Kar ve buzlanma riskinin yüksek olduğu günlerde rota süresine ekstra bir pay bırakırız veya bazı durakları bir sonraki güne kaydırırız; bu esnekliği rotadaki tüm müşterilere önceden bildiririz. Kesin bir gecikme tahmini vermek zor olsa da, en gerçekçi pencereyi baştan paylaşırız.",
            },
            {
                soru: "Rotaya son anda eklenen bir işimiz olursa ne olur?",
                cevap:
                    "Rota zaten kurulmuşsa son anda eklenen bir iş, mevcut duraklar arasında boşluk varsa değerlendirilir; yoksa bir sonraki rotaya veya tekil sevkiyata yönlendiririz. Bu yüzden mümkün olduğunca erken bildirim, rotaya girme şansınızı artıran en önemli faktördür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın merkez-Tavşanlı-Seyitömer-Tunçbilek-Gediz-Simav-Bilecik-Uşak enerji hattının coğrafi dağılımı ve platonun kış iklimi kamuya açık bölgesel bilgidir; işletme adı ve rakam kullanılmamıştır. Rota kurgu adımları ve çoklu güvenlik brifingi firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Kütahya Linyit Ocağı ve Arazi Sahalarında Zor Zemin Platform Kiralama",
        giris:
            "Kütahya'nın linyit ocağı destek tesisleri ve bazı termik santral çevresi sahaları, standart bir sanayi holünün düz betonundan çok farklı bir zemin sunar: sıkıştırılmış dolgu, moloz karışımı, yağış sonrası aldatıcı hâle gelen açık arazi. Bu sayfa, zor zemin ve arazi koşullarında platform kiralama hizmetimizin bu sahalarda nasıl uygulandığını, hangi makine sınıfının hangi zemine uygun olduğunu ve park noktası seçiminin neden işin ilk adımı olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Ocak destek tesislerinde sıkıştırılmış dolgu zemin",
                metin:
                    "Linyit ocağının çevresinde kurulu bant konveyör köprüleri ve eleme-yıkama tesislerinin etrafındaki zemin genellikle sıkıştırılmış dolgu ve moloz karışımıdır; bu yüzeyler kuru havada sağlam görünse de yağış sonrası aldatıcı olabilir. Bu tür sahalarda arazi tipi (dört tekerlekten çekişli) lastikli makineler standart tercih olurken, gerektiğinde yük dağıtım plakası da kullanılır.",
            },
            {
                baslik: "Park noktası seçimi işin ilk adımı",
                metin:
                    "Zor zemin sahalarında park noktası seçimi, işin en kritik ilk kararıdır; sıkıştırılmış dolgu ve moloz karışımı yüzeyler yağış sonrası özellikle aldatıcıdır. Park noktaları önceden belirlenir, şüpheli yerlerde yük dağıtım plakası serilir; operatör duruşta tereddüt varsa çalışmayı başlatmaz, nokta değiştirilir.",
            },
            {
                baslik: "Açık arazide eğim ve stabilizatör kullanımı",
                metin:
                    "Bazı açık saha işlerinde zemin tamamen düz değildir; hafif eğimli yüzeylerde makinenin stabilizatör ayakları farklı kotlara ayrı ayrı ayarlanarak düzgün bir duruş sağlanır. Eğimin belirgin olduğu noktalarda, makinenin devrilme riskine karşı üretici sınırları kesinlikle aşılmaz; bu sınırın içinde kalan bir konum bulunamıyorsa iş farklı bir erişim açısıyla planlanır.",
            },
            {
                baslik: "Yağmur sonrası zemin değerlendirmesi",
                metin:
                    "Kütahya'nın yüksek rakımlı platosunda yağış, açık arazi zeminini hızla değiştirebilir; bir gün önce sağlam görünen bir yüzey, yağış sonrası çamurlu ve kaygan hâle gelebilir. Bu yüzden yağışlı dönemlerde planlanan işlerde, sahaya varmadan önce zemin durumu telefonla teyit edilir ve gerekirse iş bir gün ertelenir.",
            },
            {
                baslik: "Zemin taşıma kapasitesi bilinmeyen sahalarda ön kontrol",
                metin:
                    "Yeni bir saha veya daha önce çalışılmamış bir bölge söz konusu olduğunda, zemin taşıma kapasitesi net değilse ağır bir makine doğrudan gönderilmez; bunun yerine kısa bir ön keşif yapılır veya tesis yetkilisinden zemin bilgisi istenir. Bu adım, sahada makinenin batması veya devrilmesi gibi ciddi bir riski baştan eler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya'da zemin tipine göre makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, farklı zemin tiplerinde platform seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Risk", "Makine tercihi", "Ek önlem"],
                    satirlar: [
                        ["Sıkıştırılmış dolgu (kuru)", "Orta", "Arazi tipi lastikli", "Standart"],
                        ["Dolgu/moloz (yağış sonrası)", "Yüksek", "Arazi tipi lastikli", "Yük dağıtım plakası"],
                        ["Hafif eğimli açık saha", "Orta-yüksek", "Stabilizatör ayaklı", "Kot farkı ayarı"],
                        ["Yeni/bilinmeyen saha", "Belirsiz", "Belirlenmeden önce ön keşif", "Zemin taşıma teyidi"],
                        ["Standart sağlam beton", "Düşük", "Standart lastikli/akülü", "Yok"],
                    ],
                },
            },
            {
                baslik: "Park noktası seçiminin sahadaki uygulaması",
                paragraflar: [
                    "Zor zemin sahalarında operatörümüz, işe başlamadan önce çalışma alanının çevresini yürüyerek kontrol eder ve zeminin görünüşte sağlam ama şüpheli olduğu noktaları belirler; bu noktalarda ya park yeri değiştirilir ya da yük dağıtım plakası serilir. Bu kontrol, sahaya her yeni gelişte tekrarlanır çünkü zemin durumu gün içinde (özellikle yağış sonrası) değişebilir.",
                    "Bu yaklaşım, hız kaybı gibi görünse de, bir makinenin sahada batması veya devrilmesi durumunda oluşacak çok daha büyük bir gecikmeyi baştan önler.",
                ],
            },
            {
                baslik: "Yağışlı dönemde iş planlamasının esnekliği",
                paragraflar: [
                    "Kütahya'nın plato ikliminde yağışlı günler zemin koşulunu hızla değiştirebildiği için, açık arazi işlerinde kesin bir tarih yerine bir tarih aralığı önermeyi tercih ederiz; sahaya varmadan önce zemin durumunu telefonla teyit eder, gerekirse işi bir gün erteleriz.",
                    "Acil bir iş varsa, zemin riskini göz önünde bulundurarak en güvenli erişim noktasını belirler ve mümkün olan en kısa sürede sahaya çıkarız; güvenlik konusunda bir taviz vermeyiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocak destek tesisimizin zemini çok gevşek, makine devrilme riski taşır mı?",
                cevap:
                    "Zemin kontrol edilmeden çalışılırsa taşır; bu yüzden park noktası seçimi bu tür sahalarda işin ilk maddesidir. Sıkıştırılmış dolgu ve moloz karışımı yüzeyler yağış sonrası aldatıcı olabilir, park noktaları önceden belirlenir ve şüpheli yerlerde yük dağıtım plakası serilir. Operatör tereddüt varsa çalışmayı başlatmaz, nokta değiştirilir.",
            },
            {
                soru: "Yağmurdan sonra sahaya gelebiliyor musunuz?",
                cevap:
                    "Gelebiliriz ama önce zemin durumunu telefonla teyit ederiz; bir gün önce sağlam görünen bir yüzey yağış sonrası çamurlu ve kaygan hâle gelebilir. Zemin riskli görünüyorsa işi bir gün erteleriz; bu, hem makinenin hem operatörün güvenliği için gerekli bir tedbirdir.",
            },
            {
                soru: "Sahamızın zemin taşıma kapasitesini bilmiyoruz, doğrudan makine gönderir misiniz?",
                cevap:
                    "Bilinmeyen bir zeminde ağır bir makineyi doğrudan göndermeyiz; bunun yerine kısa bir ön keşif yaparız veya tesis yetkilisinden zemin bilgisi isteriz. Bu adım, sahada makinenin batması veya devrilmesi gibi ciddi bir riski baştan eler.",
            },
            {
                soru: "Hafif eğimli bir arazide platform güvenli şekilde durabilir mi?",
                cevap:
                    "Stabilizatör ayaklarını farklı kotlara ayrı ayrı ayarlayarak düzgün bir duruş sağlarız; ama eğim üretici sınırlarını aşıyorsa bu konumda çalışmayız, farklı bir erişim açısı ararız. Sahanızın eğim durumunu önceden bilirsek, uygun makine ve konumu baştan öneririz.",
            },
            {
                soru: "Arazi tipi makineniz standart bir platforma göre ne kadar farklı çalışıyor?",
                cevap:
                    "Arazi tipi makineler dört tekerlekten çekişli olduğu için dolgu ve moloz karışımı zeminlerde standart lastikli sınıfa göre belirgin şekilde daha iyi tutunma sağlar; ayrıca genellikle daha yüksek yer açıklığına sahiptir. Zemin durumunuzu bildiğinizde, bu iki sınıf arasındaki farkı işinize göre açıklarız.",
            },
            {
                soru: "Zor zemin işlerinde ek bir ücret var mı?",
                cevap:
                    "Arazi tipi makine ve gerekiyorsa yük dağıtım plakası gibi ek önlemler, standart bir işe göre farklı bir maliyet kalemi oluşturabilir; bu farkı teklifte açıkça gösteririz, sahadan sonra sürpriz bir ek ücret çıkmaz. Zemin durumunuzu önceden paylaşırsanız, gerçekçi bir teklif baştan hazırlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın linyit ocağı destek tesislerindeki dolgu/moloz zemin yapısı ve platonun yağışlı-kış ikliminin zemin koşulunu etkilediği kamuya açık genel bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Park noktası seçim disiplini ve zemin ön kontrolü firma pratiğidir.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Kütahya Termik Santral ve Linyit Ocağı Sahalarında Geniş Platformlu Makaslı Kiralama",
        giris:
            "Tavşanlı-Seyitömer-Tunçbilek hattındaki termik santral ve linyit ocağı destek tesislerinin bir kısmı, önünde engel olmayan ama alanı geniş ve zemini düz olan yüzeylerden oluşur: türbin binasının açıklıklı iç holü, kazan dairesinin dış cephesi, kömür stok sahasının çevre duvarı ve bant galerisinin düz uzayan hatları gibi. Bu tür yüzeylerde iş, tek bir noktaya değil geniş bir hatta yayılır ve çoğu zaman birden fazla teknisyenin ve ağırlıkça belirgin malzemenin (izolasyon paneli, boya ekipmanı, kablo tamburu) aynı anda platform üzerinde taşınmasını gerektirir. Makaslı platformun dikey doğru çıkan geniş gövdesi ve yüksek taşıma kapasitesi, tam olarak bu ihtiyaca karşılık gelir; eklemli platformun engel aşma esnekliğine burada gerek yoktur, çünkü hedefin önünde dolanılacak bir boru veya çelik dikme bulunmaz. Bu sayfa, kardeş dosyalarımızdaki eklemli platform (engelli hedef) ve iç mekân platform (dar koridor/raf) hizmetlerinden ayrı olarak, makaslı platformun bu geniş-düz-yüklü saha profilinde nasıl konumlandığını anlatır. Zemin ve genişlik ön kontrolü, her işten önce ayrı ayrı yapılan bir adımdır çünkü makaslı platformun stabilitesi düz ve sağlam bir taban gerektirir; eğimli veya dolgu bir yüzeyde bu sınıf tercih edilmez, bunun yerine arazi tipi bir alternatif değerlendirilir.",
        maddeler: [
            {
                baslik: "Türbin binası geniş holünde çoklu personel ve malzeme taşıma",
                metin:
                    "Türbin binasının açıklıklı iç holünde yapılan çatı altı, vinç ray sistemi çevresi veya üst kat aydınlatma işlerinde, aynı anda birden fazla teknisyenin ve ağır bir malzeme yükünün platform üzerinde bulunması gerekebilir; makaslı platformun geniş sepeti ve yüksek yük kapasitesi bunu tek seferde mümkün kılar, tek kişilik dar sepetli sınıflarda iş birden fazla çıkışa bölünmek zorunda kalır.",
            },
            {
                baslik: "Kazan dairesi dış cephesinde düz hat boyunca ilerleme",
                metin:
                    "Kazan dairesinin dış cephesindeki boya, izolasyon kontrolü veya kaplama onarımı işleri, genellikle düz bir duvar hattı boyunca yatay olarak ilerler; makaslı platform bu hatta kısa aralıklarla durup dikey çıkış yaparak çalışır, engelsiz düz bir cephede bu, eklemli kolun karmaşık manevrasına göre daha hızlı ve daha ekonomik bir yöntemdir.",
            },
            {
                baslik: "Kömür stok sahası çevre aydınlatma ve duvar bakımı",
                metin:
                    "Kömür stok sahasının çevresindeki aydınlatma direkleri ve istinat duvarı üstü bakımı, sahanın açık ve düz zemin yapısı sayesinde makaslı platformla sıra hâlinde ilerlenerek yapılır; zemin genellikle sıkıştırılmış olsa da tozlu olabileceğinden, çalışma öncesi kısa bir zemin gözlemi yapılır ve gerekiyorsa arazi tipi lastikli makaslı sınıfına geçilir.",
            },
            {
                baslik: "Bant galerisi düz uzun hatlarında ağır malzeme taşıma",
                metin:
                    "Bant konveyör galerisinin düz uzayan bölümlerinde yapılan bakım işlerinde, yedek rulman veya bant parçası gibi ağırlıkça belirgin malzemenin platform üzerinde teknisyenle birlikte taşınması gerekebilir; makaslı platformun yük kapasitesi bu tür malzemeyi güvenle taşımaya uygundur, galerinin engelli kesimlerinde ise bu sınıf yerine eklemli platform önerilir.",
            },
            {
                baslik: "Zemin ve genişlik şartı — makaslı platformun net sınırı",
                metin:
                    "Makaslı platform, dikey doğru çıktığı ve yana doğru uzanamadığı için düz ve yeterince geniş bir zemin gerektirir; dar bir koridor, eğimli bir yüzey veya önünde engel bulunan bir hedef bu sınıf için uygun değildir. Böyle bir durumda sahayı önceden değerlendirir, gerekirse eklemli veya kompakt manlift sınıfını öneririz — bu netlik, sahaya yanlış makine gönderilmesini baştan önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji sahalarında makaslı platform kullanım alanları",
                paragraflar: [
                    "Aşağıdaki tablo, hangi saha tipinde makaslı platformun neden tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Tipik iş", "Neden makaslı", "Zemin şartı"],
                    satirlar: [
                        ["Türbin binası holü", "Çoklu personel/malzeme", "Geniş sepet, yüksek kapasite", "Düz, sağlam beton"],
                        ["Kazan dairesi dış cephe", "Boya, izolasyon kontrolü", "Düz hat boyunca hızlı ilerleme", "Düz, sert zemin"],
                        ["Kömür stok sahası çevresi", "Aydınlatma, duvar bakımı", "Sıra hâlinde geniş erişim", "Sıkıştırılmış, tozlu olabilir"],
                        ["Bant galerisi düz kesim", "Ağır malzeme taşıma", "Yüksek yük kapasitesi", "Düz, sağlam zemin"],
                        ["Engelli veya dar hedef", "—", "Uygun değil, eklemli önerilir", "—"],
                    ],
                },
            },
            {
                baslik: "Makaslı ile eklemli platform arasındaki net ayrım",
                paragraflar: [
                    "Makaslı platform yalnızca dikey doğru çıkar; yana doğru uzanma veya engelin üzerinden dolanma yeteneği yoktur. Bu yüzden hedefin önünde bir boru hattı, çelik dikme veya başka bir engel varsa bu sınıf değil, eklemli (boom) platform önerilir — bu ayrımı işin fotoğrafını görmeden önce bile keşif sorularıyla netleştiririz.",
                    "Buna karşılık hedef düzse ve alan genişse, makaslı platform hem daha geniş bir sepet hem de daha yüksek bir yük kapasitesi sunar; bu durumda eklemli sınıfa göre daha hızlı ve daha ekonomik bir seçimdir. İki sınıf arasındaki bu net ayrım, teklif aşamasında müşteriye açıkça anlatılır.",
                ],
            },
            {
                baslik: "Zemin ve genişlik ön kontrolü",
                paragraflar: [
                    "Makaslı platform göndermeden önce sahanın zemin sağlamlığını ve çalışma alanının genişliğini sorarız; kömür stok sahası gibi tozlu-sıkıştırılmış zeminlerde bu kontrol özellikle önemlidir çünkü görünüşte sağlam bir yüzey altta gevşek olabilir. Zemin şüpheliyse kısa bir ön keşif yapılır veya arazi tipi lastikli makaslı sınıfına geçilir.",
                    "Genişlik kontrolü de aynı derecede önemlidir; dar bir koridor veya sınırlı bir açıklık için makaslı platform uygun değildir, böyle bir alan için kompakt manlift veya iç mekân sınıfımız değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Türbin binasında birden fazla teknisyen aynı anda platformda çalışabilir mi?",
                cevap:
                    "Evet, makaslı platformun geniş sepeti ve yüksek yük kapasitesi buna uygundur; kaç teknisyen ve ne kadar malzeme taşınacağını önceden bildirirseniz, kapasiteye uygun modeli seçeriz. Bu, işin tek seferde tamamlanmasını sağlar, dar sepetli sınıflarda olduğu gibi birden fazla çıkışa bölünmez.",
            },
            {
                soru: "Kazan dairesi dış cephesi düz ama uzun, bu iş ne kadar sürer?",
                cevap:
                    "Süre, cephenin uzunluğuna ve iş kapsamına göre değişir; makaslı platform düz bir hat boyunca kısa aralıklarla durup dikey çıkış yaparak ilerlediği için, engelli bir hatta göre belirgin şekilde daha hızlıdır. Cephe uzunluğunu ve iş türünü paylaşırsanız gerçekçi bir süre tahmini veririz.",
            },
            {
                soru: "Kömür stok sahasının zemini tozlu, makaslı platform buraya girebilir mi?",
                cevap:
                    "Zemin sağlamsa girebilir, ama tozlu-sıkıştırılmış yüzeylerde görünüşte sağlam bir alan altta gevşek olabileceği için önce kısa bir zemin gözlemi yaparız. Şüphe varsa standart makaslı yerine arazi tipi lastikli bir modeli öneririz; bu karar sahaya gitmeden önce netleştirilir.",
            },
            {
                soru: "Bant galerisinde hem düz hem engelli kısımlar var, tek makine ile hallolur mu?",
                cevap:
                    "Genellikle hayır; düz kesimlerde makaslı platform, engelli kesimlerde ise eklemli platform daha uygundur. Galerinin hangi bölümünde ne tür bir engel olduğunu paylaşırsanız, işi iki sınıfa bölerek mi yoksa tek bir eklemli platformla mı halledeceğimizi birlikte kararlaştırırız.",
            },
            {
                soru: "Makaslı platform dar bir koridora sığar mı?",
                cevap:
                    "Standart makaslı platformlar geniş bir alan için tasarlandığından dar koridorlara uygun değildir; böyle bir alan için kompakt manlift veya dar koridor uyumlu iç mekân sınıfımızı öneririz. Koridor genişliğini bildirirseniz, uygun makine sınıfını baştan netleştiririz.",
            },
            {
                soru: "Ağır malzemeyi (rulman, bant parçası) platformla birlikte taşıyabilir miyiz?",
                cevap:
                    "Evet, makaslı platformun yük kapasitesi teknisyenle birlikte ağırlıkça belirgin malzemeyi taşımaya uygundur; taşınacak malzemenin yaklaşık ağırlığını önceden bildirirseniz, kapasiteyi karşılayan modeli seçeriz. Kapasitenin üzerinde bir yük söz konusuysa, bunu size önceden bildirir ve alternatif bir yöntem öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek termik santral ve linyit ocağı sahalarındaki türbin binası, kazan dairesi, kömür stok sahası ve bant galerisi gibi yapıların varlığı kamuya açık genel tesis bilgisidir; tesis adı ve rakam kullanılmamıştır. Zemin/genişlik ön kontrolü ve sınıf ayrımı firma pratiğidir.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Kütahya Termik Santral ve Linyit Ocağı Sahalarında Kompakt Manlift Kiralama",
        giris:
            "Tavşanlı-Seyitömer-Tunçbilek hattındaki termik santral ve linyit ocağı tesislerinde, her iş geniş bir alana veya engelli bir hedefe yayılmaz; çoğu zaman tek bir noktaya — bir lamba, bir sensör, bir valf, bir kablo bağlantısı — kısa süreli ve hızlı bir dikey erişim gerekir. Bu tür işler genellikle kazan dairesi veya türbin binası içindeki ekipmanlar arasındaki dar aralıklarda, ya da ocak destek tesislerinin sıkışık koridorlarında geçer; buraya makaslı platformun geniş gövdesi girmez, eklemli platformun karmaşık manevrasına da gerek yoktur. Kompakt manlift, tek kişilik dar sepeti ve ince gövdesiyle bu tür tekil-nokta işlerinde hızlı konumlandırma ve hızlı çıkış imkânı sunar; çoğu zaman kendinden hareketli veya itmeli tip yeterlidir, akülü çalışması sayesinde kontrol odası veya kapalı ekipman odaları yakınında sessiz ve egzozsuz bir seçenek olur. Bu sayfa, kardeş dosyalarımızdaki makaslı platform (geniş-düz-yüklü alan) ve eklemli platform (engelli hedef) hizmetlerinden ayrı olarak, kompakt manliftin bu dar-tekil-nokta profilinde nasıl kullanıldığını anlatır. İşin süresi genellikle kısa olduğu için, üretim vardiyası içindeki kısa boşluklara sığdırılarak planlanır; bu da tesisin üretim akışını kesintiye uğratmadan bakımın tamamlanmasını sağlar.",
        maddeler: [
            {
                baslik: "Tek nokta hızlı dikey erişim — kısa süreli işler",
                metin:
                    "Bir lamba değişimi, bir sensör kontrolü veya bir valf ayarı gibi tek bir noktaya odaklı işlerde, kompakt manlift birkaç dakika içinde konumlanıp iş bittiğinde hızla geri çekilebilir; bu, geniş bir platform kurulumunun gerekmediği kısa süreli işlerde hem zaman hem maliyet açısından daha verimli bir yöntemdir.",
            },
            {
                baslik: "Kazan dairesi ve türbin binası ekipman arası dar aralıklarda kompakt gövde",
                metin:
                    "Kazan dairesi ve türbin binası içindeki boru hatları, panolar ve ekipmanlar arasında bırakılan dar aralıklarda, ancak ince gövdeli bir makine geçebilir; kompakt manliftin dar sepeti ve ince gövdesi bu aralıklara girip hedefe doğrudan dikey erişim sağlar, makaslı platformun geniş gövdesi bu aralıklara sığmaz.",
            },
            {
                baslik: "İtmeli/kendinden hareketli tip ile hızlı konumlandırma",
                metin:
                    "Çoğu tekil-nokta işi için itmeli veya kendinden hareketli kompakt manlift yeterlidir; bu tip, bir noktadan diğerine hızlıca taşınabildiği için aynı vardiya içinde birbirinden bağımsız birkaç tekil işin art arda tamamlanmasını mümkün kılar. Daha büyük bir kapsam veya yükseklik gerekiyorsa, bu sınıf yerine makaslı veya eklemli platform önerilir.",
            },
            {
                baslik: "Vardiya arası kısa pencerelerde çalışma",
                metin:
                    "Termik santral ve ocak sahalarındaki üretim genellikle kesintisizdir; kompakt manliftin hızlı kurulum ve sökülme özelliği, vardiya değişimi veya kısa bir üretim durağı gibi dar zaman pencerelerine sığdırılarak kullanılmasını sağlar. Bu planlama, tesis yetkilisiyle önceden koordine edilir.",
            },
            {
                baslik: "Akülü sessiz çalışma — kontrol odası yakını hassasiyeti",
                metin:
                    "Kontrol odası veya hassas ölçüm ekipmanı bulunan alanların yakınında yapılan işlerde, kompakt manliftin akülü ve egzozsuz çalışması hem gürültü hem hava kalitesi açısından avantaj sağlar; bu, dizel motorlu bir makinenin bu tür hassas alanlara sokulmasının uygun olmadığı durumlarda tek gerçekçi seçenektir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kütahya enerji sahalarında kompakt manlift kullanım noktaları",
                paragraflar: [
                    "Aşağıdaki tablo, hangi tekil-nokta işinde kompakt manliftin neden tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "Tipik iş", "Neden manlift", "İş süresi"],
                    satirlar: [
                        ["Kazan dairesi ekipman arası", "Sensör, valf kontrolü", "Dar aralığa giren ince gövde", "Dakikalar-1 saat"],
                        ["Türbin binası pano çevresi", "Lamba, kablo bağlantısı", "Hızlı konumlandırma", "Kısa"],
                        ["Kontrol odası yakını", "Hassas alan bakımı", "Akülü, sessiz, egzozsuz", "Kısa"],
                        ["Ocak destek tesisi koridoru", "Tekil aydınlatma noktası", "Dar koridora uygun", "Kısa"],
                        ["Geniş/engelli alan", "—", "Uygun değil, makaslı/eklemli önerilir", "—"],
                    ],
                },
            },
            {
                baslik: "Manlift ile makaslı/eklemli platform arasındaki net ayrım",
                paragraflar: [
                    "Kompakt manlift, tek kişilik dar sepeti nedeniyle geniş bir alanda çoklu personel veya ağır malzeme taşımaya uygun değildir — böyle bir iş için makaslı platform önerilir. Aynı şekilde, hedefin önünde bir engel varsa ve kolun yukarı-sonra-yatay dolanması gerekiyorsa, bu da manliftin değil eklemli platformun işidir.",
                    "Manliftin asıl gücü, dar bir aralığa girip tek bir noktaya hızlıca ulaşmaktır; iş kapsamı büyüdükçe veya alan genişledikçe diğer iki sınıf devreye girer. Bu ayrımı, işin tarifini dinledikten sonra keşif aşamasında netleştiririz.",
                ],
            },
            {
                baslik: "Vardiya planlamasında kısa pencere kullanımı",
                paragraflar: [
                    "Üretimi kesintisiz süren tesislerde, kompakt manlift işlerini vardiya değişimi veya planlı kısa bir üretim durağı gibi dar zaman pencerelerine yerleştiririz; bu, tesisin üretim akışını bozmadan bakımın tamamlanmasını sağlar. Bu pencereleri tesis yetkilisinden önceden öğreniriz.",
                    "Aynı vardiya içinde birden fazla tekil-nokta işi varsa, bunları art arda planlayarak tek bir sevkiyatla birden fazla noktayı kısa sürede tamamlarız; bu, hem müşteri hem bizim için zaman açısından verimlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek bir lamba değişimi için makine göndermeniz maliyetli olmaz mı?",
                cevap:
                    "Kompakt manlift, tam olarak bu tür kısa süreli tekil işler için tasarlanmıştır; hızlı kurulum ve sökülme sayesinde işin kendisi dakikalar sürer. Aynı vardiya içinde başka tekil işleriniz varsa bunları da bildirin, tek sevkiyatla birlikte planlayarak maliyeti daha verimli hâle getiririz.",
            },
            {
                soru: "Kazan dairesindeki ekipmanlar arası aralık çok dar, makine sığar mı?",
                cevap:
                    "Kompakt manliftin ince gövdesi çoğu dar aralığa girecek şekilde tasarlanmıştır, ama kesin uygunluk için aralığın yaklaşık genişliğini önceden isteriz. Bu ölçü olmadan gönderilen bir makine sahada aralığa sığmayabilir, bu yüzden bu bilgiyi talep formunda ayrıca sorarız.",
            },
            {
                soru: "Kontrol odası yakınında dizel makine kullanamıyoruz, alternatif nedir?",
                cevap:
                    "Bu tür hassas alanların yakınında akülü kompakt manlift kullanırız; egzozsuz ve düşük gürültülü çalışması, kontrol odası veya hassas ölçüm ekipmanının bulunduğu alanlar için uygun tek seçenektir. Alanın tam konumunu belirtirseniz, doğru sınıfı baştan öneririz.",
            },
            {
                soru: "Üretim durmadan bakım yapabilir misiniz?",
                cevap:
                    "Genellikle evet; kompakt manliftin hızlı kurulum özelliği, vardiya değişimi veya planlı kısa bir üretim durağı gibi dar zaman pencerelerine sığdırılmasını mümkün kılar. Tesisinizin bu tür pencerelerini önceden bildirirseniz, işi bu pencerelere göre planlarız.",
            },
            {
                soru: "Aynı vardiyada birden fazla tekil noktada işimiz var, tek seferde halledilir mi?",
                cevap:
                    "Evet, bu tür işleri art arda planlayarak tek bir sevkiyatla birden fazla noktayı aynı vardiya içinde tamamlarız; bu, hem sizin hem bizim için zaman ve maliyet açısından verimlidir. Noktaların listesini ve yaklaşık konumlarını önceden paylaşırsanız, en verimli sırayı biz kurgularız.",
            },
            {
                soru: "İşimiz aslında geniş bir alana yayılıyor, manlift yeterli olur mu?",
                cevap:
                    "Hayır, kompakt manlift tek kişilik dar sepeti nedeniyle geniş alan veya çoklu personel/malzeme taşıma işlerine uygun değildir; böyle bir işte makaslı platform öneririz. İşin kapsamını tarif ederseniz, doğru sınıfı — manlift, makaslı veya eklemli — keşif aşamasında netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kütahya'nın Tavşanlı-Seyitömer-Tunçbilek termik santral ve linyit ocağı tesislerindeki kazan dairesi, türbin binası ve kontrol odası gibi yapıların varlığı kamuya açık genel tesis bilgisidir; tesis adı ve rakam kullanılmamıştır. Vardiya penceresi planlaması ve sınıf ayrımı firma pratiğidir.",
    },
};
