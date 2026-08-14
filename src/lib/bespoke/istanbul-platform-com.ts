// ═══════════════════════════════════════════════════════════════════════════
// istanbul-platform.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: İstanbul Avrupa ve Anadolu yakasında manlift, forklift ve vinç
// kiralama. Açı: FİYAT ŞEFFAFLIĞI — kiralama fiyatının anatomisi (makine
// sınıfı, süre, nakliye, operatör kalemlerinin ayrıştırılması), gizli maliyet
// tuzakları ('tek rakam' tekliflerin sorunu), karşılaştırılabilir teklif
// okuma rehberi, İstanbul'un iki yakalı nakliye gerçeğinin fiyata etkisi,
// sözleşme maddelerinde şeffaflık. Somut TL rakamı YAZILMAZ — kalemlerin
// mantığı ve karşılaştırma yöntemi anlatılır.
//
// ⚠️ platformistanbul.net (hub açısı) ve istanbulplatformkiralama.net
// (tersane açısı) dosyalarında da ikitelli/basaksehir/tuzla/gebze/pendik/
// kartal sayfaları var. Oradaki cümle, tablo ve SSS'lerle çakışma YASAK —
// bu dosya aynı ilçeleri fiyat şeffaflığı penceresinden anlatır.
//
// Bilgi kuralı: TL rakamı, tesis adı, istatistik uydurulmaz; ilçe bilgisi
// kamuya açık düzeyde tutulur.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Sayfalar arası cümle/kalıp tekrarı YASAK.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ISTANBUL_PLATFORM_COM: Record<string, BespokeIcerik> = {
    "bolge:ikitelli": {
        h1: "İkitelli'de Şeffaf Fiyatlı Manlift ve Forklift Kiralama",
        giris:
            "İkitelli'deki bir atölye sahibi makine kiralamak için üç yeri aradığında, önüne üç farklı rakam düşer ve bu rakamların neden farklı olduğunu kimse açıklamaz. Biri nakliyeyi içine gömmüştür, biri operatörü ayrı yazacaktır, üçüncüsü ise akşam telefonda 'bir de şu vardı' diyecektir. Binlerce küçük ve orta ölçekli işletmenin sanayi siteleri hâlinde kümelendiği bu bölgede kiralama tutarının en oynak bileşeni makinenin kendisi değil, etrafındaki kalemlerdir: kısa mesafeli ama sık tekrarlanan nakliye, yarım güne sıkışan işlerde süre tanımı, operatörün dahil olup olmadığı ve iade saatinin nasıl sayıldığı. Bu sayfanın derdi tek bir şeydir: İkitelli ölçeğindeki bir kiralamada fiyatın hangi parçalardan oluştuğunu, hangi parçanın pazarlığa açık hangisinin sabit olduğunu ve iki teklifi yan yana koyduğunuzda neyi neyle karşılaştırmanız gerektiğini, rakam vaat etmeden ama hesabın iskeletini tamamen açarak anlatmak.",
        maddeler: [
            {
                baslik: "Kısa işte fiyatın ağırlık merkezi kayar",
                metin:
                    "Haftalık bir kiralamada makine bedeli toplamın büyük kısmını oluşturur; yarım günlük bir tabela veya tesisat işinde ise denge tersine döner ve nakliye ile kurulum payı öne geçer. İkitelli'nin iş profili ağırlıkla ikinci gruptadır. Bu yüzden buradaki teklif değerlendirmesinde ilk bakılacak satır günlük kira değil, sabit giderlerin (getirme-götürme, indirme-bindirme) toplam içindeki oranıdır. Aynı makineye daha düşük gün fiyatı verip nakliyeyi şişiren teklif, kısa işte pahalı teklif olabilir.",
            },
            {
                baslik: "Makine sınıfı satırı ne anlatmalı",
                metin:
                    "Düzgün bir teklifte makine, 'manlift' gibi genel bir adla değil sınıf, erişim yüksekliği ve güç tipiyle (akülü/dizel) tanımlanır; çünkü fiyat bu üçlünün fonksiyonudur. Sanayi sitesi işlerinde en sık kayma buradadır: işe dar şaseli akülü model yeterken teklife daha büyük ve pahalı bir gövde yazılır, ya da tersi — ucuz görünen küçük makine sahaya gelir ve yetmez, ikinci sevkiyatın maliyeti ilk tasarrufu siler. Sınıfın gerekçesi teklifte bir cümleyle yer almalıdır: hangi ölçü bu makineyi gerektiriyor.",
            },
            {
                baslik: "Sanayi sitesi içinde nakliyenin gerçek maliyeti",
                metin:
                    "Nakliye satırı yalnızca kat edilen kilometre değildir; çekicinin site içinde indirme noktası bulması, dar sokakta manevra süresi ve kapı önünün müsait olmadığı durumlarda bekleme de bu satırın içindedir. Şeffaf teklif bu riskleri iki biçimde ele alır: ya indirme koşulları önden fotoğrafla netleştirilir ve satır sabitlenir, ya da bekleme ihtimali ayrı bir koşul maddesi olarak yazılır. Sözleşmede hiç anılmayan bekleme, faturada sürpriz olarak dönmesin diye sorulacak soru basittir: kapıda yarım saat kalırsak ne olur?",
            },
            {
                baslik: "Operatör satırının üç hâli",
                metin:
                    "Tekliflerde operatör üç biçimde görünür: dahil, hariç ve hiç anılmamış. Üçüncüsü en tehlikelisidir. Operatörlü fiyatta mesai tanımı (kaç saat, öğle arası sayılıyor mu), operatörsüz fiyatta ise kullanıcı belge şartı ve hasar sorumluluğunun kimde olduğu yazılı olmalıdır. İkitelli'de yaygın senaryo, atölyenin kendi belgeli personeliyle makineyi kullanmak istemesidir — bu durumda teklifin 'operatörsüz' olduğu, teslim eğitiminin verilip verilmediği ve sigorta kapsamının nasıl değiştiği üç ayrı satırda netleşmelidir.",
            },
            {
                baslik: "Süre tanımı: gün müdür, mesai midir",
                metin:
                    "Aynı 'bir günlük kiralama' ifadesi firmadan firmaya farklı şey anlatır: kimi için sabah teslimden ertesi sabaha yirmi dört saattir, kimi için mesai bitimine kadar olan dilimdir, kiminde ise makinenin sahada durduğu her takvim günü sayılır — hafta sonu kullanılmasa bile. Kısa işlerin yoğun olduğu bu bölgede süre tanımı sorulmadan imzalanan sözleşme, iki günlük işi üç güne faturalandırabilir. Teklif isterken tek cümlelik bir ek yeterlidir: gün tanımınız nedir ve cuma teslim alıp pazartesi iade edersek kaç gün sayarsınız?",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkitelli tipi kısa kiralamada fiyat kalemlerinin anatomisi",
                paragraflar: [
                    "Aşağıdaki tablo, sanayi sitesi ölçeğindeki tipik bir kiralamada faturaya girebilecek kalemleri, her birinin neye göre değiştiğini ve teklifte nasıl görünmesi gerektiğini listeler. Rakam yerine mantık verilmiştir; iki teklifi bu satırlar üzerinden yan yana koyduğunuzda karşılaştırma kendiliğinden doğru kurulur.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Neye göre değişir", "Teklifte nasıl durmalı", "Dikkat noktası"],
                    satirlar: [
                        ["Makine bedeli", "Sınıf + erişim + güç tipi", "Model ve gerekçeyle ayrı satır", "Genel ad ('platform') yetmez"],
                        ["Nakliye", "Mesafe + araç tipi + indirme koşulu", "Gidiş-dönüş ayrı ve sabit", "'Dahildir' diyorsa tutarı sorun"],
                        ["Operatör", "Dahil/hariç + mesai tanımı", "Saat sınırıyla birlikte", "Hiç anılmamışsa yazdırın"],
                        ["Süre", "Gün tanımı + hafta sonu kuralı", "Tanım cümlesi sözleşmede", "Takvim günü / kullanım günü farkı"],
                        ["Enerji", "Yakıt mı şarj mı, kim karşılar", "Tek cümlelik madde", "Dizellerde iade yakıt seviyesi"],
                    ],
                },
            },
            {
                baslik: "'Tek rakam' teklifin küçük işletmeye maliyeti",
                paragraflar: [
                    "Telefonda söylenen yuvarlak tek rakam, hızlı göründüğü için küçük işletmeye cazip gelir; oysa karşılaştırılamaz olduğu için pazarlık gücünü sıfırlar. İçinde ne olduğu bilinmeyen bir toplamın ucuz mu pahalı mı olduğuna karar verilemez — ikinci firmadan alınan tek rakamla kıyası da elmayla armudu tartmaktır, çünkü birinin toplamında operatör vardır, ötekinde yoktur. Kalem dökümü istemek kabalık değildir; dökümden kaçınan satıcı, ya kendi maliyetini bilmiyordur ya da bir kalemi görünmez tutmayı tercih ediyordur. İki ihtimal de sizin lehinize değildir.",
                    "Dökümlü teklifin ikinci getirisi, işi küçültme veya büyütme kararını bilinçli almanızdır: nakliyenin toplam içindeki payını görünce komşu atölyeyle aynı günü paylaşmayı düşünürsünüz, operatör satırını görünce kendi belgeli ustanızla çalışıp çalışmamayı hesaplarsınız. Tek rakam bu kararların hepsini karanlıkta bıraktırır.",
                ],
            },
            {
                baslik: "İki teklifi yan yana okuma yöntemi",
                paragraflar: [
                    "Karşılaştırmanın doğru birimi 'işin bitmiş toplam maliyeti'dir, günlük kira değil. Yöntem dört adımdır: önce iki teklifi de aynı kalem listesine oturtun (eksik kalemi satıcıdan yazılı isteyin), sonra süre tanımlarını eşitleyin (birinin gününü ötekinin gün tanımına çevirin), üçüncü adımda koşullu kalemleri işaretleyin (bekleme, uzatma, iptal — bunlar fiyat değil risk satırlarıdır) ve son olarak toplamları işinizin gerçek süresi üzerinden hesaplayın. Bu dört adımdan geçmeyen karşılaştırma, çoğu zaman ucuz görüneni değil ucuz yazılanı seçer.",
                    "Bir ipucu daha: teklifler arasında açıklanamayan büyük fark varsa, ucuz olanın hangi kalemi eksik yazdığını bulmadan karar vermeyin. Sektörde makine maliyetleri birbirine yakındır; büyük fark neredeyse her zaman kapsam farkıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Telefonda net fiyat vermiyorsunuz; neden?",
                cevap:
                    "Çünkü net fiyat, net bilgiyle mümkündür ve telefonda çoğu zaman iki kritik veri eksiktir: makinenin gireceği alanın ölçüleri ve indirme noktasının durumu. Bu ikisini bilmeden söylenen rakam ya risk payıyla şişirilmiştir ya da sahada tutmayacak kadar iyimserdir — ikisi de sizin aleyhinizedir. Bizim usulümüz şudur: telefonda kalem listesini ve her kalemin neye bağlı olduğunu açıkça söyleriz; birkaç fotoğraf ve ölçüyle aynı gün içinde yazılı, dökümlü ve geçerlilik süresi belirtilmiş teklif göndeririz. Yazılı dökümün telefondaki yuvarlak rakamdan her zaman daha hızlı sonuç verdiğini deneyimle biliyoruz.",
            },
            {
                soru: "Başka firmadan aldığımız teklif sizinkinden belirgin düşük; aradaki fark neden olabilir?",
                cevap:
                    "İki teklifi yan yana getirin, kalem kalem bakalım — bu daveti her müşterimize açık tutarız. Deneyimimizde büyük farkın en sık üç kaynağı vardır: nakliyenin tek yön yazılıp dönüşün faturaya sonradan gelmesi, gün tanımının farklı olması (takvim günü sayan sözleşme, kullanılmayan hafta sonunu da yazar) ve makine sınıfının işe göre küçük seçilmesi — sahada yetmeyen makinenin değişimi, iki nakliye ve kayıp bir gün demektir. Fark bu üçüyle açıklanamıyorsa ve kapsamlar gerçekten eşitse, düşük teklifi seçmenizi biz de doğal karşılarız; şeffaflık taahhüdümüz 'her zaman en ucuz olacağız' taahhüdü değildir.",
            },
            {
                soru: "Nakliye ücretini nasıl hesaplıyorsunuz? Sitemiz size çok yakın.",
                cevap:
                    "Nakliye satırımız üç bileşenden oluşur ve teklifinizde bu üçü ayrı görünür: mesafeye bağlı taşıma payı, makinenin gerektirdiği araç tipi (küçük akülü makineyle büyük dizel eklemli aynı araçla taşınmaz) ve indirme koşulu. Yakınlık ilk bileşeni gerçekten küçültür ama diğer ikisini etkilemez — bu yüzden 'yakınız, nakliye yok sayılır' beklentisi kısmen doğrudur. Kısa mesafede toplamı asıl düşüren şey, aynı gün aynı bölgeye giden başka bir teslimatla aracın paylaşılmasıdır; tarih esnekliğiniz varsa bunu söyleyin, paylaşım indirimi teklifte ayrı satır olarak gösterilir.",
            },
            {
                soru: "İş yarım günde biterse yarım gün mü öderiz?",
                cevap:
                    "Dürüst cevap: hayır, ve nedenini açıklamak şeffaflığın parçası. Makinenin o günü sizin işinize ayrılmıştır; sabah teslim edilip öğlen iade edilen makine aynı gün başka işe çoğu zaman yetiştirilemez, nakliye aracı ise iki kez çalışmıştır. Bu yüzden sektörde asgari faturalama birimi gündür ve biz bunu teklifte açıkça yazarız — söylenmeyip iş sonunda tartışma konusu olmasından iyidir. Yarım günlük işin maliyetini düşürmenin gerçek yolu faturayı bölmek değil günü doldurmaktır: ertelediğiniz küçük kalemleri (aydınlatma, oluk, tabela) aynı güne toplayın veya komşu işletmeyle günü paylaşın; ikisinde de ödediğiniz günün karşılığı dolar.",
            },
            {
                soru: "Sözleşmede hangi maddelere özellikle bakmalıyız?",
                cevap:
                    "Beş maddeye: süre tanımı (gün neyi kapsıyor, iade saati nasıl sayılıyor), uzatma koşulu (haber verme süresi ve uzatma birim fiyatı baştan yazılı mı), hasar ayrımı (normal yıpranma ile kullanım hatası sınırı tanımlı mı, muafiyet tutarı belli mi), iptal şartı (teslimattan ne kadar önce ücretsiz iptal edilebiliyor) ve arıza durumu (makine arızalanırsa değişim süresi ve o günün faturası ne oluyor). Bu beş maddenin herhangi biri sözleşmede yoksa, yokluğu sizin aleyhinize yorumlanacak demektir. Bizim sözleşmemizde beşi de vardır ve imza öncesi üzerinden birlikte geçmek, standart teslim adımımızdır.",
            },
            {
                soru: "Aynı makineyi geçen ay komşumuz daha ucuza kiralamış olabilir mi? Fiyatlarınız kişiye göre değişiyor mu?",
                cevap:
                    "Fiyatımız kişiye göre değil, işin parametrelerine göre değişir ve bu parametreler teklifte görünür olduğu için fark her zaman izlenebilir: komşunuz haftalık blok kiraladıysa gün birim fiyatı sizin tek gününüzden düşüktür, teslimatı bölge turuna denk geldiyse nakliye payı küçülmüştür, operatörsüz aldıysa o satır hiç yoktur. Aynı parametrelerle gelen iki müşteriye farklı rakam vermek, şeffaflık iddiasındaki bir firmanın kendi ayağına sıkması olur — dökümlü teklif düzeninin bir amacı da budur: kayırma şüphesini yapısal olarak imkânsız kılmak. Komşunuzun teklifini getirin; satır satır neyin neden farklı olduğunu gösterelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İkitelli'nin çok sayıda sanayi sitesinden oluşan KOBİ yoğun dokusu kamuya açık bilgidir; kalem dökümü ve teklif okuma yöntemi firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:esenyurt": {
        h1: "Esenyurt'ta Manlift ve Platform Kiralamada Fiyat Kalemleri",
        giris:
            "Esenyurt, İstanbul'un en kalabalık ilçelerinden biri olarak iki farklı müşterinin aynı anda makine aradığı bir yerdir: bir yanda yüksek katlı sitelerin yönetimleri ve cephe-çatı işi yapan esnaf, öte yanda ilçenin batı kesimlerinde ve çevresindeki sanayi-depo parsellerinde çalışan işletmeler. İki müşteri tipi aynı makineyi kiralasa bile faturaları aynı kalemlerden oluşmaz — ve fiyat karmaşasının kaynağı tam olarak budur. Site yönetiminin faturasına otopark düzenlemesi, sakin duyurusu ve hafta sonu çalışma farkı gibi görünmez hazırlık maliyetleri girer; sanayi müşterisinin faturasında ise vardiya saatine denk gelen teslimat, yük kapasitesi doğrulaması ve tekrarlı kiralama iskontosu konuşulur. Bu sayfa, Esenyurt'un karışık dokusundaki her iki müşteri tipine de aynı şeyi vaat eder: hangi profilden gelirseniz gelin, teklifinizde her kalemin adı, gerekçesi ve koşulu yazar — ve hangi kalemin sizin kararlarınızla küçülebileceğini de biz söyleriz.",
        maddeler: [
            {
                baslik: "Konut işi ile sanayi işinin fatura yapısı ayrışır",
                metin:
                    "Aynı erişim yüksekliğindeki iki iş — bir site cephesi ile bir depo çatısı — farklı toplamlara ulaşır çünkü çevresel maliyetleri farklıdır. Site işinde makine kadar organizasyon da fiyatlanır: çalışma alanının araçlardan arındırılması için geçen süre, yaya güvenliği düzeni ve dar saat pencereleri iş gününü uzatır. Depo işinde bu kalemler yoktur ama yerlerine başkaları gelir: zemin ve rampa kontrolü, vardiyaya uyum, bazen gece penceresi. Teklif okurken kendi iş tipinizin kalemlerini arayın; öteki profilin kalemi sizin faturanızda durmamalıdır.",
            },
            {
                baslik: "Yoğun trafik fiyata nereden girer",
                metin:
                    "İlçenin ana arterlerindeki yoğunluk, nakliye satırını iki yoldan etkiler: aracın yolda geçirdiği süre ve teslim saatinin öngörülemezliği. Bu etkinin faturaya dürüst yansıma biçimi, trafiği bahane eden belirsiz bir zam değil, saat penceresi taahhüdüdür — teklifte 'teslim aralığı' yazar ve o aralık tutulur. Sabah erken teslimatlar hem yol süresini hem riski küçülttüğü için, saat esnekliği gösteren müşteriye nakliye tarafında daha iyi koşul sunulabilir; bu takas teklifte açıkça görünmelidir, sözlü vaat olarak değil.",
            },
            {
                baslik: "Yüksek katlı yapılarda erişim sınıfı ve fiyat basamağı",
                metin:
                    "Fiyatın en sert basamağı erişim yüksekliğinde atlanır: belirli bir kat sınırına kadar yaygın sınıflar yeterken, daha yüksek cephelerde büyük bomlu makinelere geçilir ve hem kira hem nakliye satırı birlikte büyür — büyük makine özel taşıma ister. Esenyurt'un yüksek yapı stoku bu basamağı sık gündeme getirir. Şeffaf yaklaşımın gereği, işin gerçekten hangi kata eriştiğini ölçüp basamağın doğru tarafında fiyatlamaktır: en üst kat için makine kiralatıp işin çoğunu orta katlarda yapan teklif de, yetmeyecek makineyle 'ucuza getiren' teklif de sizi yanıltır.",
            },
            {
                baslik: "Hafta sonu ve akşam çalışmasının fiyat mantığı",
                metin:
                    "Site yönetimleri gürültülü işleri hafta içi mesaiye, sakinlerin evde olmadığı saatlere sıkıştırmak ister; esnaf ise dükkân kapalıyken çalışmayı tercih eder. Standart mesai dışına taşan her pencere, operatör ve lojistik tarafında ek maliyet üretir ve bu ek, teklifte oransız bir 'özel çalışma zammı' olarak değil, hangi kaleme ne eklendiği görünecek biçimde yazılmalıdır: operatör mesai farkı ayrı, gece teslimat farkı ayrı. Böyle yazılmayan fark, pazarlık edilemez; böyle yazılan farkın ise çoğu zaman küçültülecek yolu bulunur.",
            },
            {
                baslik: "Tekrarlı işlerde birim fiyatın eğrisi",
                metin:
                    "Depo raflarını her sezon düzenleyen işletme ile yılda bir cephe bakımı yaptıran site aynı birim fiyatı ödemez — ödemesi de gerekmez. Tekrar, tedarikçinin iki maliyetini düşürür: keşif zaten yapılmıştır ve talep öngörülebilir olduğu için makine planlaması ucuzlar. Bu düşüşün müşteriye yansıması, sözleşmede 'dönem koşulu' olarak yazılmalıdır; ağızdan verilen 'size özel fiyat' sözü, yazılı olmadığı sürece her seferinde yeniden pazarlık demektir. Teklif isterken yıllık iş tahmininizi söylemek, en meşru indirim aracınızdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Esenyurt'ta iki müşteri profili için fiyat kalemi haritası",
                paragraflar: [
                    "Aynı ilçede site-esnaf işleri ile sanayi-depo işlerinin fatura kalemleri aşağıda karşılaştırılmıştır. Kendi profilinize ait sütunu teklifle karşılaştırın; öteki sütunun kalemi teklifinizdeyse gerekçesini sorun.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Site / esnaf işi", "Sanayi / depo işi"],
                    satirlar: [
                        ["Hazırlık", "Otopark boşaltma, duyuru, bariyer", "Zemin-rampa kontrolü, vardiya planı"],
                        ["Saat penceresi", "Gürültü saatleri, mesai kısıtı", "Operasyon boşlukları, gece imkânı"],
                        ["Makine eğilimi", "Kompakt akülü, sessiz sınıf", "Dizel/yüksek kapasite, forklift"],
                        ["Süre riski", "Araç çekilmezse gün uzar", "Hat-sevkiyat çakışması"],
                        ["İndirim kaynağı", "Kalem birleştirme, komşu site", "Tekrar sıklığı, dönem sözleşmesi"],
                    ],
                },
            },
            {
                baslik: "Görünmez kalemler: faturada sürprizin beş adresi",
                paragraflar: [
                    "Kiralama anlaşmazlıklarının çoğu, fiyatın kendisinden değil hiç konuşulmamış kalemlerden çıkar. Beş klasik adres şunlardır: teslimattaki bekleme (alan hazır değilse sayaç işler mi), uzatma birim fiyatı (ilk günle aynı mı, zamlı mı), yakıt-şarj sorumluluğu (dizel makine hangi seviyeyle iade edilir), hafta sonu sayımı (kullanılmayan cumartesi-pazar faturalanır mı) ve temizlik-hasar değerlendirmesi (iade kontrolü kimin önünde yapılır). Bu beş soruyu teklif aşamasında yazılı sormak, sözleşmeyi imzalamadan önceki en değerli beş dakikadır.",
                    "Bir satıcının şeffaflığını ölçmenin pratik testi de budur: bu beş soruya net, yazılı ve gerekçeli cevap veren firma, faturada da sürpriz üretmez. Soruları geçiştiren, 'sorun olmaz, hallederiz' diyen firma ise belirsizliği kendi lehine saklıyordur.",
                ],
            },
            {
                baslik: "Site yönetimi için teklif değerlendirme adımları",
                paragraflar: [
                    "Site yönetimleri kiralamayı kat malikleri adına yaptığı için karar, bireysel müşterininkinden daha fazla belgelenmek zorundadır. Önerdiğimiz düzen üçlüdür: birincisi, en az iki dökümlü teklif alın ve ikisini de aynı kalem şablonuna oturtun — toplam yerine satırları karşılaştırın. İkincisi, işin kapsamını yazılı sabitleyin; 'cephe bakımı' değil, hangi cephelerde hangi kalemler. Kapsamı gevşek iş, ek fatura üretmeye en açık iştir. Üçüncüsü, ödeme ve iptal koşullarını yönetim kararına ekleyin; toplantıda savunulamayan koşul, imzalanmamalıdır.",
                    "Bu düzenin yan faydası, yönetim değişse bile kurumsal hafızanın kalmasıdır: bir sonraki dönem yönetimi, önceki dökümlü teklifleri açıp fiyat gelişimini görebilir. Tek rakamla kapatılmış eski işler ise hiçbir karşılaştırmaya temel olamaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sitemizin dış cephesi için üç teklif aldık, toplamlar çok farklı; nasıl karar verelim?",
                cevap:
                    "Toplamları bir kenara bırakıp üç teklifi aynı tabloya dökün: makine sınıfı ve erişimi, kaç gün, nakliye ayrı mı, operatör dahil mi, hazırlık (otopark-bariyer) kimde, hafta sonu farkı var mı. Deneyimimizde toplam farkının en yaygın kaynağı süre tahminidir — biri işi iki gün, öteki dört gün öngörmüştür ve düşük toplam aslında iyimser takvimdir; iş uzayınca uzatma faturasıyla en pahalısına dönüşür. Bu yüzden tekliflerde gün sayısının gerekçesini isteyin: hangi cephe kaç konum değişikliğiyle, günde kaç saat çalışılarak bitiyor. Gerekçeli takvim veren teklif, karşılaştırmanın sağlam zeminidir.",
            },
            {
                soru: "Fiyata KDV, sigorta gibi kalemler dahil mi? Teklifin neresinden anlarız?",
                cevap:
                    "Anlamanız gerekmez — düzgün teklif bunu tartışmaya yer bırakmadan yazar: vergilerin dahil olup olmadığı toplamın hemen yanında, sigorta kapsamı ise ayrı bir maddede belirtilir. Sigortada kritik ayrım şudur: makinenin kendi kaskosu ile üçüncü şahıslara ve çalışılan yapıya karşı sorumluluk kapsamı ayrı şeylerdir; 'sigortalıdır' cümlesi tek başına hangisini kastettiğini söylemez. Site işlerinde özellikle ikincisini sorun — cephe çalışmasında bir camın kırılması hâlinde sürecin nasıl işlediği, muafiyet tutarının kimde kaldığı yazılı olmalıdır. Bizim tekliflerimizde bu iki kapsam ayrı satırlarda, sınırlarıyla birlikte yer alır.",
            },
            {
                soru: "Depomuz için düzenli forklift kiralıyoruz ama her seferinde fiyat değişiyor; bunu sabitleyebilir miyiz?",
                cevap:
                    "Sabitlemenin yolu dönem sözleşmesidir ve dürüst kurgusu şöyledir: birim fiyat belirli bir dönem için yazılı bağlanır, buna karşılık sizden istenen tek şey tahmini kullanım sıklığınızı paylaşmanızdır — taahhüt değil, planlama verisi. Fiyatın hiç değişmemesi gerçekçi olmadığından, düzgün sözleşme değişim kuralını da yazar: hangi koşulda, ne kadar önceden bildirimle, hangi kaleme yansır. Böylece 'her seferinde farklı rakam' belirsizliği, 'kuralı belli, öngörülebilir fiyat' düzenine döner. Sizin tarafınızdaki kazanç bütçelenebilirlik, bizim tarafımızdaki kazanç planlanabilir talep — dönem sözleşmesi bu takasın yazılı hâlidir.",
            },
            {
                soru: "Gece çalışması için ne kadar fark ödenir?",
                cevap:
                    "Oran vermek yerine farkın nereden doğduğunu söyleyelim; çünkü fark sabit bir katsayı değil, işinizin kalemlerine göre değişen bir toplamdır. Gece penceresi üç kalemi etkileyebilir: operatör mesaisi (gece vardiyası farkı), teslimat lojistiği (gece indirme için ek düzen) ve bazı durumlarda ikinci operatör veya refakat gerekliliği. Buna karşılık gece işi bazı kalemleri küçültür de: trafiksiz nakliye daha kısa sürer, alan boş olduğu için hazırlık hızlanır ve iş gündüzden daha az kesintiyle biter. Teklifinizde bu artı ve eksiler ayrı satırlarda görünür; 'gece zammı' diye tek kalem görürseniz, içini açtırın.",
            },
            {
                soru: "Komşu siteyle aynı hafta iş yaptırmayı düşünüyoruz; ortak kiralama fiyatı gerçekten düşürür mü?",
                cevap:
                    "Düşürür ve hangi satırı düşürdüğünü net söyleyebiliriz: nakliye ile varsa konum kurulum payını. Makine bedeli değişmez — iki sitenin işi toplamda kaç gün sürüyorsa o kadar gün faturalanır — ama araç bir kez gelir, bir kez döner ve iki yönetim bu satırı bölüşür. İkinci bir etki daha vardır: ardışık planlanan işlerde boş gün riski azaldığı için takvim tarafında esneklik payı küçülür. Bunun işlemesi için tek koşul, iki yönetimin tarih penceresini birlikte esnetebilmesidir. Teklifi iki site için ayrı ayrı ama aynı organizasyona bağlı isteyin; bölüşülen satırlar her iki dökümde açıkça görünsün.",
            },
            {
                soru: "İşi kendi ustamız yapacak, sadece makine istiyoruz; fiyat ne kadar düşer?",
                cevap:
                    "Operatör satırı teklifinizden tamamen çıkar — düşüşün büyüklüğü işin kaç gün sürdüğüne bağlıdır, çünkü operatör günlük fiyatlanan bir kalemdir. Ama aynı anda iki şey değişir ve şeffaflık ikisini de söylemeyi gerektirir: birincisi, makineyi kullanacak kişinin ilgili ekipman için geçerli operatör belgesi şarttır ve teslimatta görülür; ikincisi, kullanım kaynaklı hasar sorumluluğu size geçer ve sözleşmedeki muafiyet-kapsam maddeleri operatörsüz senaryoya göre okunmalıdır. Kısa ve basit işlerde operatörsüz kiralama gerçek tasarruftur; dar alanlı, riskli veya makineye yabancı olunan işlerde ise operatör satırı, hasar ihtimalinin yanında ucuz bir sigortadır. Karar sizin; iki senaryonun dökümünü de veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Esenyurt'un yüksek nüfuslu, yoğun konut stoklu ve batı kesiminde sanayi-depo barındıran karma yapısı kamuya açık bilgidir; kalem haritası ve teklif değerlendirme düzeni firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:basaksehir": {
        h1: "Başakşehir'de Platform Kiralama Fiyatını Doğru Okumak",
        giris:
            "Başakşehir'de makine kiralayan taraf çoğu zaman bir bireysel esnaf değil, bir kurumdur: etaplı konut projesinin satın alma birimi, büyük bir sitenin profesyonel yönetim şirketi, bir yüklenici firma veya kurumsal bir tesisin idari işler departmanı. Kurumsal alıcının fiyat sorunu, pazarlık gücünün azlığı değil tekliflerin karşılaştırılamazlığıdır: üç tedarikçiden gelen üç doküman üç ayrı formatta yazılmıştır, biri götürü bedel vermiştir, öteki birim fiyat çarpı tahmini süre yazmıştır, üçüncüsü ise kapsamı muğlak bırakıp düşük görünmüştür. İhale masasına düşen bu karmaşa, çoğu zaman en ucuz yazılanın seçilmesi ve farkın iş sırasında ek faturalarla kapanmasıyla sonuçlanır. Bu sayfada Başakşehir'in kurumsal ağırlıklı talebine uygun bir çerçeve sunuyoruz: birim fiyatla götürü bedelin hangi işte hangisinin doğru olduğu, uzun süreli kiralamada fiyatın hangi maddelere bağlanması gerektiği ve satın alma dosyasına girecek bir teklifin taşıması gereken asgari satırlar.",
        maddeler: [
            {
                baslik: "Götürü bedel mi, birim fiyat mı",
                metin:
                    "Kapsamı kesin çizilebilen işte götürü bedel alıcıyı korur: iş uzasa da toplam değişmez, risk tedarikçidedir. Kapsamı doğası gereği belirsiz işte ise götürü bedel yanıltıcıdır — tedarikçi riski fiyata gömer ve siz gerçekleşmeyen riskin parasını ödersiniz; burada doğru araç birim fiyattır: gün, saat veya konum başına tanımlı bedel, gerçekleşen kadar fatura. Etaplı projelerin uzun ve değişken işlerinde birim fiyat, teslim öncesi kesin kapsamlı kısa işlerde götürü bedel doğru eşleşmedir. Tekliflerinizde hangi modelin önerildiğini ve neden önerildiğini sorgulayın.",
            },
            {
                baslik: "Uzun süreli kiralamada fiyatın zaman maddeleri",
                metin:
                    "Aylar süren bir proje kiralamasında imza günkü fiyat, işin sonuna kadar aynı kalmayabilir ve kalmayacaksa bunun kuralı baştan yazılmalıdır: fiyat hangi dönem için sabittir, güncelleme hangi göstergeye ve hangi bildirimle bağlıdır, güncelleme yalnızca hangi kalemlere işler. Kuralsız sözleşmede zam, tedarikçinin insafına kalır; kurallı sözleşmede ise bütçe revizyonu öngörülebilir bir hesaptır. Aynı bölümde erken iade ve askıya alma maddeleri de durmalıdır — projeler hızlanır, yavaşlar; makinenin boşta bekletildiği haftaların faturası, en sık dava konusu kalemdir.",
            },
            {
                baslik: "Proje ölçeğinde makine parkının fiyat kurgusu",
                metin:
                    "Tek makine kiralayan müşteriyle beş makinelik park kuran proje aynı yapıda fiyatlanmaz: parkta birim fiyat düşer ama karşılığında koordinasyon, yedek makine ve faz geçişi maddeleri devreye girer. Şeffaf park teklifi üç şeyi ayrıştırır: her makinenin kendi birim bedeli (torba toplam değil), park süresince değişim-yedek koşulları ve faz geçişlerinde makine ekleme-çıkarma birim fiyatları. Torba fiyatla alınan park, küçültülmek istendiğinde pazarlık masasına geri döner; kalem kalem alınan park ise sözleşmedeki formülle küçülür.",
            },
            {
                baslik: "Kurum yerleşkelerinde sürecin fiyata etkisi",
                metin:
                    "İlçedeki büyük kurum ve kampüs yapılarında iş, evrak ve izin süreçleriyle sarılıdır: yüklenici kayıtları, saha eğitimleri, çalışma pencereleri. Bu süreçlerin bir zaman maliyeti vardır ve dürüst teklif bunu saklamaz — ilk işin takviminde süreç payı açıkça gösterilir ve bu payın tekrar işlerinde sıfıra ineceği belirtilir. Süreç maliyetini hiç anmayan teklif, ya kurumsal sahayı tanımıyordur ya da o maliyeti iş sırasında 'öngörülemeyen gecikme' faturasına çevirecektir. İkisi de satın alma dosyasında kırmızı bayraktır.",
            },
            {
                baslik: "Yeni yapı stoğunun fiyat avantajı",
                metin:
                    "Başakşehir'in görece yeni ve planlı yapı stoku, kiralama maliyetinin sessiz bir avantajıdır: geniş site içi yollar ve düzgün sert zeminler, dar sokak manevrası, zemin takviyesi ve özel indirme düzeni gibi ek kalemleri çoğu işte gereksiz kılar. Bu, teklif karşılaştırmasında kullanabileceğiniz bir bilgidir — eski dokulu ilçeler için yazılmış risk paylarının Başakşehir teklifinde yer alması sorgulanmalıdır. Erişim koşulu kolay olan sahada fiyat, o kolaylığı yansıtmalıdır; standart 'İstanbul risk payı' burada meşru bir kalem değildir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Satın alma dosyası için asgari teklif satırları",
                paragraflar: [
                    "Kurumsal bir karara dayanak olacak kiralama teklifinin taşıması gereken satırlar aşağıdadır. Bu tabloyu tedarikçilerinize şablon olarak gönderebilirsiniz; aynı şablonla gelen teklifler ilk kez gerçekten karşılaştırılabilir olur.",
                ],
                tablo: {
                    basliklar: ["Satır", "İçermesi gereken", "Yokluğunda risk"],
                    satirlar: [
                        ["Makine tanımı", "Sınıf, erişim, güç tipi, model yılı aralığı", "Sahaya farklı makine gelir"],
                        ["Fiyat modeli", "Götürü/birim ayrımı ve gerekçesi", "İş sonu ek fatura tartışması"],
                        ["Süre ve takvim", "Gün tanımı, başlama koşulu, uzatma birimi", "Takvim kayması faturalanır"],
                        ["Nakliye ve kurulum", "Gidiş-dönüş, indirme koşulu, konum değişimi", "Sahada 'ek sefer' kalemi doğar"],
                        ["Sorumluluk", "Sigorta kapsamları, muafiyet, hasar ayrımı", "Anlaşmazlık hukuka taşınır"],
                        ["Değişiklik kuralları", "Fiyat güncelleme, erken iade, askı, iptal", "Her değişiklik yeni pazarlık olur"],
                    ],
                },
            },
            {
                baslik: "Düşük teklifin gerçek fiyatı: iş sırasında büyüyen toplam",
                paragraflar: [
                    "Kurumsal alımlarda klasik döngü şudur: kapsamı gevşek bırakılmış en düşük teklif seçilir, iş başlar, gevşek bırakılan her boşluk bir ek fatura olarak geri döner ve nihai toplam, elenen dökümlü tekliflerin üzerine çıkar. Bu döngünün panzehiri, seçim aşamasında toplam rakamı değil kapsam kesinliğini puanlamaktır: hangi teklif daha az 'iş sırasında belirlenecektir' ifadesi içeriyor, hangi teklif değişiklik senaryolarını (uzama, ek konum, makine değişimi) baştan fiyatlamış. Belirsizliği baştan fiyatlayan teklif, masada pahalı görünse bile projeksiyon toplamında çoğu zaman en ucuzudur.",
                    "Pratik bir puanlama önerisi: her tekliften 'koşula bağlı' ve 'sonra belirlenecek' ifadelerini sayın. Bu sayı, o teklifin fiyat belirsizliği endeksidir ve toplam rakam kadar karar verisidir.",
                ],
            },
            {
                baslik: "Etap takvimiyle fiyatın birlikte planlanması",
                paragraflar: [
                    "Etaplı projede kiralama maliyetini belirleyen asıl değişken günlük fiyat değil, makinelerin doğru zamanda gelip doğru zamanda gitmesidir: erken gelen makine boş gün yazar, geç gelen makine ekip bekletir — ikisi de günlük kiradan pahalı kayıplardır. Bu yüzden proje tekliflerimizde takvim, fiyatın eki değil parçasıdır: hangi makine hangi etap haftasında girer, hangi kilometre taşında çıkar, etap kayarsa hangi bildirimle kaydırılır. Takvimsiz verilen proje fiyatı, yarısı eksik bir fiyattır.",
                    "Etap kaymalarının maliyet paylaşımı da baştan yazılmalıdır: projeden kaynaklanan kaymada bekleyen makinenin koşulu, tedarikçiden kaynaklanan gecikmede ekip bekletme tazmini. Bu iki madde masada konuşulması zor, sahada konuşulması imkânsız maddelerdir — sözleşme aşaması tam da bu yüzden vardır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İhale dosyamıza koymak için 'liste fiyatınızı' istiyoruz; neden iş bazlı teklif veriyorsunuz?",
                cevap:
                    "Çünkü bağlamsız liste fiyatı, kurumsal dosyada bile yanıltıcıdır: aynı makinenin bir haftalık kesin takvimli işi ile üç aylık değişken projesi aynı birim fiyatı taşımaz ve tek sütunluk liste bu farkı gizler. Bunun yerine önerdiğimiz format, satın alma süreçlerinde daha iyi çalışır: parametrik teklif — makine sınıfı başına birim fiyat aralığının hangi değişkenlere (süre bloğu, operatör, nakliye mesafesi, saha koşulu) bağlı olduğunu gösteren tablo. Bu format dosyanıza girer, denetime dayanır ve tedarikçiler arası karşılaştırmayı bozan 'liste fiyatı ama koşullar farklı' problemini ortadan kaldırır.",
            },
            {
                soru: "Altı aylık projemizde fiyat sabitlemesi isteyebilir miyiz?",
                cevap:
                    "İsteyebilirsiniz ve iki dürüst cevap alırsınız: ya belirli bir dönem için gerçek sabitleme (tedarikçi kur-maliyet riskini üstlenir ve bunu birim fiyata yansıtır — sabitliğin de bir fiyatı vardır), ya da kurallı güncelleme (daha düşük başlangıç fiyatı, tanımlı gösterge ve bildirim süresiyle dönemsel revizyon). Hangisinin sizin için ucuz olduğu projenizin nakit planına bağlıdır: bütçesi baştan onaylanmış işte sabitleme rahatlıktır, esnek bütçeli işte kurallı güncelleme genelde daha ekonomiktir. Kaçınmanız gereken tek şey üçüncü senaryodur: sabitleme vaadi verip sözleşmeye kural yazmayan teklif — o vaat, ilk maliyet dalgasında masaya geri gelir.",
            },
            {
                soru: "Teklifinizde 'konum değişikliği' diye bir satır var; bu ne ve neden ayrıca fiyatlanıyor?",
                cevap:
                    "Konum değişikliği, makinenin aynı saha içinde bir çalışma noktasından diğerine taşınmasıdır ve kaynağı görünür bir emektir: büyük makinelerde bu geçiş söküm-kurulum, bazı durumlarda kısa nakliye gerektirir. Bunu ayrı satır yapmamızın nedeni tam olarak şeffaflıktır — gömülü olsaydı, tek konumda çalışan müşteri hiç kullanmayacağı geçişlerin payını da ödemiş olurdu. Satırın size sağladığı kontrol şudur: iş planınızı kaç konumla kurduğunuz fiyatınızı doğrudan belirler ve konum sayısını azaltan bir plan revizyonu, teklifte hangi tutarı düşüreceğini size baştan gösterir. Fiyatın kontrol edilebilir olması, düşük görünmesinden daha değerlidir.",
            },
            {
                soru: "Yönetim şirketiyiz, birden fazla sitede aynı işleri yaptırıyoruz; portföy indirimi mantığınız nedir?",
                cevap:
                    "Portföy indirimi bizde bir jest değil, hesaplanabilir bir maliyet düşüşünün paylaşımıdır ve üç kaynağı vardır: sitelerin işleri ortak takvime dizildiğinde nakliye turlaşır (araç bir bölgede birden fazla siteyi gezer), keşif ve evrak bir kez yapılır, talep öngörülebilir olduğu için makine planlaması ucuzlar. Bu üç kaynağın hangisinin ne kadar çalıştığı portföyünüzün coğrafyasına bağlıdır — siteleri birbirine yakın bir portföyde nakliye kaynağı güçlü çalışır, dağınık portföyde zayıf kalır. Teklifimizde portföy koşulu ayrı bölümde, kaynaklarıyla yazılır; böylece yönetim kurullarınıza 'neden bu firma' sorusunun cevabını rakamla değil mekanizmayla verirsiniz.",
            },
            {
                soru: "Proje yavaşladı, makineler iki hafta boş bekleyecek; bu sürenin faturası ne olur?",
                cevap:
                    "Sözleşmenizde askı maddesi varsa cevap bellidir; yoksa cevap pazarlıktır — ve biz ilk senaryoyu savunuruz. Askı maddesinin dürüst kurgusu şöyledir: bildirim süresine uyularak duraklatılan işte makine ya sahadan çekilir (yeniden geliş nakliyesi tanımlı bedelle) ya da sahada indirimli bekleme tarifesiyle kalır — hangisinin ekonomik olduğu askının beklenen süresine bağlıdır ve iki seçeneğin hesabını birlikte yaparız. Kaçınılması gereken, maddesiz sözleşmede boş geçen haftaların tam tarifeyle faturalanması veya tersine, tedarikçinin makineyi habersiz çekip başka işe vermesidir. Askı maddesi iki tarafı da bu iki kötü senaryodan korur.",
            },
            {
                soru: "Tekliflerinizi rakiplerle paylaşıp karşı teklif almamızda sakınca görür müsünüz?",
                cevap:
                    "Görmeyiz — dökümlü teklif tam da bu sınava dayansın diye yazılır. Hatta paylaşırken bir ricamız olur: rakip tekliften de aynı dökümü isteyin ki karşılaştırma satır bazında yapılabilsin. Kalem kalem eşleşen bir karşılaştırmada daha iyi koşul bulursanız iki ihtimal vardır: ya bizim bir kalemimizde gerçek bir iyileştirme payı vardır (görüşürüz, gerekçesiyle ya düzeltir ya açıklarız) ya da fark kapsamdadır ve bunu size satır göstererek kanıtlarız. Şeffaf fiyat politikasının sınavı, kimsenin teklifi görmediği gün değil, herkesinkinin masada olduğu gündür — o masadan çekinen tedarikçinin şeffaflığı sözde kalır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Başakşehir'in planlı-yeni yapı stoku ve kurumsal ölçekli proje-kampüs dokusu kamuya açık bilgidir; teklif şablonu, askı ve güncelleme madde kurguları firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:hadimkoy": {
        h1: "Hadımköy'de Manlift ve Forklift Kiralamada Maliyet Kalemleri",
        giris:
            "Hadımköy, Avrupa yakasının sanayi ve depo kuşağıdır: geniş parseller üzerinde üretim tesisleri, lojistik depolar ve antrepolar, aralarında da bu tesislere hizmet eden irili ufaklı işletmeler. Buradaki kiralama profili kentin içinden farklıdır — işler günlükten çok haftalık ve aylıktır, makineler tesiste konaklar, forklift talebi süreklidir ve fatura tek seferlik bir tutar değil, dönem boyunca akan bir maliyet kalemidir. Uzun süreli kiralamada fiyat şeffaflığının anlamı da değişir: soru artık yalnızca 'bugün kaça' değil, 'üç ay boyunca bu makinenin bana toplam maliyeti nedir ve bu toplamın içinde neler var' sorusudur. Bakım kimin sorumluluğunda, arızada geçen günün faturası ne olur, yakıt ve sarf kimde, dönem bitmeden iade edersek ne öderiz — bu soruların cevabı sözleşmede yazmıyorsa, dönem sonunda mutlaka faturada yazar. Bu sayfa, Hadımköy profilindeki uzun soluklu kiralamanın maliyet iskeletini madde madde açar.",
        maddeler: [
            {
                baslik: "Dönem kiralamada birim fiyatın düşme mantığı",
                metin:
                    "Aylık kiralamanın gün başı maliyeti günlük kiralamadan düşüktür ve bu indirim bir pazarlık lütfu değil, maliyet yapısının doğal sonucudur: nakliye bir kez yapılır ve aylara yayılır, makinenin boş gün riski ortadan kalkar, planlama maliyeti düşer. Şeffaf teklif bu mekanizmayı gösterir — günlük, haftalık ve aylık birim fiyatların yan yana yazılması, hangi süre bloğunda hangi eşiğin atlandığını görünür kılar. İşinizin gerçek süresini eşiklerle karşılaştırmak, çoğu zaman en etkili tasarruf kararıdır: on sekiz günlük iş, aylık blokla daha ucuza gelebilir.",
            },
            {
                baslik: "Bakım sorumluluğunun fiyat karşılığı",
                metin:
                    "Uzun kiralamada makine bakım ister ve 'bakım dahil' ifadesi tek başına hiçbir şey anlatmaz; neyin dahil olduğu yazılmalıdır: periyodik bakım (yağ, filtre, kontrol) tedarikçide midir, sarf malzemeler (lastik aşınması dahil mi) nasıl ayrılır, bakım için makinenin durduğu saatler kiradan düşer mi. Bu üç sorunun cevabı, iki teklif arasındaki görünmez farkın en büyük adresidir — bakımı kapsayan biraz yüksek fiyat, bakımı 'ayrıca faturalanır' bırakan düşük fiyattan dönem toplamında ucuz çıkabilir. Karşılaştırmayı gün fiyatıyla değil, dönem toplam sahip olma maliyetiyle yapın.",
            },
            {
                baslik: "Arıza gününün faturası kimde",
                metin:
                    "Üç ay çalışan makine bir gün arızalanabilir; şeffaflık, bu ihtimalin maliyet kuralını baştan yazmaktır. Sorulacak üç soru bellidir: arıza bildiriminden müdahaleye kadar tanımlı bir süre var mı, makine o gün çalışamadıysa günün kirası işler mi, tanımlı süre aşılırsa yedek makine mi gelir yoksa fatura mı durur. Bu kurallar yazılı olmayan sözleşmede arıza günü, kiracı ile tedarikçi arasında telefon münakaşasına döner. Yazılı olduğunda ise arıza, planlanmış bir istisna olarak sessizce yönetilir — fiyatın gerçek kalitesi böyle günlerde belli olur.",
            },
            {
                baslik: "Yakıt, şarj ve sarfın hesap düzeni",
                metin:
                    "Dizel forkliftin yakıtı, akülü platformun elektriği ve her ikisinin sarf kalemleri dönem maliyetinin sessiz satırlarıdır. Yaygın düzen yakıtın kiracıda, mekanik sarfın tedarikçide olmasıdır ama 'yaygın düzen' sözleşme değildir — sizin sözleşmenizde ne yazdığı önemlidir. Özellikle iki ayrıntı sorulmalıdır: dizel makine hangi yakıt seviyesiyle teslim edilir ve hangi seviyeyle iade edilmelidir (fark nasıl fiyatlanır), akü şarj düzeninde tesisinizin elektrik altyapısı yeterli midir yoksa şarj istasyonu kurulumu ayrı bir kalem midir. Küçük görünen bu satırlar, aylar çarpanıyla büyür.",
            },
            {
                baslik: "Erken iade ve dönem kırılması",
                metin:
                    "İşler plandan önce bitebilir; üç aylık sözleşmenin ikinci ayında makineye ihtiyacınız kalmayabilir. Bu senaryonun maliyeti sözleşmedeki erken iade maddesine bağlıdır ve maddeler üç tipte gelir: kalan sürenin tamamı faturalanır (kiracı aleyhine), kullanılan süre üst blok tarifesinden yeniden hesaplanır (dengeli — aylık indirimle aldığınız günler, fiilen kullandığınız bloğun tarifesine çevrilir), ya da bildirim süresine uyulursa cezasız çıkış (kiracı lehine, genelde biraz yüksek birim fiyatla). Hangi tipin yazıldığını imzadan önce bilmek, dönem kiralamanın en kritik okumasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Uzun dönem kiralama sözleşmesinin maliyet satırları",
                paragraflar: [
                    "Hadımköy profilindeki bir dönem kiralamasında sözleşmede karşılığı olması gereken maliyet satırları aşağıdadır. Her satır için 'kimde' sorusunun cevabı sözleşmenizde açıkça yazmalıdır; yazmayan satır, dönem sonunda tartışma satırıdır.",
                ],
                tablo: {
                    basliklar: ["Satır", "Tipik düzen", "Sözleşmede netleşmesi gereken"],
                    satirlar: [
                        ["Periyodik bakım", "Tedarikçide", "Kapsam listesi + bakım duruş saatinin kira etkisi"],
                        ["Yakıt / elektrik", "Kiracıda", "Teslim-iade yakıt seviyesi, şarj altyapı şartı"],
                        ["Lastik ve sarf", "Kullanıma göre paylaşımlı", "Normal aşınma / hasar sınırı"],
                        ["Arıza günü", "Tanımlı müdahale süresi", "Kira işler mi, yedek makine eşiği"],
                        ["Erken iade", "Blok tarifesi yeniden hesabı", "Bildirim süresi ve hesap formülü"],
                        ["Dönem sonu", "İade kontrolü birlikte", "Hasar tespiti usulü, temizlik şartı"],
                    ],
                },
            },
            {
                baslik: "Satın almak mı, kiralamak mı: dürüst kıyasın değişkenleri",
                paragraflar: [
                    "Forkliftini sürekli kullanan tesislerde 'artık satın alsak' sorusu meşrudur ve kiralama firması olarak bu soruya dürüst çerçeve borçluyuz. Kıyasın değişkenleri şunlardır: yıllık fiili kullanım gün sayınız (kağıt üstündeki değil), sahip olunan makinenin görünmez giderleri (bakım kadrosu veya servis sözleşmesi, yedek parça stoku, periyodik kontrol yükümlülükleri, değer kaybı, arızada ikame maliyeti) ve ihtiyacınızın değişkenliği (bu yıl gereken tonaj gelecek yıl da gerekecek mi). Kullanımı yüksek, sabit ve tek tip olan tesiste satın alma hesabı güçlenir; dalgalı, mevsimlik veya tip değiştiren ihtiyaçta kiralama neredeyse her zaman kazanır.",
                    "Aradaki melez çözüm de masada olmalıdır: çekirdek ihtiyacın uzun dönem kiralamayla, tepe yüklerin kısa takviyelerle karşılanması. Bu kurgu, satın almanın sabit maliyet riskini almadan kiralamanın esnekliğini korur — ve hangi kurgunun size uyduğunu, kullanım verinizle birlikte hesaplamaya hazırız.",
                ],
            },
            {
                baslik: "Konaklayan makinenin görünmeyen koşulları",
                paragraflar: [
                    "Aylarca tesisinizde kalan makine için sözleşme, kiralamanın ötesinde bir ortak yaşam düzeni tanımlar ve bu düzenin maddeleri de maliyet maddeleridir: makinenin gece park alanı (açıkta kalan makinenin yıpranması bakım kalemine, oradan da bir sonraki dönem fiyatına yansır), kullanacak personelin belge durumu (belgesiz kullanım, sigorta kapsamını düşürür ve hasarda tüm yük kiracıya döner) ve makinenin sözleşme dışı işlerde kullanılmaması (komşu tesise 'yarım günlüğüne' verilen forklift, hasar anında kapsamsızdır). Bu maddeler kısıtlama gibi görünür; gerçekte her biri, bir hasar senaryosunda faturanın kimde kalacağını netleştiren korumadır.",
                    "İyi kurulmuş konaklama düzeninin göstergesi, dönem boyunca sessizliktir: aylık kısa kontrol ziyaretleri dışında tedarikçiyi görmezsiniz, makine çalışır, fatura beklediğiniz tutarda gelir. Sürprizsiz geçen dönem, şeffaf sözleşmenin en somut çıktısıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üç aylık forklift kiralamasında fiyat neye göre belirleniyor?",
                cevap:
                    "Dört ana parametreye göre ve teklifte dördü de ayrı görünür: tonaj ve asansör yüksekliği (makine sınıfını belirler), güç tipi (akülü, dizel ve LPG'nin hem kira hem işletme maliyeti farklıdır — kapalı alanda çalışacaksanız seçenekler zaten daralır), kullanım yoğunluğu (tek vardiya ile üç vardiya, bakım sıklığını ve dolayısıyla dönem fiyatını değiştirir; yoğun kullanımı baştan söylemek, sonradan 'aşırı kullanım' tartışmasını önler) ve bakım kapsamı (tam kapsamlı mı, temel mi). Bu dört parametreyi netleştirmeden verilen üç aylık fiyat, ya risk payıyla şişkindir ya da dönem içinde revizyon üretecektir.",
            },
            {
                soru: "Makine bizde konaklarken başka tedarikçiden ikinci makine kiralarsak sorun olur mu?",
                cevap:
                    "Hukuken sorun olmaz — sözleşmemiz size münhasırlık dayatmaz ve bunu dayatmayı şeffaflıkla bağdaştırmayız. Yalnızca iki pratik konu netleşmelidir: iki tedarikçinin makineleri aynı sahada çalışıyorsa çalışma alanı ayrımı ve hasar durumunda hangi makinenin karıştığının tespiti kolay olmalıdır (karışık senaryoda iki sigorta birbirini işaret eder, süreç uzar); ikincisi, bizim makinemizin başka firmanın operatörü tarafından kullanılması sigorta kapsamı dışıdır. Bu arada dönem ortasında ek makine ihtiyacınız doğduysa bize de sorun — mevcut sözleşmenin üzerine eklenen makine, yeni müşteri fiyatından değil dönem koşulunuzdan fiyatlanır.",
            },
            {
                soru: "Aylık faturamız neden her ay aynı gelmiyor?",
                cevap:
                    "Gelmemesi normal olabilir ama nedeni her ay izlenebilir olmalıdır — bu izlenebilirlik bizim faturalama ilkemizdir. Dönem kirasının sabit bölümü her ay aynıdır; değişen bölüm, sözleşmede tanımlı hareketli kalemlerden gelir: o ay yapılmışsa konum değişikliği veya ek nakliye, mesai dışı kullanım farkları, hasar-onarım yansımaları ve varsa sözleşmedeki güncelleme maddesinin işlediği dönemler. Faturamızda bu kalemler sabit kiradan ayrı satırlarda, tarih ve gerekçeyle döker. Faturasında yalnızca tek toplam gördüğünüz herhangi bir tedarikçiden satır dökümü istemek hakkınızdır; dökülemeyen fatura, sorgulanamayan faturadır.",
            },
            {
                soru: "Depomuz yüksek raflı; kiraladığımız forkliftin raf sistemimize zarar vermesi durumunda ne olur?",
                cevap:
                    "Bu senaryonun cevabı iki belgeye bağlıdır ve ikisini de teslim gününde netleştiririz: sigorta kapsamı (üçüncü şahıs-mal sorumluluğu raf ve stok hasarını kapsıyor mu, muafiyet ne) ve operatör düzeni (bizim operatörümüzle çalışılıyorsa operasyon hatası bizim sorumluluk alanımızdadır; sizin personelinizle çalışılıyorsa kullanım hatası size döner — belge kontrolü ve teslim eğitimi bu yüzden formalite değildir). Ek olarak pratik bir koruma öneririz: dar koridorlu raf sistemlerinde işe başlamadan koridor ölçüsü-makine eşleşmesini birlikte doğrulamak. Hasarın en ucuz hâli, geometrik olarak imkânsız kılınmış hâlidir.",
            },
            {
                soru: "Kış aylarında iş azalıyor; makineyi üç ay iade edip baharda tekrar alsak mı, düşük tempoda elde mi tutsak?",
                cevap:
                    "Hesabı birlikte yapalım; iki senaryonun da maliyeti hesaplanabilir. İade senaryosunda kazancınız üç ayın kirasıdır; maliyetiniz iki nakliye (iade ve yeniden geliş), baharda makine müsaitliği riski ve varsa yeniden başlama işlemleridir. Elde tutma senaryosunda ise düşük tempolu dönem için sözleşmede indirimli bekleme koşulu tanımlanabilir — makine sahada kalır, kullanım azalır, tarife de azalır. Kaba kural şudur: kısa ve belirsiz duraklamalarda elde tutmak, uzun ve kesin duraklamalarda iade etmek kazandırır. Kışın gerçekten kaç hafta süreceğini geçen yılların verisiyle konuşursak, sınırın hangi tarafında olduğunuz netleşir.",
            },
            {
                soru: "Sözleşme bitiminde makineyi iade ederken nelerle karşılaşacağız? 'Hasar tespiti' bizi endişelendiriyor.",
                cevap:
                    "Endişenin kaynağı genelde tek taraflı tespittir ve çözümü usuldedir: bizim düzenimizde iade kontrolü iki tarafın katılımıyla, teslim günündeki fotoğraflı durum kaydı referans alınarak yapılır — teslimde belgelenmemiş hiçbir iz, iadede size yazılamaz. Değerlendirmenin ölçütü de sözleşmede tanımlıdır: normal kullanım yıpranması (boya sıyrıkları, lastik aşınması gibi) kiracıya yansıtılmaz; kullanım hatası kaynaklı hasar (darbe, kırık, deformasyon) tespit edilirse onarım bedeli belgeli faturayla ve muafiyet sınırları içinde paylaşılır. Bu usulün tamamı sözleşme ekinde yazılıdır; iade günü kural konuşulmaz, kural uygulanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Hadımköy'ün Avrupa yakasının sanayi-depo kuşağı olduğu kamuya açık bilgidir; dönem kiralama madde kurguları, fatura düzeni ve iade usulü firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:tuzla": {
        h1: "Tuzla'da Manlift ve Vinç Kiralama Fiyatını Ne Belirler",
        giris:
            "Tuzla'da makine kiralayan bir işletme — ister gemi inşa kuşağında ister ihtisas sanayi bölgelerinde çalışsın — fiyat teklifini masaya koyduğunda, kentin başka semtlerinden gelen alışkanlıkla okursa yanılır. Çünkü ağır sanayi ortamı, fiyatın bileşimini değiştirir: burada kiralanan makineler çoğunlukla yüksek erişimli ve büyük gövdelidir, büyük gövde özel nakliye demektir ve nakliye satırı kent içi işlerdeki gibi küçük bir dipnot olmaktan çıkıp toplamın ciddi bir parçası hâline gelir. Buna deniz kenarında çalışmanın makineye bindirdiği bakım yükü, tesislerin izin-prosedür süreçlerinin zaman maliyeti ve uzun süreli işlerin sözleşme yapısı eklenir. Anadolu yakasının bu en yoğun sanayi ilçesinde şeffaf fiyatın anlamı şudur: teklifin size yalnızca bir toplam değil, bu ortama özgü her ek yükün hangi satırda ne gerekçeyle durduğunu göstermesi — ve hangi yükün sizin planlama kararlarınızla hafifleyebileceğini saklamaması.",
        maddeler: [
            {
                baslik: "Büyük makinenin nakliye denklemi",
                metin:
                    "Yüksek erişimli dizel makineler ve ağır tonajlı forkliftler standart çekiciyle taşınmaz; ağırlık ve gabari, özel taşıma aracı ve bazen güzergâh planlaması gerektirir. Bu, teklifteki nakliye satırının kent içi küçük makine taşımasından yapısal olarak pahalı olmasının nedenidir ve dürüst teklif bu nedeni yazar: hangi araç tipi, tek seferde mi. İki pratik sonucu vardır — birincisi, büyük makinede kısa süreli kiralama oransız pahalıdır çünkü sabit nakliye az güne bölünür; ikincisi, aynı sahaya gelen iki makinenin taşıması birleştirilebiliyorsa bu tasarruf teklifte görünmelidir.",
            },
            {
                baslik: "Deniz kenarı çalışmanın fiyat içindeki izi",
                metin:
                    "Kıyı sahalarında uzun süre kalan makinede korozyona karşı sıklaştırılmış bakım uygulanır ve bu ek bakımın bir maliyeti vardır. Şeffaflık açısından kritik soru, bu maliyetin nerede durduğudur: dönem fiyatının içinde tanımlı bir kalem olarak mı, yoksa hiç anılmayıp dönem sonunda 'yıpranma bedeli' adıyla sürpriz olarak mı. Doğrusu ilkidir — kıyı koşulu keşifte bilinen bir veridir ve bilinen verinin maliyeti baştan fiyatlanır. Teklifinde kıyı çalışmasını hiç sormamış bir tedarikçinin dönem sonu yıpranma faturası, pazarlık değil itiraz konusudur.",
            },
            {
                baslik: "İzin ve prosedür süreçlerinin zaman fiyatı",
                metin:
                    "Tersane ve büyük tesislerin giriş süreçleri — evrak tanımlama, saha eğitimleri, izin sistemleri — takvimden gün yer ve o günlerin nasıl fiyatlandığı teklifte belli olmalıdır: makine sahaya girmiş ama prosedür nedeniyle henüz çalışamıyorsa sayaç işliyor mudur? Bizim yaklaşımımız ayrıştırmaktır: sürecin öngörülebilir kısmı (ilk kayıt, oryantasyon) takvime baştan yazılır ve fiyata dahildir; tesisten kaynaklanan öngörülemeyen beklemeler için ise bekleme tarifesi ayrı tanımlanır. Bu ayrım yazılmadığında, kapıda geçen her saat ucu açık bir fatura kalemine dönüşür.",
            },
            {
                baslik: "Vinç destekli işlerde fiyatın katmanları",
                metin:
                    "Vinç gerektiren kaldırma işlerinde teklif, platform kiralamasından daha katmanlıdır: makine bedelinin yanında kurulum-söküm süresi, kaldırma planının hazırlanması ve gerektiğinde sapancı-işaretçi gibi ek personel satırları vardır. En sık şeffaflık sorunu, saatlik görünen vinç fiyatının yanına kurulum saatlerinin sessizce eklenmesidir — dört saatlik kaldırma işi, kurulumla altı saat faturalanır ve bu fark teklifte görünmemiştir. Doğru teklif, kaldırma süresi ile toplam saha süresini ayrı yazar; siz de karşılaştırmayı toplam üzerinden yaparsınız.",
            },
            {
                baslik: "Uzun işin sözleşme yapısı: fiyat tek sayı değildir",
                metin:
                    "Aylarca süren donatım, bakım veya montaj işinde fiyat, tek bir sayı değil bir kurallar bütünüdür: dönem birim fiyatı, yoğun haftalarda ek makine koşulu, iş uzarsa uzatma tarifesi, erken biterse iade formülü. Ağır sanayi işlerinin süresi doğası gereği oynaktır — sözleşmenin kalitesi, bu oynaklığın her yönü için önceden yazılmış bir kural bulundurmasıyla ölçülür. Tek sayfalık 'aylık fiyat' yazan sözleşme, oynaklığın her gerçekleşmesinde yeniden pazarlık demektir ve yeniden pazarlıkta güçlü taraf, makinesi sahada duran taraftır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tuzla profilinde fiyatı etkileyen faktörler ve etki yönü",
                paragraflar: [
                    "Ağır sanayi ortamındaki bir kiralamada fiyatı yukarı veya aşağı çeken faktörler aşağıdadır. Sağ sütun, faktörün sizin kararlarınızla yönetilebilir olup olmadığını gösterir — yönetilebilir faktörler, pazarlıktan önce planlamayla küçültülür.",
                ],
                tablo: {
                    basliklar: ["Faktör", "Fiyata etkisi", "Yönetilebilir mi"],
                    satirlar: [
                        ["Makine gabari ve tonajı", "Nakliye satırını büyütür", "Kısmen — doğru boyutlandırmayla"],
                        ["Kiralama süresi bloğu", "Uzadıkça birim fiyat düşer", "Evet — işleri birleştirerek"],
                        ["Kıyı/koroziv ortam", "Bakım kalemi ekler", "Hayır — ama baştan fiyatlanmalı"],
                        ["Tesis giriş prosedürü", "İlk işe zaman maliyeti", "Evet — evrakı önden kapatarak"],
                        ["Vardiya/gece çalışması", "Operatör satırını artırır", "Kısmen — pencere planıyla"],
                        ["Ek personel (sapancı vb.)", "Ayrı satır ekler", "Evet — kendi ekibiniz belgeliyse"],
                    ],
                },
            },
            {
                baslik: "Aynı yakada olmanın fiyata katkısı: iki yaka gerçeği",
                paragraflar: [
                    "İstanbul'da makine kiralamanın coğrafi bir gerçeği vardır: ağır bir makinenin yakalar arasında taşınması, köprü geçişine bağımlı, saat kısıtlı ve uzun bir operasyondur — karşı yakadan gelen makinenin nakliye satırı bunu taşır. Tuzla'daki bir iş için Anadolu yakasında konuşlu makine parkıyla çalışmak, bu satırı yapısal olarak küçültür; teklif karşılaştırırken tedarikçinin makinesinin nereden geleceğini sormak bu yüzden meşru ve akıllıcadır. Düşük görünen ama karşı yakadan makine getirecek teklif, nakliyeyi ya eksik yazmıştır ya da teslim gününü köprü trafiğinin insafına bırakmıştır.",
                    "Aynı gerçeğin ikinci yüzü acil işlerde ortaya çıkar: plansız bir arıza veya sıkışan bir teslim tarihi için makine gerektiğinde, yakın parktan gelen makinenin hem varış süresi hem acil sevkiyat maliyeti düşüktür. Acil iş fiyatının makul kalması, büyük ölçüde bu mesafe meselesidir — aciliyet zammı diye anılan şeyin çoğu, aslında uzaklık zammıdır.",
                ],
            },
            {
                baslik: "Ağır sanayi müşterisi için teklif sorgulama listesi",
                paragraflar: [
                    "Tersane, OSB veya ağır imalat sahası için alınan bir kiralama teklifine şu altı soru sorulmalıdır: Nakliye satırı hangi araç tipini ve kaç seferi kapsıyor? Makine sahada prosedür beklerken sayaç işliyor mu? Kıyı veya koroziv ortam bakımı fiyata dahil mi, dönem sonunda ek kalem çıkar mı? Vinçli işlerde kurulum-söküm süresi toplam saate dahil mi? Gece ve hafta sonu vardiyalarının operatör farkı hangi satırda? İş uzarsa ve kısalırsa hangi formül işler? Bu altı sorunun altısına da yazılı cevap veren teklif, karşılaştırılabilir ve denetlenebilir tekliftir.",
                    "Sorulara sözlü cevap veren ama yazmaya yanaşmayan tedarikçi hakkında çıkarım basittir: yazılmayan cevap, gerektiğinde değiştirilecek cevaptır. Ağır sanayinin uzun ve pahalı işlerinde bu riski taşımak, hiçbir başlangıç indirimine değmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı makine için aldığımız tekliflerde nakliye ücretleri iki katına varan farklar gösteriyor; hangisi doğru?",
                cevap:
                    "Muhtemelen ikisi de kendi varsayımı içinde doğru — fark, varsayımlarda: biri makinenin yakın parktan geleceğini, öteki uzaktan getirileceğini hesaplamıştır; biri standart çekici öngörmüş, öteki gabariye uygun özel taşıma yazmıştır; biri tek yönü göstermiş, dönüşü iade gününe bırakmıştır. Doğru karşılaştırma için iki tedarikçiden de aynı üç bilgiyi isteyin: aracın çıkış noktası, taşıma aracı tipi ve satırın gidiş-dönüş toplamı olup olmadığı. Bu üçü eşitlendiğinde fark ya kapanır ya da gerçek bir verimlilik farkı olarak açıklanabilir hâle gelir. Eşitlemeden seçilen ucuz nakliye, iade gününde ikinci bir faturayla tamamlanır.",
            },
            {
                soru: "Tersane sahamızda iş bazen haftalarca uzuyor; uzayan her hafta için ilk haftaki fiyatı mı öderiz?",
                cevap:
                    "Sözleşmenize bağlı ve bizim önerdiğimiz kurgu şudur: uzatma tarifesi baştan yazılır ve çoğu durumda dönem birim fiyatıyla aynı veya ona yakındır — çünkü uzayan iş bizim için yeniden nakliye gerektirmeyen, planlaması kolay bir iştir ve bu kolaylığın fiyata yansıması gerekir. Dikkat etmeniz gereken ters senaryo, uzatmayı fırsata çeviren sözleşmelerdir: düşük başlangıç fiyatıyla işi alıp, uzatma haftalarını belirgin zamlı tarifeden yazan yapı, süresi oynak olan tersane işlerinde özellikle pahalıya oturur. İşinizin uzama ihtimali yüksekse, karşılaştırmayı başlangıç fiyatından değil 'muhtemel toplam süre × ilgili tarifeler' toplamından yapın.",
            },
            {
                soru: "Vinç kiralamada 'saatlik fiyat' verildi ama minimum süre şartı varmış; bu normal mi?",
                cevap:
                    "Minimum süre şartı sektörde yaygındır ve mantığı meşrudur — vincin kurulumu, operatör tahsisi ve nakliyesi, bir saatlik işe bölünemeyecek sabit maliyetlerdir; sorun şartın varlığı değil, teklifte görünür olmamasıdır. Saatlik fiyatın yanında üç bilgi mutlaka yazılmalıdır: minimum faturalanan süre, kurulum-söküm saatlerinin bu süreye dahil olup olmadığı ve mesai dışına sarkarsa saat farkı. Bu üçü yazılmadan verilen saatlik rakam, gerçek maliyetinizi hesaplamanıza yetmez. Kaldırma işiniz kısaysa asıl soracağınız soru da şudur: aynı gün içinde başka kaldırma işleriyle birleştirilme imkânı var mı — minimum sürenin maliyetini bölüşmenin tek yolu budur.",
            },
            {
                soru: "OSB'deki tesisimizde patlayıcı ortam bölgeleri var; bu, kiralama fiyatını değiştirir mi?",
                cevap:
                    "Değiştirebilir ve değişimin adresi bellidir: sınıflandırılmış bölgede standart makine çalışamayacağı için iş planı değişir — ya iş, bölge dışından uzun erişimle alınır (daha büyük makine, daha yüksek kira ve nakliye), ya tesisinizin gazdan arındırma pencerelerine sıkışır (dar pencere, vardiya planlaması ve bekleme koşulları) ya da uygun sınıf ekipman gerekir. Hangisinin geçerli olduğu keşifte, proses güvenliği sorumlunuzla netleşir ve teklif bu netlik üzerine yazılır. Bölge haritası bilinmeden verilen fiyat, sahada mutlaka revize olur; bu revizyonun adı da çoğu zaman 'ek maliyet çıktı' olur. Keşfi atlayan ucuz teklif, bu tesislerde en pahalı yoldur.",
            },
            {
                soru: "Uzun dönem kiralamada makinenin bakım günlerinde iş duruyor; durduğu günün kirasını neden ödeyelim?",
                cevap:
                    "Ödememelisiniz — ve düzgün sözleşme bunu zaten çözer: planlı bakım, sizin çalışma düzeninize göre (hafta sonu, vardiya boşluğu, işin durduğu gün) takvimlenir ki üretim kaybı doğmasın; buna rağmen bakımın çalışma gününüze denk gelmesi zorunluysa, o günün kira işlemeyeceği sözleşmede yazılır. Bizim dönem sözleşmelerimizde bakım düzeni ayrı bir maddedir: periyodu, tahmini süresi, günün kira durumu ve bakımın kimin ekibiyle yapılacağı belirtilir. Teklif karşılaştırırken bu maddeyi arayın — bakım gününü hiç anmayan sözleşme, o günü size faturalamak için sessiz kalıyor olabilir; sessizlik, sözleşme dilinde nadiren kiracı lehinedir.",
            },
            {
                soru: "Acil bir iş için gece yarısı makine istedik ve normalden yüksek fiyat söylendi; bu fark neyin karşılığı?",
                cevap:
                    "Meşru bir acil fiyatın içinde üç gerçek maliyet olabilir: mesai dışı sevkiyat ekibi (şoför ve indirme personelinin gece çalışması), operatör gece vardiyası farkı ve parkta o an müsait makinenin sizin işiniz için başka bir plandan çekilmesi. Bunların toplamı, standart teslimatın üzerinde bir tutarı açıklar — ama açıklamalıdır: hangi kalem ne kadar eklenmiş, sorduğunuzda satır satır söylenebilmelidir. Açıklanamayan kısım, aciliyetinizin fiyatlandırılmasıdır ve bunu ödemek zorunda değilsiniz. Acil işte bile teklif isteme hakkınız saklıdır: iki cümlelik yazılı mesajla kalem dökümü isteyin; ciddi tedarikçi bunu gece yarısı da gönderir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tuzla'nın gemi inşa kuşağı ve ihtisas OSB'leriyle Anadolu yakasının en yoğun sanayi ilçelerinden olduğu kamuya açık bilgidir; teklif sorgulama listesi ve sözleşme kurguları firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:gebze": {
        h1: "Gebze'de Forklift ve Platform Kiralama Maliyeti Nasıl Hesaplanır",
        giris:
            "Gebze'deki bir tesis yöneticisi İstanbul merkezli bir kiralama firmasını aradığında, telefonun öbür ucunda çoğu zaman kısa bir duraksama olur: 'Gebze biraz uzak, oraya nakliye farklı hesaplanır.' Bu cümle bazen gerçek bir maliyetin, bazen de sorgulanmamış bir alışkanlığın ifadesidir — ve ikisini ayırt etmenin tek yolu, nakliye satırının nasıl kurulduğunu bilmektir. İstanbul-Kocaeli hattının sanayi ve lojistik yoğunluğunda kiralama talebi süreklidir; depo işletmeleri, üretim tesisleri ve şantiyeler makineyi sık ve planlı kiralar. Böyle bir pazarda 'uzaklık payı' adı altında şişirilmiş satırlar da, kuşağın kendi içinden hizmet verildiğinde ortadan kalkan gerçek maliyetler de bir aradadır. Bu sayfa, Gebze aksındaki kiralamada mesafenin fiyata gerçekte nasıl girdiğini, kurumsal alımlarda karşılaştırılabilir teklif düzenini ve tekrarlı kiralamanın birim maliyeti nasıl aşağı çektiğini — rakam vermeden ama hesabın her adımını göstererek — anlatır.",
        maddeler: [
            {
                baslik: "Mesafe fiyata girer, ama nasıl girdiği önemlidir",
                metin:
                    "Nakliye maliyetinin mesafeyle artması doğaldır; sorgulanması gereken, artışın hangi noktadan hesaplandığıdır. Makinenin fiilen konuşlu olduğu park ile sahanız arasındaki mesafe gerçek maliyettir; firmanın merkez adresi ile sahanız arasındaki mesafe ise çoğu zaman alakasız bir referanstır. Teklif alırken sorulacak soru bu yüzden 'neredesiniz' değil 'bu makine nereden gelecek' olmalıdır. Kuşak içinde konuşlu makineyle çalışmak, İstanbul içinden yola çıkan araçların hem mesafe hem trafik riskini satırdan çıkarır — ve bu çıkarma, teklifte görünür olmalıdır.",
            },
            {
                baslik: "Otoyol ve köprü giderlerinin yansıtılma düzeni",
                metin:
                    "Ağır nakliye araçlarının otoyol ve köprü geçiş giderleri gerçektir ve faturaya yansıtılması meşrudur — koşulu, yansıtmanın belgeye dayalı ve önceden bildirilmiş olmasıdır. Şeffaf düzen şudur: teklifte nakliye satırının altında geçiş giderlerinin dahil mi ayrı mı olduğu yazar; ayrıysa, hangi güzergâhın öngörüldüğü belirtilir. Bulanık düzen ise faturada beliren isimsiz 'yol masrafları' kalemidir. Aradaki fark küçük görünür ama ilkeseldir: belgeli gider yansıtması bir hesap, isimsiz kalem bir boşluktur — ve boşluklar zamanla büyüme eğilimindedir.",
            },
            {
                baslik: "Depo işlerinde birim fiyatı düşüren üç kaldıraç",
                metin:
                    "Lojistik yoğun kuşakta kiralamayı ucuzlatan üç mekanizma vardır ve üçü de sizin elinizdedir: tarih esnekliği (aynı aksa giden başka teslimatlarla araç paylaşımı, nakliye payını böler), iş birleştirme (raf, aydınlatma, sprinkler gibi ayrı ayrı çağrılan kalemlerin tek kiralama dönemine toplanması, sabit maliyetleri tek sefere indirir) ve tekrar taahhüdü değil tekrar bilgisi (yılda kaç kez makine kiraladığınızı paylaşmak, tedarikçinin planlama maliyetini düşürür ve dönem koşulu istemenin zeminini kurar). Teklif görüşmesine bu üç kaldıraçla oturan müşteri, pazarlıkla değil yapıyla ucuzlatır.",
            },
            {
                baslik: "Şantiye kiralamasında hakediş uyumlu fiyat yapısı",
                metin:
                    "Kuşaktaki depo ve tesis inşaatlarında kiralama faturasının, yüklenicinin hakediş düzenine uyması pratik bir ihtiyaçtır: aylık kesilen, kalem dökümü hakediş formatına oturan ve makine bazında ayrıştırılabilen fatura, şantiye muhasebesinin işini görür. Bu bir fiyat kalemi değildir ama fiyatın yönetilebilirliğidir — torba fatura kesen tedarikçiyle çalışan yüklenici, kiralama giderini işveren onayından geçirmekte zorlanır. Teklif aşamasında faturalama düzenini konuşmak, fiyat konuşmasının ihmal edilen yarısıdır.",
            },
            {
                baslik: "İl sınırının iki yakasında fiyat farkı efsanesi",
                metin:
                    "Sahada sık duyulan bir soru şudur: 'İstanbul fiyatı mı uygulanır, Kocaeli fiyatı mı?' Dürüst cevap, il sınırının kendisinin bir fiyat parametresi olmadığıdır — makine il tabelasını geçerken pahalılaşmaz. Fiyatı değiştiren gerçek değişkenler mesafe, makine sınıfı, süre ve saha koşuludur; bunlar sınırın iki yanında da aynı mantıkla işler. 'Şehir dışı tarifesi' adıyla gelen oransız farkların çoğu, bu değişkenlere değil alışkanlığa dayanır. Teklifinizde böyle bir fark görürseniz, hangi gerçek maliyete karşılık geldiğini sorun; cevap mesafe hesabıysa denetlenebilir, tarife alışkanlığıysa pazarlık edilebilirdir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Nakliye satırının bileşenleri: neyi ödüyorsunuz",
                paragraflar: [
                    "Kiralama teklifindeki nakliye satırı tek bir tutar olarak görünse de, altında hesaplanabilir bileşenler yatar. Aşağıdaki tablo bu bileşenleri, her birinin neye bağlı olduğunu ve sizin hangi kararla etkileyebileceğinizi gösterir. Nakliye pazarlığının doğru zemini bu tablodur; toplam üzerinden yapılan pazarlık, hangi bileşenin gevşediğini göstermez.",
                ],
                tablo: {
                    basliklar: ["Bileşen", "Neye bağlı", "Sizin etkiniz"],
                    satirlar: [
                        ["Araç tahsisi", "Makinenin ağırlık ve gabarisi", "Doğru boyutlu makine seçimi"],
                        ["Mesafe payı", "Parkın konumu ↔ saha", "Yakın parklı tedarikçi tercihi"],
                        ["Geçiş giderleri", "Güzergâh (otoyol/köprü)", "Belgeli yansıtma isteme"],
                        ["İndirme koşulu", "Saha kapısı, rampa, zemin", "Alanı önceden hazırlama"],
                        ["Sefer sayısı", "Gidiş-dönüş + ara transferler", "İşleri tek döneme toplama"],
                        ["Paylaşım imkânı", "Aynı aksta başka teslimat", "Tarih esnekliği tanıma"],
                    ],
                },
            },
            {
                baslik: "Kurumsal satın almada 'en düşük teklif' tuzağının kuşak versiyonu",
                paragraflar: [
                    "Bu kuşaktaki tesislerin çoğu alımı satın alma birimleri yürütür ve birim, doğal olarak karşılaştırma tablosunun en düşük toplamına yönelir. Kiralamada bu refleksin bilinen zaafı, tekliflerin kapsam eşitliği denetlenmeden toplamlarının kıyaslanmasıdır: nakliyesi eksik yazılmış, gün tanımı farklı, bakımı hariç bırakılmış bir teklif tabloda ucuz görünür ve iş sırasında farkını tahsil eder. Önerimiz, karşılaştırma tablosuna toplam sütunundan önce üç denetim sütunu eklemektir: nakliye gidiş-dönüş mü, gün tanımı ne, bakım-arıza düzeni yazılı mı. Bu üç sütunu dolduramayan teklif, toplamı ne olursa olsun tabloya eksik girmiştir.",
                    "İkinci öneri, teklif geçerlilik sürelerini eşitlemektir: farklı tarihlerde alınmış tekliflerin kıyası, fiyat koşulları değişmiş olabileceği için yanıltır. Aynı hafta içinde, aynı şablonla, aynı iş tanımına alınan teklifler — kurumsal alımın temiz zemini budur.",
                ],
            },
            {
                baslik: "Dönem müşterisi olmanın hesabı: sadakat değil, matematik",
                paragraflar: [
                    "Tekrarlı kiralayan tesislere önerdiğimiz dönem düzeni, bir sadakat programı değil karşılıklı maliyet düşüşünün paylaşımıdır ve mekanizması açıktır: talebi önceden bilinen müşteri için makine planlaması ucuzlar (boş gün riski azalır), keşif ve evrak maliyeti ilk işte ödenir ve sonraki işlere yayılır, faturalamadan iletişime işlem maliyeti düşer. Bu düşüşlerin toplamı, dönem koşulu olarak birim fiyata yansıtılır ve sözleşmede yazılı durur — ağızdan verilen 'müdavim indirimi' değil, hesaplanmış ve bağlanmış bir koşuldur.",
                    "Düzenin denetlenebilirliği de önemlidir: dönem koşulunuzun hangi kullanım seviyesine bağlı olduğu ve seviye değişirse koşulun nasıl güncelleneceği baştan tanımlanır. Böylece iki yıl sonra 'fiyatımız neden değişti' sorusunun cevabı, bir yetkilinin hafızasında değil sözleşmenin formülünde bulunur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimize daha önce gelen firma bu kez 'mazot zammı' gerekçesiyle nakliyeyi artırdı; bu gerekçe geçerli mi?",
                cevap:
                    "Gerekçe gerçek olabilir; geçersiz olan, denetlenemez biçimde sunulmasıdır. Yakıt maliyeti nakliye satırının bileşenlerinden biridir ve arttığında satıra yansıması ekonomik olarak savunulabilir — ama yansıma oransal olmalıdır: yakıt, nakliye maliyetinin tamamı değil bir bölümüdür ve yüzde olarak artışı, satırın tamamını aynı yüzdeyle büyütmez. Tedarikçinizden isteyeceğiniz şey basittir: nakliye satırının kaba bileşen dağılımı ve zammın hangi bileşene ne oranda işlediği. Bu hesabı veren firmayla fark konuşulur ve genelde makul bir noktada bağlanır; hesap yerine 'her şey zamlandı' cevabı veren firmada ise artış, maliyet değil fırsat yansımasıdır.",
            },
            {
                soru: "Yıllık bakım duruşumuz için beş makine birden kiralayacağız; toplu kiralamada fiyat nasıl işler?",
                cevap:
                    "Toplu kiralamanın indirimi üç kaynaktan doğar ve teklifinizde üçünün de izini görmelisiniz: nakliye birleştirmesi (beş makine daha az seferde taşınır — kazanç doğrudan nakliye satırına yansımalı), planlama kesinliği (duruş tarihi belli olduğundan makineler boş gün riski olmadan tahsis edilir — kazanç birim fiyata yansımalı) ve operasyon tekilliği (tek sözleşme, tek teslimat koordinasyonu — kazanç varsa sabit giderlerde görünmeli). Dikkat noktası şudur: beş makinenin torba toplam fiyatla verilmesi, duruş planınız değişip bir makineyi çıkarmak istediğinizde sizi pazarlığa mahkûm eder. Makine bazında dökümlü toplu teklif isteyin; indirim toplamda değil, satırlarda dursun.",
            },
            {
                soru: "Kısa süreli işlerde nakliye, kiradan pahalı çıkıyor; bu normal mi, kaçınmanın yolu var mı?",
                cevap:
                    "Kısa iş + büyük mesafe kombinasyonunda normaldir ve bunu gizlemeyen teklif dürüst tekliftir — nakliye sabit bir maliyettir, bir güne bölününce oranı büyür. Kaçınmanın yolları da yapısaldır: birincisi, işi tek güne değil bölgenizden geçen bir teslimat turuna denk getirmek (tarih esnekliğiyle nakliye payı bölüşülür); ikincisi, ertelenmiş küçük işleri biriktirip tek kiralamada toplamak (nakliye aynı kalır, bölen büyür); üçüncüsü, yakın parkı olan tedarikçiyle çalışmak (bölünen küçülür). Üçü de sizin planlamanızla çalışır. Çalışmayan yol ise nakliyeyi pazarlıkla sıfırlatmaktır — sıfır görünen nakliye yok olmamıştır, başka bir satıra taşınmıştır.",
            },
            {
                soru: "Teklifte 'saha koşullarına göre fiyat değişebilir' notu var; bu not bize ne kadar risk yükler?",
                cevap:
                    "Notun kendisi değil, sınırsızlığı risktir. Saha koşulu gerçek bir değişkendir — zemin taşıma kapasitesi, kapı ölçüleri, rampa eğimi keşifte görülmeden kesinleşemez — ve bu belirsizliği not düşmek dürüstlüktür. Ancak düzgün teklif, notu sınırlar: hangi koşulların fiyatı etkileyebileceğini sayar (örneğin zemin takviyesi gerekirse, indirme özel düzen isterse) ve etkinin nasıl fiyatlanacağını söyler (ek kalemler birim fiyatla, tarafların onayıyla). Sınırsız 'değişebilir' notu ise açık çektir. Önerimiz nettir: keşfi teklif öncesine çektirin — keşif yapılmış sahada bu nota gerek kalmaz ve fiyat, imzalandığı gibi gerçekleşir.",
            },
            {
                soru: "Rakip firma 'nakliye bizden' kampanyası yapıyor; gerçekten bedava nakliye olabilir mi?",
                cevap:
                    "Nakliyenin bir maliyeti vardır ve bir yerden karşılanır; soru, nereden karşılandığıdır. Üç dürüst ihtimal vardır: kampanya gerçek bir verimlilikten besleniyordur (araç zaten o aksa gidiyordu — bu meşru ve sürdürülebilir), maliyet birim kiraya yedirilmiştir (toplamda fark yoktur, sadece satır kaybolmuştur — karşılaştırmayı toplam üzerinden yaparsanız görürsünüz) ya da kampanya geçici bir pazar hamlesidir (ilk kiralamada gerçekten ucuzdur, ikincisinde koşullar değişir). Hangisi olduğunu anlamanın yolu yine dökümdür: kampanyalı tekliften de kalem dökümü isteyin ve dönem koşullarını sorun. Bedava görünen satırın arkasındaki hesabı gösterebilen firma, kampanyası bitince de öngörülebilir kalır.",
            },
            {
                soru: "Uzun vadede kendi forkliftimizi almak yerine sizinle çalışmamızın bize maliyet avantajı ne olur?",
                cevap:
                    "Bu sorunun cevabı sizin kullanım verinizde saklıdır ve biz hesabı iki taraflı açarız: sahip olmanın görünür maliyeti (satın alma, finansman) yanında görünmez kalemleri vardır — periyodik kontrol yükümlülükleri, bakım-servis, yedek parça, operatör dışı arıza günlerinde ikame, değer kaybı ve ihtiyaç değiştiğinde elden çıkarma zorluğu. Kiralamanın maliyeti ise tektir ve faturada görünür. Kullanımınız yıl boyu yüksek ve sabitse satın alma hesabı güçlenebilir; dalgalı, mevsimlik veya büyüyen-küçülen bir operasyonunuz varsa kiralama esnekliği kazanır. Size önerimiz somuttur: son bir yılın fiili kullanım günlerini paylaşın, iki senaryonun karşılaştırma tablosunu birlikte dolduralım — karar sizin, hesap ortak olsun.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gebze'nin İstanbul-Kocaeli hattındaki sanayi ve lojistik yoğunluğu kamuya açık bilgidir; nakliye bileşen analizi, karşılaştırma sütunları ve dönem koşulu kurgusu firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:pendik": {
        h1: "Pendik'te Platform ve Manlift Kiralama Ücretlerinin Anatomisi",
        giris:
            "Pendik'in kiralama talebi saat kavramıyla iç içedir: havalimanı çevresindeki lojistik tesisler operasyon boşluklarında çalışır, Kurtköy aksındaki üretim ve teknoloji yerleşkeleri vardiya düzenine bağlıdır, sahil hattındaki işletmeler ise yaya yoğunluğunun düştüğü dilimleri bekler. Zamanın bu kadar değerli olduğu bir yerde kiralama fiyatının en çok tartışılan bölümü de zamanla ilgili kalemlerdir: gece penceresinin farkı, teslimatın erken gelmesinin bedeli, pencere kaymasında beklemenin faturası, işin yarım kalmasında ikinci seferin maliyeti. Bu kalemlerin hiçbiri gizli olmak zorunda değildir — ama teklif alışkanlıkları onları çoğunlukla gizli bırakır ve fatura günü tartışma doğar. Bu sayfada Pendik profiline uygun bir yaklaşım kuruyoruz: zamana bağlı her fiyat kaleminin adı, doğduğu gerçek maliyet ve teklifte durması gereken yer. Rakam vermiyoruz; onun yerine, hangi rakamı sorgulamanız ve hangi satırı yazdırmanız gerektiğini veriyoruz.",
        maddeler: [
            {
                baslik: "Standart mesai dışının fiyat kalemleri",
                metin:
                    "Gece, hafta sonu ve erken sabah çalışmalarının ek maliyeti üç gerçek kaynaktan doğar: operatörün mesai dışı çalışma karşılığı, sevkiyat ekibinin mesai dışı teslimatı ve nadiren, gece çalışması için ek güvenlik-aydınlatma düzeni. Bunların dışında kalan her 'gece zammı', kaynağı sorulması gereken bir kalemdir. Madalyonun öbür yüzü de teklifte görünmelidir: gece işi trafiksiz nakliye ve kesintisiz çalışma sayesinde bazı kalemleri küçültür. Dürüst gece teklifi, ekleri ve düşüşleri ayrı satırlarda gösterip net farkı ortaya koyandır.",
            },
            {
                baslik: "Bekleme ücretinin meşru ve gayrimeşru hâlleri",
                metin:
                    "Lojistik tesislerin pencereleri kayabilir ve makine-operatör kapıda bekleyebilir; bu beklemenin bir maliyeti vardır ve fiyatlanması meşrudur — koşulu, kuralın önceden yazılmış olmasıdır: ne kadarlık bekleme tolerans içindedir, tolerans aşımı hangi birimle fiyatlanır, bekleme kimin kusurundan doğarsa kime yazılır. Gayrimeşru olan, hiç konuşulmamış beklemenin fatura günü 'operasyon kaybı' adıyla belirmesidir. Pencereli çalışan her tesise önerimiz, sözleşmeye karşılıklı bekleme maddesi koydurmaktır: bizim gecikmemizin size, sizin pencerenizin bize maliyeti aynı netlikte tanımlansın.",
            },
            {
                baslik: "Teslim saati taahhüdünün fiyatla ilişkisi",
                metin:
                    "'Sabah dokuzda sahada olsun' ile 'gün içinde gelsin' aynı hizmet değildir ve aynı fiyatı taşımak zorunda da değildir. Saat taahhüdü, tedarikçi tarafında kesin araç ve rota tahsisi demektir; esnek teslimat ise aracın diğer işlerle verimli birleştirilmesine izin verir. Bu farkın şeffaf hâli, teklifte seçenek olarak sunulmasıdır: kesin saatli teslim ile esnek pencereli teslimin koşulları ayrı yazılır ve seçim size bırakılır. Saat hassasiyeti gerçek olan işte taahhüde ödenen fark yerini bulur; hassasiyeti olmayan işte esneklik, en kolay tasarruftur.",
            },
            {
                baslik: "Kısa pencerede yarım kalan işin ikinci sefer maliyeti",
                metin:
                    "Dar pencereye sığdırılamayan iş ikinci bir sevkiyat doğurur ve bu, zamana bağlı işlerin en pahalı senaryosudur: nakliye ikilenir, kurulum tekrarlanır, pencere yeniden beklenir. Şeffaf fiyat konuşması bu riski baştan masaya koyar — işin pencereye sığıp sığmayacağı keşifte dürüstçe değerlendirilir ve sığmıyorsa iki seçeneğin maliyeti karşılaştırılır: işi iki pencereye bölmek (makineyi arada sahada bırakma koşuluyla, ikinci nakliye olmadan) veya daha geniş tek pencere için tesisle görüşmek. En kötü seçenek, iyimser tek pencere planıyla girip yarım kalmaktır; onun faturası her zaman en yüksektir.",
            },
            {
                baslik: "Hassas tesislerde koruma önlemlerinin fiyat satırı",
                metin:
                    "Teknoloji yerleşkeleri ve temiz üretim alanlarında çalışma, ek önlemlerle gelir: zemin koruma serimi, iz bırakmayan lastik, düşük gürültü şartı, bazı sahalarda giriş eğitimi. Bu önlemlerin bir kısmı makine seçimiyle karşılanır (ve makine sınıfının fiyatına içkindir), bir kısmı ise ayrı emek-malzeme kalemidir. Teklifte doğru duruş şudur: tesis şartlarınız keşifte alınır, hangi şartın hangi satıra yansıdığı görünür yazılır. 'Hassas tesis farkı' gibi toptan bir kalem gördüğünüzde açtırın — içinden çıkanların bir kısmı makinede zaten dahil olabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zaman dilimi ve fiyat kalemi ilişkisi",
                paragraflar: [
                    "Aynı işin farklı zaman dilimlerinde fiyat yapısının nasıl değiştiği aşağıdadır. Amaç zam tablosu vermek değil, hangi dilimde hangi kalemin devreye girdiğini ve hangisinin küçüldüğünü göstermektir — pencere seçiminizi bu dengeyle yapın.",
                ],
                tablo: {
                    basliklar: ["Zaman dilimi", "Devreye giren kalem", "Küçülen kalem", "Kime uygun"],
                    satirlar: [
                        ["Hafta içi mesai", "Standart — ek kalem yok", "—", "Pencere kısıtı olmayan işler"],
                        ["Erken sabah", "Sevkiyat ekibi erken mesaisi", "Trafik riski, teslim sapması", "Sahil ve cadde işleri"],
                        ["Gece penceresi", "Operatör vardiya farkı", "Nakliye süresi, iş kesintisi", "Lojistik ve AVM işleri"],
                        ["Hafta sonu", "Operatör hafta sonu farkı", "Tesis içi koordinasyon yükü", "Üretim duruş işleri"],
                        ["Bölünmüş pencere", "Makine sahada konaklama", "İkinci nakliye (önlenir)", "Dar pencereli tesisler"],
                    ],
                },
            },
            {
                baslik: "Pencereli tesisler için sözleşme dili: iki yönlü taahhüt",
                paragraflar: [
                    "Saat hassasiyetli işlerde sağlıklı sözleşme, taahhüdü tek yönlü bırakmaz. Tedarikçi tarafının taahhüdü teslim saatidir ve ihlalinin sonucu yazılır: geç gelen makinenin o günkü koşulu, pencere tamamen kaçarsa telafi düzeni. Müşteri tarafının taahhüdü ise pencerenin hazır olmasıdır ve onun da sonucu yazılır: hazır olmayan alanda beklemenin birimi, pencere iptalinin bildirimi. Bu iki yönlü yapı, tarafları suçlaşmadan çalıştıran tek yapıdır — tek yönlü sözleşmede her aksama, güç dengesine göre faturalanır.",
                    "Pratik bir ek: pencereli işlerde iletişim kanalı da sözleşmeye yazılmalıdır — kayma kararını kim, kime, en geç ne zaman bildirir. Zamana bağlı işlerin çoğu parası, geç haberleşmeden kaybedilir.",
                ],
            },
            {
                baslik: "Havalimanı çevresi işlerinde süreç maliyetinin dürüst planlanması",
                paragraflar: [
                    "Havalimanına komşu sahalarda çalışma bazı ek süreçler isteyebilir: giriş kayıtları, araç-personel bildirimleri, bazı durumlarda yükseklik bildirimi. Bu süreçlerin maliyeti para olmaktan çok zamandır ve dürüst teklif bunu takvimde gösterir: ilk işte süreç payı kaç gün, bu payın fiyat karşılığı var mı (çoğunlukla yoktur — evrak bizim rutinimizdir), tekrar işlerde süreç nasıl kısalır. İlk işi süreçsiz fiyatlayıp sonra 'bildirimler uzadı' diye takvimi kaydıran tedarikçi, fiyatı değil taahhüdü ihlal etmiştir — ikisi de aynı kapıya çıkar: planlayamadığınız iş, pahalı iştir.",
                    "Süreçli sahalarda bir kez kurulan düzenin değeri de teklifte görünmelidir: kayıtları tamamlanmış tesiste ikinci ve sonraki işler hem hızlı hem yalındır. Bu, tekrarlı çalışmayı süreçli sahalarda özellikle ekonomik kılar — düzen kurulmuşken tedarikçi değiştirmenin görünmez maliyeti, yeni firmayla süreci baştan yaşamaktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gece 01:00-05:00 penceresinde çalışacağız; gündüz işine göre ne kadar fark öderiz?",
                cevap:
                    "Oran söylemek yerine farkın nasıl hesaplandığını gösterelim — teklifinizde de aynen böyle görünür: gece penceresi operatör satırına vardiya farkı ekler ve makinenin akşamdan tesise alınması gerekiyorsa sevkiyat saati kalemine yansır; buna karşılık gece nakliyesi trafiksiz olduğu için yol süresi kısalır ve dar pencerede kesintisiz çalışıldığı için iş, gündüz eşdeğerinden daha az saatte biter. Net fark, bu artı ve eksilerin toplamıdır ve işinizin niteliğine göre beklediğinizden küçük çıkabilir. Kesin cevap için pencere saatlerinizi, işin kapsamını ve makinenin geceden yerleşip yerleşemeyeceğini paylaşın; dökümlü gece teklifi aynı gün elinizde olur.",
            },
            {
                soru: "Tesisimiz teslimatta güvenlik kontrolü yapıyor ve bazen uzun sürüyor; bu süre bize mi faturalanır?",
                cevap:
                    "Sözleşmede yazılmamışsa tartışma, yazılmışsa hesap konusudur — biz ikincisini kurarız: teslimatta makul bir kontrol-giriş süresi (tesislerin standart işleyişi) nakliye hizmetinin doğal parçasıdır ve ayrıca faturalanmaz; bunun üzerine çıkan beklemeler için sözleşmede tolerans süresi ve aşım birimi tanımlanır. Sizin tarafınızdan yönetilebilir bir nokta da vardır: araç ve sürücü bilgilerinin tesise önden bildirilmesi, kontrol süresini çoğu zaman tolerans içine çeker. İlk teslimatta bu bildirimi birlikte yaparız; sonraki teslimatlarda kayıtlı düzen işler ve bekleme konusu pratikte gündemden düşer.",
            },
            {
                soru: "İş uzarsa pencereyi kaçırıp bir hafta sonrasını beklemek zorunda kalıyoruz; makine bu arada sahada kalabilir mi, maliyeti nasıl işler?",
                cevap:
                    "Kalabilir ve bu çoğu zaman en ekonomik çözümdür — iki senaryoyu karşılaştıralım: makine iade edilip haftaya yeniden gelirse iki nakliye ve yeni kurulum ödersiniz; sahada kalırsa nakliye sıfırlanır ve araya giren günler için tam kira değil, sözleşmede tanımlı bekleme tarifesi işler (makine çalışmıyor ama sahanızda tahsisli duruyor — tarifenin mantığı budur). Hangisinin ucuz olduğu ara sürenin uzunluğuna bağlıdır ve sınır hesabını teklifle birlikte veririz. Tek koşulumuz güvenli park alanıdır: makinenin sahada bekleyeceği nokta, tesisinizle birlikte belirlenir ve bu bekleme sözleşmeye tarih-tarife olarak yazılır.",
            },
            {
                soru: "Sahildeki restoranımız için birkaç saatlik tabela işi var; kısa iş için de tüm bu kalemleri mi konuşacağız?",
                cevap:
                    "Hayır — kısa işin teklifi de kısadır ama üç şey yine yazılı olmalı: toplam bedel neyi kapsıyor (makine, nakliye, operatör — tek satırda birleşik olabilir, yeter ki kapsamı yazsın), hangi saat aralığında yapılacak ve hava-rüzgâr engeli çıkarsa erteleme koşulu ne. Sahil işlerinde üçüncü madde özellikle önemlidir: deniz kenarında rüzgâr ölçümü kısa işte de yapılır ve limit aşımında iş ertelenir — ertelemenin ücretsiz olduğu, yazılı teklifte tek cümledir ama fatura gününde çok şey değiştirir. Bir de tasarruf ipucu: sahil aksındaki kısa işler sabah erken dilimde ve aynı bölgedeki başka işlerle aynı güne denk getirildiğinde belirgin ucuzlar; tarih esnekliğiniz varsa söyleyin.",
            },
            {
                soru: "Yılda birkaç kez, hep aynı depoda çalışıyorsunuz; neden her teklifi sıfırdan alıyoruz, sabit bir tarifemiz olamaz mı?",
                cevap:
                    "Olabilir ve olması iki tarafın da lehinedir — buna dönem koşulu diyoruz: sahanız zaten kayıtlı, giriş düzeniniz kurulu, iş tipleriniz belli; bu bilinirlik bizim maliyetimizi düşürür ve düşüşün payı size birim koşul olarak yansır. Kurgusu şöyledir: tipik iş kalemleriniz (raf bölgesi aydınlatması, sprinkler kontrolü gibi) için birim şartlar bir kez yazılır, geçerlilik dönemi tanımlanır ve her yeni iş tek bildirimle bu şartlardan fiyatlanır — teklif turu, pazarlık ve bekleme ortadan kalkar. Dönem sonunda koşullar gözden geçirilir; değişecekse gerekçesiyle konuşulur. Sabit tarifenin şeffaf hâli budur: sabitlenen rakam değil, kuraldır.",
            },
            {
                soru: "Teklifinizdeki 'operatör mesai tanımı: 8 saat' ifadesi ne anlama geliyor; işimiz 10 saat sürerse ne olur?",
                cevap:
                    "Tam da sorulması gereken soru — bu satır, fatura sürprizlerinin en sık adresidir ve biz onu baştan yazarız: operatörlü kiralamada günlük bedel, tanımlı mesai saatini kapsar; üzeri, teklifte yazılı saat birimiyle fiyatlanır. On saatlik iş öngörüyorsanız iki dürüst seçenek sunarız: uzun gün planı (aşım saatleri baştan hesaba katılır, toplam netleşir) veya işin iki güne bölünmesi (bazı işlerde toplamda daha ucuz çıkar — ikinci gün nakliyesi olmadığı için). Kaçınmanız gereken, mesai tanımı hiç yazılmamış operatörlü tekliftir: orada aşım saatinin birimi de, hatta aşımın fatura edileceği bilgisi de iş bittikten sonra öğrenilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Pendik'in havalimanı komşuluğu, Kurtköy üretim aksı ve sahil hattı dokusu kamuya açık bilgidir; zaman dilimi analizi, bekleme ve mesai madde kurguları firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:kartal": {
        h1: "Kartal'da Manlift Kiralama Teklifini Okuma Rehberi",
        giris:
            "Kartal, Anadolu yakasının dönüşen yüzüdür: eski sanayi parsellerinin yerini alan yüksek konut ve ofis kuleleri, sahilde canlı bir ticaret hattı, iç mahallelerde ise hâlâ çalışan atölyeler ve orta ölçekli işyerleri. Bu doku, kiralama pazarına en çok 'ilk kez kiralayan' müşteriyi getirir — cephesi için makine arayan site yöneticisi, tabelasını yeniletecek esnaf, çatısını onartacak bina sahibi. İlk kez kiralayanın en büyük dezavantajı fiyat bilgisi eksikliği değil, teklif okuma alışkanlığının olmamasıdır: neyin standart neyin ek olduğunu, hangi sorunun sorulacağını, hangi maddenin yokluğunun tehlike olduğunu bilmez ve bu bilgisizlik, kötü niyetli olmayan tedarikçiyle bile pahalı sonuçlar üretebilir. Bu sayfayı Kartal profilinin bu gerçeğine göre kurduk: baştan sona, hiç makine kiralamamış birinin bir teklifi eline aldığında satır satır ne görmesi ve ne sorması gerektiğinin rehberi. Rakam yok; çünkü rakamdan önce gelen şey, rakamı değerlendirecek çerçevedir.",
        maddeler: [
            {
                baslik: "İlk soru: bu teklif neyi kapsıyor, neyi kapsamıyor",
                metin:
                    "Teklif okumaya toplam rakamdan değil kapsam listesinden başlanır. Asgari dört öğe aranır: makine (sınıfı ve erişimiyle), nakliye (gidiş-dönüş olduğu belirtilmiş), süre (gün tanımıyla) ve operatör (dahil/hariç açıkça yazılmış). Bu dördünden biri teklif metninde yoksa, fiyat o öğe kadar eksiktir ve eksik, fatura günü tamamlanır. İlk kez kiralayana en pratik önerimiz şudur: teklifi aldığınızda bu dört kelimeyi metinde tek tek arayın — dördü de bulunuyorsa karşılaştırılabilir bir teklifiniz var demektir; bulunmuyorsa, eksikleri yazılı sorup cevabı teklife ekletin.",
            },
            {
                baslik: "Konut bölgesinde işin görünmeyen hazırlığı",
                metin:
                    "Sitede veya cadde üstünde çalışma, sanayi sahasında olmayan hazırlıklar ister: makinenin kurulacağı alanın araçlardan boşaltılması, yaya geçişinin düzenlenmesi, bazı durumlarda gürültü saatlerine uyum. Bu hazırlıkların kimde olduğu fiyatı dolaylı ama ciddi etkiler — alan boşaltılmamışsa makine bekler ve bekleyen makinenin günü yine sayılır. Teklif aşamasında netleştirilecek soru basittir: çalışma alanının hazırlanması kimin sorumluluğunda ve hazır değilse ne olur? Bu sorunun cevabı yazılıysa, işin en sık aksayan halkası güvence altındadır.",
            },
            {
                baslik: "Yüksek yapı işlerinde fiyat basamağını doğru seçmek",
                metin:
                    "Dönüşümle yükselen yapı stoğu, erişim sınıfı seçimini fiyatın ana kararı yapar: cephenin en yüksek noktasına göre seçilen makine ile işin ağırlıklı yapıldığı kota göre seçilen makine arasında belirgin fiyat farkı vardır. Doğru yöntem, işin kot dağılımını keşifte çıkarmaktır — üst katlar yalnızca kısa bir kontrolse, işin gövdesi orta kotlardaysa, iki ayrı düzen (küçük makineyle gövde, gerekiyorsa tek günlük büyük makineyle üst kontrol) toplamda tek büyük makineden ucuz çıkabilir. Bu hesabı yapmayan teklif, en yüksek noktaya göre fiyatlar ve fark sizin cebinizden çıkar.",
            },
            {
                baslik: "Esnaf işlerinde küçük iş fiyatlamasının mantığı",
                metin:
                    "Tabela, tente, cephe aydınlatması gibi esnaf işleri saatlerle ölçülür ama faturası günle başlar; çünkü makinenin gelişi, kurulumu ve dönüşü işin süresinden bağımsız sabit maliyetlerdir. Bu gerçeğin şeffaf ifadesi 'asgari fatura birimi' maddesidir ve teklifte açıkça durmalıdır. Küçük işin sahibi için ekonomik yol, bu birimi tartışmak değil doldurmaktır: aynı caddedeki komşu esnafla iş birleştirmek, biriken küçük kalemleri aynı güne toplamak veya işi bölgedeki başka işlerin gününe denk getirmek. Tarih esnekliği, küçük işin en güçlü pazarlık kozudur.",
            },
            {
                baslik: "Sözlü fiyat ile yazılı teklif arasındaki uçurum",
                metin:
                    "İlk kez kiralayanın en sık düştüğü durum, telefonda alınan rakamla iş bitiminde gelen faturanın tutmamasıdır — ve bunun nedeni çoğunlukla yalan değil, eksikliktir: telefondaki rakam makineyi kastediyordur, nakliyeyi değil; hafta içini kastediyordur, cumartesiyi değil. Kuralınız net olsun: hangi tutardaysa olsun, iş yazılı teklifsiz başlamasın. Yazılı teklif bir formalite değil, iki tarafın aynı işi konuştuğunun tek kanıtıdır. Yazmaktan kaçınan tedarikçi, küçük iş için bile, yanlış tedarikçidir — düzgün firmalar için beş dakikalık bir e-posta, tartışmasız bir iş demektir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlk kez kiralayan için teklif kontrol tablosu",
                paragraflar: [
                    "Elinizdeki teklifi aşağıdaki tabloyla karşılaştırın. 'Aranacak ifade' sütunundaki bilgi teklifte yoksa, sağdaki soruyu tedarikçiye yazılı sorun ve cevabı teklife ekletin. Tablonun tamamı işaretlendiğinde, karşılaştırmaya ve imzaya hazır bir teklifiniz var demektir.",
                ],
                tablo: {
                    basliklar: ["Kontrol", "Aranacak ifade", "Yoksa sorulacak soru"],
                    satirlar: [
                        ["Makine", "Sınıf + çalışma yüksekliği", "Bu işe bu makine neden yeterli?"],
                        ["Nakliye", "Gidiş-dönüş dahil ibaresi", "İade nakliyesi bu tutara dahil mi?"],
                        ["Süre", "Gün tanımı cümlesi", "Gün kaç saati kapsıyor, iade saati ne?"],
                        ["Operatör", "Dahil/hariç + mesai saati", "Operatör kimden, kaç saat çalışır?"],
                        ["Hazırlık", "Alan sorumluluğu maddesi", "Alan hazır değilse bekleme nasıl işler?"],
                        ["İptal", "İptal bildirimi süresi", "Hava bozarsa erteleme ücretsiz mi?"],
                        ["Hasar", "Sigorta kapsamı + muafiyet", "Camımız kırılırsa süreç nasıl işler?"],
                    ],
                },
            },
            {
                baslik: "Site yönetimi kararına dayanak: fiyatın belgelenmesi",
                paragraflar: [
                    "Kartal'ın çok katlı sitelerinde kiralama kararını yönetim verir ama parayı kat malikleri öder — ve genel kurulda 'neden bu firma, neden bu tutar' sorusu er ya da geç sorulur. O güne bugünden hazırlanmanın yolu, karar dosyasını fiyatla değil yöntemle kurmaktır: alınan dökümlü teklifler, kapsam karşılaştırma tablosu, seçim gerekçesi (en düşük toplam değilse neden — örneğin kapsam farkı veya sigorta koşulu) ve işin sonunda teklif-fatura tutarlılığının kaydı. Bu dosya, yönetimin kendini savunması için değil, savunmaya gerek kalmaması içindir.",
                    "Tedarikçi tarafında bunun karşılığı da vardır: yönetimlere verdiğimiz teklifler, genel kurulda okunabilir açıklıkta yazılır — teknik kısaltmasız, her satırı gerekçeli. Fiyatın kat malikine anlatılabilir olması, bizim açımızdan bir pazarlama inceliği değil, şeffaflık iddiasının doğal sınavıdır.",
                ],
            },
            {
                baslik: "Dönüşüm bölgesinde şantiye komşuluğunun fiyata dolaylı etkisi",
                paragraflar: [
                    "Dönüşümün sürdüğü mahallelerde çalışma koşulları değişkendir: sokaklar zaman zaman şantiye trafiğiyle dolar, park düzeni daralır, bazı saatlerde ağır araç kısıtları uygulanabilir. Bu koşullar kiralamanın kendisini pahalılaştırmaz ama planlamasını hassaslaştırır — yanlış saatte gelen nakliye aracı sokakta bekler ve bekleme, bir yerden faturaya sızar. Bizim yaklaşımımız bu riski planlamayla eritmektir: teslimat saati, sokağın gerçek ritmine göre seçilir ve keşifte sokak koşulu da not edilir. Teklifinizde 'teslimat saati planlaması' üzerine tek cümle bile görmüyorsanız, bu soruyu kendiniz açın.",
                    "Aynı değişkenlik bir fırsat da üretir: çevrenizde şantiyeler çalışıyorsa, bölgeye zaten makine geliyor demektir. Küçük işinizi bölgedeki mevcut sevkiyat günlerine denk getirmek — tarihi bize esnek bırakmanız yeterli — nakliye payınızı görünür biçimde küçültür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hiç makine kiralamadık; teklif istemek için sizi aradığımızda hangi bilgileri hazır etmeliyiz?",
                cevap:
                    "Beş bilgi, teklifin hem hızlı hem isabetli olmasını sağlar: işin ne olduğu (cephe boyası mı, tabela mı, çatı kontrolü mü — iş tipi makine sınıfını belirler), çalışılacak en yüksek nokta (kat sayısı da yeterli, metre bilmeniz gerekmez), makinenin kurulacağı zeminin durumu (otopark mı, sokak mı, bahçe mi), birkaç fotoğraf (binanın önü ve çalışılacak cephe — çoğu sorunun cevabı fotoğrafta görünür) ve tarih esnekliğiniz (kesin bir gün mü şart, hafta içinde herhangi bir gün olur mu). Bu beşi telefonda iki dakika sürer ve karşılığında tahmini değil, gerçeğe yakın bir yazılı teklif alırsınız. Bilmediğiniz teknik terim varsa sormaktan çekinmeyin; açıklamak bizim işimizin parçasıdır.",
            },
            {
                soru: "İki teklif aldık; biri 'her şey dahil' tek rakam, öteki kalem kalem yazılmış ve toplamı biraz yüksek. Hangisini seçmeliyiz?",
                cevap:
                    "Karar sizin ama değerlendirme yöntemini verelim: 'her şey dahil' ifadesi ancak 'her şey'in listesi varsa bir anlam taşır — listesiz dahillik, kapsamını satıcının sonradan tanımlayacağı bir vaattir. İlk adım olarak tek rakamlı firmadan da kalem listesi isteyin; vermezse bu, kararınız için başlı başına bir veridir. Verirse iki teklifi satır satır eşleştirin — çoğu zaman göreceğiniz şey, aradaki farkın bir kapsam eksiğine (iade nakliyesi, hafta sonu, operatör mesaisi) denk geldiğidir. Dökümlü teklifin biraz yüksek toplamı, çoğunlukla eksiksizliğinin fiyatıdır; tek rakamın cazibesi ise faturada tamamlanır. Yine de eşleştirme sonunda tek rakam gerçekten eksiksiz ve ucuzsa, onu seçmek en doğal hakkınızdır.",
            },
            {
                soru: "Binamızın dış cephe boyası için kiralama mı, yoksa boyacıyla anahtar teslim anlaşmak mı daha ekonomik?",
                cevap:
                    "İki modelin fiyat yapısı farklıdır ve doğru soru 'hangisi ucuz' değil 'fark neyi içeriyor'dur: anahtar teslim bedelin içinde boyacının işçiliği, malzeme ve bizim gibi bir yerden kiralanmış erişim ekipmanı — üstüne yüklenicinin koordinasyon payı — birlikte durur; ayrı ayrı yaptırırsanız bu kalemleri siz ayrıştırır, her birini ayrı denetlersiniz. Ayrıştırmanın kazancı şeffaflık ve kalemler üzerinde kontrol, maliyeti ise koordinasyonun size geçmesidir: makine ile boyacının takvimini siz eşleştirirsiniz ve biri aksarsa diğeri bekler. Deneyimli bir yönetim için ayrıştırma genelde ekonomiktir; ilk kez iş yaptıran için anahtar teslimin koordinasyon rahatlığı, farkına değebilir. Hangisini seçerseniz seçin, ekipman kaleminin dökümünü görme hakkınız saklıdır.",
            },
            {
                soru: "Hava yağışlı çıkarsa iş iptal olur mu, iptal olursa para öder miyiz?",
                cevap:
                    "Dış cephe ve yüksek kot işlerinde hava gerçek bir engeldir — yağış ve rüzgâr limitleri güvenlik gereğidir, keyfiyet değil — ve bunun fatura düzeni sözleşmede yazmalıdır: bizim düzenimizde hava kaynaklı erteleme, teslimattan önce bildirilmişse ücretsizdir; iş günü içinde havanın bozması hâlinde ise çalışılan süre ve sahadaki makine günü, sözleşmedeki tanıma göre hesaplanır. Sorulacak kritik soru şudur: erteleme kararını kim, en geç ne zaman verir? Belirsiz bırakılan karar anı, 'makine geldi ama çalışamadık' faturalarının kaynağıdır. Mevsim riskli ise takvime yedek gün koydurmak — yazılı ve koşullu — en temiz çözümdür; yedek günün koşulsuz faturalanmadığını da teklifte görün.",
            },
            {
                soru: "Yan binayla aynı hafta cephe işi yaptıracağız; ortak teklif alsak fiyat gerçekten düşer mi, yoksa bu bir satış taktiği mi?",
                cevap:
                    "Düşüşün gerçek olup olmadığını dökümden anlarsınız — mekanizma şudur: iki binanın işi ardışık planlandığında nakliye bir kez yapılır ve iki fatura arasında bölüşülür, makine boş gün riski taşımadığı için takvim tarafında da esneme payı doğar; buna karşılık makine bedeli düşmez, iki işin toplam günü neyse odur. Yani ortak kiralamanın indirimi belirli satırlarda oluşur ve teklifte o satırlarda görünmelidir: iki ayrı döküm, bölüşülen nakliye satırı her ikisinde açıkça yazılı. 'Ortak yaptırırsanız toplam şu olur' diyen ama satır göstermeyen teklif, indirimi nereden verdiğini kanıtlayamıyor demektir. Satır gösterilen ortak teklif ise iki bina için de gerçek ve denetlenebilir bir tasarruftur.",
            },
            {
                soru: "Kiralama sırasında makineye veya binaya bir zarar gelirse ne oluyor? Bu konuda neyi yazılı istemeliyiz?",
                cevap:
                    "Üç belgeyi: teslim tutanağı (makinenin size tesliminde fotoğraflı durum kaydı — iade günü tartışmasının tek önleyicisi), sigorta kapsam beyanı (makinenin kendi hasarı ile üçüncü kişilere ve binaya verilebilecek zararın ayrı ayrı hangi kapsamda olduğu, muafiyet tutarıyla birlikte) ve sorumluluk ayrımı maddesi (operatörlü işte operasyon hatası tedarikçide, sizin talimatınızla yapılan işlemler sizde — sınır yazılı olmalı). Bu üçü elinizdeyken hasar, panik değil süreç konusudur: tutanak tutulur, fotoğraflanır, kapsama göre işletilir. Üçünden biri eksikse, hasar günü güçlü olan tarafın dediği olur — ve ilk kez kiralayan taraf, o gün nadiren güçlü taraftır. İmzadan önce beş dakikalık okuma, bu senaryonun tüm maliyetinden ucuzdur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kartal'ın sanayi parsellerinden konut-ofis dönüşümü geçiren yapısı ve sahil ticaret hattı kamuya açık bilgidir; teklif kontrol tablosu, karar dosyası ve hasar belge düzeni firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:beylikduzu": {
        h1: "Beylikdüzü'nde Platform ve Forklift Kiralamada Fiyatı Belirleyen Kalemler",
        giris:
            "Beylikdüzü, Avrupa yakasının batısında hem yoğun bir konut-site nüfusu hem de organize sanayi ve depo alanlarını bir arada barındıran bir ilçedir; bu iki doku aynı ilçe sınırları içinde farklı kiralama profilleri üretir. Sahildeki ve E-5 gerisindeki site yönetimleri cephe ve peyzaj işleri için ara sıra makine ararken, ilçenin sanayi kesimindeki işletmeler forklift ve platform ihtiyacını daha sık ve süreklidir. İlçe genelinde fiyat sorusunu cevaplamak, tek bir rakam söylemek değil, teklifi oluşturan kalemlerin hangi mantıkla belirlendiğini açmaktır: iş İkitelli'deki merkez hub'dan ne kadar mesafede, işin süresi nasıl tanımlanmış, hangi makine sınıfı gerekiyor ve bu üçü birlikte teklifin hangi satırını büyütüyor. Bu sayfa, Beylikdüzü ölçeğindeki bir kiralama kararını rakamsız ama eksiksiz bir mantık çerçevesiyle ele alır — ilçenin neresinde olursanız olun, teklifinizi aynı çerçeveyle okuyabilirsiniz.",
        maddeler: [
            {
                baslik: "Mesafenin fiyata giriş kapısı: hub'a uzaklık",
                metin:
                    "Avrupa yakasındaki filo İkitelli merkezli çalıştığı için, Beylikdüzü'ne bir teklif hazırlarken ilk bakılan satır mesafe satırıdır — ama mesafe tek başına bir rakam üretmez, üç şeyi birlikte belirler: aracın yolda geçireceği süre, bu sürenin gidiş-dönüş olarak iki kez sayılması ve E-5 veya sahil hattındaki trafik yoğunluğunun teslim saatine etkisi. İlçenin doğusu (E-5'e yakın kesim) ile batısı (sahil ve TEM bağlantı noktalarına yakın kesim) arasında bu üç unsur farklı ağırlıkta çalışır. Teklif isterken adresinizi net vermeniz, nakliye satırının tahminî değil gerçek mesafeye göre kurulmasını sağlar.",
            },
            {
                baslik: "İşin süresi, mesafenin payını büyütür ya da küçültür",
                metin:
                    "Aynı mesafedeki iki iş, süreleri farklıysa nakliyenin toplam içindeki ağırlığı da farklı olur: haftalık bir kiralamada nakliye bedeli günlere yayılır ve payı küçülür, yarım günlük bir işte ise aynı nakliye bedeli tek güne yüklenir ve toplamın büyük kısmını oluşturabilir. Beylikdüzü'ndeki site cephesi işleri genelde bu ikinci gruba girer — kısa ve tek seferliktir. Bu yüzden kısa işlerde teklif değerlendirmesi günlük kira rakamından değil, nakliyenin gün başına düşen payından başlamalıdır; iki teklif arasındaki asıl fark çoğunlukla bu payda gizlidir.",
            },
            {
                baslik: "Makine sınıfının fiyat basamağı",
                metin:
                    "İlçedeki iş çeşitliliği (konut cephesi, sanayi deposu, peyzaj işi) makine sınıfını da çeşitlendirir ve fiyatın en sert basamağı burada atlanır: erişim yüksekliği ve şase genişliği arttıkça hem kira hem nakliye satırı birlikte büyür, çünkü büyük makine özel taşıma aracı gerektirir. Doğru yaklaşım, işin gerçekten hangi sınıfı gerektirdiğini keşifte netleştirmektir — site cephesinin çoğu işi orta sınıf akülü platformla karşılanırken, sanayi tesisinin yüksek raf işleri farklı bir sınıfa ihtiyaç duyar. Teklifte makine sınıfının gerekçesi bir cümleyle yer almalıdır: bu ölçü neden bu makineyi gerektiriyor.",
            },
            {
                baslik: "Site işi ile sanayi işinin kalem farkı",
                metin:
                    "Beylikdüzü'ndeki bir site yönetiminin teklifiyle bir depo işletmesinin teklifi aynı kalemlerden oluşmaz. Site işinde hazırlık kalemi öne çıkar — otoparkın boşaltılması, sakin bilgilendirmesi, çalışma saatinin gürültü kısıtına uyması; bu kalemler makinenin kendisinden bağımsız ama iş süresini ve dolayısıyla faturayı etkiler. Sanayi işinde ise zemin ve vardiya uyumu öne çıkar — zeminin makineyi taşıyıp taşımadığı, çalışmanın üretim saatleri dışına mı denk geldiği. Teklifinizi okurken kendi profilinizin kalemlerini arayın; karşı profilin kalemi sizin faturanızda görünüyorsa sorgulayın.",
            },
            {
                baslik: "Operatör ve süre tanımının ilçe geneline etkisi",
                metin:
                    "Operatörlü mü operatörsüz mü, gün mü mesai mi sorularının cevabı Beylikdüzü'nde de diğer ilçelerdekiyle aynı mantıkla işler ama burada bir ek unsur devreye girer: site işlerinde çoğu zaman yönetimin kendi teknik personeli belgeli değildir ve operatör talebi neredeyse zorunludur, sanayi tesislerinde ise belgeli personel bulunma ihtimali daha yüksektir ve operatörsüz kiralama gerçek bir tasarruf seçeneği olur. Hangi durumda olduğunuzu teklif isterken belirtmek, size uygun olmayan bir kalemin faturanıza girmesini baştan önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Beylikdüzü'nde fiyatı etkileyen unsurların kategorik özeti",
                paragraflar: [
                    "Aşağıdaki tablo, ilçe genelinde bir kiralama teklifini büyüten veya küçülten unsurları rakam vermeden, düşük-orta-yüksek etkisiyle özetler. Kendi işinizin hangi sütuna denk geldiğini işaretlediğinizde, teklifte hangi satırın büyük çıkacağını önceden kestirebilirsiniz.",
                ],
                tablo: {
                    basliklar: ["Unsur", "Etki düşükken", "Etki yüksekken"],
                    satirlar: [
                        ["Hub'a mesafe", "E-5 hattına yakın kesim", "Sahilin ucu, ara sokak erişimi"],
                        ["İş süresi", "Haftalık/aylık blok", "Yarım-tek günlük iş"],
                        ["Makine sınıfı", "Kompakt, akülü, dar şase", "Büyük bomlu, dizel, özel taşıma"],
                        ["Hazırlık ihtiyacı", "Açık, düzenli saha", "Otopark boşaltma, saat kısıtı"],
                        ["Teslim saati esnekliği", "Geniş pencere, gündüz", "Dar pencere, yoğun saat"],
                    ],
                },
            },
            {
                baslik: "İlçe genelinde teklifi büyütmeden küçültme yolları",
                paragraflar: [
                    "Yukarıdaki tablodan çıkan pratik sonuç şudur: fiyatı küçültmenin en etkili yolu pazarlık değil, kalemlerin kendisini küçültmektir. Tarih esnekliği göstermek (belirli bir güne değil bir haftaya yayılan pencere) teslim saatinin sıkışmasını önler ve aynı bölgeye giden başka bir teslimatla nakliyenin paylaşılmasına imkân tanır. İşi doğru sınıfa oturtmak (gereğinden büyük makine istememek, ama yetmeyecek küçük makineyle de riske girmemek) hem kira hem nakliye satırını birlikte optimize eder. Komşu site veya işletmeyle aynı haftaya iş denk getirmek ise nakliye payını doğrudan bölüştürür.",
                    "Bu üç yolun ortak noktası, hiçbirinin tedarikçiden 'indirim istemek' olmamasıdır — üçü de işin kendi parametrelerini değiştirerek maliyetin gerçekten küçülmesini sağlar. Şeffaf teklif, bu üç yolun her birinin faturada hangi satırı etkileyeceğini önceden gösterir.",
                ],
            },
            {
                baslik: "İki yakalı filo mantığının Beylikdüzü'ne yansıması",
                paragraflar: [
                    "İstanbul'un iki yakalı coğrafyası, filo planlamasını da iki ayrı mantıkla kurmayı gerektirir: Avrupa yakasındaki talep İkitelli merkezli hub'dan, Anadolu yakasındaki talep ise kendi bölgesindeki noktalardan karşılanır. Beylikdüzü, Avrupa yakasının batı ucunda olduğu için hub'a olan mesafesi ilçenin doğusundaki noktalara göre biraz daha uzundur — bu, nakliye satırının neden aynı ilçe içinde bile sabit olmadığını açıklayan yapısal bir gerçektir. Pratik sonucu şudur: teklif isterken tam adresinizi ve varsa saha fotoğraflarınızı paylaşmak, mesafeye dayalı tahminin yerini gerçek hesaba bırakmasını sağlar.",
                    "İki yaka arasında makine transferi gerektiren istisnai durumlarda (örneğin Avrupa yakasında belirli bir sınıfın o an müsait olmaması), bu transferin ek bir nakliye kalemi ürettiği teklifte açıkça yazılmalıdır — sessizce eklenen köprü geçişi, faturada sürpriz olarak dönmemelidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Beylikdüzü'nde fiyatlarınız diğer ilçelerden farklı mı?",
                cevap:
                    "Sabit bir 'ilçe fiyatı' listemiz yok, çünkü fiyat ilçeye değil işin parametrelerine göre değişir — ama Beylikdüzü'nün konumu bazı parametreleri tipik olarak nasıl etkiliyor, onu açıkça söyleyebiliriz: hub'a olan mesafe orta-uzun bandındadır, bu nakliye satırını E-5'e daha yakın ilçelere göre biraz büyütebilir; buna karşılık ilçenin düzenli site ve sanayi dokusu, dar sokak manevrası gibi ek riskleri çoğu işte azaltır. İki etki birbirini kısmen dengeler. Kesin teklif için adresinizi ve iş tipinizi paylaşmanız, bu iki etkinin sizin işinizde nasıl birleştiğini gösteren gerçek bir rakam üretir.",
            },
            {
                soru: "Site yönetimiyiz, cephe işi için üç ayrı firmadan teklif aldık; toplamlar birbirini tutmuyor. Nereden başlayalım?",
                cevap:
                    "Toplamı bir kenara koyup üç teklifi de aynı beş kaleme (makine sınıfı, nakliye, süre tanımı, operatör, hazırlık sorumluluğu) oturtun. Deneyimimizde site işlerinde en sık kayan kalem hazırlık sorumluluğudur — otoparkın boşaltılması ve saat kısıtına uyum kimin işiyse, o kalem bazı tekliflerde hiç yazılmaz ve iş günü uzarsa fatura da uzar. İkinci sık kayma nakliyenin tek yön mü çift yön mü yazıldığıdır. Bu iki kalemi eşitledikten sonra kalan fark, çoğunlukla makine sınıfı seçimindeki farktır ve bunun gerekçesini her firmadan ayrı ayrı isteyebilirsiniz.",
            },
            {
                soru: "Sanayi bölgesindeki depomuz için düzenli forklift kiralıyoruz; ilçe içi mesafe bu kadar fiyatı etkiler mi?",
                cevap:
                    "Etkiler ama düzenli kiralamada bu etki tek seferlik işe göre daha küçüktür, çünkü nakliye maliyeti dönemin tamamına yayılır. Asıl belirleyici olan, tesisinizin ilçe içindeki konumunun hub'a göre mesafesinden çok, düzenli kiralamanın kendi avantajlarıdır: nakliye bir kez yapılır, makine planlaması öngörülebilir hâle gelir. Mesafenin etkisini daha da küçültmek isterseniz, aynı bölgedeki başka bir teslimatla senkronize bir teslim tarihi belirlemek — tarih esnekliğinizi paylaşmanız yeterli — pratik bir yoldur.",
            },
            {
                soru: "İşimiz sahile yakın, dar bir sokakta; bu fiyatı nasıl etkiler?",
                cevap:
                    "Dar sokak erişimi, nakliye satırını mesafeden bağımsız bir başka yoldan etkiler: çekicinin manevra süresi uzar, bazı durumlarda daha küçük bir taşıma aracına aktarma gerekebilir ve indirme noktası bulmak zaman alır. Şeffaf teklif bu riski önceden ele alır — birkaç fotoğraf ve sokak genişliği bilgisiyle indirme koşulu netleştirilir ve nakliye satırı buna göre sabitlenir, ya da bekleme ihtimali ayrı bir koşul maddesi olarak yazılır. Sorulacak soru basittir: sokakta araç manevra edemezse ne olur, bu durumun bir ek maliyeti var mı?",
            },
            {
                soru: "Komşu apartmanla aynı hafta iş yaptırmayı düşünüyoruz; bu gerçekten fiyatı düşürür mü?",
                cevap:
                    "Düşürür ve hangi satırı düşürdüğünü net söyleyebiliriz: nakliyeyi. Makine bedeli değişmez — her binanın işi kaç gün sürüyorsa o kadar faturalanır — ama araç bir kez gelip bir kez döner ve bu satır iki bina arasında bölüşülür. Bunun işlemesi için tek koşul, iki binanın tarih penceresini birlikte esnetebilmesidir. Teklifi iki bina için ayrı ama aynı organizasyona bağlı isteyin; bölüşülen nakliye satırı her iki dökümde ayrı ayrı görünsün ki toplamın nereden küçüldüğünü ikiniz de görebilesiniz.",
            },
            {
                soru: "Teklifte 'bölgesel lojistik farkı' diye bir kalem gördük; bu ne anlama geliyor?",
                cevap:
                    "Bu kalem, mesafenin kendisinden değil, o bölgenin erişim özelliklerinden doğar — trafik yoğunluğunun teslim saatini nasıl etkilediği, sokak genişliğinin manevra süresini nasıl uzattığı, indirme noktasının ne kadar hazır olduğu gibi unsurların toplamıdır. Düzgün bir teklifte bu kalem tek bir muğlak satır olarak durmaz; hangi unsurun ne kadar etkili olduğu ayrı ayrı yazılır. Eğer teklifinizde bu kalem açıklamasız bir tek satırsa, içini açtırmanız hakkınızdır — biz kendi tekliflerimizde bu kalemi hiçbir zaman tek satırda bırakmayız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Beylikdüzü'nün Avrupa yakası batısındaki konut-site ve sanayi karma dokusu, İkitelli merkezli filo hub'ı kamuya açık bilgidir; fiyat kalemi mantığı ve teklif okuma yöntemi firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:avcilar": {
        h1: "Avcılar'da Manlift ve Forklift Kiralama: Nakliye Mesafesinin Fiyata Etkisi",
        giris:
            "Avcılar, E-5 karayolunun İstanbul'un batısındaki en yoğun kullanılan şeritlerinden birinin üzerinde, sahil ile E-5 arasında sıkışmış bir ilçedir ve bu konum kiralama fiyatına doğrudan bir kapı açar: nakliye. Avrupa yakasındaki filo İkitelli hub'ından beslendiği için, Avcılar'a gidecek bir makinenin yolu neredeyse tamamen E-5 hattı üzerinden geçer ve bu hattın trafik ritmi, hem yolda geçen süreyi hem teslim saatinin ne kadar öngörülebilir olduğunu belirler. Bu sayfanın konusu tek bir kalemdir ama o kalem çoğu zaman fatura kararının belirleyicisidir: nakliye mesafesinin ve E-5 lojistiğinin, bir Avcılar teklifinin toplamını nasıl şekillendirdiği. Rakam vermeden, mesafe-süre-saat üçlüsünün fiyata nasıl gireceğini ve bu üçlüyü sizin lehinize nasıl kullanabileceğinizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "E-5 hattının iki yüzü: hız ve öngörülemezlik",
                metin:
                    "E-5, düz hat mesafesi olarak Avcılar'ı hub'a nispeten yakın tutar ama bu yakınlık, trafiğin akıcı olduğu saatlerle sınırlıdır. Aynı kilometre, sabah erken saatte kısa bir sürede alınırken, yoğun saatte kat kat uzayabilir — ve nakliye satırını asıl büyüten şey kilometre değil, bu sürenin öngörülemezliğidir. Şeffaf teklif bu farkı gizlemez: teslim saati belirli bir pencereyle taahhüt edilir ve pencere, hattın o saatteki gerçek durumuna göre kurulur. Sabah erken teslimat isteyen müşteriye nakliye tarafında daha iyi bir koşul sunulabilmesinin nedeni de budur — risk küçülür, satır da küçülür.",
            },
            {
                baslik: "Sahil ile E-5 arası: erişim noktasının önemi",
                metin:
                    "Avcılar'ın sahile yakın kesimleri ile E-5'e bitişik kesimleri, aynı ilçe içinde farklı erişim koşulları sunar. Sahile inen tali yollar bazı saatlerde yoğunlaşır ve büyük araçlar için manevra alanı daralabilir; E-5'e bitişik parsellerde ise ana yoldan doğrudan giriş çoğu zaman mümkündür. Bu fark, aynı ilçe içinde bile nakliye satırının neden sabit olmadığını açıklar. Teklif isterken tam adresinizi ve mümkünse sokak fotoğrafını paylaşmak, nakliye satırının tahminî değil gerçek erişim koşuluna göre kurulmasını sağlar.",
            },
            {
                baslik: "Gidiş-dönüşün ikili maliyeti",
                metin:
                    "Nakliye satırı, kısa görünen mesafelerde bile iki kez sayılır: götürme ve getirme. E-5 hattında bu ikinci yön, ilk yönle aynı süreyi almayabilir — saat değiştikçe trafik yönü de değişir, bazen dönüş gidişten daha uzun sürer. Şeffaf teklif gidiş-dönüşü tek bir 'nakliye dahildir' cümlesine gömmez, iki yönü ayrı ayrı gösterir veya en azından ikisinin birlikte hesaplandığını açıkça yazar. Tek yön yazılıp dönüşün sonradan fatura edildiği teklif, Avcılar gibi trafiğe duyarlı bir hatta özellikle risklidir.",
            },
            {
                baslik: "Kısa işte nakliyenin toplamdaki ağırlığı",
                metin:
                    "Avcılar'daki tipik talep — bir sitenin cephe işi, bir işyerinin tabela değişimi — genellikle yarım günlük veya tek günlük kısa işlerdir. Kısa işte nakliye bedeli tek güne yüklendiği için toplamın büyük kısmını oluşturabilir; haftalık bir kiralamada ise aynı nakliye bedeli günlere yayılıp payı küçülür. Bu yüzden Avcılar'daki kısa bir iş için teklif değerlendirirken ilk bakılacak satır günlük kira değil, nakliyenin gün başına düşen payıdır — iki teklif arasındaki fark çoğunlukla burada saklıdır.",
            },
            {
                baslik: "Zamanlama esnekliğinin nakliyeye etkisi",
                metin:
                    "Tarih ve saat esnekliği, E-5 hattında nakliye maliyetini gerçek anlamda küçültebilecek tek değişkendir: belirli bir güne değil bir haftaya yayılan bir pencere, aracın aynı bölgeye giden başka bir teslimatla eşleştirilmesine imkân tanır ve bu eşleşme nakliye payını bölüştürür. Sabah erken saat tercih etmek ise trafik riskini azaltarak süreyi kısaltır. Esneklik göstermeyen, dar saatli ve tek tarihe bağlı talep ise nakliye satırının en yüksek hâlini görür — bu bir ceza değil, riskin gerçek maliyetinin yansımasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Avcılar'da nakliye maliyetini etkileyen unsurların kategorik karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, E-5 hattı üzerindeki bir teslimatta nakliye satırını büyülten veya küçülten unsurları rakam vermeden özetler. Kendi işinizin hangi sütuna yakın olduğunu görmek, teklifte nakliye satırının neden bu düzeyde çıktığını anlamanın en hızlı yoludur.",
                ],
                tablo: {
                    basliklar: ["Unsur", "Nakliyeyi küçülten durum", "Nakliyeyi büyüten durum"],
                    satirlar: [
                        ["Teslim saati", "Sabah erken, trafik dışı", "Yoğun saat, öngörülemez süre"],
                        ["Erişim noktası", "E-5'e bitişik, doğrudan giriş", "Sahil tali yolu, dar sokak"],
                        ["Tarih esnekliği", "Haftalık pencere", "Tek ve sabit tarih"],
                        ["İş süresi", "Haftalık/aylık blok", "Yarım-tek günlük iş"],
                        ["Bölge eşleşmesi", "Aynı gün başka teslimatla paylaşım", "Tek başına özel sefer"],
                    ],
                },
            },
            {
                baslik: "E-5 hattında teslim saatinin nasıl belirlendiği",
                paragraflar: [
                    "Teslim saatini rastgele değil, hattın o günkü ve o saatlik gerçek yoğunluğuna göre planlarız. Sevkiyat planlaması yapılırken üç bilgi birlikte değerlendirilir: işinizin en erken hangi saatte başlayabileceği, o gün E-5 üzerindeki bilinen yoğunluk pencereleri (mesai başlangıç-bitiş saatleri, okul giriş-çıkış saatleri gibi tekrarlayan örüntüler) ve aracın Avcılar'a gitmeden önce veya sonra başka bir teslimatı olup olmadığı. Bu üç bilginin kesişimi, size sunulan teslim penceresini oluşturur — pencere ne kadar dar ve talep edilen saat ne kadar yoğun bir dilime denk geliyorsa, nakliye satırındaki risk payı o kadar görünür hâle gelir.",
                    "Müşterinin elindeki tek gerçek kaldıraç, bu pencereyi genişletebilmesidir. Bir günlük değil birkaç günlük bir aralık sunulduğunda, sevkiyat ekibi aracı en verimli saate yerleştirebilir ve bu verimlilik teklife yansır.",
                ],
            },
            {
                baslik: "Sahil kesimi ile E-5 kesimi arasındaki pratik fark",
                paragraflar: [
                    "Avcılar'ın sahile yakın kesimlerinde çalışan bir site yönetimi ile E-5'e bitişik bir işletmenin nakliye deneyimi aynı değildir. Sahil kesiminde tali yolların dar olması ve bazı saatlerde yoğunlaşması, büyük araçlar için ek manevra süresi ve bazen aktarma ihtiyacı doğurabilir; bu ihtimal teklifte önceden not edilmelidir. E-5'e bitişik kesimde ise ana yoldan doğrudan erişim genelde mümkün olduğu için bu risk düşüktür, ama hattın kendi trafik yoğunluğu bu kez öne çıkar. İki kesim de aynı ilçede olsa da farklı risk profili taşır — bu yüzden 'Avcılar fiyatı' tek bir sayı değil, adrese göre kurulan bir hesaptır.",
                    "Pratik öneri: teklif isterken sokağınızın E-5'e mi yoksa sahil hattına mı daha yakın olduğunu belirtmeniz, ekibin doğru senaryoyu baştan kurmasını sağlar ve teklif süreci hızlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Avcılar E-5 üzerinde, hub'a yakın; neden nakliye ücretsiz veya çok düşük değil?",
                cevap:
                    "Yakınlık gerçekten bir avantajdır ve mesafeye bağlı taşıma payını küçültür — ama nakliye satırı tek bir bileşenden oluşmaz. Mesafeye ek olarak makinenin gerektirdiği araç tipi ve indirme koşulu da satırı belirler; bunlar mesafeden bağımsızdır. Ayrıca E-5'in kendine özgü bir gerçeği vardır: düz hat kısa olsa da trafik yoğun saatte süreyi uzatabilir ve bu süre, aracın o gün başka bir işe yetişememesi riskini taşır. Kısa mesafede toplamı asıl düşüren şey, aynı gün aynı bölgeye giden başka bir teslimatla aracın paylaşılmasıdır; tarih esnekliğiniz varsa bunu belirtin, paylaşım imkânı teklifte ayrı satır olarak gösterilir.",
            },
            {
                soru: "Sabah erken teslimat istersek gerçekten fark yaratır mı?",
                cevap:
                    "Yaratır, çünkü sabah erken saat E-5 üzerindeki en öngörülebilir dilimdir — trafik yoğunluğu düşüktür ve süre tahmini gerçeğe yakın kurulabilir. Öngörülebilirlik arttıkça nakliye satırındaki risk payı küçülür; bu da genelde teklife yansıyan somut bir avantajdır. Ayrıca erken saatte tamamlanan bir teslimat, aracın aynı gün başka bir işe yetişmesini kolaylaştırır ve bu da bölge paylaşımlı sevkiyat imkânını artırır. Kesin bir oran vermek yerine şunu söyleyelim: teslim saatinizde esneklik gösterdiğinizde bunu teklif isterken belirtin, ekip en uygun dilimi sizin için arar.",
            },
            {
                soru: "Sahile yakın bir apartmanız var, dar bir sokakta; bu nakliyeyi nasıl etkiler?",
                cevap:
                    "Dar sokak, mesafeden bağımsız bir risk üretir: çekicinin sokağa girip manevra edebilmesi, bazı durumlarda daha küçük bir araca aktarma yapılması gerekebilir ve bu aktarma bir ek kalem doğurabilir. Bunun önceden bilinmesi işinize yarar — birkaç fotoğraf ve sokak genişliği bilgisiyle bu ihtimal teklif aşamasında değerlendirilir ve ya nakliye satırı buna göre sabitlenir ya da koşullu bir madde olarak yazılır. Sorulması gereken soru nettir: sokakta araç manevra edemezse alternatif plan nedir ve bunun bir ek maliyeti var mı?",
            },
            {
                soru: "İki farklı firmadan teklif aldık, nakliye satırları birbirinden çok farklı; neden?",
                cevap:
                    "En sık üç nedeni vardır: firmaların filo merkezinin farklı olması (bir firma için Avcılar yakın, ötekinin merkezi uzaksa satır farklı çıkar), gidiş-dönüşün bir teklifte tam, ötekinde tek yön yazılmış olması ve teslim saati esnekliğinin tekliflere farklı yansıtılmış olması. İki teklifi karşılaştırırken önce her ikisinin de gidiş-dönüşü kapsadığından emin olun, sonra hangi firmanın filo merkezinin size daha yakın olduğunu sorun — bu sorunun cevabı genelde farkın büyük kısmını açıklar.",
            },
            {
                soru: "Komşu işletmeyle aynı hafta iş yaptırsak nakliye gerçekten paylaşılır mı?",
                cevap:
                    "Paylaşılır ve E-5 hattı gibi yoğun bir güzergâhta bu paylaşımın etkisi özellikle belirgindir: araç bölgeye bir kez gelir, iki işi art arda yapar ve nakliye bedeli iki fatura arasında bölüşülür. Bunun işlemesi için tek koşul, iki işletmenin tarih penceresini birlikte esnetebilmesidir — aynı güne kesin kilitlenmiş iki talep, paylaşım şansını azaltır. Teklifi iki işletme için ayrı ama aynı sevkiyata bağlı isteyin; bölüşülen nakliye satırı her iki dökümde ayrı ayrı görünsün.",
            },
            {
                soru: "Nakliye ücretini gün içinde farklı saatlerde teklif istesek farklı mı çıkar?",
                cevap:
                    "Aynı gün için gerçek anlamda 'farklı saat teklifleri' istemenize gerek yok, ama teklif isterken saat tercihinizi belirtmeniz sonucu etkiler: yoğun bir öğle sonrası saatine kilitlenmiş bir talep ile geniş bir sabah penceresine açık bir talep, aynı iş olsa da farklı risk taşır ve bu risk teklife yansıyabilir. Bizim önerimiz, mümkünse kesin bir saat değil bir aralık (örneğin sabah dokuz ile on iki arası) belirtmenizdir — bu aralık, ekibin hem sizin işinizi hem varsa bölgedeki başka teslimatı en verimli şekilde planlamasına imkân tanır ve genelde daha iyi bir koşulla sonuçlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Avcılar'ın E-5 karayolu ile sahil arasındaki konumu ve İkitelli merkezli filo hub'ı kamuya açık bilgidir; nakliye planlama mantığı ve teslim saati kurgusu firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:umraniye": {
        h1: "Ümraniye'de Manlift ve Forklift Kiralama: İMES Hattında Makine Seçimi",
        giris:
            "Ümraniye, Anadolu yakasının en yoğun karma dokularından birine sahiptir: bir yanda İMES Sanayi Sitesi'nin kümelendirdiği binlerce küçük ve orta ölçekli atölye ve imalathane, öte yanda ilçenin geri kalanındaki yüksek yoğunluklu konut siteleri ve ticaret merkezleri. İki doku, aynı ilçe içinde birbirinden tamamen farklı makine ihtiyacı ve fiyat mantığı üretir. İMES hattındaki bir atölye sahibinin sorduğu soru genelde 'bu iş için hangi makine sınıfı yeterli' iken, bir site yönetiminin sorusu 'bu cephe işi kaç günde biter'dir — ve bu iki soru, teklifin farklı satırlarını büyütür. Bu sayfa, özellikle İMES hattındaki imalat ve depo işlerinde makine sınıfı seçiminin fiyatla nasıl bir ilişki kurduğunu, rakam vermeden ama seçimin mantığını tam açarak anlatır; site tarafı ihtiyaçları için de aynı çerçeveyi geçerli kılar.",
        maddeler: [
            {
                baslik: "İMES hattında iş çeşitliliği, makine çeşitliliğine dönüşür",
                metin:
                    "İMES gibi yoğun bir sanayi sitesinde işler birbirine benzemez: kimi atölye tavan aydınlatması için kısa süreli bir platform ister, kimi raf sistemi kurulumu için haftalarca forklift kullanır, kimi çelik konstrüksiyon işinde yüksek erişimli bir makineye ihtiyaç duyar. Bu çeşitlilik, 'İMES için tek bir standart makine' beklentisini geçersiz kılar — teklif hazırlarken önce işin ne olduğu netleşmeli, sonra makine sınıfı buna göre seçilmelidir. Yanlış sınıf seçimi iki yönde de maliyetlidir: gereğinden büyük makine kirası şişirir, yetmeyecek küçük makine ikinci bir sevkiyatı zorunlu kılar.",
            },
            {
                baslik: "Dar koridor ve sıkışık parsellerde şase genişliğinin fiyata girişi",
                metin:
                    "Sanayi sitelerinin karakteristik özelliği dar sokaklar ve sıkışık parsellerdir; İMES de bu yapıdan bağımsız değildir. Şase genişliği geniş bir makine, dar bir atölye kapısından veya sıkışık bir avludan geçemeyebilir — bu durumda ya daha kompakt bir sınıfa geçilir ya da makinenin sokağa park edilip malzeme elle taşınması gibi bir çözüm bulunur ve bu ikincisi genelde iş süresini uzatır. Şeffaf teklif bu ölçü uyumunu keşif aşamasında netleştirir: kapı genişliği, avlu ölçüsü ve zemin durumu sorularak, sahaya gerçekten girebilecek makine sınıfı önerilir. Ölçü uyumsuzluğu fiyattan önce gelen bir risktir — uymayan makine, ne kadar ucuz olursa olsun sahaya giremiyorsa değersizdir.",
            },
            {
                baslik: "Kısa atölye işlerinde makine sınıfı ile süre ilişkisi",
                metin:
                    "İMES'teki tipik iş kısa ve noktasaldır — bir günlük tesisat, birkaç saatlik tavan kontrolü. Kısa işte doğru makine sınıfı seçimi süreyi de doğrudan etkiler: doğru sınıf işi tek seferde bitirirken, yetersiz sınıf ikinci bir ziyaret gerektirebilir ve bu ikinci ziyaret hem yeni bir nakliye hem kaybedilen bir gün demektir. Bu yüzden kısa işlerde makine sınıfı seçimini ucuza değil işin gerçek gereksinimine göre yapmak, görünürde biraz daha yüksek bir kira olsa da toplamda tasarruf sağlar. Atölye sahibinin işi tarif ederken en yüksek noktayı ve en dar geçişi birlikte söylemesi, doğru sınıf seçiminin anahtarıdır.",
            },
            {
                baslik: "Süreklilik gösteren imalat işlerinde makine seçiminin dönemsel mantığı",
                metin:
                    "İMES'te düzenli üretim yapan bazı işletmeler forklifti tek seferlik değil sürekli ihtiyaç olarak kullanır. Bu durumda makine seçimi tek bir işin değil, tesisin genel iş yükünün ortalamasına göre yapılmalıdır — nadiren gereken en ağır yükü baz alan seçim kirayı gereksiz büyütür, sık gereken orta yükü baz alan seçim ise ara sıra ek bir makine gerektirebilir. İkisi arasındaki dengeyi bulmak için tesisin son birkaç ayki tipik yük profilini paylaşması, doğru sınıfın belirlenmesinde en güvenilir veridir — tahminden değil, gerçek kullanım örüntüsünden yola çıkılır.",
            },
            {
                baslik: "Site tarafında farklı bir makine mantığı",
                metin:
                    "İMES hattının dışındaki Ümraniye'de, özellikle yüksek yoğunluklu site bölgelerinde, makine seçimini belirleyen unsur imalat ihtiyacı değil bina yüksekliği ve hazırlık koşuludur. Burada seçim, cephenin en yüksek noktasına göre değil işin ağırlıklı yapıldığı kata göre yapılmalı, gerekirse üst kontrol için ayrı ve kısa bir ikinci düzen kurulmalıdır. Bu, İMES tarafındaki 'dar geçiş' mantığından farklı bir seçim kriteridir — aynı ilçede iki farklı doku, iki farklı makine seçim mantığı üretir ve teklifinizin hangi mantığa göre kurulduğunu anlamak, fiyatı doğru okumanın ilk adımıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İMES hattında makine sınıfı seçim rehberi",
                paragraflar: [
                    "Aşağıdaki tablo, İMES ve benzeri sanayi sitesi koşullarında iş tipine göre tipik makine sınıfı eğilimini ve bu eğilimin fiyata dolaylı etkisini rakamsız, kategorik olarak özetler. Kendi işinizi tabloya yerleştirmek, teklif isterken doğru soruları sormanızı kolaylaştırır.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Tipik makine eğilimi", "Fiyata dolaylı etki"],
                    satirlar: [
                        ["Tavan aydınlatma, kısa kontrol", "Kompakt akülü, dar şase", "Düşük — kısa süre, kolay erişim"],
                        ["Raf sistemi kurulumu", "Orta sınıf, sürekli forklift", "Orta — süre ve tekrar bağımlı"],
                        ["Çelik konstrüksiyon, yüksek erişim", "Büyük bomlu, özel taşıma", "Yüksek — hem kira hem nakliye büyür"],
                        ["Dar avlu / kapı geçişi", "Ultra kompakt, sınırlı seçenek", "Değişken — ölçü uyumu önce gelir"],
                        ["Sürekli üretim desteği", "Dönemsel forklift, ortalama yük", "Orta — dönem indirimiyle dengelenir"],
                    ],
                },
            },
            {
                baslik: "Ölçü uyuşmazlığının gerçek maliyeti",
                paragraflar: [
                    "Sanayi sitesi işlerinde en sık rastlanan ve en pahalıya mal olan hata, makinenin fiyatına değil ölçüsüne bakmadan karar vermektir. Kapıdan geçemeyen veya avluda dönemeyen bir makine, ne kadar uygun fiyatlı olursa olsun işe yaramaz — geri gönderilir, doğru sınıf yeniden sevk edilir ve bu süreçte hem ikinci bir nakliye bedeli hem kaybedilen bir iş günü ortaya çıkar. Bu senaryonun tamamı, keşif aşamasında birkaç ölçü ve fotoğrafla önlenebilir bir risktir.",
                    "Bizim yaklaşımımız, teklif öncesi kapı genişliği, avlu derinliği ve zemin tipini sormaktır — atölye sahibi bu üçünü telefonda birkaç dakikada verebilir. Bu küçük ön adım, sahaya doğru makinenin ilk seferde gelmesini sağlayan en ucuz sigortadır.",
                ],
            },
            {
                baslik: "Dönemsel forklift ihtiyacında sınıf ile sözleşme koşulunun birlikte kurulması",
                paragraflar: [
                    "Sürekli üretim yapan İMES işletmeleri için forklift ihtiyacı tek seferlik değil dönemseldir ve bu durumda makine sınıfı seçimi, sözleşme koşuluyla birlikte düşünülmelidir. Ortalama yükü karşılayan bir sınıf seçilip, nadiren gereken tepe yük için ayrı bir kısa süreli takviye makinesi öngörülebilir — bu, tek büyük makineyle sürekli çalışmaktan genelde daha ekonomik bir kurgudur çünkü büyük sınıfın kirası her gün, kullanılmadığı günlerde de işler. Sözleşmede bu takviye mekanizmasının nasıl tetikleneceği (hangi bildirimle, ne kadar sürede) yazılı olmalıdır.",
                    "Bu kurgunun işletmeye getirdiği fayda öngörülebilirliktir: temel ihtiyaç sabit bir sınıfla karşılanırken, dalgalanan tepe talep esnek bir takviyeyle yönetilir — ikisi birlikte, tek büyük makineye göre daha isabetli bir maliyet dengesi kurar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemiz İMES'te, avlumuz dar; hangi makine sınıfının geçebileceğini nasıl anlarız?",
                cevap:
                    "Üç ölçüyü paylaşmanız yeterlidir: giriş kapısının genişliği, avlunun en dar noktasının genişliği ve zeminin tipi (beton, toprak, parke). Bu üç bilgiyle, sahaya fiziksel olarak girebilecek makine sınıflarını önceden eleriz ve size yalnızca gerçekten uyan seçenekleri sunarız. Mümkünse birkaç fotoğraf da isteriz — ölçü doğru olsa bile görünmeyen bir engel (örneğin alçak bir gölgelik) fotoğrafta ortaya çıkabilir. Bu ön kontrol, sahaya giremeyecek bir makinenin gönderilip geri çevrilmesi gibi maliyetli bir senaryoyu tamamen önler.",
            },
            {
                soru: "Raf kurulumu için haftalarca forklift kiralayacağız; günlük fiyattan mı hesaplansın?",
                cevap:
                    "Hayır, öyle hesaplamayız — haftalık veya aylık blok tarifesi günlük tarifeden daha düşük bir gün başı maliyet taşır, çünkü nakliye bir kez yapılır ve makinenin boş gün riski ortadan kalkar. Sizin durumunuzda doğru soru 'günlük fiyat ne' değil 'işiniz kaç hafta sürecek' sorusudur — süre tahmininiz netleştikçe hangi blok eşiğinin sizin için avantajlı olduğunu birlikte hesaplarız. Süre tahmininiz değişken ise, bunu baştan söylemeniz de önemlidir; esnek süreli işler için farklı bir sözleşme kurgusu öneririz.",
            },
            {
                soru: "Çelik konstrüksiyon işimiz için büyük bomlu makine öneriliyor; bu neden hem kira hem nakliyeyi birlikte büyütüyor?",
                cevap:
                    "Çünkü büyük bomlu makineler ağırlık ve boyut olarak standart taşıma araçlarına sığmaz ve özel bir nakliye düzeni (farklı araç tipi, bazen ek izin süreci) gerektirir — bu, mesafeden bağımsız ek bir maliyet kalemidir. Aynı zamanda büyük makinenin kendi kira bedeli de sınıfı gereği yüksektir. İkisi birlikte büyüdüğü için teklifte bu iki satırın ayrı ayrı görünmesini isteyin — bazı teklifler bu ikisini birleştirip tek bir yüksek toplam yazar, bu da hangi kalemin ne kadar etkili olduğunu gizler.",
            },
            {
                soru: "Sürekli üretim yapıyoruz, forklift ihtiyacımız mevsime göre değişiyor; sabit bir sınıfa mı bağlanmalıyız?",
                cevap:
                    "Bağlanmanıza gerek yok — bunun için önerdiğimiz kurgu, ortalama yükünüzü karşılayan bir temel sınıfı sabit sözleşmeyle almak ve tepe dönemlerde kısa süreli bir takviye makinesi eklemektir. Bu kurgunun işlemesi için son birkaç ayınızın tipik yük profilini paylaşmanız yeterlidir — tahmin değil, gerçek kullanım verisi üzerinden temel sınıfı belirleriz. Takviye makinesinin hangi bildirimle ve ne kadar sürede sahaya geleceği sözleşmede yazılı olur; böylece mevsimsel dalgalanma, sürpriz değil planlanmış bir mekanizma hâline gelir.",
            },
            {
                soru: "İMES dışında, site cephemiz için de teklif istedik; neden makine sınıfı önerisi farklı bir mantıkla geldi?",
                cevap:
                    "Çünkü iki iş farklı kriterlere göre değerlendirilir. İMES'teki bir atölye işinde belirleyici olan genelde erişim ölçüsüdür — makinenin kapıdan, avludan geçip geçemediği. Site cephe işinde ise belirleyici olan bina yüksekliğidir — makinenin cephenin en yüksek noktasına erişip erişemediği ve bu erişimin işin ne kadarını kapsadığı. İki kriter farklı olduğu için önerilen sınıf da farklı mantıkla seçilir; bu bir tutarsızlık değil, iki farklı iş tipinin doğal sonucudur. Her iki teklifte de sınıf seçiminin gerekçesini ayrı ayrı görebilirsiniz.",
            },
            {
                soru: "Daha küçük ve ucuz bir makineyle işi idare etmeye çalışsak, gerçekten daha pahalıya mı gelir?",
                cevap:
                    "Çoğu zaman evet, ama nedenini bilerek karar vermenizi tercih ederiz. Yetersiz makineyle başlanan iş iki şekilde pahalılaşır: ya iş yavaşlar ve gün sayısı artar (fazladan her gün bir kira günüdür), ya da makine değiştirilir ve bu ikinci sevkiyat yeni bir nakliye bedeli demektir. Küçük makinenin gün fiyatındaki tasarruf, bu iki risklerden biri gerçekleştiğinde genelde silinir. Yine de bazı işlerde küçük makine gerçekten yeterlidir ve bu durumda önerimiz de o yöndedir — amacımız her zaman büyük makine satmak değil, işin gerçek gereksinimine göre doğru sınıfı önermektir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ümraniye'nin İMES Sanayi Sitesi'ni barındırması ve ilçenin yüksek yoğunluklu site dokusu kamuya açık bilgidir; makine sınıfı seçim mantığı ve keşif yöntemi firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "bolge:kagithane": {
        h1: "Kağıthane'de Platform Kiralamada Süre-Bütçe Dengesi",
        giris:
            "Kağıthane, son yıllarda hızla dönüşen bir ilçedir: eski sanayi ve depo parsellerinin yerini yeni ofis kuleleri, plaza kompleksleri ve karma kullanımlı yapılar alıyor. Bu dönüşüm, kiralama pazarına kendine özgü bir müşteri profili getiriyor — henüz teslim alınmış ama iç mekân işleri süren yeni bir plazanın proje yöneticisi, cephesini yenileyen eski bir ofis binasının yönetimi, dönüşüm sürecindeki bir parselin yüklenicisi. Bu profilin ortak sorusu fiyattan çok zamandır: iş programı ne kadar sıkı, bütçe bu programa nasıl oturtulmalı, süre uzarsa bütçe ne kadar büyür. Kağıthane'deki bir kiralama kararında süre ile bütçe birbirinden ayrı düşünülemez — bu sayfa, dönüşen ofis-plaza aksındaki işlerde süre tanımının bütçeyi nasıl şekillendirdiğini, rakam vermeden ama mekanizmayı tam açarak anlatır.",
        maddeler: [
            {
                baslik: "Yeni yapı teslim sürecinin kendine özgü zaman baskısı",
                metin:
                    "Yeni tamamlanan bir plaza veya ofis binasında iç mekân ve cephe işleri, çoğu zaman teslim takvimine sıkı sıkıya bağlıdır — kiracı taşınma tarihi, açılış etkinliği veya sözleşmesel teslim tarihi gibi ertelenemez noktalar vardır. Bu sıkı takvim, kiralama kararını da etkiler: işin gecikmesi ihtimaline karşı bütçede bir tampon bırakılmalı mı, yoksa iş programı zaten yeterince sıkı mı kurulmuş. Şeffaf teklif bu soruyu görmezden gelmez — iş programınızdaki kritik tarihleri bilirsek, makinenin hangi gün geleceğini ve gecikme ihtimalinde nasıl bir esneme payı olduğunu baştan konuşuruz.",
            },
            {
                baslik: "Süre uzadıkça bütçenin hangi kalemi büyür",
                metin:
                    "Bir cephe veya iç mekân işi plandan uzun sürdüğünde, bütçenin tamamı değil belirli kalemleri büyür: makinenin sahada kaldığı her ek gün kira olarak eklenirken, nakliye ve kurulum bedeli sabit kalır — bu yüzden süre uzaması, kısa işlere göre uzun işlerde bütçeye orantılı olarak daha az yeni yük bindirir. Bu, Kağıthane'deki proje müşterisi için pratik bir sonuç doğurur: süre tahmininde belirsizlik varsa, kısa bir kiralama yerine biraz daha uzun bir blok tarifesiyle başlamak, olası uzamayı günlük tarifeden daha ucuza karşılar.",
            },
            {
                baslik: "Plaza ve ofis yapılarında hazırlık süresinin bütçeye girişi",
                metin:
                    "Aktif kullanımdaki bir ofis binasında veya yeni teslim edilmiş bir plazada çalışmak, boş bir sanayi parselinden farklı bir hazırlık gerektirir: bina yönetiminden çalışma izni, asansör veya ortak alan kullanımının planlanması, mesai saatleri dışına kayan çalışma pencereleri. Bu hazırlıkların bir zaman maliyeti vardır ve bu maliyet iş programına önceden eklenmezse, iş günü sahada beklemeyle uzar — beklerken duran makine de gün olarak sayılır. Şeffaf teklif bu hazırlık süresini ayrı bir madde olarak yazar ve ilk işte bu payın daha yüksek, tekrar işlerinde ise düşük olacağını belirtir.",
            },
            {
                baslik: "Dönüşüm sürecindeki parsellerde bütçenin fazlara bölünmesi",
                metin:
                    "Dönüşümü süren bir parselde iş genelde tek seferde değil fazlar hâlinde ilerler — önce kaba yapı çevresi, sonra cephe kapama, sonra iç mekân detayları. Her fazın kendi makine ihtiyacı ve süresi farklıdır ve bütçenin tek bir toplam yerine faz bazında kurulması, süre kaymalarının etkisini sınırlı tutar: bir fazın gecikmesi yalnızca o fazın bütçesini etkiler, tüm projeyi değil. Fazlar arası geçişte makinenin sahada beklemesi yerine çıkıp bir sonraki faz başladığında geri gelmesi, boşta bekleyen günlerin bütçeye eklenmesini önler.",
            },
            {
                baslik: "Süre tahmininin isabeti, bütçe isabetinin ön koşuludur",
                metin:
                    "Kağıthane'deki dönüşüm aksında en sık karşılaşılan bütçe sapması, kötü niyetli bir fiyatlamadan değil iyimser bir süre tahmininden kaynaklanır: iş üç gün öngörülüp beş günde biter ve aradaki iki gün, ilk teklifte olmayan bir ek fatura olarak görünür. Bu riski azaltmanın yolu, süre tahminini işin gerçek kapsamına göre (kaç metrekare cephe, kaç konum değişikliği, günde kaç saat çalışılacağı) kurmak ve tahminin gerekçesini teklifte görmektir. Gerekçesiz verilen bir gün sayısı, iyimser bir tahmin olma ihtimali taşır — gerekçeli tahmin ise sapma payını önceden görünür kılar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Süre-bütçe dengesinin kategorik özeti",
                paragraflar: [
                    "Aşağıdaki tablo, Kağıthane'deki dönüşen ofis-plaza aksı işlerinde süre belirsizliğinin bütçeye etkisini rakamsız, kategorik olarak özetler. Kendi projenizin hangi sütuna yakın olduğunu görmek, bütçe tamponunun ne kadar gerekli olduğunu önceden kestirmenizi sağlar.",
                ],
                tablo: {
                    basliklar: ["Proje özelliği", "Bütçe riski düşükken", "Bütçe riski yüksekken"],
                    satirlar: [
                        ["Süre tahmini", "Metrekare ve konum sayısına dayalı", "Genel izlenimle verilmiş"],
                        ["İş programı", "Gerçekçi tampon içeren", "Sıkı, tampon içermeyen"],
                        ["Bina erişimi", "Bilinen, önceden test edilmiş", "İlk kez çalışılan, izinsiz"],
                        ["Faz yapısı", "Ayrı bütçeli fazlara bölünmüş", "Tek toplam, tek faz"],
                        ["Hazırlık süreci", "Bina yönetimiyle önceden netleşmiş", "Sahada anlık çözülecek"],
                    ],
                },
            },
            {
                baslik: "Tampon bütçenin doğru kurgusu",
                paragraflar: [
                    "Süre belirsizliği taşıyan bir proje için 'ne olur ne olmaz' diye en yüksek olası günü baştan satın almak, çoğu zaman gereksiz bir maliyettir; ama hiç tampon düşünmemek de sürpriz faturaya açık kapı bırakır. Doğru kurgu, aradaki bir noktadır: gerçekçi süre tahmini üzerine, belirli koşullarda (örneğin bina yönetiminden izin gecikmesi, hava koşulu) tetiklenecek bir uzatma birim fiyatı baştan sözleşmeye yazılır. Böylece proje yöneticisi, olası uzamanın maliyetini tahmin edebilir ve bütçe onayını bu tahminle alır — iş sırasında pazarlık etmek zorunda kalmaz.",
                    "Bu kurgunun ikinci faydası, uzatmanın ilk günden farklı fiyatlanmaması güvencesidir: sözleşmede birim fiyat baştan sabitlendiği için, iş uzadığında tedarikçi durumdan avantaj sağlayan bir zam yapamaz — uzatma, ilk teklifin doğal devamı olarak işler.",
                ],
            },
            {
                baslik: "Bina yönetimiyle koordinasyonun bütçeye dolaylı katkısı",
                paragraflar: [
                    "Aktif kullanımdaki bir plaza veya ofis binasında çalışırken bina yönetimiyle erken koordinasyon, bütçeyi doğrudan değil dolaylı yoldan korur: çalışma saatleri, asansör kullanımı ve ortak alan erişimi önceden netleşirse, iş gününde sahada 'izin bekleme' kaynaklı boşluklar oluşmaz ve bu boşluklar makinenin boşta duran günü olarak faturaya yansımaz. Bizim yaklaşımımız, proje başlamadan önce bina yönetimiyle kısa bir koordinasyon görüşmesi önermektir — bu görüşme bir formalite değil, iş gününün planlandığı gibi geçmesinin en ucuz güvencesidir.",
                    "Koordinasyonun eksik kaldığı projelerde gördüğümüz örüntü şudur: ilk gün beklenenden geç başlar, ekip bu kaybı telafi etmeye çalışır ve iş yine de plandan uzar. Erken koordinasyon, bu örüntüyü baştan kırar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni plazamızın açılışına üç hafta var, cephe işini bu sürede bitirmemiz şart; bütçeyi buna göre nasıl kurmalıyız?",
                cevap:
                    "Önce işin gerçek kapsamını (kaç metrekare, kaç konum değişikliği gerektiği) netleştirip buna göre bir süre tahmini çıkarırız; bu tahmin üç haftanın altında kalıyorsa aradaki fark sizin güvence payınızdır. Eğer tahmin üç haftaya çok yakın çıkıyorsa, iki seçenek sunarız: iş programını hızlandıracak ek kaynak (paralel çalışan ikinci bir makine gibi) veya açılış tarihine göre önceliklendirilmiş bir kapsam (görünür cepheler önce, arka cepheler sonra). Her iki seçeneğin de bütçeye etkisini ayrı ayrı gösteririz — açılış tarihiniz sabit olduğu için burada esnek olması gereken taraf kapsam veya kaynaktır, tarih değil.",
            },
            {
                soru: "İş programımız üç gün öngörüyor ama geçen projede benzer iş beş gün sürmüştü; bu farkı nasıl yönetiriz?",
                cevap:
                    "Geçmiş projenizin verisi tam da aradığımız şeydir — genel bir 'iyimser mi kötümser mi' tartışması yerine, o beş günün nereye gittiğini birlikte inceleriz: hangi gün beklenmedik bir gecikme oldu, bina erişimi mi zaman aldı, hava mı engel oldu, yoksa kapsam mı baştan eksik tahmin edilmişti. Bu inceleme, yeni projenin üç günlük tahmininin gerçekçi olup olmadığını gösterir. Eğer geçmişteki gecikme tekrarlanabilir bir nedene (örneğin bina izin süreci) bağlıysa, yeni sözleşmeye bu nedene özel bir tampon madde ekleriz; tekrarlanmayacak bir nedense (örneğin o günkü özel bir hava olayı), üç günlük tahmini olduğu gibi bırakabiliriz.",
            },
            {
                soru: "Proje fazlara bölünecek; her faz için ayrı mı teklif almalıyız, yoksa tek bir toplam teklif mi istemeliyiz?",
                cevap:
                    "Faz bazlı teklif önerimiz — hem sizin hem bizim için daha sağlıklı bir kurgudur. Tek toplam teklifte bir fazın gecikmesi tüm bütçe planlamasını belirsizleştirirken, faz bazlı yaklaşımda her fazın kendi süre tahmini ve bütçesi ayrıdır; bir fazın kayması yalnızca o fazın takvimini etkiler, sonraki fazların bütçesini otomatik olarak bozmaz. Ayrıca faz bazlı kurguda makine, bir fazın bitişiyle sahadan çıkıp bir sonraki faz başladığında geri gelir — aradaki boşluk günlerinde kira işlemez. Tek dezavantajı biraz daha fazla koordinasyon gerektirmesidir, ama bütçe öngörülebilirliği açısından bu emek karşılığını fazlasıyla verir.",
            },
            {
                soru: "Bina yönetimi çalışma saatlerini mesai dışına sıkıştırdı; bu bütçeyi nasıl etkiler?",
                cevap:
                    "Mesai dışı çalışma penceresi, operatör ve lojistik tarafında bir ek maliyet üretir ama bu ek, oransız bir zam olarak değil hangi kaleme ne eklendiği görünecek biçimde yazılmalıdır — operatör mesai farkı ayrı, varsa gece teslimat farkı ayrı satırda durur. Bunun yanında mesai dışı çalışmanın bir de olumlu etkisi olabilir: bina boş olduğu için hazırlık ve erişim süreci hızlanabilir, bu da iş gününü kısaltabilir. Teklifinizde bu artı ve eksinin ikisi de ayrı satırlarda görünmelidir; yalnızca 'gece zammı' diye tek bir kalem görürseniz içini açtırmanız hakkınızdır.",
            },
            {
                soru: "Süre tahmininde belirsizlik var; bütçeyi en yüksek olası günden mi, en düşük olası günden mi kurmalıyız?",
                cevap:
                    "İkisi de yanıltıcıdır — en yüksek gün bütçenizi gereksiz şişirir, en düşük gün ise ilk aşımda kararsız kalmanıza neden olur. Önerimiz üçüncü bir yol: gerçekçi orta tahmini bütçenin ana gövdesi olarak alın, olası uzama için ise sözleşmeye baştan yazılmış bir uzatma birim fiyatı ekleyin. Bu kurguda bütçe onayınızı gerçekçi bir rakamla alırsınız ve uzama gerçekleşirse maliyeti önceden bildiğiniz bir birim fiyattan hesaplarsınız — iş sırasında yeni bir pazarlığa girmezsiniz.",
            },
            {
                soru: "Dönüşüm sürecindeki parselimizde bir sonraki fazın tarihi henüz kesinleşmedi; makineyi ilk faz bitince tutmalı mıyız, çıkarmalı mıyız?",
                cevap:
                    "Bu kararı bekleme süresinin tahmini uzunluğuna göre birlikte hesaplarız: kısa ve belirsiz bir aradaysa (birkaç gün-bir hafta), makineyi sahada indirimli bir bekleme tarifesiyle tutmak, çıkarıp yeniden getirmenin iki nakliyesinden genelde ucuzdur; uzun ve büyük olasılıkla aylara yayılacak bir aradaysa, makineyi çıkarıp bir sonraki faz netleştiğinde yeniden planlamak daha ekonomik olur. Sınırın hangi tarafında olduğunuzu, bir sonraki fazın en olası başlama aralığını paylaşarak netleştirebiliriz — kesin tarih olmasa bile bir aralık, doğru kararı vermemiz için yeterlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kağıthane'nin sanayi-depo dokusundan ofis-plaza aksına dönüşen yapısı kamuya açık bilgidir; süre-bütçe kurgusu ve faz planlaması firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli Örümcek Platform Kiralamada Fiyatı Belirleyen Kalemler",
        giris:
            "Örümcek platform — paletli, kendinden erişimli ve dar geçitlerden içeri girebilen sepetli makine — İstanbul'un iki yakasında en çok cephe, atrium ve iç avlu işlerinde arandığında karşımıza çıkar; bu makineyi öteki sepetli sınıflardan ayıran şey erişim biçimidir ve fiyatın da büyük kısmı tam olarak bu erişim biçiminden doğar. Bir müşteri telefonda 'örümcek platform' dediğinde aslında birbirinden çok farklı üç işten söz ediyor olabilir: bina girişinden kapı genişliğine sığan bir modelle asansör boşluğuna erişmek, kapalı bir avluya vinç erişimi olmayan bir noktadan sepetle girmek veya bir cephenin çıkıntılı bölümüne yandan uzanmak. Bu üç işin her biri farklı şase genişliği, farklı uzanma mesafesi ve farklı zemin desteği gerektirir — ve fiyat teklifindeki en büyük fark da buradan çıkar. Bu sayfanın amacı, örümcek platform kiralamasında hangi kalemin neye bağlı değiştiğini, rakam vermeden ama hesabı tam açarak göstermektir; böylece bir teklifi okuduğunuzda hangi satırın sizin işinizin gerçek zorluğunu yansıttığını, hangisinin gereksiz bir güvenlik payı olduğunu ayırt edebilirsiniz.",
        maddeler: [
            {
                baslik: "Şase genişliği ve geçiş noktası fiyatı belirler",
                metin:
                    "Örümcek platformun asıl değeri, standart bir sepetli platformun giremeyeceği kadar dar bir kapı, koridor veya asansör boşluğundan geçebilmesidir. Ama bu dar geçiş özelliği her modelde aynı ölçüde değildir — bazı modeller katlanabilir ayaklarıyla neredeyse tek kanat kapı genişliğine iner, bazıları ise daha geniş bir geçiş ister. Teklif isterken geçiş noktanızın net ölçüsünü (genişlik, yükseklik, varsa eşik) vermeniz, doğru modelin seçilmesini ve gereksiz yere daha büyük — ve daha pahalı — bir gövdenin teklife girmesini önler.",
            },
            {
                baslik: "Uzanma mesafesi ile erişim yüksekliği ayrı fiyatlanır",
                metin:
                    "Bu sınıfın diğer sepetli platformlardan farkı, yalnızca dikey değil yatay uzanabilmesidir — makine bir noktada sabitken sepet, engelin üzerinden veya yanından hedefe ulaşır. Fiyat burada iki eksenden etkilenir: erişilecek yükseklik ve makinenin duracağı noktadan hedefe olan yatay mesafe. Aynı yükseklikteki iki iş, biri makinenin tam altına park edebildiği, öteki üç metre geriden uzanmak zorunda kaldığı için farklı sınıf gerektirebilir; teklifte bu iki ölçünün ayrı ayrı sorulması, doğru sınıfın seçildiğinin işaretidir.",
            },
            {
                baslik: "Zemin desteği ve ayak açma alanı",
                metin:
                    "Örümcek platformlar çalışırken ayaklarını (stabilizatör) açarak dengeye oturur ve bu açılım için etraflarında belirli bir boş alan gerekir; iç avlu veya dar bir arka bahçede bu alanın olup olmadığı, işin mümkün olup olmadığını doğrudan belirler. Zemin, ayakların yük dağıtımını taşıyacak sağlamlıkta değilse (örneğin ince bir teras döşemesi veya toprak zemin) takoz veya yayma plakası gerekir; bu ek destek malzemesi ayrı bir hazırlık kalemidir ve teklifte görünür olmalıdır, gizli bir 'saha koşulu' notuna gömülmemelidir.",
            },
            {
                baslik: "İç mekana taşıma ve montaj süresi",
                metin:
                    "Bazı örümcek platform işleri makinenin bina dışında değil, doğrudan bina içine (fuaye, atrium, kapalı otopark) sokulmasını gerektirir; bu durumda makine parçalara ayrılıp taşınabilir veya bütün hâlde özel bir rampadan girebilir. Parçalı taşıma ve içeride yeniden montaj, dışarıda doğrudan çalışmaya göre daha uzun bir kurulum süresi ister ve bu süre günlük kira hesabına değil ayrı bir kurulum-söküm kalemine yazılmalıdır — aksi hâlde bu süre sessizce çalışma gününüzden düşülmüş olur.",
            },
            {
                baslik: "Kablosuz kumanda ve operatör konumu",
                metin:
                    "Örümcek platformların çoğu, operatörün sepetin içinde değil yerde, kablosuz kumandayla makineyi yönettiği bir kullanım biçimine de izin verir; bu, dar ve görüş açısı kısıtlı noktalarda güvenlik ve hassasiyet açısından tercih edilebilir. Yerden kumanda ile sepet içi kumanda arasında fiyat farkı makinenin kendisinden değil, işin gerektirdiği operatör sayısından doğar — bazı dar geçişli işlerde biri sepette biri yerde iki kişi gerekebilir. Teklifte operatör sayısının ve konumunun yazılı olması, bu satırın nereden geldiğini açıklığa kavuşturur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Örümcek platform işlerinde fiyat kalemlerinin kaynağı",
                paragraflar: [
                    "Aşağıdaki tablo, örümcek platform kiralamasında sık karşılaşılan kalemleri ve her birinin hangi saha özelliğine bağlı değiştiğini gösterir. Rakam yerine mantık verilmiştir; kendi işinizin hangi satırları tetiklediğini bu tablo üzerinden önceden görebilirsiniz.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Neye bağlı değişir", "Teklifte nasıl durmalı"],
                    satirlar: [
                        ["Model/şase seçimi", "Geçiş noktası genişliği", "Ölçüye dayalı gerekçeyle"],
                        ["Uzanma sınıfı", "Yükseklik + yatay mesafe", "İki ölçü ayrı belirtilmeli"],
                        ["Zemin desteği", "Ayak açma alanı ve zemin türü", "Takoz/plaka ayrı kalem"],
                        ["Kurulum-söküm", "İç mekana taşıma gerekip gerekmediği", "Süreye değil ayrı kaleme yazılmalı"],
                        ["Operatör düzeni", "Sepet içi mi yerden mi, kaç kişi", "Sayı ve konum açık yazılmalı"],
                    ],
                },
            },
            {
                baslik: "Tek fotoğrafla teklif istemenin riski",
                paragraflar: [
                    "Örümcek platform işlerinde en sık yaşanan uyuşmazlık, telefonda paylaşılan tek bir fotoğraftan verilen tahmini fiyatın sahada tutmamasıdır — çünkü fotoğraf geçiş noktasının genişliğini, ayak açma alanının boşluğunu veya zeminin taşıma kapasitesini göstermez. Dürüst bir teklif süreci, bu üç ölçüyü net biçimde istemeden bağlayıcı fiyat vermez; verirse bile 'saha görülmeden' notuyla, saha ziyaretinden sonra değişebileceğini açıkça yazar.",
                    "Bu ihtiyatlı yaklaşımın müşteriye getirisi, sahada sürpriz bir ek ücretle karşılaşmamaktır — ölçüler önden netleşmişse, teklif sahada da geçerlidir. Ölçü paylaşmadan alınan hızlı ve düşük görünen rakam, sahada geçmediğinde iki kez zaman kaybettirir: hem işin ertelenmesine hem yeni bir teklif sürecine.",
                ],
            },
            {
                baslik: "İki farklı örümcek işinin karşılaştırması",
                paragraflar: [
                    "Bina dışından doğrudan erişilebilen bir cephe işiyle, iç avluya taşınarak girilen bir atrium işi aynı erişim yüksekliğinde olsa bile aynı fiyat mantığını taşımaz. Birincisinde makinenin kendi tekerlekleriyle sahaya girip doğrudan çalışmaya başlaması yeterlidir; ikincisinde taşıma, olası parçalı montaj ve dar alanda manevra süresi devreye girer. Teklif isterken işinizi hangi kategoriye koyduğunuzu netleştirmek — 'dıştan erişim' mi 'içe taşıma' mı — karşılaştırma yapacağınız iki firmanın tekliflerini aynı zemine oturtmanın en hızlı yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform ile standart makaslı platform arasındaki fiyat farkı neden bu kadar büyük?",
                cevap:
                    "Fark makinenin 'daha iyi' olmasından değil, çözdüğü problemin farklı olmasından kaynaklanır. Standart makaslı platform geniş, düz ve engelsiz bir zeminde dikey erişim sağlar; örümcek platform ise dar bir geçişten girip yatay uzanarak erişilmesi güç bir noktaya ulaşır. İkinci yetenek, daha karmaşık bir mekanizma (katlanabilir kol, uzatılabilir ayak) ve daha hassas bir mühendislik gerektirir. İşiniz geniş düz bir zeminde yapılabiliyorsa örümcek platform gereksiz bir maliyettir; işiniz dar bir geçişten veya engelin arkasından erişim gerektiriyorsa standart platform o işi zaten yapamaz — burada karşılaştırma 'ucuz-pahalı' değil 'mümkün-mümkün değil' karşılaştırmasıdır.",
            },
            {
                soru: "Geçiş noktasının ölçüsünü nasıl doğru vereceğimi bilmiyorum, ne yapmalıyım?",
                cevap:
                    "En güvenli yol üç basit ölçüyü fotoğrafla birlikte paylaşmaktır: kapı veya geçit genişliği, varsa eşik yüksekliği ve geçişten sonraki ilk açık alanın boyutu. Bu üçü doğru verilirse model seçimi masa başında büyük ölçüde netleşir; sahada yalnızca zemin sağlamlığı ve ayak açma boşluğu teyit edilir. Ölçüyü tam bilmiyorsanız bunu söylemekten çekinmeyin — tahmini bir rakamla yanlış model önerilmesindense, saha keşfini önceden planlamak her zaman daha hızlı sonuç verir.",
            },
            {
                soru: "İç avluda ayakları tam açamıyoruz, bu durumda çalışabilir mi?",
                cevap:
                    "Çoğu modelde kısmi ayak açma (asimetrik konumlandırma) mümkündür ama bu, makinenin taşıyabileceği yükü ve erişebileceği mesafeyi daraltır — üretici tablosunda bu daralma net biçimde tanımlıdır ve biz sahaya çıkmadan önce bu tabloyu sizinle paylaşırız. Kısmi açılımla işiniz yapılabiliyorsa ek bir maliyet doğmaz; yapılamıyorsa iki seçenek kalır: daha küçük bir modele geçmek veya avlunun bir bölümünü geçici olarak boşaltıp tam açılım sağlamak. Hangisinin sizin için daha pratik olduğunu saha ziyaretinde birlikte değerlendiririz.",
            },
            {
                soru: "Makineyi bina içine sokmak için kapıyı söktürmemiz gerekiyor mu?",
                cevap:
                    "Bu tamamen geçiş ölçüsüne bağlıdır ve önceden netleştirilebilecek bir sorudur. Doğru model seçimi genellikle standart kapı genişliklerine sığacak biçimde yapılır; bu yüzden kapı söküm ihtiyacı istisnadır, kural değildir. Eğer ölçüler gerçekten dar çıkarsa, kapı söküm ve yeniden montaj maliyeti sizin yükleniciniz veya tesis yönetiminiz tarafından karşılanacak ayrı bir kalemdir ve bizim teklifimize dahil değildir — ama bu ihtimali önceden görüp size bildirmek, ölçü değerlendirmesinin bir parçasıdır.",
            },
            {
                soru: "Sepet içinde mi yoksa yerden kumandayla mı çalışmak daha güvenli?",
                cevap:
                    "İkisi de güvenlidir, doğru koşulda kullanıldığında; seçim işin gerektirdiği hassasiyete ve görüş açısına göre yapılır. Sepet içi kumanda, operatörün işi yakından görüp anlık düzeltme yapmasını sağlar ve çoğu iş için tercih edilendir. Yerden kumanda ise özellikle dar geçişlerden manevra yaparken veya makinenin konumlandırılması sırasında, ikinci bir gözün dışarıdan yönlendirme yapmasını sağladığı için tercih edilir — bazı işlerde ikisi birlikte, bir operatör sepette bir operatör yerde çalışır. Hangisinin sizin işiniz için gerekli olduğunu saha değerlendirmesinde birlikte kararlaştırırız.",
            },
            {
                soru: "Zemin teras döşemesi, hasar riski var mı?",
                cevap:
                    "Var olabilir ve bu riski önceden yönetmek bizim işimizin parçasıdır. Ayakların basacağı noktalara yayma plakası veya takoz koyarak yükü geniş bir alana dağıtırız; bu, ince döşeme veya izolasyon üzerinde nokta yükünden kaynaklanan çatlama riskini büyük ölçüde azaltır. Döşemenin türünü ve altındaki yapıyı (betonarme mi, hafif çelik mi) önceden bilmemiz, doğru destek malzemesini seçmemizi sağlar — bu yüzden teklif öncesi zemin hakkında elinizdeki bilgiyi (varsa proje detayı) paylaşmanızı isteriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek platformun teknik çalışma prensibi (dar geçiş, yatay uzanma, ayak destekli denge) kamuya açık ürün bilgisidir; fiyat kalemi mantığı firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "İstanbul'da Platform ve Forklift Nakliyesinde Fiyatın Anatomisi",
        giris:
            "İstanbul'da platform veya forklift kiralayan bir müşteri için nakliye, çoğu zaman teklifin en az anlaşılan ama en çok tartışılan satırıdır — çünkü şehrin coğrafyası bu kalemi basit bir kilometre hesabından çok daha karmaşık hâle getirir. İki yaka arasındaki köprü ve tünel geçişleri saat bandına göre süreyi katlayabilir, bir sanayi sitesinin dar sokakları büyük bir çekicinin giremeyeceği kadar sıkışık olabilir, bir sitenin yönetim kararı teslimat saatini belirli bir pencereye sıkıştırabilir. İkitelli merkezli bir tedarikçi için bu, Avrupa yakasındaki bir işi teslim etmekle Anadolu yakasındaki bir işi teslim etmenin aynı 'nakliye' kelimesiyle anılsa da farklı planlama, farklı süre ve farklı risk taşıdığı anlamına gelir. Bu sayfa nakliye satırının içini tam olarak açar: hangi bileşenin mesafeye, hangisinin araç tipine, hangisinin saha koşuluna bağlı olduğunu; iki yakalı bir şehirde köprü geçişinin fiyata nasıl girdiğini ve nakliye ile ilgili en sık sorulan 'neden bu kadar' sorusunun dürüst cevabını, rakam vermeden ama hesabı saklamadan anlatır.",
        maddeler: [
            {
                baslik: "Mesafe tek başına nakliye fiyatını belirlemez",
                metin:
                    "Sezgisel beklenti 'yakınsa ucuz, uzaksa pahalı' olsa da gerçek daha katmanlıdır: kısa ama trafiği yoğun bir güzergah, uzun ama akıcı bir otoyol güzergahından daha fazla araç-saat tüketebilir. Nakliye satırı bu yüzden yalnızca kilometreyle değil, güzergahın öngörülen süresiyle de hesaplanır ve teslimat saatinin trafik yoğunluğuna denk gelip gelmediği bu süreyi doğrudan etkiler. Erken sabah veya öğle arası gibi görece akıcı saatlere esneyebilen müşteri, aynı mesafe için daha öngörülebilir bir nakliye süresi elde eder — bu esneklik teklifte açıkça bir seçenek olarak sunulmalıdır.",
            },
            {
                baslik: "Araç tipi makinenin ağırlık ve boyutuna bağlıdır",
                metin:
                    "Küçük bir akülü makasli platform standart bir kamyonetle taşınabilirken, büyük bir eklemli platform veya ağır bir forklift özel bir alçak platformlu araç (lowbed) ister; bu araç farkı hem kiralama maliyetini hem şoför-ekip gereksinimini değiştirir. Teklifte araç tipinin hangi makineye göre belirlendiğinin yazılı olması, iki farklı makine için gelen tekliflerin neden farklı nakliye kalemi taşıdığını açıklar — aynı 'nakliye ücreti' başlığı altında aslında iki farklı hizmet satılıyor olabilir.",
            },
            {
                baslik: "İki yaka arası geçiş özel bir kalemdir",
                metin:
                    "İstanbul'un coğrafi yapısı, bazı işlerin makinenin bulunduğu depodan farklı bir yakadaki sahaya taşınmasını gerektirebilir. Bu durumda nakliye satırına köprü veya tünel geçiş maliyeti ile geçiş saatine bağlı süre riski eklenir; saatlik trafik yoğunluğu yüksek dilimlerde planlanan bir geçiş, aracın günün büyük kısmını yolda geçirmesine ve bu da başka bir işe yetişememesine yol açabilir. Şeffaf bir tedarikçi, iki yaka arası taşımanın ek bir planlama ve maliyet kalemi olduğunu baştan söyler; bunu 'aynı şehir içi' diye tek kalemde eritmez.",
            },
            {
                baslik: "Sanayi sitesi içi manevra ayrı bir risk kalemidir",
                metin:
                    "İkitelli ve benzeri yoğun sanayi sitelerinde asıl zorluk çoğu zaman ana güzergahta değil, site içindeki dar sokaklarda ve park hâlindeki araçların bıraktığı dar geçitlerde yaşanır. Büyük bir çekicinin belirli bir sokağa giremediği, bu yüzden yükün sokak başında indirilip son metrelerin başka bir araçla taşındığı durumlar olur; bu ek aktarma, önceden bilinmiyorsa teklife hiç girmemiş bir maliyettir. Bu riski azaltmanın yolu, teslimat noktasının fotoğraf veya konum bilgisiyle önceden paylaşılmasıdır — sokak genişliği ve park yoğunluğu bu fotoğraflarda büyük ölçüde görünür.",
            },
            {
                baslik: "Gidiş-dönüş simetrik değildir",
                metin:
                    "Nakliye satırı çoğu zaman tek bir toplam gibi görünür ama aslında iki ayrı harekettir: teslimat ve iade. Bu ikisi her zaman aynı koşullarda geçmez — teslimat sabah erken saatte akıcı bir trafikte yapılabilirken, iade işin bittiği belirsiz bir saatte, belki de akşam trafiğinin ortasında gerçekleşir. Şeffaf teklif bu iki hareketi ayrı satırlar olarak gösterir ve iadenin hangi saat aralığında planlandığını da tanımlar; aksi hâlde iade saatindeki bir gecikme, kiminin sorumluluğunda olduğu belirsiz bir tartışmaya dönüşebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İstanbul nakliyesinde fiyatı belirleyen kalemler",
                paragraflar: [
                    "Aşağıdaki tablo, İkitelli merkezli bir nakliye planlamasında hangi kalemin neye bağlı değiştiğini ve teklifte nasıl görünmesi gerektiğini özetler. Amaç, iki teklifi karşılaştırırken hangi satırın gerçekten farklı bir hizmeti anlattığını ayırt etmenizi sağlamaktır.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Neye göre değişir", "Teklifte nasıl durmalı", "Dikkat noktası"],
                    satirlar: [
                        ["Güzergah süresi", "Mesafe + saat dilimi + trafik", "Tahmini süre aralığıyla", "Yalnızca km yazan teklif eksiktir"],
                        ["Araç tipi", "Makine ağırlığı/boyutu", "Hangi makineye göre seçildiği", "Küçük makineye büyük araç fazla ücrettir"],
                        ["Yaka geçişi", "Depo ile saha farklı yakadaysa", "Ayrı kalem, ayrı süre riski", "'Şehir içi' diye gizlenmemeli"],
                        ["Site içi manevra", "Sokak genişliği, park yoğunluğu", "Konum bilgisiyle önceden değerlendirilir", "Aktarma ihtimali sorulmalı"],
                        ["Gidiş-dönüş", "İki ayrı hareketin koşulları", "Ayrı satırlar, iade saat aralığıyla", "Tek toplamda gizlenmemeli"],
                    ],
                },
            },
            {
                baslik: "'Nakliye dahildir' cümlesinin arkasını sormak",
                paragraflar: [
                    "Bir teklifte 'nakliye dahildir' yazması, kulağa avantajlı gelir ama bu cümle tek başına hiçbir şey garanti etmez — hangi mesafeye kadar dahil olduğu, iade dahil mi yalnızca teslimat mı, site içi manevra riskinin bu tutara girip girmediği belirtilmediği sürece bu cümle bir pazarlık taktiğidir, bir taahhüt değildir. İkitelli'den kısa mesafeli bir teslimat için 'dahildir' diyen bir teklif, uzak bir yaka geçişinde aynı cümleyi koruyamayabilir; bu noktada devreye 'mesafe aşımında ek ücret' maddesi girer ve bu madde teklifte yoksa iş sırasında sözlü bir pazarlığa dönüşür.",
                    "Doğru soru şudur: nakliye dahil rakamın hangi mesafe ve hangi koşul için geçerli olduğu yazılı mı? Bu soruya net cevap veren teklif, 'dahildir' cümlesini gerçek bir garantiye çevirir; cevap veremeyen teklif ise o cümleyi yalnızca ilk izlenim için kullanmış olabilir.",
                ],
            },
            {
                baslik: "Teslimat saatini planlamanın nakliye maliyetine etkisi",
                paragraflar: [
                    "Teslimat saatinizde esneklik gösterebilmeniz, nakliye satırını küçültebilecek en pratik araçlardan biridir — çünkü akıcı saatlere planlanan bir sevkiyat, aracın günde daha fazla iş yapabilmesini sağlar ve bu verimlilik, tedarikçi tarafında daha öngörülebilir bir maliyet üretir. Belirli bir dar saat penceresi (örneğin yalnızca öğleden sonra iki saatlik bir aralık) talep eden işler, aracın o gün başka bir işe ayrılmasını zorlaştırdığı için genellikle daha az esnek bir fiyatlamaya tabidir. Zorunlu bir kısıt yoksa, teslimat için geniş bir zaman aralığı vermek hem sizin hem tedarikçinin lehinedir.",
                    "Aynı mantık aynı gün içinde birden fazla teslimat planlanabildiğinde de işler: bölgenizde aynı gün başka bir teslimat varsa, aracın paylaşılması nakliye payını küçültebilir. Tarih esnekliğiniz varsa bunu teklif isterken belirtmeniz, bu paylaşım imkânının değerlendirilmesini sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Avrupa yakasından Anadolu yakasına makine getirtmek neden daha pahalı?",
                cevap:
                    "Fark, köprü veya tünel geçiş maliyetinden çok, geçişin süre üzerindeki etkisinden kaynaklanır. Belirli saat dilimlerinde iki yaka arası geçiş, aracın günün büyük kısmını yolda geçirmesine yol açabilir; bu da o aracın aynı gün başka bir teslimata yetişememesi anlamına gelebilir ve bu fırsat maliyeti nakliye satırına yansır. Geçiş saatinizde esneklik gösterirseniz (örneğin gece veya erken sabah), bu risk büyük ölçüde azalır ve nakliye satırı da buna paralel küçülür — teklif isterken saat esnekliğinizi belirtmeniz bu değerlendirmeyi mümkün kılar.",
            },
            {
                soru: "Nakliye ücretini önceden kesin olarak söyleyemiyorsunuz, neden?",
                cevap:
                    "Çünkü kesin rakam, kesin bilgiyle mümkündür ve telefonda genellikle iki kritik veri eksiktir: teslimat noktasının tam erişim koşulu (sokak genişliği, park durumu, indirme noktası) ve teslimat saatinin trafik yoğunluğuna denk gelip gelmediği. Bu ikisi netleşmeden verilen rakam ya risk payıyla şişirilmiştir ya da sahada tutmayacak kadar iyimserdir. Bizim yöntemimiz, konum bilgisi ve birkaç fotoğrafla birlikte aynı gün içinde yazılı ve gerekçeli bir nakliye kalemi vermektir; bu, telefonda söylenen yuvarlak bir rakamdan daha güvenilir sonuç verir.",
            },
            {
                soru: "Çekici sokağımıza giremezse ne olur, ek ücret mi çıkar?",
                cevap:
                    "Bu ihtimal, teslimat noktasının fotoğrafı önceden paylaşılmışsa büyük ölçüde önceden görülebilir ve teklife dahil edilir — bu yüzden konum bilgisini erken paylaşmanızı öneririz. Fotoğraf paylaşılmadan verilen bir teklifte bu risk göz ardı edilmiş olabilir; sahada gerçekten geçilemez bir dar sokakla karşılaşılırsa, yükün sokak başında indirilip son metrelerin küçük bir araçla taşınması gerekebilir ve bu aktarma ayrı bir kalem olarak faturaya girer. Bu senaryoyu önlemenin en etkili yolu, teklif aşamasında konum ve erişim fotoğrafını paylaşmaktır.",
            },
            {
                soru: "Makineyi biz kendi aracımızla alıp götürsek daha mı ucuz olur?",
                cevap:
                    "Evet, nakliye satırı teklifinizden tamamen çıkar; ancak bu seçeneğin iki koşulu vardır ve bunları önceden konuşmak gerekir. Birincisi, aracınızın makinenin ağırlık ve boyutunu güvenli taşıyabilecek kapasitede olması ve gerekli bağlama-sabitleme donanımına sahip olması; ikincisi, yükleme ve indirme sırasında oluşabilecek hasarın sorumluluğunun bu noktada size geçmesidir. Küçük ve hafif makinelerde bu seçenek pratik bir tasarruftur; büyük veya özel taşıma gerektiren makinelerde ise güvenlik riski, tasarruf edilen tutarı genellikle aşar. Hangi kategoriye girdiğinizi teklif aşamasında birlikte değerlendiririz.",
            },
            {
                soru: "İade saatinde gecikirsek nakliye ücreti değişir mi?",
                cevap:
                    "Doğrudan nakliye ücretini değil ama planlamayı etkileyebilir ve bu etkinin sözleşmede tanımlı olması gerekir. İade için planlanan araç, o günün ilerleyen saatlerinde başka bir teslimata da ayrılmış olabilir; sizin tarafınızdaki bir gecikme, o sonraki işin de kaymasına yol açabilir. Bu yüzden teklifte iade için bir saat aralığı tanımlanır ve bu aralığın aşılması durumunda ne olacağı (yeniden planlama, ek bekleme kaydı) yazılı olarak belirtilir. Gecikme ihtimaliniz varsa bunu önceden haber vermeniz, yeniden planlamanın daha sorunsuz yapılmasını sağlar.",
            },
            {
                soru: "Aynı gün birden fazla iş için nakliye planlıyoruz, birleştirme mümkün mü?",
                cevap:
                    "Mümkündür ve bu genellikle nakliye satırında somut bir küçülme sağlar; çünkü araç ve şoför tek seferde birden fazla teslimat yapar, boş dönüş süresi azalır. Bunun işlemesi için tek koşul, işlerin coğrafi olarak makul bir güzergaha oturması ve teslimat saatlerinin birbirini izleyebilecek şekilde esnetilebilmesidir. Birden fazla iş planlıyorsanız bunu teklif isterken birlikte belirtin; güzergah planlaması yaparak hangi kalemin küçüldüğünü size ayrı bir satırda gösteririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İstanbul'un iki yakalı coğrafyası, köprü-tünel geçişleri ve sanayi sitelerinin yoğun dokusu kamuya açık bilgidir; nakliye kalemi mantığı ve planlama yöntemi firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift ve İstifleme Kiralamada Fiyatı Belirleyen Kalemler",
        giris:
            "Forklift kiralaması, İstanbul'un iki yakasındaki depo, imalat ve lojistik işletmeleri için platform kiralamasından farklı bir fiyat mantığı taşır — çünkü forklift genellikle tek seferlik bir işten çok, sürekli veya tekrarlayan bir operasyonun parçasıdır ve fiyatın büyük kısmı kapasite ile kullanım yoğunluğundan doğar. Bir müşteri 'forklift kiralamak istiyoruz' dediğinde bu cümlenin arkasında çok farklı ihtiyaçlar olabilir: bir haftalık bir stok sayımı için geçici bir makine, sürekli çalışan bir depo için aylık bir kiralama veya sezonluk bir yoğunluk artışında mevcut filoya eklenen destek makine. Her biri farklı kapasite sınıfı, farklı süre yapısı ve farklı bakım sorumluluğu gerektirir. Bu sayfa, forklift ve istifleme makinesi kiralamasında fiyatı belirleyen kalemleri — kapasite sınıfı, kaldırma yüksekliği, lastik tipi, yakıt/güç seçimi ve süre yapısı — rakam vermeden ama mantığını tam açarak anlatır; böylece bir teklifi okuduğunuzda hangi satırın işinizin gerçek gereksinimini yansıttığını görebilirsiniz.",
        maddeler: [
            {
                baslik: "Kapasite sınıfı fiyatın ilk basamağıdır",
                metin:
                    "Forklift fiyatlaması önce taşınacak yükün ağırlığına göre bir sınıf belirlenerek başlar ve bu sınıf, motor gücünden şaseye kadar makinenin bütününü etkiler. Sık yapılan hata, 'idare eder' diye alttan bir sınıfla başlayıp iş sırasında yükün sınıra yaklaştığını fark etmektir — bu durumda ya makine değişir (ikinci nakliye, kayıp saat) ya da yük güvenli olmayan biçimde taşınır. Doğru yaklaşım, en ağır yükünüzü baz alıp o yükü rahatça taşıyan sınıfı seçmektir; teklifte bu sınıfın hangi maksimum yüke göre belirlendiği yazılı olmalıdır.",
            },
            {
                baslik: "Kaldırma yüksekliği raf sistemine göre değişir",
                metin:
                    "Kapasite kadar önemli olan ikinci eksen kaldırma yüksekliğidir ve bu, deponuzdaki raf sisteminin en üst seviyesine göre belirlenir. Standart bir forklift belirli bir yüksekliğe kadar rahat çalışırken, yüksek raf sistemlerinde dar koridorlu özel sınıflara (reach truck gibi) geçilir — bu geçiş hem kira hem de operatör yetkinliği açısından ayrı bir kalemdir. Teklif isterken en üst raf seviyenizi ve koridor genişliğinizi paylaşmak, doğru sınıfın önerilmesini sağlar.",
            },
            {
                baslik: "Zemin ve lastik tipi uyumu",
                metin:
                    "Kapalı, düz ve perdahlı bir depo zemini ile açık, düzensiz bir avlu zemini farklı lastik tipleri gerektirir; kauçuk dolgu lastikler kapalı alanda iz bırakmadan çalışırken, açık sahada pnömatik veya kalın profil lastikler dayanıklılık sağlar. Yanlış lastik seçimi ya zeminde hasara ya da açık sahada erken aşınmaya yol açar — ikisi de sonradan ek maliyet demektir. Teklifte zemin türünün sorulup lastik seçiminin buna göre yapıldığının belirtilmesi, bu riski baştan kapatır.",
            },
            {
                baslik: "Yakıt tipi ve şarj altyapısı",
                metin:
                    "Kapalı alanda egzoz emisyonu nedeniyle akülü veya elektrikli makineler tercih edilirken, açık sahada veya kesintisiz ağır işte dizel/LPG makineler daha pratik olabilir. Akülü makinede şarj altyapınızın (priz gücü, şarj noktası sayısı) kiralama süresince yeterli olup olmadığı önceden değerlendirilmelidir; vardiya boyunca kesintisiz kullanım gerekiyorsa yedek akü veya hızlı şarj seçeneği ayrı bir kalem olarak teklife girebilir. Bu seçimin gerekçesi teklifte bir cümleyle yer almalıdır.",
            },
            {
                baslik: "Süre yapısı: günlük mü, dönemlik mi",
                metin:
                    "Tek seferlik kısa bir ihtiyaçla sürekli işleyen bir deponun aylık desteği aynı birim fiyatı taşımaz — dönemlik kiralamada nakliye bir kez yapılır ve aylara yayılır, planlama maliyeti düşer. Bu yüzden teklif isterken gerçek kullanım süresini (günlük mü, sezonluk mu, sürekli mi) net söylemek, hem doğru fiyat modelinin hem de bakım sorumluluğu paylaşımının doğru kurulmasını sağlar; kısa süreli işte bakım genellikle tedarikçide kalırken, uzun dönemli kiralamada bakım sorumluluğu ayrıca netleştirilmelidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift kiralamasında fiyat kalemi haritası",
                paragraflar: [
                    "Aşağıdaki tablo, forklift ve istifleme kiralamasında en sık karşılaşılan kalemleri ve her birinin hangi saha özelliğine göre belirlendiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Neye göre belirlenir", "Teklifte nasıl durmalı"],
                    satirlar: [
                        ["Kapasite sınıfı", "En ağır taşınacak yük", "Maksimum yük gerekçesiyle"],
                        ["Kaldırma yüksekliği", "Raf sisteminin üst seviyesi", "Koridor genişliğiyle birlikte"],
                        ["Lastik tipi", "Zemin türü (kapalı/açık)", "Zemin bilgisiyle gerekçeli"],
                        ["Güç tipi", "Kapalı/açık alan, kullanım süresi", "Şarj/yakıt sorumluluğu ayrı"],
                        ["Süre yapısı", "Günlük mü dönemlik mi", "Bakım sorumluluğu netleştirilmeli"],
                    ],
                },
            },
            {
                baslik: "Bakım dahil mi, kim karşılıyor",
                paragraflar: [
                    "Kısa süreli forklift kiralamasında bakım genellikle tedarikçinin sorumluluğundadır ve teklife dahildir; makine arızalanırsa değişim tedarikçinin işidir. Ancak dönemlik veya sürekli kiralamada bu ayrım netleşmelidir: periyodik bakım (yağ, filtre kontrolü) kimde, sarf malzeme (lastik aşınması dahil) nasıl paylaşılır, arıza durumunda müdahale süresi ve o günün faturalanıp faturalanmayacağı yazılı olmalıdır. Bu üç sorunun cevabı, uzun dönemli iki teklif arasındaki görünmez farkın en büyük kaynağıdır.",
                    "Bakımı açık biçimde tanımlamayan teklif, dönem sonunda beklenmedik bir sarf malzemesi veya arıza faturasıyla karşınıza çıkabilir; bu yüzden dönemlik kiralamada bakım maddesinin sözleşmede ayrı bir bölüm olarak yer alması gerekir.",
                ],
            },
            {
                baslik: "Operatörlü mü operatörsüz mü forklift",
                paragraflar: [
                    "Forklift kullanımı belgeli operatör gerektirir ve bu, kiralama kararınızı doğrudan etkiler: kendi belgeli personeliniz varsa operatörsüz kiralama mümkündür ve maliyeti düşürür; yoksa operatörlü kiralama, hem yasal uygunluk hem güvenlik açısından gereklidir. Operatörsüz kiralamada teslimat sırasında kısa bir kullanım eğitimi ve makinenin teknik özelliklerinin aktarılması standart uygulamadır; operatörlü kiralamada ise mesai saatleri ve öğle arası sayımı gibi süre tanımları teklifte net olmalıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kaç tonluk forklift bize yeter, nasıl karar veririz?",
                cevap:
                    "Karar noktası, en sık taşıdığınız yük değil en ağır taşıyacağınız yüktür — çünkü ara sıra gelen ağır bir palet, sınıfı belirleyen o istisnai anı temsil eder. Bize taşıyacağınız en ağır yükün ağırlığını ve bu yükü ne kadar yükseğe kaldırmanız gerektiğini (raf seviyesi) söylerseniz, güvenli çalışma payını da içeren doğru sınıfı öneririz. Sınırda bir kapasiteyle çalışmak hem güvenlik riski hem de makinenin erken yıpranması demektir; bu yüzden 'idare eder' mantığıyla küçük sınıf seçmek, uzun vadede daha pahalıya gelebilir.",
            },
            {
                soru: "Akülü mü dizel mi forklift daha ekonomik?",
                cevap:
                    "Ekonomiklik burada yakıt fiyatından çok kullanım ortamına bağlıdır. Kapalı alanda dizel makine kullanmak emisyon nedeniyle mümkün değildir veya ek havalandırma maliyeti doğurur; bu durumda akülü makine tek gerçekçi seçenektir. Açık sahada, kesintisiz vardiyalı ağır işte ise akülü makinenin şarj süresi bir kısıt oluşturabilir ve dizel/LPG makine operasyonel sürekliliği daha kolay sağlar. Doğru soru 'hangisi ucuz' değil 'hangisi işinizin ortam ve süreklilik gereksinimini karşılıyor' sorusudur; ikisi de karşılıyorsa o zaman ekonomiklik karşılaştırması anlamlı olur.",
            },
            {
                soru: "Kiraladığımız forklift depo koridorlarımıza sığmıyor, ne yapmalıyız?",
                cevap:
                    "Bu, kapasite ve kaldırma yüksekliği belirlenirken koridor genişliğinin de sorulmadığının işaretidir — doğru bir teklif sürecinde bu üçü birlikte değerlendirilir. Dar koridorlu depolar için standart forklift yerine dar koridora özel sınıflar (reach truck gibi) kullanılır; bu sınıflar farklı bir kira ve genellikle ek operatör yetkinliği gerektirir. Koridor genişliğinizi ölçüp bize iletirseniz, ilk teklifte doğru sınıfı önererek bu sorunu baştan önleriz.",
            },
            {
                soru: "Sezonluk yoğunlukta mevcut filomuza ek forklift almak istiyoruz, süre nasıl belirlenir?",
                cevap:
                    "Sezonluk destek kiralamasında süreyi net bir başlangıç ve bitiş tarihiyle değil, tahmini bir aralıkla planlamanızı öneririz — çünkü sezon yoğunluğu genellikle birkaç günlük farkla erken biter veya uzar. Sözleşmeye kısa bildirimle uzatma veya erken iade maddesi eklemek, bu belirsizliği maliyete çevirmeden yönetmenin yoludur. Geçmiş sezonların yoğunluk verisi varsa (kaç hafta sürdüğü, hangi aylarda yoğunlaştığı) paylaşmanız, doğru süre tahmininin yapılmasına yardımcı olur.",
            },
            {
                soru: "Forklift arızalanırsa depo operasyonumuz durur, bu riski nasıl yönetiyorsunuz?",
                cevap:
                    "Bu riski iki katmanda yönetiriz: birincisi, teslim öncesi makinenin bakım kaydı ve genel durumu kontrol edilir; ikincisi, sözleşmede arıza müdahale süresi ve gerekirse yedek makine temini yazılı olarak tanımlanır. Sürekli çalışan bir depo için bu madde özellikle önemlidir — arıza bildiriminden itibaren tanımlı süre içinde müdahale edilmezse geçen sürenin faturalanıp faturalanmayacağı da sözleşmede yer almalıdır. Operasyonunuz kesintiye toleranssızsa bunu bize önceden belirtin, yedek makine seçeneğini teklife dahil edelim.",
            },
            {
                soru: "Kendi operatörümüzle çalışmak istiyoruz, belge kontrolü nasıl yapılıyor?",
                cevap:
                    "Teslimat sırasında operatörünüzün ilgili forklift sınıfı için geçerli operatör belgesini görürüz ve bu, makinenin teslim tutanağına işlenir. Bu adım hem yasal bir gereklilik hem de sorumluluk paylaşımının netleşmesi açısından önemlidir — operatörsüz teslim edilen makinede kullanım kaynaklı hasar sorumluluğu size geçer. Belge kontrolü dışında kısa bir teknik bilgilendirme (makinenin özel donanımları, kapasite sınırı) de teslimatın standart bir parçasıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift sınıflandırması (kapasite, kaldırma yüksekliği, güç tipi) kamuya açık ürün bilgisidir; fiyat kalemi mantığı ve teklif değerlendirme yöntemi firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) Kiralamada Sınıf Farkının Fiyata Etkisi",
        giris:
            "Eklemli platform — kollu, engel aşabilen ve hem dikey hem yatay erişim sağlayan sınıf — İstanbul'da genellikle makaslı platformun yetmediği işlerde devreye girer: bir cephenin çıkıntılı bölümüne, bir çatı saçağının altına veya bir yapının önündeki engelin (ağaç, tesisat hattı, komşu yapı) arkasına ulaşmak gerektiğinde. Bu sınıfın fiyat mantığı makaslı platformdan farklıdır çünkü burada belirleyici olan yalnızca erişim yüksekliği değil, 'yatay erişim' denilen ikinci bir eksendir — makine bir noktada dururken kolun ne kadar uzağa ve hangi açıyla uzanabildiği. İki eklemli platform aynı erişim yüksekliğine sahip olsa bile farklı yatay erişim mesafesi taşıyabilir ve bu fark, hangi sınıfın seçildiğine göre fiyatı belirgin biçimde değiştirir. Bu sayfa, eklemli platform kiralamasında sınıf seçiminin fiyata nasıl yansıdığını, hangi ölçünün doğru sınıfı belirlediğini ve bir teklifte bu sınıf gerekçesinin nasıl görünmesi gerektiğini rakam vermeden anlatır.",
        maddeler: [
            {
                baslik: "Yatay erişim, sınıf basamağının asıl belirleyicisidir",
                metin:
                    "Eklemli platformlarda sınıflar genellikle erişim yüksekliği bandına göre gruplanır ama aynı bandın içinde bile yatay erişim mesafesi modelden modele değişir. Bir işin gerçek zorluğu çoğu zaman dikey yükseklikten değil, makinenin duracağı noktadan hedefe olan yatay mesafeden gelir — örneğin önünde geniş bir bahçe veya havuz olan bir cepheye, makine hedefin tam altına yaklaşamadan uzanmak zorunda kalır. Teklif isterken yalnızca 'kaç metreye çıkacağız' değil, 'makine nereye park edip nereye uzanacak' sorusunun da cevaplanması, doğru sınıfın seçilmesini sağlar.",
            },
            {
                baslik: "360 derece dönüş ve sepet konumlandırma",
                metin:
                    "Eklemli platformların çoğu, sepetin kolun ucunda bağımsız olarak döndürülüp açılandırılabilmesini sağlar; bu, dar bir noktadan erişip hedefe farklı açılardan yaklaşmayı mümkün kılar. Bu esneklik, özellikle karmaşık cephe geometrisi olan (çıkıntı, girinti, farklı açılı yüzeyler) işlerde standart bir makaslı platformun yapamayacağı bir işi mümkün kılar; ama bu ek eksen, makinenin mekanik karmaşıklığını ve dolayısıyla kira sınıfını da yükseltir. Teklifte bu özelliğin işiniz için gerekli olup olmadığının değerlendirildiğinin belirtilmesi, gereksiz bir üst sınıfa geçilmediğinin göstergesidir.",
            },
            {
                baslik: "Zemin taşıma kapasitesi ve stabilizatör alanı",
                metin:
                    "Eklemli platformlar, özellikle uzun kollu ve yüksek sınıflar, çalışırken stabilizatör ayaklarını açarak dengeye oturur; bu ayakların bastığı noktalarda zemin belirli bir yükü taşıyabilmelidir. Şehir içi bir bahçede veya yeni dökülmüş bir betonda bu kapasite garanti değildir ve takoz veya yayma plakası gerekebilir. Bu hazırlık, ayrı bir kalem olarak teklifte görünmeli, 'saha koşullarına göre değişebilir' gibi belirsiz bir cümleye gömülmemelidir.",
            },
            {
                baslik: "Dizel ile akülü eklemli platform arasındaki fark",
                metin:
                    "Eklemli platformlar hem dizel hem akülü/hibrit güç tipiyle üretilir; açık sahada ve uzun mesafeli manevre gerektiren işlerde dizel model daha pratikken, kapalı veya gürültü/emisyon hassasiyeti olan alanlarda (bina yakını, gece çalışması) akülü model tercih edilir. Bu seçim yalnızca çevresel bir tercih değil, aynı zamanda bir maliyet kalemidir — akülü modelde şarj planlaması, dizel modelde yakıt ve gürültü izinleri devreye girer. Doğru seçim işin yapıldığı ortama göre belirlenmeli ve teklifte gerekçelendirilmelidir.",
            },
            {
                baslik: "Nakliye ve montaj büyük sınıflarda ayrı bir kalemdir",
                metin:
                    "Yüksek sınıf eklemli platformlar hem ağır hem hacimlidir; bu makinelerin nakliyesi standart bir kamyonetle değil özel taşıma aracıyla yapılır ve bazı durumlarda sahada parçalı montaj gerekebilir. Bu ek süreç, küçük bir makaslı platformun teslimatından belirgin biçimde farklı bir lojistik kalemidir ve teklifte ayrı bir satır olarak görünmelidir — büyük sınıfa geçildiğinde yalnızca günlük kira değil, nakliye ve montaj kalemi de birlikte büyür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli platform sınıflarının fiyat basamakları",
                paragraflar: [
                    "Aşağıdaki tablo, eklemli platform seçiminde hangi ölçünün hangi kalemi etkilediğini özetler. İki teklifi karşılaştırırken bu satırların her birinin sizin işiniz için gerekçeli olup olmadığını sorgulayın.",
                ],
                tablo: {
                    basliklar: ["Ölçü", "Etkilediği kalem", "Teklifte nasıl durmalı"],
                    satirlar: [
                        ["Yatay erişim mesafesi", "Sınıf seçimi", "Park noktası-hedef mesafesiyle gerekçeli"],
                        ["360 derece dönüş ihtiyacı", "Model karmaşıklığı", "Gerekliliği açıkça belirtilmeli"],
                        ["Zemin taşıma kapasitesi", "Hazırlık (takoz/plaka)", "Ayrı kalem, saha bilgisiyle"],
                        ["Güç tipi", "Ortam uygunluğu", "Gürültü/emisyon gerekçesiyle"],
                        ["Sınıf büyüklüğü", "Nakliye/montaj", "Büyük sınıfta ayrı satır"],
                    ],
                },
            },
            {
                baslik: "Makaslı platform ile eklemli platform arasında yanlış seçimin maliyeti",
                paragraflar: [
                    "Bazı işler, ilk bakışta makaslı platformla yapılabilecek gibi görünse de sahada bir engelle (ağaç dalı, tesisat, komşu çıkıntı) karşılaşıldığında iş yarım kalır ve eklemli platforma geçmek için ikinci bir nakliye gerekir. Tersi durum da olur: iş için eklemli platform kiralanır ama zemin geniş ve engelsiz çıkar, oysa aynı iş daha ucuz bir makaslı platformla da yapılabilirdi. Her iki yanlış seçim de ek maliyet üretir; bunu önlemenin yolu, teklif öncesi sahanın fotoğrafını ve varsa engel bilgisini paylaşmaktır.",
                    "Deneyimli bir tedarikçi, bu iki sınıf arasında kararsız kaldığınız durumlarda size hangi sınıfın daha güvenli seçim olduğunu (genellikle biraz daha pahalı ama garantili) söylemekten çekinmemelidir — çünkü yanlış sınıfla başlayıp ikinci bir nakliyeye dönen iş, baştan doğru sınıfı seçmekten her zaman daha pahalıya gelir.",
                ],
            },
            {
                baslik: "Yatay erişim ölçüsünü nasıl doğru vermeli",
                paragraflar: [
                    "Teklif isterken en faydalı bilgi, makinenin park edebileceği en yakın noktadan hedefe olan yaklaşık mesafe ve varsa aradaki engelin yüksekliğidir. Bu ölçü kesin olmak zorunda değildir; bir fotoğraf üzerinden yapılan yaklaşık bir tahmin bile doğru sınıfın belirlenmesine yardımcı olur. Ölçü hiç verilmeden yalnızca 'kaç metreye çıkacağız' bilgisiyle verilen teklif, sahada değişme riski en yüksek teklif türüdür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform mu eklemli platform mu bize daha uygun, nasıl karar verelim?",
                cevap:
                    "Karar noktası basittir: makine hedefin tam altına veya yakınına park edebiliyorsa ve zemin geniş-düz ise makaslı platform genellikle yeterli ve daha ekonomiktir. Ancak hedef ile makinenin duracağı nokta arasında bir engel (bahçe, havuz, çıkıntı, tesisat) varsa ve dikey erişimin yanında yatay uzanma gerekiyorsa eklemli platform tek gerçekçi çözümdür. Bize işin fotoğrafını veya konumun kabaca tarifini gönderirseniz, hangi sınıfın gerekli olduğunu ilk görüşmede söyleyebiliriz.",
            },
            {
                soru: "Eklemli platform neden makaslı platformdan daha pahalı?",
                cevap:
                    "Fark, mekanik karmaşıklıktan kaynaklanır: eklemli platform, kolun birden fazla noktadan bükülebilmesini, sepetin bağımsız dönebilmesini ve bu hareketlerin güvenli biçimde dengelenmesini sağlayan bir sistemdir; makaslı platform ise yalnızca dikey hareket eder. Daha karmaşık mekanizma, daha fazla mühendislik ve bakım maliyeti taşır. Ama bu fark 'daha pahalı olduğu için kaçının' anlamına gelmez — işiniz yatay erişim gerektiriyorsa makaslı platform o işi zaten yapamaz; burada karşılaştırma ucuz-pahalı değil, mümkün-mümkün değil karşılaştırmasıdır.",
            },
            {
                soru: "Bahçemizde havuz var, makine kenarından geçebilir mi?",
                cevap:
                    "Bu tam olarak eklemli platformun çözdüğü problem türüdür — makine havuzun kenarında güvenli bir noktada durup kolunu havuzun üzerinden hedefe uzatabilir, tabii ki zemin taşıma kapasitesi ve kolun yatay erişim mesafesi yeterliyse. Havuzun boyutunu ve makinenin duracağı olası noktalarla hedef arasındaki mesafeyi paylaşırsanız, bu mesafeye yetecek yatay erişimli bir sınıf öneririz. Havuz kenarındaki zemin taşıma kapasitesi konusunda da önceden değerlendirme yaparız, çünkü kenar bölgeleri bazen standart zeminden daha az sağlam olabilir.",
            },
            {
                soru: "360 derece dönebilen sepete gerçekten ihtiyacımız var mı, yoksa gereksiz bir maliyet mi?",
                cevap:
                    "Bu, işinizin geometrisine bağlıdır. Cephe düz ve tek yönlüyse, sepetin döner özelliğine çoğu zaman ihtiyaç duyulmaz ve daha basit bir model yeterli olur. Ama cephede farklı açılarda yüzeyler varsa (köşe dönüşü, girinti-çıkıntı) veya makinenin tek bir noktadan durup birden fazla yöne erişmesi gerekiyorsa, döner sepet iş süresini kısaltarak aslında tasarruf sağlar — makineyi sürekli yeniden konumlandırmak yerine tek noktadan farklı açılara erişilir. İşinizin cephe planını paylaşırsanız bu ihtiyacı birlikte değerlendiririz.",
            },
            {
                soru: "Büyük eklemli platform bahçe kapımızdan geçemeyebilir, ne yapmalıyız?",
                cevap:
                    "Bu, teklif öncesi mutlaka sorulması gereken bir sorudur ve genellikle iki çözümü vardır: makinenin ulaşabileceği en yakın erişim noktasından (örneğin sokak veya geniş bir avlu) çalışması, ya da geçiş ölçüsüne uyan daha kompakt bir eklemli platform modeline geçilmesi. İkinci seçenek her zaman aynı yatay erişimi sağlamayabilir, bu durumda hedefe olan mesafe yeniden değerlendirilmelidir. Geçiş noktanızın ölçüsünü (genişlik, varsa yükseklik kısıtı) paylaşırsanız, bu ölçüye uyan seçenekleri teklif aşamasında sunarız.",
            },
            {
                soru: "Sözleşmemizde 'eklemli platform' yazıyor ama hangi sınıf geleceği belirsiz, bu normal mi?",
                cevap:
                    "Normal değildir ve bu tam olarak şeffaf teklifin önlemesi gereken bir belirsizliktir. 'Eklemli platform' genel bir kategori adıdır, farklı erişim yüksekliği ve yatay erişim mesafesine sahip birçok modeli kapsar; hangi modelin geleceği yazılı olmayan bir sözleşme, sahada işinize yetmeyen bir makineyle karşılaşma riski taşır. Bizim tekliflerimizde model, erişim yüksekliği ve yatay erişim mesafesi ayrı ayrı yazılır — 'eklemli platform' yalnızca kategori başlığıdır, asıl taahhüt bu üç rakamın (ölçü olarak, fiyat değil) altında durur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun mekanik çalışma prensibi (kol eklemi, yatay erişim, döner sepet) kamuya açık ürün bilgisidir; fiyat kalemi mantığı firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekan ve Depo Platform Kiralamada Akülü-Dizel Fiyat Karşılaştırması",
        giris:
            "Kapalı alanda çalışan bir depo veya üretim tesisi için platform kiralarken karşılaşılan ilk soru neredeyse her zaman aynıdır: akülü mü, dizel mi? Bu soru yalnızca teknik bir tercih değil, doğrudan bir fiyat sorusudur — çünkü iki güç tipi farklı kira sınıfı, farklı bakım gereksinimi ve farklı operasyonel kısıt taşır. İstanbul'un iki yakasındaki depo ve fabrika işletmeleri için asıl belirleyici, hangi makinenin 'daha ucuz' olduğu değil, hangisinin kapalı alan koşullarına (emisyon, gürültü, zemin, vardiya süresi) uygun olduğudur — çünkü uygun olmayan makine, düşük kira görünse bile iş sırasında ek maliyet üretir. Bu sayfa, iç mekan platform kiralamasında akülü ve dizel seçeneklerinin fiyatını hangi kalemlerin belirlediğini, hangi ortamda hangisinin gerçekten pratik olduğunu ve bu kararın yanlış verilmesinin ne gibi ek maliyetlere yol açtığını rakam vermeden, mantığını tam açarak anlatır.",
        maddeler: [
            {
                baslik: "Kapalı alanda dizel makine neden istisnadır",
                metin:
                    "Kapalı bir depo veya üretim alanında dizel motorlu makine çalıştırmak, egzoz emisyonunun havalandırma olmadan birikmesi riski taşır ve bu nedenle çoğu tesiste ya tamamen yasaktır ya da ek havalandırma önlemi (fan, açık kapı düzeni) şartına bağlanır. Bu şart, ek bir maliyet ve operasyonel kısıt getirdiği için pratikte kapalı alan işlerinin büyük kısmı akülü veya elektrikli makinelerle yürütülür. Dizel makine yalnızca çok büyük hacimli ve doğal havalandırması güçlü mekanlarda, sınırlı süreli işlerde bir seçenek olarak değerlendirilir — ve bu durumda bile teklifte havalandırma koşulunun karşılandığının teyit edildiği belirtilmelidir.",
            },
            {
                baslik: "Akülü makinede şarj planlaması fiyatı etkiler",
                metin:
                    "Akülü makinenin kira bedeli dizele göre genellikle daha düşük görünse de, vardiya boyunca kesintisiz kullanım gereken işlerde şarj süresi bir kısıt oluşturur. Standart akü kapasitesi tek vardiyalık kullanıma yetiyorsa ek maliyet doğmaz; ama iki veya üç vardiyalı sürekli çalışan bir depoda yedek akü veya hızlı şarj seçeneği gerekebilir ve bu ayrı bir kalemdir. Teklif isterken günlük çalışma saatinizi ve vardiya düzeninizi belirtmeniz, akü kapasitesinin işinize yetip yetmeyeceğinin doğru değerlendirilmesini sağlar.",
            },
            {
                baslik: "Zemin iz bırakma riski ve lastik seçimi",
                metin:
                    "Depo ve üretim zeminleri genellikle epoksi kaplı veya perdahlı betondur ve bu yüzeylerde standart siyah lastikler iz bırakabilir; iz bırakmayan (beyaz veya gri dolgu) lastikli modeller bu risk için tercih edilir. Bu seçim küçük bir detay gibi görünse de, zemin hasarının temizlik veya onarım maliyeti kiralama tutarının üzerine eklenebileceği için önemlidir. Teklifte lastik tipinin zemin türüne göre seçildiğinin belirtilmesi, bu riskin baştan yönetildiğinin işaretidir.",
            },
            {
                baslik: "Raf arası dar koridorlarda şase genişliği",
                metin:
                    "Depo içi işlerde erişim yüksekliği kadar önemli olan bir başka ölçü, makinenin raf koridorları arasından geçebilme genişliğidir. Standart bir akülü platformun şasesi çoğu depo koridoruna sığarken, bazı yüksek kapasiteli veya geniş sepetli modeller dar koridorlara girmeyebilir. Koridor genişliğinizi teklif isterken paylaşmanız, sahada 'makine sığmadı' sürprizini önler ve doğru dar şaseli modelin baştan seçilmesini sağlar.",
            },
            {
                baslik: "Forklift trafiğiyle paylaşılan alanda güvenlik ayrımı",
                metin:
                    "Aktif bir depoda platform, forklift ve personel trafiğiyle aynı alanı paylaşabilir; bu durumda çalışma alanının bariyer veya işaretlemeyle ayrılması gerekir ve bu hazırlık bazen ayrı bir kalem olarak teklife girer. Vardiya saatleri dışında (gece veya boş saatlerde) yapılan işlerde bu ihtiyaç azalır çünkü alan zaten boştur — bu da bazı işletmelerin platform işlerini bilinçli olarak mesai dışına planlamasının bir nedenidir. Bu tercih operatör mesai farkı doğurabilir ama güvenlik hazırlığı kalemini küçültebilir; iki etkinin net sonucu işin büyüklüğüne göre değişir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Akülü ve dizel platform: kapalı alan karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iç mekan/depo işlerinde akülü ve dizel platform seçeneklerinin hangi koşulda avantajlı olduğunu kategorik olarak karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Ölçüt", "Akülü platform", "Dizel platform"],
                    satirlar: [
                        ["Emisyon uygunluğu", "Kapalı alanda sorunsuz", "Havalandırma şartı gerekir"],
                        ["Gürültü", "Düşük, mesai içi uygun", "Yüksek, mesai dışı tercih edilir"],
                        ["Sürekli kullanım", "Şarj planlaması gerekir", "Yakıt ikmaliyle kesintisiz"],
                        ["Dar koridor uygunluğu", "Dar şaseli modeller mevcut", "Genellikle daha geniş şase"],
                        ["Tipik kullanım senaryosu", "Vardiyalı kapalı depo işi", "Büyük hacimli, sınırlı süreli iş"],
                    ],
                },
            },
            {
                baslik: "Yanlış güç tipi seçiminin gizli maliyeti",
                paragraflar: [
                    "Kapalı alanda dizel makine ile başlanan bir iş, havalandırma yetersizliği fark edildiğinde durdurulup akülü makineye geçilmek zorunda kalınabilir; bu geçiş hem kayıp iş günü hem ikinci bir nakliye demektir. Tersi senaryo da olur: sürekli üç vardiya çalışan bir depoda tek akülü makineyle başlanır, şarj süresi üretim akışını böler ve iş yavaşlar — bu durumda yedek akü veya ikinci makine gereksinimi sonradan ortaya çıkar ve baştan planlansaydı daha ucuza gelirdi.",
                    "Bu iki senaryonun ortak dersi şudur: güç tipi seçimi, kira bedeline bakılarak değil, çalışma ortamının emisyon-gürültü kısıtları ve kullanım süresinin sürekliliği birlikte değerlendirilerek yapılmalıdır. Teklif öncesi bu iki bilginin (ortam kısıtı, kullanım süresi) paylaşılması, doğru seçimin ilk seferde yapılmasını sağlar.",
                ],
            },
            {
                baslik: "Vardiya dışı çalışmanın fiyat dengesi",
                paragraflar: [
                    "Depo işlerini mesai dışına (gece veya hafta sonu) planlamak, bir yandan operatör mesai farkı doğururken diğer yandan güvenlik hazırlığı ve alan paylaşım kalemlerini küçültebilir — alan boş olduğu için bariyer ve trafik ayrımı ihtiyacı azalır, iş genellikle daha hızlı biter. Bu iki etkinin net sonucu işin büyüklüğüne ve deponuzun mesai içi yoğunluğuna bağlıdır; küçük işlerde mesai içi çalışmak genellikle daha ekonomikken, büyük ve karmaşık işlerde mesai dışı planlama toplam süreyi kısaltarak dengeyi tersine çevirebilir.",
                    "Bu dengeyi teklif aşamasında birlikte hesaplamak, hangi zaman diliminin sizin işiniz için gerçekten daha ekonomik olduğunu rakamla değil mantıkla göstermenin yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Deponuzda dizel platform çalıştırabilir misiniz, yoksa kesin akülü mü olmalı?",
                cevap:
                    "Bu, deponuzun hacmine ve doğal havalandırma imkânına bağlıdır ve genel bir kural yerine sahaya özel değerlendirme gerektirir. Küçük veya orta ölçekli kapalı bir depoda dizel makine genellikle önerilmez çünkü egzoz birikimi riski gerçektir; büyük hacimli ve iyi havalandırılan bir alanda kısa süreli bir iş için istisnai olarak değerlendirilebilir, ama bu durumda ek fan veya kapı açık tutma gibi önlemler gerekebilir. Güvenli ve pratik olan, kapalı alan işlerinin varsayılan olarak akülü makineyle planlanmasıdır; dizelin gerçekten gerekli olduğu istisnai durumları birlikte değerlendiririz.",
            },
            {
                soru: "Akülü platform bir tam vardiya boyunca şarjsız çalışabilir mi?",
                cevap:
                    "Çoğu standart akülü platform bir vardiyalık kullanım için yeterli akü kapasitesine sahiptir, ama bu kullanım yoğunluğuna göre değişir — sürekli hareket eden bir iş, ara ara duran bir işten daha fazla akü tüketir. İki veya üç vardiyalı kesintisiz kullanımda tek akü genellikle yetmez ve yedek akü veya vardiya arası şarj penceresi planlanmalıdır. Günlük çalışma saatinizi ve kullanım yoğunluğunuzu (sürekli hareket mi, ara sıra mı) bize söylerseniz, akü kapasitesinin yeterliliğini önceden değerlendiririz.",
            },
            {
                soru: "Zeminimiz epoksi kaplı, lastik izi bırakır mı?",
                cevap:
                    "Standart siyah kauçuk lastikler epoksi zeminde iz bırakabilir, özellikle makine dönüş yaparken veya durarak beklerken. Bu riski önlemek için iz bırakmayan (genellikle açık renkli) dolgu lastikli modelleri kapalı alan işlerinde standart olarak öneririz. Zemin türünüzü teklif aşamasında belirtmeniz, doğru lastik tipinin baştan seçilmesini ve olası bir zemin hasarı tartışmasının önlenmesini sağlar.",
            },
            {
                soru: "Raf koridorlarımız dar, her akülü platform sığar mı?",
                cevap:
                    "Hayır, sığmaz — akülü platformlar arasında da şase genişliği modelden modele değişir ve bazı geniş sepetli veya yüksek kapasiteli modeller dar koridorlara girmeyebilir. Koridor genişliğinizi ölçüp bize iletirseniz, bu ölçüye uyan dar şaseli modeli öneririz. Ölçü paylaşılmadan seçilen bir model, sahada koridora sığmadığında işin durup daha küçük bir makineyle değiştirilmesi gerekebilir — bu da kayıp zaman ve ikinci bir nakliye demektir.",
            },
            {
                soru: "Gece çalışmasında güvenlik hazırlığı daha mı az gerekiyor?",
                cevap:
                    "Genellikle evet, çünkü gece saatlerinde depo trafiği (personel, forklift, malzeme hareketi) büyük ölçüde durur ve bu da çalışma alanının izole edilmesi ihtiyacını azaltır. Ancak bu, hazırlığın tamamen ortadan kalktığı anlamına gelmez — aydınlatma yeterliliği, acil durum erişimi gibi maddeler gece çalışmasında ayrıca değerlendirilmelidir. Gece çalışmasının getirdiği operatör mesai farkı ile azalan hazırlık kaleminin net etkisini, işinizin büyüklüğüne göre birlikte hesaplarız.",
            },
            {
                soru: "Vardiyamız üç saat uzayabilir, akü buna yeter mi diye nasıl anlarız?",
                cevap:
                    "En güvenilir yöntem, planlanan toplam çalışma saatini ve makinenin ne sıklıkla hareket edeceğini (sürekli mi, aralıklı mı) bize baştan söylemenizdir; biz de buna göre akü kapasitesinin yeterli olup olmadığını veya yedek akü/şarj penceresi gerekip gerekmediğini değerlendiririz. Belirsizlik varsa — vardiyanın ne kadar uzayacağı net değilse — ihtiyatlı yaklaşım, yedek akü seçeneğini baştan teklife dahil etmek ve kullanılmazsa faturalanmamasını sağlamaktır; bu, iş ortasında şarj yetersizliğiyle durmaktan daha güvenli bir planlamadır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı alan emisyon ve havalandırma kısıtları ile akülü/dizel platform çalışma prensipleri kamuya açık bilgidir; fiyat kalemi mantığı firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montaj İşlerinde Platform Kiralama Fiyatı",
        giris:
            "Çelik konstrüksiyon montajı — bir hangar iskeletinin kurulması, bir çatı kirişinin bağlanması veya bir cephe iskeletinin monte edilmesi — platform kiralamasının en uzun soluklu ve en değişken süreli işlerinden biridir; ve bu sayfanın odağı tam olarak buradan geliyor: proje süresi, çelik konstrüksiyon işlerinde fiyatı belirleyen en büyük tek değişkendir. Bir konut cephesi işi genellikle birkaç gün içinde biterken, bir çelik iskelet montajı hava koşullarına, malzeme teslim takvimine ve ekipler arası koordinasyona bağlı olarak haftalar sürebilir ve bu süre boyunca makinenin sahada kalması, günlük kira mantığından farklı bir fiyatlama gerektirir. Bu sayfa, çelik konstrüksiyon montaj işlerinde platform kiralama fiyatının süre tahminine nasıl bağlı olduğunu, süre aşımının nasıl yönetildiğini ve proje bazlı bir teklifin hangi maddeleri taşıması gerektiğini rakam vermeden ama mantığını tam açarak anlatır.",
        maddeler: [
            {
                baslik: "Süre tahmini fiyatın ana ekseni",
                metin:
                    "Çelik konstrüksiyon işinde makine bedeli genellikle işin en büyük kalemidir ve bu kalem doğrudan tahmini süreye bağlıdır; bu yüzden teklif kalitesinin en önemli göstergesi, süre tahmininin ne kadar gerekçeli olduğudur. Gerekçesiz bir 'iki hafta' tahmini ile montaj sırasının, kaç konum değişikliğinin ve günlük çalışma saatinin hesaba katıldığı bir 'iki hafta' tahmini aynı rakamı taşısa bile aynı güvenilirlikte değildir. Teklif isterken tahminin dayanağını (kaç aks, kaç bağlantı noktası, günde kaç saat çalışılacağı) sormak, süre riskinin gerçekten değerlendirilip değerlendirilmediğini gösterir.",
            },
            {
                baslik: "Hava koşulu kesintisinin fatura karşılığı",
                metin:
                    "Yüksekte çalışma gerektiren çelik montaj işleri rüzgâr, yağış ve don gibi hava koşullarından doğrudan etkilenir ve bu koşullarda çalışma durabilir. Bu durma süresinin faturaya nasıl yansıyacağı sözleşmede baştan tanımlanmalıdır: makine sahada kalıp bekliyorsa bu gün tam mı, indirimli mi faturalanır, yoksa makine geçici olarak çekilip hava düzeldiğinde mi geri getirilir. Bu madde yazılı değilse, bir haftalık kötü hava, proje bütçesinde önceden görülmemiş bir tartışma konusuna dönüşebilir.",
            },
            {
                baslik: "Konum değişikliği aksa göre çoğalır",
                metin:
                    "Bir çelik iskeletin farklı akslarında (bölümlerinde) çalışmak, makinenin sürekli olarak bir konumdan diğerine taşınmasını gerektirir ve her konum değişikliği, gerçek çalışma süresine eklenen bir hazırlık-manevra zamanıdır. Küçük bir işte bu ihmal edilebilir düzeydeyken, çok akslı büyük bir hangar veya depo iskeletinde konum değişikliği sayısı, toplam süreyi belirgin biçimde uzatabilir. Şeffaf bir teklif, projenin aks sayısına göre tahmini konum değişikliği sayısını ve bunun süreye etkisini ayrı bir kalem olarak gösterir.",
            },
            {
                baslik: "Diğer ekiplerle koordinasyon süre riskini büyütür",
                metin:
                    "Çelik konstrüksiyon işleri nadiren tek başına yürür — vinç ekibi, kaynak ekibi ve montaj ekibi aynı sahada sırayla veya eş zamanlı çalışır ve platformun çalışma penceresi bu koordinasyona bağlıdır. Bir önceki ekibin gecikmesi, platformun sahada boşta beklemesine yol açabilir; bu bekleme süresinin kimin sorumluluğunda olduğu (genel yüklenicinin koordinasyon gecikmesi mi, hava koşulu mu) sözleşmede ayrıştırılmalıdır. Bu ayrım yapılmadan imzalanan sözleşmede, koordinasyon kaynaklı gecikme çoğu zaman platform tedarikçisinin faturasına yansır — oysa sorumluluk orada değildir.",
            },
            {
                baslik: "Yüksek erişim sınıfının proje boyunca sabit maliyeti",
                metin:
                    "Çelik konstrüksiyon işleri genellikle standart bir konut cephesinden daha yüksek erişim gerektirir ve bu, proje boyunca sabit kalan bir sınıf seçimidir — işin ortasında sınıf değiştirmek (daha yüksek bir noktaya çıkma ihtiyacı doğarsa) yeni bir nakliye ve olası bekleme süresi demektir. Bu yüzden proje başında en yüksek erişim noktasının net belirlenmesi ve buna göre sınıfın seçilmesi, projenin ortasında sınıf değişikliğinden kaynaklanan ek maliyeti önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çelik konstrüksiyon projelerinde süre riskinin kaynakları",
                paragraflar: [
                    "Aşağıdaki tablo, proje süresini uzatabilecek başlıca kaynakları ve bu riskin sözleşmede nasıl ele alınması gerektiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Risk kaynağı", "Süreye etkisi", "Sözleşmede nasıl ele alınmalı"],
                    satirlar: [
                        ["Hava koşulu kesintisi", "Belirsiz süreli durma", "Bekleme tarifesi/çekme kuralı"],
                        ["Konum değişikliği", "Aks sayısına göre çoğalır", "Tahmini sayı ve süre etkisi yazılı"],
                        ["Ekipler arası koordinasyon", "Bekleme, boşta kalma", "Sorumluluk ayrımı net olmalı"],
                        ["Malzeme teslim gecikmesi", "İş sırası kayabilir", "Bildirimli erteleme maddesi"],
                        ["Sınıf değişikliği ihtiyacı", "Yeni nakliye, kayıp gün", "Erişim noktası baştan netleşmeli"],
                    ],
                },
            },
            {
                baslik: "Gerçekçi süre tahmininin karşılaştırma değeri",
                paragraflar: [
                    "Üç farklı tedarikçiden gelen çelik konstrüksiyon teklifinde toplam rakamların büyük farkı çoğu zaman süre tahmininden kaynaklanır — biri işi on gün, öteki on beş gün öngörmüştür ve düşük toplam aslında iyimser bir takvimdir. İş uzadığında uzatma faturası devreye girer ve iyimser başlayan teklif, sonunda en pahalısına dönüşebilir. Bu yüzden karşılaştırmanın doğru birimi toplam rakam değil, süre tahmininin gerekçesidir: hangi teklif kaç aks, günde kaç saat çalışma ve hangi hava toleransı üzerinden hesaplanmış, bunu görmeden karar vermeyin.",
                    "Gerekçeli takvim veren teklif, masada biraz daha yüksek görünse bile projenin sonunda çoğu zaman en öngörülebilir ve en ucuz seçenek olur — çünkü sürpriz uzatma faturası riskini baştan küçültmüştür.",
                ],
            },
            {
                baslik: "Uzun projede fiyat güncelleme kuralı",
                paragraflar: [
                    "Haftalar süren bir çelik konstrüksiyon işinde imza günkü fiyatın sonuna kadar aynı kalıp kalmayacağı baştan netleşmelidir: fiyat hangi dönem için sabittir, olası bir güncelleme hangi koşula ve hangi bildirim süresine bağlıdır. Kuralsız bir sözleşmede süre uzaması, tedarikçinin insafına kalan bir pazarlığa dönüşür; kurallı sözleşmede ise bütçe revizyonu öngörülebilir bir hesaptır. Proje başlamadan bu kuralın sözleşmede yazılı olup olmadığını kontrol etmek, uzun soluklu işlerde en değerli birkaç dakikadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Projemiz on gün sürecek dediler ama geçen projede benzer bir iş üç hafta sürmüştü, nasıl güvenelim?",
                cevap:
                    "Güvenmenin yolu tahmini olduğu gibi kabul etmek değil, dayanağını sormaktır: on günlük tahmin kaç aks, günde kaç saat çalışma ve hangi hava toleransı üzerinden hesaplanmış? Geçmiş projenizin üç haftaya uzamasının nedenini (hava mı, koordinasyon mu, kapsam değişikliği mi) birlikte inceleriz — eğer yeni proje benzer bir riski taşıyorsa tahmine baştan bir tampon süre ekleriz, taşımıyorsa on günlük tahmini gerekçesiyle birlikte değerlendiririz. Gerekçesiz bir rakamı kabul etmek yerine, gerekçeyi sorgulamak sizi daha iyi korur.",
            },
            {
                soru: "Hava nedeniyle üç gün çalışamadık, bu günlerin faturası ne olacak?",
                cevap:
                    "Bu, sözleşmenizdeki hava koşulu maddesine bağlıdır ve biz bu maddeyi proje başında net yazarız: belirli bir şiddetin üzerindeki hava koşulunda (örneğin güvenli çalışma sınırını aşan rüzgâr) makine sahada indirimli bir bekleme tarifesiyle kalır veya süre uzun sürecekse geçici olarak çekilip hava düzeldiğinde geri getirilir — hangisinin ekonomik olduğunu beklenen sürenin uzunluğuna göre birlikte değerlendiririz. Sözleşmede bu madde yoksa, hava kaynaklı durma tam fiyattan faturalanma riski taşır; bu yüzden imza öncesi bu maddenin varlığını mutlaka kontrol edin.",
            },
            {
                soru: "Vinç ekibi gecikti, platform üç gün boşta bekledi; bu bizim mi tedarikçinin mi sorumluluğu?",
                cevap:
                    "Bu tam olarak sözleşmede 'koordinasyon kaynaklı gecikme' maddesinin var olması gereken senaryodur. Standart yaklaşımımız, bekleme süresinin sorumluluğunu gecikmenin kaynağına göre ayırmaktır — genel yüklenicinin veya diğer ekiplerin koordinasyon gecikmesinden doğan bekleme, platform tedarikçisinin değil projenin genel yönetiminin sorumluluğundadır ve buna göre indirimli bir bekleme tarifesiyle ele alınır. Bu ayrımın sözleşmede baştan yazılı olması, üç günlük beklemenin kimin faturasına yansıyacağı konusunda iş sırasında tartışma çıkmasını önler.",
            },
            {
                soru: "İşin ortasında daha yüksek bir noktaya çıkmamız gerekti, sınıf değişikliği nasıl işler?",
                cevap:
                    "Öncelikle bu ihtimali proje başında en yüksek erişim noktasını net belirleyerek önlemeye çalışırız — ama gerçekten öngörülmemiş bir ihtiyaç doğarsa, mevcut makinenin sahadan çıkarılıp daha yüksek sınıf bir makinenin getirilmesi gerekir ve bu yeni bir nakliye kalemidir. Bu geçişin süresi, projenizin genel takvimine eklenmelidir; biz bu geçişi mümkün olan en kısa sürede planlarız ama sıfır kayıp vaat etmeyiz. Sınıf değişikliği ihtiyacının önceden görülmesi için proje başında yapı planını (varsa en yüksek nokta bilgisiyle) paylaşmanız çok değerlidir.",
            },
            {
                soru: "Malzeme tedarikçimiz gecikirse montaj işini erteleyebilir miyiz, makine bize ek maliyet çıkarır mı?",
                cevap:
                    "Erteleme mümkündür ve bunun maliyeti büyük ölçüde bildirim süresine bağlıdır: yeterli önceden haber verilen bir erteleme, makinenin başka bir işe kaydırılmasına imkân tanır ve genellikle ek maliyet doğurmaz; son anda yapılan bir erteleme ise makinenin o gün için zaten planlanmış olması nedeniyle bir bekleme veya iptal koşuluna girebilir. Malzeme teslim takviminizdeki belirsizliği baştan bize söylerseniz, sözleşmeye esnek bir erteleme maddesi (belirli bir bildirim süresiyle ücretsiz kaydırma) ekleyebiliriz.",
            },
            {
                soru: "Proje fazlara bölünecek, her faz için ayrı mı sözleşme yapmalıyız?",
                cevap:
                    "Faz bazlı sözleşme genellikle daha sağlıklı bir kurgudur: her fazın kendi süre tahmini ve fiyatı ayrı olur, bir fazın gecikmesi yalnızca o fazın takvimini etkiler ve makine bir fazın bitişiyle sahadan çıkıp bir sonraki faz başladığında geri gelir — aradaki boşluk günlerinde kira işlemez. Tek koşulu biraz daha fazla koordinasyon gerektirmesidir, ama uzun bir çelik konstrüksiyon projesinde bu koordinasyon emeği, bütçe öngörülebilirliği açısından karşılığını fazlasıyla verir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj işlerinin süre değişkenliği (hava koşulu, koordinasyon, aks sayısı) genel inşaat sektörü pratiğidir; proje fiyatlama kurgusu firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım Tesisi ve Silo İşlerinde Platform Kiralama",
        giris:
            "İstanbul'un iki yakasındaki platform taleplerinin büyük çoğunluğu kentsel ve sanayi ağırlıklıdır; tarım tesisi veya silo yapısına özgü işler bu talebin küçük ve düzensiz bir dilimini oluşturur — bu yüzden bu sayfayı dürüst bir çerçevede tutuyoruz: elimizde bu iş türüne özgü büyük bir tekrar deneyimi yoktur, ama genel platform kiralama mantığımız (fiyat kalemlerinin şeffaf ayrıştırılması, saha koşuluna göre doğru sınıf seçimi) buraya da aynen uygulanır. Silo bakımı, tahıl deposu çatı işleri veya tarımsal tesis üstyapı bakımı gibi ihtiyaçlarda arayan bir müşteriye söyleyebileceğimiz şey, açık ve içi boş konuşmaktır: işin ölçülerini (silo yüksekliği, erişim noktası, zemin türü) paylaşırsanız, elimizdeki makine parkının bu işe uygun olup olmadığını dürüstçe değerlendiririz — uygun değilse bunu söyleriz, uygunsa hangi kalemlerin fiyatı belirlediğini aynı şeffaflıkla açarız.",
        maddeler: [
            {
                baslik: "Silo yüksekliği ve dar erişim",
                metin:
                    "Silo yapıları genellikle dar tabanlı ve yüksek gövdelidir; bu geometri, makinenin siloya ne kadar yakın park edebildiğine ve gövde etrafında ne kadar manevra alanı olduğuna bağlı olarak sınıf seçimini belirler. Silo etrafında geniş açık alan varsa standart bir dikey erişimli makine yeterli olabilir; alan dar veya silo grubu birbirine yakınsa yatay erişimli bir sınıf gerekebilir. Bu değerlendirme sahaya özgüdür ve fotoğraf veya ölçü olmadan tahmin edilemez.",
            },
            {
                baslik: "Zemin: tarımsal alan toprak veya çakıl olabilir",
                metin:
                    "Kentsel sahaların aksine tarımsal tesislerin çevresi çoğu zaman sıkıştırılmamış toprak veya çakıl zemindir; bu, platform ayaklarının veya tekerleklerinin batma riski taşıdığı anlamına gelir. Zemin sağlamlığı önceden bilinmiyorsa, teklif 'saha görülmeden kesinleşmez' notuyla verilir ve gerekirse yayma plakası veya farklı bir lastik tipi önerilir. Bu belirsizliği azaltmanın yolu, zeminin mevsimsel durumunu (yağış sonrası yumuşak mı, kuru mu) paylaşmaktır.",
            },
            {
                baslik: "Mevsimsel erişim kısıtları",
                metin:
                    "Tarım tesislerine erişim, hasat dönemi trafiği veya mevsimsel yol koşulları (çamur, don) nedeniyle yıl boyunca sabit değildir. Bu, nakliye planlamasını kentsel bir işten daha değişken hâle getirir ve teslimat tarihinin esnek tutulması önerilir. İşin hangi mevsimde yapılacağını önceden belirtmeniz, nakliye ve zemin risklerinin daha gerçekçi değerlendirilmesini sağlar.",
            },
            {
                baslik: "Kapalı silo içi çalışma farklı bir konudur",
                metin:
                    "Bir silonun dışından erişim ile içine girip çalışmak (iç yüzey bakımı, temizlik) tamamen farklı bir iş kategorisidir ve genel amaçlı platform kiralaması bu kapsamda değildir — kapalı, dar ve olası toz/gaz riski taşıyan bir iç mekan çalışması özel ekipman ve güvenlik prosedürü gerektirir. Bu tür bir talep gelirse, bunun bizim standart hizmet kapsamımızın dışında olduğunu dürüstçe söyleriz ve uygun bir uzman yönlendirmesi öneririz.",
            },
            {
                baslik: "Tek seferlik iş, sürekli bir tesis desteği değil",
                metin:
                    "Tarım tesisi işleri genellikle yıllık bakım döngüsüne bağlı, tek seferlik veya nadiren tekrarlanan işlerdir; bu yüzden dönemlik kiralama avantajları (nakliyenin aylara yayılması gibi) burada genellikle geçerli değildir ve fiyatlama tek seferlik bir kiralama mantığıyla kurulur. Tekrarlayan bir ihtiyacınız varsa (örneğin yıllık silo çatı kontrolü), bunu bize söylemeniz, gelecek yıllarda daha planlı bir teklif süreci kurmamızı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım tesisi işlerinde değerlendirme kalemleri",
                paragraflar: [
                    "Aşağıdaki tablo, bu iş türünde teklif öncesi netleştirilmesi gereken bilgileri ve her birinin neyi belirlediğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Bilgi", "Neyi belirler", "Nasıl paylaşılmalı"],
                    satirlar: [
                        ["Silo/yapı yüksekliği", "Erişim sınıfı", "Yaklaşık ölçü yeterli"],
                        ["Etraf alan genişliği", "Manevra ve stabilizatör", "Fotoğraf veya kroki"],
                        ["Zemin türü ve mevsimi", "Lastik/destek ihtiyacı", "Kuru/ıslak, toprak/çakıl bilgisi"],
                        ["Erişim yolu koşulu", "Nakliye planlaması", "Mevsimsel kısıt bilgisi"],
                        ["İç mi dış mı çalışma", "Hizmet kapsamına girip girmediği", "Net iş tanımı"],
                    ],
                },
            },
            {
                baslik: "Dürüst kapsam sınırı",
                paragraflar: [
                    "Bu iş türünde elimizdeki tekrar deneyimi sınırlı olduğu için, iddialı bir 'tarım tesisi uzmanıyız' söylemi kurmuyoruz — bunun yerine elimizdeki makine parkının ve genel platform kiralama tecrübemizin sizin işinize uyup uymadığını dürüstçe değerlendiriyoruz. Sahanızın ölçüleri standart platform sınıflarımızla karşılanabiliyorsa hizmet veririz; iş, özel tarımsal ekipman veya iç mekan silo çalışması gibi kapsam dışı bir alana giriyorsa bunu baştan söyleriz.",
                    "Bu dürüstlüğün amacı, sahaya uygun olmayan bir makineyle işe başlayıp yarım kalmasındansa, baştan doğru beklenti kurmaktır.",
                ],
            },
            {
                baslik: "Teklif öncesi paylaşılması faydalı bilgiler",
                paragraflar: [
                    "Bu iş türü için en hızlı ve gerçekçi teklif, birkaç fotoğraf ve temel ölçülerle mümkün olur: siloya veya çalışılacak yapıya birkaç metreden çekilmiş bir fotoğraf, yaklaşık yükseklik tahmini, etraftaki zeminin görünümü ve erişim yolunun durumu. Bu bilgiler ne kadar erken paylaşılırsa, işin bizim kapsamımıza girip girmediği ve hangi sınıfın uygun olduğu o kadar hızlı netleşir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo bakımı için platform kiralıyor musunuz?",
                cevap:
                    "Silonun dışından erişimle yapılacak bir çatı, gövde veya üst yapı bakımı için, sahanın ölçüleri ve zemin koşulu uygunsa evet, hizmet veririz. Ancak silonun içine girip çalışmayı gerektiren bir iş (iç yüzey temizliği, iç bakım) bizim standart hizmet kapsamımızın dışındadır çünkü bu, özel ekipman ve güvenlik prosedürü gerektiren ayrı bir uzmanlık alanıdır. Bize işin dışarıdan mı içeriden mi yapılacağını net söylerseniz, doğru yönlendirmeyi (kendimiz mi yaparız, başka bir uzmana mı yönlendiririz) baştan yaparız.",
            },
            {
                soru: "Tesisimizin çevresi toprak zemin, makine batar mı?",
                cevap:
                    "Bu, zeminin nem durumuna ve makinenin ağırlığına bağlıdır ve kesin cevabı sahayı görmeden veremeyiz. Kuru ve sıkışmış toprak genellikle sorun çıkarmazken, yağış sonrası yumuşamış toprak batma riski taşır. Bu riski önceden değerlendirmek için zeminin son durumunu (yakın zamanda yağış oldu mu, toprak sert mi yumuşak mı) sormamız standart bir adımdır; gerekirse yayma plakası ile destekleyerek riski azaltırız, gerçekten uygun değilse bunu dürüstçe söyleriz.",
            },
            {
                soru: "Tesisimize yol dar ve mevsimsel olarak çamurlu oluyor, nakliye yine de mümkün mü?",
                cevap:
                    "Genellikle mümkündür ama mevsime göre planlama gerekir — çamurlu dönemde ağır bir nakliye aracının sıkışma riski varsa, teslimat tarihini yolun daha kuru olduğu bir döneme kaydırmayı öneririz. Zorunlu bir tarih varsa, daha küçük ve hafif bir taşıma aracı kullanılarak riski azaltmayı değerlendiririz. Erişim yolunuzun mevsimsel durumunu önceden bize söylemeniz, bu planlamanın daha isabetli yapılmasını sağlar.",
            },
            {
                soru: "İşimiz için uygun makineniz yoksa ne yaparsınız?",
                cevap:
                    "Bunu size dürüstçe söyleriz ve elimizden geldiğince genel bir yönlendirme yaparız. Standart makine parkımızın karşılayamayacağı özel bir ihtiyaç (örneğin çok özel bir erişim geometrisi veya tarımsal ekipmana özgü bir donanım) varsa, bu işi 'idare eder' diyerek üstlenmek yerine kapsam dışında olduğunu açıkça belirtmeyi tercih ederiz — çünkü uygun olmayan makineyle başlayan bir iş, hem sizin hem bizim için daha büyük bir kayıp riski taşır.",
            },
            {
                soru: "Yıllık düzenli bir silo kontrolümüz olacak, tekrar eden bir anlaşma yapabilir miyiz?",
                cevap:
                    "Evet, yapabiliriz — tekrarlayan bir ihtiyacınız olduğunu bilmemiz, gelecek yıllarda teklif sürecini hızlandırır çünkü sahanın ölçüleri ve koşulları bir kez netleştikten sonra tekrar sıfırdan değerlendirilmesi gerekmez. İlk yılki değerlendirmemizi kayıt altına alıp, sonraki yıllarda yalnızca mevsimsel koşulları (zemin durumu, erişim yolu) güncelleyerek daha hızlı bir teklif süreci kurarız.",
            },
            {
                soru: "Bu iş türünde deneyiminiz sınırlıysa neden size güvenelim?",
                cevap:
                    "Dürüst cevap şudur: bu iş türünde büyük bir tekrar deneyimimiz yok, ama platform kiralama fiyatlandırmasının ve saha değerlendirmesinin temel mantığı (erişim ölçüsü, zemin uygunluğu, doğru sınıf seçimi) her iş türünde aynıdır ve bu konuda deneyimliyiz. Sahanızın standart bir platform sınıfıyla karşılanabilecek türden olduğunu görürsek hizmet veririz ve şeffaflığımızı burada da sürdürürüz; işiniz özel bir uzmanlık gerektiriyorsa bunu söyleyip sizi doğru yöne yönlendiririz. Güvenmenizi istediğimiz şey deneyim iddiası değil, dürüst değerlendirmedir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Silo ve tarım tesisi yapılarının genel geometrik özellikleri (dar taban, yüksek gövde) kamuya açık bilgidir; bu iş türünde sınırlı deneyim olduğu ve kapsam sınırları dürüstçe belirtilmiştir, TL tutarı verilmemiştir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım İşlerinde Platform Kiralama Fiyatı",
        giris:
            "Sokak aydınlatması, direk bakımı, trafo çevresi işleri veya bina dış aydınlatma sistemlerinin periyodik kontrolü — enerji ve aydınlatma bakım işleri, İstanbul'un iki yakasında platform kiralamasının kısa süreli tek işten çok, tekrarlayan bir bakım döngüsüne bağlı olduğu bir alandır. Bu döngüsellik, fiyat mantığını da değiştirir: bir kerelik bir cephe işinde sorulan 'bu iş için ne kadar' sorusunun yerini, bakım işlerinde 'bu döngü boyunca toplam maliyetimiz ne olacak' sorusu alır. Bir bina yönetimi veya işletme için asıl önemli olan tek seferlik kira değil, yıl boyunca tekrarlanan bakım ziyaretlerinin toplam maliyetidir — ve bu toplamı belirleyen şey, ziyaret sıklığı, her ziyarette kaç nokta kontrol edildiği ve sözleşmenin ne kadarının önceden sabitlendiğidir. Bu sayfa, bakım sözleşmesi mantığıyla yapılan platform kiralamasında fiyatın nasıl kurulduğunu, tek seferlik kiralamadan farkını ve bir bakım sözleşmesinin taşıması gereken maddeleri rakam vermeden anlatır.",
        maddeler: [
            {
                baslik: "Tek seferlik iş ile bakım sözleşmesi farklı fiyatlanır",
                metin:
                    "Bir kerelik bir aydınlatma arızası için çağrılan platform, o günün tüm kalemlerini (nakliye, kurulum, operatör) tek işe yükler; oysa yıl boyunca belirli aralıklarla tekrarlanan bir bakım sözleşmesinde bu kalemlerin bir kısmı (özellikle keşif ve planlama) ilk ziyarette yapılıp sonraki ziyaretlere daha hafif bir yükle taşınır. Bu fark, bakım sözleşmesinin birim ziyaret maliyetini tek seferlik çağrıdan daha düşük kılar — ama bu indirimin gerçekleşmesi için sözleşmenin yazılı ve dönemsel bir taahhüt taşıması gerekir, sözlü bir 'sık geliyorsanız ucuz yaparız' vaadi değil.",
            },
            {
                baslik: "Nokta sayısı ve rota planlaması",
                metin:
                    "Aydınlatma bakım işleri genellikle tek bir noktada değil, bir cadde boyunca dizili direkler veya bir sitenin farklı bloklarındaki aydınlatma armatürleri gibi çoklu noktalarda yapılır. Fiyatın büyük kısmı, bu noktalar arasındaki mesafeye ve bir ziyarette kaç noktanın kapsanabileceğine bağlıdır — birbirine yakın diziliş, tek seferde çok nokta kapsamayı ve dolayısıyla nokta başı maliyeti düşürmeyi mümkün kılar; dağınık noktalar ise her biri için ayrı bir konumlandırma süresi gerektirir. Teklif isterken nokta sayısını ve yaklaşık dağılımını (yakın mı dağınık mı) paylaşmak, doğru rota planlamasının yapılmasını sağlar.",
            },
            {
                baslik: "Elektrik kesintisi koordinasyonu ayrı bir maddedir",
                metin:
                    "Enerji hatlarına yakın çalışma, çoğu zaman ilgili bölümün elektriğinin geçici olarak kesilmesini gerektirir ve bu kesinti koordinasyonu genellikle işletme veya dağıtım şirketiyle ayrı bir süreçtir. Platform tedarikçisinin işi, kesinti onaylandıktan sonraki dar zaman penceresinde hızlıca tamamlanmalıdır; bu yüzden bakım sözleşmelerinde kesinti penceresinin süresi ve bu pencereye göre kaç noktanın kapsanabileceği baştan planlanır. Kesinti koordinasyonu gecikirse platformun boşta beklemesi ayrı bir risk kalemidir ve bunun sorumluluğu sözleşmede netleşmelidir.",
            },
            {
                baslik: "Periyodik bakımda araç ve ekip sürekliliği",
                metin:
                    "Yıl boyunca aynı sahaları ziyaret eden bir bakım sözleşmesinde, aynı ekip ve benzer makine sınıfının kullanılması hem verimlilik hem tutarlılık sağlar — ekip sahayı öğrenir, tekrar eden noktaların özel koşullarını (zor erişim, hassas alan) bilir ve bu, ziyaret süresini kısaltabilir. Bu süreklilik avantajı sözleşmede bir kalem olarak görünmez ama dolaylı olarak birim ziyaret süresini kısaltarak toplam maliyeti düşürür — bu yüzden bakım sözleşmelerinde aynı tedarikçiyle uzun süreli çalışmanın, her seferinde farklı firma seçmekten daha ekonomik çıkma eğilimi vardır.",
            },
            {
                baslik: "Acil arıza çağrısı ile planlı bakımın fiyat farkı",
                metin:
                    "Planlı bir bakım ziyareti önceden takvimlenir ve tedarikçi bu ziyareti kendi programına oturtabilir; acil bir arıza çağrısı ise (örneğin bir direğin aniden devrilmesi) programın dışında, kısa bildirimle bir müdahale gerektirir. Bu iki senaryo aynı fiyat mantığını taşımaz — acil çağrıda öncelik ve hız için ayrı bir kalem oluşabilir. Bakım sözleşmesi yaparken, sözleşmenin planlı ziyaretleri mi yoksa acil çağrıları da mı kapsadığının netleşmesi, olası bir acil durumda fiyat sürprizini önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tek seferlik çağrı ile bakım sözleşmesi karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, aydınlatma ve enerji bakım işlerinde tek seferlik kiralama ile dönemsel bakım sözleşmesinin fiyat kalemlerini kategorik olarak karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Tek seferlik çağrı", "Bakım sözleşmesi"],
                    satirlar: [
                        ["Keşif/planlama", "Her seferinde tekrarlanır", "İlk ziyarette yapılır, sonrasına taşınır"],
                        ["Nakliye", "Tek seferlik tam maliyet", "Dönem içinde birim maliyeti düşer"],
                        ["Ekip bilgisi", "Sahayı ilk kez görür", "Süreklilik, tekrar eden koşulları bilir"],
                        ["Fiyat taahhüdü", "O işe özel, tek seferlik", "Dönemsel, yazılı sabit veya kurallı"],
                        ["Acil durum kapsamı", "Kendi başına ayrı çağrı", "Sözleşmede tanımlıysa dahil olabilir"],
                    ],
                },
            },
            {
                baslik: "Bakım sözleşmesinde 'dahildir' cümlesinin açılımı",
                paragraflar: [
                    "Bir bakım sözleşmesinde 'yıl boyunca aydınlatma bakımı dahildir' cümlesi, kaç ziyaret, kaç nokta ve hangi aralıkla yapılacağı yazılmadığı sürece belirsiz bir vaattir. Şeffaf bir bakım sözleşmesi bu üç bilgiyi (ziyaret sıklığı, nokta sayısı, aralık) net biçimde tanımlar ve bu sınırın aşılması durumunda (örneğin beklenenden daha fazla nokta arızalanırsa) ek ziyaretin nasıl fiyatlanacağını da baştan yazar.",
                    "Bu netlik, sözleşmenin ikinci yılında da işe yarar: geçmiş yılın ziyaret sayısı ve arıza sıklığı verisiyle, gelecek yılın sözleşmesi daha isabetli kurulabilir — bu da bakım sözleşmelerinin zamanla daha verimli hâle gelmesinin nedenidir.",
                ],
            },
            {
                baslik: "Kesinti penceresini verimli kullanmak",
                paragraflar: [
                    "Elektrik kesintisi genellikle sınırlı bir zaman penceresinde onaylanır ve bu pencerede mümkün olduğunca çok noktanın tamamlanması, dönem boyunca gereken toplam kesinti sayısını azaltır. Bunun için rota planlaması önceden yapılmalı ve platform ile ekip, kesinti onaylanır onaylanmaz hızlıca çalışmaya başlayabilecek şekilde hazır olmalıdır — kesinti penceresi açıldıktan sonra makine kurulumu veya konumlandırma ile geçen süre, o pencerenin boşa harcanması demektir.",
                    "Bu planlamanın kalitesi, bakım sözleşmesinin dönem içi toplam maliyetini doğrudan etkiler; iyi planlanmış bir rota, aynı sayıda noktayı daha az kesinti penceresiyle tamamlayarak hem işletmenin operasyonel kesintisini hem toplam bakım maliyetini küçültür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yıllık bakım sözleşmesi tek seferlik çağrıdan gerçekten daha mı ucuza gelir?",
                cevap:
                    "Genellikle evet, ama bunun gerçekleşmesi sözleşmenin doğru kurulmasına bağlıdır. Tasarrufun kaynağı üçtür: keşif ve planlama maliyetinin ilk ziyarete yüklenip sonrakilere yayılması, aynı ekibin sahayı öğrenerek ziyaret süresini kısaltması ve nakliyenin dönem boyunca birden fazla ziyarete bölünmesi. Bu üç kaynağın gerçekten çalışması için sözleşmenin ziyaret sıklığını ve nokta sayısını net tanımlaması gerekir — belirsiz bir 'yıl boyunca bakım' vaadi, bu tasarrufu garanti etmez.",
            },
            {
                soru: "Sözleşme dışı bir arıza çıkarsa (örneğin bir direk aniden arızalanırsa) ne olur?",
                cevap:
                    "Bu, bakım sözleşmenizin acil durumu kapsayıp kapsamadığına bağlıdır ve biz sözleşme kurulurken bu ayrımı netleştiririz. Sözleşme yalnızca planlı periyodik ziyaretleri kapsıyorsa, acil arıza ayrı bir çağrı olarak değerlendirilir ve kendi fiyatını taşır. Sözleşmenin acil durumları da kapsamasını isterseniz, bunu baştan sözleşmeye ekleyebiliriz — genellikle belirli sayıda acil çağrı hakkı tanımlanarak yapılır. Hangi kapsamın sizin için uygun olduğunu, geçmiş yıllardaki acil arıza sıklığınızı konuşarak birlikte belirleriz.",
            },
            {
                soru: "Elektrik kesintisi onayı gecikirse platform bekler mi, bu bize ek maliyet çıkarır mı?",
                cevap:
                    "Kısa bir gecikme genellikle sorun yaratmaz ve planlamamızın bir parçasıdır; ama beklenmedik uzun bir gecikme, o günkü ziyaretin ertelenmesini gerektirebilir. Bu durumda ertelemenin makine bekleme maliyeti doğurup doğurmayacağı, gecikmenin kaynağına bağlıdır — dağıtım şirketinden kaynaklanan bir gecikme sizin sorumluluğunuzda değildir ve sözleşmemizde bu ayrım nettir. Kesinti onay sürecinizin genel süresini bize önceden söylerseniz, ziyaret takvimini bu süreye göre gerçekçi planlarız.",
            },
            {
                soru: "Sitemizdeki direkler birbirine yakın ama site geniş, rota planlaması nasıl işler?",
                cevap:
                    "Site planınızı veya direklerin yaklaşık konumlarını paylaşırsanız, bir ziyarette hangi sırayla hangi noktalara uğranacağını önceden planlarız — amaç, makinenin gereksiz yere ileri geri gitmesini önleyip tek bir rotada mümkün olduğunca çok noktayı kapsamaktır. İyi planlanmış bir rota, aynı sayıda direği daha kısa sürede tamamlar ve bu da dönem boyunca toplam ziyaret maliyetinizi düşürür. Site genişse ve direkler birkaç kümede toplanıyorsa, bu kümeleri ayrı alt-rotalar olarak planlamak genellikle en verimli yöntemdir.",
            },
            {
                soru: "İkinci yıl sözleşmesinde fiyat neden değişebilir?",
                cevap:
                    "İki dürüst neden olabilir: birincisi, geçmiş yılın gerçek arıza ve ziyaret sıklığı, ilk yılın tahmininden farklı çıkmışsa (beklenenden az veya çok nokta arızalanmışsa), ikinci yıl sözleşmesi bu gerçek veriye göre yeniden kurulur — bu bir zam değil, daha isabetli bir tahmindir. İkincisi, sözleşmenizde kurallı bir güncelleme maddesi varsa (belirli bir göstergeye bağlı dönemsel revizyon), bu madde işler. İki nedenin dışında bir fiyat değişikliği görürseniz gerekçesini sorun; her ikisi de yazılı ve izlenebilir olmalıdır.",
            },
            {
                soru: "Tek bir direk arızası için de sizi çağırabilir miyiz, yoksa sözleşme mi şart?",
                cevap:
                    "Evet, tek seferlik bir çağrı için de hizmet veririz; sözleşme şart değildir. Ancak tek seferlik çağrıda keşif, nakliye ve planlama maliyetlerinin tamamı o tek işe yüklendiği için birim maliyet, dönemsel bir sözleşmedeki ziyaret başı maliyetten daha yüksek olur. Sık tekrarlayan bir ihtiyacınız olduğunu fark ederseniz, birkaç tek seferlik çağrıdan sonra bile bakım sözleşmesine geçmek genellikle ekonomik bir karar hâline gelir — bu geçişi istediğiniz zaman değerlendirebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerji hatlarına yakın çalışmada kesinti koordinasyonu gerekliliği genel elektrik güvenliği pratiğidir; bakım sözleşmesi fiyat kurgusu firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform Kiralamada Fiyat Farkının Kaynağı",
        giris:
            "İstanbul'da platform kiralayan bir müşterinin karşılaştığı en temel karar noktalarından biri, makineyi kendi personeliyle mi kullanacağı yoksa operatörlü mü kiralayacağıdır — ve bu karar yalnızca bir tercih değil, doğrudan bir fiyat sorusudur. Operatör satırı, teklifte görünen ya da görünmeyen ama her zaman bir yerde etkisini gösteren bir kalemdir: dahil edildiğinde günlük toplamı büyütür, hariç bırakıldığında sorumluluğu ve belge şartını müşteriye devreder. Bu sayfanın amacı, operatörlü ile operatörsüz kiralama arasındaki fiyat farkının nereden geldiğini, bu farkın hangi işlerde gerçek bir tasarruf hangi işlerde yanlış bir tasarruf olduğunu ve operatör satırının teklifte nasıl görünmesi gerektiğini rakam vermeden ama mantığını tam açarak anlatmaktır — çünkü İkitelli merkezli bir tedarikçi için bu, günlük olarak sorulan ve çoğu zaman yanlış anlaşılan bir sorudur.",
        maddeler: [
            {
                baslik: "Operatör satırının üç hâli",
                metin:
                    "Bir teklifte operatör üç biçimde görünür: dahil, hariç ve hiç anılmamış. Üçüncüsü en riskli olanıdır çünkü karar, teslimat gününe sarkar ve orada pazarlık konusu olur. Operatörlü fiyatta mesai tanımının (kaç saat, öğle arası dahil mi) net olması, operatörsüz fiyatta ise kullanıcı belge şartının ve hasar sorumluluğunun kimde olduğunun yazılı olması gerekir. Teklif okurken bu üç hâlden hangisiyle karşı karşıya olduğunuzu netleştirmek, sonradan çıkabilecek bir anlaşmazlığı baştan önler.",
            },
            {
                baslik: "Operatörsüz kiralamanın gerçek koşulu belge şartıdır",
                metin:
                    "Operatörsüz kiralama, makineyi 'kim isterse kullanabilir' anlamına gelmez — kullanıcının ilgili platform sınıfı için geçerli bir operatör belgesine sahip olması yasal ve güvenlik gereğidir. Teslimat sırasında bu belge kontrol edilir ve makinenin teknik özellikleri hakkında kısa bir bilgilendirme yapılır; bu adım atlanırsa hem güvenlik hem sorumluluk paylaşımı belirsiz kalır. Kendi belgeli personeliniz varsa operatörsüz kiralama gerçek bir tasarruftur; belgeli personeliniz yoksa bu seçenek yasal olarak zaten açık değildir.",
            },
            {
                baslik: "Hasar sorumluluğu operatör seçimine göre kayar",
                metin:
                    "Operatörlü kiralamada makineyi tedarikçinin eğitimli operatörü kullandığı için kullanım kaynaklı hasarın sorumluluğu büyük ölçüde tedarikçide kalır; operatörsüz kiralamada ise bu sorumluluk kullanıcıya, yani sizin işletmenize geçer. Bu geçiş sözleşmedeki sigorta ve muafiyet maddelerinde açıkça yazılmalıdır — 'sigortalıdır' cümlesi tek başına hangi senaryoda kimin sorumlu olduğunu söylemez. Dar alanlı, riskli veya makineye yabancı olunan işlerde operatör satırı, hasar ihtimaline karşı ucuz bir sigorta işlevi görebilir; bu yüzden karar yalnızca günlük fiyat farkına bakılarak verilmemelidir.",
            },
            {
                baslik: "Operatörlü fiyatta mesai tanımı belirleyicidir",
                metin:
                    "Operatörlü kiralamada fiyatın büyük kısmı operatörün çalışma saatine bağlıdır ve bu saatin tanımı firmadan firmaya değişebilir: standart mesai kaç saattir, öğle arası bu sürenin içinde mi sayılır, mesai aşımı nasıl fiyatlanır. Bu tanım netleşmeden alınan bir teklif, iş beklenenden uzun sürdüğünde beklenmedik bir mesai aşımı faturasıyla karşılaşabilir. Teklif isterken 'operatörlü' ifadesinin arkasındaki mesai tanımını sormak, gün sonunda sürpriz yaşamamanın en basit yoludur.",
            },
            {
                baslik: "Kısa ve basit işte operatörsüz, riskli işte operatörlü mantığı",
                metin:
                    "Genel bir kural olarak, kısa süreli ve basit bir işte (geniş açık alan, düşük erişim, düz zemin) kendi belgeli personelinizle operatörsüz kiralama gerçek bir tasarruf sağlar çünkü operatör mesai satırı tamamen ortadan kalkar. Ancak dar alanlı, yüksek erişimli veya karmaşık manevre gerektiren bir işte, deneyimli bir operatörün hızı ve hata payını azaltması, operatör satırının maliyetini genellikle telafi eder — çünkü deneyimsiz kullanımda oluşabilecek bir hasar veya gecikme, operatör satırından çok daha pahalıya mal olabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralamanın karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki seçeneğin hangi kalemi nasıl etkilediğini kategorik olarak gösterir; karar verirken yalnızca günlük fiyat farkına değil, bu satırların tamamına bakmanızı öneririz.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Operatörlü", "Operatörsüz"],
                    satirlar: [
                        ["Belge şartı", "Tedarikçinin operatöründe", "Kullanıcıda, teslimatta kontrol edilir"],
                        ["Hasar sorumluluğu", "Büyük ölçüde tedarikçide", "Kullanıcıya geçer"],
                        ["Mesai tanımı", "Saat sınırı ve aşım kuralı önemli", "Kullanım süresi kullanıcının kontrolünde"],
                        ["Uygun iş tipi", "Dar/riskli/karmaşık manevre", "Geniş/basit/düz zemin"],
                        ["Eğitim/bilgilendirme", "Gerekmez, operatör zaten yetkin", "Teslimatta kısa bilgilendirme yapılır"],
                    ],
                },
            },
            {
                baslik: "'Operatör dahil' vaadi neyi garanti etmiyor",
                paragraflar: [
                    "Bir teklifte 'operatör dahildir' yazması, operatörün deneyim düzeyini veya işinize özgü riskleri (örneğin dar bir geçişten manevra, hassas bir yüzeyin yakınında çalışma) bilip bilmediğini garanti etmez. Şeffaf bir tedarikçi, karmaşık veya riskli bir iş için operatörünün bu tür işlerdeki deneyimini sorduğunuzda net cevap verebilmelidir — 'operatörümüz var' cümlesi tek başına yeterli bir güvence değildir.",
                    "İşinizin özel bir risk taşıdığını (örneğin hassas bir cam cephe yakınında çalışma) önceden belirtmeniz, uygun deneyime sahip bir operatörün atanmasını sağlar; bu bilgiyi paylaşmadan alınan standart bir 'operatör dahil' teklifi, bu özel riski hesaba katmamış olabilir.",
                ],
            },
            {
                baslik: "Operatörsüz kiralamada teslimat eğitiminin kapsamı",
                paragraflar: [
                    "Operatörsüz kiralamada teslimat sırasında verilen bilgilendirme, bir operatör eğitimi değil, o spesifik makinenin kontrol düzeni ve özel donanımları hakkında kısa bir aktarımdır — kullanıcının zaten sahip olduğu genel operatör belgesi ve deneyimi üzerine, makineye özgü detayları (kumanda yerleşimi, acil durdurma, varsa özel kısıtlar) ekler. Bu bilgilendirmenin verilip verilmediği ve kim tarafından imzalandığı, teslim tutanağında yer almalıdır — bu, sonradan 'bize hiçbir şey anlatılmadı' tartışmasını önleyen basit ama önemli bir adımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlü kiralama ne kadar daha pahalıya gelir?",
                cevap:
                    "Rakam vermek yerine farkın nereden geldiğini açıklayalım: operatör satırı, işin süresine bağlı olarak günlük fiyatlanan ayrı bir kalemdir ve bu kalemin büyüklüğü işinizin kaç gün süreceğine göre değişir. Kısa bir işte bu fark küçük kalırken, uzun süreli bir işte toplamda daha belirgin hâle gelir. Ama operatör satırını değerlendirirken yalnızca bu ek maliyete değil, karşılığında azalan hasar riskine ve iş hızına da bakmak gerekir — deneyimli bir operatör, karmaşık bir işi daha kısa sürede ve daha az hata riskiyle tamamlayabilir.",
            },
            {
                soru: "Kendi ustamızın operatör belgesi var, operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Evet, belgeli personeliniz varsa operatörsüz kiralama tamamen mümkündür ve operatör satırı teklifinizden çıkar. Teslimatta belgeyi görürüz ve makineye özgü kısa bir bilgilendirme yaparız; bu noktadan sonra kullanım kaynaklı hasar sorumluluğu size geçer, bu yüzden sözleşmedeki muafiyet ve sigorta kapsamı maddelerini operatörsüz senaryoya göre birlikte gözden geçiririz. Kısa ve basit bir işte bu seçenek gerçek bir tasarruftur; işiniz dar alanlı veya riskli bir manevra gerektiriyorsa, deneyimli bir operatörün getirisini de değerlendirmenizi öneririz.",
            },
            {
                soru: "Operatörümüz makineyi hasarlarsa ne olur?",
                cevap:
                    "Operatörsüz kiralamada kullanım kaynaklı hasarın sorumluluğu size geçer ve bu, sözleşmedeki hasar ayrımı ve muafiyet maddesiyle sınırlandırılır — normal yıpranma ile kullanım hatası arasındaki sınır ve varsa muafiyet tutarı baştan yazılıdır. Operatörlü kiralamada ise makineyi bizim eğitimli operatörümüz kullandığı için bu risk büyük ölçüde bizde kalır. Riskli veya alışılmadık bir iş yapacaksanız (dar alan, hassas yüzey yakını), operatörlü seçeneğin bu riski azaltacağını göz önünde bulundurmanızı öneririz — hasar ihtimalinin maliyeti çoğu zaman operatör satırından yüksektir.",
            },
            {
                soru: "Operatörlü kiralamada mesai aşarsa fatura nasıl değişir?",
                cevap:
                    "Bu tamamen teklifinizdeki mesai tanımına bağlıdır ve biz bunu baştan net yazarız: standart mesai süresi ne kadar, bu sürenin aşılması durumunda ek saat nasıl fiyatlanır. Mesai aşımı riski taşıyan bir işte, işin başında bu ihtimali konuşup gerekirse bir tampon süre eklemek, iş sırasında sürpriz bir aşım faturasıyla karşılaşmamanın en güvenli yoludur. Belirsizlik varsa, bize işinizin gerçekçi süre tahminini paylaşmanız, mesai tanımının doğru kurulmasına yardımcı olur.",
            },
            {
                soru: "İşimiz kısa ama dar bir alanda, operatörlü mü operatörsüz mü tercih etmeliyiz?",
                cevap:
                    "Bu tam olarak ikisi arasında dengeli düşünmeniz gereken senaryodur. İş kısa olduğu için operatör satırının toplam etkisi küçük kalır, ama dar alan manevrası deneyim gerektirir ve bu deneyimsiz kullanımda hasar riski taşır. Bu kombinasyonda genellikle operatörlü kiralamayı öneririz — kısa işte operatör maliyeti zaten sınırlıdır, buna karşılık dar alan riskinin azalması bu küçük ek maliyeti fazlasıyla karşılar. Kendi personelinizin dar alan deneyimi varsa bu değerlendirme değişebilir; bunu bize söylerseniz birlikte karar veririz.",
            },
            {
                soru: "Operatörünüzün deneyimini nasıl doğrulayabiliriz?",
                cevap:
                    "İşinizin özel bir risk taşıdığını (belirli bir dar geçiş, hassas bir yüzey, karmaşık bir erişim) önceden bize söylerseniz, bu tür işlerde deneyimli bir operatörün atandığını size teyit ederiz. Genel olarak operatörlerimiz ilgili platform sınıfı için gerekli belgeye ve düzenli kullanım deneyimine sahiptir; ama işinizin özel bir zorluk taşıdığını düşünüyorsanız bu bilgiyi paylaşmanız, doğru operatör eşleşmesinin yapılmasını sağlar. Şeffaflık burada da geçerlidir: sorduğunuzda net cevap alamıyorsanız bu, sorgulamaya devam etmeniz gereken bir işarettir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatör belgesi gerekliliği genel iş güvenliği mevzuatı kapsamındadır; operatörlü/operatörsüz fiyat kalemi mantığı firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakım İşlerinde Platform Kiralama Fiyatı",
        giris:
            "Bir sitenin birden fazla bloğunda aynı gün cephe kontrolü yapmak, bir caddedeki tüm tabelaları aynı hafta değiştirmek veya bir işletmenin şehrin farklı noktalarındaki şubelerinde sıra sıra bakım yapmak — bu tür çok noktalı işler, platform kiralamasında tekil bir işten farklı bir fiyat mantığı taşır çünkü burada belirleyici olan tek bir işin maliyeti değil, birden fazla işin aynı nakliye ve aynı ekip altında birleştirilmesinin getirdiği tasarruftur. İstanbul'un iki yakasında dağınık noktalarda faaliyet gösteren işletmeler için bu birleştirme, nakliye payını küçültmenin en somut yoludur — çünkü araç bir kez yola çıkar, birden fazla noktayı gezer ve tek seferlik nakliyenin maliyeti bu noktalar arasında paylaşılır. Bu sayfa, çok noktalı rota bakım işlerinde fiyatın nasıl kurulduğunu, rota planlamasının hangi kalemi ne kadar küçülttüğünü ve bu tür bir işi teklif ederken nelerin paylaşılması gerektiğini rakam vermeden anlatır.",
        maddeler: [
            {
                baslik: "Nakliyenin turlaşması ile birim maliyet düşer",
                metin:
                    "Tek bir nokta için yapılan nakliyede tüm maliyet o işe yüklenir; birden fazla nokta aynı güzergaha dizildiğinde ise araç tek bir turda birden fazla noktayı gezer ve bu tek turun maliyeti noktalar arasında bölüşülür. Bu bölüşümün etkisi, noktaların birbirine olan mesafesine bağlıdır — birbirine yakın noktalar güçlü bir tasarruf sağlarken, şehrin dağınık uçlarına yayılmış noktalar bu avantajı sınırlar. Teklif isterken noktalarınızın coğrafi dağılımını (yakın küme mi, dağınık mı) paylaşmanız, bu tasarrufun ne kadar gerçekleşebileceğinin doğru değerlendirilmesini sağlar.",
            },
            {
                baslik: "Rota sırası çalışma süresini belirler",
                metin:
                    "Noktaların ziyaret sırası, yalnızca yol süresini değil aynı zamanda günün ne kadarının fiilen çalışmaya, ne kadarının yolda geçeceğini de belirler. İyi planlanmış bir rota, coğrafi olarak mantıklı bir sırayla ilerleyerek gereksiz geri dönüşleri önler; kötü planlanmış bir rota ise aynı bölgeye birden fazla kez uğrayarak günün büyük kısmını yolda tüketebilir. Rota planlaması genellikle tedarikçinin işidir ama noktalarınızın konumlarını erken ve net paylaşmanız, bu planlamanın kalitesini doğrudan etkiler.",
            },
            {
                baslik: "Her noktada farklı erişim koşulu olabilir",
                metin:
                    "Çok noktalı işlerde her nokta aynı erişim kolaylığına sahip olmayabilir — bir blok geniş bir avluda kolay erişilebilirken, bir diğeri dar bir sokakta veya yoğun bir cadde üzerinde olabilir. Bu farklılık, rotanın toplam süresini ve dolayısıyla fiyatını etkiler; tek bir 'ortalama' erişim varsayımıyla verilen teklif, zor erişimli bir noktada sürpriz bir gecikmeyle karşılaşabilir. Her noktanın erişim koşulunu (dar sokak mı, geniş alan mı) ayrı ayrı belirtmek, rotanın gerçekçi planlanmasını sağlar.",
            },
            {
                baslik: "Aynı gün mü, farklı günlere mi yayılmalı",
                metin:
                    "Nokta sayısı fazlaysa, hepsinin aynı gün içinde tamamlanması her zaman en ekonomik seçenek olmayabilir — çok sayıda noktayı tek güne sıkıştırmak, her noktada geçirilen süreyi kısaltmaya zorlar ve bu, işin kalitesinden ödün vermek anlamına gelebilir. Alternatif olarak noktaları birkaç güne yaymak, her noktada yeterli süre ayırırken toplam nakliye maliyetini birden fazla güne dağıtır. Hangi düzenlemenin sizin için daha ekonomik olduğu, nokta sayısına ve her noktadaki iş yüküne bağlıdır ve bu, teklif aşamasında birlikte hesaplanmalıdır.",
            },
            {
                baslik: "Tek yetkili ile koordinasyon süreyi kısaltır",
                metin:
                    "Çok noktalı işlerde her noktada farklı bir yetkiliyle iletişim kurmak (giriş izni, anahtar teslimi, çalışma onayı) koordinasyon süresini uzatabilir. İşletmeniz adına tek bir yetkilinin tüm noktalar için koordinasyonu üstlenmesi, her noktada ayrı ayrı beklenen onay sürecini kısaltarak toplam rota süresini hızlandırır. Bu, doğrudan bir fiyat kalemi olmasa da rotanın verimliliğini ve dolayısıyla toplam maliyetini etkileyen pratik bir öneridir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çok noktalı rota planlamasında fiyat kalemleri",
                paragraflar: [
                    "Aşağıdaki tablo, çok noktalı bakım işlerinde fiyatı belirleyen ana kalemleri ve bunların nasıl değerlendirilmesi gerektiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Neye göre değişir", "Teklifte nasıl durmalı"],
                    satirlar: [
                        ["Nakliye/tur maliyeti", "Nokta sayısı ve coğrafi yakınlık", "Toplam tur, nokta başına bölüşülmüş"],
                        ["Rota sırası", "Noktaların konumu", "Planlanmış güzergah gösterilmeli"],
                        ["Erişim koşulu", "Her noktanın kendine özgü zorluğu", "Nokta bazlı not düşülmeli"],
                        ["Gün dağılımı", "Nokta sayısı ve iş yükü", "Tek gün mü çoklu gün mü gerekçeli"],
                        ["Koordinasyon", "Yetkili sayısı ve onay süreci", "Tek yetkili önerisiyle hızlanır"],
                    ],
                },
            },
            {
                baslik: "Kaç nokta birleştirmek gerçekten tasarruf sağlar",
                paragraflar: [
                    "İki veya üç noktayı birleştirmek genellikle belirgin bir tasarruf sağlar çünkü tek nakliyenin maliyeti bu noktalar arasında paylaşılır; ancak nokta sayısı arttıkça ve coğrafi dağılım genişledikçe, rotanın toplam süresi uzar ve bu uzama bir noktadan sonra tasarrufu dengelemeye başlar. Bu yüzden 'ne kadar çok nokta o kadar ucuz' genellemesi her zaman doğru değildir — asıl belirleyici, noktaların birbirine olan yakınlığıdır. Şehrin tek bir bölgesinde kümelenmiş beş nokta, şehrin farklı uçlarına dağılmış üç noktadan daha verimli bir rota oluşturabilir.",
                    "Bu yüzden noktalarınızın haritadaki gerçek dağılımını paylaşmak, size 'kaç nokta birleştirirsek gerçekten tasarruf ederiz' sorusunun dürüst cevabını vermemizi sağlar — bazen cevap 'hepsini' değil 'şu kümeyi' olur.",
                ],
            },
            {
                baslik: "Tekrarlayan rota için dönemsel anlaşma",
                paragraflar: [
                    "İşletmenizin aynı noktaları düzenli aralıklarla (aylık, sezonluk) ziyaret etmesi gerekiyorsa, rota planlamasını bir kez yapıp sonraki dönemlerde bu planı tekrar kullanmak, her seferinde sıfırdan planlama yapmaktan daha verimlidir. İlk dönemde rota netleştikten sonra, sonraki dönemlerde yalnızca değişen koşullar (yeni bir nokta eklenmesi, bir noktanın erişim koşulunun değişmesi) güncellenir. Bu süreklilik, dönemsel bir rota bakım anlaşmasının zamanla daha öngörülebilir bir maliyet yapısına kavuşmasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üç farklı noktamız var, hepsini aynı gün mü yaptırmalıyız?",
                cevap:
                    "Bu, noktaların birbirine olan mesafesine ve her noktadaki iş yüküne bağlıdır. Noktalar birbirine yakınsa ve her birindeki iş kısa sürüyorsa, aynı gün içinde tamamlamak genellikle en ekonomik seçenektir çünkü tek bir nakliye üç nokta arasında paylaşılır. Ancak noktalar birbirinden uzaksa veya her birinde uzun süren bir iş varsa, hepsini bir güne sıkıştırmak işçilik kalitesinden ödün vermeye zorlayabilir; bu durumda iki güne yaymak daha sağlıklı olabilir. Noktalarınızın konumlarını ve tahmini iş sürelerini paylaşırsanız, en verimli dağılımı birlikte belirleriz.",
            },
            {
                soru: "Noktalarımız şehrin farklı uçlarında, birleştirme yine de mantıklı mı?",
                cevap:
                    "Kısmen mantıklı olabilir ama tasarruf, birbirine yakın noktalar kadar belirgin olmayacaktır. Dağınık noktalarda tek bir büyük tur yerine, coğrafi olarak yakın alt-kümeler oluşturup bu kümeleri ayrı günlerde ziyaret etmek genellikle daha verimlidir — her kümenin kendi içindeki yakınlık, o kümenin nakliye maliyetini düşürürken, kümeler arası uzun geçiş süresi tek bir dev tura sıkıştırılmamış olur. Noktalarınızın haritadaki dağılımını paylaşırsanız, hangi kümeleme mantığının size en çok tasarruf sağlayacağını gösteririz.",
            },
            {
                soru: "Rotadaki bir noktada dar bir sokak var, bu tüm rotayı etkiler mi?",
                cevap:
                    "Yalnızca o noktanın süresini etkiler, ama bu etkiyi rota planlamasına dahil etmek önemlidir çünkü dar sokaktaki bir gecikme, sonraki noktaların zamanlamasını da kaydırabilir. Bu yüzden erişimi zor olan noktaları önceden bize bildirmeniz, o nokta için ek süre payının rotaya baştan eklenmesini sağlar — böylece bir noktadaki beklenmedik gecikme, günün geri kalanını aksatmaz. Zor erişimli noktayı günün başına veya sonuna planlamak da, olası bir gecikmenin diğer noktaları etkilemesini sınırlayan pratik bir yöntemdir.",
            },
            {
                soru: "Her noktada farklı bir yetkilimiz var, bu süreci nasıl etkiler?",
                cevap:
                    "Her noktada ayrı bir yetkiliyle koordinasyon, giriş izni ve çalışma onayı için ayrı ayrı bekleme süresi doğurabilir ve bu, rotanın toplam süresini uzatabilir. Mümkünse tüm noktalar için tek bir yetkilinin (örneğin bir tesis yönetim sorumlusu) koordinasyonu üstlenmesini öneririz — bu, her noktada ayrı onay beklemek yerine tek bir iletişim hattından ilerlemeyi sağlar ve rotanın akıcılığını artırır. Bu mümkün değilse, her noktanın yetkilisiyle önceden iletişime geçip çalışma saatini teyit etmek, sahada beklenmedik bir gecikmeyi önler.",
            },
            {
                soru: "Aylık düzenli bir rota bakım anlaşması yapabilir miyiz?",
                cevap:
                    "Evet, ve bu genellikle tek seferlik çok noktalı işlerden daha verimli bir düzenlemedir. İlk ayki ziyaretimizde rotayı, her noktanın erişim koşulunu ve süresini netleştiririz; sonraki aylarda bu bilgi birikimini kullanarak rotayı tekrar planlamak yerine güncelleriz. Bu süreklilik hem planlama süresini kısaltır hem de aylar arası maliyeti daha öngörülebilir hâle getirir. Noktalarınızda zamanla değişiklik olursa (yeni nokta eklenmesi, bir noktanın kapanması) bunu bize bildirmeniz, rotanın güncel kalmasını sağlar.",
            },
            {
                soru: "Rotadaki noktalardan biri iptal olursa fiyat nasıl değişir?",
                cevap:
                    "Bu, iptal edilen noktanın rotanın neresinde olduğuna bağlıdır — eğer o nokta rotanın doğal güzergahı üzerindeyse ve çıkarılması güzergahı bozmuyorsa, toplam maliyette küçük bir düşüş olur; ama iptal edilen nokta rotanın ana nedeniyse (örneğin en uzak nokta olduğu için oraya gidiliyorsa), rotanın tamamen yeniden planlanması gerekebilir. Bir iptal ihtimaliniz varsa bunu önceden söylemeniz, hem bizim planlamamızı hem de olası fiyat etkisini daha net göstermemizi sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çok noktalı rota planlamasının nakliye paylaşımı mantığı genel lojistik pratiğidir; fiyat kalemi kurgusu firma pratiğidir, TL tutarı verilmemiştir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazi Koşullarında Platform Kiralama",
        giris:
            "İstanbul-Avrupa ve Anadolu yakasındaki işlerimizin büyük çoğunluğu sanayi sitesi, depo, cadde ve site içi gibi görece düzenli zeminlerde geçer; bu yüzden bu sayfayı dürüst bir çerçevede tutuyoruz — zor zemin ve arazi koşulları (eğimli toprak, düzensiz moloz zemin, yumuşak dolgu alan) bizim ana iş profilimiz değildir ve bu tür bir talep geldiğinde önce sahayı gerçekçi değerlendirip, standart makine parkımızın işi güvenle yapıp yapamayacağını söyleriz. Bazı zor zemin işleri (örneğin sıkıştırılmış ve kuru bir arsa) standart bir dizel platformla makul risk düzeyinde yapılabilirken, bazıları (gerçekten eğimli veya yumuşak zemin) özel arazi tipi ekipman gerektirir ve bu bizim standart hizmet kapsamımızın dışına çıkabilir. Bu sayfanın amacı, hangi zor zemin işlerinin bizim kapsamımızda olduğunu, hangilerinin olmadığını ve karar sürecinin nasıl işlediğini açık biçimde anlatmaktır.",
        maddeler: [
            {
                baslik: "Eğim, güvenli çalışma sınırının belirleyicisidir",
                metin:
                    "Platformların çoğu belirli bir eğim sınırına kadar güvenli çalışabilir; bu sınırın üzerindeki bir zeminde makine dengesini kaybetme riski taşır ve üretici tarafından da önerilmez. Sahanızın eğimi belirgin ise (gözle görülür bir yokuş, düzensiz toprak yığını), bu bilgiyi teklif öncesi paylaşmanız önemlidir — standart bir makinenin bu eğimde çalışıp çalışamayacağını dürüstçe değerlendiririz; sınırın üzerindeyse, bunu söyleyip özel arazi tipi ekipman gerektiğini belirtiriz.",
            },
            {
                baslik: "Yumuşak veya düzensiz zeminde batma riski",
                metin:
                    "Toprak, dolgu veya moloz zeminde tekerlek veya stabilizatör ayaklarının batma riski, zeminin nem durumuna ve sıkışıklığına bağlıdır. Kuru ve sıkışmış bir zemin çoğu standart makine için sorun oluşturmazken, yumuşak veya yakın zamanda yağış almış bir zemin ciddi bir risktir. Bu riski önceden değerlendirmek için zeminin son durumunu sormamız standart bir adımdır; net değilse, saha ziyareti öneririz — tahmine dayalı bir teklif bu tür zeminlerde güvenilir değildir.",
            },
            {
                baslik: "Standart lastik ile arazi tipi lastik farkı",
                metin:
                    "Standart platformların çoğu düz zemin için tasarlanmış lastiklerle gelir; gerçek arazi koşulları (kalın çakıl, düzensiz moloz) için özel geniş profilli veya paletli sistemler gerekir ve bu, farklı bir makine sınıfıdır. Standart lastikli bir makineyi zorlayarak arazi koşuluna sokmak, hem makineye hem güvenliğe zarar verebilir; bu yüzden gerçekten arazi tipi bir zeminle karşılaşırsak, elimizdeki standart makinenin uygun olmadığını söyleriz.",
            },
            {
                baslik: "Bizim kapsamımızın sınırı nerede biter",
                metin:
                    "Dürüst çizgimiz şudur: hafif eğimli, kuru ve makul derecede düzensiz bir zemin, standart makine parkımızla ve gerekirse ek destek (yayma plakası) ile değerlendirilebilir; belirgin eğimli, sürekli yumuşak veya ağır moloz kaplı bir arazi ise özel ekipman gerektiren bir iş kategorisidir ve bunu kapsamımız dışında tutarız. Bu sınırı net söylememizin nedeni, uygun olmayan bir makineyle riskli bir işe girmemektir — hem sizin hem bizim güvenliğimiz için.",
            },
            {
                baslik: "Saha ziyareti kararı netleştirir",
                metin:
                    "Zor zemin ihtimali olan işlerde telefon veya fotoğrafla verilen bir değerlendirme kesin değildir; zeminin gerçek sağlamlığı ve eğimi çoğu zaman yerinde görülmeden tam anlaşılmaz. Bu tür işlerde bağlayıcı bir teklif vermeden önce kısa bir saha ziyareti önermemiz, hem sizin hem bizim için doğru kararın verilmesini sağlar — bu ziyaret, işin bizim kapsamımızda olup olmadığının en güvenilir testidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zor zemin değerlendirmesinde kontrol listesi",
                paragraflar: [
                    "Aşağıdaki tablo, zor zemin ihtimali olan bir işte teklif öncesi netleştirilmesi gereken bilgileri özetler.",
                ],
                tablo: {
                    basliklar: ["Bilgi", "Neyi belirler", "Nasıl paylaşılmalı"],
                    satirlar: [
                        ["Eğim durumu", "Güvenli çalışma sınırı içinde mi", "Fotoğraf veya gözle tarif"],
                        ["Zemin nemi", "Batma riski", "Son yağış ve zemin görünümü"],
                        ["Zemin türü", "Standart/arazi tipi lastik ihtiyacı", "Toprak/çakıl/moloz bilgisi"],
                        ["Sıkışıklık", "Stabilizatör güvenliği", "Sert mi yumuşak mı"],
                        ["Kapsam uygunluğu", "İşin bizde yapılabilirliği", "Saha ziyaretiyle netleşir"],
                    ],
                },
            },
            {
                baslik: "Kapsam dışı olduğunda ne öneririz",
                paragraflar: [
                    "Sahanız gerçekten arazi tipi ekipman gerektiriyorsa (belirgin eğim, sürekli yumuşak zemin, ağır moloz), bunu net söyleyip elimizdeki standart makine parkının bu işe uygun olmadığını belirtiriz. Bu durumda size iki dürüst seçenek sunarız: ya işin bir kısmını (zeminin daha sağlam olduğu bölümü) standart makineyle değerlendirmek, ya da özel arazi tipi ekipman konusunda uzmanlaşmış bir tedarikçiye yönlendirme yapmak. Amacımız, uygun olmayan bir makineyle riskli bir işe girip yarım bırakmak değil, baştan doğru beklenti kurmaktır.",
                ],
            },
            {
                baslik: "Hafif zorlu zeminde destek malzemesiyle çözüm",
                paragraflar: [
                    "Bazı zeminler tam anlamıyla 'arazi' sayılmasa da standart bir düz zeminden daha zorlu olabilir — hafif düzensiz, kısmen yumuşak veya çakıllı bir alan gibi. Bu tür durumlarda yayma plakası veya takozla stabilizatör ve tekerlek altına ek destek sağlayarak standart makineyle güvenli çalışma genellikle mümkündür. Bu destek malzemesi ayrı bir hazırlık kalemi olarak teklife girer ve saha koşulunun ne kadar zorlu olduğuna göre miktarı değişir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Arsamız eğimli, platform çalışabilir mi?",
                cevap:
                    "Bu, eğimin derecesine bağlıdır ve genel bir cevap vermek yerine dürüst bir değerlendirme gerektirir. Hafif bir eğim, standart bir makinenin güvenli çalışma sınırları içinde kalabilir; belirgin bir yokuş ise makinenin devrilme riskini artırır ve üretici tarafından da önerilmez. Bize eğimin yaklaşık derecesini (fotoğraf en faydalısıdır) paylaşırsanız, standart makinemizin bu eğimde güvenle çalışıp çalışamayacağını söyleriz; sınırın üzerindeyse, bunu söyleyip özel ekipman gerektiğini belirtiriz — riskli bir işe 'idare eder' diyerek girmeyiz.",
            },
            {
                soru: "Zeminimiz moloz dolu bir arsa, standart makine girebilir mi?",
                cevap:
                    "Molozun yoğunluğuna ve düzensizliğine bağlıdır. Hafif düzensiz ve seyrek molozlu bir zemin, standart lastikli bir makineyle ve dikkatli manevrayla çalışılabilir olabilir; ağır ve yoğun moloz kaplı bir zemin ise standart lastikler için hem hasar hem denge riski taşır ve arazi tipi ekipman gerektirir. Bu ayrımı net görmek için saha fotoğrafı veya kısa bir ziyaret öneririz — tahmine dayalı bir teklif bu tür zeminlerde güvenilir olmaz.",
            },
            {
                soru: "Sizde arazi tipi (paletli) platform var mı?",
                cevap:
                    "Standart makine parkımız ağırlıklı olarak düz ve orta derecede düzensiz zeminler için tasarlanmış modellerden oluşur; gerçek arazi tipi paletli sistemler bizim standart envanterimizin dışındadır. İşiniz gerçekten bu tür bir ekipman gerektiriyorsa, bunu dürüstçe söyleriz ve elimizden geldiğince genel bir yönlendirme yaparız. Sahanızı 'belki standart makineyle idare eder' diye zorlamak yerine, gerçekten uygun ekipmana yönlendirmeyi tercih ederiz.",
            },
            {
                soru: "Zeminimiz yağmurdan sonra çamur oluyor, bu durumda ne yaparsınız?",
                cevap:
                    "Yağış sonrası yumuşamış zemin, hem tekerlek hem stabilizatör için batma riski taşır ve bu koşulda çalışmak güvenli değildir. Bu durumda önerimiz, işi zeminin kuruyup sertleştiği bir güne ertelemektir; acil bir zorunluluk varsa, yayma plakasıyla ek destek sağlayarak riski azaltmayı değerlendirebiliriz ama bu her zemin için yeterli olmayabilir. Zeminin mevsimsel eğilimini (sık mı çamurlaşıyor) önceden bilmek, doğru bir teslimat tarihi planlamasına yardımcı olur.",
            },
            {
                soru: "Sahamızı görmeden teklif verir misiniz?",
                cevap:
                    "Zor zemin ihtimali olan işlerde bunu önermeyiz — çünkü zeminin gerçek sağlamlığı ve eğimi, fotoğraf veya tarifle tam anlaşılamaz ve görmeden verilen bir teklif sahada tutmayabilir. Bunun yerine, önce fotoğraf ve temel bilgilerle ön bir değerlendirme yaparız; bu değerlendirme işin standart makinemizle mümkün göründüğünü gösteriyorsa, kısa bir saha ziyaretiyle teklifi kesinleştiririz. Bu ekstra adım, hem sizin hem bizim için sahada sürprizle karşılaşmamayı garanti eder.",
            },
            {
                soru: "İşimiz kapsam dışı çıkarsa parasız mı ayrılırsınız, yoksa bir ücret öder miyiz?",
                cevap:
                    "Değerlendirme aşaması (fotoğraf incelemesi, kısa saha ziyareti) ücretsizdir; amacımız işin bizim kapsamımızda olup olmadığını dürüstçe belirlemektir, bu süreç için bir ücret talep etmeyiz. İş kapsam dışı çıkarsa, size bunu açıkça söyler ve elimizden geldiğince genel bir yönlendirme yaparız — hiçbir ücret veya taahhüt olmadan. Bu yaklaşımın nedeni basit: uygun olmayan bir işi zorla üstlenip yarım bırakmak, hem sizin hem bizim için baştan dürüst olmaktan daha maliyetlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Platformların eğim ve zemin sınırları üretici güvenlik standartlarına dayanan genel bilgidir; bu iş türünün ana profilimiz olmadığı ve kapsam sınırları dürüstçe belirtilmiştir, TL tutarı verilmemiştir.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Makaslı Platform Kiralama — Fiyatı Belirleyen Kalemler",
        giris:
            "Makaslı platform, İstanbul'un iki yakasındaki sanayi sitesi ve kapalı depo işlerinde en sık talep edilen makine sınıfıdır; sebebi basittir — dikey yükseldiği için taşıdığı platform geniştir, iki kişi ve malzeme aynı anda çalışabilir, ve düz zeminde diğer sınıflara göre daha kararlıdır. Ama tam da bu yaygınlık yüzünden fiyat teklifleri en çok karışan alandır: bir tedarikçi 'makaslı platform' derken 6 metrelik dar şaseli bir iç mekan modelini kastederken, bir başkası 12 metrelik geniş şaseli dış mekan modelini kastedebilir ve ikisinin kira bedeli birbirine hiç benzemez. Bu sayfanın amacı, makaslı platform kiralamasında fiyatı gerçekten belirleyen dört kalemi — kapasite sınıfı, şase genişliği, zemin/lastik tipi ve süre tanımı — açık biçimde ayırmak ve bir teklifi değerlendirirken hangi satırın neyi temsil ettiğini göstermektir. Somut bir rakam vermiyoruz; çünkü doğru rakam sahanın koşuluna göre değişir ve rakamsız bir sayfa, karşılaştırma yönteminden daha kalıcı bir fayda sağlar. Okuduktan sonra elinizdeki iki teklifi yan yana koyup hangi kalemin gerçekten farklı, hangisinin sadece isim farkı olduğunu ayırt edebilmeniz hedeflenir.",
        maddeler: [
            {
                baslik: "Kapasite sınıfı ilk ayrım noktasıdır",
                metin:
                    "Makaslı platformlar, taşıyabildiği kişi ve yük ağırlığına göre sınıflandırılır; tek kişilik hafif bir bakım işiyle iki kişi ve malzeme paletiyle çalışılan bir montaj işi aynı kapasite sınıfını gerektirmez. Teklifte 'makaslı platform' yazıp kapasiteyi belirtmeyen bir satır, aslında en önemli fiyat değişkenini gizliyor demektir — çünkü kapasite arttıkça hem makinenin gövdesi hem stabilizasyon sistemi büyür ve kira bedeli buna orantılı yükselir. İşinize gerçekte kaç kişi ve kaç kilogram malzeme çıkacağını netleştirmek, teklif almadan önce atılacak ilk adımdır.",
            },
            {
                baslik: "Şase genişliği, girebileceğiniz yeri de fiyatı da belirler",
                metin:
                    "Dar şaseli modeller kapı ve koridor genişliğine göre tasarlanmıştır ve bu daralma, taşıma kapasitesinden fedakârlık gerektirir; bu yüzden dar şaseli bir makaslı platform, aynı yükseklikteki geniş şaseli bir modelden genellikle daha yüksek birim fiyatla kiralanır — 'daha küçük' göründüğü için daha ucuz olacağını varsaymak yanlış bir beklentidir. Sahanızın giriş genişliğini ve iç koridor ölçüsünü önceden vermek, hem doğru modelin önerilmesini hem de fiyatın neden o seviyede olduğunun anlaşılmasını sağlar.",
            },
            {
                baslik: "İç mekan ve dış mekan lastiği aynı makine değildir",
                metin:
                    "Makaslı platformların bir kısmı iz bırakmayan poliüretan tekerlekle iç mekan zeminleri için, bir kısmı ise dolgu veya havalı lastikle dış mekan ve düzensiz zemin için üretilir; bu ikisi farklı envanter kalemidir ve fiyatları da farklıdır. Kapalı bir üretim salonunda dış mekan lastikli bir makine hem zemine zarar verir hem gereksiz yere pahalıya gelir; açık sahada iç mekan lastikli bir makine ise stabilite riski taşır. Teklif isterken zemin tipini (epoksi kaplı beton, asfalt, düzensiz toprak) belirtmek, doğru lastik tipinin ve dolayısıyla doğru fiyatın verilmesini sağlar.",
            },
            {
                baslik: "Süre tanımı, gün başı fiyatı gizli şekilde değiştirir",
                metin:
                    "Makaslı platform kiralamalarında 'gün' bazen 8 saatlik mesai, bazen 24 saatlik takvim günü, bazen de teslim-iade arası geçen süre olarak tanımlanır; bu tanım farkı, aynı görünen iki teklifin gerçek maliyetini birbirinden ayırabilir. Kısa süreli (yarım gün, tek vardiya) işlerde bazı tedarikçiler minimum kiralama süresi uygular ve bu, düşük görünen günlük rakamı yükseltebilir. Teklifte süre tanımının açıkça yazılı olması, iki teklifi adil biçimde karşılaştırmanın ön koşuludur.",
            },
            {
                baslik: "Nakliye, makaslı platformda genelde ayrı kalemdir",
                metin:
                    "Makaslı platformlar ağırlık ve boyut olarak taşıması nispeten kolay makinelerdir, ama yine de özel araç ve indirme-bindirme gerektirir; bu kalem çoğu zaman kira bedelinden ayrı yazılır ve mesafeye göre değişir. İstanbul'un iki yakası arasında geçiş gerektiren bir teslimat, aynı yaka içi bir teslimattan farklı bir nakliye kalemi doğurur — bu farkı 'gizli maliyet' olarak değil, teklifin ayrı ve görünür bir satırı olarak görmenizi öneririz; teklifte bu satır yoksa, nereden geldiği sonradan sorulmalıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Makaslı platform teklifini okurken kontrol listesi",
                paragraflar: [
                    "Aşağıdaki tablo, bir makaslı platform teklifinde hangi bilginin hangi fiyat kalemini belirlediğini özetler; teklifte bu satırlardan biri eksikse, tedarikçiden netleştirmesini istemek makul bir adımdır.",
                ],
                tablo: {
                    basliklar: ["Teklif satırı", "Neyi belirler", "Eksikse ne sorulmalı"],
                    satirlar: [
                        ["Kapasite (kişi+kg)", "Gövde ve stabilizasyon büyüklüğü", "Kaç kişi, ne kadar malzeme çıkacak"],
                        ["Şase genişliği", "Girilebilecek alan ve birim fiyat", "Kapı/koridor ölçüsü paylaşıldı mı"],
                        ["Lastik tipi", "İç/dış mekan uygunluğu", "Zemin tipi belirtildi mi"],
                        ["Süre tanımı", "Gün başı fiyatın kapsamı", "8 saat mi 24 saat mi"],
                        ["Nakliye", "Toplam maliyete eklenen sabit gider", "Mesafeye göre mi sabit mi"],
                    ],
                },
            },
            {
                baslik: "Aynı yükseklikte farklı fiyat neden görülür",
                paragraflar: [
                    "Aynı erişim yüksekliğine sahip iki makaslı platform, kapasite ve şase genişliği farklı olduğunda birbirinden belirgin şekilde farklı fiyatlanabilir; bu durum çoğu zaman 'bir tedarikçi pahalı, diğeri ucuz' değil, iki farklı makine sınıfının karşılaştırılması anlamına gelir. Teklifleri karşılaştırırken sadece yükseklik sütununa bakmak yanıltıcıdır — kapasite ve şase genişliği aynıysa fiyat farkı gerçek bir farktır, değilse elma ile armut kıyaslanıyor demektir.",
                    "Bu yüzden birden fazla teklif topluyorsanız, her tedarikçiden aynı üç bilgiyi (kapasite, şase genişliği, lastik tipi) istemenizi öneririz; bu üçü eşitlendiğinde geri kalan fiyat farkı, gerçekten karşılaştırılabilir bir farktır.",
                ],
            },
            {
                baslik: "Operatörlü ve operatörsüz kiralama fiyata nasıl yansır",
                paragraflar: [
                    "Makaslı platformlar görece basit kumandaya sahip olduğu için çoğu işletme operatörsüz (kendi personeliyle) kiralamayı tercih eder; bu durumda kullanıcının temel eğitim belgesine sahip olması beklenir ve kira bedeline operatör kalemi eklenmez. Operatörlü kiralama istendiğinde ise bu, ayrı bir hizmet kalemi olarak teklife girer ve süreye bağlı hesaplanır. Hangi seçeneği istediğinizi teklif talebinde belirtmek, iki farklı fiyat yapısının karışmasını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform ile eklemli/teleskopik platform arasında fiyat açısından fark var mı?",
                cevap:
                    "Evet, bu iki sınıf farklı mekanik yapıya sahiptir ve genelde farklı fiyat bandındadır. Makaslı platform dikey yükselir ve düz zeminde geniş bir çalışma alanı sunar; eklemli veya teleskopik modeller ise yatay erişim (çıkıntı, engel aşma) gerektiren işler için tasarlanmıştır ve daha karmaşık bir mekanizmaya sahiptir. İşinizde sadece dikey yükseklik yeterliyse makaslı platform genelde daha uygun bir seçenektir; yatay erişim gerekiyorsa doğru sınıf farklıdır ve fiyat karşılaştırması da buna göre yapılmalıdır.",
            },
            {
                soru: "Dar şaseli model daha küçük olduğu için daha mı ucuz olur?",
                cevap:
                    "Genelde hayır, çoğu zaman tam tersi geçerlidir. Dar şase, kapı ve koridor genişliğine sığmak için tasarlanmıştır ve bu daralmayı sağlayan mühendislik, standart genişlikteki bir modelden daha maliyetlidir; bu yüzden dar şaseli makaslı platformlar birim fiyat olarak genellikle standart modellerden daha yüksek kiralanır. 'Küçük = ucuz' varsayımıyla teklif istemek yerine, girmeniz gereken alanın gerçek ölçüsünü paylaşıp doğru modelin fiyatını sormak daha güvenilir bir yoldur.",
            },
            {
                soru: "İç mekanda dış mekan lastikli makine kullanılabilir mi, fiyatı değişir mi?",
                cevap:
                    "Teknik olarak çoğu zaman mümkündür ama önerilmez; havalı veya dolgu lastikli bir makine kapalı mekan zeminlerinde iz bırakabilir ve bazı tesisler bunu kabul etmez. Fiyat açısından da iki lastik tipi farklı envanter kalemidir, dolayısıyla birbirinin yerine geçtiğinde otomatik bir tasarruf sağlamaz. Doğru yaklaşım, zemin tipini baştan belirtip o zemine uygun lastikli makinenin fiyatını almaktır.",
            },
            {
                soru: "Yarım günlük bir iş için tam gün ücreti mi ödenir?",
                cevap:
                    "Bu, tedarikçinin minimum kiralama süresi politikasına bağlıdır ve teklif isterken netleştirilmesi gereken bir konudur. Bazı tedarikçiler yarım gün için ayrı bir tarife uygularken, bazıları belirli bir süre altını tam gün olarak fiyatlandırır. İşin süresi kısa ve netse, teklif talebinde bunu açıkça belirtip yarım gün tarifesi olup olmadığını sormak, sürprizle karşılaşmamanın en basit yoludur.",
            },
            {
                soru: "Kapasite belirtmeden teklif istersem ne olur?",
                cevap:
                    "Tedarikçi genelde ortalama bir kapasite varsayarak teklif verir ve bu, sahada işe yetmeyen bir makine ile karşılaşma riskini taşır; yetmediğinde ikinci bir sevkiyat veya daha büyük makineye geçiş gerekir, bu da ilk teklifte görünmeyen bir ek maliyet doğurur. Bu riski önlemek için, teklif istemeden önce kaç kişinin ve ne kadar malzemenin platforma çıkacağını netleştirmenizi öneririz — bu bilgi, doğru kapasite sınıfının ve dolayısıyla doğru fiyatın belirlenmesini sağlar.",
            },
            {
                soru: "İki teklif geldi, ikisi de 'makaslı platform' yazıyor ama fiyatlar çok farklı, neden olabilir?",
                cevap:
                    "Bu genelde kapasite, şase genişliği veya lastik tipinden en az birinin farklı olduğu anlamına gelir; 'makaslı platform' genel bir isimdir ve bu isim altında onlarca farklı model bulunur. İki teklifi karşılaştırmadan önce her ikisinden de kapasite, şase genişliği ve lastik tipi bilgisini istemenizi öneririz — bu üç bilgi eşitlendiğinde fiyat farkı ya kaybolur ya da gerçek bir fark olarak ortaya çıkar; ikisi de mümkündür ve ancak bu bilgilerle ayırt edilebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platform sınıflandırması (kapasite, şase genişliği, lastik tipi) genel makine kiralama pratiğine dayanan bilgidir; TL tutarı verilmemiştir.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Manlift Kiralama — Teklifleri Karşılaştırmanın Doğru Yolu",
        giris:
            "'Manlift' kelimesi İstanbul'da günlük dilde tüm yükseklikte çalışma platformlarını kapsayan bir şemsiye terim hâline gelmiştir — arayan kişi bazen makaslı, bazen eklemli, bazen teleskopik, bazen de sepetli örümcek bir modeli kastediyor olabilir, ama hepsine 'manlift' diyor. Bu genel kullanım, teklif toplama aşamasında ciddi bir karışıklığa yol açar: aynı 'manlift kiralama' aramasına cevap veren üç tedarikçi, birbirinden tamamen farklı makine sınıflarının fiyatını verebilir ve arayan kişi bu farkın nereden geldiğini anlayamaz. Bu sayfa, manlift arayışında olan bir işletmenin önce hangi sınıfa ihtiyacı olduğunu netleştirmesine, sonra da eline gelen teklifleri gerçekten karşılaştırılabilir hâle getirmesine yardımcı olmak için yazıldı. Somut bir kiralama rakamı vermiyoruz; bunun yerine fiyatı oluşturan yapı taşlarını (sınıf seçimi, erişim tipi, süre, nakliye, operatör) tek tek açıp, iki farklı tedarikçiden gelen teklifi yan yana koyduğunuzda hangi satırın gerçekten farklı olduğunu görebilmenizi hedefliyoruz.",
        maddeler: [
            {
                baslik: "Önce sınıf, sonra fiyat sorusu gelir",
                metin:
                    "Manlift arayışının en sık yapılan hatası, sınıfı netleştirmeden doğrudan fiyat sormaktır; oysa dikey yükselme yeterliyse makaslı, engel aşma veya yatay erişim gerekiyorsa eklemli/teleskopik, dar ve engebeli alanda hareket gerekiyorsa sepetli örümcek modeli devreye girer ve bu dört sınıfın fiyat bandı birbirinden belirgin şekilde ayrılır. İşin ne gerektirdiğini (yükseklik, yatay erişim mesafesi, zemin durumu) tarif ettiğinizde, doğru sınıf önerilir ve fiyat sorusu ancak bundan sonra anlamlı hâle gelir.",
            },
            {
                baslik: "Erişim tipi teklifte açıkça yazmalı",
                metin:
                    "Düzgün bir manlift teklifinde makinenin sadece markası veya erişim yüksekliği değil, erişim tipi de (dikey/makaslı, eklemli-boom, teleskopik, sepetli örümcek) belirtilir; çünkü aynı yükseklikteki iki farklı erişim tipi çok farklı fiyatlanır. Teklifte sadece '18 metre manlift' yazıp erişim tipini belirtmeyen bir satır, karşılaştırma yaparken sizi yanıltabilir — 18 metrelik bir teleskopik model ile 18 metrelik bir makaslı model aynı işi görmez ve aynı fiyata da gelmez.",
            },
            {
                baslik: "Süre ve minimum kiralama tanımı teklifler arası en sık kayan kalem",
                metin:
                    "Manlift kiralamalarında bazı tedarikçiler günlük, bazıları haftalık minimum uygular; bazıları hafta sonu teslim-iadesini ekstra gün sayar, bazıları saymaz. Bu tanım farkları, görünürdeki günlük rakamdan bağımsız olarak toplam maliyeti değiştirir. İki teklifi karşılaştırırken sadece 'günlük X TL' satırına değil, minimum süre ve hafta sonu/tatil günü tanımına da bakmak, gerçek toplam maliyeti görmenin tek yoludur.",
            },
            {
                baslik: "Nakliye, İstanbul'un iki yaka gerçeğinde ayrı bir kalem olarak okunmalı",
                metin:
                    "Büyük ve ağır manlift sınıflarında (yüksek teleskopik veya geniş şaseli eklemli modeller) nakliye özel araç ve bazen refakat gerektirir; bu kalem kira bedelinden bağımsızdır ve mesafeye göre değişir. Aynı ilçe içi bir teslimatla yaka değiştiren bir teslimatın nakliye kalemi birbirine eşit olmaz — bu farkı teklifte ayrı bir satır olarak görmek, toplam maliyeti önceden kestirebilmenin ön koşuludur.",
            },
            {
                baslik: "Operatör kalemi, sınıfa göre zorunlu ya da opsiyonel olabilir",
                metin:
                    "Bazı büyük ve karmaşık manlift sınıflarında operatörlü kiralama fiilen zorunlu hâle gelir (makinenin güvenli kullanımı özel eğitim gerektirir), bazı basit sınıflarda ise müşteri kendi eğitimli personeliyle çalışabilir. Bu ayrım teklife yansımalıdır — operatör kalemi bazen kira bedeline gömülüdür, bazen ayrı yazılır. Hangisi olduğunu sormak, iki teklifi adil karşılaştırmanın gerekli bir adımıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manlift sınıflarını hızlı ayırt etme tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, 'manlift' şemsiyesi altındaki dört ana sınıfı hangi iş ihtiyacına göre seçmeniz gerektiğini özetler; doğru sınıfı belirledikten sonra fiyat teklifi istemek, karşılaştırmayı çok daha net hâle getirir.",
                ],
                tablo: {
                    basliklar: ["Sınıf", "En uygun olduğu iş", "Fiyatı etkileyen ek kalem"],
                    satirlar: [
                        ["Makaslı (dikey)", "Düz zeminde geniş platform gerektiren iç işler", "Kapasite, şase genişliği"],
                        ["Eklemli (boom)", "Engel aşma, yatay+dikey erişim", "Erişim mesafesi, açı kapasitesi"],
                        ["Teleskopik", "Uzun mesafeli düz erişim, yüksek işler", "Maksimum yatay uzanım"],
                        ["Sepetli örümcek", "Dar geçit, hassas/kapalı alan", "Taşınabilirlik, kurulum süresi"],
                    ],
                },
            },
            {
                baslik: "Aynı isimle gelen tekliflerin fiyatı neden farklı çıkar",
                paragraflar: [
                    "İki tedarikçiden 'manlift' başlığıyla gelen teklifler, sınıf ve erişim tipi netleşmeden karşılaştırıldığında yanıltıcı olur; biri makaslı bir modelin fiyatını verirken diğeri teleskopik bir modelin fiyatını vermiş olabilir ve ikisi arasındaki fark bir 'pahalılık' değil, bir 'farklı ürün' meselesidir. Bu yüzden teklif isterken 'manlift' yerine ihtiyacınızı (yükseklik, yatay erişim, zemin durumu) tarif etmeniz, hem doğru sınıfın önerilmesini hem de gelen tekliflerin gerçekten kıyaslanabilir olmasını sağlar.",
                    "Kıyaslama yaparken önerimiz şudur: her iki teklifte de sınıf, erişim yüksekliği, yatay erişim mesafesi ve süre tanımı aynıysa, geri kalan fiyat farkı gerçek bir farktır ve bu noktada tercih nakliye süresi, hizmet geçmişi veya müsaitlik gibi diğer kriterlere göre yapılabilir.",
                ],
            },
            {
                baslik: "Teklif talebinde paylaşılması gereken minimum bilgi seti",
                paragraflar: [
                    "Doğru ve karşılaştırılabilir bir manlift teklifi almak için paylaşılması gereken temel bilgiler şunlardır: ulaşılması gereken yükseklik, varsa yatay erişim mesafesi, çalışma alanının zemin tipi ve genişliği, işin süresi ve tercih edilen operatör düzeni (operatörlü/operatörsüz). Bu bilgiler eksik paylaşıldığında tedarikçi varsayımla teklif verir ve bu varsayım sahada tutmayabilir; tam bilgiyle istenen bir teklif, hem daha isabetli hem de daha az sürprizli olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "'Manlift' kelimesi tam olarak neyi kapsıyor, sadece belirli bir makine tipi mi?",
                cevap:
                    "Hayır, günlük kullanımda 'manlift' genelde tüm yükseklikte çalışma platformlarını (makaslı, eklemli-boom, teleskopik, sepetli örümcek) kapsayan genel bir isim olarak kullanılır; teknik olarak bu dört sınıf birbirinden farklı mekanizmalara ve fiyat bantlarına sahiptir. Bu yüzden 'manlift kiralamak istiyorum' derken aslında hangi sınıfa ihtiyacınız olduğunu netleştirmek, hem doğru makinenin gelmesini hem de fiyatın işinize uygun olmasını sağlar.",
            },
            {
                soru: "Hangi manlift sınıfının bana uygun olduğunu nasıl anlarım?",
                cevap:
                    "Belirleyici üç soru vardır: sadece dikey yükseklik mi yeterli, yoksa bir engelin üzerinden veya yanından yatay olarak da erişmeniz mi gerekiyor; çalışma alanı düz mü yoksa engebeli/dar mı; ve zemin ne kadar sağlam. Sadece dikey yükseklik yeterliyse makaslı, yatay erişim gerekiyorsa eklemli veya teleskopik, dar ve hassas bir alan söz konusuysa sepetli örümcek model genelde en uygun seçenektir. Bu üç soruyu netleştirip paylaştığınızda size doğru sınıf önerilir.",
            },
            {
                soru: "Fiyat almadan önce sınıf belirlemek neden bu kadar önemli?",
                cevap:
                    "Çünkü manlift sınıfları arasındaki fiyat farkı, aynı sınıf içindeki tedarikçiler arasındaki fiyat farkından çoğu zaman daha büyüktür. Sınıf belirlemeden alınan bir teklif, aslında yanlış bir ürünle karşılaştırma yapmanıza yol açabilir — örneğin bir teleskopik model teklifini bir makaslı model teklifiyle kıyaslayıp 'pahalı' demek, aslında iki farklı ürünü kıyaslamak anlamına gelir. Önce sınıf, sonra fiyat sırası, doğru karşılaştırmanın ön şartıdır.",
            },
            {
                soru: "Operatörlü kiralama her manlift sınıfında zorunlu mu?",
                cevap:
                    "Hayır, sınıfa ve makinenin karmaşıklığına göre değişir. Görece basit kumandalı sınıflarda (bazı makaslı modeller gibi) müşteri kendi eğitimli personeliyle operatörsüz çalışabilir; daha karmaşık ve büyük sınıflarda ise güvenli kullanım için operatörlü kiralama fiilen gerekli hâle gelebilir. Hangi durumun sizin için geçerli olduğunu, ihtiyacınızı tarif ettiğinizde netleştiririz; bu bilgi teklife de yansır.",
            },
            {
                soru: "Aynı yükseklikte iki farklı sınıf teklif edildi, hangisini seçmeliyim?",
                cevap:
                    "Bu durumda karar yükseklikten değil, yatay erişim ihtiyacından ve zemin koşulundan çıkmalıdır. Yalnızca dikey yükseklik yeterliyse ve zemin düzse, genelde daha ekonomik olan makaslı sınıf tercih edilebilir; bir engelin üzerinden veya yanından erişim gerekiyorsa, yükseklik aynı olsa da eklemli veya teleskopik sınıf tek işlevsel seçenek olabilir. Fiyat farkı burada bir tercih meselesi değil, işlevsellik meselesidir.",
            },
            {
                soru: "Teklif isterken 'manlift lazım' demek yeterli mi, yoksa daha fazla bilgi mi vermeliyim?",
                cevap:
                    "Sadece 'manlift lazım' demek, size varsayıma dayalı ve muhtemelen isabetsiz bir teklif getirir. Ulaşılması gereken yükseklik, varsa yatay erişim mesafesi, zeminin durumu, işin süresi ve operatör tercihinizi paylaştığınızda, hem doğru sınıf önerilir hem de aldığınız teklif sahada gerçekten karşılığını bulur. Bu detayları önceden vermek, sonradan 'bu makine yetmedi' diye ikinci bir sevkiyat yapma riskini de azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manlift sınıflandırması (makaslı, eklemli, teleskopik, sepetli örümcek) genel yükseklik platformu kiralama pratiğine dayanan bilgidir; TL tutarı verilmemiştir.",
    },
};
