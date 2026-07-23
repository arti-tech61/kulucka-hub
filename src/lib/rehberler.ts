export interface RehberBolum {
    baslik: string;
    paragraflar: string[];
}

export interface Rehber {
    slug: string;
    etiket: string; // kategori üst yazısı
    baslik: string;
    aciklama: string; // meta description
    giris: string;
    bolumler: RehberBolum[];
    sss?: { soru: string; cevap: string }[];
}

export const rehberler: Rehber[] = [
    {
        slug: "platform-tipi-secim-rehberi",
        etiket: "Makine Seçim Rehberi",
        baslik: "Makaslı mı, Eklemli mi, Teleskopik mi? Platform Tipi Seçim Rehberi",
        aciklama:
            "Yükseltici platform tipleri karşılaştırması: makaslı, eklemli ve teleskopik platform hangi işte seçilir? Yükseklik, erişim ve zemin ölçütleriyle pratik seçim rehberi.",
        giris:
            "Yükseltici platform kiralarken ilk soru yükseklik değil, işin geometrisidir: çalışma noktasının tam altına makine koyabiliyor musunuz, yoksa engelin ötesine mi erişeceksiniz? Bu rehber üç ana platform tipini aynı ölçütlerle karşılaştırır.",
        bolumler: [
            {
                baslik: "Makaslı platform: dikey erişimin standardı",
                paragraflar: [
                    "Makaslı platform sepeti yalnız dikey hareket ettirir; çalışma noktasının tam altına konumlanabildiğiniz her işte ilk tercihtir. En büyük artısı sepet kapasitesidir: geniş tablada iki-üç çalışan, malzeme ve el aletleriyle birlikte yükselir.",
                    "Tavan tesisatı, aydınlatma, sprinkler, havalandırma kanalı, depo raf işleri ve cephe kaplamanın düz bölümleri makaslının tipik işleridir. Elektrikli modeller iç mekânda, dizel 4x4 modeller şantiye sahasında çalışır.",
                    "Sınırı da nettir: yatay erişim yok denecek kadar azdır. Sepetin ulaşacağı noktanın altında engel (makine hattı, çukur, ağaç, sundurma) varsa makaslı yetersiz kalır.",
                ],
            },
            {
                baslik: "Eklemli platform: engelin üzerinden aşan bom",
                paragraflar: [
                    "Eklemli (akrobat) platformun bomu birden fazla noktadan kırılır; bu yapı makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir.",
                    "Çatı arkaları, cephe girintileri, boru köprüleri, konveyör hatları ve ağaçlı peyzaj önündeki cepheler eklemlinin işleridir. Aynı yükseklikteki teleskopike göre daha dar alanda kurulur; dönebilen kule yapısı dar şantiyede büyük avantajdır.",
                    "Karşılığında maksimum yatay erişimi teleskopikten kısadır ve aynı yükseklik sınıfında genellikle bir miktar daha yüksek kiralama bedeliyle döner.",
                ],
            },
            {
                baslik: "Teleskopik platform: maksimum erişim, düz doğrultu",
                paragraflar: [
                    "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi verir. Açık cephede, geniş sahada, makineyi işin uzağına kurmak zorunda olduğunuz durumlarda doğru seçimdir.",
                    "Köprü altı bakımları, stadyum ve hangar işleri, enerji nakil hattı yakınındaki kontrollü çalışmalar ve yüksek prefabrik montajı teleskopiğin alanıdır.",
                    "Engel aşma kabiliyeti sınırlıdır: bomun önünde yapı varsa eklemliye dönmek gerekir. Ayrıca uzun bomun salınımı nedeniyle hassas montaj işlerinde eklemli daha konforlu çalışır.",
                ],
            },
            {
                baslik: "Üç soruda hızlı karar",
                paragraflar: [
                    "1) Çalışma noktasının tam altına makine koyabiliyor musunuz? Evet → makaslı. 2) Hayır; arada engel mi var? Evet → eklemli. 3) Engel yok ama nokta uzakta mı? → teleskopik.",
                    "Yükseklik payını unutmayın: makine kataloglarındaki değer platform (sepet zemini) yüksekliğidir; çalışma yüksekliği bunun yaklaşık 2 metre üzeridir. İşin gerektirdiği en yüksek noktaya göre bir sınıf yukarıdan seçmek, sepetin zorlanmadan konumlanmasını sağlar.",
                ],
            },
        ],
        sss: [
            { soru: "Aynı işte iki tip makine gerekebilir mi?", cevap: "Evet; örneğin depo projesinde raf işleri makaslıyla, cephe ve saçak işleri eklemliyle yürür. Çok makineli işlerde tek organizasyonla kombine kiralama maliyeti düşürür." },
            { soru: "Rüzgâr limiti tipe göre değişir mi?", cevap: "Evet. Üretici limiti model ve kullanım konfigürasyonu bazında verir. Eklemli, teleskopik ve makaslı platformların dış mekân onayları aynı olmayabilir; çalışma öncesinde makinenin teknik föyü ve üzerindeki bilgi plakası kontrol edilmelidir." },
            { soru: "Zemin eğimi hangi tipte daha kritik?", cevap: "Tüm personel yükselticilerde kritiktir. Eklemli ve teleskopik modellerde uzayan erişim nedeniyle üreticinin eğim ve kurulum sınırlarına özellikle uyulmalıdır; denge göstergesi ve zemin koşulu kontrol edilmeden platform yükseltilmemelidir." },
        ],
    },
    {
        slug: "yuksekte-calisma-mevzuati",
        etiket: "İSG ve Mevzuat",
        baslik: "Yüksekte Çalışma Mevzuatı: 6331 Kapsamında Yükümlülükler Rehberi",
        aciklama:
            "6331 sayılı İSG Kanunu ve ilgili yönetmeliklere göre yüksekte çalışma: tanım, işveren yükümlülükleri, toplu koruma önceliği, ekipman ve eğitim şartları.",
        giris:
            "Yüksekte çalışma, Türk İSG mevzuatının en sıkı düzenlenen alanlarından biridir. Bu rehber; 6331 sayılı Kanun, İnşaat İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği ve İş Ekipmanları Yönetmeliği'nin yüksekte çalışmaya bakan yükümlülüklerini saha diliyle özetler.",
        bolumler: [
            {
                baslik: "Yüksekte çalışma sayılan işler",
                paragraflar: [
                    "Mevzuat belirli bir metre eşiği koymaz: seviye farkı bulunan ve düşme sonucu yaralanma ihtimali olan her çalışma yüksekte çalışmadır. Bir metrelik platformdaki iş de, 40 metredeki cephe işi de aynı hukuki çerçeveye girer.",
                    "Bu geniş tanımın pratik sonucu şudur: 'alçak, bir şey olmaz' değerlendirmesi hukuken geçersizdir; risk değerlendirmesi seviye farkı olan her işi kapsamalıdır.",
                ],
            },
            {
                baslik: "Önlem hiyerarşisi: önce toplu koruma",
                paragraflar: [
                    "Mevzuat önlem sırasını açıkça kurar: önce çalışma yerinin güvenli kılınması (korkuluk, platform, kapak), sonra toplu koruma (güvenlik ağı), en son kişisel koruyucu donanım (emniyet kemeri).",
                    "Yükseltici platform kullanımı bu hiyerarşide güçlü bir toplu koruma çözümüdür: çalışan, korkuluklu ve zemin dayanımı test edilmiş bir sepette çalışır. Merdiven ve iskele kurulumuna göre hem hızlı hem denetlenebilir bir yöntemdir.",
                    "Kemer, korkuluğun alternatifi değildir. Eklemli ve teleskopik personel yükselticilerde fırlama riskine karşı üretici talimatı, saha prosedürü ve risk değerlendirmesine uygun bağlantı sistemi kullanılmalıdır.",
                ],
            },
            {
                baslik: "Ekipman yükümlülükleri",
                paragraflar: [
                    "İş Ekipmanları Yönetmeliği'ne göre kaldırma ekipmanları yılda en az bir kez yetkili teknik elemanca periyodik kontrolden geçirilir; raporun sahada bulunması denetimlerde ilk istenen evraktır.",
                    "Günlük operatör kontrolü ayrı bir yükümlülüktür: fren, acil stop, acil indirme, korkuluk ve denge sensörü her vardiya öncesi test edilip kaydedilmelidir.",
                    "Kiralık makinede periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracının sorumluluğundadır. Sözleşmede bu paylaşımın yazılı olması iki tarafı da korur.",
                ],
            },
            {
                baslik: "Eğitim ve belgelendirme",
                paragraflar: [
                    "Yüksekte çalışacak herkese işe özgü İSG eğitimi verilmelidir; yükseltici platform operatörünün ayrıca operatör belgesi (MYK yeterliliği) bulunmalıdır.",
                    "Eğitim kayıtları ve belge fotokopileri şantiye İSG dosyasında tutulur. Belgesiz operatör çalıştırmak idari yaptırımın ötesinde, kaza hâlinde işverenin kusurunu ağırlaştıran ana etkendir.",
                ],
            },
        ],
        sss: [
            { soru: "1,5 metrelik seviye farkı için de önlem şart mı?", cevap: "Evet. Mevzuat metre eşiği tanımlamaz; düşme riski doğuran her seviye farkı risk değerlendirmesine girmek ve önlem almak zorundadır." },
            { soru: "Periyodik kontrolü kim yapabilir?", cevap: "Makine mühendisleri ile ilgili teknik eğitimli makine teknikerleri/yüksek teknikerleri; kontrol EKİPNET sistemine kayıtlı yetkili kişilerce raporlanır." },
            { soru: "Yükseltici platform iskele yerine kullanılabilir mi?", cevap: "İşin niteliğine göre çoğunlukla evet; kısa süreli ve noktasal işlerde platform, iskeleye göre hem hızlı hem güvenli bir toplu koruma çözümüdür. Uzun süreli sabit cephe işlerinde iskele ekonomik kalabilir." },
        ],
    },
    {
        slug: "is-oncesi-kontrol-listesi",
        etiket: "Saha Uygulaması",
        baslik: "Yüksekte Çalışma Öncesi Kontrol Listesi: 10 Maddede Güvenli Başlangıç",
        aciklama:
            "Yüksekte çalışmaya başlamadan önce kontrol edilecek 10 başlık: zemin, hava, enerji hatları, makine kontrolleri, KKD ve çalışma izni. Yazdırılabilir pratik liste.",
        giris:
            "Ciddi düşme kazalarının ortak özelliği, işin 'hemen başlayıverelim' diye kontrolsüz açılmasıdır. Bu 10 maddelik liste, ekip lideri veya İSG uzmanının iş başlamadan beş dakikada tamamlayabileceği bir kapı kontrolüdür.",
        bolumler: [
            {
                baslik: "1-3: Saha ve çevre",
                paragraflar: [
                    "1) Zemin: Makinenin kurulacağı zeminin taşıma kapasitesi ve eğimi uygun mu? Dolgu, rögar kapağı ve kanal üstlerinden kaçının; gerekirse çelik plaka serin.",
                    "2) Hava: Rüzgâr, yağış ve görüş koşulları seçilen modelin üretici limitlerine uygun mu? Gün içi bozulma ihtimaline karşı ekipmana özgü durdurma kriterini baştan belirleyin.",
                    "3) Enerji hatları: Çalışma sahasının üstünde veya bom hareket zarfında enerji nakil hattı var mı? Güvenli mesafe sağlanamıyorsa hat sahibinden kesinti/izolasyon istenmeden iş açılmaz.",
                ],
            },
            {
                baslik: "4-7: Makine ve ekipman",
                paragraflar: [
                    "4) Günlük kontrol: Operatörün vardiya öncesi kontrol formu dolduruldu mu? Acil stop ve acil indirme test edildi mi?",
                    "5) Evrak: Periyodik kontrol raporu ve operatör belgesi sahada mı?",
                    "6) KKD: Eklemli veya teleskopik platformda üretici talimatına uygun tam vücut kemeri ve bağlantı sistemi doğru ankraj noktasına bağlı mı? Baret ve diğer KKD saha risk değerlendirmesine uygun mu?",
                    "7) Yük: Sepetteki kişi + malzeme toplamı kapasite etiketinin altında mı? Sepetten sarkan, korkuluğa asılan yük var mı?",
                ],
            },
            {
                baslik: "8-10: Organizasyon",
                paragraflar: [
                    "8) Alan izolasyonu: Makinenin altı ve devrilme zarfı şeritle kapatıldı mı? Alan içinden yaya/araç geçişi engellendi mi?",
                    "9) Haberleşme ve gözcü: Yerde, acil indirmeyi bilen bir kişi görevli mi? Operatörle haberleşme yöntemi (telsiz/işaret) belirlendi mi?",
                    "10) Çalışma izni: Tesis prosedürü gerektiriyorsa yüksekte çalışma izni imzalandı mı? İzinsiz başlanan iş, en sık rastlanan denetim bulgusudur.",
                ],
            },
        ],
        sss: [
            { soru: "Bu listeyi kim doldurmalı?", cevap: "İdeali ekip lideri veya İSG uzmanının iş başlamadan doldurmasıdır; operatörün günlük makine kontrolü bu listenin 4. maddesini besler, yerine geçmez." },
            { soru: "Enerji hattına güvenli mesafe nedir?", cevap: "Hat gerilimine göre değişir ve tesis/dağıtım şirketi prosedürüne tabidir; belirsizlikte hat yetkilisinden yazılı mesafe veya kesinti talep edilmelidir." },
            { soru: "Gözcü gerçekten zorunlu mu?", cevap: "Mevzuat acil durumlara karşı organizasyon ister; sepetteki çalışanın kurtarılması yerden acil indirme bilen biri olmadan mümkün olmayabilir. Tek kişilik 'yalnız çalışma' yüksekte kabul edilmemelidir." },
        ],
    },
    {
        slug: "akulu-mu-dizel-mi-platform-secimi",
        etiket: "Makine Seçim Rehberi",
        baslik: "Akülü mü, Dizel mi? Güç Kaynağına Göre Platform Seçimi",
        aciklama:
            "İç mekân mı, açık şantiye mi? Akülü ve dizel yükseltici platformlar arasındaki fark: emisyon, gürültü, zemin gereksinimi ve maliyet açısından karşılaştırma.",
        giris:
            "Platform tipini (makaslı/eklemli/teleskopik) belirledikten sonra ikinci büyük karar güç kaynağıdır. Bu seçim çalışma ortamına göre değişir ve doğru yapılmadığında hem operasyonel hem maliyet sorunu doğurur.",
        bolumler: [
            {
                baslik: "Akülü platformlar: kapalı alanın standardı",
                paragraflar: [
                    "Akülü modeller sıfır emisyonlu ve düşük gürültülüdür; bu özellikleri onları AVM, hastane, fabrika içi ve ofis gibi kapalı, havalandırması sınırlı mekânlar için zorunlu tercih hâline getirir.",
                    "Şarj süresi ve vardiya planlaması akülü kullanımın kısıtıdır: tam şarj genellikle 8 saat sürer, bu yüzden 24 saat kesintisiz çalışan sahalarda yedek makine veya vardiya arası şarj planı gerekir.",
                    "Zemin hassasiyeti de düşüktür — iz bırakmayan lastik seçenekleri sayesinde parke, epoksi kaplama gibi hassas zeminlerde akülü modeller tercih edilir.",
                ],
            },
            {
                baslik: "Dizel platformlar: açık sahanın gücü",
                paragraflar: [
                    "Dizel modeller genellikle 4 çeker tahrik ve daha yüksek tırmanma açısıyla gelir; şantiye sahası, arazi zemini ve eğimli yüzeylerde akülüden daha güvenilirdir.",
                    "Yakıt ikmali dakikalar sürer, bu da kesintisiz vardiya gerektiren dış mekân projelerinde operasyonel avantaj sağlar.",
                    "Buna karşılık gürültü ve egzoz emisyonu nedeniyle kapalı alanda kullanılamaz; kapalı bir depo veya hangarda dizel makine çalıştırmak karbon monoksit riski doğurur.",
                ],
            },
            {
                baslik: "Karar tablosu",
                paragraflar: [
                    "Kapalı mekân, hassas zemin, gece/mesai saati kısıtı olan sahalar → akülü. Açık şantiye, eğimli/arazi zemin, uzun vardiya ve hızlı ikmal ihtiyacı → dizel.",
                    "Bazı projelerde her iki tip de gerekir: örneğin bir fabrika genişletme projesinde iç mekân bakımı akülüyle, dış cephe ve çatı işleri dizel makineyle yürütülür.",
                ],
            },
        ],
        sss: [
            { soru: "Hibrit (akülü + dizel) modeller var mı?", cevap: "Evet, bazı üreticiler her iki gücü birleştiren modeller sunar; ancak Türkiye'deki kiralık filo ağırlıklı olarak saf akülü veya saf dizel modellerden oluşur." },
            { soru: "Akülü platform yağmurda kullanılabilir mi?", cevap: "Çoğu akülü model iç mekân kullanımı için tasarlanmıştır ve açık havada yağışa karşı IP koruma sınıfı sınırlıdır; dış mekân/yağış koşulları için üreticinin onayı kontrol edilmelidir." },
        ],
    },
    {
        slug: "kis-aylarinda-yukseklik-guvenligi-buz-don",
        etiket: "Saha Uygulaması",
        baslik: "Kış Aylarında Yükseklikte Çalışma: Buz ve Don Riskine Karşı Önlemler",
        aciklama:
            "Düşük sıcaklıkta yükseltici platform kullanımı: buzlanmış zemin, donmuş hidrolik hortum ve soğuk hava koşullarının operasyona etkisi.",
        giris:
            "Kış ayları yüksekte çalışmaya iki ayrı risk katmanı ekler: zemin ve ekipmanın kendisi. Bu rehber, düşük sıcaklıkta güvenli operasyon için alınması gereken ek önlemleri özetler.",
        bolumler: [
            {
                baslik: "Buzlanmış zemin ve kayma riski",
                paragraflar: [
                    "Sabah erken saatlerde veya gölgeli alanlarda zemin buzlanması, makinenin stabilizatör ayaklarının tam temas kurmasını engelleyebilir. Kurulum öncesi zemin görsel kontrolü kış aylarında standart hâle getirilmelidir.",
                    "Merdiven ve platforma giriş basamaklarındaki buzlanma, çalışanın düşme riskini asıl işten önce, makineye binerken doğurur — bu basit ama sık gözden kaçan bir risktir.",
                ],
            },
            {
                baslik: "Ekipmanın soğuktan etkilenmesi",
                paragraflar: [
                    "Düşük sıcaklıkta hidrolik yağın viskozitesi artar; bu, makinenin ilk hareketlerinde yavaşlık veya sertlik olarak hissedilir. Üreticiler genellikle belirli bir sıcaklığın altında ısınma süresi (rölantide bekleme) önerir.",
                    "Akülü platformlarda düşük sıcaklık akü performansını düşürür; kış aylarında normalden daha kısa çalışma süresi ve daha uzun şarj süresi beklenmelidir.",
                    "Lastiklerin ve hidrolik hortumların soğukta sertleşmesi, günlük kontrolde çatlak taraması yapılırken normalden daha dikkatli bakılmasını gerektirir.",
                ],
            },
        ],
        sss: [
            { soru: "Kar yağışında çalışmaya devam edilebilir mi?", cevap: "Görüş mesafesi, zemin kayganlığı ve üreticinin hava koşulu limitlerine bağlıdır; genel kural, aktif kar yağışında dış mekân platform operasyonlarının durdurulmasıdır." },
            { soru: "Kışın periyodik kontrol sıklığı değişir mi?", cevap: "Yasal periyot değişmez, ancak bazı işletmeler kış öncesi ek bir teknik kontrol (hidrolik seviye, akü sağlığı) uygulamayı tercih eder." },
        ],
    },
    {
        slug: "gecici-koruma-sistemleri-guvenlik-agi-korkuluk",
        etiket: "İSG ve Mevzuat",
        baslik: "Geçici Koruma Sistemleri: Güvenlik Ağı ve Korkuluk Ne Zaman Kullanılır?",
        aciklama:
            "Yükseltici platform tek çözüm değildir — geçici korkuluk sistemleri ve güvenlik ağları hangi işlerde platformun yerini alır veya tamamlar?",
        giris:
            "Yüksekte çalışma önlemleri yalnız yükseltici platformdan ibaret değildir. Bu rehber, sabit veya uzun süreli işlerde tercih edilen geçici koruma sistemlerini ve platformla birlikte nasıl kullanıldıklarını anlatır.",
        bolumler: [
            {
                baslik: "Geçici korkuluk sistemleri",
                paragraflar: [
                    "Döşeme kenarı, çatı saçağı ve iskele kenarlarında kurulan geçici korkuluklar, uzun süreli sabit çalışma alanlarında yükseltici platforma göre daha ekonomik bir toplu koruma çözümüdür.",
                    "Korkuluk yüksekliği ve orta bar/topuk levhası mevzuatta net tanımlıdır; sahada en sık eksik bırakılan unsur topuk levhasıdır — bu, düşen küçük malzemenin alt kattaki çalışanı yaralamasını önler.",
                ],
            },
            {
                baslik: "Güvenlik ağları",
                paragraflar: [
                    "Çelik yapı montajı ve büyük açıklıklı çatı işlerinde güvenlik ağı, çalışanın düşmesi durumunda onu yakalayan bir toplu korumadır. Ağın doğru gerginlikte kurulması ve düzenli kontrolü, etkinliği için şarttır.",
                    "Güvenlik ağı, yükseltici platformun ulaşamadığı büyük açıklıklı alanlarda (örneğin çelik konstrüksiyon montajı sırasında) platformla birlikte tamamlayıcı olarak kullanılır.",
                ],
            },
        ],
        sss: [
            { soru: "Korkuluk mu platform mu daha güvenli?", cevap: "İkisi de doğru uygulandığında toplu korumadır; seçim işin süresine ve geometrisine bağlıdır. Kısa süreli, hareketli işlerde platform; uzun süreli sabit kenarlarda korkuluk daha pratiktir." },
            { soru: "Güvenlik ağı periyodik kontrole tabi mi?", cevap: "Evet, ağların üretici talimatına göre düzenli görsel ve gerekirse yük kontrolü yapılmalı, hasarlı ağlar derhâl değiştirilmelidir." },
        ],
    },
    {
        slug: "sarkma-travmasi-suspension-trauma-acil-mudahale",
        etiket: "Saha Uygulaması",
        baslik: "Sarkma Travması (Suspension Trauma): Düşme Sonrası Gözden Kaçan Risk",
        aciklama:
            "Emniyet kemeriyle düşmeyi durdurmak yalnız ilk adımdır — sarkma travması, kurtarma gecikirse hayati risk oluşturabilir. Belirtileri ve acil müdahale ilkeleri.",
        giris:
            "Bir çalışan emniyet kemeriyle düşmesini durdursa bile tehlike geçmiş sayılmaz. Hareketsiz asılı kalma durumu, dakikalar içinde ciddi bir tıbbi risk olan sarkma travmasına yol açabilir. Bu rehber, riskin mekanizmasını ve acil müdahale ilkelerini anlatır.",
        bolumler: [
            {
                baslik: "Sarkma travması nasıl oluşur?",
                paragraflar: [
                    "Kemerle asılı kalan bir kişide bacak kayışları kan dolaşımını kısıtlar; hareketsizlik nedeniyle kan bacaklarda birikir ve kalbe geri dönüşü azalır. Bu durum dakikalar içinde bilinç kaybına ve tedavisiz bırakılırsa ölüme yol açabilir.",
                    "Risk, düşmenin kendisinden değil, düşme sonrası kurtarmanın gecikmesinden kaynaklanır — bu yüzden 'kemer düşmeyi durdurdu, tehlike geçti' yaklaşımı yanlıştır.",
                ],
            },
            {
                baslik: "Kurtarma planının önemi",
                paragraflar: [
                    "Mevzuat ve iyi uygulama, her yüksekte çalışma işi için önceden planlanmış bir kurtarma prosedürü ister: asılı kalan kişiye kaç dakikada ulaşılabileceği, hangi ekipmanla (kurtarma makarası, yükseltici platform, itfaiye) indirileceği belirlenmelidir.",
                    "112'nin gelmesini beklemek yeterli bir plan değildir — özellikle şehir dışı veya trafik yoğun bölgelerde müdahale süresi kritik dakikaları aşabilir. Sahada bulunan yükseltici platform, çoğu durumda en hızlı kurtarma aracıdır.",
                ],
            },
            {
                baslik: "İlk müdahalede dikkat edilecekler",
                paragraflar: [
                    "İndirilen kişi hemen düz yatırılmamalıdır: uzun süre asılı kalan birinde ani yatay pozisyon, biriken kanın aniden kalbe dönmesine ve ciddi komplikasyona yol açabilir (reperfüzyon sendromu). Kademeli pozisyon değişikliği ve tıbbi ekibin yönlendirmesi esastır.",
                    "Bu nedenle yüksekte çalışan ekiplerde en az bir kişinin temel ilk yardım ve özellikle asılı kalma sonrası müdahale konusunda bilgilendirilmiş olması önerilir.",
                ],
            },
        ],
        sss: [
            { soru: "Sarkma travması ne kadar sürede kritik hâle gelir?", cevap: "Literatürde 5-30 dakika arasında belirtilerin başlayabileceği belirtilir; kişiye ve koşullara göre değişir, bu yüzden kurtarma süresi ne kadar kısaltılırsa risk o kadar azalır." },
            { soru: "Her şantiyede kurtarma ekipmanı bulunmalı mı?", cevap: "Yüksekte çalışma riski taşıyan her sahada, düşme durumunda hızlı müdahaleyi sağlayacak bir yöntem (platform, kurtarma makarası, eğitimli ekip) önceden planlanmış olmalıdır." },
        ],
    },
];

export function rehberBul(slug: string): Rehber | undefined {
    return rehberler.find((r) => r.slug === slug);
}
