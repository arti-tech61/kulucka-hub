// ═══════════════════════════════════════════════════════════════════════════
// afyonmanlift.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Afyonkarahisar’ın EMİRDAĞ–SİNANPAŞA hattında, TARIM SANAYİİ ve GIDA
// TESİSLERİ için manlift kiralama. Mercek: (1) hububat–un–yem zinciri, silo ve
// değirmen yapıları, (2) süt ve et işleme tesisleri, olgunlaştırma ve soğuk
// zincir hacimleri, (3) meyve paketleme evleri ve soğuk hava depoları,
// (4) kırsal ilçelerde dağınık tesis coğrafyası ve ilçe turu lojistiği,
// (5) hasat–kampanya takviminin bakım penceresine etkisi.
//
// ⚠️ Kardeş domain afyonplatform.com.tr aynı ili MERMER OCAĞI + TERMAL OTEL
// açısıyla yazdı ve afyonkarahisar-merkez sayfası onda da var. Mermer, ocak,
// termal, kaplıca, buhar-nem konuları BU DOSYADA İŞLENMEZ; merkez sayfası
// tarım-gıda ekseninden kurulmuştur. Konya OSB sayfası ise konyaplatform.net’in
// tarım makineleri imalatı anlatımıyla kesişmeyecek biçimde, gıda sanayii ve
// il dışı sevkiyat lojistiği ekseninden yazılmıştır.
//
// Sayfa iskeleti: giriş paragrafı, beş madde, üç ek bölüm (ilkinde tablo),
// altı uzun SSS ve kaynak notu. Tarih: 2026-08-12.
// Tesis adı, kapasite ve rakam kullanılmamıştır; yalnızca kamuya açık sektörel
// kimlik bilgisi ile firma saha pratiği yazılmıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const AFYONMANLIFT_COM: Record<string, BespokeIcerik> = {
    "bolge:emirdag": {
        h1: "Emirdağ’da Tarım ve Yem Tesisleri İçin Manlift Kiralama",
        giris:
            "Emirdağ, Afyonkarahisar’ın kuzeyinde geniş bir kırsal alana yayılan, ekonomisi tahıl tarımı ve hayvancılık üzerine kurulu bir ilçedir; buradan gelen manlift talebi de şehir merkezinden gelen taleple hiç aynı şekilde davranmaz. Talebin kaynağı çoğunlukla bir fabrika değil, köy yoluna sapıldıktan sonra ulaşılan bir yem karma ünitesi, bir tahıl deposu, bir besi ahırı ya da köy meydanındaki bir kamu yapısıdır. Bu coğrafyada asıl belirleyici, çalışılacak yüksekliğin kaç metre olduğu değil, makinenin o noktaya nasıl gideceği ve orada kaç gün kalacağıdır: çekicinin dönemeyeceği köy girişleri, ıslandığında çamura dönen stabilize yollar, elektrik ve su bağlantısının hep aynı kalitede olmadığı avlular. Biz Emirdağ taleplerini bu yüzden tek nokta işi olarak değil, hat işi olarak kurgularız — aynı sevkiyatta birden fazla adres toplanır, makine ilçede kalır ve nakliye payı adresler arasında bölünür. Gönderilen sınıf da buna göre seçilir: kaba zeminde ilerleyebilen, tek şarj veya tek depoyla uzun gün çıkaran, arıza hâlinde yerinde müdahale edilebilen üniteler.",
        maddeler: [
            {
                baslik: "Tahıl deposu ve düz depo çatılarında iş",
                metin:
                    "Hasat sonrası ürünün bekletildiği düz depolarda iş kalemleri birbirine benzer: çatı sacındaki delinme ve aşınmanın onarımı, mahya havalandırmasının açılıp kapanan kanatları, kuş ve kemirgen girişini engelleyen tel örgülerin yenilenmesi, iç aydınlatmanın ürün üstüne düşen armatürleri. Bu hacimlerde ürün doluyken çalışmak istenmez; yığın yüzeyi düz görünse de üzerine yük konulamaz ve düşen bir parça tüm partiyi şüpheli hâle getirir. Bu nedenle depo işlerini boşalma dönemine yazmayı öneririz.",
            },
            {
                baslik: "Yem karma ünitelerinde dikey ekipman",
                metin:
                    "Yem hazırlayan ünitelerde asıl iş, yataydan çok dikeydir: hammadde silolarının üst kapakları, elevatör kovalı yükselticilerin gövde bağlantıları, helezon aktarma hatlarının askı noktaları ve karıştırıcı üstündeki dolum ağızları hep yerden erişilemeyen kotlardadır. Bu ekipmanların ortak özelliği, çevresinde sabit bir platform bulunmaması ve personelin bugüne kadar merdivenle çıkmış olmasıdır. Sepetli erişim bu alışkanlığı bir günde değiştirir; sistemin enerjisinin kesildiği ve helezonun döndürülmediği yazılı olarak teyit edilir.",
            },
            {
                baslik: "Besi ve süt ahırlarında havalandırma hattı",
                metin:
                    "Hayvan barınaklarında yüksekteki iş kalemleri neredeyse tamamen iklimle ilgilidir: çatı fanlarının kanat ve motor bakımı, yandan açılan perde sistemlerinin makara ve halat hattı, sulama borularının askıları ve yem yolunun üstündeki aydınlatma. Bu hacimlerde amonyak ve nem yükü metal aksamı normalden hızlı yıpratır, bu yüzden işler tekil arıza olarak değil düzenli tur olarak ele alınmalıdır. Zemin altlık ve gübre nedeniyle kaygan olabilir; makinenin duracağı şerit önceden temizlenir.",
            },
            {
                baslik: "Köy yolu ve saha erişiminin belirleyiciliği",
                metin:
                    "Emirdağ’da bir işin fiyatını ve süresini en çok etkileyen kalem, çoğu zaman işin kendisi değil erişimdir. Lowbed çekicinin dönebileceği bir alan, indirme için sert bir zemin ve tesise girişte kemer, kapı veya elektrik hattı gibi bir alçak engel bulunup bulunmadığı önceden bilinmelidir. Bu bilgiyi telefonda tarif etmek zordur; birkaç fotoğraf, sahaya boşa yapılan bir sefere kıyasla çok daha ucuzdur. Erişim netleştiğinde makine sınıfı da kendiliğinden daralır.",
            },
            {
                baslik: "İlçede kalan makine ve hat planı",
                metin:
                    "Tek adres için ilçeye makine indirmek, nakliye payı tek işin üstünde kaldığı için pahalıdır. Bunun yerine ilçede aynı hafta içinde iş yaptırmak isteyen işletmeleri aynı sevkiyata toplarız; makine adresten adrese kendi tekerleğiyle ya da kısa mesafeli taşımayla geçer. Her işletme kendi teklifini, kendi tutanağını ve kendi teslim kaydını alır; ortak olan yalnızca ilçeye giriş-çıkış kalemidir. Bu modelde tarihini önceden söyleyen işletme hem sırayı hem daha düşük birim maliyeti alır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Emirdağ’da sık çalışılan tesis tipleri",
                paragraflar: [
                    "İlçedeki talepler birbirine benzeyen birkaç tesis tipinde toplanır. Aşağıdaki tablo, her tip için baskın iş kalemini, sahada karşımıza çıkan asıl kısıtı ve seçtiğimiz makine sınıfını bir arada verir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Baskın iş kalemi", "Sahadaki kısıt", "Seçilen sınıf"],
                    satirlar: [
                        ["Tahıl / düz depo", "Çatı sacı, mahya havalandırma", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Yem karma ünitesi", "Silo kapağı, elevatör gövdesi", "Dikey ekipman, enerji kesme", "Eklemli bomlu"],
                        ["Besi ahırı", "Fan, perde halatı, sulama askısı", "Kaygan altlık zemini", "Geniş tabanlı, akülü"],
                        ["Süt toplama noktası", "Tank üstü, boru askısı", "Hijyen bölgesi", "Ön temizlikli akülü"],
                        ["Köy içi kamu yapısı", "Aydınlatma, çatı oluğu", "Dar avlu, kısa iş", "Kompakt dikey"],
                        ["Sulama / elektrik direği", "Pano, hat kontrolü", "Yumuşak tarla zemini", "Paletli veya 4x4"],
                    ],
                },
            },
            {
                baslik: "Hasat takvimi bakım penceresini nasıl belirler",
                paragraflar: [
                    "Tarım ilçesinde yılın ritmi hasada göre kurulur ve bu ritim bakım işlerini ikiye ayırır. Hasadın ve ürün girişinin sürdüğü haftalarda depolar, kantar önü ve aktarma hatları kesintisiz çalışır; bu dönemde yüksekte iş yapmak hem güvenli değildir hem işletmeye zaman kaybettirir. Ürünün sevk edildiği ve hacimlerin boşaldığı dönem ise tam tersidir: çatı, aydınlatma, havalandırma ve ekipman bakımının hepsi aynı anda mümkün hâle gelir.",
                    "Bu ikili yapının pratik sonucu şudur: ilçedeki işletmelerin büyük bölümü aynı takvimi paylaştığı için bakım talepleri de birkaç haftaya yığılır. Bu yığılmayı yönetmenin tek yolu tarihi erken kilitlemektir. Elimizde bir liste varsa hattı gün gün kurar, hangi adreste kaç gün kalınacağını baştan yazarız; liste yoksa sıra, listesi hazır olana geçer. Bu, fiyattan çok daha belirleyici bir farktır.",
                ],
            },
            {
                baslik: "Kırsal adreste teklif için gereken bilgi",
                paragraflar: [
                    "Şehir içi bir talepte adres ve yükseklik çoğu zaman yeterlidir; kırsal bir adreste değildir. Bize gereken çekirdek bilgi şudur: tesise giden son yolun cinsi (asfalt, stabilize, tarla yolu), çekicinin dönebileceği bir alanın bulunup bulunmadığı, giriş açıklığının eni ve yüksekliği, çalışma noktasının zeminden kotu ve makinenin duracağı zeminin son yağıştan sonra ıslak kalıp kalmadığı. Bir de elektrik: akülü ünite kalacaksa gece şarj edilebileceği bir priz hattı gerekir.",
                    "Bu altı başlık netleştiğinde teklif tek turda çıkar ve sahada değişmez. Eksik olduğunda ise iki riskten biri gerçekleşir: ya sahaya sığmayan bir makine gider ya da güvenli tarafta kalmak için gereğinden büyük sınıf teklif edilir ve fazlasını işletme öder. İkisi de gereksizdir; birkaç fotoğraf bu belirsizliğin tamamını kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Köyümüzdeki tesise büyük araç giremiyor; makine yine de gelebilir mi?",
                cevap:
                    "Çoğu durumda gelebilir, ama yöntem değişir. İki seçeneğimiz var: birincisi, makineyi çekicinin dönebildiği en yakın sert zemine indirip kalan mesafeyi makinenin kendi yürüyüşüyle almak — bu, mesafe kısa ve yol makul olduğunda en pratik çözümdür. İkincisi, daha küçük şaseli ve daha hafif bir sınıf seçip taşımayı küçük araçla yapmaktır; bu durumda çalışma yüksekliği bir miktar düşer ve iş listesinin buna uyup uymadığını birlikte kontrol ederiz. Karar için son yüz metreyi ve giriş açıklığını gösteren birkaç fotoğraf yeterlidir.",
            },
            {
                soru: "Tahıl deposunun çatısında onarım var; deponun boşalmasını beklemeli miyiz?",
                cevap:
                    "Beklemenizi öneririz ve bunun nedeni yalnızca güvenlik değil. Ürün doluyken yığın yüzeyi taşıyıcı değildir, makine içeri girse bile konumlanacak sağlam bir zemin bulamaz ve çalışma ancak kapı bölgesiyle sınırlı kalır. Buna ürün riski eklenir: yukarıdan düşen küçük bir parça ya da onarım artığı, partinin tamamını şüpheli hâle getirir. Boşalma dönemini bekleyemeyeceğiniz acil sızıntılarda dışarıdan, çatı üstüne yandan uzanarak müdahale mümkündür; bu durumda kapsam sınırlı tutulur ve kalıcı onarım yine boşalma dönemine yazılır.",
            },
            {
                soru: "Yem ünitemizin siloları ve elevatörü çalışırken bakım yapılabilir mi?",
                cevap:
                    "Yapılmaz. Elevatör kovalı yükseltici ve helezon aktarıcı, dışarıdan bakıldığında durgun görünse de uzaktan devreye alınabilen ekipmanlardır ve sepetteki kişi bu hareketin karşısında korunaksızdır. Uygulamamız nettir: çalışılacak hattın enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Ünitenin tamamını durdurmanız gerekmez; yalnızca çalıştığımız hat durur, diğer hatlar üretime devam edebilir. Hangi hattın hangi saatte durabileceğini önceden konuşup işi o pencereye yerleştiririz.",
            },
            {
                soru: "Ahırın içinde çalışırken hayvanları çıkarmamız gerekir mi?",
                cevap:
                    "Genellikle bölmeyi boşaltmak yeterlidir, tesisi boşaltmak değil. Çalışılan bölmenin altındaki alan boşaltılır ve bariyerlenir, komşu bölmeler kullanılmaya devam eder. Bunun iki nedeni var: makine hareketinin hayvanlarda ani tepki üretmesi ve yukarıdan düşebilecek küçük parçaların yem yoluna karışma ihtimali. Zemindeki altlık kayganlık yaratabildiği için makinenin duracağı şerit önceden temizlenir ve gerekiyorsa altına plaka serilir. Bölme boşaltma sırasını sizin günlük düzeninize göre kurarız; hayvan hareketini biz yönetmeyiz, siz yönetirsiniz, biz o sıraya uyarız.",
            },
            {
                soru: "İlçemizde birden fazla işletme aynı hafta iş yaptırmak istiyor; nasıl ilerler?",
                cevap:
                    "Bu, ilçede kiralamanın en ekonomik biçimidir ve bunu aktif olarak teşvik ederiz. Makine bir kez ilçeye indirilir, adresler arasında sırayla dolaşır ve nakliye kalemi işletmeler arasında iş yüküne göre bölünür. Her işletme kendi sözleşmesini, kendi teklifini ve kendi teslim tutanağını alır; aranızda hiçbir hukuki bağ kurulmaz. Süre aşımı olursa program bir gün uzar ve bu, gecikmeye neden olan tarafla konuşulur; sizin gününüz başkasının işi uzadı diye kısalmaz. Yapmanız gereken tek şey, tarihinizi hattın kurulduğu aşamada bildirmektir.",
            },
            {
                soru: "Makineyi birkaç gün sahamızda bırakabilir miyiz?",
                cevap:
                    "Bırakabilirsiniz ve kırsal adreslerde bunu genellikle biz öneririz, çünkü asıl maliyet kalınan günde değil gidiş-gelişte birikir. Bu durumda iki şey konuşulur: makinenin gece park edeceği yer ve enerji. Park alanı düz, sert ve tesis içinde kalan bir nokta olmalıdır; akülü ünite kalacaksa gece şarj edilebileceği bir priz hattı gerekir. Kalış süresince makinenin kullanımından ve muhafazasından siz sorumlu olursunuz; teslim ve iade anında mevcut durum fotoğrafla kayıt altına alınır. Uzun kalışlarda periyodik kontrol ziyaretlerimiz kiralama süresinden düşülmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Emirdağ’ın tahıl tarımı ve hayvancılık ağırlıklı kırsal bir ilçe olması kamuya açık genel bilgidir; erişim teyitleri, hat planı ve enerji kesme düzeni firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:sinanpasa": {
        h1: "Sinanpaşa’da Tarımsal Tesisler İçin Manlift Kiralama",
        giris:
            "Sinanpaşa, Afyonkarahisar’ın batısında geniş bir ova tabanına oturan, sulu tarımın ve hayvancılığın birlikte yürüdüğü bir ilçedir; buradaki yüksekte çalışma ihtiyacı da bu iki üretim biçiminin yan yapılarından doğar. Ova tabanında dağınık hâlde duran sera grupları, ürün tasnif ve paketleme sundurmaları, süt toplama üniteleri, tarımsal alet-ekipman bakım atölyeleri ve köy yerleşimlerine ait ortak yapılar, hepsi birbirinden birkaç kilometre uzakta ama aynı ilçe sınırının içindedir. Bu dağınıklık, iş planlamasını şehir merkezinden tamamen ayırır: burada bir günün büyük bölümü çalışmaya değil, iki nokta arasındaki yola gidebilir. Bu yüzden Sinanpaşa taleplerinde ilk kurduğumuz şey makine sınıfı değil güzergâhtır — adresler haritada sıralanır, en az geri dönüşle ilerleyen bir sıra çıkarılır ve gün planı bu sıraya göre yazılır. Ancak bu yapıldıktan sonra hangi sınıfın gideceği konuşulur; çünkü tek makineyle kapatılamayan bir liste, ikinci bir seferi baştan zorunlu kılar.",
        maddeler: [
            {
                baslik: "Sera gruplarında örtü ve askı sistemleri",
                metin:
                    "Örtü altı üretimde yüksekteki iş, yapının kendisiyle ilgilidir: makas ve aşık bağlantıları, örtü malzemesinin kenar profillere sabitlenmesi, havalandırma açıklıklarının krank ve dişli mekanizması, ısıtma borularının askıları ve bitki askı tellerinin gerdirilmesi. Bu hacimlerde zemin çoğu zaman toprak ya da örtülü topraktır ve makine ağırlığı doğrudan yüzeye biner. Sıra aralarına girmek yerine servis koridorundan uzanmalı çalışmak, hem bitkiyi hem zemini korur ve genellikle daha hızlı ilerler.",
            },
            {
                baslik: "Tasnif ve paketleme sundurmalarında hat üstü",
                metin:
                    "Ürünün boylandığı, yıkandığı ve kasalandığı yarı açık sundurmalar, kapalı bir üretim holünden farklı bir problem çıkarır: üst örtü hafif konstrüksiyondur, yanlar açıktır ve rüzgâr içeriye kadar girer. Aydınlatma, bant üstü tesisat ve örtü sacı işleri bu koşulda yapılır. Yan açıklıktan gelen rüzgâr, kapalı hacimde hesaba katılmayan bir kısıt üretir; geniş yüzeyli parça taşınan kalemler rüzgârın sakinleştiği saatlere alınır ve gün planı buna göre esnetilir.",
            },
            {
                baslik: "Süt toplama ve soğutma ünitelerinde erişim",
                metin:
                    "Köy ölçeğindeki süt toplama noktalarında iş, tankın çevresinde ve üstünde toplanır: soğutma grubunun dış ünitesi, tank üstü karıştırıcı bağlantısı, yıkama hattının boru askıları ve hacim aydınlatması. Bu alanlar küçüktür ve gıda hijyeni kuralları geçerlidir; makine girişte tekerlek yüzeyleri silinmiş hâlde alınır, sepet altına toplama tablası konur ve el aletleri bağlanır. Küçük hacim, büyük makineyi baştan eler — buraya kompakt ve akülü sınıflar gider.",
            },
            {
                baslik: "Ekipman atölyelerinde çatı ve vinç hattı",
                metin:
                    "Tarımsal alet-ekipmanın onarıldığı atölyeler, ilçedeki en yakın sanayi karakterli yapılardır: çelik makaslı çatı, tek hacimli plan ve çoğu zaman hafif bir kaldırma düzeneği. Buradaki kalemler çatı ışıklığı değişimi, aydınlatma yenileme, duman tahliye açıklığı ve kaldırma düzeneğinin ray hattı bakımıdır. Kaldırma düzeneği bulunan hacimlerde çalışırken düzeneğin enerjisi kesilir ve çalışma bölgesine girmeyeceği yazılı olarak teyit edilir; bu, üzerinde pazarlık yapmadığımız tek maddedir.",
            },
            {
                baslik: "Ova tabanında zemin taşıma gücü",
                metin:
                    "Sinanpaşa ovasının zemini, sulama ve yağış sonrasında yüzeyde sağlam görünürken altta yumuşak kalabilir; bu, tarla kenarındaki ve sera çevresindeki çalışmalarda en sık karşılaştığımız sorundur. Tekerlek veya destek ayağı gömüldüğünde makine yalnızca hareket edemez hâle gelmez, sepet yukarıdayken stabilite de bozulur. Bu yüzden sulama takvimi bize önceden söylenmeli, çalışma noktalarının altına gerekiyorsa plaka serilmelidir. Şüpheli zeminde makine indirmeyiz; bu kararı sahada, indirme öncesinde veririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçe içi güzergâh ve nokta başına süre",
                paragraflar: [
                    "Dağınık yerleşimli bir ilçede planın omurgası güzergâhtır. Aşağıdaki tablo, sık çalıştığımız nokta tiplerini işin niteliği, geçiş zorluğu ve gün planındaki tipik yeriyle birlikte gösterir.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "İş niteliği", "Geçiş zorluğu", "Gün planındaki yeri"],
                    satirlar: [
                        ["Sera grubu", "Örtü, askı, havalandırma", "Yumuşak zemin", "Kuru sabah saatleri"],
                        ["Paketleme sundurması", "Aydınlatma, hat üstü", "Rüzgâra açık", "Rüzgârın düştüğü saat"],
                        ["Süt toplama ünitesi", "Tank üstü, soğutma grubu", "Dar hacim", "Sağım dışı pencere"],
                        ["Ekipman atölyesi", "Çatı, ışıklık, ray", "Standart", "Mesai içi"],
                        ["Köy ortak yapısı", "Oluk, aydınlatma", "Dar avlu", "Geçiş üstü kısa durak"],
                        ["Tarla kenarı direk", "Pano, hat kontrolü", "Sulama sonrası çamur", "Sulama dışı gün"],
                    ],
                },
            },
            {
                baslik: "Bir günü iki adrese sığdırmanın matematiği",
                paragraflar: [
                    "Kırsal ilçede kiralanan günün ne kadarının işe, ne kadarının yola gittiği çoğu zaman hesaplanmaz ve fatura geldiğinde şaşırtır. Gerçek şudur: iki adres arasındaki her geçiş yalnızca yol süresi değil, makinenin toplanması, güvenli hâle getirilmesi, taşınması, yeniden konumlandırılması ve saha girişinin tekrar yapılmasıdır. Bu zincir, on beş dakikalık bir mesafeyi pratikte çok daha uzun bir kesintiye çevirir.",
                    "Bunu yönetmenin yolu, günü adrese göre değil kümeye göre kurmaktır: birbirine yakın noktalar aynı güne toplanır, uzak noktalar başka güne bırakılır ve her gün tek yönde ilerler, geri dönmez. Elimizde nokta listesi ve her noktadaki iş kalemleri varsa bu sıralamayı biz çıkarırız. Liste olmadan yapılan planlama, kâğıt üstünde makul görünüp sahada dağılan bir plandır.",
                ],
            },
            {
                baslik: "Sulama takvimiyle çalışma takvimini çakıştırmamak",
                paragraflar: [
                    "Sulu tarımın yapıldığı bir ovada zemin durumu sabit değildir; aynı parselin taşıma gücü sulamadan önce ve sonra farklıdır. Bu yüzden Sinanpaşa’da tarih kararını yalnızca hava durumuna bakarak vermeyiz — sulama programı en az yağış kadar belirleyicidir. Sulanmış bir güzergâhtan geçen makine hem iz bırakır hem kendi güvenliğini kaybeder, üstelik kurtarma operasyonu işin kendisinden pahalıya mal olur.",
                    "Pratik çözüm, iş listesini zemine bağımlı ve bağımsız olarak ikiye ayırmaktır. Kapalı hacim işleri, atölye kalemleri ve sert zeminli avlulardaki işler her koşulda ilerler; tarla kenarı, sera çevresi ve yumuşak zemin işleri kuruma penceresine yazılır. Böylece sulama programı değişse bile kiralanan gün boş geçmez, yalnızca sıra değişir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Seranın içinde çalışırken bitkilere zarar verir misiniz?",
                cevap:
                    "Doğru yöntem seçildiğinde vermeyiz, çünkü sıra aralarına girmeyi baştan tercih etmeyiz. Uygulamamız, makineyi servis koridoruna konumlandırıp hedef noktaya yatay uzanmayla erişmektir; bu hem bitkiyi hem zemini korur, hem de sıradan sıraya geçiş süresini ortadan kaldırdığı için genellikle daha hızlıdır. Bunun mümkün olmadığı geniş açıklıklı yapılarda geçiş güzergâhı önceden belirlenir ve gerekiyorsa geçici plaka serilir. Sizden istediğimiz, çalışma öncesinde koridor genişliğini ve askı sisteminin zeminden kotunu bildirmenizdir; sınıf seçimi bu iki ölçüyle netleşir.",
            },
            {
                soru: "Süt toplama ünitemiz küçük bir hacim; makine içeri sığar mı?",
                cevap:
                    "Sığması için doğru sınıfın seçilmesi gerekir ve bu hacimlerde sınıfı belirleyen yükseklik değil, kapı açıklığı ile manevra alanıdır. Bize gereken üç ölçü var: giriş kapısının eni ve yüksekliği, tankın çevresindeki serbest dolaşım alanı ve çalışılacak noktanın zeminden kotu. Bu ölçülerle kompakt bir akülü sınıf çoğu ünitede rahatça çalışır. Hijyen tarafı ayrı bir başlıktır: makine girişte tekerlek yüzeyleri silinmiş hâlde alınır, sepet altına toplama tablası konur ve iş sonunda alan sizin kendi temizlik prosedürünüze göre teslim edilir.",
            },
            {
                soru: "Yağmurdan sonra sahamız çamurlu; kiralamayı ertelemeli miyiz?",
                cevap:
                    "Tamamını ertelemek gerekmiyor; listeyi bölmek yeterli. Zemine bağımlı kalemler — tarla kenarı, sera çevresi, yumuşak avlu — kuruma penceresine yazılır; kapalı hacim ve sert zemin işleri aynı gün sorunsuz ilerler. Böylece kiralanan gün boşa gitmez, yalnızca sıra değişir. Zeminin gerçekten taşıyıp taşımadığına indirme anında sahada karar veririz ve şüpheli durumda makineyi indirmeyiz; bu kararı ertelemek, sonrasında kurtarma operasyonuna dönüşen bir maliyet üretir. Sulama programınızı önceden paylaşırsanız bu kararı sahada değil planda vermiş oluruz.",
            },
            {
                soru: "Atölyemizde kaldırma düzeneği var; onu durdurmak zorunda mıyız?",
                cevap:
                    "Çalıştığımız bölgede evet, tesisin tamamında hayır. Düzeneğin hareket alanı ile sepetin bulunduğu hacim çakışıyorsa düzeneğin enerjisi kesilir, hat sonuna alınır ve çalışma süresince hareket etmeyeceği saha sorumlusunun onayıyla iş emrine yazılır. Bunun nedeni basittir: yukarıda asılı duran bir yükün altındaki insan, hiçbir emniyet donanımıyla korunamaz. Çalışma bölgesi düzeneğin erişemediği bir bölümdeyse üretiminiz normal seyrinde devam eder. Hangi kalemin hangi bölgeye düştüğünü keşifte ayırır, durması gereken süreyi mümkün olduğunca kısa tutarız.",
            },
            {
                soru: "İlçedeki birkaç noktamız var ama hepsi birbirine uzak; tek kiralamada biter mi?",
                cevap:
                    "Biter, ama planın adres sırasına göre değil coğrafi kümeye göre kurulması şartıyla. Her geçiş, yalnızca yol süresi değil; makinenin toplanması, taşınması, yeniden konumlanması ve saha girişinin tekrarlanmasıdır. Bu zinciri günde ikiden fazla tekrarlamak, kiralanan günün yarısını yola vermek demektir. Bizim yaptığımız, birbirine yakın noktaları aynı güne toplamak ve her günü tek yönde ilerleyecek biçimde sıralamaktır. Nokta listesini ve her noktadaki kalemleri gönderirseniz en az geçişli sıralamayı çıkarır, kaç gün gerektiğini önceden söyleriz.",
            },
            {
                soru: "Operatör göndermeniz şart mı, kendi personelimiz kullanabilir mi?",
                cevap:
                    "Kendi personeliniz kullanabilir; şart, ilgili ekipman sınıfı için geçerli bir yeterlilik belgesi ve teslim anında yapılan saha eğitimidir. Bununla birlikte kırsal adreslerde operatörlü seçeneği daha sık öneriyoruz ve bunun nedeni ehliyet değil zemin: yumuşak ve eğimli yüzeylerde konumlanma kararı, deneyimle hızlanan bir iştir ve yanlış nokta seçimi bir günü kolayca yakar. Tek seferlik ve kısa işlerde operatörlü model çoğu zaman toplamda daha az tutar. Uzun kalışlarda ise kendi personelinizin kullanması ekonomiktir; ilk gün eğitimi biz veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sinanpaşa’nın ova tabanlı tarım ve hayvancılık ilçesi olması kamuya açık genel bilgidir; güzergâh planı, zemin kararı ve hijyen düzeni firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:cay": {
        h1: "Çay’da Gıda İşleme ve Depolama Tesisleri İçin Manlift",
        giris:
            "Çay, Afyonkarahisar’ın doğu kesiminde, ana karayolu hattı üzerinde yer alan ve tarımsal üretimi işlemeye ve depolamaya bağlayan bir ilçedir; buradaki yapı stoğu bu nedenle tarladan çok tesise benzer. Ürünün toplandığı, tasnif edildiği, soğutulduğu ve sevkiyata hazırlandığı yapılar ilçenin karakterini belirler ve manlift talebi de ağırlıklı olarak bu yapılardan gelir. Bu tesislerin ortak özelliği, yılın büyük bölümünde yarı boş, kampanya döneminde ise saatlerce durmayan bir tempoda çalışmalarıdır. Yüksekte çalışma açısından bu ikili tempo her şeyi belirler: soğuk hava deposunun evaporatör bakımı, tasnif hattının üstündeki aydınlatma, kasa istif alanının çatı altı havalandırması ve sevkiyat rampasının üst örtüsü — hepsi kampanya dışı pencerede yapılması gereken işlerdir. Bu ilçeye gönderdiğimiz ekipman soğuk hacimde çalışmaya uygun, gıda alanına girmeden önce ayrıca temizlenmiş ve kapalı hacimde egzoz üretmeyen sınıflardan seçilir.",
        maddeler: [
            {
                baslik: "Soğuk hava depolarında evaporatör hattı",
                metin:
                    "Soğuk hacimlerde yüksekteki iş kaleminin neredeyse tamamı soğutma ekipmanına aittir: tavana asılı evaporatör ünitelerinin kanat temizliği, fan motorlarının kontrolü, defrost hattının ve tahliye borusunun bakımı, izolasyonu açılan boru hatlarının kaplanması. Bu işlerin hepsi düşük sıcaklıkta, çoğu zaman kısa aralıklarla yapılır ve hidrolik akışkanın soğukta davranışı hesaba katılır. Makine soğuk hacimde bekletilmez; iş bloklarına bölünür, aralarda ünite dışarı alınır ve sıcaklık farkının yarattığı yoğuşma kurutulur.",
            },
            {
                baslik: "Tasnif ve boylama hatlarının üstü",
                metin:
                    "Ürünün kalibre edildiği hatlarda üst kot yoğun bir bölgedir: aydınlatma armatürleri, ayıklama bandının üstündeki kamera ve sensör düzenekleri, aspirasyon ağızları ve taşıyıcı bantların askı noktaları hep buradadır. Hat çalışırken bu bölgede iş yapılmaz — ürünün üstünde serbest bırakılan hiçbir parça kabul edilmez. Uygulamamız, çalışmayı planlı temizlik duruşuna yazmak, zorunlu hâllerde hattın ilgili kesitini örtmek, sepet altına toplama tablası koymak ve el aletlerini bağlamaktır.",
            },
            {
                baslik: "Kasa ve palet istif alanlarında çatı altı",
                metin:
                    "Boş kasa ve paletlenmiş ürünün bekletildiği hacimler, ilçedeki en geniş kapalı alanlardır ve buradaki iş çatı altında yoğunlaşır: havalandırma bacaları, çatı ışıklıkları, yangın algılama dedektörleri ve genel aydınlatma. Belirleyici kısıt yükseklik değil koridor geometrisidir; makinenin ilerleyeceği hattın boş olması ve sepetin istif yığınına güvenli mesafede kalması gerekir. Bu yüzden istif alanı işleri, bölümün geçici olarak boşaldığı pencerelere göre parçalanır ve gün planı depo yönetimiyle birlikte kurulur. Boş kasa istifleri özellikle aldatıcıdır: hafif oldukları için sağlam görünmezler ve sepetin yaratacağı küçük bir temas bile yığını devirebilir, bu yüzden onlara yaklaşma mesafesi dolu paletlerden daha geniş tutulur.",
            },
            {
                baslik: "Sevkiyat rampası ve dış örtü işleri",
                metin:
                    "Tesislerin dışa bakan yüzünde ayrı bir iş ailesi vardır: rampa üstü sundurma sacı, kapı üstü körük ve conta hattı, dış aydınlatma direkleri ve oluk-iniş borusu onarımı. Buranın zorluğu yükseklikten değil trafikten gelir; sevkiyat sürerken rampa önünde çalışan bir makine hem kendisi risk altındadır hem operasyonu kilitler. Çözüm kapı bazlı sıralamadır: hangi kapının hangi saatte boşalacağı önceden alınır ve makine kapıdan kapıya bu sıraya göre ilerler.",
            },
            {
                baslik: "Kampanya dışı pencerenin darlığı",
                metin:
                    "Bu tesislerin bakım takvimi yılın tamamına yayılmaz; ürün girişinin durduğu ve hacimlerin boşaldığı aralığa sıkışır. Aynı aralık ilçedeki diğer tesisler tarafından da istenir ve bu, makine bulmayı fiyattan daha kritik bir konu hâline getirir. Bu yüzden düzenli çalıştığımız işletmelerden bakım listelerini iki gruba ayırmalarını isteriz: tarihi kampanyaya kilitli olanlar ve kaydırılabilir olanlar. İkinci grup, birinci grubun yarattığı yığılmayı boşaltmanın tek pratik yoludur ve bu ayrımı yapan işletmeler hem istedikleri sınıfı bulur hem programlarını daha rahat kurar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tesis bölümleri ve çalışma penceresi eşleşmesi",
                paragraflar: [
                    "Aynı tesisin içinde bölümden bölüme ortam ve uygun zaman değişir. Aşağıdaki tablo, Çay’daki tesislerde en sık çalıştığımız bölümleri ve her birinin pencere mantığını toplar.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Sık yapılan iş", "Ortam", "Uygun pencere"],
                    satirlar: [
                        ["Soğuk hacim", "Evaporatör, defrost hattı", "Düşük sıcaklık", "Boşaltma sonrası"],
                        ["Tasnif hattı", "Armatür, sensör, askı", "Gıda hijyeni", "Planlı temizlik duruşu"],
                        ["İstif / kasa alanı", "Çatı ışıklığı, dedektör", "Yüksek istif, forklift", "Bölüm boşaldığında"],
                        ["Sevkiyat rampası", "Sundurma, körük, oluk", "Araç trafiği", "Kapı boş saati"],
                        ["Makine dairesi", "Boru askısı, izolasyon", "Isı ve gürültü", "Servis duruşu"],
                        ["İdari bölüm", "Aydınlatma, asma tavan", "Standart koşul", "Mesai dışı"],
                    ],
                },
            },
            {
                baslik: "Soğuk hacimde çalışmanın ekipmana etkisi",
                paragraflar: [
                    "Düşük sıcaklıklı bir hacimde platformun davranışı, normal ortamdakinden farklıdır ve bunu kiracının bilmesi gerekmez, bizim yönetmemiz gerekir. Hidrolik akışkan soğukta koyulaşır; hareketler yavaşlar ve ünite ısınana kadar tepki süresi uzar. Bu yüzden soğuk hacme girmeden önce makineyi kısa bir çalıştırma turuyla hazırlar, iş bloklarını da bu ritme göre kurarız. Akü performansı da soğukta düşer; uzun iş listelerinde ara şarj penceresi plana baştan yazılır.",
                    "İkinci etki yoğuşmadır. Soğuk hacimden sıcak ortama çıkan makinenin yüzeylerinde ve kumanda bölgesinde nem toplanır; bu nem kurutulmadan makine tekrar içeri alınırsa donma ve elektriksel arıza riski doğar. Uygulamamız, çıkış sonrası bekleme ve kurulama adımını iş planına dahil etmektir. Bu adım birkaç dakikalık bir alışkanlıktır ama program ortasında yaşanan bir arızanın maliyetini tamamen ortadan kaldırır.",
                ],
            },
            {
                baslik: "Karayolu hattı üzerinde olmanın avantajı",
                paragraflar: [
                    "Çay’ın ana karayolu hattı üzerinde bulunması, kiralama ekonomisinde doğrudan görünür bir fark üretir: makinenin ilçeye ulaşması, iç kesimdeki kırsal noktalara kıyasla belirgin biçimde daha basittir. Lowbed girişinde manevra sorunu çoğu tesiste yaşanmaz, indirme için sert zemin genellikle mevcuttur ve acil taleplerde aynı gün müdahale ihtimali burada daha yüksektir.",
                    "Bunun ikinci sonucu, ilçenin çevre noktalara sıçrama tahtası olarak kullanılabilmesidir. Hat üzerindeki bir tesiste başlayan bir program, aynı sevkiyat içinde iç kesimdeki bir adrese uzatılabilir ve nakliye payı ikiye bölünür. Bu birleşmenin tek koşulu tarihlerin önceden konuşulmuş olmasıdır; son anda gelen talepler hatta yetişemez ve tekil sevkiyat maliyetini üstlenir.",
                    "Karayolu yakınlığının üçüncü etkisi, tesislerin kendi dış cephesinde görünür: yol kenarına bakan yüzeylerde toz ve is birikimi daha hızlıdır, tabela ve yönlendirme levhaları daha sık yenilenir, dış aydınlatma armatürleri daha erken kirlenir. Bu kalemler tek başına küçük işlerdir ama düzenli tekrar ederler; bakım listesine yıllık bir kalem olarak yazıldıklarında, her defasında ayrı çağrı yapmaktan belirgin biçimde ucuza gelirler ve zaten sahada bulunan makineyle aynı gün kapanırlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk hava deposunun içinde platform çalıştırılabilir mi?",
                cevap:
                    "Çalıştırılabilir; bu hacimler bizim için alışılmış bir çalışma ortamıdır. Dikkat ettiğimiz üç şey var. Birincisi hazırlık: makine soğuğa girmeden kısa bir çalıştırma turuyla ısıtılır, çünkü hidrolik akışkan soğukta koyulaşır ve tepki süresi uzar. İkincisi süre: makine soğuk hacimde saatlerce bekletilmez, iş bloklara bölünür. Üçüncüsü çıkış: dışarı alındığında yüzeylerde yoğuşan nem kurutulmadan tekrar içeri sokulmaz. Depo tarafında sizden beklediğimiz, çalışılacak bölümün ürünün korunmasına engel olmayacak biçimde boşaltılmış olmasıdır.",
            },
            {
                soru: "Tasnif hattımız çalışırken üstünde iş yapılabilir mi?",
                cevap:
                    "En doğru yol hattın durmasıdır ve planlı temizlik duruşunuz varsa iş oraya yazıldığında ek maliyet de doğmaz. Zorunlu hâllerde çalıştığımız kesitin üstü örtülür, sepet altına toplama tablası konur, el aletleri bağlanır ve alan bariyerlenir; ancak bu riski azaltan bir düzendir, ortadan kaldıran değil. Kıvılcım, taşlama ya da kesme içeren kalemler bu düzenin tamamen dışındadır ve açık ürünün üstünde hiçbir koşulda yapılmaz. Hangi kalemin duruş gerektirdiğini keşifte ayırır, listeyi buna göre ikiye böleriz.",
            },
            {
                soru: "Kampanya döneminde acil bir arıza çıkarsa gelebilir misiniz?",
                cevap:
                    "Geliriz; ilçenin ana karayolu hattı üzerinde olması acil müdahaleyi kolaylaştıran bir avantajdır. Ancak kampanya döneminde iki gerçeği baştan söylemek isteriz: bölgedeki makine yoğunluğu yüksektir ve müsait sınıf, tercih ettiğiniz sınıf olmayabilir. İkincisi, acil müdahale kapsamı arızayı gidermeye odaklanır; birikmiş bakım kalemleri aynı sefere sığmaz. Bu yüzden kampanya öncesinde bir hazırlık turu yapılmasını öneririz — evaporatör, aydınlatma ve havalandırma kontrolü önceden yapıldığında, kampanya ortasındaki acil çağrıların çoğu zaten oluşmaz.",
            },
            {
                soru: "İstif alanımızda koridorlar dolu; makine geçebilir mi?",
                cevap:
                    "Belirleyici olan yükseklik değil koridor genişliği ve dönüş yarıçapıdır. Makine, ilerleyeceği hat boyunca serbest kalmalı ve sepet, istif yığınına güvenli mesafede durmalıdır — istife yanaşmak istemeyiz, çünkü paletlenmiş yükün hareketi önceden kestirilemez. Uygulamada işi bölüm bölüm parçalarız: hangi koridorun hangi saatte boşalacağı depo yönetiminden alınır, makine o sıraya göre ilerler ve tüm alanın aynı anda boşalması gerekmez. Koridor genişliğini ve en üst istif kotunu bildirirseniz sınıf seçimini önceden netleştiririz.",
            },
            {
                soru: "Rampa önünde çalışırken sevkiyatımız durur mu?",
                cevap:
                    "Durması gerekmez; yöntem kapı bazlı sıralamadır. Depo yönetiminden hangi kapının hangi saatte boş kalacağını alır, makineyi kapıdan kapıya bu sıraya göre ilerletiriz; böylece rampa önü hiçbir zaman tümüyle kapanmaz. Çalışılan kapının önü şeritle ayrılır ve araç yönlendirmesi sizin saha düzeninize göre yapılır. Sevkiyatın hiç durmadığı yoğun günlerde dış hat işlerini erken sabaha veya vardiya değişimine alırız. Bu planı kurabilmek için ihtiyacımız olan tek şey, günlük sevkiyat ritminizi önceden bilmektir.",
            },
            {
                soru: "Yıllık bakım listemizi ne zaman planlamalıyız?",
                cevap:
                    "Ürün girişinin durduğu ve hacimlerin boşaldığı aralık doğru cevaptır, ama bu aralığı ilçedeki diğer tesislerle paylaştığınızı da hesaba katmak gerekir. Pratik önerimiz listeyi ikiye ayırmanızdır: tarihi kampanyaya kilitli kalemler ve kaydırılabilir kalemler. Birinci grubu erken kilitleriz, ikinci grubu yoğunluğun düştüğü haftalara dağıtırız. Bu ayrımı yapan işletmeler hem istedikleri sınıfı bulur hem toplam maliyeti düşürür. Listeyi bize gönderirseniz hangi kalemin hangi gruba düştüğünü birlikte işaretler, yıllık programı tek seferde çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çay’ın tarımsal ürün işleme-depolama yapılarının bulunduğu, ana karayolu hattı üzerindeki bir ilçe olması kamuya açık genel bilgidir; soğuk hacim hazırlığı, kapı bazlı sıralama ve pencere yönetimi firma saha pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:afyonkarahisar-merkez": {
        h1: "Afyonkarahisar Merkezde Gıda Tesisleri İçin Manlift Kiralama",
        giris:
            "Afyonkarahisar’ın adı ülke genelinde gıdayla anılır: et ürünleri geleneği, süt ve süt ürünleri kültürü, un ve şekerleme üretimi bu şehrin dışarıdan bilinen kimliğidir ve merkezdeki üretim dokusu da büyük ölçüde bu kimliğin üzerine kuruludur. Yüksekte çalışma açısından bu, oldukça özel bir talep profili demektir: burada iş, çoğunlukla açık ya da yarı açık gıdanın bulunduğu bir hacmin tavanında geçer ve bu tek cümle, kullanılacak makineden çalışma saatine kadar her şeyi belirler. Üretim alanına giren bir platform artık sadece bir iş makinesi değil, hijyen zincirinin bir parçasıdır; tekerleği, hidroliği, sepet tabanı ve operatörün üzerindekiler ayrı ayrı düşünülür. Buna bir de üretim temposu eklenir — süt işleyen bir tesisin günü sağım saatine, et işleyen bir tesisin günü kesim ve olgunlaştırma programına, un öğüten bir tesisin günü ise neredeyse hiç durmayan bir hatta bağlıdır. Merkezden çıkan sevkiyatlarımızda hangi ünitenin hangi tesise gideceği, bu üç ritmin hangisine denk düştüğüne bakılarak belirlenir.",
        maddeler: [
            {
                baslik: "Süt işleme hacimlerinde tank ve CIP hattı üstü",
                metin:
                    "Süt işleyen tesislerde üst kot, paslanmaz boru ve tank dünyasıdır: pastörizasyon hattının askıları, CIP yıkama borularının bağlantı noktaları, tank üstü kapak ve karıştırıcı mekanizmaları, buhar ve soğuk su hatlarının izolasyonu. Bu bölgede iki kural birlikte işler — yıkama döngüsü sırasında hat üstünde çalışılmaz, çünkü kimyasal ve sıcak su devrededir; ve zemin sürekli ıslak olduğu için makinenin tutunması ayrıca kontrol edilir. Çalışma penceresi, yıkama ve üretim arasındaki boşluğa yazılır.",
            },
            {
                baslik: "Et ürünleri tesislerinde olgunlaştırma ve soğuk oda",
                metin:
                    "Et işleyen tesislerde hacimler sıcaklığa göre ayrılmıştır ve her hacim farklı bir çalışma koşulu dayatır: kesim ve parçalama bölümü ıslak ve soğuktur, olgunlaştırma odaları kontrollü sıcaklık ve nemde tutulur, mamul soğuk odaları düşük sıcaklıktadır. Yüksekteki iş kalemleri bu odaların iklimlendirme ekipmanı, asma raylı taşıma sistemleri ve tavan aydınlatmasıdır. Raylı sistem bulunan hacimlerde ray üzerindeki yükün boşaltılmış olması, çalışmanın ön şartıdır ve bu yazılı olarak teyit edilir.",
            },
            {
                baslik: "Un ve şekerleme üretiminde toz yükü",
                metin:
                    "Un öğüten ve şekerleme üreten tesislerde havada asılı kalan ince toz, sıradan bir temizlik konusu değildir; kapalı hacimde birikmiş organik toz, tutuşma riski taşıyan bir ortam üretir. Bu nedenle bu hacimlerde kıvılcım çıkaran hiçbir işlem yapılmaz ve kullanılan ekipmanın bu ortama uygunluğu tesisin kendi risk değerlendirmesiyle birlikte ele alınır. Çalışma öncesinde aspirasyonun devrede olup olmadığı ve üst yüzeylerde biriken tozun temizlenmiş olması sorulur.",
            },
            {
                baslik: "Hijyen zincirine giren makinenin hazırlığı",
                metin:
                    "Gıda üretim hacmine giren bir üniteyi sıradan bir sevkiyattan ayıran şey, sahaya inmeden önce yapılanlardır: tekerlek yüzeyleri temizlenir, sepet tabanı ve korkuluklar silinir, hidrolik bağlantılarda sızıntı kontrolü yapılır ve gerekiyorsa sepet altına toplama tablası hazırlanır. Kapalı hacimde egzoz üretmeyen akülü sınıflar tercih edilir. Bu hazırlık işletme talep etmeden uygulanır; çünkü bir gıda tesisinde makine kaynaklı bir bulaşı, işin kendisinden kat kat pahalı bir sonuç doğurur.",
            },
            {
                baslik: "Üretim ritmine göre çalışma penceresi",
                metin:
                    "Merkezdeki gıda tesislerinin ortak sorunu, hattın gerçekten durduğu saatin çok kısa olmasıdır. Bu yüzden yıllık bakım kalemlerini tesisin kendi planlı temizlik ve dezenfeksiyon duruşlarına yazmayı öneririz — bu duruşlar zaten takvimde vardır ve iş oraya yerleştiğinde ek üretim kaybı doğmaz. Duruşun süresi kısa olduğunda liste parçalara bölünür ve birden fazla duruşa yayılır. Bu planlamayı yapabilmek için tesisin haftalık temizlik takvimini önceden görmemiz gerekir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda üretim bölümleri ve erişim koşulları",
                paragraflar: [
                    "Aynı tesisin içinde bölümden bölüme ortam, hijyen sınıfı ve uygun makine değişir. Aşağıdaki tablo merkezdeki gıda tesislerinde en sık çalıştığımız bölümleri ve her birinin belirleyici koşulunu toplar.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Yüksekteki iş", "Belirleyici koşul", "Uygun ünite"],
                    satirlar: [
                        ["Süt işleme hacmi", "Boru askısı, tank üstü", "Islak zemin, CIP döngüsü", "Akülü, geniş tabanlı"],
                        ["Olgunlaştırma odası", "İklimlendirme, ray hattı", "Kontrollü sıcaklık-nem", "Kompakt akülü"],
                        ["Soğuk mamul odası", "Evaporatör, aydınlatma", "Düşük sıcaklık", "Blok çalışma, ara çıkış"],
                        ["Un / öğütme bölümü", "Aspirasyon, kanal askısı", "Organik toz yükü", "Kıvılcımsız çalışma düzeni"],
                        ["Paketleme hattı", "Armatür, sensör, menfez", "Açık ürün üstü", "Toplama tablalı akülü"],
                        ["Sevkiyat / rampa", "Sundurma, körük, oluk", "Araç trafiği", "Dizel, hızlı toplanan"],
                    ],
                },
            },
            {
                baslik: "Denetime hazır bir tesiste yüksekte çalışma",
                paragraflar: [
                    "Gıda üreten bir tesiste yapılan her müdahale, sonradan sorulabilecek bir sorunun konusudur: hangi alanda, kim, hangi ekipmanla çalıştı ve alan nasıl teslim edildi. Bu yüzden bu tesislerde iş sonunda yalnızca sözlü teslim yapmayız; çalışılan alan, uygulanan önlemler ve teslim durumu tutanağa yazılır. İşletmenin kendi kayıt sistemine ekleyebileceği bir belge, denetim anında en çok işe yarayan şeydir.",
                    "Aynı mantık ekipman tarafında da geçerlidir. Üretim hacmine giren ünitenin hangi hazırlıktan geçtiği, sepet altına tabla konulup konulmadığı ve el aletlerinin bağlanıp bağlanmadığı kayda geçer. Bu ayrıntılar bürokrasi gibi görünür ama gıda tesisinde bürokrasi değil, işin kendisidir; iş bittikten sonra alanın kendi prosedürünüze göre yeniden temizlenmesi de bu zincirin son halkasıdır ve programda süresi ayrılmış bir adım olarak durur.",
                ],
            },
            {
                baslik: "Merkez konumun sevkiyat planına katkısı",
                paragraflar: [
                    "Merkez, ilin geri kalanına açılan doğal dağıtım noktasıdır ve bu, kiralama planlamasında pratik bir avantaj üretir: merkezden çıkan bir makine, aynı program içinde ilçelerdeki adreslere uzatılabilir. Merkezdeki bir gıda tesisinin iki günlük listesi bittiğinde, aynı ünite ilçe hattına devam eder ve nakliye payı adresler arasında bölünür. Bu birleşme, özellikle kısa iş listelerinde birim maliyeti belirgin biçimde düşürür.",
                    "Bunun tersi de doğrudur: ilçelerde kurulmuş bir program merkeze uğrayarak tamamlanabilir. Talep sırasında o hafta için kurulmuş bir hat varsa bunu söyleriz ve takviminizi buna göre değerlendirebilirsiniz. Hattın dışında kalan acil talepler elbette karşılanır, ancak tekil sevkiyat kalemini üstlenir; bu farkı teklifte açıkça göstermeyi tercih ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim hacmimize giren makinenin hijyen açısından hazırlığı nedir?",
                cevap:
                    "Sevkiyat öncesinde tekerlek yüzeyleri temizlenir, sepet tabanı ve korkuluklar silinir, hidrolik bağlantılarda sızıntı kontrolü yapılır ve kapalı hacimde egzoz üretmeyen akülü bir sınıf seçilir. Sahada, üretim alanına girişte tekerlekler bir kez daha silinir ve gerekiyorsa sepet altına toplama tablası kurulur. Bu hazırlığı siz talep etmeden uygularız. Sizden beklediğimiz, tesisinizin kendi giriş prosedürünü bize önceden iletmenizdir — bone, önlük, ayak koruması gibi kurallar tesisten tesise değişir ve ekibimiz bunlara uyarak gelir.",
            },
            {
                soru: "Süt işleme hattımızın üstünde iş var; hangi saatte çalışmalıyız?",
                cevap:
                    "Doğru pencere, üretimin bittiği ve yıkama döngüsünün henüz başlamadığı ya da tamamlandığı aralıktır. Yıkama sürerken hat üstünde çalışılmaz, çünkü sistemde sıcak su ve temizlik kimyasalı dolaşır ve olası bir sızıntı sepetteki kişiyi doğrudan etkiler. Üretim sürerken de çalışılmaz, çünkü açık ürün ve dolum noktaları üstünde iş yapılmaz. Kalan aralık genellikle kısadır; bu yüzden listeyi parçalara böler ve birden fazla güne yayarız. Haftalık yıkama ve üretim takviminizi paylaşırsanız pencereleri biz işaretler, planı buna göre kurarız.",
            },
            {
                soru: "Un ve toz yoğun bölümlerimizde çalışabilir misiniz?",
                cevap:
                    "Çalışırız, ama bu bölümlerde kural setimiz farklıdır. Havada asılı ince organik toz, kapalı hacimde tutuşma riski taşıyan bir ortam üretir; bu yüzden kıvılcım çıkaran hiçbir işlem — taşlama, kesme, kaynak — bu hacimlerde yapılmaz ve bu kalem listeden ayrılıp başka bir yönteme yazılır. Çalışma öncesinde aspirasyonun devrede olduğunu ve üst yüzeylerdeki birikmiş tozun temizlendiğini teyit ederiz. Ekipman uygunluğu tesisin kendi risk değerlendirmesiyle birlikte ele alınır; bu değerlendirmeyi görmeden bu bölümlere makine indirmeyiz.",
            },
            {
                soru: "Soğuk odamızda kısa süreli bir işimiz var; makine soğukta çalışır mı?",
                cevap:
                    "Çalışır, ama hazırlıklı çalışır. Düşük sıcaklıkta hidrolik akışkan koyulaşır ve hareketler yavaşlar; bu yüzden makine soğuk hacme girmeden kısa bir çalıştırma turuyla hazırlanır. İş bloklara bölünür ve ünite soğukta saatlerce bekletilmez. Çıkışta yüzeylerde ve kumanda bölgesinde nem yoğuşur; bu nem kurutulmadan makine tekrar içeri alınmaz, aksi hâlde donma ve elektriksel arıza riski doğar. Bu adımların hepsi iş planında süresi ayrılmış kalemlerdir, sonradan eklenen sürprizler değil — teklifte gördüğünüz süre bunları zaten içerir.",
            },
            {
                soru: "Asma raylı taşıma sistemimizin altında çalışılabilir mi?",
                cevap:
                    "Ancak ray boşaltıldıktan sonra. Asma rayda asılı duran yükün altında hiçbir koşulda çalışmayız; bu, üzerinde pazarlık yapmadığımız bir maddedir. Uygulamada çalışacağımız bölümdeki ray boşaltılır, sistemin hareketi durdurulur ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Tesisin tamamını durdurmanız gerekmez; yalnızca çalıştığımız hacim durur. Ray hattının kendi bakımı da bizim sık yaptığımız işlerden biridir — askı noktaları ve ray ekleri boyunca kademeli konumlanarak ilerleriz ve iskele kurulumuna gerek kalmaz.",
            },
            {
                soru: "İşin sonunda alanı nasıl teslim ediyorsunuz?",
                cevap:
                    "Gıda tesislerinde teslim, işin bitmesiyle aynı şey değildir. Çalışma bittiğinde kullanılan tüm el aletleri sayılarak toplanır, sepet altındaki tabla kaldırılır, makinenin geçtiği güzergâh gözden geçirilir ve alan sizin kendi temizlik prosedürünüze göre yeniden temizlenmeye hazır hâlde bırakılır. Ardından çalışılan bölüm, uygulanan önlemler ve teslim durumu tutanağa yazılır; bu belgeyi kendi kayıt sisteminize ekleyebilirsiniz. Denetim anında en çok işe yarayan şey budur ve bu adımın süresi programda ayrı bir kalem olarak yer alır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Afyonkarahisar’ın et ürünleri, süt ürünleri, un ve şekerleme üretimiyle anılması kamuya açık genel bilgidir; hijyen hazırlığı, pencere yönetimi ve teslim tutanağı düzeni firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:bolvadin-osb": {
        h1: "Bolvadin OSB’de Tarımsal Sanayi Tesisleri İçin Manlift",
        giris:
            "Bolvadin, Afyonkarahisar’ın tarımsal üretimi sanayiye çeviren ilçelerinin başında gelir; şeker pancarı ve haşhaş gibi endüstriyel bitkilerin işlendiği bir üretim geleneği ilçenin kimliğini oluşturur ve organize sanayi dokusu da bu geleneğin üzerine kurulmuştur. Bu, yüksekte çalışma açısından kendine özgü bir sanayi tipi demektir: burada karşımıza çıkan yapı, montaj bandı olan bir fabrikadan çok, proses tesisidir — silolar, kurutucular, buhar hatları, taşıma bantları, aspirasyon kanalları ve bunları birbirine bağlayan çelik konstrüksiyon kuleler. İş kalemleri de buna göre dikeydir: hedef nokta çoğu zaman bir tavan değil, birbirinin üstünde duran ekipman katmanlarından biridir. Bir de kampanya gerçeği vardır; işlenecek ürün geldiğinde tesis kesintisiz çalışır, kampanya bittiğinde ise bakım listesi bir anda açılır. Bolvadin OSB’ye gönderdiğimiz ekipman bu iki gerçeği birlikte karşılar: uzanma mesafesi yüksek, dış sahada ve kaba zeminde ilerleyebilen, uzun programlarda sahada kalabilen sınıflar.",
        maddeler: [
            {
                baslik: "Silo ve kule konstrüksiyonlarında dikey erişim",
                metin:
                    "Proses tesislerinin en belirgin unsuru, birbirine bağlı silo ve kule gruplarıdır; bu yapıların gövde bağlantıları, merdiven ve sahanlık korkulukları, üst kapak mekanizmaları ve seviye ölçüm ekipmanları düzenli kontrol ister. Bu noktalara sabit merdivenle çıkmak mümkündür ama iş yapmak, elde malzeme ve alet varken çok başka bir konudur. Sepetli erişim burada hem hız hem güvenlik kazandırır; makine kule dibine değil, devrilme koridorunun dışına konumlanır ve mesafe bomla kapatılır.",
            },
            {
                baslik: "Taşıma bantları ve aktarma kulelerinin bakımı",
                metin:
                    "Hammaddenin tesis içinde yer değiştirdiği bant hatları, eğimli olarak ilerler ve aktarma noktalarında kule oluşturur. Tambur ve rulo değişimi, sıyırıcı ayarı, örtü sacının onarımı ve bant boyunca uzanan aspirasyon hattının kontrolü bu hatların rutin işidir. Bandın enerjisi kesilmeden hiçbir noktasında çalışılmaz; ani devreye alınan bir bant, sepetteki kişi için doğrudan tehdittir. Enerji kesme ve kilitleme düzeni, çalışma öncesinde saha sorumlusuyla birlikte kurulur ve iş emrine yazılır.",
            },
            {
                baslik: "Buhar ve proses hatlarında yalıtım işleri",
                metin:
                    "Proses tesislerinde sıcak hatlar, tesis içinde ve dışında uzun mesafeler kat eder; yalıtım kaplamasının açıldığı yerlerden içeri giren su, kaplamanın altında görünmeyen bir korozyon başlatır ve bu, fark edilene kadar ilerler. Hat boyunca yürütülen kontrol ve yenileme işleri eklemli bomlu makinelerin doğal konusudur: ünite hattın altına konumlanır, sepet boru kotuna çıkar ve hat kademe kademe taranır. Sıcak hatta yakın çalışmada izin süreci tesisin kendi prosedürüne göre işler ve buna uyarız.",
            },
            {
                baslik: "Aspirasyon ve toz tutma sistemlerinde çatı üstü",
                metin:
                    "Kuru ürün işleyen tesislerde toz tutma sistemi, üretimin kendisi kadar kritik bir hattır: filtre üniteleri genellikle çatı kotunda veya kule üstünde durur, kanallar uzun mesafeler boyunca çatı üzerinde ilerler. Filtre torbası değişimi, kanal ekleri, damper mekanizmaları ve fan grupları buradaki iş kalemleridir. Çatı üstü çalışmada belirleyici olan rüzgârdır ve yükseklik arttıkça sınır daha erken devreye girer; geniş yüzeyli parça taşınan kalemler rüzgârın sakinleştiği saatlere alınır.",
            },
            {
                baslik: "Kampanya sonrası açılan toplu bakım listesi",
                metin:
                    "Bu tesislerde bakım, yılın tamamına yayılan bir faaliyet değildir; kampanya bittiğinde açılan ve birkaç haftaya sığdırılması gereken bir programdır. Aynı dönemde bölgedeki diğer tesisler de aynı işi ister ve makine bulmak, fiyattan önce gelen bir konu hâline gelir. Bu yüzden kampanya bitişinden önce program kurmayı öneririz: liste çıkarılır, hangi kalemin hangi sınıfla ve kaç günde yapılacağı yazılır ve makine, tesis boşaldığı gün sahada olur. Sonradan çıkarılan listeler sıraya en arkadan girer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proses tesisinde bölge, kot ve makine eşleşmesi",
                paragraflar: [
                    "Bir proses tesisi tek tip bir hacim değildir; bölgeden bölgeye kot, ortam ve uygun makine değişir. Aşağıdaki tablo, OSB’de en sık çalıştığımız bölgeleri ve her birinin belirleyici kısıtını toplar.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Yapılan iş", "Belirleyici kısıt", "Seçilen sınıf"],
                    satirlar: [
                        ["Silo grubu", "Kapak, seviye ölçüm, korkuluk", "Devrilme koridoru", "Uzun uzanmalı bomlu"],
                        ["Aktarma kulesi", "Tambur, sıyırıcı, örtü sacı", "Bant enerjisi", "Eklemli bomlu"],
                        ["Buhar / proses hattı", "Yalıtım, vana, askı", "Sıcak yüzey, izin", "Kademeli konumlanan bom"],
                        ["Filtre / aspirasyon", "Torba, kanal, damper", "Rüzgâr, çatı kotu", "Yüksek erişimli bomlu"],
                        ["Üretim holü", "Aydınlatma, kanal, askı", "Kapalı hacim", "Akülü makaslı"],
                        ["Dış saha ve boru köprüsü", "Hat kontrolü, boya", "Kaba zemin", "Dizel 4x4 sınıf"],
                    ],
                },
            },
            {
                baslik: "Enerji kesme ve izinli çalışma düzeni",
                paragraflar: [
                    "Proses tesisinde bir ekipmanın durgun görünmesi, durduğu anlamına gelmez; bant, helezon, karıştırıcı ve fan grupları merkezi bir panelden ya da otomasyon üzerinden devreye alınabilir. Bu yüzden çalışma öncesinde tek bir şey yaparız ve bundan hiç vazgeçmeyiz: çalışılacak ekipmanın enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Sözlü teyit, bu tesislerde yeterli değildir.",
                    "İkinci başlık sıcak hatlardır. Buhar ve sıcak akışkan taşıyan borulara yakın çalışmada tesisin kendi izin prosedürü devreye girer; hattın basıncı, sıcaklığı ve gerekiyorsa boşaltılmış olması bu prosedürle belgelenir. Bizim rolümüz bu prosedürü hızlandırmak değil, ona uymaktır. Bu iki başlık netleştiğinde saha çalışması hızlı ilerler — belirsizlik sahada değil, plan aşamasında tüketilmiş olur.",
                ],
            },
            {
                baslik: "Uzun programda makinenin sahada kalması",
                paragraflar: [
                    "OSB’deki bakım programları çoğunlukla tek günlük değildir; liste haftalara yayılır ve makine tesiste kalır. Uzun kalışta iki konu öne çıkar. Birincisi bakımdır: tozlu ve kaba ortamda çalışan bir ünitede yağlama ve filtre kontrol aralığını kısaltırız, bu ziyaretler kiralama süresinden düşülmez. İkincisi süreklilik: arıza hâlinde ikame süresi sözleşmede baştan yazılır, çünkü duran makine ilerlemeyen program demektir.",
                    "Tesis tarafında istediğimiz iki basit düzenleme var: makinenin gece park edeceği düz ve korunaklı bir alan, akülü ünite kalacaksa şarj için erişilebilir bir enerji hattı. Bu iki düzenleme, uzun programlarda yaşanan duruşların önemli bölümünü baştan ortadan kaldırır ve iade günü yapılan durum karşılaştırmasını da tartışmasız hâle getirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silolarımızın üst kapaklarında iş var; makine kule dibine yanaşabilir mi?",
                cevap:
                    "Yanaşmasını tercih etmeyiz. Doğru yöntem, devrilme koridorunun dışında kalan sağlam bir noktaya konumlanıp mesafeyi bomla kapatmaktır; bu hem daha güvenlidir hem kule çevresindeki dar alanda manevra derdini ortadan kaldırır. Gerekli uzanma mesafesini belirlemek için üç ölçü isteriz: hedef noktanın zeminden kotu, kule ile makinenin durabileceği en yakın sağlam zemin arasındaki mesafe ve arada engel bulunup bulunmadığı. Bu üç bilgi netleştiğinde sınıf seçimini tek turda yaparız ve sahada değiştirmek zorunda kalmayız.",
            },
            {
                soru: "Bant hattımızda bakım yapacağız; tesisin tamamı durmalı mı?",
                cevap:
                    "Hayır, yalnızca çalıştığımız hat durur. Ancak o hattın durması gerçek olmalıdır: enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Bunun nedeni, bant ve aktarma ekipmanının merkezi panelden veya otomasyon üzerinden devreye alınabilmesidir; sözlü teyit bu tesislerde yeterli bir güvence değildir. Diğer hatlar üretime devam edebilir. Hangi hattın hangi saatte durabileceğini önceden konuşup işi o pencereye yerleştiririz; böylece duruş, işin gerçekten gerektirdiği süreyle sınırlı kalır.",
            },
            {
                soru: "Buhar hattımızın yalıtımı yenilenecek; hattın soğumasını beklemeli miyiz?",
                cevap:
                    "Bu kararı biz değil, tesisin kendi izin prosedürü verir ve biz o prosedüre uyarız. Genel olarak hattın basıncı, sıcaklığı ve gerekiyorsa boşaltılmış olması belgelenmeden sıcak hat çevresinde çalışılmaz. Uygulamada işi ikiye bölmek çoğu zaman en pratik yoldur: hazırlık, söküm ve ölçüm kalemleri daha esnek bir tarihe alınır, doğrudan hat üstünde yapılacak uygulama ise izinli pencereye yazılır. Böylece makine izin bekleyerek gün harcamaz. Prosedürünüzü önceden paylaşırsanız planı buna göre kurar, gün sayısını gerçekçi veririz.",
            },
            {
                soru: "Çatıdaki filtre ve kanal işlerinde rüzgâr sizi durdurur mu?",
                cevap:
                    "Durdurur ve bunu baştan söylemeyi tercih ederiz; her makinenin üretici tarafından belirlenmiş bir rüzgâr sınırı vardır ve yükseklik arttıkça bu sınır daha erken devreye girer. Geniş yüzeyli bir kanal parçası taşınıyorsa sınır daha da düşer. Bu belirsizliği yönetmenin yolu, aynı programa hava bağımlı ve hava bağımsız kalemleri birlikte yazmaktır: rüzgârlı bir sabahta çatı işi duruyorken ekip hol içi kalemlere geçer ve kiralanan gün boş geçmez. Hava kaynaklı bekleme günlerinin nasıl fiyatlanacağı sözleşmede baştan yazılır; sonradan çıkan sürpriz kalem olmaz.",
            },
            {
                soru: "Kampanya sonrası bakım için ne zaman rezervasyon yapmalıyız?",
                cevap:
                    "Kampanya bitmeden önce. Bunun nedeni basit: bölgedeki tesisler aynı takvimi paylaşır ve hacimler boşaldığında talep birkaç haftaya yığılır. Bu dönemde müsait sınıf, tercih ettiğiniz sınıf olmayabilir. Erken rezervasyon yaptığınızda makine tesis boşaldığı gün sahada olur ve program ilk günden işler. Bize gereken, kalem listesi ve tahmini bitiş tarihidir; tarih birkaç gün kayarsa programı kaydırırız, bu sorun değildir. Sorun, listenin hiç çıkarılmamış olmasıdır — o durumda sıra, listesi hazır olana geçer.",
            },
            {
                soru: "Makine haftalarca tesisimizde kalacak; bakımı nasıl yürüyor?",
                cevap:
                    "Uzun kalışlarda bakım bizim yükümüzdür ve programa dahildir. Tozlu ve kaba ortamda çalışan bir ünitede yağlama ve filtre kontrol aralığını standarttan kısa tutarız; bu kontrol ziyaretleri kiralama süresinden düşülmez. Arıza hâlinde ikame süresi sözleşmede baştan yazılır, çünkü duran makine ilerlemeyen program demektir. Sizden istediğimiz iki basit düzenleme var: makinenin gece park edeceği düz ve korunaklı bir alan, akülü ünite kalacaksa şarj için erişilebilir bir enerji hattı. Teslim ve iade anında mevcut durum fotoğrafla kayıt altına alınır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bolvadin’in şeker pancarı ve haşhaş gibi endüstriyel bitkilerin işlenmesiyle anılan tarımsal sanayi ilçesi olması kamuya açık genel bilgidir; enerji kesme düzeni, izinli çalışma ve uzun program bakımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:sultandagi": {
        h1: "Sultandağı’nda Meyve Depoları İçin Manlift Kiralama",
        giris:
            "Sultandağı, adını taşıdığı dağ eteklerindeki bahçecilikle tanınan bir ilçedir ve kiraz üretimiyle ülke genelinde anılır; ilçedeki yapı stoğu da bu üretimin gerektirdiği zincire göre şekillenmiştir. Meyvenin toplandığı, ön soğutmaya alındığı, tasnif edilip paketlendiği ve sevkiyata kadar bekletildiği yapılar birbirine yakın kurulur ve hepsi aynı takvimin baskısı altında çalışır. Bu takvim, yüksekte çalışma açısından son derece keskin bir kısıt üretir: hasat penceresi kısadır, bu pencerede tesisin durması söz konusu değildir ve hasattan hemen önce yapılmayan her bakım, sezon boyunca yapılamaz hâle gelir. İlçeye gelen manlift taleplerinin büyük bölümü bu nedenle iki dönemde toplanır — hasat öncesi hazırlık ve sezon kapanışı sonrası bakım. Gönderdiğimiz ekipman da bu iki dönemin farklı ihtiyaçlarına göre seçilir: hazırlık döneminde hızlı hareket eden ve çok noktayı kısa sürede kapatan sınıflar, kapanış döneminde ise uzun program taşıyabilen üniteler.",
        maddeler: [
            {
                baslik: "Ön soğutma ve muhafaza hacimlerinin ekipmanı",
                metin:
                    "Toplanan ürünün sıcaklığının hızla düşürüldüğü ön soğutma üniteleri ve ardından bekletildiği muhafaza hacimleri, ilçedeki en kritik yapılardır. Buradaki yüksekteki iş, tavana asılı soğutma ünitelerinin kanat ve fan bakımı, defrost ile tahliye hattının kontrolü, hava sirkülasyon perdelerinin askıları ve hacim aydınlatmasıdır. Bu kalemlerin hepsi ürün girmeden önce tamamlanmış olmalıdır; sezon içinde bir soğutma ünitesine müdahale, o hacimdeki ürünün tamamını riske atan bir karardır.",
            },
            {
                baslik: "Paketleme evlerinde hat üstü ve kasa akışı",
                metin:
                    "Ürünün boylandığı, seçildiği ve kasalandığı paketleme hacimlerinde üst kot yoğun bir bölgedir: bant üstü aydınlatma, ayıklama masalarının aydınlatması, aspirasyon ağızları ve taşıyıcı askılar hep buradadır. Sezon içinde bu hat neredeyse hiç durmaz ve durduğu kısa aralıklar temizliğe ayrılmıştır. Bu yüzden paketleme hattı işlerini sezon öncesi hazırlık listesine yazarız; sezon içinde yalnızca arıza müdahalesi yapılır ve bu müdahalede ürünün üstünde serbest parça bırakılmaz.",
            },
            {
                baslik: "Bahçe altyapısında sulama ve dolu koruma sistemleri",
                metin:
                    "Bahçe tarafındaki yüksekte çalışma ihtiyacı, ağaçtan değil altyapıdan gelir: sulama hattının pompa ve pano bağlantıları, elektrik direği üzerindeki hat kontrolleri, gölgeleme ve koruma örtülerinin taşıyıcı direk ve tel sistemleri. Bu işler tarla zemininde yapılır ve zeminin taşıma gücü sulama sonrasında belirgin biçimde düşer. Sulama programı bize önceden söylenmeli, çalışma noktaları kuru pencereye yazılmalıdır; şüpheli zeminde makine indirmeyiz.",
            },
            {
                baslik: "Sezon öncesi hazırlık turunun mantığı",
                metin:
                    "İlçedeki en verimli kiralama modeli, hasattan önce yapılan tek bir hazırlık turudur. Bu turda soğutma ekipmanı, aydınlatma, havalandırma ve çatı kalemleri bir arada ele alınır; makine tesiste birkaç gün kalır ve liste tek seferde kapanır. Bunun alternatifi, sezon içinde çıkan arızalar için tek tek çağrı yapmaktır ve bu hem daha pahalıdır hem her seferinde üretimi keser. Hazırlık turunun tarihini hasat tahmininize göre birlikte belirleriz.",
            },
            {
                baslik: "Sezonda acil müdahale ve sıra gerçeği",
                metin:
                    "Hasat penceresinde bir soğutma ünitesi arızalandığında zaman, günle değil saatle ölçülür; bunu biliyoruz ve bu dönemde acil çağrılara öncelik veririz. Ancak dürüst olmak gerekir: aynı hafta ilçedeki birçok tesis aynı durumda olabilir ve müsait sınıf, tercih ettiğiniz sınıf olmayabilir. Acil müdahalede kapsam arızayı gidermeye odaklanır, birikmiş bakım kalemleri aynı sefere sığmaz. Bu yüzden hazırlık turu, sezon içi acil çağrıların çoğunu baştan gereksiz kılan en ucuz sigortadır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sezon takvimine göre iş dağılımı",
                paragraflar: [
                    "İlçede hangi işin hangi döneme yazılacağı, tesisin verimini doğrudan etkiler. Aşağıdaki tablo, sık çalıştığımız kalemleri doğru dönemleri ve gerekçeleriyle birlikte gösterir.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Doğru dönem", "Gerekçe", "Uygun ünite"],
                    satirlar: [
                        ["Soğutma ünitesi bakımı", "Hasat öncesi", "Sezon içi müdahale ürünü riske atar", "Kompakt akülü"],
                        ["Paketleme hattı üstü", "Hasat öncesi", "Sezonda hat durmaz", "Akülü, tablalı"],
                        ["Çatı ve ışıklık onarımı", "Sezon kapanışı", "Uzun program gerektirir", "Arazi tipi makaslı"],
                        ["Sulama pano ve hattı", "Sulama dışı gün", "Zemin taşıma gücü", "Geniş tabanlı 4x4"],
                        ["Koruma örtüsü direkleri", "Bahar öncesi", "Örtü kurulumundan önce", "Eklemli bomlu"],
                        ["Sevkiyat rampası", "Sezon dışı", "Sezonda rampa boşalmaz", "Dizel, hızlı toplanan"],
                    ],
                },
            },
            {
                baslik: "Hasat penceresinin kısalığı neyi değiştirir",
                paragraflar: [
                    "Meyvecilikte hasat, haftalarla değil günlerle ölçülen bir pencerede yapılır ve bu pencere hava koşuluna göre öne ya da arkaya kayar. Tesis açısından bunun anlamı şudur: sezon başladığında bakım için bir saat bile ayrılamaz. Bu keskinlik, kiralama planlamasını da sıradan bir sanayi tesisinden ayırır — burada tarih pazarlığı yoktur, tarih ürüne bağlıdır.",
                    "Bizim buna uyum biçimimiz, hazırlık turunu hasat tahmininin biraz öncesine kilitlemek ve tarih kaydığında programı esnetebilecek şekilde planlamaktır. Bu esnekliği sağlayabilmek için ilçedeki işlerin aynı haftaya toplanması gerekir; tek bir adres için kurulmuş katı bir program, tarih kaydığında dağılır. Hattın parçası olan işletmeler ise kayan tarihe birlikte uyum sağlar.",
                ],
            },
            {
                baslik: "Dağ eteği coğrafyasında erişim",
                paragraflar: [
                    "İlçenin yerleşim ve bahçe dokusu dağ eteğine yayıldığı için erişim, ova ilçelerine kıyasla daha değişkendir: eğimli yaklaşımlar, dar köy girişleri ve bahçe yollarında sınırlı manevra alanı sık karşılaştığımız durumlardır. Ağır makine taşıyan çekicinin dönebileceği bir alan her adreste bulunmaz ve bu, makine sınıfını doğrudan sınırlar.",
                    "Çözümümüz iki aşamalıdır: makine, çekicinin rahat dönebildiği en yakın sert zemine indirilir ve kalan mesafe kendi yürüyüşüyle alınır; bu mümkün değilse daha hafif bir sınıf seçilir ve iş listesinin bu sınıfla kapanıp kapanmadığı önceden kontrol edilir. Karar için son yüz metreyi, giriş açıklığını ve eğimi gösteren birkaç fotoğraf yeterlidir — sahaya boşa yapılan bir sefere kıyasla çok ucuz bir hazırlıktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk hava deposunun bakımını hasattan ne kadar önce yaptırmalıyız?",
                cevap:
                    "Ürün girmeden önce tamamlanmış olacak kadar önce — pratikte bu, hasat tahmininizin birkaç hafta öncesi demektir. Nedeni şu: soğutma ünitesine sezon içinde müdahale etmek, o hacimdeki ürünün tamamını riske atan bir karardır ve çoğu işletme bu riski almak yerine arızayla yaşamayı seçer. Hazırlık turunda evaporatör kanatları, fan grupları, defrost ve tahliye hattı ile hacim aydınlatması bir arada ele alınır; makine tesiste birkaç gün kalır ve liste tek seferde kapanır. Tarih kayarsa programı kaydırırız; asıl önemli olan listenin önceden çıkarılmış olmasıdır.",
            },
            {
                soru: "Sezon içinde soğutmamız arızalanırsa aynı gün gelebilir misiniz?",
                cevap:
                    "Bu dönemde acil çağrılara öncelik veririz ve mümkün olan en hızlı şekilde geliriz. Ancak iki şeyi baştan söylemeyi doğru buluyoruz. Birincisi, hasat penceresinde ilçedeki talep yoğunlaşır ve müsait ünite, sizin tercih ettiğiniz sınıf olmayabilir; işi yapabilecek en uygun sınıfı göndeririz. İkincisi, acil müdahalede kapsam arızayı gidermekle sınırlıdır; birikmiş bakım kalemleri aynı sefere sığmaz ve sonraki programa yazılır. Hazırlık turunu yaptırmış tesislerde bu çağrıların çoğunun zaten oluşmadığını sahada düzenli olarak görüyoruz.",
            },
            {
                soru: "Paketleme hattımızın üstündeki aydınlatmaya sezon içinde dokunulabilir mi?",
                cevap:
                    "Sezon içinde yalnızca arıza müdahalesi yaparız, planlı yenileme yapmayız. Hat çalışırken açık ürünün üstünde iş yapılmaz; zorunlu bir müdahalede çalıştığımız kesitin üstü örtülür, sepet altına toplama tablası konur, el aletleri bağlanır ve alan bariyerlenir. Bu düzen riski azaltır, ortadan kaldırmaz. Planlı aydınlatma yenileme, bant üstü tesisat ve askı işleri hazırlık listesine yazılır ve sezon başlamadan bitirilir. Sezon öncesinde bir tur yaptırmak, sezon ortasında hattı durdurmak zorunda kalmaktan her ölçüde ucuzdur.",
            },
            {
                soru: "Bahçemizdeki sulama panosuna ulaşmanız gerekiyor; tarlaya makine girebilir mi?",
                cevap:
                    "Zemin kuruysa girer. Belirleyici olan yağıştan çok sulama programınızdır; sulanmış bir güzergâhta yüzey sağlam görünse bile alt katman yumuşak kalır ve destek ayağı gömüldüğünde makine hem hareket edemez hem sepet yukarıdayken stabilitesini kaybeder. Bu yüzden sulama takviminizi önceden isteriz ve bahçe işlerini kuru pencereye yazarız. Şüpheli zeminde makineyi indirmeyiz; bu kararı sahada, indirme öncesinde veririz. Gerekiyorsa çalışma noktalarının altına plaka serilir — bu, kurtarma operasyonundan çok daha ucuz bir önlemdir.",
            },
            {
                soru: "Bahçe yolumuz dar ve eğimli; makine oraya çıkabilir mi?",
                cevap:
                    "Çoğu durumda çıkabilir ama yöntemi önceden belirlemek gerekir. İki seçenek var: makineyi çekicinin rahat dönebildiği en yakın sert zemine indirip kalan mesafeyi kendi yürüyüşüyle almak, ya da daha hafif ve dar şaseli bir sınıf seçip taşımayı küçük araçla yapmak. İkinci seçenekte çalışma yüksekliği bir miktar düşer ve iş listenizin bu sınıfla kapanıp kapanmadığını birlikte kontrol ederiz. Karar için son yüz metreyi, giriş açıklığını ve eğimi gösteren birkaç fotoğraf yeterlidir; bu hazırlık, sahaya boşa yapılan bir seferden çok daha ucuzdur.",
            },
            {
                soru: "İlçede birkaç işletme aynı dönemde iş yaptırmak istiyor; bu bize avantaj sağlar mı?",
                cevap:
                    "Sağlar ve bu ilçede özellikle işe yarar. Makine bir kez ilçeye indirilir, adresler arasında sırayla dolaşır ve nakliye kalemi işletmeler arasında iş yüküne göre bölünür. Bunun ikinci ve daha önemli faydası esnekliktir: hasat tarihi kaydığında tek adrese kurulmuş katı bir program dağılır, hattın parçası olan işletmeler ise kayan tarihe birlikte uyum sağlar. Her işletme kendi teklifini, kendi tutanağını ve kendi teslim kaydını alır; aranızda hiçbir hukuki bağ kurulmaz. Ortak olan yalnızca ilçeye giriş-çıkış kalemidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sultandağı’nın kiraz üretimi ve bahçecilikle anılması kamuya açık genel bilgidir; hazırlık turu mantığı, sezon içi müdahale sınırı ve erişim yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:konya-osb-cevre-ili": {
        h1: "Konya Hattında Gıda Sanayii İçin Manlift Kiralama",
        giris:
            "Afyonkarahisar ile Konya arasındaki hat, bizim için bir il sınırı değil, aynı sanayi ailesinin iki ucudur: her iki ilde de tarımsal hammaddeyi işleyen tesisler yoğundur ve Konya, un, bulgur, makarna, bisküvi ve şekerleme üretimiyle ülke genelinde bilinen bir gıda sanayii merkezidir. Afyon tarafındaki tesislerle aynı prosesleri, aynı hijyen kurallarını ve aynı kampanya mantığını paylaşan bu tesisler, bizim için tanıdık bir çalışma ortamıdır. İl dışı sevkiyatı ayıran şey teknik değil lojistiktir: mesafe, makinenin gidiş-geliş süresini kiralamanın içine sokar ve bu, tek günlük işleri ekonomik olmaktan çıkarır. Bu yüzden Konya hattına yaptığımız her çıkışı program olarak kurarız — makine bölgeye indirildiğinde birden fazla adresi kapatacak bir liste hazırdır, gün planı önceden yazılmıştır ve dönüş tarihi bellidir. Bu sayfada, il dışı bir talebin nasıl planlandığını ve gıda sanayii tesislerinde hangi kuralların geçerli olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Değirmen ve öğütme tesislerinde kat yapısı",
                metin:
                    "Un ve irmik üreten tesisler, yatay bir hol değil çok katlı bir yapı kurar: hammadde temizleme, tavlama, öğütme ve eleme kademeleri üst üste yerleşir ve ürün kat aralarında dikey olarak taşınır. Yüksekteki iş kalemleri bu kademeler arasındaki aktarma boruları, elevatör gövdeleri, aspirasyon kanalları ve kat aralarındaki aydınlatmadır. Kat yüksekliklerinin sınırlı olması, makine seçiminde yükseklikten çok gövde ölçüsünü belirleyici kılar; buraya kompakt sınıflar gider.",
            },
            {
                baslik: "Bisküvi ve şekerleme hatlarında fırın üstü",
                metin:
                    "Fırınlı üretim yapan tesislerde en zorlu bölge, tünel fırının üstü ve çevresidir: baca hattı, ısı tahliye kanalları, üst konveyör askıları ve fırın üstü aydınlatma buradadır. Sıcaklık, çalışma süresini kısaltan gerçek bir kısıttır ve fırın soğumadan bu bölgede iş yapılmaz. Uygulamada işi fırının planlı soğuma penceresine yazarız; bu pencere kısa olduğunda liste parçalara bölünür ve birden fazla duruşa yayılır. Sıcak yüzeye yakın çalışmada tesisin kendi izin prosedürü geçerlidir.",
            },
            {
                baslik: "Bulgur ve bakliyat tesislerinde toz ve elek hattı",
                metin:
                    "Kuru ürün işleyen tesislerde havada asılı kalan ince toz, hem sağlık hem tutuşma açısından yönetilmesi gereken bir ortam üretir. Elek kademelerinin askıları, aspirasyon ağızları, filtre üniteleri ve taşıma helezonlarının bağlantı noktaları bu ortamın içinde kalır. Bu hacimlerde kıvılcım çıkaran hiçbir işlem yapılmaz ve çalışma öncesinde aspirasyonun devrede olduğu, üst yüzeylerdeki birikmiş tozun temizlendiği teyit edilir. Ekipman uygunluğu tesisin risk değerlendirmesiyle birlikte ele alınır.",
            },
            {
                baslik: "Mamul depolarında raf üstü ve koridor geometrisi",
                metin:
                    "Gıda sanayiinin mamul depoları, paletlenmiş ürünün yüksek kotlara istiflendiği hacimlerdir ve buradaki iş raf üstü aydınlatma, yangın algılama, sprinkler hattı ve çatı altı havalandırmasıdır. Belirleyici kısıt yükseklik değil geometridir: makinenin ilerleyeceği koridorun boş olması ve sepetin istif yığınına güvenli mesafede kalması gerekir. Bu yüzden depo işleri, bölümün geçici olarak boşaldığı pencerelere göre parçalanır ve sıralama depo yönetimiyle birlikte kurulur.",
            },
            {
                baslik: "İl dışı sevkiyatın program mantığı",
                metin:
                    "Mesafe, il dışı bir işin fiyatını belirleyen tek kalemdir ve bu kalem gün sayısına bölünür. Tek günlük bir iş için yapılan çıkışta nakliye payı tek işin üstünde kaldığı için maliyet yükselir; aynı çıkışta üç adres kapatıldığında ise pay üçe bölünür. Bu yüzden Konya hattına yapılan çıkışları program olarak kurarız: adresler haritada sıralanır, gün planı önceden yazılır ve dönüş tarihi belirlenir. Hatta katılmak isteyen işletmeye o hafta için kurulmuş plan olduğunu talep sırasında söyleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda sanayii tesis tipleri ve çalışma koşulları",
                paragraflar: [
                    "Hat üzerinde çalıştığımız tesis tipleri birbirinden farklı koşullar dayatır. Aşağıdaki tablo, her tipte baskın iş kalemini, belirleyici koşulu ve uygun çalışma penceresini toplar.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Baskın iş kalemi", "Belirleyici koşul", "Çalışma penceresi"],
                    satirlar: [
                        ["Değirmen / öğütme", "Aktarma borusu, elevatör", "Dar kat yüksekliği", "Planlı duruş"],
                        ["Fırınlı üretim", "Baca, ısı kanalı, konveyör", "Sıcaklık", "Fırın soğuma penceresi"],
                        ["Bulgur / bakliyat", "Elek askısı, aspirasyon", "Organik toz yükü", "Temizlik duruşu"],
                        ["Paketleme hattı", "Armatür, sensör, menfez", "Açık ürün üstü", "Hat duruşu"],
                        ["Mamul deposu", "Raf üstü, dedektör", "Koridor geometrisi", "Bölüm boşaldığında"],
                        ["Dış saha ve rampa", "Sundurma, oluk, aydınlatma", "Araç trafiği", "Sevkiyat dışı saat"],
                    ],
                },
            },
            {
                baslik: "İl dışı çıkışta gün planının kurulması",
                paragraflar: [
                    "Bir il dışı programın kalitesi, sahada değil planlama masasında belirlenir. Çıkış öncesinde üç şeyi netleştiririz: adres sırası, her adreste geçirilecek gün sayısı ve geçiş süreleri. Bu üçlü yazıldığında dönüş tarihi de netleşir ve hiçbir işletme, başka bir adresteki iş uzadı diye gününü kaybetmez. Süre aşımı olursa program bir gün uzar ve bu, gecikmeye neden olan tarafla konuşulur.",
                    "İkinci konu makinenin geceleri nerede kalacağıdır. Uzun bir programda ünitenin her akşam geri getirilmesi mümkün değildir; bu yüzden hat üzerindeki bir tesiste düz, sert ve korunaklı bir park alanı belirlenir ve akülü ünite kalacaksa şarj için erişilebilir bir enerji hattı istenir. Bu iki düzenleme sağlandığında program kesintisiz ilerler; sağlanamadığında ise gün sayısı, iş yüzünden değil lojistik yüzünden uzar.",
                ],
            },
            {
                baslik: "İki il arasında ortak çalışma disiplini",
                paragraflar: [
                    "Afyon ve Konya tarafındaki gıda tesisleri, aynı hijyen ve gıda güvenliği çerçevesine tabidir; bu, bizim için sahadan sahaya değişmeyen tek bir çalışma disiplini anlamına gelir. Üretim hacmine giren ünite sevkiyat öncesinde temizlenir, girişte tekerlek yüzeyleri silinir, sepet altına toplama tablası konur ve el aletleri bağlanır. Kapalı hacimde egzoz üretmeyen sınıflar tercih edilir. Bu düzeni işletme talep etmeden uygularız.",
                    "İş sonunda da aynı standart geçerlidir: kullanılan el aletleri sayılarak toplanır, çalışılan alan sizin kendi temizlik prosedürünüze göre teslim edilir ve uygulanan önlemler tutanağa yazılır. Bu belge, denetim anında kayıt sisteminize eklenebilecek bir dayanaktır. İl sınırının hangi tarafında olduğunuz bu adımların hiçbirini değiştirmez; değişen tek şey, sahaya ulaşmanın planlama biçimidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Afyon dışındayız; il dışına makine gönderiyor musunuz?",
                cevap:
                    "Gönderiyoruz ve Konya hattı düzenli çalıştığımız güzergâhlardan biridir. Tek farkı planlama biçimidir: mesafe, makinenin gidiş-geliş süresini kiralamanın içine soktuğu için il dışı çıkışları program olarak kurarız. Pratikte bu, çıkış öncesinde adres sırasının, her adreste geçirilecek gün sayısının ve dönüş tarihinin yazılması demektir. Talep ettiğinizde o hafta için kurulmuş bir hat varsa size söyleriz; hatta katıldığınızda nakliye payı adresler arasında bölünür ve birim maliyet belirgin biçimde düşer.",
            },
            {
                soru: "Tek günlük küçük bir işimiz var; il dışına gelmeniz mantıklı mı?",
                cevap:
                    "Tek başına genellikle değil ve bunu açıkça söyleriz. Nakliye, kiralama süresinden bağımsız sabit bir kalemdir; tek günlük bir işte bu kalemin tamamı sizin üstünüzde kalır ve iş, kendi değerinin çok üstünde bir maliyete çıkar. İki alternatif öneririz. Birincisi, o hafta hat üzerinde kurulmuş bir programa katılmak — bu durumda pay bölünür. İkincisi, birikmiş küçük işleri tek bir listeye toplayıp tek çıkışta kapatmak. Aciliyet varsa elbette geliriz, ama maliyet farkını teklifte açıkça göstermeyi tercih ederiz.",
            },
            {
                soru: "Fırın hattımızın üstünde iş var; fırını soğutmak zorunda mıyız?",
                cevap:
                    "Fırın üstü ve çevresindeki kalemler için evet. Sıcaklık, hem sepetteki kişi hem ekipman açısından gerçek bir kısıttır ve süreyi kısaltmakla çözülmez. Uygulamada işi fırının planlı soğuma penceresine yazarız; bu pencere kısa olduğunda listeyi parçalara böler ve birden fazla duruşa yayarız. Sıcak yüzeye yakın çalışmada tesisin kendi izin prosedürü geçerlidir ve biz o prosedüre uyarız. Fırından uzaktaki kalemler — hol aydınlatması, depo tarafı, dış saha — bu kısıtın dışındadır ve aynı sevkiyat içinde normal seyrinde ilerler.",
            },
            {
                soru: "Değirmenimizin katları alçak; makine bu hacimlere sığar mı?",
                cevap:
                    "Sığması için sınıfın yükseklikten değil gövde ölçüsünden seçilmesi gerekir ve bu, çok katlı öğütme tesislerinde en sık yaptığımız düzeltmedir. Bize gereken üç ölçü var: kat yüksekliği, makinenin geçeceği en dar açıklığın eni ve yüksekliği, bir de asansör ya da yük kapısı kullanılacaksa taşıma kapasitesi. Bu ölçülerle kompakt bir akülü sınıf çoğu kat arasında rahat çalışır. Kat aralarında makine taşınamıyorsa iş, her kat için ayrı ünite yerine, kat bazlı program hâlinde kurgulanır; bunu keşifte netleştiririz.",
            },
            {
                soru: "Toz yoğun bölümlerimizde çalışma kurallarınız nedir?",
                cevap:
                    "Kuru ürün işleyen hacimlerde havada asılı ince organik toz, tutuşma riski taşıyan bir ortam üretir; bu yüzden kural setimiz farklıdır. Kıvılcım çıkaran hiçbir işlem — taşlama, kesme, kaynak — bu bölümlerde yapılmaz; böyle bir kalem varsa listeden ayrılır ve başka bir yönteme yazılır. Çalışma öncesinde aspirasyonun devrede olduğunu ve üst yüzeylerdeki birikmiş tozun temizlendiğini teyit ederiz. Ekipmanın ortama uygunluğu, tesisin kendi risk değerlendirmesiyle birlikte ele alınır; bu değerlendirmeyi görmeden bu bölümlere ünite indirmeyiz.",
            },
            {
                soru: "Program birkaç gün sürecek; makine geceleri nerede kalır?",
                cevap:
                    "Hat üzerindeki bir tesiste, önceden belirlenmiş bir park alanında kalır — uzun bir programda üniteyi her akşam geri getirmek ne mümkün ne ekonomiktir. Park alanının düz, sert ve tesis içinde korunaklı olması gerekir; akülü ünite kalacaksa gece şarjı için erişilebilir bir enerji hattı isteriz. Kalış süresince makinenin muhafazası, park alanını sağlayan işletmeye ait olur ve bu, sözleşmede açıkça yazılır. Teslim ve iade anında mevcut durum fotoğrafla kayıt altına alınır; böylece program sonunda hiçbir kalem tartışma konusu olmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Konya’nın un, bulgur, makarna ve bisküvi-şekerleme üretimiyle anılan bir gıda sanayii merkezi olması kamuya açık genel bilgidir; il dışı program kurgusu, park-şarj düzeni ve toz-sıcaklık kuralları firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
    "bolge:emirdag-osb": {
        h1: "Emirdağ OSB’de Tarım Makinesi ve Gıda Tesisleri İçin Manlift Kiralama",
        giris:
            "Emirdağ OSB’de yüksekte çalışma planı, aynı sahada iki farklı üretim düzenini birlikte okumayı gerektirir: metal işleyen tarım makinesi imalatı ile hammaddenin temiz ve kontrollü akışını isteyen gıda ve yem üretimi. Bir tarafta vinç yolları, kaynak dumanı emiş kanalları, boya hattı çevresi ve büyük parçaların dolaştığı montaj holleri; diğer tarafta elevatörler, kapalı taşıma hatları, silo bağlantıları, aspirasyon sistemi ve paketleme bölümleri bulunur. Aynı manlifti yalnız erişim yüksekliğine bakarak iki hacme de göndermek doğru olmaz. Gövde ölçüsü, enerji türü, yük trafiği, üretim duruşu ve temizlik kabulü birlikte değerlendirilir. Emirdağ ilçe sayfasındaki kırsal lojistikten farklı olarak burada OSB parselindeki izin, izolasyon ve vardiya koordinasyonu ele alınır; esas mesele imalat holü ile gıda hacminin ayrılan kurallarını tek programda yönetmektir.",
        maddeler: [
            {
                baslik: "Tarım makinesi imalatında vinç yolu ve üst tesisat",
                metin:
                    "Tarım makinesi üreten hollerde yüksek kot; köprülü vinç rayı, elektrik besleme hattı, aydınlatma, duman emiş kanalı ve çatı taşıyıcılarının çevresinde yoğunlaşır. Sepet yükselmeden önce manlift alanı ile tavandaki hareketli ekipmanın bölgesi kapatılır. Vinç kumandası yetkili kişide tutulur, hareket alanı izole edilir ve yarı mamul parçalar güvenli geçiş bırakacak biçimde düzenlenir. Uzun şasi ve geniş aparatların bulunduğu holde dar dönüşlü akülü eklemli sınıf çoğu zaman yükseklikten daha önemli bir ölçüttür. İş bölümlere ayrılır; kapanan koridor tamamlanınca bariyer sonraki bölüme taşınır.",
            },
            {
                baslik: "Kaynak, boya ve yüzey hazırlama alanlarında ayrım",
                metin:
                    "Metal imalatında her üst kot işi aynı izinle yürütülemez. Kaynak dumanı emiş hattının mekanik kontrolü ile sıcak çalışma gerektiren bir kanal onarımı farklı riskler taşır; boya veya solvent kullanılan bölüme kıvılcım üreten işlem sokulmaz. Talep listesini bu nedenle önce soğuk bakım, elektrik işi ve sıcak çalışma olarak ayırırız. Manliftin kendisi çalışma ekipmanı değil erişim aracıdır; sepette yapılacak işin izni ayrıca açılır. Boya hattı çevresinde ortamın havalandırıldığı, kapların kapalı olduğu ve tesisin kendi güvenli giriş koşullarının sağlandığı teyit edilmeden çalışma başlamaz. Bu ayrım makinenin sahada gereksiz beklemesini önler ve farklı ekiplerin birbirinin izin penceresini tüketmesini engeller.",
            },
            {
                baslik: "Gıda ve yem hacimlerinde ürün koruma düzeni",
                metin:
                    "Gıda veya yemle ilişkili kapalı hacimlerde erişim kadar yabancı madde kontrolü önemlidir. Üretim üstünde serbest el aleti bırakılmaz; aletler bağlanır, küçük parçalar kapalı kutuda tutulur ve sepet altında tesis prosedürüne uygun toplama düzeni kurulur. Makinenin tekerlekleri girişten önce temizlenir, sızıntı kontrolü yapılır ve egzoz üretmeyen sınıf tercih edilir. Açık ürün bulunan hatta planlı bakım yürütmeyiz; ilgili bölüm boşaltılır, üretimle fiziksel olarak ayrılır ve temizlik ekibinin kabul edebileceği bir teslim penceresi oluşturulur. İş sonunda parça ve alet sayımı yapılır, güzergâh gözden geçirilir, alan işletmenin temizlik prosedürüne hazır biçimde bırakılır ve kayıt saha sorumlusuyla kapatılır.",
            },
            {
                baslik: "Silo, elevatör ve aspirasyon hattında enerji izolasyonu",
                metin:
                    "Hammadde kabulünden üretime uzanan kapalı taşıma düzeninde elevatör, helezon, fan ve döner ekipman uzaktan devreye girebilir. Durgun görünmesi güvenli olduğu anlamına gelmez. Çalışılacak ekipman tanımlanır, besleme kaynakları tesis prosedürüne göre kesilip kilitlenir ve yeniden başlatma yetkisi iş bitimine kadar sınırlandırılır. Manlift, silo veya konstrüksiyonun olası düşme alanına değil, taşıma gücü doğrulanmış yan zemine kurulur; hedefe bom erişimiyle ulaşılır. Toz birikimi görülürse önce temizlik ve tesis risk değerlendirmesi istenir. Taşlama, kesme veya kıvılcım çıkarabilecek iş, uygunluğu açıkça doğrulanmadan bu hacimde programlanmaz; erişim sağlanması sıcak çalışma izninin yerine geçmez.",
            },
            {
                baslik: "İki üretim tipini tek bakım turunda sıraya koymak",
                metin:
                    "OSB’ye yapılan sevkiyatın verimi, bütün kalemleri aynı anda açmaktan değil doğru sıraya koymaktan gelir. İlk keşifte kapı ölçüleri, çalışma kotları, zemin, üretim vardiyası ve tesis içi geçişler kayda alınır. Temiz hacme girecek makine önce gıda bölümünü tamamlar; metal talaşı, boya kalıntısı veya dış saha kiri taşıdıktan sonra aynı üniteyi yeniden temiz alana sokmayız. Ardından imalat holü ve dış saha kalemleri kapanır. Hava koşuluna bağlı çatı işleriyle kapalı hacim işleri aynı programa yazılır; rüzgâr dış işi durdurursa ekip iç bölüme geçer. Böylece kiralama günü izin ya da hava beklemekle tüketilmez ve işletme hangi vardiyada hangi alanın kapanacağını önceden bilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Emirdağ OSB’de iş alanı ve ekipman eşleşmesi",
                paragraflar: [
                    "Seçimi yalnız azami çalışma yüksekliğiyle yapmak, OSB içindeki farklı hacimleri gözden kaçırır. Aşağıdaki eşleşme, keşifte hangi kısıtın önce ölçüleceğini gösterir; nihai sınıf, üretici sınırları ve saha değerlendirmesiyle belirlenir.",
                ],
                tablo: {
                    basliklar: ["Çalışma alanı", "Tipik iş", "Öncelikli kontrol", "Uygun yaklaşım"],
                    satirlar: [
                        ["Tarım makinesi montaj holü", "Vinç yolu, aydınlatma, emiş kanalı", "Hareketli yük ve koridor", "Dar dönüşlü akülü eklemli"],
                        ["Kaynak bölümü", "Duman emiş hattı ve askılar", "Enerji ve sıcak çalışma ayrımı", "İzinli pencerede akülü"],
                        ["Gıda üretim hacmi", "Üst tesisat ve armatür", "Ürün koruma ve temizlik", "İç saha akülü sınıf"],
                        ["Silo ve elevatör çevresi", "Kapak, sensör, bağlantı", "İzolasyon ve güvenli konum", "Uzanmalı bomlu"],
                        ["Paketleme ve depo", "Hat üstü, raf, aydınlatma", "Açık ürün ve trafik", "Kompakt makaslı"],
                        ["Çatı ve dış saha", "Oluk, kaplama, kanal", "Zemin ve rüzgâr", "Arazi uyumlu bomlu"],
                    ],
                },
            },
            {
                baslik: "Keşiften vardiya teslimine kadar iş akışı",
                paragraflar: [
                    "Hazırlık görüşmesinde iş listesi tesis bölümlerine ayrılır; her bölüm için hedef kot, yatay engel, kapı-koridor ölçüsü, zemin ve üretimin durabileceği pencere yazılır. Fotoğraf tek başına ölçek vermediği için kritik açıklıklar ayrıca ölçülür. Ardından tesisin izin sorumlusu, bakım ekibi ve manlift planlayıcısı aynı sıra üzerinde anlaşır. Bu sıra, sahaya gelen ünitenin ilk gün başka sınıfla değiştirilmesini veya bir izin açılana kadar boşta kalmasını önler.",
                    "Vardiya değişiminde açık hedef bırakılmaz. Bariyer kaldırılmadan alet sayımı, görsel kontrol ve saha sorumlusu kabulü yapılır; yarım nokta enerji ve erişim durumuyla yazılı devredilir. Gıda bölümünde temizlik kabulü tamamlanmadan üretim alanı açılmaz.",
                ],
            },
            {
                baslik: "Teklif öncesi hazırlanması gereken saha paketi",
                paragraflar: [
                    "Sağlıklı teklif için yalnız yükseklik bilgisi yetmez. Hedeflerin işaretlendiği basit bir yerleşim krokisi, en dar kapı ve koridor ölçüleri, zeminin cinsi, vardiya planı, iç-dış saha ayrımı ve sepette yapılacak işin niteliği paylaşılmalıdır. Silo veya çatı hedefinde yatay erişim mesafesi de eklenir. Gıda alanı varsa işletmenin giriş-temizlik kuralı; kaynak, boya veya döner ekipman alanı varsa ilgili izin ve izolasyon yöntemi baştan bildirilir.",
                    "Bu paketle tek sınıfın bütün listeyi kapatıp kapatamayacağını kontrol ederiz. İki sınıf gerekiyorsa bunu teklif aşamasında söyler, günleri temiz hacimden kirli hacme sıralarız. Nakliye, operatör tercihi, şarj veya yakıt düzeni ve hava bağımlı kalemler program notunda görünür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tarım makinesi montaj holünde üretim sürerken çalışabilir misiniz?",
                cevap:
                    "Tesisin tamamının durması gerekmez; fakat manliftin bulunduğu koridor ile tavandaki vinç veya hareketli yük bölgesi çalışma boyunca kapatılmalıdır. Önce zemindeki parça akışı başka güzergâha alınır, ardından ilgili vinç hareketi ve üst ekipman tesis prosedürüne göre izole edilir. Bariyerin sınırı, bomun dönüş alanını ve düşebilecek parça ihtimalini de kapsar. Montaj ekibi komşu bölümde çalışabilir; aynı koridordan yük geçirmek veya sepet altından personel yürütmek kabul edilmez. Vardiya planı önceden verilirse bölümleri sırayla kapatır, üretimin bütünü yerine yalnız çalışılan hücreyi etkileriz.",
            },
            {
                soru: "Aynı manlift gıda bölümüyle kaynak holünde kullanılabilir mi?",
                cevap:
                    "Teknik ölçüler uygunsa kullanılabilir, ancak sıra ve temizlik koşulu baştan kurulmalıdır. Ünite önce temiz kabul edilen gıda hacmine girer; tekerlek ve gövde kontrolü yapılır, sızıntı bulunmadığı doğrulanır, aletler bağlanır ve ürün koruma düzeni uygulanır. Bu bölüm teslim edilip işletmenin temizlik kabulü kapandıktan sonra makine metal imalat alanına geçer. Kaynak dumanı, talaş veya boya çevresinde çalışmış bir üniteyi aynı programda tekrar temiz hacme döndürmeyiz. İş sırası ters olmak zorundaysa ikinci bir ünite ya da işletmenin onayladığı ayrıntılı yeniden temizlik planı gerekir.",
            },
            {
                soru: "Silo veya elevatör bakımında sistemi yalnız kumandadan durdurmak yeterli mi?",
                cevap:
                    "Hayır. Kumandadaki durdurma komutu, ekipmanın başka bir panelden ya da otomasyon tarafından yeniden başlatılmasını fiziksel olarak engellemez. Çalışılacak hat açıkça tanımlanır; elektriksel, mekanik veya pnömatik beslemeler tesisin enerji izolasyonu prosedürüne göre kesilir ve yetkisiz açmayı engelleyecek biçimde kilitlenir. Saha sorumlusu bu durumu doğrulamadan sepet yükselmez. İş bitince alet ve parça sayımı yapılır, koruyucular yerine takılır, personel tehlike alanından çıkar ve kilit kaldırma süreci yine tesis yetkilisiyle yürütülür. Manlift operatörü üretim ekipmanının yeniden devreye alınmasına tek başına karar vermez.",
            },
            {
                soru: "Boya kullanılan bölümde manliftle bakım yapılabilir mi?",
                cevap:
                    "Yapılabilir olup olmadığına işin türü ve tesisin risk değerlendirmesi birlikte karar verir. Boya veya solvent kullanılan bir hacme, ortam koşulları ve ekipman uygunluğu teyit edilmeden standart bir ünite sokmayız. Önce uygulama durdurulur, kaplar kapatılır, havalandırma ve ölçüm gereklilikleri işletme tarafından yerine getirilir. Sepette yapılacak işlem kıvılcım veya sıcak yüzey üretiyorsa ayrı sıcak çalışma izni gerekir; yalnızca bir bağlantıyı gözle kontrol etmekle taşlama yapmak aynı program maddesi değildir. Koşullar uygun değilse işi planlı duruşa taşır veya erişimi farklı bir yöntemle çözeriz.",
            },
            {
                soru: "Çatı işi rüzgâr nedeniyle durursa kiralama günü boşa mı gider?",
                cevap:
                    "Program doğru kurulmuşsa boşa gitmez. Dış saha kalemlerinin yanına aynı makinenin yapabileceği hol işleri yazılır. Rüzgâr üretici sınırına yaklaştığında çatı işi durdurulur; ekip izinleri hazır bölüme geçer. Hava sakinleştiğinde dış kaleme dönülür. Bunun için iki bölümün iş emri, erişim koridoru ve enerji izolasyonu önceden hazırlanmalıdır. Tek çatı işi çağrısında hava kaynaklı beklemenin nasıl ele alınacağı teklifte açıkça yazılır; sonradan ücret kalemi bırakılmaz.",
            },
            {
                soru: "Teklif alırken hangi ölçü ve belgeleri göndermeliyiz?",
                cevap:
                    "Her hedef için zeminden çalışma kotunu, makinenin duracağı yerle hedef arasındaki yatay mesafeyi ve güzergâhtaki en dar kapı-koridor ölçüsünü isteriz. Zeminin beton, dolgu veya açık saha olup olmadığı; rampalar, drenaj kanalları ve üst engeller fotoğrafla gösterilmelidir. Buna vardiya planı, yapılacak işin elektrik-mekanik-sıcak çalışma sınıfı ve üretimin hangi bölümde durabileceği eklenir. Gıda hacmi için giriş ve temizlik prosedürü, hareketli ekipman için izolasyon kuralı paylaşılır. Bu bilgilerle sınıfı ve iş sırasını tek turda belirler, sahada uygun olmayan makineyi değiştirme riskini azaltırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Emirdağ çevresinin tarım ve hayvancılık ekonomisiyle ilişkisi ile OSB’lerde tarım makinesi ve gıda üretimine uygun tesis tiplerinin bulunması kamuya açık genel sektörel çerçevedir; vardiya, izolasyon, temizlik ve makine eşleştirme düzeni firma saha pratiğidir. Tesis adı, kapasite ve üretim rakamı kullanılmamıştır.",
    },

    "bolge:ihsaniye": {
        h1: "İhsaniye’de Tarımsal Yapılar ve Depo İşleri İçin Manlift Kiralama",
        giris:
            "İhsaniye’de yüksekte çalışma talebi büyük bir kampüsten çok, merkeze ve kırsal yerleşimlere dağılmış tarımsal yapılardan gelir. Tahıl veya yem deposu, makine sundurması, hayvan barınağı, ürün kabul saçağı ve küçük işleme hacmi aynı bakım listesinde bulunabilir; her birinin zemini, hijyen koşulu ve erişimi farklıdır. Kardeş domaindeki İhsaniye sayfası küçük imalathane ile ticari bina taleplerini anlatır. Burada odağı tarımsal yapının dönemsel kullanımına çeviriyoruz: ürün içerideyken depo boş değildir, yağıştan sonra avlu taşıma gücünü kaybedebilir, barınakta günlük akış kesilemez. Doğru makine kadar doğru gün de önemlidir. Plan doluluk takvimi ve günlük akış üzerinden kurulur; sert zemin ve ayrılmış çalışma bölgesi doğrulanmadan sepet yükselmez.",
        maddeler: [
            {
                baslik: "Tahıl ve yem depolarında boş hacim penceresi",
                metin:
                    "Depo çatısındaki sac, mahya havalandırması, oluk, kuş engeli ve iç aydınlatma bakımı ürün içerideyken gereksiz risk üretir. Yığın yüzeyi taşıyıcı zemin değildir; makine veya destek ayağı ürün üstüne konulamaz. Üstten düşebilecek küçük bir bağlantı parçası bile partinin kontrolünü zorlaştırır. Planlı işleri ürün çıkışı ile yeni kabul arasındaki boş pencereye yazarız. Acil bir sızıntı varsa önce ürünün etkilenecek bölgeden uzaklaştırılması ve çalışma alanının fiziksel olarak ayrılması istenir. İş sonunda alet-parça sayımı yapılır, çatı açıklıkları kapatılır ve depo yeniden kullanıma verilmeden işletme sorumlusuyla görsel teslim tamamlanır.",
            },
            {
                baslik: "Makine sundurması ve bakım avlusunda üst kot işleri",
                metin:
                    "Tarımsal ekipmanın park edildiği sundurmalarda çatı aydınlatması, taşıyıcı bağlantı, oluk ve kapı mekanizması sık bakım kalemleridir. Sorun çoğu zaman yükseklik değil, zemindeki traktör, aparat ve sökülmüş parçalardır. Çalışma öncesinde tek bir sert geçiş koridoru boşaltılır; manliftin dönüş alanı ve sepet altındaki düşme bölgesi bariyerle ayrılır. Sundurma dışındaki sıkıştırılmış toprak, kuru görünse bile altındaki dolgu veya drenaj hendeği nedeniyle aynı taşıma gücüne sahip olmayabilir. Operatör zemini yürüyerek kontrol eder, şüpheli bölümde ünite yükseltilmez. Kısa erişim için gereğinden ağır sınıf göndermek yerine zemine ve kapı açıklığına uygun kompakt ünite seçilir.",
            },
            {
                baslik: "Hayvan barınaklarında fan, perde ve aydınlatma",
                metin:
                    "Ahır ve barınaklarda üst kot bakımının ana başlıkları çatı fanları, yan perde makaraları, sulama-yem hattı askıları ve aydınlatmadır. Nem, toz ve ortam gazları metal bağlantıları yıpratabilir; tek arıza çağrısı yerine düzenli bir görsel kontrol turu daha verimli olur. Çalışılan şerit hayvanlardan ayrılır, zemin temizlenir ve kaygan altlık kaldırılır. Fan veya motor üzerinde işlem varsa enerji kesilip yeniden çalıştırmayı önleyecek biçimde kontrol altına alınır. Egzozlu ekipman kapalı hacimde tercih edilmez; sessiz ve emisyonsuz akülü sınıf, günlük işletme akışını daha az bozar. İş mümkünse yemleme ve hayvan hareketinin düşük olduğu pencereye yerleştirilir.",
            },
            {
                baslik: "Küçük işleme ve ürün kabul alanlarında temiz çalışma",
                metin:
                    "Ürünün tartıldığı, ayrıldığı, paketlendiği veya kısa süre bekletildiği hacimlerde üst tesisat bakımının ürün akışından ayrılması gerekir. Açık ürünün üzerinde çalışmayız; bölüm boşaltılır, komşu hatla fiziksel sınır kurulur ve el aletleri sepete bağlanır. Makine girişinde tekerlek ve sızıntı kontrolü yapılır. Ürün kabul saçaklarında ise aynı anda kamyon, traktör ve yaya hareketi olabilir; sevkiyat penceresi kapatılmadan bomu araç yoluna uzatmayız. İç hacim ile kabul avlusunu aynı güne yazmak mümkündür, ancak temiz bölüm önce tamamlanır. Dış sahada kirlenen üniteyi hazırlıksız biçimde yeniden ürün alanına döndürmeyiz.",
            },
            {
                baslik: "Dağınık adreslerde hat ve hava planı",
                metin:
                    "İhsaniye’de birden fazla küçük kalemin ayrı ayrı sevk edilmesi, iş süresinden çok taşıma süresini büyütür. Bakım listesini aynı işletmenin depo, sundurma ve barınak hedefleriyle birleştirmek ilk çözümdür; tarihler uygunsa yakın adresler de tek ilçe turuna alınabilir. Bunun için her adresin giriş açıklığı, son yaklaşım yolu ve indirme alanı önceden görülmelidir. Yağıştan sonra kırsal avlu ve stabilize yol için yeniden teyit isteriz; bir gün önce uygun görünen zemin ertesi gün aynı durumda olmayabilir. Hava bağımlı çatı kalemleriyle kapalı hacim işleri birlikte sıralanır, böylece rüzgâr veya yağış dış işi ertelediğinde ekip içerideki bakım turuna geçebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarımsal yapı, risk ve erişim eşleşmesi",
                paragraflar: [
                    "İlçedeki yapılar benzer yükseklikte görünse de doğru erişim yaklaşımını belirleyen koşul farklıdır. Tablo, teklif öncesinde hangi bilginin öncelikli toplanacağını özetler.",
                ],
                tablo: {
                    basliklar: ["Yapı / alan", "Bakım kalemi", "Temel kısıt", "Erişim yaklaşımı"],
                    satirlar: [
                        ["Tahıl veya yem deposu", "Çatı, mahya, aydınlatma", "Doluluk ve yabancı madde", "Boş dönemde arazi uyumlu"],
                        ["Makine sundurması", "Oluk, taşıyıcı, kapı", "Parklı ekipman ve dar koridor", "Kompakt eklemli"],
                        ["Hayvan barınağı", "Fan, perde, askı", "Günlük akış ve kaygan zemin", "Akülü iç saha sınıfı"],
                        ["Ürün işleme hacmi", "Üst tesisat, armatür", "Açık ürün ve temizlik", "Temizlenmiş akülü makaslı"],
                        ["Kabul saçağı", "Aydınlatma, kaplama, oluk", "Araç trafiği", "Bariyerli bomlu çalışma"],
                        ["Kırsal avlu", "Cephe ve dış çatı", "Taşıma gücü ve hava", "Zemine uygun geniş tabanlı"],
                    ],
                },
            },
            {
                baslik: "Doluluk takviminden bakım penceresi üretmek",
                paragraflar: [
                    "Depo yöneticisinden yalnız boşalma tarihini istemek yeterli değildir. Son ürün çıktıktan sonra temizlik için ayrılan zaman, çatı açıklığının hava koşuluna göre güvenle açılabileceği dönem ve yeni kabulün başlayacağı gün birlikte görülmelidir. Liste; içeriden yapılacak elektrik-mekanik işler, dışarıdan yapılacak kaplama-oluk işleri ve yalnız boş hacimde yürütülebilecek kalemler olarak ayrılır. Böylece hava dış işi durdursa bile iç hazırlık ilerler ve kısa boşluk tek bir arıza yüzünden tamamen kaybedilmez.",
                    "Barınak ve küçük işleme hacminde mevsimsel boşalma yerine yemleme, temizlik, ürün kabulü veya sevkiyat aralıkları kullanılır. Vardiya sonunda tamamlanan nokta teslim edilir; açık bağlantı, sökülmüş koruyucu veya açık çatı bölümü bırakılmaz. Sonraki pencereye kalan iş yazılı devredilir.",
                ],
            },
            {
                baslik: "Kırsal erişim için fotoğraf ve ölçü kontrolü",
                paragraflar: [
                    "Tekliften önce adresin son yaklaşımını gösteren fotoğraflar, giriş kapısının eni-yüksekliği, sert indirme alanı ve makinenin hedefe kadar izleyeceği güzergâh gerekir. Yalnız hedef yapının fotoğrafı yeterli değildir; lowbed veya taşıyıcı aracın döneceği yer de görülmelidir. Üstten geçen kablo, dar menfez, yol kenarı hendeği, avludaki kapalı çukur ve eğim ayrıca işaretlenir. Hedefin zeminden kotuyla makine konumu arasındaki yatay mesafe de sınıf seçimini doğrudan etkiler.",
                    "Saha günü bilgi yeniden kontrol edilir. Yağış, sulama, ürün yığını veya park edilmiş ekipman güzergâhı değiştirmişse eski plana dayanarak yükselmez. Sert zemin daha uzaktaysa erişim yeniden hesaplanır; yetmiyorsa iş ertelenir veya başka sınıf planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuz doluyken çatı sızıntısına müdahale edebilir misiniz?",
                cevap:
                    "Önceliğimiz ürünü ve çalışanları risk alanından çıkarmaktır. Yığın üstüne makine koymayız ve açık ürün üzerinde planlı bakım yürütmeyiz. Acil sızıntıda ürün, düşebilecek parça veya suyun etkileyebileceği bölümden uzaklaştırılır; mümkünse dışarıdan güvenli bir sert zemine konumlanıp yalnız geçici kapatma yapılır. Kalıcı sac, mahya veya iç aydınlatma işi depo boşaldığında programa alınır. İş bitiminde kullanılan küçük parçalar ve aletler sayılır, açıklık güvenli biçimde kapatılır ve alan işletme sorumlusuna görsel kontrolle teslim edilir. Ürün korunamıyorsa çalışma ertelenir; aciliyet, yabancı madde riskini kabul etme gerekçesi değildir.",
            },
            {
                soru: "Toprak avlu kuru görünüyor; arazi tipi manlift için yeterli midir?",
                cevap:
                    "Kuru görünüm tek başına taşıma gücünü kanıtlamaz. Dolgu kalınlığı, yakın zamandaki yağış veya sulama, yüzey altındaki drenaj hattı ve eski çukurlar yük altında farklı davranabilir. Sevkiyattan önce güzergâh ve indirme alanı fotoğraflanır; saha günü operatör zemini yürüyerek ve tesis sorumlusundan geçmiş kullanım bilgisini alarak yeniden değerlendirir. Şüpheli noktaya tekerlek veya destek ayağı basılmaz. Daha uzaktaki sert zeminden hedefe erişim mümkünse bomlu sınıf kullanılır; mümkün değilse zemin işletme tarafından uygun şekilde hazırlanır ya da iş kuru pencereye ertelenir. Makinenin dört çeker olması zemin değerlendirmesini gereksiz kılmaz.",
            },
            {
                soru: "Hayvanları çıkarmadan fan ve aydınlatma bakımı yapılabilir mi?",
                cevap:
                    "Bütün barınağın boşaltılması her zaman gerekmez, fakat çalışılan şerit hayvanlardan ve günlük araç hareketinden fiziksel olarak ayrılmalıdır. Kaygan altlık temizlenir, makine için düz bir koridor açılır ve sepet altındaki alan bariyerlenir. Fan ya da motor üzerinde işlem varsa enerji kesilip yeniden devreye alınması önlenir. Gürültü ve hareketin hayvan davranışını etkileyebileceği hesaba katılır; işletme sorumlusu uygun günlük pencereyi belirler. Bu koşullar kurulamıyorsa iş daha sakin bir döneme taşınır. Amaç bakımı sürdürürken hayvanları, çalışanları ve operatörü aynı dar alanda kontrolsüz biçimde buluşturmamaktır.",
            },
            {
                soru: "Bir günlük küçük işler için ilçeye sevkiyat ekonomik olur mu?",
                cevap:
                    "Tek bir kısa kalemde nakliye payı yüksek kalabilir. Önce aynı işletmedeki çatı, fan, aydınlatma, oluk ve kapı mekanizması hedeflerini tek listeye toplamanızı öneririz. İkinci seçenek, tarihinizi esnek tutarak ilçedeki uygun adreslerle aynı hatta katılmaktır; ancak her adresin makinesi ve temizlik koşulu aynı olmayabileceği için birleştirme otomatik yapılmaz. Güzergâh, sınıf ve iş sırası uyuyorsa taşıma paylaşılır. Teklifte kiralama ile nakliyeyi ayrı gösteririz; böylece programı birleştirmenin etkisini görürsünüz.",
            },
            {
                soru: "Ürün işleme alanına dış sahada çalışan makineyi sokabilir misiniz?",
                cevap:
                    "Hazırlıksız biçimde sokmayız. Dış sahada toprak, yağ veya bitkisel kalıntıyla temas eden bir ünitenin ürün hacmine girişi işletmenin hijyen planına göre değerlendirilir. En güvenli program, temiz iç hacmi ilk sıraya yazıp dış saha ve barınak işlerini daha sonra tamamlamaktır. Sıra değişemiyorsa tekerlek, gövde ve çalışma platformu için işletmenin kabul ettiği temizlik uygulanır; sızıntı kontrolü tekrarlanır ve giriş yetkisi tesis sorumlusundan alınır. Açık ürün yine çalışma alanından çıkarılır, aletler bağlanır ve teslimde sayım yapılır. Temizlik kabulü verilmiyorsa ayrı bir iç saha ünitesi planlanır.",
            },
            {
                soru: "Sevkiyattan önce hangi fotoğraf ve ölçüleri göndermeliyiz?",
                cevap:
                    "Hedef noktanın genel görünümüne ek olarak son yaklaşım yolunu, taşıyıcı aracın dönebileceği alanı ve makinenin indirileceği sert zemini görmek isteriz. Giriş kapısının eni ile yüksekliği, içerideki en dar koridor, hedefin zeminden kotu ve makinenin durabileceği yerden yatay uzaklığı ölçülmelidir. Eğim, hendek, menfez, kapalı çukur, üstten geçen hat ve yumuşak zemin fotoğrafta işaretlenir. Depo doluluk tarihi, hayvan veya araç hareketinin düşük olduğu pencere ve yapılacak işin türü de eklenir. Bu paket sınıfı uzaktan kesinleştirmeye yardım eder; saha günü koşullar yine kontrol edilir ve değişmişse plan güvenlik lehine güncellenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. İhsaniye’de tarım ve hayvancılıkla ilişkili kırsal yapıların bulunması kamuya açık genel bilgidir; depo doluluğuna göre pencere kurma, zemin teyidi, hijyen ve hat planı firma saha pratiğidir. Tesis adı, kapasite ve üretim rakamı kullanılmamıştır.",
    },
};
