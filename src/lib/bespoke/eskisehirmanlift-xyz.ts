// ═══════════════════════════════════════════════════════════════════════════
// eskisehirmanlift.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: Eskişehir OSB SANAYİ tesisleri için manlift kiralama.
// Açı: İLK KİRALAMA REHBERİ — OSB'de ilk kez kiralayan işletmeye makine
// seçim rehberliği (yükseklik-altı-zemin soru seti), OSB genel tanıtımı,
// karşılaştırmalı fiyat mantığı.
//
// ⚠️ Kardeş dosyalar (eskisehirmanlift-net.ts: üretim hattı bakımı,
// eskisehirplatform-org.ts: havacılık-savunma/kurumsal, manlifteskisehir-com.ts:
// duruş dönemi kapasite) aynı ilçe adlarını farklı açılarla zaten işliyor.
// Bu dosya onların hiçbirini tekrarlamaz; odağı SEÇİM REHBERLİĞİ ve İLK
// KİRALAMA SÜRECİDİR — hangi soru hangi makineye götürür, fiyat mantığı
// nasıl karşılaştırılır, ilk temas nasıl işler.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir genel bölge bilgisi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ESKISEHIRMANLIFT_XYZ: Record<string, BespokeIcerik> = {
    "bolge:eskisehir": {
        h1: "Eskişehir'de İlk Kez Manlift Kiralayacaklar İçin Rehber",
        giris:
            "Eskişehir'de sanayi dokusu genç ve çeşitlidir — seramik, gıda, metal işleme, beyaz eşya yan sanayi ve savunma tedarikçileri aynı şehirde yan yana çalışır. Bu çeşitlilik, ilk kez manlift kiralayacak bir işletme sahibinin karşısına şaşırtıcı sayıda seçenek çıkarır: makaslı mı eklemli mi, akülü mü dizel mi, hangi metraj yeter. Yanlış seçimin bedeli iki türlüdür — ya gereğinden büyük ve pahalı bir makine kiralanır ya da sahaya gelen makine işi yapamaz ve gün kaybedilir. Bu rehberin amacı, bu kararı üç basit soruya indirmek ve ilk kiralamanın telefon görüşmesinden teslimata kadar nasıl işlediğini önceden göstermektir. Şehrin OSB'leri, merkez ilçeleri ve çevre il sanayi bölgeleri arasında fiyat ve teslim süresi farklılık gösterebilir; bu farkın nereden geldiğini bilmek de kiralama kararını kolaylaştırır.",
        maddeler: [
            {
                baslik: "Üç soruluk seçim yöntemi",
                metin:
                    "Doğru makineye ulaşmanın en kısa yolu üç sorudan geçer. Birincisi, hedefin gerçek yüksekliği nedir — bu ölçüye sepet tabanının hedefin biraz altında kalacağı payı (yaklaşık iki metre) eklemek gerekir. İkincisi, hedefin altındaki alan boş mu yoksa bir engel (tezgâh, raf, boru hattı) mi var — boşsa geniş sepetli makaslı sınıf yeterlidir, doluysa bomu kırılabilen eklemli sınıf gerekir. Üçüncüsü, çalışma ortamı kapalı mı açık mı ve zemin nasıl — kapalı ve düz zeminde akülü, açık ve düzensiz zeminde dizel veya 4x4 sınıf tercih edilir. Bu üç cevap, Eskişehir'deki taleplerin büyük bölümünü sahaya çıkmadan netleştirir.",
            },
            {
                baslik: "Şehrin tipik tavan yüksekliği ve metraj mantığı",
                metin:
                    "Eskişehir'deki orta ölçekli atölye ve üretim holünün tavan yüksekliği genellikle 5-9 metre bandındadır; bu, 7-11 metre çalışma yüksekliği sınıfına karşılık gelir ve filodaki en yaygın, en kolay bulunan bant budur. İlk kiralamada sık görülen bir eğilim, 'büyük olsun ki her ihtiyacı karşılasın' düşüncesiyle gereğinden yüksek bir sınıf istemektir; ancak büyük makine dar bir atölyede hem manevra güçlüğü hem gereksiz maliyet yaratır. Metrajı büyütmenin tek geçerli nedeni ölçülmüş bir yüksek hedeftir, tahmini bir güvenlik payı değildir.",
            },
            {
                baslik: "Sahaya çıkmadan önce alınacak üç ölçü",
                metin:
                    "İlk kiralamada en sık yaşanan hayal kırıklığı, makinenin sahaya gelip işe yaramamasıdır ve bunun kökeninde genellikle eksik ölçü vardır. Üç ölçü bu riski ortadan kaldırır: kapı veya geçit genişliği (makine içeri girebilecek mi), çalışma noktasındaki manevra alanı (makine dönebilecek mi) ve hedefin gerçek yüksekliği (göz kararı değil, şeritmetreyle). Bu üç ölçüyü birkaç fotoğrafla birlikte paylaşan işletme, teklif aşamasında zaten doğru makineyi almış olur.",
            },
            {
                baslik: "Fiyat karşılaştırmasının doğru okunması",
                metin:
                    "İlk kiralamada işletmeler genellikle birden fazla firmadan fiyat alır ve rakamları yalnızca toplam üzerinden karşılaştırır; ancak doğru karşılaştırma kalem kalem yapılmalıdır — makine kirası, nakliye, operatör (varsa) ve sigorta ayrı satırlarda görünmelidir. Düşük görünen bir toplam, nakliyeyi ayrı fatura eden veya sigortayı kapsam dışı bırakan bir teklif olabilir. Aynı süre ve aynı makine sınıfı için alınan teklifleri kalem kalem yan yana koymak, gerçek farkı ortaya çıkarır.",
            },
            {
                baslik: "Süre kararı: günlük mü, haftalık mı",
                metin:
                    "İşin bir-iki gün süreceği kesinse günlük tarife doğal seçimdir; üç günü aşan işlerde haftalık paket genellikle daha ekonomiktir çünkü nakliye ve kurulum bedeli günlere değil haftaya yayılır. Süre belirsizse, kısa süreyle başlayıp gerekirse uzatmak, uzun süre alıp erken iade etmekten her zaman daha ucuza gelir — erken iadede nakliye ve kurulum bedeli genellikle iade edilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eskişehir'de sık gelen işler ve tipik makine eşleşmesi",
                paragraflar: [
                    "İlk kiralamada en sık karşılaştığımız iş tiplerinin tipik çözümü aşağıdadır; kesin karar her zaman üç soruyla ve ölçüyle netleşir.",
                ],
                tablo: {
                    basliklar: ["İş", "Tipik sınıf", "Süre", "Dikkat noktası"],
                    satirlar: [
                        ["Atölye tavan aydınlatması", "Akülü makaslı 8 m", "1 gün", "Kapı ölçüsü"],
                        ["Tezgâh üstü nokta bakımı", "Kompakt eklemli", "1 gün", "Altı dolu → eklemli"],
                        ["Depo raf üstü işleri", "Akülü makaslı 10-12 m", "1-3 gün", "Koridor genişliği"],
                        ["Cephe/tabela (sundurmalı)", "Eklemli 14-16 m", "Yarım-1 gün", "Sundurma → eklemli"],
                        ["Açık sahada direk/aydınlatma", "Dizel 4x4 teleskopik", "1 gün", "Zemin tipi"],
                    ],
                },
            },
            {
                baslik: "İlk kiralama süreci: telefondan teslimata",
                paragraflar: [
                    "İlk kiralama süreci dört adımdan oluşur ve genellikle bir-iki gün içinde tamamlanır. Önce işiniz anlatılır ve üç soru cevaplanır; ardından üç ölçü ve birkaç fotoğraf paylaşılır — bu adım beş dakika sürer ama teklifin doğruluğunu belirler. Sonra teklif gelir; makine sınıfı, süre, nakliye ve varsa operatör bedeli ayrı satırlarda görünür. Son adımda teslimatta makine tanıtımı yapılır — kumandalar, acil iniş sistemi ve temel güvenlik noktaları gösterilir.",
                    "En sık atlanan adım ikincisidir ve buradaki eksiklik sahada ortaya çıkar. Ölçü ve fotoğraf paylaşmadan alınan bir teklif, sahaya varıldığında değişebilir; bu da hem zaman hem güven kaybı demektir. İlk kiralamanızı sorunsuz geçirmenin en garantili yolu, bu adımı atlamamaktır.",
                ],
            },
            {
                baslik: "Makaslı mı eklemli mi: pratik ayrım",
                paragraflar: [
                    "İki sınıf arasındaki fark çoğu zaman sanıldığından basittir. Hedefin tam altına makine park edilebiliyorsa makaslı sınıf tercih edilir — sepeti daha geniştir, kullanımı daha basittir ve fiyatı daha düşüktür. Hedefin altına park edilemiyorsa (bir tezgâh, raf, boru hattı veya sundurma engel oluşturuyorsa) eklemli sınıf gerekir; bomu kırılarak engelin üzerinden veya yanından erişim sağlar.",
                    "Bazı durumlarda hedefin bir kısmına açık zeminden, bir kısmına engelli bölgeden erişilir. Bu gri bölgede iki seçeneği maliyetiyle birlikte sunuyoruz: daha ucuz makaslı sınıf + tamamlayıcı yöntem mi, yoksa tek eklemli makineyle tüm işi bitirmek mi. Karar, rakamlar yan yana konduğunda kendiliğinden netleşir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hiç manlift kiralamadık, nereden başlamalıyız?",
                cevap:
                    "Telefonla işinizi anlatmanız yeterlidir. Üç soruyla (hedef yüksekliği, altının boş mu dolu mu olduğu, ortam-zemin durumu) makine sınıfı netleşir, birkaç ölçü ve fotoğrafla teklif kesinleşir. Terminoloji bilmenize gerek yoktur; 'şu noktaya ulaşmam lazım' cümlesi yeterli bir başlangıçtır. İlk kiralamanın tamamı genellikle bir-iki gün içinde kurulur ve şehir merkezinde teslimat çoğu zaman ertesi güne yetişir.",
            },
            {
                soru: "En büyük makineyi kiralarsam her işi garantiye alır mıyım?",
                cevap:
                    "Hayır, tam tersi bir risk doğurur. Büyük sınıf bir makine dar bir atölyede manevra güçlüğü yaşar, daha geniş bir şaseye sahiptir (kapıdan giremeyebilir), daha yüksek kira bedeli taşır ve gereksiz ağırlığıyla zemine daha fazla yük bindirir. Doğru yaklaşım, hedefinizi gerçek ölçüyle belirlemek ve buna yaklaşık iki metrelik bir uzanma payı eklemektir; makine işinize göre seçilmeli, tahmini bir endişeye göre değil.",
            },
            {
                soru: "Farklı firmalardan aldığımız fiyatlar çok farklı, nasıl karşılaştırmalıyız?",
                cevap:
                    "Toplam rakamı değil kalemleri karşılaştırın. Makine kirası, nakliye, operatör (varsa) ve sigorta her teklifte ayrı satırda görünmelidir; düşük görünen bir toplam, nakliyeyi sonradan ekleyen veya sigortayı kapsam dışı bırakan bir teklif olabilir. Aynı makine sınıfı ve aynı süre için alınan tekliflerin kalemlerini yan yana koyduğunuzda gerçek fark ortaya çıkar. Bizden aldığınız teklifte her kalem ayrı satırda görünür; karşılaştırmanızı kolaylaştırmak için böyle hazırlıyoruz.",
            },
            {
                soru: "Ölçü almadan telefonla kesin fiyat alabilir miyiz?",
                cevap:
                    "Kaba bir fikir verebiliriz ama kesin teklif için üç ölçü gerekir: kapı-geçit genişliği, çalışma noktasındaki manevra alanı ve hedefin gerçek yüksekliği. Bu ölçüler olmadan verilen bir fiyat, sahada makinenin değişmesi gerektiğinde değişebilir. Ölçüleri birkaç fotoğrafla birlikte paylaşırsanız, teklif hem daha hızlı hem daha kesin gelir — bu adım beş dakikanızı alır ama sahadaki sürprizi sıfırlar.",
            },
            {
                soru: "İşimiz bir gün mü sürer üç gün mü bilmiyoruz, nasıl karar vermeliyiz?",
                cevap:
                    "Belirsizlik varsa kısa süreyle başlamanızı öneririz. Bir-iki günlük günlük tarifeyle kiralayıp iş uzarsa uzatmak, baştan haftalık paket alıp erken iade etmekten neredeyse her zaman daha ucuza gelir — çünkü erken iadede nakliye ve kurulum bedeli genellikle geri ödenmez. İşinizin üç günü kesin aşacağını biliyorsanız, haftalık paket doğrudan daha ekonomiktir çünkü sabit maliyetler günlere değil haftaya yayılır.",
            },
            {
                soru: "Makaslı ile eklemli arasında hangisini seçeceğimizi bilmiyoruz, nasıl karar veririz?",
                cevap:
                    "Tek soruyla: hedefin tam altına makine park edilebiliyor mu? Edilebiliyorsa makaslı sınıf hem daha ucuz hem daha kullanışlıdır. Edilemiyorsa — aranızda bir tezgâh, raf veya sundurma varsa — eklemli sınıf gerekir, çünkü bomu kırılarak engelin üzerinden veya yanından erişim sağlar. Emin değilseniz, çalışma noktasının ve etrafının fotoğrafını gönderin; hangi sınıfın gerektiğini biz belirleyip nedenini açıklarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir'in sanayi çeşitliliği ve tipik atölye tavan yüksekliği kamuya açık genel bilgidir; üç soru yöntemi ve fiyat karşılaştırma çerçevesi firma pratiğidir.",
    },

    "bolge:organize-sanayi-bolgesi": {
        h1: "Eskişehir OSB'de İlk Kez Manlift Kiralayacak İşletmeler İçin Rehber",
        giris:
            "Eskişehir Organize Sanayi Bölgesi, şehrin en yoğun üretim hacmine sahip bölgesidir ve içinde metal işleme, gıda, plastik, mobilya ve tedarikçi yan sanayi gibi birbirinden farklı üretim tipleri barındırır. Bu çeşitlilik, OSB'de ilk kez kiralama yapacak bir işletmenin karşısına geniş bir seçenek yelpazesi çıkarır ve doğru kararı vermek için OSB'ye özgü birkaç ek etken devreye girer: parsellerin büyüklüğü, üretim holünün tipik tavan bandı ve komşu işletmelerle nakliye paylaşma imkânı. Bu rehber, OSB içinde ilk kiralama yapacak bir işletmenin karar sürecini kısaltmayı ve makine seçimindeki üç temel soruyu OSB'nin kendi koşullarına göre uyarlamayı amaçlar. OSB'nin geniş ve düzenli parsel yapısı, makine sevkiyatını ve saha içi manevrayı kent merkezine göre kolaylaştırır; bu da hem teslim süresini kısaltır hem makine seçeneklerini genişletir.",
        maddeler: [
            {
                baslik: "OSB'ye özgü dördüncü soru: parsel içi erişim",
                metin:
                    "Kent merkezindeki bir işletmeden farklı olarak, OSB'deki bir talepte üç temel sorunun (yükseklik, altı boş mu, zemin-ortam) yanına dördüncü bir soru eklenir: makine parsele nasıl girecek? OSB'deki parseller genellikle geniş girişli olsa da, bazı işletmelerde iç avlu darlığı veya malzeme istifi giriş güzergâhını daraltabilir. Bu yüzden OSB talebi aldığımızda parsel girişinin ve iç yolun fotoğrafını da isteriz; bu, sahaya varıldığında 'makine içeri giremedi' sürprizini önler.",
            },
            {
                baslik: "Üretim holünün tipik tavan bandı",
                metin:
                    "OSB'deki üretim holleri genellikle kent merkezindeki atölyelerden daha yüksek tavanlıdır; 6-10 metre bandı standarttır ve bu, 8-12 metre çalışma yüksekliği sınıfına karşılık gelir. Bazı hollerde asma vinç sistemi veya yüksek raf sistemi bulunur; bu durumda hedefin altındaki alan dolu sayılır ve eklemli sınıf gerekir. İlk kiralamada holünüzün tipini (düz açık alan mı, vinçli mi, raflı mı) belirtmeniz, makine sınıfını doğrudan netleştirir.",
            },
            {
                baslik: "Geniş parselin makine seçeneğine etkisi",
                metin:
                    "OSB'nin geniş ve düz parsel yapısı, kent merkezine göre daha büyük sınıf makinelerin rahat manevra yapmasına imkân tanır. Bu, özellikle yüksek çalışma gerektiren işlerde avantajdır — kent merkezinde dar sokak nedeniyle kompakt sınıfa mahkûm kalınan bir iş, OSB'de daha geniş bir seçenek havuzundan çözülebilir. Yine de her parsel aynı derecede geniş değildir; eski nesil parsellerde iç yol daha dardır ve bu, ölçü paylaşımını önemli kılar.",
            },
            {
                baslik: "Komşu parsellerle nakliye paylaşımı",
                metin:
                    "OSB'nin kümelenmiş yapısı, birden fazla işletmenin taleplerini aynı güne yazdırmasını kolaylaştırır. Aynı cadde veya aynı blok üzerindeki işletmeler, kısa süren işlerini (birkaç aydınlatma, bir tabela, bir cephe noktası) aynı güne topladığında makine parselden parsele kısa mesafede ilerler ve nakliye bedeli paylaşılır. İlk kiralamanızda komşu işletmelere haber vermeniz, hem sizin hem onların birim maliyetini düşürür.",
            },
            {
                baslik: "OSB'de teslim süresi ve planlama",
                metin:
                    "OSB'nin geniş yol ağı ve düzenli adresleme sistemi, teslim süresini kent merkezine göre genellikle kısaltır; filo OSB içinde çalışıyorsa aynı gün teslimat sık rastlanan bir durumdur. Ancak OSB genelinde yoğun bir talep dönemine denk gelen taleplerde (örneğin birden fazla tesisin aynı haftada bakım yaptırması) teslim süresi uzayabilir; bu yüzden tarihinizi mümkün olduğunca erken bildirmeniz, özellikle ilk kiralamanızda, size en geniş seçeneği sunar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB'de hol tipine göre makine seçimi",
                paragraflar: [
                    "OSB'deki üretim holünün tipi, makine sınıfını doğrudan belirler. Aşağıdaki tablo, ilk kiralamada en sık karşılaştığımız hol tiplerini özetler.",
                ],
                tablo: {
                    basliklar: ["Hol tipi", "Tipik tavan", "Altı durumu", "Uygun sınıf"],
                    satirlar: [
                        ["Düz açık üretim alanı", "6-8 m", "Boş", "Akülü makaslı 8-10 m"],
                        ["Vinçli üretim holü", "8-10 m", "Vinç rayı dolu", "Kompakt eklemli"],
                        ["Yüksek raflı depo", "8-10 m", "Raf dolu", "Akülü makaslı 10-12 m, dar koridor"],
                        ["Açık saha/yükleme alanı", "—", "Açık", "Dizel 4x4 teleskopik"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada parsel bilgisini paylaşmanın değeri",
                paragraflar: [
                    "OSB'de ilk kez kiralama yapan işletmelerin çoğu, parsel numarasını ve genel adresi paylaşmakla yetinir; ancak parsel girişinin genişliği, iç yolun durumu ve varsa malzeme istif alanının konumu, makinenin sahaya sorunsuz girip giremeyeceğini belirler. Bu bilgileri ilk temas anında istememizin nedeni, sahada 'makine parsele giremedi' gibi bir kaybı önlemektir.",
                    "Parsel bilgisi eksik geldiğinde de kiralama süreci başlar, ancak makine seçimi daha temkinli (genellikle daha kompakt) yapılır; bu bazen gereğinden küçük bir makineyle işe başlamak anlamına gelebilir. Baştan doğru bilgi, en ekonomik ve en uygun makineyi ilk seferde seçmemizi sağlar.",
                ],
            },
            {
                baslik: "OSB'de tekrarlayan ihtiyaç için yıllık planlama",
                paragraflar: [
                    "OSB'deki üretim tesislerinin çoğunda yüksek iş ihtiyacı tek seferlik değil, periyodik bakım kapsamında tekrarlar — aydınlatma değişimi, vinç rayı kontrolü, çatı bakımı gibi. İlk kiralamasını başarıyla tamamlayan işletmelere, bu kalemleri yıllık bir bakım takvimine dönüştürmelerini öneriyoruz; böylece her seferinde yeniden süreç başlatmak yerine, önceden belirlenmiş bir program üzerinden ilerlenir.",
                    "Yıllık planlama, aynı zamanda komşu işletmelerle nakliye paylaşımını da kolaylaştırır; düzenli bir takvim, hangi ayda hangi işletmenin ihtiyacı olduğunu önceden bilmeyi ve ortak günleri buna göre kurmayı mümkün kılar.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'de ilk kez kiralama yapıyoruz, standart üç soru yeterli mi?",
                cevap:
                    "Temel üç soru (yükseklik, altı boş mu, zemin-ortam) OSB'de de geçerlidir ama bir soru daha ekleriz: makine parsele nasıl girecek? OSB'deki parsellerin çoğu geniş girişlidir ama bazı işletmelerde iç avlu darlığı veya malzeme istifi giriş güzergâhını daraltabilir. Parsel girişinin ve iç yolun birkaç fotoğrafını paylaşırsanız, bu dördüncü soruyu da baştan netleştirmiş oluruz ve sahada sürpriz yaşanmaz.",
            },
            {
                soru: "Holümüzde asma vinç var, bu makine seçimini nasıl etkiler?",
                cevap:
                    "Vinç rayının bulunduğu bölge, hedefin altını 'dolu' sayılır kategorisine sokar; bu durumda geniş sepetli makaslı sınıf yerine bomu kırılabilen eklemli sınıf gerekir, çünkü makine vinç rayının altına değil yanına konumlanıp bomu üzerinden geçirmelidir. Ayrıca çalışma sırasında vincin hareketsiz (kilitli) tutulması standart bir güvenlik önlemidir. Holünüzün vinç rayı yüksekliğini ve hedefin vinç rayına göre konumunu belirtirseniz, doğru sınıfı baştan öneririz.",
            },
            {
                soru: "OSB dışındaki bir atölyeye göre burada daha büyük makine mi bulabiliriz?",
                cevap:
                    "Genellikle evet. OSB'nin geniş ve düz parsel yapısı, büyük sınıf makinelerin rahat manevra yapmasına imkân tanır; bu da kent merkezindeki dar sokaklı bir adrese göre daha geniş bir seçenek havuzu anlamına gelir. Ancak her parsel aynı derecede geniş değildir — özellikle eski nesil parsellerde iç yol dar olabilir. Parselinizin giriş ve iç yol ölçüsünü paylaşırsanız, hangi büyüklükte makinenin rahat çalışabileceğini netleştiririz.",
            },
            {
                soru: "Komşu işletmeyle aynı güne yazılmak nasıl işler?",
                cevap:
                    "Basit bir koordinasyonla işler: siz talep açtığınızda, aynı cadde veya blok üzerindeki komşu işletmelere de haber vermenizi öneririz. Birden fazla işletme aynı güne yazıldığında makine parselden parsele kısa mesafede ilerler ve nakliye bedeli katılan işletme sayısına bölünür. Özellikle yarım günü doldurmayan küçük işler (birkaç armatür, bir tabela) için bu model belirgin bir tasarruf sağlar. Talebinizi açarken 'komşularımla birlikte planlanabilir mi' diye belirtmeniz yeterlidir.",
            },
            {
                soru: "OSB'de teslim süresi ne kadar, aynı gün mümkün mü?",
                cevap:
                    "Filomuz o an OSB içinde çalışıyorsa aynı gün teslimat sık rastlanan bir durumdur; OSB'nin geniş yol ağı ve düzenli adresleme sistemi bunu kolaylaştırır. Ancak OSB genelinde birden fazla tesisin aynı haftada bakım yaptırdığı yoğun dönemlerde süre uzayabilir. İlk kiralamanızda tarihinizi mümkün olduğunca erken bildirmeniz, size en geniş makine seçeneğini ve en kısa teslim süresini sunar.",
            },
            {
                soru: "Yılda birkaç kez tekrarlayan bakım işimiz olacak, her seferinde yeniden mi arayalım?",
                cevap:
                    "Gerek yok; ilk kiralamanız sorunsuz geçtiyse, tekrarlayan kalemlerinizi (aydınlatma, vinç rayı kontrolü, çatı bakımı gibi) yıllık bir bakım takvimine dönüştürmenizi öneririz. Bu takvim hem sizin için her seferinde süreç başlatma yükünü kaldırır hem de komşu işletmelerle nakliye paylaşımını önceden planlamayı mümkün kılar. Tahmini kalemlerinizi ve tercih ettiğiniz ayları paylaşırsanız, yıllık programı birlikte kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir OSB'nin geniş parsel yapısı ve çok sektörlü üretim dokusu kamuya açık genel bilgidir; parsel erişim sorusu ve komşu paylaşım modeli firma pratiğidir.",
    },

    "bolge:odunpazari": {
        h1: "Odunpazarı'nda İlk Kez Manlift Kiralayacak İşletmeler İçin Rehber",
        giris:
            "Odunpazarı, Eskişehir'in tarihi merkezini ve onun çevresindeki karma yapıyı barındırır: küçük atölyeler, esnaf işyerleri, ticaret binaları ve konut altı işyerleri iç içe geçmiş bir dokuda yer alır. Bu dokuda ilk kez manlift kiralayacak bir işletmenin karşılaştığı asıl kısıt, OSB'deki gibi geniş bir parsel değil, dar bir sokak veya küçük bir işyeri cephesidir. Bu rehber, ilçenin bu kompakt yapısına özgü ek soruları — sokak genişliği, park imkânı, komşu işyerleriyle mesafe — üç temel seçim sorusuna (yükseklik, altı boş mu, zemin-ortam) nasıl ekleyeceğinizi anlatır. Odunpazarı'nda doğru karar, en büyük makineyi değil, sokağa sığan ve işi tam karşılayan makineyi seçmektir.",
        maddeler: [
            {
                baslik: "Sokak genişliği: makine seçiminin ilk sınırı",
                metin:
                    "İlçenin merkez sokaklarının bir kısmı dar ve çift yönlü araç trafiğine kapalıdır; bu adreslerde standart genişlikte bir makine sığmayabilir. İlk kiralamada bu yüzden önce sokağın genişliğini ve varsa park kısıtını sorarız — bazı adreslerde makine yalnızca belirli saatlerde (örneğin trafiğin seyrek olduğu erken saatlerde) girebilir. Dar şaseli kompakt sınıflar, ilçenin bu dokusunda standart çözümdür.",
            },
            {
                baslik: "Küçük işyerinde metraj gerçeği",
                metin:
                    "Odunpazarı'ndaki küçük atölye ve işyerlerinin tavan yüksekliği genellikle 3-6 metre bandındadır; bu, 5-8 metre çalışma yüksekliği sınıfına karşılık gelir ve büyük sınıf makinelere neredeyse hiç ihtiyaç duyulmaz. İlk kiralamada 'ne kadar büyük olursa o kadar iyi' düşüncesi burada özellikle sakıncalıdır — büyük bir makine hem dar sokağa sığmaz hem de küçük işyerinin önünde manevra yapamaz.",
            },
            {
                baslik: "Park ve teslimat saatinin planlanması",
                metin:
                    "İlçe merkezindeki yoğun yaya ve araç trafiği, teslimat saatini önemli bir planlama unsuru hâline getirir. Çoğu adreste sabahın erken saatleri veya öğle arası öncesi, hem park bulma hem trafik açısından en uygun dilimdir. İlk kiralamanızda teslimat saatini önceden konuşmak, makinenin sokakta beklemeden doğrudan işyerinize ulaşmasını sağlar.",
            },
            {
                baslik: "Konut altı işyerlerinde gürültü ve zaman kısıtı",
                metin:
                    "İlçenin bazı bölgelerinde işyerleri konut binalarının altında veya yakınında yer alır; bu adreslerde gürültülü çalışma saatleri (özellikle erken sabah ve akşam) kısıtlı olabilir. İlk kiralamada bu bilgiyi paylaşmanız, çalışma saatini komşu şikâyeti almadan planlamamızı sağlar; genellikle mesai saatleri içinde bir pencere yeterlidir.",
            },
            {
                baslik: "Küçük işlerde komşu esnafla birleştirme",
                metin:
                    "Odunpazarı'nın yoğun ve küçük ölçekli esnaf dokusu, komşu birleştirme modelinin en verimli çalıştığı ortamlardan biridir. Bir sokaktaki birkaç işyerinin küçük kalemleri (tabela, aydınlatma, cephe rötuşu) aynı güne yazıldığında makine kısa mesafelerle işyerinden işyerine ilerler ve nakliye bedeli bölünür. Tek başına ekonomik olmayan yarım saatlik bir iş, bu modelle makul bir bedele iner.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Odunpazarı'nda adres tipine göre makine seçimi",
                paragraflar: [
                    "İlçenin dokusunda erişim kısıtı, makine seçiminin belirleyici unsurudur. Aşağıdaki tablo, tipik adres tiplerinde uygun yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Adres tipi", "Ana kısıt", "Uygun sınıf", "Zamanlama notu"],
                    satirlar: [
                        ["Dar sokakta küçük atölye", "Sokak genişliği", "Dar şaseli kompakt", "Erken saat teslimat"],
                        ["Ticaret binası cephesi", "Yaya trafiği", "Kompakt akülü", "Öğle arası öncesi"],
                        ["Konut altı işyeri", "Gürültü/saat kısıtı", "Akülü, sessiz çalışma", "Mesai içi pencere"],
                        ["Meydan/çarşı çevresi", "Park ve manevra", "En kompakt sınıf", "Trafiğin seyrek olduğu saat"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada sokak bilgisini nasıl paylaşmalı",
                paragraflar: [
                    "Odunpazarı'nda ilk kiralama talebi aldığımızda, işyerinizin adresinin yanında sokağın genişliğini gösteren bir fotoğraf isteriz — sokağın en dar noktası, varsa park eden araçların bıraktığı geçiş payı ve işyerinizin giriş cephesi. Bu fotoğraf, telefonda verilen sözlü tarifin ötesinde net bir bilgi sağlar.",
                    "Sokağınız gerçekten çok darsa, bazı durumlarda makinenin bir kesişim noktasına park edip oradan kısa bir mesafeyi kendi gücüyle ilerlemesi gerekebilir; bu da planlamanın bir parçasıdır ve önceden bilinmesi gereken bir detaydır.",
                ],
            },
            {
                baslik: "Küçük işlerde fiyatı düşüren üç adım",
                paragraflar: [
                    "Odunpazarı'ndaki küçük ölçekli işlerde fiyatı en çok etkileyen üç karar vardır: doğru metrajın seçilmesi (gereğinden büyük makine almamak), teslimat saatinin trafiğe göre planlanması (bekleme süresini azaltmak) ve mümkünse komşu işyerleriyle aynı güne yazılmak (nakliyeyi paylaşmak).",
                    "Bu üç adımı birlikte uygulayan işletmeler, ilçede tek başına kiralamaya göre belirgin şekilde daha düşük bir toplam bedelle işlerini tamamlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sokağımız çok dar, makine hiç giremez mi?",
                cevap:
                    "Çoğu durumda dar şaseli kompakt sınıflarla giriş mümkündür; ancak bunu kesin söylemek için sokağın en dar noktasını gösteren bir fotoğraf isteriz. Bazı adreslerde makine bir kesişim noktasına kadar geliyor ve oradan işyerinize kısa bir mesafeyi kendi gücüyle ilerliyor. Gerçekten geçit vermeyen bir sokaksa, bunu sahaya gelmeden söyleriz ve alternatif bir yaklaşım (örneğin farklı bir giriş noktası) birlikte değerlendirilir.",
            },
            {
                soru: "İşyerimiz küçük, büyük makineye ihtiyacımız var mı?",
                cevap:
                    "Genellikle hayır. Odunpazarı'ndaki küçük işyerlerinin tavan yüksekliği çoğunlukla 3-6 metre bandındadır ve bu, 5-8 metre sınıfı bir makineyle rahatlıkla karşılanır. Büyük sınıf bir makine hem sokağa sığmayabilir hem de küçük işyerinin önünde manevra yapamaz. Hedefinizin gerçek yüksekliğini ölçüp bize bildirirseniz, işinize tam oturan ve en ekonomik sınıfı öneririz.",
            },
            {
                soru: "Teslimat saatini neden önceden konuşuyorsunuz?",
                cevap:
                    "Çünkü ilçe merkezindeki yoğun yaya ve araç trafiği, park bulmayı ve makinenin doğrudan işyerinize ulaşmasını zorlaştırabilir. Sabahın erken saatleri veya öğle arası öncesi genellikle en uygun dilimdir. Teslimat saatini önceden belirlediğimizde makine sokakta beklemeden işyerinize ulaşır; bu hem sizin hem bizim için zaman kazandırır.",
            },
            {
                soru: "İşyerimiz konut altında, gürültü nedeniyle çalışamaz mıyız?",
                cevap:
                    "Çalışabilirsiniz, ancak saat planlaması önemlidir. Konut binalarının altında veya yakınında yer alan işyerlerinde, gürültülü çalışma genellikle mesai saatleri içindeki bir pencereye yazılır; erken sabah veya akşam saatlerinden kaçınılır. İşyerinizin konumunu ve varsa bina yönetiminin bilgisini paylaşırsanız, çalışma saatini komşu şikâyeti almadan planlarız.",
            },
            {
                soru: "Komşu esnafla aynı güne yazılmak nasıl işler, kim organize ediyor?",
                cevap:
                    "Siz talep açtığınızda, aynı sokaktaki komşu işyerlerine haber vermenizi öneririz; birden fazla işyeri aynı güne yazıldığında makine kısa mesafelerle işyerinden işyerine ilerler ve nakliye bedeli paylaşılır. Organizasyonu biz üstleniriz — siz yalnızca komşularınıza haber verip taleplerini iletmelerini sağlarsınız. Tek başına yarım saatlik bir iş, bu modelle çok daha uygun bir bedele iner.",
            },
            {
                soru: "Meydan çevresinde bir tabela işimiz var, en uygun saat ne zaman?",
                cevap:
                    "Meydan ve çarşı çevresindeki adreslerde en uygun saat, yaya ve araç trafiğinin seyrek olduğu erken sabah dilimidir; bu saatte hem park bulmak hem manevra yapmak daha kolaydır. Meydan çevresinde ayrıca en kompakt sınıf makineler tercih edilir çünkü genellikle geniş manevra alanı yoktur. İşinizin konumunu ve tabelanın yüksekliğini bildirirseniz, en uygun saat ve makine sınıfını birlikte belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Odunpazarı'nın tarihi merkez dokusu ve dar sokak yapısı kamuya açık genel bilgidir; sokak fotoğrafı talebi ve komşu birleştirme modeli firma pratiğidir.",
    },

    "bolge:tepebasi": {
        h1: "Tepebaşı'nda İlk Kez Manlift Kiralayacak İşletmeler İçin Rehber",
        giris:
            "Tepebaşı, Eskişehir'in daha geniş caddeli ve nispeten yeni yapılaşmış bölgelerini barındırır; kamu binaları, eğitim kurumları, ticaret merkezleri ve orta ölçekli işyerleri bu ilçede yan yana bulunur. Odunpazarı'nın dar tarihi dokusuna kıyasla Tepebaşı'nda cadde genişliği ve bina önü manevra alanı genellikle daha rahattır, ancak bu ilçenin kendi kısıtları vardır: kamu ve eğitim binalarında giriş izni ve çalışma saati kuralları, ticaret merkezlerinde ise yaya yoğunluğu öne çıkar. Bu rehber, ilçede ilk kez kiralama yapacak bir işletmenin üç temel seçim sorusuna (yükseklik, altı boş mu, zemin-ortam) ek olarak sorması gereken kurum-özel soruları anlatır.",
        maddeler: [
            {
                baslik: "Kamu ve eğitim binalarında giriş izni sorusu",
                metin:
                    "Belediye binası, okul veya üniversite yerleşkesi gibi kurumsal adreslerde makine girişi genellikle önceden bildirim veya yazılı izin gerektirir. İlk kiralamada bu adresler için sorduğumuz ek soru, kurumun kendi giriş prosedürünün olup olmadığıdır; varsa bu prosedürü teklif aşamasında tamamlıyoruz ki makine kapıda beklemesin. Eğitim kurumlarında ayrıca öğrenci yoğunluğunun düşük olduğu saatler (teneffüs dışı, ders arası) tercih edilir.",
            },
            {
                baslik: "Cadde genişliğinin sağladığı makine esnekliği",
                metin:
                    "Tepebaşı'nın nispeten geniş caddeleri, Odunpazarı'na göre daha büyük sınıf makinelerin rahat çalışmasına imkân tanır. Bu, özellikle yüksek çalışma gerektiren ticaret merkezi veya kamu binası cephesi işlerinde avantajdır. Yine de her adres aynı derecede geniş değildir; bazı eski yapılaşmış sokaklarda park kısıtı olabilir, bu yüzden adres bazında değerlendirme yapılır.",
            },
            {
                baslik: "Ticaret merkezlerinde yaya trafiği ve saat planı",
                metin:
                    "Alışveriş ve ticaret yoğunluğu olan caddelerde, gündüz saatlerinde yaya trafiği makine çevresinde bir güvenlik önlemi gerektirir — çalışma alanının basit bir bariyerle ayrılması standart uygulamadır. Mümkünse bu tip işlerde teslimat ve çalışma saatini, yaya trafiğinin daha seyrek olduğu erken saatlere planlıyoruz; bu hem güvenlik hem hız açısından avantajlıdır.",
            },
            {
                baslik: "Orta ölçekli işyerlerinde standart metraj",
                metin:
                    "Tepebaşı'ndaki orta ölçekli işyeri ve ticaret binalarının tavan/cephe yüksekliği genellikle 4-8 metre bandındadır; bu, 6-10 metre çalışma yüksekliği sınıfına karşılık gelir. Kamu ve eğitim binalarının cephe işlerinde bina yüksekliği daha fazla olabilir; bu durumda hedefin gerçek yüksekliğinin ölçülmesi, doğru sınıfı belirlemek için özellikle önemlidir.",
            },
            {
                baslik: "İlk kiralamada belge ve sorumluluk sınırı",
                metin:
                    "Kurumsal adreslerde (kamu, eğitim, büyük ticaret merkezi) genellikle operatör kimlik bilgisi, makine kontrol raporu ve sigorta belgesi istenir. İlk kiralamada bu belgeleri teklif aşamasında hazır sunuyoruz ki kurumun kendi onay süreci makinenin teslimatını geciktirmesin. Belge talebi olmayan küçük ölçekli işyerlerinde bu adım daha basittir ve süreç doğrudan ölçü-teklif-teslimat şeklinde ilerler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tepebaşı'nda kurum tipine göre hazırlık",
                paragraflar: [
                    "İlçedeki farklı kurum tiplerinde ilk kiralama sürecinin gerektirdiği ek adımlar aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["Kurum tipi", "Ek gereksinim", "Uygun saat", "Uygun sınıf"],
                    satirlar: [
                        ["Belediye/kamu binası", "Yazılı izin/bildirim", "Mesai içi, önceden onaylı", "Akülü orta sınıf"],
                        ["Okul/üniversite", "Öğrenci yoğunluğu dışı saat", "Ders arası/teneffüs dışı", "Akülü, sessiz"],
                        ["Ticaret merkezi", "Yaya bariyeri", "Erken saat", "Kompakt akülü"],
                        ["Orta ölçekli işyeri", "Standart", "Esnek", "Akülü 6-10 m"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada kurum onay sürecini hızlandırmak",
                paragraflar: [
                    "Kamu veya eğitim kurumlarında ilk kez kiralama yapan işletmeler, genellikle kurumun kendi onay sürecini hafife alır ve bu, teslimat gününde beklenmedik bir gecikmeye yol açabilir. Bu riski azaltmak için, kurumun ilgili birimiyle (idari işler, yapı işleri gibi) teklif aşamasında iletişime geçmenizi ve gerekli belgeleri erken talep etmenizi öneririz.",
                    "Belgeleri erken tamamlayan bir talep, teslimat gününde herhangi bir bekleme yaşamaz; bu adımı atlayan bir talep ise kapıda saatler kaybedebilir.",
                ],
            },
            {
                baslik: "Cadde genişliğinden yararlanma: makine sınıfını doğru seçmek",
                paragraflar: [
                    "Tepebaşı'nın geniş caddeleri, ilk kiralamada işletmelerin gereğinden büyük bir makine talep etmesine de zemin hazırlayabilir; cadde geniş diye büyük makine kiralamak, işin gerçek ihtiyacını aşan bir maliyet doğurur. Doğru yaklaşım, cadde genişliğini bir imkân olarak görüp gerektiğinde daha büyük sınıfı değerlendirmek, ama kararı yine hedefin gerçek yüksekliğine göre vermektir.",
                    "Cadde genişliği yalnızca makinenin sahaya girip girmeyeceğini değil, aynı zamanda hangi sınıfların seçenek olarak sunulabileceğini belirler; bu bilgiyi ilk teklif aşamasında değerlendirmeye dahil ediyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Belediye binasında cephe işimiz var, izin süreci ne kadar sürer?",
                cevap:
                    "Kurumdan kuruma değişir; bazı belediye birimleri birkaç günlük bir yazılı bildirim ister, bazıları daha esnektir. İlk kiralamada size önerimiz, ilgili birimle (genellikle yapı işleri veya idari işler) teklif aşamasında iletişime geçmeniz ve gerekli belgeleri erken talep etmenizdir. Biz operatör kimlik bilgisi, makine kontrol raporu ve sigorta belgesini teklif aşamasında hazır sunuyoruz; bu, kurumun onay sürecini hızlandırır ve teslimat gününde bekleme yaşanmaz.",
            },
            {
                soru: "Okul bahçesinde bir aydınlatma işimiz var, hangi saatte çalışabiliriz?",
                cevap:
                    "Genellikle öğrenci yoğunluğunun düşük olduğu saatler tercih edilir — ders arası, teneffüs dışı zamanlar veya mümkünse tatil günleri. Okul yönetimiyle önceden konuşup uygun bir pencere belirlemenizi öneririz; biz de bu pencereye göre akülü ve sessiz çalışan bir makine sınıfı öneririz, çünkü kapalı veya yarı kapalı alan olabilir. Okulunuzun uygun gördüğü saat aralığını bildirirseniz, programı ona göre kurarız.",
            },
            {
                soru: "Ticaret merkezinin önünde çalışacağız, yayalar için güvenlik önlemi alıyor musunuz?",
                cevap:
                    "Evet, standart uygulamamız çalışma alanını basit bir bariyerle ayırmak ve mümkünse teslimat-çalışma saatini yaya trafiğinin seyrek olduğu erken saatlere planlamaktır. Bu hem yayaların güvenliği hem işin hızlı ilerlemesi için önemlidir. Ticaret merkezinizin en yoğun ve en sakin saatlerini bildirirseniz, çalışma programını buna göre kurarız.",
            },
            {
                soru: "Cadde genişse en büyük makineyi mi kiralamalıyız?",
                cevap:
                    "Hayır, cadde genişliği yalnızca bir imkân sunar; makine sınıfı yine hedefinizin gerçek yüksekliğine göre belirlenmelidir. Geniş cadde, ihtiyacınız gerçekten büyükse daha büyük sınıfı rahatça değerlendirmenizi sağlar, ama küçük bir iş için büyük makine kiralamak yalnızca maliyeti artırır. Hedefinizi ölçüp bildirirseniz, cadde genişliğinden yararlanarak en uygun ve en ekonomik sınıfı öneririz.",
            },
            {
                soru: "Orta ölçekli işyerimiz için belge gerekiyor mu?",
                cevap:
                    "Genellikle hayır; kamu, eğitim veya büyük ticaret merkezi gibi kurumsal adreslerde belge talebi standarttır, ancak küçük-orta ölçekli özel işyerlerinde bu adım çoğu zaman gerekmez. Yine de bazı bina yönetimleri (örneğin site veya iş merkezi yönetimi) kendi kurallarını uygulayabilir; adresinizi bildirirseniz bu tür bir gereksinim olup olmadığını sizin için kontrol ederiz.",
            },
            {
                soru: "İlk kiralamamızda süreç ne kadar sürer?",
                cevap:
                    "Standart bir özel işyerinde süreç genellikle bir-iki gün içinde tamamlanır: telefonla iş anlatılır, üç soru ve gerekirse kurum-özel ek sorular cevaplanır, ölçü ve fotoğraf paylaşılır, teklif gelir ve teslimat yapılır. Kurumsal bir adreste (kamu, eğitim) buna kurumun kendi onay süresi eklenir; bu süre kurumdan kuruma değişir ama erken başvuru bu süreyi kısaltır. Adresinizi ve kurum tipinizi belirtirseniz size gerçekçi bir zaman çizelgesi veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tepebaşı'nın kamu-eğitim-ticaret ağırlıklı yapılaşması kamuya açık genel bilgidir; kurum onay süreci ve cadde genişliği değerlendirmesi firma pratiğidir.",
    },

    "bolge:eskisehir-2-osb": {
        h1: "Eskişehir 2. OSB'de İlk Kez Manlift Kiralayacak İşletmeler İçin Rehber",
        giris:
            "Eskişehir 2. OSB, şehrin daha yeni gelişen sanayi bölgesidir ve içindeki tesislerin büyük kısmı henüz büyüme evresindedir — yeni hol inşaatları, devreye alma süreçleri ve kapasite artışı aynı dönemde yaşanabilir. Bu, ilk kez kiralama yapacak bir işletme için standart OSB rehberinden farklı birkaç soruyu gündeme getirir: hol yeni mi, montaj mı sürüyor yoksa üretim mi başladı, ve gelecekteki büyüme kapasiteyi nasıl etkileyecek. Bu rehber, 2. OSB'nin büyüme evresine özgü bu soruları, standart üç seçim sorusuyla (yükseklik, altı boş mu, zemin-ortam) birleştirerek ele alır.",
        maddeler: [
            {
                baslik: "Hol yeni mi, henüz montaj mı sürüyor?",
                metin:
                    "2. OSB'deki birçok tesis, ilk kiralama talebini hol henüz tamamlanmışken veya montaj sürerken yapar. Bu durumda saha, standart bir üretim tesisinden farklıdır — malzeme istifleri, montaj ekipleri ve henüz devreye alınmamış hatlar aynı hacimde bulunabilir. İlk kiralamada bu bilgiyi almamız, hem makine sınıfını (montaj alanında dar geçişler olabilir) hem çalışma saatini (montaj ekibiyle çakışmama) doğru planlamamızı sağlar.",
            },
            {
                baslik: "Yeni holün tipik tavan bandı",
                metin:
                    "2. OSB'de yeni inşa edilen holler genellikle eski nesil tesislere göre daha yüksek tavanlıdır; 8-12 metre bandı sık görülür. Bu, standart OSB'ye göre biraz daha büyük sınıf makinelerin (10-14 metre çalışma yüksekliği) tercih edilmesi anlamına gelebilir. Holünüzün proje yüksekliğini biliyorsanız (yapı ruhsatı veya mimari projeden), bu bilgi telefonda verilecek ilk tahmini büyük ölçüde netleştirir.",
            },
            {
                baslik: "Devreye alma sonrası dağınık iş listesi",
                metin:
                    "Üretim başladıktan sonraki ilk aylarda, tesislerde genellikle dağınık bir yüksek iş listesi birikir — eksik kalan aydınlatma noktaları, tamamlanmayan kablo kanalı işleri, son rötuşlar. İlk kiralamada bu listeyi tek seferde toplu olarak değerlendirmenizi öneririz; parça parça birkaç kez kiralamak yerine, tüm listeyi tek bir ziyarette kapatmak nakliye maliyetini önemli ölçüde düşürür.",
            },
            {
                baslik: "Sahada konaklayan makine seçeneği",
                metin:
                    "Büyüme evresindeki tesislerde iş listesi genellikle bir günü aşar; bu durumda makinenin günlük gidip gelmesi yerine sahada birkaç gün kalması ekonomik açıdan daha avantajlıdır. Nakliye bir kez ödenir, makine tesiste kalarak listedeki kalemleri sırayla tamamlar. İlk kiralamanızda iş listenizin toplam süresini tahmin edip paylaşırsanız, günlük mü yoksa konaklamalı mı kiralamanın daha ekonomik olduğunu birlikte hesaplarız.",
            },
            {
                baslik: "Gelecekteki büyümeyi kiralama kararına dahil etmek",
                metin:
                    "2. OSB'deki tesislerin çoğu, ilk yıllarında kapasite artışı planlar; bu, gelecekte yeni bir bölümün veya katın devreye alınacağı anlamına gelir. İlk kiralamada yalnızca o anki ihtiyacı değil, yakın gelecekteki büyüme planını da paylaşmanız, bizim sizinle uzun vadeli bir çerçeve kurmamızı ve her genişlemede yeniden süreç başlatmak yerine önceden tanımlı bir ilişki kurmamızı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "2. OSB'de tesis evresine göre yaklaşım",
                paragraflar: [
                    "Tesisin bulunduğu evre, ilk kiralamada dikkat edilmesi gereken noktaları değiştirir. Aşağıdaki tablo bu evreleri özetler.",
                ],
                tablo: {
                    basliklar: ["Evre", "Saha durumu", "Ana risk", "Öneri"],
                    satirlar: [
                        ["Montaj/inşaat sürüyor", "Malzeme istifi, ekip yoğun", "Dar geçiş, çakışma", "Saha koordinasyonu önceden"],
                        ["Devreye alma", "Dağınık kalem listesi", "Parça parça kiralama maliyeti", "Toplu ziyaret"],
                        ["İlk üretim ayları", "Standart üretim + son rötuşlar", "Belirsiz kalem sayısı", "Sahada konaklama değerlendirmesi"],
                        ["Kapasite artışı planlanan", "Büyüme öncesi", "Tekrar eden süreç yükü", "Uzun vadeli çerçeve"],
                    ],
                },
            },
            {
                baslik: "Montaj döneminde saha koordinasyonu",
                paragraflar: [
                    "Hol henüz montaj sürecindeyken kiralama yapan tesisler için, çalışma saatini montaj ekibinin programıyla çakışmayacak şekilde planlıyoruz. Bu genellikle montaj ekibinin mesai dışı olduğu saatler veya montajın henüz başlamadığı bir bölüm anlamına gelir.",
                    "Saha koordinasyonunu önceden kurmak, hem bizim ekibimizin hem montaj ekibinin aynı alanda güvenli çalışmasını sağlar; bu koordinasyonu genellikle tesisin proje yöneticisiyle birlikte kuruyoruz.",
                ],
            },
            {
                baslik: "İlk kiralamadan uzun vadeli çerçeveye geçiş",
                paragraflar: [
                    "2. OSB'deki büyüme evresindeki tesisler için, ilk kiralamanın ardından genellikle bir uzun vadeli çerçeve öneriyoruz: tesisin büyüme planı ve tahmini yıllık bakım ihtiyacı paylaşılır, biz de bu bilgiyle önceden tanımlı bir hizmet çerçevesi kurarız.",
                    "Bu çerçeve, her yeni bölüm devreye alındığında yeniden sıfırdan süreç başlatmak yerine, önceden kurulmuş bir ilişki üzerinden hızlıca ilerlemeyi sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Holümüz henüz montaj aşamasında, şimdiden kiralama yapabilir miyiz?",
                cevap:
                    "Yapabilirsiniz, ancak montaj ekibiyle saha koordinasyonu önceden kurulmalıdır. Malzeme istifleri ve montaj ekibinin çalıştığı alanlar dar geçişler oluşturabilir; bu yüzden ilk temas anında holünüzün o anki durumunu (hangi bölüm tamamlandı, hangi bölümde montaj sürüyor) sorarız. Çalışma saatini montaj programıyla çakışmayacak şekilde planlarız — genellikle montaj ekibinin mesai dışı olduğu saatler veya farklı bir bölüm tercih edilir.",
            },
            {
                soru: "Yeni holümüzün tavan yüksekliği ne kadar makine gerektirir?",
                cevap:
                    "2. OSB'deki yeni holler genellikle 8-12 metre bandında olduğu için, bu 10-14 metre çalışma yüksekliği sınıfına karşılık gelir — standart OSB'ye göre biraz daha büyük bir sınıf. Holünüzün proje yüksekliğini yapı ruhsatından veya mimari projeden biliyorsanız, bu bilgiyle telefonda net bir öneri verebiliriz; bilmiyorsanız sahada ölçüm yaparız.",
            },
            {
                soru: "Devreye alma sonrası eksik kalan birçok küçük iş var, hepsini tek seferde mi hallettirmeliyiz?",
                cevap:
                    "Kesinlikle öneririz. Dağınık bir listeyi (eksik aydınlatma, kablo kanalı, son rötuşlar) parça parça birkaç kez kiralamak yerine tek bir ziyarette toplamak, nakliye maliyetini önemli ölçüde düşürür. Listenizi çıkarıp bize iletirseniz, hangi kalemlerin aynı makine sınıfıyla, hangi sırayla yapılabileceğini planlayıp tek bir programda sunarız.",
            },
            {
                soru: "İş listemiz uzun sürebilir, makine günlük mü gelip gitsin yoksa sahada mı kalsın?",
                cevap:
                    "İş listenizin toplam süresini tahmin ederseniz bu kararı birlikte veririz. Genel kural şudur: iş bir-iki günü aşıyorsa makinenin sahada kalması (konaklamalı kiralama) ekonomik olarak günlük gidip gelmeye göre avantajlıdır, çünkü nakliye bir kez ödenir. Listenizi paylaşın, iki seçeneğin maliyetini yan yana gösterelim; karar size kolaylaşsın.",
            },
            {
                soru: "Yakın gelecekte yeni bir bölüm devreye alacağız, bunu şimdiden konuşmalı mıyız?",
                cevap:
                    "Evet, öneririz. Büyüme planınızı ve tahmini takviminizi paylaşırsanız, sizinle uzun vadeli bir hizmet çerçevesi kurabiliriz; bu, her yeni bölüm devreye girdiğinde sıfırdan süreç başlatmak yerine önceden tanımlı bir ilişki üzerinden hızlıca ilerlemenizi sağlar. Çerçeve fiyat sabitlemez ama planlama kolaylığı ve öncelik sağlar.",
            },
            {
                soru: "Montaj ekibiyle aynı sahada çalışmak güvenli mi?",
                cevap:
                    "Doğru koordinasyonla evet. Çalışma alanını ve saatini montaj ekibinin programıyla çakışmayacak şekilde önceden planlıyoruz; bu genellikle tesisin proje yöneticisiyle birlikte kurduğumuz bir koordinasyondur. İki ekibin aynı anda aynı dar alanda çalışması önerilmez; bu yüzden ya farklı bölümlerde ya farklı saatlerde ilerleriz. Montaj programınızı paylaşırsanız, çakışmayan bir pencere buluruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir 2. OSB'nin büyüme evresindeki tesis yoğunluğu kamuya açık genel bilgidir; evre bazlı yaklaşım ve uzun vadeli çerçeve modeli firma pratiğidir.",
    },

    "bolge:bozuyuk-osb-bilecik-cevre-ili": {
        h1: "Bozüyük OSB'de İlk Kez Manlift Kiralayacak İşletmeler İçin Rehber (Çevre İl)",
        giris:
            "Bozüyük OSB, Bilecik'in Eskişehir'e en yakın büyük sanayi bölgesidir ve seramik, cam, metal işleme gibi ağır sanayi kollarını barındırır. Eskişehir filomuzdan Bozüyük'e hizmet vermek, çevre il mesafesi nedeniyle standart OSB rehberine birkaç ek soru katar: sevkiyat süresi, tarih esnekliği ve iki il arasındaki sorumluluk sınırı. Bu rehber, ilk kez kiralama yapacak bir Bozüyük işletmesinin üç temel seçim sorusunun (yükseklik, altı boş mu, zemin-ortam) yanına eklemesi gereken çevre il sorularını ele alır; amaç, mesafenin getirdiği süre ve fiyat farkını baştan şeffaf göstermektir.",
        maddeler: [
            {
                baslik: "Eskişehir'den Bozüyük'e sevkiyat süresi",
                metin:
                    "Eskişehir merkezli filomuzdan Bozüyük'e sevkiyat, karayolu mesafesine bağlı olarak bir-iki saat sürer. Bu, aynı gün acil müdahale beklentisini bazı durumlarda gerçekçi kılmayabilir; bölgede o an çalışan bir makinemiz varsa müdahale hızlı olur, yoksa planlı sevkiyat gerekir. İlk kiralamanızda bu süreyi baştan bilmeniz, beklentinizi doğru kurmanızı sağlar.",
            },
            {
                baslik: "Ağır sanayi hollerinde tipik metraj",
                metin:
                    "Bozüyük OSB'deki seramik ve cam üretim tesislerinin holleri genellikle yüksek tavanlıdır; fırın ve pişirme hatlarının bulunduğu bölümlerde 8-12 metre bandı sık görülür. Bu, 10-14 metre çalışma yüksekliği sınıfına karşılık gelir. Diğer üretim bölümlerinde (paketleme, depo) tavan daha standarttır ve daha kompakt bir sınıf yeterli olabilir; hangi bölümde çalışılacağı, doğru sınıfı belirlemede ilk sorumuzdur.",
            },
            {
                baslik: "Tarih esnekliğinin fiyata etkisi",
                metin:
                    "Çevre il sevkiyatında en büyük maliyet kalemi nakliyedir ve bu kalem, tarihinizi esnetebildiğinizde en kolay düşürülen kalemdir. Eskişehir filomuzun Bozüyük yönünde o hafta zaten planlanmış bir işi varsa, aynı sevkiyata sizin talebinizi de ekleyerek nakliye bedelini paylaştırabiliriz. Sabit tarihli acil bir ihtiyaçta da hizmet veririz, ancak bu durumda tam sevkiyat bedeli ayrı bir kalem olarak teklife yansır.",
            },
            {
                baslik: "İki il arasında belge ve sorumluluk sınırı",
                metin:
                    "Çevre il sevkiyatında, makinenin taşınması ve sahada teslim alınması sürecinde sorumluluk sınırlarının net olması önemlidir. Teslimat tutanağı, makinenin durumu ve varsa hasar kaydı, hem Eskişehir'den çıkışta hem Bozüyük'te teslimde ayrı ayrı düzenlenir. Bu, iki taraf için de olası bir anlaşmazlıkta net bir referans sağlar.",
            },
            {
                baslik: "Komşu Bozüyük işletmeleriyle ortak sevkiyat",
                metin:
                    "Bozüyük OSB'deki birden fazla işletmenin taleplerini aynı haftaya toplamak, nakliye maliyetini bölmenin en etkili yoludur. İlk kiralamanızda komşu işletmelere haber vermeniz veya bize OSB içindeki başka taleplerden haberdar olup olmadığımızı sormanız, size daha ekonomik bir seçenek sunmamızı sağlayabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bozüyük OSB'de bölüm tipine göre makine seçimi",
                paragraflar: [
                    "Ağır sanayi tesislerinin farklı bölümlerinde tavan yüksekliği ve erişim ihtiyacı değişir; aşağıdaki tablo bu farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Tipik tavan", "Uygun sınıf", "Ek not"],
                    satirlar: [
                        ["Fırın/pişirme hattı", "8-12 m", "Akülü makaslı 10-14 m", "Sıcaklık payı"],
                        ["Paketleme/sevkiyat", "5-7 m", "Akülü makaslı 8 m", "Standart"],
                        ["Hammadde/stok sahası", "Açık alan", "Dizel teleskopik", "Zemin toz kontrolü"],
                        ["İdari/ofis binası", "3-5 m", "Kompakt akülü", "Standart"],
                    ],
                },
            },
            {
                baslik: "Sevkiyatı paylaşarak fiyatı düşürmek",
                paragraflar: [
                    "Bozüyük OSB'ye yönelik taleplerde, tarihinizi mümkün olduğunca esnek tutmanız en pratik tasarruf yöntemidir. Filomuzun o yöne planlanmış bir sevkiyatı varsa, talebinizi bu sevkiyata ekleyerek nakliye bedelini paylaştırırız; bu genellikle standart tekil sevkiyata göre belirgin bir tasarruf sağlar.",
                    "Sabit tarihli bir ihtiyacınız varsa bunu da karşılarız, ancak bu durumda tam sevkiyat bedelinin ayrı bir kalem olarak teklife yansıyacağını baştan söyleriz — şeffaflık, sürprizi önler.",
                ],
            },
            {
                baslik: "Teslim ve iade sürecinde belge akışı",
                paragraflar: [
                    "Çevre il sevkiyatında teslim tutanağı iki noktada düzenlenir: makinenin Eskişehir'den çıkışında ve Bozüyük'teki sahada tesliminde. Bu tutanaklar makinenin durumunu, varsa mevcut hasarları ve teslim saatini kaydeder.",
                    "İade sürecinde de aynı adım tekrarlanır; bu belge akışı, iki il arasındaki mesafenin getirdiği belirsizliği azaltır ve olası bir anlaşmazlıkta net bir referans sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bozüyük'e ilk kez kiralama yapıyoruz, Eskişehir'den ne kadar sürede gelir?",
                cevap:
                    "Genellikle bir-iki saat içinde planlanabilir, ancak filomuzun o an nerede olduğuna bağlıdır. Bölgede zaten çalışan bir makinemiz varsa süre kısalır; yoksa Eskişehir'den özel sevkiyat gerekir ve süresi talep anında net söylenir. Tarihinizi esnek bırakırsanız, filomuzun o yöne planlanmış bir sevkiyatına eklenerek hem daha hızlı hem daha ekonomik bir çözüm sunabiliriz.",
            },
            {
                soru: "Fırın hattı bölümünde çalışacağız, sıcaklık makineyi etkiler mi?",
                cevap:
                    "Etkileyebilir, bu yüzden fırın hattı gibi yüksek sıcaklıklı bölümlerde çalışma öncesi ünitenin soğuma durumunu kontrol ederiz. Mümkünse çalışma, fırının durduğu veya sıcaklığın güvenli seviyeye düştüğü zaman dilimine planlanır. Bölümünüzün sıcaklık döngüsünü (ne zaman durur, ne zaman soğur) bildirirseniz, programı ona göre kurarız.",
            },
            {
                soru: "Tarihimizi esnetirsek gerçekten ne kadar tasarruf ederiz?",
                cevap:
                    "Kesin rakam duruma göre değişir ama fark belirgindir. Filomuzun Bozüyük yönünde zaten planlanmış bir sevkiyatı varsa, talebinizi bu sevkiyata ekleyerek nakliye bedelini paylaştırırız; bu genellikle tekil sevkiyata göre önemli bir tasarruf sağlar. Sabit tarih isterseniz de hizmet veririz, ancak tam sevkiyat bedeli ayrı bir kalem olarak görünür — iki seçeneği teklif aşamasında yan yana gösteririz.",
            },
            {
                soru: "Makine sahada hasar görürse sorumluluk nasıl belirlenir?",
                cevap:
                    "Teslim tutanağı bu konuda net bir referans sağlar. Makinenin durumu hem Eskişehir'den çıkışta hem Bozüyük'teki sahada teslim anında kaydedilir; bu iki kayıt arasındaki fark, sorumluluğun belirlenmesinde temel alınır. İade sürecinde de aynı kayıt tekrarlanır. Bu belge akışı, iki il arasındaki mesafenin getirdiği belirsizliği önemli ölçüde azaltır.",
            },
            {
                soru: "OSB'deki başka işletmelerle birlikte mi planlanabiliriz?",
                cevap:
                    "Evet, bunu aktif olarak öneriyoruz. Bozüyük OSB'deki birden fazla işletmenin taleplerini aynı haftaya toplamak nakliye maliyetini bölmenin en etkili yoludur. Talebinizi açarken bize OSB içinde başka bir talep olup olmadığını sorabilir, ya da komşu işletmelere kendiniz haber verebilirsiniz. Bu koordinasyon size ve komşu işletmelerinize daha ekonomik bir seçenek sunar.",
            },
            {
                soru: "Fırın dışındaki bölümler için (paketleme, depo) hangi makine yeterli?",
                cevap:
                    "Bu bölümlerin tavan yüksekliği genellikle 5-7 metre bandındadır ve standart akülü makaslı 8 metre sınıfı çoğu ihtiyacı karşılar. Hedefin gerçek yüksekliğini ve altının boş olup olmadığını (raf, ekipman gibi) bildirirseniz, telefonda net bir öneri veririz. Bu bölümler genellikle fırın hattına göre daha az kısıtlıdır ve daha hızlı planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük OSB'nin seramik-cam-metal ağırlıklı sanayi profili ve Eskişehir'e mesafesi kamuya açık genel bilgidir; sevkiyat paylaşımı ve belge akışı firma pratiğidir.",
    },

    "bolge:polatli-ankara-cevre-ili": {
        h1: "Polatlı'da İlk Kez Manlift Kiralayacak İşletmeler İçin Rehber (Çevre İl)",
        giris:
            "Polatlı, Ankara'nın batı ucunda ve Eskişehir'e yakın konumuyla tarım işleme, un-yem sanayi ve lojistik depolama tesislerinin yoğunlaştığı bir sanayi kuşağıdır. Eskişehir filomuzdan Polatlı'ya hizmet vermek, coğrafi yakınlık nedeniyle çoğu çevre il taleplerinden daha hızlı planlanabilir; ancak yine de il sınırı geçişi, sevkiyat süresi ve tarih esnekliği gibi standart OSB rehberine ek sorular getirir. Bu rehber, Polatlı'da ilk kez kiralama yapacak bir işletmenin üç temel seçim sorusuna (yükseklik, altı boş mu, zemin-ortam) eklemesi gereken çevre il ve tarım-sanayi sorularını ele alır.",
        maddeler: [
            {
                baslik: "Eskişehir-Polatlı hattında sevkiyat süresi",
                metin:
                    "Eskişehir ile Polatlı arasındaki mesafe, bölgedeki diğer çevre il taleplerine göre görece kısadır; sevkiyat genellikle bir saat civarında tamamlanır. Bu, Polatlı'yı çevre il talepleri arasında en hızlı planlanabilen bölgelerden biri yapar. Yine de bölgede o an çalışan bir makinemiz yoksa, özel sevkiyat gerekir ve bu süre talep anında net söylenir.",
            },
            {
                baslik: "Un-yem fabrikalarında silo ve elevatör erişimi",
                metin:
                    "Polatlı'nın un ve yem işleme tesislerinde silo, elevatör ve dolum hattı gibi dikey yapılar yaygındır. Bu yapılarda platform çalışması, silo çapı ve elevatör kulesinin dar geçitleri nedeniyle özel bir erişim planlaması gerektirir; çoğu zaman iç mekân değil dış cephe/çevre işi söz konusudur ve makine, yapıya paralel konumlanarak yatay erişimle çalışır.",
            },
            {
                baslik: "Toz birikimi olan kapalı hacimlerde alan sınıfı",
                metin:
                    "Tahıl işleme tesislerinin kapalı hacimlerinde un ve tahıl tozu birikimi, hem görüşü hem elektrikli ekipmanın güvenli çalışmasını etkileyebilir; bu ortamlarda kullanılan makinelerin toz sınıfına uygun (kapalı devre elektrik aksamlı) modeller olması tercih edilir. İlk kiralamada hacminizin toz yoğunluğunu belirtmeniz, doğru makine seçimini kolaylaştırır.",
            },
            {
                baslik: "Lojistik depolarında standart raf üstü işler",
                metin:
                    "Polatlı'daki lojistik ve depolama tesisleri, standart bir OSB deposundan farklı değildir; raf üstü aydınlatma, sprinkler hattı ve çatı bakımı en sık talep edilen kalemlerdir. Bu tesislerde tavan yüksekliği genellikle 8-12 metre bandındadır ve koridor genişliği makine seçiminin belirleyici unsurudur.",
            },
            {
                baslik: "Tarım takviminin talep yoğunluğuna etkisi",
                metin:
                    "Un-yem ve tahıl işleme tesislerinde hasat sonrası dönem (yaz sonu-sonbahar başı) işlem hacmi en yüksek olduğu dönemdir ve bu dönemde tesis içi bakım işlerine ayrılan zaman kısıtlı olabilir. İlk kiralamanızda, mümkünse büyük kapsamlı bakım işlerini bu yoğun dönemin dışına planlamanızı öneririz; bu hem tesis operasyonunuzu aksatmaz hem makine planlamasını kolaylaştırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Polatlı'da tesis tipine göre makine seçimi",
                paragraflar: [
                    "Bölgedeki üç ana tesis tipinin platform ihtiyacı aşağıdaki gibi özetlenebilir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Tipik kalem", "Ana kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Un/yem fabrikası (silo-elevatör)", "Dış cephe/çevre bakımı", "Dar geçit, dikey yapı", "Uzun erişimli, yan konum"],
                        ["Tahıl işleme (kapalı hacim)", "İç aydınlatma, hat bakımı", "Toz yoğunluğu", "Toz sınıfına uygun akülü"],
                        ["Lojistik depo", "Raf üstü, sprinkler", "Koridor genişliği", "Akülü makaslı 10-12 m"],
                        ["Açık saha/yükleme", "Aydınlatma direği", "Standart", "Dizel teleskopik"],
                    ],
                },
            },
            {
                baslik: "Silo ve elevatör işlerinde keşfin değeri",
                paragraflar: [
                    "Silo ve elevatör gibi dikey yapılarda telefonla verilen bir makine sınıfı önerisi, sahada değişebilir; çünkü yapının çapı, çevresindeki manevra alanı ve erişim noktasının yüksekliği birlikte değerlendirilmelidir. Bu tip işlerde, mümkünse birkaç fotoğraf veya kısa bir keşif önereriz.",
                    "Keşif sonrası net bir makine sınıfı ve konumlanma planı sunulur; bu, sahada 'makine yetmedi' sürprizini önler ve özellikle ilk kiralamada güven oluşturur.",
                ],
            },
            {
                baslik: "Yoğun dönemi atlayarak planlama",
                paragraflar: [
                    "Hasat sonrası yoğun işlem dönemi, tesis içi bakım işleri için en uygun zaman değildir; bu dönemde hem tesisin kendi operasyonel yoğunluğu hem makine talebinin bölgesel yükselişi bir araya gelebilir. Mümkünse büyük kapsamlı bakım kalemlerinizi bu dönemin öncesine veya sonrasına planlamanızı öneririz.",
                    "Küçük ve acil kalemler (örneğin tek bir armatür değişimi) yoğun dönemde de kompakt sınıfla ve kısa sürede halledilebilir; büyük ölçekli işler için sakin dönem hem daha ekonomik hem daha az kısıtlıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Polatlı'ya Eskişehir'den ne kadar sürede makine gelir?",
                cevap:
                    "Bölgedeki diğer çevre il taleplerine göre görece hızlı — genellikle bir saat civarında sevkiyat tamamlanır. Bölgede o an çalışan bir makinemiz varsa süre daha da kısalır. Filomuzun müsaitliği talep anındaki duruma bağlı olduğu için, kesin süreyi talebinizi ilettiğinizde net olarak söyleriz.",
            },
            {
                soru: "Silonun dış yüzeyinde bir onarım var, hangi ölçüler gerekiyor?",
                cevap:
                    "Silonun çapı, onarım noktasının yerden yüksekliği ve makinenin konumlanabileceği en yakın nokta ile silo yüzeyi arasındaki mesafe belirleyicidir. Bu üç ölçüyle birlikte çevresindeki manevra alanını da bilmemiz gerekir. Bu tip işlerde telefonla kaba bir fikir verebiliriz ama kesin teklif için birkaç fotoğraf veya kısa bir keşif öneririz; bu, sahada makine değişimi gibi bir kaybı önler.",
            },
            {
                soru: "Tahıl tozu yoğun bir hacimde makine güvenli çalışır mı?",
                cevap:
                    "Doğru sınıf seçildiğinde evet. Un ve tahıl tozunun yoğun olduğu hacimlerde toz sınıfına uygun, kapalı devre elektrik aksamlı modelleri tercih ediyoruz; standart bir makine bu ortamda uzun vadede risk taşıyabilir. Hacminizin toz yoğunluğunu ve varsa toz bastırma sisteminin çalışma durumunu bildirirseniz, doğru sınıfı önceden belirleriz.",
            },
            {
                soru: "Depomuzda raf üstü sprinkler bakımı var, standart makine yeter mi?",
                cevap:
                    "Çoğunlukla evet. Polatlı'daki lojistik depoların tavan yüksekliği genellikle 8-12 metre bandındadır ve akülü makaslı 10-12 metre sınıfı bu ihtiyacın çoğunu karşılar. Belirleyici olan koridor genişliğidir; raflar arası mesafe darsa daha kompakt bir sınıf gerekir. Koridor genişliğini ve raf yüksekliğini bildirirseniz, sahaya gelmeden doğru sınıfı seçeriz.",
            },
            {
                soru: "Hasat sonrası dönemde bakım yaptırmak istemiyoruz, ne zaman planlamalıyız?",
                cevap:
                    "Doğru düşünce; hasat sonrası dönem hem tesisin kendi operasyonel yoğunluğu hem bölgesel makine talebi açısından en kısıtlı dönemdir. Büyük kapsamlı bakım kalemlerinizi bu dönemin öncesine (yaz başı) veya sonrasına (kış ortası-sonu) planlamanızı öneririz; bu hem operasyonunuzu aksatmaz hem daha geniş makine seçeneği bulmanızı sağlar. Küçük ve acil işler için yoğun dönemde de kompakt sınıfla hizmet veririz.",
            },
            {
                soru: "İlk kez kiralama yapıyoruz, süreç nasıl işler?",
                cevap:
                    "Standart süreç dört adımdır: işinizi anlatırsınız ve üç temel soru (yükseklik, altı boş mu, zemin-ortam) cevaplanır, tesis tipinize özgü ek sorular (silo çapı, toz yoğunluğu gibi) varsa netleştirilir, ölçü ve fotoğraf paylaşılır, teklif kalem kalem sunulur. Polatlı'nın Eskişehir'e görece yakın konumu sayesinde bu süreç genellikle bir-iki gün içinde teslimatla sonuçlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Polatlı'nın un-yem-tahıl işleme ve lojistik depo ağırlıklı sanayi profili kamuya açık genel bilgidir; silo/elevatör keşif yöntemi ve yoğun dönem planlaması firma pratiğidir.",
    },
    "bolge:demirciler-sanayi-sitesi": {
        h1: "Demirciler Sanayi Sitesinde Metal ve Sıcak İşler İçin Manlift Kiralama",
        giris: "Demirciler Sanayi Sitesinde yüksekte çalışma, sıradan bir atölye aydınlatması talebinden daha fazla hazırlık ister; metal kesme, kaynak, taşlama, profil montajı ve yüzey işlemi aynı sahada birbirini izleyebilir. Platformun görevi yalnız ustayı hedef kota çıkarmak değildir. Kıvılcımın gideceği alan, sıcak parçanın indirileceği rota, gaz tüpleri ile yanıcı malzemenin konumu, komşu atölyenin açık kapısı ve ortak yol trafiği çalışma planının parçasıdır. İlk kiralamada makineyi çalışma yüksekliğine göre seçmek yetmez; sepetin engelin üzerinden uzanması, zemindeki metal talaşından korunması ve sıcak iş izninin kimin tarafından kapatılacağı da netleşmelidir. Bu sayfa Demirciler’deki metal atölyeleri için erişimi sıcak iş disipliniyle birlikte ele alır; herhangi bir işletme, tesis kapasitesi veya özel proses hakkında varsayım kurmaz.",
        maddeler: [
            { baslik: "Sıcak iş alanını sepetten önce hazırlamak", metin: "Kaynak, kesme veya taşlama yapılacaksa platform gelmeden önce kıvılcım saçılma alanı belirlenir, yanıcı malzeme uzaklaştırılır ve işletmenin sıcak iş prosedürü uygulanır. Sepetin altında çalışan ya da geçen kimse bırakılmaz. Yangın gözcüsü, söndürme ekipmanı ve iş bitimi sonrası kontrol işletmenin izin düzenine göre atanır. Platform operatörü sıcak iş iznini veren kişi değildir; izin açık değilse yalnız erişim sağlanmış olması işe başlama gerekçesi olmaz. Kıvılcımın hidrolik hortum, lastik ve kabloya ulaşmayacağı sepet yönü seçilir, koruyucu örtü görüşü veya acil inişi engellemeyecek biçimde yerleştirilir." },
            { baslik: "Çelik profil ve parçada taşıma sınırı", metin: "Platform vinç değildir; uzun profil, ağır levha veya kaynaklı parçayı sepet dışından kaldırmak için kullanılmaz. Sepete alınacak el aleti ve küçük malzeme toplam kapasite içinde kalır ve düşmeye karşı sabitlenir. Montaj parçasının ayrı kaldırma planı gerekiyorsa uygun ekipman ve yetkili ekip ayrıca sağlanır. Sepetteki personel parçayı yapıya çekerek makineye yan yük bindirmez. İş başlamadan önce parçanın boyutu, ağırlığı, tutma yöntemi ve hedefteki geçici sabitleme sırası konuşulur; belirsiz yükle yükselme yapılmaz." },
            { baslik: "Atölye üstü kiriş ve baca erişimi", metin: "Metal atölyelerinde vinç kirişi, duman emiş kanalı, baca bağlantısı, çatı makası ve aydınlatma aynı üst kotta kesişebilir. Hedefin altında tezgâh veya stok varsa makaslı yerine engel üzerinden uzanabilen eklemli sınıf gerekir. Geçiş kapısı, dönüş alanı ve üstteki kiriş aralığı ölçülür. Kapalı hacimde egzozsuz akülü seçenek tercih edilir; dış avlu veya bozuk zeminde farklı yürüyüş kabiliyeti gerekebilir. Üretim sürüyorsa hareketli ekipman güvenli duruma alınır ve sepetin rotasına hiçbir yük kaldırma faaliyeti sokulmaz." },
            { baslik: "Talaşlı ve yağlı zeminde tutunma", metin: "Metal talaşı, kesim artığı ve yağlı yüzey hem lastiğe zarar verebilir hem makinenin fren ve yönlendirme güvenliğini düşürebilir. Güzergâh süpürülür, sivri parçalar uzaklaştırılır ve kaygan bölüm temizlenmeden makine içeri alınmaz. İnce sacın altında boşluk veya zayıf kapak bulunmadığı kontrol edilir. Gün içinde başka bir atölyeye geçilecekse tekerlek ve alt şase gözden geçirilir; taşınan talaşın komşu zemine yayılması önlenir. Zemin hazırlığı küçük görünür fakat doğru sınıf kadar belirleyici bir güvenlik adımıdır." },
            { baslik: "Komşu atölyelerle ortak yol düzeni", metin: "Sanayi sitesinde atölyenin önü yalnız o işletmeye ait sakin bir saha değildir; mal kabulü, müşteri aracı ve komşu işyerinin geçişi aynı yolu kullanabilir. Platform açılmadan önce bariyer sınırı ve alternatif geçiş belirlenir. Uzun süreli işte makine her akşam ortak yolu kapatmayacak park alanına çekilir. Aynı sokaktaki kısa bakım işleri tek programa alınabilir, ancak her işletmenin sıcak iş izni ve teslim kaydı ayrıdır. Ortak sevkiyat güvenlik sorumluluklarını birleştirmez; yalnız taşıma ve rota verimliliği sağlar." },
        ],
        ekBolumler: [
            { baslik: "Metal işine göre erişim ve ön koşul", paragraflar: ["Demirciler’de iş türü, platform sınıfı kadar izin ve alt alan hazırlığını da belirler."], tablo: { basliklar: ["İş", "Erişim", "Ön koşul", "Plan"], satirlar: [["Kiriş kaynağı", "Engel üstü", "Sıcak iş izni", "Eklemli akülü"], ["Baca ve emiş", "Çatı altı", "Hat güvenli durumu", "Kompakt eklemli"], ["Aydınlatma", "Dikey", "Alt alan ayrımı", "Akülü makaslı"], ["Cephe profil montajı", "Yatay uzanma", "Ayrı yük kaldırma", "Bomlu"], ["Avlu sundurması", "Açık saha", "Araç trafiği", "Arazi tipi"], ["Çatı oluğu", "Kenar erişimi", "Hava kontrolü", "Aşağıdan bomlu"]] } },
            { baslik: "Sıcak işin açılış ve kapanış kaydı", paragraflar: ["İş öncesi kayıt, yalnız platform tesliminden ibaret değildir. Çalışma bölgesindeki yanıcılar, koruyucu düzen, gözcü, söndürme ekipmanı ve işin izin süresi işletmenin prosedüründe doğrulanır. Platformun acil iniş alanı koruma malzemesiyle kapatılmaz ve operatör görüşünü kaybetmez.", "İş tamamlandığında kıvılcım üreten aletler sayılır, sıcak parça güvenli yere alınır ve alan işletmenin belirlediği gözlem süresi boyunca kontrol edilir. Platform ancak sepet ve şase üzerinde sıcak parça, metal artığı veya hasar bulunmadığı görüldükten sonra başka adrese geçer. Bu kapanış bir sonraki atölyeye risk taşınmasını önler." ] },
            { baslik: "İlk keşifte istenen metal atölyesi bilgileri", paragraflar: ["Hedef kot, altındaki tezgâhın genişliği, kapı ölçüsü, zeminin durumu ve yapılacak işlemin kıvılcım üretip üretmediği ilk seçim setidir. Buna gaz tüpü, boya veya benzeri malzemenin çalışma alanına yakınlığı ile ortak yolun hangi saatlerde yoğun olduğu eklenir. Fotoğraf yalnız hedefi değil, girişten hedefe bütün rotayı göstermelidir.", "Bu bilgilerle makaslı ve eklemli seçeneklerin hangisinin işi tek yerleşimde kapatacağı görülür. Ölçü belirsizse büyük makineyi güvenli varsaymayız; büyük şase kapıdan geçmeyebilir ve dar hacimde kaçış yolunu kapatabilir. Doğru makine, en yüksek olan değil, doğrulanmış rotada güvenle çalışan sınıftır." ] },
        ],
        sss: [
            { soru: "Sepette kaynak yapılabilir mi?", cevap: "İşletmenin sıcak iş izni açık, kıvılcım alanı ayrılmış, gözcü ve söndürme düzeni hazırsa uygun çalışma planıyla yapılabilir. Hidrolik ve elektrik aksamı korunur, koruma acil inişi engellemez. İzin ve yangın tedbiri olmadan yalnız kısa süreceği düşüncesiyle kaynak başlatılmaz. Platform operatörü kaynak yöntemini onaylayan kişi değildir." },
            { soru: "Uzun çelik profili sepetle kaldırabilir miyiz?", cevap: "Hayır; platform malzeme vinci değildir ve sepet dışındaki uzun parçaya yan yük bindirilemez. Küçük malzeme kapasite içinde sabitlenerek taşınabilir. Profil için ayrı kaldırma ve geçici sabitleme düzeni kurulmalıdır. Parçanın sepete çekilmesi makinenin dengesini bozabileceğinden kabul edilmez." },
            { soru: "Tezgâhın üstündeki kirişe hangi sınıf ulaşır?", cevap: "Hedefin altına park edilemiyorsa eklemli bom gerekir. Tezgâh genişliği, hedef kot, makinenin duracağı yer ve üstteki kiriş aralığını ölçeriz. Kapı ve iç dönüş alanı da sınıfı sınırlar. Fotoğraf ve ölçü olmadan yalnız yüksekliğe bakarak kesin seçim yapmayız." },
            { soru: "Zemindeki talaş gerçekten makineyi etkiler mi?", cevap: "Evet; sivri metal lastiğe zarar verebilir, yağla birleşen talaş tutunmayı azaltabilir ve hareketli parçalara taşınabilir. Güzergâh temizlenmeden makine yürütülmez. Geçiş sonunda tekerlek ve alt şase kontrol edilir. Bu hazırlık hem arızayı hem komşu işyerine kir taşınmasını önler." },
            { soru: "Komşu atölyeyle aynı gün kiralama yapabilir miyiz?", cevap: "Aynı sınıf iki işi karşılıyorsa yapılabilir ve taşıma payı bölünebilir. Her atölye kendi izin, alan ayırma ve teslim sürecini yürütür. Sıcak iş yapılan adresten sonra temizlik ve kontrol için zaman ayrılır. Program ortak olsa da güvenlik sorumluluğu her işyerinde yeniden doğrulanır." },
            { soru: "Gece makine sanayi sitesinde kalabilir mi?", cevap: "Düz, korunaklı, ortak yolu ve acil geçişi kapatmayan bir park alanı belirlenirse kalabilir. Yetkisiz kullanımı önleyen anahtar ve teslim düzeni tutanağa yazılır. Akülü makine için uygun şarj noktası işletmece gösterilir; sıcak iş alanının veya gaz tüplerinin yanında park edilmez. Ertesi gün çevre yeniden kontrol edilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Eskişehir’de Demirciler Sanayi Sitesinin ve metal işleme faaliyetlerinin varlığı kamuya açık genel bilgidir; sıcak iş, yük sınırı ve ortak rota yaklaşımı sektör geneli güvenlik ilkeleri ile firma saha pratiğine dayanır. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:sivrihisar-osb": {
        h1: "Sivrihisar OSB’de Tesis Geneli Bakım Turu İçin Manlift Kiralama",
        giris: "Sivrihisar OSB’de ilk platform kiralamasını tek bir arızaya göre kurmak yerine tesisin tamamında yüksekte kalan bakım noktalarını aynı turda toplamak daha verimli bir yöntemdir. Bu sayfa ilçe merkezindeki küçük işletmeleri ya da çevre ilçe tedarik ilişkisini anlatmaz; organize sanayi parselindeki üretim holü, depo, idari cephe, dış saha aydınlatması, çatı kenarı ve yardımcı yapılara yayılan genel bakım turuna odaklanır. Tesisin hangi sektörde olduğu hakkında varsayım yapmadan erişim geometrisini, üretim duruşunu, kapalı-açık alan geçişini ve teslim kayıtlarını planlarız. Aynı makine her noktaya uygun olmayabilir; bu yüzden liste önce dikey erişim, engel üstü erişim ve bozuk zemin olarak ayrılır. Amaç en büyük makineyi sahada tutmak değil, en az sınıf değişimiyle doğrulanmış kalemleri güvenli sırada kapatmaktır.",
        maddeler: [
            { baslik: "Bakım listesini konumlanma haritasına çevirmek", metin: "Aydınlatma, fan, kablo tavası, çatı oluğu ve dış saha direği bir listede yan yana yazılabilir, fakat süreyi kalem sayısı değil makinenin kaç kez yerleşeceği belirler. Tesis krokisi üzerinde her hedefi işaretler, altındaki engeli, zemin cinsini ve üretim saatini kaydederiz. Aynı yerleşimden kapanan işler gruplanır. Böylece bakım günü ölçü almakla veya üretim ekipmanının çekilmesini beklemekle başlamaz. Yeni engel ya da değişen yerleşim varsa plan güncellenir; eski fotoğrafın hâlâ geçerli olduğu varsayılmaz." },
            { baslik: "Kapalı holden dış sahaya sınıf geçişi", metin: "Kapalı üretim holünde egzozsuz akülü ve uygun lastikli sınıf gerekirken dış sahadaki bozuk zemin farklı yürüyüş kabiliyeti isteyebilir. Tek ünitenin iki ortamı karşılayıp karşılamadığı rota ve zemine göre değerlendirilir. İçeri girecek makinenin kapı, dönüş ve üst açıklığı doğrulanır; dışarı çıkınca çamur veya metal artığı temizlenmeden tekrar temiz hacme dönmez. İki sınıf gerekiyorsa iş günlerini ayrı planlamak, uygun olmayan tek makineyi zorlamaktan daha güvenli ve çoğu durumda daha verimlidir." },
            { baslik: "Üretim üstündeki işleri duruşa bağlamak", metin: "Hareketli hat, vinç yolu veya açık ürünün üstünde çalışma yapılmaz. İlgili bölüm işletmece güvenli duruma alınır, enerji ve hareket kontrolü tesis yetkilisinin prosedürüne göre yürütülür. Duruş penceresi kısa ise sepete çıkacak ekip, alet ve malzeme önceden hazırlanır. Duruş gerektirmeyen cephe, dış saha veya boş depo işleri farklı saate alınır. Böylece makine izin beklerken boş kalmaz ve üretimi etkileyen işler yalnız kendilerine ayrılan pencerede tamamlanır." },
            { baslik: "Parsel içi trafik ve acil yol", metin: "OSB tesisinde yükleme aracı, personel servisi ve iç lojistik aynı güzergâhı kullanabilir. Platformun çalışma alanı fiziksel olarak ayrılır, fakat yangın yolu, acil çıkış ve pano önü kapatılmaz. Dış saha direkleri veya cephe için trafik kesisi gerekiyorsa tesisin saha sorumlusu saat ve alternatif rotayı belirler. Makine gece kalacaksa park yeri de aynı kurallarla seçilir. Bariyerin bulunması tek başına yeterli değildir; sürücünün görebileceği yönlendirme ve gerektiğinde gözcü planlanır." },
            { baslik: "Tur sonunda açık kalem ve tekrar planı", metin: "Bakım turunun sonunda yalnız yapılan işler değil, erişilemeyen veya izin penceresine sığmayan noktalar da kaydedilir. Erişilememe nedeni yükseklik, yatay mesafe, zemin, üretim veya malzeme hazırlığı olarak ayrılır. Böylece ikinci ziyaret aynı hatayı tekrarlamaz ve gerekiyorsa başka sınıf doğrudan seçilir. Fotoğraf erişim kaydını destekler, teknik bakım raporunun yerine geçmez. Tesis sorumlusu her bölümün teslimini onayladıktan sonra makine sahadan çıkar; açık kalemler belirsiz sözlü notlara bırakılmaz." },
        ],
        ekBolumler: [
            { baslik: "Tesis turunda bölüm ve erişim planı", paragraflar: ["Sektörden bağımsız bir OSB bakım turu aşağıdaki bölüm ayrımlarıyla planlanabilir."], tablo: { basliklar: ["Bölüm", "Tipik erişim", "Kısıt", "Yaklaşım"], satirlar: [["Üretim holü", "Hat üstü tesisat", "Duruş ve engel", "Akülü eklemli"], ["Depo", "Raf üstü sistem", "Koridor ve trafik", "Dar makaslı"], ["İdari cephe", "Kaplama ve pencere", "Yaya girişi", "Kompakt bomlu"], ["Çatı kenarı", "Oluk ve detay", "Hava ve yatay mesafe", "Aşağıdan bomlu"], ["Dış saha", "Direk ve kamera", "Bozuk zemin", "Arazi tipi"], ["Yardımcı yapı", "Menfez ve kablo", "İzin sınırı", "Nokta bazlı seçim"]] } },
            { baslik: "Bir günlük turun hazırlık toplantısı", paragraflar: ["Tesis bakım sorumlusu, üretim temsilcisi ve saha trafiğini yöneten kişi çalışma öncesinde kısa bir rota toplantısı yapar. Hangi bölümün hangi saatte boşalacağı, anahtar veya refakat gerektiren alanlar, malzemenin nerede hazırlanacağı ve acil yollar kroki üzerinde işaretlenir. Platform sınıfı bu toplantıdan önce ölçülerle belirlenmiş olur.", "Gün başladığında ilk bölüm hazır değilse bütün turu bekletmek yerine sıradaki bağımsız kaleme geçilir. Bunun için listedeki işlerin izin bağımlılığı önceden işaretlenir. Esnek sıra, plansızlık değildir; onaylanmış alternatifler arasında üretimi en az etkileyen geçiş biçimidir." ] },
            { baslik: "İlk kiralamada maliyeti doğru karşılaştırmak", paragraflar: ["Teklifler yalnız günlük makine bedeliyle karşılaştırılmamalıdır. Nakliye, operatör gereksinimi, seçilen sınıf, olası ikinci sınıf, teslim ve bekleme koşulları aynı kapsamda okunmalıdır. Daha ucuz görünen tek bir sınıf, işlerin bir bölümünü kapatamıyorsa ikinci sevkiyat doğurabilir ve toplam maliyet artar.", "Doğru karşılaştırma için aynı bakım listesini ve aynı saha fotoğraflarını tüm teklif verenlere iletmek gerekir. Kapsam farklıyken rakamların yan yana konması yanıltıcıdır. Biz sınıf kararını hangi ölçünün ve engelin doğurduğunu açıkça yazar, tesisin gerekçeyi kontrol edebilmesini sağlarız." ] },
        ],
        sss: [
            { soru: "Tesisimizin sektörünü bilmeden doğru platform seçilebilir mi?", cevap: "Sektör ortam risklerini etkileyebilir, ancak ilk erişim seçimi hedef kot, alt engel, kapı, zemin ve çalışma alanına göre yapılır. Ardından tesisin kendi risk değerlendirmesi ve izinleri eklenir. Proses hakkında varsayım kurmayız; fotoğraf, ölçü ve yetkili açıklamasıyla ilerleriz. Özel ortam varsa uygunluk ayrıca değerlendirilir." },
            { soru: "Tek makine bütün bakım turunu bitirir mi?", cevap: "Kapalı ve açık alan koşulları, engel geometrisi ve zemin uyumluysa bitirebilir. Ancak dar iç koridor ile bozuk dış saha aynı sınıfta birleşmeyebilir. Listeyi üç erişim grubuna ayırıp tek sınıfın kapsama oranını gösteririz. Uygun değilse iki sınıfı ayrı günlerde planlarız; bir makineyi sınırı dışında kullanmayız." },
            { soru: "Üretimi durdurmadan hangi işler yapılabilir?", cevap: "Üretim hattından ve hareketli ekipmandan güvenli biçimde ayrılmış dış cephe, boş depo bölümü veya dış saha kalemleri çoğu durumda bağımsız ilerleyebilir. Hat üstü işler ise işletmenin güvenli duruş ve enerji prosedürüne bağlanır. Kesin ayrımı tesis yetkilisiyle iş listesi üzerinden yaparız; üretim kaybını azaltmak için güvenlik sınırı esnetilmez." },
            { soru: "Bakım turunun süresini nasıl hesaplarsınız?", cevap: "Kalem sayısı, konumlanma sayısı, her bölümün izin penceresi ve makinenin bölümler arası geçişi birlikte hesaplanır. Aynı noktadan yapılan birkaç kısa iş tek yerleşim sayılır; farklı binalardaki işler ayrı hazırlık ister. Kroki ve fotoğraf yoksa verilen süre yalnız tahmin olur. Keşif sonrası bölüm bazlı sıra ile daha güvenilir süre çıkar." },
            { soru: "Makine gece parselde kalabilir mi?", cevap: "Tesis içinde düz, korunaklı, acil yolu ve lojistiği kapatmayan alan sağlanırsa kalabilir. Akülü sınıf için güvenli şarj noktası, anahtar muhafazası ve yetkisiz kullanım önlemi teslim kaydında belirtilir. Ertesi vardiyada zemin ve çevre yeniden kontrol edilir. Makine izin alınmadan başka bölüme taşınmaz." },
            { soru: "Turda bitmeyen işler nasıl ele alınır?", cevap: "Her açık kalem nedeni ile birlikte kaydedilir: yanlış erişim geometrisi, eksik izin, hazır olmayan malzeme, zemin veya süre. Sonraki ziyaret buna göre farklı sınıf ya da farklı pencereyle hazırlanır. Yapılan ve yapılmayan işler tesis sorumlusuyla birlikte imzalanır; belirsiz bir genel not, bakım kapanışı sayılmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Sivrihisar OSB’nin varlığı kamuya açık genel bilgidir; tesis geneli bakım turu, konumlanma haritası, üretim penceresi ve teslim kaydı firma saha pratiğidir. Sektör, tesis adı, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:cifteler": {
        h1: "Çifteler’de Tarımsal İşleme Tesisleri İçin Sezonluk Manlift Kiralama",
        giris: "Çifteler’de tarımsal işleme faaliyeti için yüksekte bakım, takvimden bağımsız bir fabrika işi gibi planlanamaz. Ürünün kabul edildiği, işlendiği, paketlendiği veya depoya aktarıldığı yoğun dönem başladığında hat ve araç trafiği bakım ekibine çok az alan bırakır; sezon öncesi ve ürün çekildikten sonraki pencereler ise aydınlatma, havalandırma, çatı altı, konveyör üstü ve dış saha kalemlerini güvenli biçimde toplamak için fırsat verir. Bu sayfa ilçe merkezindeki kamu binası iç mekânlarını tekrar etmez; tarımsal işleme yapılarının sezonluk bakım turuna odaklanır. Belirli ürün, tesis veya kapasite varsaymadan temiz alan, tozlu bölüm, depo, kabul sahası ve yardımcı yapı arasındaki erişim farklarını ele alırız. İlk kiralamada amaç, yoğun sezonun ortasında tek arızaya koşmak yerine yüksekteki bütün gerçek bakım kalemlerini uygun pencereye hazırlamaktır.",
        maddeler: [
            { baslik: "Sezon öncesi üst kot listesini çıkarmak", metin: "Hat çalışmaya başlamadan önce armatürler, havalandırma ağızları, kablo taşıyıcılar, sensör çevresi, çatı sızıntı noktaları ve kapı üstü mekanizmalar bölüm bölüm incelenir. Liste yalnız arızalı parçayı değil, erişim gerektiren kontrol noktalarını da içerir. Her kalemin kotu, altında hareketli bant veya stok bulunup bulunmadığı ve gerekli duruş yazılır. Malzeme sezon açılmadan temin edilir. Böylece platform sahaya geldiğinde eksik parça beklemez ve kısa bakım penceresi ölçü alma turuna dönüşmez." },
            { baslik: "Ürün hattı üstünde hijyen ve düşen cisim kontrolü", metin: "Açık ürünün veya paketleme hattının üstünde üretim sürerken çalışma yapılmaz. Bölüm boşaltılır, hareket güvenli hâle getirilir, alt alan korunur ve sepet altındaki aletler bağlanır. Makine temiz alana girmeden tekerlek, sepet ve sızıntı açısından kontrol edilir. Tozlu ya da dış sahadan gelen ünite temizlenmeden ürün bölümüne dönmez. İş sonunda el aletleri sayılır ve alan tesisin temizlik prosedürüne göre teslim edilir; platform hizmeti gıda veya ürün güvenliği prosedürünün yerine geçmez." },
            { baslik: "Tozlu bölümlerde işlem ve ekipman sınırı", metin: "Kuru tarımsal malzemenin işlendiği bazı hacimlerde havada ve üst yüzeylerde toz birikebilir. Kıvılcım çıkaran iş, tesisin risk değerlendirmesi ve izin düzeni olmadan yapılmaz. Aspirasyonun durumu, birikmiş tozun temizliği ve kullanılacak ekipmanın uygunluğu işletme yetkilisiyle doğrulanır. Platform operatörü ortam sınıflandırması yapmaz. Toz, soğutma açıklığı ve hareketli parçalarda da birikebildiği için çalışma aralarında makine kontrol edilir ve bölümden çıkışta temizlik uygulanır." },
            { baslik: "Kabul sahası ve depo trafiğini ayırmak", metin: "Ürün kabulü başladığında traktör, kamyon, istif aracı ve personel aynı dış sahayı kullanabilir. Sundurma, dış aydınlatma, kamera veya oluk işleri bu akışın ortasında yapılmaz; kabul dışı saate taşınır veya fiziksel olarak ayrılmış cepheden yürütülür. Depo içinde koridor genişliği ve istif düzeni makine seçimini belirler. Ürün yığınına yaslanılmaz ve yığın taşıyıcı zemin kabul edilmez. Boşalan bölüm parça parça bakıma açılabiliyorsa tüm depoyu aynı anda kapatmadan sıra kurulabilir." },
            { baslik: "Sezon sonu kayıtla yeni döneme hazırlanmak", metin: "Ürün çekildikten sonra yapılan tur yalnız oluşan hasarı onarmak için değil, gelecek sezonun listesini hazırlamak için de kullanılır. Erişilemeyen nokta, değişen hat yerleşimi, çatıdaki su izi ve sık tekrar eden arıza fotoğrafla kaydedilir. Platform konumları krokiye işlenir. Bir sonraki sezon öncesinde aynı keşif baştan yapılmaz; kayıt güncel koşullarla doğrulanır. Bu döngü acil çağrı sayısını azaltır ve kiralamanın rastgele bir müdahale yerine öngörülebilir bakım programına dönüşmesini sağlar." },
        ],
        ekBolumler: [
            { baslik: "Tarımsal işleme bölümüne göre bakım penceresi", paragraflar: ["Çifteler’de tesis türü varsaymadan, bölüm koşullarına göre aşağıdaki bakım sırası kurulabilir."], tablo: { basliklar: ["Bölüm", "Yüksekte kalem", "Kısıt", "Uygun pencere"], satirlar: [["Ürün kabulü", "Sundurma, ışık, kamera", "Araç yoğunluğu", "Kabul dışı saat"], ["İşleme hattı", "Sensör, kablo, havalandırma", "Hareketli ekipman", "Planlı duruş"], ["Paketleme", "Armatür ve askı", "Açık ürün", "Hat boşken"], ["Tozlu bölüm", "Aspirasyon ve kanal", "Ortam uygunluğu", "Temizlik sonrası"], ["Depo", "Çatı altı ve algılama", "İstif koridoru", "Bölüm boşken"], ["Dış yardımcı yapı", "Oluk ve cephe", "Zemin ve hava", "Sezon öncesi"]] } },
            { baslik: "Sezon takvimini bakım takvimine çevirmek", paragraflar: ["İşletme ürün kabulünün başlayacağı yaklaşık dönemi, planlı temizlikleri ve hattın boş olduğu saatleri paylaşır. Bakım kalemleri önce bu üç pencereye göre ayrılır. Üretimden bağımsız çatı ve dış saha işleri daha esnek tarihe, hat üstü işler zorunlu duruşa yazılır. Böylece dar pencereye yalnız gerçekten oraya ait kalemler kalır.", "Hava veya ürün takvimi değişirse bütün program iptal edilmez. Malzeme hazır olduğu sürece bağımsız dış saha işi başka güne, hat işi yeni duruşa taşınabilir. Esnekliği sağlayan şey son dakika kararı değil, kalemlerin bağımlılıklarına göre önceden sınıflandırılmış olmasıdır." ] },
            { baslik: "Temizden tozluya tek yönlü makine rotası", paragraflar: ["Aynı makine birden fazla bölüme girecekse temiz paketleme veya depo alanı programın başına, tozlu işleme ve dış saha sona yazılır. Her geçişte tekerlek, sepet ve alet kontrol edilir. Ters sıra zorunluysa araya tesis prosedürüne uygun temizlik ve yeniden kabul süresi konur.", "Bu sıra yalnız hijyen için değil bakım verimi için de önemlidir. Temiz alanda fark edilen sızıntı veya mekanik sorun makine tozlu bölüme girmeden çözülür; bölüm geçişleri kayıt altına alınır. Üretim sorumlusu hangi alanın temiz kabul edildiğini belirler, platform ekibi bu sınırı kendi başına yorumlamaz." ] },
        ],
        sss: [
            { soru: "Bakımı sezon başlamadan ne kadar önce planlamalıyız?", cevap: "Sabit bir süre vermek yerine ürün kabul tarihiniz, malzeme tedariki ve tesisin duruş takvimi üzerinden geriye doğru planlarız. Liste ve ölçüler erken hazırlanırsa uygun sınıf rezerve edilir. Kritik işler sezon açılmadan kapanacak şekilde önceliklenir; hava bağımlı dış işler için yedek pencere bırakılır. Son haftaya kalan talepte hem makine hem malzeme seçeneği daralabilir." },
            { soru: "Hat çalışırken üstteki lambayı değiştirebilir misiniz?", cevap: "Açık ürün veya hareketli ekipmanın üstünde çalışmayız. İlgili kesit boşaltılır, hareket tesis prosedürüne göre güvenli hâle getirilir ve alt alan korunur. Acil arıza bile bu temel şartları kaldırmaz. Uygun pencere kısa ise malzeme ve alet önceden hazırlanarak yalnız değişim adımı o süreye sığdırılır." },
            { soru: "Tozlu hacme standart akülü makine girebilir mi?", cevap: "Bunu yalnız akülü olmasına bakarak söylemeyiz. Ortamın risk değerlendirmesi, tozun niteliği, aspirasyon ve ekipman uygunluğu tesis yetkilisiyle değerlendirilmelidir. Platform firması ortam sınıflandırması yapmaz. Uygunluk doğrulanmıyorsa makine indirilmez; önce temizlik, havalandırma veya farklı yöntem planlanır." },
            { soru: "Depo tamamen doluyken çatı altına ulaşılır mı?", cevap: "Yığın veya istif çalışma zemini değildir ve sepet ürüne yaslanamaz. Güvenli koridor ile sert zemin kalmışsa sınırlı alan değerlendirilebilir; yoksa bölümün boşalması beklenir. Acil sızıntıda dışarıdan erişim mümkün mü diye cephe ölçülür. Kalıcı bakım için ürünün çekildiği pencere en güvenli ve verimli zamandır." },
            { soru: "Bir platform hem iç hat hem dış saha işini bitirir mi?", cevap: "Kapı, zemin, engel ve çalışma yüksekliği aynı sınıfın sınırları içindeyse bitirebilir. Temiz alandan dış sahaya geçiş sırası ve dönüşte temizlik ayrıca planlanır. İçeride kompakt akülü, dışarıda bozuk zemine uygun farklı sınıf gerekiyorsa iki işi ayrı günlere böleriz. Tek makine hedefi güvenlikten önce gelmez." },
            { soru: "Sezon sonu kayıt bize ne kazandırır?", cevap: "Bir sonraki yıl hangi sınıfın, hangi cepheden ve kaç konumlanmayla çalışacağını önceden gösterir. Açık kalem, değişen hat, çatı izi ve erişim engeli unutulmaz. Kayıt teknik bakım raporunun yerine geçmez; platform planını besler. Yeni sezon öncesinde koşullar doğrulanır ve yalnız değişen noktalar için ek keşif yapılır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Çifteler’in tarım ağırlıklı ilçe yapısı kamuya açık genel bilgidir; tarımsal işleme tesislerinde sezonluk bakım, temiz-tozlu rota, duruş ve kabul sahası planı sektör geneli ilkeler ile firma pratiğine dayanır. Ürün, tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
};
