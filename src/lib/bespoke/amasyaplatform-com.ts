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
    "merzifon-osb": {
        h1: "Merzifon OSB'de Gıda Üretimine Uyumlu Platform Kiralama",
        giris:
            "Merzifon OSB için platform hizmetini ilçe geneline yayılan bir makine sevkiyatı olarak değil, çalışan fabrikanın bakım programına bağlı teknik bir operasyon olarak kuruyoruz. Gıda ve meyve işleme yapılarında yüksek erişim işi; üretim alanının temizliği, vardiya düzeni, malzeme hareketi ve yeniden devreye alma kontrolüyle birlikte ele alınır. Bu sayfa havalimanı kuşağına, ilçe lojistiğine veya yeni inşaat sahalarına değil; OSB içindeki mevcut tesislerin aydınlatma, mekanik hat, cephe ve depo üst kot bakımına odaklanır. İş emri, erişilecek noktalar ve izin penceresi önceden eşleştirilir; böylece platform yalnızca yüksekliğe ulaşan araç değil, kontrollü duruşun parçası olur.",
        maddeler: [
            {
                baslik: "Üretim hücresine göre makine ve çalışma düzeni",
                metin:
                    "Aynı tesis içinde paketleme alanı, teknik koridor, sevkiyat bölümü ve dış cephe birbirinden farklı koşullar taşır. Kapalı alanda dönüş alanı, kapı açıklığı, zemin yükü ve tavandaki sabit hatlar değerlendirilirken; dış alanda yaklaşma mesafesi ve çevrede süren araç hareketi dikkate alınır. Bu nedenle bütün iş listesine tek model dayatmayız. Ön keşifte her iş noktasını fotoğraf, yaklaşık erişim kotu ve yaklaşım yönüyle ayrı kayda alırız. Elektrikli makine gerektiren temiz kapalı alan ile daha geniş dış saha işi aynı plana girse bile araç seçimi ayrı yapılabilir. Operatöre yalnızca adres değil, hangi bölümde hangi sınırlar içinde hareket edeceğini gösteren saha kartı verilir.",
            },
            {
                baslik: "Duruş penceresini bakım listesine bağlama",
                metin:
                    "Üretim devam ederken yüksek erişim çalışması yapmak her bölümde doğru değildir. Ürünün açıkta bulunduğu, personel geçişinin yoğunlaştığı veya hat üzerinde hareketli ekipmanın çalıştığı noktalar için tesis sorumlusunun belirlediği duruş penceresini esas alırız. Elektrik, mekanik, temizlik ve cephe ekiplerinin işleri tek listede görülür; birbirinin alanını kapatan faaliyetler sıraya konur. Platform sahaya geldiğinde keşif tekrarına zaman kaybetmemek için hedefler etiketlenir, gerekli sarf ve el aleti önceden hazırlanır. Pencere kapanmadan önce yarım kalan kalemin güvenli biçimde bırakılacağı durum da konuşulur. Böylece acele, üretim baskısı altında riskli bir harekete dönüşmez.",
            },
            {
                baslik: "Hijyen sınırı ve temizden kirliye ilerleme",
                metin:
                    "Gıda işlenen bir yapıda tekerlek, platform sepeti ve ekipmanın hangi alandan geçtiği önemlidir. Tesisin hijyen prosedürü alınmadan içeri giriş planlamayız. Gerekli yüzey temizliği, koruyucu örtü, personel kıyafeti ve malzeme taşıma yöntemi işletmenin yetkilisiyle belirlenir. Birden fazla bölüm varsa mümkün olduğunda temiz kabul edilen alandaki işler önce, dış cephe veya teknik hacim işi sonra yapılır. Delme, kesme ya da toz çıkaran faaliyet platform kiralamasından ayrı bir risk kalemi olarak değerlendirilir; çalışma alanı ayrılmadan başlatılmaz. Makinenin erişim sağlaması, üretim güvenliği kurallarını ortadan kaldırmaz. Teslim öncesinde alan kontrolü işletme temsilcisiyle birlikte yapılır.",
            },
            {
                baslik: "OSB içi giriş, izin ve saha trafiği",
                metin:
                    "Fabrika kapısına ulaşmak ile çalışma noktasına güvenle yerleşmek aynı şey değildir. Araç kabul saati, güvenlik kaydı, operatör evrakı, iç trafik yönü ve yükleme alanlarının kullanım programı önceden netleştirilir. Sevkiyat kapısının önünü kapatan bir kurulum üretimi aksatabilir; bu yüzden makinenin bekleme ve şarj konumu da keşif notuna girer. Yaya yolu ile çalışma çevresi ayrılır, gerekiyorsa tesisin görevlendirdiği işaretçi kullanılır. Başka yükleniciler aynı vardiyada sahadaysa kaldırma ve bakım işleri ortak zaman çizelgesinde çakıştırılmaz. OSB sayfasının farkı, ilçe çapında rota anlatmak değil, tek parsel içindeki bu izin ve koordinasyon zincirini görünür kılmaktır.",
            },
            {
                baslik: "Kapanış, kabul ve üretime geri dönüş",
                metin:
                    "Bir lambanın yanması veya bir bağlantının sıkılması işi tek başına tamamlamaz. Platform çalışma konumundan çıktıktan sonra sökülen korumaların yerine takılması, zeminde parça kalmaması, hareket yollarının açılması ve müdahale edilen noktanın kontrol edilmesi gerekir. İş listesindeki her kalem tesis sorumlusuyla kapatılır; ertelenen veya ek inceleme isteyen bölüm ayrıca yazılır. Makineyi hemen başka noktaya yönlendirmek yerine kabul adımına zaman ayırmak, sonradan aynı alanın yeniden durdurulmasını önler. Üretime dönüş kararını tesis verir; biz erişim operasyonunun bittiğini, alanın boşaltıldığını ve platform kaynaklı bir engel kalmadığını kayıt altına alırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB bakım işinin hazırlık tablosu",
                paragraflar: [
                    "Aşağıdaki başlıklar, talebin ilk görüşmeden uygulanabilir bir vardiya planına dönüşmesini sağlar. Her satırın karşılığı tesis yetkilisi ile platform ekibi arasında işe başlamadan önce paylaşılır.",
                ],
                tablo: {
                    basliklar: ["Plan kalemi", "Tesisten beklenen bilgi", "Platform planına etkisi", "Kapanış kanıtı"],
                    satirlar: [
                        ["İş noktası", "Bölüm ve erişim yönü", "Makine sınıfı ve sıra", "Tamamlanan kalem kaydı"],
                        ["Duruş", "Uygun vardiya penceresi", "Giriş ve çıkış saati", "Alan teslim onayı"],
                        ["Hijyen", "Bölgeye özel prosedür", "Temizlik ve koruma", "Ortak son kontrol"],
                        ["İç trafik", "Sevkiyat ve yaya akışı", "Kurulum çevresi", "Yolların yeniden açılması"],
                        ["Enerji", "Şarj veya besleme noktası", "Bekleme konumu", "Kablo ve ekipman toplama"],
                    ],
                },
            },
            {
                baslik: "Tek duruşta çok disiplinli iş sırası",
                paragraflar: [
                    "Bakım penceresi değerliyse elektrik, mekanik ve yapı işleri birbirinden habersiz çağrılmamalıdır. Önce işlerin aynı erişim noktasını paylaşıp paylaşmadığına bakarız. Bir koridorun aydınlatması ile üst hattaki bağlantı kontrolü aynı kurulumdan yapılabiliyorsa, ekiplerin sırası malzeme hazır olma durumuna göre belirlenir. Ancak kirletici işlem ile temiz alan müdahalesi sırf süre kazanmak için üst üste bindirilmez.",
                    "Programın sahibi tesis yetkilisidir; platform ekibi hareket, kurulum ve güvenli erişim sürelerini görünür kılar. Beklenmeyen üretim ihtiyacı pencereyi daraltırsa öncelikli kalemler tamamlanır, kalanlar yeni izinle planlanır. Bu yaklaşım, kısa zamanda her şeyi bitirme baskısının kontrol adımlarını silmesini engeller.",
                ],
            },
            {
                baslik: "Teklifte kapsamı açık tutan saha kartı",
                paragraflar: [
                    "Sağlıklı teklif yalnızca günlük makine bedelinden oluşmaz. Operatör gereksinimi, çalışma vardiyası, farklı bölümler arasında araç değişimi, bekleme koşulu ve tesisin istediği giriş belgeleri baştan yazılmalıdır. Saha kartında erişim yüksekliği kadar kapı, koridor, zemin ve üst engel bilgisi de bulunur. Böylece uygun görünmeyen bir makinenin kapıda kalması önlenir.",
                    "Talep sonradan genişlerse yeni kalem aynı karta eklenir ve süre etkisi açıkça paylaşılır. Belirsiz bir 'fabrika bakımı' ifadesi yerine, doğrulanabilir iş noktaları üzerinden ilerlemek hem işletmenin satın alma karşılaştırmasını hem ekibin uygulamasını kolaylaştırır.",
                ],
            },
        ],
        sss: [
            { soru: "Merzifon ilçe sayfası varken OSB sayfası neden ayrı?", cevap: "İlçe sayfası geniş coğrafyadaki sanayi, depo ve ulaşım koşullarını ele alır. Bu sayfa ise OSB içindeki çalışan bir tesisin bakım izni, hijyen sınırı, iç trafik ve yeniden devreye alma adımlarına odaklanır. Talebiniz belirli bir fabrikanın planlı bakımına aitse burada anlatılan saha kartı ve duruş düzeni kullanılır. İlçe içinde farklı adresleri kapsayan genel bir rota ihtiyacında ise ilçe planı daha uygundur. Ayrım yalnızca anahtar kelime için değil, iki operasyonun kararları gerçekten farklı olduğu için yapılmıştır." },
            { soru: "Üretim durmadan platformla bakım yapılabilir mi?", cevap: "Bazı dış cephe veya üretimden ayrılmış teknik alan işleri tesisin değerlendirmesiyle sürdürülebilir; fakat bunu uzaktan ve bütün bölümler için vaat etmeyiz. Açık ürün, hareketli hat, yoğun personel geçişi ya da düşebilecek parça riski varsa çalışma alanı ayrılmalı veya ilgili bölüm durmalıdır. Tesis iş güvenliği ve üretim sorumlusu pencereyi belirler, biz kurulum alanı ile gerekli hareket süresini bildiririz. Güvenli ayrım kurulamıyorsa işi uygun duruşa taşımak doğru karardır." },
            { soru: "Gıda alanına girecek platform nasıl hazırlanıyor?", cevap: "Önce işletmenin kendi hijyen prosedürünü isteriz; her fabrikanın alan sınıfları ve kabul yöntemi aynı değildir. Makinenin önceki çalışma koşulu değerlendirilir, gerekli yüzey temizliği yapılır ve istenen koruyucu uygulamalar girişten önce tamamlanır. Tekerlek güzergâhı, sepet içindeki malzeme ve personel kıyafeti de plana dahildir. Delme veya toz çıkarma varsa alanın ayrılması tesis tarafından onaylanmadan başlanmaz. Son kontrol ortak yapılır; genel bir temizlik iddiası, tesis prosedürünün yerine geçmez." },
            { soru: "Bakım listemiz kesin değilse teklif alabilir miyiz?", cevap: "Ön teklif alınabilir, ancak kesin makine ve süre için iş noktalarını olabildiğince somutlaştırmak gerekir. Bölüm fotoğrafları, yaklaşık kot, kapı ve koridor bilgisi ile yapılacak işin türü ilk eleme için yeterlidir. Keşifte liste netleştirilir; aynı kurulumdan yapılabilecek kalemler birleştirilir, farklı araç isteyen noktalar ayrılır. Sonradan eklenen işin süre ve ekipman etkisi ayrıca gösterilir. Böylece başlangıçtaki belirsizlik, sahada kontrolsüz kapsam büyümesine dönüşmez." },
            { soru: "Platform sevkiyat kapısını kapatmak zorunda mı?", cevap: "Hayır; fakat erişim noktası kapıya yakınsa çalışma çevresi ile araç hareketi birlikte planlanmalıdır. Alternatif yaklaşım yönü, düşük yoğunluklu saat veya geçici trafik düzeni keşifte değerlendirilir. Makinenin denge ve güvenlik alanı, sevkiyat hızlansın diye küçültülemez. Tesis bir işaretçi görevlendirebilir ve belirlenen pencere boyunca kapıyı kontrollü kullanabilir. Uygun ayrım kurulamıyorsa bakım başka saate alınır. Amaç sevkiyatı görmezden gelmek değil, erişim işini onunla çakışmayacak biçimde programlamaktır." },
            { soru: "İş bittikten sonra hangi teslim kayıtlarını alırız?", cevap: "İş listesindeki tamamlanan, ertelenen ve ek inceleme isteyen noktalar ayrılır. Platformun çalışma alanından çıktığı, geçişlerin açıldığı ve kullanılan koruyucu düzenin toplandığı tesis temsilcisiyle kontrol edilir. Teknik müdahalenin fonksiyon testi ilgili bakım ekibinin sorumluluğundadır; platform ekibi güvenli erişim ve alan kapanışını kaydeder. Bu ayrım, bir sonraki duruşta hangi işin kaldığını gösterir ve erişim hizmetiyle teknik bakım sorumluluğunun birbirine karışmasını önler." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Merzifon OSB ve Amasya'nın gıda-meyve işleme sanayisi odağı devir belgesine dayanır; özel tesis, kapasite veya üretim rakamı kullanılmamıştır. Bakım izni, hijyen, iç trafik ve kabul akışı saha planlama pratiğidir.",
    },
    tasova: {
        h1: "Taşova'da Tarımsal Tesis ve Cephe İşleri İçin Platform Kiralama",
        giris: "Taşova'da yüksek erişim ihtiyacını iki belirgin iş grubu üzerinden planlıyoruz: tarımsal ürünün kabul, işleme veya depolama sürecine hizmet eden yapılardaki bakım işleri ile mevcut binaların cephe, oluk, aydınlatma ve tabela uygulamaları. İlçe ölçeğinde her talep sürekli bir makine parkı gerektirmez; doğru çözüm, iş listesini önceden doğrulayıp uygun platformu planlı bir servis gününde sahaya getirmektir. Ürün veya tesis adı uydurmadan; yapının gerçek ölçüsü, zemini, giriş yolu ve çalışma takvimi üzerinden seçim yaparız. Böylece sezon baskısı ile cephe işinin kamusal alan riski birbirine karıştırılmaz.",
        maddeler: [
            { baslik: "Tarımsal tesiste sezon öncesi erişim listesi", metin: "Kabul alanındaki aydınlatma, yüksek kapı mekanizması, havalandırma, kablo güzergâhı ve çatı altı bağlantıları yoğun dönem başlamadan gözden geçirilmelidir. İşletmeden ürün takvimini değil, bakım için ayırabileceği gerçek pencereyi isteriz; kesin tarih ve süre işletmenin kendi faaliyet düzenine göre belirlenir. Noktalar fotoğraflanır, zeminden erişim yönü kaydedilir ve gerekli teknik ekip aynı güne hazırlanır. Platformun sahada beklediği halde malzeme gelmemesi küçük bir işin maliyetini büyütür. Bu nedenle erişim hizmeti, bakım ekibinin hazırlık listesiyle eş zamanlı kesinleşir." },
            { baslik: "Depo içinde koridor ve istif düzeni", metin: "Kapalı tarımsal yapılarda katalog yüksekliği tek başına yeterli değildir. Koridor genişliği, dönüş alanı, kapı açıklığı, zeminin durumu ve çalışma noktasının altındaki istif erişimi belirler. İşletme güvenli bir çalışma şeridi açmadan makineyi ürün veya ambalaj arasına sıkıştırmayız. Elektrikli ve uygun ölçülü platform gereksinimi keşifte değerlendirilir; havalandırma koşulu da yapılan teknik işe göre ele alınır. Günlük operasyon sürecekse personel ve araç geçişleri ayrı zamanlara konur. İstifin geçici taşınması gerekiyorsa bu hazırlığın kim tarafından ve ne zaman yapılacağı iş emrinde açıkça yer alır." },
            { baslik: "Cephede yaklaşım yönü ve zemin kontrolü", metin: "Cephe işi düz bir duvar görüntüsünden ibaret değildir. Saçak, balkon, giriş sundurması, ağaç, kablo ve bitişik yapı platformun binaya yaklaşımını etkileyebilir. Makinenin duracağı alanın eğimi ve taşıma durumu yerinde değerlendirilir; yumuşak veya belirsiz zeminde yalnızca erişim yüksekliğine bakılarak kurulum yapılmaz. Tabela montajı, boya onarımı, oluk temizliği ve aydınlatma değişimi farklı malzeme ve sepet düzeni ister. İşin niteliğini baştan bilmek, sepet kapasitesini rastgele seçmekten daha güvenlidir. Cephe boyunca makine her taşındığında çevre kontrolü yenilenir." },
            { baslik: "Yaya ve araç alanında kontrollü çalışma", metin: "İlçe merkezindeki ya da işletme girişindeki cephe çalışmaları üçüncü kişileri etkileyebilir. Kapı kullanımı, kaldırım veya avlu geçişi, müşteri girişi ve araç parkı işe başlamadan konuşulur. Çalışma çevresi görünür biçimde ayrılır; malzemenin sepetten düşmesine karşı teknik iş ekibinin önlemleri tamamlanır. Kısa süreceği düşüncesiyle geçişin açık bırakılması kabul edilmez. Alan bütünüyle ayrılamıyorsa düşük yoğunluklu saat seçilir veya tesis geçici yönlendirme yapar. Platform operatörü çevreyi izler, ancak işletmenin kamusal alan düzenleme sorumluluğunun yerine geçmez." },
            { baslik: "Bir servis gününde uyumlu işleri birleştirme", metin: "Taşova ölçeğinde maliyeti belirleyen temel konu, nakliye ile üretken çalışma süresinin dengesidir. Aynı yapıda birbirine yakın aydınlatma, cephe ve üst bağlantı işleri varsa tek keşif listesinde toplanabilir. Fakat kapalı temiz alan ile toz çıkaran dış cephe faaliyeti yalnızca aynı adreste diye kontrolsüz biçimde birleştirilmez. Hangi sıranın uygun olduğu malzeme, ekip ve alan teslimine göre belirlenir. Komşu adresler için ortak rota düşünülebilir; her sahanın sorumlusu ve kabul kaydı yine ayrı tutulur. Programlı toplulaştırma fiyatı anlaşılır kılar, acele ek iş ise süreyi belirsizleştirir." },
        ],
        ekBolumler: [
            { baslik: "Taşova işi için karar tablosu", paragraflar: ["İlk görüşmede aşağıdaki veriler paylaşılırsa tarımsal tesis ile cephe işi için uygun araç ve takvim ayrı ayrı değerlendirilebilir."], tablo: { basliklar: ["İş alanı", "Ön bilgi", "Temel kısıt", "Plan çıktısı"], satirlar: [["Tesis içi", "Kapı, koridor, iş kotu", "İstif ve günlük akış", "Uygun şasi ve saat"], ["Kabul alanı", "Araç giriş programı", "Sevkiyat çakışması", "Ayrılmış çalışma şeridi"], ["Dış cephe", "Yaklaşım fotoğrafı", "Engel ve zemin", "Kurulum noktaları"], ["Ortak alan", "Yaya ve araç yoğunluğu", "Üçüncü kişi riski", "Bariyer ve yönlendirme"], ["Bakım listesi", "İş, ekip, malzeme", "Hazırlıksız bekleme", "Servis günü sırası"]] } },
            { baslik: "Sezon baskısını acil çağrıya dönüştürmemek", paragraflar: ["Tarımsal tesislerde faaliyet yoğunluğu işletmenin kendi takvimine bağlıdır. Biz belirli bir ürün veya ay varsaymak yerine, bakımın ertelenemeyeceği noktaları işletmeyle birlikte ayırırız. Güvenliği etkileyen arıza ile yalnızca görünümü ilgilendiren işi aynı öncelikte göstermeyiz. Planlanabilir kalemler uygun duruşa alınır; acil kalem için çalışma alanının gerçekten ayrılıp ayrılamadığı kontrol edilir.", "Sezon öncesi fotoğraflı liste, platformun doğru ekip ve malzemeyle gelmesini sağlar. Bu hazırlık makinenin kullanılmadığı bekleme süresini azaltır. Faaliyet başladıktan sonra ortaya çıkan yeni talepte ise üretimi sürdürme baskısı güvenlik sınırlarını değiştirmez; uygun pencere yoksa iş ertelenir."] },
            { baslik: "Cephe işinde ölçü yerine görsel doğrulama", paragraflar: ["Yalnızca bina katı veya tahmini yükseklik bilgisiyle seçim yapmak yanıltıcıdır. Platformun duracağı yerden hedefe yatay erişimi, aradaki sundurma ve peyzaj gibi engelleri de görmemiz gerekir. Geniş açı fotoğraf, giriş ölçüsü ve zeminin güncel durumu ilk değerlendirmeyi güçlendirir; karmaşık sahada yerinde keşif yapılır.", "Teklif, görülen koşullara dayanır. Park edilmiş araçların kaldırılması, çalışma alanının teslimi veya elektrik erişimi gibi hazırlıkların sorumlusu yazılır. Böylece ekip geldiğinde çevrenin fotoğraftan farklı çıkması halinde kararın kim tarafından ve hangi bilgiyle verileceği nettir."] },
        ],
        sss: [
            { soru: "Taşova'daki küçük bir bakım işi için platform gelir mi?", cevap: "Talep değerlendirilir; belirleyici olan yalnızca işin süresi değil, doğru makinenin uygun rota ve tarihle planlanabilmesidir. Fotoğraf, yaklaşık erişim kotu, zemin ve tarih esnekliği paylaşıldığında servis gününü daha gerçekçi kurabiliriz. Aynı yapıda bekleyen uyumlu yüksek erişim kalemlerini toplamak nakliye payını düşürür. Ancak ihtiyaç olmayan işi listeye eklemeyi önermeyiz. Kesin süre ve fiyat, sahanın doğrulanması ile araç uygunluğuna göre verilir; koşulsuz anlık erişim sözü verilmez." },
            { soru: "Tarımsal tesis çalışırken içeride platform kullanılabilir mi?", cevap: "Bu, işletmenin akışı ve alanın güvenli biçimde ayrılabilmesine bağlıdır. Ürün, ambalaj, personel veya araç hareketi platformun çalışma çevresine giriyorsa aynı anda çalışma uygun olmayabilir. Tesis sorumlusu bir şerit ve zaman penceresi belirler; biz makinenin hareket, dönüş ve güvenlik alanını bildiririz. Havalandırma ve temizlik şartları da değerlendirilir. Ayrım kurulamazsa bakım duruşa alınır. Üretimin sürmesi hedefi, platform çevresini daraltmak veya istif arasına kontrolsüz girmek için gerekçe olamaz." },
            { soru: "Cephe için hangi platformun gerektiğini nasıl belirlersiniz?", cevap: "Hedefin yerden kotuna ek olarak binaya yatay uzaklık, yaklaşımı kapatan sundurma veya ağaçlar, zeminin eğimi ve giriş genişliği değerlendirilir. İşin boya, tabela, oluk, aydınlatma ya da bağlantı faaliyeti olması sepet içindeki kişi ve malzeme düzenini değiştirir. Önce fotoğraf ve ölçülerle eleme yaparız; karmaşık noktada keşif isteriz. Böylece sadece en yüksek makineyi göndermek yerine sahaya yerleşebilen ve hedefe doğru açıyla ulaşan sınıf seçilir." },
            { soru: "Kaldırım veya işletme girişi kapatılacak mı?", cevap: "Her işte zorunlu değildir; ancak güvenli çalışma çevresi girişle çakışıyorsa geçici yönlendirme gerekir. İşletme, kullanılabilecek saatleri ve alternatif geçişi bildirir. Platformun hareket alanı bariyerle ayrılır, yaya geçişi sepetin altından verilmez. Kamusal alanla ilgili gerekli izin ve düzenlemeler iş sahibi tarafından doğrulanır. Uygun ayrım yoksa daha sakin bir zaman seçilir. Kısa işlem bahanesiyle açık geçiş üzerinde çalışma yapılmaz; süre azalsa da düşen malzeme ve araç hareketi riski devam eder." },
            { soru: "Tesis içi ve cephe işini aynı kiralamada yapabilir miyiz?", cevap: "Koşullar uygunsa yapılabilir, fakat iki işin aynı makineye gerçekten uygun olduğu keşifle doğrulanmalıdır. İçeride dar ve temiz çalışmaya uygun elektrikli sınıf gerekirken dış cephede farklı erişim geometrisi bulunabilir. Tek araç her hedefe uymuyorsa sırf nakliye azaltmak için yanlış seçim yapılmaz. Uyumlu noktalar aynı servis gününde sıralanır; temizlik ve alan geçişi ayrıca planlanır. Teklif hangi bölümde hangi aracın kullanılacağını ve araç değişimi varsa bunun süre etkisini açıkça gösterir." },
            { soru: "İş günü için bizim hangi hazırlıkları yapmamız gerekir?", cevap: "İş noktalarını ve teknik ekibi hazır bulundurmanız, geçiş yolundaki taşınabilir engelleri kaldırmanız, platform alanını personel ile araç akışından ayırmanız gerekir. Tesis içi işte istif düzeni ve varsa hijyen prosedürü önceden paylaşılır. Cephede park alanı, giriş kullanımı ve gerekli izinler doğrulanır. Kullanılacak malzemenin sahada olması önemlidir; platform teknik parçayı temin eden ekip değildir. Yetkili bir saha sorumlusu başlangıç ve kapanış kontrolünde bulunursa belirsizlikler hızla çözülür." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Taşova için tarımsal tesis ve cephe işleri açısı devir belgesinden alınmıştır; özel işletme, ürün, kapasite ve mesafe iddiası kullanılmamıştır. Erişim, zemin ve çalışma alanı planı saha uygulama pratiğidir.",
    },
    gumushacikoy: {
        h1: "Gümüşhacıköy'de Planlı Platform Temini",
        giris: "Gümüşhacıköy'de platform kiralamayı sürekli hazır bekleyen belirsiz bir hizmet gibi değil, doğrulanmış iş listesinin uygun makine ve ekiple buluştuğu planlı bir temin süreci olarak ele alıyoruz. Küçük ilçe ölçeğinde tek bir kısa iş için nakliye, işin kendisinden daha belirleyici olabilir; çözüm, güvenlikten kısmak değil hazırlık ve tarih esnekliğini artırmaktır. Cephe, çatı kenarı, aydınlatma veya işletme içi üst kot işlerinde adres, erişim geometrisi, zemin, sorumlu kişi ve malzeme durumu önceden kayda girer. Kesin erişim süresi ya da yerel stok iddiası vermeden, uygulanabilir bir servis penceresi oluştururuz.",
        maddeler: [
            { baslik: "Talebi teknik karta dönüştürme", metin: "'Yüksekte iş var' bilgisi araç seçmek için yeterli değildir. Hedefin yaklaşık kotu, makinenin duracağı yerle arasındaki yatay mesafe, kapı ve yol ölçüsü, zeminin görünümü, işin türü ve sepette bulunacak malzeme birlikte sorulur. Geniş açı fotoğraflar ile erişim yolunun görüntüsü karta eklenir. Birden fazla adres varsa her biri ayrı satır olur; koşullar birbirine kopyalanmaz. Bu kart, teklifin varsayımlarını görünür kılar ve sevkten önce uygun olmayan seçeneği elememizi sağlar. Veri yetersizse keşif istenir; tahminle makine yola çıkarılmaz." },
            { baslik: "Tarih aralığıyla servis planlama", metin: "Sabit ve çok kısa bir çağrı penceresi, uygun makine ile nakliye aracını eşleştirmeyi zorlaştırabilir. İş acil değilse birkaç uygun gün veya zaman aralığı paylaşılması, planlı teminin temel avantajıdır. Program kesinleştiğinde saha hazırlığı, teknik ekip ve malzeme aynı saate bağlanır. Tarih esnekliği güvenli olmayan makineyi seçmek anlamına gelmez; yalnızca doğru aracın mevcut program içinden ayrılmasını kolaylaştırır. Hava, saha veya önceki işten kaynaklanan değişiklik ihtimali iletişim zincirinde tutulur. Kesinleşmeyen tarih, müşteriye kesinmiş gibi bildirilmez." },
            { baslik: "Yerel sorumlu ve erişim teyidi", metin: "Makine ilçeye ulaştığında kapalı kapı, yanlış adres veya boşaltmaya uygun olmayan alanla karşılaşmamalıdır. Bu nedenle sahada karar verecek bir sorumlu belirlenir. Sorumlu giriş güzergâhını, çalışma alanının boşaltıldığını ve gerekli izinlerin hazır olduğunu teyit eder; operatör ise kurulumun güvenli olup olmadığına sahada karar verir. Telefonla verilen onay zemin kontrolünün yerine geçmez. Koşullar ön bilgiden farklıysa çalışma durdurulur ve alternatif değerlendirilir. Planlı temin, sorumluluğu tek kişiye yüklemek değil, karar hattını baştan açık tutmaktır." },
            { baslik: "Nakliye ile çalışma süresini ayırma", metin: "Teklifte makinenin sahaya gelişi, kurulumu, üretken çalışma süresi ve dönüş düzeni birbirine karıştırılmaz. Birkaç saatlik işin neden tam bir operasyon gerektirdiği böylece anlaşılır. Aynı adreste uyumlu kalemler varsa tek ziyarette toplanabilir; farklı sahalar ancak güzergâh, makine ve sorumlu bilgileri doğrulandığında aynı güne bağlanır. Her ek durak ayrı kurulum ve çevre kontrolü demektir. Programı sırf dolu göstermek için alakasız işler eklemek yerine, gerçekten hazır ve aynı araçla yapılabilir hedefleri seçeriz. Bekleme yaratacak eksik malzeme önceden bildirilir." },
            { baslik: "Gün sonu dönüş veya güvenli bırakma kararı", metin: "İş bir günde bitmiyorsa platformun sahada kalması otomatik kabul edilmez. Kilitli ve uygun park alanı, yetkisiz kullanıma karşı kontrol, enerji veya şarj düzeni ve ertesi günkü giriş planı değerlendirilir. Bu şartlar yoksa aracın dönüşü daha doğru olabilir; karar maliyetle birlikte güvenlik üzerinden verilir. Makine sahada kaldığında anahtar ve kullanım yetkisi belirlenen kişide olur, çalışma dışı hareket yapılmaz. İş bitiminde alan, ekipman ve varsa şarj bağlantısı kontrol edilir. Planlı teminin tamamı, yalnızca geliş değil güvenli ayrılış senaryosunu da içerir." },
        ],
        ekBolumler: [
            { baslik: "Planlı temin kontrol tablosu", paragraflar: ["Gümüşhacıköy talebinin sevke hazır sayılması için aşağıdaki dört başlık somut karşılık bulmalıdır."], tablo: { basliklar: ["Kontrol", "Paylaşılacak veri", "Karar", "Eksikse sonuç"], satirlar: [["Erişim", "Fotoğraf, kot, yatay mesafe", "Makine sınıfı", "Keşif veya yeni veri"], ["Giriş", "Yol, kapı, boşaltma alanı", "Nakliye düzeni", "Sevk ertelenir"], ["Program", "Uygun tarih aralığı", "Servis penceresi", "Alternatif tarih aranır"], ["Saha", "Yetkili kişi, zemin, engeller", "Kurulum onayı", "Yerinde yeniden değerlendirme"], ["Kapanış", "Bitiş tahmini, park güvenliği", "Dönüş veya sahada kalma", "Günlük planla sınırlandırma"]] } },
            { baslik: "Küçük işleri doğru biçimde toplulaştırma", paragraflar: ["Aynı bina üzerindeki birkaç aydınlatma, oluk veya cephe kalemi tek erişim turunda yapılabiliyorsa listelemek yararlıdır. Her kalemin yeri, teknik ekibi ve malzemesi hazır olmalıdır. Başka bir işletmenin talebiyle rota paylaşılması da değerlendirilebilir; fakat ticari ve güvenlik sorumlulukları ayrı kalır, bir sahanın gecikmesi diğerine habersizce yüklenmez.", "Toplulaştırmanın sınırı makine uygunluğudur. Dar iç alan için seçilen araç dış cephedeki uzak hedefe erişemiyorsa iki işi zorla birleştirmeyiz. Tasarruf, doğru aracın ve güvenli kurulumun önüne geçmez. Teklif, ortak nakliye ihtimalini kesin sonuç gibi değil, program doğrulandığında uygulanacak seçenek olarak gösterir."] },
            { baslik: "Değişiklik olduğunda yeniden teyit", paragraflar: ["Planlanan gün öncesinde saha fotoğraftan farklı hale gelebilir; park edilen araç, kazı, malzeme yığını veya faaliyet yoğunluğu kurulum noktasını kapatabilir. Saha sorumlusu bu değişikliği sevkten önce bildirir. İşin kapsamı ya da hedefi değişmişse makine seçimi yeniden kontrol edilir; aynı fiyat ve süre varsayımının otomatik sürdüğü kabul edilmez.", "Sahada görülen beklenmedik durum için operatöre baskı yapılmaz. Güvenli alternatif varsa sorumlu kişiyle kayda alınır; yoksa yeni plan hazırlanır. Bu disiplin, uzaktan servis işinde iptal riskini azaltır ve yanlış bilginin maliyetini taraflar arasında tartışma konusu olmaktan çıkarır."] },
        ],
        sss: [
            { soru: "Gümüşhacıköy'e aynı gün platform getirebilir misiniz?", cevap: "Uygunluk kontrol edilmeden aynı gün sözü vermeyiz. Makine sınıfı, nakliye, operatör ve sahanın hazır olması aynı anda doğrulanmalıdır. Acil talepte fotoğraf, ölçü, adres ve sorumlu kişi bilgisi hızlıca değerlendirilir; güvenli ve uygulanabilir seçenek varsa bildirilir. Yoksa en yakın gerçekçi pencere sunulur. Küçük ilçe için planlı temin yaklaşımının amacı erişimi reddetmek değil, belirsiz bir hız vaadiyle yanlış aracı yola çıkarmamaktır. Güvenliği etkileyen bir arıza varsa alan önce işletme tarafından emniyete alınmalıdır." },
            { soru: "Tek günlük kiralamada nakliye neden önemli?", cevap: "Platformun çalışma süresi kısa olsa da yükleme, yol, boşaltma, kurulum ve dönüş adımları ortadan kalkmaz. Bu nedenle teklif bu kalemleri iş süresinden ayrı gösterir. Aynı adresteki hazır ve uyumlu işleri birleştirmek ya da tarihi esnek tutmak toplam kullanım verimini artırabilir. Fakat maliyeti azaltmak için uygun olmayan makine seçilmez veya güvenli alan küçültülmez. Talep kartı tamamlandığında hangi kısmın nakliye, hangi kısmın saha çalışması olduğu anlaşılır biçimde paylaşılır." },
            { soru: "Fotoğraf gönderirsek keşif gerekmiyor mu?", cevap: "Basit ve açık bir sahada doğru açılardan çekilmiş fotoğraf ile temel ölçüler ilk seçim için yeterli olabilir. Ancak hedefin arkasında engel bulunması, zeminin eğimli veya belirsiz olması, dar kapalı alan ya da yoğun üçüncü kişi trafiği varsa yerinde keşif gerekebilir. Fotoğraf anlık görüntüdür; iş günündeki değişiklikleri saha sorumlusu teyit eder. Uzaktan değerlendirme kesin kurulum onayı değildir. Operatör vardığında zemini ve çevreyi tekrar kontrol eder, güvenli bulmadığı noktada çalışmaya başlamaz." },
            { soru: "Birden fazla adresteki işleri aynı gün yaptırabilir miyiz?", cevap: "Adreslerin aynı makineye uygun olması, aralarındaki programın gerçekçi kurulması ve her sahada ayrı sorumlu bulunması halinde değerlendirilebilir. Her durakta boşaltma veya kurulum, çevre ayrımı ve kapanış kontrolü için süre gerekir. İlk işin uzaması ikinci adresi etkileyebileceğinden öncelikler ve iletişim yöntemi baştan belirlenir. Yalnızca yakın oldukları varsayımıyla kesin tur sözü verilmez. Fotoğraf ve teknik kartlar incelendikten sonra ortak rota uygulanabilir görünmüyorsa işler farklı günlere ayrılır." },
            { soru: "Platform gece sahamızda kalabilir mi?", cevap: "Kilitli ve uygun park alanı, yetkisiz kullanımı önleyen kontrol, güvenli enerji veya şarj düzeni ve ertesi gün yetkili teslimi varsa planlanabilir. Açık, kontrolsüz ya da zemini uygun olmayan alanda bırakma yapılmaz. Makine çalışma saatleri dışında kullanılmamalı ve anahtar yetkili kişide tutulmalıdır. Sahada kalmanın sözleşme ve maliyet etkisi teklif aşamasında açıklanır. Koşullar karşılanmıyorsa günlük dönüş veya farklı bir kiralama düzeni seçilir; yalnızca nakliye azaltmak için güvenli olmayan park kabul edilmez." },
            { soru: "Tekliften sonra iş kapsamı değişirse ne olur?", cevap: "Yeni hedefin yüksekliği, yaklaşımı, işi ve malzemesi teknik karta eklenir. Mevcut makine uygunsa süre ve program etkisi paylaşılır; uygun değilse araç değişimi veya ayrı ziyaret önerilir. Sahada sözlü olarak eklenen bir iş, güvenlik değerlendirmesi yapılmadan otomatik kabul edilmez. Çalışma alanı, izin ve teknik ekip hazırlığı da yeniden kontrol edilir. Bu yöntem esnekliği ortadan kaldırmaz; değişikliğin görünür ve yönetilebilir olmasını sağlar. Tamamlanan ile ertelenen kalemler kapanış kaydında ayrı gösterilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Gümüşhacıköy için küçük ilçe ölçeğinde planlı temin açısı devir belgesine dayanır; stok, süre, mesafe, tesis veya kapasite iddiası eklenmemiştir. Teknik kart, rota ve saha teslimi anlatımı operasyon pratiğidir.",
    },

    // ── HİZMET SAYFALARI (2026-08-14) ───────────────────────────────────
    // Amasya'nın meyve işleme/konserve/soğuk hava deposu sanayi kimliği ve
    // OSB'deki metal işleme-ambalaj fabrikaları ekseninde, 11 sabit hizmet
    // konusunun her biri kendi teknik gerekçesiyle yazılmıştır.

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Amasya'da Sepetli / Örümcek Platform Kiralama",
        giris:
            "Örümcek platform, Amasya'daki meyve işleme ve OSB tesislerinde diğer makinelerin giremediği ya da girse bile zemine yükünü taşıyamadığı noktalar için tercih edilir. Paletli ayakları ve dışa açılan istinat kollarıyla ağırlığını geniş bir tabana yayar; bu sayede asma katlı ambar zeminlerinde, hafif çelik konstrüksiyon üzerinde veya soğuk hava deposunun üst katmanında, tekerlekli bir makaslı platformun taşıyamayacağı yükü güvenle taşır. Kolu daraltıp katlayarak metre altına inebilen modeller, dar bir kapıdan geçip iç mekânda tekrar açılabilir — meyve tasnif hattının iki sırası arasına, ya da OSB fabrikasının ara katına bu şekilde girilir. Uzun ve dönebilen kolu sayesinde düz altına gelmeden yandaki bir çatı saçağına, boru geçişinin arkasına veya silonun yan yüzeyine erişebilir; bu, dikey mast ya da makaslı platformun yapamadığı bir manevradır. Bu sayfada örümcek platformun Amasya'daki tipik kullanım alanlarını, taşıma-giriş kısıtlarını ve hangi işte hangi modelin tercih edildiğini anlatıyoruz.",
        maddeler: [
            { baslik: "Zemin taşıma sınırı düşük mezanin ve çatı arası katlar", metin: "Meyve işleme tesislerinde depolama kapasitesini artırmak için sonradan eklenen asma katlar, genellikle hafif çelik profille yapılır ve nokta yükü sınırlıdır. Tekerlekli makaslı platform bu zeminde iz bırakır ya da taşıma sınırını aşar; örümcek platformun geniş taban alanına yayılan ayak baskısı bu riski azaltır. Kat taşıma etiketi yoksa iş öncesi tesis mühendisiyle birlikte kontrol edilir." },
            { baslik: "Dar kapıdan girip iç mekânda açılan kol geometrisi", metin: "OSB'deki ambalaj ve metal işleme fabrikalarının bazı bölümlerine standart yük kapısından değil, insan geçiş kapısından girmek gerekir. Katlanabilir kollu örümcek modelleri bu genişliğe sığacak ölçüde daralır, içeri girdikten sonra kol yeniden açılır ve tam erişim menzili geri kazanılır. Bu manevra öncesi kapı ölçüsü ve iç koridorun dönüş yarıçapı mutlaka netleştirilir." },
            { baslik: "Yanal ve alt-üstten erişim gerektiren noktalar", metin: "Çatı saçağının altı, konveyör bandının arkası ya da bir boru hattının gölgesinde kalan aydınlatma armatürü gibi noktalara düz altından değil yandan yaklaşmak gerekir. Örümcek platformun çok eklemli kolu bu tür engelli geometrilerde makaslı platformdan daha esnektir; kol önce yukarı, sonra yana, gerekirse aşağı doğru bükülerek hedefe ulaşır." },
            { baslik: "Elektrikli ve dizel model seçiminin gıda hacmine etkisi", metin: "Meyve tasnif ve paketleme salonlarında ürün açıkta olduğu için elektrikli örümcek platform tercih edilir; egzoz gazı ve yakıt kokusu riski taşımaz. Açık sahada, OSB'nin dış cephe ya da çatı işlerinde ise dizel model daha uzun çalışma süresi sunar. Hangi modelin kullanılacağı, işin iç mi dış mekânda mı olduğuna göre önceden belirlenir." },
            { baslik: "Kurulum öncesi zemin ve istinat kolu payı kontrolü", metin: "İstinat kolları açıldığında makinenin kapladığı alan, taban ölçüsünün oldukça üzerine çıkar; bu pay hesaplanmadan sahaya gönderilen makine bazen açılamaz. Kurulum öncesi zeminin düzlüğü, eğim açısı ve istinat kollarının basacağı noktaların taşıma gücü kontrol edilir; gerekirse takoz veya plaka ile destek sağlanır." },
        ],
        ekBolumler: [
            {
                baslik: "Örümcek platform ile makaslı/eklemli platform karşılaştırması",
                paragraflar: [
                    "Amasya'daki üç sınıfın hangi işte öne çıktığı, sık sorulan bir tercih sorusudur. Aşağıdaki tablo temel farkları özetler; kesin seçim sahanın zemin ve erişim koşuluna göre yapılır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Örümcek platform", "Makaslı platform", "Eklemli (boom) platform"],
                    satirlar: [
                        ["Zemin yükü", "Düşük, geniş tabana yayılı", "Orta-yüksek, tekerlek noktası", "Yüksek, dengeleme gerekir"],
                        ["Dar kapıdan geçiş", "Katlanarak mümkün", "Şasi genişliğine bağlı", "Genelde mümkün değil"],
                        ["Yanal/engelli erişim", "Çok eklemli, esnek", "Yalnızca dikey", "İyi, ama zemin ister"],
                        ["Uygun mekân", "İç mekân, hassas zemin", "İç mekân, düz zemin", "Dış mekân, geniş alan"],
                    ],
                },
            },
            {
                baslik: "Meyve tasnif hattında örümcek platformun tipik kullanım anı",
                paragraflar: [
                    "Tasnif hattının üstündeki kamera grubuna ya da hattın arkasındaki bir aydınlatma armatürüne erişmek gerektiğinde, hattın iki yanı dar ve dolu olduğu için standart bir makaslı platform giremez. Örümcek platform katlı hâlde araya girer, kol açılıp hedefe ulaşır ve iş bitince tekrar katlanarak dışarı çıkar. Bu manevra hat tamamen durmadan, yalnızca ilgili bölüm bariyerlenerek yapılabilir.",
                    "OSB'deki metal işleme atölyelerinde de benzer bir durum vardır: pres hatlarının veya kaynak istasyonlarının arasında kalan dar geçitlerde çatı aydınlatması bakımı için aynı manevra kullanılır. Buradaki fark, iç mekân gıda kısıtının olmaması; dizel model bile kısa süreli kullanılabilir, ancak havalandırma yeterliyse.",
                ],
            },
            {
                baslik: "Kiralama öncesi paylaşılması gereken ölçüler",
                paragraflar: [
                    "Doğru modelin ilk seferde gitmesi için kapı genişliği-yüksekliği, iç koridorun dönüş yarıçapı, zeminin taşıma etiketi (varsa), hedefin yerden yüksekliği ve yatay uzaklığı, istinat kollarının basacağı alanın engelsiz olup olmadığı paylaşılmalıdır. Bu bilgi eksik geldiğinde makine sahada açılamayabilir ve iş ertelenir; telefonla alınan bu bilgiler saha ekibiyle teyit edilerek sevkiyat planlanır.",
                ],
            },
        ],
        sss: [
            { soru: "Örümcek platform ile makaslı platform arasındaki temel fark nedir, hangisini seçmeliyiz?", cevap: "Temel fark zemine bindirilen yük ve erişim biçimidir. Makaslı platform tekerlekleriyle noktasal yük bindirir ve yalnızca dikey yükselir; örümcek platform ise açılan istinat kollarıyla yükü geniş bir alana yayar ve çok eklemli koluyla yana-aşağıya da erişebilir. Zemininiz hassas veya taşıma sınırı belirsizse, ya da hedef düz üstte değil yan tarafta ise örümcek platform daha uygundur. Zemin sağlam ve hedef doğrudan üstteyse makaslı platform hem daha ekonomik hem daha hızlı kurulur. Kesin karar için hedefin konumu ve zemin bilgisini paylaşmanız yeterlidir." },
            { soru: "Örümcek platform dar bir kapıdan gerçekten geçebiliyor mu?", cevap: "Katlanabilir kollu modellerde evet, ancak kapı ölçüsü modelin katlı hâldeki genişliğine uygun olmalıdır. Kol içeri girmeden önce tamamen katlanır, makine dar geçişten geçer, iç mekânda tekrar açılır. Bu işlem için hem kapı genişliği hem de içeride kolun açılacağı boş alan gereklidir — sadece kapıdan geçmek yetmez, açılma manevrası için de yer olmalıdır. Kapı ölçüsünü ve iç mekân planını önceden paylaşırsanız, geçip geçemeyeceğini kesin olarak söyleriz." },
            { soru: "Soğuk hava deposunun asma katına örümcek platform çıkarabilir miyiz?", cevap: "Asma kat taşıma etiketi varsa ve bu değer örümcek platformun toplam ağırlığını (istinat kollarıyla birlikte) karşılıyorsa mümkündür. Etiket yoksa ya da eski bir yapıysa, tesis mühendisiyle birlikte taşıma kapasitesi teyit edilmeden makine çıkarılmaz — bu, hem makine hem yapı güvenliği açısından atlanamayacak bir adımdır. Taşıma onayı alındıktan sonra istinat kollarının basacağı dört noktanın da yapısal olarak uygun olması ayrıca kontrol edilir." },
            { soru: "İç mekânda çalışırken egzoz gazı sorunu yaşar mıyız?", cevap: "Gıda üretim ve depolama hacimlerinde her zaman elektrikli örümcek platform kullanılır; egzoz emisyonu olmadığı için ürüne veya havaya karışma riski taşımaz. Dizel model yalnızca dış mekân işlerinde ya da havalandırması yeterli, gıda dışı endüstriyel hacimlerde tercih edilir. Hangi modelin geleceği, işin iç mi dış mı olduğu bilgisine göre kiralama öncesinde netleştirilir; bu konuda tesise danışılmadan dizel makine gıda hacmine gönderilmez." },
            { soru: "Örümcek platformun ulaşamayacağı bir durum var mı?", cevap: "Evet. Zemin çok yumuşak veya eğimliyse, istinat kollarının basabileceği sağlam nokta yoksa makine güvenli açılamaz; bu durumda takoz-plaka desteği ya da farklı bir sınıf gerekir. Ayrıca kolun menzili sınırlıdır — çok yüksek bir noktaya, yatayda uzak bir mesafeden erişmek isteniyorsa daha büyük bir eklemli platform gerekebilir. Sahanın fotoğrafını ve yaklaşık ölçüleri paylaştığınızda uygun sınıfı netleştiririz." },
            { soru: "Operatörsüz kullanabilir miyiz, yoksa operatör şart mı mı?", cevap: "Örümcek platform, çok eklemli kolu ve istinat kolu açma-kapama mantığı nedeniyle diğer platform sınıflarına göre daha fazla teknik bilgi gerektirir; kendi ekibiniz kullanacaksa mutlaka önceki deneyimi olmalı ve teslimde saha eğitimi alınmalıdır. İlk kez bu sınıfla çalışan tesislere operatörlü kiralamayı öneriyoruz — istinat kolu yerleşimi ve kol açılım sırası hatalı yapıldığında makine dengesizleşebilir, bu riski deneyimli operatör önler." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'nın meyve işleme ve OSB metal-ambalaj sanayi kimliği kamuya açık genel bilgidir; örümcek platformun teknik özellikleri (istinat kolu, katlanabilir kol, zemin yükü dağılımı) sektör geneli ekipman bilgisidir, kullanım senaryoları firma pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Amasya'da Platform Nakliye ve Teslimat Hizmeti",
        giris:
            "Amasya'da bir platformun sahaya varması, il merkezinin dar ve tarihi dokulu sokaklarından Merzifon'un geniş sanayi kuşağına, Suluova'nın besicilik-et tesislerinden Taşova ve Gümüşhacıköy'ün kırsal arazisine kadar farklı lojistik gerçeklerle karşılaşır. Yeşilırmak vadisinin dar geçitli bazı yol kesimleri büyük araçlı taşımayı zorlaştırırken, Merzifon'daki havalimanı kuşağı ve ana karayolu bağlantısı OSB'ye teslimatı nispeten hızlandırır. Hasat sezonunda meyve nakliyesiyle aynı yolları paylaşan platform sevkiyatı, o dönemde trafik yoğunluğunu hesaba katarak planlanmalıdır; sezon dışı aylarda ise teslimat penceresi çok daha esnektir. Düşük yükseklikli bir makaslı platform standart bir kamyonetle taşınabilirken, büyük eklemli platformlar low-bed römork ve daha geniş manevra alanı ister — bu ayrım, teslimat süresini ve maliyetini doğrudan etkiler. Bu sayfa, Amasya genelinde platform nakliyesinin nasıl planlandığını, hangi ilçede hangi kısıtın öne çıktığını ve teslimat öncesi hangi bilginin istendiğini anlatır.",
        maddeler: [
            { baslik: "Merkezin dar sokak ve tarihi doku kısıtı", metin: "Amasya merkezdeki bazı mahalleler, Yeşilırmak kıyısındaki tarihi yapı dokusu nedeniyle dar ve dönüşü kısıtlı sokaklara sahiptir. Büyük bir nakliye aracının bu sokaklara girmesi mümkün olmayabilir; bu durumda makine ana yola kadar taşınır, oradan küçük tekerlekli veya kendinden hareketli modelle son metrelerde sahaya ilerlenir. Sokak genişliği ve araç giriş noktası teslimattan önce mutlaka netleştirilir." },
            { baslik: "OSB'ye planlı teslimat ve fabrika giriş prosedürü", metin: "Amasya OSB ile Merzifon OSB'deki fabrikalar genellikle araç giriş kayıt sistemi işletir; nakliye aracının plaka ve sürücü bilgisi önceden bildirilmezse kapıda bekleme yaşanabilir. Planlı teslimatta bu bilgi randevu saatiyle birlikte tesise iletilir, araç güvenlik kontrolünden hızlıca geçer ve makine doğrudan çalışma noktasına yönlendirilir." },
            { baslik: "Hasat sezonunda yol yoğunluğunun teslimat süresine etkisi", metin: "Meyve alım döneminde Amasya-Merzifon-Suluova hattındaki yollar, tarım ürünü taşıyan kamyon trafiğiyle dolar. Bu dönemde platform sevkiyatını planlarken normal saatler yerine sabah erken ya da öğle sonrası daha az yoğun saatler tercih edilir; acil bir talep varsa alternatif güzergâh değerlendirilir. Sezon dışı aylarda bu kısıt ortadan kalkar ve teslimat penceresi genişler." },
            { baslik: "Makine sınıfına göre araç ve römork seçimi", metin: "Küçük bir makaslı ya da dikey mast platform standart kapalı kasa kamyonetle taşınabilirken, büyük eklemli platform veya örümcek platform low-bed römork ve daha uzun bir yükleme-bağlama süresi gerektirir. Hangi aracın kullanılacağı, makinenin ağırlığı ve boyutuna göre önceden belirlenir; yanlış araçla yola çıkan makine sahada geri döner." },
            { baslik: "Kırsal ve arazi bölgelerinde son kilometre erişimi", metin: "Taşova ve Gümüşhacıköy gibi ilçelerin kırsal kesimlerinde bazı saha yolları toprak veya stabilize zeminlidir; yağışlı dönemde bu yollar ağır araç taşımasına uygun olmayabilir. Bu bölgelere teslimat öncesi yol durumu telefonla teyit edilir, gerekirse alternatif güzergâh veya daha küçük bir taşıma aracı planlanır." },
        ],
        ekBolumler: [
            {
                baslik: "Amasya'da bölgeye göre nakliye kısıtı özeti",
                paragraflar: [
                    "Aşağıdaki tablo, Amasya genelindeki başlıca bölgelerin nakliye açısından öne çıkan kısıtını ve buna uygun yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Öne çıkan kısıt", "Yaklaşım"],
                    satirlar: [
                        ["Amasya merkez", "Dar sokak, tarihi doku", "Ana yoldan son metre erişim"],
                        ["Amasya OSB / Merzifon OSB", "Giriş kayıt prosedürü", "Randevulu, plaka bildirimli teslimat"],
                        ["Suluova", "Besicilik tesis trafiği", "Vardiya dışı saat tercihi"],
                        ["Taşova / Gümüşhacıköy kırsalı", "Stabilize/toprak yol", "Yol durumu ön teyidi"],
                        ["Merzifon-Amasya hattı (hasat sezonu)", "Tarım ürünü trafiği", "Erken sabah/öğle sonrası sevkiyat"],
                    ],
                },
            },
            {
                baslik: "Yükleme-bağlama süresinin teklife etkisi",
                paragraflar: [
                    "Bir platformun kiralama süresi genelde çalışma saatiyle anılır, ancak nakliye tarafında yükleme, bağlama, yol ve boşaltma ayrı bir zaman dilimidir. Büyük bir eklemli platformun low-bed'e yüklenip bağlanması, küçük bir makaslı platformun kapalı kasaya girmesinden çok daha uzun sürer; bu fark teklif hazırlanırken hesaba katılır ve müşteriye ayrı kalem olarak gösterilir.",
                    "Aynı gün birden fazla adrese teslimat planlanıyorsa, her adresteki boşaltma ve bağlama süresi rotaya eklenir. Rota gerçekçi kurulmazsa son adrese gecikmeli ulaşılır; bu yüzden çok adresli teslimatlarda adresler ve makine tipleri önceden netleştirilir.",
                ],
            },
            {
                baslik: "Teslimat öncesi paylaşılması gereken bilgiler",
                paragraflar: [
                    "Sağlıklı bir teslimat planı için adres ve varsa fabrika giriş prosedürü, sahaya giden yolun genişlik ve zemin durumu, tercih edilen teslimat saat aralığı, sahada makineyi karşılayacak yetkili kişinin iletişim bilgisi istenir. Kırsal bölgelerde ayrıca yol durumu güncel olarak teyit edilir; hasat sezonunda ise alternatif saat aralığı sorulur. Bu bilgiler eksik geldiğinde araç sahaya vardığında bekleme veya geri dönüş riski oluşur.",
                ],
            },
        ],
        sss: [
            { soru: "Amasya merkezdeki dar bir sokağa platform teslim edebilir misiniz?", cevap: "Sokağın genişliğine bağlıdır. Büyük nakliye aracı dar sokağa giremiyorsa makine ana yola kadar taşınır, oradan küçük tekerlekli platform kendi gücüyle veya elle itilerek son metrelerde sahaya ulaştırılır. Bazı çok dar geçitlerde bu da mümkün olmayabilir; bu durumda alternatif giriş noktası veya farklı bir model önerilir. Teslimattan önce sokak genişliğini ve varsa araç giriş kısıtını bildirmeniz, doğru planı yapmamızı sağlar." },
            { soru: "OSB'deki fabrikaya teslimat için önceden randevu almamız gerekiyor mu?", cevap: "Çoğu OSB fabrikası araç giriş kaydı işlettiği için evet, gerekir. Nakliye aracının plaka bilgisi ve tahmini varış saati fabrika güvenlik birimine önceden iletilmelidir; aksi hâlde araç kapıda bekleyebilir. Bu bilgiyi sizinle birlikte teyit eder, randevu saatini fabrikanın onayına göre netleştiririz." },
            { soru: "Hasat sezonunda teslimat süresi uzuyor mu?", cevap: "Yoğun tarım trafiğinin olduğu saatlerde evet, gecikme riski artar. Bu dönemde sevkiyatı sabah erken veya öğle sonrası daha az yoğun saatlere planlamayı öneririz; acil bir ihtiyaçta alternatif güzergâh değerlendirilir. Sezon dışı aylarda bu kısıt ortadan kalktığı için teslimat penceresi çok daha geniştir — mümkünse planlı işleri bu döneme almanızı öneririz." },
            { soru: "Kırsal bir arazi veya bahçeye teslimat yapabilir misiniz?", cevap: "Yol durumu uygunsa evet. Taşova ve Gümüşhacıköy gibi ilçelerin kırsal kesimlerinde bazı yollar stabilize veya toprak zeminlidir; yağışlı dönemde ağır araç taşımasına uygun olmayabilir. Teslimattan önce yol durumunu telefonla teyit ediyoruz; uygun değilse daha küçük bir taşıma aracı veya alternatif güzergâh planlanır. Yolun son hâlini bildiğiniz kadarıyla paylaşmanız planlamayı hızlandırır." },
            { soru: "Küçük bir makaslı platform ile büyük bir eklemli platformun nakliye süresi aynı mı?", cevap: "Hayır. Küçük makaslı platform standart kapalı kasa araçla nispeten hızlı yüklenip taşınırken, büyük eklemli platform low-bed römork gerektirir ve yükleme-bağlama süresi belirgin daha uzundur. Teklif hazırlanırken bu fark hesaba katılır ve nakliye süresi makine sınıfına göre ayrı belirtilir." },
            { soru: "Aynı gün birden fazla adrese teslimat yaptırabilir miyiz?", cevap: "Adresler ve makine tipleri uygun olduğunda mümkündür. Her adresteki boşaltma-bağlama süresi rotaya eklenir ve gerçekçi bir sıralama yapılır; aksi hâlde son adrese gecikmeli ulaşılır. Adres listesini ve her noktadaki makine ihtiyacını önceden paylaşırsanız, rotayı uygulanabilir biçimde kurar ve size tahmini saatleri bildiririz." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya merkezin tarihi doku/dar sokak yapısı, OSB'lerin varlığı ve hasat sezonu tarım trafiği kamuya açık genel bilgidir; nakliye planlama yaklaşımı firma pratiğidir, özel güzergâh veya mesafe iddiası içermez.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Amasya'da Forklift ve İstifleme Kiralama",
        giris:
            "Amasya'daki meyve işleme ve soğuk hava deposu tesislerinde forklift, platformun tamamlayıcısıdır: platform yükseklikte bakım ve erişim yaparken, forklift zemin seviyesinde palet taşıma, kasa istifleme ve yükleme-boşaltma işini üstlenir. Hasat sezonunda kasa trafiği en yoğun döneme girer — meyve kabul noktasından soğuk depoya, oradan tasnif hattına kadar sürekli palet hareketi olur ve bu dönemde forklift talebi platform talebinden bile daha erken başlar. OSB'deki metal işleme ve ambalaj fabrikalarında ise forklift, hem hammadde-ürün taşımada hem de platformun giremediği ağır malzemenin sahaya taşınmasında kullanılır. Dar koridorlu soğuk hava depolarında standart forklift yerine dar şasili ya da reach truck tipi modeller tercih edilir; bu seçim, raf koridor genişliğine ve yükseklik ihtiyacına göre yapılır. Bu sayfa Amasya genelinde forklift kiralamanın hangi işte, hangi model ve hangi sezon yoğunluğuyla planlandığını anlatır.",
        maddeler: [
            { baslik: "Hasat sezonunda kasa ve palet trafiği yoğunluğu", metin: "Meyve alım döneminde tesise giren ham madde, kısa sürede kasalara doldurulup soğuk depoya veya tasnif hattına taşınır. Bu trafik günün her saatinde sürebilir ve tek forklift yetersiz kalabilir; sezon başında ek forklift ihtiyacı platform ihtiyacından önce ortaya çıkar. Sezonluk yoğunluğu önceden bildiren tesislere, sezon başlangıcından itibaren ek makine ayırma imkânı sunuyoruz." },
            { baslik: "Soğuk hava deposunda dar koridor forklift seçimi", metin: "Yüksek raflı soğuk depolarda koridor genişliği standart forklift dönüş yarıçapına göre daraltılmıştır. Bu koşulda dar şasili forklift ya da reach truck tipi model tercih edilir; bunlar dar koridorda dönmeden ilerleyip yükü doğrudan rafa kaldırabilir. Koridor genişliği ve raf yüksekliği bilinmeden gönderilen standart forklift depoya giremeyebilir." },
            { baslik: "OSB fabrikasında ağır malzeme ve platform destek taşıması", metin: "Metal işleme ve ambalaj fabrikalarında forklift, hem üretim malzemesini taşır hem de platformla yapılan bir bakım işinde gerekli ağır parçayı çalışma noktasına kadar getirir. Bu iki iş genelde aynı vardiyada koordine edilir; forklift ve platform aynı sahada çalışırken güvenlik mesafesi ve manevra alanı önceden ayrılır." },
            { baslik: "Operatörlü ve operatörsüz forklift kiralama farkı", metin: "Kendi ekibinizde sertifikalı forklift operatörü varsa makineyi operatörsüz kiralayabilirsiniz; yoksa operatörlü kiralama önerilir. Özellikle sezon yoğunluğunda geçici olarak devreye alınan personelin forklift deneyimi sınırlıysa, kısa süreli işlerde operatörlü model kazalara karşı daha güvenlidir." },
            { baslik: "Zemin ve yük kapasitesi uyumunun kontrolü", metin: "Meyve kasası taşımada yük hafif ama hacimlidir; OSB'deki metal malzeme taşımada ise yük ağır ve noktasal olabilir. Bu iki durum farklı forklift kapasitesi gerektirir. Zeminin epoksi mi beton mu olduğu, rampa eğimi ve yük ağırlığı önceden bildirildiğinde doğru kapasiteli makine ilk seferde gönderilir." },
        ],
        ekBolumler: [
            {
                baslik: "İşe göre forklift sınıfı eşleşmesi",
                paragraflar: [
                    "Amasya'daki tesislerde en sık karşılaştığımız iş tipleri ve bunlara uygun forklift sınıfı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Öne çıkan kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Meyve kasası istifleme (açık saha)", "Hafif-hacimli yük, sık hareket", "Standart dizel/LPG forklift"],
                        ["Soğuk depo raf yükleme", "Dar koridor, düşük sıcaklık", "Dar şasili elektrikli / reach truck"],
                        ["OSB metal malzeme taşıma", "Ağır, noktasal yük", "Orta-yüksek kapasiteli dizel"],
                        ["Ambalaj deposu palet çekme", "Yüksek raf, hafif yük", "Elektrikli reach truck"],
                    ],
                },
            },
            {
                baslik: "Sezon başında ek forklift planlaması",
                paragraflar: [
                    "Meyve alım sezonu, tesisin yıl içindeki en yoğun palet trafiğini yaratır ve bu yoğunluk genellikle mevcut forklift filosunun kapasitesini aşar. Sezon takvimini önceden paylaşan tesislerle, alım başlangıcından itibaren geçerli olacak ek forklift kiralamasını erken planlıyoruz; bu, sezon ortasında aniden makine arayışına girmekten çok daha verimlidir.",
                    "Sezon sonunda ek makinenin ne zaman geri alınacağı da baştan netleştirilir; böylece hem tesis hem biz, kiralama süresini net bir takvime bağlarız ve belirsiz uzatma pazarlığı yaşanmaz.",
                ],
            },
            {
                baslik: "Forklift ve platformun aynı sahada birlikte çalışması",
                paragraflar: [
                    "Bir bakım işinde forklift, platformun ulaştığı noktaya gerekli parçayı veya malzemeyi taşırken, platform da yükseklikteki işi yapar. Bu iki makinenin aynı anda aynı sahada bulunması, manevra alanının ve güvenlik mesafesinin önceden planlanmasını gerektirir; aksi hâlde çakışma riski oluşur. Vardiya planında iki makinenin hangi sırayla ve hangi noktada çalışacağı belirtilir.",
                ],
            },
        ],
        sss: [
            { soru: "Hasat sezonu için ne zaman forklift talebi vermeliyiz?", cevap: "Mümkünse sezon başlamadan birkaç hafta önce. Alım döneminde palet ve kasa trafiği aniden yükselir ve bu dönemde forklift talebi platform talebinden bile önce yoğunlaşır; erken bildirilen sezon takvimiyle ek makineyi baştan ayırabiliriz. Sezon ortasında ani talep geldiğinde uygun makine bulunabilir ama planlı ayırma kadar garanti değildir." },
            { soru: "Soğuk hava deposuna hangi forklift girer?", cevap: "Koridor genişliği ve raf yüksekliğine bağlıdır. Standart forklift dar koridorda dönemeyebilir; bu durumda dar şasili elektrikli forklift veya reach truck tipi model tercih edilir. Ayrıca düşük sıcaklıkta elektrikli makinenin akü performansı düşer, bu yüzden uzun işlerde şarj planı yapılır. Koridor ölçüsünü ve raf üst kotunu paylaşırsanız uygun sınıfı netleştiririz." },
            { soru: "Operatörsüz forklift kiralayabilir miyiz?", cevap: "Evet, kendi ekibinizde sertifikalı ve deneyimli forklift operatörü varsa mümkündür. Teslimde makinenin kumanda düzeni ve güvenlik donanımı için kısa bir saha bilgilendirmesi yapılır. Sezon yoğunluğunda geçici personel kullanılacaksa, deneyim sınırlıysa operatörlü kiralamayı öneririz; kasa trafiğinin yoğun olduğu saatlerde deneyimsiz kullanım kaza riskini artırır." },
            { soru: "Forklift ile platform aynı anda aynı alanda çalışabilir mi?", cevap: "Çalışabilir, ancak manevra alanı ve güvenlik mesafesi önceden planlanmalıdır. İki makinenin aynı koridor veya salonda çakışmaması için vardiya planında kimin hangi noktada, hangi sırayla çalışacağı belirtilir. Özellikle dar alanlarda bu koordinasyon atlanırsa çarpışma riski oluşur; bu yüzden birlikte çalışma taleplerinde önceden bilgi almayı isteriz." },
            { soru: "OSB'deki metal işleme fabrikasına hangi kapasitede forklift önerirsiniz?", cevap: "Taşınacak malzemenin ağırlığı ve boyutuna bağlıdır; metal profil ve sac gibi yükler genelde ağır ve noktasal olduğu için orta-yüksek kapasiteli dizel forklift tercih edilir. Zemin cinsi (beton, epoksi) ve rampa varsa eğim açısı da kapasite seçimini etkiler. Taşınacak malzemenin ağırlığını ve zemin bilgisini paylaşırsanız uygun kapasiteyi netleştiririz." },
            { soru: "Kiralama süresi ne kadar esnek, sezon ortasında uzatabilir miyiz?", cevap: "Evet, mümkündür; ancak makinenin başka bir işe ayrılmış olabileceği ihtimaline karşı uzatma talebini mümkün olduğunca erken bildirmenizi öneririz. Sezon başında ek forklift planlarken bitiş tarihini net olarak konuşmak, hem sizin hem bizim programı önceden görmemizi sağlar; uzatma ihtiyacı doğduğunda bu netlik sayesinde hızlı karar verilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'nın meyve işleme ve OSB metal sanayi kimliği ile hasat sezonu palet trafiği kamuya açık genel bilgidir; forklift sınıf seçimi ve soğuk depo dar koridor uygulaması sektör geneli teknik bilgidir, sezon planlama yaklaşımı firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Amasya'da Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli platform, Amasya'da makaslı ya da örümcek platformun ulaşamadığı, hem yükseklik hem yatay uzaklık gerektiren dış mekân işlerinde devreye girer. Meyve işleme tesisinin dış cephesindeki bir kanopi, soğuk hava deposunun çatı kenarındaki oluk sistemi, ya da OSB'deki metal işleme fabrikasının yüksek çelik konstrüksiyon cephesi — bu tür hedeflere düz altından değil, engelin üzerinden dolanarak ulaşmak gerekir. Eklemli kolun iki veya üç mafsallı yapısı, makinenin bir engeli aşıp arkasındaki noktaya erişmesini sağlar; bu, tek yönde yükselen makaslı platformun yapamadığı bir hareket. Amasya OSB'deki çelik konstrüksiyonlu sanayi holleri ve tarımsal silo yapıları, dış cephe ve çatı işlerinde eklemli platformun en sık kullanıldığı hedeflerdir. Dizel modeller açık sahada uzun çalışma süresi sunarken, elektrikli eklemli platformlar daha sessiz çalışması gereken yerleşim yakını sahalarda tercih edilir. Bu sayfa eklemli platformun Amasya'daki tipik kullanım alanlarını ve model seçim mantığını anlatır.",
        maddeler: [
            { baslik: "Engelin üzerinden dolanarak hedefe ulaşma", metin: "Bir çatı saçağının altındaki, ya da bir boru hattının arkasındaki noktaya düz altından erişilemiyorsa, eklemli kol önce yukarı kalkar, sonra öne doğru uzanır ve gerekirse aşağı bükülerek hedefe iner. Bu üç eksenli hareket, makaslı platformun sabit dikey ekseninden farklıdır ve engelli geometrili dış cephe işlerinde belirleyicidir." },
            { baslik: "Sanayi holü ve çelik konstrüksiyon cephe erişimi", metin: "OSB'deki yüksek tavanlı sanayi hollerinde çelik konstrüksiyonun dış cephesi, kolon aralıkları ve çapraz bağlantılar, eklemli platformun kol menzili ile sistemli biçimde taranır. Kolon aralığı ve tavan yüksekliği önceden bilindiğinde, makinenin duracağı nokta ve kol açısı planlanarak tek kurulumda birden fazla nokta kapatılabilir." },
            { baslik: "Zemin dengesi ve destek ayağı gereksinimi", metin: "Eklemli platformlar, kol tam açıldığında ağırlık merkezinin kaydığı anlarda dengelerini destek ayaklarıyla korur. Zeminin düz ve sağlam olması, ayakların tam temas etmesi için şarttır; eğimli veya boşluklu zeminde makine güvenli açılamaz. Kurulum öncesi zemin kontrolü ve gerekirse takoz desteği standart uygulamamızdır." },
            { baslik: "Dizel ve elektrikli model arasındaki seçim ölçütü", metin: "Açık OSB sahasında, çalışma süresi uzun ve mesafe fazla olduğunda dizel eklemli platform tercih edilir; sessiz çalışma gereken yerleşim yakını veya kısmen kapalı hacimlerde ise elektrikli model daha uygundur. Hangi modelin geleceği, sahanın açık-kapalı niteliği ve çalışma süresine göre belirlenir." },
            { baslik: "Rüzgâr ve hava koşulunun çalışmaya etkisi", metin: "Yüksekte açık kolla çalışırken rüzgâr hızı, makinenin güvenli kullanım sınırını belirleyen kritik bir faktördür. Belirli bir rüzgâr hızının üzerinde kol açık tutulmaz, iş ertelenir. Amasya'nın vadi coğrafyasında rüzgâr koşulları noktadan noktaya değişebildiği için, iş günü sabahında sahada anlık ölçüm yapılarak karar verilir." },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli platform sınıflarının Amasya'daki kullanım karşılığı",
                paragraflar: [
                    "Aşağıdaki tablo, farklı eklemli platform sınıflarının Amasya'daki tipik hedef ve yakıt tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Sınıf", "Tipik hedef", "Yakıt tercihi", "Zemin ihtiyacı"],
                    satirlar: [
                        ["Küçük elektrikli eklemli", "Kapalı/yarı açık cephe, orta yükseklik", "Elektrikli", "Düz, sert zemin"],
                        ["Orta dizel eklemli", "OSB sanayi holü cephesi", "Dizel", "Düz zemin, hafif eğim toleranslı"],
                        ["Büyük dizel eklemli", "Silo/çatı üst kotu, uzun yatay erişim", "Dizel", "Geniş, sağlam açık alan"],
                    ],
                },
            },
            {
                baslik: "Tarımsal silo ve depolama yapılarında eklemli platform kullanımı",
                paragraflar: [
                    "Amasya'nın kırsal kesimindeki tarımsal silo ve büyük depolama yapılarının dış yüzeyi, merdivenle güvenli erişilemeyecek kadar yüksek ve eğimli olabilir. Silonun üst kapağı, havalandırma bacası veya dış yüzeydeki bir arıza noktası için eklemli platform, kolun uzun menzili sayesinde silonun tabanına yakın durup üst noktalara ulaşabilir.",
                    "Bu tür sahalarda zemin genellikle toprak veya stabilizedir; makinenin ağırlığına göre zemin taşıma kapasitesi önceden kontrol edilir, gerekirse plaka desteğiyle zemin güçlendirilir."
                ],
            },
            {
                baslik: "Kurulum öncesi paylaşılması gereken saha bilgisi",
                paragraflar: [
                    "Doğru sınıfın ilk seferde gitmesi için hedefin yerden yüksekliği, makinenin duracağı noktadan hedefe olan yatay mesafe, aradaki engel varsa türü, zeminin cinsi ve eğimi, sahanın açık mı kapalı mı olduğu paylaşılmalıdır. Bu bilgiler eksik geldiğinde makine sahada menzil yetersizliğiyle karşılaşabilir; bu yüzden mümkünse fotoğraf ve yaklaşık ölçü ile birlikte talep iletilmesini öneririz.",
                ],
            },
        ],
        sss: [
            { soru: "Eklemli platform ile makaslı platform arasında ne zaman eklemli tercih edilmeli?", cevap: "Hedefe düz altından değil, bir engelin üzerinden dolanarak ya da yandan yaklaşmak gerekiyorsa eklemli platform tercih edilir. Makaslı platform yalnızca dikey yükselir; eklemli platformun çok eksenli kolu hem yukarı hem öne hem gerekirse aşağı hareket edebildiği için çatı saçağı altı, boru arkası gibi engelli hedeflerde daha uygundur. Hedef doğrudan üstteyse ve engel yoksa makaslı platform daha ekonomik ve hızlı kurulur." },
            { soru: "OSB'deki sanayi holünün çelik konstrüksiyon cephesine erişebilir misiniz?", cevap: "Evet, kolon aralığı ve tavan yüksekliği bilgisiyle uygun sınıf belirlenir. Yüksek tavanlı hollerde büyük dizel eklemli platform tercih edilir; kolun menzili, makinenin duracağı nokta önceden planlanarak birden fazla kolon aralığını tek kurulumda kapsayacak şekilde kullanılır. Zeminin düz ve sağlam olması, destek ayaklarının tam temas etmesi için gereklidir." },
            { soru: "Rüzgârlı havada çalışmaya devam edebiliyor musunuz?", cevap: "Belirli bir rüzgâr hızının üzerinde kol açık tutulmaz ve iş güvenlik gerekçesiyle ertelenir. Amasya'nın vadi coğrafyasında rüzgâr koşulu noktadan noktaya değişebildiği için, iş günü sabahında sahada anlık ölçüm yapılır ve karar buna göre verilir. Rüzgârlı dönemde planlanan işlerde esnek bir tarih aralığı bırakmanızı öneririz." },
            { soru: "Silo veya tarımsal depolama yapısının dış yüzeyine ulaşabilir miyiz?", cevap: "Ulaşılabilir; kolun uzun menzili sayesinde makine silonun tabanına yakın bir noktada durup üst kapak veya havalandırma bacası gibi yüksek noktalara erişebilir. Kırsal sahalarda zemin genellikle toprak veya stabilize olduğu için, makinenin ağırlığına göre zemin kontrolü önceden yapılır; gerekirse plaka desteğiyle zemin güçlendirilir." },
            { soru: "Dizel mi elektrikli mi tercih etmeliyiz?", cevap: "Açık OSB sahasında uzun süreli ve uzak mesafeli işlerde dizel model daha uygun; sessiz çalışma gereken yerleşim yakını veya kısmen kapalı hacimlerde elektrikli model tercih edilir. Kesin karar sahanın açık-kapalı niteliğine ve iş süresine göre verilir; işin niteliğini paylaştığınızda size uygun modeli öneririz." },
            { soru: "Zemin eğimli olursa eklemli platform kurulabilir mi?", cevap: "Hafif eğimler bazı modellerde destek ayaklarıyla telafi edilebilir, ancak belirli bir eğim sınırının üzerinde makine güvenli açılamaz. Kurulum öncesi zeminin eğim açısı ve sağlamlığı kontrol edilir; sınır aşılıyorsa zemin düzeltmesi ya da farklı bir sınıf değerlendirilir. Zeminin fotoğrafını ve varsa eğim bilgisini paylaşmanız, doğru kararı önceden vermemizi sağlar." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya OSB'deki çelik konstrüksiyonlu sanayi holleri ve kırsal tarımsal silo yapılarının varlığı kamuya açık genel bilgidir; eklemli platformun kol geometrisi ve rüzgâr/zemin kısıtları sektör geneli teknik bilgidir, model seçim yaklaşımı firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Amasya'da İç Mekân ve Depo İçi Platform Kiralama",
        giris:
            "Amasya'daki iç mekân platform ihtiyacının büyük kısmı, meyve işleme tesislerinin soğuk hava depoları, tasnif-paketleme salonları ve OSB'deki ambalaj-metal işleme fabrikalarının depo alanlarından gelir. Bu hacimlerin ortak özelliği, dar koridor, düşük tavan boşluğu veya hassas zemin gibi bir kısıtın makine seçimini baştan sınırlamasıdır. Egzoz gazı üretmeyen akülü makaslı platform, gıda hacimlerinde standart tercih olsa da, bazı depoların raf koridoru bu sınıfın dönüş yarıçapına yetmez; bu durumda dar şasili model ya da dikey mast platform devreye girer. OSB'deki metal işleme fabrikalarının iç mekânlarında ise gıda hijyeni kısıtı olmasa da, üretim hattı çalışırken oluşan toz ve kıvılcım riskine karşı makinenin yakınında bulunması gereken önlemler farklıdır. İç mekân işlerinin çoğu, tesis üretimi sürerken planlanan kısa duruş pencerelerine sıkışır; bu yüzden kurulum hızı ve manevra kabiliyeti, açık saha işlerine göre çok daha belirleyicidir. Bu sayfa Amasya genelinde iç mekân ve depo içi platform seçiminin nasıl yapıldığını anlatır.",
        maddeler: [
            { baslik: "Raf koridoru genişliğine göre şasi seçimi", metin: "Yüksek raflı depolarda koridor genişliği, standart makaslı platformun dönüş yarıçapına göre daraltılmış olabilir. Bu durumda dar şasili makaslı model ya da tek kişilik dikey mast platform tercih edilir; ikincisi çok daha küçük alanda çalışır ama erişim yüksekliği ve taşıma kapasitesi sınırlıdır. Koridor genişliği ve raf üst kotu önceden bilinmeden gönderilen makine sahada geri dönebilir." },
            { baslik: "Kısa duruş penceresinde hızlı kurulum ihtiyacı", metin: "Üretim hattının üstünde çalışmak gerektiğinde duruş süresi genelde kısa ve vardiya sonuna sıkışmış olur. Akülü makaslı platform, iskele kurmaya göre çok daha hızlı devreye girer ve iş bitince hattı hızla boşaltır; bu yüzden kısa pencereli işlerde neredeyse tek uygulanabilir seçenektir." },
            { baslik: "Zemin hassasiyeti ve iz bırakmama gerekliliği", metin: "Epoksi kaplı ya da hassas kaplamalı zeminlerde tekerlek izi bırakmayan lastik seçimi önemlidir. Meyve işleme salonlarında ve OSB ambalaj depolarında bu tür zeminler yaygındır; makine kiralanırken lastik tipi ve zemine etkisi konusu önceden netleştirilir." },
            { baslik: "Toz ve kıvılcım riski taşıyan üretim alanlarında elektrikli tercih", metin: "OSB'deki bazı metal işleme atölyelerinde kesme-taşlama işlemleri sırasında toz ve kıvılcım oluşur. Bu alanlarda kullanılacak platform, kıvılcımla tutuşabilecek yakıt sistemine sahip olmamalıdır; akülü elektrikli model bu risk açısından daha güvenlidir. Sahanın toz/kıvılcım profili önceden bildirildiğinde uygun model belirlenir." },
            { baslik: "Tavan boşluğu ve sprinkler hattı gibi üst engellerin planlanması", metin: "Bazı depo hacimlerinde tavana yakın sprinkler hattı, kablo tavası veya havalandırma kanalı bulunur; makinenin sepet üst noktası bu engellerle çakışmamalıdır. Tavan boşluğu ölçüsü önceden alınmadan gönderilen makine, hedefe yaklaşırken üst engelle karşılaşabilir; bu yüzden tavan yüksekliği ve engel konumu keşif aşamasında netleştirilir." },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân hacim tipine göre platform eşleşmesi",
                paragraflar: [
                    "Amasya'daki iç mekân işlerinde en sık karşılaşılan hacim tipleri ve buna uygun sınıf aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Belirleyici kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Soğuk hava deposu raf koridoru", "Dar koridor, düşük sıcaklık", "Dar şasili akülü makaslı"],
                        ["Tasnif-paketleme salonu", "Hat üstü, kısa duruş", "Standart akülü makaslı"],
                        ["OSB ambalaj deposu", "Yüksek raf, dar dönüş", "Dikey mast platform"],
                        ["Metal işleme atölyesi", "Toz/kıvılcım riski", "Akülü elektrikli, kıvılcım güvenli"],
                    ],
                },
            },
            {
                baslik: "Dikey mast platform ile makaslı platform arasındaki fark",
                paragraflar: [
                    "Dikey mast platform, tek kişilik sepeti ve çok dar taban ölçüsüyle makaslı platformun giremediği koridorlarda çalışabilir; buna karşılık taşıma kapasitesi düşüktür ve genelde tek operatör + hafif malzeme taşır. Makaslı platform daha geniş sepet ve daha yüksek taşıma kapasitesi sunar ama koridor genişliği yetersizse giremez.",
                    "Amasya'daki depo işlerinde hangi sınıfın kullanılacağı, koridor ölçüsü ile taşınacak malzeme ağırlığının birlikte değerlendirilmesiyle belirlenir; ikisi arasında kesin bir üstünlük yoktur, sahanın kısıtına göre değişir.",
                ],
            },
            {
                baslik: "İç mekân işine özgü keşif ve teyit adımları",
                paragraflar: [
                    "İç mekân işine gönderilecek makinenin sahaya uygunluğu, telefonla alınan bilgiyle büyük ölçüde belirlenebilir; ancak ilk kez çalışılan tesislerde kısa bir ön ziyaret öneririz. Bu ziyarette kapı ölçüsü, koridor genişliği, tavan boşluğu ve zemin cinsi yerinde doğrulanır. Ön ziyaret ücretsizdir; amaç, makinenin sahaya ilk seferde uygun gitmesini garanti altına almaktır.",
                ],
            },
        ],
        sss: [
            { soru: "Depomuzun koridoru dar, hangi platform girer?", cevap: "Koridor genişliği ve raf üst kotuna göre değişir. Dar şasili makaslı platform çoğu depoda çalışır; koridor daha da darsa dikey mast platform tercih edilir, bu sınıf çok daha küçük alanda dönebilir ama taşıma kapasitesi sınırlıdır. Koridor ölçüsünü ve taşınacak malzemenin ağırlığını paylaşırsanız uygun sınıfı doğrudan söyleriz." },
            { soru: "İç mekânda dizel makine kullanılabilir mi?", cevap: "Kapalı hacimlerde, özellikle gıda üretim alanlarında dizel makine kullanılmaz; egzoz gazı riski nedeniyle akülü elektrikli platform standart tercihtir. OSB'deki bazı büyük ve iyi havalandırılan endüstriyel hacimlerde istisnai olarak değerlendirilebilir, ancak bu durum önceden tesisle birlikte netleştirilir." },
            { soru: "Zeminde iz bırakmayacağını nasıl garanti ediyorsunuz?", cevap: "Hassas zeminlerde iz bırakmayan (non-marking) lastikli makine kullanılır; bu lastikler standart lastiklerden farklı bir bileşime sahiptir ve epoksi kaplama üzerinde kalıcı iz oluşturmaz. Zemin tipini önceden bildirdiğinizde, uygun lastikli makinenin gönderilmesini teyit ederiz." },
            { soru: "Üretim hattımız açıkken makine sokabilir misiniz?", cevap: "Hattın tam üstünde çalışmak için genelde kısa bir duruş gerekir; hattın yanındaki işler ise alan bariyerlenerek üretim sürerken yapılabilir. Kısa duruş penceresi için akülü makaslı platform, hızlı kurulumu sayesinde en uygun seçenektir. Duruş saatini önceden bildirirseniz, makine ve ekip o pencereye hazır bekler." },
            { soru: "Tavanımızda sprinkler hattı var, makine buna çarpar mı?", cevap: "Çarpmaması için tavan boşluğu ve engel konumunun önceden ölçülmesi gerekir. Sepet üst noktası hesaplanırken sprinkler hattı, kablo tavası gibi engeller referans alınır ve makinenin menzili buna göre sınırlandırılır. Bu ölçüler bilinmiyorsa ilk ziyarette birlikte tespit ederiz; tahminle çalışılmaz." },
            { soru: "OSB'deki metal işleme atölyemizde toz ve kıvılcım var, hangi makine güvenli?", cevap: "Kıvılcımla tutuşma riski taşıyan alanlarda akülü elektrikli platform tercih edilir; yakıt sistemi olmadığı için bu risk açısından daha güvenlidir. Atölyenizin toz-kıvılcım yoğunluğunu ve çalışma alanının havalandırma durumunu paylaşırsanız, en uygun modeli ve varsa ek güvenlik önlemini birlikte netleştiririz." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'nın soğuk hava deposu ve OSB metal-ambalaj tesisi kimliği kamuya açık genel bilgidir; dar koridor, iz bırakmama ve kıvılcım güvenliği gibi teknik ölçütler sektör geneli ekipman bilgisidir, saha uygulama yaklaşımı firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Amasya'da Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "Amasya OSB ve Merzifon OSB'deki metal işleme fabrikalarının sanayi holleri, çelik konstrüksiyon üzerine kurulur; bu yapıların montaj, tadilat ve çatı-cephe bakım işleri, yerden birkaç metre ile on metrenin üzerine kadar değişen bir yükseklik bandında yürür. Yeni bir hol inşasında çelik kolon ve kiriş montajı, cıvata sıkma ve kaynak kontrol noktaları yerden yüksekte olduğu için platform gerektirir; mevcut bir holün çatı kaplama tamiri veya cephe panel değişimi de aynı erişim ihtiyacını taşır. Meyve işleme tesislerinin depolama ve üretim binaları da benzer çelik konstrüksiyon karakterine sahiptir; bu yapıların çatı aşığı, oluk sistemi ve cephe kaplaması, sanayi holleriyle aynı mantıkla platform gerektirir. Montaj işlerinde platform genellikle demirci ve kaynakçı ekibiyle birlikte, günlerce süren bir programda çalışır; bu, kısa süreli bakım işinden farklı bir planlama ister. Bu sayfa Amasya'daki çelik konstrüksiyon montaj ve bakım işlerinde platformun nasıl konumlandığını anlatır.",
        maddeler: [
            { baslik: "Kolon-kiriş montajında platformun kaynakçı ekibiyle koordinasyonu", metin: "Yeni bir sanayi holünün çelik iskeleti kurulurken, kaynak ve cıvata sıkma işlemleri kolon-kiriş birleşim noktalarında yerden yüksekte yapılır. Platform bu noktalara kaynakçıyı taşır ve iş bitene kadar sabit durur; kaynak sırasında oluşan kıvılcım ve ısı, makinenin lastik ve hidrolik hatlarının bu noktalardan uzak tutulmasını gerektirir. İş programı, montaj ekibinin günlük ilerleme hızına göre birlikte planlanır." },
            { baslik: "Çatı kaplama ve aşık seviyesinde bakım işleri", metin: "Sanayi holünün çatı kaplaması zamanla delinme, korozyon veya sızdırmazlık kaybı yaşayabilir; bu tür tamirler çatı aşığı seviyesinde çalışmayı gerektirir. Eklemli platform, çatı altına kol uzatarak hem alttan kontrol hem müdahale imkânı sunar; büyük hollerde tek kurulumda birden fazla aşık aralığı taranır." },
            { baslik: "Cephe paneli montaj ve değişim işleri", metin: "Sanayi holünün dış cephe panelleri, hava koşullarından etkilenerek zamanla değişim gerektirebilir. Panel sökme-takma işi, panelin ağırlığına göre platform sepetinde iki kişilik çalışma alanı ve yeterli taşıma kapasitesi ister; bu iş genelde forkliftle malzeme taşıma ile eş zamanlı yürür." },
            { baslik: "Yüksek tavanlı hollerde makine sınıfı ve kol menzili planı", metin: "On metrenin üzerindeki hollerde büyük dizel eklemli platform gerekir; kol menzili, kolon aralığı ve tavan yüksekliğine göre önceden hesaplanır. Makinenin duracağı nokta ile hedef arasındaki mesafe planlanmadan gönderilen makine, menzil yetersizliğiyle karşılaşabilir." },
            { baslik: "Montaj süresince güvenlik alanı ve malzeme akışının planlanması", metin: "Çelik montaj işleri günlerce sürdüğü için, platformun çalıştığı alan diğer inşaat trafiğinden ayrılmalıdır; düşen malzeme riski ve vinç-forklift hareketiyle çakışma ihtimali önceden değerlendirilir. Günlük iş başlangıcında alan kontrolü yapılır, malzeme akışı platformun çalışma saatiyle çakışmayacak şekilde programlanır." },
        ],
        ekBolumler: [
            {
                baslik: "Çelik konstrüksiyon işlerinde yükseklik bandına göre sınıf",
                paragraflar: [
                    "Aşağıdaki tablo, farklı yükseklik bantlarındaki çelik konstrüksiyon işleri için tercih edilen platform sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Yükseklik bandı", "Tipik iş", "Uygun sınıf"],
                    satirlar: [
                        ["0-6 m", "Cephe paneli, alt aşık kontrolü", "Makaslı platform"],
                        ["6-12 m", "Kolon-kiriş montajı, çatı aşığı", "Orta dizel eklemli"],
                        ["12 m ve üzeri", "Büyük hol çatı üst kotu", "Büyük dizel eklemli"],
                        ["Engelli/dar geçişli hedef", "Kolon arası dar boşluk", "Örümcek platform"],
                    ],
                },
            },
            {
                baslik: "Yeni inşa ile mevcut yapı bakımının planlama farkı",
                paragraflar: [
                    "Yeni bir hol inşasında platform, montaj ekibinin ilerleme takvimine bağlı olarak günlerce sahada kalır; bu süre boyunca makine tesise tahsis edilir ve program montaj hızına göre güncellenir. Mevcut bir yapının bakım işinde ise genelde daha kısa, tanımlı bir kapsam vardır — belirli sayıda aşık veya panel noktası kontrol edilir ve iş biter.",
                    "Bu iki senaryo farklı fiyatlandırma ve planlama mantığı gerektirir; yeni inşa işlerinde günlük/haftalık kiralama, bakım işlerinde ise iş kapsamına göre kısa süreli kiralama daha uygun olur.",
                ],
            },
            {
                baslik: "Montaj öncesi paylaşılması gereken teknik bilgiler",
                paragraflar: [
                    "Doğru sınıfın planlanması için hol yüksekliği, kolon aralığı, çatı eğim açısı, zemin cinsi (dökülmüş beton mü, henüz kaplanmamış mı) ve montaj programının süresi paylaşılmalıdır. Yeni inşa sahalarında zemin bazen henüz nihai hâlini almamış olabilir; bu durumda makinenin geçici zeminde güvenli çalışıp çalışamayacağı ayrıca değerlendirilir.",
                ],
            },
        ],
        sss: [
            { soru: "Yeni bir sanayi holü inşasında platform ne kadar süreyle sahada kalır?", cevap: "Bu, montaj ekibinin ilerleme hızına bağlıdır; kolon-kiriş montajı ve çatı kaplama işleri günlerce, bazen haftalarca sürebilir. Bu tür işlerde makine genelde günlük veya haftalık kiralama ile tesise tahsis edilir ve program montaj hızına göre güncellenir. Kesin süre için montaj programınızı paylaşmanız, doğru kiralama modelini önermemizi sağlar." },
            { soru: "Çatı kaplama tamiri için hangi sınıf platform gerekir?", cevap: "Hol yüksekliği ve çatı eğimine bağlıdır; genelde eklemli platform tercih edilir çünkü kol çatı altına uzanarak hem alttan kontrol hem müdahale imkânı sunar. On iki metrenin üzerindeki büyük hollerde büyük dizel eklemli model gerekirken, daha alçak yapılarda orta sınıf yeterli olabilir. Hol yüksekliğini ve çatı eğim açısını paylaşırsanız uygun sınıfı netleştiririz." },
            { soru: "Zemin henüz dökülmemiş inşaat sahasında platform çalışabilir mi?", cevap: "Zeminin geçici durumuna bağlıdır; sıkıştırılmış stabilize zemin üzerinde çalışılabilir ama zemin yumuşak veya düzensizse önce zemin iyileştirmesi ya da plaka desteği gerekir. İnşaat aşamasındaki sahalarda zemin durumu her zaman iş öncesi yerinde kontrol edilir; telefonla verilen bilgiyle kesin karar verilmez." },
            { soru: "Kaynak işlemi sırasında platform kullanmak güvenli mi?", cevap: "Evet, ancak kıvılcım ve ısıya karşı önlem alınır; makinenin lastik ve hidrolik hatları kaynak noktasından uzak tutulur, gerekirse yanmaz örtü kullanılır. Kaynakçı ekibiyle koordinasyon, hangi noktada ne kadar süre kalınacağını netleştirir; bu koordinasyon olmadan kaynak işlemine platformla yaklaşılmaz." },
            { soru: "Cephe paneli değişiminde forklift de gerekiyor mu?", cevap: "Panelin ağırlığına bağlı olarak genelde evet; platform sepette çalışan ekibi taşırken, forklift yeni paneli çalışma noktasına kadar getirir ya da sökülen eski paneli uzaklaştırır. İki makinenin aynı sahada koordineli çalışması için önceden bir sıralama ve güvenlik mesafesi planlanır." },
            { soru: "Montaj işi için haftalık mı yoksa günlük kiralama mı daha uygun?", cevap: "Bu, montaj programınızın süresine bağlıdır. Kısa, tanımlı kapsamlı bakım işlerinde günlük kiralama; günlerce süren yeni inşa montajında ise haftalık kiralama genelde daha ekonomiktir. Montaj programınızı paylaştığınızda, toplam maliyeti daha düşük çıkaracak modeli sizinle birlikte hesaplarız." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya OSB ve Merzifon OSB'deki çelik konstrüksiyonlu sanayi holü varlığı kamuya açık genel bilgidir; montaj-bakım süreç anlatımı ve platform-forklift-kaynakçı koordinasyonu sektör geneli uygulama bilgisidir, özel proje veya firma iddiası içermez.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Amasya'da Tarım ve Silo Sahası Platform Kiralama",
        giris:
            "Amasya'nın kırsal kesimi, meyve bahçeleri, tarım arazileri ve bu üretimi destekleyen silo-depolama yapılarıyla çevrilidir; bu yapıların bakım ve erişim ihtiyacı, sanayi tesisinden farklı bir zemin ve mevsim gerçeğiyle karşılaşır. Tahıl veya meyve deposu olarak kullanılan silo yapılarının dış yüzeyi, üst kapağı ve havalandırma bacaları yerden on metreye kadar yükselebilir ve bu noktalara merdivenle güvenli erişim mümkün değildir. Kırsal sahaların zemini genellikle toprak, çim veya stabilizedir; bu, sert beton zemine göre tasarlanmış standart platformların bazılarının burada güvenle çalışamayacağı anlamına gelir — geniş lastikli ve düşük zemin baskılı modeller tercih edilir. Hasat sezonu, hem tarımsal üretimin hem de silo doluluk oranının en yüksek olduğu dönemdir; bu dönemde silo bakımı için erişim penceresi daralır ve iş genelde sezon öncesi veya sonrasına planlanır. Bu sayfa Amasya kırsalındaki tarımsal ve silo sahalarında platform kullanımının hangi kısıtlarla şekillendiğini anlatır.",
        maddeler: [
            { baslik: "Toprak ve stabilize zeminde makine seçimi", metin: "Kırsal sahalarda zemin genellikle sıkıştırılmamış toprak veya stabilizedir ve yağış sonrası yumuşayabilir. Bu zeminde geniş lastikli, düşük zemin baskılı dizel eklemli platform tercih edilir; standart dar tekerlekli makaslı platform bu zeminde saplanabilir. Zemin durumu, iş gününden önce mutlaka telefonla teyit edilir." },
            { baslik: "Silo üst kapağı ve havalandırma bacası erişimi", metin: "Tahıl veya meyve silosunun üst kapağı ve havalandırma bacası, silonun en yüksek noktasındadır ve dış yüzeyden merdivenle erişim güvenli değildir. Eklemli platformun uzun kol menzili, makinenin silo tabanına yakın bir noktada durup üst kapağa ulaşmasını sağlar; bu, silonun etrafında iskele kurmaktan çok daha hızlı bir çözümdür." },
            { baslik: "Hasat sezonu öncesi ve sonrası bakım penceresi", metin: "Hasat sezonunda silo dolu ve tarım trafiği yoğun olduğu için bakım işi için uygun pencere daralır. Sezon öncesi, silo henüz boşken yapılan kontrol ve bakım, sezon içindeki arıza riskini büyük ölçüde azaltır; sezon sonrası ise hasarların tespit edildiği ve onarımların planlandığı dönemdir." },
            { baslik: "Meyve bahçesi ve tarla kenarındaki yapıların bakımı", metin: "Bahçe kenarındaki sulama kulesi, ilaçlama deposu veya paketleme barakası gibi yapılar da yükseklik erişimi gerektirebilir. Bu tür sahalarda genellikle küçük ölçekli ve dar geçişli erişim söz konusudur; sahanın yol durumu ve makinenin geçebileceği güzergâh önceden değerlendirilir." },
            { baslik: "Kırsal sahada nakliye ve zemin taşıma süresi", metin: "Kırsal bir sahaya makine ulaştırmak, OSB'ye teslimattan farklı bir süre alabilir; yol durumu, mesafe ve zemin geçişi hesaba katılır. Yağışlı dönemde bazı toprak yollar ağır araç taşımaya uygun olmayabilir; bu durumda alternatif güzergâh veya bekleme süresi önceden değerlendirilir." },
        ],
        ekBolumler: [
            {
                baslik: "Tarım ve silo sahalarında yapı tipine göre platform eşleşmesi",
                paragraflar: [
                    "Kırsal kesimdeki başlıca yapı tipleri ve bunlara uygun platform sınıfı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Belirleyici kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Tahıl/meyve silosu (dış yüzey)", "Yükseklik, toprak zemin", "Geniş lastikli dizel eklemli"],
                        ["Bahçe kenarı sulama kulesi", "Dar erişim, düşük yükseklik", "Küçük eklemli/makaslı"],
                        ["Paketleme barakası çatısı", "Hafif yapı, sınırlı zemin", "Hafif dizel eklemli"],
                        ["Silo grubu arası dar geçit", "Engelli, dar alan", "Örümcek platform"],
                    ],
                },
            },
            {
                baslik: "Sezon öncesi toplu bakım listesi mantığı",
                paragraflar: [
                    "Silo ve tarımsal yapı bakımını tek tek değil, sezon öncesi tek bir listede toplamak hem nakliye maliyetini hem toplam süreyi düşürür. Bir çiftlik veya kooperatif sahasındaki birden fazla silo, aynı ziyarette sırayla kontrol edilebilir; bu, her biri için ayrı sevkiyat yapmaktan çok daha verimlidir.",
                    "Liste hazırlanırken her yapının erişim yüksekliği, zemin durumu ve öncelik sırası not edilir; iş günü bu sıraya göre ilerlenir ve gün sonunda tamamlanan-ertelenen kalemler ayrı gösterilir.",
                ],
            },
            {
                baslik: "Kırsal sahaya sevkiyat öncesi paylaşılması gereken bilgiler",
                paragraflar: [
                    "Doğru makinenin ilk seferde ulaşması için sahanın yol durumu, zemin cinsi, silonun veya yapının yüksekliği, işin yapılacağı mevsim ve varsa sulama-tarım faaliyetiyle çakışma riski paylaşılmalıdır. Yağışlı dönemde planlanan işlerde yol durumu iş gününe yakın tekrar teyit edilir; kesin olmayan bir yol bilgisiyle makine yola çıkarılmaz.",
                ],
            },
        ],
        sss: [
            { soru: "Toprak zeminde platform çalışabilir mi, saplanma riski var mı?", cevap: "Zemin kuru ve sıkıysa geniş lastikli dizel eklemli platform genelde sorunsuz çalışır; ancak yağış sonrası yumuşamış toprakta saplanma riski artar. Bu yüzden iş gününe yakın zemin durumu telefonla teyit edilir, gerekirse iş ertelenir veya plaka desteğiyle zemin güçlendirilir. Standart dar tekerlekli makaslı platform kırsal toprak zeminde tercih edilmez." },
            { soru: "Silonun üst kapağına nasıl erişiyorsunuz, iskele mi kuruyorsunuz?", cevap: "İskele yerine eklemli platform kullanıyoruz; kolun uzun menzili sayesinde makine silonun tabanına yakın bir noktada durup üst kapağa veya havalandırma bacasına ulaşabilir. Bu yöntem iskele kurmaktan çok daha hızlıdır ve silonun etrafında sabit yapı bırakmaz. Silonun yüksekliği ve çevresindeki zemin durumu önceden bilinmesi gereken iki temel bilgidir." },
            { soru: "Hasat sezonunda silo bakımı yaptırabilir miyiz?", cevap: "Mümkün olabilir ama önerilmez; sezonda silo genelde dolu ve tarım trafiği yoğun olduğu için erişim penceresi daralır. Sezon öncesi, silo boşken yapılan bakım hem daha güvenli hem daha hızlıdır. Acil bir arıza durumunda sezon içinde de müdahale ederiz, ancak planlı bakımı sezon dışına almanızı öneririz." },
            { soru: "Birden fazla silomuz var, hepsini tek seferde kontrol ettirebilir miyiz?", cevap: "Evet, bu en verimli yöntemdir. Sahadaki tüm silo ve yapıların listesi çıkarılır, her biri için erişim yüksekliği ve öncelik notu alınır; makine tek ziyarette sırayla tüm listeyi tamamlar. Bu, her yapı için ayrı sevkiyat yapmaya göre hem nakliye maliyetini hem toplam süreyi belirgin düşürür." },
            { soru: "Kırsal sahaya makine ulaştırmak ne kadar sürer?", cevap: "Mesafe ve yol durumuna bağlı olarak OSB'ye teslimattan daha uzun sürebilir. Toprak veya stabilize yollar, özellikle yağışlı dönemde ağır araç taşımaya uygun olmayabilir; bu durumda alternatif güzergâh ya da bekleme süresi devreye girer. Sahanızın yol durumunu önceden paylaşırsanız gerçekçi bir teslimat süresi bildiririz." },
            { soru: "Bahçe kenarındaki küçük bir yapı için de platform kiralanır mı?", cevap: "Evet, sulama kulesi veya paketleme barakası gibi küçük ölçekli yapılar için de küçük eklemli veya makaslı platform kiralanabilir. Bu tür işlerde genelde dar erişim ve düşük yükseklik söz konusudur; sahanın yol durumu ve makinenin geçebileceği güzergâh önceden değerlendirilir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya kırsalının meyve bahçeciliği ve tarımsal depolama/silo yapıları kamuya açık genel bilgidir; zemin-yakıt seçimi ve sezon planlaması sektör geneli teknik bilgi ile firma pratiğine dayanır, özel işletme veya kapasite iddiası içermez.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Amasya'da Enerji ve Aydınlatma Bakım Platformu Kiralama",
        giris:
            "Amasya OSB ve Merzifon OSB'deki metal işleme ve ambalaj fabrikalarının yüksek tavanlı sanayi hollerinde aydınlatma armatürleri, genellikle çatı aşığına asılı ya da yüksek duvar konsoluna monteli olarak çalışır; bu armatürlerin lamba değişimi, kablo kontrolü ve periyodik temizliği merdivenle güvenle yapılamaz. Meyve işleme tesislerinin soğuk hava depolarındaki aydınlatma ise düşük sıcaklıkta çalışan özel armatürlerdir ve bakım sıklığı, standart bir depo aydınlatmasından farklıdır. OSB içi ve tesis çevresindeki tabela, direk ve dış aydınlatma hatları da benzer bir erişim ihtiyacı taşır; bu noktalar genelde açık sahada, farklı yükseklik ve konumlarda dağılmıştır. Elektrik hattı ve trafo çevresi gibi enerji altyapısına yakın çalışmalarda, platformun iletken olmayan bileşenleri ve güvenli yaklaşma mesafesi ayrıca önem kazanır. Bu sayfa Amasya genelinde enerji ve aydınlatma bakım işlerinde platformun nasıl planlandığını, hangi sınıfın hangi noktada kullanıldığını anlatır.",
        maddeler: [
            { baslik: "Sanayi holü çatı aşığı aydınlatma bakımı", metin: "Yüksek tavanlı sanayi hollerinde armatürler çatı aşığına asılıdır ve yerden on metreye kadar yükseklikte olabilir. Eklemli platform, kolonlar arasında manevra ederek armatür sırasını takip eder; büyük hollerde tek kurulumda birden fazla armatür kontrol edilir, bu da toplam iş süresini kısaltır." },
            { baslik: "Soğuk hava deposu aydınlatma ve düşük sıcaklık etkisi", metin: "Soğuk depo aydınlatması, düşük sıcaklıkta çalışmaya uygun özel armatürlerle yapılır ve bu armatürlerin arıza sıklığı standart depodan farklıdır. Bakım için kullanılan platform da akülü elektrikli olmalıdır; düşük sıcaklıkta akü performansı düştüğü için uzun işlerde şarj planı önceden yapılır." },
            { baslik: "OSB içi ve tesis çevresi direk-tabela aydınlatması", metin: "OSB'nin ana yollarındaki aydınlatma direkleri ve tesis giriş tabelaları, açık sahada dağınık konumdadır; bu işler genelde tek bir platformla birden fazla noktanın sırayla dolaşıldığı bir rota şeklinde planlanır. Direk aralıkları ve yol genişliği, makinenin duracağı noktaları belirler." },
            { baslik: "Elektrik hattı ve trafo yakınında güvenli çalışma mesafesi", metin: "Enerji hattına veya trafoya yakın bir noktada çalışmak gerektiğinde, platformun hatta güvenli yaklaşma mesafesi önceden belirlenir ve bu mesafe iş boyunca korunur. Gerekirse ilgili hattın geçici olarak enerjisiz alınması işletmeyle koordine edilir; bu koordinasyon olmadan hat yakınında çalışma başlatılmaz." },
            { baslik: "Periyodik bakım takviminin toplu planlanması", metin: "Aydınlatma bakımı genelde tek seferlik değil, periyodik bir ihtiyaçtır. Tesisin yıllık bakım takvimine göre önceden planlanan ziyaretler, hem arıza öncesi önleyici bakımı sağlar hem de her seferinde ayrı acil talep yerine öngörülebilir bir program sunar." },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma-enerji işlerinde noktaya göre platform eşleşmesi",
                paragraflar: [
                    "Amasya'daki aydınlatma ve enerji bakım işlerinde en sık karşılaşılan nokta tipleri ve uygun sınıf aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "Belirleyici kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Sanayi holü çatı aşığı armatürü", "Yüksek tavan, kolon arası", "Orta-büyük dizel eklemli"],
                        ["Soğuk depo tavan aydınlatması", "Düşük sıcaklık, dar koridor", "Akülü makaslı"],
                        ["OSB direk/tabela aydınlatması", "Açık saha, dağınık nokta", "Dizel eklemli, rota bazlı"],
                        ["Trafo/hat yakını nokta", "Güvenli mesafe kısıtı", "Koordinasyonlu eklemli"],
                    ],
                },
            },
            {
                baslik: "Rota bazlı aydınlatma bakımının verimliliği",
                paragraflar: [
                    "OSB içindeki birden fazla direk veya tesis çevresindeki dağınık aydınlatma noktası, tek tek değil bir rota planıyla dolaşıldığında hem nakliye hem kurulum süresi tasarrufu sağlar. Rota, direk aralıkları ve yol genişliğine göre önceden kurulur; makine her durakta minimum kurulum süresiyle bir sonraki noktaya geçer.",
                    "Bu yöntem özellikle periyodik bakım turlarında etkilidir; aynı rota her bakım döneminde tekrarlanarak süre tahmini giderek netleşir.",
                ],
            },
            {
                baslik: "Enerji hattı yakınında çalışma öncesi koordinasyon",
                paragraflar: [
                    "Trafo veya orta gerilim hattına yakın bir noktada çalışma planlanıyorsa, işletmenin elektrik biriminden önceden bilgi alınır; gerekirse ilgili hat geçici olarak devre dışı bırakılır ya da güvenli mesafe işaretlenir. Bu koordinasyon adımı atlanmadan hat yakınında platform çalışması başlatılmaz; enerji hatları çevresindeki riskler diğer bakım işlerinden farklı ve daha yüksektir.",
                ],
            },
        ],
        sss: [
            { soru: "Sanayi holümüzdeki tüm çatı aydınlatmasını tek seferde kontrol ettirebilir miyiz?", cevap: "Evet, bu en verimli yöntemdir. Holün kolon aralığı ve armatür sayısı önceden bilindiğinde, makine tek kurulumda kolonlar arasında ilerleyerek tüm armatürleri sırayla kontrol eder. Bu, her armatür için ayrı bir ziyaret yapmaya göre hem süre hem maliyet açısından daha avantajlıdır." },
            { soru: "Soğuk depo aydınlatması için özel bir makine mi gerekiyor?", cevap: "Standart akülü makaslı platform kullanılır, ancak düşük sıcaklıkta akü performansı düştüğü için uzun işlerde şarj planı önceden yapılır. Ayrıca depo ile sıcak ortam arasında sık giriş-çıkış yoğuşmaya yol açabileceği için işi mümkün olduğunca tek seferde bitirmeyi öneririz." },
            { soru: "OSB'deki aydınlatma direklerini nasıl planlıyorsunuz, her biri ayrı iş mi?", cevap: "Hayır, direkler bir rota planıyla tek seferde dolaşılır. Direk aralıkları ve yol genişliği önceden bilinir, makine her durakta kısa kurulum yapıp bir sonraki direğe geçer. Bu yöntem periyodik bakım turlarında özellikle verimlidir ve rota her dönemde benzer sürede tamamlanır." },
            { soru: "Trafo yakınında çalışmak güvenli mi, ne gibi önlem alıyorsunuz?", cevap: "Trafo veya enerji hattına yakın çalışmadan önce işletmenin elektrik birimiyle koordinasyon yapılır; gerekirse hat geçici olarak enerjisiz alınır veya güvenli yaklaşma mesafesi işaretlenir. Bu koordinasyon tamamlanmadan hat yakınında platform çalışması başlatılmaz; bu, standart aydınlatma bakımından daha sıkı bir güvenlik protokolüdür." },
            { soru: "Periyodik bakım anlaşması yapabiliyor muyuz, yoksa her seferinde mi talep vermemiz gerekiyor?", cevap: "Periyodik bakım takvimi önceden planlanabilir. Tesisin yıllık bakım programına göre belirlenen tarihlerde düzenli ziyaret ayarlanır; bu, hem arıza öncesi önleyici bakımı sağlar hem de her seferinde ayrı acil talep yerine öngörülebilir bir program sunar. Takvim değişikliği olduğunda önceden bildirmeniz yeterlidir." },
            { soru: "Açık sahadaki tabela aydınlatması için hangi mevsim uygun?", cevap: "Açık saha işleri için özel bir mevsim kısıtı yoktur, ancak kuru ve rüzgârsız havalar tercih edilir; yağışlı veya rüzgârlı dönemde kol açık kalması güvenlik açısından sınırlanabilir. Hava koşuluna bağlı erteleme ihtimaline karşı planlı işlerde birkaç günlük esnek bir tarih aralığı bırakmanızı öneririz." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya OSB ve Merzifon OSB'deki sanayi holü ve soğuk hava deposu tesis varlığı kamuya açık genel bilgidir; aydınlatma bakım rotası ve enerji hattı koordinasyonu sektör geneli teknik bilgi ile firma pratiğine dayanır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Amasya'da Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Amasya'daki müşterilerimizin operatörlü mü yoksa operatörsüz mü kiralama yapacağı sorusu, çoğunlukla tesisin daha önce platformla ne kadar çalıştığına ve işin ne kadar teknik olduğuna bağlı olarak cevaplanır. Meyve işleme tesisine ilk kez platform sokulacaksa, gıda hijyeni prosedürü ve soğuk depo koşulları gibi ek kurallar da devreye girdiği için operatörlü kiralamayı öneririz; prosedürün nasıl işlediği bir kez birlikte görülür, sonraki işler tesisin kendi ekibiyle rahat yürür. OSB'deki metal işleme fabrikalarında, kendi bünyesinde deneyimli forklift ve platform kullanıcısı bulunan işletmeler genelde operatörsüz tercih eder; bu, hem maliyeti düşürür hem işin tesisin kendi programına göre esnek yürütülmesini sağlar. Örümcek platform gibi çok eklemli ve teknik bilgi gerektiren sınıflarda ise deneyim seviyesi ne olursa olsun operatörlü kiralama önerilir, çünkü istinat kolu yerleşimi hatalı yapıldığında makine dengesizleşebilir. Bu sayfa iki kiralama modelinin Amasya'daki hangi işte, hangi gerekçeyle tercih edildiğini anlatır.",
        maddeler: [
            { baslik: "İlk kez platform kullanan gıda tesisi için operatörlü öneri", metin: "Meyve işleme veya soğuk depo tesisine ilk kez platform giriyorsa, gıda hijyeni prosedürü, hidrolik sızıntı kontrolü ve dar koridor manevrası gibi konularda deneyimsiz bir kullanıcı hata yapabilir. Operatörlü kiralamada bu prosedürler bizim personelimiz tarafından uygulanır; tesis ekibi süreci gözlemleyerek öğrenir ve sonraki işlerde kendi ekibiyle operatörsüz devam edebilir." },
            { baslik: "Deneyimli OSB işletmesi için operatörsüz esneklik", metin: "Kendi bünyesinde sertifikalı ve deneyimli platform kullanıcısı bulunan metal işleme veya ambalaj fabrikaları, operatörsüz kiralamayı tercih eder. Bu modelde makine, tesisin kendi üretim programına göre istenilen saatte kullanılabilir; biz yalnızca teslim ve teknik bilgilendirmeyi üstleniriz." },
            { baslik: "Teknik sınıflarda (örümcek, büyük eklemli) operatörlü zorunluluğu", metin: "İstinat kollu örümcek platform veya büyük dizel eklemli platform gibi sınıflar, kol açılım sırası ve denge hesabı gerektiren daha karmaşık makinelerdir. Bu sınıflarda deneyim seviyesi ne olursa olsun operatörlü kiralamayı öneririz; hatalı bir kol açılımı makinenin dengesini bozabilir ve ciddi bir güvenlik riski oluşturur." },
            { baslik: "Teslimde yapılan saha eğitimi ve teslim tutanağı", metin: "Operatörsüz kiralamada, makineyi kullanacak personelin yüksekte çalışma yeterliliği doğrulanır ve teslimde kumanda düzeni, güvenlik donanımı, acil indirme prosedürü ve modele özgü kısıtlar için saha eğitimi verilir; bu eğitim teslim tutanağına işlenir. Eğitim atlanmadan hiçbir makine operatörsüz teslim edilmez." },
            { baslik: "Karma model: kısa iş operatörlü, uzun iş operatörsüz", metin: "Bazı tesisler, kısa ve teknik bir işi operatörlü, ardından gelen uzun süreli genel bakım işini kendi ekibiyle operatörsüz yürütmeyi tercih eder. Bu karma model, işin niteliğine göre esnek biçimde kurulabilir; hangi bölümün operatörlü hangi bölümün operatörsüz olacağı iş planlamasında baştan netleştirilir." },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralama karşılaştırması",
                paragraflar: [
                    "İki modelin temel farkları aşağıdaki tabloda özetlenmiştir; hangi modelin uygun olduğu işin tekniği ve tesisin deneyimine göre değişir.",
                ],
                tablo: {
                    basliklar: ["Kriter", "Operatörlü", "Operatörsüz"],
                    satirlar: [
                        ["Uygun tesis profili", "İlk kez çalışan / deneyimsiz ekip", "Deneyimli, sertifikalı kullanıcı"],
                        ["Program esnekliği", "Bizim vardiya planımıza bağlı", "Tesisin kendi programına bağlı"],
                        ["Teknik sınıf uygunluğu", "Tüm sınıflarda mümkün", "Basit sınıflarda önerilir"],
                        ["Maliyet", "Operatör bedeli dahil", "Yalnızca makine bedeli"],
                    ],
                },
            },
            {
                baslik: "Operatörsüz kiralamada yeterlilik kontrolü",
                paragraflar: [
                    "Operatörsüz kiralama öncesinde, makineyi kullanacak personelin yüksekte çalışma ve platform kullanım deneyimi sorulur; resmi bir sertifika şart koşulmasa da temel kullanım bilgisi ve önceki deneyim teyit edilir. Deneyimsiz bir kullanıcı operatörsüz talep ederse, ilk iş için operatörlü modeli öneririz — bu, tesisin güvenliği kadar makinenin sağlığı için de önemlidir.",
                    "Teslimde verilen saha eğitimi, sertifika yerine geçmez ama o modele özgü kısıtları ve acil durum prosedürünü kapsar; bu eğitim her operatörsüz teslimde standart uygulamamızdır.",
                ],
            },
            {
                baslik: "Gıda hacminde operatörlü kiralamanın ek faydası",
                paragraflar: [
                    "Meyve işleme ve soğuk depo gibi gıda hacimlerinde operatörlü kiralama, yalnızca makine kullanımı değil aynı zamanda hijyen prosedürünün doğru uygulanması anlamına gelir. Bizim personelimiz, hacme giriş öncesi temizlik, küçük parça sayımı ve sızıntı kontrolü gibi adımları rutin olarak uygular; bu, tesisin kalite biriminin her seferinde hatırlatmasına gerek bırakmaz.",
                ],
            },
        ],
        sss: [
            { soru: "Hangi durumda operatörlü, hangi durumda operatörsüz kiralamalıyız?", cevap: "Tesisiniz platformla ilk kez çalışıyorsa veya iş teknik bir sınıf (örümcek platform, büyük eklemli) gerektiriyorsa operatörlü kiralamayı öneririz. Kendi bünyenizde deneyimli ve sertifikalı kullanıcı varsa, basit sınıflarda operatörsüz kiralama hem maliyeti düşürür hem programı sizin kontrolünüze bırakır. Kesin öneri, işin tekniği ve ekibinizin deneyimi birlikte değerlendirilerek verilir." },
            { soru: "Operatörsüz kiralamada bir sertifika istiyor musunuz?", cevap: "Resmi bir sertifika şart koşmuyoruz ama makineyi kullanacak personelin yüksekte çalışma ve platform kullanım deneyimini soruyoruz. Deneyim yetersizse ilk iş için operatörlü modeli öneririz. Teslimde ayrıca kumanda düzeni, güvenlik donanımı ve acil indirme prosedürü için saha eğitimi veririz; bu eğitim teslim tutanağına işlenir." },
            { soru: "Örümcek platformu kendi ekibimiz kullanabilir mi?", cevap: "Teknik olarak mümkün olsa da önermiyoruz. İstinat kolu açılım sırası ve denge hesabı, diğer platform sınıflarına göre daha fazla bilgi gerektirir; hatalı bir açılım makinenin dengesizleşmesine yol açabilir. Bu sınıfta deneyim seviyeniz ne olursa olsun operatörlü kiralamayı öneriyoruz." },
            { soru: "Operatörlü kiralamada işi kim yönetiyor, siz mi biz mi?", cevap: "Makineyi kullanan bizim personelimiz olur, ancak yapılacak işin ne olduğunu ve önceliklerini sizin ekibiniz belirler. Bakım veya montaj işini yapan kişi sizin teknik ekibiniz olabilir, o sepette veya alanda çalışırken makineyi bizim operatörümüz yönetir. Bu düzen, teknik bilginin sizde, makine güvenliğinin bizde kalmasını sağlar." },
            { soru: "Aynı iş içinde hem operatörlü hem operatörsüz kısım olabilir mi?", cevap: "Evet, mümkündür. Örneğin kısa ve teknik bir kurulum işini operatörlü yaptırıp, ardından gelen uzun süreli genel bakım kısmını kendi ekibinizle operatörsüz sürdürebilirsiniz. Hangi bölümün hangi model olacağı iş planlamasında baştan netleştirilir ve teklife buna göre yansıtılır." },
            { soru: "Operatörlü kiralamada gıda tesisi hijyen kuralları nasıl uygulanıyor?", cevap: "Operatörümüz, hacme giriş öncesi dış temizlik, tekerlek yüzeyi silme, küçük parça sayımı ve hidrolik sızıntı kontrolü gibi adımları rutin olarak uygular; bu adımlar tesisin kalite biriminin hatırlatmasını beklemeden yapılır. Tesisinizin kendi prosedürü daha kapsamlıysa ona uyarız; kalite biriminizin talimatı bizim standart listemizin üstündedir." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'daki gıda tesisi ve OSB metal işletmesi profil farkı kamuya açık genel bilgidir; operatörlü/operatörsüz kiralama kriterleri ve saha eğitimi uygulaması firma pratiğidir, özel sertifika veya yetkilendirme iddiası içermez.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Amasya'da Çok Noktalı Rota Bakım Platformu Kiralama",
        giris:
            "Amasya'da tek bir müşterinin farklı türde birden fazla sahası olabilir: bir meyve işleme tesisinin hem üretim binası hem soğuk hava deposu hem de idari binası; ya da OSB'de birbirine yakın konumlanmış birkaç metal işleme fabrikası. Bu tür durumlarda her sahayı ayrı ayrı sevkiyatla ziyaret etmek yerine, tek bir günde sırayla dolaşılan bir rota kurmak hem nakliye maliyetini hem toplam süreyi düşürür. Rota bazlı bakımın verimli çalışması için her noktanın erişim gereksinimi (yükseklik, zemin, iç mi dış mı) önceden bilinmelidir; farklı gereksinimli noktalar aynı makineyle karşılanamayabilir ve bu durumda rota iki makineye bölünür. Meyve işleme tesisi ile OSB metal fabrikasının aynı gün rotaya alınması, gıda hacmi hijyen kısıtı ile metal atölyesinin farklı güvenlik gerekliliklerinin aynı günde yönetilmesini gerektirir. Bu sayfa Amasya'da çok noktalı rota bakımının nasıl planlandığını, hangi durumda tek makineyle hangi durumda birden fazla makineyle çözüldüğünü anlatır.",
        maddeler: [
            { baslik: "Aynı tesis bünyesindeki farklı bina tiplerinin rotaya alınması", metin: "Bir meyve işleme kompleksinde üretim binası, soğuk depo ve idari bina farklı erişim kısıtlarına sahip olabilir; üretim binasında hat üstü kısa duruş, soğuk depoda düşük sıcaklık, idari binada ise dış cephe işi söz konusu olabilir. Bu üç alan, gün içinde sırayla planlanan tek bir rotada birleştirilebilir; her biri için ayrı sevkiyat gerekmez." },
            { baslik: "Yakın konumlu OSB fabrikalarının ortak rotaya alınması", metin: "Birbirine yakın konumlanmış farklı işletmelerin aynı gün rotaya alınması, ticari ve güvenlik sorumlulukları ayrı tutulmak kaydıyla değerlendirilebilir. Bir sahadaki gecikme diğerine habersizce yansıtılmaz; her işletmeyle ayrı teyit yapılır ve rota, gerçekçi bir zaman payıyla kurulur." },
            { baslik: "Farklı erişim gereksinimli noktaların iki makineye bölünmesi", metin: "Bir nokta iç mekân gıda hacmi, diğeri açık sahada yüksek çelik konstrüksiyon gerektiriyorsa, tek bir makine her ikisini de karşılamayabilir. Bu durumda rota, uygun sınıfların her biri için ayrı makineyle ama aynı gün içinde koordineli olarak kurulur; bu, tek makineyle uğraşmaktan daha hızlı ve daha az riskli olabilir." },
            { baslik: "Rota içinde öncelik sıralaması ve zaman payı", metin: "Rotadaki her nokta için tahmini kurulum ve iş süresi önceden hesaplanır; ilk noktanın uzaması sonraki noktaları geciktirebileceği için gerçekçi bir zaman payı bırakılır. Kritik veya acil bir nokta varsa rota bu noktayı önce kapsayacak şekilde sıralanır." },
            { baslik: "Rota tamamlanamazsa ertesi güne devam planı", metin: "Beklenmedik bir gecikme ya da hava koşulu nedeniyle rota tek günde tamamlanamayabilir; bu durumda kalan noktalar önceliklendirilerek ertesi güne aktarılır. Tamamlanan ve ertelenen kalemler gün sonunda net biçimde raporlanır, böylece hangi noktanın hâlâ bekleyen olduğu belirsiz kalmaz." },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında nokta tipine göre karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, farklı nokta tiplerinin rota içinde nasıl değerlendirildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "Erişim gereksinimi", "Rota kararı"],
                    satirlar: [
                        ["Üretim hattı üstü (gıda)", "Kısa duruş, akülü makine", "Vardiya arası pencereye yerleştirilir"],
                        ["Soğuk depo tavan/raf", "Düşük sıcaklık, akü planı", "Ayrı zaman dilimi ayrılır"],
                        ["OSB çelik konstrüksiyon cephesi", "Açık saha, büyük eklemli", "Ayrı makineyle paralel yürütülür"],
                        ["İdari bina dış cephe", "Standart erişim", "Rotanın son durağı olabilir"],
                    ],
                },
            },
            {
                baslik: "Çok noktalı rotanın maliyet avantajı",
                paragraflar: [
                    "Her noktayı ayrı sevkiyatla ziyaret etmek yerine tek rotada birleştirmek, nakliye kalemini önemli ölçüde düşürür; makine bir sahadan diğerine kısa mesafede hareket ettiği için ayrı yükleme-boşaltma tekrarlanmaz. Bu avantaj özellikle Amasya OSB gibi birbirine yakın tesislerin bulunduğu bölgelerde belirgindir.",
                    "Rotanın verimli kurulması için müşterinin tüm noktaları tek seferde bildirmesi önemlidir; sonradan eklenen bir nokta, rotayı yeniden planlamayı gerektirebilir ve bu ek maliyete yol açabilir.",
                ],
            },
            {
                baslik: "Rota planlaması için paylaşılması gereken bilgiler",
                paragraflar: [
                    "Rotanın gerçekçi kurulabilmesi için her noktanın adresi, erişim yüksekliği, iç mi dış mı olduğu, zemin durumu ve tercih edilen sıralama paylaşılmalıdır. Noktalar arası mesafe ve trafik yoğunluğu da hesaba katılır; hasat sezonunda Amasya-Merzifon hattındaki yoğun tarım trafiği rotanın zamanlamasını etkileyebilir.",
                ],
            },
        ],
        sss: [
            { soru: "Farklı türde birden fazla sahamızı tek günde nasıl planlıyorsunuz?", cevap: "Her sahanın erişim gereksinimini (yükseklik, iç-dış mekân, zemin) önceden alıyoruz ve bunlara göre bir sıralama kuruyoruz. Aynı makineyle karşılanabilecek noktalar birleştirilir; farklı gereksinimli noktalar için ikinci bir makine aynı gün içinde koordineli çalıştırılabilir. Rotanın gerçekçi kurulması için tüm noktaların baştan bildirilmesi önemlidir." },
            { soru: "Rota sırasında bir nokta beklenenden uzun sürerse ne olur?", cevap: "Her nokta için önceden tahmini süre hesaplanır ve rotaya bir zaman payı bırakılır; yine de gecikme olursa sonraki noktalar etkilenebilir. Bu durumda kritik olmayan noktalar ertesi güne aktarılır, tamamlanan ve ertelenen kalemler gün sonunda ayrı raporlanır. Kritik bir nokta varsa rota bu noktayı öne alacak şekilde baştan kurulur." },
            { soru: "Farklı işletmelerin sahalarını aynı rotaya dahil edebilir misiniz?", cevap: "Yakın konumlu farklı işletmelerin aynı gün rotaya alınması değerlendirilebilir, ancak ticari ve güvenlik sorumlulukları ayrı tutulur. Bir sahadaki gecikme diğer işletmeye habersizce yansıtılmaz; her işletmeyle ayrı teyit yapılır ve rota gerçekçi bir zaman payıyla kurulur." },
            { soru: "Gıda tesisi ile OSB metal fabrikasını aynı gün rotaya koyabilir miyiz?", cevap: "Evet, ancak iki sahanın farklı gereksinimleri nedeniyle genelde iki ayrı makine kullanılır — gıda hacminde akülü elektrikli, OSB'deki çelik konstrüksiyon işinde dizel eklemli gibi. İki makine aynı gün paralel çalıştırılarak toplam süre kısaltılır; tek makineyle her ikisini karşılamak çoğu zaman mümkün olmaz." },
            { soru: "Sonradan yeni bir nokta eklemek istersek rota bozulur mu?", cevap: "Mümkünse rota yeniden planlanır, ancak son anda eklenen bir nokta zaman payını daraltabilir ve diğer noktaları geciktirebilir. Bu yüzden tüm noktaları mümkün olduğunca baştan bildirmenizi öneririz; sonradan eklenen nokta için ek ücret veya farklı bir gün gerekebilir." },
            { soru: "Hasat sezonunda rota süresi uzuyor mu?", cevap: "Evet, Amasya-Merzifon hattındaki yoğun tarım trafiği noktalar arası geçiş süresini uzatabilir. Bu dönemde rotayı planlarken yol yoğunluğunu hesaba katıyor, mümkünse sabah erken saatleri tercih ediyoruz. Sezon dışı aylarda rota süresi daha öngörülebilir olur." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'daki meyve işleme tesisi kompleksleri ve OSB'nin yakın konumlu fabrika yapısı kamuya açık genel bilgidir; rota planlama mantığı ve maliyet avantajı firma pratiğidir, özel müşteri veya mesafe iddiası içermez.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Amasya'da Zor Zemin / Arazi Platform Kiralama",
        giris:
            "Amasya'nın Yeşilırmak vadisi çevresindeki kırsal arazisi, meyve bahçeleri ve tarım arazileriyle kaplıdır; bu sahaların zemini standart bir sanayi tesisi zemininden büyük farklılık gösterir. Toprak, çim, stabilize veya hafif eğimli araziler, düz beton zemine göre tasarlanmış platformların bir kısmı için uygun değildir; geniş lastikli ve düşük zemin baskılı modeller bu koşullarda tercih edilir. Yağışlı dönemde toprak zemin yumuşayarak taşıma kapasitesini kaybedebilir, bu da iş gününe yakın zemin kontrolünü zorunlu kılar. Amasya OSB'nin inşaat aşamasındaki bölümlerinde de benzer bir durum yaşanır: zemin henüz nihai kaplamasını almamışsa, sıkıştırılmamış dolgu üzerinde çalışmak ek önlem gerektirir. Engebeli arazide platformun dengesini koruması için istinat ayakları ve zemin sensörleri devreye girer; bu sensörler, güvensiz bir eğimde makinenin otomatik olarak durmasını sağlar. Bu sayfa Amasya'daki zor zemin ve arazi koşullarında platform seçiminin nasıl yapıldığını anlatır.",
        maddeler: [
            { baslik: "Toprak ve çim zeminde geniş lastik ve düşük baskı gerekliliği", metin: "Meyve bahçesi kenarı veya tarla içindeki bir yapıya erişmek için kullanılan platform, standart dar tekerlekli modelden farklı olarak geniş lastikli ve düşük zemin baskılı olmalıdır. Bu tür lastikler zemine daha az nokta yükü bindirir ve yumuşak toprakta saplanma riskini azaltır; yine de zemin çok yumuşaksa hiçbir lastik tipi güvenli çalışmayı garanti etmez." },
            { baslik: "Eğimli arazide denge sensörü ve otomatik durdurma", metin: "Engebeli bir arazide makine belirli bir eğim açısını aştığında, üzerindeki zemin sensörü otomatik olarak hareketi durdurur ve kolun daha fazla açılmasını engeller. Bu, operatörün fark etmediği bir dengesizliği önceden yakalayan bir güvenlik katmanıdır; sensörün devre dışı bırakılması hiçbir koşulda kabul edilmez." },
            { baslik: "Yağış sonrası zemin taşıma kapasitesinin yeniden değerlendirilmesi", metin: "Kuru havada sağlam görünen bir toprak zemin, yağış sonrası birkaç gün içinde taşıma kapasitesini önemli ölçüde kaybedebilir. İş günü yağıştan hemen sonraysa, zemin iş sabahı yeniden değerlendirilir; gerekirse iş ertelenir ya da geçici plaka döşemesiyle zemin güçlendirilir." },
            { baslik: "İnşaat aşamasındaki OSB parsellerinde sıkıştırılmamış dolgu riski", metin: "Amasya OSB'nin yeni açılan bölümlerinde bazı parseller henüz nihai zemin kaplamasını almamış, sıkıştırılmamış dolgu üzerindedir. Bu tür zeminlerde makinenin ağırlığı altında oturma riski vardır; iş öncesi zeminin sıkıştırma durumu tesis mühendisiyle teyit edilir." },
            { baslik: "Arazi koşullarına uygun makine sınıfının önceden belirlenmesi", metin: "Zor zeminde hangi sınıfın kullanılacağı, zeminin türü, eğim açısı ve nem durumuna göre önceden belirlenir; bu bilgi olmadan sahaya gönderilen makine geri dönebilir ya da güvensiz koşulda çalıştırılmak zorunda kalınabilir — ikisi de istenmeyen sonuçlardır." },
        ],
        ekBolumler: [
            {
                baslik: "Zemin koşuluna göre platform sınıfı eşleşmesi",
                paragraflar: [
                    "Amasya'daki zor zemin işlerinde en sık karşılaşılan zemin tipleri ve uygun sınıf aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Belirleyici kısıt", "Uygun sınıf"],
                    satirlar: [
                        ["Kuru sıkı toprak", "Orta taşıma kapasitesi", "Geniş lastikli dizel eklemli"],
                        ["Yağış sonrası yumuşak toprak", "Düşük taşıma kapasitesi", "Plaka desteğiyle veya ertelenir"],
                        ["Hafif eğimli arazi", "Denge riski", "Zemin sensörlü model, düşük hızda kurulum"],
                        ["Sıkıştırılmamış dolgu (inşaat parseli)", "Oturma riski", "Mühendis onayı sonrası kısıtlı çalışma"],
                    ],
                },
            },
            {
                baslik: "Zor zeminde iş öncesi kontrol adımları",
                paragraflar: [
                    "Zor zemin işlerinde standart bir keşif yeterli olmayabilir; zeminin nem durumu, eğim açısı ve varsa gizli boşluk veya yumuşak nokta yerinde kontrol edilir. Operatör, istinat ayaklarını açmadan önce zemine kısa bir yük testi uygular ve güvensiz bulduğu noktada çalışmaya başlamaz.",
                    "Bu kontrol adımları, iş süresine birkaç dakika eklese de, makinenin devrilme veya saplanma riskini önemli ölçüde azaltır; zor zeminde bu adımların atlanması hiçbir koşulda kabul edilmez.",
                ],
            },
            {
                baslik: "Zemin güçlendirme ve geçici plaka döşemesi",
                paragraflar: [
                    "Zemin yumuşak ama iş ertelenemeyecek kadar aciliyse, istinat ayaklarının basacağı noktalara geçici çelik veya kompozit plaka döşenerek yük daha geniş bir alana yayılabilir. Bu çözüm her zemin için uygun değildir; çok yumuşak veya sulu zeminlerde plaka bile yeterli olmayabilir ve iş ertelenmesi gerekir. Karar, sahadaki operatörün yerinde değerlendirmesiyle verilir.",
                ],
            },
        ],
        sss: [
            { soru: "Toprak arazide platform kullanmak güvenli mi?", cevap: "Zemin kuru ve sıkıysa, geniş lastikli dizel eklemli platformla genelde güvenli çalışılır. Ancak zemin yumuşak veya nemliyse taşıma kapasitesi düşer ve saplanma-devrilme riski artar; bu durumda iş ya ertelenir ya da geçici plaka desteğiyle zemin güçlendirilir. İş günü sabahında zemin operatör tarafından yeniden değerlendirilir." },
            { soru: "Yağıştan sonra hemen çalışabilir miyiz?", cevap: "Genelde önermiyoruz; toprak zemin yağış sonrası birkaç gün taşıma kapasitesini kaybedebilir. İş acilse zemin iş sabahı yerinde kontrol edilir ve operatör güvenli bulmadığı noktada çalışmaya başlamaz. Mümkünse yağış sonrası birkaç günlük kuruma süresi bırakmanızı öneririz." },
            { soru: "Eğimli bir arazide makine devrilme riski var mı?", cevap: "Makinede belirli bir eğim açısını aştığında hareketi otomatik durduran bir zemin sensörü bulunur; bu sensör devrilme riskini önceden yakalar. Yine de operatör, istinat ayaklarını açmadan önce zemini görsel ve fiziksel olarak kontrol eder. Sensörün devre dışı bırakılması hiçbir koşulda kabul edilmez; bu, arazi işlerindeki temel güvenlik kuralımızdır." },
            { soru: "İnşaat aşamasındaki OSB parselimize makine gönderebilir misiniz?", cevap: "Zeminin sıkıştırma durumuna bağlıdır. Henüz nihai kaplamasını almamış dolgu zeminlerde oturma riski olabileceği için, iş öncesi tesis mühendisiyle zemin durumu teyit edilir. Sıkıştırma yeterliyse çalışılabilir; değilse zemin iyileştirmesi ya da farklı bir yaklaşım değerlendirilir." },
            { soru: "Zemin yumuşaksa iş tamamen iptal mi oluyor, alternatif yok mu?", cevap: "Her zaman iptal gerekmez. İstinat ayaklarının basacağı noktalara geçici plaka döşenerek yük daha geniş alana yayılabilir; bu çözüm orta derece yumuşak zeminlerde işe yarar. Ancak çok yumuşak veya sulu zeminlerde plaka da yeterli olmayabilir ve bu durumda iş ertelenir — karar sahadaki operatörün yerinde değerlendirmesiyle verilir." },
            { soru: "Bahçe veya tarla içindeki bir yapıya erişim için hangi bilgiyi önceden paylaşmalıyız?", cevap: "Zeminin cinsi (toprak, çim, stabilize), yakın zamanda yağış olup olmadığı, arazinin eğim durumu, hedefin yerden yüksekliği ve sahaya giden yolun genişliği paylaşanmalıdır. Mümkünse birkaç fotoğraf da eklerseniz, zemin ve erişim durumunu önceden değerlendirip uygun sınıfı netleştiririz." },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'nın Yeşilırmak vadisi kırsal arazi yapısı ve OSB'nin genişleyen parselleri kamuya açık genel bilgidir; zemin güvenliği ve makine sensör mekanizması sektör geneli teknik bilgidir, saha kontrol adımları firma pratiğidir.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Amasya'da Gıda ve Meyve İşleme Tesisleri İçin Makaslı Platform Kiralama",
        giris:
            "Amasya'nın meyve işleme, tasnif ve soğuk hava depolama tesislerinde en çok talep edilen sınıf makaslı platformlardır; bunun nedeni işin doğası gereği düşey ve tekrarlı olmasıdır. Bir tasnif hattının üst tamburu, bir soğuk deponun raf koridoru veya bir paketleme salonunun tavan aydınlatması, kolun yana yatarak ulaştığı bir nokta değil, tam altından dikey çıkışla ulaşılan bir noktadır — makaslı platformun geniş ve düz sepeti de bu işe göre tasarlanmıştır: birkaç kişi ve malzeme aynı anda sepette durabilir, bu da tek seferde daha fazla iş bitirmeyi sağlar. Gıda üretim hacimlerinde egzozsuz akülü tahrik zorunluluktur; dizel bir makine kapalı bir paketleme salonuna giremez. Zemin de belirleyicidir: epoksi kaplı üretim zemininde iz bırakmayan poliüretan tekerlek, hijyen denetiminden geçen tek seçenektir. Bu sayfa, Amasya'daki gıda ve meyve işleme tesislerinde makaslı platformun hangi işlerde, hangi zemin ve hijyen kurallarıyla, hangi koridor genişliğinde kullanıldığını anlatır; dış cephe veya çatı erişimi bu sayfanın kapsamı dışındadır, o iş için eklemli/teleskopik sınıfa bakılmalıdır.",
        maddeler: [
            {
                baslik: "Akülü tahrik zorunluluğu — kapalı gıda hacimlerinde egzoz yasağı",
                metin:
                    "Meyve işleme ve paketleme salonlarının çoğu kapalı, havalandırması kontrollü hacimlerdir; ürün açıkta bulunduğu için hiçbir yanma gazı bu hacme giremez. Dizel veya LPG'li bir makaslı platform bu tesislere sokulmaz; filo tamamen akülü modellerden oluşur. Akü kapasitesi de göz önünde tutulur — uzun bir tasnif hattının bir ucundan diğerine tek şarjla gidip gelinebilmesi, iş planının parçasıdır ve şarj noktası olmayan uzak bir hatta iş, molalarla bölünerek planlanır.",
            },
            {
                baslik: "Poliüretan tekerlek ve iz bırakmayan zemin teması",
                metin:
                    "Tasnif ve paketleme salonlarının zemini genellikle epoksi kaplıdır ve bu kaplama görsel olduğu kadar hijyen açısından da denetime tabidir; kauçuk tekerlek zeminde siyah iz bırakır ve bu iz kalite biriminin uyarı listesine girer. Makaslı platformlarımızın tamamında iz bırakmayan gri poliüretan tekerlek kullanılır. Yine de zemine yeni dökülen ürün artığı veya nem varsa tekerlek kayabilir; bu yüzden çalışma öncesi zemin görsel olarak kontrol edilir ve gerekirse temizlenmesi istenir.",
            },
            {
                baslik: "Dar koridor ve raf aralığında makaslı sınıf sınırı",
                metin:
                    "Soğuk hava depolarında raf koridorları forklift dönüş yarıçapına göre daraltılmıştır ve standart genişlikte bir makaslı platform bu koridorların bir kısmına giremez. Bu durumda dar şasili makaslı modeller veya dikey mast tipi platformlar tercih edilir; ikisi de düşey erişimde makaslıyla aynı mantıkla çalışır ama gövde genişliği daha dardır. Koridor genişliği ve raf üst kotu paylaşılmadan gönderilen standart makine, sahada dönemeyip geri dönebilir; bu yüzden keşifte bu iki ölçü ilk sorulan bilgidir.",
            },
            {
                baslik: "Hattın üstünde çoklu ekip çalışması ve sepet yükü",
                metin:
                    "Tasnif hattının üst tamburu, kamera grubu ve kablo tavası gibi noktalarda sıklıkla iki kişi birlikte çalışır — biri sökme, diğeri parça tutma görevindeyken. Makaslı platformun geniş sepeti bu ikili çalışmaya izin verir; tek kişilik dar sepetli sınıflarda aynı iş iki ayrı çıkışla yapılmak zorunda kalır ve süre uzar. Sepet yük kapasitesi aşılmadığı sürece malzeme ve alet de aynı çıkışta yukarı taşınabilir, bu da iniş-çıkış sayısını azaltır.",
            },
            {
                baslik: "Sezon dışı toplu bakım penceresi ve hijyen protokolü",
                metin:
                    "Hasat ve işleme sezonu başladığında tesis kesintisiz çalışır ve hat üstü ile depo içi erişim için uygun pencere daralır; sezon dışı aylar bu işlerin toplandığı dönemdir. Makine hacme girmeden önce dış yüzey ve tekerlek silinir, altındaki açık ürün kaldırılır veya örtülür, düşebilecek küçük parça sayımlı alınıp iş sonunda tekrar sayılır. Bu adımlar işletmenin kalite biriminin talebini beklemeden, standart iş akışımızın parçası olarak uygulanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda ve meyve işleme hacminde makaslı sınıf seçimi",
                paragraflar: [
                    "Amasya'daki işleme ve depolama tesislerinde en sık karşılaşılan çalışma alanı tipi, belirleyici kısıtı ve önerilen sınıf aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Çalışma alanı", "Belirleyici kısıt", "Önerilen sınıf"],
                    satirlar: [
                        ["Tasnif/paketleme hattı üstü", "Sepet genişliği, çoklu ekip", "Standart akülü makaslı"],
                        ["Soğuk depo dar raf koridoru", "Koridor genişliği", "Dar şasili makaslı veya dikey mast"],
                        ["Geniş paketleme salonu tavanı", "Yükseklik + iz bırakmama", "Poliüretan tekerlekli standart makaslı"],
                        ["Ambalaj deposu iç hacmi", "Egzozsuz çalışma zorunluluğu", "Akülü makaslı, dizel kabul edilmez"],
                    ],
                },
            },
            {
                baslik: "Hijyen denetiminden geçme — makine kabul kriterleri",
                paragraflar: [
                    "Gıda tesisine giren her makine, işletmenin kendi hijyen ekibinin ya da denetçisinin gözünden de geçer. Tekerlek ve gövde temizliği, hidrolik sızıntı kontrolü, gevşek parça olmadığının teyidi — bu üç kontrol, makine hacme sokulmadan önce tamamlanır ve gerekirse tesis yetkilisi de kendi kontrolünü yapar.",
                    "Bazı tesislerde makine girişi için ayrı bir kayıt defteri veya form istenir; bu durumda operatörümüz formu doldurur ve tesisin prosedürüne uyar. Prosedür dışı bir talebe (örneğin dizel makine sokma) hayır denir; bu, gıda güvenliği açısından pazarlığa açık bir konu değildir.",
                ],
            },
            {
                baslik: "Sezonluk planlama — hasat öncesi ve sonrası fark",
                paragraflar: [
                    "Hasat öncesi dönemde tesisler genellikle hat kurulumu, kalibrasyon ve tavan ekipmanı bakımı için yoğun bir erişim ihtiyacı duyar; bu dönemde birden fazla makine talebi aynı haftaya denk gelebilir, bu yüzden erken rezervasyon önerilir. Hasat sonrası dönemde ise iş, depolama alanlarının yıllık bakımına kayar — evaporatör temizliği, raf sistemi kontrolü, aydınlatma yenilemesi gibi kalemler bu pencerede toplanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dizel makaslı platform gıda üretim salonuna girebilir mi?",
                cevap: "Hayır. Ürünün açıkta bulunduğu kapalı gıda hacimlerine hiçbir yanma gazı üreten makine sokulmaz; filomuzdaki tüm makaslı platformlar akülüdür. Bu kural hiçbir istisnaya açık değildir, tesisin kendi hijyen prosedürü de aynı şartı arar.",
            },
            {
                soru: "Epoksi zeminde tekerlek izi bırakır mı?",
                cevap: "Standart kauçuk tekerlekli bir makine iz bırakabilir; bu yüzden makaslı platformlarımızda iz bırakmayan gri poliüretan tekerlek kullanılır. Zemine yeni dökülmüş ürün artığı veya ıslaklık varsa yine de kayma riski oluşur, bu durumda önce zeminin temizlenmesi istenir.",
            },
            {
                soru: "Soğuk hava deposundaki dar raf koridoruna hangi makine girer?",
                cevap: "Koridor genişliği forklift dönüş yarıçapına göre daraltılmışsa standart genişlikte makaslı platform sığmayabilir; bu durumda dar şasili makaslı model veya dikey mast tipi platform önerilir. Koridor genişliği ve raf üst kotunu keşif aşamasında paylaşmanız, doğru makinenin ilk seferde gitmesini sağlar.",
            },
            {
                soru: "Hat çalışırken üst tamburda bakım yapılabilir mi?",
                cevap: "Hayır, tasnif ve paketleme hatları çalışırken üstünde çalışılmaz; iş, hattın kısa duruş penceresinde yapılır. Akülü makaslı platform kurulum gerektirmediği için bu kısa pencereyi verimli kullanır; iskele kurmak gibi zaman alan bir hazırlığa gerek kalmaz.",
            },
            {
                soru: "Sepette iki kişi birlikte çalışabilir mi?",
                cevap: "Sepetin izin verdiği yük kapasitesi aşılmadığı sürece evet; makaslı platformun geniş sepeti, biri sökme diğeri parça tutma görevinde olan iki kişilik çalışmaya uygundur. Kapasite ve sepet ölçüsü modelden modele değişir, kiralama öncesi bu bilgi paylaşılır.",
            },
            {
                soru: "Hasat sezonunda tesise makine göndermek mümkün mü?",
                cevap: "Mümkün ama pencere çok dardır; tesis günün her saati çalıştığı için hat üstü ve depo içi erişim işleri neredeyse imkânsız hâle gelir. Bu yüzden bakım listesini sezon dışı toplu bir pencerede kapatmayı öneririz; acil bir arıza durumunda ise mevcut kısa duruşlara göre planlama yapılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'nın meyve işleme ve soğuk hava depolama tesisleri kamuya açık genel bilgidir; gıda hacimlerinde egzozsuz makine zorunluluğu ve hijyen kabul kriterleri sektör geneli uygulamadır, saha iş akışı firma pratiğidir.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Amasya'da Meyve İşleme ve Soğuk Depo Tesislerinde Manlift Kiralama",
        giris:
            "\"Manlift\" Amasya'daki gıda ve meyve işleme tesislerinde çoğunlukla iç mekan işiyle karıştırılan ama aslında dış cephe ve çatı işine karşılık gelen bir taleptir; bu sayfa tam olarak o dış hacmi kapsar. Meyve işleme tesislerinin çatı üstü havalandırma bacaları, soğuk hava depolarının dış cephedeki kondanser üniteleri, silo ve tank gövdeleri, yükleme rampalarının üzerindeki tente ve aydınlatma direkleri — bunların hepsi tesis binasının dışında, açık havada ve genellikle yerden uzak noktalardadır. Bu işler için eklemli veya teleskopik bomlu bir platform gerekir; kol yana ve yukarı doğru açılarak çatı saçağının, cephenin ya da bir tankın yan yüzeyinin arkasına geçebilir — makaslı platformun dikey çıkışı bu geometriye uymaz. Amasya'nın kırsal çevresindeki tesislerde zemin de çoğu zaman stabilize veya toprak olduğundan, dizel tahrikli ve geniş lastikli modeller iç mekandakinden farklı bir seçim kriteri getirir. Bu sayfa, tesis dışındaki yüksek erişim işlerinde manlift seçiminin nasıl yapıldığını anlatır; hat üstü veya depo içi iç mekan erişimi için makaslı platform sayfamıza bakılmalıdır.",
        maddeler: [
            {
                baslik: "Soğuk depo dış cephesindeki kondanser ve soğutma ünitesi erişimi",
                metin:
                    "Bir soğuk hava deposunun soğutma sistemi ikiye ayrılır: iç mekandaki evaporatör ve dış cephedeki kondanser/kompresör grubu. Kondanser üniteleri genellikle binanın dış duvarına, bazen çatıya monte edilir ve düz bir merdivenle değil, kolun yandan dolaşmasıyla ulaşılan bir noktadadır. Yılda bir-iki kez yapılan bakımda kanatçık temizliği ve fan kontrolü için eklemli bomlu bir platform, kolu bina cephesinin üzerinden geçirerek üniteye doğrudan erişir.",
            },
            {
                baslik: "Çatı üstü havalandırma, baca ve güneş paneli erişimi",
                metin:
                    "İşleme tesislerinin çatısında hem işleme sürecinin buhar/koku tahliyesini sağlayan bacalar hem de son yıllarda yaygınlaşan çatı üstü güneş paneli grupları bulunur. Bu ekipmanlara çatıya çıkmadan, kolu doğrudan hedefin yanına konumlandırarak erişmek hem daha güvenlidir hem de çatı kaplamasına yürüyerek zarar verme riskini ortadan kaldırır. Teleskopik bomlu modeller düz bir hat üzerinde uzun menzile ulaşır, eklemli modeller ise saçak altı gibi engebeli noktalarda kolu bükerek geçer.",
            },
            {
                baslik: "Silo, tank ve depolama gövdelerinde dış yüzey erişimi",
                metin:
                    "Meyve suyu veya konsantre üretimi yapan tesislerde dış mekanda duran silo ve tank gövdeleri, dış yüzey temizliği, boya bakımı veya vana-boru bağlantı kontrolü için düzenli erişim ister. Bu gövdeler genellikle dairesel olduğundan kolun tankın eğrisini takip edebilmesi gerekir; eklemli bomlu manlift bu hareketi sağlar, sabit bir doğru hat üzerinde çalışan sınıflar tankın arka yüzüne ulaşamaz.",
            },
            {
                baslik: "Yükleme rampası ve dış aydınlatma direklerinde uzun menzil",
                metin:
                    "Tesisin sevkiyat cephesindeki yükleme rampaları, tente sistemleri ve aydınlatma direkleri hem yerden yüksekte hem de genellikle bina duvarından bir miktar uzaktadır — kamyonların manevra alanı buna izin vermez. Teleskopik bomlu manlift, taban noktasını güvenli bir mesafede tutarken kolu uzatarak bu tip uzak-yüksek noktalara ulaşır; makaslı platformun tabanı hedefin tam altına gelmesi gerektiği için bu geometride kullanılamaz.",
            },
            {
                baslik: "Kırsal ve stabilize zeminde dizel tahrik ve geniş lastik gerekliliği",
                metin:
                    "Amasya'nın kırsal çevresindeki bazı meyve işleme ve soğuk hava depolama tesisleri, asfalt değil stabilize veya sıkıştırılmış toprak saha üzerine kuruludur. Bu zeminde akülü ve dar tekerlekli bir makine yerine, geniş lastikli ve dizel tahrikli manlift tercih edilir; dizel tahrik dış mekanda egzoz kısıtı olmadığı için sorun yaratmaz, geniş lastik ise düzensiz zeminde taşıma kapasitesini korur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dış hacim tipine göre manlift sınıfı eşleşmesi",
                paragraflar: [
                    "Amasya'daki gıda ve meyve işleme tesislerinin dış mekan erişim ihtiyaçları ve önerilen manlift sınıfı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Dış hacim / hedef", "Belirleyici kısıt", "Önerilen sınıf"],
                    satirlar: [
                        ["Soğuk depo dış kondanser", "Cephe üzerinden kol geçişi", "Eklemli bomlu dizel"],
                        ["Çatı üstü baca / panel", "Çatıya çıkmadan erişim", "Teleskopik veya eklemli bomlu"],
                        ["Silo / tank dış yüzeyi", "Dairesel gövde takibi", "Eklemli bomlu"],
                        ["Yükleme rampası / aydınlatma direği", "Uzak taban, yüksek hedef", "Teleskopik bomlu, uzun menzil"],
                    ],
                },
            },
            {
                baslik: "İç mekan-dış mekan ayrımı neden önemli",
                paragraflar: [
                    "\"Manlift\" ve \"platform\" kelimeleri sahada sık sık birbirinin yerine kullanılır, ama makine seçimi bu ayrıma bağlıdır. Kapalı bir paketleme salonunda dizel bir manlift çalıştırılamaz; açık bir çatıda ise makaslı platformun dikey çıkış geometrisi çoğu zaman hedefe ulaşamaz.",
                    "Bu yüzden talep alırken ilk sorduğumuz soru işin iç mi dış mı olduğudur; cevap net değilse (örneğin yarı açık bir yükleme rampası), fotoğraf istenir ve doğru sınıf birlikte netleştirilir.",
                ],
            },
            {
                baslik: "Kış aylarında dış mekan çalışma koşulları",
                paragraflar: [
                    "Amasya'da kış ayları dış mekan erişim işlerini zorlaştırır; donmuş veya karla kaplı stabilize zeminde geniş lastikli dizel manlift bile taşıma kapasitesini kaybedebilir. Bu dönemde çalışma öncesi zemin durumu telefonla veya fotoğrafla teyit edilir; buzlu bir yüzeyde iş, zemin çözülene ya da tuzlanana kadar ertelenir. Rüzgâr da ayrı bir kısıttır — yüksek bomlu bir manlift belirli bir rüzgâr hızının üzerinde açık havada çalıştırılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift ile makaslı platform arasındaki fark nedir, hangisini istemeliyim?",
                cevap: "Makaslı platform dikey çıkar ve tabanının tam üzerindeki noktaya ulaşır; iç mekan hat üstü ve raf erişiminde kullanılır. Manlift (eklemli veya teleskopik bomlu) kolu yana ve yukarı açarak tabanından uzak, engebeli veya cephe arkasındaki noktalara ulaşır; çatı, cephe, tank ve dış aydınlatma işlerinde kullanılır. İki sınıf birbirinin yerine geçmez; hedefin iç mi dış mı, tabanın tam altında mı yoksa yanda mı olduğu seçimi belirler.",
            },
            {
                soru: "Soğuk deponun dış cephesindeki kondanser ünitesine hangi makine gelir?",
                cevap: "Eklemli bomlu bir manlift önerilir; kol bina cephesinin üzerinden geçerek üniteye doğrudan erişir. Ünitenin yerden yüksekliği ve cepheden çıkıntı miktarı paylaşıldığında, gereken menzile göre eklemli mi teleskopik mi olacağı netleşir.",
            },
            {
                soru: "Çatıya çıkmadan çatı üstü ekipmana bakım yapılabilir mi?",
                cevap: "Evet, bu manlift kullanmanın temel amaçlarından biridir. Kol, hedefin yanına konumlandırılır ve operatör sepetten çalışır; çatı kaplamasına basmak gerekmez, bu hem güvenlik hem çatı ömrü açısından tercih edilen yöntemdir.",
            },
            {
                soru: "Tesisimizin sahası stabilize toprak, makine batabilir mi?",
                cevap: "Kuru ve sıkı stabilize zeminde geniş lastikli dizel manlift genelde sorunsuz çalışır. Zemin yağış sonrası yumuşamışsa veya kışın donmuşsa taşıma kapasitesi değişir; bu durumda iş öncesi zemin yerinde kontrol edilir, gerekirse iş ertelenir veya farklı bir güzergah değerlendirilir.",
            },
            {
                soru: "Yükleme rampasındaki tenteye erişim için taban rampaya ne kadar yaklaşabilir?",
                cevap: "Kamyon manevra alanı genellikle tabanın tam rampanın altına girmesine izin vermez; bu yüzden teleskopik bomlu bir manlift tercih edilir, taban güvenli bir mesafede durur ve kol uzayarak hedefe ulaşır. Kesin mesafe sahada ölçülür, keşifte rampa önü genişliği sorulur.",
            },
            {
                soru: "Kışın rüzgârlı havada dış mekanda çalışılabilir mi?",
                cevap: "Yüksek bomlu manliftlerin belirli bir rüzgâr hızı üzerinde açık havada çalıştırılması güvenli değildir; bu sınır modelden modele değişir ve operatör sahada rüzgâr durumunu değerlendirir. Rüzgâr sınırı aşılmışsa iş, hava sakinleşene kadar ertelenir; bu konuda pazarlık yapılmaz."},
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Amasya'nın meyve işleme, soğuk hava depolama tesisleri ve kırsal çevre yapısı kamuya açık genel bilgidir; manlift/makaslı platform geometri farkı ve dış mekan çalışma kısıtları (rüzgar, zemin) sektör geneli teknik bilgidir, saha iş akışı firma pratiğidir.",
    },
};
