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

    // ─────────────────────────────────────────────────────────────────────
    // HİZMET SAYFALARI — Açı: İLK KİRALAMA SEÇİM REHBERİ.
    // Yukarıdaki bolge: kayıtlarının "üç soru" yöntemini (yükseklik, altı
    // boş mu, zemin-ortam) her hizmete özgü karar noktasına indirger.
    // Kardeş dosyaların (üretim hattı bakımı / duruş dönemi / kırsal enerji
    // hattı / kent içi iç mekan) hiçbiri bu "ilk kez kiralayacak işletmeye
    // hangi hizmeti ne zaman seçmeli" rehberlik açısını kullanmıyor.
    // ─────────────────────────────────────────────────────────────────────

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli Örümcek Platform: İlk Kiralamada Ne Zaman Standart Sınıf Yetmez",
        giris:
            "Eskişehir'de ilk kez yüksekte çalışma makinesi kiralayacak bir işletme, çoğunlukla akülü makaslı veya eklemli sınıfı düşünerek arar; sepetli örümcek platform ise nadiren ilk akla gelen seçenektir. Oysa bazı işlerde bu iki standart sınıf da işi yapamaz — kapı dar olabilir, iki tezgâh arası koridor daralabilir ya da zemin hassas olabilir. Örümcek platform tam bu ara boşluğu doldurur: parçalı taşınabilir gövdesi dar bir açıklıktan geçirilip iç mekânda yeniden monte edilebilir, paletli tahrik sayesinde hassas zeminde iz bırakmadan ilerler ve destek ayaklarını dengesiz bir noktaya bile güvenle oturtabilir. İlk kiralamada asıl karar, 'örümcek platform mu istiyorum' değil, 'standart sınıf neden geçmiyor' sorusudur; bu sayfa bu ayrımı üç somut soruyla netleştirir ve OSB'deki dar geçişli hollerde bu makinenin ne zaman gerçekten tek çözüm olduğunu anlatır.",
        maddeler: [
            {
                baslik: "İlk soru: standart sınıf gerçekten geçemiyor mu",
                metin:
                    "Örümcek platform istemeden önce, standart eklemli veya makaslı sınıfın neden yetmediğini netleştirmek gerekir. Çoğu zaman cevap gerçekten bir dar geçiştir ama bazen işletme henüz kapı ve koridor ölçüsünü almamıştır. Bu yüzden ilk kiralamada önce kapı genişliği, koridor darlığı ve varsa asansör ölçüsü sorulur; ölçü paylaşılmadan bu sınıf için kesin teklif verilmez, çünkü tahmini bir ölçüye dayanarak sevk edilen makine sahada geçmezse hem bakım penceresi boşa gider hem araç boş döner.",
            },
            {
                baslik: "Parçalı taşıma ve montaj süresi teklife dahildir",
                metin:
                    "Gövde dar açıklıktan geçirilebilmek için parçalara ayrılır ve iç mekânda yeniden monte edilir; bu süre bakım penceresinin dışında değil içindedir. İlk kiralamada bu detay çoğu zaman gözden kaçar ve işletme makinenin kapıdan girer girmez hazır olacağını varsayar. Teklif hazırlanırken montaj-demontaj süresi ayrı bir kalem olarak gösterilir, böylece toplam iş süresi baştan doğru planlanır.",
            },
            {
                baslik: "Zemin hassasiyeti ve paletli tahrikin rolü",
                metin:
                    "Epoksi kaplı veya perdahlı beton zeminler tekerlekli platformların bıraktığı ize karşı hassastır; paletli tahrik yükü geniş bir yüzeye yayarak bu riski azaltır. İlk kiralamada zemin tipini (epoksi mi, standart beton mu, döşeme kaplaması mı) belirtmek, doğru sınıfı ve destek ayağı altına konacak koruyucu tampon ihtiyacını baştan netleştirir.",
            },
            {
                baslik: "Yük kapasitesi standart sınıfa göre daha düşüktür",
                metin:
                    "Kompakt gövde, sepet yük kapasitesini de sınırlar. İlk kiralamada taşınacak aletlerin (kaynak makinesi, iki kişilik ekip, malzeme) toplam ağırlığı önceden bildirilmelidir; kapasite aşılırsa alet ayrı bir turda taşınır veya halatla yukarı çekilir. Bu sınırı bilmeden gelen bir talep sahada revizyona uğrayabilir.",
            },
            {
                baslik: "Ne zaman örümcek platform önerilmez",
                metin:
                    "OSB'deki tesislerin büyük çoğunluğunda hol genişliği standart eklemli sınıf için yeterlidir; örümcek platform istisnai bir çözümdür, varsayılan seçim değildir. Çalışma yüksekliği ve yatay erişimi standart sınıfın gerisinde kaldığı için, gerekmediği yerde tercih edilmesi hem maliyeti hem iş süresini gereksiz uzatır. İlk kiralamada bu yüzden önce standart sınıfın neden çalışmadığı sorgulanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlk kiralamada hangi geçiş ölçüsü hangi sınıfa yönlendirir",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kez kiralama yapacak bir işletmenin geçiş ölçüsüne göre hangi sınıfa yönlendiğini özetler; kesin karar her zaman ölçü ve fotoğrafla netleşir.",
                ],
                tablo: {
                    basliklar: ["Geçiş/zemin durumu", "Genişlik", "Zemin", "Önerilen sınıf"],
                    satirlar: [
                        ["Açık hol, standart kapı", "Geniş", "Standart beton", "Eklemli / makaslı"],
                        ["Çift kanatlı dar kapı", "Dar", "Epoksi", "Örümcek platform (parçalı)"],
                        ["Tezgâh sıraları arası koridor", "Çok dar", "Hassas zemin", "Örümcek platform"],
                        ["Asansörle üst kata taşıma", "Asansör kabini ölçüsü", "Değişken", "Örümcek platform (parçalı)"],
                        ["Hat boyu uzun mesafe", "Geniş", "Standart beton", "Teleskopik/eklemli"],
                    ],
                },
            },
            {
                baslik: "İlk kiralama sürecinde ölçü paylaşımı neden şart",
                paragraflar: [
                    "Bu sınıf için telefon üzerinden kesin teklif verilmez; keşif ya da net, ölçekli fotoğraf ve ölçü paylaşımı şart koşulur. Kapı boşluğu, koridor genişliği ve varsa eşik farkı şerit metreyle ölçülüp paylaşıldığında teklif kesinleşir.",
                    "Bu adımın atlanması, sahada makinenin geçmediği ortaya çıktığında hem işletmenin bakım penceresini boşa çıkarır hem de zaman kaybına yol açar. İlk kiralamasını sorunsuz geçirmek isteyen işletme için bu ölçüm adımı, sürecin en kritik parçasıdır.",
                ],
            },
            {
                baslik: "Standart sınıfla örümcek platform arasında fiyat farkı",
                paragraflar: [
                    "Örümcek platform, kompakt yapısı ve parçalı taşıma-montaj işçiliği nedeniyle standart eklemli veya makaslı sınıfa göre daha yüksek birim maliyet taşır. İlk kiralamada bu farkı doğru değerlendirmek için önce standart sınıfın gerçekten geçip geçmediği netleştirilir; geçiyorsa örümcek platform önerilmez.",
                    "Fark yalnızca kira bedelinde değil, montaj-demontaj süresinin iş takvimine eklenmesinde de ortaya çıkar. İlk kiralama teklifinde bu iki kalem ayrı satırlarda gösterilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İlk kez kiralama yapıyoruz, örümcek platforma mı yoksa standart sınıfa mı ihtiyacımız olduğunu nasıl anlarız?",
                cevap:
                    "Önce kapı ve koridor genişliğini, varsa asansör ölçüsünü ve zemin tipini (epoksi mi, standart beton mu) paylaşmanız yeterlidir. Standart eklemli veya makaslı sınıf bu ölçülerle geçebiliyorsa örümcek platform önerilmez; geçemiyorsa parçalı taşınabilir örümcek platform tek çözümdür. Bu ayrımı telefon görüşmesinde birkaç soruyla netleştiriyoruz, kesin teklif için ise ölçü veya fotoğraf istiyoruz.",
            },
            {
                soru: "Montaj-demontaj süresi ne kadar sürer ve ücrete dahil mi?",
                cevap:
                    "Süre, makinenin modeline ve geçiş noktasının darlığına göre değişir; keşifte veya ölçü paylaşımı sırasında tahmini olarak bildirilir ve teklife bakım penceresi içinde geçen bir zaman dilimi olarak yazılır. Gizli veya sonradan eklenen bir kalem değildir. İlk kiralamanızda bu süreyi iş takviminize dahil etmeniz, günün sonunda beklenmedik bir gecikme yaşamamanızı sağlar.",
            },
            {
                soru: "Kapı ölçüsünü kendimiz mi almalıyız, yoksa siz mi geliyorsunuz?",
                cevap:
                    "İlk kiralamada iki seçenek de mümkündür: şerit metreyle kendiniz ölçüp fotoğrafla paylaşabilirsiniz ya da keşif talep edebilirsiniz. Katalog rakamına güvenmek yerine gerçek ölçüyü almanızı öneriyoruz, çünkü sonradan eklenen bir tezgâh veya raf plan üzerindeki ölçüyle sahadaki ölçüyü farklılaştırabilir. Emin değilseniz keşif her zaman daha güvenlidir.",
            },
            {
                soru: "Epoksi zeminde paletli tahrik gerçekten iz bırakmıyor mu?",
                cevap:
                    "Doğru paletli malzeme seçildiğinde ve zemin kuru tutulduğunda görünür iz bırakma riski düşüktür, ancak yüzde yüz garanti verilemez — zeminin yaşı, kaplama türü ve makinenin ağırlık dağılımı sonucu etkiler. Hassasiyeti yüksek bir zeminde önce küçük ve göze çarpmayan bir alanda deneme yapılmasını öneririz; destek ayaklarının bastığı noktalara da koruyucu tampon konur.",
            },
            {
                soru: "Sepet kapasitesi kaynak makinesi ve iki kişilik ekibi birlikte taşır mı?",
                cevap:
                    "Kompakt gövde nedeniyle bu sınıfın taşıma kapasitesi standart eklemli platforma göre daha düşüktür; modelin kapasite sınırı ilk görüşmede bildirilmelidir. İki kişi artı ağır bir alet kapasiteyi aşabilir; bu durumda alet ayrı bir turda taşınır veya halatla yukarı çekilir. İlk kiralamanızda taşıyacağınız aletlerin toplam ağırlığını paylaşmanız, sahada revizyon riskini ortadan kaldırır.",
            },
            {
                soru: "Standart sınıf geçebiliyorsa yine de örümcek platform kiralayabilir miyiz?",
                cevap:
                    "Teknik olarak mümkündür ama önermiyoruz. Örümcek platformun çalışma yüksekliği ve yatay erişimi standart eklemli sınıfın gerisindedir, birim maliyeti daha yüksektir ve montaj süresi eklenir. İlk kiralamanızda ihtiyacınıza en uygun ve en ekonomik sınıfı önermek bizim işimizdir; standart sınıf geçiyorsa onu öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Paletli sepetli platformların parçalı taşınabilirliği ve dar alan kullanımı EN 280 kapsamındaki genel makine sınıfı özellikleridir; tesis adı, kapasite ve mesafe rakamı uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "İlk Kiralamada Nakliye ve Teslimat Süreci Nasıl İşler",
        giris:
            "Eskişehir'de ilk kez platform veya forklift kiralayacak bir işletmenin çoğu zaman gözden kaçırdığı kalem, makine kirası değil nakliye ve teslimat sürecidir. Fiyat karşılaştırmasında yalnızca günlük veya haftalık kira rakamına bakmak, nakliyeyi ayrı fatura eden ya da teslimat saatini belirsiz bırakan bir teklifi yanlışlıkla 'ucuz' gösterebilir. Nakliye bedeli genellikle mesafeye, araç tipine (düşük tabanlı çekici mi, kamyon mu) ve teslimat saatine göre değişir; OSB içi teslimatlar genellikle aynı gün mümkünken, kent merkezindeki dar sokaklı adreslerde teslimat saati trafiğe göre planlanır. Bu sayfa, ilk kiralamanızda nakliye bedelinin nasıl hesaplandığını, teslimat gününde nelerin beklendiğini ve gecikme riskini azaltmak için hangi bilgilerin önceden paylaşılması gerektiğini anlatır.",
        maddeler: [
            {
                baslik: "Nakliye bedeli neye göre değişir",
                metin:
                    "Nakliye bedelini belirleyen üç unsur vardır: mesafe (Eskişehir merkez filosundan adrese olan yol), araç tipi (büyük sınıf makineler düşük tabanlı çekici gerektirebilir, kompakt sınıflar standart kamyonla taşınabilir) ve teslimat zamanlaması (aynı gün mü, planlı bir tarih mi). İlk kiralamada bu üç unsuru ayrı ayrı sormanız, teklifteki nakliye kalemini anlamanızı kolaylaştırır.",
            },
            {
                baslik: "Fiyat karşılaştırmasında nakliyenin gizlenmesi",
                metin:
                    "Birden fazla firmadan teklif alırken yalnızca toplam rakama bakmak yanıltıcı olabilir; düşük görünen bir teklif nakliyeyi ayrı fatura ediyor veya teslimat saatini garanti etmiyor olabilir. Doğru karşılaştırma, makine kirası, nakliye, operatör (varsa) ve sigortanın ayrı satırlarda görüldüğü tekliflerle yapılır. İlk kiralamanızda bu kalemleri ayrı ayrı isteyin.",
            },
            {
                baslik: "Erişim ölçüsü teslimat gününü doğrudan etkiler",
                metin:
                    "Teslimat aracının sahaya girebilmesi için kapı/geçit genişliği, iç yol durumu ve varsa park kısıtı önceden bilinmelidir. OSB'deki geniş parsellerde bu genellikle sorun çıkarmaz, ancak Odunpazarı gibi dar sokaklı bölgelerde teslimat saati trafiğe göre planlanır. Bu bilgiyi paylaşmayan bir işletme, teslimat gününde araç bekleme süresiyle karşılaşabilir.",
            },
            {
                baslik: "Teslimat günü makine tanıtımı",
                metin:
                    "İlk kiralamada teslimat, makinenin sahaya bırakılmasından ibaret değildir; kumandalar, acil iniş sistemi ve temel güvenlik noktaları teslimat sırasında gösterilir. Bu tanıtım özellikle ilk kez kullanan bir ekip için önemlidir ve teslimat süresine dahildir; teslimat saatini planlarken bu süre de hesaba katılmalıdır.",
            },
            {
                baslik: "İade ve erken teslim mantığı",
                metin:
                    "İş süresi belirsizse kısa süreyle başlayıp gerekirse uzatmak, uzun süre alıp erken iade etmekten daha ekonomiktir; çünkü erken iadede nakliye ve kurulum bedeli genellikle iade edilmez. İlk kiralamanızda süre tahmininizi biraz muhafazakâr tutup gerekirse uzatma yolunu tercih etmeniz, toplam maliyeti düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bölgeye göre tipik teslimat süresi",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada sık sorulan 'teslimat ne kadar sürer' sorusuna bölgeye göre genel bir çerçeve sunar; kesin süre filonun o an bulunduğu konuma göre değişir.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Tipik teslimat süresi", "Erişim özelliği", "Dikkat noktası"],
                    satirlar: [
                        ["OSB / 2. OSB", "Aynı gün mümkün", "Geniş parsel, düz yol", "Parsel girişi ölçüsü"],
                        ["Tepebaşı", "Aynı gün-ertesi gün", "Geniş cadde", "Kurum izin süreci"],
                        ["Odunpazarı", "Ertesi gün, saat planlı", "Dar sokak", "Teslimat saati/trafik"],
                        ["Çevre il (Bozüyük, Polatlı)", "1-2 gün", "Mesafeye bağlı", "Tarih esnekliği"],
                        ["Kırsal/tarım bölgesi", "Sezona göre planlı", "Zemin durumu", "Zemin tipi ve mevsim"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada nakliye paylaşımı",
                paragraflar: [
                    "Aynı OSB veya aynı sokakta birden fazla işletmenin küçük kalemlerini (kısa süreli bir bakım, bir tabela, bir aydınlatma işi) aynı güne toplaması, nakliye bedelini paylaşmanın en pratik yoludur. İlk kiralamanızda komşu işletmelere haber vermeniz veya bize başka bir talep olup olmadığını sormanız, size daha ekonomik bir seçenek sunabilir.",
                    "Bu paylaşım özellikle tek başına ekonomik olmayan yarım günlük işlerde fark yaratır; makine kısa mesafelerle bir işletmeden diğerine ilerler ve nakliye bedeli bölünür.",
                ],
            },
            {
                baslik: "Teslimat gününde nelere hazır olmalısınız",
                paragraflar: [
                    "Teslimat günü, sahada makinenin gireceği rotanın açık olması, çalışma noktasının belirlenmiş olması ve varsa yetkili bir kişinin teslim alması beklenir. İlk kiralamada bu üç hazırlığın önceden yapılması, teslimat süresini kısaltır ve aracın sahada beklemesini önler.",
                    "Teslimat sırasında yapılan makine tanıtımına en az bir kişinin katılması önerilir; bu kişi, kiralama süresi boyunca makineyi kullanacak ekibe temel bilgiyi aktarabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Nakliye bedeli kira fiyatına dahil mi, ayrı mı?",
                cevap:
                    "Bu firmadan firmaya değişir; bu yüzden ilk kiralamanızda teklifte nakliye kaleminin ayrı gösterilip gösterilmediğini sormanızı öneririz. Bizim tekliflerimizde makine kirası, nakliye, operatör (varsa) ve sigorta ayrı satırlarda görünür; böylece toplam rakamı kalem kalem karşılaştırabilirsiniz. Düşük görünen bir toplam bazen nakliyeyi ayrı fatura eden bir tekliften kaynaklanabilir.",
            },
            {
                soru: "OSB içinde aynı gün teslimat mümkün mü?",
                cevap:
                    "Filomuz o an OSB içinde çalışıyorsa aynı gün teslimat sık rastlanan bir durumdur; OSB'nin geniş yol ağı ve düzenli adresleme sistemi bunu kolaylaştırır. Ancak birden fazla tesisin aynı haftada yoğun talep oluşturduğu dönemlerde süre uzayabilir. İlk kiralamanızda tarihinizi mümkün olduğunca erken bildirmeniz, size en kısa teslim süresini sunar.",
            },
            {
                soru: "Dar sokaklı bir adrese teslimat nasıl planlanıyor?",
                cevap:
                    "Öncelikle sokağın genişliğini ve varsa park kısıtını sorarız; bazı adreslerde makine yalnızca trafiğin seyrek olduğu erken saatlerde girebilir. Teslimat saatini önceden belirlediğimizde makine sokakta beklemeden işyerinize ulaşır. İlk kiralamanızda sokak fotoğrafı paylaşmanız, bu planlamayı hızlandırır.",
            },
            {
                soru: "Erken iade ettiğimizde nakliye bedelini geri alır mıyız?",
                cevap:
                    "Genellikle hayır; nakliye ve kurulum bedeli süreye değil işleme bağlı bir maliyettir ve erken iadede iade edilmez. Bu yüzden süre belirsizse kısa süreyle başlayıp gerekirse uzatmanızı öneririz; uzun süre alıp erken iade etmek, baştan doğru süreyi tahmin etmekten daha pahalıya gelir.",
            },
            {
                soru: "Komşu işletmeyle aynı güne yazılırsak nakliye gerçekten ucuzlar mı?",
                cevap:
                    "Evet, bunu aktif olarak öneriyoruz. Aynı OSB veya aynı sokaktaki birden fazla işletmenin küçük kalemlerini aynı güne toplaması, makinenin kısa mesafelerle ilerlemesini ve nakliye bedelinin bölünmesini sağlar. İlk kiralamanızda bize başka bir talep olup olmadığını sorabilir veya komşularınıza kendiniz haber verebilirsiniz.",
            },
            {
                soru: "Teslimat sırasında makine kullanımı hakkında bilgi veriliyor mu?",
                cevap:
                    "Evet, teslimat süresine dahil olarak kumandalar, acil iniş sistemi ve temel güvenlik noktaları gösterilir. İlk kez kullanan bir ekip için bu tanıtım önemlidir; en az bir kişinin teslimat sırasında sahada bulunmasını öneririz ki bilgi doğrudan kullanıcıya aktarılsın.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Nakliye bedelinin mesafe-araç tipi-zamanlama unsurları ve teslimat sürecindeki genel adımlar sektör geneli bilgidir; süre ve mesafe rakamı uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "İlk Kez Forklift Kiralayacaklar İçin Seçim Rehberi",
        giris:
            "Eskişehir'de platform kiralama kadar sık karşılaşılan bir diğer ilk kiralama talebi forklifttir; ancak forklift seçimi platform seçiminden farklı sorular gerektirir. Burada belirleyici olan yükseklik değil, taşınacak yükün ağırlığı, kaldırma yüksekliği ve zemin tipidir. Yanlış kapasitede bir forklift kiralamanın bedeli platformdakiyle benzerdir: gereğinden büyük bir makine hem pahalı hem manevra güçlüğü yaratır, gereğinden küçük bir makine ise yükü kaldıramaz veya devrilme riski taşır. İlk kiralamada doğru karara ulaşmanın yolu, yükün ağırlığını, raf yüksekliğini ve zemin tipini (kapalı düz beton mu, açık düzensiz zemin mi) net şekilde belirlemekten geçer. Bu sayfa, forklift ve istifleme ekipmanı kiralamasında ilk kez talepte bulunacak bir işletmenin sorması gereken soruları ve tipik kapasite bantlarını anlatır.",
        maddeler: [
            {
                baslik: "Kapasite kararı yükün gerçek ağırlığına göre verilir",
                metin:
                    "İlk kiralamada en sık yapılan hata, kapasiteyi 'idare eder' mantığıyla düşük tutmaktır. Palet üzerindeki yükün gerçek ağırlığı (etiketten veya tartıdan) bilinmeden kapasite kararı verilmemelidir; kaldırma yüksekliği arttıkça forkliftin gerçek taşıma kapasitesi de düşer, bu yüzden yalnızca statik kapasiteye değil, yük diyagramındaki yükseklik-kapasite ilişkisine bakılır.",
            },
            {
                baslik: "Raf yüksekliği ve direk (mast) tipi",
                metin:
                    "Kaldırma yüksekliği, deponuzdaki en üst raf seviyesine göre belirlenir; standart üç kademeli direk çoğu depo için yeterlidir, ancak çok yüksek raf sistemlerinde dört kademeli veya dar koridor tipi direk gerekebilir. İlk kiralamada raf yüksekliğini ve koridor genişliğini birlikte paylaşmanız, doğru direk tipini netleştirir.",
            },
            {
                baslik: "Zemin ve lastik tipi seçimi",
                metin:
                    "Kapalı, düz beton zeminde standart dolgu veya havalı lastikli forklift yeterlidir; açık sahada, düzensiz veya çamurlu zeminde ise geniş taban ve iri desenli lastikli sınıf tercih edilir. İlk kiralamada çalışma ortamını (iç mekân mı, dış saha mı, zemin tipi ne) belirtmeniz, teklifin doğruluğunu doğrudan etkiler.",
            },
            {
                baslik: "Yakıt tipi: dizel, LPG yoksa elektrikli",
                metin:
                    "Kapalı mekânda sürekli çalışacaksa elektrikli veya LPG'li (kapalı alan onaylı egzoz sistemine sahip) sınıf tercih edilir; açık sahada uzun süreli ve yoğun kullanımda dizel sınıf daha pratik olabilir. İlk kiralamada ortamı ve kullanım süresini belirtmeniz, doğru yakıt tipini netleştirir.",
            },
            {
                baslik: "Operatör ihtiyacı ve ehliyet",
                metin:
                    "Forklift kullanımı sertifikalı operatör gerektirir; işletmenizde sertifikalı operatör yoksa operatörlü kiralama seçeneği değerlendirilir. İlk kiralamada bu ihtiyacı baştan belirtmeniz, teklife operatör kalemini doğru şekilde eklememizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlk kiralamada tipik forklift-iş eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada sık karşılaşılan iş tiplerinin tipik forklift sınıfını özetler; kesin karar yük ağırlığı ve raf yüksekliği ile netleşir.",
                ],
                tablo: {
                    basliklar: ["İş", "Tipik kapasite", "Zemin/ortam", "Dikkat noktası"],
                    satirlar: [
                        ["Depo içi palet istifleme", "2-2,5 ton", "Kapalı beton", "Raf yüksekliği"],
                        ["Üretim hattına malzeme taşıma", "1,5-2 ton", "Kapalı beton", "Koridor genişliği"],
                        ["Açık sahada malzeme indirme", "3 ton ve üzeri", "Açık, düzensiz", "Lastik tipi"],
                        ["Tarım/silo sahası yük taşıma", "2-3 ton", "Açık, toprak/çim", "Mevsimsel zemin"],
                        ["Yüksek raf sistemi", "1,5-2 ton, çok kademeli direk", "Kapalı, dar koridor", "Direk tipi"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada sorulması gereken üç bilgi",
                paragraflar: [
                    "Doğru forklift teklifine ulaşmanın en kısa yolu üç bilginin baştan paylaşılmasıdır: taşınacak yükün gerçek ağırlığı, kaldırma yapılacak en yüksek nokta ve çalışma zemininin tipi. Bu üç bilgi olmadan verilen bir tahmini teklif, sahada makinenin yükü kaldıramadığı veya zeminde zorlandığı bir durumla sonuçlanabilir.",
                    "İlk kiralamanızda bu üç bilgiyi paylaşmanız, hem doğru kapasitede bir makine almanızı hem de gereksiz yere büyük ve pahalı bir sınıf kiralamaktan kaçınmanızı sağlar.",
                ],
            },
            {
                baslik: "Forklift ile platform arasında karar",
                paragraflar: [
                    "Bazı işlerde forklift mi platform mu gerektiği net değildir; örneğin bir malzemeyi yükseğe kaldırıp orada bırakmak forkliftle, o noktada bir süre çalışmak (montaj, bakım) ise platformla yapılır. İlk kiralamada işin niteliğini (yalnızca taşıma mı, yoksa yukarıda çalışma mı) belirtmeniz, doğru ekipmana yönlendirilmenizi sağlar.",
                    "Bazı işlerde her iki ekipman birlikte kullanılır: forklift malzemeyi sahaya taşır, platform ise montaj noktasına erişimi sağlar. İlk kiralamanızda işin tüm aşamalarını anlatmanız, ihtiyacınız olan ekipman kombinasyonunu netleştirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İlk kez forklift kiralıyoruz, hangi kapasiteyi seçmeliyiz?",
                cevap:
                    "Taşıyacağınız yükün gerçek ağırlığını (etiketten veya tartıdan) ve kaldırma yapacağınız en yüksek noktayı bildirmeniz yeterlidir. Kaldırma yüksekliği arttıkça forkliftin gerçek taşıma kapasitesi düştüğü için, yalnızca statik kapasiteye değil yükseklik-kapasite ilişkisine göre öneri veririz. Emin değilseniz düşük kapasiteyle başlamak yerine gerçek ağırlığı ölçüp bildirmenizi öneririz.",
            },
            {
                soru: "Açık sahada, düzensiz zeminde forklift kullanabilir miyiz?",
                cevap:
                    "Evet, ancak standart iç mekân lastiği yerine geniş taban ve iri desenli lastikli sınıf tercih edilir. İlk kiralamanızda çalışma zemininin tipini (toprak mı, çim mi, düzensiz mi) belirtmeniz, doğru lastik ve şase tipini netleştirir; standart sınıf düzensiz zeminde hem verimsiz hem riskli olabilir.",
            },
            {
                soru: "Operatörümüz yok, siz operatör sağlıyor musunuz?",
                cevap:
                    "Evet, sertifikalı operatörlü kiralama seçeneğimiz var. İlk kiralamanızda operatör ihtiyacınızı baştan belirtmeniz, teklife bu kalemi doğru şekilde eklememizi sağlar. Operatörsüz kiralamada ise işletmenizin sertifikalı bir operatörü olması gerekir; bu belgeyi teslimat öncesinde kontrol ederiz.",
            },
            {
                soru: "Kapalı mekânda dizel forklift kullanabilir miyiz?",
                cevap:
                    "Standart dizel forklift kapalı, havalandırması sınırlı mekânlarda önerilmez; bunun yerine elektrikli veya kapalı alan onaylı egzoz sistemine sahip LPG'li sınıf tercih edilir. İlk kiralamanızda ortamı (kapalı mı açık mı, havalandırma durumu) belirtmeniz, doğru yakıt tipini netleştirir.",
            },
            {
                soru: "Raf yüksekliğimiz standart değil, hangi direk tipini almalıyız?",
                cevap:
                    "Raf sisteminizin en üst seviyesini ve koridor genişliğini paylaşmanız yeterlidir; standart üç kademeli direk çoğu depo için yeter ama çok yüksek raf sistemlerinde dört kademeli veya dar koridor tipi direk gerekebilir. İlk kiralamanızda bu ölçüleri baştan bildirmeniz, sahada uyumsuzluk riskini ortadan kaldırır.",
            },
            {
                soru: "Forklift mi platform mu kiralamalıyız, işimiz ikisine de benziyor?",
                cevap:
                    "İşin niteliğine bakılır: yalnızca bir malzemeyi yükseğe taşıyıp bırakmak forkliftle, o noktada bir süre çalışmak (montaj, bakım, tesisat) ise platformla yapılır. Bazı işlerde ikisi birlikte kullanılır. İlk kiralamanızda işin tüm aşamalarını anlatırsanız, ihtiyacınız olan doğru ekipman veya kombinasyonu size öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift kapasite-yükseklik ilişkisi, direk tipleri ve zemin/lastik seçimi genel iş makinesi bilgisidir; kapasite ve mesafe rakamı uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "İlk Kiralamada Eklemli Platform Ne Zaman Doğru Seçimdir",
        giris:
            "Eskişehir'de ilk kez yüksekte çalışma makinesi kiralayacak bir işletme için eklemli platform (boom), makaslı sınıfa göre daha esnek ama biraz daha karmaşık bir seçimdir. Eklemli sınıfın asıl avantajı, bomu kırarak bir engelin üzerinden veya yanından hedefe ulaşabilmesidir; makaslı sınıf ise yalnızca dikey ve doğrudan hedefin altından erişebilir. İlk kiralamada bu farkı bilmemek, yanlış sınıf kiralanmasının en sık nedenidir — hedefin altı engelliyse (tezgâh, raf, boru hattı, sundurma) makaslı sınıf işe yaramaz, eklemli sınıf gerekir. Bu sayfa, eklemli platformun ne zaman gerçekten gerekli olduğunu, akülü ve dizel seçenekleri arasındaki farkı ve OSB'deki tipik kullanım senaryolarını anlatır.",
        maddeler: [
            {
                baslik: "Makaslı-eklemli ayrımının tek kriteri: hedefin altı",
                metin:
                    "Hedefin tam altına makine park edilebiliyorsa makaslı sınıf yeterlidir ve daha ekonomiktir; hedefin altı doluysa (bir tezgâh, raf, boru hattı veya sundurma engel oluşturuyorsa) eklemli sınıf gerekir çünkü bomu kırarak engelin üzerinden erişim sağlar. İlk kiralamada bu tek soruyu netleştirmek, doğru sınıfı belirlemenin en hızlı yoludur.",
            },
            {
                baslik: "Akülü mü dizel mi: ortam belirler",
                metin:
                    "Kapalı ve düz zeminde akülü eklemli sınıf tercih edilir; sessiz çalışır, egzoz gazı çıkarmaz ve iç mekân zeminine daha az yük bindirir. Açık sahada veya düzensiz zeminde dizel ya da 4x4 tahrikli eklemli sınıf gerekir. İlk kiralamada çalışma ortamınızı belirtmeniz, doğru tahrik tipini netleştirir.",
            },
            {
                baslik: "Çalışma yüksekliği ve yatay erişim birlikte değerlendirilir",
                metin:
                    "Eklemli sınıfta yalnızca dikey yükseklik değil, yatay erişim mesafesi de önemlidir; bir engelin üzerinden hedefe ulaşmak için bomun hem yeterince yüksek hem yeterince uzun olması gerekir. İlk kiralamada hedefin yalnızca yüksekliğini değil, engelden ne kadar uzakta olduğunu da belirtmeniz, doğru model seçimini netleştirir.",
            },
            {
                baslik: "Şase genişliği ve kapı geçişi",
                metin:
                    "Eklemli platformların şasesi makaslı sınıfa göre genellikle daha dar olsa da, büyük çalışma yükseklikli modellerin şasesi de büyür. İlk kiralamada kapı ve koridor genişliğini paylaşmanız, standart eklemli sınıfın geçip geçmediğini netleştirir; geçmiyorsa kompakt eklemli veya parçalı taşınabilir örümcek platform sınıfı değerlendirilir.",
            },
            {
                baslik: "Operatör deneyimi ve eğitim",
                metin:
                    "Eklemli platformun bom kontrolü makaslı sınıfa göre biraz daha fazla dikkat gerektirir; ilk kez kullanan bir operatör için teslimat sırasında yapılan tanıtım özellikle önemlidir. İlk kiralamada operatörünüzün deneyim seviyesini belirtmeniz, teslimat sırasındaki tanıtımın kapsamını netleştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlk kiralamada eklemli sınıf gerektiren tipik senaryolar",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada eklemli sınıfın gerekli olduğu tipik senaryoları ve tahrik tipini özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Neden eklemli gerekir", "Tahrik", "Tipik yükseklik bandı"],
                    satirlar: [
                        ["Tezgâh üstü nokta bakımı", "Altı dolu, engel var", "Akülü", "10-16 m"],
                        ["Cephe/sundurma altı işi", "Sundurma engel oluşturur", "Akülü/dizel", "14-18 m"],
                        ["Boru hattı çevresi bakım", "Hat engel oluşturur", "Akülü", "10-14 m"],
                        ["Açık sahada direk/aydınlatma", "Zemin düzensiz", "Dizel 4x4", "16-20 m"],
                        ["Depo raf üstü, engelli koridor", "Raf sistemi engel", "Akülü", "10-14 m"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada makaslı yerine eklemli seçme hatası",
                paragraflar: [
                    "Bazı işletmeler ilk kiralamada 'eklemli her işi yapar' düşüncesiyle her durumda eklemli sınıf ister; ancak hedefin altı boşsa makaslı sınıf hem daha geniş sepetiyle hem daha düşük maliyetiyle daha doğru seçimdir. İlk kiralamada bu tercihi netleştirmek için önce hedefin altının boş mu dolu mu olduğunu soruyoruz.",
                    "Gereksiz yere eklemli sınıf kiralamak, hem kira bedelini hem de sahadaki manevra süresini uzatabilir; makaslı sınıf yeterliyse onu öneririz.",
                ],
            },
            {
                baslik: "Kısa süreli ve uzun süreli eklemli kiralama arasındaki fark",
                paragraflar: [
                    "Bir-iki günlük tek noktalı bir iş için günlük tarife doğal seçimdir; üç günü aşan veya birden fazla noktayı kapsayan işlerde haftalık paket genellikle daha ekonomiktir çünkü nakliye ve kurulum bedeli günlere değil haftaya yayılır. İlk kiralamanızda iş süresini mümkün olduğunca gerçekçi tahmin etmeniz, doğru tarife seçimini kolaylaştırır.",
                    "Süre belirsizse kısa süreyle başlayıp gerekirse uzatmak, uzun süre alıp erken iade etmekten daha ekonomiktir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hedefin altı boş, yine de eklemli mi kiralamalıyız?",
                cevap:
                    "Hayır, hedefin altı boşsa makaslı sınıf yeterlidir ve genellikle daha ekonomiktir; sepeti daha geniştir ve kullanımı daha basittir. Eklemli sınıf yalnızca hedefin altında bir engel (tezgâh, raf, boru hattı, sundurma) olduğunda gerekir çünkü bomu kırarak engelin üzerinden erişim sağlar. İlk kiralamanızda hedefin altını tarif etmeniz, doğru sınıfı netleştirir.",
            },
            {
                soru: "Akülü eklemli platform açık sahada kullanılabilir mi?",
                cevap:
                    "Kısa süreli ve düz zeminde mümkün olsa da önerilmez; akülü sınıf kapalı ve düz zemin için tasarlanmıştır. Açık sahada veya düzensiz zeminde dizel ya da 4x4 tahrikli eklemli sınıf tercih edilmelidir. İlk kiralamanızda çalışma ortamınızı belirtmeniz, doğru tahrik tipini netleştirir.",
            },
            {
                soru: "Bom uzunluğu yeterli mi, hedefe engelin üzerinden ulaşabilir mi?",
                cevap:
                    "Bu, hedefin yüksekliği kadar engelden yatay uzaklığına da bağlıdır. İlk kiralamanızda yalnızca yüksekliği değil, engelden hedefe olan yatay mesafeyi de bildirmeniz, doğru model ve bom uzunluğunu netleştirir; eksik bilgiyle verilen bir tahmin sahada yetersiz kalabilir.",
            },
            {
                soru: "Standart eklemli sınıf kapıdan geçmiyor, ne yapmalıyız?",
                cevap:
                    "Kapı ve koridor genişliğini paylaşmanız, kompakt eklemli sınıfın geçip geçmediğini netleştirir. O da geçmiyorsa parçalı taşınabilir sepetli örümcek platform sınıfı değerlendirilir. İlk kiralamanızda bu ölçüyü baştan bildirmeniz, sahada 'makine giremedi' sürprizini önler.",
            },
            {
                soru: "Operatörümüz eklemli platformu ilk kez kullanacak, ne yapmalıyız?",
                cevap:
                    "Teslimat sırasında yapılan tanıtımda kumandalar, bom kontrolü ve acil iniş sistemi gösterilir; ilk kez kullanan bir operatör için bu tanıtıma ekstra zaman ayırıyoruz. İlk kiralamanızda operatörünüzün deneyim seviyesini belirtmeniz, teslimat sırasındaki tanıtımın kapsamını netleştirir.",
            },
            {
                soru: "Günlük mü haftalık mı tarife seçmeliyiz?",
                cevap:
                    "İşin bir-iki gün süreceği kesinse günlük tarife doğal seçimdir; üç günü aşan işlerde haftalık paket genellikle daha ekonomiktir çünkü nakliye ve kurulum bedeli haftaya yayılır. Süre belirsizse kısa süreyle başlayıp gerekirse uzatmanızı öneririz; erken iadede nakliye ve kurulum bedeli genellikle iade edilmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platform sınıfının bom-erişim özellikleri ve akülü/dizel ayrımı EN 280 kapsamındaki genel makine sınıfı bilgisidir; kapasite ve mesafe rakamı uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İlk Kiralamada İç Mekân ve Depo İçi Platform Seçimi",
        giris:
            "İç mekân ve depo içi platform kiralaması, Eskişehir'de ilk kiralama taleplerinin büyük bölümünü oluşturur; ancak 'iç mekân' tek bir kategori değildir — atölye tavan aydınlatması, depo raf üstü işleri, tesisat-boru hattı bakımı ve hastane/AVM gibi hassas ortamlar birbirinden farklı gereksinimler taşır. İlk kiralamada doğru sınıfa ulaşmanın yolu, ortamın zemin tipini (epoksi mi, standart beton mu), koridor genişliğini ve varsa özel kısıtları (gürültü, egzoz gazı, hijyen) netleştirmekten geçer. Kapalı mekânda genellikle akülü sınıf tercih edilir çünkü sessiz çalışır ve egzoz gazı çıkarmaz; ancak zemin taşıma kapasitesi düşükse veya koridor darsa bu tercih değişebilir. Bu sayfa, iç mekân ve depo içi kiralamada ilk kez talepte bulunacak bir işletmenin sorması gereken soruları anlatır.",
        maddeler: [
            {
                baslik: "Akülü sınıf iç mekânın varsayılan tercihidir",
                metin:
                    "Kapalı mekânda egzoz gazı çıkarmaması ve düşük gürültüsü nedeniyle akülü makaslı veya eklemli sınıf varsayılan tercihtir. İlk kiralamada aksini belirtmediğiniz sürece akülü sınıf önerilir; yalnızca zemin taşıma kapasitesi çok düşükse veya iş süresi çok uzunsa (şarj süresi iş akışını kesintiye uğratabilir) alternatif değerlendirilir.",
            },
            {
                baslik: "Zemin tipi ve koruyucu tedbir",
                metin:
                    "Epoksi, perdahlı beton veya hassas kaplamalı zeminlerde tekerlek izi riski vardır; bu durumda lastik tipi ve destek ayağı altına konacak koruyucu tampon önceden planlanır. İlk kiralamada zemin tipini belirtmeniz, hem doğru makineyi hem de gerekli koruyucu tedbiri netleştirir.",
            },
            {
                baslik: "Hijyen ve özel ortam kısıtları",
                metin:
                    "Hastane, gıda üretim tesisi veya AVM gibi hijyen standardı yüksek ortamlarda makinenin temizlik durumu ve çalışma saatleri (örneğin gece, ziyaretçi olmayan saatler) önceden netleştirilir. İlk kiralamada ortamınızın özel kısıtlarını (hijyen, gürültü, çalışma saati) belirtmeniz, teklifin ve planlamanın buna göre şekillenmesini sağlar.",
            },
            {
                baslik: "Koridor ve raf aralığı ölçüsü",
                metin:
                    "Depo içi işlerde en sık karşılaşılan kısıt koridor genişliğidir; standart makaslı sınıfın şasesi bazı dar koridorlara sığmayabilir. İlk kiralamada koridor genişliğini ve raf yüksekliğini paylaşmanız, dar koridor tipi kompakt makaslı sınıfın gerekip gerekmediğini netleştirir.",
            },
            {
                baslik: "Şarj süresi ve iş akışı",
                metin:
                    "Akülü makinelerin şarj süresi iş akışını etkileyebilir; çok uzun süreli veya vardiyalı çalışmada şarj planlaması önceden yapılır. İlk kiralamada iş süresini ve çalışma vardiyasını belirtmeniz, gerekirse ek batarya veya şarj planı önerimizi netleştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân ortam tipine göre makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada sık karşılaşılan iç mekân ortam tiplerini ve tipik makine seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Zemin", "Özel kısıt", "Tipik sınıf"],
                    satirlar: [
                        ["Standart atölye", "Standart beton", "Yok", "Akülü makaslı"],
                        ["Epoksi kaplı üretim holü", "Epoksi", "İz bırakmama", "Akülü, koruyucu tampon"],
                        ["Dar koridorlu depo", "Standart beton", "Koridor genişliği", "Dar koridor tipi makaslı"],
                        ["Hastane/AVM", "Hassas kaplama", "Hijyen, gece çalışma", "Akülü, temiz gövde"],
                        ["Tesisat/boru hattı altı", "Değişken", "Engel var", "Kompakt eklemli"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada ortam bilgisi neden kritik",
                paragraflar: [
                    "İç mekân kiralamalarında sahaya varan makinenin işe yaramaması, genellikle ortam bilgisinin eksik paylaşılmasından kaynaklanır — zemin tipi belirtilmemiş, koridor ölçüsü verilmemiş veya hijyen kısıtı söylenmemiş olabilir. İlk kiralamanızda bu bilgileri baştan paylaşmanız, teklifin ve sevk edilecek makinenin doğruluğunu garanti eder.",
                    "Fotoğraf paylaşımı, sözlü tarife göre çok daha güvenilir bir yöntemdir; zemin tipini, koridor genişliğini ve varsa engelleri gösteren birkaç fotoğraf, teklif aşamasında büyük fark yaratır.",
                ],
            },
            {
                baslik: "Vardiyalı ve gece çalışmasında planlama",
                paragraflar: [
                    "Hijyen standardı yüksek ortamlarda (hastane, gıda tesisi) çalışma genellikle gece veya ziyaretçi olmayan saatlerde yapılır. İlk kiralamada bu çalışma saatini belirtmeniz, teslimat ve makine bekleme planını buna göre kurmamızı sağlar.",
                    "Vardiyalı çalışmada akülü makinenin şarj döngüsü de planlamaya dahil edilir; gerekirse ek batarya veya vardiya arasında kısa şarj molası önerilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İlk kiralamada iç mekân için hangi bilgileri paylaşmalıyız?",
                cevap:
                    "Zemin tipini (epoksi mi, standart beton mu), koridor/kapı genişliğini, hedefin gerçek yüksekliğini ve varsa özel kısıtları (hijyen, gürültü, çalışma saati) paylaşmanız yeterlidir. Bu bilgiler, hem doğru makine sınıfını hem de gerekli koruyucu tedbirleri baştan netleştirir; birkaç fotoğraf eklemeniz süreci daha da hızlandırır.",
            },
            {
                soru: "Epoksi zeminde tekerlek izi bırakmayacağını garanti edebiliyor musunuz?",
                cevap:
                    "Doğru lastik tipi ve destek ayağı altına konan koruyucu tamponla iz bırakma riski düşürülür, ancak yüzde yüz garanti verilemez; zeminin yaşı ve kaplama türü sonucu etkiler. Hassasiyeti yüksek bir zeminde önce küçük bir alanda deneme yapılmasını öneririz.",
            },
            {
                soru: "Hastane veya AVM gibi ortamlarda gece çalışma mümkün mü?",
                cevap:
                    "Evet, hijyen standardı yüksek ortamlarda çalışma genellikle ziyaretçi olmayan saatlerde planlanır. İlk kiralamanızda bu ihtiyacı belirtmeniz, teslimat ve çalışma saatini buna göre kurmamızı sağlar; makinenin temizlik durumu da bu tür ortamlar için ayrıca kontrol edilir.",
            },
            {
                soru: "Dar koridorlu bir depoda standart makaslı sınıf sığar mı?",
                cevap:
                    "Bu, koridor genişliğine bağlıdır; standart makaslı sınıf bazı dar koridorlara sığmayabilir, bu durumda dar koridor tipi kompakt makaslı sınıf önerilir. İlk kiralamanızda koridor genişliğini ve raf aralığını paylaşmanız, doğru sınıfı netleştirir.",
            },
            {
                soru: "Akülü makinenin şarjı iş sırasında biterse ne olur?",
                cevap:
                    "İş süresini ve vardiya planını baştan paylaşırsanız, gerekirse ek batarya veya şarj molası öneririz; bu riski teslimat öncesinde ortadan kaldırırız. Kısa süreli standart işlerde tam şarjlı bir makine bir vardiyayı sorunsuz karşılar; uzun ve kesintisiz işlerde bu planlama özellikle önemlidir.",
            },
            {
                soru: "Tesisat/boru hattı altında çalışacağız, hangi sınıf uygun?",
                cevap:
                    "Hattın altı engel oluşturduğu için kompakt eklemli sınıf genellikle en uygun seçimdir; bomu kırarak hattın yanından veya altından erişim sağlar. İlk kiralamanızda hattın yüksekliğini ve altındaki boşluğu belirtmeniz, doğru model seçimini netleştirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İç mekân platform seçiminde zemin-koridor-hijyen ayrımı ve akülü sınıfın kapalı mekân avantajları genel bilgidir; tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "İlk Kiralamada Çelik Konstrüksiyon Montaj Platformu Seçimi",
        giris:
            "Çelik konstrüksiyon montaj işleri, tek günlük bir kiralamadan çok, proje süresince devam eden bir platform ihtiyacı doğurur; bu da ilk kiralamayı standart iç mekân veya kısa süreli bir işten farklı kılar. İlk kiralamada belirleyici sorular şunlardır: montaj yüksekliği projenin hangi aşamasında değişecek, saha zemini düz mü yoksa henüz tesviye edilmemiş mi, ve birden fazla ekip aynı anda mı çalışacak. Eskişehir'deki OSB ve 2. OSB'de yeni hol inşaatları sık görülür; bu tesislerde montaj süreci genellikle haftalar sürer ve platform ihtiyacı projenin evresine göre değişir. Bu sayfa, ilk kez montaj projesi için platform kiralayacak bir işletmenin süreç boyunca karşılaşacağı kararları anlatır.",
        maddeler: [
            {
                baslik: "Proje evresine göre değişen yükseklik ihtiyacı",
                metin:
                    "Montajın erken evresinde (kolon-kiriş dikimi) daha yüksek erişim gerekirken, ilerleyen evrelerde (kaplama, tesisat) daha kompakt ve manevra kabiliyeti yüksek makineler yeterli olabilir. İlk kiralamada tek bir makine yerine projenin evrelerine göre değişen bir plan önerilir; bu, gereksiz büyük makineyi tüm proje boyunca tutmaktan daha ekonomiktir.",
            },
            {
                baslik: "Henüz tesviye edilmemiş zeminde makine seçimi",
                metin:
                    "İnşaat sürecindeki bir sahada zemin henüz düzleştirilmemiş, moloz veya malzeme yığınları olabilir; bu durumda standart akülü sınıf yerine dizel 4x4 tahrikli, geniş taban lastikli sınıf tercih edilir. İlk kiralamada saha zemininin durumunu (tesviye edilmiş mi, henüz değil mi) belirtmeniz, doğru şase tipini netleştirir.",
            },
            {
                baslik: "Birden fazla ekibin aynı sahada çalışması",
                metin:
                    "Montaj projelerinde genellikle birden fazla ekip (çelik montaj, kaynak, elektrik) aynı sahada çalışır; bu durumda birden fazla makinenin aynı anda kullanılması ve çakışmaması için bir saha trafiği planı gerekir. İlk kiralamada kaç ekibin aynı anda çalışacağını belirtmeniz, gerekli makine sayısını ve saha planını netleştirir.",
            },
            {
                baslik: "Uzun süreli kiralamada bakım ve destek",
                metin:
                    "Proje süresince devam eden bir kiralamada makinenin periyodik bakımı ve olası arıza durumunda hızlı müdahale önemlidir. İlk kiralamada projenin tahmini süresini belirtmeniz, uzun süreli kiralama için bakım ve yedek makine planını netleştirir.",
            },
            {
                baslik: "Yük kapasitesi: malzeme ve ekip birlikte hesaplanır",
                metin:
                    "Montaj işlerinde sepette yalnızca operatör değil, çelik profil, kaynak makinesi veya bağlantı malzemesi de taşınabilir; bu durumda sepet kapasitesi malzeme ağırlığıyla birlikte hesaplanmalıdır. İlk kiralamada taşınacak malzeme tipini ve ağırlığını belirtmeniz, kapasite aşımı riskini önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj evresine göre tipik platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada montaj projesinin evresine göre tipik platform ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["Evre", "Tipik iş", "Zemin durumu", "Tipik sınıf"],
                    satirlar: [
                        ["Kolon-kiriş dikimi", "Yüksek nokta montaj", "Tesviye edilmemiş", "Dizel 4x4 teleskopik"],
                        ["Çelik kaplama", "Orta yükseklik kaplama", "Kısmen tesviye", "Dizel eklemli"],
                        ["Tesisat/kablo döşeme", "Tavan altı çalışma", "Tesviye edilmiş", "Akülü eklemli"],
                        ["İç mekân tamamlama", "İnce işçilik", "Tamamlanmış zemin", "Akülü makaslı"],
                        ["Cephe/dış kaplama", "Dış cephe erişimi", "Değişken", "Dizel teleskopik"],
                    ],
                },
            },
            {
                baslik: "Proje süresince değişen makine planı",
                paragraflar: [
                    "Uzun süreli montaj projelerinde tek bir makineyi baştan sona tutmak yerine, projenin evresine göre makine değiştirmek genellikle daha ekonomiktir. İlk kiralamada projenizin tahmini takvimini ve evrelerini paylaşmanız, size bu değişken planı önermemizi sağlar.",
                    "Bu yaklaşım, erken evrede gereken büyük ve pahalı sınıfı tüm proje boyunca tutmaktan kaçınmanızı, buna karşılık ihtiyaç arttığında hızlıca daha büyük sınıfa geçmenizi sağlar.",
                ],
            },
            {
                baslik: "Saha trafiği ve birden fazla makine koordinasyonu",
                paragraflar: [
                    "Birden fazla ekibin aynı sahada çalıştığı montaj projelerinde, makinelerin çalışma alanlarının çakışmaması için önceden bir saha trafiği planı yapılır. İlk kiralamada kaç ekibin ve kaç makinenin aynı anda çalışacağını belirtmeniz, bu planı baştan netleştirir.",
                    "Saha trafiği planı, özellikle vinç veya ağır malzeme taşıma güzergâhıyla platform çalışma alanının kesiştiği noktalarda kritik önem taşır; bu noktalar önceden işaretlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Montaj projemiz haftalarca sürecek, tek bir makine mi kiralamalıyız?",
                cevap:
                    "Genellikle önermiyoruz. Projenin erken evresinde (kolon-kiriş dikimi) daha yüksek ve güçlü bir sınıf gerekirken, ilerleyen evrelerde (tesisat, iç mekân) daha kompakt bir makine yeterli olur. İlk kiralamanızda projenizin evrelerini paylaşmanız, size evreye göre değişen ve daha ekonomik bir makine planı sunmamızı sağlar.",
            },
            {
                soru: "Saha zemini henüz tesviye edilmedi, hangi makine çalışabilir?",
                cevap:
                    "Tesviye edilmemiş, moloz veya malzeme yığınlı bir zeminde dizel 4x4 tahrikli, geniş taban lastikli sınıf tercih edilir; standart akülü sınıf bu tip zeminde zorlanır. İlk kiralamanızda saha zemininin durumunu belirtmeniz, doğru şase tipini netleştirir.",
            },
            {
                soru: "Birden fazla ekip aynı anda çalışacak, kaç makine gerekir?",
                cevap:
                    "Bu, ekiplerin çalışma noktalarının birbirine yakınlığına ve iş sürelerine bağlıdır. İlk kiralamanızda kaç ekibin, hangi noktalarda ve ne zaman çalışacağını paylaşmanız, gerekli makine sayısını ve saha trafiği planını netleştirir; çakışan çalışma alanları önceden işaretlenir.",
            },
            {
                soru: "Sepette çelik profil veya kaynak makinesi taşıyabilir miyiz?",
                cevap:
                    "Evet, ancak sepet kapasitesi operatör ağırlığıyla birlikte hesaplanmalıdır. İlk kiralamanızda taşınacak malzemenin tipini ve tahmini ağırlığını belirtmeniz, kapasiteyi aşmayan doğru sınıfı netleştirir; kapasite sınırına yakın işlerde ikinci bir taşıma turu planlanabilir.",
            },
            {
                soru: "Uzun süreli kiralamada makine arızalanırsa ne olur?",
                cevap:
                    "Proje süresince devam eden kiralamalarda periyodik bakım ve olası arıza durumunda hızlı müdahale planı önceden kurulur. İlk kiralamanızda projenin tahmini süresini belirtmeniz, bu bakım ve yedek makine planını netleştirir; kısa süreli kiralamalarda bu ihtiyaç genellikle doğmaz.",
            },
            {
                soru: "Montaj projesine hangi bilgilerle başlamalıyız?",
                cevap:
                    "Projenin tahmini süresi ve evreleri, saha zemininin durumu, kaç ekibin aynı anda çalışacağı ve taşınacak malzeme tipi yeterlidir. Bu bilgilerle projenin baştan sona en ekonomik ve doğru makine planını çıkarırız; evreler ilerledikçe planı birlikte güncelleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj sürecinin evreleri ve platform ihtiyacının evreye göre değişimi genel saha pratiğidir; proje adı, tesis ve rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "İlk Kiralamada Tarım ve Silo Sahası İçin Platform Seçimi",
        giris:
            "Eskişehir'in Çifteler, Mahmudiye ve Sivrihisar gibi ilçelerinde tarım işleme tesisleri ve silo sahaları, kent merkezindeki bir atölyeden çok farklı bir kiralama profili taşır: zemin genellikle toprak veya çim, çalışma alanı açık saha, ve iş genellikle mevsimsel bir pencereye sıkışır. İlk kiralamada belirleyici soru, zemin tipinin (kuru toprak mı, yağış sonrası çamurlu mu) ve mevsimin (hasat öncesi mi, hasat sonrası mı) ne olduğudur; standart akülü veya dizel iç mekân sınıfı bu ortamda genellikle yetersiz kalır, dizel 4x4 arazi tipi sınıf gerekir. Bu sayfa, tarım ve silo sahası için ilk kez platform kiralayacak bir işletmenin sorması gereken soruları ve mevsimsel planlama mantığını anlatır.",
        maddeler: [
            {
                baslik: "Zemin tipi mevsime göre değişir",
                metin:
                    "Aynı saha, kuru mevsimde sert ve düz görünürken yağış sonrasında çamurlu ve yumuşak hale gelebilir; bu, makinenin batma veya devrilme riskini doğrudan etkiler. İlk kiralamada talebin hangi mevsimde olduğunu ve son yağıştan ne kadar süre geçtiğini belirtmeniz, doğru şase ve lastik tipini netleştirir.",
            },
            {
                baslik: "Silo yüksekliği ve dikey erişim",
                metin:
                    "Silo yapıları genellikle standart bir atölyeden çok daha yüksektir; dış cephe, üst kapak veya havalandırma bakımı için yüksek erişimli teleskopik veya eklemli sınıf gerekir. İlk kiralamada silonun gerçek yüksekliğini (varsa teknik çizimden, yoksa ölçerek) belirtmeniz, doğru sınıfı netleştirir.",
            },
            {
                baslik: "Mevsimsel iş penceresi",
                metin:
                    "Tarım işleme tesislerinde yoğun sezon (hasat, ürün kabulü) başladığında bakım için ayrılabilecek zaman daralır; sezon öncesi veya sonrası pencereler bakım için daha uygundur. İlk kiralamada işinizin hangi pencereye denk geldiğini belirtmeniz, hem makine müsaitliğini hem de saha erişimini planlamamızı sağlar.",
            },
            {
                baslik: "Toz ve tarımsal malzeme ortamı",
                metin:
                    "Tahıl tozu veya benzeri malzemenin yoğun olduğu bölümlerde (kabul sahası, işleme hattı) ortam hassasiyeti standart bir atölyeden farklıdır; bu bölgelerde çalışma öncesi temizlik penceresi veya özel önlem gerekebilir. İlk kiralamada çalışacağınız bölümün toz yoğunluğunu belirtmeniz, uygun zamanlamayı netleştirir.",
            },
            {
                baslik: "Uzun mesafe ve erişim yolu",
                metin:
                    "Kırsal bölgedeki tesislere ulaşım, kent merkezine göre daha uzun mesafe ve bazen dar/toprak yol gerektirir. İlk kiralamada tesisin erişim yolunun durumunu (asfalt mı, toprak mı, dar mı) belirtmeniz, teslimat aracının uygun rotayla planlanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mevsime ve zemine göre tipik makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada tarım ve silo sahası işlerinde mevsim ve zemine göre tipik makine seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Mevsim/zemin", "Durum", "Risk", "Tipik sınıf"],
                    satirlar: [
                        ["Kuru yaz, sert toprak", "Standart", "Düşük", "Dizel 4x4 teleskopik"],
                        ["Yağış sonrası, çamurlu", "Yumuşak zemin", "Batma riski", "Geniş taban, düşük iş ertelenebilir"],
                        ["Hasat sezonu", "Yoğun trafik", "Erişim kısıtlı", "Sezon dışı pencereye planlama"],
                        ["Silo üst kapak bakımı", "Yüksek nokta", "Dikey erişim", "Yüksek teleskopik"],
                        ["Kabul sahası, tozlu", "Ortam hassasiyeti", "Temizlik gerekir", "Toz sonrası pencere"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada mevsim öncesi planlama",
                paragraflar: [
                    "Tarım işleme tesislerinde en verimli kiralama, sezon başlamadan veya sezon bittikten hemen sonra yapılan planlı bakımdır; sezon ortasında acil bir talep hem makine müsaitliğini hem de saha erişimini zorlaştırabilir. İlk kiralamanızda tesisinizin yıllık iş takvimini paylaşmanız, size en uygun bakım penceresini önermemizi sağlar.",
                    "Sezon öncesi planlama, aynı zamanda tekrarlayan bir yıllık bakım ilişkisine dönüşebilir; her yıl aynı pencerede planlı bir kiralama, acil ve pahalı bir sezon ortası talebe göre daha ekonomiktir.",
                ],
            },
            {
                baslik: "Kırsal bölgede teslimat ve erişim planı",
                paragraflar: [
                    "Kırsal bölgedeki tesislere teslimat, kent merkezine göre daha uzun mesafe ve bazen toprak yol gerektirir; bu, nakliye süresini ve bedelini etkiler. İlk kiralamanızda tesisin erişim yolunu ve son yağıştan bu yana geçen süreyi belirtmeniz, teslimat aracının uygun rotayla ve zamanlamayla planlanmasını sağlar.",
                    "Aynı bölgedeki birden fazla tesisin taleplerini aynı haftaya toplamak, kırsal bölgede özellikle etkili bir nakliye paylaşım yöntemidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yağış sonrası sahaya makine girebilir mi?",
                cevap:
                    "Zeminin durumuna bağlıdır; çamurlu ve yumuşak bir zeminde standart lastikli makine batma riski taşır. İlk kiralamanızda son yağıştan ne kadar süre geçtiğini belirtmeniz, geniş taban lastikli sınıf mı yoksa zeminin kurumasını beklemenin mi daha uygun olduğunu netleştirir; can güvenliği ve makine güvenliği açısından risk varsa işi ertelemenizi öneririz.",
            },
            {
                soru: "Silo üst kapağına ne kadar yükseklikte erişebiliriz?",
                cevap:
                    "Bu, silonun gerçek yüksekliğine bağlıdır; teknik çizimden veya ölçerek elde edilen bir rakamla doğru sınıfı öneririz. Silo yapıları genellikle standart bir atölyeden çok daha yüksek olduğu için yüksek erişimli teleskopik veya eklemli sınıf gerekebilir; ilk kiralamanızda bu ölçüyü paylaşmanız süreci hızlandırır.",
            },
            {
                soru: "Hasat sezonunda bakım yaptırabilir miyiz?",
                cevap:
                    "Mümkün olsa da önermiyoruz; hasat sezonunda araç ve ürün trafiği yoğunlaştığı için bakım ekibine ayrılan alan daralır. Sezon öncesi veya ürün çekildikten sonraki pencereler bakım için daha uygundur. İlk kiralamanızda yıllık iş takviminizi paylaşmanız, size en uygun pencereyi önermemizi sağlar.",
            },
            {
                soru: "Tozlu bölümde çalışmak için özel bir hazırlık gerekir mi?",
                cevap:
                    "Evet, tahıl tozu yoğun bölümlerde çalışma öncesi bir temizlik penceresi veya özel önlem gerekebilir. İlk kiralamanızda çalışacağınız bölümün toz yoğunluğunu belirtmeniz, uygun zamanlamayı ve gerekli önlemleri netleştirir.",
            },
            {
                soru: "Tesisimiz kent merkezine uzak, teslimat mümkün mü?",
                cevap:
                    "Evet, kırsal bölgedeki tesislere teslimat yapıyoruz; ancak mesafe ve erişim yolunun durumu (asfalt mı, toprak mı, dar mı) nakliye süresini ve bedelini etkiler. İlk kiralamanızda tesisin erişim yolunu belirtmeniz, teslimat aracının uygun rotayla planlanmasını sağlar.",
            },
            {
                soru: "Her yıl aynı dönemde bakım yaptırmak avantajlı mı?",
                cevap:
                    "Evet, sezon öncesi veya sonrası düzenli bir yıllık bakım penceresi, sezon ortasında çıkan acil ve genellikle daha pahalı bir talebe göre daha ekonomiktir. İlk kiralamanızı başarıyla tamamladıktan sonra bu kalemleri yıllık bir takvime dönüştürmenizi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kırsal/tarım bölgesi zemin-mevsim riskleri ve silo yapılarının yükseklik özellikleri genel saha bilgisidir; tesis adı, ürün ve rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "İlk Kiralamada Enerji ve Aydınlatma Bakımı İçin Platform Seçimi",
        giris:
            "Enerji hattı ve aydınlatma bakımı, Eskişehir'de hem OSB içi hem kent merkezi hem de kırsal bölgede sık karşılaşılan bir kiralama talebidir; ancak her ortam farklı bir sınıf gerektirir. OSB içindeki direk aydınlatması genellikle standart dizel teleskopik sınıfla çözülürken, kent merkezindeki bir tabela veya cephe aydınlatması dar sokak koşulları nedeniyle kompakt sınıf gerektirebilir, kırsal bölgedeki bir enerji hattı bakımı ise arazi tipi 4x4 sınıfı zorunlu kılabilir. İlk kiralamada asıl belirleyici, hattın veya direğin gerçek yüksekliği, çevresindeki elektrik hatlarına olan mesafe ve zeminin tipidir. Bu sayfa, enerji ve aydınlatma bakımı için ilk kez platform kiralayacak bir işletmenin güvenlik ve seçim sorularını anlatır.",
        maddeler: [
            {
                baslik: "Elektrik hattına yakın çalışmada güvenlik mesafesi",
                metin:
                    "Enerjili bir hat veya panonun yakınında çalışılacaksa, platformun ve operatörün hatta güvenli mesafeyi koruması gerekir; bu mesafe hattın gerilim seviyesine göre değişir. İlk kiralamada hattın enerjili olup olmadığını ve gerilim seviyesini (biliniyorsa) belirtmeniz, doğru güvenlik protokolünün ve gerekirse yalıtımlı ekipman ihtiyacının netleşmesini sağlar.",
            },
            {
                baslik: "Direk ve aydınlatma yüksekliği",
                metin:
                    "Aydınlatma direkleri genellikle standart bir bina cephesinden daha yüksektir ve çalışma noktası direğin tepesine yakındır; bu, teleskopik sınıfın dikey erişim avantajının öne çıktığı bir senaryodur. İlk kiralamada direğin gerçek yüksekliğini belirtmeniz, doğru sınıfı netleştirir.",
            },
            {
                baslik: "Açık sahada zemin ve rüzgâr koşulu",
                metin:
                    "Açık sahadaki enerji hattı veya direk bakımında zemin genellikle düzensizdir ve rüzgâr, yüksekte çalışmayı etkileyen bir faktördür. İlk kiralamada zemin tipini belirtmeniz gerekli şase seçimini, hava durumu takibi ise çalışma gününün planlanmasını sağlar.",
            },
            {
                baslik: "Gece çalışma ihtiyacı",
                metin:
                    "Aydınlatma bakımı bazen gündüz test edilemediği için gece çalışması gerektirir; bu durumda makinenin kendi aydınlatması ve operatör görüş koşulları önceden değerlendirilir. İlk kiralamada gece çalışma ihtiyacınızı belirtmeniz, uygun ekipman ve ek önlem planını netleştirir.",
            },
            {
                baslik: "Çok sayıda direk için rota planlaması",
                metin:
                    "Bir cadde veya sahada birden fazla direk/aydınlatma noktasının bakımı gerekiyorsa, tek tek değil bir rota halinde planlanması hem zaman hem maliyet açısından daha verimlidir. İlk kiralamada kaç noktanın bakım gerektirdiğini belirtmeniz, rota bazlı bir teklif sunmamızı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ortama göre enerji/aydınlatma platform seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada enerji ve aydınlatma bakımında ortama göre tipik makine seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Tipik iş", "Zemin", "Tipik sınıf"],
                    satirlar: [
                        ["OSB içi direk aydınlatması", "Direk üstü bakım", "Düz zemin", "Dizel teleskopik"],
                        ["Kent merkezi tabela/cephe", "Aydınlatma değişimi", "Dar sokak", "Kompakt eklemli"],
                        ["Kırsal enerji hattı", "Hat/trafo çevresi bakım", "Düzensiz", "Dizel 4x4"],
                        ["Kamu binası dış aydınlatma", "Cephe aydınlatma", "Standart", "Eklemli/teleskopik"],
                        ["Çok noktalı cadde aydınlatması", "Rota bazlı bakım", "Değişken", "Rota planlı, tek makine"],
                    ],
                },
            },
            {
                baslik: "Enerjili hat yakınında çalışma protokolü",
                paragraflar: [
                    "İlk kiralamada enerjili bir hat veya panonun yakınında çalışılacağı bildirildiğinde, önce hattın gerilim seviyesi ve mümkünse ilgili kurumun (dağıtım şirketi, tesis elektrik sorumlusu) onayı istenir. Güvenli mesafe bu bilgiye göre belirlenir ve çalışma öncesinde saha ekibiyle paylaşılır.",
                    "Bu protokol atlanmaz; enerjili hat yakınında güvenli mesafe bilgisi olmadan çalışma planlanmaz. İlk kiralamanızda bu bilgiyi baştan paylaşmanız, sürecin gecikmeden ilerlemesini sağlar.",
                ],
            },
            {
                baslik: "Rota bazlı aydınlatma bakımının maliyet avantajı",
                paragraflar: [
                    "Birden fazla direk veya aydınlatma noktasının tek tek ayrı taleplerle değil, bir rota halinde planlanması nakliye ve kurulum bedelini tek bir sefere yayar. İlk kiralamanızda kaç noktanın bakım gerektirdiğini ve bu noktaların birbirine olan mesafesini paylaşmanız, rota bazlı bir teklif sunmamızı sağlar.",
                    "Bu yaklaşım özellikle cadde aydınlatması veya kampüs benzeri geniş alanlarda, tek tek talep etmeye göre belirgin bir maliyet avantajı sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerjili hat yakınında çalışmak güvenli mi?",
                cevap:
                    "Doğru mesafe korunduğunda ve gerekli protokol izlendiğinde güvenlidir; ancak bu mesafe hattın gerilim seviyesine göre değişir ve çoğu zaman ilgili kurumun onayı veya bilgisi gerekir. İlk kiralamanızda hattın enerjili olup olmadığını ve mümkünse gerilim seviyesini belirtmeniz, güvenli mesafeyi baştan netleştirir; bu bilgi olmadan çalışma planlanmaz.",
            },
            {
                soru: "Aydınlatma bakımı için gece çalışma yapabilir misiniz?",
                cevap:
                    "Evet, gece çalışması mümkündür; makinenin kendi aydınlatması ve operatör görüş koşulları önceden değerlendirilir. İlk kiralamanızda gece çalışma ihtiyacınızı belirtmeniz, uygun ekipman ve ek güvenlik önlemi planını netleştirir.",
            },
            {
                soru: "Birden fazla direğin bakımını tek seferde yaptırabilir miyiz?",
                cevap:
                    "Evet, bunu öneriyoruz. Kaç direğin bakım gerektirdiğini ve aralarındaki mesafeyi paylaşırsanız, rota bazlı bir teklif sunarız; bu, nakliye ve kurulum bedelini tek sefere yayarak tek tek talep etmeye göre belirgin bir tasarruf sağlar.",
            },
            {
                soru: "Kırsal bölgedeki enerji hattına açık sahada nasıl erişiyorsunuz?",
                cevap:
                    "Açık sahada genellikle dizel 4x4 tahrikli, geniş taban lastikli sınıf tercih edilir; zeminin düzensiz olması bu tercihi gerekli kılar. İlk kiralamanızda zemin tipini ve hava koşullarını belirtmeniz, doğru şase ve çalışma gününün planlanmasını sağlar.",
            },
            {
                soru: "Dar sokakta bir tabela/cephe aydınlatmasına nasıl ulaşılır?",
                cevap:
                    "Kent merkezindeki dar sokaklarda kompakt eklemli sınıf tercih edilir; sokağın genişliğini ve varsa park kısıtını önceden sorarız. İlk kiralamanızda sokak fotoğrafı paylaşmanız, teslimat saatinin trafiğe göre planlanmasını kolaylaştırır.",
            },
            {
                soru: "Direğin yüksekliğini bilmiyoruz, nasıl netleştiririz?",
                cevap:
                    "Direğin projeye ait teknik ölçüsü varsa onu paylaşmanız yeterlidir; yoksa telefonda verilen tahmini bir yükseklik yerine sahada kendimiz ölçüp doğru sınıfı netleştirmemizi öneririz. Yanlış tahmin edilen bir yükseklik, sahada makinenin yetersiz kalmasına yol açabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerjili hat yakınında güvenli mesafe ilkesi ve rota bazlı aydınlatma bakımı genel saha güvenliği ve verimlilik pratiğidir; hat gerilim değeri ve mesafe rakamı uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "İlk Kiralamada Operatörlü mü Operatörsüz mü Karar Rehberi",
        giris:
            "İlk kez platform kiralayacak bir işletmenin karşısına çıkan sorulardan biri de operatörlü mü yoksa operatörsüz mü (kendi ekibinizle) kiralama yapılacağıdır. Bu karar yalnızca maliyetle değil, işletmenin sertifikalı operatör kapasitesiyle, işin süresiyle ve makinenin karmaşıklığıyla ilgilidir. Basit ve kısa süreli bir akülü makaslı iş için işletmenin kendi eğitimli personeli genellikle yeterlidir; ancak karmaşık bir eklemli platform işinde veya işletmenin sertifikalı operatörü yoksa operatörlü kiralama daha güvenli ve pratik bir seçenektir. Bu sayfa, ilk kiralamada bu kararı nasıl vereceğinizi ve her iki seçeneğin sorumluluk dağılımını anlatır.",
        maddeler: [
            {
                baslik: "Sertifikalı operatör kapasitesi",
                metin:
                    "Operatörsüz kiralamada işletmenin kendi personelinin geçerli bir yüksekte çalışma platformu operatör belgesine sahip olması gerekir; bu belge teslimat öncesinde kontrol edilir. İlk kiralamada işletmenizde sertifikalı operatör olup olmadığını belirtmeniz, hangi seçeneğin uygun olduğunu baştan netleştirir.",
            },
            {
                baslik: "İşin karmaşıklığı ve makine sınıfı",
                metin:
                    "Standart akülü makaslı sınıf, kısa bir eğitimle çoğu ekip tarafından güvenle kullanılabilir; ancak eklemli platform, özellikle bom kontrolü gerektiren işlerde, deneyimsiz bir operatör için risk taşıyabilir. İlk kiralamada makine sınıfı karmaşıklaştıkça operatörlü seçeneği önermemiz olasılığı artar.",
            },
            {
                baslik: "İş süresi ve tekrarlanabilirlik",
                metin:
                    "Tek seferlik kısa bir iş için operatörlü kiralama pratik olabilir; ancak sık tekrarlanan bir ihtiyaçta işletmenin kendi personelini sertifikalandırması uzun vadede daha ekonomiktir. İlk kiralamada bu ihtiyacın tek seferlik mi yoksa düzenli mi olduğunu belirtmeniz, doğru stratejiyi netleştirir.",
            },
            {
                baslik: "Sorumluluk dağılımı",
                metin:
                    "Operatörlü kiralamada makinenin güvenli kullanımından sağlanan operatör sorumludur; operatörsüz kiralamada bu sorumluluk işletmenin kendi personelindedir ve makinenin doğru kullanımı, günlük kontrol ve güvenlik kurallarına uyum işletmeye aittir. İlk kiralamada bu ayrımı netleştirmek, sözleşme ve sigorta kapsamının doğru anlaşılmasını sağlar.",
            },
            {
                baslik: "Maliyet farkı",
                metin:
                    "Operatörlü kiralama, operatör bedelini içerdiği için operatörsüz kiralamaya göre daha yüksek günlük maliyet taşır; ancak eğitim, belgelendirme ve olası hatalı kullanım riskini ortadan kaldırdığı için toplam risk açısından bazen daha ekonomik olabilir. İlk kiralamada bu iki maliyeti karşılaştırırken yalnızca günlük rakama değil, toplam risk ve süreye bakmanızı öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hangi durumda hangi seçenek önerilir",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada operatörlü ve operatörsüz seçenek arasındaki kararı özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Makine sınıfı", "Süre", "Önerilen seçenek"],
                    satirlar: [
                        ["Sertifikalı personel var, basit iş", "Akülü makaslı", "Kısa/uzun", "Operatörsüz"],
                        ["Sertifikalı personel yok", "Herhangi", "Tek seferlik", "Operatörlü"],
                        ["Karmaşık eklemli iş, deneyimsiz ekip", "Eklemli/teleskopik", "Kısa", "Operatörlü"],
                        ["Düzenli tekrarlayan ihtiyaç", "Herhangi", "Uzun vadeli", "Personel sertifikalandırma + operatörsüz"],
                        ["Enerjili hat yakını, riskli iş", "Herhangi", "Tek seferlik", "Operatörlü, deneyimli"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada operatör belgesi kontrolü",
                paragraflar: [
                    "Operatörsüz kiralamada teslimat öncesinde, işi kullanacak personelin geçerli operatör belgesi kontrol edilir; belge yoksa operatörlü seçenek önerilir ya da personelin belgelendirilmesi için süreç yönlendirilir. İlk kiralamanızda bu belgeyi önceden paylaşmanız, teslimat gününde gecikme yaşamamanızı sağlar.",
                    "Belge kontrolü, hem işletmenin hem de sağlanan makinenin güvenli kullanımı için atlanmayan bir adımdır.",
                ],
            },
            {
                baslik: "Operatörlü kiralamada teslimat ve çalışma saati",
                paragraflar: [
                    "Operatörlü kiralamada sağlanan operatörün çalışma saatleri, teslimat planıyla birlikte önceden netleştirilir; iş süresinin uzaması durumunda ek saat veya ek gün planlaması yapılır. İlk kiralamanızda tahmini iş süresini paylaşmanız, operatörün gününü doğru planlamamızı sağlar.",
                    "Operatörlü kiralamada işin ilerleyişi operatörle birlikte sahada takip edilir; bu, ilk kez kiralama yapan bir işletme için ek bir güven unsuru sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlü mü operatörsüz mü kiralamalıyız, nasıl karar veririz?",
                cevap:
                    "Bu, işletmenizde sertifikalı operatör olup olmadığına, işin makine sınıfına (basit akülü mü, karmaşık eklemli mi) ve tekrarlanabilirliğine bağlıdır. Sertifikalı personeliniz varsa ve iş basitse operatörsüz genellikle yeterlidir; personeliniz yoksa veya iş karmaşıksa operatörlü öneririz. İlk kiralamanızda bu üç bilgiyi paylaşmanız, doğru seçeneği netleştirir.",
            },
            {
                soru: "Operatörsüz kiralamada bizim personelimizin belgesi yeterli mi?",
                cevap:
                    "Geçerli bir yüksekte çalışma platformu operatör belgesi teslimat öncesinde kontrol edilir; belge güncel ve makine sınıfına uygunsa yeterlidir. Belgeniz yoksa veya süresi geçmişse operatörlü seçeneği öneririz ya da personelinizin belgelendirilmesi için yönlendirme yaparız.",
            },
            {
                soru: "Operatörlü kiralamada operatör kaç saat çalışıyor?",
                cevap:
                    "Bu, teslimat planıyla birlikte önceden netleştirilir; tahmini iş süreniz baz alınarak operatörün günü planlanır. İş süresinin uzaması durumunda ek saat veya ek gün olarak ayrıca ücretlendirilir; bu kalem teklif aşamasında açıkça belirtilir.",
            },
            {
                soru: "Kaza durumunda sorumluluk kimde olur?",
                cevap:
                    "Operatörlü kiralamada makinenin güvenli kullanımından sağlanan operatör ve firma sorumludur; operatörsüz kiralamada bu sorumluluk işletmenin kendi personelinde ve işletmede olur. İlk kiralamanızda bu ayrımı netleştirmemiz, sözleşme ve sigorta kapsamının doğru anlaşılmasını sağlar; detaylar sözleşmede yazılı olarak belirtilir.",
            },
            {
                soru: "Düzenli tekrarlayan bir ihtiyacımız var, her seferinde operatörlü mü kiralamalıyız?",
                cevap:
                    "Uzun vadede genellikle önermiyoruz; düzenli tekrarlayan bir ihtiyaçta personelinizin sertifikalandırılması ve operatörsüz kiralamaya geçilmesi daha ekonomiktir. İlk birkaç kiralamayı operatörlü yapıp bu sürede personelinizi eğitim sürecine yönlendirmeniz de bir seçenektir.",
            },
            {
                soru: "Enerjili hat yakınında operatörsüz kiralama önerir misiniz?",
                cevap:
                    "Genellikle önermiyoruz; enerjili hat yakınında çalışma ek risk taşıdığı için deneyimli, sağlanan bir operatörle çalışmayı öneririz. İşletmenizin personeli bu tip riskli işlerde deneyimliyse ve gerekli sertifikaya sahipse operatörsüz de değerlendirilebilir, ancak ilk kiralamada bu riski birlikte netleştirmemizi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü/operatörsüz kiralama ayrımı ve sertifikalı operatör gerekliliği EN 280 ve iş güvenliği mevzuatı kapsamındaki genel bilgidir; işletme adı ve rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "İlk Kiralamada Çok Noktalı Bakım İşleri İçin Rota Planlaması",
        giris:
            "Bazı ilk kiralama talepleri tek bir noktayı değil, birden fazla dağınık noktayı kapsar — bir caddedeki birkaç tabela, bir OSB'deki birden fazla işletmenin küçük kalemleri veya bir kampüsteki farklı binaların aydınlatma bakımı gibi. Bu tür işlerde her noktayı ayrı bir kiralama olarak ele almak, hem nakliye bedelini katlar hem de toplam süreyi uzatır. İlk kiralamada doğru yaklaşım, tüm noktaları tek bir rota halinde planlamaktır; makine bir noktadan diğerine kısa mesafelerle ilerler ve nakliye bedeli tüm rotaya yayılır. Bu sayfa, çok noktalı bir bakım işi için ilk kez platform kiralayacak bir işletmenin rota planlamasını nasıl kuracağını anlatır.",
        maddeler: [
            {
                baslik: "Noktaların listesi ve öncelik sırası",
                metin:
                    "Rota planlamasının ilk adımı, tüm noktaların bir listesi ve her noktanın işinin ne kadar süreceğinin tahminidir. İlk kiralamada bu listeyi paylaşmanız, makinenin günde kaç noktayı kapsayabileceğini ve toplam sürenin ne kadar olacağını netleştirir.",
            },
            {
                baslik: "Noktalar arası mesafe ve güzergâh",
                metin:
                    "Noktalar arasındaki mesafe ve yol durumu (trafik, dar sokak, OSB içi) rotanın günlere nasıl bölüneceğini belirler. İlk kiralamada noktaların adreslerini paylaşmanız, en verimli güzergâhın planlanmasını sağlar; coğrafi olarak yakın noktalar aynı güne, uzak noktalar ayrı güne yerleştirilir.",
            },
            {
                baslik: "Her nokta için farklı makine sınıfı gerekebilir",
                metin:
                    "Rota üzerindeki her nokta aynı makine sınıfını gerektirmeyebilir; bir nokta akülü makaslı, bir başkası eklemli, bir diğeri zor zemin sınıfı gerektirebilir. İlk kiralamada her noktanın kendi özelliğini (yükseklik, engel, zemin) belirtmeniz, rotanın hangi makine veya makinelerle kapsanacağını netleştirir.",
            },
            {
                baslik: "Esnek sıra ve bekletme riski",
                metin:
                    "Rotadaki bir nokta hazır değilse (erişim izni gecikmiş, saha boş değilse) tüm rotayı bekletmek yerine sıradaki bağımsız noktaya geçilmesi planlanır. İlk kiralamada hangi noktaların izin veya hazırlık gerektirdiğini önceden belirtmeniz, bu esnekliği baştan kurmamızı sağlar.",
            },
            {
                baslik: "Rota bazlı fiyatlandırmanın mantığı",
                metin:
                    "Rota bazlı bir teklifte nakliye ve kurulum bedeli tüm noktalara yayılır, bu da her noktayı ayrı ayrı kiralamaya göre belirgin bir tasarruf sağlar. İlk kiralamada tüm noktaları tek seferde paylaşmanız, bu toplu avantajdan yararlanmanızı sağlar; sonradan eklenen noktalar ayrı bir kalem olarak fiyatlandırılabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında tipik gün dağılımı",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada çok noktalı bir rota işinin tipik gün dağılımını örnekler; kesin plan nokta sayısı ve mesafeye göre değişir.",
                ],
                tablo: {
                    basliklar: ["Rota tipi", "Nokta sayısı", "Tipik süre", "Planlama önceliği"],
                    satirlar: [
                        ["Tek cadde, yakın noktalar", "3-6 nokta", "1 gün", "Coğrafi yakınlık"],
                        ["OSB içi birden fazla işletme", "4-8 nokta", "1-2 gün", "Komşu koordinasyonu"],
                        ["Kampüs/kurum, farklı binalar", "5-10 nokta", "2-3 gün", "İzin ve erişim sırası"],
                        ["Şehir geneli dağınık noktalar", "5+ nokta", "3-5 gün", "Coğrafi kümeleme"],
                        ["Karma sınıf gereken rota", "Değişken", "Değişken", "Makine değişim sırası"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada rota listesi nasıl hazırlanır",
                paragraflar: [
                    "En verimli rota planlaması, tüm noktaların adresi, yaklaşık işi ve varsa özel kısıtı (izin, erişim saati) ile birlikte tek bir listede toplanmasıyla başlar. İlk kiralamanızda bu listeyi bir tabloda veya kısa notlarla paylaşmanız, rotanın günlere ve makine sınıflarına bölünmesini hızlandırır.",
                    "Liste eksikse, rota planlaması sahada revize edilmek zorunda kalabilir; bu da hem süreyi hem maliyeti etkiler. Baştan eksiksiz bir liste, en büyük tasarrufu sağlayan adımdır.",
                ],
            },
            {
                baslik: "Coğrafi kümeleme ile maliyet düşürme",
                paragraflar: [
                    "Birbirine yakın noktaların aynı güne, uzak noktaların ayrı güne yerleştirilmesi, makinenin gereksiz uzun mesafe kat etmesini önler. İlk kiralamanızda noktaların adreslerini paylaşmanız, bu coğrafi kümelemeyi baştan kurmamızı sağlar.",
                    "Bazı durumlarda aynı bölgedeki başka bir işletmenin talebiyle rotanızı birleştirmek mümkün olabilir; bu, nakliye bedelini daha da düşürebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Birden fazla noktamız var, hepsini tek seferde mi anlatmalıyız?",
                cevap:
                    "Evet, bunu öneririz. Tüm noktaların adresini, yaklaşık işini ve varsa özel kısıtını (izin, erişim saati) tek seferde paylaşmanız, en verimli rota planını kurmamızı sağlar. Sonradan eklenen noktalar da değerlendirilir ama baştan eksiksiz bir liste en büyük tasarrufu sağlar.",
            },
            {
                soru: "Her nokta farklı yükseklikte, tek makineyle mi hallederiz?",
                cevap:
                    "Bu, noktaların özelliklerine bağlıdır; bazı rotalar tek bir makineyle kapsanabilirken bazılarında farklı sınıflar gerekir. İlk kiralamanızda her noktanın yüksekliğini, altının boş mu dolu mu olduğunu ve zemin tipini belirtmeniz, rotanın tek makineyle mi yoksa makine değişimiyle mi kapsanacağını netleştirir.",
            },
            {
                soru: "Bir nokta hazır olmazsa tüm rota gecikir mi?",
                cevap:
                    "Hayır, bunun için esnek bir sıra planlarız; bir nokta hazır değilse tüm rotayı bekletmek yerine sıradaki bağımsız noktaya geçilir. İlk kiralamanızda hangi noktaların izin veya hazırlık gerektirdiğini önceden belirtmeniz, bu esnekliği baştan kurmamızı sağlar.",
            },
            {
                soru: "Rota bazlı fiyat gerçekten daha mı ucuz?",
                cevap:
                    "Genellikle evet; nakliye ve kurulum bedeli tüm noktalara yayıldığı için her noktayı ayrı ayrı kiralamaya göre belirgin bir tasarruf sağlar. İlk kiralamanızda tüm noktaları tek seferde paylaşmanız, bu toplu avantajdan yararlanmanızı sağlar.",
            },
            {
                soru: "OSB içindeki birden fazla işletmenin talebini birleştirebilir miyiz?",
                cevap:
                    "Evet, bunu aktif olarak öneriyoruz. Komşu işletmelerin küçük kalemlerini aynı güne toplamak, makinenin kısa mesafelerle ilerlemesini ve nakliye bedelinin paylaşılmasını sağlar. İlk kiralamanızda bize başka bir talep olup olmadığını sorabilir veya komşularınıza kendiniz haber verebilirsiniz.",
            },
            {
                soru: "Şehir geneli dağınık noktalarda rota kaç gün sürer?",
                cevap:
                    "Bu, nokta sayısına ve coğrafi dağılıma bağlıdır; genellikle noktalar coğrafi olarak kümelenip günlere bölünür. İlk kiralamanızda tüm noktaların adresini paylaşmanız, tahmini süreyi ve gün dağılımını netleştirir; kesin süre listenin tamamlanmasıyla belirlenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çok noktalı rota planlamasında coğrafi kümeleme ve esnek sıra ilkeleri genel saha verimliliği pratiğidir; nokta sayısı, adres ve rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "İlk Kiralamada Zor Zemin ve Arazi Koşulları İçin Platform Seçimi",
        giris:
            "Standart bir atölye veya OSB parselinden farklı olarak, bazı ilk kiralama talepleri düzensiz, eğimli veya henüz hazırlanmamış bir zeminde çalışmayı gerektirir — inşaat sahası, kırsal bölge, henüz tesviye edilmemiş arsa gibi. İlk kiralamada standart akülü veya dizel iç mekân sınıfını bu tip zeminlerde talep etmek, sahada makinenin manevra edememesi veya güvenlik riskiyle sonuçlanabilir. Zor zemin koşullarında belirleyici olan, zeminin eğimi, taşıma gücü ve düzensizliği; buna uygun sınıf ise geniş taban lastikli, 4x4 tahrikli, kendinden dengelemeli dizel arazi tipi platformdur. Bu sayfa, zor zemin ve arazi koşullarında ilk kez platform kiralayacak bir işletmenin sorması gereken soruları anlatır.",
        maddeler: [
            {
                baslik: "Zemin eğimi ve taşıma gücü",
                metin:
                    "Zeminin eğim derecesi ve taşıma gücü (yumuşak toprak mı, sert zemin mi), makinenin devrilme riskini doğrudan etkiler; her makinenin izin verilen maksimum eğim değeri farklıdır. İlk kiralamada zeminin eğimini (yaklaşık derece veya 'düz-hafif eğimli-dik' gibi bir tarif) ve tipini belirtmeniz, doğru sınıfı ve gerekli ek önlemi netleştirir.",
            },
            {
                baslik: "Geniş taban lastik ve 4x4 tahrik gerekliliği",
                metin:
                    "Düzensiz veya yumuşak zeminde standart dar lastikli makine batabilir veya devrilebilir; geniş taban lastikli ve 4x4 tahrikli sınıf yükü daha geniş bir alana yayarak bu riski azaltır. İlk kiralamada zemin tipini belirtmeniz, bu özel şase gerekliliğini netleştirir.",
            },
            {
                baslik: "Hava koşulu ve zemin durumu ilişkisi",
                metin:
                    "Aynı saha kuru havada sağlam görünürken yağış sonrası çamurlu ve güvensiz hale gelebilir. İlk kiralamada işin planlandığı mevsimi ve son yağıştan geçen süreyi belirtmeniz, çalışma gününün ve gerekli önlemlerin doğru planlanmasını sağlar; riskli durumlarda işin ertelenmesi önerilebilir.",
            },
            {
                baslik: "Kendinden dengelemeli sistemin rolü",
                metin:
                    "Bazı arazi tipi platformlar, her ayağın zemine göre bağımsız yükseklik ayarı yapabildiği kendinden dengelemeli sisteme sahiptir; bu, eğimli veya düzensiz zeminde şase her zaman yatay kalacak şekilde ayarlanmasını sağlar. İlk kiralamada zeminin düzensizlik derecesini belirtmeniz, bu sistemin gerekip gerekmediğini netleştirir.",
            },
            {
                baslik: "Operatör deneyimi arazi koşulunda daha kritik",
                metin:
                    "Zor zemin koşullarında makinenin manevra ve dengeleme kararları standart iç mekâna göre daha fazla dikkat gerektirir; ilk kez arazi tipi makine kullanacak bir operatör için teslimat sırasındaki tanıtım özellikle önemlidir. İlk kiralamada operatörünüzün deneyim seviyesini belirtmeniz, gerekirse operatörlü seçeneği önermemizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin durumuna göre tipik makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, ilk kiralamada zor zemin ve arazi koşullarında tipik makine seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Risk", "Gerekli özellik", "Tipik sınıf"],
                    satirlar: [
                        ["Düz ama hazırlanmamış toprak", "Düşük-orta", "Geniş taban lastik", "Dizel 4x4"],
                        ["Hafif eğimli arazi", "Devrilme riski", "Kendinden dengeleme", "4x4 dengelemeli"],
                        ["Yağış sonrası yumuşak zemin", "Batma riski", "Ek önlem veya erteleme", "4x4, koşullu"],
                        ["İnşaat sahası, molozlu", "Düzensiz yüzey", "Yüksek yer tutuşu", "4x4 teleskopik"],
                        ["Kırsal, otlu/toprak saha", "Değişken", "Standart arazi lastiği", "Dizel 4x4"],
                    ],
                },
            },
            {
                baslik: "İlk kiralamada zemin bilgisinin doğru paylaşımı",
                paragraflar: [
                    "Zor zemin kiralamalarında en sık yaşanan sorun, zeminin telefonda tarif edilenden daha zorlu çıkmasıdır. İlk kiralamanızda zeminin fotoğrafını (mümkünse farklı açılardan) ve varsa eğim tahminini paylaşmanız, sahada sürpriz yaşanmasını önler.",
                    "Emin değilseniz, kesin teklif öncesinde kısa bir keşif ziyareti önerilir; bu, özellikle ilk kez arazi tipi makine kiralayacak bir işletme için riski büyük ölçüde azaltır.",
                ],
            },
            {
                baslik: "Riskli hava koşullarında erteleme kararı",
                paragraflar: [
                    "Yağış sonrası veya kuvvetli rüzgârlı günlerde zeminin ya da çalışma koşulunun güvenli olmadığı durumlarda işin ertelenmesi önerilir; bu, hem makinenin hem operatörün güvenliği için standart bir uygulamadır. İlk kiralamanızda esnek bir tarih aralığı belirlemeniz, böyle bir erteleme durumunda alternatif bir gün bulmayı kolaylaştırır.",
                    "Erteleme kararı keyfi değildir; zemin taşıma gücü ve eğim güvenli sınırın dışına çıktığında verilir ve işletmeyle birlikte alınır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Zeminimiz düzensiz, standart dizel platform çalışabilir mi?",
                cevap:
                    "Genellikle önermiyoruz; düzensiz zeminde standart dar lastikli makine batma veya devrilme riski taşır. Bunun yerine geniş taban lastikli, 4x4 tahrikli ve mümkünse kendinden dengelemeli arazi tipi sınıf öneririz. İlk kiralamanızda zeminin fotoğrafını paylaşmanız, doğru sınıfı netleştirir.",
            },
            {
                soru: "Eğimli bir arazide makine devrilme riski taşır mı?",
                cevap:
                    "Her makinenin izin verilen maksimum eğim değeri farklıdır ve bu değer aşılmadığı sürece güvenli çalışır. İlk kiralamanızda zeminin yaklaşık eğimini belirtmeniz, kendinden dengelemeli bir sınıfın gerekip gerekmediğini netleştirir; emin değilseniz keşif önerilir.",
            },
            {
                soru: "Yağış sonrası zeminde çalışabilir miyiz?",
                cevap:
                    "Zeminin durumuna bağlıdır; çamurlu ve yumuşak bir zeminde risk yüksekse işin ertelenmesini öneririz. İlk kiralamanızda son yağıştan geçen süreyi belirtmeniz, çalışma gününün güvenli olup olmadığını netleştirir; can ve makine güvenliği risk varsa önceliklidir.",
            },
            {
                soru: "Kendinden dengelemeli sistem nedir, her makinede var mı?",
                cevap:
                    "Her ayağın zemine göre bağımsız yükseklik ayarı yaparak şaseyi yatay tutan bir sistemdir ve yalnızca bazı arazi tipi modellerde bulunur. İlk kiralamanızda zeminin düzensizlik derecesini belirtmeniz, bu sistemin gerekip gerekmediğini netleştirir; standart düz zeminde gerekmez.",
            },
            {
                soru: "İnşaat sahasında molozlu zeminde çalışabilir miyiz?",
                cevap:
                    "Mümkündür, ancak yüksek yer tutuşlu 4x4 teleskopik sınıf önerilir ve büyük moloz parçalarının önceden temizlenmesi gerekebilir. İlk kiralamanızda sahanın fotoğrafını paylaşmanız, hem doğru sınıfı hem de gerekli ön hazırlığı netleştirir.",
            },
            {
                soru: "Operatörümüz arazi tipi makineyi ilk kez kullanacak, ne öneriyorsunuz?",
                cevap:
                    "Teslimat sırasında yapılan tanıtımda dengeleme sistemi ve arazi koşulundaki manevra kuralları özellikle detaylı anlatılır; ilk kez kullanan bir operatör için bu tanıtıma ek süre ayrılır. Deneyim seviyesi düşükse operatörlü seçeneği de değerlendirilebilir; ilk kiralamanızda bu tercihi birlikte netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Arazi tipi platformların 4x4 tahrik, geniş taban lastik ve kendinden dengeleme özellikleri EN 280 kapsamındaki genel makine sınıfı bilgisidir; zemin ölçüsü ve konum rakamı uydurulmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "İlk Kiralamada Manlift Nedir, Hangi Sınıf Seçilmeli",
        giris:
            "\"Manlift\" kelimesi günlük kullanımda çoğu zaman genel bir terim gibi geçse de teknik olarak, sepeti hem dikey hem de yatay yönde bir kolla uzatarak çalışma noktasına erişim sağlayan kollu platformları ifade eder — sektörde \"boom lift\" olarak da anılır. Bu sınıfın kendi içinde iki alt tipi vardır: dirsek noktasından katlanabilen eklemli (artikülasyonlu) manlift ve tek parça halinde uzayan teleskopik manlift. Eskişehir OSB'deki sanayi tesislerinde çatı işleri, çelik konstrüksiyon montajı, boru hattı bakımı veya cephe aydınlatması gibi işler için ilk kez manlift kiralayacak bir işletmenin en sık karıştırdığı nokta, manlift ile dikey yükselen makaslı platformun aynı şey sanılmasıdır. Oysa ikisi farklı erişim mantığına sahiptir ve yanlış sınıf seçimi, sahada işin yapılamaması veya gereksiz maliyetle sonuçlanabilir. Bu sayfa, OSB'de ilk kez manlift kiralayacak bir işletmenin hangi sorulara cevap vermesi gerektiğini, eklemli mi teleskopik mi sorusunun nasıl netleştiğini ve doğru sınıfı seçmek için paylaşılması gereken saha bilgisini anlatır.",
        maddeler: [
            {
                baslik: "Manlift terimi ve iki alt sınıf",
                metin:
                    "Eklemli manlift, kolun ortasındaki dirsek sayesinde bir engelin üzerinden veya arkasından dolaşarak erişim sağlar; teleskopik manlift ise tek parça halinde daha uzun mesafeye düz bir hatta uzanır. İlk kiralamanızda erişmeniz gereken noktanın önünde bir engel (boru hattı, makine gövdesi, raf) olup olmadığını belirtmeniz, hangi alt sınıfın gerektiğini netleştirir.",
            },
            {
                baslik: "Yatay erişim mesafesi (outreach) önemi",
                metin:
                    "Manliftin ayırt edici özelliği, sadece yükseğe değil aynı zamanda yana doğru da erişebilmesidir; bu yatay mesafeye \"outreach\" denir ve her modelde farklıdır. İlk kiralamanızda çalışma noktasının makinenin konumlanabileceği zeminden yatay uzaklığını (yaklaşık metre) belirtmeniz, yeterli outreach'e sahip modeli netleştirir.",
            },
            {
                baslik: "Engel aşma ve dirsek gerekliliği",
                metin:
                    "Sanayi tesislerinde borular, kablo tavaları veya mevcut ekipman çoğu zaman doğrudan erişimi engeller; bu durumda eklemli sınıfın dirsek hareketi engelin üzerinden veya çevresinden dolaşmayı sağlar. İlk kiralamanızda saha fotoğrafı paylaşmanız, engelin gerçek konumunu ve gerekli dirsek hareketini netleştirir.",
            },
            {
                baslik: "Zemin ve şase tipi",
                metin:
                    "Manliftler dizel/4x4 dış mekân şasesiyle veya elektrikli dar-erişim şasesiyle üretilir; kapalı bir üretim hattında elektrikli sessiz çalışma tercih edilirken açık sahada dizel tahrik gerekebilir. İlk kiralamanızda işin iç mekânda mı dış mekânda mı yapılacağını belirtmeniz, doğru şase tipini netleştirir.",
            },
            {
                baslik: "Operatör belgesi ve teslimat tanıtımı",
                metin:
                    "Manlift kullanımı, sepet ve kol hareketlerinin eş zamanlı kontrolünü gerektirdiği için makaslı platforma göre daha fazla operatör pratiği ister. İlk kez manlift kullanacak bir operatör için teslimat sırasında kol hareketleri ve acil indirme prosedürü ayrıntılı anlatılır; deneyim yoksa operatörlü seçenek önerilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre manlift sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, OSB'deki tipik işlere göre ilk kiralamada tercih edilen manlift sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Erişim ihtiyacı", "Önerilen alt sınıf", "Tipik şase"],
                    satirlar: [
                        ["Çatı üzeri çelik montaj", "Engelin üzerinden erişim", "Eklemli", "Dizel 4x4"],
                        ["Boru hattı/kablo tavası bakımı", "Engel çevresinden erişim", "Eklemli", "Dizel veya elektrikli"],
                        ["Cephe/aydınlatma direği bakımı", "Uzun yatay mesafe", "Teleskopik", "Dizel 4x4"],
                        ["Kapalı hangar tavan işi", "Sessiz, dar koridor", "Eklemli, elektrikli", "Elektrikli dar-erişim"],
                        ["Açık saha uzun hat kontrolü", "Sürekli yatay hareket", "Teleskopik", "Dizel 4x4"],
                    ],
                },
            },
            {
                baslik: "Manlift ile makaslı platform farkı",
                paragraflar: [
                    "Makaslı platform yalnızca dikey doğrultuda yükselir ve geniş, düz bir çalışma alanı sunar; manlift ise kolu sayesinde hem yukarı hem yana erişebilir. Bir üretim hattının tam üzerinde, herhangi bir engel olmadan çalışacaksanız makaslı platform genelde yeterli ve daha ekonomiktir.",
                    "Ancak erişmeniz gereken nokta bir boru hattının arkasında, bir makine gövdesinin yanında veya zeminden yatay olarak uzaktaysa, makaslı platformun dikey hareketi bu noktaya ulaşmaya yetmez ve manlift gerekir. İlk kiralamanızda çalışma noktasının tam konumunu tarif etmeniz, bu ayrımı netleştirir.",
                ],
            },
            {
                baslik: "İlk kiralamada doğru saha bilgisi paylaşımı",
                paragraflar: [
                    "Manlift kiralamalarında en sık yaşanan sorun, yatay erişim mesafesinin telefonda olduğundan kısa tahmin edilmesidir; bu da sahada makinenin hedefe yetişememesiyle sonuçlanır. İlk kiralamanızda hem dikey yüksekliği hem de yatay uzaklığı ayrı ayrı belirtmeniz, doğru modelin seçilmesini sağlar.",
                    "Kapı/koridor genişliği, tavan yüksekliği ve zemin taşıma gücü gibi bilgileri de paylaşmanız, teslimat gününde makinenin sahaya güvenle giriş yapabilmesini garanti eder.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift ile makaslı platform arasındaki temel fark nedir?",
                cevap:
                    "Makaslı platform yalnızca dikey yükselir ve geniş düz bir platform sunar; manlift ise kollu yapısı sayesinde hem yukarı hem yana doğru erişebilir. Çalışma noktanız tam tepenizdeyse makaslı platform, bir engelin arkasında veya yanda ise manlift gerekir. İlk kiralamanızda noktanın konumunu tarif etmeniz bu seçimi netleştirir.",
            },
            {
                soru: "Eklemli mi teleskopik mi seçmeliyim?",
                cevap:
                    "Erişmeniz gereken noktanın önünde boru, kablo tavası veya makine gövdesi gibi bir engel varsa eklemli sınıfın dirsek hareketi bu engeli aşmayı sağlar. Engel yoksa ve uzun, düz bir yatay mesafe kat etmeniz gerekiyorsa teleskopik sınıf genelde daha kararlı ve daha uzun erişim sunar. İlk kiralamanızda saha fotoğrafı paylaşmanız bu kararı netleştirir.",
            },
            {
                soru: "Outreach (yatay erişim) neden bu kadar önemli?",
                cevap:
                    "Manliftin manliftten farkı tam olarak buradadır: sadece yüksekliğe değil, zeminden yatay uzaklığa göre de seçim yapılır. Aynı çalışma yüksekliğine sahip iki model, farklı outreach değerlerine sahip olabilir; yetersiz outreach seçilirse makine hedefe erişemez. İlk kiralamanızda hem dikey hem yatay mesafeyi belirtmeniz gerekir.",
            },
            {
                soru: "Kapalı üretim hattında manlift kullanabilir miyiz?",
                cevap:
                    "Evet, ancak gürültü ve emisyon nedeniyle kapalı alanlarda elektrikli dar-erişim şaseli modeller tercih edilir; dizel modeller genelde açık saha içindir. İlk kiralamanızda işin iç mekânda mı dış mekânda mı yapılacağını belirtmeniz, doğru şaseyi netleştirir.",
            },
            {
                soru: "Manlift kullanmak makaslı platforma göre daha mı zor?",
                cevap:
                    "Manlift, sepet ve kol hareketlerinin eş zamanlı ve dikkatli kontrolünü gerektirdiği için makaslı platforma göre biraz daha fazla pratik ister. İlk kez kullanacak bir operatör için teslimat sırasında kol hareketleri ve acil indirme prosedürü ayrıntılı anlatılır; deneyim düşükse operatörlü seçenek de sunulur.",
            },
            {
                soru: "İlk kiralamada hangi ölçüleri hazırlamalıyım?",
                cevap:
                    "Çalışma noktasının zeminden yüksekliği, zeminden yatay uzaklığı, varsa aradaki engelin tarifi, zeminin iç mekân mı dış mekân mı olduğu ve kapı/koridor genişliği gibi bilgiler doğru model seçimi için yeterlidir. Bu bilgileri net paylaştığınızda teklif ve makine seçimi aynı gün netleşir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli/teleskopik manlift ayrımı ve outreach (yatay erişim) kavramı EN 280 kapsamındaki genel makine sınıfı bilgisidir; saha ölçüsü ve konum rakamı uydurulmamıştır.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "İlk Kez Makaslı Platform Kiralayacaklar İçin Seçim Rehberi",
        giris:
            "Makaslı platform, çapraz kollu bir mekanizmayla yalnızca dikey doğrultuda yükselen ve geniş, düz bir çalışma alanı sunan platform sınıfıdır; manlift gibi yana doğru uzanmaz ama üzerinde birden fazla kişi ve malzeme taşıyabilecek kadar geniştir. Eskişehir OSB'deki sanayi tesislerinde tavan bakımı, boyama, raf/stok düzenleme veya üretim hattı üzeri montaj gibi işlerde ilk kez makaslı platform kiralayacak bir işletmenin en sık sorduğu soru, kaç kişilik ve ne kadar taşıma kapasiteli bir platformun yeterli olacağıdır. Bu sorunun cevabı üç veriye bağlıdır: platformda aynı anda kaç kişinin çalışacağı, yanlarında taşınacak malzemenin ağırlığı ve zeminin iç mekân mı dış mekân mı olduğu. Zemin düzlüğü de makaslı platformlarda manlifte göre daha kritiktir, çünkü geniş platform tabanı düzensiz zeminde dengesini daha kolay kaybedebilir. Bu sayfa, OSB'de ilk kez makaslı platform kiralayacak bir işletmenin doğru sınıfı seçmek için hangi bilgileri paylaşması gerektiğini anlatır.",
        maddeler: [
            {
                baslik: "Makaslı platform nedir, dikey erişim mantığı",
                metin:
                    "Çapraz kollu makas mekanizması, platformu daima yatay ve geniş tutarak sadece dikey yönde yükseltir; bu da üzerinde rahat hareket edilebilen, birden fazla kişinin çalışabildiği bir alan sağlar. İlk kiralamanızda çalışma noktasının tam olarak zeminin üzerinde mi olduğunu belirtmeniz, bu sınıfın yeterli olup olmadığını netleştirir.",
            },
            {
                baslik: "Platform genişliği ve taşıma kapasitesi",
                metin:
                    "Modeller arasında platform genişliği ve izin verilen toplam yük (kişi + malzeme ağırlığı) değişir; aynı anda iki kişi ve birkaç parça malzeme taşıyacaksanız daha geniş platformlu bir model gerekir. İlk kiralamanızda kaç kişinin çalışacağını ve yanlarında taşınacak malzemenin yaklaşık ağırlığını belirtmeniz, kapasiteyi netleştirir.",
            },
            {
                baslik: "Elektrikli iç mekân ve dizel dış mekân ayrımı",
                metin:
                    "Kapalı üretim alanlarında sessiz ve emisyonsuz çalışan elektrikli modeller tercih edilirken, açık saha veya düzensiz zeminlerde dizel/4x4 tahrikli modeller gerekir. İlk kiralamanızda işin iç mekânda mı dış mekânda mı yapılacağını belirtmeniz, doğru şaseyi netleştirir.",
            },
            {
                baslik: "Zemin düzlüğü gerekliliği",
                metin:
                    "Makaslı platformun geniş tabanı, manlifte göre zemin düzlüğüne daha duyarlıdır; eğimli veya düzensiz bir zeminde platform dengesini kaybedebilir. İlk kiralamanızda zeminin düz beton mu yoksa hazırlanmamış toprak mı olduğunu belirtmeniz, ek önlem gerekip gerekmediğini netleştirir.",
            },
            {
                baslik: "Çalışma yüksekliği hesap mantığı",
                metin:
                    "İlan edilen platform yüksekliği, gerçek çalışma yüksekliğinin altındadır; buna operatörün boyu ve kolunu kaldırdığında erişebileceği mesafe eklenir. İlk kiralamanızda erişmeniz gereken tavan veya nokta yüksekliğini net metre olarak belirtmeniz, platform yüksekliğinin doğru hesaplanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre makaslı platform sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, OSB'deki tipik işlere göre ilk kiralamada tercih edilen makaslı platform sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Kişi/malzeme yükü", "Zemin", "Tipik sınıf"],
                    satirlar: [
                        ["Hangar tavan boyama", "1-2 kişi + boya ekipmanı", "Düz beton, iç mekân", "Elektrikli dar-erişim"],
                        ["Üretim hattı üzeri montaj", "2 kişi + parça malzeme", "Düz beton, iç mekân", "Elektrikli geniş platform"],
                        ["Depo raf/stok düzenleme", "1 kişi + hafif malzeme", "Düz beton, iç mekân", "Elektrikli kompakt"],
                        ["Açık saha çatı altı bakım", "1-2 kişi + el aleti", "Sert zemin, dış mekân", "Dizel 4x4"],
                        ["Çelik konstrüksiyon boyama", "2 kişi + boya/malzeme", "Hazırlanmış saha, dış mekân", "Dizel geniş platform"],
                    ],
                },
            },
            {
                baslik: "Manlift ile makaslı platform farkı",
                paragraflar: [
                    "Makaslı platform sadece dikey yükseldiği için, çalışma noktanız zeminin tam üzerindeyse ve önünüzde bir engel yoksa bu sınıf hem yeterli hem de manlifte göre daha ekonomiktir; ayrıca platform genişliği sayesinde birden fazla kişi ve malzemeyle rahat çalışılır.",
                    "Erişmeniz gereken nokta bir boru hattının arkasında, bir makinenin yanında veya zeminden yatay olarak uzaktaysa, makaslı platformun dikey hareketi yetmez ve kollu bir manlift gerekir. İlk kiralamanızda çalışma noktasının tam olarak neresi olduğunu tarif etmeniz, hangi sınıfın gerektiğini netleştirir.",
                ],
            },
            {
                baslik: "İlk kiralamada zemin ve kapı ölçüsü paylaşımı",
                paragraflar: [
                    "Makaslı platform kiralamalarında en sık yaşanan sorun, platformun sahaya girdiği kapı veya koridorun beklenenden dar çıkmasıdır; geniş platformlu modellerin taban ölçüsü bazı standart kapılara sığmayabilir. İlk kiralamanızda kapı/koridor genişliğini ve zeminin düzlüğünü belirtmeniz, teslimat gününde sürpriz yaşanmasını önler.",
                    "Zemin taşıma gücü de önemlidir; ağır bir platform, zayıf bir döşeme veya asma katta ek önlem gerektirebilir. Emin değilseniz, kesin teklif öncesinde zemin bilgisini paylaşmanız önerilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kaç kişilik bir makaslı platform kiralamalıyım?",
                cevap:
                    "Bu, aynı anda platformda çalışacak kişi sayısına ve yanlarında taşınacak malzemenin ağırlığına bağlıdır; her modelin izin verilen toplam yük sınırı farklıdır. İlk kiralamanızda kişi sayısını ve malzeme ağırlığını belirtmeniz, doğru genişlik ve kapasitedeki modeli netleştirir.",
            },
            {
                soru: "Elektrikli mi dizel mi seçmeliyim?",
                cevap:
                    "Kapalı üretim alanında sessiz ve emisyonsuz çalışması gerektiği için elektrikli model tercih edilir; açık sahada veya düzensiz zeminde ise dizel/4x4 tahrikli model gerekir. İlk kiralamanızda işin iç mekânda mı dış mekânda mı yapılacağını belirtmeniz bu seçimi netleştirir.",
            },
            {
                soru: "Zeminimiz tam olarak düz değil, makaslı platform çalışabilir mi?",
                cevap:
                    "Makaslı platform, manlifte göre zemin düzlüğüne daha duyarlıdır; hafif düzensizlik genelde sorun olmaz ama belirgin eğim veya çukur varsa ek önlem ya da farklı bir sınıf gerekebilir. İlk kiralamanızda zeminin durumunu (fotoğrafla birlikte) belirtmeniz, doğru kararı netleştirir.",
            },
            {
                soru: "Platform yüksekliği ile çalışma yüksekliği aynı mı?",
                cevap:
                    "Hayır; ilan edilen platform yüksekliği, operatörün boyu ve kolunu kaldırdığında erişebileceği mesafe eklendiğinde ortaya çıkan gerçek çalışma yüksekliğinden daha düşüktür. İlk kiralamanızda erişmeniz gereken tavan veya nokta yüksekliğini net metre olarak belirtmeniz, doğru platform yüksekliğinin hesaplanmasını sağlar.",
            },
            {
                soru: "Makaslı platform kapıdan geçer mi?",
                cevap:
                    "Geniş platformlu bazı modellerin taban ölçüsü standart kapılara sığmayabilir; bu nedenle ilk kiralamanızda kapı veya koridor genişliğini belirtmeniz önemlidir. Dar geçişler için daha kompakt taban ölçülü elektrikli modeller önerilir.",
            },
            {
                soru: "Çalışma noktamız bir makinenin arkasında, makaslı platform yeterli mi?",
                cevap:
                    "Genelde yeterli olmaz; makaslı platform yalnızca dikey yükseldiği için önündeki bir engelin arkasına veya yanına erişemez. Böyle durumlarda kollu bir manlift gerekir. İlk kiralamanızda çalışma noktasının tam konumunu tarif etmeniz, doğru sınıfı netleştirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platformun dikey erişim mekanizması, platform genişliği/kapasite ilişkisi ve zemin düzlüğü hassasiyeti EN 280 kapsamındaki genel makine sınıfı bilgisidir; saha ölçüsü ve konum rakamı uydurulmamıştır.",
    },
};
