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
        h1: "Uşak ve Çevresinde Enerji Sektörü Destek Hizmeti",
        giris:
            "Uşak, tekstil ağırlıklı sanayi kimliğiyle bilinen bir komşu il olsa da, OSB'sinde ve çevresinde Tavşanlı havzasındaki maden-termik santral kuşağına dolaylı hizmet veren metal işleme ve nakliye destek işletmeleri de bulunur. Bu sayfa, Uşak'ın baskın tekstil kimliğini yok saymadan, enerji sektörüyle olan bu dolaylı bağlantıyı ve buradaki destek tesislerinin platform ihtiyacını, mesafe faktörünü de hesaba katarak anlatır.",
        maddeler: [
            {
                baslik: "OSB'deki metal işleme ve nakliye destek işletmeleri",
                metin:
                    "Uşak OSB içindeki bazı metal işleme atölyeleri ve ağır nakliye firmaları, Tavşanlı havzasındaki maden-santral işletmelerine ekipman bakımı veya taşıma hizmeti sunar; bu işletmelerin çatı, aydınlatma ve garaj bakımı standart bir sanayi profilindedir, ancak enerji sektörünün sevkiyat yoğunluğu çalışma programını dolaylı etkiler.",
            },
            {
                baslik: "Uzak mesafede sevkiyat planlaması",
                metin:
                    "Uşak'ın hem merkeze hem Tavşanlı havzasına olan mesafesi, tekil işlerde nakliye maliyetinin payını belirgin şekilde artırır; bu yüzden bölgedeki işleri tarih esnekliğiyle birleştirmek, diğer komşu illere göre burada daha da önemlidir.",
            },
            {
                baslik: "Tekstil sanayisiyle komşuluk, enerji sektörüyle ayrım",
                metin:
                    "OSB'nin baskın kimliği tekstildir ve bu, ilin genel ekonomik dokusunu oluşturur; enerji sektörüne bağlı işletmeler bu dokunun küçük bir parçasıdır. Talep aldığımızda işin hangi kategoriye ait olduğunu netleştiririz — bu ayrım, doğru önceliklendirme ve doğru zamanlama için gereklidir.",
            },
            {
                baslik: "Kritik tedarikte öncelik değerlendirmesi",
                metin:
                    "Uşak'taki bir işletme, doğrudan Tavşanlı'daki bir santral veya ocak için kritik bir ekipman-parça sağlıyorsa, buradaki acil bir platform çağrısı üretim zincirindeki bağımlılık nedeniyle önceliklendirilebilir; bu, çağrı sırasında işletmenin bu bağlantısının açıkça belirtilmesine bağlıdır.",
            },
            {
                baslik: "Standart OSB işlerinde esnek planlama",
                metin:
                    "Enerji sektörüyle bağlantısı olmayan standart OSB işleri (tekstil holü aydınlatması, cephe bakımı gibi) enerji hattı önceliğinden bağımsız olarak, kendi tarih esnekliğine göre planlanır ve mümkünse komşu işlerle birleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Uşak'ta iş tipi ve enerji sektörü bağlantısı",
                paragraflar: [
                    "Aşağıdaki tablo, bölgedeki iş tiplerinin enerji sektörüyle bağlantısını ve sevkiyat modelini özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Enerji sektörü bağlantısı", "Öncelik", "Sevkiyat modeli"],
                    satirlar: [
                        ["Maden/santral tedarikçisi atölye", "Doğrudan", "Yüksek (kritik parça)", "Öncelikli/tur içi"],
                        ["Ağır nakliye garajı (enerji sektörü)", "Doğrudan", "Orta-yüksek", "Tur içi"],
                        ["Genel tekstil OSB işi", "Yok", "Standart", "Tur içi, esnek"],
                        ["Acil arıza (tedarikçi)", "Doğrudan", "Yüksek", "Hızlandırılmış"],
                        ["Tekil özel iş", "Değişken", "Standart", "Ayrı sevkiyat, mesafeye göre fiyat"],
                    ],
                },
            },
            {
                baslik: "Mesafenin sevkiyat planlamasına etkisi",
                paragraflar: [
                    "Uşak'ın merkeze ve Tavşanlı havzasına olan mesafesi, tekil bir işte nakliye maliyetinin payını belirgin şekilde artırır. Bu yüzden bölgedeki müşterilerimize işlerini tarih esnekliğiyle birleştirmelerini özellikle öneriyoruz; mümkünse gidiş-dönüş boş kalmayacak şekilde planlarız.",
                    "Bu planlamanın kurulması için bölgedeki işlerinizi mümkün olduğunca erken bildirmeniz yeterli; erken bilgi, uygun bir tur eşleşmesi bulma şansını doğrudan artırır.",
                ],
            },
            {
                baslik: "Tedarikçi işletmelerde öncelik uygulaması",
                paragraflar: [
                    "Uşak'taki bir işletmenin doğrudan Tavşanlı'daki bir santral veya ocak için kritik ekipman-parça sağladığı durumlarda, bu işletmedeki bir arıza geriye doğru üretim zincirini etkileyebilir. Bu bağımlılığı bildiğimiz için, bu tür işletmelerin acil çağrılarına standart işlere göre daha yüksek öncelik veriyoruz.",
                    "Bu önceliklendirmenin doğru işlemesi için çağrı sırasında işletmenizin hangi tesise tedarik yaptığını belirtmeniz yeterlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Uşak'taki atölyemiz Tavşanlı'daki bir maden işletmesine parça sağlıyor, bu öncelik sağlar mı?",
                cevap:
                    "Sağlayabilir. Doğrudan santral veya ocak için kritik parça üreten işletmelerin acil çağrılarına, üretim zincirindeki bağımlılık nedeniyle standart işlere göre daha yüksek öncelik veriyoruz. Çağrı sırasında hangi tesise tedarik yaptığınızı belirtmeniz, bu önceliği doğru uygulamamızı sağlar.",
            },
            {
                soru: "Mesafe uzun, nakliye maliyeti çok mu yüksek olur?",
                cevap:
                    "Tekil bir işte mesafe payı gerçekten hissedilir; bu yüzden işlerinizi tarih esnekliğiyle birleştirmenizi öneriyoruz. Mümkünse gidiş-dönüş boş kalmayacak şekilde planlarız — aynı hafta içinde başka bir iş varsa toplam maliyet paylaşılır. Teklifte nakliye payını ayrı gösteririz.",
            },
            {
                soru: "Tekstil ağırlıklı OSB'de enerji sektörüyle ilgisi olmayan standart bir işimiz var, nasıl planlanır?",
                cevap:
                    "Standart bir OSB işi olarak, enerji hattı önceliğinden bağımsız şekilde, kendi tarih esnekliğinize göre planlanır. Mümkünse komşu işlerle birleştirilir. Enerji sektörüyle bir bağlantınız olup olmadığını keşifte netleştiririz; bu, doğru zamanlamayı baştan belirler.",
            },
            {
                soru: "Acil bir arızamız var, Uşak'a ne kadar sürede ulaşırsınız?",
                cevap:
                    "Süre, işletmenizin enerji sektörüne olan bağlantısına ve o anki sevkiyat programımıza bağlıdır; mesafe nedeniyle Uşak'a müdahale süresi merkeze yakın ilçelere göre biraz daha uzun olabilir. Kritik tedarikçi işletmelerde öncelik uygulanır. Arızanın türünü ve işletmenizin niteliğini ilk çağrıda net verirseniz gerçekçi bir süre veririz.",
            },
            {
                soru: "Ağır nakliye garajımızın bakımını nasıl planlıyorsunuz?",
                cevap:
                    "Garaj bakımı, araç giriş-çıkış trafiğinin en az olduğu saatlere planlanır; enerji sektörüne hizmet veren nakliye firmalarında bu trafik genellikle sevkiyat programına bağlı olarak değişkendir. Trafiğinizin en yoğun olduğu saatleri bildirirseniz, planı doğrudan bu saatlerin dışına kurarız.",
            },
            {
                soru: "Uşak'ın enerji sektörüyle ilgisi sınırlı görünüyor, bu sayfa neden var?",
                cevap:
                    "Çünkü OSB'de ve çevresinde Tavşanlı havzasına dolaylı hizmet veren metal işleme ve nakliye destek işletmeleri gerçekten bulunuyor; bu sayfa onlara odaklanıyor. Uşak'ın baskın kimliğinin tekstil olduğunu biliyoruz ve bunu göz ardı etmiyoruz — enerji sektörüyle bağlantısı olmayan standart OSB işleriniz için de aynı hizmeti sunuyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Uşak'ın tekstil ağırlıklı sanayi kimliği ve Tavşanlı havzasına mesafesi kamuya açık bölgesel bilgidir; işletme adı, kapasite ve rakam kullanılmamıştır. Tedarikçi önceliklendirmesi ve mesafe planlaması firma pratiğidir.",
    },
};
