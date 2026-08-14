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
    "bolge:can-termik-santral-bolgesi": {
        h1: "Çan Termik Santral Bölgesinde İzinli Manlift Çalışması",
        giris: "Çan Termik Santral Bölgesi için bu kayıt, seramik üretimi veya fırın gövdesi bakımını değil, enerji sahasındaki yüksek erişim görevlerini ele alır. Belirli santral, ünite, kapasite, ekipman markası, sıcaklık, yükseklik veya üretim verisi ileri sürülmez. Gerçek işte kablo taşıyıcı, armatür, algılama elemanı, kamera, havalandırma bileşeni, boru destek noktası ve benzeri hedefler tesisin teknik sorumlusu tarafından tanımlanır. Enerji sahasında platformun hedefe ulaşabilmesi tek başına yeterli değildir; iş emri, bölüm yetkisi, enerji izolasyonu, toz ve ısı değerlendirmesi, eş zamanlı faaliyet kontrolü, acil durum iletişimi ve alan teslimi aynı çalışma dosyasında kapanmalıdır. Akülü veya farklı tahrikli bir sınıfın uygunluğu, ortam koşulu ve tesis kuralı görülmeden varsayılmaz. Düz, temizlenmiş ve boş iç aksta uygun makaslı; sabit tesisat arkasındaki noktada çalışma zarfı yeterli eklemli; açık ve daha zorlu yüzeyde ise zemine uygun sınıf değerlendirilebilir. Platform yük, boru veya ağır bakım parçası kaldırmaz. İşletme prosesi ve enerjiyi güvenli duruma getirir, erişim ekibi makine sınırlarını korur. Sepet yalnız teslim edilmiş bölüm içinde yükselir ve çalışma teknik kabul ile temiz alan iadesi tamamlanınca kapanır.",
        maddeler: [
            { baslik: "İş iznini hedef ve bölüm sınırıyla açmak", metin: "İzin kartında yapılacak işlem, hedefin konumu, etkilenebilecek enerji kaynakları, çalışma bölümü, görevli kişiler, kullanılacak küçük aletler ve durdurma ölçütleri yazılır. Genel saha girişi, belirli bir yüksek erişim işi için çalışma yetkisi sayılmaz. Bölümü teslim eden, izolasyonu uygulayan, platformu kullanan, yerde gözcülük yapan ve teknik sonucu kabul eden roller belirlenir. Yeni bir hedef çıktığında eski izin kendiliğinden genişlemez; hedefin ortamı ve enerji ilişkisi yeniden incelenir. Vardiya değişirse yetkili isimler ile iletişim kanalı güncellenir. Kartın bir bölümü belirsizse makine hazır olsa dahi yükselme başlamaz." },
            { baslik: "Tozlu ortamı ekipman uygunluğundan ayırmamak", metin: "Tozun kaynağı, yoğunluğu, havada kalma durumu, temizlik yöntemi ve özel ortam sınırlamaları tesisin risk değerlendirmesinden alınır. Akülü platformun egzozsuz olması her tozlu hacimde kullanılabileceği anlamına gelmez. Gereken uygunluk teyit edilemiyorsa standart makine bölüme sokulmaz. Park yüzeyi ve yürüyüş yolu birikinti, keskin parça ve kaygan kalıntıdan tesisin onayladığı yöntemle arındırılır; gelişigüzel basınçlı hava ile toz yayılmaz. Sepette kıvılcım oluşturabilecek işlem varsa ayrı sıcak iş değerlendirmesi gerekir. Çalışma bittiğinde makine temizliği de ortamlar arası toz taşımasını önleyen kontrollü bir kapı olarak uygulanır." },
            { baslik: "Isı etkisini bölüm sahibiyle doğrulamak", metin: "Hedef yakınındaki sıcak yüzeyler, yükselen hava, radyant etki ve havalandırma durumu tesis tarafından açıklanır. Dışarıdan yapılan gözlem güvenli çalışma aralığını belirlemeye yetmez. Tesis sorumlusu ilgili prosesin durumunu ve yaklaşma sınırını tanımlar; operatör makine bileşenleri, sepet içindeki kişi ve aletler üzerindeki etkiyi değerlendirir. Koşul sürekli izlenemiyorsa iş daha uygun bölüm durumuna alınır. Personelin mola ve koruyucu donanım ihtiyacı tesis prosedürüne bağlanır. Takvim baskısı, hissedilen sıcaklığın olağan sayılması veya işin kısa sürmesi kontrolü kaldırmaz. Olağan dışı ısı değişiminde sepet güvenle aşağı alınır ve izin yeniden değerlendirilir." },
            { baslik: "Eş zamanlı faaliyetleri çalışma hücresinden çıkarmak", metin: "Platformun tabanı, sepet hareketi, düşebilecek küçük parçalar ve yakın ekipmanın dönüş alanı birlikte çevrilir. Hücre içinde araç, vinç, askılı yük, malzeme aktarımı veya başka bakım faaliyeti aynı anda yürütülmez. Komşu bölüm yalnız toz, sıcak akım, titreşim, enerji ya da hareket platform alanına ulaşmıyorsa açık kalabilir. Bariyeri koruyacak ve bölüm hareketini durdurabilecek saha sorumlusu belirlenir. Zorunlu bir geçiş oluştuğunda sepet yukarıda bekletilerek insan veya araç geçirilmez. Makine indirilir, aletler emniyete alınır ve izinli düzen yeniden kurulduktan sonra çalışma devam eder." },
            { baslik: "Teknik kabul ve temiz alan iadesi yapmak", metin: "Hedef tamamlandığında el aletleri, bağlantı elemanları ve sökülen parçalar sayılır. Tesisin teknik yetkilisi yapılan müdahaleyi, üstte gevşek unsur kalmadığını ve ilgili sistemin güvenli durumunu kontrol eder. Sepet aşağı alınır; platform yüzeyindeki toz ve artıklar kabul edilen yöntemle temizlenir. Açık iş, konumu ve bırakılan güvenli koşulla kaydedilir, tamamlanmış gibi işaretlenmez. Enerjinin veya prosesin yeniden devreye alınmasına yalnız tesis yetkilisi karar verir. Bariyer, teknik kontrol ile temizlik birlikte kapanmadan kaldırılmaz. Başka bölüme geçilecekse önceki izin taşınmaz; yeni bölüm kendi ortam, izolasyon ve teslim kapılarıyla açılır." },
        ],
        ekBolumler: [
            { baslik: "Enerji sahası izin kapıları tablosu", paragraflar: ["Tablo belirli bir tesis prosedürü değildir; gerçek işte yetkili saha ekibince doldurulacak genel karar eşiklerini gösterir."], tablo: { basliklar: ["Kapı", "Doğrulanan konu", "Karar sahibi", "Kapanış"], satirlar: [["Kapsam", "Hedef ve görev", "İşveren temsilcisi", "İş kartı hazır"], ["Enerji", "İzolasyon ve proses", "Tesis yetkilisi", "Güvenli durum"], ["Ortam", "Toz ve ısı", "Saha sorumluları", "Uygunluk teyidi"], ["Ekipman", "Geometri ve zemin", "Operatör", "Sınıf onayı"], ["İade", "Teknik sonuç ve temizlik", "Kabul yetkilisi", "Bölüm açılışı"]] } },
            { baslik: "Ekipman sınıfı teyit dosyası", paragraflar: ["Her hedef için dikey mesafe, yatay engel, park yüzeyi, kapı, dönüş, üst tesisat, ortam koşulu ve sepetteki toplam yük kaydedilir. Makaslı sınıf hedefin altında güvenli park ister. Eklemli sınıfın erişimi üreticinin çalışma zarfından okunur. Dış yüzeyde zemin taşıması ve hava kullanımı ayrıca değerlendirilir.", "Aynı bölümdeki bütün hedefler tek modele zorlanmaz. Akülü olması toz uygunluğu, kompakt olması ise kapasite yeterliliği anlamına gelmez. Personel, bağlı alet ve yönetilebilir küçük parça toplamı üretici sınırı içinde kalır. Ağır tesis parçası başka kaldırma yöntemiyle hazırlanır ve yük hareketi tamamlandıktan sonra platform personel erişimi için kullanılır." ] },
            { baslik: "Acil durumda iletişim ve indirme düzeni", paragraflar: ["İzin açılmadan önce sepet ekibi, gözcü, bölüm sorumlusu ve tesisin acil iletişim kanalı birbirine tanıtılır. Yerdeki yetkin kişi acil indirme kumandasına erişebilir ve makineye ilişkin görevini bilir. Gürültü veya görüş engeli varsa kullanılacak işaret ya da iletişim yöntemi önceden sınanır.", "İletişim kesilir, ortam koşulu değişir veya bölüm izolasyonu bozulursa çalışma güvenli durumda durdurulur. Gözcü başka göreve gönderilmez. Olay ya da olağan dışı kullanım sonrasında tesis ve teknik sorumluların belirlediği inceleme tamamlanmadan platform yeniden devreye alınmaz. Kurtarma düzeni yalnız belge içinde kalmaz; erişilebilirlik sahada gözlenir." ] },
        ],
        sss: [
            { soru: "Enerji sahasında genel giriş izni çalışmaya yetiyor mu?", cevap: "Hayır. Genel giriş yalnız sahaya kabulü gösterebilir; belirli bölümde ve belirli hedefte platform kullanma yetkisi değildir. İşin kapsamı, bölüm sahibi, enerji izolasyonu, toz ve ısı koşulları, eş zamanlı faaliyetler, operatör ile gözcü rolleri ve teknik kabul sahibi ayrıca tanımlanmalıdır. Her izin kapısı kendi yetkilisi tarafından kapatılır. Vardiya veya hedef değiştiğinde önceki onayın otomatik sürdüğü varsayılmaz. Makine uygun olsa bile bölüm teslim edilmeden sepet yükselmez; sözlü acele talebi yazılı çalışma düzeninin yerini tutmaz." },
            { soru: "Akülü manlift tozlu alanda her zaman kullanılabilir mi?", cevap: "Hayır. Egzozsuz tahrik, özel toz riskine karşı otomatik uygunluk sağlamaz. Tozun niteliği, yoğunluğu, havalandırma, yüzey birikimi, temizlik yöntemi ve tesisin ortam sınıflandırması görülmelidir. Özel uygunluk gereken yerde doğrulanmamış standart platform kullanılmaz. Yürüyüş yolu temizlenir, tozu havaya kaldıracak gelişigüzel yöntemlerden kaçınılır. Kıvılcım çıkarabilecek bir görev varsa ayrıca sıcak iş izni ve bölüm kontrolü gerekir. Bilgi eksikse çalışmayı başlatmak yerine teknik ve iş güvenliği sorumlularının teyidi beklenir." },
            { soru: "Sıcak bölüm yakınında manlift çalışabilir mi?", cevap: "Karar, tesisin proses bilgisi ve risk değerlendirmesiyle verilir. Hedefe yakın sıcak yüzey, yükselen hava, radyant etki ve havalandırma koşulu dışarıdan tahmin edilmez. Bölüm sahibi güvenli durum ile yaklaşma sınırını belirtir; operatör de platformun ve sepet içindeki ekibin üretici sınırları içinde kalacağını doğrular. Koşul izlenemiyor veya değişiyorsa sepet aşağı alınır. İşin kısa sürmesi, üretim takvimi ya da kişisel sıcaklık algısı teknik değerlendirmenin yerine geçmez. Daha uygun proses durumu gerekiyorsa görev o pencereye taşınır." },
            { soru: "Üretim sürerken çalışma hücresi açılabilir mi?", cevap: "Yalnız hücre platform zarfı, düşen cisim alanı, enerji etkisi, araç ve yük hareketi bakımından gerçek biçimde ayrılabiliyorsa komşu bölüm sürebilir. Hedefle ilgili proses ve enerji tesisin yetkili yöntemiyle güvenli duruma getirilir. Vinç, askılı yük, araç veya başka bakım faaliyeti hücreye girmez. Toz, ısı, titreşim ya da hareket komşu bölümden taşınıyorsa ayrım yeterli değildir. Bu durumda faaliyetlerden biri başka zamana alınır. Platformun sahada hazır bulunması bölüm izolasyonunun yerine geçmez." },
            { soru: "Yeni bir bakım hedefi mevcut izne eklenebilir mi?", cevap: "Yeni hedefin bölüm sahibi, enerji ilişkisi, toz ve ısı ortamı, dikey-yatay geometrisi, park yüzeyi, gerekli alet ve eş zamanlı faaliyet etkisi yeniden incelenir. Mevcut ekipman uygun ve izolasyon genişletilebilir durumdaysa yetkili kişiler iş kartını güncelleyebilir. Hedefin yakında bulunması veya küçük görünmesi otomatik kapsam oluşturmaz. Farklı makine sınıfı ya da yeni bölüm durumu gerekiyorsa ayrı plan açılır. Eski hücre güvenli biçimde kapatılmadan ve yeni teslim tamamlanmadan platform başka hedefe yöneltilmez." },
            { soru: "Teklif için hangi bilgileri paylaşmalıyız?", cevap: "Hedefin yakın ve çevresel görüntüleri, dikey mesafe, yatay engel, park yüzeyi, kapı, dönüş, üst tesisat ve ortam bilgisi gerekir. Toz ve ısı değerlendirmesini, etkilenebilecek enerji kaynaklarını, bölüm duruşunu, eş zamanlı işleri, çalışma izni yöntemini ve teknik kabul sahibini belirtin. Sepette bulunacak personel, alet ve küçük parçalar da yazılmalıdır. Belirli santral ya da ekipman varsayılmaz. Bilgi sınırdaysa yerinde inceleme yapılarak izin kapıları, izolasyon alanı ve platform sınıfı tesis sorumlularıyla kesinleştirilir." },
        ],
        kaynak: "Metin 13 Ağustos 2026 tarihinde Çan Termik Santral Bölgesi için özgün olarak yazıldı. Enerji sahasında toz, ısı ve izinli çalışma disiplini görev çapasıdır. Belirli santral, ünite, üretim kolu, kapasite, makine markası, sıcaklık, yükseklik veya başka sayısal saha verisi kullanılmamıştır; izin kapıları genel operasyon standardıdır.",
    },

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Çanakkale'de Gemi Bordası ve Tekne Dış Cephesi İçin Sepetli/Örümcek Platform",
        giris:
            "Tersanede inşa hâlindeki bir geminin bordasına kaynak dikişi kontrolü, pas önleyici astar veya son kat boya öncesi erişmek, kızaktaki küçük tekne bakımından farklı bir ölçek sorunu getirir: gövde çok daha yüksek ve uzundur, kaynak sırasını takip eden ekip aynı hatta günlerce ilerler, üstelik dok destekleri (payanda, takoz sırası) bordayla makine arasına dar bir şerit bırakır. Standart eklemli platformun geniş şasesi bu şeride çoğu zaman sığmaz; sepetli-örümcek sınıfın dar tekerlek izi ve kompakt gövdesi, destek sırasının arasından geçip bordanın istenen kotuna kadar ilerleyebilir. Bunun karşılığında bu sınıfın taşıma kapasitesi sınırlıdır, dolayısıyla kaynak ekipmanı ve boya tabancası gibi hafif yükler için uygundur; ağır kumlama ekipmanı taşınacaksa geniş şaseli bir alternatif konuşulur. Hangi kaynak bloğunun hangi sınıfla ilerleyeceği, dok yerleşimi ve destek aralığı görülerek keşifte netleştirilir; bu, gemi inşa hattında günlük ilerlemeyi doğrudan etkileyen bir karardır.",
        maddeler: [
            {
                baslik: "Dok destekleri arasında dar geçiş",
                metin:
                    "Kızakta veya dokta duran geminin bordasıyla zemin arasına yerleştirilen payanda ve takoz sırası, makinenin geçebileceği koridoru daraltır; bu koridor genellikle standart eklemli platformun şase genişliğinden dardır. Sepetli-örümcek sınıf, katlanmış hâlde bu koridordan girip destek sırasının arasında konumlanabilir. Destek aralığının ölçüsü keşifte alınır; ölçü sınırdaysa makine gövde genişliğine göre önceden test edilir.",
            },
            {
                baslik: "Kaynak sırasını takip eden kademeli ilerleme",
                metin:
                    "Borda kaynağı, tek bir noktada değil hat boyunca kademeli ilerler; platform da kaynak ekibiyle birlikte metre metre kayar. Sepetli-örümcek sınıfın hızlı ve hassas konumlanma kabiliyeti, sabit iskeleye göre bu kademeli ilerlemeyi belirgin şekilde hızlandırır — iskele her seferinde sökülüp taşınmaz, makine bir sonraki bloğa kendi kendine ilerler.",
            },
            {
                baslik: "Astar ve son kat boyada erişim kotu",
                metin:
                    "Pas önleyici astar ve son kat boya işleri, bordanın farklı yüksekliklerinde sürekli kot değişimi ister; sepetli sınıfın dikey ve yatay ayar hassasiyeti, boyacının aynı noktada uzun süre beklemeden yüzeyi kademeli işlemesini sağlar. Boyanın kuruma süresi ve rüzgâr yönü, hangi borda tarafının önce işleneceğini belirler; bu sıralama keşifte saha ekibiyle birlikte kurulur.",
            },
            {
                baslik: "Kompakt gövdenin kapasite sınırı",
                metin:
                    "Dar destek koridoruna uyan gövde, taşıma kapasitesinden ödün verir; kaynak makinesi ve boya tabancası gibi hafif ekipman bu sınıfa uygundur ama kumlama kompresörü gibi ağır ekipman taşınacaksa yetersiz kalır. Talep alırken hem koridor genişliğini hem taşınacak ekipmanın ağırlığını birlikte sorarız; koridor dar ama yük hafifse sepetli-örümcek doğru seçimdir.",
            },
            {
                baslik: "Deniz kenarı neminin mekanik aksama etkisi",
                metin:
                    "Dok ve kızak alanında konaklayan makineler, deniz kenarının tuzlu nemine ve kaynak sırasında ortaya çıkan metal tozuna maruz kalır; bu sınıfın dar tekerlek ve kısa dingil yapısı bu koşullardan kent içi geniş makinelere göre daha çabuk etkilenir. İade öncesi tuz durulaması ve dingil kontrolü standart prosedürümüzdür; hat üzerinde uzun süre kalan makinelerde bu kontrol sıklaştırılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Borda işi tipi ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, gemi bordası üzerindeki tipik iş kalemlerini ve makine seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Kısıtlayan unsur", "Uygun sınıf", "Planlama notu"],
                    satirlar: [
                        ["Kaynak dikişi kontrolü", "Destek koridoru genişliği", "Sepetli-örümcek", "Kademeli ilerleme"],
                        ["Astar/boya uygulaması", "Kot değişimi sıklığı", "Sepetli-örümcek", "Rüzgâr yönü takibi"],
                        ["Kumlama hazırlığı", "Ekipman ağırlığı", "Geniş şaseli eklemli", "Koridor genişletme"],
                        ["Alt borda erişimi", "Dok destek dizilimi", "Sepetli-örümcek", "Destek ölçümü"],
                        ["Üst güverte kenarı", "Erişim açısı", "Teleskopik/eklemli", "Zarf hesabı"],
                    ],
                },
            },
            {
                baslik: "Destek koridorunu keşifte doğru ölçmek",
                paragraflar: [
                    "Dok destekleri arasındaki geçiş santimetre hassasiyetiyle ölçülmeden makine gönderilmez; şase sığmazsa kaynak hattı üzerinde iş yeniden planlamayla kaybolur. Keşifte fotoğrafla birlikte en dar noktanın ölçüsü, zemin eğimi ve yakındaki sabit engeller (payanda ayağı, kablo tavası) not edilir.",
                    "Aynı gemi hattında tekrarlanan işlerde bu ölçü bir kez alınır; kaynak ekibi ilerledikçe destek dizilimi değişse de genel koridor mantığı korunur ve yeni blok için hızlı teyitle devam edilir.",
                ],
            },
            {
                baslik: "Kaynak ekibiyle eş zamanlı çalışma düzeni",
                paragraflar: [
                    "Kaynak hattı üzerinde platform, kaynakçı ekibinin ilerleme hızına göre konumlanır; iş sırası önceden kaynak ustabaşıyla paylaşılır ki makine bir sonraki bloğa geçerken kaynak ekibi beklemesin. Kıvılcım sıçraması olan bölümlerde makine ve sepet, kaynak koruma perdesinin dışında tutulur veya uygun mesafe bırakılır.",
                    "Boya uygulaması kaynaktan sonraki aşamada geldiği için iki ekip aynı bloğu aynı anda paylaşmaz; sıralama saha şefiyle günlük olarak teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dok destekleri arasından makineniz gerçekten geçebiliyor mu?",
                cevap:
                    "Çoğu dok yerleşiminde evet; sepetli-örümcek sınıfın dar tekerlek izi tam bu tür koridorlar için tasarlanmıştır. Kesin karar, gönderdiğiniz fotoğraf ve en dar noktanın ölçüsüyle verilir. Ölçü sınırdaysa iki seçeneği (dar sınıf ile daha uzun süren kademeli iş, geniş sınıf ile destek düzeninin geçici değiştirilmesi) yan yana koyup siz karar verirsiniz.",
            },
            {
                soru: "Kaynak hattı ilerledikçe makineyi her seferinde yeniden mi kuruyorsunuz?",
                cevap:
                    "Hayır, bu sınıfın avantajı tam olarak burada; sabit iskele gibi sökülüp taşınmaz, kendi tekerlekleriyle bir sonraki bloğa ilerler. Kaynak ekibinin günlük ilerleme hızını bilirsek, makinenin ne zaman bir sonraki konuma geçeceğini önceden planlarız ve kaynakçı ekibinin beklemesini önleriz.",
            },
            {
                soru: "Boya tabancası ve kaynak makinesi dışında ağırlık taşıyabilir mi?",
                cevap:
                    "Sınırlı ölçüde; bu sınıf hafif ekipman için tasarlanmıştır. Kumlama kompresörü gibi ağır ekipman taşınacaksa önce ölçüyü netleştirmemiz gerekir — dar gövde ile yüksek taşıma kapasitesi bir arada gelmez. Gerekirse destek koridorunun geçici genişletilip genişletilemeyeceğini birlikte değerlendiririz.",
            },
            {
                soru: "Kaynak kıvılcımı makineye zarar verir mi?",
                cevap:
                    "Doğrudan sıçrama riski varsa makineyi ve sepeti koruma perdesinin dışında tutuyoruz veya uygun mesafeyi koruyoruz; bu, kaynak ustabaşıyla günlük olarak teyit ettiğimiz bir konudur. Uzun süreli kaynak hattı işlerinde makinenin dış yüzeyi de düzenli kontrol edilir.",
            },
            {
                soru: "Makine dokta günlerce kalacak, deniz kenarı nemi zarar verir mi?",
                cevap:
                    "Bu sınıfın dar mekanik aksamı deniz kenarı nemine ve metal tozuna kent içi makinelerden daha hassastır; bu yüzden hat üzerinde uzun kalan makinelerde günlük görsel kontrol ve iade öncesi tuz durulaması standart prosedürümüzdür. Sizden istediğimiz tek katkı, mümkünse makinenin gece için rüzgâra kapalı bir noktaya çekilmesine izin vermenizdir.",
            },
            {
                soru: "Astar ve son kat boya için hangi sırayla çalışırsınız?",
                cevap:
                    "Sıralamayı rüzgâr yönü ve boyanın kuruma süresine göre kurarız; genelde rüzgâr altı taraf önce işlenir. Kaynak henüz bitmemiş bir bölümde boyaya başlamayız, iki ekibin sırası saha şefiyle günlük teyit edilir. Bordanın hangi tarafının önce hazır olacağını bilirseniz, iş planını buna göre önceden kurabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çanakkale'de tersane ve gemi inşa/bakım tesislerinin varlığı kamuya açık bilgidir; kaynak-boya sıralaması ve dok destek koridoru anlatımı genel gemi inşa pratiğine dayanır. Tesis adı, gemi tipi ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Çanakkale'de Tersane Sahasına Ekipman ve Malzeme Nakliyesi",
        giris:
            "Tersane sahasına yapılan teslimat, standart bir şantiye teslimatından iki noktada ayrılır: giriş genellikle tek bir kontrollü kapıdan geçer ve kapı içindeki yerleşim (kaynak atölyesi, çelik plaka deposu, boya kabini, kızak alanı) günlük değişebilir. Bu yüzden nakliye planı, sadece adresi değil kapı içindeki teslim noktasını da önceden netleştirmeyi gerektirir. Ekipmanımızı tersaneye götürürken hem makinenin kendisini hem beraberindeki aksesuarı (sepet aparatı, kablo, uzatma bomu) tek seferde teslim ederiz; sahada arızalı bir makinenin yerine ikame gönderildiğinde de aynı disiplin uygulanır — tersanede duran bir iş, bekleyen kaynak veya boya ekibi anlamına geldiği için teslim süresi kritik önemdedir. Bu sayfa, tersane sahasına yapılan teslimatların hangi adımlardan geçtiğini ve kapı kontrolünün nakliye süresine nasıl yansıdığını anlatır.",
        maddeler: [
            {
                baslik: "Kontrollü kapı ve giriş prosedürü",
                metin:
                    "Tersaneler genellikle tek bir ana kapıdan araç ve malzeme kabul eder; bu kapıda araç plakası, sürücü kimliği ve taşınan ekipmanın listesi kayda geçer. Teslimat saatini önceden bildirmek, kapıda beklemeyi kısaltır. Bazı tersanelerde ayrıca iş güvenliği oryantasyonu istenir; bu süre nakliye planına dahil edilir.",
            },
            {
                baslik: "Sahada değişken teslim noktası",
                metin:
                    "Kaynak atölyesi, çelik plaka deposu ve kızak alanı arasındaki iç yollar, o günkü iş yoğunluğuna göre değişebilir; bazı günler bir yol vinç veya malzeme aktarımı nedeniyle kapalı olabilir. Sevkiyat öncesi saha yetkilisiyle güncel teslim noktası teyit edilir; bu, aracın kapıda gereksiz beklemesini önler.",
            },
            {
                baslik: "Aksesuarların eksiksiz sevkiyatı",
                metin:
                    "Makinenin kendisi kadar sepet aparatı, uzatma bomu ve güç kablosu da işin gerçekleşmesi için gereklidir; eksik bir aksesuar, tersanedeki kaynak veya boya ekibinin beklemesine yol açar. Sevkiyat listesi araç yüklenmeden önce iki kez kontrol edilir ve teslim sırasında saha yetkilisiyle birlikte sayılır.",
            },
            {
                baslik: "Arıza durumunda hızlı ikame teslimatı",
                metin:
                    "Tersanede duran bir makine, kaynak veya boya hattının o bloğu için işin durması anlamına gelir; bu yüzden arızalı makine bildirildiğinde ikame makine öncelikli olarak yönlendirilir. İkame teslimatında da aynı giriş prosedürü uygulanır ama saha yetkilisiyle önceden koordine edilerek kapıda bekleme en aza indirilir.",
            },
            {
                baslik: "Denize yakın park ve indirme güvenliği",
                metin:
                    "Kızak ve dok alanına yakın teslim noktalarında zemin ıslak veya kaygan olabilir; indirme sırasında araç ve makine için düz, sağlam bir nokta seçilir. Rıhtım kenarına yakın teslimlerde ayrıca düşme riski değerlendirilir ve gerekirse teslim noktası birkaç metre içeri kaydırılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Teslimat adımları ve süre etkisi",
                paragraflar: [
                    "Aşağıdaki tablo, tersane teslimatının adımlarını ve her adımın süreye etkisini özetler.",
                ],
                tablo: {
                    basliklar: ["Adım", "Tipik süre etkisi", "Kısaltma yolu", "Sorumlu"],
                    satirlar: [
                        ["Kapı kaydı", "5-15 dk", "Önceden saat bildirimi", "Sürücü + kapı görevlisi"],
                        ["Oryantasyon (varsa)", "10-20 dk", "Önceki oryantasyonun geçerliliği", "Tersane İSG"],
                        ["Teslim noktasına ilerleme", "Değişken", "Güncel yol teyidi", "Saha yetkilisi"],
                        ["Aksesuar sayımı", "5-10 dk", "Önceden hazırlanmış liste", "Sürücü + saha ekibi"],
                        ["İndirme ve konumlama", "10-20 dk", "Uygun zemin seçimi", "Operatör"],
                    ],
                },
            },
            {
                baslik: "Kapı kaydının nakliye planına etkisi",
                paragraflar: [
                    "Kapıda araç ve ekipman kaydı, tersanenin kendi güvenlik prosedürüne bağlıdır ve bu süre önceden bilinmezse teslimat saatinde sapma olur. Düzenli çalıştığımız tersanelerde giriş prosedürü kayıtlıdır ve yeni sevkiyatta bu bilgi doğrudan kullanılır.",
                    "İlk kez teslimat yapılan bir tersanede, kapı prosedürünü önceden telefonla teyit ederek sürprizi önlüyoruz; bu, özellikle acil ikame teslimatlarında zaman kazandırır.",
                ],
            },
            {
                baslik: "Acil ikame teslimatında öncelik sırası",
                paragraflar: [
                    "Tersanede bir makinenin arızalanması, o bloktaki kaynak veya boya işinin durması demektir; bu yüzden arıza bildirimi geldiğinde ikame makine, o anki sevkiyat programımızda öncelik kazanır. Hangi makinenin en yakın konumda olduğu belirlenir ve saha yetkilisiyle kapı prosedürü kısaltılarak koordine edilir.",
                    "Arızanın türünü ve makinenin son konumunu ilk çağrıda net verirseniz, ikame kararını daha hızlı veririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tersane kapısında sürücünüz için ayrıca belge mi hazırlamamız gerekiyor?",
                cevap:
                    "Genellikle sürücünün kimliği ve araç plakası, kapı kaydı için yeterlidir; tersanenizin ek bir oryantasyon veya form istediği durumlarda bunu önceden bildirirseniz sürücümüzü buna göre hazırlarız. Bu bilgiyi ilk sevkiyattan önce teyit etmek, kapıda beklemeyi büyük ölçüde azaltır.",
            },
            {
                soru: "Sahadaki teslim noktası her gün değişebiliyor mu?",
                cevap:
                    "Evet, özellikle kaynak veya vinç faaliyeti yoğun günlerde iç yollar geçici kapanabilir. Bu yüzden sevkiyat öncesi saha yetkilisiyle güncel teslim noktasını teyit ediyoruz; bu adım atlanırsa araç kapıda gereksiz bekleyebilir.",
            },
            {
                soru: "Makine arızalanırsa ikame ne kadar sürede gelir?",
                cevap:
                    "Süre, o anki sevkiyat programımıza ve en yakın uygun makinenin konumuna bağlıdır; tersanede duran bir işin öncelik taşıdığını biliyoruz, bu yüzden ikame talepleri programda öne alınır. Arızanın türünü ve makinenin son konumunu ilk çağrıda net verirseniz, size net bir süre söyleyebiliriz.",
            },
            {
                soru: "Sepet aparatı veya kablo eksik gelirse ne oluyor?",
                cevap:
                    "Bu, sevkiyat listesinin araç yüklenmeden önce iki kez kontrol edilmesiyle önlenmeye çalışılan bir durumdur; yine de eksik tespit edilirse en yakın depomuzdan tamamlayıcı parça hızlıca gönderilir. Teslim sırasında saha yetkilisiyle birlikte sayım yapmamız, eksikliğin sahada değil kapıda fark edilmesini sağlar.",
            },
            {
                soru: "Rıhtım kenarına yakın bir noktaya teslimat yapabiliyor musunuz?",
                cevap:
                    "Yapabiliriz, ancak zemin ıslak veya kaygan olabileceğinden indirme noktası için düz ve sağlam bir yer seçilir; düşme riski varsa teslim noktasını birkaç metre içeri kaydırmayı öneririz. Bu değerlendirmeyi operatörümüz sahada, saha yetkilisiyle birlikte yapar.",
            },
            {
                soru: "İlk kez çalışacağımız için tersanenin giriş prosedürünü bilmiyoruz, ne yapmalıyız?",
                cevap:
                    "Sizinle birlikte tersane yönetimini arayıp giriş prosedürünü önceden teyit ediyoruz; bu, ilk sevkiyatta sürpriz yaşanmasını önler. Düzenli çalıştığımız tersanelerde bu bilgi zaten kayıtlıdır, yeni bir tersanede ise bu adımı sevkiyat tarihinden birkaç gün önce tamamlamayı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersane sahalarının kontrollü kapı ve iç yol yapısı genel tesis işletmeciliği bilgisidir; tesis adı ve rakam kullanılmamıştır. Sevkiyat ve ikame önceliklendirme yaklaşımı firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Çanakkale'de Gemi Parça Deposunda Forklift ve İstifleme Kiralama",
        giris:
            "Tersanenin çelik plaka, boru, profil ve valf gibi parçalarını barındıran depo, standart bir sanayi deposundan farklı bir istifleme mantığı gerektirir: plakalar ağır ve uzun olduğu için raf yerine genellikle zemine yatık ve numaralı sıralarla istiflenir, borular çapına göre ayrı bölümlerde tutulur, küçük valf ve bağlantı elemanları ise kaynak hattına yakın seyyar sehpalarda bekler. Forklift burada hem plaka istifleme hem de kaynak hattına parça besleme rolünü üstlenir; bir plaka sırasından belirli bir parçayı çekip kaynak istasyonuna taşımak, deponun günlük en sık tekrarlanan işlemidir. Bu depoların bir diğer özelliği, gemi inşa takvimine göre içeriğinin hızla değişmesidir — bir hafta önce dolu olan bir sıra, bloğun kaynağa gitmesiyle boşalır ve yeni malzeme gelir. Bu değişkenlik, forklift kiralamasında sabit bir düzenden çok esnek bir çalışma temposu gerektirir.",
        maddeler: [
            {
                baslik: "Ağır çelik plaka istifleme",
                metin:
                    "Çelik plakalar, ağırlıkları ve düz yüzeyleri nedeniyle raf yerine zemine yatık sıralar hâlinde istiflenir; forklift bu sıraları oluştururken hem plakanın ağırlığına uygun kapasiteye hem de zemin dengesine dikkat eder. Sıra numaralaması, hangi plakanın hangi gemi bloğuna ayrıldığını gösterir ve forklift operatörü bu numaralamayı takip ederek karışıklığı önler.",
            },
            {
                baslik: "Boru ve profil bölümünde çap bazlı ayrım",
                metin:
                    "Farklı çaplardaki borular ve profiller, karışmaması için ayrı bölümlerde tutulur; forklift ataşmanı (boru sepeti veya çatal genişliği) bu bölümdeki malzemenin şekline göre değişebilir. Uzun boru ve profillerin taşınmasında dönüş yarıçapı önem kazanır, bu yüzden depo içi yollar bu tür malzemeye göre önceden planlanır.",
            },
            {
                baslik: "Kaynak hattına parça besleme",
                metin:
                    "Kaynak istasyonları, günlük iş programına göre belirli parçaları depodan talep eder; forklift bu talebi karşılamak için depo ile kaynak hattı arasında sürekli mekik dokur. İstasyonun beklemesini önlemek için, günün hangi saatinde hangi parçaların talep edileceği mümkünse önceden bilinir ve buna göre öncelik sırası kurulur.",
            },
            {
                baslik: "Gemi inşa takvimine göre değişen doluluk",
                metin:
                    "Bir blok kaynağa gittiğinde o bloğa ayrılan malzeme sırası boşalır ve yeni gelen malzeme için yer açılır; bu değişkenlik, deponun sabit bir raf düzeninden çok esnek bir alan yönetimi gerektirdiği anlamına gelir. Forklift operatörü, hangi sıranın yakında boşalacağını saha şefinden alarak yeni malzeme gelişini buna göre planlar.",
            },
            {
                baslik: "Küçük parça ve valf sehpalarında hassas taşıma",
                metin:
                    "Valf ve bağlantı elemanları gibi küçük ama kırılgan parçalar, kaynak hattına yakın seyyar sehpalarda tutulur; bu sehpaların taşınması forklift ile yapılırken standart çatal yerine daha hassas bir konumlandırma ve düşük hız tercih edilir. Sehpa üzerindeki parçaların düşme riski, taşıma öncesi görsel kontrolle azaltılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo bölümü ve forklift ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, gemi parça deposundaki bölümlere göre forklift kullanımını özetler.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Malzeme tipi", "Taşıma zorluğu", "Ataşman notu"],
                    satirlar: [
                        ["Plaka sırası", "Ağır çelik plaka", "Ağırlık + zemin dengesi", "Standart çatal, yüksek kapasite"],
                        ["Boru/profil bölümü", "Uzun silindirik/profil", "Dönüş yarıçapı", "Boru sepeti"],
                        ["Kaynak hattı besleme", "Karma parça", "Zaman baskısı", "Hızlı mekik"],
                        ["Valf/küçük parça sehpası", "Kırılgan küçük parça", "Düşme riski", "Düşük hız, hassas konumlama"],
                        ["Boşalan/yeni gelen sıra", "Değişken", "Alan planlama", "Günlük saha şefi koordinasyonu"],
                    ],
                },
            },
            {
                baslik: "Sıra numaralamasının karışıklığı önlemesi",
                paragraflar: [
                    "Her plaka veya profil sırası, hangi gemi bloğuna ayrıldığını gösteren bir numarayla işaretlenir; forklift operatörü bu numaralamayı takip ederek yanlış parçanın kaynak hattına gitmesini önler. Numaralama sistemi tersanenin kendi düzenidir, biz operatörümüzü bu düzene göre bilgilendiririz.",
                    "Yeni bir depo düzeninde çalışmaya başlarken ilk gün numaralama sistemi saha şefiyle birlikte gözden geçirilir; bu, sonraki günlerdeki hataları önemli ölçüde azaltır.",
                ],
            },
            {
                baslik: "Kaynak hattının beklemesini önlemek",
                paragraflar: [
                    "Kaynak istasyonunun malzeme beklemesi, doğrudan üretim kaybı demektir; bu yüzden forklift operatörü günün iş programını mümkün olduğunca önceden bilir ve hangi parçanın ne zaman isteneceğini tahmin ederek harekete geçer. Beklenmedik bir talep geldiğinde de öncelik sırası hızlı değiştirilebilir.",
                    "Yoğun kaynak günlerinde birden fazla istasyon aynı anda parça talep edebilir; bu durumda hangi istasyonun daha kritik olduğu saha şefiyle anlık koordine edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ağır çelik plakaları istiflerken zemin dayanımını nasıl kontrol ediyorsunuz?",
                cevap:
                    "Plaka sırası oluşturulmadan önce zeminin düz ve sağlam olduğu görsel olarak kontrol edilir; forklift kapasitesi de taşınacak plaka ağırlığına göre seçilir. Zeminde çökme veya eğim şüphesi varsa sıra başka bir noktaya kaydırılır. Bu kontrol, özellikle yeni bir depo alanında çalışmaya başlarken standart adımımızdır.",
            },
            {
                soru: "Kaynak hattı aynı anda birkaç parça isterse ne yapıyorsunuz?",
                cevap:
                    "Öncelik sırasını saha şefiyle anlık koordine ederek belirliyoruz; hangi istasyonun beklemesi üretimi daha çok etkiliyorsa o öncelik kazanır. Yoğun günlerde ikinci bir forklift talebi de değerlendirilebilir, bu durumu önceden bildirirseniz programımıza ekleriz.",
            },
            {
                soru: "Boru ve profilleri taşırken standart çatal yeterli mi?",
                cevap:
                    "Genellikle boru sepeti gibi bir ataşman tercih ederiz çünkü standart çatal uzun silindirik malzemede kayma riski taşır. Malzemenin çapını ve uzunluğunu önceden bilirsek doğru ataşmanla makineyi hazırlarız; sahada ataşman değişikliği gerekirse ek süre gerekebilir.",
            },
            {
                soru: "Bir blok kaynağa gidince boşalan sırayı hemen kullanabiliyor musunuz?",
                cevap:
                    "Evet, bu bizim için deponun günlük rutinidir; saha şefinden hangi sıranın boşalacağını öğrenip yeni malzeme gelişini buna göre planlarız. Bu koordinasyon önceden kurulmazsa yeni malzeme geçici olarak depo dışında bekletilebilir, bu yüzden günlük bilgi akışını önemsiyoruz.",
            },
            {
                soru: "Valf ve küçük parçalar forkliftle taşınırken zarar görme riski var mı?",
                cevap:
                    "Standart çatal hızıyla taşınırsa evet, bu yüzden bu tür sehpalarda düşük hız ve hassas konumlama uyguluyoruz; taşıma öncesi sehpa üzerindeki parçaların sabitliği görsel olarak kontrol edilir. Özellikle kırılgan veya hassas yüzeyli parçalarda bu kontrolü atlamıyoruz.",
            },
            {
                soru: "Operatörünüz depo numaralama sistemimizi nasıl öğreniyor?",
                cevap:
                    "Çalışmaya başladığımız ilk gün saha şefinizle birlikte numaralama sistemini gözden geçiriyoruz; bu, hangi parçanın hangi gemi bloğuna ait olduğunu operatörümüzün doğru takip etmesini sağlar. Düzenli çalıştığımız tersanelerde bu bilgi operatör ekibimizde zaten kayıtlıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gemi inşa tersanelerinde çelik plaka/boru/parça deposu işleyişi genel tersane pratiğine dayanan bilgidir; tesis adı ve rakam kullanılmamıştır. İstifleme ve önceliklendirme yaklaşımı firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Çanakkale'de Tersane Vinç ve Çelik Konstrüksiyon Montajında Eklemli Platform",
        giris:
            "Tersanede bir portal vinç kirişinin veya kızak üstü çelik konstrüksiyonun montajı, hem yüksekte hem sabit tesisatın arkasında kalan noktalara erişim gerektirir; kaynakçının vinç raylı kirişin alt yüzeyine ulaşması, montaj ekibinin cıvata sıkma kontrolünü kiriş üzerinden yapması gibi işler, sabit iskeleyle günler süren bir kurulum gerektirirken eklemli platformla saatler içinde tamamlanabilir. Bu sınıfın asıl avantajı, bom açısının hem yukarı hem yana doğru çalışma zarfı sunması — vinç kirişinin altına yandan yaklaşıp sepeti yukarı doğru açarak kirişin alt yüzeyine ulaşmak, düz bir eklemli bomla mümkündür ama makasli bir platformla mümkün değildir. Montaj sahasında birden fazla ekibin (kaynak, elektrik, mekanik) aynı anda çalıştığı günlerde, platformun hangi noktada ne kadar süre kalacağı diğer ekiplerin çalışma alanını doğrudan etkiler; bu yüzden bom kiralaması, montaj programıyla birlikte planlanır.",
        maddeler: [
            {
                baslik: "Vinç kirişi alt yüzeyine yandan erişim",
                metin:
                    "Portal vinç kirişinin alt yüzeyi, doğrudan altından değil genellikle yandan bir açıyla erişilebilir hâldedir; kirişin altında kalan raylı taşıyıcı sistem düz bir dikey erişimi engeller. Eklemli bomun açılı çalışma zarfı, sepeti yandan sokup kirişin altına doğru açarak bu erişimi sağlar. Kirişin tam konumu ve raylı sistemin engel oluşturduğu noktalar keşifte fotoğrafla belirlenir.",
            },
            {
                baslik: "Cıvata ve kaynak kontrolünde sabit duruş",
                metin:
                    "Montaj sonrası cıvata sıkma torku kontrolü ve kaynak dikişi muayenesi, sepetin belirli bir noktada uzun süre sabit durmasını gerektirir; eklemli platformun sepet stabilitesi bu tür işlerde makasliye göre daha esnek konumlanma imkânı sunar çünkü sepet açı değiştirerek kontrol noktasına daha rahat hizalanır.",
            },
            {
                baslik: "Çoklu ekip programında zaman paylaşımı",
                metin:
                    "Montaj sahasında kaynak, elektrik ve mekanik ekipleri aynı gün farklı noktalarda çalışabilir; platformun hangi saatte hangi bölgede olacağı, diğer ekiplerin kendi işlerini planlamasını doğrudan etkiler. Bu yüzden bom kiralaması öncesi montaj şefiyle günlük program paylaşılır ve platform bu programa göre bölgeler arasında yönlendirilir.",
            },
            {
                baslik: "Kızak üstü çelik konstrüksiyonda zemin sınırı",
                metin:
                    "Kızak üstündeki çelik konstrüksiyon montajı sırasında zemin genellikle geçici platform veya iskele döşemesidir; bu zeminin taşıma kapasitesi standart beton zeminden farklıdır. Makine yerleşimi öncesi zeminin taşıma kapasitesi montaj şefinden teyit edilir; gerekirse makine daha uzak bir sabit noktadan bom açısıyla çalışır.",
            },
            {
                baslik: "Rüzgârlı günlerde bom açısı kısıtı",
                metin:
                    "Tersane sahası açık deniz kenarında olduğu için rüzgâr, özellikle uzatılmış bom açılarında sepet stabilitesini etkiler; rüzgâr hızı belirli bir eşiği geçtiğinde bom açısı sınırlandırılır veya iş ertelenir. Bu karar operatörün sahadaki anlık değerlendirmesine bağlıdır ve montaj programına önceden bir esneklik payı olarak eklenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj işi ve bom sınıfı eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, tersane vinç ve çelik konstrüksiyon montajındaki tipik işleri özetler.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Erişim yönü", "Zemin", "Makine notu"],
                    satirlar: [
                        ["Vinç kirişi alt yüzeyi", "Yandan açılı", "Sabit beton", "Eklemli bom"],
                        ["Cıvata/kaynak kontrolü", "Sabit nokta", "Değişken", "Esnek sepet hizalama"],
                        ["Kızak üstü konstrüksiyon", "Yukarı + yana", "Geçici döşeme", "Zemin taşıma teyidi"],
                        ["Elektrik/kablo tavası montajı", "Yatay hat boyunca", "Sabit", "Kademeli ilerleme"],
                        ["Rüzgârlı gün üst kat işi", "Sınırlı açı", "Açık saha", "Rüzgâr eşiği kontrolü"],
                    ],
                },
            },
            {
                baslik: "Montaj şefiyle günlük program paylaşımı",
                paragraflar: [
                    "Çoklu ekip çalışan bir montaj sahasında platformun programı, o günkü öncelikli işe göre şekillenir; sabah montaj şefiyle kısa bir koordinasyonla hangi bölgeye önce gidileceği netleşir. Bu koordinasyon atlanırsa platform boşta bekleyebilir veya iki ekip aynı bölgeyi aynı anda talep edebilir.",
                    "Düzenli çalıştığımız tersanelerde bu koordinasyon zamanla rutine döner ve günlük planlama süresi kısalır.",
                ],
            },
            {
                baslik: "Geçici zeminde makine yerleşimi",
                paragraflar: [
                    "Kızak üstü çelik konstrüksiyon montajında zemin çoğu zaman kalıcı beton değil geçici bir platform veya iskele döşemesidir; bu zeminin taşıma kapasitesi montaj şefinden teyit edilmeden makine yerleştirilmez. Kapasite yetersizse makine daha uzak bir sabit noktadan bom açısıyla çalışır, bu da erişim mesafesini kısıtlayabilir.",
                    "Zemin belirsizse önce görsel keşif yapılır ve gerekirse montaj ekibiyle birlikte alternatif bir konumlama noktası belirlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Vinç kirişinin altına gerçekten yandan mı erişiyorsunuz, üstten değil mi?",
                cevap:
                    "Genellikle yandan; kirişin altındaki raylı taşıyıcı sistem düz bir dikey erişimi engellediği için eklemli bomun açılı çalışma zarfını kullanıp sepeti yandan sokarak kirişin altına doğru açıyoruz. Kirişin tam konumunu ve raylı sistemin engel oluşturduğu noktaları keşifte fotoğrafla netleştiriyoruz.",
            },
            {
                soru: "Aynı gün başka ekipler de sahada çalışıyor, platform onların işini etkiler mi?",
                cevap:
                    "Etkilememesi için sabah montaj şefiyle kısa bir koordinasyon yapıyoruz ve platformun hangi bölgeye önce gideceğini netleştiriyoruz. Bu adım atlanırsa iki ekip aynı bölgeyi aynı anda isteyebilir; düzenli çalıştığımız sahalarda bu koordinasyon zamanla rutine dönüyor.",
            },
            {
                soru: "Kızak üstündeki geçici döşemede makineniz güvenle durabiliyor mu?",
                cevap:
                    "Döşemenin taşıma kapasitesini montaj şefinden teyit etmeden makineyi yerleştirmiyoruz; kapasite yetersizse daha uzak bir sabit noktadan bom açısıyla çalışıyoruz. Bu, erişim mesafesini kısıtlayabilir ama güvenlik açısından pazarlık konusu değildir.",
            },
            {
                soru: "Rüzgârlı günlerde iş tamamen durur mu?",
                cevap:
                    "Her zaman değil; rüzgâr hızı belirli bir eşiği geçtiğinde bom açısı sınırlandırılır, tamamen durdurmak son çaredir. Bu karar operatörün sahadaki anlık değerlendirmesine bağlıdır. Montaj programına önceden esneklik payı eklemenizi öneririz çünkü kıyı şeridinde rüzgâr günden güne değişebilir.",
            },
            {
                soru: "Cıvata torku kontrolü için sepetin uzun süre sabit durması gerekiyor, bu mümkün mü?",
                cevap:
                    "Mümkün; eklemli platformun açı esnekliği, sepeti kontrol noktasına rahatça hizalayıp orada sabit tutmayı kolaylaştırır. Kontrol süresi uzunsa bunu önceden bildirirseniz, o bölgedeki diğer işleri bu süreye göre programlarız.",
            },
            {
                soru: "Kablo tavası montajı gibi yatay hat işlerinde nasıl ilerliyorsunuz?",
                cevap:
                    "Hat boyunca kademeli ilerleyerek çalışıyoruz; her segment tamamlandığında makine bir sonraki noktaya kayar. Bu, sabit iskeleye göre çok daha hızlı bir yöntemdir çünkü iskele her seferinde sökülüp yeniden kurulmaz. Hattın toplam uzunluğunu bilirsek, günlük ilerleme hızını önceden tahmin edebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersanelerde vinç kirişi ve çelik konstrüksiyon montajı genel gemi inşa/ağır sanayi pratiğidir; tesis adı ve rakam kullanılmamıştır. Program koordinasyonu ve zemin teyidi yaklaşımı firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Çanakkale'de Tersane Kapalı Kaynak Atölyesi ve Depo İçi Platform Kiralama",
        giris:
            "Tersanenin kapalı kaynak-kesim atölyesi, açık kızak sahasından farklı bir erişim ortamı sunar: tavan vinç rayı, aydınlatma armatürü ve havalandırma menfezi gibi hedefler atölyenin üst kotunda sabit dururken, zemin genellikle düz betondur ve rüzgâr etkisi yoktur — bu da akülü, egzozsuz makaslı platformu birçok işte doğal seçim yapar. Atölye içindeki asıl kısıt yükseklik değil, kaynak dumanı ve metal tozudur; uzun süreli iç mekan çalışmalarında makinenin elektronik aksamı ve filtre sistemi bu ortamdan etkilenebilir. Ayrıca atölye, üretim durmadan çalıştığı için platform, kesim tezgahı ve kaynak istasyonlarının arasında dar ama düzenli koridorlarda hareket eder; bu koridorların günlük malzeme akışına göre değişebileceği unutulmamalıdır. Bu sayfa, tersanenin kapalı atölye ve depo alanlarında platformun nasıl kullanıldığını anlatır.",
        maddeler: [
            {
                baslik: "Tavan vinç rayı ve üst kot tesisat bakımı",
                metin:
                    "Atölye tavanındaki vinç rayı, aydınlatma hattı ve havalandırma kanalı, düzenli bakım gerektiren sabit tesisattır; bu hedeflere düz beton zeminde makaslı platformla hızlı ve güvenli erişim sağlanır. Vinç rayının bakımı sırasında rayın o an kullanımda olup olmadığı üretim programından teyit edilir, çünkü aynı anda vinç hareketiyle platform çalışması aynı hatta örtüşmemelidir.",
            },
            {
                baslik: "Kaynak dumanı ve metal tozunun makineye etkisi",
                metin:
                    "Kesim ve kaynak istasyonlarının yoğun olduğu atölyelerde havada asılı metal tozu ve kaynak dumanı, makinenin filtre ve elektronik aksamını normalden hızlı yorar; uzun süreli iç mekan kiralamalarında filtre kontrolü sıklaştırılır. Atölyenin kendi havalandırma sistemi çalışıyorsa bu etki azalır, çalışmıyorsa makine bakım aralığı buna göre kısaltılır.",
            },
            {
                baslik: "Üretim durmadan koridor içi hareket",
                metin:
                    "Atölye üretimi genellikle durmaz; platform, kesim tezgahları ve kaynak istasyonları arasındaki koridorlarda hareket ederken malzeme akışını kesmemeye dikkat eder. Koridor genişliği ve o günkü malzeme yerleşimi günlük değişebileceği için, sabah vardiyasında saha şefiyle güncel yerleşim kısaca teyit edilir.",
            },
            {
                baslik: "Kompakt makaslı ile dar geçiş",
                metin:
                    "Atölye içindeki kapı genişlikleri ve tezgahlar arası mesafe, standart bir makaslı platformun geçişini sınırlayabilir; bu durumda dar gövdeli kompakt makaslı sınıf tercih edilir. Kapı ölçüsü ve tezgah aralığı keşifte fotoğrafla netleştirilir, özellikle çift kanatlı olmayan tek kapılardan geçişte bu ölçü belirleyicidir.",
            },
            {
                baslik: "Aydınlatma ve havalandırma menfezi değişimi",
                metin:
                    "Atölye tavanındaki aydınlatma armatürleri ve havalandırma menfezleri, düzenli değişim gerektiren parçalardır; bu işler genellikle üretim programının en az yoğun olduğu saatlere (vardiya arası veya mesai sonu) planlanır. Değişim listesi önceden hazırlanırsa, tek bir platform kiralamasıyla birden fazla nokta aynı seferde tamamlanabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atölye içi iş tipi ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, kapalı kaynak atölyesi ve depo içindeki tipik iş kalemlerini özetler.",
                ],
                tablo: {
                    basliklar: ["Hedef", "Ortam etkeni", "Uygun sınıf", "Bakım notu"],
                    satirlar: [
                        ["Tavan vinç rayı", "Vinç kullanım programı", "Makaslı (akülü)", "Ray boşta iken çalışma"],
                        ["Aydınlatma armatürü", "Düşük yoğunluk saatleri", "Kompakt makaslı", "Vardiya arası planlama"],
                        ["Havalandırma menfezi", "Metal tozu birikimi", "Makaslı (akülü)", "Filtre kontrolü sık"],
                        ["Dar kapı/tezgah arası", "Geçiş genişliği", "Kompakt dar gövde", "Ölçü teyidi"],
                        ["Kaynak istasyonu yakını", "Duman/kıvılcım", "Kıvılcımsız elektrikli", "Mesafe kontrolü"],
                    ],
                },
            },
            {
                baslik: "Üretim programıyla eş zamanlı çalışma",
                paragraflar: [
                    "Atölye üretimi durmadığı için platform çalışması, üretim programının en az yoğun olduğu dilimlere yerleştirilir; bu dilim genellikle vardiya arası veya mesai sonudur. Sabah vardiyasında saha şefiyle kısa bir koordinasyonla o günün en uygun çalışma penceresi belirlenir.",
                    "Tavan vinç rayı bakımı gibi işlerde, rayın o an kullanımda olup olmadığı ayrıca teyit edilir; ray meşgulken platform o hatta çalışmaz.",
                ],
            },
            {
                baslik: "Toz ve duman yoğun ortamda bakım sıklığı",
                paragraflar: [
                    "Kesim ve kaynak istasyonlarının yoğun olduğu atölyelerde makinenin filtre ve elektronik aksamı normalden hızlı yorulur; uzun süreli kiralamalarda bu bakım sıklığı standart iç mekan kiralamasına göre artırılır. Atölyenin kendi havalandırma sistemi çalışıyorsa bu etki azalır.",
                    "İade öncesi makine, metal tozu birikimi açısından kontrol edilir ve gerekirse ek temizlik uygulanır; bu, hem makinenin ömrünü korur hem sonraki kiralamada sorun çıkmasını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tavan vinç rayının bakımını yaparken vinç kullanımda olursa ne oluyor?",
                cevap:
                    "Ray meşgulken o hatta çalışmıyoruz; bakım öncesi rayın o an kullanımda olup olmadığını üretim programından teyit ediyoruz. Rayın boşta olduğu bir dilim belirlenip iş buna göre planlanır. Vinç kullanım programınızı önceden paylaşırsanız, en uygun pencereyi birlikte buluruz.",
            },
            {
                soru: "Kaynak dumanı ve metal tozu makinemize zarar verir mi?",
                cevap:
                    "Uzun vadede filtre ve elektronik aksamı normalden hızlı yorabilir, bu yüzden bu tür ortamlarda çalışan makinelerde filtre kontrolünü sıklaştırıyoruz. Atölyenizin havalandırma sistemi çalışıyorsa etki azalır; çalışmıyorsa bunu bize bildirin, bakım aralığını buna göre kısaltırız.",
            },
            {
                soru: "Atölyedeki dar kapılardan makine geçebiliyor mu?",
                cevap:
                    "Standart makaslı geçemeyebilir, bu durumda dar gövdeli kompakt sınıfı öneririz. Kapı genişliğini ve tezgahlar arası mesafeyi keşifte fotoğrafla netleştiririz; ölçü sınırdaysa sahaya gelmeden doğru sınıfı belirleyebiliriz.",
            },
            {
                soru: "Üretim durmadan atölyede çalışabiliyor musunuz?",
                cevap:
                    "Evet, çoğu zaman üretim programının en az yoğun olduğu dilime (vardiya arası, mesai sonu) yerleşerek çalışırız. Sabah vardiyasında saha şefinizle kısa bir koordinasyon yaparak o günün en uygun penceresini belirleriz; bu koordinasyon atlanırsa malzeme akışıyla çakışma riski artar.",
            },
            {
                soru: "Birden fazla aydınlatma armatürünü tek seferde değiştirebilir misiniz?",
                cevap:
                    "Evet, değişim listesini önceden hazırlarsanız tek bir platform kiralamasıyla birden fazla noktayı aynı seferde tamamlarız; bu, ayrı ayrı çağrı yapmaya göre hem daha ekonomik hem daha az kesinti anlamına gelir. Listeyi keşif sırasında veya öncesinde bize iletmeniz yeterlidir.",
            },
            {
                soru: "Kaynak istasyonuna çok yakın çalışmamız gerekiyor, güvenli mi?",
                cevap:
                    "Kıvılcım riski varsa kıvılcımsız elektrikli ekipman kullanıyoruz ve uygun mesafeyi koruyoruz; bu, kapalı atölyelerde standart uygulamamızdır. Kaynak istasyonunun o sırada aktif olup olmadığını saha ekibinizle teyit ederek çalışma sırasını buna göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersane kapalı kaynak-kesim atölyelerinin genel işleyişi (tavan vinç, toz/duman ortamı) sektörel bilgidir; tesis adı ve rakam kullanılmamıştır. Bakım sıklığı ve koordinasyon yaklaşımı firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çanakkale'de Tersane Kızak Rayı ve Vinç Kulesi Çelik Konstrüksiyon Montajı",
        giris:
            "Tersanenin çelik konstrüksiyon montaj işleri, sanayi holündeki standart çatı-cephe montajından farklı iki unsur taşır: kızak rayı gibi bazı yapılar zeminle iç içe ve gemi ağırlığını taşıyan kritik bir sistemdir, vinç kulesi gibi diğerleri ise açık deniz kenarında yüksek rüzgâr yüküne maruz kalır. Platform bu montajlarda çelik elemanı taşımaz — taşıma vinçle yapılır — ama elemanın kaynaklanması, cıvatalanması ve kontrolü için erişim sağlar; bu ayrım, iş güvenliği ve iş bölümü açısından baştan netleştirilir. Vinç kulesi gibi yüksek yapılarda platform, kule iskeleti tamamlanana kadar aşamalı olarak farklı kotlarda çalışır; kızak rayı gibi zemine yakın ama uzun hatlı yapılarda ise platform, yatay hat boyunca kademeli ilerler. Bu sayfa, tersanedeki çelik konstrüksiyon montaj işlerinde platformun rolünü ve sınırlarını anlatır.",
        maddeler: [
            {
                baslik: "Kızak rayı montajında yatay hat ilerlemesi",
                metin:
                    "Kızak rayı, gemiyi taşıyan arabaların üzerinde hareket ettiği uzun ve düz bir çelik hattır; montaj ve kaynak kontrolü bu hat boyunca metre metre ilerler. Platform, ray hattı boyunca kademeli olarak konumlanır ve her segment tamamlandığında bir sonrakine geçer; rayın gemi ağırlığını taşıyacak kritik bir sistem olması nedeniyle kaynak kalitesi kontrolü özellikle titizdir.",
            },
            {
                baslik: "Vinç kulesi montajında kademeli kot artışı",
                metin:
                    "Vinç kulesi gibi yüksek çelik yapılar, iskelet aşağıdan yukarıya tamamlandıkça platform da aynı sırayla farklı kotlarda çalışır; bir kat tamamlanmadan üst kata geçilmez. Bu aşamalı çalışma, montaj programıyla birlikte planlanır ve platform kule iskeletinin o anki durumuna göre erişim noktası değiştirir.",
            },
            {
                baslik: "Deniz kenarı rüzgâr yükünün etkisi",
                metin:
                    "Vinç kulesi gibi yüksek yapılarda çalışma, açık deniz kenarının rüzgâr etkisine doğrudan maruz kalır; belirli bir rüzgâr hızının üzerinde yüksek kotlardaki iş sınırlandırılır veya ertelenir. Bu karar operatörün sahadaki anlık değerlendirmesine bağlıdır ve montaj programına önceden esneklik payı olarak eklenir.",
            },
            {
                baslik: "Taşıma ile erişimin iş bölümü",
                metin:
                    "Çelik elemanın kaldırılması ve konumlanması vinçle yapılır; platform yalnızca elemanın kaynaklanması, cıvatalanması veya kontrolü için erişim sağlar. Bu iş bölümü, sahada aynı anda çalışan vinç ve platform ekiplerinin birbirine karışmaması için baştan netleştirilir; vinç hareket hâlindeyken platform o bölgede beklemeye alınır.",
            },
            {
                baslik: "Kaynak kalite kontrolünde sabit duruş süresi",
                metin:
                    "Kritik taşıyıcı sistemlerde (kızak rayı, vinç kulesi bağlantı noktaları) kaynak kalite kontrolü, sepetin belirli bir noktada uzun süre sabit durmasını gerektirebilir; bu süre önceden bilinirse, platformun o bölgede ne kadar kalacağı montaj programına dahil edilir ve diğer ekiplerin beklemesi önlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çelik konstrüksiyon tipi ve montaj erişimi",
                paragraflar: [
                    "Aşağıdaki tablo, tersanedeki çelik konstrüksiyon montaj işlerinin erişim özelliklerini özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı", "Erişim tipi", "Kısıt", "Makine notu"],
                    satirlar: [
                        ["Kızak rayı", "Yatay hat, kademeli", "Kritik taşıyıcı sistem", "Titiz kaynak kontrolü"],
                        ["Vinç kulesi iskeleti", "Dikey, kademeli kot", "Montaj sırası", "Aşama aşama erişim"],
                        ["Vinç kulesi üst kısım", "Yüksek kot", "Rüzgâr yükü", "Eşik üstü iş durur"],
                        ["Kaynak/cıvata kontrolü", "Sabit nokta", "Kontrol süresi", "Program içi zaman payı"],
                        ["Vinç ile eş zamanlı alan", "Bölgesel", "İş bölümü ayrımı", "Vinç hareketinde bekleme"],
                    ],
                },
            },
            {
                baslik: "Montaj sırasının platform programına yansıması",
                paragraflar: [
                    "Vinç kulesi gibi çok aşamalı yapılarda platform, iskeletin o anki durumuna göre erişim noktası değiştirir; bir kat tamamlanmadan üst kata geçilmez, bu yüzden platform programı montaj programının bir parçası olarak kurulur, ayrı bir program değildir.",
                    "Montaj şefiyle günlük veya haftalık ilerleme paylaşıldığında, platformun bir sonraki hafta hangi kotta çalışacağı önceden planlanabilir; bu, son dakika taleplerini azaltır.",
                ],
            },
            {
                baslik: "Rüzgâr eşiğinin montaj takvimine etkisi",
                paragraflar: [
                    "Vinç kulesi gibi yüksek yapılarda rüzgâr, özellikle üst kotlarda belirleyici bir faktördür; belirli bir hızın üzerinde iş sınırlandırılır veya ertelenir. Bu, montaj takviminde önceden hesaba katılması gereken bir değişkendir — kıyı şeridinde rüzgârlı günler mevsime göre sıklaşabilir.",
                    "Rüzgârlı bir dönemde montajın gecikmemesi için, uygun olmayan günlerde alt kotlardaki (zemine yakın, rüzgârdan az etkilenen) işler öne çekilerek program dengelenebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kızak rayı gibi kritik bir sistemde kaynak kontrolü ne kadar hassas yapılıyor?",
                cevap:
                    "Rayın gemi ağırlığını taşıyacak kritik bir sistem olması nedeniyle kaynak kalite kontrolü özellikle titiz yürütülür; platform, kontrol ekibinin ihtiyaç duyduğu süre boyunca sabit ve stabil bir erişim sağlar. Kontrol süresi uzun olabileceği için bunu önceden montaj programına dahil ediyoruz.",
            },
            {
                soru: "Vinç kulesi montajında platform hangi sırayla çalışıyor?",
                cevap:
                    "İskeletin tamamlanma sırasını takip ediyoruz; bir kat bitmeden üst kata geçmiyoruz. Montaj şefiyle ilerleme paylaşıldığında, platformun bir sonraki hafta hangi kotta çalışacağını önceden planlayabiliyoruz. Bu, son dakika taleplerini azaltıyor ve montaj programıyla uyumlu kalmamızı sağlıyor.",
            },
            {
                soru: "Rüzgârlı günlerde vinç kulesi işi tamamen durur mu?",
                cevap:
                    "Her zaman değil; belirli bir rüzgâr hızının üzerinde özellikle üst kotlardaki iş sınırlandırılır, tamamen durdurmak son çaredir. Bu kararı operatörümüz sahada anlık değerlendirir. Rüzgârlı dönemlerde alt kotlardaki işleri öne çekerek programı dengelemeyi öneriyoruz.",
            },
            {
                soru: "Platform çelik elemanı da taşıyabiliyor mu, yoksa sadece erişim mi sağlıyor?",
                cevap:
                    "Yalnızca erişim sağlıyor; elemanın kaldırılması ve konumlanması vinçle yapılır. Bu iş bölümünü baştan netleştiriyoruz çünkü aynı anda çalışan vinç ve platform ekiplerinin karışmaması gerekiyor. Vinç hareket hâlindeyken platform o bölgede beklemeye alınır.",
            },
            {
                soru: "Montaj programımız değişirse platform programını hızlı güncelleyebilir misiniz?",
                cevap:
                    "Genellikle evet, özellikle önceden bize haber verilirse; ani değişikliklerde en yakın uygun makineyi yönlendirerek gecikmeyi en aza indiririz. Montaj şefinizle düzenli iletişim kurduğumuz sahalarda bu güncellemeler daha hızlı yapılabiliyor.",
            },
            {
                soru: "Kızak rayı hattı çok uzun, tek seferde mi bitiriyorsunuz?",
                cevap:
                    "Hattın uzunluğuna ve günlük kaynak ilerleme hızına bağlı olarak birkaç güne yayılabilir; platform, hat boyunca kademeli olarak segment segment ilerler. Hattın toplam uzunluğunu ve günlük hedef ilerlemeyi bilirsek, kaç günlük bir kiralama gerekeceğini önceden tahmin edebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersanelerde kızak rayı ve vinç kulesi gibi çelik konstrüksiyonların montaj süreci genel gemi inşa/ağır sanayi bilgisidir; tesis adı ve rakam kullanılmamıştır. Program koordinasyonu ve iş bölümü yaklaşımı firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Çanakkale'de Gelibolu Yarımadası Tarım Alanlarında Platform Kiralama",
        giris:
            "Tersane sahasının çevresindeki Gelibolu yarımadası, aynı zamanda zeytinlik ve tahıl tarımının yoğun olduğu bir bölgedir; tersane sezonu (karaya çekme, bakım yoğunluğu) ile tarım sezonu (hasat, silo doldurma) çoğu zaman farklı takvimlere denk gelir ve bu fark, aynı makine parkının iki farklı sektöre sırayla hizmet vermesini mümkün kılar. Tarım tarafında platform, silo yapılarının üst kotundaki bakım işlerinde, zeytinyağı işleme tesislerinin çatı ve tesisat bakımında, kurutma tesislerinin havalandırma bakımında kullanılır. Bu sahaların ortak özelliği, tersane sahasına göre daha açık ve zemin koşulu daha değişken olmasıdır — bazı tarım yolları toprak veya çakıl, bazı silo çevreleri ise beton platform üzerindedir. Bu sayfa, tersane merkezli filomuzun tarım sahalarında nasıl kullanıldığını anlatır.",
        maddeler: [
            {
                baslik: "Silo üst kotu bakım ve muayene",
                metin:
                    "Tahıl siloları, üst kapak, havalandırma bacası ve seviye sensörü gibi bakım noktalarını genellikle silonun en üst kotunda barındırır; bu noktalara sabit merdivenle erişim yavaş ve yorucudur, platform ise doğrudan hedefe yaklaşarak hem süreyi kısaltır hem iş güvenliğini artırır. Silo çevresindeki zeminin taşıma kapasitesi ve eğimi, makine yerleşimi öncesi kontrol edilir.",
            },
            {
                baslik: "Zeytinyağı işleme tesisinde çatı ve tesisat",
                metin:
                    "Bölgedeki zeytinyağı işleme tesislerinin çatı bakımı ve tesisat hattı işleri, hasat sezonu dışında planlanan düzenli bakım kalemleridir; hasat sezonunda tesis yoğun çalıştığı için platform işleri genellikle sezon arasına kaydırılır. Bu zamanlama, tesis yönetimiyle önceden koordine edilir.",
            },
            {
                baslik: "Kurutma tesisi havalandırma bakımı",
                metin:
                    "Tahıl kurutma tesislerinin havalandırma sistemi, hasat sonrası yoğun kullanımdan dolayı düzenli bakım gerektirir; bu bakım genellikle hasat biter bitmez, bir sonraki sezona hazırlık olarak planlanır. Platform, kurutma ünitesinin üst kısmındaki fan ve kanal bakımına doğrudan erişim sağlar.",
            },
            {
                baslik: "Toprak ve çakıl yollarda zemin değerlendirmesi",
                metin:
                    "Tarım sahalarına giden yolların bir kısmı toprak veya çakıldır; yağışlı dönemde bu yollar makinenin geçişini zorlaştırabilir. Sevkiyat öncesi hava durumu ve yol koşulu değerlendirilir, gerekirse daha uygun bir güne ertelenir veya farklı bir güzergah kullanılır.",
            },
            {
                baslik: "Tersane-tarım sezon dengesinin sevkiyat avantajı",
                metin:
                    "Tersanenin karaya çekme sezonu ile tarımın hasat sezonu genellikle farklı aylara denk gelir; bu, aynı makinenin bir dönem tersaneye, diğer dönem tarım sahalarına yönlendirilmesini mümkün kılar. Bu denge, her iki sektörde de makine bulunurluğunu yıl boyunca daha dengeli tutar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım sahası iş tipi ve makine notu",
                paragraflar: [
                    "Aşağıdaki tablo, Gelibolu yarımadası tarım sahalarındaki tipik platform işlerini özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis", "İş kalemi", "Zamanlama", "Zemin notu"],
                    satirlar: [
                        ["Tahıl silosu", "Üst kapak, sensör", "Yıl boyunca", "Beton platform"],
                        ["Zeytinyağı işleme tesisi", "Çatı, tesisat", "Hasat sezonu dışı", "Beton/asfalt"],
                        ["Kurutma tesisi", "Havalandırma, fan", "Hasat sonrası", "Beton"],
                        ["Sahaya giden yol", "Sevkiyat", "Yağışa duyarlı", "Toprak/çakıl"],
                        ["Sezon geçiş dönemi", "Esnek talep", "Tersane-tarım arası", "Değişken"],
                    ],
                },
            },
            {
                baslik: "Hasat sezonuyla çakışmayan planlama",
                paragraflar: [
                    "Hasat sezonunda tesisler yoğun çalıştığı için bakım işleri genellikle bu döneme denk getirilmez; sezon arası veya hasat sonrası dönem, hem tesis için hem bizim için daha uygun bir çalışma penceresidir. Tesis yönetimiyle sezon takvimi önceden paylaşıldığında, bakım planı buna göre kurulur.",
                    "Acil bir arıza hasat sezonunda ortaya çıkarsa, tesisin üretimini aksatmayacak şekilde en kısa pencereye (gece veya vardiya arası) iş yerleştirilir.",
                ],
            },
            {
                baslik: "Yol koşulunun sevkiyat kararına etkisi",
                paragraflar: [
                    "Toprak veya çakıl yolların yağışlı dönemde geçişi zorlaşabileceği için, sevkiyat öncesi hava durumu ve yol koşulu değerlendirilir; riskli görülen günlerde iş bir sonraki uygun güne ertelenir. Bu değerlendirme, özellikle kış aylarında planlı bakımların zamanlamasını etkiler.",
                    "Düzenli çalıştığımız tarım tesislerinde yol koşulu ve alternatif güzergahlar zaten bilinir; yeni bir sahada ise ilk sevkiyat öncesi yol durumu telefonla teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo üst kotuna erişim için hangi makine sınıfı kullanılıyor?",
                cevap:
                    "Silo çevresindeki zeminin taşıma kapasitesine ve eğimine göre değişir; beton platform üzerindeyse standart makaslı veya eklemli yeterli olabilir, zemin daha değişkense arazi tipi bir sınıf tercih edilir. Silo çevresinin fotoğrafını paylaşırsanız, doğru sınıfı keşifte netleştiririz.",
            },
            {
                soru: "Hasat sezonunda bakım yaptırabilir miyiz, yoksa beklememiz mi gerekiyor?",
                cevap:
                    "Mümkünse hasat sezonu dışına planlamanızı öneririz çünkü tesis o dönemde yoğun çalışır ve bakım işi üretimi aksatabilir. Acil bir arıza varsa üretimi aksatmayacak bir pencereye (gece, vardiya arası) yerleştiririz; planlı bakımlar için ise sezon öncesi veya sonrası daha uygundur.",
            },
            {
                soru: "Yağmurlu havada toprak yoldan geçebiliyor musunuz?",
                cevap:
                    "Bazen zorlanabiliriz; sevkiyat öncesi hava durumu ve yol koşulunu değerlendiririz, riskli görülürse bir sonraki uygun güne erteleriz. Düzenli çalıştığımız sahalarda alternatif güzergahları biliyoruz, yeni bir sahada ilk sevkiyat öncesi yol durumunu telefonla teyit ederiz.",
            },
            {
                soru: "Tersane işleriniz varken tarım sahasına makine ayırabiliyor musunuz?",
                cevap:
                    "Genellikle evet, çünkü tersanenin karaya çekme sezonu ile tarımın hasat sezonu farklı aylara denk gelir; bu fark, aynı filonun iki sektöre sırayla hizmet vermesini mümkün kılar. Nadir bir çakışma olursa öncelik, önceden rezervasyon yapan müşteriye verilir.",
            },
            {
                soru: "Kurutma tesisinin fan bakımını hasat bitince mi yapıyorsunuz?",
                cevap:
                    "Genellikle evet, çünkü fan ve kanal sistemi hasat sonrası yoğun kullanımdan yorulmuş olur ve bir sonraki sezona hazırlık için bu dönemde bakım en mantıklısıdır. Hasat bitiş tarihinizi bize bildirirseniz, bakımı bu takvime göre planlarız.",
            },
            {
                soru: "Zeytinyağı işleme tesisinin çatısında kaç günde bitirebilirsiniz?",
                cevap:
                    "Süre, çatının büyüklüğüne ve yapılacak işin kapsamına (tek nokta muayene mi, genel bakım mı) bağlıdır. Hasat sezonu dışında planlarsanız tesis yoğunluğu düşük olduğu için çalışma temposu daha rahat ilerler. Çatının fotoğrafını ve iş listesini paylaşırsanız, keşifte süre tahmini veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gelibolu yarımadasının zeytinlik/tahıl tarımı kamuya açık bölgesel bilgidir; tesis adı ve rakam kullanılmamıştır. Sezon dengesi ve sevkiyat koordinasyonu firma pratiğidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Çanakkale'de Tersane Sahası Aydınlatma Direği Bakımı",
        giris:
            "Tersane sahası, gece vardiyasının sürdüğü bir ortamdır; kızak alanı, dok çevresi ve açık malzeme deposu üzerindeki aydınlatma direkleri, hem güvenlik hem üretim devamlılığı için düzenli bakım gerektirir. Bu direkler genellikle standart sokak aydınlatmasından daha yüksek ve daha güçlü armatürlere sahiptir çünkü geniş bir sahayı aydınlatmaları gerekir; armatür değişimi veya kablo bağlantı kontrolü, platformla doğrudan direğin tepesine çıkılarak yapılır. Sahanın açık deniz kenarında olması, hem rüzgârı hem tuzlu nemi bakım sıklığına dahil eden iki faktördür — armatür bağlantı noktaları tuzlu havada standart bir sanayi sahasına göre daha hızlı korozyona uğrar. Bu sayfa, tersane sahasındaki aydınlatma direği bakımının nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Gece vardiyası öncesi armatür kontrolü",
                metin:
                    "Gece vardiyasının güvenli sürmesi için aydınlatma direklerinin bakımı, mümkünse gündüz saatlerinde ve vardiya başlamadan tamamlanır; bir armatürün sönük kaldığı fark edildiğinde bu bilgi mümkün olan en kısa sürede iletilir çünkü gece boyunca o bölge karanlıkta kalabilir. Acil armatür değişimi, gündüz bakımından ayrı bir öncelik sırasında değerlendirilir.",
            },
            {
                baslik: "Yüksek direk ve güçlü armatür erişimi",
                metin:
                    "Tersane sahası direkleri, geniş bir alanı aydınlatmak için standart sokak direğinden daha yüksek olabilir; bu direklerin tepesine erişim için bom uzanımı yeterli bir eklemli platform gerekir. Direğin tam yüksekliği ve armatür tipi keşifte belirlenir, çünkü bazı armatürler ağır ve değişimi iki kişilik ekip gerektirebilir.",
            },
            {
                baslik: "Tuzlu hava korozyonunun bağlantı noktalarına etkisi",
                metin:
                    "Deniz kenarındaki direk ve armatür bağlantı noktaları, tuzlu havanın etkisiyle standart bir sanayi sahasına göre daha hızlı korozyona uğrar; bu yüzden bakım sırasında sadece armatür değil bağlantı vidaları ve kablo geçiş noktaları da kontrol edilir. Korozyon tespit edilirse, armatür değişimiyle birlikte bağlantı elemanı da yenilenir.",
            },
            {
                baslik: "Açık sahada rüzgâr etkisiyle çalışma penceresi",
                metin:
                    "Yüksek direk tepesindeki çalışma, açık deniz kenarının rüzgârından doğrudan etkilenir; belirli bir rüzgâr hızının üzerinde bom uzanımı sınırlandırılır. Rüzgârın günün belirli saatlerinde daha sakin olduğu bilgisi varsa, bakım bu saatlere planlanır.",
            },
            {
                baslik: "Çok sayıda direkte rota planlaması",
                metin:
                    "Kızak, dok ve depo çevresindeki onlarca aydınlatma direğinin tamamını tek tek çağırmak yerine, yıllık veya sezonluk bir bakım rotası çıkarmak hem maliyet hem zaman açısından daha verimlidir; hangi direklerin öncelikli olduğu (arızalı, karanlık bölge) saha ekibiyle birlikte belirlenir ve rota buna göre sıralanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma direği bakım tipi ve planlama",
                paragraflar: [
                    "Aşağıdaki tablo, tersane sahası aydınlatma direği bakımındaki tipik durumları özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Zamanlama", "Risk unsuru", "Makine notu"],
                    satirlar: [
                        ["Rutin armatür kontrolü", "Gündüz, vardiya öncesi", "—", "Standart eklemli"],
                        ["Acil sönük armatür", "Öncelikli", "Gece güvenliği", "Hızlı yönlendirme"],
                        ["Korozyonlu bağlantı", "Rutin bakımla birlikte", "Tuzlu hava", "Bağlantı yenileme"],
                        ["Yüksek direk tepesi", "Planlı", "Bom uzanımı yeterliliği", "Uygun bom sınıfı"],
                        ["Rüzgârlı gün", "Ertelenebilir", "Bom stabilitesi", "Sakin saat tercihi"],
                    ],
                },
            },
            {
                baslik: "Yıllık bakım rotasının avantajı",
                paragraflar: [
                    "Sahadaki tüm direkleri kapsayan bir yıllık rota, hem her direk için ayrı çağrı maliyetini önler hem de korozyon veya arıza gibi sorunları erken tespit etme imkânı verir; rota, hangi direklerin daha önce sorun yaşadığı bilgisiyle önceliklendirilir.",
                    "Bu rotayı bir kez kurduğumuz sahalarda, yıl içindeki acil çağrı sayısı belirgin şekilde azalıyor çünkü çoğu sorun rutin bakımda erken yakalanıyor.",
                ],
            },
            {
                baslik: "Gece güvenliği ile bakım önceliği ilişkisi",
                paragraflar: [
                    "Sönük kalan bir armatür, gece vardiyasında o bölgenin karanlıkta kalması demektir; bu yüzden armatür arızası bildirildiğinde rutin bakım sırasından bağımsız olarak öncelik kazanır. Hangi bölgenin gece vardiyası için kritik olduğu saha yetkilisiyle önceden belirlenir.",
                    "Kritik bölgelerdeki direkler, yıllık rotada da öncelikli sıraya alınır; böylece arıza olasılığı en aza indirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gece vardiyası sürerken direk bakımı yapabiliyor musunuz?",
                cevap:
                    "Mümkünse gündüz saatlerinde, vardiya başlamadan yapmayı tercih ederiz; bu, gece boyunca o bölgenin karanlıkta kalma riskini önler. Acil bir durumda gece de müdahale edebiliriz ama rutin bakım için gündüz penceresi hem daha güvenli hem daha verimlidir.",
            },
            {
                soru: "Bir armatür sönük kaldığında ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Sönük armatür bildirildiğinde bu, rutin bakım sırasından bağımsız olarak öncelik kazanır; süre, o anki makine bulunurluğuna ve sahaya uzaklığa bağlıdır. Hangi direğin ve bölgenin etkilendiğini ilk çağrıda net verirseniz, en hızlı şekilde yönlendiririz.",
            },
            {
                soru: "Tuzlu hava direklerin bağlantı noktalarına ne kadar zarar veriyor?",
                cevap:
                    "Deniz kenarındaki bağlantı vidaları ve kablo geçiş noktaları, standart bir sanayi sahasına göre daha hızlı korozyona uğrar; bu yüzden rutin bakımda sadece armatürü değil bağlantı elemanlarını da kontrol ediyoruz. Korozyon tespit edilirse, armatürle birlikte bağlantı elemanı da yenilenir.",
            },
            {
                soru: "Sahamızda onlarca direk var, hepsini tek tek mi çağırmamız gerekiyor?",
                cevap:
                    "Gerekmiyor; yıllık veya sezonluk bir bakım rotası çıkarmanızı öneririz. Hangi direklerin öncelikli olduğunu (arızalı, karanlık bölge, daha önce sorun yaşamış) birlikte belirleriz ve tek bir rotayla tüm direkleri kapsarız; bu hem maliyet hem zaman açısından daha verimlidir.",
            },
            {
                soru: "Rüzgârlı günlerde direk tepesindeki iş ertelenir mi?",
                cevap:
                    "Belirli bir rüzgâr hızının üzerinde bom uzanımı sınırlandığı için evet, gerekirse ertelenir. Rüzgârın günün belirli saatlerinde daha sakin olduğu biliniyorsa, bakımı o saatlere planlarız; bu bilgiyi paylaşırsanız programı buna göre kurarız.",
            },
            {
                soru: "Direk armatürü çok ağırsa değişimi nasıl yapıyorsunuz?",
                cevap:
                    "Ağır armatürlerde iki kişilik bir ekiple çalışırız; biri sepette değişimi yapar, diğeri yerden yönlendirme ve malzeme desteği sağlar. Armatürün tipini ve tahmini ağırlığını keşifte belirleriz, bu bilgi doğru ekip ve makine planlamasına yardımcı olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersane sahalarında gece vardiyası ve deniz kenarı korozyonu genel tesis işletmeciliği bilgisidir; tesis adı ve rakam kullanılmamıştır. Rota planlaması ve öncelik sıralaması firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Çanakkale'de Tersane Sahasında Operatörlü Platform Kiralama",
        giris:
            "Tersane sahasında operatörlü kiralama tercihi, sahanın kendi iş güvenliği kültüründen doğrudan etkilenir: kaynak, boya ve vinç faaliyetinin aynı anda sürdüğü bir ortamda platform kullanan kişinin sadece makineyi değil, çevresindeki riskleri (kıvılcım, askılı yük, dar geçiş) de tanıması beklenir. Bu yüzden tersanede operatörsüz kiralama, ancak müşterinin kendi personeli sahaya ve o günkü risklere aşina ise ve gerekli sertifikasyona sahipse değerlendirilir; yeni bir sahada veya karmaşık bir montaj işinde operatörlü seçenek varsayılan tercihtir. Operatörümüz sahaya geldiğinde, o günkü kaynak/boya/vinç programını saha yetkilisinden alır ve platform çalışmasını bu programa göre kurar — bu koordinasyon, operatörsüz bir kiralamada müşterinin kendi sorumluluğuna kalır.",
        maddeler: [
            {
                baslik: "Çok riskli sahada operatörlü tercih",
                metin:
                    "Kaynak kıvılcımı, boya buharı ve vinç hareketi gibi birden fazla riskin aynı anda bulunduğu tersane bölümlerinde, operatörümüzün bu riskleri tanıması ve günlük saha programını takip etmesi önemli bir avantajdır; bu yüzden özellikle yeni çalıştığımız veya karmaşık montaj süren sahalarda operatörlü kiralamayı öneririz.",
            },
            {
                baslik: "Operatörsüz kiralamada sertifikasyon şartı",
                metin:
                    "Müşterinin kendi personeli platformu kullanacaksa, ilgili makine sınıfı için geçerli operatör sertifikası ve tersanenin kendi iş güvenliği oryantasyonunu tamamlamış olması gerekir; bu belgeler kiralama öncesi kontrol edilir. Sertifikasyon eksikse operatörlü seçenek zorunlu hâle gelir.",
            },
            {
                baslik: "Günlük saha programına uyum",
                metin:
                    "Operatörümüz sahaya geldiğinde, o günkü kaynak, boya ve vinç faaliyeti programını saha yetkilisinden alır; platform çalışması bu programa göre kurulur ve çakışan bir faaliyet varsa operatörümüz işi erteleyip yetkiliye danışır. Operatörsüz kiralamada bu koordinasyon müşteri personelinin sorumluluğundadır.",
            },
            {
                baslik: "Uzun süreli tersane işlerinde operatör devamlılığı",
                metin:
                    "Bir gemi inşa bloğu üzerinde haftalarca süren işlerde, aynı operatörün sürekliliği sahanın kendine özgü kısıtlarını (destek koridoru, kaynak programı, rüzgâr eşiği) öğrenmesini sağlar ve iş temposu zamanla hızlanır; bu yüzden uzun süreli kiralamalarda mümkünse aynı operatör atanır.",
            },
            {
                baslik: "Operatör değişikliğinde bilgi aktarımı",
                metin:
                    "Operatör değişmesi gerektiğinde (izin, rotasyon), yeni operatöre sahanın o güne kadar öğrenilen kısıtları ve saha yetkilisinin iletişim bilgisi aktarılır; bu geçiş, iş kalitesinde kesinti yaşanmaması için önceden planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, tersane sahasında hangi durumda hangi seçeneğin uygun olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Önerilen seçenek", "Şart", "Not"],
                    satirlar: [
                        ["Yeni saha, ilk çalışma", "Operatörlü", "—", "Saha riskleri bilinmiyor"],
                        ["Çok riskli bölüm (kaynak+vinç)", "Operatörlü", "—", "Eş zamanlı risk yönetimi"],
                        ["Müşterinin sertifikalı personeli", "Operatörsüz", "Geçerli sertifika + oryantasyon", "Belgeler önceden kontrol"],
                        ["Uzun süreli tek blok işi", "Operatörlü (sabit kişi)", "—", "Saha bilgisi birikir"],
                        ["Kısa süreli basit erişim", "Operatörsüz mümkün", "Sertifika şartı", "Düşük risk bölümü"],
                    ],
                },
            },
            {
                baslik: "Sertifikasyon kontrolünün adımları",
                paragraflar: [
                    "Operatörsüz kiralama talebinde, ilgili makine sınıfı için geçerli bir operatör sertifikası ve tersanenin kendi iş güvenliği oryantasyon kaydı istenir; bu belgeler kiralama öncesi kontrol edilir ve kayıt altına alınır.",
                    "Belge eksikse veya süresi geçmişse, operatörlü seçenek önerilir ya da müşteri personelinin sertifikasyonu tamamlanana kadar kiralama ertelenir; bu, sahadaki güvenlik standardından ödün vermemek içindir.",
                ],
            },
            {
                baslik: "Saha bilgisinin operatör devamlılığıyla korunması",
                paragraflar: [
                    "Bir tersane sahasında haftalarca süren işlerde operatörümüz, destek koridoru ölçüsü, kaynak programı saatleri ve rüzgâr eşiği gibi sahaya özgü bilgiyi zamanla öğrenir; aynı operatörün devam etmesi bu bilgiyi korur ve iş temposunu hızlandırır.",
                    "Operatör değişmesi zorunlu olduğunda, bu bilgi yeni operatöre önceden aktarılır ve mümkünse ilk gün eski operatörle birlikte çalışılarak geçiş yumuşatılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tersanede operatörsüz kiralama hiç mümkün değil mi?",
                cevap:
                    "Mümkün, ancak müşterinin personeli ilgili makine sınıfı için geçerli operatör sertifikasına ve tersanenin kendi iş güvenliği oryantasyonuna sahip olmalı. Bu belgeler kiralama öncesi kontrol edilir. Çok riskli veya yeni bir sahada operatörlü seçeneği öneririz çünkü saha kısıtları önceden bilinmiyor olabilir.",
            },
            {
                soru: "Operatörünüz günlük kaynak/vinç programını nereden öğreniyor?",
                cevap:
                    "Sahaya geldiğinde saha yetkilisinden o günkü faaliyet programını alır; platform çalışmasını bu programa göre kurar. Çakışan bir faaliyet varsa işi erteleyip yetkiliye danışır. Operatörsüz kiralamada bu koordinasyonu müşteri personeli kendisi yürütmelidir.",
            },
            {
                soru: "Aynı operatörün uzun süre çalışmasının bize faydası ne?",
                cevap:
                    "Operatör, sahanın destek koridoru ölçüsü, kaynak programı saatleri ve rüzgâr eşiği gibi kısıtlarını zamanla öğrenir; bu bilgi birikimi iş temposunu hızlandırır. Bu yüzden haftalarca süren işlerde mümkünse aynı operatörü atarız.",
            },
            {
                soru: "Operatör izne çıkarsa iş aksar mı?",
                cevap:
                    "Aksamaması için yeni operatöre sahanın o güne kadar öğrenilen kısıtları ve saha yetkilisinin iletişim bilgisi önceden aktarılır; mümkünse geçiş günü eski operatörle birlikte çalışılır. Bu planlama, izin veya rotasyon öncesinde bize bildirilirse daha sorunsuz yürür.",
            },
            {
                soru: "Sertifikamız var ama tersanenin oryantasyonunu almadık, ne yapmalıyız?",
                cevap:
                    "Oryantasyon eksikse operatörsüz kiralama önerilmez; ya operatörlü seçeneğe geçilir ya da müşteri personeli tersanenin oryantasyonunu tamamlayana kadar kiralama ertelenir. Bu, sahadaki güvenlik standardından ödün vermemek için önceliğimizdir.",
            },
            {
                soru: "Düşük riskli kısa bir iş için operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Evet, sertifikasyon şartı sağlanıyorsa ve iş kaynak/vinç gibi eş zamanlı riskli faaliyetlerden uzak bir bölümdeyse operatörsüz kiralama mümkündür. İşin niteliğini ve konumunu paylaşırsanız, operatörlü mü operatörsüz mü uygun olduğunu birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersane sahalarında iş güvenliği ve eş zamanlı faaliyet riski (kaynak, boya, vinç) genel sektörel bilgidir; tesis adı ve rakam kullanılmamıştır. Sertifikasyon kontrolü ve operatör devamlılığı yaklaşımı firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çanakkale'de Tersane, Fırın Atölyesi ve Tarım Sahası Arasında Çok Noktalı Bakım Rotası",
        giris:
            "Merkezdeki depomuz, tek bir sektöre değil üç farklı sahaya hizmet verir: Gelibolu tersaneleri, Çan'daki seramik fırın yan sanayisi ve Gelibolu yarımadasının tarım tesisleri. Bu üç saha genellikle farklı takvimlerde yoğunlaşır, dolayısıyla bir müşterinin birden fazla noktada (örneğin tersanedeki depo aydınlatması ile aynı hafta tarım silosundaki sensör bakımı) ihtiyacı varsa, tek bir rotayla iki işi art arda planlamak hem sevkiyat maliyetini hem toplam süreyi azaltır. Çok noktalı rota, özellikle aynı müşterinin farklı sahalarda tesisi olduğu veya bir tedarik zincirinin (örneğin tersaneye malzeme sağlayan bir atölyenin) birden fazla noktasında düzenli bakım ihtiyacı bulunduğu durumlarda değer üretir. Bu sayfa, çok noktalı rota planlamasının nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Farklı sektörlerin takvim farkından yararlanma",
                metin:
                    "Tersane, fırın atölyesi ve tarım sahası, yoğun dönemlerini genellikle farklı aylarda yaşar; bir rota planlarken bu takvim farkı kullanılarak, bir sahada düşük yoğunluk varken diğerinde yüksek olabileceği öngörülür ve makine buna göre yönlendirilir. Bu, tek bir sektöre bağımlı kalmadan filo kullanımını dengeler.",
            },
            {
                baslik: "Aynı hafta birden fazla nokta talebi",
                metin:
                    "Bir müşterinin veya bağlantılı işletmelerin aynı hafta içinde iki farklı sahada (örneğin tersanedeki depo ile tarım silosundaki) ihtiyacı varsa, bu iki iş art arda tek bir rotaya yerleştirilir; makine bir sahadan diğerine taşınırken sevkiyat tekrarlanmaz, bu da toplam maliyeti düşürür.",
            },
            {
                baslik: "Rota sıralamasının coğrafi mantığı",
                metin:
                    "Merkezdeki depo, Çan ve Gelibolu yönlerine farklı mesafelerde olduğu için rota sıralaması coğrafi olarak da kurulur; aynı güzergah üzerindeki işler art arda yapılır, ters yönlere gidiş-geliş tekrarı önlenir. Bu planlama, sevkiyat öncesi tüm taleplerin toplu değerlendirilmesiyle yapılır.",
            },
            {
                baslik: "Tedarik zincirindeki bağlantılı sahalar",
                metin:
                    "Tersaneye malzeme sağlayan bir atölye veya tarım tesisine hizmet veren bir kooperatif gibi bağlantılı işletmelerin birden fazla noktasında düzenli bakım ihtiyacı olabilir; bu durumda tek bir yıllık rota, tüm noktaları kapsayacak şekilde önceden kurulur ve her nokta kendi periyoduna göre ziyaret edilir.",
            },
            {
                baslik: "Acil talebin rotaya eklenmesi",
                metin:
                    "Planlı rota sürerken bir noktada acil bir ihtiyaç doğarsa, bu talep mevcut rotaya mümkünse eklenir; rota üzerindeki en yakın makine yönlendirilir. Acil talep rotanın tamamen dışındaysa, ayrı bir sevkiyat değerlendirilir ve bu durumun ek maliyeti önceden bildirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota noktası tipi ve planlama mantığı",
                paragraflar: [
                    "Aşağıdaki tablo, çok noktalı rotadaki tipik saha kombinasyonlarını özetler.",
                ],
                tablo: {
                    basliklar: ["Nokta kombinasyonu", "Takvim ilişkisi", "Rota mantığı", "Avantaj"],
                    satirlar: [
                        ["Tersane + tarım silosu", "Farklı sezon", "Sezon dengeleme", "Filo bulunurluğu"],
                        ["Tersane + fırın atölyesi", "Farklı sezon", "Sezon dengeleme", "Filo bulunurluğu"],
                        ["Aynı hafta iki nokta", "Bağımsız", "Coğrafi sıralama", "Tek sevkiyat"],
                        ["Tedarik zinciri (çok nokta)", "Periyodik", "Yıllık rota", "Toplu planlama"],
                        ["Acil + mevcut rota", "Anlık", "Rotaya ekleme", "Hızlı yönlendirme"],
                    ],
                },
            },
            {
                baslik: "Yıllık rota kurulumunun avantajı",
                paragraflar: [
                    "Birden fazla noktası olan bir müşteri veya tedarik zinciri için yıllık bir bakım rotası önceden kurulduğunda, her nokta kendi periyoduna göre ziyaret edilir ve ayrı ayrı çağrı yapma ihtiyacı azalır; bu hem maliyet hem zaman açısından avantaj sağlar.",
                    "Rota kurulurken her noktanın kendine özgü kısıtları (tersanenin kapı prosedürü, tarım sahasının yol koşulu, fırın atölyesinin toz ortamı) da dikkate alınır; bu bilgi rotaya not olarak eklenir.",
                ],
            },
            {
                baslik: "Acil taleplerin planlı rotaya etkisi",
                paragraflar: [
                    "Planlı bir rota sürerken beklenmedik bir acil talep geldiğinde, rota üzerindeki en yakın makine önce değerlendirilir; bu, ek bir sevkiyat gerektirmeden acil ihtiyacı karşılayabilir. Rota tamamen dışındaki bir talep için ise ayrı sevkiyat ve bunun ek maliyeti önceden müşteriye bildirilir.",
                    "Sık acil talep alan noktalar, bir sonraki yıllık rota planlamasında daha sık ziyaret edilecek şekilde güncellenir; bu, aynı acil durumun tekrar etmesini azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Farklı sektörlerdeki iki sahamızı tek rotaya nasıl yerleştiriyorsunuz?",
                cevap:
                    "Her iki sahanın takvimini ve öncelik sırasını sizinle birlikte belirleriz; tersane ve tarım gibi farklı sezon yoğunluğu taşıyan sahalarda genellikle bir çakışma olmaz, bu yüzden tek bir makineyle iki sahaya sırayla hizmet verebiliriz. Coğrafi olarak da yakın noktaları art arda planlarız.",
            },
            {
                soru: "Aynı hafta iki farklı yerde işimiz var, tek sevkiyatla olur mu?",
                cevap:
                    "Genellikle olur; iki işi art arda tek bir rotaya yerleştiririz, makine bir sahadan diğerine taşınırken sevkiyat tekrarlanmaz. Bu, toplam maliyeti ve süreyi düşürür. İki sahanın konumunu ve tarih tercihinizi bildirirseniz, en verimli sıralamayı çıkarırız.",
            },
            {
                soru: "Yıllık rota kurulduktan sonra değiştirebiliyor muyuz?",
                cevap:
                    "Evet, rota sabit bir taahhüt değildir; ihtiyaçlarınız değiştiğinde güncelleyebiliriz. Sık değişen taleplerde rotayı daha esnek, düzenli tekrarlanan taleplerde ise daha sabit bir yapıda kurarız. Değişikliği önceden bildirmeniz, planlamayı kolaylaştırır.",
            },
            {
                soru: "Rota dışında acil bir talebimiz olursa ek ücret mi ödüyoruz?",
                cevap:
                    "Rota üzerindeki en yakın makine değerlendirilebiliyorsa ek maliyet genellikle oluşmaz; rota tamamen dışındaysa ayrı bir sevkiyat gerekir ve bu durumun maliyeti önceden size bildirilir. Sık acil talep alan noktaları bir sonraki rota planlamasında daha sık ziyaret edilecek şekilde güncelleriz.",
            },
            {
                soru: "Tedarik zincirimizdeki birden fazla tedarikçiyi tek rotaya dahil edebilir misiniz?",
                cevap:
                    "Edebiliriz; her tedarikçinin bakım periyodunu ve konumunu öğrenip yıllık bir rota kurarız. Bu, sizin için tek bir koordinasyon noktası (bizimle) üzerinden tüm tedarik zincirinin bakımını takip etme imkânı sağlar.",
            },
            {
                soru: "Rota sıralamasını neye göre belirliyorsunuz?",
                cevap:
                    "Hem coğrafi konuma (aynı güzergah üzerindeki işleri art arda yapma) hem sektörel takvime (hangi sahanın o dönem daha yoğun olduğu) göre belirliyoruz. Amaç, gidiş-geliş tekrarını azaltmak ve her sahanın kendi yoğun dönemiyle çakışmamak.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Merkez depodan Çan, Gelibolu tersane ve tarım sahalarına sevkiyat mesafeleri kamuya açık coğrafi bilgidir; tesis adı ve rakam kullanılmamıştır. Rota planlama ve sezon dengeleme yaklaşımı firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Çanakkale'de Tersane Dok ve Kızak Alanı Zor Zemin Platform Kiralama",
        giris:
            "Tersanenin dok ve kızak alanı, standart bir sanayi zemininden farklı bir zemin profili sunar: kızak rayları arasında çamurlu veya ıslak dolgu zemin bulunabilir, dok kenarında beton bir kısım varken gerisi sıkıştırılmış toprak veya çakıl olabilir, gelgit ve deniz suyu sıçraması bazı bölgeleri sürekli nemli tutar. Standart tekerlekli bir platform bu değişken zeminde takılabilir veya dengesizleşebilir; zor zemin/arazi sınıfı, daha geniş tekerlek tabanı ve arazi tipi tahrik sistemiyle bu koşullara uyum sağlar. Bu sınıfın seçimi, sadece zeminin o anki durumuna değil hava koşuluna da bağlıdır — yağış sonrası aynı zemin farklı bir zorluk seviyesine geçebilir. Bu sayfa, tersane sahasındaki zor zemin koşullarında platform seçiminin nasıl yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Kızak rayları arasındaki dolgu zemin",
                metin:
                    "Kızak raylarının arasında kalan zemin, genellikle sıkıştırılmış dolgu malzemesidir ve deniz suyu sızıntısı veya yağış sonrası çamurlaşabilir; standart tekerlekli platform bu zeminde takılma riski taşır. Arazi tipi sınıf, geniş tekerlek tabanıyla bu zeminde daha dengeli ilerler; yine de zeminin o günkü durumu keşifte veya sevkiyat öncesi değerlendirilir.",
            },
            {
                baslik: "Dok kenarında karma zemin geçişi",
                metin:
                    "Dok kenarının bir kısmı beton, gerisi sıkıştırılmış toprak veya çakıl olabilir; platform bu iki zemin arasında geçiş yaparken ani sertlik farkı dengesizliğe yol açabilir. Geçiş noktaları keşifte belirlenir ve gerekirse geçici bir düzleştirme (plaka, dolgu) önerilir.",
            },
            {
                baslik: "Gelgit ve deniz suyu sıçramasının nem etkisi",
                metin:
                    "Deniz kenarına yakın bölgelerde gelgit veya dalga sıçraması bazı zemin noktalarını sürekli nemli tutar; bu nem hem zemin tutuşunu hem makinenin fren ve tahrik performansını etkileyebilir. Bu tür noktalarda çalışma öncesi zemin tutuşu görsel olarak kontrol edilir, gerekirse alternatif bir yaklaşım açısı denenir.",
            },
            {
                baslik: "Yağış sonrası zorluk seviyesinin değişmesi",
                metin:
                    "Aynı zemin, kuru havada standart bir platformla geçilebilirken yağış sonrası çamurlaşarak arazi tipi sınıfı gerektirebilir; bu yüzden hava durumu, özellikle yağışlı dönemde sevkiyat kararına dahil edilir. Yağış sonrası ilk günlerde zemin kuruyana kadar bekleme önerilebilir veya arazi tipi sınıfa geçilir.",
            },
            {
                baslik: "Malzeme yığınları ve geçici engellerin zemine etkisi",
                metin:
                    "Dok ve kızak alanında geçici olarak bırakılan malzeme yığınları, kablo tavaları veya iskele parçaları, düz görünen zeminde beklenmedik engeller oluşturabilir; sevkiyat öncesi güncel saha fotoğrafı istenir ve bu engellerin güzergah üzerinde olup olmadığı değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin durumu ve makine sınıfı eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, tersane dok ve kızak alanındaki zemin durumlarına göre makine seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Risk", "Uygun sınıf", "Ek önlem"],
                    satirlar: [
                        ["Kızak arası dolgu (kuru)", "Hafif düzensizlik", "Standart eklemli", "Görsel kontrol"],
                        ["Kızak arası dolgu (ıslak)", "Çamurlaşma", "Arazi tipi", "Yağış sonrası bekleme"],
                        ["Dok kenarı karma zemin", "Sertlik farkı geçişi", "Arazi tipi", "Geçiş noktası tespiti"],
                        ["Gelgit etkili nemli bölge", "Tutuş kaybı", "Arazi tipi", "Alternatif açı denemesi"],
                        ["Malzeme yığını çevresi", "Gizli engel", "Duruma göre", "Güncel foto ile keşif"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat öncesi zemin değerlendirmesi",
                paragraflar: [
                    "Zor zemin taşıyan bir tersane sahasına makine göndermeden önce, güncel saha fotoğrafı ve varsa son yağış bilgisi istenir; bu, doğru makine sınıfının önceden belirlenmesini sağlar ve sahada uygunsuz makineyle karşılaşma riskini azaltır.",
                    "Düzenli çalıştığımız tersanelerde zemin profili zaten bilinir ve mevsimsel değişim (yağışlı dönem, kuru dönem) göz önünde bulundurularak makine önceden ayarlanır.",
                ],
            },
            {
                baslik: "Zemin tutuşu ile operatör kararı",
                paragraflar: [
                    "Sahada zemin tutuşu beklenenden düşük çıkarsa, operatör alternatif bir yaklaşım açısı dener veya gerekirse çalışmayı zemin kuruyana kadar erteler; bu karar, iş güvenliği açısından programdan önceliklidir.",
                    "Zemin nedeniyle erteleme gerektiğinde, bu durum saha yetkilisine hemen bildirilir ve yeni bir tarih birlikte belirlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kızak rayları arasındaki zemin her zaman zor mu?",
                cevap:
                    "Hayır, kuru havada genellikle standart bir platform yeterlidir; zorluk, yağış sonrası çamurlaşan dolgu zemininde ortaya çıkar. Sevkiyat öncesi güncel saha fotoğrafı ve son yağış bilgisini isteriz, bu bilgiyle doğru sınıfı önceden belirleriz.",
            },
            {
                soru: "Dok kenarında beton ve toprak zemin arasında geçiş yaparken sorun yaşar mısınız?",
                cevap:
                    "Ani sertlik farkı dengesizliğe yol açabileceği için bu geçiş noktalarını keşifte önceden belirleriz; gerekirse geçici bir düzleştirme (plaka veya dolgu) öneririz. Arazi tipi sınıf bu tür karma zeminlerde standart sınıfa göre daha güvenli ilerler.",
            },
            {
                soru: "Gelgit etkisi olan bölgede çalışabiliyor musunuz?",
                cevap:
                    "Çalışabiliriz ama zemin tutuşunu önce görsel olarak kontrol ederiz; nem yüksekse alternatif bir yaklaşım açısı deneriz. Gelgit saatlerini biliyorsanız, çalışmayı zeminin daha kuru olduğu saatlere planlamamız mümkündür.",
            },
            {
                soru: "Yağmurdan sonra hemen çalışmaya başlayabilir misiniz?",
                cevap:
                    "Zemine bağlı olarak bazen hemen, bazen zemin kuruyana kadar beklememiz gerekebilir; ıslak dolgu zeminde arazi tipi sınıfa geçilse bile aşırı çamurda çalışma güvenli olmayabilir. Bu kararı operatörümüz sahada zemin tutuşuna bakarak verir, programdan önceliklidir.",
            },
            {
                soru: "Sahada malzeme yığınları var, bunlar makinenin geçişini engeller mi?",
                cevap:
                    "Engelleyebilir, bu yüzden sevkiyat öncesi güncel saha fotoğrafı isteriz ve güzergah üzerinde yığın olup olmadığını değerlendiririz. Yığın kalıcıysa alternatif bir güzergah belirlenir; geçiciyse mümkünse çalışma öncesi kaldırılması istenir.",
            },
            {
                soru: "Arazi tipi sınıf standart sınıftan daha mı pahalı?",
                cevap:
                    "Genellikle biraz daha yüksek bir kiralama bedeli olur çünkü bu sınıf özel tahrik ve tekerlek yapısı taşır. Ancak zor zeminde standart sınıfla çalışmaya çalışmak takılma veya dengesizlik riski taşıdığı için, zemin durumu belirsizse doğru sınıfı önceden netleştirmenizi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tersane dok ve kızak alanlarının karma zemin yapısı ve deniz kenarı nem etkisi genel tesis bilgisidir; tesis adı ve rakam kullanılmamıştır. Sevkiyat öncesi zemin değerlendirmesi firma pratiğidir.",
    },
};
