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
};
