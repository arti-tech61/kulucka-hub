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
};
