// ═══════════════════════════════════════════════════════════════════════════
// manisaforklift.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Yükleme, depo ve üretim hattı FORKLİFT operasyonları. Açı: OPERASYON
// MÜKEMMELLİĞİ — günlük forklift operasyonunun verimi, güvenliği ve planlaması:
// hat kenarı trafik düzeni, rampa doluluk yönetimi, vardiya bazlı makine planı,
// operatör performansı ve İSG, akü şarj pencereleri, ataşman operasyonu,
// kiralık filo yönetimi.
//
// ⚠️ Kardeş domain izmirforkliftkiralama.net aynı makine tipini 'forklift
// SEÇİMİ' (tonaj, güç tipi, mast, hangi makine) açısından anlatır — bu dosya
// SEÇİMİ değil OPERASYONU anlatır. Cümle/tablo/SSS tekrarı YASAK; oradaki
// manisa-osb-cevre-ili sayfasıyla örtüşmemek özellikle gözetildi.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca sektör standardı, doğrulanabilir teknik bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANISAFORKLIFT_COM: Record<string, BespokeIcerik> = {
    "bolge:manisa-osb": {
        h1: "Manisa OSB'de Forklift Operasyonu: Hat Kenarı Trafiğini Duraksatmadan Yönetmek",
        giris:
            "Manisa OSB'nin beyaz eşya ve elektronik fabrikalarında forklift operasyonunun ölçüsü makinenin gücü değil, akışın kesintisizliğidir. Montaj bandı komponent bekliyorsa on saniyelik gecikme bile hattın temposuna yansır; bu yüzden buradaki forklift işi bir taşıma faaliyeti olmaktan çıkıp bir zamanlama disiplinine dönüşür. Operasyonu iyi kurulmuş bir tesiste hangi makinenin hangi dakikada hangi istasyonun önünde olacağı bellidir; kötü kurulmuş tesiste ise aynı sayıda makine koridorlarda birbirini bekler, telsizle çağrılır, boş palet peşinde tur atar. İkisi arasındaki fark ekipman değil işletme farkıdır. Bu sayfayı, OSB içindeki üretim tesislerinde forklift trafiğini günlük yöneten ekipler için hazırladık: turlu besleme düzeninin kurulması, boş kap dönüşünün planlanması, koridor kesişimlerinin İSG gözüyle ele alınması, vardiya devir teslimlerinde makine kontrolü ve şarj pencerelerinin üretim molalarına yerleştirilmesi. Amaç aynı filodan daha fazla akış çıkarmaktır — daha fazla makine kiralamak değil.",
        maddeler: [
            {
                baslik: "Turlu besleme düzeni: çağrı üzerine koşan forklift, geç kalan forklifttir",
                metin:
                    "Hat kenarını çağrı geldikçe besleyen operasyon, tanım gereği reaktiftir: istasyon malzemesiz kalır, telsiz anonsu geçilir, makine o anda neredeyse oradan koşar. Verimli düzen bunun tersidir — forklift, önceden çizilmiş bir turu sabit periyotla döner, her turda tanımlı istasyonlara tanımlı miktarda malzeme bırakır ve boşalan kapları aynı turda geri toplar. Tur süresi, en hızlı tüketen istasyonun stok eriyip bitme süresinden kısa tutulur. Bu düzenin görünmeyen kazancı trafiktedir: rastgele koşuşturma yerine tek yönlü, öngörülebilir bir dolaşım oluşur ve koridor kesişme sayısı kendiliğinden azalır.",
            },
            {
                baslik: "Boş kap ve palet dönüşü: geri yönü planlanmayan akış yarım akıştır",
                metin:
                    "Hat kenarında biriken boş enjeksiyon kasası, sac sehpası ve palet, çoğu tesiste ikinci sınıf iş sayılır ve birikmeye bırakılır — sonra bir vardiya, sırf boş kap toplamakla geçer. Oysa boş kabın geri dönüşü, dolu malzemenin gidişiyle aynı akışın parçasıdır: turlu düzende her bırakma noktası aynı zamanda toplama noktasıdır ve makine hiçbir yöne boş gitmez. Boş kap istif alanının yeri de operasyon kararıdır; hat kenarına çok yakınsa yer yer, sevkiyata çok uzaksa tur uzar. Günün sonunda sayılması gereken metrik basittir: forkliftin yüklü kat ettiği mesafenin toplam mesafeye oranı.",
            },
            {
                baslik: "Koridor kesişimleri ve yaya teması: kaza istatistiğinin doğduğu üç nokta",
                metin:
                    "Üretim sahasındaki forklift kazaları rastgele dağılmaz; kapı ağızları, kör köşeler ve yaya yolu kesişimleri olmak üzere üç noktada toplanır. Operasyon planı bu üç noktayı isim isim listeler ve her birine fiziksel önlem atar: kapı ağzına sensörlü ikaz lambası, kör köşeye tavan aynası, kesişime zemin ışığı (mavi nokta) ve zorunlu duruş çizgisi. Kural tarafında en etkili iki uygulama, geri viteste dönüp bakma zorunluluğunun kabin içi uyarıyla desteklenmesi ve yüklü makineye yol önceliği verilmesidir. Bu önlemlerin tamamı bir günde kurulur; kurulmadığı her gün, istatistiğe aday üretir.",
            },
            {
                baslik: "Vardiya devir teslimi: beş dakikalık kontrol, gün ortası arızayı önler",
                metin:
                    "Çok vardiyalı tesiste forklift el değiştirirken yapılan devir kontrolü, operasyonun en ucuz sigortasıdır: çatal ve zincirde gözle kontrol, lastik yüzeyi, korna-fren-ikaz testi, akü şarj seviyesi ve kabin içi hasar notu — beş dakikalık standart bir listeyle vardiyaya başlanır. Bu listeyi atlayan tesislerde arıza hep 'vardiya ortasında, en yoğun saatte' çıkar; çünkü küçük belirti bir önceki vardiyada fark edilmemiştir. Devir kaydının yazılı tutulması ikinci kazancı getirir: hasarın hangi vardiyada oluştuğu tartışması biter ve operatör, teslim aldığı makinenin durumunu kayıtla kanıtlayabilir.",
            },
            {
                baslik: "Şarj penceresi planlaması: akü, üretim molasında dolar",
                metin:
                    "Akülü filoda şarj saatleri üretim planından bağımsız bırakılırsa iki kayıp birden doğar: makine en yoğun saatte şarjda kalır veya akü, ömrünü kısaltan derin deşarja sürülür. Doğru kurulum, tesisin mola ve yemek pencerelerini şarj takvimine çevirir — Li-Ion filoda kısa pencereler fırsat şarjıyla değerlendirilir, kurşun-asit filoda ise şarj bölünmez ve vardiya sonuna bloklanır. Şarj istasyonunun tur rotasına yakınlığı da hesaba girer: rotadan uzak istasyon, her şarj gidiş-gelişinde dakika eritir. Aylık bakılan gösterge, makine başına 'şarjda geçen üretken saat' olmalıdır; sıfıra yaklaştırmak mümkündür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hat besleme operasyonunun günlük göstergeleri",
                paragraflar: [
                    "Aşağıdaki tablo, üretim tesislerinde forklift operasyonunu günlük izlemek için kullandığımız temel göstergeleri, sağlıklı yönelimi ve bozulduğunda ilk bakılacak nedeni özetler.",
                ],
                tablo: {
                    basliklar: ["Gösterge", "Nasıl ölçülür", "Sağlıklı yönelim", "Bozulunca ilk bakılan"],
                    satirlar: [
                        ["Yüklü sefer oranı", "Yüklü mesafe / toplam mesafe", "Yükselen", "Boş kap dönüş planı"],
                        ["İstasyon bekleme", "Hat kenarında malzemesiz dakika", "Sıfıra yakın", "Tur periyodu ve stok eşiği"],
                        ["Şarjda üretken saat", "Mesai içinde şarjda kalınan süre", "Azalan", "Mola-şarj penceresi uyumu"],
                        ["Devir kontrol uyumu", "Doldurulmuş liste / vardiya sayısı", "Yüzde yüz", "Vardiya amiri takibi"],
                        ["Yakın ıskalama kaydı", "Bildirilen tehlikeli temas sayısı", "Bildirim artar, kaza düşer", "Kesişim önlemleri"],
                    ],
                },
            },
            {
                baslik: "Operatör performansı: hız değil, akış ve hasarsızlık ölçülür",
                paragraflar: [
                    "Forklift operatörünü sefer sayısıyla ölçen tesis, farkında olmadan hız primi vermiş olur — ve hızın faturası hasar ile kaza olarak döner. Doğru performans çerçevesi üç ayaklıdır: akış (sorumlu olduğu istasyonların malzemesiz kalmaması), hasarsızlık (elleçleme kaynaklı ürün-raf-makine teması) ve disiplin (devir kontrolü, hız sınırı, emniyet kemeri uyumu). Bu üçlü, vardiya bazında izlenip operatörle birlikte konuşulduğunda davranış değişir; panoya asılan sıralama tablosundan çok, ayda bir yapılan birebir değerlendirme etkilidir.",
                    "Yeni operatörün sahaya alışma dönemi de operasyon planına dahildir: ilk hafta yoğun rotada değil, ikincil rotada çalıştırmak ve deneyimli bir operatörü gölge olarak atamak, hem hasar riskini hem yeni kişinin stresini düşürür. Kiralık makineyle gelen operatör değişimlerinde bu geçiş süreci daha da önemlidir.",
                ],
            },
            {
                baslik: "Kiralık filoyla operasyon: sorumluluk haritası netse sürtünme yoktur",
                paragraflar: [
                    "Uzun dönem kiralık filoyla çalışan tesislerde operasyonun akıcılığı, sorumluluk haritasının netliğine bağlıdır: periyodik bakım, arıza müdahalesi ve yedek parça kiralayan firmadadır; günlük devir kontrolü, temizlik ve doğru kullanım tesistedir; şarj altyapısı ve saha düzeni ortak planlanır. Bu harita sözleşmede yazılı olduğunda arıza günü kimse kimseyi aramaz — tanımlı süreç işler. Bakım ziyaretlerinin üretim takvimine göre planlanması da operasyon konusudur: bakım, sevkiyat tepesine değil sakin güne alınır.",
                    "Filo boyutunun dönemsel gözden geçirilmesi kiralamanın sunduğu esnekliktir: üretim temposu düşen ayda makine iade edilebilir, yeni hat devreye girerken ek makine planlanır. Bu esnekliği kullanmayan tesis, kiralamanın yarısını satın almış gibi yaşar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift sayımız yeterli görünüyor ama hat kenarı yine de malzemesiz kalıyor; neden?",
                cevap:
                    "Neredeyse her seferinde sorun sayıda değil düzendedir: makineler çağrı üzerine çalışıyorsa aynı anda iki istasyon çağırdığında biri mutlaka bekler ve bekleme hep en kötü anda gelir. Çözümün ilk adımı bir haftalık basit gözlemdir — hangi istasyon, hangi saatte, kaç dakika malzemesiz kalıyor ve o sırada makineler nerede. Bu tablo çıktığında genelde iki bulgu görünür: makinelerin boş dolaşım oranı yüksektir ve besleme, tüketim hızına değil çağrı sırasına göre yapılmaktadır. Turlu besleme düzenine geçmek, aynı makine sayısıyla bekleme sürelerini çoğu tesiste sıfıra indirir. Gözlem şablonunu paylaşabiliriz; kurulumu birlikte yapalım.",
            },
            {
                soru: "Vardiya değişiminde makineler kontrolsüz el değiştiriyor; devir düzenini nasıl oturturuz?",
                cevap:
                    "Üç unsurla oturur: kısa bir liste, beş dakikalık zaman ve amir takibi. Liste bir sayfayı geçmemelidir — çatal, zincir, lastik, fren, korna, ikaz, akü seviyesi, gövde hasarı; uzun liste doldurulmaz, kısa liste alışkanlık olur. Zaman tarafında devir kontrolü vardiyanın ilk beş dakikası olarak resmileştirilir ve o dakikalarda operatöre iş verilmez. Takip tarafında vardiya amiri ilk haftalarda listeleri fiilen kontrol eder; alışkanlık oturduktan sonra örneklemeyle sürer. Kiraladığımız makinelerle birlikte devir listesi şablonunu da veriyoruz; tesise özgü kalemler (soğuk oda donanımı, ataşman kontrolü gibi) birlikte eklenir.",
            },
            {
                soru: "Sahada forklift ile yaya trafiğini ayıracak yerimiz dar; yine de güvenli düzen kurulabilir mi?",
                cevap:
                    "Kurulabilir — ayrım her zaman fiziksel bariyer gerektirmez, öncelik sırası şöyledir: mümkün olan koridorlarda bariyer veya çizgiyle tam ayrım; ayrılamayan dar bölümlerde zaman ayrımı, yani forklift geçiş saatleri ile yoğun yaya saatlerinin çakıştırılmaması; kesişimlerin kaldırılamadığı noktalarda ise görünürlük paketi — zemine yansıyan mavi ikaz ışığı, tavan aynası, duruş çizgisi ve düşük hız bölgesi. Dar sahalarda en çok işe yarayan karar, forklift rotasını tek yöne çevirmektir: karşılaşma sayısı yarıya iner. Saha krokinizle bir keşif turu, hangi noktaya hangi önlemin yeteceğini netleştirir.",
            },
            {
                soru: "Operatörlerimiz arasında hasar oranı farkı büyük; nasıl yöneteceğiz?",
                cevap:
                    "Önce farkın kaynağını ayrıştırın: aynı operatör hep aynı noktada mı hasar üretiyor (o noktada düzen sorunu olabilir — dar dönüş, kör köşe, bozuk zemin), yoksa her yerde mi (kullanım tekniği sorunu)? Kayıt bu ayrımı verir. Teknik kaynaklıysa çözüm ceza değil tazeleme eğitimidir: yük alçakta taşıma, mast geri yatırma, dönüşte hız düşürme gibi temel davranışlar kısa saha eğitimiyle düzelir ve etkisi kayıtta bir ayda görünür. Düzen kaynaklıysa harcama operatöre değil sahaya yapılır. En kötü uygulama, hasarı konuşmadan kesintiyle yönetmektir — hasarlar bildirilmemeye başlar ve görünmeyen hasar, yönetilemeyen risktir.",
            },
            {
                soru: "Li-Ion filoya geçtik ama makineler yine gün içinde şarja kalıyor; hesap nerede yanlış?",
                cevap:
                    "Li-Ion'un avantajı fırsat şarjıdır ve fırsat, plan yoksa kullanılamaz: molada şarj kablosuna takılmayan makine, öğleden sonra düşük aküyle şarj istasyonuna mahkûm olur. Kontrol edilecek üç nokta vardır. Birincisi davranış — mola başında makineyi şarja bağlamak, operatörün mola rutininin parçası olmalı ve istasyon, mola alanına yürüme mesafesinde durmalıdır. İkincisi kapasite — istasyon sayısı makine sayısının gerisindeyse sıra oluşur ve pencere boşa geçer. Üçüncüsü görev dağılımı — en yoğun rotadaki makineye en dolu akü sabahtan atanmalıdır. Bu üçü düzeldiğinde gün içi şarj duruşu istisna hâline gelir.",
            },
            {
                soru: "Üretim temposu yılın bir bölümünde düşüyor; kiralık filoyu küçültmek operasyonu aksatır mı?",
                cevap:
                    "Doğru planlanırsa aksatmaz, tersine disiplin kazandırır: tempo düşük dönemde hangi rotaların birleşebileceği, hangi vardiyanın tek makineyle döneceği önceden çalışılır ve iade edilecek makine ona göre seçilir — en yıpranmış veya rotası en kolay devredilen makine gider, kritik rotanın makinesi kalır. Sözleşme tarafında dönemsel küçültme ve tekrar büyütme koşullarının baştan yazılması esastır; böylece tempo geri geldiğinde makine temini pazarlık değil takvim işidir. Üretim planınızın yıllık ritmini paylaşın; filo takvimini o ritme göre birlikte kuralım — kiralamanın satın almaya karşı asıl üstünlüğü bu esnekliktir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Manisa OSB'nin üretim ağırlığı kamuya açık bilgidir; turlu besleme, devir kontrolü, şarj penceresi ve kesişim önlemleri sektör standardı operasyon pratikleridir; gösterge seti firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:turgutlu": {
        h1: "Turgutlu'da Forklift Operasyonu: Toprak Sanayinin Ağır Paletlerini Güvenle Döndürmek",
        giris:
            "Turgutlu'nun sanayi kimliğinde toprağa dayalı üretimin — tuğla, kiremit ve yapı malzemesi — ağırlığı belirgindir ve bu üretim, forklift operasyonuna kendi karakterini dayatır: elleçlenen paletler ağırdır, yük tek parça değil yüzlerce küçük parçanın istifidir ve bağı gevşeyen bir paletin dökülmesi hem ürün kaybı hem ciddi yaralanma riskidir. Saha büyük ölçüde açık havadadır; yazın toz, kışın çamur operasyonun günlük değişkenidir ve stok sahası, üretimden sevkiyata kadar ürünün aylarca bekleyebildiği geniş bir alandır. Böyle bir ortamda forklift operasyonunun kalitesi kapalı depodakinden farklı ölçülür: paletin bantlı-şrinkli bütünlüğü korunarak taşınması, açık stok sahasının adres düzeni, kamyon yüklemesinin dengeli ve hızlı bitirilmesi, tozlu ortamda makinenin günlük bakım ritmi ve zemin bozulmalarının takibi. Bu sayfa, toprak sanayi tesislerinde ve benzer ağır yük sahalarında forklift operasyonunu bu beş başlık üzerinden ele alır.",
        maddeler: [
            {
                baslik: "Ağır ve dökülebilir yük: palet bütünlüğü operasyonun birinci kuralıdır",
                metin:
                    "Tuğla ve kiremit paleti, tek gövdeli bir yük değildir; bant, şrink veya kayışla bir arada duran yüzlerce parçadır ve taşıma sırasındaki her sarsıntı bu bütünlüğü test eder. Operasyon kuralı nettir: bandı gevşemiş, köşesi oturmamış veya istifi kaymış palet taşınmaz — önce sahada yeniden bağlanır. Çatal girişi paletin tam ortasından, iki çatal eşit yük alacak şekilde yapılır; tek çatala binen ağır palet, dönüşte kayar. Taşıma sırasında ani fren ve keskin dönüş, bu yük sınıfında başka sahalardakinden daha pahalıdır; hız sınırı düşük tutulur ve rampalı geçişlerde yük daima eğimin üst tarafında kalır.",
            },
            {
                baslik: "Açık stok sahası düzeni: adressiz saha, forkliftin zamanını yer",
                metin:
                    "Aylarca bekleyen mamulün stoklandığı geniş açık sahada en büyük verim kaybı, aranan partinin bulunamamasıdır: sevkiyat günü forklift, sahada tur atarak doğru paleti arar. Çözüm depoculuğun temel aracıdır ama açık sahada sık ihmal edilir — saha bloklara bölünür, bloklar işaretlenir, her partinin yeri kayda geçer ve sevkiyat listesi adresle birlikte yazılır. İstif yüksekliği de düzenin parçasıdır: ürünün taşıma dayanımına ve zeminin oturmuşluğuna göre sınır belirlenir, yağmur sonrası yumuşayan bölgelerde alçak istife inilir. Düzenli saha, aynı forkliftle günde daha fazla kamyon demektir.",
            },
            {
                baslik: "Kamyon ve dorse yükleme: denge, sıra ve süre birlikte yönetilir",
                metin:
                    "Ağır palet yüklemesinde kamyonun dengesi, yükleme sırasının doğal sonucudur: ağırlık dorse boyunca dengeli dağıtılır, tek tarafa yığılmaz ve dingil yükleri gözetilir. Operasyon tarafında verim, forkliftin bekleme değil yükleme yapmasıyla ölçülür — kamyon gelmeden sevkiyat paletleri adresinden çekilip yükleme ağzına dizilirse, yükleme süresi araç başına belirgin kısalır. Yükleme sırasında şoförün araç çevresinde durduğu nokta baştan belirlenir; forklift manevra alanında yaya, bu sahaların en sık yaşanan tehlikesidir. Son kontrol yük bağlamadır: bağlanmamış ağır paletle kapıdan çıkan araç, sorumluluğu da taşır.",
            },
            {
                baslik: "Toz ve çamurla yaşamak: günlük bakım ritmi makine ömrünü belirler",
                metin:
                    "Toprak sanayi sahasının tozu, forkliftin radyatörüne, hava filtresine ve hareketli aksamına gün boyu dolar; kışın aynı saha çamura döner ve lastik-fren aksamı bu kez ıslak kirle çalışır. Bu ortamda makine ömrünü uzun dönem bakım sözleşmesi değil, günlük ritim korur: vardiya sonunda radyatör ve filtre bölgesinin basınçlı havayla üflenmesi, zincir ve mast kanallarının kontrolü, çamurlu dönemde fren testinin güne başlarken yapılması. Kiralık makinelerde bu rutinlerin kim tarafından yapılacağı teslimatta netleştirilir; tozlu sahada filtre bakım aralığı standart takvimden kısadır ve bakım planı buna göre kurulur.",
            },
            {
                baslik: "Zemin takibi: sahanın çukuru, devrilmenin ön koşuludur",
                metin:
                    "Açık sahada zemin sabit bir veri değildir; kamyon trafiği tekerlek izi açar, yağmur o izi çukura çevirir ve yüklü forkliftin bir tekerinin çukura düşmesi, ağır ve yüksek taşınan yükle birleştiğinde yana devrilme senaryosunun kendisidir. Operasyon planına bu yüzden zemin turu eklenir: haftada bir, yağışlı dönemde daha sık, forklift rotaları üzerindeki bozulmalar işaretlenir ve dolgu-sıkıştırma yapılır. Geçici çözüm de tanımlıdır — bozuk bölge onarılana kadar rota değiştirilir veya o bölümde istif alçaltılıp hız düşürülür. Zemini takip edilmeyen sahada İSG dosyası ne kadar kalın olursa olsun eksiktir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ağır palet sahasında vardiya içi operasyon akışı",
                paragraflar: [
                    "Toprak sanayi tesislerinde tipik bir günün forklift operasyonu, aşağıdaki bloklar hâlinde planlandığında hem sevkiyat hem üretim tarafı beklemeden çalışır.",
                ],
                tablo: {
                    basliklar: ["Zaman bloğu", "Operasyon", "Kritik nokta", "Sorumlu"],
                    satirlar: [
                        ["Vardiya başı", "Makine kontrolü + zemin/rota göz atışı", "Fren ve lastik, çamurlu dönemde zorunlu", "Operatör"],
                        ["Sabah bloğu", "Sevkiyat paletlerini adresten yükleme ağzına çekme", "Kamyon gelmeden hazırlık", "Saha amiri planlar"],
                        ["Gün ortası", "Araç yükleme sıralı devam", "Dorse denge dağılımı, şoför konumu", "Operatör + şoför"],
                        ["Öğleden sonra", "Üretim çıkışını stok adresine kaldırma", "İstif sınırı ve kayıt", "Operatör"],
                        ["Vardiya sonu", "Toz temizliği, filtre-radyatör üfleme, hasar notu", "Tozlu sahada atlanamaz", "Operatör + bakım"],
                    ],
                },
            },
            {
                baslik: "Dökülme ve devrilme: bu yük sınıfının iki ana riski nasıl sıfırlanır",
                paragraflar: [
                    "Ağır ve parçalı yükün iki karakteristik kazası vardır: palet istifinin dökülmesi ve makinenin yana devrilmesi. Dökülmenin kök nedenleri sıralıdır — bozuk bant, eğik çatal girişi, ani manevra ve aşırı istif; her biri için kontrol noktası tanımlanır ve taşımadan önceki iki saniyelik palet bakışı alışkanlık hâline getirilir. Devrilmenin kök nedenleri ise yüksek taşınan yük, bozuk zemin ve dönüşte hız birleşimidir; yükü alçakta taşımak, zemin turunu aksatmamak ve dönüş öncesi yavaşlamak üçlüsü bu senaryoyu fiilen kapatır.",
                    "İki risk için de ortak kural emniyet kemeridir: yana devrilen forkliftte operatörün makineden atlamaya çalışması en ölümcül reflekstir — kemer takılıysa operatör kabin içinde korunur. Bu bilgi her brifingde tekrarlanır çünkü istatistik, tekrarı hak edecek kadar nettir.",
                ],
            },
            {
                baslik: "Sezonluk tempo ve filo esnekliği: inşaat mevsimiyle hizalanmak",
                paragraflar: [
                    "Yapı malzemesi sevkiyatı inşaat mevsimini izler: bahar-yaz aylarında araç trafiği yoğunlaşır, kış aylarında stok birikimi öne çıkar. Forklift operasyonu bu ritme iki şekilde uyarlanır — yoğun sezonda yükleme ağzına ek makine ve gerekirse ek vardiya planlanır, sakin sezonda ise filo küçültülüp bakımlar ve saha düzenlemeleri (adres yenileme, zemin onarımı) bu döneme alınır. Kiralık filo bu esnekliğin doğal aracıdır: sezonluk ek makine tarihli sözleşmeyle bağlanır ve sezon dışında iade edilir.",
                    "Yoğun sezon rezervasyonunun erken yapılması burada da geçerli kuraldır; bölgedeki tesisler aynı mevsimle çalıştığı için talep aynı aylara yığılır. Sevkiyat tahmininiz netleştiğinde filo planını birlikte güncelleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Paletlerimiz taşıma sırasında ara sıra dökülüyor; makine mi yetersiz, operatör mü hatalı?",
                cevap:
                    "Genellikle ikisi de değil — süreç eksiktir: dökülme vakalarının çoğunda palet, taşınmadan önce zaten sorunludur (gevşemiş bant, kaymış sıra, kırık alt palet) ve operatör bunu fark edecek bir kontrol adımına sahip değildir. Kurulacak düzen basittir: taşıma öncesi iki saniyelik palet bakışı zorunlu adım yapılır, sorunlu palet ayrı bölgeye çekilir ve yeniden bağlanmadan taşınmaz; ayrıca dökülen her vaka yer-neden kaydına geçirilir. Kayıt birkaç haftada desen verir — dökülmeler hep aynı üretim hattının paletinde yoğunlaşıyorsa sorun bağlama istasyonundadır, hep aynı rotadaysa zemindedir. Desene göre kök neden çözülür ve dökülme istisnaya iner.",
            },
            {
                soru: "Sevkiyat günleri kamyonlar saatlerce bekliyor; yükleme süresini nasıl kısaltırız?",
                cevap:
                    "Bekleyen kamyonun sorunu genelde yükleme hızı değil hazırlıksızlıktır: araç kapıya yanaştıktan sonra paletler sahada aranmaya başlanıyorsa forklift, yükleme değil arama yapıyordur. Üç adım süreyi kısaltır. Birincisi adres düzeni — her partinin saha adresi kayıtlıysa arama biter. İkincisi ön hazırlık — günün sevkiyat listesi sabah bloklanır ve paletler araç gelmeden yükleme ağzına dizilir. Üçüncüsü sıra planı — dorseye ağırlık dağılımını da gözeten yükleme sırası baştan yazılır ve forklift, düşünmeden yükler. Bu üçü kurulduğunda araç başına yükleme süresi çoğu sahada yarıya iner; ölçüp görmek için araç giriş-çıkış saatini bir hafta kaydetmek yeterlidir.",
            },
            {
                soru: "Kışın saha çamurlanınca operasyon yavaşlıyor ve küçük kazalar artıyor; ne yapmalıyız?",
                cevap:
                    "Çamur dönemini istisna değil planlı bir operasyon modu olarak ele alın: hız sınırı sezonluk düşürülür, istif yükseklikleri yumuşayan bölgelerde alçaltılır, fren testi güne başlarken zorunlu yapılır ve zemin turu haftalıktan günlüğe çıkar. Altyapı tarafında en yüksek getirili yatırım, forklift ana rotalarının — yükleme ağzı, stok girişi, üretim çıkışı arası — stabilize yerine betonlanmasıdır; bütün sahayı betonlamak gerekmez, rotayı betonlamak yeter. Makine tarafında dişli lastiklerin durumu kontrol edilir ve aşınmış lastik çamur sezonuna sokulmaz. Bu paketle çamur dönemi, kaza sezonu olmaktan çıkıp yalnızca yavaş sezon olarak kalır.",
            },
            {
                soru: "Stok sahamız büyüdü ve parti karışıklığı başladı; adres sistemi kurmak zor mu?",
                cevap:
                    "Değil — bir haftalık iştir ve pahalı yazılım gerektirmez: saha krokisi çizilir, bloklara bölünür, bloklar direk-tabela veya boyayla işaretlenir ve her istif hareketi (hangi parti, hangi blok, hangi tarih) basit bir çizelgeye veya tablete işlenir. Kritik olan kurulum değil disiplindir: adressiz istif yapılmaması kural hâline gelmeli ve sevkiyat listeleri adresle yazılmalıdır. İlk kurulumda mevcut stokun sayım ve adreslenmesi en zahmetli adımdır; onu bir kez yapmak, sonrasında her sevkiyat gününde forklift saatinden tasarruf olarak geri döner. Kroki şablonu ve hareket çizelgesi örneğini paylaşabiliriz; kurulumu sahanızda birlikte planlayalım.",
            },
            {
                soru: "Tozlu ortamda kiralık makinenin bakımından kim sorumlu; filtre tıkanırsa fatura kime çıkar?",
                cevap:
                    "Sorumluluk ikiye ayrılır ve teslimatta yazılı netleştirilir: periyodik bakım, parça değişimi ve arıza müdahalesi kiralayan firmadadır; günlük temizlik rutini — vardiya sonu filtre-radyatör üfleme, mast kanalı kontrolü — tesistedir. Tozlu sahada bakım aralığı standart takvimden kısaltılır ve bu sıklaştırma kira planına baştan işlenir; yani tozun olağan etkisi tesise fatura edilmez. Fatura konusu olan durum, tanımlı günlük rutinin hiç yapılmamasından doğan hasarlardır ve bu da iade günü sürpriziyle değil, dönem içi bakım ziyaretlerinde tespit edilip önce uyarıyla yönetilir. Sahanın toz profilini teslimat keşfinde birlikte görür, rutini birlikte yazarız.",
            },
            {
                soru: "Yoğun sezonda ikinci vardiyaya çıkıyoruz; aynı makineyle iki vardiya döner mi, ek makine mi alalım?",
                cevap:
                    "Önce makinenin fiili yükünü ölçün: tek vardiyada makine zaten gün boyu doluysa ikinci vardiya aynı makineyle döner — dizel makinede yakıt dışında engel yoktur, akülüde ise akü planı (yedek akü veya vardiya arası şarj penceresi) kurulmalıdır. Ek makine kararı, iki vardiyanın toplam iş yükü tek makinenin kapasitesini aştığında verilir ve sezonlukta doğru araç tarihli kısa dönem kiralamadır: yoğun aylara ek makine gelir, sezon bitince iade edilir. Kritik bir operasyon notu da ekleyelim — iki vardiya düzeninde devir teslim kontrolü daha da önemlidir, çünkü makine dinlenmeden el değiştirir. Sezon takviminizi paylaşın; vardiya ve filo planını rakamla birlikte kuralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Turgutlu'nun toprağa dayalı sanayi geleneği kamuya açık bilgidir; palet bütünlüğü, dorse denge dağılımı, devrilme önlemleri ve tozlu ortam bakım sıklaştırması sektör standardıdır; vardiya akış planı firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:akhisar": {
        h1: "Akhisar'da Forklift Operasyonu: Zeytin Sezonunun Elleçleme Temposunu Planlamak",
        giris:
            "Akhisar'ın ekonomik omurgası zeytin ve zeytinyağıdır ve bu omurga, ilçedeki forklift operasyonlarına takvimini dayatır: hasatla birlikte alım merkezlerine ve işleme tesislerine ürün akışı başlar, kasalar ve dökme sandıklar sahaya yığılır, salamura tankları ve fıçı-varil trafiği yoğunlaşır, yağhanelerde pirina ve mamul sevkiyatı üst üste biner. Birkaç ay süren bu tempo, yılın geri kalanında yerini depo yönetimine ve düzenli sevkiyata bırakır. Böyle keskin bir mevsimsellikte forklift operasyonunun başarısı, yoğun dönemin kaosunu değil düzenini planlamakla ölçülür: alım sahasında kasa akışının kilitlenmemesi, sıvı yük elleçlemesinin kendine özgü kurallarının işletilmesi, geçici personelin yoğunlaştığı haftalarda İSG disiplininin korunması ve sezon sonunda operasyonun düzenli depo moduna sorunsuz dönmesi. Bu sayfa, zeytin-gıda ekosisteminin forklift operasyonunu sezon öncesi hazırlıktan sezon sonu kapanışa kadar bir bütün olarak ele alır.",
        maddeler: [
            {
                baslik: "Alım sahasında kasa akışı: giriş, tartı ve boşaltma tek hat gibi çalışmalı",
                metin:
                    "Hasat döneminde alım noktasının darboğazı neredeyse hiç forklift sayısı değildir; akışın kilitlendiği yer, dolu kasanın nereye konacağının o anda kararlaştırılmasıdır. Verimli düzen, sahayı önceden bölgelere ayırır: boşaltma ağzı, bekleme bölgesi, işlemeye giden hat ve boş kasa dönüş noktası ayrı ayrı işaretlenir ve forklift, araç geldiğinde düşünmeden çalışır. Boş kasa yönetimi sezonun sessiz kritiğidir — üreticiye dönecek boş kasa birikirse saha daralır ve dolu kasa trafiği kendi çöplüğünde manevra yapmaya başlar. Günün boş kasa çıkışı, dolu kasa girişiyle aynı ciddiyette planlanır.",
            },
            {
                baslik: "Sıvı ve yarı sıvı yük: fıçı, varil ve tank çevresinde forklift kuralları",
                metin:
                    "Salamura ve yağ operasyonunun yük ailesi — dolu fıçı, varil, IBC tank — forklifte iki özel durum getirir: içindeki sıvının hareketi taşıma sırasında yükün dengesini oynatır ve devrilen kabın döktüğü sıvı, zemini bütün saha için kayganlaştırır. Kurallar buna göre yazılır: sıvı yük diğer yüklerden de yavaş taşınır, ani fren ve keskin dönüş bu rotalarda özellikle yasaktır, varil ve fıçı ancak uygun aparatla (varil tutucu, palet üstü sabitleme) elleçlenir ve dökülme anının müdahale seti — emici malzeme, ikaz konisi — sahada hazır bekler. Dökülen zemin temizlenmeden o rotadan forklift geçirilmez; bu kural taviz kabul etmez.",
            },
            {
                baslik: "Yağhane ve işleme içinde emisyon ve hijyen: iç saha akülü döner",
                metin:
                    "Gıda işleme alanının kapalı bölümlerinde forklift operasyonu akülü makinelerle yürütülür; egzozlu makinenin iç sahaya girmemesi hem çalışan sağlığının hem gıda güvenliği denetimlerinin gereğidir. Operasyon tarafında bunun anlamı, iç ve dış saha makinelerinin görev ayrımıdır: dış sahanın dizel makinesi kapıda durur, yük iç sahanın akülüsüne devredilir ve bu devir noktası, iki makinenin de beklemeyeceği şekilde planlanır. Hijyen rutini makineye de işler — hidrolik kaçak kontrolü günlük yapılır, lastik izi bırakmayan tip seçilir ve makine temizliği, üretim alanının temizlik planına bir satır olarak eklenir.",
            },
            {
                baslik: "Sezonun geçici kadrosu: İSG disiplini kalabalıkta gevşemez",
                metin:
                    "Hasat haftalarında sahaya geçici personel katılır ve forklift kazl istatistiğinin sezonluk tepesi tam bu birleşimden doğar: kalabalıklaşan saha, aceleye binen tempo ve makineye aşina olmayan insanlar. Operasyon planı üç önlemle karşılık verir: geçici personelin forklift bölgelerine girişini fiziksel olarak sınırlamak (bariyer ve işaretle), ilk gün brifingini istisnasız herkese vermek ve forklift kullanımını yalnızca belgeli kadroda tutmak — sezon telaşında 'şu paleti çekiver' diye makineye çıkan belgesiz kişi, sahanın en büyük riskidir. Bu üç kural sezon başında bir kez kurulur ve amir takibiyle yaşar.",
            },
            {
                baslik: "Sezon kapanışı: yoğun moddan depo moduna planlı dönüş",
                metin:
                    "Sezon bittiğinde operasyon kendiliğinden normale dönmez; planla döner. Kiralık ek makinelerin iade tarihleri sezon başında yazılmıştır ve iade öncesi hasar-durum turu birlikte yapılır. Kalan filo için bakım penceresi açılır — yoğun dönemde ertelenen periyodik bakımlar bu haftalarda toplanır. Saha tarafında bölge işaretleri, adres düzeni ve zemin onarımları gözden geçirilir; gelecek sezonun hazırlığı, bu sezonun kapanış notlarıyla başlar. Depo moduna geçen operasyonda vardiya sayısı ve rota planı küçülür; küçülmüş planın da yazılı olması, altı ay sonra sezon açılışında elde hazır bir başlangıç noktası bırakır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zeytin sezonu forklift operasyon takvimi",
                paragraflar: [
                    "Sezonun forklift gözüyle akışı aşağıdadır; her aşamanın operasyon odağı ve tipik hatası birlikte verilmiştir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Operasyon odağı", "En sık hata", "Önlem"],
                    satirlar: [
                        ["Sezon öncesi", "Ek makine rezervasyonu, saha bölgeleme", "Hazırlığın hasada bırakılması", "Takvimli plan, erken sözleşme"],
                        ["Hasat tepesi", "Kasa giriş-boşaltma akışı", "Boş kasa birikimi, saha daralması", "Günlük boş kasa çıkış planı"],
                        ["İşleme dönemi", "İç saha akülü trafiği, fıçı-varil rotası", "Sıvı yükte hız", "Yavaş rota, dökülme seti hazır"],
                        ["Sevkiyat dalgası", "Mamul yükleme, araç sırası", "Hazırlıksız yükleme ağzı", "Palet ön dizimi"],
                        ["Sezon kapanışı", "İade turu, bakım penceresi, kapanış notu", "Bakımın yine ertelenmesi", "Takvime bloklanmış bakım"],
                    ],
                },
            },
            {
                baslik: "Dökme sandık ve kasa istifi: yüksekliğin sınırını kap belirler",
                paragraflar: [
                    "Zeytin operasyonunun kapları — plastik kasa, dökme sandık, ahşap sepet — istif yüksekliğinin sınırını kendi taşıma dayanımıyla koyar: en alttaki kap, üstündeki bütün sıraların yükünü taşır ve çatlamış ya da yaşlanmış plastik kap, bu yükün altında sessizce çöker. Operasyon kuralı, istif sınırını kap tipine göre yazılı belirlemek ve hasarlı kapları istiften ayıklamaktır; devrilen kasa kulesi, ürün kaybının yanında ciddi bir İSG vakasıdır. Dolu kapların ağırlığı üründen ürüne değişir; forklift operatörünün çift palet alma alışkanlığı, bu değişkenlik yüzünden dolu kasa istiflerinde sınırlandırılır.",
                    "Kasaların ıslak dönmesi de hesaba girer: yıkama ve salamura hattından çıkan kap ağırlaşır ve kayganlaşır; ıslak kapların istif bölgesi ayrı tutulur ve zemin drenajı bu bölgede önceden çözülür.",
                ],
            },
            {
                baslik: "Sezonluk kiralamanın operasyon tarafı: makine sayısı değil, devreye alma planı",
                paragraflar: [
                    "Sezonluk ek makine kiralamanın başarısı, makinenin sahaya indiği gün değil devreye alındığı saat ölçülür: rota ataması, operatör eşleşmesi, şarj veya yakıt düzeni ve devir kontrol listesi hazırsa makine ilk saatinden üretkendir; hazır değilse ilk günü kayıptır. Bu yüzden sezonluk kiralamada teslimat, bir saha kurulum turuyla birlikte yapılır — makine hangi bölgede, hangi rotada, kimin zimmetinde çalışacak, baştan yazılır.",
                    "Sezon içinde tempo tahminden saparsa — hasat erken biter ya da uzarsa — sözleşmenin uzatma ve erken iade koşulları devreye girer; bu koşulların sezon başında konuşulmuş olması, tarafları sezon ortası pazarlığından kurtarır. Hasat takviminizi netleştirdiğinizde filo ve devreye alma planını birlikte çıkarırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hasat tepesinde alım sahamız kilitleniyor; forklift mi eklemeliyiz, düzeni mi değiştirmeliyiz?",
                cevap:
                    "Önce yarım günlük bir gözlem yapın: forkliftler fiilen çalışıyor mu, yoksa nereye koyacağını bekliyor mu? Kilitlenen sahaların çoğunda makineler doludur ama akış tanımsızdır — dolu kasanın adresi, boş kasanın çıkış yolu ve araç sırası o anda kararlaştırılır. Bu durumda ek makine, kilitlenmeye bir aktör daha ekler; çözüm bölgeleme ve akış tanımıdır: boşaltma ağzı, bekleme bölgesi, işleme hattı ve boş kasa noktası işaretlenir, araç yanaşma sırası tek kişinin yönetimine verilir. Düzen kurulduktan sonra hâlâ kuyruk varsa o zaman ek makine gerçekten gerekiyordur ve sayı, gözlem verisiyle net hesaplanır.",
            },
            {
                soru: "Salamura fıçılarını taşırken iki kez devrilme atlattık; sıvı yükte neyi farklı yapmalıyız?",
                cevap:
                    "Sıvı yükün fiziğini operasyona çevirin: kap içindeki sıvı, fren ve dönüşte kendi dalgasını yapar ve yükün ağırlık merkezini oynatır — katı palette toparlanabilen bir manevra, dolu fıçıde devrilmeye dönüşebilir. Somut kurallar şunlardır: fıçı ve varil yalnız uygun aparatla veya palet üstünde sabitlenmiş taşınır, sıvı rotalarında hız düşürülür ve ani manevra yasaklanır, kaplar ağzına kadar değil taşıma payıyla doldurulmuşsa çalkalanma azalır, rota mümkünse düz ve kesişimsiz çizilir. Ayrıca dökülme anı için emici malzeme ve ikaz seti sahada hazır tutulur — dökülen salamuranın kaygan zemini, ikinci kazanın davetiyesidir.",
            },
            {
                soru: "Sezonda gece vardiyası açıyoruz; gece operasyonunda forklift tarafında neye dikkat etmeliyiz?",
                cevap:
                    "Gece vardiyasının üç zayıf noktası vardır: görüş, yorgunluk ve seyrek denetim. Görüş için saha aydınlatması forklift rotaları üzerinden kontrol edilir — araç boşaltma ağzı ve kesişimler öncelikli — ve makinelerin çalışır durumda far-ikaz donanımı vardiya başı testine eklenir. Yorgunluk için gece operatörlerine rota yükü gündüzle eşit değil hafif dağıtılır ve mola düzeni korunur; hasat temposunda gece molasız çalışma kaza istatistiğini besler. Denetim için gece amirinin forklift bölgesi sorumluluğu açık yazılır. Bir de pratik not: gece biten akü sabaha yetişsin diye şarj planı akşamdan kurulur — gece yarısı boş aküyle kalan makine, vardiyanın yarısını götürür.",
            },
            {
                soru: "İç sahada akülü, dış sahada dizel çalışıyoruz; yük devri noktasında sürekli bekleme oluyor. Nasıl çözeriz?",
                cevap:
                    "Devir noktası bir istasyon gibi tasarlanmalıdır, rastgele bir kapı ağzı gibi değil: iki-üç paletlik tampon alan işaretlenir, dış makine yükü tampona bırakır ve beklemeden döner, iç makine kendi ritminde tampondan çeker. Bekleme, tampon olmadığında doğar — iki makine aynı anda aynı noktada buluşmak zorunda kalır ve biri daima öbürünü bekler. Tampon boyutu, iki tarafın tempo farkına göre seçilir; dış saha dalgalı (araç geldikçe), iç saha düzenliyse tampon büyür. Bir de yön ayrımı eklenir: bırakma ve alma yüzleri ayrılırsa iki makine manevrada da çakışmaz. Bu kurulum yarım günlük iştir ve devir beklemesini fiilen sıfırlar.",
            },
            {
                soru: "Sezonluk operatör bulmakta zorlanıyoruz; kiralık makineyi operatörüyle almak mantıklı mı?",
                cevap:
                    "Sezonluk tepe için çoğu zaman en pratik çözümdür: operatörlü kiralamada makineyle birlikte belgeli ve deneyimli operatör gelir, işe alım-belge kontrolü-eğitim yükü ortadan kalkar ve sezon bitince ilişki makineyle birlikte kapanır. Dikkat edilecek nokta saha uyumudur — gelen operatör sizin sahanızı bilmez; ilk gün saha brifingi (rotalar, bölgeler, sıvı yük kuralları, devir noktaları) verilmeden rotaya çıkarılmamalıdır. Kendi kadronuzu kurmak ise yıl boyu forklift işi olan tesislerde mantıklıdır; sezon dışında da çalışacak kişiye belge kazandırmak, sonraki sezonların sorununu kökten çözer. İki modelin maliyetini sezon süresi üzerinden birlikte karşılaştırabiliriz.",
            },
            {
                soru: "Sezon bitince kiraladığımız makineleri iade ediyoruz; iade sürecinde anlaşmazlık yaşamamak için ne yapmalıyız?",
                cevap:
                    "Anlaşmazlığın panzehiri, sezon başında yapılmış fotoğraflı teslim tespitidir: makine hangi durumda geldiyse kayıt altındadır ve iade turunda aynı kayıt üzerinden karşılaştırma yapılır. Sezon içinde tutulan devir kontrol notları ikinci güvencedir — hasar ne zaman oluştuysa o gün not edilmiştir ve iade günü kimse hafızasıyla tartışmaz. Üçüncü unsur, olağan yıpranma ile kullanım hasarının sözleşmede tarif edilmiş olmasıdır: sezonluk yoğun kullanımın doğal izleri kiralamanın parçasıdır, çarpma-devrilme kaynaklı hasar ise ayrı değerlendirilir. Bu üç kayıt düzeni kurulu olduğunda iade, yarım saatlik bir turdan ibarettir; düzenimiz bu şekilde işler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Akhisar'ın zeytin-zeytinyağı ekonomisi kamuya açık bilgidir; sıvı yük elleçleme kuralları, kap istif sınırları ve gece vardiyası önlemleri sektör standardıdır; devir noktası ve iade kayıt düzeni firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:turgutlu-osb": {
        h1: "Turgutlu OSB'de Forklift Operasyonu: Karma Üretim Sahasında Filo Disiplini Kurmak",
        giris:
            "Organize sanayi bölgesinin doğası gereği Turgutlu OSB çevresindeki üretim dokusu tek sektöre indirgenemez; yapı malzemesinden gıdaya, metal işlemeden plastiğe farklı ölçekte tesisler aynı altyapıyı paylaşır. Forklift operasyonu açısından bunun anlamı şudur: her tesisin yük profili, vardiya düzeni ve saha koşulu farklıdır ama operasyonun iyi işlediği tesislerin ortak paydası hep aynıdır — makine zimmetlidir, rota tanımlıdır, kontrol listesi işler ve filo, işin gerçek yüküne göre boyutlanmıştır. Küçük ve orta ölçekli tesislerde forklift çoğu zaman 'herkesin arada bindiği' bir ortak araç olarak yaşar; bu model, hasarın sahipsiz, bakımın rastgele ve kazanın sürpriz olduğu modeldir. Bu sayfa, OSB ölçeğindeki tesislerde forklift operasyonunu kurumsallaştırmanın pratiğini anlatır: zimmet ve yetki düzeni, tek makineli tesisin kritiklik yönetimi, ortak rampa ve kantar trafiği, bakım-arıza akışı ve büyüyen tesiste filonun kademeli genişletilmesi.",
        maddeler: [
            {
                baslik: "Zimmet düzeni: 'herkesin makinesi' aslında kimsenin makinesi değildir",
                metin:
                    "Küçük tesisin en yaygın forklift modeli ortak kullanımdır: anahtar üstünde durur, ihtiyacı olan biner. Bu modelin bedeli kayıtsızlıktır — hasar fark edildiğinde kimin döneminde oluştuğu bilinmez, akü boş bulunur, bakım belirtileri kimsenin sorumluluğunda olmadığı için raporlanmaz. Kurumsallaşmanın ilk ve en ucuz adımı zimmettir: her vardiyada makinenin tek sorumlusu vardır, anahtar onda durur, başkası binecekse devir kaydıyla biner. Zimmet, kullanım esnekliğini öldürmez; sahipsizliği öldürür. Belgesiz personelin makineye erişiminin fiilen kapanması da aynı adımın İSG kazancıdır — kaza istatistiğinin önemli bölümü 'asıl operatör yokken binen' kişiden gelir.",
            },
            {
                baslik: "Tek makineli tesis: kritiklik planı olmayan tek makine, tek arıza uzaklığında duruştur",
                metin:
                    "OSB'deki birçok tesis tek forkliftle döner ve bu makine hem üretimi besler hem sevkiyatı yükler — arızalandığı gün ikisi birden durur. Tek makineli operasyonun disiplini bu yüzden çok makineliden bile sıkıdır: günlük kontrol atlanmaz çünkü erken belirti tek güvencedir; bakım randevusu üretimin sakin saatine planlanır ve asla iptalle geçiştirilmez; arıza anının B planı yazılıdır — kiralayan firmanın ikame süresi sözleşmede tanımlı mı, komşu tesisle karşılıklı yardımlaşma konuşulmuş mu, elle çekilebilir transpalet en kritik işleri taşıyabilir mi. B planı arıza günü değil, sözleşme günü yapılır.",
            },
            {
                baslik: "Rampa ve kantar trafiği: aracın beklediği her dakika forklift planının aynasıdır",
                metin:
                    "Üretim tesisinin dışa açılan yüzü rampadır ve rampa operasyonunun ölçüsü araç çevrim süresidir: kapıdan giren aracın tartı, yanaşma, yükleme-boşaltma ve çıkışı toplam kaç dakika sürüyor. Bu süreyi uzatan etkenlerin çoğu forkliftin hızı değil, sıralamanın belirsizliğidir — araç yanaştığında paletler hazır değildir, forklift üretim içi işten çağrılır, rampa aynı anda iki aracı almaya çalışır. Düzen üç kuralla kurulur: günün araç planı sabah bellidir, sevkiyat paletleri araç gelmeden rampa ağzına dizilir ve rampa saatlerinde forkliftin üretim içi görevi ya devredilir ya ertelenir. Araç çevrim süresini bir hafta ölçmek, iyileşmenin nereden başlayacağını kendiliğinden gösterir.",
            },
            {
                baslik: "Dorse içinde çalışma: rampa köprüsü ve takoz, pazarlıksız iki şart",
                metin:
                    "Rampadan dorse içine giren forklift, iki mekanik güvenceye yaslanır: aracın kaymasını önleyen takoz (veya araç sabitleme sistemi) ve rampa ile dorse arasındaki boşluğu kapatan, yüke dayanıklı rampa köprüsü. İkisinden birinin eksik olduğu yükleme, sektörün en ağır kaza tiplerinden birine — aracın erken hareketiyle forkliftin boşluğa düşmesine — kapı açar. Operasyon kuralı basit ve tavizsizdir: takoz konmadan ve köprü oturmadan dorseye girilmez, şoför araç başından ayrılırken anahtar teslim düzeni uygulanır ve yükleme bitmeden aracın hareket etmeyeceği, şoförle açık teyitleşilir. Bu üç cümle, rampa brifinginin değişmez maddeleridir.",
            },
            {
                baslik: "Büyüyen tesiste filo kademesi: ikinci makine ne zaman gerçekten gerekir",
                metin:
                    "Üretimi büyüyen tesiste ikinci forklift kararı çoğu zaman his ile verilir — 'yetişemiyoruz' hissi. Doğru karar veriyle verilir: mevcut makinenin fiili kullanım saati, bekleyen iş kuyruğunun uzunluğu ve rampa ile üretim taleplerinin çakışma sıklığı bir ay izlenir. Çakışma günde birkaç saate yayılıyorsa ikinci makine gerekmez; görev sıralaması düzeltilir. Çakışma gün boyu sürüyorsa ikinci makine gerekir ve kademeli yol kiralamadır: önce kısa dönem ek makineyle gerçek ihtiyaç sahada doğrulanır, kalıcıysa uzun dönem sözleşmeye çevrilir. Böylece tesis, his ile satın alınmış ve ayda birkaç saat çalışan ikinci makine tuzağına düşmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük-orta tesiste forklift operasyonunun kurumsallaşma adımları",
                paragraflar: [
                    "Aşağıdaki tablo, ortak kullanım modelinden disiplinli operasyona geçişin adımlarını, her adımın maliyetini ve getirisini özetler; sıra, en ucuz ve en etkili adımdan başlar.",
                ],
                tablo: {
                    basliklar: ["Adım", "Ne yapılır", "Maliyeti", "Getirisi"],
                    satirlar: [
                        ["Zimmet", "Vardiya başına tek sorumlu, anahtar düzeni", "Sıfır", "Sahipsiz hasar ve belgesiz kullanım biter"],
                        ["Günlük kontrol", "Vardiya başı beş dakikalık liste", "Günde beş dakika", "Arıza erken yakalanır, duruş azalır"],
                        ["Rampa planı", "Araç takvimi + palet ön dizimi", "Planlama alışkanlığı", "Araç çevrim süresi kısalır"],
                        ["Trafik ayrımı", "Yaya yolu, kesişim işaretleri, hız sınırı", "Boya ve levha", "Kaza olasılığı somut düşer"],
                        ["Veriyle filo kararı", "Kullanım saati ve çakışma izleme", "Basit kayıt", "Gereksiz makine yatırımı önlenir"],
                    ],
                },
            },
            {
                baslik: "Bakım ve arıza akışı: kiralık filoda duruş süresi nasıl kısalır",
                paragraflar: [
                    "Kiralık makinede bakım sorumluluğu kiralayan firmada olsa da duruş süresini belirleyen şey iki tarafın akış disiplinidir: tesis, belirti gördüğünde bekletmeden bildirir (garip ses, yavaşlayan kaldırma, uyarı lambası); kiralayan, bildirimi tanımlı sürede müdahaleye çevirir ve onarım uzayacaksa ikame makineyi devreye alır. En çok zaman kaybettiren davranış, belirtinin 'idare eder' diye günlerce taşınmasıdır — küçük belirti planlı yarım saatlik müdahaleyken, taşındığı her gün plansız tam gün duruşa yaklaşır.",
                    "Periyodik bakımın üretim takvimiyle hizalanması da tesisin elindedir: bakım gününü sevkiyat tepesine denk getirmemek, aynı bakımın maliyetini görünmez kılar. Yıllık bakım takvimini sezon planınızla birlikte kurmayı teslimat sürecinin parçası sayarız.",
                ],
            },
            {
                baslik: "OSB içinde komşuluk: paylaşılan yollar, paylaşılan sorumluluk",
                paragraflar: [
                    "OSB'nin iç yolları tesislerin ortak alanıdır ve forkliftin tesis parselinden çıkıp iç yolda seyretmesi, kapalı saha operasyonundan farklı kurallara tabidir: iç yol öncelikle araç trafiğine aittir, forkliftin yol üzerinde yük taşıması güzergâh ve görünürlük planlaması ister ve birçok OSB yönetimi bu konuda kendi düzenlemesini uygular. Operasyon tarafında güvenli pratik bellidir — tesisler arası taşıma rutinleşecekse forklifte yol yerine uygun araçla (kamyonet, çekici-römork) taşıma planlanır; forkliftle kısa geçiş zorunluysa ikaz donanımı, düşük hız ve mümkünse refakat uygulanır.",
                    "Komşu tesisle rampa veya saha paylaşımı varsa sorumluluk sınırı yazılı çizilmelidir: kimin makinesi, kimin personeli, hangi alanda — kaza gününün en zor sorusu, önceden cevaplanmış olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftimizi herkes kullanıyor ve sürekli küçük hasarlar çıkıyor; zimmet düzeni işi yavaşlatmaz mı?",
                cevap:
                    "Yavaşlatmaz — beklemenin nedeni zimmet değil plansızlıktır: zimmetli düzende de makine herkese hizmet eder, fark taleplerin sorumlu operatöre iletilmesi ve onun sırayla çalışmasıdır. Kayıtsız ortak kullanımın gizli maliyetini bir ay boyunca toplamayı deneyin: küçük hasar onarımları, boş bulunan akü yüzünden kayan işler, belgesi olmayan kişilerin kullanımından doğan risk. Bu toplam, zimmetin getirdiği küçük bekleme paylarından her zaman büyüktür. Geçişi yumuşatan pratik de vardır: acil ve kısa işler için zimmetli operatöre telsizle ulaşılabilir bir çağrı düzeni kurulur ve talepler öğle-akşam bloklarında toplanır — çoğu 'acil' iş, bloklamaya rahat sığar.",
            },
            {
                soru: "Tek forkliftimiz var ve arızalandığında sevkiyatımız duruyor; ikinci makine almadan riski nasıl küçültürüz?",
                cevap:
                    "Üç katmanla: önleme, erken uyarı ve B planı. Önleme katmanı günlük kontrol ve aksatılmayan periyodik bakımdır — tek makineli tesiste arızaların çoğu, haftalardır görülen ama raporlanmayan belirtinin sonucudur. Erken uyarı katmanı, belirti bildiriminin kültür hâline gelmesidir; garip sesin bildirildiği gün planlı müdahale ucuz ve kısadır. B planı katmanı ise yazılı olmalıdır: kiralama sözleşmenizde ikame makine süresi tanımlı mı, en kritik işleriniz (hangi yükler, hangi saatler) listelendi mi, akülü transpalet gibi basit bir yedek ekipman kritik paletleri taşıyabilir mi? Bu üç katman kuruluyken tek makine riski, yönetilebilir bir risktir; ikinci makine kararı ise arıza korkusuyla değil iş yükü verisiyle verilmelidir.",
            },
            {
                soru: "Rampamızda araçlar uzun bekliyor ve şoförlerle tartışma çıkıyor; işin forklift tarafını nasıl hızlandırırız?",
                cevap:
                    "Ölçümle başlayın: bir hafta boyunca her aracın kapı giriş, yanaşma, yükleme başlangıç-bitiş ve çıkış saatini kaydedin. Tablo genelde şunu gösterir — sürenin büyük payı yükleme değil, yükleme öncesi hazırlıksızlıktır: paletler sahadan toplanıyordur, forklift başka işten çağrılıyordur, evrak yüklemeden sonra beklenmektedir. Buna göre üç düzeltme sıralanır: sevkiyat paletlerinin araç gelmeden rampa ağzına dizilmesi, rampa saatlerinde forkliftin başka göreve verilmemesi ve evrak sürecinin yüklemeyle paralel yürütülmesi. Şoför tarafında da bir kural gerginliği azaltır: aracın yanaşma ve bekleme yeri işaretlenir, şoförün yükleme sırasında duracağı güvenli nokta gösterilir — tartışmanın çoğu, tanımsız alanda başlar.",
            },
            {
                soru: "Dorse yüklemede takoz ve köprü kullanıyoruz ama şoförler bazen aceleyle aracı erken çalıştırıyor; nasıl önleriz?",
                cevap:
                    "Prosedürü şoförün iyi niyetine değil fiziki düzene bağlayın: en yalın yöntem anahtar teslim kuralıdır — yükleme başlarken araç anahtarı rampa sorumlusuna verilir ve yükleme bitti onayıyla iade edilir; anahtar eldeyken araç çalışamaz. Bunu destekleyen görsel düzen de kurulur: rampa üzerinde kırmızı-yeşil ışık veya levha ile 'yükleme sürüyor' durumu araç kabininden görünür kılınır ve forklift dorse içindeyken kırmızı yanar. Şoför brifingi kapıda, araç yanaşmadan verilir; tesisinize ilk kez gelen şoför kuralı bilmeden rampaya ulaşmaz. Bu üçlü — anahtar, ışık, kapı brifingi — erken hareket riskini prosedürden fiziki güvenceye taşır ve sektördeki en ağır kaza tiplerinden birini fiilen kapatır.",
            },
            {
                soru: "İş büyüyor ama ikinci makineye yatırım yapmaktan çekiniyoruz; kiralamayla nasıl bir ara yol kurulur?",
                cevap:
                    "Kademeli doğrulama modeli tam bunun için vardır: önce bir aylık kullanım verisi toplanır (mevcut makinenin dolu saatleri, bekleyen iş kuyruğu, rampa-üretim çakışmaları), veri ikinci makineyi işaret ediyorsa kısa dönem kiralamayla ek makine sahaya alınır ve iki-üç ay fiilen denenir. Bu dönemde bakılacak soru şudur: ek makine gerçekten dolu çalışıyor mu, yoksa günde bir-iki saatlik tepeyi mi kapatıyor? Dolu çalışıyorsa uzun dönem sözleşmeye geçilir ve birim maliyet düşer; tepe kapatıyorsa kalıcı ikinci makine yerine yoğun günlere tarihli kiralama planlanır. Böylece yatırım kararı tahminle değil kendi sahanızın verisiyle verilmiş olur — yanlış tarafta kalma riski iki yönde de kapanır.",
            },
            {
                soru: "OSB içinde iki parselimiz var ve aralarında forkliftle taşıma yapıyoruz; bu düzen sürdürülebilir mi?",
                cevap:
                    "Ara sıra ve kısa mesafeyse yönetilebilir, rutinleşmişse yeniden düşünülmelidir: forklift, yol aracı değildir — süspansiyonu ve hızı yol trafiğine göre değil saha manevrasına göredir, yüklü hâlde yol yüzeyi bozukluklarına hassastır ve OSB iç yolunda araç trafiğiyle paylaşım, görünürlük ve öncelik risklerini büyütür. Rutin taşıma için doğru kurulum, parseller arası sefer yapan bir araç (kamyonet veya römork) ve iki uçta yükleme-boşaltma yapan forkliftlerdir; taşıma hacmi düşükse günün belirli saatlerine bloklanmış, ikaz donanımlı ve düşük hızlı forklift geçişi ara çözüm olabilir — OSB yönetiminizin iç yol kurallarını da bu planla birlikte teyit etmek gerekir. Taşıma hacminizi paylaşın; iki modelin maliyetini birlikte kıyaslayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. OSB ölçeğindeki karma üretim dokusu genel bilgidir; takoz-köprü kuralları, zimmet düzeni ve araç çevrim süresi yaklaşımı sektör standardı operasyon pratikleridir; kademeli filo doğrulama modeli firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },
};
