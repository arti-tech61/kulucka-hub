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
            "Elle yazıldı — 2026-08-12. Manisa OSB'deki beyaz eşya-elektronik üretim ağırlığı kamuya açık bilgidir; turlu besleme, devir kontrolü, şarj penceresi ve kesişim önlemleri sektör standardı operasyon pratikleridir; gösterge seti firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
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
                    "Sorumluluk ikiye ayrılır ve teslimatta yazılı netleştirilir: periyodik bakım, parça değişimi ve arıza müdahalesi kiralayan firmadadır; günlük temizlik rutini — vardiya sonu filtre-radyatör üfleme, mast kanalı kontrolü — tesistedir. Tozlu sahada bakım aralığı standart takvimden kısaltılır ve bu sıklaştırma kira planına baştan işlenir; yani tozun olağan etkisi tesise fatura edilmez. Fatura konusu olan durum, tanımlı günlük rutinin hiç yapılmamasından doğan hasarlardır ve bunlar da iade gününe bırakılmaz; düzenli bakım turlarında görülüp önce yazılı uyarıyla ele alınır. Sahanın toz profilini teslimat keşfinde birlikte görür, rutini birlikte yazarız.",
            },
            {
                soru: "Yoğun sezonda ikinci vardiyaya çıkıyoruz; aynı makineyle iki vardiya döner mi, ek makine mi alalım?",
                cevap:
                    "Önce makinenin fiili yükünü ölçün: tek vardiyada makine zaten gün boyu doluysa ikinci vardiya aynı makineyle döner — dizel makinede yakıt dışında engel yoktur, akülüde ise akü planı (yedek akü veya vardiya arası şarj penceresi) kurulmalıdır. Ek makine kararı, iki vardiyanın toplam iş yükü tek makinenin kapasitesini aştığında verilir ve sezonlukta doğru araç tarihli kısa dönem kiralamadır: yoğun aylara ek makine gelir, sezon bitince iade edilir. Kritik bir operasyon notu da ekleyelim — iki vardiya düzeninde devir teslim kontrolü daha da önemlidir, çünkü makine dinlenmeden el değiştirir. Sezon takviminizi paylaşın; vardiya ve filo planını rakamla birlikte kuralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Turgutlu'nun toprağa dayalı sanayi geleneği kamuya açık bilgidir; palet bütünlüğü, dorse denge dağılımı, devrilme önlemleri ve tozlu ortam bakım sıklaştırması sektör standardıdır; vardiya akış planı firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
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
            "Elle yazıldı — 2026-08-12. Akhisar'ın zeytin-zeytinyağı ekonomisi kamuya açık bilgidir; sıvı yük elleçleme kuralları, kap istif sınırları ve gece vardiyası önlemleri sektör standardıdır; devir noktası ve iade kayıt düzeni firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
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
            "Elle yazıldı — 2026-08-12. OSB ölçeğindeki karma üretim dokusu genel bilgidir; takoz-köprü kuralları, zimmet düzeni ve araç çevrim süresi yaklaşımı sektör standardı operasyon pratikleridir; kademeli filo doğrulama modeli firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
    },

    "bolge:akhisar-osb": {
        h1: "Akhisar OSB'de Forklift Operasyonu: Paketleme Çıkışından Konteynere Kesintisiz Akış",
        giris:
            "Akhisar OSB'deki gıda ve tarımsal işleme tesislerinde yılın büyük bölümü hasat telaşıyla değil, düzenli üretim ve ihracat sevkiyatıyla geçer; forklift operasyonunun asıl sınavı da burada verilir. Paketleme hattından çıkan mamul paletinin depoda doğru adrese yerleşmesi, sipariş geldiğinde saniyeler içinde bulunması, konteyner veya tır yüklemesinde partinin eksiksiz ve doğru sırayla çıkması — bu zincirin her halkası bir forklift hareketidir ve halkalardan biri gevşediğinde kayıp, ürünün kendisinde değil zamanda ortaya çıkar. İhracat yükü olan tesislerde ek bir hassasiyet daha vardır: konteyner yüklemesi geri dönüşü olmayan bir iştir, kapı mühürlendikten sonra yanlış yüklenmiş bir paletin telafisi yoktur. Bu sayfa, düzenli üretim yapan gıda tesislerinde forklift operasyonunu paketleme çıkışından konteyner kapısına kadar izler: çıkış tamponu yönetimi, adresleme ve parti izlenebilirliği, konteyner yükleme disiplini, ambalaj hasarının önlenmesi ve depo içi trafiğin hijyen kurallarıyla birlikte yürütülmesi.",
        maddeler: [
            {
                baslik: "Paketleme çıkış tamponu: hat, forklifti beklememeli",
                metin:
                    "Paketleme hattının sonunda biriken mamul paleti, forklift geç kaldığında hattın kendisini durdurur; erken geldiğinde ise operatör boş bekler. İkisinin ortası tampon alanıdır: hat çıkışına iki-üç paletlik tanımlı bir alan ayrılır, hat bu alana bırakır ve forklift kendi turunda buradan toplar. Tamponun boyutu hattın palet üretme hızıyla forklift tur süresinin çarpımından çıkar ve alan işaretlenerek sabitlenir — 'nereye denk gelirse' bırakılan palet, hem trafik engeli hem hasar adayıdır. Tampon dolduğunda görsel bir uyarı (zemin çizgisi veya lamba) devreye giriyorsa hat operatörü de durumu görür ve haber verme yükü telsize kalmaz.",
            },
            {
                baslik: "Adresleme ve parti izlenebilirliği: forklift hareketi aynı zamanda bir kayıttır",
                metin:
                    "Gıda üretiminde parti-lot izlenebilirliği yasal bir zorunluluktur ve bu zincirin fiziksel tarafını forklift taşır: palet hangi adrese kondu, hangi adresten çekildi, hangi araca yüklendi. Kayıt elle tutulan çizelgeyle de yürütülebilir, el terminaliyle de; belirleyici olan araç değil kuralın istisnasızlığıdır — kayıtsız hiçbir palet hareketi olmaz. Bu disiplinin günlük getirisi izlenebilirlikten ibaret değildir: sipariş toplama süresi kısalır, sayım farkları erir ve 'palet kayboldu' vakaları biter. Operasyon planlarken adres kaydını forkliftin işine ek bir yük değil, işin tanımı hâline getirmek gerekir; ayrı bir kişiye bırakılan kayıt, yoğun günde tutulmaz.",
            },
            {
                baslik: "İhracat konteyneri yüklemesi: sıra, doğrulama ve geri dönüşsüzlük",
                metin:
                    "Konteyner yüklemesi, forklift operasyonunun en az affeden işidir: kapı kapanıp mühür vurulduktan sonra yanlış parti, eksik palet veya bozuk istif düzeltilemez. Operasyon buna göre kurgulanır — yükleme listesi palet bazında yazılır, paletler yükleme öncesi konteyner ağzına yükleme sırasına göre dizilir, her palet konteynere girerken listeden okunarak işaretlenir ve yükleme bitiminde ikinci bir kişi sayımı doğrular. Fiziksel tarafta konteyner içi çalışma kendi kurallarını getirir: dar hacimde manevra, tavan yüksekliği sınırı ve zeminin araç şasisiyle birlikte esnemesi. Bu koşullarda hız değil düzen aranır; yüklemenin hızı, ön dizimin kalitesinden gelir.",
            },
            {
                baslik: "Ambalaj hasarını önlemek: gıda paletinde tek temas, tüm partiyi riske atar",
                metin:
                    "Karton kutu ve şrinkli gıda paleti, çatal temasına ve sıkışmaya karşı toleranssızdır; ezilen tek kutu, ihracat partisinde bütün paletin ayrılmasına yol açabilir. Hasarı önleyen davranışlar operasyon kuralına çevrilir: çatal, paletin altına tam ve düz girer, palet kenarına sürtülerek hizalanmaz; raf yerleşiminde palet, komşu paletle temas etmeyecek paya göre konur; istif yüksekliği alt kutunun taşıma dayanımına göre sınırlandırılır ve şrinki gevşemiş palet raf üstüne çıkarılmaz. Hasar vakaları yer ve neden bilgisiyle kaydedildiğinde birkaç hafta içinde belirli bir koridor veya belirli bir raf katı öne çıkar — düzeltme çoğu zaman orada, tek bir noktadadır.",
            },
            {
                baslik: "Hijyen kurallarıyla birlikte akan trafik: iç makine dışarı çıkmaz",
                metin:
                    "Gıda depolarında forklift operasyonu, temizlik planının bir parçası olarak yürür: üretim ve depo içinde çalışan akülü makineler dış sahaya çıkmaz, dış saha makinesi kapının içine girmez ve iki taraf arasında tanımlı bir devir noktası bulunur. Makinenin kendisi de rutine dahildir — lastik izi kontrolü, hidrolik kaçak bakışı ve gövde temizliği vardiya sonu görevidir; denetim geldiğinde bakım kayıtlarının yanında temizlik kaydı da sorulur. Bu ayrımın operasyon tarafındaki tek maliyeti devir noktasında oluşabilecek beklemedir ve o da tampon alanla çözülür; hijyen ile verim arasındaki gerilim, doğru yerleşimle büyük ölçüde ortadan kalkar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sevkiyat gününün forklift kontrol noktaları",
                paragraflar: [
                    "İhracat veya toplu sevkiyat gününde forklift operasyonunun kontrol noktaları aşağıdadır; her noktanın hatası, bir sonraki noktada değil araç yola çıktıktan sonra ortaya çıkar.",
                ],
                tablo: {
                    basliklar: ["Kontrol noktası", "Ne doğrulanır", "Atlanınca sonuç"],
                    satirlar: [
                        ["Liste hazırlığı", "Palet bazında sevk listesi ve adresler", "Sahada arama, araç bekler"],
                        ["Ön dizim", "Paletlerin yükleme sırasına göre dizilmesi", "Konteynerde sıra bozulur"],
                        ["Palet durumu", "Şrink, etiket, kutu ezilmesi", "Alıcıda hasarlı parti reddi"],
                        ["Yükleme okuması", "Her paletin listeden işaretlenmesi", "Eksik veya fazla yükleme"],
                        ["Kapanış sayımı", "İkinci kişiyle karşı doğrulama", "Mühürden sonra telafi imkânsız"],
                    ],
                },
            },
            {
                baslik: "Sipariş toplama verimi: koridorda yürünen mesafe kadar kayıp",
                paragraflar: [
                    "Karışık siparişlerin toplandığı depolarda forkliftin en çok zaman kaybettiği yer manevra değil, adresler arası gidiş gelişlerdir: sipariş satırları depo sırasına göre değil müşterinin yazdığı sırayla toplanıyorsa makine aynı koridora gün içinde defalarca girer. Basit düzeltme, toplama listesini depo yerleşimine göre sıralamaktır — yazılım kullanılıyorsa ayarı vardır, kullanılmıyorsa liste elle depo sırasına dizilir. İkinci düzeltme, hızlı devreden ürünlerin sevkiyat kapısına yakın adreslere alınmasıdır; ürün hareket hızına göre yapılan bu yerleşim, aynı filoyla toplanan sipariş sayısını gözle görülür artırır.",
                    "Yerleşim kararı sabit değildir: sezonluk ürün gamı değişen tesislerde adres planı yılda birkaç kez gözden geçirilir. Bu gözden geçirme yarım günlük bir masa çalışmasıdır ve karşılığını her sevkiyat gününde verir.",
                ],
            },
            {
                baslik: "Vardiya planı ile sevkiyat takvimini örtüştürmek",
                paragraflar: [
                    "Forklift filosunun günün hangi saatinde nerede olacağı, sevkiyat takvimi ile üretim akışının kesiştiği yerde belirlenir. Sık görülen aksaklık, araçların sabah aynı saate randevulanması ve depo makinelerinin o saatte üretim beslemesinden çekilmesidir; iki iş de aksar. Çözüm randevu dağıtımıdır — araçlar güne yayılır, yoğun yükleme blokları üretimin sakin saatlerine denk getirilir ve her bloğun kaç makineyle döneceği önceden yazılır. Bu plan haftalık yapılır, günlük teyit edilir ve değişiklikler tek noktadan duyurulur.",
                    "Planın işlediğini gösteren metrik araç bekleme süresidir; yükleme kapasitesini artırmadan yalnız randevu dağıtımıyla bu sürenin belirgin düştüğü tesisler çoktur. Sevkiyat takviminizi paylaşırsanız blok planını birlikte kurabiliriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Paketleme hattımız forklift yetişmediği için zaman zaman duruyor; ek makine almadan çözüm var mı?",
                cevap:
                    "Çoğu tesiste var: hattın durması genelde makine kapasitesinden değil tampon eksikliğinden doğar. Hat çıkışında iki-üç paletlik tanımlı bir bırakma alanı yoksa hat, forkliftin gelmesini beklemek zorunda kalır ve makine tek bir gecikmede zinciri kilitler. Tampon alanı işaretlendiğinde hat kendi ritmiyle bırakır, forklift kendi turuyla toplar ve iki taraf birbirinden bağımsızlaşır. İkinci adım, toplama turunun periyodunu hattın palet üretme hızına göre belirlemektir. Bu iki düzenlemeden sonra hâlâ duruş varsa gerçekten kapasite sorunu vardır ve ölçüm net gösterir — o noktada kısa dönem ek makineyle deneyip doğrulamak, kalıcı yatırımdan önce doğru adımdır.",
            },
            {
                soru: "Konteyner yüklemesinde geçen ay eksik palet gönderdik; bir daha yaşamamak için hangi düzen gerekir?",
                cevap:
                    "Eksik yükleme neredeyse her zaman tek kişilik ve sözlü yürütülen bir süreçten çıkar. Kurulacak düzenin dört adımı vardır: yükleme listesinin palet bazında ve yazılı olması, paletlerin konteyner ağzına yükleme sırasına göre önceden dizilmesi, her paletin konteynere girerken listeden okunup işaretlenmesi ve yükleme sonunda ikinci bir kişinin karşı sayım yapması. Dördüncü adım en çok atlanan ve en çok işe yarayandır — yükleyen kişi kendi sayımını doğrulayamaz, dikkat körlüğü tam burada devreye girer. Ayrıca mühürleme, sayım onayı verilmeden yapılmaz; sıra bir kez bozulduğunda hata ortaya çıkmaz. Bu düzen ek personel değil, on dakikalık disiplin gerektirir.",
            },
            {
                soru: "Depo adresleme için yazılım almadan izlenebilirliği sağlayabilir miyiz?",
                cevap:
                    "Sağlayabilirsiniz — yazılım süreci hızlandırır, kuran şey disiplindir. Kağıt veya basit tablo tabanlı bir düzende de her palet hareketi (parti-lot, adres, tarih, saat, kim) kaydedilebilir; kritik nokta kaydın forkliftin işine gömülü olmasıdır, ayrı bir görevliye bırakılan kayıt yoğun günde tutulmaz. Uygulamada iyi çalışan yöntem, adres etiketlerinin raf ve blok üzerinde büyük ve okunur olması, palet etiketinde parti bilgisinin bulunması ve operatörün hareket sonrası tek satır not düşmesidir. Bu düzen kurulduktan sonra yazılıma geçiş de kolaylaşır, çünkü asıl zor kısım olan alışkanlık zaten yerleşmiştir. Denetim tarafında da elle tutulan tutarlı kayıt kabul görür; tutarsız kayıt ise yazılımda da sorun yaratır.",
            },
            {
                soru: "Alıcılarımızdan ambalaj hasarı şikâyeti geliyor; hasar depoda mı yolda mı oluşuyor, nasıl anlarız?",
                cevap:
                    "Ayrım için iki kayıt noktası yeterlidir: paletin rafa girişinde ve araca yüklenmeden hemen önce durumu kaydedilir; fotoğrafla desteklenirse tartışma tamamen biter. Yükleme öncesi sağlam görünen paletin alıcıda hasarlı çıkması taşıma veya istif dengesi sorununa işaret eder — konteyner içi boşlukların doldurulması, katlar arası kayma ve bağlama gözden geçirilir. Yükleme öncesinde zaten hasarlıysa kaynak depodadır ve bu durumda hasarın nerede oluştuğunu bulmak için vaka kaydına yer bilgisi eklenir; belirli bir koridor, raf katı veya vardiya öne çıkar. Deneyimde en sık iki kaynak, çatalın palet kenarına sürtülerek hizalanması ve raf yerleşiminde komşu palete temastır; ikisi de operasyon kuralıyla düzelir.",
            },
            {
                soru: "Sevkiyat sabahları depo makineleri üretime yetişemiyor; vardiya planını nasıl kurmalıyız?",
                cevap:
                    "Sorunun kaynağı çoğunlukla araç randevularının aynı saate yığılmasıdır: bütün araçlar sabah kapıya geldiğinde depo filosu tümüyle rampaya çekilir ve üretim beslemesi aksar. Randevuları güne yaymak, kapasite eklemeden yükü dengeler — yükleme blokları üretimin sakin saatlerine yerleştirilir ve her blokta kaç makinenin rampada, kaçının üretimde olacağı yazılı belirlenir. İkinci düzeltme, sevkiyat paletlerinin bir önceki vardiyada hazırlanıp rampa ağzına dizilmesidir; hazırlık gece veya öğleden sonra yapıldığında sabah bloğu yalnızca yükleme yapar. Üçüncüsü, üretim beslemesinin tur periyoduna bağlanması ve rampa çağrılarıyla bölünmemesidir. Bu üçlü, mevcut filoyla iki işi de aksatmadan yürütmeye çoğu tesiste yeter.",
            },
            {
                soru: "Gıda denetimi forklift tarafında ne soruyor; hazırlık listemizde ne olmalı?",
                cevap:
                    "Denetimin forklift maddeleri genelde şu başlıklarda toplanır: kapalı üretim ve depo alanında egzozsuz (akülü) makine kullanımı, iz bırakmayan lastik ve temizlenebilir gövde, hidrolik kaçak bulunmaması, makinelerin periyodik kontrol raporları ve bakım kayıtları, operatörlerin belge durumu, iç saha-dış saha makine ayrımının fiilen uygulanması ve makine temizliğinin temizlik planında tanımlı olması. Hazırlık listesi bu maddelerin her biri için bir evrak veya bir saha kanıtı içermelidir; kiralık makinelerde bakım ve periyodik kontrol dosyası kiralayan firmadan hazır gelir, saha uygulaması ise tesisin sorumluluğundadır. Denetim tarihi belliyse bir hafta önce yapılan iç tur, eksikleri rahatça kapatacak süre bırakır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Akhisar OSB'nin gıda-tarımsal işleme ağırlığı kamuya açık bilgidir; parti izlenebilirliği, konteyner yükleme doğrulaması ve gıda alanı makine kuralları sektör standardıdır; tampon ve blok planlama yaklaşımı firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
    },

    "bolge:salihli-osb": {
        h1: "Salihli OSB'de Forklift Operasyonu: Operatör Yetkinliği ve İSG Sisteminin Sahada Yaşaması",
        giris:
            "Bir tesiste forklift operasyonunun kalitesini belirleyen en güçlü tek etken, dosyadaki İSG prosedürü değil sahadaki operatörün davranışıdır; Salihli OSB gibi karma üretim dokusuna sahip bölgelerde bu gerçek her tesis ölçeğinde aynıdır. Makine ne kadar yeni olursa olsun, yükü yüksek taşıyan, dönüşte hız kesmeyen veya arkasına bakmadan geri manevra yapan bir kullanım kaza üretir; buna karşılık orta yaşlı bir filo, disiplinli bir kadroyla yıllarca kazasız çalışır. Yetkinlik ise tek seferlik bir belge işi değildir — belge giriş şartıdır, asıl mesele o yetkinliğin sahada tazelenmesi, ölçülmesi ve tesise özgü risklerle güncellenmesidir. Bu sayfa, forklift operasyonunun insan tarafını sistem hâline getirmeyi anlatır: belge ve yetki düzeni, işe alıştırma programı, davranış temelli gözlem, periyodik kontrol ve kayıt yükümlülükleri ile yakın ıskalama bildirimlerinin gerçekten işleyen bir öğrenme döngüsüne çevrilmesi.",
        maddeler: [
            {
                baslik: "Belge ve yetkilendirme: yasal şart ile tesis içi yetki aynı şey değildir",
                metin:
                    "Forklift kullanımı Türkiye'de belgeye bağlıdır ve operatörün mesleki yeterlilik belgesi bulunması yasal asgaridir. Ancak belge, kişinin sizin sahanızda çalışabileceğini göstermez; tesis içi yetkilendirme ayrı bir adımdır. İyi işleyen düzende her operatör için hangi makine sınıflarını (karşı ağırlıklı, reach truck, ataşmanlı) ve hangi bölgeleri kullanmaya yetkili olduğu yazılıdır; yetki, saha oryantasyonu ve gözlemli kullanım sonrası verilir. Bu ayrım pratik bir soruna da çözüm getirir: yeni gelen deneyimli bir operatör belgesine güvenilerek doğrudan en kritik rotaya çıkarıldığında, sahayı bilmediği için ilk hafta hasar riski en yüksek dönemi yaşar.",
            },
            {
                baslik: "İşe alıştırma: ilk hafta, sonraki yılların kaza oranını belirler",
                metin:
                    "Yeni operatörün ilk haftası bir program olarak tasarlanmalıdır: saha turu ve risk noktalarının yerinde gösterilmesi, boş makineyle manevra alıştırması, deneyimli bir operatörün gölgesinde yüklü çalışma ve ancak sonrasında bağımsız rota. Program bir sayfayı geçmez ama uygulanması, 'başla bakalım' yaklaşımına göre ölçülebilir fark yaratır. Alıştırma döneminde verilen görevler de seçilidir — yoğun rampa saatleri, dar koridor istifi ve ataşmanlı işler sona bırakılır. Bu dönemin sonunda kısa bir değerlendirme yapılır ve yetkilendirme yazılı olarak genişletilir; belirsiz bırakılan yetki, yoğun günde herkesin her işi yapmasına dönüşür.",
            },
            {
                baslik: "Davranış temelli gözlem: kural asmak değil, kullanımı izlemek",
                metin:
                    "Panoya asılan kural listesi davranışı çok az değiştirir; değiştiren şey düzenli ve yapıcı gözlemdir. Uygulama basittir: vardiya amiri veya İSG sorumlusu, haftada birkaç kez on beş dakikalık gözlem yapar ve belirli davranışları işaretler — yükün alçakta taşınması, dönüş öncesi yavaşlama, geri manevrada dönüp bakma, emniyet kemeri, kesişimde duruş, yaya önceliği. Gözlem sonrası konuşma ceza dili değil geri bildirim dilidir; amaç kayıt tutmak değil davranışı düzeltmektir. Birkaç ay sonra ortaya çıkan tablo, hangi davranışın tesis genelinde zayıf olduğunu gösterir ve eğitim, tahmine değil bu veriye göre planlanır.",
            },
            {
                baslik: "Periyodik kontrol ve kayıtlar: denetimde değil, kazadan önce işe yarar",
                metin:
                    "İş ekipmanlarının periyodik kontrolü mevzuat gereğidir ve forkliftler bu kapsamdadır; kontrolün yetkili kişilerce yapılması, raporların saklanması ve tespit edilen eksikliklerin kapatılması zincirin tamamıdır. Uygulamada en sık kopan halka sonuncusudur — rapor alınır, dosyalanır, eksik kalır. İşleyen düzende her tespit bir sorumluya ve tarihe bağlanır, kapandığında kayda geçer. Kiralık filoda periyodik kontrol yükümlülüğü ve raporların temini kiralayan firmadadır; tesis, raporların güncelliğini takip eder ve dosyayı hazır tutar. Günlük kontrol listeleri ile periyodik kontrol birbirinin yerine geçmez: biri erken belirtiyi, diğeri yapısal uygunluğu yakalar.",
            },
            {
                baslik: "Yakın ıskalama bildirimi: kazasız yılın gerçek göstergesi bildirim sayısıdır",
                metin:
                    "Kaza olmadan atlatılan olaylar — az kalsın çarpışma, devrilmeye giden manevra, düşen palet — bir tesisin en değerli erken uyarı verisidir ve neredeyse hiçbir yerde kendiliğinden bildirilmez; çünkü bildiren kişi kendini suçlamış gibi hisseder. Bildirimi açan tek şey, bildirimin cezaya dönüşmediğinin fiilen görülmesidir. Uygulama sırası şudur: bildirim kanalı basitleştirilir (kısa form ya da amire sözlü), gelen her bildirim için bir düzeltme adımı atılır ve bu adım sahaya duyurulur. Bildirim sayısının artması kötü değil iyi haberdir — riskler kazaya dönüşmeden görünür hâle gelmiştir. Bildirim sıfır olan tesiste risk yoktur denmez; risk görünmüyordur denir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatör yetkinlik matrisi: kim, hangi makineyi, hangi bölgede",
                paragraflar: [
                    "Aşağıdaki matris yapısı, tesis içi yetkilendirmeyi izlenebilir kılar; her satır bir operatör, her sütun bir yetki alanıdır ve yetki tarihiyle birlikte tutulur.",
                ],
                tablo: {
                    basliklar: ["Yetki alanı", "Ön koşul", "Yetki nasıl verilir", "Tazeleme"],
                    satirlar: [
                        ["Karşı ağırlıklı, genel saha", "Geçerli operatör belgesi", "Saha oryantasyonu + gözlemli kullanım", "Yıllık"],
                        ["Dar koridor / raf istifi", "Genel saha yetkisi", "Koridorda gözlemli istif değerlendirmesi", "Yıllık"],
                        ["Ataşmanlı çalışma", "İlgili ataşman brifingi", "Ataşmanla gözlemli çalışma", "Ataşman değişiminde"],
                        ["Rampa ve dorse içi", "Genel saha yetkisi", "Takoz-köprü prosedürü uygulamalı", "Yıllık"],
                        ["Gece vardiyası rotası", "En az bir dönem gündüz deneyimi", "Amir değerlendirmesi", "Vardiya değişiminde"],
                    ],
                },
            },
            {
                baslik: "Eğitimin sahaya inmesi: sınıf saatinden çok, makine başında geçen dakika",
                paragraflar: [
                    "Forklift eğitiminin en zayıf hâli, yılda bir kez sınıfta anlatılıp imzalanan sunumdur; en güçlü hâli ise kısa, sık ve makine başında yapılan uygulamalı tazelemelerdir. Vardiya başında beş dakikalık tek konu — bu hafta geri manevra, gelecek hafta yük yüksekliği — anlatıp sahada gösterildiğinde davranışta iz bırakır. Yıl içinde işlenen konular gözlem verisine göre seçilir; herkesin zaten yaptığı davranışı tekrar anlatmak zaman kaybıdır, tabloda zayıf çıkan davranışı işlemek ise doğrudan risk düşürür.",
                    "Kiralık filoyla çalışan tesislerde teslimat günü verilen makine brifingi bu döngünün başlangıcıdır: yeni gelen makinenin kumanda farkları, ataşman kullanımı ve kapasite sınırları sahada gösterilir. Makine değiştiğinde brifing tekrarlanır — 'forklift forklifttir' varsayımı, model farklarının yol açtığı hataların kaynağıdır.",
                ],
            },
            {
                baslik: "Kaza sonrası: sorumluyu değil nedeni aramak",
                paragraflar: [
                    "Kaza veya ciddi hasar sonrası yapılan incelemenin yönü, tesisin gelecekteki güvenliğini belirler: soru 'kim yaptı' olduğunda cevaplar savunmaya döner ve gerçek neden gizlenir; soru 'bu koşullarda neden mümkün oldu' olduğunda zemin, görüş, hız, yük, aydınlatma, eğitim ve iş baskısı gibi düzeltilebilir etkenler ortaya çıkar. İnceleme aynı gün ve olay yerinde yapılır, fotoğrafla kaydedilir ve çıkan düzeltici adımlar tarihiyle takip edilir. Kapanan her adımın sahaya duyurulması, bir sonraki bildirimin gelmesini sağlar.",
                    "Kiralık makine karışan olaylarda teknik inceleme ortak yapılır: makinede bir arıza payı var mıydı, bakım kayıtları ne diyor, ataşman doğru kullanılmış mıydı. Bu ortak inceleme, hem sorumluluk sınırını netleştirir hem de aynı olayın başka tesiste tekrarını önleyecek bilgiyi üretir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlerimizin belgeleri var ama saha alışkanlıkları kötü; eğitimi tekrar mı almalılar?",
                cevap:
                    "Aynı eğitimi tekrar almak genelde işe yaramaz, çünkü sorun bilgi eksikliği değil davranış alışkanlığıdır — kişiler doğruyu bilir, yoğunlukta eskiye döner. Etkili yol, önce hangi davranışların zayıf olduğunu gözlemle ölçmek, sonra o davranışlara odaklı kısa ve sık tazelemeler yapmaktır: haftada beş dakika, tek konu, makine başında gösterimle. Buna iki destek eklenir — sahadaki fiziksel koşulların davranışı zorlaştırmadığından emin olmak (dar dönüş, kör köşe, kötü aydınlatma kuralı fiilen imkânsızlaştırıyor olabilir) ve yöneticinin iş baskısıyla farkında olmadan hızı ödüllendirmediğinden emin olmak. Bu üçlü kurulduğunda alışkanlık birkaç ay içinde ölçülebilir şekilde değişir.",
            },
            {
                soru: "Kiralık makine kullanıyoruz; periyodik kontrol ve İSG sorumluluğu kimde?",
                cevap:
                    "Sorumluluk paylaşılır ve sınırı sözleşmede yazılı olmalıdır. Makinenin teknik uygunluğu, periyodik kontrollerinin yaptırılması ve raporlarının temini kiralayan firmanın yükümlülüğüdür; makinenin sahada güvenli kullanımı, operatörün belgeli ve yetkili olması, saha düzeni ve günlük kontroller ise makineyi çalıştıran tesisin sorumluluğundadır. Uygulamada tesisin yapması gereken iki şey vardır: rapor dosyasını güncel tutmak ve makinede fark ettiği teknik eksikliği bekletmeden bildirmek. Bildirilmemiş ve kullanılmaya devam edilmiş bir eksiklik, sorumluluğu tesise kaydırır. Teslimat sırasında bu haritayı yazılı geçiyoruz; belirsizlik kalmaması iki taraf için de koruyucudur.",
            },
            {
                soru: "Yakın ıskalama bildirimi istiyoruz ama kimse bildirmiyor; nasıl başlatırız?",
                cevap:
                    "Bildirimin önündeki engel neredeyse her zaman korkudur: bildiren kişi suçlanacağını veya işini riske atacağını düşünür. Başlangıç için üç adım işe yarar. Birincisi kanalı basitleştirmek — uzun form yerine amire sözlü bildirim veya birkaç satırlık kart yeterlidir. İkincisi ilk bildirimlerde kimseyi sorgulamamak ve her bildirim için görünür bir düzeltme yapmak: ayna takılır, çizgi çekilir, hız levhası konur ve bu düzeltme sahaya 'şu bildirim sayesinde yapıldı' diye duyurulur. Üçüncüsü yöneticinin kendi hatasını da bildirmesi; kültürü açan en güçlü hamle budur. İlk aylarda bildirim sayısının artması hedeftir — artan bildirim, azalan kazanın öncü göstergesidir.",
            },
            {
                soru: "Yeni işe aldığımız deneyimli operatörler ilk haftalarda hasar yapıyor; neden?",
                cevap:
                    "Çünkü deneyim makineye aittir, sahaya değil: kişi forklifti bilir ama sizin koridor genişliğinizi, kör köşelerinizi, raf katı sınırlarınızı, palet kalitenizi ve yaya alışkanlıklarınızı bilmez — üstelik deneyimli olduğu için hızlı başlar ve öğrenme payı bırakmaz. Çözüm kısa ve yapılandırılmış bir alıştırma dönemidir: yerinde saha turu ve risk noktalarının gösterilmesi, ilk günler ikincil rotada çalışma, deneyimli bir operatörün gölge olarak eşlik etmesi ve ancak sonra kritik rotaya çıkma. Ataşmanlı işler ve dar koridor istifi bu dönemin sonuna bırakılır. Bir hafta süren bu program, ilk ay hasarlarını belirgin düşürür ve yeni kişinin kendini kanıtlama baskısını da azaltır.",
            },
            {
                soru: "Vardiya amirlerimiz İSG kurallarını takip etmeye vakit bulamıyor; ne önerirsiniz?",
                cevap:
                    "Takibi ayrı bir iş olmaktan çıkarıp mevcut rutine gömmek gerekir. Üç pratik yerleştirme işe yarar: vardiya başı beş dakikalık toplantıya tek bir güvenlik konusu eklemek, saha turunu zaten yapıyorsa turda üç davranışı işaretleyecek küçük bir kart taşımak ve haftada bir kez on beş dakikalık odaklı gözlem yapmak. Toplam yük haftada bir saati geçmez. İkinci mesele önceliktir — amir, üretim baskısıyla güvenliği ikinci sıraya koyuyorsa sorun vakit değil yönetim mesajıdır; üst yönetimin duruşu bunu belirler. Üçüncüsü sadeleştirmedir: takip edilecek kalem sayısı azaltıldığında takip fiilen yapılır, uzun kontrol listeleri doldurulmuş görünüp okunmaz.",
            },
            {
                soru: "Ataşman değiştirdiğimizde ek eğitim gerekiyor mu?",
                cevap:
                    "Gerekiyor ve bu, en sık atlanan adımlardan biridir: klemp, rotator, uzatma çatalı veya big-bag aparatı takılan makine, artık farklı bir makinedir — kapasitesi düşer, ağırlık merkezi değişir, kumanda kolları farklı işlev kazanır ve yükü kavrama biçimi yeni bir teknik gerektirir. Uygulanması gereken minimum, ataşman tanıtımı ve gözlemli ilk çalışma seansıdır; kapasite düşüşü operatöre rakamla anlatılmalı ve yeni yük diyagramı kabinde bulunmalıdır. Klempli işlerde basınç ayarının ürüne göre değiştiği tesislerde ayar tablosu yazılı verilir. Ataşmanlı makine tesliminde bu brifingi biz veriyoruz; ataşman sonradan değişirse tekrarlanması gerektiğini hatırlatırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Operatör belge zorunluluğu ve iş ekipmanlarının periyodik kontrolü Türkiye mevzuatına dayanır; davranış temelli gözlem, yakın ıskalama bildirimi ve yetkinlik matrisi sektör standardı İSG pratikleridir; alıştırma programı firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
    },

    "bolge:izmir-kemalpasa-osb-cevre-ili": {
        h1: "Kemalpaşa OSB'de Forklift Operasyonu: Lojistik Depolarında Çevrim Süresi Yönetimi",
        giris:
            "Kemalpaşa, İzmir'in üretim ve lojistik yoğunluğunun en belirgin toplandığı bölgelerden biridir ve buradaki büyük depolar, forklift operasyonunu üretim tesislerinden farklı bir mantıkla çalıştırır: üretimde makine hattı besler, depoda ise makine siparişi besler. Ölçü birimi paletten çok çevrim süresidir — mal kabulde aracın boşalması, adresine yerleşmesi, sipariş anında toplanması ve sevkiyat kapısından çıkması arasındaki toplam süre. Bu zincirde forklift, deponun en pahalı hareketli kaynağıdır ve boşta geçen her dakikası doğrudan maliyettir. Depo operasyonunun zorluğu da buradan gelir: iş yükü gün içinde eşit dağılmaz, mal kabul sabaha, sevkiyat akşama yığılır ve aynı filo iki tepeyi de karşılamak zorundadır. Bu sayfa, lojistik depolarında forklift operasyonunu çevrim süresi gözüyle ele alır: kapı ve rampa planlaması, mal kabulden adrese geçiş, raf disiplini, dalga bazlı toplama düzeni ve filo kapasitesinin gerçek veriyle boyutlanması.",
        maddeler: [
            {
                baslik: "Kapı planlaması: rampa sayısı değil, kapının doluluk dağılımı belirleyicidir",
                metin:
                    "Depoların çoğunda rampa kapıları gün içinde eşit kullanılmaz; sabah mal kabul kapıları tıkanırken sevkiyat kapıları boş bekler, akşam tersi olur. Forklift filosu bu dalgayı takip etmek zorunda kaldığı için sürekli yer değiştirir ve boş dolaşım artar. Etkili düzenleme, kapı randevularını dalgayı yumuşatacak biçimde dağıtmak ve kapıları esnek tanımlamaktır — sabit 'mal kabul kapısı' yerine saate göre rol değiştiren kapılar, aynı fiziksel altyapıdan daha fazla çevrim çıkarır. Randevu sistemi olmayan depolarda ilk adım, tedarikçi ve nakliyecilerle gelişleri saat aralıklarına bağlamaktır; bu tek düzenleme, filo eklemeden bekleme sürelerini düşürür.",
            },
            {
                baslik: "Mal kabulden adrese: iki aşamalı yerleştirmenin gizli maliyeti",
                metin:
                    "Yoğun mal kabulde yaygın pratik, aracı hızla boşaltıp paletleri kabul alanına yığmak ve adrese yerleştirmeyi sonraya bırakmaktır. Bu, aracı erken serbest bırakır ama her paleti iki kez taşıtır — forklift saatinin en sessiz israfı budur. Alternatif, doğrudan yerleştirmedir: paletin adresi kabul sırasında belli olur ve makine, boşalttığı paleti aynı hareketle adresine götürür. Doğrudan yerleştirmenin ön şartı, adres planının önceden hazır olması ve kabul kayıtlarının araç kapıya yanaşmadan girilmiş olmasıdır. Her palet için iki aşamanın kaçınılmaz olduğu durumlar vardır (kalite kontrol bekleyen mallar gibi); önemli olan bunun istisna olması, varsayılan yöntem olmamasıdır.",
            },
            {
                baslik: "Raf disiplini: bozulan tek adres, bütün toplama planını yavaşlatır",
                metin:
                    "Depoda forklift verimini sessizce düşüren şey, adres düzeninin küçük ihlalleridir: paletin komşu göze taşması, koridora bırakılan geçici palet, etiketi okunmayan raf gözü, yanlış adrese konmuş ve kayda geçmemiş palet. Her biri tek başına küçüktür ama toplama sırasında makinenin durup aramasına, sormasına, geri dönmesine yol açar. Düzeni koruyan iki uygulama vardır: koridora palet bırakmanın istisnasız yasaklanması ve günlük kısa bir düzen turu — vardiya sonunda taşan, kayan, yanlış duran paletlerin düzeltilmesi. Bu tur on beş dakikadır ve ertesi günün toplama süresinden fazlasını geri kazandırır.",
            },
            {
                baslik: "Dalga bazlı toplama: sipariş sırasına değil, depo coğrafyasına göre çalışmak",
                metin:
                    "Siparişler geldikleri sırayla tek tek toplandığında forklift aynı koridora gün boyu tekrar tekrar girer. Dalga mantığı bunu tersine çevirir: belirli bir zaman diliminin siparişleri birleştirilir, ortak koridorlar tek geçişte taranır ve toplanan paletler sevkiyat alanında siparişlerine ayrılır. Kazanç mesafededir ve büyük depolarda belirgindir. Dalga büyüklüğü, sevkiyat alanının ayrıştırma kapasitesiyle sınırlıdır — çok büyük dalga, ayrıştırmada karışıklık üretir. Uygulamanın ön şartı yine adres doğruluğudur; yanlış adres, dalga içinde çözülmesi en pahalı hatadır çünkü tek bir eksik satır bütün dalganın kapanmasını geciktirir.",
            },
            {
                baslik: "Filo kapasitesini veriyle boyutlamak: makine sayısı bir tahmin işi değildir",
                metin:
                    "Depoda kaç forklift gerektiği sorusu, günlük palet hareketi sayısı ve ortalama çevrim süresiyle hesaplanır: günde kaç yerleştirme, kaç toplama, kaç yükleme hareketi yapılıyor, bir hareket ortalama kaç dakika sürüyor ve makine başına kaç etkin çalışma saati var. Bu üç veriyle bulunan sayı, tepe saatlerin payıyla düzeltilir. Hesabı yapmayan depolarda iki yanlış birden görülür — sakin saatlerde atıl duran makineler ve tepe saatlerde yetişememe. Doğru cevap genelde filoyu büyütmek değil, iş yükünü güne yaymaktır; yayma imkânı bittiğinde ise ek makine kısa dönem kiralamayla denenip veriyle doğrulanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo forklift operasyonunun çevrim süresi bileşenleri",
                paragraflar: [
                    "Aşağıdaki tablo, deponun temel forklift hareketlerini, süreyi belirleyen ana etkeni ve iyileştirmenin ilk adresini gösterir; süre kısaltma çalışmalarına en yüksek hacimli hareketten başlanır.",
                ],
                tablo: {
                    basliklar: ["Hareket", "Süreyi belirleyen etken", "İlk iyileştirme"],
                    satirlar: [
                        ["Araç boşaltma", "Kapı doluluğu ve palet erişilebilirliği", "Randevu dağıtımı"],
                        ["Yerleştirme", "Kabul alanı ile adres arası mesafe", "Doğrudan yerleştirmeye geçiş"],
                        ["Toplama", "Adresler arası dolaşım mesafesi", "Dalga ve depo sırasına göre liste"],
                        ["Sevkiyat hazırlığı", "Ön dizim yapılıp yapılmadığı", "Bir önceki vardiyada hazırlık"],
                        ["Araç yükleme", "Ön dizim ve doğrulama düzeni", "Palet bazlı liste ve karşı sayım"],
                    ],
                },
            },
            {
                baslik: "Yüksek raflı depoda makine görev ayrımı",
                paragraflar: [
                    "Yüksek raflı ve dar koridorlu depolarda tek tip makineyle bütün işleri yürütmek, hem verimi hem güvenliği zorlar: koridorda çalışan makinenin rampaya çıkması, rampa makinesinin koridora girmesi ikisinin de tasarlandığı işten uzaklaşmasıdır. Verimli düzen görev ayrımıdır — koridor içi istif ve toplama kendi makinelerine, rampa ve kabul alanı işleri kendi makinelerine bırakılır ve ikisi arasında tanımlı bir aktarma noktası bulunur. Bu ayrım, koridor içi trafiği de sadeleştirir; koridora giren makine sayısı azaldıkça raf hasarı riski düşer.",
                    "Raf hasarı ayrı bir takip başlığıdır: her temas kayda geçmeli, hasarlı raf gözü boşaltılıp değerlendirilmelidir. Görülmeyen raf hasarı, yıllar sonra ağır sonuçlu göçmelerin arkasındaki en yaygın nedendir ve kayıt kültürü olmayan depolarda birikerek ilerler.",
                ],
            },
            {
                baslik: "Kiralık filoyla depo operasyonu: esneklik, kampanya dönemlerinde kazanır",
                paragraflar: [
                    "Lojistik depolarının iş hacmi müşteri portföyüne bağlı olarak yıl içinde belirgin dalgalanır; yeni bir müşteri kazanıldığında hacim bir anda artar, sözleşme bittiğinde düşer. Bu belirsizlik, filoyu tümüyle satın alarak yönetmeyi zorlaştırır — sabit filo, hacim düştüğünde maliyet olarak kalır. Kiralamanın buradaki değeri, filo boyutunu sözleşme takvimiyle hizalayabilmektir: taban hacim uzun dönem sözleşmede tutulur, yeni müşteri veya kampanya dönemleri kısa dönem ek makineyle karşılanır.",
                    "Operasyon tarafında dikkat edilecek nokta devreye alma hızıdır: ek makine geldiği gün üretken olmalıdır. Bunun için rota ataması, operatör eşleşmesi ve şarj altyapısı önceden hazırlanır; hacim artışı planlıysa makine, artıştan birkaç gün önce sahaya alınıp devreye sokulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzda forkliftler sürekli meşgul ama çevrim süreleri iyileşmiyor; nereden başlamalıyız?",
                cevap:
                    "Meşguliyet ile verim aynı şey değildir — makineler dolu çalışıyor olabilir ama hareketlerin bir kısmı gereksiz olabilir. Başlangıç için iki ölçüm yeterlidir: yüklü hareket oranı (yüklü mesafenin toplam mesafeye oranı) ve palet başına ortalama taşıma sayısı. İkinci ölçüm çoğu depoda çarpıcı çıkar; paletlerin iki hatta üç kez taşındığı görülür ve neden bellidir — mal kabulde yığma, geçici alanlar, yanlış adres düzeltmeleri. İyileştirme sırası da buradan çıkar: doğrudan yerleştirmeye geçmek, geçici alanları kaldırmak ve adres doğruluğunu yükseltmek. Bu üç adım genelde filoyu büyütmeden çevrim süresini kısaltır; sonrasında kalan darboğaz gerçekten kapasite ise veriyle net görünür.",
            },
            {
                soru: "Sabah mal kabul, akşam sevkiyat yığılıyor; aynı filoyla iki tepeyi nasıl karşılarız?",
                cevap:
                    "Önce tepeleri düzleştirmeye çalışın, sonra filoyu konuşun. Düzleştirmenin en güçlü aracı randevudur: tedarikçi araçları güne yayıldığında sabah tepesi belirgin iner ve bunu uygulamak çoğu zaman sadece iletişim işidir. İkinci araç kaydırmadır — sevkiyat hazırlığının (ön dizim, etiketleme, kontrol) bir önceki vardiyada veya öğle saatlerinde yapılması akşam yükünü hafifletir. Üçüncüsü esnek kapı ve görev tanımıdır: kapıların saate göre rol değiştirmesi ve operatörlerin hem kabul hem sevkiyat işine yetkili olması, filoyu tepenin olduğu yere kaydırmayı mümkün kılar. Bu üçünden sonra kalan tepe gerçek kapasite açığıdır ve tarihli kısa dönem ek makineyle karşılanması en ekonomik yoldur.",
            },
            {
                soru: "Raflarımızda ara sıra çarpma oluyor ama ciddi görünmüyor; ne yapmalıyız?",
                cevap:
                    "Görünürde küçük olan raf temasları, depo güvenliğinin en yanıltıcı konusudur: raf ayağındaki bir ezilme veya eğilme, taşıma kapasitesini düşürür ve hasar birikimli ilerler; sonuç, yıllar sonra beklenmedik bir göçme olabilir. Kurulması gereken düzen üç adımlıdır. Her temas, küçük görünse de kayda geçer ve amire bildirilir; bildirim cezalandırılmaz, yoksa hiç bildirilmez. Hasarlı göz derhal boşaltılır ve yetkin bir değerlendirme yapılana kadar kullanılmaz. Belirli noktalarda tekrarlayan temaslar için fiziksel önlem alınır — ayak koruma, koridor girişi yönlendirme, aydınlatma iyileştirmesi. Ayrıca raf sisteminin periyodik uzman kontrolü, deponun İSG takvimine sabit bir kalem olarak yazılmalıdır.",
            },
            {
                soru: "Toplama listelerimiz sipariş sırasına göre çıkıyor; depo sırasına çevirmek gerçekten fark yaratır mı?",
                cevap:
                    "Büyük depolarda fark belirgindir çünkü kaybın kaynağı manevra değil dolaşımdır: sipariş sırasına göre toplanan liste, forklifti aynı koridora defalarca sokar ve kat edilen mesafenin önemli bölümü boşa gider. Liste depo yerleşimine göre sıralandığında koridorlar tek geçişte taranır. Ölçmek için basit bir deney yeterlidir — bir gün aynı hacimdeki siparişleri iki yöntemle toplayıp süreleri karşılaştırın. Yazılım kullanıyorsanız sıralama genelde bir ayardır; kullanmıyorsanız listeleri elle depo sırasına dizmek de işi görür. İkinci adım, hızlı devreden ürünlerin sevkiyat kapısına yakın adreslere alınmasıdır; ikisi birlikte uygulandığında aynı filoyla toplanan sipariş sayısı gözle görülür artar.",
            },
            {
                soru: "Yeni bir müşteri aldık, hacmimiz iki ay içinde artacak; filoyu nasıl planlamalıyız?",
                cevap:
                    "Hacim artışını hareket sayısına çevirerek başlayın: yeni müşterinin günlük kaç palet giriş, kaç toplama ve kaç sevkiyat hareketi getireceği tahmin edilir ve mevcut çevrim sürelerinizle çarpılarak ek makine-saat ihtiyacı bulunur. Bu hesap, ek makinenin gerekip gerekmediğini ve kaç adet olduğunu tahminden çıkarır. Planlamanın ikinci yarısı zamanlamadır — makine, hacim geldiği gün değil birkaç gün önce sahada olmalı ki rota ataması, operatör eşleşmesi ve şarj düzeni oturmuş olsun. Sözleşme tarafında ise başlangıçta kısa dönem, hacim kalıcılaştığında uzun döneme geçiş yapısı en esnek yoldur; müşteri sözleşmenizin süresiyle kiralama süresini hizalamak da riski dengeler. Hacim tahmininizi paylaşırsanız hesabı birlikte kurabiliriz.",
            },
            {
                soru: "Aynı makinelerle hem dar koridorda hem rampada çalışıyoruz; ayırmak gerçekten gerekli mi?",
                cevap:
                    "Depo büyüdükçe gereklilik artar. Sebebi iki yönlüdür. Verim tarafında, koridor içi işten rampaya çağrılan makine hem yolu kaybeder hem toplama ritmini bozar; rampa dalgası bittiğinde koridora dönüş, yeniden ısınma süresi ister. Güvenlik tarafında, koridora giren makine sayısı arttıkça raf teması ve karşılaşma riski büyür; ayrıca rampa ve dış saha işlerinden gelen kir ve zemin farkı koridor içinde ek risk üretir. Küçük depolarda tek filoyla çalışmak makul olabilir; hacim büyüdüğünde görev ayrımı ve iki bölge arasında tanımlı bir aktarma noktası kurmak hem çevrim süresini kısaltır hem hasarı düşürür. Ayrımın maliyeti genelde sanıldığından düşüktür, çünkü ayrılan makineler kendi işlerinde daha yüksek doluluk oranıyla çalışır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kemalpaşa çevresindeki lojistik ve üretim yoğunluğu kamuya açık bilgidir; çevrim süresi bileşenleri, dalga bazlı toplama, doğrudan yerleştirme ve raf hasarı yönetimi sektör standardı depo operasyon pratikleridir; filo hesaplama yaklaşımı firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
    },

    "bolge:usak-osb-cevre-ili": {
        h1: "Uşak OSB'de Forklift Operasyonu: Tekstil Balyası ve Bobin Elleçlemenin Günlük Disiplini",
        giris:
            "Uşak'ın sanayi kimliğinde tekstil ve iplik üretimi belirleyici bir yer tutar; battaniye ve iplik üretim geleneği, bölgedeki tesislerin elleçleme profiline doğrudan yansır. Bu profilin forklift operasyonuna getirdiği üç özel durum vardır. Birincisi yükün biçimidir: preslenmiş elyaf ve hurda tekstil balyaları, iplik bobin paletleri ve kumaş topları, standart kutu-palet dünyasından farklı davranır — kaygandır, yuvarlanır, silindiriktir ya da bağı gevşediğinde dağılır. İkincisi ortamdır: iplik ve elyaf işleyen sahalarda havada uçuşan lif ve toz, makinelerin soğutma ve elektrik aksamında birikir ve yangın riskiyle birlikte anılır. Üçüncüsü ise depo yoğunluğudur; hacimli ama görece hafif yükler, alanı ağırlıktan önce doldurur ve istif düzeni verimin merkezine oturur. Bu sayfa, tekstil ekosistemindeki forklift operasyonunu bu üç gerçek üzerinden ele alır: balya ve bobin elleçleme kuralları, klemp kullanımının günlük disiplini, lif-toz ortamında makine bakımı ve yangın önlemleri, hacimli yükte istif planlaması ve sevkiyat düzeni.",
        maddeler: [
            {
                baslik: "Balya elleçleme: klemp bir kolaylık değil, kendi kuralları olan bir tekniktir",
                metin:
                    "Preslenmiş balya, çatalla taşınmaya uygun olmayan bir yüktür; balya klempi bu yüzden tekstil sahalarının standart donanımıdır. Klemp kullanımının günlük disiplini üç noktada toplanır. Kavrama basıncı yük tipine göre ayarlanır — düşük basınç balyayı kaydırır, yüksek basınç ambalajı ve balya bağını zorlar. Kavrama yüzeyinin balyanın orta hizasına gelmesi gerekir; alt veya üst kenardan kavranan balya taşıma sırasında döner. Ve klemp takılı makinenin taşıma kapasitesi, ataşmanın kendi ağırlığı ile yükü öne taşıması nedeniyle çatallı hâline göre düşüktür; operatör bu düşük değeri bilmeli ve kabinde güncel yük diyagramı bulunmalıdır.",
            },
            {
                baslik: "Bobin ve top yükleri: yuvarlanan yükün rotası düz olur",
                metin:
                    "İplik bobini, kumaş topu ve rulo hâlindeki yüklerin ortak özelliği yuvarlanma eğilimidir; palet üzerinde dahi taşınsalar denge, kutu yüklerdeki kadar affedici değildir. Operasyon kuralları buna göre yazılır: rulo ve bobin yükleri düz ve kesintisiz rotalarda taşınır, eğimli geçişlerde yükün ekseni eğime dik değil paralel tutulur, palet üstü yükler bağlanmadan yola çıkarılmaz ve rulo klempi kullanılan işlerde kavrama, rulonun eksenine dik ve merkezli yapılır. Depoda rulo istifi yapılacaksa alt sıraya takoz konur; takozsuz istifin çözülmesi, sessiz ve hızlı gelişen bir yük düşmesi vakasıdır. Bu yüklerde hız sınırı, sahanın genel sınırının altında tutulur.",
            },
            {
                baslik: "Lif ve toz ortamı: makine bakımı yangın önlemidir",
                metin:
                    "Elyaf ve iplik işlenen sahalarda havada dolaşan lif, forkliftin radyatör peteklerinde, motor bölmesinde ve elektrik aksamı çevresinde birikir. Bu birikimin iki sonucu vardır: soğutma verimi düşer ve makine ısınır; ısınan yüzeyle temas eden lif birikimi ise tutuşma riski taşır. Bu yüzden tekstil sahalarında forklift temizliği kozmetik bir iş değil güvenlik önlemidir — vardiya sonu basınçlı hava ile temizlik rutini kurulur, motor bölmesi düzenli açılıp kontrol edilir ve bakım aralıkları standart takvimden kısaltılır. Yangın tüpünün makine üzerinde bulunması ve operatörün kullanımını bilmesi de bu sahaların standardıdır; tesis yangın planında forklift rotaları ve şarj alanı ayrıca yer alır.",
            },
            {
                baslik: "Hacimli hafif yükte istif planı: alan, tonajdan önce biter",
                metin:
                    "Tekstil yüklerinin çoğu hacimlidir ama görece hafiftir; bu, depo planlamasında alışılmış tonaj hesabını ikinci plana atar ve metreküp yönetimini öne çıkarır. Yükseğe istif etmek cazip görünür, ancak sınırı iki şey belirler: balya veya paletin kendi taşıma dayanımı ve istifin yanal kararlılığı. Yumuşak yükler üst üste bindiğinde alt sıralar sıkışır ve kule zamanla eğilir; bu eğilme fark edildiğinde istif hemen alçaltılmalıdır. Blok istif alanlarında koridor genişlikleri, yükün taşınırken kapladığı hacme göre değil, forkliftin klempli hâlde manevra ihtiyacına göre belirlenir — klemp takılı makine, çatallı makineden daha geniş yer ister ve bu ayrıntı planlamada sıkça atlanır.",
            },
            {
                baslik: "Hammadde girişinden sevkiyata: iki uçlu trafiğin ayrılması",
                metin:
                    "Tekstil tesislerinde forklift trafiği iki uçludur: bir yanda hammadde balyalarının girişi ve üretime beslenmesi, diğer yanda mamul bobin veya top paletlerinin depolanıp sevk edilmesi. Bu iki akışın aynı koridorları ve aynı kapıları paylaşması, hem trafik hem temizlik açısından sorun üretir — hammadde tarafının tozu, mamul tarafına taşınır. Mümkün olan tesislerde iki akış fiziksel olarak ayrılır; ayrılamıyorsa zaman ayrımı uygulanır ve makinelerin görev ayrımı korunur. Ayrımın verim tarafındaki kazancı da vardır: her makine kendi yük tipine göre donanımlı kalır ve gün içinde ataşman değiştirmek zorunda kalınmaz, ki ataşman değişimi çoğu tesiste sanılandan uzun sürer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tekstil yük tiplerine göre elleçleme kuralları",
                paragraflar: [
                    "Aşağıdaki tablo, tekstil ekosisteminde sık karşılaşılan yük tiplerini, elleçleme donanımını ve operasyonun kritik kuralını özetler.",
                ],
                tablo: {
                    basliklar: ["Yük tipi", "Donanım", "Kritik operasyon kuralı"],
                    satirlar: [
                        ["Preslenmiş elyaf balyası", "Balya klempi", "Orta hizadan kavrama, basınç ayarı"],
                        ["Hurda tekstil balyası", "Balya klempi", "Bağı gevşemiş balya taşınmaz"],
                        ["İplik bobin paleti", "Çatal, gerekirse bağlama", "Düz rota, bağlanmadan taşınmaz"],
                        ["Kumaş topu / rulo", "Rulo klempi", "Eksene dik ve merkezli kavrama"],
                        ["Mamul koli paleti", "Çatal", "Palet altına tam giriş, ezme yok"],
                    ],
                },
            },
            {
                baslik: "Şarj alanı ve yangın: tekstil sahasında iki riskin kesişimi",
                paragraflar: [
                    "Akülü filo kullanan tekstil tesislerinde şarj alanının konumu, genel kuralların ötesinde bir önem taşır: kurşun-asit akü şarjında açığa çıkan hidrojen nedeniyle alanın havalandırılmış olması gerekir ve bu alan, lif-toz birikiminin yoğun olduğu bölümlerden uzak tutulmalıdır. Şarj alanı düzenli temizlenir, kablo ve konnektör yalıtımı kontrol edilir, alanda yanıcı malzeme ve tekstil atığı bulundurulmaz. Yangın söndürme ekipmanı alana yakın ve erişilir konumda olur.",
                    "Aynı mantık makine üzerinde de işler: motor bölmesinde biriken lif, sıcak yüzeyle temas ettiğinde risk üretir ve bu birikim gözle görülmeden hızlı oluşur. Vardiya sonu temizliğin denetlenmesi, tekstil sahasında İSG turunun sabit maddelerinden biri olmalıdır.",
                ],
            },
            {
                baslik: "Üretim beslemesinin ritmi: makine değişimi ve parti geçişleri",
                paragraflar: [
                    "İplik ve dokuma tesislerinde üretim, parti bazlı akar ve parti geçişleri forklift operasyonunun en yoğun anlarıdır: biten partinin mamulü çekilir, yeni partinin hammaddesi getirilir ve bu iki hareket kısa bir pencerede üst üste biner. Planlanmadığında pencere uzar ve makineler bekler. Etkili yöntem, parti geçiş saatlerinin üretim planından önceden alınması ve forklift görevlendirmesinin bu saatlere göre yapılmasıdır; geçiş öncesi hammadde, hat kenarı tampon alanına önceden taşınırsa pencere belirgin kısalır.",
                    "Bu planlamanın yan faydası trafiğin dengelenmesidir: geçiş anlarında bütün makinelerin aynı bölgeye yığılması yerine görevler sıraya konur ve koridorlarda karşılaşma azalır. Üretim planlama ile forklift planlamasının aynı masada yapılması, tekstil tesislerinde en hızlı geri dönüş veren düzenlemelerden biridir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Balya taşırken ara sıra balya klempten kayıyor; basıncı artırmak doğru çözüm mü?",
                cevap:
                    "Basıncı körlemesine artırmak, kaymayı azaltırken ambalajı ve balya bağını zorlayarak başka bir sorun üretir. Önce kaymanın nedenini ayrıştırın: kavrama balyanın orta hizasından mı yapılıyor, yoksa kenardan mı — kenardan kavranan balya taşımada döner ve kayar. Balya yüzeyi kaygan bir ambalajla mı sarılı, klemp pedleri aşınmış mı, basınç ayarı yük tipine göre mi yapılmış? Bu dört kontrol çoğu vakayı çözer. Ayrıca taşıma tekniği de etkendir: ani hızlanma, sert fren ve dönüşte hız, kavrama ne kadar iyi olursa olsun kaymayı davet eder. Klemp pedlerinin durumunu bakım kontrolüne sabit madde olarak ekleyin; aşınmış ped, tekstil sahalarında en sık gözden kaçan kalemdir.",
            },
            {
                soru: "Makinelerimizin radyatörüne lif doluyor ve sık ısınıyorlar; ne yapmalıyız?",
                cevap:
                    "Bu, tekstil sahalarının klasik sorunudur ve çözümü rutinde: vardiya sonu basınçlı hava ile radyatör ve motor bölmesi temizliği, düzenli aralıklarla bölmenin açılıp kontrolü ve bakım aralıklarının standart takvimden kısaltılması. Rutin kurulduğunda ısınma vakaları belirgin azalır. İkinci katman makinenin konumlandırılmasıdır — mümkünse en yoğun lif üreten bölümlerde çalışan makineler belirlenip temizlik sıklığı onlarda artırılır. Üçüncü ve en önemli katman ise güvenliktir: sıcak yüzeyle temas eden lif birikimi tutuşma riski taşır, dolayısıyla bu temizlik konfor değil yangın önlemidir. Kiralık filoda temizlik rutininin kimde olduğu teslimatta yazılı belirlenir; tozlu-lifli sahalarda bakım planını baştan sıklaştırarak kurgularız.",
            },
            {
                soru: "Balyaları yüksek istifliyoruz ve zamanla kuleler eğiliyor; sınırı nasıl belirleyeceğiz?",
                cevap:
                    "Sınırı iki etken belirler: balyanın kendi taşıma dayanımı ve istifin yanal kararlılığı. Yumuşak preslenmiş yükler üst üste bindiğinde alt sıralar sıkışır, yükseklik zamanla değişir ve kule eğilmeye başlar; eğilme fark edildiğinde istif derhal alçaltılmalıdır, çünkü eğilmiş kule kendiliğinden düzelmez. Pratik yöntem, kabul edilebilir azami sıra sayısını yük tipine göre yazılı belirlemek, istif alanlarını işaretlemek ve haftalık bir düzen turunda kuleleri gözle kontrol etmektir. Zemin düzgünlüğü de hesaba girer — hafif eğimli zeminde aynı yükseklik güvenli değildir. Alan sıkışıklığı sizi yüksek istife zorluyorsa çözüm istifi zorlamak değil, blok düzenini ve koridor genişliklerini yeniden planlamaktır.",
            },
            {
                soru: "Klempli makineyle koridorlarımızda manevra zorlaşıyor; koridorları mı genişletmeliyiz?",
                cevap:
                    "Genişletme son çaredir; önce iki şeyi kontrol edin. Birincisi, klempli makinenin manevra ihtiyacı çatallı hâlinden fazladır ve koridor planı çoğu tesiste çatallı ölçüye göre yapılmıştır — yani sorun koridorda değil, planın hangi konfigürasyona göre yapıldığındadır. İkincisi görev dağılımıdır: klempli makinenin dar koridorlara girmesi zorunlu mu, yoksa koridor işleri çatallı bir makineye devredilip klempli makine blok istif ve sevkiyat alanında mı tutulabilir? Görev ayrımı çoğu tesiste genişletmeye gerek bırakmaz. Üçüncü seçenek yerleşim değişikliğidir — klempli iş gerektiren yüklerin geniş alanlı bölgeye toplanması. Saha krokinizle bakalım; bu üç seçenekten hangisinin sizde uygulanabilir olduğu yerinde netleşir.",
            },
            {
                soru: "Parti geçişlerinde forkliftler yetişemiyor ve üretim bekliyor; ek makine mi almalıyız?",
                cevap:
                    "Ek makine kararından önce zamanlamayı düzeltmeyi deneyin, çünkü parti geçişi kısa bir pencerede iki işi birden dayatır: biten partinin mamulünü çekmek ve yeni partinin hammaddesini getirmek. Bu iki iş aynı dakikaya sıkıştığında filo yetişemez. Çözüm hazırlıktır — yeni partinin hammaddesi geçiş saatinden önce hat kenarı tampon alanına taşınır, mamul çekme işi geçişten sonraya planlanır ve görevler makineler arasında önceden dağıtılır. Üretim planından parti geçiş saatlerini almak bu planlamanın ön şartıdır. Bu düzenlemeden sonra hâlâ bekleme varsa gerçek bir kapasite açığı vardır ve o zaman kısa dönem ek makineyle test edip veriyle karar vermek en sağlıklı yoldur.",
            },
            {
                soru: "Hammadde ve mamul akışımız aynı koridorları kullanıyor; ayırmanın maliyeti buna değer mi?",
                cevap:
                    "Çoğu tesiste değer, çünkü kazanç üç kalemden gelir. Temizlik tarafında hammadde balyalarının tozu mamul bölgesine taşınmaz; tekstilde mamul kirlenmesi doğrudan kalite sorunudur ve tek bir parti kaybı, düzenlemenin maliyetini aşabilir. Trafik tarafında iki akışın ayrılması karşılaşmaları ve bekleme sürelerini düşürür. Donanım tarafında ise her makine kendi yük tipine uygun ataşmanla kalır ve gün içinde ataşman değiştirme kaybı ortadan kalkar — bu kayıp çoğu tesiste hafife alınır ama toplandığında belirgindir. Fiziksel ayrım mümkün değilse zaman ayrımı ve görev ayrımı ile kazancın önemli bölümü yine elde edilir. Mevcut yerleşiminizi ve akış hacminizi paylaşın; hangi ayrım biçiminin sizde uygulanabilir olduğunu birlikte çıkaralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Uşak sanayisinin tekstil ve iplik geleneği kamuya açık bilgidir; balya-rulo klemp kullanımı, lif birikimi kaynaklı ısınma-yangın riski ve şarj alanı havalandırma kuralları sektör standardıdır; parti geçişi planlaması ve akış ayrımı yaklaşımı firma pratiğimizdir. Herhangi bir tesis ismi veya sayısal veri kullanılmadı.",
    },

    // ── HİZMET SAYFALARI (ağ genelinde paylaşılan slug seti) ──────────────
    // Bu domainin açısı OPERASYON MÜKEMMELLİYETİ'dir (bkz. dosya başı notu).
    // Kardeş domain izmirforkliftkiralama.net aynı hizmet slug setini SEÇİM
    // açısından (tonaj/mast/lastik) işler; burada aynı slug'lar Manisa OSB'nin
    // gerçek sektör karışımı ve günlük operasyon disiplini üzerinden, farklı
    // cümle ve örneklerle ele alınır. Yazım: 2026-08-14.
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli Örümcek Platform: Manisa OSB'de Forklift Operasyonumuzun Yanında İkincil Bir Hizmet",
        giris:
            "manisaforklift.com'un işi, Manisa OSB'deki üretim ve depo sahalarında forklift operasyonunun günlük akışını kurmaktır — turlu besleme, vardiya devri, şarj penceresi, koridor trafiği. Sepetli örümcek platform (paletli ayaklarıyla zemine basan, dar kapı ve koridordan geçebilen kompakt personel yükseltici) bu işin bir parçası değildir ve bunu baştan açıkça söylüyoruz. Buna rağmen aynı sahada forklift filomuzu kullanan bir tesisten, o hafta içinde çıkan bambaşka bir ihtiyaç için — hat üstü bir aydınlatma armatürü değişimi, çatı altı bir sprinkler kontrolü, raf üstüne asılan bir tabela montajı gibi — personel yükseltme talebi gelebiliyor. Bu talebi forkliftle karşılamıyoruz; forklift çatalına platform bağlayıp insan yükseltmek hem mevzuata aykırıdır hem de operasyon disiplinimizle çelişir. Bunun yerine, sahada zaten çalıştığımız için, dar geçitlere uygun sepetli örümcek platformu münferit ve net tanımlı işler için ikincil hizmet olarak sunuyoruz; talep düzenli veya büyük hacimliyse müşteriyi bu alanda esas uzmanlığa sahip bir platform firmasına yönlendiriyoruz.",
        maddeler: [
            {
                baslik: "Neden ikincil: filomuzun derinliği forklift operasyonundadır",
                metin:
                    "Ekibimizin günlük pratiği turlu besleme düzeni kurmak, vardiya devrini yönetmek, şarj penceresini planlamak ve koridor trafiğini forklift gözüyle düzenlemektir. Sepetli örümcek platform farklı bir bakım rejimi, farklı bir sertifikasyon ve farklı bir saha güvenlik protokolü ister. Bu makineyi ana hizmet gibi sunmak yerine, mevcut forklift müşterimizin sahasında o gün ortaya çıkan tek seferlik bir boşluğu kapatmayı tercih ediyoruz; büyük veya sürekli talepte doğrudan uzman firmaya yönlendirme yapıyoruz.",
            },
            {
                baslik: "Manisa OSB'de bu talep hangi anda çıkıyor",
                metin:
                    "En sık görülen senaryo, forklift filomuzun bir üretim hattında turlu beslemeyle çalıştığı sırada aynı tesiste hat üstü aydınlatma değişimi veya çatı altı kısa bakım işinin gündeme gelmesidir. Bu iş forkliftin yapısal görevi değildir; forklift yük taşımak için tasarlanmıştır, insan yükseltmek için değil. Sepetli örümcek platformun paletli, katlanır ayakları, üretim hattının dar aralıklarına ve kapı ölçülerine forkliftten daha kolay uyar.",
            },
            {
                baslik: "Forklift ile karıştırılmaması gereken ayrı bir ekipman sınıfı",
                metin:
                    "Forklift, karşı ağırlıkla dengelenen ve çatalları üzerinde yük taşıyan bir makinedir; personel taşımak için sertifikalandırılmamıştır. Sahada bazı ekiplerin çatal üzerine platform bağlayıp operatörü yükseltmesi hem yasal hem fiili risk taşır ve operasyon kurallarımızda kesinlikle yasaktır. Sepetli örümcek platform, sepeti insan taşımak üzere üretilmiş, kendi dengeleme ayaklarına sahip bağımsız bir makinedir; iki ihtiyaç varsa iki ayrı ekipman getirilir.",
            },
            {
                baslik: "Kapsamı netleştirme: iş tanımı, zemin, yükseklik",
                metin:
                    "İkincil bir hizmet olduğu için talebi kabul etmeden önce çalışma yüksekliğini, zemin tipini (beton, epoksi, hassas kaplama) ve kapı-koridor ölçülerini soruyoruz. Kısa süreli, tek seferlik işlerde günlük kiralama yeterlidir; forklift operatörümüzün sahada olduğu saatlerle de koordine edilebilir. Operatör belgesi ve saha güvenlik kuralı, forklift işlerimizdeki kadar tavizsiz uygulanır.",
            },
            {
                baslik: "Dürüst sınır: nerede devrediyoruz",
                metin:
                    "Ağır tonajlı, uzun süreli, dış cephe kapsamlı veya birden fazla makine gerektiren personel yükseltme işlerinde bu ikincil hizmeti sunmuyoruz; bu tür işler için esas uzmanlığı olan bir platform kiralama firmasıyla temas kurmanızı öneririz. Amacımız her talebi üstlenmek değil, forklift müşterimizin sahasındaki küçük ve net tanımlı bir boşluğu güvenle kapatmaktır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift ile sepetli örümcek platformun görev farkı",
                paragraflar: [
                    "Aşağıdaki tablo, iki makine sınıfının Manisa OSB sahalarındaki farklı rolünü özetler; kesin seçim iş tanımı ve saha ölçümüyle yapılır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Forklift (ana hizmetimiz)", "Sepetli örümcek platform (ikincil)"],
                    satirlar: [
                        ["Ana görevi", "Palet ve yük taşıma", "Personel yükseltme"],
                        ["Dengeleme", "Karşı ağırlık", "Açılan paletli ayaklar"],
                        ["Manisa OSB'deki kullanım sıklığı", "Günlük, ana operasyon", "Münferit, talebe bağlı"],
                        ["Dar kapı/koridor geçişi", "Sınırlı, ölçüye bağlı", "Katlanır ayaklarla daha uygun"],
                    ],
                },
            },
            {
                baslik: "Aynı sahada, aynı hafta çıkan farklı ihtiyaçlar",
                paragraflar: [
                    "Manisa OSB'deki bir üretim tesisinde forklift filomuz hat kenarı beslemeyle uğraşırken, aynı hafta çatı altında bir aydınlatma armatürü değişmesi, sundurma altında bir sprinkler kontrolü veya raf üstüne bir tabela asılması gerekebilir. Bu işlerin ortak noktası forkliftin değil, insan taşımak üzere tasarlanmış bir makinenin gerekmesidir.",
                    "Bu tür taleplerde sepetli örümcek platformun paletli ayakları, hassas kaplamalı zeminlerde koruma altlığıyla birlikte kullanılır ve iş bitince aynı gün sahadan çıkarılır; forklift operasyonumuz bu süreçten etkilenmez.",
                ],
            },
            {
                baslik: "Ne zaman uzman firmaya yönlendiriyoruz",
                paragraflar: [
                    "Talep haftalık tekrarlıyorsa, çalışma yüksekliği büyükse, dış cephe kapsamı varsa veya birden fazla makine gerekiyorsa bu işi kendi filomuzla değil, sepetli örümcek platform konusunda esas uzmanlığa sahip bir tedarikçiyle karşılıyoruz.",
                    "Bu yönlendirme bir hizmet reddi değil, doğru işi doğru uzmana yönlendirme kararıdır — tıpkı forklift işinde de bir yükün bizim tonaj sınırımızın dışında kaldığını gördüğümüzde dürüstçe söylediğimiz gibi.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftinize personel sepeti takıp bizi yükseltebilir misiniz?",
                cevap:
                    "Hayır ve bu konuda taviz vermiyoruz. Forklift çatalına personel platformu bağlayıp insan yükseltmek mevzuata aykırıdır ve ciddi düşme riski taşır; forklift bu amaç için sertifikalandırılmamıştır. Personel yükseltme ihtiyacınız varsa bunun için üretilmiş ayrı bir makine — sepetli örümcek platform gibi — kullanılmalıdır. Manisa OSB'deki her forklift müşterimize bu ayrım teslimat sırasında açıkça anlatılır ve saha brifingine yazılır.",
            },
            {
                soru: "Bu makineyi hangi işlerde öneriyorsunuz?",
                cevap:
                    "Forklift filomuzun zaten sahada olduğu bir tesiste ortaya çıkan, dar kapı veya koridordan geçmesi gereken, kısa süreli ve net tanımlı iç mekân işlerinde: hat üstü aydınlatma, çatı altı kısa bakım, raf üstü küçük montaj gibi. Ağır, uzun süreli veya dış cephe kapsamlı işlerde bu makineyi ikincil hizmet olarak sunmuyoruz; sizi uzman bir tedarikçiyle buluşturuyoruz.",
            },
            {
                soru: "Forklift olmadan, sadece sepetli platform kiralayabilir miyiz?",
                cevap:
                    "Değerlendirebiliriz ancak bu domainin esas uzmanlığı forklift operasyonu olduğu için sepetli örümcek platformu tek başına, düzenli veya büyük hacimli bir ihtiyaç için arıyorsanız bu alanda esas uzmanlığa sahip bir firmayla doğrudan çalışmanızı öneririz. Mevcut forklift sahamızla aynı tesiste çakışan, münferit talepleri biz de karşılayabiliriz.",
            },
            {
                soru: "Operatör bizde mi olmalı, siz mi sağlıyorsunuz?",
                cevap:
                    "Sepetli örümcek platform da forklift gibi belgeli kullanım gerektirir; operatörünüz varsa ve geçerli belgeye sahipse yalnızca makine, yoksa operatörlü kiralama değerlendirilir. Belgesiz kullanım kabul edilmez; bu kuralı forklift operasyonumuzdaki disiplinin aynısıyla uyguluyoruz.",
            },
            {
                soru: "Üretim hattımızın hassas zemininde iz bırakır mı?",
                cevap:
                    "Paletli ayaklar doğru koruma altlığı kullanılmadan hassas kaplamalı zeminlerde (epoksi, parke) iz veya baskı bırakabilir. Zemin tipi teslimat öncesi sorulur ve gerekiyorsa koruma plakası makineyle birlikte götürülür; bu kontrolü forklift işlerimizde zemin-rampa uyumunu doğrularken uyguladığımız disiplinle aynı titizlikte yapıyoruz.",
            },
            {
                soru: "Aynı gün hem forklift hem sepetli platform çalışabilir mi?",
                cevap:
                    "Sahaya ve iş kapsamına göre değerlendirilebilir; ancak iki makinenin operatörü, sertifikasyonu ve saha kuralı farklıdır, aynı kişi ikisini birden aynı anda kullanamaz. Forklift filomuzun turlu programıyla çakışmayacak bir saat belirlenir; net iş tanımı paylaşıldığında hangi makinenin hangi görevi karşıladığı ayrı ayrı planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift ile personel yükseltme platformunun ayrı ekipman sınıfları olduğu ve forklife personel platformu bağlamanın mevzuata aykırı olduğu sektör standardı bilgidir. Bu domainin forklift odaklı olduğu ve sepetli platformu Manisa OSB sahalarında ikincil sunduğu bilgisi firma pratiğidir; tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Manisa OSB'de Forklift Sevkiyat ve Teslimat Lojistiği: Turu Aksatmadan Sahaya Girmek",
        giris:
            "Manisa OSB'de forklift teslimatının zorluğu genelde makinenin kendisinde değil, sahaya giriş anındadır: OSB'nin kendi trafik ve giriş-çıkış kuralları, tesisin vardiya değişim saati, yükleme rampasının o anki doluluğu ve hat kenarı besleme turunun devam ediyor olması, teslim planını tek başına belirleyen değişkenlerdir. Bir forkliftin OSB kapısından tesise, tesisten üretim sahasına ulaşması, taşıyıcı seçimi kadar zamanlama meselesidir — yanlış saatte gelen doğru makine bile o gün üretkenliğe geç başlar. Bu sayfa, manisaforklift.com'un teslimatı bir nakliye işi olarak değil, OSB'nin trafik ve vardiya düzenine oturan bir operasyon adımı olarak nasıl planladığını anlatır: OSB giriş-çıkış kayıt süreci, tesis içi teslim noktasının seçimi, mevcut filoyla devreye alma, teslim anındaki kontrol ve iade sürecinin aynı disiplinle işletilmesi.",
        maddeler: [
            {
                baslik: "OSB giriş-çıkış kaydı teslimat saatinin ilk belirleyicisidir",
                metin:
                    "Manisa OSB'ye giren her ağır araç, bölge güvenlik ve giriş kayıt sürecinden geçer; plaka, sürücü ve yük bilgisi önceden bildirilmediğinde kapıda gecikme yaşanır. Teslimat planımız bu adımı baştan hesaba katar: taşıyıcı bilgisi, tesis adresi ve teslim saati OSB kurallarına göre önceden bildirilir, kapıda beklenmedik bir gecikme riski böylece en aza iner. Vardiya değişim saatine denk gelen teslimatlar, giriş yoğunluğu nedeniyle ayrıca planlanır.",
            },
            {
                baslik: "Tesis içi teslim noktası, üretim akışına göre seçilir",
                metin:
                    "Forklift, OSB kapısından tesise girdikten sonra ikinci bir karar beklenir: makine doğrudan çalışacağı bölüme mi indirilecek, yoksa önce bir bekleme-hazırlama alanına mı alınacak. Üretim hattının o anki turlu besleme programı devam ediyorsa, yeni makinenin devreye girişi mevcut rotayı bozmayacak bir ara noktada planlanır. Bu karar, tesisin saha amiriyle teslimattan önce netleştirilir; sahada anlık karar verilmez.",
            },
            {
                baslik: "Mevcut filoyla devreye alma: rota ve operatör eşleşmesi önceden yapılır",
                metin:
                    "Yeni gelen makinenin ilk saatinden üretken olması için rota ataması, operatör eşleşmesi ve şarj veya yakıt düzeni teslimattan önce hazır olmalıdır; aksi hâlde makinenin ilk günü kayıptır. Manisa OSB'deki çok vardiyalı tesislerde bu hazırlık, teslimatın hangi vardiyanın başına denk geleceğiyle birlikte planlanır — vardiya başında gelen makine, devir kontrol listesine de doğrudan dahil edilir.",
            },
            {
                baslik: "Teslim anında yapılan kontrol ve devir kaydı",
                metin:
                    "Forklift sahaya ulaştığında yakıt veya akü seviyesi, görünür hasar, takılı ataşman ve saat sayacı birlikte kontrol edilir ve bu kayıt hem müşteri hem firma için referans oluşturur. Operatör tesiste ilk kez çalışacaksa kısa bir saha brifingi — yaya yolu, kesişim noktaları, şarj istasyonu konumu — bu sırada verilir. Kontrol tamamlanmadan makine teslim edilmiş sayılmaz.",
            },
            {
                baslik: "İade süreci aynı disiplinle, sezon ve tempo değişimine göre planlanır",
                metin:
                    "Kiralama süresi bitince veya filo küçültülecekse iade planı, teslimattaki mantığın tersine işletilir: OSB çıkış kaydı, taşıyıcı temini ve tesis içi çıkış rotası yeniden doğrulanır. Makinenin son durumu teslimat anındaki kayıtla karşılaştırılır; fark varsa müşteriyle birlikte belgelenir. Üretim temposu düşen dönemde birden fazla makinenin aynı anda iade edilmesi gerekiyorsa, çıkışlar tesisin vardiya akışını bozmayacak şekilde sıraya konur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manisa OSB teslimatında zaman bloğu ve kritik kontrol",
                paragraflar: [
                    "Aşağıdaki tablo, tipik bir forklift teslimatının OSB içindeki aşamalarını ve her aşamada gözetilen kritik noktayı özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Operasyon", "Kritik kontrol", "Sorumlu"],
                    satirlar: [
                        ["OSB kapı öncesi", "Plaka ve teslim bilgisinin bildirilmesi", "Vardiya değişim saatiyle çakışmama", "Nakliye ekibi"],
                        ["Kapı girişi", "Güvenlik ve kayıt süreci", "Bekleme süresinin plana yansıması", "OSB güvenlik + nakliye"],
                        ["Tesise ulaşım", "Teslim noktasının belirlenmesi", "Mevcut turlu rotayı bozmamak", "Saha amiri"],
                        ["Devreye alma", "Rota, operatör, enerji planı ataması", "İlk saatten üretken olmak", "Operasyon ekibi"],
                        ["Teslim kaydı", "Hasar-yakıt-sayaç kontrolü", "Yazılı devir kaydı", "Operatör + firma"],
                    ],
                },
            },
            {
                baslik: "Çok vardiyalı tesislerde teslimat saatinin seçimi",
                paragraflar: [
                    "Manisa OSB'deki üretim tesislerinin çoğu çok vardiyalı çalışır ve teslimat saati, vardiya devrinin en yoğun dakikalarıyla çakıştığında hem forklift hem araç trafiği birbirini bekletir. Bu yüzden teslimat, mümkün olduğunda vardiya ortasına — devir telaşının bittiği, üretimin oturduğu pencereye — yerleştirilir.",
                    "Gece vardiyasına denk gelen teslimatlarda saha aydınlatması ve güvenlik ekibinin o saatteki mevcudiyeti önceden teyit edilir; gündüz için doğal kabul edilen bir kontrol noktası, gece ayrıca planlanmayı gerektirir.",
                ],
            },
            {
                baslik: "Filo genişlerken teslimatın tekrarlanabilir hâle gelmesi",
                paragraflar: [
                    "Aynı tesise dönemsel olarak ek makine giriyorsa, ilk teslimatta kurulan giriş kaydı ve devreye alma şablonu bir sonraki sefer yeniden baştan kurulmaz; OSB giriş prosedürü, teslim noktası ve saha kuralı bilgisi kayıt altında tutulur ve sonraki teslimatlarda doğrudan uygulanır.",
                    "Bu tekrarlanabilirlik, özellikle sezonluk veya proje bazlı ek makine ihtiyacında zaman kazandırır; tesisinizin teslim şablonunu bir kez birlikte kurduğumuzda sonraki makineler aynı günde devreye girer.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB kapısında teslimat gecikirse ne olur, bu bizim kayıp saatimiz mi olur?",
                cevap:
                    "Gecikme riskini en aza indirmek için taşıyıcı ve teslim bilgisini OSB kurallarına göre önceden bildiriyoruz; buna rağmen kapıda beklenmedik bir yoğunluk çıkarsa bu süre teslimat planına dahil edilmiş kabul edilir ve tesisinizin üretim programına yansıtılmaz — makine, planlanan teslim penceresi içinde devreye alınır. Sık tekrarlayan bir gecikme deseni görülürse teslim saatini birlikte gözden geçiririz.",
            },
            {
                soru: "Yeni makine geldiğinde mevcut forklift turumuzu bozmadan nasıl devreye giriyor?",
                cevap:
                    "Yeni makinenin rotası, mevcut turlu besleme programı bozulmadan, saha amirinizle birlikte teslimattan önce çizilir; makine sahaya girer girmez kendi rotasında çalışmaya başlar, diğer makinelerin rotası yeniden düzenlenmez. Rota ataması teslimattan önce netleşmediyse makineyi geçici bir bekleme noktasında tutar, rota netleştikten sonra devreye alırız — böylece mevcut akış kesintisiz sürer.",
            },
            {
                soru: "Gece vardiyasına teslimat yapabilir misiniz?",
                cevap:
                    "Yapabiliriz; gece teslimatında saha aydınlatmasının forklift rotaları üzerinde yeterli olduğu ve o saatte bir sorumlunun devir kontrolünü yapabileceği önceden teyit edilir. Gündüz teslimattaki bütün adımlar — kayıt, rota, devir listesi — gece için de aynen uygulanır; tek fark planlamanın bu koşulları önceden netleştirmesidir.",
            },
            {
                soru: "Birden fazla tesisimiz Manisa OSB içinde; aynı gün farklı noktalara teslimat yapılabilir mi?",
                cevap:
                    "Evet, OSB içi kısa mesafeler bunu mümkün kılar. Her tesis için ayrı teslim noktası, ayrı devir kaydı ve ayrı rota ataması yapılır; tek bir gün planı içinde sıralanır. Tesisler arası mesafe ve her birinin vardiya saatine göre sıralama önceden çıkarılır, böylece hiçbir tesis diğerinin gecikmesinden etkilenmez.",
            },
            {
                soru: "Teslim anında hangi kayıtlar tutuluyor, bir anlaşmazlık çıkarsa elimizde ne olur?",
                cevap:
                    "Yakıt veya akü seviyesi, görünür hasar, takılı ataşman ve saat sayacı teslim anında birlikte kontrol edilip yazılı kayda geçirilir; bu kayıt hem sizin hem bizim elimizde bulunur. İade sırasında aynı kayıt karşılaştırma referansı olur; olağan yıpranma ile kullanım hasarı bu sayede tartışmasız ayrılır.",
            },
            {
                soru: "Filoyu küçültmemiz gerekiyor, birden fazla makineyi aynı anda iade edebilir miyiz?",
                cevap:
                    "Edebilirsiniz; ancak birden fazla makinenin aynı anda çıkışı OSB trafiğine ve tesisinizin vardiya akışına yansıyacağından çıkışları kısa aralıklarla sıraya koyarız. Hangi makinenin önce, hangisinin sonra çıkacağı, o an hâlâ hangi rotanın kritik olduğuna göre birlikte belirlenir; kritik rotanın makinesi en son iade edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manisa OSB'nin kayıt/güvenlik girişli çalışma düzeni ve çok vardiyalı üretim yoğunluğu kamuya açık bilgidir; devir kaydı, rota ataması ve vardiya uyumlu teslim saati planlaması firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Manisa OSB'de Forklift İstifleme Kiralama: Sektörünüzün Gerçek İşine Göre Doğru Sınıf",
        giris:
            "Manisa OSB tek tip bir üretim sahası değildir; beyaz eşya ve elektronik ağırlıklı fabrikaların yanında tekstil, gıda ve metal işleme tesisleri aynı bölgede yan yana çalışır ve her sektörün istifleme forkliftine yüklediği görev farklıdır. Beyaz eşya hattında forklift, kısa çevrim süreleriyle komponent besleyen ve hafif-orta tonajda sık sefer yapan bir makinedir; tekstilde balya ve bobin gibi standart olmayan yükler ataşman gerektirir; gıda ve tarım sanayinde hijyen ve nem koşulları makine tipini sınırlar; metal işlemede ağır ve uzun profil yükler yük merkezini öne kaydırır. Bu yüzden manisaforklift.com'da istifleme forkliftini seçerken sorduğumuz ilk soru kaç ton değil, hangi sektörün hangi ritmiyle çalışacağıdır — tonaj, mast tipi ve lastik seçimi bu ritme göre şekillenir. Bu sayfa, Manisa OSB'nin gerçek sektör karışımına göre istifleme forkliftinin nasıl seçildiğini ve operasyona nasıl entegre edildiğini anlatır.",
        maddeler: [
            {
                baslik: "Beyaz eşya ve elektronik hattı: kısa çevrim, sık sefer, hafif-orta tonaj",
                metin:
                    "Montaj bandını besleyen forklift işinde ölçü, tek seferde taşınan yükün ağırlığından çok, saat başına tamamlanan sefer sayısıdır. Bu profilde 1,5-3 ton bandındaki akülü veya LPG'li kompakt makineler, dar koridorlarda hızlı manevra ve düşük gürültü avantajıyla öne çıkar; kapasite ihtiyacı genelde düşüktür ama çevik sefer kapasitesi yüksek olmalıdır. Sideshift gibi hızlandırıcı ataşmanlar, hat kenarında paleti oynatmadan hizalamayı sağladığı için bu profilde sıkça tercih edilir.",
            },
            {
                baslik: "Tekstil tesisleri: standart olmayan yük, ataşman zorunluluğu",
                metin:
                    "Balya, bobin ve rulo gibi standart palet formunda olmayan yükler, çıplak çatalla güvenli taşınamaz; balya klempi veya rulo klempi bu profilde temel donanımdır. Ataşmanın kendi ağırlığı net kapasiteyi düşürdüğü için makine seçimi, çıplak çatal tonajı değil ataşmanlı kombinasyonun yük diyagramı üzerinden yapılır. Lif ve toz ortamı, bakım aralığının standart takvimden kısaltılmasını da beraberinde getirir.",
            },
            {
                baslik: "Gıda ve tarım sanayi: hijyen, nem ve emisyon sınırı makineyi belirler",
                metin:
                    "Gıda işleme ve depolama alanlarında egzozlu makinenin iç sahaya girmemesi hem çalışan sağlığı hem denetim gereğidir; akülü makineler bu profilde zorunlu hâle gelir. Nemli veya soğuk hava deposu koşullarında lastik ve hidrolik sistem seçimi ayrıca değerlendirilir; standart lastik nemli betonda erken aşınabilir. Dökme veya çuvallı ürün elleçlemesinde çatal pozisyonlayıcı, farklı palet ölçülerine hızlı uyum sağlar.",
            },
            {
                baslik: "Metal işleme ve ağır sanayi: yük merkezi öne kayar, kapasite payı gerekir",
                metin:
                    "Uzun profil, sac paketi veya ağır döküm parça taşıyan işlerde yükün ağırlık merkezi standart 500 mm varsayımından öne kayar ve makinenin nominal kapasitesi bu kayma oranında düşer. Bu profilde makine seçimi, en ağır ve en uzun parçanın birlikte üretici yük diyagramına karşı kontrol edilmesiyle yapılır; diyagramın sınırında sürekli çalışmak yerine bir kademe pay bırakmak tercih edilir.",
            },
            {
                baslik: "Koridor genişliği ve raf kotu, sektör fark etmeksizin ikinci filtredir",
                metin:
                    "Hangi sektörde olursa olsun, karşı ağırlıklı forkliftin yüklü palet dönüşü için ihtiyaç duyduğu koridor genişliği tonaja göre kabaca 3,5-4 metre bandındadır; bunun altındaki raf aralıklarında reach truck gibi kompakt sınıflar değerlendirilir, ancak bu makineler düzgün beton zemin ve kapalı alan gerektirir. Raf kotu ile forkliftin kapalı mast yüksekliği (depoya, kapıdan geçebilme ölçüsü) birlikte doğrulanmadan sınıf kararı verilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manisa OSB sektörlerine göre istifleme forklifti eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, Manisa OSB'nin bilinen sektör karışımına göre tipik istifleme profilini özetler; kesin seçim gerçek yük, koridor ve raf kotu ölçümüyle doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Sektör profili", "Tipik tonaj/sınıf", "Öne çıkan gereksinim", "Sık kullanılan ataşman"],
                    satirlar: [
                        ["Beyaz eşya / elektronik montaj", "1,5–3 ton akülü/LPG", "Kısa çevrim, sık sefer", "Sideshift"],
                        ["Tekstil / iplik", "2–3,5 ton, klempli", "Standart olmayan yük", "Balya/rulo klempi"],
                        ["Gıda / tarım sanayi", "1,5–3 ton akülü", "Emisyonsuz, hijyen", "Çatal pozisyonlayıcı"],
                        ["Metal işleme / ağır sanayi", "3,5–7 ton dizel/LPG", "Yük merkezi payı", "Uzun çatal, sac klempi"],
                    ],
                },
            },
            {
                baslik: "Yük diyagramını sektörün gerçek yüküyle okumak",
                paragraflar: [
                    "Yük diyagramı, forkliftin kabininde bulunan ve kaldırma yüksekliği ile yük merkezi mesafesine göre kalan kapasiteyi gösteren üretici tablosudur. Manisa OSB'deki her sektörün tipik yükü farklı bir noktada bu tabloyu zorlar — beyaz eşya kolisinde ağırlık düşük ama sefer sıklığı yüksektir, metal profilde ağırlık merkezi öne kaymıştır, tekstil balyasında ataşman ağırlığı devreye girer.",
                    "Doğru okuma sırası şöyledir: önce yükün gerçek ağırlık merkezi ölçülür, ardından hedeflenen kaldırma yüksekliği belirlenir, son olarak bu iki değerin kesiştiği kapasite gerçek yükle karşılaştırılır. Ataşman takılıysa diyagram ataşmanlı kombinasyon için ayrıca okunur.",
                ],
            },
            {
                baslik: "Sektör değişse de sabit kalan operasyon kuralları",
                paragraflar: [
                    "Hangi sektörde çalışırsa çalışsın istifleme forkliftinin operatörü MYK mesleki yeterlilik belgesi veya MEB onaylı operatörlük belgesi taşımalıdır; belgesiz kullanım hem yasal hem fiili risk taşır. Yüksek rafa istif sırasında yük görüşü kapatıyorsa geri sürüş veya yardımcı yönlendirme tesisin trafik kuralına göre uygulanır.",
                    "Koridorda yaya yolu ile forklift trafiği ayrılır, kesişimler işaretlenir, yük mümkün olduğunca alçak taşınır ve mast geriye yatık seyredilir. Bu kurallar sektör fark etmeksizin teslimatla birlikte verilen saha brifinginin omurgasını oluşturur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimiz beyaz eşya yan sanayiine üretim yapıyor; hangi tonaj forklifti önerirsiniz?",
                cevap:
                    "Bu profilde genellikle en kritik ölçü tonaj değil sefer sıklığıdır; hat kenarını çağrı üzerine değil turlu düzenle besleyen bir operasyonda 1,5-3 ton bandındaki akülü veya LPG'li kompakt makineler, dar koridorda hızlı manevra ve düşük operasyon maliyetiyle öne çıkar. Kesin sınıf, en ağır komponent paletinizin ağırlığı ve raf-koridor ölçünüzle netleşir; bu iki veriyi paylaşırsanız yük diyagramına göre uygun sınıfı öneririz.",
            },
            {
                soru: "Tekstil tesisimizde balya taşırken standart forklift yeterli mi?",
                cevap:
                    "Çıplak çatal ile balya taşımak güvenli değildir; balya klempi bu iş için temel donanımdır ve klempin kendi ağırlığı makinenin net kapasitesini düşürür. Seçim, çıplak çatal tonajı yerine klempli kombinasyonun üretici yük diyagramına göre yapılır. Balyanızın tipik ağırlığını ve boyutunu paylaşırsanız uygun klemp ve makine kombinasyonunu birlikte belirleriz.",
            },
            {
                soru: "Gıda deposunda dizel forklift kullanabilir miyiz?",
                cevap:
                    "Kapalı gıda işleme veya depolama alanında egzozlu makinenin çalışması hem çalışan sağlığı hem gıda güvenliği denetimleri açısından uygun değildir; akülü makineler bu alanlarda zorunlu hâle gelir. Açık sahada veya yükleme rampasında dizel makine değerlendirilebilir; iç ve dış saha görevleri net ayrıldığında iki makine tipi birlikte planlanır.",
            },
            {
                soru: "Metal işleme atölyemizde uzun profil taşırken kapasite düşüyor mu?",
                cevap:
                    "Evet, yük ağırlık merkezi standart 500 mm mesafeden uzadıkça makinenin gerçek kaldırma kapasitesi etikette yazan rakamın altına düşer; bu düşüş yük diyagramında gösterilir. En uzun ve en ağır profilinizi birlikte kontrol edip diyagramın güvenli bölgesinde kalan sınıfı öneririz; sınırda sürekli çalışmak yerine bir kademe pay bırakılması tavsiye edilir.",
            },
            {
                soru: "Dar koridorlu depomuzda reach truck mı, karşı ağırlıklı forklift mi çalışır?",
                cevap:
                    "Koridorun net genişliği belirleyicidir; 3,5-4 metre bandındaki tipik gereksinimin altındaki raf aralıklarında karşı ağırlıklı forklift genellikle sığmaz ve reach truck gibi kompakt bir sınıf değerlendirilir. Bu makinelerin düzgün beton zemin ve kapalı alan sınırı olduğunu unutmayın; açık sahada veya rampada karşı ağırlıklı makine gerekir. Manisa OSB'deki tesisinizde koridor ölçünüzü paylaşırsanız net cevabı birlikte çıkarırız.",
            },
            {
                soru: "Farklı sektörlere hizmet veriyoruz, birden fazla forklift sınıfına mı ihtiyacımız var?",
                cevap:
                    "Sıkça karşılaştığımız bir durumdur; aynı tesiste hem hat kenarı besleme hem açık saha yükleme varsa tek makine sınıfı genelde ikisini birden iyi karşılamaz. Görev haritası çıkarılarak hangi işin hangi makineyle yapıldığı netleştirilir ve karma bir filo (örneğin iç sahada akülü kompakt, dış sahada dizel orta sınıf) önerilir. Sektör ve iş dağılımınızı paylaşın, filo kompozisyonunu birlikte kuralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manisa OSB'nin beyaz eşya-elektronik ağırlıklı ve tekstil-gıda-metal karma sanayi yapısı kamuya açık bilgidir; yük merkezi/yük diyagramı, koridor genişliği bandı ve emisyon kısıtı sektör standardı teknik bilgidir. Sektöre göre eşleştirme yaklaşımı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom Lift): Manisa OSB'de Forklift Filomuzun Yanında İkincil Hizmet",
        giris:
            "Eklemli platform (boom lift), sepetini hem yukarı hem yanlara doğru eklemli kolla uzatabilen, engel aşarak yükseğe erişen bir personel yükseltme makinesidir ve manisaforklift.com'un çekirdek işi değildir; çekirdek işimiz forkliftin Manisa OSB'deki günlük yük operasyonunu yönetmektir. Yine de forklift filomuzun çalıştığı bir tesiste, örneğin çatı altı bir çelik konstrüksiyon detayına veya bina cephesindeki bir bakım noktasına erişim gerektiğinde, aynı sahada bulunmamızdan dolayı bu talep bize de yöneltilebiliyor. Bu talebi forkliftle karşılamıyoruz — forklift engel aşan bir erişim makinesi değildir — ve boom lift ihtiyacını dürüstçe ikincil, münferit bir hizmet olarak ele alıyoruz; kapsam büyüdüğünde bu alanda esas uzmanlığı olan bir platform firmasına yönlendiriyoruz.",
        maddeler: [
            {
                baslik: "Forklift ile boom lift farklı erişim problemini çözer",
                metin:
                    "Forklift, yükü zeminden alıp belirli bir yüksekliğe dikey taşıyan bir makinedir; boom lift ise sepetini hem dikey hem yatay yönde, engelleri aşarak hedefe ulaştırır. Çatı altındaki bir çelik kirişe veya bina cephesine forkliftin çatalıyla ulaşmak mümkün değildir; bu iki makinenin görevi kesişmez ve biri diğerinin yerine kullanılamaz.",
            },
            {
                baslik: "Manisa OSB'de bu talep hangi işte çıkıyor",
                metin:
                    "En sık görülen durum, forklift filomuzun bir üretim veya depo genişletme sahasında çalıştığı sırada aynı tesiste çatı altı çelik konstrüksiyon bakımı, cephe aydınlatması veya boru hattı kontrolü gibi engel aşan bir erişim ihtiyacının ortaya çıkmasıdır. Bu iş forkliftin görevi değildir; eklemli kolun engelin üzerinden veya yanından dolaşarak hedefe ulaşması gerekir.",
            },
            {
                baslik: "Kapsam netleştirme: çalışma yüksekliği ve engel profili",
                metin:
                    "Talebi değerlendirirken hedeflenen çalışma yüksekliğini, yatay erişim mesafesini ve saha içindeki engelleri (boru hattı, çelik kolon, mevcut ekipman) soruyoruz. Bu bilgiler netleşmeden makine önerilmez; boom lift seçimi engel profiline göre değişir ve yanlış sınıf hedefe ulaşamaz.",
            },
            {
                baslik: "Operatör belgesi ve saha kuralı tavizsizdir",
                metin:
                    "Eklemli platform kullanımı belgeli operatör gerektirir; forklift operasyonumuzdaki disiplinin aynısını burada da uyguluyoruz. Belgesiz kullanım değerlendirilmez, operatörünüz yoksa operatörlü kiralama önerilir.",
            },
            {
                baslik: "Dürüst sınır: büyük veya sürekli talepte yönlendirme",
                metin:
                    "Sürekli tekrarlayan, büyük ölçekli veya karmaşık cephe işlerinde bu ikincil hizmeti sunmuyoruz; bu tür işler için esas uzmanlığı olan bir eklemli platform firmasıyla temas kurmanızı öneririz. Amacımız forklift müşterimizin sahasındaki münferit bir ihtiyacı güvenle karşılamaktır, geniş bir platform filosu işletmek değil.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift ile eklemli platformun görev farkı",
                paragraflar: [
                    "Aşağıdaki tablo, iki makinenin Manisa OSB sahalarındaki farklı rolünü özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Forklift (ana hizmetimiz)", "Eklemli platform (ikincil)"],
                    satirlar: [
                        ["Erişim yönü", "Dikey, doğrudan", "Dikey + yatay, engel aşarak"],
                        ["Tipik iş", "Yük taşıma, istifleme", "Çatı altı/cephe bakım-montaj"],
                        ["Manisa OSB'deki kullanım sıklığı", "Günlük, ana operasyon", "Münferit, talebe bağlı"],
                    ],
                },
            },
            {
                baslik: "Aynı sahada karşılaşılan tipik talepler",
                paragraflar: [
                    "Manisa OSB'de genişleyen bir üretim tesisinde forklift filomuz malzeme taşırken, aynı sahada çatı altı çelik konstrüksiyon bağlantı kontrolü veya bina cephesindeki aydınlatma bakımı gündeme gelebiliyor. Bu iki iş aynı anda, farklı makinelerle yürütülür ve birbirinin programını etkilemeden planlanır.",
                    "Boom lift bu tür işlerde genellikle kısa süreli devreye girer; iş bitince sahadan çıkarılır ve forklift operasyonumuz kesintisiz sürer.",
                ],
            },
            {
                baslik: "Ne zaman uzman firmaya yönlendiriyoruz",
                paragraflar: [
                    "Çalışma yüksekliği büyükse, iş sürekli tekrarlıyorsa veya birden fazla makine gerekiyorsa bu işi kendi filomuzla değil, eklemli platform konusunda esas uzmanlığa sahip bir tedarikçiyle karşılıyoruz.",
                    "Bu yönlendirme, doğru işi doğru uzmana teslim etme kararıdır; forklift operasyonumuzun odağını korumamızı da sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftle çatı altına erişebilir miyiz, boom lift şart mı?",
                cevap:
                    "Forklift dikey ve doğrudan bir erişim makinesidir; çatı altındaki bir kirişe veya engelin arkasındaki bir noktaya çatalla ulaşmak mümkün değildir. Boom lift'in eklemli kolu, engeli aşarak veya yanından dolaşarak hedefe ulaşır; iki makine farklı fiziksel çözüm sunar ve forklift bu görevi yapamaz.",
            },
            {
                soru: "Bu makineyi hangi işlerde öneriyorsunuz?",
                cevap:
                    "Forklift filomuzun zaten sahada olduğu bir tesiste ortaya çıkan, engel aşarak yükseğe erişim gerektiren kısa süreli işlerde: çatı altı çelik konstrüksiyon kontrolü, cephe bakımı gibi. Sürekli tekrarlayan veya büyük ölçekli işlerde bu makineyi ikincil hizmet olarak sunmuyoruz.",
            },
            {
                soru: "Operatör bizde mi olmalı?",
                cevap:
                    "Eklemli platform belgeli operatör gerektirir; operatörünüz varsa ve belgesi geçerliyse yalnızca makine, yoksa operatörlü kiralama değerlendirilir. Bu kural forklift işlerimizdeki disiplinle aynıdır ve taviz verilmez.",
            },
            {
                soru: "Manisa OSB dışına da bu makineyi taşıyor musunuz?",
                cevap:
                    "İkincil bir hizmet olduğu için önceliğimiz forklift filomuzun zaten çalıştığı Manisa OSB sahalarıdır; bölge dışı ve büyük ölçekli talepleri esas uzmanlığı boom lift olan firmalara yönlendiriyoruz.",
            },
            {
                soru: "Çalışma yüksekliğimiz büyük, siz karşılayabilir misiniz?",
                cevap:
                    "Büyük çalışma yüksekliği ve karmaşık cephe kapsamı, bu ikincil hizmetin dışında kalır; bu tür işler için doğrudan uzman bir eklemli platform firmasıyla temas kurmanızı öneririz. Talebinizi net iş tanımıyla paylaşırsanız kapsamın bizim sınırımızda olup olmadığını dürüstçe söyleriz.",
            },
            {
                soru: "Aynı gün hem forklift hem boom lift çalışabilir mi?",
                cevap:
                    "Sahaya ve iş kapsamına göre değerlendirilebilir; iki makinenin operatörü ve saha kuralı farklıdır. Forklift filomuzun mevcut turlu programıyla çakışmayacak bir saat belirlenir ve net iş tanımıyla iki görev ayrı ayrı planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun engel aşan erişim makinesi olduğu ve forkliften farklı bir görev üstlendiği sektör standardı bilgidir. Bu domainin forklift odaklı olduğu ve boom lift'i Manisa OSB sahalarında ikincil sunduğu bilgisi firma pratiğidir; tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Manisa OSB'de İç Mekân Depo Forklift Operasyonu: Emisyonsuz ve Dar Koridor Disiplini",
        giris:
            "Manisa OSB'deki kapalı depo ve üretim sahalarında forklift operasyonu, açık sahadakinden farklı bir disiplin ister: makine emisyon üretmemeli, koridor genişliğine uygun boyutta olmalı, raf teması riskini taşımamalı ve zemin izini bırakmamalıdır. Bu dört koşul birlikte, iç mekân forklift işini yalnızca kaç ton sorusuna değil, hangi enerji tipi, hangi lastik ve hangi koridor genişliği sorularına indirger. Kapalı bir depoda dizel makinenin egzoz gazı biriktiği için akülü veya LPG'li (kapalı alanda düşük emisyonlu versiyon) makineler tercih edilir; koridor genişliği, karşı ağırlıklı forkliftin mi yoksa reach truck gibi kompakt bir sınıfın mı gerektiğini belirler. Bu sayfa, Manisa OSB'deki kapalı depo ve üretim sahalarında forklift operasyonunun kurulum ilkelerini ele alır: enerji tipi seçimi, koridor-raf uyumu, zemin ve lastik ilişkisi, iç mekân trafik düzeni ve raf hasarı önleme.",
        maddeler: [
            {
                baslik: "Kapalı alanda enerji tipi tercih değil zorunluluktur",
                metin:
                    "Dizel makinenin egzoz gazı kapalı hacimde biriktiği için havalandırması sınırlı depolarda bu makine tipi kullanılmaz; akülü forklift bu alanların standart çözümüdür. Sürekli vardiya çalışan tesislerde LPG'li makineler de değerlendirilebilir ancak kapalı alan emisyon sınırlarına uygun modelin seçilmesi gerekir. Enerji tipi kararı, depo hacminin havalandırma kapasitesiyle birlikte verilir.",
            },
            {
                baslik: "Koridor genişliği, makine ailesini belirleyen ilk filtredir",
                metin:
                    "Karşı ağırlıklı forkliftin yüklü palet dönüşü için ihtiyaç duyduğu koridor genişliği tonaja göre kabaca 3,5-4 metre bandındadır. Manisa OSB'deki yoğun raflı depolarda bu genişlik bulunmayabilir; bu durumda reach truck gibi mastını ileri-geri kaydıran, 2,7-3 metre koridorda çalışabilen kompakt sınıf değerlendirilir. Bu makineler düzgün beton zemin ister; rampalı veya bozuk sahada karşı ağırlıklının yerini tutmaz.",
            },
            {
                baslik: "Zemin ve lastik ilişkisi: iz bırakmayan tip iç mekânın standardıdır",
                metin:
                    "Depo zeminleri genellikle epoksi kaplı veya perdahlı betondur; standart siyah dolgu lastik bu yüzeylerde iz bırakabilir. İç mekân işlerinde beyaz dolgu (iz bırakmayan) lastikli modeller tercih edilir ve bu tercih, zemin bakım maliyetini uzun vadede düşürür. Dolgu lastik ayrıca patlamaya karşı dayanıklı olduğu için raf koridorlarındaki keskin dönüşlerde ek bir güvenlik payı sağlar.",
            },
            {
                baslik: "İç mekân trafik düzeni: yaya ve forklift ayrımı depoda daha dardır",
                metin:
                    "Açık sahaya göre daha dar koridorlarda çalışıldığı için iç mekânda yaya-forklift kesişimleri daha sık gerçekleşir. Kesişim noktalarına zemin ışığı ve duruş çizgisi konulur, kör raf köşelerine tavan aynası eklenir ve forkliftin yol önceliği yazılı kurala bağlanır. Depo içinde hız sınırı açık sahaya göre daha düşük tutulur; dar koridorda hız kaybının kazandırdığı süre, olası bir raf çarpmasının maliyetinin yanında önemsizdir.",
            },
            {
                baslik: "Raf hasarı önleme: dar koridorun en sık görülen kayıp kalemi",
                metin:
                    "Kapalı depoda en sık tekrarlayan hasar, forkliftin dönüş sırasında raf ayağına veya palet kenarına teması ile oluşur. Bu riski düşüren üç önlem vardır: koridor girişlerine hız kesici işaret, raf ayaklarına koruma bariyeri ve sık hasar görülen koridorlarda operatör rotasyonunun gözden geçirilmesi. Hasar kaydının yer-neden bazında tutulması, hangi koridorun tekrar eden bir tasarım sorunu taşıdığını gösterir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân depo forklift seçim tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, Manisa OSB'deki kapalı depo tiplerine göre tipik forklift ve lastik eşleşmesini özetler.",
                ],
                tablo: {
                    basliklar: ["Depo tipi", "Enerji tipi", "Sınıf", "Lastik"],
                    satirlar: [
                        ["Geniş koridor, düz beton", "Akülü / LPG", "Karşı ağırlıklı", "Beyaz dolgu (iz bırakmayan)"],
                        ["Dar koridor, yüksek raf", "Akülü", "Reach truck", "Dolgu, düz zeminle sınırlı"],
                        ["Soğuk hava deposu", "Akülü (özel yalıtımlı)", "Kompakt karşı ağırlıklı", "Dolgu"],
                        ["Karma iç-dış görev", "Akülü + dizel (görev ayrımı)", "İki ayrı sınıf", "Görev tipine göre değişir"],
                    ],
                },
            },
            {
                baslik: "Depo içi turlu besleme ile raf koridorunun birlikte çalışması",
                paragraflar: [
                    "İç mekân depoda forklift operasyonu iki katmanlıdır: raf koridorunda toplama-yerleştirme hareketi ve depo genelinde hat kenarına veya sevkiyata besleme hareketi. Bu iki katman farklı makine profilleri gerektirebilir; koridor içi görev kompakt bir sınıfa, genel besleme daha standart bir sınıfa uygun düşer.",
                    "İki katmanın aktarma noktası — koridor çıkışı ile ana yol kesişimi — net tanımlanmazsa iki makine burada birbirini bekletir; bu noktaya tampon alan ayrılması, bekleme süresini belirgin azaltır.",
                ],
            },
            {
                baslik: "İç mekân bakım rutini, dış sahadan farklıdır",
                paragraflar: [
                    "Kapalı depoda toz ve çamur dış sahadaki kadar yoğun değildir ancak akü bakımı ve lastik kontrolü öne çıkar; akülü filoda su seviyesi ve terminal temizliği düzenli kontrol edilir, iz bırakmayan lastiğin aşınma durumu zemin görünümüyle birlikte takip edilir.",
                    "Depo içi hidrolik sistemin sızıntı kontrolü de ayrı önemlidir; zemine damlayan hidrolik yağ hem kayma riski hem temizlik gideri yaratır ve fark edildiğinde bekletilmeden müdahale edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzda dizel forklift kullanabilir miyiz, havalandırma yeterli görünüyor?",
                cevap:
                    "Havalandırma kapasitesi ne olursa olsun kapalı depoda dizel makine önerilmez; egzoz gazı birikimi çalışan sağlığı açısından risklidir. Akülü veya kapalı alan emisyon sınırlarına uygun LPG'li modeller değerlendirilir. Depo hacminizi ve vardiya süresini paylaşırsanız enerji tipini ve akü kapasitesini birlikte netleştiririz.",
            },
            {
                soru: "Koridor genişliğimiz standarttan dar, ne yapmalıyız?",
                cevap:
                    "Koridorun net genişliği 3,5-4 metre bandının altındaysa karşı ağırlıklı forklift genellikle sığmaz; reach truck gibi kompakt bir sınıf değerlendirilir. Bu makinelerin düzgün beton zemin ve kapalı alan sınırı olduğunu unutmayın. Koridor ölçünüzü ve raf kotunuzu paylaşırsanız net sınıf önerisini birlikte çıkarırız.",
            },
            {
                soru: "Zeminimizde forklift lastiği iz bırakıyor, ne değiştirmeliyiz?",
                cevap:
                    "İz bırakan siyah dolgu lastik yerine beyaz dolgu (iz bırakmayan) lastikli modele geçiş genellikle sorunu çözer. Zeminin epoksi veya perdahlı beton olması bu tercihte belirleyicidir; mevcut makinenizin lastik tipini kontrol edip uygun modeli birlikte belirleriz.",
            },
            {
                soru: "Raf hasarı sık tekrarlıyor, koridoru mu genişletmeliyiz?",
                cevap:
                    "Genişletme son çaredir; önce hasar kaydını yer-neden bazında inceleyin — aynı koridorda mı tekrarlıyor, yoksa dağınık mı? Aynı koridorda tekrarlıyorsa hız kesici işaret, raf koruma bariyeri ve operatör rotasyonu genellikle yeterlidir. Dağınıksa kullanım tekniği sorunudur ve tazeleme eğitimiyle çözülür. Hasar kaydınızı paylaşırsanız kök nedeni birlikte ayırt ederiz.",
            },
            {
                soru: "Soğuk hava deposunda forklift kullanımı farklı mı?",
                cevap:
                    "Evet, düşük sıcaklık akü performansını ve hidrolik sistemi etkiler; bu ortamlar için özel yalıtımlı akülü modeller ve düşük sıcaklığa uygun hidrolik yağ tercih edilir. Lastik sertliği de soğukta değişebileceğinden bu ortama uygun modeller ayrıca değerlendirilir. Soğuk hava deposu sıcaklığınızı ve çalışma süresini paylaşırsanız uygun makineyi birlikte belirleriz.",
            },
            {
                soru: "Depo içi ve dış saha işini aynı makineyle yapabilir miyiz?",
                cevap:
                    "Mümkündür ancak verimli değildir; iç mekân makinesi genelde iz bırakmayan lastik ve emisyonsuz enerjiyle sınırlıdır, dış saha ise farklı zemin ve hava koşulu gerektirir. Görev hacmi büyükse iki ayrı makineyle görev ayrımı, tek makineyle her iki işi de zorlamaktan daha verimli sonuç verir. İş dağılımınızı paylaşın, karma filo ihtiyacını birlikte değerlendirelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı alanda dizel emisyon kısıtı, koridor genişliği bandı (3,5-4 m karşı ağırlıklı / 2,7-3 m reach truck) ve iz bırakmayan lastik uygulaması sektör standardı forklift teknik bilgisidir. Raf hasarı yer-neden analizi firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Manisa OSB'de Çelik Konstrüksiyon Sahasında Forklift: Malzeme Taşımanın Montaj Temposuna Uyumu",
        giris:
            "Manisa OSB'de yeni bir üretim hattı veya depo genişletmesi kurulurken, çelik konstrüksiyon montajının hızını çoğu zaman montaj ekibinden çok malzemenin sahaya nasıl ve ne zamanda ulaştığı belirler. Forklift bu sahalarda montaj yapan makine değildir — kirişi kaldırıp yerine oturtan vinç veya mobil kren farklı bir ekipmandır — ancak profil, bulon kutusu, kaynak malzemesi ve panel gibi montaj öncesi ve montaj sırası malzemenin şantiye sahasında doğru noktaya, doğru zamanda taşınmasında forkliftin rolü kritiktir. Kötü planlanmış bir malzeme lojistiği, montaj ekibinin elinde profil beklerken forkliftin sahanın öbür ucunda başka bir yükle uğraşmasına yol açar ve bu bekleme, montaj takviminin en görünmez kaybıdır. Bu sayfa, Manisa OSB'deki çelik konstrüksiyon şantiyelerinde forklift operasyonunun montaj temposuna nasıl uyarlandığını anlatır: malzeme akış planı, sahanın henüz sağlamlaşmamış zemini, vinç-forklift görev ayrımı, İSG önlemleri ve montaj aşamalarına göre filo değişimi.",
        maddeler: [
            {
                baslik: "Malzeme akışı montaj sırasına göre planlanır, depoya göre değil",
                metin:
                    "Şantiyeye gelen çelik profil, bulon ve panel yığınları, montaj ekibinin işleyeceği sıraya göre değil genelde teslim sırasına göre boşaltılır ve bu, forkliftin aranan malzemeyi bulmak için sahada tur atmasına yol açar. Verimli düzen tersine çalışır: montaj sırası önceden bilinir, malzeme bu sıraya göre bölgelenir ve forklift, montaj ekibinin bir sonraki ihtiyacını önceden sahaya yaklaştırır. Bu düzen, aynı forklift sayısıyla montaj hızını belirgin artırır.",
            },
            {
                baslik: "Henüz sağlamlaşmamış zemin, forklift rotasını sınırlar",
                metin:
                    "Yeni bir çelik konstrüksiyon sahası genelde henüz kaplanmamış, sıkıştırılmamış veya kısmen dolgulu bir zemine sahiptir; forkliftin bu zeminde saplanma veya yana yatma riski, tamamlanmış bir depo zeminindekinden yüksektir. Operasyon planı bu yüzden önce güvenli rotayı belirler — geçici plaka, kalas destek veya sıkıştırılmış şerit — ve forklift yalnızca bu rotalar üzerinde çalışır. Rota dışına çıkma ihtiyacı doğarsa önce zemin kontrolü yapılır.",
            },
            {
                baslik: "Vinç ve forklift görev ayrımı: biri kaldırır, biri besler",
                metin:
                    "Kirişin veya ağır çelik elemanın nihai konumuna kaldırılması vinç ya da mobil krenin işidir; forklift bu ağırlıkta ve bu hassasiyette bir kaldırmayı üstlenmez. Forkliftin görevi, vincin çalışma alanına girmeden, montaj ekibinin ihtiyaç duyduğu daha küçük ve hafif malzemeyi (bulon kutusu, kaynak teli, küçük profil) sahaya taşımaktır. İki makinenin çalışma alanı net ayrılmazsa vincin sallanan yükü ile forkliftin rotası kesişebilir; bu kesişim şantiyenin en ciddi risklerinden biridir.",
            },
            {
                baslik: "Şantiye İSG'si forklift rotasını da kapsar",
                metin:
                    "Çelik konstrüksiyon şantiyesinde forklift rotası, vinç çalışma alanının dışından, montaj ekibinin baş üstü çalışma bölgesinden uzak ve yürüyüş yollarından ayrı çizilir. Baret ve yelek forklift operatörü için de zorunludur; şantiye kuralına uyulmadan forklift sahaya sokulmaz. Rüzgârlı günlerde askıda malzeme taşınan vinç operasyonu durduğunda forklift rotası da geçici olarak gözden geçirilir, çünkü sahadaki genel hareket düzeni değişmiştir.",
            },
            {
                baslik: "Montaj aşaması ilerledikçe forklift ihtiyacı değişir",
                metin:
                    "Şantiyenin ilk haftalarında forklift işi ağırlıklı olarak malzeme boşaltma ve bölgeleme iken, montaj ilerledikçe iş hat kenarı besleme hâlini alır ve son aşamada iç mekân donanım (raf, aydınlatma altyapısı) taşımasına döner. Bu üç aşamanın ihtiyacı farklıdır; filo büyüklüğü ve makine sınıfı sabit tutulmak yerine aşamaya göre gözden geçirilir. Kiralık filoda bu geçiş, aşama başına makine sayısının ayarlanmasıyla esnek yönetilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çelik konstrüksiyon şantiyesinde aşama bazlı forklift ihtiyacı",
                paragraflar: [
                    "Aşağıdaki tablo, tipik bir çelik konstrüksiyon şantiyesinin aşamalarına göre forklift işini ve kritik noktayı özetler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Forklift işi", "Zemin durumu", "Kritik nokta"],
                    satirlar: [
                        ["Malzeme girişi", "Boşaltma, bölgeleme", "Henüz sağlamlaşmamış", "Güvenli rota belirleme"],
                        ["Montaj başlangıcı", "Bulon/panel besleme", "Kısmen stabilize", "Vinç alanından uzak rota"],
                        ["Montaj tepe dönemi", "Sürekli hat kenarı besleme", "Stabilize", "Montaj sırasına göre bölgeleme"],
                        ["Kapanış", "İç donanım taşıma", "Tamamlanmış zemin", "Depo moduna geçiş"],
                    ],
                },
            },
            {
                baslik: "Vinç çalışma alanı ile forklift rotasının kesişmemesi",
                paragraflar: [
                    "Vincin askıda taşıdığı yük, rüzgâr veya manevra nedeniyle beklenmedik yönde sallanabilir; bu yüzden vinç çalışma alanı sahada net çizgiyle işaretlenir ve forklift rotası bu alanın dışından geçirilir. İki makinenin aynı anda aynı bölgede çalışması gerekiyorsa iş sırası önceden koordine edilir — vinç kaldırma yaparken forklift o bölgede beklemez, alanı boşaltır.",
                    "Bu koordinasyon, şantiye şefinin günlük iş programında yazılı yer alır; sözlü anlaşmaya bırakılmaz çünkü şantiye şantiyeden şantiyeye farklı ekiplerle çalışabilir.",
                ],
            },
            {
                baslik: "Kiralık filonun şantiye temposuna göre esnetilmesi",
                paragraflar: [
                    "Çelik konstrüksiyon şantiyeleri haftalar içinde iş yoğunluğu değişen, doğrusal olmayan bir tempoyla ilerler; malzeme girişinin yoğun olduğu hafta ile montajın sakin ilerlediği hafta aynı forklift sayısını gerektirmez. Kiralık filo bu dalgalanmaya, haftalık gözden geçirmeyle ek makine ekleyip çıkararak uyum sağlar.",
                    "Şantiye takviminiz netleştiğinde forklift ihtiyacını aşama aşama birlikte planlarız; böylece ne boşta duran makineye ödeme yapılır ne de montaj ekibi malzeme beklemek zorunda kalır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forkliftle çelik profili montaj noktasına kaldırabilir misiniz?",
                cevap:
                    "Kirişin veya ağır çelik elemanın nihai montaj konumuna kaldırılması vinç veya mobil krenin işidir; forklift bu hassasiyette ve yükseklikte bir kaldırmayı üstlenmez. Forkliftin görevi, montaj ekibinin ihtiyaç duyduğu daha küçük ve hafif malzemeyi sahaya taşımaktır. İki makinenin görevini karıştırmamak, şantiyenin en temel güvenlik kurallarından biridir.",
            },
            {
                soru: "Şantiye zeminimiz henüz sağlamlaşmadı, forklift çalışabilir mi?",
                cevap:
                    "Çalışabilir ancak önce güvenli bir rota belirlenmesi gerekir; geçici plaka veya kalas destekle sağlamlaştırılmış bir şerit üzerinde forklift hareket eder ve bu rotanın dışına çıkılmaz. Zeminin tamamı sağlamlaşana kadar makinenin hareket alanı bilinçli olarak sınırlı tutulur; bu kısıtlama montajı yavaşlatmaz, sadece rotayı netleştirir.",
            },
            {
                soru: "Vinç ile forklift aynı anda aynı bölgede çalışabilir mi?",
                cevap:
                    "Önerilmez. Vincin askıda taşıdığı yük beklenmedik yönde sallanabilir; forklift rotası vinç çalışma alanının dışından geçirilir. İkisinin aynı bölgede iş yapması gerekiyorsa sıra önceden koordine edilir — biri çalışırken diğeri o bölgeden uzaklaşır. Bu koordinasyon şantiye şefinin günlük programında yazılı olmalıdır.",
            },
            {
                soru: "Montaj hızlandıkça forklift sayımızı artırmalı mıyız?",
                cevap:
                    "Genelde evet, ama önce iş yükünü ölçün: montaj tepe döneminde hat kenarı besleme sürekli hâle gelir ve tek makine yetişemeyebilir. Ek makine kararını, montaj ekibinin malzeme beklediği dakikaları bir haftalık gözlemle kaydedip vermek, tahminden daha güvenilirdir. Şantiye takviminizi paylaşırsanız aşama bazlı filo planını birlikte çıkarırız.",
            },
            {
                soru: "Rüzgârlı günlerde forklift operasyonu nasıl etkilenir?",
                cevap:
                    "Rüzgârlı günlerde vinç operasyonu genellikle durur veya yavaşlar; bu durumda sahadaki genel hareket düzeni değişir ve forklift rotası da geçici olarak gözden geçirilir. Askıda malzeme taşınmadığı için forklift bazı bölgelere normalde giremediği saatlerde girebilir, ancak bu geçici düzenleme şantiye şefiyle teyit edilmeden uygulanmaz.",
            },
            {
                soru: "Şantiye bitince forklift filosu nasıl kapanıyor?",
                cevap:
                    "Montajın son aşamasında forklift işi iç donanım taşımasına döner ve iş hacmi küçülür; filo bu aşamada kademeli olarak azaltılır. İade tarihleri şantiye takviminin kapanış planıyla birlikte belirlenir ve son makinenin iadesi, tesisin depo moduna geçiş tarihiyle eşleştirilir; böylece boşta bekleyen makineye ödeme yapılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon şantiyesinde vinç ile forkliftin görev ayrımı ve şantiye İSG kuralları sektör standardıdır. Malzeme akış bölgelemesi ve aşama bazlı filo esnetme yaklaşımı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Manisa'nın Tarım ve Gıda Sanayiinde Forklift: Silo, Çuval ve Palet Elleçlemenin Kuralları",
        giris:
            "Manisa, bağcılık, kiraz ve tütün gibi tarımsal üretimin yanı sıra bu üretimi işleyen gıda ve tarım sanayii tesisleriyle de tanınan bir ildir; Manisa OSB'deki gıda işleme, kurutmalık meyve, un-yem ve benzeri tesislerde forklift operasyonu, standart depo işinden birkaç noktada ayrılır. Dökme veya çuvallı ürün hem hacimli hem değişken ağırlıklıdır ve silo-depo çevresindeki toz, forkliftin bakım ritmini etkiler; hijyen kuralı iç mekân makinesini sınırlar ve hasat sonrası dönemlerde işleme hacmi kısa süreliğine sıçrar. Bu sayfa, Manisa'nın tarım-gıda sanayii ekosisteminde forklift operasyonunun bu dört gerçek üzerinden nasıl kurulduğunu anlatır: çuval ve big-bag elleçleme, silo çevresi toz-bakım ilişkisi, hijyen kısıtlı iç mekân kullanımı ve hasat sonrası işleme dönemlerinde filo esnetmesi.",
        maddeler: [
            {
                baslik: "Çuval ve big-bag yükleri: standart palet gibi davranmaz",
                metin:
                    "Un, yem veya kurutulmuş ürün çuvalları ile büyük hacimli big-bag'ler, standart kutu paletten farklı bir denge sorunu taşır; çuval istifi kaymaya, big-bag ise taşıma sırasında sallanmaya eğilimlidir. Operasyon kuralı, çuval istifinin çapraz bağlama düzeniyle yapılması ve big-bag taşımasında askı kancası veya uygun ataşmanın kullanılmasıdır; çıplak çatalla askısız big-bag taşımak, düşme riskini artırır. Yük merkezi bu ürün ailesinde standart paletten farklı hesaplanır ve makine kapasitesi buna göre kontrol edilir.",
            },
            {
                baslik: "Silo ve un tozu ortamı: forklift bakımı yangın önlemidir",
                metin:
                    "Un veya yem tozu, havada asılı kaldığında ve belirli yoğunluğa ulaştığında patlama riski taşıyan bir ortam yaratabilir; bu yüzden silo çevresinde çalışan forkliftin elektrik aksamı ve motor bölmesi düzenli temizlenir, toz birikimine izin verilmez. Bakım aralığı standart takvimden kısaltılır ve tesisin toz patlaması önleme planında forklift rotaları ve bakım noktaları ayrıca yer alır. Bu, tekstil sahalarındaki lif birikimi önlemine benzer ama un-yem tozunun kendine özgü patlayıcılık sınırı ayrıca değerlendirilir.",
            },
            {
                baslik: "Hijyen kısıtlı gıda işleme alanında iç mekân makinesi",
                metin:
                    "Gıda işleme hattının kapalı bölümünde forklift, hem emisyonsuz hem hijyen kurallarına uygun olmalıdır; akülü makineler bu profilde zorunludur ve makine gövdesi, gıda güvenliği denetiminin gerektirdiği temizlik standardına uygun tutulur. Hidrolik kaçak kontrolü günlük yapılır çünkü sızan yağ, gıda alanında kabul edilemez bir kontaminasyon riskidir. İç ve dış saha makineleri net ayrılır; dış sahanın tozlu-dizel makinesi hijyenik iç alana girmez.",
            },
            {
                baslik: "Depolama sahasında yığın istifi ve dönüş takibi",
                metin:
                    "Kurutulmuş ürün veya ambalajlı mamul depolandığında, adres düzeni olmayan bir sahada belirli bir partinin bulunması vakit alır ve bu, sevkiyat gününde forkliftin arama yaparak zaman kaybetmesine yol açar. Saha bloklara ayrılır, her partinin girişi kayda geçer ve son giren-ilk çıkan (FIFO) mantığı gıda ürünlerinde raf ömrü açısından özellikle önemlidir; adres düzeni bu mantığın uygulanmasını da kolaylaştırır.",
            },
            {
                baslik: "Hasat sonrası işleme dönemi: kısa süreli hacim sıçraması",
                metin:
                    "Manisa'nın tarımsal takvimine bağlı işleme tesislerinde hasat sonrası haftalar, yılın geri kalanına göre belirgin yüksek hacimle geçer; hammadde girişi ve mamul çıkışı aynı anda yoğunlaşır. Bu dönemde forklift ihtiyacı geçici olarak artar ve operasyon planı, sezon öncesinden ek makine rezervasyonu ve saha bölgelemesiyle bu sıçramaya hazırlanır. Sezon bittiğinde filo, düzenli depo moduna planlı şekilde döner.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım-gıda sanayiinde yük tipine göre elleçleme",
                paragraflar: [
                    "Aşağıdaki tablo, Manisa'nın tarım-gıda sanayii tesislerinde sık karşılaşılan yük tiplerini ve elleçleme kuralını özetler.",
                ],
                tablo: {
                    basliklar: ["Yük tipi", "Donanım", "Kritik operasyon kuralı"],
                    satirlar: [
                        ["Un/yem çuvalı", "Çatal, çapraz istif", "Kaymaya karşı bağlama düzeni"],
                        ["Big-bag", "Askı kancası/ataşman", "Askısız taşıma yapılmaz"],
                        ["Ambalajlı kurutulmuş ürün", "Çatal", "Adres düzeni, FIFO takibi"],
                        ["Dökme ürün paleti", "Çatal, palet altı destek", "Yük merkezi kontrolü"],
                    ],
                },
            },
            {
                baslik: "Toz patlaması riski ve forklift bakım sıklığı",
                paragraflar: [
                    "Un ve yem üretimi yapılan tesislerde havada asılı toz belirli koşullarda patlama riski taşır; bu risk yalnızca üretim ekipmanını değil, sahada çalışan forkliftin elektrik aksamını da ilgilendirir. Motor bölmesi ve elektrik bağlantılarındaki toz birikimi düzenli temizlenir, bakım aralığı standart takvimden kısaltılır.",
                    "Tesisin toz patlaması önleme planı hazırlanırken forklift rotaları ve şarj alanının konumu ayrıca değerlendirilir; şarj sırasında oluşabilecek kıvılcım riski, toz yoğunluğu yüksek bölgelerden uzak bir şarj alanı seçimini gerektirir.",
                ],
            },
            {
                baslik: "Hasat sonrası dönemde filo planlaması",
                paragraflar: [
                    "Hasat sonrası işleme yoğunluğu, forklift ihtiyacını birkaç hafta boyunca belirgin artırır; bu artışı son anda karşılamaya çalışmak hem makine bulma hem operatör eşleştirme açısından zorlaşır. Sezon öncesi rezervasyon, bu riski ortadan kaldırır.",
                    "Sezon içinde tempo tahminden saparsa — hasat erken biter ya da uzarsa — sözleşmenin uzatma ve erken iade koşullarının baştan yazılmış olması, taraflara esneklik sağlar. İşleme takviminizi paylaşırsanız filo planını birlikte çıkarırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Big-bag'leri çıplak çatalla taşıyabilir miyiz?",
                cevap:
                    "Önerilmez; askısız taşınan big-bag, taşıma sırasında sallanabilir ve düşme riski taşır. Big-bag askı kancası veya uygun ataşman kullanılması, hem yükün dengesini korur hem operatör güvenliğini artırır. Kullandığınız big-bag tipini ve ağırlığını paylaşırsanız uygun ataşmanı birlikte belirleriz.",
            },
            {
                soru: "Un tozu makinelerimize zarar veriyor mu, ne sıklıkla temizlemeliyiz?",
                cevap:
                    "Un ve yem tozu forkliftin elektrik aksamı ve motor bölmesinde birikip hem arıza hem toz patlaması riskine katkı yapabilir; bu ortamda bakım aralığı standart takvimden kısaltılır ve vardiya sonu temizlik rutini kurulur. Toz patlaması önleme planınızda forklift rotalarının da yer alması önerilir; bu planı birlikte gözden geçirebiliriz.",
            },
            {
                soru: "Gıda işleme hattımızda hangi forklift tipi kullanılmalı?",
                cevap:
                    "Kapalı gıda işleme alanında emisyonsuz olması gerektiği için akülü makineler zorunludur; ayrıca gövde temizliği gıda güvenliği denetimine uygun tutulur ve hidrolik kaçak günlük kontrol edilir. Dış sahanın tozlu-dizel makinesi bu alana girmez; iç ve dış saha görev ayrımı net kurulur.",
            },
            {
                soru: "Depomuzda parti karışıklığı yaşıyoruz, FIFO nasıl uygulanır?",
                cevap:
                    "Saha bloklara ayrılır, her partinin giriş tarihi ve adresi kayda geçer, sevkiyat listesi en eski partiden başlayarak çıkarılır. Bu düzen özellikle raf ömrü sınırlı gıda ürünlerinde önemlidir; adressiz sahada FIFO uygulamak neredeyse imkânsızdır çünkü hangi partinin daha eski olduğu gözle ayırt edilemez. Saha krokinizle bir kurulum planı çıkarabiliriz.",
            },
            {
                soru: "Hasat sonrası dönemde forklift talebimiz birden artıyor, nasıl planlamalıyız?",
                cevap:
                    "Sezon öncesinden ek makine rezervasyonu yaparak son anda arama telaşından kaçının; bölgedeki tesisler benzer takvimle çalıştığı için talep aynı haftalara yığılır. Hammadde giriş tahmininizi paylaşırsanız hangi haftalarda kaç ek makine gerektiğini birlikte hesaplarız ve sözleşmeyi buna göre kurarız.",
            },
            {
                soru: "Çuval istifimiz zamanla kayıyor, sınırı nasıl belirleyeceğiz?",
                cevap:
                    "İstif sınırını çuvalın kendi taşıma dayanımı ve istifin çapraz bağlama düzeni belirler; düz üst üste istif yerine çapraz bağlama, yanal kaymayı belirgin azaltır. Kayma fark edildiğinde istif hemen alçaltılmalı ve düzeltilmelidir; kendiliğinden düzelmez. Mevcut istif yönteminizi paylaşırsanız çapraz bağlama düzenine geçişi birlikte planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manisa'nın bağcılık-kiraz-tütün ağırlıklı tarımsal üretimi ve buna bağlı gıda-tarım sanayii kamuya açık bilgidir; un/yem tozu patlama riski, big-bag ataşman kullanımı ve FIFO depo mantığı sektör standardı bilgidir. Hasat sonrası filo planlaması firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Platformu: Manisa OSB'de Forklift Filomuzun Yanında İkincil Hizmet",
        giris:
            "Enerji altyapısı ve aydınlatma bakımı için kullanılan yükseltme platformları, manisaforklift.com'un çekirdek işi değildir; çekirdek işimiz Manisa OSB'deki üretim ve depo sahalarında forklift operasyonunu yönetmektir. Buna rağmen forklift filomuzun çalıştığı bir tesiste, hat üstü aydınlatma armatürü değişimi, trafo çevresi kısa bir bakım işi veya çatı altı elektrik hattı kontrolü gibi ihtiyaçlar zaman zaman bize de yöneltilebiliyor. Bu talebi forkliftle karşılamıyoruz — forklift personel yükseltmek veya elektrik işi yapmak için tasarlanmamıştır — ve enerji-aydınlatma bakım platformu ihtiyacını dürüstçe ikincil bir hizmet olarak, sınırlı ve net tanımlı işlerde ele alıyoruz; kapsam büyüdüğünde veya elektrik işi ehliyet gerektiren bir noktaya geldiğinde bu alanda esas uzmanlığı olan bir firmaya yönlendiriyoruz.",
        maddeler: [
            {
                baslik: "Forklift ile enerji-aydınlatma bakımı ayrı iş kollarıdır",
                metin:
                    "Forklift bir yük taşıma makinesidir; enerji ve aydınlatma bakımı ise hem personel yükseltme hem elektrik işi güvenliği gerektiren, ayrı bir uzmanlık alanıdır. Bu iki iş kolunun ekipmanı, sertifikasyonu ve saha kuralı birbirinden farklıdır; forklift operatörümüz elektrik bakımı yapmaz, elektrik bakım ekibi de forklift kullanmaz.",
            },
            {
                baslik: "Manisa OSB'de bu talep hangi anda çıkıyor",
                metin:
                    "En sık görülen senaryo, forklift filomuzun bir üretim tesisinde çalıştığı sırada aynı sahada hat üstü aydınlatma armatürü değişimi veya kısa süreli bir elektrik hattı kontrolü ihtiyacının ortaya çıkmasıdır. Bu iş için gereken personel yükseltme platformunu, sahada zaten bulunduğumuz için ikincil olarak değerlendirebiliyoruz; ancak elektrik işinin kendisi mutlaka yetkili ve belgeli bir ekip tarafından yapılır.",
            },
            {
                baslik: "Kapsam netleştirme: iş yalnızca yükseltme mi, elektrik müdahalesi mi",
                metin:
                    "Talebi değerlendirirken önce işin niteliğini netleştiriyoruz: yalnızca yükseltme platformu mu gerekiyor, yoksa elektrik tesisatına müdahale de mi gerekiyor? İkinci durumda platform ihtiyacını karşılasak bile elektrik işinin yetkili ekip tarafından yapılması şarttır; bu ayrım baştan konuşulur ve karıştırılmaz.",
            },
            {
                baslik: "Operatör belgesi ve saha kuralı tavizsizdir",
                metin:
                    "Kullanılacak yükseltme platformu belgeli operatör gerektirir; belgesiz kullanım değerlendirilmez. Trafo veya enerji hattı çevresinde çalışma varsa, o bölgenin kendi güvenlik protokolü (enerji kesme, izin belgesi) tesisin elektrik sorumlusuyla ayrıca teyit edilir; bu teyit olmadan platform o bölgeye sokulmaz.",
            },
            {
                baslik: "Dürüst sınır: büyük veya sürekli talepte yönlendirme",
                metin:
                    "Sürekli tekrarlayan bakım programı, yüksek gerilim hattı işleri veya geniş çaplı aydınlatma yenileme projelerinde bu ikincil hizmeti sunmuyoruz; bu tür işler için enerji-aydınlatma bakımında esas uzmanlığı olan bir firmayla temas kurmanızı öneririz. Amacımız forklift müşterimizin sahasındaki münferit bir ihtiyacı, sınırları net biçimde karşılamaktır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift ile enerji-aydınlatma bakım platformunun görev farkı",
                paragraflar: [
                    "Aşağıdaki tablo, iki hizmetin Manisa OSB sahalarındaki farklı rolünü özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Forklift (ana hizmetimiz)", "Enerji-aydınlatma bakım platformu (ikincil)"],
                    satirlar: [
                        ["Ana görevi", "Yük taşıma", "Personel yükseltme + bakım desteği"],
                        ["Gereken uzmanlık", "Forklift operatörlüğü", "Yükseltme + elektrik iş güvenliği"],
                        ["Manisa OSB'deki kullanım sıklığı", "Günlük, ana operasyon", "Münferit, talebe bağlı"],
                    ],
                },
            },
            {
                baslik: "Aynı sahada karşılaşılan tipik talepler",
                paragraflar: [
                    "Manisa OSB'deki bir üretim tesisinde forklift filomuz hat kenarı beslemeyle çalışırken, aynı hafta içinde hat üstü bir aydınlatma armatürünün değişmesi veya trafo çevresinde kısa bir görsel kontrolün yapılması gündeme gelebiliyor. Bu tür işlerde platform ihtiyacını karşılıyoruz, ancak elektrik tesisatına dokunulan kısmı her zaman yetkili ekibe bırakıyoruz.",
                    "İş bitince platform sahadan çıkarılır ve forklift operasyonumuz kesintisiz sürer; bu ikincil hizmet, ana operasyonun programını etkilemeyecek şekilde planlanır.",
                ],
            },
            {
                baslik: "Ne zaman uzman firmaya yönlendiriyoruz",
                paragraflar: [
                    "Enerji hattı müdahalesi, yüksek gerilim çevresi iş veya sürekli tekrarlayan bakım programı söz konusuysa bu işi kendi ikincil hizmetimizle değil, enerji-aydınlatma bakımında esas uzmanlığa sahip bir firmayla karşılıyoruz.",
                    "Bu yönlendirme, doğru işi doğru uzmana teslim etme kararıdır; forklift operasyonumuzun ana odağını da korumamızı sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift ile elektrik bakım işini de siz mi yapıyorsunuz?",
                cevap:
                    "Hayır. Forklift bir yük taşıma makinesidir ve operatörümüz elektrik işi yapmaz; enerji tesisatına müdahale mutlaka yetkili ve belgeli bir elektrik ekibi tarafından yapılmalıdır. Biz yalnızca sahada zaten bulunduğumuz için personel yükseltme platformu ihtiyacını ikincil olarak karşılayabiliyoruz, elektrik işinin kendisini değil.",
            },
            {
                soru: "Hat üstü aydınlatma değişimi için forkliftinizi kullanabilir miyiz?",
                cevap:
                    "Hayır, forklift personel yükseltmek için tasarlanmamıştır ve çatalına platform bağlayıp operatör çıkarmak mevzuata aykırıdır. Bu iş için ayrı bir yükseltme platformu getiriyoruz; forklift operasyonumuz bu süreçten etkilenmeden devam eder.",
            },
            {
                soru: "Trafo çevresinde çalışma yapabilir misiniz?",
                cevap:
                    "Enerji hattı veya trafo çevresi işlerinde önce tesisin elektrik sorumlusuyla enerji kesme ve izin belgesi süreci teyit edilir; bu teyit olmadan platform o bölgeye sokulmaz. Kapsam yüksek gerilim işine dönüyorsa bu alanda esas uzmanlığı olan bir firmaya yönlendiriyoruz.",
            },
            {
                soru: "Operatör bizde mi olmalı, siz mi sağlıyorsunuz?",
                cevap:
                    "Yükseltme platformu belgeli operatör gerektirir; operatörünüz varsa ve belgesi geçerliyse yalnızca platform, yoksa operatörlü kiralama değerlendirilir. Elektrik işinin kendisi için ise mutlaka ayrı ve yetkili bir elektrik ekibi gerekir; bu iki rol birbirinin yerine geçmez.",
            },
            {
                soru: "Düzenli aydınlatma bakım programımız var, siz üstlenebilir misiniz?",
                cevap:
                    "Sürekli tekrarlayan bir bakım programı bu ikincil hizmetin kapsamı dışındadır; bu tür programlar için enerji-aydınlatma bakımında esas uzmanlığı olan bir firmayla çalışmanızı öneririz. Forklift filomuzla aynı sahada çakışan, münferit talepleri biz de değerlendirebiliriz.",
            },
            {
                soru: "Aynı gün hem forklift hem bakım platformu çalışabilir mi?",
                cevap:
                    "Sahaya ve iş kapsamına göre değerlendirilebilir; iki hizmetin operatörü ve saha kuralı farklıdır. Forklift filomuzun mevcut turlu programıyla çakışmayacak bir saat belirlenir ve net iş tanımıyla iki görev ayrı ayrı planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Elektrik tesisatına müdahalenin yetkili ve belgeli ekip gerektirdiği ve forkliftin bu iş için tasarlanmadığı sektör standardı bilgidir. Bu domainin forklift odaklı olduğu ve enerji-aydınlatma bakım platformunu Manisa OSB sahalarında ikincil sunduğu bilgisi firma pratiğidir; tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Manisa OSB'de Operatörlü Forklift Kiralama: Belge, Sorumluluk ve Devreye Alma",
        giris:
            "Operatörlü forklift kiralama, Manisa OSB'deki birçok tesis için makine bulma sorununu değil, belgeli ve deneyimli operatör bulma sorununu çözer. Forklift kullanımı MYK Mesleki Yeterlilik Belgesi veya MEB onaylı operatörlük belgesi gerektiren, mevzuatla tanımlı bir iştir; belgesiz kullanım hem yasal hem fiili risk taşır ve sigorta kapsamı açısından da sorun yaratabilir. Kendi kadrosunda belgeli operatör bulunmayan veya geçici bir hacim artışında hızla ek kapasiteye ihtiyaç duyan tesisler için operatörlü kiralama, makineyle birlikte gelen ve sahayı tanıyan bir operatörle işi baştan sağlam kurmanın yoludur. Bu sayfa, operatörlü forklift kiralamanın Manisa OSB'deki tesislerde nasıl işlediğini anlatır: belge kontrolü, sorumluluk paylaşımı, sahaya alışma süreci, ücretlendirme mantığı ve kendi kadronuzu kurma ile operatörlü kiralama arasındaki tercih.",
        maddeler: [
            {
                baslik: "Belge kontrolü, kiralamanın ilk ve zorunlu adımıdır",
                metin:
                    "Operatörlü kiralamada gelen operatörün MYK belgesi veya MEB onaylı sertifikası, kiralama öncesi doğrulanır ve belge geçerlilik tarihi kontrol edilir. Bu kontrol yalnızca formalite değildir; belgesiz veya süresi geçmiş belgeyle çalışan operatör, bir kazada hem operatörü hem tesisi hem kiralayan firmayı ciddi yasal sorumluluk altında bırakır. Belge bilgisi, kiralama sözleşmesinin bir parçası olarak yazılı saklanır.",
            },
            {
                baslik: "Sorumluluk paylaşımı sözleşmede net yazılır",
                metin:
                    "Operatörlü kiralamada makinenin teknik bakımı ve operatörün mesleki yeterliliği kiralayan firmadadır; tesisin saha kuralına uyum, günlük görev talimatı ve iş güvenliği talimatları ise tesisin sorumluluğundadır. Bu ayrım baştan yazılı olmadığında bir kaza veya hasar durumunda kimin neyden sorumlu olduğu tartışma konusu olur; net sözleşme bu tartışmayı önler.",
            },
            {
                baslik: "Sahaya alışma: operatör makineyi bilir, sahayı bilmez",
                metin:
                    "Gelen operatör forklift kullanımında deneyimlidir ancak sizin tesisinizin rota düzenini, kesişim noktalarını ve özel kurallarını (örneğin belirli bir koridorun yaya saatlerinde kapalı olması) bilmez. İlk gün saha brifingi — rotalar, bölgeler, devir noktaları, İSG kuralları — verilmeden operatör rotaya çıkarılmaz. Bu brifing, Manisa OSB'deki tesislerde genellikle yarım saatten kısa sürer ama atlanması hâlinde ilk günün verimini düşürür.",
            },
            {
                baslik: "Ücretlendirme mantığı: makine ve operatör ayrı kalemdir",
                metin:
                    "Operatörlü kiralamada fiyat, makine kirası ile operatör hizmet bedelinin toplamıdır ve bu iki kalem ayrı görünür; böylece yalnızca makineye mi yoksa operatöre mi ek maliyet geldiği net anlaşılır. Vardiya sayısı, mesai dışı çalışma ve hafta sonu görevlendirmesi operatör bedelini etkileyen değişkenlerdir ve sözleşme öncesi netleştirilir.",
            },
            {
                baslik: "Kendi kadronuzu mu kurmalı, operatörlü mü kiralamalısınız",
                metin:
                    "Yıl boyu sürekli forklift işi olan tesislerde kendi kadrosunu kurup belge kazandırmak uzun vadede daha ekonomiktir; sezonluk veya geçici hacim artışında ise operatörlü kiralama, işe alım ve eğitim yükünü ortadan kaldırarak hızlı çözüm sunar. İki modelin maliyeti, ihtiyacın süresi üzerinden karşılaştırılır ve karar buna göre verilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralamanın karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki kiralama modelinin Manisa OSB'deki tesisler için hangi durumda uygun olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Kriter", "Operatörlü kiralama", "Operatörsüz kiralama (kendi operatörünüz)"],
                    satirlar: [
                        ["Belgeli personel", "Firma sağlar", "Tesiste zaten mevcut olmalı"],
                        ["Sahaya alışma süresi", "İlk gün brifingiyle kısa", "Gerekmez, saha zaten bilinir"],
                        ["Uygun senaryo", "Geçici/sezonluk hacim artışı", "Sürekli, yıl boyu forklift işi"],
                        ["Maliyet kalemi", "Makine + operatör bedeli", "Yalnızca makine kirası"],
                    ],
                },
            },
            {
                baslik: "Belge türleri ve geçerlilik kontrolü",
                paragraflar: [
                    "Forklift operatörlüğü için MYK Mesleki Yeterlilik Belgesi veya MEB onaylı forklift operatörlüğü sertifikası aranır; her iki belge de mevzuat kapsamında geçerli kabul edilir ancak geçerlilik tarihi ve belgenin kapsadığı makine sınıfı kontrol edilir. Bazı belgeler belirli tonaj veya makine tipiyle sınırlı olabilir; kiralanacak forkliftin sınıfı, belgenin kapsamıyla eşleştirilir.",
                    "Belge fotokopisi veya dijital kaydı, kiralama sözleşmesine ek olarak saklanır; denetim veya kaza durumunda bu kayıt ilk başvurulan belgedir.",
                ],
            },
            {
                baslik: "Uzun dönem operatörlü kiralamada devamlılık",
                paragraflar: [
                    "Aynı tesiste uzun süre operatörlü kiralama sürdürüldüğünde, aynı operatörün mümkün olduğunca sabit tutulması sahaya alışma sürecinin tekrar yaşanmasını önler; operatör değişikliği gerektiğinde yeni operatöre aynı saha brifingi tekrarlanır.",
                    "Operatörün izin veya rahatsızlık durumunda yedek operatör planı da sözleşmenin bir parçasıdır; bu plan olmadan tek operatöre bağımlı bir kiralama, o kişinin bulunmadığı günde tesisi boşta bırakabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörün belgesi olduğundan nasıl emin oluyorsunuz?",
                cevap:
                    "Kiralama öncesi operatörün MYK belgesi veya MEB onaylı sertifikasının geçerlilik tarihini ve kapsadığı makine sınıfını kontrol ediyoruz; bu kayıt sözleşmeye ek olarak saklanır. Belgesiz veya süresi geçmiş operatör hiçbir koşulda sahaya gönderilmez, çünkü bu hem yasal hem fiili bir risktir.",
            },
            {
                soru: "Operatör sahamızı bilmiyor, ilk gün verim düşer mi?",
                cevap:
                    "İlk gün bir saha brifingi verilir — rotalar, kesişim noktaları, devir kuralları, İSG talimatları — ve bu brifing genellikle yarım saatten kısa sürer. Brifing atlanırsa ilk günün verimi gerçekten düşer; bu yüzden operatör rotaya çıkmadan önce bu adımı zorunlu tutuyoruz.",
            },
            {
                soru: "Operatör bir kazaya karışırsa sorumluluk kimde?",
                cevap:
                    "Sorumluluk paylaşımı sözleşmede baştan yazılır: makinenin teknik durumu ve operatörün mesleki yeterliliği bizde, tesisin saha kuralına uyum ve görev talimatı sizdedir. Kazanın nedenine göre bu ayrım üzerinden değerlendirme yapılır; yazılı sözleşme, sonradan yaşanabilecek tartışmayı önler.",
            },
            {
                soru: "Operatörlü kiralama fiyatı nasıl hesaplanıyor?",
                cevap:
                    "Makine kirası ve operatör hizmet bedeli ayrı kalemler olarak gösterilir; vardiya sayısı, mesai dışı çalışma ve hafta sonu görevlendirmesi operatör bedelini etkiler. Bu değişkenler sözleşme öncesi netleştirilir; sürpriz ek kalem çıkmaz.",
            },
            {
                soru: "Operatör izinliyken yerine kimse gelmezse ne olur?",
                cevap:
                    "Uzun dönem operatörlü kiralamada yedek operatör planı sözleşmenin bir parçasıdır; operatörün izin veya rahatsızlık durumunda bu plan devreye girer. Plan olmadan tek operatöre bağımlı bir kiralama, o kişinin bulunmadığı günde tesisi boşta bırakabilir; bu yüzden yedek planını baştan konuşuyoruz.",
            },
            {
                soru: "Sezon bitince operatörlü kiralamayı kendi kadromuza mı devretmeliyiz?",
                cevap:
                    "İhtiyacınız sezonluk kalacaksa operatörlü kiralamayı sürdürmek daha esnektir; yıl boyu sürekli forklift işiniz varsa kendi kadronuzu kurup belge kazandırmak uzun vadede daha ekonomiktir. İki modelin maliyetini ihtiyacınızın süresi üzerinden birlikte karşılaştırabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift operatörlüğü için MYK/MEB belge zorunluluğu mevzuat bilgisidir. Sorumluluk paylaşımı, saha brifingi ve yedek operatör planı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Manisa OSB'de Birden Fazla Tesise Forklift Filo Yönetimi: Tek Sözleşme, Ortak Standart",
        giris:
            "Manisa OSB içinde birden fazla üretim veya depo tesisi işleten firmalar için forklift operasyonunun en büyük riski, her tesisin kendi düzenini kendi başına kurmasıdır — biri turlu besleme uygularken diğeri çağrı üzerine çalışır, biri devir kontrol listesi tutarken diğeri tutmaz, biri şarj penceresini planlarken diğeri planlamaz. Bu dağınıklık, filo genel verimini tek tek tesislerin en zayıfına indirger ve merkezi bir görünürlük sağlamaz. Çok noktalı filo yönetimi, aynı standardı — devir kontrolü, bakım takvimi, operatör belgesi, hasar kaydı — bütün tesislere aynı şablonla uygulayıp, tek bir sözleşme ve tek bir raporlama hattı altında toplamayı hedefler. Bu sayfa, Manisa OSB'de birden fazla tesisi olan firmalar için forklift filo yönetiminin nasıl kurulduğunu anlatır: ortak standart şablonu, tesisler arası makine transferi, merkezi bakım takvimi, konsolide raporlama ve tesis bazlı esneklik.",
        maddeler: [
            {
                baslik: "Ortak standart şablonu: her tesis aynı devir listesini kullanır",
                metin:
                    "Devir kontrol listesi, bakım kontrol noktaları ve İSG kuralları, tesise özgü küçük farklar dışında bütün lokasyonlarda aynı şablona bağlanır. Bu, yeni bir tesis filoya eklendiğinde sıfırdan bir düzen kurmak yerine mevcut şablonu uygulamayı sağlar ve tesisler arası operatör geçişinde alışma süresini kısaltır. Şablon merkezi olarak güncellendiğinde, güncelleme bütün tesislere aynı anda yayılır.",
            },
            {
                baslik: "Tesisler arası makine transferi: OSB içi kısa mesafe avantajı",
                metin:
                    "Manisa OSB içindeki tesisler birbirine yakın olduğu için, bir tesiste geçici olarak azalan iş yükü ile başka bir tesisteki geçici artış, makine transferiyle dengelenebilir; bu, her tesise ayrı ayrı en yüksek tempoya göre filo bağlamaktan daha verimlidir. Transfer kararı, tesislerin haftalık iş yükü tahminine göre merkezi olarak alınır ve makinenin devir kaydı transfer anında yenilenir.",
            },
            {
                baslik: "Merkezi bakım takvimi: hiçbir tesis periyodik bakımı unutmaz",
                metin:
                    "Birden fazla tesiste dağınık yönetilen bakım takvimi, genelde bir tesisin bakımı ertelemesiyle sonuçlanır ve bu erteleme arıza olarak geri döner. Merkezi bakım takviminde her makinenin periyodik bakım tarihi tek bir yerden izlenir ve hangi tesiste olursa olsun aynı disiplinle uygulanır; bakım, üretim temposunun düşük olduğu güne göre tesis bazında planlanır ama takip merkezidir.",
            },
            {
                baslik: "Konsolide raporlama: filo genelinde hangi tesis nerede zorlanıyor",
                metin:
                    "Tesis bazlı raporlar tek tek okunduğunda genel bir örüntü görülmez; makine başına arıza sıklığı, hasar kaydı ve doluluk oranı bütün tesisler için tek bir tabloda birleştirildiğinde hangi lokasyonun operasyonel olarak zorlandığı, hangisinin fazla makineye sahip olduğu netleşir. Bu görünürlük, filo büyüklüğünü tesis bazında değil ağ genelinde optimize etmeyi mümkün kılar.",
            },
            {
                baslik: "Tek sözleşme, tesis bazlı esneklik",
                metin:
                    "Bütün tesisleri tek bir çerçeve sözleşme altında toplamak, fiyatlandırma ve şartları standartlaştırırken, her tesisin kendi hacim değişimine göre makine ekleyip çıkarabilmesini de korur. Bir tesisteki hacim artışı, diğerini etkilemeden çerçeve sözleşme içinde ek makine talebiyle karşılanır; sözleşme yeniden müzakere edilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tek tesis ile çok tesis filo yönetiminin farkı",
                paragraflar: [
                    "Aşağıdaki tablo, tek tesis operasyonu ile Manisa OSB içinde birden fazla tesisin birlikte yönetilmesi arasındaki temel farkları özetler.",
                ],
                tablo: {
                    basliklar: ["Konu", "Tek tesis yönetimi", "Çok noktalı filo yönetimi"],
                    satirlar: [
                        ["Devir kontrol listesi", "Tesise özgü, standart olmayabilir", "Ortak şablon, bütün tesislerde aynı"],
                        ["Bakım takibi", "Tesis bazında dağınık", "Merkezi takvim, tek görünürlük"],
                        ["Ani hacim artışında çözüm", "Yeni makine kiralama", "Diğer tesisten transfer + gerekirse ek makine"],
                        ["Raporlama", "Tesis bazlı, ayrı ayrı okunur", "Konsolide, ağ genelinde karşılaştırmalı"],
                    ],
                },
            },
            {
                baslik: "Transfer kararının nasıl alındığı",
                paragraflar: [
                    "Bir makinenin bir tesisten diğerine transferi, iki tesisin haftalık iş yükü tahmini karşılaştırılarak alınır; kararı tek bir saha amiri değil, filo genelini gören merkezi bir sorumlu verir. Transfer öncesi makinenin mevcut durumu (yakıt/akü, hasar, bakım tarihi) kayda geçirilir ve yeni tesisteki devir kaydı bu veriyle başlar.",
                    "Transfer sırasında operatör de değişiyorsa, yeni tesisin saha brifingi verilmeden makine rotaya çıkarılmaz; bu adım, ortak şablon sayesinde hızlı tamamlanır çünkü brifing formatı bütün tesislerde aynıdır.",
                ],
            },
            {
                baslik: "Büyüyen filo için kademeli merkezi yönetime geçiş",
                paragraflar: [
                    "İki veya üç tesisle başlayan bir firma için merkezi yönetime geçiş tek seferde değil kademeli yapılır: önce ortak devir listesi ve bakım takvimi standartlaştırılır, sonra raporlama konsolide edilir, en son transfer ve çerçeve sözleşme mekanizması kurulur. Bu sıra, mevcut tesislerin günlük işleyişini kesintiye uğratmadan geçişi tamamlar.",
                    "Yeni bir tesis Manisa OSB'de devreye girdiğinde, kurulu ortak standart sayesinde o tesisin filo düzeni sıfırdan değil, mevcut şablonun uygulanmasıyla kurulur; bu da yeni tesisin ilk haftasını belirgin kısaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İki tesisimiz var, ayrı ayrı mı yoksa tek sözleşmeyle mi yönetmeliyiz?",
                cevap:
                    "Tesisleriniz Manisa OSB içinde birbirine yakınsa tek çerçeve sözleşme, hem fiyatlandırmayı standartlaştırır hem tesisler arası makine transferini mümkün kılar. Ayrı sözleşmeler her tesisi kendi en yüksek temposuna göre filo bağlamaya zorlar; birleşik yönetim bu fazlalığı azaltır. İki tesisinizin hacim ve vardiya bilgisini paylaşırsanız birleşik yapının size ne kazandıracağını hesaplarız.",
            },
            {
                soru: "Bir tesisteki makineyi diğerine transfer etmek işlem olarak zor mu?",
                cevap:
                    "Değil; transfer kararı iki tesisin haftalık iş yükü karşılaştırılarak merkezi olarak alınır, makinenin mevcut durumu transfer öncesi kayda geçirilir ve yeni tesiste devir kaydı bu veriyle başlar. Operatör de değişiyorsa yeni tesisin saha brifingi verilir; ortak şablon sayesinde bu adım hızlı tamamlanır.",
            },
            {
                soru: "Her tesisimizin bakım takvimi farklı işliyor, birleştirmek zaman alır mı?",
                cevap:
                    "İlk kurulum birkaç haftalık bir iştir: mevcut makinelerin bakım tarihleri tek bir takvimde toplanır, tesise özgü küçük farklar (örneğin bir tesisin tozlu ortamı) not edilir ve ortak takvim buna göre ayarlanır. Kurulduktan sonra takip merkezi ve tek bakışta görülebilir hâle gelir; hiçbir tesisin bakımı sessizce ertelenmez.",
            },
            {
                soru: "Konsolide raporlama bize somut olarak ne gösterir?",
                cevap:
                    "Makine başına arıza sıklığı, hasar kaydı ve doluluk oranı bütün tesisleriniz için tek tabloda görünür; hangi tesisin operasyonel olarak zorlandığı, hangisinin fazla makineye sahip olduğu bu tablodan çıkar. Bu görünürlük olmadan her tesis kendi verisini ayrı okur ve ağ genelindeki fazlalık veya eksiklik fark edilmez.",
            },
            {
                soru: "Yeni bir tesis açıyoruz, mevcut filo standardımızı oraya nasıl taşırız?",
                cevap:
                    "Kurulu ortak devir listesi, bakım takvimi ve saha brifing formatı doğrudan yeni tesise uygulanır; sıfırdan bir düzen kurulmaz. Yeni tesisin kendine özgü koşulları (zemin, koridor genişliği, vardiya sayısı) şablona ek olarak eklenir ve bu sayede yeni tesisin filo düzeni ilk haftadan itibaren oturmuş olur.",
            },
            {
                soru: "Bir tesisimiz geçici olarak kapanırsa filoyu nasıl yönetiriz?",
                cevap:
                    "Çerçeve sözleşme, tek bir tesisin geçici kapanmasında filonun o tesise bağlı kalmasını gerektirmez; makineler diğer tesislere transfer edilir veya kısa süreliğine iade edilir. Kapanma süresi ve olası yeniden açılma tarihi netleştiğinde bu kararı birlikte alırız; sözleşme yeniden baştan yazılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manisa OSB'nin çok tesisli firmalar için birbirine yakın konumu kamuya açık bilgidir; ortak standart şablonu, merkezi bakım takvimi ve konsolide raporlama yaklaşımı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Manisa OSB'de Zor Zemin ve Açık Saha Forklift-Telehandler Operasyonu",
        giris:
            "Manisa OSB'nin sınırları genişledikçe yeni yatırım sahaları, açık stok alanları ve henüz asfaltlanmamış çevre yollar, standart depo forkliftinin rahat çalışamadığı bir zemin profili ortaya çıkarıyor. Düz beton üzerinde tasarlanmış karşı ağırlıklı forklift, çakıllı, eğimli veya yağış sonrası yumuşayan bir zeminde hem tutunma hem denge sorunu yaşar; bu koşullarda telehandler (teleskopik yüklayıcı) gibi büyük çaplı, yüksek yer açıklığına sahip ve genellikle dört tekerden çekişli makineler daha güvenli çözüm sunar. Bu sayfa, manisaforklift.com'un zor zemin ve açık saha işlerinde forklift ile telehandler arasındaki seçimi nasıl yaptığını ve bu makinelerin Manisa OSB çevresindeki açık sahalarda hangi kurallarla çalıştırıldığını anlatır: zemin değerlendirmesi, telehandler ile forkliftin görev ayrımı, eğimli arazide denge kuralları, hava koşulu etkisi ve açık saha İSG önlemleri.",
        maddeler: [
            {
                baslik: "Zemin değerlendirmesi, makine kararından önce gelir",
                metin:
                    "Açık sahaya makine göndermeden önce zeminin taşıma kapasitesi, eğim derecesi ve yağış sonrası davranışı değerlendirilir; bu değerlendirme sahaya çıkmadan tam yapılamayacağı için ilk teslimat genelde küçük bir keşif turuyla başlar. Zeminin sıkıştırılmamış, dolgulu veya kısmen bataklık karakterli olduğu tespit edilirse standart forklift yerine daha geniş lastikli, yüksek yer açıklığına sahip bir sınıf değerlendirilir.",
            },
            {
                baslik: "Telehandler ile forkliftin görev ayrımı: erişim mesafesi belirleyicidir",
                metin:
                    "Telehandler, teleskopik koluyla hem yükseğe hem ileriye doğru erişebilen, düz olmayan zeminde forkliften daha rahat hareket eden bir makinedir; ancak her açık saha işi telehandler gerektirmez. Kısa mesafeli, düz ve sağlam zeminli açık depolama alanlarında dizel karşı ağırlıklı forklift yeterli olabilir; zemin bozuksa, mesafe uzunsa veya yığın yüksekliği fazlaysa telehandler tercih edilir. Bu karar, sahanın gerçek koşulu görülmeden verilmez.",
            },
            {
                baslik: "Eğimli arazide denge kuralı: yük daima yokuşun üst tarafında",
                metin:
                    "Manisa OSB çevresindeki bazı genişleme sahaları hafif eğimli arazi üzerindedir ve eğimli zeminde forklift veya telehandler taşırken yük, makinenin eğimin üst tarafında kalacağı yönde tutulur; aksi yönde taşıma, yükün öne kaymasına ve makinenin dengesini kaybetmesine yol açabilir. Eğim belirli bir dereceyi aştığında o bölümde çalışma durdurulur ve zemin düzeltmesi beklenir; bu sınır, makinenin üretici verisiyle belirlenir.",
            },
            {
                baslik: "Yağış sonrası zemin: geçici rota değişikliği kalıcı çözümden önce gelir",
                metin:
                    "Yağış sonrası yumuşayan zeminde makinenin bir tekerinin çamura saplanması veya kayması riski artar; bu dönemde açık saha rotaları geçici olarak değiştirilir veya o bölümde çalışma ertelenir. Sık ıslanan bölgelerde kalıcı çözüm zeminin stabilize edilmesi veya rotanın betonlanmasıdır, ancak bu yatırım yapılana kadar geçici rota değişikliği ve hız düşürme, güvenli çalışmayı sürdürür.",
            },
            {
                baslik: "Açık saha İSG'si: görünürlük ve devrilme önlemi öncelik alır",
                metin:
                    "Açık sahada kapalı depodan farklı olarak toz, geniş açık alan ve sınırlı görünürlük riskleri öne çıkar; makinelerde tepe lambası ve geri vites sesli ikaz zorunlu tutulur, yaya bölgeleri işaretlenir. Devrilme riskine karşı emniyet kemeri kullanımı tavizsizdir — yana devrilen bir makineden atlamaya çalışmak, kemer takılıyken kabin içinde kalmaktan çok daha tehlikelidir ve bu bilgi her saha brifinginde tekrarlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin durumuna göre makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, Manisa OSB çevresindeki açık saha zemin tiplerine göre tipik makine tercihini özetler; kesin seçim sahanın gerçek durumuyla doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Tercih edilen makine", "Kritik kontrol"],
                    satirlar: [
                        ["Düz, sıkıştırılmış açık saha", "Dizel karşı ağırlıklı forklift", "Yük merkezi, hız sınırı"],
                        ["Çakıllı veya hafif eğimli", "Telehandler", "Eğim sınırı, yük yönü"],
                        ["Yeni dolgu, henüz sağlamlaşmamış", "Telehandler + geçici rota", "Saplanma riski, zemin turu"],
                        ["Yağış sonrası yumuşamış", "Rota değişikliği veya çalışma durdurma", "Kayma riski"],
                    ],
                },
            },
            {
                baslik: "Genişleme sahasında geçici ve kalıcı zemin çözümleri",
                paragraflar: [
                    "Yeni yatırım sahalarında zemin genelde kademeli sağlamlaşır; bu süreçte geçici çözümler — geçici plaka, kalas destek, sıkıştırılmış şerit rota — makinenin güvenle hareket etmesini sağlar. Kalıcı çözüm, ana forklift-telehandler rotalarının betonlanması veya stabilize edilmesidir; bütün sahayı sertleştirmek gerekmez, yalnızca sık kullanılan rotanın sertleştirilmesi çoğu zaman yeterlidir.",
                    "Bu geçiş süresince haftalık bir zemin turu, bozulan bölgeleri erken tespit eder ve rota, sorun büyümeden değiştirilir; turun atlanması, sorunun ancak bir makine saplandığında fark edilmesine yol açar.",
                ],
            },
            {
                baslik: "Telehandler operatörlüğü forklift operatörlüğünden ayrı değerlendirilir",
                paragraflar: [
                    "Telehandler kullanımı da forklift gibi belgeli operatör gerektirir; ancak makinenin teleskopik kol kontrolü ve farklı denge dinamiği nedeniyle telehandler'a özgü ayrı bir yetkinlik söz konusudur. Forklift operatörü otomatik olarak telehandler kullanmaya yetkili sayılmaz; ilgili makine sınıfını kapsayan belge aranır.",
                    "Operatörlü kiralamada bu ayrım baştan netleştirilir; sahaya gelen operatörün belgesi, kullanacağı makine sınıfıyla eşleştirilerek kontrol edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni yatırım sahamızın zemini henüz sağlamlaşmadı, hangi makineyi önerirsiniz?",
                cevap:
                    "Zeminin gerçek durumunu görmeden kesin öneri vermiyoruz; genelde küçük bir keşif turuyla başlıyoruz. Zemin sıkışmamış veya kısmen dolguluysa telehandler gibi yüksek yer açıklığına sahip, geniş lastikli bir makine ve geçici plaka/kalas destekli bir rota önerilir. Zemin sağlamlaştıkça standart forklifte geçiş değerlendirilir; bu geçiş kademeli olarak, zemin turlarıyla takip edilir.",
            },
            {
                soru: "Telehandler mi, dizel forklift mi kiralamalıyız?",
                cevap:
                    "Karar zemin ve erişim mesafesine göre verilir: düz ve sağlam açık sahalarda dizel karşı ağırlıklı forklift genellikle yeterlidir; zemin bozuksa, eğimliyse veya erişim mesafesi uzunsa telehandler'ın teleskopik kolu ve yüksek yer açıklığı avantaj sağlar. Sahanızın fotoğrafını veya krokisini paylaşırsanız ilk değerlendirmeyi uzaktan yapabilir, kesin kararı keşifle netleştirebiliriz.",
            },
            {
                soru: "Eğimli arazide makine devrilme riski ne kadar gerçek?",
                cevap:
                    "Gerçek ve ciddiye alınması gereken bir risktir; yük yanlış yönde (eğimin alt tarafında) taşınırsa denge hızla bozulabilir. Bu yüzden eğimli bölümlerde yük daima eğimin üst tarafında tutulur ve belirli bir eğim derecesinin üzerinde çalışma durdurulur. Sahanızın eğim profilini paylaşırsanız güvenli çalışma sınırını üretici verisiyle birlikte netleştiririz.",
            },
            {
                soru: "Yağışlı dönemde açık saha operasyonumuz tamamen durur mu?",
                cevap:
                    "Tamamen durmak zorunda değil; yumuşayan bölgelerde geçici rota değişikliği veya o bölümde çalışmanın ertelenmesi genellikle yeterlidir. Sık ıslanan rotaların stabilize edilmesi veya betonlanması kalıcı çözümdür ve bu yatırım yapıldıktan sonra yağışlı dönem operasyonu büyük ölçüde normale döner. Sahanızın hangi bölümlerinin sık ıslandığını paylaşırsanız öncelikli rotayı birlikte belirleriz.",
            },
            {
                soru: "Telehandler operatörü, forklift operatöründen farklı belge mi gerektiriyor?",
                cevap:
                    "Evet, telehandler'ın teleskopik kol kontrolü ve denge dinamiği forkliftten farklıdır; forklift belgesi otomatik olarak telehandler kullanımına yetki vermez. Operatörlü kiralamada gelen operatörün belgesi, kullanacağı makine sınıfıyla eşleştirilerek kontrol edilir; bu kontrolü kiralama öncesi biz yapıyoruz.",
            },
            {
                soru: "Açık sahada toz ve sınırlı görünürlük kaza riskini artırıyor mu?",
                cevap:
                    "Artırabilir; bu yüzden açık saha makinelerinde tepe lambası ve geri vites sesli ikaz zorunlu tutulur, yaya bölgeleri işaretlenir ve toz yoğun günlerde hız sınırı düşürülür. Devrilme riskine karşı emniyet kemeri kullanımı hiçbir koşulda es geçilmez; bu kural her saha brifinginde tekrarlanan, taviz verilmeyen bir maddedir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manisa OSB'nin genişleyen yatırım sahalarının açık ve kısmen henüz sağlamlaşmamış zemin profili kamuya açık bilgidir; telehandler-forklift görev ayrımı, eğimli arazide yük yönü kuralı ve emniyet kemeri önceliği sektör standardı bilgidir. Zemin turu ve geçici rota yaklaşımı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Makaslı Platform Kiralama: Manisa OSB'de Forklift Filomuzun Tavan ve Üst Yapı Kolu",
        giris:
            "Manisa OSB'deki bir üretim tesisinde forklift genelde zemin seviyesindeki yük hareketini üstlenir; ama aynı tesiste tavan yüksekliğinde çalışan bir HVAC kanalı, bir sprinkler hattı, bir kablo tavası veya bir çatı altı aydınlatma rafı olduğunda forklift bu işe cevap veremez — dikey, dengeli ve geniş bir çalışma platformuna ihtiyaç doğar. Makaslı platform tam bu boşluğu dolduran makinedir: düz, sabit bir sepet üzerinde birden fazla kişiyi ve malzemeyi aynı anda yukarı taşıyabilen, dikey doğrultuda hareket eden bir yükseltici. manisaforklift.com'da makaslı platformu ayrı bir iş kolu olarak değil, forklift filomuzun tamamlayıcısı olarak konumlandırıyoruz: malzeme sahaya forkliftle taşınır, personel ve el aletleri makaslı platformla tavan seviyesine çıkar; ikisi aynı teslimat aracıyla, aynı saha ekibiyle koordine edilir. Bu sayfa, elektrikli ve dizel makaslı platform arasındaki seçimi, dar/geniş şasi kararını, çalışma yüksekliği ve platform kapasitesi hesabını, iç mekan tavan üstü işlerinde en sık karşılaşılan senaryoları ve Manisa OSB'deki tesislerde bu makinenin forklift trafiğiyle nasıl bir arada güvenle çalıştığını anlatır.",
        maddeler: [
            {
                baslik: "Elektrikli mi, dizel mi: zemin ve ortam belirler",
                metin:
                    "Kapalı üretim alanında, hassas montaj hattı üzerinde veya gıda/elektronik gibi emisyona duyarlı bir bölümde elektrikli makaslı platform neredeyse zorunludur — sessiz çalışır, egzoz gazı bırakmaz ve dar iç mekanlarda daha kolay yönetilir. Açık sahada, düzensiz zeminde veya uzun mesafeli bir yürüyüşte ise dizel/tüm tekerden çekişli makaslı platform daha uygun olur; ancak bu sınıf hem daha büyük hem daha ağırdır, kapalı alana her zaman sığmaz. Seçim, işin kapalı mı açık mı yapılacağına göre netleşir.",
            },
            {
                baslik: "Dar şasi mi, geniş şasi mi: koridor genişliği belirleyici",
                metin:
                    "Manisa OSB'deki fabrikaların bir kısmında raf aralıkları ve üretim hattı koridorları dar olduğu için standart genişlikteki bir makaslı platform bu aralıklardan geçemeyebilir; bu durumda dar şasili (genelde 0,8-1 metre genişlik bandında) elektrikli modeller tercih edilir. Geniş açık sahalarda veya montaj atölyelerinde koridor kısıtı yoksa standart genişlikte, daha yüksek kapasiteli platform tercih edilerek aynı seferde daha fazla malzeme taşınabilir. Koridor ölçüsü ölçülmeden şasi genişliği kararı verilmez.",
            },
            {
                baslik: "Çalışma yüksekliği ve platform kapasitesi birlikte hesaplanır",
                metin:
                    "Makaslı platformun ilan edilen 'platform yüksekliği' ile makinenin gerçek erişebileceği 'çalışma yüksekliği' arasında fark vardır; çalışma yüksekliği, platform yüksekliğine ortalama bir insan boyu ve kol uzanımı eklenerek hesaplanır. Ayrıca platform üzerine binecek kişi sayısı ve taşınacak malzeme (alet çantası, boru parçası, kablo makarası) birlikte düşünüldüğünde makinenin nominal kapasitesi aşılmamalıdır; iki kişi ve ağır bir malzeme yükü, tek kişilik hesapla seçilmiş bir makinede güvenli değildir.",
            },
            {
                baslik: "İç mekan tavan üstü işlerinde en sık karşılaşılan senaryo",
                metin:
                    "Üretim hattı üzerindeki HVAC kanal bakımı, sprinkler başlığı değişimi, kablo tavası genişletme veya çatı altı boru hattı kontrolü gibi işler, hattı durdurmadan üst seviyede yapılması gereken görevlerdir. Bu senaryoda makaslı platform, hat kenarına sığacak dar şasili bir modelle konumlandırılır ve çalışma saatleri genelde vardiya değişim aralığına veya bakım penceresine denk getirilir; bu sayede üretim akışı kesintiye uğramaz.",
            },
            {
                baslik: "Forklift trafiğiyle aynı sahada güvenli birliktelik",
                metin:
                    "Aynı depoda hem forklift hem makaslı platform çalıştığında, makaslı platformun etrafı huni veya bariyerle işaretlenir ve forklift operatörüne bu bölgenin sabit bir yükseltici alanı olduğu bildirilir; makaslı platform üzerindeki kişi asla forklift rotasının kesişim noktasında bırakılmaz. İki makinenin teslimat ve konumlandırma planı, saha girişinde tek bir brifingle birlikte verilir — ayrı ayrı değil.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Makaslı platform sınıfına göre tipik kullanım",
                paragraflar: [
                    "Aşağıdaki tablo, Manisa OSB'deki tesislerde makaslı platform seçiminde sık karşılaşılan sınıf-kullanım eşleşmesini özetler; kesin seçim koridor ölçüsü ve çalışma yüksekliği doğrulamasıyla yapılır.",
                ],
                tablo: {
                    basliklar: ["Platform sınıfı", "Tipik çalışma yüksekliği", "En uygun ortam", "Dikkat noktası"],
                    satirlar: [
                        ["Dar şasi elektrikli", "6-10 metre", "Dar koridor, kapalı hat kenarı", "Zemin dengesi, kapasite payı"],
                        ["Standart şasi elektrikli", "10-14 metre", "Geniş kapalı alan, montaj atölyesi", "Kapı/geçiş yüksekliği"],
                        ["Dizel / tüm tekerden çekişli", "12-18 metre", "Açık saha, düzensiz zemin", "Eğim sınırı, egzoz"],
                    ],
                },
            },
            {
                baslik: "Forklift ile makaslı platformun tek teslimatta birleştirilmesi",
                paragraflar: [
                    "Aynı proje kapsamında hem malzeme taşıma (forklift) hem yüksek seviye erişim (makaslı platform) ihtiyacı varsa, ikisi aynı araçla, aynı gün teslim edilerek hem lojistik maliyeti hem saha koordinasyonu tek elden yürütülür. Bu tür birleşik teslimatlarda saha girişinde tek bir kayıt ve tek bir güvenlik brifingi yeterli olur; iki ayrı tedarikçiyle çalışmanın getirdiği koordinasyon kaybı ortadan kalkar.",
                    "Birleşik teslimat planı, hangi makinenin hangi gün-saat aralığında hangi bölgede çalışacağını içeren kısa bir sahiplenme takvimiyle desteklenir; bu takvim, forklift trafiğinin makaslı platformun sabit durduğu bölgeyi kesmemesini garanti eder.",
                ],
            },
            {
                baslik: "Bakım ve periyodik kontrol sorumluluğu",
                paragraflar: [
                    "Kiralanan makaslı platform, teslimattan önce periyodik kontrolü yapılmış ve bakım kaydı güncel olarak sahaya gelir; kiralama süresi boyunca olağan aşınma dışındaki arızalarda müdahale kiralayan firma tarafından yapılır, kiracı tesise ayrıca bakım yükü binmez.",
                    "Uzun süreli (aylık ve üzeri) kiralamalarda ara kontrol takvimi teslimat sırasında birlikte planlanır; bu sayede kiralama süresi boyunca periyodik kontrol tarihi sahada sürpriz olarak çıkmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzun koridorları dar, hangi makaslı platform sınıfı sığar?",
                cevap:
                    "Koridor genişliği kritik ölçüdür; genelde 0,8-1 metre bandındaki dar şasili elektrikli makaslı platformlar standart raf aralıklarına sığar. Kesin sınıf, koridorunuzun net genişliği ve varsa raf ile tavan arasındaki geçiş yüksekliği ölçülerek belirlenir; bu iki ölçüyü paylaşırsanız uygun modeli birlikte netleştiririz.",
            },
            {
                soru: "Üretim hattımızı durdurmadan tavan üstü bakım yapabilir miyiz?",
                cevap:
                    "Genelde evet; dar şasili bir makaslı platform hat kenarına konumlandırılıp çalışma vardiya değişimi veya planlı bakım penceresine denk getirildiğinde üretim akışı kesintiye uğramaz. Hattınızın çalışma takvimini paylaşırsanız teslimat ve çalışma saatini bu pencereye göre planlarız.",
            },
            {
                soru: "Aynı sahada hem forklift hem makaslı platform çalışacak, güvenlik riski var mı?",
                cevap:
                    "İki makinenin trafiği ayrılmadan bir arada çalışması risklidir; bu yüzden makaslı platformun konumlandığı bölge huni veya bariyerle işaretlenir ve forklift operatörüne bu alanın sabit yükseltici bölgesi olduğu bildirilir. Teslimat sırasında iki makinenin de yer ve saat planı tek bir brifingle birlikte verilir.",
            },
            {
                soru: "Elektrikli makaslı platform açık sahada çalışabilir mi?",
                cevap:
                    "Düz ve sağlam zeminli açık sahalarda çalışabilir, ancak elektrikli modeller genelde tüm tekerden çekişli değildir ve düzensiz veya eğimli zeminde zorlanır. Uzun mesafeli, düzensiz zeminli açık saha işlerinde dizel/tüm tekerden çekişli sınıf daha güvenli sonuç verir. Sahanızın zemin durumunu paylaşırsanız doğru sınıfı önereriz.",
            },
            {
                soru: "Platforma kaç kişi ve ne kadar malzeme çıkabilir?",
                cevap:
                    "Bu, makinenin nominal kapasitesine bağlıdır ve kişi sayısı ile malzeme ağırlığı birlikte hesaba katılır; iki kişi artı ağır bir malzeme yükü, tek kişilik hesapla seçilmiş bir platformda güvenli değildir. Taşınacak kişi sayısını ve malzemenin yaklaşık ağırlığını paylaşırsanız kapasitesi yeterli modeli birlikte belirleriz.",
            },
            {
                soru: "Forklift ve makaslı platformu aynı gün, tek araçla teslim alabilir miyiz?",
                cevap:
                    "Evet, aynı proje kapsamında ikisine de ihtiyaç varsa tek teslimatla birleştiriyoruz; bu hem lojistik maliyeti düşürür hem saha girişinde tek kayıt-tek brifing yeterli olur. Hangi makinenin hangi bölgede, hangi saatte çalışacağını içeren kısa bir plan teslimat öncesi birlikte hazırlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platform sınıflarının (dar/geniş şasi, elektrikli/dizel) çalışma yüksekliği bandı ve tipik ortam uygunluğu sektör standardı teknik bilgidir; forklift ile birleşik teslimat ve saha paylaşım yaklaşımı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Manlift Kiralama: Manisa OSB'de Forklift ve Yükseltici Filosunu Tek Noktadan Yönetmek",
        giris:
            "\"Manlift\" kelimesi Türkiye'deki sanayi sahalarında günlük dilde tek bir makine tipini değil, yükseğe erişim sağlayan platform ailesinin tamamını (makaslı, eklemli, teleskopik) tarif etmek için kullanılır ve çoğu zaman forklift ihtiyacıyla aynı anda, aynı proje kapsamında gündeme gelir — yeni bir üretim hattı kurulumunda hem malzeme taşınır hem tavan seviyesinde montaj yapılır, bir tesis taşınmasında hem paletler hareket eder hem raf üstü sökme-takma işi çıkar. manisaforklift.com'da manlift kiralamayı ayrı bir hizmet gibi değil, forklift filomuzla aynı çatı altında yönetilen tek bir operasyon olarak kurguluyoruz: tek irtibat noktası, tek teslimat planı, gerektiğinde tek faturayla forklift ve manlift'i aynı sahaya koordine ediyoruz. Bu sayfa, manlift kiralamanın Manisa OSB'de en sık hangi proje tiplerinde talep edildiğini, kısa süreli/acil ihtiyaç ile planlı proje ihtiyacı arasındaki farkı, doğru makine ailesinin nasıl seçildiğini ve forklift-manlift kombinasyonunun tek teslimatla nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Manlift bir makine adı değil, ihtiyaç tarifidir",
                metin:
                    "Bir firma \"manlift lazım\" dediğinde genelde aklındaki iş, belirli bir yükseklikte belirli bir işi yapmaktır — hangi makine ailesinin (makaslı, eklemli, teleskopik) bu işe uygun olduğu henüz netleşmemiştir. Bu yüzden manlift talebi geldiğinde ilk adım makine modelini konuşmak değil, işin ne olduğunu, hangi yükseklikte ve hangi zeminde yapılacağını netleştirmektir; makine ailesi bu bilgiden sonra belirlenir.",
            },
            {
                baslik: "Kısa süreli/acil ihtiyaç ile planlı proje ihtiyacı farklı yönetilir",
                metin:
                    "Ani bir arıza sonrası birkaç günlük acil manlift ihtiyacında öncelik hızlı teslimat ve sahada hazır bulunan makine sınıflarından seçim yapmaktır; planlı bir yatırım projesinde (yeni hat kurulumu, çatı altı tesisat, bina genişletme) ise makine ailesi ve sayısı, proje takvimine göre haftalar öncesinden planlanır. İki senaryo da manisaforklift.com üzerinden yönetilir, ancak teslimat hızı ve makine rezervasyonu farklı bir sırayla ilerler.",
            },
            {
                baslik: "Forklift ve manlift aynı projede birlikte çalıştığında koordinasyon tek elden yürür",
                metin:
                    "Yeni hat kurulumu gibi projelerde forklift ekipman ve komponentleri sahaya taşırken, manlift montaj ekibini tavan seviyesine çıkarır; bu iki makinenin aynı koridorda, aynı zaman diliminde çalışması saha trafiğini karmaşıklaştırabilir. Tek tedarikçiden gelen forklift ve manlift, aynı teslimat planına ve aynı saha brifingine dahil edildiği için trafik çakışması teslimat öncesinde çözülür, sahada değil.",
            },
            {
                baslik: "Makine ailesi seçimi: erişim şekli belirleyicidir",
                metin:
                    "Sabit bir noktada, geniş bir sepetle dikey çalışma gerekiyorsa makaslı platform; engelli bir zeminde veya yandan/üstten dönerek erişim gerekiyorsa eklemli platform (boom lift); çok dar bir geçişten girip geniş bir alanda çalışmak gerekiyorsa örümcek (spider) platform tercih edilir. Manlift talebi geldiğinde bu üç aileden hangisinin işe uyduğu, sahanın erişim şekli ve engel durumu görülerek belirlenir.",
            },
            {
                baslik: "Sözleşme yapısı: proje bazlı mı, sürekli mi",
                metin:
                    "Tek seferlik bir proje için manlift kiralaması günlük/haftalık bazda, proje bitince sona eren bir sözleşmeyle yapılır; tesiste düzenli aralıklarla tekrar eden bakım-onarım ihtiyacı varsa aylık çerçeve anlaşma daha uygun maliyetli olur ve makine önceliği garanti altına alınır. Hangi yapının uygun olduğu, ihtiyacın tek seferlik mi yoksa tekrarlayan mı olduğuna göre teslimat öncesi netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proje tipine göre manlift ihtiyacı ve tipik makine ailesi",
                paragraflar: [
                    "Aşağıdaki tablo, Manisa OSB'deki tipik proje senaryolarına göre manlift talebinin nasıl şekillendiğini özetler; kesin makine ailesi sahanın erişim ve zemin koşuluyla doğrulanır.",
                ],
                tablo: {
                    basliklar: ["Proje tipi", "Tipik süre", "Öne çıkan makine ailesi", "Forklift ile birlikte mi?"],
                    satirlar: [
                        ["Yeni üretim hattı kurulumu", "Haftalar (planlı)", "Makaslı + eklemli", "Evet, birlikte"],
                        ["Acil arıza/tavan bakımı", "1-3 gün (acil)", "Dar şasili makaslı", "Genelde hayır"],
                        ["Tesis taşınması", "Günler-haftalar", "Makaslı", "Evet, yoğun"],
                        ["Çatı altı / dış cephe tesisat", "Değişken", "Eklemli / örümcek", "Duruma göre"],
                    ],
                },
            },
            {
                baslik: "Tek irtibat noktasının getirdiği pratik fayda",
                paragraflar: [
                    "Bir projede hem forklift hem manlift gerektiğinde iki ayrı tedarikçiyle görüşmek, iki ayrı teslimat takvimi ve iki ayrı fatura yönetmek anlamına gelir; bu da saha koordinasyonunu zorlaştırır. manisaforklift.com'da tek irtibat noktası üzerinden hem forklift hem manlift talebi alınır, teslimat aynı araçla veya aynı gün içinde planlanır ve saha brifingi bir kez verilir.",
                    "Bu yaklaşım özellikle birden fazla makinenin aynı anda farklı bölgelerde çalıştığı büyük projelerde zaman kazandırır; her makine için ayrı ayrı koordinasyon yapmak yerine tek bir teslimat-çalışma takvimi üzerinden ilerlenir.",
                ],
            },
            {
                baslik: "Operatör ve belge durumu, makine ailesine göre değişir",
                paragraflar: [
                    "Manlift ailesindeki her makine türü (makaslı, eklemli, teleskopik) kendi kullanım özelliğine sahiptir ve operatör belgesi bu türe göre kontrol edilir; bir tür için yeterlilik belgesi olan bir operatör otomatik olarak başka bir tür için yetkili sayılmaz. Operatörlü kiralama talep edildiğinde, gelecek operatörün belgesi kullanılacak makine ailesiyle eşleştirilerek teslimat öncesi doğrulanır.",
                    "Operatörsüz kiralamada ise tesisin kendi personelinin ilgili makine ailesi için belgesi olup olmadığı, teslimat öncesi sorulur; belgesiz personelle teslimat yapılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift derken tam olarak hangi makineyi kastediyorsunuz?",
                cevap:
                    "Manlift, tek bir makine modelini değil, yükseğe erişim sağlayan platform ailesinin tamamını (makaslı, eklemli/boom, örümcek) tarif eden genel bir terimdir. Talebiniz geldiğinde önce işin ne olduğunu ve hangi yükseklik-erişim şeklinde yapılacağını netleştiriyoruz, doğru makine ailesi bu bilgiden sonra belirleniyor.",
            },
            {
                soru: "Yeni hat kurulumu projemizde hem forklift hem manlift lazım, ayrı ayrı mı kiralamamız gerekiyor?",
                cevap:
                    "Hayır, bu tür projelerde forklift ve manlift'i tek irtibat noktasından, mümkünse aynı teslimat planıyla koordine ediyoruz; bu hem lojistik maliyeti düşürür hem saha trafiği çakışmasını teslimat öncesinde çözer. Proje takviminizi ve hangi işlerin hangi sırayla yapılacağını paylaşırsanız birleşik bir teslimat planı çıkarırız.",
            },
            {
                soru: "Acil bir arıza çıktı, birkaç günlüğüne manlift lazım; ne kadar sürede teslim edersiniz?",
                cevap:
                    "Acil/kısa süreli taleplerde öncelik hızlı teslimattır; sahada hazır bulunan makine sınıflarından işinize uygun olanı hızlıca değerlendirip planlarız. Arızanın türünü ve gereken çalışma yüksekliğini paylaşırsanız uygun makineyi ve teslimat süresini netleştiririz.",
            },
            {
                soru: "Tesisimizde manlift ihtiyacı düzenli tekrarlıyor, her seferinde ayrı mı anlaşma yapmalıyız?",
                cevap:
                    "Hayır, tekrarlayan ihtiyaçlarda aylık çerçeve anlaşma daha uygun maliyetli olur ve makine önceliğinizi garanti altına alır; her seferinde yeniden görüşme yapmanız gerekmez. İhtiyacınızın sıklığını paylaşırsanız çerçeve anlaşma koşullarını birlikte netleştiririz.",
            },
            {
                soru: "Makaslı, eklemli veya örümcek platformdan hangisi bize uygun, nasıl karar veriyorsunuz?",
                cevap:
                    "Karar, sahanın erişim şekline göre verilir: sabit noktada geniş sepetle çalışacaksanız makaslı, engelli zeminde veya yandan-üstten dönerek erişim gerekiyorsa eklemli, dar bir geçişten girip geniş alanda çalışmak gerekiyorsa örümcek platform tercih edilir. Sahanızın erişim ve engel durumunu tarif ederseniz uygun aileyi birlikte belirleriz.",
            },
            {
                soru: "Operatörümüzün belgesi forklift için geçerli, manlift için de yeterli mi?",
                cevap:
                    "Hayır, manlift ailesindeki her makine türü kendi yeterlilik belgesini gerektirir; forklift belgesi otomatik olarak manlift kullanımına yetki vermez. Operatörlü kiralama talep ederseniz gelecek operatörün belgesini kullanılacak makine türüyle eşleştirerek teslimat öncesi kontrol ederiz; kendi personelinizle çalışacaksanız belge durumunu teslimat öncesi sorarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. \"Manlift\" teriminin Türkiye sanayi sahalarında yükseğe erişim platform ailesinin genel adı olarak kullanılması ve makine ailesi (makaslı/eklemli/örümcek) ayrımı sektör standardı bilgidir; tek irtibat noktası ve birleşik teslimat yaklaşımı firma pratiğimizdir. Tesis adı veya rakam uydurulmadı.",
    },
};
