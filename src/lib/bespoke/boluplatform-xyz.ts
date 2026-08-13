// ═══════════════════════════════════════════════════════════════════════════
// boluplatform.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: Orman ürünleri ve ahşap sanayi tesislerine ARAZİ TİPİ makine
// kiralama.
// Açı: ORMAN ÜRÜNLERİ + ARAZİ TİPİ MAKİNE — Bolu'nun orman zenginliği,
// kereste-mobilya-ahşap işleme atölyeleri, ormanlık arazide dizel 4x4 arazi
// tipi makinenin zorunluluğu (stabilize/toprak zemin, eğim), ahşap tozu
// yangın riski, orman yolu erişimi.
//
// ⚠️ Kardeş domainlerde aynı bölgeler başka açılarla elle yazıldı (bkz.
// boluplatform-net.ts): orada makine seçimi mevsim/rakım ve otoyol lojistiği
// eksenindeydi, burada eksen ARAZİNİN KENDİSİ — zemin sınıfı, eğim, orman
// yolu, tekerlek/palet seçimi, yangın riski. Cümle, tablo satırı ve SSS
// tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi + firma pratiği.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BOLUPLATFORM_XYZ: Record<string, BespokeIcerik> = {
    "bolge:mudurnu": {
        h1: "Mudurnu'da Arazi Tipi Makine Kiralama: Orman Sahaları ve Kereste Ocakları",
        giris:
            "Mudurnu'nun orman varlığı, ilçenin ekonomisinde tavukçuluk kadar belirleyici bir başka kolu besler: kereste kesim ocakları, tomruk depolama sahaları ve küçük ölçekli ahşap işleme atölyeleri. Bu işletmelerin makine ihtiyacı, şehir içindeki bir depoyla hiç benzemez, çünkü çalışma zemini asfalt veya perdahlı beton değil, ormanın kendisidir — sıkıştırılmamış toprak, kök yumruları, yağışla birlikte çamura dönen stabilize yollar ve düz olmayan eğimli parseller. Standart tekerlekli bir makine bu zeminde birkaç metre ilerlemeden saplanır; burada tek doğru araç, dizel motorlu ve dört tekerlekten çekişli arazi tipi platformdur. İlçedeki tomruk sahalarına, kesim noktalarına ve orman yolu kenarındaki küçük atölyelere makine göndermek, önce zemini sormak, sonra makine göndermek demektir. Bu sayfa, Mudurnu'nun orman sahalarındaki zemin sınıflarını, eğimli parsellerde arazi tipi makinenin nasıl konumlandığını ve orman yoluna erişimin sevkiyata etkisini anlatır.",
        maddeler: [
            {
                baslik: "Tomruk sahasında zemin: sıkıştırılmamış toprağın gerçeği",
                metin:
                    "Kesim sonrası tomrukların istiflendiği sahalar, çoğunlukla doğal toprak zemindir ve trafik yoğunlaştıkça iz tutar, yağış sonrası ise yumuşayıp çamurlaşır. Bu zeminde standart tekerlekli bir platform hem batar hem devrilme riski taşır; arazi tipi makinenin geniş taban izi ve dört çekiş sistemi bu riski büyük ölçüde azaltır. Yine de her arazi tipi makine her toprağı kaldırmaz — ıslak kil zeminde bile makine saplanabilir. Bu yüzden saha talebini alırken son bir haftadaki yağışı ve toprağın rengini-kıvamını sorarız; gerekiyorsa çalışma günü zeminin göreceli kuruduğu bir güne kaydırılır.",
            },
            {
                baslik: "Eğimli parsellerde denge ve konumlandırma",
                metin:
                    "Orman arazisi düz değildir; kesim parselleri genellikle eğimli yamaçlarda yer alır ve makinenin bu eğimde güvenle durabilmesi ayrı bir mühendislik konusudur. Arazi tipi makinelerin çoğu belirli bir eğim açısına kadar kendini otomatik olarak seviyeler, ama bu sınırın üzerinde çalışma yapılmaz. Sahaya giden ekip önce parselin eğim ölçüsünü gözle değerlendirir, ardından makinenin seviyeleme sınırıyla karşılaştırır. Sınırın üzerindeki bir noktada iş varsa çözüm makineyi zorlamak değil, o noktaya daha alçak bir konumdan, farklı bir bomlu erişimle ulaşmaktır.",
            },
            {
                baslik: "Ahşap tozu ve kıvılcım: kapalı atölyede yangın riski",
                metin:
                    "İlçedeki küçük ahşap işleme atölyelerinde havadaki ince talaş tozu, sadece solunum değil yangın açısından da ciddi bir risktir; belirli yoğunluktaki toz bulutu, en küçük bir kıvılcımla patlayıcı biçimde tutuşabilir. Bu nedenle kapalı ve tozlu atölyelerde içten yanmalı arazi tipi makine kesinlikle kullanılmaz — egzoz sıcaklığı ve olası kıvılcım, ortamdaki toz için doğrudan tehlikedir. Atölye içi işlerde akülü makaslı veya akülü eklemli modele geçilir; arazi tipi dizel makine yalnızca açık sahada, tomruk yığını ve stok alanı çevresinde çalışır.",
            },
            {
                baslik: "Orman yoluna erişim: sevkiyatın gerçek darboğazı",
                metin:
                    "Mudurnu'nun orman içi kesim noktalarına ulaşan yollar, çoğunlukla tek şeritli stabilize orman yollarıdır ve bu yolların taşıyabileceği araç ağırlığı sınırlıdır; yağışlı dönemde bazı kesimler ağır araca tamamen kapanır. Bu yüzden arazi tipi makine sevkiyatında asıl darboğaz mesafe değil, son kilometredeki yolun o günkü durumudur. Talep aldığımızda saha koordinatını ve yolun genişliğini sorarız; yol taşıyıcı aracı almıyorsa makine daha küçük bir taşıyıcıyla veya kendi tekerleğiyle son bölümü kat eder.",
            },
            {
                baslik: "Kesim takvimine göre makine planlaması",
                metin:
                    "Orman kesim faaliyeti, izin dönemine ve mevsime bağlı bir takvimle ilerler; makine ihtiyacı da bu takvime göre yığılır. Kesim sezonunun yoğun olduğu dönemlerde arazi tipi makine talebi artar ve erken rezervasyon önem kazanır. Sezon dışında ise talep, kereste ocaklarının stok düzenleme ve atölyelerin bakım işlerinde toplanır. İşletmecilerden, kesim izninizin başladığı tarihi mümkünse birkaç hafta önceden bildirmelerini isteriz; bu, makinenin doğru günde sahada olmasını garantiler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mudurnu orman sahalarında zemin sınıfı ve makine eşlemesi",
                paragraflar: [
                    "Orman sahalarındaki zemin durumu, makine sınıfını doğrudan belirler. Tablo, sahada uyguladığımız eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin / alan", "Durum", "Uygun makine", "Ek önlem"],
                    satirlar: [
                        ["Kuru stabilize tomruk sahası", "Sağlam, düz", "Dizel 4x4 arazi tipi eklemli", "Standart konumlandırma"],
                        ["Yağış sonrası toprak zemin", "Yumuşak, iz tutan", "Palet ayaklı arazi tipi", "Çalışma günü ertelenebilir"],
                        ["Eğimli kesim parseli", "Eğimli, düzensiz", "Kendinden seviyelemeli eklemli", "Eğim sınırı kontrolü"],
                        ["Kapalı ahşap atölyesi", "Tozlu, kapalı", "Akülü makaslı / eklemli", "İçten yanmalı yasak"],
                        ["Orman yolu kenarı depo", "Dar, stabilize", "Kompakt arazi tipi", "Yol genişliği ölçümü"],
                    ],
                },
            },
            {
                baslik: "Yağış sonrası bekleme: neden zorlamıyoruz",
                paragraflar: [
                    "Mudurnu'da orman sahasına giden bir talebi aldığımızda sorduğumuz ilk şeylerden biri son günlerin hava durumudur ve bunun nedeni tek bir gerçektir: ıslak toprakta saplanan bir makineyi çıkarmak, işi ertelemekten çok daha pahalıdır. Saplanan makine hem kendi zamanını hem kurtarma için gelen ikinci bir ekibin zamanını tüketir, üstelik zeminde kalıcı iz bırakır ve bazen makinenin altındaki hidrolik hatlarına zarar verir.",
                    "Bu yüzden yağış sonrası sahaya çıkmadan önce zeminin en azından yüzeysel olarak kuruduğundan emin oluruz; gerekirse işi bir-iki gün erteleriz. İşletmeciye bu önerimizi ilettiğimizde çoğu zaman anlayışla karşılanır çünkü orman işletmeciliğinde bu bekleme kültürü zaten var — kesim ekipleri de aynı nedenle ıslak günlerde sahaya çıkmaz. Acil bir iş varsa alternatif, daha hafif ve geniş taban izli bir makineye geçmektir; bu her zaman mümkün olmasa da sahaya bakıp değerlendiririz.",
                ],
            },
            {
                baslik: "Kesim sezonu dışında: atölye ve stok bakımı",
                paragraflar: [
                    "Kesim izninin kapalı olduğu dönemlerde ilçedeki orman ürünleri işletmeleri boş durmaz; bu dönem stok düzenleme, ekipman bakımı ve atölye içi işlerin yapıldığı zamandır. Tomruk vinç hattının bakımı, stok sahasındaki aydınlatma direklerinin kontrolü, atölye çatısının onarımı gibi işler bu pencereye toplanır. Arazi tipi makine bu dönemde de kullanılır ama iş tipi değişir — dinamik kesim desteğinden çok, sabit noktalarda bakım işine döner.",
                    "Bu dönemi verimli kullanmanın yolu, işletmecinin bekleyen bütün işlerini tek listede toplayıp tek makine dönemine yazmasıdır. Sezon dışı, hem makine bulunabilirliğinin arttığı hem fiyatların görece uygun olduğu dönemdir; erken planlayan işletme bundan yararlanır. Sezon açıldığında ise arazi tipi makine talebi kesim sahalarına kayar ve stok-bakım işleri için makine bulmak zorlaşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Arazi tipi makine ıslak toprakta çalışabilir mi?",
                cevap:
                    "Kısmen. Arazi tipi makinelerin geniş taban izi ve dört çekiş sistemi, standart tekerlekli bir platforma göre yumuşak zeminde çok daha iyi performans gösterir, ama sınırsız değildir. Yoğun yağış sonrası çamura dönmüş kil zeminde arazi tipi makine de saplanabilir. Bu yüzden saha talebinizi alırken son günlerin hava durumunu ve toprağın kıvamını sorarız; riskli görünüyorsa çalışmayı zeminin göreceli kuruduğu bir güne erteleriz. Acil işlerde daha hafif ve geniş taban izli bir modele geçmek bazen çözüm olur; sahayı fotoğrafla paylaşırsanız telefonda değerlendirebiliriz.",
            },
            {
                soru: "Eğimli parselde makine devrilme riski var mı?",
                cevap:
                    "Doğru makine ve doğru değerlendirmeyle risk kontrol altına alınır. Arazi tipi makinelerin çoğu, belirli bir eğim açısına kadar kendini otomatik olarak seviyeler ve bu sınırın içinde güvenle çalışır. Sahaya giden ekibimiz önce parselin eğimini gözle değerlendirir, makinenin seviyeleme sınırıyla karşılaştırır ve sınırın üzerindeyse makineyi o noktaya zorlamaz — farklı bir konumdan veya daha uzun bomlu bir modelle erişim kurar. Eğim konusunda tereddüt varsa, işe başlamadan önce parselin fotoğrafını istiyoruz; bu, sahada sürpriz yaşamamızı sağlıyor.",
            },
            {
                soru: "Atölyemizde toz var; dizel makine kullanabilir miyiz?",
                cevap:
                    "Hayır, kapalı ve tozlu atölyede dizel veya herhangi bir içten yanmalı arazi tipi makine kullanılmaz. Havadaki ince ahşap tozu, belirli yoğunlukta kıvılcımla patlayıcı biçimde tutuşabilir ve dizel motorun egzoz sıcaklığı bu riski doğrudan artırır. Kapalı atölye işlerinde akülü makaslı veya akülü eklemli modele geçeriz; bu modeller hem emisyon hem kıvılcım riski taşımaz. Arazi tipi dizel makine yalnızca açık sahada — tomruk yığını, kesim parseli, stok alanı çevresinde — kullanılır. Talebinizi verirken işin atölye içinde mi açık sahada mı olduğunu belirtmeniz, doğru makinenin gönderilmesini sağlar.",
            },
            {
                soru: "Orman yolu dar; makine sahaya nasıl ulaşır?",
                cevap:
                    "Bu, ilçedeki kesim noktalarına sevkiyatın en sık karşılaştığımız sorunudur. Orman içi yollar çoğunlukla tek şeritli ve stabilizedir, bazı bölümler yağışlı dönemde ağır araca kapanır. Talebinizi alırken saha koordinatını ve yolun genişliğini sorarız; standart taşıyıcı araç yolu geçemiyorsa makine daha küçük bir taşıyıcıyla ya da kendi tekerleğiyle son bölümü kat eder. Bazı durumlarda en yakın uygun noktaya bırakılıp geri kalan mesafe operatör eşliğinde makinenin kendi gücüyle alınır. Yol durumunu önceden bilmek, sevkiyat gününde araçların yolda kalmasını önler.",
            },
            {
                soru: "Kesim sezonu ne zaman başlıyor, makineyi ne kadar önceden ayırtmalıyız?",
                cevap:
                    "Kesim izninizin başladığı tarihi bize bildiğiniz anda paylaşmanızı öneririz, ideali birkaç hafta öncesidir. Sezonun yoğun olduğu dönemlerde arazi tipi makine talebi ilçe genelinde artar ve son haftaya kalan talepler istediği günü bulmakta zorlanabilir. Erken rezervasyonun ikinci faydası, makinenin sizin kesim programınıza göre planlanabilmesidir — parsel parsel ilerleyen bir kesimde makinenin hangi gün hangi parselde olacağını önceden kurgulayabiliriz. Sezon dışı dönemde ise bu kadar erken planlamaya gerek kalmaz, birkaç günlük bildirim genellikle yeterlidir.",
            },
            {
                soru: "Sezon dışında stok sahamızın bakımı için de arazi tipi makine mi gerekir?",
                cevap:
                    "Çoğunlukla evet, çünkü stok sahalarının zemini kesim mevsiminde olduğu gibi kalır — kış boyunca yağış alan bir tomruk sahası, sezon dışında da yumuşak ve düzensiz olabilir. Vinç hattı bakımı, aydınlatma direği kontrolü veya çatı onarımı gibi işlerde makine yine bu zeminde konumlanacağı için arazi tipi tercih doğru olur. İstisna, işin tamamen sert zeminli bir alanda — örneğin beton döşeli bir depo önünde — yapılmasıdır; böyle durumlarda standart bir makine de yeterli olabilir. Sahanızın zeminini bize tarif ettiğinizde doğru sınıfı birlikte netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Mudurnu'nun orman ürünlerine dayalı üretim kolu ve kesim izinlerinin sezonluk yapısı kamuya açık genel bilgidir; zemin sınıfına göre makine eşlemesi, eğim değerlendirmesi ve orman yolu erişim planlaması firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:goynuk": {
        h1: "Göynük'te Orman Ürünleri İşletmelerine Arazi Tipi Makine Kiralama",
        giris:
            "Göynük, Bolu'nun küçük ama ormanlık dokusu yoğun ilçelerinden biridir; tarihi çarşısının gölgesinde kalan bu yapı, ilçe ekonomisinin önemli bir kısmının hâlâ orman ürünlerine ve küçük ölçekli ahşap zanaatına dayandığı gerçeğini değiştirmez. İlçedeki işletmeler büyük fabrikalar değil, küçük kereste kesimhaneleri, marangoz atölyeleri ve mobilya parçası üreten küçük imalathanelerdir; bu ölçek, makine ihtiyacını da kendine özgü kılar — büyük sahalar yerine dar sokaklara sıkışmış atölyeler, geniş tomruk depoları yerine küçük açık avlular. Arazi tipi makinenin buradaki rolü, büyük ölçekli kesim sahalarından çok, ilçeyi çevreleyen orman parçalarındaki küçük müdahale noktalarına ve atölye avlularındaki düzensiz zemine erişimdir. Bu sayfa, Göynük'ün küçük ölçekli orman ürünleri işletmelerinin makine ihtiyacını, dar erişim koşullarını ve ilçenin kendine özgü coğrafyasının sevkiyata etkisini anlatır.",
        maddeler: [
            {
                baslik: "Küçük atölye avlularında dar erişim",
                metin:
                    "Göynük'teki marangoz ve mobilya parçası atölyeleri, çoğunlukla eski yerleşim dokusunun içinde, dar sokaklara açılan küçük avlulara sahiptir. Bu avlulara standart ölçüdeki bir arazi tipi makineyi sokmak çoğu zaman mümkün değildir; sokak genişliği ve avlu kapısı, makine seçiminin ilk kısıtıdır. Bu nedenle ilçedeki taleplerde önce sokak ve kapı ölçüsünü sorarız, ardından kompakt gövdeli bir arazi tipi model önerir ya da avlu zemini yeterince sertse standart bir makineye geçeriz.",
            },
            {
                baslik: "Küçük ölçekli kesim noktalarında esnek sevkiyat",
                metin:
                    "İlçeyi çevreleyen orman parçalarındaki kesim faaliyeti, büyük işletmelerdeki gibi tek bir geniş sahada değil, dağınık küçük noktalarda ilerler. Bu, sevkiyat planlamasını farklılaştırır: bir günde tek büyük sahaya değil, birbirine yakın birkaç küçük noktaya uğramak gerekebilir. Arazi tipi makinenin bu noktalar arasında kendi gücüyle kısa mesafeler kat etmesi, her nokta için ayrı taşıyıcı çağırmaktan daha pratiktir; bu yüzden ilçedeki işlerde makinenin günlük hareket planı, işletmeciyle birlikte sabah netleştirilir.",
            },
            {
                baslik: "Zanaat atölyelerinde toz ve kıvılcım hassasiyeti",
                metin:
                    "Küçük marangoz atölyelerinde havalandırma sistemleri genellikle büyük fabrikalar kadar gelişmiş değildir; bu, havadaki talaş tozunun daha uzun süre asılı kalması demektir. Kapalı bu alanlarda içten yanmalı hiçbir makine — arazi tipi dahil — kullanılmaz. Atölye içi işler için akülü makaslı model tercih edilir ve makinenin kendisi de atölyeye girmeden önce dışarıda temizlenir; dışarıdan taşınan toprak veya çamur, atölyenin kendi tozuyla birleşip zemini kayganlaştırabilir.",
            },
            {
                baslik: "İlçenin vadi yapısının yol erişimine etkisi",
                metin:
                    "Göynük, dar bir vadi içine kurulmuştur ve çevresindeki orman alanlarına giden yollar bu vadi coğrafyasını takip eder — dolambaçlı, dar ve bazı kesimlerde eğimli. Ağır taşıyıcı araçlar bu yollarda manevra alanı bulmakta zorlanabilir; bu nedenle ilçeye giden sevkiyatlarda taşıyıcı araç seçimi, yolun standart bir kamyonu mu yoksa daha küçük bir aracı mı gerektirdiğine göre yapılır. Talep alırken sahanın hangi yol üzerinde olduğunu sormamız, doğru taşıyıcıyı baştan seçmemizi sağlar.",
            },
            {
                baslik: "Mevsimlik talep dalgalanması",
                metin:
                    "Küçük ölçekli işletmelerin makine talebi, büyük fabrikalara göre daha düzensiz bir ritimde gelir — belirli bir sipariş yoğunluğu geldiğinde birkaç atölye aynı anda kesim veya stok ihtiyacı duyabilir. Bu dalgalanmayı önceden bilmenin yolu yoktur ama yönetmenin yolu vardır: ilçedeki işletmelerle düzenli ilişkimiz sayesinde tipik yoğunluk dönemlerini — genellikle bahar aylarındaki sipariş artışını — biliriz ve bu dönemde makine bulunabilirliğini önceden artırırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Göynük'te atölye tipi ve erişim koşulu",
                paragraflar: [
                    "İlçedeki küçük ölçekli işletmelerin erişim koşulu, makine sınıfını doğrudan belirler. Tablo, sahada karşılaştığımız tipik durumu özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Erişim koşulu", "Uygun makine", "Ön kontrol"],
                    satirlar: [
                        ["Dar sokak avlulu atölye", "Kısıtlı genişlik", "Kompakt arazi tipi eklemli", "Sokak/kapı ölçüsü"],
                        ["Küçük kesim noktası", "Dağınık, kısa mesafe", "Standart arazi tipi", "Noktalar arası hareket planı"],
                        ["Kapalı marangoz atölyesi", "Tozlu, dar", "Akülü makaslı", "İçten yanmalı yasak"],
                        ["Vadi yamacı yol kenarı", "Dar, eğimli yol", "Küçük taşıyıcı ile sevkiyat", "Yol genişliği kontrolü"],
                        ["Açık stok avlusu", "Düzensiz toprak", "Kompakt arazi tipi", "Yağış sonrası bekleme"],
                    ],
                },
            },
            {
                baslik: "Ölçü konuşmadan makine göndermeme kuralı",
                paragraflar: [
                    "Göynük gibi dar sokaklı, küçük ölçekli bir yerleşimde en pahalı hata, ölçü konuşmadan makine göndermektir. Sokağa sığmayan veya avlu kapısından geçemeyen bir makine, geri dönmek zorunda kalır ve hem zaman hem nakliye kaybı doğar. Bu yüzden ilçedeki her talepte standart prosedürümüz, işe başlamadan önce sokak genişliğini, avlu kapısının net ölçüsünü ve varsa üst kirişin yüksekliğini sormaktır.",
                    "Bu bilgiler telefonda net verilemiyorsa, müşteriden birkaç fotoğraf istiyoruz — kapı önünden çekilmiş, ölçü referansı olan bir fotoğraf, çoğu zaman metre şeridinden daha güvenilir bir karar verdiriyor bize. Bu küçük ön hazırlık, Göynük'teki işlerin neredeyse tamamında ilk seferde doğru makinenin gitmesini sağlıyor.",
                ],
            },
            {
                baslik: "Küçük işletmeler için makine gününü paylaştırma",
                paragraflar: [
                    "İlçedeki işletmelerin ölçeği küçük olduğu için, tek bir atölyenin ihtiyacı çoğu zaman tam bir makine gününü doldurmaz. Bu durumda önerimiz, birbirine yakın birkaç atölyenin ihtiyacını aynı makine gününde birleştirmesidir — bir atölyede vinç bakımı, komşu atölyede çatı kontrolü, üçüncüsünde stok sahası düzenlemesi gibi. Makine bir noktadan diğerine kendi gücüyle kısa mesafede hareket edebildiği için bu birleştirme kolay uygulanır.",
                    "Bu yöntemin ilçedeki esnaf ve atölye sahipleri arasında bilinir hâle gelmesiyle, zaman zaman kendi aralarında koordineli talep de gelmeye başladı — birkaç işletme aynı günü birlikte talep ediyor. Bu, hem onlar için maliyeti düşürüyor hem bizim için sevkiyatı verimli kılıyor; teşvik ettiğimiz bir uygulama.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizin bulunduğu sokak dar; makine girebilir mi?",
                cevap:
                    "Girip girmeyeceği, sokağın net genişliğine ve makinenin şase ölçüsüne bağlı — bu ikisini karşılaştırmadan makine göndermiyoruz. Göynük'teki dar sokaklarda kompakt gövdeli arazi tipi modeller genellikle çözüm oluyor; bunların genişliği standart modellere göre belirgin biçimde dardır. Sokak gerçekten dar geliyorsa alternatif, makineyi sokağın girebildiği en yakın noktaya bırakıp geri kalan kısa mesafeyi kendi gücüyle, operatör kontrolünde kat etmesidir. Sokağınızın fotoğrafını paylaşırsanız telefonda değerlendirebiliriz.",
            },
            {
                soru: "Birden fazla küçük kesim noktamız var; hepsine ayrı makine mi gelir?",
                cevap:
                    "Genellikle gerekmez. Noktalarınız birbirine yakınsa tek makine, günün içinde kendi gücüyle bir noktadan diğerine geçebilir; bu, her nokta için ayrı taşıyıcı çağırmaktan hem daha hızlı hem daha ekonomiktir. Sabah, noktaların sırasını ve aralarındaki mesafeyi sizinle birlikte netleştiririz ve makinenin günlük hareket planını buna göre kurarız. Noktalar birbirinden uzaksa veya farklı yol güzergâhlarındaysa ayrı planlama gerekebilir; bu durumda size en ekonomik kurguyu önceden söyleriz.",
            },
            {
                soru: "Marangoz atölyemizde dizel makine kullanabilir miyiz?",
                cevap:
                    "Kapalı atölye içinde hayır. Havadaki talaş tozu, küçük atölyelerde büyük fabrikalara göre daha uzun süre asılı kalır ve içten yanmalı bir makinenin egzoz sıcaklığı bu ortamda kıvılcım riskini artırır. Atölye içi işlerde akülü makaslı model kullanırız; bu modeller hem emisyon hem kıvılcım açısından güvenlidir. Arazi tipi dizel makine yalnızca açık avlu veya dış saha işlerinde devreye girer. Talebinizi verirken işin atölye içinde mi dışında mı olacağını belirtmeniz, doğru makinenin gönderilmesini sağlar.",
            },
            {
                soru: "İlçeye giden yol dar ve dolambaçlı; kamyon geçebilir mi?",
                cevap:
                    "Bazı yol kesimlerinde geçemeyebilir; bu yüzden sahanızın hangi yol üzerinde olduğunu önceden sorarız. Göynük'ün vadi coğrafyası, çevresindeki orman alanlarına giden yolları dar ve dolambaçlı kılar; standart bir taşıyıcı kamyon bu yollarda manevra alanı bulamayabilir. Böyle durumlarda makine daha küçük bir taşıyıcı araçla veya makinenin kendi gücüyle son bölümü kat ederek sahaya ulaşır. Yol durumunu talep aşamasında netleştirmek, sevkiyat gününde aracın yolda kalmasını önler.",
            },
            {
                soru: "Tek atölyenin işi bir makine gününü doldurmuyor, ne yapmalıyız?",
                cevap:
                    "Komşu atölyelerle aynı günü paylaşmanızı öneririz — Göynük'teki birçok işletme bunu zaten yapıyor. Bir atölyede vinç bakımı, komşusunda çatı kontrolü, bir başkasında stok sahası düzenlemesi gibi işleri aynı makine gününe topladığınızda hem nakliye maliyeti bölüşülür hem makinenin boşta kalan zamanı azalır. Makine noktalar arasında kısa mesafede kendi gücüyle hareket edebildiği için bu birleştirme pratikte kolay uygulanıyor. İlçedeki esnaf arasında koordineli talep vermek isteyenler bize doğrudan ulaşabilir, planı birlikte kurarız.",
            },
            {
                soru: "Bahar aylarında talep yoğunlaşıyor mu, makineyi ne zaman ayırtmalıyız?",
                cevap:
                    "Evet, ilçedeki işletmelerin sipariş yoğunluğu genellikle bahar aylarında artar ve buna bağlı olarak makine talebi de yükselir. Bu dönemde son haftaya kalan talepler istediği günü bulmakta zorlanabilir. İlçedeki işletmelerle uzun süredir çalıştığımız için bu yoğunluk dönemlerini biliyoruz ve mümkün olduğunca önceden makine bulunabilirliğini artırıyoruz. Yine de en garantili yol, talebinizi netleştiğiniz anda bize iletmenizdir; bahar öncesi bir-iki hafta önceden verilen bir talep, size istediğiniz günü verme şansını belirgin biçimde artırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Göynük'ün küçük ölçekli orman ürünleri ve zanaat atölyesi dokusu ile ilçenin vadi coğrafyası kamuya açık genel bilgidir; erişim ölçü kontrolü, çoklu nokta hareket planı ve makine günü paylaştırma önerisi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:kibriscik": {
        h1: "Kıbrıscık'ta Orman Ürünleri İşletmelerine Arazi Tipi Makine Kiralama",
        giris:
            "Kıbrıscık, Bolu'nun nüfusça en küçük ilçelerinden biri olsa da, çevresindeki geniş orman örtüsü ilçeyi kendi ölçeğinde bir orman ürünleri kaynağı hâline getirir. Buradaki işletmeler daha çok küçük kereste kesim noktaları ve mevsimlik odun-tomruk stoklama alanlarından oluşur; sabit ve büyük tesisler yerine, kesim iznine bağlı olarak yıl içinde hareket eden, dağınık küçük sahalar tipiktir. Bu yapı, arazi tipi makine kiralamasını da farklı bir mantıkla kurmayı gerektirir — sabit bir adrese değil, izin verilen parsele göre planlama yapılır ve saha çoğu zaman ilçe merkezinden uzak, orman içi bir noktadır. Kıbrıscık'ın rakımı ve iklimi de kesim takvimini etkiler; kış erken bastırır ve bazı yıllar kesim sezonunu kısaltır. Bu sayfa, Kıbrıscık'taki küçük ölçekli orman sahalarına makine erişimini, mevsim penceresinin dar oluşunu ve merkeze uzak parsellere sevkiyatın nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Sabit adres yerine değişken parsel planlaması",
                metin:
                    "Kıbrıscık'taki kesim işletmeciliğinin çoğu, sabit bir tesis adresinden değil, o yıl izin verilen orman parselinden yürür; bu parsel yıldan yıla, hatta sezon içinde değişebilir. Bu durum makine sevkiyatını standart bir teslimattan ayırır — her talep, önceki talebin adresiyle aynı olmayabilir. Bu yüzden Kıbrıscık'tan gelen her talepte koordinat ve yol tarifini yeniden ve ayrıntılı olarak alırız; önceki bir işten hatırladığımız bir güzergâha güvenmeyiz.",
            },
            {
                baslik: "Merkeze uzak parsellerde sevkiyat süresi",
                metin:
                    "İlçenin küçük nüfusu ve dağınık yerleşimi, kesim parsellerinin merkeze belirgin uzaklıkta olabileceği anlamına gelir. Bu mesafe, sevkiyat süresini doğrudan etkiler ve standart bir günlük teslim beklentisini bazen gerçekçi olmaktan çıkarır. Uzak parsellere giden taleplerde, teslim gününü konuşurken mesafeyi açıkça hesaba katarız ve gerekirse makinenin bir gün önceden yola çıkmasını öneririz; bu, teslim gününde beklenmedik bir gecikme yaşanmasını önler.",
            },
            {
                baslik: "Kısa kesim sezonu ve erken kış riski",
                metin:
                    "Kıbrıscık, Bolu'nun görece yüksek rakımlı ilçelerinden biridir ve bu, kışın erken başlayıp uzun sürmesine yol açar. Kesim sezonu bu yüzden bölgenin diğer kesimlerine göre daha kısadır; kar başladığında hem yol erişimi hem parsel zemini çalışmaya kapanır. Bu dar pencerede makine talebi yığılır ve erken planlama önem kazanır. İşletmecilere önerimiz, kesim izninin başlangıç ve öngörülen bitiş tarihini birlikte bildirmeleridir; bu, sezon boyunca makinenin doğru günlerde ayrılabilmesini sağlar.",
            },
            {
                baslik: "Küçük ölçekli stok sahalarında zemin hazırlığı",
                metin:
                    "Kesilen tomrukların geçici olarak biriktirildiği stok alanları, çoğunlukla doğal toprak veya hafif stabilize zemindir ve büyük işletmelerdeki gibi düzenli bakım görmez. Bu sahalara arazi tipi makine gönderirken zeminin taşıma kapasitesini gözle değerlendiririz; belirgin biçimde yumuşak veya çamurlu görünen bir noktada makineyi zorlamak yerine, işletmeciden zeminin sertleştiği bir noktaya kısa bir düzeltme yapmasını rica ederiz — birkaç kürek taş veya moloz, makinenin güvenle durabileceği bir nokta yaratabilir.",
            },
            {
                baslik: "İlçenin küçük ölçeğinde esnek makine günü",
                metin:
                    "Kıbrıscık'taki işletmelerin ölçeği, tek bir işin genellikle yarım günden kısa sürmesi anlamına gelir. Bu durumda makineyi tek bir küçük iş için göndermek nakliye açısından verimsizdir. Mümkün olduğunda, aynı bölgedeki başka bir işletmenin talebiyle birleştiririz veya komşu ilçelerdeki (Seben, Göynük gibi) taleplerle aynı sefere bağlarız. İşletmecilerin talep verirken tarihte esneklik göstermesi, bu birleştirmenin önünü açar ve maliyeti düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kıbrıscık'ta parsel tipi ve makine hazırlığı",
                paragraflar: [
                    "İlçedeki küçük ölçekli sahalarda hazırlık, parselin durumuna göre değişir. Tablo, sahada uyguladığımız yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Durum", "Makine yaklaşımı", "Öncelikli kontrol"],
                    satirlar: [
                        ["Yıllık kesim parseli", "Değişken konum", "Her seferde yeni koordinat", "Yol tarifi ve mesafe"],
                        ["Merkeze uzak kesim noktası", "Uzun sevkiyat mesafesi", "Bir gün önceden yola çıkış", "Teslim günü esnekliği"],
                        ["Geçici stok sahası", "Düzensiz toprak zemin", "Kompakt arazi tipi", "Zemin sertleştirme"],
                        ["Sezon sonu kesim alanı", "Erken kış riski", "Sezon öncesi rezervasyon", "Kesim bitiş tarihi bildirimi"],
                        ["Küçük tek işletme talebi", "Kısa süreli iş", "Komşu talep ile birleştirme", "Tarih esnekliği"],
                    ],
                },
            },
            {
                baslik: "Dar sezon penceresini kaçırmamak",
                paragraflar: [
                    "Kıbrıscık'ta kesim sezonunun kısalığı, makine planlamasında en çok dikkat ettiğimiz konudur. Bölgenin rakımı nedeniyle kar diğer ilçelere göre daha erken düşer ve düştüğünde hem yol hem parsel zemini kapanır. Bu, sezonun son haftalarında beklenmedik bir yoğunluk yaratır — herkes kar başlamadan işini bitirmek ister ve makine talebi aynı dar pencereye yığılır.",
                    "Bu yığılmayı yönetmenin tek yolu erken planlamadır. Kesim izninizin ne zaman biteceğini biliyorsanız, makine gününüzü sezonun ortasına doğru ayırtmanızı öneririz; son haftaya kadar beklerseniz, aynı anda talep veren başka işletmelerle sıra yarışına girebilirsiniz. Erken planlayan işletme, hem istediği günü bulur hem de kar riskiyle yarışmadan işini rahatça bitirir.",
                ],
            },
            {
                baslik: "Komşu ilçelerle sefer birleştirme",
                paragraflar: [
                    "Kıbrıscık'ın küçük ölçeği, tek başına her zaman verimli bir sefer oluşturmaz; bu yüzden komşu ilçelerdeki — özellikle Seben ve Göynük yönündeki — taleplerle birleştirme, ilçeye sevkiyatın standart yöntemlerinden biri hâline geldi. Bir araç bölgeye çıktığında, güzergâh üzerindeki birden fazla küçük talebi aynı seferde karşılayabiliyor.",
                    "Bu yöntemin işlemesi için tek koşul, taleplerin birbirine yakın tarihlerde ve makul bir esneklikle verilmesidir. Kesin ve sabit bir tarihte tek başına iş isteyen bir işletme de elbette hizmet alır, ama maliyeti özel sefer üzerinden hesaplanır. Tarihte birkaç günlük esneklik gösteren işletmeler için ise sefer birleştirme, maliyeti belirgin biçimde aşağı çeker.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kesim parselimiz her yıl değişiyor; bu sevkiyatı zorlaştırır mı?",
                cevap:
                    "Zorlaştırmaz ama her seferinde yeniden konuşulmasını gerektirir. Önceki yılın adresine güvenmeyiz; her talepte güncel koordinatı, yol tarifini ve varsa erişim kısıtını yeniden alırız. Bu, ilk bakışta tekrar gibi görünse de aslında güvenlik önlemidir — parsel değiştiğinde yol durumu, zemin ve mesafe de değişir. Talebinizi verirken bu yılki parselin konumunu ve oraya giden yolu mümkün olduğunca ayrıntılı tarif etmeniz, sevkiyatın ilk seferde sorunsuz gerçekleşmesini sağlar.",
            },
            {
                soru: "Merkeze uzak bir kesim noktasına aynı gün teslim mümkün mü?",
                cevap:
                    "Mesafeye bağlı; her zaman garanti edemeyiz. Kıbrıscık'ın dağınık yerleşimi bazı kesim noktalarını merkeze belirgin uzaklıkta bırakır ve bu mesafe standart bir günlük teslim beklentisini zorlar. Talebinizi alırken parselin konumunu değerlendirir, gerekiyorsa makinenin bir gün önceden yola çıkmasını öneririz. Bu şekilde planlanan bir sevkiyat, teslim gününde beklenmedik bir gecikme yaşamaz. Kesin bir tarihiniz varsa bunu erkenden bildirmeniz, doğru planlamayı yapmamız için en büyük yardımdır.",
            },
            {
                soru: "Kar başlamadan işimizi bitirmek için ne zaman makine ayırtmalıyız?",
                cevap:
                    "Sezonun ortasına doğru, son haftayı beklemeden. Kıbrıscık'ın rakımı nedeniyle kar diğer ilçelere göre daha erken düşer ve düştüğünde çalışma tamamen durur. Bu yüzden sezonun son haftalarında herkes aynı anda işini bitirmeye çalışır ve makine talebi dar bir pencereye yığılır. Kesim izninizin bitiş tarihini bize erkenden bildirirseniz, makine gününüzü bu yığılmadan önce ayırabiliriz. Son haftaya kalan talepler için elimizden geleni yaparız ama garanti veremeyiz.",
            },
            {
                soru: "Stok sahamızın zemini yumuşak; makine saplanır mı?",
                cevap:
                    "Belirgin biçimde yumuşak veya çamurlu bir zeminde saplanma riski gerçektir ve bunu göze almayız. Sahaya gitmeden önce zeminin durumunu sorarız; riskli görünüyorsa iki yol izleriz — ya işi zeminin göreceli kuruduğu bir güne erteleriz ya da işletmeciden makinenin duracağı noktaya birkaç kürek taş veya moloz sererek zemini sertleştirmesini rica ederiz. Bu küçük hazırlık, çoğu zaman makinenin güvenle durabileceği bir nokta yaratmaya yeter. Sahanızın fotoğrafını paylaşırsanız telefonda değerlendirebiliriz.",
            },
            {
                soru: "İşimiz yarım günden kısa; yine de makine gönderir misiniz?",
                cevap:
                    "Göndeririz ama size önerimiz, mümkünse başka bir talep ile birleştirmenizdir. Kıbrıscık'taki işletmelerin ölçeği çoğu zaman tek başına verimli bir sefer oluşturmuyor; bu yüzden bölgedeki başka bir işletmenin talebiyle veya komşu ilçelerdeki taleplerle birleştirdiğimizde maliyet belirgin biçimde düşüyor. Bunun için tek koşul, tarihinizde birkaç günlük esneklik göstermenizdir. Kesin bir tarihte tek başına iş istiyorsanız da hizmet veririz, sadece maliyeti özel sefer üzerinden hesaplanır.",
            },
            {
                soru: "Kıbrıscık'a giden yol kışın kapanıyor mu?",
                cevap:
                    "Yoğun kar döneminde bazı orman içi yollar geçici olarak kapanabilir veya ağır araç geçişi zorlaşabilir; bu, ilçenin rakımının doğal bir sonucudur. Bu yüzden kesim sezonunu kar başlamadan tamamlamanızı öneririz — sezon kapandıktan sonra makine sevkiyatı da aynı kısıtlara tabi olur. Kış ortasında acil bir ihtiyaç doğarsa yol durumunu güncel olarak kontrol eder, mümkünse göndeririz; ama bu durumda teslim gününü net veremeyiz, koşullar netleştiğinde sizi ararız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kıbrıscık'ın küçük nüfuslu, orman ürünlerine dayalı ilçe yapısı ve rakımının kışı erken getirmesi kamuya açık genel bilgidir; parsel bazlı sevkiyat planlaması, zemin sertleştirme önerisi ve sefer birleştirme yöntemi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:gerede-deri-osb": {
        h1: "Gerede Deri OSB Çevresindeki Orman Sahalarına Arazi Tipi Makine",
        giris:
            "Gerede'nin deri ihtisas organize sanayi bölgesi çevresi, tek bir sektörün gölgesinde kalsa da, OSB'yi çevreleyen arazi büyük ölçüde ormanlıktır ve bu orman kuşağı kendi küçük ölçekli kereste ve odun ürünleri işletmeciliğini besler. OSB'nin kendisi deri işleme etrafında kurulmuş olsa da, bölgeye hizmet veren bazı yan işletmeler — palet imalatı, ambalaj kerestesi kesimi, yakacak odun hazırlama — doğrudan OSB'nin çevresindeki orman parçalarından beslenir ve buradaki arazi işleri, deri sanayisinin kendi bakım ihtiyacından tamamen ayrı bir müşteri profili oluşturur. Bu sayfa, OSB çevresindeki orman kesim noktalarını, palet-ambalaj kerestesi üreten küçük işletmelerin zemin koşullarını ve OSB'nin kurumsal giriş düzeninin bu çevre işletmelere nasıl yansıdığını anlatır.",
        maddeler: [
            {
                baslik: "OSB çevresi orman kuşağında palet kerestesi kesimi",
                metin:
                    "Deri OSB'sinin ihtiyaç duyduğu ambalaj ve palet malzemesi, çoğunlukla bölgeyi çevreleyen orman kuşağındaki küçük kesim işletmelerinden karşılanır. Bu işletmelerin sahaları OSB'nin kendisinden farklıdır — asfalt değil, orman kenarındaki stabilize veya toprak zemindir. Palet kerestesi kesimi hızlı ve tekrarlayan bir iştir; makine bu sahalarda genellikle kısa süreli ama sık aralıklarla çağrılır. Arazi tipi makinenin buradaki rolü, kesim ekipmanının bakımı ve yükleme rampası çevresindeki yüksek nokta işleridir.",
            },
            {
                baslik: "OSB'nin kurumsal giriş düzeninin çevre işletmelere yansıması",
                metin:
                    "OSB sınırları içindeki tesisler bölge yönetiminin giriş kurallarına tabidir, ama sınırın hemen dışındaki çevre işletmeler bu kurallardan bağımsızdır — kendi sahalarına doğrudan erişilir. Bu fark, sevkiyat planlamasında önemli bir ayrımdır: OSB içi bir işe giden makine önceden bildirim ve kayıt sürecinden geçerken, çevredeki bir kesim veya palet atölyesine giden makine bu süreci atlar ve doğrudan sahaya yönlenir. Talep alırken adresin OSB sınırı içinde mi dışında mı olduğunu netleştirmemiz bu yüzden önemlidir.",
            },
            {
                baslik: "Toprak zeminli yükleme rampalarında denge",
                metin:
                    "Palet ve kereste kesimi yapan küçük işletmelerin yükleme rampaları, sık kamyon trafiği nedeniyle zamanla iz tutan ve düzensizleşen toprak zeminlere sahiptir. Bu zeminde çalışacak arazi tipi makine, rampa çevresindeki kot farklarına karşı dikkatli konumlandırılır; denge ayaklarının her biri farklı bir yükseklikte zemine oturabileceğinden, makinenin otomatik seviyeleme sistemi burada standart bir güvenlik unsurudur.",
            },
            {
                baslik: "Yakacak odun hazırlama alanlarında mevsimsel yoğunluk",
                metin:
                    "Bölgedeki bazı küçük işletmeler, kışa hazırlık kapsamında yakacak odun kesimi ve hazırlığı yapar; bu iş sonbahar aylarında belirgin biçimde yoğunlaşır. Yoğun dönemde sahalar hızlı el değiştirir — bir hafta bir noktada, ertesi hafta başka bir noktada çalışılır. Arazi tipi makine talebi de bu hareketliliğe ayak uydurmak zorundadır; bu dönemde talepleri günlük değil haftalık bazda planlamayı, işletmecinin haftalık programını önceden almayı tercih ederiz.",
            },
            {
                baslik: "OSB içi deri tesisleriyle karışmama uyarısı",
                metin:
                    "Adres benzerliği zaman zaman karışıklık yaratabiliyor — OSB'nin kendisine ait bir deri tesisiyle, hemen yakınındaki bir orman ürünleri işletmesi aynı bölge adıyla anılabiliyor. Bu iki müşteri tipinin makine ihtiyacı tamamen farklıdır: deri tesisinde nemli-kimyasal ortam ve iş izni süreci öne çıkarken, çevredeki orman işletmesinde zemin ve arazi koşulu belirleyicidir. Talep alırken işin niteliğini — deri üretimi mi, kereste-palet işi mi — açıkça sormamız bu karışıklığı baştan önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB çevresinde işletme tipi ve makine yaklaşımı",
                paragraflar: [
                    "Deri OSB'sinin çevresindeki orman ürünleri işletmeleri, kendi içinde de farklı ihtiyaçlar taşır. Tablo, sahada karşılaştığımız tipik eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Zemin / konum", "Uygun makine", "Planlama notu"],
                    satirlar: [
                        ["Palet kerestesi kesimhanesi", "Toprak/stabilize rampa", "Kompakt arazi tipi", "Sık, kısa süreli çağrı"],
                        ["Ambalaj kereste atölyesi", "Yarı kapalı, tozlu", "Akülü / arazi tipi karışık", "İç-dış iş ayrımı"],
                        ["Yakacak odun hazırlama", "Açık, mevsimsel", "Standart arazi tipi", "Haftalık program"],
                        ["Yükleme rampası bakımı", "Düzensiz kot farkı", "Otomatik seviyelemeli", "Denge ayağı kontrolü"],
                        ["OSB sınırı dışı depo", "Sabit toprak saha", "Kompakt arazi tipi", "Bağımsız giriş, bildirim gerekmez"],
                    ],
                },
            },
            {
                baslik: "OSB içi ve dışı: iki ayrı sevkiyat rejimi",
                paragraflar: [
                    "Aynı bölge adı altında iki farklı sevkiyat rejimi işliyor ve bunu baştan netleştirmek işimizin en önemli parçası. OSB sınırı içindeki bir adrese giden makine, bölge yönetiminin giriş kaydı ve bildirim sürecinden geçer; bu süreç bir gün önceden tamamlanmalıdır. OSB sınırı dışındaki bir orman işletmesine giden makine ise doğrudan sahaya yönlenir, ek bir bürokratik adım gerekmez.",
                    "Bu ayrımı talep aşamasında netleştirmemenin bedeli, teslimat gününde kapıda beklemektir — OSB girişine bildirimsiz gelen bir araç, kayıt tamamlanana kadar bekletilir. Bu yüzden Gerede deri OSB çevresinden gelen her talepte ilk sorumuz, adresin bölge sınırı içinde mi dışında mı olduğudur.",
                ],
            },
            {
                baslik: "Sonbahar yoğunluğuna hazırlık",
                paragraflar: [
                    "Yakacak odun hazırlığının yoğunlaştığı sonbahar aylarında, bölgedeki küçük işletmelerin makine talebi hızla artar ve sahalar sık değişir. Bu dönemde önerimiz, işletmecinin haftalık kesim programını bize önceden bildirmesidir — hangi hafta hangi noktada çalışılacağı netleşince, makineyi o haftaya göre planlarız ve son dakika taleplerinde yaşanabilecek gecikmeyi önleriz.",
                    "Erken planlamanın ikinci faydası, bölgedeki diğer küçük işletmelerin talepleriyle sefer birleştirme imkânıdır. Sonbahar yoğunluğunda birden fazla işletme aynı haftada makine istediğinde, güzergâhı paylaşan talepleri aynı sefere bağlamak mümkün olur ve nakliye maliyeti düşer.",
                ],
            },
        ],
        sss: [
            {
                soru: "İşletmemiz OSB'ye yakın; giriş için bildirim yapmamız gerekiyor mu?",
                cevap:
                    "Adresinizin OSB sınırı içinde mi dışında mı olduğuna bağlı. Sınır dışındaki bir orman ürünleri işletmesiyseniz, bölge yönetiminin giriş kaydına tabi değilsiniz ve makine doğrudan sahanıza yönlenir. Sınır içinde bir adresiniz varsa bildirim ve kayıt süreci gerekir ve bu süreç bir gün önceden tamamlanmalıdır. Talebinizi verirken adresinizi tam olarak paylaşırsanız, hangi rejimin geçerli olduğunu size netleştiririz — bu, teslimat gününde kapıda beklememenizi sağlar.",
            },
            {
                soru: "Palet kerestesi rampamızın zemini düzensiz; makine denge kaybeder mi?",
                cevap:
                    "Doğru hazırlıkla kaybetmez. Sık kamyon trafiği alan yükleme rampaları zamanla iz tutar ve kot farkları oluşur; bu tür zeminlerde kullandığımız arazi tipi makinelerin otomatik seviyeleme sistemi, her denge ayağının farklı yükseklikte zemine oturmasını telafi eder. Yine de aşırı düzensiz bir noktada makineyi zorlamayız — gerekirse rampanın nispeten düz bir bölümüne konumlanır ve çalışma açısı oradan ayarlanır. Rampanızın fotoğrafını paylaşırsanız telefonda değerlendirebiliriz.",
            },
            {
                soru: "Sonbaharda yakacak odun hazırlığımız için makineyi ne zaman ayırtmalıyız?",
                cevap:
                    "Haftalık programınız netleşir netleşmez, tercihen sonbahar yoğunluğu başlamadan. Bu dönemde bölgedeki talep hızla artar ve sahalar sık değiştiği için son dakika talepleri istediği günü bulmakta zorlanabilir. Haftalık kesim programınızı bize önceden bildirirseniz, makineyi o programa göre planlarız ve gerekirse bölgedeki diğer işletmelerin talepleriyle aynı sefere bağlayarak maliyeti düşürürüz. Programınız değişse bile önceden bilgi vermeniz, bize yeniden planlama şansı tanır.",
            },
            {
                soru: "İşimiz deri değil kereste; yine de bu bölgeden mi hizmet alıyoruz?",
                cevap:
                    "Evet, coğrafi olarak aynı bölgede hizmet veriyoruz ama makine yaklaşımımız tamamen farklı. Deri OSB'sindeki tesislerde nemli-kimyasal ortam ve iş izni süreci öne çıkarken, çevredeki kereste ve palet işletmelerinde zemin durumu ve arazi koşulu belirleyicidir. Talep alırken işinizin niteliğini sormamızın nedeni budur — doğru makine sınıfını ve doğru hazırlığı seçmek için deri işi mi kereste işi mi olduğunu bilmemiz gerekir. Bu ayrımı netleştirdiğinizde size doğru profildeki makineyi göndeririz.",
            },
            {
                soru: "Ambalaj kereste atölyemiz hem içeride hem dışarıda çalışıyor; tek makine yeter mi?",
                cevap:
                    "Duruma göre değişir. İşin hem kapalı bölümde hem açık sahada olduğu durumlarda, iki ayrı iş için tek makinenin uygun olup olmadığını değerlendiririz — kapalı bölümde akülü, açık sahada arazi tipi dizel gerekebilir ve bu iki ihtiyaç aynı makineyle çoğu zaman karşılanamaz. İşin büyük kısmı tek tarafta yoğunlaşıyorsa tek makineyle çözüm üretilebilir. Talebinizi verirken hangi işin nerede yapılacağını ayrıntılı anlatırsanız, tek makine mi iki ayrı sınıf mı gerektiğini netleştiririz.",
            },
            {
                soru: "OSB girişindeki bildirim süreci ne kadar sürüyor?",
                cevap:
                    "Bu, bölge yönetiminin kendi işleyişine bağlı bir konudur ve süreci sizin tarafınız — içerideki firma — başlatır; biz makine ve şoför bilgilerini size iletiriz. Genel deneyimimize göre bir gün önceden başlatılan bir bildirim, teslimat sabahına kadar tamamlanır. Son dakika bildirimlerinde kayıt tamamlanmadan araç kapıda bekleyebilir. Bu yüzden OSB sınırı içindeki bir adrese teslimat planlarken, bildirim sürecini teslim gününden en az bir gün önce başlatmanızı öneriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gerede deri OSB'sinin varlığı ve çevresindeki orman kuşağının küçük ölçekli kereste-palet işletmeciliğini beslediği kamuya açık genel bilgidir; OSB içi/dışı sevkiyat rejimi ayrımı, rampa zemin hazırlığı ve sonbahar yoğunluk planlaması firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:mengen": {
        h1: "Mengen'de Kereste ve Tomruk Sahalarına Arazi Tipi Makine Kiralama",
        giris:
            "Mengen'in orman varlığı, ilçeyi Bolu'nun kereste ve tomruk üretiminde öne çıkan noktalarından biri yapar; ilçe merkezinin aşçılık geleneğiyle tanınması, çevresindeki geniş orman sahalarının kesim ve stoklama faaliyetinin yoğunluğunu gölgelemez. Buradaki tomruk stok sahaları ve kereste yükleme noktaları, arazi tipi makinenin en sık çalıştığı adreslerdir — açık, geniş ve genellikle stabilize ya da doğal toprak zeminli alanlar. Mengen'in kendine özgü tarafı, bu sahaların bazılarının doğrudan orman içi kesim noktalarına bitişik, bazılarının ise ilçe kenarındaki sabit depolama alanlarına ait olmasıdır; bu iki tip saha, zemin ve erişim açısından farklı hazırlık gerektirir. Bu sayfa, Mengen'deki tomruk ve kereste sahalarının zemin özelliklerini, arazi tipi makinenin buralarda nasıl konumlandığını ve ilçenin kuzeydeki dağlık kesimlere olan yakınlığının sevkiyata etkisini anlatır.",
        maddeler: [
            {
                baslik: "Sabit stok sahalarında düzenli zemin bakımı",
                metin:
                    "İlçe kenarındaki sabit tomruk depolama sahaları, kesim noktalarının aksine yıl boyu aynı adreste kalır ve zemin zamanla belirli bir düzene oturur — sık kullanılan yollar sıkışır, kenar bölgeler daha gevşek kalır. Bu sahalarda arazi tipi makine, genellikle sabit güzergâhlar üzerinde hareket eder ve zemin durumu önceki ziyaretlerden bilinir. Yine de her mevsim başında zemini yeniden değerlendiririz; kış sonrası çözülme, yazın kuru geçen bir dönemden farklı bir zemin bırakır.",
            },
            {
                baslik: "Kesime bitişik geçici sahalarda değişken koşul",
                metin:
                    "Orman içi kesim noktalarına bitişik geçici stok alanları, sabit sahaların aksine her kesim döneminde yeniden kurulur ve zemin durumu önceden bilinmez. Bu sahalara giden her talep, standart bir teslimat değil, küçük bir keşif gerektirir — mümkünse işletmeciden sahanın güncel fotoğrafını isteriz, mümkün değilse makineyi gönderirken operatöre zeminin durumuna göre karar verme yetkisi tanırız.",
            },
            {
                baslik: "Kuzeydeki dağlık kesimlere erişim",
                metin:
                    "Mengen'in kuzeyindeki kesimler, ilçe merkezine göre daha yüksek ve daha ormanlıktır; buradaki kesim noktalarına giden yollar dar ve eğimlidir. Bu bölgeye sevkiyat, standart taşıyıcı araçla değil, dar yola uygun daha küçük bir taşıyıcıyla yapılır ve son bölüm çoğu zaman makinenin kendi gücüyle kat edilir. Kış aylarında bu kesimler diğer bölgelerden önce kapanabildiği için, sezon sonu işlerini erken planlamak burada özellikle önemlidir.",
            },
            {
                baslik: "Yükleme noktalarında kamyon-makine trafiği",
                metin:
                    "Kereste yükleme noktaları, tomruk taşıyan kamyonların sürekli giriş çıkış yaptığı hareketli alanlardır; arazi tipi makine burada çalışırken kamyon trafiğiyle aynı alanı paylaşır. Güvenlik açısından makinenin çalışma alanı kamyon güzergâhından ayrılır ve mümkünse çalışma, kamyon trafiğinin seyrek olduğu saatlere yazılır. Zemin bu noktalarda genellikle en çok yıpranmış bölgedir; makine konumlandırmasında en sağlam görünen kesim tercih edilir.",
            },
            {
                baslik: "Aşçılık sektörünün karıştırılmaması",
                metin:
                    "Mengen denince akla ilk gelen aşçılık geleneği olsa da, arazi tipi makine talebimiz neredeyse tamamen orman ürünleri sektöründen gelir; mutfak ve gıda tesislerinin kendi platform ihtiyacı farklı bir makine profiliyle karşılanır. Talep alırken işin ormancılık mı yoksa gıda-mutfak sektörüyle mi ilgili olduğunu netleştirmemiz, doğru makine sınıfının doğru sahaya gönderilmesini sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mengen'de saha tipi ve arazi tipi makine hazırlığı",
                paragraflar: [
                    "İlçedeki orman ürünleri sahaları, konum ve kullanım şekline göre farklı hazırlık gerektirir. Tablo, sahada uyguladığımız yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Zemin özelliği", "Uygun makine", "Planlama notu"],
                    satirlar: [
                        ["Sabit tomruk stok sahası", "Bilinen, mevsimsel değişken", "Standart arazi tipi", "Mevsim başı zemin kontrolü"],
                        ["Kesime bitişik geçici saha", "Önceden bilinmeyen", "Kompakt arazi tipi", "Güncel fotoğraf talebi"],
                        ["Kuzey dağlık kesim noktası", "Dar, eğimli erişim", "Küçük taşıyıcı + arazi tipi", "Kış öncesi erken planlama"],
                        ["Kereste yükleme noktası", "Yoğun trafik, yıpranmış", "Standart arazi tipi", "Kamyon trafiğinden ayrım"],
                        ["Kısa süreli tekil iş", "Değişken", "Duruma göre", "İş tipi netleştirme (orman/gıda)"],
                    ],
                },
            },
            {
                baslik: "Sabit ve geçici saha ayrımının planlamaya etkisi",
                paragraflar: [
                    "Mengen'deki iki saha tipi — sabit stok alanları ve kesime bitişik geçici sahalar — bizim için farklı hazırlık süreçleri gerektirir. Sabit sahalarda önceki ziyaretlerden edindiğimiz bilgi sayesinde planlama hızlı ilerler; zemin durumu ve erişim güzergâhı büyük ölçüde bilinir. Geçici sahalarda ise her seferinde sıfırdan başlarız çünkü saha o kesim dönemi için yeni kurulmuştur.",
                    "Bu ayrımı işletmecilere baştan açıklıyoruz çünkü beklenti yönetimi burada önemli: sabit sahaya giden bir talep aynı gün hızlı sonuçlanabilirken, geçici bir kesim sahasına giden talep biraz daha fazla ön bilgi ve bazen bir günlük ek planlama gerektirebilir. Bu farkı bilen işletmeci, talebini buna göre zamanlıyor.",
                ],
            },
            {
                baslik: "Kış öncesi kuzey kesimlerinin tahliyesi",
                paragraflar: [
                    "Mengen'in kuzeyindeki dağlık kesim noktaları, ilçenin diğer bölgelerinden önce kışa girer; kar burada hem erken düşer hem yolu daha uzun süre kapalı tutar. Bu nedenle kuzey kesimlerdeki işletmecilere, sezon sonu çalışmalarını mümkün olduğunca erken — ilçe merkezindeki sahalardan daha önce — tamamlamalarını öneriyoruz.",
                    "Bu erken tahliye önerisi, makine planlamasına da yansır: kuzey kesimlerinden gelen talepleri, aynı dönemdeki merkez taleplerine göre önceliklendiririz çünkü kuzeydeki pencere daha önce kapanır. İşletmecinin bunu bilerek erken talep vermesi, hem kendi işini güvenceye alır hem bizim planlamamızı kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tomruk stok sahamız yıllardır aynı yerde; her seferinde zemin mi soruyorsunuz?",
                cevap:
                    "Evet, kısa da olsa her mevsim başında soruyoruz. Sabit sahalarda genel zemin yapısını biliyor olsak da, kış sonrası çözülme veya uzun kurak dönem zemini önceki ziyaretten farklı bırakabilir. Bu kısa kontrol, sahaya vardığımızda sürpriz yaşamamamızı sağlıyor. Sabit sahalarda bu süreç hızlıdır — genellikle telefonda birkaç soruyla netleşir, geçici kesim sahalarındaki gibi ayrıntılı bir keşif gerekmez.",
            },
            {
                soru: "Kesime yeni açtığımız sahanın zemini belli değil; nasıl planlıyorsunuz?",
                cevap:
                    "Bu tür geçici sahalarda standart bir teslimat yerine küçük bir ön değerlendirme yaparız. Mümkünse sizden sahanın güncel bir fotoğrafını isteriz — zeminin rengi ve kıvamı çoğu zaman durumu net gösterir. Fotoğraf mümkün değilse, makineyi gönderirken operatöre sahada karar verme yetkisi tanırız; zemin riskli görünüyorsa makineyi zorlamak yerine durumu size bildirip birlikte çözüm ararız. Bu yaklaşım, geçici sahalarda saplanma riskini en aza indirir.",
            },
            {
                soru: "Kuzeydeki kesim noktamıza standart kamyonla makine gelebilir mi?",
                cevap:
                    "Çoğunlukla gelmez; kuzeydeki dar ve eğimli yollar standart taşıyıcı için uygun değildir. Bu bölgeye sevkiyatı daha küçük bir taşıyıcı araçla yaparız ve son bölümü makine kendi gücüyle, operatör kontrolünde kat eder. Bu, sevkiyat süresini biraz uzatır ama tek güvenli yöntemdir. Kuzey kesimlerine giden taleplerde bu ek süreyi baştan hesaba katmanızı, özellikle kış yaklaşırken erken talep vermenizi öneririz.",
            },
            {
                soru: "Yükleme noktamızda kamyon trafiği yoğun; makine güvenle çalışabilir mi?",
                cevap:
                    "Çalışabilir, koşul çalışma alanının kamyon güzergâhından fiziksel olarak ayrılmasıdır. Yükleme noktalarında bu ayrımı sahaya vardığımızda birlikte belirleriz ve mümkünse çalışmayı kamyon trafiğinin seyrek olduğu saatlere yazarız. Zemin seçiminde de dikkatli davranırız — yoğun trafik alan noktalar genellikle en yıpranmış zemindir, makineyi mümkün olduğunca sağlam görünen bir kesime konumlandırırız. Yükleme programınızı bize iletirseniz, en sakin saati birlikte buluruz.",
            },
            {
                soru: "İşimiz mutfak ekipmanıyla ilgili, orman değil; siz de mi hizmet veriyorsunuz?",
                cevap:
                    "Bu sayfa özellikle orman ürünleri ve kereste sahaları için hazırlanmıştır; gıda ve mutfak tesislerinin platform ihtiyacı farklı bir makine profiliyle karşılanır ve genellikle akülü, kapalı alana uygun modeller gerekir. Talebinizi verirken işinizin niteliğini belirtmeniz — davlumbaz hattı mı, kereste sahası mı — doğru ekibe ve doğru makine sınıfına yönlendirilmenizi sağlar. İkisi de hizmet kapsamımızda, sadece farklı makine ve hazırlık gerektiriyor.",
            },
            {
                soru: "Kuzeydeki sahamızı kışa hazır hâle getirmek için ne zaman başlamalıyız?",
                cevap:
                    "İlçe merkezindeki sahalardan daha erken. Mengen'in kuzeyindeki dağlık kesimler kar altında diğer bölgelerden önce kalır; bu yüzden sezon sonu işlerinizi erken tamamlamanızı öneriyoruz. Kuzey kesimlerden gelen talepleri aynı dönemdeki merkez taleplerine göre önceliklendiriyoruz çünkü pencereniz daha önce kapanıyor. Kışa hazırlık takviminizi netleştirdiğinizde bize erkenden bildirmeniz, makine gününüzü güvenceye almanın en garantili yoludur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Mengen'in kereste-tomruk üretimindeki yeri ve kuzey kesimlerinin görece yüksek ve ormanlık coğrafyası kamuya açık genel bilgidir; sabit/geçici saha ayrımı, zemin ön değerlendirmesi ve kuzey kesim önceliklendirmesi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:duzce-osb-cevre-ili": {
        h1: "Düzce Çevresi Orman Sahalarına Bolu Hattından Arazi Tipi Makine",
        giris:
            "Düzce'nin organize sanayi bölgesi metal, otomotiv yan sanayi ve plastik üretimiyle tanınsa da, ilin genelinde orman varlığı da geniştir ve Bolu ile paylaşılan orman kuşağı, iki il arasında ortak bir arazi tipi makine talebi yaratır. Düzce yönündeki orman sahaları, Bolu'nun kendi ormanlarına göre görece daha alçak ve daha az eğimli olsa da, yağışın bölgede daha yoğun görülmesi zemini farklı bir şekilde etkiler — kalıcı nem, toprağın daha uzun süre yumuşak kalmasına yol açar. Bu sayfa, Düzce çevresindeki orman ürünleri sahalarının kendine özgü zemin nemi sorununu, Bolu hattından yapılan arazi tipi makine sevkiyatının iki il arasındaki lojistiğini ve OSB'nin sanayi dokusuyla çevresindeki orman işletmelerinin nasıl ayrıştığını anlatır.",
        maddeler: [
            {
                baslik: "Yüksek yağışın zemine kalıcı etkisi",
                metin:
                    "Düzce, Bolu'ya göre daha fazla yağış alan bir coğrafyadır ve bu, orman sahalarındaki toprağın yıl boyunca göreceli nemli kalmasına yol açar — Bolu'daki gibi belirgin bir kuru mevsim penceresi burada daha kısadır. Arazi tipi makine seçiminde bu fark önemlidir: Düzce yönündeki sahalarda geniş taban izli ve düşük zemin basınçlı modeller, Bolu'daki kuru dönem sahalarına göre daha sık tercih edilir. Zeminin hiç kurumadığı dönemlerde çalışma, kısa süreli ve dikkatli planlanan ziyaretlerle sınırlı tutulur.",
            },
            {
                baslik: "Bolu-Düzce hattında ortak sefer planlaması",
                metin:
                    "İki ilin orman sahaları aynı coğrafi kuşakta yer aldığından, arazi tipi makine sevkiyatı çoğu zaman ortak bir sefer üzerinden planlanır — Bolu tarafındaki bir kesim sahasına giden araç, güzergâh üzerindeyse Düzce yönündeki bir talebe de uğrayabilir. Bu, özellikle iki ilin sınır bölgesindeki sahalar için geçerlidir. Talep verirken sahanızın hangi ile daha yakın olduğunu belirtmeniz, doğru sefer planına dahil edilmenizi kolaylaştırır.",
            },
            {
                baslik: "OSB sanayisi ile çevre orman işletmelerinin ayrımı",
                metin:
                    "Düzce OSB'sindeki metal, otomotiv ve plastik tesisleri, platform ve vinç ihtiyaçlarını farklı bir makine profiliyle karşılar; bu sayfanın kapsamı OSB'nin kendisi değil, çevresindeki orman ürünleri sahalarıdır. Bu iki müşteri grubu bazen aynı bölge içinde anıldığı için karışabiliyor — talep alırken işin sanayi tesisi mi yoksa orman/kereste sahası mı olduğunu netleştirmemiz, doğru makine sınıfının doğru adrese gitmesini sağlar.",
            },
            {
                baslik: "Sınır bölgesi sahalarında iki ilin farklı yol standardı",
                metin:
                    "Bolu-Düzce sınırındaki orman yollarının bakım standardı, hangi ilin sorumluluğunda olduğuna göre değişebilir; bazı kesimler daha düzenli bakım görürken bazıları daha ihmal edilmiş kalabilir. Sevkiyat planlarken bu farkı bilmek, doğru taşıyıcı aracı ve doğru güzergâhı seçmemizi sağlar. Sınır bölgesindeki bir sahaya ilk kez gidiyorsak, yol durumunu işletmeciden veya daha önce o bölgede çalışmış ekibimizden teyit ederiz.",
            },
            {
                baslik: "Nemli zeminde iş sonrası makine bakımı",
                metin:
                    "Düzce yönündeki sahalarda çalışan arazi tipi makineler, kalıcı nem nedeniyle standart bakım programının dışında ek bir kontrolden geçer — özellikle şase altı ve hidrolik bağlantı noktalarında nem birikimi kontrol edilir. Bu, müşteriye yansımayan ama filoyu sağlıklı tutan bir iç süreçtir. Düzce yönünden dönen bir makine, bir sonraki sahaya gitmeden önce bu kontrolden geçirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Düzce çevresi orman sahalarında koşul ve makine",
                paragraflar: [
                    "Düzce yönündeki orman sahaları, nem ve yol standardına göre farklı hazırlık gerektirir. Tablo, sahada uyguladığımız yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Baskın koşul", "Uygun makine", "Planlama notu"],
                    satirlar: [
                        ["Devamlı nemli orman sahası", "Yumuşak, kuru dönem kısa", "Geniş taban izli arazi tipi", "Kısa süreli ziyaret tercih"],
                        ["Sınır bölgesi kesim noktası", "Değişken yol standardı", "Standart arazi tipi", "Yol teyidi önceden"],
                        ["Düzce yakını stok sahası", "Görece düz, nemli", "Standart arazi tipi", "Zemin kuruma takibi"],
                        ["OSB çevresi karışık alan", "Karışabilir müşteri profili", "Duruma göre", "İş tipi netleştirme"],
                        ["Ortak sefer güzergâhı", "İki il arası", "Değişmez, güzergâha göre", "Sahanın hangi ile yakın olduğu"],
                    ],
                },
            },
            {
                baslik: "Kuru pencerenin kısalığını yönetmek",
                paragraflar: [
                    "Düzce yönündeki orman sahalarında Bolu'daki gibi belirgin ve uzun bir kuru mevsim penceresi yoktur; yağış yıl boyu görece dengeli dağılır ve zemin nadiren tam kurur. Bu, çalışma planını mevsime göre değil, kısa vadeli hava tahminine göre kurmayı gerektirir. Talep aldığımızda önümüzdeki birkaç günün hava durumuna bakarız ve mümkünse çalışmayı görece kuru geçen bir güne denk getiririz.",
                    "Bu belirsizlik, işletmecilerin tarihte esneklik göstermesini daha da değerli kılar. Kesin bir güne kilitlenmiş bir talep, o gün yağış gelirse ya ertelenir ya da makine riskli bir zeminde zorlanır. Birkaç günlük esneklik payı bırakan talepler, hem daha güvenli hem daha verimli sonuçlanır.",
                ],
            },
            {
                baslik: "İki il arası sefer ekonomisi",
                paragraflar: [
                    "Bolu ile Düzce arasındaki orman kuşağının paylaşılan yapısı, sevkiyat ekonomisinde somut bir avantaj sağlar: sınır bölgesindeki talepler, hangi ilden geldiğine bakılmaksızın aynı sefer planına dahil edilebilir. Bir araç Bolu tarafındaki bir sahaya giderken, güzergâh üzerindeyse Düzce yönündeki bir talebe de uğrayabilir ve bu, her iki taraf için de nakliye maliyetini düşürür.",
                    "Bu avantajdan yararlanmanın yolu, talebinizi verirken sahanızın konumunu mümkün olduğunca net paylaşmaktır. Sınıra yakın bir sahaysanız, bunu belirtmeniz bizim güzergâh planlamamızı kolaylaştırır ve size daha uygun bir sefer sunma şansımızı artırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Düzce yönündeki sahamız hep nemli; makine her zaman çalışabilir mi?",
                cevap:
                    "Çoğu zaman evet ama her seferinde kısa vadeli hava durumuna bakarak karar veririz. Düzce yönündeki sahalarda Bolu'daki gibi belirgin bir kuru mevsim penceresi yok; zemin yıl boyu göreceli nemli kalıyor. Bu yüzden geniş taban izli, düşük zemin basınçlı arazi tipi makineleri burada daha sık kullanıyoruz — bu modeller nemli zeminde standart modellere göre çok daha iyi performans gösteriyor. Yine de aşırı yağışlı bir dönemde çalışmayı birkaç gün erteleyebiliriz; bu, makinenizin ve sahanızın korunması içindir.",
            },
            {
                soru: "Sahamız Bolu-Düzce sınırına yakın; hangi ilden hizmet alıyoruz?",
                cevap:
                    "İkisi de mümkün, bizim için önemli olan sahanızın güzergâha uzaklığıdır. Sınır bölgesindeki talepleri, hangi ilden geldiğine bakmaksızın en uygun sefer planına dahil ederiz — Bolu tarafından giden bir araç, güzergâh üzerindeyse sizin sahanıza da uğrayabilir. Talebinizi verirken konumunuzu net paylaşmanız, bu birleştirmeyi kolaylaştırır ve size daha uygun bir maliyet sunma şansımızı artırır.",
            },
            {
                soru: "OSB'deki sanayi tesisi değiliz, orman sahasıyız; farklı mı değerlendiriliyoruz?",
                cevap:
                    "Evet, tamamen farklı bir profille değerlendiriliyorsunuz. Düzce OSB'sindeki metal, otomotiv ve plastik tesisleri kendi makine ihtiyaçlarını farklı bir sınıfla karşılıyor; bizim bu sayfada anlattığımız hizmet, OSB çevresindeki orman ürünleri ve kereste sahalarına yönelik. Talep alırken işinizin niteliğini sormamızın nedeni bu karışıklığı baştan önlemek — orman/kereste işiyseniz arazi tipi makine profiliyle, sanayi tesisiyseniz farklı bir profille ilerleriz.",
            },
            {
                soru: "Sınır bölgesindeki yolun durumunu nasıl biliyorsunuz?",
                cevap:
                    "İlk kez gittiğimiz bir sahada, yol durumunu önceden teyit ederiz — ya işletmeciden ya da bölgede daha önce çalışmış ekibimizden. Bolu-Düzce sınırındaki orman yollarının bakım standardı, hangi ilin sorumluluğunda olduğuna göre değişebiliyor; bazı kesimler daha düzenli, bazıları daha ihmal edilmiş olabiliyor. Bu farkı bilmeden taşıyıcı araç seçmek riskli olur, bu yüzden sahanızın tam konumunu ve yol tarifini talep aşamasında ayrıntılı almayı tercih ediyoruz.",
            },
            {
                soru: "Kesin bir gün istiyoruz, esnekliğe gerek var mı?",
                cevap:
                    "Kesin gün talebini karşılarız ama Düzce yönündeki nemli zemin koşulları düşünüldüğünde birkaç günlük esneklik önerimizdir. Kesin bir güne kilitlenmiş bir talep, o gün yağış gelirse ya ertelenmek zorunda kalır ya da makine riskli bir zeminde çalıştırılır — ikisi de istediğimiz bir durum değil. Esneklik payı bırakan talepler, hem daha güvenli hem genellikle daha ekonomik sonuçlanıyor çünkü sefer birleştirme şansı da artıyor. Kesin gün gerekiyorsa bunu söylemeniz yeterli, riskleri size baştan açıklarız.",
            },
            {
                soru: "Nemli sahada çalışan makineniz sonradan arıza yapar mı?",
                cevap:
                    "Bu bizim tarafımızda yönetilen bir konu, size yansımaz. Düzce yönünden dönen makineler, kalıcı nem nedeniyle standart bakım programının dışında ek bir kontrolden geçer — özellikle şase altı ve hidrolik bağlantı noktaları nem birikimine karşı kontrol edilir. Bu disiplin olmadan filo hızla yıpranır ve bir sonraki müşteriye sorunlu makine gider. Sizin tarafınızda beklentimiz sadece, çalışma sırasında makinenin gereksiz yere su birikintisine sokulmamasıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Düzce'nin Bolu'ya göre daha yüksek yağış aldığı ve iki ilin orman kuşağını paylaştığı kamuya açık genel bilgidir; nemli zemine göre makine seçimi, sınır bölgesi sefer birleştirme ve iş sonrası nem kontrolü firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:kizilcahamam-ankara-cevre-ili": {
        h1: "Kızılcahamam Çevresi Orman Sahalarına Arazi Tipi Makine Kiralama",
        giris:
            "Kızılcahamam ve çevresi, termal turizmiyle tanınsa da, Ankara'nın kuzeyindeki bu kuşak aynı zamanda başkentin en yoğun orman örtüsüne sahip bölgelerinden biridir; bu orman varlığı, bölgedeki kereste, kestane ve odun ürünleri işletmeciliğini besler. Bolu tarafından bakıldığında Kızılcahamam yönü, dağ geçişinin doğu yakasında kalır ve buradaki orman sahalarına arazi tipi makine sevkiyatı, kış aylarında geçişin durumuna bağlı ayrı bir planlama gerektirir. Bölgenin orman dokusu Bolu'dakinden farklı bir özellik taşır — kestanelik alanlar ve karışık yaprak döken orman, tomruk kesiminden çok budama, bakım kesimi ve orman ürünü toplama faaliyetiyle öne çıkar. Bu sayfa, Kızılcahamam çevresindeki orman sahalarının kendine özgü bitki örtüsünü, arazi tipi makinenin buradaki kullanım biçimini ve geçişin doğu yakasındaki kış planlamasını anlatır.",
        maddeler: [
            {
                baslik: "Kestanelik alanlarda budama ve bakım kesimi",
                metin:
                    "Bölgenin kestanelik alanları, tomruk kesiminden çok düzenli budama ve bakım kesimi gerektirir; bu iş, ağaçların arasında sık aralıklarla hareket eden, kompakt gövdeli bir arazi tipi makine ister. Ağaç sıraları arası mesafe standart bir kesim sahasına göre dardır, bu yüzden makine seçiminde gövde genişliği yükseklikten önce gelir. Sepetin budama yapılacak dala yandan yaklaşabilmesi, eklemli modelleri bu işte makaslı modellere göre daha kullanışlı kılar.",
            },
            {
                baslik: "Karışık orman dokusunda değişken zemin",
                metin:
                    "Bölgedeki karışık yaprak döken orman, tek tip bir zemin sunmaz — kayalık çıkıntılar, kök yumruları ve yaprak döküntüsüyle kaplı yumuşak noktalar aynı sahada yan yana bulunabilir. Arazi tipi makine bu değişkenliğe göre yavaş ve dikkatli ilerler; operatör, sahaya girmeden önce güzergâhı gözle tarar ve riskli noktalardan kaçınır. Bu, sahadaki iş süresini standart bir düz araziye göre uzatabilir; planlamada bu payı baştan hesaba katarız.",
            },
            {
                baslik: "Geçişin doğu yakasında kış planlaması",
                metin:
                    "Kızılcahamam yönü, Bolu Dağı geçişinin doğu yakasında kaldığı için kış aylarında sevkiyat, geçişin o günkü durumuna bağlıdır. Arazi tipi makine taşıyan araçlar ağır sınıfa girer ve geçişte zincir zorunluluğu veya bekletme uygulandığında sevkiyat gecikebilir. Bu bölgeye kış döneminde giden taleplerde gün taahhüdü verir, saat taahhüdü vermeyiz; teslim sabahı geçişin durumu netleştiğinde saat teyidi yaparız.",
            },
            {
                baslik: "Orman ürünü toplama sezonunda kısa süreli talep",
                metin:
                    "Bölgedeki bazı işletmeler, kestane ve diğer orman ürünlerinin toplandığı sezonda kısa süreli erişim ihtiyacı duyar — toplama alanına erişim yolu açma, geçici depolama noktası hazırlama gibi işler. Bu talepler genellikle birkaç saatlik kısa işlerdir ve sezona sıkışık bir şekilde gelir. Bu dönemde makine planlamasını günlük değil haftalık bazda yaparız, çünkü toplama takvimi hava koşullarına göre kayabilir.",
            },
            {
                baslik: "Termal turizm bölgesiyle karışmama uyarısı",
                metin:
                    "Kızılcahamam denince ilk akla gelen termal konaklama tesisleri olsa da, bu sayfanın kapsamı onlar değil, bölgedeki orman ürünleri sahalarıdır; termal tesislerin çatı-cephe bakım ihtiyacı tamamen farklı bir makine profiliyle karşılanır. Talep alırken işin orman/kereste işi mi yoksa konaklama tesisi bakımı mı olduğunu netleştirmemiz, doğru ekibin ve doğru makine sınıfının devreye girmesini sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kızılcahamam çevresinde orman tipi ve makine yaklaşımı",
                paragraflar: [
                    "Bölgenin karışık orman dokusu, iş tipine göre farklı makine yaklaşımı gerektirir. Tablo, sahada uyguladığımız eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Alan / iş tipi", "Zemin / bitki örtüsü", "Uygun makine", "Planlama notu"],
                    satirlar: [
                        ["Kestanelik budama alanı", "Sık ağaç sırası", "Kompakt eklemli arazi tipi", "Gövde genişliği önceliği"],
                        ["Karışık orman kesim noktası", "Kayalık, kök yumrulu", "Standart arazi tipi", "Yavaş, güzergâh taraması"],
                        ["Toplama sezonu geçici erişim", "Değişken, kısa süreli", "Kompakt arazi tipi", "Haftalık program takibi"],
                        ["Kış dönemi orman sahası", "Geçiş bağımlı erişim", "Değişmez, sevkiyat farklı", "Gün taahhüdü, sabah teyidi"],
                        ["Termal tesis çevresi (dışarıda)", "Karışabilir profil", "Farklı makine sınıfı", "İş tipi netleştirme"],
                    ],
                },
            },
            {
                baslik: "Dar ağaç sıraları arasında manevra",
                paragraflar: [
                    "Kestanelik alanlarda çalışmanın en büyük kısıtı yükseklik değil, ağaç sıraları arasındaki dar aralıktır. Standart bir arazi tipi makinenin gövde genişliği bu aralığa sığmayabilir; bu yüzden bölgede kompakt gövdeli modelleri öncelikli tutuyoruz. Sahaya gitmeden önce ağaç sıraları arasındaki tipik mesafeyi işletmeciden öğreniyor, makine seçimini buna göre yapıyoruz.",
                    "Manevra alanı dar olduğunda operatörün deneyimi de kritik hâle gelir; bölgede sık çalıştığımız için ekibimiz bu tip sahalara aşinadır ve makineyi ağaçlara zarar vermeden konumlandırma konusunda tecrübelidir. İlk kez çalıştığımız bir kestanelik sahada ise başlamadan önce kısa bir yürüyüşle güzergâhı birlikte belirleriz.",
                ],
            },
            {
                baslik: "Doğu yakasının kış disiplini",
                paragraflar: [
                    "Bolu Dağı geçişinin doğu yakasında kalan bu bölgeye kış sevkiyatı, geçişin kendi koşullarına tabidir ve bu konuda iyimser söz vermeyiz. Kasım-mart döneminde bölgeye giden her talepte gün taahhüdü veririz, saat taahhüdünü teslim sabahı geçişin durumuna göre netleştiririz. Bu yaklaşım, sahada bekleyen bir ekibin belirsizlik yaşamaması içindir.",
                    "Kış öncesi önerimiz, bölgedeki bakım ve toplama işlerini sonbaharda tamamlamaktır. Geçiş kapandığında ya da zincir zorunluluğu uzun sürdüğünde, arazi tipi makine sevkiyatı da doğrudan etkilenir ve bu durumda işin ertelenmesi kaçınılmaz olur. Erken planlayan işletmeci, bu riski büyük ölçüde bertaraf eder.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kestanelik alanımızda ağaç sıraları dar; makine geçebilir mi?",
                cevap:
                    "Çoğu durumda kompakt gövdeli bir arazi tipi makineyle geçilebilir, ama bunu kesinleştirmek için ağaç sıraları arasındaki mesafeyi önceden öğreniriz. Bölgedeki kestanelik sahalara aşina olan ekibimiz, dar aralıklarda makineyi ağaçlara zarar vermeden konumlandırma konusunda tecrübelidir. İlk kez çalıştığımız bir sahada, işe başlamadan önce kısa bir yürüyüşle güzergâhı birlikte belirleriz. Sıralar arası mesafeyi bize iletirseniz, uygun makine sınıfını önceden netleştirebiliriz.",
            },
            {
                soru: "Karışık ormanlık sahamızda kayalık noktalar var; risk oluşturur mu?",
                cevap:
                    "Oluşturabilir, bu yüzden makine sahaya dikkatli girer. Bölgedeki karışık yaprak döken orman, kayalık çıkıntılar ve kök yumrularıyla yaprak döküntülü yumuşak noktaları bir arada barındırabiliyor. Operatörümüz sahaya girmeden önce güzergâhı gözle tarar ve riskli noktalardan kaçınacak bir yol belirler. Bu, işin standart bir düz araziye göre biraz daha uzun sürmesi demektir; planlamada bu payı baştan hesaba katıyoruz, sizi sürprizle karşılaştırmıyoruz.",
            },
            {
                soru: "Kış aylarında bu bölgeye makine gönderiminiz duruyor mu?",
                cevap:
                    "Durmuyor ama planlama biçimi değişiyor. Bölge, Bolu Dağı geçişinin doğu yakasında kaldığı için kasım-mart döneminde teslim günü veririz, saat taahhüdünü teslim sabahı geçişin durumuna göre netleştiririz. Yoğun kar veya zincir zorunluluğu olan günlerde sevkiyat gecikebilir; böyle günlerde teslimatı zorlamak yerine koşulların uygun olduğu ilk güne alırız. Kış işlerinde birkaç günlük esneklik payı bırakmanızı öneririz.",
            },
            {
                soru: "Toplama sezonunda kısa süreli erişim ihtiyacımız var; nasıl planlıyorsunuz?",
                cevap:
                    "Bu tür talepleri günlük değil haftalık bazda planlarız çünkü toplama takvimi hava koşullarına göre kayabiliyor. Sezon başladığında işletmecinin yaklaşık programını öğrenir, makineyi o haftalara göre ayarlarız. İş genellikle birkaç saatlik kısa bir çalışmadır — erişim yolu açma veya geçici depolama noktası hazırlama gibi; bu kısa işleri mümkünse bölgedeki başka taleplerle birleştirerek nakliye maliyetini düşürürüz.",
            },
            {
                soru: "Termal otelimizin çatı bakımı için de bu sayfadan mı hizmet alıyoruz?",
                cevap:
                    "Hayır, bu sayfa bölgedeki orman ürünleri ve kereste sahalarına yönelik arazi tipi makine hizmetini anlatıyor. Termal ve konaklama tesislerinin çatı-cephe bakım ihtiyacı tamamen farklı bir makine profiliyle — genellikle iz bırakmayan lastikli, kapalı alana uygun modellerle — karşılanıyor. Talep alırken işinizin niteliğini sormamızın nedeni bu karışıklığı baştan önlemek. Konaklama tesisiyseniz sizi doğru ekibe yönlendiririz.",
            },
            {
                soru: "Sonbaharda bakım işlerimizi bitirmek için ne zaman başlamalıyız?",
                cevap:
                    "Kış gelmeden, tercihen erken sonbaharda. Bölge geçişin doğu yakasında kaldığı için kış koşulları sevkiyatı doğrudan etkiler; geçiş kapandığında veya uzun süre zincir zorunluluğu olduğunda arazi tipi makine sevkiyatı da gecikebilir. Bakım ve toplama işlerinizi sonbaharda tamamlarsanız bu riski büyük ölçüde ortadan kaldırırsınız. Programınızı erken bildirirseniz, sezon yoğunluğu başlamadan makine gününüzü ayırırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kızılcahamam çevresinin Ankara kuzeyindeki yoğun orman örtüsü, kestanelik alanların varlığı ve bölgenin Bolu Dağı geçişinin doğu yakasında kalması kamuya açık genel bilgidir; dar ağaç sırası manevra yaklaşımı, güzergâh tarama uygulaması ve kış dönemi sevkiyat disiplini firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },
    "bolge:seben": {
        h1: "Seben Orman Yolu Koşullarında Arazi Tipi Platform Seçimi",
        giris: "Seben için yüksek erişim planı, dağlık ve ormanlık çevrede hedefe ulaşan yolun tek bir bütün gibi değil, farklı koşullara sahip kesitler hâlinde okunmasına dayanır. Belirli köy, orman sahası, işletme, tesis, yol uzunluğu, rakım veya hava verisi ileri sürülmez. Bu kayıt Kıbrıscık sayfasındaki değişken kesim parseli, kısa sezon, küçük işletme seferi ve komşu talep birleştirme kurgusunu kullanmaz. Seben'de ele alınan soru şudur: taşıyıcı ile platform hangi güvenli noktaya kadar ilerleyebilir, hangi iş cebinde kurulabilir ve hedefe erişim için arazi tipi özellik gerçekten gerekli midir? Gerçek talepte yol yüzeyi, eğim, genişlik, dönüş, yan boşluk, üst dal teması, menfez-köprü benzeri geçiş, yağış sonrası durum ve geri dönüş imkânı saha sorumlusundan alınan güncel görüntülerle değerlendirilir. Arazi tipi yürüyüş, kötü yüzeyi sınırsızca aşma yetkisi vermez. Makine çalışma noktasında üretici sınırları içinde dengeli ve doğrulanmış yüzey ister. Hedefin dikey-yatay geometrisi, sepet yükü ve çevredeki hareket de ayrıca ölçülür. Uygun yol cebi bulunamıyorsa daha uzun erişimli farklı konum, yüzey hazırlığı ya da başka çalışma yöntemi seçilir. Böylece seçim yalnız makinenin çekişine değil, güzergâhın tamamında kontrollü giriş ve güvenli çıkış olanağına bağlanır.",
        maddeler: [
            { baslik: "Orman yolunu karar kesitlerine bölmek", metin: "Güzergâh; sert yüzey, gevşek dolgu, eğimli bölüm, dar dönüş, üst engel ve çalışma cebi gibi karar kesitleriyle kaydedilir. Her kesit için yakın görüntü, ilerleme yönü ve geri çıkış seçeneği istenir. Yolun başlangıcının uygun görünmesi son bölümün de taşıyıcı veya platform için geçilebilir olduğunu göstermez. En kısıtlayıcı nokta makine sınıfını ve taşıma düzenini belirler. Saha sorumlusu yağış, yol çalışması veya malzeme yığılması gibi güncel değişiklikleri iş gününden önce bildirir. Belirsiz bir kesit varsa ağır ekipman o noktaya kadar gönderilip deneme yapılmaz; önce yerinde gözlem ya da alternatif erişim kararı hazırlanır." },
            { baslik: "Taşıyıcı bırakma noktası ile iş cebini ayırmak", metin: "Platformu getiren aracın güvenle durabileceği, rampasını açabileceği ve yeniden yönlenebileceği alan ile platformun çalışacağı cep aynı olmak zorunda değildir. İki nokta arasında makinenin kendi yürüyüşü planlanacaksa üreticinin izin verdiği eğim, yüzey ve mesafe koşulları incelenir. Sepet tamamen aşağıda tutulur, güzergâh insan ve araçtan ayrılır, kör dönüşlerde gözcü kullanılır. Taşıyıcı dar bir orman yolunda geçişi kapatacak biçimde bırakılmaz. Güvenli boşaltma alanı yoksa platform indirilmez; daha uygun buluşma noktası veya farklı taşıma düzeni belirlenir. İş bittiğinde çıkış yönünün korunması da ilk kabulün parçasıdır." },
            { baslik: "Arazi tipi sınıfı yüzeye göre doğrulamak", metin: "Dört çeker, salınımlı aks, uygun lastik veya dengeleme özelliği bulunan bir sınıf değerlendirilebilir; ancak bu özelliklerin gerekliliği ve yeterliliği üretici verisiyle gerçek yüzey karşılaştırılarak belirlenir. Çamur, gevşek kenar, derin iz, yana eğim veya altı boşalmış dolgu makinenin zorlanarak geçeceği engeller değildir. Paletli ya da lastikli olması taşıma kapasitesi bilinmeyen zemini güvenli yapmaz. İş cebinde platformun çalışma yükleri ayrıca ele alınır. Yüzey iyileştirmesi gerekiyorsa yöntem saha sahibinin ve yetkili teknik tarafın kontrolünde hazırlanır; rastgele taş, tahta veya molozla geçici dayanak oluşturulmaz." },
            { baslik: "Hedef geometrisini yol kararından ayrı ölçmek", metin: "Güzergâhın geçilebilir olması seçilen platformun hedefe erişeceği anlamına gelmez. İş cebinden hedefe dikey mesafe, yatay açıklık, ağaç ve yapı engelleri, üst hatlar, sepet içindeki personel ile küçük malzeme toplamı kaydedilir. Dikey yaklaşım mümkünse uygun arazi makaslı, engel aşmak gerekiyorsa erişim zarfı yeterli arazi eklemli veya teleskopik seçenek incelenebilir. Korkuluk üzerinden uzanılmaz, sepet hedefe dayanmaz. Dal veya başka doğal engel kesilerek rota açılacağı varsayılmaz; böyle bir işlem ayrı yetki ve yöntem gerektirir. Yol kabiliyeti ile çalışma zarfı iki bağımsız onay olarak kapanır." },
            { baslik: "Giriş koşulunu iş boyunca yeniden değerlendirmek", metin: "Orman yolunda yağış, yüzey akışı, başka araç geçişi veya zemin bozulması dönüş koşulunu değiştirebilir. Gözcü yalnız sepet altını değil, çalışma cebine ulaşan yolun kullanılabilirliğini de izler. Koşul kötüleşmeye başladığında iş son ana kadar sürdürülmez; sepet indirilir ve makine güvenli çıkış planına göre hareket ettirilir. Platform iş cebinde bırakılacaksa düz, korunmuş ve yetkisiz kullanımdan güvenli alan gerekir. Çalışma sonunda yüzeyde oluşan iz, açık kalem ve yol durumu saha sorumlusuyla kaydedilir. Girişte uygun bulunan kesitlerin çıkışta otomatik uygun kalacağı varsayılmaz." },
        ],
        ekBolumler: [
            { baslik: "Seben orman yolu karar tablosu", paragraflar: ["Tablo belirli bir yol veya işletmeyi anlatmaz; güncel güzergâhı kesit bazında değerlendirmek için genel bir kontrol aracıdır."], tablo: { basliklar: ["Kesit", "Kontrol", "Olası karar", "Durdurma nedeni"], satirlar: [["Sert yaklaşım", "Genişlik-dönüş", "Standart taşıma", "Geri dönüş yok"], ["Gevşek yüzey", "Taşıma ve iz", "Arazi tipi inceleme", "Kenar zayıf"], ["Eğimli bölüm", "Boyuna-yana eğim", "Üretici verisi", "Sınır belirsiz"], ["Dar üst geçiş", "Dal ve açıklık", "Kompakt ölçü", "Temas riski"], ["İş cebi", "Denge ve hedef zarfı", "Kurulum onayı", "Yüzey uygun değil"]] } },
            { baslik: "Görüntülü ön keşif ve yerinde karar", paragraflar: ["Görüntüler yolun ilerleme yönünde ve geri bakışla alınır; yalnız en sorunlu noktanın yakın fotoğrafı yeterli değildir. Dar dönüşün öncesi-sonrası, yol kenarı, eğimin devamı, üst açıklık ve muhtemel iş cebi birlikte görülür. Güncel yağış etkisi eski görüntülerden çıkarılmaz.", "Ön değerlendirme hangi makine ve taşıma seçeneğinin inceleneceğini daraltır. Taşıma yeterliliği, gizli boşluk veya sınırdaki eğim görüntüyle doğrulanamıyorsa yerinde kontrol gerekir. Operatör sahada farklı koşul görürse ön kararı uygulamak zorunda değildir; güvenli noktada durur ve yeni değerlendirme ister." ] },
            { baslik: "Çıkış güvencesi ve acil iletişim", paragraflar: ["Saha ekibi, platformun hangi yönden çıkacağını, yolu kimin açık tutacağını ve koşul değişikliğini kimin bildireceğini önceden belirler. İletişim kapsaması veya yönteminin yeterliliği çalışma başlamadan sınanır. Yerdeki yetkin kişi acil indirme kumandasını tanır ve gözcülük görevini başka işle birleştirmez.", "Başka araç güzergâhı kapatır, iletişim kesilir veya zemin hareketi görülürse sepet güvenli biçimde aşağı alınır. Olay sonrasında makine ve yol yetkili kişilerce değerlendirilmeden çalışma yeniden açılmaz. Kurtarma düşüncesi yalnız sepetten indirme değil, ekibin ve platformun güvenli bir noktaya ulaşmasını da kapsar." ] },
        ],
        sss: [
            { soru: "Seben'de arazi tipi platform her orman yolundan geçer mi?", cevap: "Hayır. Arazi tipi özellik çekiş ve belirli yüzey koşullarında hareket kabiliyeti sağlayabilir, fakat dar dönüşü, zayıf yol kenarını, taşıması bilinmeyen dolguyu, aşırı eğimi veya üst engeli ortadan kaldırmaz. Güzergâh kesitlere ayrılır; en kısıtlayıcı genişlik, dönüş, yüzey ve açıklık üretici verisiyle karşılaştırılır. Uygunluğu doğrulanmayan bölüm deneme sürüşüyle aşılmaya çalışılmaz. Alternatif bırakma noktası, başka iş cebi, yüzey hazırlığı veya farklı erişim yöntemi değerlendirilir. Makinenin güçlü görünmesi güvenli geçiş kanıtı değildir." },
            { soru: "Yol fotoğrafı makine seçimi için yeterli olur mu?", cevap: "İyi hazırlanmış görüntü ön seçimi hızlandırır; ancak her durumda kesin yeterlilik sağlamaz. Yol boyunca ilerleme ve geri dönüş yönü, dar noktanın iki tarafı, kenar yapısı, eğimin devamı, üst açıklık ve çalışma cebi görünmelidir. Ölçü referansı eklenmesi yararlıdır. Yağış sonrası yüzey veya gizli boşluk yalnız fotoğrafla doğrulanamayabilir. Bilgi sınırdaysa yerinde inceleme yapılır. Sahaya gelen operatör görüntüden farklı koşul görürse çalışmayı durdurabilir; eski fotoğraf güncel yüzeyin yerine geçmez." },
            { soru: "Taşıyıcı hedefe kadar gitmek zorunda mı?", cevap: "Hayır. Taşıyıcı için güvenli durma, rampa açma ve dönüş alanı daha geride olabilir. Platformun oradan iş cebine kendi gücüyle ilerlemesi ancak üreticinin yürüyüş koşulları, yol eğimi, yüzey, mesafe ve çevre ayrımı uygunsa planlanır. Sepet aşağıda olur ve gözcü kör noktaları izler. Taşıyıcının geçişi kapatması ya da güvenli çıkış yönünü kaybetmesi kabul edilmez. Uygun boşaltma noktası bulunamıyorsa ekipman indirilmez; taşıma biçimi veya çalışma yöntemi yeniden tasarlanır." },
            { soru: "Çamurlu veya gevşek yol arazi tipi makineyle aşılabilir mi?", cevap: "Yüzeyin derinliği, alt taşıması, yana eğimi, kenar güvenliği ve makinenin üretici sınırı bilinmeden evet denemez. Dört çeker veya palet, altı boşalmış dolguyu ya da zayıf banketi güvenli hâle getirmez. Tekerin veya paletin yüzeyi bozarak dönüş yolunu kapatma ihtimali de değerlendirilir. Yetkili bir yüzey hazırlığı yapılabiliyorsa yeniden kontrol edilir. Rastgele taş, tahta veya moloz serilerek yeterlilik varsayılmaz. Koşul uygun değilse daha kuru zaman, başka iş cebi veya farklı yöntem seçilir." },
            { soru: "Yol uygunsa hedefe erişim kesinleşmiş olur mu?", cevap: "Hayır. Yol kabulü yalnız platformun iş cebine ulaşmasını ele alır. Hedef için dikey mesafe, yatay açıklık, ağaç veya yapı engeli, üst hat, park yüzeyi ve sepetteki yük ayrıca ölçülür. Dikey yaklaşımda arazi makaslı, engel arkasında uygun bomlu seçenek düşünülebilir; kesin karar üretici erişim zarfıyla verilir. Doğal engelin kesileceği ya da sepetin hedefe dayanacağı varsayılmaz. Güzergâh ve çalışma geometrisi iki ayrı onaydır; birinin uygunluğu diğerinin eksiklerini kapatmaz." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Yolun başlangıcından iş cebine kadar ilerleme yönündeki görüntüleri; dar dönüş, eğim, kenar, üst açıklık ve geri çıkış alanını paylaşın. Yüzeyin güncel yağış durumunu, taşıyıcının durabileceği noktayı ve başka araç hareketini belirtin. Hedef için dikey-yatay ölçü, engeller, park tabanı, sepetteki kişi ve küçük malzeme bilgisi gerekir. Belirli yer veya tesis varsayılmaz. Bilgi sınırdaysa güzergâh yerinde görülür; ardından taşıma noktası, arazi tipi sınıf, çalışma cebi ve çıkış güvencesi kesinleştirilir." },
        ],
        kaynak: "Metin 13 Ağustos 2026 tarihinde Seben'in dağlık ve ormanlık çevresinde orman yolu koşuluna göre arazi tipi platform seçimi için özgün yazıldı. Belirli köy, orman sahası, işletme, tesis, yol, rakım, mesafe veya başka sayısal veri kullanılmamıştır; kesit analizi genel saha yaklaşımıdır.",
    },
};
