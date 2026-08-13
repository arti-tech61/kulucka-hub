// ═══════════════════════════════════════════════════════════════════════════
// boluplatform.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: TEM otoyol hattı üzerindeki sanayi tesislerine hızlı platform ve
// vinç sevkiyatı.
// Açı: OTOYOL ARA DURAK EKONOMİSİ + KIŞ KOŞULLARI — İstanbul-Ankara ekseninin
// tam ortasındaki konumun makine erişimine etkisi, Bolu Dağı geçişinin kar-buz
// gerçeği ve bunun sevkiyat takvimine yansıması, orman ürünleri-mobilya,
// tavukçuluk-gıda, deri sanayi ve dağ turizmi tesislerinin sezon bakımı.
//
// ⚠️ Kardeş domainlerde teslimat lojistiği başka açılarla elle yazıldı; cümle,
// tablo satırı ve SSS tekrarı YASAK. Buradaki ayırt edici eksen mevsim ve
// rakım — güzergâh/föy kurgusu değil.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi + firma pratiği.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BOLUPLATFORM_NET: Record<string, BespokeIcerik> = {
    "bolge:bolu-merkez": {
        h1: "Bolu Merkezde Platform ve Vinç Kiralama",
        giris:
            "Bolu merkez, iki büyük metropolün tam ortasında kurulmuş orta ölçekli bir sanayi ve hizmet şehridir; bu konum, makine ihtiyacının karşılanma biçimini de belirler. Şehrin kendi üretim dokusu orman ürünleri, mobilya, gıda ve yapı malzemesi ağırlıklıdır ve bu tesislerin platform ihtiyacı çoğunlukla bakım kaynaklıdır: aspirasyon hattı temizliği, çatı altı aydınlatma yenileme, boya kabini üstü havalandırma, depo raf düzeni. Merkeze makine ulaştırmak otoyol bağlantısı sayesinde kolaydır, ama takvim kolay değildir — çünkü Bolu'nun sanayi yılı mevsime göre nefes alır. İlkbahar ve sonbaharda bakım talepleri yığılır, kışın hem üretim temposu hem yol koşulları değişir, yazın turizm tesisleri devreye girer. Merkezde çalışırken ilk sorduğumuz şey makinenin sınıfı değil, işin hangi mevsim penceresine denk geldiğidir; çünkü doğru pencerede planlanan bir bakım, aynı işin yanlış pencerede iki katına çıkan süresinden ucuzdur. Bu sayfa, Bolu merkezdeki tesis tiplerini, tipik yükseklik bantlarını ve mevsim planlamasının makine seçimine etkisini anlatır.",
        maddeler: [
            {
                baslik: "Kereste ve mobilya atölyelerinde toz gerçeği",
                metin:
                    "Bolu'nun orman varlığı, merkez ve çevresinde kereste işleme ile mobilya üretimini yaygınlaştırmıştır. Bu atölyelerin ortak sorunu havadaki ince talaş tozudur: aspirasyon boruları, filtre gövdeleri ve çatı altı aydınlatma armatürleri düzenli temizlik ister. Toz ortamında makine seçerken iki şey önemsenir — sepetten çalışırken tavana yakın bölgedeki görüş mesafesi ve makinenin kendi filtre-radyatör bakımının işten sonra yapılması. Kapalı atölyede içten yanmalı makine kullanılmaz; akülü makaslı veya akülü eklemli modeller hem emisyon hem gürültü açısından tek doğru tercihtir.",
            },
            {
                baslik: "Tipik tavan bantları ve sınıf eşlemesi",
                metin:
                    "Merkezdeki üretim yapılarında tavan yüksekliği geniş bir aralığa yayılır: küçük atölyelerde 5-6 metre, orta ölçekli imalathanelerde 7-9 metre, yeni yapılmış çelik depolarda 10-12 metre. Sepetin, çalışılacak noktanın yaklaşık iki metre altında kaldığı hesaba katılırsa; 6 metrelik tavan için 8 metre sınıfı, 9 metrelik tavan için 12 metre sınıfı doğru eşleşmedir. Yükseklik fazlası zararsız görünür ama makinenin şase ölçüsünü ve ağırlığını büyütür; dar atölye kapısından geçemeyen bir makine, yeterince yükselse bile işe yaramaz.",
            },
            {
                baslik: "Kış aylarında saha içi zemin farkı",
                metin:
                    "Bolu'da kış, sadece yolun değil sahanın da koşulunu değiştirir. Tesis avlusuna taşınan kar, gündüz eriyip gece donduğunda makine altında kaygan bir tabaka bırakır; dış sahada çalışacak platformların bu zeminde dengesi sorgulanır. Uygulamamız nettir: kış aylarında dış saha işlerinde makine, temizlenmiş ve tuzlanmış bir zemin parçasına konumlandırılır; buzlu yüzeyde denge ayağı açmak veya paletli hareket etmek plan dışıdır. İç mekân işlerinde ise sorun tersine döner — dışarıdan giren makinenin tekerleğindeki kar-çamur, temiz üretim zeminine taşınmasın diye kapıda silme yapılır.",
            },
            {
                baslik: "Belediye ve kamu yapılarında sezon dışı bakım",
                metin:
                    "Şehir merkezindeki kamu binaları, spor salonları ve kültür yapıları, kullanımın azaldığı dönemlerde bakıma alınır: salon aydınlatması, cephe temizliği, tabela ve bayrak direği işleri. Bu adreslerde makine gününün belirlenmesi kurumun kendi takvimine bağlıdır ve genellikle hafta sonuna ya da tatil dönemine denk gelir. Bizim tarafımızdan bakıldığında bu, planlanabilir ve rahat bir iştir; kurumdan istenen tek şey çalışma alanının kullanıma kapatılması ve makinenin gece boyunca güvenle bırakılabileceği kapalı bir noktanın gösterilmesidir.",
            },
            {
                baslik: "Otoyol yakınlığının merkeze getirdiği hız",
                metin:
                    "Merkezin otoyol bağlantısına yakınlığı, makine erişiminde somut bir avantaja dönüşür: hem İstanbul hem Ankara yönünden gelen sevkiyatlar şehre kısa bir sapmayla iner ve merkez adresleri, bölgeye çıkan hemen her seferin doğal durağıdır. Pratikte bu, standart sınıf makinelerde bekleme süresinin kısa olması demektir. Ağır sınıf ve özel ekipmanda ise durum farklıdır; onlar için sevkiyat ayrı planlanır ve kış döneminde geçiş koşulları da hesaba katılır. Talep verirken makine sınıfını söylemeniz, size verilecek tarihin gerçekçi olmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolu merkezde tesis tipi, yükseklik ve makine eşlemesi",
                paragraflar: [
                    "Merkezdeki iş taleplerini tesis tipine göre gruplarsak, yükseklik bandı ve uygun makine sınıfı büyük ölçüde öngörülebilir hâle gelir. Aşağıdaki tablo, sahada en sık kurduğumuz eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Tipik çalışma yüksekliği", "Uygun makine", "Belirleyici koşul"],
                    satirlar: [
                        ["Kereste / mobilya atölyesi", "8-12 m", "Akülü makaslı", "Toz ortamı, kapı genişliği"],
                        ["Gıda üretim tesisi", "8-14 m", "Akülü makaslı / eklemli", "Hijyen alanı, iz bırakmayan lastik"],
                        ["Çelik konstrüksiyon depo", "12-16 m", "Akülü eklemli", "Raf arası koridor ölçüsü"],
                        ["Kamu binası ve salon", "10-14 m", "Akülü makaslı", "Parke / cilalı zemin koruması"],
                        ["Dış cephe ve tabela işi", "14-20 m", "Dizel eklemli", "Kış aylarında zemin buzlanması"],
                    ],
                },
            },
            {
                baslik: "Mevsim penceresi: Bolu'da işin doğru zamanı",
                paragraflar: [
                    "Bolu'da bakım işlerinin takvimi, iklimin izin verdiği pencerelere göre kurulur. Nisan-haziran ve eylül-ekim arası, hem dış cephe hem çatı işleri için en verimli dönemdir; sıcaklık makine hidroliğini zorlamaz, yağış olasılığı yönetilebilirdir ve gün uzunluğu tek günde bitecek işleri gerçekten tek güne sığdırır. Temmuz-ağustos dış işlerde çalışılabilir ama turizm tesislerinin talebi bu döneme yığıldığı için makine bulunabilirliği daralır.",
                    "Kasım-mart bandı ise iç mekân işlerinin dönemidir. Üretim tesisleri bu aylarda kapalı alan bakımlarını yapar; dış cephe ve çatı işleri ise havanın açtığı günlere kaydırılır. Bu dönemde iş planlarken tek günlük değil, iki-üç günlük bir esneklik payı bırakmanızı öneririz — makine sahada dururken bir gün yağış nedeniyle kaybedilse bile, ertesi gün iş tamamlanır ve ikinci bir sevkiyat masrafı doğmaz. Kış planlamasında en pahalı hata, işi tek bir güne kilitlemektir.",
                ],
            },
            {
                baslik: "Makinenin sahada kalması: kısa iş, uzun kiralama tartışması",
                paragraflar: [
                    "Bolu gibi sevkiyatın belirli bir mesafeye bağlı olduğu bölgelerde, kiralama süresini işin süresine değil, nakliye ekonomisine göre kurmak çoğu zaman daha doğrudur. Yarım günlük bir aydınlatma işi için makine getirtip aynı gün göndermek, nakliyeyi işin kendisinden pahalı hâle getirebilir. Bunun yerine tesisin bekleyen diğer işlerini de aynı makine gününe toplamak — armatür değişimi, kamera ayarı, çatı oluğu kontrolü, tabela sıkma — makine başına düşen maliyeti belirgin biçimde düşürür.",
                    "Bu yüzden merkez taleplerinde standart sorumuz şudur: bu makine sahadayken başka hangi işleri de bitirebilirsiniz? Çoğu tesis yöneticisi listeyi birkaç dakikada çıkarır ve bir günlük kiralama, üç ayrı çağrının yerine geçer. Uzun süreli işlerde ise haftalık ve aylık düzen daha ekonomiktir; süre uzadıkça günlük birim maliyet düşer ve tesis, makineyi kendi bakım programına göre kullanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bolu merkeze makine ne kadar sürede gelir?",
                cevap:
                    "Standart sınıf makinelerde merkez adresleri, bölgeye çıkan seferlerin doğal durağı olduğu için bekleme süresi kısadır; talebinizi bir gün önceden ilettiğinizde çoğu durumda ertesi sabah sahada olunur. Bu sürenin kritik değişkeni makinenin sınıfıdır: ağır ve büyük gövdeli ekipmanlar özel sevkiyat gerektirir ve planlaması ayrı yapılır. Kış aylarında bir değişken daha eklenir — dağ geçişinin durumu. Geçişin kapalı veya zincir zorunlu olduğu günlerde tarih, koşulların açılacağı ilk güne göre yeniden verilir ve size tahmini değil, gerçekçi bir gün söylenir.",
            },
            {
                soru: "Atölyemizin kapısı dar; hangi makine içeri girebilir?",
                cevap:
                    "Bolu'daki kereste ve mobilya atölyelerinde en sık karşılaştığımız kısıt budur ve çözümü ölçüyle başlar: kapınızın net genişliğini ve varsa üst kirişin yerden yüksekliğini bize bildirin. Dar kapı için üretilmiş kompakt makaslı modeller yaklaşık bir metre bandındaki genişliklerle geçer; bu modellerin çalışma yüksekliği çoğu atölye tavanı için yeterlidir. Kapı hâlâ dar geliyorsa alternatif, makinenin sökülebilir korkuluklu versiyonu ya da dış cepheden pencere üstü çalışma kurgusudur. Ölçüyü telefonda konuşmak, teslim günü kapıda kalan bir makineden çok daha ucuzdur.",
            },
            {
                soru: "Kış ortasında dış cephe işi yaptırmak mantıklı mı?",
                cevap:
                    "Mantıklı olduğu durumlar vardır ama planı farklı kurmak gerekir. Kışın dış cephe işi yapılacaksa üç koşul aranır: çalışma zemininin kar ve buzdan temizlenmiş olması, rüzgâr hızının makinenin çalışma sınırının altında kalması ve işin gün ışığı penceresine sığması. Bolu'da kış günleri kısadır; sabah geç aydınlanan, ikindide kararan bir günde sekiz saatlik iş planlamak gerçekçi değildir. Acil olmayan cephe işlerinde önerimiz, bahar penceresini beklemektir. Acil olanlarda ise makineyi birkaç gün sahada tutup havanın açtığı saatlerde çalışmak, tek güne sıkıştırmaktan hem güvenli hem ekonomiktir.",
            },
            {
                soru: "Gıda üretim alanımıza platform sokabilir miyiz?",
                cevap:
                    "Sokabilirsiniz; koşul, makinenin hijyen kurallarınıza uygun hâle getirilmesidir. Bu tür alanlarda içten yanmalı makine kullanılmaz — akülü modeller tercih edilir. Tekerlekler üretim zeminine iz bırakmayan tipte olmalı, makine sahaya girmeden önce dışarıda temizlenmeli ve gerekiyorsa tekerlek üzerine koruyucu uygulanmalıdır. Hidrolik sızıntı riskine karşı çalışma alanının altına örtü serilmesi de standart uygulamamızdır. Tesisinizin kendi hijyen prosedürü varsa, makine sahaya girmeden önce onu bize iletin; makineyi o prosedüre göre hazırlayıp göndeririz.",
            },
            {
                soru: "Aynı gün içinde birkaç ayrı iş için tek makine yeter mi?",
                cevap:
                    "Çoğu zaman yeter ve bu, Bolu'da maliyeti en çok düşüren yaklaşımdır. Bir tesiste aydınlatma, havalandırma kontrolü, kamera ayarı ve tabela sıkma gibi işlerin hepsi benzer yükseklik bandındaysa tek makine gününde toplanabilir. Dikkat edilecek nokta, işlerin farklı yükseklik veya farklı erişim tipi istememesidir: iç mekânda 10 metrelik bir iş ile dış cephede 18 metrelik bir iş aynı makineyle çözülmez. Talebinizi verirken yapılacak işlerin listesini bize iletin; hepsini tek makineyle mi yoksa iki ayrı sınıfla mı çözmenin daha doğru olduğunu söyleyelim.",
            },
            {
                soru: "Operatör göndermeniz gerekiyor mu, kendi personelimiz kullanabilir mi?",
                cevap:
                    "İkisi de mümkündür ve karar sizin ekibinizin belgeli olup olmamasına bağlıdır. Yüksekte çalışma platformu kullanacak kişinin gerekli eğitimi almış olması aranır; belgeli personeliniz varsa makine size teslim edilir, kısa bir kullanım ve güvenlik aktarımı yapılır. Belgeli personeliniz yoksa operatörlü kiralama daha doğru olur — hem yasal sorumluluk hem verimlilik açısından. Bolu'daki tesislerin çoğunda bakım ekibi belirli makinelere alışkındır; farklı marka veya kumanda düzenine sahip bir makine geldiğinde teslim sırasındaki aktarımı atlamamanızı özellikle rica ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bolu'nun orman ürünleri-mobilya ağırlıklı sanayi dokusu, iklimi ve otoyol bağlantısı kamuya açık genel bilgidir; mevsim penceresi planlaması, makine gününü işlerle doldurma önerisi ve saha hazırlık düzeni firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:gerede": {
        h1: "Gerede'ye Kavşak Hızında Platform ve Vinç Sevkiyatı",
        giris:
            "Gerede'yi Bolu'nun diğer ilçelerinden ayıran şey, iki büyük karayolunun burada birleşmesidir: TEM Otoyolu ile D-100 aynı noktada kesişir ve Karadeniz'e uzanan hat da buradan ayrılır. Bu kavşak niteliği ilçeye iki farklı ekonomi kazandırmıştır — bir yanda yol kenarına dizilmiş konaklama, akaryakıt, lokanta ve araç servisi zinciri, diğer yanda deri ve imalat sanayisi. Makine ihtiyacı da bu ikili yapıya göre şekillenir: yol kenarı işletmeleri tabela, aydınlatma ve çatı bakımı için mevsimlik platform ister; sanayi tarafı ise üretim durdurma pencerelerine denk getirilmiş planlı bakım talep eder. Sevkiyat açısından Gerede, bölgenin en avantajlı adresidir; çünkü İstanbul ve Ankara yönlerinden gelen her aracın zaten geçtiği noktadadır ve otoyoldan ayrılma mesafesi kısadır. Bu avantajın tek istisnası kış aylarında dağ geçişinin durumudur — bu sayfa hem kavşak avantajını hem o istisnayı planlamaya nasıl kattığımızı anlatır.",
        maddeler: [
            {
                baslik: "Yol kenarı işletmelerinde tabela ve aydınlatma bakımı",
                metin:
                    "Otoyol ve D-100 kenarındaki konaklama tesisleri, akaryakıt istasyonları ve lokantalar için görünürlük doğrudan ciro demektir; bu yüzden tabela, totem ve aydınlatma bakımı ertelenemez bir iştir. Bu işlerin ortak özelliği yüksekliğin çoğunlukla 12-18 metre bandına çıkması ve çalışmanın araç trafiğine yakın bir noktada yapılmasıdır. Planlamada iki şey belirleyicidir: makinenin işletme sahasının içinde konumlanabilmesi ve çalışmanın trafiğin en seyrek olduğu saate — genellikle sabahın erken saatlerine — yazılması.",
            },
            {
                baslik: "Ağır araç servislerinde çatı altı ve köprü vinç hattı",
                metin:
                    "Gerede'nin kavşak konumu, ağır araç bakım ve onarım işletmelerini de beraberinde getirmiştir. Bu atölyelerin tavan yüksekliği tır ve çekicilerin içeri alınabilmesi için yüksek tutulur; köprü vinç rayları, aspiratör hatları ve aydınlatma armatürleri bu yükseklikte bakım ister. Atölye içinde çalışacak makinenin egzoz emisyonu üretmemesi ve manevra alanının dar koridorlara uyması gerekir — burada tercihimiz kompakt gövdeli akülü modellerdir. Zeminde yağ ve gres bulunabileceği için makine tekerleğinin kavrama durumu teslim öncesi kontrol edilir.",
            },
            {
                baslik: "Otoyoldan sapma mesafesinin sevkiyata etkisi",
                metin:
                    "Bir adresin sevkiyat maliyetini belirleyen şey toplam mesafeden çok, ana hattan ayrıldıktan sonraki kilometredir. Gerede bu ölçüde bölgenin en avantajlı noktasıdır: araç otoyoldan çıkar, kısa bir bağlantıyla ilçe içindeki sanayi ve yol kenarı adreslerine iner. Bu kısalık, standart sınıf makinelerde aynı gün teslim olasılığını yükseltir. Talep aldığımızda adresinizin kavşağa uzaklığını sormamızın nedeni budur — kavşağa yakın adresler günlük sefer planına kolayca eklenir, uzak köy ve yayla adresleri ise ayrı planlanır.",
            },
            {
                baslik: "Kış aylarında Gerede'nin kendi iklimi",
                metin:
                    "Gerede, dağ geçişinin doğu ucundadır ve kendi rakımı nedeniyle kış koşullarını Bolu merkezden daha sert yaşar. Kar yağışının erken başladığı ve geç bittiği bir bölgede dış saha çalışması planlarken, takvimden çok hava penceresine bakmak gerekir. Uygulamamız, kış döneminde Gerede'ye giden makinelerin kış donanımlı araçla sevk edilmesi ve teslim gününün, geçiş koşullarının netleştiği sabah teyit edilmesidir. Böylece iş sahibi, makinenin geleceği günü değil, geleceği saati bilir.",
            },
            {
                baslik: "Depo ve antrepo yapılarında yüksek raf çalışması",
                metin:
                    "Kavşak ekonomisi, ilçede depolama ve aktarma yapılarını da çoğaltmıştır. Bu yapılarda platform ihtiyacı raf montajı ve raf üstü işlerden doğar; kritik ölçü tavan yüksekliği kadar koridor genişliğidir. Makine raflar arasına girecekse şase genişliği ile koridor ölçüsü karşılaştırılmalı, dönüş yarıçapı koridor sonundaki manevra alanına sığmalıdır. Zemin genellikle perdahlı beton olduğundan iz bırakmayan lastik tercih edilir; rampa çevresindeki kot farkları için çukur algılama sistemi devrede tutulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gerede'de iş tipi, mevsim penceresi ve makine tercihi",
                paragraflar: [
                    "İlçedeki taleplerin büyük kısmı belirli mevsim pencerelerine yığılır. Aşağıdaki tablo, iş tipine göre önerdiğimiz dönemi ve makine tercihini gösterir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Önerilen dönem", "Makine tercihi", "Planlamada dikkat"],
                    satirlar: [
                        ["Tabela / totem bakımı", "Nisan-ekim", "Dizel eklemli", "Rüzgâr hızı sınırı"],
                        ["Ağır araç atölyesi bakımı", "Yıl boyu (iç mekân)", "Akülü eklemli", "Yağlı zemin, dar koridor"],
                        ["Depo raf montajı", "Yıl boyu (iç mekân)", "Akülü makaslı", "Koridor genişliği"],
                        ["Akaryakıt istasyonu kanopi işi", "Mayıs-eylül", "Kompakt makaslı", "Yakıt sahası güvenlik kuralı"],
                        ["Çatı ve oluk onarımı", "Eylül-ekim", "Eklemli / vinç", "Kar öncesi tamamlama"],
                    ],
                },
            },
            {
                baslik: "Kar öncesi bakım listesi: eylül-ekim penceresi",
                paragraflar: [
                    "Gerede'de kışa hazırlık, bakım takviminin en yoğun kalemidir ve pencere dardır. Kar yağışı başlamadan tamamlanması gereken işler bellidir: çatı oluklarının temizliği ve sabitlemesi, tabela bağlantılarının sıkılması, dış aydınlatma armatürlerinin kontrolü, kanopi ve saçak altındaki gevşek parçaların onarımı. Bu işlerin hepsi yüksekte çalışma gerektirir ve hepsi kar başladıktan sonra hem zorlaşır hem tehlikelenir.",
                    "Bu yüzden ilçedeki işletmelere önerimiz, eylül ayında tek bir makine günü planlayıp listedeki bütün kalemleri o güne toplamalarıdır. Ayrı ayrı çağrılan üç iş, üç nakliye demektir; tek güne toplanmış üç iş, tek nakliyedir. Ekim sonuna yaklaştıkça hem hava penceresi daralır hem bölgedeki talep yoğunlaşır; erken planlayan işletme hem makineyi istediği günde bulur hem daha uygun koşulla kiralar.",
                ],
            },
            {
                baslik: "Kavşak avantajının sınırı: ağır ekipman ve kış",
                paragraflar: [
                    "Gerede'nin otoyol kavşağındaki konumu standart makinelerde hız avantajı sağlar ama bu avantajın iki sınırı vardır ve ikisini de baştan söyleriz. Birincisi ağır sınıf ekipmandır: yüksek tonajlı platformlar ve vinçler özel araç ve organizasyon ister, günlük sefer planına eklenemez ve tarihi ayrı verilir. İkincisi kıştır: dağ geçişinin kapandığı veya zincir zorunluluğu getirildiği günlerde ağır araç trafiği doğrudan etkilenir ve planlanmış sevkiyat kayabilir.",
                    "Bu iki sınırı yönetme biçimimiz şeffaflıktır. Ağır ekipman talebinde size gerçekçi bir hazırlık süresi söyleriz; kış döneminde ise teslim gününü sabah teyit ederiz ve koşul uygun değilse yeni tarihi hemen veririz. Sahada makine bekleyen bir ekibin en sevmediği şey belirsizliktir — biz de bu yüzden iyimser tahmin yerine güncel bilgi vermeyi tercih ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otoyol kenarındaki tesisimizin tabelası için hangi makine gerekir?",
                cevap:
                    "Tabelanın yerden yüksekliği ve tesisin sahasındaki konumu belirleyicidir. Yol kenarı totem ve tabelalar çoğunlukla 12-18 metre bandındadır; bu yükseklikte eklemli platform, sepeti tabelanın yan yüzeyine yaklaştırabildiği için makaslı modele göre belirgin avantajlıdır. İkinci soru, makinenin nereye konumlanacağıdır: çalışma her koşulda tesisin kendi sahası içinden yapılır, yol kenarında araç trafiğine açık noktada değil. Tabelanızın fotoğrafını ve yaklaşık yüksekliğini paylaşırsanız, sınıf seçimini ve konumlandırma planını telefonda netleştirebiliriz.",
            },
            {
                soru: "Kışın Gerede'ye makine gönderiminiz duruyor mu?",
                cevap:
                    "Durmuyor ama planlama biçimi değişiyor. Kış döneminde bölgeye çıkan araçlarımız kış donanımlıdır ve sevkiyat, geçiş koşullarının günlük durumuna göre teyit edilir. Yoğun kar veya zincir zorunluluğu olan günlerde ağır araç trafiği yavaşlar; böyle günlerde teslimatı zorlamak yerine bir sonraki uygun sabaha alırız. Pratikte kış boyunca iş yapılamayan gün sayısı sanıldığından azdır; asıl fark, tarihin bir hafta önceden kesin verilememesidir. Bu nedenle kış işlerinde birkaç günlük esneklik payı bırakmanızı ve makineyi sahada bir gün fazla tutmayı planlamanızı öneririz.",
            },
            {
                soru: "Ağır araç servisimizin içinde platform çalıştırmak güvenli mi?",
                cevap:
                    "Doğru makine seçildiğinde güvenlidir. Kapalı atölyede içten yanmalı makine kullanılmaz; akülü modeller hem egzoz hem gürültü açısından tek uygun tercihtir. İkinci konu zemindir: ağır araç atölyelerinde yağ ve gres birikintisi olağandır, makine bu yüzeyde kaymamalıdır — çalışma alanının temizlenmesi teslim öncesi ricamızdır. Üçüncüsü manevradır; atölye koridorları çekici gövdeleriyle daralmış olabileceğinden kompakt şase tercih edilir. Bu üç koşul sağlandığında köprü vinç rayı, aspiratör hattı ve armatür bakımı atölye içinde sorunsuz yapılır.",
            },
            {
                soru: "Deponuzun raf koridoruna makine sığar mı?",
                cevap:
                    "Sığması, koridorunuzun net genişliğine ve makinenin şase ölçüsüne bağlıdır; bu iki sayıyı karşılaştırmadan makine göndermeyiz. Dar koridorlu depolar için üretilmiş kompakt makaslı modeller yaklaşık bir metre bandındaki genişlikleriyle çoğu raf arasına girer. Ölçerken sadece genişliği değil, koridor sonundaki dönüş alanını da kontrol edin — giren ama dönemeyen makine, işi yarım bırakır. Ayrıca raf üstünde çalışacaksanız rafın kendi yüksekliğini hedef yüksekliğe eklemeyi unutmayın; sepet tabanı, çalışılacak noktanın yaklaşık iki metre altında kalır.",
            },
            {
                soru: "Akaryakıt istasyonumuzun kanopi bakımı için özel önlem gerekir mi?",
                cevap:
                    "Gerekir ve bu önlemler pazarlık konusu değildir. Yakıt sahasında çalışma, istasyonun kendi güvenlik prosedürüne tabidir: çalışılacak bölgedeki pompaların kapatılması, alanın araç trafiğine kapatılması ve kıvılcım üreten işlemlerin izne bağlanması standart uygulamadır. Makine tercihi de buna göre yapılır — akülü ve kompakt modeller, saha içinde daha kolay konumlanır. Çalışma saatinin istasyonun en sakin dilimine yazılması hem güvenlik hem ciro açısından doğru olur; çoğu istasyonda bu, sabahın erken saatleridir.",
            },
            {
                soru: "Kar başlamadan yapılması gereken işleri ne zaman planlamalıyız?",
                cevap:
                    "Eylül, Gerede için en doğru aydır; ekim ortasından sonrası risklidir. Çatı oluğu temizliği, tabela bağlantı sıkımı, dış aydınlatma kontrolü ve saçak altı onarımların hepsi kar başlamadan bitmelidir çünkü kar yağdıktan sonra bu işler hem zorlaşır hem güvenlik açısından sınırlanır. Planlamayı erken yapmanın ikinci faydası makine bulunabilirliğidir: eylül-ekim bölgedeki en yoğun bakım penceresidir ve son haftaya kalan talepler istediği günü bulmakta zorlanır. Listenizi ağustos sonunda çıkarıp tek makine gününe toplamanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gerede'nin TEM ile D-100'ün kesişimindeki konumu, yol kenarı hizmet ekonomisi ve bölgenin kış iklimi kamuya açık genel bilgidir; kar öncesi bakım listesi, mevsim penceresi ve sevkiyat teyit düzeni firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:tem-otoyolu": {
        h1: "TEM Otoyolu Hattındaki Tesislere Platform ve Vinç Kiralama",
        giris:
            "TEM Otoyolu'nun Bolu'dan geçen bölümü, iki metropol arasındaki en yoğun yük koridorlarından biridir ve bu koridorun kenarı zamanla kendi ekonomisini kurmuştur: lojistik depoları, aktarma merkezleri, akaryakıt ve dinlenme tesisleri, ağır araç servisleri, konaklama ve yeme-içme işletmeleri. Bu yapıların ortak özelliği, gelirlerinin geçen trafiğe bağlı olması ve bu yüzden bakım işlerini kesintiye izin vermeyecek biçimde planlamak zorunda kalmalarıdır. Hat üzerindeki bir depo, raf montajını sevkiyat temposunun düştüğü saate; bir dinlenme tesisi, tabela bakımını trafiğin seyreldiği güne yazar. Makine sağlayıcısı açısından bakıldığında bu hat özel bir avantaj sunar — adresler tek bir çizgi üzerinde dizilidir, sevkiyat aracı hattı bir kez kat ettiğinde birden çok tesise uğrayabilir. Bu sayfa, otoyol hattı üzerindeki tesis tiplerini, bu tesislerin çalışma penceresi mantığını ve hat üzerinde çalışmanın kendine özgü kurallarını anlatır.",
        maddeler: [
            {
                baslik: "Lojistik depolarında yükseklik ve süreklilik",
                metin:
                    "Otoyol kenarındaki depo ve aktarma yapıları, kamyon körüğüne uygun rampa düzeni ve yüksek çelik çatı ile inşa edilir; tavan yüksekliği çoğunlukla çift haneli metrelere çıkar. Buradaki platform ihtiyacı raf montajı, çatı altı aydınlatma, sprinkler hattı kontrolü ve yangın algılama bakımından doğar. Kritik olan yükseklik değil, sürekliliktir: bu tesisler gece dahil çalıştığı için bakım penceresi dar ve önceden bellidir. Bizden beklenen, makinenin o pencerede sahada olması ve pencere kapanmadan çıkmasıdır.",
            },
            {
                baslik: "Dinlenme ve akaryakıt tesislerinde trafik temposu",
                metin:
                    "Hat üzerindeki dinlenme tesisleri, tatil dönemleri ve hafta sonlarında yoğunlaşan bir trafikle çalışır. Tabela, kanopi, aydınlatma ve çatı işlerini bu yoğunluğun dışına yazmak gerekir; aksi hâlde hem çalışma alanı güvenli biçimde kapatılamaz hem işletme müşteri kaybeder. Uygulamada en verimli pencere, hafta içi sabahın erken saatleridir. Makine konumlandırması her koşulda tesis sahası içinden yapılır ve çalışma alanı, araç manevra hatlarından fiziksel olarak ayrılır.",
            },
            {
                baslik: "Hat üzerinde çoklu durak avantajı",
                metin:
                    "Otoyol hattının doğrusal yapısı, sevkiyat ekonomisinde somut bir fayda üretir: hattı kat eden bir araç, gidişte bir tesise makine bırakıp dönüşte komşu tesisten biten makineyi alabilir. Bu döngü, tek tesise özel sefer yapmanın maliyetini bölüştürür. Bu yüzden hat üzerindeki taleplerde tarihinizin esnek olup olmadığını sorarız; birkaç günlük esneklik, sevkiyatınızı mevcut bir sefere bağlama şansı verir ve maliyet aşağı iner. Tarihi sabit olan işler de yapılır, ama onlar özel sefer olarak planlanır.",
            },
            {
                baslik: "Ağır araç servis ve lastik işletmelerinde iç mekân işleri",
                metin:
                    "Hat boyunca dizilmiş ağır araç servisleri, lastik işletmeleri ve yedek parça depoları, mevsimden görece bağımsız çalışır çünkü işlerinin çoğu kapalı alandadır. Bu tesislerde platform, köprü vinç bakımı, çatı altı aydınlatma yenileme ve depo raf düzenlemesi için kullanılır. Kapalı alan olduğu için akülü makine tercih edilir; zeminde yağ, lastik izi ve metal parça bulunabileceğinden çalışma alanının teslim öncesi temizlenmesi istenir. Bu tesislerin avantajı, kış aylarında bile iş yapılabilir olmalarıdır.",
            },
            {
                baslik: "Otoyol kenarında güvenlik: çalışma alanı sınırı",
                metin:
                    "Hat üzerinde çalışmanın değişmez kuralı, makinenin ve çalışma alanının otoyol trafiğinden fiziksel olarak ayrılmasıdır. Platform hiçbir koşulda banket, emniyet şeridi veya trafiğe açık alan üzerinde konumlandırılmaz; çalışma tesisin kendi mülkü içinden yapılır. Tesisin sahası dar ve tabela yola çok yakınsa, çözüm makineyi zorlamak değil, erişim açısını değiştirmek ya da farklı bomlu bir sınıf seçmektir. Bu kural, hem çalışan güvenliği hem hukuki sorumluluk açısından tartışmaya kapalıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hat üzerindeki tesis tipleri ve bakım penceresi",
                paragraflar: [
                    "Otoyol kenarındaki her tesis tipi kendi çalışma temposuna göre farklı bir bakım penceresi tanır. Tablo, hat üzerinde en sık karşılaştığımız eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Uygun bakım penceresi", "Tipik iş", "Makine sınıfı"],
                    satirlar: [
                        ["Lojistik deposu", "Sevkiyat dışı vardiya", "Raf, sprinkler, aydınlatma", "Akülü makaslı 12-16 m"],
                        ["Dinlenme tesisi", "Hafta içi sabah", "Tabela, kanopi, cephe", "Eklemli 16-20 m"],
                        ["Akaryakıt istasyonu", "En sakin dilim", "Kanopi ve totem", "Kompakt makaslı / eklemli"],
                        ["Ağır araç servisi", "Yıl boyu iç mekân", "Vinç rayı, aspiratör", "Akülü eklemli"],
                        ["Yedek parça deposu", "Hafta içi gündüz", "Raf montajı", "Akülü makaslı 10-12 m"],
                    ],
                },
            },
            {
                baslik: "Kesintisiz çalışan tesiste bakım nasıl planlanır",
                paragraflar: [
                    "Otoyol hattındaki lojistik tesislerinin çoğu durmaz; bu yüzden bakım, üretimi durdurarak değil, akışın en zayıf olduğu dilimi bularak yapılır. Uygulamamız, tesis yöneticisiyle önce takvim değil tempo konuşmaktır: hangi gün ve hangi saatte rampalarınız boş kalıyor, hangi koridor sevkiyat dışı kalabiliyor. Bu iki cevap, makinenin sahaya ineceği saati ve çalışılacak bölgeyi birlikte belirler.",
                    "İkinci adım, işi bölmektir. Bütün depoyu tek seferde bakıma almak yerine bölge bölge ilerlemek, sevkiyatı hiç durdurmadan tüm tesisi kapsamayı mümkün kılar. Makine birkaç gün sahada kalır, her gün farklı bir koridor kapatılır ve iş, işletmeyi hiç yavaşlatmadan biter. Bu yöntem tek günlük yoğun çalışmadan daha uzun sürer ama toplam maliyeti — durmuş sevkiyatın maliyeti dahil edildiğinde — belirgin biçimde düşüktür.",
                ],
            },
            {
                baslik: "Hattın kış yüzü: geçişin planlamaya etkisi",
                paragraflar: [
                    "Otoyolun Bolu bölümü, kış aylarında ülkenin en dikkatle izlenen kesimlerinden biridir; kar, buzlanma ve sis nedeniyle ağır araç trafiği yavaşlar, kimi günlerde zincir zorunluluğu uygulanır. Bu koşullar makine sevkiyatını doğrudan etkiler çünkü platform ve vinç taşıyan araçlar ağır araç sınıfındadır. Kış planlamamız bu gerçeği baştan kabul eder: kasım-mart arasında hat üzerindeki teslimatlar için sabit saat taahhüdü vermeyiz, gün taahhüdü veririz ve teslim sabahı güncel durumla teyit ederiz.",
                    "İş sahibi tarafında bunun karşılığı basit bir alışkanlıktır: kış işlerini makinenin sahada bir gün fazla kalacağı varsayımıyla planlamak. Bu esneklik, koşulların bozulduğu bir günde işi iptal etmek yerine ertesi güne kaydırmayı mümkün kılar ve ikinci bir nakliye masrafını önler. Acil arıza müdahalelerinde ise farklı davranırız — koşulların elverdiği ilk sefere öncelik verilir ve yol durumu takip edilerek en erken ulaşım planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otoyol kenarındaki tabelamıza yoldan mı çalışılacak?",
                cevap:
                    "Hayır, hiçbir koşulda. Makine ve çalışma alanı her zaman tesisinizin kendi mülkü içinde kalır; banket, emniyet şeridi veya trafiğe açık hiçbir alan çalışma noktası olarak kullanılmaz. Tabelanız yola çok yakınsa ve sahanız dar geliyorsa çözüm, erişim açısını değiştirmek ve daha uzun bomlu bir eklemli platform seçmektir — sepet, makine yoldan uzakta dururken tabelaya yandan ulaşabilir. Bu kural bizim tarafımızdan tartışmaya kapalıdır; hem çalışan güvenliği hem hukuki sorumluluk açısından başka bir kurgu kabul etmeyiz.",
            },
            {
                soru: "Deponuz 7/24 çalışıyor; bakım için üretimi durdurmalı mıyız?",
                cevap:
                    "Genellikle durdurmanız gerekmez. Uyguladığımız yöntem, tesisi bölgelere ayırıp her gün bir koridoru veya bir bölümü bakıma almaktır; sevkiyat diğer bölgelerden akmaya devam eder. Bunun için makinenin birkaç gün sahada kalması gerekir ama kiralama süresinin uzaması, durmuş bir sevkiyatın maliyetinin yanında küçük kalır. Planlamaya başlarken sizden istediğimiz iki bilgi vardır: hangi saatlerde rampa trafiğiniz azalıyor ve hangi koridorlar sırayla kapatılabilir. Bu iki cevapla, işletmenizi hiç yavaşlatmayan bir bakım programı çıkarabiliriz.",
            },
            {
                soru: "Hat üzerinde birden çok tesisimiz var; nakliye her biri için ayrı mı hesaplanır?",
                cevap:
                    "Ayrı hesaplanması gerekmez; hattın doğrusal yapısı tam da bunun için avantajlıdır. Tesisleriniz aynı koridor üzerindeyse tek araç sırayla uğrar, makineleri sırayla bırakır ve nakliye tek organizasyon üzerinden hesaplanır. Aynı mantık toplama için de geçerlidir. Bunun için tek gereken, taleplerinizi ayrı ayrı değil birlikte iletmenizdir — üç tesis için üç ayrı gün istendiğinde üç sefer planlanmak zorunda kalır. Talebi birleştirdiğinizde hem sevkiyat maliyeti düşer hem makinelerin sahada olacağı günler tek programda görünür.",
            },
            {
                soru: "Kış aylarında hat üzerindeki teslimat için saat verebiliyor musunuz?",
                cevap:
                    "Kasım-mart arasında saat taahhüdü vermemeyi tercih ederiz; gün taahhüdü verir, teslim sabahı güncel yol durumuyla saat teyidi yaparız. Bunun nedeni dürüstlüktür: platform ve vinç taşıyan araçlar ağır araç sınıfındadır ve kar, buzlanma, sis ya da zincir uygulaması bu araçların hızını doğrudan etkiler. Sabahın erken saatinde verilen bir saat taahhüdü, koşullar değiştiğinde tutulamaz ve sahada bekleyen ekibinizin gününü yakar. Bizim yöntemimiz, teslim sabahı sizi arayıp gerçek durumu söylemek ve varış saatini o an netleştirmektir.",
            },
            {
                soru: "Dinlenme tesisimizin bakımını tatil dönemine denk getirmemek için ne yapmalıyız?",
                cevap:
                    "Planlamayı yoğunluk takviminizden geriye doğru kurmanız yeterli. Hat üzerindeki dinlenme tesislerinde trafik, tatil dönemlerinde ve hafta sonlarında zirve yapar; bakımın bu dönemlerin dışına, tercihen hafta içi sabah saatlerine yazılması hem çalışma alanını güvenle kapatmanızı hem müşteri kaybetmemenizi sağlar. Bizim tarafımızdan bakıldığında da bu dilimler avantajlıdır çünkü ağır araç trafiği daha seyrektir. Yıllık bakım kalemlerinizi listeleyip yoğun sezon başlamadan birkaç hafta önceki bir makine gününe toplamak, en verimli kurgudur.",
            },
            {
                soru: "Sprinkler ve yangın algılama bakımı için hangi makineyi öneriyorsunuz?",
                cevap:
                    "Bu işlerde belirleyici olan, çalışılacak hattın raflar arasında mı yoksa açık alanda mı olduğudur. Açık alandaki çatı altı hatlarında akülü makaslı platform en pratik çözümdür; geniş sepeti sayesinde ekip ve malzeme birlikte yükselir. Hat raflar arasına giriyorsa kompakt gövdeli bir model gerekir ve koridor genişliği ölçülmelidir. Yükseklik hesabında sepet tabanının hedefin yaklaşık iki metre altında kaldığını unutmayın. Kapalı alanda çalışıldığı için makine akülü olmalıdır; hangi modelin uygun olduğunu tavan yüksekliğinizi ve koridor ölçünüzü aldığımızda netleştirebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. TEM Otoyolu'nun Bolu kesimindeki yük koridoru niteliği, yol kenarı tesis ekonomisi ve kış aylarında ağır araç trafiğinin etkilenmesi kamuya açık genel bilgidir; çoklu durak planlaması, bölge bölge bakım yöntemi ve kış teyit düzeni firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:bolu-dagi": {
        h1: "Bolu Dağı Geçişi ve Sevkiyat Planlamasına Etkisi",
        giris:
            "Bolu Dağı, ülkenin en işlek karayolu koridorunun üzerindeki en zorlu topografik kesimdir; rakım, eğim ve mevsim koşulları burada birleşerek ağır araç trafiğini yılın belirli bölümünde doğrudan etkiler. Makine kiralama açısından bu, coğrafi bir merak değil, planlamanın merkezinde duran bir gerçektir: platform ve vinç taşıyan araçlar ağır araç sınıfındadır ve geçişte uygulanan her tedbir — zincir zorunluluğu, hız kısıtı, ağır araç bekletmesi, kapanma — sevkiyat takvimini olduğu gibi etkiler. Bu sayfa bir hizmet bölgesi tanıtımından çok, dağ geçişinin lojistiğe ne yaptığını ve bunu planlamaya nasıl kattığımızı anlatır. Geçidin iki yakasındaki tesisler — bir yanda batı yamacındaki yerleşimler ve tesisler, diğer yanda doğu tarafındaki sanayi ve yol kenarı işletmeleri — makineye aynı hızla ulaşamaz ve bu farkı baştan söylemek, sonradan gecikme açıklamaktan çok daha dürüsttür.",
        maddeler: [
            {
                baslik: "Rakım ve eğimin ağır araca etkisi",
                metin:
                    "Geçişin belirleyici özelliği yalnızca kar değil, eğimdir. Yüklü bir çekici, tırmanışta hız kaybeder ve inişte fren yönetimi gerektirir; üzerinde platform veya vinç taşıyan bir araç bu iki koşulu birden yaşar. Bu nedenle geçiş üzerinden yapılan makine sevkiyatlarında yükleme düzeni ve bağlama noktaları standarttan daha titiz kontrol edilir. Kışın buna kış lastiği ve zincir hazırlığı eklenir. Sevkiyatın süresi de mesafeden değil, bu koşulların o günkü hâlinden hesaplanır.",
            },
            {
                baslik: "Kar, buz ve sis: üç ayrı risk",
                metin:
                    "Geçişin kış gerçeği tek bir olguya indirgenemez. Kar yağışı görüşü ve tutuşu birlikte bozar; buzlanma özellikle gece-sabah bandında yüzeyde ince ve fark edilmesi zor bir tabaka bırakır; sis ise kar olmadan da görüşü kapatabilir ve sonbahar-ilkbahar aylarında sık görülür. Bu üç risk farklı tedbirler gerektirir ve sevkiyat kararında ayrı ayrı değerlendirilir. Kar yağmayan ama sisli bir sabahta ağır araçla geçmemek, kar yağan bir öğleden sonra geçmekten daha doğru olabilir.",
            },
            {
                baslik: "Zincir zorunluluğu ve bekletme uygulamaları",
                metin:
                    "Kış koşullarının ağırlaştığı günlerde ağır araçlar için zincir zorunluluğu getirilmesi ve gerektiğinde geçiş öncesinde bekletme uygulanması olağandır. Bu uygulamalar sürücü ve araç güvenliği içindir ve planlamada veri olarak kabul edilir. Bizim tarafımızdan hazırlık, araçların kış donanımını sezon başında tamamlamak ve şoförün bekleme durumunda ne yapacağını önceden bilmesidir. Müşteri tarafındaki karşılığı ise takvimde esneklik payı bırakmaktır — bekletmeye takılan bir sevkiyat iptal olmaz, sadece geç ulaşır.",
            },
            {
                baslik: "Geçişin iki yakası arasındaki erişim farkı",
                metin:
                    "Bölgeye makine sevk ederken hangi yakada olduğunuz, yazın önemsizdir ama kışın belirleyici olur. Geçişin bir tarafındaki adrese ulaşmak için dağı aşmanız gerekiyorsa, koşullar sevkiyatın hızını doğrudan belirler; aynı tarafta kalan bir adres ise koşullardan çok daha az etkilenir. Bu yüzden kış döneminde alınan taleplerde adresin konumunu erken netleştiririz ve gerekiyorsa makineyi geçişin aynı yakasındaki bir kaynaktan planlarız. Bu tercih, çoğu zaman bir günlük fark yaratır.",
            },
            {
                baslik: "Yaz ayları: yoğun trafiğin kendi kısıtı",
                metin:
                    "Geçişin zorluğu kışa özgü sanılır ama yaz aylarında farklı bir kısıt devreye girer: tatil dönemlerinde koridor trafiği belirgin biçimde yoğunlaşır ve ağır araçların ilerlemesi yavaşlar. Bu dönemde sevkiyat planlaması saat seçimine dayanır — trafiğin zirve yaptığı hafta sonu dilimleri yerine hafta içi erken saatler tercih edilir. Yaz kısıtının kıştan farkı öngörülebilir olmasıdır: tatil takvimi bellidir ve buna göre önceden plan yapılabilir, oysa kış koşulları günlük olarak değişir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mevsime göre geçiş koşulu ve sevkiyat planı",
                paragraflar: [
                    "Geçişin sevkiyata etkisi mevsime göre karakter değiştirir. Aşağıdaki tablo, dönemlere göre baskın riski ve buna karşı uyguladığımız planlama yaklaşımını gösterir.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Baskın koşul", "Sevkiyat yaklaşımı", "Müşteriden beklenen"],
                    satirlar: [
                        ["Aralık-şubat", "Kar ve buzlanma", "Gün taahhüdü, sabah teyidi", "1-2 gün esneklik payı"],
                        ["Kasım / mart", "Değişken hava, sis", "Erken saat tercihi", "Yedek gün planı"],
                        ["Nisan-haziran", "Elverişli", "Standart planlama", "Normal randevu"],
                        ["Temmuz-ağustos", "Yoğun tatil trafiği", "Hafta içi erken saat", "Hafta sonu dışı tarih"],
                        ["Eylül-ekim", "Sis ve erken soğuk", "Sabah geç, öğle tercihi", "Kar öncesi işleri öne alma"],
                    ],
                },
            },
            {
                baslik: "Kış sevkiyatında hazırlık: bizim tarafımız ve sizin tarafınız",
                paragraflar: [
                    "Kış döneminde sevkiyatın sorunsuz olması, iki tarafın da hazırlık yapmasına bağlıdır. Bizim tarafımızda hazırlık sezon başında yapılır: araçların kış donanımının tamamlanması, zincir setlerinin araçlarda bulunması, makinelerin soğuk hava koşullarına uygun hidrolik ve akü bakımının gözden geçirilmesi. Soğukta akü performansı düşer ve hidrolik yağ ağırlaşır; makine sahaya vardığında hemen tam kapasite çalışmayabilir, bu yüzden ısınma süresi plana dahil edilir.",
                    "Sizin tarafınızdaki hazırlık ise sahayla ilgilidir: makinenin indirileceği alanın kardan temizlenmiş olması, indirme noktasının buz tutmamış olması ve makinenin gece kalacaksa rüzgârdan korunaklı bir yere alınabilmesi. Bu üç hazırlık yapılmadığında araç sahaya varır ama makine indirilemez — kış aylarında en sık yaşanan gecikme nedeni yol değil, hazırlıksız sahadır. Teslim öncesi bu üç maddeyi telefonda birlikte gözden geçirmeyi standart hâline getirdik.",
                ],
            },
            {
                baslik: "Acil müdahale ile planlı bakımın ayrımı",
                paragraflar: [
                    "Kış döneminde gelen taleplerde ilk yaptığımız ayrım, işin acil mi planlı mı olduğudur; çünkü ikisinin sevkiyat mantığı tamamen farklıdır. Planlı bakım işlerinde önerimiz nettir: koşulların elverişli olduğu güne kaydırın. Bir depo aydınlatması ya da raf montajı, kar fırtınasının olduğu güne yazılmak zorunda değildir ve bir hafta beklemek hem güvenli hem ucuzdur.",
                    "Acil müdahalelerde ise mantık tersine döner. Üretimi durduran bir arıza, çatıda oluşan ve tesise zarar veren bir hasar ya da güvenlik riski doğuran bir durum söz konusuysa sevkiyat, koşulların elverdiği ilk fırsatta yapılır ve yol durumu sürekli takip edilir. Bu durumda size verdiğimiz bilgi tahmin değil, güncel durumdur: araç nerede, geçiş ne durumda, tahmini varış ne zaman. Belirsizliği paylaşmak, iyimser bir saat verip tutmamaktan her zaman daha iyidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kar yağdığında makine sevkiyatınız tamamen duruyor mu?",
                cevap:
                    "Tamamen durmuyor; koşullara göre kararlaşıyor. Hafif kar yağışında kış donanımlı araçlarımız normal seyrini sürdürür, sadece süre uzar. Yoğun yağış, zincir zorunluluğu veya ağır araç bekletmesi olduğu günlerde ise planlı işlerin sevkiyatını ertelemeyi tercih ederiz — zorlanarak yapılan bir geçiş, hem araç hem yük hem şoför açısından alınmaya değmeyecek bir risktir. Acil müdahale gerektiren durumlarda farklı davranırız: koşulların elverdiği ilk fırsat kollanır ve size sürekli güncel bilgi verilir. Kararı her seferinde o günün gerçek durumuna bakarak veririz.",
            },
            {
                soru: "Kışın makine kiralarken kaç gün esneklik bırakmalıyız?",
                cevap:
                    "Aralık-şubat arasındaki planlı işlerde bir ila iki günlük esneklik payı bırakmanızı öneririz. Bunun pratikteki anlamı şudur: işi tek bir güne kilitlemek yerine, makinenin sahada bir gün fazla kalabileceğini varsayarak plan yapmak. Bu esneklik iki yönlü çalışır — sevkiyat bir gün gecikirse iş iptal olmaz, kayar; hava işin ortasında bozulursa ertesi gün tamamlanır ve ikinci bir nakliye masrafı doğmaz. Kasım ve mart aylarında bir günlük pay çoğu zaman yeterlidir. Nisan-ekim arasında ise standart randevu düzeni geçerlidir ve ek pay gerekmez.",
            },
            {
                soru: "Soğuk havada makine düzgün çalışır mı?",
                cevap:
                    "Çalışır ama soğuğun makine üzerinde iki bilinen etkisi vardır ve bunları plana katmak gerekir. Birincisi akü performansının düşmesidir; akülü makinelerde düşük sıcaklıkta kullanım süresi yaz koşullarındaki kadar uzun olmaz, bu yüzden uzun çalışma günlerinde şarj planı önceden konuşulur. İkincisi hidrolik yağın soğukta ağırlaşmasıdır; makine ilk çalıştırıldığında hareketler yavaş gelebilir, kısa bir ısınma süresi bunu düzeltir. Makineyi gece açıkta bırakmak yerine korunaklı bir noktaya almak her iki etkiyi de belirgin biçimde azaltır — bunu teslim sırasında sahada birlikte konuşuruz.",
            },
            {
                soru: "Geçişin diğer tarafındaki adresimize makine gelir mi?",
                cevap:
                    "Gelir; yaz aylarında bu bir fark bile yaratmaz. Kış döneminde ise adresin geçişin hangi yakasında olduğu, teslim süresini etkileyebilecek bir değişkendir ve bunu baştan söyleriz. Koşulların ağırlaştığı günlerde geçiş üzerinden yapılacak bir sevkiyat, aynı yakadaki bir adrese göre daha uzun sürebilir veya bir gün kayabilir. Bu durumlarda makineyi mümkünse adresinizin bulunduğu yakadan planlarız. Talebinizi alırken adresinizi net biçimde sormamızın nedeni budur; bu bilgi, size verdiğimiz tarihi gerçekçi kılan en önemli veridir.",
            },
            {
                soru: "Yaz tatili döneminde sevkiyat neden yavaşlıyor?",
                cevap:
                    "Çünkü bu koridor, tatil dönemlerinde ülkenin en yoğun trafik akışlarından birini taşır ve ağır araçlar bu yoğunlukta en yavaş ilerleyen halkadır. Kıştan farkı, bu yavaşlamanın öngörülebilir olmasıdır: tatil takvimi ve hafta sonu yoğunlukları bellidir, dolayısıyla plan buna göre kurulabilir. Uygulamamız, yaz dönemindeki sevkiyatları hafta içi ve sabahın erken saatlerine yazmaktır. Tarihinizde esneklik varsa, hafta sonu ve tatil dönüş günlerinden kaçınmak varış süresini belirgin biçimde kısaltır. Bu dönemde yapılan planlama, kıştaki gibi belirsizlik değil, sadece tercih meselesidir.",
            },
            {
                soru: "Acil bir arıza için kışın bile makine gönderebilir misiniz?",
                cevap:
                    "Gönderiyoruz ve acil işleri planlı işlerden ayrı değerlendiriyoruz. Üretimi durduran bir arıza, tesise zarar veren bir çatı hasarı veya güvenlik riski oluşturan bir durum söz konusuysa sevkiyat, koşulların elverdiği ilk fırsatta yapılır. Bu durumda size verdiğimiz bilgi bir vaat değil, canlı durum bildirimidir: aracın konumu, geçişin o anki hâli ve gerçekçi varış tahmini. Yol kapalıysa bunu açıkça söyler, açıldığı anda yola çıkarız. Acil taleplerde en çok değer verdiğimiz şey hızdan önce doğru bilgidir; çünkü sahada bekleyen ekip, gerçek durumu bilerek kendi planını yapabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bolu Dağı geçişinin rakım-eğim yapısı, kış aylarındaki kar-buzlanma-sis koşulları, ağır araçlar için zincir ve bekletme uygulamaları ile tatil dönemlerindeki trafik yoğunluğu kamuya açık genel bilgidir; mevsim bazlı sevkiyat yaklaşımı, kış hazırlık listesi ve acil-planlı iş ayrımı firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:gerede-deri-osb": {
        h1: "Gerede Deri Organize Sanayi Bölgesine Platform ve Vinç Kiralama",
        giris:
            "Gerede'deki deri ihtisas organize sanayi bölgesi, Bolu'nun en özel üretim alanıdır; çünkü buradaki tesisler yalnızca bir sektörde yoğunlaşmakla kalmaz, o sektörün kendine özgü altyapısını da paylaşır. Deri işleme, su ve kimyasal yoğun bir üretimdir: tabaklama hatları, arıtma tesisi üniteleri, kurutma ve kondisyonlama bölümleri, kimyasal depolama alanları. Bu yapıların hepsi yüksekte bakım gerektiren ekipmanlar barındırır ve hepsinin ortak paydası, ortamın makineye standart bir depodan çok daha zor davranmasıdır — nem, kimyasal buhar, ıslak zemin ve korozyon burada gündelik koşullardır. Bir ihtisas OSB'ye makine göndermek, bu koşulları bilerek makine seçmek ve makineyi işten sonra doğru biçimde bakıma almak demektir. Bu sayfa, deri sanayi tesislerindeki tipik yüksek nokta işlerini, ortam koşullarının makine seçimine etkisini ve OSB'ye özgü giriş-çalışma düzenini anlatır.",
        maddeler: [
            {
                baslik: "Arıtma tesisi ünitelerinde yüksek nokta bakımı",
                metin:
                    "Deri işleme tesislerinin ayrılmaz parçası olan arıtma üniteleri, havalandırma sistemleri, karıştırıcı motorları, boru köprüleri ve ölçüm ekipmanları içerir; bunların bakımı çoğunlukla yerden erişilemeyecek yükseklikte yapılır. Bu alanda çalışırken iki koşul öne çıkar: zemin ıslak ve kaygan olabilir, ortamda korozif buhar bulunabilir. Makine bu nedenle sağlam ve düz bir zemin parçasına konumlandırılır; çalışma sonrası makinenin dış yüzeyi ve hareketli parçaları temizlenir. Arıtma alanında çalışma öncesi tesisin kendi iş izni prosedürünün uygulanması standarttır.",
            },
            {
                baslik: "Tabaklama ve işleme hatlarında nemli ortam",
                metin:
                    "Deri üretiminin ıslak bölümleri, sürekli nem altında çalışan alanlardır; tavan altındaki aydınlatma armatürleri, havalandırma kanalları ve vinç rayları bu nem yüzünden standart bir üretim alanından daha sık bakım ister. Nemli ortamda çalışacak platformda elektrik güvenliği ve zemin tutuşu belirleyicidir. Makine seçiminde akülü modeller tercih edilir ve makinenin tekerlek durumu, ıslak zeminde kavrama açısından teslim öncesi kontrol edilir. Çalışma sırasında zeminin mümkün olduğunca kurutulmuş olması, tesisten yaptığımız standart ricadır.",
            },
            {
                baslik: "Kimyasal depolama alanlarında iş izni düzeni",
                metin:
                    "Kimyasal madde depolanan bölümlerde yüksekte çalışma, tesisin kendi güvenlik prosedürüne tabidir; bu alanlarda iş izni belgesi, alanın havalandırılması ve gerektiğinde bölümün üretim dışı bırakılması olağan uygulamalardır. Bizim yaklaşımımız, bu prosedüre uymak değil sadece — onu planın parçası saymaktır. Talep alındığında tesisin iş izni sürecinin ne kadar sürdüğü sorulur ve makine günü buna göre belirlenir. İzin süreci tamamlanmadan sahaya makine göndermek, makineyi kapıda bekleten bir plan hatasıdır.",
            },
            {
                baslik: "OSB giriş düzeni ve saha içi trafik",
                metin:
                    "Organize sanayi bölgesine giriş, bölge yönetiminin kurallarına tabidir ve araç-şoför bildirimi genellikle önceden yapılır. Saha içinde ise kendi trafiği vardır: hammadde kabulü, kimyasal tankeri, atık aracı ve sevkiyat kamyonları aynı yolları kullanır. Makine teslimatı bu trafiğe eklemlenir, kesmez. Uygulamamız, teslim saatini tesisin kapı trafiğinin sakin olduğu dilime yazmak ve bölge girişi için gerekli bildirimleri bir gün önceden tamamlamaktır. Bu iki hazırlık yapıldığında teslimat, saha düzenini hiç etkilemeden tamamlanır.",
            },
            {
                baslik: "Makinenin iş sonrası bakımı: korozyon önlemi",
                metin:
                    "Deri sanayi ortamında çalışan bir makine, standart bir depoda çalışan makineyle aynı bakım programına tabi tutulamaz. Nem ve kimyasal buhar, metal yüzeylerde ve elektrik bağlantılarında zamanla etkisini gösterir. Bu yüzden bu bölgeden dönen makineler ayrı bir kontrolden geçirilir: dış yüzey temizliği, hareketli parçaların yağlanması, elektrik bağlantı noktalarının gözden geçirilmesi. Bu, müşteriye yansıyan bir işlem değildir ama makinenin bir sonraki sahaya sağlıklı gitmesini sağlar — filoyu ayakta tutan da bu görünmeyen disiplindir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Deri OSB'de çalışma alanı, koşul ve makine tercihi",
                paragraflar: [
                    "İhtisas bölgesindeki tesislerde çalışma alanı değiştikçe ortam koşulu ve buna bağlı makine tercihi de değişir. Tablo, sahada uyguladığımız eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Çalışma alanı", "Baskın ortam koşulu", "Makine tercihi", "Ön koşul"],
                    satirlar: [
                        ["Tabaklama / ıslak hat", "Nem, ıslak zemin", "Akülü makaslı", "Zeminin kurutulması"],
                        ["Kurutma bölümü", "Yüksek sıcaklık", "Akülü eklemli", "Bölümün soğutulması"],
                        ["Arıtma tesisi", "Korozif buhar", "Akülü eklemli", "İş izni + havalandırma"],
                        ["Kimyasal depo", "Yanıcı/aşındırıcı madde", "Kompakt akülü", "İş izni + üretim durdurma"],
                        ["Mamul deposu", "Standart kuru ortam", "Akülü makaslı", "Koridor genişliği ölçüsü"],
                    ],
                },
            },
            {
                baslik: "Üretim durdurma penceresine göre planlama",
                paragraflar: [
                    "Deri işleme tesislerinde bazı hatlar süreç gereği kolayca durdurulamaz; bir işlem başladıysa tamamlanması gerekir. Bu, bakım planlamasını üretim takviminin içine yerleştirmeyi zorunlu kılar. Uygulamamız, tesisin bakım sorumlusuyla önce hangi hatların hangi gün durabildiğini konuşmak ve makine gününü o pencereye yazmaktır. Pencere kısa ve netse, işi o pencereye sığdıracak makine sınıfı seçilir — yükseklik yeterliyse hızlı konumlanan bir model, uzun kurulum isteyen bir alternatiften daha değerlidir.",
                    "Pencere dar olan tesislerde ikinci bir yöntem daha işe yarar: hazırlığı önceden yapmak. Makine sahaya pencere açılmadan gelir, konumlanacağı nokta hazırlanır, malzeme ve ekip yanında bekler; pencere açıldığı anda çalışma başlar ve süre boşa harcanmaz. Bu kurgu, kiralamanın birkaç saatini hazırlığa ayırmak demektir ama kaybedilen üretim saatiyle karşılaştırıldığında her zaman kârlıdır.",
                ],
            },
            {
                baslik: "İhtisas bölgesinde çalışmanın getirdiği tecrübe",
                paragraflar: [
                    "Tek sektöre odaklı bir organize sanayi bölgesinde çalışmanın kendine özgü bir kazanımı vardır: tesisler benzer altyapıya sahip olduğu için, bir tesiste öğrenilen çözüm diğerinde de işe yarar. Arıtma ünitesindeki bir bakım için hangi makine sınıfının uygun olduğu, ıslak hatta zemin hazırlığının nasıl yapıldığı, kurutma bölümünde çalışma süresinin nasıl bölündüğü — bunlar bölgede tekrar eden sorulardır ve cevapları zamanla standartlaşır.",
                    "Bu birikim müşteriye somut olarak yansır: telefonda konuşurken tesisin hangi bölümünde çalışılacağını söylemeniz, makine sınıfını ve ön koşulları belirlememiz için çoğu zaman yeterli olur. Keşif gerektiren durumlar elbette vardır ama rutin bakım işlerinde soru-cevap süresi kısalır ve planlama tek görüşmede biter. Bölgeye özgü bu birikim, ihtisas OSB'lerde çalışmanın en görünmez ama en işe yarar tarafıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Nemli üretim alanımızda platform kullanmak güvenli mi?",
                cevap:
                    "Doğru makine ve doğru hazırlıkla güvenlidir. Nemli ortamda üç şeye dikkat ederiz: makinenin akülü olması, tekerlek durumunun ıslak zeminde kavrama açısından uygun olması ve makinenin konumlanacağı zeminin mümkün olduğunca kurutulmuş olması. Bu üçüncü madde sizin tarafınızdaki hazırlıktır ve en önemlisidir — su birikintisi üzerine makine konumlandırmak, hem denge hem elektrik güvenliği açısından kabul edilmez. Çalışma öncesi zeminin çekilmesi çoğu tesiste birkaç dakikalık iştir ve bütün riski ortadan kaldırır. Tesisinizin kendi güvenlik prosedürü varsa, makineyi ona göre hazırlar ve gönderiririz.",
            },
            {
                soru: "Arıtma tesisimizdeki bakım için iş izni gerekiyor; süreci siz mi yürütüyorsunuz?",
                cevap:
                    "İş izni, tesisin kendi güvenlik yönetiminin verdiği bir belgedir; onu sizin süreciniz düzenler, biz sürecin gerektirdiği bilgileri ve belgeleri sağlarız — makine bilgileri, periyodik kontrol kaydı, operatör bilgisi gibi. Bizden istediğimiz tek şey, iznin ne kadar sürdüğünü baştan söylemenizdir; çünkü makine gününü ona göre yazarız. En sık yaşanan aksama, makinenin izin tamamlanmadan sahaya gelmesi ve kapıda beklemesidir. İzin süreciniz üç gün sürüyorsa teslimatı dördüncü güne planlarız ve iki taraf da boşa vakit kaybetmez.",
            },
            {
                soru: "Üretim hattımız durdurulamıyor; bakımı nasıl yaptırabiliriz?",
                cevap:
                    "İki yöntemden biriyle. Birincisi, hattın süreç gereği duracağı doğal pencereyi kullanmaktır — her tesiste vardiya değişimi, parti geçişi veya temizlik gibi kısa duruşlar olur ve bu pencereler bakım için kullanılabilir. İkincisi, hazırlığı pencere açılmadan tamamlamaktır: makine sahaya önceden gelir, konumlanacağı nokta hazırlanır, ekip ve malzeme hazır bekler; pencere açıldığı anda iş başlar. Bu kurgu kiralama süresini birkaç saat uzatır ama üretim kaybı yaratmaz. Hangi yöntemin uygun olduğunu, hattınızın çalışma düzenini anlattığınızda birlikte belirleriz.",
            },
            {
                soru: "OSB'ye giriş için önceden bildirim yapmamız gerekiyor mu?",
                cevap:
                    "Organize sanayi bölgelerinde araç girişi genellikle bölge yönetiminin düzenine tabidir ve önceden bildirim istenir. Bizden plaka, şoför bilgisi ve makine belgelerini alırsınız; bildirim ise tesis olarak sizin tarafınızdan yapılır çünkü kaydı içerideki firma açtırır. Bu adımı bir gün önceden tamamlamak, teslimat sabahı kapıda geçen süreyi tamamen ortadan kaldırır. İlk kiralamanızda süreci telefonda adım adım birlikte yürütürüz; sonraki kiralamalarda bu bir rutine dönüşür ve teslimat hiç bekleme yaşamadan tamamlanır.",
            },
            {
                soru: "Kimyasal ortamda çalışan makine sonradan sorun çıkarır mı?",
                cevap:
                    "Bu bizim tarafımızda çözülen bir konudur, size yansımaz. Nemli ve kimyasal buhar içeren ortamlarda çalışan makineler, döndüklerinde standart bakım programının dışında ek bir kontrolden geçer: dış yüzey temizliği, hareketli parçaların yağlanması ve elektrik bağlantı noktalarının gözden geçirilmesi. Bu disiplin olmadan filo hızla yıpranır ve bir sonraki müşteriye sorunlu makine gider. Sizin tarafınızda tek beklentimiz, çalışma sırasında makinenin gereksiz yere kimyasal sıçramasına maruz kalmamasıdır — çalışma alanının etrafındaki hatların o süre için kapatılması genellikle yeterlidir.",
            },
            {
                soru: "Kurutma bölümünde sıcaklık yüksek; çalışma süresi sınırlı mı?",
                cevap:
                    "Sıcak bölümlerde sınırlayıcı olan makine değil, çalışan kişidir. Kurutma alanlarında yüksekte çalışma, tavan altındaki sıcaklığın yerden hissedilenden belirgin olarak yüksek olması nedeniyle sürekli değil, aralıklı yapılır. Uygulamada bu, işin kısa periyotlara bölünmesi ve aralarda ekibin dinlenmesi anlamına gelir. Planlama açısından anlamı ise nettir: kurutma bölümündeki işler, aynı yükseklikteki bir depo işinden daha uzun sürer ve kiralama süresi buna göre hesaplanmalıdır. Mümkünse bölümün soğutulduğu bir pencerede çalışmak en verimli çözümdür; tesis takviminizde böyle bir pencere varsa işi oraya yazmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gerede'deki deri ihtisas organize sanayi bölgesinin varlığı ve deri işlemenin su-kimyasal yoğun üretim niteliği kamuya açık genel bilgidir; ortam koşuluna göre makine eşleştirmesi, üretim penceresi planlaması ve iş sonrası makine bakım disiplini firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:mengen": {
        h1: "Mengen'de Platform Kiralama: Orman Ürünleri ve Mutfak Tesisleri",
        giris:
            "Mengen, Bolu'nun kuzeyinde, orman örtüsünün yoğun olduğu bir ilçedir ve iki farklı kimlikle tanınır: aşçılık geleneği ve orman ürünlerine dayalı üretim. Bu iki kimlik, ilçedeki yüksekte çalışma ihtiyacını da birbirinden oldukça farklı iki kalemde toplar. Bir yanda kereste, tomruk ve ahşap işleme tesisleri vardır — açık stok sahaları, yükleme alanları, kurutma fırınları ve toz yüklü kapalı atölyeler. Diğer yanda mutfak ve yiyecek üretimiyle ilgili tesisler, eğitim mutfakları ve toplu yemek üretim alanları bulunur; buradaki işler davlumbaz hattı, aspirasyon kanalı ve yüksek tavan aydınlatması etrafında döner. İkisinin ortak paydası konumdur: Mengen, ana otoyol hattından ayrılıp kuzeye doğru ilerleyen bir güzergâhın sonundadır ve bu sapma mesafesi sevkiyat planlamasında hesaba katılır — özellikle kış aylarında, dağlık bölgede yol koşullarının merkezden farklı gelişebildiği unutulmaz. Bu sayfa, ilçenin iki üretim yüzünü ve her birinin makine ihtiyacını ayrı ayrı ele alır.",
        maddeler: [
            {
                baslik: "Kereste tesislerinde açık saha ve stok üstü çalışma",
                metin:
                    "Ahşap işleme tesislerinin dış sahaları, tomruk ve kereste stoklarıyla doludur; bu alanlardaki yüksekte çalışma genellikle vinç hattı bakımı, aydınlatma direği kontrolü veya sundurma çatısı onarımı için gerekir. Açık sahada zemin çoğunlukla sıkıştırılmış toprak veya stabilizedir ve yağış sonrası yumuşar. Bu koşulda paletli veya arazi tipi makine tercih edilir; denge ayaklı modellerde ayakların altına yük dağıtıcı plaka konulması standarttır. Islak ve yumuşak zeminde standart tekerlekli makaslı platform kullanılmaz.",
            },
            {
                baslik: "Kurutma fırını ve kazan dairelerinde bakım",
                metin:
                    "Ahşap kurutma üniteleri ile bunları besleyen kazan daireleri, ilçedeki tesislerin en sık bakım gerektiren yüksek noktalarıdır: baca hattı, havalandırma fanları, boru köprüleri ve sıcaklık ölçüm ekipmanları. Bu alanlarda çalışma, sıcaklığın düşmesini bekleyerek yapılır; sıcak yüzeylerin yanında platform konumlandırılmaz. Planlamada belirleyici olan, tesisin fırını hangi gün soğumaya bıraktığıdır — makine günü bu takvime yazılır ve iş, soğuma penceresine sığdırılır.",
            },
            {
                baslik: "Toplu yemek üretim alanlarında davlumbaz hattı",
                metin:
                    "Endüstriyel mutfaklarda ve toplu yemek üretim alanlarında en sık karşılaşılan yüksek nokta işi, davlumbaz ve aspirasyon kanalı temizliğidir. Kanal içindeki yağ birikintisi hem verimi düşürür hem yangın riski oluşturur; bu yüzden düzenli temizlik zorunludur. Kapalı ve hijyenik bir alanda çalışıldığı için makine akülü olmalı, tekerlekler zemine iz bırakmamalı ve makine sahaya girmeden temizlenmelidir. Çalışma, üretim dışı saatlere — genellikle akşam servisinden sonrasına veya erken sabaha — yazılır.",
            },
            {
                baslik: "Toz ortamında makine ve ekip koruması",
                metin:
                    "Ahşap işleme atölyelerinde havadaki ince toz, hem çalışan hem makine için bir koşuldur. Sepette çalışan ekibin uygun koruyucu kullanması tesisin sorumluluğundadır; bizim tarafımızdaki karşılığı, makinenin filtre ve soğutma bileşenlerinin işten sonra temizlenmesidir. Toz yoğun ortamlarda içten yanmalı makine kullanılmaz — hem emisyon hem kıvılcım riski nedeniyle. Çalışma öncesi aspirasyon sisteminin çalışır durumda olması, hem görüşü hem çalışma konforunu belirgin biçimde iyileştirir.",
            },
            {
                baslik: "Ana hattan sapma mesafesi ve kış planı",
                metin:
                    "Mengen'in konumu, sevkiyatta bir ek değişken yaratır: makine ana koridordan ayrıldıktan sonra dağlık bir güzergâhta ilerler ve bu bölümün koşulları kışın merkezden farklı olabilir. Kar yağışı bu kesimde daha erken başlayıp geç bitebilir. Bu yüzden ilçeye kış döneminde yapılan sevkiyatlarda hem geçiş hem ilçe yolu ayrı ayrı değerlendirilir ve teslim günü sabah teyit edilir. Yaz aylarında ise sapma mesafesi yalnızca süreye yansır, belirsizlik yaratmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mengen'de çalışma alanı, zemin ve makine eşlemesi",
                paragraflar: [
                    "İlçedeki işlerin büyük kısmı zemin koşuluna göre ayrışır; doğru makine sınıfı çoğu zaman yükseklikten önce zeminle belirlenir. Tablo bu eşleşmeyi özetler.",
                ],
                tablo: {
                    basliklar: ["Çalışma alanı", "Zemin durumu", "Uygun makine", "Ek önlem"],
                    satirlar: [
                        ["Tomruk / kereste stok sahası", "Stabilize, yağışta yumuşak", "Arazi tipi eklemli", "Ayak altına yük plakası"],
                        ["Ahşap işleme atölyesi", "Beton, tozlu", "Akülü makaslı", "Aspirasyon çalışır durumda"],
                        ["Kurutma fırını çevresi", "Beton, sıcak yüzey yakın", "Akülü eklemli", "Soğuma penceresi beklenir"],
                        ["Endüstriyel mutfak", "Kaygan, ıslak olabilir", "Kompakt akülü makaslı", "İz bırakmayan lastik"],
                        ["Sundurma / çatı onarımı", "Karışık", "Eklemli veya vinç", "Rüzgâr ve yağış kontrolü"],
                    ],
                },
            },
            {
                baslik: "Dağ turizmi tesislerinde sezon öncesi bakım",
                paragraflar: [
                    "Bolu'nun yüksek kesimlerindeki kayak ve doğa turizmi tesisleri, ilçe sınırlarından bağımsız olarak aynı takvimle çalışır: sezon açılmadan önce bütün yüksek nokta bakımlarının bitmiş olması gerekir. Aydınlatma direkleri, tesis cephesi, mekanik tesisat hatları, tabela ve çatı kar tutucuları — bunların hepsi kar başlamadan kontrol edilmelidir çünkü sezon açıldıktan sonra hem çalışma alanı misafirlerle dolar hem koşullar yüksekte çalışmayı sınırlar.",
                    "Bu tesislerde en verimli pencere sonbaharın ilk yarısıdır. Yola çıkmadan önce iki soruyu sorarız: makinenin tesise ulaşacağı yolun ağır araç için uygun olup olmadığı ve tesiste makinenin gece kalabileceği korunaklı bir alan bulunup bulunmadığı. Yüksek rakımlı tesislerde makineyi her akşam indirip sabah çıkarmak hem maliyetli hem gereksizdir; makine sezon bakımı boyunca sahada tutulur ve iş bittiğinde tek seferde alınır. Bu kurgu, dağ tesislerinde nakliye maliyetini en çok düşüren tercihtir.",
                ],
            },
            {
                baslik: "Kısa iş çok, makine günü az: Mengen için doğru kurgu",
                paragraflar: [
                    "Ana hattan sapma mesafesi olan ilçelerde nakliye, toplam maliyetin içinde merkeze göre daha büyük pay tutar. Bunun doğal sonucu şudur: Mengen'de tek bir kısa iş için makine getirtmek nadiren ekonomiktir. Bunun yerine tesisin ve mümkünse komşu işletmelerin bekleyen işlerini aynı makine gününe toplamak, birim maliyeti belirgin biçimde düşürür.",
                    "Pratikte bunu iki şekilde yaparız. Birincisi tesis içi toplama: aynı tesiste aydınlatma, kanal temizliği, çatı kontrolü gibi farklı işleri tek güne yazmak. İkincisi bölge içi toplama: aynı ilçede benzer tarihlerde makine bekleyen işletmeleri aynı sefere bağlamak. İkinci yöntem için tarihte esneklik gerekir; talebinizi verirken tarihinizin sabit mi esnek mi olduğunu söylemeniz, size hangi kurgunun sunulabileceğini doğrudan belirler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kereste stok sahamıza standart platform gelebilir mi?",
                cevap:
                    "Zeminin durumuna bağlı. Sıkıştırılmış ve kuru bir stabilize sahada bazı modeller çalışabilir, ancak yağış sonrası yumuşamış veya tekerlek izi tutan bir zeminde standart tekerlekli makaslı platform uygun değildir — hem hareket edemez hem denge açısından risklidir. Bu tür sahalarda arazi tipi eklemli platform tercih edilir; denge ayaklı modellerde ayakların altına yük dağıtıcı plaka konulması standarttır. Talebinizi alırken sahanızın zemin cinsini ve son günlerdeki hava durumunu sormamızın nedeni budur. Fotoğraf paylaşırsanız doğru sınıfı telefonda netleştirebiliriz.",
            },
            {
                soru: "Davlumbaz kanalı temizliği için makine ne kadar süre kalmalı?",
                cevap:
                    "Kanal hattının uzunluğuna ve mutfağın çalışma düzenine bağlıdır. Kısa bir davlumbaz hattı yarım günde bitebilirken, uzun kanal hattı olan toplu yemek üretim alanlarında iş bir güne veya iki güne yayılabilir. Süreyi asıl belirleyen, çalışmanın üretim dışı saatlere sıkışmasıdır: mutfak servis verirken çalışılamaz, bu yüzden iş akşam servisinden sonraya veya erken sabaha bölünür. Planlamada önerimiz, makineyi mutfağın kapalı olduğu bir güne — çoğu işletmede haftalık kapalı gün vardır — denk getirmektir; iş kesintisiz ilerler ve toplam kiralama süresi kısalır.",
            },
            {
                soru: "Kurutma fırınımızın bacasına çalışılacak; fırını durdurmalı mıyız?",
                cevap:
                    "Baca ve çevresindeki yüzeyler sıcakken çalışma yapılmaz; bu, tartışmaya açık bir konu değildir. Fırının durdurulup soğumaya bırakılması ve soğuma süresinin tamamlanması gerekir. Uygulamada bu, makine gününün tesisin kendi fırın takvimine yazılması demektir — çoğu tesis fırınları belirli aralıklarla zaten dinlendirir ve iş bu pencereye sığdırılabilir. Bize söylemeniz gereken tek şey, soğuma sonrası çalışmaya ne zaman başlanabileceğidir; makineyi o saate göre sahaya göndeririz ve boşa bekleme olmaz.",
            },
            {
                soru: "Dağdaki tesisimize makine çıkabilir mi?",
                cevap:
                    "Yolun ağır araç için uygun olması koşuluyla çıkar. Yüksek rakımlı tesislere sevkiyat planlarken iki şeyi sorarız: ulaşım yolunun genişliği ve eğimi ile tesiste makinenin gece kalabileceği korunaklı bir alanın bulunup bulunmadığı. İkincisi önemlidir çünkü dağ tesislerinde makineyi her gün indirip çıkarmak hem pahalı hem gereksizdir; makine bakım süresi boyunca sahada tutulur. Sezon öncesi bakımlarda önerimiz, bütün yüksek nokta işlerini tek bir makine dönemine toplamak ve bunu sonbaharın ilk yarısında planlamaktır — kar başladıktan sonra hem yol hem çalışma koşulları zorlaşır.",
            },
            {
                soru: "Tozlu atölyemizde çalışırken makine zarar görür mü?",
                cevap:
                    "Uygun makine seçilir ve iş sonrası bakımı yapılırsa görmez. Ahşap tozu, makinenin filtre ve soğutma bileşenlerinde birikir; bu yüzden bu ortamlardan dönen makineler ayrı bir temizlik kontrolünden geçer — bu bizim tarafımızdaki iştir ve size yansımaz. Sizin tarafınızda önemli olan iki şey vardır: çalışma sırasında aspirasyon sisteminin çalışır durumda olması ve kapalı alanda kesinlikle akülü makine kullanılması. İçten yanmalı makine tozlu ve kapalı bir atölyede hem emisyon hem kıvılcım açısından uygun değildir; bu tür alanlara zaten akülü model göndeririz.",
            },
            {
                soru: "İlçede tek bir kısa iş için makine getirtmek mantıklı mı?",
                cevap:
                    "Çoğu zaman değil ve bunu açıkça söyleriz. Ana hattan sapma mesafesi olan bir ilçede nakliye, kısa bir işin kendi bedelinden büyük olabilir. Daha doğru kurgu, bekleyen işleri tek makine gününe toplamaktır: aynı tesiste aydınlatma, kanal temizliği ve çatı kontrolü gibi kalemler bir arada bitirilebilir. Bir adım ilerisi, aynı ilçedeki başka işletmelerle aynı sefere bağlanmaktır; bunun için tarihinizde birkaç günlük esneklik gerekir. Talebinizi verirken hem iş listenizi hem tarih esnekliğinizi paylaşırsanız, size en ekonomik kurguyu doğrudan sunabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Mengen'in orman ürünlerine dayalı üretimi, aşçılık geleneğiyle tanınması ve Bolu'nun yüksek kesimlerindeki dağ turizmi tesislerinin sezon takvimi kamuya açık genel bilgidir; zemin-makine eşlemesi, soğuma penceresi planlaması ve iş toplama önerisi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:mudurnu": {
        h1: "Mudurnu'da Tavukçuluk ve Gıda Tesislerine Platform Kiralama",
        giris:
            "Mudurnu, Bolu'nun tarihi dokusuyla tanınan ilçesi olmasının yanında, kanatlı hayvancılık ve entegre gıda üretiminin bölgedeki merkezlerinden biridir. Bu üretim kolu, makine ihtiyacı açısından kendine özgü bir çerçeve çizer: kümes yapıları, yem üretim ve depolama üniteleri, kesimhane ve soğuk zincir tesisleri, hepsi farklı ortam koşullarına sahip ve hepsi biyogüvenlik kurallarıyla çevrili alanlardır. Bir kümes bölgesine makine göndermek, sadece platformu araca yükleyip yola çıkmak değildir — makinenin dezenfeksiyonu, giriş prosedürüne uyum ve çalışma sırasında hayvan sağlığını etkilememek planın parçasıdır. Yem siloları ve karma yem üniteleri ise yüksekte çalışmanın en tipik adresleridir: silo üstü ekipman, taşıma helezonları, filtre ve seviye sensörleri düzenli bakım ister. Bu sayfa, ilçedeki kanatlı ve gıda tesislerinin yüksek nokta ihtiyaçlarını, biyogüvenlik gerçeğini ve mevsimin bu tesislerdeki bakım takvimine etkisini anlatır.",
        maddeler: [
            {
                baslik: "Yem silolarında üst ekipman bakımı",
                metin:
                    "Karma yem üretim ve depolama üniteleri, ilçedeki en yüksek çalışma noktalarını barındırır: silo üstü kapaklar, seviye sensörleri, filtre üniteleri, taşıma helezonları ve merdiven-korkuluk sistemleri. Bu noktalara sabit merdivenle erişim mümkün olsa da bakım ve montaj işleri için platform çok daha güvenlidir. Silo çevresinde çalışırken belirleyici olan zeminin sağlamlığı ve rüzgârdır; yüksek noktada rüzgâr hızı yerden hissedilenin üzerine çıkabilir ve makinenin çalışma sınırı aşılmamalıdır.",
            },
            {
                baslik: "Kümes yapılarında havalandırma ve aydınlatma hattı",
                metin:
                    "Modern kümes yapıları havalandırma fanları, ısıtma üniteleri, aydınlatma hatları ve besleme sistemleriyle donatılmıştır ve bu ekipmanların bakımı çatı altı seviyesinde yapılır. Yapı içi genişlik genellikle uygun olsa da tavan yüksekliği ölçülüdür; bu nedenle kompakt ve düşük kapatma yüksekliğine sahip makaslı modeller tercih edilir. Kapalı alanda içten yanmalı makine kullanılmaz. Çalışmanın hayvan bulunmayan dönemde — üretim döngüleri arasındaki boşlukta — yapılması hem hayvan sağlığı hem çalışma rahatlığı açısından tercih edilir.",
            },
            {
                baslik: "Biyogüvenlik: makinenin sahaya girişi",
                metin:
                    "Kanatlı üretim tesislerinde biyogüvenlik, tesisin en katı kural setidir ve dışarıdan gelen her araç bu kuralların içinden geçer. Makine sevkiyatında bu, aracın ve makinenin giriş öncesi dezenfeksiyonu, giriş kaydı ve belirlenen güzergâh dışına çıkılmaması anlamına gelir. Bizim yaklaşımımız, bu adımları teslimat gününün sürprizi değil planın maddesi saymaktır: tesisin prosedürü sipariş aşamasında sorulur, makine ona göre hazırlanır ve şoför ne yapacağını bilerek gelir.",
            },
            {
                baslik: "Kesimhane ve soğuk zincirde ıslak-soğuk ortam",
                metin:
                    "Entegre gıda tesislerinin işleme ve soğuk depolama bölümleri, platform açısından iki zorluk barındırır: zemin sürekli ıslak ve yıkanmış durumdadır, soğuk hava depolarında ise sıcaklık makinenin akü performansını etkiler. Islak zeminde iz bırakmayan ve kavraması iyi lastikli akülü modeller kullanılır; soğuk depoda ise uzun çalışma günlerinde şarj planı önceden konuşulur. Hijyen alanına giren makinenin dış temizliği kapıda yapılır ve tesisin kendi prosedürü varsa ona uyulur.",
            },
            {
                baslik: "Üretim döngüsüne göre bakım takvimi",
                metin:
                    "Kanatlı üretiminde tesisler döngüsel çalışır ve döngüler arasında temizlik-dezenfeksiyon için boş dönemler oluşur. Yüksekte yapılacak bütün bakım işleri için en doğru pencere tam olarak bu boş dönemdir: yapı içinde hayvan yoktur, biyogüvenlik kısıtları daha yönetilebilirdir ve çalışma serbestçe yapılabilir. Bu pencere kısadır ve önceden bellidir; bu yüzden ilçedeki tesislerle çalışırken makine planlaması, tesisin kendi döngü takvimine göre haftalar öncesinden yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda ve kanatlı tesislerinde alan, koşul ve makine",
                paragraflar: [
                    "İlçedeki tesislerin bölümleri birbirinden çok farklı ortamlar sunar; makine tercihi bu farka göre yapılır. Tablo, sahada uyguladığımız eşleşmeyi gösterir.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Ortam koşulu", "Makine tercihi", "Zorunlu adım"],
                    satirlar: [
                        ["Yem silosu çevresi", "Açık alan, rüzgâr", "Arazi tipi eklemli", "Rüzgâr hızı kontrolü"],
                        ["Kümes içi", "Kapalı, ölçülü tavan", "Kompakt akülü makaslı", "Biyogüvenlik dezenfeksiyonu"],
                        ["Karma yem ünitesi", "Tozlu kapalı alan", "Akülü makaslı", "Aspirasyon çalışır durumda"],
                        ["Kesimhane / işleme", "Islak, hijyenik", "Akülü, iz bırakmayan lastik", "Giriş öncesi temizlik"],
                        ["Soğuk hava deposu", "Düşük sıcaklık", "Akülü makaslı", "Şarj planı önceden"],
                    ],
                },
            },
            {
                baslik: "Boş dönem penceresi: haftalar öncesinden planlama",
                paragraflar: [
                    "Kanatlı tesislerinde yüksekte çalışmanın doğru zamanı, üretim döngüleri arasındaki boş dönemdir ve bu pencere hem kısa hem sabittir. Tesis bu dönemde temizlik ve dezenfeksiyon yapar; yüksekte bakım işleri de aynı program içine yerleştirildiğinde ayrı bir kesinti yaratmaz. Ancak pencere kısa olduğu için makine gününü son ana bırakmak risklidir — pencere kapandığında iş bir sonraki döngüye, yani haftalar sonrasına kalır.",
                    "Bu yüzden ilçedeki tesislerle çalışma biçimimiz farklıdır: takvim, döngü planınız üzerinden haftalar öncesinden kurulur ve makine o güne rezerve edilir. Bu ön planlama iki tarafa da fayda sağlar; siz makinenin doğru günde geleceğinden emin olursunuz, biz de seferi bölgedeki diğer işlerle birlikte planlayabildiğimiz için daha uygun bir nakliye kurgusu sunabiliriz. Kısa pencereli tesislerde planlama, makine seçiminden daha kritik bir konudur.",
                ],
            },
            {
                baslik: "Göl çevresi konaklama tesislerinde sezon bakımı",
                paragraflar: [
                    "İlçenin çevresindeki göl ve doğa turizmi bölgesi, kendi bakım takvimine sahip bir başka müşteri grubudur: konaklama tesisleri, restoranlar ve günübirlik işletmeler. Bu tesislerde yüksekte çalışma ihtiyacı ahşap cephe bakımı, çatı ve saçak onarımı, dış aydınlatma yenileme ve tabela işlerinde yoğunlaşır. Yapıların önemli kısmının ahşap ağırlıklı olması, bakımı ertelenemez kılar — ahşap cephe düzenli kontrol edilmezse yıllık zarar hızla büyür.",
                    "Bu tesislerde en verimli iki pencere vardır: yaz sezonu açılmadan önceki bahar dönemi ve sezon kapandıktan sonraki sonbahar. Kışın çalışmak hem yüksek rakımlı bu bölgede zordur hem tesislerin çoğu kapalıdır. Sevkiyat açısından dikkat edilecek nokta, göl çevresindeki bazı yolların ağır araç için dar olabilmesidir; makine sınıfı seçilirken yükseklik kadar erişim de hesaba katılır ve gerekirse daha kompakt bir modelle çözüm üretilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kümesimize makine sokmak biyogüvenlik açısından sorun yaratır mı?",
                cevap:
                    "Prosedüre uyulduğunda yaratmaz; zaten bu tesislerde çalışmanın temel koşulu prosedürdür. Sipariş aşamasında tesisinizin biyogüvenlik kurallarını sorarız: araç ve makine için dezenfeksiyon gereklilikleri, giriş kaydı, izin verilen güzergâh ve personel için istenen koruyucu ekipman. Makineyi bu kurallara göre hazırlar, şoförü bilgilendirir ve sahaya öyle göndeririz. En doğru kurgu, çalışmanın hayvan bulunmayan boş dönemde yapılmasıdır — bu hem hayvan sağlığı hem çalışma verimi açısından belirgin biçimde daha iyidir. Döngü takviminizi paylaşırsanız makine gününü o pencereye yazarız.",
            },
            {
                soru: "Yem silosu üstündeki ekipmana platformla çalışılabilir mi?",
                cevap:
                    "Çalışılabilir ve çoğu durumda sabit merdivenden daha güvenlidir; eklemli platform, sepeti silo gövdesinin yanından üst kotta konumlandırabilir. Dikkat edilecek iki nokta vardır. Birincisi zemindir: makine silonun yanında sağlam ve düz bir alana konumlanmalı, denge ayaklı modellerde ayak altına yük dağıtıcı plaka konulmalıdır. İkincisi rüzgârdır — silo üst kotunda rüzgâr hızı yerde hissedilenin üzerine çıkabilir ve makinenin çalışma sınırı aşılmamalıdır. Bu nedenle silo işlerini rüzgârlı günlere yazmamak, planlamanın standart parçasıdır.",
            },
            {
                soru: "Soğuk hava deposunda akülü makine yeterli olur mu?",
                cevap:
                    "Olur ama çalışma planını buna göre yapmak gerekir. Düşük sıcaklık akü performansını düşürür; yaz koşullarında bir şarjla biten bir iş, soğuk depoda daha kısa sürede şarj ihtiyacı doğurabilir. Bunun çözümü basittir: çalışma günü içinde makinenin depo dışında şarj olabileceği bir aralık planlamak veya işi iki periyoda bölmek. Teslim sırasında bu planı sahada birlikte kurarız. İkinci konu zemindir — soğuk depo zeminleri yıkanmış ve kaygan olabilir; iz bırakmayan ve kavraması iyi lastikli modeller tercih edilir. Bu iki hazırlıkla soğuk depo çalışması sorunsuz ilerler.",
            },
            {
                soru: "Bakım için makineyi ne kadar önceden ayırtmalıyız?",
                cevap:
                    "Kanatlı tesislerinde önerimiz, döngü takviminiz netleştiği anda makineyi rezerve etmenizdir — bu çoğu zaman haftalar öncesi demektir. Nedeni pencerenin kısalığıdır: boş dönem birkaç gün sürer ve o pencere kapandığında iş bir sonraki döngüye kalır, yani haftalarca ertelenir. Erken rezervasyonun ikinci faydası maliyettir; sefer bölgedeki diğer işlerle birlikte planlanabildiğinde nakliye kurgusu daha uygun olur. Standart gıda ve depo işlerinde ise bu kadar erken planlama gerekmez, birkaç günlük ön bildirim çoğu zaman yeterlidir.",
            },
            {
                soru: "Kümes tavanı alçak; makine içeri sığar mı?",
                cevap:
                    "Bu, kümes çalışmalarında en sık sorulan sorudur ve cevabı makinenin kapatma yüksekliğiyle ilgilidir. Kümes yapılarında genişlik genellikle sorun olmaz ama tavan ölçülüdür; bu yüzden kapatıldığında düşük yükseklikte kalan kompakt makaslı modeller tercih edilir. Sizden istediğimiz ölçü ikilidir: giriş kapısının net yüksekliği ve çalışılacak noktanın yerden yüksekliği. Bu iki sayıyla makinenin hem kapıdan geçip geçmeyeceğini hem çalışma noktasına ulaşıp ulaşmayacağını kesin olarak söyleyebiliriz. Ölçüyü teslim gününden önce konuşmak, kapıda kalan bir makineden çok daha kolaydır.",
            },
            {
                soru: "Göl çevresindeki tesisimizin ahşap cephesi için hangi dönem uygun?",
                cevap:
                    "İki pencere önerilir: sezon açılmadan önceki bahar dönemi ve sezon kapandıktan sonraki sonbahar. Kışın bu bölgede hem çalışma koşulları zorlaşır hem tesislerin çoğu kapalı olduğu için bakım koordinasyonu güçleşir. Yaz ortasında ise tesis dolu olduğundan çalışma alanını güvenle kapatmak mümkün olmaz. Sevkiyat tarafında dikkat ettiğimiz konu ulaşım yoludur — göl çevresindeki bazı yollar ağır araç için dar olabilir; makine sınıfını seçerken yükseklik kadar erişimi de hesaba katarız ve gerekirse daha kompakt bir modelle aynı işi çözeriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Mudurnu'nun kanatlı hayvancılık ve entegre gıda üretimindeki yeri, kanatlı tesislerinde biyogüvenlik uygulamalarının varlığı ve bölgedeki göl-doğa turizmi kamuya açık genel bilgidir; döngü penceresine göre planlama, ortam-makine eşlemesi ve şarj planı düzeni firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:duzce-osb-cevre-ili": {
        h1: "Düzce OSB ve Çevresine Bolu Hattından Platform Sevkiyatı",
        giris:
            "Düzce, Bolu'nun batı komşusu ve aynı otoyol koridorunun bir sonraki durağıdır; bu yüzden iki ilin sanayi bölgeleri arasında makine hareketi doğal bir akış üzerinde ilerler. Düzce'nin organize sanayi dokusu Bolu'dan farklı bir profil taşır: otomotiv yan sanayi, metal işleme, plastik ve kauçuk üretimi ile makine imalatı ağırlıklıdır. Bu tesislerin yüksekte çalışma ihtiyacı da buna göre şekillenir — köprü vinç rayları, pres ve enjeksiyon makinelerinin üst bakımı, çatı altı aydınlatma, aspirasyon ve basınçlı hava hatları. Bolu tarafından bakıldığında Düzce'ye sevkiyatın en belirgin avantajı, dağ geçişinin bu yönde devrede olmamasıdır; batıya doğru giden hat, kış aylarında doğu yönüne göre daha az kısıt üretir. Bu sayfa, Düzce ve çevresindeki sanayi tesislerine Bolu hattından yapılan makine sevkiyatının nasıl kurulduğunu, tesis tiplerine göre makine seçimini ve iki il arasındaki lojistik ilişkiyi anlatır.",
        maddeler: [
            {
                baslik: "Metal işleme tesislerinde köprü vinç ve çatı altı işleri",
                metin:
                    "Metal ve makine imalatı yapan tesislerin ortak yüksek nokta ihtiyacı köprü vinç hattıdır: ray hizası kontrolü, kedi arabası bakımı, besleme hattı ve tampon kontrolleri. Bu işler üretim durdurulmadan yapılamaz çünkü vincin kendisi devre dışı bırakılır. Platform seçiminde belirleyici olan, sepetin ray hizasına yandan yaklaşabilmesidir — bu nedenle eklemli modeller makaslı modellere göre çoğu zaman daha uygundur. Zemin genellikle sağlam betondur ve makine konumlandırması sorun çıkarmaz; asıl planlama konusu, vincin durdurulabileceği zaman aralığıdır.",
            },
            {
                baslik: "Plastik ve kauçuk üretiminde ısı ve koku faktörü",
                metin:
                    "Enjeksiyon ve ekstrüzyon hatlarının bulunduğu üretim alanlarında ortam sıcaklığı ve proses kaynaklı koku, çalışma konforunu doğrudan etkiler. Bu alanlarda yüksekte çalışma çoğunlukla havalandırma hattı, aspirasyon kanalı ve aydınlatma bakımı için gerekir. Kapalı alan olduğu için akülü makine kullanılır; makinenin konumlanacağı noktanın sıcak yüzeylerden ve hareketli hatlardan yeterince uzak olması aranır. Sıcak bölümlerde çalışma süresi ekibin dayanma süresine göre bölünür ve kiralama süresi buna göre hesaplanır.",
            },
            {
                baslik: "Otomotiv yan sanayide dar hat aralıkları",
                metin:
                    "Otomotiv yan sanayi tesislerinde üretim hatları birbirine yakın konumlandırılır ve hat araları dar olabilir. Bu, makine seçiminde yüksekliği ikinci plana atıp gövde ölçüsünü öne çıkarır: hat arasına girebilen kompakt bir makine, giremeyecek kadar büyük bir modelin sağlayacağı ekstra yükseklikten daha değerlidir. Uygulamamız, sipariş aşamasında hat aralığı ve makine geçiş güzergâhı ölçüsünü sormaktır. Bu ölçü alınmadan gönderilen makine, tesise varır ama çalışma noktasına ulaşamaz.",
            },
            {
                baslik: "İki il arası sevkiyatın günlük ritmi",
                metin:
                    "Bolu ile Düzce arasındaki mesafe, aynı gün içinde gidiş-dönüş yapmayı mümkün kılar ve bu, sevkiyat planlamasında somut esneklik yaratır: sabah bir tesise makine bırakan araç, öğleden sonra başka bir tesisten biten makineyi alarak dönebilir. Bu ritim, standart sınıf makinelerde teslim süresini kısaltır. Ağır sınıf ekipmanda ise organizasyon ayrı planlanır. Talebinizi alırken makine sınıfını ve tarih esnekliğinizi sormamızın nedeni, sizi bu günlük ritme bağlayabilmek ve nakliye maliyetini paylaştırabilmektir.",
            },
            {
                baslik: "Kış koşullarının batı yönünde daha sınırlı etkisi",
                metin:
                    "Bolu'dan batıya, yani Düzce yönüne yapılan sevkiyatlarda dağ geçişinin kış kısıtları devreye girmez; bu, kasım-mart döneminde belirgin bir planlama avantajıdır. Yine de bölgenin kendi iklimi göz ardı edilmez — yoğun yağış ve sis günleri ağır araç hızını etkiler ve saha içindeki dış alan çalışmalarını sınırlayabilir. Kış planlamasında uygulamamız, iç mekân işlerinde standart randevu düzenini sürdürmek, dış saha işlerinde ise hava penceresine göre esnek gün bırakmaktır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Düzce sanayisinde tesis tipi ve makine eşlemesi",
                paragraflar: [
                    "Bölgedeki sanayi profili, makine seçiminde tekrar eden bir örüntü oluşturur. Tablo, en sık kurduğumuz eşleşmeyi ve planlamada belirleyici olan koşulu gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Tipik iş", "Makine tercihi", "Planlamayı belirleyen"],
                    satirlar: [
                        ["Metal işleme / makine imalatı", "Köprü vinç rayı bakımı", "Akülü eklemli", "Vincin durdurulabildiği aralık"],
                        ["Otomotiv yan sanayi", "Hat üstü ekipman bakımı", "Kompakt akülü makaslı", "Hat arası genişliği"],
                        ["Plastik / kauçuk üretimi", "Havalandırma ve aspirasyon", "Akülü eklemli", "Ortam sıcaklığı"],
                        ["Depo ve lojistik yapısı", "Raf ve aydınlatma", "Akülü makaslı 12-16 m", "Koridor ölçüsü"],
                        ["Dış saha ve cephe", "Cephe, tabela, çatı", "Dizel eklemli", "Hava penceresi"],
                    ],
                },
            },
            {
                baslik: "Vinç durdurma planı: üretimi en az etkileyen kurgu",
                paragraflar: [
                    "Köprü vinç bakımı, metal işleme tesislerinde üretimi en doğrudan etkileyen yüksekte çalışma kalemidir; çünkü vinç durduğunda malzeme akışı da durur. Bu yüzden planlamayı işin süresinden değil, vincin durabileceği aralıktan başlatırız. Tesisin birden fazla vinci varsa iş sırayla yapılır ve her seferinde yalnızca biri devre dışı kalır; tek vinçli tesislerde ise bakım, üretimin doğal olarak durduğu vardiya dışı saatlere veya haftalık kapanış gününe yazılır.",
                    "Bu kurgunun pratikteki karşılığı, makinenin sahada bulunma süresinin işin süresinden uzun olabilmesidir. Vinç sadece belirli saatlerde durabiliyorsa makine o saatleri beklemek zorundadır. Böyle durumlarda kiralamayı günlük değil, çok günlü planlamak hem daha ucuz hem daha rahat olur; makine sahada kalır, her gün ayrılan pencerede çalışılır ve üretim hiç kesilmez.",
                ],
            },
            {
                baslik: "Komşu il avantajı: aynı gün gidiş-dönüş",
                paragraflar: [
                    "Bolu ile Düzce arasındaki yakınlık, makine kiralamada çoğu zaman fark edilmeyen bir esneklik sağlar: iki il aynı sefer planına sığar. Bunun en somut faydası acil taleplerde görülür — arıza kaynaklı bir ihtiyaç bildirildiğinde, bölgeye zaten çıkmış bir aracın güzergâhına eklenmek çoğu zaman mümkündür ve bekleme süresi belirgin biçimde kısalır.",
                    "İkinci fayda iade tarafındadır. Biten bir kiralamada makinenin alınması için özel sefer düzenlemek yerine, komşu ile giden bir aracın dönüşüne bağlamak hem hızlı hem ekonomiktir. Bunun için tek gereken, iade tarihini son güne bırakmamanızdır; birkaç gün önceden bildirilen iade, mevcut seferlerle eşleşme şansı bulur. Son dakika iadeleri de alırız ama o alım için ayrı araç planlanır ve fark hesaba yansır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Düzce'deki tesisimize Bolu'dan makine gelmesi süreyi uzatır mı?",
                cevap:
                    "Kayda değer biçimde uzatmaz; iki il aynı koridor üzerinde ve aynı sefer planı içinde değerlendirilir. Standart sınıf makinelerde aynı gün gidiş-dönüş mümkündür, bu da teslim ve iade esnekliğini artırır. Sürenin uzayabileceği tek durum ağır sınıf ekipman taleplerdir; bunlar özel araç ve organizasyon gerektirdiği için tarihleri ayrı planlanır. Kış aylarında ise bu yön avantajlıdır — dağ geçişinin kış kısıtları batı yönündeki sevkiyatlarda devreye girmez. Talebinizi alırken makine sınıfını sormamızın nedeni, size gerçekçi bir gün verebilmektir.",
            },
            {
                soru: "Köprü vinç bakımı için üretimi kaç saat durdurmamız gerekir?",
                cevap:
                    "Bu, işin kapsamına ve vinç sayınıza bağlıdır ama planı üretimden değil, vincin durabileceği aralıktan kurmak gerekir. Birden fazla vinciniz varsa iş sırayla yapılır ve her seferinde yalnızca biri devre dışı kalır; üretim yavaşlar ama durmaz. Tek vinçli tesislerde ise bakımı vardiya dışı saatlere veya haftalık kapanış gününe yazmak en temiz çözümdür. Bu durumda makine sahada işin süresinden daha uzun kalır çünkü çalışma penceresini bekler; kiralamayı çok günlü planlamak bu senaryoda hem daha ucuz hem daha rahattır.",
            },
            {
                soru: "Üretim hatlarımızın arası dar; makine geçebilir mi?",
                cevap:
                    "Ölçüyü karşılaştırmadan söyleyemeyiz ama çözüm hemen her zaman vardır. Sizden istediğimiz iki bilgi, makinenin geçeceği en dar noktanın net genişliği ve çalışma noktasının yerden yüksekliğidir. Dar hat araları için üretilmiş kompakt makaslı modeller yaklaşık bir metre bandındaki gövde genişlikleriyle çoğu hattan geçer. Geçemiyorsa alternatif, makinenin hattın dışından uzun bomlu bir eklemli modelle çalışma noktasına yandan ulaşmasıdır. Bu ölçü konuşmasını sipariş aşamasında yapmak, tesise varmış ama çalışma noktasına ulaşamayan bir makineden çok daha ucuzdur.",
            },
            {
                soru: "Sıcak üretim alanımızda çalışma süresi nasıl hesaplanıyor?",
                cevap:
                    "Sınırlayıcı olan makine değil, sepette çalışan ekiptir. Enjeksiyon ve ekstrüzyon hatlarının bulunduğu alanlarda tavan altı sıcaklığı yerden hissedilenin belirgin üzerindedir; bu yüzden çalışma sürekli değil, periyotlar hâlinde yapılır ve aralarda dinlenme verilir. Planlama açısından anlamı şudur: sıcak bölümdeki bir iş, aynı yükseklikteki normal bir depo işinden uzun sürer ve kiralama süresi buna göre hesaplanmalıdır. Mümkünse hattın durduğu ve bölümün soğuduğu bir pencerede çalışmak en verimli çözümdür; üretim takviminizde böyle bir aralık varsa işi oraya yazmanızı öneririz.",
            },
            {
                soru: "Acil arıza durumunda ne kadar sürede makine gönderebilirsiniz?",
                cevap:
                    "Düzce, komşu il olması nedeniyle acil taleplerde avantajlı bir adrestir: bölgeye zaten çıkmış bir aracın güzergâhına eklenmek çoğu zaman mümkündür ve bekleme kısalır. Size verdiğimiz cevap her zaman o günün gerçek durumuna dayanır — hangi araç nerede, hangi makine müsait ve sizin ihtiyacınız hangi sınıf. Standart sınıf bir platform için aynı gün çözüm çoğu durumda üretilebilir; ağır ve özel ekipmanda ise hazırlık süresi gerekir ve bunu açıkça söyleriz. Acil talep verirken çalışma yüksekliğini ve erişim koşulunu ilk mesajda paylaşmanız, sürecin en hızlı tarafıdır.",
            },
            {
                soru: "Kiralamamız bitti; makineyi ne zaman aldırmalıyız?",
                cevap:
                    "İade tarihini son güne bırakmamanızı öneririz. İki il arasındaki günlük araç hareketi sayesinde, birkaç gün önceden bildirilen bir iade mevcut bir sefere bağlanabilir ve hem hızlı hem ekonomik olur. Son dakika bildirilen iadelerde ise alım için ayrı araç planlamak gerekebilir ve bu fark hesaba yansır. Uygulamamız, iade gününden bir gün önce sizi arayıp teyit etmektir; kiralamayı uzatmak isterseniz o görüşmede söylemeniz yeterlidir, randevu ileri alınır ve kiralama kesintisiz devam eder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Düzce'nin Bolu'ya komşu konumu, otoyol koridoru üzerindeki yeri ve organize sanayi bölgesindeki metal-otomotiv yan sanayi-plastik ağırlıklı üretim profili kamuya açık genel bilgidir; vinç durdurma planı, hat aralığı ölçü kontrolü ve iki il arası sefer eşleştirmesi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "bolge:kizilcahamam-ankara-cevre-ili": {
        h1: "Kızılcahamam ve Ankara Kuzey Hattına Platform Kiralama",
        giris:
            "Kızılcahamam, Ankara'nın kuzeyinde, Bolu istikametine uzanan hat üzerindeki en tanınmış duraktır ve iki özelliğiyle bizim çalışma alanımıza girer: termal konaklama tesislerinin yoğunluğu ve orman-doğa turizmine dayalı işletme dokusu. Bolu tarafından bakıldığında bu bölge, dağ geçişinin doğu yakasında kalır; yani Ankara yönüne yapılan sevkiyatlarda geçişin kış koşulları planlamanın içine girer. Bölgedeki yüksekte çalışma ihtiyacı, sanayi tesislerinden çok konaklama ve hizmet yapılarından doğar: otel cepheleri, geniş lobi ve havuz alanlarının tavan aydınlatması, termal tesisat hatları, çatı ve saçak onarımları, tabela ve dış aydınlatma. Bu yapıların ortak özelliği, bakımın sezon dışına yazılmak zorunda olmasıdır — misafir dolu bir tesiste yüksekte çalışma hem güvenlik hem konfor açısından kabul edilmez. Bu sayfa, bölgedeki tesis tiplerini, sezon takvimine göre bakım planlamasını ve Ankara kuzey hattındaki sevkiyat düzenini anlatır.",
        maddeler: [
            {
                baslik: "Otel lobi ve havuz alanlarında yüksek tavan işleri",
                metin:
                    "Termal ve konaklama tesislerinin lobi, havuz ve toplantı salonu gibi geniş açıklıklı alanları, yüksek tavanlı yapılardır ve aydınlatma armatürleri, avize, havalandırma menfezleri ile ses sistemi ekipmanları bu yükseklikte bakım ister. Bu alanlarda kritik olan zemin korumasıdır: mermer, seramik veya ahşap kaplı zeminlerde iz bırakmayan lastikli makine kullanılır ve gerekirse makinenin geçeceği güzergâha koruyucu serilir. Havuz çevresinde çalışırken zeminin ıslak olabileceği ve elektrik güvenliğinin öncelikli olduğu unutulmaz.",
            },
            {
                baslik: "Termal tesisat hatlarında yüksek nokta bakımı",
                metin:
                    "Termal su kullanan tesislerde boru hatları, ısı değiştirici bağlantıları ve havalandırma sistemleri, mineral birikimi nedeniyle standart tesisata göre daha sık kontrol gerektirir. Bu hatların bir bölümü teknik hacimlerin tavanında veya dış cephede ilerler ve bakımı yüksekte çalışma gerektirir. Teknik hacimlerde çalışma alanı dar olabileceğinden kompakt makine tercih edilir; kapalı alanda akülü model kullanılır. Çalışma öncesi hattın basıncının alınması ve sıcak yüzeylerin soğuması beklenir.",
            },
            {
                baslik: "Ahşap ve doğal malzemeli cephelerde bakım",
                metin:
                    "Bölgedeki tesislerin önemli bölümü, orman dokusuna uyumlu ahşap ve doğal taş ağırlıklı cephelerle inşa edilmiştir. Ahşap cephe, düzenli koruyucu uygulama olmadan hızlı yıpranır; bu yüzden bölgedeki en tekrar eden yüksekte çalışma kalemlerinden biri cephe bakımıdır. Çalışma dış alanda yapıldığı için hava penceresi belirleyicidir ve rüzgâr, makinenin çalışma sınırı açısından takip edilir. Zemin çoğunlukla peyzaj alanı olduğundan makine konumlandırmasında yük dağıtımı ve peyzaja zarar vermeme birlikte gözetilir.",
            },
            {
                baslik: "Sezon dışı bakım penceresi",
                metin:
                    "Konaklama ağırlıklı bir bölgede yüksekte çalışmanın doğru zamanı, doluluğun düştüğü dönemdir. Termal tesisler kışın da çalıştığı için bu bölgede pencere, klasik yaz turizminden farklıdır: hafta içi günler ve tatil dönemleri arasındaki geçiş haftaları en uygun aralıktır. Uygulamamız, tesisin rezervasyon takvimi üzerinden çalışmaktır — makine günü doluluğun en düşük olduğu güne yazılır ve çalışma alanı misafir kullanımından tamamen ayrılır. Bu ayrım yapılamıyorsa iş, ayrılabileceği bir güne ertelenir.",
            },
            {
                baslik: "Ankara kuzey hattında sevkiyat düzeni",
                metin:
                    "Bölgeye makine sevkiyatı, Bolu tarafından bakıldığında dağ geçişini içeren bir güzergâh üzerinden planlanır; bu, kış aylarında teslim gününün sabah teyit edilmesi anlamına gelir. Yaz ve bahar aylarında ise sevkiyat standart düzende ilerler. Bölgedeki tesisler birbirine yakın konumlandığı için çoklu durak planı burada da işler: aynı hatta birden fazla tesise makine bırakan bir sefer, tek tesise özel sefer yapmaktan belirgin biçimde ekonomiktir. Tarihte esneklik, doğrudan maliyet avantajına dönüşür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bölgedeki yapı tipleri ve bakım penceresi",
                paragraflar: [
                    "Konaklama ağırlıklı bir bölgede bakım planlaması, yapı tipinden çok kullanım yoğunluğuna göre kurulur. Tablo, bölgede uyguladığımız eşleşmeyi gösterir.",
                ],
                tablo: {
                    basliklar: ["Yapı / alan", "Tipik iş", "Uygun pencere", "Makine tercihi"],
                    satirlar: [
                        ["Otel lobisi ve salonlar", "Aydınlatma, menfez, avize", "Doluluk düşük hafta içi", "Akülü makaslı, iz bırakmayan lastik"],
                        ["Havuz ve termal alan", "Tavan ve tesisat bakımı", "Alan kapatılabilen gün", "Kompakt akülü"],
                        ["Ahşap dış cephe", "Koruyucu uygulama, onarım", "Bahar ve erken sonbahar", "Eklemli platform"],
                        ["Teknik hacim", "Boru hattı, ısı ekipmanı", "Yıl boyu", "Kompakt akülü makaslı"],
                        ["Dış aydınlatma ve tabela", "Armatür, direk, tabela", "Kar öncesi sonbahar", "Eklemli / dizel"],
                    ],
                },
            },
            {
                baslik: "Misafirli tesiste çalışma: ayırma ve saat düzeni",
                paragraflar: [
                    "Konaklama tesislerinde bakımın en zor tarafı teknik değil, koordinasyondur: çalışma alanının misafir kullanımından fiziksel olarak ayrılması gerekir. Uyguladığımız düzen nettir — çalışma bölgesi bariyerle çevrilir, geçiş güzergâhı işaretlenir ve makine hiçbir koşulda misafir geçiş hattı üzerinde bırakılmaz. Gürültü üreten işlerde saat seçimi ayrıca konuşulur; sabahın çok erken saatleri konaklama tesislerinde uygun değildir, geç sabah ve öğle sonrası genellikle daha doğrudur.",
                    "İkinci konu makinenin gece nerede kalacağıdır. Birkaç güne yayılan bakımlarda makineyi her gün sahadan çıkarmak ekonomik değildir; tesis içinde misafir erişimine kapalı, korunaklı bir alan belirlenir ve makine akşamları oraya alınır. Bu alanın teslim öncesi kararlaştırılması, sahada geçen zamanı belirgin biçimde azaltır. Tesis yönetimiyle bu iki konuyu — çalışma alanı ayrımı ve gece bırakma noktası — sipariş aşamasında netleştirmeyi standart hâline getirdik.",
                ],
            },
            {
                baslik: "Geçişin doğu yakası: kış planlamasının farkı",
                paragraflar: [
                    "Bu bölge, Bolu tarafından bakıldığında dağ geçişinin doğu yakasında kalır ve kış döneminde sevkiyat planlaması buna göre kurulur. Kasım-mart arasında teslim günü verilir, saat ise teslim sabahı güncel yol durumuyla teyit edilir. Bu yaklaşım tesis yönetimi açısından da rahatlatıcıdır: sahada bekleyen bir ekip, aracın gerçek durumunu bilir ve kendi programını buna göre kurar.",
                    "Bölgenin kendi iklimi de hesaba katılır — rakımı nedeniyle kar yağışı ve buzlanma yaygındır, dış alan çalışmaları kışın belirgin biçimde sınırlanır. Bu yüzden dış cephe, tabela ve çatı işleri için kar öncesi sonbahar penceresini öneririz. İç mekân işleri ise kış boyunca rahatlıkla yapılabilir ve doluluk düşen dönemlerde bu işleri kışa yazmak, tesis için en verimli takvimdir. Yılın bakım programını yaparken iç ve dış işleri ayırmak, bu bölgede en çok işe yarayan planlama alışkanlığıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otelimiz açıkken lobi aydınlatmasına çalışılabilir mi?",
                cevap:
                    "Çalışılabilir ama koşullu. Temel kural, çalışma alanının misafir kullanımından fiziksel olarak ayrılmasıdır: bölge bariyerle çevrilir, geçiş güzergâhı işaretlenir ve makine misafir geçiş hattı üzerinde bırakılmaz. Bu ayrım yapılamıyorsa iş, yapılabileceği bir güne ertelenir; misafirin altından geçtiği bir platform kabul edilebilir bir kurgu değildir. Saat seçimi de önemlidir — konaklama tesislerinde çok erken saatler uygun değildir, geç sabah ve öğle sonrası genellikle daha doğrudur. En temiz çözüm, işi doluluğun düştüğü hafta içi bir güne yazmaktır.",
            },
            {
                soru: "Mermer zeminimize makine zarar verir mi?",
                cevap:
                    "Doğru makine ve doğru hazırlıkla vermez. Bu tür zeminlerde iz bırakmayan lastikli modeller kullanılır — standart siyah lastik cilalı ve açık renkli yüzeylerde iz bırakabilir. İkinci önlem, makinenin geçeceği güzergâha koruyucu serilmesidir; özellikle uzun mesafeli geçişlerde bunu öneririz. Üçüncüsü, makinenin sahaya girmeden dışarıda temizlenmesidir; tekerlekteki kum ve taş parçacıkları, lastikten çok daha fazla çizik yapar. Bu üç önlemi teslimattan önce sizinle birlikte gözden geçiririz ve tesisinizin kendi kuralları varsa makineyi ona göre hazırlarız.",
            },
            {
                soru: "Termal tesisat hattımızın bakımında özel bir hazırlık gerekiyor mu?",
                cevap:
                    "Gerekiyor ve bu hazırlık sizin tarafınızdadır. Çalışılacak hattın basıncının alınmış ve sıcak yüzeylerin soğumuş olması aranır; sıcak ve basınçlı bir hattın yanında yüksekte çalışma yapılmaz. Teknik hacimlerde ikinci konu alan darlığıdır — makine seçiminde kompakt gövde önceliklidir ve makinenin hacme ulaşacağı güzergâhın ölçüsü önceden kontrol edilir. Kapalı alan olduğu için akülü model kullanılır. Bize hattın konumunu ve teknik hacme giriş ölçülerini ilettiğinizde, uygun sınıfı ve gereken hazırlık listesini birlikte netleştirebiliriz.",
            },
            {
                soru: "Ahşap cephemizin bakımı için hangi dönemi önerirsiniz?",
                cevap:
                    "Bahar ve erken sonbahar bu bölge için en verimli iki penceredir. Yaz ortası, tesislerin doluluk açısından en yoğun dönemi olduğu için çalışma alanını güvenle ayırmak zorlaşır; kış ise rakım nedeniyle kar, buzlanma ve rüzgâr yüzünden dış cephe çalışmasını belirgin biçimde sınırlar. Ahşap cephede bakımı ertelemek pahalıdır — koruyucu uygulaması geciken yüzeyde yıpranma hızla artar ve onarım maliyeti büyür. Yıllık bakım programınızı yaparken cephe işini sabit bir bahar veya sonbahar haftasına yazmanızı ve o haftayı makine rezervasyonuyla birlikte planlamanızı öneririz.",
            },
            {
                soru: "Makine birkaç gün kalacak; geceleri nerede duracak?",
                cevap:
                    "Bunu teslimattan önce birlikte kararlaştırırız ve konaklama tesislerinde bu konu sanıldığından önemlidir. Makine, misafir erişimine kapalı, korunaklı bir alanda bırakılmalıdır — hem güvenlik hem görüntü açısından. Çoğu tesiste teknik alan, servis avlusu veya kapalı otopark bölümü bu iş için uygundur. Makineyi her akşam sahadan çıkarıp sabah tekrar getirmek ekonomik değildir ve gereksiz nakliye yaratır. Gece bırakma noktasının önceden belirlenmesi, sahada geçen zamanı azaltır ve teslim günü yaşanabilecek koordinasyon telaşını ortadan kaldırır.",
            },
            {
                soru: "Kışın bu bölgeye makine sevkiyatınız nasıl planlanıyor?",
                cevap:
                    "Bölge, Bolu tarafından bakıldığında dağ geçişinin doğu yakasında kaldığı için kasım-mart döneminde teslim günü verilir, saat ise teslim sabahı güncel yol durumuyla teyit edilir. Bu, iyimser bir saat verip tutmamaktan çok daha dürüst bir yaklaşımdır ve sahadaki ekibin kendi programını gerçekçi kurmasını sağlar. Planlama açısından önerimiz, kış döneminde iç mekân işlerini yazmak ve dış alan işlerini kar öncesi sonbahara almaktır. İç mekân işleri kış boyunca rahatlıkla yapılır; üstelik doluluğun düştüğü dönemde tesis için en uygun bakım takvimi de budur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kızılcahamam'ın Ankara kuzeyindeki konumu, termal ve doğa turizmine dayalı konaklama dokusu ile bölgenin rakım kaynaklı kış koşulları kamuya açık genel bilgidir; sezon dışı bakım penceresi, misafirli tesiste çalışma alanı ayrımı ve gece bırakma noktası düzeni firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },
    "bolge:yenicaga": {
        h1: "Yeniçağa D-100 ve TEM Koridorunda Platform Sevkiyat Ritmi",
        giris: "Yeniçağa için bu sayfanın konusu, D-100 ve TEM koridoru üzerindeki ilçe konumunu dinlenme, akaryakıt ve depo türündeki doğrulanmış yol hizmeti adreslerine platform sevkiyat ritmi açısından ele almaktır. Belirli işletme, tesis, istasyon, depo, güzergâh süresi, trafik hacmi veya kapasite hakkında iddia kurulmaz. Gerçek talepte hedef fotoğraf ve ölçüyle belirlenir: tabela, kanopi ya da sundurma, dış aydınlatma, kamera, cephe, depo kapısı üstü veya iç tavan olabilir. Platform yakıt, palet ya da yol ekipmanı taşımaz; yalnız personel erişimi sağlar. Ana koridor yakınlığı hızlı teslim sözü yerine, taşıyıcının güncel yol-hava koşulu, tesis kabulü, indirme alanı ve araç trafiğiyle uyumlu çıkış planı kurmayı sağlar. Yeniçağa kaydı Gerede'nin kavşak ve ağır araç servis anlatımını tekrarlamaz; burada odak, yol hizmeti işletmesinin gün içinde değişen müşteri ve sevkiyat akışına kısa bakım hücresi eklemektir. Makine taşıyıcıdan ayrılmış yüzeyde indirilir, hedefe giden rota kontrol edilir ve işletme trafik hücresini teslim etmeden yükselmez. Böylece otoyol koridorundaki hareket, bakım ekibini aceleye zorlayan unsur değil, güvenli çalışma penceresini belirleyen veri olur.",
        maddeler: [
            { baslik: "Sevkiyatı yol ve işletme penceresiyle eşleştirmek", metin: "Makine hazırlığı, uygun taşıyıcı, güncel yol-hava koşulu ve işletmenin araç kabul saati birlikte değerlendirilir. D-100 veya TEM seçimi geçmiş alışkanlığa değil hareket günündeki yetkili bilgilere ve taşıyıcı uygunluğuna dayanır. Belirli süre sözü verilmez. Varış yaklaşırken saha irtibatına bildirim yapılır; indirme alanı müşteri ve servis aracından temizlenir. Gecikme ihtimalinde bakım hücresi yeni saate göre korunur. Taşıyıcı rastgele yol kenarında beklemez veya uygun olmayan girişe yönelmez. Amaç ilçeye ulaşmak değil, platformu ayrılmış kabul noktasına çalışmaya hazır biçimde teslim etmektir." },
            { baslik: "Dinlenme tesisi akışında yaya rotasını ayırmak", metin: "Yol hizmeti adresinde müşteri girişi, otopark, servis yolu ve yaya hareketi gün içinde değişebilir. Tabela, cephe veya dış aydınlatma işi için bom zarfı ve düşen cisim alanı fiziksel bariyerle ayrılır. Yalnız makine tabanına koni koymak yeterli değildir. Alternatif giriş veya yaya yönü işletme tarafından açılır. Güvenli ayrım kurulamıyorsa çalışma daha sakin saate alınır. Sepet açıkken araç veya müşteri bariyer altından geçirilmez. İş sonunda platform tamamen toplanır, alet-parça sayımı yapılır ve alan işletme sorumlusuna devredildikten sonra normal akışa açılır." },
            { baslik: "Akaryakıt çevresinde işletme prosedürünü esas almak", metin: "Akaryakıt satışı bulunan gerçek bir adreste çalışma, işletmenin güncel güvenlik ve trafik prosedürüne tabidir. Hangi bölümün kapatılacağı, izin ve refakat gerekip gerekmediği saha sorumlusunca belirlenir. Akülü makine her özel ortamda otomatik uygun sayılmaz; ekipman uygunluğu doğrulanmadan çalışma yapılmaz. Kıvılcım üreten işlem ayrı izin ister. Platform pompaya, kanopiye veya başka yapıya dayanmaz ve yakıt operasyonu ekipmanı olmaz. Çalışma hücresine araç alınmaz. Operatör işletme proses izni vermez, yalnız kendisine güvenli teslim edilen alanda makineyi yönetir." },
            { baslik: "Depo kapısı ve raf işini araç hareketinden çıkarmak", metin: "Depo talebinde kapı üstü mekanizma, sundurma, aydınlatma ya da raf çevresi hedef olabilir. İlgili kapı bakım çizelgesine alınır, yanaşan araç ve forklift hareketi durdurulur veya başka kapıya yönlendirilir. Platform açık yükün üstüne uzatılmaz, palet taşımaz ve raf gözüne malzeme itmez. İç koridorda kapı, dönüş, zemin ve şase ölçüsü doğrulanır. İş bitiminde gevşek parça gözlenir, sepet indirilir ve teknik kabul yapılır. Bom toplanmadan kapı yeniden sevkiyata verilmez. Personel erişimi ile yük elleçleme görevleri ayrı tutulur." },
            { baslik: "Koridor turunu teknik kapanışla sonlandırmak", metin: "Birden fazla küçük adres aynı güzergâh ve makine sınıfında planlanabilir, ancak her işletmenin kabulü, teklifi ve teknik teslimi ayrıdır. İlk adreste makine temizlenir, görünür durum kaydedilir ve taşıyıcıya güvenli biçimde alınır. Sonraki adresin kapı, zemin ve trafik koşulu yeniden doğrulanır. Hazır olmayan iş turu bekletmez. Gün sonunda açık kalemler, makine durumu ve geri alma alanı yazılır. Güncel yol-hava bilgisi dönüş öncesinde tekrar görülür. Güzergâh ekonomisi, güvenlik kontrolünü ya da işletmeler arasındaki sorumluluk sınırını birleştirmez." },
        ],
        ekBolumler: [
            { baslik: "Yeniçağa yol hizmeti çalışma tablosu", paragraflar: ["Tablo belirli işletme envanteri değildir; doğrulanmış talepte trafik ve erişim kararlarını düzenler."], tablo: { basliklar: ["Adres bağlamı", "Hedef", "Kesişen akış", "Plan"], satirlar: [["Dinlenme tesisi", "Tabela/cephe", "Müşteri-yaya", "Kısa bariyerli hücre"], ["Akaryakıt çevresi", "Kanopi/aydınlatma", "Araç ve özel prosedür", "İşletme izni"], ["Depo dışı", "Kapı/sundurma", "Yük aracı", "Kapı randevusu"], ["Depo içi", "Raf/tavan", "Forklift-palet", "Koridoru kapat"], ["Sevkiyat", "İndirme/dönüş", "Güncel yol-hava", "Bildirimli kabul"]] } },
            { baslik: "Koridor üzerinde hazır iş paketi kurmak", paragraflar: ["İşletme hedef fotoğrafı, kot, yatay engel, malzeme, teknik yetkili ve uygun saat bilgisini sevkiyat öncesinde tamamlar. Aynı park noktasından kapanan hedefler gruplanır. Hazır olmayan tabela, parça veya izin için sepet açık bekletilmez. Alternatif iş ancak aynı makineye uygun ve hücresi hazırlanmışsa açılır.", "Birden fazla adresli turda coğrafi yakınlık tek ölçüt değildir. Makine sınıfı, taşıma, işletme kabulü ve iş süresi uyumlu olmalıdır. Her adresin sorumlusu varış bildirimini alır ve indirme alanını boş tutar. Program değişirse diğer müşterilere erken bilgi verilir; bir adresteki gecikme sessizce bütün koridora yayılmaz." ] },
            { baslik: "Kış ve hava değişikliğinde güvenli bekleme", paragraflar: ["Yol ve açık saha koşulları sevkiyat ile çalışmayı ayrı ayrı etkiler. Taşıyıcının ulaşabilmesi, rüzgâr, buz veya zemin nedeniyle sepetin yükselebileceği anlamına gelmez. Çalışma günü üretici sınırı ve saha koşulu yeniden kontrol edilir. Uygun değilse platform güvenli park alanında tutulur.", "Bekleme alanı müşteri ve araç rotasından ayrılır, bom ile sepet güvenli konuma alınır ve yetkisiz kullanım önlenir. Akülü ünitenin enerji düzeni uygun şekilde kurulur. Koşullar düzeldiğinde hücre baştan teslim alınır. Takvimi korumak için buzlu zeminde veya sınır üzerindeki rüzgârda çalışma yapılmaz." ] },
        ],
        sss: [
            { soru: "Yeniçağa'ya aynı gün platform gönderebilir misiniz?", cevap: "Makine ve taşıyıcı uygunluğu, güncel yol-hava koşulu, işletme kabulü ve indirme alanı tamamlanmışsa kısa plan mümkün olabilir; kesin garanti verilmez. Büyük veya özel sınıf ayrı hazırlık gerektirir. Varış zamanı hareket günündeki koşullarla teyit edilir. Yalnız ana koridora yakınlık, doğru makine ve güvenli saha kabulünün yerini tutmaz. Talep fotoğrafı, ölçü ve irtibat hazır olduğunda gerçekçi çıkış programı bildirilir." },
            { soru: "Dinlenme tesisi açıkken tabela bakımı yapılabilir mi?", cevap: "Müşteri, yaya ve araç rotası bom zarfı ile düşen cisim alanından fiziksel olarak ayrılabiliyorsa kontrollü hücre kurulabilir. Alternatif giriş açılır ve çalışma işletmenin daha sakin saatine alınabilir. Yalnız tabana koni koymak yeterli değildir. Sepet açıkken bariyer kaldırılmaz. Güvenli ayrım mümkün değilse ilgili bölüm kısa süre kapatılır veya iş başka pencereye taşınır. Alan platform tamamen toplandıktan ve teknik kabul yapıldıktan sonra açılır." },
            { soru: "Akaryakıt tesisi kanopisinde standart platform kullanılabilir mi?", cevap: "İşletmenin ortam sınıflandırması, güvenlik prosedürü, izin ve ekipman uygunluğu görülmeden standart platformun uygun olduğu söylenemez. Akülü olması tek başına yeterli kanıt değildir. Araç ve yakıt operasyonu çalışma hücresinden çıkarılır. Kıvılcım üreten iş ayrı izne tabidir. Makine yapıya dayanmaz ve işletme ekipmanının görevini üstlenmez. Güncel kuralları tesis sorumlusu verir; koşullar sağlanmıyorsa çalışma başlamaz." },
            { soru: "Platformla depoda palet taşınabilir mi?", cevap: "Hayır. Platform personel ve izin verilen küçük el aletleri için erişim aracıdır. Palet, uzun yük veya korkuluk dışına taşan parça sepete bağlanmaz. Yük elleçleme uygun forklift veya başka ekipmanla ayrı yürütülür. Aynı koridorda iki faaliyet gerekiyorsa yük hareketi tamamlanır, araç bölgeden çıkar ve ardından platform hücresi açılır. Sepet açık yükün üstüne uzatılmaz; raf yerleştirme ve personel erişimi ayrı sorumluluklardır." },
            { soru: "Birden fazla yol hizmeti adresi aynı turda planlanabilir mi?", cevap: "Adresler aynı makine sınıfına uyuyor, iş ve kabul pencereleri hazırsa planlanabilir. Her işletmenin teklif, giriş, hücre ve teknik teslim kaydı ayrıdır. Bir adresteki uygun zemin veya izin diğerine taşınmaz. Makine adresler arasında temizlenir ve görünür kontrol yapılır. Hazır olmayan iş bütün turu bekletmez. Güzergâh paylaşımı taşıma verimi sağlar, fakat sabit varış garantisi veya prosedürlerin birleşmesi anlamına gelmez." },
            { soru: "Teklif için hangi bilgileri paylaşmalıyız?", cevap: "Açık adresi, hedef fotoğrafı ve iş tanımını, kot, yatay engel, kapı-dönüş, zemin, park ve indirme alanını gönderin. Müşteri, yaya, araç, forklift ve yük hareketinin sakin saatini belirtin. Akaryakıt veya özel ortam varsa güncel işletme prosedürü ve saha irtibatını ekleyin. Taşıyıcının giriş koşulu ayrıca görülmelidir. Yalnız D-100/TEM koridoru veya yaklaşık yükseklik güvenli model ve teslim programı kurmaya yetmez." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Yeniçağa'nın D-100/TEM koridoru üzerindeki konumu uygulama belgesinin genel çapasıdır. Belirli dinlenme tesisi, akaryakıt işletmesi, depo, trafik, kapasite, güzergâh, mesafe veya süre iddiası yoktur; trafik hücresi ve bildirimli kabul genel saha uygulamasıdır.",
    },
};
