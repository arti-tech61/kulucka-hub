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

    // ── HİZMET SAYFALARI (11 sabit slug, hizmet-konulari.ts) ─────────────
    // Bu domainin tarım sanayii + gıda tesisleri merceği hizmet sayfalarında
    // da sürer, ancak burada bölge değil EKİPMAN/HİZMET TÜRÜ merkezdedir.
    // afyonplatform.com.tr'nin hizmet sayfaları mermer-ocağı/termal eksenli;
    // afyonmanliftkiralama.net jenerik OSB üç-soru akışı kullanır. Bu dosya
    // ikisinden de ayrı biçimde, mandıra/değirmen/silo/soğuk depo/kırsal
    // güzergah gerçeğinden ilerler.
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Mandıra ve Küçük Ölçekli Gıda Atölyelerinde Sepetli Örümcek Platform Kiralama",
        giris:
            "Afyonkarahisar’ın kırsal ilçelerinde süt ve et işleme çoğu zaman büyük bir fabrikada değil, köy veya kasaba ölçeğindeki küçük bir mandırada, peynir imalathanesinde ya da un değirmeninde yapılır. Bu işletmelerin ortak özelliği, zaman içinde büyüyerek genişlemiş olmalarıdır: yeni bir tank ilave edilmiş, eski bir depo bölmesi üretim alanına katılmış, iki bina arasına sonradan bir geçit açılmıştır. Sonuç olarak ortaya çıkan bina, standart dört tekerlekli bir makaslı platformun rahatça dönebileceği bir plan değildir — tank grupları birbirine yakındır, kapılar dardır, tavan bazen alçalır bazen yükselir. Sepetli örümcek platform tam bu ortam için düşünülmüştür: katlanmış hâlde dar bir kapıdan geçirilir, hedef noktanın yakınında yeniden açılır ve ayaklarını bağımsız konumlandırarak eğik ya da dar bir zeminde bile dengesini kurar. Bu sayfada örümcek platformun mandıra, değirmen ve küçük ölçekli gıda atölyelerinde ne zaman gerçek bir ihtiyaç olduğunu ve standart makaslı platforma göre hangi durumlarda tercih edilmesi gerektiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tank grupları arasındaki dar servis şeridi",
                metin:
                    "Küçük ölçekli süt işleme tesislerinde pastörizasyon tankı, soğutma tankı ve CIP yıkama ünitesi genellikle art arda, aralarında yalnızca bir kişinin geçebileceği kadar boşluk bırakılarak yerleştirilir. Tank üstü kapak, boru askısı veya aydınlatma bakımı gerektiğinde bu şeride standart şaseli bir makine sığmaz. Örümcek platform parça hâlinde taşınıp şeridin içinde yeniden monte edilir; ayaklarının bir kısmı tank kaidesine yakın kalacaksa bu mesafe montaj öncesinde ayrıca ölçülür ve güvenli sınır belirlenir.",
            },
            {
                baslik: "Değirmen ve yem ünitelerinde kat arası boşluklar",
                metin:
                    "Un değirmenleri ve yem karma üniteleri genellikle dikey katmanlar hâlinde çalışır; elevatör gövdesi, helezon hattı ve silo kapakları farklı katlarda, aralarında dar bir bakım boşluğu bırakılarak kurulur. Bu boşluklara sabit merdivenle erişmek mümkündür ama elde alet ve malzemeyle çalışmak güvenli değildir. Örümcek platform bu dar katmanlar arasına sığacak biçimde ayarlanabilir; enerjisi kesilen hat üstünde çalışılır ve ayak açıklığı katın taşıma zeminine göre önceden hesaplanır.",
            },
            {
                baslik: "Eski bina bölme duvarları ve geçit genişliği",
                metin:
                    "Yıllar içinde bölünerek büyümüş atölyelerde bölme duvarlarındaki geçitler, üretim ekipmanının ilk kurulduğu döneme göre değil sonradan açılan ihtiyaca göre şekillenmiştir; bu geçitler genellikle standart bir platformun şasesinden dardır. Örümcek platform katlanmış hâlde bu geçitten geçirilebilir ve hedef bölmede yeniden açılır. Geçit ölçüsü ve montaj alanının tavan yüksekliği önceden bilinmelidir; aksi hâlde sahada makine geçse bile açılamayan bir durumla karşılaşılır.",
            },
            {
                baslik: "Islak zeminde paletli tutunma",
                metin:
                    "Süt ve peynir üretiminin yapıldığı hacimlerde zemin, yıkama ve üretim döngüsü nedeniyle gün boyunca ıslak kalabilir. Standart tekerlekli bir makine bu zeminde kayabilir; örümcek platformun paletli yürüyüş takımı daha geniş bir temas yüzeyi sağlayarak tutunmayı artırır. Buna rağmen zeminde biriken su veya yağ filmi çalışmadan önce temizlenir; ıslaklık sürekli yenileniyorsa çalışma, yıkama döngüsünün durduğu bir pencereye kaydırılır.",
            },
            {
                baslik: "Standart makaslıya göre montaj süresinin maliyeti",
                metin:
                    "Örümcek platform her dar işin otomatik cevabı değildir. Kapı ve koridor ölçüsü standart akülü makaslı bir platformu geçiriyorsa, örümcek platformun parça parça montaj süresi gereksiz bir maliyet kalemine dönüşür. Karar noktası nettir: geçiş ölçüsü standart makineyi geçirmiyorsa örümcek platform tek seçenektir; geçiriyorsa montaj süresi kaçınılmaz değil, tercih meselesidir. Teklif aşamasında iki seçeneğin süre ve maliyet farkını yan yana gösteririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda atölyelerinde dar erişim senaryoları",
                paragraflar: [
                    "Mandıra, değirmen ve küçük ölçekli gıda atölyelerinde sık karşılaştığımız darlık türlerini, kritik ölçüyü ve alternatif çözümü aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Darlık kaynağı", "Kritik ölçü", "Alternatif"],
                    satirlar: [
                        ["Tank grupları arası şerit", "Ekipman yoğunluğu", "Şerit genişliği, ayak açıklığı", "Yıkama duruşunda erişim"],
                        ["Değirmen kat arası boşluk", "Dikey katman planı", "Kat yüksekliği, geçiş açıklığı", "Merdivenle sınırlı bakım"],
                        ["Eski bölme geçidi", "Sonradan açılan kapı", "Kapı eni, tavan kotu", "Bölmenin geçici açılması"],
                        ["Islak üretim zemini", "Yıkama-üretim döngüsü", "Zemin nem durumu", "Kuruma penceresine erteleme"],
                        ["Kısa süreli tek nokta işi", "İş süresi montaja göre kısa", "Montaj/iş süresi oranı", "Standart akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Montaj süresini planlamanın ekonomisi",
                paragraflar: [
                    "Örümcek platformun parça parça taşınıp yeniden monte edilmesi, doğrudan sürülen bir makineye göre belirgin ölçüde daha uzun sürer; kısa süreli bir kablo veya aydınlatma kontrolünde bu fark toplam maliyeti önemli ölçüde etkileyebilir. Bu yüzden teklifte montaj-söküm süresini ayrı bir kalem olarak gösteririz ve işin gerçek kapsamıyla karşılaştırırız.",
                    "İşin kendisi tekerlekli bir makineyle hiç yapılamıyorsa — dar tank aralığı, geçit genişliği yetersiz, kat arası boşluk sınırlı — montaj süresi kaçınılmaz bir kalem hâline gelir. Bu durumda amaç süreyi sıfırlamak değil, güzergâhı ve montaj sırasını önceden netleştirerek süreyi öngörülebilir kılmaktır.",
                ],
            },
            {
                baslik: "Küçük ölçekli tesislerde hijyen hazırlığı",
                paragraflar: [
                    "Gıda üretim alanına giren bir makine, büyüklüğünden bağımsız olarak hijyen zincirinin bir parçası olur. Örümcek platformun mafsal ve palet araları, geniş gövdeli bir makaslıya göre toza ve kalıntıya daha hassastır; bu yüzden üretim hacmine girmeden önce ayrıca temizlenir ve sepet tabanına toplama tablası kurulur.",
                    "Küçük atölyelerde giriş prosedürü de büyük tesislere göre değişebilir — bazı işletmelerde bone ve önlük zorunluyken bazılarında değildir. Sizden istediğimiz, kendi giriş kuralınızı önceden bildirmenizdir; ekip bu kurala uyarak gelir ve iş sonunda alan sizin kendi temizlik prosedürünüze göre teslim edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mandıramızın tank aralığı çok dar; standart makaslı platform sığar mı?",
                cevap:
                    "Genellikle sığmaz, çünkü tank grupları arasındaki servis şeridi bir kişinin geçebileceği kadar dar bırakılmıştır. Bu durumda örümcek platform parça hâlinde taşınıp şeridin içinde yeniden monte edilir. Karar vermeden önce şerit genişliğini, en dar noktayı ve tavan yüksekliğini ölçmenizi isteriz; ayakların tank kaidesine ne kadar yaklaşabileceğini bu ölçülerle birlikte hesaplarız.",
            },
            {
                soru: "Değirmenimizde kat arası boşluk çok kısıtlı; hangi makine önerirsiniz?",
                cevap:
                    "Kat arası boşluk kısıtlıysa örümcek platform genellikle doğru seçimdir, çünkü ayaklarını bağımsız açarak dar bir alanda dengesini kurabilir. Ancak önce enerji kesme düzenini konuşuruz — elevatör veya helezon hattının çalışır durumda olmaması şarttır. Kat yüksekliğini ve geçiş açıklığını paylaşırsanız montajın mümkün olup olmadığını ve süresini net söyleriz.",
            },
            {
                soru: "Eski binamızın bölme kapıları standart platformdan dar; alternatif nedir?",
                cevap:
                    "Örümcek platform katlanmış hâlde dar bir kapıdan geçirilip hedef bölmede yeniden açılabilir. Bunun için kapı genişliğini, güzergâh üzerindeki dönüş noktalarını ve montaj alanının tavan yüksekliğini önceden bilmemiz gerekir. Belirsiz ölçüyle sahaya makine göndermeyiz; birkaç fotoğraf ve ölçüyle montajın mümkün olup olmadığını netleştiririz.",
            },
            {
                soru: "Üretim zeminimiz gün boyu ıslak; platform kayar mı?",
                cevap:
                    "Standart tekerlekli bir makinede bu risk gerçektir; örümcek platformun paletli yürüyüş takımı daha geniş temas yüzeyiyle tutunmayı artırır. Yine de zeminde biriken su veya yağ filmi çalışmadan önce temizlenir. Islaklık sürekli yenileniyorsa çalışmayı yıkama döngüsünün durduğu bir saate kaydırmayı öneririz; bu saati bize bildirirseniz planı ona göre kurarız.",
            },
            {
                soru: "İşimiz kısa süreli, örümcek platform pahalı gelir mi?",
                cevap:
                    "Kısa süreli bir işte montaj-söküm süresi toplam maliyeti belirgin biçimde etkiler; bu yüzden geçiş ölçüleriniz standart akülü makaslı platformu geçiriyorsa onu öneririz. Örümcek platform yalnızca geçiş ölçüsü gerçekten yetersizse ekonomik hâle gelir. İş tanımınızı ve geçiş ölçülerinizi paylaşın, iki seçeneğin süre ve maliyet farkını yan yana gösterelim.",
            },
            {
                soru: "Örümcek platform üretim alanımıza girerken özel bir hazırlık gerekir mi?",
                cevap:
                    "Evet. Mafsal ve palet araları toza ve kalıntıya diğer sınıflara göre daha hassastır; bu yüzden üretim hacmine girmeden önce ayrıca temizlenir ve sepet tabanına toplama tablası kurulur. Tesisinizin kendi giriş prosedürü varsa (bone, önlük, ayak koruması gibi) önceden bildirmenizi isteriz; ekip bu kurala uyarak gelir ve alan iş sonunda sizin prosedürünüze göre teslim edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyonkarahisar kırsalında küçük ölçekli mandıra, değirmen ve gıda atölyelerinin bulunması kamuya açık genel bilgidir; montaj süresi hesabı, ayak açıklığı ve hijyen hazırlığı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Afyonkarahisar Kırsalındaki Tarım Tesislerine Manlift Nakliye ve Teslimat Hizmeti",
        giris:
            "Afyonkarahisar’ın kırsal ilçelerinde bir manlift kiralamanın maliyetini belirleyen tek kalem, çalışma süresi değildir — çoğu zaman nakliye, toplam faturanın en değişken parçasıdır. İl, tahıl ovalarından mermer ocaklarına, termal otel kümesinden dağınık köy yerleşimlerine kadar geniş bir coğrafyaya yayılır ve bu coğrafyanın kırsal kesimindeki bir tesise makine ulaştırmak, şehir içi bir sevkiyattan tamamen farklı bir planlama ister. Çekicinin dönebileceği bir alan var mı, stabilize yol yağış sonrası çamura mı dönüyor, tesise giden son kilometrede alçak bir engel var mı — bu sorular fiyatı, süreyi ve hatta hangi makine sınıfının gönderileceğini belirler. Nakliye ve teslimat hizmetimiz bu yüzden ayrı bir kalem olarak ele alınır: tek adres için tek sefer yapmak yerine, mümkün olduğunda aynı hafta içinde aynı ilçedeki birden fazla talebi tek sevkiyata toplayıp nakliye payını bölüşürüz. Bu sayfada nakliye kararını neyin belirlediğini, hangi bilgilerin teklifi netleştirdiğini ve ilçe hattı modelinin nasıl işlediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Erişim bilgisinin fiyatı belirlemesi",
                metin:
                    "Kırsal bir adreste nakliye maliyetini en çok etkileyen kalem, mesafenin kendisi değil erişimdir. Lowbed çekicinin dönebileceği bir alan, indirme için sert bir zemin ve tesise girişte kemer, kapı veya elektrik hattı gibi alçak bir engel bulunup bulunmadığı önceden bilinmelidir. Bu bilgiyi telefonda tarif etmek zordur; birkaç fotoğraf, sahaya boşa yapılan bir sefere kıyasla çok daha ucuzdur. Erişim netleştiğinde hem makine sınıfı hem nakliye yöntemi kendiliğinden netleşir.",
            },
            {
                baslik: "Son kilometrenin kendi yürüyüşle tamamlanması",
                metin:
                    "Çekicinin dönemeyeceği bir köy girişinde iki yöntem uygulanır: makineyi çekicinin dönebildiği en yakın sert zemine indirip kalan mesafeyi makinenin kendi yürüyüşüyle almak, ya da daha küçük şaseli bir sınıf seçip taşımayı küçük araçla yapmak. Birincisi mesafe kısa ve yol makul olduğunda en pratik çözümdür; ikincisi çalışma yüksekliğinde bir miktar tavizi gerektirir. Hangi yöntemin uygulanacağına son yüz metrenin fotoğrafına bakarak karar veririz.",
            },
            {
                baslik: "İlçe içi hat modeliyle nakliye payının bölüşülmesi",
                metin:
                    "Tek adres için ilçeye makine indirmek, nakliye payı tek işin üstünde kaldığı için pahalıdır. Bunun yerine ilçede aynı hafta içinde iş yaptırmak isteyen işletmeleri aynı sevkiyata topladığımız hat modelini öneririz; makine adresten adrese kendi tekerleğiyle ya da kısa mesafeli taşımayla geçer ve giriş-çıkış nakliye kalemi katılan işletmeler arasında bölünür. Her işletme kendi teklifini ve kendi teslim tutanağını alır; tarihini önceden bildiren işletme hem sırayı hem daha düşük birim maliyeti alır.",
            },
            {
                baslik: "Kampanya takviminin sevkiyat trafiğine etkisi",
                metin:
                    "Tarım ilçelerinde nakliye talebi yılın tamamına eşit dağılmaz; hasat ve kampanya sonrasında hacimler boşaldığında talep birkaç haftaya yığılır ve bu dönemde araç ve makine trafiği yoğunlaşır. Bu yığılma döneminde erken rezervasyon, hem sırayı hem uygun makine sınıfını garanti eder. Kampanya öncesinde tarihini bildiren işletmeler, program dışı kalan taleplere göre her zaman avantajlı konumda olur.",
            },
            {
                baslik: "Teslim ve iade sırasında durum kaydı",
                metin:
                    "Kırsal adreslerde makine genellikle birkaç gün sahada kalır; bu durumda teslim ve iade anında makinenin mevcut durumu fotoğrafla kayıt altına alınır. Kalış süresince makinenin gece park edeceği düz ve sert bir alan gerekir; akülü ünite kalacaksa şarj için erişilebilir bir enerji hattı da bu planın parçasıdır. Bu iki basit düzenleme, sevkiyat sonrası yaşanabilecek anlaşmazlıkların büyük bölümünü baştan ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Nakliye yöntemi seçim tablosu",
                paragraflar: [
                    "Kırsal adreste hangi nakliye yönteminin uygulanacağı, erişim koşuluna göre değişir. Aşağıdaki tablo sık karşılaştığımız durumları ve uyguladığımız yöntemi özetler.",
                ],
                tablo: {
                    basliklar: ["Erişim durumu", "Belirleyici kısıt", "Uygulanan yöntem", "Etkilenen kalem"],
                    satirlar: [
                        ["Çekici tesise kadar dönebiliyor", "Yok", "Doğrudan indirme", "Standart nakliye"],
                        ["Çekici son yüz metreye giremiyor", "Dar köy girişi", "Kendi yürüyüşüyle son mesafe", "Ek süre, sınırlı ek ücret"],
                        ["Yol tamamen dar/zayıf", "Dönüş alanı yok", "Küçük şaseli sınıfa geçiş", "Çalışma yüksekliğinde tavız"],
                        ["Aynı ilçede birden fazla adres", "Tekil sevkiyat pahalı", "Hat modeli, adresler arası geçiş", "Bölüşülen nakliye payı"],
                        ["Kampanya dönemi yoğunluğu", "Araç/makine trafiği", "Erken rezervasyon", "Sıra önceliği"],
                    ],
                },
            },
            {
                baslik: "Teklif için gereken erişim bilgisi",
                paragraflar: [
                    "Şehir içi bir talepte adres ve yükseklik çoğu zaman yeterlidir; kırsal bir adreste değildir. Bize gereken çekirdek bilgi şudur: tesise giden son yolun cinsi, çekicinin dönebileceği bir alanın bulunup bulunmadığı, giriş açıklığının eni ve yüksekliği, çalışma noktasının zeminden kotu ve makinenin duracağı zeminin son yağıştan sonra ıslak kalıp kalmadığı.",
                    "Bu beş başlık netleştiğinde teklif tek turda çıkar ve sahada değişmez. Eksik olduğunda ise iki riskten biri gerçekleşir: ya sahaya sığmayan bir makine gider ya da güvenli tarafta kalmak için gereğinden büyük bir sınıf teklif edilir ve fazlasını işletme öder.",
                ],
            },
            {
                baslik: "Birden fazla işletmenin aynı sevkiyata katılması",
                paragraflar: [
                    "İlçe içi hat modeli, kırsal nakliyenin en ekonomik biçimidir ve bunu aktif olarak teşvik ederiz. Makine bir kez ilçeye indirilir, adresler arasında sırayla dolaşır ve giriş-çıkış nakliye kalemi katılan işletmeler arasında iş yüküne göre bölünür. Aranızda hiçbir hukuki bağ kurulmaz; her işletme kendi sözleşmesini ve kendi teslim tutanağını alır.",
                    "Süre aşımı olursa program bir gün uzar ve bu gecikmeye neden olan tarafla konuşulur; sizin göründüğünüz gün başkasının işi uzadı diye kısalmaz. Yapmanız gereken tek şey, tarihinizi hattın kurulduğu aşamada bildirmektir — ne kadar erken bildirilirse hat o kadar verimli kurulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Köy yolumuz dar, çekici tesise giremiyor; makine yine de gelebilir mi?",
                cevap:
                    "Çoğu durumda gelebilir. İki seçeneğimiz var: makineyi çekicinin dönebildiği en yakın sert zemine indirip kalan mesafeyi kendi yürüyüşüyle almak, ya da daha küçük şaseli bir sınıfa geçip taşımayı küçük araçla yapmak. Karar için son yüz metreyi ve giriş açıklığını gösteren birkaç fotoğraf yeterlidir; buna göre hangi yöntemin uygulanacağını ve ek süreyi net söyleriz.",
            },
            {
                soru: "Nakliye ücretini nasıl hesaplıyorsunuz, sadece mesafeye göre mi?",
                cevap:
                    "Hayır, mesafe tek başına belirleyici değildir. Asıl belirleyici erişim zorluğudur — çekicinin dönebileceği alan, indirme zemini ve son kilometredeki engeller. Aynı mesafedeki iki adres, erişim koşulu farklıysa çok farklı nakliye kalemi çıkarabilir. Bu yüzden teklif öncesinde erişim bilgisini mutlaka isteriz; belirsiz bilgiyle verilen fiyat sahada değişebilir.",
            },
            {
                soru: "İlçemizde birkaç işletme aynı hafta iş yaptırmak istiyor; nakliyeyi paylaşabilir miyiz?",
                cevap:
                    "Evet, bu tam olarak teşvik ettiğimiz modeldir. Makine bir kez ilçeye indirilir, adresler arasında sırayla dolaşır ve nakliye kalemi katılan işletmeler arasında bölünür. Her işletme kendi sözleşmesini alır; aranızda hukuki bir bağ oluşmaz. Tarihinizi ne kadar erken bildirirseniz hat o kadar verimli kurulur ve birim maliyet o kadar düşer.",
            },
            {
                soru: "Kampanya dönemine denk geldiğimizde nakliye gecikir mi?",
                cevap:
                    "Yoğunluk gerçek bir risktir, çünkü bölgedeki birçok tesis aynı dönemde araç ve makine talep eder. Erken rezervasyon bu riski büyük ölçüde ortadan kaldırır; kampanya bitişinden önce tarihinizi bildirirseniz sırayı ve tercih ettiğiniz makine sınıfını garanti ederiz. Son anda gelen talepler hatta yetişemeyebilir ve tekil sevkiyat maliyetini üstlenir.",
            },
            {
                soru: "Makine sahamızda birkaç gün kalacak; nakliye maliyeti nasıl değişir?",
                cevap:
                    "Uzun kalışlarda asıl maliyet kalınan günde değil gidiş-gelişte birikir; bu yüzden kırsal adreslerde makineyi sahada bırakmayı genellikle biz öneririz. Bu durumda konuşulması gereken iki konu vardır: makinenin gece park edeceği düz ve sert bir alan, ve akülü ünite kalacaksa şarj için erişilebilir bir enerji hattı. Teslim ve iade anında mevcut durum fotoğrafla kayıt altına alınır.",
            },
            {
                soru: "Teklif almadan önce hangi bilgileri hazırlamalıyız?",
                cevap:
                    "Beş bilgi teklifi tek turda netleştirir: tesise giden son yolun cinsi, çekicinin dönebileceği bir alanın bulunup bulunmadığı, giriş açıklığının eni ve yüksekliği, çalışma noktasının zeminden kotu ve son yağıştan sonra zeminin ıslak kalıp kalmadığı. Bu bilgiler eksikse ya sahaya sığmayan bir makine gider ya da güvenli tarafta kalmak için gereğinden büyük bir sınıf teklif edilir; ikisi de gereksizdir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyonkarahisar’ın kırsal ilçelerinde köy yolu ve stabilize erişim koşullarının yaygın olması kamuya açık genel bilgidir; hat modeli, erişim değerlendirmesi ve teslim kaydı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Tahıl, Yem ve Meyve Paketleme Depolarında Forklift ve İstifleme Kiralama",
        giris:
            "Afyonkarahisar’ın tarım sanayii ekonomisinde forklift talebi, çoğunlukla tek bir sektörden değil birbirine benzeyen birkaç depolama biçiminden gelir: tahıl deposundaki çuval ve büyük torba istifi, yem fabrikasındaki hammadde ve mamul palet trafiği, meyve paketleme evindeki boş ve dolu kasa akışı. Bu üç ortamın ortak noktası, forkliftin tek başına değil bazen bir yükseltme platformuyla birlikte çalışmasıdır — üst raftaki bir çuvalın indirilmesi ayrı bir iştir, o rafın üstündeki aydınlatmanın veya çatı bağlantısının bakımı ayrı bir iştir ve ikisi farklı ekipman gerektirir. Forklift ve istifleme hizmetimiz bu yüzden tek makineyle sınırlı değildir; depo tipine, zemin durumuna ve istiflenen ürünün ağırlığına göre doğru sınıfı ve gerekiyorsa tamamlayıcı bir platformu birlikte planlarız. Bu sayfada tahıl, yem ve meyve paketleme depolarında forklift seçimini neyin belirlediğini ve istifleme sırasında en sık karşılaştığımız riskleri anlatıyoruz.",
        maddeler: [
            {
                baslik: "Çuval ve büyük torba istifinde zemin taşıma gücü",
                metin:
                    "Tahıl depolarında ürün genellikle çuval veya büyük torba (jumbo bag) hâlinde istiflenir ve bu yükler zemine noktasal değil geniş bir ayak izi üzerinden biner. Depo zemini düz betondan toprak sıkıştırmalı bir yüzeye kadar değişebilir; zemin taşıma gücü belirsizse yüklü forklift altında ezilme riski doğar. Bu yüzden özellikle geçici veya yarı açık depo yapılarında zemin durumu teklif öncesinde sorulur ve şüpheli zeminde tam yüklü istif önerilmez.",
            },
            {
                baslik: "Yem fabrikasında hammadde ve mamul trafiğinin ayrılması",
                metin:
                    "Yem üreten tesislerde forklift trafiği iki ayrı akışa hizmet eder: hammadde girişindeki çuval ve dökme malzeme taşınması, mamul çıkışındaki palet sevkiyatı. Bu iki akışın aynı koridoru paylaşması, yoğun saatlerde çarpışma riskini artırır. Forklift kiralarken güzergâhın önceden planlanmasını, mümkünse iki akışın ayrı koridorlara bölünmesini öneririz; bu, hem güvenlik hem verimlilik açısından belirgin fark yaratır.",
            },
            {
                baslik: "Meyve paketleme evinde boş kasa istifinin aldatıcılığı",
                metin:
                    "Boş kasa yığınları hafif oldukları için sağlam görünür, ama bu görünüm yanıltıcıdır; istif yüksekliği arttıkça yığının devrilme riski dolu paletten daha fazla artar, çünkü ağırlık merkezi düşük değildir. Forklift ile boş kasa istifi yaparken yaklaşma mesafesi dolu paletlere göre daha geniş tutulur ve istif yüksekliği tesisin kendi güvenlik sınırına göre belirlenir. Dolu ürün kasalarında ise öncelik nazik taşımadır; hızlı manevra ürün kalitesini doğrudan etkiler.",
            },
            {
                baslik: "Raf üstü erişimde forklift ile platformun tamamlayıcılığı",
                metin:
                    "Forklift, paletli yükü indirip kaldırmak için doğru araçtır ama rafın kendisinde, üst kottaki aydınlatmada veya çatı bağlantısında çalışmak için uygun değildir. Bu iki iş bir arada çıktığında forklift ve akülü bir platformu aynı sevkiyata dahil ederiz; forklift palet trafiğini yürütürken platform sabit noktadaki bakımı üstlenir. İki makinenin aynı koridoru aynı anda kullanmaması için çalışma sırası önceden netleştirilir.",
            },
            {
                baslik: "Kampanya dönemi yoğun trafiğinde makine sayısı",
                metin:
                    "Hasat ve kampanya döneminde depo trafiği normalin kat kat üzerine çıkar; tek forklift bu yoğunlukta hem giriş hem çıkış akışını karşılayamayabilir. Bu dönemlerde ikinci bir forklift veya kısa süreli takviye makine kiralamak, depo önünde oluşan bekleme kuyruğunu önler. Kampanya tarihini önceden bildiren işletmeler, ihtiyaç duydukları makine sayısını garanti eder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo tipine göre forklift ve istifleme eşleşmesi",
                paragraflar: [
                    "Tahıl, yem ve meyve paketleme depoları farklı istifleme davranışı gerektirir. Aşağıdaki tablo depo tipine göre baskın yük türünü, zemin kısıtını ve önerilen makine sınıfını toplar.",
                ],
                tablo: {
                    basliklar: ["Depo tipi", "Baskın yük türü", "Zemin kısıtı", "Önerilen sınıf"],
                    satirlar: [
                        ["Tahıl deposu", "Çuval, jumbo bag", "Belirsiz taşıma gücü", "Geniş lastikli, orta kapasiteli"],
                        ["Yem fabrikası", "Hammadde + mamul palet", "İki akışlı trafik", "Standart dizel, ayrı koridor"],
                        ["Meyve paketleme evi", "Dolu/boş kasa", "Kaygan (yıkama suyu)", "Elektrikli, nazik kaldırma"],
                        ["Raf sistemi olan depo", "Palet + raf üstü bakım", "Koridor genişliği", "Forklift + akülü platform"],
                        ["Kampanya dönemi genel depo", "Yoğun giriş-çıkış", "Yoğun trafik", "İkinci makine takviyesi"],
                    ],
                },
            },
            {
                baslik: "Boş ve dolu yük arasındaki güvenlik farkı",
                paragraflar: [
                    "Forklift operasyonlarında en sık gözden kaçan risklerden biri, boş yükün güvenli sayılmasıdır. Boş kasa veya boş palet istifleri hafif olduğu için tehlikesiz görünür, ama yükseklik arttıkça devrilme riski gerçek ve bazen dolu yükten daha büyüktür; çünkü ağırlık merkezi yığının tamamına yayılır ve alt katmanlar üst katmanları taşıyacak biçimde tasarlanmamış olabilir.",
                    "Bu yüzden istif kuralları yük türüne göre ayrılır: dolu palet ve dolu kasada öncelik nazik taşıma ve ürün kalitesinin korunmasıdır, boş yığında öncelik devrilme mesafesi ve maksimum istif yüksekliğidir. İki kuralı aynı sayarak çalışmak, sahada beklenmedik kazalara yol açar.",
                ],
            },
            {
                baslik: "Forklift ve platformun aynı sahada koordinasyonu",
                paragraflar: [
                    "Depo içinde forklift palet trafiğini yürütürken aynı anda bir akülü platform üst kotta çalışıyorsa, iki makinenin güzergâhı çakışmamalıdır. Çalışma öncesinde hangi koridorun hangi makineye ayrılacağı belirlenir, platform çalışırken forklift o koridora girmez.",
                    "Bu koordinasyon özellikle dar depo planlarında önemlidir; koridor genişliği iki makinenin aynı anda geçmesine yetmiyorsa çalışma sıralı yapılır — önce forklift palet trafiğini tamamlar, sonra platform üst kot işine geçer. Bu sıralamayı depo yönetimiyle birlikte kurarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tahıl deposu zeminimiz sıkıştırılmış toprak; forklift bu zeminde güvenle çalışır mı?",
                cevap:
                    "Zeminin sıkıştırılmış toprak olması tek başına yeterli bir güvence değildir; taşıma gücü yağış ve nem koşuluna göre değişir. Çalışma öncesinde zemin durumu sorulur ve şüpheli koşulda tam yüklü istif önerilmez; gerekirse geniş lastikli bir sınıf tercih edilir veya çalışma kuru bir güne kaydırılır. Zeminin son durumunu birkaç fotoğrafla paylaşırsanız uygun sınıfı önceden belirleriz.",
            },
            {
                soru: "Boş kasa istifi tehlikeli sayılır mı, dolu kasadan farkı nedir?",
                cevap:
                    "Evet, boş kasa istifi kendine özgü bir risk taşır. Hafif olduğu için sağlam görünür ama yükseklik arttıkça devrilme riski dolu paletten daha fazla olabilir. Bu yüzden boş yığına yaklaşma mesafesini dolu paletlere göre daha geniş tutarız ve istif yüksekliğini tesisin güvenlik sınırına göre belirleriz. Dolu kasada ise önceliğimiz ürünün nazik taşınmasıdır.",
            },
            {
                soru: "Hem forklift hem platform aynı gün gerekiyor; ikisini birlikte planlayabilir misiniz?",
                cevap:
                    "Evet, bu sık karşılaştığımız bir kombinasyon. Forklift palet trafiğini yürütürken platform üst kottaki aydınlatma veya çatı bakımını üstlenir. İki makinenin aynı koridoru aynı anda kullanmaması için çalışma sırası önceden netleştirilir; dar depolarda sıralı çalışma tercih edilir. İş listenizi paylaşırsanız iki makinenin gün planını birlikte kurarız.",
            },
            {
                soru: "Kampanya döneminde tek forklift yetmiyor; ek makine bulabilir misiniz?",
                cevap:
                    "Kampanya döneminde bunu sık talep ederiz ve mümkün olduğunca karşılarız. Ancak bu dönemde bölgedeki talep yığılır, bu yüzden ek makine ihtiyacınızı erken bildirmenizi öneririz. Tarihinizi önceden bildirirseniz ihtiyaç duyduğunuz makine sayısını garanti ederiz; son anda gelen taleplerde müsaitlik garanti edilemez.",
            },
            {
                soru: "Yem fabrikamızda hammadde ve mamul trafiği aynı koridoru kullanıyor; sorun olur mu?",
                cevap:
                    "Sorun olabilir, özellikle yoğun saatlerde çarpışma riskini artırır. Mümkünse iki akışı ayrı koridorlara bölmenizi öneririz; bu mümkün değilse en azından giriş ve çıkış saatlerini kaydırarak trafiği seyreltiriz. Tesisinizin güzergâh planını paylaşırsanız çalışma öncesinde koridor önerisini birlikte netleştiririz.",
            },
            {
                soru: "Meyve paketleme evimizde zemin yıkama nedeniyle sık ıslanıyor; forklift kayar mı?",
                cevap:
                    "Kayganlık gerçek bir risktir; bu yüzden bu tür tesislerde elektrikli forklift ve nazik kaldırma önceliğini öneririz. Zeminin ıslak kaldığı saatlerde manevra hızı düşürülür ve gerekiyorsa çalışma, yıkama döngüsünün durduğu bir pencereye kaydırılır. Yıkama takviminizi bize bildirirseniz planı buna göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyonkarahisar’da tahıl, yem ve meyve paketleme depolarının bulunması kamuya açık genel bilgidir; zemin değerlendirmesi, koridor ayrımı ve boş/dolu yük ayrımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Silo, Kule ve Proses Hatlarında Eklemli Platform (Boom) Kiralama",
        giris:
            "Afyonkarahisar’ın tarım sanayii tesislerinde yükseklik çoğu zaman düz bir tavan değil, birbirinin üstünde duran ekipman katmanlarıdır: silo gövdesi, aktarma kulesi, elevatör hattı, buhar borusu ve bunların üstündeki aspirasyon kanalları. Bu tip yapılarda ihtiyaç genellikle dikey değil çapraz erişimdir — hedef nokta bir tavanın altında değil, bir kulenin yanında ya da bir hattın üstündedir ve düz yukarı çıkan bir makaslı platform bu mesafeyi kapatamaz. Eklemli platform (boom) tam bu yüzden tercih edilir: bomunu yatay ve dikey eksende birlikte hareket ettirerek hem yükseğe çıkar hem engelin üzerinden veya yanından dolanarak hedefe ulaşır. Bu sayfada eklemli platformun proses tipi tesislerde — silo, kule, bant hattı, buhar hattı — hangi işlerde gerçek bir fark yarattığını ve makaslı platforma göre ne zaman tercih edilmesi gerektiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Silo gövdesine dışarıdan yanaşma",
                metin:
                    "Silo gövdesinin dış yüzeyindeki merdiven, sahanlık ve seviye ölçüm ekipmanına erişmek için makine, silonun devrilme koridorunun dışında kalan sağlam bir noktaya konumlanır ve mesafe bomla kapatılır. Bu yöntem, makinenin silo dibine kadar yanaşmasını gerektirmez ve dar zeminlerde manevra derdini ortadan kaldırır. Gereken uzanma mesafesini belirlemek için hedef noktanın zeminden kotu, silo ile makinenin durabileceği en yakın sağlam zemin arasındaki mesafe ve aradaki engel bilgisi istenir.",
            },
            {
                baslik: "Aktarma kulesi ve bant hattının yan tarafına erişim",
                metin:
                    "Tahıl ve yem aktarma hatlarında bant genellikle eğimli ilerler ve aktarma noktalarında bir kule oluşturur; bu kulenin yan tarafındaki tambur, sıyırıcı ve örtü sacı işleri düz bir platformla değil, yandan uzanan bir bomla yapılır. Bandın enerjisi kesilmeden hiçbir noktasında çalışılmaz; enerji kesme ve kilitleme düzeni saha sorumlusuyla birlikte kurulur ve iş emrine yazılır.",
            },
            {
                baslik: "Buhar ve proses hattı boyunca kademeli ilerleme",
                metin:
                    "Buhar ve sıcak akışkan taşıyan hatlar tesis içinde uzun mesafeler kat eder ve genellikle destek ayakları üzerinde yükseltilmiş biçimde ilerler. Bu hatların yalıtım kontrolü ve yenilemesi, eklemli bomlu bir makineyle kademeli konumlanarak yürütülür: ünite hattın altına konumlanır, sepet boru kotuna çıkar ve hat adım adım taranır. Sıcak hatta yakın çalışmada izin süreci tesisin kendi prosedürüne göre işler.",
            },
            {
                baslik: "Çatı üstü filtre ve aspirasyon sistemlerinde uzun uzanma",
                metin:
                    "Kuru ürün işleyen tesislerde filtre üniteleri genellikle çatı kotunda veya kule üstünde durur ve kanallar uzun mesafeler boyunca çatı üzerinde ilerler. Bu kanallara zemin seviyesinden bomla erişmek, çatıya çıkıp yürüme ihtiyacını ortadan kaldırır. Rüzgâr burada belirleyici bir kısıttır; yükseklik arttıkça makinenin izin verdiği rüzgâr sınırı daha erken devreye girer ve geniş yüzeyli parça taşınan kalemler rüzgârın sakinleştiği saatlere alınır.",
            },
            {
                baslik: "Makaslı platforma göre karar sınırı",
                metin:
                    "Eklemli platform her yüksek işin otomatik cevabı değildir; hedef nokta tam makinenin üstündeyse ve yatay bir engel yoksa, akülü makaslı platform hem daha ekonomik hem daha hızlı kurulur. Karar noktası nettir: hedefe düz yukarı ulaşılamıyorsa, aradan bir kule, boru hattı veya istif geçiyorsa boom gündeme gelir. İki sınıfın da teknik olarak uygun olduğu sınır durumlarda, teklif aşamasında iki seçeneğin maliyet farkını gösteririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proses tesisinde bomlu erişim senaryoları",
                paragraflar: [
                    "Silo, kule ve hat yapılarında sık karşılaştığımız erişim senaryolarını, belirleyici kısıtı ve uygulanan yöntemi aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Belirleyici kısıt", "Uygulanan yöntem", "Enerji/izin"],
                    satirlar: [
                        ["Silo gövde dışı", "Devrilme koridoru", "Dışarıdan bomla yanaşma", "Gerekmez"],
                        ["Aktarma kulesi yanı", "Bant enerjisi", "Yandan uzanma", "Enerji kesme zorunlu"],
                        ["Buhar/proses hattı", "Sıcak yüzey", "Kademeli konumlanma", "İzinli çalışma"],
                        ["Çatı üstü filtre/kanal", "Rüzgâr sınırı", "Zeminden bomla erişim", "Rüzgâr takibi"],
                        ["Düz tavan altı hedef", "Yok / basit", "Akülü makaslı (boom değil)", "Gerekmez"],
                    ],
                },
            },
            {
                baslik: "Enerji kesme ve izinli çalışmanın önceliği",
                paragraflar: [
                    "Proses tesisinde bir ekipmanın durgun görünmesi, durduğu anlamına gelmez; bant, helezon ve fan grupları merkezi bir panelden devreye alınabilir. Bu yüzden çalışma öncesinde tek bir kuraldan hiç vazgeçmeyiz: çalışılacak ekipmanın enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır.",
                    "Sıcak hatlarda ikinci bir başlık devreye girer: tesisin kendi izin prosedürü. Hattın basıncı, sıcaklığı ve gerekiyorsa boşaltılmış olması bu prosedürle belgelenir. Bu iki başlık netleştiğinde saha çalışması hızlı ilerler; belirsizlik sahada değil plan aşamasında tüketilmiş olur.",
                ],
            },
            {
                baslik: "Uzun uzanmalı işlerde rüzgâr ve zemin birlikte değerlendirilir",
                paragraflar: [
                    "Eklemli platform yatay uzanma yaptığında rüzgârın etkisi makaslı platforma göre daha belirgindir; bom ne kadar açılırsa devrilme momenti o kadar artar ve üretici tarafından belirlenen rüzgâr sınırı buna göre düşer. Bu yüzden yüksek uzanma gerektiren işlerde hava durumu programa dahil edilir.",
                    "Zemin tarafında ise makinenin duracağı noktanın taşıma gücü kritik önemdedir; devrilme koridorunun dışında kalan bir konum seçilse bile o noktanın zemini yumuşaksa destek ayağı gömülebilir. Şüpheli zeminde makine indirmeyiz; bu kararı sahada, indirme öncesinde veririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silomuzun dışındaki merdiven ve sahanlıklarda iş var; makine siloya yanaşmalı mı?",
                cevap:
                    "Yanaşmasını tercih etmeyiz. Doğru yöntem, devrilme koridorunun dışında kalan sağlam bir noktaya konumlanıp mesafeyi bomla kapatmaktır. Gereken uzanma mesafesini belirlemek için hedef noktanın zeminden kotu, silo ile makinenin durabileceği en yakın sağlam zemin arasındaki mesafe ve aradaki engel bilgisini isteriz; bu üç bilgiyle sınıf seçimini tek turda yaparız.",
            },
            {
                soru: "Bant hattımızda çalışacağız; tesisin tamamı durmalı mı?",
                cevap:
                    "Hayır, yalnızca çalıştığımız hat durur. Ancak o hattın durması gerçek olmalıdır: enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Diğer hatlar üretime devam edebilir. Hangi hattın hangi saatte durabileceğini önceden konuşup işi o pencereye yerleştiririz.",
            },
            {
                soru: "Buhar hattımızın yalıtımı yenilenecek; hattın soğumasını beklemeli miyiz?",
                cevap:
                    "Bu kararı tesisin kendi izin prosedürü verir, biz o prosedüre uyarız. Genel kural, hattın basıncı, sıcaklığı ve gerekiyorsa boşaltılmış olması belgelenmeden sıcak hat çevresinde çalışılmamasıdır. İşi ikiye bölmek çoğu zaman en pratik yoldur: hazırlık kalemleri daha esnek bir tarihe alınır, doğrudan hat üstündeki uygulama izinli pencereye yazılır.",
            },
            {
                soru: "Çatıdaki filtre ve kanal işlerinde rüzgâr sizi durdurur mu?",
                cevap:
                    "Durdurur; her makinenin üretici tarafından belirlenmiş bir rüzgâr sınırı vardır ve bom ne kadar açılırsa bu sınır o kadar erken devreye girer. Bu belirsizliği yönetmenin yolu, aynı programa hava bağımlı ve hava bağımsız kalemleri birlikte yazmaktır; rüzgârlı bir sabahta çatı işi duruyorken ekip hol içi kalemlere geçer.",
            },
            {
                soru: "Boom mu, makaslı platform mu; hangisi bizim işimize uyar?",
                cevap:
                    "Bu, hedefe nasıl ulaşılacağına bağlıdır. Hedef tam makinenin üstündeyse ve yatay bir engel yoksa akülü makaslı platform daha ekonomik ve hızlıdır. Aradan bir kule, boru hattı veya istif geçiyorsa boom gündeme gelir. İş tanımınızı ve hedef noktanın konumunu paylaşın, iki seçeneğin hesabını yan yana çıkaralım.",
            },
            {
                soru: "Proses tesisinde makine uzun süre kalacak; bakımı nasıl yürüyor?",
                cevap:
                    "Uzun kalışlarda bakım bizim yükümüzdür ve programa dahildir. Tozlu ve kaba ortamda çalışan bir ünitede yağlama ve filtre kontrol aralığını standarttan kısa tutarız; bu ziyaretler kiralama süresinden düşülmez. Sizden istediğimiz, makinenin gece park edeceği düz ve korunaklı bir alan ile akülü ünite kalacaksa erişilebilir bir enerji hattıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’un tarım sanayii tesislerinde silo, kule ve proses hattı yapılarının bulunması kamuya açık genel bilgidir; enerji kesme, izinli çalışma ve rüzgâr/zemin değerlendirmesi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Soğuk Depo ve Gıda Üretim Hollerinde İç Mekân Platform Kiralama",
        giris:
            "Afyonkarahisar’daki gıda ve tarım sanayii tesislerinin çoğunda yüksekte çalışma ihtiyacı, dış cephede değil kapalı hacimde ortaya çıkar: soğuk hava deposunun evaporatör hattı, üretim holünün tavan aydınlatması, tasnif bandının üstündeki sensörler, depo raflarının üst kotu. Bu hacimlerin ortak özelliği, dışarıdaki bir işten farklı olarak egzoz, gürültü ve iz bırakma gibi kısıtların devreye girmesidir — kapalı bir hacimde dizel bir makine çalıştırmak mümkün değildir, zemin çoğu zaman hassastır ve bazı hacimlerde gıda hijyeni kuralları geçerlidir. İç mekân platform hizmetimiz bu kısıtları baştan hesaba katar: akülü, egzozsuz, iz bırakmayan lastikli sınıflar seçilir ve makine üretim hacmine girmeden önce ayrıca hazırlanır. Bu sayfada soğuk depo, üretim holü ve genel depo hacimlerinde iç mekân platform seçimini neyin belirlediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Soğuk hacimde çalışmanın ekipmana etkisi",
                metin:
                    "Düşük sıcaklıklı bir hacimde platformun davranışı normal ortamdakinden farklıdır. Hidrolik akışkan soğukta koyulaşır; hareketler yavaşlar ve ünite ısınana kadar tepki süresi uzar. Bu yüzden soğuk hacme girmeden önce makine kısa bir çalıştırma turuyla hazırlanır. Akü performansı da soğukta düşer; uzun iş listelerinde ara şarj penceresi plana baştan yazılır ve makine soğuk hacimde saatlerce bekletilmez, iş bloklara bölünür.",
            },
            {
                baslik: "Üretim holünde egzozsuz ve iz bırakmayan çalışma",
                metin:
                    "Kapalı üretim hollerinde dizel makine kullanılamaz; akülü modeller zorunludur ve bu tercih yalnızca hava kalitesi için değil, gürültü seviyesi için de geçerlidir. Zemin perdahlı beton veya epoksi kaplıysa standart siyah lastik iz bırakabilir; bu durumda iz bırakmayan lastikli modeller tercih edilir. Forklift trafiği olan hollerde çalışma alanı bariyerle ayrılır ve iki makinenin güzergâhı önceden netleştirilir.",
            },
            {
                baslik: "Gıda hacminde hijyen hazırlığı",
                metin:
                    "Üretim veya paketleme hattının üstünde çalışılacaksa, çalışma açık ürünün üstünde serbest parça bırakılmayacak biçimde planlanır: el aletleri bağlanır, sepet altına toplama tablası konur, makinenin tekerlek yüzeyleri girişte silinir. Hat çalışırken bu bölgede iş yapılmaz; uygulama planlı temizlik duruşuna yazılır veya zorunlu hâllerde hattın ilgili kesimi geçici olarak örtülür.",
            },
            {
                baslik: "Depo raf sistemlerinde koridor ve dönüş payı",
                metin:
                    "Raflı depolarda makine sınıfını belirleyen çoğu zaman yükseklik değil koridor genişliğidir; makinenin ilerleyeceği hat boyunca dönüş yarıçapı raf aralığına sığmalıdır. Rafın kendi yüksekliği de hesaba katılmalı, makine raf arasına girecekse şase genişliği koridor ölçüsüyle karşılaştırılmalıdır. Bu ölçüler netleşmeden sahaya makine gönderilmez.",
            },
            {
                baslik: "Kapalı hacimde planlı duruşa göre programlama",
                metin:
                    "Gıda ve soğuk depo tesislerinin ortak sorunu, hattın gerçekten durduğu saatin çok kısa olmasıdır. Bu yüzden yıllık bakım kalemlerini tesisin kendi planlı temizlik ve dezenfeksiyon duruşlarına yazmayı öneririz — bu duruşlar zaten takvimde vardır ve iş oraya yerleştiğinde ek üretim kaybı doğmaz. Duruşun süresi kısa olduğunda liste parçalara bölünür ve birden fazla duruşa yayılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapalı hacim tipine göre platform eşleşmesi",
                paragraflar: [
                    "Soğuk depo, üretim holü ve raflı depo farklı kısıtlar taşır. Aşağıdaki tablo hacim tipine göre belirleyici koşulu ve önerilen sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Belirleyici koşul", "Ek kısıt", "Önerilen sınıf"],
                    satirlar: [
                        ["Soğuk hava deposu", "Düşük sıcaklık", "Hidrolik koyulaşması", "Akülü, ısıtma turu ile"],
                        ["Üretim holü", "Egzoz yasağı", "Perdahlı zemin", "İz bırakmayan akülü"],
                        ["Gıda paketleme hattı", "Açık ürün hijyeni", "Toplama tablası gerekir", "Akülü, hazırlıklı"],
                        ["Raflı genel depo", "Koridor genişliği", "Forklift trafiği", "Kompakt akülü makaslı"],
                        ["İdari / ofis bölümü", "Standart koşul", "Yok", "Standart akülü"],
                    ],
                },
            },
            {
                baslik: "Soğuktan sıcağa geçişte yoğuşma riski",
                paragraflar: [
                    "Soğuk hacimden sıcak ortama çıkan makinenin yüzeylerinde ve kumanda bölgesinde nem toplanır; bu nem kurutulmadan makine tekrar içeri alınırsa donma ve elektriksel arıza riski doğar. Uygulamamız, çıkış sonrası bekleme ve kurulama adımını iş planına dahil etmektir.",
                    "Bu adım birkaç dakikalık bir alışkanlıktır ama program ortasında yaşanan bir arızanın maliyetini tamamen ortadan kaldırır. Uzun süre soğuk-sıcak geçişi yapan işlerde bu adım her geçişte tekrarlanır, tek seferlik bir önlem sayılmaz.",
                ],
            },
            {
                baslik: "İç mekân işlerinde teslim ve alan kontrolü",
                paragraflar: [
                    "Kapalı hacimde iş bittiğinde teslim, sadece makinenin çıkışı değildir. Kullanılan tüm el aletleri sayılarak toplanır, sepet altındaki tabla kaldırılır, makinenin geçtiği güzergâh gözden geçirilir ve alan işletmenin kendi temizlik prosedürüne göre yeniden temizlenmeye hazır hâlde bırakılır.",
                    "Gıda hacimlerinde bu teslim bir tutanağa yazılır; çalışılan bölüm, uygulanan önlemler ve teslim durumu kayda geçer. Bu belge işletmenin kendi denetim sistemine eklenebilir ve denetim anında en çok işe yarayan kayıttır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Soğuk hava deposunun içinde platform çalıştırılabilir mi?",
                cevap:
                    "Çalıştırılabilir; bu hacimler bizim için alışılmış bir çalışma ortamıdır. Makine soğuğa girmeden kısa bir çalıştırma turuyla ısıtılır, saatlerce bekletilmez ve dışarı alındığında yüzeylerde yoğuşan nem kurutulmadan tekrar içeri sokulmaz. Depo tarafında sizden beklediğimiz, çalışılacak bölümün ürünün korunmasına engel olmayacak biçimde boşaltılmış olmasıdır.",
            },
            {
                soru: "Üretim holümüzde dizel makine kullanabilir miyiz, daha hızlı olmaz mı?",
                cevap:
                    "Kapalı üretim hollerinde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller zorunludur. Bu, yalnızca hava kalitesi için değil gürültü seviyesi için de geçerlidir. Akü kapasitesi ve şarj noktası teslimat öncesi planlanırsa hız kaybı pratikte hissedilmez.",
            },
            {
                soru: "Tasnif hattımız çalışırken üstünde iş yapılabilir mi?",
                cevap:
                    "En doğru yol hattın durmasıdır ve planlı temizlik duruşunuz varsa iş oraya yazıldığında ek maliyet doğmaz. Zorunlu hâllerde çalıştığımız kesitin üstü örtülür, sepet altına toplama tablası konur, el aletleri bağlanır ve alan bariyerlenir; ancak bu riski azaltan bir düzendir, ortadan kaldıran değil.",
            },
            {
                soru: "Raflı depomuzda koridorlar dar; makine geçebilir mi?",
                cevap:
                    "Belirleyici olan yükseklik değil koridor genişliği ve dönüş yarıçapıdır. Rafın kendi yüksekliği de hesaba katılmalı, makine raf arasına girecekse şase genişliği koridor ölçüsüyle karşılaştırılmalıdır. Koridor genişliğini ve en üst raf kotunu bildirirseniz sınıf seçimini önceden netleştiririz.",
            },
            {
                soru: "Zeminimiz epoksi kaplı, tekerlek izi bırakır mı?",
                cevap:
                    "Standart siyah lastik bu tür zeminlerde iz bırakabilir; bu yüzden perdahlı beton veya epoksi kaplı zeminlerde iz bırakmayan (beyaz dolgu) lastikli modeller tercih edilir. Zemin tipinizi bize bildirirseniz doğru lastik seçimini önceden yaparız.",
            },
            {
                soru: "İç mekân işinde teslim nasıl yapılıyor, bir kayıt tutuyor musunuz?",
                cevap:
                    "Evet. İş bittiğinde kullanılan tüm el aletleri sayılarak toplanır, sepet altındaki tabla kaldırılır ve alan sizin kendi temizlik prosedürünüze göre teslim edilir. Gıda hacimlerinde çalışılan bölüm, uygulanan önlemler ve teslim durumu tutanağa yazılır; bu belgeyi kendi kayıt sisteminize ekleyebilirsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’daki gıda üretim ve soğuk depo tesislerinin kapalı hacim niteliği kamuya açık genel bilgidir; soğuk hacim hazırlığı, iz bırakmama ve hijyen teslim düzeni firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Tarım Sanayii Tesislerinde Çelik Konstrüksiyon Montaj Platformu Kiralama",
        giris:
            "Afyonkarahisar’ın tarım sanayii kesiminde yeni bir silo grubu, hangar tipi depo veya proses hattı kurulurken, çelik konstrüksiyon montajı işin en uzun süren aşamalarından biridir ve bu aşamada yüksekte çalışma ihtiyacı bakımdan farklı bir karakter taşır: burada tekrarlayan küçük bir bakım kalemi değil, art arda dizilen kaynak, cıvatalama ve panel montaj noktaları söz konusudur. Montaj platformu bu yüzden tek bir noktada değil, hattın uzunluğu boyunca ilerleyerek çalışır — bir gün içinde onlarca kirişin veya panel biriminin sırasıyla monte edilmesi gerekebilir. Bu tempoda makinenin doğru sınıfı, sadece erişeceği yükseklik değil, aynı gün içinde kaç noktaya taşınacağı ve zeminin bu hareketi kaç kez kaldırabileceğiyle belirlenir. Bu sayfada tarım sanayii tesislerinde çelik konstrüksiyon montajı sırasında platform seçimini neyin belirlediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "İnşaat aşamasında zeminin henüz sabit olmaması",
                metin:
                    "Yeni kurulan bir tesiste montaj döneminde zemin genellikle nihai hâlini almamıştır: beton henüz dökülmemiş olabilir, dolgu tamamlanmamış olabilir, saha malzeme yığınlarıyla doludur. Bu koşulda standart iç mekân makinesi yerine kaba zeminde ilerleyebilen, geniş tabanlı bir sınıf tercih edilir. Zemin durumu her sabah değişebileceği için, makinenin duracağı noktalar günlük olarak kontrol edilir ve şüpheli alanlara girilmez.",
            },
            {
                baslik: "Kaynak ve cıvatalama noktalarında sıralı ilerleme",
                metin:
                    "Çelik konstrüksiyon montajında iş, hattın uzunluğu boyunca sıralı noktalarda tekrarlanır: bir kiriş bağlantısı tamamlandığında makine bir sonraki noktaya taşınır. Bu tempoda önemli olan makinenin yükseklik kapasitesi kadar konumlanma hızıdır; sık taşınan bir makinede yavaş konumlanma toplam montaj süresini belirgin biçimde uzatır. Bu yüzden montaj işlerinde hızlı konumlanan ve geniş çalışma alanına sahip sınıflar önceliklidir.",
            },
            {
                baslik: "Kaynak işlerinde yangın ve kıvılcım önlemi",
                metin:
                    "Kaynak içeren montaj kalemlerinde kıvılcımın makinenin hidrolik hatlarına veya lastiklerine sıçraması ayrı bir risktir; bu risk özellikle yakın mesafede uzun süre çalışılan noktalarda artar. Kaynak yapılan bölgede yanıcı malzeme bulunmaması ve gerekiyorsa yangın söndürme ekipmanının yakında hazır tutulması, çalışma öncesinde kontrol edilen kalemlerdendir. Bu kontrol saha ekibiyle birlikte yapılır.",
            },
            {
                baslik: "Panel ve cephe montajında rüzgâr ve parça ağırlığı",
                metin:
                    "Cephe ve çatı panellerinin montajı, geniş yüzeyli ve göreceli hafif parçaların yüksekte taşınmasını gerektirir; bu parçalar rüzgârdan makaslı bir işten daha fazla etkilenir. Rüzgâr sınırı aşıldığında panel montajı durur, ancak aynı programdaki iç kalemler — kaynak, cıvatalama, iç aksam — sürdürülebilir. Bu yüzden montaj programı hava bağımlı ve hava bağımsız kalemler olarak ikiye ayrılarak kurulur.",
            },
            {
                baslik: "Uzun montaj programında makinenin sahada kalması",
                metin:
                    "Bir montaj programı genellikle günler, bazen haftalar sürer ve makine bu süre boyunca sahada kalır. Uzun kalışta iki konu öne çıkar: bakım aralığının inşaat tozuna göre kısaltılması ve arıza hâlinde ikame süresinin sözleşmede baştan yazılması. Şantiyede duran makine, ilerlemeyen montaj programı demektir; bu yüzden ikame süresi netleştirilmeden uzun program başlatılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşamasına göre platform seçim tablosu",
                paragraflar: [
                    "Çelik konstrüksiyon montajının farklı aşamaları farklı makine özellikleri gerektirir. Aşağıdaki tablo montaj aşamasını, belirleyici kısıtı ve önerilen sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Montaj aşaması", "Belirleyici kısıt", "Ek risk", "Önerilen sınıf"],
                    satirlar: [
                        ["Temel/iskelet montajı", "Sabitlenmemiş zemin", "Devrilme", "Geniş tabanlı, kaba zemin"],
                        ["Kaynak-cıvata noktaları", "Sık konumlanma", "Kıvılcım", "Hızlı konumlanan bomlu"],
                        ["Cephe/çatı paneli", "Rüzgâr", "Parça devrilmesi", "Rüzgâr takipli, geniş yüzey uygun"],
                        ["İç aksam-tesisat", "Kapalı hacim (kısmen)", "Kısıtlı egzoz", "Akülü, iz bırakmayan"],
                        ["Uzun program bütünü", "Toz, arıza riski", "Duruş maliyeti", "İkame süreli sözleşme"],
                    ],
                },
            },
            {
                baslik: "Montaj programını hava koşuluna göre bölmek",
                paragraflar: [
                    "İnşaat aşamasındaki bir tesiste hava koşulu, bakım işinden farklı olarak montaj sırasını doğrudan etkiler. Rüzgârlı bir günde panel montajı durdurulabilir ama aynı ekip iç aksam veya kaynak noktalarına geçerek günü verimli kullanabilir. Bu esneklik ancak program baştan iki kategoriye ayrılırsa mümkün olur: hava bağımlı kalemler ve hava bağımsız kalemler.",
                    "Bu ayrımı montaj planı hazırlanırken birlikte yaparız; her kalemin hangi kategoriye girdiğini işaretler, olumsuz hava günlerinde ekibin hangi işe geçeceğini önceden belirleriz. Böylece rüzgârlı bir gün boşa geçmez, yalnızca sıra değişir.",
                ],
            },
            {
                baslik: "Toz ve kaba ortamda bakım aralığının kısaltılması",
                paragraflar: [
                    "İnşaat sahasında toz yükü, tamamlanmış bir tesisteki normal çalışma ortamından belirgin biçimde yüksektir; bu yüzden yağlama ve filtre kontrol aralığını standarttan kısaltırız. Bu ziyaretler kiralama süresinden düşülmez ve makinenin uzun program boyunca güvenilir çalışmasını sağlar.",
                    "Arıza hâlinde ikame süresi sözleşmede baştan yazılır, çünkü şantiyede duran makine ilerlemeyen program demektir. Uzun montaj programı başlamadan önce bu maddeyi netleştirmek, sonradan yaşanan gecikme tartışmalarının önüne geçer.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamızın zemini henüz betonlanmadı; makine bu zeminde çalışabilir mi?",
                cevap:
                    "Çalışabilir, ancak sınıf seçimi buna göre yapılır. Sabitlenmemiş zeminde geniş tabanlı ve kaba zeminde ilerleyebilen bir sınıf tercih edilir; makinenin duracağı noktalar her sabah kontrol edilir ve şüpheli alanlara girilmez. Sahanın güncel durumunu birkaç fotoğrafla paylaşırsanız uygun sınıfı önceden belirleriz.",
            },
            {
                soru: "Kaynak işlerinde kıvılcım makineye zarar verir mi?",
                cevap:
                    "Kıvılcımın hidrolik hatlara veya lastiklere sıçraması gerçek bir risktir; bu yüzden kaynak yapılan bölgede yanıcı malzeme bulunmaması ve gerekiyorsa yangın söndürme ekipmanının hazır tutulması çalışma öncesinde kontrol edilir. Uzun süre aynı noktada kaynak yapılacaksa bu kontrolü saha ekibinizle birlikte tekrar gözden geçiririz.",
            },
            {
                soru: "Cephe panel montajında rüzgâr işi ne kadar etkiler?",
                cevap:
                    "Panel montajı geniş yüzeyli ve göreceli hafif parça taşıdığı için rüzgârdan diğer kalemlere göre daha fazla etkilenir; rüzgâr sınırı aşıldığında panel montajı durur. Ancak programı hava bağımlı ve hava bağımsız kalemler olarak ikiye ayırdığımız için, rüzgârlı bir günde ekip iç aksam veya kaynak noktalarına geçerek çalışmaya devam eder.",
            },
            {
                soru: "Montaj işimiz haftalarca sürecek; makine bakımı nasıl yürütülür?",
                cevap:
                    "Uzun kalışlarda bakım bizim yükümüzdür ve programa dahildir. İnşaat sahasındaki toz yükü nedeniyle yağlama ve filtre kontrol aralığını standarttan kısaltırız; bu ziyaretler kiralama süresinden düşülmez. Arıza hâlinde ikame süresi sözleşmede baştan yazılır.",
            },
            {
                soru: "Aynı gün içinde birçok noktaya taşınacak bir montaj programımız var; hangi sınıf daha uygun?",
                cevap:
                    "Sık taşınan bir montaj programında konumlanma hızı, yükseklik kapasitesi kadar önemlidir; yavaş konumlanan bir makine toplam montaj süresini belirgin biçimde uzatır. Bu tempoda hızlı konumlanan ve geniş çalışma alanına sahip bomlu sınıfları öneririz. Günlük nokta sayınızı ve mesafeleri paylaşırsanız uygun sınıfı birlikte belirleriz.",
            },
            {
                soru: "İç aksam ve tesisat montajını da aynı programa ekleyebilir miyiz?",
                cevap:
                    "Evet, bu kalemler genellikle kapalı hacimde yapılır ve akülü, iz bırakmayan bir sınıf gerektirir. İç aksam işlerini, dış cephe ve iskelet işlerinden ayrı bir kategori olarak planlarız; böylece hava koşulu dış işleri etkilese bile iç aksam çalışması kesintisiz devam edebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyonkarahisar’da yeni tarım sanayii tesislerinin (silo, hangar tipi depo, proses hattı) çelik konstrüksiyon yöntemiyle kurulması kamuya açık genel bilgidir; zemin değerlendirmesi, hava bağımlı/bağımsız program ayrımı ve toz ortamı bakımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarımsal Saha ve Silo Tesislerinde Platform Kiralama Hizmeti",
        giris:
            "Afyonkarahisar’ın tarım sanayii ekonomisinde silo, tek bir yapı tipi değildir: çelik gövdeli hücreli silolar, betonarme düz depo hücreleri, yem karma ünitelerinin küçük ölçekli hammadde siloları ve tarla kenarındaki geçici depolama üniteleri aynı il sınırları içinde bir arada bulunur. Bu çeşitlilik, platform kiralama hizmetinin de tek bir kalıba göre değil, silo tipine göre şekillenmesini gerektirir — çelik hücreli bir siloda üst kapak erişimi öncelikliyken, düz depo hücresinde çatı ve mahya havalandırması öncelikli olabilir. Ortak olan tek şey, silo dolum-boşaltım döngüsünün hasat takvimine bağlı olmasıdır: ürün doluyken bakım yapılmaz, boşaldığında bakım penceresi açılır ve bu pencere kısa sürer. Bu sayfada tarımsal saha ve silo tesislerinde platform kiralama hizmetimizin silo tipine göre nasıl şekillendiğini ve hasat takvimiyle nasıl senkronize edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Çelik hücreli silolarda üst kapak ve merdiven erişimi",
                metin:
                    "Çelik gövdeli hücreli silolarda üst kapak, seviye ölçüm sensörü ve merdiven-sahanlık korkulukları düzenli kontrol ister. Bu noktalara sabit merdivenle çıkmak mümkündür ama elde malzeme ve aletle iş yapmak farklı bir konudur. Makine, silonun devrilme koridorunun dışında kalan sağlam bir noktaya konumlanır ve mesafe bomla kapatılır; silo dibine yanaşmak tercih edilmez.",
            },
            {
                baslik: "Düz depo hücrelerinde çatı ve havalandırma bakımı",
                metin:
                    "Hasat sonrası ürünün bekletildiği düz depo hücrelerinde iş kalemleri çatı sacındaki delinme ve aşınmanın onarımı, mahya havalandırmasının açılıp kapanan kanatları ve kuş-kemirgen girişini engelleyen tel örgülerin yenilenmesidir. Bu hacimlerde ürün doluyken çalışmak istenmez; yığın yüzeyi düz görünse de üzerine yük konulamaz. Depo işleri bu yüzden boşalma dönemine yazılır.",
            },
            {
                baslik: "Yem karma ünitelerinin küçük ölçekli silolarında dikey ekipman",
                metin:
                    "Yem hazırlayan ünitelerde hammadde silolarının üst kapakları, elevatör kovalı yükselticilerin gövde bağlantıları ve helezon aktarma hatlarının askı noktaları yerden erişilemeyen kotlardadır. Bu ekipmanların enerjisi kesilmeden ve helezon döndürülmeden çalışılmaz; bu teyit çalışma öncesinde saha sorumlusundan yazılı olarak alınır.",
            },
            {
                baslik: "Tarla kenarındaki geçici depolama ünitelerinde zemin",
                metin:
                    "Bazı işletmeler hasat döneminde tarla kenarına geçici silo veya branda örtülü yığın kurar; bu noktalara erişim, sabit bir tesisten farklı olarak toprak zemin ve mevsimsel değişkenlik içerir. Sulama ve yağış sonrası zeminin taşıma gücü düşebilir; şüpheli zeminde makine indirmeyiz ve çalışma kuru pencereye kaydırılır.",
            },
            {
                baslik: "Hasat takvimiyle senkronize bakım penceresi",
                metin:
                    "Silo bakımının en belirleyici kısıtı, ürünün silo içinde olup olmadığıdır. Hasat ve ürün girişinin sürdüğü haftalarda silo bakımı yapılmaz; ürün sevk edildiğinde ve hacim boşaldığında pencere açılır ve bu pencere genellikle birkaç haftaya sığar. Bu yüzden bakım listesini hasat tahmininize göre önceden kurmayı öneririz; liste hazır olan işletme sıranın önüne geçer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo tipine göre platform ihtiyacı",
                paragraflar: [
                    "Afyon’daki silo ve tarımsal saha tesisleri birbirinden farklı erişim ihtiyacı taşır. Aşağıdaki tablo silo tipini, baskın iş kalemini ve önerilen sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Silo tipi", "Baskın iş kalemi", "Zemin/erişim kısıtı", "Önerilen sınıf"],
                    satirlar: [
                        ["Çelik hücreli silo", "Üst kapak, sensör, korkuluk", "Devrilme koridoru", "Uzun uzanmalı bomlu"],
                        ["Betonarme düz depo", "Çatı sacı, mahya havalandırma", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Yem ünitesi silosu", "Kapak, elevatör gövdesi", "Dikey ekipman, enerji kesme", "Kompakt eklemli bomlu"],
                        ["Tarla kenarı geçici ünite", "Örtü, çevre kontrolü", "Mevsimsel zemin", "Paletli veya 4x4"],
                        ["Sevkiyat/kantar önü", "Aydınlatma, pano", "Yoğun araç trafiği", "Hızlı toplanan kompakt"],
                    ],
                },
            },
            {
                baslik: "Hasat takvimi bakım penceresini nasıl belirler",
                paragraflar: [
                    "Tarım sanayiinde yılın ritmi hasada göre kurulur ve bu ritim bakım işlerini ikiye ayırır. Hasadın ve ürün girişinin sürdüğü haftalarda siloya müdahale güvenli değildir ve işletmeye zaman kaybettirir. Ürünün sevk edildiği ve hacimlerin boşaldığı dönem ise tam tersidir: çatı, kapak, havalandırma ve ekipman bakımının hepsi aynı anda mümkün hâle gelir.",
                    "Bu ikili yapının pratik sonucu, aynı takvimi paylaşan işletmelerin taleplerinin de birkaç haftaya yığılmasıdır. Bu yığılmayı yönetmenin tek yolu tarihi erken kilitlemektir; elimizde bir liste varsa hangi silonun kaç günde bitirileceğini baştan yazarız.",
                ],
            },
            {
                baslik: "Silo sahasında teklif için gereken bilgi",
                paragraflar: [
                    "Silo sahasında teklif vermeden önce bize gereken çekirdek bilgi şudur: silo tipi (çelik hücreli, betonarme, yem ünitesi), hedef noktanın zeminden kotu, silo ile makinenin durabileceği en yakın sağlam zemin arasındaki mesafe ve çalışma anında silonun dolu mu boş mu olacağı.",
                    "Bu dört başlık netleştiğinde teklif tek turda çıkar ve sahada değişmez. Eksik olduğunda ya sahaya uygun olmayan bir makine gider ya da güvenli tarafta kalmak için gereğinden büyük bir sınıf teklif edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silomuz henüz boşalmadı; bakım için beklemeli miyiz?",
                cevap:
                    "Beklemenizi öneririz. Ürün doluyken silo içine müdahale güvenli değildir ve düşen küçük bir parça partinin tamamını şüpheli hâle getirir. Acil bir sızıntı varsa dışarıdan sınırlı bir müdahale mümkündür; kalıcı onarım yine boşalma dönemine yazılır. Hasat tahmininizi paylaşırsanız bakım tarihini birlikte planlarız.",
            },
            {
                soru: "Çelik hücreli silomuzun üst kapağında iş var; makine silo dibine yanaşabilir mi?",
                cevap:
                    "Yanaşmasını tercih etmeyiz. Doğru yöntem, devrilme koridorunun dışında kalan sağlam bir noktaya konumlanıp mesafeyi bomla kapatmaktır. Hedef noktanın zeminden kotu ve silo ile makinenin durabileceği en yakın sağlam zemin arasındaki mesafeyi paylaşırsanız sınıf seçimini önceden netleştiririz.",
            },
            {
                soru: "Yem ünitemizin siloları çalışırken bakım yapılabilir mi?",
                cevap:
                    "Yapılmaz. Elevatör kovalı yükseltici ve helezon aktarıcı uzaktan devreye alınabilen ekipmanlardır. Çalışılacak hattın enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Ünitenin tamamını durdurmanız gerekmez; yalnızca çalıştığımız hat durur.",
            },
            {
                soru: "Tarla kenarına kurduğumuz geçici siloda çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, ancak zemin durumu belirleyicidir. Sulama ve yağış sonrası taşıma gücü düşebileceği için şüpheli zeminde makine indirmeyiz; çalışma kuru pencereye kaydırılır. Sahanın güncel durumunu birkaç fotoğrafla paylaşırsanız uygun sınıfı önceden belirleriz.",
            },
            {
                soru: "İlçemizde birden fazla silo tesisi var; hepsini tek programda toplayabilir miyiz?",
                cevap:
                    "Evet, bu ekonomik açıdan en verimli modeldir. Makine bir kez ilçeye indirilir, silo tesisleri arasında sırayla dolaşır ve nakliye kalemi katılan işletmeler arasında bölünür. Tarihinizi hattın kurulduğu aşamada bildirirseniz sırayı ve daha düşük birim maliyeti alırsınız.",
            },
            {
                soru: "Bakım listemizi ne zaman planlamalıyız?",
                cevap:
                    "Ürün girişinin durduğu ve hacimlerin boşaldığı aralık doğru cevaptır, ama bu aralığı bölgedeki diğer silo işletmeleriyle paylaştığınızı da hesaba katmak gerekir. Kampanya bitişinden önce tarihinizi bildirirseniz makine, silo boşaldığı gün sahada olur; sonradan çıkarılan listeler sıraya en arkadan girer.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’da çelik hücreli, betonarme ve yem ünitesi tipi siloların bir arada bulunması kamuya açık genel bilgidir; enerji kesme, zemin teyidi ve hasat takvimine göre pencere kurma firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Tarım ve Gıda Tesislerinde Enerji, Aydınlatma ve Elektrik Hattı Bakım Platformu",
        giris:
            "Afyonkarahisar’ın tarım sanayii tesislerinde enerji ve aydınlatma bakımı, tek bir armatür değişiminden ibaret değildir; üretim holünün genel aydınlatması, sulama pompalarının pano bağlantıları, tarla kenarındaki elektrik direkleri, soğuk depo dış üniteleri ve sevkiyat rampasının dış aydınlatması aynı işletmenin bakım listesinde bir arada yer alabilir. Bu kalemlerin ortak özelliği, çoğu zaman tekil bir arıza olarak değil düzenli bir tur olarak ele alınması gerektiğidir — bir armatür için ayrı çağrı yapmak, aynı bölgedeki birkaç kalemi tek seferde toplamaktan çok daha pahalıdır. Enerji ve aydınlatma bakım hizmetimiz bu yüzden liste bazlı çalışır: işletmenin enerji hattı, aydınlatma noktaları ve elektrik ekipmanı tek bir turda planlanır, enerji kesme gereken kalemler ayrılır ve tur, hem içeride hem dışarıda ilerleyebilecek bir sıraya göre kurulur. Bu sayfada tarım ve gıda tesislerinde enerji-aydınlatma bakımını neyin belirlediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Üretim holünde genel aydınlatma turu",
                metin:
                    "Üretim holündeki aydınlatma armatürleri genellikle tavana asılı ve düzenli aralıklarla dizilmiştir; tek bir armatür arızalandığında oraya özel bir sevkiyat yapmak yerine, aynı turda tüm armatürlerin görsel kontrolünü de yaparız. Bu, işletmenin gelecekte ayrı bir çağrı yapma ihtiyacını azaltır. Hol çalışırken bu tur planlanabilir; enerji kesme gerektirmeyen kalemler üretim sürerken de yapılabilir.",
            },
            {
                baslik: "Sulama ve pano bağlantılarında enerji kesme zorunluluğu",
                metin:
                    "Tarla ve bahçe altyapısındaki sulama pompalarının pano bağlantıları, elektrik direği üzerindeki hat kontrolleri gibi kalemler enerjili çalışma riskini içerir. Bu kalemlerde enerji kesme, üzerinde pazarlık yapmadığımız tek kuraldır; şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Sulama programı bize önceden bildirilmeli, çalışma kuru ve enerjisiz pencereye yazılmalıdır.",
            },
            {
                baslik: "Soğuk depo dış ünitelerinde servis erişimi",
                metin:
                    "Soğuk depoların dış ünitesi genellikle çatı kotunda veya tesisin dış cephesinde durur ve bu üniteye erişim, iç hacimden farklı olarak dış hava koşullarına açıktır. Fan ve kompresör kontrolü, elektrik bağlantı kutusu kontrolü bu ünitenin rutin bakım kalemleridir. Dış ünite çalışırken enerjisi kesilmeden müdahale edilmez; kesinti süresi soğuk hacim içindeki ürünü etkilemeyecek kısa bir pencereye yazılır.",
            },
            {
                baslik: "Sevkiyat rampası ve dış aydınlatma direklerinde trafik yönetimi",
                metin:
                    "Tesislerin dışa bakan yüzünde dış aydınlatma direkleri ve rampa üstü aydınlatma, araç trafiğinin en yoğun olduğu bölgede durur. Bu bölgede çalışan bir makine hem kendisi risk altındadır hem operasyonu kilitler. Çözüm kapı bazlı sıralamadır: hangi kapının hangi saatte boşalacağı önceden alınır ve makine kapıdan kapıya bu sıraya göre ilerler.",
            },
            {
                baslik: "Tek liste, tek tur: bakım ekonomisi",
                metin:
                    "Enerji ve aydınlatma kalemlerinin dağınık biçimde tek tek çağrılması, her seferinde ayrı nakliye ve kurulum maliyeti doğurur. Bunun yerine işletmenin tüm enerji-aydınlatma listesini yıllık bir plana yazmasını öneririz; liste tek turda, gerektiğinde birden fazla güne yayılarak tamamlanır ve zaten sahada bulunan makineyle ek kalemler de aynı gün kapanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji-aydınlatma kalemlerine göre çalışma koşulu",
                paragraflar: [
                    "Tarım ve gıda tesislerinde sık çalıştığımız enerji-aydınlatma kalemlerini, enerji kesme gerekliliğini ve uygun pencereyi aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Konum", "Enerji kesme", "Uygun pencere"],
                    satirlar: [
                        ["Hol genel aydınlatma", "Üretim holü tavanı", "Gerekmez (görsel kontrol)", "Mesai içi"],
                        ["Sulama pompa panosu", "Tarla/bahçe altyapısı", "Zorunlu", "Sulama dışı, kuru gün"],
                        ["Soğuk depo dış ünitesi", "Çatı/dış cephe", "Zorunlu", "Kısa kesinti penceresi"],
                        ["Rampa/dış aydınlatma direği", "Sevkiyat cephesi", "Zorunlu", "Kapı bazlı sıralama"],
                        ["Elektrik direği/hat kontrolü", "Saha dışı hat", "Zorunlu", "Tesis izin prosedürü"],
                    ],
                },
            },
            {
                baslik: "Enerji kesme ve kilitleme düzeninin önceliği",
                paragraflar: [
                    "Enerji hattına yakın çalışmada bir ekipmanın kapalı görünmesi, gerçekten kapalı olduğu anlamına gelmez; otomasyon veya uzaktan kumanda ile devreye alınabilen sistemler vardır. Bu yüzden çalışma öncesinde tek bir kuraldan hiç vazgeçmeyiz: çalışılacak hattın enerjisi kesilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır.",
                    "Sözlü teyit yeterli değildir; kilitleme fiziksel olarak uygulanır ve iş bitene kadar kaldırılmaz. Bu, üzerinde pazarlık yapmadığımız tek maddedir ve işin süresini kısaltmak için asla atlanmaz.",
                ],
            },
            {
                baslik: "Yıllık bakım listesinin turlaştırılması",
                paragraflar: [
                    "İşletmelerin enerji-aydınlatma kalemlerini tek tek çağırmak yerine yıllık bir liste hâlinde bize iletmelerini öneririz. Liste geldiğinde hangi kalemin enerji kesme gerektirdiğini, hangisinin görsel kontrolle geçilebileceğini ayırır ve turu buna göre kurarız.",
                    "Bu yaklaşımın somut faydası, aynı sevkiyatla birden fazla kalemin kapatılabilmesidir — hol aydınlatması kontrol edilirken aynı gün rampa aydınlatması da gözden geçirilebilir. Liste ne kadar erken gelirse tur o kadar verimli kurulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek bir armatür için sevkiyat yapmak ekonomik mi?",
                cevap:
                    "Tek kalem için ayrı sevkiyat genellikle pahalıdır; bu yüzden aynı tesisteki diğer aydınlatma ve enerji kalemlerini tek listeye toplamanızı öneririz. Liste geldiğinde hangi kalemin enerji kesme gerektirdiğini ayırır, hepsini tek turda planlarız. Acil tek kalem durumunda elbette gelinir, ancak planlanmış bir liste her zaman daha ekonomiktir.",
            },
            {
                soru: "Sulama pompamızın panosunda iş var; enerjiyi kesmeniz şart mı?",
                cevap:
                    "Evet, bu üzerinde pazarlık yapmadığımız bir kuraldır. Pano üzerinde enerjili çalışılmaz; hat enerjisiz hâle getirilir, şalter kilitlenir ve bu düzen saha sorumlusunun onayıyla iş emrine yazılır. Sulama programınızı önceden bildirirseniz çalışmayı kuru ve enerjisiz bir pencereye yerleştiririz.",
            },
            {
                soru: "Soğuk deponun dış ünitesinde iş var; kesinti soğuk hacmi etkiler mi?",
                cevap:
                    "Kesinti süresi kısa tutulur ve soğuk hacimdeki ürünü etkilemeyecek bir pencereye planlanır. Dış ünite enerjisi kesilmeden müdahale edilmez, ancak bu kesinti genellikle soğutma döngüsünün bütününü değil yalnızca dış üniteyi kapsar. Depo yönetiminizle birlikte en uygun kesinti saatini belirleriz.",
            },
            {
                soru: "Rampa önündeki aydınlatma direğinde çalışırken sevkiyatımız durur mu?",
                cevap:
                    "Durması gerekmez; yöntem kapı bazlı sıralamadır. Hangi kapının hangi saatte boş kalacağını depo yönetiminden alır, makineyi kapıdan kapıya bu sıraya göre ilerletiriz. Sevkiyatın hiç durmadığı yoğun günlerde dış hat işlerini erken sabaha veya vardiya değişimine alırız.",
            },
            {
                soru: "Yıllık enerji-aydınlatma listemizi nasıl planlamalıyız?",
                cevap:
                    "Listeyi bize gönderdiğinizde hangi kalemin enerji kesme gerektirdiğini, hangisinin görsel kontrolle geçilebileceğini ayırırız ve tek bir tur hâlinde kurarız. Bu yaklaşım, tek tek çağrı yapmaktan belirgin biçimde ucuza gelir ve zaten sahada bulunan makineyle ek kalemler de aynı gün kapanır.",
            },
            {
                soru: "Elektrik direği üzerindeki hat kontrolünde tesisin kendi prosedürüne mi uyuyorsunuz?",
                cevap:
                    "Evet. Saha dışı hatlarda tesisin kendi izin prosedürü devreye girer; hattın enerjisiz olduğu belgelenmeden çalışmaya başlanmaz. Bizim rolümüz bu prosedürü hızlandırmak değil, ona uymaktır. Prosedürünüzü önceden paylaşırsanız planı buna göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’daki tarım ve gıda tesislerinde sulama, soğuk depo ve sevkiyat altyapısının bir arada bulunması kamuya açık genel bilgidir; enerji kesme, kilitleme düzeni ve tur planlama firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Afyon’daki Tarım ve Gıda Tesislerinde Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Afyonkarahisar’ın tarım sanayii ve gıda tesislerinde operatörlü mü yoksa operatörsüz mü kiralanacağı sorusu, çoğu zaman sanıldığından farklı bir kritere göre cevaplanır: belirleyici olan sertifika sahipliği değil, sahanın kendine özgü riskleridir. Bir soğuk depoda ısınma-yoğuşma davranışını bilmeyen bir operatör, teknik olarak yetkin olsa bile makineyi verimsiz kullanabilir; bir tarla kenarında zemin okuma deneyimi olmayan biri, sağlam görünen ama altta yumuşak bir noktaya makine indirebilir. Operatörlü hizmetimiz bu yüzden yalnızca ehliyet kontrolü değil, sahanın kendine özgü koşullarını bilen bir ekip anlamına gelir; operatörsüz seçenekte ise işletmenin kendi personeli, ilgili ekipman sınıfı için geçerli bir yeterlilik belgesiyle ve teslim anında yapılan saha eğitimiyle makineyi kullanır. Bu sayfada iki seçenek arasındaki gerçek farkı ve hangi durumda hangisinin daha ekonomik olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Operatörlü seçeneğin gerçek değeri: saha bilgisi",
                metin:
                    "Operatörlü kiralamada kiracının aldığı şey yalnızca ehliyetli bir kişi değil, o saha tipini daha önce görmüş bir deneyimdir. Soğuk hacimde hidrolik davranışını bilen, kırsal zeminde yükün nereye biteceğini önceden kestirebilen, gıda üretim alanına giriş prosedürünü uygulayan bir operatör, aynı işi daha kısa sürede ve daha az riskle tamamlar. Bu fark özellikle tek seferlik ve tanıdık olmayan sahalarda belirgindir.",
            },
            {
                baslik: "Operatörsüz seçeneğin ekonomisi: uzun kalış ve tekrarlayan iş",
                metin:
                    "İşletmenin kendi personeli aynı tesiste düzenli olarak platform kullanacaksa, operatörsüz kiralama toplamda daha ekonomiktir. Personel sahayı zaten tanır, ilk gün verdiğimiz eğitim yeterli olur ve sonraki kullanımlar ek operatör maliyeti taşımaz. Bu model özellikle uzun kalışlı bakım programlarında ve kendi bakım ekibi olan büyük tesislerde tercih edilir.",
            },
            {
                baslik: "Yeterlilik belgesi ve teslim anındaki saha eğitimi",
                metin:
                    "Operatörsüz seçenekte kullanılacak personelin ilgili ekipman sınıfı için geçerli bir yeterlilik belgesi bulunmalıdır; bu belge olmadan makine teslim edilmez. Belge kontrolünün ardından teslim anında saha eğitimi verilir — bu eğitim genel makine kullanımından çok, o spesifik sahanın riskleri üzerine kuruludur: zemin durumu, enerji kesme noktaları, hijyen kuralları gibi.",
            },
            {
                baslik: "Kırsal ve dar erişimli sahalarda operatörlü tercih",
                metin:
                    "Kırsal adreslerde operatörlü seçeneği daha sık öneririz ve bunun nedeni ehliyet değil zemindir. Yumuşak ve eğimli yüzeylerde konumlanma kararı deneyimle hızlanan bir iştir ve yanlış nokta seçimi bir günü kolayca yakar. Tek seferlik ve kısa işlerde operatörlü model çoğu zaman toplamda daha az tutar, çünkü kayıp zaman riskini ortadan kaldırır.",
            },
            {
                baslik: "Gıda üretim alanında operatörün hijyen sorumluluğu",
                metin:
                    "Gıda üretim hacmine giren bir operatör, kendi başına bir hijyen sorumluluğu taşır: tesisin giriş prosedürüne uyar, bone ve önlük gibi kuralları takip eder, sepet altına toplama tablası kurar. Operatörsüz seçenekte bu sorumluluk işletmenin kendi personeline devredilir ve teslim eğitiminde bu kurallar özellikle vurgulanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü/operatörsüz karar tablosu",
                paragraflar: [
                    "Hangi seçeneğin daha uygun olduğu iş tipine ve sahanın niteliğine göre değişir. Aşağıdaki tablo sık karşılaştığımız durumları ve önerimizi toplar.",
                ],
                tablo: {
                    basliklar: ["Durum", "Belirleyici faktör", "Önerilen seçenek", "Gerekçe"],
                    satirlar: [
                        ["Tek seferlik kırsal iş", "Zemin okuma deneyimi", "Operatörlü", "Kayıp zaman riski"],
                        ["Uzun süreli tesis içi bakım", "Personel sahayı tanıyor", "Operatörsüz", "Tekrarlayan maliyet düşük"],
                        ["Gıda üretim alanı, tek iş", "Hijyen prosedürü", "Operatörlü", "Prosedür bilgisi hazır"],
                        ["Kendi bakım ekibi olan büyük tesis", "Sık kullanım", "Operatörsüz", "İlk gün eğitimi yeterli"],
                        ["Soğuk depo, kısa süreli iş", "Ekipman davranışı bilgisi", "Operatörlü", "Verimlilik"],
                    ],
                },
            },
            {
                baslik: "Yeterlilik belgesinin kontrolü nasıl işler",
                paragraflar: [
                    "Operatörsüz kiralamada belge kontrolü teslimden önce yapılır; ilgili ekipman sınıfı için geçerli belge olmadan makine teslim edilmez. Bu, hem yasal bir zorunluluk hem güvenlik meselesidir — belgesiz kullanım, kaza durumunda hem operatörü hem işletmeyi riske atar.",
                    "Belge kontrolünün ardından teslim anında yapılan saha eğitimi, genel makine kullanımını değil o sahaya özgü riskleri kapsar. Bu eğitim atlanmaz; belge var diye eğitim gereksiz sayılmaz, çünkü her saha kendi risklerini taşır.",
                ],
            },
            {
                baslik: "Karma model: uzun program içinde operatör değişimi",
                paragraflar: [
                    "Bazı uzun bakım programlarında ilk günler operatörlü başlar, işletme personeli sahayı ve makineyi tanıdıkça operatörsüz modele geçilir. Bu geçiş, özellikle karmaşık sahalarda (proses tesisi, soğuk depo) riski kademeli olarak azaltan bir yoldur.",
                    "Geçiş kararını birlikte veririz; personelin makineyi güvenle kullandığına dair gözlem yapılmadan geçiş yapılmaz. Bu model, hem başlangıç güvenliğini hem uzun vadeli ekonomiyi bir arada sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlü kiralamak zorunlu mu, kendi personelimiz kullanabilir mi?",
                cevap:
                    "Kendi personeliniz kullanabilir; şart, ilgili ekipman sınıfı için geçerli bir yeterlilik belgesi ve teslim anında yapılan saha eğitimidir. Kırsal adreslerde ve tek seferlik işlerde operatörlü seçeneği daha sık öneriyoruz, çünkü zemin okuma deneyimi kayıp zamanı önler. Uzun kalışlarda kendi personelinizin kullanması ekonomiktir.",
            },
            {
                soru: "Operatörsüz kiralamada belge kontrolü nasıl yapılıyor?",
                cevap:
                    "Teslimden önce ilgili ekipman sınıfı için geçerli yeterlilik belgesi kontrol edilir; belge olmadan makine teslim edilmez. Kontrolün ardından teslim anında saha eğitimi verilir — bu eğitim o sahanın kendine özgü risklerini (zemin, enerji kesme, hijyen) kapsar.",
            },
            {
                soru: "Gıda üretim alanında operatörlü mü daha güvenli?",
                cevap:
                    "Tek seferlik bir işte genellikle evet, çünkü operatörümüz tesisin giriş prosedürüne, hijyen kurallarına ve toplama tablası kurulumuna zaten alışkındır. Düzenli kullanım söz konusuysa işletme personeli de aynı prosedürü öğrenip operatörsüz devam edebilir; ilk gün eğitimi bu geçişi sağlar.",
            },
            {
                soru: "Soğuk depoda operatörsüz çalışmak riskli mi?",
                cevap:
                    "Riskli olmaz ama verimsiz olabilir; soğuk hacimde hidrolik davranışı ve ısınma-yoğuşma döngüsünü bilmeyen bir operatör makineyi yanlış zamanlarda çalıştırabilir. Kısa süreli işlerde operatörlü tercih etmenizi öneririz; uzun kalışlarda ilk gün verdiğimiz eğitimle personeliniz bu davranışı öğrenir.",
            },
            {
                soru: "Uzun bir bakım programında operatörlü başlayıp sonra operatörsüze geçebilir miyiz?",
                cevap:
                    "Evet, bu karma model özellikle karmaşık sahalarda tercih edilir. İlk günler operatörlü ilerler, personeliniz sahayı ve makineyi tanıdıkça operatörsüz modele geçilir. Geçiş kararını birlikte veririz; personelin güvenle kullandığına dair gözlem yapılmadan geçiş yapılmaz.",
            },
            {
                soru: "Operatörlü ile operatörsüz arasındaki maliyet farkı nasıl hesaplanıyor?",
                cevap:
                    "Tek seferlik ve kısa işlerde operatörlü model, kayıp zaman riskini ortadan kaldırdığı için toplamda çoğu zaman daha az tutar. Uzun kalışlı ve tekrarlayan işlerde ise operatörsüz model daha ekonomiktir, çünkü personeliniz sahayı tanıdıktan sonra ek operatör maliyeti taşımaz. İş süresini ve tekrarlanma sıklığını paylaşırsanız iki seçeneğin hesabını yan yana çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’daki tarım sanayii ve gıda tesislerinde operatörlü/operatörsüz kiralamanın yasal çerçevesi (yeterlilik belgesi zorunluluğu) kamuya açık genel bilgidir; saha eğitimi içeriği ve karma model uygulaması firma pratiğidir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Afyon Kırsalında Çok Noktalı Tesislere Rota Bazlı Bakım Platformu Hizmeti",
        giris:
            "Afyonkarahisar’ın tarım sanayii yapısı, tek bir büyük tesise değil birbirinden kilometrelerce uzakta duran çok sayıda küçük ve orta ölçekli işletmeye dayanır: bir köydeki yem ünitesi, komşu köydeki süt toplama noktası, ilçe merkezindeki paketleme evi, tarla kenarındaki geçici depo. Bu işletmelerin her biri ayrı ayrı manlift çağırdığında, nakliye maliyeti tek işin üstünde kalır ve toplam fatura, işin kendisinden daha büyük bir kaleme dönüşür. Çok noktalı rota bakım hizmetimiz bu sorunu doğrudan hedefler: birbirine yakın adresleri aynı sevkiyata toplar, güzergâhı en az geri dönüşle ilerleyecek biçimde kurar ve nakliye payını katılan işletmeler arasında böler. Bu sayfada rota bazlı bakım hizmetinin nasıl kurulduğunu, hangi bilgilerin rotayı netleştirdiğini ve dağınık coğrafyada bir günün gerçek ekonomisini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Rotanın adres listesinden değil coğrafi kümeden kurulması",
                metin:
                    "Dağınık yerleşimli bir bölgede planın omurgası güzergâhtır, adres sırası değildir. Birbirine yakın noktalar aynı güne toplanır, uzak noktalar başka güne bırakılır ve her gün tek yönde ilerleyecek biçimde sıralanır, geri dönmez. Elimizde nokta listesi ve her noktadaki iş kalemleri varsa bu sıralamayı biz çıkarırız; liste olmadan yapılan planlama kâğıt üstünde makul görünüp sahada dağılan bir plandır.",
            },
            {
                baslik: "Bir günü birden fazla adrese sığdırmanın gerçek maliyeti",
                metin:
                    "Kiralanan günün ne kadarının işe, ne kadarının yola gittiği çoğu zaman hesaplanmaz. Gerçek şudur: iki adres arasındaki her geçiş yalnızca yol süresi değil, makinenin toplanması, güvenli hâle getirilmesi, taşınması, yeniden konumlandırılması ve saha girişinin tekrar yapılmasıdır. Bu zincir, on beş dakikalık bir mesafeyi pratikte çok daha uzun bir kesintiye çevirir; rota kurarken bu geçiş maliyetini de hesaba katarız.",
            },
            {
                baslik: "Farklı iş tiplerinin aynı rotada birleşmesi",
                metin:
                    "Bir rotadaki işletmelerin hepsi aynı sektörde olmak zorunda değildir; bir yem ünitesi, bir süt toplama noktası ve bir tarla kenarı elektrik direği aynı güne toplanabilir. Ancak her adresin makine sınıfı ve hazırlık koşulu farklı olabilir (hijyen, enerji kesme, zemin) — bu farkları rotayı kurarken önceden ayırırız ve makine adresler arasında geçerken uygun hazırlığı yeniler.",
            },
            {
                baslik: "Rotaya sonradan eklenen taleplerin yönetimi",
                metin:
                    "Bir rota kurulduktan sonra bölgedeki başka işletmelerden gelen talepler, güzergâh ve sınıf uyuyorsa aynı rotaya eklenebilir. Ancak bu birleştirme otomatik değildir; her adresin makine sınıfı ve temizlik koşulu aynı olmayabileceği için uygunluk kontrol edilir. Erken bildirilen talepler rotaya kolayca eklenir; son anda gelen talepler ise ayrı bir sefer gerektirebilir.",
            },
            {
                baslik: "Rota tarihini erken kilitlemenin faydası",
                metin:
                    "Bir rotaya katılmak isteyen işletme sayısı arttıkça rotanın verimliliği artar, ancak bu ancak tarihler erken bildirildiğinde mümkündür. Tarihini geç bildiren işletme, o hafta zaten kurulmuş bir rotaya yetişemeyebilir ve tekil sevkiyat maliyetini üstlenir. Bu yüzden düzenli çalıştığımız işletmelerden bakım tarihlerini mümkün olduğunca erken bildirmelerini isteriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota kurulumunda karar tablosu",
                paragraflar: [
                    "Çok noktalı bir bölgede rota kurarken dikkate aldığımız faktörleri ve etkilerini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Faktör", "Etkilediği karar", "Erken bilgi faydası", "Geç bilgi riski"],
                    satirlar: [
                        ["Adreslerin coğrafi yakınlığı", "Rota sırası", "Verimli güzergâh", "Ek geçiş süresi"],
                        ["Her adresteki iş kalemi", "Makine sınıfı", "Tek sınıfla tüm rota", "Sahada sınıf değişimi"],
                        ["Hijyen/enerji kesme ihtiyacı", "Hazırlık süresi", "Rotaya gömülü hazırlık", "Sahada beklenmedik gecikme"],
                        ["Talep tarihi", "Rotaya katılım", "Rotada yer garantisi", "Ayrı tekil sefer"],
                        ["Toplam adres sayısı", "Gün sayısı", "Doğru gün planı", "Yetersiz zaman baskısı"],
                    ],
                },
            },
            {
                baslik: "Nakliye payının işletmeler arasında bölüşülmesi",
                paragraflar: [
                    "Rotaya katılan her işletme kendi teklifini ve kendi teslim tutanağını alır; aralarında hukuki bir bağ kurulmaz. Ortak olan yalnızca rotanın giriş-çıkış nakliye kalemidir ve bu kalem katılan işletme sayısına göre bölünür — rotaya kaç işletme katılırsa birim maliyet o kadar düşer.",
                    "Süre aşımı olursa program bir gün uzar ve bu gecikmeye neden olan tarafla konuşulur; diğer işletmelerin günü bu yüzden kısalmaz. Rotanın sağlıklı işlemesi, her katılımcının kendi hazırlığını (erişim, zemin, enerji kesme) önceden netleştirmesine bağlıdır.",
                ],
            },
            {
                baslik: "Rotayı bozmadan acil taleplere yer açmak",
                paragraflar: [
                    "Kurulmuş bir rota, planlanmamış acil bir talep geldiğinde otomatik olarak bozulmaz. Acil talep, rotanın güzergâhına yakınsa ve makine sınıfı uyuyorsa araya sıkıştırılabilir; uymuyorsa ayrı bir sefer olarak değerlendirilir ve bu maliyet açıkça gösterilir.",
                    "Bu esneklik, rotanın planlı katılımcılarının programını bozmadan sağlanır — planlı katılımcının günü, sonradan gelen bir talep yüzünden ertelenmez. Aciliyet durumunda hangi seçeneğin uygulanacağını arayanla birlikte netleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bölgemizde birkaç işletme aynı hafta iş yaptırmak istiyor; rota nasıl kurulur?",
                cevap:
                    "Nokta listesini ve her noktadaki iş kalemlerini bize gönderirseniz en az geçişli sıralamayı çıkarır, kaç gün gerektiğini önceden söyleriz. Rota, adres sırasına göre değil coğrafi kümeye göre kurulur; birbirine yakın noktalar aynı güne toplanır ve her gün tek yönde ilerler.",
            },
            {
                soru: "Rotadaki her adresin işi farklı; tek makineyle hepsi yapılabilir mi?",
                cevap:
                    "Çoğu zaman evet, ancak her adresin hazırlık koşulu (hijyen, enerji kesme, zemin) rotayı kurarken önceden ayrılır. Makine adresler arasında geçerken uygun hazırlığı yeniler — örneğin gıda tesisine girmeden önce temizlik, enerjili hatta yaklaşmadan önce kesme kontrolü yapılır.",
            },
            {
                soru: "Rotaya sonradan katılmak istersek mümkün mü?",
                cevap:
                    "Güzergâh ve makine sınıfı uyuyorsa mümkündür, ancak birleştirme otomatik değildir; her adresin uygunluğu kontrol edilir. Ne kadar erken bildirirseniz rotaya eklenme ihtimaliniz o kadar yüksektir; son anda gelen talepler ayrı bir sefer gerektirebilir.",
            },
            {
                soru: "Rota süresi uzarsa bizim günümüz kısalır mı?",
                cevap:
                    "Hayır. Süre aşımı olursa program bir gün uzar ve bu, gecikmeye neden olan tarafla konuşulur; sizin göründüğünüz gün başkasının işi uzadı diye kısalmaz. Rotanın sağlıklı işlemesi için her katılımcının kendi hazırlığını önceden netleştirmesini isteriz.",
            },
            {
                soru: "Rota kurulduktan sonra acil bir talebimiz çıkarsa ne olur?",
                cevap:
                    "Acil talep rotanın güzergâhına yakınsa ve makine sınıfı uyuyorsa araya sıkıştırılabilir; uymuyorsa ayrı bir sefer olarak değerlendirilir ve maliyet açıkça gösterilir. Bu durumda planlı katılımcıların programı bozulmaz; onların günü ertelenmez.",
            },
            {
                soru: "Nakliye payını rotadaki işletmeler nasıl paylaşıyor?",
                cevap:
                    "Rotanın giriş-çıkış nakliye kalemi katılan işletme sayısına göre bölünür; her işletme kendi teklifini ve kendi teslim tutanağını alır, aralarında hukuki bir bağ kurulmaz. Rotaya kaç işletme katılırsa birim maliyet o kadar düşer; bu yüzden tarihinizi erken bildirmenizi öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’un kırsal ilçelerinde küçük-orta ölçekli tarım işletmelerinin dağınık coğrafyaya yayılmış olması kamuya açık genel bilgidir; rota kurma yöntemi ve nakliye paylaşımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Tarla, Bahçe ve Kırsal Sahalarda Zor Zemin / Arazi Tipi Platform Kiralama",
        giris:
            "Afyonkarahisar’ın tarım ağırlıklı coğrafyasında bir manlift işinin en büyük belirsizliği çoğu zaman yükseklik değil zemindir: tarla kenarı, bahçe içi, köy yolu, silo sahası ve kampanya döneminde araç trafiğiyle bozulmuş toprak avlular standart iç mekân makinesinin güvenle çalışamayacağı yüzeylerdir. Zemin taşıma gücü görünümden anlaşılmaz — kuru görünen bir toprak, altta yumuşak kalabilir; sağlam görünen bir stabilize yol, yağıştan sonra çamura dönebilir. Zor zemin ve arazi tipi platform hizmetimiz bu belirsizliği baştan hesaba katar: paletli veya dört tekerden çekişli, geniş tabanlı ve arazi kabiliyetli sınıflar seçilir, indirme öncesinde saha fotoğrafla değerlendirilir ve şüpheli noktaya makine indirilmez. Bu sayfada kırsal sahalarda zemin değerlendirmesinin nasıl yapıldığını ve hangi durumda hangi sınıfın tercih edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Zemin görünümünün taşıma gücünü kanıtlamaması",
                metin:
                    "Kuru görünen bir toprak avlu, dolgu kalınlığı yetersizse veya altında görünmeyen bir drenaj hattı varsa yük altında farklı davranabilir. Sevkiyattan önce güzergâh ve indirme alanı fotoğraflanır; saha günü operatör zemini yürüyerek ve tesis sorumlusundan geçmiş kullanım bilgisini alarak yeniden değerlendirir. Şüpheli noktaya tekerlek veya destek ayağı basılmaz; makinenin dört çeker olması bu değerlendirmeyi gereksiz kılmaz.",
            },
            {
                baslik: "Tarla ve bahçe kenarında sulama sonrası zemin değişimi",
                metin:
                    "Sulu tarımın yapıldığı bir ovada zemin durumu sabit değildir; aynı parselin taşıma gücü sulamadan önce ve sonra farklıdır. Bu yüzden tarih kararını yalnızca hava durumuna bakarak vermeyiz — sulama programı en az yağış kadar belirleyicidir. Sulanmış bir güzergâhtan geçen makine hem iz bırakır hem kendi güvenliğini kaybeder; kurtarma operasyonu işin kendisinden pahalıya mal olur.",
            },
            {
                baslik: "Köy yolu ve stabilize güzergâhta erişim planı",
                metin:
                    "Kırsal bir adreste işin fiyatını ve süresini en çok etkileyen kalem, çoğu zaman işin kendisi değil erişimdir. Çekicinin dönebileceği bir alan, indirme için sert bir zemin ve tesise girişte alçak bir engel bulunup bulunmadığı önceden bilinmelidir. Erişim netleştiğinde makine sınıfı da kendiliğinden daralır; birkaç fotoğraf, sahaya boşa yapılan bir sefere kıyasla çok daha ucuzdur.",
            },
            {
                baslik: "Silo ve kampanya sahalarında araç trafiğiyle bozulan zemin",
                metin:
                    "Hasat ve kampanya döneminde ağır araç trafiği, tesis avlularındaki zemini normal zamandan hızlı bozar; tekerlek izleri derinleşir ve yumuşak noktalar oluşur. Bu dönemde arazi tipi sınıflar standart hâle gelir. Zeminin son durumu her sefer için ayrıca değerlendirilir, çünkü kampanya ortasında zemin koşulu haftalar içinde değişebilir.",
            },
            {
                baslik: "Şüpheli zeminde makine indirmeme kararı",
                metin:
                    "Zemin taşıma gücü konusunda şüphe varsa makine indirilmez; bu kararı sahada, indirme öncesinde veririz ve pazarlık konusu yapmayız. Daha uzaktaki sert zeminden hedefe erişim mümkünse bomlu bir sınıf kullanılır; mümkün değilse zemin işletme tarafından uygun şekilde hazırlanır ya da iş kuru bir pencereye ertelenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre sınıf seçim tablosu",
                paragraflar: [
                    "Kırsal sahalarda karşılaştığımız zemin tiplerini, riski ve önerilen sınıfı aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Temel risk", "Belirleyici mevsim/durum", "Önerilen sınıf"],
                    satirlar: [
                        ["Kuru toprak avlu", "Görünümün yanıltıcı olması", "Yakın zamanlı yağış/sulama", "Geniş tabanlı arazi tipi"],
                        ["Sulanmış tarla kenarı", "İz bırakma, stabilite kaybı", "Sulama sonrası", "Paletli veya 4x4"],
                        ["Stabilize köy yolu", "Çamurlaşma", "Yağış sonrası", "Dört çeker, dizel"],
                        ["Kampanya dönemi avlu", "Araç trafiğiyle bozulma", "Hasat/kampanya haftaları", "Arazi tipi, geniş lastik"],
                        ["Şüpheli/belirsiz zemin", "Gömülme, devrilme", "Her koşulda önce değerlendirme", "İndirme öncesi karar"],
                    ],
                },
            },
            {
                baslik: "İndirme öncesi zemin değerlendirmesinin adımları",
                paragraflar: [
                    "Zemin değerlendirmesi iki aşamada yapılır. İlkinde, sevkiyattan önce güzergâh ve indirme alanı fotoğraflanır; bu fotoğraflar dolgu kalınlığı, yüzey görünümü ve olası çukur veya eğim gibi kabaca değerlendirilebilecek unsurları gösterir.",
                    "İkinci aşama sahada gerçekleşir: operatör zemini yürüyerek kontrol eder, tesis sorumlusundan geçmiş kullanım bilgisini (bu noktada daha önce ağır araç geçti mi, göçük oldu mu) alır ve nihai kararı orada verir. Şüpheli noktaya tekerlek veya destek ayağı basılmaz; bu karar öncelik sırasında fiyattan ve süreden önce gelir.",
                ],
            },
            {
                baslik: "Zemin hazırlığı işletmeye düşen kısım",
                paragraflar: [
                    "Bazı durumlarda zemin, işletme tarafından basit bir hazırlıkla uygun hâle getirilebilir: geçici plaka serilmesi, yüzeydeki gevşek malzemenin sıkıştırılması, su birikintisinin tahliye edilmesi. Bu hazırlık gerektiğinde önceden bildiririz ve hangi alanın hangi ölçüde hazırlanması gerektiğini netleştiririz.",
                    "Hazırlık yapılamıyorsa iki seçenek kalır: daha uzaktaki sert zeminden bomla erişim ya da işin kuru/sağlam bir pencereye ertelenmesi. Bu kararı işletme sorumlusuyla birlikte, sahadaki gerçek koşula bakarak veririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Toprak avlumuz kuru görünüyor; arazi tipi manlift için yeterli midir?",
                cevap:
                    "Kuru görünüm tek başına taşıma gücünü kanıtlamaz. Dolgu kalınlığı, yakın zamandaki yağış veya sulama ve yüzey altındaki drenaj hattı yük altında farklı davranabilir. Sevkiyattan önce güzergâh fotoğraflanır; saha günü operatör zemini yeniden değerlendirir. Şüpheli noktaya tekerlek veya destek ayağı basılmaz.",
            },
            {
                soru: "Sulama yaptığımız tarla kenarında iş var; ne zaman uygun olur?",
                cevap:
                    "Sulanmış bir zeminden hemen sonra çalışmayı önermeyiz; taşıma gücü düşer ve makine iz bırakabilir veya stabilitesini kaybedebilir. Sulama programınızı önceden paylaşırsanız çalışmayı kuruma penceresine yazarız; kararı yalnızca hava durumuna göre değil sulama takviminize göre veririz.",
            },
            {
                soru: "Köy yolumuz yağıştan sonra çamurlaşıyor; makine gelebilir mi?",
                cevap:
                    "Yağış sonrası stabilize yollarda dört çeker ve dizel bir sınıf tercih edilir, ancak aşırı çamurlu koşulda yine de indirmeyebiliriz. Son yağıştan sonraki yol durumunu fotoğrafla paylaşırsanız gidip gidemeyeceğimizi ve gerekiyorsa alternatif tarihi net söyleriz.",
            },
            {
                soru: "Kampanya döneminde avlumuz araç trafiğiyle bozuldu; bu durumda ne yaparsınız?",
                cevap:
                    "Kampanya dönemlerinde bu durumla sık karşılaşırız; bu yüzden bu dönemde arazi tipi, geniş lastikli sınıfları standart olarak öneririz. Zeminin güncel durumu her sefer için ayrıca değerlendirilir, çünkü kampanya ortasında koşullar haftalar içinde değişebilir.",
            },
            {
                soru: "Zemin şüpheli görünüyorsa makineyi hiç indirmiyor musunuz?",
                cevap:
                    "Şüphe varsa indirmeyiz; bu kararı sahada, indirme öncesinde veririz ve pazarlık konusu yapmayız. Daha uzaktaki sert zeminden hedefe erişim mümkünse bomlu bir sınıf kullanılır; mümkün değilse zemin sizin tarafınızdan hazırlanır ya da iş kuru bir pencereye ertelenir.",
            },
            {
                soru: "Zemini biz nasıl hazırlayabiliriz, ne bekliyorsunuz?",
                cevap:
                    "Bazı durumlarda geçici plaka serilmesi, yüzeydeki gevşek malzemenin sıkıştırılması veya su birikintisinin tahliyesi yeterli olur. Bu hazırlık gerektiğinde önceden bildiririz ve hangi alanın hangi ölçüde hazırlanması gerektiğini netleştiririz; hazırlık yapılamıyorsa alternatif erişim veya erteleme konuşulur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Afyon’un tarım ağırlıklı coğrafyasında tarla, bahçe ve köy yolu zemin koşullarının değişkenliği kamuya açık genel bilgidir; zemin değerlendirme adımları ve indirmeme kararı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
};
