// ═══════════════════════════════════════════════════════════════════════════
// izmir-forklift.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: İzmir'in LİMAN ve HAVA KARGO lojistiği için FORKLİFT kiralama.
// Açı: YÜK ELLEÇLEME — liman geri sahasında konteyner boşaltma ve istifleme,
// ağır tonajlı forklift ile reach stacker sınıfının işbölümü, gümrüklü saha
// ve antrepo elleçlemesi, hava kargo terminalinde ULD/palet çevrimi,
// petrokimya sahasında ATEX rejimi, serbest bölge lojistiği.
//
// ⚠️ Kardeş domainlerle örtüşme yasağı:
//   • izmirforkliftkiralama.net → forklift SEÇİMİ (tonaj, güç tipi, mast,
//     ataşman) açısı. Bu dosya seçim rehberi DEĞİLDİR.
//   • manisaforklift.com → forklift OPERASYONU (hat besleme, turlu düzen,
//     vardiya, gösterge seti) açısı. Bu dosya hat besleme anlatmaz.
//   • izmir-man-lift.com → aynı ilçelerde RÜZGÂR/yüksekte çalışma açısı;
//     cigli ve menemen sayfalarında rüzgâr kurgusu tekrarlanmadı.
// Ortak 8 kelimelik söz dizisi bulunmaması gözetildi.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca sektör standardı, doğrulanabilir teknik bilgi;
// tesis adı ve firmaya özgü rakam kullanılmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIR_FORKLIFT_COM: Record<string, BespokeIcerik> = {
    "bolge:aliaga": {
        h1: "Aliağa'da Liman Geri Sahası İçin Forklift Kiralama: Konteyner, Kütük ve Bobin Elleçlemesi",
        giris:
            "Aliağa'nın elleçleme dünyası, bir depo sahasının mantığıyla anlaşılmaz. Burada yükün ölçüsü paletle değil konteynerle, tonla, metre boyuyla konulur: iskeleye yanaşan gemiden inen kutu geri sahaya alınır, gümrük gözetimindeki alanda sırasını bekler, kapısı açılıp içindeki genel kargo boşaltılır ve aynı gün bir başka yükle geri doldurulur. Demir-çelik tarafında yük büsbütün başkalaşır — kütük, slab, sıcak rulo bobin ve uzun profil, ne palete oturur ne standart çatalla tutulur. Bu yüzden Aliağa sahalarına makine planlarken sorduğumuz ilk soru tonaj değil, yükün liman zincirinde hangi halkada durduğudur: kutunun dışında mı çalışılacak, içinde mi; istif kaçıncı sıraya çıkacak; yük gümrüklü mü serbest dolaşımda mı. Bu sayfa, geri saha ve antrepo elleçlemesinin forklift kararlarını bu zincir üzerinden anlatıyor: hangi işin ağır tonaj forklift istediği, nerede reach stacker sınıfının başladığı, konteyner içine giren küçük makinenin şartları ve gümrüklü sahanın kendine özgü kısıtları.",
        maddeler: [
            {
                baslik: "Konteynerin dışı ve içi: iki ayrı makine dünyası",
                metin:
                    "Konteyner elleçlemesi tek bir işmiş gibi konuşulur ama fiilen iki ayrı makine ailesi çalışır. Kutunun kendisini kaldırmak — dorseden almak, yere indirmek, sıraya istiflemek — spreader donanımlı ağır makinenin işidir; dolu bir 20 ayaklık kutunun azami brüt ağırlığı sektör standardı olarak 30 tonun üzerindedir ve bu, sıradan bir depo forkliftinin kaldırma sınıfının çok ötesindedir. Kutunun içine girip yükü tek tek almak ise tam tersi profilde bir makine ister: kısa şasili, dar, alçak mastlı, 1,5-2,5 ton bandında. Sahaya tek makineyle çözüm arayan planlar hep aynı yerde tıkanır — biri kutuyu kaldırır ama içine giremez, diğeri içine girer ama kutuyu kaldıramaz. Aliağa geri sahalarında doğru kurulum, bu iki ailenin sayısını iş hacmine göre dengelemektir.",
            },
            {
                baslik: "Reach stacker nerede başlar, ağır forklift nerede biter",
                metin:
                    "Boş kutuların ve dolu konteynerlerin istifinde reach stacker sınıfı, teleskopik bomu sayesinde ön sıradan arka sıraya uzanabildiği için saha metrekaresini en verimli kullanan makinedir; kapasitesi sıra derinliği arttıkça belirgin düşer — birinci sırada taşıdığı yükü üçüncü sırada taşıyamaz ve saha yerleşimi bu düşüş eğrisine göre planlanır. Boş konteyner istifleyiciler ise hafif yükü çok daha yükseğe çıkarır ve boş kutu havuzunun makinesidir. Ağır tonajlı karşı ağırlıklı forkliftin alanı ise farklıdır: kutu değil, kutu dışındaki ağır parça — kütük demeti, kalıp, makine gövdesi, bobin. Bu üçlünün rollerini karıştırmak, kiralamada en pahalı hatadır; reach stacker kiralanıp gün boyu bobin taşımak da, 16 tonluk forkliftle boş kutu istifi denemek de sahayı yavaşlatır.",
            },
            {
                baslik: "Konteyner içi boşaltma: taban dayanımı ve mast yüksekliği",
                metin:
                    "Kutunun içine forklift sokmak, kabul edilmiş bir yöntemdir ama üç teknik şartı vardır. Birincisi mast: standart bir konteynerin kapı açıklığı, forkliftin kapalı mast yüksekliğinden alçaktır; makine tam serbest kaldırmalı mast olmadan içeride tek palet bile istifleyemez, mastı tavana dayar. İkincisi taban: konteyner döşemesi ahşaptır ve nokta yükü sınırlıdır — dolu forkliftin dar lastikli aks yükü bu sınırı zorlar, bu yüzden içeri giren makinelerin tonajı küçük tutulur. Üçüncüsü sabitleme: kutu dorsenin üzerindeyken içine makine giriyorsa dorse bacakları desteklenmiş, tekerlekler takozlanmış ve rampa ile kutu arasındaki kot farkı köprü ile kapatılmış olmalıdır. Bu üç maddenin biri eksikse, boşaltma işi hız meselesi olmaktan çıkıp kaza senaryosuna döner.",
            },
            {
                baslik: "Demir-çelik yükleri: bobin, kütük ve uzun profilin kendi donanımı",
                metin:
                    "Bölgenin ağır sanayi profili, elleçlemeye çatalın yetmediği bir yük ailesi getirir. Sıcak veya soğuk rulo bobin, silindirik gövdesi nedeniyle çatalda yuvarlanır; güvenli taşıma ya C-kanca ile göbekten ya rulo klempi ile gövdeden yapılır ve iki yöntemin de kapasite hesabı ataşman ağırlığıyla birlikte kurulur. Kütük ve uzun profil demetleri boylarıyla sorun çıkarır: standart forkliftle taşınan altı metrelik demet, dönüşte kendi boyu kadar alan süpürür ve dar geçitte hem yükü hem sahayı riske atar — bu işin makinesi, yükü şasi boyunca yanlamasına taşıyan yan yükleyici sınıfıdır. Uzatma çatalı ise ancak makinenin kapasite diyagramı yeniden okunduğunda, kısaltılmış kapasiteyle kullanılır; ucuz çözüm gibi görünen uzatma, en sık atlanan kapasite kaybıdır.",
            },
            {
                baslik: "Gümrüklü saha ritmi: makine hazır olmak zorunda, yük beklemez",
                metin:
                    "Geri sahada ve gümrüklü alanda elleçlemenin temposunu makine değil evrak belirler. Muayene için açılacak kutunun saati bellidir, memur geldiğinde yükün erişilebilir olması beklenir, numune alınacak parti önceden öne çekilir ve işlem bitince kutu aynı gün mühürlenip sıraya döner. Bu ritmin forklifte yansıması şudur: makine, iş çıktığında sahada ve çalışır olmalıdır — arıza ya da yakıt için yarım saat kaybı, o günün muayene randevusunu ertesi güne atar ve ardından ardiye günü ekler. Bu nedenle gümrüklü saha kiralamalarında sözleşmenin en kritik maddesi kira bedeli değil, arıza durumunda ikame makine süresidir. Sahaya makine verirken ikame taahhüdünü yazılı tanımlamamızın sebebi tam olarak budur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Liman geri sahasında iş türü — makine sınıfı eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, geri saha ve antrepo işlerinde hangi elleçleme türünün hangi makine sınıfına düştüğünü ve kiralamada baştan konuşulması gereken donanımı özetler. Kapasite değerleri her makinenin kendi yük diyagramından okunur; tabloda sınıf eşleşmesi verilmiştir.",
                ],
                tablo: {
                    basliklar: ["İş", "Makine sınıfı", "Kritik donanım", "Sık yapılan hata"],
                    satirlar: [
                        ["Dolu kutu indirme-istifleme", "Reach stacker / spreaderli ağır makine", "Sıra derinliğine göre kapasite eğrisi", "Sıra derinliği hesaba katılmaz"],
                        ["Boş kutu havuzu", "Boş konteyner istifleyici", "Yüksek istif kolonu, saha planı", "Dolu kutu makinesiyle çalışmak"],
                        ["Kutu içi boşaltma", "1,5 – 2,5 ton, kısa şasi", "Tam serbest kaldırmalı mast", "Standart mastla içeri girmek"],
                        ["Bobin ve rulo", "Ağır tonaj karşı ağırlıklı", "C-kanca veya rulo klempi", "Çatalla yuvarlanan yük taşımak"],
                        ["Kütük, profil, boru demeti", "Yan yükleyici veya uzun çatal", "Yük boyuna göre manevra alanı", "Uzatma çatalında kapasite düşümü"],
                    ],
                },
            },
            {
                baslik: "Gemi programına göre elleçleme kapasitesi planlamak",
                paragraflar: [
                    "Liman çevresindeki elleçleme yükü düz bir çizgi izlemez; gemi yanaşma programına göre dalgalanır. Yanaşma sonrası birkaç gün boyunca geri sahaya yük yığılır, ardından tempo düşer ve saha nefes alır. Filoyu tepe güne göre boyutlayan tesis, aradaki sakin günlerde çalışmayan makinenin kirasını öder; taban güne göre boyutlayan tesis ise yanaşma günü sahayı kilitler. Doğru kurgu ikisinin ortasındadır: sürekli işi karşılayan makineler dönemsel sözleşmeyle sabit tutulur, yanaşma yoğunluğu gün veya hafta bazlı ek makineyle karşılanır. Bu modelin tek şartı öngörüdür — gemi programı belli olduğunda ek makine talebini önceden bağlamak, aynı programı izleyen bütün sahaların aynı güne talep yığdığı gerçeği karşısında tek güvencedir.",
                    "Ek makine planında sıkça atlanan kalem operatördür. Yanaşma günü sahaya inen makine, sürücüsü olmadığında sadece park etmiş demirdir; kısa süreli takviyelerde operatörlü kiralama, personel bulma telaşını baştan ortadan kaldırdığı için tercih edilir.",
                ],
            },
            {
                baslik: "Saha güvenliği: ağır makine ile insanın aynı metrekareyi paylaşması",
                paragraflar: [
                    "Geri sahanın risk profili depo sahasından farklıdır çünkü burada makineler büyük, görüş alanları kısıtlı ve yükler görüşü kapatacak boyuttadır. Üç kural sahayı ayakta tutar. Birincisi, istif koridorlarının tek yönlü tanımlanması ve yaya geçişinin bu koridorlardan tamamen ayrılmasıdır; ikincisi, konteyner kapısı açılırken kimsenin kapı önünde durmaması — kaymış yük, kapı açıldığında dışarı devrilir ve bu, saha kazalarının en bilinen deseni olmasına rağmen en sık tekrarlananıdır. Üçüncüsü, yükün taşıma yüksekliğidir: ağır tonajlı makinede yükseğe kaldırılmış yük, görüşü kapattığı gibi devrilme marjını da eritir.",
                    "Bunlara sahaya özgü bir madde daha eklenir: yükün beyan edilen ağırlığı ile gerçek ağırlığı arasındaki fark. İhracat konteynerlerinde doğrulanmış brüt ağırlık zorunluluğunun mevcut olması boşuna değildir — ağırlığı bilinmeyen yük, kapasite hesabı yapılamayan yüktür ve makineye 'kaldırabildiği kadar' yaklaşımıyla iş verilmesi, sahada kabul ettiğimiz bir yöntem değildir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Konteynerlerimizi dorseden indirmeden içinde boşaltıyoruz; hangi forklift bu işi yapar?",
                cevap:
                    "Kutu içine girecek makinede üç ölçü belirleyicidir: kapalı mast yüksekliği kapı açıklığından alçak olmalı, mast tam serbest kaldırmalı olmalı ki içeride mast uzamadan istif yapılabilsin ve makine kısa şasili, 1,5-2,5 ton bandında seçilmelidir — konteyner ahşap tabanının nokta yükü sınırı ağır makineyi kaldırmaz. Dorse üzerinde çalışılacaksa ayrıca üç saha şartı gerekir: dorse bacaklarının desteklenmesi, tekerleklerin takozlanması ve rampa ile kutu arasındaki kot farkının köprüyle kapatılması. Kutu ölçülerinizi, rampa yüksekliğinizi ve boşaltacağınız yükün palet düzenini iletin; makineyi ve köprü çözümünü birlikte netleştirelim.",
            },
            {
                soru: "Reach stacker mı kiralamalıyız, yoksa ağır tonajlı forklift mi yeter?",
                cevap:
                    "Cevap, kaldıracağınız şeyin konteynerin kendisi mi yoksa içindeki yük mü olduğuna bağlıdır. Kutuyu kaldıracak, dorseden indirecek ve üst üste istifleyecekseniz makine reach stacker sınıfıdır; teleskopik bom sayesinde arka sıraya uzanır ve saha metrekaresini en verimli kullanan çözümdür — ancak kapasitesi sıra derinliği arttıkça düştüğü için istif planı bu eğriye göre yapılmalıdır. Yükünüz kutunun kendisi değil de ağır tekil parçalarsa (bobin, kalıp, makine gövdesi, kütük demeti) ağır tonajlı karşı ağırlıklı forklift hem daha ekonomik hem daha manevra kabiliyetlidir. Saha krokinizi ve tipik yük listenizi paylaşın; iki sınıfın günlük maliyetini iş hacminiz üzerinden karşılaştırmalı çıkaralım.",
            },
            {
                soru: "Altı metrelik profil demetlerini normal forkliftle taşıyoruz, dar geçitlerde zorlanıyoruz. Alternatif var mı?",
                cevap:
                    "Var ve bu iş için tasarlanmış sınıf yan yükleyicidir: yükü çatalla önde değil, şasi boyunca yanlamasına taşır — yani altı metrelik demet, makinenin genişliğini değil uzunluğunu kullanır ve dar geçitte manevra sorunu ortadan kalkar. Standart forkliftte aynı yükü taşımanın iki bedeli vardır; dönüşte yükün süpürdüğü alan makinenin boyunun katına çıkar ve uzatma çatalı kullanıldığında ağırlık merkezi öne kaydığı için makinenin gerçek kapasitesi diyagramda belirgin düşer. Demet boylarınızı, ortalama ağırlıklarını ve geçit genişliklerinizi iletin; yan yükleyici ile uzun çatallı karşı ağırlıklı çözümü ölçüleriniz üzerinden değerlendirelim.",
            },
            {
                soru: "Antrepomuzda gümrük muayenesi için elleçleme yapıyoruz; kiralık makine bu düzene uyar mı?",
                cevap:
                    "Uyar, ama sözleşmenin muayene ritmine göre yazılması şartıyla. Gümrüklü sahada işin saatini yük değil işlem belirler: muayene randevusu geldiğinde parti erişilebilir olmalı, numune alınacak koli öne çekilmiş olmalı ve işlem bittiğinde yük aynı gün yerine dönmelidir. Bu düzende makinenin arızalanması sadece bir gün kaybı değil, kaçan randevu ve eklenen ardiye günü demektir. Bu yüzden gümrüklü saha kiralamalarında kritik madde kira bedeli değil ikame süresidir — arıza hâlinde yerine gelecek makinenin süresi sözleşmede yazılı olmalıdır. Sahanızın günlük muayene yoğunluğunu paylaşın; ikame taahhüdünü ve gerekiyorsa yedek makine düzenini ona göre kuralım.",
            },
            {
                soru: "Bobinleri çatalla taşıyoruz ve zaman zaman yuvarlanma yaşıyoruz; ne yapmalıyız?",
                cevap:
                    "Çatal, silindirik yükü tutmak için tasarlanmamış bir arayüzdür; bobin çatalın üzerinde noktasal temasla durur ve her fren, her dönüş yuvarlanmayı davet eder — yaşadığınız durum makine hatası değil, yanlış arayüz. İki doğru yöntem vardır. C-kanca, bobini göbeğinden alır ve dik duran rulolarda hızlı çalışır; rulo klempi ise gövdeden kavrar ve yatık taşımada güvenlidir. Her iki ataşman da kendi ağırlığıyla ve yükü öne taşımasıyla makinenin net kapasitesini düşürür, bu yüzden tonaj hesabı ataşmanla birlikte yeniden yapılmalıdır. Bobin çapı, göbek çapı, ağırlığı ve taşıma yönünü (dik/yatık) iletin; ataşman ve makine eşleşmesini kapasite payı bırakarak seçelim.",
            },
            {
                soru: "Gemi yanaşma günlerinde saha kilitleniyor, diğer günler makineler boş duruyor. Nasıl bir kiralama modeli kuralım?",
                cevap:
                    "Bu dalgalanma için tek makine sayısı doğru cevap değildir; iki katmanlı model kurulur. Sürekli akan işi — antrepo içi transfer, muayene elleçlemesi, günlük çıkışlar — karşılayan makineler dönemsel sözleşmeyle sabit tutulur; yanaşma yoğunluğu ise gün veya hafta bazlı ek makineyle karşılanır ve program bittiğinde iade edilir. Modelin işlemesinin tek şartı erken haberdir: aynı liman programını izleyen bütün sahalar aynı güne talep yığdığı için, gemi programı netleştiği anda ek makine rezervasyonunu bağlamak gerekir. Kısa takviyelerde operatörlü kiralamayı öneririz — bir haftalık iş için operatör bulmak, makine bulmaktan zordur. Yanaşma takviminizi paylaşın, iki katmanı birlikte boyutlayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aliağa'nın liman, demir-çelik ve ağır sanayi karakteri kamuya açık bilgidir; konteyner brüt ağırlık sınırı, taban nokta yükü kısıtı, serbest kaldırmalı mast gereği, reach stacker kapasite-sıra ilişkisi ve doğrulanmış brüt ağırlık uygulaması sektör standardı bilgilerdir; iki katmanlı filo modeli ve ikame taahhüdü firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:gaziemir": {
        h1: "Gaziemir'de Hava Kargo ve Serbest Bölge Forklifti: Çevrim Süresi Üzerine Kurulu Elleçleme",
        giris:
            "Gaziemir'in elleçleme karakterini iki farklı saat belirler: uçağın kalkış saati ve gümrük işleminin saati. Hava kargo terminalinde yük, depoya konmak için değil bir sonraki uçağa yetişmek için gelir; genel kargo parçalara ayrılır, tartılır, uçak gövdesinin eğimine uyan konturda toplanır ve dakikası hesaplı bir programa teslim edilir. Serbest bölge tarafında ise tempo başka bir düzenle kurulur — gelen hammadde bölgeye girer, işlenir, katma değeriyle çıkar ve her giriş-çıkış kendi belgesiyle kayda geçer. İkisinin ortak paydası şudur: burada forkliftin görevi yük taşımak değil, çevrimi kesintisiz tutmaktır. Bir palet on dakika gecikirse depo kaybetmez, uçuş kaybeder. Bu sayfa, havalimanı çevresi ve serbest bölge lojistiğinin forklift kararlarını bu çevrim mantığıyla ele alıyor: terminal içinin akülü ve kompakt makine ihtiyacı, hacimsel ağırlığın tonaj hesabına etkisi, apron ile terminal arasındaki keskin sınır ve kısa vadeli talep dalgalanmasının kiralamaya yansıması.",
        maddeler: [
            {
                baslik: "Hava kargonun tonaj yanılgısı: ağırlık az, hacim çok",
                metin:
                    "Hava kargoda yükün faturası çoğu zaman kilosuyla değil kapladığı hacimle kesilir; taşımacılığın hacimsel ağırlık kuralı, hafif ama iri gönderiyi ağır gönderi gibi ücretlendirir. Bu ticari gerçeğin elleçlemeye yansıması nettir: terminalde dolaşan yüklerin büyük bölümü ağır değil, iri ve dengesizdir. Dolayısıyla buradaki forklift kararı 'kaç ton' sorusuyla değil 'ne kadar hacimli, ne kadar dengesiz' sorusuyla verilir. Yüksek tonajlı makine terminale girdiğinde kapasitesinin çeyreğini bile kullanamaz ama dönüş yarıçapıyla koridoru tıkar; doğru profil, düşük tonajlı, kompakt, iyi görüşlü ve hassas hidrolikli makinedir. Terminalde makineyi büyütmek verim getirmez, alan kaybettirir.",
            },
            {
                baslik: "Terminal içi: akülü zorunluluğu ve zemin hassasiyeti",
                metin:
                    "Kargo terminalleri kapalı, yoğun personelli ve sürekli hareket hâlindeki alanlardır; bu üçlü, içeride egzozlu makine çalıştırmayı baştan dışlar — iç mekânın makinesi akülüdür. Zemin tarafında da beklenti farklıdır: terminal zeminleri genellikle düzgün betondur ve iz bırakmayan lastik, hem görüntü hem kayma güvenliği açısından standarttır. Bir başka ayrıntı, gürültü ve manevra disiplinidir; kargo terminalinde forklift, sabit rulolu hatların, tartı noktalarının ve elle çalışan personelin arasından geçer. Bu ortamda makine seçiminin görünmeyen kriteri operatörün görüş açısıdır: yükseltilmiş yükle görüşü kapanan makine, terminalin en kalabalık koridorunda en yavaş çalışan makinedir.",
            },
            {
                baslik: "Apron ile terminal arasındaki sınır: her makine her yere giremez",
                metin:
                    "Havalimanı sahasında pist ve apron tarafı ile terminalin kara tarafı, birbirinden idari olarak ayrılmış iki dünyadır. Apron tarafına araç ve makine girişi izne bağlıdır, sürücülerin ayrı yetki belgesi taşıması gerekir ve saha, yabancı madde riskine karşı sıkı denetlenir — kopmuş bir lastik parçası ya da düşen bir cıvata, uçak motoru için ciddi tehlikedir. Kiralık makine planlanırken bu sınır baştan konuşulur: makine yalnız terminal içinde mi çalışacak, yoksa apron tarafına da geçecek mi? İkinci durumda hem izin süreci hem makinenin bakım-temizlik durumu ayrı bir standarda tabidir. Pratikte çoğu kiralama, kara tarafındaki kargo binası ve çevre depolar için yapılır; apron tarafı yer hizmetleri kuruluşlarının kendi ekipmanıyla yürür.",
            },
            {
                baslik: "Serbest bölge lojistiği: sayının ve kaydın makinesi",
                metin:
                    "Serbest bölgede elleçlemenin ayırt edici tarafı, her hareketin belgeye bağlı olmasıdır: bölgeye giren yük kayda geçer, işlem görür, çıkarken yeniden kayda geçer ve stok sayımı bu kayıtla tutar olmak zorundadır. Forklift açısından bunun anlamı, hızdan çok izlenebilirliktir — hangi paletin nereye kaldırıldığının bilinmediği bir saha, sayım günü ekipçe aranan bir sahaya döner. Bu yüzden serbest bölge depolarında makine kadar raf-adres düzeni ve palet etiketinin okunabilirliği konuşulur. Makine tarafında ise iki eğilim öne çıkar: raf koridorlarında yüksek istif yapabilen kompakt sınıf ve rampa ile depo arasında mekik dokuyan orta tonajlı makine. Bölgenin ihracat ağırlıklı çalışan tesislerinde ikinci grup, sevkiyat gününün tempo belirleyicisidir.",
            },
            {
                baslik: "Çevrim süresi: kiralamanın burada ölçüldüğü tek metrik",
                metin:
                    "Depo lojistiğinde makine performansı taşınan palet sayısıyla konuşulur; havalimanı çevresinde ise doğru metrik çevrim süresidir — yükün kapıdan girip işlem görüp çıkana kadar geçen süre. Bu metrik, makinenin gücünden çok hazır bulunuşuna bakar: şarjı biten makine, dolu akülüsü olmadığı için beklerse çevrim kırılır; kapasitesi yüksek ama koridora sığmayan makine, kısa yolu uzun yoldan gittiği için çevrim uzar. Kiralama görüşmesinde bu yüzden kaç makine gerektiğini değil, günün hangi saatlerinde kaç eşzamanlı elleçleme noktası olduğunu sorarız. Yığılmanın saati bilinirse makine sayısı kendiliğinden çıkar ve çoğu sahada sonuç, tahmin edilenden az makineyle daha kısa çevrim olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Havalimanı çevresi ve serbest bölge: alan — makine profili tablosu",
                paragraflar: [
                    "Gaziemir çevresindeki lojistik alanları, elleçleme koşulları ve uygun makine profili aşağıda karşılaştırılmıştır. Kiralama görüşmesinde bu satırlardan hangisinde çalışılacağı netleşirse, geri kalan teknik ayrıntı hızla kapanır.",
                ],
                tablo: {
                    basliklar: ["Alan", "Yükün karakteri", "Makine profili", "Baştan konuşulacak kısıt"],
                    satirlar: [
                        ["Kargo terminali içi", "Hafif, hacimli, dengesiz", "Akülü 1,5 – 2 ton, kompakt", "İz bırakmayan lastik, görüş açısı"],
                        ["Terminal çevresi depo", "Karma palet, kısa süreli stok", "Akülü 2 – 2,5 ton", "Rampa kotu ve kapı ölçüsü"],
                        ["Apron tarafı", "Uçak yükleme ekipmanı", "Yer hizmetleri ekipmanı", "Erişim izni ve yetki belgesi"],
                        ["Serbest bölge deposu", "İşlem görecek hammadde-mamul", "Raf koridoru için kompakt istif", "Adres düzeni, sayım izlenebilirliği"],
                        ["Bölge sevkiyat rampası", "İhracat paleti, dorse yükleme", "2,5 ton, sideshift", "Araç sırası ve yükleme penceresi"],
                    ],
                },
            },
            {
                baslik: "Kısa vadeli talep dalgası: uçuş programı değiştiğinde ne olur",
                paragraflar: [
                    "Hava kargo ve ihracat lojistiğinin talep eğrisi kısa vadelidir; bir uçuş programı değişikliği, bir sevkiyat sıkışması ya da sezonluk bir ihracat dalgası, elleçleme ihtiyacını günler içinde büyütür. Bu ortamda uzun dönem sözleşmeyle büyük filo tutmak, sakin haftalarda atıl kapasite ödemek demektir; her yığılmada acil makine aramak ise temin belirsizliği getirir. Uyguladığımız orta yol, çekirdek filoyu sabit tutup üzerine çağrı bazlı ek makine hakkı tanımlamaktır: ek makinenin sınıfı ve temin süresi sözleşmede yazılıdır, çağrı geldiğinde fiyat ve müsaitlik pazarlığı yapılmaz.",
                    "Bu düzenin ikinci ayağı operatördür. Kısa vadeli takviyelerde tesisin kendi personelini eğitecek zamanı olmadığı için operatörlü kiralama pratik çözümdür; ancak gelen operatörün ilk saatinde saha brifingi alması — rota, yasak alanlar, tartı ve muayene noktaları, kapı düzeni — şarttır. Sahayı bilmeyen deneyimli operatör, çevrimi hızlandırmaz.",
                ],
            },
            {
                baslik: "İzlenebilirlik: elleçlemenin kayıtla buluştuğu nokta",
                paragraflar: [
                    "Hem gümrük gözetimindeki hem serbest bölge içindeki yüklerde elleçlemenin kendisi kadar kaydı da önemlidir. Bir paletin hangi bölgeden alınıp nereye kaldırıldığı bilinmiyorsa, o palet sayım gününde fiilen kayıptır ve arama süresi, tasarruf edilen bütün elleçleme dakikalarını götürür. Sahada kurduğumuz düzen basittir ve pahalı sistem gerektirmez: depo bloklara ayrılır, bloklar fiziken işaretlenir, her kaldırma hareketi adresle kaydedilir ve sevkiyat listeleri adresle birlikte yazılır. Adressiz istif yapılmaması, bu düzenin tek kuralıdır.",
                    "Forklift tarafında bunun karşılığı, operatörün etiket okuyabilecek konumda çalışmasıdır: yüksek raf kotlarında etiketi göremeyen operatör ya paleti indirip bakar ya tahmin eder — ikisi de kayıptır. Raf kotu yüksek depolarda etiketin palet yüzüne, okunabilir boyutta ve sabit konumda basılması, makine seçiminden daha çok zaman kazandırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kargo terminalimizde yükler hafif ama çok hacimli; küçük forklift yeter mi?",
                cevap:
                    "Çoğunlukla yeter ve doğrusu da budur: hava kargonun yük profili ağır değil iridir, çünkü taşıma ücretlendirmesindeki hacimsel ağırlık kuralı iri gönderiyi zaten sisteme çeker. Bu profilde 1,5-2 ton bandındaki kompakt akülü makine, kapasite açısından fazlasıyla yeterlidir. Dikkat edilecek nokta tonaj değil geometridir — iri ve dengesiz yükte ağırlık merkezi öne kayabilir, bu yüzden yükün derinliği makinenin yük diyagramıyla birlikte okunmalıdır. İkinci nokta görüştür: hacimli yük operatörün önünü kapatırsa terminal koridorunda hız düşer, bu durumda alçak taşıma ve gerektiğinde geri manevra düzeni kurulur. Tipik gönderi ölçülerinizi paylaşın; kapasiteyi değil geometriyi birlikte kontrol edelim.",
            },
            {
                soru: "Makinemizin apron tarafına da geçmesi gerekiyor; kiralık makineyle bu mümkün mü?",
                cevap:
                    "Mümkün olup olmadığı bizim değil, saha yetkilisinin iznine bağlıdır: apron tarafı erişimi izin rejimine tabidir, sürücülerin ayrı yetki belgesi taşıması beklenir ve makinenin sahaya girmeden önce yabancı madde riski açısından kontrol edilmesi gerekir — gevşek parça, aşınmış lastik ya da kaçak yapan hidrolik, apron için kabul edilmez. Pratikte kiralamalarımızın büyük bölümü kara tarafındaki kargo binası ve çevre depolar için yapılır; apron tarafındaki yükleme genellikle yer hizmetleri kuruluşlarının kendi ekipmanıyla yürür. Yine de geçiş gerekiyorsa, izin sürecini işleten taraf siz olursunuz ve biz makineyi kontrol standardına uygun teslim ederiz. Hangi sınırda çalışacağınızı baştan belirleyelim.",
            },
            {
                soru: "Serbest bölge depomuzda sayım günleri kâbusa dönüyor; sorun forklift düzeninde mi?",
                cevap:
                    "Sorun genellikle makinede değil, kaldırma hareketinin kayıtsız yapılmasındadır: adressiz istiflenen palet, sayım gününde fiilen aranmaya başlanır ve o arama süresi, bütün yıl kazanılan elleçleme dakikalarını siler. Kurulacak düzen pahalı bir sistem gerektirmez — depo bloklara ayrılır, bloklar fiziken işaretlenir, her hareket adresle kaydedilir ve sevkiyat listeleri adresle yazılır. Tek kural, adressiz istif yapılmamasıdır. Buna bir de etiket okunabilirliğini ekleyin: yüksek raf kotunda etiketi göremeyen operatör paleti indirip bakmak zorunda kalır. İlk kurulumda mevcut stokun adreslenmesi en zahmetli adımdır; onu bir kez yaptıktan sonra sayım, gün değil saat işine döner. Kroki şablonunu paylaşabiliriz.",
            },
            {
                soru: "İhracat sevkiyatlarımız dalgalı; sabit filo mu tutmalıyız, her seferinde mi kiralamalıyız?",
                cevap:
                    "İkisinin ortası doğru cevaptır. Sürekli akan işi karşılayan çekirdek filoyu dönemsel sözleşmeyle sabit tutun — bu, sakin haftalarda da çalışan minimum makine sayısıdır. Üzerine, sözleşmede tanımlı bir ek makine hakkı ekleyin: ek makinenin sınıfı, günlük bedeli ve temin süresi baştan yazılı olsun ki yığılma geldiğinde pazarlık değil çağrı yapılsın. Bu model, hem atıl kapasite ödemenizi hem yoğun günde makine bulamama riskinizi ortadan kaldırır. Kısa takviyelerde operatörlü seçeneği öneririz; bir haftalık iş için personel bulmak ve eğitmek pratik değildir. Son üç ayın sevkiyat yoğunluğunu gün bazında paylaşın; çekirdek filo sayısını ve ek makine eşiğini veriyle çıkaralım.",
            },
            {
                soru: "Forklift sayımızı artırdık ama yükler yine geç çıkıyor; nerede yanlış yapıyoruz?",
                cevap:
                    "Bu tablonun klasik nedeni, sorunun makine sayısında değil eşzamanlılıkta olmasıdır. Yükler günün belirli saatlerinde aynı anda yığılıyorsa, makine eklemek darboğazı bir adım öteye taşır — sıra bu kez tartı noktasında, kapı ağzında ya da evrak işleminde oluşur. Doğru teşhis için bir hafta boyunca üç veriyi kaydedin: yükün kapıdan girdiği saat, işlem gördüğü saat, çıktığı saat. Bu üçlü, çevrimin nerede beklediğini doğrudan gösterir. Deneyimimizde vakaların çoğunda darboğaz elleçleme değil, elleçlemeden önceki hazırlıktır — palet hazır olmadan makine çağrılır ve makine bekler. Kayıt tablosunu paylaşabiliriz; birlikte okuyup makine sayısını veriye göre belirleyelim.",
            },
            {
                soru: "Terminal içinde dizel forklift kullanabilir miyiz, kapılar açık kalıyor?",
                cevap:
                    "Kapıların açık olması, kapalı ve yoğun personelli bir kargo terminalinde egzozlu makineyi kabul edilebilir hâle getirmez. Terminal ortamının üç özelliği bu kararı kesinleştirir: hacim kapalıdır, personel yoğunluğu yüksektir ve makine, insanların elle çalıştığı hatların hemen yanından geçer. Bu koşullarda emisyon maruziyeti kapı açıklığıyla telafi edilemez; iç mekânın makinesi akülüdür. Dizel sınıf, açık saha ve dış rampa işlerinde yerini korur — hatta yükün terminale girmeden önceki ağır elleçlemesinde tercih edilir. Uygulanan doğru düzen, iç ve dış makinelerin görev ayrımıdır: dış makine yükü kapı önündeki tampon alana bırakır, iç makine oradan çeker. Kapı ve tampon alan düzeninizi birlikte planlayalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gaziemir'in havalimanı ve serbest bölge lojistiği barındırdığı kamuya açık bilgidir; hava taşımacılığında hacimsel ağırlık uygulaması, apron erişiminin izne tabi olması ve yabancı madde denetimi, kapalı alanda emisyon kısıtı sektör standardı bilgilerdir; çekirdek filo + tanımlı ek makine hakkı modeli ve çevrim süresi ölçümü firma pratiğimizdir. Tesis adı ve sayısal iddia kullanılmamıştır.",
    },

    "bolge:aliaga-petrokimya-osb": {
        h1: "Aliağa Petrokimya Sahasında Forklift: Patlayıcı Ortam Rejimi ve İzinli Çalışma Düzeni",
        giris:
            "Petrokimya ve rafineri sahalarında forklift, başka hiçbir sanayi alanında olmadığı kadar sıkı bir kural setinin içine girer. Buradaki mesele makinenin ne kadar kaldırdığı değil, çalışacağı yerde ortamın tutuşabilir olup olmadığıdır: proses ünitelerinin çevresinde hava, belirli koşullarda yanıcı gaz veya buhar barındırabilir ve standart bir dizel ya da akülü forklift, egzoz sıcaklığı, kıvılcım üreten elektrik aksamı ve sıcak yüzeyleriyle bu ortamda tutuşturucu kaynağın kendisidir. Bu yüzden saha, görünmez sınırlarla bölgelere ayrılır; her bölgenin kendi ekipman standardı, her işin kendi izin belgesi vardır. Elleçlenen yük de kendine özgüdür — granül dolu big-bag, kimyasal varil, IBC tank, katalizör kabı ve tehlikeli madde etiketli paletler. Bu sayfa, petrokimya sahalarına forklift verirken uyguladığımız düzeni anlatıyor: bölge sınıflandırmasının makine seçimine etkisi, izinli çalışma sistemiyle uyum, tehlikeli madde elleçlemesinin ayrımları ve saha içinde yükün taşınma disiplini.",
        maddeler: [
            {
                baslik: "Bölge sınıflandırması: makine seçiminin ilk ve tek başlangıcı",
                metin:
                    "Patlayıcı ortam mevzuatı, yanıcı gaz veya buharın bulunma sıklığına göre alanları bölgelere ayırır; bu sınıflandırma, sahada çalışacak her ekipmanın koruma seviyesini belirler. Forklift açısından kural nettir: sınıflandırılmış bölgeye giren makinenin patlayıcı ortama uygun sertifikalı donanıma sahip olması gerekir ve bu, standart makineye sonradan eklenen bir aksesuar değil, makinenin tasarım ve belgelendirme düzeyidir. Bölge dışında kalan alanlarda ise standart makine çalışabilir. Bu yüzden kiralama görüşmesinin ilk maddesi tonaj değil, tesisin bölge haritasıdır — hangi noktada hangi zon geçerli, makine nereye kadar girecek. Haritayı görmeden verilen teklif, sahaya girmeden geçersiz hâle gelen tekliftir.",
            },
            {
                baslik: "Sınır yönetimi: bölge dışında biten, bölge içinde başlayan iş",
                metin:
                    "Sertifikalı makine hem temini hem maliyeti bakımından standart makineden farklıdır; bu yüzden iyi kurulmuş sahalarda uygulanan yaygın çözüm, işi sınırda bölmektir. Yük, standart makineyle sınıflandırılmış bölgenin dışındaki tampon alana kadar getirilir; oradan içeri, uygun donanımlı makineyle veya elleçlemeyi gerektirmeyen yöntemlerle alınır. Bu düzenin tek şartı tampon alanın gerçekten tanımlı olmasıdır — işaretlenmiş, yeterli büyüklükte ve iki makinenin birbirini beklemeyeceği kadar tamponlu. Sınırın kâğıt üzerinde kalıp sahada bulanıklaştığı tesisler, en riskli anı yaşar: standart makine, 'sadece iki metre' diyerek bölgenin içine girer. Sınır ihlali, saha kültüründe tolere edilebilecek en son şeydir.",
            },
            {
                baslik: "İzinli çalışma sistemi: makine sahaya evrakla girer",
                metin:
                    "Petrokimya sahalarında iş, izin belgesiyle başlar. Sıcak iş izni, kapalı hacim izni ve genel çalışma izni gibi belgeler, işin yerini, süresini, alınacak önlemleri ve sorumlusunu tanımlar; forklift işleri de bu sistemin dışında değildir. Kiralık makinenin sahaya girişi için tipik olarak makinenin periyodik kontrol raporu, operatörün yeterlilik belgesi, iş güvenliği eğitim kaydı ve saha oryantasyonu tamamlanmış olmalıdır. Bu evrakın son dakikada toplanması, sahaya giriş gününü ertelemenin en yaygın nedenidir. Kiralamada bu yüzden teslim tarihini değil, evrak tarihini planlarız: belgeler hazırsa makine kapıdan geçer, hazır değilse makine kapıda bekler — ve kapıda bekleyen makinenin kirası da işlemektedir.",
            },
            {
                baslik: "Tehlikeli madde elleçlemesi: varil, IBC ve ayrıştırma kuralı",
                metin:
                    "Kimyasal yükün elleçlenmesinde iki ayrı disiplin birlikte çalışır. Birincisi mekanik güvenliktir: varil, uygun varil tutucu veya kelepçeyle taşınır — çatal ucuna alınan varil devrilmeye açık bir yüktür; IBC tank paletli yapısıyla çatala uygundur ama içindeki sıvının hareketi, dolu tankta ağırlık merkezini taşıma sırasında oynatır ve hız düşürmeyi zorunlu kılar. İkincisi kimyasal ayrıştırmadır: birbiriyle tehlikeli tepkimeye girebilecek madde sınıfları aynı istif alanında yan yana konmaz ve bu ayrım, tehlikeli madde taşımacılığı kurallarının temel maddelerindendir. Forklift operatörü etiket okuyabilmeli, yükü hangi bölgeye koyacağını bilmelidir; 'boş yere koy' talimatı, bu sahalarda geçerli bir talimat değildir.",
            },
            {
                baslik: "Sızıntı ve dökülme anı: makinenin ilk yapacağı şey durmaktır",
                metin:
                    "Kimyasal saha elleçlemesinde en kritik senaryo yükün düşmesi değil, düşen yükün içeriğidir. Yırtılan big-bag, delinen varil veya sızdıran IBC, hem zemini kayganlaştırır hem ortamı buhar açısından değiştirir. Sahada uygulanan doğru refleks tektir: makine durur, operatör motoru kapatır, alanı terk eder ve müdahaleyi eğitimli ekip devralır. Forkliftle temizlik yapma, sızıntının üzerinden geçme veya dökülen yükü kaldırmaya çalışma girişimleri, olayın büyüdüğü noktadır. Bu refleks, teslimat günü verdiğimiz saha brifingine tesisin acil durum planıyla birlikte işlenir; makine operatörünün bilmesi gereken şey kimyanın kendisi değil, hangi anda dokunmayacağıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha bölgesine göre makine ve izin gereksinimi",
                paragraflar: [
                    "Aşağıdaki tablo, petrokimya ve rafineri sahalarında forklift planlamasının çerçevesini özetler. Bölge tanımları tesisin kendi patlamadan korunma dokümanından okunur; tablo, kiralama görüşmesinde hangi soruların sorulacağını gösterir.",
                ],
                tablo: {
                    basliklar: ["Alan", "Tipik iş", "Makine gereksinimi", "Evrak / izin"],
                    satirlar: [
                        ["Sınıflandırılmış proses bölgesi", "Ünite çevresi malzeme taşıma", "Patlayıcı ortama uygun sertifikalı makine", "Çalışma izni + bölge onayı"],
                        ["Tampon / sınır alanı", "Yük devri, ara istif", "Standart makine (sınırı geçmez)", "Saha giriş izni"],
                        ["Kimyasal ambar", "Varil, IBC, torba elleçleme", "Uygun ataşman, ayrıştırmalı istif", "Tehlikeli madde istif planı"],
                        ["Granül / big-bag sahası", "Torba yükleme, dorse besleme", "Big-bag aparatı, orta tonaj", "Saha giriş izni"],
                        ["Sevkiyat ve tartı", "Araç yükleme, dorse dizimi", "2,5 – 3 ton, sideshift", "Araç giriş ve tartı kaydı"],
                    ],
                },
            },
            {
                baslik: "Duruş ve bakım dönemleri: sahanın en yoğun elleçleme haftaları",
                paragraflar: [
                    "Proses tesislerinde planlı duruş dönemleri, üretimin durduğu ama sahanın en kalabalık olduğu haftalardır: bakım ekipleri, yüklenici firmalar, iskele malzemesi, yedek parça, katalizör ve ekipman aynı anda sahaya akar. Elleçleme ihtiyacı bu dönemde olağan seviyenin çok üzerine çıkar ve kiralık makine talebi de aynı takvimde yığılır. Duruş planlaması yapılırken forklift ihtiyacının haftalar öncesinden bağlanması, bölgedeki bütün tesislerin benzer takvimlerle çalıştığı düşünüldüğünde bir tercih değil zorunluluktur.",
                    "Duruşun ikinci özelliği, sahaya çok sayıda yüklenici personelin girmesidir. Saha trafiği yoğunlaşırken makine sayısı da arttığı için, duruş dönemi kaza istatistiğinin kabardığı dönemdir. Uyguladığımız pratik, duruş için verilen her makinenin rota ve park alanının önceden belirlenmesi ve operatörlerin duruş oryantasyonuna tesis ekibiyle birlikte alınmasıdır. Kalabalık sahada disiplin, makine özelliğinden daha belirleyicidir.",
                ],
            },
            {
                baslik: "Kiralık makinenin sahaya uygunluk dosyası",
                paragraflar: [
                    "Petrokimya sahasına makine vermek, anahtarı teslim etmekten ibaret değildir; makinenin bir uygunluk dosyasıyla gelmesi beklenir. Bu dosyada tipik olarak iş ekipmanları mevzuatı uyarınca yapılmış periyodik kontrol raporu, bakım kayıtları, varsa patlayıcı ortam uygunluk belgeleri, operatörün mesleki yeterlilik belgesi ve iş güvenliği eğitim kayıtları bulunur. Tesisin İSG birimi bu dosyayı giriş öncesinde inceler ve eksik evrak, makinenin kapıdan dönmesi anlamına gelir.",
                    "Dosyanın güncelliği de dönem içinde takip edilir: kiralama süresi periyodik kontrol tarihini aşıyorsa yenileme takvimi baştan planlanır. Uzun süreli sahalarda bunu kendi takvimimizde izler ve kontrol tarihinden önce yenileme yaparız; tesisin bu takibi hatırlatmak zorunda kalması, bizim tarafımızda bir eksikliktir. Sözleşme görüşmesinde dosya içeriğini kalem kalem gösterir, tesisin ek istediği belgeleri listeye ekleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamızda patlayıcı ortam bölgeleri var; standart forklift kesinlikle giremez mi?",
                cevap:
                    "Sınıflandırılmış bölgeye giremez — bu, esnetilebilecek bir uygulama değildir. Standart forklift, egzoz sıcaklığı, sıcak yüzeyleri ve kıvılcım üretebilen elektrik aksamıyla tutuşturucu kaynak niteliği taşır; yanıcı gaz veya buharın bulunabildiği bir alanda bu, doğrudan patlama riskidir. Bölgeye girecek makinenin patlayıcı ortama uygun sertifikalı olması gerekir ve bu koruma, mevcut makineye sonradan eklenen bir donanım değil, makinenin tasarım ve belgelendirme düzeyidir. Bölge dışındaki alanlarda standart makine sorunsuz çalışır. Doğru yaklaşım, tesisin patlamadan korunma dokümanındaki bölge haritasını birlikte incelemek ve işi sınırda bölmektir. Haritanızı paylaşın; hangi noktaya hangi sınıf makinenin gireceğini birlikte çizelim.",
            },
            {
                soru: "Sertifikalı makine maliyeti yüksek; işi bölmek gerçekten çalışır mı?",
                cevap:
                    "Çalışır ve sahalarda en yaygın uygulanan çözüm budur: yük, standart makineyle sınıflandırılmış bölgenin dışındaki tampon alana kadar getirilir, oradan içeri uygun donanımlı makineyle veya elleçleme gerektirmeyen yöntemlerle alınır. Böylece sertifikalı makine yalnız gerçekten gerekli olan kısa mesafede çalışır ve maliyet ciddi biçimde düşer. Modelin işlemesi için tampon alanın gerçekten tanımlı olması şarttır — fiziken işaretlenmiş, iki-üç yüklük tamponu olan, iki makinenin birbirini beklemeyeceği bir alan. Tampon yoksa iki makine aynı noktada buluşmak zorunda kalır ve kazanılan maliyet, kaybedilen zamana gider. Saha yerleşiminizi görelim; tampon alanı ve iş bölme noktasını yerinde belirleyelim.",
            },
            {
                soru: "Kimyasal ambarımızda varilleri çatalla taşıyoruz; bu ne kadar riskli?",
                cevap:
                    "Kabul edilebilir bir yöntem değil. Varil, silindirik gövdesi nedeniyle çatal üzerinde noktasal temasla durur; fren ve dönüşte yuvarlanmaya, kayarak düşmeye açıktır ve düşen bir kimyasal varilin sonucu, kırılan bir palet değil sızıntıdır. Doğru çözüm varil tutucu veya varil kelepçesidir; döndürme gerektiren boşaltma işlerinde döndürmeli varil ataşmanı kullanılır. IBC tanklarda ise paletli yapı çatala uygundur ama dolu tanktaki sıvı hareketi ağırlık merkezini taşıma sırasında oynattığı için hız düşürülür ve ani manevradan kaçınılır. Varil çapı, dolu ağırlığı ve taşıma yöntemini iletin; ataşman ve tonaj eşleşmesini kapasite payı bırakarak birlikte kuralım.",
            },
            {
                soru: "Kiralık makineyi sahaya sokarken hangi evrak isteniyor?",
                cevap:
                    "Tesisten tesise ayrıntısı değişse de omurga aynıdır: makinenin iş ekipmanları mevzuatı uyarınca yapılmış periyodik kontrol raporu, bakım kayıtları, sınıflandırılmış bölgeye girecekse patlayıcı ortam uygunluk belgeleri, operatörün mesleki yeterlilik belgesi ve iş güvenliği eğitim kayıtları. Bunlara tesisin kendi saha giriş izni ve oryantasyon kaydı eklenir. Bu dosyanın son dakikada toplanması, sahaya giriş gününün ertelenmesinin en yaygın nedenidir — ve kapıda bekleyen makinenin kirası işlemeye devam eder. Bu yüzden kiralamayı teslim tarihine değil evrak tarihine göre planlarız. Tesisinizin giriş kontrol listesini paylaşın; dosyayı teslimattan önce eksiksiz hazırlayalım.",
            },
            {
                soru: "Planlı duruş dönemimiz için ne kadar önceden makine ayırtmalıyız?",
                cevap:
                    "Duruş takvimi netleştiği anda — çünkü duruş, sahanın üretimi durmuş ama en kalabalık olduğu dönemidir ve elleçleme ihtiyacı olağan seviyenin belirgin üzerine çıkar. Bakım ekipleri, yüklenici firmalar, iskele malzemesi, yedek parça ve ekipman aynı haftalarda sahaya akar; üstelik bölgedeki tesisler benzer takvimlerle çalıştığı için makine talebi aynı günlere yığılır. Rezervasyonu duruş tarihine yakın bırakmak, hem sınıf hem sayı bakımından esnekliği yok eder. Ayrıca duruş için verilen makinelerin rota ve park alanlarının önceden belirlenmesini, operatörlerin duruş oryantasyonuna tesis ekibiyle birlikte alınmasını öneririz. Duruş kapsamınızı ve tahmini malzeme akışını paylaşın; makine planını duruş programına göre kuralım.",
            },
            {
                soru: "Sahada sızıntı olursa operatörümüz ne yapmalı?",
                cevap:
                    "Tek doğru refleks vardır ve öğretilmesi kolaydır: makineyi durdurmak, motoru kapatmak, alanı terk etmek ve durumu tesisin acil durum hattına bildirmek. Sızıntının üzerinden geçmek, dökülen yükü kaldırmaya çalışmak veya forkliftle temizlik yapmak, olayın büyüdüğü noktadır — yırtılan big-bag ya da delinen varil hem zemini kayganlaştırır hem ortamın buhar içeriğini değiştirir ve makine, o ortamda tutuşturucu kaynak hâline gelebilir. Operatörün bilmesi gereken şey kimyasalın kendisi değil, hangi anda dokunmayacağıdır. Bu refleks, teslimat günü verdiğimiz saha brifingine tesisinizin acil durum planı ve toplanma noktalarıyla birlikte işlenir; brifingi İSG biriminizle birlikte vermeyi tercih ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aliağa'nın petrokimya ve rafineri sanayisi barındırdığı kamuya açık bilgidir; patlayıcı ortam bölge sınıflandırması ve ekipman uygunluğu, iş ekipmanlarında periyodik kontrol zorunluluğu, tehlikeli madde ayrıştırma ilkesi ve izinli çalışma sistemi Türkiye mevzuatı ile sektör standardına dayanır; sınırda iş bölme, uygunluk dosyası ve duruş planlaması firma pratiğimizdir. Tesis adı, bölge numarası ve sayısal iddia kullanılmamıştır.",
    },
};
