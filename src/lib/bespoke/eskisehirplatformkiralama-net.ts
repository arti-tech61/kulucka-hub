// ═══════════════════════════════════════════════════════════════════════════
// eskisehirplatformkiralama.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Eskişehir ŞEHİR MERKEZİ mağaza, otel ve KAMU BİNALARINA İÇ MEKÂN
// platform kiralama.
// Açı: KENT İÇİ İÇ MEKÂN İŞLERİ — mağaza-otel-kamu binası içi (AVM, otel
// lobisi, üniversite/belediye binası), egzozsuz akülü ekipman zorunluluğu,
// hassas zemin (mermer/parke) koruması, mesai dışı çalışma pencereleri.
//
// ⚠️ Kardeş dosya eskisehirplatform-org.ts Odunpazarı/Tepebaşı sayfalarında
// "kurumsal yapılar ve hassas imalat" açısıyla giriş izni/evrak sürecini
// zaten işlemiş durumda. Bu dosya İÇ MEKÂN zemin/akustik/misafir-kullanıcı
// hassasiyetine odaklanır — evrak süreci değil, mermer/parke koruma ve
// mesai dışı pencere disiplini eksenindedir; cümle/tablo tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir genel bölge bilgisi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ESKISEHIRPLATFORMKIRALAMA_NET: Record<string, BespokeIcerik> = {
    "bolge:tepebasi": {
        h1: "Tepebaşı'nda Mağaza, Otel ve Kamu Binası İç Mekânında Platform Kiralama",
        giris:
            "Tepebaşı'nın geniş cadde dokusu ve yoğun kamu-ticaret yapılaşması, ilçeyi iç mekân platform işlerinin en çok talep edildiği bölgelerden biri hâline getirir: alışveriş merkezlerinin iç avlu ve tavan aydınlatmaları, otel lobilerinin yüksek tavan işleri, üniversite ve belediye binalarının fuaye ve salon aydınlatmaları. Bu işlerin ortağı, dışarıdaki bir sanayi tesisinden tamamen farklı bir kısıt setidir: kapalı bir hacimde egzoz gazı üretemeyen bir makine, mermer veya parke bir zeminde iz bırakamayan bir tekerlek ve müşteri veya ziyaretçi akışının kesilmemesi gereken bir çalışma takvimi. Bu sayfa, ilçedeki iç mekân işlerinin üç sabit kuralını — akülü ekipman zorunluluğu, zemin koruma disiplini ve mesai dışı çalışma pencereleri — somut örneklerle ele alır.",
        maddeler: [
            {
                baslik: "Egzozsuz zorunluluğu: neden yalnızca akülü",
                metin:
                    "Kapalı bir alışveriş merkezi, otel lobisi veya kamu binası fuayesinde dizel veya LPG'li bir makine kullanılamaz; bu, havalandırma kapasitesi ne olursa olsun geçerli bir kuraldır çünkü egzoz gazı kapalı hacimde hızla birikir ve içeride bulunan insanlar için sağlık riski oluşturur. Bu yüzden iç mekân taleplerinde makine seçimi baştan akülü sınıfla sınırlanır; talebiniz geldiğinde ilk sorduğumuz şey hacmin tamamen kapalı mı yoksa kısmen açık mı olduğudur, çünkü bu ayrım dizel seçeneğinin gündeme gelip gelemeyeceğini belirler.",
            },
            {
                baslik: "Mermer ve parke zeminde tekerlek seçimi",
                metin:
                    "AVM ve otel lobilerinin çoğu mermer, granit veya cilalı parke zeminle kaplıdır ve standart siyah kauçuk tekerlekler bu yüzeylerde iz bırakır — bazen kalıcı bir leke, bazen çizik. Bu yüzden iç mekân işlerinde beyaz veya gri, iz bırakmayan (non-marking) tekerlekli makineler standart tercihimizdir. Ayrıca makinenin güzergâhı boyunca, özellikle dönüş noktalarında, koruyucu örtü veya kayma önleyici mat kullanılır; bu, tekerlek izinden çok yüzeyin çizilmesini önlemek içindir.",
            },
            {
                baslik: "AVM'de gece penceresi, otelde misafir dışı saat",
                metin:
                    "Alışveriş merkezlerinde iç mekân çalışması neredeyse istisnasız kapanış sonrası gece saatlerine yazılır; gündüz saatlerinde hem güvenlik hem müşteri deneyimi açısından bu işler yapılmaz. Otellerde ise durum biraz daha esnektir — misafir yoğunluğunun düşük olduğu sabahın erken saatleri veya gündüzün sakin bantları kullanılabilir, ancak lobi gibi sürekli kullanılan alanlarda yine gece tercih edilir. Bu iki mekân tipinin saat penceresi birbirinden farklıdır ve talebinizi aldığımızda hangi tipte olduğunuzu netleştirerek programı ona göre kurarız.",
            },
            {
                baslik: "Kamu binasında ziyaretçi akışı ve refakat",
                metin:
                    "Belediye hizmet binası veya üniversite fuayesi gibi kamu yapılarında çalışma, ziyaretçi ve öğrenci akışının yoğun olduğu saatlerin dışına planlanır; bazı kurumlarda ayrıca bina içinde bir görevlinin çalışma boyunca refakat etmesi istenir. Bu kurumlarda genellikle mesai saatleri dışında (akşam sonrası veya hafta sonu) bir pencere ayrılır ve makinenin bina içine giriş-çıkış saatleri önceden bina yönetimine bildirilir.",
            },
            {
                baslik: "Taşıma güzergâhı ve asansör-merdiven kısıtı",
                metin:
                    "İç mekân işlerinde makinenin binaya giriş noktasından çalışma alanına kadar izleyeceği güzergâh, kapı genişlikleri, zemin kot farkları ve varsa rampa eğimiyle sınırlıdır; katlı yapılarda ise makine yalnızca zemin kattaki işlerde kullanılabilir, üst kata çıkarma söz konusu değildir (yük asansörü genişliği yeterli olsa bile ağırlık sınırı çoğu zaman izin vermez). Bu yüzden üst kat işlerinde alternatif olarak o katın kendi girişinden (varsa) erişim değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekân tipine göre saat ve zemin kuralı",
                paragraflar: [
                    "İç mekân işlerinde mekân tipi, hem çalışma saatini hem zemin koruma önlemini belirler. Aşağıdaki tablo tipik eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Mekân tipi", "Zemin", "Uygun saat", "Ek önlem"],
                    satirlar: [
                        ["AVM iç avlu/tavan", "Mermer/granit", "Kapanış sonrası gece", "İz bırakmayan tekerlek"],
                        ["Otel lobisi", "Mermer/parke", "Sabah erken/gece", "Koruyucu mat, sessiz çalışma"],
                        ["Belediye fuayesi", "Seramik/granit", "Mesai dışı", "Refakatçi eşliği"],
                        ["Üniversite salonu", "Parke/seramik", "Ders dışı/hafta sonu", "Öğrenci akışı kontrolü"],
                        ["Mağaza içi (küçük)", "Değişken", "Kapanış sonrası", "Standart iz bırakmayan tekerlek"],
                    ],
                },
            },
            {
                baslik: "Zemin hasarını önlemenin adımları",
                paragraflar: [
                    "İç mekân işlerine başlamadan önce zemin tipini ve varsa özel bakım gerektiren bir yüzey (örneğin yeni cilalanmış parke veya antika mermer) olup olmadığını sorarız. Bu bilgiyle makinenin tekerlek tipi ve güzergâhı önceden belirlenir; hassas bölgelerde koruyucu mat serilir ve makinenin dönüş yapacağı noktalar işaretlenir.",
                    "Çalışma bitiminde zemin, giriş öncesi durumuyla karşılaştırılarak kontrol edilir; bu adım, olası bir anlaşmazlıkta netlik sağlar ve bizim için de standart bir uygulamadır.",
                ],
            },
            {
                baslik: "Gece çalışmasının sessizlik gereksinimi",
                paragraflar: [
                    "AVM ve otel gibi mekânlarda gece çalışması yapılırken, akülü makinenin sessiz çalışma özelliği tercih sebebidir ancak yine de operatör hareketleri ve montaj-demontaj sesleri bina içinde yankılanabilir; bu yüzden gürültülü kalemler (örneğin vidalama, kesme) mümkünse gecenin erken saatlerine, sessiz kalemler (sadece erişim gerektiren kontrol işleri) ise geç saatlere yazılır.",
                    "Otel gibi konaklama fonksiyonu olan binalarda, çalışma alanının üst katlarında misafir varsa, gürültü seviyesini ek olarak azaltacak önlemler (örneğin belirli saatlerde ara vermek) uygulanabilir; bu, bina yönetimiyle önceden konuşulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "AVM'de gece çalışacağız, güvenlik ve temizlik ekipleriyle çakışır mıyız?",
                cevap:
                    "Genellikle çakışmaz çünkü AVM'lerin çoğu, kapanış sonrası gece programını temizlik-bakım-güvenlik faaliyetleri için zaten planlamış durumdadır ve platform çalışmasını da bu programa dahil ederiz. Çalışma saatini AVM yönetimiyle önceden netleştirir, hangi saatte hangi ekibin sahada olacağını öğreniriz. Güzergâhımız temizlik ekibinin çalıştığı alanla kesişiyorsa, koordinasyonu yönetim üzerinden sağlarız; bu genellikle sorunsuz ilerler.",
            },
            {
                soru: "Otelimizin mermer lobisinde iz kalır mı?",
                cevap:
                    "Doğru hazırlıkla kalmaz. İç mekân işlerinde standart olarak iz bırakmayan (beyaz/gri) tekerlekli makineler kullanılır ve güzergâh boyunca, özellikle dönüş noktalarında koruyucu mat serilir. Zemin tipinizi (mermer, granit, parke) ve varsa özel bakım gerektiren bir bölge olup olmadığını önceden bildirirseniz, hazırlığı buna göre yaparız. Çalışma öncesi ve sonrası zemin durumu karşılaştırılır; bu, hem sizin hem bizim için netlik sağlar.",
            },
            {
                soru: "Belediye binasında çalışırken bir görevlinin bizimle olması mı gerekiyor?",
                cevap:
                    "Çoğu kamu binasında evet, bu standart bir uygulamadır. Bina yönetimi genellikle çalışma boyunca bir görevlinin refakat etmesini ister; bu hem güvenlik hem koordinasyon açısından faydalıdır. Refakat gereksinimi kurumdan kuruma değişebilir; talebinizi aldığımızda bina yönetimiyle bu detayı netleştirir, çalışma saatini ve refakat düzenini önceden planlarız.",
            },
            {
                soru: "Üst kattaki bir mağazada iç mekân işi yapabilir misiniz?",
                cevap:
                    "Standart platform makineleri yalnızca zemin kat işlerinde kullanılır; üst kata çıkarma, yük asansörünün genişliği yeterli olsa bile ağırlık sınırı nedeniyle çoğu zaman mümkün değildir. Üst kattaki bir işiniz varsa, o katın kendi bağımsız girişi olup olmadığını (örneğin dış cepheden ayrı bir yükleme girişi) değerlendiririz; yoksa alternatif erişim yöntemleri (örneğin daha küçük ve taşınabilir ekipman) konuşulur. Mağazanızın kat konumunu ve bina yapısını paylaşırsanız net bir değerlendirme yaparız.",
            },
            {
                soru: "Üniversite fuayesinde gündüz çalışabilir miyiz, öğrenciler rahatsız olur mu?",
                cevap:
                    "Öğrenci ve ziyaretçi yoğunluğunun düşük olduğu saatlerde (ders arası, öğle sonrası boşluklar) sınırlı bir çalışma mümkün olabilir, ancak fuaye gibi sürekli geçiş noktası olan alanlarda genellikle ders dışı saatler veya hafta sonu tercih edilir. Üniversite yönetimiyle önceden konuşup uygun bir pencere belirlemenizi öneririz; bu bilgiyi bize iletirseniz programı ona göre kurarız ve çalışma alanını basit bir bariyerle ayırarak geçişi güvenli hâle getiririz.",
            },
            {
                soru: "Küçük bir mağazayız, tek bir tavan aydınlatması değişecek; iç mekân kuralları bizim için de mi geçerli?",
                cevap:
                    "Evet, ölçek küçük olsa da temel kurallar aynıdır: kapalı hacimde akülü makine kullanılır, zemin tipine göre iz bırakmayan tekerlek ve gerekirse koruyucu mat uygulanır, çalışma genellikle kapanış sonrasına planlanır. Küçük bir işte bu hazırlık süreci de kısadır — mağazanızın zemin tipini ve kapanış saatini bildirmeniz, sahaya doğru makinenin gelmesi için yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tepebaşı'nın kamu-ticaret ağırlıklı yapılaşması kamuya açık genel bilgidir; zemin koruma yöntemi ve mekân tipine göre saat penceresi firma pratiğidir.",
    },

    "bolge:odunpazari": {
        h1: "Odunpazarı'nda Mağaza ve Küçük İşyeri İç Mekânında Platform Kiralama",
        giris:
            "Odunpazarı'nın tarihi merkezindeki mağaza ve küçük işyeri dokusu, iç mekân platform işlerine kendine özgü bir karakter katar: dükkânlar küçük, tavanlar alçak, ama zeminler çoğu zaman özenli döşenmiş (ahşap, seramik, bazı yerlerde tarihi doku korunmuş taş) ve işletme sahipleri günlük müşteri akışını kesmek istemez. Buradaki iç mekân işi, büyük bir AVM'nin gece programından farklı bir mantıkla çalışır — makine küçük, süre kısa, ama zemin ve kapı geçişi konusunda hassasiyet aynı derecede yüksektir. Bu sayfa, ilçedeki küçük ölçekli mağaza ve işyerlerinde iç mekân çalışmasının pratik kurallarını ele alır: kapıdan giriş, zemin koruma ve kapanış sonrası kısa çalışma pencereleri.",
        maddeler: [
            {
                baslik: "Dükkân kapısından geçiş: en kritik ölçü",
                metin:
                    "Odunpazarı'ndaki dükkânların çoğu, standart bir mağaza girişinden daha dar kapılara sahiptir; bazı tarihi yapılarda kapı genişliği bir metrenin altındadır. İç mekân işi talep edildiğinde ilk sorduğumuz ölçü kapının genişliği ve yüksekliğidir — bu ölçü, hangi kompakt sınıf makinenin (varsa) içeri girebileceğini belirler. Kapı çok darsa, makine yerine daha küçük ekipman veya alternatif erişim yöntemleri değerlendirilir.",
            },
            {
                baslik: "Ahşap ve tarihi zeminde koruma",
                metin:
                    "İlçenin bazı işyerlerinde orijinal ahşap döşeme veya tarihi doku korunmuş taş zemin bulunur; bu yüzeyler standart bir ticari zeminden daha hassastır ve en küçük bir çizik bile görünür hasar bırakabilir. Bu tip zeminlerde iz bırakmayan tekerlek tek başına yeterli değildir; ayrıca zemin boyunca koruyucu keçe veya kalın örtü serilir ve makinenin ağırlığının zemine tek noktadan yoğun yük bindirmemesi için yük dağıtıcı takoz kullanılabilir.",
            },
            {
                baslik: "Küçük işte kısa ve odaklı çalışma",
                metin:
                    "Odunpazarı'ndaki mağaza işleri genellikle bir-iki saati aşmaz — bir tavan aydınlatması, bir tabela, bir vitrin üstü rötuş. Bu kısalık, planlamayı basitleştirir ama nakliye bedelinin işin süresine göre orantısız kalmasına da yol açabilir; bu yüzden mümkünse komşu işyerleriyle aynı güne yazılmasını öneririz, tıpkı ilçedeki diğer küçük ölçekli hizmetlerde olduğu gibi.",
            },
            {
                baslik: "Kapanış sonrası kısa pencere",
                metin:
                    "Küçük mağazalarda çalışma saati genellikle kapanıştan sonraki bir-iki saatlik dilime sıkışır; işletme sahibi ya da bir çalışan sahada bulunur ve iş bitince makine hemen çıkarılır. Bu kısa pencerede zaman kaybetmemek için, işin ne olduğu ve gereken malzemenin (varsa) hazır olması önceden teyit edilir — pencere kısa olduğu için hazırlıksız bir gelişte iş yarım kalabilir.",
            },
            {
                baslik: "Komşu dükkânlarla ortak gün ekonomisi",
                metin:
                    "İlçenin yoğun ve küçük ölçekli esnaf dokusu, aynı sokaktaki birkaç dükkânın küçük kalemlerini aynı güne toplamayı ekonomik kılar. Bir dükkânın tavan aydınlatması, komşu dükkânın vitrin rötuşuyla aynı akşama yazıldığında makine kısa mesafelerle dükkândan dükkâna ilerler ve nakliye bedeli paylaşılır; bu, tek başına pahalı kalan küçük işleri makul bir bedele indirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Odunpazarı'nda zemin tipi ve koruma önlemi",
                paragraflar: [
                    "İlçedeki işyerlerinin zemin çeşitliliği, standart bir ticari mekândan daha geniştir; aşağıdaki tablo tipik zemin-önlem eşleşmesini gösterir.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Risk", "Önlem", "Uygun saat"],
                    satirlar: [
                        ["Orijinal ahşap döşeme", "Çizik, iz", "Koruyucu keçe + iz bırakmayan tekerlek", "Kapanış sonrası"],
                        ["Tarihi taş zemin", "Kırılma, aşınma", "Yük dağıtıcı takoz", "Kapanış sonrası"],
                        ["Standart seramik", "Çizik", "İz bırakmayan tekerlek", "Kapanış sonrası"],
                        ["Yeni parke", "Cila hasarı", "Koruyucu örtü", "Kapanış sonrası"],
                    ],
                },
            },
            {
                baslik: "Dar kapıda alternatif erişim",
                paragraflar: [
                    "Kapı ölçüsü standart en kompakt makinenin bile geçemeyeceği kadar darsa, iki seçenek değerlendirilir: dükkânın varsa arka veya yan girişinden erişim, ya da platform yerine daha küçük ve taşınabilir bir ekipmanla çalışma. Bu karar, işin gerektirdiği yükseklik ve kapsamla birlikte değerlendirilir.",
                    "Dükkânınızın kapı ölçülerini (genişlik, yükseklik) ve varsa alternatif giriş noktalarını fotoğrafla paylaşırsanız, sahaya gelmeden en uygun çözümü önerebiliriz.",
                ],
            },
            {
                baslik: "Kısa pencerede hazırlığın önemi",
                paragraflar: [
                    "Kapanış sonrası bir-iki saatlik pencerede çalışan bir iş için, malzemenin (varsa değiştirilecek armatür, tabela gibi) önceden sahada hazır olması kritik önem taşır; malzeme eksikse pencere malzeme beklemekle tükenir ve iş ertesi güne kalabilir.",
                    "İlk kiralamanızda bu detayı netleştirmenizi öneririz — hazır malzemeyle gelen bir iş, kısa pencerede rahatlıkla tamamlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dükkânımızın kapısı dar, makine hiç girer mi?",
                cevap:
                    "Kapı genişliğine bağlıdır; en kompakt sınıf makineler bir metre civarındaki kapılardan geçebilir ama tarihi yapılarda bazı kapılar bundan da dardır. Kapınızın genişlik ve yükseklik ölçüsünü paylaşırsanız net cevap veririz. Gerçekten çok darsa, varsa arka veya yan girişten erişimi değerlendiririz; hiçbiri mümkün değilse platform yerine daha küçük taşınabilir bir ekipmanla ilerleriz.",
            },
            {
                soru: "Ahşap zeminimize zarar verir misiniz?",
                cevap:
                    "Doğru hazırlıkla vermeyiz. Orijinal ahşap döşeme gibi hassas zeminlerde iz bırakmayan tekerlek yeterli değildir; ek olarak koruyucu keçe serilir ve makinenin ağırlığı yük dağıtıcı takozlarla dağıtılır. Zemin tipinizi ve varsa özellikle hassas bir bölgeyi (örneğin yeni cilalanmış kısım) önceden bildirirseniz, hazırlığı buna göre yaparız. Çalışma sonrası zemin durumu birlikte kontrol edilir.",
            },
            {
                soru: "İşimiz çok küçük, sadece bir armatür değişecek; kiralamaya değer mi?",
                cevap:
                    "Tek başına değmeyebilir ama komşu dükkânlarla birlikte değer. İlçedeki küçük ölçekli esnaf dokusunda, aynı sokaktaki birkaç dükkânın küçük kalemlerini aynı akşama toplamak nakliye bedelini böler ve her dükkân için birim maliyeti düşürür. Komşu dükkânlara haber vermenizi öneririz; talebinizi açtığınızda bize de aynı bölgede başka bir talep olup olmadığını sorabilirsiniz.",
            },
            {
                soru: "Kapanış sonrası ne kadar süremiz oluyor?",
                cevap:
                    "Genellikle bir-iki saatlik bir pencere yeterli olur, ancak bu işin kapsamına bağlıdır. Bu kısa pencerede zaman kaybetmemek için değiştirilecek malzemenin (armatür, tabela gibi) önceden sahada hazır olmasını öneririz; malzeme eksikse pencere beklemekle geçebilir ve iş ertesi güne kalabilir. Kapanış saatinizi ve tahmini iş süresini bildirirseniz, pencerenin yeterli olup olmadığını birlikte değerlendiririz.",
            },
            {
                soru: "Tarihi taş zeminli bir mekânız, özel bir önlem var mı?",
                cevap:
                    "Evet, tarihi taş zeminlerde kırılma ve aşınma riski standart seramikten daha yüksektir; bu yüzden makinenin ağırlığını geniş yüzeye yayan yük dağıtıcı takozlar kullanırız ve güzergâhı en az riskli hatta göre önceden belirleriz. Mekânınızın taş zemininin durumunu (eski, restore edilmiş, hassas bölge var mı) paylaşırsanız, hazırlığı buna göre yaparız; bazı çok hassas noktalarda çalışmayı erteleyip alternatif bir yaklaşım önerebiliriz.",
            },
            {
                soru: "Mağazamız gündüz açık, gece dışında çalışabilir miyiz?",
                cevap:
                    "Gündüz çalışmak mümkün olsa da genellikle önermeyiz; müşteri akışı hem çalışmayı yavaşlatır hem güvenlik riski oluşturur. Kapanış sonrası kısa pencere, hem sizin işletmenizi aksatmadan hem bizim işi hızlı tamamlamamızı sağlayan en pratik çözümdür. Gerçekten gündüz çalışmanız gerekiyorsa (örneğin acil bir durum), mağazanızın en sakin saatini belirleyip çalışma alanını basit bir bariyerle ayırarak ilerleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Odunpazarı'nın tarihi merkez dokusu ve küçük ölçekli esnaf yapısı kamuya açık genel bilgidir; zemin koruma yöntemi ve kısa pencere hazırlığı firma pratiğidir.",
    },

    "bolge:sehir-merkezi": {
        h1: "Eskişehir Şehir Merkezinde Mağaza, Otel ve Kamu Binası İç Mekânında Platform Kiralama",
        giris:
            "Eskişehir şehir merkezi, Odunpazarı ve Tepebaşı'nın kesiştiği ticaret ve hizmet omurgasını kapsar; büyük mağaza zincirleri, oteller, banka şubeleri ve kamu hizmet binaları bu hatta yoğunlaşır. Şehir merkezinde iç mekân platform işinin belirleyici özelliği, gün boyu kesintisiz insan akışıdır — bir banka şubesi, bir mağaza veya bir otel resepsiyonu, günün hiçbir saatinde tamamen boş kalmaz. Bu, çalışmanın neredeyse istisnasız mesai dışı saatlere sıkışması anlamına gelir ve aynı zamanda merkezdeki yapıların genellikle özenli iç mekân malzemeleri (mermer, granit, özel kaplamalı duvar) kullanması nedeniyle zemin ve yüzey koruma önlemlerinin standart bir adım olmasını gerektirir. Bu sayfa, şehir merkezindeki iç mekân işlerinin genel çerçevesini — saat planı, zemin koruma ve bina yönetimiyle koordinasyon — ele alır.",
        maddeler: [
            {
                baslik: "Merkezde mesai dışı çalışmanın zorunluluğu",
                metin:
                    "Şehir merkezindeki mağaza, banka ve otel gibi işletmelerde gün içi müşteri akışı neredeyse hiç durmaz; bu yüzden iç mekân çalışması istisnasız kapanış sonrası veya açılış öncesi saatlere planlanır. Bazı işletmelerde (örneğin 7/24 açık bir mağaza) bu pencere daha da daralır ve çalışma, müşteri sayısının en düşük olduğu gece yarısı sonrası saatlere kayar. Talebinizi aldığımızda işletmenizin çalışma saatlerini ve en sakin dilimini sorarak programı buna göre kurarız.",
            },
            {
                baslik: "Banka şubesi ve güvenlik hassasiyeti",
                metin:
                    "Banka şubeleri gibi güvenlik seviyesi yüksek mekânlarda, makine ve operatör girişi genellikle şube güvenlik protokolüne tabidir — kimlik kontrolü, güvenlik kamerası kaydı ve bazen şube müdürünün onayı gerekir. Bu adımları teklif aşamasında netleştiriyoruz ki mesai dışı kısa pencerede zaman kaybı yaşanmasın; şubenin güvenlik prosedürünü önceden bilmek, çalışmanın pencereye tam oturmasını sağlar.",
            },
            {
                baslik: "Özenli iç mekân malzemesinde koruma standardı",
                metin:
                    "Merkezdeki büyük mağaza ve otellerin çoğu, mermer zemin, ahşap kaplama duvar veya özel aydınlatma sistemleriyle donatılmıştır; bu malzemeler standart bir depo veya atölyeden çok daha hassastır. İç mekân işlerimizde bu yüzden iz bırakmayan tekerlek ve koruyucu örtü standart bir adımdır, tercih değil; her iç mekân talebinde bu hazırlık otomatik olarak devreye girer.",
            },
            {
                baslik: "Bina yönetimiyle giriş-çıkış koordinasyonu",
                metin:
                    "Şehir merkezindeki büyük binaların çoğunda ortak kullanım alanları (asansör holü, ana giriş, yük rampası) bir bina yönetimi tarafından denetlenir. Bu binalarda platform çalışması, yalnızca ilgili mağaza veya ofisle değil bina yönetimiyle de koordine edilir — giriş saati, kullanılacak asansör veya rampa ve varsa ek güvenlik kaydı önceden netleştirilir.",
            },
            {
                baslik: "Kısa pencerede öncelik sıralaması",
                metin:
                    "Merkezdeki iç mekân işlerinin pencere süresi genellikle sınırlı olduğundan, birden fazla kalem varsa bunları önem sırasına göre diziyoruz — en kritik veya en görünür kalem önce yapılır, pencere yeterse ikincil kalemlere geçilir. Bu, pencerenin beklenmedik şekilde kısalması durumunda en önemli işin tamamlanmış olmasını garanti eder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezde işletme tipine göre pencere ve önlem",
                paragraflar: [
                    "Şehir merkezindeki farklı işletme tiplerinde çalışma penceresi ve gereken önlem aşağıdaki gibi değişir.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Uygun pencere", "Zemin önlemi", "Ek koordinasyon"],
                    satirlar: [
                        ["Büyük mağaza (standart saatli)", "Kapanış sonrası", "İz bırakmayan tekerlek", "Mağaza yönetimi"],
                        ["7/24 mağaza", "Gece yarısı sonrası", "İz bırakmayan tekerlek", "Vardiya ekibi"],
                        ["Banka şubesi", "Kapanış sonrası", "Koruyucu örtü", "Güvenlik protokolü"],
                        ["Otel resepsiyon/lobi", "Gece/sabah erken", "Koruyucu mat", "Resepsiyon bilgisi"],
                        ["Kamu hizmet binası", "Mesai dışı", "Standart", "Bina yönetimi"],
                    ],
                },
            },
            {
                baslik: "Bina yönetimiyle ilk temasın önemi",
                paragraflar: [
                    "Büyük binalardaki iç mekân işlerinde, yalnızca hizmet aldığınız mağaza veya ofisle değil bina yönetimiyle de erken temas kurmanızı öneririz; çünkü ortak alan kullanımı (asansör, ana giriş, yük rampası) çoğu zaman bina yönetiminin onayına tabidir.",
                    "Bina yönetimiyle erken kurulan bir koordinasyon, çalışma gününde beklenmedik bir 'giriş izni yok' sürprizini önler. Bu koordinasyonu sizin adınıza da yürütebiliriz; bina yönetiminin iletişim bilgisini paylaşmanız yeterlidir.",
                ],
            },
            {
                baslik: "Pencere kısaldığında öncelik nasıl belirlenir",
                paragraflar: [
                    "Bazen kapanış saatinde beklenmedik bir gecikme (örneğin son müşterinin geç ayrılması) pencereyi kısaltabilir. Bu ihtimale karşı, birden fazla kalemi olan işlerde önceden bir öncelik sırası belirliyoruz — hangi kalem mutlaka o gece bitmeli, hangisi ertelenebilir.",
                    "Bu sıralama, işletme sahibiyle birlikte teklif aşamasında yapılır; pencere daralırsa program otomatik olarak en kritik kaleme odaklanır ve gereksiz bir yarım iş bırakılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mağazamız kapanış sonrası bir saat içinde çalışmamız gerekiyor, yeter mi?",
                cevap:
                    "İşin kapsamına bağlıdır ama çoğu tek kalemlik iş (bir aydınlatma armatürü, bir tabela noktası) bir saatlik pencereye rahatlıkla sığar. Birden fazla kaleminiz varsa, önceden bir öncelik sırası belirleriz — pencere yetmezse en kritik kalem tamamlanmış olur, kalanı bir sonraki geceye planlanır. Kapanış saatinizi ve kalem listenizi paylaşırsanız, pencerenin yeterli olup olmadığını netleştiririz.",
            },
            {
                soru: "Banka şubemizde çalışacaksınız, güvenlik açısından ne gerekiyor?",
                cevap:
                    "Çoğu şubede operatör kimlik bilgisi ve bazen şube müdürünün onayı istenir; bazı şubelerde güvenlik kamerası kaydı veya ek bir prosedür de uygulanabilir. Bu bilgileri teklif aşamasında sizden ve şubenizin güvenlik biriminden alıp önceden netleştiriyoruz; böylece kapanış sonrası kısa pencerede güvenlik kontrolüyle zaman kaybetmezsiniz. Şubenizin kendine özgü bir prosedürü varsa, bunu erken paylaşmanız süreci hızlandırır.",
            },
            {
                soru: "Otelimizin lobisi mermer, hangi saatte çalışırsınız?",
                cevap:
                    "Lobi gibi sürekli kullanılan alanlarda genellikle gece veya sabahın çok erken saatleri tercih edilir; misafir yoğunluğunun en düşük olduğu dilim otelinizin kendi doluluk durumuna göre değişir. Mermer zemin için iz bırakmayan tekerlek ve koruyucu mat standart önlemimizdir. Otelinizin sakin saatlerini ve lobi kullanım yoğunluğunu bildirirseniz, en uygun pencereyi birlikte belirleriz.",
            },
            {
                soru: "Bina yönetimiyle biz mi konuşmalıyız, siz mi?",
                cevap:
                    "İkisi de mümkündür ama erken temas önemlidir. Büyük binalarda ortak alan kullanımı (asansör, ana giriş, yük rampası) genellikle bina yönetiminin onayına tabidir; bu koordinasyonu sizin adınıza yürütebiliriz, bina yönetiminin iletişim bilgisini paylaşmanız yeterlidir. Siz de doğrudan konuşabilirsiniz; hangisi daha hızlı sonuç verecekse onu tercih edin, önemli olan çalışma gününden önce onayın alınmış olmasıdır.",
            },
            {
                soru: "7/24 açık bir mağazayız, hiç sakin saatimiz yok gibi görünüyor, ne yapmalıyız?",
                cevap:
                    "Tamamen sakin bir saat olmasa da, çoğu 7/24 mağazada gece yarısı sonrası (genellikle 01:00-05:00 bandı) müşteri sayısı belirgin şekilde düşer. Bu dilimi vardiya ekibinizle birlikte belirleyip çalışmayı buna göre planlarız. Gerçekten hiçbir dilim uygun değilse, işi birkaç geceye bölerek her seferinde kısa bir kalemi tamamlamayı da değerlendirebiliriz.",
            },
            {
                soru: "Kamu binasında hem bizim onayımız hem üst kurumun onayı mı gerekiyor?",
                cevap:
                    "Bazı kamu binalarında evet, iki kademeli onay uygulanabilir — bina yönetimi ve varsa bağlı olduğu üst kurum. Bu durumu ilk temas anında netleştiririz; hangi onayların gerektiğini bina yönetiminden öğrenip süreci başlatırız. İki kademeli onay süreci standart tek kademeli bir onaya göre daha uzun sürebilir, bu yüzden kamu binası taleplerinde erken başvuru özellikle önemlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir şehir merkezinin ticaret-hizmet yoğunluğu kamuya açık genel bilgidir; öncelik sıralaması ve bina yönetimi koordinasyonu firma pratiğidir.",
    },

    "bolge:cifteler": {
        h1: "Çifteler'de Kamu Binası ve İşletme İç Mekânında Platform Kiralama",
        giris:
            "Çifteler, Eskişehir'in tarım ve hayvancılık ağırlıklı ilçelerinden biridir ve iç mekân platform talebi büyük ölçüde ilçe merkezindeki kamu hizmet binaları, birkaç ticaret işletmesi ve tarımsal kooperatif ofislerinden gelir. Şehir merkezine göre daha küçük ölçekli bir talep hacmi olsa da, kuralların özü aynıdır: kapalı hacimde egzozsuz makine, hassas zeminde koruma ve mesai dışı çalışma önceliği. İlçenin kendine özgü tarafı, talep sayısının azlığı nedeniyle her işin genellikle Eskişehir merkezinden planlanan bir sevkiyatla karşılanmasıdır; bu da tarih esnekliğinin burada özellikle değerli olduğu anlamına gelir. Bu sayfa, Çifteler'deki iç mekân işlerinin bu iki özelliğini — küçük ölçekli talep ve merkeze bağımlı sevkiyat — ele alır.",
        maddeler: [
            {
                baslik: "İlçe merkezindeki kamu binası talepleri",
                metin:
                    "Çifteler'deki iç mekân taleplerinin önemli bir kısmı, kaymakamlık, belediye hizmet binası veya ilçe millî eğitim müdürlüğü gibi kamu binalarının fuaye ve salon aydınlatmalarından gelir. Bu binalarda çalışma genellikle mesai dışı bir pencereye planlanır ve bina yönetiminden önceden bilgi alınır; ilçe ölçeğinde bu süreç genellikle şehir merkezindeki büyük kurumlara göre daha hızlı netleşir çünkü muhatap sayısı azdır.",
            },
            {
                baslik: "Kooperatif ve ticaret ofislerinde standart iç mekân işi",
                metin:
                    "İlçedeki tarımsal kooperatif ofisleri ve birkaç ticaret işletmesi, standart bir kent içi iç mekân işinden farklı değildir — tavan aydınlatması, klima üstü kanal bakımı gibi kalemler talep edilir. Bu işlerde zemin genellikle standart seramik veya beton olduğundan özel bir koruma gerekmez, ancak yine de akülü ekipman zorunluluğu ve mesai dışı tercih geçerlidir.",
            },
            {
                baslik: "Merkeze bağımlı sevkiyatın süre gerçeği",
                metin:
                    "Çifteler'deki talep hacmi, Eskişehir merkezine göre düşük olduğundan, ilçede sürekli bekleyen bir makine bulundurmuyoruz; her talep, merkezden planlanan bir sevkiyatla karşılanır. Bu, aynı gün müdahale beklentisini çoğu durumda gerçekçi kılmaz; sevkiyat süresi karayolu mesafesine bağlı olarak bir saat civarındadır ve talep anında net söylenir.",
            },
            {
                baslik: "Tarih esnekliğinin ilçede özel değeri",
                metin:
                    "Talep hacminin düşük olduğu bir ilçede, tarihini esnetebilen bir müşteri bizim için özellikle değerlidir çünkü sevkiyatı başka bir ilçe veya bölge talebine yakın bir tarihe denk getirebiliriz. Bu, hem bizim için hem müşteri için nakliye maliyetini paylaştırma fırsatı doğurur. Sabit tarihli acil bir ihtiyaçta da hizmet veririz, ancak bu durumda tekil sevkiyat bedeli teklife ayrı bir kalem olarak yansır.",
            },
            {
                baslik: "Küçük iş listesini tek ziyarette toplama",
                metin:
                    "İlçedeki bir kurum veya işletmenin birden fazla küçük kalemi varsa (birkaç oda aydınlatması, bir salon işi), bunları tek bir ziyarette toplu olarak yapmayı öneririz. Merkezden gelen bir sevkiyatın maliyeti, tek bir küçük iş için de tüm kalemler için de aynıdır; kalemleri biriktirip tek seferde hallettirmek toplam maliyeti belirgin düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çifteler'de kurum/işletme tipi ve tipik yaklaşım",
                paragraflar: [
                    "İlçedeki talep profili aşağıdaki gibi özetlenebilir.",
                ],
                tablo: {
                    basliklar: ["Kurum/işletme tipi", "Tipik kalem", "Zemin", "Uygun pencere"],
                    satirlar: [
                        ["Kamu hizmet binası", "Fuaye/salon aydınlatması", "Standart seramik", "Mesai dışı"],
                        ["Kooperatif ofisi", "Tavan, klima kanalı", "Beton/seramik", "Esnek"],
                        ["Küçük ticaret işletmesi", "Tabela, aydınlatma", "Standart", "Kapanış sonrası"],
                        ["Eğitim kurumu", "Salon/koridor", "Seramik", "Ders dışı/hafta sonu"],
                    ],
                },
            },
            {
                baslik: "Sevkiyatı planlarken tarih esnekliğinin faydası",
                paragraflar: [
                    "Çifteler'e yönelik bir talep geldiğinde, önce merkezden veya yakın bir bölgeden planlanmış bir sevkiyat olup olmadığına bakarız. Tarihinizi esnek bırakırsanız, bu mevcut sevkiyata talebinizi ekleyerek nakliye maliyetini paylaştırabiliriz; bu genellikle en ekonomik seçenektir.",
                    "Sabit tarihli bir ihtiyacınız varsa da karşılarız; bu durumda tam sevkiyat bedelinin ayrı bir kalem olarak teklife yansıyacağını baştan söyleriz, böylece sürpriz yaşanmaz.",
                ],
            },
            {
                baslik: "Birden fazla kalemi tek ziyarette toplamak",
                paragraflar: [
                    "İlçedeki bir kurumun (örneğin kaymakamlık binası) birden fazla odada veya salonda küçük kalemleri varsa, bunları tek bir listede toplayıp tek ziyarette tamamlamayı öneririz. Bu yaklaşım, her kalem için ayrı ayrı sevkiyat planlamaktan belirgin şekilde daha ekonomiktir.",
                    "Kalem listenizi ve tercih ettiğiniz tarih aralığını paylaşırsanız, en uygun sevkiyat penceresini bulup size bildiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çifteler'de aynı gün makine gelir mi?",
                cevap:
                    "Bölgede o an çalışan bir makinemiz varsa mümkündür, ancak ilçedeki talep hacmi düşük olduğu için genellikle sürekli bekleyen bir makinemiz olmaz; her talep merkezden planlanan bir sevkiyatla karşılanır ve bu, karayolu mesafesine bağlı olarak yaklaşık bir saat sürer. Aciliyetin gerçek derecesini ve konumunuzu paylaşırsanız, en gerçekçi süreyi hemen söyleriz.",
            },
            {
                soru: "Kaymakamlık binasında çalışma için kimden izin almalıyız?",
                cevap:
                    "Bina yönetimi veya idari işler biriminden izin alınması gerekir; ilçe ölçeğinde bu süreç genellikle şehir merkezindeki büyük kurumlara göre daha hızlı netleşir çünkü muhatap sayısı azdır. Çalışma genellikle mesai dışı bir pencereye planlanır. İzin sürecini sizin adınıza da takip edebiliriz; bina yönetiminin iletişim bilgisini paylaşmanız yeterlidir.",
            },
            {
                soru: "Tek bir kalem için sevkiyat pahalı geliyor, ne yapabiliriz?",
                cevap:
                    "İki seçenek var: tarihinizi esnek bırakıp mevcut bir sevkiyata eklenmek, ya da varsa kurumunuzdaki diğer küçük kalemleri de aynı listeye toplayıp tek ziyarette tamamlamak. İkisi de nakliye maliyetini birim iş başına düşürür. Kalem listenizi ve tarih esnekliğinizi paylaşırsanız, en ekonomik seçeneği birlikte belirleriz.",
            },
            {
                soru: "Kooperatif ofisimizde zemin standart seramik, özel bir önlem gerekir mi?",
                cevap:
                    "Standart seramik zeminlerde özel bir koruma önlemi genellikle gerekmez; yine de akülü ekipman kullanımı (kapalı hacim nedeniyle) ve mümkünse mesai dışı çalışma tercih edilir. Zemininizin durumu ve varsa hassas bir bölge (örneğin yeni döşenmiş bir kısım) hakkında bilgi paylaşırsanız, gerekiyorsa ek önlem alırız.",
            },
            {
                soru: "İlçede birden fazla kurumun işini aynı güne toplayabilir misiniz?",
                cevap:
                    "Evet, bunu aktif olarak öneririz. İlçedeki farklı kurum veya işletmelerin taleplerini aynı sevkiyata denk getirdiğimizde, nakliye maliyeti paylaşılır ve her taraf için birim maliyet düşer. Talebinizi açarken bize ilçede başka bir talep olup olmadığını sorabilir, ya da komşu kurum/işletmelere kendiniz haber verebilirsiniz.",
            },
            {
                soru: "Eğitim kurumumuzda hafta sonu çalışma mümkün mü?",
                cevap:
                    "Mümkündür ve genellikle tercih ettiğimiz pencerelerden biridir; öğrenci ve personel yoğunluğunun olmadığı hafta sonu, kurumsal iç mekân işleri için idealdir. Kurumunuzun hafta sonu bina erişim kuralını (kimin anahtar/kart yetkisi var) önceden netleştirmeniz, çalışma gününde bir aksaklık yaşanmamasını sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çifteler'in tarım ağırlıklı ilçe yapısı ve kamu binası dokusu kamuya açık genel bilgidir; merkeze bağımlı sevkiyat ve kalem birleştirme yöntemi firma pratiğidir.",
    },

    "bolge:alpu": {
        h1: "Alpu'da Kamu Binası ve İşletme İç Mekânında Platform Kiralama",
        giris:
            "Alpu, Eskişehir merkezine yakın konumu ve karma tarım-küçük sanayi yapısıyla, iç mekân platform talebi açısından Çifteler'e benzer ama merkeze daha yakın olması nedeniyle biraz farklı bir profil taşır. İlçedeki talepler büyük ölçüde belediye hizmet binası, birkaç ticaret işletmesi ve okul gibi kamu yapılarından gelir; merkeze yakınlık, sevkiyat süresini kısaltır ve tarih esnekliği daha az kritik hâle gelir. Bu sayfa, Alpu'daki iç mekân işlerinin temel kurallarını — kapalı hacim ekipman zorunluluğu, zemin koruma ve mesai dışı pencere — ilçenin merkeze yakınlığı bağlamında ele alır.",
        maddeler: [
            {
                baslik: "Merkeze yakınlığın sevkiyat avantajı",
                metin:
                    "Alpu'nun Eskişehir merkezine yakın konumu, sevkiyat süresini bölgedeki diğer bazı ilçelere göre kısaltır; genellikle yarım saat ile bir saat arasında bir sürede makine sahaya ulaşabilir. Bu, aynı gün içinde talep edilen bir işin de büyük ölçüde karşılanabileceği anlamına gelir, ancak filo müsaitliği yine de belirleyicidir.",
            },
            {
                baslik: "Belediye binasında standart iç mekân disiplini",
                metin:
                    "İlçe belediye binasının fuaye ve salon işlerinde, diğer kamu binalarında uyguladığımız standart kurallar geçerlidir: akülü ekipman, mesai dışı çalışma tercih edilir ve bina yönetiminden önceden bilgi alınır. İlçe ölçeğinde bu süreç genellikle hızlı ilerler çünkü muhatap sayısı sınırlıdır.",
            },
            {
                baslik: "Okul binalarında öğrenci güvenliği önceliği",
                metin:
                    "İlçedeki okul binalarında iç mekân çalışması, öğrenci güvenliğini önceliklendiren bir programla yürütülür — ders saatleri dışında, mümkünse hafta sonu veya tatil dönemlerinde planlanır. Okul yönetiminden alınacak onay, çalışma tarihini ve saatini önceden netleştirir; bu, öğrencilerin çalışma alanına erişiminin tamamen engellenmesini sağlar.",
            },
            {
                baslik: "Küçük ticaret işletmelerinde standart zemin",
                metin:
                    "Alpu'daki ticaret işletmelerinin zemini genellikle standart seramik veya betondur, özel koruma gerektiren hassas malzemeler nadir görülür. Buna rağmen kapalı hacim kuralı (akülü ekipman zorunluluğu) her zaman geçerlidir ve çalışma, işletmenin kapanış saatinden sonrasına planlanır.",
            },
            {
                baslik: "Tarım işletmelerinin kendi ofis-idari binaları",
                metin:
                    "İlçedeki bazı tarım ve gıda işletmelerinin idari bina veya ofis kısımları, üretim alanından ayrı bir iç mekân işi olarak değerlendirilir — bu binalarda standart ofis aydınlatması ve toplantı salonu işleri talep edilir. Üretim alanındaki sanayi tipi işlerden farklı olarak, bu ofis kısımları kent içi iç mekân kurallarına tabidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Alpu'da kurum tipine göre pencere ve süreç",
                paragraflar: [
                    "İlçedeki farklı kurum tiplerinde çalışma penceresi ve süreç aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["Kurum/işletme tipi", "Uygun pencere", "Onay süreci", "Zemin"],
                    satirlar: [
                        ["Belediye binası", "Mesai dışı", "Bina yönetimi", "Standart"],
                        ["Okul", "Hafta sonu/tatil", "Okul yönetimi", "Seramik"],
                        ["Ticaret işletmesi", "Kapanış sonrası", "İşletme sahibi", "Standart"],
                        ["Tarım işletmesi (ofis)", "Mesai dışı", "İşletme yönetimi", "Standart"],
                    ],
                },
            },
            {
                baslik: "Merkeze yakınlığı avantaja çevirmek",
                paragraflar: [
                    "Alpu'nun merkeze yakın konumu, hem hızlı sevkiyat hem de merkezdeki diğer taleplerle koordinasyon imkânı sunar. Merkezde o gün planlanmış bir sevkiyat varsa, Alpu'daki talebinizi aynı güzergâha ekleyerek hem hızlı hem ekonomik bir çözüm sunabiliriz.",
                    "Tarihinizi esnek bırakmanız bu koordinasyonu kolaylaştırır, ancak Alpu'nun mesafesi kısa olduğu için sabit tarihli taleplerde de büyük bir maliyet farkı oluşmaz.",
                ],
            },
            {
                baslik: "Okul döneminde planlama",
                paragraflar: [
                    "Okul binalarındaki iç mekân işleri için en uygun dönem, öğrencilerin bina içinde olmadığı hafta sonu veya resmi tatil günleridir. Ders dönemi içinde acil bir ihtiyaç varsa, ders saatleri dışındaki dar bir pencerede (örneğin okul çıkışı sonrası) çalışılabilir, ancak bu daha kısıtlı bir programdır.",
                    "Okul yönetimiyle dönem başında (örneğin yaz tatili öncesi) yıllık bakım kalemlerini konuşmak, tatil dönemine geniş bir program yerleştirmeyi mümkün kılar ve ders dönemi içindeki acil ihtiyaçları azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Alpu merkeze yakın, aynı gün makine gelebilir mi?",
                cevap:
                    "Genellikle evet, merkeze yakınlığı sevkiyat süresini kısaltır ve çoğu zaman yarım saat ile bir saat arasında makine sahaya ulaşabilir. Ancak bu, filomuzun o an müsait olmasına bağlıdır; talebinizi ilettiğinizde net bir süre söyleriz. Acil bir ihtiyacınız varsa bunu belirtin, önceliklendirmeye çalışırız.",
            },
            {
                soru: "Okulumuzda ders döneminde acil bir iş çıktı, ne yapmalıyız?",
                cevap:
                    "Ders saatleri dışındaki dar bir pencerede (örneğin okul çıkışından sonra) çalışabiliriz, ancak bu daha kısıtlı bir programdır ve öğrenci güvenliği önceliklidir. Mümkünse büyük kapsamlı işleri hafta sonuna veya tatil dönemine ertelemenizi öneririz; acil ve küçük bir kalemse dar pencerede de tamamlanabilir. Okul yönetiminizle konuşup uygun bir dar pencere belirlerseniz, biz de programı buna göre kurarız.",
            },
            {
                soru: "Belediye binasında izin almak ne kadar sürer?",
                cevap:
                    "İlçe ölçeğinde bu süreç genellikle hızlı ilerler çünkü muhatap sayısı sınırlıdır; bina yönetimiyle birkaç gün içinde netleşen bir onay süreci beklenebilir. Kesin süre binanın kendi prosedürüne bağlıdır. Talebinizi erken iletmeniz, hem izin sürecinin hem sevkiyat planlamasının rahat ilerlemesini sağlar.",
            },
            {
                soru: "Tarım işletmemizin ofis kısmında bir iş var, üretim alanındaki kurallar mı geçerli?",
                cevap:
                    "Hayır, ofis ve idari bina kısımları üretim alanından ayrı değerlendirilir ve kent içi iç mekân kurallarına tabidir — akülü ekipman, mesai dışı tercih ve standart zemin önlemi. Üretim alanındaki sanayi tipi kısıtlar (toz, ekipman komşuluğu gibi) ofis kısmı için geçerli değildir. Hangi bölümde çalışılacağını belirtirseniz, doğru kural setini uygularız.",
            },
            {
                soru: "Ticaret işletmemizde zemin standart, ekstra bir önlem gerekiyor mu?",
                cevap:
                    "Standart seramik veya beton zeminlerde ekstra bir koruma önlemi genellikle gerekmez; temel kural olan akülü ekipman kullanımı (kapalı hacim nedeniyle) ve kapanış sonrası çalışma tercihi yeterlidir. Zemininizde özel bir durum (örneğin yeni döşeme) varsa bildirin, gerekirse ek önlem alırız.",
            },
            {
                soru: "Yıllık bakım kalemlerimizi tatil dönemine nasıl planlarız?",
                cevap:
                    "Dönem başında (örneğin yaz tatili öncesi) bizimle iletişime geçip yıllık kalem listenizi paylaşmanızı öneririz; bu, tatil dönemine geniş kapsamlı bir program yerleştirmemizi ve ders dönemi içindeki acil ihtiyaçları azaltmamızı sağlar. Okul yönetiminizle birlikte hazırlayacağınız bu liste, hem bütçe planlamanızı hem bizim sevkiyat programımızı kolaylaştırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Alpu'nun merkeze yakın konumu ve karma tarım-ticaret yapısı kamuya açık genel bilgidir; okul dönemi planlaması ve merkez sevkiyat koordinasyonu firma pratiğidir.",
    },

    "bolge:eskisehir-2-osb": {
        h1: "Eskişehir 2. OSB İdari Binalarında ve Ofis İç Mekânında Platform Kiralama",
        giris:
            "Eskişehir 2. OSB, üretim holleriyle birlikte her tesisin idari bina, ofis ve bazen ziyaretçi karşılama alanlarını da barındırır; bu iç mekân kısımları, aynı tesisin üretim alanından tamamen farklı bir hizmet mantığıyla ele alınır. Üretim holünde toz, vinç trafiği ve saha güvenlik prosedürü öne çıkarken, idari binanın fuaye salonu, toplantı odaları ve ofis koridorlarında kent içi bir mağaza veya ofisten farksız kurallar geçerlidir: egzozsuz akülü ekipman, hassas zemin koruması (çoğu idari bina lobisinde granit veya laminat parke bulunur) ve mesai saatleri dışında çalışma tercihi. Bu sayfa, 2. OSB'deki tesislerin idari-ofis bölümlerine özgü iç mekân hizmetini ele alır.",
        maddeler: [
            {
                baslik: "Üretim holü ile idari bina arasındaki kural farkı",
                metin:
                    "Aynı tesis içinde iki farklı hizmet rejimi uygulanır: üretim holünde saha güvenlik prosedürü, toz ve ekipman komşuluğu öne çıkarken, idari binada zemin koruma ve mesai dışı çalışma önceliklidir. Bir tesisten hem üretim holü hem idari bina için talep geldiğinde, ikisini ayrı ayrı değerlendirip tek teklifte birleştiririz; her bölüm kendi kuralına göre planlanır.",
            },
            {
                baslik: "İdari bina lobisinde zemin koruma",
                metin:
                    "2. OSB'deki yeni tesislerin idari binalarında granit, mermer taklidi seramik veya laminat parke sık kullanılır. Bu zeminlerde iz bırakmayan tekerlek ve koruyucu örtü, üretim holündeki standart beton zeminden farklı bir hazırlık gerektirir. Tesisin idari binasına gireceğimiz zaman, zemin tipini önceden sorup hazırlığı buna göre yaparız.",
            },
            {
                baslik: "Toplantı salonu ve fuayede mesai dışı tercih",
                metin:
                    "İdari bina içindeki toplantı salonları ve fuaye alanları, mesai saatleri boyunca yoğun kullanılır; bu yüzden çalışma genellikle mesai bitiminden sonraya veya hafta sonuna planlanır. Tesisin idari personel yoğunluğunun düştüğü saat, üretim vardiyalarından bağımsız olarak belirlenir çünkü ofis çalışanlarının mesai saati genellikle üretim vardiyasından farklıdır.",
            },
            {
                baslik: "Ziyaretçi karşılama alanında görünürlük hassasiyeti",
                metin:
                    "Bazı tesislerin idari binalarında müşteri veya denetçi ziyaretlerine ayrılmış özel bir karşılama alanı bulunur; bu alanlarda çalışma, tesisin ziyaret takvimiyle çakışmayacak şekilde planlanır. Tesis yönetiminden ziyaret takvimini önceden öğrenmek, bu tip alanlardaki çalışmayı doğru güne yerleştirmemizi sağlar.",
            },
            {
                baslik: "Aynı sevkiyatta iki farklı iş listesi",
                metin:
                    "Bir tesisin hem üretim holünde hem idari binasında iş varsa, bunları tek bir sevkiyatta birleştirmeyi öneririz — makine önce üretim holündeki işleri (saha kurallarına göre) tamamlar, ardından mesai bitiminde idari binaya geçip iç mekân işlerini (zemin koruma kurallarına göre) yapar. Bu, tek nakliye bedeliyle iki farklı kural setinin uygulanmasını mümkün kılar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "2. OSB'de bölüm tipine göre kural seti",
                paragraflar: [
                    "Aynı tesis içindeki farklı bölümlerde uygulanan kurallar aşağıdaki gibi özetlenebilir.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Zemin", "Öncelikli kural", "Uygun saat"],
                    satirlar: [
                        ["Üretim holü", "Beton", "Saha güvenlik prosedürü", "Vardiya programına göre"],
                        ["İdari bina lobisi", "Granit/laminat", "Zemin koruma", "Mesai dışı"],
                        ["Toplantı salonu", "Halı/parke", "Sessizlik", "Mesai dışı"],
                        ["Ziyaretçi karşılama alanı", "Değişken", "Ziyaret takvimiyle uyum", "Ziyaret dışı gün"],
                    ],
                },
            },
            {
                baslik: "İki bölümü tek ziyarette birleştirmek",
                paragraflar: [
                    "Hem üretim holünde hem idari binada işi olan tesisler için, tek bir günde iki farklı programı art arda kurarız: gündüz üretim holünde saha kurallarına göre çalışma, mesai bitiminde idari binada zemin koruma kurallarına göre çalışma. Bu, tek sevkiyat bedeliyle iki farklı bölümün ihtiyacını karşılar.",
                    "Bu birleşik programın kurulabilmesi için, her iki bölümün kalem listesinin ve tesisin vardiya-mesai saatlerinin önceden bilinmesi gerekir; bu bilgiyi teklif aşamasında topluyoruz.",
                ],
            },
            {
                baslik: "Ziyaret takvimiyle çakışmayı önlemek",
                paragraflar: [
                    "Müşteri veya denetçi ziyareti alan tesislerde, idari bina veya karşılama alanındaki bir çalışmanın ziyaret gününe denk gelmesi istenmeyen bir durumdur. Tesis yönetiminden ziyaret takvimini öğrenip çalışmayı bu günlerin dışına planlıyoruz.",
                    "Ziyaret takvimi değişkense, tesisle birlikte esnek bir pencere (örneğin 'şu iki hafta içinde, ziyaret olmayan bir gün') belirleyip bu pencere içinde en uygun günü kendimiz seçiyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hem üretim holümüzde hem idari binamızda iş var, tek teklifte mi değerlendirirsiniz?",
                cevap:
                    "Evet, iki bölümü ayrı ayrı değerlendirip tek teklifte birleştiririz. Üretim holü saha güvenlik prosedürüne (evrak, iş izni) göre, idari bina ise zemin koruma ve mesai dışı çalışma kurallarına göre planlanır. Mümkünse aynı sevkiyatta, önce üretim holünde gündüz, sonra idari binada mesai bitiminde çalışarak tek nakliye bedeliyle iki işi tamamlarız.",
            },
            {
                soru: "İdari binamızın lobisi granit, hangi önlemi alıyorsunuz?",
                cevap:
                    "Granit ve benzeri sert-parlak zeminlerde iz bırakmayan tekerlek ve koruyucu örtü standart uygulamamızdır; bu, üretim holündeki beton zeminden farklı bir hazırlık gerektirir. Lobinizin zemin tipini ve varsa özellikle hassas bir bölgeyi önceden bildirirseniz, hazırlığı buna göre yaparız ve çalışma sonrası zemin durumunu birlikte kontrol ederiz.",
            },
            {
                soru: "Toplantı salonumuzda mesai saatinde çalışma mümkün mü?",
                cevap:
                    "Mümkün ama önermeyiz; toplantı salonları mesai boyunca yoğun kullanılır ve çalışma hem toplantıları aksatır hem gürültü nedeniyle rahatsız edici olabilir. Mesai bitiminden sonrası veya hafta sonu, hem daha hızlı hem daha az kesintili bir çalışma sağlar. Ofis personelinizin mesai saatini bildirirseniz, en uygun mesai dışı pencereyi belirleriz.",
            },
            {
                soru: "Tesisimize önemli bir ziyaret var, o hafta çalışmayı erteler misiniz?",
                cevap:
                    "Evet, ziyaret takviminizi bildirirseniz çalışmayı o günlerin dışına planlarız; özellikle idari bina ve ziyaretçi karşılama alanı gibi görünür bölgelerde bu önemlidir. Ziyaret takviminiz değişkense, birlikte esnek bir pencere (örneğin belirli bir hafta içinde ziyaret olmayan bir gün) belirleyip bu pencere içinde en uygun günü seçeriz.",
            },
            {
                soru: "Üretim holü ile idari bina için ayrı ayrı mı sevkiyat ödüyoruz?",
                cevap:
                    "Gerekmez, mümkünse tek sevkiyatta birleştiririz. Makine gün içinde önce üretim holündeki işleri saha kurallarına göre tamamlar, mesai bitiminde idari binaya geçip zemin koruma kurallarına göre iç mekân işlerini yapar. Bu, tek nakliye bedeliyle iki farklı bölümün ihtiyacını karşılamamızı sağlar ve toplam maliyeti belirgin düşürür.",
            },
            {
                soru: "Ofis çalışanlarımızın mesai saati üretim vardiyasından farklı, bu bir sorun mu?",
                cevap:
                    "Hayır, tam tersine planlamayı kolaylaştırır. İdari bina çalışmasını ofis personelinin mesai saatine göre, üretim holü çalışmasını ise vardiya programına göre ayrı ayrı planlarız; iki saat farklı olduğu için genellikle bir çakışma yaşanmaz. Her iki grubun mesai/vardiya saatini bildirirseniz, iki bölüm için de uygun pencereleri netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir 2. OSB'deki tesislerin idari-ofis yapılanması kamuya açık genel bilgidir; iki bölüm birleşik sevkiyat modeli ve ziyaret takvimi koordinasyonu firma pratiğidir.",
    },

    "bolge:bozuyuk-osb-bilecik-cevre-ili": {
        h1: "Bozüyük'te Mağaza, Otel ve Kamu Binası İç Mekânında Platform Kiralama (Çevre İl)",
        giris:
            "Bozüyük, ağır sanayisinin yanında ilçe merkezinde standart bir ticaret-hizmet dokusu da barındırır: birkaç mağaza zinciri, konaklama tesisleri ve belediye-kaymakamlık gibi kamu binaları. Eskişehir filomuzdan bu ilçeye iç mekân hizmeti götürmek, standart kent içi kurallara (egzozsuz ekipman, zemin koruma, mesai dışı pencere) bir de çevre il mesafesini ekler. Bu sayfa, Bozüyük'teki mağaza-otel-kamu binası iç mekân işlerini, mesafe faktörünü de hesaba katarak ele alır; amaç, ilçedeki küçük ölçekli ticaret-hizmet dokusuna, sanayi bölgesindeki ağır iş yoğunluğundan bağımsız, kendi ölçeğine uygun bir hizmet sunmaktır.",
        maddeler: [
            {
                baslik: "İlçe merkezinde standart iç mekân kuralları",
                metin:
                    "Bozüyük merkezindeki mağaza ve işletmelerde, Eskişehir'deki kent içi işlerle aynı temel kurallar geçerlidir: kapalı hacimde akülü ekipman zorunluluğu, hassas zeminde koruma önlemi ve kapanış sonrası çalışma tercihi. İlçenin ağır sanayi kimliği, merkezdeki bu küçük ölçekli ticaret işlerini etkilemez; buradaki hizmet tamamen standart bir kent içi iç mekân işidir.",
            },
            {
                baslik: "Konaklama tesislerinde mesafeye bağlı planlama",
                metin:
                    "İlçedeki konaklama tesislerinin (küçük otel, misafirhane) iç mekân işlerinde, Eskişehir'den sevkiyat süresi göz önünde bulundurularak planlama yapılır; genellikle bir-iki saatlik bir sevkiyat süresi hesaba katılır. Tesisin sakin saatini ve tarih esnekliğini önceden bilmek, hem hızlı hem ekonomik bir çözüm sunmamızı sağlar.",
            },
            {
                baslik: "Kamu binalarında standart onay süreci",
                metin:
                    "Belediye veya kaymakamlık binası gibi kamu yapılarında, diğer ilçelerde uyguladığımız standart onay süreci geçerlidir — bina yönetiminden önceden bilgi alınır, çalışma mesai dışına planlanır. Çevre il mesafesi bu süreci değiştirmez, yalnızca sevkiyat zamanlamasını etkiler; bu yüzden onay sürecini erken başlatmanızı öneririz.",
            },
            {
                baslik: "Sanayi sevkiyatıyla birleştirme fırsatı",
                metin:
                    "Bozüyük OSB'ye yönelik sanayi tipi taleplerimiz düzenli olduğundan, ilçe merkezindeki bir iç mekân talebini bu sevkiyatlardan biriyle birleştirmek mümkündür. Tarihinizi esnetebilirseniz, OSB'ye planlanmış bir sevkiyata merkezinizdeki iç mekân işini de ekleyerek nakliye maliyetini paylaştırabiliriz; bu, tekil bir çevre il sevkiyatına göre belirgin bir tasarruf sağlar.",
            },
            {
                baslik: "Küçük ölçekli işletmede kısa pencere",
                metin:
                    "İlçe merkezindeki küçük mağaza ve işletmelerde iş genellikle bir-iki saati aşmaz; bu kısa pencerede zaman kaybetmemek için değiştirilecek malzemenin önceden hazır olması ve sevkiyat saatinin net planlanması önemlidir. Merkez ilçelere göre daha uzun sevkiyat süresi nedeniyle, Bozüyük'te bu hazırlık adımı özellikle değerlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bozüyük merkezde işletme tipi ve yaklaşım",
                paragraflar: [
                    "İlçe merkezindeki iç mekân işlerinde tipik yaklaşım aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Uygun pencere", "Sevkiyat notu", "Zemin"],
                    satirlar: [
                        ["Mağaza", "Kapanış sonrası", "OSB sevkiyatıyla birleştirilebilir", "Standart"],
                        ["Konaklama tesisi", "Gece/sabah erken", "Tarih esnekliği önemli", "Değişken"],
                        ["Belediye/kaymakamlık", "Mesai dışı", "Erken onay başvurusu", "Standart"],
                        ["Küçük ticaret işletmesi", "Kapanış sonrası", "Malzeme önceden hazır", "Standart"],
                    ],
                },
            },
            {
                baslik: "OSB sevkiyatıyla merkez işini birleştirmek",
                paragraflar: [
                    "Bozüyük OSB'ye yönelik düzenli sanayi taleplerimiz olduğu için, ilçe merkezindeki bir iç mekân işini bu sevkiyatlardan biriyle aynı güne yerleştirmek mümkündür. Bu, hem sizin için nakliye maliyetini düşürür hem bizim filo kullanımımızı verimli kılar.",
                    "Bu birleştirmenin işlemesi için tarihinizin esnek olması gerekir; sabit tarihli bir ihtiyacınız varsa da hizmet veririz, ancak bu durumda tekil sevkiyat bedeli teklife ayrı yansır.",
                ],
            },
            {
                baslik: "Mesafeye rağmen hızlı hazırlık",
                paragraflar: [
                    "Bozüyük'teki küçük ölçekli işlerde kısa çalışma penceresi ile uzunca sevkiyat süresi bir araya geldiğinde, hazırlık eksikliği pencereyi tamamen tüketebilir. Bu yüzden malzemenin (varsa değiştirilecek armatür, tabela gibi) sahada önceden hazır olmasını ve çalışma saatinin net belirlenmesini özellikle önemsiyoruz.",
                    "İlk temas anında bu hazırlığı netleştirdiğimizde, mesafeye rağmen iş kısa pencerede sorunsuz tamamlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bozüyük merkezdeki mağazamıza Eskişehir'den ne kadar sürede makine gelir?",
                cevap:
                    "Genellikle bir-iki saat içinde planlanabilir; bu, filomuzun o an nerede olduğuna bağlıdır. OSB'ye yönelik planlanmış bir sevkiyatımız varsa, merkez talebinizi bu sevkiyata ekleyerek hem süreyi kısaltabilir hem maliyeti paylaştırabiliriz. Tarihinizi esnek bırakırsanız, en uygun ve en ekonomik seçeneği sunarız.",
            },
            {
                soru: "Otelimizin lobisinde iç mekân işi var, standart kurallar mı geçerli?",
                cevap:
                    "Evet, Bozüyük'teki bir otel de Eskişehir'deki bir otelle aynı temel kurallara tabidir: akülü ekipman, hassas zeminde koruma (mermer/parke ise iz bırakmayan tekerlek ve koruyucu mat) ve misafir yoğunluğunun düşük olduğu saatte çalışma. Tek fark, sevkiyatın Eskişehir'den planlanması ve süresinin buna göre hesaplanmasıdır. Otelinizin sakin saatini bildirirseniz, programı ona göre kurarız.",
            },
            {
                soru: "Belediye binamızda izin süreci ne kadar sürer?",
                cevap:
                    "Süreç diğer ilçelerdeki kamu binalarıyla benzerdir; bina yönetiminden onay alınması birkaç gün sürebilir. Çevre il mesafesi bu süreci değiştirmez ama sevkiyat planlamasıyla birlikte düşünüldüğünde erken başvuru özellikle önemlidir. Talebinizi ilettiğinizde hem izin sürecini hem sevkiyat zamanlamasını birlikte planlarız.",
            },
            {
                soru: "OSB'ye zaten makine geliyorsa bizim iç mekân işimizi de o sırada mı yapabilirsiniz?",
                cevap:
                    "Genellikle evet, bu bizim de tercih ettiğimiz bir modeldir. OSB'ye yönelik planlanmış bir sevkiyat varken, ilçe merkezindeki iç mekân talebinizi aynı güne veya yakın bir güne yerleştirerek nakliye maliyetini paylaştırırız. Tarihinizi esnek bırakırsanız bu koordinasyonu kolayca kurarız; sabit tarihte de hizmet veririz ama maliyet farkı ayrı gösterilir.",
            },
            {
                soru: "Küçük mağazamızda tek bir armatür değişecek, hazırlık için ne yapmalıyız?",
                cevap:
                    "Değiştirilecek armatürün veya malzemenin çalışma saatinden önce sahada hazır olmasını öneririz; çünkü Bozüyük'e sevkiyat süresi diğer merkez ilçelere göre biraz daha uzundur ve kısa çalışma penceresinde malzeme beklemek zaman kaybettirir. Kapanış saatinizi ve malzeme durumunuzu bildirirseniz, planı buna göre kurarız.",
            },
            {
                soru: "Çevre il mesafesi fiyatı ne kadar etkiler?",
                cevap:
                    "Tekil bir sevkiyatta mesafe, standart kent içi bir işe göre ek bir nakliye kalemi oluşturur; ancak bu kalemi OSB'ye yönelik mevcut bir sevkiyatla birleştirerek büyük ölçüde azaltabiliriz. Tarihinizi esnek bırakmanız, bu birleştirmenin gerçekleşme olasılığını artırır. Kesin fiyat farkını, talebinizi aldığımızda iki seçenek (birleşik/tekil) olarak yan yana gösteririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük ilçe merkezinin ticaret-konaklama-kamu binası dokusu kamuya açık genel bilgidir; OSB sevkiyatıyla birleştirme modeli firma pratiğidir.",
    },

    "bolge:polatli-ankara-cevre-ili": {
        h1: "Polatlı'da Mağaza, Otel ve Kamu Binası İç Mekânında Platform Kiralama (Çevre İl)",
        giris:
            "Polatlı ilçe merkezi, un-yem sanayisinin yanında standart bir ticaret ve hizmet dokusu da taşır: mağazalar, birkaç konaklama tesisi, belediye ve diğer kamu binaları. Eskişehir filomuzdan Polatlı'ya iç mekân hizmeti götürmek, ilçenin merkeze görece yakın konumu nedeniyle bölgedeki diğer çevre il taleplerinden daha hızlı planlanabilir. Bu sayfa, Polatlı'daki mağaza-otel-kamu binası iç mekân işlerini, standart kent içi kurallar (egzozsuz ekipman, zemin koruma, mesai dışı pencere) çerçevesinde ve ilçenin sevkiyat avantajını göz önünde bulundurarak ele alır.",
        maddeler: [
            {
                baslik: "Merkeze görece yakınlığın sevkiyat avantajı",
                metin:
                    "Polatlı'nın Eskişehir'e mesafesi, bölgedeki diğer çevre il taleplerine kıyasla kısadır; sevkiyat genellikle bir saat civarında tamamlanır. Bu, ilçedeki mağaza ve işletmelerin iç mekân taleplerinde aynı gün veya ertesi gün teslimatı sık rastlanan bir durum hâline getirir, ancak filo müsaitliği yine belirleyici faktördür.",
            },
            {
                baslik: "İlçe merkezinde standart iç mekân kuralları",
                metin:
                    "Polatlı merkezindeki mağaza ve işletmelerde uygulanan kurallar, Eskişehir merkezindekiyle aynıdır: kapalı hacimde akülü ekipman zorunluluğu, hassas zeminde koruma önlemi (mermer, parke gibi yüzeylerde iz bırakmayan tekerlek) ve kapanış sonrası çalışma tercihi. İlçenin tarım-sanayi kimliği, merkezdeki bu küçük ölçekli ticaret işlerini etkilemez.",
            },
            {
                baslik: "Konaklama tesislerinde standart yaklaşım",
                metin:
                    "İlçedeki konaklama tesislerinin lobi ve ortak alan işlerinde, diğer bölgelerdeki otellerle aynı yaklaşım uygulanır: misafir yoğunluğunun düşük olduğu saat, zemin koruma önlemi ve sessiz çalışma tercihi. Merkeze yakınlık, bu tesislerin sevkiyat süresini kısaltarak planlamayı kolaylaştırır.",
            },
            {
                baslik: "Kamu binalarında standart onay süreci",
                metin:
                    "Belediye ve diğer kamu binalarında, standart onay süreci (bina yönetiminden bilgi alma, mesai dışı çalışma) geçerlidir. Polatlı'nın merkeze yakınlığı, onay sürecinin kendisini hızlandırmaz ama sevkiyat planlamasını kolaylaştırdığı için toplam süreç genellikle daha hızlı sonuçlanır.",
            },
            {
                baslik: "Sanayi sevkiyatıyla birleştirme imkânı",
                metin:
                    "Polatlı'daki un-yem tesislerine yönelik sanayi tipi taleplerimiz varsa, ilçe merkezindeki bir iç mekân talebini bu sevkiyatla birleştirmek mümkündür. Tarihinizi esnetebilirseniz, mevcut bir sanayi sevkiyatına merkez işinizi ekleyerek nakliye maliyetini paylaştırabiliriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Polatlı merkezde işletme tipi ve yaklaşım",
                paragraflar: [
                    "İlçe merkezindeki iç mekân işlerinde tipik yaklaşım aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Uygun pencere", "Sevkiyat süresi", "Zemin"],
                    satirlar: [
                        ["Mağaza", "Kapanış sonrası", "~1 saat", "Standart"],
                        ["Konaklama tesisi", "Gece/sabah erken", "~1 saat", "Değişken"],
                        ["Belediye binası", "Mesai dışı", "~1 saat", "Standart"],
                        ["Küçük ticaret işletmesi", "Kapanış sonrası", "~1 saat", "Standart"],
                    ],
                },
            },
            {
                baslik: "Hızlı sevkiyatın planlamaya etkisi",
                paragraflar: [
                    "Polatlı'nın merkeze görece yakın konumu, iç mekân işlerinde tarih esnekliğinin diğer çevre il taleplerine göre daha az kritik olmasını sağlar; kısa sevkiyat süresi sayesinde sabit tarihli talepler de büyük bir maliyet dezavantajı taşımaz.",
                    "Yine de sanayi sevkiyatlarıyla birleştirme fırsatı varsa bunu değerlendirmenizi öneririz; ek bir tasarruf sağlar ve filo kullanımını daha verimli kılar.",
                ],
            },
            {
                baslik: "Kısa pencerede hazırlığın rolü",
                paragraflar: [
                    "Merkeze yakınlık sevkiyat süresini kısaltsa da, kapanış sonrası çalışma penceresi yine de sınırlıdır; bu yüzden değiştirilecek malzemenin önceden hazır olması ve çalışma saatinin net belirlenmesi önemini korur.",
                    "İlk temas anında bu hazırlığı netleştirdiğimizde, kısa pencerede iş sorunsuz tamamlanır ve mesafenin sağladığı hız avantajı tam olarak kullanılmış olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Polatlı merkezdeki mağazamıza ne kadar sürede makine gelir?",
                cevap:
                    "Genellikle bir saat civarında, çünkü Polatlı'nın Eskişehir'e mesafesi bölgedeki diğer çevre il taleplerine göre kısadır. Filomuzun o an müsaitliğine bağlı olarak bu süre değişebilir; talebinizi ilettiğinizde net bir süre söyleriz. Bölgede o an çalışan bir makinemiz varsa süre daha da kısalabilir.",
            },
            {
                soru: "Otelimizin lobisinde çalışacaksınız, zemin koruma nasıl işliyor?",
                cevap:
                    "Standart yaklaşımımız: zemininiz mermer, granit veya parke ise iz bırakmayan tekerlekli makine kullanır, güzergâh boyunca koruyucu mat sereriz. Çalışma, misafir yoğunluğunun düşük olduğu gece veya sabah erken saatlere planlanır. Otelinizin zemin tipini ve sakin saatini bildirirseniz, hazırlığı buna göre yaparız.",
            },
            {
                soru: "Belediye binamızda mesai dışı çalışma için izin nasıl alınır?",
                cevap:
                    "Bina yönetiminden önceden bilgi ve onay alınması gerekir; bu, diğer bölgelerdeki kamu binalarıyla aynı standart süreçtir. Polatlı'nın merkeze yakınlığı bu onay sürecini hızlandırmaz ama sevkiyat planlamasını kolaylaştırdığı için toplam süreç genellikle daha hızlı ilerler. Talebinizi erken iletmeniz süreci rahatlatır.",
            },
            {
                soru: "Un fabrikanıza zaten sevkiyat yapıyorsanız, merkezdeki mağazamızı da aynı sırada mı halledersiniz?",
                cevap:
                    "Mümkünse evet, bunu öneririz. Polatlı'daki sanayi tesislerine yönelik planlanmış bir sevkiyatımız varsa, merkez ilçedeki iç mekân talebinizi aynı güne veya yakın bir güne yerleştirerek nakliye maliyetini paylaştırırız. Tarihinizi esnek bırakırsanız bu koordinasyonu kolayca kurarız.",
            },
            {
                soru: "Mağazamızda tek bir tabela işi var, mesafe yüzünden pahalı olur mu?",
                cevap:
                    "Polatlı'nın merkeze görece yakın konumu sayesinde, bu tip küçük bir iş için sevkiyat maliyeti bölgedeki diğer çevre il taleplerine göre daha düşüktür. Tarihinizi esnetirseniz veya bölgedeki bir sanayi sevkiyatına eklenirse maliyet daha da düşer. Kapanış saatinizi ve tabelanın konumunu bildirirseniz net bir teklif sunarız.",
            },
            {
                soru: "Merkeze yakınlık, kısa çalışma penceremizi rahatlatır mı?",
                cevap:
                    "Sevkiyat süresini kısaltarak dolaylı bir rahatlama sağlar, ancak kapanış sonrası çalışma penceresinin kendisi (genellikle bir-iki saat) değişmez. Bu pencerede zaman kaybetmemek için değiştirilecek malzemenin önceden hazır olmasını yine öneririz; mesafenin kısalığı, sevkiyatın geç kalma riskini azaltır ama hazırlık eksikliğinin yerini tutmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Polatlı ilçe merkezinin ticaret-konaklama-kamu binası dokusu ve Eskişehir'e görece yakın mesafesi kamuya açık genel bilgidir; sanayi sevkiyatıyla birleştirme modeli firma pratiğidir.",
    },
    "bolge:muttalip": {
        h1: "Muttalip’te Dükkân ve Depo İç Mekânları İçin Platform Kiralama",
        giris: "Muttalip’te şehir merkezine yakın mahalle dokusu ile küçük işletme ve depolama hacimleri yan yana gelir; burada iç mekân platform talebi çoğunlukla dükkân tavanı, depo aydınlatması, asma tavan üstü tesisat, klima kanalı ve raf üstü kontrol gibi kısa işlerden oluşur. Bu sayfanın konusu üretim hattı ya da metal atölyesi bakımı değildir. Müşterinin, çalışanın veya stok hareketinin sürdüğü kapalı hacimde makinenin kapıdan geçmesi, zeminde iz bırakmaması, raf ve vitrine temas etmemesi ve işin işletme kapalıyken bitirilmesi ele alınır. Merkeze yakınlık sevkiyatı kolaylaştırsa da küçük bir işte hazırlık eksikliği çalışma penceresini hızla tüketebilir. Bu nedenle girişten hedefe güzergâhı, kapı ölçüsünü, zemin kaplamasını, koridor dönüşünü ve hazır malzeme listesini makine yola çıkmadan doğrularız.",
        maddeler: [
            { baslik: "Dükkân kapanışından sonra sessiz çalışma", metin: "Tavan armatürü, havalandırma menfezi, kamera ve iç tabela işi müşteri varken yapılmaz; çalışma kapanış sonrasına veya işletmenin belirlediği sakin pencereye alınır. Akülü platform kapalı hacimde egzoz üretmez ve düşük gürültüyle hareket eder, ancak uygulayıcının kullandığı matkap veya söküm aracı ayrıca ses çıkarabilir. Komşu konut ya da işyerinin saat kısıtı önceden sorulur. Kısa pencerenin başında malzeme aranmaması için armatür, bağlantı parçası ve el aleti zeminde iş sırasına göre hazırlanır. İş bitiminde alan ertesi açılışa hazır, temiz ve engelsiz teslim edilir." },
            { baslik: "Kapı, rampa ve koridor dönüşünü ölçmek", metin: "Makinenin katalog genişliği kapıdan geçeceğini tek başına kanıtlamaz; kapı kolu, eşik, kepenk rayı, giriş rampası ve hemen sonraki dönüş de güzergâhı daraltabilir. Net genişlik ve yükseklik ölçülür, rampanın yüzeyi ve eğimi görülür, çalışma alanında sepeti açacak pay doğrulanır. Basamak varsa makine kendi gücüyle aşmaya zorlanmaz. Katlı yapıda yük asansörü kullanılacaksa kabin ölçüsü kadar taşıma yeterliliği de yapı sorumlusunca doğrulanır. Uygun rota yoksa daha kompakt sınıf ya da farklı giriş konuşulur; teslimat günü deneme yapılmaz." },
            { baslik: "Stok ve raf arasında temiz erişim", metin: "Depo veya arka mağaza hacminde hedef çoğu zaman raf üstü aydınlatma, algılama elemanı ve çatı altı tesisattır. Koridor yalnız gövdenin geçeceği kadar değil, dönüş ve acil iniş için de açık olmalıdır. Palet ya da koli makineye dayanak yapılmaz, stok üzerinden sepet uzatılmaz ve alt alanda ürün bırakılmaz. Çalışılacak koridor geçici olarak kapatılır; istif aracı trafiği başka hatta yönlendirilir. Tozlu dış alandan gelen makine içeri girmeden tekerlek ve sepet temizlenir, olası hidrolik sızıntı kontrol edilir. Ürün koruması işletmenin kendi düzeniyle birlikte yürütülür." },
            { baslik: "Seramik, epoksi ve cilalı yüzeyi korumak", metin: "Dükkân ve hizmet hacimlerinde zemin, makinenin ağırlığını taşısa bile çizik ve lastik izine karşı hassas olabilir. İçeri iz bırakmayan tekerlekli, temiz akülü sınıf gönderilir. Dönüş yapılan noktalara ve eşik geçişine uygun koruyucu malzeme serilir; malzeme kayarak fren güvenliğini bozmayacak biçimde sabitlenir. Asma kat, bodrum üstü veya tesisat boşluğu bulunan yüzeylerde yalnız kaplamaya bakarak karar verilmez; yapının taşıma yeterliliği sorumludan istenir. Yük dağıtıcı örtü, yetersiz bir döşemeyi kendiliğinden güvenli yapmaz. Giriş ve çıkışta zemin fotoğrafla kontrol edilir." },
            { baslik: "Mahalle içindeki kısa işleri tek sırada toplamak", metin: "Bir dükkândaki tek armatür veya küçük depodaki tek dedektör için ayrı sevkiyatın payı yüksek kalabilir. Tarihleri uyumlu yakın işletmeler aynı güne alınabilir; makine tamamen toplanarak adresler arasında geçer ve her noktada yeni teslim kontrolü yapılır. Ortak olan taşıma rotasıdır, işletmelerin sorumluluğu ve faturası değildir. Bir müşterinin işi uzarsa diğerinin kapanış penceresini kaybetmemek için süre sınırı baştan yazılır. Muttalip’in merkeze yakınlığı, hazır bir şehir içi programa kısa işi eklemeyi kolaylaştırır; buna rağmen kesin saat yalnız filo ve adres hazırlığı doğrulandıktan sonra verilir." },
        ],
        ekBolumler: [
            { baslik: "Muttalip iç mekânlarında iş ve hazırlık eşleşmesi", paragraflar: ["Kapalı hacmin kullanım biçimi, hem çalışma penceresini hem güzergâh hazırlığını belirler."], tablo: { basliklar: ["Mekân", "Kalem", "Ana kısıt", "Hazırlık"], satirlar: [["Dükkân satış alanı", "Armatür, kamera, tabela", "Müşteri ve hassas zemin", "Kapanış sonrası, zemin koruma"], ["Arka depo", "Raf üstü algılama", "Dar koridor", "Koridor boşaltma"], ["Küçük antrepo", "Çatı altı ve ışık", "Stok hareketi", "Sevkiyat dışı saat"], ["Hizmet ofisi", "Asma tavan, klima", "Sessizlik", "Mesai dışı akülü"], ["İç avlu", "Kaplama, kablo", "Eşik ve dönüş", "Kompakt sınıf"], ["Yükleme girişi", "Kapı üstü mekanizma", "Araç trafiği", "Mal kabul dışında"]] } },
            { baslik: "Kapanış penceresini işe dönüştüren hazırlık", paragraflar: ["İşletme kapanmadan önce hedef noktalar numaralanır, gerekli ürün ve bağlantı elemanları kontrol edilir, raf koridoru boşaltılır ve giriş anahtarı ile alarm düzeni netleştirilir. Platform geldiğinde ilk iş keşif yapmak değil, güncel koşulların daha önce paylaşılan bilgiyle aynı olduğunu doğrulamak olur. Uygulayıcı ekip hazır değilse makine sessizce beklese bile kiralama penceresi tüketilir.", "İş sonunda el aletleri sayılır, sökülen parçalar mekândan çıkarılır, koruyucu örtüler kontrollü kaldırılır ve zemin ile stok çevresi işletme sorumlusuyla incelenir. Alarm veya kepenk kapatılmadan önce makinenin tamamen dışarı çıktığı görülür. Bu kapanış, sabah personelin yarım bırakılmış bir çalışma alanıyla karşılaşmasını önler." ] },
            { baslik: "Girişten hedefe taşıma kontrol listesi", paragraflar: ["Sokakta indirme alanı, kapının net açıklığı, eşik, rampa, koridor köşesi, zemindeki rögar veya kapak, hedef altındaki boşluk ve dönüş alanı tek rota olarak değerlendirilir. Yalnız hedefin fotoğrafı bu zincirin hiçbirini kanıtlamaz. Kısa bir video veya art arda çekilmiş görüntüler, makinenin nerede sıkışabileceğini önceden gösterir.", "Güzergâh ölçüleri sınırdaysa daha büyük kapasite uğruna geniş şase seçilmez. Hedefin altı boşsa dar makaslı, raf ya da vitrin engeli varsa kompakt eklemli seçenek değerlendirilir. İki yöntemin iş süresi ve zemin etkisi açıkça karşılaştırılır; karar yalnız günlük kira bedeline göre verilmez." ] },
        ],
        sss: [
            { soru: "Dükkân açıkken tavan aydınlatması yapılabilir mi?", cevap: "Müşteri ve personelin çalışma alanına girmesi tamamen engellenebiliyorsa çok sınırlı bir kalem değerlendirilebilir, fakat planlı işi kapanış sonrasına almayı öneririz. Alt alan boşaltılır, el aletleri bağlanır ve ürün korunur. Akülü makinenin sessiz olması düşen cisim riskini ortadan kaldırmaz. Kapanış penceresi daha hızlı ve kontrollü çalışma sağlar." },
            { soru: "Makinenin kapıdan sığması için hangi ölçüler gerekir?", cevap: "Kapının net eni ve yüksekliği, eşik, kepenk rayı, giriş rampası ve kapıdan sonraki ilk dönüşün genişliği gerekir. Çalışma noktasındaki dönüş payı ayrıca ölçülür. Yük asansörü varsa kabin ve kapı ölçüsüyle taşıma yeterliliği istenir. Sadece kapı kanadının genişliğine bakarak kesin seçim yapmayız." },
            { soru: "Raflar doluyken üstte çalışabilir misiniz?", cevap: "Güvenli koridor ve ürünün üstünü koruyan düzen kurulabiliyorsa bazı noktalar ele alınabilir; sepet istife yaslanmaz ve düşme alanında ürün bırakılmaz. Koridor istif aracı trafiğine kapatılır. Uygun ayrım kurulamıyorsa bölümün boşalması beklenir. Ürünün zarar görme riskini hız uğruna kabul etmeyiz." },
            { soru: "Cilalı zeminde iz veya çatlak oluşur mu?", cevap: "İz bırakmayan temiz tekerlek ve doğru koruma, yüzey izini önler; taşıma yeterliliği ise ayrı konudur. Asma kat veya bodrum üstünde yapı sorumlusunun yük bilgisi gerekir. Koruyucu mat yetersiz döşemeyi güçlendirmez. Giriş öncesi ve çıkış sonrası kontrolle zeminin durumu kayıt altına alınır." },
            { soru: "Tek bir küçük iş için Muttalip’e gelir misiniz?", cevap: "Geliriz; ancak tekil sevkiyatın payını teklifte açıkça gösteririz. Tarihiniz esnekse şehir içindeki yakın programa eklemek daha ekonomik olabilir. Aynı işletmedeki gerçek bakım kalemlerini tek listede toplamak da verimi artırır. Gereksiz iş üretmeyiz; yalnız hazır işleri aynı erişimde kapatırız." },
            { soru: "İş gece uzarsa ne olur?", cevap: "Bina erişimi, komşu sessizlik kuralı ve ertesi açılış saati aşılmadan kapsam durdurulur. Kritik kalem güvenli hâle getirilir, açık iş kayda alınır ve yeni pencere belirlenir. Hazırlık eksikliğinden doğan gecikmeyi plansız biçimde sabaha taşımayız. Süre riski keşifte görülürse liste baştan önceliklendirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Muttalip’in Eskişehir merkezine yakın mahalle ve küçük işletme-depo dokusu genel bağlamda ele alınmıştır; kapalı hacim güzergâhı, zemin koruması ve kapanış sonrası sıra firma saha pratiğidir. İşletme adı, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:demirciler-sanayi-sitesi": {
        h1: "Demirciler Sanayi Sitesinde Dükkân ve Atölye İç Tavan İşleri İçin Platform Kiralama",
        giris: "Demirciler Sanayi Sitesinde bir dükkân veya atölyenin iç tavanına erişmek, metal üretim işleminin kendisinden ayrı bir hizmet akışıdır. Bu sayfa kaynak, kesme, sıcak iş, ağır parça montajı veya dış saha üretim bakımını anlatmaz; işletme kapandıktan sonra yürütülen aydınlatma, asma tavan, kamera, kapı üstü mekanizma, havalandırma menfezi ve iç tabela gibi temiz erişim işlerine odaklanır. Atölye gün boyunca aktif olsa bile bakım penceresinde çalışma bölümü boşaltılır, yerdeki tezgâh arabaları ve ürünler güzergâhtan çekilir, kompakt akülü makine kapıdan hedefe kontrollü biçimde ilerler. Aynı site içindeki birkaç kısa tavan işini ortak bir gece veya hafta sonu programına almak, sevkiyat ve kurulum tekrarını azaltır. Belirleyici konu metal proses değil; iç mekânın kapanışa hazırlanması, makinenin dar kapı ile raf arasından geçmesi ve sabah işletmeye temiz teslim edilmesidir.",
        maddeler: [
            { baslik: "Tavan aydınlatmasını bölge bölge yenilemek", metin: "Armatürler atölye boyunca dağınıksa tüm hacmi aynı anda kapatmak gerekmez. Tavan planı bölgelere ayrılır, her bölümde aşağıdaki masa, araba ve stok geçici olarak çekilir, platform işi bitirdikçe sonraki bölüme geçer. Elektriksel ayırma ve yeniden enerji verme işlemi tesisin yetkili personelince yürütülür; platform ekibi panoda yetki almaz. Değişecek armatürler önceden açılıp kontrol edilir, sepete yalnız o bölgenin malzemesi alınır. Böylece kapanış penceresi ambalaj açmak veya doğru parçayı aramakla kaybedilmez." },
            { baslik: "Asma tavan ve menfez çevresinde yük sınırı", metin: "Sepet, asma tavan taşıyıcısına veya havalandırma kanalına dayandırılmaz. Panel sökülürken parça sepette sabit tutulur ve aşağıdaki ürünün üstüne bırakılmaz. Büyük kanal ya da ağır ekipman platformla kaldırılmaz; ayrı taşıma yöntemi gerekir. Hedefin tam altına park edilebiliyorsa dar makaslı sınıf geniş çalışma yüzeyi sunar. Altında sabit tezgâh, raf veya kabin varsa kompakt eklemli sınıfla yandan erişim değerlendirilir. Tavan içindeki görünmeyen engeller için önce kontrollü inceleme yapılır, sepet kör biçimde boşluğa sürülmez." },
            { baslik: "Kapı ve tezgâh arası gece rotası", metin: "Gündüz açık görünen güzergâh kapanışta malzeme, yarı mamul veya araçlarla dolabilir. Makine gelmeden önce kapıdan hedefe rota boşaltılır; net açıklık, eşik ve dönüş noktaları fotoğrafla doğrulanır. Yerdeki kablo, hortum ve gevşek parça kaldırılır. Platformun acil iniş alanı tezgâhla kapatılmaz. Geçiş için üretim ekipmanını rastgele yer değiştirmek yerine işletmenin belirlediği güvenli park düzeni kullanılır. İş sonunda bütün araç ve stokun eski yerine dönmesi platform ekibinin değil işletme sorumlusunun kontrolünde yapılır." },
            { baslik: "Kapalı hacimde temiz ve egzozsuz makine", metin: "Kısa bir gece işinde kapıları açık bırakmak, dizel makineyi iç mekân için uygun hâle getirmez. Akülü, egzozsuz ve içeri girmeden temizlenmiş sınıf tercih edilir. Tekerleklerde dış sahadan gelen metal kırıntısı, çamur veya yağ bulunmadığı kontrol edilir. Zeminde mevcut yağlı alan varsa temizlenip kurulanmadan makine yürütülmez. Hidrolik sızıntı belirtisi görülen ünite ürün ve ekipmanın bulunduğu hacme alınmaz. Bu yaklaşım sıcak iş riskinden farklıdır; amacı kapalı dükkânın havasını, zeminini ve sabahki kullanım düzenini korumaktır." },
            { baslik: "Site içinde ortak iç tavan bakım gecesi", metin: "Komşu dükkânların armatür, kamera veya kapı üstü listeleri ayrı ayrı kısa sürebilir. Aynı sınıfın uyduğu talepler ortak bir kapanış programına alındığında makine siteye bir kez gelir ve tamamen toplanarak adresler arasında ilerler. Her dükkân kendi anahtar sorumlusunu, elektrik yetkilisini ve teslim kişisini hazır bulundurur. Bir adresteki gecikme sonrakinin penceresini tüketmesin diye iş başına sınır ve öncelik yazılır. Makine bir dükkândan çıkarken temizlenir; önceki alanın kiri ve söküm parçası diğer işletmeye taşınmaz." },
        ],
        ekBolumler: [
            { baslik: "İç tavan kalemine göre makine ve pencere", paragraflar: ["Demirciler’de temiz iç mekân işi, hedef altındaki engel ve işletmenin kapanış düzenine göre planlanır."], tablo: { basliklar: ["Kalem", "Alt alan", "Uygun sınıf", "Pencere"], satirlar: [["Tavan armatürü", "Boş zemin", "Dar akülü makaslı", "Kapanış sonrası"], ["Tezgâh üstü menfez", "Sabit engel", "Kompakt eklemli", "Bölüm boşken"], ["Kamera ve kablo", "Dağınık noktalar", "Kompakt dikey", "Gece turu"], ["Asma tavan paneli", "Hassas ürün", "Geniş sepetli akülü", "Ürün kaldırılınca"], ["Kapı üstü mekanizma", "Giriş hattı", "Kısa eklemli", "Mal kabul dışında"], ["İç tabela", "Müşteri alanı", "İz bırakmayan dikey", "İşletme kapalıyken"]] } },
            { baslik: "Üretim kapanışından bakım başlangıcına devir", paragraflar: ["Gündüz vardiyası yalnız makineyi durdurup çıktığında alan bakım için hazır sayılmaz. Hareketli ekipman güvenli duruma alınır, elektrik yetkilisi ilgili devreyi tanımlar, stok ve araçlar rotadan çekilir, zemin temizlenir ve gece sorumlusu anahtar ile alarm düzenini devralır. Bu devir tamamlanmadan platform içeri alınmaz.", "Sabah ters devir yapılır: üst kotta gevşek parça bulunmadığı, sökülen elemanların çıkarıldığı, el aletlerinin sayıldığı ve zeminin temiz olduğu kontrol edilir. Elektrik yetkilisi devreyi kendi prosedürüyle açar. Platform dışarı çıktıktan sonra işletme sorumlusu alanı teslim alır; yalnız armatürün yanması bütün kapanışın kanıtı değildir." ] },
            { baslik: "Sıcak iş sayfasından ayrılan sınırlar", paragraflar: ["Bu iç tavan programında kaynak, taşlama, profil kaldırma veya kıvılcım üreten imalat bulunmaz. Böyle bir ihtiyaç keşifte ortaya çıkarsa temiz bakım listesinden ayrılır ve işletmenin sıcak iş prosedürüne bağlı başka çalışma olarak planlanır. Bu ayrım hem makine hazırlığını hem komşu dükkânlara yapılacak bildirimi değiştirir.", "Ayrı kapsam kurmak aynı gece çalışılamayacağı anlamına gelmez; ancak sıcak işin koruma, gözcü ve kapanış adımları tamamlanmadan temiz iç mekân turuna geçilmez. Uygun sıra ve temizlik mümkün değilse günler ayrılır. Böylece küçük bir armatür işi, başka bölümdeki metal imalat riskinin içinde kaybolmaz." ] },
        ],
        sss: [
            { soru: "Atölye çalışırken tavan lambası değişir mi?", cevap: "Planlı değişimi kapanışa alırız. Çalışılan bölüm boşaltılmalı, hareketli ekipman güvenli duruma getirilmeli ve elektrik devresi yetkili personelce ayrılmalıdır. Acil bir karanlık bölge varsa üretimi başka alana yönlendiren kısa pencere kurulabilir; yine de altında personel veya ürün varken sepet yükselmez." },
            { soru: "Bu hizmette kaynak veya taşlama yapılıyor mu?", cevap: "Bu sayfanın kapsamı temiz iç tavan erişimidir; kaynak, kesme ve taşlama ayrı sıcak iş planına alınır. İhtiyaç varsa önceden bildirilmelidir. Aynı listeye gizlice eklenmez, çünkü alan hazırlığı, gözcü, koruma ve kapanış koşulları bütünüyle değişir. Uygun düzen yoksa sıcak iş yapılmaz." },
            { soru: "Tezgâhı taşımadan tavana ulaşabilir misiniz?", cevap: "Tezgâh ile hedef arasındaki yatay mesafe ve üst açıklık uygunsa kompakt eklemli sınıf yandan ulaşabilir. Sepet tezgâha yaslanmaz ve ürün üstünde dolaşmaz. Ölçü yetersizse tezgâh işletmece güvenli biçimde çekilir veya iş başka yöntemle planlanır. Fotoğraf ve ölçü olmadan erişim garantisi vermeyiz." },
            { soru: "Dizel makineyi kapılar açıkken kullanabilir miyiz?", cevap: "Hayır; kapalı dükkân ve atölye içi için egzozsuz akülü sınıf seçilir. Kapının açık olması emisyonun içeride birikmeyeceğini garanti etmez. Ayrıca iç mekân makinesi temiz tekerlek ve uygun gövde ölçüsüyle hazırlanır. Dış saha işi varsa farklı sınıf ayrı kapsamda değerlendirilir." },
            { soru: "Birkaç dükkân ortak bakım gecesi yapabilir mi?", cevap: "Aynı sınıf işlere uyuyor ve tüm dükkânların kapanış hazırlığı tamamlanıyorsa yapabilir. Her adresin elektrik yetkilisi, anahtar sorumlusu ve teslim kaydı ayrıdır. Sıra ile süre baştan yazılır; bir dükkândaki eksik malzeme diğerini bekletmez. Ortak olan yalnız sevkiyat ve site içi rota payıdır." },
            { soru: "Sabah işletmeyi açmadan önce hangi kontrol yapılır?", cevap: "Alet ve sökülen parçalar sayılır, üst kotta gevşek eleman kalmadığı görülür, zemin ile ürün çevresi temizlenir ve korumalar kaldırılır. Elektrik devresi tesisin yetkilisi tarafından kontrollü açılır. Platform tamamen dışarı çıktıktan sonra işletme sorumlusu alanı teslim alır ve alarm-kepenk düzeni normale döner." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Demirciler Sanayi Sitesinin şehir içi küçük dükkân-atölye dokusu genel bağlamda ele alınmıştır; içerik yalnız iç tavan ve kapanış sonrası erişim pratiğine dayanır. Metal imalat ve sıcak iş teması bilinçli olarak ayrı tutulmuş, işletme adı, kapasite ve rakam kullanılmamıştır.",
    },

    // ─────────────────────────────────────────────────────────────────────
    // HİZMET SAYFALARI — bu dosyanın merceği yukarıdaki bölge sayfalarıyla
    // aynı eksende kalır: mağaza-otel-kamu binası KENT İÇİ iç mekân işi,
    // zemin koruma (mermer/parke/seramik/ahşap), egzozsuz akülü zorunluluğu,
    // kapanış sonrası/mesai dışı dar pencere, bina yönetimi koordinasyonu.
    // Kardeş dosyalar farklı eksendedir ve örtüşme burada da yasaktır:
    //   - eskisehirvincplatform-com.ts  → kırsal enerji hattı, direk, vinç
    //   - manlifteskisehir-com.ts       → planlı duruş penceresi/kapasite
    // "tarim-silo" ve "zor-zemin-arazi" konuları bu domainin kent içi
    // profiline uymadığı için kapsamı bilinçli olarak dar tutulmuş ve bu
    // dar kapsam sayfa içinde açıkça belirtilmiştir — uydurma genişletme
    // yapılmamıştır.
    // ─────────────────────────────────────────────────────────────────────

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Mağaza Vitrini ve Otel Lobisinde Sepetli / Örümcek Platform Kiralama",
        giris:
            "Kent içi bir mağazanın vitrin üstü, bir otel lobisinin yüksek tavanı veya bir kamu binasının fuaye aydınlığı, standart bir makaslı platformun sığamayacağı kadar dar bir kapıdan geçilerek ulaşılan hedeflerdir. Sepetli / örümcek platformun buradaki değeri, gövdesinin katlanarak bir insan omzu genişliğine kadar daralabilmesi ve ayaklarının zemine noktasal olarak basarak ağırlığı geniş bir alana yaymasıdır — bu ikinci özellik, mermer veya parke gibi hassas zeminlerde standart bir makaslı platformdan daha güvenli bir seçim yapar. Bu sayfa, ilimizdeki mağaza, otel ve kamu binası içi işlerde bu platform sınıfının ne zaman tercih edildiğini, kapı ve tavan ölçüsünün nasıl doğrulandığını ve zemin ayak izinin nasıl yönetildiğini ele alır; kırsal bir enerji hattında direk dikimi ya da sanayi holünde planlı duruş bakımı bu sayfanın konusu değildir.",
        maddeler: [
            {
                baslik: "Katlanan gövdenin dar kapıdan geçişi",
                metin:
                    "Standart bir makaslı platformun gövde genişliği çoğu mağaza kapısına sığmaz; sepetli örümcek platform ise ayaklarını ve kolunu katlayarak taşınabilir bir genişliğe iner ve içeride açılır. Bu yüzden dar cepheli bir mağaza veya tarihi bir bina girişinde ilk sorduğumuz ölçü kapı genişliği değil, kapının en dar noktasındaki (kol, eşik, kepenk rayı dahil) net geçiş ölçüsüdür.",
            },
            {
                baslik: "Ayak izinin zemine dağılımı",
                metin:
                    "Bu platform sınıfının dört veya altı ayağı, ağırlığı tek bir tekerlek hattı yerine birkaç noktaya dağıtır; bu, mermer veya cilalı parke gibi nokta yükünden çabuk zarar gören zeminlerde bir avantajdır, ancak her ayağın altına yine de koruyucu takoz konur çünkü nokta bazında yoğunlaşan yük hâlâ bir çiziğe yol açabilir. Ayakların açılma genişliği çalışma öncesi zeminde işaretlenir ki her ayak önceden belirlenen noktaya otursun.",
            },
            {
                baslik: "Otel lobisinde yüksek tavana yandan erişim",
                metin:
                    "Otel lobilerinin çoğu, avize veya gizli aydınlatma barının bulunduğu yüksek ve genellikle geniş bir tavana sahiptir; sepetli platformun uzun ve eklemli kolu, resepsiyon bankosu veya oturma grubu gibi zemindeki sabit mobilyaların arasından dolaşarak hedefe yandan ulaşabilir. Mobilyaların yerinden oynatılması gerekmeden çalışmanın tamamlanması, bu sınıfın otel işlerinde tercih edilme nedenidir.",
            },
            {
                baslik: "Kamu binası fuayesinde tavan yüksekliği farkı",
                metin:
                    "Belediye veya üniversite gibi kamu binalarının fuaye alanları, genellikle standart bir ofis katından daha yüksek tavanlıdır ve bu yükseklik, örümcek platformun kol açıklığının makaslı bir platforma göre daha ekonomik kalmasını sağlar. Fuaye genişse ve kapı ölçüsü yeterliyse, bazı işlerde daha büyük kapasiteli bir makaslı platform da değerlendirilir; seçim, kapı ölçüsü ile tavan yüksekliğinin birlikte kontrolüyle yapılır.",
            },
            {
                baslik: "Elektrikli tahrik ve sessiz taşınma",
                metin:
                    "İç mekân işlerinde kullanılan sepetli platformlar elektrikli tahrikli olduğundan hem egzozsuz çalışır hem de taşınırken düşük gürültü üretir; bu, kapanış sonrası çalışılan bir mağazada veya gece çalışılan bir otel lobisinde komşu birimleri rahatsız etmeyen bir hareket kabiliyeti sağlar. Buna rağmen sökme-takma sesleri ayrıca değerlendirilir ve gürültülü kalemler mümkünse gecenin erken saatine yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekân tipine göre platform sınıfı seçimi",
                paragraflar: [
                    "Kapı ölçüsü ve tavan yüksekliği, hangi platform sınıfının uygun olduğunu birlikte belirler; aşağıdaki tablo kent içi mekânlarda tipik eşleşmeyi gösterir.",
                ],
                tablo: {
                    basliklar: ["Mekân", "Kapı ölçüsü", "Uygun sınıf", "Zemin önlemi"],
                    satirlar: [
                        ["Dar cepheli mağaza", "Standart kapı altı", "Kompakt sepetli", "Ayak altı takoz"],
                        ["Otel lobisi", "Geniş çift kanat", "Sepetli/örümcek, uzun kol", "Koruyucu mat"],
                        ["Kamu binası fuayesi", "Geniş", "Sepetli veya makaslı", "Zemine göre değişir"],
                        ["Küçük ofis/salon", "Dar", "En kompakt sepetli", "İz bırakmayan ayak"],
                    ],
                },
            },
            {
                baslik: "Ölçüm hangi sırayla yapılır",
                paragraflar: [
                    "Talebi aldığımızda önce kapının net genişlik ve yükseklik ölçüsünü, ardından kapıdan hedefe kadar olan güzergâhtaki en dar noktayı (bir dönüş, bir sabit mobilya, bir eşik) sorarız; bu iki ölçü, hangi kompakt sınıfın kullanılabileceğini belirler.",
                    "Tavan yüksekliği ve hedefin yatay uzaklığı üçüncü adımdır; bu, kolun açıklığının yeterli olup olmadığını gösterir. Üç ölçü birlikte netleşmeden makine sahaya gönderilmez, çünkü tek bir eksik ölçü işin yarım kalmasına yol açabilir.",
                ],
            },
            {
                baslik: "Mobilyayı yerinden oynatmadan çalışmak",
                paragraflar: [
                    "Otel ve mağaza gibi dekoratif mobilyası olan mekânlarda, platformu hedefe götürmek için koltuk veya raf grubunu kaydırmak yerine kolun eklemli yapısını kullanarak dolaşık bir rota izleriz; bu, hem işletmenin düzenini korur hem çalışma sonrası toparlama süresini kısaltır.",
                    "Mobilyanın kesinlikle kaydırılması gereken durumlarda bu, işletme personeliyle birlikte ve önceden konuşularak yapılır; platform ekibi kendi başına mobilya taşımaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mağazamızın kapısı standart, hangi platform sığar?",
                cevap:
                    "Standart bir mağaza kapısı genellikle kompakt sepetli sınıfın katlanmış hâlini rahatlıkla geçirir, ancak kapı kolu, eşik yüksekliği ve kapıdan hemen sonraki ilk dönüş de ölçüye dahil edilmelidir; bazı mağazalarda kapı geniş görünse de hemen ardından gelen dar bir koridor asıl kısıtı oluşturur. Kapınızın ve giriş sonrası ilk birkaç metrenin fotoğrafını paylaşırsanız net bir değerlendirme yaparız.",
            },
            {
                soru: "Otel lobimizin mermer zemininde ayak izi kalır mı?",
                cevap:
                    "Doğru hazırlıkla kalmaz. Sepetli platformun ayakları ağırlığı birkaç noktaya dağıtsa da, her ayağın altına koruyucu takoz konur ve ayakların açılacağı noktalar önceden zeminde işaretlenir. Lobinizin zemin tipini ve varsa özellikle hassas bir bölgeyi bildirirseniz hazırlığı buna göre yaparız; çalışma öncesi ve sonrası zemin karşılaştırılır.",
            },
            {
                soru: "Kamu binamızın fuayesi hem geniş hem yüksek tavanlı, hangi sınıf daha ekonomik?",
                cevap:
                    "Fuaye genişse ve kapı ölçüsü uygunsa, bazı işlerde standart makaslı platform sepetliye göre daha ekonomik olabilir çünkü kapasitesi ve kurulum hızı farklıdır. Kapı ölçünüzü ve tavan yüksekliğinizi paylaşırsanız, iki seçeneği maliyet ve süre açısından karşılaştırarak sunarız; karar size kalır.",
            },
            {
                soru: "Gece lobide çalışırken misafirler rahatsız olur mu?",
                cevap:
                    "Elektrikli tahrikli platform hem egzozsuz hem de taşınırken düşük gürültülüdür, bu yüzden gece çalışması için uygun bir seçimdir. Ancak sökme-takma sırasında kullanılan el aletleri ayrıca ses çıkarabilir; bu kalemleri mümkünse gecenin erken saatine, sessiz kontrol işlerini geç saatlere yazarız. Otelinizin üst katlarında misafir varsa bu sıralamayı özellikle önemseriz.",
            },
            {
                soru: "Vitrindeki koltuk takımını kaydırmadan çalışabilir misiniz?",
                cevap:
                    "Çoğu durumda evet; kolun eklemli yapısı sayesinde sabit mobilyaların etrafından dolaşarak hedefe yandan ulaşabiliriz. Mobilyanın kesinlikle taşınması gereken bir konumdaysa bunu işletme personeliyle birlikte ve önceden konuşarak yaparız, kendi başımıza mobilya oynatmayız. Vitrininizin düzenini fotoğrafla paylaşırsanız rotayı önceden planlarız.",
            },
            {
                soru: "Küçük bir işyeriyiz, sepetli platform bize göre pahalı mı?",
                cevap:
                    "Kompakt sepetli sınıf, küçük ölçekli iç mekân işlerinde genellikle en ekonomik seçenektir çünkü kurulumu hızlıdır ve dar alanlarda ek zaman kaybettirmez. Maliyet, iş süresinden çok kapı ölçünüz ve hedefin yüksekliğiyle ilişkilidir. İşinizin kapsamını ve mekânınızın ölçülerini paylaşırsanız net bir teklif sunarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli/örümcek platformun teknik katlanma ve ayak-yayılım özelliği genel ürün bilgisidir; kapı/tavan ölçüm sırası ve mobilya etrafından dolaşma yöntemi firma pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Şehir İçi Mağaza ve Kamu Binasına Kısa Pencereli Nakliye ve Teslimat",
        giris:
            "Kent içi bir iç mekân işinde nakliye, sanayi bölgesine yapılan bir sevkiyattan farklı bir mantıkla çalışır: hedef bir fabrika kapısı değil, dar bir cadde üzerindeki bir mağaza vitrinidir ve indirme noktası çoğu zaman aracın park edebileceği bir alandan onlarca metre uzakta kalır. Bu sayfa, ilimizdeki mağaza, otel ve kamu binası taleplerinde nakliyenin nasıl planlandığını — indirme noktası seçimi, kapanış sonrası dar pencereye göre saat kurgusu ve şehir içi trafik kısıtları — ele alır. Kırsal bir hat boyunca ilerleyen sevkiyat mantığı ya da sanayi bölgesinin planlı duruş takvimine bağlı toplu sevkiyat modeli bu sayfanın konusu değildir; burada tek bir mağaza kapısına, tek bir gece penceresine göre kurulan teslimat anlatılır.",
        maddeler: [
            {
                baslik: "İndirme noktası kapı değil, en yakın uygun nokta",
                metin:
                    "Cadde üzerindeki bir mağazada araç genellikle kapının tam önüne yanaşamaz; kaldırım, yaya trafiği veya park yasağı indirme noktasını birkaç metre öteye iter. Bu yüzden talebi aldığımızda mağazanın önündeki cadde profilini (tek yön mü, indirme için ayrılmış bir alan var mı) sorarız; bu bilgi, aracın nereye yanaşacağını ve platformun kapıya kadar hangi kısa güzergâhla yürüyeceğini önceden belirler.",
            },
            {
                baslik: "Kapanış sonrası pencereye göre saat kurgusu",
                metin:
                    "Şehir içi işlerde nakliye saati, işin kendisi kadar işletmenin kapanış saatine bağlıdır; araç işletme kapanmadan önce sahaya varıp beklemez, kapanış anına yakın bir saatte planlanır ki hem trafik hem de mağaza önündeki yaya yoğunluğu en aza insin. Kapanış saatinizi bildirdiğinizde nakliye programını buna göre geriye doğru kurarız.",
            },
            {
                baslik: "Dar sokakta araç boyu kısıtı",
                metin:
                    "Tarihi merkez veya dar sokaklı mahallelerde büyük bir kamyonun manevra yapması güçtür; bu tip adreslerde daha küçük bir araçla taşıma tercih edilir, gerekirse platform araçtan indirilip son birkaç metre elle yürütülür. Adresinizin sokak genişliğini ve varsa bir manevra kısıtını (örneğin köşe dönüşü) önceden bilmek, doğru araç seçimini sağlar.",
            },
            {
                baslik: "Kamu binasında yük rampası ve güvenlik kaydı",
                metin:
                    "Belediye veya üniversite gibi kamu binalarının çoğunda ayrı bir yük kabul rampası bulunur ve bu rampanın kullanımı bina yönetiminin onayına ve bazen güvenlik kaydına tabidir. Nakliye saatini belirlerken bina yönetiminin rampa kullanım kuralını önceden öğreniriz; bu, teslimat gününde beklenmedik bir bekleme yaşanmasını önler.",
            },
            {
                baslik: "Kısa pencerede geri alımın zamanlaması",
                metin:
                    "İş bittiğinde platformun geri alımı da aynı dar pencerenin bir parçasıdır; işletmenin açılış saatine yetişecek şekilde makinenin gece bitmeden veya erken sabah çıkarılması gerekir. Bu yüzden geri alım saatini de teslimatla aynı anda planlarız, işin bitiş tahminine göre ayrı bir araç ayarlamayız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekân tipine göre nakliye kısıtı",
                paragraflar: [
                    "Kent içindeki farklı mekân tiplerinde nakliyeyi zorlaştıran ana etken değişir; aşağıdaki tablo bu farkı özetler.",
                ],
                tablo: {
                    basliklar: ["Mekân", "Ana kısıt", "Çözüm", "Saat"],
                    satirlar: [
                        ["Cadde üzeri mağaza", "İndirme noktası kapıdan uzak", "Kısa elle taşıma", "Kapanışa yakın"],
                        ["Tarihi merkez dükkânı", "Dar sokak", "Küçük araç", "Kapanış sonrası"],
                        ["Otel", "Ana giriş estetiği", "Servis girişi", "Gece/sabah erken"],
                        ["Kamu binası", "Rampa onayı", "Önceden bina yönetimi izni", "Mesai dışı"],
                    ],
                },
            },
            {
                baslik: "Servis girişinin tercih edilmesi",
                paragraflar: [
                    "Otel gibi misafir karşılama estetiğine önem veren mekânlarda, platform ve ekipman ana girişten değil, mutfak veya personel servis girişinden içeri alınır; bu, misafirlerin lobiye girerken bir bakım aracıyla karşılaşmasını önler.",
                    "Servis girişinin ölçüsü ana giriş kadar geniş olmayabilir; bu yüzden servis girişi kullanılacaksa ölçüsünü ayrıca ölçer, gerekiyorsa daha kompakt bir platform sınıfı öneririz.",
                ],
            },
            {
                baslik: "Geri alımı işin bitişine değil pencereye göre planlamak",
                paragraflar: [
                    "Bazı işlerde iş beklenenden erken biter, bazılarında pencere sonuna kadar sürer; her iki durumda da geri alım aracının pencerenin sonunda hazır olması gerekir çünkü işletme sabah açılışında boş bir mağazayla karşılaşmalıdır.",
                    "İş beklenenden erken biterse platform, geri alım aracını beklemek yerine mümkünse aynı gece içindeki başka bir adrese yönlendirilebilir; bu, filo kullanımını verimli kılar ve sizi de bekletmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mağazamızın önüne araç park edilemiyor, teslimat nasıl yapılıyor?",
                cevap:
                    "Cadde profilinizi (tek yön, park yasağı, en yakın uygun durak noktası) önceden öğrenip aracın en yakın uygun noktaya yanaşmasını, platformun oradan kapınıza kadar kısa bir mesafeyi kontrollü şekilde yürümesini planlarız. Bu güzergâh, kapı genişliği ve zemin tipiyle birlikte önceden değerlendirilir; teslimat günü doğaçlama yapılmaz.",
            },
            {
                soru: "Otelimizin ana girişinden değil, arka taraftan mı gireceksiniz?",
                cevap:
                    "Tercihimiz genellikle servis veya personel girişidir, çünkü ana giriş misafir karşılama alanıdır ve bir bakım aracıyla paylaşılmasını önermeyiz. Servis girişinin ölçüsünü önceden kontrol eder, gerekirse daha kompakt bir platform sınıfı öneririz. Otelinizde servis girişi yoksa ana giriş için en sakin saati birlikte belirleriz.",
            },
            {
                soru: "Dar bir sokaktayız, büyük kamyon giremeyebilir mi?",
                cevap:
                    "Evet, tarihi merkez gibi dar sokaklı bölgelerde büyük bir aracın manevrası zor olabilir; bu durumda daha küçük bir araç kullanır, gerekirse platformu son birkaç metre elle yürütürüz. Sokağınızın genişliğini ve varsa bir dönüş kısıtını (köşe, kavşak) bildirirseniz doğru aracı önceden seçeriz.",
            },
            {
                soru: "Kamu binasının yük rampasını kullanmak için izin gerekiyor mu?",
                cevap:
                    "Çoğu kamu binasında evet; rampa kullanımı bina yönetiminin onayına ve bazen güvenlik kaydına tabidir. Nakliye saatini planlarken bu izni önceden bina yönetiminden alırız veya sizin almanızı isteriz; izin netleşmeden teslimat gününü kesinleştirmeyiz.",
            },
            {
                soru: "İş erken bitti, platform hemen mi çıkarılıyor?",
                cevap:
                    "Mümkünse evet; geri alım aracını pencerenin sonuna göre planladığımız için erken biten bir işte platformu aynı gece başka bir adrese yönlendirebiliriz, bu da sizi bekletmeden filoyu verimli kullanmamızı sağlar. Erken bitiş ihtimali varsa bunu bize önceden belirtmeniz planlamayı kolaylaştırır.",
            },
            {
                soru: "Sabah açılıştan önce alan tamamen boş mu olacak?",
                cevap:
                    "Evet, bu standart hedefimizdir; geri alım saatini işletmenizin açılış saatine göre geriye doğru kurarız ve platform, siz açılmadan önce sahadan tamamen çıkarılmış olur. Açılış saatinizi ve varsa esnek bir marj olup olmadığını bildirirseniz, geri alım saatini buna göre netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Şehir içi cadde/sokak yapısı ve kamu binası rampa uygulaması kamuya açık genel bilgidir; indirme noktası seçimi ve geri alım zamanlaması firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Mağaza Deposu ve Kamu Binası Arka Alanında Forklift ve İstifleme Desteği",
        giris:
            "Kent içi bir mağazanın veya kamu binasının forklift ihtiyacı, bir lojistik merkezininkinden çok farklı bir ölçekte gelir: raf sistemi kurulumu için birkaç palet malzemenin arka depoya indirilmesi, bir etkinlik öncesi masa-sandalye stoğunun taşınması, ya da bir tadilat sırasında yıkılan malzemenin toplanması gibi kısa ve tekil kalemlerdir. Bu sayfa, ilimizdeki mağaza ve kamu binası taleplerinde forklift ve istifleme desteğinin nasıl planlandığını — dar arka giriş, kısa çalışma süresi ve genellikle platform kiralamasıyla aynı ziyarete sığdırılan kapsam — ele alır; sanayi holünde sürekli çalışan bir forklift filosu veya kırsal bir hatta malzeme taşıma bu sayfanın konusu değildir.",
        maddeler: [
            {
                baslik: "Arka giriş ölçüsü forkliftin sınıfını belirler",
                metin:
                    "Mağazaların çoğunda forklift, ana müşteri girişinden değil dar bir arka veya yan kapıdan içeri alınır; bu kapının genişliği standart bir forklift için çoğu zaman yetersizdir ve daha dar gövdeli, kısa dönüş yarıçaplı bir sınıf tercih edilir. Talebi aldığımızda arka girişin ölçüsünü ve zemin kot farkını (rampa mı, basamak mı) sorarız.",
            },
            {
                baslik: "Kısa süreli tekil kalemler",
                metin:
                    "Kent içi bir forklift talebi genellikle bir-iki saati aşmaz — bir palet malzeme indirme, bir stok yerleştirme, bir etkinlik öncesi taşıma. Bu kısalık, mağaza veya kamu binasının kapanış sonrası dar penceresine kolayca sığar, ancak forkliftin ve platformun aynı adrese aynı gün gelmesi gerekiyorsa iki aracın sırası önceden planlanır.",
            },
            {
                baslik: "Platform işiyle aynı ziyarette birleştirme",
                metin:
                    "Bir mağazanın hem tavan aydınlatması (platform) hem arka depo düzenlemesi (forklift) varsa, bu iki işi aynı gece penceresinde art arda planlamayı öneririz; makine ve forklift aynı sevkiyatla gelir, biri diğerini beklemeden kendi kalemine başlar. Bu, tek nakliye bedeliyle iki farklı ihtiyacı karşılar.",
            },
            {
                baslik: "Hassas zeminde çatal izi riski",
                metin:
                    "Forkliftin tekerlekleri kadar çatalların da hassas bir zeminde iz bırakma riski vardır, özellikle palet indirirken zemine sürtme durumunda; bu yüzden hassas zeminli mağazalarda indirme noktasına koruyucu bir zemin örtüsü serilir ve çatal hareketleri yavaş, kontrollü yapılır.",
            },
            {
                baslik: "Etkinlik öncesi toplu taşıma",
                metin:
                    "Kamu binalarında düzenlenen bir etkinlik öncesi, masa-sandalye veya sahne malzemesinin toplu taşınması sık talep edilen bir kalemdir; bu işler genellikle etkinlik gününden bir-iki gün önce, mesai dışı bir pencerede planlanır ki etkinlik günü alan tamamen hazır olsun.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kent içi forklift talebinde tipik kalem",
                paragraflar: [
                    "Mağaza ve kamu binası taleplerinde forklift ihtiyacı genellikle aşağıdaki kalemlerden birine denk gelir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Süre", "Zemin önlemi", "Pencere"],
                    satirlar: [
                        ["Palet malzeme indirme", "30-60 dk", "Koruyucu örtü", "Kapanış sonrası"],
                        ["Arka depo yerleştirme", "1-2 saat", "Standart", "Kapanış sonrası"],
                        ["Etkinlik öncesi taşıma", "1-2 saat", "Standart", "Etkinlik öncesi gece"],
                        ["Tadilat malzeme toplama", "Değişken", "Koruyucu örtü", "Mesai dışı"],
                    ],
                },
            },
            {
                baslik: "İki aracın aynı ziyarette sırası",
                paragraflar: [
                    "Hem forklift hem platform gerektiren bir işte, önce forklift arka depoyu boşaltır veya malzemeyi yerleştirir, ardından platform tavan veya üst raf işine geçer; bu sıra, alanın önce açılıp sonra üst seviyede çalışılmasını sağlar ve iki aracın birbirinin güzergâhını kesmesini önler.",
                    "Bazı işlerde sıra tersine çevrilir — örneğin üst raf boşaltılmadan forklift zemin işine başlayamıyorsa. Bu sırayı talebi aldığımızda işin kapsamına göre birlikte belirleriz.",
                ],
            },
            {
                baslik: "Etkinlik takviminde geriye doğru planlama",
                paragraflar: [
                    "Kamu binası etkinlikleri için taşıma talebini, etkinlik gününden değil kurumun hazırlık takviminden geriye doğru planlarız; malzemenin etkinlikten en az bir gün önce yerinde olması, son dakika bir aksaklığa karşı pay bırakır.",
                    "Etkinlik tarihinizi ve hazırlık için ayırdığınız süreyi paylaşırsanız, taşıma gününü bu takvime göre önerdiğimiz bir tarihte netleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mağazamızın arka kapısı dar, forklift girer mi?",
                cevap:
                    "Kapı ölçüsüne bağlıdır; dar gövdeli, kısa dönüş yarıçaplı bir sınıf çoğu standart arka kapıdan geçebilir. Kapının genişliğini, varsa bir rampa veya basamağı bildirirseniz net bir değerlendirme yaparız. Gerçekten çok darsa, malzemeyi elle taşımaya uygun küçük parçalara bölmeyi veya alternatif bir giriş noktasını değerlendiririz.",
            },
            {
                soru: "Hem forklift hem platform lazım, ikisini aynı gün mü getiriyorsunuz?",
                cevap:
                    "Evet, mümkünse ikisini aynı sevkiyatla ve aynı gece penceresinde art arda planlarız; bu hem nakliye bedelini tek kalemde toplar hem de işlerin sırası önceden netleştiği için zaman kaybını önler. İki kalemin de kapsamını ve tahmini sürelerini paylaşırsanız, sırayı ve toplam pencere ihtiyacını birlikte hesaplarız.",
            },
            {
                soru: "Zeminimiz hassas, çatal iz bırakır mı?",
                cevap:
                    "Doğru hazırlıkla bırakmaz; hassas zeminli mağazalarda indirme noktasına koruyucu örtü seriyoruz ve çatal hareketlerini yavaş, kontrollü yapıyoruz. Zemininizin tipini ve varsa özel bir hassasiyeti önceden bildirirseniz, hazırlığı buna göre yaparız.",
            },
            {
                soru: "Etkinlik öncesi taşımayı ne zaman planlamalıyız?",
                cevap:
                    "Etkinlik gününden en az bir gün önce, mesai dışı bir pencerede planlamanızı öneririz; bu, taşıma sırasında çıkabilecek küçük bir aksaklığa karşı pay bırakır ve etkinlik günü alanın tamamen hazır olmasını garanti eder. Etkinlik tarihinizi ve hazırlık süresi tercihinizi paylaşırsanız, uygun bir taşıma günü öneririz.",
            },
            {
                soru: "Kısa bir iş için forklift kiralamak pahalı mı?",
                cevap:
                    "Tek başına kısa bir iş için nakliye bedeli iş süresine göre orantısız kalabilir; bu yüzden mümkünse aynı ziyarette platform veya başka bir kalemle birleştirmenizi öneririz. Kalem listenizi paylaşırsanız, tek sevkiyatla karşılanıp karşılanamayacağını değerlendiririz.",
            },
            {
                soru: "Forklift operatörü ehliyeti olan personelimiz var, kendimiz kullanabilir miyiz?",
                cevap:
                    "Geçerli forklift ehliyetiniz ve makineye uygun yetkinlik belgeniz varsa bu değerlendirilebilir; kiralama koşulları ve sorumluluk çerçevesi bu durumda ayrıca netleştirilir. Operatörlü kiralamayı tercih ederseniz, operatörümüz mekânın zemin ve giriş kısıtlarına önceden hakim olarak sahaya gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Mağaza arka giriş ölçüleri ve kamu binası etkinlik hazırlığı kamuya açık genel bilgidir; forklift-platform birleşik ziyaret sırası firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Yüksek Tavanlı AVM ve Otel Lobisinde Eklemli Platform (Boom) Kiralama",
        giris:
            "Bir AVM'nin iç avlusundaki cam tavan, bir otel lobisinin çok katlı açıklığı veya bir kamu binasının büyük salonundaki üst kat balkonu, düz bir kolun değil yandan ve yukarı doğru eğrilen bir kolun ulaşabileceği hedeflerdir; eklemli platformun (boom) buradaki rolü, zemindeki sabit engelleri (avize, banko, oturma grubu) aşarak hedefe köşeli bir rotayla ulaşmaktır. Bu sayfa, ilimizdeki büyük ölçekli kent içi mekânlarda eklemli platformun ne zaman standart makaslı platformdan tercih edildiğini, kol menzilinin nasıl hesaplandığını ve iç mekân versiyonunun akülü/egzozsuz özelliklerini ele alır; sanayi holünde hat üstü bakım veya kırsal bir direk-konsol işi bu sayfanın konusu değildir.",
        maddeler: [
            {
                baslik: "Zemindeki engeli aşan eğri rota",
                metin:
                    "Makaslı platform yalnız dikey yükselir; hedefin tam altına park edilemiyorsa (bir avize, bir merdiven boşluğu, bir su öğesi varsa) işe yaramaz. Eklemli platformun kolu ise yukarı kalkarken aynı zamanda yana açılabilir, bu sayede zemindeki bir engelin birkaç metre ötesinden hedefe ulaşabilir. AVM iç avlularında bu özellik neredeyse her zaman gereklidir çünkü avlu tabanı genellikle boş değildir.",
            },
            {
                baslik: "Kol menzilinin önceden hesaplanması",
                metin:
                    "Talebi aldığımızda hedefin yerden yüksekliğini, yatay uzaklığını ve varsa engelin boyutunu sorarız; bu üç ölçü, kolun hem dikey hem yatay erişiminin yeterli olup olmadığını gösterir. Menzil sınırdaysa daha büyük kapasiteli bir sınıfa geçilir; menzili aşan bir talep için ise farklı bir erişim noktası (örneğin üst kattan) değerlendirilir.",
            },
            {
                baslik: "Kapalı hacimde akülü kol tahriki",
                metin:
                    "İç mekân işlerinde kullanılan eklemli platformlar elektrikli tahriklidir; bu, kapalı bir AVM veya lobide egzoz biriktirmeden çalışmayı mümkün kılar. Ancak elektrikli modellerin kol kapasitesi bazı dizel modellere göre sınırlı olabilir; bu yüzden çok büyük menzilli bir iç mekân talebinde önce elektrikli sınıfın yeterliliği kontrol edilir.",
            },
            {
                baslik: "Cam tavan ve avize etrafında güvenli mesafe",
                metin:
                    "Cam tavanlı avlularda kolun cam yüzeye veya çelik taşıyıcıya değecek kadar yaklaşmaması için çalışma sınırı önceden belirlenir; avize gibi asılı elemanların etrafında da benzer bir güvenli mesafe bırakılır. Bu sınırlar, çalışma başlamadan önce operatörle birlikte gözle doğrulanır.",
            },
            {
                baslik: "Gece programında kol açma-kapama süresi",
                metin:
                    "Eklemli platformun kurulumu ve sökümü, makaslı bir platforma göre biraz daha uzun sürebilir çünkü kolun güvenli açılma sırası izlenir; bu, kapanış sonrası dar bir pencerede toplam süreyi etkileyen bir faktördür ve program yaparken bu ek süre payına dahil edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hedef konumuna göre sınıf seçimi",
                paragraflar: [
                    "Hedefin zemine göre konumu, eklemli platformun mi yoksa makaslı platformun mu uygun olduğunu belirler.",
                ],
                tablo: {
                    basliklar: ["Hedef konumu", "Zemin altı engel", "Uygun sınıf", "Tahrik"],
                    satirlar: [
                        ["Tam tavan, boş zemin", "Yok", "Makaslı", "Akülü"],
                        ["Avize etrafı", "Var (avize kendisi)", "Eklemli, kısa kol", "Akülü"],
                        ["İç avlu cam tavanı", "Su öğesi/oturma grubu", "Eklemli, uzun kol", "Akülü"],
                        ["Üst kat balkon altı", "Balkon çıkıntısı", "Eklemli, yandan erişim", "Akülü"],
                    ],
                },
            },
            {
                baslik: "Üç ölçünün birlikte doğrulanması",
                paragraflar: [
                    "Kol menzili hesaplanırken yalnız yükseklik değil, yatay uzaklık ve varsa engelin yüksekliği de birlikte değerlendirilir; bu üçü ayrı ayrı yeterli görünse bile birlikte kolun fiziksel çalışma zarfına (menzil diyagramına) sığmayabilir.",
                    "Bu yüzden büyük ölçekli bir AVM veya otel talebinde, mümkünse mekânın kesit fotoğrafını veya en azından hedefin üç ölçüsünü isteriz; sahaya çıkmadan önce doğru sınıfı netleştirmek, gece penceresinde zaman kaybını önler.",
                ],
            },
            {
                baslik: "Kurulum süresinin pencereye etkisi",
                paragraflar: [
                    "Eklemli platformun güvenli açılma sırası, kolun her ekleminin kontrollü şekilde devreye girmesini gerektirir; bu, makaslı bir platforma göre birkaç dakika daha uzun bir kurulum süresi anlamına gelir.",
                    "Dar bir gece penceresinde çalışılıyorsa bu ek süreyi baştan programa dahil ederiz; pencereniz özellikle kısaysa, mümkün olduğunda daha hızlı kurulan makaslı bir alternatifi de birlikte değerlendiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "AVM'nin iç avlusunda su öğesi var, platform oraya yaklaşabilir mi?",
                cevap:
                    "Eklemli platformun kolu, su öğesi gibi zemindeki bir engelin birkaç metre ötesinden hedefe yandan ulaşabilir; makine su öğesine yaklaştırılmaz, yalnızca kol o mesafeyi aşar. Avlunun düzenini ve hedefin su öğesine olan mesafesini paylaşırsanız, kolun yeterli olup olmadığını önceden hesaplarız.",
            },
            {
                soru: "Lobimizin avizesi var, etrafında güvenle çalışabilir misiniz?",
                cevap:
                    "Evet, ancak avizenin etrafında önceden belirlenen bir güvenli mesafe bırakılır ve bu sınır operatörle birlikte çalışma başlamadan gözle doğrulanır. Avizenin boyutunu ve zeminden yüksekliğini bildirirseniz, kol rotasını buna göre planlarız.",
            },
            {
                soru: "Dizel değil akülü kullanıyorsunuz, menzil yeterli olur mu?",
                cevap:
                    "Çoğu kent içi iç mekân talebinde elektrikli sınıfın menzili yeterlidir; menzil sınırda kalan büyük ölçekli işlerde daha büyük kapasiteli elektrikli bir sınıfa geçilir. Hedefin yükseklik ve yatay uzaklık ölçüsünü paylaşırsanız, elektrikli sınıfın yeterliliğini net söyleriz; dizel kapalı hacimde kullanılmaz.",
            },
            {
                soru: "Kurulum ne kadar sürüyor, kısa pencerede yetişir mi?",
                cevap:
                    "Eklemli platformun kurulumu makaslıya göre birkaç dakika daha uzun sürer çünkü kolun her ekleminin güvenli sırayla açılması izlenir. Bu süreyi programınıza baştan dahil ederiz; penceresi özellikle kısa bir işte, mümkünse daha hızlı kurulan makaslı bir alternatifi de birlikte değerlendiririz.",
            },
            {
                soru: "Hedefin ölçülerini nasıl paylaşmalıyız?",
                cevap:
                    "Yerden yükseklik, hedefin platformun park edeceği noktaya olan yatay uzaklığı ve varsa aradaki engelin boyutu yeterlidir; mümkünse mekânın kesit fotoğrafı bu üç ölçüyü daha net gösterir. Bu bilgiyle sahaya çıkmadan doğru sınıfı belirleriz.",
            },
            {
                soru: "Üst kat balkonunun altındaki bir noktaya ulaşabilir misiniz?",
                cevap:
                    "Balkon çıkıntısı zemin altı engel gibi davranır ve kolun yandan erişimini gerektirir; bu genellikle mümkündür ama balkonun çıkıntı derinliği ve hedefin balkona olan mesafesi birlikte değerlendirilmelidir. Bu ölçüleri paylaşırsanız, kolun menzil diyagramına sığıp sığmadığını netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun kol geometrisi ve elektrikli tahrik özelliği genel ürün bilgisidir; üç ölçü doğrulama yöntemi ve kesit fotoğrafı talebi firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Mağaza, Otel ve Kamu Binası İç Mekânında Depo İçi Platform Kiralama Standardı",
        giris:
            "Bu sayfa, yukarıdaki bölge sayfalarında ilçe ilçe anlatılan iç mekân kuralının tek bir çatı altında toplanmış hâlidir: kapalı bir mağaza, otel veya kamu binasının içinde çalışan bir platformun uyması gereken üç sabit kural — egzozsuz akülü tahrik, zemine göre koruma önlemi ve kapanış sonrası ya da mesai dışı çalışma penceresi. İlimizdeki her kent içi talep, hangi ilçede veya hangi mekân tipinde olursa olsun bu üç kuraldan geçer; farklılaşan şey yalnızca zeminin cinsi (mermer, parke, seramik, ahşap), mekânın kullanım yoğunluğu ve bina yönetiminin onay süreci olur. Bu sayfa, standardı tek seferde ve ayrıntılı biçimde anlatır; sanayi holünün toz ve vinç trafiği kuralları veya kırsal bir hattın enerji kesme prosedürü burada anlatılmaz, o kurallar tamamen farklı bir kapsamdır.",
        maddeler: [
            {
                baslik: "Egzozsuz kuralının istisnasızlığı",
                metin:
                    "Kapalı bir mağaza, otel odası katı veya kamu binası salonunda dizel ya da LPG'li bir makine kullanılmaz; bu kural, hacmin büyüklüğü veya havalandırma kapasitesi ne olursa olsun değişmez çünkü egzoz gazının kapalı hacimde birikmesi hız meselesi değil fizik meselesidir. Talebi aldığımızda ilk sorduğumuz şey hacmin tamamen kapalı mı yoksa yarı açık mı olduğudur.",
            },
            {
                baslik: "Zemin cinsine göre değişen koruma seviyesi",
                metin:
                    "Standart seramik veya beton bir zeminde iz bırakmayan tekerlek genellikle yeterlidir; mermer, cilalı parke veya tarihi bir doku söz konusuysa buna ek olarak koruyucu örtü, dönüş noktalarında mat ve bazen yük dağıtıcı takoz kullanılır. Zemin cinsini önceden bilmek, hazırlığın doğru seviyede yapılmasını sağlar — az hazırlık risk taşır, gereksiz fazla hazırlık ise zaman kaybettirir.",
            },
            {
                baslik: "Pencerenin mekân tipine göre farklılaşması",
                metin:
                    "AVM'de gece, otelde sabahın erken saati veya gece, kamu binasında mesai dışı, küçük bir mağazada kapanış sonrası bir-iki saat — pencere süresi ve saat aralığı mekân tipine göre değişir ama hepsinde ortak olan, müşteri veya ziyaretçi akışının en düşük olduğu zamana denk gelmesidir. Bu sayfa, bu farklılaşmanın genel mantığını anlatır; kesin saat, mekânın kendi işletme takvimine göre netleşir.",
            },
            {
                baslik: "Bina yönetimiyle koordinasyonun standart adımları",
                metin:
                    "Büyük binalarda (AVM, kamu binası, çok katlı otel) ortak alan kullanımı bina yönetiminin onayına tabidir; bu onay süreci genellikle giriş saati bildirimi, bazen güvenlik kaydı ve nadiren bir refakatçi talebiyle sonuçlanır. Küçük bir dükkânda ise muhatap doğrudan işletme sahibidir ve süreç daha hızlı ilerler. Hangi tip olduğunuzu bildirdiğinizde süreci ona göre kurarız.",
            },
            {
                baslik: "Sınırlı katlı yapıda erişim gerçeği",
                metin:
                    "Standart platform makineleri yalnızca zemin kat işlerinde kullanılır; üst kata çıkarma, yük asansörünün genişliği yeterli olsa bile ağırlık sınırı nedeniyle çoğu zaman mümkün değildir. Üst kat işlerinde o katın kendi bağımsız girişi olup olmadığı değerlendirilir; yoksa alternatif erişim yöntemleri konuşulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân standardının üç kuralı — tek tabloda",
                paragraflar: [
                    "Mekân tipi ne olursa olsun uygulanan üç kural aşağıdaki gibi özetlenebilir; bölge sayfalarındaki ayrıntılar bu çekirdek tablonun ilçeye göre uyarlanmış hâlidir.",
                ],
                tablo: {
                    basliklar: ["Kural", "Neden", "Uygulama", "İstisna"],
                    satirlar: [
                        ["Egzozsuz akülü tahrik", "Kapalı hacimde emisyon birikimi", "Her iç mekân işinde standart", "Yok"],
                        ["Zemine göre koruma", "Mermer/parke/ahşap hassasiyeti", "İz bırakmayan tekerlek + örtü", "Standart seramik/beton"],
                        ["Kapanış sonrası/mesai dışı pencere", "Müşteri/ziyaretçi akışı", "Mekân tipine göre saat", "Acil dar pencerede sınırlı gündüz"],
                        ["Bina yönetimi onayı", "Ortak alan kullanımı", "Büyük binalarda zorunlu", "Küçük bağımsız dükkân"],
                    ],
                },
            },
            {
                baslik: "Standardın ilçe sayfalarıyla ilişkisi",
                paragraflar: [
                    "Yukarıdaki tablo, sitemizdeki her ilçe sayfasının (Tepebaşı, Odunpazarı, şehir merkezi, çevre ilçeler) altında yatan aynı üç kuraldır; ilçe sayfaları bu kuralı o bölgenin kendine özgü zemin dokusu, sevkiyat mesafesi veya kurum yapısıyla birleştirir.",
                    "Talebiniz hangi ilçede olursa olsun, önce bu üç kuralı netleştirir, ardından o ilçeye özgü ek faktörleri (mesafe, bina yönetimi süreci) devreye sokarız.",
                ],
            },
            {
                baslik: "Standart dışı kalan işler",
                paragraflar: [
                    "Bu sayfa yalnızca kapalı, tavanlı iç mekân işlerini kapsar; bir binanın açık avlusu, çatısı veya dış cephesi farklı bir kural setine (dış mekân) tabidir ve bu sayfada anlatılmaz.",
                    "Sanayi holü içindeki bir üretim hattı bakımı da farklı bir kapsamdır — orada toz, vinç trafiği ve saha güvenlik prosedürü öne çıkar; bu sayfa kent içi ticaret ve kamu hizmeti binalarına özgüdür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bu sayfa ile ilçe sayfalarındaki iç mekân bilgisi arasındaki fark ne?",
                cevap:
                    "İlçe sayfaları (Tepebaşı, Odunpazarı, şehir merkezi ve diğerleri) aynı üç kuralı o bölgenin kendine özgü koşullarıyla (zemin dokusu, sevkiyat mesafesi, kurum yapısı) birleştirir; bu sayfa ise kuralın kendisini, ilçeden bağımsız olarak tek seferde anlatır. Hangi ilçede olursanız olun önce bu genel kuralı, sonra ilçenize özgü ek faktörleri birlikte değerlendiririz.",
            },
            {
                soru: "Zeminimiz standart seramik, ekstra koruma gerekir mi?",
                cevap:
                    "Standart seramik veya beton zeminlerde genellikle iz bırakmayan tekerlek yeterlidir, ek bir koruma önlemi gerekmez. Mermer, cilalı parke veya tarihi bir doku söz konusuysa bu, koruyucu örtü ve bazen yük dağıtıcı takoz gerektiren daha yüksek bir koruma seviyesine geçer. Zemininizin tipini bildirirseniz doğru seviyeyi baştan uygularız.",
            },
            {
                soru: "Büyük bir binadayız, bina yönetiminin onayı olmadan çalışabilir misiniz?",
                cevap:
                    "Ortak alan kullanımı (asansör, ana giriş, yük rampası) gerektiren büyük binalarda hayır, bina yönetiminin onayı standart bir adımdır. Küçük, bağımsız girişi olan bir dükkânda ise muhatap doğrudan işletme sahibidir ve bu adım gerekmez. Binanızın tipini bildirirseniz süreci ona göre başlatırız.",
            },
            {
                soru: "Üst kattaki bir mağazada çalışabilir misiniz?",
                cevap:
                    "Standart platform makineleri yalnızca zemin kat işlerinde kullanılır; yük asansörünün genişliği yeterli olsa bile ağırlık sınırı nedeniyle üst kata çıkarma çoğu zaman mümkün değildir. Üst kattaki mağazanızın kendi bağımsız girişi varsa bunu değerlendiririz; yoksa alternatif erişim yöntemlerini konuşuruz.",
            },
            {
                soru: "Gündüz çalışmak hiç mümkün değil mi?",
                cevap:
                    "Tamamen imkânsız değildir ama önermeyiz; müşteri veya ziyaretçi akışının olduğu saatte çalışma hem işi yavaşlatır hem güvenlik riski oluşturur. Gerçekten acil bir durumda, mekânın en sakin saatini belirleyip çalışma alanını basit bir bariyerle ayırarak sınırlı bir çalışma yapabiliriz. Standart tercihimiz her zaman kapanış sonrası veya mesai dışı pencerdir.",
            },
            {
                soru: "Bu üç kural her zaman aynı mı uygulanıyor, yoksa esneklik var mı?",
                cevap:
                    "Egzozsuz kural istisnasızdır; zemin koruma seviyesi zeminin cinsine göre ayarlanır; pencere saati mekânın kendi işletme takvimine göre esner. Yani kuralların varlığı sabit, uygulama yoğunluğu mekâna göre değişir. Mekânınızın tipini ve zeminini bildirdiğinizde, bu üç kuralı size özgü şekilde netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kent içi iç mekân işlerinin üç temel kuralı (egzozsuz tahrik, zemin koruma, mesai dışı pencere) firma saha pratiğidir ve ilçe sayfalarındaki ayrıntıların ortak paydasıdır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Mağaza Tabela İskeleti ve Kamu Binası Dış Cephe Montajında Platform Desteği",
        giris:
            "Kent içi bir çelik konstrüksiyon işi, bir sanayi holünün çatı taşıyıcısından farklı bir ölçekte gelir: bir mağazanın tabela iskeleti, bir otoparkın gölgelik çerçevesi, bir kamu binasının dış cephe kaplama profili veya bir AVM girişinin kanopi taşıyıcısı gibi küçük ve genellikle görünür kalemlerdir. Bu sayfa, ilimizdeki kent içi işletme ve kamu binalarında bu ölçekteki çelik montaj işlerine platform desteğinin nasıl verildiğini ele alır; büyük bir sanayi holünün ana taşıyıcı montajı veya kırsal bir direk portalı işi bu sayfanın kapsamı dışındadır — o ölçekteki işler farklı bir ekipman ve süreç gerektirir.",
        maddeler: [
            {
                baslik: "Tabela iskeleti montajında konum hassasiyeti",
                metin:
                    "Bir mağaza tabelasının çelik iskeleti, cadde görünürlüğüne göre milimetrik bir konuma yerleştirilir; platform, montaj ekibinin bu hassas konumlandırmayı yaparken sabit ve güvenli bir çalışma yüzeyi sağlar. İskeletin ağırlığı ve montaj yüksekliği önceden bilinerek uygun kapasiteli sınıf belirlenir.",
            },
            {
                baslik: "Otopark gölgelik çerçevesinde açık alan çalışması",
                metin:
                    "Otopark gölgelik sistemlerinin çelik çerçeve montajı genellikle açık havada, ancak araç trafiğinin olduğu bir alanda yapılır; bu işlerde platform hem yükseklik sağlar hem de çalışma alanının araç trafiğinden geçici olarak ayrılmasını gerektirir. Otoparkın kullanım yoğunluğuna göre çalışma, düşük trafikli saatlere planlanır.",
            },
            {
                baslik: "Dış cephe kaplama profilinde bina kullanımıyla uyum",
                metin:
                    "Kamu binası veya ofis binasının dış cephesine kaplama profili montajı yapılırken, bina içindeki kullanım devam ediyorsa platformun cephe önündeki konumu pencerelerin önünü uzun süre kapatmayacak şekilde planlanır; bu, bina içindeki çalışanların gün ışığından tamamen mahrum kalmasını önler.",
            },
            {
                baslik: "AVM girişi kanopi taşıyıcısında müşteri güvenliği",
                metin:
                    "AVM ana girişindeki kanopi (üstü kapalı geçiş) taşıyıcısının montajı, müşteri giriş-çıkışının kesintisiz sürdüğü bir noktada yapılır; bu yüzden çalışma alanı geçici bariyerlerle ayrılır ve montaj, mümkünse müşteri yoğunluğunun düşük olduğu saatlere veya kapanış sonrasına planlanır.",
            },
            {
                baslik: "Küçük ölçekli kalemde vinç yerine platform tercihi",
                metin:
                    "Bu ölçekteki çelik parçalar (tabela iskeleti, gölgelik çerçevesi gibi) genellikle bir vinç gerektirecek kadar ağır değildir; platform, hem yükseltme hem sabit çalışma yüzeyi sağlayarak vinç-platform ikilisine göre daha hızlı ve ekonomik bir kurulum sunar. Parça ağırlığı vinç gerektirecek düzeye çıkarsa bu, talebi aldığımızda ayrıca değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kent içi çelik montaj kalemine göre yaklaşım",
                paragraflar: [
                    "Kent içindeki çelik konstrüksiyon kalemleri, ölçeğine göre aşağıdaki gibi farklı bir yaklaşım gerektirir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Tipik ağırlık", "Ekipman", "Pencere"],
                    satirlar: [
                        ["Tabela iskeleti", "Hafif-orta", "Platform", "Kapanış sonrası"],
                        ["Otopark gölgelik çerçevesi", "Orta", "Platform + geçici bariyer", "Düşük trafik saati"],
                        ["Dış cephe kaplama profili", "Hafif", "Platform", "Mesai dışı tercih"],
                        ["AVM giriş kanopi taşıyıcısı", "Orta-ağır", "Platform (vinç gerekebilir)", "Müşteri dışı saat"],
                    ],
                },
            },
            {
                baslik: "Parça ağırlığının ekipman kararına etkisi",
                paragraflar: [
                    "Bu ölçekteki çoğu çelik parça platformun kendi kapasitesiyle konumlandırılabilir, ancak bazı kanopi veya büyük gölgelik taşıyıcıları vinç yardımı gerektirebilir; bu durumda platform montaj ekibini yükseğe taşırken, vinç parçayı yerine indirir ve ikisi ardışık çalışır.",
                    "Parçanın ağırlığını ve boyutunu talebi aldığımızda sorarız; vinç ihtiyacı varsa bunu önceden netleştirir, teklife dahil ederiz.",
                ],
            },
            {
                baslik: "Görünür alanda çalışmanın estetik boyutu",
                paragraflar: [
                    "Tabela, kanopi ve cephe gibi kalemler binanın görünen yüzüdür; bu yüzden çalışma alanı düzenli tutulur, malzeme ve alet dağınık bırakılmaz, gün sonunda alan temizlenir.",
                    "Müşteri veya ziyaretçi akışının olduğu bir noktada çalışılıyorsa, geçici bariyer ve yönlendirme levhalarıyla alan görsel olarak da düzenli bir izlenim bırakacak şekilde ayrılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mağazamızın tabela iskeletini monte edeceksiniz, hangi ölçüler gerekiyor?",
                cevap:
                    "İskeletin ağırlığı, montaj yüksekliği ve cepheye olan yatay uzaklığı gerekir; bu üç bilgiyle uygun kapasiteli platform sınıfını belirleriz. Tabelanızın teknik çizimi veya en azından bu üç ölçü varsa paylaşmanız, doğru ekipmanla sahaya gelmemizi sağlar.",
            },
            {
                soru: "Otoparkımızda araç trafiği var, çalışma alanını nasıl güvenli hâle getiriyorsunuz?",
                cevap:
                    "Çalışma alanını geçici bariyerlerle araç trafiğinden ayırır ve mümkünse montajı otoparkın düşük kullanım yoğunluğuna denk getiririz. Otoparkınızın en sakin saatlerini bildirirseniz, programı ona göre kurarız; tamamen kapatma gerekiyorsa bunu önceden sizinle netleştiririz.",
            },
            {
                soru: "Bina cephesine profil monte ederken içerideki çalışanları etkiler mi?",
                cevap:
                    "Platformun cephe önündeki konumunu, pencerelerin önünü uzun süre kapatmayacak şekilde planlarız ve mümkünse bölüm bölüm ilerleriz; bu, içerideki çalışanların gün ışığından uzun süre mahrum kalmasını önler. Binanızın kat planını ve çalışma saatlerini bildirirseniz, sırayı buna göre kurarız.",
            },
            {
                soru: "AVM girişimizin kanopi taşıyıcısı için vinç de mi gerekiyor?",
                cevap:
                    "Bu, taşıyıcının ağırlığına bağlıdır; birçok kanopi taşıyıcısı platformun kendi kapasitesiyle konumlandırılabilir, ancak büyük ve ağır taşıyıcılarda platform montaj ekibini yükseğe taşırken vinç parçayı indirir. Taşıyıcının ağırlık ve boyut bilgisini paylaşırsanız, vinç ihtiyacını önceden netleştirir teklife dahil ederiz.",
            },
            {
                soru: "Gündüz mü gece mi çalışıyorsunuz?",
                cevap:
                    "Mümkünse müşteri veya ziyaretçi yoğunluğunun düşük olduğu saatlere, hatta kapanış sonrasına planlarız; bu hem güvenlik hem de görsel düzen açısından tercih ettiğimiz yaklaşımdır. Bazı dış cephe işlerinde gündüz çalışma da mümkündür, bu durumda çalışma alanı bariyerle ayrılır. Mekânınızın kısıtlarını bildirirseniz en uygun saati birlikte belirleriz.",
            },
            {
                soru: "İş bitince alan temiz teslim ediliyor mu?",
                cevap:
                    "Evet, özellikle görünür alanlarda (tabela, kanopi, cephe) çalışma sonunda malzeme ve alet toplanır, alan temizlenir ve varsa geçici bariyerler kaldırılır. Bu, binanın görünen yüzünde çalıştığımız için standart bir uygulamamızdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kent içi tabela/gölgelik/kanopi ölçeğindeki çelik montaj işleri kamuya açık genel bilgidir; platform-vinç ardışık kullanım kararı ve görünür alan temizlik standardı firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Kent İçi Kurumların Tarım ve Kooperatif İdari Binalarında İç Mekân Platformu",
        giris:
            "Bu domainin odağı kent içi mağaza, otel ve kamu binası iç mekânı olduğu için, tarım ve silo sahasının kendi teknik ihtiyaçlarını (silo dış yapısı, tahıl transfer hattı, açık saha aydınlatması) burada ele almıyoruz — bu kapsam, filomuzun kırsal hat ve enerji altyapısına odaklanan başka bir hizmet hattına aittir. Ancak Eskişehir çevresindeki tarımsal kooperatiflerin ve gıda işletmelerinin idari bina, ofis ve toplantı salonu kısımları, tıpkı bir şehir merkezi ofisi gibi kent içi iç mekân kurallarına tabidir; bu sayfa yalnızca bu sınırlı ve dürüst kapsamı — kooperatif ve tarım işletmesi idari binalarının iç mekân hizmetini — ele alır.",
        maddeler: [
            {
                baslik: "İdari bina, üretim alanından ayrı bir hizmet rejimidir",
                metin:
                    "Bir tarımsal kooperatifin veya gıda işletmesinin idari binası, aynı tesisin depo veya işleme alanından tamamen farklı bir kural setine tabidir: idari binada standart bir ofis zemini, standart bir mesai saati ve standart bir iç mekân disiplini geçerlidir. Üretim veya depolama alanındaki toz, açık saha ve ekipman komşuluğu gibi konular bu sayfanın kapsamı dışındadır.",
            },
            {
                baslik: "Kooperatif ofisinde standart kalem",
                metin:
                    "Kooperatif ofislerinde en sık talep edilen kalemler tavan aydınlatması, toplantı salonu projeksiyon/perde sistemi montajı ve klima kanal bakımıdır; bu kalemler bir şehir merkezi ofisindeki taleplerden içerik olarak farklı değildir, yalnızca konum kırsala daha yakındır.",
            },
            {
                baslik: "Standart zeminde sınırlı önlem",
                metin:
                    "Bu tip idari binaların zemini genellikle standart seramik veya betondur, mermer veya hassas ahşap gibi özel koruma gerektiren yüzeyler nadir görülür; bu yüzden zemin koruma önlemi çoğunlukla iz bırakmayan tekerlekle sınırlı kalır, ek bir koruyucu örtü gerekmez.",
            },
            {
                baslik: "Mesai dışı tercih, esneklik payı",
                metin:
                    "Kooperatif ve idari binalarda mesai saati genellikle standart bir ofis mesaisidir; çalışma mesai dışına planlanır ama bu binalarda müşteri akışı bir mağazaya göre çok daha düşük olduğundan, bazı durumlarda mesainin sakin bir diliminde de sınırlı çalışma yapılabilir.",
            },
            {
                baslik: "Silo veya açık saha talebi için doğru yönlendirme",
                metin:
                    "Talebiniz idari bina değil de silo yapısı, tahıl transfer noktası veya açık sahadaki bir aydınlatma/bakım işiyse, bu bizim kent içi iç mekân hizmetimizin değil bölgedeki kırsal hat ve açık saha odaklı hizmetin kapsamına girer; böyle bir talep geldiğinde bunu dürüstçe belirtir, doğru kapsamda değerlendirilmesi için yönlendiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapsam içi ve kapsam dışı ayrımı",
                paragraflar: [
                    "Bu hizmetin sınırlarını netleştirmek için kapsam içi ve dışı kalemler aşağıda ayrılmıştır.",
                ],
                tablo: {
                    basliklar: ["Alan", "Kapsam", "Zemin", "Pencere"],
                    satirlar: [
                        ["Kooperatif idari ofisi", "Kapsam içi", "Standart seramik/beton", "Mesai dışı"],
                        ["Toplantı salonu", "Kapsam içi", "Standart", "Mesai dışı/sakin dilim"],
                        ["Silo dış yapısı", "Kapsam dışı", "—", "—"],
                        ["Açık saha aydınlatması", "Kapsam dışı", "—", "—"],
                    ],
                },
            },
            {
                baslik: "Neden kapsamı dar tutuyoruz",
                paragraflar: [
                    "Silo ve açık tarım sahası işleri, farklı bir ekipman seçimi (dış mekân uyumlu, egzozlu olabilen), farklı zemin koşulları (toprak, çakıl) ve farklı bir güvenlik yaklaşımı gerektirir; bu bilgi ve deneyim, kent içi mağaza-otel-kamu binası odaklı bu hizmet hattının konusu değildir.",
                    "Doğru olmayan bir kapsamda hizmet önermek yerine, idari-ofis kısmını burada karşılar, saha ve silo ihtiyacınızı bölgedeki ilgili hizmetimize yönlendiririz; bu ayrım hem sizin için hem bizim için daha net bir sonuç verir.",
                ],
            },
            {
                baslik: "İdari binada birden fazla kalemi birleştirmek",
                paragraflar: [
                    "Kooperatif idari binasında birden fazla küçük kalem varsa (birkaç oda aydınlatması, bir toplantı salonu işi), bunları tek bir ziyarette toplamayı öneririz; bu, tek bir kısa kalem için ayrı ayrı sevkiyat planlamaktan daha ekonomiktir.",
                    "Kalem listenizi paylaşırsanız, tek ziyarette karşılanıp karşılanamayacağını değerlendirir, en uygun günü öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo yapımızın dış aydınlatması için de hizmet veriyor musunuz?",
                cevap:
                    "Hayır, bu sayfa yalnızca idari bina ve ofis kısmını kapsar; silo dış yapısı ve açık saha aydınlatması farklı bir ekipman ve deneyim gerektirir ve bizim kent içi hizmet hattımızın kapsamı dışındadır. Böyle bir talebiniz varsa dürüstçe belirtir, bölgedeki ilgili hizmete yönlendiririz.",
            },
            {
                soru: "Kooperatif ofisimizin toplantı salonunda projeksiyon sistemi kuracağız, platform gerekir mi?",
                cevap:
                    "Genellikle evet, tavan montajlı projeksiyon veya perde sistemi kurulumunda kompakt bir platform işi hızlandırır. Salon boyutunu ve tavan yüksekliğini bildirirseniz uygun sınıfı öneririz; zemin standart olduğu için ek bir koruma önlemi genellikle gerekmez.",
            },
            {
                soru: "İdari binamızın zemini standart, özel bir hazırlık gerekiyor mu?",
                cevap:
                    "Hayır, standart seramik veya beton zeminlerde iz bırakmayan tekerlek yeterlidir; mermer veya hassas ahşap gibi özel koruma gerektiren bir yüzeyiniz yoksa ek bir hazırlık gerekmez. Zemininizde farklı bir durum varsa bildirin, gerekirse ek önlem alırız.",
            },
            {
                soru: "Mesai saatinde sınırlı bir çalışma yapabilir misiniz?",
                cevap:
                    "İdari binalarda müşteri akışı bir mağazaya göre düşük olduğundan, mesainin sakin bir diliminde sınırlı bir çalışma bazen mümkündür. Ancak mesai dışı tercih ettiğimiz standart yaklaşımdır; işinizin aciliyetini ve mesainizin sakin saatini bildirirseniz, gündüz sınırlı çalışmanın uygun olup olmadığını değerlendiririz.",
            },
            {
                soru: "Hem ofisimizde hem depomuzda işimiz var, ikisini birden mi değerlendiriyorsunuz?",
                cevap:
                    "İdari ofis kısmını kent içi iç mekân kurallarıyla değerlendiririz; depo veya üretim alanı farklı bir kural setine (açık saha, toz, ekipman komşuluğu) tabi olabilir ve bu kısım için bölgedeki ilgili hizmete yönlendirme yapabiliriz. İki alanı da bize bildirirseniz, hangisinin bizim kapsamımızda hangisinin farklı bir hizmette olduğunu netleştiririz.",
            },
            {
                soru: "Küçük bir kooperatif ofisiyiz, tek bir armatür işi için gelir misiniz?",
                cevap:
                    "Geliriz; ancak tek başına küçük bir iş için sevkiyat bedeli iş süresine göre orantısız kalabilir. Mümkünse ofisinizdeki diğer küçük kalemleri de aynı listeye toplayıp tek ziyarette tamamlamanızı öneririz; bu, toplam maliyeti belirgin düşürür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tarımsal kooperatif ve gıda işletmelerinin idari bina yapısı kamuya açık genel bilgidir. Bu sayfa bilinçli olarak dar kapsamlıdır — silo ve açık saha bilgisi uydurulmamış, kapsam dışı bırakılmıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Mağaza Tabelası, Otopark ve Bina Dış Cephe Aydınlatma Bakımı için Platform Kiralama",
        giris:
            "Bu sayfadaki aydınlatma bakımı, bir enerji nakil hattındaki direk üstü işten farklı bir dünyadır: bir mağazanın tabela ışığı, bir otelin dış cephe vurgu aydınlatması, bir otoparkın direkleri veya bir kamu binasının bahçe aydınlatması gibi ticari ve kurumsal binaların kendi düşük gerilim aydınlatma sistemleridir. Bu sayfa, ilimizdeki kent içi işletme ve kamu binalarında bu tip aydınlatma-bakım işlerine platform desteğinin nasıl verildiğini ele alır; enerji dağıtım şirketinin orta/yüksek gerilim hattı veya kırsal bir aydınlatma direği bu sayfanın kapsamı dışındadır — o işler farklı bir güvenlik prosedürü ve ekipman seti gerektirir.",
        maddeler: [
            {
                baslik: "Tabela aydınlatmasında elektrik kesme önceliği",
                metin:
                    "Bir mağaza veya işletme tabelasının içindeki aydınlatma armatürüne müdahale edilmeden önce, tabelanın elektrik beslemesi işletme personeli veya yetkili elektrikçi tarafından kesilir; platform ekibi panoda müdahale yetkisi almaz, yalnızca kesilmiş devrede güvenli çalışma yüzeyi sağlar.",
            },
            {
                baslik: "Otopark direklerinde araç trafiğiyle eş zamanlı çalışma",
                metin:
                    "Otopark aydınlatma direklerinin bakımı, araç giriş-çıkışının sürdüğü bir alanda yapılır; bu yüzden çalışma alanı geçici bariyerle ayrılır ve mümkünse otoparkın düşük doluluk saatine planlanır. Aydınlatma direklerinin sayısı fazlaysa, birkaç direk tek ziyarette sırayla tamamlanır.",
            },
            {
                baslik: "Otel dış cephe vurgu aydınlatmasında estetik hassasiyet",
                metin:
                    "Otellerin dış cephe vurgu aydınlatması genellikle akşam saatlerinde görsel bir işlev de üstlenir; bu armatürlerin bakımı, otelin akşam görünümünü etkilememesi için mümkünse gündüz veya sabahın erken saatinde, misafirlerin cepheyi en az fark ettiği zamanda yapılır.",
            },
            {
                baslik: "Kamu binası bahçe aydınlatmasında açık alan çalışması",
                metin:
                    "Kamu binalarının bahçe veya çevre aydınlatması, bina içi bir iç mekân işi olmasa da yine kent içi bir alanda ve genellikle ziyaretçi/personel erişiminin sürdüğü bir bahçede yapılır; çalışma alanı basit bir bariyerle ayrılır ve mesai dışı bir pencere tercih edilir.",
            },
            {
                baslik: "Toplu armatür değişiminde rota planlaması",
                metin:
                    "Bir binanın tüm dış cephe veya otopark armatürlerinin toplu değişimi gerekiyorsa, platform tek bir ziyarette bina çevresinde bir rota izleyerek her armatürü sırayla değiştirir; bu rota, en az geri dönüşle en çok armatürü kapsayacak şekilde önceden planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma kalemine göre yaklaşım",
                paragraflar: [
                    "Kent içi aydınlatma bakımı kalemleri, konuma göre farklı bir çalışma yaklaşımı gerektirir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Elektrik kesme", "Pencere", "Ek önlem"],
                    satirlar: [
                        ["Mağaza tabela ışığı", "İşletme/elektrikçi tarafından", "Kapanış sonrası", "—"],
                        ["Otopark direği", "Bina elektrik yetkilisi", "Düşük doluluk saati", "Geçici bariyer"],
                        ["Otel dış cephe vurgu ışığı", "Bina elektrik yetkilisi", "Gündüz/sabah erken", "Estetik hassasiyet"],
                        ["Kamu binası bahçe aydınlatması", "Bina elektrik yetkilisi", "Mesai dışı", "Bariyer"],
                    ],
                },
            },
            {
                baslik: "Elektrik yetkisinin net ayrımı",
                paragraflar: [
                    "Platform ekibi hiçbir zaman elektrik panosunda kesme-açma işlemi yapmaz; bu işlem her zaman işletmenin kendi elektrikçisi veya bina yönetiminin yetkili personeli tarafından yürütülür. Bizim rolümüz, kesilmiş bir devrede armatüre güvenli erişim sağlamaktır.",
                    "Bu net ayrım, hem güvenlik açısından hem de sorumluluk paylaşımı açısından baştan netleştirilir; talebi aldığımızda binanızın elektrik yetkilisiyle bu koordinasyonu nasıl kuracağımızı sorarız.",
                ],
            },
            {
                baslik: "Toplu değişimde rota mantığı",
                paragraflar: [
                    "Birden fazla armatürün değişeceği bir işte, platformu bina çevresinde tek yönde ilerleyen bir rotaya sokarız; bu, aynı noktaya iki kez dönmeyi önler ve toplam çalışma süresini kısaltır.",
                    "Armatür sayısı ve konumlarını (kroki veya fotoğraf) paylaşırsanız, rotayı önceden çizer, tahmini süreyi netleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tabela ışığımızın elektriğini siz mi kesiyorsunuz?",
                cevap:
                    "Hayır, elektrik kesme işlemini işletmenizin kendi personeli veya yetkili elektrikçisi yapar; platform ekibimiz panoda müdahale yetkisi almaz. Biz yalnızca kesilmiş devrede armatüre güvenli erişim sağlarız. Elektrik yetkilinizin çalışma saatinde hazır bulunmasını önceden koordine ederiz.",
            },
            {
                soru: "Otoparkımızda araç trafiği hiç durmuyor, direk bakımı nasıl yapılıyor?",
                cevap:
                    "Çalışma alanını geçici bariyerle araç trafiğinden ayırır ve mümkünse otoparkın düşük doluluk saatine planlarız. Otoparkınızın en sakin saatlerini bildirirseniz programı ona göre kurarız; tamamen kapatma gerekiyorsa bunu önceden sizinle netleştiririz.",
            },
            {
                soru: "Otelimizin cephe aydınlatmasını gece mi değiştiriyorsunuz?",
                cevap:
                    "Genellikle hayır; dış cephe vurgu aydınlatması akşam saatlerinde görsel bir işlev üstlendiği için bakımı mümkünse gündüz veya sabahın erken saatinde yaparız, bu otelinizin akşam görünümünü etkilemez. Otelinizin tercih ettiği saati bildirirseniz programı ona göre kurarız.",
            },
            {
                soru: "Kamu binamızın bahçe aydınlatmasında kaç armatür varsa hepsini tek seferde mi yapıyorsunuz?",
                cevap:
                    "Mümkünse evet; armatür sayısı ve konumlarını bildirirseniz, bina çevresinde tek yönde ilerleyen bir rota planlarız ve hepsini tek ziyarette tamamlarız. Bu, hem süreyi kısaltır hem tekrar eden sevkiyat maliyetini önler.",
            },
            {
                soru: "Enerji dağıtım şirketinin hattındaki bir direk için de hizmet veriyor musunuz?",
                cevap:
                    "Hayır, orta veya yüksek gerilim enerji nakil hattı farklı bir güvenlik prosedürü ve ekipman gerektirir; bu, bizim kent içi düşük gerilim aydınlatma bakım hizmetimizin kapsamı dışındadır. Böyle bir talebiniz varsa, bunu dürüstçe belirtir, ilgili kapsamdaki hizmete yönlendiririz.",
            },
            {
                soru: "Armatür değişimi için malzemeyi siz mi getiriyorsunuz?",
                cevap:
                    "Genellikle malzeme (armatür, ampul, bağlantı parçası) işletme tarafından temin edilir ve çalışma saatinden önce sahada hazır bulunur; bu, kısa pencerede zaman kaybını önler. Malzeme temininde destek isterseniz bunu da ayrıca konuşabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kent içi düşük gerilim aydınlatma sistemleri (tabela, otopark, cephe, bahçe) kamuya açık genel bilgidir; elektrik yetkisi ayrımı ve toplu değişim rota mantığı firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Mağaza ve Kamu Binasında Operatörlü Platform Kiralama: Refakat ve Kimlik Süreci",
        giris:
            "Kent içi bir mağaza, otel veya kamu binasında operatörlü platform kiralamak, sanayi bölgesindeki bir tesisten farklı bir onay dünyasına girmektir: burada iş izni ve saha güvenlik belgesi yerine, bina yönetiminin kimlik kontrolü, bazen bir refakatçi talebi ve güvenlik kamerası kaydı öne çıkar. Bu sayfa, ilimizdeki kent içi işlerde operatörlü kiralamanın nasıl işlediğini — operatörün kimlik ve yetkinlik belgesi, bina güvenlik protokolüyle koordinasyon, kısa pencerede operatörün tek başına karar alma yetkisi — ele alır; sanayi tesisinin kendi iş izni sistemine tabi operatörlü çalışma farklı bir süreç izler ve burada anlatılmaz.",
        maddeler: [
            {
                baslik: "Operatörün kimlik ve yetkinlik belgesi",
                metin:
                    "Operatörlü kiralamada, operatörün platform kullanım yetkinlik belgesi ve kimliği talep anında bildirilir; banka şubesi veya kamu binası gibi güvenlik seviyesi yüksek mekânlarda bu bilgi önceden bina güvenliğine iletilir ki sahada beklenmedik bir kimlik kontrolü süreci yaşanmasın.",
            },
            {
                baslik: "Banka şubesinde ek güvenlik protokolü",
                metin:
                    "Banka şubeleri gibi mekânlarda operatör girişi, şube güvenlik protokolüne (kimlik kontrolü, güvenlik kamerası kaydı, bazen şube müdürü onayı) tabi olabilir; bu adımları teklif aşamasında netleştiririz ki kapanış sonrası kısa pencerede zaman kaybı yaşanmasın.",
            },
            {
                baslik: "Kamu binasında refakatçi uygulaması",
                metin:
                    "Bazı kamu binalarında operatörün çalışma boyunca bir görevli tarafından refakat edilmesi istenir; bu, hem güvenlik hem koordinasyon açısından bina yönetiminin tercih ettiği bir uygulamadır. Refakat gereksinimi kurumdan kuruma değişir; talebinizi aldığımızda bu detayı netleştiririz.",
            },
            {
                baslik: "Kısa pencerede operatörün tek başına karar yetkisi",
                metin:
                    "Kapanış sonrası dar bir pencerede operatör, zemin koşulunu, güzergâhı ve çalışma sırasını sahada kendi değerlendirmesiyle ayarlayabilir; bu, her küçük kararın merkeze sorulmasını beklemeden işin akıcı ilerlemesini sağlar. Kritik bir değişiklik (örneğin planlanan kalemin yapılamayacağının anlaşılması) durumunda işletme yetkilisiyle anında iletişime geçilir.",
            },
            {
                baslik: "Operatörsüz seçeneğin kent içi işlerde sınırlı kullanımı",
                metin:
                    "Kent içi iç mekân işlerinde operatörsüz (yalnızca makine) kiralama nadiren tercih edilir çünkü zemin koruma ve dar güzergâh gibi hassasiyetler, deneyimli bir operatörün sahada anlık karar vermesini gerektirir; operatörsüz seçenek genellikle yalnızca işletmenin kendi eğitimli personeli varsa ve basit, düşük riskli bir kalem söz konusuysa değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekân tipine göre operatör süreci",
                paragraflar: [
                    "Kent içi farklı mekân tiplerinde operatör girişi için gereken süreç değişir.",
                ],
                tablo: {
                    basliklar: ["Mekân", "Gerekli belge", "Ek süreç", "Refakat"],
                    satirlar: [
                        ["Mağaza", "Kimlik + yetkinlik belgesi", "Yok", "Genellikle gerekmez"],
                        ["Banka şubesi", "Kimlik + yetkinlik belgesi", "Güvenlik protokolü", "Bazen şube müdürü onayı"],
                        ["Otel", "Kimlik + yetkinlik belgesi", "Resepsiyon bilgilendirmesi", "Genellikle gerekmez"],
                        ["Kamu binası", "Kimlik + yetkinlik belgesi", "Bina yönetimi onayı", "Sık uygulanır"],
                    ],
                },
            },
            {
                baslik: "Belgeleri önceden iletmenin faydası",
                paragraflar: [
                    "Operatörün kimlik ve yetkinlik belgesini talep aşamasında sizinle paylaşırız; siz de bunu bina güvenliğine veya ilgili birime önceden iletebilirsiniz. Bu, çalışma günü sahada beklenmedik bir kimlik kontrolü sürecinin pencereyi tüketmesini önler.",
                    "Özellikle banka şubesi ve kamu binası gibi yüksek güvenlikli mekânlarda bu ön iletişim adımını atlamamanızı öneririz; süreç genellikle birkaç gün önceden başlatıldığında sorunsuz ilerler.",
                ],
            },
            {
                baslik: "Refakatçinin rolü",
                paragraflar: [
                    "Refakatçi, operatörün çalışma alanına erişimini yönlendiren ve bina içi kuralları hatırlatan bir görevlidir; teknik bir müdahalede bulunmaz, operatörün işine karışmaz.",
                    "Refakatçi ihtiyacı olan kurumlarda bu görevlinin çalışma boyunca hazır bulunması, kapanış sonrası dar pencerenin sorunsuz ilerlemesi için önemlidir; refakatçi geç gelirse pencere kısalır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörün kimlik bilgisini ne zaman bildirmeniz gerekiyor?",
                cevap:
                    "Talep aşamasında operatörün kimlik ve yetkinlik belgesini sizinle paylaşırız; siz de bunu bina güvenliğine veya ilgili birime önceden iletebilirsiniz. Özellikle banka şubesi ve kamu binası gibi mekânlarda bu adımı çalışma gününden birkaç gün önce tamamlamanızı öneririz.",
            },
            {
                soru: "Banka şubemizde çalışacaksınız, ek bir onay gerekiyor mu?",
                cevap:
                    "Çoğu şubede evet; operatör kimlik bilgisi, bazen güvenlik kamerası kaydı ve bazen şube müdürünün onayı istenir. Bu bilgileri teklif aşamasında sizden ve şubenizin güvenlik biriminden alıp önceden netleştiririz; böylece kapanış sonrası kısa pencerede güvenlik kontrolüyle zaman kaybetmezsiniz.",
            },
            {
                soru: "Kamu binamızda bir görevlinin bizimle olması mı gerekiyor?",
                cevap:
                    "Çoğu kamu binasında evet, bu standart bir uygulamadır; bina yönetimi genellikle çalışma boyunca bir görevlinin refakat etmesini ister. Refakat gereksinimi kurumdan kuruma değişebilir; talebinizi aldığımızda bina yönetimiyle bu detayı netleştirir, çalışma saatini ve refakat düzenini önceden planlarız.",
            },
            {
                soru: "Kısa pencerede operatör her kararı bize mi soruyor?",
                cevap:
                    "Hayır, günlük ve teknik kararları (zemin koşulu, güzergâh, çalışma sırası) operatör sahada kendisi verir; bu, dar pencerede işin akıcı ilerlemesini sağlar. Planlanan kalemi etkileyecek kritik bir durumda ise işletme yetkilinizle anında iletişime geçilir, tek taraflı bir değişiklik yapılmaz.",
            },
            {
                soru: "Kendi personelimizle operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Personelinizin geçerli bir platform kullanım eğitimi ve belgesi varsa, düşük riskli ve basit kalemlerde bu değerlendirilebilir; ancak kent içi işlerde zemin koruma ve dar güzergâh gibi hassasiyetler nedeniyle operatörlü kiralamayı öneririz. Personelinizin belge durumunu ve işin kapsamını paylaşırsanız net bir değerlendirme yaparız.",
            },
            {
                soru: "Refakatçi geç kalırsa ne oluyor?",
                cevap:
                    "Refakatçi gerektiren bir kurumda, refakatçi hazır olmadan çalışma başlamaz; bu, kapanış sonrası dar pencereyi kısaltan bir risktir. Bu yüzden refakatçinin çalışma saatinden önce sahada hazır bulunmasını, kurumunuzla birlikte önceden netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Banka şubesi ve kamu binası güvenlik protokolü genel uygulamadır; operatör belge önceden iletim yöntemi ve refakatçi koordinasyonu firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Aynı Sokaktaki Dükkânlar ve Şehir İçi Şubelerde Çok Noktalı Rota Bakımı",
        giris:
            "Kent içinde bir zincir mağazanın birden fazla şubesi, bir sokaktaki komşu dükkânlar veya bir kurumun farklı binalardaki ofisleri, tek tek küçük iç mekân kalemleri talep ettiğinde, bunları ayrı ayrı sevkiyatlarla karşılamak hem pahalı hem verimsizdir. Çok noktalı rota bakımı, platformun bir gece içinde birden fazla adresi art arda ziyaret ederek her birinde kısa bir kalemi tamamlamasıdır. Bu sayfa, ilimizdeki kent içi çok noktalı rota çalışmasının nasıl planlandığını — adres sırası, her noktada ayrılan süre, sokak içi kısa mesafe avantajı — ele alır; kırsal bir hat boyunca kilometrelerce ilerleyen direk rotası veya sanayi bölgesindeki fabrikalar arası rota farklı bir mesafe ve kural setine sahiptir ve burada anlatılmaz.",
        maddeler: [
            {
                baslik: "Aynı sokaktaki komşu dükkânları birleştirmek",
                metin:
                    "Bir sokaktaki birkaç dükkânın küçük kalemleri (bir tavan armatörü, bir vitrin rötuşu, bir tabela ışığı) aynı akşama toplandığında, makine kısa mesafelerle dükkândan dükkâna yürüyerek ilerler; sokak içi mesafe genellikle birkaç yüz metreyi geçmez, bu da rota süresini kısa tutar.",
            },
            {
                baslik: "Zincir mağazanın şehir içi şubeleri",
                metin:
                    "Bir zincir mağazanın farklı semtlerdeki şubelerinde aynı anda benzer bir bakım kalemi (örneğin aynı model armatürün toplu değişimi) talep edildiğinde, şubeler arası mesafeye göre bir gecede kaç şubenin kapsanabileceğini önceden hesaplarız; şehir içi trafik ve her şubenin kendi kapanış saati bu hesaba dahil edilir.",
            },
            {
                baslik: "Her noktada ayrılan sürenin önceden belirlenmesi",
                metin:
                    "Çok noktalı bir rotada bir adresteki gecikme, sonraki adresin penceresini de etkiler; bu yüzden her nokta için ayrılan süre işin kapsamına göre önceden belirlenir ve bu süre aşılırsa geri kalan kalem bir sonraki geceye planlanır, rota tamamen aksatılmaz.",
            },
            {
                baslik: "Adres sırasının coğrafi mantığı",
                metin:
                    "Rota sırası, adreslerin coğrafi konumuna göre en az geri dönüşle kurulur; kapanış saati en erken olan adres genellikle rotanın başında yer alır, kapanışı daha esnek olan adres sona bırakılır. Bu sıralama, gecenin ilerleyen saatlerinde zaman baskısını en aza indirir.",
            },
            {
                baslik: "Farklı binalardaki kurum ofisleri",
                metin:
                    "Bir kurumun şehir merkezindeki farklı binalarda yer alan ofislerinde (örneğin bir bankanın genel müdürlük binası ve yakındaki bir ek bina) benzer küçük kalemler varsa, bu ofisleri de tek bir gece rotasında birleştirebiliriz; her binanın kendi bina yönetimi onay sürecine ayrı ayrı uyulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çok noktalı rota kararının kriterleri",
                paragraflar: [
                    "Bir rotanın kaç adresi kapsayabileceği aşağıdaki faktörlerle belirlenir.",
                ],
                tablo: {
                    basliklar: ["Faktör", "Etkisi", "Değerlendirme"],
                    satirlar: [
                        ["Adresler arası mesafe", "Toplam süre", "Şehir içi trafik dahil hesaplanır"],
                        ["Her adresteki kapanış saati", "Rota sırası", "En erken kapanış başa alınır"],
                        ["Kalem süresi", "Toplam pencere", "Her nokta için ayrı süre payı"],
                        ["Bina yönetimi onayı", "Ek süre", "Her bina için ayrı netleştirilir"],
                    ],
                },
            },
            {
                baslik: "Bir adresteki gecikmenin yönetimi",
                paragraflar: [
                    "Rotadaki bir adreste beklenmedik bir gecikme (örneğin malzeme eksikliği veya erişim sorunu) yaşanırsa, önceden belirlenen süre sınırına uyularak o adresteki kalem tamamlanmamış olsa bile rota bir sonraki adrese geçer; bu, tüm rotanın gecikmesini önler.",
                    "Tamamlanamayan kalem, bir sonraki gece rotasına veya ayrı bir ziyarete planlanır; bu durumu ilgili adresin sorumlusuna aynı gece içinde bildiririz.",
                ],
            },
            {
                baslik: "Rota planlamasının maliyet avantajı",
                paragraflar: [
                    "Tek bir sevkiyat bedeliyle birden fazla adresin kalemini karşılamak, her adres için ayrı sevkiyat planlamaktan belirgin şekilde daha ekonomiktir; bu tasarruf, adres sayısı arttıkça büyür.",
                    "Rotaya dahil olmak isteyen komşu işletme veya şubelerinizi bize önceden bildirmeniz, hem sizin hem komşu işletmenin maliyetini düşürür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı sokaktaki üç dükkânı aynı gece halledebilir misiniz?",
                cevap:
                    "Evet, sokak içi mesafe genellikle kısa olduğu için bu tip bir rota kolayca kurulabilir. Üç dükkânın da kapanış saatini ve kalem listesini bildirirseniz, en erken kapanan dükkânı başa alarak bir sıra kurarız ve her dükkân için bir süre payı belirleriz.",
            },
            {
                soru: "Zincir mağazamızın beş şubesinde aynı armatür değişecek, tek gecede olur mu?",
                cevap:
                    "Şubeler arası mesafeye ve her şubenin kapanış saatine bağlıdır; şehir içi trafiği de hesaba katarak bir gecede kaç şubenin kapsanabileceğini önceden hesaplarız. Beş şube tek gecede sığmazsa, iki geceye bölünen bir program öneririz; şube listesini ve kapanış saatlerini paylaşırsanız net bir plan sunarız.",
            },
            {
                soru: "Bir dükkânda iş uzarsa diğerleri ne olacak?",
                cevap:
                    "Her adres için önceden bir süre sınırı belirleriz; bu sınır aşılırsa geri kalan kalem bir sonraki geceye planlanır ve rota bir sonraki adrese devam eder. Bu, bir adresteki gecikmenin tüm rotayı aksatmasını önler; durumu aynı gece içinde ilgili adrese bildiririz.",
            },
            {
                soru: "Rota sırasını kim belirliyor, biz mi siz mi?",
                cevap:
                    "Rota sırasını coğrafi konum ve her adresin kapanış saatine göre biz öneririz — en erken kapanan adres genellikle başa alınır. Sizin özel bir önceliğiniz (örneğin bir adresin kesinlikle önce yapılması) varsa bunu bildirirseniz rotayı buna göre ayarlarız.",
            },
            {
                soru: "Farklı binalardaki ofislerimizi aynı rotaya alabilir misiniz?",
                cevap:
                    "Evet, farklı binalardaki ofisler için de tek bir gece rotası kurabiliriz; ancak her binanın kendi bina yönetimi onay sürecine ayrı ayrı uyulması gerekir. Binaların adreslerini ve her birinin onay sürecini bildirirseniz, rotayı bu onaylara göre sıralarız.",
            },
            {
                soru: "Çok noktalı rota tek adrese göre ne kadar tasarruf sağlıyor?",
                cevap:
                    "Tek bir sevkiyat bedeliyle birden fazla adresin kalemini karşıladığımız için, adres sayısı arttıkça birim maliyet belirgin şekilde düşer. Kesin tasarrufu, adres listenizi ve kalem kapsamınızı aldığımızda hesaplayıp size ayrı ayrı ve birleşik seçenekleri karşılaştırmalı olarak sunarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kent içi sokak/şube coğrafyası kamuya açık genel bilgidir; rota sıralama mantığı ve süre sınırı yönetimi firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Yapım ve Tadilat Aşamasındaki Bina İçinde Kaba Zeminde Platform Kiralama",
        giris:
            "Bu domainin odağı bitmiş, kaplaması tamamlanmış mağaza-otel-kamu binası zeminleri olduğu için, açık arazi veya kırsal zor zemin koşulları burada anlatılmaz — o kapsam farklı bir hizmet hattına aittir. Ancak kent içi bir bina her zaman bitmiş hâlde karşımıza çıkmaz: yapım aşamasındaki bir AVM, tadilat geçiren bir mağaza veya henüz zemin kaplaması yapılmamış bir kamu binası bölümü, standart iç mekân zemininden farklı, kaba beton, şap veya toprak dolgu bir yüzey sunabilir. Bu sayfa, bu sınırlı ve dürüst kapsamı — bitmemiş veya tadilat aşamasındaki kent içi bina içlerinde platform kullanımını — ele alır.",
        maddeler: [
            {
                baslik: "Kaba beton ve şap zeminde tekerlek seçimi",
                metin:
                    "Yapım aşamasındaki bir zeminde iz bırakmama kaygısı geri planda kalır, ancak zeminin düzgünlüğü (kot farkı, döküm izleri, açık kanal) makinenin dengesini etkileyebilir; bu yüzden standart tekerlek yeterli olsa da, zemindeki büyük kot farkları veya açık boşluklar önceden işaretlenir ve makine bu noktalardan uzak tutulur.",
            },
            {
                baslik: "Toprak dolgu bölümlerde kaymayı önlemek",
                metin:
                    "Bazı tadilat alanlarında zemin henüz dolgu betonuyla kaplanmamış, sıkıştırılmış toprak veya moloz dolgu hâlindedir; bu tip yüzeylerde makinenin tekerlek kaymasını önlemek için zemin sıkılığı önceden kontrol edilir, gerekirse geçici bir plaka veya kalas döşenerek geçici bir çalışma yüzeyi oluşturulur.",
            },
            {
                baslik: "Yapı iskelesi ve inşaat malzemesiyle paylaşılan alan",
                metin:
                    "Yapım aşamasındaki bir binada platform, genellikle boş bir hacimde değil, yapı iskelesi, malzeme istifi ve diğer taşeronların ekipmanıyla paylaşılan bir alanda çalışır; bu yüzden güzergâh, günün başında şantiye şefiyle birlikte kontrol edilir ve diğer ekiplerle çakışmayacak bir çalışma saati belirlenir.",
            },
            {
                baslik: "Kapalı hacimde yine egzozsuz kural",
                metin:
                    "Zemin kaba olsa bile hacim kapalıysa (örneğin AVM'nin henüz kaplaması yapılmamış ama çatısı kapanmış bir katı) egzozsuz akülü kural yine geçerlidir; kaba zemin, dizel makine kullanımına izin veren bir gerekçe değildir çünkü emisyon riski zeminin durumundan bağımsızdır.",
            },
            {
                baslik: "Tadilat sonrası standart zemine geçiş",
                metin:
                    "Kaplama tamamlandıktan sonra aynı bina için yapılacak bir sonraki iç mekân talebi, bu sayfanın değil yukarıdaki standart iç mekân hizmetimizin kapsamına girer; bu yüzden talebi aldığımızda binanın hangi aşamada olduğunu (kaba yapı mı, kaplama tamamlanmış mı) netleştiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapım aşamasına göre zemin durumu",
                paragraflar: [
                    "Bir binanın yapım aşaması, zeminin durumunu ve gereken hazırlığı doğrudan belirler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Zemin durumu", "Hazırlık", "Kısıt"],
                    satirlar: [
                        ["Kaba yapı, çatı kapalı", "Dökülmüş kaba beton", "Kot farkı işaretleme", "Egzozsuz kural geçerli"],
                        ["Tadilat, sökülmüş kaplama", "Şap veya eski dolgu", "Standart tekerlek", "Diğer ekiplerle koordinasyon"],
                        ["Dolgu tamamlanmamış bölüm", "Toprak/moloz dolgu", "Geçici plaka/kalas", "Kayma riski kontrolü"],
                        ["Kaplama tamamlanmış", "Standart (bu sayfa dışı)", "İz bırakmayan tekerlek", "Standart iç mekân kuralı"],
                    ],
                },
            },
            {
                baslik: "Şantiye şefiyle günlük koordinasyon",
                paragraflar: [
                    "Yapım aşamasındaki bir binada çalışma, o günün şantiye programından bağımsız kurulmaz; güzergâh, malzeme istifinin o günkü konumu ve diğer taşeron ekiplerin çalışma saati şantiye şefinden alınır ve platform çalışması bu programın içine yerleştirilir.",
                    "Bu koordinasyon her gün yeniden doğrulanır çünkü şantiyede malzeme ve ekip konumu gün içinde değişebilir; bir önceki günün bilgisiyle sahaya çıkılmaz.",
                ],
            },
            {
                baslik: "Aşama netleşmeden teklif verilmemesi",
                paragraflar: [
                    "Binanın hangi yapım aşamasında olduğu netleşmeden kesin bir teklif vermeyiz çünkü zemin durumu ve gereken hazırlık aşamaya göre büyük farklılık gösterir; kaba yapı için hazırlanan bir teklif, tadilat aşamasındaki bir zemine uymayabilir.",
                    "Bina yöneticisi veya şantiye şefinden alınacak güncel bir zemin fotoğrafı, doğru teklifi hızlı vermemizi sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "AVM'niz henüz yapım aşamasında, standart iç mekân kurallarınız mı geçerli?",
                cevap:
                    "Kısmen; egzozsuz akülü kural kapalı hacimde yine geçerlidir, ancak zemin koruma önlemi (iz bırakmayan tekerlek, koruyucu mat) kaba beton veya şap zeminde farklı şekle bürünür — burada öncelik kot farkı ve açık boşlukların işaretlenmesidir. Zemininizin fotoğrafını paylaşırsanız doğru hazırlığı belirleriz.",
            },
            {
                soru: "Zeminimiz henüz toprak dolgu, makine kayar mı?",
                cevap:
                    "Sıkıştırılmamış toprak veya moloz dolgu zeminlerde kayma riski gerçektir; bu yüzden önce zemin sıkılığını kontrol eder, gerekirse geçici bir plaka veya kalas döşeyerek güvenli bir çalışma yüzeyi oluştururuz. Dolgunun durumunu ve varsa sıkıştırma çalışması yapılıp yapılmadığını bildirirseniz, hazırlığı önceden planlarız.",
            },
            {
                soru: "Şantiyede başka ekipler de çalışıyor, çakışma yaşanır mı?",
                cevap:
                    "Bu riski azaltmak için güzergâhı ve çalışma saatini o günkü şantiye programına göre şantiye şefiyle birlikte belirleriz; bu koordinasyonu her gün yeniden doğrularız çünkü malzeme ve ekip konumu gün içinde değişebilir. Şantiyenizin günlük programını paylaşmanız bu koordinasyonu hızlandırır.",
            },
            {
                soru: "Kaba zeminde dizel makine kullanabilir miyiz, hız kazanır mıyız?",
                cevap:
                    "Hayır, hacim kapalıysa egzozsuz akülü kural zeminin durumundan bağımsız olarak geçerlidir; kaba zemin dizel kullanımına izin veren bir gerekçe değildir. Hacim tamamen açıksa (örneğin çatısı henüz kapanmamış bir alan) farklı bir değerlendirme yapılabilir; hacminizin açıklık durumunu bildirirseniz netleştiririz.",
            },
            {
                soru: "Tadilat bitip zemin kaplandıktan sonra tekrar sizi mi aramalıyız?",
                cevap:
                    "Evet, kaplama tamamlandıktan sonraki bir talep bu sayfanın değil standart iç mekân hizmetimizin kapsamına girer ve farklı bir zemin koruma yaklaşımı (iz bırakmayan tekerlek, koruyucu mat) uygulanır. Talebi aldığımızda binanızın hangi aşamada olduğunu sorarız, bu ayrımı biz netleştiririz.",
            },
            {
                soru: "Zemin fotoğrafı olmadan teklif verebilir misiniz?",
                cevap:
                    "Kesin bir teklif için önermeyiz; yapım aşamasındaki zeminler birbirinden çok farklı olabilir ve doğru hazırlığı belirlemek için güncel bir fotoğraf gerekir. Şantiye şefinizden veya bina yöneticinizden güncel bir zemin fotoğrafı alıp paylaşmanız, hızlı ve doğru bir teklif almanızı sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yapım/tadilat aşamasındaki bina içi zemin çeşitliliği genel inşaat bilgisidir. Bu sayfa bilinçli olarak dar kapsamlıdır — açık arazi/kırsal zor zemin bilgisi bu domainin konusu değildir ve uydurulmamıştır.",
    },

    // ── YENİ ODAK KONUSU: MAKASLI PLATFORM KİRALAMA ─────────────────────
    // Bu domainin açısı (kent içi iç mekân: mağaza/otel/kamu binası) makaslı
    // platform sınıfıyla doğal örtüşür — düz zeminli koridor/salon içinde
    // dikey erişim, dar geçitte manevra, sepet tabanının geniş olması.
    // Kardeşlerden ayrım: manlifteskisehir.com (Bozüyük/duruş dönemi),
    // eskisehirvincplatform.com (kırsal enerji hattı), eskisehirmanlift.net
    // (OSB üretim hattı), eskisehirmanlift.xyz (OSB'de ilk kez kiralama),
    // eskisehirplatform.net/.org (havacılık tedarik zinciri/FOD) — bu sayfa
    // bunların hiçbirine değinmez, yalnızca iç mekân ticaret/kamu binası
    // bağlamında makaslı platformu ele alır.
    "hizmet:makasli-platform-kiralama": {
        h1: "Mağaza, Otel ve Kamu Binası İçinde Makaslı Platform Kiralama",
        giris:
            "Eskişehir'in şehir merkezindeki mağaza, otel ve kamu binalarında tavan ve vitrin seviyesine erişim gerektiğinde, bina içi çalışma koşullarına en uygun ekipman neredeyse her zaman makaslı platformdur — düz zeminli, dar koridorlu ve tavanı sabit yükseklikte olan bir hacimde, sepeti dikey olarak yukarı-aşağı hareket eden bu makine, eklemli bir bomun sağladığı yatay erişim esnekliğine ihtiyaç duymayan işlerde hem daha güvenli hem daha hızlı bir çözümdür. AVM'lerin iç avlu tavan aydınlatmaları, otel lobilerinin yüksek tavan işleri, belediye ve üniversite binalarının fuaye aydınlatma değişimleri, mağaza vitrin tavanı ve raf üstü işleri — bu işlerin ortak özelliği, makinenin çalışacağı noktanın tam altından dikey olarak erişilebilir olması ve zeminin düz, sabit bir beton, seramik veya parke yüzey olmasıdır. Makaslı platformun geniş sepet tabanı, aynı anda iki kişinin ve malzemenin çalışmasına imkân tanır; bu da özellikle aydınlatma değişimi gibi iki kişi gerektiren işlerde eklemli platforma göre belirgin bir avantajdır. Bu sayfa, iç mekân bağlamında makaslı platform kiralarken karşılaşacağınız beş temel konuyu — sınıf seçimi, kapı-koridor geçişi, zemin yük dağılımı, dikey erişim sınırı ve sepet kapasitesi — ayrıntılı olarak ele alır; şirketimizin öncelikli hizmet alanı olan makaslı ve manlift kiralamanın iç mekân tarafındaki karşılığı budur.",
        maddeler: [
            {
                baslik: "Elektrikli akülü sınıfın zorunluluğu",
                metin:
                    "Kapalı bir mağaza, otel katı veya kamu binası salonunda çalışacak her makaslı platform elektrikli akülü tahrikli olmalıdır; dizel makaslı platform neredeyse hiç üretilmez çünkü zaten sınıfın tasarım amacı düz zeminli iç mekân ve kapalı sahadır. Akülü tahrik ayrıca sessiz çalışması nedeniyle mesai dışı pencerelerde gürültü şikâyeti riskini de azaltır.",
            },
            {
                baslik: "Kapı genişliği ve dar koridor geçişi",
                metin:
                    "Makaslı platformun şase genişliği modele göre değişir; standart dar şaseli modeller çoğu tek kanat kapıdan (yaklaşık 80-90 cm) geçebilirken, geniş sepetli modeller çift kanat kapı veya yük kapısı gerektirir. Bina içindeki dar bir koridordan veya standart bir ofis kapısından geçiş planlanıyorsa, kapı ve koridor ölçülerini talep aşamasında netleştirmemiz, doğru şase genişliğindeki modeli seçmemizi sağlar.",
            },
            {
                baslik: "Zemin yük dağılımı ve nokta yükü",
                metin:
                    "Makaslı platform, dört tekerlek üzerinden zemine noktasal yük aktarır; bu yük standart betonarme döşeme için sorun oluşturmaz ama asma tavan altı, yükseltilmiş teknik döşeme (raised floor) veya eski bir bina zemininde önceden yük kapasitesi kontrolü gerekebilir. Ağır sepetli veya büyük yükseklikli modellerde bu kontrol daha da önem kazanır; bina yönetiminden zemin yük kapasitesi bilgisini talep aşamasında almanız süreci hızlandırır.",
            },
            {
                baslik: "Dikey erişimin sınırı: yatay uzanım yok",
                metin:
                    "Makaslı platformun sepeti yalnızca dikey hareket eder, eklemli bir bom gibi öne veya yana uzanmaz; bu yüzden çalışma noktası makinenin tam üzerinde olmalıdır. Bir vitrin tavanının kenarında veya bir merdiven boşluğunun üzerinde çalışılacaksa, makinenin o noktaya tam olarak konumlandırılabilmesi (önünde engel olmaması) gerekir. Eğik bir tavan detayı veya bir mobilya/rafın arkasında kalan bir nokta söz konusuysa, eklemli platform daha uygun olabilir; bu ayrımı talebinizi dinlediğimizde birlikte netleştiririz.",
            },
            {
                baslik: "Sepet kapasitesi ve iki kişilik iş planlaması",
                metin:
                    "Standart bir makaslı platform sepeti, iki kişi ve malzemesini taşıyacak (genellikle 230-450 kg bandında) kapasiteye sahiptir; bu, aydınlatma armatürü değişimi gibi bir kişinin monte ettiği bir kişinin malzeme tuttuğu işlerde tek seferde tamamlama imkânı sağlar. Kapasite aşımı güvenlik ihlali olduğundan, sepette taşınacak malzeme ağırlığını (özellikle uzun aydınlatma rayı gibi hacimli parçalarda) önceden bildirmeniz doğru modeli seçmemize yardımcı olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sınıf seçimi: makaslı mı, eklemli mi?",
                paragraflar: [
                    "İç mekân işlerinde iki sınıf da kullanılabilir ama seçim, çalışma noktasının makinenin altında mı yoksa bir engelin arkasında mı olduğuna bağlıdır. Aşağıdaki tablo tipik iç mekân senaryolarını özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Uygun sınıf", "Neden"],
                    satirlar: [
                        ["Düz tavan altı aydınlatma (koridor, salon)", "Makaslı platform", "Dikey erişim yeterli, geniş sepet tabanı avantaj"],
                        ["Vitrin tavanı, önü açık", "Makaslı platform", "Makine tam altına konumlanabilir"],
                        ["Merdiven boşluğu kenarı veya raf arkası nokta", "Eklemli platform", "Yatay uzanım (bom) gerekir"],
                        ["Atrium'da (iç avlu) yüksek ve engelli nokta", "Eklemli platform", "Engel etrafından erişim"],
                        ["İki kişilik uzun süreli montaj işi", "Makaslı platform", "Geniş sepet, iki kişi + malzeme"],
                    ],
                },
            },
            {
                baslik: "Dar geçitli binalarda model seçimi",
                paragraflar: [
                    "Eskişehir'in şehir merkezindeki eski yapı stoku ve kamu binalarının bir kısmı dar kapı ve koridor ölçülerine sahiptir; bu binalarda standart geniş şaseli bir makaslı platform yerine dar şaseli (yaklaşık 76-81 cm genişliğinde) modeller tercih edilir. Dar şaseli modellerin çalışma yüksekliği ve sepet kapasitesi standart modellere göre biraz daha sınırlıdır, bu yüzden işin gerektirdiği yükseklik ile geçiş genişliği arasında bir denge kurulur.",
                    "Yeni yapılmış AVM ve oteller genellikle standart yük asansörü ve geniş koridor ölçüleriyle inşa edildiğinden bu binalarda şase genişliği nadiren kısıtlayıcı olur; kısıt daha çok eski yapı stokunda ve bazı kamu binalarında ortaya çıkar.",
                ],
            },
            {
                baslik: "Bu sayfanın kapsamadığı işler",
                paragraflar: [
                    "Bu sayfa yalnızca bina içi düz zeminli makaslı platform işlerini kapsar; kırsal bir enerji hattında direk dikimi, bir OSB fabrikasındaki üretim hattı bakımı veya havacılık-savunma tedarikçisinde kalite denetimi kapsamındaki işler bambaşka bir bağlamdır ve bu sayfada anlatılmaz — bu tür talepler için ayrı hizmet sayfalarımıza yönlendirme yaparız.",
                    "Zor zemin, eğimli arazi veya açık şantiye gibi kırsal/dış mekân koşulları da bu sayfanın kapsamı dışındadır; oradaki makine seçimi tamamen farklı bir mantıkla (arazi tipi lastik tekerlek, dizel tahrik) ilerler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform ile manlift arasındaki fark nedir?",
                cevap:
                    "Makaslı platform yalnızca dikey hareket eden, geniş sepet tabanlı bir makinedir ve düz zeminli iç mekân işlerinde en yaygın tercihtir; manlift ise günlük dilde eklemli veya teleskopik bomlu, sepeti hem dikey hem yatay hareket ettirebilen makineleri tanımlamak için kullanılır. İç mekânda çalışma noktası makinenin tam altındaysa makaslı platform yeterli ve daha ekonomiktir; nokta bir engelin arkasındaysa manlift sınıfı (eklemli/teleskopik) gerekir.",
            },
            {
                soru: "Standart bir tek kanat kapıdan makaslı platform geçer mi?",
                cevap:
                    "Dar şaseli modeller (yaklaşık 76-81 cm genişlik) standart tek kanat kapılardan (80-90 cm) genellikle geçer, ancak kapı kasası çıkıntısı ve makinenin kendi ayna/kol genişliği de hesaba katılmalıdır. Kesin ölçü uyumu için kapı genişliğini ve varsa eşik yüksekliğini bildirdiğinizde, o binaya uygun dar şaseli modeli öneririz.",
            },
            {
                soru: "Otel lobisinde misafirler varken çalışabilir misiniz?",
                cevap:
                    "Önermeyiz; makaslı platform sepetiyle çalışma alanının etrafı konileme veya bariyerle çevrilse bile, aktif kullanımdaki bir lobide bu hem güvenlik hem misafir deneyimi açısından uygun değildir. Standart tercihimiz, misafir yoğunluğunun en düşük olduğu sabahın erken saati veya gece penceresidir; otelinizin kendi yoğunluk takvimine göre en uygun saati birlikte belirleriz.",
            },
            {
                soru: "İki kişi aynı anda sepette çalışabilir mi?",
                cevap:
                    "Evet, standart makaslı platform sepetleri (genellikle 230-450 kg kapasite bandında) iki kişi ve malzemesini taşıyacak şekilde tasarlanmıştır; bu, aydınlatma değişimi gibi işlerde bir kişinin monte ederken diğerinin malzeme tuttuğu çalışma biçimine uygundur. Taşınacak malzemenin ağırlığı önceden bildirilirse, kapasiteyi karşılayan doğru modeli seçeriz.",
            },
            {
                soru: "Zemin parke veya mermer ise makaslı platform kullanılabilir mi?",
                cevap:
                    "Evet, ama standart siyah kauçuk tekerlek yerine iz bırakmayan (non-marking) beyaz veya gri tekerlekli bir model kullanılır ve makinenin güzergâhı boyunca özellikle dönüş noktalarında koruyucu mat serilir. Zemininizin cinsini (mermer, cilalı parke, seramik) bildirdiğinizde, hazırlığı ona göre baştan doğru seviyede kurarız.",
            },
            {
                soru: "Kamu binasında (belediye, üniversite) makaslı platform kiralamak farklı bir süreç mi?",
                cevap:
                    "Süreç mantığı aynıdır ama kamu binalarında genellikle bina yönetiminin önceden bilgilendirilmesi, bazen bir görevlinin refakat etmesi ve çalışma saatinin mesai dışına (akşam sonrası veya hafta sonu) planlanması istenir. Bu kurumlarda giriş-çıkış saatlerinin önceden bildirilmesi de yaygın bir şarttır; kurumunuzun kendi prosedürünü bize ilettiğinizde plana dahil ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platform sınıfının teknik özellikleri (dikey hareket, şase genişliği bantları, sepet kapasite aralığı, iz bırakmayan tekerlek) genel ekipman bilgisidir; bu domainin kent içi iç mekân açısıyla (mağaza/otel/kamu binası) birleştirilmiştir.",
    },

    // ── YENİ ODAK KONUSU: MANLIFT KİRALAMA (genel terim, iç mekân bağlamı) ──
    // Bu sayfa "manlift" genel arama terimini iç mekân bağlamında karşılar;
    // makasli-platform-kiralama sayfasıyla örtüşmemesi için odak farklı:
    // orada makaslı sınıfın kendisi anlatılıyor, burada "manlift" arayan
    // kullanıcıya DOĞRU SINIFI SEÇME rehberliği (terim netliği + iç mekân
    // eklemli/teleskopik senaryoları) veriliyor.
    "hizmet:manlift-kiralama": {
        h1: "Eskişehir Şehir Merkezinde Manlift Kiralama — Doğru Sınıfı Seçme Rehberi",
        giris:
            "\"Manlift\" günlük dilde yükseğe çıkan her platform makinesini tanımlamak için kullanılan genel bir terimdir; teknik olarak ise sepeti hem dikey hem yatay hareket edebilen eklemli (articulating) veya teleskopik bomlu makineleri, bazen de makaslı platformu kapsayacak şekilde geniş anlamda kullanılır. Eskişehir'in şehir merkezindeki mağaza, otel ve kamu binası taleplerinde \"manlift istiyoruz\" diyerek arayan müşterilerin büyük kısmı aslında ihtiyacına göre ya makaslı platform ya da eklemli platform kullanır — hangisinin doğru olduğu, çalışma noktasının makinenin tam altında mı yoksa bir engelin (mobilya, raf, kolon, merdiven boşluğu) arkasında mı olduğuna bağlıdır. Bu sayfa, \"manlift\" terimiyle gelen bir talebi doğru sınıfa yönlendirme mantığını anlatır: terim netliği neden önemli, iç mekânda eklemli/teleskopik bom hangi senaryolarda gerekir, kapasite ve erişim mesafesi nasıl hesaplanır, operatörlü kiralama ne zaman gerekir ve dar bir bina içinde bom sınıfı seçerken nelere dikkat edilir. Makaslı platformun kendi teknik ayrıntıları (şase genişliği, zemin yükü) ayrı bir sayfada ele alınmıştır; burada odak, \"manlift\" diyerek gelen talebin doğru makineye çevrilmesidir.",
        maddeler: [
            {
                baslik: "\"Manlift\" derken hangi makineyi kastediyorsunuz?",
                metin:
                    "Talebi aldığımızda önce netleştirdiğimiz şey, aranan makinenin sepetinin yalnızca dikey mi hareket edeceği (makaslı platform) yoksa yatay/açılı bir erişime de ihtiyaç olup olmadığıdır (eklemli veya teleskopik bom). Bu ayrım, fiyatı ve teslim edilecek makinenin sınıfını doğrudan belirlediği için, \"manlift\" kelimesinin arkasındaki gerçek ihtiyacı birlikte tarif ederiz — çalışma noktasının fotoğrafı veya kısa bir tarif genellikle yeterlidir.",
            },
            {
                baslik: "İç mekânda eklemli bom ne zaman gerekir",
                metin:
                    "Bir kolonun arkasındaki bir nokta, bir merdiven boşluğunun kenarı, yüksek bir raf dizisinin arasındaki dar bir aralık veya bir atrium'da (iç avlu) engelli bir tavan detayı — bu tip noktalarda makine doğrudan altına konumlanamaz, bu yüzden sepeti yatay ve açılı olarak uzatabilen eklemli bir bom gerekir. İç mekânda kullanılan eklemli platformlar da elektrikli akülü olmak zorundadır; dizel bom modelleri yalnızca açık sahada kullanılır.",
            },
            {
                baslik: "Erişim mesafesi hesabı: yükseklik tek başına yeterli değil",
                metin:
                    "Eklemli bir bom seçerken yalnızca hedef yükseklik değil, makinenin duracağı noktadan hedefe olan yatay mesafe de önemlidir; bir bomun maksimum yatay erişimi genellikle dikey erişiminden daha kısadır. Bu yüzden \"5 metre yükseklikte, 2 metre içeride bir nokta\" gibi hem dikey hem yatay ölçüyü birlikte tarif etmeniz, doğru bom uzunluğundaki modeli baştan seçmemizi sağlar.",
            },
            {
                baslik: "Operatörlü mü, kendiniz mi kullanacaksınız",
                metin:
                    "Eklemli ve teleskopik bomlar, makaslı platforma göre daha fazla eksende hareket ettiği için operatör deneyimi daha kritik hale gelir; sık kullanmayan bir ekip için operatörlü kiralama önerilir. Kendi operatörünüz varsa, geçerli bir platform operatörü belgesi (iş ekipmanları yönetmeliği kapsamında) yeterlidir; belge kontrolü teslim öncesi standart bir adımdır.",
            },
            {
                baslik: "Dar bina içinde bom sınıfı seçerken kısıt",
                metin:
                    "Eklemli ve teleskopik bomların şasesi, makaslı platforma göre genellikle daha geniştir ve bazı modeller dört tekerlek yönlendirme (4-wheel steer) ile dar alanda manevra yapabilir; yine de standart bir tek kanat kapıdan geçiş çoğu bom modelinde mümkün değildir. Bina içi dar geçitli bir talep için bom gerekiyorsa, önce geçiş noktalarının genişliğini ölçüp, o ölçüye uyan en kompakt bom modelini birlikte belirleriz; bazı durumlarda makinenin binaya bölünerek (parça parça) sokulması gerekebilir."
            },
        ],
        ekBolumler: [
            {
                baslik: "\"Manlift\" talebi nasıl doğru sınıfa çevrilir",
                paragraflar: [
                    "Aşağıdaki tablo, \"manlift istiyoruz\" diyerek gelen tipik iç mekân taleplerinin hangi gerçek sınıfa karşılık geldiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Talep tarifi", "Gerçek ihtiyaç", "Belirleyici soru"],
                    satirlar: [
                        ["\"Tavana çıkacağız, düz salon\"", "Makaslı platform", "Nokta makinenin altında mı?"],
                        ["\"Kolonun arkasındaki bir nokta\"", "Eklemli bom", "Yatay erişim gerekiyor mu?"],
                        ["\"Atrium'da yüksek ve engelli nokta\"", "Eklemli/teleskopik bom", "Erişim mesafesi ne kadar?"],
                        ["\"Dar koridordan geçecek, tavana bakacak\"", "Dar şaseli makaslı platform", "Kapı/koridor genişliği kaç cm?"],
                        ["\"Yükseklik değil, uzağa erişim önemli\"", "Teleskopik bom", "Yatay mesafe kaç metre?"],
                    ],
                },
            },
            {
                baslik: "Neden terim netliği talebi hızlandırır",
                paragraflar: [
                    "\"Manlift\" kelimesi tek başına makine sınıfını belirlemez; bu yüzden telefonda veya formda yalnızca bu kelimeyi kullanan bir talep, ek bir soru-cevap turu gerektirir. Çalışma noktasının kısa bir fotoğrafı veya \"tavan düz mü, önünde engel var mı\" gibi tek bir cümlelik tarif, bu turu atlayıp doğrudan doğru modele geçmemizi sağlar.",
                    "Şehir merkezindeki mağaza, otel ve kamu binası taleplerinin büyük kısmında sonuç makaslı platform çıkar çünkü bu binalarda tavan genellikle düz ve erişim noktası doğrudan üstten mümkündür; eklemli/teleskopik bom ihtiyacı daha çok atrium, merdiven boşluğu kenarı veya kolon arkası gibi özel noktalarda ortaya çıkar.",
                ],
            },
            {
                baslik: "Bu sayfanın kapsamadığı işler",
                paragraflar: [
                    "Bu sayfa yalnızca şehir merkezindeki bina içi \"manlift\" terim netliği ve sınıf seçimini kapsar; kırsal enerji hattı direk dikimi, OSB fabrikası üretim hattı bakımı veya havacılık-savunma tedarik zincirindeki kalite/gizlilik prosedürleri bu sayfanın konusu değildir ve burada anlatılmaz.",
                    "Makaslı platformun kendi teknik ayrıntıları (şase genişliği bantları, zemin yük dağılımı, sepet kapasitesi) ayrı bir sayfada ele alınmıştır; bu sayfa yalnızca terim netliği ve sınıf seçim mantığına odaklanır, aynı ayrıntıları tekrar etmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "\"Manlift\" ile \"makaslı platform\" aynı şey mi?",
                cevap:
                    "Hayır, günlük dilde \"manlift\" çoğu zaman yükseğe çıkan her makineyi tanımlamak için kullanılsa da, teknik olarak makaslı platform yalnızca dikey hareket eden bir alt sınıftır; eklemli veya teleskopik bomlu makineler ise sepeti yatay ve açılı olarak da hareket ettirebilir. Talebinizde \"manlift\" kelimesini kullansanız bile, gerçek ihtiyacınızı (çalışma noktasının makinenin altında mı yoksa bir engelin arkasında mı olduğunu) birlikte netleştirerek doğru sınıfı belirleriz.",
            },
            {
                soru: "Hangi sınıfı istediğimi bilmiyorum, nasıl karar veririz?",
                cevap:
                    "Çalışma noktasının kısa bir fotoğrafını veya \"tavan düz mü, önünde raf/kolon/mobilya gibi bir engel var mı\" sorusunun cevabını paylaşmanız genellikle yeterlidir. Engel yoksa makaslı platform, engel varsa veya yatay mesafe önemliyse eklemli/teleskopik bom öneririz; karar süreci telefon veya form üzerinden birkaç dakika sürer.",
            },
            {
                soru: "İç mekânda dizel bir manlift kullanılabilir mi?",
                cevap:
                    "Hayır, kapalı bir mağaza, otel odası katı veya kamu binası salonunda dizel ya da LPG'li bir makine kullanılmaz; bu, hacmin büyüklüğünden bağımsız istisnasız bir kuraldır çünkü egzoz gazı kapalı hacimde birikir. İç mekânda kullanılan tüm sınıflar (makaslı, eklemli, teleskopik) elektrikli akülü tahrikli olmalıdır.",
            },
            {
                soru: "Eklemli bom bir tek kanat kapıdan geçer mi?",
                cevap:
                    "Çoğu eklemli bom modeli standart bir tek kanat kapıdan geçemez çünkü şase genişliği makaslı platforma göre daha fazladır; geçiş genellikle çift kanat kapı veya yük kapısı gerektirir. Kompakt bazı eklemli modeller dar geçitlere uygun üretilmiştir; kapı ve koridor ölçülerinizi bildirdiğinizde uyan modeli birlikte belirleriz, gerekirse makinenin parça parça sokulması seçeneğini değerlendiririz.",
            },
            {
                soru: "Operatörlü kiralama şart mı?",
                cevap:
                    "Şart değildir; geçerli bir platform operatörü belgesi olan kendi ekibiniz varsa kendiniz kullanabilirsiniz, belge teslim öncesi kontrol edilir. Eklemli veya teleskopik bomu sık kullanmayan bir ekip için operatörlü kiralamayı öneririz çünkü bu sınıflar makaslı platforma göre daha fazla eksende (dikey + yatay + açı) hareket eder ve deneyim güvenliği doğrudan etkiler.",
            },
            {
                soru: "Yükseklik 6 metre ama nokta duvardan 2 metre içeride, hangi makine gerekir?",
                cevap:
                    "Bu durumda tek başına yükseklik yeterli bilgi değildir; hem dikey hem yatay erişim gerektiği için eklemli veya teleskopik bir bom gerekir, makaslı platform yalnızca dikey hareket ettiğinden bu noktaya ulaşamaz. Yatay mesafeyi (2 metre) ve dikey yüksekliği (6 metre) birlikte bildirdiğinizde, bu iki ölçüyü karşılayan bom uzunluğundaki modeli seçeriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. \"Manlift\" teriminin genel/teknik kullanım farkı ve eklemli/teleskopik bom erişim mantığı genel ekipman bilgisidir; bu domainin kent içi iç mekân açısıyla (mağaza/otel/kamu binası, terim netliği rehberliği) birleştirilmiştir.",
    },
};
