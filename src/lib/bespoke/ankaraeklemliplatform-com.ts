// ═══════════════════════════════════════════════════════════════════════════
// ankaraeklemliplatform.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Ankara, OSB sanayi tesislerinde DAR ALAN ve ENGEBELİ ZEMİNDE
// EKLEMLİ platform erişimi. Açı: eklemli makinenin dar/karmaşık saha
// uzmanlığı — zarf diyagramı, manevra, engel aşma.
//
// İlk Ankara domaini — şehir bilgisi bu dosyada ilk kez yazılıyor; yine de
// İzmir dosyalarındaki cümle kalıpları TEKRARLANMAZ.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (≥1 tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ANKARAEKLEMLIPLATFORM_COM: Record<string, BespokeIcerik> = {
    "bolge:ostim": {
        h1: "OSTİM'de Dar Alanda Eklemli Platform Kiralama",
        giris:
            "OSTİM, Türkiye'nin en yoğun küçük-orta ölçekli sanayi kümelenmesidir: binlerce atölye ve imalathane, dar parseller üzerinde, bitişik nizamda ve çok katlı sanayi yapılarında çalışır. Bu doku, platform kiralamada kendine özgü bir problemi standart hâle getirir — hedefe düz bir çıkışla ulaşmak çoğu zaman imkânsızdır. Tezgâhlar taşınamaz, ara katlar sarkar, vinç rayları geçer, komşu parsel duvarı dibine kadar makine parkı doludur. Eklemli platformun varlık nedeni tam bu tablodur: dar bir boşluğa park edip bomunu kırarak engellerin üzerinden veya arasından hedefe ulaşır. Filomuzun Ankara ayağını eklemli sınıf üzerine kurmamızın nedeni, OSTİM tipolojisinin şehrin sanayi karakterini belirlemesidir; bu sayfada o tipolojinin erişim problemlerini ve çözüm desenlerini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Zarf diyagramı: eklemli işin tek doğru pusulası",
                metin:
                    "Eklemli makine seçiminde 'kaç metre çıkıyor' sorusu tek başına yanıltıcıdır; doğru soru 'şu boşluktan park edip şu engelin üzerinden şu noktaya uzanabiliyor mu'dur ve cevabı çalışma zarfı (working envelope) diyagramı verir. Diyagram, her yükseklikte kullanılabilir yatay erişimi gösterir — maksimum yükseklik ile maksimum yanal erişim asla aynı anda kullanılamaz. OSTİM işlerinde üç ölçüyü isteriz: park boşluğunun konumu, engelin yüksekliği-derinliği ve hedefin koordinatı. Bu üçlü diyagrama işaretlenir ve makine 'umarım ulaşır' değil 'ulaştığı hesaplanmış' olarak gider.",
            },
            {
                baslik: "Dar sokak ve avlu içi park problemi",
                metin:
                    "OSTİM parsellerinin çoğunda makine, ya dar ara sokaktan ya bina önü küçük avludan çalışmak zorundadır ve park pozisyonu, erişimin yarısıdır: makinenin dönüş yarıçapı, dikey park mesafesi ve şase arkası taşma payı (tail swing) hesaba katılır. Kompakt eklemli modeller — dar şase, sıfıra yakın kuyruk taşması — bu doku için seçilmiştir. Keşif fotoğrafında yalnız hedefi değil park edilecek boşluğu da isteriz; OSTİM'de işi belirleyen çoğu zaman hedef değil boşluktur.",
            },
            {
                baslik: "Çok katlı sanayi binalarında cephe ve ara kat erişimi",
                metin:
                    "Bölgenin çok katlı iş hanları ve sanayi bloklarında tipik hedefler cephe tabelaları, kat aralarındaki klima üniteleri, yağmur inişleri ve çatı kenarı elemanlarıdır. Bu hedeflerin ortak zorluğu, önlerindeki engellerdir: zemin kat sundurmaları, yükleme rampaları, elektrik hatları. Eklemli bom, sundurmanın üzerinden kırılarak ikinci-üçüncü kat cephesine ulaşır — makaslı platformun hiç giremediği bu senaryo, OSTİM işlerimizin büyük bölümüdür. Elektrik hattı yakınında güvenli mesafe kuralı tavizsiz uygulanır.",
            },
            {
                baslik: "Atölye içinde tezgâh üstü erişim",
                metin:
                    "İmalathane içindeki hedeflerin altı neredeyse hiçbir zaman boş değildir: torna-freze hatları, pres tezgâhları, kaynak masaları. İç mekân eklemli modeller (akülü, kompakt, düşük kapalı yükseklik) atölye kapısından girer, koridorda ilerler ve tezgâhın üzerinden hedefe uzanır. Vinçli atölyelerde sepet-kanca düşey ayrımı ve vinç kilitleme uygulanır. Bu işlerde ölçü üçlüsü kapı-koridor-park boşluğudur; metraj genellikle sorun değildir çünkü atölye tavanları 4-8 metre bandındadır.",
            },
            {
                baslik: "OSTİM ritmine uygun kısa ve seri işler",
                metin:
                    "Küçük işletme yoğunluğu, iş profilini de şekillendirir: OSTİM talepleri çoğunlukla kısa (yarım gün-iki gün) ve dağınıktır. Verim, işleri coğrafi olarak birleştirmekten gelir — aynı sokak veya ada içindeki birkaç işletmenin işi tek güne toplanır, makine işletmeden işletmeye dakikalar içinde geçer ve nakliye herkese bölünür. Kooperatif ve site yönetimleri üzerinden dönemsel toplu planlama, bölgede en düşük birim maliyeti üretir; tek işletmelik acil işlerde ise merkez konumumuz aynı gün müdahaleyi mümkün kılar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSTİM erişim problemleri ve eklemli çözüm desenleri",
                paragraflar: [
                    "Bölgede en sık karşılaştığımız beş erişim problemi ve çözüm deseni aşağıdadır. Her desen, zarf diyagramı kontrolüyle doğrulanarak uygulanır.",
                ],
                tablo: {
                    basliklar: ["Problem", "Tipik yer", "Çözüm deseni", "Makine"],
                    satirlar: [
                        ["Sundurma üstü cephe erişimi", "Çok katlı sanayi bloğu", "Bom sundurma üzerinden kırılır", "Dizel/akülü eklemli 16 – 20 m"],
                        ["Tezgâh üstü tavan noktası", "Atölye içi", "Yan park + bom aşırma", "Kompakt akülü eklemli"],
                        ["Dar avludan yüksek hedef", "Bitişik nizam parsel", "Dikey bom + üst kırılım", "Eklemli 16 m+"],
                        ["Ara kat klima/tesisat", "İş hanı cephesi", "Kademeli yükseklikte yatay uzanım", "Eklemli 12 – 16 m"],
                        ["Araç geçişi korunacak sokak işi", "Ara sokak", "Tek şerit park + bariyer", "Dar şase eklemli"],
                    ],
                },
            },
            {
                baslik: "Keşif ölçü seti: üç koordinat, bir fotoğraf",
                paragraflar: [
                    "Eklemli işin keşfi, makaslıdan farklı çalışır ve dört veri ister: park boşluğunun ölçüsü ve konumu (hedefe yatay uzaklık), aşılacak engelin yüksekliği ile derinliği, hedefin yerden kotu ve tümünü gösteren bir saha fotoğrafı. Bu set, zarf diyagramına işaretlenerek makinenin ulaşıp ulaşamayacağını keşif masasında kesinleştirir — 'gelip bakalım' turu gerekmez, yanlış makine hiç yola çıkmaz.",
                    "OSTİM'in dar dokusunda bu disiplinin değeri büyüktür: yanlış makinenin manevra edemediği sokakta ikinci deneme, hem gün hem sokak trafiği maliyetidir. Ölçü setini telefonla tarif etmek yerine fotoğraf üzerinde işaretlemek, en hızlı ve en kesin yoldur.",
                ],
            },
            {
                baslik: "Bom güvenliği: eklemli sınıfın kendi kural seti",
                paragraflar: [
                    "Eklemli platformun güvenlik profili makaslıdan farklıdır ve OSTİM'in dar sahalarında bu fark kritikleşir: bom bir engele çarptığında sepet yaylanır ve operatör fırlayabilir — tam vücut kemeri ve kısa lanyard bu yüzden bom sınıfında zorunludur, kapalı alanda bile. Dar alanda çalışırken bomun kuyruk taşması (dönüşte şase arkasının savrulması) çevredeki insan ve araç için ayrı risktir; dönüş alanı bariyerlenir.",
                    "Elektrik hatları OSTİM sokaklarında alçak ve yoğundur; bom, iletken gövdesiyle hat mesafesine tabidir ve hatların enerjisiz kılınamadığı işlerde güvenli mesafe planı iş öncesi çizilir. Bu üç kural — kemer, dönüş bariyeri, hat mesafesi — operatör brifingimizin sabit maddeleridir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizin önünde sundurma var, ikinci kat cephesine ulaşmamız gerek; mümkün mü?",
                cevap:
                    "Eklemli bomla mümkün — bu, OSTİM'in en tipik işidir: makine sundurma önüne park eder, bom dikey yükselip üst eklemden kırılarak sundurmanın üzerinden cepheye uzanır. Kesinleştirmek için üç ölçü yeterli: sundurmanın yüksekliği ve derinliği, hedefin kotu, park boşluğunun hedefe uzaklığı. Bu üçlüyü zarf diyagramına işaretleyip uygun modeli seçiyoruz — fotoğrafla birlikte gönderirseniz cevap aynı gün netleşir.",
            },
            {
                soru: "Sokağımız dar, araç trafiği de kesilemez; nasıl çalışılır?",
                cevap:
                    "Tek şerit park düzeniyle: dar şaseli eklemli model sokağın bir şeridine park eder, çalışma ve dönüş alanı bariyerlenir, kalan şeritten trafik yönlendirmeyle akar. Bomun kuyruk taşması dar sokakta ayrıca yönetilir — dönüş anlarında geçiş kısa süreli durdurulur. Gerekiyorsa belediye işgaliye süreci planlamaya eklenir. Sokak ölçüsünü ve trafik durumunu keşifte netleştiriyoruz; OSTİM sokak dokusu bizim için bilinen bir çalışma alanıdır.",
            },
            {
                soru: "Tezgâhların üzerindeki vinç rayına bakım yapılacak; tezgâhları kaldırmadan olur mu?",
                cevap:
                    "Olur — kompakt iç mekân eklemlisiyle: makine atölye kapısından girer (kapı-koridor ölçüsü teyitle), tezgâh hattının yanına park eder ve bomunu tezgâhın üzerinden raya uzatır. Vinç, çalışma bölgesinde kilitlenir ve sepet-kanca düşey ayrımı korunur. Tezgâh sökümü, üretim kaybı ve hassas ayar bozulması demektir — eklemli erişim tam bu maliyeti ortadan kaldırmak için vardır. Kapı ölçüsü dar çıkarsa alternatif modeller (daha düşük kapalı yükseklik) değerlendirilir.",
            },
            {
                soru: "Bina cephesindeki tabela değişecek ama önünden elektrik hattı geçiyor; yapılabilir mi?",
                cevap:
                    "Hat mesafesi planıyla yapılabilir — veya yapılamaz; bunu keşif belirler ve açık söyleriz. Bom iletken gövdedir: hat enerjisiz kılınabiliyorsa (dağıtım şirketi süreci) iş rahat planlanır; kılınamıyorsa gerilim sınıfına göre tanımlı güvenli mesafe korunarak erişim geometrisi çizilir — bazı durumlarda hedefe farklı açıdan yaklaşmak mesafeyi sağlar. Mesafenin sağlanamadığı işi almayız; tabela için alınacak risk değildir. Hat konumunu fotoğrafta işaretleyin, geometri kontrolünü keşifte yapalım.",
            },
            {
                soru: "Aynı sokakta üç komşu işletmenin de işi var; ortak kiralama nasıl kurulur?",
                cevap:
                    "Tek gün, sıralı plan: makine sabah ilk işletmede başlar, işler kısa mesafeli geçişlerle sırayla biter ve nakliye üçe bölünür — OSTİM'de en verimli model budur. Kurulum için taleplerin 'ortak planlamaya uygun' notuyla gelmesi yeterli; sıralamayı iş sürelerine göre biz kurarız. Site yönetimi veya kooperatif üzerinden dönemsel toplu gün de planlanabilir: her mevsim bir bakım günü, sokağın tüm küçük işlerini toplar ve birim maliyeti en düşük seviyeye indirir.",
            },
            {
                soru: "Eklemli makine makaslıdan pahalı; küçük işletme için değer mi?",
                cevap:
                    "Erişim problemi varsa evet — çünkü alternatifin gerçek maliyeti gizlidir: tezgâh sökümü ve yeniden ayarı, iskele kurulum-söküm günleri veya 'ulaşamadık' diye yarım kalan iş. Eklemli, bu maliyetlerin toplamından ucuzdur. Erişim problemi yoksa (hedefin altı boş, düz çıkış yetiyor) dürüst cevap da nettir: makaslı yeterlidir ve onu öneririz. Keşifte iki senaryoyu maliyetiyle gösteriyoruz — OSTİM işletmeleri rakamla karar vermeyi sever, biz de öyle çalışırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. OSTİM'in KOBİ/atölye dokusu kamuya açık bilgidir; zarf diyagramı, kuyruk taşması ve bom güvenliği EN 280 ve üretici standartlarıdır.",
    },

    "bolge:ivedik-osb": {
        h1: "İvedik OSB'de Eklemli Platform Kiralama",
        giris:
            "İvedik OSB, OSTİM'le aynı sanayi havzasını paylaşır ama yapısal karakteri farklıdır: parseller görece büyük, yapılar daha yeni ve işletme ölçeği bir kademe yukarıdadır — atölyeden fabrikaya geçiş kuşağı denebilir. Matbaa ve ambalajdan metal işlemeye, mobilyadan gıda makinelerine uzanan üretim çeşitliliği, erişim problemlerini de çeşitlendirir: bir yanda modern hollerin yüksek tavanları, diğer yanda hâlâ dar avlular ve bitişik yapılaşmanın kısıtları. Eklemli odaklı filomuz bu geçiş kuşağında iki uçta birden çalışır — hol içinde makine parkının üzerinden erişim, dışarıda kot farklı avlulardan cephe işleri. İvedik'in Ankara çevre yoluna komşuluğu, sevkiyat ve aynı gün destek açısından en avantajlı bölgelerimizden biri olmasını sağlar.",
        maddeler: [
            {
                baslik: "Matbaa ve ambalaj hollerinde makine üstü erişim",
                metin:
                    "İvedik'in yoğun matbaa-ambalaj kümesinde tavan işlerinin engeli, taşınamaz büyük makinelerdir: ofset hatları, kesim-katlama üniteleri, laminasyon makineleri. Hat üzerindeki aydınlatma, havalandırma ve elektrik tavası işleri, hat kenarına park eden akülü eklemliyle hattın üzerinden erişilerek yapılır. Kâğıt tozunun yoğun olduğu bölümlerde çalışma öncesi zemin temizliği ve makine filtre bakımı dikkate alınır; hassas baskı makinelerinin üzerinde alet bağlama disiplini tavizsizdir — hatta düşen bir alet, silindire zarar verirse işin bedeli tabloyu aşar.",
            },
            {
                baslik: "Kot farklı parsellerde dış cephe işleri",
                metin:
                    "İvedik'in eğimli topografyasında parseller arası kot farkları yaygındır: binanın önü yol kotunda, arkası bir kat aşağıda olabilir. Cephe ve çatı kenarı işlerinde bu, erişim planını değiştirir — makinenin park kotu ile hedef kotu arasındaki fark, gereken çalışma yüksekliğine eklenir veya arka cepheye alt kottan yaklaşılarak avantaja çevrilir. Dizel 4x4 eklemli modeller, kot geçişli sahalarda ve stabilize zeminlerde bu esnekliği sağlar; park pozisyonu keşifte kot ölçüsüyle birlikte planlanır.",
            },
            {
                baslik: "Yeni nesil hollerde yüksek montaj işleri",
                metin:
                    "Bölgenin yeni yapı stoğunda 8-12 metre tavanlı holler yaygındır ve buradaki işler (vinç rayı montajı, yangın hattı, asma tavan üstü tesisat) yüksek metrajlı eklemli veya makaslı sınıfla yapılır. Eklemlinin tercih nedeni yine erişim geometrisidir: hol doluysa — üretim hattı kurulmuşsa — makaslının park edeceği boş düşey yoktur ve eklemli, koridordan hattın üzerine uzanır. Boş holde (yeni kurulum öncesi) ise makaslı ekonomiktir; iki senaryonun ayrımı keşifte netleşir ve doğru sınıf önerilir.",
            },
            {
                baslik: "Mobilya ve ahşap atölyelerinde toz-yangın hassasiyeti",
                metin:
                    "Mobilya kümesinin ahşap tozu, iki platform kuralı doğurur: elektrik aksamına toz girişinin sınırlanması (filtre bakımı sıklaştırılır) ve toz birikimli yüzeylerde kıvılcım kaynağından kaçınma — şarj noktasının konumu ve elektrik bağlantıları bu gözle seçilir. Toz emiş kanallarının kendisi de sık bir iş konusudur: kanal bakımı ve filtre ünitesi erişimi, çatı altı seviyede eklemli erişim ister. Yangın algılama hatlarının test-bakım işleri de aynı erişim profiliyle yapılır.",
            },
            {
                baslik: "Çevre yolu komşuluğunda hızlı döngü",
                metin:
                    "İvedik'in Ankara çevre yoluna bitişik konumu, operasyon hızımızın temelidir: sevkiyat kısa, aynı gün teslim çoğu zaman mümkün, arıza-ikame desteği saatler içinde. Bu hız, bölgenin iş profiline denk düşer — İvedik talepleri sık ve görece kısa sürelidir; hızlı döngü, işletmenin beklemeden çalışması demektir. OSTİM'le ortak turlarımız iki bölgenin işlerini aynı güne birleştirebilir; ada bazlı toplu planlamalarda nakliye neredeyse simgesel kalır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İvedik'te sektör-erişim-makine eşleşmesi",
                paragraflar: [
                    "Bölgenin üretim çeşitliliğine göre tipik erişim problemleri ve makine eşleşmesi aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Tipik iş", "Erişim problemi", "Makine"],
                    satirlar: [
                        ["Matbaa / ambalaj", "Hat üstü aydınlatma-tava", "Taşınamaz baskı hatları", "Akülü eklemli 12 – 16 m"],
                        ["Metal işleme", "Vinç rayı, pano üstü", "Tezgâh dizilimi + vinç", "Kompakt eklemli + kilitleme"],
                        ["Mobilya / ahşap", "Toz kanalı, yangın hattı", "Çatı altı + toz ortamı", "Eklemli, sık filtre bakımı"],
                        ["Yeni hol kurulumları", "Ray montaj, yangın hattı", "Boş/dolu hol ayrımı", "Boşta makaslı, doluda eklemli"],
                        ["Dış cephe (kot farklı)", "Cephe, çatı kenarı", "Parseller arası kot", "Dizel 4x4 eklemli"],
                    ],
                },
            },
            {
                baslik: "Boş hol / dolu hol: doğru sınıfın dürüst ayrımı",
                paragraflar: [
                    "Eklemli odaklı bir kiralama sayfasında bunu açıkça yazmak gerekir: eklemli her işin makinesi değildir. Boş holde — üretim hattı henüz kurulmamış, zemin açıksa — makaslı platform hem daha ekonomik hem daha geniş çalışma sepeti sunar ve doğru öneri odur. Eklemlinin alanı, hedefin altının dolu olduğu her senaryodur: kurulu hat, tezgâh dizilimi, sundurma, kot engeli. Keşifte bu ayrımı yapar ve gerekiyorsa 'makaslı yeter, daha ucuza gelir' deriz.",
                    "İvedik'in geçiş kuşağı karakterinde iki senaryo sık sık aynı projede buluşur: kurulum dönemi makaslıyla başlar, hat devreye girince ek işler eklemliyle sürer. Bu geçişi tek sözleşmede planlamak, iki ayrı kiralamadan ekonomiktir.",
                ],
            },
            {
                baslik: "Hassas makine üstünde çalışma protokolü",
                paragraflar: [
                    "Baskı silindirleri, CNC tezgâhları ve elektronik kontrollü üretim hatlarının üzerinde platform çalışması, düşen cisim riskini işletme maliyetine bağlar: zarar gören bir silindirin veya kontrol ünitesinin bedeli, işin bedelinin katlarıdır. Protokolümüz üç katmanlıdır — sepet aleti listelenir ve bağlanır, makine üstü koruma (branda/panel örtme) işletmeyle birlikte kurulur ve bom hareketleri hassas bölge üzerinde yavaşlatılmış modda yapılır.",
                    "Bu protokol iş süresini bir miktar uzatır ve bunu baştan söyleriz: hassas hat üzerinde 'hızlı iş', tanımı gereği yanlış iştir. İşletme tarafının katkısı, mümkünse hattın o bölümünü örtme ve çalışma penceresini üretim molalarına denk getirmedir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ofset hattımızın üzerindeki aydınlatma değişecek; hat sökülmeden olur mu?",
                cevap:
                    "Olur — akülü eklemliyle hat kenarından: makine koridora park eder, bomunu hattın üzerinden armatüre uzatır ve hat yerinden oynamaz. Hassas makine protokolü uygulanır: aletler bağlı, silindir bölgesi örtülü, bom hareketleri yavaşlatılmış modda. Çalışmayı üretim molasına veya vardiya arasına denk getirmek riski daha da düşürür. Hat üstü mesafeleri (koridor-hat-armatür) fotoğrafla paylaşın; zarf kontrolüyle modeli kesinleştirelim.",
            },
            {
                soru: "Arka cephemiz yol kotundan bir kat aşağıda; cephe işi nasıl planlanır?",
                cevap:
                    "İki seçenek hesaplanır: üst kottan çalışmak (kot farkı, gereken metraja eklenir — 10 metrelik cephe işi 14 metrelik makine ister) veya alt kota inip cepheye doğrudan yaklaşmak (standart metraj yeter ama iniş yolu ve alt zemin uygun olmalı). Hangisinin ekonomik olduğu iniş yolunun varlığına ve zemine bağlıdır; dizel 4x4 eklemli her iki senaryoda da çalışır. Kot ölçülerini ve varsa alt kot erişim yolunu keşifte netleştiriyoruz.",
            },
            {
                soru: "Ahşap atölyemizde toz emiş kanalı bakımı var; özel önlem gerekir mi?",
                cevap:
                    "Evet, iki başlıkta: makine tarafında elektrik aksamının toz koruması ve sıklaştırılmış filtre bakımı — ahşap tozu yoğun ortam için standart hazırlığımızdır; ortam tarafında toz birikimli yüzeylerde kıvılcım kaynağı yönetimi — şarj noktası ve elektrik bağlantıları bu gözle konumlandırılır. Kanal bakımının kendisi tipik eklemli işidir: çatı altı seviyeye, kanal güzergâhı boyunca kademeli erişim. Emiş sistemini işin süresince durdurmak, hem temiz çalışma hem güvenlik açısından doğru penceredir.",
            },
            {
                soru: "Yeni holümüze vinç rayı monte edilecek, hol şu an boş; eklemli mi makaslı mı?",
                cevap:
                    "Boş holde makaslı — ve bunu eklemli sayfasında açıkça söylüyoruz: zemin açıkken makaslı hem ekonomik hem montaj için daha geniş sepet alanı sunar. Eklemli, holün dolu olduğu senaryonun makinesidir. Projeniz iki fazlıysa (önce ray montajı boş holde, sonra hat kurulunca ek işler) tek sözleşmede faz geçişli plan kurarız: birinci fazda makaslı, ikinci fazda eklemli — iki ayrı kiralamadan daha ekonomik olur.",
            },
            {
                soru: "Acil bir arıza işimiz çıktı; İvedik'e ne kadar sürede gelirsiniz?",
                cevap:
                    "Çevre yolu komşuluğu sayesinde bölgenin en hızlı döngüsü buradadır: uygun makine varsa aynı gün, çoğu zaman saatler içinde sahadayız. Aciliyeti talepte belirtin ve üç bilgiyi hazır edin: hedef ve engel ölçüleri (fotoğrafla), park boşluğu, işin tipi. Bu üçlü hazırsa makine ilk seferde doğru gelir — acil işte ikinci sevkiyat, kaybedilen aciliyettir. OSTİM-İvedik ortak turlarımız günlüktür; tur saatine denk gelen acil işler beklemeden alınır.",
            },
            {
                soru: "Metraj kataloglarda farklı yazıyor; hangi rakama güvenelim?",
                cevap:
                    "Zarf diyagramına — tek rakama değil: 'çalışma yüksekliği' operatörün uzanabildiği kotu, 'platform yüksekliği' sepet tabanını gösterir (aralarında ~2 metre fark) ve 'maksimum yanal erişim' yalnızca belirli yüksekliklerde geçerlidir. Eklemli seçiminde doğru soru 'şu parktan şu engel üzerinden şu noktaya ulaşır mı'dır ve cevap diyagramda okunur. Ölçülerinizi gönderin; diyagram kontrolünü biz yapar, ulaşan modellerin listesiyle döneriz — katalog pazarlaması değil geometri konuşuruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İvedik OSB'nin sektör karışımı (matbaa, metal, mobilya) ve çevre yolu konumu kamuya açık bilgidir; boş/dolu hol ayrımı ve hassas makine protokolü firma pratiğidir.",
    },

    "bolge:sincan-osb": {
        h1: "Sincan OSB'de Eklemli Platform Kiralama",
        giris:
            "Sincan'daki ASO 1. Organize Sanayi Bölgesi, Ankara sanayisinin ağır tarafıdır: büyük parselli fabrikalar, ağır metal işleme, makine imalatı ve savunma yan sanayi tedarikçileri burada üretir. OSTİM'in dar sokak problemleri yerine Sincan'ın erişim problemleri ölçekten doğar — geniş holler ama yüksek ve dolu; büyük avlular ama kot geçişli ve stabilize zeminli; ağır vinç altyapısı ama tam da o yüzden karmaşık üst kot geometrisi. Eklemli sınıfın bu bölgedeki rolü, yüksek metrajlı modellerle tanımlanır: 20 metre bandına uzanan dizel eklemliler, çelik konstrüksiyon holleri ve dış saha yapılarının standart makinesidir. Savunma tedarik zincirindeki tesislerin güvenlik ve kayıt beklentileri, işin idari tarafını da şekillendirir.",
        maddeler: [
            {
                baslik: "Yüksek hollerde çatı makası altı işler",
                metin:
                    "Sincan'ın büyük imalat hollerinde 10-14 metre tavan yaygındır ve çatı makası altı işler (vinç yolu üstü elektrik, havalandırma santralleri, aydınlatma hatları) 14-20 metre çalışma bandı ister. Kurulu hol doluysa erişim eklemliyle koridorlardan kurulur; makine dizilimlerinin üzerinden kademeli uzanım, zarf diyagramıyla planlanır. Ağır imalatın vinç trafiği süreklidir — vinç kilitleme pencereleri üretim programıyla koordine edilir ve kısa tutulur.",
            },
            {
                baslik: "Dış sahalarda stabilize zemin ve kot geçişleri",
                metin:
                    "Büyük parsellerin dış sahaları — stok alanları, açık imalat, yükleme sahaları — çoğunlukla stabilize veya sıkıştırılmış dolgudur ve akülü modellerin düz-sert zemin şartını sağlamaz. Dizel 4x4 eklemli modeller bu sahaların makinesidir: cephe kaplama, dış aydınlatma direkleri, çatı kenarı ve silo-bunker tipi yapılar bu sınıfla yapılır. Kot geçişli sahalarda park pozisyonu, makinenin eğim sınırı ve dengeleme sistemine göre seçilir; şüpheli zeminde yük dağıtım plakası standarttır.",
            },
            {
                baslik: "Ağır imalat ortamında bom disiplini",
                metin:
                    "Çelik imalat hollerinde bom çalışması, ortamın hareketliliğiyle yönetilir: gezer vinçler, forklift trafiği, askıda yük geçişleri. Kural seti nettir — sepet-kanca düşey ayrımı, vinç operatörüyle telsiz koordinasyonu, askıda yük hattının altından bom geçirmeme ve dönüş alanının (kuyruk taşması dahil) bariyerlenmesi. Kaynak ve taşlama yapılan bölgelerin yakınında çalışırken kıvılcım düşme mesafesi plana eklenir; operatör brifingi bu maddelerle sahaya özgü yapılır.",
            },
            {
                baslik: "Savunma yan sanayi tesislerinde kayıt ve gizlilik",
                metin:
                    "Savunma tedarik zincirindeki tesislerin beklentileri, kurumsal İSG'nin üzerine güvenlik katmanı ekler: personel bildirimi ve kimlik süreci, fotoğraf-cihaz kısıtları, alan bazlı erişim izinleri ve iş kayıtlarının tesis formatında tutulması. Operatör dosyalarımız bu süreçlere hazırdır; kayıt-gizlilik kurallarına uyum, operatör brifinginin parçasıdır. Bu tesislerde ilk kayıt süreci zaman alabilir — talep, kayıt payıyla erken açılır ve sonraki işler hızlı döner.",
            },
            {
                baslik: "Büyük tesis bakım dönemleriyle senkron çalışma",
                metin:
                    "Sincan'ın büyük üreticilerinde bakım, planlı dönemler hâlinde gelir ve platform ihtiyacı bu dönemlerde çoklaşır: aynı hafta birden fazla holde, farklı metrajlarda, paralel işler. Dönem planına makine karması (yüksek eklemli + kompakt eklemli + gerekirse makaslı) ve operatör ekibiyle entegre oluruz; slot planı, hol-saat-iş detayında kurulur. Dönem dışı tekil işlerde ise Sincan'a düzenli turlarımız hızlı teslimat sağlar — batı koridoru (Sincan-Temelli hattı) sevkiyat ağımızın ana eksenlerindendir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sincan'da saha tipi ve makine eşleşmesi",
                paragraflar: [
                    "Bölgenin ağır sanayi profilinde tipik saha tipleri ve eklemli sınıf eşleşmesi aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Saha", "Tipik iş", "Zemin/ortam", "Makine"],
                    satirlar: [
                        ["Yüksek imalat holü", "Çatı makası altı elektrik-tesisat", "Beton, vinç trafiği", "Eklemli 16 – 20 m + kilitleme"],
                        ["Dış stok/imalat sahası", "Cephe, aydınlatma direği", "Stabilize, kot geçişli", "Dizel 4x4 eklemli"],
                        ["Kurulu üretim hattı üstü", "Aydınlatma, tava, boru", "Dolu hol", "Akülü eklemli 12 – 16 m"],
                        ["Savunma tedarikçi tesisi", "Genel bakım", "Kayıt-gizlilik katmanı", "Profil uygun operatörle"],
                        ["Bakım dönemi (çoklu hol)", "Paralel işler", "Slot planı", "Makine karması + ekip"],
                    ],
                },
            },
            {
                baslik: "Yüksek metrajda rüzgâr ve dengeleme",
                paragraflar: [
                    "20 metre bandındaki dış saha işlerinde iki fizik gerçeği planı yönetir. Rüzgâr: bom yükseldikçe maruziyet artar ve Ankara'nın açık batı platosunda öğleden sonra rüzgârlanması bilinen desendir — yüksek işler sabah bloklarına planlanır, sepette ölçümle çalışılır ve limitte durulur. Dengeleme: eğimli-stabilize zeminde makinenin şasi dengeleme sistemi ve eğim sınırı, park pozisyonunu belirler; sınır dışı eğimde çalışmayı makine zaten kilitler ama doğru park, kilitlenmeye gelmeden planlanandır.",
                    "Bu iki gerçek, yüksek dış saha işlerinin süre tahminine pay ekler: 'iki günlük iş' rüzgârlı haftada üç güne uzayabilir ve bunu baştan söyleriz — takvim dürüstlüğü, bu sınıfın çalışma standardıdır.",
                ],
            },
            {
                baslik: "Çoklu hol bakım dönemlerinde ekip modeli",
                paragraflar: [
                    "Büyük tesislerin bakım dönemlerinde tek makine-tek operatör modeli yetersiz kalır; dönem, ekip modeliyle planlanır: iş listesi hollere ve metrajlara ayrılır, makine karması buna göre kurulur (tipik: bir yüksek dizel eklemli + bir-iki akülü kompakt), operatör ekibi slot planına atanır ve günlük kapanış turuyla ertesi günün slotları teyit edilir. Vinç kilitleme pencereleri ve enerji kesintileri, tesisin bakım koordinasyonuyla tek takvimde birleşir.",
                    "Bu model, dönem kapasitesinin erken bağlanmasını gerektirir — büyük tesislerin bakım takvimleri belli olduğunda görüşmeyi başlatmak, dönem haftasında ekipsiz kalmamanın tek yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "14 metre tavanlı holümüzde çatı makası altına erişim gerekiyor; hangi makine?",
                cevap:
                    "Hol doluysa 16-20 metre bandında eklemli: koridordan park edip makine dizilimlerinin üzerinden kademeli uzanımla makas altına ulaşır — hesap, hedef kotu + ~2 metre uzanma payı + engel geometrisiyle zarf diyagramında yapılır. Hol boşsa (kurulum öncesi) yüksek makaslı daha ekonomik olabilir ve bunu açıkça öneririz. Vinç trafiğiniz sürekliyse kilitleme pencereleri işin planına işlenir; hol kesitini ve dizilimi fotoğrafla paylaşın, model listesiyle dönelim.",
            },
            {
                soru: "Dış sahamız stabilize ve eğimli; hangi makine güvenli çalışır?",
                cevap:
                    "Dizel 4x4 eklemli — bu sahalar için tasarlanmış sınıf: arazi lastikleri, yüksek tırmanma kabiliyeti ve şasi dengeleme sistemi. Güvenliğin anahtarı park pozisyonudur: eğim, makinenin sınırı içinde kalacak pozisyon keşifte seçilir ve şüpheli noktalarda yük dağıtım plakası kullanılır. Eğim sınırının dışına çıkan pozisyonda makine zaten çalışmayı kilitler — ama doğru plan, kilide gelmeden kurulandır. Saha eğim ölçüsünü ve zemin fotoğrafını keşifte alıyoruz.",
            },
            {
                soru: "Savunma tedarikçisiyiz; tesisimize giriş süreciniz nasıl işler?",
                cevap:
                    "Tesisinizin güvenlik sürecine tam uyumla: personel bildirimi ve kimlik süreci önceden tamamlanır, operatör dosyası (belgeler, eğitim kayıtları) formatınızda sunulur, fotoğraf-cihaz kısıtlarına ve alan bazlı erişim kurallarına brifingli uyulur, iş kayıtları tesis düzeninde tutulur. İlk kayıt zaman alabilir — talebi kayıt payıyla erken açın; kayıt açıldıktan sonra işler hızlı döner. Gizlilik gerektiren alanlarda çalışma düzeni, güvenlik biriminizle birlikte kurulur.",
            },
            {
                soru: "Bakım haftamızda dört holde paralel iş var; nasıl organize olursunuz?",
                cevap:
                    "Ekip modeliyle: iş listesi hol-metraj bazında ayrılır, makine karması kurulur (tipik: yüksek dizel eklemli + akülü kompaktlar), operatörler slot planına atanır ve günlük kapanış turuyla ertesi gün teyit edilir. Vinç kilitleme ve enerji kesinti pencereleri bakım koordinasyonunuzla tek takvimde birleşir. Kritik nokta zamanlama: bakım dönemleri bölgede kapasiteyi hızla bağlar — takviminiz netleştiğinde görüşmeyi başlatmak, dönem haftasında ekipsiz kalmamanın tek yoludur.",
            },
            {
                soru: "Dış aydınlatma direklerimiz 18 metre; rüzgâr işi ne kadar etkiler?",
                cevap:
                    "Ciddi etkiler ve planın parçasıdır: 18 metre sepet kotunda rüzgâr, yer seviyesinden belirgin yüksektir ve Ankara platosunun öğleden sonra rüzgârlanması bilinen desendir. İşi sabah bloklarına planlıyor, sepette ölçümle çalışıyor ve limitte (tipik 12,5 m/s) tartışmasız duruyoruz. Pratik sonuç süre tahminindedir: direk başına süre, rüzgâr payıyla verilir ve rüzgârlı haftada takvim uzayabilir — bunu baştan söyleriz. Sıkışık terminli direk işlerini rüzgâr mevsimi dışına almak, en ekonomik plandır.",
            },
            {
                soru: "Vinçlerimiz gün boyu çalışıyor; platform işi üretimi yavaşlatır mı?",
                cevap:
                    "Doğru koordinasyonla hayır: vinç kilitleme yalnızca bom ile kancanın aynı düşeye gireceği kısa pencerelerde uygulanır, pencereler üretim programınızın doğal boşluklarına (yük değişimi, vardiya geçişi) denk getirilir ve telsiz koordinasyonuyla dakika bazında yönetilir. İş listesinin vinç hattıyla kesişmeyen bölümü, kilitleme hiç gerektirmeden paralel yürür. Keşifte iş listesini 'kesişen/kesişmeyen' olarak ayırıyoruz — çoğu tesiste kesişen kısım, sanılandan küçük çıkar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. ASO 1. OSB'nin (Sincan) ağır sanayi ve savunma yan sanayi profili kamuya açık bilgidir; ekip modeli ve rüzgâr planlaması firma pratiğidir.",
    },

    "bolge:yenimahalle": {
        h1: "Yenimahalle'de Eklemli Platform Kiralama",
        giris:
            "Yenimahalle, Ankara'nın sanayi ile şehrin iç içe geçtiği ilçesidir: OSTİM ve İvedik'i sınırları içinde barındırır ama bu sayfanın konusu onların dışında kalan Yenimahalle'dir — bulvar üzeri ticari yapılar, AVM'ler, kamu binaları, hastaneler ve mahalle aralarına serpilmiş küçük imalat. Bu dokuda eklemli platformun işi, kentin erişim problemleridir: ağaçlı refüjlerin arkasındaki cepheler, sundurmalı girişlerin üstündeki tabelalar, bitişik nizam binaların dar aralıkları ve otopark üstü kotlarda çalışma. Kent içi iş, sanayi işinden farklı bir disiplin ister — yaya güvenliği, trafik yönetimi, belediye izinleri ve mesai-dışı pencereler planın doğal parçasıdır. Merkez konumumuz, Yenimahalle'ye gün içi hızlı erişim sağlar.",
        maddeler: [
            {
                baslik: "Bulvar cephelerinde ağaç ve refüj engeli",
                metin:
                    "Ankara bulvarlarının olgun ağaç dokusu, cephe işlerinin birinci engelidir: makine kaldırıma park edebilse bile düz çıkış, taç yüksekliğine takılır. Eklemli bomun kırılım kabiliyeti burada devreye girer — bom, taç seviyesinin üzerinden veya dalların arasındaki boşluktan kırılarak cepheye uzanır. Ağaca zarar vermeden çalışmak hem belediye şartı hem işin kalitesidir; erişim geometrisi, dal budamaya gerek kalmayacak şekilde keşifte planlanır. Refüjden çalışma gerekiyorsa belediye izni sürece eklenir.",
            },
            {
                baslik: "Tabela, cephe kaplama ve giriş sundurmaları",
                metin:
                    "Ticari yapıların tabela ve kaplama işlerinde tipik engel, zemin kat girişlerinin sundurma ve saçaklarıdır: hedef ikinci-üçüncü kat hizasında, önü kapalı. Kompakt eklemli modeller dar kaldırım parkından sundurma üzerinden kırılarak hedefe ulaşır. İş, yaya trafiğinin bariyerlenmesiyle yürür; yoğun yaya saatlerinde cadde işleri sabah erken veya akşam pencerelerine alınır. İşgaliye gereken parklar için belediye süreci planlamaya dahildir — bu süreci işletme adına biz yürütebiliriz.",
            },
            {
                baslik: "Kamu binaları ve hastanelerde kurumsal düzen",
                metin:
                    "İlçenin kamu yapıları ve hastanelerinde platform işi, kurum prosedürüne uyumla yürür: yüklenici kaydı, çalışma saatleri kısıtı (hastanelerde bölüm bazlı sessiz saatler), refakat düzeni ve iz bırakmayan lastik gibi iç mekân şartları. Cephe işlerinde bina kullanımda kaldığı için pencere-kapı hizalarında çalışırken iç tarafın bilgilendirilmesi ve gerektiğinde alan boşaltması kurumla koordine edilir. Evrak setimiz kamu yüklenici süreçlerine hazırdır.",
            },
            {
                baslik: "Mahalle arası imalat ve servis noktaları",
                metin:
                    "Yenimahalle'nin mahalle dokusuna serpilmiş küçük imalat ve servis işletmelerinde (mobilyacı, cam atölyesi, oto servis) işler kısa ve erişimi zordur: dar sokak, bitişik bina, kablo karmaşası. Dar şaseli akülü eklemli, bu işlerin makinesidir — sokaktan tek şerit parkla çalışır, elektrik hattı mesafesi geometriyle korunur ve iş çoğunlukla yarım günde biter. Aynı mahalledeki birkaç işletmenin işini aynı güne toplamak, kent içinde de en verimli modeldir.",
            },
            {
                baslik: "Mesai-dışı pencereler ve gece işleri",
                metin:
                    "Kent içi işlerin önemli bölümü mesai-dışına planlanır: AVM ve mağaza cepheleri kapanış sonrası, bulvar işleri gece trafiği azalınca, okul çevreleri tatil günlerinde. Akülü eklemli modellerin sessizliği gece penceresinde belediye gürültü sınırlarıyla uyumludur; aydınlatma işveren tarafından sağlanır. Makine gündüz teslim alınır, gece bloğunda çalışılır — gece nakliyesi maliyeti oluşmaz. Trafik yönetimi gereken gece işlerinde güzergâh ve bariyer planı, ilgili birimlerle önceden kurulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yenimahalle kent içi iş-izin-pencere haritası",
                paragraflar: [
                    "Kent içi işlerin izin gereksinimi ve doğru pencereleri aşağıdadır. Sanayi işlerinden farklı olarak burada 'izin + pencere' çifti, makine seçiminden önce gelir.",
                ],
                tablo: {
                    basliklar: ["İş", "İzin gereksinimi", "Doğru pencere", "Makine"],
                    satirlar: [
                        ["Bulvar cephe/tabela", "İşgaliye (parka göre)", "Sabah erken / gece", "Eklemli 16 – 20 m"],
                        ["AVM-mağaza cephesi", "Yönetim onayı", "Kapanış sonrası", "Akülü eklemli"],
                        ["Kamu binası / hastane", "Kurum kaydı + refakat", "Kurum saatlerine göre", "İç: akülü, dış: duruma göre"],
                        ["Mahalle arası küçük iş", "Çoğunlukla gerekmez", "Gün içi", "Dar şase akülü eklemli"],
                        ["Refüj/orta kaldırım parkı", "Belediye izni", "Gece / hafta sonu", "Kompakt eklemli"],
                    ],
                },
            },
            {
                baslik: "Ağaç dokusuna saygılı erişim planlaması",
                paragraflar: [
                    "Ankara bulvarlarının ağaçları, cephe işlerinde 'engel' değil 'korunacak varlık' olarak planlanır: erişim geometrisi dal budamaya gerek bırakmayacak şekilde kurulur, bom hareketleri taç çevresinde yavaşlatılır ve dallara temas hâlinde iş durdurulup geometri yeniden çizilir. Budamanın kaçınılmaz göründüğü işlerde karar bize ait değildir — belediyenin ilgili birimine başvuru işletme tarafından yapılır ve izin çıkarsa budama, yetkili ekipçe gerçekleştirilir.",
                    "Bu yaklaşımın pratik değeri iki yönlüdür: belediyeyle sorun yaşanmaz ve iş, çevre şikâyeti olmadan biter. Kent içinde itibar, sanayi sahasındaki hızın karşılığıdır.",
                ],
            },
            {
                baslik: "Kent içinde yaya güvenliği düzeni",
                paragraflar: [
                    "Kaldırım ve cadde işlerinde güvenlik alanı üç katmanla kurulur: çalışma düşeyinin altı (düşen cisim bölgesi) tam kapatılır, makinenin dönüş alanı (kuyruk taşması dahil) bariyerlenir ve yaya akışı, işaretli alternatif güzergâha yönlendirilir. Okul-hastane çevresi gibi hassas noktalarda pencere seçimi (tatil, mesai dışı) bu düzenin ilk maddesidir. Bariyer-işaret ekipmanı makineyle birlikte gelir; kurulum, işin ilk yarım saatidir ve asla atlanmaz.",
                    "Zemin tarafında kaldırım altı boşluklar (otopark, sığınak, bodrum) kontrol edilir — kaldırım taşıma kapasitesi şüpheliyse yük dağıtım plakası kullanılır veya park pozisyonu yola alınır (işgaliye süreciyle).",
                ],
            },
        ],
        sss: [
            {
                soru: "Cephemizin önünde büyük çınarlar var; tabela değişimi yapılabilir mi?",
                cevap:
                    "Çoğu durumda evet — eklemli bomun kırılım kabiliyetiyle taç üzerinden veya dal aralığındaki boşluktan geçilerek: erişim geometrisi, budamaya gerek bırakmayacak şekilde keşifte çizilir ve bom, taç çevresinde yavaşlatılmış hareketle çalışır. Geometrinin yetmediği nadir durumda dürüst cevap verilir ve budama gerekiyorsa süreç belediye izniyle, yetkili ekipçe yürütülür — dalı 'ucundan alıverelim' yaklaşımıyla çalışmayız. Ağaç konumlarını gösteren fotoğrafla keşif, cevabı netleştirir.",
            },
            {
                soru: "AVM'mizin cephe aydınlatması yenilenecek; müşteri saatlerinde mümkün mü?",
                cevap:
                    "Önermeyiz — doğru model kapanış sonrası penceredir: yaya yoğunluğu altında cephe işi, bariyer alanını büyütür ve müşteri deneyimini bozar; gece bloğunda ise alan boş, iş hızlı ve akülü eklemli sessizdir. Makine gündüz teslim alınıp otopark alanında bekletilir, kapanışla iş başlar, açılıştan önce alan temiz teslim edilir. Birkaç geceye yayılan işlerde makine sahada konaklar. Yönetim onayı ve güvenlik koordinasyonu planın parçasıdır — bu düzeni AVM'lerle sık kuruyoruz.",
            },
            {
                soru: "Hastane binamızın dış cephesinde çalışma var; hangi kısıtlar geçerli?",
                cevap:
                    "Üç kısıt planı belirler: kurum yüklenici kaydı ve refakat düzeni, bölüm bazlı sessiz saatler (yoğun bakım-ameliyathane hizalarında gürültülü iş yasağı) ve pencere hizalarında iç tarafın bilgilendirilmesi-gerektiğinde boşaltılması. İş planı, hastane teknik birimiyle bölüm haritası üzerinden kurulur; akülü model gürültü kısıtına uyumu kolaylaştırır. Evrak setimiz kamu-kurum süreçlerine hazırdır — kayıt payıyla açılan talep, kurum takviminde sorunsuz ilerler.",
            },
            {
                soru: "Dar sokakta oto servisimizin üstündeki çatı oluğu onarılacak; makine sığar mı?",
                cevap:
                    "Büyük olasılıkla evet — dar şaseli akülü eklemli bu doku için seçilmiştir: tek şerit parkla çalışır, bomunu bina hizasından kırarak oluğa uzanır ve iş çoğunlukla yarım günde biter. Kontrol edilecekler: sokak genişliği (tek şerit kalıyor mu), elektrik hattı konumu (geometriyle mesafe korunur) ve park zemini. Fotoğrafla ölçü paylaşın; sığmayan senaryoda alternatifi (komşu parselden erişim, farklı model) keşifte çizeriz. Aynı sokakta başka işletmelerin de işi varsa aynı güne toplamak nakliyeyi böler.",
            },
            {
                soru: "Gece çalışması için belediyeden izin gerekir mi?",
                cevap:
                    "İşin yerine göre: kendi parselinizde (AVM otoparkı, bina bahçesi) kurum onayı yeterlidir; kamusal alan kullanımı (kaldırım, yol şeridi, refüj) işgaliye iznine tabidir ve gece çalışması gürültü yönetmeliği sınırlarında planlanır — akülü modelle bu sınır sorun olmaz. İzin süreçlerini işletme adına yürütebiliyoruz; hangi işin hangi izne girdiğini keşifte netleştirip süreci planlamaya ekliyoruz. İzinli-plansız gece işi hızlıdır; izinsiz gece işi ise ceza ve durdurma riskidir — o yola girmiyoruz.",
            },
            {
                soru: "Kaldırımda çalışacaksınız; altında otopark var, sorun olur mu?",
                cevap:
                    "Kontrolsüz çalışılırsa olur — bu yüzden kaldırım altı boşluk kontrolü standarttır: otopark-sığınak-bodrum üstü kaldırımlarda taşıma kapasitesi değerlendirilir ve üç yoldan biri seçilir: yük dağıtım plakasıyla kaldırım parkı, park pozisyonunu yol şeridine alma (işgaliye ile) veya erişimi farklı noktadan kurma. Bina yönetiminden otopark projesine bakmak çoğu zaman yeterlidir; belirsiz durumda güvenli seçenek tercih edilir. Bu kontrol, kent içi işlerimizde atlanmayan maddedir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Yenimahalle'nin kent-sanayi karışımı ve Ankara bulvar dokusunun ağaç varlığı kamuya açık bilgidir; kent içi izin-pencere düzeni belediye mevzuat çerçevesidir.",
    },

    "bolge:batikent": {
        h1: "Batıkent'te Eklemli Platform Kiralama",
        giris:
            "Batıkent, Ankara'nın planlı toplu konut kuşağıdır: geniş bulvarlar etrafında sıralanan çok katlı siteler, bunların altındaki ticari zeminler, okul-sağlık yapıları ve kuşağın kenarlarındaki ticari-hafif sanayi parselleri. Buradaki platform ihtiyacının merkezi konut yönetimleridir — site bloklarının cephe onarımları, çatı ve oluk işleri, dış cephe ısı yalıtımı sonrası bakımlar, ortak alan aydınlatmaları. Toplu konut işinin kendine özgü müşterisi vardır: kararlar yönetim kurullarında alınır, bütçeler aidatlardan çıkar ve işin görünürlüğü yüksektir — bütün site izler. Eklemli sınıfın buradaki değeri, site içi dar yollardan ve peyzaj engellerinin üzerinden blok cephelerine erişimdir; işin değeri ise sakinlerin gündelik hayatını bozmadan çalışabilmektir.",
        maddeler: [
            {
                baslik: "Site içi erişim: dar yollar ve peyzaj engelleri",
                metin:
                    "Toplu konut sitelerinin iç yolları araç geçişine göre ölçülüdür, iş makinesine göre değil: dar kavşaklar, park hâlindeki araçlar, hız kesiciler ve blok önlerindeki peyzaj (ağaç, çalı grubu, oturma alanı) erişimi kısıtlar. Kompakt eklemli modeller bu dokuda çalışacak şekilde seçilir; blok cephesine peyzajın üzerinden kırılan bomla ulaşılır ve yeşil dokuya temas edilmez. Park pozisyonları, sakinlerin araç park düzenini en az bozacak şekilde yönetimle birlikte planlanır — bir gün önceden duyuru, sürtüşmesiz işin anahtarıdır.",
            },
            {
                baslik: "Yüksek blok cephelerinde kademeli erişim",
                metin:
                    "Batıkent bloklarının yükseklikleri geniş bantta değişir ve platformun ekonomik erişim sınırı planın temelidir: 20-25 metre bandına kadar cephe işleri (oluk, kaplama onarımı, klima montaj-bakımı, tabela) eklemli platformla hızlı ve iskelesiz yapılır; üst katları bu bandı aşan bloklarda iş, asılı erişim sistemlerinin veya iskelinin alanına girer ve bunu dürüstçe söyleriz. Karma çözüm de yaygındır: alt-orta katlar platformla hızla bitirilir, üst bant için ayrı yöntem planlanır — toplam maliyet çoğu zaman böyle en düşük çıkar.",
            },
            {
                baslik: "Yalıtım sonrası bakım ve mantolama onarımları",
                metin:
                    "Kuşağın yapı stoku, dış cephe ısı yalıtımının yoğun uygulandığı dönemlerden geçti ve bugünkü işlerin önemli kısmı yalıtım sonrası bakımdır: darbe almış mantolama bölgelerinin onarımı, söve-denizlik çatlakları, dübel başı kabarmaları ve son kat kaplama yenilemeleri. Bu işler nokta işidir — iskele kurmaya değmez, eklemli platformla blok blok gezilerek yapılır. Malzeme sepette taşınır; sepet kapasitesi (kişi + malzeme) plana işlenir ve cephe boyunca kademeli çalışmayla blok, birkaç günde bitirilir.",
            },
            {
                baslik: "Sakin güvenliği: sitede çalışmanın birinci kuralı",
                metin:
                    "Site içinde iş, insanların evlerinin önünde yapılır: çocuk oyun alanları, okul servisi saatleri, market yolu — hepsi çalışma alanının kenarından geçer. Güvenlik düzeni buna göre kurulur: çalışma düşeyinin altı ve makinenin dönüş alanı kapatılır, blok girişi etkileniyorsa alternatif giriş yönlendirmesi yapılır, okul servis saatlerinde blok önü işleri durdurulur ve balkon-pencere hizasında çalışırken o dairelerin bilgilendirilmesi yönetim üzerinden sağlanır. Bu düzenin duyurusu, işin teknik planı kadar önemlidir.",
            },
            {
                baslik: "Yönetim bütçesine uygun planlama",
                metin:
                    "Site yönetimlerinin bütçe gerçeği, iş planını şekillendirir: aidat bütçesi sınırlıdır, büyük harcamalar genel kurul ister ve 'blok başına maliyet' sorusu her teklifin merkezidir. Modelimiz buna göre kurulur — iş listesi blok bazında fiyatlanır, çok bloklu paketlerde makine günü verimli kullanılarak birim maliyet düşürülür ve aynı bölgedeki komşu sitelerin işleri aynı haftaya toplandığında nakliye bölünür. Keşif ve teklif, yönetim kuruluna sunulabilir sadelikte hazırlanır; teknik dil, karar için gereken netliğe çevrilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Batıkent site işlerinde iş-yöntem eşleşmesi",
                paragraflar: [
                    "Toplu konut kuşağının tipik işleri ve doğru yöntem eşleşmesi aşağıdadır. Platform bandını aşan işlerde dürüst yönlendirme, tablonun son satırındadır.",
                ],
                tablo: {
                    basliklar: ["İş", "Tipik bant", "Yöntem", "Not"],
                    satirlar: [
                        ["Oluk-dere onarımı", "Çatı kenarı", "Eklemli platform", "Blok gezerek seri iş"],
                        ["Mantolama nokta onarımı", "Tüm cephe bandı", "Eklemli + sepette malzeme", "İskeleye değmez ölçek"],
                        ["Klima montaj-bakım", "Kat hizaları", "Kompakt eklemli", "Daire bilgilendirmesi şart"],
                        ["Ortak alan aydınlatma", "Direk ve saçak", "Akülü eklemli", "Gündüz sakin saatlerde"],
                        ["Üst bant (platform sınırı üstü)", "Yüksek katlar", "Asılı sistem / iskele", "Dürüst yönlendirme yapılır"],
                    ],
                },
            },
            {
                baslik: "Blok gezme modeli: seri nokta işlerin ekonomisi",
                paragraflar: [
                    "Toplu konutun karakteristik ihtiyacı, aynı işin çok blokta tekrarıdır: her blokta birkaç saatlik oluk onarımı, her cephede birkaç mantolama noktası. Blok gezme modeli bu profil için kuruludur — makine sabah ilk blokta başlar, iş biten bloktan sonrakine kısa mesafeyle geçer ve gün, 3-5 blokluk seriyle kapanır. Nakliye tek girişte ödenir, makine günü tam verimle kullanılır ve blok başına maliyet, tekil kiralamaların çok altına iner.",
                    "Modelin planlama şartı, blokların iş listesinin önceden çıkarılmış olmasıdır: yönetimle yapılan keşif turunda her bloğun noktaları işaretlenir, sıra optimize edilir ve duyuru takvimi kurulur. Komşu sitelerin katılımıyla model haftalık tura büyür — kuşağın en düşük birim maliyeti bu turlardan çıkar.",
                ],
            },
            {
                baslik: "Görünür iş: sitede itibar yönetimi",
                paragraflar: [
                    "Site işinin izleyicisi çoktur ve işin görünümü, yönetimin itibarıdır: bariyerlenmiş düzenli alan, toplanan atık, korunan peyzaj ve saatinde başlayıp saatinde biten çalışma — sakinlerin gördüğü bunlardır ve sonraki işlerin onayı bu görüntüden çıkar. Operatör disiplinimiz buna göredir: alan düzeni gün boyu korunur, iş sonu temizliği yapılır ve sakin sorularına nazik, yönlendirici cevap verilir (teknik tartışma yönetime bırakılır).",
                    "Yönetimlere önerimiz de aynı mantıktadır: iş duyurusunu bir gün önceden panoya asmak, etkilenen dairelere not bırakmak ve iş bitiminde kısa bilgi paylaşmak — küçük iletişim, büyük sürtüşmeleri önler ve genel kurulda 'iyi yönetilen iş' hafızası bırakır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sitemizde 12 blokta oluk onarımı var; nasıl fiyatlanır ve ne kadar sürer?",
                cevap:
                    "Blok gezme modeliyle: keşif turunda her bloğun noktaları işaretlenir, iş listesi blok bazında fiyatlanır ve makine günde 3-5 blok gezerek seriyi tamamlar — 12 blok tipik olarak 3-4 güne oturur. Nakliye tek girişte ödenir ve blok başına maliyet, tekil işlerin çok altına iner. Teklif, yönetim kuruluna sunulabilir sadelikte 'blok başına' düzenlenir. Duyuru takvimi (hangi gün hangi bloklar) plana dahildir — sakin sürtüşmesi olmadan seri iş, bu düzenle yapılır.",
            },
            {
                soru: "Blok önündeki ağaçlar ve oturma alanı cepheye erişimi kapatıyor; çözüm ne?",
                cevap:
                    "Eklemli bomun kırılımıyla peyzajın üzerinden erişim: makine iç yola park eder, bom ağaç-çalı grubunun üzerinden kırılarak cepheye uzanır ve yeşil dokuya temas edilmez. Park pozisyonu, oturma alanını kapatmayacak ve araç düzenini en az bozacak şekilde yönetimle seçilir. Erişim geometrisinin yetmediği nadir cephelerde alternatif (komşu blok arasından, farklı açıdan) keşifte çizilir. Peyzaj koruması bizde kural düzeyindedir — site bahçesi, çalışma alanı değil korunacak alandır.",
            },
            {
                soru: "Mantolamada kabaran bölgeler var; iskele kurmadan onarım olur mu?",
                cevap:
                    "Nokta onarım ölçeğinde evet — ve ekonomik olan da budur: eklemli platform kabaran bölgelere kademeli erişir, malzeme sepette taşınır ve blok, iskele kurulum-söküm maliyeti olmadan birkaç günde biter. İskele, ancak cephenin büyük bölümünün yenileneceği kapsamlı işlerde anlamlıdır. Keşifte hasar haritası çıkarıp iki senaryonun (platformla nokta onarım / iskeleyle kapsamlı yenileme) maliyet karşılaştırmasını sunuyoruz — karar, yönetim kurulunuza rakamla gider.",
            },
            {
                soru: "Çalışma sırasında çocuklar ve yaşlılar alandan geçiyor; güvenlik nasıl sağlanır?",
                cevap:
                    "Üç katmanlı site düzeniyle: çalışma düşeyinin altı ve makinenin dönüş alanı fiziksel bariyerle kapatılır, blok girişi etkileniyorsa alternatif giriş işaretlenir ve hassas saatlerde (okul servisi, yoğun geçiş) blok önü çalışması durdurulur. Balkon-pencere hizası işlerinde etkilenen daireler yönetim üzerinden önceden bilgilendirilir. Bariyer ekipmanı makineyle gelir ve kurulum, işin ilk adımıdır. Bu düzen pazarlık konusu değildir — sitede güvenlik, işin kendisinden önce gelir.",
            },
            {
                soru: "Bütçemiz kısıtlı; maliyeti düşürmenin yolları neler?",
                cevap:
                    "Üç kaldıraç var: işleri biriktirip tek seferde yaptırmak (blok gezme modeli — nakliye ve makine günü verimlenir), komşu sitelerle aynı haftaya denk getirmek (bölge turu — nakliye bölünür) ve işleri doğru mevsime planlamak (cephe işlerinde hava penceresi geniş dönem, süreyi kısaltır). Ayrıca 'platform mu iskele mi' ayrımını doğru yapmak tek başına en büyük tasarruftur — nokta işlere iskele kurmak, kuşaktaki en yaygın bütçe israfıdır. Keşifte bu kaldıraçların hepsini rakamlandırıyoruz.",
            },
            {
                soru: "Üst katlarımız 28 metrede; platformla çıkılır mı?",
                cevap:
                    "Bant sınırına dürüst bakalım: 20-25 metre bandına kadar eklemli platform hızlı ve ekonomiktir; 28 metre, sınıfın üst modellerini gerektirir ve o bantta maliyet belirgin artar — bazı işlerde asılı erişim sistemi veya iskele daha ekonomik çıkar. Doğru cevap iş tipine bağlıdır: kısa nokta işi üst model platformla, cephe boyu uzun iş asılı sistemle verimli olur. Keşifte iki yöntemin karşılaştırmasını sunar, platformun doğru araç olmadığı yerde bunu açıkça söyleriz — yanlış araçla pahalı iş, kimseye kazandırmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Batıkent'in planlı toplu konut kimliği kamuya açık bilgidir; blok gezme modeli ve site çalışma düzeni firma pratiğidir.",
    },

    "bolge:ankara-anadolu-osb": {
        h1: "Anadolu OSB'de Eklemli Platform Kiralama",
        giris:
            "Anadolu OSB, Ankara'nın batı gelişme koridorunda görece genç bir organize sanayi bölgesidir ve karakterini bu gençlik belirler: parseller planlı, yollar geniş, yapı stoku modern — ama bölge hâlâ inşa hâlindedir. Her yıl yeni fabrikalar yükselir, mevcut tesisler ek bina yapar ve altyapı büyümeye ayak uydurur. Platform ihtiyacının iki yüzü de buradan doğar: bir yanda inşaat-montaj dönemi işleri (çelik konstrüksiyon, cephe paneli, altyapı aydınlatması), diğer yanda devreye giren fabrikaların ilk işletme dönemi ihtiyaçları. Eklemli sınıfın bu ikili yapıdaki rolü esnekliktir — aynı makine sabah stabilize şantiye zeminindeki cephe işinde, öğleden sonra biten holün içindeki tesisat işinde çalışabilir. Batı koridoru turlarımızın merkezindeki bölge, hızlı döngülü hizmetin en verimli sahalarındandır.",
        maddeler: [
            {
                baslik: "İnşa hâlindeki bölgede iki dünya tek sahada",
                metin:
                    "Anadolu OSB'nin tipik manzarası, çalışan fabrikanın bitişiğindeki şantiyedir ve platform planı iki dünyanın kurallarını birden taşır: şantiye tarafında stabilize zemin, vinç trafiği ve yapı denetim düzeni; işletme tarafında hol içi temiz zemin, üretim pencereleri ve tesis İSG'si. Dizel 4x4 eklemli modeller şantiye fazının, akülü kompaktlar işletme fazının makinesidir — ve projelerin faz geçişinde tek sözleşmeli makine değişimi, iki ayrı kiralamadan ekonomiktir.",
            },
            {
                baslik: "Çelik konstrüksiyon montajında eklemli erişim",
                metin:
                    "Yeni fabrika binalarının çelik iskelet montajı, bölgedeki en yoğun platform işidir: kolon-kiriş birleşimleri, aşık montajı, çapraz bağlantılar ve cephe kuşakları. Eklemli bomun değeri montaj geometrisinde ortaya çıkar — kurulmakta olan iskeletin dışından park edip elemanların arasına uzanmak, makaslının düz çıkışıyla çoğu noktada mümkün değildir. Montajcı ekiple sepet koordinasyonu (kim nerede, hangi eleman sırada) günlük plana bağlanır; askıda yük hattının altına bom sokulmaz.",
            },
            {
                baslik: "Cephe paneli ve çatı kaplamada seri çalışma",
                metin:
                    "Sandviç panel cephe ve çatı kaplama işleri, uzun hatlar boyunca seri ilerler: makine panel hattını izleyerek kademeli konum değiştirir, sepette malzeme-vidalama ekipmanı taşınır ve günlük metraj, hava koşuluyla birlikte planlanır. Ankara platosunun rüzgârı panel işinin ana değişkenidir — geniş panel yüzeyi yelken etkisi yaratır ve rüzgârlı saatlerde panel taşıma durdurulur. Sabah bloklarında panel, öğleden sonra vidalama-detay işleri: bölgedeki panel ekiplerinin bildiği ritim budur.",
            },
            {
                baslik: "Devreye giren fabrikalarda ilk yıl işleri",
                metin:
                    "Yeni binasına taşınan üreticinin ilk yılı, tamamlama işleriyle geçer: eksik aydınlatma bölgeleri, ilave havalandırma, raf-asma kat montajları, tabela ve saha aydınlatması. Bu dağınık liste için en verimli model, dönemsel toplu planlamadır — işler biriktirilir, makine birkaç günlüğüne gelir ve liste güzergâh sırasıyla biter. Bölgede eş zamanlı devreye giren komşu tesislerin listeleri birleştirildiğinde maliyet daha da düşer; genç OSB'nin avantajı, herkesin aynı dönemden geçmesidir.",
            },
            {
                baslik: "Batı koridoru turlarıyla hızlı döngü",
                metin:
                    "Anadolu OSB, Sincan-Temelli eksenindeki batı koridoru turlarımızın üzerindedir: teslimat hızlı, faz geçişlerinde makine değişimi pratik, arıza-ikame desteği gün içindedir. Şantiye dönemindeki tesisler için lowbed gerektiren ağır modeller bir gün önceden, akülü kompaktlar standart araçla kısa sürede planlanır. Bölgenin büyüme temposunda 'komşu parsel de başladı' sıklığı yüksektir — aynı turda çoklu teslimat, nakliyeyi ada bazında böler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Anadolu OSB'de faz-iş-makine eşleşmesi",
                paragraflar: [
                    "Bölgenin inşaat-işletme ikili yapısında tipik işler ve makine eşleşmesi aşağıdadır. Faz geçişi olan projelerde tablo, tek sözleşmenin iki dönemini tanımlar.",
                ],
                tablo: {
                    basliklar: ["Faz", "Tipik iş", "Zemin/ortam", "Makine"],
                    satirlar: [
                        ["Kaba yapı", "Çelik montaj, aşık-kuşak", "Stabilize, vinçli saha", "Dizel 4x4 eklemli 16 – 20 m"],
                        ["Kapama", "Cephe paneli, çatı kaplama", "Saha betonu kısmi", "Dizel eklemli + rüzgâr planı"],
                        ["İnce imalat", "Hol içi elektrik-mekanik", "Beton, temiz", "Akülü eklemli / makaslı"],
                        ["İşletme ilk yıl", "Tamamlama listeleri", "İşletme düzeni", "Akülü kompakt, toplu plan"],
                        ["Altyapı", "Saha aydınlatma, direk", "Yol-refüj", "Dizel eklemli"],
                    ],
                },
            },
            {
                baslik: "Şantiyeden işletmeye: tek sözleşmeli faz geçişi",
                paragraflar: [
                    "Fabrika inşaatının platform ihtiyacı fazlarla değişir ve her faz için ayrı kiralama, hem evrak hem nakliye tekrarıdır. Tek sözleşmeli faz modeli bunu çözer: sözleşme, projenin fazlarını ve her fazın makine sınıfını baştan tanımlar; geçiş tarihleri esnek aralıklarla bağlanır ve makine değişimi aynı sevkiyat turunda yapılır — giden dizelin yerine gelen akülü, tek araçla döner. Proje takviminin kayması hâlinde faz tarihleri sözleşme içinde güncellenir.",
                    "Bu modelin bölgedeki değeri, Anadolu OSB'nin proje yoğunluğundan gelir: aynı anda birden fazla projenin fazlarını koordine ettiğimiz için makine parkı fazlar arasında verimli döner ve fiyat, tekil kiralamaların altında kalır.",
                ],
            },
            {
                baslik: "Yapı denetim ve şantiye İSG düzeniyle uyum",
                paragraflar: [
                    "Şantiye fazındaki işlerde platform, yapı denetim ve şantiye İSG düzeninin parçasıdır: günlük İSG kayıtlarına makine kontrolü işlenir, operatör belgeleri şantiye dosyasında bulunur, sepetteki montaj personelinin kemer-lanyard düzeni bom sınıfı kurallarına tabidir ve vinçle eş zamanlı çalışmada sorumluluk matrisi (kim kimi bekler) yazılı kurulur. Bu düzen, şantiye şefinin yükünü artırmaz — hazır formatlarımız şantiye dosyasına doğrudan girer.",
                    "Montaj taşeronlarıyla üçlü çalışmada (işveren-taşeron-biz) makine kullanım sorumluluğu netleştirilir: operatörlü modelde sepeti operatörümüz yönetir, taşeron personeli montajı yapar — 'makineyi taşeron kullanır' modeli ancak taşeronun belgeli operatörüyle kurulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Fabrika inşaatımız başlıyor; platform planını ne zaman kurmalıyız?",
                cevap:
                    "Çelik montaj ihalesiyle birlikte — çünkü faz planı, montaj programının üzerine kurulur: kaba yapı fazında dizel eklemli sınıf ve adet, kapama fazında panel hattı ritmi, ince imalatta akülü geçişi ve işletme dönemi tamamlama listesi tek sözleşmede tanımlanır. Erken kurulan plan, hem makine güvencesi hem fiyat avantajı sağlar; faz tarihleri esnek aralıklarla bağlanır ve takvim kaymaları sözleşme içinde yönetilir. Montajcınızla üçlü toplantı, planın ilk adımıdır.",
            },
            {
                soru: "Çelik iskeletin iç noktalarına makaslıyla ulaşamıyoruz; eklemli çözer mi?",
                cevap:
                    "Çözer — montaj geometrisi tam olarak eklemli senaryodur: makine iskeletin dışına park eder, bom kolon-kiriş aralarından kırılarak birleşim noktalarına uzanır. Kesinleştirme zarf diyagramıyla yapılır: park noktası, aşılacak eleman geometrisi ve hedef koordinat işaretlenir. Montaj sırasına göre erişim açıları değişeceği için günlük plan montajcıyla koordine edilir; askıda yük hattının altına bom girmez — vinç-platform sıralaması yazılı kurulur. İskelet planını paylaşın, erişim haritasını çıkaralım.",
            },
            {
                soru: "Panel montajında rüzgâr işleri ne kadar aksatır?",
                cevap:
                    "Planlanmazsa ciddi aksatır; planlanırsa yönetilir: Ankara platosunun öğleden sonra rüzgârlanması bilinen desendir ve panel taşıma (yelken etkisi nedeniyle) sabah bloklarına, vidalama-detay işleri öğleden sonraya planlanır. Sepette ölçümle çalışılır ve limitte panel işi durdurulur — vidalamaya devam edilebilir, gün boşa geçmez. Takvim tahminine rüzgâr payı eklenir: 'panel hattı X gün' taahhüdü, mevsim ortalamasıyla verilir ve rüzgârlı hafta senaryosu baştan konuşulur.",
            },
            {
                soru: "Binamız bitti, taşındık; ufak tefek işler sürekli çıkıyor. Her seferinde kiralama mı?",
                cevap:
                    "Hayır — ilk yıl profili için toplu plan modeli var: işleri listeye biriktirin (eksik aydınlatma, ilave havalandırma, raf montajı, tabela...), makine birkaç günlüğüne gelsin ve liste güzergâh sırasıyla bitsin. Nakliye teke iner, birim maliyet düşer. Bölgede aynı dönemde devreye giren komşularınız varsa listeleri birleştiriyoruz — genç OSB'nin herkesi aynı fazdan geçtiği için bu eşgüdüm burada özellikle verimli. Acil tekil işlerde batı koridoru turları gün içi müdahale sağlar.",
            },
            {
                soru: "Saha aydınlatma direklerimiz dikilecek; hangi makine ve nasıl bir plan?",
                cevap:
                    "Direk montajı vinç işidir; platformun rolü bağlantı-terminal işleridir: armatür montajı, kablo terminali, test-ayar. Dizel eklemli, direk dibinden park edip armatür kotuna uzanır; refüj-yol kenarı çalışmalarda OSB içi trafik düzeniyle koordinasyon kurulur. Vinçle ardışık çalışmada sıralama (direk dikimi → bağlantı) tek güne planlanırsa iki makine aynı turda gelir ve saha, hat hat ilerler. Direk sayısı ve hat planını paylaşın; günlük metraj tahminiyle dönelim.",
            },
            {
                soru: "Taşeronumuzun kendi operatörü var; makineyi ona verebilir miyiz?",
                cevap:
                    "Belgesi uygunsa evet: taşeron operatörünün MYK yeterlilik belgesi (bom sınıfı için ayrıca) ve şantiye dosyasına giren eğitim kayıtları şarttır — belge makine tipine göredir, makaslı belgesiyle eklemli kullanılamaz. Belge eksikse iki yol var: operatörlü model (sepeti operatörümüz yönetir, taşeron montajı yapar) veya taşeron personelinin belgelendirilmesi. Sorumluluk matrisi her durumda yazılı kurulur; 'kim kullanıyorsa o sorumlu' belirsizliği, şantiyede kabul etmediğimiz tek düzendir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Anadolu OSB'nin genç-büyüyen profili kamuya açık bilgidir; faz modeli ve montaj koordinasyonu firma pratiğidir.",
    },

    "bolge:temelli-osb": {
        h1: "Temelli'de (ASO 2-3. OSB) Eklemli Platform Kiralama",
        giris:
            "Temelli'deki ASO 2. ve 3. Organize Sanayi Bölgeleri, Ankara sanayisinin batıya doğru büyüyen yeni ölçeğidir: başkentin en geniş parselleri, en yeni fabrika binaları ve en uzun mesafeleri buradadır. Şehir merkezine uzaklık, bölgenin hem kimliği hem lojistik denklemini kurar — geniş arazi ucuz kuruluma imkân verir, ama her hizmet 40-50 kilometrelik yolun ucundan gelir. Platform kiralamada bu denklem iki sonuç doğurur: kısa tekil işlerde nakliye payı büyür ve planlama disiplini önem kazanır; buna karşılık büyük parsellerin geniş iş hacimleri, konaklamalı ve turlu modelleri son derece verimli kılar. Eklemli sınıfın buradaki profili büyük ölçeklidir: yüksek holler, uzun cepheler, geniş dış sahalar — ve hepsinde plato rüzgârının söz hakkı vardır.",
        maddeler: [
            {
                baslik: "Büyük parselde mesafe içi mesafe",
                metin:
                    "Temelli parsellerinin ölçeği, saha içi lojistiği ayrı bir planlama konusu yapar: kapıdan üretim holüne yüzlerce metre, holden dış stok sahasına bir o kadar. Makinenin gün içinde saha içi yer değiştirmeleri (sürüş süreleri, geçiş güzergâhları, ara şarj ihtiyacı) iş planına dakika olarak girer. Dizel eklemliler uzun saha içi mesafelerde avantajlıdır; akülü modellerde günlük rota, şarj noktalarına göre kurulur. Büyük parselde 'makine nerede' sorusunun cevabı, telsiz koordinasyonuyla verilir.",
            },
            {
                baslik: "Yüksek ve geniş yapılarda büyük metraj işleri",
                metin:
                    "Bölgenin yeni nesil fabrikaları büyük ölçekli inşa edilir: 10-15 metre tavanlı holler, uzun cephe hatları, geniş saçaklar. Çatı makası altı işler 16-20 metre eklemli bandında, cephe işleri uzun hat seri çalışmasıyla yürür. Büyük yapının avantajı düzenliliktir — geniş servis kapıları, ferah manevra alanları, düzgün saha betonu; erişim problemi OSTİM tipolojisine göre azdır, iş hacmi ise katbekat büyüktür. Bu yüzden Temelli işleri makine gününü verimli dolduran, uzun soluklu işlerdir.",
            },
            {
                baslik: "Plato rüzgârında dış saha disiplini",
                metin:
                    "Temelli, Ankara platosunun açık batı kesimindedir ve rüzgâr, dış saha işlerinin birinci değişkenidir: engebesiz arazi rüzgârı kesmez, yüksek sepet kotlarında maruziyet tamdır. Cephe paneli, saçak, dış aydınlatma ve silo-tank işlerinde sabah blokları esastır; sepette ölçüm ve limit disiplini tavizsizdir. Uzun cephe hatlarının takvimi mevsim rüzgâr ortalamasıyla verilir — yaz öğleden sonralarının termik rüzgârı, plana bilinen bir parametre olarak girer.",
            },
            {
                baslik: "Uzak bölgede konaklamalı verim modeli",
                metin:
                    "Mesafe, Temelli'de kısa kiralamanın aleyhine, konaklamanın lehine çalışır: makine parselinde kalır, iş listesi günlere yayılır, nakliye tek girişte ödenir ve mesafenin maliyeti erir. Büyük tesislerin süreklilik arz eden ihtiyaçlarında (bakım + tamamlama + dönemsel işler) aylık konaklama, her ölçümde kısa kiralamalar toplamını geçer. Komşu parsellerin işleri aynı konaklama dönemine bağlandığında model tur hâlini alır — geniş parselli bölgede tesisler arası geçiş bile araçla planlanır ama tek nakliye ekonomisi korunur.",
            },
            {
                baslik: "Batı ucunda destek ve ikame planı",
                metin:
                    "Sincan-Temelli ekseni batı koridoru turlarımızın ana hattıdır; günlük tur düzeni, uzak bölgenin destek denklemini çözer — arıza müdahalesi ve ikame makine, tur saatleriyle gün içinde ulaşır. Kritik terminli işlerde (montaj ekibi bekleyen, vinçle senkron çalışan) yedek makine rezervasyonu öneririz: uzak bölgede beklenmedik duruşun saati, merkezdekinden pahalıdır. Lowbed gerektiren büyük modellerin sevkiyatı bir gün önceden planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Temelli'de iş profili ve model eşleşmesi",
                paragraflar: [
                    "Büyük parsel bölgesinin tipik iş profilleri ve verimli kiralama modeli aşağıdadır. Mesafe faktörü, model sütununu belirleyen ana değişkendir.",
                ],
                tablo: {
                    basliklar: ["İş profili", "Tipik süre", "Verimli model", "Makine"],
                    satirlar: [
                        ["Yeni yapı montaj dönemi", "Haftalar", "Faz sözleşmesi + konaklama", "Dizel eklemli 16 – 20 m"],
                        ["Cephe/çatı hattı işleri", "Günler-haftalar", "Konaklama + rüzgâr planı", "Dizel eklemli, sabah blokları"],
                        ["Hol içi tamamlama", "Günler", "Toplu liste", "Akülü eklemli/makaslı"],
                        ["Dönemsel bakım", "Tekrarlayan", "Çerçeve + bölge turu", "İşe göre karma"],
                        ["Kısa tekil iş", "Saatler", "Tur gününe bağlama", "Tur makinesi"],
                    ],
                },
            },
            {
                baslik: "Kısa işin doğru zamanı: tur takvimi",
                paragraflar: [
                    "Temelli'de yarım günlük tekil iş, kendi başına nakliye taşıyamaz — ama taşımak zorunda da değildir: batı koridoru turlarımız bölgeden düzenli geçer ve tur gününe bağlanan kısa işler, nakliyeyi turla paylaşır. Pratik kural şudur: acil olmayan kısa işlerde talebi 'tur gününe uygun' notuyla açmak, maliyeti belirgin düşürür; tarih dayatan kısa işlerde ise fark, dürüstçe fiyata yansır ve bunu baştan gösteririz.",
                    "Tesislerin bakım sorumlularına önerimiz, kısa işleri aylık ritimde biriktirmektir: ayda bir tur günü, biriken listeyi bitirir ve tesis, nakliye ekonomisini süreklileştirir. Bu ritim kurulduğunda Temelli'nin mesafesi, maliyet tablosundan fiilen silinir.",
                ],
            },
            {
                baslik: "Büyük tesiste saha içi koordinasyon düzeni",
                paragraflar: [
                    "Geniş parselli tesislerde işin verimi, saha içi koordinasyona bağlıdır: günlük iş sırası (hangi hol, hangi cephe, hangi saat), geçiş güzergâhları ve refakat düzeni sabah kısa toplantısıyla netleşir; makine-operatör çifti gün boyu telsizle ulaşılabilir kalır ve plan değişiklikleri anında işlenir. Saha içi sürüş güzergâhlarında tesis trafiği (tır, forklift, personel servisi) hesaba katılır — büyük parselin iç yolları, küçük bir kasabanın trafiğini taşır.",
                    "Bu düzenin kaydı da tutulur: günlük iş kapanışları, ertesi gün planı ve karşılaşılan engeller kısa notlarla işlenir. Haftalar süren konaklamalı işlerde bu kayıt, hem ilerleme takibi hem faturalama şeffaflığıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Temelli'ye tek günlük iş için makine gelir mi? Maliyeti nasıl düşer?",
                cevap:
                    "Gelir — ama akıllı zamanlamayla: batı koridoru turlarımız bölgeden düzenli geçer ve tur gününe bağlanan kısa işler nakliyeyi turla paylaşır; 'tur gününe uygun' notuyla açılan talep, belirgin ucuzlar. Tarih dayatan tek günlük işte nakliye payı büyür ve bunu baştan gösteririz. Kalıcı çözüm, kısa işleri aylık ritimde biriktirmektir: ayda bir tur günü listeyi bitirir ve mesafe, maliyet tablosundan silinir.",
            },
            {
                soru: "Parselimiz çok büyük; makine gün içinde üç ayrı noktada çalışacak. Bu nasıl planlanır?",
                cevap:
                    "Saha içi rota planıyla: üç noktanın iş sırası, aralarındaki sürüş süreleri ve geçiş güzergâhları sabah toplantısında netleşir; dizel modelde rota serbesttir, akülüde şarj noktalarına göre kurulur. Tesis içi trafik (tır-forklift-servis) güzergâh planına işlenir ve makine-operatör gün boyu telsizle ulaşılabilir kalır. Üç noktanın toplam işi bir günü aşıyorsa konaklama zaten devrededir — büyük parselde günlerin verimi, bu koordinasyon düzeninden çıkar.",
            },
            {
                soru: "Uzun cephemizin panel işi üç hafta sürecek; rüzgâr takvimi nasıl etkiler?",
                cevap:
                    "Takvim, mevsim rüzgâr ortalamasıyla kurulur ve gün içi ritim sabittir: panel taşıma sabah bloklarında, vidalama-detay öğleden sonra — plato rüzgârının termik deseni bu ritmi belirler. Sepette ölçümle çalışılır, limitte panel durur ama gün boşa geçmez. Üç haftalık taahhüt, rüzgârlı hafta payıyla verilir; takvim dürüstlüğü bu sınıfın standardıdır. Konaklamalı modelde makine sahada olduğu için sakin geçen her saat değerlendirilir — rüzgâr penceresini kaçırmamak, konaklamanın gizli avantajıdır.",
            },
            {
                soru: "Montaj ekibimiz beklerken makine arızalanırsa ne olur?",
                cevap:
                    "Batı koridoru tur düzeni devreye girer: telefonla çözülemeyen arızada teknisyen tur hattından yönlendirilir, onarım uzayacaksa ikame makine sevk edilir — gün içi ulaşım, sözleşmede saatle taahhütlüdür. Ekip bekleyen kritik işlerde önerimiz yedek rezervasyondur: bekleyen montaj ekibinin saati, yedek makinenin bedelinden pahalıdır ve uzak bölgede bu fark büyür. Normal kullanım arızalarında sürecin tüm maliyeti bize aittir; kritik terminli işlerin risk planını sözleşmede birlikte kuruyoruz.",
            },
            {
                soru: "Komşu parseldeki tesisle ortak kiralama yapabilir miyiz?",
                cevap:
                    "Yapılır ve Temelli'de özellikle mantıklıdır: iki tesisin listesi aynı konaklama dönemine bağlanır, makine parseller arasında planlı geçişle çalışır ve nakliye tek girişte bölüşülür. Geniş parselli bölgede tesisler arası geçiş bile araç gerektirir ama tek nakliye ekonomisi korunur. Kullanım günleri ve maliyet paylaşımı sözleşmede tesislere ayrı tanımlanır — muhasebe tarafı temiz kalır. Bölgede aynı fazda büyüyen komşular için bu model, neredeyse standart önerimizdir.",
            },
            {
                soru: "15 metre tavanlı holümüzde vinç rayı üstüne erişim gerekiyor; hangi makine?",
                cevap:
                    "Ray üstü kot + ~2 metre uzanma payı hesabıyla 18-20 metre bandında eklemli: hol doluysa koridor parkından makine dizilimlerinin üzerinden kademeli uzanım (zarf diyagramı kontrolüyle), boşsa yüksek makaslı alternatifi de değerlendirilir ve ekonomikse onu öneririz. Gezer vinçle eş zamanlı çalışmada kilitleme pencereleri üretim programınıza göre kısa tutulur. Hol kesiti ve ray kotunu paylaşın; model listesi ve pencere planıyla dönelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. ASO 2-3. OSB'nin (Temelli) büyük parselli yeni bölge profili ve Ankara batı platosu rüzgâr deseni kamuya açık bilgidir; tur ve konaklama modelleri firma pratiğidir.",
    },

    "bolge:kazan": {
        h1: "Kahramankazan'da Eklemli Platform Kiralama",
        giris:
            "Kahramankazan, Ankara sanayisinin kuzeybatı kanadıdır ve iki farklı ölçeği bir arada taşır: bir yanda savunma ve havacılık sanayinin çevresinde konumlanmış kurumsal tesisler ve onların yan sanayi halkası, diğer yanda Ankara-İstanbul karayolu boyunca dizilmiş depolama, gıda ve madencilik destekli işletmeler. Bu ikilik, platform işlerinin de iki rejimde yürümesi demektir: kurumsal tarafta kayıt-güvenlik-İSG süreçleri işin çerçevesini çizer; karayolu hattında ise hız ve pratiklik öne çıkar. Eklemli sınıfın Kazan'daki tipik işleri hangar tipi yüksek yapılarda, depo çatı altlarında ve dış saha tesislerindedir. Kuzeybatı yönü, batı koridoru turlarımızın uzantısıdır ve düzenli geçiş, bölgeye öngörülebilir hizmet ritmi sağlar.",
        maddeler: [
            {
                baslik: "Hangar tipi yapılarda büyük açıklık erişimi",
                metin:
                    "Havacılık çevresinin hangar tipi yapıları — geniş açıklıklı, yüksek tavanlı, kolonsuz orta hacimler — platform erişiminde kendi geometrisini dayatır: hedefler (çatı makası, aydınlatma hattı, kapı mekanizmaları) yüksek ve yayvandır, iç düzen ise korunması gereken değerli ekipmanla doludur. Eklemli bomun kademeli uzanımı, ekipman bölgelerinin üzerinden güvenli mesafeyle geçerek hedefe ulaşır; zemin işgali minimumda tutulur ve çalışma alanı, hangar operasyonlarıyla saat bazında koordine edilir.",
            },
            {
                baslik: "Kurumsal tesislerde kayıt ve güvenlik süreci",
                metin:
                    "Savunma-havacılık halkasındaki tesislerin yüklenici süreçleri titizdir: personel bildirimi ve güvenlik kontrolü, cihaz-fotoğraf kısıtları, alan bazlı erişim ve refakat düzeni. Operatör dosyalarımız bu süreçlere hazırdır ve ilk kayıt payıyla açılan talepler sorunsuz ilerler. İş kayıtları tesis formatında tutulur; gizlilik kuralları operatör brifinginin sabit maddesidir. Bu tesislerle çalışma geçmişimiz, yeni kayıtlarda referans hızı sağlar.",
            },
            {
                baslik: "Karayolu hattında depo ve gıda tesisleri",
                metin:
                    "Ankara-İstanbul karayolu boyunca dizilen depolar ve gıda işletmeleri, klasik iş profilini taşır: çatı altı aydınlatma-sprinkler, raf üstü erişim, yükleme kapısı mekanizmaları ve dış saha direkleri. Akülü eklemli ve makaslı karması bu profili karşılar; gıda tesislerinde hijyen seti (temiz makine, iz bırakmayan lastik, alet disiplini) devrededir. Karayolu erişimi sevkiyatı kolaylaştırır — bu hattın işleri, tur günlerine kolayca bağlanır ve nakliye payı düşük kalır.",
            },
            {
                baslik: "Madencilik destekli işletmelerde ağır koşul",
                metin:
                    "Kazan çevresinin madencilik bağlantılı tesislerinde (agrega, hazır beton, maden destek atölyeleri) ortam ağırdır: toz yoğunluğu, stabilize sahalar, bunker-silo yapıları ve bant konveyör hatları. Dizel 4x4 eklemli bu sahaların makinesidir; filtre-soğutma bakımı toz katsayısıyla sıklaştırılır ve bant üstü işlerde konveyör kilitleme prosedürü uygulanır. Silo-bunker cidarı işlerinde yüksek metraj ve rüzgâr planı birlikte çalışır.",
            },
            {
                baslik: "Kuzeybatı hattında tur ritmi",
                metin:
                    "Kazan, batı koridoru turlarımızın kuzey uzantısındadır: düzenli geçiş günleri bölgeye öngörülebilir teslimat sağlar, kısa işler tur günlerine bağlanarak nakliye paylaşır ve arıza-ikame desteği tur hattından gün içinde ulaşır. Kurumsal tesislerin planlı bakım dönemlerinde kapasite erken bağlanır; karayolu hattının dağınık işletmeleri için ay ritmli toplu günler, en verimli modeldir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kazan'da saha tipi ve çalışma rejimi",
                paragraflar: [
                    "Bölgenin iki rejimli yapısında saha tipleri ve çalışma çerçevesi aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Saha", "Rejim", "Tipik iş", "Makine"],
                    satirlar: [
                        ["Hangar tipi yapı", "Kurumsal kayıt + saat koordinasyonu", "Makas altı, aydınlatma hattı", "Eklemli 16 – 20 m"],
                        ["Savunma yan sanayi", "Güvenlik süreci + gizlilik", "Hol içi bakım", "Akülü eklemli, kayıtlı operatör"],
                        ["Karayolu depoları", "Hızlı-pratik", "Çatı altı, raf üstü", "Akülü karma"],
                        ["Gıda işletmeleri", "Hijyen seti", "Tavan, sprinkler", "Akülü, iz bırakmayan"],
                        ["Madencilik destekli", "Ağır koşul + kilitleme", "Bunker, konveyör üstü", "Dizel 4x4 eklemli"],
                    ],
                },
            },
            {
                baslik: "Değerli ekipman üzerinde çalışma güvencesi",
                paragraflar: [
                    "Hangar ve kurumsal tesislerin iç hacimleri, zarar maliyeti yüksek ekipman barındırır ve platform çalışması bu gerçeğe göre kurulur: bom güzergâhı, ekipman bölgelerinin üzerinden tanımlı güvenli mesafeyle geçer; alet bağlama ve sarf sayımı tavizsiz uygulanır; kritik bölgelerin üzeri işletmeyle birlikte örtülür ve bom hareketleri bu bölgelerde yavaşlatılmış modda yapılır. Sepet yükü (kişi + malzeme) her blokta kontrol edilir.",
                    "Bu disiplinin sigortası kayıttır: çalışma öncesi saha fotoğrafları, bom güzergâh planı ve iş sonu kontrol turu belgelenir — 'iş öncesi/sonrası' netliği, hem işletmenin hem bizim güvencemizdir.",
                ],
            },
            {
                baslik: "İki rejim tek sözleşmede: karma tesis grupları",
                paragraflar: [
                    "Kazan'ın karma yapısında aynı işletme grubunun hem kurumsal tesisi hem karayolu deposu olabilir ve iki rejimli tek sözleşme, bu grupların doğal modelidir: kurumsal tarafta kayıt-güvenlik süreçleri ve formatlı iş kayıtları, depo tarafında hızlı tur işleri — tek muhatap, tek faturalama, iki rejim disiplini. Operatör ataması rejime göre yapılır; kurumsal tarafın kayıtlı operatörü ile tur tarafının pratik ritmi ayrı planlanır.",
                    "Bu modelin değeri yönetim yükünde görülür: grup yönetimi tek sözleşmeyi izler, sahalar kendi rejimlerinde sorunsuz çalışır ve dönemsel raporlama iki sahayı tek tabloda gösterir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hangarımızın çatı makası altında aydınlatma yenilenecek; içerideki ekipmana risk var mı?",
                cevap:
                    "Yönetilen düzenle hayır: bom güzergâhı ekipman bölgelerinin üzerinden tanımlı mesafeyle planlanır, kritik bölgeler örtülür, aletler bağlı ve sayımlı çalışılır, bom hareketleri hassas bölgelerde yavaşlatılır. Çalışma öncesi-sonrası fotoğraf kaydı iki tarafın güvencesidir. Hangar operasyon saatleriyle koordinasyon (hangi bölge hangi saatte boş) işin planını kurar — bu düzeni hangar yönetimiyle keşifte birlikte çiziyoruz.",
            },
            {
                soru: "Savunma yan sanayi tesisiyiz; operatörünüzün güvenlik süreci ne kadar sürer?",
                cevap:
                    "Tesisinizin sürecine bağlı — bizden gecikme olmaz: personel bilgileri ve belgeler bildirime hazır formatta sunulur, cihaz-fotoğraf kısıtlarına ve alan erişim kurallarına brifingli uyum sağlanır. İlk kayıt genellikle birkaç gün ister; bu payla açılan talep sorunsuz ilerler ve kayıt açıldıktan sonra işler hızlı döner. Bölgedeki kurumsal tesislerle çalışma geçmişimiz, yeni kayıtlarda referans hızı sağlar — gerekirse referans tesislerimizi paylaşırız.",
            },
            {
                soru: "Karayolundaki depomuzda yarım günlük raf üstü işi var; ekonomik çözüm ne?",
                cevap:
                    "Tur gününe bağlamak: kuzeybatı hattı turlarımız bölgeden düzenli geçer ve tur gününe denk gelen kısa işler nakliyeyi paylaşır — yarım günlük iş, kendi nakliyesini taşımak zorunda kalmaz. 'Tarih esnek' notuyla açılan talep, ilk tur gününe yerleşir. Depo profilinizde işler tekrarlıyorsa ay ritmli toplu gün daha da verimlidir: birikmiş liste tek turda biter. Acil işlerde ise tur beklenmez, standart sevkiyat planlanır — fark fiyatta görünür ve baştan söylenir.",
            },
            {
                soru: "Beton santralimizin bunker cidarında onarım var; hangi makine ve önlem?",
                cevap:
                    "Dizel 4x4 eklemli, yüksek metraj bandında: stabilize saha zemini ve bunker geometrisi bu sınıfı gerektirir. Önlem seti üç katmanlı: toz katsayılı makine bakımı (filtre-soğutma), bant-konveyör hatlarının çalışma bölgesinde kilitlenmesi ve yüksek kotta rüzgâr planı (sabah blokları, sepette ölçüm). Santral operasyonuyla koordinasyon — hangi bunker hangi saatte dolum dışı — işin penceresini belirler. Cidar yüksekliği ve saha fotoğrafıyla keşif, modeli kesinleştirir.",
            },
            {
                soru: "Gıda tesisimizde ve depomuzda ayrı işler var; tek seferde olur mu?",
                cevap:
                    "Olur — iki rejimli tek plan: gıda tarafı hijyen setiyle (temiz makine, iz bırakmayan lastik, alet disiplini) ve uygun pencerede, depo tarafı standart düzenle çalışılır; aynı makine sırayla iki sahayı bitirir ve nakliye teke iner. Sıralama önemlidir — önce gıda sahası (makine en temizken), sonra depo. İki sahanın listesini talepte paylaşın; pencere ve sıra planıyla dönelim. Grup şirketlerinde bu modeli sözleşmeli süreklilik hâline getiriyoruz.",
            },
            {
                soru: "Planlı bakım haftamız için kapasite garantisi alabilir miyiz?",
                cevap:
                    "Erken rezervasyonla evet: kurumsal tesislerin bakım dönemleri bölge kapasitesini hızla bağlar ve takvim netleştiğinde iş listesi + makine karması + operatör planı sözleşmeyle sabitlenir — yedek makine rezervasyonu kritik işler için pakete eklenir. Geç gelen taleplerde dürüst cevap veririz: o hafta kapasite kalmamışsa 'sıkıştırırız' demeyiz. Bakım takviminiz her yıl benzer döneme geliyorsa yıllık çerçeve, kapasiteyi kalıcı güvenceye alır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kahramankazan'ın savunma-havacılık çevresi ve karayolu sanayi hattı kamuya açık bilgidir; iki rejimli çalışma modeli firma pratiğidir.",
    },

    "bolge:polatli": {
        h1: "Polatlı'da Eklemli Platform Kiralama",
        giris:
            "Polatlı, Ankara'nın batı ucunda iki kimliği birleştirir: Türkiye'nin en önemli tahıl havzalarından birinin merkezi ve büyüyen bir organize sanayi bölgesinin ev sahibi. Platform ihtiyacı bu iki kimlikten iki ayrı profille gelir — tarımsal altyapı tarafında tahıl siloları, yem fabrikaları, un değirmenleri ve lisanslı depoculuk tesisleri; OSB tarafında ise gıda işleme, makine imalatı ve karma üretim holleri. Silo bölgesinin işleri yüksek metraj ve toz disiplini ister; OSB işleri klasik hol profilindedir. Ankara'ya mesafe, Temelli hattının bir adım ötesidir ve aynı kural geçerlidir: kısa işler tur ekonomisiyle, büyük işler konaklamayla verimlenir. Bozkırın açık rüzgârı, yüksek silo işlerinin değişmez parametresidir.",
        maddeler: [
            {
                baslik: "Tahıl silolarında yüksek metraj işleri",
                metin:
                    "Silo tesislerinin platform işleri yapının kendisi kadar dikeydir: cidar kaynakları ve boya-onarım, çatı konisi ekipmanları, elevatör kuleleri, dolum boruları ve seviye sensörleri. 20 metre bandına uzanan dizel eklemliler bu profil için gerekir; silolar arası dar geçitlerde bom geometrisi zarf diyagramıyla planlanır. Elevatör kulesi işlerinde yapıya yaslanmadan, bağımsız erişim esastır — platformun değeri, kuleye iskele sarmadan her kota ulaşabilmesidir.",
            },
            {
                baslik: "Organik toz ortamında patlama disiplini",
                metin:
                    "Tahıl tozu, yeterli konsantrasyonda patlayıcı bir ortam oluşturur ve silo-değirmen-yem tesislerinde platform çalışması bu gerçeğin disipliniyle yürür: toz birikimli kapalı hacimlerin (galeri, elevatör şaftı çevresi, filtre odaları) alan sınıflandırması sorulur, sınıflı alanlarda standart makine çalıştırılmaz ve işler temizlik-havalandırma sonrası ölçümlü pencerelere alınır. Açık saha ve dış cidar işleri bu kısıtın dışındadır; iç-dış ayrımı keşifte netleştirilir ve iş planı iki listeye bölünür.",
            },
            {
                baslik: "Hasat takvimiyle ters planlama",
                metin:
                    "Tahıl havzasının yılı, hasat ve alım dönemi etrafında döner: yaz aylarında silolar kesintisiz çalışır, kamyon trafiği zirvededir ve tesise bakım işi sokmak hem zor hem yanlıştır. Doğru pencere tersidir — ilkbahar (hasat öncesi hazırlık: sensör, dolum hattı, çatı bakımı) ve sonbahar sonu (sezon çıkışı onarımları). Bu pencerelerde bölge talebi yoğunlaşır; hasat öncesi haftalar için erken rezervasyon, silo işletmecilerinin yıllık rutini olmalıdır.",
            },
            {
                baslik: "OSB ve yem-un tesislerinde hol işleri",
                metin:
                    "Polatlı OSB ve ilçenin değirmen-yem fabrikalarında işler klasik hol profilindedir: çatı altı aydınlatma, havalandırma, boru-bant üstü erişim ve makine parkı üzerinden tavan noktaları. Akülü eklemli, un-yem tesislerinin toz hassasiyetinde filtre bakım katsayısıyla çalışır; gıda işleme tesislerinde hijyen seti devrededir. OSB'nin kompakt yerleşimi, birden fazla tesisin işini aynı güne bağlamayı kolaylaştırır — ilçe turu modeli burada iyi işler.",
            },
            {
                baslik: "Bozkır rüzgârında silo üstü çalışma",
                metin:
                    "Polatlı ovasının açık coğrafyası rüzgârı kesintisiz taşır ve silo üstü-koni işlerinde bu, planın birinci maddesidir: yüksek kotta sabah blokları, sepette sürekli ölçüm, limitte tartışmasız duruş ve geniş yüzeyli parça (sac, kapak) taşımada ek temkin. Silo dizilerinin arasında rüzgâr kanallaşması yaşanır — iki silo arasındaki geçitte rüzgâr, açık sahadan sert olabilir ve bom pozisyonu buna göre seçilir. Takvim, rüzgâr payıyla verilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Polatlı'da tesis tipi ve iş profili",
                paragraflar: [
                    "Havza ve OSB'nin tesis tipleri, iş profilleri ve çalışma çerçevesi aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Tesis", "Tipik iş", "Kritik disiplin", "Makine"],
                    satirlar: [
                        ["Tahıl silosu", "Cidar, koni, elevatör kulesi", "Toz sınıfı + rüzgâr planı", "Dizel eklemli 20 m bandı"],
                        ["Un değirmeni / yem fabrikası", "Hol içi, bant üstü", "Organik toz + filtre bakımı", "Akülü eklemli"],
                        ["Lisanslı depo", "Çatı, sensör, dolum hattı", "Sezon penceresi", "Dizel/akülü karma"],
                        ["OSB üretim holü", "Aydınlatma, havalandırma", "Standart + hijyen (gıdada)", "Akülü karma"],
                        ["Açık stok/saha", "Direk, dış aydınlatma", "Zemin + rüzgâr", "Dizel 4x4 eklemli"],
                    ],
                },
            },
            {
                baslik: "Silo işlerinde iç-dış ayrımı: iki liste yöntemi",
                paragraflar: [
                    "Silo tesisinin iş listesi keşifte ikiye bölünür. Dış liste (cidar, koni, dış merdiven-platformlar, dolum boruları) standart yüksek metraj düzeniyle, rüzgâr planı eşliğinde yürür. İç liste (galeri, şaft çevresi, filtre odası) alan sınıflandırmasına tabidir: sınıflı alanlarda iş, temizlik-havalandırma-ölçüm zinciri tamamlanıp güvenli pencere belgelendikten sonra yapılır ve bu pencereler tesisin operasyon duruşlarıyla eşzamanlanır.",
                    "İki liste yönteminin değeri nettir: dış işler beklemeden ilerlerken iç işler doğru pencereye planlanır — 'her şey duruş bekliyor' tıkanıklığı yaşanmaz ve konaklamalı modelde makine günü tam verimle kullanılır.",
                ],
            },
            {
                baslik: "Hasat öncesi hazırlık paketi",
                paragraflar: [
                    "Silo ve lisanslı depo işletmecilerine yıllık ritim önerimiz, hasat öncesi hazırlık paketidir: seviye sensörleri ve dolum hattı kontrolleri, çatı-koni bakımı, aydınlatma ve kamera direkleri, kantar çevresi işleri — hepsi ilkbahar penceresinde tek konaklamalı planla bitirilir ve tesis, alım sezonuna eksiksiz girer. Sezon içinde doğan zorunlu işler için acil protokol pakete eklenir: iş tanımları ve pencere düzeni hazırsa, müdahale kamyon trafiğini aksatmadan kısa duruşlarla yapılır.",
                    "Havza genelinde bu paketleri aynı haftalara toplayarak bölge turu kuruyoruz — komşu silo tesislerinin ortak planlaması, hem nakliyeyi böler hem hasat öncesi kapasite sıkışıklığını çözer.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silomuzun dış cidarında boya-onarım var; nasıl planlanır?",
                cevap:
                    "Yüksek metraj dizel eklemliyle, rüzgâr planlı: cidar kotuna göre 20 metre bandı model seçilir, iş sabah bloklarına planlanır ve sepette ölçümle çalışılır — bozkır rüzgârında öğleden sonra yüksek iş, plana değil şansa kalır ve biz şansla çalışmayız. Silolar arası geçitlerde rüzgâr kanallaşması bom pozisyonunu etkiler; keşifte diziliş fotoğrafıyla plan kurulur. Takvim rüzgâr payıyla verilir — cidar metrajınızı paylaşın, gün tahminiyle dönelim.",
            },
            {
                soru: "Elevatör kulemizin üst kotlarına iskele kurmadan çıkılır mı?",
                cevap:
                    "Çıkılır — bu, eklemli platformun kule işlerindeki ana değeridir: makine kule dibinden bağımsız park eder, bom kademeli kırılımla her kota ulaşır ve yapıya yük bindirilmez. İskele sarmanın günler süren kurulumu ve kule çevresini kaplaması yerine, platform aynı gün çalışmaya başlar. Kule yüksekliği bandı aşıyorsa dürüst söylenir ve üst kotlar için alternatif (asılı erişim) yönlendirilir. Kule kotu ve çevre açıklığını paylaşın; zarf kontrolüyle modeli netleştirelim.",
            },
            {
                soru: "Değirmenimizin iç galerisinde iş var; un tozu sorun mu?",
                cevap:
                    "Sorun değil, disiplin konusu: un tozu birikimli kapalı hacimler patlayıcı ortam sınıfına girebilir ve sınıflı alanda standart makine çalıştırmayız. Akış şudur — alanın sınıfı tesisinizden sorulur, gerekiyorsa temizlik-havalandırma yapılır, ölçümle güvenli pencere belgelenir ve iş o pencerede biter. Bu zincir, değirmen duruşlarıyla eşzamanlanır. Sınıf dışı alanlardaki işler (dış cephe, açık bölümler) beklemeden yapılır — keşifte iş listenizi iç-dış olarak ikiye bölüyoruz.",
            },
            {
                soru: "Alım sezonundayız ve dolum hattında arıza var; gelebilir misiniz?",
                cevap:
                    "Geliriz — ama dürüst çerçeveyle: sezon ortasında müdahale, kamyon trafiğinizi aksatmayacak kısa duruş pencereleriyle planlanır ve mesafe nedeniyle aynı gün ulaşım, tur takvimine denk gelmezse zordur; gerçekçi süre ertesi gündür. Kalıcı çözüm, hasat öncesi hazırlık paketi + acil protokoldür: sensör-dolum hattı kontrolleri sezondan önce yapılır, zorunlu müdahalenin pencere düzeni önceden kurulur. Bu yıl için müdahaleyi planlayalım; gelecek sezon için paketi konuşalım.",
            },
            {
                soru: "OSB'deki fabrikamız ve dışarıdaki depomuzun işlerini birleştirebilir miyiz?",
                cevap:
                    "Evet — ilçe turu modeliyle: OSB holü işleri ve depo-silo işleri aynı konaklama dönemine bağlanır, makine iki saha arasında planlı geçişle çalışır ve nakliye teke iner. Polatlı'nın kompakt yerleşimi bu geçişleri kısa tutar. İşlerin rejim farkı (hijyen seti, toz disiplini, rüzgâr planı) sıralamayı belirler — planlamada önce hangi sahanın geleceğini koşullar söyler. İki listeyi talepte paylaşın; tur planıyla dönelim.",
            },
            {
                soru: "Ankara'dan bu mesafeye kısa iş için gelmeye değer mi?",
                cevap:
                    "Tur ekonomisiyle değer: Polatlı, batı hattı turlarımızın uzantısındadır ve tur gününe bağlanan kısa işler nakliyeyi paylaşır — tekil sevkiyat maliyeti doğmaz. 'Tarih esnek' notu, işinizi ilk tur gününe yerleştirir. Tekrarlayan kısa işlerde ay ritmli birikim listesi en verimlisidir. Tarih dayatan tekil acil işte nakliye payı büyür ve teklifte açık görünür — karar, rakamla sizindir. Havza komşularınızla ortak planlama, üçüncü ve en güçlü seçenektir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Polatlı'nın tahıl havzası kimliği ve silo altyapısı kamuya açık bilgidir; organik toz sınıflaması mevzuat çerçevesi, iki liste yöntemi firma pratiğidir.",
    },

    "bolge:kirikkale-osb-cevre-ili": {
        h1: "Kırıkkale OSB'ye Eklemli Platform Hizmeti (Çevre İl)",
        giris:
            "Kırıkkale, Ankara'nın doğu komşusudur ve sanayi kimliği iki ağır kolonda durur: köklü savunma sanayi tesisleri ve rafineri-petrokimya altyapısı; bunların çevresinde OSB'nin metal işleme, makine ve yan sanayi dokusu gelişir. Ankara merkezli filomuz için Kırıkkale, doğu yönündeki ana çevre il hedefidir — mesafe Temelli'nin batıdaki karşılığıdır ve aynı ekonomi kuralları geçerlidir: tur bağlantılı kısa işler, konaklamalı büyük işler. İşin niteliği ise batı hattından farklıdır: rafineri çevresinin izin rejimleri, savunma tesislerinin güvenlik süreçleri ve ağır metal sanayinin vinçli-sıcak ortamları, platform işini İSG çerçevesinin içine oturtur. Eklemli sınıf, bu sahaların hem yüksek metraj hem dar erişim ihtiyacını tek gövdede karşılar.",
        maddeler: [
            {
                baslik: "Rafineri çevresinde izinli çalışma düzeni",
                metin:
                    "Kırıkkale'nin rafineri ve petrokimya çevresindeki işler, çalışma izni rejimiyle yürür: iş tanımı-risk analizi-gaz ölçümü zinciri, alan sınıflandırması (Zone) kontrolü ve günlük izin yenileme. Standart makine sınıflı alana girmez; işler ya arındırılmış-ölçülmüş pencerelerde ya Zone dışı erişim geometrisiyle yapılır. Evrak setimiz bu sistemlere hazır formatta gider ve sevkiyat, izin onayına senkron planlanır — makine kapıda izin beklemez, izin çıkınca makine yoldadır.",
            },
            {
                baslik: "Savunma tesislerinde süreç disiplini",
                metin:
                    "Köklü savunma tesislerinin yüklenici süreçleri kurumsaldır: personel güvenlik bildirimi, kimlik-geçiş düzeni, cihaz kısıtları, alan bazlı erişim ve formatlı iş kayıtları. Operatör dosyalarımız bu süreçlere hazırdır; ilk kayıt payıyla açılan talepler sorunsuz ilerler ve kayıt sonrası işler hızlı döner. Gizlilik kuralları operatör brifinginin sabit maddesidir; iş kayıtları tesis formatında teslim edilir.",
            },
            {
                baslik: "Ağır metal sanayinde vinç ve ısı ortamı",
                metin:
                    "OSB'nin metal işleme ve makine imalat tesislerinde ortam ağırdır: gezer vinç trafiği süreklidir, sıcak iş bölgeleri (kaynak, taşlama, ısıl işlem) yayılıdır ve zeminde malzeme-skrap hareketi yoğundur. Platform düzeni buna göre kurulur — vinç kilitleme pencereleri telsiz koordinasyonuyla kısa tutulur, sıcak bölge mesafeleri iş planına işlenir, dönüş alanı (kuyruk taşması) bariyerlenir. Bom sınıfının kemer-lanyard kuralı bu ortamda hiç esnemez.",
            },
            {
                baslik: "Doğu hattında mesafe ekonomisi",
                metin:
                    "Ankara-Kırıkkale hattı, batı koridorunun doğudaki simetriğidir ve aynı model geçerlidir: kısa işler tur günlerine bağlanır ve nakliyeyi paylaşır; büyük işler konaklamayla mesafeyi eritir; kritik terminli işlerde yedek plan kurulur. Doğu yönü turlarımız Kırıkkale OSB'yi düzenli kapsar; rafineri-savunma tesislerinin planlı bakım dönemlerinde kapasite erken bağlanır. Lowbed gereken yüksek modeller bir gün önceden planlanır.",
            },
            {
                baslik: "OSB yan sanayisinde pratik işler",
                metin:
                    "Büyük tesislerin çevresindeki yan sanayi halkası — talaşlı imalat, kaynaklı imalat, yüzey işlem — orta ölçekli hol profilinde çalışır: vinç yolu bakımı, aydınlatma, havalandırma ve pano üstü işler. Akülü eklemli bu profili karşılar; tezgâh dizilimi üzerinden erişim, dar hol geometrisinde zarf kontrolüyle planlanır. Yan sanayi işleri kısa ve dağınıktır — OSB içi toplu gün modeli (birkaç tesisin işi tek turda) bölgede en verimli düzendir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kırıkkale'de saha tipi ve çalışma çerçevesi",
                paragraflar: [
                    "Doğu hattının saha tipleri ve çalışma çerçevesi aşağıdadır. İzin-güvenlik süreçleri, iki büyük saha tipinde planlamanın ilk adımıdır.",
                ],
                tablo: {
                    basliklar: ["Saha", "Süreç çerçevesi", "Tipik iş", "Makine"],
                    satirlar: [
                        ["Rafineri-petrokimya çevresi", "İzin rejimi + Zone kontrolü", "Boru köprüsü, aydınlatma, yapı bakımı", "Şartnameye uygun eklemli"],
                        ["Savunma tesisi", "Güvenlik bildirimi + kayıt", "Hol ve altyapı bakımı", "Kayıtlı operatörle akülü/dizel"],
                        ["Ağır metal holü", "Vinç kilitleme + sıcak bölge", "Vinç yolu, tavan işleri", "Eklemli 16 – 20 m"],
                        ["Yan sanayi holü", "Standart", "Aydınlatma, pano üstü", "Akülü eklemli"],
                        ["Dış saha-altyapı", "Zemin + rüzgâr", "Direk, cephe", "Dizel 4x4 eklemli"],
                    ],
                },
            },
            {
                baslik: "İzin senkron sevkiyat: doğu hattında da aynı ilke",
                paragraflar: [
                    "Rafineri ve savunma sahalarının izin süreçleri günler alabilir ve mesafeli bölgede yanlış sıralamanın maliyeti büyür: izinden önce giden makine kapıda bekler, kira sayacı boşa işler. İlkemiz burada da senkrondur — izin süreci talep günü başlar, evrak setleri (makine + operatör) sisteme formatlı girer ve sevkiyat, onay teyidine bağlanır. Düzenli çalıştığımız sahalarda açık kayıtlar, süreci iş-özel adımlara indirger.",
                    "Bu ilkenin doğu hattındaki ek değeri, tur planıyla birleşmesidir: izin onayı tur gününe denk getirildiğinde nakliye de paylaşılır — izin takvimi ve tur takvimi tek planda okunur.",
                ],
            },
            {
                baslik: "Ağır sanayi ortamında operatör yetkinliği",
                paragraflar: [
                    "Kırıkkale profilinin üç sahası da (rafineri çevresi, savunma, ağır metal) operatör yetkinliğini sınayan ortamlardır: izin sistemlerini okuyabilmek, vinç-sıcak bölge koordinasyonunu yürütebilmek, gizlilik-kayıt disiplinini taşıyabilmek. Operatör atamalarını bu profile göre yaparız — ağır sanayi deneyimli, izin sistemlerine aşina, kayıt düzeni oturmuş operatörler doğu hattının sabit ekibidir.",
                    "Bu yetkinliğin işletmeye görünen karşılığı pürüzsüzlüktür: saha İSG ekibiyle aynı dili konuşan operatör, gözetim yükü yaratmaz; izin masasında eksik evrak çıkarmayan dosya, süreci bekletmez. Ağır sanayide 'sorunsuz iş', tesadüf değil hazırlık ürünüdür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ankara'dan Kırıkkale'ye hizmet gerçekçi mi, yerel firma mı arayalım?",
                cevap:
                    "Rakamla karar verin: doğu yönü turlarımız bölgeyi düzenli kapsar — tur bağlantılı işlerde nakliye payı düşüktür, konaklamalı büyük işlerde mesafe zaten erir ve teklifte nakliye ayrı satır olarak görünür. İşin niteliği de denklemin parçasıdır: rafineri-savunma-ağır metal sahalarının izin ve İSG rejimlerine hazır dosya ve deneyimli operatör, her yerel seçenekte bulunmaz. İki teklifi yan yana koyun; fark, çoğu zaman nakliyeden değil süreç yetkinliğinden çıkar.",
            },
            {
                soru: "Rafineri sahamızdaki boru köprüsü işi için süreç nasıl başlar?",
                cevap:
                    "İzin zinciriyle: iş tanımı ve risk analizi dosyası hazırlanır, makine-operatör evrakları saha sisteminize formatlı girer, alan sınıfı (Zone) kontrolü yapılır ve gaz ölçüm şartlı izin süreci işletilir. Sevkiyat, izin onayına senkron planlanır — makine kapıda beklemez. Zone içi noktalar varsa iş, arındırma-ölçüm pencerelerine veya Zone dışı erişim geometrisine planlanır. Süreç talep günü başlar; düzenli çalıştığımız sahalarda kayıtlar açık olduğundan yalnızca iş-özel adımlar kalır.",
            },
            {
                soru: "Tesisimizde gezer vinç sürekli çalışıyor; tavan işi üretimi durdurur mu?",
                cevap:
                    "Durdurmaz — kısa kilitleme pencereleriyle: bom ile kancanın aynı düşeye gireceği anlar telsiz koordinasyonuyla dakika bazında yönetilir, pencereler üretim ritminizin doğal boşluklarına denk getirilir ve iş listesinin vinç hattıyla kesişmeyen bölümü hiç kilitleme gerektirmeden ilerler. Sıcak iş bölgelerinin mesafeleri plana işlenir. Keşifte listeyi 'kesişen/kesişmeyen' diye ayırıyoruz — ağır metal hollerinde bile kesişen kısım çoğu zaman azınlıkta kalır.",
            },
            {
                soru: "Savunma tesisimize giriş için güvenlik süreci uzun; nasıl hızlanır?",
                cevap:
                    "Süreci hızlandırmanın tek meşru yolu hazırlıktır: personel bilgileri ve belgeler bildirim formatında eksiksiz sunulur, operatör dosyası (MYK, eğitimler, sağlık) tam gider ve kayıt, tesisin takviminde pürüzsüz ilerler — eksik evrakla uzayan tur, en yaygın gecikme nedenidir ve bizde yaşanmaz. İlk kayıt payıyla açılan talep, sonraki tüm işleri hızlandırır: kayıt açıkken yeni iş, gün içinde planlanabilir hâle gelir. Referans tesislerimiz, güvenlik biriminizin sorularına hazır cevaptır.",
            },
            {
                soru: "OSB'deki üç yan sanayi tesisimizin küçük işleri var; ayrı ayrı mı planlanır?",
                cevap:
                    "Hayır — OSB toplu gün modeli tam bunun için: üç tesisin listesi tek tur gününe bağlanır, makine tesisleri sırayla dolaşır, nakliye bölüşülür ve her tesis yalnızca kendi iş saatlerini üstlenir. Yan sanayi hollerinin benzer profili (vinç yolu, aydınlatma, pano üstü) geçişleri hızlandırır. Listeleri 'ortak güne uygun' notuyla açın; sıralamayı iş sürelerine göre kurarız. Aylık ritme bağlanan toplu gün, doğu hattında en düşük birim maliyeti üretir.",
            },
            {
                soru: "Kritik bir montaj işimiz var; makine arızası durumunda planınız ne?",
                cevap:
                    "Katmanlı güvence: telefon desteğiyle başlar, çözülmezse teknisyen doğu tur hattından yönlendirilir, onarım uzayacaksa ikame makine sevk edilir — süreler sözleşmede saatle taahhütlüdür. Mesafeli bölgede kritik işler için bir katman daha öneririz: yedek makine rezervasyonu — bekleyen montaj ekibinin saati, yedeğin bedelinden pahalıdır. Normal kullanım arızalarında sürecin maliyeti bize aittir; kritik iş planını sözleşme aşamasında birlikte kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kırıkkale'nin savunma-rafineri kimliği kamuya açık bilgidir; izin senkron sevkiyat ve tur modeli firma pratiğidir.",
    },

    "bolge:siteler-mobilya-sanayi-bolgesi": {
        h1: "Siteler Mobilya Sanayi Bölgesi'nde Eklemli Platform Kiralama",
        giris:
            "Siteler, Ankara'nın en köklü mobilya imalat kümesidir ve dokusu, kentin diğer sanayi bölgelerinden farklı bir geometri sorunu doğurur: parseller küçük, bina cepheleri bitişik, sokaklar araç trafiğine göre değil el arabası ve kısa mesafeli malzeme taşımaya göre şekillenmiştir. Bu ölçek, atölye kapılarının darlığında ve sokak genişliklerinde doğrudan görülür — çoğu ana giriş, standart bir aracın zorlukla sığdığı ölçüdedir. Eklemli platformun buradaki rolü, bu darlığı bir kısıt olarak değil bir zarf problemi olarak ele almaktır: makine geniş bir alana değil, doğru boyutlu bir boşluğa ve doğru kırılım açısına ihtiyaç duyar. Bu sayfada Siteler'in dar sokak-dar kapı geometrisinde eklemli kolun nasıl konumlandığını, hangi ölçülerin işi belirlediğini ve hangi model sınıfının bu dokuya uyduğunu anlatıyoruz — bakım takvimi veya iş rutini değil, salt erişim geometrisi.",
        maddeler: [
            {
                baslik: "Dar kapı ölçüsü: makine seçiminin ilk filtresi",
                metin:
                    "Siteler'deki atölye ve mağaza girişlerinin büyük bölümü 1,2-1,8 metre bandında kapı genişliğine sahiptir ve bu ölçü, hangi makinenin sahaya girebileceğini standart metrajdan önce belirler. Şase genişliği kapı ölçüsünü aşan bir makine, ne kadar yüksek çıkarsa çıksın o kapıdan içeri giremez — bu yüzden Siteler işlerinde ilk soru 'kaç metre çıkıyor' değil 'kapıdan geçiyor mu'dur. Dar şaseli kompakt eklemli modeller (tipik 0,75-0,9 metre şase genişliği) bu bölgenin standart tercihidir; kapı ölçüsü keşifte cetvelle doğrulanır, tahmine bırakılmaz.",
            },
            {
                baslik: "Bitişik cephe sokaklarında park ve kırılım açısı",
                metin:
                    "Bölgenin bitişik nizam yapılaşması, makinenin hedefin tam karşısına değil çoğunlukla sokağın bir kenarına park etmesini zorunlu kılar; bu da düz bir dikey çıkış yerine açılı bir kırılım gerektirir. Eklemli bomun üst ekleminden kırılabilme kabiliyeti tam bu noktada devreye girer — sokağın darlığı yüzünden hedefin tam altına gelinemeyen durumlarda bom, yandan yaklaşıp üstten kırılarak cepheye ulaşır. Bu geometri, zarf diyagramında park noktası ile hedef arasındaki yatay-dikey mesafe üçgeni çizilerek doğrulanır; sokak genişliği dar olduğunda park açısı da ayrıca hesaba katılır.",
            },
            {
                baslik: "Komşu bina çıkıntıları ve tabela engelleri",
                metin:
                    "Siteler sokaklarında mağaza tabelaları, gölgelikler ve üst kat balkon çıkıntıları sık rastlanan engellerdir ve bunlar genellikle hedefin tam önünde, erişim hattının üzerinde bulunur. Bom, bu çıkıntıların altından geçip üzerinden kırılarak veya yan boşluktan sıyrılarak hedefe ulaşır; hangi yolun uygun olduğu, çıkıntının derinliği ve yüksekliği ölçülerek zarf diyagramına işlenir. Komşu bina cephesine temas riski olan dar geçişlerde bom hareketleri yavaşlatılmış modda yapılır ve gerekirse geçici koruma (yumuşak dolgu) komşu cepheye uygulanır.",
            },
            {
                baslik: "Dönüş yarıçapı ve kuyruk taşması hesabı",
                metin:
                    "Dar sokaklarda makinenin kendi içinde dönebilmesi kadar önemli olan bir başka ölçü, şase arkasının dönüş sırasında ne kadar savrulacağıdır (kuyruk taşması). Siteler'in bazı sokaklarında bina köşeleri ve elektrik direkleri dönüş yarıçapını daraltır; bu direklerin ve köşelerin konumu keşifte işaretlenir ve makine, geri manevra gerektirmeyecek şekilde tek seferde konumlandırılır. Dar şaseli modellerin sıfıra yakın kuyruk taşması, bu sokaklarda ikinci bir manevra denemesinin önüne geçer — Siteler'de zaman kaybı, çoğunlukla yanlış park pozisyonundan doğar.",
            },
            {
                baslik: "El arabası trafiğiyle paylaşılan dar geçitler",
                metin:
                    "Bölgenin malzeme taşıma alışkanlığı hâlâ büyük ölçüde el arabası ve kısa mesafeli manuel taşımaya dayanır; bu da makinenin çalıştığı sokağın aynı anda başka bir işlevi daha taşıdığı anlamına gelir. Çalışma alanı bariyerlenirken el arabası geçiş şeridi tamamen kapatılmaz, dar bir koridor bırakılır ve makine hareketleri bu koridora göre zamanlanır. Yoğun teslimat saatlerinde (genellikle sabah erken) çalışma geçici olarak durdurulup geçiş açılır — bu, Siteler'in kendine özgü trafik ritmine uyumun parçasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Siteler'de dar geçiş ölçü tablosu",
                paragraflar: [
                    "Bölgenin tipik dar geçiş senaryoları ve bunlara karşılık gelen makine-geometri eşleşmesi aşağıdadır. Her satır, keşifte doğrulanan bir ölçü eşiğine dayanır.",
                ],
                tablo: {
                    basliklar: ["Engel", "Tipik ölçü", "Geometri çözümü", "Makine"],
                    satirlar: [
                        ["Dar atölye kapısı", "1,2 – 1,8 m genişlik", "Şase genişliği kapıdan dar model", "Kompakt eklemli, 0,75 – 0,9 m şase"],
                        ["Bitişik cephe sokağı", "3 – 4 m sokak genişliği", "Yan park + açılı kırılım", "Dar şase eklemli"],
                        ["Tabela/gölgelik çıkıntısı", "0,5 – 1,2 m derinlik", "Altından geçiş veya üstten kırılım", "Eklemli, yavaşlatılmış mod"],
                        ["Köşe dönüşü / direk yakını", "Değişken", "Kuyruk taşması hesabıyla tek seferde park", "Sıfıra yakın kuyruk taşmalı model"],
                        ["El arabası geçiş koridoru", "~0,8 m bırakılan şerit", "Zamanlanmış bariyer, saat dışı çalışma", "Akülü kompakt eklemli"],
                    ],
                },
            },
            {
                baslik: "Zarf diyagramı Siteler'de neden zorunlu",
                paragraflar: [
                    "Siteler'in ölçek küçüklüğü, zarf diyagramını isteğe bağlı bir detaydan zorunlu bir adıma çevirir: standart bir sanayi sahasında birkaç metrelik park hatası genellikle iş yapılabilirliğini etkilemezken, Siteler'in dar sokağında aynı hata makinenin hiç girememesi anlamına gelebilir. Bu yüzden keşifte üç ölçü mutlaka birlikte alınır — sokak/kapı genişliği, park noktasından hedefe yatay mesafe, hedefin yerden kotu — ve bu üçlü diyagrama işlenerek makinenin geometrik olarak ulaşıp ulaşamayacağı saha ziyareti öncesinde netleşir.",
                    "Bu disiplinin pratik sonucu, 'gelip bakalım' turlarının Siteler'de neredeyse hiç yapılmamasıdır: ölçüler fotoğraf ve cetvelle önceden toplanır, diyagram masada kontrol edilir ve saha ziyareti doğrudan işin yapılmasıyla başlar.",
                ],
            },
            {
                baslik: "Dar alanda bom güvenliği",
                paragraflar: [
                    "Eklemli platformun dar alan güvenlik kuralları, Siteler'in bitişik dokusunda ayrı bir ağırlık kazanır: bom bir cepheye veya çıkıntıya temas ettiğinde sepet ani yaylanma yapabilir, bu yüzden tam vücut kemeri ve kısa lanyard kullanımı sokak genişliği ne olursa olsun tavizsizdir. Dönüş alanı, kuyruk taşması payıyla birlikte bariyerlenir ve bu alan, komşu atölyelerin giriş-çıkışını tamamen kapatmayacak şekilde en dar hâliyle kurulur.",
                    "Komşu cepheye olan mesafe, çalışma süresince sabit tutulur; bom hareketi sırasında mesafe daralıyorsa operatör hareketi durdurup geometriyi yeniden değerlendirir. Bu üç kural — kemer, dar bariyer, sabit mesafe kontrolü — Siteler brifinginin sabit maddeleridir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizin kapısı çok dar, standart bir makine giremiyor; çözüm var mı?",
                cevap:
                    "Büyük olasılıkla evet — Siteler'in dar kapı dokusu için özel olarak kompakt, dar şaseli eklemli modeller kullanıyoruz; şase genişliği tipik 0,75-0,9 metre bandındadır ve çoğu atölye kapısından geçer. Kapı ölçüsünü santimetre hassasiyetinde ölçüp paylaşmanız yeterli — geçmiyorsa dürüst söyleriz ve alternatif erişim noktası (yan kapı, komşu boşluk) birlikte değerlendirilir. Kapı genişliği ile birlikte kapı yüksekliğini de belirtin; bazı modellerde sepet katlanmış hâlde bile yükseklik sınırlayıcı olabilir.",
            },
            {
                soru: "Sokağımız çok dar, karşı cepheye tam park edemiyoruz; bom yetişir mi?",
                cevap:
                    "Bunu zarf diyagramı belirler: makine sokağın kenarına açılı park ettiğinde bom, üst eklemden kırılarak hedefe yandan yaklaşır — düz dikey çıkış şart değildir. Sokak genişliği, park noktasından hedefe yatay mesafe ve hedefin kotu üçlüsünü ölçüp diyagrama işlediğimizde 'ulaşır mı' sorusu kesin cevap bulur. Sokağın bir fotoğrafını üstten ve yandan çekip göndermeniz, telefonla tarif etmekten çok daha hızlı sonuç verir.",
            },
            {
                soru: "Mağazamızın önünde büyük bir tabela var, cephe boyası için engel oluşturuyor mu?",
                cevap:
                    "Genellikle oluşturmaz — bom, tabelanın altından geçip üzerinden kırılarak veya yan boşluktan sıyrılarak cepheye ulaşabilir; hangi yolun uygun olduğunu tabelanın derinlik ve yükseklik ölçüsü belirler. Komşu cepheye temas riski olan dar geçişlerde bom hareketleri yavaşlatılmış modda yapılır. Tabelanın çıkıntı derinliğini ve sokağın karşı kaldırıma kadar olan genişliğini ölçüp paylaşırsanız, geçiş yolunu keşif öncesinde çizeriz.",
            },
            {
                soru: "Sokağımızın köşesinde elektrik direği var, makine dönerken çarpar mı?",
                cevap:
                    "Çarpmaması için tam bu yüzden kuyruk taşması hesabı yapılır: makinenin şase arkası dönüş sırasında ne kadar savrulacağı önceden hesaplanır ve direğin konumu bu hesaba göre park noktasını belirler. Dar şaseli modellerin kuyruk taşması sıfıra yakındır ve bu, köşeli sokaklarda ikinci manevra denemesini gereksiz kılar. Direğin sokak köşesine uzaklığını ve sokağın o noktadaki genişliğini keşifte ölçüp doğru park pozisyonunu işaretliyoruz.",
            },
            {
                soru: "Sokağımızda gün boyu el arabasıyla malzeme taşınıyor; iş sırasında geçiş kapanır mı?",
                cevap:
                    "Tamamen kapanmaz — çalışma alanı bariyerlenirken el arabası geçişi için dar bir koridor bilinçli olarak açık bırakılır ve makine hareketleri bu koridoru bloke etmeyecek şekilde zamanlanır. Yoğun teslimat saatlerinde (genellikle sabah erken) kısa süreli duraklamalar olur, bu süreler işin toplam takvimine baştan eklenir. Sokağınızın en yoğun taşıma saatlerini bize bildirirseniz çalışma programını o saatlerin dışına planlarız.",
            },
            {
                soru: "Siteler'deki tüm atölyeler bu kadar dar mı, yoksa geniş sokaklar da var mı?",
                cevap:
                    "Bölge homojen değildir — ana caddelere yakın kesimlerde nispeten geniş, araç trafiğine daha uygun sokaklar bulunurken, iç parsellere doğru gidildikçe sokaklar daralır ve bitişik nizam yoğunlaşır. Bu yüzden 'Siteler işi' tek bir standart makineyle tanımlanmaz; her adresin sokak ve kapı ölçüsü ayrı ayrı değerlendirilir. Adresinizi paylaştığınızda bölgenin o kesimine dair bildiğimiz genel doku bilgisini paylaşır, kesin ölçüyü yine de keşifle doğrularız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Siteler'in mobilya imalat yoğunluğu ve dar/bitişik parsel dokusu kamuya açık bilgidir; zarf diyagramı ve kuyruk taşması hesabı EN 280 ve üretici standartlarıdır.",
    },

    "bolge:sasmaz-sanayi-sitesi": {
        h1: "Şaşmaz Sanayi Sitesi'nde Eklemli Platform Kiralama",
        giris:
            "Şaşmaz, Ankara'nın oto sanayi ağırlıklı kümelenmelerinden biridir ve bu ağırlık, sahanın fiziksel düzenine doğrudan yansır: servis dükkânları, yedek parçacılar ve kaporta-boya atölyeleri, birbirine yakın parsellerde ve genellikle dar aralıklarla ayrılmış blok sıralarında konuşlanır. Bir servisin önünde çalışırken hemen yanındaki servisin araç giriş-çıkışının kesintisiz sürmesi, bölgenin standart işleyiş koşuludur. Bu da eklemli platform için özel bir manevra problemi doğurur: makinenin kendisi dar aralığa sığmalı, aynı zamanda o aralıktaki araç trafiğini uzun süre bloke etmemelidir. Bu sayfada Şaşmaz'ın dar aralıklı oto sanayi dokusunda eklemli kolun manevra ve konumlandırma geometrisini anlatıyoruz — iş rutini veya bakım takvimi değil, sahanın fiziksel erişim problemi.",
        maddeler: [
            {
                baslik: "Servis aralıkları: standart manevra alanının altında",
                metin:
                    "Şaşmaz'daki servis blokları arasındaki aralıklar, çoğunlukla bir aracın park edip kapılarını açabileceği kadar geniştir — bu, geniş açılı bir makine manevrası için yeterli değildir. Eklemli platformun dar şase ve düşük dönüş yarıçapı özellikleri, tam bu aralıkta devreye girer: makine aracın park edeceği genişlikte bir boşluğa girip, bomunu dikey kaldırarak hedefe ulaşabilir. Aralığın gerçek genişliği, iki bina arasındaki en dar noktadan (genellikle saçak veya çıkma noktasından) ölçülür; bu ölçü keşifte doğrulanmadan makine sahaya yönlendirilmez.",
            },
            {
                baslik: "Komşu servisin araç trafiğini kesmeyen konumlandırma",
                metin:
                    "Şaşmaz'ın işleyiş ritmi, komşu servislerin sürekli araç kabul-teslim yapmasına dayanır ve bu, makinenin park pozisyonunu salt geometrik değil operasyonel bir karar hâline getirir. Makine, hedef servisin önüne değil genellikle yan aralığa veya kendi servisinin içine konumlanır ve bom, oradan komşu cepheye kırılarak ulaşır — böylece komşu servisin araç giriş şeridi açık kalır. Bu konumlandırma, aynı zamanda kuyruk taşması hesabıyla desteklenir: dönüş sırasında şase arkasının komşu araç şeridine taşmaması ayrıca kontrol edilir.",
            },
            {
                baslik: "Kaporta-boya atölyelerinde tavan ve cephe erişimi",
                metin:
                    "Kaporta-boya atölyelerinin kabin yapıları ve boyahane bacaları, tavan yüksekliğinde düzensiz bir profil oluşturur; bu profildeki hedeflere (baca temizliği, çatı membran onarımı, havalandırma ünitesi) düz bir çıkışla değil, kabin gövdesinin etrafından dolanan bir erişimle ulaşılır. Eklemli bom, kabinin yan tarafından park edip üst eklemden kırılarak bacanın veya çatı elemanının üzerine uzanır. Boya tozu ve solvent buharı bulunan alanlarda elektrik aksamı koruması ve kıvılcım kaynağından kaçınma, geometri planlamasının parçası olarak değerlendirilir.",
            },
            {
                baslik: "Yedek parça depolarında raf aralığı manevrası",
                metin:
                    "Bölgedeki yedek parça depolarının iç düzeni, dar raf aralıklarıyla yüksek doluluk oranını birleştirir; raf üstü etiketleme, aydınlatma veya tavan tesisatı işlerinde makine bu aralıklardan birine girip komşu raflara zarar vermeden bom hareketi yapmak zorundadır. Kompakt iç mekân eklemli modeller, raf koridoru genişliğine uygun şase ile seçilir ve bom hareketleri, raf kenarlarına belirlenmiş güvenlik mesafesi korunarak yönlendirilir. Koridor genişliği ve raf yüksekliği, keşifte birlikte ölçülür.",
            },
            {
                baslik: "Çoklu servis işlerinde geçiş sırası ve manevra süresi",
                metin:
                    "Aynı sokaktaki birden fazla servisin işi tek güne toplandığında, iş süresinin önemli bir kısmını manevra değil geçiş oluşturur — makine bir servisten diğerine geçerken dar aralıkta yeniden konumlanır ve bu geçiş süresi, dar dokuda standart sanayi sahasına göre daha uzundur. Sıralama, komşu servislerin araç trafiği en düşük olduğu saatlere göre kurulur ve her geçiş için ayrı bir konumlandırma kontrolü yapılır. Bu, Şaşmaz'da toplu iş planlamasının salt lojistik değil manevra süresi hesabı da içermesinin nedenidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şaşmaz'da aralık-manevra-makine eşleşmesi",
                paragraflar: [
                    "Bölgenin tipik dar aralık senaryoları ve bunlara karşılık gelen manevra çözümü aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Tipik aralık", "Manevra çözümü", "Makine"],
                    satirlar: [
                        ["Servis blokları arası", "Araç park genişliği kadar", "Dar giriş + dikey kaldırma", "Kompakt eklemli, dar şase"],
                        ["Komşu servis önü", "Değişken, trafik açık kalmalı", "Yan konum + bom kırılımı", "Sıfıra yakın kuyruk taşmalı"],
                        ["Boyahane kabin çevresi", "Kabin gövdesi kadar dar", "Yandan dolanan erişim", "Eklemli, kıvılcım korumalı"],
                        ["Yedek parça raf koridoru", "Raf aralığı genişliği", "Koridor içi kademeli erişim", "İç mekân kompakt eklemli"],
                        ["Çoklu servis geçişi", "Sokak boyu değişken", "Trafik düşük saate göre sıralama", "Dar şase eklemli"],
                    ],
                },
            },
            {
                baslik: "Manevra alanı hesabı: servis genişliğinden farklı bir ölçü",
                paragraflar: [
                    "Şaşmaz'da sık yapılan bir hata, servis dükkânının kendi genişliğini manevra alanı sanmaktır — oysa makinenin ihtiyaç duyduğu alan, servis genişliği değil, park pozisyonundan dönüş yarıçapına kadar olan bileşik alandır. Bu alan, makinenin giriş açısı, dönüş yarıçapı ve kuyruk taşmasının toplamından oluşur ve dar aralıklı sahada bu üç bileşenin ayrı ayrı ölçülmesi gerekir. Keşifte bu üçlü, aralığın fotoğrafı üzerine işaretlenir ve makinenin geçip geçemeyeceği masada netleşir.",
                    "Bu hesabın atlanması, sahada 'giremedi' sürprizinin en yaygın nedenidir; Şaşmaz'ın dar dokusunda bu sürpriz, komşu servisin trafiğini de kilitleyebileceği için özellikle maliyetlidir.",
                ],
            },
            {
                baslik: "Dar aralıkta bom ve dönüş güvenliği",
                paragraflar: [
                    "Dar servis aralıklarında çalışırken iki risk öne çıkar: bomun komşu cepheye veya araca temas etmesi ve dönüş sırasında kuyruk taşmasının komşu şeride girmesi. Birinci risk için bom hareketleri yavaşlatılmış modda yapılır ve komşu cepheye sabit güvenlik mesafesi korunur; ikinci risk için dönüş alanı, komşu servisin araç şeridine taşmayacak şekilde daraltılmış bariyerle işaretlenir ve gerekiyorsa geçici trafik yönlendirmesi kısa süreli uygulanır.",
                    "Kaporta-boya atölyelerinin yakınında ayrıca kıvılcım kaynağı kontrolü yapılır — solvent buharı bulunan ortamlarda elektrik bağlantı noktası ve şarj konumu bu gözle seçilir. Bu kurallar, Şaşmaz brifinginin sabit maddeleridir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Servisimizin önü çok dar, yan servisin araç girişini kapatmadan çalışabilir misiniz?",
                cevap:
                    "Genellikle evet — makineyi hedefin tam önüne değil, komşu servisin araç şeridini açık bırakacak bir yan konuma yerleştirip bomu oradan kırarak hedefe ulaştırıyoruz. Bu konumlandırma, kuyruk taşması hesabıyla desteklenir: dönüş sırasında şase arkasının komşu şeride taşmaması ayrıca kontrol edilir. Servis aralığının genişliğini ve komşu servisin araç giriş yoğunluğunu keşifte netleştirip konumu buna göre planlıyoruz.",
            },
            {
                soru: "İki servis binası arasındaki aralık bir araç park genişliği kadar; makine sığar mı?",
                cevap:
                    "Çoğu durumda sığar — dar şaseli kompakt eklemli modeller tam bu genişlik için seçilmiştir. Ama 'sığar mı' sorusunun kesin cevabı, aralığın en dar noktasından (genellikle saçak veya çıkma seviyesinden) alınan ölçüyle gelir; zemin seviyesindeki genişlik yanıltıcı olabilir çünkü üst kattaki çıkmalar aralığı daraltır. Aralığın hem zemin hem üst kat ölçüsünü fotoğrafla paylaşın, geçip geçmeyeceğini keşif öncesinde söyleyelim.",
            },
            {
                soru: "Boyahane kabininin arkasındaki bacaya erişim gerekiyor; kabin gövdesi engel mi?",
                cevap:
                    "Engel ama aşılabilir bir engel — makine kabinin yan tarafından park edip bomunu üst eklemden kırarak kabin gövdesinin etrafından dolanıp bacaya uzanır. Solvent buharı ihtimaline karşı elektrik aksamı korumalı ve kıvılcım kaynağından kaçınan bir çalışma düzeni uygularız; bu, boyahane yakınındaki her işimizde standarttır. Kabinin yüksekliğini ve bacanın konumunu ölçüp paylaşırsanız erişim yolunu keşifte çizeriz.",
            },
            {
                soru: "Yedek parça deposundaki raf aralıkları dar, tavan aydınlatması değişecek; raflara zarar gelir mi?",
                cevap:
                    "Doğru model ve mesafe disipliniyle gelmez — iç mekân kompakt eklemli, koridor genişliğine uygun şaseyle seçilir ve bom hareketleri raf kenarlarına belirlenmiş güvenlik mesafesi korunarak yapılır. Koridor genişliğini ve raf yüksekliğini keşifte ölçüp uygun modeli belirliyoruz; koridor makinenin en dar şasesinden bile darsa, o bölüm için farklı bir erişim noktası (koridor ucundan uzanım) değerlendirilir.",
            },
            {
                soru: "Aynı sokakta dört servisin işi var; hepsini tek günde nasıl bitirirsiniz?",
                cevap:
                    "Sıralı geçiş planıyla: işler, komşu servislerin araç trafiğinin en düşük olduğu saatlere göre sıralanır ve her geçişte makine yeniden konumlandırılır — dar dokuda bu konumlandırma standart sanayi sahasına göre biraz daha uzun sürer, bunu takvime baştan ekleriz. Nakliye tek seferle dört servise bölünür. Sokaktaki servislerin listesini ve varsa yoğun saatlerini bildirirseniz sıralamayı buna göre kurarız.",
            },
            {
                soru: "Şaşmaz'daki tüm servisler bu kadar dar mı yerleşmiş?",
                cevap:
                    "Hayır, bölge tek tip değildir — bazı bloklar arasında araç manevrasına yetecek genişlikte aralıklar bulunurken, bazı iç sıralarda aralıklar oldukça dardır. Bu yüzden Şaşmaz için tek bir standart makine önerisi vermeyiz; her servisin aralık ölçüsü ayrı değerlendirilir. Adresinizi ve mümkünse aralığın bir fotoğrafını paylaşın, hangi sınıf makinenin uygun olduğunu keşif öncesinde söyleyelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Şaşmaz'ın oto sanayi ağırlıklı kümelenme yapısı kamuya açık bilgidir; manevra alanı hesabı ve kuyruk taşması EN 280 ve üretici standartlarıdır.",
    },

    "bolge:altindag": {
        h1: "Altındağ'da Eklemli Platform Kiralama",
        giris:
            "Altındağ, Ankara'nın en eski yerleşim dokusuna sahip ilçelerinden biridir ve bu doku, sokak planlamasında modern imar mantığından önce şekillenmiş bir düzeni taşır: dar, kıvrımlı sokaklar, düzensiz cephe hizaları, bazı noktalarda araç geçişinin zaten güç olduğu dik ve dar geçitler. Bu eskilik, platform erişimi açısından net bir sonuç doğurur — düz, geniş bir cadde üzerinden hedefe park edip dikey çıkmak, Altındağ'ın büyük bölümünde mümkün olan senaryo değildir. Eklemli platformun buradaki değeri, tam bu dar-eski dokuda kırılan geometriyi telafi edebilmesidir: sokağın izin verdiği en dar noktadan girip bomu kıvırarak hedefe ulaşmak. Bu sayfada Altındağ'ın eski dokulu sokaklarından erişim problemini ve eklemli çözüm desenlerini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kıvrımlı ve dar sokaklarda giriş noktası tespiti",
                metin:
                    "Altındağ'ın eski yerleşim dokusunda sokaklar çoğunlukla düz bir hat izlemez; kıvrımlar, ani daralmalar ve bazı noktalarda çıkmaz sokak görünümü verip aslında dar bir geçitle devam eden güzergâhlar yaygındır. Bu yüzden ilk adım, makinenin hedefe hangi sokaktan ve hangi noktadan girebileceğini haritada değil sahada tespit etmektir — uydu görüntüsü genellikle sokağın gerçek genişliğini yansıtmaz, çünkü çıkmalar ve alçak saçaklar görünmez. Keşifte giriş güzergâhı yürünerek, dar noktalar tek tek ölçülerek belirlenir.",
            },
            {
                baslik: "Düzensiz cephe hizalarında bom kırılım açısı",
                metin:
                    "Eski dokuda binaların cephe hizaları sokağa göre düzensizdir — bazı binalar sokağa taşar, bazıları geri çekilmiştir. Bu düzensizlik, makinenin park edebileceği noktayla hedef cephe arasındaki açıyı sabit bir düz çıkıştan çok, değişken bir kırılım açısına dönüştürür. Eklemli bomun üst eklemden farklı açılarda kırılabilme kabiliyeti, bu düzensiz geometride makasli platformun sunamadığı bir esneklik sağlar; her cephe için kırılım açısı, o cephenin sokağa göre konumuna bakılarak ayrı hesaplanır.",
            },
            {
                baslik: "Dar geçitlerde tek yönlü erişim ve geri manevra sorunu",
                metin:
                    "Bazı Altındağ sokakları, makinenin girebileceği ama içeride dönemeyeceği kadar dardır; bu durumda makine, girdiği güzergâhtan geri manevra ile çıkmak zorunda kalır. Bu senaryo önceden bilinmelidir çünkü geri manevra, dar sokakta zaman ve dikkat gerektiren bir işlemdir — keşifte sokağın döngü yapıp yapmadığı (başka bir sokağa çıkıp çıkmadığı) kontrol edilir, dönüş mümkün değilse iş planına geri manevra süresi baştan eklenir.",
            },
            {
                baslik: "Eğimli sokaklarda park stabilitesi",
                metin:
                    "Altındağ'ın topografyası, ilçenin genelinde belirgin bir eğime sahiptir ve eski dokunun dar sokakları çoğu zaman bu eğimi doğrudan taşır. Eğimli bir sokakta park eden makinenin şasi dengeleme sistemi, eğim sınırı içinde kalacak şekilde konumlandırılmalıdır; sınırın dışında kalan bir noktada makine güvenlik nedeniyle çalışmayı zaten kilitler. Bu yüzden park noktası seçilirken sokağın eğim açısı da diğer ölçülerle (genişlik, kırılım açısı) birlikte değerlendirilir.",
            },
            {
                baslik: "Dar sokakta yaya ve komşu bina güvenliği",
                metin:
                    "Eski dokulu sokaklarda yaya trafiği ile makine çalışma alanı iç içe geçer; sokak genişliği zaten dar olduğundan bariyerleme alanı da minimumda tutulmak zorundadır. Bu, güvenlik önlemlerinin gevşetilmesi değil, farklı kurulması anlamına gelir: düşen cisim bölgesi tam kapatılır ama yaya geçişi için mümkün olan en dar güvenli koridor bırakılır ve bir gözcü, geçiş anlarında çalışmayı geçici durdurur. Komşu binaların dar araya sıkışmış cephelerine bom teması riski, yavaşlatılmış hareket ve sabit mesafe kontrolüyle yönetilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Altındağ'da dar sokak erişim tablosu",
                paragraflar: [
                    "Bölgenin eski doku sokaklarında sık karşılaşılan erişim senaryoları ve çözüm desenleri aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Sokak durumu", "Tipik zorluk", "Çözüm deseni", "Makine"],
                    satirlar: [
                        ["Kıvrımlı dar sokak", "Uydu görüntüsünde görünmeyen daralma", "Sahada yürünerek güzergâh tespiti", "Dar şase eklemli"],
                        ["Düzensiz cephe hizası", "Değişken park-hedef açısı", "Cepheye özel kırılım açısı hesabı", "Eklemli, çok eklemli bom"],
                        ["Dönüşsüz çıkmaz geçit", "Geri manevra zorunluluğu", "Süre payı + tek seferde doğru park", "Sıfıra yakın kuyruk taşmalı"],
                        ["Eğimli sokak", "Şasi dengeleme sınırı", "Eğim ölçümüyle park noktası seçimi", "Dengeleme sistemi geniş model"],
                        ["Dar yaya-araç ortak sokak", "Minimum bariyerleme alanı", "Gözcü + dar güvenli koridor", "Akülü kompakt eklemli"],
                    ],
                },
            },
            {
                baslik: "Keşifte sahada yürüme zorunluluğu",
                paragraflar: [
                    "Altındağ'ın eski dokusunda haritadan veya uydu görüntüsünden yapılan planlama, sahadaki gerçekle sık sık örtüşmez: bir sokağın görünürdeki genişliği, alçak bir saçak veya çıkma yüzünden fiilen daha dardır; bir kavşağın döngü sağladığı sanılabilir ama gerçekte çıkmaz olabilir. Bu yüzden Altındağ işlerinde keşif, güzergâhın fiziksel olarak yürünmesini ve dar noktaların elle ölçülmesini içerir — bu adım atlandığında sahaya giden makinenin geri dönme riski, diğer bölgelere göre belirgin biçimde yüksektir.",
                    "Bu ek adımın getirisi nettir: doğru ölçülmüş bir güzergâh, işin başında değil planlama masasında netleşir ve saha ziyareti doğrudan işin yapılmasıyla geçer.",
                ],
            },
            {
                baslik: "Eski yapı stoku yakınında ek dikkat",
                paragraflar: [
                    "Altındağ'ın bazı kesimlerinde yapı stoku eskidir ve bu, bom teması veya titreşim gibi etkilere karşı standart sanayi binalarına göre daha düşük tolerans anlamına gelebilir. Bu tür cepheler yakınında çalışırken bom hareketleri yavaşlatılmış modda yapılır, komşu cepheye sabit güvenlik mesafesi korunur ve görünür çatlak veya bozulma varsa iş öncesinde bina sahibiyle birlikte not edilir.",
                    "Bu dikkat, işin yavaşlamasına değil doğru hızda ilerlemesine hizmet eder — eski yapı yakınında acele, hem güvenlik hem sorumluluk açısından yanlış tercihtir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sokağımız çok kıvrımlı, makinenin girip giremeyeceğini nasıl anlarız?",
                cevap:
                    "Kesin cevap sahada yürüyerek gelir — Altındağ'ın eski dokusunda uydu görüntüsü veya harita, sokağın gerçek genişliğini genellikle yansıtmaz çünkü alçak saçaklar ve çıkmalar görünmez. Keşifte güzergâhı yürüyüp dar noktaları tek tek ölçüyoruz; en dar noktanın ölçüsü, makinenin girip giremeyeceğini belirler. Sokağın birkaç fotoğrafını (özellikle en dar göründüğü noktalardan) paylaşırsanız ön değerlendirmeyi hızlandırabiliriz, ama kesin karar saha ölçüsüyle verilir.",
            },
            {
                soru: "Evimizin/binamızın önü sokağa taşmış, karşı cepheye tam park edemiyoruz; erişim mümkün mü?",
                cevap:
                    "Çoğunlukla mümkün — eklemli bom, düzensiz cephe hizalarında sabit bir açı yerine değişken kırılım açısıyla çalışır: makine mevcut en uygun noktaya park eder, bom cephenin konumuna göre hesaplanan açıyla kırılarak hedefe uzanır. Bu hesap her cephe için ayrı yapılır çünkü eski dokuda iki komşu bina bile farklı hizada olabilir. Cephenin ve karşısındaki park alanının fotoğrafını paylaşın, kırılım açısını keşifte netleştirelim.",
            },
            {
                soru: "Sokağımız çıkmaz gibi görünüyor, makine girerse geri mi çıkar?",
                cevap:
                    "Muhtemelen evet ve bunu keşifte önceden tespit ediyoruz: sokağın başka bir sokağa döngü yapıp yapmadığı sahada kontrol edilir; döngü yoksa makine geri manevrayla çıkmak zorunda kalır ve bu, iş süresine baştan eklenen bir zaman payıdır. Sürpriz olmaması için bu bilgiyi iş teklifine yazarız — 'sokak çıkmaz, geri manevra X dakika' gibi. Geri manevra riskini azaltmak için dar şaseli, sıfıra yakın kuyruk taşmalı modeller tercih edilir.",
            },
            {
                soru: "Sokağımız hem dar hem eğimli; bu iki zorluk bir arada nasıl yönetilir?",
                cevap:
                    "İkisi birlikte park noktası seçimini belirler: önce eğim ölçülür ve makinenin şasi dengeleme sistemi bu eğimin sınırları içinde kalacak bir nokta aranır, sonra o noktanın sokak genişliği açısından da yeterli olup olmadığı kontrol edilir. İki koşulu birden karşılayan nokta bulunamazsa, dengeleme aralığı daha geniş bir model veya farklı bir giriş noktası değerlendirilir. Eğim ve genişlik ölçülerini birlikte aldığımız için bu iki zorluk keşifte tek seferde çözülür.",
            },
            {
                soru: "Sokağımız hem dar hem yayalar sürekli kullanıyor; çalışma güvenli olur mu?",
                cevap:
                    "Olur, ama bariyerleme farklı kurulur: düşen cisim bölgesi tam kapatılırken yaya geçişi için mümkün olan en dar güvenli koridor bırakılır ve bir gözcü, yaya geçiş anlarında çalışmayı kısa süreliğine durdurur. Bu, standart geniş bariyerleme yerine daha aktif, insan gözetimli bir düzendir — dar sokakta tek çözüm budur. Sokağınızın yaya yoğunluğunu (özellikle okul veya çarşı saatleri) bildirirseniz çalışma saatlerini buna göre planlarız.",
            },
            {
                soru: "Binamız eski, çalışma sırasında zarar görme riski var mı?",
                cevap:
                    "Standart dikkat düzeyimizin üzerinde bir hassasiyetle çalışırız: bom hareketleri cepheye yakınken yavaşlatılmış modda yapılır, sabit güvenlik mesafesi korunur ve mevcut çatlak veya bozulma varsa iş öncesinde birlikte tespit edilip not edilir. Titreşime hassas olduğu bilinen bir yapı ise bu bilgiyi keşifte paylaşmanız, çalışma planını daha da temkinli kurmamızı sağlar. Acele, eski yapı yakınında hiçbir zaman tercih ettiğimiz bir yol değildir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Altındağ'ın eski yerleşim dokusu ve eğimli topografyası kamuya açık bilgidir; kuyruk taşması ve dengeleme sistemi EN 280 ve üretici standartlarıdır.",
    },

    "bolge:kecioren": {
        h1: "Keçiören'de Eklemli Platform Kiralama",
        giris:
            "Keçiören, Ankara'nın en yoğun nüfuslu ilçelerinden biridir ve yerleşimi büyük ölçüde eğimli arazi üzerine kurulmuştur — vadi yamaçlarına yayılan mahalleler, farklı kotlarda birbirine bağlanan sokaklar ve bu eğimin doğal sonucu olan dar, kıvrımlı bağlantı yolları. Bu topografya, platform erişiminde iki problemi aynı anda doğurur: sokakların dar olması ve zeminin düz olmaması. Bir makinenin düz bir zeminde rahatlıkla park edebileceği bir nokta, Keçiören'in yamaç sokaklarında eğim yüzünden kullanılamaz hâle gelebilir; aynı şekilde dar bir sokakta bulunan tek uygun düz nokta, hedeften uzak kalabilir. Eklemli platformun buradaki rolü, bu iki kısıtı aynı anda karşılayan bir denge noktası bulmaktır — dar sokak geometrisi ile engebeli zemin erişimini birlikte yönetmek. Bu sayfada Keçiören'in eğimli-dar dokusundaki erişim çözümlerini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Vadi yamacı sokaklarında eğim ve genişlik birlikte değerlendirmesi",
                metin:
                    "Keçiören'in yamaç mahallelerinde sokaklar genellikle eğimin yönüne paralel veya onu kesen kısa bağlantılar şeklindedir ve bu sokakların genişliği, düz araziye göre kurulmuş mahallelere kıyıla daha dardır — arazi eğimi, geniş bir yol kesitine imar izni vermemiştir. Makine park noktası seçilirken iki ölçü birlikte alınır: sokağın o noktadaki genişliği ve zeminin eğim açısı. Bu ikisi ayrı ayrı yeterli olsa bile birlikte uygun bir nokta bulunamayabilir — bu durumda hedefe daha uzak ama her iki koşulu da karşılayan bir nokta tercih edilir ve bom, ek mesafeyi kırılımla telafi eder.",
            },
            {
                baslik: "Kademeli teraslama yapılan parsellerde erişim",
                metin:
                    "Bölgenin birçok parseli, eğimli araziye oturması nedeniyle kademeli teraslarla düzenlenmiştir — bina girişi bir kotta, arka bahçe veya ek yapı başka bir kottadır. Bu durumda hedefin bulunduğu kot ile makinenin park edebileceği kot arasında yükseklik farkı oluşur ve bu fark, gereken çalışma yüksekliğine doğrudan eklenir. Örneğin hedef kotun 3 metre üstünde kalan bir noktaysa ve park kotu hedeften 2 metre aşağıdaysa, gereken metraj basit toplamla değil kot farkı dahil edilerek hesaplanır; bu hesap keşifte yapılır.",
            },
            {
                baslik: "Dar sokakta stabilize veya bozuk zeminde park",
                metin:
                    "Keçiören'in bazı eski yamaç sokaklarında zemin asfalt değil stabilize veya kısmen bozulmuş kaplamadır; bu zemin türü, akülü makinelerin düz-sert zemin şartını her zaman sağlamaz. Böyle noktalarda ya zemin uygunluğu ayrıca değerlendirilir ya da dizel 4x4 tahrikli modeller tercih edilir — ama dar sokak genişliği bu seçimi de sınırlar, çünkü 4x4 modeller genellikle akülü kompakt modellerden daha geniş şaseye sahiptir. Zemin ve genişlik arasındaki bu gerilim, keşifte ölçülerek doğru dengeye oturtulur.",
            },
            {
                baslik: "Merdivenli-yaya yollu ara geçitlerde erişimsizlik sınırı",
                metin:
                    "Yamaç yerleşimlerinin bir kısmında bina girişine araç yolu değil merdivenli yaya geçidi ulaşır; bu tip noktalarda platform erişimi fiziksel olarak mümkün olmayabilir ve bunu dürüstçe söylemek, yanlış makine göndermekten daha değerlidir. Böyle durumlarda alternatif değerlendirilir — en yakın araç erişimli noktadan bom menzili hedefe yetiyor mu, yoksa iş farklı bir yöntemle mi (örneğin daha küçük ekipmanla) çözülmeli. Bu değerlendirme, keşifte sahaya gidilerek yapılır; haritadan karar verilmez.",
            },
            {
                baslik: "Eğimli sokakta güvenli park açısı ve dengeleme",
                metin:
                    "Eğimli bir sokakta park eden makinenin şasi dengeleme sistemi, üreticinin belirlediği eğim sınırı içinde kalmalıdır ve bu sınırın dışına çıkıldığında makine güvenlik amacıyla çalışmayı otomatik olarak kilitler. Keçiören'in dar-eğimli sokaklarında bu sınırı karşılayan nokta bazen sokağın yalnızca birkaç metrelik bir kesitidir; bu kesit keşifte eğim ölçer ile tespit edilir ve makine tam o noktaya konumlandırılır. Sınırın karşılanamadığı durumlarda alternatif kot veya farklı bir yaklaşım açısı değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Keçiören'de eğim-genişlik senaryo tablosu",
                paragraflar: [
                    "Bölgenin yamaç dokusunda sık karşılaşılan senaryolar ve çözüm desenleri aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Saha durumu", "Zorluk", "Çözüm deseni", "Makine"],
                    satirlar: [
                        ["Dar + eğimli sokak", "İki kısıt aynı anda", "Her iki koşulu karşılayan nokta + kırılımla mesafe telafisi", "Dar şase eklemli"],
                        ["Kademeli teraslı parsel", "Park-hedef kot farkı", "Kot farkı dahil metraj hesabı", "Eklemli, ek metraj payı"],
                        ["Stabilize/bozuk zemin", "Akülü model zemin şartı sağlanamıyor", "Dizel 4x4 veya zemin takviyesi", "4x4 eklemli (genişlik izin verirse)"],
                        ["Merdivenli yaya geçidi", "Araç erişimi yok", "En yakın erişimli noktadan menzil değerlendirmesi", "Durum bazlı, bazen erişilemez"],
                        ["Dar eğim sınırı kesiti", "Dengeleme sistemi sınırı", "Eğim ölçerle tam nokta tespiti", "Geniş dengeleme aralıklı model"],
                    ],
                },
            },
            {
                baslik: "İki kısıt bir arada: neden tek ölçü yetmez",
                paragraflar: [
                    "Keçiören'in yamaç sokaklarında sıkça yapılan bir hata, yalnızca sokak genişliğini veya yalnızca zemin eğimini ölçüp diğerini gözden kaçırmaktır. Oysa iki ölçü birbirinden bağımsız değildir: dar bir sokakta düz görünen bir nokta, aslında yola paralel hafif bir eğim taşıyabilir; eğimi uygun bir nokta ise sokağın dar bir yerine denk gelebilir. Bu yüzden Keçiören keşiflerinde iki ölçü birlikte, aynı noktada alınır ve zarf diyagramına ikisi birden işlenir.",
                    "Bu disiplinin pratik değeri, sahaya giden makinenin park edeceği noktada 'aslında olmuyormuş' sürprizini önlemesidir — yamaç dokuda bu sürpriz, düz araziye göre daha sık ortaya çıkar çünkü göz kararı eğim tahmini genellikle yanıltıcıdır.",
                ],
            },
            {
                baslik: "Kot farklı erişimde metraj dürüstlüğü",
                paragraflar: [
                    "Kademeli teraslı parsellerde metraj hesabını basitleştirip 'şu kadar metre yeter' demek, sahada yetmeme riski taşır. Bunun yerine üç değer ayrı ayrı ölçülür ve toplanır: hedefin kendi kotundaki yüksekliği, park noktası ile hedef arasındaki kot farkı ve bom kırılımının gerektirdiği ek pay. Bu üçü toplanmadan verilen bir metraj tahmini, Keçiören'in kademeli dokusunda güvenilir değildir.",
                    "Doğru hesaplanmış metraj, keşif aşamasında birkaç dakika ek zaman alır ama sahada yanlış makineyle karşılaşma riskini ortadan kaldırır — bu fark, özellikle dar sokakta ikinci bir makine denemesinin zor olduğu Keçiören'de önemlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Evimiz yamaçta, sokağımız hem dar hem eğimli; makine hiç giremez mi?",
                cevap:
                    "Genellikle bir çözüm bulunur ama garantisi keşifle verilir: sokağın genişliği ve zemin eğimi birlikte ölçülür, ikisini de karşılayan bir nokta aranır — bu nokta hedeften biraz uzak kalsa bile bom kırılımı mesafeyi telafi edebilir. Hiçbir nokta iki koşulu birden karşılamıyorsa dürüstçe söyleriz ve alternatif (farklı erişim yönü, daha küçük ekipman) değerlendiririz. Sokağın birkaç noktadan fotoğrafını paylaşın, ön değerlendirmeyi hızlandıralım.",
            },
            {
                soru: "Bahçemiz evin arkasında, bir kat aşağı kotta; erişim nasıl planlanır?",
                cevap:
                    "Kot farkı, metraj hesabına doğrudan eklenir: hedefin kendi yüksekliği, park noktası ile hedef arasındaki kot farkı ve bom kırılım payı ayrı ayrı ölçülüp toplanır — basit bir tahminle değil. Bu üçlü hesap sonucunda görünürde 'yakın' duran bir hedef, aslında daha yüksek metrajlı bir makine gerektirebilir. Bahçenin ve evin arka cephesinin kotlarını gösteren fotoğraf, bu hesabı keşif öncesinde büyük ölçüde netleştirir.",
            },
            {
                soru: "Sokağımızın zemini bozuk, akülü makine güvenli çalışır mı?",
                cevap:
                    "Zemin durumuna bağlı — akülü modeller düz-sert zemin ister ve bozuk/stabilize zeminde bu şart her zaman sağlanmaz. Böyle durumlarda dizel 4x4 tahrikli model değerlendirilir, ama bu modellerin şasesi genellikle daha geniştir ve dar sokakta sığmayabilir; zemin ile genişlik arasındaki bu gerilim keşifte ölçülerek dengelenir. Zeminin fotoğrafını (özellikle çukur veya bozulma varsa) paylaşın, uygun modeli birlikte belirleyelim.",
            },
            {
                soru: "Evimize araçla değil merdivenle çıkılıyor; platform hiç ulaşamaz mı?",
                cevap:
                    "Doğrudan ulaşamayabilir ve bunu keşifte netleştiririz — dürüst cevap, yanlış makine göndermekten değerlidir. Değerlendirdiğimiz alternatif, en yakın araç erişimli noktadan bom menzilinin hedefe yetip yetmediğidir; yetiyorsa iş oradan yapılır, yetmiyorsa platform dışı bir yöntem (daha küçük ekipman, farklı yaklaşım) konuşulur. Merdivenin başlangıcındaki en yakın araç erişim noktasını ve mesafeyi keşifte birlikte tespit ederiz.",
            },
            {
                soru: "Sokağımız eğimli; makine devrilme riski taşımadan nasıl park eder?",
                cevap:
                    "Şasi dengeleme sistemi, üreticinin belirlediği eğim sınırı içinde kaldığı sürece güvenli çalışır ve sınır dışına çıkıldığında makine zaten çalışmayı otomatik kilitler — yani devrilme riski değil, çalışamama riski söz konusudur. Keçiören'in dar-eğimli sokaklarında bu sınırı karşılayan nokta bazen sokağın kısa bir kesitidir; bu kesiti eğim ölçerle keşifte tespit edip makineyi tam oraya konumlandırırız. Sınır hiçbir noktada karşılanamıyorsa alternatif kot veya yaklaşım açısı değerlendirilir.",
            },
            {
                soru: "Aynı mahallede birkaç komşu evin de işi var; hepsi farklı kotlarda, tek günde olur mu?",
                cevap:
                    "Olabilir ama planlama, düz araziye göre daha fazla zaman payı ister: her adres için ayrı park noktası ve kot hesabı gerekir, sokaklar arası geçiş yamaç yollarında düz araziye göre daha yavaştır. Komşu evlerin listesini ve yaklaşık konumlarını paylaşırsanız, kotlara ve sokak genişliklerine göre en verimli sırayı çıkarır, gerçekçi bir gün planı sunarız — abartılı bir 'hepsi tek günde biter' sözü vermeyiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Keçiören'in yamaç topografyası ve kademeli yerleşim dokusu kamuya açık bilgidir; dengeleme sistemi eğim sınırı EN 280 ve üretici standartlarıdır.",
    },
};
