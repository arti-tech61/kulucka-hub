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

    // ═══════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI (11 sabit slug — src/lib/hizmet-konulari.ts)
    // Yazım: 2026-08-14. Bolu'nun otoyol/kavşak, orman ürünleri, deri OSB,
    // tavukçuluk ve Kartalkaya kayak bölgesi bağlamı hizmet açısından işlenir.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Bolu'da Sepetli / Örümcek Platform Kiralama",
        giris:
            "Örümcek platformun Bolu'daki en tipik iş alanı, standart bir makaslı veya eklemli platformun sığamayacağı dar açıklıklardır. Merkezin eski dokusundaki daracık sokaklar, kereste ve mobilya atölyelerinin dar avlu kapıları, deri OSB'deki üretim hatları arasına sıkışmış aralıklar ve otoyol kenarındaki tesislerin bina cephesine bitişik dar servis koridorları — bunların hepsi tekerlekli bir platformun giremeyeceği ama parçalara ayrılıp elle taşınabilen bir örümcek platformun rahatça çözdüğü işlerdir. Makine küçük parçalar hâlinde kapıdan içeri alınır, çalışma noktasının yakınında monte edilir ve iş bittiğinde aynı şekilde sökülüp çıkarılır. Bu yöntem hem tavan yüksekliği yeterli olmayan hem de manevra alanı dar olan mekânlarda tek gerçekçi çözümdür. Bolu'da bu tür talepler genellikle iki kaynaktan gelir: sanayi tesislerindeki dar bölümler ve merkezdeki tarihi ya da yoğun yapılaşmış sokaklardaki cephe işleri. Bu sayfa, örümcek platformun hangi işlerde standart platforma göre avantajlı olduğunu ve Bolu'nun kendine özgü dar erişim noktalarını anlatır.",
        maddeler: [
            {
                baslik: "Kapıdan sığmayan iş neden örümcek platformla çözülür",
                metin:
                    "Standart bir makaslı platformun şase genişliği bir metrenin altına inse bile taşıma yüksekliği ve dönüş yarıçapı bazı kapılardan geçmesine izin vermez. Örümcek platform bu sorunu farklı çözer: makine parçalara ayrılabilir gövdeyle üretilir, kapıdan tek tek geçirilir ve çalışma noktasının hemen yanında kurulur. Bolu'daki dar avlulu atölyelerde ve tarihi doku içindeki cephe işlerinde bu, tek makul yoldur — kapı genişletmek ya da duvar kırmak yerine makineyi mekâna uydurmak daha ucuz ve daha hızlıdır.",
            },
            {
                baslik: "Deri OSB'de raflar ve hatlar arasındaki dar aralık",
                metin:
                    "Gerede'deki deri ihtisas organize sanayi bölgesinde bazı işlem hatları birbirine çok yakın kurulmuştur; hat arası boşluk standart bir platformun manevra yapmasına yetmez. Bu tür aralıklarda örümcek platform, gövdesi küçük parçalara ayrılarak hatlar arasına taşınır ve orada monte edilir. Islak ve dar bir zeminde çalışıldığı için makinenin ayakları geniş bir yük dağıtım tabanına oturtulur; bu, dar alanda dengeyi sağlayan temel önlemdir.",
            },
            {
                baslik: "Merkezdeki tarihi doku ve cephe işleri",
                metin:
                    "Bolu merkezin eski mahallelerinde sokak genişliği araç geçişine göre değil yaya trafiğine göre şekillenmiştir; buraya büyük bir eklemli platform sokmak çoğu zaman mümkün değildir. Cephe boyası, tabela sökümü veya çatı oluğu onarımı gibi işlerde örümcek platform, sokağa park edilen bir araçtan indirilip yürüyerek çalışma noktasına taşınabilir. Bu, hem trafiği kesmeden hem komşu binalara zarar vermeden çalışmayı mümkün kılar.",
            },
            {
                baslik: "Kurulum süresi ve iş planına etkisi",
                metin:
                    "Örümcek platformun parçalı yapısı bir avantaj getirirken bir de bedel getirir: kurulum ve söküm, tekerlekli bir makinenin sahaya sürülmesinden daha uzun sürer. Yarım saatlik bir iş için bu süre orantısız kalabilir; bu yüzden örümcek platform genellikle birden fazla dar noktayı olan işlerde ya da kurulumun bir kez yapılıp uzun süre kullanılacağı işlerde tercih edilir. Talep alırken işin süresini ve dar nokta sayısını sormamızın nedeni, doğru makineyi önermektir — bazen örümcek yerine küçük bir kompakt makaslı model daha hızlı sonuç verir.",
            },
            {
                baslik: "Ağırlık taşıma kapasitesi ve zemin uyumu",
                metin:
                    "Örümcek platformlar hem lastik tekerlekli hem paletli gövdelerle bulunur; Bolu'daki açık saha işlerinde — kereste stok sahası kenarı, bahçe içi cephe işi — paletli versiyon zemin baskısını daha geniş bir alana yayar ve yumuşak zeminde batmayı önler. İç mekân işlerinde ise lastikli versiyon tercih edilir çünkü zemine iz bırakmaz. Zeminin cinsi ve eğimi teslim öncesi sorulur; bu bilgi olmadan doğru gövde tipini önermek mümkün değildir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolu'da dar erişim tipi ve örümcek platform tercihi",
                paragraflar: [
                    "Aşağıdaki tablo, sahada en sık karşılaştığımız dar erişim tiplerini ve bunlara uygun örümcek platform yapılandırmasını özetler.",
                ],
                tablo: {
                    basliklar: ["Erişim tipi", "Tipik genişlik kısıtı", "Gövde tercihi", "Belirleyici koşul"],
                    satirlar: [
                        ["Atölye avlu kapısı", "70-90 cm", "Lastikli, parçalı", "Kapı yüksekliği"],
                        ["Deri OSB hat arası", "60-100 cm", "Lastikli, dar ayak izi", "Islak zemin, kavrama"],
                        ["Tarihi sokak / cephe", "Yaya genişliği", "Lastikli, hafif gövde", "Kaldırım taşıma kapasitesi"],
                        ["Kereste stok sahası kenarı", "Değişken", "Paletli", "Yumuşak zemin"],
                        ["Bahçe / avlu içi cephe", "Kapı + döner köşe", "Lastikli, parçalı", "Manevra alanı"],
                    ],
                },
            },
            {
                baslik: "Parçalı taşımanın pratikteki karşılığı",
                paragraflar: [
                    "Örümcek platform sahaya bir kamyonet ya da küçük römorkla gelir ve makine oradan itibaren elle taşınır. Bu, teslimatın tekerlekli bir platform kadar hızlı olmadığı ama yerin izin vermediği durumlarda tek çözüm olduğu anlamına gelir. İş planlarken kurulum ve söküm süresini de kiralama süresine dahil etmeniz gerekir; yarım günlük bir işte bu süre toplam zamanın önemli bir kısmını alabilir.",
                    "Bizim tarafımızdaki hazırlık, taşıma güzergâhını önceden görmektir — kaç kapı geçilecek, hangi noktalarda dönüş yapılacak, zemin nerede eğimli. Bu bilgi fotoğraf ve kısa bir video ile netleşir; sahaya gelindiğinde sürpriz bir dar nokta çıkmaz ve kurulum planlandığı sürede tamamlanır.",
                ],
            },
            {
                baslik: "Ne zaman örümcek, ne zaman kompakt makaslı",
                paragraflar: [
                    "Her dar alan işi örümcek platform gerektirmez. Kapı genişliği bir metre civarındaysa ve tavan yüksekliği fazla değilse, kompakt gövdeli akülü makaslı platform hem daha hızlı kurulur hem daha ekonomiktir. Örümcek platform, kapı bir metrenin altına indiğinde, birden fazla dar noktadan geçilmesi gerektiğinde veya çalışma noktasının kapıdan içeride uzun bir mesafede olduğunda öne çıkar.",
                    "Bu ayrımı doğru yapmak, hem gereksiz kurulum süresinden hem yanlış makine göndermekten kaynaklanan gecikmeyi önler. Talebinizi verirken kapı ölçüsünü, tavan yüksekliğini ve çalışma noktasının konumunu paylaşırsanız, hangi gövdenin işe yarayacağını telefonda netleştirebiliriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform ile makaslı platform arasındaki fark nedir?",
                cevap:
                    "Temel fark taşınma biçimidir. Makaslı platform tek parça hâlinde tekerlekleri üzerinde sürülerek çalışma noktasına gider; örümcek platform ise parçalara ayrılarak kapıdan geçirilir ve çalışma noktasının yanında monte edilir. Bu yüzden örümcek platform, makaslı platformun sığamayacağı dar kapı ve koridorlarda kullanılır. Çalışma yüksekliği ve sepet kapasitesi açısından iki tip de benzer aralıklarda bulunabilir; seçim, mekânın genişliğine göre yapılır. Kapı ve koridor ölçünüzü paylaşırsanız hangi tipin uygun olduğunu doğrudan söyleyebiliriz.",
            },
            {
                soru: "Kurulum ne kadar sürer?",
                cevap:
                    "Süre, dar noktanın sayısına ve çalışma noktasının kapıdan uzaklığına bağlıdır; tek bir dar kapıdan geçip hemen ardında kurulacak bir iş kısa sürer, birden fazla dönüş ve mesafe içeren bir güzergâh daha uzun sürer. Bu yüzden teslim öncesi güzergâhı fotoğraf veya video ile görmemiz, kurulum süresini gerçekçi tahmin etmemizi sağlar. Kurulum süresi kiralama süresinin bir parçasıdır; kısa bir iş için örümcek platform tercih ediliyorsa bu süreyi plana dahil etmenizi öneririz.",
            },
            {
                soru: "Deri OSB'deki dar hat aralığına makine sığar mı?",
                cevap:
                    "Sığması, hat arası net boşluğa ve makinenin monte edilmiş hâldeki ayak izine bağlıdır; bu ikisini karşılaştırmadan makine göndermeyiz. Islak zeminli hat aralarında ayaklar geniş bir tabana oturtulur ve kavrama önceden kontrol edilir. Ölçünüzü paylaştığınızda uygun gövdeyi ve ayak yapılandırmasını size söyleyebiliriz; ölçü net değilse sahaya çıkmadan önce kısa bir keşif önerilir.",
            },
            {
                soru: "Tarihi sokakta çalışırken trafik ve yayalar nasıl yönetiliyor?",
                cevap:
                    "Makine sokağa parçalar hâlinde indirilir ve kurulum, yaya trafiğinin en az olduğu saatlere yazılır. Çalışma alanı geçici bariyerle ayrılır ve sepet açıkken altından yaya geçirilmez. Kaldırımın taşıma kapasitesi önceden kontrol edilir çünkü bazı tarihi zeminler ağır yük taşımaya uygun değildir. Sokağın genişliği ve zemin cinsi hakkında elinizdeki bilgiyi paylaşırsanız, çalışma saatini ve bariyer düzenini önceden netleştirebiliriz.",
            },
            {
                soru: "Açık sahada, örneğin stok alanı kenarında kullanılabilir mi?",
                cevap:
                    "Kullanılabilir; açık ve yumuşak zeminlerde paletli gövde tercih edilir çünkü ayak baskısını daha geniş bir alana yayar ve zemine batmayı önler. Yağış sonrası yumuşayan zeminlerde çalışma öncesi zeminin durumu kontrol edilir; gerekiyorsa ayakların altına yük dağıtıcı plaka konulur. İç mekân işlerinde ise zemine iz bırakmaması için lastikli gövde kullanılır. Sahanızın zemin cinsini ve son günlerdeki hava durumunu paylaşırsanız doğru gövdeyi önerebiliriz.",
            },
            {
                soru: "Operatör bizim tarafımızdan mı, sizin tarafınızdan mı sağlanır?",
                cevap:
                    "İkisi de mümkündür. Örümcek platform kurulumu standart bir platform teslimatından daha fazla teknik bilgi gerektirdiği için, ilk kullanımınızda operatörlü kiralamayı öneririz. Ekibiniz kurulum ve sökümü tecrübeyle öğrendikten sonra, belgeli personeliniz varsa makineyi operatörsüz de kiralayabilirsiniz. Her iki durumda da teslim sırasında kurulum adımları sahada birlikte gözden geçirilir ve güvenlik noktaları aktarılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu merkezin tarihi doku niteliği, Gerede'deki deri ihtisas organize sanayi bölgesi ve orman ürünleri sanayisinin dar avlulu atölye yapısı kamuya açık genel bilgidir; örümcek platform kurulum yöntemi ve gövde seçim mantığı firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Bolu'da Platform ve Vinç Nakliye - Teslimat Hizmeti",
        giris:
            "Bolu'nun nakliye açısından en belirleyici özelliği, TEM Otoyolu'nun il topraklarını tam ortadan ikiye bölmesidir. Bu tek gerçek, teslimat planlamasının neredeyse tamamını şekillendirir: standart sınıf makinelerde İstanbul ve Ankara yönünden gelen seferler ile ilin kendi merkezinden çıkan seferler aynı hat üzerinde birleşir ve bu, adreslerin çoğuna ulaşımı hızlandırır. Ancak bu avantajın iki net sınırı vardır ve ikisini de sözleşme öncesi açıkça söyleriz. Birincisi ağır ve büyük gövdeli ekipmandır — bunlar özel sevkiyat organizasyonu ister ve günlük sefer planına eklenemez. İkincisi kış mevsimidir — Bolu Dağı geçişindeki kar, buzlanma ve zaman zaman uygulanan zincir zorunluluğu, ağır araç trafiğini doğrudan etkiler ve teslim saatini değil teslim gününü taahhüt etmemizi gerektirir. Bu sayfa, Bolu'daki teslimat sürecinin nasıl işlediğini, hangi bilgilerin bize gerçekçi bir tarih verdirdiğini ve kış-yaz farkının planlamaya nasıl yansıdığını anlatır.",
        maddeler: [
            {
                baslik: "TEM hattının standart sınıfa kazandırdığı hız",
                metin:
                    "TEM üzerindeki her sefer, güzergâhı boyunca Bolu'yu doğal bir durak noktası olarak geçer. Bu, standart sınıf makaslı ve eklemli platformlarda bekleme süresinin kısalmasına yol açar; talebiniz bir gün önceden iletildiğinde çoğu durumda ertesi sabah sahada olunur. Bu avantajın koşulu, adresinizin otoyol bağlantısına makul bir mesafede olmasıdır — hattan uzaklaştıkça sevkiyat, günlük sefer planına eklenen bir sapma değil, ayrı planlanan bir iş hâline gelir.",
            },
            {
                baslik: "Ağır sınıf ekipmanda ayrı organizasyon",
                metin:
                    "Yüksek tonajlı platformlar ve vinçler, standart araçla taşınmaz; lowbed veya özel taşıyıcı gerektirir ve bu araçların bulunabilirliği günlük değil haftalık planlanır. Ağır ekipman talebinde ilk sorduğumuz şey, işin ne zaman başlaması gerektiğidir; bu süre önceden bilinirse taşıyıcı organizasyonu rahatlıkla tamamlanır. Son dakika taleplerinde ise dürüst olmayı tercih ederiz — gerçekçi olmayan bir tarih vermek yerine, taşıyıcının müsait olduğu en yakın günü söyleriz.",
            },
            {
                baslik: "Bolu Dağı geçişi ve kış teslim taahhüdü",
                metin:
                    "Kasım-mart döneminde geçişteki kar, buzlanma veya sis, ağır araç trafiğini yavaşlatabilir ve bazı günlerde zincir zorunluluğu getirilebilir. Bu koşullar altında saat taahhüdü vermek gerçekçi değildir; bu yüzden kış aylarında gün taahhüdü verir, teslim sabahı güncel yol durumuyla saat teyidi yaparız. İş sahibi tarafındaki karşılığı basittir: kış teslimatlarını, makinenin sahada bir gün fazla kalabileceği varsayımıyla planlamak. Bu esneklik, koşulların bozulduğu bir günde işi iptal etmek yerine ertesi güne kaydırmayı mümkün kılar.",
            },
            {
                baslik: "Teslim öncesi sahanın hazır olması",
                metin:
                    "Teslimatın süresini uzatan en sık neden, yolun değil sahanın hazır olmamasıdır. İndirme noktasının makinenin ağırlığını taşıyacak sağlamlıkta olması, kar mevsiminde kardan temizlenmiş ve buz tutmamış olması, gündüz teslim edilecekse geçiş güzergâhının araç trafiğine açık olması gerekir. Bu üç madde teslim öncesi telefonda birlikte gözden geçirilir; sahaya varan araç makineyi indiremediğinde kaybedilen zaman, ertesi sefere kadar sürebilir.",
            },
            {
                baslik: "Geri alma ve sürenin doğru hesaplanması",
                metin:
                    "Nakliye yalnızca gidiş değil dönüş de içerir; kiralama süresi biterken makinenin ne zaman alınacağı da net olmalıdır. Bolu'da bu, özellikle hat üzerindeki tesislerde önemlidir çünkü aynı aracın dönüş seferine başka bir teslimat eklenebilir. İş bitiş tarihinizi bize önceden bildirmeniz, hem sizin için ek gün ücretini önler hem bizim için aracı bir sonraki işe zamanında yönlendirmemizi sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolu'da makine sınıfına göre teslim süresi",
                paragraflar: [
                    "Aşağıdaki tablo, makine sınıfına göre tipik teslim süresini ve bu süreyi belirleyen ana koşulu özetler.",
                ],
                tablo: {
                    basliklar: ["Makine sınıfı", "TEM hattına yakın adres", "Hattan uzak adres", "Belirleyici koşul"],
                    satirlar: [
                        ["Kompakt makaslı", "Aynı gün / ertesi sabah", "1-2 gün", "Günlük sefer bulunabilirliği"],
                        ["Akülü eklemli", "Ertesi sabah", "2 gün", "Şarj ve hazırlık süresi"],
                        ["Dizel eklemli (büyük)", "1-2 gün", "2-3 gün", "Taşıyıcı araç uygunluğu"],
                        ["Ağır sınıf / vinç", "Haftalık planlama", "Haftalık planlama", "Lowbed organizasyonu"],
                        ["Kış dönemi (kasım-mart)", "Gün taahhüdü", "Gün taahhüdü", "Geçiş koşulu, sabah teyidi"],
                    ],
                },
            },
            {
                baslik: "Talep verirken paylaşmanız gereken bilgiler",
                paragraflar: [
                    "Gerçekçi bir teslim tarihi verebilmemiz için birkaç bilgiye ihtiyacımız var: adresinizin TEM Otoyolu'na yaklaşık uzaklığı, çalışma yüksekliği veya makine sınıfı, indirme noktasının zemin durumu ve varsa özel araç kabul saatleri. Bu bilgiler tam olduğunda, size verdiğimiz tarih bir tahmin değil, o günkü sefer planına dayanan gerçek bir taahhüttür.",
                    "Eksik bilgiyle verilen erken bir tarih, sahada makinenin gecikmesi ya da yanlış sınıfın gönderilmesiyle sonuçlanabilir. Bu yüzden ilk görüşmede birkaç dakika daha fazla soru sormamız, teslimat gününde zaman kazandırır.",
                ],
            },
            {
                baslik: "Acil arıza teslimatı ile planlı teslimatın farkı",
                paragraflar: [
                    "Planlı bir bakım işinde teslim tarihini birkaç gün önceden netleştirir ve o tarihe sadık kalırız. Acil bir arızada ise mantık değişir: sevkiyat, koşulların elverdiği ilk fırsatta yapılır ve size verilen bilgi tahmin değil güncel durumdur — aracın konumu, geçişin o anki hâli, gerçekçi varış saati. Kış aylarında acil taleplerde yol durumu sürekli takip edilir ve değişiklik olduğunda hemen bilgi verilir.",
                    "Bu ayrımı baştan yapmamızın nedeni, iki durumun farklı beklenti gerektirmesidir. Planlı işte tarihe güvenebilirsiniz; acil işte ise en hızlı ve en dürüst bilgiye güvenebilirsiniz. İkisi de bizim için aynı önceliktedir, sadece yönetim biçimleri farklıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bolu'ya ne kadar sürede makine gönderebiliyorsunuz?",
                cevap:
                    "Standart sınıf makinelerde, adresiniz TEM Otoyolu'na yakınsa ve talebiniz bir gün önceden iletilmişse, çoğu durumda ertesi sabah sahada oluruz. Adresiniz hattan uzaksa veya ağır sınıf bir makine istiyorsanız süre uzar ve bunu size baştan söyleriz. Kış aylarında bir değişken daha eklenir: Bolu Dağı geçişinin durumu. Böyle günlerde size iyimser bir saat değil, gerçekçi bir gün söyleriz ve teslim sabahı saati teyit ederiz.",
            },
            {
                soru: "Kışın teslim saatini neden veremiyorsunuz?",
                cevap:
                    "Çünkü platform ve vinç taşıyan araçlar ağır araç sınıfındadır ve Bolu Dağı geçişindeki kar, buzlanma, sis veya zincir zorunluluğu bu araçların hızını doğrudan etkiler. Sabahtan verilen bir saat taahhüdü, koşullar değiştiğinde tutulamaz ve sahada bekleyen ekibinizin gününü boşa harcar. Bunun yerine gün taahhüdü verir, teslim sabahı güncel durumla saat teyidi yaparız — bu, iyimser bir söz vermekten daha dürüst bir yöntemdir.",
            },
            {
                soru: "Ağır sınıf ekipman için ne kadar önceden haber vermeliyiz?",
                cevap:
                    "Mümkün olduğunca erken; ağır sınıf platform ve vinçler lowbed veya özel taşıyıcı gerektirir ve bu araçların planlaması günlük değil haftalık yapılır. İşinizin başlangıç tarihini bir hafta önceden bildirirseniz taşıyıcı organizasyonu rahatlıkla tamamlanır. Son dakika taleplerde de yardımcı olmaya çalışırız ama taşıyıcı müsaitliğine bağlı kalırız ve gerçekçi olmayan bir tarih vermeyiz.",
            },
            {
                soru: "Teslim günü sahada neye hazır olmalıyız?",
                cevap:
                    "Üç şeye: indirme noktasının makinenin ağırlığını taşıyacak sağlamlıkta olması, kış aylarında bu noktanın kardan temizlenmiş ve buz tutmamış olması, ve araç sahaya girecekse geçiş güzergâhının açık olması. Bu üç madde teslim öncesi telefonda birlikte gözden geçirilir. Sahaya varan aracın makineyi indirememesi, en sık yaşanan ve en kolay önlenebilir gecikme nedenidir.",
            },
            {
                soru: "Nakliye ücreti mesafeye göre mi hesaplanıyor?",
                cevap:
                    "Mesafe temel bileşendir ama tek etken değildir; makine sınıfı, taşıyıcı tipi ve adresin ana hatta uzaklığı da hesaba girer. TEM hattına yakın adreslerde standart sınıf makinelerde nakliye görece düşüktür çünkü mevcut sefer planına eklenebilir. Hattan uzak veya özel taşıyıcı gerektiren adreslerde nakliye ayrı hesaplanır. Adresinizi ve makine sınıfınızı paylaştığınızda net rakamı söyleyebiliriz.",
            },
            {
                soru: "Aynı bölgede birden fazla adresimiz varsa nakliye tek seferde mi yapılıyor?",
                cevap:
                    "Adresleriniz aynı hat üzerinde veya birbirine yakınsa evet, tek sefere toplamak mümkündür ve bu hem sizin hem bizim için ekonomiktir. Bunun için taleplerinizi ayrı ayrı değil birlikte iletmeniz gerekir; ayrı ayrı gelen talepler ayrı sefer olarak planlanmak zorunda kalır. Talebinizi birleştirdiğinizde hem nakliye maliyeti düşer hem makinelerin sahada olacağı günler tek programda netleşir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. TEM Otoyolu'nun Bolu'yu ortadan geçen güzergâhı ve Bolu Dağı geçişindeki kış koşullarının ağır araç trafiğini etkilemesi kamuya açık genel bilgidir; teslim süresi tablosu, saha hazırlık listesi ve acil-planlı teslimat ayrımı firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Bolu'da Forklift ve İstifleme Kiralama",
        giris:
            "Bolu'da forklift talebi iki farklı sanayi kolundan yoğun biçimde gelir: orman ürünleri ve mobilya üretiminin kereste-palet trafiği, ile deri ve gıda sanayisinin depo-sevkiyat işleri. İki kolun da ortak noktası, forklift ihtiyacının platform kiralamasından farklı bir mantıkla işlemesidir — burada yükseklik değil, yük kapasitesi ve zemin uyumu belirleyicidir. Kereste atölyelerinde forklift, ham tomruk ve kesilmiş kereste paletlerini taşır; bu işlerde çatal aralığı ve kaldırma kapasitesi malzemenin ölçüsüne göre seçilir. Gerede'deki deri OSB ve gıda tesislerinde ise forklift, kapalı alan sevkiyatında kullanılır ve emisyon kısıtı nedeniyle çoğunlukla elektrikli modeller tercih edilir. Bu sayfa, Bolu'daki forklift taleplerinin tipik profilini, kapalı-açık alan ayrımını ve istifleme işlerinde dikkat edilen zemin-yük dengesini anlatır.",
        maddeler: [
            {
                baslik: "Kereste ve palet trafiğinde kapasite seçimi",
                metin:
                    "Kereste ve mobilya atölyelerinde forklift talebi genellikle iki ölçüde toplanır: küçük parça palet taşıma ve büyük tomruk/kereste demeti kaldırma. Bu ikisi farklı kapasite sınıfı gerektirir; küçük paletler için standart kapasiteli bir forklift yeterliyken, ağır kereste demetleri için daha yüksek kaldırma kapasitesine sahip model gerekir. Talep alırken taşınacak yükün yaklaşık ağırlığını ve boyutunu sormamızın nedeni, doğru kapasiteyi önce belirleyip sahada güç yetmemesi riskini ortadan kaldırmaktır.",
            },
            {
                baslik: "Deri OSB ve gıda tesislerinde elektrikli tercih",
                metin:
                    "Kapalı alanda çalışan tesislerde — deri işleme, gıda depolama, soğuk zincir — içten yanmalı forklift kullanılmaz; elektrikli modeller hem emisyon hem gürültü açısından zorunlu tercihtir. Bu tesislerde zemin genellikle perdahlı beton veya epoksi kaplıdır ve iz bırakmayan tekerlek istenir. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimat öncesi planlanır; aksi hâlde iş ortasında akü biter ve üretim akışı sekteye uğrar.",
            },
            {
                baslik: "Açık sahada istifleme ve zemin uyumu",
                metin:
                    "Kereste stok sahaları gibi açık alanlarda zemin sıkıştırılmış toprak veya stabilizedir ve yağış sonrası yumuşayabilir. Bu zeminde standart dolgu lastikli forklift zorlanabilir; büyük havalı lastikli veya arazi tipi model tercih edilir. İstifleme yüksekliği arttıkça forklift devrilme riskine karşı yükün merkez ağırlığı ve zemin düzlüğü daha kritik hâle gelir — bu yüzden yüksek istifleme talep eden sahalarda zemin önceden kontrol edilir.",
            },
            {
                baslik: "Rampa ve yükleme kapısı çalışması",
                metin:
                    "Depo ve antrepo yapılarında forklift, çoğunlukla yükleme rampası ile kamyon kasası arasındaki geçişte kullanılır. Rampa eğimi ve kot farkı, forklift seçiminde göz önünde bulundurulan bir diğer etkendir; dik rampalarda kaldırma kapasitesi düşebileceğinden bu bilgi baştan alınır. Yükleme kapısı çevresindeki trafik yoğunsa forklift çalışma saatinin, araç trafiğinin en az olduğu dilime yazılması önerilir.",
            },
            {
                baslik: "Operatörlü ve operatörsüz kiralama farkı",
                metin:
                    "Forklift kullanacak kişinin ilgili belgeye sahip olması yasal bir gerekliliktir. Belgeli personeliniz varsa makine size teslim edilir ve kısa bir kullanım-güvenlik aktarımı yapılır. Belgeli personeliniz yoksa operatörlü kiralama tercih edilir. Bolu'daki tesislerin çoğu belirli marka ve kumanda düzenine alışkındır; farklı bir modelle çalışacaksanız teslim sırasındaki aktarımı atlamamanızı öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolu'da iş tipine göre forklift seçimi",
                paragraflar: [
                    "Tablo, sahada en sık karşılaştığımız iş tipini ve buna uygun forklift yapılandırmasını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ortam", "Güç tipi", "Belirleyici koşul"],
                    satirlar: [
                        ["Kereste / palet taşıma", "Açık saha", "Dizel / LPG", "Kapasite, lastik tipi"],
                        ["Deri OSB sevkiyatı", "Kapalı alan", "Elektrikli", "Emisyon, zemin izi"],
                        ["Gıda deposu istifleme", "Kapalı alan, hijyenik", "Elektrikli", "İz bırakmama, hijyen"],
                        ["Yükleme rampası", "Yarı açık", "Dizel / elektrikli", "Rampa eğimi"],
                        ["Yüksek raf istifleme", "Kapalı alan", "Elektrikli", "İstifleme yüksekliği, denge"],
                    ],
                },
            },
            {
                baslik: "Yük ölçüsü ve kapasite eşleşmesi neden önce sorulur",
                paragraflar: [
                    "Forklift kiralamasında en sık yaşanan aksaklık, kapasitesi yetersiz makinenin sahaya gönderilmesidir. Bu durum işi durdurur ve ikinci bir makine sevkiyatı gerektirir. Bunu önlemek için taşınacak en ağır yükün kilogram cinsinden ağırlığını ve çatal merkezine olan mesafesini talep aşamasında sormamız standart bir uygulamadır; forklift kapasitesi bu iki değere göre değişir ve ilan edilen maksimum kapasite her yük merkezinde geçerli olmayabilir.",
                    "Kereste ve mobilya sektöründe yük ölçüsü genellikle bellidir ve tekrar eden işlerde bu bilgi bir kez netleştikten sonra sonraki taleplerde tekrar sorulmaz. Yeni bir yük tipi devreye girdiğinde ise bu bilgiyi yeniden almamız, doğru kapasiteyi ilk seferde göndermemizi sağlar.",
                ],
            },
            {
                baslik: "Kısa iş ile uzun kiralama arasındaki maliyet dengesi",
                paragraflar: [
                    "Forklift ihtiyacı genellikle tek seferlik değil, sürekli bir iş akışının parçasıdır — sevkiyat günleri, üretim dönemleri, mevsimsel yoğunluk. Bu yüzden Bolu'daki taleplerde günlük kiralamadan çok haftalık ve aylık düzen daha sık tercih edilir; süre uzadıkça günlük birim maliyet düşer ve tesis, makineyi kendi üretim takvimine göre kullanabilir.",
                    "Tek seferlik kısa işlerde ise günlük kiralama daha mantıklıdır ama nakliye maliyetinin işin kendisinden büyük olmaması için, mümkünse aynı tesisteki başka forklift ihtiyaçlarını da aynı güne toplamanızı öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kereste demeti taşımak için hangi kapasitede forklift gerekir?",
                cevap:
                    "Bu, demetin ağırlığına ve çatal merkezine olan mesafesine bağlıdır; standart kapasiteli bir forklift her kereste demeti için yeterli olmayabilir. Talep alırken taşınacak en ağır demetin yaklaşık ağırlığını ve boyutunu sormamızın nedeni budur. Doğru kapasiteyi baştan belirlemek, sahada makinenin yetersiz kalıp işi durdurmasını önler. Ölçüyü tam bilmiyorsanız, benzer işlerde daha önce kullandığınız forklift kapasitesini söylemeniz de yeterli bir başlangıç noktasıdır.",
            },
            {
                soru: "Deri OSB'deki tesisimizde dizel forklift kullanabilir miyiz?",
                cevap:
                    "Kapalı alanda çalışan tesislerde dizel forklift kullanılmaz; emisyon ve gürültü nedeniyle elektrikli modeller zorunlu tercihtir. Açık sahada, örneğin yükleme rampası dışındaki bir alanda dizel forklift kullanılabilir ama bu durumda da tesisin kendi güvenlik prosedürü belirleyicidir. Hangi alanda hangi güç tipinin kullanılacağını netleştirmek için çalışacağınız bölümü ve ortam koşulunu paylaşmanızı rica ederiz.",
            },
            {
                soru: "Yumuşak zeminli stok sahamızda forklift batmadan çalışabilir mi?",
                cevap:
                    "Zeminin son durumuna bağlı olarak evet; ama standart dolgu lastikli bir forklift yerine büyük havalı lastikli veya arazi tipi model tercih edilir. Yağış sonrası yumuşamış zeminlerde çalışma öncesi zeminin kontrol edilmesi ve gerekiyorsa sıkıştırılması önerilir. Sahanızın son günlerdeki hava durumunu ve zemin cinsini paylaşırsanız, uygun lastik ve gövde tipini önceden netleştirebiliriz.",
            },
            {
                soru: "Akü vardiya boyunca yeterli olur mu?",
                cevap:
                    "Vardiya süresine ve iş yoğunluğuna bağlıdır; tek vardiya sürekli çalışmada standart akü kapasitesi çoğunlukla yeterlidir. Çift vardiya veya kesintisiz çalışma gerekiyorsa akü kapasitesini ve şarj noktasının konumunu teslimat öncesi birlikte planlarız. Şarj için ayrılmış bir alan yoksa bunu size önceden sorarız; aksi hâlde iş ortasında akünün bitmesi üretim akışını durdurabilir.",
            },
            {
                soru: "Rampa eğimi forklift seçimini nasıl etkiler?",
                cevap:
                    "Dik rampalarda forklift'in kaldırma kapasitesi düz zemine göre azalabilir; bu yüzden rampa eğimini ve kot farkını talep aşamasında sormamız önemlidir. Bazı durumlarda düz zeminde yeterli olan bir kapasite, rampada yetersiz kalabilir ve daha güçlü bir model gerekir. Rampanızın yaklaşık eğimini ve yükleme kapısı ile zemin arasındaki kot farkını paylaşırsanız, doğru kapasiteyi baştan belirleriz.",
            },
            {
                soru: "Operatörsüz kiralama için ne gerekiyor?",
                cevap:
                    "Forklift kullanacak personelinizin ilgili belgeye sahip olması gerekir; bu yasal bir zorunluluktur. Belgeli personeliniz varsa makine size teslim edilir, kısa bir kullanım ve güvenlik aktarımı yapılır. Belgeniz yoksa veya belgeli personel bulunmuyorsa operatörlü kiralama önerilir. Her iki durumda da teslim sırasında makinenin kumanda düzeni ve güvenlik noktaları sahada birlikte gözden geçirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun orman ürünleri-mobilya sanayisi ile Gerede'deki deri ihtisas organize sanayi bölgesinin varlığı kamuya açık genel bilgidir; kapasite-yük merkezi ilişkisi, zemin-lastik tipi eşleşmesi ve vardiya bazlı akü planlaması firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Bolu'da Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli platformun Bolu'daki en tipik kullanım alanı, sepetin düz yukarı değil yana ve öteye doğru uzanması gereken işlerdir: otoyol kenarındaki tesislerin yüksek tabela ve totemleri, kamu binalarının ve fabrikaların çıkıntılı cephe detayları, ağaç veya boru hattı gibi engellerin arkasındaki noktalar. Makaslı platform yalnız düz yukarı çıkarken, eklemli platform bomunu bükerek engelin üzerinden veya yanından hedefe ulaşır — bu farkı bilmeden yapılan yükseklik hesabı çoğu zaman yanlış makine seçimine yol açar. Bolu'da eklemli platform talebi en yoğun otoyol hattı üzerindeki dinlenme tesisleri, akaryakıt istasyonları ve sanayi tesislerinin dış cephe işlerinden gelir; bu adreslerin ortak özelliği hedefin bina sınırının dışına taşması ve makinenin tesisin kendi sahası içinden çalışmak zorunda olmasıdır. Bu sayfa, eklemli platformun ne zaman makaslı platforma göre doğru seçim olduğunu ve Bolu'daki tipik erişim engellerini anlatır.",
        maddeler: [
            {
                baslik: "Erişim açısı: engelin arkasına ulaşmak",
                metin:
                    "Bir tabelanın önünde direk, saçak veya başka bir yapı varsa, makaslı platform sepeti düz yukarı çıkardığı için o engeli aşamaz. Eklemli platform ise bomunu önce yukarı, sonra yana bükerek hedefe yandan yaklaşır. Bolu'daki otoyol kenarı tesislerinde bu durum sık görülür — kanopi, tabela direği veya ağaç, doğrudan erişimi engeller ve eklemli platform bu engelleri aşan tek çözümdür.",
            },
            {
                baslik: "TEM hattındaki tesislerde bom uzunluğu seçimi",
                metin:
                    "Otoyol kenarındaki dinlenme ve akaryakıt tesislerinde tabela ve totem yüksekliği çoğunlukla 12-18 metre bandındadır. Bu yükseklikte eklemli platform, makinenin kendisi yoldan uzakta dururken sepeti hedefe uzatabildiği için hem güvenlik hem konumlandırma açısından avantajlıdır. Makine hiçbir koşulda yol trafiğine açık alanda konumlanmaz; çalışma tesisin kendi sahası içinden yapılır ve bom uzunluğu buna göre seçilir.",
            },
            {
                baslik: "Dizel ve akülü eklemli arasındaki tercih",
                metin:
                    "Açık sahada, örneğin tabela veya çatı işinde, dizel eklemli platform daha yüksek güç ve daha uzun bom sunar. Kapalı alanda — sanayi holü içi, depo tavanı — ise emisyon nedeniyle akülü eklemli model zorunludur. Bolu'daki taleplerde bu ayrım net biçimde ortam tipine göre yapılır; iş hem açık hem kapalı alanı kapsıyorsa, iki ayrı makine yerine tek akülü model tercih edilip açık alan işi de onunla tamamlanabilir mi diye önce değerlendirilir.",
            },
            {
                baslik: "Rüzgâr sınırı ve açık sahada çalışma penceresi",
                metin:
                    "Eklemli platformlar, yükseklik arttıkça rüzgâra karşı makaslı platformdan daha hassastır çünkü bom uzadıkça sepetin salınımı büyür. Üreticinin belirlediği rüzgâr hızı sınırı aşıldığında çalışma durdurulur; bu, özellikle Bolu Dağı çevresindeki açık ve yüksek noktalarda dikkat edilen bir kuraldır. Açık sahada uzun bomlu bir iş planlarken hava durumunu önceden kontrol etmek, işin tek seferde tamamlanma olasılığını artırır.",
            },
            {
                baslik: "Sanayi holü ve çelik konstrüksiyon cephesinde kullanım",
                metin:
                    "Bolu'daki sanayi holü ve çelik konstrüksiyon yapılarının cephe detayları — saçak altı, mahya, yan duvar üstü — çoğunlukla makaslı platformun ulaşamayacağı açılardadır. Eklemli platform, holün dışından bomunu cepheye doğru uzatarak bu noktalara erişir. Bu tür işlerde makinenin konumlanacağı zeminin düzlüğü ve taşıma kapasitesi, bom tam açıldığında oluşan yük dağılımı nedeniyle özellikle önemlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolu'da hedefe göre eklemli platform seçimi",
                paragraflar: [
                    "Tablo, hedefin konumuna göre uygun bom tipini ve dikkat edilecek koşulu özetler.",
                ],
                tablo: {
                    basliklar: ["Hedef konumu", "Erişim türü", "Bom tipi", "Dikkat edilecek koşul"],
                    satirlar: [
                        ["Yol kenarı tabela/totem", "Engelin yanından", "Dizel eklemli 16-20 m", "Rüzgâr sınırı"],
                        ["Kanopi altı / üstü", "Yandan yaklaşım", "Dizel eklemli", "Zemin taşıma kapasitesi"],
                        ["Sanayi holü cephesi", "Dışarıdan içeri uzanma", "Dizel eklemli", "Bom açıklığında zemin düzlüğü"],
                        ["Depo tavanı (kapalı)", "Yukarı + yana", "Akülü eklemli", "Emisyon, kapı yüksekliği"],
                        ["Ağaç/direk arkası hedef", "Engel aşımı", "Dizel/akülü eklemli", "Bom menzili"],
                    ],
                },
            },
            {
                baslik: "Makaslı yerine eklemli seçmenin maliyeti",
                paragraflar: [
                    "Eklemli platform, aynı yükseklikteki bir makaslı platforma göre genellikle daha yüksek günlük kiralama bedeline sahiptir çünkü mekanik olarak daha karmaşık ve daha güçlü bir makinedir. Bu farkı göze almanın gerekçesi nettir: hedefe düz yukarıdan ulaşılamıyorsa makaslı platform işi çözemez, ne kadar ucuz olursa olsun. Doğru soru 'hangisi ucuz' değil 'hangisi hedefe ulaşabiliyor' sorusudur.",
                    "Bazı işlerde ise ikisi de teknik olarak çalışabilir; bu durumda maliyet farkı devreye girer ve makaslı platform tercih edilir. Talebinizi verirken hedefin önündeki engelleri ve tesisin kendi saha kısıtlarını anlatmanız, doğru ve en ekonomik seçimi baştan yapmamızı sağlar.",
                ],
            },
            {
                baslik: "Kış ve mevsim penceresinde dış cephe işleri",
                paragraflar: [
                    "Eklemli platform ile yapılan dış cephe ve tabela işleri, hava koşullarına makaslı platform işlerinden daha duyarlıdır — hem rüzgâr sınırı hem uzun bomun zemine ilettiği yük nedeniyle. Bolu'da bu tür işler için en verimli pencere nisan-haziran ve eylül-ekim arasıdır; kış aylarında dış cephe eklemli platform işi yapılabilir ama zemin buzlanmasının ve rüzgârın kontrol edilmesi şarttır.",
                    "Kar öncesi tamamlanması gereken tabela ve cephe işlerinde, eylül ayı içinde makine gününü planlamanızı öneririz. Ekim sonuna doğru hem hava penceresi daralır hem bölgedeki talep yoğunlaşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tabelamızın önünde direk var; makaslı platform yeter mi?",
                cevap:
                    "Muhtemelen yetmez. Makaslı platform sepeti düz yukarı çıkardığı için önündeki engeli aşamaz. Eklemli platform ise bomunu yukarı ve yana bükerek engelin arkasından hedefe ulaşabilir. Tabelanızın önündeki engelin fotoğrafını ve yaklaşık mesafesini paylaşırsanız, hangi bom uzunluğunun yeterli olacağını netleştirebiliriz.",
            },
            {
                soru: "Otoyol kenarındaki tesisimize eklemli platform nasıl konumlanır?",
                cevap:
                    "Makine her koşulda tesisin kendi sahası içinden çalışır; yol trafiğine açık alanda, bankette veya emniyet şeridinde konumlandırılmaz. Sahanız dar ve hedef yola yakınsa, çözüm makineyi zorlamak değil daha uzun bomlu bir model seçerek erişim açısını değiştirmektir. Sahanızın genişliğini ve hedefin yola olan mesafesini paylaşırsanız doğru bom uzunluğunu önerebiliriz.",
            },
            {
                soru: "Kapalı sanayi holünde dizel eklemli kullanılabilir mi?",
                cevap:
                    "Kullanılmaz; kapalı alanlarda emisyon nedeniyle akülü eklemli platform tercih edilir. Holünüzün tavan yüksekliği ve kapı ölçüsü, uygun akülü modelin belirlenmesinde temel veridir. Hem iç hem dış cephe işi varsa, tek bir akülü modelin ikisini de karşılayıp karşılamayacağını değerlendirir, gerekiyorsa iki ayrı makine öneririz.",
            },
            {
                soru: "Rüzgârlı günde çalışma durur mu?",
                cevap:
                    "Üreticinin belirlediği rüzgâr hızı sınırı aşıldığında evet, çalışma durdurulur; bu bom uzadıkça daha hassas hâle gelen bir güvenlik kuralıdır. Açık sahada uzun bomlu bir iş planlarken hava durumunu önceden kontrol ederiz ve rüzgârlı bir gün öngörülüyorsa işi ertesi güne almanızı öneririz. Acil olmayan işlerde bu esneklik, hem güvenli hem verimli bir çalışma sağlar.",
            },
            {
                soru: "Bom açıkken zemin ne kadar sağlam olmalı?",
                cevap:
                    "Bom tam açıldığında makinenin ağırlık merkezi kayar ve zemine iletilen yük artar; bu yüzden konumlanacak zeminin düz ve makinenin ağırlığını taşıyacak sağlamlıkta olması gerekir. Yumuşak veya eğimli zeminlerde denge ayaklarının altına yük dağıtıcı plaka konulur. Sahanızın zemin cinsini ve varsa eğimini paylaşırsanız, gerekli önlemleri teslimat öncesi netleştiririz.",
            },
            {
                soru: "Kar öncesi cephe işlerimizi ne zaman planlamalıyız?",
                cevap:
                    "Eylül ayı, dış cephe ve tabela işleri için en doğru dönemdir; ekim ortasından sonrası hem hava koşulu hem makine bulunabilirliği açısından zorlaşır. Bu dönemde bekleyen bütün dış cephe kalemlerinizi listeleyip tek bir makine gününe toplamanızı öneririz — ayrı ayrı çağrılan işler ayrı nakliye demektir, tek güne toplanmış işler tek nakliyedir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. TEM Otoyolu kenarındaki tesis yoğunluğu ve otoyol trafiğinden ayrı çalışma alanı kuralı kamuya açık genel bilgi ve firma pratiği birleşimidir; bom tipi seçimi, rüzgâr sınırı ve mevsim penceresi planlaması firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Kartalkaya Kayak Bölgesi ve Otellerde İç Mekân Platform Kiralama",
        giris:
            "Bolu'nun yüksek kesimlerindeki Kartalkaya kayak bölgesi, ilin geri kalanından farklı bir bakım takvimine sahiptir: sezon başlamadan önce her konaklama tesisinin lobi, atrium, kapalı havuz, spor salonu ve ortak kullanım alanlarındaki yüksek tavan işleri bitmiş olmalıdır çünkü sezon açıldığında bu alanlar misafirle dolar ve platform çalışması artık mümkün değildir. İç mekân platform ihtiyacı burada standart bir depo bakımından farklı bir karaktere bürünür: tavan çoğunlukla dekoratif, zemin genellikle parke, mermer veya halı kaplıdır ve makinenin bu yüzeylere zarar vermeden çalışması beklenir. Aydınlatma armatürü değişimi, avize temizliği, cam tavan (varsa) kontrolü, havalandırma menfezi bakımı ve dekoratif tavan detaylarının onarımı bu tesislerdeki en sık tekrarlanan işlerdir. Bu sayfa, kayak bölgesindeki ve genel olarak Bolu'nun konaklama tesislerindeki iç mekân platform ihtiyacını, sezon dışı planlama mantığını ve misafirli alanda çalışmanın kurallarını anlatır.",
        maddeler: [
            {
                baslik: "Sezon öncesi pencere: neden ekim-kasım kritik",
                metin:
                    "Kayak bölgesindeki tesislerde bakım takvimi kar mevsiminin açılışına göre geriye doğru kurulur. Ekim ve kasım ayları, hem hava koşullarının makineyi zorlamadığı hem tesisin henüz yoğun doluluğa girmediği son penceredir. Bu dönemde planlanmayan bir iş, sezon ortasında ya hiç yapılamaz ya da misafir trafiğini büyük ölçüde kısıtlayarak yapılabilir. Bu yüzden konaklama tesislerine önerimiz, yıllık iç mekân bakım listesini eylül sonunda çıkarıp tek bir makine dönemine toplamalarıdır.",
            },
            {
                baslik: "Zemin koruması: parke, mermer ve halı",
                metin:
                    "Otel lobisi ve ortak alanlarda zemin genellikle hassas malzemelerle kaplıdır ve standart siyah lastikli bir makine iz bırakabilir. Bu tür alanlarda iz bırakmayan (beyaz dolgu) lastikli akülü makaslı platform kullanılır ve makinenin geçeceği güzergâha koruyucu örtü serilir. Halı kaplı alanlarda ek olarak makinenin ağırlığının halı altındaki zemine eşit dağılması için geniş taban plakaları tercih edilir. Bu hazırlık, teslimattan önce zemin tipine göre planlanır.",
            },
            {
                baslik: "Atrium ve yüksek tavanlı ortak alanlarda çalışma",
                metin:
                    "Otellerin lobi ve atrium bölümleri, mimari olarak yüksek ve genellikle dekoratif tavana sahiptir; bu tavanlardaki aydınlatma, avize ve dekoratif eleman bakımı hassasiyet ister. Akülü makaslı veya kompakt eklemli platform, sesiz çalışması ve emisyon üretmemesi nedeniyle bu alanlarda tercih edilir. Çalışma sırasında sepetin altındaki mobilya ve dekoratif eşyalar geçici olarak kaldırılır veya korumaya alınır — bu, tesisin kendi ekibiyle koordine edilen bir adımdır.",
            },
            {
                baslik: "Misafirli alanda çalışma alanı ayrımı",
                metin:
                    "Sezon içinde ya da tesis kısmen doluyken zorunlu bir iç mekân işi gerekiyorsa, çalışma alanı misafir hareketinden fiziksel olarak ayrılır ve mümkünse tesisin en sakin saatine — genellikle sabahın erken saatlerine — yazılır. Sepet açıkken çalışma alanının altından misafir geçirilmez ve alternatif bir geçiş güzergâhı tesis tarafından gösterilir. Bu düzen sağlanamıyorsa iş, tesisin uygun bulacağı bir sonraki döneme ertelenir.",
            },
            {
                baslik: "Gece bırakma noktası ve makine görünürlüğü",
                metin:
                    "Konaklama tesislerinde makinenin geceyi geçireceği nokta önemlidir; misafir erişimine kapalı, korunaklı bir alanda bırakılmalıdır. Çoğu otelde teknik alan, servis avlusu veya kapalı otopark bölümü bu iş için uygundur. Makineyi her akşam sahadan çıkarıp sabah tekrar getirmek hem ekonomik değildir hem gereksiz nakliye yaratır; bu yüzden gece bırakma noktasını teslimat öncesi netleştirmek, iş süresini kısaltan basit ama etkili bir adımdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Otel ve tesis alanına göre platform seçimi",
                paragraflar: [
                    "Tablo, konaklama tesislerindeki tipik iç mekân alanlarını ve buna uygun makine tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Zemin", "Makine tercihi", "Ek önlem"],
                    satirlar: [
                        ["Lobi / atrium", "Mermer / parke", "Akülü makaslı, iz bırakmayan lastik", "Zemin koruyucu örtü"],
                        ["Kapalı havuz alanı", "Seramik, nemli", "Akülü makaslı, kompakt", "Nem-elektrik güvenliği"],
                        ["Spor salonu / SPA", "Parke / özel kaplama", "Akülü makaslı", "Zemin koruyucu, mobilya kaldırma"],
                        ["Toplantı / balo salonu", "Halı", "Akülü makaslı, geniş taban", "Halı koruma plakası"],
                        ["Servis koridoru / teknik alan", "Beton", "Kompakt akülü makaslı", "Dar koridor ölçüsü"],
                    ],
                },
            },
            {
                baslik: "Sezon dışı bakımı tek makine dönemine toplamak",
                paragraflar: [
                    "Kayak bölgesindeki tesislerin çoğu, yıllık iç mekân bakım kalemlerini tek bir listede toplayıp sezon öncesi bir haftaya sığdırdığında hem maliyet hem koordinasyon açısından kazanır. Aydınlatma değişimi, avize temizliği, havalandırma menfezi kontrolü ve dekoratif tavan onarımı gibi işler aynı makine döneminde art arda yapılabilir; bu, ayrı ayrı çağrılan işlerin toplamından hem daha ucuz hem daha az kesintilidir.",
                    "Bu planlamayı yapabilmek için tesisin bakım sorumlusuyla erken bir tarihte — tercihen yaz sonunda — görüşmeyi öneririz. Erken planlayan tesis hem istediği tarihi bulur hem sezon başlamadan önceki en sakin dönemde çalışma imkânı elde eder.",
                ],
            },
            {
                baslik: "Kış aylarında dış-iç mekân işleri arasındaki denge",
                paragraflar: [
                    "Bolu'nun yüksek kesimlerinde kış boyunca dış cephe ve çatı işleri hava koşulları nedeniyle sınırlıdır, ama iç mekân işleri bu dönemde rahatlıkla yapılabilir. Bu, kış aylarının aslında iç mekân bakımı için elverişli bir dönem olduğu anlamına gelir — dış işlerin ertelendiği haftalarda iç mekân kalemlerini planlamak, makine ve ekip kapasitesini boşa çıkarmaz.",
                    "Kış döneminde bölgeye yapılan teslimatlarda tek değişken, Bolu Dağı geçişinin durumudur; bu yüzden kış aylarında saat değil gün taahhüdü verir, teslim sabahı güncel durumla saat teyidi yaparız. İç mekân işleri planlarken bir-iki günlük esneklik payı bırakmanız, kış lojistiğinin doğal bir parçasıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otelimizin mermer lobisinde platform kullanmak zemine zarar verir mi?",
                cevap:
                    "Doğru lastik ve hazırlıkla vermez. Standart siyah lastikli makineler mermer ve parke gibi hassas zeminlerde iz bırakabilir; bu yüzden bu tür alanlarda iz bırakmayan beyaz dolgu lastikli akülü makaslı platform kullanılır ve makinenin geçeceği güzergâha koruyucu örtü serilir. Zemininizin cinsini önceden paylaşırsanız, hazırlığı teslimattan önce tamamlarız ve sahada ek bir bekleme yaşanmaz.",
            },
            {
                soru: "Sezon başlamadan önce ne zaman rezervasyon yapmalıyız?",
                cevap:
                    "Eylül sonu ile ekim başı arasında planlamanızı öneririz. Bu dönem hem hava koşullarının uygun olduğu hem tesisin henüz yoğun doluluğa girmediği son penceredir. Geç kalınan taleplerde hem hava riski artar hem bölgedeki makine bulunabilirliği daralır çünkü aynı dönemde birçok tesis benzer bakımı planlar. Yıllık bakım listenizi yaz sonunda çıkarıp bize iletmeniz, size istediğiniz tarihi bulma şansını yükseltir.",
            },
            {
                soru: "Sezon içinde, tesis doluyken acil bir iç mekân işi yaptırabilir miyiz?",
                cevap:
                    "Yaptırabilirsiniz; koşul, çalışma alanının misafir hareketinden fiziksel olarak ayrılabilmesidir. Bu ayrım kurulamıyorsa iş, tesisin uygun bulacağı bir sonraki döneme ertelenir. Ayrım kurulabiliyorsa çalışma, tesisin en sakin saatine — genellikle sabahın erken saatlerine — yazılır ve alternatif bir geçiş güzergâhı gösterilir. Hangi seçeneğin uygun olduğunu, alanın planını ve misafir yoğunluğunuzu paylaştığınızda birlikte belirleriz.",
            },
            {
                soru: "Makine geceyi otelin içinde mi geçiriyor?",
                cevap:
                    "Bu, teslimattan önce birlikte kararlaştırılır. Makine, misafir erişimine kapalı, korunaklı bir alanda bırakılmalıdır — teknik alan, servis avlusu veya kapalı otopark bölümü çoğu tesiste bu iş için uygundur. Makineyi her akşam sahadan çıkarıp sabah tekrar getirmek ekonomik değildir; gece bırakma noktasının önceden belirlenmesi, iş süresini ve nakliye maliyetini düşürür.",
            },
            {
                soru: "Kapalı havuz alanında elektrikli makine kullanmak güvenli mi?",
                cevap:
                    "Doğru hazırlıkla güvenlidir. Kapalı havuz alanları nemli ortamdır ve makine seçiminde elektrik güvenliği öncelikli değerlendirilir; akülü modeller kullanılır ve makinenin elektrik bileşenleri nem koşuluna uygun olmalıdır. Zeminin ıslak olmadığından emin olunması, çalışma öncesi standart bir kontroldür. Havuz alanınızın nem ve havalandırma durumunu paylaşırsanız, uygun makineyi ve çalışma saatini birlikte netleştirebiliriz.",
            },
            {
                soru: "Kış aylarında Kartalkaya bölgesine makine ne kadar sürede ulaşır?",
                cevap:
                    "Kasım-mart döneminde saat taahhüdü vermeyiz; gün taahhüdü verir, teslim sabahı Bolu Dağı geçişinin güncel durumuyla saat teyidi yaparız. Bunun nedeni dürüstlüktür — geçiş koşulları günlük değişebilir ve sabah verilen bir saat taahhüdü tutulamayabilir. İç mekân işleri kış boyunca rahatlıkla yapılabildiği için, dış hava koşulları elverişsiz olsa bile içeride planlanan bakım programı aksamaz; sadece teslim saatinde bir-iki günlük esneklik bırakmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kartalkaya'nın Bolu'nun yüksek kesimlerindeki kayak bölgesi olması ve bölgedeki konaklama tesislerinin sezonluk doluluk düzeni kamuya açık genel bilgidir; sezon dışı bakım penceresi, zemin koruma yöntemi ve misafirli alanda çalışma ayrımı firma pratiğidir. Tesis adı, kapasite ve rakamsal iddia içermez.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Bolu'da Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "Bolu'daki sanayi holleri, depo yapıları ve üretim tesisleri büyük ölçüde çelik konstrüksiyon sistemle inşa edilir; bu yapı tipi hem yeni montaj hem sonraki bakım döneminde yüksekte çalışma gerektirir. Montaj aşamasında platform, çatı aşık bağlantıları, mahya detayları, cephe kaplama panelleri ve vinç rayı kurulumunda kullanılır — bu işler genellikle bina henüz tamamlanmamışken, zemin düzensiz ve geçici olduğu bir dönemde yapılır. Bakım aşamasında ise ihtiyaç değişir: aydınlatma, yangın algılama hattı, sprinkler bakımı ve cephe kontrolü gibi işler, artık tamamlanmış ve kullanımda olan bir yapının içinde yürütülür. Bolu'da bu iki dönem arasındaki fark, makine seçiminde de kendini gösterir — inşaat aşamasında zemine uyum sağlayan, bakım aşamasında ise iz bırakmayan ve sessiz çalışan makineler tercih edilir. Bu sayfa, çelik konstrüksiyon montajının platform ihtiyacını inşaat ve bakım dönemleri açısından ayrı ayrı ele alır.",
        maddeler: [
            {
                baslik: "İnşaat aşamasında düzensiz zemin",
                metin:
                    "Yapı henüz tamamlanmamışken saha zemini sıkıştırılmamış, moloz ve malzeme yığınlarıyla dolu olabilir. Bu koşulda tekerlekli standart platform yerine, düzensiz zeminde daha stabil çalışan eklemli veya paletli model tercih edilir. Denge ayakları açılacaksa altlarına yük dağıtıcı plaka konulması, çökme riskini önleyen temel bir adımdır. Zemin durumu teslim öncesi fotoğrafla değerlendirilir.",
            },
            {
                baslik: "Çatı aşık ve mahya montajında yükseklik-erişim dengesi",
                metin:
                    "Çelik konstrüksiyon çatısındaki aşık bağlantıları ve mahya detayları, hem yükseklik hem erişim açısı gerektirir; bu iş genellikle eklemli platformla çözülür çünkü sepet, çatı eğimine göre farklı açılardan yaklaşabilmelidir. Çatı henüz kapatılmamışsa açık kirişler arasında çalışma dikkat gerektirir ve makine güzergâhı önceden planlanır — kirişin altına veya yakınına yanlış konumlanma, hem makineye hem yapıya risk oluşturur.",
            },
            {
                baslik: "Vinç rayı ve köprü vinç montajı",
                metin:
                    "Sanayi hollerinde köprü vinç sistemi, üretim başlamadan önce monte edilir ve bu iş çatı altı seviyesinde uzun süreli platform kullanımı gerektirir. Vinç rayı montajı hassas ölçü kontrolü içerdiği için makine, aynı noktada uzun süre sabit kalabilmelidir; bu nedenle stabil ve geniş sepetli modeller tercih edilir. İş süresi genellikle günler sürdüğü için makine sahada bırakılır ve günlük değil haftalık kiralama düzeni kurulur.",
            },
            {
                baslik: "Bakım döneminde tamamlanmış yapı içinde çalışma",
                metin:
                    "Yapı tamamlanıp kullanıma girdikten sonra platform ihtiyacı bakıma döner: aydınlatma armatürü değişimi, yangın algılama sensör kontrolü, sprinkler hattı bakımı, cephe kontrolü. Bu dönemde saha artık düzenli ve genellikle üretimde olduğu için makine, iz bırakmayan lastikli akülü model olarak seçilir ve çalışma, üretim akışını en az etkileyecek saatlere yazılır.",
            },
            {
                baslik: "Cephe kaplama ve panel işlerinde dış erişim",
                metin:
                    "Çelik konstrüksiyon binaların dış cephe kaplaması — sandviç panel, trapez sac — montaj sonrası da onarım gerektirebilir; rüzgâr veya darbe sonucu deforme olan panel değişimi buna örnektir. Bu işler binanın dışından yapılır ve eklemli platform, panelin bulunduğu yüksekliğe ve açıya göre konumlanır. Bina çevresindeki zemin düzse standart eklemli platform yeterlidir; düzensizse paletli model tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İnşaat ve bakım dönemine göre makine seçimi",
                paragraflar: [
                    "Tablo, çelik konstrüksiyon yapılarda işin hangi aşamasında hangi makine tipinin tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["İş dönemi", "Tipik iş", "Zemin durumu", "Makine tercihi"],
                    satirlar: [
                        ["İnşaat / montaj", "Aşık, mahya, cephe panel", "Düzensiz, geçici", "Eklemli / paletli"],
                        ["Vinç rayı montajı", "Köprü vinç kurulumu", "Kısmen tamamlanmış beton", "Geniş sepetli, stabil"],
                        ["Bakım (kullanımda)", "Aydınlatma, sprinkler", "Tamamlanmış beton", "Akülü makaslı"],
                        ["Cephe onarımı", "Panel değişimi", "Bina çevresi, açık", "Eklemli (dizel/akülü)"],
                        ["Çatı altı kontrol", "Yangın algılama, aspiratör", "Kapalı, düz zemin", "Akülü eklemli"],
                    ],
                },
            },
            {
                baslik: "Montaj takvimine göre kiralama süresi planlama",
                paragraflar: [
                    "Çelik konstrüksiyon montajında platform ihtiyacı nadiren tek günlüktür; aşık montajından cephe kaplamasına kadar birden fazla iş kalemi sırayla ilerler ve her biri platform gerektirebilir. Bu yüzden inşaat aşamasındaki taleplerde günlük kiralama yerine haftalık veya montaj süresine bağlı düzen daha ekonomiktir — makine sahada kalır, iş kalemleri sırayla tamamlanır ve her aşama için ayrı sevkiyat gerekmez.",
                    "İnşaat takviminizi paylaştığınızda, hangi haftalarda platforma ihtiyaç duyacağınızı birlikte planlayabiliriz; bu, hem makine bulunabilirliğini garanti eder hem inşaat programınızın aksamamasını sağlar.",
                ],
            },
            {
                baslik: "Kış aylarında açık şantiyede montaj kısıtları",
                paragraflar: [
                    "Henüz kapatılmamış bir çelik konstrüksiyon yapıda kış ayında çalışmak, hem hava koşulu hem zemin açısından ek risk taşır. Kar ve buzlanma, şantiye zeminini kaygan hâle getirir; rüzgâr, açık iskelet yapıda platformun rüzgâr sınırına daha çabuk ulaşmasına neden olur. Bu koşullarda çalışma, havanın elverişli olduğu saatlere sıkıştırılır ve zemin, makine konumlanmadan önce kontrol edilir.",
                    "Mümkünse montaj takviminizde çatı kapatma işini kar mevsimi öncesine almanızı öneririz; kapalı bir yapıda hem iç mekân işleri hem kış ayları boyunca sürdürülebilir bakım çalışmaları çok daha az kısıtla ilerler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Henüz tamamlanmamış şantiyede platform güvenli mi?",
                cevap:
                    "Doğru makine ve zemin hazırlığıyla evet. İnşaat aşamasındaki düzensiz zeminlerde standart tekerlekli platform yerine eklemli veya paletli model tercih edilir; denge ayaklarının altına yük dağıtıcı plaka konulur. Açık kirişler arasında çalışılacaksa güzergâh önceden planlanır. Şantiyenizin o anki zemin durumunu fotoğrafla paylaşırsanız, uygun makine ve güvenlik önlemlerini teslimat öncesi netleştiririz.",
            },
            {
                soru: "Vinç rayı montajı için platform ne kadar süre sahada kalmalı?",
                cevap:
                    "Bu, rayın uzunluğuna ve ölçü hassasiyetine bağlıdır; vinç rayı montajı genellikle günler süren, tek bir yerde sabit çalışma gerektiren bir iştir. Bu tür işlerde günlük kiralama yerine haftalık düzen daha ekonomiktir çünkü makine sahada kalır ve iş bittiğinde tek seferde geri alınır. Montaj planınızı paylaştığınızda, gerçekçi bir süre tahmini ve buna uygun kiralama düzeni önerebiliriz.",
            },
            {
                soru: "Tamamlanmış üretim tesisimizde bakım için üretimi durdurmalı mıyız?",
                cevap:
                    "Genellikle durdurmanız gerekmez. Bakım aşamasında kullanılan akülü makaslı platform sessiz çalışır ve zemine iz bırakmaz; bu yüzden çalışma, üretim akışının en az etkilendiği saatlere veya bölgelere yazılabilir. Tesisinizin hangi saatlerde daha sakin olduğunu paylaşırsanız, bakım programını üretiminizi kesmeden kurabiliriz.",
            },
            {
                soru: "Cephe panelinde hasar var; eklemli platform mu makaslı mı gerekir?",
                cevap:
                    "Panel binanın dışındaysa ve zemin bina çevresinde düzse eklemli platform tercih edilir çünkü sepeti hem yukarı hem yana hareket ettirerek panelin tam önüne konumlanabilir. Bina çevresindeki zemin düzensizse paletli eklemli model gerekir. Hasarın yerini ve bina çevresindeki zemin durumunu paylaşırsanız, doğru makineyi ve konumlandırma planını netleştirebiliriz.",
            },
            {
                soru: "Kışın açık şantiyede montaj işine devam edebilir miyiz?",
                cevap:
                    "Edebilirsiniz ama planı farklı kurmak gerekir. Kar ve buzlanma zemin güvenliğini, rüzgâr ise açık iskelet yapıda platformun çalışma sınırını etkiler. Çalışma, havanın elverişli olduğu saatlere sıkıştırılır ve zemin her seferinde kontrol edilir. Acil olmayan montaj kalemlerinde önerimiz, mümkünse çatı kapatma işini kış öncesine almanız ve kalan işleri bahar penceresine bırakmanızdır.",
            },
            {
                soru: "Aynı şantiyede birden fazla iş kalemi için tek makine yeter mi?",
                cevap:
                    "Çoğu zaman yeter; aşık montajı, mahya detayı ve cephe panel kontrolü benzer yükseklik bandındaysa tek makine dönemine toplanabilir. Dikkat edilecek nokta, işlerin farklı erişim açısı istemesidir — çatı içi bir iş ile bina dışından yapılacak bir cephe işi genellikle farklı makine tipi gerektirir. İnşaat takviminizdeki iş kalemlerini paylaşırsanız, hangilerinin tek makineyle hangilerinin ayrı sınıfla çözüleceğini birlikte belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'daki sanayi holü ve depo yapılarının çelik konstrüksiyon inşa tipi kamuya açık genel bilgidir; inşaat-bakım dönemi ayrımı, montaj takvimine göre kiralama süresi planlaması ve kış şantiyesi kısıtları firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Bolu'da Tarım ve Silo Sahası Platform Kiralama",
        giris:
            "Bolu'nun kırsal kesimindeki tarımsal üretim, tahıl ve yem sektörü etrafında yoğunlaşır; bu üretim kolunun platform ihtiyacı, il genelindeki sanayi tesislerinden farklı bir profile sahiptir. Yem üretim ve depolama üniteleri, tahıl silobaşları, kurutma tesisleri ve çiftlik yapıları — bu tesislerin ortak özelliği açık sahada, çoğunlukla toprak veya stabilize zeminde bulunmaları ve mevsime göre değişen bir çalışma ritmine sahip olmalarıdır. Silo üstü ekipman bakımı — seviye sensörleri, filtre üniteleri, taşıma helezonları — yılın belirli dönemlerinde, genellikle hasat öncesi veya sonrası boş kalan pencerede yapılır. Bu sayfa, tarım ve silo sahalarındaki tipik yüksek nokta işlerini, açık saha zemininin makine seçimine etkisini ve mevsim penceresinin bu tesislerdeki bakım takvimini nasıl belirlediğini anlatır.",
        maddeler: [
            {
                baslik: "Silo üstü ekipman bakımında rüzgâr ve yükseklik",
                metin:
                    "Tahıl ve yem silolarının üst kısmındaki kapaklar, seviye sensörleri ve filtre üniteleri, çoğunlukla açık ve rüzgâra maruz bir noktadadır. Bu yükseklikte rüzgâr hızı yerden hissedilenin üzerine çıkabilir; makinenin çalışma sınırı aşılmadan önce hava durumu kontrol edilir. Silo çevresindeki zemin genellikle sabit betondur ama yaklaşım yolu toprak olabilir; bu iki bölümün zemin durumu ayrı ayrı değerlendirilir.",
            },
            {
                baslik: "Taşıma helezonu ve galeri hattında dar erişim",
                metin:
                    "Silo kompleksleri arasındaki taşıma helezonları ve galeri hatları, genellikle dar ve yerden yüksek borularla bağlanır. Bu hatların bakımı, standart bir platformun ulaşamayacağı açılarda gerekebilir; bu durumda eklemli platform veya dar alanlar için örümcek platform tercih edilir. Galeri hattının altındaki zemin, makinenin ağırlığını taşıyıp taşımadığı açısından önceden kontrol edilir.",
            },
            {
                baslik: "Kurutma tesislerinde sıcak yüzey ve bekleme",
                metin:
                    "Tahıl kurutma üniteleri, çalışırken yüksek sıcaklık üretir ve bu üniteler etrafındaki platform çalışması, ünitenin durdurulup soğumasını bekler. Sıcak yüzeylerin yanında platform konumlandırılmaz. Planlamada belirleyici olan, tesisin kurutma ünitesini hangi gün dinlendirdiğidir — makine günü bu takvime yazılır ve iş soğuma penceresine sığdırılır.",
            },
            {
                baslik: "Çiftlik ve ahır yapılarında çatı ve havalandırma",
                metin:
                    "Büyük ölçekli çiftlik ve ahır yapılarında çatı altı havalandırma fanları, aydınlatma hatları ve çatı oluğu bakımı düzenli olarak gerekir. Bu yapılar genellikle geniş açıklıklı ve orta yükseklikte olduğu için akülü veya dizel makaslı platform çoğu zaman yeterlidir. Hayvan bulunan bölümlerde çalışma, hayvan sağlığı ve iş güvenliği açısından mümkünse boş dönemlere denk getirilir.",
            },
            {
                baslik: "Hasat mevsimi ve makine bulunabilirliği",
                metin:
                    "Tarım sektöründe bakım talebi hasat öncesi ve sonrası dönemlerde yoğunlaşır — hasat öncesi silo ve kurutma tesisi hazırlığı, hasat sonrası ise yıpranan ekipmanın kontrolü. Bu dönemlerde bölgedeki makine talebi genel olarak artar; erken planlama, istediğiniz tarihte makine bulma şansınızı belirgin biçimde yükseltir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım ve silo tesislerinde alan-makine eşlemesi",
                paragraflar: [
                    "Tablo, tarımsal üretim tesislerindeki tipik çalışma alanlarını ve uygun makine tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Çalışma alanı", "Zemin", "Makine tercihi", "Belirleyici koşul"],
                    satirlar: [
                        ["Silo üstü ekipman", "Beton platform", "Akülü/dizel eklemli", "Rüzgâr sınırı"],
                        ["Taşıma helezonu galerisi", "Dar, yüksek", "Eklemli / örümcek", "Erişim açısı"],
                        ["Kurutma tesisi çevresi", "Beton", "Akülü eklemli", "Soğuma penceresi"],
                        ["Çiftlik / ahır çatısı", "Geniş açıklık", "Akülü/dizel makaslı", "Hayvan bulunma durumu"],
                        ["Açık saha yaklaşım yolu", "Toprak / stabilize", "Paletli tercih", "Yağış sonrası zemin"],
                    ],
                },
            },
            {
                baslik: "Hasat öncesi ve sonrası bakım listesini birleştirmek",
                paragraflar: [
                    "Tarımsal tesislerde bakım ihtiyacı genellikle birden fazla küçük iş kaleminden oluşur: silo kapağı kontrolü, aydınlatma değişimi, oluk temizliği, sensör bakımı. Bu kalemleri ayrı ayrı çağırmak yerine tek bir makine gününe toplamak, hem nakliye maliyetini hem toplam süreyi düşürür. Hasat öncesi dönemde bu planlamayı yapmak özellikle değerlidir çünkü hasat başladıktan sonra tesis makine kabul edecek zaman bulamaz.",
                    "Bize önerimiz, yıllık bakım listenizi hasat takviminize göre iki ayrı pencereye bölmenizdir: hasat öncesi hazırlık ve hasat sonrası kontrol. Bu iki pencere dışında kalan işler, genellikle acil durumlar dışında ertelenebilir.",
                ],
            },
            {
                baslik: "Açık sahada zemin hazırlığı ve mevsim etkisi",
                paragraflar: [
                    "Tarım tesislerinin çoğu açık sahada, toprak veya stabilize zeminde bulunur ve bu zemin yağıştan doğrudan etkilenir. Kuru bir zeminde standart tekerlekli platform rahatlıkla çalışırken, yağış sonrası yumuşamış bir zeminde paletli veya arazi tipi model gerekebilir. Bu yüzden açık saha taleplerinde son günlerdeki hava durumunu ve zeminin görünür durumunu sormamız standart bir uygulamadır.",
                    "Kış aylarında donmuş zemin bazen yumuşak zeminden daha stabil olabilir ama bu durumda da buzlanma riski değerlendirilir. Mevsim ne olursa olsun, zeminin o günkü hâlini teslimattan hemen önce sahada birlikte kontrol etmeyi tercih ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo üstündeki sensöre platform ulaşabilir mi?",
                cevap:
                    "Çoğunlukla ulaşabilir; belirleyici olan siloya yaklaşım zemininin sağlamlığı ve o gün rüzgâr hızının makinenin çalışma sınırının altında kalmasıdır. Silo çevresi genellikle betondur ve bu bölümde standart makaslı veya eklemli platform rahatlıkla çalışır. Sensörün siloya göre konumunu ve yaklaşık yüksekliğini paylaşırsanız, doğru makine sınıfını netleştirebiliriz.",
            },
            {
                soru: "Taşıma helezonu hattına hangi makine gider?",
                cevap:
                    "Hattın yüksekliğine ve altındaki erişim genişliğine bağlıdır. Standart bir platform hattın altına sığmıyorsa veya erişim açısı dar geliyorsa eklemli platform ya da dar alanlar için üretilmiş örümcek platform tercih edilir. Hattın altındaki zeminin makinenin ağırlığını taşıyıp taşımadığı da önceden kontrol edilir. Hattın fotoğrafını ve yaklaşık ölçüsünü paylaşırsanız uygun makineyi önerebiliriz.",
            },
            {
                soru: "Kurutma ünitesi çalışırken yanında iş yapılabilir mi?",
                cevap:
                    "Yapılamaz; sıcak yüzeylerin yanında platform konumlandırılmaz, bu tartışmaya açık bir kural değildir. Ünitenin durdurulup soğumaya bırakılması gerekir. Uygulamada bu, makine gününün tesisin kendi kurutma takvimine yazılması demektir — çoğu tesis üniteyi belirli aralıklarla zaten dinlendirir ve iş bu pencereye sığdırılabilir. Soğuma sonrası çalışmaya ne zaman başlanabileceğini bize bildirirseniz, makineyi o saate göre göndeririz.",
            },
            {
                soru: "Hayvan bulunan ahırda platform çalışması hayvanları rahatsız eder mi?",
                cevap:
                    "Akülü modeller sessiz çalıştığı için etkisi sınırlıdır ama yine de mümkünse çalışmayı hayvan bulunmayan veya en az yoğun olduğu bölüme ya da döneme yazmanızı öneririz. Dizel makine kullanılması gereken durumlarda ise egzoz ve gürültü nedeniyle hayvanların geçici olarak uzaklaştırılması gerekebilir. Ahırınızın düzenini ve hayvan yoğunluğunu paylaşırsanız, en uygun çalışma planını birlikte belirleriz.",
            },
            {
                soru: "Yağmur sonrası açık sahaya makine gelebilir mi?",
                cevap:
                    "Zeminin durumuna bağlı. Yağış sonrası yumuşamış toprak veya stabilize zeminde standart tekerlekli platform zorlanabilir; bu koşulda paletli veya arazi tipi model tercih edilir. Zemin çok yumuşaksa çalışma, zeminin kısmen kuruduğu bir sonraki güne ertelenebilir. Sahanızın son durumunu fotoğrafla paylaşırsanız, uygun makineyi veya gerekiyorsa alternatif tarihi önerebiliriz.",
            },
            {
                soru: "Hasat döneminde makine bulmak zor mu?",
                cevap:
                    "Hasat öncesi ve sonrası dönemlerde bölgedeki talep genel olarak arttığı için, son dakika taleplerinde istediğiniz tarihi bulmak zorlaşabilir. Bu yüzden yıllık bakım listenizi hasat takviminize göre erken planlamanızı öneririz — hasat öncesi hazırlık ve hasat sonrası kontrol için ayrı ayrı birer pencere belirlemek, hem makine bulunabilirliğini garanti eder hem işlerinizi hasat telaşına denk getirmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu kırsalının tahıl ve yem üretimine dayalı tarımsal dokusu kamuya açık genel bilgidir; silo-galeri erişim planlaması, hasat takvimine göre bakım penceresi ve açık saha zemin değerlendirmesi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Bolu'da Enerji ve Aydınlatma Bakım Platformu Kiralama",
        giris:
            "Bolu'da enerji ve aydınlatma bakımı iki farklı hat üzerinde yoğunlaşır: TEM Otoyolu ve D-100 kenarındaki tesislerin tabela-kanopi aydınlatması, ve şehir merkezi ile ilçelerdeki sokak-cadde aydınlatma direkleri. İkisi de düzenli bakım gerektirir ama koşulları farklıdır. Yol kenarındaki aydınlatma ve tabela işlerinde çalışma alanı trafiğe yakındır ve makine her koşulda tesisin kendi sahası içinden veya trafiğe kapatılmış bir bölümden çalışır. Şehir içi direk ve hat bakımında ise mesele daha çok erişimdir — dar sokaklar, park hâlindeki araçlar ve yaya trafiği, makinenin konumlandırılmasını etkiler. Bu sayfa, Bolu'daki enerji ve aydınlatma bakım işlerinin iki tipik profilini, güvenlik önlemlerini ve mevsime göre çalışma penceresini anlatır.",
        maddeler: [
            {
                baslik: "Yol kenarı tabela ve kanopi aydınlatması",
                metin:
                    "Otoyol ve D-100 kenarındaki tesislerin tabela, totem ve kanopi aydınlatması, işletmenin görünürlüğü açısından ertelenemez bir bakım kalemidir. Bu işlerde yükseklik çoğunlukla 12-18 metre bandına çıkar ve eklemli platform, sepeti armatüre yandan yaklaştırabildiği için tercih edilir. Çalışma, trafiğin en seyrek olduğu saate — genellikle sabahın erken saatlerine — yazılır ve makine tesisin kendi sahası içinde konumlanır.",
            },
            {
                baslik: "Şehir içi sokak aydınlatma direği bakımı",
                metin:
                    "Merkez ve ilçelerdeki sokak aydınlatma direkleri genellikle 6-10 metre bandındadır ve bu yükseklikte kompakt makaslı veya küçük eklemli platform yeterlidir. Dar sokaklarda park hâlindeki araçlar makinenin konumlanmasını kısıtlayabilir; bu yüzden çalışma öncesi geçici park yasağı veya trafik yönlendirmesi gerekebilir. Bu düzenleme, ilgili kurumla önceden koordine edilir.",
            },
            {
                baslik: "Enerji santrali ve trafo çevresinde güvenlik",
                metin:
                    "Enerji üretim veya dağıtım tesislerinin çevresinde yüksekte çalışma, tesisin kendi elektrik güvenliği prosedürüne tabidir. Gerilim hattına güvenli mesafe, iş izni ve gerekiyorsa enerji kesintisi bu tür işlerde standart uygulamadır. Makine, canlı hatlara belirlenen güvenlik mesafesinin dışında konumlanır ve bu mesafe tesisin kendi teknik ekibiyle birlikte belirlenir.",
            },
            {
                baslik: "Mevsime göre dış aydınlatma bakım penceresi",
                metin:
                    "Dış aydınlatma bakımı için en verimli dönem nisan-haziran ve eylül-ekim arasıdır; bu aylarda hava koşulları makineyi zorlamaz ve gün ışığı işin tek güne sığmasını kolaylaştırır. Kış öncesi — eylül-ekim — dış aydınlatma kontrolünün tamamlanması özellikle önemlidir çünkü kar mevsiminde hem çalışma zorlaşır hem aydınlatma eksikliği güvenlik riski oluşturur.",
            },
            {
                baslik: "Birden fazla direk veya armatürü tek makine gününe toplamak",
                metin:
                    "Şehir içi veya tesis çevresindeki birden fazla aydınlatma noktası, aynı makine gününde sırayla ziyaret edilebilir. Bu, her direk için ayrı sevkiyat yapmaktan hem daha ekonomik hem daha hızlıdır. Talep verirken bakım gerektiren tüm noktaların listesini ve konumlarını paylaşmanız, tek günlük bir rota planlamamızı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma noktası tipine göre makine seçimi",
                paragraflar: [
                    "Tablo, Bolu'daki tipik aydınlatma bakım noktalarını ve uygun makine tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "Tipik yükseklik", "Makine tercihi", "Dikkat edilecek koşul"],
                    satirlar: [
                        ["Yol kenarı tabela/kanopi", "12-18 m", "Dizel eklemli", "Trafik saati, rüzgâr"],
                        ["Şehir içi sokak direği", "6-10 m", "Kompakt makaslı/eklemli", "Park alanı, dar sokak"],
                        ["Sanayi tesisi dış aydınlatma", "8-14 m", "Akülü/dizel makaslı", "Tesis sahası içi konumlanma"],
                        ["Trafo/santral çevresi", "Değişken", "Eklemli, güvenli mesafeli", "Elektrik güvenlik prosedürü"],
                        ["Spor sahası aydınlatma direği", "10-16 m", "Dizel eklemli", "Saha kullanım takvimi"],
                    ],
                },
            },
            {
                baslik: "Kar öncesi aydınlatma kontrolü neden erken planlanmalı",
                paragraflar: [
                    "Dış aydınlatma bakımı, kar mevsiminden hemen önce özel bir öneme sahiptir çünkü kısalan gün ışığında aydınlatma eksikliği doğrudan güvenlik sorunu doğurur. Eylül ayı içinde tamamlanan bir kontrol, kış boyunca beklenmedik arıza riskini büyük ölçüde azaltır. Ekim sonuna doğru hem hava penceresi daralır hem bölgedeki talep yoğunlaşır; erken planlayan işletme hem istediği tarihi bulur hem daha rahat koşulda çalıştırır.",
                    "Bu dönemde önerimiz, bakım gerektiren tüm aydınlatma noktalarınızı tek bir listede toplayıp tek makine gününe yazmanızdır. Ayrı ayrı çağrılan işler ayrı nakliye demektir; tek güne toplanmış işler tek nakliyedir ve toplam maliyet belirgin biçimde düşer.",
                ],
            },
            {
                baslik: "Elektrik güvenliği: bizim tarafımız ve sizin tarafınız",
                paragraflar: [
                    "Enerji hattı yakınında çalışırken güvenlik iki taraflı bir sorumluluktur. Bizim tarafımızda, operatörün güvenli mesafe kurallarını bilmesi ve makinenin bu mesafenin dışında konumlanması vardır. Sizin tarafınızda ise gerilim hattının güncel durumunu ve gerekiyorsa kesinti planını bize önceden bildirmeniz vardır.",
                    "Bu iki tarafın birlikte çalışması, işi hem güvenli hem hızlı kılar. Enerji hattı yakınındaki bir işte tesisin kendi elektrik ekibiyle önceden görüşmemizi isterseniz, bu koordinasyonu sizin adınıza da yürütebiliriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yol kenarındaki tabelamızın aydınlatmasını ne zaman yaptırmalıyız?",
                cevap:
                    "Nisan-haziran ve eylül-ekim arasındaki dönemler en verimlisidir; hava koşulları makineyi zorlamaz ve gün ışığı işin tek güne sığmasını kolaylaştırır. Kış öncesi kontrolü özellikle öneririz çünkü kısalan gün ışığında aydınlatma eksikliği hem güvenlik hem görünürlük açısından sorun yaratır. Tabelanızın yüksekliğini ve konumunu paylaşırsanız uygun tarihi ve makine sınıfını birlikte netleştirebiliriz.",
            },
            {
                soru: "Dar sokağımızda aydınlatma direği bakımı nasıl yapılıyor?",
                cevap:
                    "Dar sokaklarda öncelikle makinenin konumlanabileceği bir nokta belirlenir; gerekiyorsa geçici park yasağı veya trafik yönlendirmesi ilgili kurumla koordine edilir. Direğin yüksekliği çoğunlukla 6-10 metre bandında olduğu için kompakt makaslı veya küçük eklemli platform yeterlidir. Sokağınızın genişliğini ve park durumunu paylaşırsanız, uygun makine ve çalışma saatini netleştirebiliriz.",
            },
            {
                soru: "Trafo çevresinde çalışmak güvenli mi?",
                cevap:
                    "Doğru mesafe ve prosedürle güvenlidir. Enerji hattı yakınında çalışma, tesisin kendi elektrik güvenliği prosedürüne tabidir; gerekli güvenlik mesafesi ve gerekiyorsa enerji kesintisi tesisin teknik ekibiyle önceden belirlenir. Makine bu mesafenin dışında konumlanır. Çalışacağınız noktanın enerji hattına yakınlığını ve tesisinizin prosedürünü bize iletirseniz, teslimat öncesi gerekli koordinasyonu birlikte yaparız.",
            },
            {
                soru: "Birden fazla aydınlatma direği için ayrı ayrı mı sevkiyat yapılıyor?",
                cevap:
                    "Gerekmiyor; aynı bölgedeki birden fazla direk, tek makine gününde sırayla ziyaret edilebilir. Bu hem nakliye maliyetini düşürür hem toplam süreyi kısaltır. Talebinizi verirken bakım gerektiren tüm noktaların listesini ve konumlarını paylaşırsanız, tek günlük bir rota planlayıp size sunabiliriz.",
            },
            {
                soru: "Kış aylarında dış aydınlatma bakımı yapılabilir mi?",
                cevap:
                    "Yapılabilir ama planı farklı kurmak gerekir. Kışın dış aydınlatma işi yapılacaksa çalışma zemininin kar ve buzdan temizlenmiş olması ve rüzgâr hızının makinenin çalışma sınırının altında kalması aranır. Bolu'da kış günleri kısa olduğu için sekiz saatlik bir işi tek güne sıkıştırmak gerçekçi olmayabilir. Acil olmayan işlerde önerimiz bahar penceresini beklemektir; acil arızalarda ise koşulların elverdiği ilk fırsatta müdahale ederiz.",
            },
            {
                soru: "Spor sahası aydınlatma direğine bakım için saha kullanımdayken çalışılabilir mi?",
                cevap:
                    "Sahanın kullanım takvimine bağlıdır. Aktif kullanım sırasında direk çevresinde platform çalışması güvenlik açısından uygun değildir; bu yüzden çalışma, sahanın boş olduğu saatlere veya günlere yazılır. Sahanızın haftalık kullanım programını paylaşırsanız, en uygun boş pencereyi birlikte belirleriz ve maç veya antrenman programınızı etkilemeyecek bir tarih öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. TEM/D-100 kenarındaki tesis yoğunluğu ve Bolu'nun kış aylarında kısalan gün ışığı kamuya açık genel bilgidir; mevsim penceresi planlaması, çoklu direk rotası ve elektrik güvenliği koordinasyonu firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Bolu'da Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Operatörlü mü operatörsüz mü kiralama sorusu, Bolu'da özellikle iki nedenle sık gündeme gelir: kış aylarındaki geçiş ve zemin koşullarının deneyimli kullanım gerektirmesi, ve ilçelerdeki birçok tesiste yüksekte çalışma belgeli personelin sınırlı olması. Yasal çerçeve nettir — yüksekte çalışma platformu kullanacak kişinin ilgili eğitimi almış olması gerekir. Belgeli personeliniz varsa makine size teslim edilir ve kısa bir kullanım-güvenlik aktarımı yapılır; yoksa operatörlü kiralama önerilir. Bolu'nun kendine özgü koşulları bu kararı biraz daha somutlaştırır: kış aylarında buzlu zeminde denge ayağı açmak, dar atölye kapılarından makine geçirmek veya kayak bölgesindeki hassas iç mekânlarda çalışmak, tecrübe gerektiren işlerdir ve bu tür işlerde operatörlü kiralama hem güvenlik hem verim açısından tercih edilir. Bu sayfa, hangi durumlarda operatörlü kiralamanın daha doğru olduğunu ve operatörsüz kiralamada beklenen şartları anlatır.",
        maddeler: [
            {
                baslik: "Yasal çerçeve: belge ve eğitim şartı",
                metin:
                    "Yüksekte çalışma platformu kullanacak kişinin, ilgili iş güvenliği eğitimini almış ve bunu belgeleyebiliyor olması gerekir. Bu, hem operatörün hem çalışma alanındaki diğer kişilerin güvenliği için zorunludur. Belgeli personeliniz varsa makineyi operatörsüz kiralayabilirsiniz; teslim sırasında makinenin kumanda düzeni ve güvenlik noktaları sahada birlikte gözden geçirilir.",
            },
            {
                baslik: "Kış koşullarında operatörlü tercih",
                metin:
                    "Kar ve buzlu zeminde platform çalıştırmak, standart koşullardaki kullanımdan farklı bir dikkat gerektirir; denge ayağının nereye açılacağı, zeminin taşıma kapasitesinin nasıl değerlendirileceği gibi kararlar tecrübe ister. Kış döneminde dış saha işlerinde, özellikle ilk kez çalışacağınız bir makine tipiyse, operatörlü kiralamayı öneririz. Bu, hem işin güvenli tamamlanmasını hem gecikme riskinin azalmasını sağlar.",
            },
            {
                baslik: "Dar erişim ve hassas alanlarda operatör tecrübesi",
                metin:
                    "Örümcek platform kurulumu, dar atölye kapılarından makine geçirme veya kayak bölgesindeki otellerin hassas iç mekânlarında zemin koruması gibi işler, standart bir platform kullanımından daha fazla teknik bilgi gerektirir. Bu tür işlerde ilk kullanımda operatörlü kiralamayı öneririz; ekibiniz süreci tecrübeyle öğrendikten sonra sonraki kiralamalarda operatörsüz seçeneğe geçebilirsiniz.",
            },
            {
                baslik: "Uzun süreli kiralamada operatör düzeni",
                metin:
                    "Haftalık veya aylık süren kiralamalarda operatörlü hizmet farklı biçimlerde kurulabilir: operatör her gün sahada kalabilir veya belirli aralıklarla kontrol amaçlı gelebilir. Hangi düzenin uygun olduğu, işin sürekliliğine ve tesisin kendi ekip yapısına bağlıdır. Bu detay, kiralama süresi netleştiğinde birlikte planlanır.",
            },
            {
                baslik: "Operatör değişimi ve marka-model aktarımı",
                metin:
                    "Bolu'daki tesislerin çoğu belirli marka ve kumanda düzenine alışkındır; farklı bir modelle çalışacaksanız, operatörsüz kiralamada bile teslim sırasındaki kısa aktarımı atlamamanızı öneririz. Kumanda düzeni markadan markaya farklılık gösterebilir ve bu farkı bilmeden yapılan kullanım, işi yavaşlatabilir veya güvenlik riski oluşturabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hangi durumda operatörlü, hangi durumda operatörsüz",
                paragraflar: [
                    "Tablo, sahada sık karşılaştığımız senaryolara göre önerdiğimiz kiralama şeklini özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Önerilen düzen", "Gerekçe"],
                    satirlar: [
                        ["Belgeli personel, standart makine", "Operatörsüz", "Personel deneyimli, kısa aktarım yeterli"],
                        ["Belgeli personel yok", "Operatörlü", "Yasal zorunluluk"],
                        ["Kış döneminde dış saha", "Operatörlü", "Zemin ve denge kararı tecrübe ister"],
                        ["Örümcek platform / dar erişim", "İlk kullanımda operatörlü", "Kurulum teknik bilgi ister"],
                        ["Otel/kayak bölgesi iç mekân", "Operatörlü tercih", "Zemin koruma ve hassas çalışma"],
                    ],
                },
            },
            {
                baslik: "Operatörlü kiralamanın işleyişi",
                paragraflar: [
                    "Operatörlü kiralamada makineyle birlikte deneyimli bir operatör sahaya gelir; iş boyunca makineyi o yönetir, siz işin içeriğini ve hedef noktaları belirtirsiniz. Bu düzen, özellikle tek seferlik veya teknik açıdan hassas işlerde tercih edilir çünkü operatör hem makineyi hem sahadaki riskleri değerlendirerek çalışır.",
                    "Operatörün çalışma saatleri, işin süresine göre planlanır; yarım günlük bir iş için yarım gün, tam günlük bir iş için tam gün operatör hizmeti sunulur. Uzun süreli işlerde operatörün her gün sahada kalıp kalmayacağı, iş başında birlikte kararlaştırılır.",
                ],
            },
            {
                baslik: "Operatörsüz kiralamaya geçiş süreci",
                paragraflar: [
                    "Bolu'daki birçok tesis, ilk birkaç kiralamayı operatörlü yapıp ekibini eğitim belgesi alacak şekilde yönlendirir ve ardından operatörsüz kiralamaya geçer. Bu geçiş, hem maliyeti düşürür hem tesisin kendi bakım programını daha esnek yönetmesini sağlar. Geçiş sürecinde ekibinizin hangi makine sınıflarında deneyimli olduğunu bilmemiz, doğru önerilerde bulunmamızı sağlar.",
                    "Operatörsüz kiralamaya geçtikten sonra bile, farklı bir makine tipi veya zorlu bir saha koşuluyla karşılaştığınızda operatörlü seçeneğe geri dönebilirsiniz; bu iki düzen arasında geçiş esnektir ve her talepte ayrı değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörsüz kiralama için hangi belge gerekiyor?",
                cevap:
                    "Platformu kullanacak kişinin yüksekte çalışma platformu operatörlüğüne ilişkin geçerli bir eğitim belgesine sahip olması gerekir. Bu belge, teslimat öncesi tarafımıza iletilir. Belgeniz yoksa veya belgeli personeliniz makinenin geldiği gün sahada değilse, operatörlü kiralama önerilir. Belgenizin geçerliliğinden emin değilseniz, teslimattan önce bunu birlikte kontrol edebiliriz.",
            },
            {
                soru: "Kışın operatörlü kiralamayı neden özellikle öneriyorsunuz?",
                cevap:
                    "Çünkü kar ve buzlu zeminde platform çalıştırmak, denge ayağının nereye açılacağı ve zeminin taşıma kapasitesinin nasıl değerlendirileceği gibi kararlar gerektirir ve bu kararlar tecrübe ister. Deneyimli bir operatör, riskli bir zemini fark edip işi durdurma veya farklı bir noktaya geçme kararını hızlı verebilir. Bu, hem güvenlik hem işin sorunsuz tamamlanması açısından değerlidir.",
            },
            {
                soru: "Operatörlü kiralamada ücret nasıl hesaplanıyor?",
                cevap:
                    "Operatör hizmeti, makine kiralama bedeline ek olarak işin süresine göre hesaplanır — yarım gün, tam gün veya uzun süreli işlerde haftalık düzen kurulabilir. Kesin rakam, makine sınıfı ve işin süresine göre değişir. İşinizin tanımını ve süresini paylaştığınızda net bir teklif sunabiliriz.",
            },
            {
                soru: "Ekibimiz belgeli ama farklı marka makine kullanmamış; operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Kiralayabilirsiniz; belgeniz makinenin markasından bağımsız olarak geçerlidir. Ancak farklı marka ve kumanda düzenine sahip bir makineyle çalışacaksanız, teslim sırasındaki kısa aktarımı atlamamanızı öneririz — kumanda düzeni markadan markaya farklılık gösterebilir. Bu aktarım genellikle on-on beş dakika sürer ve işin ilerleyen saatlerinde zaman kazandırır.",
            },
            {
                soru: "Uzun süreli kiralamada operatör her gün sahada mı kalıyor?",
                cevap:
                    "Bu, işin sürekliliğine bağlı olarak değişir; operatör her gün sahada kalabilir veya belirli aralıklarla kontrol amaçlı gelebilir. İşin niteliğini ve tesisin kendi ekip yapısını paylaştığınızda, en uygun düzeni birlikte kararlaştırırız. Her iki düzende de operatörün ulaşılabilir olması ve sorularınıza hızlı yanıt vermesi standart hizmetimizin parçasıdır.",
            },
            {
                soru: "Örümcek platform gibi özel makinelerde operatör zorunlu mu?",
                cevap:
                    "Zorunlu değildir ama ilk kullanımınızda önemle öneririz. Örümcek platformun kurulumu ve sökümü, standart bir platformdan daha fazla teknik bilgi gerektirir; yanlış kurulum hem işi yavaşlatır hem güvenlik riski oluşturabilir. Ekibiniz süreci bir veya birkaç operatörlü kiralamada tecrübeyle öğrendikten sonra, sonraki işlerde operatörsüz seçeneğe geçebilirsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yüksekte çalışma platformu operatörlüğü için eğitim belgesi zorunluluğu genel bir yasal çerçevedir; kış koşullarında operatörlü tercih, dar erişim işlerinde aktarım süreci ve uzun süreli kiralamada operatör düzeni firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Bolu'da Çok Noktalı Rota Bakım Platformu Hizmeti",
        giris:
            "Bolu'nun coğrafyası, çok noktalı bakım rotası kurmaya elverişli bir yapıdadır: TEM Otoyolu hattı boyunca dizilmiş tesisler, Gerede'nin kavşak konumundaki işletmeler ve merkez ile ilçeler arasındaki dağınık adresler, doğru planlandığında tek bir makine seferiyle birden fazla noktada bakım yapılmasını mümkün kılar. Bu hizmet, özellikle birden fazla şubesi veya tesisi olan işletmeler, aynı bölgedeki farklı işletmelerin ortak sevkiyata girmesi veya tek bir tesisin dağınık bina bloklarındaki bakım ihtiyacı için değer taşır. Rotanın verimli çalışmasının koşulu nettir: her adresin kabul saati, çalışma tipi ve makine sınıfı önceden netleştirilmelidir; aksi hâlde bir adresteki gecikme bütün rotayı geciktirir. Bu sayfa, çok noktalı rota planlamasının nasıl kurulduğunu, hangi adreslerin bir araya getirilebileceğini ve rota içinde bir aksama olduğunda ne yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Rota kurgusunun ilk adımı: adres listesi ve öncelik",
                metin:
                    "Çok noktalı rota planlaması, önce tüm adreslerin bir listede toplanmasıyla başlar — her adresin işin tanımı, yaklaşık yüksekliği ve tercih edilen zaman dilimi birlikte belirtilir. Bu liste üzerinden adresler coğrafi yakınlığa ve makine sınıfına göre gruplanır. Aynı makine sınıfı gerektiren ve birbirine yakın adresler tek rotaya alınır; farklı makine sınıfı gerektiren adresler ayrı planlanır.",
            },
            {
                baslik: "TEM hattı üzerindeki adreslerin doğrusal avantajı",
                metin:
                    "Otoyol hattı üzerindeki tesisler doğrusal bir dizilime sahip olduğu için, hattı kat eden bir araç gidişte bir tesise makine bırakıp dönüşte komşu tesisten biten makineyi alabilir. Bu döngü, tek tesise özel sefer yapmanın maliyetini bölüştürür. Bu yüzden hat üzerindeki taleplerde tarihinizin esnek olup olmadığını sorarız; birkaç günlük esneklik, sevkiyatınızı mevcut bir rotaya bağlama şansı verir.",
            },
            {
                baslik: "Her adresin bağımsız kabul ve teknik teslim kaydı",
                metin:
                    "Rota tek bir sefer olsa da, her adresin kabulü, teklifi ve teknik teslimi ayrı tutulur. Bir adresteki uygun zemin veya izin diğerine otomatik olarak taşınmaz — her nokta kendi koşullarına göre değerlendirilir. Makine adresler arasında hareket ederken temizlenir ve görünür durum kaydedilir; bu, hem sorumluluk sınırını netleştirir hem her adresin kendi kaydına sahip olmasını sağlar.",
            },
            {
                baslik: "Bir adresteki gecikmenin rotaya etkisi",
                metin:
                    "Rotadaki bir adres hazır değilse — izin tamamlanmamış, zemin uygun değil, kabul saati kaymışsa — bu, diğer adresleri de etkileyebilir. Bizim yaklaşımımız, hazır olmayan bir işin bütün rotayı bekletmesine izin vermemektir; ilgili adres sıradan çıkarılır ve rota kalan adreslerle devam eder. Ertelenen adres için yeni bir tarih ayrıca planlanır.",
            },
            {
                baslik: "Dağınık tesis bloklarında iç rota",
                metin:
                    "Tek bir büyük tesisin farklı binaları veya blokları arasında da benzer bir mantık işler — özellikle sanayi kompleksleri ve OSB içindeki çok binalı işletmelerde. Aynı makine, bir binadan diğerine geçerek sırayla bakım yapabilir. Bu durumda bloklar arası geçiş süresi ve her binanın kendi giriş prosedürü önceden netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında adres tipi ve koordinasyon",
                paragraflar: [
                    "Tablo, çok noktalı rotalarda sık karşılaşılan adres tiplerini ve koordinasyon gereksinimlerini özetler.",
                ],
                tablo: {
                    basliklar: ["Adres tipi", "Rota uygunluğu", "Koordinasyon ihtiyacı", "Risk noktası"],
                    satirlar: [
                        ["TEM hattı üzeri tesis", "Yüksek", "Kabul saati bildirimi", "Kapı trafiği"],
                        ["OSB içi çok binalı işletme", "Yüksek", "Bina giriş prosedürü", "Bloklar arası geçiş süresi"],
                        ["Merkez-ilçe karışık adresler", "Orta", "Tarih esnekliği", "Mesafe farkı"],
                        ["Kış döneminde dağlık adres", "Düşük-orta", "Sabah teyidi", "Geçiş koşulu"],
                        ["Farklı işletme ortak sevkiyat", "Orta-yüksek", "Ortak tarih mutabakatı", "Farklı makine sınıfı ihtiyacı"],
                    ],
                },
            },
            {
                baslik: "Ortak sevkiyat: farklı işletmelerin aynı rotayı paylaşması",
                paragraflar: [
                    "Aynı bölgede, benzer tarihlerde makine bekleyen farklı işletmeler, aynı sefere bağlanarak nakliye maliyetini paylaşabilir. Bu düzen özellikle küçük ve orta ölçekli işletmeler için değerlidir çünkü tek başına çağrılan bir sefer, birkaç saatlik bir iş için orantısız maliyet yaratabilir.",
                    "Ortak sevkiyatın işleyebilmesi için işletmelerin tarih konusunda esnek olması ve makine sınıflarının uyumlu olması gerekir. Talebinizi verirken bölgenizdeki benzer taleple ilgilenip ilgilenmediğinizi belirtirseniz, uygun bir eşleşme olup olmadığını değerlendirebiliriz.",
                ],
            },
            {
                baslik: "Kış döneminde rota planlamasının farkı",
                paragraflar: [
                    "Kış aylarında çok noktalı rota planlaması, hava koşulunun rotanın bazı bölümlerini etkileyebileceği varsayımıyla kurulur. Bolu Dağı geçişini içeren rotalarda gün taahhüdü verilir, saat teyidi sabah yapılır. Rotadaki bazı adresler dağlık kesimde, bazıları düz güzergâhtaysa, öncelik düz güzergâhtaki adreslere verilir ve dağlık kesim koşullar uygun olduğunda eklenir.",
                    "Bu esneklik, rotanın tamamının bir hava koşulu nedeniyle iptal olmasını önler; kısmi bir rota bile, hiç hizmet vermemekten daha değerlidir. Kış döneminde rota talep ederken, adreslerinizin hangilerinin öncelikli olduğunu belirtmeniz, planlamayı kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kaç adresi tek rotaya toplayabiliyorsunuz?",
                cevap:
                    "Bu, adreslerin coğrafi yakınlığına, makine sınıfı uyumuna ve her adresteki işin süresine bağlıdır; sabit bir sayı vermek yerine adres listenizi görüp değerlendirmemiz gerekir. Genel olarak birbirine yakın ve benzer büyüklükte iş içeren üç ile beş adres arası bir rota verimli çalışır; daha fazla adres, günün süresini aşabileceği için ikinci bir güne bölünebilir.",
            },
            {
                soru: "Rotadaki bir adres hazır değilse ne oluyor?",
                cevap:
                    "O adres sıradan çıkarılır ve rota kalan adreslerle devam eder; hazır olmayan bir iş bütün rotayı bekletmez. Ertelenen adres için ayrı bir tarih planlarız ve mümkünse bir sonraki uygun rotaya dahil ederiz. Bu yüzden her adresin hazırlığını — izin, zemin, kabul saati — teslimattan birkaç gün önce teyit etmenizi öneririz.",
            },
            {
                soru: "Farklı işletmelerle ortak sevkiyat nasıl işliyor?",
                cevap:
                    "Aynı bölgede benzer tarihte makine bekleyen işletmeler, tarih ve makine sınıfı uyumluysa aynı sefere bağlanabilir; bu nakliye maliyetini paylaştırır. Böyle bir eşleşme için sizin tarafınızdan tarih esnekliği gerekir. Talebinizi verirken bölgenizdeki ortak sevkiyata açık olup olmadığınızı belirtirseniz, uygun bir eşleşme varsa size haber veririz.",
            },
            {
                soru: "Her adres için ayrı fatura mı kesiliyor?",
                cevap:
                    "Bu, işletmenizin tercihine bağlıdır; tek bir işletmenin farklı adresleri için tek fatura, farklı işletmelerin ortak sevkiyatında ise her işletme için ayrı fatura düzenlenir. Fatura düzeninizi talep aşamasında belirtirseniz, buna uygun bir kurgu hazırlarız.",
            },
            {
                soru: "OSB içindeki çok binalı tesisimizde iç rota nasıl planlanıyor?",
                cevap:
                    "Binalarınızın giriş prosedürünü ve her binada yapılacak işi önceden aldığımızda, makine binadan binaya sırayla geçecek şekilde bir program çıkarırız. Bloklar arası geçiş süresi ve her binanın kendi kabul kuralı ayrı ayrı değerlendirilir. Bu tür işlerde makine genellikle bir gün sahada kalır ve gün içinde birden fazla binaya hizmet verir.",
            },
            {
                soru: "Kış aylarında dağlık kesimdeki adres rotayı etkiler mi?",
                cevap:
                    "Etkileyebilir; Bolu Dağı geçişini içeren rotalarda gün taahhüdü verilir ve saat teyidi sabah yapılır. Rotada hem düz güzergâhtaki hem dağlık kesimdeki adresler varsa, öncelik düz güzergâha verilir ve dağlık kesim koşullar uygun olduğunda rotaya eklenir. Bu, rotanın tamamının hava nedeniyle iptal olmasını önleyen bir yaklaşımdır. Adreslerinizin önceliğini belirtirseniz planlamayı buna göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. TEM Otoyolu'nun doğrusal güzergâh yapısı ve Bolu Dağı geçişinin kış aylarındaki etkisi kamuya açık genel bilgidir; rota gruplama mantığı, ortak sevkiyat düzeni ve gecikme yönetimi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Bolu'da Zor Zemin ve Arazi Koşullarında Platform Kiralama",
        giris:
            "Bolu'nun coğrafyası — orman örtüsü, dağlık kesimler, kırsal tarım sahaları — standart tekerlekli platformun rahatça çalışamayacağı zemin tipleriyle doludur. Kereste stok sahalarındaki sıkıştırılmış toprak, kayak bölgesine çıkan yollardaki eğimli ve mevsimsel olarak değişen zemin, tarım tesislerinin etrafındaki tarla kenarları ve inşaat hâlindeki şantiyelerin düzensiz yüzeyi — bunların hepsi standart lastik tekerlekli bir makaslı platformdan farklı bir makine gerektirir. Zor zeminde çalışmanın temel kuralı nettir: makine zemine uydurulmaz, zemine uygun makine seçilir. Bu, paletli gövde, geniş yük dağıtıcı ayaklar veya arazi tipi lastik gibi çözümlerle sağlanır. Bu sayfa, Bolu'daki tipik zor zemin senaryolarını, her birinde tercih edilen makine tipini ve zemin değerlendirmesinin nasıl yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Yumuşak ve ıslak zeminde paletli tercih",
                metin:
                    "Yağış sonrası yumuşayan toprak veya stabilize zeminlerde standart tekerlekli platform batabilir ve hareket edemez hâle gelebilir. Bu koşulda paletli gövdeli platform tercih edilir çünkü ağırlığı daha geniş bir alana yayar ve zemine batma riskini azaltır. Zeminin ıslaklık derecesi teslim öncesi fotoğraf veya son günlerdeki hava durumu bilgisiyle değerlendirilir; çok yumuşak zeminlerde çalışma, zeminin kısmen kuruduğu bir sonraki güne ertelenebilir.",
            },
            {
                baslik: "Eğimli arazide denge ve konumlandırma",
                metin:
                    "Bolu'nun dağlık kesimlerinde, özellikle kayak bölgesine yakın alanlarda, zemin düz değil eğimlidir. Eğimli zeminde platform konumlandırırken makinenin izin verdiği maksimum eğim açısı aşılmamalı ve denge ayakları zemin seviyesine göre farklı yüksekliklerde açılabilmelidir. Bazı modellerde otomatik seviye dengeleme bulunur; eğim fazla ise makine, zeminin daha düz olduğu bir noktaya konumlanır ve bom uzunluğuyla hedefe ulaşılır.",
            },
            {
                baslik: "Taşlı ve düzensiz şantiye zemininde stabilite",
                metin:
                    "İnşaat hâlindeki şantiyelerde zemin moloz, taş ve düzensiz dolgu içerebilir. Bu tür zeminlerde denge ayaklarının düz bir yüzeye oturduğundan emin olunmalı, gerekirse ayakların altına geniş yük dağıtıcı plaka konulmalıdır. Makinenin güzergâhı, zemindeki büyük engeller ve çukurlar önceden gözden geçirilerek belirlenir; çukur algılama sistemi bulunan modellerde bu sistem devrede tutulur.",
            },
            {
                baslik: "Kereste ve tarım sahalarında mevsimsel zemin değişimi",
                metin:
                    "Aynı saha, mevsime göre çok farklı zemin koşulu sunabilir — yazın sert ve kuru olan bir stok sahası, kışın veya yağışlı dönemde tamamen farklı davranabilir. Bu yüzden zor zemin değerlendirmesi tek seferlik değil, her talepte güncel olarak yapılır. Düzenli olarak aynı sahaya makine gönderiyorsak bile, son durumu teyit etmeden makine sınıfını sabitlemeyiz.",
            },
            {
                baslik: "Zemin testinin pratik yolu",
                metin:
                    "Sahaya gitmeden önce zemin durumunu değerlendirmenin en pratik yolu, güncel fotoğraf ve kısa bir video paylaşmaktır — özellikle son yağıştan sonraki görüntü, zeminin ne kadar yumuşadığını gösterir. Belirsiz durumlarda, büyük bir makine göndermeden önce kısa bir keşif ziyareti önerebiliriz; bu, sahaya varan makinenin çalışamaması riskini ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolu'da zemin tipi ve makine gövde seçimi",
                paragraflar: [
                    "Tablo, sahada karşılaştığımız zor zemin tiplerini ve uygun gövde seçimini özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Risk", "Gövde tercihi", "Ek önlem"],
                    satirlar: [
                        ["Islak/yumuşak toprak", "Batma, hareketsizlik", "Paletli", "Yağış sonrası kontrolü"],
                        ["Eğimli arazi", "Devrilme riski", "Seviye dengeli / paletli", "Maksimum eğim sınırı"],
                        ["Şantiye molozu", "Dengesiz oturma", "Lastikli, geniş taban plakası", "Güzergâh temizliği"],
                        ["Kuru stabilize (yaz)", "Düşük risk", "Standart lastikli", "Toz kontrolü"],
                        ["Donmuş zemin (kış)", "Buzlanma", "Lastikli, dikkatli konumlama", "Zemin altı kontrolü"],
                    ],
                },
            },
            {
                baslik: "Yanlış makine göndermenin maliyeti",
                paragraflar: [
                    "Zemine uygun olmayan bir makinenin sahaya gönderilmesi, işin en pahalı senaryosudur: makine hareket edemez, iş yapılamaz ve doğru gövdeyle ikinci bir sevkiyat gerekir. Bu senaryoyu önlemenin tek yolu, zemin bilgisini teslimattan önce almaktır. Bu yüzden zor zemin ihtimali olan her talepte fotoğraf veya video istememiz, formalite değil doğrudan maliyeti önleyen bir adımdır.",
                    "Bazı durumlarda zemin görüntüsü tek başına yeterli olmaz ve kısa bir telefon görüşmesiyle zeminin geçmişteki davranışı — örneğin geçen kışki durumu — sorulur. Bu ek birkaç dakikalık soru-cevap, sahada yaşanabilecek saatlerce süren bir aksaklığı önler.",
                ],
            },
            {
                baslik: "Zor zeminde çalışma süresi neden uzayabilir",
                paragraflar: [
                    "Standart bir zeminde yapılan bir işe göre, zor zeminde aynı iş genellikle daha uzun sürer — makine konumlandırma daha dikkatli yapılır, güzergâh üzerindeki engeller önceden temizlenir ve gerekiyorsa ayaklar altına plaka yerleştirilir. Bu ek süreyi kiralama planına baştan dahil etmenizi öneririz; aksi hâlde işin zemin nedeniyle uzaması, planlanmamış bir ek gün ücreti doğurabilir.",
                    "Tekrar eden zor zemin işlerinde — örneğin düzenli olarak aynı stok sahasına giden bir makine — zaman içinde en verimli güzergâh ve konumlandırma noktaları netleşir ve süre öngörülebilir hâle gelir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yağmurdan sonra sahamıza makine gelebilir mi?",
                cevap:
                    "Zeminin ne kadar yumuşadığına bağlıdır; hafif yağış sonrası çoğu zeminde paletli gövdeli platform rahatlıkla çalışır. Zemin çok yumuşamışsa çalışma, zeminin kısmen kuruduğu bir sonraki güne ertelenmesi önerilir çünkü batmış bir makineyi kurtarmak, ertelenen bir işten çok daha maliyetlidir. Sahanızın güncel fotoğrafını paylaşırsanız, bugün mü yoksa birkaç gün beklemek mi gerektiğini birlikte değerlendirebiliriz.",
            },
            {
                soru: "Eğimli arazide platform devrilme riski var mı?",
                cevap:
                    "Makinenin izin verdiği maksimum eğim açısı aşılmadığı ve denge ayakları doğru açıldığı sürece risk kontrol altındadır. Eğim bu sınırı aşıyorsa makine, zeminin daha düz olduğu bir noktaya konumlanır ve hedefe bom uzunluğuyla ulaşılır. Arazinizin yaklaşık eğimini ve hedefin konumunu paylaşırsanız, uygun konumlandırma noktasını önceden belirleyebiliriz.",
            },
            {
                soru: "Şantiye zemini henüz düzenlenmedi; yine de platform gelebilir mi?",
                cevap:
                    "Gelebilir ama hazırlık gerekir. Denge ayaklarının düz bir yüzeye oturması ve güzergâh üzerindeki büyük engellerin temizlenmiş olması istenir; gerekiyorsa ayakların altına geniş yük dağıtıcı plaka konulur. Şantiyenizin güncel zemin durumunu fotoğrafla paylaşırsanız, ek önlem gerekip gerekmediğini teslimat öncesi netleştiririz.",
            },
            {
                soru: "Aynı sahaya her ay makine gönderiyorsunuz; her seferinde zemin mi kontrol ediliyor?",
                cevap:
                    "Evet, çünkü aynı saha mevsime göre farklı davranabilir — yazın sert olan bir zemin kışın veya yağışlı dönemde yumuşayabilir. Düzenli sevkiyatlarda bile her seferinde son durumu kısa bir soruyla teyit ederiz; bu, sabit bir varsayımla hareket edip sahada sürprizle karşılaşmaktan daha güvenlidir.",
            },
            {
                soru: "Zor zeminde çalışma neden daha uzun sürüyor?",
                cevap:
                    "Çünkü makine konumlandırma daha dikkatli yapılır, güzergâh üzerindeki engeller önceden temizlenir ve gerekiyorsa ek önlemler — yük dağıtıcı plaka, seviye dengeleme — uygulanır. Bu hazırlık adımları standart bir zemine göre ek zaman alır. Kiralama süresini planlarken bu ek süreyi baştan hesaba katmanızı öneririz; böylece iş planınız gerçekçi kalır.",
            },
            {
                soru: "Zemin durumunu nasıl bildirmeliyiz?",
                cevap:
                    "En pratik yol, sahanın güncel fotoğrafını veya kısa bir videosunu paylaşmaktır — özellikle son yağıştan sonraki görüntü zeminin durumunu net gösterir. Belirsiz veya karmaşık durumlarda, büyük bir makine göndermeden önce kısa bir keşif ziyareti önerebiliriz. Bu adım, sahaya varan makinenin çalışamaması riskini baştan ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bolu'nun orman, dağlık ve kırsal tarım arazisi ağırlıklı coğrafyası kamuya açık genel bilgidir; zemin tipine göre gövde seçimi, keşif ziyareti önerisi ve mevsimsel zemin değerlendirmesi firma pratiğidir. Tesis adı ve rakamsal iddia içermez.",
    },
};
