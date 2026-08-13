// ═══════════════════════════════════════════════════════════════════════════
// canakkaleplatform.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: Çan seramik fabrikaları ve GELİBOLU TERSANE bölgesi platform
// kiralama. Açı: SERAMİK FIRIN + KÜÇÜK TERSANE — Çan'ın seramik-kiremit fırın
// hattı üstü erişimi (bacalı-tuğla örgülü fırın gövdesi çevresi, bant
// köprülerinin üst kotu) ve Gelibolu'nun küçük tekne tersanelerinde kızak,
// kaplama ve direk-bağlantı bakım işleri.
//
// ⚠️ Kardeş dosyalar canakkaleplatform-com.ts (boğaz koridoru rüzgârı, genel
// fırın-toz-sıcaklık) ve canakkaleplatform-tr.ts (liman lojistiği, sepetli
// araç hareket kabiliyeti) okunmuş ve karşılaştırılmıştır; ayrıca
// bozuyukmanlift-com.ts'teki eklemli-bom-üzerinden-fırın anlatımı da okunmuş,
// buradaki eksen linyit/termik değil FIRIN GÖVDESİ ÖLÇÜMÜ + TERSANE'dir.
// Cümle/tablo/kalıp tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const CANAKKALEPLATFORM_XYZ: Record<string, BespokeIcerik> = {
    "bolge:canakkale": {
        h1: "Çanakkale'de Fırın ve Tersane Sahalarına Platform Kiralama",
        giris:
            "Çanakkale merkez, bir yanıyla Çan'ın seramik fırınlarına, diğer yanıyla Gelibolu'nun küçük tersanelerine hizmet veren bir lojistik merkez konumundadır; ekipman genellikle merkezdeki depomuzdan bu iki uca dağılır. Merkezin kendi iş talebi de bu iki dünyayla kesişir: şehir merkezindeki fırınlı işletmelerin (ekmek fırını, seramik atölyesi gibi küçük ölçekli üretim yapıları değil, bu sayfada anlattığımız sanayi tipi fırınlardan farklı olarak) bakım ihtiyaçları sınırlıdır, ama merkezdeki tersane malzeme tedarikçileri ve fırın yedek parça atölyeleri düzenli iş üretir. Bu sayfa, merkezin bu iki sektöre destek veren yan sanayisinde platformun nasıl kullanıldığını anlatır.",
        maddeler: [
            {
                baslik: "Fırın yedek parça ve tuğla atölyelerinde çatı işleri",
                metin:
                    "Seramik fırınlarının refrakter tuğlası ve yedek parçasını üreten küçük atölyeler merkezde yoğunlaşır; bu atölyelerin çatı ve cephe bakımı, standart bir üretim holünden farksızdır ama içerideki toz (kil ve refrakter tozu) filtre bakımını sıklaştırır. Çatı altı aydınlatma ve havalandırma menfezi işleri en sık talep edilen kalemlerdir.",
            },
            {
                baslik: "Tersane malzeme deposu ve kesim atölyesi",
                metin:
                    "Küçük tersanelere ahşap, çelik profil ve boya-reçine malzemesi tedarik eden depo ve kesim atölyeleri, merkezdeki liman çevresinde kümelenir. Bu yapılarda platform, depo raf üstü erişim, çatı aydınlatması ve malzeme yükleme kapısı çevresi işlerinde kullanılır; malzemenin yanıcı niteliği (boya, tiner, ahşap tozu) nedeniyle kıvılcım üretmeyen ekipman tercih edilir.",
            },
            {
                baslik: "Merkez ile Çan ve Gelibolu arasında sevkiyat",
                metin:
                    "Merkezdeki depomuz, Çan yönüne fırın sezonuna göre, Gelibolu yönüne ise tersane sezonuna göre ekipman gönderir; bu iki sezon çoğu zaman çakışmadığı için aynı makine, yıl içinde iki farklı bölgeye sırayla hizmet verebilir. Sevkiyat planı, iki bölgenin güncel iş yoğunluğuna göre merkezden koordine edilir.",
            },
            {
                baslik: "Şehir içi tabela ve cephe işlerinde standart düzen",
                metin:
                    "Merkezin ticari cephe ve tabela işleri, fırın-tersane sektörünün dışında kalan ama düzenli talep üreten bir kalemdir; yaya yoğunluğu yüksek saatlerde çalışma sınırlanır, bariyer düzeni komşu işletmelerle paylaşılır. Bu işler, sektörel yoğunluk düşükken (fırın duruşu, tersane sezon arası) programa kolayca eklenir.",
            },
            {
                baslik: "İki sektörün ortak ihtiyacı: hızlı yedek parça erişimi",
                metin:
                    "Hem fırın hem tersane işletmeleri, arızalı bir üst kot ekipmanına (aydınlatma, aspiratör, çatı elemanı) hızlı erişim ister; merkezdeki konumumuz, her iki bölgeye de kısa sürede ulaşmayı mümkün kılar. Acil çağrılarda merkezdeki hazır makine öncelikli olarak yönlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezde yan sanayi tipi ve platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, merkezdeki fırın ve tersane yan sanayisinde en sık talep edilen kalemleri özetler.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik kalem", "Risk unsuru", "Makine notu"],
                    satirlar: [
                        ["Refrakter tuğla atölyesi", "Çatı, havalandırma", "Kil-refrakter tozu", "Filtre bakımı sık"],
                        ["Tersane malzeme deposu", "Raf, çatı aydınlatma", "Yanıcı malzeme", "Kıvılcımsız ekipman"],
                        ["Fırın yedek parça atölyesi", "Aydınlatma, tesisat", "Metal işleme tozu", "Standart akülü"],
                        ["Ticari cephe ve tabela", "Tabela, tente", "Yaya trafiği", "Sakin saat"],
                        ["Acil arıza (her iki sektör)", "Hızlı müdahale", "—", "Merkezden öncelikli sevk"],
                    ],
                },
            },
            {
                baslik: "Sezon farkının sevkiyat avantajına dönüşmesi",
                paragraflar: [
                    "Çan'daki fırın bakım duruşları ile Gelibolu'daki tersane karaya çekme sezonu genellikle farklı takvimlere denk gelir; bu, merkezdeki filomuzun aynı makineyle iki bölgeye sırayla hizmet vermesini mümkün kılar. Bir dönem Çan'da yoğunlaşan talep, diğer dönem Gelibolu'ya kayar ve makine bulunurluğu yıl boyunca dengeli kalır.",
                    "Bu dengeyi bilerek planlama yapan müşterilerimiz, kendi bakım takvimlerini bu sezon farkına göre erken bildirdiğinde makine rezervasyonunu daha rahat yapabiliyor.",
                ],
            },
            {
                baslik: "Yanıcı malzeme çevresinde ekipman seçimi",
                paragraflar: [
                    "Tersane malzeme depolarında ve fırın yedek parça atölyelerinde boya, tiner, reçine ve ahşap tozu gibi yanıcı maddeler bulunur; bu ortamlarda kıvılcım üretmeyen elektrikli ekipman kullanılır ve hidrolik sistem sızdırmazlığı ayrıca kontrol edilir. Bu kontrol, sahaya girişten önce standart bir adım olarak uygulanır ve sonucu operatör brifingine yazılır.",
                    "Yanıcı madde yoğunluğu yüksek alanlarda çalışma öncesi tesisin kendi yangın güvenlik prosedürü de değerlendirilir; gerekirse yangın söndürme ekibi bilgilendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Fırın yedek parça atölyemizin çatısında tozdan dolayı ek bakım gerekir mi?",
                cevap:
                    "Evet, refrakter ve kil tozu makinenin filtre ve soğutma tarafını normalden hızlı yorar; bu ortamlarda çalışan makinelerde filtre kontrolü sıklaştırılır ve uzun kiralamalarda bu bizim standart uygulamamızdır. Sizden beklediğimiz katkı, mümkünse çalışma öncesi atölye zemininin kaba temizliğinin yapılmasıdır; bu, makinenin tutuşunu ve görüşü doğrudan iyileştirir.",
            },
            {
                soru: "Tersane malzeme deponuzda boya ve tiner var, hangi ekipmanı kullanıyorsunuz?",
                cevap:
                    "Kıvılcım üretmeyen elektrikli ekipman kullanıyoruz ve hidrolik sistem sızdırmazlığını sahaya girmeden önce kontrol ediyoruz; bu kontrolün sonucu operatör brifingine yazılır. Tesisinizin kendi yangın güvenlik prosedürü varsa bize iletin, çalışma planını buna göre kurarız. Yanıcı madde yoğunluğu yüksek bölgelerde bu kontrol pazarlık konusu değildir.",
            },
            {
                soru: "Merkeze ne kadar yakınsınız, acil çağrıda ne kadar sürede gelirsiniz?",
                cevap:
                    "Merkezdeki depomuz hem Çan hem Gelibolu yönüne kısa sürede sevkiyat yapabilecek konumdadır; acil çağrılarda merkezdeki hazır makine öncelikli olarak yönlendirilir. Kesin süre, o anki makine bulunurluğuna ve trafik koşullarına bağlıdır; arızanın türünü ve konumunu ilk çağrıda net verirseniz, en yakın uygun makineyi hızlıca size yönlendiririz.",
            },
            {
                soru: "Fırın sezonu ile tersane sezonu çakışırsa makine sıkıntısı yaşar mısınız?",
                cevap:
                    "Genellikle yaşamayız çünkü iki sektörün yoğun dönemleri çoğunlukla farklı takvimlere denk gelir; bu fark, filomuzun aynı makineyle iki bölgeye sırayla hizmet vermesini mümkün kılar. Nadir bir çakışma durumunda öncelik, önceden rezervasyon yapan müşteriye verilir; bu yüzden bakım takviminizi mümkün olduğunca erken bildirmenizi öneririz.",
            },
            {
                soru: "Şehir merkezindeki tabela işimizi fırın-tersane işleriyle aynı programa sığdırabilir misiniz?",
                cevap:
                    "Sığdırabiliriz. Tabela ve cephe işleri, sektörel yoğunluğun düşük olduğu dönemlerde (fırın duruşu, tersane sezon arası) programa kolayca eklenir; bu, makinenin boşta kalan zamanını değerlendirmenin de bir yolu. Tarihinizi esnek bırakırsanız, uygun bir aralığa yerleştirip size haber veririz.",
            },
            {
                soru: "İki sektöre de hizmet veren tek bir firma olmanızın bize avantajı ne?",
                cevap:
                    "En büyük avantaj sürekli makine bulunurluğu. Fırın ve tersane sezonları farklı takvimlerde yoğunlaştığı için, bir sektörde talep düşükken diğerinde yüksek olabiliyor; biz bu dengeyi merkezdeki filomuzla yönetiyoruz. Bunun sonucu, sizin ihtiyaç duyduğunuz anda makine bekleme süresinin kısalmasıdır. İkinci avantaj ise iki sektörün de kendine özgü risklerini (toz, yanıcı madde) tanıyan bir operatör kadrosuyla çalışmanızdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çanakkale merkezin fırın ve tersane yan sanayisine yakınlığı kamuya açık coğrafi konum bilgisidir; tesis adı ve rakam kullanılmamıştır. Sezon dengesi ve sevkiyat yaklaşımı firma pratiğidir.",
    },

    "bolge:can": {
        h1: "Çan'da Seramik Fırın Hattı Üstü Erişim",
        giris:
            "Çan'daki seramik ve kiremit fabrikalarının fırın hattı, tesisin en uzun ve en karmaşık yapı elemanıdır: tuğla örgülü gövde, üstünü saran çelik bandaj, boyunca dizilmiş baca ve gaz çıkış noktaları, hattın iki yanında yükselen bakım platformları. Bu sayfa, diğer sayfalarımızda genel toz veya sıcaklık kısıtı olarak anlattığımız konudan farklı olarak, doğrudan fırın gövdesinin kendisine — tuğla örgüsüne, bandaj gerginliğine, baca-gövde birleşim noktalarına — erişimin nasıl planlandığını anlatır. Bu erişim, standart bir çatı bakımından farklı bir hassasiyet ister: fırın çalışırken gövde yüzeyi kısmen sıcaktır ve örgü noktalarına yanlış yükten kaçınmak gerekir.",
        maddeler: [
            {
                baslik: "Tuğla örgüsü ve bandaj kontrolüne erişim",
                metin:
                    "Fırın gövdesini saran çelik bandajların gerginliği, tuğla örgüsünün ısıl genleşmeyle oturmasını sağlar ve düzenli kontrol ister; bandaj somunlarının sıkılığı ve örgüdeki olası çatlaklar, gövde yüzeyine yakın ama temas etmeyen bir mesafeden incelenir. Bu incelemede sepet, gövde boyunca yavaş ve kontrollü ilerler; hızlı hareket, operatörün ince detayları kaçırmasına yol açar.",
            },
            {
                baslik: "Baca ve gaz çıkış noktalarının bakımı",
                metin:
                    "Fırın hattı boyunca dizilmiş baca ve gaz çıkış noktaları, tesisatın en sık müdahale gerektiren elemanlarıdır; sızdırmazlık contası kontrolü, kapak mekanizması bakımı ve çevresindeki yalıtım malzemesinin durumu bu noktalarda incelenir. Her nokta ayrı bir konumlanma gerektirdiği için, hat boyunca ilerleyen bir çalışma sırası önceden çıkarılır.",
            },
            {
                baslik: "Bant köprüsü üst kotunda erişim ölçümü",
                metin:
                    "Hammaddeyi fırına taşıyan bant köprülerinin üst kotu, dar ve genellikle korkuluksuz geçiş yollarıyla çevrilidir; buradaki bakım, sabit merdivenle ulaşılamayan ara noktalara erişmek için platform gerektirir. Erişim ölçümü, köprünün genişliği, üstündeki ekipman yoğunluğu ve sepetin manevra alanı birlikte değerlendirilerek yapılır; dar noktalarda kompakt gövdeli makine tercih edilir.",
            },
            {
                baslik: "Fırın duruşunda gövde soğuma takvimi",
                metin:
                    "Fırın gövdesine yakın çalışma, ancak belirli bir soğuma süreci sonrasında güvenli hâle gelir; duruş başladığında gövde yüzeyi hemen soğumaz, kademeli olarak düşer. Bu yüzden gövdeye yakın kalemler duruşun ilk saatlerinde değil, tesisin belirlediği soğuma penceresinde planlanır. Bu takvim tesis mühendisliğinin kendi kararıdır; bizim rolümüz makinenin o pencereye hazır olmasıdır.",
            },
            {
                baslik: "Kompakt gövde ile dar aralıklarda ilerleme",
                metin:
                    "Fırın hattının iki yanındaki servis koridorları genellikle dardır ve boru, kablo tavası gibi engellerle doludur; bu koridorlarda geniş gövdeli bir makine ilerleyemez. Kompakt gövdeli, dar şaseli makineler, bu koridorlarda hem geçiş hem manevra açısından tek makul seçenektir. Koridor genişliği, iş öncesi ölçülüp makine sınıfı buna göre belirlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Fırın hattı bölümü ve erişim gereksinimi",
                paragraflar: [
                    "Aşağıdaki tablo, fırın hattının farklı bölümlerinde erişim gereksinimini ve zamanlamayı özetler.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Erişim hassasiyeti", "Zamanlama", "Makine notu"],
                    satirlar: [
                        ["Tuğla örgüsü / bandaj", "Yüksek, yavaş ilerleme", "Soğuma penceresi", "Kontrollü hız"],
                        ["Baca / gaz çıkışı", "Orta, çok nokta", "Duruş dönemi", "Hat boyu sıra"],
                        ["Bant köprüsü üstü", "Orta, dar geçiş", "Vardiya dışı", "Kompakt gövde"],
                        ["Servis koridoru", "Yüksek, engel yoğun", "Esnek", "Dar şase"],
                        ["Gövde dış yüzeyi (genel)", "Düşük-orta", "Duruş dışı da mümkün", "Standart eklemli"],
                    ],
                },
            },
            {
                baslik: "Soğuma penceresini kaçırmamanın önemi",
                paragraflar: [
                    "Fırın duruşu başladığında gövde soğuma süreci tesis mühendisliğinin belirlediği bir eğriyi takip eder; bu eğrinin hangi saatinde hangi bölgenin güvenle çalışılabilir hâle geldiği önceden bilinir. Bu bilgiyi almadan gövdeye yakın bir işe başlamak, hem güvenlik hem ekipman ömrü açısından risklidir.",
                    "Bizim uygulamamız, duruş takvimini tesis mühendisliğinden önceden almak ve makineyi soğuma penceresinin başladığı an sahada hazır bulundurmaktır; böylece pencere, bekleme ile değil çalışma ile geçer.",
                ],
            },
            {
                baslik: "Dar koridorlarda ölçüm disiplini",
                paragraflar: [
                    "Fırın hattının servis koridorları, tesisten tesise farklı genişliktedir ve bazı noktalarda boru veya kablo tavası geçişi nedeniyle daha da daralır. Bu koridorlarda yanlış makine seçimi, sahaya varıldığında geri dönüşe yol açar — bu yüzden koridor genişliğini iş öncesinde ölçüyor veya fotoğrafla teyit ediyoruz.",
                    "Kompakt gövdeli makinelerin dönüş yarıçapı da genişlik kadar önemlidir; dar bir koridorda düz ilerleyebilen ama dönemeyen bir makine işe yaramaz. Bu ikinci ölçüyü de aynı keşifte netleştiriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Fırın bandajlarının kontrolünü nasıl yapıyorsunuz, gövdeye temas ediyor musunuz?",
                cevap:
                    "Temas etmiyoruz; sepet, gövde yüzeyine yakın ama güvenli bir mesafede konumlanır ve bandaj somunlarının sıkılığı ile örgüdeki olası çatlaklar görsel ve gerekirse basit ölçüm aletleriyle incelenir. Sepet, hat boyunca yavaş ve kontrollü ilerler; hız, ince detayların kaçırılmaması için bilinçli olarak düşük tutulur. Bu inceleme genellikle fırın mühendisinizin belirlediği kontrol listesine göre yapılır; listeyi paylaşırsanız sırayı ona göre kurarız.",
            },
            {
                soru: "Fırın hâlâ sıcakken bacaların çevresinde çalışabilir misiniz?",
                cevap:
                    "Bölüme göre değişir. Gövdeden uzak bacalarda ve gaz çıkış noktalarında sıcaklık sınırlayıcı olmayabilir; gövdeye yakın noktalarda ise tesisin belirlediği soğuma penceresi beklenir. Bu ayrımı tesis mühendisliğinizle birlikte netleştiririz — hangi noktanın ne zaman güvenli hâle geldiğini gösteren bir takvim varsa, çalışma programımızı doğrudan ona göre kurarız.",
            },
            {
                soru: "Bant köprüsünün üstü çok dar, makineniz oraya sığar mı?",
                cevap:
                    "Bu, köprünün net genişliğine ve üstündeki ekipman yoğunluğuna bağlı; iş öncesinde bu ölçüyü alır veya fotoğrafla teyit ederiz. Sığmıyorsa kompakt gövdeli, dar şaseli bir sınıf öneririz; bu sınıflar hem geçiş hem manevra açısından dar koridorlar için tasarlanmıştır. Dönüş yarıçapı da genişlik kadar belirleyicidir — düz geçebilen ama dönemeyen bir makine işe yaramaz, bu yüzden ikisini birlikte değerlendiririz.",
            },
            {
                soru: "Duruş takviminizi nereden alıyorsunuz, bizim bildirmemiz mi gerekiyor?",
                cevap:
                    "Evet, duruş ve soğuma takvimi tesis mühendisliğinizin belirlediği bir bilgidir ve bunu bizimle paylaşmanız gerekir. Bu takvimi aldığımızda makineyi soğuma penceresinin başladığı an sahada hazır bulunduruyoruz; böylece pencere bekleyerek değil çalışarak geçiyor. Takvim paylaşılmazsa, sahada tesis yetkilisinin o anki onayına göre ilerleriz — bu, planlamayı daha az verimli kılar ama işi durdurmaz.",
            },
            {
                soru: "Servis koridorlarında boru ve kablo tavası engelleri var, bu geçişi zorlaştırır mı?",
                cevap:
                    "Zorlaştırabilir, bu yüzden koridoru iş öncesinde detaylı değerlendiriyoruz. Boru ve kablo tavası gibi engeller genellikle belirli bir yükseklikte konumlanır; makinenin bu engellerin altından geçip geçemeyeceği veya yan çekilerek ilerleyip ilerleyemeyeceği önceden hesaplanır. Engellerin fotoğrafını ve yaklaşık yüksekliğini paylaşırsanız, sahaya gelmeden uygun makineyi belirleriz.",
            },
            {
                soru: "Fırın hattındaki işimiz kaç güne yayılır?",
                cevap:
                    "Bu, kalem sayısına ve kaçının soğuma penceresi beklediğine bağlıdır. Gövdeden uzak kalemler duruş dışında da yapılabilirken, gövdeye yakın kalemler soğuma penceresine sıkışır ve bu pencere genellikle kısadır. Listeyi bölüme göre ayırıp hangi kalemin hangi zaman diliminde yapılacağını önceden planlarsak, toplam süreyi net bir şekilde tahmin edebiliriz; bu planlama ücretsizdir ve genellikle kiralama süresinin kendisinden fazla zaman kazandırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Fırın gövdesinin tuğla örgü-bandaj-baca yapısı genel sanayi fırını bilgisidir; tesis adı, kapasite ve sıcaklık rakamı kullanılmamıştır. Soğuma penceresi ve erişim ölçümü yaklaşımı firma pratiğidir.",
    },

    "bolge:gelibolu": {
        h1: "Gelibolu'da Küçük Tersanelerde Platform Kiralama",
        giris:
            "Gelibolu'nun kıyı şeridinde yer alan küçük tekne tersaneleri, büyük gemi inşa tesislerinden farklı bir ölçekte çalışır: kızak alanları dar, tekneler ahşap veya çelik gövdeli orta boy balıkçı ve gezinti tekneleri, bakım-onarım işleri ise mevsimlik yoğunlaşan bir takvime bağlıdır. Bu sayfa, tersanenin kendine özgü çalışma alanı — kızak, kaplama iskelesi, direk ve donanım bağlantı noktaları — üzerinde platformun nasıl kullanıldığını anlatır; bu, ilçenin genel balıkçılık-tarım dokusundan ayrı, doğrudan tersane işletmeciliğine özgü bir sahadır.",
        maddeler: [
            {
                baslik: "Kızak alanında tekne gövdesine yan erişim",
                metin:
                    "Karaya çekilmiş bir teknenin gövde yanına, omurgadan güverteye kadar erişmek gerektiğinde platform, sabit iskele kurmaya göre çok daha hızlı bir çözümdür; sepet, gövde boyunca yükseklik ve mesafe ayarlanarak ilerler. Kızak alanının zemini genellikle beton veya sıkıştırılmış dolgu olup, tekne desteklerinin (takoz, palet) çevresinde park noktası seçilirken bu desteklere temas edilmemesi önceliklidir.",
            },
            {
                baslik: "Kaplama ve boya işlerinde erişim düzeni",
                metin:
                    "Tekne gövdesinin kaplama, zımparalama ve boya işleri, gövde yüzeyi boyunca sürekli ve kademeli bir erişim ister; platform, geleneksel iskeleye göre yeniden kurulmadan yükseklik ve konum değiştirebildiği için bu tür işlerde günlük ilerlemeyi hızlandırır. Boya ve tiner kullanılan bölümlerde kıvılcım üretmeyen elektrikli ekipman tercih edilir ve havalandırma durumu göz önünde bulundurulur.",
            },
            {
                baslik: "Direk ve donanım bağlantı noktalarına erişim",
                metin:
                    "Yelkenli veya donanımlı teknelerde direk tepesi, çarmıh bağlantıları ve anten-ışık donanımı, teknenin en yüksek noktalarıdır; bu noktalara karadan, teleskopik veya eklemli bir bomla erişmek, tekneyi vinçle asmadan çalışmayı mümkün kılar. Erişim açısı, teknenin kızaktaki duruş pozisyonuna göre değerlendirilir; bazı pozisyonlarda direk teknenin kendi güvertesinden değil, yandan erişilebilir hâldedir.",
            },
            {
                baslik: "Mevsimlik yoğunluk ve karaya çekme takvimi",
                metin:
                    "Tersanenin iş yoğunluğu, teknelerin karaya çekildiği dönemlerde belirgin şekilde artar; bu dönemlerde birden fazla tekne aynı anda bakım bekler ve platform talebi kısa sürede yükselir. Yoğun dönemde makine bulunurluğunu garanti altına almak için erken rezervasyon öneririz; sezon dışında ise tarih esnekliği ve makine bulunurluğu daha rahattır.",
            },
            {
                baslik: "Dar kızak koridorlarında manevra",
                metin:
                    "Küçük tersanelerin kızak alanları, birden fazla teknenin yan yana durduğu dar koridorlarla çevrilidir; platform bu koridorlarda hem geçiş hem dönüş yapabilmelidir. Kompakt gövdeli makineler bu koşulda tercih edilir; koridor genişliği ve komşu teknelere olan mesafe, iş öncesi keşifte netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tersanede iş tipi ve erişim yöntemi",
                paragraflar: [
                    "Aşağıdaki tablo, küçük tersanelerdeki tipik iş kalemlerini ve platformun buradaki rolünü özetler.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Erişim tipi", "Risk unsuru", "Makine notu"],
                    satirlar: [
                        ["Gövde yan erişim (omurga-güverte)", "Yükseklik + mesafe ayarı", "Tekne desteklerine temas", "Dikkatli park"],
                        ["Kaplama ve boya", "Kademeli, sürekli", "Yanıcı malzeme", "Kıvılcımsız elektrikli"],
                        ["Direk tepesi, donanım", "Yandan erişim", "Duruş pozisyonu değişkenliği", "Teleskopik/eklemli"],
                        ["Dar kızak koridoru", "Geçiş + dönüş", "Komşu teknelere mesafe", "Kompakt gövde"],
                        ["Sezon yoğun dönem işleri", "Çoklu tekne", "Makine bulunurluğu", "Erken rezervasyon"],
                    ],
                },
            },
            {
                baslik: "Vinçle asmadan çalışmanın getirdiği fark",
                paragraflar: [
                    "Küçük tersanelerde direk tepesi veya yüksek donanım işleri için geleneksel yöntem, tekneyi vinçle askıya almak ya da sabit bir iskele kurmaktır; ikisi de zaman ve maliyet gerektirir. Platform, karadan erişerek bu iki adımı da atlar — tekne yerinde kalır, sepet doğrudan hedefe yönlenir.",
                    "Bu yöntemin sınırı, teknenin kızaktaki duruş açısı ve karadan erişilebilir olup olmadığıdır; bazı pozisyonlarda direk, komşu teknenin gölgesinde kalabilir ve erişim açısı daralır. Bu durumu keşifte teknenin fotoğrafıyla birlikte değerlendiririz.",
                ],
            },
            {
                baslik: "Sezon öncesi rezervasyonun önemi",
                paragraflar: [
                    "Tersanenin yoğun dönemi, birden fazla teknenin aynı anda karaya çekildiği haftalara denk gelir; bu dönemde platform talebi hızla artar ve son dakika taleplerinde makine bulunurluğu daralabilir. Sezon öncesinde bakım takviminizi bize bildirirseniz, makineyi o döneme rezerve eder ve teknelerin sırasını önceden planlarız.",
                    "Sezon dışında ise tarih esnekliği daha rahattır; acil olmayan işleri bu döneme kaydırmak, hem fiyat hem takvim açısından avantajlıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Karaya çekilmiş teknenin gövde yanına platformla ulaşabilir misiniz?",
                cevap:
                    "Ulaşabiliriz; sepet, gövde boyunca yükseklik ve mesafe ayarlanarak omurgadan güverteye kadar erişim sağlar. Kızak alanının zemini ve tekne desteklerinin (takoz, palet) konumu, park noktası seçilirken dikkate alınır — bu desteklere temas etmeden çalışmak önceliğimizdir. Teknenizin boyutunu ve kızaktaki konumunu paylaşırsanız, doğru makine sınıfını ve park düzenini önceden belirleriz.",
            },
            {
                soru: "Boya ve tiner kullanıyoruz, ekipmanınız kıvılcım riski taşır mı?",
                cevap:
                    "Taşımaz; kaplama ve boya işlerinde kıvılcım üretmeyen elektrikli ekipman kullanıyoruz ve çalışma öncesi havalandırma durumunu değerlendiriyoruz. Bu, tersanelerde standart uygulamamızdır ve pazarlık konusu değildir. Kullanılan boya ve tiner tipini bilmemiz, ek bir önlem gerekip gerekmediğini belirlememize yardımcı olur; bu bilgiyi keşifte sorarız.",
            },
            {
                soru: "Direk tepesindeki donanımı vinçle askıya almadan tamir edebilir misiniz?",
                cevap:
                    "Çoğu durumda evet; karadan teleskopik veya eklemli bomla erişerek tekneyi yerinde bırakırız, bu vinçle askıya almaya göre hem hızlı hem ekonomiktir. Sınır, teknenin kızaktaki duruş açısı ve karadan erişilebilir olmasıdır — bazı pozisyonlarda komşu tekne erişim açısını daraltabilir. Teknenizin fotoğrafını ve kızaktaki yönünü paylaşırsanız, karadan erişimin yeterli olup olmadığını keşifte netleştiririz.",
            },
            {
                soru: "Sezon başında birden fazla teknemiz aynı anda hazır olacak, sıra nasıl işler?",
                cevap:
                    "Bakım takviminizi sezon öncesinde bize bildirirseniz, makineyi o döneme rezerve eder ve teknelerin bakım sırasını önceden çıkarırız. Sezon yoğun dönemde son dakika taleplerinde makine bulunurluğu daralabileceği için erken bildirim öneririz. Teknelerin bakım önceliğini (hangi teknenin daha acil olduğunu) siz belirlersiniz, biz sırayı buna göre kurarız.",
            },
            {
                soru: "Kızak koridorumuz dar, tekneler yan yana duruyor; makineniz geçebilir mi?",
                cevap:
                    "Genellikle geçebilir ama koridor genişliğini ve komşu teknelere olan mesafeyi iş öncesi keşifte netleştiririz. Dar koridorlar için kompakt gövdeli makineler tercih edilir; bu sınıflar hem geçiş hem dönüş açısından dar alanlarda çalışmak üzere tasarlanmıştır. Koridorun fotoğrafını paylaşırsanız, sahaya gelmeden uygun sınıfı belirleriz.",
            },
            {
                soru: "Sezon dışında bakım yaptırırsak avantajı olur mu?",
                cevap:
                    "Olur. Sezon dışında tersane daha az yoğun olduğu için makine bulunurluğu rahat, tarih esnekliği yüksektir; acil olmayan bakım kalemlerini bu döneme kaydırmak hem fiyat hem takvim açısından avantaj sağlar. Sezon başlamadan önce yapılan bu bakım, yoğun dönemde son dakika arızalarını da azaltır. Yıllık bakım listenizi çıkarırsak, hangi kalemin sezon dışına yazılacağını birlikte planlayabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gelibolu kıyısındaki küçük tekne tersaneciliği kamuya açık bölgesel bilgidir; tersane adı, tekne sayısı ve rakam kullanılmamıştır. Erişim yöntemi ve sezon planlaması firma pratiğidir.",
    },

    "bolge:biga-osb": {
        h1: "Biga OSB'de Seramik ve Yan Sanayi Tesislerine Platform Kiralama",
        giris:
            "Biga OSB içindeki seramik ve yapı malzemesi üreten tesisler, Çan'daki büyük fırın hatlarından farklı bir ölçekte ama benzer bir üretim mantığıyla çalışır: daha kompakt fırın hatları, daha yoğun paketleme-sevkiyat trafiği ve OSB'nin planlı altyapısına bağlı bir işleyiş. Bu sayfa, OSB içindeki seramik ve yan sanayi tesislerinde platformun fırın çevresi ve paketleme hattı işlerinde nasıl kullanıldığını, ilçenin genel OSB profilinden ayrı, doğrudan bu üretim tipine odaklanarak anlatır.",
        maddeler: [
            {
                baslik: "OSB içi kompakt fırın hatlarında erişim",
                metin:
                    "Biga OSB'deki seramik ve yapı malzemesi tesislerinin fırın hatları, Çan'daki büyük ölçekli hatlara göre daha kısa ve kompakttır; bu, bakım işlerinin daha kısa sürede tamamlanabileceği anlamına gelir ama erişim hassasiyeti aynıdır — gövde yüzeyine yakın çalışma, soğuma penceresini bekler. OSB'nin planlı parsel yapısı, makinenin fırın hattına ulaşımını kolaylaştırır.",
            },
            {
                baslik: "Paketleme ve sevkiyat hattında yüksek trafik",
                metin:
                    "Seramik ve yapı malzemesi tesislerinin paketleme hatları, sürekli forklift ve palet trafiğiyle çalışır; bu hatların üstündeki aydınlatma ve konveyör bakımı, trafiğin en az olduğu vardiya aralarına yazılır. Çalışma alanı bariyerle ayrılır ve forklift güzergâhına alternatif gösterilir; bu düzen kurulmadan sepet kaldırılmaz.",
            },
            {
                baslik: "OSB altyapısıyla uyumlu giriş düzeni",
                metin:
                    "Biga OSB'nin giriş kaydı ve güvenlik prosedürü, seramik tesislerine girişte de aynen uygulanır; operatör yeterlilik belgeleri ve makine kontrol kayıtları önceden hazırlanır. Bu, ilçedeki genel OSB uygulamasıyla aynıdır ama seramik tesislerinde ayrıca toz ve yüksek sıcaklık kaynaklı ek bir saha bilgilendirmesi yapılır.",
            },
            {
                baslik: "Hammadde silosu ve karışım ünitesi çevresi",
                metin:
                    "Kil ve katkı maddelerinin depolandığı silolar ile karışım üniteleri, OSB parselinin genellikle bir köşesinde toplanır; bu bölgede toz yükü yüksektir ve bakım işleri filtre kontrolüyle birlikte planlanır. Silo tepesi işlerinde düz uzanan teleskopik bom, çevresinde engel yoksa en hızlı çözümdür.",
            },
            {
                baslik: "Komşu tesislerle ortak bakım programı",
                metin:
                    "OSB içindeki birden fazla seramik veya yapı malzemesi tesisi, benzer bakım ihtiyaçlarını (fırın çevresi, paketleme hattı) aynı döneme denk getirdiğinde, tek sevkiyatla birden fazla tesise hizmet vermek mümkün olur. Bu, ilçedeki genel OSB komşuluk ekonomisiyle aynı mantıktır ama burada seramik sektörüne özgü ortak bakım takvimi (fırın duruşları benzer aylara denk gelebilir) devreye girer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB içi seramik tesisinde bölüm ve zamanlama",
                paragraflar: [
                    "Aşağıdaki tablo, OSB içindeki seramik ve yapı malzemesi tesislerinin farklı bölümlerinde çalışma zamanlamasını özetler.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Baskın kısıt", "Zamanlama", "Makine"],
                    satirlar: [
                        ["Kompakt fırın hattı", "Sıcaklık", "Soğuma penceresi", "Eklemli"],
                        ["Paketleme-sevkiyat hattı", "Forklift trafiği", "Vardiya arası", "Akülü makaslı"],
                        ["Hammadde silosu", "Toz yükü", "Vardiya dışı", "Teleskopik"],
                        ["Karışım ünitesi", "Toz, dar erişim", "Vardiya dışı", "Kompakt eklemli"],
                        ["OSB ortak altyapı", "Giriş kaydı", "Esnek", "Standart"],
                    ],
                },
            },
            {
                baslik: "Kompakt hatların bakım süresine etkisi",
                paragraflar: [
                    "Biga OSB'deki seramik tesislerinin fırın hatları, Çan'daki büyük hatlara göre daha kısa olduğu için, aynı tip bir bakım işi burada genellikle daha az sürede tamamlanır. Bu, hem duruş penceresinin daha kısa tutulabileceği hem de makinenin daha az süre sahada kalacağı anlamına gelir — ikisi de maliyeti düşüren unsurlardır.",
                    "Kısa hat, erişim hassasiyetini azaltmaz; gövdeye yakın çalışma yine soğuma penceresi ister. Fark, toplam işin süresinde ortaya çıkar, güvenlik kuralında değil.",
                ],
            },
            {
                baslik: "Seramik sektöründe ortak bakım dönemi",
                paragraflar: [
                    "OSB içindeki seramik ve yapı malzemesi üreticilerinin fırın duruş dönemleri, sektörün genel üretim ritmine bağlı olarak benzer aylara denk gelebilir. Bu benzerlik fark edildiğinde, komşu tesislerle aynı haftaya bakım planlamak, tek sevkiyatla birden fazla tesise hizmet vermeyi mümkün kılar.",
                    "Bu tür bir koordinasyonu kurmak için tesislerin kendi aralarında ya da bölge yönetimi üzerinden iletişime geçmesi yeterlidir; bizim tarafımızdaki katkı, farklı tesislerin listelerini tek rotaya yerleştirmektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'deki fırın hattımız Çan'dakilerden daha küçük, bakım süresi de kısalır mı?",
                cevap:
                    "Genellikle evet, kompakt hatlarda aynı tip bir bakım işi daha az sürede tamamlanır çünkü hat boyu ve erişilecek nokta sayısı daha azdır. Ancak erişim hassasiyeti değişmez — gövdeye yakın çalışma yine soğuma penceresini bekler ve hız kontrollü tutulur. Hat uzunluğunuzu ve kalem listenizi paylaşırsanız, gerçekçi bir süre tahmini veririz.",
            },
            {
                soru: "Paketleme hattımızda forklift trafiği çok yoğun, çalışma güvenli olur mu?",
                cevap:
                    "Alan ayrımı kurulduğunda olur. Çalışma bölgesi bariyer ve uyarı düzeniyle kapatılır, forklift güzergâhına alternatif gösterilir ve bu düzen kurulmadan sepet kaldırılmaz. İş, mümkünse trafiğin en az olduğu vardiya arasına yazılır. Yoğunluğun en düşük olduğu saatleri söylerseniz planı doğrudan o pencereye kurarız.",
            },
            {
                soru: "OSB'ye girişte seramik tesisine özgü ek bir prosedür var mı?",
                cevap:
                    "OSB'nin genel giriş kaydı ve güvenlik prosedürü aynen uygulanır; buna ek olarak seramik tesislerinde toz ve yüksek sıcaklık kaynaklı bir saha bilgilendirmesi yapılır — operatörümüz hangi bölgelerin sıcak, hangilerinin tozlu olduğu konusunda tesis yetkilisinden bilgi alır. Bizim tarafımızdaki belge seti (operatör yeterlilikleri, makine kontrol kayıtları) standart OSB girişleriyle aynıdır ve önceden hazırdır.",
            },
            {
                soru: "Silo tepesindeki bakım için hangi makine gerekir?",
                cevap:
                    "Silo çevresinde engel yoksa düz uzanan teleskopik bom en hızlı çözümdür; çevrede boru hattı veya bant köprüsü varsa kırılımlı eklemli sınıf gerekir. Toz yükü yüksek olduğu için filtre kontrolü iş sonunda standart rutine dahil edilir. Silonun çevre fotoğrafını gönderirseniz sınıf kararını sahaya gelmeden veririz.",
            },
            {
                soru: "Komşu seramik tesisiyle aynı haftada bakım yaptırırsak avantajı olur mu?",
                cevap:
                    "Olur. Seramik sektöründeki fırın duruş dönemleri benzer aylara denk gelebiliyor; bu benzerlik fark edildiğinde komşu tesislerle aynı haftaya bakım planlamak, tek sevkiyatla birden fazla tesise hizmet vermeyi mümkün kılar ve nakliye maliyeti bölünür. Komşunuzda benzer bir bakım ihtiyacı olup olmadığını bilmiyorsanız, talebinizi ortak plana açık notuyla iletmeniz yeterlidir.",
            },
            {
                soru: "Karışım ünitesindeki toz, makinenizde arızaya yol açar mı?",
                cevap:
                    "Bakım aralığı ortama göre kısaltılmazsa yol açabilir; bu yüzden karışım ünitesi gibi yoğun tozlu bölgelerde çalışan makinelerde filtre ve soğutma kontrolü sıklaştırılır. Bu düzenin maliyeti teklifte görünür durumdadır, sonradan çıkan bir kalem olarak sunulmaz. Uzun süreli işlerde saha ziyaret sıklığını artırarak makinenin performansını koruruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Biga OSB'nin seramik ve yapı malzemesi üretim varlığı kamuya açık bölgesel bilgidir; tesis adı, kapasite ve rakam kullanılmamıştır. Bakım süresi ve ortak dönem koordinasyonu firma pratiğidir.",
    },

    "bolge:ezine": {
        h1: "Ezine'de Fırın ve Kızak Sahalarına Destek Sevkiyatı",
        giris:
            "Ezine, kendi başına büyük bir fırın veya tersane sahası barındırmasa da, Çan'daki seramik fırınlarına ve Gelibolu'daki tersanelere giden sevkiyat hattının üzerinde bulunur; bu yüzden ilçedeki filo yönlendirmesi, bazen doğrudan Ezine'deki bir işi değil, bu iki uca giden bir sevkiyatın ara durağını ifade eder. Bununla birlikte ilçenin kendi tarım-gıda tesislerinde de düzenli platform talebi vardır. Bu sayfa, Ezine'nin bu iki rolünü — kendi tesis talebi ve fırın-tersane hattındaki ara konum — birlikte ele alır.",
        maddeler: [
            {
                baslik: "Fırın ve tersane hattının ara durağı",
                metin:
                    "Merkezden Çan'a giden bir sevkiyat ile merkezden Gelibolu'ya giden bir sevkiyat, güzergâh olarak Ezine çevresinden geçebilir; bu, ilçedeki bir müşterinin işini aynı sevkiyata ekleyebileceği anlamına gelir. Bu tür bir birleşim, nakliye maliyetini düşürür ve tarih esnekliği bırakıldığında kolayca kurulabilir.",
            },
            {
                baslik: "Süt ve peynir tesislerinde standart bakım",
                metin:
                    "İlçenin kendi süt-peynir üretim tesislerinde platform talebi, hijyen kurallı kapalı alanlarda aydınlatma ve havalandırma bakımı ile sınırlıdır; bu, fırın veya tersane işlerinden tamamen farklı bir çalışma disiplini gerektirir ve akülü, iz bırakmayan ekipman standarttır.",
            },
            {
                baslik: "Tarımsal depoların hat üzerindeki konumu",
                metin:
                    "Ezine'deki tarımsal depo ve zeytin işleme tesisleri, fırın-tersane hattına yakın konumları nedeniyle bazen aynı sevkiyat turuna dahil edilir; özellikle sezon dışı dönemde bu tür bir birleşim hem depo işletmesine hem bize maliyet avantajı sağlar.",
            },
            {
                baslik: "Acil çağrılarda hat üzerindeki makinenin yönlendirilmesi",
                metin:
                    "Çan veya Gelibolu'ya giden bir sevkiyat sırasında Ezine'de acil bir çağrı gelirse, hat üzerindeki makine kısa bir sapmayla bu çağrıya yönlendirilebilir; bu, ayrı bir sevkiyat beklemeye göre belirgin şekilde hızlıdır. Bu tür yönlendirmeler, o anki sevkiyat programına bağlı olarak değerlendirilir.",
            },
            {
                baslik: "Hat üzerindeki müşteriler için tarih esnekliği avantajı",
                metin:
                    "Ezine'deki müşterilerimiz, işlerini tarih esnek notuyla açtığında, Çan veya Gelibolu'ya giden ilk uygun sevkiyata eklenir ve fiyat farkı doğrudan gösterilir. Acil işlerde tekil sevkiyat da yapılır; iki seçenek arasındaki fark açıkça sunulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ezine'de iş tipi ve sevkiyat bağlantısı",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki iş tiplerinin fırın-tersane hattıyla ilişkisini özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Hat bağlantısı", "Zamanlama avantajı", "Not"],
                    satirlar: [
                        ["Süt-peynir tesisi bakımı", "Yok, bağımsız", "Vardiya arası", "Hijyen kurallı"],
                        ["Zeytin/tarım deposu", "Kısmi, sezon dışı", "Sezon dışı tur", "Esnek tarih avantajlı"],
                        ["Acil arıza (genel)", "Hat üzeri sapma", "En hızlı", "Sevkiyat programına bağlı"],
                        ["Fırın/tersane malzeme ara durak", "Doğrudan", "Tur içi", "Tarih esnek önerilir"],
                        ["Standart cephe-tabela", "Yok", "Esnek", "Programa kolayca eklenir"],
                    ],
                },
            },
            {
                baslik: "Ara durak modelinin işleyişi",
                paragraflar: [
                    "Merkezden Çan veya Gelibolu'ya giden düzenli sevkiyatlarımız, güzergâh üzerindeki Ezine'de kısa bir durak yapabilir. Bu model, ilçedeki müşterinin işinin acil olmadığı ve tarihte esneklik gösterdiği durumlarda en verimli sonucu verir; sevkiyat programımızı önceden paylaşır, uygun tarihi birlikte seçeriz.",
                    "Acil işlerde bu modeli beklemek yerine tekil sevkiyat yaparız; bu durumda maliyet mesafeye göre hesaplanır ve açıkça belirtilir.",
                ],
            },
            {
                baslik: "Sezon dışı dönemde tarımsal işlerin hatla birleşimi",
                paragraflar: [
                    "Zeytin işleme ve tarımsal depo bakımları sezon dışında yoğunlaşır; bu dönem aynı zamanda fırın ve tersane hattındaki sevkiyatların da esnek olduğu bir dönemdir. İki tarafın esnekliği çakıştığında, aynı sevkiyata birden fazla iş eklenebilir ve toplam maliyet düşer.",
                    "Bu birleşimi kurmak için yıllık bakım listenizi sezon başlamadan bize iletmeniz yeterlidir; sevkiyat programımızla örtüştüğü noktaları birlikte belirleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İşimiz Çan'a giden sevkiyata eklenebilir mi, nasıl işler?",
                cevap:
                    "Ekleyebiliriz; merkezden Çan'a giden düzenli sevkiyatlarımız güzergâh üzerindeki Ezine'de kısa bir durak yapabilir. Bunun için işinizi tarih esnek notuyla açmanız yeterli — ilk uygun sevkiyata yerleştirir, tekil sevkiyata göre fiyat farkını size gösteririz. İşiniz acilse tekil sevkiyat da yaparız; kararı iki fiyatı görerek verirsiniz.",
            },
            {
                soru: "Süt tesisimizin bakımı fırın-tersane hattıyla bir ilgisi var mı?",
                cevap:
                    "Doğrudan yok; süt-peynir tesislerindeki bakım, hijyen kurallı kapalı alanlarda aydınlatma ve havalandırma işleriyle sınırlı, bağımsız bir çalışma disiplinidir. Ancak sevkiyat açısından, işiniz uygun tarihte hat üzerindeki bir sevkiyata eklenerek maliyet avantajı sağlanabilir. Tesisinizin vardiya takvimini paylaşırsanız, hem hijyen hem sevkiyat açısından en uygun günü buluruz.",
            },
            {
                soru: "Acil bir arızamız var, hat üzerinde makine varsa daha mı hızlı gelir?",
                cevap:
                    "Evet, hat üzerinde zaten hareket hâlinde bir makinemiz varsa kısa bir sapmayla acil çağrıya yönlendirilebilir; bu, ayrı bir sevkiyat beklemeye göre belirgin şekilde hızlıdır. Bu tür yönlendirme, o anki sevkiyat programına bağlıdır ve garanti edilemez ama mümkün olduğunda önceliklidir. Arızanın türünü ve konumunu ilk çağrıda net verirseniz, en hızlı seçeneği değerlendiririz.",
            },
            {
                soru: "Zeytin tesisimizin bakımını sezon dışında hangi avantajla yaptırabiliriz?",
                cevap:
                    "Sezon dışı dönem, hem tesisinizin boş olması hem de fırın-tersane hattındaki sevkiyatların esnek olması açısından çift avantaj sunar. İki tarafın esnekliği çakıştığında aynı sevkiyata birden fazla iş eklenebilir ve nakliye maliyeti düşer. Yıllık bakım listenizi sezon başlamadan iletirseniz, sevkiyat programımızla örtüşen en uygun tarihi birlikte belirleriz.",
            },
            {
                soru: "Tarih esnek notuyla iş açmak fiyatı gerçekten ne kadar düşürüyor?",
                cevap:
                    "Fark, işinizin ne kadar uygun bir sevkiyata denk geldiğine bağlı değişir ama genel eğilim net: tekil sevkiyatta mesafe maliyeti tek işe yüklenirken, hat üzerindeki bir sevkiyata eklendiğinde bu maliyet birden fazla işe dağılır. Teklifte iki senaryoyu (tekil ve tur içi) yan yana gösteririz; hangisinin sizin için uygun olduğuna rakamları görerek karar verirsiniz.",
            },
            {
                soru: "Standart tabela veya cephe işimizi ne zaman planlamalıyız?",
                cevap:
                    "Bu tür işler hat bağlantısı gerektirmediği için esnektir; sektörel yoğunluğun düşük olduğu dönemlerde (fırın duruşu, tersane sezon arası, tarım sezonu dışı) programa kolayca eklenir. Tarihinizi esnek bırakırsanız, uygun bir aralığa yerleştirip haber veririz; acilse standart tekil sevkiyatla da hızlıca planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ezine'nin Çan-Gelibolu sevkiyat hattı üzerindeki coğrafi konumu ve tarım-gıda kimliği kamuya açık bilgidir; işletme adı ve rakam kullanılmamıştır. Ara durak ve tur birleştirme yaklaşımı firma pratiğidir.",
    },

    "bolge:bandirma-osb-balikesir-cevre-ili": {
        h1: "Bandırma ve Balıkesir Çevresinde Seramik-Tersane Destek Hizmeti",
        giris:
            "Bandırma ve çevresi, Çanakkale tarafındaki fırın-tersane hizmet hattımızın komşu il uzantısıdır; bölgedeki yapı malzemesi üreticileri ve kıyı şeridindeki küçük tekne bakım noktaları, merkezdeki filomuzun düzenli olarak hizmet verdiği ikinci bir küme oluşturur. Bu sayfa, komşu il hattındaki bu iki iş ailesine — seramik-yapı malzemesi üretimi ve küçük ölçekli tekne bakımı — nasıl hizmet verdiğimizi, liman-kimya sanayisi ağırlıklı genel Bandırma profilinden ayrı olarak anlatır.",
        maddeler: [
            {
                baslik: "Bölgedeki yapı malzemesi üreticilerine destek",
                metin:
                    "Bandırma çevresindeki yapı malzemesi ve seramik ağırlıklı üreticiler, Çan'daki büyük hatlara göre daha küçük ölçekli fırın ve kurutma üniteleri kullanır; bakım işleri benzer bir mantıkla ama daha kısa sürede tamamlanır. Bu tesislere hizmet, Biga hattı üzerinden ilerleyen sevkiyatlara eklenerek yürütülür.",
            },
            {
                baslik: "Kıyı şeridindeki küçük tekne bakım noktaları",
                metin:
                    "Marmara kıyısındaki küçük tekne bakım ve depolama alanları, Gelibolu'daki tersanelere göre daha dağınık ve küçük ölçeklidir; genellikle tek tek talep gelir ve sevkiyat, o anki tur programına göre değerlendirilir. Bu noktalarda platform, karadan gövde ve donanım erişimi için kullanılır.",
            },
            {
                baslik: "İki iş ailesinin ortak sevkiyat mantığı",
                metin:
                    "Yapı malzemesi tesisi ile kıyı tekne bakım noktası aynı hafta içinde talep gelirse, tek sevkiyata bağlanarak maliyet paylaşılır; bu, Çanakkale tarafındaki fırın-tersane ikilisinin komşu ildeki küçük ölçekli yansımasıdır. Tarih esnekliği bu birleşimi kolaylaştıran en önemli unsurdur.",
            },
            {
                baslik: "Komşu il hattında makine sınıfı seçimi",
                metin:
                    "Bölgedeki işlerin ölçeği (kompakt fırın, küçük tekne) göz önüne alındığında, genellikle orta ve kompakt sınıf makineler yeterli olur; büyük ölçekli teleskopik sınıflar nadiren gerekir. Bu, sevkiyat maliyetini de düşüren bir etkendir çünkü daha küçük makineler taşıma açısından daha esnektir.",
            },
            {
                baslik: "Sezon ve duruş takvimlerinin komşu ilde de izlenmesi",
                metin:
                    "Bandırma çevresindeki yapı malzemesi tesislerinin duruş dönemleri ve kıyı tekne bakım sezonu, Çanakkale tarafındaki takvimlere benzer bir ritim izler; bu benzerlik, sevkiyat planlamasını komşu il için de öngörülebilir kılar. Yıllık takvim bilgisini önceden paylaşan müşterilerimizle bu ritmi birlikte kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Komşu il hattında iş ailesi ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, Bandırma ve çevresindeki iki iş ailesinin makine ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["İş ailesi", "Ölçek", "Makine sınıfı", "Sevkiyat notu"],
                    satirlar: [
                        ["Yapı malzemesi/seramik tesisi", "Kompakt fırın", "Eklemli, orta bant", "Biga hattı turu"],
                        ["Kıyı tekne bakımı", "Küçük ölçek", "Teleskopik/eklemli kompakt", "Tur programına bağlı"],
                        ["İki ailenin birleşimi", "Karma", "Değişken", "Tarih esnek önerilir"],
                        ["Acil arıza", "—", "En yakın uygun sınıf", "Hızlandırılmış"],
                        ["Standart bakım", "—", "Standart", "Esnek"],
                    ],
                },
            },
            {
                baslik: "Küçük ölçeğin sevkiyat avantajı",
                paragraflar: [
                    "Bandırma çevresindeki fırın ve tekne bakım işlerinin çoğu, büyük teleskopik sınıflara göre daha kompakt makinelerle karşılanabiliyor; bu, hem taşıma hem konumlanma açısından esneklik sağlıyor. Kompakt makineler, aynı sevkiyata birden fazla küçük işi eklemeyi de kolaylaştırıyor çünkü taşıma araçları arasında geçiş daha hızlı oluyor.",
                    "Bu esneklik, komşu il hattındaki müşterilerimize somut bir fiyat avantajı olarak yansıyor — özellikle birden fazla küçük işi aynı haftaya topladıklarında.",
                ],
            },
            {
                baslik: "İki takvimi birlikte okumak",
                paragraflar: [
                    "Yapı malzemesi tesislerinin duruş dönemleri ile kıyı tekne bakım sezonu, çoğunlukla aynı mevsimsel ritmi paylaşır; bu benzerlik fark edildiğinde, komşu il hattındaki sevkiyat planlaması çok daha öngörülebilir hâle gelir. Bizim tarafımızdaki katkı, bu iki takvimi birlikte izleyip örtüşen dönemlerde ortak sevkiyat önermektir.",
                    "Yıllık takvim bilgisini paylaşan müşterilerimizle bu ritmi yıl başında birlikte kurarız; bu, hem bizim planlamamızı hem onların bütçe öngörüsünü kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bandırma'daki yapı malzemesi tesisimizin fırın hattı Çan'dakinden nasıl farklı?",
                cevap:
                    "Genellikle daha kompakt ve kısa; bu, bakım işlerinin daha az sürede tamamlanabileceği anlamına gelir. Erişim hassasiyeti aynı kalır — gövdeye yakın çalışma yine soğuma penceresi ister. Hat uzunluğunuzu ve kalem listenizi paylaşırsanız, gerçekçi bir süre ve makine sınıfı öneririz; Biga hattı üzerinden ilerleyen sevkiyatlarımıza eklenerek nakliye maliyeti düşürülebilir.",
            },
            {
                soru: "Kıyıdaki küçük teknemizin bakımı için ayrı sevkiyat mı gerekiyor?",
                cevap:
                    "İşinizin acil olup olmamasına bağlı. Acil değilse, tarih esnek notuyla açtığınızda uygun bir tur programına eklenir ve maliyet düşer. Acilse tekil sevkiyat yaparız; bu durumda maliyet mesafeye göre hesaplanır ve açıkça belirtilir. Teknenin boyutunu ve hangi bölgede bakım yapılacağını söylerseniz uygun makine sınıfını önceden belirleriz.",
            },
            {
                soru: "Aynı hafta hem fırın tesisinde hem kıyıda işimiz var, birleştirebilir misiniz?",
                cevap:
                    "Birleştirebiliriz; bu, komşu il hattındaki en verimli düzenlemedir. İki iş tek sevkiyata bağlanır, nakliye maliyeti paylaşılır. Bunun için her iki işin de tarihte biraz esnek olması yeterlidir. İki işin konumunu ve tercih ettiğiniz hafta aralığını verirseniz, tek turda bitirecek bir program çıkarırız.",
            },
            {
                soru: "Komşu ildeki işleriniz için hangi makine sınıfını kullanıyorsunuz?",
                cevap:
                    "Bölgedeki işlerin ölçeği genellikle orta ve kompakt sınıf makineleri yeterli kılıyor; büyük teleskopik sınıflar nadiren gerekiyor. Bu tercih hem sevkiyat esnekliği hem maliyet açısından avantajlı. İşinizin ölçeği daha büyükse (yüksek silo, geniş fırın hattı gibi) bunu keşifte netleştirir, gerekiyorsa daha büyük sınıfı öneririz.",
            },
            {
                soru: "Yıllık bakım takvimimizi paylaşırsak ne kazanırız?",
                cevap:
                    "Sevkiyat planlamasını sizin için öngörülebilir hâle getiririz. Yapı malzemesi tesislerinin duruş dönemleri ile kıyı tekne bakım sezonu benzer bir ritim izliyor; bu ritmi bilerek yıl başında birlikte bir takvim kurarsak, hem makine bulunurluğu garanti altına alınır hem sevkiyat maliyeti düşer. Takviminizi ne kadar erken paylaşırsanız, planlama o kadar sıkı kurulur.",
            },
            {
                soru: "Acil bir arıza çıkarsa komşu ilde ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Süre, o anki sevkiyat programımıza ve bölgedeki makine bulunurluğuna bağlıdır; hat üzerinde zaten hareket hâlinde bir makinemiz varsa kısa bir sapmayla hızlıca yönlendirilebilir. Arızanın türünü ve konumunu ilk çağrıda net verirseniz, en yakın uygun makineyi belirleyip size süre konusunda net bilgi veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bandırma çevresinin yapı malzemesi üretimi ve Marmara kıyı şeridi konumu kamuya açık bölgesel bilgidir; tesis/tekne adı, kapasite ve rakam kullanılmamıştır. Ortak sevkiyat ve takvim eşleştirme yaklaşımı firma pratiğidir.",
    },
};
