// ═══════════════════════════════════════════════════════════════════════════
// muglaplatform.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: Milas-Yatağan MADEN ve ENERJİ tesisleri platform kiralama.
// Açı: SANAYİ TARAFI — Yatağan termik santral bacaları/soğutma kuleleri,
// linyit ocağı destek yapıları, Milas havalimanı çevresi lojistik tesisleri
// ve zeytin işleme (üretim ekipmanı), Aydın-Denizli OSB komşuluğu.
//
// ⚠️ Kardeş dosya muglaplatform-com-tr.ts aynı ilçe adlarını (Milas, Yatağan,
// Fethiye, Aydın çevre il) TURİZM SEZONU EKONOMİSİ açısıyla işliyor ve
// yatagan-sanayi-bolgesi sayfasında planlı duruş / evrak / toz konularını
// zaten kapsamlı işlemiş durumda. Bu dosya o anlatımı TEKRARLAMAZ:
// yapısal-teknik ekipman (baca, soğutma kulesi, linyit taşıma bandı, zeytin
// değirmeni) ve tarım-sera-lojistik (Fethiye) eksenine odaklanır.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir genel bölge/tesis tipi bilgisi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MUGLAPLATFORM_XYZ: Record<string, BespokeIcerik> = {
    "bolge:mugla": {
        h1: "Muğla'da Maden ve Enerji Tesislerine Sanayi Tipi Platform Kiralama",
        giris:
            "Muğla denince ilk akla gelen kıyı turizmi olsa da, ilin ekonomik omurgasının bir kolu tamamen farklı bir dünyada döner: Yatağan ve Milas çevresindeki linyit havzası, termik üretim tesisleri ve onlara bağlı işleme-lojistik zinciri. Bu hat, sahil şeridinden coğrafi olarak ayrı, takvim olarak da ayrıdır — burada sezon açılışı değil üretim sürekliliği önceliklidir ve platform talebi kıyının aksine yılın herhangi bir ayında, üretim programının izin verdiği noktada ortaya çıkar. Sanayi tipi platform hizmeti dediğimizde kastettiğimiz, sepetli makinenin bir otel bahçesinde değil bir baca gövdesinin dibinde, bir konveyör bandının üzerinde ya da bir hava kargo hangarının çatı arasında çalışmasıdır; buradaki kriterler görünürlük ve misafir konforu değil, erişim geometrisi, malzeme dayanımı ve saha güvenlik prosedürüdür. Bu sayfa, ilin bu ikinci ekonomisine — linyit-termik hattına, Milas'ın havacılık ve zeytin işleme tesislerine ve komşu illerin organize sanayi bölgelerine — sanayi tesisi gözünden bakar.",
        maddeler: [
            {
                baslik: "İki ekonominin coğrafi ayrımı",
                metin:
                    "Muğla'nın kıyı şeridi ile iç kesimi, aynı il sınırları içinde iki farklı sanayi kültürü taşır. Kıyıda tesis ölçeği küçük-orta, erişim kısıtlı, çalışma görünürlük odaklıdır. İç kesimde — Yatağan ve Milas'ın sanayi bölgelerinde — tesis ölçeği büyük, saha erişimi geniş, çalışma prosedür ve izin odaklıdır. Bu ayrım makine seçimini de belirler: kıyıda kompakt ve sessiz sınıflar öne çıkarken, iç kesimde büyük teleskopik ve eklemli platformlar, ağır yük taşıyan vinç destekli sistemler ve uzun erişimli bomlar standart taleptir.",
            },
            {
                baslik: "Linyit havzasının taşıma ve işleme altyapısı",
                metin:
                    "Yatağan çevresindeki linyit üretimi, ocaktan santrale uzanan bir taşıma zinciri üzerine kuruludur: bant konveyörler, transfer kuleleri, kırıcı-eleme üniteleri ve stok sahası ekipmanları. Bu zincirdeki her nokta kendine özgü erişim sorunu taşır — bant hattı boyunca yürüyen bir platform hem hatta paralel ilerlemeli hem de bandın üzerine değil yanına konumlanmalıdır. Transfer kulelerinin iç merdiven boşlukları dar olduğundan, kule içi bakımlarda sepet genişliği kule geçidiyle karşılaştırılmalı; kule dışı cephe işlerinde ise dış duvara paralel uzun erişim gerekir.",
            },
            {
                baslik: "Baca ve soğutma kulesi çevresinde çalışma geometrisi",
                metin:
                    "Termik tesislerin baca ve soğutma kulesi gibi yapıları, çaplarının büyüklüğü nedeniyle platform erişimini yükseklikten çok yatay uzanma sorununa çevirir: kule veya baca gövdesinin dış yüzeyine değen bir nokta, makinenin kuleden belirli bir mesafede durmasını ve bomun bu mesafeyi yatayda kapatmasını gerektirir. Soğutma kulesi çevresindeki nem ve yoğuşma, zemin kaymasını artırabileceğinden bu bölgelerde çalışma öncesi zemin durumu ayrıca değerlendirilir. Bu tip yapılarda kesin makine sınıfı, kule/baca çapı ve erişim noktasının yerden yüksekliği bilinmeden verilmez.",
            },
            {
                baslik: "Havzada üretim programına göre planlama",
                metin:
                    "Sahildeki tesislerin aksine, havza tesisleri sezon kapatmaz; bunun yerine belirli birimler dönüşümlü olarak devre dışı kalır ve bakım o birimde yoğunlaşır. Bu, platform talebinin yıla yayılmasını sağlar ama aynı zamanda her talebin kendi üretim biriminin programına bağlı olduğu anlamına gelir. Planlamayı, hangi birimin ne zaman devre dışı kalacağını önceden öğrenerek kuruyoruz; devre dışı kalan birimin çevresindeki işler öncelik kazanır, üretimde kalan birimlerin yakınındaki işler ise ek güvenlik mesafesiyle değerlendirilir.",
            },
            {
                baslik: "Komşu illerin sanayi bölgeleriyle ortak filo kullanımı",
                metin:
                    "Milas ve Yatağan hattındaki filomuz, coğrafi olarak Aydın ve Denizli'nin organize sanayi bölgelerine de yakındır. Havza tesislerindeki iş yoğunluğunun düştüğü haftalarda aynı makineler bu iki ile yönlendirilir; bu da komşu il OSB'lerindeki tesislere, kendi bölgelerinde her zaman bulunmayan büyük sınıf ekipmana makul sürede erişim sağlar. Planlamayı havza takvimiyle eşleştiren tesisler, hem daha hızlı teslim hem daha geniş makine seçeneği bulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Muğla sanayi hattında tesis tipi ve makine eşleşmesi",
                paragraflar: [
                    "İç kesimdeki sanayi tesislerinde erişim sorunu, kıyıdakinden farklı bir tabloyla çözülür. Aşağıdaki tablo tipik yapı-makine eşleşmesini özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı/ekipman", "Temel erişim sorunu", "Uygun sınıf", "Ek gereksinim"],
                    satirlar: [
                        ["Bant konveyör hattı", "Hatta paralel ilerleme", "Uzun bomlu teleskopik", "Hat kenarı zemin kontrolü"],
                        ["Transfer kulesi (iç)", "Dar merdiven/geçit", "Kompakt akülü", "Sepet genişliği ölçümü"],
                        ["Baca / soğutma kulesi", "Büyük çap, yatay mesafe", "Uzun erişimli eklemli", "Çap + erişim yüksekliği"],
                        ["Havalimanı çevresi hangar/depo", "Geniş açıklık, yüksek tavan", "Büyük teleskopik", "Saha güvenlik izni"],
                        ["Zeytin işleme tesisi", "Silo ve boru hattı komşuluğu", "Orta sınıf akülü", "Gıda hijyeni kuralı"],
                    ],
                },
            },
            {
                baslik: "Saha güvenliği: sanayi tesisinde iş izni kültürü",
                paragraflar: [
                    "İç kesimdeki büyük sanayi tesislerinde platform çalışması, sahaya girmeden önce yazılı bir iş izniyle başlar. İzin formunda genellikle çalışma yüksekliği, kullanılacak makine sınıfı, operatör bilgisi ve varsa sıcak iş/kapalı alan gibi ek riskler tanımlanır. Bu formu doldurmak sahaya varmadan tamamlanabilecek bir adımdır ve teklif aşamasında istenen bilgileri (makine seri no, kontrol raporu tarihi, operatör sertifikası) önceden hazırlıyoruz.",
                    "Büyük tesislerde ayrıca saha içi hız sınırı, belirlenmiş güzergâh dışına çıkmama kuralı ve refakatçi eşliğinde ilerleme uygulanır. Bu kurallar iş süresini uzatabilir; süre tahminlerimize bu payı baştan ekliyoruz, çünkü sanayi sahasında 'planlanandan hızlı' bir gün istisnadır, kural değil.",
                ],
            },
            {
                baslik: "Havza dışı iş: komşu OSB'lere yönlendirme mantığı",
                paragraflar: [
                    "Havzadaki üretim yoğunluğu her hafta aynı değildir; bir birimin bakım programı biterken diğerinin başlayabilir ve bu arada filo için boşluk oluşur. Bu boşlukları, coğrafi olarak yakın olan Aydın ve Denizli OSB'lerindeki taleplerle dolduruyoruz. Sonuç, iki taraf için de avantajlıdır: havza tesisleri filoyu sürekli meşgul tutmadan makul fiyata erişir, komşu il tesisleri ise kendi bölgelerinde her zaman bulunmayan sınıfları makul sürede bulur.",
                    "Bu modelin çalışması için komşu il taleplerinin tarih esnekliği önemlidir; sabit tarihli acil işlerde de hizmet veriyoruz, ancak fiyat ve teslim süresi farkı baştan açık söylenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Termik tesisimizde baca dış yüzeyinde bir onarım var; hangi bilgiyi vermeliyiz?",
                cevap:
                    "Üç ölçü belirleyicidir: bacanın dış çapı, onarım noktasının yerden yüksekliği ve makinenin konumlanabileceği en yakın nokta ile baca gövdesi arasındaki mesafe. Baca gibi geniş çaplı yapılarda sorun çoğunlukla yükseklik değil yatay erişimdir — makine hedefin altına giremediği için bom, mesafeyi yatayda kapatacak kadar uzanabilmelidir. Bu üç ölçüyle birlikte zemin tipini (beton saha mı, stabilize mi) de bildirirseniz, sahaya gelmeden doğru sınıfı önerebiliriz. Kesinleşmemiş ölçülerle gelen bir makine, sahada değişim gerektirebilir; bu da planlı duruş penceresinde kayıp anlamına gelir.",
            },
            {
                soru: "Bant konveyör hattı boyunca birden fazla nokta çalışılacak; tek seferde mi ilerliyorsunuz?",
                cevap:
                    "Evet, hat boyu işlerde makine sabit durmaz; program, hattın bir ucundan diğerine doğru ilerleyen bir sıra hâlinde kurulur. Her noktada makine hatta paralel konumlanır, iş biter, bir sonraki noktaya kısa mesafede kayar. Bu ilerleyiş hem süreyi kısaltır hem de hattın belirli bir bölümünü uzun süre kapalı tutmaz. Hat üzerindeki nokta sayısını ve aralarındaki mesafeyi önceden bilirsek, günlük ilerleme hızını gerçekçi biçimde söyleyebiliriz; bandın çalışır mı durur mu olduğu bilgisi de programı doğrudan etkiler.",
            },
            {
                soru: "Transfer kulesinin içine makine girebilir mi, yoksa dışarıdan mı çalışılır?",
                cevap:
                    "Kulenin iç merdiven ve platform boşlukları genellikle standart bir sepetli makinenin geçemeyeceği kadar dardır; bu yüzden kule içi bakımların büyük kısmı sabit merdivenle yürüyerek yapılır, platform ise kulenin dış cephesindeki işler için kullanılır. Kule dışına değen bir nokta varsa, makinemiz kuleye paralel konumlanır ve bom, dış cepheyi tarayacak şekilde uzanır. İç mekân ölçülerini (geçit genişliği, kat yüksekliği) paylaşırsanız istisnai olarak çok kompakt bir sınıfın girip giremeyeceğini de değerlendiririz; ama genel kural dış cephe için platform, iç bakım için sabit erişimdir.",
            },
            {
                soru: "Havza tesisimizde üretim durmadan çevresinde çalışabilir miyiz?",
                cevap:
                    "Devam eden bir üretim biriminin yakınında çalışmak mümkündür, ancak ek güvenlik mesafesi ve saha ekibinin onayı gerekir. Uygulamamız şudur: üretimde olan birim ile çalışma noktası arasındaki mesafe saha güvenlik ekibiyle birlikte belirlenir, gerekiyorsa bariyer veya işaretleme konur ve operatörümüz saha kurallarına göre brifing alır. Devre dışı bir birimin çevresi ise çok daha rahat çalışılır; bu yüzden programda öncelik her zaman devre dışı kalan birimlere verilir. Hangi birimin ne zaman devre dışı kalacağını bilirseniz, programı ona göre kurarız.",
            },
            {
                soru: "Zeytin işleme tesisimizde silo üstü bir iş var; gıda hijyeni kuralı platform için de geçerli mi?",
                cevap:
                    "Geçerlidir. Üretim alanına giren makine ve operatör için genel hijyen kuralları (temiz ekipman, uygun kıyafet, üretim hattına yağ-kir bulaştırmama) uygulanır ve mümkünse çalışma, üretim durduğu saatlerde planlanır. Silo üstü işlerde ek olarak makinenin ağırlığının silo çevresindeki döşemeye uygun olup olmadığı kontrol edilir; bazı silo platformları yüksek nokta yükünü kaldırmayabilir. Tesisinizin hijyen prosedürünü önceden paylaşırsanız, operatör brifingine ekleriz ve sahada zaman kaybı yaşanmaz.",
            },
            {
                soru: "Aydın veya Denizli OSB'sindeyiz; Muğla'dan makine gelmesi ne kadar sürer?",
                cevap:
                    "Havza filomuzun konumu ve o anki iş yoğunluğuna bağlıdır; ortalama olarak bir-iki gün içinde planlanabilir, ancak havzada yoğun bir bakım dönemi varsa süre uzayabilir. Tarihinizi esnek bırakırsanız, havzadaki bir işin bitişine denk gelen ilk boşluğa yazarız ve bu genellikle en ekonomik seçenektir. Sabit tarihli acil bir işiniz varsa da hizmet veririz, ancak bu durumda havza dışı sevkiyat bedeli ayrı bir kalem olarak teklife yansır. İhtiyacınızı ve tarih esnekliğinizi belirtirseniz size en uygun seçeneği net biçimde sunarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Yatağan-Milas hattının linyit-termik üretim yapısı ve komşu illerin organize sanayi bölgeleri kamuya açık genel bilgidir; erişim eşleşmesi, birim bazlı planlama ve komşu il yönlendirme modeli firma pratiğidir.",
    },

    "bolge:milas": {
        h1: "Milas'ta Havalimanı Çevresi ve Zeytin İşleme Tesislerine Sanayi Platform Kiralama",
        giris:
            "Milas'ın sanayi profili iki ayrı tesis ailesinden oluşur ve ikisi de kendine özgü teknik erişim sorunları taşır. Birincisi havalimanı çevresine yerleşmiş lojistik-servis kuşağıdır: kargo depoları, hangar yapıları, araç filosu servis atölyeleri ve saha aydınlatma altyapısı — bunların ortak özelliği geniş açıklıklı yüksek tavanlı hacimler ve saha güvenlik prosedürüne tabi giriş rejimidir. İkincisi ilçenin köklü zeytin işleme dokusudur: değirmen ve sıkım tesisleri, depolama silo ve tank çiftlikleri, paketleme hatları — burada kısıt yükseklikten çok ekipman komşuluğu ve gıda hijyeni kurallarıdır. Bu sayfa iki aileyi de tesis mühendisliği gözünden ele alır; sezon veya kampanya takvimi yerine, hangi yapının hangi makineyle ve hangi teknik hazırlıkla çalışılacağına odaklanır. Milas'ın düz ve geniş sanayi dokusu, her iki tesis ailesinde de büyük sınıf makinelerin rahat çalışmasını mümkün kılar; bu da ilçeyi bölgedeki en az kısıtlı sanayi sahası hâline getirir.",
        maddeler: [
            {
                baslik: "Kargo deposu ve hangar yapılarında geniş açıklık erişimi",
                metin:
                    "Havalimanı çevresindeki depo ve hangar yapıları, genellikle 8-12 metre bandında tavan yüksekliğine ve geniş çelik konstrüksiyon açıklığına sahiptir. Bu tip hacimlerde iş genellikle çatı altı aydınlatma, çelik kiriş bakımı, havalandırma kanalı ve yangın algılama hattı üzerinedir. Kiriş arası mesafe geniş olduğundan büyük teleskopik sınıflar rahat çalışır; ancak hangar kapı rayı gibi hareketli ekipmanların bulunduğu bölgelerde makine konumlanması, kapı hareket alanının dışında tutulmalıdır.",
            },
            {
                baslik: "Saha güvenlik kuşağı ve giriş prosedürü",
                metin:
                    "Havalimanı çevresi işletmelerinin çoğu, güvenlik kuşağına yakın konumları nedeniyle araç ve personel girişinde ayrı bir kayıt prosedürü uygular: plaka bildirimi, operatör kimlik kaydı ve bazı durumlarda güvenlik taraması. Bu adımları teklif aşamasında tamamlıyoruz ki makine kapıda beklemesin. Kuşağa yakın çalışan işletmelerde ayrıca belirli saatlerde araç trafiğinin yoğunlaştığı bantlar olur; bu bantları saha yönetimiyle birlikte tespit edip çalışma programını ona göre kuruyoruz.",
            },
            {
                baslik: "Zeytin değirmeninde ekipman komşuluğu",
                metin:
                    "Sıkım tesislerinin iç hacminde dekantör, santrifüj ve boru hattı gibi hareketli ve sıcak yüzeyli ekipmanlar sık aralıklarla yerleşir. Bu ortamda platform çalışması, makinenin bu ekipmanlara temas etmeyecek bir koridordan ilerlemesini gerektirir; koridor genişliği çoğu zaman standart bir sepetli makinenin şase genişliğiyle sınırlıdır. Kampanya dışı dönemde hatlar durduğunda erişim genişler ve daha büyük sınıf kullanılabilir; hatlar çalışırken ise en kompakt sınıf ve düşük hızda ilerleme zorunludur.",
            },
            {
                baslik: "Silo ve tank çiftliğinde nokta yükü sınırı",
                metin:
                    "Zeytinyağı depolama tesislerinde silo ve tank üstü platformları, taşıma kapasitesi sınırlı hafif çelik konstrüksiyonlardır. Bu yapılar üzerine veya çok yakınına konumlanan bir makinenin ağırlığı, döşemenin taşıma sınırını aşabilir. Bu tip işlerde önce döşemenin proje taşıma kapasitesi tesisten öğrenilir; kapasite bilinmiyorsa makine, döşemeye değil yan zemine konumlanacak şekilde bom uzunluğuyla erişim sağlanır. Bu, aynı işin bazen daha büyük ama daha uzaktan çalışan bir makineyle yapılması anlamına gelir.",
            },
            {
                baslik: "Düz sanayi dokusunun getirdiği makine avantajı",
                metin:
                    "Milas'ın sanayi parselleri, Muğla'nın kıyı ilçelerine kıyasla düz, geniş ve araç erişimine elverişlidir. Bu, hem havalimanı çevresi hem zeytin tesisi işlerinde büyük sınıf makinelerin sahaya girip rahat manevra yapabilmesi anlamına gelir. Pratik sonucu, aynı yükseklikteki bir işin genellikle daha az kurulum değişikliğiyle ve daha kısa sürede bitmesidir — makine bir noktadan diğerine kendi gücüyle kolayca kayar, tekrar tekrar sökülüp taşınmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Milas'ta tesis tipi ve teknik erişim özeti",
                paragraflar: [
                    "İki tesis ailesinin erişim sorunları birbirinden bağımsızdır; aşağıdaki tablo hangi yapıda hangi kısıtın öne çıktığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis/yapı", "Ana kısıt", "Uygun sınıf", "Zamanlama notu"],
                    satirlar: [
                        ["Kargo deposu/hangar", "Geniş açıklık, kapı rayı", "Büyük teleskopik", "Kapı hareket alanı dışı"],
                        ["Servis atölyesi", "Araç trafiği", "Orta akülü", "Sakin saat bandı"],
                        ["Zeytin değirmeni (hat açık)", "Dar koridor, sıcak yüzey", "Kompakt akülü", "Düşük hız zorunlu"],
                        ["Zeytin değirmeni (hat kapalı)", "Yok denecek kadar az", "Orta-büyük sınıf", "Kampanya dışı dönem"],
                        ["Silo/tank üstü", "Döşeme taşıma sınırı", "Uzun erişimli, yan konum", "Kapasite teyidi şart"],
                    ],
                },
            },
            {
                baslik: "Havalimanı kuşağında sevkiyat ve giriş süresi",
                paragraflar: [
                    "Güvenlik kuşağına yakın işletmelerde makinenin sahaya girişi, standart bir sanayi tesisine göre birkaç adım fazla sürebilir: plaka ve operatör kaydı, bazen refakatli giriş. Bu adımları teklif aşamasında tamamladığımız için sahadaki gecikme genellikle yarım saati geçmez; kaydı önceden yapılmamış bir araçta bu süre kapıda saatlerce uzayabilir.",
                    "Kuşağa yakın olmayan ama havalimanı çevresindeki genel sanayi-lojistik parsellerinde bu prosedür uygulanmaz, giriş standart bir depo tesisi kadar hızlıdır. Hangi kategoriye girdiğinizi bilmiyorsanız, adresinizi paylaşın; giriş rejimini önceden netleştirelim.",
                ],
            },
            {
                baslik: "Kampanya takviminin teknik işe etkisi",
                paragraflar: [
                    "Zeytin işleme tesislerinde kampanya döneminde hatlar çalışır ve bu, erişimi teknik olarak daraltır — koridor dar, ekipman sıcak, makine küçük ve yavaş olmak zorundadır. Kampanya dışı dönemde ise aynı tesiste aynı iş daha büyük makineyle, daha az kısıtla ve daha kısa sürede yapılabilir. Bu fark yalnızca takvim tercihinden değil, fiziksel erişim koşulundan kaynaklanır; bu yüzden mümkünse büyük çaplı silo/tank işlerini kampanya dışına planlamanızı öneriyoruz.",
                    "Küçük ve acil müdahaleler (örneğin tek bir armatür değişimi) kampanya içinde de kompakt sınıfla ve düşük hızda yapılabilir; büyük ölçekli bakım işleri için kampanya dışı dönem hem daha güvenli hem daha ekonomiktir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hangar çatısında kiriş bakımı yapacağız, kapı rayına çok mı yaklaşırız?",
                cevap:
                    "Yaklaşmamalı, çünkü hareketli hangar kapısının ray güzergâhı bir çalışma sınırıdır. Keşifte kapının açık-kapalı konumlarını ve ray hattının genişliğini ölçüyor, makinenin bu hattın dışında konumlanacağı bir yerleşim planlıyoruz. Kirişin kapı rayına çok yakın bir noktasında iş varsa, kapı çalışma süresince kilitli tutulur ve bu, tesisin operasyon planına önceden bildirilir. Hangarınızın kapı tipini (kayar, katlanır) ve ray konumunu belirtirseniz, yerleşim planını keşiften önce taslak hâlinde çıkarabiliriz.",
            },
            {
                soru: "Güvenlik kuşağına yakınız, makine ve operatör için hangi bilgiler önceden gerekiyor?",
                cevap:
                    "Genellikle makinenin plakası, operatörün kimlik bilgisi ve bazı sahalarda araç sigorta-ruhsat fotokopisi istenir; bu bilgileri teklif aşamasında toplayıp saha güvenlik birimine önceden iletiyoruz. Bazı işletmelerde ayrıca güvenlik taraması veya refakatli giriş uygulanır — bu, sahanın kendi kuralına bağlıdır ve keşif sırasında netleştirilir. Önceden tamamlanan kayıt, sahadaki bekleme süresini yarım saatin altına indirir; kaydı olmayan bir araç kapıda saatlerce bekleyebilir. Adresinizi paylaşırsanız hangi kategoriye girdiğinizi kontrol ederiz.",
            },
            {
                soru: "Değirmen hatları çalışırken koridor çok dar, yine de iş yapılabilir mi?",
                cevap:
                    "Yapılabilir, ancak en kompakt sınıfla ve düşük hızla. Hatlar çalışırken dekantör, santrifüj ve boru hattı gibi ekipmanlar koridoru daraltır; makinemiz bu koridordan geçebilecek en dar şaseli modelle ilerler ve operatör, hareketli ekipmana güvenli mesafeyi koruyarak çalışır. Koridor genişliğini önceden bilmek için değirmen içi fotoğraf veya kroki isteriz. Eğer iş büyük ölçekliyse — örneğin çatı bakımı gibi uzun süren bir çalışmaysa — hattı kampanya dışı bir güne almanızı öneririz; hem daha büyük makine hem daha az kısıtla çalışılır.",
            },
            {
                soru: "Tank üstü platformumuzun taşıma kapasitesini bilmiyoruz, ne yapmalıyız?",
                cevap:
                    "Bilinmeyen kapasiteyle döşemeye makine koymayız; bunun yerine makineyi yan zemine konumlandırıp bom uzunluğuyla tank üstüne erişiriz. Bu çözüm için tankın çapı, yüksekliği ve yan zeminle arasındaki mesafe gerekir. Tesisinizde döşemenin proje taşıma kapasitesi kayıtlı ise (imalatçı belgesi veya statik proje), bu bilgiyle döşeme üstü konumlandırma da değerlendirilebilir ve genellikle daha kısa sürede iş biter. Hangi belge elinizde varsa paylaşın, en güvenli ve en hızlı seçeneği birlikte seçelim.",
            },
            {
                soru: "Milas'ta büyük makine bulmak Bodrum'a göre neden daha kolay?",
                cevap:
                    "İlçenin sanayi ve lojistik parselleri düz, geniş ve araç erişimine uygun olduğu için büyük teleskopik ve eklemli sınıflar rahatlıkla girip manevra yapabilir; Bodrum yarımadasındaki dar sokak ve avlu kısıtları burada yoktur. Bunun pratik sonucu, aynı yükseklikteki bir işin Milas'ta genellikle daha az kurulum değişikliğiyle ve daha kısa sürede bitmesidir. Elbette köy içi eski yerleşim dokusundaki bazı adresler için yine de keşif fotoğrafı isteriz; ilçenin tamamı aynı derecede geniş değildir.",
            },
            {
                soru: "Hem havalimanı çevresinde depomuz hem zeytin tesisimiz var; tek anlaşmayla mı çalışabiliriz?",
                cevap:
                    "Evet. İki tesisin teknik gereksinimleri (giriş prosedürü, ekipman komşuluğu, döşeme kapasitesi) birbirinden bağımsız değerlendirilir ama koordinasyon tek elden yürütülür; faturalama tesis bazında ayrı tutulur. Depo tarafında saha güvenlik kaydı önceden tamamlanır, zeytin tarafında kampanya takvimine göre makine sınıfı seçilir. İki tesisin adres ve tesis tipi bilgisini paylaşın, her biri için ayrı teknik değerlendirme yapıp tek çerçevede sunalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Milas'ın havalimanı çevresi lojistik dokusu ve zeytin işleme tesisleri kamuya açık genel bilgidir; erişim eşleşmesi ve döşeme/koridor değerlendirme yöntemi firma pratiğidir.",
    },

    "bolge:yatagan": {
        h1: "Yatağan'da Sanayi Tesisleri İçin Platform Kiralama",
        giris:
            "Yatağan, Muğla'nın turizm kimliğinin dışında kalan ve kendi başına bir sanayi merkezi olan ilçedir. İlçe ekonomisinin çekirdeği linyit çıkarımı ve buna bağlı termik üretim olsa da, bu çekirdeğin çevresinde bir hizmet-tedarik dokusu da gelişmiştir: makine bakım atölyeleri, nakliye ve lojistik işletmeleri, yedek parça ve malzeme tedarikçileri. Bu ikinci katman, büyük tesislerin gölgesinde kalır ama kendi yüksek iş ihtiyacını üretir — atölye çatıları, depo cepheleri, saha aydınlatması. Yatağan'da platform hizmeti bu yüzden tek bir müşteri profiline değil, ölçek olarak birbirinden çok farklı iki gruba hitap eder: büyük ölçekli üretim tesisleri (ayrı sayfamızda ele alınır) ve onların etrafında büyümüş küçük-orta ölçekli tedarik-hizmet işletmeleri. İlçenin sanayi kimliği, buradaki her işletmenin platform ihtiyacını da sanayi standardında ele almayı gerektirir: dizel makine kısıtı, saha güvenlik disiplini ve sürekli üretim ortamına saygılı çalışma temposu.",
        maddeler: [
            {
                baslik: "Büyük tesisin gölgesindeki tedarik dokusu",
                metin:
                    "Yatağan'ın merkezinde ve çevresinde, ana üretim tesislerine hizmet veren onlarca küçük-orta ölçekli işletme bulunur: makine bakım atölyeleri, lastik ve hidrolik servisleri, nakliye firmalarının garaj-depo yapıları. Bu işletmelerin yüksek iş listesi genellikle kısadır — bir çatı bakımı, birkaç aydınlatma noktası, bir cephe onarımı — ama sanayi bölgesi içinde yer aldıkları için standart bir depo tesisi gibi ele alınırlar; dizel makine kısıtı ve saha giriş kuralları burada da geçerlidir.",
            },
            {
                baslik: "Dizel yasağının kapalı atölyelerdeki karşılığı",
                metin:
                    "Kapalı atölye ve depo hacimlerinde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller standarttır. Bu kural küçük atölyeler için de geçerlidir ve çoğu zaman ilk kiralamada gözden kaçar — işletme sahibi elindeki en yüksek erişimli makineyi ister ama o sınıf dizel motorluysa, kapalı hacimde kullanılamaz. Bu yüzden ilk temas anında hacmin kapalı mı açık mı olduğunu netleştiriyoruz; kapalıysa akülü alternatif önerilir.",
            },
            {
                baslik: "Malzeme ve yedek parça depolarında raf üstü işler",
                metin:
                    "Tedarik zincirindeki işletmelerin bir kısmı raf sistemli depo işletir; bu depolarda tavan yüksekliği genellikle 6-10 metre bandındadır ve raf üstü aydınlatma veya sprinkler bakımı gibi işler koridor genişliğiyle sınırlıdır. Şase genişliği koridor ölçüsüyle karşılaştırılmadan makine seçilmez; dar koridorlu depolarda en kompakt akülü sınıf standart çözümdür.",
            },
            {
                baslik: "Sanayi bölgesi içi kısa mesafe avantajı",
                metin:
                    "Yatağan'daki işletmelerin çoğu birbirine yakın mesafede, aynı sanayi bölgesi içinde veya karayolu boyunca kümelenmiştir. Bu yakınlık, aynı gün içinde birden fazla küçük işi art arda tamamlamayı mümkün kılar; nakliye bedeli bu şekilde birden fazla adres arasında paylaşılabilir. Komşu işletmelerin taleplerini aynı güne yazdırmak, ilçedeki en ekonomik kiralama biçimidir.",
            },
            {
                baslik: "Büyük tesis periyoduyla senkronizasyon",
                metin:
                    "Büyük üretim tesislerinin planlı duruş dönemlerinde ilçedeki iş yoğunluğu artar; bu dönemlerde tedarik işletmelerinin de kendi bakım işlerini aynı haftaya sıkıştırma eğilimi vardır çünkü tesis genelinde 'bakım havası' oluşur. Filo kapasitesini bu yoğun haftalara göre planlıyoruz; küçük işletmelerin kendi bakım kalemlerini bu haftaların dışına, ilçenin daha sakin olduğu dönemlere kaydırması genellikle hem daha hızlı teslim hem daha uygun fiyat sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yatağan'da işletme tipi ve tipik kalem",
                paragraflar: [
                    "İlçedeki küçük-orta ölçekli işletmelerin yüksek iş profili aşağıdaki gibi özetlenebilir.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik kalem", "Hacim türü", "Uygun sınıf"],
                    satirlar: [
                        ["Makine bakım atölyesi", "Vinç kirişi, aydınlatma", "Kapalı, orta tavan", "Akülü 8-10 m"],
                        ["Nakliye/garaj tesisi", "Çatı, cephe", "Kapalı/yarı açık", "Akülü 10-12 m"],
                        ["Malzeme deposu (raflı)", "Raf üstü, sprinkler", "Kapalı, dar koridor", "Kompakt akülü"],
                        ["Yedek parça tedarikçisi", "Tabela, dış aydınlatma", "Açık", "Akülü 8 m"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada dizel-akülü ayrımını netleştirmek",
                paragraflar: [
                    "Yatağan'da ilk kez kiralayan küçük işletmelerden en sık aldığımız soru 'en yükseğe çıkan makineyi verin' şeklindedir. Ancak sanayi bölgesindeki kapalı hacimlerin çoğunda dizel makine kullanılamaz; bu yüzden ilk sorumuz her zaman hacmin açık mı kapalı mı olduğudur. Kapalıysa akülü sınıf içinde en uygun yükseklik önerilir; açık sahada (örneğin dış cephe veya tabela işi) dizel de değerlendirmeye girer.",
                    "Bu ayrımı baştan netleştirmek, sahaya yanlış makine gelmesini önler — kapalı bir atölyeye dizel makine gönderilip geri çevrilmesi, hem zaman hem güven kaybettirir.",
                ],
            },
            {
                baslik: "Komşu işletmelerle ortak gün planlaması",
                paragraflar: [
                    "İlçedeki sanayi bölgesi kompakt olduğu için, aynı bölgedeki birden fazla işletmenin taleplerini aynı güne toplamak kolaydır. Bir işletme talep açtığında, aynı sanayi bölgesindeki diğer işletmelere de haber verilmesini öneririz; birkaç işletme aynı güne yazıldığında nakliye bedeli bölünür ve her işletme için birim maliyet düşer.",
                    "Bu model özellikle küçük ölçekli, yarım günü doldurmayan işler için değerlidir. Tek başına ekonomik olmayan bir tabela veya aydınlatma işi, ortak günle makul bir bedele iner.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük bir atölyeyiz, ilk kez kiralayacağız; nereden başlamalıyız?",
                cevap:
                    "Üç bilgiyle başlarız: hedef yüksekliğiniz (tavana veya çalışılacak noktaya mesafe), hacmin kapalı mı açık mı olduğu ve zeminin durumu (beton, toprak, eğimli). Kapalı bir atölyede dizel makine kullanılamayacağı için bu sorunun cevabı doğru sınıfı belirler; açık sahada dizel de seçenektir. Bu üç bilgiyle birlikte kapı genişliği ve koridor ölçüsünü de verirseniz, telefonda net bir öneri sunabiliriz. Terminoloji bilmenize gerek yok; 'şu noktaya ulaşmam lazım' cümlesi yeterli başlangıçtır.",
            },
            {
                soru: "Depomuzda raf üstü sprinkler bakımı yapılacak, hangi makine gerekir?",
                cevap:
                    "Raf sistemli depolarda belirleyici olan tavan yüksekliği kadar koridor genişliğidir; makine raflar arasına girecekse şase genişliği koridor ölçüsüyle karşılaştırılmalıdır. Tipik 6-10 metre tavanlı bir depoda, dar koridorlarda en kompakt akülü sınıf, geniş koridorlarda orta sınıf akülü makine tercih edilir. Koridor genişliğini ve raf yüksekliğini bildirirseniz, sahaya gelmeden doğru sınıfı belirleriz; ölçü bilinmeden gelen makine koridora sığmayabilir.",
            },
            {
                soru: "Büyük tesisin duruş haftasında bizim de işimiz olacak, makine bulabilir miyiz?",
                cevap:
                    "Bulabiliriz ama erken planlamayla. Büyük tesislerin planlı duruş dönemlerinde ilçe genelinde talep yoğunlaşır; küçük işletmelerin de bu haftalarda bakım yaptırma eğilimi vardır. Mümkünse kendi kalemlerinizi bu yoğun haftaların dışına, ilçenin daha sakin bir dönemine kaydırmanızı öneririz — hem teslim daha hızlı olur hem fiyat daha uygun kalır. Tarihiniz esnekse ilk sakin güne yazarız; sabit tarihte de çalışırız, ancak yoğun haftada fiyat ve teslim süresi farkını baştan söyleriz.",
            },
            {
                soru: "Komşu atölyeyle birlikte talep açarsak ne kazanırız?",
                cevap:
                    "Nakliye bedelinin paylaşılmasını kazanırsınız. İlçedeki sanayi bölgesi kompakt olduğu için, aynı bölgedeki birkaç işletmenin talebi aynı güne yazıldığında makine adresten adrese kısa mesafede ilerler ve nakliye kalemi işletme sayısına bölünür. Tek başına yarım günü doldurmayan bir iş (birkaç armatür, bir tabela), ortak günle çok daha makul bir bedele iner. Talebinizi açarken komşu işletmelere haber vermenizi öneririz; birlikte açılan talep daha hızlı güne bağlanır.",
            },
            {
                soru: "Dizel makineyle geldiniz ama atölye kapalıymış, ne olur?",
                cevap:
                    "Bu durumu yaşamamak için ilk temas anında hacmin açık mı kapalı mı olduğunu soruyoruz; doğru cevaplanırsa makine baştan akülü sınıftan seçilir ve bu sorun oluşmaz. Yine de bilgi eksik geldiyse ve dizel makine sahaya gönderildiyse, kapalı hacimde çalıştırılmaz — bu, egzoz emisyonu ve iş güvenliği kuralıdır. Böyle bir durumda en kısa sürede akülü alternatif planlanır ancak bu, iş takviminde gecikme yaratır. Bu yüzden ilk kiralamada hacim tipini net söylemenizi önemsiyoruz.",
            },
            {
                soru: "Nakliye firmasıyız, garaj çatımızda bakım var; sanayi tesisi gibi mi değerlendirilir?",
                cevap:
                    "Evet, garaj-depo yapıları sanayi tesisi standardında değerlendirilir: hacim kapalıysa dizel kısıtı geçerlidir, açık sahada (örneğin dış cephe) dizel de kullanılabilir. Garaj yapılarında tipik olarak çatı, cephe ve saha aydınlatması talep edilir; araç trafiğinin yoğun olduğu saatler dışında çalışmayı planlamak operasyonunuzu aksatmaz. Garajınızın kapalı/açık oranını ve tavan yüksekliğini bildirirseniz, doğru sınıfı önceden belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Yatağan'ın linyit-termik merkezli sanayi kimliği ve çevresindeki tedarik dokusu kamuya açık genel bilgidir; dizel-akülü ayrımı ve ortak gün planlaması firma pratiğidir.",
    },

    "bolge:fethiye": {
        h1: "Fethiye'de Sera, Paketleme ve Tarımsal Lojistik Tesislerine Platform Kiralama",
        giris:
            "Fethiye denince akla ilk gelen kıyı turizmi olsa da, ilçenin ova kesimi — özellikle Eşen Çayı vadisi boyunca uzanan tarım arazileri — bağımsız ve yıl boyu süren bir üretim ekonomisi taşır. Bu ekonominin omurgası sera üretimi, soğuk hava depolama ve paketleme-sevkiyat zinciridir; kıyının sezon takviminden tamamen farklı bir ritimle çalışır ve platform talebi de bu ritme göre şekillenir. Sera işletmelerinde üst örtü ve taşıyıcı konstrüksiyon bakımı, soğuk hava depolarında yalıtım ve çatı işleri, paketleme tesislerinde bant hattı üzeri aydınlatma ve havalandırma — bu üç grubun ortak paydası, hassas ekipman komşuluğu ve zemin taşıma kapasitesidir. Ova kesiminin coğrafyası kıyıya göre daha düzdür ve bu, sera-depo-paketleme üçgeninde makine erişimini kolaylaştırır; asıl kısıt topografya değil, yapının kendi hassasiyetidir — bir sera örtüsüne veya bir soğuk hava yalıtımına verilecek zarar, iş bedelinin kat kat üzerinde bir onarım maliyeti doğurur.",
        maddeler: [
            {
                baslik: "Sera üst örtüsünde yük aktarma yasağı",
                metin:
                    "Sera konstrüksiyonları, üst örtüyü taşıyacak değil kendi ağırlığını taşıyacak şekilde tasarlanır; bu yüzden platform çalışmasında kesin kural, yükün örtüye veya taşıyıcı çubuklara değil sepetin kendi tabanına binmesidir. Sepetten örtüye dayanma, üst yapıya tutunma veya malzeme istifleme yasaktır. Konumlanma, işin tamamının sepetten yapılabileceği ve örtüye hiçbir noktada temas etmeyeceği şekilde seçilir; bu genellikle örtünün biraz uzağından, dar açılı bir erişim gerektirir.",
            },
            {
                baslik: "Zemin taşıma kapasitesi: toprak, çakıl ve beton kanal ayrımı",
                metin:
                    "Sera ve paketleme sahalarının zemini üç farklı yapıda karşımıza çıkar: doğal toprak, çakıl serili yollar ve sulama-drenaj amaçlı beton kanallar. Doğal toprakta, özellikle sulama sonrası, taşıma kapasitesi düşer ve yük dağıtıcı plaka zorunlu hâle gelir. Beton kanal üzerine veya çok yakınına makine konumlandırmak kanalın kenarını çökertebilir; bu bölgelerde kanaldan güvenli mesafe bırakılır. Sahaya girmeden önce zeminin hangi tipte olduğunu ve son sulama tarihini sormamız bu yüzdendir.",
            },
            {
                baslik: "Soğuk hava deposunda yalıtım hassasiyeti",
                metin:
                    "Soğuk hava depolarının panel duvarları ve çatı yalıtımı, en küçük darbede delinip soğutma verimini düşürebilecek kadar hassastır. Bu yapılarda platform çalışmasında sepetle panel arasında sabit bir mesafe korunur ve temas riski olan noktalara koruma malzemesi yerleştirilir. Çatı üstü işlerde ayrıca yürüme yükünün panel üzerine değil taşıyıcı aşıklara denk gelmesi gerekir; bu bilgiyi tesisin yapı projesinden veya montaj firmasından teyit ederiz.",
            },
            {
                baslik: "Paketleme hattı üzerinde düşük hızlı çalışma",
                metin:
                    "Paketleme tesislerinde bant hattı, tartım ve ayırma üniteleri sık aralıklarla yerleşir ve aralarındaki koridor dardır. Hat çalışırken bu koridorda ilerleyen bir platform, en kompakt sınıftan seçilir ve düşük hızda hareket eder; hat durduğunda ise daha geniş sınıflar da değerlendirilebilir. Bant hattı üzerindeki aydınlatma ve havalandırma kanalı bakımlarının çoğu, tesisin bakım penceresine (genellikle mesai dışı veya hafta sonu) yazılır.",
            },
            {
                baslik: "Sevkiyat mevsiminin lojistik baskısı",
                metin:
                    "Ürün sevkiyat döneminde tesis içi araç trafiği (kamyon, forklift, palet taşıyıcı) yoğunlaşır ve platform çalışması bu trafikle aynı alanı paylaşmak zorunda kalabilir. Bu dönemde çalışma alanını bariyerle ayırmak ve mümkünse sevkiyat saatlerinin dışında ilerlemek standart uygulamamızdır. Sevkiyat mevsimi dışındaki dönemlerde saha çok daha sakin olur ve büyük ölçekli bakım işleri bu pencereye yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Fethiye ovasında tesis tipi ve hassasiyet tablosu",
                paragraflar: [
                    "Ova kesimindeki üç tesis ailesinin hassasiyet noktaları birbirinden farklıdır; aşağıdaki tablo makine seçiminde ilk referans olarak kullanılır.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Ana hassasiyet", "Zemin", "Uygun sınıf"],
                    satirlar: [
                        ["Sera işletmesi", "Üst örtüye temas", "Toprak/çakıl", "Kompakt akülü, yük plakası"],
                        ["Soğuk hava deposu", "Panel/yalıtım darbesi", "Beton", "Orta sınıf, koruma malzemeli"],
                        ["Paketleme hattı (açık)", "Koridor genişliği", "Beton", "En kompakt akülü"],
                        ["Paketleme hattı (kapalı)", "Yok denecek kadar az", "Beton", "Orta-büyük sınıf"],
                        ["Sevkiyat/depo sahası", "Araç trafiği", "Beton/stabilize", "Standart, bariyerli çalışma"],
                    ],
                },
            },
            {
                baslik: "Zemin ve örtü riskini keşifte tespit etmek",
                paragraflar: [
                    "Ova tesislerinde sahaya gitmeden önce sorduğumuz üç soru vardır: zemin tipi ve son sulama tarihi, sera veya soğuk hava yapısının üst örtü/panel malzemesi, ve çalışma anında hattın açık mı kapalı mı olacağı. Bu üç cevap, makine sınıfını ve gereken koruma önlemlerini büyük ölçüde belirler.",
                    "Keşif fotoğrafı istediğimizde amacımız bürokrasi değildir; bir sera örtüsüne veya soğuk hava paneline verilecek zarar, platform kiralama bedelinin kat kat üzerinde bir onarım maliyeti doğurur ve bu risk, doğru bilgiyle neredeyse tamamen ortadan kalkar.",
                ],
            },
            {
                baslik: "Sevkiyat dışı dönemde toplu bakım planı",
                paragraflar: [
                    "Ova kesimindeki tesislerin çoğu, sevkiyat yoğunluğunun düştüğü dönemlerde daha büyük kapsamlı bakım işlerine açık hâle gelir. Bu dönemleri önceden bilmek, hem daha büyük sınıf makine kullanmayı hem de tesis içi trafikle çakışmadan çalışmayı mümkün kılar.",
                    "Birden fazla tesisi olan işletmeler için, tüm tesislerin bakım kalemlerini tek bir sevkiyat dışı pencereye toplamayı öneriyoruz; bu hem nakliye maliyetini böler hem koordinasyonu tek elden yürütür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Seranın üst örtüsüne yakın bir onarım var, örtüye zarar verir misiniz?",
                cevap:
                    "Doğru planlanırsa vermeyiz, çünkü kural nettir: sepet örtüye değmez, yük örtüye veya taşıyıcı çubuklara aktarılmaz. Konumlanma, işin tamamının örtüden güvenli mesafede yapılabileceği şekilde seçilir; bu bazen daha uzun bomlu ama daha uzaktan çalışan bir makine anlamına gelir. Seranızın konstrüksiyon tipini ve onarım noktasının konumunu gösteren fotoğraflarla keşif yapalım; makine sınıfını buna göre seçelim. Belirsiz bir konumlandırmayla iş yapmayı önermeyiz — risk örtünün tamamını etkileyebilir.",
            },
            {
                soru: "Zemin sulamadan yeni çıktı, hemen çalışabilir miyiz?",
                cevap:
                    "Öneririz ki beklenmesi daha güvenli. Sulama sonrası doygun toprakta taşıma kapasitesi düşer ve makine batma veya kayma riski taşır; bir-iki günlük bekleme, hem makine güvenliği hem saha onarımı açısından her zaman daha ucuzdur. Acil bir durumsa yük dağıtıcı plaka ile denenebilir ama garantisi yoktur ve öncelikle zeminin durumunu fotoğrafla değerlendiririz. Sulama takviminizi bildirirseniz, planlamayı zeminin kuru olduğu günlere göre kurarız.",
            },
            {
                soru: "Soğuk hava deposunun çatısında yalıtım paneli var, makine hasar verir mi?",
                cevap:
                    "Önlemsiz risk taşır, önlemle güvenlidir. Panel üzerinde yürüme veya yük aktarma yerine, sepetten mesafeli çalışma ve temas riski olan noktalara koruma malzemesi yerleştirme standart uygulamamızdır. Çatı üstünde fiziksel geçiş gerekiyorsa, yükün panelin değil taşıyıcı aşıkların üzerine denk gelmesi gerekir ve bu bilgiyi tesisin yapı projesinden teyit ederiz. Proje elinizde yoksa montaj firmasının bilgisiyle de ilerleyebiliriz; belirsizlik varsa en temkinli yaklaşımı seçeriz.",
            },
            {
                soru: "Paketleme hattımız sürekli çalışıyor, bakımı ne zaman yapabiliriz?",
                cevap:
                    "İki seçenek var: hat çalışırken en kompakt sınıfla düşük hızda dar koridordan ilerlemek, ya da tesisin bakım penceresini (genellikle mesai dışı veya hafta sonu) kullanmak. İlk seçenek küçük ve acil kalemler için uygundur; ikinci seçenek daha büyük kapsamlı işler için hem daha güvenli hem daha hızlıdır çünkü hat durduğunda daha büyük sınıf makine de kullanılabilir. Hattınızın bakım penceresi varsa bize bildirin, programı ona göre kuralım.",
            },
            {
                soru: "Sevkiyat mevsiminde saha çok kalabalık, o dönemde çalışmamalı mıyız?",
                cevap:
                    "Acil bir iş değilse önerimiz ertelemektir. Sevkiyat döneminde tesis içi araç trafiği yoğunlaşır ve platform çalışması bu trafikle alan paylaşmak zorunda kalır; bu hem güvenlik riski hem verimsizlik yaratır. Acil değilse, sevkiyat mevsiminin dışındaki daha sakin döneme yazmanızı öneririz — bu dönemde hem çalışma daha güvenli olur hem büyük ölçekli işler için daha büyük makine kullanılabilir. Ertelenemeyecek bir işiniz varsa, çalışma alanını bariyerle ayırıp sevkiyat saatlerinin dışına yazarak ilerleriz.",
            },
            {
                soru: "Ovada birden fazla tesisimiz var, tek programda mı planlarsınız?",
                cevap:
                    "Evet, birden fazla tesisi tek yıllık çerçeveye almak hem ekonomik hem koordinasyon açısından avantajlıdır. Sera, soğuk hava deposu ve paketleme tesisinizin bakım kalemlerini sevkiyat dışı bir pencereye topladığımızda, makine bölgede kalarak tesisten tesise ilerler ve nakliye tek sefer ödenir. Her tesisin kendi hassasiyet ve zemin bilgisini ayrı ayrı topluyoruz ama program tek elden yürüyor. Tesislerinizin listesini ve sevkiyat takvimini paylaşın, yıllık planı birlikte kuralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Fethiye ovasının tarımsal-lojistik üretim dokusu kamuya açık genel bilgidir; zemin/örtü değerlendirme yöntemi ve sevkiyat dışı toplu bakım planı firma pratiğidir.",
    },

    "bolge:yatagan-sanayi-bolgesi": {
        h1: "Yatağan Sanayi Bölgesinde Baca, Soğutma Kulesi ve Linyit Taşıma Hattı Bakımı",
        giris:
            "Yatağan sanayi bölgesindeki termik ve maden tesislerinin yüksek iş listesi, çoğu sanayi tesisinden farklı bir yapı taşır: burada iş genellikle yükseklikten çok gövde çapı ve yatay erişim sorunudur. Baca ve soğutma kulesi gibi büyük çaplı yapılar, standart bir bina cephesinden farklı bir geometri sunar — makine yapının hemen dibine giremez, belirli bir mesafeden bom uzatarak çalışır ve bu mesafe hesaplaması işin merkezindedir. Linyit taşıma hattı ise bambaşka bir zorluk taşır: kilometrelerce uzanan bir bant sistemi boyunca ilerleyen, hatta paralel çalışan ve hattın canlı mı durmuş mu olduğuna göre farklı güvenlik kuralları uygulayan bir iş biçimi. Bu sayfa, bölgedeki büyük ölçekli enerji-maden tesislerinin bu iki özel yapı grubuna — baca/kule ve taşıma hattı — nasıl hizmet verdiğimizi, planlı duruş takviminden bağımsız olarak teknik erişim tarafını ele alır.",
        maddeler: [
            {
                baslik: "Baca çapı ve bom uzunluğu hesabı",
                metin:
                    "Bir bacanın dış yüzeyinde çalışmak için gereken makine sınıfı, bacanın yüksekliği kadar çapına da bağlıdır. Makine, baca tabanına yakın bir noktaya konumlanır ve bom, bu noktadan baca yüzeyine kadar olan yatay mesafeyi kapatacak şekilde uzanır; çap büyüdükçe bu mesafe de büyür ve gereken yatay erişim artar. Bacanın belirli bir yüksekliğindeki bir noktada çalışmak isteniyorsa, o noktanın yerden yüksekliği ile makinenin konumlanabileceği en yakın nokta arasındaki mesafenin ikisi birlikte bilinmeden doğru sınıf seçilemez.",
            },
            {
                baslik: "Soğutma kulesi çevresinde zemin ve nem etkisi",
                metin:
                    "Soğutma kulelerinin çevresi, kulenin buharlaşma ve yoğuşma etkisi nedeniyle sürekli nemli kalabilir; bu, zeminde kayma riskini artırır ve makinenin konumlanacağı alanın kuru ve sağlam olduğunun teyit edilmesini gerektirir. Kule tabanına yakın çalışmalarda ayrıca su birikintisi ve olası kimyasal işlem kalıntıları (su arıtma prosesine bağlı) göz önünde bulundurulur; bu bölgelerde çalışma öncesi saha ekibinden zemin ve ortam durumu teyidi alınır.",
            },
            {
                baslik: "Bant hattı boyunca hareketli çalışma düzeni",
                metin:
                    "Linyit taşıma bandı boyunca yapılan bakımlarda makine sabit kalmaz; hat üzerindeki her nokta için ayrı bir konumlanma gerekir ve program, hattın bir ucundan diğerine doğru ilerleyen bir sıra hâlinde kurulur. Bant çalışır durumdaysa makine banda paralel ama temas etmeyecek mesafede konumlanır ve operatör bandın hareket yönüne dikkat eder; bant durduğunda ise bandın üzerinden geçiş de değerlendirmeye alınabilir, ancak bu her zaman saha güvenlik ekibinin onayına bağlıdır.",
            },
            {
                baslik: "Transfer kulesi ve kırıcı ünitesi çevresinde toz kısıtı",
                metin:
                    "Bant hattı üzerindeki transfer kuleleri ve kırıcı-eleme üniteleri, çalışma anında yoğun toz üretebilir. Bu bölgelerde platform çalışması, ünitenin durduğu veya toz bastırma sisteminin devrede olduğu zaman dilimlerine yazılır; toz yoğunken hem görüş hem ekipmanın hassas parçaları (elektronik kontrol panosu gibi) risk altında kalır. Çalışma öncesi saha ekibiyle birlikte ünitenin durma programı kontrol edilir.",
            },
            {
                baslik: "Baca-kule işlerinde iki kişilik operatör ekibi",
                metin:
                    "Büyük çaplı yapılarda yapılan uzun süreli ve yüksek riskli işlerde, tek operatör yerine iki kişilik ekip (operatör + gözcü) çalıştırıyoruz. Gözcünün görevi, makinenin yerden görünmeyen açılarını (baca arkası, kule iç kısmı gibi) izlemek ve gerekirse anlık müdahale için sahada hazır olmaktır. Bu uygulama standart bir bina cephesi işinde zorunlu değildir ama baca ve kule gibi büyük çaplı, karmaşık geometrili yapılarda güvenlik marjını belirgin artırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapı tipine göre ölçü ve makine sınıfı",
                paragraflar: [
                    "Baca, kule ve hat gibi büyük çaplı sanayi yapılarında doğru makine sınıfı, aşağıdaki ölçülerin bilinmesiyle belirlenir.",
                ],
                tablo: {
                    basliklar: ["Yapı", "Gereken ölçü", "Tipik sınıf", "Ek önlem"],
                    satirlar: [
                        ["Baca (dış yüzey)", "Çap + nokta yüksekliği", "Uzun bomlu eklemli", "İki kişilik ekip"],
                        ["Soğutma kulesi çevresi", "Kule çapı + zemin durumu", "Uzun erişimli", "Nem/zemin teyidi"],
                        ["Bant hattı (çalışır)", "Hat uzunluğu, nokta sayısı", "Orta sınıf, paralel hareket", "Bant hızına göre mesafe"],
                        ["Transfer kulesi (dış)", "Kule yüksekliği + toz durumu", "Orta-büyük sınıf", "Toz bastırma kontrolü"],
                        ["Transfer kulesi (iç)", "Geçit/merdiven ölçüsü", "Sabit erişim (platform değil)", "—"],
                    ],
                },
            },
            {
                baslik: "Bant hattı programını kurarken sorduğumuz bilgiler",
                paragraflar: [
                    "Hat boyu bir bakım talebi geldiğinde önce hattın toplam uzunluğunu, çalışılacak nokta sayısını ve bu noktaların hat üzerindeki dağılımını öğreniriz. İkinci olarak bandın çalışma anında canlı mı yoksa durdurulmuş mu olacağını sorarız — bu, hem güvenlik kuralını hem makine sınıfını değiştirir.",
                    "Bu bilgilerle, hattın bir ucundan başlayıp diğer ucuna ilerleyen bir günlük program çıkarırız; her nokta için tahmini süre eklenir ve toplam program süresi baştan netleşir. Belirsiz bir hat boyu talebiyle sahaya çıkmak, günün ortasında programın yeniden kurulmasına yol açabilir.",
                ],
            },
            {
                baslik: "Baca-kule işlerinde keşfin zorunluluğu",
                paragraflar: [
                    "Baca ve soğutma kulesi gibi büyük çaplı yapılarda telefonla verilen bir makine sınıfı önerisi, sahada yanlış çıkma riski taşır — çünkü çap, erişim noktası ve zemin durumu gibi değişkenlerin üçü birden doğru bilinmeden hesap tamamlanmaz. Bu yüzden bu tip işlerde keşfi zorunlu tutuyoruz; keşifte çap ve yükseklik ölçülür, konumlanma noktası belirlenir ve zemin/nem durumu değerlendirilir.",
                    "Keşif çıktısı, teklifle birlikte net bir makine sınıfı ve konumlanma planı olarak sunulur; bu, sahada 'makine yetmedi' sürprizini önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bacanın 30 metre yüksekliğinde bir nokta çalışılacak, hangi makine gerekir?",
                cevap:
                    "Yalnızca yükseklik yeterli bilgi değildir; bacanın çapını ve makinenin konumlanabileceği en yakın noktayla baca yüzeyi arasındaki mesafeyi de bilmemiz gerekir. Bu üç veri (yükseklik, çap, yatay mesafe) birlikte, gereken bom uzunluğunu ve makine sınıfını belirler. Büyük çaplı bacalarda genellikle uzun bomlu eklemli sınıflar tercih edilir. Kesin sayı vermeden önce keşfi öneririz — sahada ölçülen gerçek mesafe, telefonla tahmin edilenden farklı çıkabilir ve bu fark makine sınıfını değiştirebilir.",
            },
            {
                soru: "Soğutma kulesi çevresinde zemin hep nemli görünüyor, bu bir sorun mu?",
                cevap:
                    "Olabilir, bu yüzden önceden kontrol ederiz. Kulenin buharlaşma etkisi çevresindeki zemini sürekli nemli tutabilir ve bu, makinenin kayma riskini artırır. Çalışmadan önce konumlanma alanının kuru ve sağlam olduğunu saha ekibiyle birlikte teyit ediyoruz; gerekirse alternatif bir konumlanma noktası veya zemin kurutma/temizleme önerilir. Kule tabanına yakın bölgelerde ayrıca su arıtma prosesine bağlı kalıntılar olabileceğinden, bu konuda saha ekibinin bilgisine başvururuz.",
            },
            {
                soru: "Bant hattı çalışırken bakım yapılabilir mi, yoksa hat durmalı mı?",
                cevap:
                    "İşin türüne bağlıdır. Bant hattına dokunmayan, hatta paralel dış işler (örneğin destek konstrüksiyonun dış yüzeyi) hat çalışırken de yapılabilir; makine banda güvenli mesafede konumlanır ve operatör bandın hareketine dikkat eder. Bandın kendisine veya çok yakın komşu ekipmana müdahale gerekiyorsa hattın durdurulması gerekir — bu karar her zaman saha güvenlik ekibiyle birlikte verilir. Talebinizi ilettiğinizde işin banda temas edip etmediğini sorarız; bu, programın hat durur/durmaz kararını belirler.",
            },
            {
                soru: "Transfer kulesinin dışında toz çok yoğun, çalışma ertelenir mi?",
                cevap:
                    "Yoğun toz sırasında ertelenir veya toz bastırma sistemi devreye alınana kadar beklenir; hem görüş hem makinenin hassas parçaları için risklidir. Çalışma programını genellikle ünitenin durma periyoduna veya toz bastırma sisteminin aktif olduğu saatlere yazıyoruz. Kulenin çalışma-durma döngüsünü saha ekibinden önceden öğrenip programı buna göre kuruyoruz; bu bilgi olmadan sahaya çıkmak, günün ortasında bekleme süresi doğurabilir.",
            },
            {
                soru: "Baca işinde neden iki kişilik ekip istiyorsunuz, maliyeti artırıyor mu?",
                cevap:
                    "Evet, standart bir işe göre ek maliyet getirir, ancak baca ve kule gibi karmaşık geometrili büyük yapılarda güvenlik marjını belirgin artırdığı için bu işlerde standart uyguladığımız bir yöntemdir. Gözcü, operatörün yerden göremediği açıları (baca arkası, kule iç kısmı gibi) izler ve gerekirse anlık müdahale için hazır bulunur. Bu uygulamayı standart bina cephesi işlerinde zorunlu tutmuyoruz; yalnızca büyük çaplı ve karmaşık geometrili sanayi yapılarında kullanıyoruz. Teklifte bu kalem ayrı satırda görünür.",
            },
            {
                soru: "Hat boyu bir bakım işi için keşif şart mı, telefonla teklif alamaz mıyız?",
                cevap:
                    "Kaba bir fikir telefonla verilebilir ama kesin teklif için keşfi öneririz. Hattın toplam uzunluğu, nokta sayısı ve hattın çalışma durumu bilinmeden verilen bir süre tahmini, sahada değişebilir ve bu da planlı duruş penceresinde beklenmedik gecikmelere yol açabilir. Keşifte hattı baştan sona yürüyüp her noktayı işaretliyor, tahmini süreyi netleştiriyoruz. Hattın krokisini veya haritasını önceden paylaşırsanız, keşif süresini de kısaltabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Termik-linyit tesislerinin baca/soğutma kulesi/taşıma hattı yapıları kamuya açık genel mühendislik bilgisidir; bom-mesafe hesabı ve iki kişilik ekip uygulaması firma pratiğidir.",
    },

    "bolge:aydin-osb-cevre-ili": {
        h1: "Aydın Organize Sanayi Bölgelerine Muğla Sanayi Filosundan Platform Kiralama (Çevre İl)",
        giris:
            "Muğla'nın maden-enerji ağırlıklı sanayi filosu, coğrafi konumu itibarıyla Aydın'ın organize sanayi bölgelerine de hizmet verebilecek mesafededir. Aydın OSB'lerinin sanayi dokusu Muğla'nın havza tesislerinden farklıdır — burada ağırlık tekstil, gıda işleme (özellikle kuru incir ve zeytincilik yan sanayisi) ve makine imalatı gibi orta ölçekli üretim tesislerindedir. Bu tesislerin platform ihtiyacı, havza tesislerindeki büyük çaplı yapı erişiminden çok, standart üretim holü bakımına benzer: çatı, aydınlatma, vinç kirişi, cephe. Muğla filosunun Aydın'a hizmet vermesindeki asıl değer, havza tesislerindeki iş yoğunluğunun düştüğü dönemlerde bu filonun boşta kalmaması ve komşu ile yönlendirilmesidir — bu da Aydın OSB'lerindeki tesislere, bölgesel arzın dar olduğu büyük sınıf makinelere makul sürede erişim sağlar.",
        maddeler: [
            {
                baslik: "Aydın OSB'lerinin sanayi profili",
                metin:
                    "Aydın'ın organize sanayi bölgeleri, tekstil (iplik-dokuma), gıda işleme (kuru incir paketleme, zeytin yan sanayisi) ve orta ölçekli makine-metal imalatı ağırlıklıdır. Bu tesislerin üretim holleri genellikle 6-10 metre tavan yüksekliğinde, raf veya asma kat sistemli, standart çelik konstrüksiyondur. Bu profil, Milas'taki havalimanı-zeytin tesislerine veya Yatağan'daki büyük çaplı yapılara göre daha standart bir sanayi bakım işidir; makine seçimi genellikle akülü orta sınıfla çözülür.",
            },
            {
                baslik: "Gıda işleme tesislerinde hijyen kuralı",
                metin:
                    "Kuru incir ve zeytin yan sanayisi tesislerinde, üretim alanına giren her ekipman için temel hijyen kuralları uygulanır: temiz makine gövdesi, yağ sızıntısı kontrolü ve mümkünse üretim durduğunda çalışma. Bu kural Milas'taki zeytin işleme tesislerinde uyguladığımız yöntemle aynı mantığı taşır ama Aydın'daki tesisler genellikle daha büyük ölçekli paketleme hatlarına sahiptir ve bu da koridor genişliğini bazen daha rahat hâle getirir.",
            },
            {
                baslik: "Muğla filosunun boşluk doldurma mantığı",
                metin:
                    "Havza tesislerindeki planlı duruş dönemleri arasında filo için boşluklar oluşur; bu boşlukları Aydın OSB taleplerine yönlendiriyoruz. Bu, Aydın'daki tesisler için pratik bir avantaj sağlar: kendi bölgelerinde her zaman bulunmayan büyük sınıf teleskopik veya eklemli makinelere, havza takvimine denk gelen dönemlerde makul sürede erişebilirler. Tarih esnekliği olan talepler bu modelden en çok fayda görür.",
            },
            {
                baslik: "Sevkiyat süresi ve mesafe gerçeği",
                metin:
                    "Muğla'nın havza bölgesinden Aydın OSB'lerine sevkiyat, karayolu mesafesine bağlı olarak birkaç saat sürer; bu, aynı gün teslim vaadini çoğu durumda gerçekçi kılmaz. Dürüst modelimiz, o hafta bölgede zaten çalışan bir makine varsa hızlı müdahale, yoksa planlı sevkiyattır ve süresi baştan söylenir. Acil bir ihtiyaçta tam sevkiyat seçeneği sunulur, ancak bunun ek maliyeti teklife ayrı satırda yazılır.",
            },
            {
                baslik: "Çerçeve anlaşmayla tekrarlayan taleplerin kolaylaştırılması",
                metin:
                    "Aydın'da düzenli bakım ihtiyacı olan tesisler için çerçeve anlaşma öneriyoruz: yıllık bakım takvimi önceden paylaşılır, biz de bu takvimi havza programımızla eşleştirerek en uygun tarihleri öneririz. Bu, hem tesisin her seferinde yeniden teklif almasını gereksiz kılar hem de filo tarafında kapasite planlamasını kolaylaştırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydın OSB'de tesis tipi ve tipik ihtiyaç",
                paragraflar: [
                    "Bölgedeki üç ana tesis grubunun platform ihtiyacı aşağıdaki gibi özetlenebilir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Tipik kalem", "Hacim", "Uygun sınıf"],
                    satirlar: [
                        ["Tekstil üretim holü", "Çatı, aydınlatma, kanal", "6-10 m kapalı", "Akülü orta sınıf"],
                        ["Kuru incir/zeytin paketleme", "Hat üstü aydınlatma", "Kapalı, hijyen kurallı", "Akülü kompakt"],
                        ["Makine-metal imalat", "Vinç kirişi, cephe", "Orta-yüksek tavan", "Akülü orta-büyük"],
                        ["Depo/lojistik", "Raf üstü, tabela", "Kapalı/açık", "Akülü standart"],
                    ],
                },
            },
            {
                baslik: "Havza takvimiyle eşleşen dönemleri yakalamak",
                paragraflar: [
                    "Aydın'daki taleplerden en hızlı ve en ekonomik sonucu alanlar, tarihini havza programımızdaki boşluklara esnetebilenlerdir. Bir talep geldiğinde önce mevcut program üzerinde en yakın uygun boşluğu kontrol ederiz; bu boşluk genellikle bir havza tesisinin duruş programının bitişine denk gelir.",
                    "Sabit tarihli ve ertelenemeyecek talepler için de hizmet veriyoruz; bu durumda havza dışı özel sevkiyat düzenlenir ve bunun ek maliyeti teklifte ayrıca gösterilir. İki seçenek arasındaki fark, talep anında net biçimde sunulur.",
                ],
            },
            {
                baslik: "Çerçeve anlaşmanın işleyişi",
                paragraflar: [
                    "Yıl içinde birden fazla kez platform ihtiyacı olan tesisler için, tek tek teklif almak yerine yıllık bir çerçeve kuruyoruz: tesis, tahmini bakım kalemlerini ve tercih ettiği ayları paylaşır, biz de bunu havza programımızla karşılaştırıp en uygun pencereleri öneririz.",
                    "Çerçeve anlaşma fiyat sabitlemez ama önceliklendirme sağlar — çerçeve anlaşmalı bir tesisin talebi, aynı haftaya denk gelen tekil taleplere göre önce değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aydın'daki tekstil fabrikamıza Muğla'dan makine gelmesi mantıklı mı, yoksa bölgesel firma mı tercih etmeliyiz?",
                cevap:
                    "İhtiyacınızın büyüklüğüne bağlıdır. Standart yükseklikte (6-10 metre) bir bakım işiyse, bölgenizdeki yerel seçenekler de değerlendirilebilir; ancak büyük sınıf teleskopik veya eklemli bir makineye ihtiyacınız varsa ve bölgenizde bu sınıf her zaman bulunmuyorsa, havza filomuzdan yönlendirme genellikle daha hızlı ve daha geniş seçenek sunar. Tarihinizi esnetebiliyorsanız, havza programımızdaki boşluklara denk getirerek maliyeti de düşürebiliriz.",
            },
            {
                soru: "Kuru incir paketleme tesisimizde hijyen kuralı var, makine bu kurala uyar mı?",
                cevap:
                    "Uyar; üretim alanına giren makine ve operatör için temel hijyen kuralları (temiz gövde, yağ sızıntısı kontrolü) uygulanır ve mümkünse çalışma üretimin durduğu saatlere planlanır. Bu, Milas'taki zeytin işleme tesislerinde uyguladığımız yöntemle aynı mantıktır. Tesisinizin özel hijyen prosedürü varsa (örneğin belirli bir dezenfeksiyon adımı), önceden paylaşın; operatör brifingine ekleriz.",
            },
            {
                soru: "Acil bir işimiz var, aynı gün makine gelir mi?",
                cevap:
                    "Bölgede o hafta çalışan bir makinemiz varsa mümkündür ve genellikle aynı veya ertesi gün müdahale edilir; bölgede makine yoksa havza bölgesinden özel sevkiyat gerekir ve bu birkaç saat sürer. İkisi arasındaki farkı talep anında net söyleriz — 'hemen geliriz' vaadini yalnızca gerçekten mümkünse veririz. Aciliyetin gerçek derecesini ve konumunuzu paylaşırsanız, en gerçekçi süreyi hemen verebiliriz.",
            },
            {
                soru: "Yılda birkaç kez düzenli bakım yaptırıyoruz, her seferinde yeniden mi teklif almalıyız?",
                cevap:
                    "Gerek yok; çerçeve anlaşma bu tekrarı ortadan kaldırır. Yıllık bakım takviminizi ve tahmini kalemlerinizi paylaşırsanız, bunu havza programımızla karşılaştırıp size en uygun ayları öneririz; her talep için ayrı teklif süreci yürütmezsiniz. Çerçeve anlaşmalı tesislerin talepleri, aynı haftaya denk gelen tekil taleplere göre öncelikli değerlendirilir. Anlaşma fiyatı sabitlemez ama planlama kolaylığı ve öncelik sağlar.",
            },
            {
                soru: "Vinç kirişi bakımı için ne kadar erişim gerekir, standart makine yeter mi?",
                cevap:
                    "Çoğu orta ölçekli imalat holünde evet; 6-10 metre bandındaki vinç kirişleri akülü orta sınıf bir makineyle rahat çalışılır. Kirişin konumu ve holün genişliğine bağlı olarak yatay erişim de gerekebilir; bu durumda eklemli sınıf tercih edilir. Kirişin yüksekliğini, holün genişliğini ve kapı ölçüsünü paylaşırsanız, telefonda net bir sınıf önerisi verebiliriz; sahaya gelmeden karar netleşir.",
            },
            {
                soru: "Havza programınız yoğunken bize hizmet veremiyor musunuz?",
                cevap:
                    "Veririz, ancak yoğun dönemde teslim süresi ve fiyat, filo müsaitliğine bağlı değişebilir. Bu dönemlerde önceliği, tarihini esnetebilen ve önceden planlanmış (özellikle çerçeve anlaşmalı) talepler alır. Acil ve sabit tarihli bir ihtiyacınız varsa havza dışı özel sevkiyatla da hizmet veririz; bu seçeneğin maliyet farkını baştan söyleriz. Talebinizi mümkün olduğunca erken iletmeniz, yoğun dönemde de yerinizi garantiler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aydın OSB'lerinin tekstil-gıda-imalat ağırlıklı sanayi profili kamuya açık genel bilgidir; havza boşluk yönlendirmesi ve çerçeve anlaşma modeli firma pratiğidir.",
    },

    "bolge:denizli-osb-cevre-ili": {
        h1: "Denizli Organize Sanayi Bölgelerine Muğla Sanayi Filosundan Platform Kiralama (Çevre İl)",
        giris:
            "Denizli, Türkiye'nin tekstil ve tekstil terbiye (boyama-apre) sanayisinin en yoğunlaştığı illerinden biridir ve bu, ildeki organize sanayi bölgelerine özgü bir platform ihtiyacı doğurur. Boyahane ve apre tesislerinde kimyasal buhar ve nem yüksek olduğundan makine seçiminde korozyon direnci ve elektrik güvenliği öne çıkar; dokuma ve iplik fabrikalarında ise geniş açıklıklı, yüksek tavanlı üretim holleri standart bir sanayi bakım profili sunar. Muğla'daki havza filomuz, coğrafi yakınlığı nedeniyle Denizli OSB'lerine de hizmet verebilir; özellikle havza tesislerindeki planlı duruş dönemleri arasında oluşan boşluklarda bu yönlendirme, hem filonun sürekli meşgul kalmasını sağlar hem Denizli'deki tesislere bölgesel arzın dar olduğu büyük sınıf makinelere erişim sunar. Bu sayfa, Denizli'nin tekstil ağırlıklı sanayi profiline özgü teknik gereksinimleri ve Muğla'dan hizmet verme mantığını ele alır.",
        maddeler: [
            {
                baslik: "Boyahane ve apre tesislerinde nem-kimyasal ortam",
                metin:
                    "Boyama ve apre işlemlerinin yapıldığı hacimlerde hava nemli ve zaman zaman kimyasal buhar içerir; bu ortamda çalışacak makinenin elektrik aksamının nem ve kimyasala dayanıklı olması gerekir. Standart bir akülü platform bu ortamlarda genellikle sorunsuz çalışır, ancak uzun süreli kullanımda makinenin metal aksamı korozyona karşı ek bakım gerektirebilir. Bu tesislerde çalışma öncesi havalandırma durumu ve varsa kimyasal maruziyet sınırları saha güvenlik ekibinden öğrenilir.",
            },
            {
                baslik: "Dokuma ve iplik fabrikalarında geniş açıklık",
                metin:
                    "Dokuma holleri genellikle geniş açıklıklı, orta-yüksek tavanlı (8-12 metre) yapılardır ve tavanda aydınlatma, havalandırma kanalı ve bazen asma vinç sistemi bulunur. Bu hacimlerde büyük sınıf akülü makineler rahat manevra yapar; kısıt genellikle tezgâh sıraları arasındaki koridor genişliğidir. Tezgâhlar arası mesafe dar olan eski nesil tesislerde en kompakt sınıf tercih edilir.",
            },
            {
                baslik: "İplik ve tekstil tozunun elektrik ekipmanına etkisi",
                metin:
                    "İplik ve dokuma üretiminde havada asılı kalan lif ve toz, elektrikli ekipmanın havalandırma deliklerine dolarak aşırı ısınmaya yol açabilir. Bu ortamlarda kullanılan makinelerin düzenli temizliği ve mümkünse toz yoğunluğunun düşük olduğu saatlerde (örneğin vardiya değişim aralıkları) çalışma standart uygulamamızdır. Tesisin toz yoğunluğu hakkında bilgi paylaşılması, doğru bakım ve zamanlama planlaması için önemlidir.",
            },
            {
                baslik: "Havza boşluklarının Denizli'ye yönlendirilmesi",
                metin:
                    "Muğla havza tesislerindeki planlı duruş dönemleri arasında filo için boşluklar oluştuğunda, bu boşluklar coğrafi olarak yakın olan Denizli OSB taleplerine yönlendirilir. Bu model, Denizli'deki tesislere kendi bölgelerinde her zaman bulunmayan büyük sınıf makinelere makul sürede erişim sağlar; karşılığında havza filomuz da boşta beklemek yerine sürekli iş üretir.",
            },
            {
                baslik: "Mesafe ve sevkiyat gerçeği",
                metin:
                    "Muğla'nın havza bölgesinden Denizli OSB'lerine sevkiyat birkaç saat sürer; bu mesafe aynı gün acil müdahale vaadini çoğu durumda gerçekçi kılmaz. Bölgede o an çalışan bir makinemiz varsa müdahale hızlı olur, yoksa planlı sevkiyat gerekir ve süresi talep anında açıkça söylenir. Planlı ve tarihi esnek talepler bu mesafe dezavantajını fiyat avantajına çevirebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Denizli sanayisinde tesis tipi ve makine gereksinimi",
                paragraflar: [
                    "Tekstil ağırlıklı sanayi profilinde tesis tipine göre öne çıkan gereksinimler aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Ana ortam kısıtı", "Hacim", "Uygun sınıf"],
                    satirlar: [
                        ["Boyahane/apre", "Nem, kimyasal buhar", "Kapalı, yüksek nem", "Akülü, korozyon kontrollü"],
                        ["Dokuma holü", "Koridor genişliği", "8-12 m açık plan", "Akülü orta-büyük"],
                        ["İplik fabrikası", "Toz yoğunluğu", "Kapalı", "Akülü, düzenli temizlik"],
                        ["Depo/sevkiyat", "Standart", "Kapalı/açık", "Akülü standart"],
                    ],
                },
            },
            {
                baslik: "Nemli ortamda makine hazırlığı",
                paragraflar: [
                    "Boyahane gibi yüksek nemli hacimlere gönderilen makineler, çalışma öncesi elektrik aksamı ve bağlantı noktaları açısından kontrol edilir; bu, standart bir kuru depo tesisine göre ek bir hazırlık adımıdır. Uzun süreli kullanımda korozyon belirtisi gösteren parçalar önceden değiştirilir.",
                    "Tesisin kimyasal maruziyet sınırları veya özel havalandırma kuralı varsa, bunu operatör brifingine dahil ediyoruz; bu bilgi genellikle tesisin İSG biriminden alınır.",
                ],
            },
            {
                baslik: "Havza-Denizli eşleştirmesinin planlanması",
                paragraflar: [
                    "Denizli'deki taleplerden en hızlı sonucu, tarihini esnetebilen tesisler alır; bu talepler havza programındaki en yakın boşluğa yerleştirilir. Sabit tarihli ve ertelenemeyecek talepler için özel sevkiyat da mümkündür, ek maliyeti teklifte ayrı gösterilir.",
                    "Düzenli bakım ihtiyacı olan tesisler için çerçeve anlaşma öneriyoruz; yıllık kalem listesi havza takvimiyle eşleştirilerek en uygun pencereler önceden belirlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Boyahanemizde makine nem nedeniyle arızalanır mı?",
                cevap:
                    "Doğru hazırlıkla risk düşüktür. Nemli hacimlere gönderilen makinelerin elektrik aksamı ve bağlantı noktaları çalışma öncesi kontrol edilir; bu, standart bir kuru tesise göre ek bir adımdır. Uzun süreli kullanımda korozyon riski taşıyan parçalar önceden değiştirilir. Tesisinizin nem ve kimyasal maruziyet düzeyi hakkında bilgi paylaşırsanız, hazırlığı buna göre yaparız; belirsizlik varsa en dayanıklı ekipmanı öneririz.",
            },
            {
                soru: "Dokuma holümüzde tezgâhlar sık dizili, makine aralardan geçebilir mi?",
                cevap:
                    "Tezgâh aralığına bağlıdır; bu yüzden koridor genişliğini önceden sormamız gerekir. Geniş açıklıklı modern holler büyük sınıf akülü makinelerle rahat çalışılır; eski nesil tesislerde tezgâh sıraları dar olabilir ve bu durumda en kompakt sınıf tercih edilir. Tezgâh aralığını ve hedefin holdeki konumunu bildirirseniz, sahaya gelmeden doğru sınıfı belirleriz; dar bir koridora büyük makine göndermek sahada iş kaybına yol açar.",
            },
            {
                soru: "İplik fabrikasında toz çok, makineye zarar verir mi?",
                cevap:
                    "Uzun vadede havalandırma deliklerine dolarak ısınma sorununa yol açabilir; bu yüzden bu ortamlarda kullanılan makinelerin düzenli temizliğini yapıyor ve mümkünse toz yoğunluğunun düştüğü saatlerde (vardiya arası gibi) çalışmayı tercih ediyoruz. Tesisinizin toz yoğunluğu ve varsa temizlik döngüsü hakkında bilgi verirseniz, bakım ve zamanlama planını ona göre kurarız. Sürekli yüksek toz varsa, çalışma sonrası makinenin ek temizlikten geçirilmesi standart uygulamamızdır.",
            },
            {
                soru: "Muğla'dan Denizli'ye makine kaç saatte gelir?",
                cevap:
                    "Havza bölgesinde o an çalışan bir makinemiz varsa müdahale hızlıdır ve genellikle aynı veya ertesi gün mümkün olur; bölgede makine yoksa özel sevkiyat gerekir ve bu birkaç saat sürer. Tarihinizi esnek bırakırsanız havza programındaki en yakın boşluğa yazarız, bu genellikle en ekonomik seçenektir. Sabit tarihli acil talepler için de hizmet veririz; bu durumda sevkiyat maliyeti teklifte ayrı bir kalem olarak görünür.",
            },
            {
                soru: "Yılda birkaç kez bakım yaptırıyoruz, çerçeve anlaşma bize ne kazandırır?",
                cevap:
                    "Her seferinde yeniden teklif alma yükünü ortadan kaldırır ve öncelik sağlar. Yıllık kalem listenizi ve tercih ettiğiniz ayları paylaşırsanız, bunu havza programımızla karşılaştırıp en uygun pencereleri öneririz; çerçeve anlaşmalı tesislerin talepleri, aynı haftaya denk gelen tekil taleplere göre önce değerlendirilir. Fiyat sabitlenmez ama planlama kolaylığı ve öncelik kazanırsınız.",
            },
            {
                soru: "Hem boyahanemiz hem dokuma holümüz var, tek teklifte mi değerlendirirsiniz?",
                cevap:
                    "Evet, iki hacmin farklı gereksinimlerini (nem/kimyasal kontrolü, koridor genişliği) ayrı ayrı değerlendirip tek çerçevede sunarız. Boyahane tarafında makine hazırlığı nem ve kimyasal maruziyete göre yapılır, dokuma tarafında sınıf seçimi koridor genişliğine göre belirlenir; faturalama hacim bazında ayrı tutulur, koordinasyon tek elden yürür. İki hacmin ölçü ve ortam bilgisini paylaşın, birlikte değerlendirelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Denizli'nin tekstil-boyahane-apre ağırlıklı sanayi profili kamuya açık genel bilgidir; havza boşluk yönlendirmesi ve nem/toz hazırlık yöntemi firma pratiğidir.",
    },
    "bolge:mugla-osb": {
        h1: "Muğla OSB Karma İmalat Sahasında Platform Prosedürü",
        giris: "Muğla OSB için bu kayıt karma imalat sahasında yüksek erişim işinin hangi prosedür kapılarından geçeceğini anlatır. Belirli işletme, üretim kolu, kapasite, bina ölçüsü veya ekipman markası ileri sürülmez. Aynı bölgede farklı imalat biçimleri bulunabileceği için sektör adına bakılarak ortam, enerji, zemin ya da makine uygunluğu varsayılmaz. Gerçek talepte armatür, kablo taşıyıcı, havalandırma elemanı, kamera, kapı üstü donanım ve yüksek teknik bağlantı gibi hedefler tesis sorumlusu tarafından fotoğraf ve ölçüyle tanımlanır. İşveren temsilcisi kapsamı açar; bölüm sahibi üretim ve malzeme hareketini ayırır; enerji yetkilisi gerekli güvenli durumu kurar; operatör platform sınıfını ve günlük kontrolü teyit eder. Düz, boş iç aksta uygun makaslı; sabit ekipman arkasında yatay erişim gereken noktada üretici zarfı yeterli eklemli; dış görevde ise zemine ve hava kullanımına uygun seçenek değerlendirilebilir. Akülü olması her hacimde otomatik uygunluk sağlamaz. Platform yük, ürün veya makine parçası taşımaz. Sepet yalnız izin kartında belirtilen bölümde açılır. İş sonunda teknik sonuç, alet sayımı ve temizlik birlikte kabul edilerek alan üretime geri verilir. Böylece karma imalat çeşitliliği, tek tip saha şablonuna değil görev bazlı bir izin ve teslim standardına bağlanır.",
        maddeler: [
            { baslik: "Görev kartını üretim türünden bağımsız kurmak", metin: "Kartta hedef, yapılacak işlem, etkilenen bölüm, gerekli uzman, küçük malzeme, çalışma saati ve durdurma ölçütü bulunur. Tesis etiketi üzerinden toz, kimyasal, sıcaklık veya enerji durumu tahmin edilmez; bilgiyi bölüm sahibi ve iş güvenliği sorumlusu sağlar. Alanı teslim eden, izolasyonu doğrulayan, platformu kullanan, yerde gözcülük yapan ve sonucu kabul eden kişiler yazılır. Yeni hedef talebinde eski kart kendiliğinden genişlemez. Görev geometrisi ve çevre etkisi yeniden incelenir. Yetki ya da ortam bilgisi belirsizse makinenin sahada hazır olması çalışma başlangıcı sayılmaz." },
            { baslik: "Bölüm izolasyonunu hareket ve enerjiyle tamamlamak", metin: "Çalışma sınırı yalnız platform tabanı çevresinde değildir; sepet hareketi, düşebilecek küçük parçalar, araç dönüşü ve komşu proses etkisi birlikte kapsanır. İşletme ilgili enerjiyi kendi yetkili yöntemiyle güvenli duruma getirir. Forklift, vinç, askılı yük, ürün geçişi ve yaya hareketi hücreden çıkarılır. Komşu bölüm ancak toz, buhar, titreşim, sıcaklık veya malzeme akışı çalışma alanına ulaşmıyorsa açık kalabilir. Bariyer sorumlusu belirlenir. Ayrım bozulursa sepet güvenli biçimde indirilir. Üretim hedefi veya kısa bakım süresi izolasyon adımlarını geçersiz kılmaz." },
            { baslik: "Platform sınıfını gerçek geometriyle teyit etmek", metin: "Her hedefte dikey mesafe, yatay engel, park yüzeyi, kapı, dönüş, üst açıklık, ortam ve sepetteki toplam yük kaydedilir. Makaslı sınıf hedef altında güvenli konum ister; bu koşul yoksa korkuluk üzerinden uzanılmaz. Eklemli seçenek üreticinin çalışma zarfından okunur. Dış alanda yüzey taşıması ve hava koşulu ayrı karar kapısıdır. Aynı holdeki bütün noktalar tek makineye zorlanmaz. Personel, bağlı el aleti ve küçük parçalar kapasite hesabına girer. Ağır parça uygun kaldırma yöntemiyle hazırlanır; hareket ekipmanı hücreden çıktıktan sonra personel erişimi başlar." },
            { baslik: "Ortamlar arası geçişi yeni kabul saymak", metin: "Platform bir imalat bölümünden diğerine geçecekse sepet aşağı alınır ve önceki izin kapatılır. Teker, alt takım ve sepet tesisin kabul ettiği yöntemle temizlenir; toz veya kalıntı yeni hacme taşınmaz. Yeni bölümün kapısı, dönüşü, park yüzeyi, üst engeli, havalandırması ve özel kısıtları yeniden değerlendirilir. Bir bölümde uygun görülen akülü ya da kompakt sınıf diğer bölümde otomatik kabul edilmez. Rota güncel istif nedeniyle değişmişse makine zorlanmaz. Yeni bölüm sahibi alanı teslim etmeden hareket başlatılmaz. Bu kapı, karma imalatta farklı risklerin birbirine karışmasını önler." },
            { baslik: "Teknik kabul ile üretime iade etmek", metin: "İş bitiminde aletler, bağlantı elemanları ve sökülen parçalar sayılır. Tesisin teknik yetkilisi yapılan işlemi, üstte gevşek unsur kalmadığını ve ilgili sistemin güvenli durumunu kontrol eder. Platform tamamen aşağı alınır, çalışma yüzeyi temizlenir ve açık kalemler konumuyla kaydedilir. Enerji veya prosesin yeniden açılmasına yalnız tesis yetkilisi karar verir. Bariyer teknik kontrol, temizlik ve platform çıkışı birlikte tamamlanınca kaldırılır. Sonraki vardiyaya bırakılan iş bitmiş gösterilmez. Alan iade kaydı, hangi sorumlunun hangi koşulla üretimi yeniden başlattığını görünür tutar." },
        ],
        ekBolumler: [
            { baslik: "Muğla OSB prosedür kapıları", paragraflar: ["Tablo belirli bir tesisin kuralı değildir; karma imalat görevinde yetkili ekipçe doldurulacak genel eşikleri gösterir."], tablo: { basliklar: ["Kapı", "Doğrulama", "Sorumlu", "Geçiş ölçütü"], satirlar: [["Kapsam", "Hedef ve iş", "İşveren temsilcisi", "Kart hazır"], ["Bölüm", "Hareket ve enerji", "Tesis yetkilisi", "Alan ayrılmış"], ["Ortam", "Özel kısıt", "İş güvenliği", "Uygunluk teyidi"], ["Ekipman", "Geometri ve yük", "Operatör", "Sınıf onayı"], ["İade", "Teknik sonuç-temizlik", "Kabul sahibi", "Üretim açılışı"]] } },
            { baslik: "Yetki matrisi ve değişiklik yönetimi", paragraflar: ["Yetki matrisi hedefi kimin tarif edeceğini, enerjiyi kimin kontrol edeceğini, platformu kimin kullanacağını, bariyeri kimin koruyacağını ve sonucu kimin kabul edeceğini gösterir. Vardiya değişiminde isimler güncellenir. Telefonla verilen genel onay bölüm tesliminin yerine geçmez.", "Hedef, yöntem, malzeme, ortam veya bölüm sınırı değişirse çalışma durdurulur. Değişikliğin platform zarfına ve izolasyona etkisi incelenir. Uygunsa kart revize edilir; uygun değilse farklı ekipman veya zaman planlanır. Küçük görünen ek iş kayıt dışında yapılmaz." ] },
            { baslik: "Acil iletişim ve günlük makine kontrolü", paragraflar: ["Operatör vardiya başında korkuluk, lastik, kumanda, acil indirme ve görünür sızıntıyı inceler. Yerdeki yetkin kişi acil indirme düzenine erişebilir. Gürültü veya görüş engeli varsa iletişim yöntemi işe başlamadan sınanır. Gözcü başka görevle meşgul edilmez.", "İletişim kesilir, izolasyon bozulur veya ortam değişirse hareket güvenli biçimde durur. Olağan dışı kullanım sonrasında tesis ve teknik sorumluların istediği inceleme tamamlanmadan makine yeniden açılmaz. Günlük kontrol, önceki vardiyanın sözlü teslimine bırakılmaz." ] },
        ],
        sss: [
            { soru: "Muğla OSB'de tek bir genel iş izni yeterli mi?", cevap: "Genel saha kabulü, belirli bölümde yüksek erişim yetkisi değildir. Hedef ve yöntem iş kartında tanımlanır; bölüm sahibi üretim hareketini ayırır, enerji yetkilisi gerekli güvenli durumu kurar, iş güvenliği ortam kısıtını açıklar ve operatör platformun göreve uygunluğunu teyit eder. Her kapı kendi sorumlusuyla kapanır. Hedef, bölüm veya vardiya değişirse eski izin otomatik sürmez. Sepet ancak görev sınırı, ekip rolleri ve acil iletişim birlikte doğrulandığında yükselir." },
            { soru: "Karma imalatta hangi platform sınıfı kullanılır?", cevap: "Sektör adı değil gerçek geometri belirleyicidir. Dikey mesafe, yatay engel, park yüzeyi, kapı, dönüş, üst tesisat, ortam ve sepet yükü birlikte ölçülür. Hedef altında güvenli park mümkünse uygun makaslı, sabit engel varsa erişim zarfı yeterli eklemli seçenek düşünülebilir. Dış alanda zemin ve hava kullanımı ayrıca incelenir. Akülü olması özel ortam onayı sağlamaz. Aynı tesiste farklı görevler için farklı sınıflar gerekebilir; tek kiralama uğruna üretici sınırı aşılmaz." },
            { soru: "Üretim sürerken bölümde çalışma yapılabilir mi?", cevap: "Yalnız çalışma hücresi araç, ürün, yaya, enerji ve komşu proses etkisinden gerçek biçimde ayrılabiliyorsa çevredeki faaliyet sürebilir. Sepet zarfına giren forklift, vinç veya askılı yük hareketi durur. Toz, buhar, sıcaklık ya da titreşim komşu bölümden taşıyorsa ayrım yeterli değildir. Tesis alanı kendi prosedürüyle güvenli duruma getirip teslim eder. Platform aşağı inmeden, teknik kabul yapılmadan ve bariyer sorumlusu onay vermeden bölüm üretime açılmaz." },
            { soru: "Makine başka imalat bölümüne doğrudan geçebilir mi?", cevap: "Hayır; bölüm değişimi yeni kabul kapısıdır. Önceki iş kapatılır, sepet aşağı alınır ve makine tesisin belirlediği yöntemle temizlenir. Yeni rotanın kapısı, dönüşü, yüzeyi, üst engeli ve ortam koşulu görülür. Bölüm sahibinin izni ve enerji güvenliği yeniden doğrulanır. İlk hacimde uygun olan platformun diğerinde de uygun olduğu varsayılmaz. Toz veya kalıntının taşınma riski varsa temizlik tamamlanmadan geçiş yapılmaz; uyumsuzlukta farklı ekipman planlanır." },
            { soru: "Sahada yeni bir hedef mevcut karta eklenebilir mi?", cevap: "Yeni hedefin görev sahibi, enerji ilişkisi, bölüm etkisi, geometri, ortam ve küçük malzeme ihtiyacı incelenir. Mevcut platform üretici sınırları içinde kalıyor ve izolasyon güvenle genişletilebiliyorsa yetkili kişiler kartı güncelleyebilir. Hedefin yakın olması ya da kısa görünmesi otomatik kapsam oluşturmaz. Farklı sınıf, uzmanlık veya duruş gerekiyorsa ayrı iş açılır. Eski bölüm güvenli biçimde kapatılmadan yeni hedefe yönelinmez." },
            { soru: "Teklif için hangi bilgiler paylaşılmalı?", cevap: "Hedefin yakın ve çevresel görüntülerini, dikey-yatay ölçüleri, park yüzeyini, kapı-dönüşü, üst tesisatı ve ortam bilgisini iletin. Etkilenecek bölüm, üretim ile araç hareketi, enerji kontrolü, uygun duruş, görevli teknik kişi ve kabul sorumlusu eklenmelidir. Sepette bulunacak kişiler, aletler ve küçük parçalar da yazılır. Belirli sektör varsayılmaz. Bilgi sınırdaysa saha incelemesi yapılarak izin kapıları, platform sınıfı ve bölüm teslim planı kesinleştirilir." },
        ],
        kaynak: "Metin 13 Ağustos 2026 tarihinde Muğla OSB karma imalat prosedürü için özgün yazıldı. Belirli işletme, üretim kolu, kapasite, bina ölçüsü, ekipman markası veya sayısal saha verisi kullanılmamıştır. Görev kartı ve alan teslimi genel operasyon standardıdır.",
    },
    "bolge:milas-osb": {
        h1: "Milas OSB Depo Üst Kotu ve Çatı Altı Platform Planı",
        giris: "Milas OSB için bu sayfa, ilçe genelindeki havalimanı çevresi ve zeytin işleme anlatısından; mevcut kısa alt sayfanın ağır sanayi, belirli erişim sınıfı ve ölçü aralığı dilinden ayrılır. Odak, depo içindeki üst kot teknik donanımı ile çatının iç yüzünde yürütülen bakımın stok hareketine karışmadan programlanmasıdır. Belirli işletme, ürün, raf yüksekliği, bina açıklığı, çatı tipi veya kapasite ileri sürülmez. Gerçek talepte aydınlatma, kablo hattı, algılama elemanı, kamera, havalandırma bileşeni, kapı üstü mekanizma ve çatı altı bağlantılar fotoğraf ve ölçüyle listelenir. Depo sorumlusu palet, araç ve personel akışını tanımlar; teknik ekip enerji kontrolünü ve gerekli küçük parçaları hazırlar. Boş ve düz koridorda uygun akülü makaslı düşünülebilir. Raf başı, kolon ya da sabit stok düzeni hedefin altını kapatıyorsa üretici erişim zarfı yeterli kompakt eklemli seçenek incelenir. Platform palet istiflemez, yük kaldırmaz ve rafa dayanmaz. Çatı üzerine makine çıkarılması bu kaydın yöntemi değildir; çalışma doğrulanmış depo zemini üzerinden yapılır. Koridor dilimler hâlinde kapanır, her dilim teknik ve temiz kabulden sonra depo kullanımına geri verilir.",
        maddeler: [
            { baslik: "Depo hedeflerini koridor dilimlerine ayırmak", metin: "İş listesi raf sırası, kapı çevresi veya boş aks gibi gerçek konumlarla gruplanır. Her hedefin dikey mesafesi, yatay engeli, altındaki stok, araç dönüşü ve üst tesisat kaydedilir. Depo bütünüyle kapatılmak zorunda olmayabilir; fiziksel olarak ayrılabilen dilimler sırayla bakım alanına dönüşür. Bariyer yalnız platform tabanını değil sepet hareketini ve küçük parça düşme alanını kapsar. Forklift ve transpalet iki uçtan durdurulur. Komşu koridor ancak araç dönüşü ve yük hareketi çalışma zarfına ulaşmıyorsa açık kalır. Hazır olmayan dilim için stok akışı gereksiz yere kesilmez." },
            { baslik: "Üst kot erişimini raf hareketinden ayırmak", metin: "Rafa palet yerleştirme, ürün sayımı ve yüksek erişim bakımı aynı koridorda eş zamanlı yapılmaz. Taşınabilir stok tesisin uygun depo ekipmanıyla güvenli yere alınır. Yerinden çıkarılmayan yük çevresinde yeterli düşen cisim ayrımı kurulamıyorsa hedef ertelenir. Platform sepeti ürün veya raf parçası taşımaz. Ağır teknik eleman farklı kaldırma yöntemiyle konumlandırılır; yük ekipmanı koridordan çıktıktan sonra personel bağlantı noktasına erişir. Raf, korkuluk veya makine için dayanak sayılmaz. Sepette yalnız üreticinin izin verdiği kişi, bağlı alet ve yönetilebilir küçük bakım malzemesi bulunur." },
            { baslik: "Çatı altını zeminden çalışma olarak planlamak", metin: "Çatı altı bakımında makine depo döşemesinde kalır; taşıması bilinmeyen çatı yüzeyine çıkarılmaz ve sepetten çatıya personel aktarılmaz. Kiriş, aşık, kanal, kablo ve benzeri üst engeller üç boyutlu yaklaşım için ölçülür. Hedefin hemen altı boşsa uygun makaslı, sabit düzen yatay yaklaşımı gerektiriyorsa yeterli zarfı olan eklemli seçenek değerlendirilir. Görsel yakınlık güvenli erişim kanıtı değildir. Çatı sızıntısı veya nem zemini etkilediyse yüzey yeniden kabul edilir. Üstteki teknik sistem yalnız tesis yetkilisinin kontrolüyle güvenli duruma getirilir." },
            { baslik: "Kapı ve sevk saatini bakım penceresine bağlamak", metin: "Depo kapısı, yükleme alanı veya ana koridor etkileniyorsa sevk sorumlusu sakin bir zaman aralığı belirler. Teknik personel, küçük parça ve aletler pencere başlamadan hedef dilimde hazır edilir. Beklenen araç geldiğinde sepet yukarıda tutularak geçiş açılmaz; iş güvenli biçimde durdurulur. Kapı mekanizması üzerinde çalışma varsa tesis hareketi ve enerji kaynağını kendi prosedürüyle kontrol eder. Pencerenin süresi plansız yeni işlerle doldurulmaz. Bir kalem beklenenden farklı çıkarsa güvenli durumuyla kayda alınır ve hazır sıradaki dilime geçilir." },
            { baslik: "Dilimi teknik ve stok güvenliğiyle teslim etmek", metin: "Hedef tamamlandığında aletler ile sökülen parçalar sayılır, bağlantı ve işlev tesisin teknik yetkilisince kontrol edilir. Üstte gevşek unsur kalmadığı gözlenir. Platform aşağı alınır; döşeme, raf çevresi ve yakın stokta çalışma artığı bırakılmaz. Açık iş konumu ve güvenli durumuyla takip kartına yazılır. Bariyer ancak platform dilim dışına çıktıktan ve depo sorumlusu alanı kabul ettikten sonra kaldırılır. Forklift veya ürün hareketini yeniden başlatma yetkisi depoya aittir. Sonraki koridor öncekinin iznini devralmaz; kendi stok, yüzey ve araç ayrımıyla açılır." },
        ],
        ekBolumler: [
            { baslik: "Milas OSB depo dilimi tablosu", paragraflar: ["Tablo bir işletme envanteri değildir; üst kot bakımını stok ve araç hareketine göre dilimlemek için genel karar aracıdır."], tablo: { basliklar: ["Hedef grubu", "Alt alan", "Erişim yaklaşımı", "Teslim ölçütü"], satirlar: [["Boş aks donanımı", "Düz koridor", "Uygun makaslı", "Teknik kabul"], ["Raf başı hedef", "Sabit engel", "Kompakt eklemli", "Zarf doğrulandı"], ["Çatı altı bağlantı", "Üst engeller", "Zeminden erişim", "Gevşek parça yok"], ["Kapı üstü mekanizma", "Sevk geçişi", "Kapalı pencere", "Hareket açıldı"], ["Stok üstü hedef", "Ürün koruması", "Koşullu çalışma", "Temiz teslim"]] } },
            { baslik: "Depo bakım dosyasının veri alanları", paragraflar: ["Dosyada hedef görüntüsü, dikey-yatay ölçü, koridor ve dönüş, park yüzeyi, üst engel, stok durumu, forklift zamanı ve teknik kabul sahibi bulunur. Sepetteki personel, alet ve küçük parça toplamı kapasiteye dâhildir. Yalnız OSB veya depo adı model seçmez.", "Yerleşim bakım gününde değişmişse eski fotoğrafla ilerlenmez. Koridor yeniden yürünür. Makine hareketinde sepet aşağıdadır ve gözcü kör noktayı izler. Stokun yerini platform ekibi kendi kararıyla değiştirmez; depo sorumlusu uygun ekipman ve kayıt yöntemiyle hazırlık yapar." ] },
            { baslik: "Vardiya parkı ve yeni dilim kabulü", paragraflar: ["İş birden fazla pencereye yayılıyorsa platform düz, korunaklı ve yetkisiz kullanımdan güvenli noktada bırakılır. Şarj alanı makineye uygun, kuru ve depo trafiğinden ayrılmış olmalıdır. Kablo koridora serilmez. Anahtar ve kullanım kaydı sorumlu kişide tutulur.", "Yeni vardiya lastik, korkuluk, kumanda, acil indirme ve görünür sızıntı kontrolünü tekrarlar. Önceki dilimin izni yeni koridora taşınmaz. Stok, araç düzeni ve hedef altı yeniden görülür. Olağan dışı durumda kullanım durdurulur ve yetkili teknik süreç izlenir." ] },
        ],
        sss: [
            { soru: "Bu Milas OSB kaydı mevcut Milas sayfasından nasıl ayrılıyor?", cevap: "İlçe kaydı havalimanı çevresi ile zeytin işleme tesislerini birlikte ele alır. Bu sayfa ise yalnız OSB içindeki depo üst kotu ve çatının iç yüzünde yapılan teknik bakımı, stok-forklift akışından ayrılmış koridor dilimleriyle planlar. İlçe sayfasının sektör ve geniş saha anlatısı burada tekrarlanmaz. Talebin konumu teklif başında doğrulanır. Böylece depo sorumluluğu, raf engeli, üst tesisat ve temiz dilim teslimi kendi iş kartında değerlendirilir." },
            { soru: "Mevcut kısa Milas OSB alt sayfasıyla farkı nedir?", cevap: "Kısa alt sayfa belirli platform türleri ve genel çatı-depo talebi için özet bilgi verir. Bu bespoke kayıt ölçü veya makine bandı vaat etmez; depo içindeki gerçek hedefi, koridor kapanışını, stok korumasını, forklift ayrımını, çatı altına zeminden yaklaşımı ve dilim iadesini ayrıntılı biçimde ele alır. Ekipman sınıfı ancak güncel geometri ve üretici verisi karşılaştırılınca seçilir. Ağır sanayi ya da belirli üretici varsayımı kurulmaz." },
            { soru: "Raf koridorunda makaslı platform kullanılabilir mi?", cevap: "Hedefin altında güvenli park kurulabiliyor, koridor ve dönüş ölçüleri, döşeme, üst açıklık ve sepet yükü uygunsa makaslı sınıf düşünülebilir. Raf veya kolon hedefin altını kapatıyorsa kompakt eklemli seçeneğin erişim zarfı incelenir. Yalnız koridor genişliği yeterli değildir. Forklift ve ürün hareketi durur, iki uçtan ayrım kurulur. Korkuluk üzerinden uzanılmaz, raf dayanak yapılmaz ve makine sepet açıkken koridorda taşınmaz." },
            { soru: "Platform çatı üzerine çıkarılır mı?", cevap: "Bu planın yöntemi platformu doğrulanmış depo döşemesinde tutup çatı altındaki hedefe erişmektir. Taşıması bilinmeyen çatı yüzeyi makine park alanı sayılmaz. Sepetten çatıya personel aktarımı da normal kullanım değildir. Kiriş ve diğer üst engeller ölçülür; uygun çalışma zarfı yoksa farklı ekipman veya yöntem değerlendirilir. Sızıntı nedeniyle depo zemini ıslaksa yüzey yeniden incelenir. Kısa süre veya yakın hedef, bilinmeyen yüzeye yük uygulama gerekçesi olmaz." },
            { soru: "Depo faaliyeti tamamen durmalı mı?", cevap: "Bütün depo yerine güvenle ayrılabilen koridor dilimleri sırayla kapatılabilir. Çalışılan dilimde forklift, transpalet, ürün ve yaya hareketi olmaz. Komşu aksın araç dönüşü veya yükü platform zarfına girmiyorsa orada faaliyet sürebilir. Ayrım kurulamazsa bakım daha sakin vardiyaya alınır. Her dilim teknik kontrol, temizlik ve platform çıkışıyla kapandıktan sonra depo sorumlusu tarafından yeniden açılır. Sepet yukarıdayken araç geçirmek için bariyer geçici olarak kaldırılmaz." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Hedef görüntüleri, dikey-yatay ölçüler, koridor ve dönüş, park döşemesi, üst engeller, raf ve stok düzeni gerekir. Forklift saatini, kapatılabilecek dilimi, teknik enerji kontrolünü, küçük parça hazırlığını ve kabul sahibini belirtin. Çatı üstüne çıkma varsayımı kurmadan hedefin iç yüz konumunu gösterin. Mevcut kısa alt sayfadaki model veya ölçü ifadeleri gerçek saha seçiminin yerine geçmez. Bilgi sınırdaysa yerinde incelemeyle ekipman zarfı ve depo dilimleri kesinleştirilir." },
        ],
        kaynak: "Metin 13 Ağustos 2026 tarihinde Milas OSB depo üst kotu ve çatı altı bakım planı için özgün yazıldı. İlçe kaydı ile kısa alt sayfadan ayrıştırılmış; belirli işletme, ürün, raf yüksekliği, bina açıklığı, çatı tipi, kapasite, tesis veya sayısal saha verisi kullanılmamıştır.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI — Milas-Yatağan sanayi/maden/enerji hattı ve zeytin-
    // tekstil işleme ekseni. Kardeş dosya muglaplatform-com-tr.ts aynı 11
    // slug'ı kıyı OTEL/MARİNA sezon-öncesi bakım açısıyla işliyor; bu dosya
    // o anlatımı hiç kullanmaz — burada müşteri profili linyit havzası,
    // termik tesis çevresi, zeytin değirmeni/silo/tank çiftliği ve OSB
    // imalat hattıdır. Yazım: 2026-08-14. Yalnızca genel/doğrulanabilir bilgi.
    // ═══════════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Milas-Yatağan Hattında Baca ve Soğutma Kulesi Cephesinde Sepetli Örümcek Platform",
        giris:
            "Havza tesislerinde bazı cephe noktalarına ne teleskopik bir platform ne de sabit iskele ile ulaşmak mümkündür: baca gövdesinin üst kesimi, soğutma kulesi kabuğunun eğimli yüzeyi veya transfer kulesinin dış cephesindeki dar bir şerit, zeminden bom uzatarak erişilemeyecek kadar yüksek ve zeminden bağımsız bir geometri taşır. Bu noktalarda sepetli örümcek platform — kendi ağırlığını çelik yapının üzerine sabitlenmiş bir ankraj noktasından asan, paletli veya tekerlekli taşıyıcı üzerinde taşınan kompakt sistem — devreye girer. Sistem zeminden değil yapının kendisinden çalışır; bu yüzden zemin taşıma kapasitesi veya erişim mesafesi gibi kısıtlardan bağımsızdır, ama ankraj noktasının statik uygunluğu ayrı bir mühendislik konusudur ve tesisin kendi yapı projesinden teyit edilmeden kurulum yapılmaz. Bu sayfa, havza tesislerinde bu tip özel erişimin ne zaman gerektiğini, ankraj hazırlığının nasıl yürüdüğünü ve zeytin işleme ile OSB imalat hatlarındaki benzer dar-erişim noktalarını anlatıyor.",
        maddeler: [
            {
                baslik: "Sepetli örümcek platform ne zaman tercih edilir",
                metin:
                    "Standart teleskopik veya eklemli platformun bom uzunluğu ve zemin erişim mesafesi yetersiz kaldığında, ya da hedef nokta zeminden hiç görülemeyen bir kör bölgede (örneğin bir kule gövdesinin arka yüzü) bulunduğunda bu sistem değerlendirilir. Karar, önce standart sınıfların erişim zarfı hedefle karşılaştırılarak verilir; sepetli örümcek platform daha pahalı ve kurulum süresi daha uzun bir çözüm olduğundan, standart makinenin yetip yetmediği her zaman önce kontrol edilir.",
            },
            {
                baslik: "Ankraj noktasının statik teyidi",
                metin:
                    "Sistem, yapının kendi çelik veya betonarme elemanına asılı çalıştığı için ankraj noktasının taşıma kapasitesi belirleyicidir. Bu bilgi tesisin yapı projesinden veya montaj firmasından teyit edilir; belgesi olmayan bir noktaya kurulum yapılmaz. Teyit sürecinde ankraj tipi (kaynaklı mapa, cıvatalı braket, mevcut çelik profil), yönü ve varsa yorulma geçmişi birlikte değerlendirilir.",
            },
            {
                baslik: "Baca ve kule cephesinde konumlama",
                metin:
                    "Baca veya soğutma kulesi gibi eğimli-silindirik yüzeylerde sepet, yapının dış hattını takip edecek şekilde programlanır; düz bir cephede kullanılan doğrusal hareket burada geçerli değildir. Operatör, yüzeyin eğimine göre sürekli mesafe ayarı yapar. Rüzgâr, özellikle yüksek kotlarda sepetin salınımını etkileyebileceğinden çalışma öncesi hava durumu ayrıca kontrol edilir.",
            },
            {
                baslik: "Zeytin değirmeni ve silo çatısında dar erişim",
                metin:
                    "Sanayi tesisleri dışında, zeytin işleme tesislerinin yüksek silo çatıları veya dar aralıklı tank çiftliği üstleri de benzer erişim sorunu taşır: zemin araç girişine kapalı veya döşeme taşıma sınırı belirsizdir. Bu noktalarda da sepetli sistem, yapının kendi taşıyıcı elemanına asılarak zemin yükünden bağımsız çözüm sunar; ancak burada ankraj genellikle daha hafif çelik konstrüksiyon olduğundan kapasite teyidi daha da kritikleşir.",
            },
            {
                baslik: "Kurulum ve söküm süresinin plana etkisi",
                metin:
                    "Sepetli örümcek platform kurulumu, standart bir platformun sahaya girip çalışmaya başlamasından daha uzun sürer — ankraj teyidi, taşıyıcının konumlandırılması ve sistem testi ayrı adımlardır. Bu süre, havza tesislerinin planlı duruş penceresine baştan dahil edilmelidir; son dakika eklenen bir sepetli örümcek talebi, dar bir duruş takviminde zaman kaybına yol açabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Standart platform ile sepetli örümcek arasındaki seçim",
                paragraflar: [
                    "Aşağıdaki tablo, hangi erişim sorununda hangi çözümün öne çıktığını özetler.",
                ],
                tablo: {
                    basliklar: ["Erişim durumu", "Standart platform", "Sepetli örümcek", "Belirleyici"],
                    satirlar: [
                        ["Bom erişim mesafesi yeterli", "Uygun", "Gereksiz", "Zemin-hedef mesafesi"],
                        ["Hedef zeminden görülemiyor", "Yetersiz", "Uygun", "Yapı geometrisi"],
                        ["Zemin taşıma kapasitesi belirsiz", "Riskli", "Uygun (ankraj teyitli)", "Döşeme/silo çatısı"],
                        ["Eğimli-silindirik cephe (baca/kule)", "Kısmen", "Uygun", "Yüzey eğimi"],
                        ["Kısa süreli tek nokta işi", "Uygun", "Gereksiz maliyet", "İş süresi"],
                    ],
                },
            },
            {
                baslik: "Ankraj teyidi olmadan kurulum yapılmaz",
                paragraflar: [
                    "Sepetli örümcek platformun güvenliği tamamen ankraj noktasının doğruluğuna dayanır; bu yüzden teyit sürecini atlamıyoruz. Tesisten yapı projesi veya montaj belgesi istenir, yoksa bağımsız statik değerlendirme önerilir. Bu adım bazen sahaya varmadan haftalar önce başlatılmalıdır çünkü belge arşivden çıkarılması zaman alabilir.",
                    "Ankraj belgesi netleşmeden verilen bir tarih taahhüdü gerçekçi değildir; bu yüzden bu tip işlerde önce belge süreci, sonra tarih planlanır.",
                ],
            },
            {
                baslik: "Havza dışı taleplerde aynı yöntem",
                paragraflar: [
                    "Zeytin işleme tesislerindeki silo/tank çatıları ve OSB imalat hatlarındaki yüksek çelik konstrüksiyon noktaları da aynı değerlendirme sürecinden geçer: önce standart platformun erişip erişemeyeceği kontrol edilir, yetersizse ankraj teyidiyle sepetli örümcek planlanır. Bu tesislerde ankraj genellikle daha yeni ve belgeli olduğundan süreç havza tesislerine göre kısalabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Baca dış yüzeyinde bir onarım noktası var, hangi ölçüleri vermeliyiz?",
                cevap:
                    "Bacanın dış çapını, onarım noktasının yerden yüksekliğini ve varsa üst kesimdeki platform veya merdiven boşluğunun konumunu isteriz. Bu üç bilgiyle önce standart bir eklemli platformun bom uzunluğuyla erişip erişemeyeceğini değerlendiririz; erişemiyorsa sepetli örümcek seçeneğine geçilir ve bu durumda bacanın üst kesiminde ankraj olarak kullanılabilecek bir yapı elemanı olup olmadığı sorulur. Fotoğraf paylaşırsanız değerlendirme hızlanır.",
            },
            {
                soru: "Ankraj noktasının taşıma kapasitesini tesis bilmiyor, ne yaparız?",
                cevap:
                    "Bilinmeyen kapasiteyle kurulum yapmayız. Öncelikle tesisin arşivinde yapı veya montaj projesi olup olmadığı araştırılır; varsa ilgili bölüm incelenir. Belge yoksa bağımsız bir statik değerlendirme önerilir — bu, ek süre ve maliyet gerektirir ama güvenlik açısından atlanamaz. Bu süreç genellikle günler sürebileceğinden, planlı duruş tarihinden önce başlatılmasını öneririz; son haftaya bırakılan bir ankraj teyidi, tarihin kaymasına yol açabilir.",
            },
            {
                soru: "Soğutma kulesi çevresinde nem var, sepetli sistem bundan etkilenir mi?",
                cevap:
                    "Nem doğrudan sistemin çalışmasını değil, taşıyıcının konumlandığı zemin ile ankraj noktasına erişimi (örneğin bir merdiven veya platform) etkileyebilir. Zeminin kaygan olması taşıyıcının ilk konumlanma aşamasında dikkat gerektirir; ankraj noktasına erişim için kullanılan sabit yapılar da nem nedeniyle kaygan olabileceğinden bu güzergâh önceden kontrol edilir. Sistemin kendisi dış ortam koşullarına göre tasarlanmıştır ama rüzgâr gibi diğer hava faktörleri ayrıca değerlendirilir.",
            },
            {
                soru: "Zeytin silosu çatısında sepetli örümcek gerekir mi, yoksa standart platform yeter mi?",
                cevap:
                    "Silo çevresindeki zeminin araç erişimine uygun ve döşeme taşıma kapasitesinin bilindiği durumlarda, bom uzunluğu yeterliyse standart bir teleskopik platform çoğunlukla yeterlidir. Zemin araç girişine kapalıysa veya silo çatısının kendi taşıma sınırı belirsizse, çatının çelik konstrüksiyonuna ankrajlı sepetli sistem değerlendirilir. Silo çapı, yüksekliği ve çevre zemin durumunu paylaşırsanız hangi çözümün gerekli olduğunu net söyleyebiliriz.",
            },
            {
                soru: "Kurulum ve söküm ne kadar sürer, duruş penceremize sığar mı?",
                cevap:
                    "Süre ankraj teyidinin ne kadar önceden tamamlandığına bağlıdır; belge hazırsa kurulum bir vardiya içinde tamamlanabilir, belge süreci sahada başlatılırsa bu süre günlere uzayabilir. Duruş penceresi kısa ve sabit tarihliyse, ankraj teyidini pencere başlamadan tamamlamanızı öneririz — bu, sahadaki fiili çalışma süresini kısaltır ve pencerenin geri kalanını başka kalemlere ayırmanızı sağlar.",
            },
            {
                soru: "OSB'deki çelik konstrüksiyon holünde de bu sistemi kullanabilir miyiz?",
                cevap:
                    "Evet, prensip aynıdır: standart platformun erişemediği bir çatı kirişi veya cephe noktası varsa, kirişin kendisi ankraj olarak değerlendirilir. OSB yapılarında çelik konstrüksiyon genellikle daha yeni ve statik belgesi daha erişilebilir olduğundan, teyit süreci havza tesislerine göre kısalabilir. Kirişin taşıma kapasitesini ve montaj yılını bildirirseniz değerlendirmeye başlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli örümcek platformun çalışma prensibi (yapıya ankrajlı, zeminden bağımsız erişim) genel teknik bilgidir; havza-OSB-zeytin tesisi ayrımı ve ankraj teyit süreci firma pratiğidir. Kesin tesis adı, ankraj kapasitesi veya kule/baca ölçüsü belirtilmemiştir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Milas-Yatağan Havzasından Sanayi Tesislerine Platform Nakliyesi",
        giris:
            "Havza tesislerine makine sevkiyatı, kıyı otellerine yapılan teslimattan farklı bir lojistik problemdir: hedef genellikle bir sanayi bölgesi içinde, ağır araç trafiğine açık ama saha içi giriş prosedürüne tabi bir noktadır. Linyit havzasındaki tesisler birbirine nispeten yakın olduğundan, aynı hafta içinde birden fazla teslimatı tek güzergâha toplamak mümkündür; bu, hem nakliye maliyetini düşürür hem filoyu daha verimli kullanır. Zeytin işleme tesisleri ve OSB'lerdeki teslimatlar ise kendi giriş kurallarını (araç kaydı, iş izni, kampanya dönemi trafiği) taşır ve bu kurallar sevkiyat planına baştan dahil edilir. Bu sayfa, havza içi ve havza dışı teslimatların nasıl planlandığını, saha giriş prosedürünün sevkiyat süresine etkisini ve komşu il OSB'lerine yönlendirmenin nasıl işlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Havza içi ortak güzergâh planlaması",
                metin:
                    "Yatağan ve Milas çevresindeki tesisler coğrafi olarak kümelenmiş durumdadır; bu yüzden aynı haftaya denk gelen birden fazla teslimat, tek bir sevkiyat turuna yerleştirilebilir. Bir tesise makine bırakılırken aynı güzergâh üzerindeki bir diğerinden söküm alınabilir. Bu planlama, tarihinde esneklik olan taleplerde en ekonomik sonucu verir; sabit tarihli acil talepler ayrı sevkiyatla karşılanır ancak bu durumda maliyet ayrı kalem olarak görünür.",
            },
            {
                baslik: "Saha giriş prosedürünün sevkiyat süresine etkisi",
                metin:
                    "Büyük sanayi tesislerinde araç girişi, kapıda plaka kontrolü ve bazen yazılı iş izniyle başlar. Bu adımlar teklif aşamasında tamamlanmazsa, makine kapıda beklerken sevkiyat süresi saatlerce uzayabilir. Bu yüzden sevkiyat öncesi tesisten istenen bilgileri (araç plakası, şoför kimliği, makine seri no) önceden topluyor ve saha güvenlik birimine iletiyoruz.",
            },
            {
                baslik: "Ağır makine sevkiyatında yol ve zaman kısıtı",
                metin:
                    "Büyük sınıf teleskopik veya eklemli platformlar, standart bir kamyonla değil lowbed veya özel römork ile taşınır; bu araçların bazı yollarda ağırlık ve genişlik kısıtına tabi olabileceği unutulmamalıdır. Havza içi sanayi yollarının çoğu ağır araç trafiğine alışkın ve uygun olsa da, dar köy içi güzergâhlarda ek süre payı bırakılır.",
            },
            {
                baslik: "Zeytin kampanya döneminde sevkiyat trafiği",
                metin:
                    "Zeytin işleme tesislerinde kampanya döneminde tesis içi araç trafiği (ürün girişi, sevkiyat kamyonları) yoğunlaşır; bu dönemde platform teslimatı, tesisin kendi trafiğiyle çakışmayacak bir saat aralığına planlanır. Kampanya dışı dönemde bu kısıt ortadan kalkar ve teslimat saati daha esnek belirlenebilir.",
            },
            {
                baslik: "Komşu il OSB'lerine yönlendirme mantığı",
                metin:
                    "Havza filosunun iş yoğunluğu düştüğü haftalarda, aynı makineler coğrafi olarak yakın olan Aydın ve Denizli OSB'lerine yönlendirilir. Bu yönlendirme sevkiyat planlamasını doğrudan etkiler: havza dışı bir teslimat, havza içindeki mevcut bir sevkiyat turuna eklenerek daha ekonomik hâle getirilebilir. Tarih esnekliği olan komşu il talepleri bu şekilde en uygun fiyata ulaşır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Havza içi ve havza dışı teslimat karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, teslimat türüne göre tipik süre ve maliyet etkisini özetler.",
                ],
                tablo: {
                    basliklar: ["Teslimat türü", "Süre etkisi", "Maliyet etkisi", "Planlama notu"],
                    satirlar: [
                        ["Havza içi, tarihi esnek", "En kısa", "En düşük", "Ortak güzergâha eklenir"],
                        ["Havza içi, sabit tarih", "Orta", "Standart", "Ayrı sevkiyat"],
                        ["Komşu il OSB, esnek", "Orta-uzun", "Havza turuna bağlı düşük", "Boşluk beklenir"],
                        ["Komşu il OSB, acil", "Kısa ama özel", "Yüksek", "Özel sevkiyat bedeli"],
                        ["Güvenlik kuşağı yakını", "Kayıt süresi eklenir", "Standart", "Önceden kayıt şart"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat öncesi bilgi toplama",
                paragraflar: [
                    "Teklif aşamasında sahanın giriş rejimini (serbest giriş mi, kayıtlı giriş mi, iş izni mi gerekiyor) netleştiriyoruz. Bu bilgi eksik kalırsa makine kapıda beklerken sevkiyat programı aksar; bu yüzden ilk temas anında adresi ve tesis tipini sorup, gerekiyorsa saha güvenlik birimiyle önceden iletişime geçiyoruz.",
                    "Ağır makine sevkiyatlarında ayrıca güzergâh üzerindeki dar geçit veya köprü gibi kısıtları önceden değerlendiriyoruz; bu bilgi genellikle tesisin kendi lojistik ekibinden veya yerel bilgiden gelir.",
                ],
            },
            {
                baslik: "Söküm ve iade sevkiyatının planlanması",
                paragraflar: [
                    "İş bitiminde makinenin sahadan alınması da teslimat kadar planlı bir adımdır; iş bitiş tarihini önceden bildirmeniz, söküm sevkiyatını başka bir teslimatla birleştirmemizi sağlar. Son anda bildirilen bir söküm talebi, ayrı ve daha maliyetli bir sevkiyat gerektirebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yatağan'daki tesisimize ne kadar sürede makine gelir?",
                cevap:
                    "Havza filomuzda o an müsait bir makine varsa aynı gün veya ertesi gün mümkündür. Tarihinizi esnek bırakırsanız, havzadaki mevcut bir sevkiyat turuna eklenerek hem daha hızlı hem daha ekonomik teslimat sağlanır. Sabit tarihli acil bir talep de karşılanır ancak bu durumda özel sevkiyat organize edilir ve bedeli teklifte ayrı kalem olarak görünür.",
            },
            {
                soru: "Sahamızda araç girişi için önceden kayıt gerekiyor, süreç nasıl işler?",
                cevap:
                    "Teklif aşamasında sahanızın giriş rejimini sorup, gerekli bilgileri (araç plakası, şoför kimliği, makine seri no) topluyoruz ve saha güvenlik biriminize önceden iletiyoruz. Bu adım tamamlanmadan sevkiyat planlanmaz, çünkü kayıtsız bir aracın kapıda saatlerce beklemesi hem programımızı hem sizin işinizi aksatır. Sahanızın giriş prosedürünü bilmiyorsanız, adresinizi paylaşın; genel kategoriye göre yaklaşık süreyi söyleyebiliriz.",
            },
            {
                soru: "Zeytin kampanyası sırasında teslimat trafiğe denk gelir mi?",
                cevap:
                    "Denk gelmemesi için kampanya dönemindeki teslimatları tesisin kendi sevkiyat trafiğiyle çakışmayacak bir saate planlıyoruz; bu genellikle tesisin size bildirdiği sakin bir saat aralığıdır. Kampanya dışı dönemde bu kısıt olmadığından teslimat saati daha esnek belirlenebilir. Kampanya takviminizi paylaşırsanız, teslimat saatini ona göre öneririz.",
            },
            {
                soru: "Aydın OSB'sindeyiz, Muğla'dan makine gelmesi ekonomik mi?",
                cevap:
                    "Havza filomuzun iş yoğunluğunun düştüğü haftalarda evet, çünkü aynı makineler zaten komşu illere yönlendiriliyor. Tarihinizi esnek bırakırsanız havzadaki bir işin bitişine denk gelen ilk boşluğa yazılırsınız ve bu genellikle en ekonomik seçenektir. Sabit tarihli acil bir talepte de hizmet veririz, ancak havza dışı özel sevkiyat bedeli ayrı bir kalem olarak teklife yansır.",
            },
            {
                soru: "Ağır bir teleskopik platform için güzergâhta kısıt var mı?",
                cevap:
                    "Büyük sınıf makineler lowbed veya özel römorkla taşınır ve bazı dar köy içi güzergâhlarda genişlik kısıtı olabilir; havza içi ana sanayi yolları genellikle bu tip araçlara uygundur. Tesisinizin adresini ve varsa bilinen dar geçit bilgisini paylaşırsanız, güzergâhı önceden değerlendirir ve gerekiyorsa alternatif planlarız.",
            },
            {
                soru: "İş bitince makineyi ne zaman alıyorsunuz?",
                cevap:
                    "İş bitiş tarihini önceden bildirirseniz, söküm sevkiyatını aynı bölgedeki başka bir teslimatla birleştirerek daha ekonomik planlarız. Son anda bildirilen bir söküm talebi ayrı bir sevkiyat gerektirebilir ve bu, standart teslimat bedeline göre biraz daha yüksek olabilir. Planlı duruş kapsamında çalışıyorsanız, duruşun bitiş tarihini baştan paylaşmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Havza tesislerinin coğrafi kümelenmesi ve komşu il OSB'leri kamuya açık genel bilgidir; ortak güzergâh planlaması ve saha giriş prosedürü koordinasyonu firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Zeytin İşleme ve Sanayi Depolarında Forklift ile İstifleme Hizmeti",
        giris:
            "Havza ve zeytin işleme hattındaki forklift talebi, iki farklı yük profilinden gelir: bir yanda linyit havzasındaki yedek parça ve malzeme depolarının palet istifleme ihtiyacı, diğer yanda zeytin işleme tesislerinin varil, teneke ve büyük ambalaj taşıma-istifleme işleri. İkisi de standart bir lojistik deposundan farklı zemin ve komşuluk koşulları taşır: sanayi deposunda zemin çoğu zaman düzensiz kullanılmış saha betonuyken, zeytin tesisinde forklift genellikle üretim hattına yakın, hijyen kurallarının geçerli olduğu bir alanda çalışır. Bu sayfa, iki profildeki forklift kullanımını, yük tipine göre kapasite seçimini ve OSB'deki genel imalat malzemesi istiflemesini ele alıyor.",
        maddeler: [
            {
                baslik: "Sanayi deposunda düzensiz zemin ve yük tipi",
                metin:
                    "Havza tesislerinin yedek parça ve malzeme depoları genellikle saha betonuna sahiptir; bu zeminler zaman içinde ağır araç trafiğiyle çatlayabilir veya seviye farkı oluşturabilir. Forklift seçiminde bu yüzden zemin durumu önceden sorulur; düzensiz zeminde standart lastikli tekerlek yerine daha dayanıklı bir sınıf tercih edilebilir. Yük tipi genellikle standart palet ve büyük hacimli yedek parça kutularıdır.",
            },
            {
                baslik: "Zeytin tesisinde varil ve teneke istifleme",
                metin:
                    "Zeytinyağı ambalajlama tesislerinde varil, teneke ve büyük bidon istifleme, standart palet taşımadan farklı bir denge ve tutuş gerektirir; bu tip yükler için uygun ataşman (varil kıskacı, yan kaydırıcı) önceden belirlenmelidir. Üretim hattına yakın çalışmada forklift hızı düşük tutulur ve hat çevresindeki personel güzergâhı önceden netleştirilir.",
            },
            {
                baslik: "Kapalı hacimde dizel kısıtı",
                metin:
                    "Kapalı depo veya işleme hacimlerinde egzoz emisyonu nedeniyle dizel forklift kullanılamaz; bu tesislerde LPG veya akülü modeller standarttır. Açık saha depolarında (örneğin dış malzeme stok alanı) dizel de değerlendirmeye girer. Hacmin kapalı mı açık mı olduğunu ilk temas anında netleştiriyoruz.",
            },
            {
                baslik: "Yük yüksekliği ve raf sistemi uyumu",
                metin:
                    "Raf sistemli depolarda forklift, direk yüksekliği raf üst katına göre seçilir; bu ölçü bilinmeden gelen bir forklift üst katlara erişemeyebilir. Koridor genişliği de direk tipini (standart mı dar koridor mu) belirler. Sanayi deposu ve zeytin tesisinde raf yüksekliği genellikle farklıdır, bu yüzden her tesis kendi ölçüsüyle değerlendirilir.",
            },
            {
                baslik: "OSB imalat hattında malzeme taşıma",
                metin:
                    "OSB'deki genel imalat tesislerinde forklift, çelik profil, sac veya yarı mamul taşımada kullanılır; bu yükler genellikle standart paletten daha ağır ve düzensiz şekilli olduğundan kapasite hesabı yük ağırlığının yanı sıra yükün dengesizliğini de dikkate alır. Taşıma güzergâhının imalat hattı ile kesişip kesişmediği önceden belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yük tipine göre forklift ve ataşman seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, havza ve zeytin hattındaki tipik yük tiplerini özetler.",
                ],
                tablo: {
                    basliklar: ["Yük tipi", "Ortam", "Uygun ataşman", "Güç tipi"],
                    satirlar: [
                        ["Standart palet", "Sanayi deposu", "Standart çatal", "Akülü/LPG"],
                        ["Varil/teneke", "Zeytin ambalajlama", "Varil kıskacı", "Akülü"],
                        ["Çelik profil/sac", "OSB imalat", "Yan kaydırıcı", "LPG/dizel (açık)"],
                        ["Büyük hacimli parça kutusu", "Yedek parça deposu", "Geniş çatal", "Akülü/LPG"],
                        ["Dış saha malzeme", "Açık stok alanı", "Standart çatal", "Dizel"],
                    ],
                },
            },
            {
                baslik: "Zemin durumu ve önceden bilgi toplama",
                paragraflar: [
                    "Sanayi depolarında zemin zamanla bozulabildiği için, ilk temas anında zeminin son durumu (düz beton mu, çatlak mı, seviye farkı var mı) sorulur. Bu bilgi, doğru lastik tipini ve gerekiyorsa ek dikkat önlemlerini belirler. Zemin fotoğrafı paylaşılırsa değerlendirme hızlanır.",
                    "Raf sistemi olan depolarda koridor genişliği ve direk yüksekliği de aynı aşamada netleştirilir; bu iki ölçü olmadan doğru forklift sınıfı önerilmez.",
                ],
            },
            {
                baslik: "Üretim hattına yakın çalışmada hız ve güzergâh",
                paragraflar: [
                    "Zeytin tesisi ve OSB imalat hattında forklift, çoğu zaman çalışan personelin bulunduğu alana yakın hareket eder. Bu ortamlarda hız sınırı ve sabit bir taşıma güzergâhı tesisle birlikte belirlenir; güzergâh üretim hattını kesmeyecek şekilde planlanır. Operatörümüz saha kurallarına göre brifing alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yedek parça deponuzun zemini eski, hangi forklifti önerirsiniz?",
                cevap:
                    "Zeminin fotoğrafını veya durumunu (çatlak, seviye farkı, toz) bildirirseniz, o zemine uygun lastik tipini içeren bir sınıf öneririz. Düzensiz zeminlerde dolgu lastikli modeller genellikle daha dayanıklı sonuç verir. Ayrıca depo kapalıysa dizel kullanılamayacağından akülü veya LPG seçenek arasında karar veririz; hacmin havalandırma durumu bu kararı etkiler.",
            },
            {
                soru: "Varil taşıması için özel ekipman gerekir mi?",
                cevap:
                    "Evet, standart çatal varil gibi yuvarlak yükler için uygun değildir; varil kıskacı gibi özel ataşman gerekir. Varil ölçüsünü (çap, yükseklik, dolu ağırlık) ve tesisteki taşıma yüksekliğini bildirirseniz doğru ataşmanlı forklifti planlarız. Ataşmansız bir forklift talebiyle gelinen varil işlerinde sahada değişim gerekebilir, bu da zaman kaybı yaratır.",
            },
            {
                soru: "OSB'deki imalat hattımızda çelik sac taşıyacağız, kapasiteyi nasıl hesaplıyorsunuz?",
                cevap:
                    "Sacın ağırlığı kadar, yükün dengesi de kapasite hesabına girer; düzensiz şekilli veya tek noktadan tutulan yükler nominal kapasitenin altında değerlendirilir. Sac ölçüsünü, ağırlığını ve mevcut ataşmanınızı (varsa) bildirirseniz güvenli kapasiteyi netleştiririz. Taşıma güzergâhının imalat hattıyla kesişip kesişmediğini de önceden sorarız, çünkü bu hız ve güvenlik planını etkiler.",
            },
            {
                soru: "Kapalı ambalajlama alanında dizel forklift kullanabilir miyiz?",
                cevap:
                    "Kullanamazsınız; kapalı hacimlerde egzoz emisyonu nedeniyle dizel makine kabul edilmez. Akülü veya LPG modeller bu ortam için standarttır. Hacminizin açık mı kapalı mı olduğunu ilk temas anında netleştiririz; bu bilgi baştan doğru verilirse yanlış makine sahaya gönderilmez.",
            },
            {
                soru: "Raf sistemimizin koridoru dar, forklift sığar mı?",
                cevap:
                    "Koridor genişliğini ve raf yüksekliğini bildirirseniz önceden kontrol ederiz. Dar koridorlu depolarda dar koridor tipi direk kullanan kompakt modeller tercih edilir; standart genişlikte koridorlarda daha büyük kapasiteli modeller de çalışabilir. Ölçü bilinmeden gelen bir forklift koridora sığmayabilir, bu yüzden bu bilgiyi teklif aşamasında istiyoruz.",
            },
            {
                soru: "Üretim hattı çalışırken forklift aynı alanda güvenli mi?",
                cevap:
                    "Evet, ama sabit bir güzergâh ve düşük hızla. Hattın çalıştığı saatlerde forklift, personel ve ekipmana güvenli mesafede önceden belirlenmiş bir koridordan ilerler; bu güzergâh tesisle birlikte netleştirilir. Hat durduğunda daha esnek hareket mümkündür. Operatörümüz saha kurallarına göre brifing alır ve güzergâh dışına çıkmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Havza sanayi depoları ve zeytin ambalajlama tesislerinin genel yük profili kamuya açık bilgidir; ataşman seçimi ve zemin değerlendirme yöntemi firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Yatağan-Milas Hattında Eklemli Platform (Boom) ile Yatay Erişim",
        giris:
            "Havza tesislerindeki en sık karşılaşılan erişim sorunu yükseklik değil yataydır: bir baca gövdesinin dış yüzeyi, bir transfer kulesinin cephesi veya bir hangar kirişinin iç köşesi, makinenin doğrudan altına giremediği ama bir bomun yatayda uzanarak ulaşabileceği noktalardır. Eklemli platform, teleskopik platformun aksine bomu birden fazla eklemden bükebildiği için bu tip 'üzerinden aşıp arkaya erişme' gerektiren işlerde standart çözümdür. Bu sayfa, havza yapılarındaki tipik eklemli platform kullanım senaryolarını, erişim zarfının nasıl hesaplandığını ve zeytin-OSB tesislerindeki benzer yatay erişim ihtiyaçlarını anlatıyor.",
        maddeler: [
            {
                baslik: "Yatay erişim gerektiren tipik noktalar",
                metin:
                    "Baca ve soğutma kulesi gibi büyük çaplı yapıların dış yüzeyi, kule veya baca gövdesine yakın konumlanamayan bir makine için tipik yatay erişim örneğidir. Benzer şekilde, bir çelik konstrüksiyon holünün iç köşesindeki kiriş altı veya bir hangar kapı üstü mekanizması da makinenin doğrudan altına giremediği noktalardır. Bu tip işlerde bom, engelin üzerinden aşıp arkaya doğru uzanacak şekilde programlanır.",
            },
            {
                baslik: "Erişim zarfının hedefle karşılaştırılması",
                metin:
                    "Eklemli platform seçiminde üretici tarafından tanımlanan çalışma zarfı (bomun ulaşabileceği maksimum yükseklik ve yatay mesafe kombinasyonu) belirleyicidir; sadece maksimum yükseklik değeri yeterli bilgi değildir. Hedefin yerden yüksekliği ve makinenin konumlanabileceği en yakın noktadan hedefe olan yatay mesafe birlikte bilinmeden doğru sınıf seçilmez.",
            },
            {
                baslik: "Sepetten örtü veya çatıya yük aktarma yasağı",
                metin:
                    "Zeytin işleme tesislerindeki sera benzeri hafif çatı yapıları veya OSB'deki hafif çelik çatı örtüleri, kendi ağırlığını taşıyacak şekilde tasarlanmıştır; sepetten bu yapılara dayanma veya yük aktarma yasaktır. Eklemli platformun avantajı tam da burada devreye girer — makine yapıya temas etmeden, bomu uzatarak hedefe ulaşabilir.",
            },
            {
                baslik: "Dizel-akülü sınıf ayrımı",
                metin:
                    "Kapalı sanayi hacimlerinde (transfer kulesi içi, atölye, imalat holü) akülü eklemli platform zorunludur; açık sahada (baca dış cephesi, dış aydınlatma direği) dizel sınıf da değerlendirilir. Bu ayrım işin başında netleştirilmezse, kapalı bir hacme dizel makine gönderilip geri çevrilme riski oluşur.",
            },
            {
                baslik: "Zemin eğimi ve stabilite",
                metin:
                    "Eklemli platformlar bomu yatayda uzattığında ağırlık merkezi kayar; bu yüzden makinenin konumlandığı zeminin düz ve stabil olması özellikle önemlidir. Havza tesislerindeki bazı açık sahalar eğimli veya stabilize olabilir; bu durumda makine öncesi zemin kontrolü ve gerekiyorsa takoz/plaka desteği standart uygulamadır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yatay erişim senaryoları ve tipik çözüm",
                paragraflar: [
                    "Aşağıdaki tablo, havza-zeytin-OSB hattındaki tipik yatay erişim işlerini özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı/nokta", "Erişim sorunu", "Uygun sınıf", "Ek gereksinim"],
                    satirlar: [
                        ["Baca/soğutma kulesi dış yüzeyi", "Büyük çap, yatay mesafe", "Uzun erişimli eklemli", "Çap + yükseklik ölçüsü"],
                        ["Çelik konstrüksiyon iç köşesi", "Kiriş arkası erişim", "Orta-büyük eklemli", "Kiriş konumu"],
                        ["Sera/hafif çatı altı", "Yük aktarma yasağı", "Kompakt eklemli", "Temas mesafesi"],
                        ["Hangar kapı üstü", "Kapı rayı yakını", "Büyük eklemli", "Kapı hareket alanı dışı"],
                        ["Dış aydınlatma direği", "Açık saha, eğimli zemin", "Dizel eklemli", "Zemin desteği"],
                    ],
                },
            },
            {
                baslik: "Erişim zarfı bilgisi olmadan teklif verilmez",
                paragraflar: [
                    "Eklemli platformlarda 'en yükseğe çıkan makine' talebi yanıltıcı olabilir çünkü belirleyici olan maksimum yükseklik değil, hedef nokta için gereken yükseklik-yatay mesafe kombinasyonudur. Bu yüzden kesin sınıf önerisi, hedefin yerden yüksekliği ve yatay mesafesi bilinmeden verilmez; bu iki ölçü fotoğraf ve kroki ile birlikte paylaşıldığında değerlendirme hızlanır.",
                ],
            },
            {
                baslik: "Kapalı-açık hacim ayrımını baştan netleştirmek",
                paragraflar: [
                    "İlk temas anında hacmin kapalı mı açık mı olduğunu soruyoruz çünkü bu, dizel-akülü kararını doğrudan belirler. Kapalıysa akülü sınıf içinde uygun erişim zarfı aranır; açıkta dizel de değerlendirmeye girer. Bu ayrımı baştan netleştirmek, sahaya yanlış makine gönderilmesini önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Baca dış cephesinde bir nokta var, hangi ölçüleri istiyorsunuz?",
                cevap:
                    "Bacanın dış çapını, onarım noktasının yerden yüksekliğini ve makinenin konumlanabileceği en yakın nokta ile baca arasındaki mesafeyi isteriz. Bu üç ölçü, eklemli platformun erişim zarfıyla karşılaştırılarak doğru sınıf belirlenir. Sadece 'yükseklik ne kadar' bilgisi tek başına yeterli değildir, çünkü sorun genellikle yükseklikten çok yatay mesafedir.",
            },
            {
                soru: "Sera çatısı altında bir iş var, sepet çatıya değebilir mi?",
                cevap:
                    "Hayır, sepetin çatı örtüsüne veya taşıyıcı çubuklara değmesi veya dayanması yasaktır; bu yapılar ek yük taşıyacak şekilde tasarlanmamıştır. Eklemli platform, makineyi örtüden güvenli mesafede tutup bomu hedefe uzatacak şekilde konumlanır. Sera içindeki hedefin konumunu ve örtüye olan mesafesini bildirirseniz, temassız erişim planını önceden çıkarabiliriz.",
            },
            {
                soru: "Transfer kulesi içinde mi dışında mı çalışırız?",
                cevap:
                    "Kulenin iç merdiven ve platform boşlukları genellikle dar olduğundan, eklemli platform kule dış cephesindeki işler için kullanılır; iç bakımlar sabit merdivenle yürüyerek yapılır. Kule dışına değen bir nokta varsa makinemiz kuleye paralel konumlanır ve bom dış cepheyi tarayacak şekilde uzanır. Kule dış çapı ve hedefin konumu bilinmeden kesin sınıf verilmez.",
            },
            {
                soru: "Açık sahada dizel eklemli platform kullanabilir miyiz?",
                cevap:
                    "Açık sahada evet, dizel sınıf değerlendirmeye girer; dizel makineler genellikle daha büyük erişim zarfına sahiptir. Ancak sahanın zemini eğimli veya stabilize ise, makine öncesi zemin kontrolü ve gerekiyorsa destek plakası uygulanır. Hacminizin kapalı mı açık mı olduğunu ve zemin tipini bildirirseniz doğru sınıf ve hazırlığı netleştiririz.",
            },
            {
                soru: "Hangi bilgiyle en hızlı teklif alırım?",
                cevap:
                    "Hedefin yerden yüksekliği, makinenin konumlanabileceği en yakın nokta ile hedef arasındaki yatay mesafe, hacmin kapalı mı açık mı olduğu ve zemin tipi (beton, toprak, eğimli) — bu dört bilgiyle sahaya gelmeden net bir sınıf önerisi sunabiliriz. Fotoğraf veya kroki eklerseniz değerlendirme daha da hızlanır.",
            },
            {
                soru: "OSB'deki çelik konstrüksiyon holünde kiriş altı iş var, hangi sınıf gerekir?",
                cevap:
                    "Kirişin yerden yüksekliğine ve kirişin altına ne kadar yatay mesafeden erişilebileceğine bağlıdır. Hol genellikle kapalı olduğundan akülü eklemli sınıf standarttır; hol yüksekliği ve kiriş konumu bilgisiyle uygun erişim zarfına sahip modeli belirleriz. Holün tavan yüksekliğini ve kiriş aralığını bildirirseniz değerlendirmeye başlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun yatay erişim çalışma prensibi genel teknik bilgidir; havza-zeytin-OSB yapı tipi eşleşmesi ve zemin/hacim değerlendirme yöntemi firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Yedek Parça Deposu ve Transfer Kulesi İçinde Akülü Platform Kiralama",
        giris:
            "Havza hattındaki iç mekân platform talebi, kıyı otellerindeki lobi-restoran işlerinden tamamen farklı bir dünyadan gelir: yedek parça ve malzeme depolarının raf üstü aydınlatması, transfer kulelerinin iç merdiven boşluğundaki dar bakım noktaları, atölye çatı altı vinç kirişleri ve zeytin işleme tesislerinin iç hacimlerindeki tesisat hatları. Bu iç mekânların ortak özelliği kapalı hacim olmaları — dolayısıyla dizel makine kullanılamaması — ve çoğu zaman dar geçit veya koridor kısıtı taşımalarıdır. Bu sayfa, havza ve zeytin hattındaki iç mekân işlerinin hangi makineyle, hangi koridor ölçüsüyle ve hangi zemin korumasıyla yapıldığını anlatıyor.",
        maddeler: [
            {
                baslik: "Kapalı hacimde dizel yasağı ve akülü standart",
                metin:
                    "Depo, atölye, transfer kulesi içi ve imalat holü gibi kapalı hacimlerde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü makaslı veya kompakt eklemli sınıflar standarttır. Bu kural ilk kiralamalarda sıkça gözden kaçar; işletme en yüksek erişimli makineyi ister ama o sınıf dizel motorluysa kapalı hacimde çalıştırılamaz. Bu yüzden ilk temas anında hacmin kapalı mı açık mı olduğu netleştirilir.",
            },
            {
                baslik: "Raf sistemli depolarda koridor ve şase genişliği",
                metin:
                    "Yedek parça depolarının raf koridorları çoğu zaman standart bir makinenin şase genişliğiyle karşılaştırılması gereken dar aralıklardır. Koridor genişliği ve raf yüksekliği önceden bilinmeden makine seçilmez; dar koridorlu depolarda en kompakt akülü sınıf standart çözümdür, geniş koridorlarda orta sınıf da değerlendirilir.",
            },
            {
                baslik: "Transfer kulesi iç merdiven boşluğu kısıtı",
                metin:
                    "Kulelerin iç merdiven ve platform boşlukları genellikle standart bir sepetli makinenin geçemeyeceği kadar dardır; bu yüzden kule içi bakımların büyük kısmı sabit merdivenle yürünerek yapılır. İstisnai olarak çok kompakt bir sınıfın geçip geçemeyeceği, geçit genişliği ve kat yüksekliği bilgisiyle değerlendirilir.",
            },
            {
                baslik: "Zeytin tesisi iç hacminde hijyen ve ekipman komşuluğu",
                metin:
                    "Zeytin işleme tesislerinin iç hacminde dekantör, santrifüj ve boru hattı gibi ekipmanlar sık aralıklarla yerleşir; platform bu ekipmanlara temas etmeyecek bir koridordan ilerler. Üretim hattı çalışırken en kompakt sınıf ve düşük hız zorunludur; hat durduğunda daha büyük sınıf kullanılabilir. Üretim alanına giren makine ve operatör için genel hijyen kuralları da uygulanır.",
            },
            {
                baslik: "Atölye ve garaj yapılarında çatı altı işler",
                metin:
                    "Havza çevresindeki bakım atölyeleri ve nakliye garajlarında tipik iş vinç kirişi bakımı, çatı altı aydınlatma ve cephe onarımıdır; bu yapılar genellikle orta tavan yüksekliğine (6-10 metre bandı) sahiptir. Kapalı hacim olduklarından akülü sınıf standarttır; açık sahada (dış cephe, tabela) dizel de değerlendirilebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân tipine göre makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, havza ve zeytin hattındaki iç mekân işlerinde tipik eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["İç mekân tipi", "Ana kısıt", "Uygun sınıf", "Ek gereksinim"],
                    satirlar: [
                        ["Yedek parça deposu (raflı)", "Dar koridor", "Kompakt akülü", "Koridor ölçümü"],
                        ["Transfer kulesi içi", "Dar merdiven/geçit", "Çok kompakt akülü", "Geçit ölçümü"],
                        ["Zeytin tesisi iç hacim (hat açık)", "Ekipman komşuluğu", "Kompakt akülü, düşük hız", "Hijyen kuralı"],
                        ["Zeytin tesisi iç hacim (hat kapalı)", "Yok denecek kadar az", "Orta sınıf akülü", "Kampanya dışı dönem"],
                        ["Atölye/garaj çatı altı", "Orta tavan yüksekliği", "Akülü 8-10 m", "Zemin kontrolü"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada dizel-akülü ayrımını netleştirmek",
                paragraflar: [
                    "Havza çevresindeki küçük-orta ölçekli işletmelerden en sık aldığımız istek 'en yükseğe çıkan makineyi verin' şeklindedir. Ancak kapalı hacimlerin çoğunda dizel kullanılamaz; bu yüzden ilk sorumuz her zaman hacmin açık mı kapalı mı olduğudur. Kapalıysa akülü sınıf içinde en uygun yükseklik önerilir.",
                    "Bu ayrımı baştan netleştirmek, kapalı bir depoya dizel makine gönderilip geri çevrilmesini önler; bu, hem zaman hem güven kaybettiren bir durumdur.",
                ],
            },
            {
                baslik: "Zemin koruma ve iz bırakmama",
                paragraflar: [
                    "Depo ve atölye zeminleri genellikle saha betonudur ve standart lastik iz bırakabilir; hassas zeminlerde iz bırakmayan lastikli modeller tercih edilir. Zeytin tesislerinde ayrıca üretim alanına giren makinenin temiz ve yağsız olması hijyen kuralı gereğidir; bu, çalışma öncesi kontrol edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzda raf üstü aydınlatma bakımı var, koridor dar; hangi makine gerekir?",
                cevap:
                    "Koridor genişliğini ve raf yüksekliğini bildirirseniz, şase genişliği koridor ölçüsüyle karşılaştırılarak en uygun kompakt akülü sınıf belirlenir. Dar koridorlarda en dar şaseli modeller tercih edilir; ölçü bilinmeden gelen bir makine koridora sığmayabilir. Depo kapalı olduğundan dizel değerlendirmeye girmez.",
            },
            {
                soru: "Transfer kulesinin içine makine girebilir mi?",
                cevap:
                    "Genellikle hayır; kule iç merdiven ve platform boşlukları standart bir makine için dardır, bu yüzden kule içi bakımlar sabit merdivenle yürünerek yapılır. İç mekân ölçülerini (geçit genişliği, kat yüksekliği) paylaşırsanız çok kompakt bir sınıfın istisnai olarak girip giremeyeceğini değerlendiririz; genel kural iç bakım için sabit erişimdir.",
            },
            {
                soru: "Zeytin tesisimizde üretim durmadan iç mekân çalışması yapabilir miyiz?",
                cevap:
                    "Yapılabilir ama en kompakt sınıf ve düşük hızla; hat çalışırken dekantör ve santrifüj gibi ekipmanlar koridoru daraltır. Koridor genişliğini önceden fotoğraf veya krokiyle bilmek isteriz. Büyük ölçekli işlerde hattı kampanya dışı bir güne almanızı öneririz; hem daha büyük makine hem daha az kısıtla çalışılır.",
            },
            {
                soru: "Atölyemiz kapalı, dizel makine gönderdiniz ne olur?",
                cevap:
                    "Bu durumu yaşamamak için ilk temas anında hacmin açık mı kapalı mı olduğunu soruyoruz; doğru cevaplanırsa makine baştan akülü seçilir. Bilgi eksik geldiyse ve dizel makine sahaya gönderildiyse, kapalı hacimde çalıştırılmaz — bu egzoz emisyonu ve iş güvenliği kuralıdır. Böyle bir durumda en kısa sürede akülü alternatif planlanır ancak bu, iş takviminde gecikme yaratır.",
            },
            {
                soru: "Depomuzun zemini hassas, iz bırakmayan makine var mı?",
                cevap:
                    "Var; iz bırakmayan (beyaz dolgu) lastikli akülü modeller bu tip zeminler için standart tercihimizdir. Zemininizin tipini (epoksi, perdahlı beton, seramik) bildirirseniz, doğru lastik tipini içeren sınıfı öneririz. Hassas zeminde standart siyah lastikli makine iz bırakabilir, bu yüzden bu bilgiyi teklif aşamasında soruyoruz.",
            },
            {
                soru: "Hem deponuz hem zeytin tesisimiz var, tek anlaşmayla mı çalışabiliriz?",
                cevap:
                    "Evet. İki tesisin teknik gereksinimleri (koridor ölçüsü, hijyen kuralı, hacim tipi) ayrı değerlendirilir ama koordinasyon tek elden yürütülür; faturalama tesis bazında ayrı tutulur. Depo tarafında koridor ve raf ölçüsü, zeytin tarafında kampanya takvimi ve hijyen kuralı belirleyicidir. İki tesisin adres ve tesis tipi bilgisini paylaşın, birlikte değerlendirelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Havza-zeytin hattındaki iç mekân yapı tiplerinin kapalı hacim dizel kısıtı genel bilgidir; koridor/geçit ölçüm yöntemi ve hijyen kuralı uygulaması firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Milas-Yatağan Sanayi Bölgesinde Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Havza ve OSB hattındaki sanayi holleri, transfer kuleleri ve depo yapıları çoğunlukla çelik konstrüksiyon üzerine kuruludur; bu yapıların montaj, güçlendirme ve bakım işleri, standart bir bina cephesinden farklı bir erişim mantığı gerektirir — kiriş aralığı, bağlantı noktası yüksekliği ve montaj sırasında değişen geçici erişim koşulları önceden bilinmeden doğru platform seçilmez. Yeni bir çelik holün montaj aşamasında platform ihtiyacı, kirişlerin henüz kaplanmadığı ve iç mekânın açık olduğu bir dönemde ortaya çıkar; bu da hem daha büyük sınıf makinelerin girebilmesini hem de saha güvenlik kurallarının inşaat aşamasına özgü olmasını gerektirir. Bu sayfa, havza-OSB hattındaki çelik konstrüksiyon işlerinde montaj ve bakım aşamalarının farklı ihtiyaçlarını, kiriş erişim planlamasını ve saha güvenlik gereksinimlerini ele alıyor.",
        maddeler: [
            {
                baslik: "Montaj aşaması ile bakım aşaması farkı",
                metin:
                    "Yeni bir çelik holün montaj aşamasında saha genellikle açık, kirişler henüz kaplanmamış ve zemin inşaat halindedir; bu dönemde büyük sınıf teleskopik veya eklemli platformlar rahat çalışır ama zemin stabilitesi ayrıca kontrol edilir. Tamamlanmış bir holde yapılan bakım işlerinde ise zemin genellikle bitmiş beton, ama kirişler artık tesisat ve kaplamayla çevrilidir; bu da erişimi daraltır. İki aşama için farklı makine sınıfı ve farklı saha kuralı geçerlidir.",
            },
            {
                baslik: "Kiriş aralığı ve bağlantı noktası erişimi",
                metin:
                    "Çelik konstrüksiyon montajında kirişler arası mesafe ve bağlantı noktalarının (civata, kaynak) yerden yüksekliği, platform sınıfını doğrudan belirler. Geniş kiriş aralıklı hollerde büyük teleskopik sınıflar rahat manevra yapar; dar aralıklı veya çapraz destekli yapılarda kompakt eklemli sınıflar tercih edilir. Bağlantı noktasının tam konumu bilinmeden doğru sınıf önerilmez.",
            },
            {
                baslik: "İnşaat aşamasına özgü saha güvenlik kuralları",
                metin:
                    "Montaj hâlindeki bir sahada, tamamlanmış bir tesisten farklı olarak vinç operasyonları, malzeme kaldırma ve iskele kurulumu aynı anda devam edebilir. Platform çalışması bu operasyonlarla koordine edilir; vinç kaldırma alanının dışında konumlanma ve malzeme düşme riskine karşı baret-emniyet kemeri zorunluluğu standarttır. Bu koordinasyon, sahadaki genel yükleniciyle önceden netleştirilir.",
            },
            {
                baslik: "Ağır çelik parçanın taşıma ve montaj sırası",
                metin:
                    "Platform, çelik parça taşımaz veya kaldırmaz; bu iş vinç veya forklift ile yapılır. Platformun rolü, montaj sonrası bağlantı noktalarının kontrolü, kaynak kalitesi denetimi veya cıvata sıkma torku gibi işlerdir. Bu ayrım net olmazsa sahada beklenmeyen bir 'platformla parça taşıma' talebiyle karşılaşılabilir; bu talep güvenlik nedeniyle kabul edilmez.",
            },
            {
                baslik: "Hava koşulunun montaj programına etkisi",
                metin:
                    "Açık sahadaki çelik konstrüksiyon montajı, rüzgâr ve yağış gibi hava koşullarından etkilenir; özellikle yüksek kotlardaki platform çalışması güçlü rüzgârda durdurulur. Havza bölgesinin iç kesim iklimi kıyıya göre daha değişken olabileceğinden, montaj programına hava payı baştan eklenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj ve bakım aşamasında platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon işlerinin aşamasına göre tipik platform ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Saha durumu", "Uygun sınıf", "Ek koordinasyon"],
                    satirlar: [
                        ["Montaj (kiriş açık)", "Açık, inşaat halinde", "Büyük teleskopik/eklemli", "Vinç operasyonu koordinasyonu"],
                        ["Montaj sonrası kontrol", "Kısmen kapalı", "Orta eklemli", "Bağlantı noktası listesi"],
                        ["Tamamlanmış hol bakımı", "Kapalı, tesisatlı", "Kompakt akülü", "Koridor ölçümü"],
                        ["Dış cephe montaj", "Açık, hava bağımlı", "Dizel teleskopik", "Rüzgâr limiti"],
                        ["Çatı altı son kontrol", "Kapalı", "Akülü, düşük hız", "Saha güvenlik izni"],
                    ],
                },
            },
            {
                baslik: "Genel yüklenici ile koordinasyon",
                paragraflar: [
                    "İnşaat hâlindeki bir sahada platform çalışması, genel yüklenicinin günlük iş programına dahil edilir; vinç kaldırma saatleri, malzeme teslim programı ve diğer taşeronların çalışma alanları önceden öğrenilir. Bu koordinasyon olmadan platforma verilen bir saat dilimi, vinç operasyonuyla çakışabilir ve iş durdurulabilir.",
                    "Sahadaki iş güvenliği sorumlusuyla önceden temas kurmak, platform operatörünün saha kurallarına (baret, emniyet kemeri, belirlenmiş güzergâh) hızlı uyum sağlamasını kolaylaştırır.",
                ],
            },
            {
                baslik: "Bağlantı noktası listesiyle verimli çalışma",
                paragraflar: [
                    "Montaj sonrası kontrol işlerinde, kontrol edilecek bağlantı noktalarının bir listesi ve sahadaki konumları önceden paylaşılırsa, platform tek bir güzergâh üzerinde art arda ilerleyerek işi tamamlar. Liste olmadan sahaya gelen bir ekip, noktaları saha üzerinde ararken zaman kaybedebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni bir çelik holün montajı sürüyor, platform ne zaman devreye girer?",
                cevap:
                    "Genellikle ana çelik iskelet kurulduktan sonra, bağlantı kontrolü ve son montaj işleri için devreye gireriz. Bu aşamada saha hâlâ açık ve vinç operasyonları sürebileceğinden, çalışma saatlerimizi genel yüklenicinin programıyla koordine ederiz. Kiriş aralığı ve bağlantı noktası yüksekliğini bildirirseniz uygun sınıfı önceden belirleriz.",
            },
            {
                soru: "Platform çelik parça taşıyabilir mi?",
                cevap:
                    "Hayır, platform yük veya çelik parça taşımaz; bu iş vinç veya forklift ile yapılır. Platformun rolü personel ve el aletini bağlantı noktasına taşımaktır — kaynak kontrolü, cıvata sıkma torku gibi işler için. Bu ayrımı sahadaki tüm ekiplere baştan net anlatıyoruz, çünkü karışıklık güvenlik riski yaratabilir.",
            },
            {
                soru: "Sahada vinç çalışıyor, platform aynı anda güvenli mi?",
                cevap:
                    "Vinç kaldırma alanının dışında konumlanmak şartıyla evet. Vinç operasyon saatlerini ve kaldırma güzergâhını genel yükleniciden önceden öğreniyor, platform çalışmasını bu alanın dışına planlıyoruz. Kaldırma alanı değişirse platform çalışması durdurulur ve yeni konum değerlendirilir. Bu koordinasyon olmadan sahaya giriş yapılmaz.",
            },
            {
                soru: "Kiriş aralığı dar, hangi sınıf platform girer?",
                cevap:
                    "Dar kiriş aralıklı veya çapraz destekli yapılarda kompakt eklemli sınıflar tercih edilir; büyük teleskopik sınıflar geniş aralıklı hollerde daha rahat çalışır. Kiriş aralığını ve bağlantı noktasının yüksekliğini bildirirseniz, sahaya gelmeden doğru sınıfı öneririz. Ölçü bilinmeden gelen büyük bir makine kirişler arasına giremeyebilir.",
            },
            {
                soru: "Rüzgârlı günlerde çalışma durur mu?",
                cevap:
                    "Yüksek kotlarda ve açık sahada evet, güçlü rüzgârda çalışma güvenlik nedeniyle durdurulur. Havza bölgesinin iç kesim iklimi değişken olabileceğinden, montaj programına baştan hava payı ekliyoruz. Rüzgâr nedeniyle duran bir iş, ilk uygun güne kaydırılır; bu programı önceden sizinle paylaşırız.",
            },
            {
                soru: "Bağlantı noktalarının listesi varsa süreyi kısaltır mı?",
                cevap:
                    "Evet, belirgin şekilde. Kontrol edilecek noktaların bir listesi ve sahadaki yaklaşık konumları önceden paylaşılırsa, platform tek güzergâh üzerinde art arda ilerleyerek işi planlanan süreden daha kısa sürede tamamlar. Liste yoksa noktalar sahada aranır, bu da süreyi uzatır. Listeyi teklif aşamasında paylaşmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj ve bakım aşaması ayrımı genel inşaat/sanayi bilgisidir; vinç koordinasyonu ve bağlantı noktası listesi yöntemi firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Zeytin İşleme Tesislerinde Silo ve Tank Çiftliği Üstü Platform Kiralama",
        giris:
            "Milas ve çevresindeki zeytinyağı üretim zincirinde silo ve tank çiftliği, üretimin en görünmez ama en kritik bölümüdür: hasat sonrası ürünün depolandığı silolar, işlenmiş yağın bekletildiği tank çiftlikleri ve bunları besleyen boru hatları. Bu yapılar üzerinde yapılan platform işleri — üst kapak bakımı, seviye sensörü kontrolü, boru hattı izolasyon onarımı — standart bir tarım silosundan farklı iki kısıt taşır: döşemenin taşıma kapasitesi çoğu zaman belgesiz ve gıda güvenliği kuralları sıkı işletilir. Bu sayfa, silo ve tank çiftliği üstü işlerde döşeme kapasitesi belirsizliğinin nasıl yönetildiğini, hijyen kurallarının platform çalışmasına etkisini ve kampanya takviminin bu işlere getirdiği zamanlama kısıtını anlatıyor.",
        maddeler: [
            {
                baslik: "Döşeme taşıma kapasitesi bilinmeden konumlanma",
                metin:
                    "Silo ve tank üstü platformları, genellikle hafif çelik konstrüksiyon üzerine kurulu, taşıma kapasitesi sınırlı yapılardır. Bu döşemenin proje taşıma kapasitesi bilinmiyorsa, makine döşemeye değil yan zemine konumlandırılır ve bom uzunluğuyla üst noktaya erişilir. Bu çözüm için tankın çapı, yüksekliği ve yan zeminle arasındaki mesafe önceden gerekir.",
            },
            {
                baslik: "Gıda hijyeni kuralının platform ve operatöre yansıması",
                metin:
                    "Zeytinyağı üretim ve depolama alanına giren makine ve operatör için genel hijyen kuralları (temiz ekipman, uygun kıyafet, üretim hattına yağ-kir bulaştırmama) uygulanır; mümkünse çalışma üretim durduğu saatlerde planlanır. Bu kural işin başında tesisle netleştirilir ve operatör brifingine eklenir; sahada zaman kaybını önler.",
            },
            {
                baslik: "Boru hattı ve seviye sensörü çevresinde dar erişim",
                metin:
                    "Tank çiftliği içindeki boru hatları ve seviye sensörleri sık aralıklarla yerleşir; platform bu ekipmanlara temas etmeyecek bir koridordan ilerler. Koridor genişliği çoğu zaman standart bir makinenin şase genişliğiyle sınırlıdır; dar koridorlarda en kompakt akülü sınıf standart çözümdür.",
            },
            {
                baslik: "Kampanya döneminde silo dolulukunun erişime etkisi",
                metin:
                    "Hasat kampanyası döneminde silolar dolu veya dolmakta olabilir; bu dönemde silo üstü işler ürün akışıyla çakışmayacak saatlere planlanır. Kampanya dışı dönemde silolar genellikle boş veya düşük seviyededir, bu da erişimi ve çalışma güvenliğini kolaylaştırır. Büyük ölçekli bakım işlerini mümkünse kampanya dışına planlamayı öneriyoruz.",
            },
            {
                baslik: "Açık saha tank çiftliğinde zemin ve dizel kullanımı",
                metin:
                    "Tank çiftliği genellikle açık sahada bulunur; bu durumda dizel makine de değerlendirmeye girer ancak zemin (çakıl, stabilize, beton) taşıma kapasitesi kontrol edilir. Kapalı silo binası içindeki işlerde ise dizel kısıtı geçerlidir ve akülü sınıf zorunludur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo/tank yapı tipine göre erişim yaklaşımı",
                paragraflar: [
                    "Aşağıdaki tablo, silo ve tank çiftliği üstü işlerde tipik erişim yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı", "Ana kısıt", "Yaklaşım", "Ek gereksinim"],
                    satirlar: [
                        ["Silo üst kapağı", "Döşeme taşıma sınırı", "Yan zeminden bom erişimi", "Kapasite belgesi/teyidi"],
                        ["Tank çiftliği boru hattı", "Dar koridor", "Kompakt akülü", "Koridor ölçümü"],
                        ["Seviye sensörü", "Hassas ekipman komşuluğu", "Düşük hızlı yaklaşım", "Ekipman haritası"],
                        ["Açık saha tank üstü", "Zemin taşıma", "Dizel/akülü, zemin kontrolü", "Zemin tipi teyidi"],
                        ["Kapalı silo binası içi", "Dizel yasağı", "Akülü zorunlu", "Havalandırma kontrolü"],
                    ],
                },
            },
            {
                baslik: "Döşeme kapasitesi belgesi olmadan çözüm",
                paragraflar: [
                    "Silo ve tank üstü döşemenin taşıma kapasitesi çoğu tesiste belgeli değildir; bu durumda döşeme üstüne makine koymayız. Bunun yerine makineyi yan zemine konumlandırıp bom uzunluğuyla üst noktaya erişiriz. Bu, aynı işin daha büyük ama daha uzaktan çalışan bir makineyle yapılması anlamına gelir ve genellikle biraz daha uzun sürer.",
                    "Tesiste imalatçı belgesi veya statik proje varsa, döşeme üstü konumlandırma da değerlendirilebilir ve genellikle daha kısa sürede iş biter.",
                ],
            },
            {
                baslik: "Kampanya dışı dönemde planlama avantajı",
                paragraflar: [
                    "Kampanya dışı dönemde silolar boş, hat trafiği düşük ve hijyen kısıtı daha esnek olduğundan, büyük ölçekli silo/tank bakım işleri bu pencereye yazıldığında hem daha az kısıtla hem daha ekonomik yapılır. Küçük ve acil müdahaleler (örneğin tek bir sensör değişimi) kampanya içinde de yapılabilir, ancak büyük işler için kampanya dışı dönem önerimizdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo üstü döşemenin taşıma kapasitesini bilmiyoruz, ne yapmalıyız?",
                cevap:
                    "Bilinmeyen kapasiteyle döşemeye makine koymayız; makineyi yan zemine konumlandırıp bom uzunluğuyla silo üstüne erişiriz. Bu çözüm için silonun çapı, yüksekliği ve yan zeminle arasındaki mesafe gerekir. Tesisinizde imalatçı belgesi veya statik proje varsa bu bilgiyle döşeme üstü konumlandırma da değerlendirilir ve genellikle daha kısa sürede iş biter.",
            },
            {
                soru: "Hijyen kuralı platform için de geçerli mi?",
                cevap:
                    "Geçerlidir. Üretim alanına giren makine ve operatör için temiz ekipman, uygun kıyafet ve yağ-kir bulaştırmama gibi genel hijyen kuralları uygulanır; mümkünse çalışma üretim durduğu saatlerde planlanır. Tesisinizin hijyen prosedürünü önceden paylaşırsanız operatör brifingine ekleriz ve sahada zaman kaybı yaşanmaz.",
            },
            {
                soru: "Kampanya sırasında silo doluyken üstünde çalışılabilir mi?",
                cevap:
                    "Çalışılabilir ancak ürün akış saatleriyle çakışmayacak bir zaman diliminde planlanır; dolu bir siloda ürün akışı sırasında üst kapak çalışması güvenlik açısından uygun değildir. Kampanya takviminizi ve ürün akış saatlerinizi bildirirseniz, çalışmayı bu saatlerin dışına yerleştiririz. Büyük ölçekli işler için kampanya dışı dönemi öneririz.",
            },
            {
                soru: "Tank çiftliğinde boru hattı arasından geçebilir miyiz?",
                cevap:
                    "Koridor genişliğine bağlıdır; boru hatları ve seviye sensörleri arasındaki mesafe standart bir makinenin şase genişliğiyle karşılaştırılmalıdır. Dar koridorlarda en kompakt akülü sınıf tercih edilir. Koridor genişliğini fotoğraf veya kroki ile bildirirseniz, sahaya gelmeden doğru sınıfı belirleriz.",
            },
            {
                soru: "Açık saha tank çiftliğinde dizel makine kullanabilir miyiz?",
                cevap:
                    "Açık sahada evet, dizel değerlendirmeye girer. Ancak zeminin (çakıl, stabilize, beton) taşıma durumu önceden kontrol edilir; özellikle sulama veya yağış sonrası zemin yumuşayabilir. Zemin tipini bildirirseniz, gerekiyorsa yük dağıtıcı plaka ile birlikte planlarız.",
            },
            {
                soru: "Silo ve tank işlerini nasıl planlamalıyız, kampanya öncesi mi sonrası mı?",
                cevap:
                    "Büyük ölçekli işler için kampanya dışı dönem öneriyoruz; bu dönemde silolar boş, hat trafiği düşük ve erişim daha az kısıtlıdır. Küçük ve acil müdahaleler (örneğin tek bir sensör değişimi) kampanya içinde de kompakt sınıfla yapılabilir. Yıllık bakım takviminizi paylaşırsanız, kampanya takvimimizle karşılaştırıp en uygun pencereyi önerelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Zeytinyağı üretim zincirindeki silo ve tank çiftliği yapıları kamuya açık genel bilgidir; döşeme kapasitesi değerlendirme yöntemi ve hijyen prosedürü firma pratiğidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Havza Hattında Saha Aydınlatması ve Enerji Altyapısı Bakım Platformu",
        giris:
            "Havza tesislerindeki enerji ve aydınlatma bakımı, tek bir kategori değil üç ayrı ölçekten oluşur: linyit havzasındaki taşıma bandı ve stok sahası aydınlatması, sanayi holü ve depo çatı altı armatürleri, ve OSB-havalimanı çevresi işletmelerin dış saha aydınlatma direkleri. Her ölçek farklı bir erişim ve enerji güvenlik kuralı taşır — açık sahada dizel platform değerlendirilebilirken, kapalı hol içinde akülü zorunludur; enerjili hat yakınında çalışmada ise mesafe ve kesinti prosedürü devreye girer. Bu sayfa, havza hattındaki enerji-aydınlatma işlerinin bu üç ölçekte nasıl farklılaştığını ve enerjili sistemlere yakın çalışmanın hangi kurallara tabi olduğunu anlatıyor.",
        maddeler: [
            {
                baslik: "Açık sahada direk ve hat aydınlatması",
                metin:
                    "Stok sahası, otopark ve dış güvenlik aydınlatması genellikle direk üzerinde, açık alanda bulunur. Bu tip işlerde dizel teleskopik platformlar rahat çalışır; ancak direğin enerjili olup olmadığı, hattın kesilip kesilemeyeceği önceden netleştirilir. Enerjili bir direğe yakın çalışmada güvenli mesafe korunur.",
            },
            {
                baslik: "Kapalı holde çatı altı armatür bakımı",
                metin:
                    "Sanayi holü ve depo iç mekânındaki armatür ve aydınlatma bakımı kapalı hacimde yapılır; bu yüzden akülü platform zorunludur. Çatı altı yüksekliği ve varsa vinç kirişi gibi engeller önceden bilinmeden doğru sınıf seçilmez. Üretim sürerken yapılan bakımlarda düşük hızda ve belirlenmiş güzergâhta çalışılır.",
            },
            {
                baslik: "Enerjili hatta yakın çalışmada mesafe kuralı",
                metin:
                    "Trafo çevresi, orta gerilim hattı yakını veya panolara yakın noktalarda platform çalışması, tesisin enerji yetkilisiyle koordineli yürütülür. Mümkünse ilgili hat veya ekipman güvenli duruma alınır (kesinti); kesinti mümkün değilse güvenli mesafe korunarak çalışılır. Bu koordinasyon işin başında netleştirilir ve saha güvenlik ekibinin onayı olmadan çalışmaya başlanmaz.",
            },
            {
                baslik: "Taşıma bandı ve transfer kulesi aydınlatması",
                metin:
                    "Linyit taşıma hattı boyunca aydınlatma direkleri bant hattına paralel dizilidir; bu hatta çalışan platform bant hattına paralel ilerler ve bandın üzerine değil yanına konumlanır. Bant çalışır durumdaysa güvenlik mesafesi ve düşük hız zorunludur; bant durdurulduğunda daha rahat çalışılır. Transfer kulelerinin dış cephe aydınlatması ise eklemli platformla yatay erişimle yapılır.",
            },
            {
                baslik: "OSB ve havalimanı çevresi dış aydınlatma",
                metin:
                    "OSB'deki genel imalat tesisleri ve havalimanı çevresi işletmelerin dış saha aydınlatması, standart açık alan işi olarak değerlendirilir; saha giriş prosedürü (güvenlik kaydı) dışında özel bir kısıt taşımaz. Direk yüksekliği ve zemin durumu bilgisiyle uygun sınıf önceden belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ölçeğe göre enerji-aydınlatma işi ve sınıf",
                paragraflar: [
                    "Aşağıdaki tablo, havza hattındaki üç ölçekte tipik iş ve makine eşleşmesini özetler.",
                ],
                tablo: {
                    basliklar: ["İş türü", "Ortam", "Uygun sınıf", "Enerji notu"],
                    satirlar: [
                        ["Stok sahası direk aydınlatması", "Açık", "Dizel teleskopik", "Enerjili ise mesafe kuralı"],
                        ["Çatı altı armatür (hol/depo)", "Kapalı", "Akülü", "Dizel yasağı"],
                        ["Trafo/pano yakını", "Açık/kapalı", "Akülü, mesafe kontrollü", "Kesinti koordinasyonu"],
                        ["Bant hattı aydınlatması", "Açık, hat boyu", "Uzun bomlu teleskopik", "Hat çalışır/durur ayrımı"],
                        ["OSB dış saha direk", "Açık", "Dizel/akülü", "Saha giriş kaydı"],
                    ],
                },
            },
            {
                baslik: "Enerji yetkilisiyle koordinasyon adımları",
                paragraflar: [
                    "Enerjili sistemlere yakın işlerde önce tesisin enerji yetkilisiyle temas kurulur; ilgili hat veya ekipmanın kesintiye alınıp alınamayacağı sorulur. Kesinti mümkünse çalışma bu pencereye planlanır; mümkün değilse güvenli mesafe ve ek koruma önlemi netleştirilir. Bu adım atlanmadan sahada çalışmaya başlanmaz.",
                    "Koordinasyon süreci bazen günler önceden başlatılmalıdır, özellikle kesinti planlaması tesisin kendi operasyon takvimini etkiliyorsa.",
                ],
            },
            {
                baslik: "Hat boyu işlerde ilerleme programı",
                paragraflar: [
                    "Bant hattı gibi uzun güzergâhlı aydınlatma işlerinde platform sabit durmaz; program hattın bir ucundan diğerine doğru ilerleyen bir sıra hâlinde kurulur. Bu ilerleyiş süreyi kısaltır ve hattın belirli bir bölümünü uzun süre kapalı tutmaz. Hat üzerindeki nokta sayısı ve aralarındaki mesafe önceden bilinirse günlük ilerleme hızı gerçekçi biçimde söylenebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Direk enerjili, çalışma öncesi kesinti gerekir mi?",
                cevap:
                    "Mümkünse evet; tesisin enerji yetkilisiyle koordine olup ilgili hattın kesintiye alınmasını öneririz. Kesinti operasyonel nedenlerle mümkün değilse, güvenli mesafe korunarak ve ek koruma önlemiyle çalışılabilir, ancak bu karar saha güvenlik ekibinin onayına bağlıdır. Direğin enerji durumunu ve kesinti imkânını önceden bildirirseniz planlamayı buna göre yaparız.",
            },
            {
                soru: "Depo çatı altı armatür bakımı için dizel makine kullanabilir miyiz?",
                cevap:
                    "Kapalı hacim olduğu için hayır; egzoz emisyonu nedeniyle dizel makine kullanılamaz, akülü sınıf zorunludur. Çatı yüksekliği ve varsa vinç kirişi gibi engelleri bildirirseniz uygun akülü sınıfı öneririz. Üretim sürerken yapılan bakımlarda ayrıca düşük hız ve belirlenmiş güzergâh kuralı geçerlidir.",
            },
            {
                soru: "Bant hattı boyunca birden fazla direk var, tek seferde mi ilerliyorsunuz?",
                cevap:
                    "Evet, hat boyu işlerde makine sabit durmaz; program hattın bir ucundan diğerine ilerleyen bir sıra hâlinde kurulur. Bant çalışıyorsa güvenlik mesafesi korunur ve hız düşük tutulur; bant durdurulduğunda daha rahat ilerlenir. Hat üzerindeki direk sayısını ve aralarındaki mesafeyi bildirirseniz günlük ilerleme hızını gerçekçi söyleyebiliriz.",
            },
            {
                soru: "Trafo çevresinde çalışma güvenli mi?",
                cevap:
                    "Doğru koordinasyonla evet. Tesisin enerji yetkilisiyle önceden temas kurup güvenli mesafe ve varsa kesinti seçeneğini netleştiriyoruz; saha güvenlik ekibinin onayı olmadan trafo çevresinde çalışmaya başlamıyoruz. Trafo tipini ve mesafe bilgisini paylaşırsanız değerlendirmeye başlarız.",
            },
            {
                soru: "OSB'deki dış saha aydınlatma direğimiz için özel bir kısıt var mı?",
                cevap:
                    "Genellikle hayır; açık saha işi olarak standart değerlendirilir, saha giriş kaydı dışında özel bir kural yoktur. Direk yüksekliğini ve zemin durumunu bildirirseniz uygun dizel veya akülü sınıfı öneririz. Sahanızın güvenlik kaydı gerektirip gerektirmediğini de teklif aşamasında netleştiririz.",
            },
            {
                soru: "Enerjili sisteme yakın işlerde planlama ne kadar önceden başlamalı?",
                cevap:
                    "Kesinti gerekiyorsa, tesisin kendi operasyon takvimini etkileyebileceğinden mümkünse günler önceden başlatılmasını öneririz. Kesinti gerekmeyen ama mesafe kontrolü gereken işlerde planlama daha kısa sürede tamamlanabilir. Enerjili sistemin tipini ve kesinti imkânını erken bildirirseniz, sürecin ne kadar süreceğini net söyleyebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Havza hattındaki üç ölçekli aydınlatma-enerji altyapısı genel bilgidir; enerji yetkilisi koordinasyonu ve hat boyu ilerleme yöntemi firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Sanayi Tesisinde Operatörlü Platform Kiralama: İş İzni ve Yetkinlik",
        giris:
            "Havza ve OSB hattındaki büyük sanayi tesislerinde platform kiralaması, kıyı işletmelerinden farklı bir yetkinlik standardına tabidir: tesise giriş yapan operatörün sertifikası, iş güvenliği brifingi ve saha kurallarına uyumu, işin teknik yönü kadar önemlidir. Operatörsüz kiralama seçeneği de mevcuttur ama büyük sanayi tesislerinin çoğu, kendi personelinin platform kullanma yetkinliği belgeli değilse operatörlü hizmeti tercih eder veya zorunlu tutar. Bu sayfa, havza hattındaki tesislerde operatörlü kiralamanın nasıl işlediğini, iş izni sürecine operatörün nasıl dahil olduğunu ve operatörsüz seçeneğin hangi koşullarda uygun olduğunu anlatıyor.",
        maddeler: [
            {
                baslik: "Sanayi tesisinde operatör sertifikasının rolü",
                metin:
                    "Büyük sanayi tesislerinin çoğu, sahaya giren platform operatöründen geçerli bir yüksekte çalışma ve platform kullanım sertifikası ister; bu belge iş izni formuna eklenir. Operatörümüzün sertifika bilgisini teklif aşamasında paylaşıyoruz ki sahaya varmadan kontrol tamamlansın; kayıtsız bir operatörün kapıda geri çevrilmesi hem zaman hem güven kaybettirir.",
            },
            {
                baslik: "İş izni formunda operatörün yeri",
                metin:
                    "Sanayi tesislerinde platform çalışması, sahaya girmeden önce yazılı bir iş izniyle başlar; formda çalışma yüksekliği, makine sınıfı, operatör bilgisi ve varsa ek riskler (sıcak iş, kapalı alan) tanımlanır. Operatörün kimlik ve sertifika bilgisini önceden hazırlıyoruz ki bu form sahaya varmadan tamamlanabilsin.",
            },
            {
                baslik: "Operatörsüz kiralamanın uygun olduğu durumlar",
                metin:
                    "İşletmenin kendi personeli geçerli sertifikaya sahipse ve tesis kuralları izin veriyorsa operatörsüz kiralama değerlendirilir; bu durumda makinenin günlük kontrol listesi ve kullanım kılavuzu teslim sırasında birlikte verilir. Operatörsüz kiralamada sorumluluk kullanıcı işletmeye geçtiğinden, personel yetkinliği ve tesis onayı önceden netleştirilir.",
            },
            {
                baslik: "Kapalı hacim ve enerjili ortamda ek yetkinlik",
                metin:
                    "Kapalı alan girişi gerektiren işler (transfer kulesi içi, tank içi) veya enerjili sistemlere yakın çalışma, standart platform sertifikasının ötesinde ek eğitim ve tesis onayı gerektirebilir. Bu tip işlerde operatörümüzün ilgili ek yetkinliğe sahip olup olmadığı işin kapsamına göre değerlendirilir; gerekiyorsa tesisin kendi eğitimine operatörümüz de katılır.",
            },
            {
                baslik: "Vardiya ve uzun süreli işlerde operatör planlaması",
                metin:
                    "Planlı duruş dönemlerinde bazı işler tek vardiyayı aşan sürede tamamlanır; bu durumda operatör rotasyonu veya çalışma saatine uygun planlama önceden yapılır. Sürekli üretim ortamındaki enerji tesislerinde operatörün saha kurallarına (güzergâh, hız, iletişim yöntemi) uyumu her vardiya başında tazelenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, hangi durumda hangi seçeneğin uygun olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Operatörlü", "Operatörsüz", "Belirleyici"],
                    satirlar: [
                        ["Personel sertifikası yok", "Uygun", "Uygun değil", "Yetkinlik belgesi"],
                        ["Kapalı alan/enerjili ortam", "Tercih edilir", "Ek onay gerekir", "Tesis kuralı"],
                        ["Kısa süreli tek nokta işi", "Esnek", "Esnek", "İşletme tercihi"],
                        ["Uzun süreli vardiyalı iş", "Rotasyon planlanır", "Personel planlaması işletmede", "Süre"],
                        ["Tesis kendi kuralıyla zorunlu tutuyor", "Zorunlu", "Uygulanmaz", "Tesis politikası"],
                    ],
                },
            },
            {
                baslik: "Sertifika ve belge sürecini önceden tamamlamak",
                paragraflar: [
                    "Operatörün sertifika bilgisini, kimlik kaydını ve gerekiyorsa araç-makine belgelerini teklif aşamasında toplayıp saha güvenlik birimine iletiyoruz. Bu adım tamamlanmadan sahaya giriş planlanmaz; önceden tamamlanan kayıt, sahadaki bekleme süresini büyük ölçüde kısaltır.",
                    "Tesisin kendine özgü ek gereksinimleri varsa (örneğin belirli bir eğitim sertifikası), bu bilgiyi ilk temas anında sorup sürece dahil ediyoruz.",
                ],
            },
            {
                baslik: "Operatörsüz kiralamada sorumluluk paylaşımı",
                paragraflar: [
                    "Operatörsüz kiralamada makinenin günlük kontrolü ve güvenli kullanımı işletmenin kendi personeline geçer; bu yüzden personelin geçerli sertifikaya sahip olduğunu ve tesisin operatörsüz kiralamaya izin verdiğini önceden teyit ediyoruz. Teslim sırasında makinenin kullanım kılavuzu ve günlük kontrol listesi birlikte verilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sanayi tesisimiz operatör sertifikası istiyor, hangi belgeyi sağlıyorsunuz?",
                cevap:
                    "Operatörümüzün geçerli yüksekte çalışma ve platform kullanım sertifikasını teklif aşamasında paylaşıyoruz; bu belge tesisin iş izni formuna eklenir. Tesisinizin ek bir sertifika türü istediği durumlarda (örneğin belirli bir eğitim belgesi), bu bilgiyi önceden bildirirseniz süreci ona göre hazırlarız.",
            },
            {
                soru: "Kendi personelimiz sertifikalı, operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Evet, personelinizin geçerli sertifikası varsa ve tesisiniz operatörsüz kiralamaya izin veriyorsa bu seçeneği değerlendiririz. Teslim sırasında makinenin kullanım kılavuzu ve günlük kontrol listesi birlikte verilir; sorumluluk kullanım süresince işletmenize geçer. Personelinizin sertifika bilgisini paylaşırsanız süreci başlatırız.",
            },
            {
                soru: "İş izni formu operatör olmadan doldurulabilir mi?",
                cevap:
                    "Formun tam doldurulması için operatör bilgisi (kimlik, sertifika) gereklidir; bu yüzden operatörümüzün bilgilerini teklif aşamasında sizinle paylaşıyoruz ki formu sahaya varmadan birlikte tamamlayabilelim. Eksik bir formla sahaya giren makine, kapıda beklemek zorunda kalabilir.",
            },
            {
                soru: "Transfer kulesi içinde çalışacağız, operatörün ek eğitimi olmalı mı?",
                cevap:
                    "Kapalı alan girişi gerektiren işlerde standart platform sertifikasının ötesinde tesisin kendi kapalı alan eğitimi gerekebilir. Bu durumda operatörümüzün mevcut yetkinliğini işin kapsamıyla karşılaştırır, gerekiyorsa operatörümüzün tesisin eğitimine katılmasını sağlarız. İşin kapalı alan içerip içermediğini önceden belirtirseniz bu süreci baştan planlarız.",
            },
            {
                soru: "Planlı duruş sırasında uzun vardiyalı iş için operatör değişir mi?",
                cevap:
                    "Tek vardiyayı aşan işlerde operatör rotasyonu önceden planlanır; bu, hem operatör yorgunluğunu önler hem iş sürekliliğini korur. Duruş programınızın süresini ve vardiya düzenini paylaşırsanız, operatör planlamasını buna göre yaparız.",
            },
            {
                soru: "Operatörlü mü operatörsüz mü daha ekonomik?",
                cevap:
                    "Kısa süreli tek nokta işlerinde fark genellikle küçüktür; operatörsüz seçenek personel sertifikası mevcutsa biraz daha ekonomik olabilir. Uzun süreli veya kapalı alan/enerjili ortam gibi ek yetkinlik gerektiren işlerde operatörlü seçenek hem daha güvenli hem toplamda daha az risklidir. İşin süresini ve ortam tipini paylaşırsanız hangisinin sizin için daha uygun olduğunu net söyleyebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sanayi tesislerinde iş izni ve operatör sertifikası uygulaması genel iş güvenliği bilgisidir; belge toplama süreci ve rotasyon planlaması firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Havza-OSB Hattında Çok Noktalı Rota Bakım Planlaması",
        giris:
            "Milas-Yatağan havzası ve çevresindeki OSB'lerde bakım talepleri nadiren tek bir noktadan gelir: bir tedarik işletmesinin çatı ve cephe bakımı, komşu atölyenin aydınlatma değişimi, birkaç kilometre ötedeki bir başka tesisin tabela onarımı — bunlar tek tek ele alındığında her biri için ayrı sevkiyat gerekir ve bu ekonomik değildir. Havza ve OSB'lerin coğrafi kümelenmesi, bu tip küçük-orta ölçekli işleri tek bir güzergâha, tek bir güne toplamayı mümkün kılar. Bu sayfa, çok noktalı rota planlamasının havza hattında nasıl işlediğini, hangi işlerin bu modele uygun olduğunu ve sabit tarihli acil işlerle rota planlamasının nasıl dengelendiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Rota planlamasına uygun iş profili",
                metin:
                    "Yarım günü doldurmayan, birbirine yakın konumlanmış küçük-orta ölçekli işler (birkaç armatür değişimi, bir tabela onarımı, kısa bir cephe kontrolü) rota planlamasına en uygun profildir. Büyük ölçekli, tek başına bir günü dolduran işler ise ayrı planlanır ama günün geri kalanında rotaya başka bir talep eklenebilir.",
            },
            {
                baslik: "Komşu işletmelerin taleplerini birleştirme",
                metin:
                    "Bir işletme talep açtığında, aynı sanayi bölgesindeki diğer işletmelere haber verilmesini öneririz; birkaç işletme aynı güne yazıldığında nakliye bedeli bölünür ve her işletme için birim maliyet düşer. Bu model özellikle tek başına ekonomik olmayan küçük işler için değerlidir.",
            },
            {
                baslik: "Havza içi ve OSB arası güzergâh sırası",
                metin:
                    "Rota, coğrafi olarak en mantıklı sırayla kurulur — havza içindeki işler önce, ardından komşu OSB'deki talepler veya tam tersi, günün başlangıç noktasına göre. Bu sıralama, makinenin gereksiz geri-ileri gitmesini önler ve toplam sevkiyat süresini kısaltır.",
            },
            {
                baslik: "Sabit tarihli acil işlerin rotaya etkisi",
                metin:
                    "Rota planlaması esnek tarihli işlerde en verimli sonucu verir; sabit tarihli acil bir talep geldiğinde bu, ya mevcut bir rotaya eklenir (coğrafi olarak uygunsa) ya da ayrı bir sevkiyatla karşılanır. Ayrı sevkiyatın maliyeti teklifte açıkça ayrı kalem olarak gösterilir.",
            },
            {
                baslik: "Büyük tesis duruş dönemiyle rota yoğunluğu",
                metin:
                    "Büyük üretim tesislerinin planlı duruş haftalarında, çevredeki tedarik işletmelerinin de kendi bakım işlerini aynı haftaya sıkıştırma eğilimi vardır. Bu haftalarda rota yoğunlaşır ve filo kapasitesi bu dönemlere göre planlanır; küçük işletmelerin kendi kalemlerini bu yoğun haftaların dışına kaydırması genellikle daha hızlı teslim ve daha uygun fiyat sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasına uygunluk tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, hangi iş profilinin rota planlamasına ne kadar uygun olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["İş profili", "Rotaya uygunluk", "Maliyet etkisi", "Planlama notu"],
                    satirlar: [
                        ["Küçük iş, esnek tarih", "Yüksek", "En düşük (paylaşımlı)", "Komşu talebe eklenir"],
                        ["Orta ölçekli, esnek tarih", "Orta", "Standart", "Günün başında/sonunda"],
                        ["Büyük ölçekli, tek gün dolduran", "Düşük", "Ayrı planlanır", "Rotaya bağımsız"],
                        ["Sabit tarihli acil", "Duruma bağlı", "Yüksek (özel sevkiyat)", "Coğrafi uygunlukla değişir"],
                        ["Duruş haftası kalemi", "Yoğun dönem", "Standart-yüksek", "Erken planlama önerilir"],
                    ],
                },
            },
            {
                baslik: "Komşu talebe haber verme süreci",
                paragraflar: [
                    "Talebinizi açarken komşu işletmelere haber vermenizi öneririz; birlikte açılan talep daha hızlı güne bağlanır ve nakliye maliyeti paylaşılır. Bu süreç zorunlu değildir — tek başına da talep açabilirsiniz — ama sanayi bölgesi kompakt olduğu için genellikle avantajlıdır.",
                    "Rota bir kez kurulduktan sonra son anda eklenen bir talep, güzergâhı bozmadan eklenebiliyorsa dahil edilir; bozuyorsa bir sonraki rotaya planlanır.",
                ],
            },
            {
                baslik: "Duruş haftası dışına kaydırma önerisi",
                paragraflar: [
                    "Büyük tesislerin duruş haftalarında talep yoğunluğu artar ve bu haftalarda hem teslim süresi uzayabilir hem fiyat standarttan farklı olabilir. Mümkünse kendi bakım kalemlerinizi bu yoğun haftaların dışına, bölgenin daha sakin olduğu dönemlere planlamanızı öneriyoruz; bu hem daha hızlı teslim hem daha uygun fiyat sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük bir tabela işimiz var, tek başına ekonomik olur mu?",
                cevap:
                    "Tek başına planlandığında nakliye bedeli işin kendisine göre yüksek kalabilir; bu yüzden komşu işletmelerin taleplerini aynı güne toplamayı öneririz. Talebinizi açarken çevrenizdeki işletmelere haber vermeniz, aynı güne birden fazla iş yazılmasını ve maliyetin paylaşılmasını sağlar. Tarihinizi esnek bırakırsanız uygun bir rotaya en kolay şekilde eklenirsiniz.",
            },
            {
                soru: "Rotaya nasıl dahil oluruz, ayrı bir süreç mi?",
                cevap:
                    "Hayır, normal talep sürecinden farklı değil; talebinizi ilettiğinizde konumunuzu ve tarih esnekliğinizi değerlendirip mevcut veya oluşturulacak bir rotaya en uygun noktaya yerleştiririz. Sabit tarihli bir talebiniz varsa da karşılarız, ancak coğrafi olarak rotaya uymuyorsa ayrı sevkiyat bedeli teklife yansır.",
            },
            {
                soru: "Duruş haftasında işimiz var, rotaya girer mi?",
                cevap:
                    "Girer ama bu haftalarda talep yoğunluğu arttığı için hem teslim süresi biraz uzayabilir hem fiyat standarttan farklı olabilir. Mümkünse kendi kalemlerinizi duruş haftasının dışına, bölgenin daha sakin bir dönemine planlamanızı öneriyoruz. Tarihiniz sabit ve duruş haftasına denk geliyorsa erken planlama yapmanızı öneririz.",
            },
            {
                soru: "OSB'deki işimiz havza içindeki bir rotaya eklenebilir mi?",
                cevap:
                    "Coğrafi olarak uygunsa evet; havza ile komşu OSB'ler arasındaki mesafe, aynı güne iki bölgeyi de kapsayan bir rota kurmaya çoğu zaman elverir. Tarihinizi esnek bırakırsanız, havzadaki bir rotaya en yakın uygun günde eklenirsiniz. Bu, ayrı bir OSB sevkiyatına göre genellikle daha ekonomiktir.",
            },
            {
                soru: "Rota planlanırken sıralama neye göre yapılır?",
                cevap:
                    "Coğrafi olarak en mantıklı sıraya göre; makinenin gereksiz geri-ileri gitmesini önleyecek şekilde günün başlangıç noktasından itibaren en yakın işler sırayla planlanır. Bu, hem toplam sevkiyat süresini kısaltır hem yakıt/zaman maliyetini düşürür. Talebinizin konumunu net paylaşmanız, doğru sıralamaya girmenizi kolaylaştırır.",
            },
            {
                soru: "Son anda talep eklersek rota bozulur mu?",
                cevap:
                    "Güzergâhı bozmadan eklenebiliyorsa mevcut rotaya dahil ederiz; bozuyorsa bir sonraki rotaya planlanır ve bu durumda teslim tarihi biraz gecikebilir. Mümkün olduğunca erken haber vermeniz, talebinizin mevcut rotaya sığma ihtimalini artırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Havza ve OSB'lerin coğrafi kümelenmesi kamuya açık genel bilgidir; komşu talep birleştirme ve rota sıralama yöntemi firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Havza ve Zeytin Sahalarında Zor Zemin ve Arazi Koşullu Platform Kiralama",
        giris:
            "Milas-Yatağan hattındaki bazı çalışma noktaları düz sanayi parselinden çok farklı bir zemin karakteri taşır: linyit havzasının stok sahaları ve transfer kuleleri çevresindeki dolgu-stabilize zemin, zeytin bahçesi ve değirmen çevresindeki toprak yollar, sulama sonrası yumuşayan tarım arazisi kenarları. Bu zeminlerde standart bir platformun tekerleği batabilir, kayabilir veya makine dengesini kaybedebilir; bu yüzden zor zemin işlerinde önce zemin tipi ve son durumu (kuru mu, sulama sonrası mı, dolgu mu) değerlendirilir, sonra uygun sınıf ve varsa ek destek (yük dağıtıcı plaka, paletli taşıyıcı) belirlenir. Bu sayfa, havza ve zeytin hattındaki zor zemin senaryolarını ve bu zeminlerde güvenli çalışmanın hazırlık adımlarını anlatıyor.",
        maddeler: [
            {
                baslik: "Stok sahası ve dolgu zeminde stabilite",
                metin:
                    "Linyit stok sahaları ve çevresi genellikle dolgu malzemeyle oluşturulmuş, sıkıştırma derecesi değişken zeminlerdir. Bu zeminlerde tekerlekli platformlar batma riski taşır; paletli taşıyıcılı modeller veya yük dağıtıcı plaka ile desteklenmiş tekerlekli modeller değerlendirilir. Zeminin son sıkıştırma veya yağış durumu çalışma öncesi sorulur.",
            },
            {
                baslik: "Zeytin bahçesi ve toprak yol erişimi",
                metin:
                    "Zeytin ağaçları arasındaki toprak yollar dar, eğimli ve mevsime göre değişken sertlikte olabilir; sulama veya yağış sonrası zemin yumuşayarak taşıma kapasitesini düşürür. Bu güzergâhlarda makinenin geçiş güzergâhı önceden değerlendirilir; gerekiyorsa daha kompakt ve hafif bir sınıf tercih edilir.",
            },
            {
                baslik: "Eğimli arazide konumlanma",
                metin:
                    "Havza çevresindeki bazı sahalar düz değil hafif eğimlidir; platformların çoğu belirli bir eğim açısının üzerinde güvenli çalışmaz. Eğim açısı üreticinin belirttiği sınırın altında kalmalıdır; bu sınır aşılıyorsa makine farklı bir noktadan konumlandırılır veya arazi düzeltmesi (takoz, geçici platform) değerlendirilir.",
            },
            {
                baslik: "Yük dağıtıcı plaka ile zemin koruma",
                metin:
                    "Yumuşak veya belirsiz taşıma kapasiteli zeminlerde, makinenin ayak izlerine yük dağıtıcı plaka yerleştirilerek nokta basıncı azaltılır. Bu, hem makinenin batmasını önler hem zemine kalıcı iz bırakmasını azaltır. Plaka kullanımı zeminin durumuna göre önceden planlanır; sahada son dakika improvize edilmez.",
            },
            {
                baslik: "Hava koşulunun zemin durumuna etkisi",
                metin:
                    "Yağış sonrası hem havza sahalarında hem zeytin bahçelerinde zemin taşıma kapasitesi düşer; bu dönemlerde çalışma ya ertelenir ya da daha hafif/paletli bir makineyle sürdürülür. Kuru dönemde aynı zeminde çok daha rahat çalışılır. Hava tahminini ve zeminin son durumunu çalışma tarihine yakın tekrar kontrol ediyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre makine ve hazırlık seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, havza-zeytin hattındaki tipik zemin durumlarını özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Risk", "Uygun sınıf", "Ek hazırlık"],
                    satirlar: [
                        ["Dolgu/stabilize stok sahası", "Batma", "Paletli veya destekli tekerlekli", "Yük dağıtıcı plaka"],
                        ["Kuru toprak yol", "Düşük", "Standart arazi tipi", "Genelde gerekmez"],
                        ["Sulama sonrası yumuşak toprak", "Batma/kayma", "Kompakt, hafif sınıf", "Zemin kuruma beklenir"],
                        ["Hafif eğimli açık saha", "Devrilme", "Eğim sınırına uygun model", "Takoz/destek"],
                        ["Yağış sonrası genel saha", "Genel taşıma düşüşü", "Erteleme veya paletli", "Hava takibi"],
                    ],
                },
            },
            {
                baslik: "Zemin bilgisini önceden toplama",
                paragraflar: [
                    "Zor zemin işlerinde teklif öncesi zeminin tipini (toprak, dolgu, stabilize, çakıl), son sulama veya yağış tarihini ve varsa eğim açısını soruyoruz. Bu bilgiler net değilse, sahaya gitmeden önce fotoğraf veya kısa bir açıklama istiyoruz; belirsizlikle gelen bir makine sahada uygun olmayabilir.",
                    "Zeminin durumu çalışma tarihine yakın değişebileceğinden (özellikle yağış sonrası), son kontrolü çalışma gününe yakın tekrar yapıyoruz.",
                ],
            },
            {
                baslik: "Paletli taşıyıcı seçeneğinin avantajı",
                paragraflar: [
                    "Paletli taşıyıcılı platformlar, tekerlekli modellere göre zemine daha geniş bir yüzeyden basınç uygular; bu, yumuşak veya düzensiz zeminlerde batma riskini belirgin şekilde azaltır. Ancak bu modeller genellikle daha yavaş hareket eder ve her iş için gerekli değildir; zeminin gerçek durumu değerlendirilmeden bu sınıf otomatik önerilmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Stok sahamızın zemini dolgu, makine batar mı?",
                cevap:
                    "Dolgu zeminin sıkıştırma derecesine bağlıdır; bu yüzden zeminin son durumu ve varsa sıkıştırma raporu önceden sorulur. Belirsizlik varsa yük dağıtıcı plaka ile desteklenmiş tekerlekli veya paletli taşıyıcılı bir model öneririz. Zemin fotoğrafını paylaşırsanız, batma riskini değerlendirip uygun hazırlığı önceden planlarız.",
            },
            {
                soru: "Zeytin bahçesinde sulama sonrası çalışabilir miyiz?",
                cevap:
                    "Sulama hemen sonrası zemin yumuşadığı için önerilmez; mümkünse zeminin kuruması beklenir. Acil bir ihtiyaç varsa daha hafif ve kompakt bir sınıfla, dikkatli güzergâh seçimiyle çalışma değerlendirilebilir, ancak bu durumda batma riski tamamen ortadan kalkmaz. Sulama tarihinizi ve toprak tipini bildirirseniz en güvenli seçeneği öneririz.",
            },
            {
                soru: "Sahamız hafif eğimli, hangi makine uygundur?",
                cevap:
                    "Eğim açısını ölçüp üreticinin belirttiği güvenli eğim sınırıyla karşılaştırırız; sınır içindeyse standart bir model, sınır aşılıyorsa farklı konumlandırma veya takoz/destek gerekir. Eğim açısını yaklaşık olarak bildirirseniz, sahaya gelmeden ön değerlendirme yaparız; kesin karar sahada eğim ölçümüyle netleşir.",
            },
            {
                soru: "Yük dağıtıcı plaka ne işe yarar, her işte gerekir mi?",
                cevap:
                    "Plaka, makinenin ayak izlerindeki nokta basıncını geniş bir yüzeye yayarak batma riskini azaltır. Her işte gerekmez — sert ve kuru zeminlerde gereksizdir; yumuşak veya belirsiz taşıma kapasiteli zeminlerde standart hazırlığımızdır. Zeminin durumunu bildirirseniz gerekip gerekmediğini önceden söyleriz.",
            },
            {
                soru: "Yağış sonrası çalışma tarihini erteler misiniz?",
                cevap:
                    "Zeminin taşıma kapasitesi ciddi düştüyse evet, güvenlik nedeniyle erteleme öneririz; alternatif olarak daha hafif/paletli bir sınıfla sürdürme de değerlendirilebilir. Çalışma tarihine yakın hava durumu ve zemin durumunu tekrar kontrol ediyoruz; son karar bu güncel bilgiyle verilir. Tarihinizde esneklik varsa kuru bir güne kaydırmak en güvenli seçenektir.",
            },
            {
                soru: "Paletli taşıyıcı standart tekerlekliden ne kadar farklı çalışır?",
                cevap:
                    "Paletli modeller zemine daha geniş yüzeyden basınç uyguladığı için yumuşak zeminde daha stabildir, ancak genellikle daha yavaş hareket eder ve manevra alanı standart modele göre biraz daha geniş gerekebilir. Zeminin gerçek durumu belirsizse önce standart model ile paletli arasındaki farkı ve maliyeti birlikte değerlendiririz; her iş için otomatik paletli önerilmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Havza stok sahaları ve zeytin bahçesi toprak yollarının genel zemin karakteri kamuya açık bilgidir; yük dağıtıcı plaka ve eğim değerlendirme yöntemi firma pratiğidir.",
    },
};
