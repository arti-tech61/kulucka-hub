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

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Bolu'da Kereste Kurutma Fırını ve Üretim Hattı Üstü Dar Alanlarda Örümcek Platform Kiralama",
        giris:
            "Bir kereste ve mobilya tesisinde arıza çağrısı geldiğinde ilk soru genelde makine sınıfı değil, makinenin oraya nasıl ulaşacağıdır. Bolu'daki kurutma fırını sıraları, hat üstü konveyör galerileri ve zamanla eklenmiş bölme duvarları, saha planını ilk kurulum çizimine göre değil yıllar içinde eklenen ihtiyaca göre şekillendirmiştir; bu da geçiş ölçülerini önceden tahmin edilemez kılar. Telefonda 'dar bir yerde çalışacağız' denildiğinde bizim için asıl belirleyici üç rakamdır: en dar geçidin eni, tavanın en alçak noktası ve hedefe kadar olan yatay mesafe. Bu üç rakam netleşmeden hangi platform sınıfının gideceğine karar vermeyiz — çünkü örümcek platformu göndermek, ölçü uymuyorsa gereksiz bir montaj-söküm maliyeti; standart makaslı göndermek, geçit dar çıkarsa boşa giden bir sevkiyat demektir. Bu sayfada saha ölçüsü telefonda nasıl toplanır, hangi eşik değerlerde karar değişir ve kurutma fırını/hat üstü/talaş ortamı gibi tekrar eden senaryolarda bu üç rakam neye karşılık gelir, bunu anlatıyoruz. Belirli bir fabrika adı, kapasite veya sayısal iddia içermez; anlatılan yaklaşım genel saha pratiğidir.",
        maddeler: [
            { baslik: "Telefonda sorduğumuz üç ölçü", metin: "Saha ziyareti öncesinde geçidin eni, tavanın en alçak noktası ve hedef noktaya kadar yatay mesafe sorulur. Bu üç değer, örümcek platform mu yoksa standart bir sınıf mı gönderileceğini büyük ölçüde belirler. Ölçü net değilse bir cetvel veya şerit metreyle hızlı bir kontrol istenir; tahminî rakamla makine yola çıkarılmaz, çünkü yanlış sınıfın sahaya varıp geri dönmesi hem zaman hem maliyet kaybıdır." },
            { baslik: "Kurutma fırını sırasında karar eşiği", metin: "Fırınlar art arda dizildiğinde aralarında kalan servis şeridi genellikle bir kişinin geçebileceği genişliktedir. Bu şerit standart bir makaslının şase enini geçmiyorsa örümcek platform tek seçenek hâline gelir; geçiyorsa montaj-söküm süresi gereksiz bir kalemdir. Karar, şeridin en dar noktasında ölçülen rakama göre verilir, tahmine göre değil." },
            { baslik: "Hat üstü galeri ve konveyör altı boşluk", metin: "Talaş taşıma konveyörü ile aspirasyon galerisi genellikle tavana yakın, sabit bir yürüme yolu olmayan bir yükseklikte seyreder. Buradaki karar eşiği hat altı geçiş yüksekliğidir: ayakların açılabileceği taban genişliği yeterliyse örümcek platform hattın altına girip sepet konveyör hizasına yükselir; yetersizse alternatif erişim yöntemi (sabit iskele, hattın kısmi sökümü) saha yetkilisiyle konuşulur." },
            { baslik: "Sonradan açılmış bölme kapıları", metin: "Genişleyen atölyelerde bölme kapıları çoğunlukla sonradan, mevcut ekipmanın ölçüsüne göre değil anlık ihtiyaca göre açılmıştır. Bu kapılar standart bir platformun şasesinden dar çıkabilir. Örümcek platform katlanarak bu kapıdan geçirilebilir, ama montaj alanının tavan yüksekliği de ayrıca ölçülmelidir — kapı geçse bile tavan yetmezse makine hedef noktada yeniden açılamaz." },
            { baslik: "Talaş ortamında ek hazırlık adımı", metin: "Havada asılı talaş tozu, mafsallı ekipmanın hareketli parçalarına standart makinelere göre daha kolay nüfuz eder. Bu yüzden örümcek platform üretim alanına girmeden önce mafsal ve palet araları kontrol edilir, statik elektrik riski taşıyan bölgelerde topraklama durumu saha yönetimiyle netleştirilir. Bu hazırlık, ölçü kararından sonraki ikinci adımdır." },
        ],
        ekBolumler: [
            {
                baslik: "Ölçü eşiğine göre makine kararı",
                paragraflar: ["Tablo belirli bir tesisi anlatmaz; telefonda toplanan üç ölçünün hangi eşikte hangi kararı doğurduğunu özetler."],
                tablo: { basliklar: ["Ölçülen değer", "Eşik altında", "Eşik üstünde", "Sonuç"], satirlar: [["Geçit eni", "Standart şase enini geçmiyor", "Standart şase enini geçiyor", "Örümcek platform / standart makaslı"], ["Tavan kotu", "Montaj alanı yeterli değil", "Montaj alanı yeterli", "Alternatif erişim / doğrudan montaj"], ["Hat altı geçiş yüksekliği", "Ayak açıklığına yetmiyor", "Ayak açıklığına yetiyor", "Sabit iskele / örümcek platform"], ["Yatay mesafe", "Uzun, montaj süresi artar", "Kısa, montaj süresi sınırlı", "Süre-maliyet karşılaştırması yeniden yapılır"]] },
            },
            {
                baslik: "Ölçü toplama telefonda mı sahada mı yapılır",
                paragraflar: [
                    "Çoğu karar telefonda paylaşılan üç ölçüyle verilebilir; belirsizlik varsa bir fotoğraf veya kısa video istenir. Rakamlar net değilse makine tahmine göre yola çıkarılmaz — yanlış sınıfın sahaya gidip geri dönmesi hem zaman hem nakliye maliyeti demektir.",
                    "Büyük ölçekli veya çok noktalı işlerde (birden fazla fırın sırası, birden fazla hat) kısa bir yerinde ön kontrol önerilir; bu durumda ölçü toplama işin başlangıcına, teklif öncesine yerleştirilir.",
                ],
            },
            {
                baslik: "Enerji kesme ve iş izni sırası",
                paragraflar: [
                    "Hat üstü veya fırın yakını bir çalışma planlandığında, ilgili ekipmanın enerjisinin kesildiği ve yeniden çalıştırılmayacağı saha yetkilisince teyit edilmeden sepet hedef yüksekliğe kaldırılmaz.",
                    "Bu teyit, montaj sırasının bir parçası değil, ilk adımıdır: ölçü netleşir, makine sınıfına karar verilir, saha teslim alınır, sonra enerji kesme teyidi ile çalışma başlar.",
                ],
            },
        ],
        sss: [
            { soru: "Hangi ölçüleri telefonda paylaşmam gerekiyor?", cevap: "En dar geçidin eni, en alçak tavan noktası ve hedefe kadar yatay mesafe yeterli bir ilk değerlendirme sağlar. Bu üç rakam net olduğunda hangi makine sınıfının uygun olduğunu büyük ölçüde söyleyebiliriz; belirsizse bir fotoğraf isteriz." },
            { soru: "Ölçüyü yanlış verirsem ne olur?", cevap: "Yanlış ölçüyle yola çıkan makine sahada geçemezse geri dönmek zorunda kalır, bu hem zaman hem nakliye maliyeti demektir. Bu yüzden emin olmadığınız bir ölçüyü tahmini olarak değil, gerçekten ölçüp paylaşmanızı isteriz." },
            { soru: "Standart makaslı ile örümcek platform arasındaki karar nasıl veriliyor?", cevap: "Geçit eni standart makinenin şasesini geçiyorsa standart makaslıyı öneririz; geçmiyorsa örümcek platform tek seçenek olur. Bu net bir eşik meselesidir, tercih değil." },
            { soru: "Kurutma fırınları çalışırken makine yanında çalışabilir mi?", cevap: "Fırının o sırada çalışır durumda olup olmadığı ve güvenli mesafe işten önce netleştirilir; gerekirse çalışma fırının durdurulduğu bir pencereye kaydırılır." },
            { soru: "Talaş yoğun ortamda ek bir ücret çıkar mı?", cevap: "Hayır, ama ek bir hazırlık süresi olur: mafsal ve palet araları girişten önce kontrol edilir, topraklama durumu netleştirilir. Bu adım güvenlik için gereklidir, ekstra ücretlendirme değildir." },
            { soru: "Birden fazla fırın sırasını aynı günde gezebilir miyiz?", cevap: "Evet, ölçüler ve enerji kesme teyidi her sıra için ayrı ayrı netleştirilirse aynı gün içinde birden fazla noktaya sırayla geçilebilir; sıralama saha yetkilinizle birlikte planlanır." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun ormancılık, kereste ve mobilya sanayisiyle bilinmesi kamuya açık genel bilgidir; ölçü-eşik karar mantığı ve enerji kesme sırası firma saha pratiğidir. Tesis adı, kapasite ve rakamsal iddia içermez.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Bolu'da Kereste ve Mobilya Fabrikalarına Platform Nakliye ve Teslimat Hizmeti",
        giris:
            "Bolu'da kereste, orman ürünleri ve mobilya üretimi yapan işletmeler genellikle şehir merkezinden uzak, orman yolu veya ara yol üzerindeki sanayi bölgelerinde yer alır; bazıları ana karayoluna yakın küçük bir sanayi sitesindedir, bazıları ormana daha yakın bir üretim sahasında konuşlanmıştır. Bu çeşitlilik, platform ve vinç nakliyesini tek tip bir sevkiyat değil, her seferinde ayrıca planlanması gereken bir güzergâh problemine dönüştürür: fabrika girişinin genişliği, avlu içindeki tomruk veya kütük yığınlarının bıraktığı boşluk, kepçe ve forklift trafiğinin yoğun olduğu saatler, teslim noktasının zemin taşıma kapasitesi. Nakliye ve teslimat hizmeti, platformun doğru araçla, doğru güzergâhtan, üretim akışını kesintiye uğratmadan sahaya ulaştırılmasını kapsar. Kamyon veya çekicinin fabrika avlusunda dönebileceği alan, rampa açma noktası ve boşaltma sırasında güvenli bir çevre oluşturulması önceden konuşulur. Bu sayfada Bolu'daki kereste ve mobilya tesislerine platform teslimatının hangi adımlardan oluştuğunu, hangi bilgilerin teklif öncesinde gerekli olduğunu ve avlu içi trafiğin nasıl yönetildiğini anlatıyoruz. Belirli bir fabrika adı veya mesafe iddiası içermez.",
        maddeler: [
            { baslik: "Fabrika avlusunda boşaltma alanının önceden belirlenmesi", metin: "Kereste ve mobilya fabrikalarının avlusu çoğunlukla tomruk yığını, kesilmiş kereste istifi veya bitmiş ürün paletiyle doludur; boş görünen bir alan bile forklift geçiş güzergâhı olabilir. Teslimat öncesinde platformun indirileceği nokta, kamyonun dönüş yarıçapı ve rampa açma mesafesi saha yetkilisiyle birlikte netleştirilir. Belirsiz bir avluda kamyon rastgele bir noktaya yönlendirilmez; gerekirse fotoğraf üzerinden ön değerlendirme yapılır." },
            { baslik: "Orman yolu ve ara yol bağlantılı tesislere erişim", metin: "Bazı kereste işleme tesisleri ana karayolundan ayrılan, dar ve virajlı bir ara yolla erişilir. Bu güzergâhta ağaç dallarının yol üstüne sarkması, dar köprü geçişi veya mevsimsel yüzey bozulması taşıma aracının sınıfını etkiler. Güzergâh, teslimattan önce mevcut bilgi ve gerekiyorsa güncel görüntüyle değerlendirilir; büyük araç geçemiyorsa daha küçük taşıyıcı veya alternatif indirme noktası planlanır." },
            { baslik: "Üretim saatleri ile teslimat saatinin çakışmaması", metin: "Kereste kesim hattı veya mobilya montaj hattının en yoğun çalıştığı saatlerde ağır bir teslimat aracının avluya girmesi forklift ve iç trafik akışını kesintiye uğratabilir. Teslimat saati, mümkün olduğunda üretim programınızın görece sakin olduğu bir pencereye denk getirilir. Vardiya değişimi veya mola saatleri gibi bilgi paylaşılırsa planlama buna göre yapılır." },
            { baslik: "Tomruk ve kereste istifi çevresinde güvenli mesafe", metin: "İstiflenmiş tomruk veya kereste yığınları zamanla kayabilir; teslimat sırasında bu yığınların yakınında personel bulundurulmaz ve kamyonun manevra hattı yığınlardan güvenli mesafede tutulur. İstif düzeninde belirgin bir dengesizlik görülürse teslimat ekibi bunu saha yetkilisine bildirir ve boşaltma güvenli bir noktaya kaydırılır." },
            { baslik: "Teslim sonrası konumlandırma ve montaj hazırlığı", metin: "Platform avluya indirildikten sonra çalışacağı noktaya kendi gücüyle mi yoksa ayrıca taşınarak mı ulaşacağı önceden planlanır. Zemin taşıma kapasitesi, talaş veya kabuk artığı birikintisi ve olası çukur-eşik durumu teslimat öncesinde sorulur. Uygun zemin bilgisi verilmezse makine varsayılan bir güzergâhla değil, teyit edilen bir güzergâhla yönlendirilir." },
        ],
        ekBolumler: [
            {
                baslik: "Teslimat öncesi bilgi kontrol tablosu",
                paragraflar: ["Tablo belirli bir tesisi anlatmaz; kereste ve mobilya fabrikalarına teslimat öncesinde sorulan genel bilgi kalemlerini özetler."],
                tablo: { basliklar: ["Kalem", "Neden sorulur", "Belirsizse ne olur", "Sağlandığında sonuç"], satirlar: [["Avlu boşaltma noktası", "Manevra ve rampa alanı", "Fotoğrafla ön değerlendirme", "Doğrudan planlı boşaltma"], ["Ara yol/orman yolu durumu", "Araç sınıfı seçimi", "Güncel görüntü istenir", "Uygun taşıyıcı atanır"], ["Üretim yoğun saatleri", "Trafik çakışması riski", "Genel bir saat varsayılmaz", "Sakin pencereye planlama"], ["İstif ve yığın konumu", "Personel güvenliği", "Güzergâh yeniden çizilir", "Güvenli mesafeli manevra"], ["Zemin taşıma durumu", "Konumlandırma güvenliği", "Teyit istenir", "Uygun güzergâhla ilerleme"]] },
            },
            {
                baslik: "Güzergâh bilgisini teklif öncesinde toplama",
                paragraflar: [
                    "Bolu'daki kereste ve mobilya tesislerinin bir kısmı ana yol kenarındaki sanayi sitesinde, bir kısmı ormana daha yakın ara yol üzerindedir. Teklif öncesinde hangi gruba girdiğiniz, avlu genişliği ve varsa dar geçiş noktaları sorulur; bu bilgi taşıyıcı sınıfını ve süreyi belirler.",
                    "Belirsiz bir güzergâh için varsayılan bir araç gönderilmez. Bilgi yetersizse önce fotoğraf, gerekirse yerinde ön kontrol istenir; böylece teslimat günü sahada beklenmedik bir dar noktayla karşılaşılmaz.",
                ],
            },
            {
                baslik: "Avlu içi trafik ile teslimat aracının koordinasyonu",
                paragraflar: [
                    "Kereste ve mobilya fabrikalarının avlusunda forklift, kepçe ve iç nakliye aracı sürekli hareket hâlindedir. Teslimat aracı avluya girmeden önce saha yetkilisiyle kısa bir koordinasyon yapılır; hangi güzergâhın boş tutulacağı ve hangi noktanın geçici olarak kapatılacağı netleştirilir.",
                    "Koordinasyon sağlanmadan büyük araç avluya yönlendirilmez. Amaç yalnızca platformu teslim etmek değil, teslimat sırasında üretim ve iç trafik akışını mümkün olduğunca kesintisiz tutmaktır.",
                ],
            },
        ],
        sss: [
            { soru: "Fabrikamız orman yoluna yakın; büyük kamyon girebilir mi?", cevap: "Her zaman değil. Ara yolun genişliği, viraj yarıçapı ve yüzey durumu güncel bilgi veya görüntüyle değerlendirilir. Büyük araç geçemiyorsa daha küçük bir taşıyıcı veya farklı bir indirme noktası planlanır. Güzergâh bilgisini teslimattan önce netleştirmeniz süreci hızlandırır." },
            { soru: "Avlumuz tomruk yığınıyla dolu; boşaltma nereye yapılır?", cevap: "Boşaltma noktası önceden saha yetkilinizle birlikte belirlenir; boş görünen bir alan bile forklift güzergâhı olabilir. İstenirse fotoğraf üzerinden ön değerlendirme yapılır ve kamyonun dönüş yarıçapı ile rampa alanı buna göre planlanır." },
            { soru: "Üretim saatlerinde teslimat yapılabilir mi?", cevap: "Yapılabilir, ancak yoğun saatte forklift ve iç trafik akışı kesintiye uğrayabilir. Mümkünse teslimat saatini üretim programınızın görece sakin olduğu bir pencereye denk getirmenizi öneririz; vardiya bilgisini paylaşırsanız planı ona göre kurarız." },
            { soru: "İstiflenmiş kereste yığınları teslimat sırasında risk oluşturur mu?", cevap: "Dengesiz görünen bir istif riskli kabul edilir; kamyonun manevra hattı bu yığınlardan güvenli mesafede tutulur ve yakınında personel bulundurulmaz. Belirgin bir dengesizlik görülürse boşaltma noktası saha yetkilinizle birlikte değiştirilir." },
            { soru: "Zemin taşıma kapasitesini nasıl belirliyorsunuz?", cevap: "Zemin bilgisi teslimat öncesinde sizden sorulur; talaş veya kabuk artığı birikintisi ile olası çukur-eşik durumu netleştirilir. Bilgi verilmezse varsayılan bir güzergâh kullanılmaz; teyit edilene kadar konumlandırma bekletilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Fabrika girişinin ve avlunun genişliğini, varsa dar ara yol veya orman yolu bağlantısını, üretim yoğun saatlerinizi ve istif/yığın konumunu paylaşın. Belirli bir tesis adı veya mesafe varsaymayız; sağladığınız bilgiyle güzergâh ve araç sınıfı netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'daki kereste ve mobilya tesislerinin şehir merkezi dışında, orman yolu veya ara yol bağlantılı sanayi bölgelerinde yer alması kamuya açık genel bilgidir; avlu koordinasyonu ve güzergâh değerlendirmesi firma saha pratiğidir. Tesis adı ve mesafe iddiası içermez.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Bolu'da Kereste ve Tomruk Deposu İçin Forklift ve İstifleme Kiralama",
        giris:
            "Kereste ve orman ürünleri işletmelerinde malzeme akışı, tomruğun sahaya girişinden kesilmiş kerestenin istiflenmesine, kurutulmuş malzemenin üretim hattına taşınmasına kadar sürekli bir yük hareketi gerektirir. Bu hareket standart bir palet forkliftiyle her zaman güvenli biçimde yönetilemez; tomruk çapı ve uzunluğu düzensizdir, kereste istifleri zamanla yükselir, kabuk ve talaş artığı zemin yüzeyini değiştirir. Forklift ve istifleme kiralama hizmeti, malzemenin türüne ve depolama biçimine uygun kapasite ve ataşmanla donatılmış makinenin doğru bir istifleme planıyla sahaya konumlandırılmasını kapsar. Tomruk yükleme için uzun çatal veya kütük kıskacı, kesilmiş kereste paketleri için standart çatal genişliği, yükseklik ve istif sırası önceden değerlendirilir. Bu sayfada Bolu'daki kereste ve tomruk depolarında forklift seçiminin hangi kriterlere göre yapıldığını, istif güvenliğinin nasıl sağlandığını ve zemin koşullarının kararı nasıl etkilediğini anlatıyoruz. Belirli bir tesis adı veya kapasite rakamı içermez.",
        maddeler: [
            { baslik: "Tomruk yükleme için ataşman seçimi", metin: "Standart çatallı bir forklift, düzensiz çaplı ve uzun tomrukları güvenli biçimde taşımak için genellikle yetersizdir. Kütük kıskacı veya uzatılmış çatal gibi ataşmanlar tomruğun kayma riskini azaltır. Ataşman seçimi tomruğun ortalama uzunluğu, çap aralığı ve yükleme yönü bilgisiyle yapılır; bu bilgi verilmeden standart bir makine varsayılmaz." },
            { baslik: "Kereste paketlerinin istif yüksekliği ve dengesi", metin: "Kesilmiş ve paketlenmiş kereste istifleri zamanla yükselir; üst sıralara çıkıldıkça forkliftin görüş açısı ve denge payı azalır. İstif yüksekliği makinenin kaldırma sınırının içinde tutulur, üst sıraya erişim gerekiyorsa forkliftin görüş açısını destekleyecek gözcü veya ayna düzeni değerlendirilir. Paketler arasında düzensiz bir sarkma veya kayma görülürse istif önce düzeltilir, sonra üstüne yeni yük eklenmez." },
            { baslik: "Talaş ve kabuk artığı ile zemin durumu", metin: "Tomruk ve kereste depolarının zemini, kabuk soyma ve kesim artıklarıyla zamanla değişken bir yüzeye dönüşebilir; gevşek kabuk birikintisi tekerlek tutunmasını azaltabilir. Yoğun birikinti görülen alanlarda forklift güzergâhı değiştirilir veya alan önceden temizlenir. Islak havada kabuk artığı ayrıca kayganlaşabileceğinden bu bölgelerde hız ve manevra sınırlandırılır." },
            { baslik: "Kurutma öncesi ve sonrası malzeme ayrımı", metin: "Kurutulmamış tomruk ile kurutma fırınından çıkmış kereste genellikle farklı ağırlık ve nem oranına sahiptir; aynı istif planında karıştırılmaları hem forklift kapasite hesabını hem de istif dengesini etkiler. İki grup ayrı alanlarda depolanır ve forklift operatörüne hangi grubun taşınacağı önceden bildirilir." },
            { baslik: "Standart palet forkliftine göre karar noktası", metin: "Her kereste deposu özel ataşman gerektirmez; malzeme standart palet veya küçük kesme parçalarından oluşuyorsa standart bir forklift yeterli olabilir. Karar noktası nettir: tomruk veya düzensiz uzun malzeme varsa özel ataşman değerlendirilir; standart paletli yük ağırlıklıysa gereksiz maliyetten kaçınılır. Depo içeriği teklif öncesinde sorulur." },
        ],
        ekBolumler: [
            {
                baslik: "Kereste ve tomruk deposu forklift karar tablosu",
                paragraflar: ["Tablo belirli bir depoyu anlatmaz; malzeme türüne göre genel ataşman ve dikkat noktalarını özetler."],
                tablo: { basliklar: ["Malzeme türü", "Risk noktası", "Önerilen yaklaşım", "Dikkat edilecek durum"], satirlar: [["Uzun tomruk", "Kayma, düzensiz çap", "Kütük kıskacı/uzun çatal", "Yükleme yönü teyidi"], ["Kesilmiş kereste paketi", "Üst sırada denge", "Standart çatal, yükseklik sınırı", "İstif düzensizliği"], ["Talaş/kabuk zemin", "Tutunma kaybı", "Güzergâh değişimi", "Islak hava koşulu"], ["Karma nem oranı", "Ağırlık hesabı sapması", "Ayrı depolama alanı", "Operatöre önceden bildirim"], ["Standart palet yük", "Gereksiz ataşman maliyeti", "Standart forklift", "Depo içeriği teyidi"]] },
            },
            {
                baslik: "İstif planını depo düzenine göre kurmak",
                paragraflar: [
                    "Kereste deposunda istif sırası genellikle malzeme boyutuna, kurutma durumuna ve sevkiyat sırasına göre planlanır. Forklift güzergâhı bu plana uyacak biçimde önceden çizilir; her istif arasında forkliftin dönebileceği bir boşluk bırakılır.",
                    "Depo düzeni sahada zamanla değişebilir; yeni gelen tomruk veya kesim artığı güzergâhı daraltabilir. Operatör güzergâhta beklenmedik bir engel gördüğünde önce durur, güzergâhı yeniden değerlendirir; engeli aşmaya çalışmaz.",
                ],
            },
            {
                baslik: "Kabuk ve talaş artığının düzenli temizliği",
                paragraflar: [
                    "Forklift güzergâhında biriken kabuk ve talaş artığı yalnız tutunmayı değil, yükün görünürlüğünü de etkileyebilir. Yoğun kullanılan güzergâhların düzenli aralıklarla temizlenmesi önerilir; bu, saha yönetiminizin kendi bakım programının parçasıdır.",
                    "Temizlik programı yoksa ve birikinti yoğunsa forklift o bölgede geçici olarak farklı bir güzergâh kullanır. Güvenli tutunma teyit edilmeden yüklü hâlde riskli bölgeden geçilmez.",
                ],
            },
        ],
        sss: [
            { soru: "Tomruklarımız düzensiz çapta; standart çatal yeterli olur mu?", cevap: "Genellikle yeterli olmaz. Düzensiz çaplı ve uzun tomruklar kütük kıskacı veya uzatılmış çatal gibi ataşmanla daha güvenli taşınır. Ortalama uzunluk, çap aralığı ve yükleme yönünü bildirirseniz uygun ataşmanı öneririz." },
            { soru: "Kereste istifimiz yükseldikçe forklift görüşü yeterli oluyor mu?", cevap: "Üst sıralara çıkıldıkça görüş açısı ve denge payı azalır; istif yüksekliği makinenin kaldırma sınırı içinde tutulur. Üst sıraya düzenli erişim gerekiyorsa gözcü veya ayna desteği değerlendirilir; düzensiz sarkma gösteren bir istifin üstüne yeni yük eklenmez." },
            { soru: "Depo zeminimizde kabuk ve talaş birikintisi var; sorun olur mu?", cevap: "Yoğun birikinti tekerlek tutunmasını azaltabilir, ıslak havada daha da kayganlaşabilir. Bu bölgelerde güzergâh değiştirilir veya önceden temizlenmesi istenir; birikinti durumunu teklif öncesinde paylaşmanız planlamayı kolaylaştırır." },
            { soru: "Kurutulmuş ve kurutulmamış malzemeyi aynı forkliftle mi taşıyorsunuz?", cevap: "Aynı makine kullanılabilir ama iki grup ayrı alanlarda depolanmalı ve operatöre hangi grubun taşınacağı önceden bildirilmelidir; çünkü ağırlık ve nem farkı kapasite hesabını ve istif dengesini etkiler." },
            { soru: "Her depo için özel ataşman gerekir mi?", cevap: "Hayır. Malzemeniz standart palet veya küçük kesme parçalarından oluşuyorsa standart bir forklift yeterli olabilir. Özel ataşman yalnızca uzun tomruk veya düzensiz malzeme varsa değerlendirilir; depo içeriğinizi paylaşırsanız gereksiz maliyetten kaçınırız." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Malzeme türünü (tomruk/kereste paketi), ortalama boyut ve ağırlık aralığını, istif yüksekliğini, zemin durumunu ve kurutulmuş-kurutulmamış ayrımı olup olmadığını paylaşın. Belirli bir depo veya kapasite varsaymayız; sağladığınız bilgiyle ataşman ve makine sınıfı netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun kereste ve orman ürünleri sanayisiyle bilinmesi kamuya açık genel bilgidir; ataşman seçimi, istif dengesi ve zemin değerlendirmesi firma saha pratiğidir. Tesis adı ve kapasite rakamı içermez.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Bolu'da Mobilya Lojistik Deposu Yüksek Raf ve Çatı Hattı İçin Eklemli Platform (Boom) Kiralama",
        giris:
            "Bolu'daki mobilya üreticilerinin lojistik depoları, bitmiş ürünün sevkiyata hazırlanana kadar yüksek raf sistemlerinde bekletildiği geniş hacimli alanlardır. Bu depolarda çatı çelik konstrüksiyonu, üst raf aydınlatması, yangın algılama hattı ve çatı aspirasyon bacası gibi unsurlar zemin seviyesinden erişilemeyecek yükseklikte kalır; raf koridorları ise dar ve dolu olduğundan makaslı bir platform her zaman istenen noktaya kadar ilerleyemez. Eklemli platform (boom), mafsallı kolu sayesinde raf üstünden aşarak veya yan taraftan dolanarak hedefe ulaşabilir; bu, hem raf düzenini bozmadan hem de doğrudan dikey bir erişimin mümkün olmadığı noktalarda çalışmayı sağlar. Bu sayfada Bolu'daki mobilya lojistik depolarında boom platformun hangi durumlarda tercih edildiğini, raf koridoru ve çatı hattı çalışmalarında nelere dikkat edildiğini anlatıyoruz. Belirli bir depo adı veya raf kapasitesi iddiası içermez; anlatılan yaklaşım genel saha pratiğidir.",
        maddeler: [
            { baslik: "Raf üstünden aşarak erişim", metin: "Yüksek raf sistemlerinin üst kademesindeki aydınlatma veya sensör bakımı, raf önünden dikey bir makaslı platformla değil, mafsallı kolun raf üstünden aşarak hedefe ulaşmasıyla yapılabilir. Bu durumda raf üstündeki ürünlerin konumu ve yüksekliği önceden bilinmelidir; kolun geçiş güzergâhında ürüne temas riski varsa güzergâh değiştirilir veya ilgili raf bölümü geçici olarak boşaltılır." },
            { baslik: "Dar raf koridorunda dönüş ve konumlandırma", metin: "Mobilya deposu raf koridorları genellikle forklift genişliğine göre tasarlanmıştır; boom platformun taban ölçüsü ve dönüş yarıçapı bu koridora göre değerlendirilir. Koridor boyunca istiflenmiş palet veya bekleyen ürün varsa güzergâh önceden netleştirilir; belirsiz bir koridorda makine rastgele ilerletilmez." },
            { baslik: "Çatı çelik konstrüksiyonu ve aspirasyon bacası bakımı", metin: "Depo çatısındaki çelik kiriş bağlantı noktaları, aspirasyon bacası veya yangın algılama hattı bakımı, zemin seviyesinden ulaşılamayacak yükseklikte kalır. Boom platform, bu noktalara raf ve ekipman engellerini aşarak ulaşabilir; erişim zarfı, çatı yüksekliği ve yatay uzanım bilgisiyle önceden hesaplanır." },
            { baslik: "Yangın algılama ve sprinkler hattı üstü çalışma", metin: "Depoların üst kısmındaki sprinkler ve yangın algılama hattı üzerinde çalışma yapılacaksa ilgili hattın devre dışı bırakılıp bırakılmayacağı, güvenlik ekibinin bilgilendirilip bilgilendirilmediği önceden netleştirilir. Sepet hat üzerine dayanmaz, bağlantı elemanlarına doğrudan yaslanılmaz." },
            { baslik: "Standart makaslıya göre karar noktası", metin: "Boom platform her yükseklik işinin otomatik cevabı değildir. Erişim noktası doğrudan dikey bir yolla ulaşılabiliyorsa standart makaslı platform daha hızlı ve ekonomik olabilir. Karar noktası nettir: raf veya ekipman engeli erişimi dikey olmaktan çıkarıyorsa boom platform değerlendirilir; engel yoksa gereksiz maliyetten kaçınılır." },
        ],
        ekBolumler: [
            {
                baslik: "Mobilya lojistik deposu erişim senaryoları",
                paragraflar: ["Tablo belirli bir depoyu anlatmaz; yüksek raf ve çatı hattı çalışmalarında tekrar eden erişim türlerini özetler."],
                tablo: { basliklar: ["Senaryo", "Erişim engeli", "Kritik ölçü", "Alternatif"], satirlar: [["Raf üstü aydınlatma", "Doğrudan dikey erişim yok", "Raf yüksekliği, yatay uzanım", "Raf bölümünün boşaltılması"], ["Dar raf koridoru", "Taban ölçüsü/dönüş kısıtı", "Koridor genişliği", "Koridor dışından erişim"], ["Çatı çelik/baca bakımı", "Zeminden ulaşılamaz yükseklik", "Çatı yüksekliği, erişim zarfı", "Sabit iskele"], ["Sprinkler hattı üstü iş", "Enerji/hat devre dışı bırakma", "Hat konumu, güvenlik onayı", "Vardiya dışı çalışma"], ["Doğrudan dikey nokta", "Engel yok", "Standart yükseklik", "Standart makaslı platform"]] },
            },
            {
                baslik: "Raf düzenini bozmadan çalışma planı",
                paragraflar: [
                    "Mobilya lojistik depolarında raf düzeninin geçici olarak bozulması sevkiyat programını etkileyebilir. Bu nedenle boom platformun güzergâhı, mümkün olduğunca raf içeriğine dokunmadan planlanır; yalnızca kolun geçiş hattında gerçek bir temas riski varsa ilgili bölüm geçici olarak boşaltılır.",
                    "Raf içeriği ve güzergâh bilgisi netleşmeden çalışma başlamaz; belirsiz bir koridorda deneme amaçlı ilerleme yapılmaz.",
                ],
            },
            {
                baslik: "Çatı hattı çalışmalarında güvenlik koordinasyonu",
                paragraflar: [
                    "Çatı çelik konstrüksiyonu veya aspirasyon bacası üzerinde çalışma yapılacaksa saha güvenlik ekibiyle önceden koordinasyon kurulur; hangi hatların devre dışı kalacağı ve sepetin hangi noktalara yaklaşabileceği netleştirilir.",
                    "Yangın algılama veya sprinkler hattı üzerinde çalışma planlanıyorsa bu hattın durumu güvenlik ekibince teyit edilmeden sepet o bölgeye yönlendirilmez.",
                ],
            },
        ],
        sss: [
            { soru: "Yüksek rafımızın üstündeki aydınlatmaya nasıl erişilir?", cevap: "Boom platformun mafsallı kolu raf üstünden aşarak hedefe ulaşabilir. Bunun için raf üstündeki ürünlerin konumu ve yüksekliği önceden bilinmelidir; temas riski varsa ilgili bölüm geçici olarak boşaltılır veya güzergâh değiştirilir." },
            { soru: "Raf koridorumuz dar; boom platform dönebilir mi?", cevap: "Taban ölçüsü ve dönüş yarıçapı koridor genişliğine göre değerlendirilir. Koridor boyunca istiflenmiş palet veya ürün varsa güzergâh önceden netleştirilir; belirsiz bir koridorda makine rastgele ilerletilmez." },
            { soru: "Çatı çelik bağlantılarına nasıl ulaşıyorsunuz?", cevap: "Zemin seviyesinden ulaşılamayan çatı yüksekliğine boom platformun yatay ve dikey erişim zarfıyla ulaşılır. Çatı yüksekliği ve engel durumu önceden hesaplanır; erişim zarfı yetersizse farklı bir konumlandırma noktası değerlendirilir." },
            { soru: "Sprinkler hattı üzerinde çalışma yapılırken hat kapatılıyor mu?", cevap: "Bu, saha güvenlik ekibinizle önceden netleştirilen bir karardır. İlgili hattın devre dışı bırakılıp bırakılmayacağı teyit edilmeden sepet o bölgeye yönlendirilmez; sepet hat üzerine dayanmaz." },
            { soru: "Her yükseklik işi için boom platform mu gerekir?", cevap: "Hayır. Erişim noktası doğrudan dikey bir yolla ulaşılabiliyorsa standart makaslı platform daha hızlı ve ekonomik olabilir. Boom platform yalnızca raf veya ekipman engeli erişimi dikey olmaktan çıkarıyorsa değerlendirilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Raf yüksekliğini, koridor genişliğini, hedefe olan yatay-dikey mesafeyi, çatı veya hat üstü çalışmaysa ilgili sistemin devre dışı bırakılıp bırakılamayacağını paylaşın. Belirli bir depo adı veya kapasite varsaymayız; sağladığınız bilgiyle erişim planı netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun mobilya sanayisiyle bilinmesi kamuya açık genel bilgidir; raf üstü erişim planı ve çatı hattı güvenlik koordinasyonu firma saha pratiğidir. Tesis adı, raf kapasitesi ve rakamsal iddia içermez.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Bolu'da Mobilya Atölyesi ve Kereste Deposu İç Mekân Platform Kiralama",
        giris:
            "Bolu'daki mobilya atölyeleri ve kereste depoları, üretim süreci boyunca genişleyerek büyümüş, kapalı hacimli yapılardır; boyahane, montaj hattı, cila bölümü ve kereste stok alanı genellikle aynı çatı altında ama farklı yükseklik ve düzenlerde yer alır. İç mekân platform kiralama, bu kapalı hacimlerde tavan aydınlatması, boya kabini havalandırma hattı, montaj hattı üstü aski sistemi veya depo raf üstü bakım gibi işler için doğru sınıfta bir platformun güvenli biçimde konumlandırılmasını kapsar. Kapalı bir mobilya atölyesinde toz, boya buharı ve talaş aynı anda bulunabileceğinden hem ekipman hazırlığı hem de havalandırma durumu ayrıca değerlendirilir. Bu sayfada Bolu'daki mobilya ve kereste tesislerinde iç mekân platform kullanımının hangi koşullara bağlı olduğunu, boya kabini ve montaj hattı gibi özel alanlarda nelere dikkat edildiğini anlatıyoruz. Belirli bir atölye adı veya rakamsal iddia içermez.",
        maddeler: [
            { baslik: "Boya kabini ve cila bölümü havalandırma hattı bakımı", metin: "Mobilya boyahanelerinde tavan havalandırma hattı ve filtre sistemi düzenli bakım gerektirir; bu alanlarda yanıcı boya buharı bulunabileceğinden platform girişi öncesinde havalandırmanın açık olduğu ve ortamın havalandırıldığı teyit edilir. Kıvılcım oluşturabilecek işlem, aksi belirtilmedikçe yapılmaz." },
            { baslik: "Montaj hattı üstü aski ve konveyör bakımı", metin: "Mobilya montaj hattında parça taşıma askisi veya üstten hareket eden konveyör sistemi, hat çalışırken erişilemeyecek yükseklikte kalır. Bakım için hattın durdurulduğu ve enerjisinin kesildiği saha yetkilisince teyit edilir; sepet hat elemanlarına doğrudan yaslanmaz." },
            { baslik: "Kereste deposu raf ve istif üstü erişim", metin: "Kapalı kereste depolarında raf sistemleri veya yüksek istifler arasında dar bir servis alanı bulunur. Platform bu alana girmeden önce istif yüksekliği ve düzeni kontrol edilir; dengesiz görünen bir istifin yakınında çalışma yapılmaz, önce istif düzeltilir." },
            { baslik: "Tavan aydınlatması ve çatı iç yüzeyi bakımı", metin: "Atölye tavanındaki aydınlatma armatürü veya çatı iç yüzeyindeki yalıtım kontrolü, salon içindeki makine ve iş istasyonu düzenine göre planlanır. Makinelerin arasından geçecek güzergâh önceden belirlenir; iş istasyonları çalışır durumdaysa geçiş saatleri saha yönetimiyle koordine edilir." },
            { baslik: "Toz ve boya buharı ortamında ekipman hazırlığı", metin: "Talaş tozu ve boya buharının aynı hacimde bulunabildiği atölyelerde platform, üretim alanına girmeden önce hareketli aksamı temizlenir ve topraklama koşulu değerlendirilir. Ortam havalandırma durumu yetersizse çalışma, havalandırmanın sağlandığı bir zamana ertelenir." },
        ],
        ekBolumler: [
            {
                baslik: "Mobilya ve kereste tesisi iç mekân erişim tablosu",
                paragraflar: ["Tablo belirli bir tesisi anlatmaz; boyahane, montaj hattı ve depo gibi bölümlerde tekrar eden erişim türlerini özetler."],
                tablo: { basliklar: ["Bölüm", "Erişim ihtiyacı", "Ön koşul", "Dikkat noktası"], satirlar: [["Boya kabini/cila", "Havalandırma hattı bakımı", "Havalandırma açık ve teyitli", "Kıvılcımsız çalışma"], ["Montaj hattı üstü", "Aski/konveyör bakımı", "Hat durdurma ve enerji kesme", "Hat elemanına yaslanmama"], ["Kereste raf/istif", "Raf üstü erişim", "İstif düzeni kontrolü", "Dengesiz istife yaklaşmama"], ["Tavan/çatı iç yüzeyi", "Aydınlatma, yalıtım kontrolü", "Makine arası güzergâh", "İş istasyonu koordinasyonu"], ["Genel üretim alanı", "Toz/buhar ortamı", "Ekipman temizliği, topraklama", "Havalandırma yeterliliği"]] },
            },
            {
                baslik: "Havalandırma ve tutuşma riski değerlendirmesi",
                paragraflar: [
                    "Boya buharı bulunan bölümlerde çalışma öncesinde havalandırma sisteminin çalışır durumda olduğu ve ortamın yeterince havalandırıldığı teyit edilir. Bu teyit alınmadan platform boya kabini içine yönlendirilmez.",
                    "Talaş tozu yoğun alanlarda ise statik elektrik birikimi ayrıca değerlendirilir; gerekli topraklama koşulu sağlanmadan kıvılcım oluşturabilecek herhangi bir işlem yapılmaz.",
                ],
            },
            {
                baslik: "Üretim durdurmadan planlama yaklaşımı",
                paragraflar: [
                    "Mobilya atölyesinde her bakım işi üretimi tamamen durdurmayı gerektirmez; montaj hattının bir bölümü çalışırken diğer bölümünde platform çalışması planlanabilir. Bu ayrım, hangi hattın hangi saatte devre dışı kalacağının saha yönetiminizle netleştirilmesine bağlıdır.",
                    "Belirsiz bir üretim programında platform hat çalışırken hat elemanlarına yaklaştırılmaz; önce ilgili bölümün durumu teyit edilir.",
                ],
            },
        ],
        sss: [
            { soru: "Boya kabini içinde platformla çalışmak güvenli mi?", cevap: "Havalandırma sisteminin çalışır durumda olduğu ve ortamın yeterince havalandırıldığı teyit edilmeden platform kabin içine yönlendirilmez. Kıvılcım oluşturabilecek işlem, aksi belirtilmedikçe yapılmaz. Kabin kullanım programınızı paylaşırsanız uygun bir çalışma penceresi belirleriz." },
            { soru: "Montaj hattımız çalışırken üstündeki askiye bakım yapılabilir mi?", cevap: "Hattın durdurulduğu ve enerjisinin kesildiği saha yetkilinizce teyit edilmeden sepet hat elemanlarına yaklaştırılmaz. Hattın bir bölümü çalışırken diğer bölümünde çalışma planlanabilir; bu ayrımı sizinle birlikte netleştiririz." },
            { soru: "Kereste deposundaki istifler arasında platform çalışabilir mi?", cevap: "Çalışabilir, ancak önce istif yüksekliği ve düzeni kontrol edilir. Dengesiz görünen bir istifin yakınında çalışma yapılmaz; önce istif düzeltilir, sonra platform o alana yönlendirilir." },
            { soru: "Atölye tavanındaki aydınlatmaya nasıl erişiliyorsunuz?", cevap: "Salon içindeki makine ve iş istasyonu düzenine göre bir güzergâh belirlenir. İş istasyonları çalışır durumdaysa geçiş saatleri saha yönetiminizle koordine edilir; belirsiz bir güzergâhta makine rastgele ilerletilmez." },
            { soru: "Talaş tozu yoğun atölyede platform kullanmak risk mi?", cevap: "Ek hazırlıkla kullanılabilir. Platform üretim alanına girmeden önce hareketli aksamı temizlenir, topraklama koşulu değerlendirilir. Havalandırma yetersizse çalışma, havalandırmanın sağlandığı bir zamana ertelenir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Çalışılacak bölümü (boyahane, montaj hattı, depo, tavan), tavan yüksekliğini, hattın durdurulup durdurulamayacağını ve ortamda toz/buhar bulunup bulunmadığını paylaşın. Belirli bir atölye adı veya kapasite varsaymayız; sağladığınız bilgiyle uygun sınıf ve çalışma penceresi netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun mobilya ve kereste sanayisiyle bilinmesi kamuya açık genel bilgidir; havalandırma teyidi, hat enerji kesme ve istif kontrolü firma saha pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Bolu'da Kereste ve Mobilya Üretim Holü Genişletme İçin Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Bolu'daki kereste ve mobilya işletmeleri büyüdükçe mevcut atölyeye ek bir üretim holü, yeni bir kurutma fırını bölümü veya genişletilmiş bir depo hacmi inşa etme ihtiyacı doğar. Bu tür yeni yapıların çelik konstrüksiyon montajı — kiriş birleşimi, aşık bağlantısı, cephe kaplama ve çatı örtüsü işleri — genellikle mevcut üretim durmadan, hattın hemen yanı başında yürütülür. Çelik konstrüksiyon montaj platformu, bu işlerde kaynakçı ve montaj ekibinin güvenli, dengeli ve tekrar eden bir yükseklikte çalışmasını sağlar; sepet konumu kiriş hattı boyunca adım adım ilerletilir. Yeni yapı ile mevcut üretim alanı arasındaki sınırın net çizilmesi, hem inşaat güvenliği hem de üretim sürekliliği için belirleyicidir. Bu sayfada Bolu'daki kereste ve mobilya tesislerinde yeni hol veya genişletme montajında platform kullanımının hangi adımlardan oluştuğunu, mevcut üretimin nasıl korunduğunu anlatıyoruz. Belirli bir proje adı veya metrekare iddiası içermez.",
        maddeler: [
            { baslik: "Kiriş ve aşık hattı boyunca sıralı çalışma", metin: "Çelik konstrüksiyon montajında kiriş ve aşık bağlantıları belirli bir sıra ile ilerler; platform bu sıraya paralel olarak konumlandırılır. Her bağlantı noktası için sepetin ulaşacağı yükseklik ve yatay mesafe önceden planlanır; henüz sabitlenmemiş bir elemana sepet veya personel ağırlığı aktarılmaz." },
            { baslik: "Mevcut üretim alanı ile inşaat sınırının ayrılması", metin: "Yeni hol mevcut atölyenin hemen yanında inşa ediliyorsa iki alan arasında geçici bir güvenlik sınırı oluşturulur. Platform güzergâhı bu sınırın inşaat tarafında kalır; mevcut üretim hattı çalışır durumdayken platform ve malzeme geçişi üretim alanına sarkmaz." },
            { baslik: "Çatı örtüsü ve cephe kaplama montajı", metin: "Çelik iskelet tamamlandıktan sonra çatı paneli ve cephe kaplama montajı platform üzerinden yürütülür. Panel taşıma sırasında rüzgâr etkisi ve sepet dengesi ayrıca değerlendirilir; belirlenen rüzgâr sınırının üzerinde panel taşıma işi durdurulur." },
            { baslik: "Yeni kurutma fırını veya depo bölümü temel-iskelet geçişi", metin: "Yeni bir kurutma fırını bölümü veya depo hacmi ekleniyorsa temel tamamlandıktan sonra iskelet montajı öncesinde zemin taşıma kapasitesi ve platform konumlandırma noktaları kontrol edilir. Beton henüz yeterli mukavemete ulaşmamışsa platform o bölgeye yönlendirilmez." },
            { baslik: "Kaynak ve bağlantı işlerinde sepet konumu", metin: "Kaynak işlemi sırasında sepet, kaynak noktasına sabit ve dengeli bir açıyla yaklaştırılır; kaynakçının kendi ağırlığını sepet korkuluğuna aşırı yüklemesi önlenir. Kaynak sıçraması riski taşıyan bölgelerde yanıcı malzeme uzaklaştırılır ve gerekli yangın önlemi alınır." },
        ],
        ekBolumler: [
            {
                baslik: "Yeni hol montaj aşaması ve platform kullanım tablosu",
                paragraflar: ["Tablo belirli bir projeyi anlatmaz; kereste ve mobilya tesislerinde yeni hol montajında tekrar eden aşamaları özetler."],
                tablo: { basliklar: ["Aşama", "Platform kullanımı", "Ön koşul", "Durdurma nedeni"], satirlar: [["Kiriş/aşık montajı", "Sıralı yükseklik erişimi", "Bağlantı sırası netliği", "Sabitlenmemiş eleman"], ["İnşaat-üretim sınırı", "Sınır içi güzergâh", "Geçici güvenlik sınırı", "Sınır ihlali riski"], ["Çatı/cephe kaplama", "Panel taşıma erişimi", "Rüzgâr sınırı kontrolü", "Sınır üstü rüzgâr"], ["Yeni fırın/depo temeli", "İskelet montaj erişimi", "Beton mukavemet teyidi", "Yetersiz mukavemet"], ["Kaynak/bağlantı işi", "Sabit açı erişimi", "Yangın önlemi", "Sıçrama riski"]] },
            },
            {
                baslik: "İnşaat ile üretimin aynı sahada birlikte yürümesi",
                paragraflar: [
                    "Yeni hol inşaatı sürerken mevcut üretim genellikle durmaz; bu durumda geçici bir sınır, malzeme geçiş güzergâhı ve gürültü-toz kontrolü saha yönetiminizle birlikte planlanır.",
                    "Platform ve malzeme taşıma güzergâhı bu sınırın dışına çıkmaz; üretim tarafında beklenmedik bir geçiş ihtiyacı doğarsa önce saha yetkilisiyle koordine edilir.",
                ],
            },
            {
                baslik: "Rüzgâr ve hava koşulu sınırları",
                paragraflar: [
                    "Açık alanda yürütülen çatı ve cephe montajında rüzgâr hızı düzenli izlenir; platform üreticisinin belirlediği sınırın üzerinde panel taşıma veya yüksek sepet konumlandırma işi durdurulur.",
                    "Yağış veya don koşulunda çelik yüzeyler kayganlaşabilir; bu durumda kaynak ve bağlantı işleri, yüzey kuru ve güvenli hâle gelene kadar ertelenir.",
                ],
            },
        ],
        sss: [
            { soru: "Yeni hol inşaatı sırasında mevcut üretim durmak zorunda mı?", cevap: "Genellikle hayır. Geçici bir güvenlik sınırı oluşturulur ve platform güzergâhı bu sınırın inşaat tarafında tutulur; mevcut üretim hattı sınırın diğer tarafında çalışmaya devam edebilir. Sınırın nereden geçeceğini saha yönetiminizle birlikte belirleriz." },
            { soru: "Kiriş ve aşık montajında sepet hangi sırayla ilerler?", cevap: "Bağlantı sırasına paralel olarak; her nokta için sepetin ulaşacağı yükseklik ve yatay mesafe önceden planlanır. Henüz sabitlenmemiş bir kiriş veya aşığa sepet ya da personel ağırlığı aktarılmaz." },
            { soru: "Çatı panel montajında rüzgâr bir sorun oluşturur mu?", cevap: "Evet, açık alanda panel taşıma rüzgâr etkisine duyarlıdır. Rüzgâr hızı düzenli izlenir; üreticinin belirlediği sınırın üzerinde panel taşıma işi durdurulur ve hava koşulu uygun hâle gelene kadar beklenir." },
            { soru: "Yeni kurutma fırını temeli üzerinde ne zaman çalışabiliriz?", cevap: "Beton yeterli mukavemete ulaşmadan platform o bölgeye yönlendirilmez. Temel tamamlandıktan ve mukavemet teyit edildikten sonra zemin taşıma kapasitesi kontrol edilir, ardından iskelet montajına geçilir." },
            { soru: "Kaynak işlerinde yangın riski nasıl yönetiliyor?", cevap: "Kaynak sıçraması riski taşıyan bölgelerde yanıcı malzeme önceden uzaklaştırılır ve gerekli yangın önlemi alınır. Sepet kaynak noktasına sabit ve dengeli bir açıyla yaklaştırılır; korkuluğa aşırı yük bindirilmez." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Yeni yapının mevcut üretime yakınlığını, çelik iskeletin yaklaşık yüksekliğini, montaj sırasının netliğini ve açık alanda mı kapalı alanda mı çalışılacağını paylaşın. Belirli bir proje adı veya metrekare varsaymayız; sağladığınız bilgiyle platform sınıfı ve güvenlik sınırı netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'daki kereste ve mobilya işletmelerinin büyüyerek yeni üretim holü inşa etmesi kamuya açık genel bilgidir; inşaat-üretim sınırı ayrımı ve rüzgâr sınırı uygulaması firma saha pratiğidir. Proje adı ve metrekare iddiası içermez.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Bolu'da Orman Ürünleri Talaş ve Yonga Silosu Platform Kiralama",
        giris:
            "Kereste ve mobilya üretiminin yan ürünü olan talaş, yonga ve kabuk artıkları Bolu'daki tesislerde çoğunlukla dikey silolarda toplanır; bu siloların üst kapağı, dolum ağzı ve seviye sensörü bakımı zemin seviyesinden erişilemeyecek yükseklikte kalır. Silo platform kiralama hizmeti, bu dikey yapıların çevresinde ve üstünde güvenli bakım erişimi sağlar. Talaş silosu çevresi genellikle toz birikimine açık, bazen dar bir servis alanına sahiptir; silo gövdesine yakın çalışmada düşen malzeme, statik elektrik ve sınırlı görüş gibi unsurlar ayrıca değerlendirilir. Bu sayfada Bolu'daki orman ürünleri tesislerinde talaş ve yonga silosu bakımında platform kullanımının hangi koşullara bağlı olduğunu, toz ortamı hazırlığının nasıl yapıldığını anlatıyoruz. Belirli bir tesis adı veya silo kapasitesi iddiası içermez.",
        maddeler: [
            { baslik: "Silo üst kapağı ve dolum ağzı erişimi", metin: "Talaş ve yonga silosunun üst kapağı ile dolum ağzı, silo yüksekliğine bağlı olarak zemin seviyesinden ulaşılamayacak noktada kalır. Platform bu noktaya güvenli bir açıyla yaklaştırılır; dolum işlemi devam ediyorsa çalışma, dolumun durduğu bir pencereye kaydırılır." },
            { baslik: "Seviye sensörü ve alarm sistemi bakımı", metin: "Silo dolum seviyesini izleyen sensörler genellikle silo gövdesinin üst kısmında yer alır. Bakım öncesinde sensörün besleme hattının kesildiği teyit edilir; sepet sensöre doğrudan yaslanmadan, güvenli mesafeden erişim sağlar." },
            { baslik: "Silo çevresinde dar servis alanı", metin: "Bazı tesislerde silolar art arda veya birbirine yakın dizilmiştir; aradaki servis alanı standart bir platformun rahat dönemeyeceği kadar dar olabilir. Bu durumda platform sınıfı, servis alanının genişliği ve komşu silonun konumu bilgisiyle seçilir." },
            { baslik: "Toz birikimi ve statik elektrik riski", metin: "Talaş ve yonga tozu, silo çevresinde ince bir tabaka hâlinde birikebilir; bu ortamda statik elektrik birikimi riski değerlendirilir. Gerekli topraklama koşulu sağlanmadan kıvılcım oluşturabilecek işlem yapılmaz; platform üretim alanına girmeden önce hareketli aksamı temizlenir." },
            { baslik: "Düşen malzeme ve görüş kısıtı altında çalışma", metin: "Silo dolum veya boşaltım sırasında havada asılı kalan ince malzeme görüşü azaltabilir. Aktif dolum-boşaltım sırasında sepet silo ağzına yaklaştırılmaz; çalışma, sistemin durduğu ve görüşün netleştiği bir zamana planlanır." },
        ],
        ekBolumler: [
            {
                baslik: "Talaş ve yonga silosu bakım erişim tablosu",
                paragraflar: ["Tablo belirli bir siloyu anlatmaz; orman ürünleri tesislerinde tekrar eden silo bakım senaryolarını özetler."],
                tablo: { basliklar: ["Senaryo", "Erişim ihtiyacı", "Ön koşul", "Durdurma nedeni"], satirlar: [["Üst kapak/dolum ağzı", "Dikey erişim", "Dolumun durması", "Aktif dolum"], ["Seviye sensörü", "Gövde üstü erişim", "Besleme hattı kesme teyidi", "Enerji teyidi yok"], ["Silolar arası dar alan", "Yatay konumlandırma", "Servis alanı genişliği bilgisi", "Belirsiz komşu silo"], ["Toz birikimi bölgesi", "Topraklama", "Ekipman temizliği", "Kıvılcım riski"], ["Dolum/boşaltım anı", "Görüş netliği", "Sistem durdurma", "Görüş kısıtı"]] },
            },
            {
                baslik: "Dolum programıyla bakım penceresini eşleştirmek",
                paragraflar: [
                    "Silo bakımı, dolum ve boşaltım programının en sakin olduğu bir pencerede planlanır. Tesisinizin dolum takvimini paylaşırsanız çalışma bu takvime göre önerilir; aktif dolum sırasında sepet silo ağzına yaklaştırılmaz.",
                    "Belirsiz bir dolum programında varsayılan bir saat kullanılmaz; önce saha yetkilinizle o günkü program teyit edilir.",
                ],
            },
            {
                baslik: "Toz ortamına özgü ekipman hazırlığı",
                paragraflar: [
                    "Silo çevresinde biriken ince talaş ve yonga tozu, platformun mafsallı ve paletli aksamına diğer ortamlara göre daha kolay nüfuz eder. Çalışma öncesinde bu aksam temizlenir ve kontrol edilir.",
                    "Statik elektrik birikimi riski taşıyan bölgelerde topraklama koşulu sağlanmadan kıvılcım oluşturabilecek herhangi bir işlem yapılmaz; bu koşul saha yönetiminizle birlikte netleştirilir.",
                ],
            },
        ],
        sss: [
            { soru: "Silo üst kapağına bakım için nasıl erişiyorsunuz?", cevap: "Platform silo yüksekliğine uygun bir sınıfla üst kapağa güvenli bir açıyla yaklaştırılır. Dolum işlemi devam ediyorsa çalışma dolumun durduğu bir pencereye kaydırılır; aktif dolum sırasında sepet silo ağzına yaklaştırılmaz." },
            { soru: "Seviye sensörü bakımında enerji kesiliyor mu?", cevap: "Bakım öncesinde sensörün besleme hattının kesildiği saha yetkilinizce teyit edilir. Bu teyit alınmadan sepet sensöre doğrudan yaslanmaz; güvenli mesafeden erişim planlanır." },
            { soru: "Silolarımız birbirine yakın; platform aralarına girebilir mi?", cevap: "Servis alanının genişliği ve komşu silonun konumu bilgisiyle uygun platform sınıfı belirlenir. Bu bilgi verilmeden standart bir makine varsayılmaz; dar alanlarda gerekirse daha kompakt bir sınıf önerilir." },
            { soru: "Talaş tozu yoğun silo çevresinde çalışmak risk mi?", cevap: "Ek hazırlıkla çalışılabilir. Platform üretim alanına girmeden önce hareketli aksamı temizlenir, topraklama koşulu değerlendirilir. Koşul sağlanmadan kıvılcım oluşturabilecek işlem yapılmaz." },
            { soru: "Dolum veya boşaltım sırasında bakım yapılabilir mi?", cevap: "Hayır, aktif dolum-boşaltım sırasında havada asılı malzeme görüşü azaltabileceğinden sepet silo ağzına yaklaştırılmaz. Çalışma, sistemin durduğu ve görüşün netleştiği bir zamana planlanır." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Silo yüksekliğini, çevresindeki servis alanı genişliğini, dolum programınızı ve toz yoğunluğu durumunu paylaşın. Belirli bir tesis adı veya kapasite varsaymayız; sağladığınız bilgiyle uygun platform sınıfı ve çalışma penceresi netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'daki orman ürünleri tesislerinde talaş ve yonga silolarının bulunması kamuya açık genel bilgidir; dolum programı koordinasyonu ve toz ortamı hazırlığı firma saha pratiğidir. Tesis adı ve silo kapasitesi iddiası içermez.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Bolu'da Mobilya Montaj Hattı Aydınlatma ve Enerji Bakım Platformu Kiralama",
        giris:
            "Mobilya montaj hatlarında iş kalitesi büyük ölçüde aydınlatmaya bağlıdır; renk kontrolü, cila kalitesi ve montaj hassasiyeti yeterli ışık olmadan doğru değerlendirilemez. Bolu'daki mobilya tesislerinde hat üstü aydınlatma armatürleri, enerji dağıtım hattı ve pano bağlantıları genellikle hattın hemen üstünde, sabit bir yürüme platformu olmayan bir yükseklikte konumlanır. Enerji ve aydınlatma bakım platformu, bu armatür ve hat elemanlarına hat durdurulup enerjisi kesildikten sonra güvenli erişim sağlar. Montaj hattının kesintisiz çalışma baskısı nedeniyle bakım genellikle planlı bir duruş penceresinde, önceden belirlenen bir sırayla yürütülür. Bu sayfada Bolu'daki mobilya montaj tesislerinde aydınlatma ve enerji hattı bakımının hangi adımlardan oluştuğunu, enerji kesme disiplininin nasıl uygulandığını anlatıyoruz. Belirli bir tesis adı veya armatür sayısı iddiası içermez.",
        maddeler: [
            { baslik: "Hat üstü armatür değişimi ve temizliği", metin: "Montaj hattı üzerindeki aydınlatma armatürleri zamanla toz ve talaş birikintisiyle ışık verimini kaybedebilir. Değişim veya temizlik öncesinde ilgili hattın enerjisinin kesildiği teyit edilir; sepet armatüre doğrudan yaslanmadan güvenli mesafeden erişim sağlar." },
            { baslik: "Enerji dağıtım hattı ve pano bağlantı kontrolü", metin: "Hat üstünde seyreden enerji dağıtım kablosu ve ara pano bağlantıları düzenli görsel kontrol gerektirir. Bu kontrol sırasında ilgili devrenin etiketlenmiş ve kilitlenmiş olduğu (kilitle-etiketle uygulaması) saha elektrik sorumlusunca teyit edilir; teyit alınmadan bağlantıya dokunulmaz." },
            { baslik: "Planlı duruş penceresinde sıralı bakım", metin: "Montaj hattının planlı duruş saatleri genellikle sınırlıdır; bu pencerede birden fazla armatür veya hat noktası sıralı biçimde ele alınır. Sıra, hattın en kritik noktasından başlayarak önceden belirlenir; pencere kapanmadan tamamlanamayan işler bir sonraki plana ertelenir, acele ile enerjili çalışmaya geçilmez." },
            { baslik: "Hat elemanlarına yaslanmadan çalışma", metin: "Sepet, aydınlatma rayı veya kablo kanalı gibi hat elemanlarına ağırlık aktarmadan kendi dengesiyle konumlanır. Hat elemanının taşıma kapasitesi bilinmeden üzerine yük bindirilmez; gerekiyorsa erişim açısı değiştirilerek hedefe farklı bir yönden yaklaşılır." },
            { baslik: "Standart yükseklikte iş için karar noktası", metin: "Her aydınlatma bakımı özel bir platform gerektirmez; hat yüksekliği düşükse ve engelsiz bir erişim varsa daha küçük ve hızlı bir sınıf yeterli olabilir. Karar noktası hattın yüksekliği, engel durumu ve planlı duruş penceresinin süresine göre netleştirilir." },
        ],
        ekBolumler: [
            {
                baslik: "Montaj hattı aydınlatma ve enerji bakım tablosu",
                paragraflar: ["Tablo belirli bir hattı anlatmaz; mobilya montaj hatlarında tekrar eden aydınlatma ve enerji bakım senaryolarını özetler."],
                tablo: { basliklar: ["İş türü", "Ön koşul", "Erişim yaklaşımı", "Durdurma nedeni"], satirlar: [["Armatür değişimi/temizlik", "Hat enerjisi kesme teyidi", "Güvenli mesafeden erişim", "Enerji teyidi yok"], ["Pano/kablo kontrolü", "Kilitle-etiketle uygulaması", "Dokunmadan görsel kontrol", "Teyit eksikliği"], ["Planlı duruş bakımı", "Sıra önceden belirlenmiş", "Kritik noktadan başlama", "Pencere kapanması"], ["Hat elemanı yakını iş", "Taşıma kapasitesi bilgisi", "Dengeli, yaslanmadan erişim", "Kapasite belirsizliği"], ["Düşük yükseklik işi", "Engelsiz erişim", "Küçük/hızlı sınıf", "Engel varlığı"]] },
            },
            {
                baslik: "Kilitle-etiketle uygulamasının çalışma öncesi teyidi",
                paragraflar: [
                    "Enerji hattı üzerinde veya yakınında yapılacak her işte ilgili devrenin kilitlenip etiketlendiği saha elektrik sorumlusunca teyit edilir. Bu teyit sözlü değil, saha prosedürünüze uygun yazılı veya sistematik bir onay biçiminde alınır.",
                    "Teyit alınmadan hiçbir bağlantıya dokunulmaz, sepet devre elemanına yaklaştırılmaz. Teyit sürecinde gecikme olursa çalışma ertelenir; enerjili varsayımla ilerlenmez.",
                ],
            },
            {
                baslik: "Planlı duruş penceresini verimli kullanmak",
                paragraflar: [
                    "Montaj hattının duruş penceresi genellikle sınırlıdır; bu pencerede yapılacak işler önceden bir sıraya konur ve en kritik nokta ilk ele alınır. Pencere süresi ve iş listesi saha yönetiminizle birlikte netleştirilir.",
                    "Pencere kapanmadan tamamlanamayan bir iş varsa, hat yeniden çalıştırılmadan önce güvenli bir noktada bırakılır ve bir sonraki plana ertelenir; hattı geciktirmek pahasına acele ile enerjili çalışmaya geçilmez.",
                ],
            },
        ],
        sss: [
            { soru: "Hat üstü armatür değişimi sırasında hat durur mu?", cevap: "İlgili hattın enerjisinin kesildiği teyit edilmeden armatüre erişim sağlanmaz. Genellikle planlı bir duruş penceresinde yapılır; hat çalışırken armatüre müdahale edilmez." },
            { soru: "Pano ve kablo kontrolünde nasıl bir güvenlik prosedürü izleniyor?", cevap: "İlgili devrenin kilitlenip etiketlendiği saha elektrik sorumlunuzca teyit edilir; bu teyit alınmadan bağlantıya dokunulmaz. Kontrol genellikle dokunmadan görsel olarak yapılır." },
            { soru: "Planlı duruş penceresi kısa; tüm armatürleri bu sürede bitirebilir misiniz?", cevap: "Pencere süresine göre bir sıra önceden belirlenir ve en kritik nokta ilk ele alınır. Pencere kapanmadan tamamlanamayan işler güvenli bir noktada bırakılıp bir sonraki plana ertelenir; acele ile enerjili çalışmaya geçilmez." },
            { soru: "Sepet aydınlatma rayına yaslanabilir mi?", cevap: "Hayır. Hat elemanının taşıma kapasitesi bilinmeden üzerine yük bindirilmez; sepet kendi dengesiyle konumlanır. Gerekirse erişim açısı değiştirilerek hedefe farklı yönden yaklaşılır." },
            { soru: "Düşük yükseklikteki aydınlatma için büyük platform mu gerekir?", cevap: "Hayır. Hat yüksekliği düşük ve engelsiz bir erişim varsa daha küçük ve hızlı bir sınıf yeterli olabilir. Karar, hattın yüksekliği, engel durumu ve duruş penceresi süresine göre netleştirilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Hattın yüksekliğini, planlı duruş penceresinin süresini, kilitle-etiketle prosedürünüzün olup olmadığını ve armatür/hat noktası sayısını paylaşın. Belirli bir tesis adı veya sayısal iddia varsaymayız; sağladığınız bilgiyle uygun sınıf ve sıra netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'daki mobilya montaj hatlarının aydınlatma ve enerji bakımı gerektirmesi genel bir üretim gerçeğidir; kilitle-etiketle teyidi ve planlı duruş penceresi yaklaşımı firma saha pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Bolu'da Orman Ürünleri Sanayisinde Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Bolu'daki kereste, orman ürünleri ve mobilya işletmelerinde platform ihtiyacı, işin süresine, tekrarına ve sahanın karmaşıklığına göre değişir; kimi zaman tek seferlik ve kısa bir bakım işi için operatörsüz kiralama yeterliyken, kimi zaman kurutma fırını çevresi veya yüksek raf sistemi gibi karmaşık bir ortamda deneyimli bir operatörün makineyi yönetmesi daha güvenli olur. Operatörlü / operatörsüz platform kiralama hizmeti, bu iki seçenek arasındaki kararı işin niteliğine göre netleştirmeyi amaçlar. Operatörsüz kiralamada işletmenin kendi personeli, gerekli eğitim ve belgeye sahipse makineyi kullanır; operatörlü kiralamada ise deneyimli bir operatör hem makineyi yönetir hem de sahaya özgü riskleri (toz ortamı, dar geçiş, enerji hattı yakınlığı) değerlendirir. Bu sayfada Bolu'daki orman ürünleri sanayisinde bu kararın hangi kriterlere göre verildiğini anlatıyoruz. Belirli bir tesis adı veya operatör sayısı iddiası içermez.",
        maddeler: [
            { baslik: "İşin süresi ve tekrarına göre karar", metin: "Tek seferlik, kısa süreli ve standart bir ortamda yapılacak iş için operatörsüz kiralama genellikle yeterlidir; işletmenin kendi eğitimli personeli makineyi kullanabilir. Uzun süreli, tekrar eden veya vardiya boyunca sürecek bir iş için operatörlü kiralama, sürekli değişen saha koşullarına daha hızlı uyum sağlar." },
            { baslik: "Toz ve talaş ortamına özgü değerlendirme", metin: "Kereste ve mobilya tesislerinde talaş tozu, statik elektrik riski ve topraklama koşulu, deneyimsiz bir kullanıcı için ek bir karar yükü oluşturabilir. Bu tür ortamlarda operatörlü kiralama, riskin sahada anlık değerlendirilmesini kolaylaştırır." },
            { baslik: "Dar geçiş ve karmaşık güzergâhlarda operatör deneyimi", metin: "Kurutma fırınları arası dar şerit, raf koridoru veya orman yolu bağlantılı bir sahada güzergâh kararı sürekli değişebilir. Operatörlü kiralamada bu kararlar deneyimli bir kişi tarafından anlık verilir; operatörsüz kiralamada ise işletmenin personeli güzergâh değişikliklerini kendi değerlendirmesiyle yönetir." },
            { baslik: "Enerji hattı ve kilitle-etiketle prosedürüne aşinalık", metin: "Aydınlatma veya enerji hattı yakınında çalışma yapılacaksa kilitle-etiketle prosedürüne aşina bir operatör, teyit sürecini daha hızlı ve güvenli yönetebilir. İşletmenin kendi personeli bu prosedüre yeterince aşina değilse operatörlü kiralama önerilir." },
            { baslik: "Belgeli kullanıcı ve eğitim koşulu", metin: "Operatörsüz kiralamada makineyi kullanacak personelin geçerli eğitim belgesine sahip olması ön koşuldur; bu belge teyit edilmeden makine operatörsüz teslim edilmez. Belge durumu belirsizse operatörlü kiralama önerilir." },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü / operatörsüz karar tablosu",
                paragraflar: ["Tablo belirli bir tesisi anlatmaz; orman ürünleri sanayisinde tekrar eden karar kriterlerini özetler."],
                tablo: { basliklar: ["Kriter", "Operatörsüz uygun", "Operatörlü önerilir", "Belirleyici bilgi"], satirlar: [["İş süresi", "Kısa/tek seferlik", "Uzun/vardiya boyu", "Planlanan süre"], ["Ortam", "Standart, düşük risk", "Toz/statik riski yüksek", "Ortam tanımı"], ["Güzergâh", "Sabit, basit", "Dar/karmaşık, değişken", "Saha planı"], ["Enerji hattı yakınlığı", "Yok/uzak", "Var, kilitle-etiketle gerekli", "Hat konumu"], ["Personel belgesi", "Geçerli belge mevcut", "Belge belirsiz/yok", "Belge teyidi"]] },
            },
            {
                baslik: "Belge teyidi ve sorumluluk sınırı",
                paragraflar: [
                    "Operatörsüz kiralamada makineyi kullanacak personelin eğitim belgesi teklif aşamasında sorulur; belge teyit edilmeden makine operatörsüz teslim edilmez. Bu, hem işletmenin hem de ekibin güvenliği için ilk koşuldur.",
                    "Belge mevcut olsa da saha koşulları karmaşıksa (dar geçiş, enerji hattı yakınlığı, toz ortamı) operatörlü seçenek yine de önerilebilir; nihai karar sahanın gerçek koşuluna göre birlikte netleştirilir.",
                ],
            },
            {
                baslik: "Vardiya boyunca süren işlerde operatör sürekliliği",
                paragraflar: [
                    "Uzun süreli bir bakım programında aynı operatörün sahayı tanıması, her gün yeniden risk değerlendirmesi yapmaktan daha verimlidir. Operatörlü kiralamada mümkün olduğunda aynı operatör program boyunca sahada tutulur.",
                    "Operatör değişimi gerekiyorsa yeni operatöre saha bilgisi ve önceki gün tespit edilen riskler devredilir; sıfırdan bir değerlendirmeyle değil, birikmiş bilgiyle çalışmaya devam edilir.",
                ],
            },
        ],
        sss: [
            { soru: "Kısa süreli bir bakım işi için operatörsüz kiralama yeterli mi?", cevap: "Genellikle evet, iş standart bir ortamda ve kısa süreliyse. İşletmenizin personeli geçerli eğitim belgesine sahipse operatörsüz kiralama uygundur; belge teyit edilmeden makine operatörsüz teslim edilmez." },
            { soru: "Toz yoğun bir ortamda operatörlü kiralama şart mı?", cevap: "Zorunlu değil ama önerilir. Talaş tozu, statik elektrik riski ve topraklama koşulu deneyimsiz bir kullanıcı için ek karar yükü oluşturabilir; deneyimli bir operatör bu riski sahada daha hızlı değerlendirir." },
            { soru: "Kurutma fırınları arasındaki dar güzergâhta kim karar veriyor?", cevap: "Operatörlü kiralamada güzergâh kararını deneyimli operatör anlık verir. Operatörsüz kiralamada bu karar işletmenizin personeline aittir; güzergâh karmaşıksa operatörlü seçenek önerilir." },
            { soru: "Enerji hattı yakınında çalışacaksak hangi seçenek daha uygun?", cevap: "Kilitle-etiketle prosedürüne aşina bir operatör teyit sürecini daha hızlı yönetir. Personeliniz bu prosedüre yeterince aşina değilse operatörlü kiralamayı öneririz." },
            { soru: "Operatörsüz kiralamada belge kontrolü nasıl yapılıyor?", cevap: "Makineyi kullanacak personelin geçerli eğitim belgesi teklif aşamasında sorulur ve teyit edilir. Belge teyit edilmeden makine operatörsüz teslim edilmez; belge durumu belirsizse operatörlü kiralama önerilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "İşin süresini, ortam koşulunu (toz, enerji hattı yakınlığı), güzergâhın karmaşıklığını ve personelinizin belge durumunu paylaşın. Belirli bir tesis adı veya operatör sayısı varsaymayız; sağladığınız bilgiyle operatörlü/operatörsüz karar birlikte netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun orman ürünleri ve mobilya sanayisiyle bilinmesi kamuya açık genel bilgidir; operatörlü/operatörsüz karar kriterleri ve belge teyidi firma saha pratiğidir. Tesis adı ve operatör sayısı iddiası içermez.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Bolu'da Orman Ürünleri OSB Çok Noktalı Rota Bakım Platformu Hizmeti",
        giris:
            "Bolu'nun orman ürünleri, kereste ve mobilya sanayisine ayrılmış organize sanayi bölgesinde birden fazla işletme aynı bölgede, birbirine yakın parsellerde faaliyet gösterir. Bu işletmelerden her biri kendi bakım ihtiyacını ayrı ayrı planladığında, aynı bölgeye tek tek platform göndermek hem maliyet hem de zaman açısından verimsiz olur. Çok noktalı rota bakım platformu hizmeti, aynı OSB içindeki birden fazla işletmenin aydınlatma, çatı, cephe veya hat üstü bakım ihtiyacını tek bir güzergâh planında birleştirir; platform bir parselden diğerine geçerken günlük bir rota izler. Bu sayede her işletme ayrı bir teslimat ve montaj süresi ödemek yerine, ortak bir rota içindeki payına düşen süreyi öder. Bu sayfada Bolu OSB'sindeki orman ürünleri işletmelerinde çok noktalı rota planlamasının nasıl kurulduğunu, sıra ve zamanlamanın nasıl belirlendiğini anlatıyoruz. Belirli bir OSB adı, işletme sayısı veya güzergâh mesafesi iddiası içermez.",
        maddeler: [
            { baslik: "Bölgedeki işletmelerin ortak rotada birleştirilmesi", metin: "Aynı sanayi bölgesinde yer alan birden fazla kereste, mobilya veya orman ürünleri işletmesinin bakım ihtiyacı, coğrafi yakınlığa göre tek bir günlük rotada birleştirilir. Her işletmenin iş kapsamı önceden ayrı ayrı netleştirilir; rota sırası parsel konumuna ve iş süresine göre planlanır." },
            { baslik: "Parseller arası geçiş süresinin rotaya dahil edilmesi", metin: "OSB içindeki parseller arası mesafe kısa olsa da geçiş için gereken süre, günlük rota planına dahil edilir. Bir parseldeki iş beklenenden uzun sürerse sonraki işletmelere bu gecikme önceden bildirilir; rota katı bir saatle değil, gerçekçi bir aralıkla planlanır." },
            { baslik: "Her işletmenin kendi giriş ve güvenlik kuralı", metin: "OSB içindeki her işletmenin kendi giriş prosedürü, güvenlik ekipmanı zorunluluğu veya ziyaretçi kaydı olabilir. Rota planlanırken her durak için bu kurallar önceden sorulur; belirsiz bir kural varsayılmaz, sahaya varmadan teyit edilir." },
            { baslik: "Ortak rotanın maliyet ve zaman avantajı", metin: "Platformun bir kereste fabrikasından komşu mobilya atölyesine geçmesi, ayrı ayrı teslimat ve montaj sürecinden daha kısa sürer. Bu fark, aynı gün içinde birden fazla işletmenin bakımını birleştirdiğinde her işletmenin ödeyeceği süreye yansır." },
            { baslik: "Tek işletmelik iş için rota dışı planlama", metin: "Her iş çok noktalı rotaya uygun değildir; bölgede tek başına ihtiyaç varsa veya komşu işletmelerin programı uyuşmuyorsa standart tekli kiralama daha uygun olabilir. Karar, bölgedeki diğer işletmelerin o günkü talebine bağlıdır; talep yoksa rota zorlanmaz." },
        ],
        ekBolumler: [
            {
                baslik: "OSB çok noktalı rota planlama tablosu",
                paragraflar: ["Tablo belirli bir OSB'yi anlatmaz; orman ürünleri sanayi bölgesinde tekrar eden rota planlama unsurlarını özetler."],
                tablo: { basliklar: ["Unsur", "Neden önemli", "Belirsizse ne olur", "Netleştiğinde sonuç"], satirlar: [["İşletme sayısı ve iş kapsamı", "Rota sırası ve süresi", "Tekli plan yapılır", "Ortak rota kurulur"], ["Parseller arası geçiş süresi", "Gerçekçi zamanlama", "Katı saat varsayılmaz", "Esnek aralık planı"], ["Giriş/güvenlik kuralı", "Duraklarda gecikme riski", "Sahada teyit beklenir", "Sorunsuz geçiş"], ["Program uyumu", "Rota verimliliği", "Rota dışı planlama", "Maliyet-zaman avantajı"], ["Tek işletme talebi", "Rota gerekliliği", "Standart tekli kiralama", "Gereksiz rota zorlaması yok"]] },
            },
            {
                baslik: "Komşu işletmelerle program koordinasyonu",
                paragraflar: [
                    "Çok noktalı rota, aynı bölgedeki komşu işletmelerin bakım programlarının benzer bir zaman dilimine denk gelmesiyle anlamlı hâle gelir. Bu koordinasyon, işletmelerin kendi aralarında değil, hizmeti veren tarafın günlük rota planlamasıyla sağlanır.",
                    "Bir işletmenin programı diğerleriyle uyuşmuyorsa o işletme için ayrı bir tarih planlanır; rota zorla oluşturulmaz, her işletmenin kendi ihtiyacı önceliklidir.",
                ],
            },
            {
                baslik: "Rota içinde gecikme yönetimi",
                paragraflar: [
                    "Bir duraktaki iş beklenenden uzun sürebilir; bu durumda sonraki duraktaki işletmeye gecikme önceden bildirilir ve yeni bir tahmini saat paylaşılır. Amaç, her işletmenin kendi üretim planını buna göre ayarlayabilmesidir.",
                    "Gecikme birikirse günün rotası yeniden değerlendirilir; bazı duraklar bir sonraki güne ertelenebilir. Bu karar ilgili işletmelerle birlikte, sahada değil önceden konuşularak alınır.",
                ],
            },
        ],
        sss: [
            { soru: "Çok noktalı rota nasıl kuruluyor?", cevap: "Aynı sanayi bölgesindeki birden fazla işletmenin bakım ihtiyacı, coğrafi yakınlık ve iş süresine göre tek bir günlük rotada birleştirilir. Her işletmenin iş kapsamı önceden ayrı ayrı netleştirilir; rota sırası buna göre planlanır." },
            { soru: "Parseller arası geçiş süresi rotayı etkiler mi?", cevap: "Evet, bu süre günlük rota planına dahil edilir. Bir parseldeki iş uzarsa sonraki işletmelere gecikme önceden bildirilir; rota katı bir saatle değil, gerçekçi bir aralıkla planlanır." },
            { soru: "Her işletmenin farklı giriş kuralı varsa rota aksar mı?", cevap: "Aksamaması için her durak için giriş prosedürü, güvenlik ekipmanı ve ziyaretçi kaydı önceden sorulur ve sahaya varmadan teyit edilir. Belirsiz bir kural varsayılmaz." },
            { soru: "Ortak rota bize gerçekten maliyet avantajı sağlar mı?", cevap: "Genellikle evet; platformun komşu işletmeye geçmesi ayrı ayrı teslimat ve montaj sürecinden daha kısa sürer. Bu fark, aynı gün birden fazla işletmenin bakımı birleştiğinde her işletmenin ödeyeceği süreye yansır." },
            { soru: "Bölgede tek başımıza ihtiyacımız varsa rotaya dahil edilir miyiz?", cevap: "Komşu işletmelerin programı uyuşmuyorsa veya talep yoksa standart tekli kiralama önerilir; rota zorla oluşturulmaz. Talebinizi paylaşırsanız o gün için uygun bir komşu işletme olup olmadığına bakarız." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "İşletmenizin bulunduğu sanayi bölgesini, iş kapsamını ve tercih ettiğiniz tarih aralığını paylaşın. Belirli bir OSB adı veya işletme sayısı varsaymayız; sağladığınız bilgiyle o bölgede ortak rota kurulup kurulamayacağı netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun orman ürünleri, kereste ve mobilya sanayisine ayrılmış organize sanayi bölgesinin varlığı kamuya açık genel bilgidir; çok noktalı rota planlama ve gecikme yönetimi firma saha pratiğidir. OSB adı, işletme sayısı ve mesafe iddiası içermez.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Bolu'da Orman İçi Kesim Sahası ve Tomruk Çıkarma Yolunda Zor Zemin Platform Kiralama",
        giris:
            "Bolu'nun orman varlığına dayanan kereste sanayisinde bazı bakım ve kurulum işleri fabrika sınırlarının dışında, doğrudan orman içi kesim sahasına veya tomruk çıkarma yoluna yakın noktalarda yapılır — geçici bir vinç kurulumu, saha aydınlatması veya nakliye hattı üstü bir kontrol gibi. Bu alanların zemini fabrika avlusundan farklıdır: toprak yüzey, kesim artığı, kütük parçaları, mevsimsel yağış ve orman yolunun taşıma kapasitesi belirsizliği bir arada bulunur. Zor zemin ve arazi koşullarında platform kiralama hizmeti, bu tür sahalarda güvenli konumlandırma için zemin değerlendirmesinden makine sınıfı seçimine kadar olan süreci kapsar. Standart lastikli bir platform, kesim sahasının gevşek toprağında veya yağış sonrası yumuşayan zeminde güvenli biçimde çalışamayabilir; bu durumda arazi tipi sınıf, yüzey hazırlığı veya farklı bir konumlandırma noktası değerlendirilir. Bu sayfada Bolu'daki orman içi kesim sahalarında zor zemin kararının nasıl verildiğini anlatıyoruz. Belirli bir orman sahası, işletme veya rakım iddiası içermez.",
        maddeler: [
            { baslik: "Kesim sahası zemininin önceden değerlendirilmesi", metin: "Orman içi kesim sahasının zemini toprak yapısına, eğime ve güncel yağış durumuna göre değişir; bu bilgi sahaya makine gönderilmeden önce görüntü veya saha sorumlusundan alınan bilgiyle değerlendirilir. Zemin taşıma kapasitesi belirsizse standart bir makine varsayılmaz." },
            { baslik: "Kesim artığı ve kütük parçalarının güzergâhı etkilemesi", metin: "Kesim sonrası sahada dal, kabuk ve küçük kütük parçaları dağınık biçimde kalabilir; bu artıklar platformun güzergâhını hem fiziksel hem de zemin görünürlüğü açısından etkiler. Yoğun artık bulunan bölgede güzergâh temizlenir veya alternatif bir yol belirlenir." },
            { baslik: "Tomruk çıkarma yolunun taşıma kapasitesi", metin: "Tomruk çıkarma için kullanılan orman yolu, ağır araç trafiğiyle zamanla iz bırakabilir veya yumuşayabilir; bu yolun platform taşıyıcısını güvenle taşıyıp taşımayacağı önceden değerlendirilir. Belirsizlik varsa yerinde ön kontrol yapılır, deneme sürüşüyle geçiş denenmez." },
            { baslik: "Arazi tipi sınıfın gerçek gerekliliği", metin: "Dört çeker veya paletli bir sınıf çekiş sağlar ama her zorlu zemini otomatik olarak güvenli hâle getirmez. Zeminin derinliği, alt taşıması ve yana eğimi üretici verisiyle karşılaştırılır; arazi tipi sınıf yalnızca bu karşılaştırma sonucunda gerekli görülürse önerilir." },
            { baslik: "Mevsimsel yağış ve geri dönüş güvencesi", metin: "Yağış sonrası orman zemini hızla yumuşayabilir; bu durumda giriş sırasında uygun görünen bir güzergâh çıkışta aynı ölçüde uygun kalmayabilir. Çalışma boyunca zemin durumu yeniden değerlendirilir; koşul kötüleşirse makine güvenli çıkış planına göre hareket ettirilir." },
        ],
        ekBolumler: [
            {
                baslik: "Orman içi saha zor zemin karar tablosu",
                paragraflar: ["Tablo belirli bir orman sahasını anlatmaz; kesim sahası ve tomruk çıkarma yolunda genel bir kontrol aracıdır."],
                tablo: { basliklar: ["Kesit", "Kontrol", "Olası karar", "Durdurma nedeni"], satirlar: [["Kesim sahası zemini", "Toprak yapısı, eğim", "Arazi tipi inceleme", "Taşıma belirsiz"], ["Kesim artığı bölgesi", "Dal/kütük yoğunluğu", "Güzergâh temizliği", "Görünürlük kaybı"], ["Tomruk çıkarma yolu", "İz derinliği, yumuşama", "Yerinde ön kontrol", "Kapasite belirsiz"], ["Yağış sonrası zemin", "Nem, kayganlık", "Çalışma erteleme", "Geri dönüş riski"], ["Konumlandırma noktası", "Denge, yatay ölçü", "Kurulum onayı", "Yüzey uygun değil"]] },
            },
            {
                baslik: "Görüntülü ön keşif ve yerinde karar",
                paragraflar: [
                    "Kesim sahasına veya tomruk çıkarma yoluna makine gönderilmeden önce güncel görüntü istenir; yalnızca en sorunlu noktanın değil, güzergâhın tamamının yakın çekimi değerlendirilir. Eski görüntüler güncel yağış etkisini yansıtmaz.",
                    "Görüntüyle kesin karar verilemiyorsa yerinde kontrol yapılır. Sahada operatör farklı bir koşul görürse ön kararı uygulamak zorunda değildir; güvenli noktada durup yeni değerlendirme ister.",
                ],
            },
            {
                baslik: "Çıkış güvencesi ve saha iletişimi",
                paragraflar: [
                    "Orman içi bir sahada çalışma başlamadan önce platformun hangi yönden çıkacağı ve yol koşulunun kim tarafından izleneceği belirlenir. İletişim kapsaması sınırlı olabileceğinden alternatif bir haberleşme yöntemi de değerlendirilir.",
                    "Zemin hareketi, yağış başlangıcı veya başka bir araç geçişi güzergâhı kapatırsa makine güvenli bir noktada durdurulur; koşul netleşmeden ilerlemeye devam edilmez.",
                ],
            },
        ],
        sss: [
            { soru: "Orman içi kesim sahasında standart platform kullanılabilir mi?", cevap: "Zemin taşıma kapasitesi ve güncel yağış durumu bilinmeden kullanılmaz. Toprak yapısı, eğim ve artık yoğunluğu önceden değerlendirilir; sonuç belirsizse arazi tipi sınıf veya yerinde ön kontrol önerilir." },
            { soru: "Tomruk çıkarma yolu her mevsim aynı taşıma kapasitesine sahip mi?", cevap: "Hayır. Ağır araç trafiği ve yağış zamanla yolu yumuşatabilir veya iz bırakabilir. Bu nedenle yolun güncel durumu her seferinde ayrıca değerlendirilir; belirsizlik varsa yerinde ön kontrol yapılır." },
            { soru: "Kesim artıkları platformun güzergâhını etkiler mi?", cevap: "Evet, dal ve kütük parçaları hem fiziksel engel hem de zemin görünürlüğünü azaltan bir unsur olabilir. Yoğun artık bulunan bölgede güzergâh temizlenir veya alternatif bir yol belirlenir." },
            { soru: "Arazi tipi platform her zorlu zemini geçer mi?", cevap: "Hayır. Çekiş sağlasa da zeminin derinliği, alt taşıması ve yana eğimi üretici verisiyle karşılaştırılmadan güvenli kabul edilmez. Bu karşılaştırma sonucunda gerekli görülürse arazi tipi sınıf önerilir." },
            { soru: "Yağış sonrası zeminde çalışmaya devam edilir mi?", cevap: "Zemin durumu çalışma boyunca yeniden değerlendirilir; koşul kötüleşirse makine son ana kadar bekletilmez, güvenli çıkış planına göre hareket ettirilir. Giriş anında uygun olan bir güzergâhın çıkışta da uygun kalacağı varsayılmaz." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Kesim sahasına veya tomruk çıkarma yoluna ait güncel görüntüleri, zeminin güncel yağış durumunu ve taşıma amacınızı paylaşın. Belirli bir orman sahası veya rakım varsaymayız; bilgi yetersizse yerinde ön kontrol önerilir, ardından uygun sınıf netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun orman varlığına dayanan kereste sanayisinde kesim sahası ve tomruk çıkarma yollarının bulunması kamuya açık genel bilgidir; zemin değerlendirmesi ve çıkış güvencesi yaklaşımı firma saha pratiğidir. Orman sahası adı, işletme ve rakım iddiası içermez.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Bolu'da Makaslı Platform Kiralama: Mobilya Showroom ve Sevkiyat Alanı İşleri",
        giris:
            "Bolu'nun orman zenginliğine dayanan mobilya ve ahşap sanayisinde iş yalnızca üretim holünde bitmez; bitmiş ürün önce showroom veya satış noktasında sergilenir, sonra sevkiyat rampasından çıkar. Bu iki alan da makaslı platformun en verimli çalıştığı ortamdır, çünkü ikisinde de zemin serttir, düzdür ve engelsizdir — makaslı platformun tek gerçek koşulu budur. Showroom tavanındaki spot aydınlatma değişimi veya vitrin üstü tanıtım panosu montajı, mağaza açıkken ve müşteri geçişi sürerken yapılabilir; bunun için akülü ve sessiz bir model zorunludur, çünkü içten yanmalı bir makine hem egzoz hem gürültü nedeniyle satış alanına sokulmaz. Sevkiyat rampasında ise durum tam tersi bir yoğunluğa dayanır: yükleme kapısı üstü aydınlatma, rampa çatısı bakımı veya paketleme hattı üzerindeki konveyör aski işleri, forklift trafiğinin sürdüğü bir alanda yürütülür ve platformun konumu bu trafikle çakışmayacak biçimde planlanır. Bu sayfada Bolu'daki mobilya ve ahşap işletmelerinin showroom ve sevkiyat alanlarında makaslı platformun hangi koşullarda kullanıldığını, zemin ve trafik değerlendirmesinin nasıl yapıldığını anlatıyoruz. Belirli bir mağaza adı veya rakamsal iddia içermez.",
        maddeler: [
            {
                baslik: "Zemin sertliği ve düzlük şartı",
                metin: "Makaslı platform yalnızca sert, düz ve yeterli taşıma kapasitesine sahip bir zeminde güvenle çalışır — bu, arazi tipi makinenin aksine, tek ve değişmez koşuludur. Showroom ve sevkiyat rampasının betonu genellikle bu şartı karşılar, ama zeminde eğim, kot farkı veya taze döşenmiş bir bölüm varsa platform o noktaya yönlendirilmeden önce zemin ayrıca kontrol edilir. Kontrol yalnızca gözle yapılmaz; taze döşenmiş beton söz konusuysa dökümün üzerinden geçen süre ve üretici firmanın verdiği kürleşme süresi de sorulur, bu süre dolmadan platform o bölüme çıkarılmaz.",
            },
            {
                baslik: "Açık mağazada akülü ve sessiz model zorunluluğu",
                metin: "Showroom müşteri kabul ederken çalışma yapılacaksa makine kesinlikle akülü ve sessiz bir modelden seçilir; içten yanmalı bir platform hem egzoz kokusu hem motor gürültüsü nedeniyle satış alanına uygun değildir. Ayrıca lastik izi bırakmayan (beyaz dolgu) tekerlek tercih edilir, çünkü zemin genellikle parlak ve görünür durumdadır. Akü kapasitesi de ayrıca planlanır: showroom işleri genellikle birkaç saatlik kısa aralıklarla yapıldığından tam şarjlı bir makine yeterli olur, ancak aynı gün içinde hem showroom hem sevkiyat alanında çalışılacaksa şarj durumu iki iş arasında yeniden kontrol edilir.",
            },
            {
                baslik: "Sevkiyat rampasında forklift trafiğiyle eş zamanlı çalışma",
                metin: "Yükleme kapısı üstü veya rampa çatısı işlerinde platform, forklift ve kamyon trafiğinin sürdüğü bir alanda konumlanır. Bu nedenle çalışma öncesinde rampa trafiği geçici olarak yönlendirilir veya platformun bulunduğu şerit forklift güzergâhından ayrılır; iki hareketli aracın aynı dar koridoru paylaşması beklenmez.",
            },
            {
                baslik: "Paketleme hattı üstü konveyör ve aski bakımı",
                metin: "Bitmiş ürünün paketlendiği hatta üstten geçen konveyör veya aski sistemi bakımı, hat çalışırken değil durdurulmuş hâldeyken yapılır. Hattın enerjisinin kesildiği ve tekrar başlatılmayacağı saha yetkilisince teyit edilmeden sepet hat elemanlarına yaklaştırılmaz.",
            },
            {
                baslik: "Mağaza açık saatleri ile çalışma programının uyumu",
                metin: "Showroom işlerinde çalışma saati genellikle mağazanın müşteri yoğunluğuna göre belirlenir; yoğun saatlerde platform vitrin veya ana geçiş güzergâhına yakın konumlandırılmaz. İşletmeden mağazanın günlük yoğunluk dağılımı alınır, çalışma bu bilgiye göre planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Showroom ve sevkiyat alanı karar tablosu",
                paragraflar: ["Tablo belirli bir mağaza veya depoyu anlatmaz; mobilya ve ahşap işletmelerinin satış-sevkiyat hattında tekrar eden çalışma türlerini özetler."],
                tablo: {
                    basliklar: ["Alan", "Tipik iş", "Ön koşul", "Dikkat noktası"],
                    satirlar: [
                        ["Showroom tavanı", "Spot aydınlatma, vitrin panosu", "Akülü/sessiz model", "Müşteri geçişinden uzak"],
                        ["Showroom zemini", "Parlak/hassas yüzey", "İz bırakmayan lastik", "Yüzey çizik riski"],
                        ["Yükleme kapısı üstü", "Aydınlatma, çatı bakımı", "Trafik yönlendirme", "Forklift güzergâhı"],
                        ["Paketleme hattı üstü", "Konveyör/aski bakımı", "Hat durdurma, enerji kesme", "Hat elemanına yaslanmama"],
                        ["Rampa çatısı", "Genel bakım", "Zemin/kot kontrolü", "Kot farkı, eğim"],
                    ],
                },
            },
            {
                baslik: "Satış alanında görünürlük ve güvenlik dengesi",
                paragraflar: [
                    "Showroom içinde çalışma yapılırken platformun bulunduğu alan geçici olarak işaretlenir; müşterinin fark etmeden yaklaşabileceği bir konum tercih edilmez. Vitrin ürünlerine veya sergi düzenine temas riski varsa ilgili bölüm çalışma öncesinde saha ekibiyle birlikte kontrol edilir.",
                    "Akülü model kullanılsa da hareketli aksam ve sepet kenarı için standart uyarı şeridi bırakılır; müşteri yoğunluğu artarsa çalışma geçici olarak durdurulup daha sakin bir saate ertelenir.",
                    "Mağaza personelinin çalışma alanından habersiz kalmaması için, işe başlamadan önce vardiya sorumlusuna kısa bir bilgilendirme yapılır; bu, hem müşteri güvenliği hem de mağaza içi trafiğin doğru yönetilmesi açısından önemlidir.",
                ],
            },
            {
                baslik: "Sevkiyat rampasında güzergâh planlaması",
                paragraflar: [
                    "Rampa çevresinde platform ve forklift aynı anda çalışacaksa iki aracın güzergâhı önceden ayrılır; ortak bir dar koridor varsa geçiş sırası saha yetkilisiyle netleştirilir.",
                    "Kamyon manevra alanına yakın bir noktada çalışma yapılacaksa manevra süresince platform güvenli bir konuma çekilir; manevra tamamlanmadan çalışma alanına geri dönülmez.",
                    "Rampa üzerinde birden fazla yükleme kapısı varsa, çalışılan kapının komşu kapılardaki sevkiyat programını etkilememesi için iş, mümkün olduğunca sevkiyatın en sakin olduğu saat dilimine göre planlanır.",
                ],
            },
        ],
        sss: [
            { soru: "Mağaza açıkken makaslı platformla çalışılabilir mi?", cevap: "Evet, ancak akülü ve sessiz bir model zorunludur; içten yanmalı makine satış alanına sokulmaz. Çalışma alanı geçici olarak işaretlenir, müşteri yoğunluğu artarsa iş daha sakin bir saate ertelenir." },
            { soru: "Showroom zemininde platform iz bırakır mı?", cevap: "Standart siyah lastik iz bırakabileceğinden showroom gibi parlak zeminlerde iz bırakmayan (beyaz dolgu) lastikli model tercih edilir. Zemin ayrıca kontrol edilir; eğim veya kot farkı varsa platform o noktaya yönlendirilmeden önce değerlendirilir." },
            { soru: "Sevkiyat rampasında forklift trafiği platformu etkiler mi?", cevap: "Evet, bu yüzden çalışma öncesinde rampa trafiği geçici olarak yönlendirilir veya platformun şeridi forklift güzergâhından ayrılır. İki aracın aynı dar koridoru aynı anda paylaşması beklenmez." },
            { soru: "Paketleme hattı çalışırken üstündeki konveyöre bakım yapılabilir mi?", cevap: "Hayır, hat durdurulmadan ve enerjisi kesilmeden sepet hat elemanlarına yaklaştırılmaz. Bakım, hattın enerjisinin kesildiği saha yetkilisince teyit edildikten sonra yapılır." },
            { soru: "Her zeminde makaslı platform kullanılabilir mi?", cevap: "Hayır. Makaslı platformun tek değişmez koşulu sert, düz ve yeterli taşıma kapasitesine sahip zemindir; eğimli, toprak veya düzensiz bir zeminde kullanılmaz. Böyle bir zemin varsa arazi tipi sınıf değerlendirilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Çalışılacak alanı (showroom, rampa, paketleme hattı), zeminin tipini, mağazanın veya hattın açık/kapalı olacağı saatleri paylaşın. Belirli bir mağaza adı veya kapasite varsaymayız; sağladığınız bilgiyle uygun model ve çalışma penceresi netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'daki mobilya ve ahşap işletmelerinin showroom ve sevkiyat alanına sahip olması kamuya açık genel bilgidir; zemin/trafik değerlendirmesi ve çalışma saati planlaması firma saha pratiğidir. Mağaza adı ve rakamsal iddia içermez.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Bolu'da Manlift Kiralama: Orman Yolu Kenarı ve Açık Saha Erişim İşleri",
        giris:
            "Bolu'nun orman ürünleri sanayisinde açık sahadaki iş, showroom veya atölyeden çok farklı bir erişim sorunu getirir: hedef nokta çoğunlukla düz bir zeminin doğrudan üstünde değil, bir engelin arkasında veya yanındadır. Tomruk yığınının gölgesinde kalan bir aydınlatma direği, orman yolu kenarındaki bir elektrik hattı bağlantısı veya kereste deposu dış cephesindeki bir yükseklik noktası, doğrudan dikey bir yaklaşımla değil, mafsallı veya teleskopik kolun yana doğru uzanarak engeli aşmasıyla erişilebilir hâle gelir. Manlift bu yüzden açık sahada makaslı platformun yapamadığını yapar: offset erişim. Ama bu erişim özgürlüğü, açık havanın getirdiği iki koşulu da beraberinde taşır — zemin artık showroom betonuyla aynı garantiye sahip değildir ve rüzgâr, sepetin bulunduğu yükseklikte zeminden çok daha etkilidir. Bu yüzden Bolu'daki orman yolu kenarı ve açık depo sahası işlerinde manlift, önce zemin ve rüzgâr koşulu değerlendirilerek, sonra bom uzunluğu hedefe göre hesaplanarak devreye alınır. Bu sayfada bu değerlendirmenin nasıl yapıldığını, hangi durumda hangi şase ve bom sınıfının seçildiğini anlatıyoruz. Belirli bir saha adı veya rakım iddiası içermez.",
        maddeler: [
            {
                baslik: "Offset erişim: engelin arkasındaki veya yanındaki hedef",
                metin: "Tomruk yığını, istif edilmiş kereste veya sabit bir ekipman, hedef noktayla platform arasında doğrudan bir engel oluşturabilir. Manlift'in mafsallı veya teleskopik kolu bu engeli yanından veya üstünden aşarak hedefe ulaşır; erişim öncesinde engelin yüksekliği ve hedefe olan yatay mesafe birlikte ölçülür, yalnızca dikey yükseklik yeterli görülmez. Engelin kendisi hareketli bir yığınsa (örneğin günlük olarak büyüyen bir tomruk stoku) çalışma günü sabahında yığının güncel durumu yeniden kontrol edilir; bir önceki gün alınan ölçü aynen geçerli sayılmaz.",
            },
            {
                baslik: "Açık sahada şase seçimi: zemin garantisi yok",
                metin: "Orman yolu kenarı veya açık depo sahası, showroom betonu gibi sabit bir zemin garantisi vermez; toprak, stabilize veya çakıl yüzeyde taşıma kapasitesi güne ve yağışa göre değişebilir. Bu nedenle açık saha işlerinde arazi tipi şase (4x4 veya paletli) öncelikli değerlendirilir; standart lastik tekerlekli şase yalnızca zemin sertliği teyit edildiğinde kullanılır. Şase seçimi bir kez yapılıp sabitlenmez: iş birkaç gün sürecekse ve bu süre içinde yağış bekleniyorsa, ilk gün uygun görünen bir zeminin ilerleyen günlerde aynı taşıma kapasitesini koruyup korumayacağı da ayrıca değerlendirilir.",
            },
            {
                baslik: "Rüzgâr sınırı ve yükseklikte artan etki",
                metin: "Rüzgâr hızı zeminde hissedilenden sepetin bulunduğu yükseklikte belirgin biçimde daha fazla etkilidir; bu fark, açık orman yolu kenarında rüzgârın önünde herhangi bir bina veya perde bulunmadığında daha da artar. Üreticinin belirlediği rüzgâr sınırının üzerinde bom uzatma veya offset hareket yapılmaz; çalışma öncesinde güncel hava durumu ayrıca kontrol edilir.",
            },
            {
                baslik: "Orman yolu kenarındaki elektrik hattı yakınında mesafe kuralı",
                metin: "Orman yolu boyunca giden aydınlatma veya enerji hattı yakınında çalışma yapılacaksa hattın gerilim seviyesi ve güvenli mesafe önceden netleştirilir; bu bilgi olmadan sepet hatta yaklaştırılmaz. Hat sahibi kurumdan onay veya bilgi gerekiyorsa çalışma bu onay alınana kadar başlatılmaz.",
            },
            {
                baslik: "Bom uzunluğu ve erişim zarfı hesaplaması",
                metin: "Manlift'in ulaşabileceği nokta yalnızca dikey yükseklikle değil, taban konumundan hedefe olan yatay mesafeyle birlikte belirlenir; bu ikisinin bileşimi erişim zarfını oluşturur. Taban için uygun bir konumlandırma noktası yoksa (engebeli zemin, dar geçiş) hedefe daha yakın alternatif bir nokta aranır; zorlama ile erişim genişletilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Açık saha bom ve şase seçim tablosu",
                paragraflar: ["Tablo belirli bir sahayı anlatmaz; orman yolu kenarı ve açık depo sahasında tekrar eden erişim türlerini özetler."],
                tablo: {
                    basliklar: ["Senaryo", "Erişim türü", "Şase önceliği", "Durdurma nedeni"],
                    satirlar: [
                        ["Tomruk yığını arkası", "Offset (yana uzanım)", "Standart/arazi tipi", "Yığın dengesizliği"],
                        ["Orman yolu kenarı direk", "Offset + yükseklik", "Arazi tipi öncelikli", "Zemin belirsizliği"],
                        ["Enerji hattı yakını", "Kontrollü mesafeli erişim", "Zemine göre değişir", "Hat onayı eksik"],
                        ["Açık depo dış cephe", "Yükseklik + hafif offset", "Zemine göre değişir", "Rüzgâr sınırı üstü"],
                        ["Rüzgârlı açık alan", "Ertelenebilir", "Uygulanmaz", "Rüzgâr sınırı üstü"],
                    ],
                },
            },
            {
                baslik: "Hava durumu takibi ve çalışma penceresi",
                paragraflar: [
                    "Açık sahadaki manlift işleri, tek seferlik bir rüzgâr kontrolüyle değil, çalışma süresi boyunca sürekli takiple yürütülür; sabah uygun olan bir koşul öğleden sonra değişebilir.",
                    "Rüzgâr veya ani yağış sınırı aşarsa bom indirilir ve makine güvenli bir konuma çekilir; koşul düzelmeden çalışmaya devam edilmez.",
                    "Bolu'nun yükseklik farkı gösteren arazi yapısı nedeniyle aynı gün içinde farklı sahalarda rüzgâr koşulu belirgin biçimde değişebilir; bu yüzden birden fazla saha planlanan bir çalışmada her sahanın koşulu ayrı ayrı değerlendirilir, tek bir sabah kontrolü tüm güne genellenmez.",
                ],
            },
            {
                baslik: "Orman yolu kenarında konumlandırma ve trafik güvenliği",
                paragraflar: [
                    "Orman yolu üzerinde veya kenarında konumlanan bir manlift, yoldan geçen diğer araçlar için de bir engel oluşturabilir; bu nedenle çalışma öncesinde geçici işaretleme yapılır ve mümkünse yolun bir şeridi açık tutulur.",
                    "Taban konumu belirlenirken yolun taşıma kapasitesi de değerlendirilir; yol yeterince sağlam değilse makine yol kenarındaki daha uygun bir noktaya konumlandırılır.",
                    "Orman yolunda kesim veya nakliye trafiği aynı gün içinde artabilir; bu durumda manlift'in konumu ve işaretlemesi, günün ilerleyen saatlerindeki trafik yoğunluğuna göre yeniden gözden geçirilir.",
                ],
            },
        ],
        sss: [
            { soru: "Manlift ile makaslı platform arasındaki temel fark nedir?", cevap: "Makaslı platform yalnızca dikey yükselir ve sert-düz zemin gerektirir; manlift ise mafsallı veya teleskopik koluyla yana doğru uzanarak (offset) bir engelin arkasındaki veya yanındaki hedefe ulaşabilir. Açık sahada engel varsa manlift, doğrudan dikey erişim yeterliyse makaslı platform tercih edilir." },
            { soru: "Orman yolu kenarında her zeminde manlift kullanılabilir mi?", cevap: "Hayır. Açık saha zemini showroom betonu gibi sabit bir garanti vermez; taşıma kapasitesi güne ve yağışa göre değişir. Bu nedenle arazi tipi şase öncelikli değerlendirilir; standart şase yalnızca zemin sertliği teyit edildiğinde kullanılır." },
            { soru: "Rüzgârlı havada manlift çalışabilir mi?", cevap: "Üreticinin belirlediği rüzgâr sınırının üzerinde bom uzatma veya offset hareket yapılmaz. Rüzgâr zeminde hissedilenden yükseklikte daha etkilidir; çalışma süresince hava durumu sürekli takip edilir, sınır aşılırsa bom indirilir." },
            { soru: "Elektrik hattı yakınında çalışmaya nasıl karar veriliyor?", cevap: "Hattın gerilim seviyesi ve güvenli mesafe önceden netleştirilmeden sepet hatta yaklaştırılmaz. Hat sahibi kurumdan onay gerekiyorsa çalışma bu onay alınana kadar başlatılmaz." },
            { soru: "Manlift'in erişemeyeceği bir hedef olabilir mi?", cevap: "Evet. Erişim zarfı bom uzunluğu ve taban konumuyla sınırlıdır; uygun bir konumlandırma noktası yoksa (engebeli zemin, dar geçiş) hedefe zorlama ile erişilmez, daha yakın alternatif bir nokta veya farklı bir makine sınıfı değerlendirilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Hedefin engelin arkasında mı yanında mı olduğunu, yaklaşık yatay-dikey mesafeyi, zeminin tipini ve yakınında enerji hattı olup olmadığını paylaşın. Belirli bir saha adı veya rakım varsaymayız; sağladığınız bilgiyle uygun bom sınıfı ve şase netleştirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun orman yolu ağı ve açık depo sahalarının bulunması kamuya açık genel bilgidir; offset erişim değerlendirmesi, rüzgâr takibi ve hat mesafe kuralı firma saha pratiğidir. Saha adı, rakım ve işletme iddiası içermez.",
    },
};
