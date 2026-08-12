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
                    "Boş kasa ve paletlenmiş ürünün bekletildiği hacimler, ilçedeki en geniş kapalı alanlardır ve buradaki iş çatı altında yoğunlaşır: havalandırma bacaları, çatı ışıklıkları, yangın algılama dedektörleri ve genel aydınlatma. Belirleyici kısıt yükseklik değil koridor geometrisidir; makinenin ilerleyeceği hattın boş olması ve sepetin istif yığınına güvenli mesafede kalması gerekir. Bu yüzden istif alanı işleri, bölümün geçici olarak boşaldığı pencerelere göre parçalanır ve gün planı depo yönetimiyle birlikte kurulur.",
            },
            {
                baslik: "Sevkiyat rampası ve dış örtü işleri",
                metin:
                    "Tesislerin dışa bakan yüzünde ayrı bir iş ailesi vardır: rampa üstü sundurma sacı, kapı üstü körük ve conta hattı, dış aydınlatma direkleri ve oluk-iniş borusu onarımı. Buranın zorluğu yükseklikten değil trafikten gelir; sevkiyat sürerken rampa önünde çalışan bir makine hem kendisi risk altındadır hem operasyonu kilitler. Çözüm kapı bazlı sıralamadır: hangi kapının hangi saatte boşalacağı önceden alınır ve makine kapıdan kapıya bu sıraya göre ilerler.",
            },
            {
                baslik: "Kampanya dışı pencerenin darlığı",
                metin:
                    "Bu tesislerin bakım takvimi yılın tamamına yayılmaz; ürün girişinin durduğu ve hacimlerin boşaldığı aralığa sıkışır. Aynı aralık ilçedeki diğer tesisler tarafından da istenir ve bu, makine bulmayı fiyattan daha kritik bir konu hâline getirir. Bu yüzden düzenli çalıştığımız işletmelerden bakım listelerini iki gruba ayırmalarını isteriz: tarihi kampanyaya kilitli olanlar ve kaydırılabilir olanlar. İkinci grup, birinci grubun yarattığı yığılmayı boşaltmanın tek pratik yoludur.",
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
};
