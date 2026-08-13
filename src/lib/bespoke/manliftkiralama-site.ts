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
};
