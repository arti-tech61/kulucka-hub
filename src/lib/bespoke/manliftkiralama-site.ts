// ═══════════════════════════════════════════════════════════════════════════
// manliftkiralama.site — ELLE YAZILMIŞ İÇERİK
//
// Profil: SAMSUN liman ve gıda sanayinde manlift kiralama.
// Açı: Karadeniz liman kimliği (dökme yük, tahıl-gübre elleçleme), fındık
// işleme ve süt-et tesislerinin gıda hijyeni disiplini, Tekkeköy sanayi
// dokusu, Çarşamba ovasının sera-tarım üretimi ve Karadeniz ikliminin
// belirleyici unsuru olan YÜKSEK YAĞIŞ + NEM + ani hava değişimi.
//
// ⚠️ Bu dosyanın iklim teması NEM ve YAĞMUR PENCERESİDİR. Sıcak iklim
// anlatısı bu dosyaya girmez. Sayfalar arası kalıp tekrarı yasaktır.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir, kamuya açık il bilgisi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALAMA_SITE: Record<string, BespokeIcerik> = {
    "bolge:samsun-liman-bolgesi": {
        h1: "Samsun Liman Bölgesinde Manlift Kiralama",
        giris:
            "Samsun'un şehir kimliği denizle kurulmuştur: Karadeniz'in orta kıyısındaki bu şehir, ardındaki geniş tarım havzasının ürününü ve bölgenin girdi ihtiyacını yıllardır liman üzerinden taşır. Liman çevresinde çalışan bir yükseğe erişim ekibi için bu, sıradan bir sanayi sahasından farklı bir düzen anlamına gelir: burada tahıl silolarının dış kabuğu, dökme yük konveyör hatlarının taşıyıcı ayakları, ambar ve antrepoların çatı altı aydınlatması, gümrüklü alan aydınlatma direkleri ve deniz tarafına bakan çelik yüzeylerin boya-koruma işleri iç içe geçer. Tuzlu havanın metal üzerindeki yavaş ama sürekli etkisi, bakım periyodunu iç bölge sahalarına göre sıkılaştırır. Üstüne Karadeniz'in bilinen yağış rejimi biner: gökyüzü gün içinde birkaç kez fikir değiştirir, bu yüzden liman işlerinde takvim kadar gün içi pencere yönetimi de plana girer. Biz eklemli ve teleskopik bomlu makineleri bu iki gerçeğe göre konumlandırırız — korozyona açık noktalara hızlı erişim, yağmur açılınca kaybedilecek zamanı en aza indirecek hazırlık.",
        maddeler: [
            {
                baslik: "Silo ve dökme yük yapılarının dış yüzeyi",
                metin:
                    "Tahıl ve dökme ürün depolanan yüksek gövdeli yapılar, liman sahasının en zorlu erişim kalemidir: gövde dairesel, çevresi dar, üst kotu yüksektir. Kaynak dikişi kontrolü, dış boya yenileme, seviye sensörü kablolaması ve merdiven-korkuluk onarımı gibi işler eklemli bomun yanal uzanımıyla yapılır; makine gövdeyi çevreleyerek dilim dilim ilerler. Silo çevresinde toz birikimi olduğu için sepet çıkışı öncesi yüzey ve zemin kontrolü ayrı bir adımdır.",
            },
            {
                baslik: "Konveyör ve elleçleme hatlarında yükseltilmiş bakım",
                metin:
                    "Rıhtımdan ambara uzanan taşıma hatları, taşıyıcı ayaklar üzerinde ilerler ve bakımı çoğunlukla yerden erişilemeyecek kotta kalır. Kayış hizası, tambur yatağı yağlama, sıyırıcı değişimi ve muhafaza saclarının sabitlemesi sepetten yapıldığında hem iskele kurma süresi ortadan kalkar hem hattın duruş süresi kısalır. Elleçleme sürerken çalışılacaksa hattın hangi diliminin durdurulacağı, operasyon şefiyle vardiya öncesi kararlaştırılır.",
            },
            {
                baslik: "Tuzlu hava ve korozyon takibi",
                metin:
                    "Deniz kıyısındaki çelik konstrüksiyonda korozyon, gözle görülür pas lekesinden çok önce başlar; bağlantı cıvatalarının dip kısmı, kaynak ağzı ve sacın alt kıvrımı ilk yorulan yerlerdir. Yıllık koruma turunda bu noktalar sepetten yakın mesafeden incelenir, temizlenir ve gerekiyorsa nokta boya ile kapatılır. Bu turun kıyı sahalarında iç bölgeye göre daha sık tekrarlanması gerektiğini, sahada gördüğümüz yüzey kayıplarına bakarak söyleyebiliriz.",
            },
            {
                baslik: "Aydınlatma direkleri ve saha armatürleri",
                metin:
                    "Yükleme sahalarının gece operasyonu, yüksek direklere yerleşmiş projektörlere bağlıdır. Bir armatür arızası saha kapasitesini doğrudan düşürdüğü için bu işler genellikle acil sınıfına girer. Teleskopik makine direk dibine yanaşır, sepet armatür seviyesine çıkar ve değişim tek seferde biter. Aynı çıkışta komşu armatürlerin lens kirliliği ve kablo rekor sızdırmazlığı da kontrol edilirse, ikinci bir sefer gerekmez.",
            },
            {
                baslik: "Ambar ve antrepo çatı altı işleri",
                metin:
                    "Kapalı depolama yapılarında çatı altı aydınlatma, havalandırma fanı ve yangın algılama başlıkları düzenli bakım ister. Kapalı hacimde egzoz gazı sorun yarattığı için burada akülü sınıf tercih edilir; zemin beton olduğundan iz bırakmayan lastik seçeneği ürünün bulunduğu alanlarda öne çıkar. Dolu ambarlarda makinenin geçeceği koridor genişliği, teslimattan önce ölçüyle netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Liman sahasında iş kalemi ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, Samsun kıyı hattındaki tesislerde en sık üstlendiğimiz kalemleri, tercih edilen makine sınıfını ve hava koşulunun işe etkisini bir arada gösterir.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Makine sınıfı", "Hava duyarlılığı", "Saha notu"],
                    satirlar: [
                        ["Silo gövde boyası", "Eklemli 20-28 m", "Yüksek", "Nem oranı kuruma süresini uzatır"],
                        ["Konveyör hattı bakımı", "Eklemli 16-22 m", "Orta", "Hat duruşu vardiya öncesi planlanır"],
                        ["Saha aydınlatma direği", "Teleskopik 20-30 m", "Orta", "Rüzgârda sepet yüksekliği sınırlanır"],
                        ["Ambar içi tavan işleri", "Akülü makaslı 10-14 m", "Yok", "Kapalı hacimde egzoz kabul edilmez"],
                        ["Korozyon nokta onarımı", "Eklemli 16-20 m", "Yüksek", "Yüzey kuru olmadan uygulama yapılmaz"],
                    ],
                },
            },
            {
                baslik: "Yağmur penceresi nasıl yönetilir",
                paragraflar: [
                    "Karadeniz kıyısında yağış yılın büyük bölümüne dağılmıştır; bu, dış işlerin durduğu anlamına gelmez, işin gün içinde parçalara bölünmesi anlamına gelir. Uygulamamız şudur: hava tahminine göre günün kuru sayılan aralığı önceden işaretlenir ve yüzey hazırlığı, malzeme çıkışı, sepet kurulumu gibi hazırlık adımları o aralık başlamadan bitirilir. Böylece gökyüzü açıldığında ekip doğrudan uygulamaya geçer, kısa pencere hazırlıkla harcanmaz.",
                    "Yağmur bastırdığında da makine boşta beklemez: iç taraftan yapılabilen kalemler, ölçüm ve fotoğraflı tespit, cıvata torku gibi ıslaklığa duyarlı olmayan işler o saatlere yazılır. Boya, mastik ve yalıtım gibi kuruma isteyen uygulamalarda ise kural nettir — yüzey kuru değilse başlanmaz, çünkü nemli zemine yapılan uygulama birkaç ay içinde kendini kabarma olarak geri gösterir.",
                ],
            },
            {
                baslik: "Kıyı sahasında rüzgâr ve güvenlik sınırı",
                paragraflar: [
                    "Deniz kenarı açık bir sahadır; aynı gün içinde iç bölgeye göre daha yüksek rüzgâr hızları görülebilir. Bomlu makinelerin sepet yüksekliği arttıkça rüzgâr etkisi katlanır, bu yüzden üretici kataloğundaki rüzgâr sınırı sahada tartışılmaz bir eşiktir. Sınır aşıldığında yapılan tek şey bomu toplayıp beklemektir; işi bitirme baskısı bu kararın önüne geçemez.",
                    "Rüzgâr sınırının altında kalınan durumlarda bile sepette taşınan geniş yüzeyli malzeme — sac, panel, levha — yelken etkisi yaratır. Bu nedenle geniş parçaların taşınmasını sakin saatlere planlar, gerekiyorsa malzemeyi vinçle ayrı taşıyıp sepeti yalnızca insan erişimi için kullanırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Liman sahasında çalışacak ekip için hangi izinler gerekir?",
                cevap:
                    "Gümrüklü ve kontrollü sahalarda giriş, saha işletmecisinin kendi kural setine bağlıdır: personel listesi, kimlik bildirimi, araç plaka kaydı ve çoğu zaman saha oryantasyonu istenir. Biz talebi aldığımızda operatör ve makine bilgilerini önceden iletir, evrak sürecini işin başlangıç tarihinden önce tamamlarız. Makinenin sahaya girişinde ayrıca ekipman belgeleri ve periyodik kontrol raporu sorulabilir; bu evraklar makineyle birlikte gelir. Sürecin ne kadar süreceği saha işletmecisine göre değiştiği için, planlamayı işin ilk gününe sıkıştırmak yerine birkaç gün önden başlatmanızı öneririz.",
            },
            {
                soru: "Silo gövdesinde boya yenilemesi için yılın hangi dönemi uygundur?",
                cevap:
                    "Belirleyici olan takvim ayı değil, yüzeyin kuru kalabildiği ve bağıl nemin uygulama sınırının altında seyrettiği aralıktır. Samsun kıyısında bu koşul yaz aylarında daha sık yakalanır, ancak yılın herhangi bir döneminde birkaç günlük kararlı hava da işe yeter. Uygulamadan önce yüzey nemi ölçülür; ölçüm sınırın üstündeyse boya atılmaz, çünkü nem altında kalan katman yapışmayı kaybeder. Planlamayı esnek yapmak en sağlıklısıdır: sabit bir gün yerine, birkaç günlük hareket alanı bırakılan bir program hem işi zamanında bitirir hem kalite tartışması yaratmaz.",
            },
            {
                soru: "Konveyör hattı çalışırken bakım yapılabilir mi?",
                cevap:
                    "Hattın hareketli parçasına yakın bir noktada çalışılacaksa hayır — o dilimin durdurulması ve enerjisinin kesilmesi gerekir. Ancak taşıyıcı ayakların boyası, muhafaza sacı sabitlemesi veya hattan yeterince uzaktaki aydınlatma gibi kalemler, operasyon sürerken güvenli mesafe ve bariyer düzeniyle yapılabilir. Kararı sahada tek başımıza vermeyiz: hangi bölümün durduğu, kilitleme-etiketleme uygulamasının kim tarafından yürütüldüğü ve yeniden devreye alma yetkisinin kimde olduğu, iş öncesi toplantıda yazılı olarak netleşir. Bu netlik olmadan sepet kaldırılmaz.",
            },
            {
                soru: "Deniz kenarındaki makinelerde ek bir bakım önlemi alıyor musunuz?",
                cevap:
                    "Evet. Kıyı sahasından dönen makinelerde tuz ve nem etkisini azaltmak için gövde yıkaması, hidrolik hortum bağlantılarının kontrolü ve elektrik panosu sızdırmazlık kontrolü rutin dönüş bakımına eklenir. Uzun süreli kiralamalarda bu kontroller saha içinde periyodik olarak tekrarlanır. Bunun sizin açınızdan anlamı şudur: kıyıda haftalarca kalan bir makine, bakımsız bırakıldığında arıza olasılığını artırır ve iş programınızı riske atar. Sözleşmede periyodik kontrol takvimini baştan tanımlamak, ilerleyen haftalarda yaşanacak duruşları önler.",
            },
            {
                soru: "Aniden bastıran yağmurda kiralama süresi nasıl hesaplanır?",
                cevap:
                    "Bu, sözleşmenin baştan konuşulması gereken maddesidir ve bölgemizde en sık gündeme gelen konudur. Uygulamamız, gün içi kısa yağış kesintilerini normal iş akışının parçası saymak; tam gün çalışmayı imkânsız kılan koşullarda ise o günün nasıl değerlendirileceğini teklifte açıkça yazmaktır. Uzun süreli işlerde takvime hava payı eklenir ve toplam süre bu payla birlikte fiyatlanır. Belirsiz bırakılan bu madde, iş sonunda taraflar arasında en çok tartışma çıkaran kalemdir; biz bu yüzden teklif aşamasında netleştirmeyi tercih ederiz.",
            },
            {
                soru: "Antrepo içinde ürün varken çalışabilir misiniz?",
                cevap:
                    "Çalışılabilir, fakat düzen değişir. Dolu ambarda önce makinenin geçeceği koridor ve konumlanacağı alan boşaltılır ya da bariyerle ayrılır; ürünün üzerine düşebilecek malzeme için sepet altına toplama örtüsü serilir. Gıda ürünü depolanan alanlarda ayrıca temizlik ve bulaşma riski gündeme gelir: makine tekerleri sahaya girmeden temizlenir, yağ sızdırma kontrolü yapılır ve gerekirse çalışma alanının altı örtülür. Bu hazırlıklar birkaç saat ekler ama depo işletmesinin hijyen kayıtlarını koruduğu için gıda sektöründeki müşterilerimizde standart uygulamamızdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Samsun'un Karadeniz kıyısındaki liman kenti niteliği ve dökme yük-tahıl elleçlemesi kamuya açık bilgidir; makine eşleşmesi, yağmur penceresi düzeni ve saha uygulamaları firma pratiğidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "bolge:ilkadim": {
        h1: "İlkadım'da Manlift Kiralama ve Yükseğe Erişim",
        giris:
            "İlkadım, Samsun'un merkez ilçesidir ve şehrin ticari yoğunluğu büyük ölçüde burada toplanır. Sanayi tesisi yerine iş hanı, mağaza cephesi, otel, kamu binası, okul ve çok katlı konut dokusunun hâkim olduğu bir ilçede yükseğe erişim talebi de farklı bir dil konuşur: burada mesele fabrika çatısı değil, dar sokakta duran bir binanın ön cephesine kimseyi rahatsız etmeden ulaşabilmektir. Tabela ve giydirme yenileme, cam-alüminyum cephe temizliği, klima dış ünitesi montajı, dış boya ve yağmur oluğu bakımı, sokak aydınlatması ve mağaza vitrin üstü işler günlük programımızın büyük kısmını oluşturur. Merkez ilçe olmanın getirdiği ikinci gerçek trafiktir: yol kenarındaki bir cephede çalışmak, çoğu zaman işin kendisinden çok konumlanma ve emniyet düzeni gerektirir. Karadeniz'in ıslak havası da bu işlerin üzerine ayrı bir katman koyar — cephe yüzeyleri şehir içinde bile uzun süre kurumaz, bu yüzden uygulama zamanlaması sahada karar verilir.",
        maddeler: [
            {
                baslik: "Dar sokak ve yol kenarı konumlanma",
                metin:
                    "Merkez dokuda cephe önü çoğu zaman park alanı, kaldırım veya yaya akışıyla paylaşılır. Makine getirmeden önce konum fotoğrafı isteriz: kaldırım genişliği, üstteki elektrik hattı, park yasağı durumu ve varsa alt geçit-bodrum kapağı gibi zemin taşıma riskleri buradan görülür. Gerekirse çalışma saatini yoğunluğun düştüğü aralığa çekeriz; bu, hem işin hızını artırır hem çevreyle sorun çıkarmaz.",
            },
            {
                baslik: "Tabela, giydirme ve cephe kaplama",
                metin:
                    "Ticari cephede tabela değişimi, ışıklı harf bakımı ve kompozit giydirme onarımı en sık gelen taleplerdir. Bu işler kısa sürer ama doğru erişim olmadan uzar: eklemli bom, saçak altına ve balkon çıkıntılarının arkasına kırılarak ulaştığı için merdivenle bir günde bitmeyen iş birkaç saate iner. Işıklı tabelalarda elektrik kesimi ve yeniden devreye alma sorumluluğu, iş öncesi bina yönetimiyle netleştirilir.",
            },
            {
                baslik: "Nemli havada cephe temizliği ve boya",
                metin:
                    "Şehir merkezinde cam ve kompozit yüzeyler is, toz ve yağmur lekesiyle çabuk kirlenir. Temizlik işi neredeyse her hava koşulunda yapılabilir, boya ise yapılamaz: yüzeyin kuruma süresi bölgedeki nem oranıyla doğrudan bağlantılıdır ve nemli yüzeye atılan katman tutunmaz. Bu ayrımı müşterilerimize baştan söyleriz, çünkü aynı cephede iki işin takvimi aynı olmak zorunda değildir.",
            },
            {
                baslik: "Klima, uydu ve dış ünite montajları",
                metin:
                    "Çok katlı binalarda dış ünite montajı ve bakımı, balkon dışına sarkarak yapıldığında ciddi bir kaza kalemidir. Sepetten yapıldığında hem montaj konumu rahat ayarlanır hem askı braketinin duvara sağlam oturması gözle doğrulanabilir. Aynı çıkışta bakır hat kelepçeleri ve yoğuşma tahliyesi de kontrol edilir; yağışlı iklimde tahliye tıkanıklığı sık görülen bir arıza sebebidir.",
            },
            {
                baslik: "Kamu binaları ve okullarda program disiplini",
                metin:
                    "Merkez ilçedeki kamu yapıları ve okullarda çalışma, kullanım saatleri dışına planlanır. Okul bahçesinde makine hareketi ders saatinde kabul edilmez; kamu binalarında ise giriş-çıkış yoğunluğunun düştüğü saatler tercih edilir. Bu tür işlerde teklif verirken günün hangi diliminde çalışılacağını yazılı olarak belirtmek, sonradan yaşanan program çakışmalarını ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkez ilçede iş tipine göre makine ve süre",
                paragraflar: [
                    "İlkadım'da aldığımız taleplerin çoğu tek günlük veya yarım günlük işlerdir. Aşağıdaki tablo iş tipine göre tipik makine seçimini ve hangi hazırlığın kritik olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Tercih edilen makine", "Tipik süre", "Kritik hazırlık"],
                    satirlar: [
                        ["Tabela değişimi", "Eklemli 16-20 m", "Yarım gün", "Cephe önü park boşaltma"],
                        ["Cam cephe temizliği", "Teleskopik 18-24 m", "1-2 gün", "Yaya akışı için bariyer"],
                        ["Dış ünite montajı", "Eklemli 14-18 m", "Yarım gün", "Askı noktası ve kot ölçüsü"],
                        ["Dış boya rötuşu", "Eklemli 16-22 m", "Havaya bağlı", "Kuru yüzey teyidi"],
                        ["Oluk-iniş borusu bakımı", "Eklemli 14-20 m", "Yarım gün", "Çatı kenarı erişim açısı"],
                    ],
                },
            },
            {
                baslik: "Şehir içinde çalışırken çevre güvenliği",
                paragraflar: [
                    "Yaya trafiğinin yoğun olduğu bir caddede sepet kaldırmak, sanayi sahasındaki aynı işten daha fazla önlem ister. Standart düzenimiz, makine çevresinde koni ve şerit ile ayrılmış bir güvenlik alanı, düşme ihtimali olan malzeme için sepet içi bağlama ve gerektiğinde yaya yönlendirmesi yapan bir gözcüdür. Bu alan işin süresi boyunca dışarıdan kapalı kalır; kısa süreli iş bile olsa kaldırılmaz.",
                    "İkinci konu üst geçen hatlardır. Merkez dokuda cephe önünden geçen elektrik ve iletişim hatları sık görülür; bom hareketi planlanırken bu hatlara güvenli mesafe bırakılır ve gerekirse ilgili kuruluştan geçici önlem talep edilir. Hattın altından iş yapmak yerine makineyi farklı bir açıdan konumlandırmak çoğu zaman daha hızlı çözümdür.",
                ],
            },
            {
                baslik: "Bina yönetimiyle çalışma öncesi mutabakat",
                paragraflar: [
                    "Apartman ve iş hanı cephelerinde işi yaptıran taraf çoğu zaman tek bir daire sahibi olur, ancak çalışma bütün binayı ilgilendirir. Sepetin kat pencerelerinin önünden geçeceği, kısa süreli gürültü olacağı ve cephe önünün kapanacağı bilgisinin sakinlere önceden duyurulması, işin gününde yaşanan itirazları önler. Bina yönetiminden alınan basit bir yazılı onay, hem bizim hem müşterimizin işini kolaylaştırır.",
                    "Otopark ve giriş kapısı kullanımına da aynı gözle bakarız. Makinenin gireceği ve konumlanacağı yer bir gün önceden boşaltılmadığında, sahaya gelen ekip beklemek zorunda kalır ve bu süre kiralamaya yansır. Konum boşaltma sorumluluğunun kimde olduğunu teklifte yazmak, bu kaybı ortadan kaldıran en basit önlemdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Cadde üzerindeki dükkânımın tabelası için yolun kapanması gerekir mi?",
                cevap:
                    "Çoğu durumda yolun tamamının kapatılması gerekmez; kaldırım ve cephe önündeki bir şeridin geçici olarak boşaltılması yeterli olur. Belirleyici olan makinenin konumlanacağı yerin genişliği ve bomun açılacağı yöndür. Cephe önü park alanıysa, o alanın işin gününde boş olması gerekir. Trafik akışını doğrudan etkileyecek bir konumlanma zorunluysa, ilgili belediye biriminden izin alınması gündeme gelir ve bu süreç birkaç gün sürebilir. Konum fotoğrafını bize önceden gönderdiğinizde, hangi seçeneğin geçerli olacağını daha teklif aşamasında söyleyebiliriz.",
            },
            {
                soru: "Yağmurlu bir günde cephe temizliği yaptırmanın anlamı var mı?",
                cevap:
                    "Cam ve kompozit yüzeyde temizlik, kimyasal ve mekanik bir işlemdir; yüzeyin ıslak olması sonucu bozmaz, hatta bazı kir tiplerinde işi kolaylaştırır. Sorun temizlikte değil, yağış sonrası yüzeyde kalan su lekesindedir — bu yüzden son durulama ve kurulama adımı yağış duraklamasına denk getirilir. Yoğun yağış ve rüzgârın birlikte olduğu saatlerde ise güvenlik gerekçesiyle sepet kaldırılmaz. Kısacası hafif yağış işi durdurmaz, sağanak ve rüzgâr durdurur; kararı sahada operatör verir ve gerekçesini müşteriye açıklar.",
            },
            {
                soru: "Bina çok yüksek değil, iskele yerine makine kiralamak mantıklı mı?",
                cevap:
                    "İşin süresi bu sorunun cevabını belirler. İskele kurulum ve söküm maliyeti sabittir ve birkaç gün alır; kısa süreli işlerde bu maliyet toplamın büyük kısmını yer. Tabela, tek nokta onarımı, dış ünite montajı gibi yarım günlük kalemlerde platform açık ara ekonomiktir. Buna karşılık bütün cephenin uzun süre boyunca sürekli işgal edileceği kapsamlı yenilemelerde iskele hâlâ mantıklı olabilir. Merkez ilçede bir başka etken daha var: iskele cephe önünü haftalarca kapatır, platform ise iş bitince aynı gün sahadan çıkar. Yoğun caddede bu fark, komşuluk ilişkileri açısından da önemlidir.",
            },
            {
                soru: "Elektrik hattı cephemin hemen önünden geçiyor, çalışma yapılabilir mi?",
                cevap:
                    "Yapılabilir, ancak plan hattın konumuna göre kurulur. İlk adım hattın türünü ve cepheye olan mesafesini yerinde görmektir. Güvenli mesafe korunarak farklı bir açıdan konumlanmak mümkünse iş normal akışında yürür. Mesafe korunamıyorsa yapılacak şey riski göze almak değil, ilgili kuruluştan hattın geçici olarak enerjisiz bırakılmasını veya yalıtım önlemi alınmasını talep etmektir. Bu talep zaman aldığı için keşif aşamasında tespit edilmesi kritiktir — işin gününde fark edilen bir hat, o günü tamamen kaybettirir.",
            },
            {
                soru: "Makineyi kaç saatliğine kiralayabilirim, yarım gün mümkün mü?",
                cevap:
                    "Merkez ilçedeki işlerin doğası gereği yarım günlük kiralama sık kullandığımız bir seçenektir ve tabela, tek dış ünite, nokta onarımı gibi kalemler için mantıklıdır. Ancak süre hesabında yalnızca sepetteki çalışma süresi değil, makinenin sahaya gidiş-dönüşü ve konumlanma süresi de vardır; bu yüzden çok kısa işlerde de bir taban süre uygulanır. En verimli kullanım, aynı çıkışta birden fazla kalemi toplamaktır: tabela değişimiyle birlikte oluk kontrolü ve armatür bakımı da yaptırıldığında, aynı taban süre içinde üç iş birden biter.",
            },
            {
                soru: "Zemin parke taşı ya da kaldırım, makine hasar verir mi?",
                cevap:
                    "Bomlu makinelerin ağırlığı, özellikle denge ayakları üzerinden noktasal olarak zemine aktarılır ve parke ya da kaldırım kaplaması bu yükte oturabilir. Uygulamamız, ayak altına yük dağıtıcı plaka koymak ve gerekirse makineyi kaplamanın daha dayanıklı olduğu bir konuma almaktır. Altında bodrum, kanal veya menfez bulunan bir alan varsa oraya kesinlikle konumlanılmaz; bu yüzden çalışma yerinin altında ne olduğunu bilmek keşfin standart sorusudur. Bilgi verilmediğinde operatör muhafazakâr davranır ve daha uzak bir noktadan çalışmayı tercih eder, bu da bom sınıfını büyütebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İlkadım'ın Samsun'un merkez ve ticari yoğunluklu ilçesi olduğu kamuya açık bilgidir; konumlanma düzeni, süre ve hazırlık başlıkları firma pratiğidir. Marka, tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "bolge:atakum": {
        h1: "Atakum'da Manlift ve Platform Kiralama",
        giris:
            "Atakum, Samsun'un batı yönünde deniz kıyısı boyunca uzayan ve son yıllarda hızla yapılaşan ilçesidir. Buradaki yükseğe erişim ihtiyacı sanayiden değil, yeni yapı stokundan doğar: çok katlı konut siteleri, sahil bandındaki oteller ve kafeler, üniversite ve eğitim yapılarının çevresi, alışveriş birimleri ve peyzajı bakım isteyen ortak alanlar. İşin karakteri de buna göre değişir — burada tipik gün, bir sitenin dış cephe derz onarımı, çatı üstü su deposu bağlantısı, otopark aydınlatması ve ağaç budama gibi birbirinden farklı kalemlerin aynı yerleşke içinde arka arkaya yapılmasıyla geçer. Kıyıya bakan cepheler rüzgârın ve tuzlu havanın etkisini doğrudan alır; bu yüzden dış yüzeylerin yaşlanması iç kesimdeki benzer yapılara göre daha hızlı ilerler. Bakım aralığını buna göre kısaltmak, ileride daha büyük bir yenileme faturasıyla karşılaşmamanın en ucuz yoludur.",
        maddeler: [
            {
                baslik: "Site ortak alanlarında toplu bakım günü",
                metin:
                    "Çok bloklu yerleşkelerde her kalem için ayrı ayrı makine çağırmak hem pahalıdır hem yönetim açısından yorucudur. Bunun yerine yılda bir veya iki kez toplu bakım günü kurgularız: aynı makineyle bloklardaki dış aydınlatma, çatı kenarı oluk kontrolü, cephe derz gözlemi ve ağaç budaması sırayla yapılır. Yönetim için tek fatura, tek koordinasyon ve fotoğraflı tek rapor çıkar.",
            },
            {
                baslik: "Kıyıya bakan cephelerde hızlanan yaşlanma",
                metin:
                    "Deniz tarafına dönük yüzeylerde boya matlaşması, derz esnekliğinin kaybı ve metal aksamda yüzey pası, arka cephelere göre daha erken görünür. Bunun nedeni rüzgârın taşıdığı nemin ve tuzun yüzeyde sürekli bulunmasıdır. Bakım planı yaparken bütün cepheleri aynı torbaya koymak yerine deniz cephesini ayrı bir kalem olarak ele almak, hem bütçeyi hem işin sırasını doğru kurar.",
            },
            {
                baslik: "Otel ve konaklama yapılarında sezon dışı planlama",
                metin:
                    "Sahil bandındaki konaklama işletmelerinde cephe, tabela ve dış aydınlatma bakımı doluluk döneminde misafir rahatsızlığı yaratır. Bu tesislerde işleri sezon dışına toplamak yerleşik bir alışkanlıktır; bizim yaptığımız, o dar pencerede kalemleri sıraya dizip makineyi boş bekletmeyecek bir program çıkarmaktır. Sezon dışı dönemde hava koşulu daha değişken olduğu için programa esneme payı eklenir.",
            },
            {
                baslik: "Yükseklikte ağaç ve peyzaj bakımı",
                metin:
                    "Yerleşke içi ağaçların dal budaması, elektrik hattına yaklaşan dalların alınması ve fırtına sonrası kırık dal temizliği sepetten yapıldığında hem hızlı hem güvenlidir. Bu işlerde makine, ağacın altına değil dal kütlesinin yanına konumlanır; kesilen parçanın düşeceği alan önceden boşaltılır. Fırtınalı dönem sonrası bu talepler bölgemizde toplu hâlde gelir, bu yüzden erken haber vermek sıra beklememenizi sağlar.",
            },
            {
                baslik: "Yeni yapıda montaj ve ilk teslim işleri",
                metin:
                    "Yapımı yeni tamamlanan bloklarda kamera, anten, dış aydınlatma, tabela ve cephe aksesuar montajı bir arada gelir. Bu dönemde saha henüz düzenlenmemiş olabilir: gevşek dolgu zemin, açık kanal ve malzeme yığını makine hareketini kısıtlar. Teslimden önce makinenin geçeceği güzergâhın sıkıştırılmış ve boş olması, işin planlanan günde bitmesinin ön koşuludur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yerleşke bakımında kalem ve erişim tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, Atakum'daki site ve konaklama yerleşkelerinde bir bakım gününe sığdırdığımız tipik kalemleri ve her birinin erişim özelliğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Erişim özelliği", "Uygun makine", "Önerilen dönem"],
                    satirlar: [
                        ["Blok dış aydınlatma", "Nokta erişim, hızlı", "Eklemli 14-18 m", "Yıl boyu"],
                        ["Çatı kenarı oluk kontrolü", "Saçak altına kırılma gerekir", "Eklemli 16-22 m", "Sonbahar"],
                        ["Deniz cephesi derz gözlemi", "Cephe boyunca tarama", "Teleskopik 20-26 m", "Kuru dönem"],
                        ["Ağaç budama", "Yanal uzanım, düşme alanı", "Eklemli 16-20 m", "Kış sonu"],
                        ["Kamera ve anten montajı", "Çatı üstü nokta", "Eklemli 18-24 m", "Yıl boyu"],
                    ],
                },
            },
            {
                baslik: "Nem, yoğuşma ve dış yüzey kararları",
                paragraflar: [
                    "Bu kıyı şeridinde sabah saatlerinde yüzeylerin çiy ve yoğuşmayla ıslandığı sık görülür; gökyüzü açık olsa bile cephe kuru olmayabilir. Boya, silikon ve mastik uygulamalarında bu ayrım kritiktir çünkü uygulama yüzeyi ıslakken atılan katman görünürde tutar, birkaç mevsim sonra kenarından kalkar. Uygulamamız, dış yüzey işlerine sabahın erken saatinde değil, yüzeyin gerçekten kuruduğu saatte başlamaktır.",
                    "Aynı mantık tersine de işler: gün sonuna doğru nem yeniden yükseldiği için, kuruma süresi uzun olan uygulamaları akşama sarkıtmayız. Pratikte bu, günün orta bölümünün dış uygulamalar için ayrıldığı, kenar saatlerin ise söküm, hazırlık, ölçüm ve tespit işlerine yazıldığı bir düzen demektir.",
                ],
            },
            {
                baslik: "Site yönetimleriyle sözleşme düzeni",
                paragraflar: [
                    "Yerleşke bakımını tek seferlik iş olarak almak yerine yıllık plan hâline getirmenin belirgin bir avantajı vardır: kalemler önceden bilindiği için makine sınıfı bir kez doğru seçilir, çıkış sayısı azalır ve toplam maliyet düşer. Yönetimlerle çalışırken kalem listesini, hangi dönemde yapılacağını ve raporlama biçimini yazılı hâle getirmeyi tercih ederiz.",
                    "Fotoğraflı rapor bu düzenin en işe yarayan parçasıdır. Yönetim değişikliklerinin sık olduğu yerleşkelerde, hangi blokta ne zaman ne yapıldığının kaydı olmadığında aynı iş iki kez yaptırılabiliyor ya da yıllarca atlanabiliyor. Kayıt tutmak, sonraki yılın bütçesini gerçekçi kurmanın da tek yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sitemizin bütün blokları için tek seferde fiyat alabilir miyiz?",
                cevap:
                    "Alabilirsiniz ve bu genellikle en avantajlı yoldur. Blok sayısı, her blokta yapılacak kalemler ve makinenin bloklar arasında ne kadar kolay hareket edebileceği bilindiğinde, toplam süreyi tek programda çıkarır ve fiyatı buna göre veririz. Bloklar arası mesafenin kısa ve güzergâhın açık olduğu yerleşkelerde makine gün içinde birkaç bloğu bitirebilir; dar veya engelli güzergâhta ise her taşınma süre yer. Bu yüzden teklif öncesi yerleşke krokisi veya basit bir konum videosu istememizin nedeni, fiyatı tahmin üzerine değil gerçeğe göre kurmak içindir.",
            },
            {
                soru: "Deniz cephesindeki boya neden diğer cephelerden önce bozuluyor?",
                cevap:
                    "Çünkü o cephe rüzgârın taşıdığı nem yüküne ve tuz partiküllerine sürekli maruz kalır. Yüzeye yerleşen tuz nemi tutar, boyanın kılcal yapısına işler ve tutunmayı zamanla zayıflatır; buna rüzgârın taşıdığı ince aşındırıcı da eklenir. Sonuç, aynı binada bile cepheler arasında gözle görülür bir yaşlanma farkıdır. Pratik çözüm cepheleri ayrı planlamaktır: deniz cephesi daha sık gözden geçirilir ve nokta onarımla ilerlenir, arka cepheler daha uzun aralıkla ele alınır. Böylece bütün binayı aynı anda yenilemek gerekmez.",
            },
            {
                soru: "Ağaç budaması için hangi dönem uygundur?",
                cevap:
                    "Budamanın bitki sağlığı açısından uygun dönemi tür bazında değişir ve bu konuda peyzaj uzmanının görüşü esastır; bizim tarafımız erişim ve güvenliktir. Erişim açısından yaprak dökümünün ardından gelen dönem avantajlıdır: dal yapısı net görünür, kesim planı kolay kurulur ve düşen kütle daha az yer kaplar. Buna karşılık fırtına sonrası kırık ve asılı kalmış dallar dönem beklemez, ivedi müdahale ister. Elektrik hattına yaklaşmış dallarda ise iş, hat işletmecisiyle koordinasyon gerektirir ve kendi başımıza karar vermeyiz.",
            },
            {
                soru: "İnşaatı yeni biten binada makine sahaya girebilir mi?",
                cevap:
                    "Sorunun cevabı zeminde. Yeni tamamlanan sahalarda dolgu genellikle henüz yeterince sıkıştırılmamış olur; bomlu bir makinenin denge ayakları bu zemine oturduğunda batma ve devrilme riski doğar. Ayrıca kapatılmamış kanal, rögar ve açık temel boşlukları güzergâh üzerinde bulunabilir. Uygulamamız, teslimattan önce güzergâh ve konumlanma alanının fotoğrafını istemek, gerekiyorsa yük dağıtıcı plakalarla çalışmaktır. Zemin uygun değilse iş ertelenir — bu bir bahane değil, ekipmanın ve ekibin güvenliği için verilmiş bir karardır.",
            },
            {
                soru: "Otelimizde misafir varken çalışma yapabilir misiniz?",
                cevap:
                    "Yapılabilir ama kapsam daralır. Gürültülü kesim, taşlama ve koku yayan uygulamalar doluluk döneminde tercih edilmez; buna karşılık aydınlatma değişimi, kamera montajı, nokta onarım ve temizlik gibi kalemler misafir akışının düştüğü saatlerde yürütülebilir. Bu tür işlerde makinenin konumlanacağı alan misafir geçişinden ayrılır ve çalışma bittiğinde saha aynı gün toparlanır. Kapsamlı cephe işlerini ise sezon dışına planlamanızı öneririz; hem daha ekonomik olur hem tesis içi memnuniyet riski doğmaz.",
            },
            {
                soru: "Bakımı yıllık plana bağlarsak ne kazanırız?",
                cevap:
                    "Üç somut kazanç var. Birincisi maliyet: kalemler tek programda toplandığında makinenin sahaya çıkış sayısı azalır ve nakliye-konumlanma payı düşer. İkincisi doğru makine: yıl içindeki bütün kalemler önceden bilindiğinde en uygun sınıf bir kez seçilir, sahada yetersiz kalan bir makine yüzünden ikinci çıkış yaşanmaz. Üçüncüsü kayıt: fotoğraflı rapor birikimi, hangi kalemin ne zaman yapıldığını gösterdiği için gelecek yılın bütçesi tahminle değil geçmiş veriyle kurulur. Yönetimlerin sık değiştiği yerleşkelerde bu kayıt, kurumsal hafızanın kendisidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Atakum'un Samsun'un batısında yer alan, sahil boyunca yapılaşmış ilçe niteliği kamuya açık bilgidir; bakım planı, yerleşke düzeni ve dönem önerileri firma pratiğidir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:tekkekoy-osb": {
        h1: "Tekkeköy OSB'de Sanayi Tesisleri İçin Manlift Kiralama",
        giris:
            "Tekkeköy, Samsun'un sanayi ağırlığını taşıyan ilçesidir; şehrin doğusunda, kıyıya ve ana ulaşım aksına yakın konumu sayesinde üretim tesislerinin yoğunlaştığı bir kuşak burada oluşmuştur. Bu kuşakta karşımıza çıkan yapı tipi bellidir: geniş açıklıklı çelik üretim holleri, yüksek tavanlı depolama alanları, dış sahada duran proses ekipmanları ve bunları birbirine bağlayan boru köprüleri, kablo tavaları, baca ve filtre üniteleri. Yükseğe erişim ihtiyacı bu yüzden hem tesis içinde hem dış sahada aynı gün doğabilir. Bölgede gıda işleme, metal ve makine imalatı gibi farklı kollar bir arada bulunduğundan tek bir standart yaklaşım işlemez — hijyen disiplini olan bir üretim hattındaki tavan işiyle, dış sahadaki bir çelik konstrüksiyon bakımı bambaşka hazırlık ister. Karadeniz ikliminin ıslak karakteri ise bütün dış kalemlerin üstünde durur: yağış yılın geniş bir bölümüne yayıldığı için dış işler kuru pencerelere göre sıralanır, iç işler ise havadan bağımsız olarak programın omurgasını oluşturur.",
        maddeler: [
            {
                baslik: "Üretim holü tavanında bakım ve montaj",
                metin:
                    "Geniş açıklıklı hollerde aydınlatma armatürleri, havalandırma kanalları, yangın algılama hattı ve monoray kirişleri düzenli erişim gerektirir. Kapalı hacimde egzoz gazı üretmeyen akülü sınıf zorunludur; makinenin duracağı yerin altında kanal kapağı veya kot farkı olup olmadığı önceden bakılır. Üretim sürerken çalışılacaksa sepetin altındaki bant veya tezgâh bölümü boşaltılır ve düşme koruması serilir.",
            },
            {
                baslik: "Gıda üretim alanlarında hijyen kısıtı",
                metin:
                    "Samsun sanayisinde gıda işleme hatları önemli bir yer tutar ve bu hatlarda erişim ekipmanı, üretim ortamına giren bir unsur sayılır. Makine sahaya alınmadan tekerlekleri temizlenir, hidrolik sızdırma kontrolü yapılır ve çalışma alanının altı örtülür. Bazı tesislerde üretim durdurulmadan çalışmaya izin verilmez; bu durumda iş, temizlik ve dezenfeksiyon programına bitişik saatlere yerleştirilir.",
            },
            {
                baslik: "Boru köprüleri ve dış saha çelik yapıları",
                metin:
                    "Tesisler arası hat taşıyan köprüler, destek ayakları ve platform korkulukları dış havanın etkisine sürekli açıktır. Boya yenileme, cıvata sıkma, izolasyon kaplaması ve destek onarımı için eklemli bom, ayaklar arasına girip yanal uzanımla çalışır. Bu kalemlerde en sık yaptığımız hata düzeltmesi, işi tek noktaya odaklamak yerine hat boyunca tarayarak benzer sorunları aynı çıkışta toplamaktır.",
            },
            {
                baslik: "Baca, filtre ve çatı üstü üniteler",
                metin:
                    "Filtre gövdeleri, baca hatları ve çatıya oturan mekanik üniteler yüksek kotta ve çoğu zaman merdivenle erişimi yetersiz noktalardadır. Buradaki işler kısa sürebilir ama makine sınıfı büyür; çünkü hem yükseklik hem yanal uzanım aynı anda gerekir. Bu tür taleplerde çatı kotu ve ünitenin çatı kenarına uzaklığı bilgisi, doğru makinenin ilk seferde gelmesini sağlayan iki veridir.",
            },
            {
                baslik: "Duruş dönemlerinin verimli kullanılması",
                metin:
                    "Üretim hatlarının planlı duruşa girdiği dönemler, yükseğe erişim işleri için en verimli penceredir. Duruş öncesinde tesisle birlikte bir kalem listesi çıkarır, makinenin hangi bölümde hangi sırayla çalışacağını gün gün planlarız. Bu hazırlık yapılmadığında duruşun ilk günü koordinasyonla geçer ve kısa pencere daralır; liste hazırsa aynı sürede belirgin biçimde fazla iş biter.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sanayi tesisinde alan tipine göre makine seçimi",
                paragraflar: [
                    "Tekkeköy'deki tesislerde aynı gün içinde farklı alan tiplerinde çalışmak sık karşılaşılan bir durumdur. Aşağıdaki tablo, alan tipine göre hangi sınıfın öne çıktığını ve hangi kısıtın belirleyici olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Belirleyici kısıt", "Uygun sınıf", "Hazırlık"],
                    satirlar: [
                        ["Üretim holü içi", "Egzoz yasağı, düz zemin", "Akülü makaslı 10-16 m", "Alt bölüm boşaltma"],
                        ["Gıda hattı üzeri", "Hijyen ve bulaşma riski", "Akülü, örtülü çalışma", "Temizlik programına bitişik"],
                        ["Dış saha boru köprüsü", "Yanal uzanım", "Eklemli 18-26 m", "Ayak arası konumlanma"],
                        ["Baca ve filtre gövdesi", "Yükseklik + uzanım", "Eklemli 26 m üzeri", "Çatı kotu ölçüsü"],
                        ["Depo tavanı", "Koridor genişliği", "Akülü makaslı 12-16 m", "Raf arası geçiş kontrolü"],
                    ],
                },
            },
            {
                baslik: "Islak zemin ve dış saha manevrası",
                paragraflar: [
                    "Yağışın sık olduğu bir bölgede tesis dış sahası yılın büyük bölümünde ıslaktır. Beton kaplı alanlarda bu bir sorun değildir; asıl dikkat gereken yer, kaplamasız veya stabilize alanlarda oluşan yumuşama ve tekerlek izidir. Arazi tipi bomlu makineler bu koşulda çalışabilir, ancak denge ayaklarının oturacağı zeminin taşıma gücü ayrı bir konudur ve plaka kullanımı çoğu zaman zorunlu hâle gelir.",
                    "İkinci konu görüştür. Yoğun yağış ve sisli havada sepetten yer sinyalcisiyle görsel iletişim zayıflar; bu durumlarda telsizle sesli haberleşme zorunlu tutulur ve manevra hızı düşürülür. Sahada acele etmenin bedeli, ıslak koşulda başka her yerdekinden yüksektir.",
                ],
            },
            {
                baslik: "Tesis içi iş izni ve koordinasyon",
                paragraflar: [
                    "Organize sanayi bölgesindeki üretim tesislerinde çalışma, çoğunlukla yazılı iş izni sistemine bağlıdır: yüksekte çalışma izni, gerekiyorsa sıcak iş izni ve enerji kesme prosedürü. Bu belgeler formalite değildir; sepetin altındaki hattın enerjisiz olduğunu, hangi bölümün durduğunu ve yeniden devreye alma yetkisinin kimde olduğunu tanımlar. Belge tamamlanmadan sepet kaldırmayız.",
                    "Koordinasyonun ikinci ayağı vardiya planıdır. Üretim akışının en yoğun olduğu saatte forklift trafiğinin ortasında konumlanmak, hem işi yavaşlatır hem risk yaratır. Vardiya sorumlusuyla önceden konuşularak seçilen bir saat aralığı, çoğu zaman işi bir gün kısaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim durmadan tesis tavanında çalışma yapılabilir mi?",
                cevap:
                    "Bölgeye ve hattın türüne bağlı olarak yapılabilir. Yöntem, çalışılacak alanın altındaki bölümü geçici olarak devre dışı bırakmak, o alanı bariyerle ayırmak ve düşebilecek malzeme için koruma sermektir. Böylece hattın geri kalanı çalışmaya devam eder. Buna karşılık gıda hatları, temiz oda benzeri kontrollü alanlar ve doğrudan ürün üstündeki bölümler bu esnekliğe kapalıdır; oralarda üretim duruşu beklenir. Karar tesisin kendi prosedürüne aittir ve biz keşif sırasında hangi bölümlerin hangi kategoriye girdiğini birlikte işaretleriz.",
            },
            {
                soru: "Gıda tesisimize giren makine için özel bir hazırlık gerekiyor mu?",
                cevap:
                    "Evet ve bunu standart uygulamamız hâline getirdik. Makine sahaya girmeden dış yüzeyi ve tekerlekleri temizlenir, hidrolik hattında sızdırma olup olmadığı kontrol edilir ve çalışılacak alanın altına koruyucu örtü serilir. Talep edilirse gıda alanlarına uygun yağ kullanan makine tercih edilir. Ayrıca operatörün kişisel donanımı ve giriş kuralları tesisin hijyen prosedürüne uyacak biçimde düzenlenir. Bu hazırlıkların hepsi işin başlangıcına birkaç saat ekler, ancak tesisin denetim kayıtlarını koruduğu için gıda müşterilerimiz açısından tartışılmaz bir gerekliliktir.",
            },
            {
                soru: "Planlı duruş dönemi için ne kadar önceden rezervasyon yapmalıyız?",
                cevap:
                    "Mümkün olan en erken zamanda. Duruş dönemleri bölgedeki tesislerde benzer takvimlere denk geldiği için makine talebi o haftalarda yoğunlaşır; geç kalan talepte istenen sınıf bulunamayabilir. Erken rezervasyonun ikinci faydası hazırlıktır: kalem listesi önceden çıkarıldığında hangi gün hangi bölümde çalışılacağı, hangi sınıfın gerektiği ve kaç makine gerekeceği net olur. Duruş penceresi kısa ve pahalıdır; o pencerede koordinasyonla kaybedilen bir gün, işin kendisinden daha maliyetli olabilir.",
            },
            {
                soru: "Yağmurlu havada dış sahadaki çelik bakımı erteleniyor mu?",
                cevap:
                    "Kalemin türüne göre değişir. Cıvata sıkma, ölçüm, gözle tespit ve mekanik onarım gibi işler ıslak yüzeyde de yürütülebilir; alınacak önlem sepet tabanında kaymayı azaltmak ve elektrikli el aletlerinde uygun koruma kullanmaktır. Buna karşılık pas temizliği sonrası uygulanan koruyucu kaplama ve boya, kuru yüzey ister. Bu yüzden dış saha programını iki listeye böleriz: hava koşulundan bağımsız kalemler ve kuru pencere bekleyen kalemler. Yağmur bastırdığında ekip birinci listeye geçer, hava açıldığında ikinciye döner; makine boşa beklemez.",
            },
            {
                soru: "Tesisimizde hem iç hem dış işler var, tek makine yeter mi?",
                cevap:
                    "Çoğu zaman yetmez, çünkü iki alan farklı sınıf ister. İç mekân akülü ve iz bırakmayan bir makine isterken, dış saha arazi tipi ve yüksek uzanımlı bir bom gerektirir; ikisini tek makineyle karşılamaya çalışmak ya iç mekânda kural ihlaline ya dış sahada yetersizliğe yol açar. Pratik çözüm, kalem listesini iki gruba ayırıp makineleri sıralı planlamaktır: önce iç işler bir makineyle bitirilir, ardından dış saha makinesi gelir. İş hacmi yeterliyse ikisini aynı anda sahada bulundurmak da toplam süreyi belirgin biçimde kısaltır.",
            },
            {
                soru: "Operatörlü kiralamada tesis prosedürlerine uyum nasıl sağlanıyor?",
                cevap:
                    "Operatör sahaya geldiğinde önce tesisin oryantasyonundan geçer; yüksekte çalışma izni, acil durum toplanma noktası, ilk yardım ve tahliye kuralları bu aşamada aktarılır. Operatörün ekipman yeterlilik belgesi ve makinenin periyodik kontrol raporu tesise sunulur. Çalışma sırasında iş izni belgesinde tanımlanan sınırların dışına çıkılmaz; kapsam değişikliği gerekirse iş durdurulur ve izin yenilenir. Bu düzen bürokratik görünse de bölgedeki kurumsal tesislerin tamamında beklenen standarttır ve uyumsuzluk, ekibin sahadan çıkarılması anlamına gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tekkeköy'ün Samsun'un sanayi yoğunluklu ilçesi olduğu kamuya açık bilgidir; alan tipi eşleşmesi, iş izni düzeni ve duruş planlaması firma pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:carsamba": {
        h1: "Çarşamba'da Tarım ve Sera Yapıları İçin Manlift Kiralama",
        giris:
            "Çarşamba, Yeşilırmak'ın denize ulaşmadan önce oluşturduğu verimli ovanın merkezindedir ve Samsun'un tarımsal üretim kimliğini en net taşıyan ilçesidir. Buradaki yükseğe erişim talebi, sanayi bölgelerinden farklı bir listeden gelir: sera yapılarının çatı ve taşıyıcı sistemi, ürün paketleme ve soğuk hava tesislerinin tavan altı donanımı, tarımsal depoların çatı kaplaması, sulama ve elektrik hatlarının direk üstü işleri, fındık ve diğer ürünlerin işlendiği tesislerdeki elleçleme donanımları. Ovanın düz topoğrafyası makine hareketini kolaylaştırır, ancak toprak zeminin yağış sonrası davranışı sahadaki asıl belirleyicidir. Bölgenin bol yağışlı iklimi burada iki yönlü çalışır: tarımsal üretimi mümkün kılan aynı yağış rejimi, dış işlerin takvimini de sıkıştırır. Bu yüzden Çarşamba'daki planlamamız hem üretim mevsimine hem yağış penceresine göre kurulur — hasat ve işleme yoğunluğunun dışında kalan aralıklar, bakım için en değerli zamandır.",
        maddeler: [
            {
                baslik: "Sera çatısı ve taşıyıcı sistem bakımı",
                metin:
                    "Örtü altı üretim yapılarında çatı örtüsünün gerginliği, taşıyıcı profillerin bağlantı noktaları, havalandırma kapaklarının mekanizması ve oluk hatları düzenli kontrol ister. Bu yapılarda örtü üzerine yük bindirilemeyeceği için erişimin sepetten yapılması zorunludur. Makine sera dışından konumlanır ve bom, açıklık boyunca uzanarak çalışır; iç hacimde çalışılacaksa geçiş genişliği ve zemin taşıma gücü önceden ölçülür.",
            },
            {
                baslik: "Paketleme ve soğuk hava tesislerinde tavan işleri",
                metin:
                    "Ürünün tasnif edildiği ve soğukta bekletildiği yapılarda tavan altında soğutucu üniteler, aydınlatma, kanal hattı ve izolasyon panelleri bulunur. Bu alanlarda hem hijyen hem sıcaklık kontrolü söz konusudur; kapı açık kalma süresini kısaltmak için iş, kalemler gruplanarak tek girişte tamamlanır. Akülü makine kullanımı zorunludur ve düşük sıcaklıkta akü performansının değişebileceği hesaba katılır.",
            },
            {
                baslik: "Ürün işleme tesislerinde elleçleme donanımı",
                metin:
                    "Ovanın ürününü işleyen tesislerde kovalı elevatörler, taşıma bantları, silo bağlantıları ve toz toplama hatları yüksek kotta yer alır. Sezon başlamadan yapılan bakım, sezon içinde yaşanacak duruşun önüne geçer. Eklemli bomla yapılan bu ön bakım turunda kayış hizası, bağlantı sıkılığı, muhafaza bütünlüğü ve erişim merdivenlerinin sağlamlığı aynı çıkışta gözden geçirilir.",
            },
            {
                baslik: "Tarımsal depo çatılarında su yönetimi",
                metin:
                    "Ürün depolanan yapılarda çatıdan gelen su, doğrudan ürün kaybı demektir. Oluk temizliği, dere birleşim kontrolü, mahya ve kenar detaylarının sabitliği ile iniş borularının açıklığı, yağış yoğunluğunun arttığı döneme girmeden tamamlanmalıdır. Sepetten yapılan tur birkaç saat sürer; atlanan bir tıkanıklığın bedeli ise depodaki ürünün bir bölümüdür.",
            },
            {
                baslik: "Açık arazide direk ve hat işleri",
                metin:
                    "Sulama tesisatının elektrik beslemesi, saha aydınlatması ve tesis çevresindeki hatlar arazi tipi makine gerektirir. Toprak zeminde konumlanmada denge ayaklarının altına yük dağıtıcı plaka kullanılır; yağış sonrası yumuşamış zeminde iş ertelenebilir. Hat üzerinde çalışılacaksa enerji kesme ve yeniden devreye alma sorumluluğu, işletmeci kuruluşla önceden netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarımsal yapılarda dönem ve erişim planı",
                paragraflar: [
                    "Çarşamba'da işin zamanlaması üretim takvimine bağlıdır. Aşağıdaki tablo, yaygın yapı tiplerinde hangi kalemin hangi dönemde yapılmasının daha isabetli olduğunu ve erişimde neyin belirleyici olduğunu gösterir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Öncelikli kalem", "Uygun dönem", "Erişim belirleyicisi"],
                    satirlar: [
                        ["Sera", "Örtü ve taşıyıcı kontrolü", "Üretim arası", "Örtüye yük binmemesi"],
                        ["Soğuk hava tesisi", "Tavan ünite bakımı", "Boş dönem", "Kapı açık kalma süresi"],
                        ["Ürün işleme tesisi", "Elevatör ve bant turu", "Sezon öncesi", "Kot yüksekliği"],
                        ["Tarımsal depo", "Oluk ve dere temizliği", "Yağış artmadan", "Saçak erişim açısı"],
                        ["Açık arazi hattı", "Direk üstü işler", "Kuru zemin", "Zemin taşıma gücü"],
                    ],
                },
            },
            {
                baslik: "Ova zemininin yağış sonrası davranışı",
                paragraflar: [
                    "Düz ve verimli bir ova toprağı, tarım için avantaj olan aynı özellikleri makine hareketi için dezavantaja çevirir: su tutan yapı, yağıştan sonra uzun süre yumuşak kalır. Bu koşulda bomlu makinenin denge ayakları zemine gömülür ve makine dengesini kaybedebilir. Uygulamamız, zeminin durumunu teslimat gününden önce teyit etmek, gerekiyorsa plaka veya geçici platform kullanmak, uygun değilse tarihi ötelemektir.",
                    "Bir başka pratik önlem güzergâh seçimidir. Tesisin beton kaplı alanı varsa makine oradan konumlanacak şekilde plan kurulur ve gereken erişim, uzanım yeteneği yüksek bir bomla sağlanır. Böylece makinenin yumuşak zemine hiç girmesi gerekmez; bu, biraz daha büyük sınıf makine kiralamak anlamına gelse bile toplamda daha güvenli ve daha hızlı sonuç verir.",
                ],
            },
            {
                baslik: "Sezon yoğunluğu ve bakım penceresi",
                paragraflar: [
                    "Tarımsal işletmelerde yılın belirli dönemleri tamamen üretime ayrılır; o dönemde tesisi durdurup bakım yapmak neredeyse imkânsızdır. Bu yüzden Çarşamba'daki müşterilerimizle çalışma düzenimiz, yoğun dönemi baştan tanımlayıp bakım kalemlerini ondan önceki ve sonraki aralıklara yerleştirmek üzerine kuruludur. Sezon öncesi tur arıza önleyicidir, sezon sonrası tur ise yıpranmayı tespit eder.",
                    "Sezon içinde ortaya çıkan acil taleplerde ise beklenti gerçekçi tutulmalıdır: bölgedeki bütün tesisler aynı dönemde yoğunlaştığı için makine talebi de o haftalarda tepe yapar. Önceden yapılan rezervasyon, arıza anında makine bulunamama riskini ortadan kaldıran tek yöntemdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sera çatısına çıkmadan bakım yapmak mümkün mü?",
                cevap:
                    "Yalnızca mümkün değil, doğru yöntem budur. Örtü altı yapıların çatı örtüsü insan yükünü taşımak için tasarlanmamıştır; üzerine çıkmak hem örtüyü hem çalışanı riske atar. Sepetten yapılan erişimde makine yapının dışında veya iç koridorda konumlanır, bom hedef noktaya uzanır ve iş örtüye hiç yük binmeden tamamlanır. Bu yöntem özellikle havalandırma kapağı mekanizması, oluk temizliği ve profil bağlantısı gibi noktasal işlerde çok verimlidir. Yapının açıklık genişliği ve yüksekliği bize iletildiğinde, hangi uzanım sınıfının gerekeceğini önceden söyleyebiliriz.",
            },
            {
                soru: "Soğuk hava deposunda çalışırken sıcaklık makineyi etkiler mi?",
                cevap:
                    "Etkileyebilir. Düşük sıcaklıkta akü kapasitesi normal koşullara göre daha hızlı düşer ve hidrolik yağın akışkanlığı değişir; bu, uzun süreli çalışmalarda planlanandan erken şarj ihtiyacı anlamına gelebilir. Uygulamamız, depo içinde geçirilecek süreyi baştan tahmin edip makineyi tam şarjla göndermek ve kalemleri gruplayarak kapının açık kalma süresini kısaltmaktır. Çok uzun süreli işlerde makinenin ara ara ılık bölüme çıkarılması planlanır. Bu detayları teklif aşamasında konuşmak, işin ortasında yaşanacak duruşu engeller.",
            },
            {
                soru: "Depo çatısının oluk temizliğini ne sıklıkla yaptırmalıyız?",
                cevap:
                    "Bölgenin yağış rejimi ve çevredeki ağaç yoğunluğu bu sıklığı belirler. Ova ortasında, çevresi açık bir depoda yılda bir kapsamlı tur çoğu zaman yeterlidir; ağaçlık alana yakın veya toz yükü fazla bir tesiste yılda iki tur gerekebilir. Zamanlama açısından kritik olan, yağışın arttığı döneme girmeden turu tamamlamış olmaktır. Temizlik sırasında yalnızca birikinti alınmaz; dere birleşimlerinin sızdırmazlığı, iniş borusu ağızlarının açıklığı ve saçak sabitlemesi de kontrol edilir. Depoda ürün varken çatıdan gelen bir sızıntının maliyeti, bu turun defalarca üzerindedir.",
            },
            {
                soru: "Tesisimiz sezona giriyor, bakım turunu ne zaman yaptırmalıyız?",
                cevap:
                    "İdeal zaman, sezon başlangıcından birkaç hafta önceki dönemdir. Bunun nedeni pratik: turda tespit edilen bir eksiğin giderilmesi için yedek parça temini veya ek bir çalışma günü gerekebilir ve bu zamanın sezon başlamadan bulunması şarttır. Sezonun ilk günü yapılan bakım, arıza çıktığında düzeltme fırsatı bırakmaz. Turda elevatör ve bant hatları, muhafazalar, erişim merdivenleri ve yüksek kottaki bağlantılar birlikte gözden geçirilir; çıkan liste önceliklendirilerek size verilir. Böylece sezon, bilinen ve kapatılmış bir eksik listesiyle başlar.",
            },
            {
                soru: "Yağmurdan sonra sahamız çamurlaşıyor, makine yine de gelebilir mi?",
                cevap:
                    "Değerlendirmeyi teslimattan önce yapmak gerekir. Ova toprağı yağış sonrası uzun süre yumuşak kalabilir ve bu koşulda bomlu bir makinenin denge ayakları zemine gömülür; devrilme riski buradan doğar. Üç seçeneğimiz vardır: yük dağıtıcı plakalarla çalışmak, makineyi tesisin beton kaplı bir alanına konumlandırıp daha uzun uzanımlı bir bomla hedefe ulaşmak, ya da tarihi kuru bir güne ötelemek. Hangisinin geçerli olacağını sahadan gönderilen fotoğrafla büyük ölçüde önceden kestirebiliriz. Emin olunamayan durumlarda operatör sahada karar verir ve zorlamayız.",
            },
            {
                soru: "Küçük bir işletmeyiz, tek kalem için makine kiralamak pahalı olmuyor mu?",
                cevap:
                    "Tek kalem için ayrı çıkış yaptırmak gerçekten verimsizdir, çünkü nakliye ve konumlanma payı işin kendisinden büyük olur. İki pratik çözüm öneriyoruz. Birincisi kalem biriktirmek: oluk kontrolü, aydınlatma değişimi, çatı sabitleme ve elevatör bakımı gibi işleri tek güne toplamak, aynı taban maliyet içinde birkaç işi bitirir. İkincisi komşu işletmelerle aynı güne denk getirmek: makine bölgeye zaten geldiğinde, yakın konumdaki ikinci ve üçüncü iş için nakliye payı bölünür. Bölgemizdeki tarımsal işletmelerle bu düzeni sıkça kuruyoruz ve her iki taraf için de maliyet gözle görülür biçimde düşüyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çarşamba'nın Yeşilırmak'ın oluşturduğu verimli ovada yer alan tarımsal üretim ilçesi olduğu kamuya açık coğrafi bilgidir; dönem planı, zemin uygulamaları ve bakım turu düzeni firma pratiğidir. Tesis adı, ürün miktarı ve rakam kullanılmamıştır.",
    },
    "bolge:bafra": {
        h1: "Bafra OSB ve Ova Gıda Tesislerinde Manlift Kiralama",
        giris: "Bafra için yüksek erişim planı, uygulama belgesinde doğrulanan OSB ve ova gıda sanayisi ekseninde sıfırdan kurulmuştur; başka bir sitenin ilçe şablonu kaynak veya referans alınmamıştır. Belirli fabrika, ürün miktarı, hat kapasitesi, bina ölçüsü ya da işletme adı hakkında iddia kurulmaz. Gerçek talepte kabul alanı, işleme hacmi, paketleme bölümü, soğuk veya kuru depo, sevk kapısı ve dış kabuk gibi çalışma yerleri tesis tarafından tanımlanır. Armatür, kablo taşıyıcı, havalandırma elemanı, sensör, kamera, kapı üstü donanım ve çatı altı bağlantılar fotoğraf ve ölçüyle doğrulanır. Gıda alanında hijyen zonu, üretim takvimi, yıkama düzeni ve ürün hareketi işletmenin prosedüründen alınır; sektör adı üzerinden uygunluk varsayılmaz. Düz iç aksta uygun akülü makaslı, sabit hat ya da ekipman arkasında yatay erişim gerektiğinde uygun eklemli sınıf değerlendirilebilir. Platform ürün, kasa veya palet taşımaz. Her hücre üretimden ayrılır, enerji ve proses tesis yetkilisince güvenli duruma getirilir, iş sonunda temiz kabul ile devredilir. Böylece ova ölçeğindeki sezon hareketi bakım kalitesini düşürmeden planlı erişim pencerelerine çevrilir.",
        maddeler: [
            { baslik: "Gıda akışını bakım hücrelerine bölmek", metin: "Keşifte hammadde kabulü, işleme, paketleme, depo ve sevk geçişleri birbirinden ayrılır. Hedef kotu kadar altında çalışan bant, makine, ürün ve personel hareketi de kaydedilir. İşletme hangi bölümün ne zaman boşaltılabileceğini ve temizlikten sonra ne zaman açılacağını belirler. Platform operatörü üretim izni vermez; kendisine teslim edilen sınır içinde çalışır. Komşu bölüm ancak fiziksel ayrım gerçekse devam eder. Sepet zarfıyla kesişen ürün veya araç hareketi durur. Aynı park noktasından tamamlanabilen işler gruplanır; hazırlanmamış hedef için hijyen bariyeri gereksiz yere açılmaz." },
            { baslik: "Hijyen kabulünü makine girişine bağlamak", metin: "Platformun tekeri, alt takımı, sepeti ve aletleri tesisin belirlediği giriş yöntemine göre kontrol edilir. Temiz ve kirli alan geçişleri ayrı kabul kapılarıdır. Akülü makine egzozsuz olabilir, fakat bu özellik tek başına her gıda hacmine giriş izni sağlamaz. Kullanılacak temizlik maddesi ve yöntemi işletme tarafından onaylanır; makinenin güvenli bileşenlerine zarar verecek rastgele yıkama yapılmaz. Sepete açık ürün, ambalaj veya proses malzemesi alınmaz. İş sırasında oluşan parça ve artıklar kontrollü toplanır. Hücre bitiminde temiz teslim tamamlanmadan üretim yeniden başlatılmaz." },
            { baslik: "Sezon öncesi yüksek hedefleri tek turda kapatmak", metin: "Yoğun işleme dönemi başlamadan önce armatür, kablo, menfez, kapı üstü donanım, kamera ve çatı altı bağlantılar hedef listesine alınır. Teknik personel, yedek parça ve erişim ekibi aynı pencereye hazırlanır. İlk turda yalnız arıza değil gevşek bağlantı, görünür hasar ve temizlik ihtiyacı da iş emrine göre gözlenir. Bulgu fotoğraf ve konumla kaydedilir; yetkisiz onarım yapılmaz. Kritik eksik için ayrı güvenli iş planı açılır. Bu yaklaşım sezon içinde ürün ve vardiya akışını tekrar tekrar kesmek yerine, doğrulanmış kalemleri kontrollü bir bakım dizisine dönüştürür." },
            { baslik: "İç depodan dış kabuğa yeni kabul ile çıkmak", metin: "İç hacimde kullanılan makinenin dış cephe, oluk veya kapı üstü işi için otomatik uygun olduğu kabul edilmez. Teker ve alt takım temizlenir; dış zeminin taşıma yeterliliği, eğimi, su birikimi, araç rotası, rüzgâr ve yağış yeniden kontrol edilir. İçeride uygun olan kompakt sınıf yumuşak ya da bozuk dış zeminde yetersiz kalabilir. Sepet sevkiyat aracının veya çalışanın üzerinde tutulmaz. Hava değişirse platform güvenle indirilir. Tek sevkiyat hedefiyle makinenin çalışma diyagramı ya da ortam sınırı genişletilmez; gerekirse dış iş farklı sınıfla ayrı pencereye alınır." },
            { baslik: "Ürün ve hattı kayıtlı teslim etmek", metin: "İş sonunda aletler, sökülen parçalar ve sarf malzemeleri sayılır. Üstte gevşek eleman bırakılmadığı teknik sorumlu tarafından gözlenir. Platform tamamen indirilir; zemin ve yakın yüzeyler tesisin hijyen yöntemine göre temizlenir. Sistem yalnız tesis yetkilisinin kontrolüyle devreye alınır. Açık iş konumu, güvenli durumu ve gereken takip adımıyla kaydedilir; bitmiş gösterilmez. Bariyer, temiz ve teknik kabul tamamlanınca kaldırılır. Makine bir sonraki zona geçecekse yeniden giriş kontrolü yapılır. Böylece bakım kaydı gıda izlenebilirliğiyle çelişmeden sorumlular arasında görünür kalır." },
        ],
        ekBolumler: [
            { baslik: "Bafra gıda tesisi erişim tablosu", paragraflar: ["Tablo belirli bir işletme envanteri değildir; gerçek iş listesini üretim, hijyen ve erişim koşuluna göre sınıflandırır."], tablo: { basliklar: ["Hedef", "Alt alan", "Yaklaşım", "Kapanış"], satirlar: [["Tavan armatürü", "Boş düz aks", "Uygun makaslı", "Temiz kabul"], ["Hat arkası tesisat", "Sabit engel", "Uygun eklemli", "Proses ayrılmış"], ["Paketleme üstü", "Hijyen zonu", "Kapalı pencere", "Alet sayımı"], ["Depo kapısı", "Araç rotası", "Dilimli çalışma", "Trafik açılışı"], ["Dış kabuk", "Hava ve zemin", "Ayrı kabul", "Teknik teslim"]] } },
            { baslik: "Keşif ve vardiya hazırlık dosyası", paragraflar: ["Dosyada hedef fotoğrafı, erişim kotu, yatay engel, kapı ve dönüş, zemin, üst açıklık, enerji tercihi ile üretim ve ürün hareketi bulunur. Hijyen zonu ve giriş yöntemi işletmeden alınır. Sepetteki personel, bağlı alet ve küçük bakım malzemesi toplamı üretici sınırına göre değerlendirilir.", "Taşıyıcının indirme alanı ile tesisteki çalışma rotası ayrı doğrulanır. Sezon nedeniyle istif veya akış değiştiyse eski fotoğrafla hareket edilmez. Platform sepeti kasa, ürün ya da palet taşımak için kullanılmaz. Malzeme uygun yöntemle hazırlanır, hareket ekipmanı hücreden çıktıktan sonra personel erişimi başlar." ] },
            { baslik: "Yağış sonrası dış saha kararı", paragraflar: ["Dış iş öncesinde yüzey yalnız görünüşle kabul edilmez; yumuşama, su birikimi, rögar ve eğim değerlendirilir. Makinenin zemin yükleri üretici verisiyle ele alınır. Uygunluk belirsizse farklı park yeri, farklı sınıf veya erteleme kararı verilir. Gelişigüzel malzeme sererek taşıma yeterliliği sağlandığı varsayılmaz.", "Karadeniz'de koşul çalışma sırasında değişebilir. Operatör yağış, rüzgâr, görüş ve kayganlığı izler; sınırlar makine talimatından alınır. Hava bozulursa sepet indirilir ve alan güvenli bırakılır. Üretim takvimi veya sevkiyat baskısı üretici sınırlarını değiştirmez." ] },
        ],
        sss: [
            { soru: "Bafra'da gıda tesisi için hangi manlift uygundur?", cevap: "Hedef kotu tek başına yeterli değildir. Yatay engel, park tabanı, kapı, dönüş, tavan açıklığı, üretim hareketi ve hijyen koşulu birlikte görülür. Boş düz iç aksta uygun akülü makaslı, sabit hat arkasındaki hedefte yeterli çalışma diyagramına sahip eklemli sınıf değerlendirilebilir. Dış zeminde yürüyüş ve hava uygunluğu ayrıca kontrol edilir. Akülü olması otomatik hijyen onayı sağlamaz. Fotoğraf ve ölçü sınırdaysa yerinde keşif yapılır; tek makineyi bütün zonlarda zorlamak yerine görevler ayrılır." },
            { soru: "Üretim devam ederken bakım yapılabilir mi?", cevap: "Çalışılan hücre ürün, personel, forklift ve proses hareketinden fiziksel olarak ayrılabiliyorsa komşu bölüm kontrollü biçimde sürebilir. Sepetin altındaki hat ve enerji tesis prosedürüyle güvenli duruma getirilir. Toz, su, buhar veya temizlik işlemi hücreye ulaşıyorsa çalışma açılmaz. Ayrım kurulamadığında bakım vardiya dışına alınır. Alanı işletme teslim eder ve teknik-temiz kabul tamamlandıktan sonra yeniden açar. Platform operatörü üretim izni vermez ve bariyer içinden ürün geçirilmesine onay vermez." },
            { soru: "Manlift gıda veya kasa taşımak için kullanılabilir mi?", cevap: "Hayır. Personel yükseltici platform ürün, palet, kasa veya ağır ekipman taşıma aracı değildir. Bu yükler uygun depo ve kaldırma yöntemiyle ayrı konumlandırılır. Yük hareketi bittikten, ekipman hücreden çıktıktan ve ürün güvenli biçimde korunduktan sonra platform personeli teknik hedefe ulaştırır. Sepette yalnız üreticinin izin verdiği kişi, bağlı alet ve yönetilebilir küçük malzeme bulunur. Korkuluk dışına uzun parça uzatılmaz; geniş sepet kapasite ve denge sınırlarını değiştirmez." },
            { soru: "Makineyi temiz alana nasıl alıyorsunuz?", cevap: "Tesis hangi zon için hangi giriş ve temizlik yönteminin geçerli olduğunu bildirir. Platformun tekeri, alt takımı, sepeti ve aletleri belirlenen noktada kontrol edilir. Uygun olmayan kimyasal veya basınçla makine bileşenleri rastgele yıkanmaz. Kirli alandan temiz alana geçişte iş durur, sepet indirilir ve kayıt kapısı tamamlanır. Rota ürün ile personel akışından ayrılır. Temizlik veya makine uygunluğu doğrulanamıyorsa zona giriş yapılmaz; farklı ekipman veya ayrı program kararı alınır." },
            { soru: "Yağmur sonrası dış cephe işi yapılır mı?", cevap: "Önce zeminin taşıma yeterliliği, su birikimi, eğim ve rögar gibi zayıf noktalar incelenir. Yüzey kuru görünse bile alt tabakanın uygun olduğu varsayılmaz. Rüzgâr, yağış ve görüş makinenin üretici sınırlarıyla birlikte izlenir. Koşul yetersizse çalışma ertelenir veya doğrulanmış başka park alanı ve uygun ekipman seçilir. Takvim baskısıyla yumuşak zeminde ilerlenmez. İş sırasında hava değişirse sepet güvenle indirilir, makine emniyete alınır ve alan tesis sorumlusuna bildirilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Hedef fotoğrafları, erişim kotu, yatay engel, kapı, dönüş, zemin ve üst açıklığı paylaşın. Üretim vardiyası, hijyen zonu, temizlik yöntemi, ürün ve araç hareketi, iç-dış ortam ile enerji tercihini ekleyin. Taşıyıcı indirme noktası ve tesisteki rota ayrıca gösterilmelidir. Yalnız Bafra, OSB veya gıda tesisi ifadesi model seçmeye yetmez. Sezon tarihi ve kapatılabilecek bakım penceresi de belirtilirse ekipman, personel ve malzeme hazırlığı aynı iş planında kesinleştirilir." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Bafra OSB ve ova gıda tesislerinde platform planı uygulama belgesindeki çapadır; rakip bölge şablonu referans alınmamıştır. Belirli tesis, ürün, kapasite, bina ölçüsü veya rakam kullanılmamıştır.",
    },
    "bolge:kavak-osb": {
        h1: "Kavak OSB İçin Şehir Dışı Manlift Sevkiyatı",
        giris: "Kavak OSB kaydının odağı, Samsun merkezinden bağımsız bir şehir dışı saha görevi gibi ele alınan sevkiyat gerçeğidir. Belirli işletme, sektör, mesafe, yol, süre, kapasite veya yapı hakkında iddia kurulmaz. Hedef ne olursa olsun doğru platformun sahaya ulaşması; iş fotoğrafı ve ölçü, taşıma planı, giriş irtibatı, indirme alanı, iç rota, çalışma hücresi, vardiya parkı ve geri alma adımlarının birlikte hazırlanmasına bağlıdır. Güncel yol ve hava koşulları hareket öncesinde yetkili kaynaklardan kontrol edilir. Düz kapalı aksta uygun akülü makaslı, sabit engelin arkasında yatay erişim gerekiyorsa uygun eklemli, dış sahada ise zemin ve çalışma diyagramı yeterli sınıf değerlendirilebilir. Platform yük taşımaz, forklift ya da vinç yerine geçmez. İşletme proses ve araç hareketini durdurup alanı teslim eder. Sevkiyatın tamamlanması yalnız makinenin OSB kapısına gelmesi değildir; platform güvenle indirilmiş, günlük kontrolden geçmiş ve hedef hücresine kabul edilmiş olmalıdır. Bu zincir uzak saha gününün kapıda bekleme veya yanlış model nedeniyle kaybolmasını önler.",
        maddeler: [
            { baslik: "Hazırlık kapısı kapanmadan çıkış vermemek", metin: "Hedef fotoğrafı, erişim kotu, yatay engel, park alanı, kapı, dönüş, zemin, üst açıklık ve ortam koşulu dosyaya girer. Seçilen modelin çalışma diyagramı, geçişi ve taşıma gereksinimi üretici verisiyle kontrol edilir. Tesis irtibatı giriş zamanını, kabul yöntemini ve indirme noktasını güncel olarak doğrular. Eksik bilgi varken operatöre sahada çözüm bulma görevi verilmez. Taşıyıcının girebildiği yol ile platformun tesiste ilerleyeceği rota ayrı değerlendirilir. Hazırlık listesi kapanmadıysa hareket tarihi koşullu kalır; takvimi korumak için yanlış sınıf gönderilmez." },
            { baslik: "İndirme alanını lojistikten ayırmak", metin: "Taşıyıcı yaklaşırken saha irtibatına haber verilir. İndirme yüzeyi düz, taşıma gücü uygun ve yaya-araç hareketinden ayrılmış olmalıdır. Rampa açılırken tesis sevkiyatı aynı hücreden geçirilmez. Platform indirildikten sonra lastik, korkuluk, kumanda, acil indirme ve görünür sızıntı kontrol edilir; teslim hasarı varsa kayıt altına alınır. Kabul alanı hedef noktası değilse iç rota işletme sorumlusuyla yürünür. Güncel istif, eşik, kapı ve zemin eski fotoğrafla aynı varsayılmaz. Sepet indirilmeden tesis içinde yürüyüş yapılmaz." },
            { baslik: "Çalışma penceresini hazırlığa bağlamak", metin: "Makine sahada olsa bile hedef altındaki üretim, forklift, vinç, yaya ve malzeme hareketi ayrılmadan sepet yükselmez. İşletme ilgili enerji ve prosesi kendi prosedürüyle güvenli duruma getirir. Teknik personel, sarf ve yedek parça pencere başlamadan hazır edilir. Aynı park konumundan kapanan işler gruplanır; hazırlanmamış yeni hedef kapsam içine rastgele eklenmez. Hücre sonunda aletler sayılır, bağlantı gözlenir, sepet indirilir ve alan tesis yetkilisine devredilir. Güvenli ayrım kurulamıyorsa görev daha uygun vardiyaya taşınır." },
            { baslik: "Sahada kalış için park ve enerji kurmak", metin: "İş birden fazla güne yayılıyorsa düz, korunaklı ve yetkisiz erişime kapalı park noktası belirlenir. Akülü ünitenin şarj alanı kuru, havalandırılan, makineye uygun ve trafik yolundan ayrılmış olmalıdır; kablo geçişe serilmez. Farklı enerji sınıfının kapalı ortamda kullanılabileceği varsayılmaz. Anahtar ve kullanım kaydı sorumlu kişide tutulur. Her vardiya günlük kontrolü tekrarlar ve çalışma hücresini yeniden teslim alır. Önceki iznin, zemin durumunun veya rotanın değişmeden kaldığı kabul edilmez. Olağan dışı ses, sızıntı ya da hasarda kullanım durdurulur." },
            { baslik: "Geri almayı teknik kapanışla eşleştirmek", metin: "Dönüş aracı, iş listesinin teknik kabulü, açık kalemlerin kaydı ve platformun taşıma için hazır olmasıyla planlanır. Başka göreve yetişmek için eksik iş bitmiş gösterilmez. Makine temizlenir, görünür durum kontrol edilir ve tesisin gösterdiği güvenli yükleme alanına alınır. Taşıyıcı geldiğinde saha trafiği yeniden ayrılır. Erken bitiş, taşıma uygunluğuna bağlı bir seçenek olabilir; otomatik vaat değildir. Çıkış irtibatı ve teslim kaydı tamamlanmadan araç hareket etmez. Böylece sevkiyat zinciri başlangıçtaki kabul kadar kontrollü biçimde kapanır." },
        ],
        ekBolumler: [
            { baslik: "Kavak OSB sevkiyat karar tablosu", paragraflar: ["Tablo belirli tesis prosedürü değil, şehir dışı görevin her kapısında doğrulanacak genel zincirdir."], tablo: { basliklar: ["Aşama", "Girdi", "Başlıca risk", "Kapanış"], satirlar: [["Model", "Hedef ve geometri", "Yanlış sınıf", "Diyagram kontrolü"], ["Taşıma", "Makine ve kabul", "Kapıda bekleme", "İrtibat teyidi"], ["İndirme", "Düz ayrılmış alan", "Trafik kesişimi", "Görünür kontrol"], ["Çalışma", "Hücre ve vardiya", "Proses hareketi", "Teknik devir"], ["Geri alma", "Açık iş ve durum", "Erken çıkış", "Taşıma teslimi"]] } },
            { baslik: "Saha değişikliğini yönetmek", paragraflar: ["Çalışma günü istif, kapı, üretim veya zemin koşulu keşiften farklı olabilir. Operatör değişikliği görünce işi güvenli durumda tutar; yeni rota ve park noktası tesis sorumlusuyla yeniden değerlendirilir. Fotoğrafta boş görülen alanın hâlâ hazır olduğu varsayılmaz.", "Yeni hedef talep edilirse kot, yatay engel, zemin, ortam, alt alan ve malzeme hazırlığı tekrar incelenir. Yakın bir nokta olması otomatik kapsam oluşturmaz. Mevcut platform sınırı yetmiyorsa hedef ayrı programa alınır. Değişiklik, dönüş aracını ve teslim tarihini etkiliyorsa taraflara açıkça bildirilir." ] },
            { baslik: "Taşıma, çalışma ve tesis devirleri", paragraflar: ["Taşıma ekibi platformu kabul alanında görünür kontrolle saha sorumlusuna devreder. Çalışma ekibi günlük kontrolleri tamamlayıp hedef hücresini işletmeden alır. İş sonunda teknik hedef tesis yetkilisine, platform ise geri alma alanına ayrı kayıtlarla teslim edilir. Bir imza diğer bütün aşamaların yerine geçmez.", "Çıkışta makinenin temizliği, sabitlemeye uygun durumu ve yükleme alanı kontrol edilir. Açık iş, hasar veya olağan dışı kullanım varsa taşıma öncesinde kayda alınır. Sözlü aktarım destekleyici olabilir, fakat sorumluluk zinciri yalnız telefon görüşmesine bırakılmaz." ] },
        ],
        sss: [
            { soru: "Kavak OSB için kesin teslim saati verilebilir mi?", cevap: "Makine, taşıyıcı, güncel yol-hava koşulu, tesis kabul zamanı ve indirme alanı doğrulanmadan kesin saat söylenmez. Program çalışma başlangıcından geriye doğru kurulur ve hareket öncesi koşullar yeniden kontrol edilir. Varış değişirse saha irtibatına erken bilgi verilir. OSB kapısına ulaşmak teslim değildir; taşıyıcının kabul alanına girmesi, platformun güvenle indirilmesi, görünür kontrolü ve iç rotasının onayı gerekir. Kritik pencere varsa hazırlık payı gerçek bilgiler üzerinden plana eklenir." },
            { soru: "Yalnız çalışma yüksekliğiyle makine seçilebilir mi?", cevap: "Hayır. Kotla birlikte yatay engel, park tabanı, kapı, dönüş, zemin, tavan açıklığı, ortam ve sepet yükü bilinmelidir. Boş düz hedefte makaslı, engel arkasında eklemli sınıf düşünülebilir; dış zeminde yürüyüş uygunluğu ayrıca belirleyicidir. Üretici çalışma diyagramı ve taşıma verisi birlikte okunur. Yaklaşık yüksekliğe göre gönderilen platform hedefe erişemeyebilir, kapıdan geçmeyebilir veya zemine uygun olmayabilir. Bilgi sınırdaysa sevkiyat öncesi keşif yapılır." },
            { soru: "Makine geldikten sonra üretim hemen durmalı mı?", cevap: "Üretim bütün hâlde durmak zorunda olmayabilir; yalnız güvenle ayrılabilen çalışma hücresi kapatılır. Hedef altındaki proses, forklift, vinç, yaya ve malzeme hareketi durdurulur, enerji tesis prosedürüyle güvenli hâle getirilir. Komşu aks sepet zarfı ve düşen cisim alanıyla kesişmiyorsa sürebilir. Hücre hazır değilse platform beklemek yerine güvenli parkta tutulur. İşletme alanı teslim etmeden sepet yükselmez; teknik kabul sonrası bariyer kaldırılarak faaliyet yeniden açılır." },
            { soru: "Platform tesiste birkaç gün bırakılabilir mi?", cevap: "Sözleşme ve saha planı uygunsa bırakılabilir. Düz, korunaklı, trafiğe kapalı ve yetkisiz kullanımdan güvenli park alanı gerekir. Şarj veya enerji düzeni makine ile ortama uygun kurulmalı, kablo geçiş yoluna serilmemelidir. Anahtar yönetimi ve kullanım kaydı belirlenir. Her vardiya günlük kontrolü tekrarlar; önceki günün izni otomatik sürmez. Hasar, sızıntı veya olağan dışı ses görülürse kullanım durur. Geri alma zamanı açık işler ve taşıyıcı uygunluğuyla birlikte planlanır." },
            { soru: "Sahada ek iş çıkarsa aynı makine kullanılır mı?", cevap: "Yeni hedefin kotu, yatay uzaklığı, zemin, alt alan, ortam ve malzeme ihtiyacı yeniden değerlendirilir. Mevcut platformun üretici sınırı ve görev türü uygunsa iş emri güncellenebilir. Ağır yük kaldırma, farklı ortam uygunluğu veya diyagram dışındaki erişim kabul edilmez. Hedefin yakın olması güvenli veya kapsama dâhil olduğu anlamına gelmez. Ek görev vardiyayı ya da geri alma aracını etkiliyorsa program ve teklif şeffaf biçimde yeniden düzenlenir; dönüş baskısıyla kontrol adımları atlanmaz." },
            { soru: "Teklif için hangi saha bilgileri gerekir?", cevap: "İş listesi, hedef fotoğrafları, erişim kotu, yatay mesafe, kapı, dönüş, zemin, üst engel ve park noktası paylaşılmalıdır. Kapalı-açık ortam, üretim ve yük hareketi, enerji tercihi, vardiya ile giriş prosedürü eklenir. Taşıyıcı indirme alanı, iç rota ve güncel saha irtibatı ayrıca gösterilir. Yalnız Kavak OSB ifadesi ekipman seçmeye yetmez. Bilgi sınırdaysa yerinde keşif yapılarak model, taşıma, çalışma hücreleri ve geri alma programı birlikte kesinleştirilir." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Kavak OSB için şehir dışı OSB sevkiyatı uygulama belgesindeki çapadır. Belirli işletme, sektör, güzergâh, mesafe, süre, kapasite veya rakam kullanılmamıştır; kabul ve devir genel saha pratiğidir.",
    },
    "bolge:samsun-serbest-bolgesi": {
        h1: "Samsun Serbest Bölgesi Liman Bitişiği Depolarda Manlift Kiralama",
        giris: "Samsun Serbest Bölgesi kaydı, uygulama belgesinde doğrulanan liman bitişiği serbest bölge depo işleriyle sınırlıdır. Belirli işletme, ürün, gemi, antrepo, gümrük işlemi, kapasite, bina ölçüsü veya çalışma süresi hakkında iddia kurulmaz. Güncel kişi, araç ve ekipman girişi; bildirim, refakat, saha kabulü ve iş izni koşulları bölge ile tesis yetkililerinden doğrudan öğrenilir. Depoda armatür, kamera, kablo hattı, algılama elemanı, kapı üstü donanım ve çatı altı bağlantılar fotoğraf ve ölçüyle doğrulanır. Liman komşuluğu nedeniyle depo içi iş, saha araçları ve sevkiyat penceresinden ayrılmadan başlamaz; denize açık dış görevlerde nem, yağış ve rüzgâr da güncel olarak kontrol edilir. Düz boş iç aksta uygun akülü makaslı, raf ya da sabit engel arkasında yatay erişim gerektiğinde uygun eklemli sınıf değerlendirilebilir. Platform palet veya kontrollü ürün taşımaz. Giriş onayı, makine indirme kabulü, depo koridorunun teslimi ve teknik çalışma izni ayrı kapılardır. Bu düzen, erişim ekibini ürün ve liman hareketine karıştırmadan yüksek bakım hedefini kayıtlı biçimde kapatır.",
        maddeler: [
            { baslik: "Bölge girişini iş emrinden önce doğrulamak", metin: "Tesis irtibatı hangi kişi, araç, taşıyıcı ve ekipman bilgilerinin hangi yöntemle iletileceğini güncel prosedüre göre bildirir. Bu içerik sabit belge listesi sunmaz; önceki girişin yeni görev için geçerli olduğu varsayılmaz. Ziyaret amacı, iş emri, kabul zamanı ve gerekiyorsa refakat düzeni yetkili tarafların istediği biçimde hazırlanır. Onay eksikken platform yola çıkarılıp kapıda çözüm aranmaz. Giriş saatine kontrol, indirme ve iç rota süresi sıkıştırılmaz. Makinenin bölgeye alınması, depoda yükselme izninin tamamlandığı anlamına gelmez; her kabul ayrı sorumluyla kapanır." },
            { baslik: "Depo ürünü ile bakım alanını ayırmak", metin: "Hedef altındaki palet, koli, raf ve ürün hareketi depo sorumlusu tarafından yönetilir. Erişim ekibi ürünün yerini, kaydını veya kontrol durumunu kendi kararıyla değiştirmez. Taşınabilir yükler tesisin yetkili yöntemiyle güvenli konuma alınır. Taşınamayan ürün çevresinde düşen cisim ve makine zarfı ayrımı kurulamıyorsa iş açılmaz. Platform palet kaldırmaz ve rafa yük yerleştirmez. Forklift, transpalet ve başka araçlar çalışma koridorundan çıkarılır. Ürün için özel erişim, sayım veya koruma kuralı varsa tesis bunu ekip işe başlamadan bildirir." },
            { baslik: "Liman hareketini zaman penceresiyle kesmek", metin: "Taşıyıcı indirme ve geri alma alanı, depo sevkiyatı ve saha araçlarından ayrılır. Depo kapısı veya koridor liman yönlü araç hareketiyle kesişiyorsa tesis sorumlusu kontrollü bir pencere açar. Bariyer platform tabanının yanında sepet zarfı ve araç dönüş alanını da kapsar. Beklenen araç geldiğinde sepet yukarıda tutularak geçiş verilmez; iş güvenle durdurulur. Komşu aks ancak fiziksel ayrım gerçekse çalışabilir. Teknik personel ve malzeme pencere öncesinde hazır edilir. Planlanmamış bekleme, liman trafiğinin içine aceleyle çalışma gerekçesi olmaz." },
            { baslik: "İç koridordan dış kapıya yeni kabul yapmak", metin: "Depo içindeki düz zemin için seçilen platformun dış kapı üstü veya cephe hedefinde uygunluğu yeniden değerlendirilir. Dış zeminin taşıması, eğim, su birikimi, araç rotası, rüzgâr, yağış ve görüş kontrol edilir. Deniz etkisine açık alanda koşul hızlı değişebileceğinden üretici sınırları iş boyunca izlenir. Teker ve alt takım depo hijyen ya da temizlik gerekliliğine göre kontrol edilir. İç işte uygun kompakt sınıfın dış sahaya yeterli olduğu varsayılmaz. Koşullar uyuşmuyorsa farklı model veya ayrı pencere hazırlanır; tek sevkiyat adına görev sınırı genişletilmez." },
            { baslik: "Teknik teslim ile bölge çıkışını ayırmak", metin: "İş sonunda hedef bağlantıları tesisin teknik yetkilisince kontrol edilir; alet ve parçalar sayılır, açık kalemler konumuyla kaydedilir. Sepet indirilip depo hücresi temiz teslim edilmeden koridor açılmaz. Makine tesisin gösterdiği çıkış rotasına alınır ve görünür durumu kayda geçirilir. Geçici saha kartı, anahtar veya refakat varsa güncel prosedüre göre kapatılır. Taşıyıcı yükleme alanında araç-yaya ayrımı yeniden kurulur. Teknik işin tamamlanması, bölge çıkış işleminin otomatik bittiği anlamına gelmez; iki teslim kendi sorumlusuyla sonuçlandırılır." },
        ],
        ekBolumler: [
            { baslik: "Serbest bölge depo çalışma tablosu", paragraflar: ["Tablo sabit bir bölge kuralı değildir; güncel yetkili prosedürlerle doldurulacak genel operasyon sırasını gösterir."], tablo: { basliklar: ["Kapı", "Doğrulama", "Risk", "Kapanış"], satirlar: [["Ön bildirim", "Kişi-araç-ekipman", "Eksik giriş", "Yetkili teyidi"], ["İndirme", "Alan ve trafik", "Sevkiyat kesişimi", "Görünür kontrol"], ["Depo koridoru", "Ürün ve araç", "Kontrolsüz hareket", "Hücre teslimi"], ["Dış kapı", "Hava ve zemin", "Liman etkisi", "Ayrı kabul"], ["Çıkış", "Makine ve yetki", "Açık kayıt", "İade kapanışı"]] } },
            { baslik: "Koridor ve hedef veri dosyası", paragraflar: ["Her hedef için fotoğraf, erişim kotu, yatay engel, koridor, dönüş, zemin, üst tesisat ve park noktası kaydedilir. Ürün ile forklift hareketi, çalışma penceresi ve giriş gereklilikleri tesis tarafından eklenir. Makine seçimi yalnız depo veya serbest bölge adına göre yapılmaz.", "Sepetteki kişi, bağlı alet ve küçük malzeme üretici kapasitesine dâhildir. Hacimli parça, palet ve ürün ayrı kaldırma yöntemiyle hazırlanır. Raf makineye dayanak yapılmaz; korkuluk üzerinden uzanılmaz. Rota gün içinde istifle değişirse platform durur ve koridor yeniden kabul edilir." ] },
            { baslik: "Nem ve yağış altında ekipman yönetimi", paragraflar: ["Dış görevde metal yüzeyin ıslaklığı, görüş, rüzgâr ve yağış takip edilir. Elektrikli el aletleri ile bağlantılar ortam koşuluna uygun yönetilir. Sınırlar platformun üretici talimatından alınır; liman yakınlığı adına sabit bir sayı uydurulmaz. Koşul kötüleşirse sepet indirilir.", "Platform birkaç vardiya kalacaksa kuru, düz, korunaklı ve yetkisiz kullanımdan güvenli park noktası gerekir. Şarj alanı depo trafiğinden ayrılır ve kablo geçişe serilmez. Her vardiya günlük kontrol ile giriş-çalışma yetkisini yeniler; önceki günün koşulu otomatik sürmez." ] },
        ],
        sss: [
            { soru: "Samsun Serbest Bölgesi girişinde hangi evrak gerekir?", cevap: "Sabit bir liste vermek doğru değildir; kişi, taşıyıcı, araç, platform ve işe ilişkin güncel talepler bölge ile tesis yetkililerinden alınır. Bildirim yöntemi, kabul zamanı, refakat ve çalışma izni gereklilikleri işten önce kontrol listesine yazılır. Önceki bir ziyaret yeni görev için otomatik yetki sağlamaz. Onaylar tamamlanmadan sevkiyat kesinleştirilmez. Giriş kaydı kapandığında da depo koridorunun hazır olduğu varsayılmaz; güvenli indirme, iç rota, ürün-araç ayrımı ve teknik alan teslimi ayrıca doğrulanır." },
            { soru: "Depo çalışırken manlift kullanılabilir mi?", cevap: "Çalışılan koridor forklift, transpalet, ürün, yaya ve saha aracı hareketinden fiziksel olarak ayrılabiliyorsa komşu aks kontrollü biçimde sürebilir. Sepet zarfıyla kesişen yük ve araç hareketi durmalıdır. Bariyer koridorun iki ucunda tesis sorumlusu tarafından yönetilir. Ayrım kurulamıyorsa bakım sevkiyatın daha sakin olduğu pencereye alınır. Platform indirilmeden, aletler sayılmadan ve teknik kabul yapılmadan koridor yeniden açılmaz. Bölgeye giriş izni, hareketli depo içinde çalışma izni yerine geçmez." },
            { soru: "Manlift ile palet veya ürün taşınabilir mi?", cevap: "Hayır. Personel yükseltici platform palet istifleme, ürün taşıma ya da yük kaldırma ekipmanı değildir. Yükler tesisin uygun depo ekipmanıyla ve kontrol prosedürüyle konumlandırılır. Araç hücreden çıktıktan ve ürün güvenli biçimde korunduktan sonra manlift personeli bakım hedefine ulaştırır. Sepette yalnız üreticinin izin verdiği kişi, bağlı el aleti ve küçük malzeme bulunur. Raf dayanak olarak kullanılmaz, korkuluk dışına yük uzatılmaz ve askılı yük altında personel çalıştırılmaz." },
            { soru: "Raf arası için makaslı platform yeterli midir?", cevap: "Hedefin altına güvenli dikey park kurulabiliyor, koridor-dönüş ölçüleri, zemin ve üst açıklık uygunsa uygun makaslı sınıf değerlendirilebilir. Raf, kolon veya sabit düzen hedefi kapatıyorsa yeterli yatay erişime sahip kompakt eklemli seçenek gerekebilir. Yalnız koridor genişliği karar için yeterli değildir. Kapalı yükseklik, dönüş, çalışma diyagramı, sepet kapasitesi ve ortam uygunluğu birlikte ölçülür. Makine yürütülürken sepet indirilir; raf üzerinden uzanarak eksik erişim telafi edilmez." },
            { soru: "Liman yakınında dış çalışma yağmurda sürer mi?", cevap: "Platformun dış kullanım sınırı, rüzgâr ve diğer koşullar üretici talimatından alınır. Yağış, görüş kaybı, kaygan yüzey veya zeminde su birikimi oluştuğunda iş yeniden değerlendirilir. Deniz yönlü açık alanda değişim hızlı olabilir; operatör sepeti güvenle indirip alanı emniyete alır. Sevkiyat programı veya kısa kiralama hava sınırını değiştirmez. Koşullar uygun değilse farklı pencere seçilir. Elektrikli aletler ve bağlantılar da ıslak ortam riskine göre tesis prosedürüyle yönetilir." },
            { soru: "Teklif için hangi bilgileri göndermeliyiz?", cevap: "Hedef fotoğrafı, erişim kotu, yatay engel, koridor ve dönüş, zemin, üst tesisat ile park noktasını paylaşın. Ürün, forklift ve liman yönlü araç hareketini, kapatılabilecek pencereyi, indirme alanını ve iç rotayı ekleyin. Güncel kişi-araç-ekipman bildirimi, refakat ve izin koşulları yetkili taraftan alınmalıdır. Yalnız serbest bölge veya depo ifadesi model seçmez. Bilgiler sınırdaysa keşif, giriş teyidi ve operasyon planı tamamlandıktan sonra sevkiyat kesinleştirilir." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Samsun Serbest Bölgesi için liman bitişiği serbest bölge depo işleri uygulama belgesindeki çapadır. Belirli işletme, ürün, gemi, antrepo, gümrük işlemi, kapasite, süre veya rakam kullanılmamıştır.",
    },
    "bolge:canik": {
        h1: "Canik Ticari Cephe ve Çatı İşlerinde Manlift Kiralama",
        giris: "Canik için bu sayfanın odağı merkez ilçedeki ticari bina cepheleri ve çatı kenarı işleridir. Belirli alışveriş alanı, mağaza, site, cadde, bina yüksekliği veya işletme adı hakkında iddia kurulmaz. Gerçek talepte tabela, cephe armatürü, kamera, kaplama, oluk, dere, saçak ve çatı kenarı bağlantıları yakın ve geniş açı fotoğraflarla tanımlanır. Model seçimi yalnız hedef kotuna dayanmaz; bina geri çekilmesi, tente veya sundurma, balkon, park araçları, yaya ve müşteri dolaşımı, zemin eğimi, rögar, giriş kapısı, rüzgâr ve yağış birlikte incelenir. Düz cephe önünde uygun makaslı, sabit engelin arkasına kontrollü erişimde çalışma diyagramı yeterli eklemli sınıf değerlendirilebilir. Platform tabela, kaplama levhası veya çatı malzemesi taşıyan vinç değildir. Ticari işletme sorumlusu çalışma alanını ve uygun zaman penceresini teslim eder; kamusal alan etkileniyorsa güncel yetkili gereklilikler önceden doğrulanır. Çatıya çıkmak yerine güvenli sepet erişimi hedeflenir, fakat platform çatının veya zayıf yüzeyin üzerine kurulmaz. İş, bina kullanımı ve sokak hareketinden ayrılmış kısa hücreler hâlinde yürütülür.",
        maddeler: [
            { baslik: "Cephe hedefini park geometrisiyle eşleştirmek", metin: "Keşif hedef kotundan değil makinenin duracağı tabandan başlar. Zemin taşıması, eğim, rögar, bordür, bodrum üstü olasılığı ve yüzey hassasiyeti yapı sorumlusuyla değerlendirilir. Tente, sundurma, balkon, ağaç ve tabela gibi yatay engeller ölçülür. Fotoğrafta yakın görünen hedefe diyagram dışında uzanılmaz. Taşıyıcı indirme noktası, platformun cepheye giden rotası ve dönüş alanı ayrı kaydedilir. Dikey park mümkünse uygun makaslı, engelin arkasında çalışma gerekiyorsa yeterli eklemli sınıf incelenir. Aynı cephenin her bölümü tek kurulumla erişilebilir varsayılmaz." },
            { baslik: "Müşteri ve bina girişini çalışma zarfından çıkarmak", metin: "Bariyer yalnız platform tabanını değil sepet hareketini ve düşen cisim alanını kapsar. Mağaza veya bina girişi bu zarfla kesişiyorsa güvenli alternatif geçiş kurulmadan yükselme başlamaz. Zorunlu geçiş anında sepet indirilir, aletler emniyete alınır ve gözcü kontrollü hareketi yönetir. İnsanlar bariyer altından geçirilmez. Kurye, müşteri, personel ve araç akışı gün içinde değişebileceği için alan yeniden gözlenir. Kaçış ve acil erişim yolları plansız kapatılmaz. Güvenli ayrım yoksa iş işletmenin kapalı ya da daha sakin olduğu pencereye alınır." },
            { baslik: "Tabela ve çatı malzemesini ayrı kaldırmak", metin: "Tabela kasası, uzun profil, kaplama levhası, oluk parçası veya ağır armatür manlift sepetinde taşınmaz. Hacimli parçalar rüzgâr yüzeyi oluşturarak dengeyi ve korkuluk güvenliğini değiştirebilir. Uygun kaldırma yöntemiyle hedefe alınan malzeme güvenli biçimde sabitlendikten sonra platform personeli bağlantı noktasına ulaştırır. Sepette yalnız üreticinin izin verdiği personel, bağlı alet ve yönetilebilir küçük parça bulunur. Sökülen malzeme aşağı atılmaz ya da çatı kenarında geçici bırakılmaz. Malzeme hareketi ile personel erişimi aynı dar hücrede eş zamanlı yapılmaz." },
            { baslik: "Çatı kenarında hava ve yüzey sınırını korumak", metin: "Çatı işi ifadesi makinenin çatıya çıkarılacağı anlamına gelmez. Platform doğrulanmış zeminde durur ve hedefe üretici çalışma diyagramı içinde yaklaşır. Kırılgan veya taşıması bilinmeyen çatı yüzeyine personel aktarımı yapılmaz. Rüzgâr, yağış, görüş ve yüzey ıslaklığı iş boyunca izlenir; sınırlar kullanılan makinenin talimatından alınır. Bina kenarı ve geniş tabela elemanı yerel rüzgâr etkisini artırabilir. Koşul kötüleşirse sepet güvenle indirilir. Ticari açılış saati veya teslim baskısı üretici sınırlarını değiştirmez." },
            { baslik: "Teknik ve görsel kabulü birlikte yapmak", metin: "Bağlantılar, kablo güzergâhı, sızdırmazlık gerektiren birleşimler ve sabitlemeler yetkili teknik kişi tarafından kontrol edilir. Tabela hizası, armatür yönü, kaplama görünümü ve oluk akışına ilişkin iş emri kalemleri zeminden farklı açılarla gözlenir. Alet ve parçalar sayılır; üstte gevşek eleman bırakılmaz. Platform tamamen indirilir, bina önü temizlenir ve giriş güvenli hâline getirilir. Açık kalan iş fotoğraf ve konumla kaydedilir, tamamlandı gösterilmez. Bariyer ancak teknik kabul sonuçlandığında ve makine çalışma zarfından çıktığında kaldırılır." },
        ],
        ekBolumler: [
            { baslik: "Canik cephe ve çatı erişim tablosu", paragraflar: ["Tablo belirli bina envanteri değildir; keşifte hedef, engel, çevre hareketi ve hava kararını birlikte ele alır."], tablo: { basliklar: ["Hedef", "Engel", "Yaklaşım", "Kapanış"], satirlar: [["Düz cephe armatürü", "Yaya hattı", "Uygun makaslı", "Alan açılışı"], ["Sundurma arkası", "Yatay mesafe", "Uygun eklemli", "Diyagram kontrolü"], ["Ticari tabela", "Müşteri girişi", "Kapalı pencere", "Görsel kabul"], ["Oluk ve saçak", "Çatı kenarı", "Zeminden erişim", "Sızdırmazlık kontrolü"], ["Dış kaplama", "Yağış-rüzgâr", "Koşullu çalışma", "Teknik teslim"]] } },
            { baslik: "İşletme ve yapı sorumlusuyla hazırlık", paragraflar: ["Çalışma saati, girişlerin korunması, elektrik veya diğer tesisatın kim tarafından güvenli duruma getirileceği ve saha irtibatı önceden yazılır. Ticari kullanıcıların bilgilendirilmesini işletme veya yapı sorumlusu yürütür. Platform ekibi kendisine teslim edilen hücrede çalışır; bina adına faaliyet izni vermez.", "Kamusal alan ya da taşıt düzeni etkileniyorsa uygulanacak izin ve yönlendirme güncel yetkili kaynaktan doğrulanır. Genel bir yöntem her cepheye otomatik uygulanmaz. Taşıyıcının indirme ve geri alma hareketi için de yaya-araç ayrımı kurulur. Makinenin sahaya ulaşması çalışma alanının hazır olduğu anlamına gelmez." ] },
            { baslik: "Yağış penceresi ve günlük kontrol", paragraflar: ["Operatör vardiya başında lastik, korkuluk, kumanda, acil indirme ve görünür sızıntıyı kontrol eder. Hava tahmini planlamaya yardım eder; sahadaki gerçek rüzgâr, yağış ve görüş çalışma boyunca belirleyicidir. Islak veya kaygan zeminde makine zorlanmaz. Koşul değiştiğinde sepet indirilir.", "Cephe boyunca her yeni park noktası yeni zemin kabulüdür. Bir kurulumdaki güvenli yüzey yan cephe için otomatik geçerli değildir. Rögar, eğim, bordür veya bodrum üstü şüphesinde hareket durur. Gözcü bina girişini ve kör noktaları takip eder; makinenin kapasite ya da hava sınırlarını değiştiremez." ] },
        ],
        sss: [
            { soru: "Canik'te cephe ve çatı işi için hangi manlift seçilir?", cevap: "Hedef kotu, yatay uzaklık, balkon-sundurma gibi engeller, park tabanı, kapı, dönüş, yaya-araç hareketi ve hava maruziyeti birlikte değerlendirilir. Düz cephe önünde uygun makaslı, engel arkasındaki hedefte çalışma diyagramı yeterli eklemli sınıf düşünülebilir. Çatı kenarına erişim makinenin doğrulanmış zeminde kalmasıyla planlanır. Yaklaşık yüksekliğe göre seçim yapılmaz. Fotoğraf ve ölçü yetersizse yerinde keşif gerçekleştirilir; korkuluk üzerinden uzanmak veya zayıf çatı yüzeyini park alanı saymak kabul edilmez." },
            { soru: "İş yeri açıkken tabela çalışması yapılabilir mi?", cevap: "Müşteri, personel, kurye ve araç hareketi çalışma zarfından kesin biçimde ayrılabiliyorsa yalnız ayrılmış bölüm değerlendirilebilir. Çoğu işte kapalı veya sakin pencere daha yönetilebilir olur. Bariyer sepet hareketini ve düşen cisim alanını kapsar; giriş bu alanla kesişiyorsa güvenli alternatif yol gerekir. Zorunlu geçişte sepet indirilir ve gözcü kontrollü geçiş sağlar. İnsanlar platformun altından geçirilmez. Teknik ve görsel kabul tamamlanmadan alan işletmeye yeniden açılmaz." },
            { soru: "Manlift sepetinde tabela veya oluk taşınabilir mi?", cevap: "Hacimli tabela, uzun profil, oluk ve kaplama levhası personel platformuyla kaldırılmaz. Bu parçalar dengeyi, korkuluk güvenliğini ve rüzgâr etkisini değiştirebilir. Uygun malzeme kaldırma yöntemiyle hedefe alınır; platform personeli montaj veya bağlantı noktasına ulaştırır. Sepette yalnız kapasite içindeki kişi, bağlı el aleti ve küçük yönetilebilir malzeme bulunur. Korkuluk dışına parça uzatılmaz. Askılı yük altında çalışılmaz; malzeme hareketi tamamlanıp kaldırma ekipmanı hücreden çıktıktan sonra personel erişimi açılır." },
            { soru: "Platform çatı üzerine kurulabilir mi?", cevap: "Taşıma yeterliliği özel olarak mühendislik verisiyle doğrulanmamış bir çatı, platform park alanı kabul edilmez. Kırılgan yüzey, gizli boşluk ve noktasal yük riskleri görsel bakışla çözülemez. Plan, makineyi uygun zeminde tutup hedefe çalışma diyagramı içinde eriştirmeye dayanır. Çatıya personel aktarımı da platformun normal kullanım amacı değildir. Zeminden erişim mümkün değilse farklı erişim yöntemi ve yetkin teknik değerlendirme gerekir; kısa süre veya ticari takvim adına belirsiz yüzeye makine çıkarılmaz." },
            { soru: "Yağmur veya rüzgâr başladığında ne yapılır?", cevap: "Makinenin üretici talimatındaki dış kullanım sınırları izlenir. Bina köşesi ve geniş tabela yüzeyi rüzgâr etkisini artırabilir; yağış görüşü ve zemin tutunmasını azaltabilir. Operatör koşul kötüleştiğinde sepeti güvenle indirir, makineyi emniyete alır ve saha sorumlusunu bilgilendirir. İşletme açılışı, teslim tarihi veya kısa kiralama güvenlik sınırını değiştirmez. Hava yeniden uygun olduğunda zemin ve çalışma hücresi tekrar kontrol edilerek işe dönülür; önceki izin otomatik sürmez." },
            { soru: "Teklif hazırlamak için hangi bilgiler gerekir?", cevap: "Hedefin yakın ve geniş açı fotoğrafları, erişim kotu, yatay uzaklık, balkon, sundurma veya tabela engelleri, zemin, kapı, dönüş ve park noktası paylaşılmalıdır. Bina girişi, müşteri-yaya saatleri, araç parkı, hava maruziyeti ve kaldırılacak malzemenin niteliği eklenir. Taşıyıcı indirme alanı ayrıca gösterilir. Yalnız Canik, cephe veya çatı işi ifadesi model belirlemez. Geometri ya da zemin sınırdaysa yerinde keşif ve işletmeyle çalışma penceresi planı yapılır." },
        ],
        kaynak: "Özgün içerik 2026-08-13 tarihinde hazırlandı. Canik için merkez ilçede ticari cephe ve çatı işleri uygulama belgesindeki çapadır. Belirli işletme, bina, mağaza, cadde, yükseklik, trafik, süre veya rakam kullanılmamıştır; erişim ve alan ayrımı genel saha pratiğidir.",
    },

// ═══════════════════════════════════════════════════════════════════════
    // "hizmet:*" SAYFALARI — Samsun liman bölgesi + gıda/tütün sanayi ekseni.
    // Domain'in TEK Samsun kaydı olduğu için başka bir Samsun kardeşiyle
    // çakışma riski yok; açı yine de bolge:* sayfalarındaki liman+gıda+
    // Karadeniz iklimi temasından sapmaz, yalnızca farklı hizmet kalemleri
    // üzerinden anlatılır (örümcek platform, nakliye, forklift, eklemli bom,
    // iç mekân, çelik konstrüksiyon, tarım-silo, enerji-aydınlatma,
    // operatörlü kiralama, çok noktalı rota, zor zemin). Tarih: 2026-08-14.
    // Tesis adı, kapasite ve rakam uydurulmamıştır.
    // ═══════════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Samsun Antrepo ve Soğuk Depo İçinde Sepetli / Örümcek Platform Kiralama",
        giris:
            "Liman çevresindeki antrepo ve soğuk depoların iç mimarisi, açık sahadan tamamen farklı bir erişim problemi doğurur: raf aralıkları dar, tavan orta yükseklikte ama dolu, zemin ise soğuk hava kanalları ve yer altı ısıtma hatlarıyla noktasal olarak hassastır. Standart bir makaslı platform bu koridorlara çoğu zaman sığmaz veya raf köşesine yeterince yaklaşamaz; örümcek tip sepetli platform ise katlanmış hâlde dar bir kapı veya rampa geçişinden içeri girip, kendi ayaklarını raf temeline göre ayrı ayrı ayarlayarak dar aralıklarda çalışabilir. Samsun'daki gıda ve tütün depolarında bu makineyi en çok soğuk hava tesisatı bakımı, tavan aydınlatması ve raf üstü havalandırma kanalı kontrolü için kullanıyoruz. Antrepo tarafında ise gümrüklü sahanın kendi giriş kuralları devreye girer: makinenin sahaya girişinden önce personel ve ekipman bilgisi işletmeye iletilir, iç mekân çalışması sırasında ürün üzerine düşebilecek malzemeye karşı koruma örtüsü serilir. Bu sayfada makinenin dar koridorlara nasıl konumlandığını, soğuk depoda hangi ek önlemlerin alındığını ve gümrüklü antrepo girişinin nasıl işlediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Soğuk depo raf aralığında tavan bakımı",
                metin:
                    "Soğuk hava deposlarında raf sıraları arasındaki koridor genellikle bir forkliftin dönebileceği genişlikte tasarlanır, bu da sepetli platform için dar ama geçilebilir bir alan bırakır. Örümcek platformun ayakları raf ayaklarının hemen yanına, ürün istiflerine değmeyecek şekilde konumlanır ve sepet raf üstündeki soğutucu üniteye veya aydınlatma armatürüne dikey olarak yaklaşır. Düşük sıcaklık, hidrolik akışkanın viskozitesini etkileyebildiği için soğuk depo işlerinde makinenin ısınma süresi işe başlamadan önce hesaba katılır.",
            },
            {
                baslik: "Antrepo çatı altı aydınlatma ve havalandırma",
                metin:
                    "Gümrüklü antrepo hacimlerinde çatı altı aydınlatma ve havalandırma fanı bakımı, dolu raf düzeni bozulmadan yapılmak zorundadır. Örümcek platform, raflar arasında geniş bir koridor açmadan hedef noktaya ulaşabildiği için depo düzenini değiştirmeden çalışmaya izin verir. Egzoz gazının kapalı hacimde birikmemesi için bu tür işlerde akülü sınıf tercih edilir; zemin genellikle epoksi kaplı olduğundan iz bırakmayan tekerlek seçimi de standarttır.",
            },
            {
                baslik: "Tütün işleme hattında yükseltilmiş erişim",
                metin:
                    "Tütün işleme tesislerinde kurutma ve harmanlama hatları genellikle orta yükseklikte, birbirine yakın bantlar hâlinde dizilidir. Bant üstü sensör değişimi veya kablo düzenlemesi gibi işlerde makinenin dar aralıktan hatta zarar vermeden yaklaşması gerekir; örümcek platformun yatay uzanan kolu bu tip aralıklarda makaslı sınıfa göre daha güvenli bir seçenektir. Hat durdurulmadan yapılabilecek işler önceden işletme ile birlikte belirlenir.",
            },
            {
                baslik: "Dar kapı ve rampa geçişinden içeri giriş",
                metin:
                    "Antrepo ve soğuk depo girişleri çoğunlukla standart bir kamyon rampası genişliğindedir, bu da makinenin katlanmış hâldeki gövde ölçüsünü belirleyici kılar. Teslimat öncesi kapı yüksekliği, rampa eğimi ve iç zemin kotu işletmeden istenir; ölçü sınırdaysa en dar gövdeli örümcek modeli tercih edilir. Rampa üzerinde ıslak veya donmuş yüzey varsa makine geçişten önce zemin kontrolü yapılır.",
            },
            {
                baslik: "Ürün üzerinde bulaşma ve hijyen koruması",
                metin:
                    "Gıda ürünü depolanan alanlarda makinenin tekerlekleri sahaya girmeden temizlenir, yağ sızıntısı kontrolü yapılır ve çalışma alanının altına koruma örtüsü serilir. Bu, depo işletmesinin kendi hijyen kayıt sistemini bozmadan sürdürebilmesi için standart uygulamamızdır. İş bitiminde koruma örtüsü kaldırılır ve çalışılan bölüm işletme yetkilisiyle birlikte kontrol edilerek teslim edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân tipine göre örümcek platform seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, liman çevresindeki antrepo ve gıda tesislerinde en sık karşılaştığımız iç mekân tiplerini ve tercih ettiğimiz makine ayarını özetler.",
                ],
                tablo: {
                    basliklar: ["Mekân tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Tercih edilen sınıf"],
                    satirlar: [
                        ["Soğuk depo raf koridoru", "Tavan soğutucu bakımı", "Koridor genişliği", "Örümcek, düşük sıcaklık ısınmalı"],
                        ["Gümrüklü antrepo hacmi", "Çatı altı aydınlatma", "Raf düzeni bozulmaması", "Örümcek, akülü"],
                        ["Tütün işleme hattı", "Sensör ve kablo düzeni", "Bant arası mesafe", "Örümcek, dar gövde"],
                        ["Dar rampa girişli depo", "Genel erişim", "Kapı-rampa ölçüsü", "En dar gövdeli örümcek"],
                    ],
                },
            },
            {
                baslik: "Soğuk zincirde çalışma disiplini",
                paragraflar: [
                    "Soğuk depoda çalışmak yalnızca makine seçimini değil, çalışma süresini de etkiler. Düşük sıcaklıkta hem operatör hem hidrolik sistem için sürekli maruziyet sınırlıdır; bu yüzden uzun süren işler kısa bloklara bölünür, ara sıcak alana çıkış payı bırakılır. Ürünün soğuk zincirden çıkmaması için depo kapısı işlem süresince gereğinden uzun açık tutulmaz.",
                    "Depo işletmesinden istediğimiz bilgi nettir: raf doluluk oranı, mevcut sıcaklık ayarı ve o gün planlanan yükleme-boşaltma trafiği. Bu bilgiyle çalışma saatini, deponun en az hareketli olduğu dilime yerleştiririz.",
                ],
            },
            {
                baslik: "Gümrüklü sahaya makine girişi",
                paragraflar: [
                    "Antrepo gümrüklü bir sahaysa makinenin girişi, işletmenin kendi güvenlik ve gümrük kurallarına tabidir. Operatör kimlik bilgisi, makine seri numarası ve periyodik kontrol belgesi işin başlamasından önce iletilir; bu evrakların hazırlanması birkaç gün sürebileceği için planlamayı işin ilk gününe sıkıştırmamayı öneririz.",
                    "Saha içinde makinenin park edeceği nokta ve şarj veya yakıt ikmali yapılacak alan da önceden belirlenir; gümrüklü sahada beklenmedik bir konumlanma genellikle izin sürecini uzatır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk depoda makine ne kadar süre çalışabilir?",
                cevap:
                    "Sürekli bir sınır yoktur, ancak düşük sıcaklıkta hem hidrolik sistem hem operatör için ara vermek gerekir. Uzun işlerde çalışmayı kısa bloklara böler, aralarda makineyi ve operatörü sıcak alana çıkarırız. Deponun sıcaklık ayarı ve raf doluluğu ne kadar netse, blok planlaması da o kadar isabetli olur. Depo kapısının işlem süresince açık kalma süresini de en aza indirmeye çalışırız, çünkü bu ürünün soğuk zincirini doğrudan etkiler.",
            },
            {
                soru: "Antrepoya makine girişi için hangi belgeler istenir?",
                cevap:
                    "Gümrüklü sahalarda genellikle operatör kimlik bilgisi, araç-makine plaka ve seri numarası, periyodik kontrol raporu ve bazen saha oryantasyon kaydı istenir. Bu evrakları talebi aldığımızda önceden hazırlar, işin başlangıç tarihinden birkaç gün önce işletmeye iletiriz. Sürecin süresi sahanın kendi kural setine bağlı olduğu için, planlamayı son güne bırakmamak sürecin sorunsuz işlemesini sağlar.",
            },
            {
                soru: "Raf aralığı çok dar; her örümcek model sığar mı?",
                cevap:
                    "Sığmayabilir; bu yüzden teklif öncesi koridor genişliği ve raf yüksekliği bizim için belirleyicidir. Farklı gövde genişliğinde örümcek modelleri bulunur, bu ölçüyü bildiğinizde en dar gövdeli olanı önceden seçeriz. Ölçü sınırdaysa, işe başlamadan önce yerinde bir kontrol önerir, gerekirse rafların geçici olarak biraz aralanmasını işletmeyle konuşuruz.",
            },
            {
                soru: "Ürünlerin üzerine yağ veya kir düşme riski var mı?",
                cevap:
                    "Riski sıfıra indirmek için standart bir hazırlık uygularız: tekerlekler sahaya girmeden temizlenir, hidrolik hortum bağlantıları sızıntı açısından kontrol edilir ve çalışma alanının altına koruma örtüsü serilir. Gıda ürünü depolanan bölümlerde bu adım hiç atlanmaz. İş bitiminde örtü kaldırılır, çalışılan bölüm işletme yetkilisiyle birlikte gözden geçirilerek teslim edilir.",
            },
            {
                soru: "Tütün işleme hattı çalışırken bakım yapılabilir mi?",
                cevap:
                    "Hattın hareketli kısmına doğrudan temas gerektiren işlerde hayır; o dilimin durdurulması gerekir. Ancak bant dışındaki sensör kutusu değişimi veya aydınlatma gibi yeterli mesafeli işler, operasyon sürerken güvenli bariyer düzeniyle yapılabilir. Hangi bölümün durdurulacağı ve kilitleme-etiketleme sorumluluğunun kimde olduğu iş öncesi işletmeyle birlikte netleştirilir.",
            },
            {
                soru: "Soğuk depo dışındaki normal antrepoda da örümcek platform gerekir mi?",
                cevap:
                    "Her zaman değil; koridor geniş ve raf düzeni seyrekse standart makaslı platform yeterli olabilir. Örümcek tipi asıl avantajı dar geçişlerde ve raf arasında yandan erişim gerektiren noktalarda ortaya çıkar. Talebi aldığımızda depo planını veya fotoğrafını değerlendirip, gereğinden büyük bir makine göndermemek için en uygun sınıfı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun limanı çevresindeki antrepo, soğuk depo ve tütün işleme tesisi varlığı kamuya açık genel bilgidir; makine ayarı, soğuk zincir disiplini ve gümrüklü saha giriş pratiği firma saha bilgisidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Samsun Liman ve Gıda Sanayi Bölgesine Nakliye ve Teslimat Hizmeti",
        giris:
            "Samsun'daki liman çevresi ve ona bağlı gıda-tütün işleme tesisleri, il merkezine yakın ama kendi giriş-çıkış kurallarına sahip bir kümedir. Bu yakınlık nakliye planlamasını basitleştirir gibi görünse de, gümrüklü sahaların kendi güvenlik prosedürü ve fabrikaların üretim takvimi, teslimat saatini genel bir kural yerine her seferinde ayrı bir plan konusu hâline getirir. Karadeniz'in bilinen değişken hava koşulu da buna eklenir: bir sevkiyat günü sabah açık başlayıp öğleden sonra yağışa dönebilir, bu yüzden özellikle açık kasalı araçla taşınan ekipmanda teslimat saati hava tahminine göre esnek tutulur. Bu sayfada bölgeye makine teslimatının nasıl planlandığını, gümrüklü saha girişinin nakliye takvimine nasıl yansıdığını ve birden fazla tesisin teslimatı nasıl birleştirebileceğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "İlk teslimat öncesi saha bilgisi toplama",
                metin:
                    "Liman çevresinde daha önce çalışmadığımız bir tesisle ilk temasta, makineyi göndermeden önce erişim yolu, kapı-rampa ölçüsü ve varsa gümrüklü saha statüsü hakkında bilgi isteriz. Bu bilgi netse doğrudan teslimat planlanır; belirsizse kısa bir ön görüşme veya fotoğraf paylaşımıyla netleştirilir. Gümrüklü bir sahaysa evrak süreci teslimattan günler önce başlatılır.",
            },
            {
                baslik: "Gümrüklü saha girişinin teslimat takvimine etkisi",
                metin:
                    "Antrepo veya liman sahasına araç girişi, işletmenin kendi güvenlik onayına tabidir; bu onay bazen aynı gün, bazen birkaç gün sürebilir. Bu belirsizlik nakliye takvimine doğrudan yansır, bu yüzden gümrüklü sahaya giden teslimatlarda planlamayı işin başlangıç tarihinin birkaç gün öncesine çekeriz. Onay süreci tamamlanmadan araç sahaya doğru yola çıkarılmaz.",
            },
            {
                baslik: "Değişken hava koşulunda sevkiyat planlaması",
                metin:
                    "Karadeniz kıyısında yağış günün farklı saatlerinde farklı yoğunlukta görülebilir; bu, sevkiyatın iptal edilmesi gerektiği anlamına gelmez, saatin hava tahminine göre ayarlanması gerektiği anlamına gelir. Açık kasalı taşımada makine ve ekipman su geçirmez örtüyle kapatılır; şiddetli sağanak beklenen saatlerde ise teslimat günün daha sakin bir dilimine kaydırılır.",
            },
            {
                baslik: "Fabrika üretim takvimiyle uyumlu teslimat",
                metin:
                    "Gıda ve tütün işleme tesislerinde üretim genellikle belirli vardiyalarda yoğunlaşır; makine teslimatının bu yoğunluğa denk gelmesi hem araç trafiğini hem hijyen kontrol noktalarını zorlar. Bu yüzden teslimat saatini fabrikanın vardiya değişim aralığına veya üretimin nispeten sakin olduğu saate yerleştirmeyi öneririz. Bu bilgi işletmeden önceden alınır.",
            },
            {
                baslik: "Acil arıza durumunda hızlandırılmış teslimat",
                metin:
                    "Liman veya fabrika sahasında bir makine beklenmedik şekilde arızalandığında, üretim veya yükleme durabileceği için yedek makine teslimatını öncelikli sıraya alırız. Bu durumlarda gümrüklü sahaya giriş evrakının hazır olması süreci kısaltan en önemli etkendir; bu yüzden uzun süreli çalıştığımız tesislerde evrak şablonunu önceden hazır tutarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bölgeye teslimat süresini belirleyen etkenler",
                paragraflar: [
                    "Aşağıdaki tablo, Samsun liman ve gıda sanayi bölgesine teslimat süresini etkileyen başlıca etkenleri ve bunların pratikteki karşılığını özetler.",
                ],
                tablo: {
                    basliklar: ["Etken", "Etkisi", "Bizim yaklaşımımız"],
                    satirlar: [
                        ["Gümrüklü saha onayı", "1-birkaç gün ek süre", "Evrak süreci erken başlatılır"],
                        ["Hava koşulu (yağış)", "Saat kayması", "Açık kasada su geçirmez örtü, esnek saat"],
                        ["Fabrika vardiya yoğunluğu", "Trafik ve hijyen kontrolü", "Vardiya değişim saatine yerleştirme"],
                        ["Servis girişi genişliği", "Araç tipi seçimi", "Ölçü teslimattan önce doğrulanır"],
                    ],
                },
            },
            {
                baslik: "Birden fazla tesisin teslimatı paylaşması",
                paragraflar: [
                    "Liman çevresindeki gıda ve tütün tesisleri birbirine yakın konumlandığı için, aynı hafta içinde iki veya üç tesisin teslimat tarihini birleştirmek nakliye maliyetini düşürür. Bu model özellikle küçük ve orta ölçekli işletmelerde tercih edilir. Paylaşımlı teslimatta her tesis kendi teklifini ve kendi teslim tutanağını alır; ortak olan yalnızca bölgeye giriş-çıkış kalemidir.",
                    "Büyük ölçekli tek bir sahaya yapılan teslimatlarda ise paylaşım genellikle gerekmez, çünkü araç zaten tek noktaya tam kapasiteyle yönlendirilir.",
                ],
            },
            {
                baslik: "Teslim tutanağı ve saha kayıt uyumu",
                paragraflar: [
                    "Gümrüklü veya gıda üretimi yapılan bir sahada teslimat, yalnızca makinenin bırakılmasından ibaret değildir. Makinenin seri numarası, giriş saati ve varsa hijyen kontrol notu, işletmenin kendi kayıt sistemine uyumlu bir tutanakla teslim edilir. Bu, ilerleyen bir denetimde makinenin sahada ne zaman ve hangi koşulda bulunduğunun net olmasını sağlar.",
                    "Aynı tutanak, kiralama süresi bittiğinde makinenin çıkışında da tekrarlanır; böylece giriş-çıkış kaydı eksiksiz kalır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gümrüklü sahaya teslimat ne kadar sürede planlanır?",
                cevap:
                    "Sahanın kendi güvenlik onay süresine bağlıdır; bazı işletmelerde aynı gün, bazılarında birkaç gün sürebilir. Bu belirsizlik yüzünden gümrüklü sahaya giden teslimatlarda planlamayı işin başlangıcından günler önce başlatmanızı öneririz. Evrak süreci tamamlanmadan araç yola çıkarılmaz, bu yüzden erken başlamak toplam süreyi kısaltan tek gerçek etkendir.",
            },
            {
                soru: "Yağmurlu havada teslimat iptal olur mu?",
                cevap:
                    "İptal olmaz, saat değişebilir. Açık kasalı taşımada makine su geçirmez örtüyle kapatılır; şiddetli sağanak beklenen saatlerde teslimat günün daha sakin bir dilimine kaydırılır. Karadeniz kıyısında hava gün içinde birkaç kez değişebildiği için bu esnekliği baştan teklife dahil ederiz.",
            },
            {
                soru: "Fabrika üretim saatlerinde teslimat yapılabilir mi?",
                cevap:
                    "Yapılabilir ama tercih etmeyiz; vardiya yoğunluğu hem araç trafiğini hem hijyen kontrol noktalarını zorlar. Mümkünse teslimatı vardiya değişim aralığına veya üretimin görece sakin olduğu saate yerleştiririz. Bu saat bilgisini işletmeden önceden alırız, böylece hem üretim aksamaz hem teslimat gecikmez.",
            },
            {
                soru: "Birden fazla tesise aynı hafta teslimat yapabilir misiniz?",
                cevap:
                    "Evet, liman çevresindeki tesisler birbirine yakın olduğu için bu sık uyguladığımız bir modeldir. Aynı hafta içindeki iki veya üç teslimatı birleştirmek nakliye maliyetini düşürür. Her tesis kendi teklifini ve teslim tutanağını ayrı alır; aralarında ticari bir bağ oluşmaz, yalnızca araç güzergâhı ortaklaşır.",
            },
            {
                soru: "Acil arıza durumunda ne kadar hızlı teslimat yapılır?",
                cevap:
                    "Üretim veya yükleme durma riski varsa yedek makine teslimatını öncelikli sıraya alırız. Gümrüklü sahalarda hız, büyük ölçüde giriş evrakının hazır olup olmadığına bağlıdır; uzun süreli çalıştığımız tesislerde bu evrak şablonunu önceden hazır tutarız, böylece acil durumda kaybedilen tek şey araç yol süresi olur.",
            },
            {
                soru: "Teslimat sırasında hangi kayıtlar tutulur?",
                cevap:
                    "Makinenin seri numarası, giriş saati ve varsa hijyen kontrol notu bir teslim tutanağına işlenir; bu, işletmenin kendi kayıt sistemiyle uyumlu tutulur. Kiralama süresi bittiğinde çıkışta aynı tutanak tekrarlanır. Bu düzen özellikle gümrüklü veya gıda üretimi yapılan sahalarda, ilerleyen bir denetimde makinenin sahada ne zaman bulunduğunun net kalmasını sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman bölgesinin gümrüklü saha yapısı ve Karadeniz'in değişken yağış rejimi kamuya açık genel bilgidir; teslimat planlaması, evrak süreci ve paylaşımlı nakliye modeli firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Samsun Antrepo ve Konteyner Sahasında Forklift ve İstifleme Kiralama",
        giris:
            "Liman çevresindeki antrepo ve gıda depolarında yük hareketi, yükseğe erişimden çok yatay ve dikey istifleme etrafında döner: paletli çuval, kasa veya konteyner içi yük, raf sistemine belirli bir düzenle yerleştirilir ve bu düzen depo kapasitesini doğrudan belirler. Forklift burada hem sahanın günlük operasyonunun omurgası hem de mevsimsel yoğunluğun karşılandığı temel araçtır; tahıl hasadı veya tütün sezonu gibi dönemlerde depo trafiği kısa sürede katlanabilir ve mevcut filo yetersiz kalabilir. Biz bu tabloya, kısa süreli ek kapasite ihtiyacında devreye giren esnek bir forklift kiralama hizmetiyle karşılık veriyoruz. Liman ve gümrüklü sahalarda çalışırken de aynı giriş kuralları geçerlidir: operatör ve makine bilgisi önceden bildirilir, zemin ve yük tipi teslimat öncesi netleştirilir. Bu sayfada hangi iş kalemlerinde hangi forklift sınıfını önerdiğimizi, sezonluk yoğunlukta kapasiteyi nasıl artırdığımızı ve gümrüklü sahaya giriş sürecini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Antrepo içi palet istifleme",
                metin:
                    "Kapalı antrepo hacimlerinde koridor genişliği ve raf yüksekliği forklift sınıfını belirleyen iki temel ölçüdür. Dar koridorlu depolarda dar gövdeli, dar döngülü modeller tercih edilir; geniş koridorlu depolarda ise standart dizel veya elektrikli forklift yeterli olur. Kapalı hacimde egzoz birikimi sorun yaratabileceği için mümkün olduğunda elektrikli sınıf önerilir.",
            },
            {
                baslik: "Konteyner sahasında yükleme-boşaltma",
                metin:
                    "Liman çevresindeki konteyner sahalarında yük genellikle daha ağır ve daha büyük ölçülüdür; bu işler için daha yüksek kapasiteli forklift modelleri kullanılır. Zemin genellikle beton veya sıkıştırılmış dolgu olduğundan taşıma kapasitesi kadar zemin uygunluğu da teklif öncesi değerlendirilir. Yükleme sırası, saha trafiğine göre işletmeyle birlikte planlanır.",
            },
            {
                baslik: "Tahıl ve çuval yükünde istifleme",
                metin:
                    "Çuvallı tahıl veya un ürünü istiflemede yükün kayma riski standart paletli yüke göre daha yüksektir; bu yüzden çatal aparatı ve istif yüksekliği ürünün özelliğine göre ayarlanır. Toz oluşan sahalarda hava filtresi ve motor bakımı daha sık kontrol edilir. İstif düzeni, depo işletmesinin kendi yerleşim planına göre önceden belirlenir.",
            },
            {
                baslik: "Sezonluk yoğunlukta ek kapasite",
                metin:
                    "Tahıl hasadı veya tütün toplama dönemlerinde depo trafiği kısa sürede artar ve mevcut forklift filosu yetersiz kalabilir. Bu dönemlerde kısa süreli ek forklift kiralamak, işletmenin kendi filosunu büyütmeden yoğunluğu karşılamasını sağlar. Talebi mümkünse sezon başlamadan birkaç hafta önce almayı öneririz, çünkü yoğun dönemde bölgedeki tüm işletmelerin talebi aynı anda yükselir.",
            },
            {
                baslik: "Operatörlü ve operatörsüz seçenek",
                metin:
                    "Kısa süreli veya sezonluk kiralamada operatörlü seçenek tercih edilir, çünkü işletmenin kendi personelini eğitmesine gerek kalmaz. Uzun süreli ve düzenli kullanımda ise operatörsüz kiralama, işletmenin kendi vardiya planına göre esnek kullanım sağlar. Operatörsüz seçenekte kullanacak personelin yetkinlik belgesi teslimat öncesi kontrol edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yük tipine göre forklift sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, liman ve gıda sanayi bölgesinde en sık karşılaştığımız yük tiplerini ve önerdiğimiz forklift sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Yük tipi", "Saha", "Belirleyici etken", "Önerilen sınıf"],
                    satirlar: [
                        ["Palet üzeri kutu/kasa", "Antrepo, gıda deposu", "Koridor genişliği", "Dar gövdeli elektrikli"],
                        ["Konteyner yükü", "Liman sahası", "Ağırlık, zemin", "Yüksek kapasiteli dizel"],
                        ["Çuvallı tahıl/un", "Silo, tarım deposu", "Kayma riski, toz", "Standart, çatal aparatlı"],
                        ["Soğuk depo paleti", "Gıda soğuk depo", "Düşük sıcaklık", "Elektrikli, soğuğa uygun"],
                    ],
                },
            },
            {
                baslik: "Zemin ve saha koşulunun makine seçimine etkisi",
                paragraflar: [
                    "Liman çevresindeki sahaların zemini her zaman düzgün beton değildir; bazı dolgu alanlarında yağış sonrası geçici yumuşama görülür. Bu tip zeminlerde lastik seçimi ve taşıma yükü, standart beton zemine göre daha temkinli belirlenir. Zemin durumu belirsizse teslimat öncesi kısa bir saha kontrolü yapılır.",
                    "Kapalı antrepo tarafında ise zemin genellikle sabittir, burada belirleyici olan koridor genişliği ve raf düzenidir; bu ölçüler teklif aşamasında işletmeden istenir.",
                ],
            },
            {
                baslik: "Gümrüklü sahaya forklift girişi",
                paragraflar: [
                    "Gümrüklü antrepo veya liman sahasına forklift girişi de diğer makineler gibi işletmenin kendi güvenlik onayına tabidir. Operatör kimlik bilgisi ve makinenin periyodik kontrol raporu önceden iletilir. Bu süreç sahaya göre değişebileceği için, sezonluk yoğun taleplerde evrak sürecini erken başlatmak teslimat gecikmesini önleyen en etkili adımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dar koridorlu antrepoda hangi forklift kullanılır?",
                cevap:
                    "Koridor genişliği standart bir forklifte yetmiyorsa dar gövdeli, dar döngülü elektrikli modeller tercih edilir. Bu modeller aynı taşıma kapasitesini daha az dönüş alanıyla sağlar. Koridor ölçüsünü ve raf yüksekliğini bildirdiğinizde, depo düzenine en uygun sınıfı teklif aşamasında belirleriz.",
            },
            {
                soru: "Sezon yoğunluğunda kaç günde ek forklift temin edilir?",
                cevap:
                    "Talebi ne kadar erken alırsak o kadar hızlı karşılarız; sezon başlamadan birkaç hafta önce gelen talepler genellikle sorunsuz planlanır. Sezonun tam ortasında gelen ani taleplerde ise bölgedeki tüm işletmelerin talebi aynı anda yükseldiği için bekleme süresi uzayabilir. Bu yüzden sezonluk ihtiyacı mümkünse önceden bildirmenizi öneririz.",
            },
            {
                soru: "Konteyner sahasında zemin forklift için uygun mu kontrol ediliyor mu?",
                cevap:
                    "Evet, özellikle dolgu zeminli sahalarda yağış sonrası geçici yumuşama görülebildiği için zemin durumu teslimat öncesi değerlendirilir. Belirsiz durumlarda kısa bir saha kontrolü yapılır ve taşıma yükü buna göre temkinli belirlenir. Bu kontrol, hem makinenin hem yükün güvenliği için atlanmayan bir adımdır.",
            },
            {
                soru: "Operatörlü mü operatörsüz mü tercih etmeliyim?",
                cevap:
                    "Kısa süreli veya sezonluk ihtiyaçta operatörlü seçenek genellikle daha pratiktir, çünkü personel eğitimi gerekmez. Uzun süreli ve düzenli kullanımda operatörsüz kiralama işletmenin kendi vardiya planına daha esnek uyar. Operatörsüz seçilirse, kullanacak personelin yetkinlik belgesi teslimat öncesi kontrol edilir.",
            },
            {
                soru: "Çuvallı tahıl yükünde özel bir önlem alıyor musunuz?",
                cevap:
                    "Evet, çuvallı yükün kayma riski paletli yüke göre daha yüksektir; bu yüzden çatal aparatı ve istif yüksekliği ürüne göre ayarlanır. Toz oluşan sahalarda hava filtresi ve motor bakımını daha sık kontrol ederiz. İstif düzeni, depo işletmesinin yerleşim planına göre önceden netleştirilir.",
            },
            {
                soru: "Gümrüklü sahaya forklift girişi ne kadar sürer?",
                cevap:
                    "Süre işletmenin kendi güvenlik onay sürecine bağlıdır; bazı sahalarda aynı gün, bazılarında birkaç gün sürebilir. Operatör kimlik bilgisi ve periyodik kontrol raporunu önceden iletiriz, bu evrak hazırsa sürecin büyük kısmı kısalır. Sezonluk yoğun taleplerde bu evrak sürecini erken başlatmak, teslimat gecikmesini önleyen en pratik yoldur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman ve tarım bölgesinde tahıl-tütün sezonluk yoğunluğu ile gümrüklü saha giriş kuralı kamuya açık genel bilgidir; forklift sınıf seçimi ve zemin değerlendirmesi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Samsun Liman Silosu ve Konveyör Hattında Eklemli Platform (Boom) Kiralama",
        giris:
            "Liman sahasındaki tahıl silosu, dökme yük konveyörü ve yükleme köprüsü gibi yapılar, yatay uzanımı ve yanal manevrayı gerektiren bir erişim düzeni yaratır — dikey yükseklik tek başına yetmez, sepetin gövdeyi çevreleyerek veya hattın kenarından ilerleyerek hedef noktaya yaklaşması gerekir. Eklemli bomlu platform tam olarak bu iş için tasarlanmıştır: bomun eklem noktaları sepedin engel üzerinden geçmesine, ardından aşağı-yukarı ve yana doğru ince ayar yapmasına izin verir. Liman çevresinde bu makineyi en çok silo dış gövdesi, konveyör taşıyıcı ayakları ve yükleme köprüsü altı bakımında kullanıyoruz. Tuzlu deniz havasının çelik yüzeydeki korozyon etkisi, bu tip yapılarda bakım sıklığını iç bölgeye göre artırır; bu yüzden eklemli platformun yanal erişim esnekliği, hem hızlı hem kapsamlı bir kontrol turu yapmayı mümkün kılar. Bu sayfada bomlu platformun silo ve konveyör hatlarında nasıl konumlandığını, hangi bakım kalemlerinde öne çıktığını ve rüzgâr sınırının çalışmayı nasıl etkilediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Silo dış gövdesinde dairesel erişim",
                metin:
                    "Dairesel gövdeli silo yapılarında bom, gövdeyi çevreleyerek dilim dilim ilerler; her dilimde kaynak dikişi kontrolü, boya yenileme veya merdiven-korkuluk onarımı yapılır. Gövde çapı ve yüksekliği önceden bilindiğinde bom uzunluğu buna göre seçilir, gereğinden kısa bir bom işin ortasında yetersiz kalabilir.",
            },
            {
                baslik: "Konveyör taşıyıcı ayaklarında bakım",
                metin:
                    "Rıhtımdan ambara uzanan konveyör hatları, taşıyıcı ayaklar üzerinde yükselir ve bakımı yerden erişilemeyecek kotta kalır. Eklemli bom, ayaklar arasındaki dar boşluğa sepetle yaklaşabildiği için iskele kurmadan kayış hizası ve tambur yatağı kontrolü yapılabilir. Hat çalışırken yapılacak işler, hangi dilimin durdurulacağı önceden belirlenerek planlanır.",
            },
            {
                baslik: "Yükleme köprüsü altı ve gövde bağlantıları",
                metin:
                    "Yükleme köprülerinin alt yüzeyi ve bağlantı noktaları düzenli korozyon kontrolü ister; bu bölgeler genellikle sabit bir merdivenle ulaşılamayacak kadar dar ve alçaktır. Bomun yatay uzanımı, sepedin köprü altına yandan girip bağlantı noktalarına yakın mesafeden bakmasını sağlar. Deniz suyuna yakın çalışmalarda makinenin elektrik bağlantıları ayrıca sızdırmazlık açısından kontrol edilir.",
            },
            {
                baslik: "Korozyon nokta onarımında yakın erişim",
                metin:
                    "Bağlantı cıvatalarının dip kısmı ve kaynak ağzı, tuzlu havada ilk yorulan noktalardır. Eklemli bom, sepedi bu noktalara doğrudan ve sabit bir açıyla yaklaştırabildiği için nokta temizliği ve boya uygulaması hassas biçimde yapılabilir. Yüzey nemliyse uygulama ertelenir, çünkü nemli yüzeye yapılan boya birkaç ay içinde kabarma olarak geri döner.",
            },
            {
                baslik: "Rüzgârlı sahada bom yönetimi",
                metin:
                    "Liman sahası açık bir alan olduğu için rüzgâr hızı iç bölgeye göre daha değişkendir; bom uzunluğu arttıkça rüzgâr etkisi de katlanır. Üretici kataloğundaki rüzgâr sınırı sahada tartışılmaz bir eşiktir, sınır aşıldığında bom toplanır ve çalışma durdurulur. Bu kararı işin bitirilme baskısı değil, ölçülen rüzgâr hızı belirler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapı tipine göre bom uzunluğu ve kapasite",
                paragraflar: [
                    "Aşağıdaki tablo, liman çevresindeki yapı tiplerini ve bu yapılarda tercih ettiğimiz bom uzunluğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "İş kalemi", "Bom uzunluğu", "Rüzgâr duyarlılığı"],
                    satirlar: [
                        ["Tahıl silosu", "Gövde boyası, kaynak kontrolü", "20-28 m", "Yüksek"],
                        ["Konveyör hattı", "Taşıyıcı ayak bakımı", "16-22 m", "Orta"],
                        ["Yükleme köprüsü", "Alt yüzey korozyon", "18-24 m", "Yüksek"],
                        ["Ambar çatı çelik konstrüksiyon", "Genel bakım", "14-20 m", "Orta"],
                    ],
                },
            },
            {
                baslik: "Bom seçiminde önceden bilinmesi gereken ölçüler",
                paragraflar: [
                    "Doğru bom uzunluğunu belirlemek için üç ölçü yeterlidir: hedef noktanın yerden yüksekliği, makinenin konumlanabileceği en yakın noktadan hedefe olan yatay uzaklık ve varsa aradaki engel yüksekliği. Bu üç ölçü teklif aşamasında istenir; eksik veya tahmini verilen ölçü, sahada yetersiz kalan bir makine göndermemize yol açabilir.",
                    "Liman sahasında engel genellikle komşu ekipman veya boru hattı olur; bu engellerin konumu fotoğrafla paylaşıldığında bom açısı önceden planlanabilir.",
                ],
            },
            {
                baslik: "Deniz kenarı makinelerinde ek bakım rutini",
                paragraflar: [
                    "Kıyı sahasından dönen eklemli platformlarda tuz ve nem etkisini azaltmak için gövde yıkaması, hidrolik hortum kontrolü ve elektrik panosu sızdırmazlık kontrolü rutin dönüş bakımına eklenir. Uzun süreli kiralamalarda bu kontroller saha içinde periyodik olarak tekrarlanır, böylece haftalarca kıyıda kalan bir makine arıza riskiyle işi aksatmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo gövdesinin tamamını tek makine ile dolaşabilir misiniz?",
                cevap:
                    "Bom uzunluğu ve gövde çapı uygunsa evet, makine gövdeyi çevreleyerek dilim dilim ilerler ve tek kiralama süresinde tüm çevreyi kapsayabilir. Gövde çapı büyükse veya makinenin konumlanabileceği alan sınırlıysa, birden fazla konumlanma noktası gerekebilir. Gövde ölçüsünü önceden bildirdiğinizde bunu teklif aşamasında netleştiririz.",
            },
            {
                soru: "Konveyör hattı çalışırken bom ile bakım yapılabilir mi?",
                cevap:
                    "Hattın hareketli parçasına yakın noktalarda hayır, o dilimin durdurulması gerekir. Taşıyıcı ayak boyası veya yeterince uzak aydınlatma gibi kalemler ise hat çalışırken güvenli mesafe ve bariyerle yapılabilir. Hangi bölümün durdurulacağı iş öncesi işletmeyle birlikte netleştirilir ve bu netlik olmadan sepet kaldırılmaz.",
            },
            {
                soru: "Rüzgârlı günde iş tamamen iptal mi olur?",
                cevap:
                    "Genellikle hayır, gün içinde rüzgârın düştüğü pencereler değerlendirilir. Ancak ölçülen rüzgâr hızı üretici sınırını aştığında bom toplanır ve o an için çalışma durur; bu karar tartışılmaz bir güvenlik eşiğidir. Uzun süreli işlerde takvime bu tür beklemeler için pay eklenir.",
            },
            {
                soru: "Doğru bom uzunluğunu nasıl belirliyorsunuz?",
                cevap:
                    "Hedef noktanın yerden yüksekliği, makinenin konumlanabileceği en yakın noktaya olan yatay uzaklık ve varsa aradaki engel yüksekliği yeterlidir. Bu üç ölçü net verildiğinde doğru bom uzunluğunu teklif aşamasında belirleriz. Ölçü belirsizse yerinde kısa bir keşif önerilir, çünkü yetersiz bom sahada zaman kaybettirir.",
            },
            {
                soru: "Deniz kenarında çalışan makineye ek bakım yapıyor musunuz?",
                cevap:
                    "Evet, kıyı sahasından dönen makinelerde tuz ve nem etkisini azaltmak için gövde yıkaması, hidrolik hortum kontrolü ve elektrik panosu sızdırmazlık kontrolü rutin dönüş bakımına eklenir. Uzun süreli kiralamalarda bu kontroller saha içinde periyodik tekrarlanır. Bu, kıyıda haftalarca kalan bir makinenin arıza riskini düşürür.",
            },
            {
                soru: "Yükleme köprüsü altına iskele kurmadan erişim mümkün mü?",
                cevap:
                    "Mümkün, bu tür dar ve alçak alanlar zaten eklemli bomun en güçlü olduğu erişim tipidir. Bomun yatay uzanımı sepedi köprü altına yandan sokar ve bağlantı noktalarına yakın mesafeden ulaştırır. İskele kurulumu ve sökümü için harcanacak süre böylece tamamen ortadan kalkar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun limanındaki silo, konveyör ve yükleme köprüsü yapılarının varlığı ve kıyı korozyonu kamuya açık genel bilgidir; bom uzunluğu seçimi ve rüzgâr yönetimi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Samsun Gıda Üretim Hattı ve Depo İçinde Platform Kiralama",
        giris:
            "Gıda ve tütün işleme tesislerinin üretim hattı ve depo iç mekânları, hijyen kuralı ile üretim takviminin iç içe geçtiği bir çalışma ortamı sunar. Tavan altı aydınlatma, havalandırma kanalı, yangın algılama başlığı ve boru hattı gibi kalemler düzenli bakım ister, ancak bu bakım üretim durmadan veya hijyen kaydı bozulmadan yapılmak zorundadır. Kapalı hacimde egzoz gazı kabul edilmediği için akülü sınıf makine standart tercihtir; zemin genellikle epoksi veya beton kaplı olduğundan iz bırakmayan lastik seçimi de aynı şekilde standarttır. Liman çevresindeki depo ve fabrikalarda üretim genellikle vardiyalı çalışır, bu yüzden bakım saatinin vardiya değişim aralığına veya üretimin görece sakin olduğu dilime yerleştirilmesi hem işletme hem bizim için en pratik çözümdür. Bu sayfada iç mekân platform kiralamasında hangi hazırlıkların yapıldığını, hijyen kısıtının nasıl karşılandığını ve üretim takvimiyle nasıl uyumlu çalışıldığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Üretim hattı üzerinde tavan bakımı",
                metin:
                    "Üretim hattının üzerindeki aydınlatma ve havalandırma kanalı, hat çalışırken erişilmesi zor bir kottadır. Akülü makaslı veya dikey platform, hattın kenarından yaklaşarak bu kalemlere ulaşır; hat durdurulmadan yapılabilecek işler önceden üretim şefiyle belirlenir. Egzoz gazı üretmediği için kapalı hacimde uzun süreli çalışma da mümkündür.",
            },
            {
                baslik: "Soğuk depo ve raf üstü havalandırma",
                metin:
                    "Soğuk depolarda havalandırma ve soğutucu ünite bakımı, düşük sıcaklığa uygun makine seçimini gerektirir. Hidrolik akışkanın düşük sıcaklıkta yoğunlaşması işe başlamadan önce hesaba katılır, makineye kısa bir ısınma süresi tanınır. Raf düzeni bozulmadan çalışabilmek için dar gövdeli modeller tercih edilir.",
            },
            {
                baslik: "Yangın algılama ve söndürme sistemi kontrolü",
                metin:
                    "Gıda üretim tesislerinde yangın algılama başlıkları ve söndürme sistemi düzenli periyodik kontrol ister. Bu kontrol genellikle tesisin kendi yangın güvenlik danışmanıyla koordineli yürütülür; platform, kontrol ekibinin başlığa yakın mesafeden ulaşmasını sağlar. Kontrol sırasında üretim alanı geçici olarak sınırlı bir bölümde durdurulabilir.",
            },
            {
                baslik: "Boru hattı ve tesisat bakımı",
                metin:
                    "Üretim hattı üzerindeki buhar, su veya basınçlı hava boru hatları zamanla sızdırmazlık kaybı yaşayabilir. Bu hatlara erişim genellikle dar ve ekipman yoğun bir bölgeden geçer; platform, hattın altından veya yanından yaklaşarak iskele kurmadan kontrolü mümkün kılar. Sızıntı tespit edilirse ilgili teknik ekiple birlikte müdahale planlanır.",
            },
            {
                baslik: "Hijyen kısıtına uygun makine hazırlığı",
                metin:
                    "Gıda üretim alanına giren her makine, tekerlek temizliği ve yağ sızıntı kontrolünden geçirilir. Çalışma alanının altına koruma örtüsü serilir, iş bitiminde bölge işletme yetkilisiyle birlikte kontrol edilerek teslim edilir. Bu hazırlık, işletmenin kendi hijyen kayıt sistemini bozmadan sürdürebilmesi için standart uygulamamızdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân tipine göre makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, gıda ve tütün işleme tesislerinde en sık çalıştığımız iç mekân tiplerini ve tercih ettiğimiz makine sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Mekân tipi", "Baskın iş kalemi", "Belirleyici ölçü", "Tercih edilen sınıf"],
                    satirlar: [
                        ["Üretim hattı üzeri", "Aydınlatma, havalandırma", "Hat genişliği", "Akülü makaslı / dikey"],
                        ["Soğuk depo", "Soğutucu ünite bakımı", "Düşük sıcaklık", "Akülü, ısınma paylı"],
                        ["Boru/tesisat koridoru", "Sızdırmazlık kontrolü", "Koridor genişliği", "Dar gövdeli akülü"],
                        ["Genel depo tavanı", "Yangın sistemi kontrolü", "Raf yerleşimi", "Standart akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Üretim takvimiyle uyumlu çalışma saati",
                paragraflar: [
                    "Vardiyalı çalışan tesislerde bakım saatini üretimin en az yoğun olduğu dilime yerleştirmek, hem hattın verimini korur hem çalışma güvenliğini artırır. Bu bilgiyi işletmeden önceden alır, bakım gününü buna göre planlarız. Ani bir arıza durumunda ise üretim durma riski varsa öncelikli sıraya geçeriz.",
                    "Uzun süreli bakım anlaşmalarında periyodik kontrol takvimi, tesisin kendi üretim planıyla birlikte önceden bir yıllık olarak kurulabilir; böylece her seferinde yeniden saat aramak gerekmez.",
                ],
            },
            {
                baslik: "Egzozsuz çalışmanın kapalı hacimdeki önemi",
                paragraflar: [
                    "Kapalı üretim hacminde egzoz gazı birikimi hem çalışan sağlığı hem gıda güvenliği açısından kabul edilemez; bu yüzden iç mekân işlerinde akülü sınıf dışına çıkılmaz. Akülü makinelerin şarj durumu, uzun süren işlerde önceden planlanır, gerekirse iş molası şarj süresine denk getirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim hattı çalışırken tavan bakımı yapılabilir mi?",
                cevap:
                    "Hattın hemen üzerinde yapılacak işlerde genellikle hattın o dilimi kısa süreli durdurulur. Hat dışındaki aydınlatma veya kanal işlerinde ise güvenli mesafe korunarak üretim sürerken çalışılabilir. Hangi yöntemin uygulanacağı üretim şefiyle iş öncesi netleştirilir, bu netlik olmadan çalışmaya başlanmaz.",
            },
            {
                soru: "Kapalı hacimde neden yalnızca akülü makine kullanıyorsunuz?",
                cevap:
                    "Egzoz gazı birikimi kapalı hacimde hem çalışan sağlığını hem gıda güvenliğini tehdit eder, bu yüzden iç mekân işlerinde akülü sınıf dışına çıkmayız. Uzun süren işlerde şarj durumu önceden planlanır; gerekirse iş molası şarj süresine denk getirilir. Bu kural istisnasız uygulanır.",
            },
            {
                soru: "Makine gıda üretim alanına girerken hijyen açısından ne yapılıyor?",
                cevap:
                    "Tekerlekler sahaya girmeden temizlenir, hidrolik hortum bağlantıları yağ sızıntısı açısından kontrol edilir ve çalışma alanının altına koruma örtüsü serilir. İş bitiminde bölge işletme yetkilisiyle birlikte kontrol edilerek teslim edilir. Bu adımlar işletmenin kendi hijyen kayıt sistemini bozmadan sürdürmesi için atlanmaz.",
            },
            {
                soru: "Soğuk depoda makinenin çalışmaya başlaması ne kadar sürer?",
                cevap:
                    "Düşük sıcaklıkta hidrolik akışkan yoğunlaştığı için makineye kısa bir ısınma süresi tanınır; bu süre işe başlamadan önce planlamaya dahil edilir. Isınma tamamlanmadan tam kapasite çalışma istenmez, çünkü bu hem performansı hem parça ömrünü olumsuz etkiler.",
            },
            {
                soru: "Yangın algılama sistemi kontrolü sırasında üretim durur mu?",
                cevap:
                    "Genellikle tamamen durmaz, kontrol yapılan bölüm geçici olarak sınırlı tutulur. Kontrol tesisin kendi yangın güvenlik danışmanıyla koordineli yürütülür ve platform ekibin başlığa yakın mesafeden ulaşmasını sağlar. Bölümün ne zaman ve ne kadar süreyle sınırlanacağı iş öncesi üretim şefiyle netleştirilir.",
            },
            {
                soru: "Boru hattındaki sızıntı tespit edilirse ne yapılıyor?",
                cevap:
                    "Sızıntı platform üzerinden tespit edildiğinde doğrudan müdahale etmeyiz; bulgu, tesisin ilgili teknik ekibine iletilir ve müdahale birlikte planlanır. Bizim rolümüz erişim ve tespiti kolaylaştırmaktır, boru hattı üzerindeki onarım yetkisi tesisin kendi teknik sorumluluğunda kalır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun'daki gıda ve tütün işleme tesislerinin vardiyalı üretim düzeni ve hijyen kısıtı kamuya açık genel bilgidir; makine hazırlığı ve çalışma saati planlaması firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Samsun Liman Ambarı ve Depo Ek Binasında Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Liman çevresindeki ambar, antrepo ve gıda işleme tesislerinde kapasite artışı genellikle mevcut yapıya ek bir hol veya depo bölümü eklenmesiyle karşılanır; bu inşaat sırasında çelik konstrüksiyon montajı, kaynak ve cıvata bağlantı kontrolü, yükseklikte sürekli erişim ister. Platform kiralama burada iskele kurulumuna göre hem daha hızlı hem daha esnek bir seçenektir: montaj ilerledikçe sepet bir sonraki bağlantı noktasına dakikalar içinde taşınabilir, iskelede olduğu gibi her seferinde sökme-kurma gerekmez. Kıyı bölgesinde çalıştığımız için burada da tuzlu havanın çelik üzerindeki etkisi göz önünde tutulur; yeni montaj edilen elemanların koruyucu kaplaması, kurulum tamamlanır tamamlanmaz kontrol edilir. Bu sayfada çelik konstrüksiyon montajının farklı aşamalarında platformun nasıl kullanıldığını, inşaat trafiğiyle nasıl uyum sağlandığını ve hava koşulunun montaj takvimine etkisini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Çatı kirişi ve aşık montajında erişim",
                metin:
                    "Ek bina inşaatında çatı kirişleri ve aşıklar önce yerden monte edilip vinçle yukarı kaldırılır, ardından bağlantı noktaları yükseklikte cıvatalanır. Platform, montaj ekibinin bu bağlantı noktalarına güvenli ve sabit bir konumdan ulaşmasını sağlar. Kiriş aralığı dar olduğunda dar gövdeli model tercih edilir.",
            },
            {
                baslik: "Kaynak dikişi ve bağlantı kontrolü",
                metin:
                    "Montaj tamamlandıktan sonra kaynak dikişlerinin ve cıvata sıkma torklarının kontrolü, kalite güvence sürecinin bir parçasıdır. Platform, kontrol mühendisinin her bağlantı noktasına yakın mesafeden bakmasını sağlar; bu kontrol genellikle montaj ekibinin bir sonraki bölüme geçtiği saatlerde, iş akışını kesmeden yapılır.",
            },
            {
                baslik: "Cephe kaplama ve panel montajı",
                metin:
                    "Ambar veya depo dış cephesinin sac panel kaplaması, geniş yüzeyli parçaların yükseklikte hizalanmasını gerektirir. Rüzgârlı sahada bu parçalar yelken etkisi yarattığı için taşıma sakin saatlere planlanır; gerekirse panel ayrı vinçle taşınır, sepet yalnızca hizalama ve sabitleme için kullanılır.",
            },
            {
                baslik: "Koruyucu kaplama kontrolü",
                metin:
                    "Yeni monte edilen çelik elemanların galvaniz veya boya kaplaması, kurulum sırasında oluşabilecek çizik ve hasar açısından kontrol edilir. Kıyı bölgesinde bu kontrol iç bölgeye göre daha titiz yapılır, çünkü küçük bir kaplama hasarı tuzlu havada kısa sürede korozyona dönüşebilir.",
            },
            {
                baslik: "İnşaat trafiğiyle uyumlu konumlanma",
                metin:
                    "Aktif bir inşaat sahasında vinç, malzeme aracı ve montaj ekibi aynı anda hareket eder; platformun konumlanacağı nokta bu trafiğe göre önceden belirlenir. Vinç kaldırma alanına girmeyecek, ama montaj noktasına yeterince yakın bir konum, saha şefiyle birlikte her gün yeniden değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşamasına göre platform sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, ek bina inşaatının farklı aşamalarında tercih ettiğimiz platform sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "İş kalemi", "Önerilen sınıf", "Hava duyarlılığı"],
                    satirlar: [
                        ["Çatı kirişi montajı", "Bağlantı cıvatalama", "Eklemli 18-24 m", "Yüksek (rüzgâr)"],
                        ["Kaynak/bağlantı kontrolü", "Kalite kontrol", "Eklemli 16-20 m", "Orta"],
                        ["Cephe panel montajı", "Hizalama, sabitleme", "Teleskopik 20-26 m", "Yüksek (rüzgâr, panel)"],
                        ["Kaplama kontrolü", "Görsel inceleme", "Eklemli 14-18 m", "Düşük"],
                    ],
                },
            },
            {
                baslik: "İskele yerine platform tercih etme gerekçesi",
                paragraflar: [
                    "İskele, sabit bir bölgeye uzun süreli erişim gerektiğinde uygundur; ancak montaj noktası her gün değiştiğinde iskeleyi sürekli sökmek-kurmak zaman kaybettirir. Platform bu noktada montaj ilerlemesine ayak uydurur, sepet bir sonraki bağlantı noktasına dakikalar içinde taşınabilir.",
                    "Buna karşılık geniş bir yüzeyde uzun süre sabit durulacak işlerde (örneğin geniş bir kaplama alanının tamamı) iskele hâlâ daha ekonomik olabilir; hangi yöntemin uygun olduğunu iş kapsamına göre birlikte değerlendiririz.",
                ],
            },
            {
                baslik: "Rüzgârlı sahada montaj takvimi",
                paragraflar: [
                    "Kıyı bölgesindeki açık inşaat sahalarında rüzgâr hızı gün içinde değişkendir; geniş panel taşıma gibi rüzgâra duyarlı işler sakin saatlere planlanır. Üretici kataloğundaki rüzgâr sınırı aşıldığında bom toplanır, iş o an için durur. Montaj takvimine bu tür beklemeler için baştan pay eklenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İskele yerine platform kullanmak montaj süresini kısaltır mı?",
                cevap:
                    "Montaj noktası sık değişiyorsa evet, çünkü sepet bir sonraki bağlantı noktasına dakikalar içinde taşınır, iskelede olduğu gibi sökme-kurma gerekmez. Geniş bir alanda uzun süre sabit çalışılacaksa iskele hâlâ ekonomik olabilir. Hangi yöntemin işe uygun olduğunu montaj planına bakarak birlikte değerlendiririz.",
            },
            {
                soru: "Aktif inşaat sahasında platform vinçle çakışır mı?",
                cevap:
                    "Çakışmaması için platformun konumlanacağı nokta, vinç kaldırma alanının dışında ama montaj noktasına yeterince yakın olacak şekilde saha şefiyle her gün yeniden değerlendirilir. İnşaat trafiği günden güne değiştiği için bu konumlandırma sabit değil, günlük bir plan konusudur.",
            },
            {
                soru: "Rüzgârlı günde panel montajı ertelenir mi?",
                cevap:
                    "Geniş yüzeyli panellerin taşınması rüzgâra karşı hassastır, bu yüzden bu iş sakin saatlere planlanır. Rüzgâr üretici sınırını aştığında bom toplanır ve panel montajı durdurulur; gerekirse panel ayrı vinçle taşınır ve sepet yalnızca hizalama için kullanılır. Montaj takvimine bu beklemeler için pay eklenir.",
            },
            {
                soru: "Kaynak dikişi kontrolü montaj bitmeden yapılabilir mi?",
                cevap:
                    "Evet, kontrol genellikle montaj ekibinin bir sonraki bölüme geçtiği saatlerde, iş akışını kesmeden yapılır. Platform kontrol mühendisinin her bağlantı noktasına yakın mesafeden ulaşmasını sağlar. Kontrol sırası, montaj sırasına paralel olarak saha şefiyle birlikte planlanır.",
            },
            {
                soru: "Kıyı bölgesinde yeni monte edilen çelik için ek önlem var mı?",
                cevap:
                    "Evet, koruyucu kaplamanın kurulum sırasında hasar görüp görmediği kurulum tamamlanır tamamlanmaz kontrol edilir. Küçük bir kaplama hasarı tuzlu havada iç bölgeye göre çok daha hızlı korozyona dönüşebildiği için bu kontrol kıyı sahalarında daha titiz yapılır.",
            },
            {
                soru: "Dar kiriş aralığında platform manevra edebilir mi?",
                cevap:
                    "Kiriş aralığı darsa dar gövdeli model tercih edilir; bu ölçüyü önceden bildirdiğinizde teklif aşamasında uygun sınıfı belirleriz. Ölçü belirsizse veya sınırdaysa, işe başlamadan önce yerinde kısa bir değerlendirme öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman ve depo bölgesinde kapasite artışı amaçlı ek bina inşaatı ve kıyı korozyonu kamuya açık genel bilgidir; platform-iskele karşılaştırması ve saha trafiği koordinasyonu firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Samsun Kırsalında Tahıl Silosu ve Tarım Tesisi Platform Kiralama",
        giris:
            "Samsun'un liman ekonomisi, ardındaki geniş tarım havzasının ürününe dayanır; bu nedenle il çevresinde tahıl kurutma ve depolama tesisleri, kooperatif silo sahaları ve tarımsal işleme fabrikaları liman kadar önemli bir hizmet bölgesi oluşturur. Bu tesisler kentsel sahalardan farklı bir erişim ortamı sunar: zemin genellikle asfalt değil sıkıştırılmış toprak veya çakıldır, sahaya giriş yolu dar ve tozlu olabilir, mevsime göre zemin sertliği belirgin biçimde değişir. Yağışlı dönemde toprak zemin yumuşayabildiği için makinenin zemin uygunluğu teslimattan önce değerlendirilir. Silo yapıları ise liman sahasındaki gibi dairesel ve yüksek gövdelidir, ancak burada tarım sezonuna bağlı bir bakım takvimi devreye girer — hasat öncesi kontrol, hasat sonrası bakım gibi. Bu sayfada kırsal tarım tesislerinde platform kiralamanın hangi koşullara göre şekillendiğini, zemin değerlendirmesinin nasıl yapıldığını ve sezona bağlı bakım takvimini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Silo gövdesi hasat öncesi kontrolü",
                metin:
                    "Hasat sezonu başlamadan önce silo gövdesinin dış yüzeyi, merdiven-korkuluk bağlantıları ve üst kapak mekanizması kontrol edilir. Bu kontrol, sezonun en yoğun döneminde beklenmedik bir arızayla karşılaşmamak için önceden planlanır. Eklemli platform, gövdeyi çevreleyerek dilim dilim ilerler ve kontrolü tek seferde tamamlar.",
            },
            {
                baslik: "Kurutma tesisi baca ve fan bakımı",
                metin:
                    "Tahıl kurutma tesislerinde baca ve fan üniteleri, kurutma kapasitesini doğrudan etkileyen kritik ekipmandır. Bu üniteler genellikle bina üst kotunda, dar bir platform üzerinde bulunur; makinenin sepedi bu dar alana yandan yaklaşarak bakım yapılmasını sağlar. Kurutma sezonu öncesi bu bakım öncelikli olarak planlanır.",
            },
            {
                baslik: "Toprak ve çakıl zeminde manevra",
                metin:
                    "Kırsal tesislerin çoğunda saha zemini asfalt değildir; bu yüzden makinenin lastik tipi ve dingil basıncı zemine göre değerlendirilir. Yağışlı dönemde zemin yumuşayabileceği için teslimat öncesi kısa bir zemin kontrolü yapılır, gerekirse takoz veya plaka desteği kullanılır.",
            },
            {
                baslik: "Sera ve örtü altı tesislerinde aydınlatma bakımı",
                metin:
                    "Bölgedeki sera işletmelerinde iç aydınlatma ve havalandırma fanı bakımı, dar ve alçak tavan yapısı nedeniyle kompakt makine gerektirir. Sera örtüsüne zarar vermemek için makinenin geçiş güzergâhı önceden belirlenir ve gerekirse örtü kenarına koruma serilir.",
            },
            {
                baslik: "Hasat sonrası genel bakım turu",
                metin:
                    "Hasat sezonu bittikten sonra, yoğun kullanımın yarattığı yıpranmayı tespit etmek için silo ve kurutma tesisinde genel bir bakım turu yapılır. Bu tur, bir sonraki sezona hazır olmayı garanti altına alan bir kontrol niteliğindedir ve genellikle sezon dışı sakin dönemde planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tesis tipine göre zemin ve makine uyumu",
                paragraflar: [
                    "Aşağıdaki tablo, kırsal tarım tesislerinde en sık karşılaştığımız zemin tiplerini ve önerdiğimiz makine ayarını özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Zemin", "Belirleyici etken", "Önerilen sınıf"],
                    satirlar: [
                        ["Kooperatif silo sahası", "Sıkıştırılmış toprak", "Yağış sonrası yumuşama", "Geniş lastikli eklemli"],
                        ["Tahıl kurutma tesisi", "Beton platform", "Dar bina üstü erişim", "Eklemli, dar gövde"],
                        ["Sera / örtü altı", "Toprak, dar geçiş", "Örtü koruması", "Kompakt akülü makaslı"],
                        ["Açık tarla kenarı depo", "Çakıl / toprak", "Zemin sertliği", "Arazi tipi teleskopik"],
                    ],
                },
            },
            {
                baslik: "Sezona bağlı bakım takvimi",
                paragraflar: [
                    "Tarım tesislerinde bakım ihtiyacı yıl boyunca eşit dağılmaz; hasat öncesi ve hasat sonrası iki yoğun dönem oluşur. Hasat öncesi kontrol, sezonun ortasında beklenmedik arızayla karşılaşmamak için yapılır; hasat sonrası tur ise yoğun kullanımın yıpranmasını tespit eder. Bu iki dönemi önceden bildiğimiz için randevu takvimini buna göre erken kurarız.",
                    "Sezon dışı aylarda ise saha genellikle daha sakindir, bu da büyük kapsamlı işler için daha esnek bir çalışma penceresi sunar.",
                ],
            },
            {
                baslik: "Yağışlı dönemde zemin değerlendirmesi",
                paragraflar: [
                    "Toprak veya çakıl zeminli sahalarda yağış sonrası zemin sertliği belirgin biçimde değişebilir; bu durum makinenin batma veya kayma riskini artırır. Teslimattan önce zemin durumu değerlendirilir, gerekiyorsa geniş lastik veya destek plakası kullanılır. Zemin belirsizse iş, havanın nispeten kurak olduğu güne kaydırılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Toprak zeminde makine batma riski var mı?",
                cevap:
                    "Yağış sonrası yumuşayan zeminlerde bu risk artar, bu yüzden teslimattan önce zemin durumu değerlendirilir. Gerekirse geniş lastikli model veya destek plakası kullanılır. Zemin belirsizse iş, havanın nispeten kurak olduğu bir güne kaydırılması önerilir.",
            },
            {
                soru: "Hasat sezonunda bakım için ne kadar önceden randevu almalıyım?",
                cevap:
                    "Hasat öncesi dönemde bölgedeki tüm tesislerin bakım talebi aynı anda yükselir, bu yüzden mümkünse birkaç hafta önceden planlamanızı öneririz. Erken alınan randevular sezonun en yoğun haftasına denk gelmeden tamamlanabilir; son dakika taleplerde bekleme süresi uzayabilir.",
            },
            {
                soru: "Sera içinde çalışırken örtüye zarar verir misiniz?",
                cevap:
                    "Zarar vermemek için makinenin geçiş güzergâhı önceden belirlenir ve örtü kenarına koruma serilir. Kompakt akülü makaslı sınıf, dar ve alçak sera yapısına uygun olduğu için tercih edilir. Örtü hassasiyeti yüksekse çalışma öncesi işletmeyle birlikte güzergâh yeniden kontrol edilir.",
            },
            {
                soru: "Kurutma tesisindeki baca bakımı ne kadar sürer?",
                cevap:
                    "Süre bacanın erişim zorluğuna ve kontrol kapsamına göre değişir; genel bir tur birkaç saat içinde tamamlanabilir. Dar bina üstü erişim gerektiği için eklemli platform dar gövdeli olarak tercih edilir. Kurutma sezonu öncesi bu bakımı öncelikli olarak planlarız.",
            },
            {
                soru: "Silo bölgesine giden yol dar; büyük makine geçebilir mi?",
                cevap:
                    "Yol genişliği ve varsa köprü-menfez sınırı önceden bilinmesi gereken bir bilgidir; dar yollarda daha kompakt gövdeli bir makine tercih edilir. Yol ölçüsü belirsizse, teslimattan önce güzergâh üzerinden kısa bir değerlendirme yaparız.",
            },
            {
                soru: "Hasat sonrası bakım turu neyi kapsar?",
                cevap:
                    "Yoğun kullanım sonrası silo gövdesi, merdiven-korkuluk bağlantıları, kurutma bacası ve fan üniteleri genel olarak gözden geçirilir. Bu tur, bir sonraki sezona sorunsuz başlamayı hedefleyen önleyici bir kontroldür ve genellikle sezon dışı sakin dönemde planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun çevresindeki tarımsal üretim havzası ve hasat sezonu döngüsü kamuya açık genel bilgidir; zemin değerlendirmesi ve sezona bağlı bakım takvimi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Samsun Liman Sahası ve Fabrika Çevresinde Enerji ve Aydınlatma Bakım Platformu",
        giris:
            "Liman sahasının gece operasyonu, yüksek direklere yerleşmiş projektörlere ve saha genelindeki elektrik hattına bağlıdır; bir armatür veya hat arızası saha kapasitesini doğrudan düşürdüğü için bu işler genellikle acil sınıfına girer. Gıda ve tütün işleme tesislerinde de benzer bir yapı vardır — üretim sahası ve depo çevresi aydınlatması, hem güvenlik hem üretim sürekliliği için kesintisiz çalışmak zorundadır. Teleskopik platform, direk dibine yanaşıp sepedi armatür seviyesine çıkararak değişimi tek seferde tamamlar; aynı çıkışta komşu armatürlerin lens kirliliği ve kablo rekor sızdırmazlığı da kontrol edilirse ikinci bir sefer gerekmez. Kıyı bölgesinde nem ve tuzlu havanın elektrik bağlantılarındaki sızdırmazlığı zamanla zorlaması, bu tür kontrollerin iç bölgeye göre daha sık tekrarlanmasını gerektirir. Bu sayfada saha aydınlatması ve enerji hattı bakımında platformun nasıl kullanıldığını, acil arıza müdahalesinin nasıl işlediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Yükleme sahası projektör direği değişimi",
                metin:
                    "Liman yükleme sahasındaki projektörler genellikle yüksek direkler üzerine yerleşmiştir ve gece operasyonunun görüş kalitesini doğrudan belirler. Teleskopik platform direk dibine yanaşır, sepet armatür seviyesine çıkar ve değişim tek seferde tamamlanır. Arızalı armatür saha kapasitesini düşürdüğü için bu tür talepler öncelikli değerlendirilir.",
            },
            {
                baslik: "Fabrika çevresi güvenlik aydınlatması",
                metin:
                    "Gıda ve tütün işleme tesislerinin çevre aydınlatması, gece vardiyası çalışan personelin güvenliği için kesintisiz olmalıdır. Armatür değişimi veya kablo rekor kontrolü, üretim sahasına yakın olsa da genellikle üretim alanının dışında kaldığı için üretim durmadan yapılabilir. Çalışma saati, tesisin gece vardiya trafiğine göre planlanır.",
            },
            {
                baslik: "Orta gerilim hattı yakınında güvenli çalışma",
                metin:
                    "Bazı sahalarda aydınlatma direği, orta gerilim hattına yakın konumlanmıştır; bu tür işlerde güvenli mesafe kuralı önceliklidir. Çalışma öncesi hattın enerjili olup olmadığı ve varsa kesinti gereksinimi işletmenin elektrik sorumlusuyla netleştirilir. Bu netlik olmadan sepet hat yakınına yaklaştırılmaz.",
            },
            {
                baslik: "Nemli havada elektrik panosu kontrolü",
                metin:
                    "Kıyı bölgesindeki yüksek nem, aydınlatma panolarının sızdırmazlık contalarını iç bölgeye göre daha hızlı yorar. Yıllık kontrol turunda bu contalar, kablo giriş rekorları ve pano gövde bütünlüğü sepetten yakın mesafeden incelenir. Sızdırmazlık kaybı tespit edilirse değişim aynı çıkışta yapılır.",
            },
            {
                baslik: "Acil arıza müdahalesi",
                metin:
                    "Saha aydınlatmasında toplu bir arıza veya elektrik hattı kesintisi bildirildiğinde, müdahaleyi öncelikli sıraya alırız. Arızanın kapsamına göre gündüz saatlerinde hızlı bir tespit yapılır, gece operasyonu başlamadan önce onarımın tamamlanması hedeflenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma kalemine göre makine ve öncelik",
                paragraflar: [
                    "Aşağıdaki tablo, liman ve fabrika çevresinde en sık üstlendiğimiz aydınlatma-enerji kalemlerini özetler.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Makine sınıfı", "Öncelik durumu", "Nem duyarlılığı"],
                    satirlar: [
                        ["Saha projektör direği", "Teleskopik 20-30 m", "Yüksek (kapasite kaybı)", "Orta"],
                        ["Fabrika çevre aydınlatması", "Teleskopik 16-24 m", "Orta", "Orta"],
                        ["Pano sızdırmazlık kontrolü", "Eklemli 14-20 m", "Düşük (rutin)", "Yüksek"],
                        ["Orta gerilim yakını armatür", "Teleskopik, güvenli mesafeli", "Yüksek (güvenlik)", "Orta"],
                    ],
                },
            },
            {
                baslik: "Rüzgârda armatür değişimi",
                paragraflar: [
                    "Yüksek direk üzerinde çalışırken rüzgâr hızı sepet hareketini doğrudan etkiler; üretici sınırı aşıldığında sepet yükseltilmez. Liman sahası açık bir alan olduğu için bu sınır iç bölgedeki fabrika sahalarına göre daha sık gündeme gelir. Acil bir arıza rüzgârlı bir güne denk gelirse, rüzgârın düştüğü ilk pencere değerlendirilir.",
                ],
            },
            {
                baslik: "Periyodik kontrol anlaşması",
                paragraflar: [
                    "Sürekli işletilen saha ve fabrikalarda, aydınlatma ve pano kontrolünü tek seferlik arıza müdahalesi yerine yıllık periyodik anlaşmaya bağlamak arıza sıklığını azaltır. Bu anlaşmada kontrol tarihleri önceden belirlenir ve saha ekibi her seferinde yeniden randevu aramak zorunda kalmaz.",
                    "Periyodik anlaşma kapsamındaki tesislerde acil arıza önceliği de daha yüksektir, çünkü saha geçmişi ve armatür envanteri zaten bizde kayıtlıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Armatür arızasına ne kadar sürede müdahale ediyorsunuz?",
                cevap:
                    "Saha kapasitesini düşüren toplu arızalarda müdahaleyi öncelikli sıraya alırız; süre arızanın kapsamına ve o anki makine uygunluğuna göre değişir. Amacımız, gece operasyonu başlamadan önce onarımı tamamlamaktır. Periyodik anlaşma kapsamındaki tesislerde bu süreç, saha geçmişi zaten bizde kayıtlı olduğu için daha hızlı işler.",
            },
            {
                soru: "Orta gerilim hattı yakınında çalışmak güvenli mi?",
                cevap:
                    "Güvenli mesafe kuralı buradaki en önemli sınırdır; çalışma öncesi hattın enerjili olup olmadığı ve varsa kesinti gerekliliği işletmenin elektrik sorumlusuyla netleştirilir. Bu netlik sağlanmadan sepet hat yakınına yaklaştırılmaz, çünkü bu tamamen tartışılmaz bir güvenlik kuralıdır.",
            },
            {
                soru: "Rüzgârlı günde acil armatür değişimi yapılabilir mi?",
                cevap:
                    "Rüzgâr üretici sınırını aşıyorsa sepet yükseltilmez, bu durum acil işlerde de değişmez. Bu tür günlerde rüzgârın düştüğü ilk pencereyi değerlendirir ve müdahaleyi o ana göre planlarız. Sınırın altında kalınan rüzgârlarda çalışma normal şekilde sürdürülür.",
            },
            {
                soru: "Nemli havada pano sızdırmazlığı neden bu kadar önemli?",
                cevap:
                    "Kıyı bölgesindeki yüksek nem, sızdırmazlık contalarını iç bölgeye göre daha hızlı yorar; bu da elektrik panosuna nem girmesi riskini artırır. Yıllık kontrol turunda bu contalar ve kablo rekorları sepetten yakın mesafeden incelenir, sızdırmazlık kaybı tespit edilirse aynı çıkışta değiştirilir.",
            },
            {
                soru: "Fabrika çevre aydınlatması üretim sürerken değiştirilebilir mi?",
                cevap:
                    "Genellikle evet, çünkü çevre aydınlatması üretim alanının dışında kalır. Çalışma saati tesisin gece vardiya trafiğine göre planlanır ve sepetin hareket alanına personel girmemesi için geçici bariyer konur. Üretim alanına çok yakın bir noktaysa önce üretim şefiyle koordinasyon yapılır.",
            },
            {
                soru: "Periyodik kontrol anlaşması nasıl işliyor?",
                cevap:
                    "Kontrol tarihleri önceden yıllık olarak belirlenir, her seferinde yeniden randevu aranmaz. Bu anlaşma kapsamındaki sahalarda armatür ve pano envanteri bizde kayıtlı kalır, bu da hem rutin kontrolü hem acil müdahaleyi hızlandırır. Anlaşma dışı tek seferlik talepler de karşılanır, ancak öncelik sırası periyodik anlaşmalı sahalara göre belirlenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman sahasının gece operasyonu ve aydınlatma bağımlılığı kamuya açık genel bilgidir; armatür değişim yöntemi ve nem kontrolü firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Samsun Liman ve Gıda Tesisinde Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Gümrüklü liman sahaları ve gıda üretim tesisleri, operatörlü veya operatörsüz kiralama kararını genel sahalardan farklı kılan iki ek koşul taşır: saha girişinde personel yetkinlik belgesi kontrolü ve üretim-gümrük kurallarına uyum eğitimi. Kısa süreli veya tek seferlik bir işte operatörlü kiralama tercih edilir, çünkü işletmenin kendi personelini bu özel saha kurallarına göre eğitmesine gerek kalmaz. Uzun süreli ve düzenli kullanımda ise operatörsüz kiralama, işletmenin kendi vardiya planına göre esnek çalışmasını sağlar; bu durumda kullanacak personelin geçerli yetkinlik belgesi teslimat öncesi kontrol edilir. Liman sahasında ayrıca gümrüklü giriş için operatör kimlik bilgisinin önceden bildirilmesi gerekir, bu da operatörlü-operatörsüz kararını nakliye planlamasıyla iç içe getirir. Bu sayfada iki seçenek arasındaki farkı, hangi durumda hangisinin uygun olduğunu ve saha giriş sürecinin bu karara nasıl bağlandığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kısa süreli işlerde operatörlü tercih",
                metin:
                    "Birkaç günlük veya tek seferlik bir bakım işinde operatörlü kiralama, işletmenin kendi personelini eğitmesine gerek kalmadan işi hızlıca başlatmasını sağlar. Operatörümüz, sahanın özel kurallarına (gümrük, hijyen, güvenlik) önceden hazırlıklı gelir çünkü bu bilgi talep alınırken bizimle paylaşılır.",
            },
            {
                baslik: "Uzun süreli işlerde operatörsüz esneklik",
                metin:
                    "Aylarca süren bir kiralamada operatörsüz seçenek, işletmenin makineyi kendi vardiya planına göre istediği saatte kullanmasını sağlar. Bu durumda kullanacak personelin geçerli operatör yetkinlik belgesi teslimat öncesi kontrol edilir ve makinenin kullanım kılavuzu ile saha özel kuralları birlikte aktarılır.",
            },
            {
                baslik: "Gümrüklü sahada operatör kimlik süreci",
                metin:
                    "Gümrüklü antrepo veya liman sahasına giriş yapacak her operatör için kimlik bilgisi, işin başlamasından önce işletmeye bildirilir. Bu süreç sahanın kendi güvenlik prosedürüne bağlı olarak birkaç gün sürebilir; operatörlü kiralamada bu evrak sürecini biz üstleniriz, operatörsüz kiralamada ise işletmenin kendi personeli için aynı süreci yürütmesi gerekir.",
            },
            {
                baslik: "Gıda tesisinde hijyen eğitimi gereksinimi",
                metin:
                    "Gıda üretim alanına giren operatörün, tesisin kendi hijyen kurallarına (kıyafet, giriş prosedürü, temas sınırı) uyması beklenir. Operatörlü kiralamada bu bilgilendirmeyi operatörümüze önceden aktarırız; operatörsüz kiralamada işletmenin kendi personeline aynı eğitimi vermesi gerekir.",
            },
            {
                baslik: "Karma model: dönemsel operatörlü destek",
                metin:
                    "Bazı işletmeler, normalde operatörsüz çalışan bir makineyi yoğun dönemde (örneğin hasat sezonu veya toplu bakım turu) geçici olarak operatörlü desteğe geçirir. Bu karma model, düzenli kullanımın esnekliğini korurken yoğun dönemde ek personel yükünü bize devreder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kullanım süresine göre önerilen model",
                paragraflar: [
                    "Aşağıdaki tablo, kullanım süresi ve saha tipine göre önerdiğimiz operatörlü/operatörsüz modeli özetler.",
                ],
                tablo: {
                    basliklar: ["Kullanım süresi", "Saha tipi", "Önerilen model", "Gerekçe"],
                    satirlar: [
                        ["1-3 gün", "Gümrüklü / gıda tesisi", "Operatörlü", "Eğitim ve evrak süreci gerekmez"],
                        ["1-4 hafta", "Genel saha", "Duruma göre ikisi de", "Personel uygunluğuna bağlı"],
                        ["Aylık / sürekli", "Genel saha", "Operatörsüz", "Vardiya esnekliği"],
                        ["Yoğun sezon dönemi", "Tarım / gıda", "Karma (operatörlü destek)", "Ek personel yükü devri"],
                    ],
                },
            },
            {
                baslik: "Yetkinlik belgesi kontrolü nasıl işliyor",
                paragraflar: [
                    "Operatörsüz kiralamada, makineyi kullanacak personelin geçerli operatör yetkinlik belgesi teslimattan önce bizimle paylaşılır. Belge yoksa veya süresi dolmuşsa makine operatörsüz teslim edilmez; bu durumda ya operatörlü seçeneğe geçilir ya da personelin belgesini yenilemesi beklenir.",
                    "Gümrüklü sahalarda bu belgeye ek olarak saha girişi için ayrı bir kimlik onayı da gerekir; iki süreç birbirinden bağımsız yürür ve ikisi de tamamlanmadan makine sahaya girmez.",
                ],
            },
            {
                baslik: "Operatörlü kiralamada sorumluluk paylaşımı",
                paragraflar: [
                    "Operatörlü kiralamada makinenin güvenli kullanımı ve saha kurallarına uyum operatörümüzün sorumluluğundadır; işletme ise çalışma alanını, erişim iznini ve varsa özel saha kısıtlarını (hijyen, gümrük, üretim durdurma) önceden bildirmekle yükümlüdür. Bu net sorumluluk ayrımı, sözleşme aşamasında yazılı olarak belirlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kısa süreli işte hangi model daha ekonomiktir?",
                cevap:
                    "Birkaç günlük işlerde operatörlü genellikle daha ekonomiktir, çünkü işletmenin personel eğitimi ve saha giriş sürecine ayrı zaman harcaması gerekmez. Uzun süreli düzenli kullanımda ise operatörsüz seçenek, günlük operatör maliyetinden tasarruf sağlar. Hangisinin sizin için daha uygun olduğunu kullanım süresine bakarak birlikte değerlendiririz.",
            },
            {
                soru: "Operatörsüz kiralamada personelimizin belgesi yoksa ne olur?",
                cevap:
                    "Geçerli operatör yetkinlik belgesi olmadan makine operatörsüz teslim edilmez. Bu durumda ya operatörlü seçeneğe geçilir ya da personelin belgesini tamamlaması beklenir. Belge kontrolü teslimattan önce yapıldığı için bu durum genellikle son günde değil, planlama aşamasında netleşir.",
            },
            {
                soru: "Gümrüklü sahaya operatörümüzü biz mi bildiriyoruz, siz mi?",
                cevap:
                    "Operatörlü kiralamada bu süreci biz üstleniriz, operatörümüzün kimlik bilgisini işletmeye önceden iletiriz. Operatörsüz kiralamada ise işletmenin kendi personeli için aynı süreci yürütmesi gerekir; biz bu durumda gerekli belge listesini önceden paylaşırız.",
            },
            {
                soru: "Yoğun sezonda operatörsüz makineye geçici operatör eklenebilir mi?",
                cevap:
                    "Evet, bu karma modeli özellikle tarım ve gıda sektöründe sık uyguluyoruz. Normalde operatörsüz çalışan bir makineye, yoğun dönemde geçici bir operatör eklenerek ek personel yükü bize devredilir. Bu geçiş, ihtiyaç netleştiğinde birkaç günlük bir bildirimle planlanabilir.",
            },
            {
                soru: "Operatörlü kiralamada bir arıza olursa sorumluluk kimde?",
                cevap:
                    "Makinenin güvenli kullanımı ve teknik arıza durumunda müdahale bizim sorumluluğumuzdadır. İşletmenin sorumluluğu, çalışma alanını ve saha kısıtlarını (hijyen, gümrük, üretim durdurma) önceden doğru bildirmektir. Bu ayrım sözleşme aşamasında yazılı olarak netleştirilir, böylece bir sorun çıktığında taraflar arasında belirsizlik kalmaz.",
            },
            {
                soru: "Gıda tesisinde operatörün hijyen eğitimi kim tarafından veriliyor?",
                cevap:
                    "Operatörlü kiralamada bu bilgilendirmeyi biz operatörümüze önceden aktarırız; tesisin kıyafet, giriş prosedürü ve temas sınırı kurallarına göre hazırlanmış gelir. Operatörsüz kiralamada ise işletmenin kendi personeline bu eğitimi vermesi beklenir, biz sadece makinenin teknik kullanım bilgisini aktarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman ve gıda tesislerinin gümrük/hijyen kural yapısı kamuya açık genel bilgidir; operatörlü-operatörsüz model seçimi ve belge süreci firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Samsun Liman, Depo ve Fabrika Ağında Çok Noktalı Rota Bakım Platformu",
        giris:
            "Samsun'daki liman çevresi ve ona bağlı gıda-tütün tesisleri, il merkezinden farklı yönlere dağılmış birden fazla sahadan oluşur; bir işletmenin hem liman yakınındaki antreposu hem şehir dışındaki üretim tesisi olabilir. Bu tür işletmeler için tek bir makineyi tek bir günde birden fazla sahaya uğratmak, her saha için ayrı ayrı sevkiyat düzenlemekten hem daha ekonomik hem daha hızlıdır. Çok noktalı rota bakımı burada devreye girer: aynı gün veya aynı hafta içinde ziyaret edilecek sahalar önceden belirlenir, her sahadaki iş kalemi ve tahmini süre netleştirilir, güzergâh buna göre kurulur. Karadeniz'in değişken hava koşulu, rota planlamasına ayrı bir katman ekler — bir sahada yağış nedeniyle gecikme yaşanırsa, sıradaki sahanın zaman penceresi de kayabilir; bu yüzden rota, sıkı bir saat çizelgesinden çok esnek bir sıra mantığıyla kurulur. Bu sayfada çok noktalı rotanın nasıl planlandığını, hangi işletmeler için uygun olduğunu ve hava koşulunun rotayı nasıl etkilediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Rota planlamasının ilk adımı: saha listesi",
                metin:
                    "Çok noktalı rota talebi geldiğinde önce ziyaret edilecek sahaların listesi, her sahadaki iş kalemi ve tahmini süresi netleştirilir. Bu bilgi ne kadar netse, rota o kadar isabetli kurulur. Sahalar arası mesafe ve yol durumu da bu aşamada değerlendirilir, çünkü liman çevresi ile kırsal tesisler arasındaki yol tipi farklıdır.",
            },
            {
                baslik: "Aynı gün birden fazla depoya uğrama",
                metin:
                    "Şehir içi ve liman çevresindeki depolar birbirine yeterince yakınsa, aynı gün içinde iki veya üç sahaya uğramak mümkündür. Her sahada yapılacak iş kısa ve öngörülebilirse (örneğin rutin aydınlatma kontrolü) bu model özellikle verimlidir. İşin süresi belirsizse, rotaya tek bir saha ile sınırlı kalmak daha güvenlidir.",
            },
            {
                baslik: "Haftalık rotada gıda tesisi ve tarım sahası birleştirme",
                metin:
                    "Bazı işletmelerin hem şehir yakınında bir gıda tesisi hem kırsalda bir tarım deposu bulunur; bu iki sahayı aynı haftaya, ardışık günlere yerleştirmek nakliye ve makine hareketini birleştirir. Sahalar arası geçiş süresi rotaya dahil edilir, böylece bir sonraki sahada gecikme yaşanmaz.",
            },
            {
                baslik: "Yağışlı günde rota önceliklendirmesi",
                metin:
                    "Bir sahada yağış nedeniyle çalışma yavaşladığında, sıradaki sahanın zaman penceresi de etkilenir. Bu durumda rota katı bir saat çizelgesi yerine öncelik sırasına göre yeniden düzenlenir; en acil ihtiyaç duyan saha öne alınır, daha esnek olan saha ertelenir. Bu esneklik, planlamaya en baştan dahil edilir.",
            },
            {
                baslik: "Periyodik rota anlaşması",
                metin:
                    "Birden fazla sahası olan işletmeler için aylık veya üç aylık periyodik rota anlaşması kurulabilir; bu anlaşmada her sahanın ziyaret sıklığı önceden belirlenir. Böylece her seferinde yeniden planlama yapılmaz, rota bir sonraki dönem için otomatik olarak tekrarlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha kombinasyonuna göre rota örnekleri",
                paragraflar: [
                    "Aşağıdaki tablo, sık karşılaştığımız saha kombinasyonlarını ve bu kombinasyonlarda önerdiğimiz rota yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["Saha kombinasyonu", "Zaman aralığı", "Rota yaklaşımı", "Hava duyarlılığı"],
                    satirlar: [
                        ["İki liman antreposu", "Aynı gün", "Ardışık, kısa geçiş", "Orta"],
                        ["Şehir depo + kırsal tesis", "Aynı hafta", "İki güne bölünmüş", "Yüksek (yol durumu)"],
                        ["Gıda tesisi + tarım deposu", "Haftalık", "Ardışık günler", "Yüksek"],
                        ["Üç veya daha fazla saha", "Aylık periyodik", "Önceden sabitlenmiş sıra", "Orta"],
                    ],
                },
            },
            {
                baslik: "Rota maliyetinin paylaşılması",
                paragraflar: [
                    "Çok noktalı rota, tek bir sevkiyat maliyetini birden fazla sahaya yayarak toplam nakliye giderini düşürür. Bu özellikle küçük ve orta ölçekli işletmelerde belirgin bir tasarruf sağlar. Rota maliyeti, her sahanın iş kapsamına göre teklif aşamasında ayrı ayrı gösterilir; ortak olan yalnızca araç güzergâhıdır.",
                    "Büyük ölçekli tek bir sahaya yönelik işlerde rota paylaşımı genellikle gerekmez, çünkü makine zaten tek noktaya tam kapasiteyle yönlendirilir.",
                ],
            },
            {
                baslik: "Rota değişikliğinin işletmeye bildirilmesi",
                paragraflar: [
                    "Hava koşulu veya bir sahadaki beklenmedik gecikme nedeniyle rota değiştiğinde, etkilenen tüm sahalara aynı gün içinde güncel tahmini saat bildirilir. Bu bildirim, işletmelerin kendi iç planlamasını (personel, erişim izni) buna göre ayarlamasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kaç sahayı aynı gün içinde ziyaret edebilirsiniz?",
                cevap:
                    "Bu, sahalar arası mesafeye ve her sahadaki iş süresine bağlıdır; şehir içi ve liman çevresinde yakın konumlu iki-üç saha genellikle aynı gün birleştirilebilir. Kırsal bir tesis rotaya eklendiğinde yol süresi arttığı için genellikle günü ikiye bölmek daha gerçekçi olur. Saha listesini paylaştığınızda en verimli günlük planı birlikte kurarız.",
            },
            {
                soru: "Bir sahada gecikme olursa diğer sahalar ne olur?",
                cevap:
                    "Rota katı bir saat çizelgesi yerine öncelik sırasına göre kurulur; bir sahada gecikme yaşanırsa sıradaki sahanın zaman penceresi güncellenir ve etkilenen işletmelere aynı gün içinde yeni tahmini saat bildirilir. En acil ihtiyaç duyan saha öne alınır, daha esnek olan ertelenebilir.",
            },
            {
                soru: "Periyodik rota anlaşması nasıl kuruluyor?",
                cevap:
                    "Birden fazla sahası olan işletmeler için her sahanın ziyaret sıklığı önceden belirlenir ve bu sıklık aylık veya üç aylık bir plana bağlanır. Bu sayede her dönem yeniden planlama yapılmaz, rota otomatik olarak tekrarlanır. Anlaşma dışı ek bir ihtiyaç çıkarsa bu ayrıca ve esnek şekilde planlanır.",
            },
            {
                soru: "Çok noktalı rota maliyeti tek sahaya göre daha mı ucuz?",
                cevap:
                    "Toplamda genellikle evet, çünkü tek bir sevkiyat maliyeti birden fazla sahaya yayılır. Ancak her sahanın kendi iş kapsamı ayrı fiyatlandırılır; rota yalnızca nakliye kalemini ortaklaştırır. Sahalar birbirinden çok uzaksa bu avantaj azalabilir, bu durumda ayrı sevkiyat daha mantıklı olabilir.",
            },
            {
                soru: "Kırsal tesis ile şehir içi depo aynı rotaya girebilir mi?",
                cevap:
                    "Girebilir, ancak yol tipi ve mesafe farkı nedeniyle genellikle iki ayrı güne yayılır. Kırsal tesise giden yol yağıştan daha çok etkilendiği için bu sahaya giden gün, hava tahminine göre biraz daha esnek tutulur. Her iki sahayı aynı haftaya yerleştirmek, ayrı ayrı planlamaktan hâlâ daha ekonomiktir.",
            },
            {
                soru: "Rota değişikliği bize nasıl bildiriliyor?",
                cevap:
                    "Hava koşulu veya bir sahadaki beklenmedik gecikme nedeniyle rota değiştiğinde, etkilenen sahalara aynı gün içinde güncel tahmini saat iletilir. Bu, işletmenin kendi personel ve erişim izni planlamasını buna göre ayarlamasını sağlar; bildirim genellikle telefon veya önceden belirlenen iletişim kanalıyla yapılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman çevresi ile kırsal tarım/gıda tesislerinin coğrafi dağınıklığı ve Karadeniz'in değişken hava koşulu kamuya açık genel bilgidir; rota kurgusu ve önceliklendirme yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Samsun Liman Dolgu Sahası ve Kırsal Arazide Zor Zemin Platform Kiralama",
        giris:
            "Liman çevresindeki dolgu sahaları ve kırsal tarım tesislerinin bir kısmı, standart beton veya asfalt zemin sunmaz; dolgu alanlarında zemin sıkıştırma derecesi noktadan noktaya değişebilir, kırsal sahalarda ise toprak zemin yağıştan doğrudan etkilenir. Karadeniz'in bilinen yüksek yağış rejimi bu iki zemin tipini de zorlar — dolgu sahasında yağış sonrası geçici su birikintisi ve yumuşama görülebilir, toprak zeminde ise kısa süreli sağanak bile yüzeyi kayganlaştırabilir. Bu koşullarda standart lastikli platform yerine geniş taban alanlı, arazi tipi lastiğe sahip makineler tercih edilir; bazı durumlarda ise zemin önceden takoz veya plaka ile desteklenir. Bu sayfada zor zemin koşullarında hangi makine ayarının seçildiğini, zemin değerlendirmesinin nasıl yapıldığını ve yağışlı dönemde ek önlemlerin neler olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Dolgu sahasında zemin sıkıştırma değerlendirmesi",
                metin:
                    "Liman çevresindeki dolgu alanları, doldurma malzemesi ve sıkıştırma yöntemine göre noktadan noktaya farklı taşıma kapasitesi gösterebilir. Teslimattan önce çalışılacak nokta gözle ve gerekirse basit bir batma testiyle değerlendirilir; belirsiz noktalarda geniş taban alanlı arazi tipi makine tercih edilir.",
            },
            {
                baslik: "Yağış sonrası geçici yumuşama",
                metin:
                    "Dolgu ve toprak zeminlerde yağış sonrası birkaç saat ile birkaç gün arasında değişen bir yumuşama dönemi yaşanabilir. Bu dönemde ağır makine yerine, mümkünse daha hafif ve geniş tabanlı bir model tercih edilir veya iş, zeminin toparlandığı güne ertelenir. Acil bir ihtiyaçta ise takoz veya plaka desteğiyle çalışma sürdürülür.",
            },
            {
                baslik: "Kırsal arazide engebeli zeminde manevra",
                metin:
                    "Tarım tesisleri çevresindeki arazi, düz bir saha değil hafif eğimli ve engebeli olabilir. Arazi tipi teleskopik platformlar, dört tekerlek yönlendirmesi ve yüksek yer tutuşuyla bu tür zeminlerde standart makinelere göre daha güvenli manevra yapar. Eğim sınırı üretici kataloğunda belirtilir ve bu sınır sahada tartışılmaz bir kural olarak uygulanır.",
            },
            {
                baslik: "Takoz ve plaka desteğiyle çalışma",
                metin:
                    "Zemin sınırda kaldığında makinenin ayaklarının altına geniş takoz veya çelik plaka yerleştirilerek basınç dağıtılır. Bu, batma riskini azaltır ama zeminin tamamen güvenli hâle geldiği anlamına gelmez; bu yüzden destekli çalışmada da sepet hareketleri daha yavaş ve kontrollü yürütülür.",
            },
            {
                baslik: "Zemin uygun değilse alternatif planlama",
                metin:
                    "Bazı durumlarda zemin, hiçbir destekle güvenli hâle getirilemeyecek kadar yumuşak olabilir; bu durumda iş, zeminin kuruduğu bir sonraki güne ertelenir veya farklı bir erişim güzergâhı aranır. Bu kararı işin bitirilme baskısı değil, sahada ölçülen zemin durumu belirler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre makine ve destek seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, liman dolgu sahaları ve kırsal arazide karşılaştığımız zemin tiplerini ve önerdiğimiz makine-destek kombinasyonunu özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Risk", "Önerilen makine", "Ek önlem"],
                    satirlar: [
                        ["Sıkıştırılmış dolgu (kuru)", "Düşük", "Standart arazi tipi", "Yok"],
                        ["Dolgu (yağış sonrası)", "Orta-yüksek", "Geniş tabanlı arazi tipi", "Takoz desteği"],
                        ["Toprak, engebeli", "Orta", "Dört tekerlek yönlendirmeli", "Eğim sınırı takibi"],
                        ["Toprak (sağanak sonrası)", "Yüksek", "Erteleme önerilir", "Plaka desteği / bekleme"],
                    ],
                },
            },
            {
                baslik: "Zemin değerlendirmesi teslimattan önce nasıl yapılır",
                paragraflar: [
                    "Zemin durumu genellikle işletmeyle paylaşılan fotoğraf veya kısa bir video üzerinden ön değerlendirilir; belirsiz durumlarda yerinde kısa bir kontrol önerilir. Son birkaç günün yağış geçmişi de bu değerlendirmede dikkate alınır, çünkü zeminin toparlanma süresi yağışın şiddetine göre değişir.",
                    "Değerlendirme sonucunda zemin uygunsa standart planlama yapılır; sınırda veya riskliyse önce destek malzemesiyle mi çalışılacağı yoksa iş mi ertelenecek konusu işletmeyle birlikte kararlaştırılır.",
                ],
            },
            {
                baslik: "Erteleme kararının işletmeye maliyeti",
                paragraflar: [
                    "Zemin nedeniyle bir işin ertelenmesi, kısa vadede rahatsız edici görünse de, riskli zeminde zorlanarak yapılan bir çalışmanın makine batması veya devrilme riski çok daha yüksek bir maliyet doğurur. Bu yüzden erteleme kararını, işin bitirilme baskısı değil ölçülen zemin durumu belirler; bu kuralı sözleşme aşamasında baştan açıkça belirtiriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dolgu sahasında makine batma riski nasıl azaltılıyor?",
                cevap:
                    "Öncelikle zemin teslimattan önce gözle ve gerekirse basit bir kontrolle değerlendirilir; belirsiz noktalarda geniş taban alanlı arazi tipi makine tercih edilir. Zemin sınırda kalıyorsa ayakların altına takoz veya çelik plaka yerleştirilerek basınç dağıtılır. Yine de risk sıfırlanamayacak kadar yüksekse iş, zeminin toparlandığı bir güne ertelenir.",
            },
            {
                soru: "Yağış sonrası ne kadar süre beklemek gerekir?",
                cevap:
                    "Bu, yağışın şiddetine ve zemin tipine göre değişir; dolgu zeminlerde birkaç saat, toprak zeminlerde birkaç gün sürebilir. Kesin bir süre vermek yerine, işe başlamadan önce zemini yerinde veya fotoğrafla değerlendiririz. Acil bir ihtiyaçta destek malzemesiyle daha erken çalışmak da değerlendirilebilir, ancak bu her zemin için güvenli olmayabilir.",
            },
            {
                soru: "Arazi tipi platform normal makineden ne kadar farklı?",
                cevap:
                    "Arazi tipi platformlar genellikle daha geniş lastik, dört tekerlek yönlendirmesi ve daha yüksek yer tutuşuyla donatılır; bu özellikler engebeli ve yumuşak zeminde standart makineye göre belirgin bir güvenlik farkı yaratır. Eğim sınırı üretici kataloğunda belirtilir ve bu sınır sahada değiştirilmez bir kural olarak uygulanır.",
            },
            {
                soru: "Zemin uygun değilse iş tamamen iptal mi olur?",
                cevap:
                    "İptal etmek yerine önce alternatifleri değerlendiririz: destek malzemesiyle çalışma, farklı bir erişim güzergâhı veya zeminin toparlandığı bir sonraki güne erteleme. Hangi seçeneğin uygun olduğu sahada ölçülen zemin durumuna göre belirlenir; kararı işin bitirilme baskısı değil güvenlik önceliği belirler.",
            },
            {
                soru: "Takoz veya plaka desteği zemin riskini tamamen ortadan kaldırır mı?",
                cevap:
                    "Hayır, destek basıncı dağıtarak riski azaltır ama zemini tamamen güvenli hâle getirmez. Bu yüzden destekli çalışmada bile sepet hareketleri daha yavaş ve kontrollü yürütülür, makine sık sık gözle kontrol edilir. Destek yeterli görülmüyorsa iş yine ertelenir.",
            },
            {
                soru: "Kırsal arazide eğim sınırını kim belirliyor?",
                cevap:
                    "Eğim sınırı üretici kataloğunda net olarak belirtilir ve bu sınır sahada tartışılmaz bir kural olarak uygulanır. Arazi eğimi kataloğa yakın veya üzerindeyse, o nokta için makine kullanılmaz ve alternatif bir yaklaşım (örneğin farklı bir konumlanma noktası) aranır. Bu kararı operatör sahada bağımsız olarak verir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman dolgu sahaları ve kırsal arazinin Karadeniz yağış rejiminden etkilenmesi kamuya açık genel bilgidir; zemin değerlendirme yöntemi ve destek uygulaması firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Samsun Liman Antreposu ve Gıda Ambalajlama Hattında Makaslı Platform Kiralama",
        giris:
            "Liman çevresindeki antrepo ve gıda ambalajlama tesislerinde çalışma düzeni, açık sahadan oldukça farklıdır: zemin düz ve beton, tavan yüksekliği sınırlı, koridorlar dardır ve çoğu zaman aynı anda iki kişi ile birlikte malzeme taşınması gerekir. Makaslı platform bu tabloya en uygun makine türüdür — dikey yükselen geniş sepedi, bomlu platformların aksine yatay uzanım gerektirmeyen bakım işlerinde daha fazla yük ve daha fazla personel taşıma imkânı sunar. Karadeniz'in dökme yük ve tahıl-gübre elleçleme kimliğine sahip liman bölgesinde, bu tip antrepolarda genellikle konveyör üstü aydınlatma, sprinkler hattı kontrolü ve raf sistemi üst kat bakımı için makaslı platform talep edilir. Gıda ambalajlama hatlarının bulunduğu kapalı alanlarda ise ek bir kısıt daha devreye girer: dizel veya LPG'li makine egzoz kokusu ve gaz emisyonu nedeniyle kullanılamaz, bu yüzden bu tesislerde neredeyse istisnasız elektrikli makaslı platform tercih edilir. Bu sayfada makaslı platformun antrepo ve gıda ambalajlama hattında hangi işlerde öne çıktığını, dar koridor modellerinin nasıl seçildiğini ve soğuk hava deposu gibi özel alanlarda nelere dikkat edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Geniş sepetle çoklu personel ve malzeme taşıma",
                metin:
                    "Makaslı platformun sepedi, bomlu modellere göre belirgin biçimde daha geniştir; bu da aynı anda iki kişinin ve gerekli malzemenin (kablo makarası, aydınlatma armatürü, boru parçası) birlikte taşınmasını mümkün kılar. Antrepo içi bakım işlerinde tek seferde daha fazla iş kalemi tamamlanabildiği için iniş-çıkış sayısı azalır.",
            },
            {
                baslik: "Kapalı gıda tesisinde elektrikli makine zorunluluğu",
                metin:
                    "Gıda ambalajlama hattının bulunduğu kapalı alanlarda içten yanmalı motorlu makine kullanılmaz; hem egzoz gazı hem de yağ kaçağı riski gıda güvenliği kurallarıyla bağdaşmaz. Bu yüzden bu tesislere sevk edilen makaslı platformlar sıradan elektrikli modeller değil, iç mekân için üretilmiş sızdırmaz akü ve düşük gürültülü tahrik sistemine sahip modellerdir.",
            },
            {
                baslik: "Antrepo raf aralığı ve dar koridor modelleri",
                metin:
                    "Raf sistemleri arasındaki koridor genişliği standart makaslı platformun geçişine izin vermeyebilir; bu durumda dar gövdeli, düşük taban yüksekliğine sahip kompakt makaslı modeller devreye girer. Koridor genişliği teslimattan önce ölçülür, çünkü sahada ölçü almadan gönderilen bir makine koridora sığmayabilir ve iş gününü baştan aksatır.",
            },
            {
                baslik: "Soğuk hava deposunda düşük sıcaklık çalışması",
                metin:
                    "Bazı gıda tesislerinde ürün soğuk hava deposunda saklanır ve bu bölümlerde bakım işleri de düşük sıcaklıkta yürütülür. Akülü makaslı platformların performansı düşük sıcaklıkta bir miktar azalır; bu yüzden soğuk hava deposu işlerinde şarj seviyesi normalden daha yüksek tutulur ve çalışma süresi buna göre planlanır.",
            },
            {
                baslik: "Dökme yük depolama tesisinde çatı ve tavan bakımı",
                metin:
                    "Tahıl ve gübre gibi dökme yüklerin depolandığı kapalı ambarlarda çatı çelik konstrüksiyonu ve tavan aydınlatması düzenli kontrol gerektirir. Zemin düz ve sağlam olduğu için bu tip ambarlarda makaslı platform, eklemli bom platforma göre daha yüksek kapasiteyle ve daha kararlı biçimde çalışır; yatay erişim ihtiyacı olmadığından tercih genellikle makaslı yönde olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mekân tipine göre makaslı platform seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, liman çevresindeki antrepo ve gıda tesisi alanlarını ve bu alanlarda tercih ettiğimiz makaslı platform tipini özetler.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Öne çıkan kısıt", "Tercih edilen model", "Tahrik"],
                    satirlar: [
                        ["Gıda ambalajlama hattı", "Egzoz/gaz emisyonu yasağı", "İç mekân elektrikli", "Akülü"],
                        ["Antrepo dar koridor", "Raf aralığı genişliği", "Kompakt dar gövde", "Akülü"],
                        ["Soğuk hava deposu", "Düşük sıcaklıkta çalışma", "Standart elektrikli, yüksek şarj", "Akülü"],
                        ["Ambar çatı/tavan", "Yükseklik, düz geniş zemin", "Standart geniş sepetli", "Akülü/dizel"],
                    ],
                },
            },
            {
                baslik: "Koridor ve kapı ölçüsü teslimattan önce neden sorulur",
                paragraflar: [
                    "Makaslı platformun gövde genişliği ve kapalı taşıma yüksekliği modelden modele farklıdır; bu ölçüler antrepo kapı genişliği ve koridor aralığıyla uyuşmazsa makine sahaya giremez veya rafların arasında ilerleyemez. Bu yüzden teslimattan önce koridor genişliği, kapı yüksekliği ve varsa rampa eğimi işletmeden istenir.",
                    "Ölçü bilgisi eksikse, sahaya standart genişlikte bir makine gönderilip geri çevrilmesindense, önce fotoğraf veya kısa video üzerinden ön değerlendirme yapılması önerilir; bu, hem zaman kaybını hem de gereksiz nakliye masrafını önler.",
                ],
            },
            {
                baslik: "Gıda tesisinde hijyen ve temizlik önceliği",
                paragraflar: [
                    "Gıda ambalajlama hattına giren her makine, tekerlek ve gövde temizliği açısından ayrı bir standarda tabidir; dışarıdan gelen toz veya yağ izi ürün güvenliğini tehlikeye atabilir. Bu yüzden bu tesislere sevk edilen makaslı platformlar, sahaya girmeden önce temizlenir ve mümkünse yalnızca iç mekân işlerinde kullanılmış makineler tercih edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gıda ambalajlama hattında neden mutlaka elektrikli makaslı platform kullanılıyor?",
                cevap:
                    "İçten yanmalı motorlu makinelerin egzoz gazı ve olası yağ kaçağı, gıda güvenliği kurallarıyla bağdaşmaz; bu yüzden kapalı gıda tesislerine sevk edilen makaslı platformlar akülü ve sızdırmaz modellerden seçilir. Bu, tercih değil kapalı alan gıda tesisinin doğal bir gerekliliğidir.",
            },
            {
                soru: "Antrepo koridoru dar olduğunda hangi model gönderiliyor?",
                cevap:
                    "Koridor genişliği teslimattan önce ölçülür ve standart makaslı platform sığmayacaksa dar gövdeli, düşük taban yüksekliğine sahip kompakt bir model tercih edilir. Ölçü bilgisi paylaşılmadan gönderilen bir makine koridora sığmayabilir, bu yüzden bu bilgi teslimattan önce netleştirilir.",
            },
            {
                soru: "Soğuk hava deposunda akülü makine performans kaybediyor mu?",
                cevap:
                    "Evet, düşük sıcaklık akü performansını bir miktar düşürür ve çalışma süresini kısaltabilir. Bu yüzden soğuk hava deposu işlerinde makine tam şarjlı olarak teslim edilir ve çalışma süresi normal sıcaklığa göre biraz daha temkinli planlanır.",
            },
            {
                soru: "Makaslı platform ile eklemli bom platform arasındaki fark nedir?",
                cevap:
                    "Makaslı platform yalnızca dikey yükselir ve buna karşılık geniş, yüksek kapasiteli bir sepet sunar; eklemli bom ise yatay uzanım ve yanal manevra gerektiren, engel etrafından dolaşılması gereken işlerde tercih edilir. Antrepo veya düz zeminli ambar gibi yatay erişim gerektirmeyen alanlarda makaslı platform daha kararlı ve daha yüksek kapasiteli bir seçenektir.",
            },
            {
                soru: "Ambalajlama hattı çalışırken makine üstünde bakım yapılabilir mi?",
                cevap:
                    "Hat çalışırken yapılacak işler, hangi bölümün geçici olarak durdurulacağı önceden işletmeyle birlikte planlanır; makaslı platform çalışırken hattın diğer bölümleri üretime devam edebilir. Gıda hattına özgü hijyen kuralları nedeniyle bu planlama, çalışma tarihinden önce netleştirilir.",
            },
            {
                soru: "Ambar çatısı gibi yüksek noktalarda makaslı platformun avantajı ne?",
                cevap:
                    "Dökme yük ambarlarının çatı ve tavan bölümü genellikle düz, geniş ve engelsiz bir zemine sahiptir; bu koşulda makaslı platform, eklemli bom platforma göre daha yüksek kapasiteyle ve daha kararlı biçimde çalışır. Yatay erişim ihtiyacı olmadığı için makaslı platform bu tip işlerde ilk tercih olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman bölgesindeki antrepo ve gıda ambalajlama tesislerinin varlığı, dökme yük-tahıl-gübre elleçleme kimliği kamuya açık genel bilgidir; makine seçimi kriterleri ve saha pratiği firma bilgisidir. Tesis adı ve kapasite rakamı kullanılmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Samsun Liman Silosu ve Dış Cephe Nokta Bakımında Manlift Kiralama",
        giris:
            "Liman sahasındaki tahıl silosu, gübre depolama tesisi ve rıhtım üstü yapılarda bazı bakım işleri, geniş bir sepet veya uzun bir bom gerektirmez — tek bir teknisyenin kısa süreliğine, tek bir noktaya hızlıca ulaşmasını gerektirir. Dış aydınlatma armatürünün değişimi, boru hattı bağlantısının kontrolü veya bir sensörün yeniden kalibre edilmesi gibi işler bu kategoriye girer. Dikey direkli manlift (tekerlekli itmeli veya kendinden hareketli mast tipi platform) tam olarak bu iş için tasarlanmıştır: düşük gövde ağırlığı sayesinde dar koridorlarda ve tesisler arası geçitlerde kolayca manevra eder, kurulum süresi kısadır ve tek kişilik çalışma için yeterli, kompakt bir sepet sunar. Karadeniz'in liman ve dökme yük elleçleme kimliğine sahip Samsun bölgesinde, silo yapıları ve depolama tesisleri arasındaki dar geçitler sık karşılaşılan bir saha koşuludur; bu geçitlerde büyük bir bomlu platform yerine manlift tercih edilir. Bu sayfada manliftin liman sahasındaki dar geçit ve nokta bakım işlerinde nasıl konumlandığını, hangi işlerde tercih edildiğini ve tekerlekli itmeli ile kendinden hareketli modeller arasındaki farkı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Dar geçit ve koridorlarda hızlı konumlanma",
                metin:
                    "Silo yapıları, depolama tesisleri ve boru hatları arasındaki geçitler genellikle bir bomlu veya makaslı platformun geçemeyeceği kadar dardır. Manliftin dar gövdesi ve düşük ağırlığı, bu geçitlerde kolayca ilerlemesini sağlar; tek kişilik bir bakım işi için makinenin genişliğinden değil, ulaşabilirliğinden faydalanılır.",
            },
            {
                baslik: "Tek nokta, kısa süreli bakım işleri",
                metin:
                    "Aydınlatma armatürü değişimi, sensör kalibrasyonu veya küçük bir boru bağlantı kontrolü gibi işler genellikle yarım saatten kısa sürer ve tek kişi tarafından yapılır. Manliftin kurulum ve konumlandırma süresi kısa olduğu için bu tip kısa işlerde büyük bir platform kurmaktan daha verimlidir.",
            },
            {
                baslik: "Tekerlekli itmeli ve kendinden hareketli model farkı",
                metin:
                    "Tekerlekli itmeli manlift, elle bir sonraki noktaya çekilir ve düz, engelsiz iç mekânlarda tercih edilir; kendinden hareketli model ise kendi motoruyla hareket eder ve dış sahada, hafif eğimli veya biraz daha uzun mesafeli geçişlerde daha uygundur. Hangi modelin gönderileceği, çalışılacak noktalar arasındaki mesafeye ve zemin tipine göre belirlenir.",
            },
            {
                baslik: "Silo ve depolama tesisi dış cephe nokta erişimi",
                metin:
                    "Silo dış gövdesindeki küçük bir kaynak dikişi kontrolü veya boya nokta onarımı, gövdeyi çevreleyen büyük bir tur gerektirmeden tek bir noktada yapılabiliyorsa, manlift eklemli bom platforma göre daha hızlı bir çözümdür. İş büyükse veya birden fazla nokta gövde çevresinde dağılmışsa, bu durumda eklemli bom platform tercih edilir.",
            },
            {
                baslik: "Rıhtım üstü açık sahada rüzgâr ve stabilite sınırı",
                metin:
                    "Manlift, bomlu platformlara göre daha düşük çalışma yüksekliğine sahiptir ve bu da rüzgârlı liman sahasında bir miktar stabilite avantajı sağlar; yine de üretici kataloğundaki rüzgâr sınırı aşıldığında çalışma durdurulur. Rıhtım üstü açık alanlarda rüzgâr hızı iç bölgeye göre daha değişken olduğu için bu sınır sahada sık kontrol edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre manlift model seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, liman çevresinde manlift talep edilen iş tiplerini ve bu işlerde tercih edilen model tipini özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Konum", "Tercih edilen model", "Ortalama iş süresi"],
                    satirlar: [
                        ["Aydınlatma armatürü değişimi", "İç mekân / kapalı ambar", "Tekerlekli itmeli", "Kısa"],
                        ["Sensör/kalibrasyon kontrolü", "Silo dış gövde tek nokta", "Kendinden hareketli", "Kısa"],
                        ["Boru bağlantı kontrolü", "Depolama tesisi geçidi", "Tekerlekli itmeli", "Kısa-orta"],
                        ["Nokta boya/kaynak onarımı", "Rıhtım üstü açık saha", "Kendinden hareketli", "Orta"],
                    ],
                },
            },
            {
                baslik: "Manlift ile bomlu platform arasında seçim nasıl yapılır",
                paragraflar: [
                    "İş tek bir noktada, kısa sürede ve tek kişi tarafından yapılacaksa manlift, hem kurulum süresi hem de dar geçitlerdeki manevra kolaylığı açısından daha uygun bir seçimdir. İş birden fazla noktayı kapsıyorsa veya gövde çevresinde bir tur gerektiriyorsa, bu durumda yatay uzanımı olan eklemli bom platform tercih edilir.",
                    "Bu ayrımı netleştirmek için, çalışılacak noktaların sayısı ve aralarındaki mesafe teslimattan önce işletmeyle birlikte değerlendirilir; belirsiz durumlarda daha esnek olan bom platform önerilir.",
                ],
            },
            {
                baslik: "Dar geçitlerde ölçü uyuşmazlığı riski",
                paragraflar: [
                    "Silo ve depolama tesisleri arasındaki geçit genişliği tesisten tesise farklıdır; manliftin gövde genişliği bu geçide sığmıyorsa makine sahaya giremez. Bu yüzden geçit genişliği ve varsa üstten geçen boru veya kablo yüksekliği teslimattan önce netleştirilir; ölçü belirsizse kısa bir fotoğraf paylaşımı bu riski önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift ile makaslı platform arasındaki temel fark nedir?",
                cevap:
                    "Manlift dar gövdeli, düşük ağırlıklı ve tek kişilik çalışma için tasarlanmış dikey bir platformdur; makaslı platform ise daha geniş sepet ve daha yüksek kapasiteyle çoklu personel taşımaya uygundur. Dar geçitlerde ve tek nokta kısa işlerde manlift, geniş alanlarda ve çoklu personel gereken işlerde makaslı platform tercih edilir.",
            },
            {
                soru: "Tekerlekli itmeli manlift ne zaman, kendinden hareketli ne zaman tercih ediliyor?",
                cevap:
                    "Tekerlekli itmeli model, düz ve engelsiz iç mekânlarda kısa mesafeli hareket için yeterlidir ve daha hafiftir. Kendinden hareketli model ise dış sahada, hafif eğimli zeminde veya noktalar arası mesafe uzunsa tercih edilir; motor gücü sayesinde işçi eforu gerektirmeden konumlanma sağlar.",
            },
            {
                soru: "Silo dış cephesinde manlift mi yoksa eklemli bom platform mu kullanılır?",
                cevap:
                    "İş tek bir noktada, gövdeyi çevrelemeden yapılabiliyorsa manlift daha hızlı bir çözümdür. Birden fazla nokta gövde çevresinde dağılmışsa veya gövdeyi çevreleyen bir tur gerekiyorsa, yatay uzanımı olan eklemli bom platform tercih edilir; bu ayrım iş kapsamına göre teslimattan önce netleştirilir.",
            },
            {
                soru: "Dar geçitlerde manlift sıkışma riski var mı?",
                cevap:
                    "Geçit genişliği ve varsa üstten geçen boru veya kablo yüksekliği önceden netleştirilmezse, gönderilen makine geçide sığmayabilir. Bu riski önlemek için teslimattan önce geçit ölçüsü işletmeden istenir; belirsiz durumlarda kısa bir fotoğraf paylaşımı yeterli olur.",
            },
            {
                soru: "Rıhtım üstü açık sahada manlift rüzgârdan nasıl etkilenir?",
                cevap:
                    "Manlift, bomlu platformlara göre daha düşük çalışma yüksekliğine sahip olduğu için rüzgâr etkisine görece daha az duyarlıdır, ama üretici kataloğundaki rüzgâr sınırı yine de geçerlidir. Rıhtım üstü açık alanda rüzgâr hızı sık değiştiği için bu sınır çalışma boyunca düzenli kontrol edilir.",
            },
            {
                soru: "Manlift tek kişilik işler için mi sınırlı, birden fazla kişi çalışabilir mi?",
                cevap:
                    "Manliftin sepedi kompakttır ve öncelikli olarak tek kişilik çalışma için tasarlanmıştır; bazı modellerde ikinci bir kişi için sınırlı yer bulunsa da malzeme taşıma kapasitesi makaslı platforma göre belirgin şekilde düşüktür. Çoklu personel veya fazla malzeme gereken işlerde manlift yerine makaslı platform önerilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Samsun liman bölgesindeki silo, depolama tesisi ve rıhtım yapılarının varlığı, dökme yük-tahıl-gübre elleçleme kimliği kamuya açık genel bilgidir; model seçim kriterleri firma saha pratiğidir. Tesis adı ve kapasite rakamı kullanılmamıştır.",
    },
};
