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
};
