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

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "OSTİM'in Dar Geçitlerinde Sepetli / Örümcek Platform Kiralama",
        giris:
            "Eklemli platform, OSTİM'in dar sahalarında çoğu erişim probleminin cevabıdır — ama her cevabın bir sınırı vardır. Bazı avlular öyle dardır ki eklemlinin en kompakt şasesi bile kapıdan geçmez; bazı hedefler öyle bir kot ve açıdan gelir ki dört tekerlekli hiçbir makine oraya park edemez. Örümcek platform (tırtıl paletli, kendinden vinçli, katlanır bomlu erişim sistemi) tam bu kalan yüzde için vardır: elle veya küçük bir vinçle taşınabilecek genişliğe katlanır, dar bir kapı veya merdiven boşluğundan geçirilir, hedefin yakınında yeniden açılır ve paletleriyle düz olmayan zeminde bile ilerler. Bu sayfa, eklemlinin giremediği OSTİM avlularında ve iç mekânlarında örümcek platformun nerede devreye girdiğini, eklemliyle farkını ve karar kriterlerini anlatır.",
        maddeler: [
            {
                baslik: "Eklemli ne zaman giremez, örümcek ne zaman girer",
                metin:
                    "Sınırı belirleyen üç ölçüdür: kapı-geçit genişliği (çoğu kompakt eklemli 80-100 cm bandında, örümcek katlı hâlde 70 cm'nin altına iner), taşıma yolu (eklemli kendi tekerleğiyle gider, örümcek taşınır veya kendi paletiyle merdiven-eşik aşar) ve zemin türü (eklemli tekerlekli sürüş ister, örümcek paletiyle düzensiz zeminde de ilerler). OSTİM'de tipik örümcek senaryosu, bina içi dar merdivenden çatı katına veya avlu kapısından geçip arka bahçedeki hedefe ulaşmaktır — eklemlinin şasesi buraya sığmaz, örümceğin katlı gövdesi sığar.",
            },
            {
                baslik: "Katlanır bom ve kompakt taşıma mantığı",
                metin:
                    "Örümcek platformun bomu, eklemlininkinden farklı çalışır: tek eklemli uzun kol yerine iki-üç kısa kol art arda katlanır ve makine kapıdan geçerken tüm gövde küçük bir dikdörtgene sığar. İçeri girdikten sonra kollar sırayla açılır ve hedefe doğru yeniden şekillenir — dar bir odada bile geniş bir erişim alanı oluşturur. Ağırlığı düşük modellerde asansörle veya iki kişiyle taşınabilir; ağır modellerde küçük bir vinç veya kendi tekerlek takımıyla ilerler. OSTİM'in çok katlı iş hanlarında asansörle taşınan model, merdiven taşımasından çok daha hızlıdır.",
            },
            {
                baslik: "Paletli tahrik: engebeli avlu ve toprak zeminde ilerleme",
                metin:
                    "Bazı örümcek modelleri lastik yerine paletli tahrikle gelir ve bu, OSTİM çevresindeki toprak veya moloz zeminli avlularda fark yaratır: palet, tekerleğin batabileceği yumuşak zeminde yüzey basıncını dağıtarak ilerler. Bu özellik, inşaat hâlindeki parsellerde veya bakımsız arka bahçelerde platform erişimini mümkün kılar — eklemlinin tekerlekli tahrikinin zorlandığı yerde örümcek geçer. Zemin sertliği kesin değilse keşifte fotoğrafla değerlendirilir; palet izi bırakmaması gereken hassas zeminlerde (yeni döşenmiş beton, parke) koruma önlemi alınır.",
            },
            {
                baslik: "Sepet kapasitesi ve iş tipi uyumu",
                metin:
                    "Örümcek platformun sepet kapasitesi genellikle eklemliye göre daha düşüktür — bu, tasarımın kompaktlığının doğal bedelidir. Bu yüzden örümcek, ağır malzeme taşıyan işten çok tek operatörün nokta müdahalesine (kamera bakımı, küçük tesisat onarımı, tabela değişimi, boya-badana detayı) uygundur. İş, malzeme ağırlığı gerektiriyorsa (örneğin panel montajı) önce eklemlinin girip giremeyeceği yeniden kontrol edilir; girmiyorsa malzeme ayrıca taşınır ve örümcek yalnızca erişimi sağlar. Bu ayrımı keşifte açık söyleriz — kapasiteyi abartıp yanlış makine göndermeyiz.",
            },
            {
                baslik: "OSTİM'de tipik örümcek işleri",
                metin:
                    "Bölgede en sık talep ettiğimiz örümcek senaryoları üçe ayrılır: iş hanı iç avlusundan bina arkasına geçiş, dar merdivenden çatı katına taşınıp çatı arası tesisat işi ve bitişik parseller arasındaki dar aralıktan cephe erişimi. Üçünde de ortak nokta, eklemlinin denendiği ve geçemediği bir noktanın olmasıdır — bu yüzden örümcek talebi genellikle 'eklemli sığmadı, alternatif var mı' sorusuyla gelir. Keşif ekibimiz iki makineyi de değerlendirip hangisinin geçtiğini fiziksel ölçüyle netleştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli ile örümcek platform karşılaştırması",
                paragraflar: [
                    "OSTİM'in dar dokusunda iki makine arasındaki seçim, aşağıdaki ölçülerle netleşir. Tablo, hangi durumda hangisinin devreye girdiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Ölçüt", "Eklemli platform", "Örümcek platform"],
                    satirlar: [
                        ["Geçiş genişliği", "80 – 100 cm bandı (kompakt)", "60 – 70 cm bandı (katlı)"],
                        ["Taşıma şekli", "Kendi tekerleğiyle sürülür", "Elle/asansörle taşınır veya paletle ilerler"],
                        ["Zemin uyumu", "Sert, düz zemin ister", "Toprak/moloz zeminde paletle ilerler"],
                        ["Sepet kapasitesi", "Görece yüksek (malzeme taşır)", "Görece düşük (nokta iş için)"],
                        ["Tipik OSTİM işi", "Avlu-sokak erişimli cephe/tavan", "Dar merdiven, iç avlu, bina arası aralık"],
                    ],
                },
            },
            {
                baslik: "Keşifte iki makineyi birlikte değerlendirme",
                paragraflar: [
                    "Dar geçit şüphesi olan her talepte iki makineyi de değerlendiririz: önce eklemlinin en kompakt modelinin geçip geçmeyeceği ölçülür, geçmiyorsa örümceğin katlı ölçüsüyle karşılaştırılır. Bu sıralı kontrol, gereksiz yere daha pahalı örümceği önermekten kaçınır — eklemli sığıyorsa maliyeti daha düşüktür ve sepet kapasitesi daha geniştir. Ölçüm için istediğimiz üç veri: kapı/geçit genişliği ve yüksekliği, geçitten hedefe kadar olan mesafe ve zemin türü.",
                    "Fotoğraf ve şerit metre ile alınan bu üç ölçü, telefon görüşmesinde bile doğru makineyi belirlemeye yeter — sahaya yanlış makineyle gidip geri çevrilmek, hem bizim hem işletmenin zamanını kaybettirir ve bunu keşif disipliniyle önleriz.",
                ],
            },
            {
                baslik: "Taşıma ve kurulum güvenliği",
                paragraflar: [
                    "Örümcek platformun taşınması, kendisi bir iş güvenliği konusudur: merdivenden veya dar koridordan taşınırken makinenin ağırlık merkezi ve taşıyan personelin duruşu önceden planlanır, asansörle taşımada asansörün yük kapasitesi kontrol edilir. Kurulum alanında makine açılırken çevresindeki boşluk (kolların açılma yarıçapı) net tutulur ve kimse bu alanda beklemez.",
                    "Paletli modellerde zemine temas noktası, hassas yüzeylerde (parke, seramik) koruma tahtasıyla desteklenir. Bu hazırlık, işin ilk on dakikasıdır ve dar alan işlerinde standart adımdır — atlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform avluya sığmadı; örümcek platform bu işi çözer mi?",
                cevap:
                    "Büyük olasılıkla evet — örümceğin var oluş nedeni tam bu senaryodur. Katlı hâldeyken eklemliden çok daha dar bir geçitten girer, hedefin yakınında yeniden açılır ve erişimi sağlar. Kesinleştirmek için geçidin genişlik-yükseklik ölçüsü ve hedefe uzaklığı gerekir; bunları fotoğrafla paylaşırsanız aynı gün netleştiririz. Sepet kapasitesinin eklemliden düşük olduğunu da baştan söylüyoruz — ağır malzeme taşıyan bir iş ise malzeme ayrıca planlanır.",
            },
            {
                soru: "Örümcek platform merdivenden taşınabilir mi, yoksa asansör mü gerekir?",
                cevap:
                    "Modele bağlı: hafif modeller iki-üç kişiyle merdivenden taşınabilir, ağır modeller asansör veya küçük vinç ister. Binanızda hangisi mümkünse ona uygun model seçilir — asansör varsa ve yük kapasitesi yeterliyse süreç hızlanır, yoksa hafif model tercih edilir ve taşıma güvenliği (ağırlık merkezi, personel duruşu) planlanır. Bina girişini ve varsa asansör ölçüsünü keşifte netleştiriyoruz.",
            },
            {
                soru: "Arka bahçemiz toprak ve engebeli; tekerlekli platform batar mı diye endişeliyiz?",
                cevap:
                    "Haklı bir endişe — bu yüzden bu tip zeminlerde paletli örümcek modelini öneririz. Palet, tekerleğin batabileceği yumuşak zeminde yüzey basıncını dağıtarak ilerler ve dar geçitten katlı girip bahçede yeniden açılabilir. Zeminin çok yumuşak veya bataklık kıvamında olduğu nadir durumlarda platform dışı yöntem konuşulur — dürüst değerlendirme keşifte yapılır. Zemin fotoğrafını paylaşın, uygunluğu birlikte görelim.",
            },
            {
                soru: "Örümcek platformla panel veya ağır malzeme taşınabilir mi?",
                cevap:
                    "Sınırlı ölçüde — sepet kapasitesi eklemliden düşüktür ve bu tasarımın doğal bedelidir. Hafif malzeme (tesisat parçası, tabela, aydınlatma armatürü) sepette taşınır; ağır panel gibi yükler için önce eklemlinin geçip geçemediği yeniden kontrol edilir, geçmiyorsa malzeme ayrı bir yöntemle (elle, küçük vinç) sahaya alınır ve örümcek yalnızca erişimi sağlar. Bu ayrımı abartmadan, işin gerçek ağırlığına göre keşifte netleştiriyoruz.",
            },
            {
                soru: "Örümcek platform operatörsüz kiralanabilir mi?",
                cevap:
                    "Kiralanabilir ama önerimiz operatörlü çalışmaktır — makinenin katlanır-açılır mekanizması ve dar alan manevrası, ilk kullanımda deneyim ister. Kısa süreli ve deneyimli ekibi olan işletmelerde operatörsüz seçenek de sunulur; bu durumda cihazın açma-kapama ve dengeleme eğitimi teslimatta verilir. Hangi seçeneğin işinize uygun olduğunu, iş süresi ve ekibinizin deneyimine göre keşifte birlikte kararlaştırırız.",
            },
            {
                soru: "Fiyat olarak örümcek platform eklemliden pahalı mı?",
                cevap:
                    "Günlük kiralama bedeli genellikle eklemliye yakın veya biraz üzerindedir — ama doğru karşılaştırma bu değildir. Eklemli geçemeyen bir işte tek alternatif ya örümcek ya da iskele-manuel yöntemdir; iskele kurulum-söküm maliyeti çoğu zaman örümceğin bedelini aşar. Eklemli sığıyorsa zaten onu öneririz, daha ekonomiktir. Örümcek, yalnızca eklemlinin fiziksel olarak giremediği senaryolarda devreye girer — bu yüzden fiyat karşılaştırması 'hangi makine mi ucuz' değil 'hangi makine bu işi çözer'dir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek/sepetli platformun katlanır bom ve paletli tahrik özellikleri EN 280 ve üretici teknik verileridir; OSTİM'in dar avlu-geçit dokusu kamuya açık saha bilgisidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "OSTİM Dar Sokak Ağında Platform Nakliye ve Teslimat Hizmeti",
        giris:
            "Bir platformun sahaya doğru ulaşması, çoğu bölgede sıradan bir lojistik adımdır; OSTİM'de ise başlı başına bir planlama konusudur. Bölgenin sokak ağı, ağır vasıta trafiğine göre değil küçük atölye erişimine göre şekillenmiştir — dar sokaklar, keskin dönüşler, karşılıklı park eden araçlar ve bazı saatlerde yoğun yaya-araç trafiği. Bir düşük yükleyici (low-bed) her sokağa giremez; bazı teslimatlarda makine ana caddeye indirilip son yüz metre kendi motoruyla veya küçük bir çekiciyle ilerletilir. Bu sayfa, OSTİM ve çevresindeki dar sokak ağında nakliye-teslimat sürecinin nasıl planlandığını, hangi araçların hangi sokağa girdiğini ve teslimat saatlerinin neden iş planının bir parçası olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Sokak genişliği: araç seçiminin ilk filtresi",
                metin:
                    "OSTİM'in ana caddeleri çift şeritli ve düşük yükleyici trafiğine uygundur; ama ara sokakların büyük bölümü tek şerit genişliğindedir ve karşılıklı park eden araçlarla bu genişlik daha da daralır. Teslimat planı bu yüzden iki aşamalı kurulur: makine ana caddeye kadar düşük yükleyiciyle taşınır, oradan hedefe kadar olan son bölüm sokak genişliğine göre değerlendirilir — makine kendi motoruyla gidebiliyorsa sürülür, gidemiyorsa küçük bir platform kamyonuyla veya kompakt çekiciyle ilerletilir. Sokak genişliğini talep alırken sorarız; belirsizse teslimat günü öncesi bir keşif turu yapılır.",
            },
            {
                baslik: "Dönüş yarıçapı ve keskin köşe problemi",
                metin:
                    "OSTİM'in ızgara dışı büyüyen bölümlerinde sokaklar dik açılarla kesişir ve düşük yükleyicinin dönüş yarıçapı bu köşelerde sınırlanır. Bazı adreslere düz hatla değil, belirli bir sıralamayla (önce şu sokağa gir, şu köşeden dön) ulaşılabilir — bu güzergâh, teslimat öncesi harita üzerinden planlanır ve şoförle paylaşılır. Yanlış köşeden dönmeye çalışan bir araç hem trafiği tıkar hem geri manevra riski taşır; bu yüzden ilk teslimatlarda güzergâh belirsizse telefonla saha tarifi alınır veya öncü araçla yönlendirme yapılır.",
            },
            {
                baslik: "Yoğun saatler: teslimat penceresinin planlanması",
                metin:
                    "OSTİM'in trafiği gün içinde belirgin dalgalanır — sabah açılış ve öğle arası saatleri, atölye önü yükleme-boşaltma ve personel hareketiyle yoğunlaşır. Büyük araç teslimatları bu yoğunluğun dışına, genellikle sabah erken veya öğleden sonranın sakin diliminde planlanır. Acil işlerde bu pencereyi beklemek mümkün olmayabilir; böyle durumlarda güzergâh üzerinde geçici yönlendirme (bir kişinin trafiği kısa süreliğine yönlendirmesi) uygulanır. Talebin aciliyeti ve sokağın yoğunluk profili, teslimat saatini birlikte belirler.",
            },
            {
                baslik: "İndirme noktası: makine kadar önemli bir karar",
                metin:
                    "Makinenin nereye indirileceği, işin ne kadar hızlı başlayacağını belirler. İdeal indirme noktası, hedefe en kısa kendi-motor mesafesinde ve trafiği en az etkileyecek konumdadır — çoğu zaman bu, atölyenin tam önü değil yakın bir kavşak boşluğudur. Bina önünde park hakkı yoksa veya sürekli araç trafiği varsa, indirme için kısa süreli bir alan boşaltması gerekebilir; bunu işletmeyle önceden koordine ederiz. İndirme noktası seçimi, teslimat süresini dakikalar mertebesinde kısaltabilir veya saatler mertebesinde uzatabilir.",
            },
            {
                baslik: "Çoklu teslimat: aynı sokakta birden fazla iş",
                metin:
                    "Aynı sokak veya ada içinde birden fazla işletmenin talebi varsa, teslimatlar tek araca ve tek güzergâha toplanır — araç sokağa bir kez girer, sırayla her adrese makine bırakır ve nakliye bedeli işletmeler arasında bölünür. Bu model OSTİM'in yoğun küçük işletme dokusunda en sık uyguladığımız planlardan biridir; kooperatif veya site yönetimi üzerinden koordine edilen dönemsel taleplerde özellikle verimlidir. Sıralama, sokağın giriş-çıkış yönüne göre optimize edilir ki araç sokakta gereksiz geri manevra yapmasın.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Araç tipi ve sokak profili eşleşmesi",
                paragraflar: [
                    "OSTİM'in sokak profiline göre kullandığımız araç ve teslimat yöntemi aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Sokak profili", "Ana taşıma", "Son bölüm", "Zaman penceresi"],
                    satirlar: [
                        ["Geniş ana cadde", "Düşük yükleyici, doğrudan", "Kendi motoruyla iner", "Esnek"],
                        ["Tek şerit ara sokak", "Düşük yükleyici (cadde ucuna)", "Kendi motoru / küçük çekici", "Sakin saat tercih edilir"],
                        ["Keskin köşeli/dar dönüşlü", "Düşük yükleyici + öncü yönlendirme", "Planlı güzergahla sürüş", "Önceden harita çalışması"],
                        ["Yoğun yaya-araç trafiği", "Aynı, sakin dilime kaydırılır", "Kısa süreli yol yönlendirmesi", "Sabah erken / öğleden sonra"],
                        ["Çoklu adres (aynı sokak)", "Tek araç, sıralı teslimat", "Ardışık indirme", "Tek giriş, planlı sıra"],
                    ],
                },
            },
            {
                baslik: "Teslimat öncesi bilgi seti",
                paragraflar: [
                    "Doğru araç ve güzergâh planı için teslimat talebinde üç bilginin önceden alınması işi hızlandırır: sokağın genişliği ve varsa dar/köşeli bölümler, indirme noktasının bina girişine uzaklığı ve gün içinde sokağın yoğun olduğu saatler. Bu bilgiler telefonda sözlü tarif edilebilir ama en hızlı yöntem, sokağın google haritalar görünümünü veya bir fotoğrafını paylaşmaktır — güzergâh planlaması dakikalar içinde netleşir.",
                    "İlk kez çalıştığımız adreslerde belirsizlik varsa, teslimattan bir gün önce kısa bir keşif turu (araçsız, sadece ölçü almak için) yapılabilir; bu, teslimat günü sürpriz yaşamamanın en kesin yoludur.",
                ],
            },
            {
                baslik: "Teslimat güvenliği ve komşu esnaf koordinasyonu",
                paragraflar: [
                    "Dar sokakta büyük araç manevrası, yalnızca teslimat alan işletmeyi değil komşu esnafı da etkiler — bu yüzden teslimat öncesi kısa bir bilgilendirme (özellikle uzun süre park gerekiyorsa) komşu işletmelerle paylaşılır. İndirme sırasında araç arkasında güvenlik mesafesi tutulur, yaya geçişi geçici olarak yönlendirilir ve makine indirildikten sonra araç sokağı en kısa sürede boşaltır.",
                    "Bu koordinasyon küçük bir adım gibi görünse de OSTİM'in yoğun dokusunda büyük fark yaratır — bir sokakta iyi yönetilen teslimat, sonraki taleplerin de sorunsuz gelmesini sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sokağımız çok dar, büyük kamyon giremez; makine nasıl gelir?",
                cevap:
                    "İki aşamalı planla: düşük yükleyici makineyi en yakın geniş noktaya (ana cadde veya sokak ağzı) kadar taşır, oradan hedefe kadar olan son bölüm makinenin kendi motoruyla veya küçük bir çekiciyle ilerletilir. Bu yöntem OSTİM'in dar sokaklarında standart uygulamamızdır. Sokağınızın genişliğini ve varsa dar noktalarını fotoğrafla paylaşırsanız güzergâhı önceden netleştirir, teslimat günü sürpriz yaşamayız.",
            },
            {
                soru: "Teslimat için en uygun saat hangisi?",
                cevap:
                    "Genellikle sabah erken (açılış öncesi) veya öğleden sonranın sakin dilimi — sokağın yoğun olduğu açılış ve öğle arası saatlerinden kaçınırız. Sizin işletmenizin ve sokağınızın kendine özgü yoğunluk deseni varsa (örneğin belirli bir teslimat aracının düzenli geldiği saat) bunu bize bildirin, planı ona göre kaydırırız. Acil işlerde pencereyi beklemeden, geçici yol yönlendirmesiyle teslimat yapılabilir.",
            },
            {
                soru: "Bina önümüzde sürekli park var, makineyi nereye indireceksiniz?",
                cevap:
                    "En yakın uygun boşluğa — bina önü kapalıysa yakın bir kavşak boşluğu veya kısa süreliğine boşaltılabilecek bir alan değerlendirilir. Sürekli park sorunuysa, teslimat öncesi işletmenizin kısa süreliğine bir alanı ayırtması (komşu esnafla koordine) süreci hızlandırır. İndirme noktası ile hedef arasındaki mesafe, işin kendi motoruyla mı yoksa taşınarak mı kat edileceğini belirler; bunu teslimat öncesi netleştiriyoruz.",
            },
            {
                soru: "Aynı sokakta üç işletmenin de teslimatı var; tek seferde mi geliyorsunuz?",
                cevap:
                    "Evet, bu bizim tercih ettiğimiz modeldir: tek araç sokağa bir kez girer, sırayla her adrese makine bırakır ve nakliye bedeli üç işletme arasında bölünür. Sıralama, sokağın giriş-çıkış yönüne göre optimize edilir ki araç gereksiz geri manevra yapmasın. Taleplerinizi 'ortak teslimat' notuyla iletirseniz sıralamayı biz kurarız — bu model hem maliyeti düşürür hem sokak trafiğini tek seferde yönetir.",
            },
            {
                soru: "Teslimat sırasında sokakta trafik tıkanır mı?",
                cevap:
                    "Kısa süreli, planlı bir etkilenme olur ve bunu minimuma indiririz: indirme işlemi genellikle 15-30 dakika sürer, bu sürede araç arkasında güvenlik mesafesi tutulur ve gerekiyorsa geçici yaya-araç yönlendirmesi yapılır. Yoğun saatlerden kaçınmak, tıkanmayı zaten büyük ölçüde önler. Uzun süreli sokak kapatması gerekiyorsa (nadiren, özel durumlarda) bu önceden işletmenize ve gerekiyorsa komşu esnafa bildirilir.",
            },
            {
                soru: "İlk kez sizden kiralıyoruz, sokağımızı hiç bilmiyorsunuz; sorun olur mu?",
                cevap:
                    "Olmaz — yeni adreslerde belirsizlik varsa teslimattan önce kısa bir keşif turu yapabiliriz, bu turda sadece ölçü ve güzergâh netleştirilir, araç gitmez. Alternatif olarak google haritalar görünümünü veya sokağın birkaç fotoğrafını paylaşmanız da genellikle yeterlidir. OSTİM ve çevresindeki dar sokak ağında yıllardır teslimat yaptığımız için çoğu bölgeyi zaten biliyoruz; bilmediğimiz bir adres varsa bunu önceden araştırıp planı ona göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. OSTİM'in dar sokak ağı ve trafik yoğunluk deseni kamuya açık saha bilgisidir; teslimat planlama yöntemi firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Küçük Atölyelerde Dar Koridorda Forklift ve İstifleme Kiralama",
        giris:
            "OSTİM'in binlerce küçük atölyesinde depolama alanı neredeyse hiçbir zaman bol değildir — raf aralıkları dardır, koridorlar tek forklift genişliğindedir ve tavan yüksekliği çoğu zaman 4-6 metre bandında sıkışıktır. Standart geniş şaseli forkliftler bu koridorlara girmez veya girse bile dönemez; bu yüzden OSTİM'deki istifleme talebinin büyük bölümü dar koridor tipi kompakt forklift ve elektrikli istif makineleriyle karşılanır. Bu sayfa, eklemli platform odaklı filomuzun forklift-istifleme tarafını — hangi modelin hangi koridora sığdığını, raf yüksekliğiyle kapasite ilişkisini ve OSTİM atölyelerinde en sık karşılaşılan istifleme senaryolarını — anlatır.",
        maddeler: [
            {
                baslik: "Dar koridor forkliftinin şase mantığı",
                metin:
                    "Standart dizel forkliftlerin şase genişliği genellikle koridor için fazla geniştir; OSTİM atölyelerinde kullandığımız kompakt elektrikli modeller dar şase ve sıfıra yakın dönüş yarıçapıyla tasarlanır. Bu modeller, raf arası koridorda 90 dereceye yakın dönerek palet indirip kaldırabilir — geniş şaseli makinenin ancak koridor sonunda döneceği yerde. Koridor genişliğini santimetre hassasiyetinde ölçüp uygun modeli eşlemek, atölyede palet çarpması veya raf hasarı riskini baştan ortadan kaldırır.",
            },
            {
                baslik: "Elektrikli tahrik: kapalı atölyede hava kalitesi",
                metin:
                    "OSTİM atölyelerinin büyük bölümü kapalı veya yarı kapalı çalışır ve dizel egzoz emisyonu bu ortamlarda hem sağlık hem koku sorunu yaratır — bu yüzden iç mekân istifleme taleplerinde varsayılan tercih elektrikli forklifttir. Elektrikli modellerin şarj süresi ve kapasitesi, günlük iş yoğunluğuna göre planlanır; tam gün yoğun kullanımda yedek akü veya vardiya arası şarj penceresi düşünülür. Dizel, yalnızca açık saha veya iyi havalandırılan geniş hollerde önerilir.",
            },
            {
                baslik: "Raf yüksekliği ve kaldırma kapasitesi eşleşmesi",
                metin:
                    "İstif makinesi seçiminde iki ölçü birlikte çalışır: raf sisteminin en üst kotu ve o kottaki palet ağırlığı. Yüksek rafta hafif palet ile alçak rafta ağır palet farklı makine gerektirir çünkü kaldırma kapasitesi yükseklikle azalır (mast uzadıkça izin verilen yük düşer). OSTİM'deki tipik atölye raflarının 4-6 metre bandında olması, orta sınıf elektrikli istif makinelerini standart seçim yapar; daha yüksek raflı depolarda mast kapasite tablosu keşifte birlikte kontrol edilir.",
            },
            {
                baslik: "Tek seferlik yükleme-boşaltma ve süreklilik farkı",
                metin:
                    "OSTİM'deki forklift taleplerinin çoğu iki kategoriye ayrılır: tek seferlik yükleme-boşaltma (bir kamyon dolusu malzemenin indirilmesi, birkaç saatlik iş) ve sürekli depo işletmesi (günlük istifleme, uzun süreli kiralama). İlk kategoride operatörlü kısa süreli kiralama, ikinci kategoride ise işletmenin kendi personelinin kullanacağı operatörsüz uzun dönem kiralama daha ekonomiktir. Hangi modelin uygun olduğu, iş sıklığı ve süresine göre keşifte birlikte belirlenir.",
            },
            {
                baslik: "Atölye içi güvenlik: dar koridorun kendi riskleri",
                metin:
                    "Dar koridorda forklift çalışması, geniş depodan farklı riskler taşır: kör köşelerde çarpışma, raf ayaklarına temas ve yaya-forklift aynı koridoru paylaşması. Standart önlemlerimiz arasında koridor sonu ayna veya sinyal kullanımı, yaya-forklift ayrımının mümkün olduğunca netleştirilmesi ve raf yükleme sınırlarının (raf başına maksimum yük) açıkça işaretlenmesi yer alır. Yoğun mesai saatlerinde forklift trafiğiyle personel hareketinin çakıştığı noktalar keşifte belirlenip önlem planına eklenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Koridor genişliği ve forklift tipi eşleşmesi",
                paragraflar: [
                    "OSTİM atölyelerinde en sık karşılaştığımız koridor profilleri ve uygun makine tipi aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Koridor genişliği", "Uygun makine", "Tahrik", "Tipik kullanım"],
                    satirlar: [
                        ["Çok dar (< 2 m)", "Dar koridor elektrikli istif makinesi", "Elektrikli", "Raf arası palet indirme"],
                        ["Dar-orta (2 – 3 m)", "Kompakt elektrikli forklift", "Elektrikli", "Genel atölye içi taşıma"],
                        ["Orta (3 – 4 m)", "Standart elektrikli/LPG forklift", "Elektrikli / LPG", "Yükleme-boşaltma + iç taşıma"],
                        ["Geniş / açık saha", "Dizel forklift", "Dizel", "Dış saha, ağır yük"],
                        ["Çok yüksek raf (6 m+)", "Yüksek mastlı elektrikli istif", "Elektrikli", "Kapasite tablosu kontrolüyle"],
                    ],
                },
            },
            {
                baslik: "Keşifte alınan üç ölçü",
                paragraflar: [
                    "Doğru forklift modeli için keşifte üç ölçü netleştirilir: en dar koridorun genişliği (raf başlıkları dahil), en yüksek raf kotu ve o koridorlarda taşınacak tipik palet ağırlığı. Bu üçlü, hem hangi şasenin döneceğini hem hangi mastın yeterli kapasitede kaldıracağını belirler. Ölçüyü fotoğraf ve şerit metreyle almak, telefon tarifinden çok daha kesin sonuç verir.",
                    "Atölyenin zemin durumu da bu ölçüme eklenir — pürüzlü veya eğimli zeminlerde lastik tipi ve tekerlek sayısı farklı seçilebilir; bu detay OSTİM'in eski yapı stokunda zaman zaman karşımıza çıkar.",
                ],
            },
            {
                baslik: "Operatör eğitimi ve sertifika kontrolü",
                paragraflar: [
                    "Forklift operatörlüğü mevzuatı, operatörün geçerli forklift operatör belgesine sahip olmasını şart koşar — bu, işletmenin kendi personeli kullanacağı operatörsüz kiralamalarda işletmenin sorumluluğundadır ve teslimat öncesi belge kontrolü önerilir. Operatörlü kiralamada bu kontrol bizim tarafımızdan zaten yapılır; operatörümüzün belgesi ve deneyimi teslimat evraklarıyla birlikte sunulur.",
                    "Dar koridor çalışması, geniş sahaya göre daha fazla deneyim ister — bu yüzden ilk kez dar koridorda çalışacak bir operatör için kısa bir saha oryantasyonu (koridor genişliğini, raf yüksekliklerini tanıma) teslimatın parçasıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Koridorumuz çok dar, standart forklift dönemiyor; ne öneriyorsunuz?",
                cevap:
                    "Dar koridor elektrikli istif makinesi — sıfıra yakın dönüş yarıçapıyla tasarlanmıştır ve standart forkliftin döneceği koridorun yarısında bile manevra yapabilir. Koridor genişliğini santimetre hassasiyetinde ölçüp (raf başlıkları dahil) uygun modeli eşliyoruz; bu ölçü olmadan makine göndermeyiz çünkü yanlış şase, hem palete hem rafa zarar verebilir. Koridor fotoğrafı ve genişlik ölçüsünü paylaşın, aynı gün model önerelim.",
            },
            {
                soru: "Atölyemiz kapalı, dizel forklift kullanmak istemiyoruz; alternatif var mı?",
                cevap:
                    "Elektrikli forklift kapalı atölyeler için varsayılan tercihimizdir — egzoz emisyonu yoktur, gürültüsü düşüktür ve kapalı ortamda güvenlidir. Kapasite ve şarj süresi, günlük kullanım yoğunluğunuza göre seçilir; yoğun tam gün kullanımda yedek akü veya vardiya arası şarj planı öneririz. Dizeli yalnızca açık saha veya çok iyi havalandırılan geniş hollerde öneriyoruz.",
            },
            {
                soru: "Rafımız 5,5 metre yüksekliğinde; her makine bu yüke çıkabilir mi?",
                cevap:
                    "Hayır — kaldırma kapasitesi yükseklikle azaldığı için mast uzadıkça izin verilen yük düşer, bu yüzden 'yüksekliğe çıkar' demek yetmez. Rafın en üst kotundaki tipik palet ağırlığını ve o yükseklikteki makinenin kapasite tablosunu birlikte kontrol ediyoruz. OSTİM'in 4-6 metre bant raflarında orta sınıf elektrikli istif makineleri genellikle yeterlidir; 5,5 metre ve üzeri için tabloyu keşifte netleştiririz.",
            },
            {
                soru: "Sadece bir kamyon dolusu malzemeyi indirtmek istiyoruz, uzun süreli kiralamaya gerek yok; olur mu?",
                cevap:
                    "Olur — bu tip tek seferlik yükleme-boşaltma işleri için operatörlü kısa süreli kiralama (yarım gün-bir gün) en ekonomik seçenektir. Makine, operatör ve nakliye tek pakette gelir, iş biter bitmez makine geri alınır. Sürekli depo işletmeniz varsa (günlük istifleme) uzun dönem operatörsüz kiralama daha ekonomiktir — hangisinin size uygun olduğunu iş sıklığınıza göre birlikte belirleriz.",
            },
            {
                soru: "Forklift operatörümüzün belgesi yok; siz operatör de sağlıyor musunuz?",
                cevap:
                    "Evet, operatörlü kiralama seçeneğimiz var — geçerli forklift operatör belgesine ve deneyime sahip operatörümüz makineyle birlikte gelir. Kendi personelinizi kullanmak istiyorsanız (operatörsüz kiralama), personelin geçerli belgeye sahip olması mevzuat gereğidir ve teslimat öncesi bu belgeyi kontrol etmenizi öneririz. Dar koridor gibi zorlu sahalarda, ilk çalışmada kısa bir oryantasyon turu öneririz.",
            },
            {
                soru: "Atölyemizin zemini eski ve pürüzlü; forklift bundan etkilenir mi?",
                cevap:
                    "Etkilenebilir — pürüzlü veya hafif eğimli zeminlerde tekerlek tipi ve sayısı farklı seçilebilir, standart sert-düz zemin lastiği her zemine uygun olmayabilir. Zeminin durumunu (çatlak, eğim, eski döşeme) keşifte değerlendirip uygun tekerlek konfigürasyonunu seçiyoruz. OSTİM'in eski yapı stokunda bu tip zemin farklılıkları sık görülür; bu yüzden atölye içi keşfi ihmal etmiyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Dar koridor forklift şase ve kapasite ilişkisi üretici teknik verileridir; OSTİM atölye dokusu ve raf profili kamuya açık saha bilgisidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Dar Alan ve Engebeli Zeminde Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli platform bomu, tek bir düşey kol değil, iki veya üç bölümden oluşan ve her ekleminden bağımsız kırılabilen bir koldur — bu geometri, düz çıkışın imkânsız olduğu her yerde makaslı ve teleskopik platformun önüne geçer. OSTİM ve Ankara'nın diğer OSB'lerinde dar alan ve engebeli zemin, istisna değil kuraldır: bina bitişikliği, avlu darlığı, engel yoğunluğu ve zemin düzensizliği bir arada gelir. Filomuzu bu profil üzerine kurmamızın nedeni budur — bomun kırılım kabiliyeti dar bir boşluğa park edip bir engelin üzerinden veya çevresinden hedefe uzanmayı mümkün kılar, arazi tipi tahrik ise engebeli, eğimli veya stabilize zeminde bu erişimi taşır. Bu sayfa, ana hizmetimiz olan eklemli platform kiralamanın geometrik mantığını, model sınıflarını ve karar sürecini baştan sona anlatır.",
        maddeler: [
            {
                baslik: "Zarf diyagramı: 'kaç metre' değil 'nereye ulaşır' sorusu",
                metin:
                    "Eklemli platform seçiminde tek başına 'çalışma yüksekliği' rakamı yeterli bilgi vermez; asıl belirleyici çalışma zarfı (working envelope) diyagramıdır — her yükseklikte makinenin ulaşabildiği yatay mesafeyi gösteren eğri. Maksimum yükseklik ile maksimum yatay erişim aynı anda kullanılamaz; bom yükseldikçe yatay erişim daralır, alçaldıkça genişler. Dar alan ve engebeli zemin işlerinde üç veriyi bu diyagrama işaretleriz: park noktasının hedefe olan yatay-düşey mesafesi, aradaki engelin yüksekliği-derinliği ve hedefin kotu. Bu üçlü olmadan verilen 'ulaşır' cevabı tahmindir; diyagramla verilen cevap hesaptır.",
            },
            {
                baslik: "Bom sınıfları: kompakt, orta, yüksek metraj",
                metin:
                    "Eklemli platformlar üç kaba sınıfta düşünülür. Kompakt sınıf (12-16 metre çalışma yüksekliği, dar şase) iç mekân ve çok dar avlu işlerinin makinesidir — şase genişliği çoğu kapıdan geçer. Orta sınıf (16-20 metre) OSTİM'in çok katlı sanayi yapılarındaki tipik cephe-tavan işlerinin bandıdır. Yüksek metrajlı sınıf (20 metre ve üzeri, genellikle dizel 4x4) Sincan gibi ağır sanayi hollerinde ve geniş dış sahalarda kullanılır. Hangi sınıfın gerektiği, zarf diyagramı hesabından çıkar — sınıf seçiminde 'daha büyüğü daha güvenli' varsayımı yanlıştır çünkü büyük şase dar alana sığmayabilir.",
            },
            {
                baslik: "Tahrik tipi: akülü, dizel, 4x4",
                metin:
                    "Tahrik seçimi zemine göre yapılır. Akülü modeller sert-düz zeminde (beton atölye, iç mekân) sessiz ve emisyonsuz çalışır ama yumuşak veya eğimli zeminde tırmanma-denge sınırı düşüktür. Dizel 4x4 modeller stabilize, engebeli veya hafif eğimli dış sahalarda arazi lastikleri ve şasi dengeleme sistemiyle çalışır; gürültü ve egzoz nedeniyle kapalı alanda tercih edilmez. Karışık sahalarda (bir kısmı kapalı hol, bir kısmı dış avlu) iş iki fazlı planlanır ve gerekiyorsa iki tahrik tipi arasında geçiş yapılır — tek makineyle her zemin çözülmez, doğru eşleşme keşifte yapılır.",
            },
            {
                baslik: "Kuyruk taşması ve park pozisyonu",
                metin:
                    "Dar alanda çalışan eklemli platformun görünmeyen riski, dönüş sırasında şase arkasının savrulmasıdır (kuyruk taşması/tail swing) — bu, sürücünün gördüğü ön taraftan değil arkadan gelir ve dar bir koridorda duvara veya kişiye temas riski taşır. Park pozisyonu seçilirken bu pay hesaba katılır; dönüş gereken işlerde çevre bariyerlenir ve mümkünse dönüşsüz (tek yönlü giriş-çıkış) bir plan kurulur. Kompakt modellerin kuyruk taşması, standart modellere göre belirgin düşüktür — bu, dar alan seçiminin bir diğer kriteridir.",
            },
            {
                baslik: "Bom güvenliği: eklemli sınıfın kendine özgü kuralları",
                metin:
                    "Eklemli platformun güvenlik profili makaslıdan farklıdır: bom bir engele çarptığında sepet yaylanabilir ve operatör fırlayabilir, bu yüzden tam vücut kemeri ve kısa lanyard eklemli sınıfta EN 280 gereği zorunludur — iç mekânda bile. Elektrik hatlarına güvenli mesafe, iletken bom gövdesi nedeniyle tavizsiz uygulanır; hattın enerjisiz kılınamadığı işlerde erişim geometrisi mesafeyi koruyacak açıdan çizilir. Dar alanda çalışırken dönüş bariyeri ve engelle bomun teması anında iş durdurma talimatı, operatör brifinginin sabit maddeleridir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dar alan / engebeli zemin senaryosu ve model eşleşmesi",
                paragraflar: [
                    "En sık karşılaştığımız beş dar alan-engebeli zemin senaryosu ve önerdiğimiz model sınıfı aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Zemin/alan tipi", "Model sınıfı", "Kritik ölçü"],
                    satirlar: [
                        ["Dar avlu, sundurma üstü cephe", "Beton, dar park", "Kompakt akülü 12 – 16 m", "Park boşluğu + engel yüksekliği"],
                        ["Çok katlı iş hanı cephesi", "Beton, kaldırım", "Orta sınıf 16 – 20 m", "Zarf diyagramı hesabı"],
                        ["Kurulu hol içi, tezgâh üstü", "Beton, iç mekân", "Kompakt akülü, düşük kapalı yükseklik", "Kapı-koridor genişliği"],
                        ["Stabilize/engebeli dış saha", "Toprak, eğimli", "Dizel 4x4 eklemli", "Eğim sınırı + zemin taşıma"],
                        ["Ağır sanayi holü, yüksek metraj", "Beton, vinç trafiği", "Yüksek metraj 20 m+", "Vinç kilitleme penceresi"],
                    ],
                },
            },
            {
                baslik: "Keşif ölçü seti: üç koordinat, bir fotoğraf",
                paragraflar: [
                    "Eklemli işin keşfi dört veri ister: park boşluğunun ölçüsü ve hedefe yatay uzaklığı, aşılacak engelin yüksekliği ile derinliği, hedefin yerden kotu ve tümünü gösteren bir saha fotoğrafı. Bu set, zarf diyagramına işaretlenerek makinenin ulaşıp ulaşamayacağı keşif masasında kesinleştirilir — 'gelip bakalım' turu gerekmez, yanlış makine hiç yola çıkmaz.",
                    "Engebeli zeminli işlerde bu sete bir beşinci veri eklenir: zeminin eğim ve sertlik durumu. Şüpheli zeminde ayrıca bir fotoğraf veya kısa açıklama istenir; gerekirse önceden bir keşif turu planlanır.",
                ],
            },
            {
                baslik: "Doğru sınıfı seçmenin ekonomisi",
                paragraflar: [
                    "Dar alan işlerinde 'daha büyük makine daha güvenli' düşüncesi yanılgıdır — büyük şase dar alana hiç girmeyebilir veya girse bile manevra edemez, bu da işi hiç yapamama veya süre uzaması riskidir. Tersi de doğru değildir: yetersiz metrajlı kompakt model, hedefe ulaşamayan yarım iş demektir. Doğru sınıf, zarf diyagramı hesabından çıkar ve bu hesap, hem gereksiz büyük makinenin dar alana sığmama riskini hem yetersiz makinenin ulaşamama riskini önler.",
                    "Bu yüzden telefon üzerinden 'bize 18 metrelik eklemli lazım' talebini aldığımızda bile, park boşluğu ve engel ölçüsünü sorarız — rakam tek başına yeterli bilgi değildir, geometriyle doğrulanmalıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform tam olarak neden makaslı veya teleskopikten daha uygun?",
                cevap:
                    "Bomun kırılım kabiliyeti nedeniyle — makaslı ve teleskopik yalnızca düz yukarı-öne çıkar, eklemli ise bom birden fazla eklemden kırılarak bir engelin üzerinden veya çevresinden dolaşarak hedefe ulaşır. Hedefin altı doluysa (tezgâh, sundurma, araç, engel) eklemli tek çözümdür. Hedefin altı boşsa ve düz çıkış yetiyorsa makaslı hem daha ekonomik hem daha geniş sepetlidir ve o durumda dürüstçe makaslıyı öneririz — eklemli her işin makinesi değildir.",
            },
            {
                soru: "Zarf diyagramı hesabı olmadan sadece rakam vererek makine seçebilir miyiz?",
                cevap:
                    "Riskli olur — 'çalışma yüksekliği' tek başına yeterli bilgi değildir çünkü maksimum yükseklikte yatay erişim daralır. Dar alan işlerinde park boşluğu, engel ölçüsü ve hedef kotu birlikte diyagrama işaretlenmeden verilen rakam tahmindir. Bu üçlü veriyi paylaşırsanız (fotoğrafla birlikte en hızlısı) diyagram kontrolünü biz yapar, ulaşan modelleri listeleriz — sahaya yanlış makineyle gidip geri dönmek, ikinci sevkiyat maliyeti demektir ve bunu önlemek keşifin amacıdır.",
            },
            {
                soru: "Dış sahamız engebeli ve eğimli; hangi tahrik tipi güvenli çalışır?",
                cevap:
                    "Dizel 4x4 eklemli — arazi lastikleri, yüksek tırmanma kabiliyeti ve şasi dengeleme sistemiyle bu sahalar için tasarlanmıştır. Akülü modeller sert-düz zemin ister ve engebeli/stabilize sahada tırmanma-denge sınırına takılabilir. Güvenli çalışmanın anahtarı doğru park pozisyonudur: eğim, makinenin sınırı içinde kalacak noktada seçilir; sınır dışına çıkıldığında makine çalışmayı zaten kilitler. Saha eğimini ve zemin fotoğrafını keşifte netleştiriyoruz.",
            },
            {
                soru: "Dar bir avluda dönüş yapmamız gerekiyor; kuyruk taşması riski nedir?",
                cevap:
                    "Kuyruk taşması, makine dönerken şase arkasının savrulmasıdır ve dar avluda görünmeyen bir risktir — operatörün önden gördüğü değil arkadan gelen tehlikedir. Kompakt modellerde bu taşma standart modellere göre belirgin düşüktür ve dar alan seçiminde bu kriteri öne çıkarırız. Dönüş gereken her işte çevre bariyerlenir; mümkünse tek yönlü giriş-çıkışlı bir park planı kurularak dönüş ihtiyacı en aza indirilir.",
            },
            {
                soru: "Elektrik hattı yakınında eklemli platformla çalışmak güvenli mi?",
                cevap:
                    "Güvenli mesafe planıyla evet, plansız hayır. Bom iletken gövdedir ve hat enerjisiz kılınabiliyorsa (dağıtım şirketi süreciyle) iş rahat planlanır; kılınamıyorsa gerilim sınıfına göre tanımlı güvenli mesafe korunacak şekilde erişim geometrisi çizilir — bazen hedefe farklı bir açıdan yaklaşmak mesafeyi sağlar. Mesafenin sağlanamadığı işi almayız, risk almaya değmez. Hat konumunu fotoğrafta işaretleyin, geometri kontrolünü keşifte yapalım.",
            },
            {
                soru: "18 metrelik eklemli istiyoruz ama avlumuz gerçekten çok dar; büyük makine sığar mı diye endişeliyiz?",
                cevap:
                    "Haklı bir endişe ve bu yüzden metraj tek başına yeterli değildir — 18 metre yükseklik, farklı şase genişliklerinde makinelerden gelebilir. Avlu ölçüsünü ve engel-hedef geometrisini paylaşırsanız, o metrajda hem sığan hem ulaşan model kombinasyonunu ararız; bazen tek makine yerine daha kompakt bir modelin farklı bir açıdan yaklaşması aynı sonucu verir. Sığmayan bir makineyi 'olur' diyerek göndermeyiz — bu, hem işi geciktirir hem güven kaybettirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Zarf diyagramı, kuyruk taşması ve tahrik tipi ayrımı EN 280 ve üretici standartlarıdır; OSTİM ve Ankara OSB'lerinin dar alan-engebeli zemin dokusu kamuya açık saha bilgisidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Küçük İmalathanelerde İç Mekân ve Depo İçi Platform Kiralama",
        giris:
            "OSTİM'in küçük imalathanelerinde iç mekân işi, dış mekân işinden tamamen farklı bir kısıt seti taşır: kapı genişliği, tavan yüksekliği, zemin türü ve içeride zaten duran makine parkı. Bir platformun atölyeye girebilmesi için önce kapıdan geçmesi, sonra tavana çarpmadan ilerlemesi, sonra da tezgâh dizilimi arasında manevra edebilmesi gerekir — üçü birden sağlanmadan iş başlamaz. Bu sayfa, kompakt iç mekân eklemli ve akülü makaslı modellerin OSTİM atölyelerindeki tipik kullanımını, kapı-koridor ölçümünün neden ilk adım olduğunu ve iç mekâna özgü güvenlik kurallarını anlatır.",
        maddeler: [
            {
                baslik: "Kapı ölçüsü: işin girebilmesinin ilk şartı",
                metin:
                    "İç mekân talebinde ilk sorduğumuz ölçü kapı genişliği ve yüksekliğidir — çünkü makinenin çalışma yüksekliği ne olursa olsun, kapıdan geçemiyorsa iş başlamaz. Kompakt akülü eklemli ve makaslı modeller genellikle 80-90 cm bandında kapılardan geçecek şekilde tasarlanır; standart sanayi kapısı bu bandın üzerindedir ama bazı eski atölye yapılarında kapı daha dardır. Kapı ölçüsü net değilse iş öncesi teyit alınır — sahaya gidip kapıdan geçmeyen makineyle karşılaşmak, hem zaman hem güven kaybıdır.",
            },
            {
                baslik: "Kapalı yükseklik ve tavan payı",
                metin:
                    "Atölye tavanları genellikle 4-8 metre bandındadır ama bazı eski yapılarda veya ara katlı bölümlerde bu düşer. Makinenin kapalı hâldeki (park pozisyonundaki) yüksekliği, tavana veya sarkan tesisata (aydınlatma, boru, kablo tavası) çarpmayacak şekilde seçilir — bu ölçü çalışma yüksekliğinden bağımsız ayrı bir kontroldür. Düşük kapalı yükseklikli özel modeller, standart tavanın altında bile çalışabilecek şekilde tasarlanmıştır ve alçak tavanlı atölyelerde bu seçilir.",
            },
            {
                baslik: "Tezgâh dizilimi arasında manevra",
                metin:
                    "İmalathane içindeki hedeflerin altı neredeyse hiç boş değildir — torna-freze hatları, pres tezgâhları, kaynak masaları taşınamaz. Kompakt iç mekân eklemli, atölye kapısından girer, koridorda ilerler ve bomunu tezgâhın üzerinden hedefe uzatır; bu, dar şase ve düşük kapalı yüksekliğin birleşiminin sağladığı bir manevradır. Manevra alanı dar olduğundan operatör, ilerlerken çevredeki sabit ekipmana temas etmemek için düşük hızda ve gözlemciyle çalışır.",
            },
            {
                baslik: "Zemin türü: parke, beton, epoksi kaplama",
                metin:
                    "Akülü modeller sert-düz zemin ister ve OSTİM atölyelerinin çoğu beton veya epoksi kaplı zemine sahiptir — bu, akülünün varsayılan tercih olmasının nedenidir. Zeminde hassas kaplama (yeni epoksi, hassas cihaz altı zemin) varsa lastik izi bırakmayan (non-marking) tekerlek seçilir. Zemin bozuk veya eski beton çatlaklıysa, tekerlek geçişinde takılma riskine karşı güzergâh önceden kontrol edilir; ciddi bozukluk varsa geçici düzeltme (metal plaka) önerilir.",
            },
            {
                baslik: "Vinçli atölyelerde sepet-kanca ayrımı",
                metin:
                    "OSTİM'in vinçli atölyelerinde platform sepeti ile vinç kancasının aynı düşey hatta girmemesi, temel güvenlik kuralıdır — bu ayrım, iş öncesi vinç operatörüyle koordine edilir ve gerekirse vinç, çalışma bölgesinde kısa süreliğine kilitlenir. Kilitleme penceresi üretim programına göre kısa tutulur ki iş akışı fazla etkilenmesin. Bu koordinasyon, atölye içi eklemli işlerinin standart bir parçasıdır ve teslimat öncesi operatör brifinginde ayrıca vurgulanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân ölçü kontrol listesi",
                paragraflar: [
                    "İç mekân işlerinde makinenin sığıp sığmayacağını belirleyen beş ölçü ve neden önemli oldukları aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Ölçü", "Neden önemli", "Tipik OSTİM değeri", "Kontrol yöntemi"],
                    satirlar: [
                        ["Kapı genişliği-yüksekliği", "Makine giremezse iş başlamaz", "80 – 120 cm bandı", "Şerit metre + fotoğraf"],
                        ["Tavan/kapalı yükseklik payı", "Sarkan tesisata çarpma riski", "4 – 8 m bandı", "Göz kontrolü + ölçü"],
                        ["Koridor genişliği", "Manevra ve dönüş imkânı", "Değişken, dar olabilir", "En dar noktadan ölçü"],
                        ["Zemin türü", "Tekerlek tipi ve iz bırakma", "Beton/epoksi", "Fotoğraf + kaplama bilgisi"],
                        ["Vinç varlığı", "Kanca-sepet ayrımı gereksinimi", "Bazı atölyelerde mevcut", "Sözlü teyit + saha kontrolü"],
                    ],
                },
            },
            {
                baslik: "Yanlış makineyle sahaya gitmemenin ekonomisi",
                paragraflar: [
                    "İç mekân işlerinde en sık yaşanan sorun, kapı veya koridor ölçüsü kontrol edilmeden gönderilen makinenin sahaya sığmamasıdır — bu durumda makine geri döner, ikinci bir sevkiyat planlanır ve iş bir gün gecikir. Bu maliyeti önlemenin tek yolu, teslimat öncesi ölçü kontrolüdür; telefonla sözlü tarif yerine fotoğraf ve şerit metre ölçüsü istememizin nedeni budur.",
                    "İlk kez çalıştığımız atölyelerde, ölçü belirsizse teslimattan önce kısa bir keşif turu önerilir — bu tur, makine göndermeden yalnızca ölçü almak içindir ve sonraki tüm işlerde artık ölçü kayıtlı olduğundan tekrar gerekmez.",
                ],
            },
            {
                baslik: "İç mekân çalışma disiplini",
                paragraflar: [
                    "Kapalı alanda çalışma, açık sahadan farklı disiplinler ister: akülü makinenin sessiz ve emisyonsuz olması avantajdır ama dar alanda düşük hızda ilerleme ve sürekli gözlemci desteği önceliklidir. Alet ve malzeme sepette bağlanır — dar koridorda düşen bir alet, hem hassas tezgâha zarar verebilir hem yaralanma riski taşır. Vinçli atölyelerde kilitleme penceresi dışında bom, vinç hattının altına sokulmaz.",
                    "İş bitiminde makinenin çıkışı da girişi kadar planlıdır — dar koridorda geri manevra yerine mümkünse ileri doğru çıkış güzergâhı kurulur; bu, kuyruk taşması riskini azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizin kapısı standarttan biraz dar görünüyor; makine geçer mi?",
                cevap:
                    "Kesin cevap ölçüyle gelir — kompakt iç mekân modelleri genellikle 80-90 cm bandında kapıdan geçer ama eski yapı stoğunda bazı kapılar daha dardır. Kapı genişliği ve yüksekliğini şerit metreyle ölçüp fotoğrafla paylaşın; bu ölçüyü model listesiyle karşılaştırıp geçen modeli önceden söyleriz. Ölçü kontrolü yapılmadan makine göndermeyiz — sahaya gidip kapıdan geçmemek, hem sizin hem bizim zamanımızı boşa harcar.",
            },
            {
                soru: "Atölyemizde tavan alçak ve üzerinde kablo tavası var; risk oluşturur mu?",
                cevap:
                    "Kontrol edilmeden evet, kontrol edilirse hayır. Makinenin kapalı hâldeki yüksekliği, tavana veya sarkan tesisata çarpmayacak şekilde ayrıca seçilir — bu, çalışma yüksekliğinden bağımsız bir ölçüdür. Alçak tavanlı atölyeler için düşük kapalı yükseklikli özel modeller vardır. Tavan yüksekliğini ve varsa sarkan tesisatın alt kotunu fotoğrafla paylaşın, uygun modeli buna göre seçelim.",
            },
            {
                soru: "Tezgâhlarımızın üzerine erişim gerekiyor ama tezgâhları taşıyamayız; ne yapılır?",
                cevap:
                    "Tezgâh taşınmadan çalışılır — bu, iç mekân eklemli işlerinin tipik senaryosudur: makine tezgâh hattının yanına park eder, bomunu tezgâhın üzerinden hedefe uzatır. Kapı-koridor ölçüsü teyit edildikten sonra bu manevra rahatlıkla yapılır. Tezgâh sökümü hem üretim kaybı hem hassas ayar bozulması riskidir; eklemli erişim tam bu maliyeti ortadan kaldırmak için tercih edilir.",
            },
            {
                soru: "Zeminimiz yeni epoksi kaplı, iz kalmasından endişeleniyoruz; çözüm var mı?",
                cevap:
                    "Var — non-marking (iz bırakmayan) tekerlekli modeller hassas kaplamalar için standart seçimimizdir. Zeminin türünü ve varsa özel hassasiyetini (yeni kaplama, hassas cihaz altı zemin) teslimat öncesi belirtin, tekerlek konfigürasyonunu buna göre seçelim. Zemin bozuk veya çatlaklıysa da ayrıca değerlendirilir; güzergâh önceden kontrol edilerek takılma riski önlenir.",
            },
            {
                soru: "Atölyemizde tavan vinci var; platformla çakışma riski nasıl yönetilir?",
                cevap:
                    "Sepet-kanca düşey ayrımıyla — platform sepeti ile vinç kancasının aynı düşey hatta girmemesi temel kural, bu ayrım iş öncesi vinç operatörüyle koordine edilir. Gerekirse vinç, çalışma bölgesinde kısa süreliğine kilitlenir ve pencere üretim programınıza göre kısa tutulur. Vinç varlığını ve kullanım yoğunluğunu teslimat öncesi bildirin, koordinasyon planını önceden kuralım.",
            },
            {
                soru: "İlk kez çalışıyoruz, ölçüleri kendimiz doğru alabilir miyiz yoksa siz mi gelip bakmalısınız?",
                cevap:
                    "Çoğu durumda kendiniz alabilirsiniz — kapı genişliği-yüksekliği, en dar koridor noktası ve tavan yüksekliği şerit metreyle ölçülüp fotoğrafla paylaşıldığında genellikle yeterlidir. Ölçü belirsiz veya sahada karmaşık bir düzen (birden fazla dönüş, ara kat) varsa, teslimattan önce kısa bir keşif turu öneririz — bu tur sadece ölçü almak içindir, makine gelmez. İlk ölçüm kayıt altına alındıktan sonra sonraki işlerde tekrar gerekmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapı-koridor-tavan ölçü ilişkisi ve non-marking tekerlek uygulaması üretici teknik verileridir; OSTİM atölye yapı stoğu kamuya açık saha bilgisidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Dar Parsellerde Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "OSTİM ve çevresindeki OSB'lerde yeni bina inşası veya mevcut binaya ek yapım, neredeyse her zaman dar bir parselde ve komşu yapılara bitişik şekilde ilerler — bu, standart vinç ve iskele planlarının şehir dışı şantiyelerdeki gibi geniş çalışma alanı bulamayacağı anlamına gelir. Çelik konstrüksiyon montajında kolon-kiriş birleşimleri, aşık montajı ve cephe kaplaması, kurulmakta olan iskeletin dışından erişilmesi gereken işlerdir ve eklemli platformun bom kırılımı, dar parseldeki montaj sırasının doğal makinesidir. Bu sayfa, dar parsel çelik montaj işlerinde eklemli platformun rolünü, montaj sırasıyla ilişkisini ve saha güvenliği kurallarını anlatır.",
        maddeler: [
            {
                baslik: "Dar parselde montaj sırası ve makine erişimi",
                metin:
                    "Çelik iskelet montajı belirli bir sırayla ilerler — önce kolonlar, sonra ana kirişler, sonra aşıklar ve çaprazlar. Dar parselde makinenin park edeceği boşluk, montaj ilerledikçe daralır: iskelet büyüdükçe eskiden boş olan alanlar dolar. Bu yüzden makine park planı, tek seferlik değil montaj takvimine göre güncellenen bir plandır — hangi aşamada makinenin nereden çalışacağı, montaj ekibiyle birlikte önceden çizilir. Geç fark edilen bir park sorunu, montajın o gününü tamamen durdurabilir.",
            },
            {
                baslik: "Kolon-kiriş birleşimlerinde bom erişimi",
                metin:
                    "Kolon-kiriş birleşim noktaları genellikle iskeletin iç tarafında, komşu elemanların arasında kalır ve eklemli bom, dışarıdan park edip elemanların arasına kırılarak bu noktalara ulaşır — makaslının düz çıkışıyla bu geometri çoğu noktada mümkün değildir. Cıvatalama veya kaynak işlemi sırasında sepet, birleşim noktasına yakın ama montaj ekibinin çalışma alanını kapatmayacak konumda tutulur. Aynı anda birden fazla ekip farklı birleşimlerde çalışıyorsa, platform sırası günlük plana bağlanır.",
            },
            {
                baslik: "Askıda yük hattı altında çalışma yasağı",
                metin:
                    "Montaj sahasında vinç, çelik elemanları sürekli havada taşır ve bu hat, platformun bom rotasıyla asla kesişmemelidir — askıda yük hattının altına bom sokmak, kural olarak yasaktır. Vinç operatörüyle telsiz koordinasyonu bu yüzden sürekli açık tutulur: platform bir bölgede çalışırken vinç o bölgeye yük taşımaz, vinç yük taşırken platform o rotanın dışında beklenir. Bu koordinasyon, montaj hızını düşürmez çünkü iki ekibin işi zaten farklı noktalardadır — sadece rota çakışmasını önler.",
            },
            {
                baslik: "Cephe kaplama ve panel montajında seri ilerleme",
                metin:
                    "İskelet tamamlandıktan sonra cephe kaplama (sandviç panel, trapez sac) aşaması, hat boyunca seri ilerler: makine panel hattını izleyerek kademeli konum değiştirir, sepette panel-vidalama ekipmanı taşınır. Dar parselde bu seri ilerleme, park noktasının hat boyunca birkaç kez değişmesini gerektirir — her konum değişikliğinde çevredeki iskele, malzeme yığını veya komşu duvarla mesafe yeniden kontrol edilir. Rüzgârlı günlerde geniş panel yüzeyinin yelken etkisi nedeniyle panel taşıma durdurulur.",
            },
            {
                baslik: "Komşu parsel ve ortak duvar hassasiyeti",
                metin:
                    "OSTİM'in bitişik nizam dokusunda montaj sahası genellikle bir komşu parselle duvar veya çok dar bir aralıkla ayrılır. Bu aralıktan çalışırken hem komşu yapıya fiziksel temas hem komşu işletmenin faaliyetine müdahale (gürültü, erişim engeli) önlenir — park pozisyonu ve çalışma saatleri bu hassasiyetle planlanır. Komşu parselden geçici erişim izni gerekiyorsa (örneğin daha iyi bir açı için), bu izin işveren üzerinden önceden alınır; izinsiz komşu parsele girilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşaması ve platform rolü",
                paragraflar: [
                    "Çelik konstrüksiyon montajının aşamalarına göre platformun rolü ve dikkat noktası aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Platform rolü", "Kritik risk", "Koordinasyon"],
                    satirlar: [
                        ["Kolon dikme", "Genellikle vinç ağırlıklı, platform destek", "Vinç hattı", "Telsiz koordinasyon"],
                        ["Kiriş-aşık montajı", "Birleşim noktası erişimi", "Askıda yük altı", "Günlük sıra planı"],
                        ["Çapraz bağlantı", "Dar açılı nokta erişimi", "Kuyruk taşması", "Dönüş bariyeri"],
                        ["Cephe/çatı kaplama", "Seri hat ilerleme", "Rüzgâr/panel yelken etkisi", "Hava takibi"],
                        ["Son kontrol-detay", "Nokta bazlı erişim", "Düşük öncelik ama dar erişim", "Esnek planlama"],
                    ],
                },
            },
            {
                baslik: "Montaj ekibiyle günlük saha koordinasyonu",
                paragraflar: [
                    "Dar parsel çelik montajında platform operatörü, montaj ekibinin bir parçası gibi çalışır — her sabah kısa bir saha toplantısında o günün montaj sırası, hangi noktalarda platform gerektiği ve vinç rotasının nereden geçeceği netleştirilir. Bu koordinasyon, işin ortasında 'platform şimdi nereye park etsin' sorusuyla zaman kaybetmeyi önler.",
                    "Montaj hızlandıkça (özellikle cephe kaplama fazında) platform konum değişikliği sıklaşır; bu fazda operatörün montaj ekibiyle sürekli görsel temas hâlinde çalışması, koordinasyonu telsize bağımlı kalmaktan çıkarır.",
                ],
            },
            {
                baslik: "Dar parselde iskele ile platform karşılaştırması",
                paragraflar: [
                    "Dar parsel montajında iskele kurmak bazen tek seçenek gibi görünür ama alan darlığı aslında iskelenin de kısıtıdır — iskele kurulumu için de boşluk gerekir ve dar parselde bu boşluk platform kadar sınırlıdır. Platformun avantajı, gün içinde konum değiştirebilmesi ve kurulum-söküm zamanı gerektirmemesidir; iskelenin avantajı ise geniş, sabit bir çalışma yüzeyi sunmasıdır. Kısa süreli, hareketli montaj işlerinde platform; uzun süreli, sabit ve geniş yüzeyli işlerde (örneğin büyük bir cephe panelinin toptan kaplanması) iskele daha ekonomik olabilir.",
                    "Karar, işin süresine ve hareketliliğine göre keşifte birlikte verilir — bazı projelerde ikisi aynı sahada farklı aşamalarda kullanılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Parselimiz çok dar, iskelet büyüdükçe makine park edecek yer kalmayacak gibi görünüyor; nasıl planlanır?",
                cevap:
                    "Montaj takvimine göre güncellenen bir park planıyla — tek seferlik değil, her aşama için ayrı park noktası önceden çizilir. Montaj ekibinizle birlikte kolon-kiriş-çapraz sırasını görüp hangi aşamada makinenin nereden çalışacağını belirleriz; iskelet büyüdükçe daralan alanlar bu plana önceden işlenir. Parsel ölçüsünü ve montaj takviminizi paylaşın, aşama bazlı planı birlikte kuralım.",
            },
            {
                soru: "Vinçle aynı anda çalışacağız; çakışma riski nasıl önlenir?",
                cevap:
                    "Sürekli telsiz koordinasyonuyla — askıda yük hattının altına bom asla sokulmaz, platform bir bölgede çalışırken vinç o bölgeye yük taşımaz. İki ekibin işi zaten farklı noktalarda olduğundan bu koordinasyon montaj hızını düşürmez, sadece rota çakışmasını önler. Vinç operatörünüzle ilk gün kısa bir brifingle çalışma kuralını netleştiririz; bu kural, sahadaki tüm ekipler için tek standarttır.",
            },
            {
                soru: "Cephe panel montajında rüzgâr işi ne kadar etkiler?",
                cevap:
                    "Ciddi etkiler — geniş panel yüzeyi rüzgârda yelken gibi davranır ve rüzgârlı günlerde panel taşıma durdurulur; bu, güvenlik kuralımızdır, pazarlık konusu değildir. Ankara'nın açık sahalarında öğleden sonra rüzgârlanması bilinen bir desendir, panel işleri bu yüzden sabah bloklarına planlanır. Rüzgârlı bir haftada panel montajı süresi uzayabilir; bunu takvime baştan işleriz ki sürpriz gecikme yaşanmasın.",
            },
            {
                soru: "Komşu parselle aramızda çok dar bir aralık var; oradan erişim mümkün mü?",
                cevap:
                    "Dar aralıktan erişim, kompakt eklemli modellerin tipik işidir — ama önce iki şey kontrol edilir: aralığın genişliği (makinenin fiziksel olarak girip girmediği) ve komşu parsele geçici erişim gerekip gerekmediği. Komşu parselden geçiş gerekiyorsa bu izin işvereniniz üzerinden önceden alınır, izinsiz girilmez. Aralık ölçüsünü ve komşu parsel durumunu paylaşın, geçerli erişim planını birlikte çizelim.",
            },
            {
                soru: "İskele mi kursak platform mu kiralasak, hangisi bu proje için daha ekonomik?",
                cevap:
                    "İşin süresine ve hareketliliğine bağlı — kısa süreli, sahanın farklı noktalarında hareketli çalışma gerektiren montaj işlerinde platform daha ekonomiktir çünkü kurulum-söküm zamanı gerektirmez ve gün içinde konum değiştirebilir. Uzun süreli, sabit ve geniş bir yüzeyin toptan kaplanacağı işlerde iskele daha uygun olabilir. Bazı projelerde ikisi farklı aşamalarda birlikte kullanılır. Montaj planınızı paylaşın, iki senaryonun maliyet karşılaştırmasını keşifte çıkaralım.",
            },
            {
                soru: "Montaj ekibimiz platform kullanımına alışkın değil; koordinasyonu siz mi yönetiyorsunuz?",
                cevap:
                    "Evet — operatörümüz montaj ekibinizin parçası gibi çalışır ve her sabah kısa bir saha toplantısıyla günün sırasını, park noktalarını ve vinç rotasını birlikte netleştiririz. İlk günlerde koordinasyon biraz zaman alabilir ama montaj ekibiyle platform operatörü arasındaki uyum hızla oturur; bu, dar parsel projelerinde standart sürecimizdir ve montaj hızınızı yavaşlatmak yerine hızlandırmayı hedefler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Askıda yük hattı ve vinç koordinasyon kuralları EN 280 ve iş güvenliği mevzuatı çerçevesindedir; OSTİM'in bitişik nizam parsel dokusu kamuya açık saha bilgisidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahalarında Platform Kiralama",
        giris:
            "Bu, filomuzun ana odağı olmayan bir hizmet başlığıdır ve bunu dürüstçe baştan söylemek gerekir: OSTİM merkezli çalışma alanımız, kentsel OSB dokusuna göre kuruludur ve tarım-silo işleri bölgemizde marjinal bir talep hacmine sahiptir. Buna rağmen Ankara'nın kırsal çeperinde — özellikle organize sanayi bölgelerinin dışına taşan tarımsal işletme ve depolama tesislerinde — zaman zaman silo bakımı, tahıl deposu çatı işi veya sera çelik konstrüksiyonu gibi talepler gelir. Bu sayfa, bu tip işlerde eklemli platformun neyi yapıp neyi yapamadığını, hangi durumda hizmet verebileceğimizi ve hangi durumda dürüstçe yönlendirme yapacağımızı anlatır.",
        maddeler: [
            {
                baslik: "Silo dış cephesi ve çatı erişimi",
                metin:
                    "Tahıl veya yem silolarının dış cephe bakımı (boya, kaynak onarımı, merdiven-korkuluk tamiri) ve üst kapak-havalandırma erişimi, eklemli platformun teknik olarak yapabileceği bir iştir — silo yüksekliği ve çevresindeki zemin uygunsa. Silolar genellikle açık sahada, stabilize veya toprak zeminde bulunur; bu, dizel 4x4 eklemli modeli gerektirir. Silo çevresinde yeterli park boşluğu varsa (genellikle vardır, tarımsal tesislerde alan kısıtı OSTİM'e göre daha azdır) erişim görece basittir; darlık, bu sayfanın diğer konularındaki kadar sık karşılaşılan bir problem değildir.",
            },
            {
                baslik: "Sera çelik konstrüksiyonu ve örtü montajı",
                metin:
                    "Modern sera yapılarının çelik iskelet montajı ve örtü (polikarbon, cam) montajı, standart çelik konstrüksiyon işine benzer ama bir farkla: sera içi çalışma, örtü hasar riskine karşı ekstra dikkat ister — bom hareketleri örtü panellerine temas etmeyecek şekilde yavaşlatılır. Sera dışından çalışılabilen işlerde (dış iskelet, üst kuşak) bu risk azalır. Bu tip işlerde talep geldiğinde, sera projesinin ölçeğine ve erişim koşullarına göre uygunluk değerlendirilir.",
            },
            {
                baslik: "Kırsal alanda mesafe ve nakliye maliyeti",
                metin:
                    "Ankara'nın kırsal çeperindeki bir tarım tesisi, merkez üssümüze OSTİM içindeki bir işten çok daha uzak olabilir ve bu mesafe, nakliye maliyetini iş bedeline göre orantısız büyütebilir. Küçük ölçekli, kısa süreli bir işte nakliye bedeli işin kendisinden pahalı çıkabilir — bu durumda dürüst tavsiyemiz, işi ekonomik olmayan bir mesafede tek başına almak yerine, bölgedeki başka taleplerle birleştirmek veya farklı bir zaman diliminde planlamaktır.",
            },
            {
                baslik: "Zemin belirsizliği: tarla, çamur, mevsimsel değişim",
                metin:
                    "Tarımsal arazilerin zemini mevsime göre büyük ölçüde değişir — kuru mevsimde sert olan bir tarla, yağmur sonrası çamura dönüşebilir ve bu, dizel 4x4 modelin bile tırmanma-denge sınırına takılmasına neden olabilir. Zemin durumu, iş tarihine yakın bir zamanda (mümkünse aynı gün) fotoğrafla teyit edilir; belirsiz zeminde iş, kuru bir güne ertelenir veya zemin geçici olarak sağlamlaştırılır (stabilizasyon, plaka döşeme) — bu ek maliyeti baştan söyleriz.",
            },
            {
                baslik: "Bu hizmetin sınırları: ne zaman uygun değiliz",
                metin:
                    "Açıkça söylemek gerekir: büyük ölçekli tarımsal işletme kompleksleri, ağır hasat makinesi bakımı veya OSTİM'e çok uzak lokasyonlarda düzenli-tekrarlı iş talepleri bizim ana uzmanlık alanımızın dışındadır ve bu tip işler için bölgeye daha yakın ve tarım sektörüne odaklı bir tedarikçi genellikle daha ekonomik ve hızlı çözüm sunar. Bunu söylemekten çekinmiyoruz çünkü yanlış işi kabul edip yavaş-pahalı hizmet vermek, ne bize ne müşteriye fayda sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım-silo işlerinde uygunluk değerlendirmesi",
                paragraflar: [
                    "Bu tip taleplerde uygunluğu belirleyen faktörler ve tipik sonuç aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Faktör", "Uygun senaryo", "Sınırlı/uygun değil"],
                    satirlar: [
                        ["Mesafe (merkez üsse)", "Ankara çevresi, makul mesafe", "Çok uzak kırsal bölge"],
                        ["Zemin durumu", "Kuru, stabilize/sert toprak", "Çamur, mevsimsel belirsiz zemin"],
                        ["İş ölçeği", "Tekil silo/sera, nokta iş", "Büyük kompleks, tekrarlı iş"],
                        ["Erişim alanı", "Açık, park boşluğu yeterli", "Çok dar, ekipman yoğun tesis"],
                        ["Zaman hassasiyeti", "Esnek planlanabilir", "Hasat dönemi gibi dar pencere"],
                    ],
                },
            },
            {
                baslik: "Dürüst ön değerlendirme süreci",
                paragraflar: [
                    "Bu tip bir talep geldiğinde önce dört soruyu netleştiririz: mesafe, zemin durumu, iş ölçeği ve zaman hassasiyeti. Bu dört veriyle hem uygun olup olmadığımızı hem de uygunsa hangi model ve maliyetle çalışabileceğimizi hızlıca değerlendirebiliriz. Uygun değilsek bunu ilk görüşmede söyleriz — 'gelip bakalım' diyerek zaman kaybettirmeyiz.",
                    "Uygun olduğumuz işlerde ise OSTİM'deki işlerimizle aynı titizlikle çalışırız: zarf diyagramı hesabı, zemin kontrolü ve güvenlik brifingi bu sayfanın konusunda da aynı standartla uygulanır.",
                ],
            },
            {
                baslik: "Alternatif öneri sağlama",
                paragraflar: [
                    "Bizim için uygun olmayan bir talep geldiğinde, elimizden geldiğince müşteriyi elleri boş bırakmamaya çalışırız — bölgeye daha yakın veya tarım sektörüne özel ekipman sunan tedarikçileri araştırıp yönlendirme yapabiliriz. Bu, kısa vadede iş kaybı gibi görünse de uzun vadede doğru iş için doğru adres olarak hatırlanmamızı sağlar.",
                    "Sınırlarımızı bilerek çalışmak, kabul ettiğimiz her işte tam kapasiteyle durabilmemizin de garantisidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tahıl silomuzun dış cephesinde boya-onarım işi var; hizmet veriyor musunuz?",
                cevap:
                    "Silonun konumu Ankara çevresinde makul bir mesafedeyse ve çevresinde yeterli park boşluğu varsa evet — dizel 4x4 eklemli modelle dış cephe ve üst kapak erişimi teknik olarak yapılabilir bir iştir. Silo yüksekliğini, çevre zemin durumunu ve mesafeyi paylaşın, uygunluğu ve maliyeti netleştirelim. Çok uzak bir lokasyondaysa, nakliye maliyetinin iş bedeline oranını dürüstçe göstererek karar sizin olur.",
            },
            {
                soru: "Seramızın çelik iskeleti kuruluyor, örtü montajında platform kullanılır mı?",
                cevap:
                    "Kullanılabilir, özellikle dış iskelet ve üst kuşak işlerinde. Sera içinden çalışılması gereken örtü montajında ekstra dikkat gerekir çünkü bom hareketleri örtü panellerine temas etmemelidir — bu durumda hareketler yavaşlatılmış modda yapılır. Proje ölçeğini ve erişim koşullarını paylaşın, uygunluğu değerlendirelim; büyük ölçekli sera komplekslerinde tarım sektörüne özel bir tedarikçi daha hızlı çözüm sunabilir, bunu da açıkça söyleriz.",
            },
            {
                soru: "Tesisimiz OSTİM'e oldukça uzak; nakliye maliyeti işi mantıksız kılar mı?",
                cevap:
                    "Bağlıdır — küçük ölçekli, kısa süreli bir işte mesafe nakliye maliyetini orantısız büyütebilir ve bunu ilk görüşmede rakamla gösteririz. İş büyükse veya bölgede başka taleplerle birleştirilebiliyorsa nakliye payı düşer ve iş ekonomik hâle gelir. Mesafeyi ve iş kapsamını paylaşın, dürüst bir maliyet tablosu çıkaralım — ekonomik değilse bunu söyleriz, gereksiz teklif vermeyiz.",
            },
            {
                soru: "Arazimiz yağmur sonrası çamur oluyor; platform çalışabilir mi?",
                cevap:
                    "Çamurlu zeminde çalışmayız — dizel 4x4 modelin bile tırmanma-denge sınırı bu koşulda aşılabilir ve devrilme riski oluşur. İş tarihine yakın zeminin durumunu fotoğrafla teyit ederiz; çamurluysa kuru bir güne erteleriz veya gerekiyorsa zemin geçici olarak sağlamlaştırılır (stabilizasyon, plaka döşeme) — bu ek maliyeti baştan söyleriz. Mevsimsel zemin değişkenliği olan arazilerde bu kontrolü atlamayız.",
            },
            {
                soru: "Büyük bir tarımsal işletme kompleksinde düzenli bakım anlaşması yapmak istiyoruz; uygun musunuz?",
                cevap:
                    "Dürüstçe söylemek gerekirse büyük ölçekli, tekrarlı tarımsal işletme bakımı ana uzmanlık alanımız değil — bölgenize daha yakın ve tarım sektörüne odaklı bir tedarikçi muhtemelen daha ekonomik ve hızlı hizmet sunar. İhtiyacınız tekil bir iş veya küçük ölçekliyse değerlendirebiliriz; büyük ve sürekli bir anlaşma için ise size uygun bir alternatif aramanızı öneririz ve elimizden geldiğince yönlendirme yaparız.",
            },
            {
                soru: "Hasat dönemi gibi dar bir zaman penceremiz var; garantili tarih verebilir misiniz?",
                cevap:
                    "Dar zaman pencereli, kritik terminli işlerde dürüst cevabımız temkinlidir — ana operasyon alanımız OSTİM olduğu için kırsal bölgedeki bir işe kesin tarih taahhüdü vermek, oradaki mevcut iş yükümüze bağlıdır. Talebinizi mümkün olduğunca erken iletirseniz uygunluğu netleştirebiliriz; ama hasat gibi ertelenemez bir pencereniz varsa, bölgenize daha yakın ve bu tip taleplere odaklı bir tedarikçiyle yedek plan yapmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bu sayfa, hizmetin filomuzun ana odağı olmadığını ve kapsam sınırlarını dürüstçe belirtir; teknik bilgiler (zemin, tahrik tipi) EN 280 ve üretici standartlarıdır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "OSTİM Dar Sokaklarında Enerji ve Aydınlatma Bakım Platformu",
        giris:
            "OSTİM'in dar sokak ağında elektrik direği, sokak aydınlatması ve alçak gerilim hattı bakımı, bölgenin diğer erişim problemleriyle aynı kısıtı taşır: hedefe düz bir çıkışla ulaşmak nadiren mümkündür çünkü direkler genellikle sokak kenarında, park eden araçların ve dar geçişlerin arasında durur. Bu işlerin ikinci ve daha kritik katmanı ise güvenlik mesafesidir — eklemli platformun bom gövdesi iletkendir ve hat yakınında çalışmak, dar alan manevrasından bağımsız ayrı bir disiplin ister. Bu sayfa, OSTİM'in dar sokaklarında enerji-aydınlatma bakım işlerinin erişim ve güvenlik boyutunu, hat mesafesi kurallarını ve tipik iş senaryolarını anlatır.",
        maddeler: [
            {
                baslik: "Direk çevresi park problemi",
                metin:
                    "Elektrik ve aydınlatma direkleri, sokak kenarına dikilir ve çoğu zaman tam o noktada park eden araçlar, üstü kapalı sundurmalar veya dar kaldırım vardır. Makinenin direğe yeterince yakın park edip bomunu direk tepesine uzatabilmesi için önce bu çevre boşluğun ölçülmesi gerekir. Sokak trafiğinin kesilemediği durumlarda tek şerit park düzeni kurulur ve dönüş-çalışma alanı bariyerlenir; kalan şeritten trafik yönlendirmeyle akar. Gerekirse belediye işgaliye süreci planlamaya eklenir.",
            },
            {
                baslik: "İletken bom ve hat mesafesi kuralı",
                metin:
                    "Eklemli platformun bom gövdesi iletkendir ve bu, elektrik hattı yakınındaki her işte tavizsiz uygulanan bir kuralı doğurur: hat enerjisiz kılınabiliyorsa (dağıtım şirketi süreciyle) iş rahat planlanır; kılınamıyorsa gerilim sınıfına göre tanımlı güvenli mesafe korunacak şekilde erişim geometrisi çizilir. OSTİM'in dar sokaklarında hatlar genellikle alçak ve yoğundur, bu da mesafe hesabını daha kritik hâle getirir — bazı durumlarda hedefe farklı bir açıdan yaklaşmak mesafeyi sağlar. Mesafenin sağlanamadığı işi almayız.",
            },
            {
                baslik: "Sokak aydınlatması ve tabela bakımında seri iş",
                metin:
                    "Bir sokaktaki birden fazla aydınlatma direği veya tabela armatürünün bakımı, tek güzergâhta seri olarak planlanır — makine direkten direğe kısa mesafeli geçişlerle ilerler ve nakliye tek girişte kalır. Bu model, belediye veya kooperatif üzerinden gelen toplu bakım taleplerinde özellikle verimlidir. Her direkte çalışma süresi kısadır (genellikle 20-40 dakika); günlük plan, direk sayısına ve aralarındaki mesafeye göre kurulur.",
            },
            {
                baslik: "Trafo ve pano çevresinde ek güvenlik katmanı",
                metin:
                    "Trafo binası veya elektrik panosu yakınındaki işlerde, hat mesafesi kuralına ek olarak alan izolasyonu da devreye girer — trafo çevresindeki güvenlik hattı asla ihlal edilmez ve bu bölgede çalışma, ilgili dağıtım şirketinin bilgisi ve gerekiyorsa refakati ile yürütülür. Bu tip işlerde önceden bir başvuru-onay süreci gerekebilir; süreç, işveren veya bizim tarafımızdan başlatılıp iş takvimine erken eklenir ki gecikme yaşanmasın.",
            },
            {
                baslik: "Gece ve düşük trafik penceresinde çalışma",
                metin:
                    "Sokak aydınlatması bakımının bir kısmı, gündüz trafiğini etkilememek için gece veya erken sabah penceresine planlanır — özellikle ana cadde üzerindeki direklerde. Akülü modellerin sessizliği gece çalışmasında avantajdır; aydınlatma ihtiyacı işveren veya bizim ekipmanımızla sağlanır. Gece çalışması gerektiren işlerde güzergâh ve bariyer planı, ilgili birimlerle önceden kurulur ve belediye gürültü sınırlarına uyulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji-aydınlatma iş tipi ve güvenlik katmanı",
                paragraflar: [
                    "Bu hizmet kapsamındaki tipik iş türleri ve uygulanan güvenlik katmanı aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["İş türü", "Tipik konum", "Güvenlik katmanı", "Pencere"],
                    satirlar: [
                        ["Sokak aydınlatma direği bakımı", "Cadde/sokak kenarı", "Tek şerit park + bariyer", "Gündüz/gece"],
                        ["Tabela-armatür değişimi", "Cephe/direk üstü", "Hat mesafesi kontrolü", "Gündüz"],
                        ["Alçak gerilim hat bakımı", "Direkler arası", "Enerjisiz kılma veya mesafe", "Dağıtım şirketi koordinasyonu"],
                        ["Trafo/pano çevresi işi", "Trafo binası yakını", "Alan izolasyonu + refakat", "Onaylı pencere"],
                        ["Toplu direk bakım turu", "Sokak/cadde hattı", "Sıralı çalışma, kısa süre/direk", "Belirlenen gün"],
                    ],
                },
            },
            {
                baslik: "Hat mesafesi hesabının pratiği",
                paragraflar: [
                    "Güvenli mesafe, hattın gerilim sınıfına göre değişen sabit bir değerdir ve bu değer pazarlık konusu yapılmaz. Keşifte hattın konumu (direkten direğe yükseklik, hedefe olan yatay-düşey mesafe) fotoğrafla işaretlenir ve erişim geometrisi bu mesafeyi koruyacak açıdan çizilir. Bazı durumlarda hedefe doğrudan değil yandan yaklaşmak, mesafeyi daha rahat sağlar — bu, zarf diyagramı hesabının bir parçasıdır.",
                    "Mesafenin hiçbir açıdan sağlanamadığı nadir durumlarda işi almayız ve bunu açıkça söyleriz; hat enerjisiz kılınana kadar iş ertelenir veya farklı bir yöntem (uzun saplı ekipman, dağıtım şirketinin kendi ekibi) önerilir.",
                ],
            },
            {
                baslik: "Belediye ve dağıtım şirketi süreçleri",
                paragraflar: [
                    "Kamusal alandaki direk ve hat işleri, çoğu zaman belediye işgaliye izni veya dağıtım şirketi bilgilendirmesi gerektirir. Bu süreçleri işletme adına biz yürütebiliriz — talebin erken açılması, sürecin iş takvimine gecikme yaratmadan eklenmesini sağlar. Enerjisiz kılma talebi gerektiren işlerde dağıtım şirketinin kendi programı devreye girer ve bu, bizim kontrolümüz dışında bir süre alabilir; bunu baştan söyleriz ki takvim beklentisi gerçekçi kalsın.",
                    "Toplu bakım turlarında (belediye veya kooperatif üzerinden) bu süreçler tek seferde, tüm güzergâh için birlikte yürütülür — bu, tekil iş başına ayrı süreç yürütmekten daha hızlıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Direğimizin çevresinde sürekli park var, makine nasıl yaklaşır?",
                cevap:
                    "Tek şerit park düzeniyle: dar şaseli eklemli model direğin en yakın uygun boşluğuna park eder, dönüş-çalışma alanı bariyerlenir. Sürekli park sorunuysa, iş öncesi işletmenizin veya belediyenin kısa süreliğine bir alan ayırtması süreci hızlandırır; işgaliye gerekiyorsa bu süreci sizin adınıza yürütebiliriz. Direk çevresindeki boşluğu fotoğrafla paylaşın, park planını önceden netleştirelim.",
            },
            {
                soru: "Hat üzerinde çalışırken enerji kesilecek mi?",
                cevap:
                    "Mümkünse evet, tercih edilen yöntem budur — dağıtım şirketi süreciyle hattın enerjisiz kılınması iş güvenliğini büyük ölçüde artırır. Enerjisiz kılınamayan durumlarda gerilim sınıfına göre tanımlı güvenli mesafe korunarak çalışılır; bu mesafe sabittir ve pazarlık konusu değildir. Hangi yöntemin uygulanacağı, hattın türüne ve dağıtım şirketinin sürecine göre keşifte netleşir; enerjisiz kılma talebi erken başlatılmalıdır çünkü bu süreç bizim kontrolümüz dışında zaman alabilir.",
            },
            {
                soru: "Sokağımızda 15 direk var, hepsini tek seferde bakım yaptırabilir miyiz?",
                cevap:
                    "Evet, bu bizim önerdiğimiz modeldir — makine direkten direğe kısa mesafeli geçişlerle ilerler, her direkte 20-40 dakika çalışılır ve nakliye tek girişte kalır. 15 direklik bir tur, genellikle bir-iki günde tamamlanır; kesin süre direkler arası mesafeye ve her direkteki iş kapsamına bağlıdır. Belediye veya kooperatif üzerinden gelen toplu taleplerde bu model en düşük birim maliyeti verir.",
            },
            {
                soru: "Trafo binasının hemen yanında iş var; ekstra bir izin gerekiyor mu?",
                cevap:
                    "Büyük olasılıkla evet — trafo çevresindeki güvenlik hattı ayrı bir izolasyon gerektirir ve bu bölgede çalışma, ilgili dağıtım şirketinin bilgisi ve gerekiyorsa refakatiyle yürütülür. Bu süreç önceden başlatılmalıdır çünkü onay süresi değişkendir. Trafo binasına olan mesafeyi ve iş kapsamını paylaşın, gerekli süreci erken planlayalım ki iş takviminizde gecikme olmasın.",
            },
            {
                soru: "Gece çalışması yapabilir misiniz? Gündüz trafiği çok yoğun.",
                cevap:
                    "Yapabiliriz — akülü modellerin sessizliği gece penceresi için uygundur ve belediye gürültü sınırlarıyla uyumludur. Aydınlatma ihtiyacı ekipmanımızla veya işvereninizle sağlanır, güzergâh ve bariyer planı ilgili birimlerle önceden kurulur. Kamusal alanda gece çalışması işgaliye iznine tabi olabilir; bu süreci sizin adınıza yürütebiliriz. Gece penceresini talep ederken bize erken bildirin, planlamayı ona göre kuralım.",
            },
            {
                soru: "Hat mesafesi tam olarak sağlanamıyorsa ne yapıyorsunuz?",
                cevap:
                    "Dürüst cevap veririz ve işi almayız — güvenli mesafenin sağlanamadığı bir işte risk almak, kimseye kazandırmaz. Bu durumda önce farklı bir yaklaşım açısının mesafeyi sağlayıp sağlamadığını değerlendiririz; sağlamıyorsa hattın enerjisiz kılınmasını bekleriz veya dağıtım şirketinin kendi ekibinin yapabileceği bir yöntem öneririz. Bu netliği keşifte, iş başlamadan önce veririz — sahada yarım kalan iş, hiç başlamayan işten daha kötüdür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Hat mesafesi ve iletken bom kuralı EN 280 ve elektrik iş güvenliği mevzuatı çerçevesindedir; OSTİM'in dar sokak-direk dokusu kamuya açık saha bilgisidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "OSB Güvenlik Prosedürlerine Uygun Operatörlü Platform Kiralama",
        giris:
            "OSTİM, İvedik ve Sincan gibi organize sanayi bölgelerinde çalışmak, standart bir şantiyeden farklı bir idari katman taşır — çoğu OSB yönetimi ve büyük tesis, sahaya giren her ekipman ve personel için kayıt, güvenlik eğitimi belgesi ve bazen özel giriş izni ister. Operatörlü platform kiralamanın bu bölgedeki değeri, yalnızca makineyi kullanacak deneyimli bir kişi sağlamak değil, bu idari katmanı da eksiksiz yönetmektir — operatörün evrak dosyası, OSB'nin veya tesisin kendi prosedürüne hazır gelmelidir. Bu sayfa, operatörlü kiralamanın OSTİM ve çevresindeki OSB'lerdeki idari ve operasyonel boyutunu anlatır.",
        maddeler: [
            {
                baslik: "OSB giriş kaydı ve operatör evrakı",
                metin:
                    "Çoğu OSB, sahaya giren araç ve personel için giriş kaydı ister — plaka bildirimi, sürücü/operatör kimlik bilgisi ve bazen önceden başvuru. Operatörlerimizin dosyası (SRC/G belgesi, iş makinesi operatör sertifikası, sağlık raporu, İSG eğitim kaydı) bu kayıt süreçlerine hazır tutulur ve talep hâlinde OSB yönetimine veya tesise iletilir. İlk kez çalıştığımız bir OSB'de kayıt süreci birkaç saat-bir gün sürebilir; bu payı, özellikle acil olmayan işlerde takvime erken eklemenizi öneririz.",
            },
            {
                baslik: "Tesis içi İSG oryantasyonu",
                metin:
                    "Büyük fabrika ve tesislerin çoğu, sahaya giren her yükleniciye kendi İSG oryantasyonunu (genellikle kısa bir video veya brifing) zorunlu tutar — bu, tesisin kendi risk haritasını ve acil durum prosedürünü operatöre aktarır. Operatörümüz bu oryantasyona katılır ve tesisin verdiği kimlik kartı-görünür yelek gibi ekipmanı kullanır. Tekrarlı işlerde (aynı tesise dönemsel gelme) bu oryantasyon genellikle bir kez yapılır ve geçerlilik süresi tesise göre değişir.",
            },
            {
                baslik: "Operatörlü ile operatörsüz arasındaki fark",
                metin:
                    "Operatörlü kiralamada makine, sertifikalı ve deneyimli operatörümüzle birlikte gelir — dar alan manevrası, zarf diyagramı hesabı ve OSB prosedürlerine uyum bizim sorumluluğumuzdadır. Operatörsüz kiralamada makine, işletmenin kendi personeline teslim edilir; bu durumda personelin geçerli operatör belgesine sahip olması ve OSB'nin giriş-oryantasyon süreçlerini kendisinin tamamlaması gerekir. Dar alan ve zarf hesabı gerektiren işlerde (bu domainin ana konusu) operatörlü seçeneği öneririz çünkü deneyim, hata payını doğrudan azaltır.",
            },
            {
                baslik: "Savunma ve hassas tesislerde ek prosedür",
                metin:
                    "Sincan gibi savunma yan sanayi tedarikçilerinin yoğun olduğu bölgelerde, standart OSB kaydının üzerine ek bir güvenlik katmanı gelir: kimlik bildirimi daha detaylıdır, fotoğraf-cihaz kısıtları uygulanır ve bazı alanlarda erişim izni özel olarak verilir. Operatör dosyalarımız bu süreçlere hazırdır ve kayıt-gizlilik kurallarına uyum, operatör brifinginin sabit maddesidir. Bu tesislerde ilk kayıt süreci diğer OSB'lere göre daha uzun sürebilir — talebi kayıt payıyla erken açmanızı öneririz.",
            },
            {
                baslik: "Vardiya ve mesai dışı çalışma koordinasyonu",
                metin:
                    "Bazı tesisler, üretim kesintisini en aza indirmek için platform işini vardiya arası veya mesai dışı saatlere sıkıştırır. Operatörümüz bu vardiya planına uyum sağlar; gece veya hafta sonu çalışması gerektiren işlerde ek koordinasyon (tesisin nöbetçi personeli, aydınlatma, güvenlik) önceden kurulur. Bu tip planlı vardiya işleri, özellikle Sincan'daki büyük üreticilerin bakım dönemlerinde sık karşılaştığımız bir modeldir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü kiralama evrak-süreç haritası",
                paragraflar: [
                    "OSB ve tesis tipine göre gerekli evrak ve süreç aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Giriş kaydı", "Oryantasyon", "Ek belge"],
                    satirlar: [
                        ["Standart OSB (OSTİM, İvedik)", "Plaka + kimlik bildirimi", "Genellikle yok/kısa", "Operatör sertifikası"],
                        ["Ağır sanayi holü (Sincan)", "Detaylı kayıt", "Kısa İSG brifingi", "SRC/G + sağlık raporu"],
                        ["Savunma tedarikçi tesisi", "Detaylı kayıt + onay süreci", "Zorunlu, uzun olabilir", "Gizlilik taahhüdü + tam dosya"],
                        ["Kamu binası/hastane", "Kurum kaydı + refakat", "Kurum prosedürü", "Yüklenici evrak seti"],
                        ["Küçük atölye (mahalle arası)", "Genellikle gerekmez", "Yok", "Standart operatör belgesi"],
                    ],
                },
            },
            {
                baslik: "Kayıt payını takvime erken eklemek",
                paragraflar: [
                    "İlk kez çalışılan bir OSB veya tesiste kayıt süreci birkaç saatten bir güne kadar sürebilir — bu, işin kendisinden bağımsız bir idari süredir ve genellikle işletmenin kontrolü dışındadır. Acil olmayan işlerde bu payı takvime erken eklemek, işin başlama tarihini gerçekçi tutar; acil işlerde ise kayıt süreci paralel yürütülür ve makine kayıt tamamlanır tamamlanmaz sahaya girer.",
                    "Tekrarlı çalıştığımız tesislerde bu süreç genellikle ilk seferden sonra hızlanır çünkü operatör dosyası tesiste zaten kayıtlıdır — düzenli iş ilişkisi kurulan tesislerde ikinci ve sonraki işler çok daha hızlı başlar.",
                ],
            },
            {
                baslik: "Operatör deneyiminin dar alan işlerindeki payı",
                paragraflar: [
                    "Bu domainin ana konusu dar alan ve engebeli zemin olduğu için operatör deneyiminin payı büyüktür — zarf diyagramı hesabını doğru okumak, kuyruk taşmasını önceden hesaba katmak ve dar bir avluda güvenli park pozisyonu seçmek, tekrarlı sahada kazanılan bir beceridir. Operatörlerimizin OSTİM ve çevresindeki OSB'lerde biriktirdiği saha bilgisi, ilk kez gördüğü bir avluda bile benzer geometrileri tanımasını sağlar.",
                    "Operatörsüz kiralamayı tercih eden işletmelere de bu deneyimi aktarmaya çalışırız — teslimat sırasında kısa bir saha oryantasyonu (park noktası, dönüş alanı, hat mesafesi hatırlatması) standart uygulamamızdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSTİM'de bir atölyeye ilk kez giriyoruz; özel bir kayıt süreci var mı?",
                cevap:
                    "Genellikle hayır veya çok kısa — OSTİM'deki küçük atölye ölçekli işlerde çoğunlukla ayrı bir OSB kaydı gerekmez, işletmenizin kendi bina girişi yeterlidir. İvedik ve Sincan gibi bazı büyük OSB veya fabrika sahalarında ise plaka-kimlik bildirimi ve kısa bir kayıt süreci olabilir. Hangi tesise gideceğinizi belirtirseniz, o sahanın kayıt gerekliliğini önceden kontrol edip size bildiririz.",
            },
            {
                soru: "Operatörünüzün belgeleri ne, teslimat sırasında görebilir miyiz?",
                cevap:
                    "Elbette — operatörümüzün SRC/G belgesi veya iş makinesi operatör sertifikası, sağlık raporu ve İSG eğitim kaydı teslimat evraklarıyla birlikte sunulur. OSB veya tesisin kendi kaydı için bu belgeleri önceden talep etmeniz gerekiyorsa, teslimattan önce dijital kopyalarını da paylaşabiliriz — bu, kayıt sürecini hızlandırır.",
            },
            {
                soru: "Kendi personelimiz de sertifikalı, operatörsüz kiralasak daha mı ekonomik olur?",
                cevap:
                    "Uzun süreli ve tekrarlı kullanımda genellikle evet, operatörsüz daha ekonomiktir. Ancak dar alan ve zarf diyagramı hesabı gerektiren işlerde (bu bölgenin tipik işleri) operatör deneyimi hata payını azaltır — personeliniz bu tip manevralarda deneyimliyse operatörsüz sorunsuz çalışır, değilse ilk birkaç işte operatörlü tercih etmenizi öneririz. Karar, personelinizin deneyimine ve iş tipine göre birlikte netleşir.",
            },
            {
                soru: "Savunma tedarikçisi bir tesise girecek operatörünüzün ek bir gizlilik taahhüdü vermesi gerekiyor mu?",
                cevap:
                    "Genellikle evet, tesisin kendi süreci gerektiriyorsa operatörümüz bu taahhüdü imzalar ve fotoğraf-cihaz kısıtlarına brifingli uyar. Bu tip tesislerde kayıt süreci standart OSB'ye göre daha uzun sürebilir — talebinizi kayıt payıyla erken açmanızı öneririz. Tesisinizin özel gereksinimlerini önceden bildirin, operatör dosyamızı o formata hazırlayalım.",
            },
            {
                soru: "İşimiz gece vardiyasında yapılacak; operatörünüz gece çalışabilir mi?",
                cevap:
                    "Evet, gece ve vardiya arası çalışma planlayabiliriz — operatörümüz tesisin vardiya planına uyum sağlar. Gece çalışması için ek koordinasyon (tesisin nöbetçi personeli, aydınlatma, güvenlik, varsa gece giriş prosedürü) önceden kurulur. Bu tip planlı vardiya işlerini özellikle büyük tesislerin bakım dönemlerinde sık uyguluyoruz; vardiya saatlerinizi ve tesis prosedürünüzü paylaşın, planı birlikte kuralım.",
            },
            {
                soru: "Aynı tesise düzenli geliyoruz; her seferinde kayıt sürecini baştan mı yaşıyoruz?",
                cevap:
                    "Hayır, genellikle hayır — düzenli çalıştığımız tesislerde operatör dosyası ve giriş kaydı ilk seferden sonra sistemde kayıtlı kalır ve sonraki işler çok daha hızlı başlar. Tesisin kendi kayıt geçerlilik süresi (bazı belgeler yıllık yenilenir) varsa bunu takip eder, süresi dolmadan yeniliriz. Düzenli iş ilişkisi kurduğumuz tesislerle bu süreç zamanla neredeyse görünmez hâle gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. OSB giriş kaydı ve tesis İSG oryantasyonu genel kurumsal uygulamadır; operatör evrak seti ve süreç yönetimi firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "OSTİM-İvedik-Sincan Hattında Çok Noktalı Rota Bakım Platformu",
        giris:
            "Ankara'nın batı sanayi koridorunda OSTİM, İvedik ve Sincan birbirine yakın ama karakter olarak farklı üç bölgedir ve bir işletmenin veya kooperatifin dağınık şubeleri, tedarikçileri ya da site yönetimlerinin farklı adreslerdeki talepleri bu hattın üzerine düşer. Tek bir işletmenin işi için gidip gelmek yerine, aynı güzergâh üzerindeki birden fazla adresi tek tura toplamak, hem nakliye maliyetini böler hem makine gününü verimli kullanır. Bu sayfa, çok noktalı rota bakım modelinin nasıl kurulduğunu, hangi tip taleplerin bu modele uygun olduğunu ve OSTİM-İvedik-Sincan hattındaki güzergâh mantığını anlatır.",
        maddeler: [
            {
                baslik: "Rota mantığı: coğrafi sıralama, iş sıralaması değil",
                metin:
                    "Çok noktalı bir tur planlanırken önceliğimiz, taleplerin geliş sırası değil coğrafi konumudur — güzergâh, makinenin gereksiz ileri-geri gitmeyeceği şekilde optimize edilir. Tipik bir tur, OSTİM içindeki birkaç noktayla başlar, İvedik'e geçer ve günün sonunda Sincan'daki işle kapanır (veya tersi, günün ilk talebine göre). Bu sıralama, her adrese ayrı ayrı gidip gelmekten kilometre ve zaman olarak belirgin tasarruf sağlar; tasarruf, katılan işletmeler arasında nakliye bedeli olarak paylaşılır.",
            },
            {
                baslik: "Dönemsel toplu talep: kooperatif ve site yönetimleri",
                metin:
                    "OSTİM'deki atölye kooperatifleri, İvedik'teki sanayi siteleri ve Sincan'daki büyük tesislerin bakım koordinatörleri, dönemsel (mevsimlik veya yıllık) toplu bakım talebi oluşturduğunda, bu talep doğrudan çok noktalı rota modeline uyar. Yönetim, üye işletmelerden talep toplar, biz güzergâhı ve makine-operatör planını kurarız; her işletme kendi işinin süresine göre programa girer. Bu model, bireysel taleplerin dağınık gelmesine göre hem daha ucuz hem daha öngörülebilir bir plan sunar.",
            },
            {
                baslik: "Tek günlük tur ile çok günlük tur ayrımı",
                metin:
                    "Küçük, kısa süreli işlerin yoğun olduğu bir güzergâhta tek makine bir günde 4-6 noktayı gezebilir; büyük veya uzun süreli işler (örneğin Sincan'daki bir fabrika holünde tam gün süren bir iş) varsa tur çok günlü planlanır ve büyük iş kendi gününe ayrılır, küçük işler ayrı bir güne toplanır. Bu ayrımı keşifte veya talep toplama aşamasında yaparız — büyük bir işin yanına küçük bir işi sıkıştırmaya çalışmak, ikisinin de kalitesini düşürür.",
            },
            {
                baslik: "Makine karması: tek makine yetmediğinde",
                metin:
                    "Bazı turlarda tek bir eklemli platform tüm talepleri karşılayamaz — bir nokta kompakt iç mekân modeli, diğeri yüksek metrajlı dış saha modeli ister. Bu durumda tur, iki makineli (bazen ikinci makine forklift veya örümcek platform) bir ekip olarak planlanır; her makine kendi güzergâh segmentini gezer ve nakliye koordinasyonu tek merkezden yönetilir. Makine karması ihtiyacı, talep toplama aşamasında her adresin iş tipine bakılarak belirlenir.",
            },
            {
                baslik: "Acil iş turun ortasına nasıl eklenir",
                metin:
                    "Planlı bir turun ortasında acil bir talep geldiğinde, güzergâha coğrafi olarak yakınsa turun akışına eklenir ve diğer katılımcıların programı fazla etkilenmez; güzergâhtan uzaksa ayrı bir sevkiyat gerekir ve bu, ek nakliye maliyeti demektir. Rotanın esnekliği, talebin turun hangi noktasında geldiğine bağlıdır — sabah bildirilen acil bir iş, öğleden sonraki segmenta kolayca eklenir; turun bitimine yakın gelen bir talep ise ertesi güne kayabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSTİM-İvedik-Sincan hattı tur profili",
                paragraflar: [
                    "Hattaki üç bölgenin tipik iş profili ve tur içindeki rolü aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Tipik iş süresi", "Tipik makine", "Turdaki rolü"],
                    satirlar: [
                        ["OSTİM", "Kısa (yarım gün-1 gün)", "Kompakt eklemli, forklift", "Çok noktalı, sık durak"],
                        ["İvedik", "Orta (1-2 gün)", "Orta sınıf eklemli", "Ara segment, sektör çeşitliliği"],
                        ["Sincan", "Uzun (birden fazla gün olabilir)", "Yüksek metraj dizel 4x4", "Genellikle günün kapanışı"],
                        ["Kooperatif/toplu talep", "Dönemsel", "Makine karması", "Ayrı planlanan özel tur"],
                        ["Acil tekil talep", "Değişken", "Uygun olan en yakın makine", "Güzergâha esnek eklenir"],
                    ],
                },
            },
            {
                baslik: "Talep toplama ve tur planlama süreci",
                paragraflar: [
                    "Çok noktalı bir tur kurmak için önce taleplerin toplanması gerekir — bu, bir kooperatif veya site yönetimi üzerinden merkezi olarak yapılabileceği gibi, bize doğrudan gelen dağınık taleplerin coğrafi olarak gruplanmasıyla da oluşabilir. Her talebin adresi, iş süresi ve makine ihtiyacı bir listede toplanır, güzergâh bu listeye göre optimize edilir ve her işletmeye tahmini gelme saati bildirilir.",
                    "Tur planı kesinleştikten sonra katılımcılara program paylaşılır; program üzerinde küçük kaymalar (bir işin beklenenden uzun sürmesi gibi) olabileceği, bu yüzden saatlerin kesin değil tahmini olduğu baştan iletilir.",
                ],
            },
            {
                baslik: "Nakliye paylaşımının hesaplanması",
                paragraflar: [
                    "Çok noktalı turda nakliye bedeli, katılımcı sayısına ve her adresin güzergâhtaki konumuna göre bölünür — güzergâhın ana hattı üzerindeki bir adres, hattan sapma gerektiren bir adrese göre daha düşük pay öder çünkü ek kilometre yaratmaz. Bu hesaplama yöntemi, tur planlaması aşamasında şeffaf şekilde paylaşılır ki her işletme kendi payını anlayarak katılım kararı versin.",
                    "Toplu talep organizatörü (kooperatif, site yönetimi) genellikle bu paylaşımı üye işletmeler arasında kendi içinde de dağıtabilir; biz toplam nakliye bedelini ve önerilen paylaşım mantığını organizatöre sunarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSTİM'de bizim işletmemiz, İvedik'te bir tanıdık işletmenin de işi var; aynı güne alabilir miyiz?",
                cevap:
                    "Evet, bu tam olarak çok noktalı rota modelinin işidir — iki talebi coğrafi olarak yakın bir güzergâha yerleştirir, makine önce birinde sonra diğerinde çalışır ve nakliye ikiye bölünür. İki işin de yaklaşık süresini ve tercih ettiğiniz günü paylaşın, güzergâhı ve saatleri birlikte planlayalım. Üçüncü bir işletme de katılmak isterse tur daha da verimlenir.",
            },
            {
                soru: "Kooperatifimiz üyelerinden dönemsel bakım talebi toplamak istiyor; nasıl bir süreç işler?",
                cevap:
                    "Kooperatifiniz üye işletmelerden talep toplar (adres, iş tipi, tahmini süre), bu listeyi bize iletir, biz güzergâhı ve gerekiyorsa makine karmasını (birden fazla makine tipi) planlarız. Program, tüm üyelere önceden paylaşılır. Bu model, bireysel taleplerin dağınık gelmesine göre kooperatifiniz için belirgin bir maliyet avantajı sağlar — dönemsel (örneğin her mevsim bir tur) düzenlendiğinde birim maliyet daha da düşer.",
            },
            {
                soru: "Bizim iş Sincan'da uzun sürecek, turun içine sıkışır mı yoksa ayrı mı planlanmalı?",
                cevap:
                    "Sincan'daki uzun süreli (tam gün veya çok günlü) işler genellikle kendi gününe ayrılır, küçük ve kısa işlerin çok noktalı turuna sıkıştırılmaz — bunu yaparsak hem uzun işin hem küçük işlerin kalitesi düşer. Talebinizin süresini paylaşın, uzun süreliyse ayrı bir plan, kısa süreliyse mevcut bir turun içine ekleme yaparız. Doğru sınıflandırma, keşifte netleşir.",
            },
            {
                soru: "Turda bir gün önce planlanmayan acil bir işimiz çıktı; eklenebilir mi?",
                cevap:
                    "Güzergâha yakınsa büyük olasılıkla evet, uzaksa ayrı sevkiyat gerekebilir. Turun hangi aşamasında olduğunuza da bağlı — sabah bildirilen acil bir iş öğleden sonraki segmenta kolayca eklenir, turun bitimine yakın gelen talep ise ertesi güne kayabilir. Aciliyetinizi ve konumunuzu hemen bildirin, mevcut tur güzergâhına uyup uymadığını hızlıca kontrol edelim.",
            },
            {
                soru: "Turdaki her işletme aynı nakliye bedelini mi öder?",
                cevap:
                    "Hayır — bedel, güzergâhtaki konuma göre değişir. Ana hat üzerindeki bir adres, hattan sapma gerektiren bir adrese göre daha düşük pay öder çünkü ek kilometre yaratmaz. Bu hesaplama yöntemini tur planlaması sırasında şeffaf şekilde paylaşırız; her işletme kendi payını görerek katılım kararı verir. Kooperatif üzerinden gelen taleplerde bu paylaşımı organizatörle birlikte de düzenleyebiliriz.",
            },
            {
                soru: "İvedik'teki işimiz için ayrı, tek başına gelmenizi istesek daha mı pahalıya gelir?",
                cevap:
                    "Genellikle evet — tek başına gelen bir makinenin nakliyesi tamamen sizin işinize yüklenir, oysa çok noktalı turda bu maliyet paylaşılır. Ancak işinizin zamanlaması esnek değilse (belirli bir tarihte kesin olmalıysa) ve güzergâhta o tarihe uygun bir tur yoksa, tekil sevkiyat da makul bir seçenektir. İki senaryonun maliyet farkını keşifte size gösteririz; kararı zamanlama ve bütçe önceliğinize göre siz verirsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. OSTİM-İvedik-Sincan coğrafi yakınlığı kamuya açık bilgidir; çok noktalı tur planlama ve nakliye paylaşım yöntemi firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Engebeli Zeminde ve Arazi Tipi Sahada Platform Kiralama",
        giris:
            "Ankara OSB'lerinin dış sahaları — stok alanları, henüz asfaltlanmamış parseller, kot geçişli araziler, inşaat hâlindeki şantiyeler — düz beton zeminin varsayıldığı standart platform seçimini geçersiz kılar. Zor zemin işlerinde asıl soru 'kaç metre çıkar' değil 'bu zeminde güvenle durur mu'dur ve cevap, tahrik tipi, lastik seçimi ve şasi dengeleme sisteminin zemine doğru eşleşmesinden gelir. Bu sayfa, eklemli platform odaklı filomuzun engebeli zemin ve arazi tipi saha tarafını — hangi zeminde hangi tahrik ve model kararının verildiğini, eğim sınırının nasıl işlediğini ve zemin belirsizliğinin işi nasıl geciktirebileceğini — dürüstçe anlatır.",
        maddeler: [
            {
                baslik: "Zemin sınıflandırması: sert, stabilize, yumuşak, çamur",
                metin:
                    "Zemin kararı dört kaba sınıfa ayrılır. Sert-düz zemin (beton, asfalt) akülü modellerin standart çalışma alanıdır. Stabilize zemin (sıkıştırılmış dolgu, kırma taş) genellikle dizel 4x4 gerektirir ama zeminin sıkıştırma kalitesine göre akülü de çalışabilir — bu, keşifte fiziksel kontrolle belirlenir. Yumuşak zemin (gevşek toprak, kum) arazi lastikli dizel 4x4 ve bazen ek yük dağıtım plakası ister. Çamur veya bataklık kıvamındaki zeminde hiçbir platform güvenle çalışmaz — bu durumda iş, zemin kuruyana veya sağlamlaştırılana kadar ertelenir.",
            },
            {
                baslik: "Eğim sınırı: makine neden 'devrilmez, çalışamaz'",
                metin:
                    "Şasi dengeleme sistemi, üreticinin belirlediği eğim sınırı içinde makineyi güvenle tutar ve bu sınırın dışına çıkıldığında makine fiziksel olarak devrilmez — çünkü kontrol sistemi çalışmayı otomatik olarak kilitler. Bu, sınırın önemsiz olduğu anlamına gelmez; tersine, doğru park pozisyonu, kilitlenmeye hiç gelmeden eğim sınırı içinde kalacak noktayı önceden bulmaktır. Engebeli bir arazide bu nokta bazen aranan hedefe göre uzak veya farklı bir açıda olabilir; bu durumda erişim geometrisi, park kısıtına göre yeniden çizilir.",
            },
            {
                baslik: "Yük dağıtım plakası: şüpheli zeminde ek önlem",
                metin:
                    "Zeminin taşıma kapasitesi şüpheliyse (yeni dolgu, drenajı belirsiz alan, yer altı boşluğu ihtimali) makinenin ayak izi genişletilerek yüzey basıncı düşürülür — bu, yük dağıtım plakası kullanılarak yapılır. Plaka, özellikle stabilize sahalarda tekil bir noktanın beklenenden yumuşak çıktığı durumlarda devreye girer. Şüphenin ciddi olduğu (örneğin bilinen bir yer altı boşluğu, eski çukur dolgusu) sahalarda, iş öncesi zemin etüdü önerilir — bu bizim uzmanlık alanımızın dışındadır ama gerekliliğini açıkça belirtiriz.",
            },
            {
                baslik: "Mevsimsel değişim: kuru ile yağmurlu zemin farkı",
                metin:
                    "Aynı arazi, kuru mevsimde sert ve güvenilir görünürken yağmur sonrası tamamen farklı bir taşıma karakteri gösterebilir. Bu yüzden zemin değerlendirmesi, mümkünse iş tarihine yakın bir zamanda yapılır; hava koşulu riskli görünüyorsa iş, kuru bir güne kaydırılır veya zemin geçici olarak sağlamlaştırılır. Sonbahar-kış aylarında Ankara çevresindeki toprak-stabilize sahalarda bu kontrol özellikle önemlidir ve keşif sürecinin standart bir parçasıdır.",
            },
            {
                baslik: "Arazi tipi işlerde rüzgâr ve dış ortam faktörleri",
                metin:
                    "Zor zemin işleri genellikle dış sahada, rüzgâra açık alanlarda gerçekleşir ve bom yükseldikçe rüzgâr maruziyeti artar. Ankara platosunun öğleden sonra rüzgârlanması bilinen bir desendir — yüksek metrajlı dış saha işleri sabah bloklarına planlanır, sepette anemometre ile ölçüm yapılır ve tanımlı limitte tartışmasız durulur. Bu, zeminle birlikte değerlendirilen ikinci fiziksel kısıttır ve süre tahminine doğrudan yansır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipi ve makine kararı",
                paragraflar: [
                    "Zemin tipine göre tahrik ve ek önlem kararı aşağıdaki gibi verilir.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Uygun tahrik", "Ek önlem", "Karar süreci"],
                    satirlar: [
                        ["Beton/asfalt (sert-düz)", "Akülü", "Genellikle gerekmez", "Standart değerlendirme"],
                        ["İyi sıkıştırılmış stabilize", "Akülü veya dizel 4x4", "Fiziksel kontrol", "Keşifte zemin testi"],
                        ["Gevşek/yumuşak toprak", "Dizel 4x4, arazi lastiği", "Yük dağıtım plakası", "Eğim + taşıma kontrolü"],
                        ["Eğimli-kot geçişli", "Dizel 4x4", "Park pozisyonu eğim sınırında", "Eğim ölçer ile keşif"],
                        ["Çamur/bataklık kıvamı", "Uygun değil", "İş ertelenir/zemin sağlamlaştırılır", "Dürüst ret + alternatif"],
                    ],
                },
            },
            {
                baslik: "Keşifte zemin kontrolünün pratiği",
                paragraflar: [
                    "Zemin şüphesi olan her işte keşif, sadece hedefin ölçülmesiyle sınırlı kalmaz — zeminin görsel değerlendirmesi (çukur, çatlak, ıslaklık izi), mümkünse basit bir basınç testi (ayakla bastırarak batma kontrolü, deneyimli gözle değerlendirme) ve eğim ölçümü yapılır. Bu kontrol, sahaya yanlış tahrik tipiyle gidip geri dönmenin önüne geçer — dizel 4x4'ün bile her yumuşak zeminde çalışamayacağını unutmamak gerekir.",
                    "Zemin fotoğrafı, özellikle iş tarihine yakın çekilmiş olduğunda, telefon tarifinden çok daha güvenilir bir veridir; yağmur sonrası veya kuru dönem farkını da gösterir.",
                ],
            },
            {
                baslik: "Zemin uygun değilse: dürüst alternatifler",
                paragraflar: [
                    "Zeminin hiçbir tahrik tipiyle güvenle taşımadığı durumlarda üç alternatif değerlendirilir: işi zemin kuruyana kadar ertelemek (mevsimsel bekleme), zemini geçici olarak sağlamlaştırmak (stabilizasyon, plaka döşeme — bu maliyeti işveren üstlenir) veya platform dışı bir yöntem aramak (örneğin sabit bir vinç veya iskele). Hangisinin ekonomik olduğu, işin aciliyetine ve bütçesine bağlıdır; üçünü de rakamla göstererek karar işverene bırakılır.",
                    "Riskli zeminde 'belki çalışır' diyerek makine göndermeyiz — devrilme riski, hem operatör hem çevredeki insanlar için kabul edilemez bir bahis olur ve bu satırın istisnası yoktur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamız henüz asfaltlanmamış, sıkıştırılmış toprak zemin; hangi makine çalışır?",
                cevap:
                    "Sıkıştırma kalitesine bağlı — iyi sıkıştırılmış stabilize zeminde bazen akülü model bile çalışabilir, ama genel kuralımız bu tip sahalarda dizel 4x4 arazi lastikli modeldir çünkü tırmanma ve denge kabiliyeti daha yüksektir. Zeminin sıkıştırma durumunu keşifte fiziksel olarak kontrol ederiz; şüpheli noktalarda yük dağıtım plakası kullanılır. Zemin fotoğrafını paylaşın, ön değerlendirmeyi hızlıca yapalım.",
            },
            {
                soru: "Arazimiz eğimli; makine hangi noktada güvenle durabilir?",
                cevap:
                    "Şasi dengeleme sisteminin üretici tarafından tanımlanan eğim sınırı içinde kalan her noktada. Bu sınırın dışına çıkıldığında makine devrilmez, çünkü kontrol sistemi çalışmayı otomatik kilitler — ama doğru plan, kilide gelmeden önce doğru noktayı bulmaktır. Eğim ölçerle keşifte uygun park noktasını tespit eder, hedefe erişimi bu noktaya göre çizeriz. Bazı durumlarda hedefe farklı bir kottan yaklaşmak gerekebilir.",
            },
            {
                soru: "Geçen hafta yağmur yağdı, sahamızın nasıl olduğunu bilmiyoruz; iş yine de planlanabilir mi?",
                cevap:
                    "Planlanabilir ama iş tarihine yakın güncel bir zemin kontrolü şart — kuru mevsimde sert görünen bir arazi, yağmur sonrası tamamen farklı bir taşıma karakteri gösterebilir. İş gününe yakın bir fotoğraf isteriz veya gerekiyorsa kısa bir keşif turu yaparız. Zemin hâlâ ıslak/yumuşaksa iş birkaç gün ertelenir ya da zemin geçici olarak sağlamlaştırılır — bu kararı sizinle birlikte, rakamla göstererek veririz.",
            },
            {
                soru: "Zeminimizde eski bir çukur dolgusu olabilir, güvenli mi emin değiliz; ne yaparsınız?",
                cevap:
                    "Bu tip şüpheli noktalarda dürüst yaklaşırız: bilinen veya şüphelenilen bir yer altı boşluğu varsa, standart yük dağıtım plakası yeterli olmayabilir ve ciddi şüphede zemin etüdü önerilir — bu bizim uzmanlık alanımızın dışındadır ama gerekliliğini açıkça söyleriz. Şüphenin hafif olduğu durumlarda plaka ile çalışma yapılabilir. Çukurun konumunu ve varsa geçmiş bilgisini paylaşın, riski birlikte değerlendirelim.",
            },
            {
                soru: "Dış sahada rüzgâr işi ne kadar etkiler, zeminle birlikte mi düşünülür?",
                cevap:
                    "Evet, ikisi birlikte değerlendirilir — zemin makinenin nerede duracağını, rüzgâr ise ne kadar yükseğe çıkabileceğini sınırlar. Yüksek metrajlı dış saha işleri sabah bloklarına planlanır, sepette ölçümle çalışılır ve limitte durulur. Rüzgârlı bir haftada süre tahmini uzayabilir, bunu zemin değerlendirmesiyle birlikte baştan söyleriz ki takvim beklentisi gerçekçi kalsın.",
            },
            {
                soru: "Zemin uygun değilse işi tamamen reddediyor musunuz, yoksa çözüm mü sunuyorsunuz?",
                cevap:
                    "Önce çözüm ararız, sadece gerçekten güvenli bir yol yoksa reddederiz. Üç seçenek değerlendiririz: işi zemin kuruyana kadar ertelemek, zemini geçici olarak sağlamlaştırmak (stabilizasyon veya plaka döşeme, maliyeti önceden söylenir) veya platform dışı bir yöntem önermek. Hiçbiri makul değilse dürüstçe 'bu zeminde çalışamayız' deriz — riskli zeminde 'belki olur' diyerek makine göndermek, kimseye fayda sağlamaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Şasi dengeleme, eğim sınırı ve yük dağıtım plakası uygulaması EN 280 ve üretici teknik standartlarıdır; Ankara OSB dış saha zemin çeşitliliği kamuya açık saha bilgisidir.",
    },
};
