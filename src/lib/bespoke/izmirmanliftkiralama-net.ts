// ═══════════════════════════════════════════════════════════════════════════
// izmirmanliftkiralama.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: İzmir/Aliağa, RAFİNERİ VE LİMAN sahalarına belgeli operatörlü,
// İSG uyumlu manlift kiralama. Açı: ağır sanayi İSG rejimi, iş izni
// sistemleri, operatörlü hizmet.
//
// ⚠️ Bergama OSB / Menemen Deri OSB / Tire OSB / Manisa-Aydın çevre sayfaları
// iki kardeş domainde de elle yazıldı (depo/raf ve kesintisiz üretim
// açılarıyla). Bu dosya ÜÇÜNCÜ açıdan yazılır: izin sistemi, operatör,
// yüksek riskli saha. Cümle/tablo tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (≥1 tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIRMANLIFTKIRALAMA_NET: Record<string, BespokeIcerik> = {
    "bolge:aliaga": {
        h1: "Aliağa'da Rafineri ve Ağır Sanayi Sahalarına Manlift Kiralama",
        giris:
            "Aliağa, Türkiye ağır sanayisinin en yoğun noktalarından biridir: rafineri ve petrokimya kompleksi, demir-çelik tesisleri, gemi söküm bölgesi ve enerji santralleri aynı sahil şeridinde çalışır. Bu sahalarda platform kiralamak, makine teslim etmekten çok bir uygunluk sürecini yönetmektir — permit-to-work (çalışma izni) sistemleri, sızdırmaz alan sınıflandırmaları, sıcak iş prosedürleri ve saha-özel operatör şartları, işin kendisinden önce gelir. Filomuzun bu bölgeye ayrılmış tarafı buna göre kurulmuştur: evrak setleri rafineri yüklenici sistemlerine uygun tutulur, operatörlerimiz ağır sanayi saha deneyimlidir ve makine sevkiyatı, izin takvimiyle senkron planlanır. Aliağa'da 'yarın makine lazım' cümlesinin gerçekçi karşılığı, iznin ne zaman çıkacağıdır — ve biz bu süreci baştan yönetiyoruz.",
        maddeler: [
            {
                baslik: "Permit-to-work: işin gerçek takvimi",
                metin:
                    "Rafineri ve petrokimya sahalarında hiçbir iş, çalışma izni (PTW) olmadan başlamaz: iş tanımı, risk analizi, gaz ölçümü, alan sorumlusu onayı ve günlük izin yenileme. Platform işlerinde izin dosyasına makine belgeleri (periyodik kontrol, bakım kaydı) ve operatör belgeleri (MYK, saha eğitimleri) eklenir. Süreci hızlandıran tek şey hazırlıktır — dosyamız bu sistemlere standart formatta hazırdır ve talep açıldığı gün izin sürecine girer. İzin çıkış süresi sahaya göre değişir; sevkiyat, izne senkron planlanır ve makine kapıda bekletilmez.",
            },
            {
                baslik: "Alan sınıflandırması ve makine seçimi",
                metin:
                    "Petrokimya sahalarının patlayıcı ortam bölgeleri (Zone sınıflı alanlar) standart platformlara kapalıdır; bu bölgelerdeki işler ya alan gazdan arındırılıp ölçümle belgelendikten sonra ya da Zone dışına taşınan erişim planıyla yapılır. Zone dışı alanlarda dizel makineler kıvılcım tutucu (spark arrestor) şartına tabi olabilir — saha şartnamesi neyi istiyorsa makine ona göre donatılır. Hangi bölgenin hangi sınıfta olduğu saha haritasından okunur ve iş planı bu haritayla başlar; 'makine geldi ama alana giremedi' senaryosu, Aliağa'da en pahalı hatadır.",
            },
            {
                baslik: "Belgeli operatör: bu sahaların standardı",
                metin:
                    "Ağır sanayi sahalarında operatörsüz kiralama fiilen istisnaıdır: saha yönetimleri platform operatöründe MYK yeterlilik belgesinin yanında saha oryantasyonu, İSG eğitim kayıtları ve çoğu zaman deneyim şartı arar. Operatörlerimiz bu profile göre seçilir — rafineri/çelik sahası deneyimi, güncel eğitim dosyası ve izin sistemlerine aşinalık. Operatörlü modelde izin sürecinin operatör ayağı (eğitim kayıtları, sağlık raporu) bizden hazır gider; işverenin yükü, alan sorumlusu ve refakat düzenine iner.",
            },
            {
                baslik: "Çelik ve gemi söküm sahalarında ağır koşul",
                metin:
                    "Demir-çelik tesislerinde yüksek sıcaklık bölgeleri, vinç trafiği ve skrap sahası tozu; gemi söküm bölgesinde ise değişken zemin ve kesme işleri çevresindeki sıcak iş rejimi platform çalışmasını şekillendirir. Bu sahalarda dizel arazi tipi makineler ağırlıktadır — zemin ve menzil bunu gerektirir — ve makine bakım periyodu toz/ısı katsayısıyla sıklaştırılır. Sıcak iş yapılan bölgelerin yakınında çalışma, o bölgenin izin rejimine bağlanır; kıvılcım düşme mesafeleri iş planında hesaba katılır.",
            },
            {
                baslik: "Liman içi operasyonlarla koordinasyon",
                metin:
                    "Aliağa'nın iskele ve terminallerinde platform işleri (aydınlatma direkleri, vinç bakımı destek işleri, ambar kapağı çevresi) liman operasyon programına tabidir: gemi yanaşma takvimi, elleçleme sahası trafiği ve İSPS güvenlik rejimi çalışma penceresini belirler. Liman sahasına giriş, araç ve personel bildirimiyle önceden kurulur; makine hareketleri operasyon sahasının boş olduğu pencerelere planlanır. Rıhtım kenarı çalışmalarında rüzgâr sınırı, açık deniz etkisiyle iç sahalardan daha sık devreye girer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aliağa sahalarında izin ve şart haritası",
                paragraflar: [
                    "Bölgedeki saha tiplerinin izin rejimi ve makine şartları aşağıdadır. Her sahanın kendi şartnamesi esastır — tablo, planlamanın başlangıç haritasıdır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "İzin rejimi", "Tipik makine şartı", "Operatör şartı"],
                    satirlar: [
                        ["Rafineri / petrokimya", "PTW + gaz ölçümü + günlük yenileme", "Zone haritasına göre; kıvılcım tutucu", "MYK + saha oryantasyonu + deneyim"],
                        ["Demir-çelik", "Saha izni + sıcak bölge koordinasyonu", "Dizel arazi tipi, sık bakım", "MYK + İSG dosyası"],
                        ["Gemi söküm", "Sıcak iş rejimi + bölge izni", "Arazi tipi, değişken zemin planı", "MYK + deneyim"],
                        ["Liman / terminal", "İSPS + operasyon programı", "Rüzgâr sınırı takibi", "MYK + liman bildirimi"],
                        ["Enerji santrali", "Santral İSG sistemi", "Alan sınıfına göre", "MYK + santral oryantasyonu"],
                    ],
                },
            },
            {
                baslik: "İzin süreciyle senkron sevkiyat planı",
                paragraflar: [
                    "Aliağa işlerinde en sık yaşanan verim kaybı, makinenin izinden önce sahaya gelmesidir: kira işler, makine kapıda bekler. Bizim düzenimiz terstir — izin süreci talep günü başlar, dosya (makine + operatör evrakları) standart formatta saha sistemine girer ve sevkiyat, izin onayının teyit edildiği güne planlanır. İzin gecikirse sevkiyat kayar, kira sayacı sahada boş beklemeyle işlemez.",
                    "Düzenli çalıştığımız sahalarda süreç daha da kısadır: yüklenici kaydımız ve operatör dosyalarımız sistemde açık kaldığı için yeni iş, yalnızca iş-özel izin adımlarını (risk analizi, gaz ölçümü) bekler. Aynı sahada tekrarlayan işleri olan firmalara bu kayıt sürekliliğini özellikle öneriyoruz.",
                ],
            },
            {
                baslik: "Yüksek riskli sahada çalışma disiplini",
                paragraflar: [
                    "Ağır sanayi sahalarında platform çalışmasının güvenlik seti, standart sahaların üzerine üç katman ekler: bom tipi makinelerde tam vücut kemer + kısa lanyard (fırlama riski), gaz ölçüm cihazıyla çalışma (sepette taşınır, alarm limitlerinde iş durur) ve acil tahliye planının makine özelinde kurulması (acil iniş sistemi, alan tahliye rotası). Operatörlerimiz bu seti sahaya özgü brifingle uygular; işveren tarafının refakatçi ve alan sorumlusu düzeni izin dosyasında tanımlanır.",
                    "Makine tarafında sızdırmazlık ve kıvılcım kontrolü periyodik olarak belgelenir; hidrolik kaçak, bu sahalarda yalnızca kalite değil güvenlik konusudur. Saha denetimlerinde istenen tüm kayıtlar (bakım, kontrol, eğitim) dosya hâlinde makineyle birlikte bulunur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Rafineri sahamızdaki iş için makine ne kadar sürede gelir?",
                cevap:
                    "Belirleyici olan sevkiyat değil izin sürecidir: PTW dosyası (iş tanımı, risk analizi, makine ve operatör evrakları) saha sisteminize girer, gaz ölçümü ve alan onayı tamamlanır, sevkiyat izin onayına senkron planlanır. Evrak setimiz standart formatta hazır olduğu için süreç talep günü başlar; düzenli çalıştığımız sahalarda yüklenici kaydımız açık olduğundan yalnızca iş-özel adımlar kalır. Makineyi izinden önce sahaya yığmıyoruz — kapıda bekleyen makine, ödenen ama çalışmayan gündür.",
            },
            {
                soru: "Zone sınıflı alanda platform kullanılabilir mi?",
                cevap:
                    "Standart platform Zone sınıflı (patlayıcı ortam) alanda çalışamaz — bu kural esnetilemez. İki çözüm yolu vardır: alanın gazdan arındırılıp ölçümle güvenli belgelendiği pencerede çalışmak veya erişim planını Zone dışından kurmak (komşu alandan yanal erişim, hedefin Zone dışı kalan kısmında çalışma). Hangisinin uygulanacağı saha haritası ve alan sorumlusuyla birlikte kararlaştırılır. Zone dışı alanlarda da saha şartnamesi kıvılcım tutucu isteyebilir — makine, şartnameye göre donatılıp gönderilir.",
            },
            {
                soru: "Kendi personelimiz kullansın istiyoruz; ağır sanayi sahasında mümkün mü?",
                cevap:
                    "Teoride mümkün, pratikte nadiren verimli: saha yönetimi operatörde MYK belgesinin yanında saha oryantasyonu, güncel İSG eğitim kayıtları ve çoğu zaman deneyim şartı arar — kendi personeliniz bu dosyayı tamamlayana kadar izin süreci uzar. Operatörlü modelde bu ayak bizden hazır gider: belgeler, eğitim kayıtları ve saha deneyimi dosyada mevcuttur, izin süreci kısalır. Uzun projelerde karma model kurulabilir — başlangıç operatörümüzle, personeliniz saha dosyasını tamamladığında devir.",
            },
            {
                soru: "Çelik tesisimizin sıcak bölgeleri yakınında çalışma nasıl planlanır?",
                cevap:
                    "Bölgenin izin rejimiyle: sıcak iş yapılan alanların çevresinde çalışma, o bölgenin koordinasyonuna bağlanır — kıvılcım düşme mesafeleri, ısı kaynaklarının konumu ve vinç trafiği iş planına işlenir. Makine tarafında dizel arazi tipi ağırlıktadır (zemin ve menzil gereği) ve bakım periyodu toz/ısı katsayısıyla sıklaştırılır. Operatörlerimizin çelik sahası deneyimi burada belirleyicidir: skrap sahası trafiği ve sıcak bölge disiplinini bilen operatör, alan sorumlusunun yükünü azaltır.",
            },
            {
                soru: "Liman sahamızda gemi operasyonları sürerken iş yapılabilir mi?",
                cevap:
                    "Operasyon programına senkron planla evet: gemi yanaşma takvimi ve elleçleme trafiği çalışma pencerelerini belirler, makine hareketleri saha boşken yapılır ve İSPS rejimi gereği araç-personel bildirimi önceden tamamlanır. Rıhtım kenarı işlerde rüzgâr sınırını iç sahalardan daha sık izliyoruz — açık deniz etkisiyle sepet kotundaki rüzgâr, yerdekinden belirgin yüksek olabilir. Aydınlatma direkleri ve yüksek yapı işleri bu düzenle, liman operasyonu hiç aksamadan tamamlanır.",
            },
            {
                soru: "İzin gecikirse kira işlemeye devam eder mi?",
                cevap:
                    "Hayır — düzenimiz bunu önlemek üzerine kurulu: sevkiyat izin onayına senkron planlandığı için makine sahaya izinle birlikte girer ve kira fiili çalışma dönemiyle başlar. İzin süreci uzarsa sevkiyat kayar; sahada boş bekleyen makine için sayaç işlemez. Bunun tek istisnası, sizin talebinizle makinenin önceden saha içinde konumlandırılmasıdır (izin çıkar çıkmaz başlamak için) — bu durumda bekleme koşulları sözleşmede açıkça tanımlanır, sürpriz olmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aliağa'nın rafineri/petrokimya/çelik/gemi söküm profili kamuya açık bilgidir; PTW, Zone ve İSPS rejimleri mevzuat ve saha standartlarıdır.",
    },

    "bolge:nemrut": {
        h1: "Nemrut Limanları Bölgesinde Manlift Kiralama",
        giris:
            "Nemrut Körfezi, Türkiye'nin en yoğun liman kümelerinden birini barındırır: demir-çelik tesislerinin kendi iskeleleri, genel kargo ve dökme yük terminalleri aynı körfez hattında sıralanır. Bu bölgede platform işinin doğası, liman operasyonunun kesintisizliğiyle tanımlanır — gemi bekletmek dünyanın en pahalı duruşlarından biridir ve hiçbir bakım işi yanaşma programının önüne geçemez. Çalışma düzenimiz buna göre kurulur: işler gemi penceresi aralarına planlanır, makine hareketleri terminal trafiğiyle koordine edilir ve rıhtım hattının rüzgâr gerçeği her planın içindedir. İskele aydınlatması, vinç yolu, konveyör galerisi ve silo-bunker yapıları, bölgedeki manlift işlerinin ana konularıdır; hepsinde belgeli operatör ve liman güvenlik rejimi standarttır.",
        maddeler: [
            {
                baslik: "Gemi penceresi arasına iş planlamak",
                metin:
                    "Terminal işlerinin takvimi gemi programından okunur: yanaşma-tahliye-kalkış döngüsünün araları, rıhtım ve ekipman bakımının doğal pencereleridir. Bu pencereler kısa ve kesin sınırlıdır — iş bloklara bölünür, makine pencere açılmadan konumlanmış olur ve blok bitiminde saha operasyona temiz teslim edilir. Programı oynak terminallerde (spot yük ağırlıklı) pencereler son güne kadar netleşmeyebilir; bu profilde makinenin sahada konaklaması ve işlerin 'pencere açıldıkça' ilerlemesi tek gerçekçi modeldir.",
            },
            {
                baslik: "Rıhtım hattında rüzgâr yönetimi",
                metin:
                    "Körfez hattında rüzgâr, iç sahalardan farklı davranır: deniz yüzeyinde engelsiz hızlanır ve sepet kotunda yerden okunandan belirgin yüksek eser. Rıhtım kenarı işlerde (aydınlatma direkleri, vinç yolu, iskele yapıları) rüzgâr planı işin parçasıdır — günün sakin saatleri (çoğunlukla sabah erken) yüksek işlere ayrılır, öğleden sonra güçlenen deniz meltemi döneminde alçak işler yapılır. Makinelerin 12,5 m/s sertifika sınırı, sepet kotundaki ölçümle izlenir; geniş yüzeyli malzeme taşınan işlerde etkin sınır daha da aşağı çekilir.",
            },
            {
                baslik: "Vinç yolu ve konveyör galerisi işleri",
                metin:
                    "Liman ekipmanının çevresindeki platform işleri iki tipik hedefe odaklanır: rıhtım vinçlerinin yolu boyunca aydınlatma-elektrik işleri ve dökme yük terminallerinin konveyör galerileri. Vinç yolu işlerinde vinç hareket alanıyla kesişim, terminal operasyonuyla dakika bazında koordine edilir — vinç kilitleme pencereleri kısa tutulur ki operasyon esnekliği korunmuş olsun. Konveyör galerilerinde ise dar-yüksek geometri belirleyicidir: galeri altından eklemli erişim veya galeri içinde dar şase modeller, yapının ölçüsüne göre seçilir.",
            },
            {
                baslik: "Silo, bunker ve toz yükü ortamı",
                metin:
                    "Dökme yük terminallerinin silo ve bunker yapılarında iki koşul birleşir: yükseklik (silo üstü ve cidar işleri 20 metre bandına uzanabilir) ve toz (tahıl, kömür, klinker tozu hem görüşü hem makine bakımını etkiler). Yüksek metrajlı dizel makineler bu işlerin standardıdır; hava filtresi ve soğutma bakımı toz katsayısıyla sıklaştırılır. Organik toz (tahıl) birikimli alanlarda patlayıcı ortam değerlendirmesi yapılır — bu alanlar Zone sınıfındaysa standart makine giremez ve iş, temizlik-ölçüm sonrası pencereye alınır.",
            },
            {
                baslik: "Liman güvenlik rejimi ve saha erişimi",
                metin:
                    "Bölge terminallerinde İSPS güvenlik rejimi geçerlidir: personel ve araç bildirimi, kimlik-geçiş süreci ve bazı terminallerde eskortlu hareket. Operatörlerimizin liman sahası deneyimi bu süreci pürüzsüzleştirir; evrak seti (MYK, İSG kayıtları, makine belgeleri) terminal sistemlerine hazır formatta sunulur. Çelik tesislerinin kendi iskelelerinde ise tesisin İSG sistemi liman rejimiyle birleşir — iki kapılı bu yapıda erişim planı, her iki sistemin şartını birden karşılayacak şekilde kurulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Nemrut bölgesinde iş-pencere-makine haritası",
                paragraflar: [
                    "Bölgedeki tipik işler, zamanlama modeli ve makine sınıfı aşağıdadır. Liman ortamında zamanlama sütunu, makine sütunundan daha belirleyicidir.",
                ],
                tablo: {
                    basliklar: ["İş", "Zamanlama", "Makine", "Özel koşul"],
                    satirlar: [
                        ["İskele / rıhtım aydınlatması", "Gemi penceresi arası, sabah saatleri", "Dizel eklemli 20 m+", "Rüzgâr planı"],
                        ["Vinç yolu elektrik-bakım destek", "Kısa vinç kilitleme pencereleri", "Dizel / akülü makaslı", "Dakika bazlı koordinasyon"],
                        ["Konveyör galerisi", "Hat duruş blokları", "Eklemli veya dar şase", "Geometriye göre seçim"],
                        ["Silo / bunker cidarı", "Operasyon dışı bloklar", "Dizel eklemli yüksek metraj", "Toz bakım katsayısı, Zone kontrolü"],
                        ["Terminal binaları", "Serbest", "Akülü makaslı", "Standart düzen"],
                    ],
                },
            },
            {
                baslik: "Konaklamalı terminal modeli",
                paragraflar: [
                    "Gemi programının oynaklığı, Nemrut işlerinde kısa kiralamayı verimsizleştirir: pencere kaydıkça sevkiyat da kayar ve nakliye tekrarlanır. Konaklamalı modelde makine terminalde kalır, pencere açıldıkça iş ilerler ve program oynaklığı maliyete dönüşmez. Terminalin tek yükümlülüğü güvenli park alanı ve (akülü modellerde) şarj noktasıdır; bakım sahada, operasyonu aksatmayan saatlerde yapılır.",
                    "Aynı körfez hattındaki komşu terminallerin işleri tek konaklama dönemine birleştirildiğinde model daha da güçlenir: makine terminaller arasında kısa mesafede yer değiştirir, her terminal yalnızca kendi kullanım günlerini üstlenir. Körfez hattı kompakt olduğu için bu tur modeli Nemrut'ta özellikle verimlidir.",
                ],
            },
            {
                baslik: "Yüksek metrajda rüzgâr-güvenlik dengesi",
                paragraflar: [
                    "Silo üstü ve aydınlatma direği işleri bölgenin en yüksek metrajlı kalemleridir ve yükseklik arttıkça rüzgâr penceresi daralır: 20 metre sepet kotunda güvenli çalışma saatleri, deniz kenarında günün sınırlı dilimidir. Planlama bu gerçeğe göre yapılır — yüksek işler sabah bloklarına, gün içi saatler alçak işlere. Bom tipi makinelerde tam vücut kemer + kısa lanyard kuralı tavizsizdir; sepette anemometreyle çalışılır ve limit aşımında iş, tartışmasız durdurulur.",
                    "Bu disiplinin pratik sonucu şudur: yüksek metrajlı işlerin süresi hava penceresine bağlı tahmin edilir ve takvime pay konur. 'Yarın bitmesi lazım' baskısıyla rüzgârda çalışmak, bu sahalarda kabul etmediğimiz tek taleptir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gemi programımız sık değişiyor; iş planı nasıl kurulur?",
                cevap:
                    "Konaklamalı modelle: makine terminalinizde kalır, gemi penceresi açıldıkça iş bloklar hâlinde ilerler ve program oynaklığı sevkiyat maliyetine dönüşmez. Pencereler kısa olduğu için işler blok yapısına bölünür — her blok, pencere süresine sığacak şekilde tanımlanır ve yarım kalan iş sonraki pencereye devredilir. Operasyon ekibinizle günlük kısa koordinasyon (yarının pencereleri) yeterlidir; planın gerisini biz yönetiriz.",
            },
            {
                soru: "Rıhtım aydınlatma direklerimiz 25 metre; hangi makine gerekir?",
                cevap:
                    "Yüksek metraj dizel eklemli sınıf — direk kotu + uzanma payı hesabıyla seçilir ve lowbed ile sevk edilir. Bu metrajda asıl planlama konusu rüzgârdır: deniz kenarında 25 metre sepet kotu, günün yalnızca sakin saatlerinde (çoğunlukla sabah erken) güvenli çalışma verir. İşi sabah bloklarına planlıyor, sepette anemometreyle çalışıyor ve limit aşımında durduruyoruz. Takvimi hava penceresi payıyla kuruyoruz — direk başına süre, iç saha işlerinden uzun tahmin edilir.",
            },
            {
                soru: "Tahıl terminalimizde toz patlaması riski var; platform çalışabilir mi?",
                cevap:
                    "Alan değerlendirmesine bağlı: organik toz birikimi patlayıcı ortam (Zone) sınıflaması gerektirebilir ve Zone sınıflı alanda standart makine çalışamaz. Pratik akış şöyledir: alan temizlenir, ölçüm yapılır, güvenli sınıf belgelenir ve iş bu pencerede tamamlanır — silo-bunker işlerinde bu döngü operasyon duruşlarıyla eşzamanlanır. Zone dışı alanlarda standart düzen geçerlidir; toz yoğunluğu yalnızca makine bakım katsayısını etkiler. Alan sınıflamanızı keşifte netleştiriyoruz.",
            },
            {
                soru: "Vinç yolumuz üzerinde iş var ama vinci uzun süre kilitleyemeyiz; çözüm?",
                cevap:
                    "Kısa kilitleme pencereleri: iş, vincin operasyonda olmadığı doğal boşluklara dakika bazında bölünür — her blokta vinç o bölgede kilitlenir, blok biter, kilit açılır, vinç çalışır. Bu model operasyon esnekliğinizi korur ama sıkı koordinasyon ister; operatörümüz ve vinç operatörünüz arasında telsiz düzeni kurulur. Alternatif, işi gemi penceresi arasındaki uzun bloğa toplamaktır — hangisinin verimli olduğu iş hacmine göre keşifte kararlaştırılır.",
            },
            {
                soru: "İSPS kapsamında saha erişimi ne kadar sürer?",
                cevap:
                    "Terminale göre değişir — kimlik-geçiş süreci ve araç bildirimi çoğunlukla birkaç gün içinde tamamlanır; evrak setimiz (personel bilgileri, MYK belgeleri, makine evrakları, sigortalar) terminal sistemlerine hazır formatta sunulduğu için süreç bizden gecikmez. Düzenli çalıştığımız terminallerde geçişlerimiz açıktır ve yeni iş aynı gün başlayabilir. İlk kiralamada talebi erişim payıyla açın; sonraki işlerde bu adım ortadan kalkar.",
            },
            {
                soru: "Çelik tesisinin kendi iskelesindeyiz; hangi kurallar geçerli?",
                cevap:
                    "İkisi birden — tesisin İSG sistemi ve liman güvenlik rejimi üst üste biner: tesis tarafından iş izni, İSG dosyası ve saha oryantasyonu; liman tarafından İSPS bildirimi ve geçiş düzeni. Erişim planını iki sistemin şartını birden karşılayacak şekilde kuruyoruz ve evrak setimiz her iki formata hazırdır. Bu çift kapılı yapı ilk seferde birkaç gün ister; kayıtlar açıldıktan sonra tekrarlayan işler tek koordinasyonla yürür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Nemrut Körfezi'nin liman/çelik kümesi kamuya açık bilgidir; İSPS, Zone ve rüzgâr limitleri mevzuat/standart, pencere-blok modeli firma pratiğidir.",
    },

    "bolge:menderes": {
        h1: "Menderes'te İSG Uyumlu Manlift Kiralama",
        giris:
            "Menderes, İzmir'in güney aksında İTOB Organize Sanayi Bölgesi'ni ve havalimanı çevresinin lojistik-teknik kuşağını barındırır. Bölgenin İSG profili iki uçludur: İTOB'un orta ölçekli üretim tesisleri standart sanayi rejimiyle çalışırken, havalimanına komşu operasyonlar (kargo tesisleri, teknik binalar, akaryakıt ikmal altyapısı) havacılık güvenlik kurallarının gölgesinde iş yapar. Bu ikinci grupta yüksekte çalışma, alan izinlerinin ötesinde yükseklik sınırlamalarına da tabidir — havalimanı mania düzlemleri, belirli bölgelerde vinç ve platform çalışmasını bildirime bağlar. Belgeli operatörlü modelimiz her iki uçta da aynı ilkeyle çalışır: iş, izin ve şartlar netleşmeden makine yola çıkmaz; netleştiğinde ise tek seferde, İSG dosyası eksiksiz hâlde tamamlanır.",
        maddeler: [
            {
                baslik: "İTOB'da orta ölçek tesislerin İSG pratiği",
                metin:
                    "İTOB'un mobilya, metal ve plastik ağırlıklı orta ölçekli tesislerinde İSG altyapısı kurumsaldan zayıf olabilir: risk analizi güncel değildir, yüksekte çalışma prosedürü yazılı yoktur, KKD eksiktir. Operatörlü modelimiz bu açığı pratikte kapatır — operatörümüz kendi güvenlik setini (kemer, lanyard, bariyer) ve çalışma disiplinini getirir, iş öncesi kısa saha değerlendirmesiyle riskleri işaretler ve işveren tarafına yazılı bırakır. Küçük tesisin denetimde en çok zorlandığı 'belgeli operatör + belgeli makine' çifti, kiralamayla tek kalemde çözülür.",
            },
            {
                baslik: "Havalimanı çevresinde yükseklik bildirimi",
                metin:
                    "Havalimanı mania düzlemleri içinde kalan bölgelerde belirli yüksekliğin üzerine çıkan geçici ekipman (vinç, platform) bildirime veya izne tabi olabilir; sınırlar bölgeye ve yüksekliğe göre değişir. Bu kuşaktaki işlerde (kargo tesisi cephesi, yüksek depo, aydınlatma direkleri) planlamanın ilk adımı, çalışma noktasının mania haritasındaki konumunu ve gereken bildirimi netleştirmektir — işletmenin tesisi yönetiyorsa bu bilgi genellikle elindedir, değilse süreç birlikte yürütülür. Bildirimsiz yüksek çalışma, bu kuşakta ciddi yaptırım riskidir.",
            },
            {
                baslik: "Akaryakıt ve teknik altyapı çevresinde iş",
                metin:
                    "Havalimanı çevresinin akaryakıt ikmal hatları ve teknik binaları, petrokimya benzeri bir rejim ister: tank ve dolum sahalarının emniyet mesafeleri, statik topraklama kuralları ve sıcak iş yasakları platform çalışmasını çerçeveler. Bu alanlarda dizel makine kullanımı saha şartnamesine tabidir (kıvılcım tutucu şartı yaygındır) ve akülü model çoğu senaryoda ilk tercihtir. İş izni ve refakat düzeni tesis işletmecisinin sistemine göre kurulur; operatör dosyamız bu sistemlere hazırdır.",
            },
            {
                baslik: "Lojistik tesislerde standart yüksek raf düzeni",
                metin:
                    "Havalimanı kuşağının kargo ve lojistik depoları, yüksek raflı standart profildedir ve İSG tarafında bilinen kural seti geçerlidir: raf koridorunda çalışırken koridorun trafiğe kapatılması, forklift-platform ayrımı, iz bırakmayan lastik ve vardiya-şarj planı. Bu tesislerde operatörlü modelin katkısı hızdır — operatörümüz raf işlerinin tipik risklerini (palet taşması, sprinkler hattı yakınlığı, koridor kesişimleri) bilir ve iş, saha ekibini yormadan akar.",
            },
            {
                baslik: "Güney aksında sevkiyat ve destek",
                metin:
                    "Menderes, İzmir merkez-Torbalı-Aydın eksenimizin üzerindedir: teslimat standart 1-2 iş günü, tur birleştirmelerinde daha kısa. İTOB içi işlerde OSB giriş süreci hızlıdır; havalimanı kuşağında ise tesise göre değişen güvenlik bildirimleri süreye eklenir ve talep bu payla açılır. Arıza-ikame desteği aynı eksenden gün içinde ulaşır; uzun işlerde makine sahada konaklar ve bakım yerinde yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Menderes'te saha tipine göre İSG çerçevesi",
                paragraflar: [
                    "Bölgenin iki uçlu yapısında her saha tipinin İSG çerçevesi farklıdır. Aşağıdaki tablo, keşif öncesi beklentiyi netleştirir.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "İSG çerçevesi", "Ön süreç", "Makine tercihi"],
                    satirlar: [
                        ["İTOB üretim tesisi", "Standart sanayi + operatör desteği", "OSB girişi (hızlı)", "Akülü makaslı 8 – 12 m"],
                        ["Kargo / lojistik depo", "Raf düzeni kuralları", "Tesis bildirimi", "Akülü makaslı 12 – 14 m"],
                        ["Havalimanı mania kuşağı", "Yükseklik bildirimi/izni", "Mania kontrolü + bildirim", "İşe göre"],
                        ["Akaryakıt / teknik altyapı", "Emniyet mesafesi + topraklama", "İşletmeci izin sistemi", "Akülü öncelikli"],
                        ["Açık saha / cephe", "Rüzgâr + zemin kontrolü", "Standart keşif", "Dizel veya akülü"],
                    ],
                },
            },
            {
                baslik: "Küçük tesise İSG paketi: kiralamayla gelen uyum",
                paragraflar: [
                    "Orta-küçük ölçekli işletmenin yüksekte çalışma uyumu, çoğu zaman tek eksik zincirinden kopar: belge var makine yok, makine var operatör belgesiz, ikisi var prosedür yazılmamış. Operatörlü kiralama bu zinciri tek kalemde tamamlar — belgeli makine (periyodik kontrol), belgeli operatör (MYK + eğitim kayıtları), iş öncesi saha değerlendirmesi ve iş sonrası yazılı kayıt. Denetim gününde işverenin dosyasına giren bu set, kiralama bedelinin görünmeyen ama gerçek değeridir.",
                    "İTOB'daki tekrarlayan müşterilerimizde bu paket çerçeve anlaşmaya bağlanır: yıllık periyodik işler (aydınlatma, vinç yolu kontrolü, çatı altı bakım) takvimlenir ve her turda aynı dosya düzeni tekrarlanır — işletmenin İSG klasörü, kiralama geçmişiyle birlikte kendiliğinden oluşur.",
                ],
            },
            {
                baslik: "Mania kuşağında iş planlama akışı",
                paragraflar: [
                    "Havalimanı çevresindeki yüksek çalışmalarda akışımız dört adımdır: çalışma noktasının ve maksimum ekipman yüksekliğinin netleştirilmesi, mania haritası kontrolü (nokta hangi düzlemin altında), gereken bildirim/izin sürecinin işletilmesi ve iş planının izin şartlarına (tarih, saat, yükseklik sınırı) göre kurulması. Süreç tesise göre birkaç gün sürebilir; bu payla açılan talep sorunsuz ilerler.",
                    "Pratik not: mania sınırlaması makine seçimini de etkileyebilir — izin verilen maksimum yükseklik, hedefe uzanan en alçak profilli çözümü (örneğin yüksek makaslı yerine eklemli erişim) gerektirebilir. Bu optimizasyonu izin şartı netleştikten sonra yapıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük atölyemizde İSG prosedürlerimiz eksik; kiralama yine de yapılabilir mi?",
                cevap:
                    "Yapılır — ve operatörlü model tam bu durum için doğrudur: belgeli makine ve belgeli operatör bizden gelir, operatörümüz iş öncesi kısa saha değerlendirmesi yapar, güvenlik düzenini (bariyer, kemer, alan ayrımı) kurar ve iş sonrası yazılı kayıt bırakır. Böylece iş güvenle biter ve dosyanıza denetimde geçerli belgeler girer. Kalıcı çözüm olarak yüksekte çalışma prosedürünüzü yazdırmanızı öneririz; tekrarlayan işlerde çerçeve anlaşma, bu düzeni her turda otomatik tekrarlar.",
            },
            {
                soru: "Havalimanına yakın tesisimizde yüksek çalışma için izin gerekir mi?",
                cevap:
                    "Konuma ve yüksekliğe bağlı — mania düzlemleri içinde kalan noktalarda belirli yüksekliğin üzerine çıkan geçici ekipman bildirime veya izne tabi olabilir. İlk adım, çalışma noktanızın harita kontrolü ve planlanan maksimum ekipman yüksekliğinin netleştirilmesidir; tesis işletmeniz bu bilgiye genellikle sahiptir, değilse süreci birlikte yürütürüz. Bildirimsiz yüksek çalışma bu kuşakta ciddi risktir — 'kimse sormaz' yaklaşımıyla iş almıyoruz. İzin şartı netleşince makine ve takvim ona göre kurulur.",
            },
            {
                soru: "Akaryakıt hattımızın yakınında aydınlatma işi var; dizel makine sokabilir miyiz?",
                cevap:
                    "Saha şartnamesi belirler — akaryakıt altyapısı çevresinde dizel kullanımı kıvılcım tutucu şartına veya tam yasağa tabi olabilir; emniyet mesafeleri ve statik topraklama kuralları da işin çerçevesini çizer. Pratik tercihimiz bu alanlarda akülü modeldir: emisyonsuz, kıvılcım riski düşük ve çoğu şartnameyle uyumlu. İşletmecinin izin sistemine iş izni dosyası hazırlarız; metraj akülü sınıfı aşıyorsa şartnameye uygun donanımlı dizel alternatifi değerlendirilir.",
            },
            {
                soru: "İTOB'daki tesisimize teslimat ne kadar sürer?",
                cevap:
                    "Standart 1-2 iş günü — Menderes, İzmir merkez-Torbalı-Aydın eksenimizin üzerinde olduğu için tur birleştirmelerinde daha da kısalır. İTOB giriş süreci hızlıdır ve teslimatı geciktirmez. Talepte üç bilgi süreci tek seferde bitirir: hedef yükseklik, zemin-kapı ölçüleri ve işin tipi (operatörlü/operatörsüz). Operatörlü işlerde operatör planı sevkiyatla birlikte kurulur; arıza-ikame desteği aynı eksenden gün içinde ulaşır.",
            },
            {
                soru: "Kargo depomuzda gece vardiyasında iş yapılabilir mi?",
                cevap:
                    "Yapılır — lojistik tesislerin doğal modeli budur: gündüz elleçleme yoğunken raf koridoru kapatılamaz, gece bloğunda koridor trafiğe kapanır ve iş güvenle akar. Akülü makine sessizdir; gece operasyonun devam eden kısmını (sevkiyat kapıları) rahatsız etmez. Makine gündüz teslim alınır, gece bloğunda çalışılır. Operatörlü modelde gece vardiya planı operatör tarafında da kurulur — uzun gece işlerinde operatör rotasyonu sözleşmede tanımlanır.",
            },
            {
                soru: "Denetimde 'yüksekte çalışma' başlığından eksik çıktık; kiralama bunu çözer mi?",
                cevap:
                    "Kalıcı kısmını çözer: denetimin aradığı 'belgeli makine + belgeli operatör + yazılı düzen' üçlüsü, operatörlü kiralamada dosya hâlinde sağlanır — periyodik kontrol belgesi, MYK ve eğitim kayıtları, iş öncesi değerlendirme ve iş kaydı. Prosedür eksiğiniz (yazılı yüksekte çalışma talimatı) işletmenize aittir ve yazdırılması gerekir; bu konuda yönlendirme yapabiliriz. Sonraki denetimde aynı başlıktan eksik çıkmamanın yolu, işleri belgeli düzenle yapmak ve kayıtları klasörde biriktirmektir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Menderes'in İTOB ve havalimanı kuşağı profili kamuya açık bilgidir; mania düzlemi ve akaryakıt sahası kuralları mevzuat çerçevesidir, İSG paketi firma pratiğidir.",
    },

    "bolge:gaziemir-serbest-bolge": {
        h1: "Gaziemir Ege Serbest Bölgesi'nde Manlift Kiralama",
        giris:
            "Ege Serbest Bölgesi, Türkiye'nin en yoğun serbest bölgelerinden biridir ve Gaziemir'de havalimanının hemen yanında konumlanır. Buradaki platform kiralamanın ilk gerçeği gümrüktür: serbest bölge, gümrük hattının ötesidir ve kiralık makinenin bölgeye girişi-çıkışı, geçici ithalat benzeri bir evrak düzenine tabidir. Bu süreç doğru kurulduğunda rutindir, eksik kurulduğunda ise makine kapıda günlerce bekleyebilir. İkinci gerçek, bölgenin üretim profilidir: elektronik, havacılık komponetleri, tekstil ve medikal ağırlıklı, ihracat disiplinli ve denetim alışkanlığı yüksek tesisler — İSG ve kalite dokümantasyonu bu tesislerde refleks hâlindedir ve platform işinin evrak kalitesi de aynı seviyede beklenir. Belgeli operatörlü modelimiz iki gerçeğin de karşılığıdır: gümrük evrakı ve İSG dosyası, makineyle aynı titizlikte hazırlanır.",
        maddeler: [
            {
                baslik: "Gümrük süreci: makinenin bölgeye giriş düzeni",
                metin:
                    "Serbest bölgeye giren kiralık ekipman, bölge mevzuatının evrak düzenine tabidir: giriş beyanı, ekipman kimliği (seri no, değer beyanı), süre tanımı ve çıkışta aynı düzenin tersine işlemesi. Bu süreci bölge işleticisinin ve kullanıcı firmanın gümrük müşavirliğiyle koordineli yürütüyoruz — evrak setimiz (fatura, makine kimlik belgeleri, sözleşme) sürece hazır formatta gider. Kiralama süresinin uzaması hâlinde süre uzatımı da aynı düzenle yapılır; 'makine içeride, evrak süresi geçmiş' durumuna düşülmez.",
            },
            {
                baslik: "Yüksek dokümantasyon kültürüne uyum",
                metin:
                    "Bölge tesislerinin çoğu uluslararası müşterilere üretir ve denetim alışkanlığı yüksektir: yüklenici İSG dosyası, çalışma izni, ekipman belgeleri ve iş kayıtları standart beklentidir. Platform işlerimizde bu beklenti karşılanır — makine periyodik kontrol belgesi, operatör MYK ve eğitim kayıtları, iş öncesi risk değerlendirmesi ve iş sonu kayıtları dosya hâlinde teslim edilir. Havacılık ve medikal tedarik zincirindeki tesislerde müşteri-özel şartnameler (FOD kontrolü gibi) varsa iş planına işlenir.",
            },
            {
                baslik: "Elektronik ve hassas üretimde çalışma düzeni",
                metin:
                    "Bölgenin elektronik ve medikal üreticilerinde hassas ortam kuralları geçerlidir: ESD kontrol alanlarında topraklama ve uygun donanım, temiz alan yaklaşımı olan bölümlerde partikül disiplini, üretim hattı üstünde düşen parça (FOD) kontrolü. Akülü makaslı ve kompakt eklemli modeller bu ortamların standardıdır; iz bırakmayan lastik ve makine temizliği ön hazırlıktır. Hat üstü işler, tesisin kalite biriminin onayladığı pencere ve prosedürle yapılır — bu tesislerde 'kalite onayı' İSG onayı kadar bağlayıcıdır.",
            },
            {
                baslik: "Depo ve sevkiyat alanlarında ihracat ritmi",
                metin:
                    "Serbest bölge tesislerinin depo-sevkiyat alanları ihracat terminlerine kilitli çalışır: konteyner yükleme günleri ve uçak kargo kesimleri (havalimanı komşuluğunun avantajı) haftalık ritmi belirler. Raf ve kapı üstü işler bu ritmin boşluklarına planlanır; yoğun sevkiyat günlerinde alan trafiği platform çalışmasına kapalıdır. Standart yüksek raf kuralları (koridor kapatma, forklift ayrımı, şarj planı) burada da geçerlidir.",
            },
            {
                baslik: "Bölge içi lojistik ve konumun avantajı",
                metin:
                    "Gaziemir, İzmir merkez filomuza en yakın hedeflerden biridir: sevkiyat kısa, arıza-ikame desteği hızlıdır. Ancak gümrük süreci nedeniyle 'aynı gün makine' serbest bölgede gerçekçi değildir — evrak hazırlığıyla birlikte tipik planlama 2-3 iş günüdür. Bu yüzden bölge içi işlerde iki model öne çıkar: işleri biriktirip tek girişte bitirmek (giriş-çıkış evrak yükü teke iner) ve uzun dönem konaklama (makine içeride kalır, evrak süresi uzatılır, işler takvimle akar).",
            },
        ],
        ekBolumler: [
            {
                baslik: "Serbest bölge kiralama akışı: evraktan işe",
                paragraflar: [
                    "Bölge işlerinde standart akışımız aşağıdadır. Gümrük adımı ilk kiralamada en uzun kalemdir; tekrarlayan işlerde kısalır.",
                ],
                tablo: {
                    basliklar: ["Adım", "İçerik", "Sorumlu", "Tipik süre"],
                    satirlar: [
                        ["1. Keşif + iş tanımı", "Hedefler, ortam kuralları, pencere planı", "Birlikte", "Aynı gün"],
                        ["2. Gümrük evrak seti", "Giriş beyanı, makine kimliği, süre tanımı", "Biz + müşavirlik", "1 – 2 iş günü"],
                        ["3. Tesis İSG/kalite onayı", "Yüklenici dosyası, çalışma izni", "Biz + tesis", "Paralel yürür"],
                        ["4. Giriş + iş", "Sevkiyat, saha düzeni, iş blokları", "Biz", "Plana göre"],
                        ["5. Çıkış evrakı", "Giriş düzeninin tersi", "Biz + müşavirlik", "1 iş günü"],
                    ],
                },
            },
            {
                baslik: "Tek girişte çoklu iş: evrak ekonomisi",
                paragraflar: [
                    "Serbest bölgede her giriş-çıkış bir evrak dosyasıdır; bu yüzden bölge içi işlerin ekonomisi, iş birleştirmeyle kurulur. Aynı tesisin dağınık işleri (aydınlatma + raf + cephe) tek girişte sırayla bitirilir; komşu tesislerin işleri de — her birinin kendi kullanıcı evrakıyla — aynı makine döneminde art arda planlanabilir. Bölgenin kompakt yerleşimi tesisler arası geçişi dakikalara indirir.",
                    "Uzun dönem ihtiyaçta konaklama modeli evrak yükünü daha da azaltır: makine bir kez girer, süre uzatımlarıyla içeride kalır ve işler takvimle akar. İhracat yoğun dönemlerin öncesindeki bakım dalgası (denetim + sezon hazırlığı) bu modelin en verimli penceresidir.",
                ],
            },
            {
                baslik: "Havacılık ve medikal tedarikçilerinde FOD disiplini",
                paragraflar: [
                    "Havacılık komponenti ve medikal üretim yapan tesislerde yabancı madde (FOD) kontrolü, platform işinin her adımını şekillendirir: sepete çıkan her alet listelenir, iş sonunda sayım yapılır, makine üzerinde gevşek parça kontrolü iş öncesi tamamlanır ve çalışma alanının altı yalnızca bariyerle değil toplama örtüsüyle korunabilir. Bu disiplin bize yabancı değildir ve müşteri şartnamenize göre uygulanır — kalite biriminizin onay sürecine hazır prosedür dosyamız vardır.",
                    "ESD kontrol alanlarında ek olarak topraklama sürekliliği ve uygun donanım kuralları geçerlidir. Her iki disiplinin kayıtları, tesisisinizin müşteri denetimlerinde kullanılabilir formatta teslim edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Serbest bölgeye makine girişi ne kadar sürüyor?",
                cevap:
                    "İlk kiralamada evrak hazırlığıyla birlikte tipik 2-3 iş günü: giriş beyanı ve makine kimlik seti müşavirlikle koordineli hazırlanır, tesis onayı paralel yürür ve sevkiyat evrakın netleştiği güne planlanır. Tekrarlayan işlerde süreç kısalır — düzen kurulu, format hazırdır. 'Aynı gün makine' serbest bölgede gerçekçi olmadığı için acil ihtimalli dönemlerde (denetim öncesi, sezon hazırlığı) işleri önceden planlamak tek sağlıklı yoldur.",
            },
            {
                soru: "Kiralama süremiz uzarsa gümrük tarafında sorun olur mu?",
                cevap:
                    "Doğru yönetilirse olmaz: süre uzatımı, giriş düzeninin devamı olarak müşavirlikle koordineli işletilir ve makinenin evrak süresi hiçbir gün açıkta kalmaz. Bunu takvimle biz izliyoruz — uzatma ihtiyacı görünür görünmez süreç başlar, 'evrak süresi geçmiş makine' durumu yaşanmaz. Uzun dönem konaklama planlarında uzatım periyotları sözleşmeye baştan yazılır ve her periyot otomatik takip edilir.",
            },
            {
                soru: "Müşterimizin denetimi var; platform işi kayıtları denetime uygun mu?",
                cevap:
                    "Evet — bölge tesislerinin denetim kültürüne göre çalışıyoruz: makine periyodik kontrol belgesi, operatör MYK ve eğitim kayıtları, iş öncesi risk değerlendirmesi, çalışma izinleri ve iş sonu kayıtları dosya hâlinde teslim edilir. FOD veya ESD şartnameniz varsa uygulama kayıtları da eklenir. Bu dosya, müşteri denetiminde 'yüklenici yönetimi' başlığının kanıt setidir — formatı denetim standardınıza göre uyarlayabiliriz.",
            },
            {
                soru: "Üretim hattımızın üzerinde FOD hassasiyetiyle iş yapılabilir mi?",
                cevap:
                    "Yapılır — FOD prosedürüyle: sepet aleti listelenir ve iş sonunda sayılır, makine gevşek parça kontrolünden geçer, çalışma altı bariyer + gerekirse toplama örtüsüyle korunur ve iş, kalite biriminizin onayladığı pencerede yürür. Hat üstü doğrudan müdahaleler çoğunlukla hat duruş bloklarına alınır; hat kenarı işler bu düzenle paralel yapılabilir. Prosedür dosyamız kalite onay sürecinize hazırdır — şartnamenizi keşifte alıyoruz.",
            },
            {
                soru: "Bölgedeki üç ayrı işimizi tek kiralamada yapabilir miyiz?",
                cevap:
                    "Evet ve bu, serbest bölgenin en ekonomik modelidir: her giriş-çıkış bir evrak dosyası olduğu için işleri tek girişte birleştirmek evrak yükünü ve maliyeti teke indirir. Aydınlatma + raf + cephe gibi dağınık işler sırayla bitirilir; komşu tesislerin işleri de aynı makine döneminde art arda planlanabilir (her biri kendi kullanıcı evrakıyla). İş listenizi talepte paylaşın — giriş dosyası, tüm listeyi kapsayacak şekilde tek seferde hazırlanır.",
            },
            {
                soru: "ESD alanımız için makine şartlarımız var; karşılanır mı?",
                cevap:
                    "Karşılanır: topraklama sürekliliği belgelenir, operatör ESD donanımıyla çalışır ve iletken lastik şartı varsa uygun model sevk edilir. Elektronik üretim ortamının ek kuralları (partikül disiplini, yavaş hareket, temizlik) iş planına işlenir. Şartnamenizi talepte alıyor, hazırlığı ona göre belgeliyor ve kalite biriminizin onayına hazır dosyayla geliyoruz — ilk işte kurulan bu düzen, sonraki tüm kiralamalarınızda hazır tekrarlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ege Serbest Bölgesi'nin Gaziemir konumu, gümrük hattı niteliği ve elektronik/havacılık/medikal profili kamuya açık bilgidir; FOD/ESD disiplinleri sektör standartlarıdır.",
    },

    "bolge:bergama-osb": {
        h1: "Bergama OSB'de Belgeli Operatörlü Manlift Kiralama",
        giris:
            "Bergama OSB ve çevresindeki işletmelerin platform ihtiyacında bir gerçek öne çıkar: bu bölgede MYK belgeli platform operatörü bulmak, makinenin kendisini bulmaktan zordur. İzmir merkezin operatör havuzu 100 kilometre uzaktadır ve bölge tesislerinin kadrolarında belgeli operatör istisnadır. Operatörlü kiralama modelimiz bu açığın doğrudan cevabıdır — makine ve belgeli operatör birlikte gelir, iş güvenle ve hızla biter, işletme ne belge peşinde koşar ne denetim riski taşır. Gıda tesislerinden maden destek yapılarına uzanan yelpazede operatörlerimiz, her saha tipinin kendi rejimini (hijyen, maden İSG, yüksek riskli alan) bilerek çalışır; uzak sahada operatör planlaması — konaklama, vardiya, rotasyon — sözleşmenin doğal parçasıdır.",
        maddeler: [
            {
                baslik: "Operatör açığı ve yasal zorunluluk",
                metin:
                    "Yükseltilebilir platformu kullanacak kişinin MYK yeterlilik belgesi taşıması yasal zorunluluktur ve belge makine tipine göredir. Bergama gibi merkeze uzak bölgelerde bu belgeye sahip personel azdır; işletmelerin 'forkliftçimiz kullanır' yaklaşımı hem yasal risk hem kaza riskidir — platform, forkliftten farklı bir makine sınıfıdır ve belgesi ayrıdır. Operatörlü modelde bu zincir bizden tamamlanır: operatör belgesi, eğitim kayıtları ve sigortası dosyada hazırdır; denetimde işverenin eli güçlüdür.",
            },
            {
                baslik: "Uzak sahada operatör lojistiği",
                metin:
                    "Merkeze uzak işlerde operatör planı, makine planı kadar önemlidir: günübirlik işlerde operatör sevkiyatla gelir-döner; çok günlük işlerde konaklama düzeni kurulur (tesis misafirhanesi veya bölgede konaklama) ve uzun projelerde operatör rotasyonu sözleşmede tanımlanır. Bu lojistik bizim tarafımızdan yönetilir — işletmenin tek muhatabı iş planıdır. Kampanya dönemi gece bloklarında çalışan gıda tesislerinde operatör vardiyası, tesisin pencere düzenine göre kurulur.",
            },
            {
                baslik: "Gıda tesislerinde operatörün hijyen uyumu",
                metin:
                    "Bölgenin gıda işleyicilerinde operatör, tesisin hijyen rejimine tabidir: sağlık raporu, hijyen eğitimi kaydı, tesise uygun kıyafet-KKD ve davranış kuralları (takı, kişisel eşya, yeme-içme alanları). Operatör dosyamız bu beklentiye hazırdır ve gıda sahası deneyimli operatörler önceliklendirilir. Hat üstü ve açık ürün çevresindeki işlerde operatörün alet disiplini (bağlama, sayım) tesisin yabancı madde prosedürüne entegre çalışır.",
            },
            {
                baslik: "Maden destek sahalarında operatör şartları",
                metin:
                    "Bölgedeki maden operasyonlarının sahalarında operatör şartları en ağır seviyededir: maden İSG mevzuatı kapsamında saha eğitimi-oryantasyonu, sağlık gözetimi kaydı ve izin sistemine kayıtlı çalışma. Operatörlerimizden maden sahası dosyası tamamlanmış olanlar bu işlere atanır; ilk kayıt sürecinin birkaç gün alabildiği bilinerek talep erken açılır. Toz ve arazi koşullarında makine bakımı sıklaştırılır; operatör, günlük kontrol listesini saha kayıt düzenine işler.",
            },
            {
                baslik: "Operatörün ikinci değeri: keşif ve önleme",
                metin:
                    "Deneyimli operatörün işe katkısı kullanmaktan ibaret değildir: sahaya bakışı bir ön keşiftir — zemin zayıflığını, elektrik hattı yakınlığını, rüzgâr riskini iş başlamadan görür ve düzeltilmesini ister. Uzak sahada bu yeti kritiktir; merkezden destek saatler uzaktayken sahadaki doğru karar, kaybedilecek günü kurtarır. Operatörlerimiz her iş sonunda kısa saha notu bırakır: yapılan iş, kullanılan pencere, gözlenen riskler — işletmenin bakım klasörüne doğrudan giren bir kayıt.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bergama'da operatörlü kiralama senaryoları",
                paragraflar: [
                    "Bölgedeki tipik senaryolar ve operatör düzeni aşağıdadır. Uzak saha lojistiği her senaryonun içine işlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Operatör düzeni", "Süre modeli", "Not"],
                    satirlar: [
                        ["Günübirlik bakım işi", "Sevkiyatla gelir-döner", "Günlük", "İşler birleştirilirse verim artar"],
                        ["Gıda tesisi hazırlık dönemi", "Konaklamalı, pencere vardiyası", "Haftalık / aylık", "Hijyen dosyası hazır"],
                        ["Maden destek sahası", "Saha kayıtlı operatör", "Haftalık +", "İlk kayıt birkaç gün"],
                        ["Kampanya içi acil protokol", "Çağrıya hazır operatör", "Blok bazlı", "Önceden kurulmuş protokol şart"],
                        ["Uzun proje (kurulum, revizyon)", "Rotasyonlu", "Aylık", "Rotasyon sözleşmede"],
                    ],
                },
            },
            {
                baslik: "Belgesiz kullanım: bölgede en sık gördüğümüz risk",
                paragraflar: [
                    "Merkeze uzak bölgelerin ortak deseni şudur: makine kiralanır, belgeli operatör bulunamaz, 'idare eden' bir personel kullanır. Bu desen üç riski birden taşır — iş kazasında işverenin doğrudan kusuru, denetimde idari yaptırım ve sigorta tarafında ret gerekçesi. Platform kazalarının önemli bölümü devrilme ve sıkışma kaynaklıdır ve bunların çoğunda ortak nokta eğitimsiz kullanımdır: çukur önleme sistemini devre dışı bırakmak, eğimde çalışmak, sepette merdiven kullanmak.",
                    "Operatörlü model bu deseni kökünden keser ve maliyeti sanıldığından düşüktür: operatör bedeli, tek bir kaza gününün — üretim kaybı, tazminat, yaptırım — yanında ihmal edilebilir kalır. Tekrarlayan ihtiyacı olan işletmelere ikinci yol da öneriyoruz: kendi personeline MYK belgesi aldırmak; süreç ve eğitim kaynakları konusunda yönlendirme yapıyoruz.",
                ],
            },
            {
                baslik: "Uzak sahada iş güvencesi: plan + protokol + kayıt",
                paragraflar: [
                    "Bergama işlerinde güvence üç ayaklıdır. Plan: keşif formu eksiksiz doldurulur (hedefler, zemin, geçişler, pencereler) ve makine-operatör çifti işe tam uyumla gönderilir — uzakta 'yanlış gönderim' telafisi bir gündür. Protokol: düzenli müşterilerde acil iş akışı önceden kurulur; kampanya ortasında doğan iş, telefonla başlayıp ilk pencerede biter. Kayıt: her işin dosyası (izinler, kontroller, saha notu) işletmeye teslim edilir ve tekrarlayan işlerde birikimli bir bakım geçmişi oluşur.",
                    "Bu üçlü, uzak sahanın belirsizliğini merkez işi rutinine indirger — Bergama'daki müşterilerimizin tekrarlama oranının yüksek olmasının nedeni budur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizde platform kullanacak belgeli kimse yok; iş nasıl yapılır?",
                cevap:
                    "Operatörlü kiralamayla — bölgede en yaygın modelimiz budur: makine ve MYK belgeli operatör birlikte gelir, iş operatörümüzle yapılır ve dosya (belge, eğitim kayıtları, sigorta) denetime hazır teslim edilir. 'İdare eden personel kullanır' yaklaşımı yasal değildir ve kaza riskinin ana kaynağıdır — bu yolu önermiyoruz ve desteklemiyoruz. İhtiyacınız tekrarlayacaksa paralel olarak kendi personelinize belge aldırmayı planlayın; yönlendirmesini yapıyoruz.",
            },
            {
                soru: "Birkaç günlük iş için operatör Bergama'da nasıl konaklar?",
                cevap:
                    "Sözleşmede tanımlı düzenle: tesisinizin misafirhane imkânı varsa o kullanılır, yoksa bölgede konaklama bizim organizasyonumuzla kurulur ve koşullar teklifte açık kalemdir. Gece bloklu çalışmalarda (kampanya pencereleri) operatör vardiyası pencere düzeninize göre planlanır. Uzun projelerde rotasyon devreye girer — operatör değişimlerinde iş devri, saha notlarıyla kesintisiz yapılır. Bu lojistiğin tamamı bizden yönetilir; muhatabınız yalnızca iş planıdır.",
            },
            {
                soru: "Gıda tesisiyiz; operatörünüz hijyen kurallarımıza uyar mı?",
                cevap:
                    "Uyar — gıda sahası bizim standart profillerimizden biridir: operatör sağlık raporu ve hijyen eğitim kaydıyla gelir, tesise uygun kıyafet-KKD kullanır ve davranış kurallarınıza (takı, kişisel eşya, alan sınırları) tabidir. Hat üstü işlerde alet bağlama-sayım disiplini, yabancı madde prosedürünüze entegre çalışır. Dosya, müşteri denetimlerinizde 'yüklenici yönetimi' kanıtı olarak kullanılabilir formattadır. Gıda deneyimli operatör ataması için talepte tesis tipini belirtmeniz yeterlidir.",
            },
            {
                soru: "Maden sahamızda çalışacak operatörün ek şartları var; süreç nasıl işler?",
                cevap:
                    "Maden İSG mevzuatının şartlarıyla: saha eğitimi-oryantasyonu, sağlık gözetimi kaydı ve izin sistemine kayıt. Maden dosyası tamamlanmış operatörlerimiz bu işlere atanır; sahanıza özel ilk kayıt birkaç gün alabildiği için talep erken açılmalıdır. Makine tarafında toz-arazi koşullarına göre (çoğunlukla dizel arazi tipi) seçim yapılır ve bakım sıklaştırılır. Operatör, günlük kontrol listesini saha kayıt düzeninize işler — denetim izlenebilirliği tam olur.",
            },
            {
                soru: "Kampanya ortasında acil iş çıkarsa operatörlü makine ne kadar sürede gelir?",
                cevap:
                    "Protokol kuruluysa ilk uygun pencerede — iş tanımları, bariyer-izin düzeni ve çağrı akışı önceden hazır olduğu için süreç telefonla başlar ve vardiya arasında biter. Protokolsüz durumda gerçekçi süre ertesi gündür: mesafe ve operatör planlaması bunu belirler. Kampanya dönemine giren tesislere önerimiz bu yüzden nettir: hazırlık işlerini kampanya öncesi bitirin ve acil protokolü baştan kurun — kriz anında plan yapılmaz, işletilir.",
            },
            {
                soru: "Operatörlü model, operatörsüzden ne kadar pahalı?",
                cevap:
                    "Fark, operatör günlük bedelidir ve uzak sahada bu farkın karşılığı nettir: belge-denetim riski sıfırlanır, iş deneyimli elde hızlanır (çoğu işte süre kısalır ve toplam fark daralır), saha riskleri önceden görülür ve kayıt düzeni hazır gelir. Kaza senaryosunun maliyeti — üretim kaybı, tazminat, yaptırım — yanında operatör bedeli ihmal edilebilir kalır. Uzun projelerde iki modelin toplamını karşılaştırmalı gösteriyoruz; kararı rakamla verirsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. MYK belge zorunluluğu mevzuattır; Bergama'nın operatör havuzu gerçeği ve uzak saha lojistiği firma pratiğidir. Kaza desenleri sektör İSG istatistiklerinin genel bilgisidir.",
    },
};
