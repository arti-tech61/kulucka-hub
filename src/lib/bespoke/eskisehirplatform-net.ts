// ═══════════════════════════════════════════════════════════════════════════
// eskisehirplatform.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Eskişehir'in havacılık-savunma tedarik zincirinde KALİTE DENETİMİ
// ve sertifikasyon süreçlerine odaklı platform kiralama + ilin sınırlı
// ölçekli seramik yan sanayii. Açı: iç denetim/ISO-AS9100 tetkik turları,
// malzeme izlenebilirlik etiketi okuma, kalibre ölçüm cihazı erişimi —
// eskisehirplatform-org.ts'in "yabancı madde/gizlilik/yüklenici girişi"
// merceğinden FARKLI: burada konu güvenlik değil, KAYIT DOĞRULAMA.
//
// ⚠️ eskisehirmanlift-net.ts (üretim hattı bakımı), eskisehirmanlift-xyz.ts,
// eskisehirvincplatform-com.ts, eskisehirplatformkiralama-net.ts,
// manlifteskisehir-com.ts ve eskisehirplatform-org.ts ile aynı ilde ve aynı
// bölge slug'larında çalışır; cümle/tablo/SSS örtüşmesi YASAKTIR.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Firma adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ESKISEHIRPLATFORM_NET: Record<string, BespokeIcerik> = {
    "bolge:eskisehir-osb": {
        h1: "Eskişehir OSB'de Kalite Denetimi ve Sertifikasyon Süreçlerine Platform Kiralama",
        giris:
            "Eskişehir OSB'deki havacılık-savunma tedarikçilerinde platform ihtiyacının önemli bir bölümü üretimden değil, kalite yönetim sisteminin kendisinden doğar. AS9100 ya da ISO 9001 kapsamında yürütülen iç tetkiklerde, denetçinin yüksekte depolanan bir parti etiketini okuması, tavana yakın bir ölçüm sabitini kalibre etmesi ya da raf üstü bir numunenin izlenebilirlik kaydını doğrulaması gerekebilir. Bu işler üretim bakımından farklıdır: süre kısadır, genellikle tek bir noktaya odaklanır ve tetkik takvimine sıkı sıkıya bağlıdır. Bize göre buradaki teklif üretim hattının değil, denetim takviminin etrafında kurulur — tetkikçi hangi gün sahada olacaksa, makine o gün ve o saatte hazır olmalıdır.",
        maddeler: [
            {
                baslik: "Tetkik takvimine bağlı dar zaman penceresi",
                metin:
                    "İç ve dış tetkikler genellikle önceden ilan edilmiş, birkaç günlük bir program dahilinde yürütülür ve tetkikçinin yüksekte bir noktayı görmesi gerektiği an belirlidir. Bu yüzden platform sevkiyatını üretim programına değil, tetkik ajandasına göre kuruyoruz; makinenin sahada bekleme süresini en aza indirmek, hem tesisin hem bizim çıkarımıza.",
            },
            {
                baslik: "Malzeme izlenebilirlik etiketi ve kayıt doğrulama",
                metin:
                    "Havacılık parçalarında her partinin kendine ait bir sertifika ve etiket zinciri vardır; bu etiketler bazen yüksek raf sistemlerinde, bazen tavana yakın geçici depolama alanlarında bulunur. Denetçi ya da kalite personeli etiketi yerinde görmek istediğinde, sepetin hassas ve sabit durabilmesi, fotoğraf ya da not alma süresince önemlidir.",
            },
            {
                baslik: "Kalibre ölçüm ve test ekipmanına erişim",
                metin:
                    "Bazı ölçüm ve test cihazları — örneğin tavana monte sensörler ya da yüksek konumlu kalibrasyon referans noktaları — periyodik olarak kalibre edilir ve bu kalibrasyonun kaydı ayrı bir dosyada tutulur. Bu işler için erişim genellikle kısa sürer ama hassastır; makinenin titreşimsiz ve kontrollü durabilmesi öncelik taşır.",
            },
            {
                baslik: "Denetim öncesi hazırlık: makinenin kendi dosyası",
                metin:
                    "Kalite sistemi tetkike hazırlanan bir tesiste, sahaya giren her ekipmanın da kaydı istenebilir. Bu durumda makinenin periyodik kontrol raporunu ve operatör yeterlilik belgesini tetkikten önce iletiyoruz; tesis bu belgeleri kendi tetkik dosyasına ekleyebiliyor.",
            },
            {
                baslik: "Tetkik sonrası düzeltici faaliyet işleri",
                metin:
                    "Tetkik sırasında yüksekte bir uygunsuzluk tespit edilirse (örneğin yanlış etiketlenmiş bir raf ya da erişilemeyen bir kayıt noktası), düzeltici faaliyet takvimi genellikle kısa sürelidir. Bu işlerde hızlı planlama önemlidir; mümkünse aynı hafta içinde ikinci bir kısa süreli sevkiyat yapıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Denetim türüne göre erişim ihtiyacı",
                paragraflar: [
                    "OSB'deki tedarikçilerde karşılaştığımız denetim ve kalite işlerini aşağıdaki tabloda topladık; teklif öncesi bu çerçeveden başlıyoruz.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Süre profili", "Hassasiyet", "Uygun platform"],
                    satirlar: [
                        ["İç tetkik – etiket doğrulama", "Kısa, tek noktaya odaklı", "Sabit durma, görüş açısı", "Akülü makaslı"],
                        ["Kalibrasyon erişimi", "Kısa, periyodik", "Titreşimsiz duruş", "Akülü eklemli"],
                        ["Dış denetim eşliği", "Yarım gün", "Belgeli operatör", "Akülü makaslı"],
                        ["Düzeltici faaliyet", "Acil, kısa süreli", "Hızlı planlama", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Tetkikçiyle aynı sahada bulunmak",
                paragraflar: [
                    "Tetkik sırasında sepette bulunan kişi genellikle kalite personeli ya da denetçinin kendisidir; operatörümüz bu süreçte yalnızca makineyi güvenli şekilde konumlandırır. Sepetin hassas mikro hareket yapabilmesi, denetçinin notunu ya da fotoğrafını rahat almasını sağlar.",
                    "Bu işlerde çalışma süresi kısa ama beklenmedik şekilde uzayabilir — denetçi bir noktada beklenenden fazla durabilir. Bu ihtimali teklife dahil ediyor, saatlik esneklik payı bırakıyoruz.",
                ],
            },
            {
                baslik: "Belge zinciri: makineden tesise",
                paragraflar: [
                    "Kalite yönetim sistemi işletilen tesislerde sahaya giren ekipmanın kaydı, tetkik dosyasının bir parçası olabilir. Bu yüzden periyodik kontrol raporu ve operatör yeterlilik belgesini standart olarak, talep beklemeden iletiyoruz.",
                    "Tetkik sırasında kullanılan makinenin kaydı istenirse, iş kabul formunu da ekleyerek eksiksiz bir belge seti sunuyoruz. Bu, tesisin kendi denetim izini güçlendiriyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "İç tetkikimiz için yüksek bir rafta bulunan etiketi doğrulamamız gerekiyor, nasıl çalışıyorsunuz?",
                cevap:
                    "Denetçinin sepette rahatça durup etiketi okuyabilmesi, fotoğraf çekebilmesi veya not alabilmesi için hassas mikro hareket yapabilen bir makine kullanıyoruz. Tetkik takviminizdeki saati önceden öğrenip makineyi o saatte hazır bulunduruyoruz; işin kısa süreceğini bilsek de beklenmedik uzamalar için saatlik esneklik payı bırakıyoruz.",
            },
            {
                soru: "Kalibrasyon işimiz titreşime hassas, bunu nasıl garanti ediyorsunuz?",
                cevap:
                    "Bu tür işlerde eklemli, kontrollü hareket eden bir makine tercih ediyoruz ve sepet hedefe ulaştığında makineyi tam olarak sabitliyoruz. Operatörümüz kalibrasyon işlemi süresince gereksiz hareket yapmıyor, sadece pozisyon değişikliği gerektiğinde müdahale ediyor. Kalibrasyon sorumlunuzla birlikte hangi noktada ne kadar sabit kalınması gerektiğini önceden konuşuyoruz.",
            },
            {
                soru: "Dış denetim günü makinenin belgeleri de isteniyor, hazırlıklı mısınız?",
                cevap:
                    "Evet, periyodik kontrol raporu, makinenin tanım bilgisi ve operatörümüzün yeterlilik belgesini denetimden önce elektronik olarak iletiyoruz. Bu belgeler tesisin kendi tetkik dosyasına eklenebilir. Denetim günü ayrıca bir iş kabul formu da imzalıyoruz; bu, sahaya giren ekipmanın kaydını tamamlıyor.",
            },
            {
                soru: "Tetkikte bir uygunsuzluk çıktı, düzeltici faaliyet için hızlı sevkiyat mümkün mü?",
                cevap:
                    "Mümkün; düzeltici faaliyet takvimleri genellikle kısa süreli olduğu için bu tür talepleri öncelikli olarak planlıyoruz. Kompakt bir makineyle kısa süreli bir sevkiyat organize ediyor, mümkünse aynı hafta içinde işi tamamlıyoruz. Uygunsuzluğun tam olarak nerede olduğunu ve hangi kaydın düzeltileceğini önceden netleştirmeniz süreci hızlandırıyor.",
            },
            {
                soru: "Tetkikçi beklenenden uzun sürede çalışıyor, ek ücret çıkar mı?",
                cevap:
                    "Kısa süreli denetim işlerinde makul bir esneklik payını teklife dahil ediyoruz; bunu baştan söylüyoruz ki sahada sürpriz olmasın. Süre belirgin şekilde uzarsa bunu önceden haber veriyoruz ve ek süreyi nasıl değerlendireceğimizi birlikte kararlaştırıyoruz. Amacımız, denetim akışını bir makine kısıtı yüzünden aksatmamak.",
            },
            {
                soru: "Operatörümüz olmadan sadece makineyi mi kiralıyorsunuz?",
                cevap:
                    "Kısa süreli ve hassas tetkik işlerinde operatörlü kiralamayı öneriyoruz, çünkü sepetin konumlandırılması ile denetçinin işine odaklanması aynı anda yürümesi gereken iki iştir. İhtiyacınız düzenli tekrarlıyorsa kendi personelinizin belge alması daha ekonomik olabilir; bu kararı birlikte değerlendiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir'in havacılık-savunma tedarik zinciri kimliği kamuya açık genel bilgidir; AS9100/ISO 9001 iç tetkik ve malzeme izlenebilirlik uygulamaları sektör pratiği ve standart gerekliliklerinden gelir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:odunpazari": {
        h1: "Odunpazarı'nda Kalite Sertifikasyonu ve Seramik Yan Sanayiine Platform Kiralama",
        giris:
            "Odunpazarı'ndaki küçük ölçekli tedarikçi atölyelerinin bir bölümü havacılık zincirine parça veren işletmelerdir ve bunlarda kalite belgelendirme süreci, ilçenin kurumsal-tarihi dokusuyla iç içe yürür. Bu atölyelerde platform talebi çoğunlukla bir tetkik öncesi hazırlık ya da sertifikasyon yenileme döneminde ortaya çıkar — yüksekte tutulan numune veya arşiv kaydına erişim, ölçüm cihazının kalibrasyon etiketinin kontrolü gibi. İlçenin ikinci bir yüzü ise sınırlı ölçekli seramik yan sanayidir; birkaç küçük atölye dekoratif seramik veya çini üretimi yapar ve bunların fırın-astar hatlarında farklı bir bakım disiplini gerekir. İki grup da ölçek olarak küçüktür ama beklenti düzeyi yüksektir: biri belge, diğeri yüzey kalitesi ister.",
        maddeler: [
            {
                baslik: "Küçük atölyede sertifikasyon hazırlığı",
                metin:
                    "Sertifikasyon yenileme döneminde atölye, arşivlenmiş kayıtların ve numunelerin erişilebilir olduğunu göstermek zorundadır. Bu kayıtlar bazen atölyenin üst raflarında tutulur. Platform bu noktada arşiv kutusuna erişip fotoğraflama ya da taşıma işini yapar; iş kısa sürer ama zamana bağlıdır, çünkü sertifikasyon başvurusunun bir teslim tarihi vardır.",
            },
            {
                baslik: "Dar atölyede kompakt erişim",
                metin:
                    "Odunpazarı'ndaki atölye binaları genellikle küçük ve dar mekânlardır. Kompakt gövdeli akülü makineler bu profile göre seçilir; kapı ve koridor ölçüsü sevkiyat öncesi netleştirilir.",
            },
            {
                baslik: "Seramik fırın ve astar hattında yüksek sıcaklık çevresi",
                metin:
                    "Küçük seramik atölyelerinde fırın bacası ve baca çevresi bakımı, ısı henüz düşmemişken yapılamaz. Bu işlerde fırının soğuma süresi işin başlangıcına dahil edilir. Astar-sır hattı üzerindeki aydınlatma veya havalandırma bakımı ise üretim durduğunda planlanır.",
            },
            {
                baslik: "Toz ve kil ortamında zemin koruması",
                metin:
                    "Seramik atölyelerinde kil tozu zeminde ince bir tabaka oluşturabilir ve bu, tekerlek izini artırır. Çalışma öncesi zemin temizlenir ya da geçici örtü serilir; iz bırakmayan lastikli makineler bu ortamda tercih edilir.",
            },
            {
                baslik: "Tetkik ve üretim takviminin çakışması",
                metin:
                    "Bazı küçük işletmeler hem kalite belgelendirme hem üretim takvimini aynı haftaya sıkıştırabilir. Bu durumda önceliği belge teslim tarihine veriyoruz, çünkü bunun ertelenme payı genellikle üretimden daha azdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İşletme tipine göre erişim ve zaman penceresi",
                paragraflar: [
                    "Odunpazarı'ndaki iki farklı işletme profilini ve tipik ihtiyaçlarını aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Ana ihtiyaç", "Zaman penceresi", "Makine tercihi"],
                    satirlar: [
                        ["Havacılık tedarikçisi atölye", "Kayıt/numune erişimi", "Sertifikasyon takvimi", "Akülü kompakt"],
                        ["Seramik/çini atölyesi", "Fırın-baca bakımı", "Soğuma sonrası", "Akülü makaslı"],
                        ["Astar-sır hattı", "Aydınlatma, havalandırma", "Üretim durduğunda", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Sertifikasyon teslim tarihine göre planlama",
                paragraflar: [
                    "Sertifikasyon başvurusunun bir teslim tarihi olduğu için bu tür işleri öncelikli olarak planlıyoruz. Talebinizi aldığımızda hangi tarihe kadar tamamlanması gerektiğini soruyor, sevkiyatı buna göre kuruyoruz.",
                    "Kısa süreli ve tek noktaya odaklı bu işlerde operatörlü kiralama, ayrı bir belge süreciyle uğraşmadan en hızlı çözümü sunuyor.",
                ],
            },
            {
                baslik: "Fırın soğuma süresinin işe dahil edilmesi",
                paragraflar: [
                    "Seramik atölyelerinde fırın bacası çevresindeki bakım, fırın soğumadan yapılamaz. Bu süreyi işin başlangıcına dahil ediyor, sevkiyat saatini fırının soğuma programına göre planlıyoruz.",
                    "Astar-sır hattındaki işler için üretim durduğu saatleri atölye sahibiyle birlikte belirliyoruz; bu genellikle küçük atölyelerde esnek şekilde çözülebiliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sertifikasyon yenileme sürecindeyiz, arşiv kutumuza erişmemiz gerekiyor; ne kadar sürede gelirsiniz?",
                cevap:
                    "Sertifikasyon işlerinin teslim tarihi olduğunu bildiğimiz için bu talepleri öncelikli planlıyoruz. Genellikle kısa sürede, kompakt bir akülü makineyle operatörlü kiralama olarak çözüyoruz. Arşiv kutusunun bulunduğu rafın yüksekliğini ve atölyenin manevra alanını önceden öğrenirsek makineyi doğru seçip zaman kaybetmeden gelebiliyoruz.",
            },
            {
                soru: "Atölyemiz çok küçük, standart bir platform sığar mı?",
                cevap:
                    "Çoğu zaman sığar; kompakt gövdeli akülü modelleri bu tür atölyeler için kullanıyoruz. Kesin karar için kapı genişliği, koridorun en dar noktası ve tavan yüksekliğini önceden netleştiriyoruz. Bu ölçüler net olduğunda hangi modelin gireceğini kesin söyleyebiliyoruz.",
            },
            {
                soru: "Fırınımız daha yeni söndü, hemen bakım yapılabilir mi?",
                cevap:
                    "Fırın ve baca çevresi ısı düşmeden çalışılamayacak kadar sıcak kalabilir; bu yüzden soğuma süresini işin başlangıcına dahil ediyoruz. Atölyenizin fırın soğuma programını öğrenip sevkiyat saatini ona göre planlıyoruz. Erken gelip beklemek yerine, doğru saatte gelmeyi tercih ediyoruz.",
            },
            {
                soru: "Zeminimizde kil tozu var, makine iz bırakır mı?",
                cevap:
                    "Bırakmaması için iz bırakmayan lastikli makineler kullanıyoruz. Çalışma öncesi zemini temizliyor ya da geçici örtü seriyoruz. Kil tozu ince bir tabaka oluşturduğunda standart lastik iz bırakabilir, bu yüzden bu ortamda lastik seçimini özellikle önemsiyoruz.",
            },
            {
                soru: "Hem üretim hem sertifikasyon takvimimiz aynı haftaya denk geldi, ne yapıyorsunuz?",
                cevap:
                    "Önceliği genellikle belge teslim tarihine veriyoruz, çünkü sertifikasyon başvurularının ertelenme payı üretimden daha azdır. İki işi de aynı sevkiyata sığdırabiliyorsak birleştiriyoruz; sığmıyorsa hangisinin öncelikli olduğunu sizinle birlikte netleştiriyoruz.",
            },
            {
                soru: "Astar-sır hattımızda çalışma yapılacak, üretim etkilenir mi?",
                cevap:
                    "Etkilenmemesi için üretimin durduğu saatleri atölye sahibiyle birlikte belirliyoruz. Küçük atölyelerde bu genellikle esnek şekilde çözülebiliyor; hattın kısa bir süre durdurulması yeterli oluyor. Akülü makineler sessiz çalıştığı için çevredeki diğer işlemleri de rahatsız etmiyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Odunpazarı'ndaki küçük ölçekli tedarikçi atölyeleri ve sınırlı seramik-çini yan sanayii kamuya açık genel bilgidir; sertifikasyon ve kalite belgelendirme süreçleri sektör pratiğinden gelir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:tepebasi": {
        h1: "Tepebaşı'nda Kalite Denetimi ve Malzeme Sertifikasyonu için Platform Kiralama",
        giris:
            "Tepebaşı'ndaki kurumsal ve teknik yapı yoğunluğu, havacılık-savunma tedarik zincirine hizmet veren bazı işletmelerin idari ve kalite fonksiyonlarını da barındırır. Bu ilçedeki platform talepleri, üretim hattından çok kalite biriminin kendi ihtiyaçlarından gelir: arşiv odasındaki kayıt kutularına erişim, kalibrasyon laboratuvarındaki tavana yakın referans noktalarının kontrolü, dış denetim öncesi hazırlık. İşin büyük bölümü idari binalarda geçtiği için buradaki saha disiplini, üretim holündeki disiplinden farklıdır — burada önemli olan sessizlik, temizlik ve kurum işleyişini bozmamaktır.",
        maddeler: [
            {
                baslik: "Kalite biriminin arşiv ve kayıt odalarına erişim",
                metin:
                    "Kalite yönetim biriminin arşiv odalarında kayıtlar genellikle yüksek raflarda saklanır. Sertifikasyon ya da denetim öncesi bu kayıtlara erişim gerektiğinde kompakt bir platform, merdiven kullanmadan güvenli erişim sağlar. İş genellikle kısa sürer ama hassas evrak taşındığı için dikkatli ilerlenir.",
            },
            {
                baslik: "Kalibrasyon laboratuvarında sabit ve sessiz çalışma",
                metin:
                    "Kalibrasyon laboratuvarlarında hassas ölçüm cihazları bulunur ve bu cihazlar titreşime duyarlıdır. Bu hacimlerde akülü ve düşük titreşimli makineler tercih edilir; çalışma sırasında laboratuvar personeliyle koordineli hareket edilir.",
            },
            {
                baslik: "İdari binada kesintisiz işleyişin etrafında çalışmak",
                metin:
                    "İdari binalarda çalışma günün belirli saatlerine, genellikle mesai dışına planlanır. Kurum görevlisiyle teslimat ve çalışma saatini önceden netleştiriyoruz; bina anahtarı ve alarm düzeni bu görüşmede belirlenir.",
            },
            {
                baslik: "Dış denetim öncesi son kontrol",
                metin:
                    "Dış denetim tarihine yaklaşırken bazı işletmeler son bir kontrol turu ister — yüksekte bir levhanın, kaydın ya da cihazın son kez doğrulanması. Bu işler genellikle acil ve kısa süreli gelir; öncelikli planlama yapıyoruz.",
            },
            {
                baslik: "Belge zinciri ve gizlilik dengesi",
                metin:
                    "Kalite kayıtlarına erişim bazen gizlilik gerektirir; bu durumda çalışma sırasında yalnızca yetkili personel eşliğinde ilerliyoruz ve gereksiz fotoğraf çekmiyoruz. Bu denge, kayıt doğruluğu ile gizlilik arasında sağlanıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İdari yapı tipine göre hazırlık",
                paragraflar: [
                    "Tepebaşı'ndaki kalite ve idari işlerini yapı tipine göre sınıflandırıyoruz; aşağıdaki tablo teklif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Ana ihtiyaç", "Hassasiyet", "Makine tercihi"],
                    satirlar: [
                        ["Arşiv/kayıt odası", "Rafa erişim", "Evrak güvenliği", "Kompakt akülü"],
                        ["Kalibrasyon laboratuvarı", "Referans nokta kontrolü", "Titreşimsiz duruş", "Akülü eklemli"],
                        ["İdari ofis binası", "Genel bakım", "Kullanım saati", "Akülü makaslı"],
                        ["Dış denetim öncesi kontrol", "Son doğrulama", "Zaman baskısı", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Mesai dışı planlama",
                paragraflar: [
                    "İdari binalardaki işleri mesai dışı saatlere, genellikle akşam ya da hafta sonuna planlıyoruz. Kurum görevlisiyle birlikte teslimat saatini, refakat düzenini ve bina kapanış saatini yazılı olarak netleştiriyoruz.",
                    "Akülü makinelerin sessiz çalışması, mesai dışı saatlerde çevredeki diğer kurumları rahatsız etmemesini sağlıyor.",
                ],
            },
            {
                baslik: "Gizlilik ve kayıt dengesi",
                paragraflar: [
                    "Kalite kayıtlarına erişim gerektiren işlerde, çalışma sırasında yalnızca yetkili personel eşliğinde ilerliyoruz. Fotoğraf çekimi tesisin izin verdiği ölçüde yapılır; izin yoksa yazılı bir iş kabul formuna geçiyoruz.",
                    "Bu düzen, hem kayıt doğruluğunu hem gizlilik yükümlülüğünü aynı anda karşılıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Arşiv odamızdaki kayıt kutularına erişmemiz gerekiyor, nasıl çalışıyorsunuz?",
                cevap:
                    "Kompakt gövdeli bir akülü makineyle merdiven kullanmadan güvenli erişim sağlıyoruz. Hassas evrak taşındığı için işlem dikkatli ve yavaş ilerler; yetkili personel genellikle işlem sırasında sepette ya da yanında bulunur. Rafın yüksekliğini ve odanın manevra alanını önceden öğrenirsek doğru makineyi seçip zaman kaybetmeden geliyoruz.",
            },
            {
                soru: "Kalibrasyon laboratuvarımızda titreşime hassas cihazlar var, bunu nasıl yönetiyorsunuz?",
                cevap:
                    "Bu hacimlerde akülü ve düşük titreşimli makineler kullanıyoruz; sepet hedefe ulaştığında makineyi tam olarak sabitliyoruz. Laboratuvar personeliyle koordineli hareket ediyor, gerekli görülen noktalarda işlemi durdurup bekliyoruz. Hangi cihazların titreşime en hassas olduğunu önceden öğrenmemiz, çalışma sırasında ekstra dikkat gösterilmesini sağlıyor.",
            },
            {
                soru: "İdari binamızda mesai dışında çalışabilir misiniz?",
                cevap:
                    "Evet, kurum görevlisiyle birlikte teslimat saatini, refakat düzenini ve bina kapanış saatini önceden yazılı olarak netleştiriyoruz. Akülü makineler sessiz çalıştığı için mesai dışı saatlerde de çevredeki kurumları rahatsız etmiyor. Zemin koruma örtüsü kullanıp iş bitiminde alanı temiz teslim ediyoruz.",
            },
            {
                soru: "Dış denetim tarihimiz yaklaştı, son bir kontrol turu yaptırabilir miyiz?",
                cevap:
                    "Yaptırabilirsiniz ve bu tür talepleri öncelikli planlıyoruz. Denetim tarihine kadar hangi noktaların kontrol edileceğini önceden netleştirirseniz, kısa süreli ve tek seferlik bir sevkiyatla işi tamamlıyoruz. Zaman baskısı olan bu işlerde kompakt bir makine, hızlı kurulum açısından avantaj sağlıyor.",
            },
            {
                soru: "Kayıtlarımız gizli, fotoğraf çekilmesini istemiyoruz; nasıl belgeleniyor?",
                cevap:
                    "Bu durumda fotoğraf çekmiyoruz, yerine yazılı bir iş kabul formu kullanıyoruz. Formda çalışmanın yapıldığı alan, saat ve erişilen nokta genel hatlarıyla belirtilir ama kayıt içeriğine dair bir detay yer almaz. Çalışma sırasında yalnızca yetkili personel eşliğinde ilerliyoruz.",
            },
            {
                soru: "Aynı hafta hem arşiv hem laboratuvar işimiz var, tek sevkiyatla çözülür mü?",
                cevap:
                    "Genellikle çözülür. Aynı bina içindeyse makineyi tek sevkiyatla getirip sırayla iki alanda da kullanıyoruz; bu, nakliye bedelini tekilleştiriyor. Laboratuvar hacminin daha hassas bir yaklaşım gerektirdiğini unutmadan, iş sırasını buna göre planlıyoruz — önce daha az hassas olan arşiv işini, sonra laboratuvarı tamamlıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tepebaşı'nın kurumsal ve idari yapı yoğunluğu kamuya açık genel bilgidir; kalibrasyon ve kalite kaydı uygulamaları sektör pratiğinden gelir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:eskisehir-2-osb": {
        h1: "Eskişehir 2. OSB'de Malzeme Sertifikasyonu ve Kalite Süreçlerine Platform Kiralama",
        giris:
            "Eskişehir 2. OSB'deki tesislerin bir kısmı, birinci OSB'deki köklü tedarikçilere göre daha yeni kurulmuş işletmelerdir ve bu işletmelerin çoğu ilk sertifikasyon sürecini yakın zamanda tamamlamış ya da tamamlama aşamasındadır. Bu, platform talebine kendine özgü bir profil kazandırır: yeni bina, yeni raf sistemi, henüz oturmamış bir kalite altyapısı. Buradaki işler çoğunlukla ilk denetim öncesi hazırlık, malzeme sertifikası dosyalama alanının düzenlenmesi ya da yeni kurulan bir ölçüm istasyonunun kalibrasyonuyla ilgilidir.",
        maddeler: [
            {
                baslik: "Yeni tesiste ilk sertifikasyon hazırlığı",
                metin:
                    "İlk kez sertifikasyon sürecinden geçen tesislerde, denetçinin göreceği her nokta -yüksek raflar dahil- düzenli ve erişilebilir olmalıdır. Bu hazırlık aşamasında platform, raf düzenleme ve etiketleme işlerinde kullanılır; iş genellikle birkaç saatlik, planlı bir çalışmadır.",
            },
            {
                baslik: "Yeni bina, farklı yapı standartları",
                metin:
                    "2. OSB'deki binalar genellikle daha yeni inşa edilmiştir ve zemin, tavan yüksekliği standartları birinci OSB'den farklı olabilir. Bu yüzden her tesiste zemin ve yükseklik ölçüsünü ayrıca doğruluyoruz, varsayımla ilerlemiyoruz.",
            },
            {
                baslik: "Yeni kurulan ölçüm istasyonlarının kalibrasyonu",
                metin:
                    "Yeni kurulan üretim hatlarında ölçüm ve test istasyonları da yeni devreye alınır. İlk kalibrasyon genellikle tedarikçi firma tarafından yapılır, ancak montaj sırasında yüksekte kalan sabitleme noktalarına erişim platform gerektirebilir.",
            },
            {
                baslik: "Genişleyen tesiste esnek planlama",
                metin:
                    "Yeni kurulan tesislerde bina içi düzen zamanla değişebilir; bir ay önce net olan raf yerleşimi bugün farklı olabilir. Bu yüzden sevkiyat öncesi güncel yerleşimi teyit ediyoruz, eski bilgiyle ilerlemiyoruz.",
            },
            {
                baslik: "Tek seferlik ama zaman baskılı işler",
                metin:
                    "Yeni tesislerde sertifikasyon süreci genellikle bir kerelik yoğun bir hazırlık dönemidir. Bu dönemde talepler zaman baskılıdır; öncelikli planlama ve hızlı dönüş bekleniyor, biz de teklifi buna göre hızlandırıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yeni tesis profiline göre hazırlık",
                paragraflar: [
                    "2. OSB'deki yeni kurulan tesislerin tipik ihtiyaçlarını aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["İhtiyaç", "Aşama", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Raf düzenleme/etiketleme", "İlk sertifikasyon", "Zaman baskısı", "Akülü makaslı"],
                        ["Ölçüm istasyonu erişimi", "Montaj sonrası", "Yeni yapı ölçüleri", "Akülü eklemli"],
                        ["Genel bakım", "İşletme sonrası", "Standart", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Yapı ölçüsünü varsaymadan doğrulama",
                paragraflar: [
                    "Yeni binalarda standart ölçüler tesisten tesise değişebilir. Sevkiyat öncesi zemin tipini, tavan yüksekliğini ve kapı ölçüsünü ayrıca teyit ediyoruz; bu adım, sahada makinenin uymaması riskini ortadan kaldırıyor.",
                    "Bina içi düzenin zamanla değişebileceğini bildiğimiz için, planlı bir sevkiyattan hemen önce güncel yerleşimi bir kez daha teyit ediyoruz.",
                ],
            },
            {
                baslik: "Hızlı dönüş gerektiren dönemler",
                paragraflar: [
                    "Sertifikasyon hazırlık dönemindeki talepleri öncelikli işaretliyor, mümkün olan en kısa sürede planlama yapıyoruz. Bu dönemde birden fazla küçük iş art arda gelebilir; bunları mümkün olduğunca tek sevkiyata topluyoruz.",
                    "Zaman baskısı olan bu işlerde net bir teslim tarihi paylaşmanız, planlamayı büyük ölçüde hızlandırıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni kurulduk, ilk sertifikasyonumuz için hazırlık yapıyoruz; nasıl destek oluyorsunuz?",
                cevap:
                    "Raf düzenleme, etiketleme ve yüksekte kalan kayıtların erişilebilir hâle getirilmesi için akülü makaslı platform kullanıyoruz. Zaman baskılı olduğunu bildiğimiz için bu talepleri öncelikli planlıyoruz. Denetim tarihinizi paylaşırsanız sevkiyatı ona göre kesinleştiriyoruz.",
            },
            {
                soru: "Binamız yeni, standart ölçüler geçerli mi?",
                cevap:
                    "Varsaymıyoruz. Her yeni tesiste zemin tipini, tavan yüksekliğini ve kapı ölçüsünü ayrıca doğruluyoruz. 2. OSB'deki binalar arasında bile standartlar farklılık gösterebiliyor, bu yüzden sevkiyat öncesi bu bilgileri sizden bir kez daha teyit ediyoruz.",
            },
            {
                soru: "Yeni kurulan ölçüm istasyonumuzda sabitleme noktasına erişim gerekiyor, yapabilir misiniz?",
                cevap:
                    "Yapabiliriz; bu tür işlerde eklemli, kontrollü hareket eden bir makine tercih ediyoruz. İlk kalibrasyon genellikle tedarikçi firma tarafından yapılıyor, biz sadece erişim sağlıyoruz. Montaj ekibiyle koordineli çalışıp gerekli noktaya güvenli erişim sunuyoruz.",
            },
            {
                soru: "Bina içi düzenimiz değişti, bir ay önce verdiğimiz bilgi güncel değil; sorun olur mu?",
                cevap:
                    "Sevkiyattan hemen önce güncel yerleşimi bir kez daha teyit ediyoruz, bu yüzden eski bilgiyle ilerlemiyoruz. Yine de değişiklik büyükse (örneğin raf konumu tümüyle değiştiyse) bunu bize önceden bildirmeniz, doğru makinenin seçilmesini kolaylaştırıyor.",
            },
            {
                soru: "Sertifikasyon dönemimizde birden fazla küçük iş çıkıyor, ayrı ayrı mı planlanıyor?",
                cevap:
                    "Mümkün olduğunca tek sevkiyata topluyoruz. Sertifikasyon hazırlık dönemlerinde küçük işlerin art arda geldiğini biliyoruz; bu yüzden tavan iş listesini önceden çıkarıp makineyi bir kez getirip günün tamamında kullanmayı öneriyoruz. Bu, hem nakliye bedelini hem zaman kaybını azaltıyor.",
            },
            {
                soru: "Denetim tarihimiz çok yakın, ne kadar hızlı dönüş sağlıyorsunuz?",
                cevap:
                    "Zaman baskılı talepleri öncelikli işaretliyor, mümkün olan en kısa sürede planlama yapıyoruz. Net bir teslim tarihi paylaşmanız, hangi makinenin ve hangi ekibin uygun olduğunu hızlıca netleştirmemizi sağlıyor. Denetim tarihine yakın taleplerde iletişimi doğrudan ve hızlı tutuyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir 2. OSB'nin varlığı ve yeni kurulan tesislerin ilk sertifikasyon süreçlerinden geçmesi kamuya açık genel bilgidir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:sivrihisar-cevre-ilce": {
        h1: "Sivrihisar Çevresinde Malzeme Sertifikasyonu ve Kalite Erişimi",
        giris:
            "Sivrihisar, Eskişehir'in havacılık-savunma tedarik zincirinin doğrudan parçası olmasa da, ilçedeki bazı küçük ölçekli işletmeler bu zincire dolaylı hizmet verir — parça taşımacılığı, ambalaj, geçici depolama gibi destek fonksiyonları. Bu işletmelerde kalite ve sertifikasyon talebi merkez OSB'lerdeki kadar sık değildir, ancak ortaya çıktığında genellikle bir tedarik zinciri denetiminin parçasıdır ve zaman baskılıdır. Bu sayfa, Sivrihisar'ın kendi geniş bölge sayfamızdan (rüzgâr enerjisi, havacılık merkezi, tarımsal yapılar) farklı olarak, yalnızca bu dolaylı tedarik zinciri bağlantısına odaklanıyor.",
        maddeler: [
            {
                baslik: "Dolaylı tedarik zincirinde kayıt talebi",
                metin:
                    "Parça taşımacılığı veya geçici depolama yapan işletmelerde, ana tedarikçinin denetim sürecine dahil olan bir kayıt talep edilebilir — örneğin depolama koşullarının belgelendirilmesi. Bu talep genellikle ana tedarikçiden gelir ve zaman baskılıdır.",
            },
            {
                baslik: "Kırsal-küçük ölçekte erişim kısıtları",
                metin:
                    "Sivrihisar'daki işletmeler genellikle küçük ölçeklidir ve bina standartları merkez OSB'lerden farklıdır. Bu yüzden her talepte zemin, yükseklik ve erişim ölçüsünü ayrıca doğruluyoruz.",
            },
            {
                baslik: "Mesafe ve sevkiyat süresi",
                metin:
                    "Sivrihisar'ın geniş yüzölçümü nedeniyle sahalar arası mesafe merkez ilçelere göre daha uzundur. Zaman baskılı bir talepte bu mesafeyi baştan hesaba katıyor, net bir ulaşım süresi veriyoruz.",
            },
            {
                baslik: "Tek seferlik doğrulama işleri",
                metin:
                    "Bu tür işler genellikle tek seferlik ve kısa süreli olur — bir depolama alanının fotoğraflanması, bir etiketin doğrulanması. Kompakt bir makine bu profile uygundur.",
            },
            {
                baslik: "Merkez OSB sevkiyatıyla birleştirme",
                metin:
                    "Sivrihisar'daki talebi, merkez OSB'lerdeki planlı bir sevkiyatla birleştirmek her zaman mümkün olmayabilir çünkü mesafe fazladır. Yine de acil olmayan işlerde bunu denemeye çalışıyoruz; birleştirebildiğimizde maliyet avantajı belirgin oluyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İşletme tipine göre erişim ihtiyacı",
                paragraflar: [
                    "Sivrihisar'daki dolaylı tedarik zinciri işletmelerinin tipik taleplerini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Talep türü", "Zaman baskısı", "Makine tercihi"],
                    satirlar: [
                        ["Parça taşımacılığı/lojistik", "Depolama koşulu belgeleme", "Yüksek", "Kompakt akülü"],
                        ["Geçici depolama", "Kayıt/etiket doğrulama", "Orta", "Akülü makaslı"],
                        ["Ambalaj işletmesi", "Genel bakım", "Düşük", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Mesafeye göre net planlama",
                paragraflar: [
                    "Sivrihisar'daki bir talepte önce işletmenin merkez OSB'lere olan mesafesini netleştiriyoruz. Bu bilgi, hem teslimat süresini hem de birleştirme imkânını belirliyor.",
                    "Zaman baskılı bir talepte mesafeyi baştan hesaba katarak net bir ulaşım süresi veriyoruz; sahada sürpriz gecikme yaşanmasını istemiyoruz.",
                ],
            },
            {
                baslik: "Ana tedarikçiyle koordinasyon",
                paragraflar: [
                    "Kayıt talebi genellikle ana tedarikçinin denetim sürecinden geldiği için, hangi bilginin hangi formatta isteneceğini ana tedarikçiyle ya da sizinle birlikte netleştiriyoruz. Bu, işin bir kerede ve doğru şekilde tamamlanmasını sağlıyor.",
                    "Belirsizlik varsa işi ertelemek yerine, netleşene kadar küçük bir ön görüşme yapmayı tercih ediyoruz; bu, sahada yanlış işe zaman harcamayı önlüyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ana tedarikçimiz depolama koşullarımızın belgelenmesini istiyor, nasıl yardımcı oluyorsunuz?",
                cevap:
                    "Depolama alanının yüksekte kalan bölümlerine erişip fotoğraflama veya kayıt doğrulama işini yapıyoruz. Ana tedarikçinizin hangi bilgiyi hangi formatta istediğini önceden netleştiriyoruz, böylece iş bir kerede doğru şekilde tamamlanıyor. Bu tür talepler genellikle zaman baskılı geldiği için öncelikli planlıyoruz.",
            },
            {
                soru: "İşletmemiz küçük ölçekli, standart makine sığar mı?",
                cevap:
                    "Çoğu zaman sığar; kompakt gövdeli akülü modelleri bu tür işletmeler için kullanıyoruz. Sivrihisar'daki bina standartları merkez OSB'lerden farklı olabildiği için her talepte zemin, yükseklik ve erişim ölçüsünü ayrıca doğruluyoruz.",
            },
            {
                soru: "Sivrihisar'a merkez OSB'den makine ne kadar sürede gelir?",
                cevap:
                    "İlçenin geniş yüzölçümü nedeniyle mesafe merkez ilçelere göre daha uzundur. Talebinizi aldığımızda işletmenizin konumuna göre net bir ulaşım süresi veriyoruz; zaman baskılı bir işse bu süreyi öncelikli planlamaya alıyoruz.",
            },
            {
                soru: "Talebimizi merkez OSB'deki bir işle birleştirmek mümkün mü?",
                cevap:
                    "Mesafe nedeniyle her zaman mümkün olmayabilir, ancak acil olmayan işlerde denemeye çalışıyoruz. Birleştirebildiğimizde nakliye payı paylaşılır ve maliyet belirgin şekilde düşer. Bunun için birkaç günlük tarih esnekliği vermeniz yeterli.",
            },
            {
                soru: "Kayıt talebimizin formatı belirsiz, ne yapmalıyız?",
                cevap:
                    "Belirsizlik varsa işi doğrudan yapmak yerine küçük bir ön görüşme öneriyoruz; ana tedarikçinizle ya da sizinle birlikte hangi bilginin hangi formatta isteneceğini netleştiriyoruz. Bu, sahada yanlış işe zaman harcamayı ve tekrar sevkiyat gerekmesini önlüyor.",
            },
            {
                soru: "Bu talep tek seferlik mi olacak, yoksa düzenli mi tekrarlanacak?",
                cevap:
                    "Çoğu zaman tek seferlik oluyor, çünkü Sivrihisar'daki işletmeler tedarik zincirine dolaylı ve sınırlı ölçüde hizmet veriyor. Düzenli tekrarlayan bir ihtiyacınız varsa bunu bize belirtmeniz, ileride daha hızlı ve önceden planlı bir hizmet kurmamızı sağlıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sivrihisar'ın Eskişehir'in havacılık-savunma tedarik zincirine dolaylı destek fonksiyonları (taşımacılık, ambalaj, geçici depolama) sağlayabilecek küçük ölçekli işletme yapısı genel bilgidir. Firma adı ve rakam kullanılmamıştır.",
    },
    "bolge:osb-havacilik-kumesi": {
        h1: "OSB Havacılık Kümesinde Temiz ve Elektrikli Platform Kiralama",
        giris:
            "Eskişehir OSB'deki havacılık kümesine yönelik bu sayfa, tedarikçi evrakını veya belirli bir tesisin üretim düzenini anlatmaz. Kamuya açık sınır yalnız kentte havacılık motor sanayisi çevresinde bir kümenin varlığıdır. Bunun ötesinde hangi tesiste hangi parçanın üretildiği, hangi temizlik sınıfının uygulandığı ya da içeride nasıl bir hat bulunduğu varsayılmaz. Buradaki karar çerçevesi fizikidir: kapalı ve hassas bir çalışma çevresine alınacak platformun egzoz üretmemesi, zeminde siyah iz bırakmaması, dışarıdan kir taşımaması, hidrolik sızıntı belirtisi göstermemesi ve dar güzergâhta çevredeki yüzeylere temas etmeden hareket edebilmesi. Akülü tahrik tek başına yeterli değildir; lastik bileşimi, teker ve şasi altı temizliği, gövdenin silinebilirliği, şarj alanı ve zemin taşıma koşulu birlikte doğrulanır. Platform üretim prosesinin parçası değildir, yalnız yetkili personeli bakım noktasına ulaştırır. İş başlamadan girişten hedefe rota yürünür, hassas yüzeyler korunur, makinenin hareket alanı ayrılır ve çalışma sonunda zemin ile makine gözle kontrol edilir. Böylece A3'teki belge–İSG izlenebilirliğinden ayrılan, doğrudan temiz ekipman kabulü ve yüzey korumasına odaklanan bir hizmet modeli kurulur.",
        maddeler: [
            {
                baslik: "Akülü tahriki kapalı hacmin temel şartı saymak",
                metin:
                    "Kapalı çalışma alanında içten yanmalı motorun egzozu ve yakıt çevrimi kabul edilemez bir ek yük oluşturabilir. Bu nedenle uygun kapalı hacimde akülü sınıf değerlendirilir. Ancak akülü olması makinenin her alana otomatik uygun olduğu anlamına gelmez; üretici kullanım sınırları, havalandırma, zemin, şarj ve erişim geometrisi ayrıca kontrol edilir. Akü seviyesi iş penceresine göre hazırlanır, çalışma sırasında kontrolsüz uzatma kablosu kullanılmaz. Şarj kuru ve havalandırılan noktada, araç-yaya yolundan ayrılmış kablo düzeniyle yapılır. Olağan dışı ısınma veya koku görülürse işlem durdurulur.",
            },
            {
                baslik: "İz bırakmayan lastik ve yüzey koruma rotası",
                metin:
                    "Hassas veya açık renkli zeminlerde standart koyu lastiğin sürtünme izi bırakma ihtimali seçim sırasında ele alınır. İz bırakmayan lastikli model tercih edilse bile yüzeyin taşıma gücü, birleşim yerleri, kanal kapakları ve dönüş alanları ayrıca görülür. Makine keskin dönüşle zemini zorlamak yerine önceden çizilen rota üzerinde düşük hızda ilerler. Gereken yerlerde işletmenin uygun gördüğü koruyucu yüzey kullanılır; rastgele örtü teker altında kayma riski yaratmamalıdır. İş bitiminde güzergâh kontrol edilir, iz veya yüzey hasarı fark edilirse alan teslim edilmeden kayıt altına alınır.",
            },
            {
                baslik: "Teker, şasi altı ve sepet temizliğini girişten önce tamamlamak",
                metin:
                    "Dış saha ya da taşıma aracından gelen makinenin tekerlerinde çamur, metal kırıntısı veya genel yol kiri bulunabilir. Temiz alana girişten önce tekerler, şasi altı, sepet tabanı ve erişilebilir gövde yüzeyleri işletmenin kabul ettiği yöntemle temizlenir. Basınçlı havayla kiri çevreye yaymak varsayılan yöntem değildir. Sepette önceki işten ambalaj, bağ, sarf veya gevşek parça bırakılmaz. Makine dışarı çıkıp tekrar içeri girecekse ilk temizlik kalıcı kabul sayılmaz; yeniden kontrol edilir. Temizden kirliye doğru tek yönlü iş sırası mümkünse tercih edilir.",
            },
            {
                baslik: "Hidrolik sızıntı belirtisini küçük görmemek",
                metin:
                    "Makine sevkiyat öncesinde hortum, bağlantı, silindir çevresi ve alt yüzeyde görünür sızıntı açısından kontrol edilir. Teslimde yeni bir damlama, yağlı yüzey veya olağan dışı koku görülürse platform çalışma alanına alınmaz; kaynak bulunur ve uygun servis kararı verilir. Zemine damlayan sıvıyı yalnız silip kullanıma devam etmek doğru yaklaşım değildir. İş sırasında alt yüzey periyodik gözlenir. Koruyucu tava kullanımı yalnız ek tedbirdir, arızalı sistemi meşrulaştırmaz. Bu disiplin hassas zemini koruduğu kadar makinenin güvenli çalışmasını da destekler.",
            },
            {
                baslik: "Dar geçişte temas ve hava akımı riskini azaltmak",
                metin:
                    "Kapı, kolon, sabit ekipman ve üst tesisat çevresinden geçerken gövde ölçüsü kadar dönüş kuyruğu ve sepetin kapalı konumu önemlidir. Girişten hedefe en dar noktalar ölçülür, geçici malzeme kaldırılır ve gerektiğinde yerden bir yönlendirici kullanılır. Makine yüzeye dayanarak yön değiştirmez. Çalışma noktasında havalandırma akımı, asılı hafif malzeme veya çevredeki hareketli ekipman varsa saha yetkilisiyle ayrılır. Hedefe erişim, temiz makine şartı kadar önemlidir; uygun olmayan geometriyi daha hassas bir üniteyle zorlamak çözüm değildir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Temiz ekipman kabulünde fiziksel kontrol tablosu",
                paragraflar: [
                    "Aşağıdaki tablo belirli bir tesisin iç koşulunu tarif etmez. Hassas bir kapalı alana platform alınacaksa doğrulanabilecek genel fiziksel özellikleri ve uygunsuzlukta verilecek kararı gösterir.",
                ],
                tablo: {
                    basliklar: ["Kontrol alanı", "Aranan durum", "Saha hazırlığı", "Uygun değilse"],
                    satirlar: [
                        ["Tahrik", "Kapalı alana uygun akülü sınıf", "Şarj penceresi hazır", "Başka sınıf seç"],
                        ["Lastikler", "İz bırakmayan ve temiz", "Rota ile dönüşü ayır", "Giriş yapma"],
                        ["Şasi ve sepet", "Kir ve gevşek parça yok", "Kabul edilen yöntemle temizle", "Yeniden kontrol et"],
                        ["Hidrolik sistem", "Görünür sızıntı belirtisi yok", "Teslim öncesi gözlem", "Servis kararı ver"],
                        ["Zemin ve geçiş", "Taşıma ile ölçü uygun", "Kapı, kanal, dönüşü doğrula", "Alternatif rota/model"],
                    ],
                },
            },
            {
                baslik: "Dış sahadan hassas alana tek yönlü geçiş planı",
                paragraflar: [
                    "İş listesinde dış cephe veya yükleme çevresi ile temiz kapalı alan birlikte bulunuyorsa sıra rastgele kurulmaz. Mümkün olduğunda kapalı ve temiz iş önce tamamlanır, makine sonra daha kirli dış bölüme geçer. Ters sıra zorunluysa dönüşte teker, alt takım, sepet ve aletler için yeniden temizleme-kabul zamanı ayrılır. Bu ara adım kiralama süresinin dışında varsayılmaz; günlük plana yazılır.",
                    "Bölüm geçişinde zemin değişimi de kontrol edilir. Dışarıda eğim veya gevşek yüzey isteyen makine, içerideki dar ve hassas rotaya uygun olmayabilir. Tek ünitenin iki ortamı karşılayacağı varsayılmaz. İki sınıf gerekiyorsa işler ayrı bloklara alınır; temiz alana arazi tipi büyük bir modeli sokmak veya dış zeminde kompakt iç mekân makinesini zorlamak yerine güvenli sınırlar korunur.",
                ],
            },
            {
                baslik: "Çalışma sonunda yüzey ve makine kapanışı",
                paragraflar: [
                    "Sepet tamamen indirilip güvenli konuma gelmeden bariyer kaldırılmaz. Kullanılan rota, dönüş noktaları ve park alanı zeminde iz, sıvı, gevşek parça veya yüzey hasarı açısından işletme sorumlusuyla gözden geçirilir. Makinenin altı ile hidrolik bağlantılar yeniden kontrol edilir. Aletler ve sarflar sepetten çıkarılır. Temizlik gerekiyorsa tesisin yüzeye uygun yöntemini yetkili personel uygular; bilinmeyen kimyasal kullanılmaz.",
                    "Makine başka bir temiz bölüme geçecekse kapanış aynı zamanda yeni giriş kontrolüdür. İade edilecekse dışarıdaki güvenli yükleme alanına yönlendirilir ve hassas rota boyunca yerden gözcü eşliği sürer. Görünür uygunsuzluk sözlü bırakılmaz. Bu fiziksel teslim, A3'teki tedarikçi evrak zincirinden farklı olarak doğrudan zemin, gövde ve sızıntı durumunu kapatır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Akülü olan her platform hassas kapalı alana girebilir mi?",
                cevap:
                    "Hayır. Akülü tahrik egzozu ortadan kaldırır, fakat lastik izi, dış kir, hidrolik sızıntı, gövde ölçüsü, zemin yükü ve şarj düzeni gibi diğer koşulları çözmez. Makinenin iz bırakmayan lastiği, temizlenebilir yüzeyi ve görünür sızıntısız durumu doğrulanır. Kapı, dönüş ve çalışma tabanı ölçülür. Tesisin kendi ekipman kabul kuralı varsa ayrıca uygulanır. Bu kontrollerden biri karşılanmıyorsa sırf akülü diye ünite içeri alınmaz; uygun model veya farklı erişim yöntemi seçilir.",
            },
            {
                soru: "İz bırakmayan lastik zemini hiç bozmayacağını garanti eder mi?",
                cevap:
                    "Hayır; yalnız sürtünme kaynaklı koyu izi azaltır. Zeminin taşıma kapasitesi, birleşim yerleri, kapaklar, yüzey kaplamasının durumu ve dönüş hareketi ayrı risklerdir. Makinenin toplam yükü teknik birimce uygun bulunmalı, rota keskin manevrayı azaltacak biçimde çizilmelidir. Gerekli yüzey koruyucu ancak kayma yaratmayacak ve tesisçe kabul edilen tipte kullanılmalıdır. Teslim öncesi mevcut yüzey durumu görülür, iş sonunda rota tekrar kontrol edilir. Lastik seçimi bu planın tek parçasıdır, bütün garantisi değildir.",
            },
            {
                soru: "Makine dışarıda çalıştıktan sonra aynı gün tekrar içeri girebilir mi?",
                cevap:
                    "Girebilir, ancak ilk girişteki temizlik kabulü artık geçerli sayılmaz. Tekerler, alt takım, sepet ve kullanılan aletler yeniden gözden geçirilir; dışarıdan taşınan çamur, metal kırıntısı veya genel kir tesisin kabul ettiği yöntemle uzaklaştırılır. Hidrolik sızıntı belirtisi tekrar kontrol edilir. Bu temizlik ve kabul süresi gün planına eklenmelidir. Mümkünse rota temiz iç bölümden dış bölüme tek yönlü kurulur; gereksiz geri dönüşler azaltılır.",
            },
            {
                soru: "Hidrolik sistemin altına koruyucu tava koymak yeterli olur mu?",
                cevap:
                    "Tava yalnız ek bir koruma olabilir; görünür sızıntısı olan makinenin çalışmasını uygun hâle getirmez. Damlama, yağlı bağlantı veya olağan dışı koku fark edilirse kullanım başlamaz ya da durur. Kaynak servis tarafından değerlendirilir ve güvenli durum doğrulanır. Zemine ulaşan sıvı tesisin prosedürüne göre temizlenir, bilinmeyen ürün kullanılmaz. Koruyucu yüzey, sağlam ve sızıntısız makinenin beklenmedik küçük etkilerine karşı planlanabilir; arızayı örtmek için kullanılamaz.",
            },
            {
                soru: "Dar kapı ve hassas ekipman arasından makine nasıl geçirilir?",
                cevap:
                    "Kapının net ölçüsü, eşik, ilk dönüş, üst engeller ve hedefe kadar en dar koridor birlikte alınır. Geçici stok kaldırılır, rota yaya ve araç hareketinden ayrılır, makine düşük hızda yetkili kullanıcı tarafından yürütülür. Görüşün sınırlı olduğu dönüşte yerden bir yönlendirici kullanılır. Güvenlik parçası rastgele sökülmez ve gövde yüzeye dayanarak çevrilmez. Ölçü sınırdaysa fiziksel keşif veya daha kompakt sınıf gerekir; temas riskini kabul ederek geçiş yapılmaz.",
            },
            {
                soru: "Bu içerik havacılık kümesindeki tesislerin iç koşullarını doğruluyor mu?",
                cevap:
                    "Hayır. Doğrulanan kamuya açık çerçeve yalnız Eskişehir OSB'de havacılık motor sanayisi çevresinde bir kümenin varlığıdır. Belirli bir tesisin temiz oda, hassas hat, özel zemin veya üretim prosesi bulunduğu iddia edilmez. Temiz ve elektrikli makine yaklaşımı, böyle bir fiziksel kabul gereksinimi sahada gerçekten beyan edilirse uygulanacak genel yöntemdir. Nihai şartlar tesisin yetkili kişisinden ve gerçek saha ölçüsünden alınır; sektör adına varsayım üretilmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Eskişehir OSB içinde havacılık motor sanayisi çevresinde bir kümenin varlığı uygulama belgesindeki kamuya açık genel bilgidir. Belirli tesisin iç mekânı, prosesi, temizlik sınıfı, zemini, ürünü, kapasitesi veya güvenlik rejimi hakkında iddia kurulmamıştır; akülü tahrik, iz bırakmayan lastik, sızıntı ve yüzey koruma adımları koşullu sektör geneli ekipman pratiğidir.",
    },

    "bolge:beylikova": {
        h1: "Beylikova'da Sanayi Yapısı ve Kamu Binası İçin Platform Kiralama",
        giris:
            "Beylikova ilçe sayfasının kapsamı, Beylikova OSB'deki hat kurulumu veya devreye alma pencereleri değildir. Burada ilçe ölçeğinde karşılaşılabilen sanayi yapısı, küçük atölye, depo, belediye ya da başka kamu kullanımındaki bina, ticari cephe ve ortak alan bakımını; belirli bir tesis veya kurum adı vermeden ele alıyoruz. Aynı ilçe içinde çelik çatılı bir işletme yapısının oluk ve aydınlatma ihtiyacıyla, vatandaş kullanımındaki bir binanın yüksek hol veya dış cephe işi farklı saat, zemin ve çevre güvenliği ister. Makine seçimi sektör varsayımıyla değil kapı, çalışma kotu, yatay engel, zemin, yaya-araç trafiği ve hizmetin durabileceği pencereyle yapılır. Sanayi yapısında üretim ya da yükleme hareketi ayrılır; kamu binasında kullanıcı geçişi, giriş kapısı ve hassas zemin korunur. Kısa işler tek bakım listesinde toplanabilir, fakat iki ortamın kuralları birbirine aktarılmaz. Böylece Beylikova OSB kayıtlarının tesis yaşam döngüsü ve lojistik anlatısından ayrılan, ilçe genelindeki farklı yapıların erişim gereksinimlerini dürüstçe sınıflandıran bir sayfa oluşur.",
        maddeler: [
            {
                baslik: "Sanayi yapısında çatı altı ve kapı üstü bakım",
                metin:
                    "Küçük veya orta ölçekli sanayi yapısında aydınlatma, havalandırma, kablo hattı, seksiyonel kapı üstü ve çatı bağlantıları aynı listede bulunabilir. Hedefin altında tezgâh veya stok varsa yandan uzanma gereksinimi ölçülür. Kapı mekanizması ve hareketli ekipman tesis yetkilisince güvenli duruma getirilir. Platform yük veya parça kaldırmak için kullanılmaz. Kapalı hacimde egzoz üretmeyen sınıf değerlendirilir; dar koridor ile dönüş alanı girişten hedefe kadar görülür. İşler aynı konumdan kapanabilen gruplara ayrılarak gereksiz geçiş azaltılır.",
            },
            {
                baslik: "Kamu binasında yaya rotasını hizmetten ayırmak",
                metin:
                    "Kamu kullanımındaki yapıda ziyaretçi ve personel hareketi çalışma alanının altından geçirilmez. Yüksek hol, cephe, giriş üstü, armatür veya oluk işi kullanımın daha seyrek olduğu pencereye alınır. Bariyer, makine tabanından daha geniş biçimde sepet hareketi ve düşebilecek parça alanını kapsar. Alternatif giriş ve erişilebilir rota tesis yönetimiyle belirlenir; acil çıkış kapatılmaz. İç mekânda akülü, kompakt ve zemine uygun lastikli model değerlendirilir. İş sonunda alan temizlenip bina sorumlusuna teslim edilmeden yaya rotası açılmaz.",
            },
            {
                baslik: "Ticari cephe ve ilçe içi ortak alanda kısa çalışma",
                metin:
                    "Tabela, dış aydınlatma, klima dış ünitesi çevresi veya cephe bağlantısı gibi kısa işler yaya ve araç hareketi nedeniyle dikkatli saat planı ister. Makine kaldırıma veya ortak yola taşacaksa ilgili alanın kullanım koşulu yetkili tarafla netleştirilir. Sepet aktif trafiğin üstüne uzatılmaz. Uzun tabela ve panel sepetten kaldırılmaz; malzeme uygun yöntemle ayrı taşınır. Birkaç cephe işi aynı gün yapılacaksa her adresin park, bariyer ve sorumlusu önceden belirlenir. Ortak tur izinleri birleştirmez.",
            },
            {
                baslik: "İlçe ölçeğinde teslim rotasını önceden görmek",
                metin:
                    "Ana yol uygun olsa bile son sokak, parsel kapısı, avlu dönüşü veya bina girişi taşıyıcı ile platform için dar olabilir. Talepte indirme noktası, en dar geçiş, zemin, rampa, kanal ve hedefe kadar rota fotoğraflanır. Kamu yapısında iç kapı ve zemin taşıması; sanayi parselinde araç trafiği ile dolgu yüzey ayrıca görülür. Teslim günü park etmiş araç veya yeni istif rotayı değiştirmişse eski plan zorlanmaz. Alternatif güvenli güzergâh onaylanır veya çalışma penceresi değiştirilir.",
            },
            {
                baslik: "Kısa kalemleri ortak bakım gününe hazırlamak",
                metin:
                    "Tek armatür veya kısa oluk işi için taşıma payı yüksek kalabilir. Aynı işletme veya kurum, bekleyen aydınlatma, cephe, havalandırma, kapı ve çatı kalemlerini bölüm bölüm toplarsa tek sevkiyat daha verimli olur. Farklı adresler tarih ve makine sınıfı uyuyorsa sırayla planlanabilir; her adresin teklifi ve teslimi ayrıdır. Malzeme, erişim izni ve teknik yetkili platform gelmeden hazır bulunur. Hazır olmayan hedef uğruna bütün program bekletilmez, fakat sonradan eklenen iş de ölçüsüz biçimde araya alınmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Beylikova yapı türüne göre erişim tablosu",
                paragraflar: [
                    "Aşağıdaki tablo belirli işletme veya kurumun varlığına ilişkin envanter değildir; ilçe ölçeğinde gerçek talep geldiğinde yapı koşulunu sınıflandırmak için kullanılan genel çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Yapı/alan", "Yüksek iş", "Ana kısıt", "Hazırlık"],
                    satirlar: [
                        ["Sanayi yapısı", "Aydınlatma ve üst tesisat", "Tezgâh, üretim hareketi", "Hücreyi ayır ve izole et"],
                        ["Depo", "Raf üstü ve çatı altı", "İstif, koridor", "Boş güzergâh oluştur"],
                        ["Kamu binası içi", "Hol ve armatür", "Yaya kullanımı, zemin", "Kullanım dışı pencere"],
                        ["Kamu/ticari cephe", "Tabela, oluk, dış ünite", "Giriş ve ortak alan", "Alternatif rota belirle"],
                        ["Kırsal parsel yapısı", "Çatı ve dış aydınlatma", "Son giriş, zemin, hava", "Teslim günü doğrula"],
                    ],
                },
            },
            {
                baslik: "Sanayi ve kamu işlerini aynı makineyle yapma kararı",
                paragraflar: [
                    "İki yapıdaki hedef kotu benzer olsa bile uygun sınıf aynı olmayabilir. Sanayi yapısında tezgâh üstüne yatay uzanma, kamu binasında dar kapı ve hassas zemin baskın olabilir. Dış cephede ise rüzgâr, park alanı ve yaya trafiği devreye girer. Her iş ayrı erişim kartına yazılır; kapı, zemin, engel ve sepet yükü karşılaştırılır. Tek kompakt akülü sınıf hepsini güvenle kapsıyorsa ortak program kurulabilir.",
                    "Dışarıda bozuk zemin veya uzun uzanma için daha büyük bir bom gerekirken iç yapı dar gövde istiyorsa iki sınıf ayrılır. Tek makine kullanma hedefi, uygun olmayan modeli binaya sokma gerekçesi değildir. Aynı taşıma programında iki ünitenin dağıtılması ya da işlerin ayrı günlere alınması toplam planla değerlendirilir. Karar gerekçesi teklifte açıkça yazılır.",
                ],
            },
            {
                baslik: "Mesai ve hizmet penceresini işi kapatacak biçimde kurmak",
                paragraflar: [
                    "Kamu binasında hizmetin seyreldiği, sanayi yapısında ilgili ekipmanın durabildiği, ticari cephede yaya-araç hareketinin azaldığı saatler birbirinden farklıdır. Program tek bir 'mesai dışı' varsayımına dayanmaz. Her adreste alanı teslim edecek yetkili, enerji kesme sorumlusu ve yeniden açılma saati belirlenir. Makine pencere başlamadan güvenli biçimde kabul edilmiş olmalıdır.",
                    "Kapanış için alet-parça sayımı, bağlantı kontrolü, alan temizliği ve sorumlu kabulü zaman ayrılır. Hizmet saati geldi diye sepet açıkken bariyer kaldırılmaz. İş yetişmiyorsa açık kalan kalem yazılır ve yeni pencereye taşınır. Bu yaklaşım ilçe genelindeki kısa işleri hızlandırırken kamu kullanımı ile sanayi hareketini birbirine karıştırmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Beylikova ilçe sayfası Beylikova OSB hizmetinden nasıl ayrılıyor?",
                cevap:
                    "OSB kayıtları tesis içi kurulum, devreye alma, planlı bakım veya lojistik gibi organize sanayi pratiğine odaklanır. Bu sayfa ise ilçe ölçeğinde sanayi yapısı, depo, kamu kullanımlı bina, ticari cephe ve ortak alan gibi farklı yapıların erişim koşullarını ele alır. Belirli bir tesis veya kurum envanteri çıkarmıyoruz. Gerçek talepte yapı türü, kapı, zemin, hedef, yaya-araç trafiği ve hizmet penceresi doğrulanır. Aynı ilçe adı, içeriklerin aynı işi anlattığı anlamına gelmez.",
            },
            {
                soru: "Kamu binasında hizmet sürerken platform kullanılabilir mi?",
                cevap:
                    "Fiziksel olarak ayrılmış ve alternatif yaya rotası bulunan bazı alanlarda mümkün olabilir, ancak sepet hareketi veya düşen parça alanı kullanıcılarla kesişmez. Yüksek hol ya da ana giriş gibi yoğun noktalar daha sakin saate alınır. Acil çıkış ve erişilebilir güzergâh kapatılmaz. Bariyer planı bina sorumlusuyla yapılır. Gürültü, zemin ve kapı koşuluna uygun akülü model seçilir. Güvenli ayrım kurulamıyorsa hizmet dışı pencere beklenir; işin kısa olması kullanıcı riskini kabul ettirmez.",
            },
            {
                soru: "Sanayi yapısındaki tezgâh üstü noktaya nasıl erişirsiniz?",
                cevap:
                    "Tezgâhın yanındaki güvenli park alanından eklemli erişim değerlendirilebilir. Hedef kotu, tezgâh veya hattın yüksekliği ve yatay uzaklık ölçülür; modelin erişim diyagramıyla karşılaştırılır. Tezgâh enerji ve hareket açısından tesis yetkilisince güvenli duruma getirilir, alt hücre boşaltılır ve aletler bağlanır. Sepet tezgâha dayanmaz, platformdan ekipman üzerine geçilmez. Uzanma sınırı yetmiyorsa farklı model ya da park noktası seçilir; sabit ekipman rastgele sökülmez.",
            },
            {
                soru: "İç mekân zemini hassassa hangi önlemler alınır?",
                cevap:
                    "Önce yapının teknik biriminden zemin taşıma uygunluğu alınır. İz bırakmayan lastikli, kompakt akülü sınıf değerlendirilir; kanal kapakları, birleşimler, rampa ve keskin dönüşler rota üzerinde işaretlenir. Tesisçe uygun bulunan koruyucu yüzey gerekiyorsa kayma yaratmayacak biçimde kullanılır. Makine düşük hızda ilerler ve dar dönüşte yerden yönlendirme yapılır. Teslim öncesi mevcut zemin durumu görülür, iş sonunda rota tekrar kontrol edilir. Lastik seçimi taşıma kapasitesinin yerine geçmez.",
            },
            {
                soru: "Tek bir kısa cephe işi için ilçeye sevkiyat yapılır mı?",
                cevap:
                    "Yapılabilir, fakat taşıma kaleminin toplam içindeki etkisi açıkça gösterilir. Önce aynı adreste bekleyen oluk, aydınlatma, tabela, kapı ve dış ünite çevresi gibi diğer yüksek erişim ihtiyaçlarını toplamanızı öneririz. Tarih ve sınıf uyarsa başka hazır adreslerle bir ilçe turu kurulabilir; her müşterinin sözleşme ve teslimi ayrı kalır. Acil güvenlik işi bekletilmez. Ekonomik çözüm, kapsamı saklamak değil tekil ve birleşik seçenekleri karşılaştırmaktır.",
            },
            {
                soru: "Tek makine hem kamu binası hem sanayi yapısı için yeterli olur mu?",
                cevap:
                    "Kapı, zemin, erişim geometrisi, egzoz kısıtı ve çalışma tabanı aynı sınıfla uyumluysa olabilir. Kompakt akülü eklemli model bazı karma listeleri kapatabilir. Fakat sanayi dış sahası bozuk zemin veya uzun uzanma, kamu binası ise dar geçiş ve hassas yüzey istiyorsa iki farklı sınıf gerekir. İşleri sırf tek sevkiyata sığdırmak için makine sınırı zorlanmaz. Fotoğraf ve ölçülerle kapsama haritası çıkarır, hangi hedeflerin ortak sınıfla kapanacağını teklifte gösteririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Beylikova'nın Eskişehir'in ilçesi olması ve görevde ilçe ölçeğinde sanayi-kamu binası çapası kamuya açık uygulama çerçevesidir. Belirli işletme, kurum, tesis, sektör, kapasite ve doğrulanmamış rakam kullanılmamıştır; erişim, yaya ayrımı, zemin ve bakım turu koşullu sektör geneli saha pratiğidir.",
    },

    "bolge:seyitgazi": {
        h1: "Seyitgazi'de Seramik Hammadde Sahaları Çevresinde Platform Kiralama",
        giris:
            "Seyitgazi için bu sayfanın merceği enerji veya haberleşme direkleri değil; uygulama belgesinin verdiği seramik hammadde sahaları çevresindeki yardımcı yapı, bakım noktası ve tesis dış kabuğuna güvenli erişimdir. Belirli bir ocak, işletme, mineral, üretim kapasitesi ya da saha içi düzen hakkında varsayım yapılmaz. Hammadde çevresinde gerçek talep geldiğinde doğrulanacak koşullar üzerinden ilerleriz: stabilize veya gevşek yaklaşım yolu, tozlu açık yüzey, eğim, ağır araç hareketi, çelik çatılı yardımcı yapı, dış aydınlatma, sundurma, oluk ve kapı üstü bakım. Platform hammadde çıkarmak, yüklemek veya taşımak için kullanılmaz; personeli izin verilen bakım noktasına ulaştırır. Makinenin kendisinden önce taşıyıcının sahaya gireceği rota ve güvenli indirme yeri görülür. Çalışma alanı saha araçlarından ayrılır, rüzgâr ve zemin her vardiyada yeniden değerlendirilir, açık sahadan kapalı yardımcı hacme geçişte alt takım temizlenir. Böylece mevcut Seyitgazi direk-vinç anlatısından ayrılan, seramik hammadde çevresindeki toz, yüzey, araç trafiği ve yardımcı yapı bakımına odaklanan bir içerik oluşur.",
        maddeler: [
            {
                baslik: "Taşıyıcı rotası ile çalışma rotasını ayrı değerlendirmek",
                metin:
                    "Platformun arazi üzerinde ilerleyebilmesi, onu getiren taşıyıcının aynı yere güvenle ulaşacağı anlamına gelmez. Yol genişliği, dönüş, eğim, yüzey taşıması ve indirme tabanı fotoğrafla görülür. Taşıyıcı için uygun sert nokta belirlenir; platformun oradan hedefe kendi yürüyüşüyle gideceği rota ayrıca değerlendirilir. Kamu yolunda veya uzun belirsiz güzergâhta otomatik yürütme kararı verilmez. Yağış sonrası yüzey eski keşifle aynı kabul edilmez. Teslim günü saha sorumlusuyla rota yürünür, çukur, gevşek dolgu ve aktif araç yolu yeniden işaretlenir.",
            },
            {
                baslik: "Mineral tozu ve açık yüzeyde görüş-temizlik düzeni",
                metin:
                    "Hammadde çevresindeki tozun niteliği ve yoğunluğu tesis tarafından bildirilir; platform ekibi varsayımla ortam sınıflandırması yapmaz. Görüşü azaltan veya teker tutunmasını etkileyen birikim çalışma tabanından uzaklaştırılır. Makinenin hava açıklıkları, kumanda çevresi ve hareketli noktaları uzun kullanımda gözle kontrol edilir. Basınçlı havayla tozu gelişigüzel yaymak yerine işletmenin kabul ettiği temizlik yöntemi kullanılır. Açık alandan kapalı yardımcı yapıya girilecekse teker ve alt takım temizlenir. Kıvılcım çıkaran bakım, tesisin risk değerlendirmesi ve izni olmadan yürütülmez.",
            },
            {
                baslik: "Ağır araç trafiğinden bağımsız çalışma hücresi",
                metin:
                    "Hammadde sahası çevresinde kamyon, yükleyici veya başka iş makineleri geniş dönüş ve sınırlı görüşle hareket edebilir. Platformun tabanına birkaç koni koymak yeterli değildir; bomun hareket zarfı ve düşen parça alanı araç rotasından ayrılır. Girişlerde görünür bariyer, gerektiğinde gözcü ve saha içi iletişim düzeni kullanılır. Araç sürücüsünün platformu gördüğü varsayılmaz. Çalışma hücresi açılmadan önce sepet toplanır ve makine güvenli konuma geçer. Acil yol, pano önü ve saha çıkışı kapatılmaz.",
            },
            {
                baslik: "Yardımcı yapı ve dış kabuk işlerini toplamak",
                metin:
                    "Çelik çatılı depo veya bakım yapısı, sundurma, kapı üstü donanım, oluk, dış aydınlatma, kamera ve cephe bağlantıları tek saha ziyaretinde değerlendirilebilir. Her hedefin kotu, yatay engeli ve zemin noktası ayrı kaydedilir. Çatıya platform sepetinden geçilmez; uzun panel veya ağır parça sepetle kaldırılmaz. Kapalı yapıda egzozsuz sınıf gerekirken açık bozuk zeminde arazi kabiliyeti öne çıkabilir. Tek makinenin iki ortamı karşılamadığı durumda işleri sınıflara ayırmak, uygunsuz üniteyi zorlamaktan güvenlidir.",
            },
            {
                baslik: "Rüzgâr ve yağış için yedek bakım listesi",
                metin:
                    "Açık sahada platformun üretici rüzgâr ve eğim sınırları değişmez. Koşul uygun değilse sepet yükseltilmez. Kiralama gününün tümünü tek dış hedefe bağlamamak için kapalı yardımcı hacimde veya daha korunaklı alanda güvenle yapılabilecek kalemler önceden hazırlanabilir. Yağış yüzeyi yumuşatmışsa yalnız rüzgârın dinmesi yetmez; duruş zemini yeniden teyit edilir. Yedek işin malzemesi, izni ve enerji yetkilisi hazır değilse rastgele başka işe başlanmaz. Bekleme ve yeni tarih koşulu teklif aşamasında açıklanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hammadde sahası çevresinde alan-risk eşleştirmesi",
                paragraflar: [
                    "Aşağıdaki tablo belirli bir Seyitgazi tesisinin envanteri değildir. Seramik hammadde çevresinde gerçek bir talep geldiğinde çalışma alanını ve güvenli hazırlığı sınıflandırmak için genel bir başlangıç sunar.",
                ],
                tablo: {
                    basliklar: ["Alan", "Erişim işi", "Baskın koşul", "Hazırlık"],
                    satirlar: [
                        ["Açık saha", "Direk, kamera, dış aydınlatma", "Toz, araç trafiği", "Bağımsız hücre ayır"],
                        ["Yardımcı yapı dışı", "Oluk, panel, cephe", "Rüzgâr ve yatay erişim", "Hava penceresi belirle"],
                        ["Kapalı depo/bakım hacmi", "Aydınlatma ve üst tesisat", "Kapı, egzoz, koridor", "Akülü sınıfı ölç"],
                        ["Sundurma ve kapı", "Bağlantı ve mekanizma", "Araç geçişi", "Hareketi durdur"],
                        ["İndirme-parking alanı", "Teslim ve gece parkı", "Zemin, eğim, dolgu", "Taşıma yeterliliğini teyit et"],
                    ],
                },
            },
            {
                baslik: "Fotoğraf ve ölçüyle açık saha keşfi",
                paragraflar: [
                    "Fotoğraf dizisi ana yaklaşım yolundan başlamalı, taşıyıcının döneceği ve platformun indirileceği alanı, sonra makinenin hedefe kadar izleyeceği yüzeyi göstermelidir. Eğim, çukur, kanal, gevşek dolgu, aktif araç rotası ve hedefin önündeki engel geniş açıyla kaydedilir. Çalışma kotu ile yatay uzaklık ölçülür. Yalnız yakın çekim bakım noktası doğru sınıfı belirlemez.",
                    "Teslim günü hava ve üretim hareketi nedeniyle saha değişmiş olabilir. Rota saha sorumlusuyla yeniden yürünür; yeni malzeme yığını veya park edilmiş araç güvenli alanı daraltıyorsa alternatif konum ölçülür. Platformun erişim diyagramı yeni noktaya göre kontrol edilir. Ön keşif bu canlı kabulün yerine geçmez, fakat yanlış makinenin uzun bir güzergâha çıkarılmasını önler.",
                ],
            },
            {
                baslik: "Tozlu dış işten kapalı bakıma geçiş",
                paragraflar: [
                    "Aynı platform hem dış saha hem kapalı yardımcı yapı için uygunsa sıra temiz kapalı hacimden açık tozlu alana doğru kurulabilir. Ters geçiş zorunluysa teker, alt takım, sepet ve aletler işletmenin kabul ettiği yöntemle temizlenir; görünür sızıntı ve hasar kontrol edilir. Bu ara süre çalışma programına yazılır. Kirli makine yalnız kapıdan sığıyor diye içeri alınmaz.",
                    "Dışarıdaki arazi tipi ünitenin gövdesi kapalı koridora uygun olmayabilir; içerideki kompakt akülü model de gevşek zeminde güvenli olmayabilir. İki koşulu tek sınıfta birleştirmek mümkün değilse ayrı makine veya ayrı gün planlanır. Amaç sevkiyat sayısını her ne pahasına olursa olsun azaltmak değil, her ortamı üretici sınırında kapatmaktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bu sayfa Seyitgazi'de belirli bir maden veya tesis olduğunu iddia ediyor mu?",
                cevap:
                    "Hayır. Uygulama belgesinin verdiği kamuya açık çapa, ilçede seramik hammadde sahaları çevresi işleridir. Belirli ocak, firma, mineral, üretim biçimi, ekipman, kapasite veya saha düzeni belirtilmez. İçerik koşulludur: gerçek talep böyle bir çevreden gelirse yol, zemin, toz, araç trafiği, yardımcı yapı ve erişim hedefi sahada doğrulanarak plan yapılır. Platform ekibi proses hakkında varsayım üretmez; tesisin risk değerlendirmesi ve yetkili açıklaması esas alınır.",
            },
            {
                soru: "Stabilize yoldan platform sahaya getirilebilir mi?",
                cevap:
                    "Yüzeyin taşıma durumu, yol genişliği, dönüş, eğim ve yağış koşulu uygunsa getirilebilir. Önce taşıyıcının güvenli indirme noktasına ulaşıp ulaşamayacağı değerlendirilir; sonra platformun hedefe kendi yürüyüşüyle gideceği rota ayrı ele alınır. Uzun veya kamu trafiğine açık güzergâh otomatik kabul edilmez. Fotoğraf ve ölçüyle ön plan yapılır, teslim günü yüzey yeniden görülür. Zemin yumuşamış veya rota kapanmışsa daha büyük makine göndermek çözüm değildir; yüzey hazırlanır ya da tarih değiştirilir.",
            },
            {
                soru: "Tozlu açık sahada standart platform kullanılabilir mi?",
                cevap:
                    "Yalnız 'tozlu' tanımıyla kesin uygunluk verilemez. Tozun niteliği, ortam risk değerlendirmesi, görüş, zemin tutunması ve makine üretici sınırları tesis yetkilisiyle değerlendirilir. Çalışma tabanı temizlenir, hareketli noktalar uzun kullanımda gözlenir ve kabul edilen temizlik yöntemi uygulanır. Kıvılcım çıkaracak iş ayrıca izin ister. Ortam sınıflandırması bilinmiyorsa platform firması tahmin yapmaz; uygunluk netleşmeden makine çalıştırılmaz. Akülü olması bütün toz risklerini kendiliğinden çözmez.",
            },
            {
                soru: "Saha araçları çalışırken dış aydınlatma bakımı yapılabilir mi?",
                cevap:
                    "Yalnız çalışma hücresi araç rotasından fiziksel ve operasyonel olarak ayrılabiliyorsa mümkündür. Bomun bütün hareket zarfı ile düşebilecek parça alanı bariyerlenir; girişlerde yönlendirme ve gerektiğinde gözcü bulunur. Sürücünün platformu gördüğü varsayılmaz. Hücreyi kesen kamyon veya yükleyici hareketi durur ya da başka rotaya alınır. Ayrım kurulamıyorsa bakım araç trafiğinin durduğu pencereye taşınır. Birkaç koni, geniş dönüşlü ağır araçlara karşı tek başına yeterli koruma değildir.",
            },
            {
                soru: "Aynı makine açık saha ve kapalı yardımcı yapıda çalışabilir mi?",
                cevap:
                    "Kapı, dönüş, egzoz, lastik, zemin ve erişim geometrisi aynı sınıfla uyumluysa çalışabilir. İş sırası mümkünse temiz kapalı hacimden dış alana kurulur. Dışarıdan içeri dönüşte teker, alt takım, sepet ve aletler yeniden temizlenip kontrol edilir. Arazi tipi büyük makine içeri sığmıyor veya kompakt akülü ünite dış zeminde güvenli değilse iki sınıf gerekir. Tek makine hedefi, üretici sınırının ve ortam uygunluğunun önüne geçmez.",
            },
            {
                soru: "Rüzgâr veya yağış işi durdurursa kiralama nasıl ilerler?",
                cevap:
                    "Makinenin üretici rüzgâr sınırı aşıldığında ya da zemin güvenli taşıma durumunu kaybettiğinde çalışma durur. Önceden hazırlanmış, aynı sınıfla güvenle yapılabilecek kapalı veya korunaklı iş varsa yedek listeye geçilebilir. Malzeme ve izin hazır değilse rastgele yeni kalem açılmaz. Bekleme, alternatif gün ve yeniden sevkiyat koşulları teklif aşamasında yazılır. Yağış bittikten sonra yalnız hava değil zemin de yeniden kontrol edilir; yüzey toparlanmadan sepet yükseltilmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Seyitgazi'de seramik hammadde sahaları çevresi işleri uygulama belgesinde verilen kamuya açık genel çapadır. Belirli ocak, mineral, firma, tesis, üretim, kapasite, mesafe ve doğrulanmamış rakam kullanılmamıştır; zemin, toz, araç trafiği, yardımcı yapı ve temiz-kirli rota anlatımı koşullu sektör geneli saha pratiğidir.",
    },
};
