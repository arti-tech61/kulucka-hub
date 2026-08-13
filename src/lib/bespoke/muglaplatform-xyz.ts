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
};
