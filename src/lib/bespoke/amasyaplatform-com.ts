// ═══════════════════════════════════════════════════════════════════════════
// amasyaplatform.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Amasya'da GIDA ve MEYVE İŞLEME sanayine yönelik platform kiralama.
// Açı: ilin tarım-gıda kimliği — meyve işleme ve soğuk hava depoları, gıda
// tesislerinin hijyen disiplini, Merzifon'un sanayi-havalimanı kuşağı,
// Suluova'nın besicilik-et entegre tesisleri, Yeşilırmak vadisindeki dar
// kent dokusunun erişim kısıtları ve Tokat yönündeki çevre il servisi.
//
// ⚠️ Amasya için ilk elle yazılmış dosya. Her sayfa kendi ilçesinin üretim
// karakteriyle yazılır; sayfalar arası cümle/kalıp tekrarı YASAK.
//
// Bilgi kuralı: tesis adı, firma adı, kapasite ve rakam uydurulmaz. İlin
// meyvecilik-besicilik kimliği, Yeşilırmak vadisi coğrafyası ve Merzifon
// havalimanının varlığı kamuya açık genel bilgidir.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const AMASYAPLATFORM_COM: Record<string, BespokeIcerik> = {
    "bolge:amasya-osb": {
        h1: "Amasya OSB'de Gıda Tesisleri ve Soğuk Depolar İçin Platform Kiralama",
        giris:
            "Amasya Organize Sanayi Bölgesi'nde çalışan bir platform, çoğu ilde olduğu gibi genel amaçlı bir yükseklik makinesi değildir; burada makinenin gireceği hacimlerin büyük kısmı gıda üretimi yapan, ürünün açıkta işlendiği veya soğukta tutulduğu alanlardır. Meyve tasnif ve paketleme hatları, soğuk hava depolarının yüksek raf koridorları, ambalaj hatlarının üzerinden geçen taşıma konveyörleri, tavana asılı soğutucu üniteler ve aydınlatma armatürleri — bu ekipmanların tamamı yılda birkaç kez elden geçmek zorundadır ve hiçbirine merdivenle güvenli erişilemez. Bölgede en çok tercih edilen sınıf akülü makaslı platformlardır: egzoz gazı üretmedikleri için işlenmiş gıdanın açıkta bulunduğu hacimlere girebilir, izli lastik bırakmadıkları için epoksi zeminde iz yapmaz ve dar koridorda manevra kabiliyetiyle raf aralarına sığarlar. Bu sayfa, Amasya OSB'deki gıda ve depolama tesislerinde platformun hangi işlerde, hangi kurallarla ve hangi mevsim penceresinde kullanıldığını anlatır.",
        maddeler: [
            {
                baslik: "Soğuk hava depolarında evaporatör ve tavan ekipmanı bakımı",
                metin:
                    "Meyve saklayan bir deponun kalbi, tavana asılı soğutucu üniteleridir: kanatçık kirlenmesi soğutma verimini düşürür, karlanma ve buz kütlesi hem enerji tüketimini artırır hem damlama yapar, fan motorlarının yatak sesi zamanında dinlenmezse sezon ortasında arıza olarak döner. Bu ünitelerin tamamı yerden birkaç metre yükseklikte ve raf hattının üstündedir. Sezon öncesi bakımda platform, depo boşken kısa bir pencerede tüm üniteleri sırayla dolaşır; depo dolduktan sonra aynı erişim çok daha zorlaşır ve bazı noktalar tamamen kapanır.",
            },
            {
                baslik: "Tasnif ve paketleme hatlarının üstündeki mekanik erişim",
                metin:
                    "Meyve tasnif tesislerinde ürün, kabul noktasından paketleme ağzına kadar bir hat üzerinde ilerler ve bu hattın üstü mekanik-elektrik ekipmanla doludur: taşıma bantlarının üst tamburları, kamera ve sensör grupları, hava üfleme başlıkları, kablo tavaları. Hat çalışırken üstünde çalışılamaz; duruş penceresi kısadır ve genellikle vardiya sonuna sıkışır. Akülü makaslı platform bu pencereyi verimli kullanır — kurulum süresi istemez, hat aksı boyunca ilerler ve iş bittiğinde hattı boşaltıp çıkar. Kısa duruşta iskele kurmak, duruşun kendisinden uzun sürer.",
            },
            {
                baslik: "Gıda hacimlerinde hijyen ve kontaminasyon kuralları",
                metin:
                    "Ürünün açıkta bulunduğu alanda çalışan her ekipman, gıda güvenliği prosedürünün kapsamına girer. Uygulamada bunun karşılığı somuttur: makine hacme girmeden önce dış temizliği yapılır, tekerlek yüzeyleri silinir, çalışılacak alanın altındaki ürün ve ambalaj kaldırılır ya da örtülür, cıvata-somun gibi düşebilecek küçük parçalar sayımlı olarak alınır ve iş sonunda tekrar sayılır. Yağ sızdırma riski olan hidrolik noktaların kontrolü işe başlamadan yapılır. Bu prosedürleri işletmenin kalite biriminin hatırlatmasını beklemeden uygularız; gıda tesisinde erişim hizmeti, hijyen disiplininin bir parçasıdır.",
            },
            {
                baslik: "Yüksek raflı depolarda koridor genişliği kısıtı",
                metin:
                    "Depolamanın dikeye taşındığı tesislerde raf koridorları, forklift dönüş yarıçapına göre daraltılmıştır ve bu genişlik platform seçiminin en sert kısıtıdır. Standart makaslı sınıf bazı koridorlara girer ama bazılarında dönüş yapamaz; bu durumlarda dar şasili modeller veya dikey mast tipi platformlar devreye girer. Keşifte sorduğumuz ilk üç soru koridor genişliği, raf üst kotu ve zemin cinsidir; bu üçü bilinmeden gönderilen makine sahada geri döner. Ölçüleri paylaşan tesise doğru sınıf ilk seferde gider.",
            },
            {
                baslik: "Hasat sezonuna göre bakım penceresinin planlanması",
                metin:
                    "Tarıma bağlı bir sanayide takvimi üretici değil mevsim belirler. Meyve alım dönemi başladığında tesis günün her saati çalışır ve bakım için makine sokmak neredeyse imkânsız hâle gelir; buna karşılık sezon dışı aylar, işletmenin bütün yüksek erişim işlerini tek seferde toplayabileceği geniş bir pencere sunar. Amasya OSB'deki müşterilerimizle yerleşik çalışma biçimimiz budur: sezon kapanışında bir bakım listesi çıkarılır, makine birkaç günlüğüne tesise verilir ve depo-hat-tavan kalemleri sırayla kapatılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Amasya OSB'de tesis hacmine göre platform eşleşmesi",
                paragraflar: [
                    "Bölgedeki gıda ve depolama tesislerinde en sık karşılaştığımız hacim tipleri, o hacmin belirleyici kısıtı ve buna uygun makine sınıfı aşağıdaki tabloda toplanmıştır. Kesin seçim her zaman yerinde ölçümle kesinleşir.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Belirleyici kısıt", "Uygun sınıf", "Çalışma penceresi"],
                    satirlar: [
                        ["Soğuk hava deposu", "Raf koridoru + düşük sıcaklık", "Dar şasili akülü makaslı", "Depo boşken"],
                        ["Tasnif-paketleme salonu", "Ürün açıkta, hat duruşu kısa", "Akülü makaslı, iz bırakmayan", "Vardiya arası"],
                        ["Ham madde kabul alanı", "Yüksek tavan, araç trafiği", "Akülü makaslı orta sınıf", "Alım dışı saatler"],
                        ["Kuru ambar / ambalaj deposu", "Yüksek raf, dar dönüş", "Dikey mast platform", "Esnek"],
                        ["Tesis dış cephe ve çatı", "Zemin ve hava koşulu", "Dizel eklemli", "Kuru mevsim"],
                    ],
                },
            },
            {
                baslik: "Soğukta çalışmanın makineye ve ekibe etkisi",
                paragraflar: [
                    "Soğuk hava deposunun içinde geçen bir iş, normal bir depo işinden farklı yürür. Düşük sıcaklık akü performansını düşürür — dışarıda bütün vardiyayı çıkaran bir makine, soğukta daha kısa sürede şarj ister; bu yüzden depo işlerini şarj planıyla birlikte kurar, uzun işlerde ara şarj penceresi bırakırız. Hidrolik yağ soğukta ağırlaşır, makine devreye alınmadan önce kısa bir ısınma turu yapılır. Ekip tarafında ise soğukta çalışma süresi bilinçli olarak sınırlanır: dikkat dağınıklığı, yüksekte yapılan işin en sinsi riskidir ve üşüyen bir operatör dikkatini erken kaybeder.",
                    "Bir başka pratik ayrıntı yoğuşmadır: soğuk depodan sıcak ortama çıkan makinenin yüzeyinde nem yoğuşur. Elektrikli aksamın bundan etkilenmemesi için giriş-çıkış sıklığı azaltılır, iş mümkün olduğunca tek seferde bitirilir. Bu nedenle depo işlerinde parça parça değil, liste hâlinde çalışmayı öneririz.",
                ],
            },
            {
                baslik: "Kiralamadan önce netleşmesi gereken tesis bilgileri",
                paragraflar: [
                    "Gıda tesisine platform göndermeden önce standart olarak istediğimiz bilgiler şunlardır: çalışılacak noktanın yerden yüksekliği, hacme giriş kapısının en-boy ölçüsü, zemin cinsi ve taşıma kapasitesi, koridor genişliği, alanda ürün bulunup bulunmayacağı ve tesisin uyguladığı giriş prosedürü. Bu liste uzun görünse de tamamı tek bir telefon görüşmesinde toplanır ve karşılığı büyüktür — sahaya doğru makinenin ilk seferde gitmesi, tesisin kaybedilmiş bir duruş penceresiyle karşılaşmaması demektir.",
                    "İlk kez çalıştığımız tesislerde bir de ön ziyaret öneririz. Yirmi dakikalık bir tur, kapı yüksekliğinden asansör kısıtına, rampanın eğiminden şarj noktasının konumuna kadar sonradan sorun çıkaracak ne varsa ortaya koyar. Bu tur için ücret talep etmeyiz; tesisi tanımak, sonraki her işi kolaylaştıran bir yatırımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk hava depomuzun içinde platform çalıştırabilir miyiz, makine soğuktan etkilenir mi?",
                cevap:
                    "Çalıştırabilirsiniz; akülü makaslı platformlar soğuk depo koşullarında yaygın olarak kullanılır. İki noktayı planlamak gerekir: akü kapasitesi düşük sıcaklıkta beklenenden hızlı tükenir, bu yüzden uzun işlerde ara şarj veya ikinci makine planı yaparız; hidrolik sistem ise soğukta ağırlaşır ve makinenin devreye alınmasında kısa bir ısınma turu gerekir. Ayrıca depodan dışarı sık çıkış, yoğuşma nedeniyle istenmez — işi liste hâlinde tek seferde bitirmek en sağlıklısıdır. Depo boşken çalışmak mümkünse en verimli senaryodur; dolu depoda raf üstü erişim ciddi biçimde kısıtlanır.",
            },
            {
                soru: "Üretim hattımız açıkken makine sokabilir miyiz, yoksa hattı durdurmalı mıyız?",
                cevap:
                    "Hattın tam üstünde yapılacak işlerde duruş şarttır — çalışan bandın veya dönen tamburun üzerinde platformdan çalışmak kabul edilebilir bir risk değildir ve düşebilecek bir el aletinin gıdaya karışması ayrı bir sorun doğurur. Buna karşılık hattın yanındaki duvar, aydınlatma veya havalandırma işleri, çalışma alanı bariyerlenerek üretim sürerken yapılabilir. Pratikte en verimli düzen, hat üstü kalemleri planlı duruş veya vardiya arası penceresine toplamaktır. Duruş öncesi malzeme ve ekip hazır olur, makine kapıda bekler ve pencere tam kullanılır.",
            },
            {
                soru: "Gıda üretim alanına giren makine için özel bir temizlik prosedürü uyguluyor musunuz?",
                cevap:
                    "Evet. Makine tesise girmeden dış yüzeyi ve özellikle tekerlek temas yüzeyleri temizlenir; hacme alınmadan önce hidrolik hatlarda sızıntı kontrolü yapılır ve gerekirse sepet altına damlama önleyici serilir. Çalışma alanının altındaki ürün, ambalaj ve ekipman kaldırılır veya örtülür. Kullanılacak el aletleri ve bağlantı elemanları iş öncesi sayılır, iş sonunda tekrar sayılır — küçük parçanın hatta düşmesi, gıda tesisinde en ciddiye alınan risklerden biridir. Tesisinizin kendi prosedürü daha kapsamlıysa ona uyarız; kalite biriminizin talimatı bizim listemizin üstündedir.",
            },
            {
                soru: "Depomuzun raf koridorları dar; hangi makine girer?",
                cevap:
                    "Karar üç ölçüyle verilir: koridorun net genişliği, makinenin dönüş yapması gerekip gerekmediği ve erişilecek üst kot. Koridorda yalnızca ileri-geri hareket edilecekse dar şasili makaslı modeller çoğu depoda çalışır; koridor içinde dönüş gerekiyorsa dikey mast tipi platformlar çok daha küçük alan ister ve tek kişilik işlerde idealdir. Raf üst kotu yüksekse dikey platformun erişim sınırına dikkat edilir. Bu üç ölçüyü ve zemin cinsini bize iletirseniz uygun sınıfı doğrudan söyleriz; emin olunamayan durumlarda yerinde ölçüm en garantili yoldur.",
            },
            {
                soru: "Bakım işlerimizi hangi dönemde planlamamızı önerirsiniz?",
                cevap:
                    "Tarıma bağlı bir tesisseniz cevap nettir: alım ve işleme sezonunun dışında. Sezon başladıktan sonra hem tesisin duruş toleransı sıfıra iner hem çalışma alanları ürünle dolar; aynı iş iki kat sürede ve daha yüksek riskle yapılır. Sezon kapanışında bir bakım listesi çıkarmanızı, tavan ekipmanı, aydınlatma, havalandırma, çatı ve depo kalemlerini tek listede toplamanızı öneririz. Makine birkaç günlüğüne tesiste kalır ve liste sırayla kapatılır — bu düzen hem toplam kiralama maliyetini hem nakliye kalemini belirgin düşürür.",
            },
            {
                soru: "Operatör sizden mi geliyor, kendi personelimiz kullanabilir mi?",
                cevap:
                    "İki seçenek de mümkündür. Makineyi kendi ekibiniz kullanacaksa kullanıcıların yüksekte çalışma ve platform kullanımına dair yeterliliğinin bulunması gerekir; teslimde makinenin kumanda düzeni, güvenlik donanımı, acil indirme prosedürü ve o modele özgü kısıtlar için saha eğitimi veririz ve teslim tutanağına işleriz. Operatörlü kiralamada ise makineyi kullanan bizim personelimiz olur, bakım işini yapan sizin ekibiniz sepette veya alanda çalışır. Gıda hacmine ilk kez makine sokan tesislere ilk işte operatörlü modeli öneririz; prosedürün nasıl işlediği bir kez birlikte görülür, sonraki işler kendi ekibinizle rahat yürür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Amasya'nın meyvecilik ve gıda işleme ağırlıklı üretim kimliği kamuya açık genel bilgidir; soğukta akü davranışı ve gıda hacmi prosedürleri sektör geneli teknik bilgi, bakım penceresi düzeni firma pratiğidir.",
    },

    "bolge:amasya-merkez": {
        h1: "Amasya Merkezde Dar Sokak ve Tarihi Doku Koşullarında Platform Kiralama",
        giris:
            "Amasya merkezinin şehir planı, Türkiye'de az sayıda ilde görülen bir kısıt üretir: şehir, Yeşilırmak'ın iki yakasında dar bir vadi tabanına sıkışmıştır ve arkasında dik kaya yamaçları yükselir. Bu coğrafya, kent içi erişim işlerinin karakterini doğrudan belirler — sokaklar dar, yapılar bitişik, nehir kıyısındaki tarihi konak dokusu hassas, araç park yoğunluğu bütün gün yüksektir. Merkezdeki işlerimiz de bu tabloya göre şekillenir: otel ve pansiyona dönüşmüş konakların cephe ve saçak bakımları, çarşı esnafının tabela ve aydınlatma işleri, kamu binalarının dış cephe onarımları, kent aydınlatması ve etkinlik kurulumları. Buradaki asıl mesele makinenin yüksekliği değil, makinenin sahaya girip girememesidir; doğru iş, sokağa sığan en uygun makineyle yapılan iştir. Bu sayfa merkezdeki kısıtları ve bunların nasıl aşıldığını anlatır.",
        maddeler: [
            {
                baslik: "Vadi tabanındaki dar sokaklarda makine girişi",
                metin:
                    "Merkezin eski dokusunda birçok sokak, bir aracın ancak geçebileceği genişliktedir ve iki tarafı park hâlindeki araçlarla daralır. Böyle bir sokakta iş almadan önce güzergâh yürüyerek çıkarılır: nakliye aracının duracağı nokta, makinenin indirileceği alan ve makinenin kendi yürüyüşüyle gideceği mesafe belirlenir. Çoğu durumda çözüm makineyi sokak ağzında indirip kendi hareketiyle sahaya götürmektir. Kompakt sınıf makineler bu senaryo için tasarlanmıştır; büyük makineyle ısrar etmek, çoğu zaman işin hiç yapılamaması demektir.",
            },
            {
                baslik: "Tarihi konak ve tescilli yapılarda hassas çalışma",
                metin:
                    "Nehir kıyısındaki geleneksel konak dokusu, kentin en bilinen görüntüsüdür ve bu yapıların bakımı sıradan bir cephe işi değildir. Ahşap çıkmalar, alaturka kiremitli saçaklar ve sıvalı yüzeyler darbeye toleranssızdır; makinenin yaklaşma mesafesi, bom hareketinin hızı ve sepetin temas riski önceden planlanır. Tescilli yapılarda uygulama izni ve koruma kurulu süreci mülk sahibinin sorumluluğundadır; biz erişim tarafını, işin izin verilen kapsamı dışına taşmadan kurarız. Bu yapılarda acele etmemek, işin kendisi kadar önemlidir.",
            },
            {
                baslik: "Çarşı esnafında tabela, aydınlatma ve tente işleri",
                metin:
                    "Merkez çarşının işleri küçük hacimlidir ama sıktır: tabela değişimi, ışıklı harf onarımı, cephe aydınlatması, tente ve markiz montajı, dükkân önü kamera ayarı. Bu işler tek başına ele alındığında nakliye bedeli işin kendisinden pahalı çıkabilir. Çözümümüz sıralı tur düzenidir — aynı sokakta veya aynı hafta içinde biriken talepler tek güne toplanır, makine bir kez getirilir ve dükkân dükkân ilerler. Tarih konusunda esnek olan esnafa bu düzen kayda değer bir maliyet farkı sağlar.",
            },
            {
                baslik: "Trafik ve yaya yoğunluğunun çalışma saatine etkisi",
                metin:
                    "Vadi tabanındaki ana aks, gün boyu hem araç hem yaya trafiği taşır ve merkez aynı zamanda ziyaretçi çeken bir kent dokusudur. Cephede çalışan bir makine, kaldırımı kapattığı anda yaya akışını sokağa iter — bu, işin en büyük riskidir. Bu yüzden merkez işlerini sabahın erken saatlerine veya trafiğin seyreldiği dilimlere planlar, çalışma alanını bariyer ve uyarı bandıyla net biçimde ayırır, gerektiğinde yaya yönlendirmesi için ayrı bir görevli konumlandırırız. Kapatma gerektiren işlerde belediye ve zabıta koordinasyonunu önceden yürütürüz.",
            },
            {
                baslik: "Kamu binaları ve kent mobilyalarında bakım işleri",
                metin:
                    "Merkezdeki resmî binalar, okullar ve kültür yapıları düzenli dış bakım ihtiyacı üretir: cephe temizliği, bayrak direği ve tabela işleri, dış aydınlatma armatürlerinin değişimi, kış öncesi oluk kontrolü. Kamu işlerinde belirleyici olan çalışma saatleri ve evrak düzenidir — mesai içinde bina kullanımı sürer, işin gürültülü kalemleri hafta sonuna veya mesai dışına kayar. Makine ve operatör belgelerinin, periyodik kontrol raporlarının işe başlamadan teslim edilmesi standart uygulamamızdır; bu evraklar hazır olduğunda süreç gecikmeden başlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkezdeki iş tiplerine göre erişim çözümü",
                paragraflar: [
                    "Kent merkezinde karşılaştığımız başlıca iş tipleri, bu işlerin belirleyici kısıtı ve uyguladığımız erişim çözümü aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Belirleyici kısıt", "Erişim çözümü", "Zamanlama"],
                    satirlar: [
                        ["Konak cephe-saçak bakımı", "Hassas yüzey, dar sokak", "Kompakt eklemli, yavaş yaklaşma", "Hafta içi sabah"],
                        ["Çarşı tabela-aydınlatma", "Küçük hacim, sık talep", "Sıralı tur düzeni", "Toplanan gün"],
                        ["Kamu binası dış bakım", "Bina kullanımda", "Bariyerli alan + evrak seti", "Mesai dışı"],
                        ["Kent aydınlatma ve etkinlik", "Yaya yoğunluğu", "Yönlendirme görevlisi", "Erken saat"],
                        ["Nehir kıyısı yapıları", "Kısıtlı manevra alanı", "Sokak ağzında indirme", "Trafik seyrelmesi"],
                    ],
                },
            },
            {
                baslik: "Dar dokuda doğru makine, en büyük makine değildir",
                paragraflar: [
                    "Kent merkezindeki taleplerde en sık düzelttiğimiz beklenti şudur: müşteri erişilecek yüksekliğe bakıp mümkün olan en uzun bomlu makineyi ister. Oysa dar sokakta belirleyici olan bom uzunluğu değil şasi genişliği, dönüş yarıçapı ve makinenin dengeleme ayaklarını açabileceği alandır. Sokağa sığmayan bir makine, kâğıt üzerinde yeterli olsa bile işi yapamaz. Bu yüzden keşifte önce geometriyi ölçer, sonra erişimi çözeriz — ve gerektiğinde işi bölmeyi öneririz: cephenin sokağa bakan kısmı küçük makineyle, avluya veya arka bahçeye bakan kısmı oradan kurulan ikinci bir düzenle çalışılır.",
                    "Bu yaklaşımın müşteriye doğrudan getirisi vardır: yanlış makinenin boşa gelip döndüğü bir gün, hem nakliye bedeli hem kaybedilmiş iş günü demektir. Ölçüyle gelen talep, ilk seferde doğru makineyle karşılanır.",
                ],
            },
            {
                baslik: "Yağmurlu ve karlı günlerde merkez işleri",
                paragraflar: [
                    "İç Karadeniz'e açılan bu vadide kış, ovalık illere göre daha erken hissedilir ve yüksekte çalışma açısından belirleyici olan iki koşul yağış ile rüzgârdır. Sepette çalışırken rüzgâr, makinenin kendi sınırından önce ekibin kontrolünü zorlar; yağış ise hem sepet zeminini hem elektrikli işleri riskli hâle getirir. Kışa giren aylarda merkez işlerini iki günlük hava penceresine göre planlar, sınırda kalan günlerde işi ertelemeyi tereddütsüz öneririz. Ertelenen bir gün, kazayla geçen bir günden her zaman ucuzdur.",
                    "Buna karşılık kış, bazı işler için doğru mevsimdir: yaprak dökümünden sonra yapılan oluk ve dere temizliği, çatı kenarı kontrolleri ve kar öncesi sabitleme turları kuru bir sonbahar gününde çok daha rahat yapılır. Merkezdeki müşterilerimize bu turu kasım öncesine planlamalarını öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sokağımız çok dar, kamyonet bile zor giriyor; makine gelebilir mi?",
                cevap:
                    "Çoğu durumda gelir ama düzeni önceden kurmak gerekir. Keşifte güzergâh yürüyerek çıkarılır: nakliye aracının duracağı en yakın uygun nokta, indirme alanı ve makinenin kendi yürüyüşüyle sahaya geleceği mesafe belirlenir. Akülü ve lastikli kompakt modeller sokak içinde kendi hareketiyle yol alabilir; bu, dar dokuda en sık kullandığımız yöntemdir. Sokak ağzında bile uygun bir indirme alanı yoksa daha küçük nakliye aracıyla ve daha küçük makineyle alternatif plan çıkarırız. Kesin cevabı sokağı görmeden vermeyiz — fotoğraf ve yaklaşık genişlik bilgisi ilk değerlendirme için yeterlidir.",
            },
            {
                soru: "Tarihi bir konağın cephesinde çalışılacak; yapıya zarar verme riski var mı?",
                cevap:
                    "Risk yönetilebilir ama yok sayılamaz, bu yüzden bu yapılarda çalışma düzeni farklıdır. Makine yapıya belirli bir güvenlik mesafesinde konumlandırılır, bom hareketleri düşük hızda ve gerektiğinde yer gözcüsü eşliğinde yapılır, sepetin yapıya temas edebileceği noktalara koruyucu takoz uygulanır. Zemin tarafında da dikkat gerekir: dengeleme ayakları altına yük dağıtıcı plaka konur, tarihi taş döşeme veya bahçe zemininde nokta yükü yayılır. Uygulamanın kapsamı ve gerekiyorsa koruma kurulu izni mülk sahibinin sorumluluğundadır; biz izin verilen kapsam içinde, o kapsamı zorlamadan çalışırız.",
            },
            {
                soru: "Dükkânımın tabelasını değiştireceğiz, birkaç saatlik iş; yine de tam gün mü ödeyeceğiz?",
                cevap:
                    "Küçük hacimli işler için sıralı tur düzenimiz tam bu soruna karşı kuruldu. Merkezdeki kısa işleri aynı güne toplarız — makine bir kez getirilir, sokak sokak ilerler ve nakliye maliyeti işler arasında bölüşülür; siz de tam gün değil, işinizin gerçek süresine yakın bir bedel ödersiniz. Bunun tek koşulu tarih esnekliğidir: talebinizi 'şu hafta içinde uygun olan gün' notuyla iletirseniz ilk uygun tura eklenir. Belirli bir güne sabitlenmiş acil işlerde ise tekil sevkiyat gerekir ve fiyat buna göre oluşur; iki seçeneği de baştan açıkça söyleriz.",
            },
            {
                soru: "Kaldırımı ve sokağı kapatmamız gerekirse izin işlerini kim yürütür?",
                cevap:
                    "Yol veya kaldırım işgali gerektiren işlerde belediye ve zabıta koordinasyonunu biz yürütürüz; süreç, işin planlanan tarihinden makul bir süre önce başlatılır ve takvim buna göre kurulur. Kısa süreli, kaldırımı tamamen kapatmayan çalışmalarda genellikle bariyer ve yönlendirme yeterli olur. Tam kapatma gerektiren durumlarda çalışma saati de izin şartlarına göre belirlenir — merkezde bu genellikle erken sabah dilimi anlamına gelir. Sürecin kaç gün süreceğini önceden söyler, izin çıkmadan makineyi yola çıkarmayız; sahada beklemek kimsenin işine yaramaz.",
            },
            {
                soru: "Kışın da çalışıyor musunuz, yoksa baharı mı beklemeliyiz?",
                cevap:
                    "Kışın çalışırız ama iş tipine göre ayrım yaparız. Oluk ve dere temizliği, çatı kenarı kontrolü, sabitleme ve tespit turları gibi kalemler soğuk mevsimde bile rahat yapılır ve zaten doğru zamanı kış öncesidir. Buna karşılık boya, mastik ve yapıştırıcı gerektiren cephe uygulamaları düşük sıcaklıkta ve nemde tutmaz; bunları ilkbahara planlamak gerçekten daha doğrudur. Yüksekte çalışmanın kendi kısıtı ise rüzgâr ve yağıştır: sınırda kalan günlerde işi erteleriz. Talebinizi iletirken işin cinsini söylerseniz hangi mevsime uygun olduğunu doğrudan belirtiriz.",
            },
            {
                soru: "Apartmanımızın dış cephesinde nokta bir onarım var; birkaç dairelik bina için de hizmet veriyor musunuz?",
                cevap:
                    "Veriyoruz; merkezdeki işlerin önemli bölümü zaten bu ölçekte. Küçük binada dikkat ettiğimiz üç şey vardır: makineyi kuracağımız alanın (sokak, kaldırım veya bahçe) uygunluğu, bina önünde park eden araçların iş saatinde çekilmesi ve komşuların bilgilendirilmesi. Yönetici veya malikle bu üç kalemi önceden konuşuruz; hazırlığı yapılmış bir sahada iş, planlanan sürede biter. Fiyat tarafında ise bu tür işler için sıralı tur düzenimiz geçerlidir — tarih esnekliği tanıyabilirseniz maliyet belirgin şekilde düşer.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Amasya merkezinin Yeşilırmak vadisine sıkışmış dar kent dokusu ve nehir kıyısındaki tarihi konak mimarisi kamuya açık genel bilgidir; tur düzeni, keşif ve izin koordinasyonu firma pratiğidir.",
    },

    "bolge:merzifon": {
        h1: "Merzifon'da Sanayi ve Havalimanı Kuşağında Platform Kiralama",
        giris:
            "Merzifon, Amasya'nın sanayi ve lojistik ağırlığını en çok taşıyan ilçesidir ve bunun iki nedeni vardır: ovalık arazi, geniş tabanlı üretim ve depolama yapılarına elverişlidir; ilçedeki havalimanı ve karayolu bağlantıları ise bölgeyi çevresindeki illere göre lojistik olarak avantajlı kılar. Bu ikisi bir araya geldiğinde ortaya, merkez ilçedeki dar dokudan tamamen farklı bir çalışma ortamı çıkar — burada sorun makinenin sahaya sığması değil, sahanın büyüklüğüdür. Geniş açıklıklı üretim binaları, uzun depo blokları, yüksek tavanlı sevkiyat hacimleri ve açık alanda kurulu tesis altyapıları, hem uzun erişimli makineler hem de bir yerden diğerine hareket kabiliyeti ister. Merzifon işlerimizin ekseni buradan geçer: tesis içi yüksek erişim, dış cephe ve çatı işleri, açık sahadaki aydınlatma ve altyapı kalemleri. Bu sayfa ilçenin bu karakterine göre yazıldı.",
        maddeler: [
            {
                baslik: "Geniş açıklıklı üretim binalarında tavan erişimi",
                metin:
                    "Ovada kurulan tesislerin çoğu, sütun sayısını azaltan geniş açıklıklı çelik çatı sistemleriyle yapılır ve bu, çalışma açısından iki sonuç doğurur: tavan kotu yüksektir ve erişilecek noktalar birbirinden uzaktır. Aydınlatma armatürleri, havalandırma kanalları, yangın algılama hattı ve çatı taşıyıcılarına asılı ekipman bakımları bu hacimlerde yapılır. Doğru sınıf, hem gerekli yüksekliğe çıkan hem de tesis içinde kendi hareketiyle noktalar arasında yol alabilen bir platformdur; her nokta için makine indirip yeniden kurmak, işi gereksiz uzatır.",
            },
            {
                baslik: "Depo ve lojistik yapılarında sevkiyat ritmine uyum",
                metin:
                    "Lojistik bağlantısı güçlü bir ilçede depo yapıları yoğun çalışır ve bu tesislerde erişim işinin en büyük kısıtı, sevkiyat trafiğidir. Rampa önü ve manevra alanı hiçbir saatte kapatılamaz; bakım işleri, sevkiyatın seyreldiği dilimlere ya da hafta sonu penceresine yazılır. Depo içi işlerde ise raf koridorlarındaki forklift trafiğiyle çakışmamak için çalışma alanı geçici olarak kapatılır ve depo sorumlusuyla birlikte alternatif geçiş rotası belirlenir. Bu koordinasyonu biz talep ederiz; işletmenin lojistik planını bozmamak, işin bir parçasıdır.",
            },
            {
                baslik: "Açık sahada rüzgâr ve zemin koşulu",
                metin:
                    "Ovadaki tesislerin dış cephe, çatı ve saha aydınlatması işlerinde iki koşul belirleyicidir. Birincisi rüzgârdır: açık arazide rüzgâr, korunaklı kent dokusuna göre daha güçlü eser ve yüksek bomlu makinelerde çalışma sınırını hızlıca zorlar; bu yüzden açık saha işlerini hava tahminine göre planlarız. İkincisi zemindir — yeni yatırım parsellerinde ve tesis çevrelerinde henüz sertleşmemiş dolgu zemin sık karşılaşılan bir durumdur ve dengeleme ayakları altında yük dağıtıcı plaka kullanımını zorunlu kılar.",
            },
            {
                baslik: "Yeni yatırım parsellerinde montaj dönemi erişimi",
                metin:
                    "İlçenin gelişen sanayi alanlarında yapım hâlindeki tesisler, kendine özgü bir iş ailesi üretir: çelik konstrüksiyon montajında detay ve bağlantı işleri, cephe paneli montajında bitiş detayları, çatı ışıklıklarının kurulumu, tesisat askı sistemlerinin çekilmesi ve saha aydınlatma direklerinin devreye alınması. Bu dönemde platform, vinçle yapılan kaldırmadan ayrı bir iş görür — insan erişimini ve el işçiliğini taşır. Yüklenici ekiplere makine desteği verdiğimiz projelerde takvim kaymalarına göre süre uzatma ve daraltma esnekliğini baştan tanımlarız.",
            },
            {
                baslik: "Un, yem ve tarımsal işleme tesislerinde toz ortamı",
                metin:
                    "Tahıl ve yem işleyen tesislerin iç hacimlerinde toz, sadece temizlik meselesi değil çalışma koşuludur: yüzeylerde biriken ince toz kayganlık yaratır, elektrikli ekipmanın soğutmasını zorlar ve bazı hacimlerde toz-hava karışımı ayrı bir risk sınıfı oluşturur. Bu tesislerde çalışırken makinenin çalışma öncesi ve sonrası temizliği, filtrelerin kontrolü ve gerekiyorsa çalışma öncesi alan temizliği planın parçası olur. Silo ve elevatör çevresindeki yüksek erişim işlerinde tesisin kendi izin ve emniyet prosedürü esas alınır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merzifon'da saha tipi, kısıt ve makine sınıfı",
                paragraflar: [
                    "İlçedeki başlıca çalışma ortamları, o ortamın karakteristik kısıtı ve buna uygun makine sınıfı aşağıdaki tabloda toplanmıştır. Tabloyu keşif öncesi ön değerlendirme aracı olarak kullanırız.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Karakteristik kısıt", "Makine sınıfı", "Planlama notu"],
                    satirlar: [
                        ["Geniş açıklıklı üretim salonu", "Yüksek tavan, dağınık noktalar", "Akülü makaslı / eklemli", "Nokta listesi önceden çıkarılır"],
                        ["Depo ve sevkiyat hacmi", "Rampa trafiği kesilemez", "Akülü makaslı", "Sevkiyat boşluğu saatleri"],
                        ["Dış cephe ve çatı", "Rüzgâr ve zemin", "Dizel eklemli", "Hava penceresine bağlı"],
                        ["Açık saha aydınlatma", "Dolgu zemin", "Eklemli + yük dağıtıcı plaka", "Zemin kontrolü şart"],
                        ["Yapım hâlindeki tesis", "Takvim kayması", "Karma paket", "Esnek süre tanımı"],
                    ],
                },
            },
            {
                baslik: "Ovada rüzgâr: yüksekte çalışmanın görünmez sınırı",
                paragraflar: [
                    "Açık arazide yapılan yüksek erişim işlerinde en çok küçümsenen etken rüzgârdır. Sepet yükseldikçe rüzgârın etkisi katlanır; makinenin üretici tarafından tanımlanmış bir çalışma sınırı vardır ve bu sınır aşıldığında iş durdurulur — bu bir tercih değil, kullanım kuralıdır. Pratikte sorun, rüzgârın gün içinde değişmesidir: sabah sakin başlayan bir günde öğleden sonra çalışma penceresi kapanabilir. Bu yüzden açık saha işlerinde sabah dilimini önceliklendirir, rüzgârlı sezonda kritik kalemleri güne yayarız.",
                    "Rüzgârın ikinci etkisi işin kendisindedir: panel, levha ve tabela gibi geniş yüzeyli malzemeler sepette taşınırken yelken etkisi yaratır ve hem operatörü hem yükü zorlar. Bu tür işlerde malzeme boyutuna göre çalışma sınırı, makinenin sınırından daha erken devreye girer. Bunu keşifte söyler, takvimi buna göre kurarız.",
                ],
            },
            {
                baslik: "Uzun süreli tesis işlerinde kiralama ekonomisi",
                paragraflar: [
                    "Merzifon'daki işlerin önemli bir kısmı tek günlük değildir: bir tesisin yıllık bakım listesi, bir yapım projesinin montaj dönemi veya bir depo modernizasyonu haftalara yayılır. Bu tür işlerde günlük kiralama mantığı ekonomik değildir; haftalık ve aylık düzende birim maliyet belirgin şekilde düşer ve nakliye kalemi tek sefere iner. Müşterilerimize önerimiz, işi başından bir süre tahminiyle planlamak ve tahmin tutmazsa uzatma koşullarını baştan konuşmaktır — sonradan yapılan uzatmalarda da fiyatın sabit kalması, birlikte çalışmanın en temel şartıdır.",
                    "Uzun süreli işlerde ikinci konu bakımdır: makine sahada kaldığı sürece periyodik kontrolleri ve rutin bakımı bizim sorumluluğumuzdadır ve bu, tesis çalışırken planlı biçimde yapılır. Arıza durumunda ikame makine planı da sözleşmede tanımlanır; uzun bir işte makinenin durması, kiralama bedelinden çok daha pahalı bir gecikme üretir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizin tavanı yüksek ve çalışılacak noktalar salonun her yerine dağılmış; nasıl planlamalıyız?",
                cevap:
                    "Böyle işlerde en verimli yöntem, önce nokta listesinin çıkarılmasıdır: hangi armatür, hangi kanal, hangi askı — mümkünse bir kroki üzerinde işaretlenmiş hâlde. Liste elimizde olduğunda makine seçimi ve rota planı birlikte yapılır; salon içinde kendi hareketiyle noktalar arasında gidebilen bir sınıf seçilir ve iş, salonun bir ucundan diğerine sistematik ilerler. Nokta listesi olmadan çalışıldığında en sık görülen kayıp, aynı bölgeye ikinci kez dönmektir. Liste ayrıca süreyi de öngörülebilir kılar — kaç günlük kiralama gerektiğini tahminle değil sayımla belirleriz.",
            },
            {
                soru: "Depomuzda sevkiyat hiç durmuyor; bakım işini nasıl sığdırırız?",
                cevap:
                    "Sevkiyatı durdurmadan çalışmanın yolu, alan ayrımıdır: çalışılacak bölge geçici olarak kapatılır, forklift ve personel için alternatif geçiş rotası belirlenir ve iş, depo sorumlusunun onayladığı bir sıra ile bölge bölge ilerler. Rampa önü ve manevra alanı hiçbir aşamada kapatılmaz. Sevkiyatın günün belirli saatlerinde yoğunlaştığı tesislerde, işin gürültülü veya alan kaplayan kalemlerini seyrek saatlere yazarız. Haftalık sevkiyat yoğunluk tablonuzu paylaşırsanız çalışma planını doğrudan onun üzerine kurar, sizden ek koordinasyon eforu istemeyiz.",
            },
            {
                soru: "Yeni parselimizde zemin henüz sıkışmadı; makine çalışabilir mi?",
                cevap:
                    "Dikkatle ve hazırlıkla çalışılır. Dolgu ve henüz oturmamış zeminde makinenin dengeleme ayakları noktasal olarak ciddi yük uygular; bu yükün yayılması için yük dağıtıcı plakalar kullanılır ve gerekirse ayak noktalarına geçici platform serilir. Yağmur sonrası yumuşamış zeminde ise iş ertelenir — batan bir ayak, makinenin devrilmesine giden en klasik senaryodur. Paletli veya arazi tipi şasili modeller bazı koşullarda avantaj sağlar. Keşifte zemini yerinde görmeyi tercih ederiz; fotoğraf ve zemin geçmişi (ne zaman dolgu yapıldı, sıkıştırıldı mı) ön değerlendirme için yeterlidir.",
            },
            {
                soru: "İnşaat hâlindeki tesisimiz için makineyi ne kadar süreyle kiralamalıyız?",
                cevap:
                    "Yapım projelerinde süreyi tam kestirmek zordur, bu yüzden kurduğumuz düzen esneklik üzerinedir: başlangıçta gerçekçi bir süre belirlenir, uzatma ihtiyacı doğarsa birim fiyat değişmeden uzatılır, iş erken biterse makine erken çekilir. Önemli olan bilginin akmasıdır — takvim kaydığında haber vermeniz yeterlidir, planı biz güncelleriz. Bir de şu tavsiyeyi veririz: montaj dönemi boyunca sahada tek bir makinenin sürekli kalması, her fazda yeniden makine getirmekten hem ucuz hem hızlıdır. Fazların ekipman ihtiyacı çok farklıysa faz bazlı değişim planı çıkarırız.",
            },
            {
                soru: "Un ve yem tesisinde toz yoğun; makine bu ortamda sorun çıkarır mı?",
                cevap:
                    "Toz yoğun hacimlerde makine kullanılabilir ama hazırlık gerekir. Elektrikli ve akülü modellerde soğutma ve filtre kontrolü işe başlamadan yapılır, çalışma sonrası temizlik ihmal edilmez; toz birikimi hem performansı düşürür hem uzun vadede arıza üretir. Asıl kritik konu tesisin kendi risk değerlendirmesidir: bazı hacimlerde toz-hava karışımı ayrı bir tehlike sınıfı oluşturur ve orada kullanılacak ekipman, tesisin patlamadan korunma dokümanına uygun olmak zorundadır. Bu değerlendirmeyi tesisin teknik ve İSG birimiyle birlikte yapar, uygun olmayan bir hacme makine sokmayız.",
            },
            {
                soru: "Makine sahada uzun süre kalacak; arıza olursa iş durur mu?",
                cevap:
                    "Uzun süreli işlerde bu senaryo baştan tanımlanır. Makine sahada kaldığı sürece periyodik kontrolleri ve rutin bakımı bizim sorumluluğumuzdadır ve bunlar iş akışını bozmayacak zamanlara planlanır. Arıza hâlinde önce yerinde müdahale denenir; iş kısa sürede çözülemiyorsa ikame makine gönderilir ve arızalı makine sahadan çekilir. İkame taahhüdünün kapsamı ve süresi sözleşmede yazılır, sözlü kalmaz. Uzun bir montaj veya bakım programında duran makinenin maliyeti kira bedeliyle ölçülmez — kaybedilen günle ölçülür, biz de planı bu gerçeğe göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Merzifon'un ovalık arazi yapısı, sanayi yoğunluğu ve ilçedeki havalimanının bölgeye kattığı lojistik bağlantı kamuya açık genel bilgidir; rüzgâr ve zemin uygulamaları sektör geneli teknik bilgi, kiralama düzeni firma pratiğidir.",
    },

    "bolge:suluova": {
        h1: "Suluova'da Besicilik ve Et Entegre Tesisleri İçin Platform Kiralama",
        giris:
            "Suluova, Amasya'nın hayvancılık ve buna bağlı gıda sanayisinin yoğunlaştığı ilçesidir; ilçenin ekonomik kimliği besicilik ve bu üretimi izleyen yem, et işleme ve soğuk zincir tesisleri etrafında şekillenmiştir. Yüksek erişim hizmeti açısından bu, ülkenin çoğu sanayi bölgesinden farklı bir çalışma ortamı demektir. Besi ahırlarının uzun ve yüksek çatıları, havalandırma fanları ve perde sistemleri, yem hazırlama ünitelerinin elevatör ve silo çevreleri, et işleme tesislerinin soğutulan ve düzenli yıkanan hijyenik hacimleri — bunların her biri farklı bir erişim problemi ve farklı bir kural seti getirir. Ortak paydaları ise nemdir: canlı hayvan barındıran ve düzenli yıkanan yapılarda ortam nemi sürekli yüksektir, bu da hem yapı elemanlarını hem içeri giren ekipmanı doğrudan etkiler. Bu sayfa Suluova'daki bu koşulları ve çalışma düzenini anlatır.",
        maddeler: [
            {
                baslik: "Besi ahırlarında çatı, fan ve perde sistemleri",
                metin:
                    "Modern besi yapılarının iklimlendirmesi mekanik olarak yönetilir: yan cephelerdeki perde sistemleri, mahya boyunca dizilen havalandırma açıklıkları ve fan grupları, hayvan konforunun doğrudan belirleyicisidir ve arızalandığında beklenemez. Bu ekipmanların tamamı yüksekte ve uzun bir yapının farklı noktalarına dağılmıştır. Ahır boyunca ilerleyebilen bir platform, fan motorlarının bakımını, perde mekanizmalarının ayarını ve çatı aydınlatmasının değişimini tek seansta toplar. İş, hayvanların bulunduğu bölmeye göre planlanır; boş bölme varsa oradan başlanır.",
            },
            {
                baslik: "Nem ve amonyak ortamında hızlanan korozyon",
                metin:
                    "Hayvan barınaklarının iç ortamı, çelik elemanlar için ağır bir korozyon ortamıdır: yüksek nem ve amonyak, galvaniz kaplamayı ve boyalı yüzeyleri normal sanayi yapılarından çok daha hızlı yorar. Bunun pratik sonucu, bu yapılarda çatı bağlantılarının, askı elemanlarının ve fan kaidelerinin daha sık kontrol edilmesi gerektiğidir. Yıllık kontrol turlarında sepetten yapılan gözle muayene, vidaların ve bağlantı noktalarının durumu ve pas ilerlemesinin haritası çıkarılır. Erken tespit edilen bir korozyon noktası boyayla durdurulur; geç kalınan nokta eleman değişimine gider.",
            },
            {
                baslik: "Yem hazırlama ünitelerinde silo ve elevatör çevresi",
                metin:
                    "Besi işletmesinin yanında çalışan yem hazırlama ünitesi, kendi yüksek erişim ihtiyacını üretir: elevatör kovalarının ve kayışlarının kontrolü, silo üstü kapak ve seviye sensörleri, taşıma helezonlarının askı noktaları, toz filtrelerinin bakımı. Bu işlerin çoğu, kapalı hacimlere ve toz yoğun ortamlara yakın yürür; tesisin kendi çalışma izni prosedürü esastır. Platform, silo çevresinde sabit merdiven bulunmayan noktalara güvenli erişim sağlar — bu yapılarda en sık görülen kötü pratik, dar sabit merdivenden gövdeye uzanarak çalışmaktır.",
            },
            {
                baslik: "Et işleme tesislerinde yıkanabilir hacim kuralları",
                metin:
                    "Et işleme hacimleri düzenli olarak yıkanan, soğutulan ve sıkı hijyen prosedürüyle yönetilen alanlardır. Buraya giren platformun karşılaması gereken şartlar farklıdır: temiz ve iz bırakmayan tekerlek, egzoz gazı üretmeyen akülü tahrik, hidrolik sızıntı riskine karşı kontrol ve gerekiyorsa koruyucu örtü. Çalışma alanının altındaki ürün ve ekipman kaldırılır, iş sonunda alan tesisin temizlik prosedürüne devredilir. Bu hacimlerde çalışma penceresi genellikle üretim sonrası temizlik vardiyasından önceki dilimdir; makine planı bu pencereye göre kurulur.",
            },
            {
                baslik: "Biyogüvenlik: sahaya girmenin kendi kuralı",
                metin:
                    "Canlı hayvan barındıran işletmelerde erişim hizmeti verirken en çok dikkat ettiğimiz konu, ekipmanın ve ekibin işletme dışından hastalık etkeni taşımamasıdır. İşletmelerin uyguladığı giriş prosedürleri — araç dezenfeksiyonu, kıyafet ve ayakkabı değişimi, ziyaretçi kayıt sistemi, bazı dönemlerde tam giriş kısıtı — bizim için tartışma konusu değil, uyulacak kuraldır. Makinenin bir başka hayvancılık işletmesinden geliyor olması özellikle önemlidir; bu durumda araç ve makine temizliği işletmenin isteğine göre yapılır ve planlama buna zaman ayırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Suluova'da yapı tipi, ortam koşulu ve erişim düzeni",
                paragraflar: [
                    "İlçedeki başlıca yapı tipleri, o yapının belirleyici ortam koşulu ve uyguladığımız erişim düzeni aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Ortam koşulu", "Erişim düzeni", "Öncelikli kural"],
                    satirlar: [
                        ["Besi ahırı", "Nem, amonyak, canlı hayvan", "Bölme bazlı ilerleme", "Biyogüvenlik prosedürü"],
                        ["Yem hazırlama ünitesi", "Toz, kapalı hacim yakınlığı", "Silo çevresi nokta erişimi", "Çalışma izni sistemi"],
                        ["Et işleme hacmi", "Soğuk, yıkanan yüzey", "Akülü, iz bırakmayan makine", "Hijyen prosedürü"],
                        ["Soğuk depo", "Düşük sıcaklık", "Şarj planlı çalışma", "Ürün altına girmeme"],
                        ["Dış çatı ve cephe", "Rüzgâr, korozyon", "Yıllık kontrol turu", "Erken korozyon tespiti"],
                    ],
                },
            },
            {
                baslik: "Hayvan varken çalışmak: stres ve gürültü yönetimi",
                paragraflar: [
                    "Ahır içinde hayvanlar varken yapılan çalışmanın gözden kaçan boyutu, hayvan üzerindeki stres etkisidir. Ani gürültü, alışılmadık hareket eden bir makine ve tepede çalışan insan, sürüde huzursuzluk yaratır; bu hem hayvan refahı hem işin güvenliği açısından yönetilmesi gereken bir durumdur. Uygulamada basit ama etkili kurallar işe yarar: mümkünse boş bölmeden başlanır, makine sabit ve yavaş hareket ettirilir, gürültülü kalemler yem verme gibi hayvanın zaten hareketli olduğu zamanlara denk getirilir ve işletme personelinin sürüyü yönlendirmesi beklenir.",
                    "İşletme sorumlusuyla önceden konuşulması gereken bir başka konu, çalışma sırasında hangi bölmenin boşaltılabileceğidir. Kısa süreli bir bölme değişimi, işin hem hızlı hem sorunsuz bitmesini sağlar; bunu planlamak, iş günü sabahı sahada karar vermekten çok daha kolaydır.",
                ],
            },
            {
                baslik: "Yıllık kontrol turu: korozyon ortamında erken uyarı",
                paragraflar: [
                    "Nem ve amonyak yükü yüksek yapılarda tek seferlik onarım yaklaşımı ekonomik değildir, çünkü sorun tek noktada durmaz; korozyon aynı ortamda benzer elemanların hepsinde ilerler. Bu yüzden Suluova'daki işletmelere yıllık kontrol turu öneririz: sepetten çatı bağlantıları, fan kaideleri, askı elemanları, perde mekanizmaları ve aydınlatma armatürleri tek günde gezilir, bulgular fotoğraflanır ve bir eleman haritası çıkarılır. Bu harita ikinci yılda karşılaştırma imkânı verir — hangi noktanın ne hızla ilerlediği görülür ve müdahale sırası buna göre belirlenir.",
                    "Turun ekonomik mantığı basittir: aynı makine, aynı gün, tek nakliye. Tek tek çağrılan beş küçük işin toplam maliyeti, planlı bir kontrol turunun belirgin üstündedir ve o beş iş genellikle zaten arıza çıktıktan sonra, yani en kötü zamanda gelir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ahırımızda hayvanlar varken çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz ama düzenini işletmenizle birlikte kurmamız gerekir. Tercihimiz, mümkünse boş bir bölmeden başlamak ve çalışma ilerledikçe bölme değişimi yapmaktır; bu, hem hayvan stresini hem iş riskini azaltır. Bölme boşaltmak mümkün değilse makine yavaş ve öngörülebilir hareket ettirilir, gürültülü kalemler hayvanın zaten hareketli olduğu zaman dilimlerine denk getirilir ve işletme personelinin sürüyü yönlendirmesi istenir. Çalışma alanının altına düşebilecek malzeme için koruma serilir. Bu koşullar sağlandığında iş güvenle yürür; sağlanamıyorsa boş dönem beklemek daha doğrudur.",
            },
            {
                soru: "İşletmemizin biyogüvenlik kuralları katı; makinenin girişi sorun olur mu?",
                cevap:
                    "Olmaz, çünkü bu kuralları planın parçası sayarız. İşletmenizin giriş prosedürünü önceden alırız: araç ve makine dezenfeksiyonu isteniyorsa nerede ve nasıl yapılacağı, personel için kıyafet-ayakkabı düzeni, ziyaretçi kaydı ve varsa bekleme süresi. Makinenin bir başka hayvancılık işletmesinden geliyor olması durumunu ayrıca bildiririz — bu bilgi sizin risk değerlendirmeniz için önemlidir ve saklanacak bir şey değildir. Prosedürler zaman aldığı için işin süresine bu payı baştan ekleriz; sahada 'bunu bilmiyorduk' diyerek kural esnetmeyi kabul etmeyiz.",
            },
            {
                soru: "Ahır çatımızdaki bağlantılarda paslanma var; ne kadar acil?",
                cevap:
                    "Aciliyeti ancak yerinde görerek söyleyebiliriz ama genel çerçeve şudur: yüzeysel pas, boya katmanının yenilenmesiyle durdurulabilir ve acil değildir; kesit kaybına başlamış bağlantı elemanı, askı noktası veya fan kaidesi ise acildir çünkü taşıdığı yük hâlâ oradadır. Nem ve amonyak ortamı bu ilerlemeyi hızlandırır, bu yüzden 'geçen sene aynıydı' değerlendirmesi yanıltıcı olabilir. Sepetten yapılan bir kontrol turunda bütün bağlantılar gezilir, bulgular fotoğraflanır ve acil-planlı-izlenecek olarak üçe ayrılır. Karar için bu ayrım, tek bir noktanın fotoğrafından çok daha sağlıklı bir zemin verir.",
            },
            {
                soru: "Et işleme bölümümüz her vardiya sonrası yıkanıyor; makineyi ne zaman sokabiliriz?",
                cevap:
                    "En uygun pencere, üretimin bittiği ve temizlik vardiyasının henüz başlamadığı dilimdir — hacim boştur, yüzeyler henüz ıslatılmamıştır ve iş bittiğinde alan doğrudan temizliğe devredilir. Bu pencereyi kaçırıp yıkama sonrasına kalmak iki sorun üretir: ıslak zeminde makine hareketi riskli hâle gelir ve temizlenmiş bir hacme tekrar ekipman sokmak, prosedürün baştan işletilmesini gerektirir. Pencere kısa olduğu için hazırlığı önceden yaparız: malzeme, ekip ve makine kapıda hazır bekler, hacim boşalır boşalmaz girilir. Kalite biriminizin onay akışını da bu plana dahil ederiz.",
            },
            {
                soru: "Yem ünitemizde silo üstüne çıkmak gerekiyor; platform mu, sabit merdiven mi?",
                cevap:
                    "Sabit merdiven, gövdeye erişim için yapılmıştır; oradan yana uzanarak çalışmak ise en sık görülen ve en tehlikeli kötü pratiktir. Silo üstü kapak, sensör veya bağlantı noktasında yapılacak bir iş, gövdeden uzanmayı gerektiriyorsa doğru çözüm platformdur — sepet, çalışılacak noktanın tam karşısına konumlanır ve ekip iki eliyle rahat çalışır. Sabit merdivenin yeterli olduğu durumlar da vardır ve o zaman makine getirmek gereksizdir. Ayrımı keşifte yaparız. Kapalı hacme giriş söz konusuysa konu erişim ekipmanının ötesine geçer ve tesisin kapalı alanda çalışma prosedürü devreye girer.",
            },
            {
                soru: "Yıllık kontrol turu ne kadar sürer, üretimimizi etkiler mi?",
                cevap:
                    "Süre işletmenin büyüklüğüne bağlıdır; tek ahır ve yanındaki yem ünitesi için genellikle bir gün, birden fazla yapıdan oluşan işletmelerde iki-üç gün planlanır. Üretim etkisi düşüktür çünkü tur, onarım değil tespit turudur: bölme bölme ilerlenir, çalışılan bölge kısa süreli boşaltılır ve geçilir. Tur sonunda fotoğraflı bir bulgu listesi ve müdahale önceliklendirmesi teslim edilir. Acil çıkan kalemler mümkünse aynı ziyarette kapatılır, planlı olanlar için ayrı bir tarih verilir. Kontrol turunu hayvan hareketinin en az olduğu döneme planlamanızı öneririz; işletmenizin takvimini siz daha iyi bilirsiniz, biz ona uyarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Suluova'nın besicilik ağırlıklı üretim kimliği ve buna bağlı yem-et sanayisi kamuya açık genel bilgidir; nem-amonyak korozyonu ve biyogüvenlik uygulamaları sektör geneli teknik bilgi, kontrol turu düzeni firma pratiğidir.",
    },

    "bolge:tokat-cevre-ili": {
        h1: "Tokat ve Çevre İllere Amasya'dan Platform Kiralama Servisi",
        giris:
            "Amasya, Orta Karadeniz'in iç kesiminde komşu illerle iç içe geçmiş bir konumdadır ve platform kiralamada bunun somut bir karşılığı vardır: Tokat yönündeki tarım-gıda kuşağı, kendi içinde sürekli erişim ihtiyacı üreten ama her ilçesinde ekipman parkı bulunmayan bir bölgedir. Turhal, Zile, Erbaa ve Niksar hattındaki tarımsal işleme tesisleri, un ve yem fabrikaları, meyve-sebze soğuk depoları ve seracılık yatırımları; ayrıca il merkezlerindeki ticari yapılar ve kamu binaları düzenli olarak yüksek erişim işi çıkarır. Bu işlerde belirleyici olan makine değil mesafedir — nakliye, çevre il hizmetinin en büyük maliyet kalemidir ve doğru planlanmadığında işin kendisini geçer. Bu sayfa, Amasya merkezli bir parkın Tokat ve çevre illerdeki işleri hangi düzenle, hangi süre mantığıyla ve hangi planlama alışkanlığıyla karşıladığını anlatır.",
        maddeler: [
            {
                baslik: "Nakliyenin toplam maliyetteki payı",
                metin:
                    "Çevre il işlerinde fiyatı belirleyen ilk kalem, makinenin sahaya gidiş-dönüş nakliyesidir ve bu bedel, işin bir gün mü on gün mü süreceğinden bağımsız olarak aynıdır. Bunun doğal sonucu şudur: tek günlük iş için makine göndermek, kiralama bedelinin çok üstünde bir nakliye payı doğurur. Bu yüzden çevre il taleplerinde ilk sorumuz süre değil kapsamdır — tesiste yapılacak başka yüksek erişim işi var mı, komşu tesisin ihtiyacı var mı, iş listesi genişletilebilir mi. Kapsam büyüdükçe birim maliyet hızla düşer.",
            },
            {
                baslik: "Bölge turu düzeni: aynı yönde biriken işler",
                metin:
                    "Çevre il işlerini tek tek değil, yön bazlı toplayarak planlarız. Tokat hattında biriken talepler aynı haftaya yazıldığında makine bir kez yola çıkar, güzergâh üzerindeki tesisleri sırayla dolaşır ve tek nakliyeyle birden fazla iş tamamlanır; nakliye maliyeti müşteriler arasında bölüşülür. Bu düzenin tek koşulu tarih esnekliğidir. Talebini 'önümüzdeki iki hafta içinde uygun bir gün' olarak ileten müşteri, tarihi sabit olan bir müşteriye göre belirgin şekilde avantajlı fiyat alır — ve bu fark, çevre ilde küçük bir fark değildir.",
            },
            {
                baslik: "Tarımsal işleme tesislerinde sezon takvimi",
                metin:
                    "Bölgenin tarımsal işleme tesisleri — meyve-sebze işleyen üniteler, soğuk depolar, un ve yem tesisleri — yıl boyunca eşit yoğunlukta çalışmaz. Bakım işleri için doğru zaman sezon dışıdır ve bu, çevre il müşterileri için ekstra bir avantaj yaratır: sezon dışında iş listesi geniş tutulabilir, makine birkaç gün tesiste kalabilir ve bütün yüksek erişim kalemleri tek seferde kapatılabilir. Sezon içinde gelen çağrılar genellikle arıza kaynaklıdır ve hem daha pahalı hem daha zor planlanır. Yıllık bakım listesini önceden çıkarmak, bu maliyet farkını ortadan kaldırır.",
            },
            {
                baslik: "Sera ve tarımsal yapı yatırımlarında erişim",
                metin:
                    "Bölgede artan seracılık ve modern tarımsal yapı yatırımları kendine özgü erişim işleri üretir: örtü malzemesinin montaj ve onarımı, ısıtma borularının askı sistemleri, gölgeleme perdelerinin mekanizmaları, iklimlendirme fanları ve sulama hatlarının üst bağlantıları. Sera içinde çalışmanın iki temel kısıtı zemin ve bitki dizilimidir — çoğu serada makine ancak ana koridorlardan ilerleyebilir ve zemin, dış saha kadar taşıyıcı değildir. Doğru sınıf, hafif ve dar şasili modellerdir; büyük makine bu yapılarda çoğu zaman hiç kullanılamaz.",
            },
            {
                baslik: "Uzak sahada arıza ve ikame planı",
                metin:
                    "Mesafe, kiralamanın sadece maliyetini değil risk yönetimini de değiştirir: aynı şehirdeki bir arızaya saatler içinde müdahale edilirken, çevre ildeki bir makine için aynı hız her zaman mümkün değildir. Bu yüzden uzak saha işlerinde makine seçimini ve hazırlığını daha muhafazakâr yaparız — sahaya çıkmadan önce tam kontrol, kritik yedek parçanın araçta bulunması, uzun işlerde ikame planının baştan tanımlanması. Bu hazırlık müşteriye ek maliyet olarak yansımaz; uzak sahada duran bir makinenin bedelini zaten iki taraf birlikte öder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çevre il işlerinde planlama parametreleri",
                paragraflar: [
                    "Amasya dışındaki işlerde fiyat ve takvimi belirleyen parametreler ile bunların pratik karşılığı aşağıdaki tabloda toplanmıştır. Talebinizi iletirken bu sütunlardaki bilgileri paylaşmanız, ilk turda net teklif çıkmasını sağlar.",
                ],
                tablo: {
                    basliklar: ["Parametre", "Neden belirleyici", "Avantaj sağlayan durum", "Pratik öneri"],
                    satirlar: [
                        ["Mesafe", "Nakliye sabit maliyettir", "Güzergâh üzerinde olmak", "Yön bazlı tura katılın"],
                        ["İş süresi", "Uzun işte birim maliyet düşer", "Çok günlük iş listesi", "Kalemleri tek listede toplayın"],
                        ["Tarih esnekliği", "Tur planlamasını mümkün kılar", "İki haftalık pencere", "Sabit gün yerine aralık verin"],
                        ["İş kapsamı", "Tek nakliye, çok iş", "Komşu tesisle birleşme", "Çevre işletmelerle konuşun"],
                        ["Saha bilgisi", "Yanlış makine dönüşünü önler", "Ölçülü keşif verisi", "Yükseklik ve zemin bildirin"],
                    ],
                },
            },
            {
                baslik: "Neden tek günlük iş için uzak saha çağrısı pahalıdır",
                paragraflar: [
                    "Bu sorunun cevabını açıkça vermeyi tercih ederiz, çünkü fiyatın nereden geldiğini bilmeyen müşteri haklı olarak yüksek bulur. Bir makinenin çevre ile gidip dönmesi; özel nakliye aracı, yükleme-boşaltma süresi, yol süresi ve o gün boyunca makinenin başka işe verilememesi demektir. Bu kalemlerin toplamı, tek günlük bir kiralama bedelinin üstüne çıkar ve müşteriye 'sadece iki saatlik iş' gibi görünen talep, gerçekte bir günlük bir operasyondur. Bunu gizlemek yerine, maliyeti düşürecek yolları önermeyi doğru buluyoruz.",
                    "Bu yolların en etkilisi kapsamı büyütmektir. Tesisin içinde bekleyen üç küçük iş varsa, bunları aynı ziyarete toplamak nakliye payını üçe böler. Aynı organize bölgede veya aynı ilçede benzer ihtiyacı olan başka bir işletme varsa, iki müşterinin işini aynı güne yazmak her ikisinin de maliyetini düşürür. Bu koordinasyonu yapmak bizim işimizdir; sizden istediğimiz tek şey, işinizi biraz erken haber vermenizdir.",
                ],
            },
            {
                baslik: "Uzak saha keşfi: gitmeden bilmek zorundayız",
                paragraflar: [
                    "Aynı şehirdeki bir işte yanlış makine gönderilirse bedeli birkaç saattir; çevre ilde aynı hata bütün günü ve iki yönlü nakliyeyi yakar. Bu yüzden uzak saha işlerinde keşfi telefonla değil, veriyle yaparız: çalışılacak noktanın yerden yüksekliği, makinenin duracağı zeminin cinsi, sahaya giriş güzergâhındaki kapı ve geçiş ölçüleri, çalışma alanının etrafındaki engeller ve varsa tesisin giriş prosedürü. Bu bilgileri fotoğrafla desteklemek en sağlıklısıdır — bir sahanın fotoğrafı, on cümlelik tariften daha çok şey anlatır.",
                    "Bilgi eksikse ve iş büyükse, ön keşif için ayrı bir ziyaret planlarız; bu ziyaretin maliyeti işin toplamı içinde küçük kalır ve doğru makinenin ilk seferde gitmesini garanti eder. Küçük işlerde ise fotoğraf ve ölçü paylaşımı çoğu zaman yeterlidir. Hangi yolun uygun olduğunu talebi aldığımızda söyleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tokat'taki tesisimize Amasya'dan makine geliyor; fiyat neden İl içindekinden yüksek?",
                cevap:
                    "Farkın tamamı nakliyedir ve bunu kalem kalem açıklarız: özel nakliye aracıyla gidiş-dönüş, yükleme-boşaltma süresi, yol süresi ve o gün makinenin başka işe verilememesi. Bu maliyet, iş bir gün de sürse on gün de sürse aynıdır — dolayısıyla kısa işlerde toplam içindeki payı büyük, uzun işlerde küçüktür. Fiyatı düşürmenin üç yolu vardır ve üçünü de öneririz: iş kapsamını genişletmek, tarihi esnek bırakıp bölge turuna katılmak, aynı bölgedeki başka bir işletmeyle aynı güne denk getirmek. Talebinizi erken ilettiğinizde bu üçünden birini kurmak genellikle mümkün olur.",
            },
            {
                soru: "Birden fazla işimiz var ama farklı tarihlerde; ne yapmalıyız?",
                cevap:
                    "Mümkünse hepsini aynı ziyarete toplayın — çevre il işlerinde bunun getirisi büyüktür. Yapılacak işleri tek listede yazın: hangi nokta, ne yüksekliğinde, ne kadar sürer. Liste elimize geldiğinde toplam süreyi hesaplar, makinenin kaç gün sahada kalması gerektiğini söyler ve tek nakliyeli bir plan çıkarırız. Bazı kalemler gerçekten farklı zamanlarda yapılmak zorundaysa (sezon, duruş penceresi, tedarik bekleyen malzeme) o kalemleri ayırır, geri kalanı birleştiririz. Amaç, aynı yola iki kez çıkmamaktır; bu hem sizin maliyetinizi hem bizim planımızı rahatlatır.",
            },
            {
                soru: "Seramızın içinde makine çalışabilir mi, zemin ve bitkiler zarar görür mü?",
                cevap:
                    "Uygun sınıf seçilirse çalışır. Belirleyici olan üç şeydir: ana koridorun genişliği, zeminin taşıma kapasitesi ve makinenin ağırlığı. Sera zeminleri genellikle sanayi zemini kadar taşıyıcı değildir, bu yüzden hafif ve dar şasili modeller tercih edilir; gerekirse tekerlek izini yaymak için geçici serim yapılır. Bitki sıralarının arasına girmek çoğu serada mümkün değildir — çalışma ana koridorlardan yürütülür ve erişilemeyen noktalar için alternatif çözüm aranır. Serada çalışmadan önce yerinde görmeyi özellikle öneririz; sera geometrileri birbirinden çok farklıdır ve tarifle karar vermek risklidir.",
            },
            {
                soru: "Makine sahada arızalanırsa uzaktan ne kadar sürede müdahale edersiniz?",
                cevap:
                    "Dürüst cevap: aynı şehirdeki kadar hızlı değil. Bu yüzden uzak saha işlerinde stratejimiz müdahale hızına değil, arıza olasılığını düşürmeye dayanır — makine sahaya çıkmadan tam kontrolden geçer, kritik yedek parçalar araçta bulunur ve operatörlü işlerde ilk seviye müdahaleyi sahadaki personelimiz yapar. Yerinde çözülemeyen arızalarda ikame makine gönderilir; uzun süreli işlerde bu taahhüdün süresi sözleşmede yazılı olur. Bu düzenin size ek maliyeti yoktur. Kısa işlerde ise en pratik önlem, makinenin sahada geçireceği süreyi kısa ve planlı tutmaktır.",
            },
            {
                soru: "Sezon dışında bakım yaptırmamızı öneriyorsunuz; hangi ayları kastediyorsunuz?",
                cevap:
                    "Kesin ayları biz değil sizin üretim takviminiz belirler; tarımsal işleme tesislerinde bu takvim ürün ve bölgeye göre değişir. İlkemiz şudur: alım ve işleme yoğunluğunun bittiği, tesisin duruş toleransının yükseldiği dönem doğru dönemdir. O pencerede makine birkaç gün tesiste kalabilir, bütün yüksek erişim kalemleri tek listede kapatılır ve nakliye tek sefere iner. Sezon içinde gelen çağrılar neredeyse her zaman arıza kaynaklıdır — hem acil olduğu için planlanamaz hem üretim kaybı yaratır. Üretim takviminizi paylaşırsanız bakım penceresini birlikte işaretleriz.",
            },
            {
                soru: "Amasya dışında hangi illere hizmet veriyorsunuz?",
                cevap:
                    "Ağırlık merkezimiz Amasya ve çevresidir; Tokat yönündeki tarım-gıda kuşağı düzenli çalıştığımız hattır ve komşu illerdeki talepleri de mesafe ve iş kapsamına göre değerlendiririz. Karar verirken baktığımız şey il sınırı değil, işin ekonomik olarak anlamlı olup olmadığıdır: uzun süreli veya kapsamlı bir iş, uzak mesafede de makul fiyatla yapılabilir; tek günlük küçük bir iş ise belirli bir mesafeden sonra size pahalıya gelir ve bunu açıkça söyleriz. Bize daha yakın bir tedarikçinin işinizi daha uygun yapacağını düşünüyorsak bunu da söylemekten çekinmeyiz; yanlış işi almak kimseye yaramıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Amasya'nın Orta Karadeniz iç kesimindeki konumu ve Tokat yönündeki tarım-gıda üretim kuşağı kamuya açık genel bilgidir; nakliye ekonomisi, bölge turu ve uzak saha keşif düzeni firma pratiğidir.",
    },
};
