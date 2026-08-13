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
};
