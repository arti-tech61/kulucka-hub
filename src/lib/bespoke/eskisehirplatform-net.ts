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

    // ═══════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI — Bu dosyanın kalite denetimi/sertifikasyon eksenini
    // korur, ancak her hizmet kaydını KENDİ ekipman mantığıyla o eksene bağlar.
    // eskisehirmanlift-net.ts (üretim hattı bakımı/duruş takvimi),
    // eskisehirvincplatform-com.ts, manlifteskisehir-com.ts ve
    // eskisehirplatformkiralama-net.ts ile AYNI 11 slug kullanılır ama
    // buradaki her sayfa "denetim/tetkik/kalibrasyon/kayıt" çerçevesinden
    // yazılmıştır — üretim bakımı, duruş takvimi ya da rüzgâr/kamu binası
    // anlatısı kullanılmamıştır. Yazım: 2026-08-14.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli Örümcek Platform: Arşiv Odası ve Laboratuvar Koridorunda Kayıt Erişimi",
        giris:
            "Kalite biriminin arşiv odaları, kalibrasyon laboratuvarları ve numune depoları genellikle üretim holü gibi geniş kapılı tasarlanmaz; bu hacimler bina projesinde çoğunlukla ikincil alan sayıldığı için kapı, koridor ve raf arası mesafe dar tutulur. Standart eklemli platformun şasesi bu tür bir arşiv koridorundan ya da laboratuvar kapısından geçemediğinde, parçalı taşınabilen ve paletli tahrikle hassas zeminde iz bırakmadan ilerleyen sepetli örümcek platform devreye girer. Bu makineyi ana çözüm değil, dar geçişli kayıt ve kalibrasyon hacimlerine özgü tamamlayıcı bir araç olarak konumlandırıyoruz; geniş bir arşiv katında ya da açık ofis holünde hâlâ eklemli sınıfı öneririz, çünkü çalışma yüksekliği ve kurulum hızı bakımından daha avantajlıdır. Bu sayfada örümcek platformun hangi denetim ve kalibrasyon senaryolarında gerçekten gerekli olduğunu, kapı ölçüsünün nasıl doğrulandığını ve hassas evrak taşınırken nelere dikkat ettiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Arşiv koridoru ölçüsü keşifle doğrulanır",
                metin:
                    "Sepetli örümcek platformun parçalı gövdesi bile her arşiv kapısından geçmeyebilir; kapı kanadı, üst kasa ve varsa eşik farkı keşif sırasında ölçülür. Arşiv odaları genellikle sonradan bölme duvarla küçültülmüş olabilir, bu yüzden plan üzerindeki ölçüye değil sahada ölçtüğümüz rakama göre teklif veririz.",
            },
            {
                baslik: "Paletli tahrik ve hassas laboratuvar zemini",
                metin:
                    "Kalibrasyon laboratuvarlarının zemini genellikle antistatik ya da özel kaplamalıdır ve tekerlekli platformların bıraktığı ize karşı hassastır. Paletli tahrik yükü geniş bir yüzeye yayarak bu izi önler; destek ayakları da hassas kaplamaya ek koruyucu tampon ile temas eder.",
            },
            {
                baslik: "Sepette hassas evrak veya numune taşınırken",
                metin:
                    "Kalite personeli sepette kayıt kutusu ya da numune taşıyacaksa sepetin mikro hareket kabiliyeti ve sabit durma performansı önem kazanır; ani sarsıntı, elde tutulan bir belgenin düşmesine ya da numunenin karışmasına yol açabilir. Bu yüzden operatörümüz kayıt taşınan işlerde hareketi kademeli ve düşük hızda yapar.",
            },
            {
                baslik: "Montaj-demontaj süresi tetkik takvimine dahildir",
                metin:
                    "Parçalı gövdenin dar kapıdan geçirilip yeniden monte edilmesi zaman alır; bu süre tetkik penceresinin dışında değil içindedir ve teklife ayrıca yazılır. Tetkik günü sabahı erken kurulum yaparak denetçinin geldiği saatte makinenin hazır olmasını sağlarız.",
            },
            {
                baslik: "Kapasite ve alet-numune ağırlığının birlikte hesaplanması",
                metin:
                    "Kompakt gövde sepet kapasitesini sınırlar; birden fazla arşiv kutusu ya da ağır bir numune seti taşınacaksa kapasite sınırı önceden kontrol edilir. Aşım riski varsa taşıma iki turda ya da halatla malzeme indirme yöntemiyle planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hangi kayıt hacminde hangi platform sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, kalite ve denetim işlerinde sıkça karşılaştığımız erişim senaryolarını özetler; örümcek platform yalnızca dar geçişli ya da zemin hassasiyeti yüksek noktalarda ilk tercih.",
                ],
                tablo: {
                    basliklar: ["Erişim senaryosu", "Kapı/koridor genişliği", "Zemin hassasiyeti", "Önerilen sınıf"],
                    satirlar: [
                        ["Açık arşiv katı", "Geniş", "Standart beton", "Eklemli"],
                        ["Dar arşiv koridoru", "Dar", "Antistatik/hassas", "Örümcek platform"],
                        ["Kalibrasyon laboratuvarı içi", "Çok dar", "Özel kaplama", "Örümcek platform"],
                        ["Ofis katı genel bakım", "Standart", "Halı/laminat", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Kapı ölçüsü paylaşılmadan kesin teklif verilmez",
                paragraflar: [
                    "Örümcek platform talebi geldiğinde önce standart sınıfın neden yetmediğini soruyoruz; çoğu zaman cevap gerçek bir dar geçiş olsa da bazen kayıt odasının ölçüsü hiç alınmamış olabilir. Bu yüzden kapı ve koridor ölçüsünü keşifte kendimiz alıyoruz ve yalnızca bu ölçüye göre kesin teklif veriyoruz.",
                    "Ölçü doğrulanmadan verilen tahmini fiyat, sahada makinenin geçmediği ortaya çıktığında tetkik takvimini aksatabilir; bu yüzden bu sınıfta telefon üzerinden kesin teklif vermiyoruz.",
                ],
            },
            {
                baslik: "Bu sınıf ne zaman gerekmez",
                paragraflar: [
                    "Çoğu arşiv katı ya da ofis koridoru eklemli platform için yeterli geniştir; örümcek platform istisnai bir çözümdür. Çalışma yüksekliği ve yatay erişimi eklemli sınıfın gerisinde kaldığı için gerekmediği yerde tercih edilmesi hem maliyeti hem iş süresini uzatır.",
                    "Bu nedenle talep geldiğinde önce standart sınıfın neden çalışmadığını netleştiriyoruz; gerçekten dar bir geçiş yoksa örümcek platform yerine eklemli sınıfı öneriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Arşiv odamızın kapısı dar, standart platform giremiyor; ne yapıyorsunuz?",
                cevap:
                    "Kapı ve koridor ölçüsünü keşifte kendimiz alıyor, parçalı taşınabilen sepetli örümcek platformu bu ölçüye göre seçiyoruz. Montaj-demontaj süresini tetkik takviminize göre planlıyor, denetçinin geldiği saatte makinenin hazır olmasını sağlıyoruz. Ölçü paylaşılmadan kesin teklif vermiyoruz, çünkü sahada makinenin geçmediği ortaya çıkarsa tetkik takvimi aksar.",
            },
            {
                soru: "Laboratuvar zeminimiz özel kaplamalı, iz bırakır mı?",
                cevap:
                    "Paletli tahrik yükü geniş bir yüzeye yayarak standart tekerlekli platforma göre iz bırakma riskini azaltır; yine de yüzde yüz garanti vermiyoruz. Hassasiyeti yüksek bir zeminde önce küçük ve göze çarpmayan bir alanda deneme yapılmasını öneriyoruz, destek ayaklarına ek koruyucu tampon koyuyoruz.",
            },
            {
                soru: "Sepette kayıt kutusu veya numune taşınacak, bu güvenli mi?",
                cevap:
                    "Sepetin mikro hareket kabiliyeti sayesinde kademeli ve düşük hızda ilerliyoruz; ani sarsıntı riskini bu şekilde azaltıyoruz. Kayıt kutusu ya da numune taşıyan personelin sepette rahat durabilmesi için hareket öncesi kısa bir bilgilendirme yapıyoruz. Ağır ya da çok sayıda parça varsa taşımayı iki tura bölmeyi öneriyoruz.",
            },
            {
                soru: "Montaj-demontaj süresi tetkik saatimizi geciktirir mi?",
                cevap:
                    "Geciktirmemesi için tetkik günü sabahı erken kurulum yapıyor, denetçinin geldiği saatte makineyi hazır bulunduruyoruz. Bu süre teklife ayrıca yazılır, gizli bir kalem değildir. Sık tekrarlanan işlerde makinenin sahada demonte bırakılıp bırakılamayacağını da değerlendiriyoruz.",
            },
            {
                soru: "Kaç arşiv kutusu bir seferde taşınabilir?",
                cevap:
                    "Kompakt gövde nedeniyle bu sınıfın taşıma kapasitesi standart eklemli platforma göre daha düşüktür; kapasite sınırını keşifte bildiriyoruz. Sınır aşılacaksa taşımayı iki turda ya da halatla malzeme indirme yöntemiyle planlıyoruz. Kapasiteyi zorlamak yerine iş akışını buna göre kuruyoruz.",
            },
            {
                soru: "Bu makine olmadan standart eklemli platform arşiv odamıza sığar mı, önce siz mi kontrol ediyorsunuz?",
                cevap:
                    "Evet, önce standart sınıfın neden yetmediğini soruyoruz; çoğu arşiv katı aslında eklemli platform için yeterli geniştir. Sadece gerçek bir dar geçiş varsa örümcek platform öneriyoruz, çünkü çalışma yüksekliği ve kurulum hızı bakımından eklemli sınıf genelde daha avantajlıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Paletli sepetli platformların parçalı taşınabilirliği ve dar alan kullanımı EN 280 kapsamındaki genel makine sınıfı özellikleridir; arşiv/kalibrasyon hacimlerinin dar tasarlanması genel bina pratiğidir. Tesis adı, kapasite ve mesafe rakamı uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Tetkik Takvimine Kilitli Nakliye ve Teslimat",
        giris:
            "Kalite ve sertifikasyon işlerinde makinenin kendisi kadar, ne zaman sahada olduğu da kritiktir. İç tetkik, dış denetim ya da kalibrasyon randevusunun saati genellikle haftalar önce belirlenir ve bu saat geldiğinde platform hazır olmazsa, denetçinin bir noktayı görme fırsatı bir sonraki tetkik dönemine ertelenebilir. Bu yüzden Eskişehir'deki tesislere teslimatı düz bir lojistik işi olarak değil, tetkik takviminin bir parçası olarak planlıyoruz: makine tetkikten önceki gün ya da sabahın erken saatinde sahaya ulaşır, tesisin gösterdiği noktada beklerken akülü sınıf şarj edilir ve tetkik saati geldiğinde denetçi ya da kalite personeli doğrudan işe başlayabilir. Aynı disiplin geri alımda da geçerlidir — tetkik bitmeden makine sahadan çekilmez, ancak açık bir kayıt işi de yokken gereksiz yere beklemez. Bu sayfada teslimat zamanlamasının tetkik takvimine nasıl bağlandığını, birden fazla adres için sıralamanın nasıl kurulduğunu ve son dakika tarih değişikliklerinde ne yaptığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tetkikten önceki gün teslimat standardı",
                metin:
                    "İç tetkik ya da dış denetim öncesinde makinenin bir gün önceden sahada olması standart uygulamamızdır. Bu, tetkik saati geldiğinde teslimat kaynaklı hiçbir gecikme yaşanmaması içindir; makine tesisin gösterdiği alanda beklerken akülü sınıf şarja bağlanır.",
            },
            {
                baslik: "Denetçinin saatine göre esnek teslim penceresi",
                metin:
                    "Denetim programları bazen aynı gün içinde saat değiştirebilir; bu ihtimali bildiğimiz için teslim saatini kesin bir dakikaya değil, tesisin verdiği geniş bir pencereye göre planlıyoruz. Saat değişikliği son anda bildirildiğinde sürücümüz sahaya yakın bir noktada bekleyebiliyor.",
            },
            {
                baslik: "Çoklu adres tetkiklerinde sıralama",
                metin:
                    "Aynı hafta birden fazla tesiste tetkik ya da kalibrasyon işiniz varsa, hangi adresin önce, hangisinin sonra olduğunu tetkik programınıza göre sıralıyoruz. Mesafe ve trafik değil, denetim takvimi önceliği belirliyor.",
            },
            {
                baslik: "Geri alım: açık kayıt işi varken makine çekilmez",
                metin:
                    "Tetkik uzarsa ya da düzeltici faaliyet için ek bir kısa çalışma istenirse, makineyi planlanan saatte geri çekmek yerine kalan işin tamamlanmasını bekliyoruz. Bu esneklik payını teklife baştan dahil ediyoruz.",
            },
            {
                baslik: "Son dakika tarih değişikliğinde yeniden planlama",
                metin:
                    "Denetim tarihleri bazen tesis dışı bir nedenle (denetçi programı, ana tedarikçi talebi) son anda değişebilir. Bu değişikliği haber aldığımızda sevkiyatı yeniden planlıyoruz; mümkünse aynı hafta içinde alternatif bir tarih buluyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tetkik türüne göre teslimat penceresi",
                paragraflar: [
                    "Aşağıdaki tablo, denetim ve kalibrasyon türüne göre tipik teslimat planımızı özetler.",
                ],
                tablo: {
                    basliklar: ["Tetkik türü", "Teslim zamanı", "Bekleme durumu", "Geri alım kuralı"],
                    satirlar: [
                        ["İç tetkik", "Bir gün önce", "Şarjda bekler", "Tetkik bitince"],
                        ["Dış denetim", "Sabah erken", "Sahada hazır", "Denetim kapanışında"],
                        ["Kalibrasyon randevusu", "Randevu saatine göre", "Kısa bekleme", "İş tamamlanınca"],
                        ["Düzeltici faaliyet", "Acil, aynı hafta", "Minimum bekleme", "İş bitince hemen"],
                    ],
                },
            },
            {
                baslik: "Şarj ve bekleme alanı önceden netleştirilir",
                paragraflar: [
                    "Akülü makinenin tetkik öncesi bekleme süresinde şarjda kalabilmesi için tesisin uygun bir priz noktası göstermesi gerekir; bu noktayı teslimat öncesi netleştiriyoruz. Priz yoksa şarj seviyesini tetkik süresini kapsayacak şekilde önceden doldurup geliyoruz.",
                    "Bekleme alanının üretim ya da yaya trafiğinin dışında olması, hem makinenin güvenliği hem de tesisin işleyişi açısından önemli; bu alanı teslimat öncesi tesis yetkilisiyle birlikte belirliyoruz.",
                ],
            },
            {
                baslik: "Tarih değişikliğinde ek maliyet politikası",
                paragraflar: [
                    "Denetim tarihi tesis dışı bir nedenle değiştiğinde, makul bir önceden haber süresiyle bildirilen değişikliklerde ek ücret talep etmiyoruz. Son dakika (aynı gün) iptal ya da erteleme, sürücü ve araç zaten yola çıkmışsa farklı değerlendirilebilir; bu durumu teklif aşamasında açıkça belirtiyoruz.",
                    "Amacımız, denetim sürecinin bir teslimat aksaklığı yüzünden ertelenmemesidir; bu yüzden değişikliklere mümkün olduğunca esnek yaklaşıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tetkik saatimiz sabah erken, makine kaçta gelir?",
                cevap:
                    "Tetkikten önceki gün sahaya ulaştırmak standart uygulamamız; bu şekilde sabah erken saatte hiçbir teslimat kaynaklı gecikme yaşanmıyor. Öncesinde priz noktası uygun değilse şarj seviyesini tetkik süresini kapsayacak şekilde doldurup geliyoruz.",
            },
            {
                soru: "Denetçinin saati aynı gün içinde değişti, ne oluyor?",
                cevap:
                    "Teslim saatini kesin bir dakikaya değil, tesisin verdiği geniş bir pencereye göre planladığımız için bu tür değişiklikler genelde sorun yaratmıyor. Saat son anda değişirse sürücümüz sahaya yakın bir noktada bekleyebiliyor; bize haber vermeniz yeterli.",
            },
            {
                soru: "Aynı hafta üç ayrı tesiste tetkikimiz var, tek sevkiyatla mı planlanır?",
                cevap:
                    "Hangi adresin önce hangisinin sonra olacağını mesafeye değil tetkik programınıza göre sıralıyoruz. Uygunsa aynı araçla art arda üç adresi kapsayabiliyoruz; programlar çakışırsa iki ayrı araç değerlendiriyoruz.",
            },
            {
                soru: "Tetkik uzadı, makineyi geri çekiyor musunuz?",
                cevap:
                    "Hayır, açık bir kayıt işi varken makineyi planlanan saatte geri çekmiyoruz; kalan işin tamamlanmasını bekliyoruz. Bu esneklik payını teklife baştan dahil ediyoruz, sahada sürpriz olmasın diye bunu önceden söylüyoruz.",
            },
            {
                soru: "Denetim tarihimiz değişti, sevkiyat ne olacak?",
                cevap:
                    "Değişikliği haber aldığımızda sevkiyatı yeniden planlıyor, mümkünse aynı hafta içinde alternatif bir tarih buluyoruz. Makul önceden haber süresiyle bildirilen değişikliklerde ek ücret talep etmiyoruz; son dakika değişiklikleri farklı değerlendirilebilir.",
            },
            {
                soru: "Şarj için priz noktamız yok, sorun olur mu?",
                cevap:
                    "Olmaz; priz noktası yoksa şarj seviyesini tetkik süresinin tamamını kapsayacak şekilde önceden doldurup geliyoruz. Yine de mümkünse tesiste bir priz noktası göstermenizi öneririz, çünkü uzun bekleme sürelerinde bu daha güvenli bir yöntemdir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Teslimat zamanlaması ve akülü makinelerin şarj ihtiyacı EN 280 kapsamındaki genel ekipman özellikleridir; iç tetkik/dış denetim programlarının önceden planlanması ISO 9001/AS9100 iç tetkik pratiğinden gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift Kiralama: Malzeme Partisi İstiflemede Etiket ve Sertifika Bütünlüğü",
        giris:
            "Kalite kayıtlarının doğruluğu, çoğu zaman malzeme partisinin fiziksel olarak doğru rafta ve doğru etiketle durmasına bağlıdır. Bir sertifikasyon ya da tetkik hazırlığında forklift genellikle iki iş için kullanılır: raf düzenini denetçinin göreceği hâle getirmek ve arşiv kutularını ya da numune paletlerini erişilebilir bir noktaya taşımak. Bu işlerde forklift operatörünün dikkati, paletin hızlı taşınmasından çok etiketin ve palet üzerindeki sertifika/izlenebilirlik belgesinin bozulmadan kalmasına odaklanır — çarpma, düşürme ya da yanlış rafa koyma, bir denetimde ciddi bir uygunsuzluk kaydına dönüşebilir. Bu sayfada istifleme işinde etiket bütünlüğünü nasıl koruduğumuzu, palet ağırlığı ile raf kapasitesi uyumunu nasıl kontrol ettiğimizi ve tetkik öncesi son düzenleme turunda nelere dikkat ettiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Palet taşımadan önce etiket kontrolü",
                metin:
                    "Taşınacak paletin üzerindeki izlenebilirlik etiketi ya da sertifika belgesi, taşıma öncesi görsel olarak kontrol edilir; hasarlı ya da okunaksız bir etiket fark edilirse kalite personeline bildirilir, taşıma o belge netleşene kadar ertelenebilir.",
            },
            {
                baslik: "Raf kapasitesi ve palet ağırlığı uyumu",
                metin:
                    "Sertifikasyon hazırlığında raf düzeni sıkça değişebilir; yeni bir palet yerleştirilecek rafın taşıma kapasitesi, palet ağırlığıyla karşılaştırılır. Kapasite bilgisi belirsizse tesis yetkilisinden teyit alınır, tahmine dayalı yerleştirme yapılmaz.",
            },
            {
                baslik: "Dar koridorda hassas manevra",
                metin:
                    "Arşiv ve kayıt depolarının koridorları genellikle üretim deposundan dardır; bu koridorlarda dar gövdeli forklift modelleri tercih edilir ve manevra hızı düşük tutulur, çünkü yan rafa temas etme riski etiketli malzemeyi de etkileyebilir.",
            },
            {
                baslik: "Tetkik öncesi son düzenleme turu",
                metin:
                    "Denetim tarihine yakın günlerde, hangi paletlerin hangi sıraya alınacağına dair bir liste tesisle birlikte hazırlanır; bu liste forklift operatörüne verilir ve tur bu listeye göre tek seferde tamamlanır, gereksiz tekrar taşıma yapılmaz.",
            },
            {
                baslik: "Kapalı hacimde egzozsuz çalışma",
                metin:
                    "Arşiv ve laboratuvar çevresindeki kapalı hacimlerde içten yanmalı motorlu forklift kullanılmaz; akülü sınıf tercih edilir. Bu, hem hava kalitesini korur hem de hassas belge ve numunelerin egzoz partikülünden etkilenmesini önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İstifleme işine göre forklift sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, kalite ve sertifikasyon işlerinde karşılaştığımız istifleme senaryolarını özetler.",
                ],
                tablo: {
                    basliklar: ["İş türü", "Ortam", "Hassasiyet", "Önerilen sınıf"],
                    satirlar: [
                        ["Genel raf düzenleme", "Açık depo", "Standart", "Akülü forklift"],
                        ["Arşiv kutusu taşıma", "Dar koridor", "Etiket bütünlüğü", "Dar gövdeli akülü"],
                        ["Numune paleti taşıma", "Laboratuvar çevresi", "Yüksek", "Dar gövdeli akülü, düşük hız"],
                        ["Tetkik öncesi son tur", "Karma", "Zaman baskısı", "Akülü forklift, öncelikli"],
                    ],
                },
            },
            {
                baslik: "Etiket hasarında izlenen yol",
                paragraflar: [
                    "Taşıma sırasında bir etiketin hasar gördüğü fark edilirse, işlem durdurulur ve durum kalite personeline bildirilir; operatör kendi kararıyla etiketi yeniden yapıştırmaz ya da yeni bir etiket üretmez, çünkü bu kaydın doğruluğunu bozabilir.",
                    "Hasar tesis tarafından değerlendirilip yeni bir etiket ya da kayıt düzenlenene kadar palet taşınmaya devam edilebilir, ancak hasar durumu iş kabul formuna not düşülür.",
                ],
            },
            {
                baslik: "Bu sınıf ne zaman yeterli olmaz",
                paragraflar: [
                    "Palet yüksekte bir rafa değil, tavana yakın sabit bir noktaya (kayıt kutusu, ölçüm cihazı) erişecekse forklift değil platform gerekir; forklift yalnızca zeminden erişilebilir raf seviyelerinde ve palet formatındaki malzemede kullanılır.",
                    "Bu ayrımı talebi aldığımızda netleştiriyoruz; karışıklık olursa yanlış ekipmanla sahaya gitmek zaman kaybettirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Palet üzerindeki sertifika etiketi taşıma sırasında zarar görürse ne olur?",
                cevap:
                    "Hasar fark edilirse taşıma durdurulur ve kalite personelinize bildirilir; operatörümüz kendi kararıyla etiketi değiştirmez, çünkü bu kaydın doğruluğunu etkileyebilir. Durum iş kabul formuna not düşülür; yeni etiket veya kayıt düzenlemesi tesisin kendi sürecine bırakılır.",
            },
            {
                soru: "Arşiv koridorumuz dar, standart forklift sığar mı?",
                cevap:
                    "Çoğu zaman dar gövdeli akülü model gerekir; koridor genişliğini ve raf arası mesafeyi keşifte ölçüyoruz. Manevra hızını düşük tutuyoruz, çünkü yan rafa temas riski etiketli malzemeyi de etkileyebilir.",
            },
            {
                soru: "Rafın taşıma kapasitesini bilmiyoruz, siz mi kontrol ediyorsunuz?",
                cevap:
                    "Kapasite bilgisi belirsizse tahmine dayalı yerleştirme yapmıyoruz; tesis yetkilisinden teyit alıyoruz. Palet ağırlığı raf kapasitesiyle karşılaştırılmadan yerleştirme yapılmaz, çünkü bu hem güvenlik hem kayıt bütünlüğü açısından risklidir.",
            },
            {
                soru: "Tetkik öncesi son düzenleme turu ne kadar sürer?",
                cevap:
                    "Süre taşınacak palet sayısına göre değişir; tesisle birlikte önceden bir liste hazırlarsak tur tek seferde ve daha hızlı tamamlanır. Liste olmadan sahaya gitmek gereksiz tekrar taşımaya yol açabilir, bu yüzden listeyi önceden istiyoruz.",
            },
            {
                soru: "Kapalı laboratuvar çevresinde dizel forklift kullanabilir misiniz?",
                cevap:
                    "Hayır, kapalı hacimlerde egzoz nedeniyle akülü sınıf kullanıyoruz. Bu hem hava kalitesini korur hem de hassas belge ve numunelerin egzoz partikülünden etkilenmesini önler.",
            },
            {
                soru: "Tavana yakın bir kayıt kutusuna forkliftle mi erişiyorsunuz?",
                cevap:
                    "Hayır; forklift yalnızca zeminden erişilebilir raf seviyelerinde ve palet formatındaki malzemede kullanılır. Tavana yakın sabit bir noktaya erişim gerekiyorsa platform öneriyoruz; bu ayrımı talep aşamasında netleştiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift sınıflarının kapalı hacimde egzozsuz (akülü) kullanımı ve palet/raf kapasite uyumu genel iş güvenliği ve ekipman pratiğidir; malzeme izlenebilirlik etiketi kavramı sektör geneli kalite yönetim uygulamasıdır. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform: Kalibrasyon Laboratuvarında Tavan Referans Noktasına Erişim",
        giris:
            "Kalibrasyon laboratuvarlarında ve bazı ölçüm istasyonlarında referans noktaları, sensörler ya da sabit ölçüm cihazları çoğu zaman tavana yakın konumlandırılır; bu, titreşim ve zemin hareketinden etkilenmeyi azaltmak içindir. Bu noktalara periyodik erişim gerektiğinde, düz bir sepet hareketi değil, engelin (kablo kanalı, asma tavan elemanı, boru hattı) etrafından dolanabilen bir erişim gerekir. Eklemli platformun bom yapısı tam bu ihtiyacı karşılar: sepet yukarı çıkarken yatayda da hareket edebilir, böylece doğrudan altına giremediğimiz bir referans noktasına yandan yaklaşabiliriz. Bu sayfada eklemli platformun kalibrasyon ve ölçüm erişiminde nasıl kullanıldığını, titreşimsiz duruşun nasıl sağlandığını ve laboratuvar personeliyle koordinasyonun nasıl kurulduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Engelin etrafından dolanarak erişim",
                metin:
                    "Kablo kanalı, boru hattı ya da asma tavan elemanı gibi engellerin arkasında kalan bir referans noktasına dikey bir platformla ulaşılamaz; eklemli bomun yatay uzanma kabiliyeti bu engelin yanından dolanmayı sağlar. Erişim diyagramı, hedefin konumuna göre önceden kontrol edilir.",
            },
            {
                baslik: "Titreşimsiz duruş için sabitleme",
                metin:
                    "Sepet hedefe ulaştığında makine tam olarak sabitlenir; kalibrasyon işlemi süresince operatör gereksiz hareket yapmaz. Titreşime en hassas olan cihazların hangileri olduğunu laboratuvar personelinden önceden öğreniriz, bu bilgiler çalışma sırasında ekstra dikkat gösterilmesini sağlar.",
            },
            {
                baslik: "Laboratuvar personeliyle koordineli çalışma",
                metin:
                    "Kalibrasyon işlemi genellikle laboratuvar personelinin kendisi tarafından yürütülür; operatörümüz yalnızca sepeti güvenli şekilde konumlandırır ve personelin talimatına göre küçük ayarlamalar yapar. İşlem beklenenden uzun sürerse bu süreyi teklife dahil ettiğimiz esneklik payı karşılar.",
            },
            {
                baslik: "Akülü ve düşük gürültülü çalışma",
                metin:
                    "Laboratuvar ortamında akülü sınıf tercih edilir; motor titreşimi ve gürültüsü hassas ölçümü etkileyebilir. Şarj döngüsü, kalibrasyon takviminin yoğun olduğu dönemlerde çalışma dışı saatlere planlanır.",
            },
            {
                baslik: "Erişim diyagramının hedefe göre doğrulanması",
                metin:
                    "Her modelin kendi erişim diyagramı (yatay uzanma, dikey erişim, dönüş açısı) vardır; hedef noktanın koordinatları keşifte alınır ve bu diyagramla karşılaştırılır. Uygun olmayan bir model sahaya gönderilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kalibrasyon/ölçüm erişimine göre bom sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, laboratuvar ve ölçüm istasyonu erişiminde karşılaştığımız senaryoları özetler.",
                ],
                tablo: {
                    basliklar: ["Erişim türü", "Engel durumu", "Hassasiyet", "Önerilen sınıf"],
                    satirlar: [
                        ["Doğrudan tavan noktası", "Yok", "Orta", "Teleskopik dikey"],
                        ["Kablo kanalı arkası", "Var, yatay dolanma gerekli", "Yüksek", "Eklemli bom"],
                        ["Boru hattı çevresi", "Var, dar açı", "Yüksek", "Eklemli bom, kompakt"],
                        ["Açık laboratuvar tavanı", "Yok", "Orta", "Akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Kalibrasyon takvimine göre öncelik",
                paragraflar: [
                    "Kalibrasyon randevuları genellikle sabit bir periyotla tekrarlar (aylık, üç aylık); bu tekrarlayan işleri önceden planlayıp yıllık bir program üzerinden ilerleyebiliyoruz. Böylece her seferinde yeniden keşif yapmak yerine mevcut erişim bilgisini kullanıyoruz.",
                    "Program dışı acil bir kalibrasyon ihtiyacı çıkarsa, bu talepleri öncelikli işaretliyor ve mümkün olan en kısa sürede planlıyoruz.",
                ],
            },
            {
                baslik: "Titreşim hassasiyeti belirsizse ne yapıyoruz",
                paragraflar: [
                    "Hangi cihazın titreşime ne kadar hassas olduğu net değilse, işe başlamadan önce laboratuvar sorumlusundan bir öncelik listesi istiyoruz; bu liste olmadan varsayımla ilerlemiyoruz.",
                    "Belirsizlik sürerse, en düşük titreşimli çalışma moduyla ilerleyip sonucu laboratuvar personeliyle birlikte değerlendiriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Referans noktamız bir kablo kanalının arkasında, nasıl erişiyorsunuz?",
                cevap:
                    "Eklemli platformun bom yapısı sepetin yatayda da hareket etmesini sağlar; bu sayede kanalın yanından dolanıp hedefe yaklaşabiliriz. Hedefin konumunu keşifte ölçüp modelin erişim diyagramıyla karşılaştırıyoruz; uygun olmayan model sahaya gönderilmiyor.",
            },
            {
                soru: "Kalibrasyon sırasında titreşim olmayacağını nasıl garanti ediyorsunuz?",
                cevap:
                    "Sepet hedefe ulaştığında makineyi tam olarak sabitliyor, işlem süresince gereksiz hareket yapmıyoruz. Hangi cihazların titreşime en hassas olduğunu laboratuvar personelinden önceden öğreniyoruz; bu bilgi çalışma sırasında ekstra dikkat gösterilmesini sağlıyor.",
            },
            {
                soru: "Kalibrasyon işlemini kim yapıyor, sizin operatörünüz mü?",
                cevap:
                    "Hayır, kalibrasyon işlemini genellikle laboratuvar personeliniz yürütür; operatörümüz sepeti güvenli şekilde konumlandırır ve talimatınıza göre küçük ayarlamalar yapar. İşlem uzarsa bu süreyi teklife dahil ettiğimiz esneklik payı karşılar.",
            },
            {
                soru: "Dizel değil akülü platform kullanmanızın nedeni nedir?",
                cevap:
                    "Motor titreşimi ve gürültüsü hassas ölçümü etkileyebileceği için laboratuvar ortamında akülü sınıf tercih ediyoruz. Şarj döngüsünü kalibrasyon takviminin yoğun olmadığı saatlere planlıyoruz.",
            },
            {
                soru: "Kalibrasyon randevumuz her ay tekrarlıyor, her seferinde keşif mi yapıyorsunuz?",
                cevap:
                    "Tekrarlayan işlerde yıllık bir program üzerinden ilerliyoruz ve mevcut erişim bilgisini kullanıyoruz; her seferinde yeniden keşif yapmıyoruz. Laboratuvar düzeninde değişiklik olduysa bize bildirmeniz, güncel bilgiyle ilerlememizi sağlıyor.",
            },
            {
                soru: "Hangi cihazın titreşime hassas olduğunu bilmiyoruz, ne yapıyorsunuz?",
                cevap:
                    "Varsayımla ilerlemiyoruz; işe başlamadan önce laboratuvar sorumlusundan bir öncelik listesi istiyoruz. Liste netleşmeden önce en düşük titreşimli çalışma moduyla ilerleyip sonucu birlikte değerlendiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformların bom yapısı ve erişim diyagramı EN 280 kapsamındaki genel makine özellikleridir; kalibrasyon laboratuvarlarında referans noktalarının titreşimden korunmak için tavana yakın konumlandırılması sektör geneli pratiktir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân Depo Platformu: Arşiv ve Numune Deposunda Raf Erişimi",
        giris:
            "Kalite kayıtlarının saklandığı arşiv depoları ve numune depoları, üretim deposuna göre daha küçük ölçekli ama daha sık erişilen alanlardır; bir tetkik hazırlığında bu depolara giriş çıkış sıklığı artar. İç mekân depo platformu bu ortam için seçilir: kapalı hacimde egzozsuz çalışır, iz bırakmayan lastikle hassas zeminde ilerler ve raf aralarındaki dar koridorlarda manevra yapabilir. Bu sayfada arşiv/numune deposu erişiminde platform seçimini nasıl yaptığımızı, raf yüksekliğine göre sınıf belirlemeyi ve depo içi düzenin sık değişmesi durumunda ne yaptığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Raf yüksekliğine göre sınıf seçimi",
                metin:
                    "Arşiv depolarında raf yüksekliği genellikle üretim deposundan düşüktür, ancak istisnalar olabilir. Raf yüksekliğini keşifte ölçüp buna uygun çalışma yüksekliğine sahip bir kompakt akülü model seçiyoruz; fazla büyük bir makine dar koridora sığmayabilir.",
            },
            {
                baslik: "Dar koridorda manevra ve raf teması riski",
                metin:
                    "Arşiv depolarındaki raf arası mesafe standart depolara göre daha dar tutulabilir; bu koridorlarda dönüş yarıçapı küçük modeller tercih edilir ve manevra hızı düşük tutulur, çünkü rafa temas etme riski kayıtlı malzemeyi de etkileyebilir.",
            },
            {
                baslik: "İz bırakmayan lastik ve zemin koruması",
                metin:
                    "Arşiv depolarının zemini bazen özel kaplamalıdır; standart lastik iz bırakabilir. İz bırakmayan lastikli model kullanıyor, gerekirse zemini geçici örtüyle koruyoruz.",
            },
            {
                baslik: "Depo düzeninin sık değişmesi durumunda güncel bilgi",
                metin:
                    "Arşiv depoları tetkik dönemlerinde yeniden düzenlenebilir; bir hafta önce net olan raf yerleşimi bugün farklı olabilir. Sevkiyat öncesi güncel yerleşimi bir kez daha teyit ediyoruz, eski bilgiyle ilerlemiyoruz.",
            },
            {
                baslik: "Kısa süreli ve tekrarlayan erişim ihtiyacı",
                metin:
                    "Bazı arşiv işleri tek seferlik değil, tetkik dönemi boyunca tekrarlayan kısa erişimlerdir. Bu durumda makinenin depo içinde ya da yakınında kısa süreliğine bekletilip bekletilemeyeceğini tesisle birlikte değerlendiriyoruz; bu, her seferinde yeniden teslimat-geri alım süresini ortadan kaldırabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo tipine göre platform seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, arşiv ve numune depolarında karşılaştığımız tipik senaryoları özetler.",
                ],
                tablo: {
                    basliklar: ["Depo tipi", "Raf yüksekliği", "Koridor genişliği", "Önerilen sınıf"],
                    satirlar: [
                        ["Standart arşiv deposu", "3 – 5 m", "Standart", "Kompakt akülü makaslı"],
                        ["Yüksek raflı arşiv", "5 – 8 m", "Dar", "Dar gövdeli akülü"],
                        ["Numune deposu", "2 – 4 m", "Çok dar", "Kompakt akülü, düşük hız"],
                        ["Karma kullanım deposu", "Değişken", "Değişken", "Keşifle belirlenir"],
                    ],
                },
            },
            {
                baslik: "Tetkik dönemi boyunca sahada bekletme seçeneği",
                paragraflar: [
                    "Arşiv işleri tekrarlayan kısa erişimler gerektiriyorsa, makineyi tetkik dönemi boyunca depo yakınında güvenli bir noktada bekletmeyi öneriyoruz. Bu, her seferinde yeniden teslimat-geri alım süresini ortadan kaldırır ama tesisin uygun bir bekletme alanı ve güvenlik düzeni ayırmasını gerektirir.",
                    "Bekletme süresi teklife günlük ya da haftalık bir kalem olarak yazılır; bu, tek seferlik teslimattan farklı bir fiyatlandırma mantığıdır ve önceden netleştirilir.",
                ],
            },
            {
                baslik: "Depo düzeni değiştiğinde ne yapıyoruz",
                paragraflar: [
                    "Sevkiyattan hemen önce güncel raf yerleşimini bir kez daha teyit ediyoruz; büyük bir değişiklik varsa (örneğin raf tamamen yer değiştirdiyse) bunu önceden bildirmenizi rica ediyoruz, çünkü bu doğru makinenin seçilmesini etkileyebilir.",
                    "Sahada beklenmedik bir değişiklikle karşılaşırsak, mevcut makineyle devam edip edemeyeceğimizi hızlıca değerlendirir, gerekirse alternatif bir modeli aynı gün içinde getirmeye çalışırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Arşiv deposu raf yüksekliğimiz standart depodan farklı, hangi makineyi öneriyorsunuz?",
                cevap:
                    "Raf yüksekliğini keşifte ölçüp buna uygun çalışma yüksekliğine sahip kompakt akülü bir model seçiyoruz. Fazla büyük bir makine dar koridora sığmayabileceği için varsayımla ilerlemiyor, ölçüyü sahada doğruluyoruz.",
            },
            {
                soru: "Koridorumuz çok dar, rafa temas riski var mı?",
                cevap:
                    "Bu riski azaltmak için dönüş yarıçapı küçük modelleri tercih ediyor, manevra hızını düşük tutuyoruz. Koridor genişliğini keşifte ölçüp modelin gövde ölçüsüyle karşılaştırıyoruz; sığmayan bir model sahaya gönderilmiyor.",
            },
            {
                soru: "Zeminimiz özel kaplamalı, standart lastik kullanılabilir mi?",
                cevap:
                    "Hayır, bu durumda iz bırakmayan lastikli model kullanıyoruz; gerekirse zemini geçici örtüyle de koruyoruz. Zemin kaplamasının türünü keşifte öğrenip buna göre hazırlık yapıyoruz.",
            },
            {
                soru: "Depo düzenimiz tetkik döneminde sık değişiyor, bu sorun olur mu?",
                cevap:
                    "Sevkiyattan hemen önce güncel yerleşimi bir kez daha teyit ettiğimiz için eski bilgiyle ilerlemiyoruz. Büyük bir değişiklik varsa önceden bildirmeniz, doğru makinenin seçilmesini kolaylaştırıyor.",
            },
            {
                soru: "Tetkik dönemi boyunca birden fazla kez erişim gerekiyor, her seferinde mi kiralıyoruz?",
                cevap:
                    "Gerekmiyor; makineyi tetkik dönemi boyunca depo yakınında güvenli bir noktada bekletmeyi önerebiliyoruz. Bu, her seferinde yeniden teslimat-geri alım süresini ortadan kaldırıyor; bekletme süresi teklife ayrı bir kalem olarak yazılıyor.",
            },
            {
                soru: "Numune deposunda hassasiyet daha mı yüksek, farklı bir yaklaşım var mı?",
                cevap:
                    "Evet, numune depolarında manevra hızını daha da düşük tutuyor, sepetin numune paletine ya da rafına teması riskini minimumda tutmaya odaklanıyoruz. Bu depolar genellikle daha küçük ölçekli olduğu için kompakt bir model tercih ediyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İç mekân platformlarının kapalı hacimde egzozsuz çalışması ve iz bırakmayan lastik kullanımı genel ekipman ve iş güvenliği pratiğidir; arşiv/numune depolarının tetkik dönemlerinde sık düzenlenmesi kalite yönetim süreçlerinin genel işleyişinden gelir. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montaj Platformu: Yeni Kalite Altyapısı Kurulumunda Erişim",
        giris:
            "Bir tesis yeni bir kalibrasyon laboratuvarı, arşiv odası ya da ölçüm istasyonu kurarken, bu hacmin çelik konstrüksiyon iskelet, asma tavan taşıyıcı sistemi ya da özel raf sistemi montajı gerekebilir. Bu montaj işleri üretim hattı kurulumundan farklıdır: genellikle daha küçük ölçekli, daha hassas toleranslı ve montaj sonrası doğrudan bir sertifikasyon sürecine girecek bir hacimde yapılır. Çelik konstrüksiyon montaj platformu bu işlerde montaj ekibini bağlantı noktasına taşır; kaynak, cıvatalama ya da hizalama işlemi sırasında sabit ve güvenli bir çalışma tabanı sağlar. Bu sayfada yeni kalite altyapısı kurulumunda platform kullanımını, montaj toleransının erişim planlamasına nasıl yansıdığını ve montaj sonrası ilk doğrulama turunda nelere dikkat ettiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Montaj toleransına uygun sabit duruş",
                metin:
                    "Çelik konstrüksiyon montajında bağlantı noktalarının hizalanması belirli bir toleransla yapılır; platform sepetinin bu işlem sırasında sabit kalması, montaj ekibinin doğru ölçüde çalışmasını sağlar. Sepet hedefe ulaştığında makine tam olarak sabitlenir.",
            },
            {
                baslik: "Kaynak ve cıvatalama işleminde güvenli çalışma tabanı",
                metin:
                    "Kaynak işlemi yapılacaksa kıvılcım ve ısı kaynaklı riskler değerlendirilir; platformun kaynak işine uygun bir modeli seçilir ve gerekli koruyucu önlemler (yangına dayanıklı örtü, söndürücü bulundurma) tesisle birlikte planlanır.",
            },
            {
                baslik: "İnşaat aşamasındaki geçici erişim koşulları",
                metin:
                    "Yeni bir hacmin inşaat aşamasında zemin henüz nihai hâlini almamış, elektrik ve aydınlatma geçici olabilir. Bu koşullar altında platform kullanımı için tesisin geçici zemin taşıma bilgisini ve aydınlatma düzenini önceden netleştiriyoruz.",
            },
            {
                baslik: "Montaj sonrası ilk doğrulama turu",
                metin:
                    "Çelik konstrüksiyon montajı tamamlandıktan sonra bağlantı noktalarının bir kez daha görsel olarak kontrol edilmesi istenebilir; bu doğrulama turu, montaj ekibinin kendisi ya da tesisin kalite personeli tarafından yapılabilir ve platform bu turu destekler.",
            },
            {
                baslik: "Diğer taşeronlarla saha koordinasyonu",
                metin:
                    "Yeni hacim kurulumunda elektrik, mekanik ve çelik konstrüksiyon ekipleri aynı anda sahada olabilir; platformun çalışma alanı diğer ekiplerin rotasından ayrılır ve çalışma saatleri önceden koordine edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kurulum aşamasına göre platform ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, yeni kalite altyapısı kurulumunda karşılaştığımız aşamaları ve tipik platform ihtiyacını özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "İş türü", "Zemin durumu", "Önerilen sınıf"],
                    satirlar: [
                        ["İskelet montajı", "Kaynak/cıvatalama", "Geçici, ham beton", "Eklemli, geniş kapasiteli"],
                        ["Asma tavan taşıyıcı", "Hizalama", "Nihai zemin", "Akülü makaslı"],
                        ["Raf sistemi montajı", "Cıvatalama", "Nihai zemin", "Kompakt akülü"],
                        ["Montaj sonrası doğrulama", "Görsel kontrol", "Nihai zemin", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Geçici zemin ve elektrik koşulunda çalışma",
                paragraflar: [
                    "İnşaat aşamasındaki bir hacimde zemin taşıma kapasitesi henüz belgelenmemiş olabilir; bu durumda tesisin yapı sorumlusundan geçici zemin bilgisini alıyoruz, tahmine dayalı çalışma yapmıyoruz.",
                    "Geçici aydınlatma yetersizse ek aydınlatma getiriyor ya da çalışma saatini doğal ışığın yeterli olduğu döneme planlıyoruz; görüş yetersizliği montaj hassasiyetini etkileyebilir.",
                ],
            },
            {
                baslik: "Diğer taşeronlarla çakışmayı önleme",
                paragraflar: [
                    "Aynı hacimde birden fazla taşeron çalışıyorsa, platformun çalışma alanı ve hareket zarfı diğer ekiplerin rotasından fiziksel olarak ayrılır. Çalışma saatleri, genel yükleniciyle birlikte önceden koordine edilir.",
                    "Elektrik ekibi aynı hacimde enerjili hat çekiyorsa, platform bu hattan güvenli mesafede tutulur; gerekirse çalışma sırası değiştirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kaynak işlemi sırasında platform kullanımı güvenli mi?",
                cevap:
                    "Kaynak işine uygun bir model seçiyor, kıvılcım ve ısı riskine karşı yangına dayanıklı örtü ve söndürücü gibi koruyucu önlemleri tesisle birlikte planlıyoruz. Sepet hedefe ulaştığında makineyi tam olarak sabitliyoruz; bu, kaynak ekibinin doğru toleransta çalışmasını sağlıyor.",
            },
            {
                soru: "İnşaat aşamasındaki bir hacimde zemin henüz belgelenmemiş, çalışabilir misiniz?",
                cevap:
                    "Bu durumda tahmine dayalı çalışmıyoruz; tesisin yapı sorumlusundan geçici zemin taşıma bilgisini alıyoruz. Bilgi netleşmeden platform çalışma alanına alınmıyor.",
            },
            {
                soru: "Montaj sonrası doğrulama turu ayrı bir hizmet mi?",
                cevap:
                    "Genellikle aynı sevkiyatın bir parçası olarak planlanabilir; montaj tamamlandıktan hemen sonra bağlantı noktalarının görsel kontrolü için platform kullanılabilir. Doğrulama ayrı bir tarihte isteniyorsa, bunu montaj sevkiyatından bağımsız planlıyoruz.",
            },
            {
                soru: "Aynı hacimde elektrik ekibi de çalışıyor, çakışma olur mu?",
                cevap:
                    "Çalışma alanını ve hareket zarfını diğer ekiplerin rotasından fiziksel olarak ayırıyoruz. Elektrik ekibi enerjili hat çekiyorsa platformu bu hattan güvenli mesafede tutuyor, gerekirse çalışma sırasını değiştiriyoruz.",
            },
            {
                soru: "Geçici aydınlatma yetersizse ne yapıyorsunuz?",
                cevap:
                    "Ek aydınlatma getiriyor ya da çalışma saatini doğal ışığın yeterli olduğu döneme planlıyoruz. Görüş yetersizliği montaj hassasiyetini etkileyebileceği için bu konuda esnek davranmıyoruz.",
            },
            {
                soru: "Raf sistemi montajı için hangi platform sınıfı yeterli?",
                cevap:
                    "Raf sistemi montajı genellikle nihai zeminde ve orta yükseklikte yapıldığı için kompakt akülü sınıf yeterli oluyor. İskelet ya da asma tavan taşıyıcı montajı gibi daha büyük kapasiteli işler için eklemli sınıfı öneriyoruz; iş listesine göre seçimi netleştiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montajında hizalama toleransı ve kaynak/cıvatalama güvenlik önlemleri genel yapı ve iş güvenliği pratiğidir. Belirli bir tesis adı, kapasite ya da rakam uydurulmamıştır; kalite altyapısı kurulumu (laboratuvar, arşiv, ölçüm istasyonu) genel sektör pratiğinden gelir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım Silo Platformu: Gıda Güvenliği Sertifikasyonunda Depolama Denetimi",
        giris:
            "Eskişehir'in tarımsal üretim ve depolama tesislerinden bazıları, gıda güvenliği yönetim sistemi (örneğin ISO 22000 kapsamı) sertifikasyonuna tabidir ve bu süreçte silo, kurutma tesisi ve depolama alanlarının iç ve dış yüzeyleri, havalandırma noktaları ve numune alma erişimleri denetime konu olur. Platform bu işlerde ürünün kendisiyle değil, denetimin gerektirdiği erişimle ilgilenir: silo dış cephesindeki havalandırma bacasının kontrolü, üst platform korkuluğunun durumu, kurutma hattı üzerindeki numune alma noktasına erişim. Bu sayfada tarımsal depolama tesislerinde sertifikasyon denetimine yönelik platform kullanımını, açık saha koşullarını ve toz/organik malzeme ortamında dikkat ettiğimiz noktaları anlatıyoruz.",
        maddeler: [
            {
                baslik: "Silo dış cephesi ve havalandırma noktası kontrolü",
                metin:
                    "Silo dış yüzeyindeki havalandırma bacaları, denetim kapsamında görsel kontrole tabi tutulabilir; bu noktalara erişim genellikle açık sahada, rüzgâr etkisine maruz bir yükseklikte yapılır. Rüzgâr hızı üretici sınırını aştığında çalışma durdurulur.",
            },
            {
                baslik: "Toz ve organik malzeme ortamında temizlik",
                metin:
                    "Tarımsal ürün tozu (tahıl, un vb.) yanıcı olabilir; bu ortamda kıvılcım riski taşıyan işlemler tesisin risk değerlendirmesine tabidir. Platform elektrik/akülü sınıf tercih edilir, statik elektrik birikimine karşı ek önlem gerekiyorsa tesisin talimatına uyulur.",
            },
            {
                baslik: "Açık saha zemin koşulları",
                metin:
                    "Silo çevresi genellikle açık, bazen stabilize ya da toprak zemindir; yağış sonrası zemin taşıma gücü değişebilir. Teslim günü zemin durumu yeniden değerlendirilir, eski keşif bilgisiyle ilerlenmez.",
            },
            {
                baslik: "Numune alma noktasına erişim",
                metin:
                    "Kurutma hattı ya da silo üstü numune alma noktasına erişim, denetim ya da kalite kontrolü kapsamında istenebilir; bu erişimde kalite personeli sepette bulunur, operatör yalnızca konumlandırmayı yapar.",
            },
            {
                baslik: "Korkuluk ve sabit merdiven durumunun görsel kontrolü",
                metin:
                    "Silo üst platformundaki korkuluk ve sabit merdivenlerin durumu denetim kapsamında değerlendirilebilir; bu görsel kontrol için platform, denetçinin ya da kalite personelinin güvenli bir noktadan gözlem yapmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarımsal depolama tesisinde erişim ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, gıda güvenliği sertifikasyonu kapsamında karşılaştığımız tipik erişim ihtiyaçlarını özetler.",
                ],
                tablo: {
                    basliklar: ["Hedef", "Konum", "Baskın koşul", "Önerilen sınıf"],
                    satirlar: [
                        ["Havalandırma bacası", "Silo dış cephesi", "Rüzgâr", "Teleskopik, rüzgâr sınırı düşük"],
                        ["Numune alma noktası", "Kurutma hattı üstü", "Toz", "Akülü, kıvılcımsız"],
                        ["Korkuluk/merdiven kontrolü", "Silo üst platform", "Yükseklik", "Teleskopik dikey"],
                        ["Kapalı depo iç bakımı", "Depo içi", "Toz birikimi", "Akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Rüzgâr ve zemin koşulunda esnek planlama",
                paragraflar: [
                    "Açık sahada rüzgâr sınırı aşıldığında çalışma durur; denetim tarihi sabitse alternatif olarak rüzgârın daha düşük olduğu bir saat dilimi seçilir, ancak denetim programı buna uygun değilse tesisle birlikte alternatif değerlendirilir.",
                    "Zemin taşıma gücü yağış sonrası değişebileceği için teslim günü zemin yeniden değerlendirilir; gerekirse stabilize bir güzergâh üzerinden ilerlenir.",
                ],
            },
            {
                baslik: "Bu içerik belirli bir tesis ya da kapasite iddiası taşımaz",
                paragraflar: [
                    "Bu sayfa, Eskişehir'deki tarımsal depolama tesislerinin genel gıda güvenliği sertifikasyon sürecine yönelik erişim ihtiyaçlarını anlatır; belirli bir işletme adı, silo kapasitesi ya da ürün türü hakkında iddia içermez.",
                    "Gerçek bir talep geldiğinde, tesisin sertifikasyon kapsamı ve erişim ihtiyacı doğrudan tesis yetkilisinden alınır; varsayımla teklif verilmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo dış cephesindeki havalandırma bacasına nasıl erişiyorsunuz?",
                cevap:
                    "Açık sahada rüzgâr etkisine maruz bir yükseklik olduğu için teleskopik sınıf ve düşük rüzgâr sınırı ile çalışıyoruz. Rüzgâr hızı üretici sınırını aştığında çalışmayı durduruyoruz; denetim tarihi sabitse tesisle birlikte alternatif saat değerlendiriyoruz.",
            },
            {
                soru: "Tahıl tozu ortamında kıvılcım riski var mı?",
                cevap:
                    "Bu ortamda kıvılcım riski taşıyan işlemler tesisin risk değerlendirmesine tabidir; akülü sınıf kullanıyor, statik elektrik birikimine karşı tesisin talimatına uyuyoruz. Kıvılcım çıkaracak bir bakım işi ayrıca izin gerektirir.",
            },
            {
                soru: "Yağış sonrası zemin taşıma gücü değişti, çalışabilir misiniz?",
                cevap:
                    "Teslim günü zemin durumunu yeniden değerlendiriyoruz, eski keşif bilgisiyle ilerlemiyoruz. Zemin yumuşamışsa stabilize bir güzergâh üzerinden ilerliyor ya da hava koşulu düzelene kadar bekliyoruz.",
            },
            {
                soru: "Numune alma noktasına erişimde kim sepette bulunuyor?",
                cevap:
                    "Genellikle kalite personeliniz sepette bulunur, operatörümüz yalnızca konumlandırmayı yapar. Numune alma işlemi sırasında sepetin sabit durması önemlidir; bu süreçte gereksiz hareket yapmıyoruz.",
            },
            {
                soru: "Silo üst platform korkuluğunun durumunu nasıl kontrol ediyorsunuz?",
                cevap:
                    "Denetçinin ya da kalite personelinizin güvenli bir noktadan görsel kontrol yapmasını sağlıyoruz; platform yalnızca erişimi sağlar, korkuluk onarımı ayrı bir iştir. Uygunsuzluk fark edilirse bunu tesisin kaydına bırakıyoruz.",
            },
            {
                soru: "Bu sayfa belirli bir tarım işletmesinin siloları hakkında mı yazıldı?",
                cevap:
                    "Hayır, bu sayfa Eskişehir'deki tarımsal depolama tesislerinin genel gıda güvenliği sertifikasyon sürecine yönelik erişim ihtiyaçlarını anlatır; belirli işletme, kapasite veya ürün türü iddiası içermez. Gerçek bir talepte kapsam doğrudan tesis yetkilisinden alınır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Gıda güvenliği yönetim sistemi (ISO 22000 kapsamı) sertifikasyonunun depolama tesislerinde erişim/görsel kontrol gerektirmesi sektör geneli kalite yönetim pratiğidir; belirli tesis, kapasite veya ürün iddiası taşımaz. Tahıl tozu kaynaklı kıvılcım riski genel iş güvenliği bilgisidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Platformu: Acil Aydınlatma Sertifikasyonu Kontrolü",
        giris:
            "Kalite ve iş güvenliği sertifikasyon süreçlerinin bir parçası olan acil aydınlatma ve tahliye işaretleme sistemleri, periyodik olarak test edilir ve bu testlerin kaydı tetkik dosyasına eklenir. Bu testler genellikle tavana ya da yüksek duvar noktasına monte edilmiş armatürlerin çalışır durumda olup olmadığının görsel ve fonksiyonel kontrolünü içerir. Enerji ve aydınlatma bakım platformu, bu kontrolü yapacak kalite ya da elektrik personelini güvenli şekilde armatüre ulaştırır. Bu sayfada acil aydınlatma sertifikasyon kontrolünde platform kullanımını, enerji kesme prosedürünün nasıl işlediğini ve test kayıtlarının nasıl belgelendiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Enerji kesme prosedürü önce netleşir",
                metin:
                    "Armatür üzerinde elektriksel bir işlem yapılacaksa, ilgili hattın enerjisinin kesilip kesilmeyeceği tesisin elektrik sorumlusuyla önceden netleştirilir; platform ekibi kendi kararıyla enerji kesmez ya da devreye almaz.",
            },
            {
                baslik: "Test sırasında sepette kimin bulunduğu",
                metin:
                    "Acil aydınlatma testi genellikle tesisin elektrik ya da kalite personeli tarafından yürütülür; operatörümüz sepeti güvenli şekilde konumlandırır, test işlemine müdahale etmez.",
            },
            {
                baslik: "Çok sayıda armatürde tur planlaması",
                metin:
                    "Bir bina genelinde çok sayıda acil aydınlatma armatürü test edilecekse, bu armatürlerin konumları önceden bir listede toplanır ve tur bu listeye göre en verimli sırayla planlanır.",
            },
            {
                baslik: "Test kaydının belgelendirilmesi",
                metin:
                    "Her armatürün test sonucu (çalışır/çalışmaz) tesisin kendi formuna kaydedilir; platform ekibi bu kayda karışmaz, yalnızca erişimi sağlar. İş kabul formunda hangi noktalara erişildiği genel hatlarıyla belirtilir.",
            },
            {
                baslik: "Arızalı armatür tespit edilirse",
                metin:
                    "Test sırasında çalışmayan bir armatür tespit edilirse, bu durum anında tesis yetkilisine bildirilir; değişim ya da onarım işi tesisin kendi elektrik ekibi tarafından ayrı bir zamanda yapılabilir, platform bu değişim için ikinci bir sevkiyatla tekrar planlanabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma testi türüne göre erişim",
                paragraflar: [
                    "Aşağıdaki tablo, acil aydınlatma ve genel aydınlatma bakım işlerinde karşılaştığımız senaryoları özetler.",
                ],
                tablo: {
                    basliklar: ["İş türü", "Enerji durumu", "Sepette kim var", "Önerilen sınıf"],
                    satirlar: [
                        ["Acil aydınlatma testi", "Enerjili, test modu", "Elektrik/kalite personeli", "Akülü makaslı"],
                        ["Armatür değişimi", "Kesilmiş", "Elektrikçi", "Akülü makaslı"],
                        ["Genel aydınlatma bakımı", "Kesilmiş", "Bakım personeli", "Akülü makaslı"],
                        ["Yüksek tavan test turu", "Enerjili, test modu", "Kalite personeli", "Eklemli"],
                    ],
                },
            },
            {
                baslik: "Çok noktalı test turunda verimlilik",
                paragraflar: [
                    "Bina genelinde onlarca acil aydınlatma noktası varsa, bu noktaları kat ya da bölüm bazında gruplandırıp tek sevkiyatta sırayla tamamlıyoruz. Rota, en az geri dönüş gerektirecek şekilde önceden planlanır.",
                    "Bazı noktalar diğerlerinden daha yüksekte ya da erişimi daha zorsa (örneğin merdiven boşluğu üstü), bu noktaları ayrıca işaretleyip uygun sınıfı o nokta için özel olarak planlıyoruz.",
                ],
            },
            {
                baslik: "Elektrik ekibiyle sorumluluk sınırı",
                paragraflar: [
                    "Platform ekibi elektriksel test ya da müdahale yapmaz; yalnızca erişimi sağlar. Enerji kesme, devreye alma ve test sonucunun değerlendirilmesi tesisin elektrik/kalite personelinin sorumluluğundadır.",
                    "Bu sorumluluk ayrımı iş kabul formunda açıkça belirtilir; karışıklık önlemek için işe başlamadan önce kim neyi yapacak sözlü olarak da teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Acil aydınlatma testinde enerji kesiliyor mu?",
                cevap:
                    "Bu, testin türüne göre değişir; genellikle test modu enerjili durumda yapılır. Elektriksel bir müdahale gerekiyorsa enerji kesme kararını tesisin elektrik sorumlusu verir, platform ekibi kendi kararıyla enerji kesmez.",
            },
            {
                soru: "Test sırasında sizin operatörünüz mü kontrolü yapıyor?",
                cevap:
                    "Hayır, test işlemini genellikle tesisin elektrik ya da kalite personeli yürütür; operatörümüz sepeti güvenli şekilde konumlandırır ve test işlemine müdahale etmez.",
            },
            {
                soru: "Bina genelinde 30'a yakın armatür var, tek sevkiyatla mı hallediyorsunuz?",
                cevap:
                    "Mümkün olduğunca evet; armatürlerin konumlarını önceden bir listede topluyor, turu en verimli sırayla planlıyoruz. Bazı noktalar diğerlerinden daha zor erişimliyse bunları ayrıca işaretleyip özel olarak planlıyoruz.",
            },
            {
                soru: "Test kaydını siz mi tutuyorsunuz?",
                cevap:
                    "Hayır, test sonucu tesisin kendi formuna kaydedilir; biz yalnızca erişimi sağlıyoruz. İş kabul formumuzda hangi noktalara erişildiği genel hatlarıyla belirtilir ama test sonucu bizim sorumluluğumuzda değildir.",
            },
            {
                soru: "Arızalı bir armatür bulursak ne yapıyorsunuz?",
                cevap:
                    "Durumu anında tesis yetkilisine bildiriyoruz; değişim ya da onarım genellikle tesisin kendi elektrik ekibi tarafından yapılır. Değişim için ikinci bir platform sevkiyatı gerekiyorsa bunu ayrıca planlıyoruz.",
            },
            {
                soru: "Yüksek tavanlı bir hacimde test turu yapılacak, hangi sınıf öneriyorsunuz?",
                cevap:
                    "Çalışma yüksekliğine ve varsa engellere (kablo kanalı, tesisat) göre eklemli ya da makaslı sınıf arasında seçim yapıyoruz. Hedef noktaların yüksekliğini keşifte ölçüp buna göre karar veriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Acil aydınlatma sistemlerinin periyodik test edilmesi ve kaydının tutulması genel iş güvenliği/yangın mevzuatı pratiğidir; enerji kesme sorumluluğunun tesisin elektrik personelinde olması genel iş güvenliği kuralıdır. Belirli tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform Kiralama: Denetim Eşliğinde Belgeli Kullanım",
        giris:
            "Kalite ve sertifikasyon işlerinde platformun kimin tarafından kullanılacağı, iş güvenliği kadar denetim güvenilirliği açısından da önemlidir. Bir tetkik ya da kalibrasyon işi sırasında denetçi ya da kalite personeli genellikle sepette bulunur ve dikkatini kendi işine (kayıt kontrolü, ölçüm) verir; platformun konumlandırılmasıyla aynı anda uğraşması beklenmez. Bu yüzden kısa süreli ve hassas denetim işlerinde operatörlü kiralamayı öneriyoruz — belgeli operatörümüz makineyi yönetirken, denetçi ya da kalite personeli kendi görevine odaklanabilir. Bu sayfada operatörlü kiralamanın denetim işlerinde neden tercih edildiğini, belge kontrolünün nasıl yapıldığını ve operatörsüz seçeneğin hangi durumlarda daha uygun olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Operatör belgesi tetkik dosyasına eklenebilir",
                metin:
                    "Kalite yönetim sistemi işletilen tesislerde sahaya giren personelin yeterlilik belgesi istenebilir; operatörümüzün yeterlilik belgesini tetkikten önce elektronik olarak iletiyoruz, tesis bu belgeyi kendi tetkik dosyasına ekleyebilir.",
            },
            {
                baslik: "Denetçi kendi işine odaklanır, operatör makineyi yönetir",
                metin:
                    "Sepette bulunan denetçi ya da kalite personeli fotoğraf çekmek, kayıt doğrulamak ya da ölçüm yapmakla meşgulken, sepetin konumlandırılması ve güvenliği operatörümüzün sorumluluğundadır. Bu iş bölümü, her iki tarafın da kendi işine odaklanmasını sağlar.",
            },
            {
                baslik: "Kısa süreli işlerde belge sürecinden kaçınma",
                metin:
                    "Tek seferlik ya da nadiren tekrarlayan denetim işlerinde, tesisin kendi personeline platform kullanım belgesi aldırması ekonomik olmayabilir; bu durumda operatörlü kiralama, ayrı bir belge süreciyle uğraşmadan en hızlı çözümü sunar.",
            },
            {
                baslik: "Düzenli tekrarlayan işlerde operatörsüz seçenek",
                metin:
                    "İhtiyaç düzenli tekrarlıyorsa (örneğin aylık kalibrasyon turu) ve tesisin kendi personeli sertifikalıysa, operatörsüz kiralama daha ekonomik olabilir. Bu kararı, işin sıklığı ve tesisin personel kapasitesine göre birlikte değerlendiriyoruz.",
            },
            {
                baslik: "İş kabul formu ve sorumluluk sınırı",
                metin:
                    "Operatörlü kiralamada, sahaya giriş ve iş bitiminde bir iş kabul formu imzalanır; bu form makinenin durumunu, erişilen noktaları ve çalışma saatini kaydeder. Bu, hem tesisin hem bizim sorumluluk sınırımızı netleştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü mü operatörsüz mü: karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, denetim ve kalite işlerinde operatörlü/operatörsüz kararını nasıl verdiğimizi özetler.",
                ],
                tablo: {
                    basliklar: ["İş profili", "Sıklık", "Tesis personeli belgeli mi", "Önerilen seçenek"],
                    satirlar: [
                        ["Tek seferlik tetkik erişimi", "Nadiren", "Genelde hayır", "Operatörlü"],
                        ["Aylık kalibrasyon turu", "Düzenli", "Genelde evet", "Operatörsüz değerlendirilebilir"],
                        ["Dış denetim eşliği", "Nadiren", "Değişken", "Operatörlü"],
                        ["Düzeltici faaliyet erişimi", "Acil, tek seferlik", "Genelde hayır", "Operatörlü"],
                    ],
                },
            },
            {
                baslik: "Belge kontrolü sahada nasıl yapılır",
                paragraflar: [
                    "Operatörümüzün yeterlilik belgesi ve makinenin periyodik kontrol raporu, tesise girişte istenirse ibraz edilir; bu belgeler ayrıca elektronik olarak tetkikten önce iletilir. Belge süresi dolmuşsa o operatör sahaya gönderilmez, yerine güncel belgeli bir operatör planlanır.",
                    "Tesisin kendi güvenlik prosedürü gereği ek bir oryantasyon ya da saha girişi eğitimi isteniyorsa, operatörümüz bu eğitime katılır; bu süre çalışma programına dahil edilir.",
                ],
            },
            {
                baslik: "Operatörsüz seçenekte tesisin sorumluluğu",
                paragraflar: [
                    "Operatörsüz kiralamada makineyi kullanacak tesis personelinin geçerli bir yeterlilik belgesi olması beklenir; bu belge kiralama öncesi tarafımıza iletilir. Belgesiz kullanım söz konusu olamaz.",
                    "Operatörsüz seçenekte makinenin günlük kontrolü ve güvenli kullanımı tesisin sorumluluğuna geçer; bu net biçimde sözleşmeye yazılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Denetim günü sadece makineyi mi kiralıyorsunuz, yoksa operatör de geliyor mu?",
                cevap:
                    "Kısa süreli ve hassas denetim işlerinde operatörlü kiralamayı öneriyoruz, çünkü sepetin konumlandırılması ile denetçinin kendi işine odaklanması aynı anda yürümesi gereken iki iştir. İhtiyacınız düzenli tekrarlıyorsa operatörsüz seçeneği de birlikte değerlendirebiliyoruz.",
            },
            {
                soru: "Operatörünüzün belgesi tetkik dosyamıza uygun mu?",
                cevap:
                    "Operatörümüzün yeterlilik belgesini tetkikten önce elektronik olarak iletiyoruz; bu belge kendi tetkik dosyanıza eklenebilir. Belge süresi dolmuşsa o operatör sahaya gönderilmez, güncel belgeli bir operatör planlanır.",
            },
            {
                soru: "Operatörsüz kiralarsak kendi personelimiz belgesiz kullanabilir mi?",
                cevap:
                    "Hayır, operatörsüz kiralamada makineyi kullanacak personelin geçerli bir yeterlilik belgesi olması gerekir; bu belge kiralama öncesi bize iletilir. Belgesiz kullanım söz konusu olamaz.",
            },
            {
                soru: "Tek seferlik bir iş için kendi personelimize belge aldırmak mantıklı mı?",
                cevap:
                    "Genelde değil; nadiren tekrarlayan işlerde tesisin kendi personeline belge aldırması ekonomik olmayabilir. Bu durumda operatörlü kiralama, ayrı bir belge süreciyle uğraşmadan en hızlı çözümü sunar.",
            },
            {
                soru: "Aylık kalibrasyon turumuz var, her seferinde operatör mü gönderiyorsunuz?",
                cevap:
                    "Düzenli tekrarlayan işlerde tesisin kendi personeli sertifikalıysa operatörsüz kiralama daha ekonomik olabilir; bu kararı işin sıklığına ve personel kapasitenize göre birlikte değerlendiriyoruz.",
            },
            {
                soru: "İş kabul formunda ne yazıyor?",
                cevap:
                    "Makinenin durumu, erişilen noktalar ve çalışma saati kaydedilir; bu form sahaya giriş ve iş bitiminde imzalanır. Bu, hem tesisin hem bizim sorumluluk sınırımızı netleştiren bir belgedir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatör yeterlilik belgesi ve iş kabul formu uygulaması EN 280 kapsamındaki genel operatör eğitim/belgelendirme pratiğidir; kalite yönetim sistemlerinde sahaya giren personel kaydının tetkik dosyasına eklenmesi ISO 9001/AS9100 iç tetkik pratiğinden gelir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakım Platformu: Tek Turda Birden Fazla Denetim Noktası",
        giris:
            "Bazı sertifikasyon ya da iç tetkik hazırlıkları, tek bir noktayı değil, tesis genelinde dağılmış birçok noktayı kapsar: farklı katlardaki arşiv rafları, birden fazla kalibrasyon istasyonu, çeşitli bölümlerdeki acil aydınlatma armatürleri. Bu işleri tek tek ayrı sevkiyatlarla yapmak yerine, tüm noktaları tek bir günlük rotaya toplayıp makineyi bir kez getirip günün tamamında kullanmak hem maliyeti hem zaman kaybını azaltır. Çok noktalı rota bakım platformu hizmeti, bu tür dağınık ama düşük hacimli erişim ihtiyaçlarını bir araya getirmek için kurulmuştur. Bu sayfada rota planlamasını nasıl yaptığımızı, farklı hassasiyet düzeyindeki noktaları nasıl sıraladığımızı ve rota sırasında beklenmedik bir gecikme olduğunda ne yaptığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Rota önceden bir listede toplanır",
                metin:
                    "Talep geldiğinde önce tüm erişim noktalarının bir listesini çıkarıyoruz: konum, yükseklik, erişim türü (arşiv, kalibrasyon, aydınlatma) ve tahmini süre. Bu liste olmadan sahaya gitmiyoruz, çünkü rastgele sıralama gereksiz geri dönüşlere yol açabilir.",
            },
            {
                baslik: "Hassasiyet düzeyine göre sıralama",
                metin:
                    "Farklı noktalar farklı hassasiyet gerektirir; örneğin bir kalibrasyon laboratuvarı titreşimsiz duruş isterken bir arşiv rafı daha hızlı geçilebilir. Genellikle en hassas işi günün başında, ekip ve makine henüz yorulmamışken planlıyoruz.",
            },
            {
                baslik: "Kat ve bölüm arası geçişte temizlik-kabul süresi",
                metin:
                    "Bir bölümden (örneğin kapalı laboratuvar) diğerine (örneğin açık depo) geçerken, teker ve alt takım temizliği gerekebilir; bu geçiş süresi rota planına dahil edilir, gizli bir kalem olarak eklenmez.",
            },
            {
                baslik: "Rota sırasında beklenmedik gecikme",
                metin:
                    "Bir noktada iş beklenenden uzun sürerse (örneğin denetçi ek bir kayıt istemişse), kalan rotanın günün geri kalanına sığıp sığmayacağı değerlendirilir. Sığmıyorsa hangi noktaların ertelenip hangilerinin öncelikli tamamlanacağı tesisle birlikte kararlaştırılır.",
            },
            {
                baslik: "Birden fazla bina/adres tek turda mümkün mü",
                metin:
                    "Aynı yerleşke içindeki farklı binalar arasında tek turda geçiş genellikle mümkündür; farklı ilçe ya da OSB'deki ayrı adresler için ise mesafe ve zaman hesaplanır, gerekirse ayrı bir sevkiyat önerilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında tipik sıralama mantığı",
                paragraflar: [
                    "Aşağıdaki tablo, çok noktalı bir tetkik hazırlığında rotayı nasıl sıraladığımızı özetler.",
                ],
                tablo: {
                    basliklar: ["Sıra", "Nokta türü", "Hassasiyet", "Zamanlama"],
                    satirlar: [
                        ["1", "Kalibrasyon laboratuvarı", "Yüksek, titreşimsiz", "Gün başı"],
                        ["2", "Arşiv rafı erişimi", "Orta", "Öğleden önce"],
                        ["3", "Acil aydınlatma test turu", "Düşük-orta", "Öğleden sonra"],
                        ["4", "Açık saha/dış cephe kontrolü", "Hava koşuluna bağlı", "Rüzgâr uygunsa herhangi bir saat"],
                    ],
                },
            },
            {
                baslik: "Liste olmadan rota kurulmaz",
                paragraflar: [
                    "Rastgele sıralamayla sahaya gitmek, bir noktanın atlanması ya da gereksiz geri dönüş riski taşır; bu yüzden talebi aldığımızda önce tam bir nokta listesi istiyoruz. Liste eksikse, eksik kalan noktaları teklif öncesi netleştiriyoruz.",
                    "Liste hazırlarken hangi noktaların birbirine yakın olduğunu, hangi geçişlerin temizlik-kabul süresi gerektirdiğini işaretliyoruz; bu, günün toplam süresini gerçekçi tahmin etmemizi sağlıyor.",
                ],
            },
            {
                baslik: "Tüm noktalar bir günde bitmezse",
                paragraflar: [
                    "Nokta sayısı fazlaysa ya da bazı işler beklenenden uzun sürerse, tüm rotanın tek günde bitmeyebileceğini önceden söylüyoruz; bu durumda öncelikli noktaları belirleyip kalanı ikinci bir güne planlıyoruz.",
                    "İkinci gün ek bir sevkiyat maliyeti doğurabilir; bunu teklif aşamasında olası bir senaryo olarak belirtiyoruz, sahada sürpriz olmasın diye.",
                ],
            },
        ],
        sss: [
            {
                soru: "Farklı katlardaki beş ayrı noktaya tek günde erişim mümkün mü?",
                cevap:
                    "Genellikle mümkün; önce tüm noktaların listesini çıkarıp hassasiyet düzeyine göre sıralıyoruz. En hassas işi gün başında, ekip henüz yorulmamışken planlıyoruz. Nokta sayısı fazlaysa tüm rotanın tek günde bitmeyebileceğini önceden söylüyoruz.",
            },
            {
                soru: "Kapalı laboratuvardan açık sahaya geçerken ek süre gerekiyor mu?",
                cevap:
                    "Evet, bu geçişte teker ve alt takım temizliği gerekebilir; bu süre rota planına baştan dahil edilir, gizli bir kalem olarak eklenmez. Mümkünse temiz kapalı hacimden açık alana doğru tek yönlü bir sıra kuruyoruz.",
            },
            {
                soru: "Bir noktada iş uzarsa geri kalan rota ne olur?",
                cevap:
                    "Kalan rotanın günün geri kalanına sığıp sığmayacağını değerlendiriyoruz. Sığmıyorsa hangi noktaların öncelikli tamamlanacağını tesisle birlikte kararlaştırıyoruz; ertelenen noktalar için ikinci bir tarih planlıyoruz.",
            },
            {
                soru: "Farklı OSB'lerdeki iki ayrı tesise tek turda gidebilir misiniz?",
                cevap:
                    "Aynı yerleşke içindeki binalar için tek tur genellikle mümkündür; farklı OSB ya da ilçedeki ayrı adresler için mesafe ve zaman hesaplanır, çoğu zaman ayrı bir sevkiyat daha verimli çıkar. Bu değerlendirmeyi teklif aşamasında yapıyoruz.",
            },
            {
                soru: "Nokta listesini biz mi hazırlıyoruz, yoksa siz mi çıkarıyorsunuz?",
                cevap:
                    "Sizin elinizdeki bilgiyle başlıyoruz; eksik kalan noktaları (konum, yükseklik, erişim türü) teklif öncesi birlikte netleştiriyoruz. Liste olmadan sahaya gitmiyoruz, çünkü rastgele sıralama gereksiz geri dönüşlere yol açabilir.",
            },
            {
                soru: "Tüm noktalar bir günde bitmezse ek ücret çıkar mı?",
                cevap:
                    "İkinci gün gerekiyorsa bu ek bir sevkiyat maliyeti doğurabilir; bunu teklif aşamasında olası bir senaryo olarak belirtiyoruz. Amacımız sahada sürpriz yaşatmamak, bu yüzden nokta sayısı fazlaysa bu ihtimali baştan konuşuyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çok noktalı erişim planlamasında hassasiyete göre sıralama ve kapalı-açık alan geçişinde temizlik-kabul süresi genel saha pratiğidir. Belirli tesis, kat sayısı veya rakam uydurulmamıştır; tetkik hazırlığının birden fazla noktayı kapsaması ISO 9001/AS9100 iç tetkik pratiğinden gelir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazi Platformu: Açık Stok Sahasında Malzeme Etiketleme Denetimi",
        giris:
            "Bazı tesislerin açık stok sahaları, hurda/hammadde depolama alanları ya da düzensiz zeminli dış avlular, kalite denetimi kapsamına girebilir — özellikle malzeme etiketleme, izlenebilirlik kaydı ya da çevresel uygunluk kontrolü söz konusu olduğunda. Bu alanlar kapalı bir üretim holünden farklı zemin koşulları sunar: stabilize olmayan yüzey, eğim, gevşek dolgu, mevsimsel yağış etkisi. Zor zemin ve arazi platformu, bu koşullarda güvenli erişim sağlayan arazi tipi (rough terrain) sınıfı kapsar. Bu sayfada açık stok sahasında denetim amaçlı erişimde zemin değerlendirmesini nasıl yaptığımızı, mevsimsel koşulların planlamayı nasıl etkilediğini ve arazi tipi makinenin ne zaman gerekmediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Zemin taşıma gücü teslim günü yeniden değerlendirilir",
                metin:
                    "Açık stok sahalarının zemin taşıma gücü mevsime ve yağışa göre değişir; bir hafta önce yapılan keşif bugünkü zemin durumunu garanti etmez. Teslim günü zemin sorumlu kişiyle birlikte yeniden gözden geçirilir.",
            },
            {
                baslik: "Eğim ve gevşek dolgu alanlarında güvenli rota",
                metin:
                    "Stok yığınları arasındaki geçici rotalar, eğim ve gevşek dolgu içerebilir; makinenin üretici eğim sınırı aşılmaz. Rota önceden yürünür, çukur ve gevşek nokta işaretlenir, gerekirse alternatif güzergâh kullanılır.",
            },
            {
                baslik: "Malzeme etiketleme ve izlenebilirlik kaydı erişimi",
                metin:
                    "Açık sahada istiflenen malzeme partilerinin etiketleri, denetim kapsamında doğrulanabilir; bu erişimde kalite personeli genellikle sepette bulunur ve etiketi fotoğraflar ya da kaydeder. Sepetin sabit durabilmesi bu işlem için önemlidir.",
            },
            {
                baslik: "Mevsimsel koşulun planlamaya etkisi",
                metin:
                    "Yağışlı dönemde zemin yumuşayabilir, kışın donma-çözülme döngüsü yüzeyi değiştirebilir. Bu koşullarda planlanan tarih hava durumuna göre esnetilebilir; acil bir denetim tarihi varsa alternatif bir sabit zemin noktası (varsa beton saha) değerlendirilir.",
            },
            {
                baslik: "Rüzgâr sınırı açık sahada geçerlidir",
                metin:
                    "Açık stok sahasındaki yükseklik işlerinde rüzgâr, makinenin üretici sınırına tabidir; sınır aşıldığında çalışma durdurulur. Bu durum denetim programını etkileyebileceği için tarih planlamasında hava tahmini önceden kontrol edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Açık saha zemin koşuluna göre sınıf seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, açık stok sahalarında karşılaştığımız zemin koşullarını ve önerilen platform sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin koşulu", "Eğim", "Mevsimsel risk", "Önerilen sınıf"],
                    satirlar: [
                        ["Stabilize saha", "Düşük", "Düşük", "Arazi tipi standart"],
                        ["Gevşek dolgu/toprak", "Orta", "Yüksek (yağış)", "Arazi tipi, geniş lastik"],
                        ["Eğimli stok alanı", "Yüksek", "Orta", "Arazi tipi, eğim sınırı düşük"],
                        ["Beton saha (varsa)", "Yok", "Düşük", "Standart teleskopik"],
                    ],
                },
            },
            {
                baslik: "Fotoğraf ve ölçüyle ön keşif",
                paragraflar: [
                    "Açık sahadaki erişim rotasının fotoğrafını (giriş yolu, çukur, eğim, hedefe kadar yüzey) talep aşamasında istiyoruz; bu, doğru sınıfın önceden belirlenmesini sağlar.",
                    "Teslim günü saha, yeni malzeme yığını ya da park edilmiş araç nedeniyle değişmiş olabilir; rota saha sorumlusuyla yeniden yürünür, eski plan zorlanmaz.",
                ],
            },
            {
                baslik: "Bu sınıf ne zaman gerekmez",
                paragraflar: [
                    "Sahada sabit bir beton alan varsa ve erişim noktası bu alandan ulaşılabiliyorsa, standart teleskopik ya da makaslı sınıf yeterli olabilir; arazi tipi makine her zaman ilk tercih değildir.",
                    "Zemin durumunu netleştirmeden arazi tipi makine önermiyoruz, çünkü bu sınıf genellikle daha yüksek maliyetlidir ve gerekmediği yerde tercih edilmesi gereksiz gider yaratır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Açık stok sahamızda malzeme etiketi denetimi yapılacak, zemin uygun mu bilmiyoruz?",
                cevap:
                    "Zemin durumunu talep aşamasında fotoğraf ve ölçüyle değerlendiriyor, teslim günü sahada bir kez daha kontrol ediyoruz. Eğim, gevşek dolgu ve çukur noktaları önceden işaretleniyor; makinenin üretici eğim sınırı aşılmıyor.",
            },
            {
                soru: "Yağış sonrası zemin yumuşadı, denetim tarihi ertelenir mi?",
                cevap:
                    "Zemin taşıma gücünü teslim günü yeniden değerlendiriyoruz; yumuşamışsa güvenli çalışma mümkün olmayabilir. Acil bir denetim tarihi varsa alternatif bir sabit zemin noktası (varsa beton saha) değerlendiriyoruz; yoksa hava koşulunun düzelmesini bekliyoruz.",
            },
            {
                soru: "Etiket kontrolü sırasında kalite personelimiz sepette durabilir mi?",
                cevap:
                    "Evet, genellikle kalite personeliniz sepette bulunur ve etiketi fotoğraflar ya da kaydeder. Sepetin sabit durabilmesi bu işlem için önemli; hedefe ulaştığında makineyi tam olarak sabitliyoruz.",
            },
            {
                soru: "Rüzgârlı bir günde açık sahada çalışabilir misiniz?",
                cevap:
                    "Rüzgâr hızı üretici sınırını aştığında çalışmayı durduruyoruz. Tarih planlamasında hava tahminini önceden kontrol ediyoruz; denetim programı sabitse rüzgârın daha düşük olduğu saat dilimini önermeye çalışıyoruz.",
            },
            {
                soru: "Sahamızda beton bir alan da var, standart makine yeterli mi?",
                cevap:
                    "Erişim noktası beton alandan ulaşılabiliyorsa standart teleskopik ya da makaslı sınıf yeterli olabilir; arazi tipi makine her zaman ilk tercih değil. Zemin durumunu netleştirmeden arazi tipi makine önermiyoruz, çünkü gereksiz maliyet yaratabilir.",
            },
            {
                soru: "Bir hafta önce yaptığınız keşif hâlâ geçerli mi?",
                cevap:
                    "Açık saha zemini mevsime ve yağışa göre değişebileceği için eski keşif bilgisiyle ilerlemiyoruz. Teslim günü rota saha sorumlusuyla yeniden yürünür; yeni malzeme yığını ya da park edilmiş araç varsa alternatif güzergâh değerlendirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Arazi tipi (rough terrain) platformların eğim ve zemin sınırları EN 280 kapsamındaki genel makine özellikleridir; açık stok sahalarında malzeme etiketleme/izlenebilirlik denetimi genel kalite yönetim pratiğidir. Belirli tesis adı ve rakam uydurulmamıştır.",
    },
};
