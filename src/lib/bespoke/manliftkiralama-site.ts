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
};
