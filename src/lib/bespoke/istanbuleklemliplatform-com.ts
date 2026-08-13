// ═══════════════════════════════════════════════════════════════════════════
// istanbuleklemliplatform.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: GÖKDELEN + LİMAN TESİSİ İKİLİSİ. İstanbul'un yüksek kule bölgesi
// (Levent-Maslak finans/ofis kuleleri, Ataşehir finans merkezi) cephe ve kule
// eteği işleri ile liman tesislerinin (konteyner terminali çevresi, ardiye ve
// depolama sahaları — TERSANE DEĞİL) yüksek yapı bakımını aynı domain
// kimliğinde, iki yaka lojistiğiyle bağlayarak anlatır.
//
// ⚠️ İSTANBUL AİLESİNDEKİ DİĞER DOSYALARLA ÇAKIŞMA YASAK:
//   - istanbulplatformkiralama-net.ts: Tuzla TERSANE/gemi inşa dünyası (kızak,
//     kuru havuz, blok montaj). BU dosya tersaneye hiç girmez; liman tesisi
//     derken KONTEYNER TERMİNALİ ve ardiye/depolama sahasını kasteder.
//   - platformistanbul-net.ts: İkitelli/Başakşehir OSB hub dağıtım modeli.
//     BU dosya OSB anlatmaz; finans/ofis kule cephesi ve liman terminali.
//   - istanbul-platform-com.ts (fiyat şeffaflığı), istanbuldaplatform-com.ts
//     (kurumsal proje), istanbulplatforms-com.ts (kontrat/SLA): farklı iş
//     modeli eksenleri, bu dosya onlara değinmez.
//
// Bilgi kuralı: Levent/Maslak'ın finans-ofis kule bölgesi olması, Ataşehir'in
// resmi finans merkezi projesi olması ve Ambarlı/Haydarpaşa'nın liman bölgesi
// olması kamuya açık coğrafi/kentsel gerçeklerdir. Tesis adı, şirket adı,
// kapasite rakamı UYDURULMAMIŞTIR — genel geçer terminal/cephe kavramları
// kullanılmıştır.
//
// Simetri: giriş (tek uzun paragraf) → 5 madde → 3 ek bölüm (ilkinde tablo)
// → 6 uzun SSS → kaynak. Hedef ~1000-1200 kelime/sayfa.
// Yazım: 2026-08-13.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ISTANBULEKLEMLIPLATFORM_COM: Record<string, BespokeIcerik> = {
    "bolge:levent": {
        h1: "Levent'te Gökdelen Cephesi ve Kule Eteğinde Eklemli Platform Kiralama",
        giris:
            "Levent'in silüeti, İstanbul'un finans ve holding merkezlerinin dikey biçimde art arda sıralanmasından oluşur; cam cepheli kuleler, alışveriş-ofis kompleksleri ve yer altı otoparklarının üzerine oturan meydanlar birbirine geçmiş bir doku kurar. Bu dokuda yüksekte çalışma, tek katlı bir fabrika holünden çok farklı bir problemdir: kule zemin katının önünde genellikle dar bir servis şeridi, üstünde ise onlarca kat boyunca kesintisiz uzanan bir cam-alüminyum kaplama vardır ve bu kaplamanın herhangi bir noktasındaki conta değişimi, iklimlendirme menfezi bakımı ya da tabela montajı, sepetin o dar şeritten kuleye doğru güvenli bir açıyla yaklaşmasını gerektirir. Eklemli platform bu iş için makaslı sınıftan üstündür çünkü bomun kırılabilir yapısı, sepedi kule cephesinin altına değil önüne, istenen açıyla konumlandırabilir; kule eteğindeki yaya geçişleri, taksi cepleri ve acil çıkış kapıları kapatılmadan çalışma sürdürülebilir. Levent'te iş genellikle bina yönetimi veya cephe bakım yüklenicisi üzerinden gelir, saha ise bina güvenliğinin, yaya trafiğinin ve giriş-çıkış saatlerinin ortak paydasında kurgulanır. Bu sayfa, Levent'in kule yoğun dokusunda eklemli platform kiralamanın nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Dar servis şeridinden kule cephesine yaklaşım",
                metin:
                    "Levent kulelerinin çoğunda zemin kat ile kaldırım arasında araç geçişine kapalı, yalnızca servis ve acil müdahale için ayrılmış dar bir şerit bulunur. Makine bu şeride girmeden önce bina yönetimiyle birlikte zemin yükü kontrol edilir — altta yer altı otoparkı veya teknik galeri varsa taşıma kapasitesi net değilse makine oraya park edilmez, bom açıklığı artırılarak daha uzak ve güvenli bir noktadan çalışılır. Şeridin dar olması, makine genişliğinin kuleye özel olarak keşifte ölçülmesini de zorunlu kılar; standart bir dizel eklemli çoğu zaman sığmaz, dar gövdeli elektrikli/hibrit sınıf tercih edilir.",
            },
            {
                baslik: "Cam-alüminyum cephe bakımında sepet hassasiyeti",
                metin:
                    "Kule cephesi genellikle gerilmiş cam panellerden oluşur ve sepedin cepheye teması, en ufak bir çarpmada dahi maliyeti yüksek bir hasara dönüşebilir. Operatör bu yüzden cepheye son metrede iterek değil süzülerek yaklaşır; sepet kenarına yumuşak tamponlar takılır ve rüzgâr hızı belli bir eşiği geçtiğinde cepheye yakın çalışma durdurulur çünkü yüksek kattaki rüzgâr yükü sepedi beklenenden fazla sallayabilir. Cam değişimi gibi ağırlık taşınan işlerde sepet kapasitesi malzeme ağırlığına göre baştan hesaplanır, işin ortasında kapasite aşımı riske girilmez.",
            },
            {
                baslik: "Bina güvenliği ve yaya trafiğiyle eşgüdüm",
                metin:
                    "Levent kuleleri gündüz saatlerinde yoğun yaya ve ziyaretçi trafiğine sahiptir; sepet altı çalışma alanı bu yüzden şeritleme ve yönlendirme levhalarıyla ayrılır, bina güvenliği ekibiyle çalışma saatleri önceden koordine edilir. Ana giriş cephesindeki işler çoğunlukla mesai dışı — sabah erken veya akşam sonrası — pencerede yapılır; yan cephe ve otopark girişi gibi daha az yoğun noktalarda gündüz çalışmaya izin verilebilir. Bu ayrım, işin sözleşme aşamasında bina yönetim planından öğrenilir ve kiralama takvimine yazılır.",
            },
            {
                baslik: "Kule eteğindeki teknik galeri ve menfez erişimi",
                metin:
                    "Kulenin ilk birkaç katı genellikle teknik galeri, iklimlendirme menfezi ve yangın söndürme hattı gibi ekipmanın toplandığı bir kuşaktır; bu kuşağa erişim hem cephe hem servis şeridi tarafından mümkün olabilir. Menfez bakımı gibi kısa süreli ama sık tekrarlanan işlerde makinenin her seferinde yeniden konumlandırılması yerine, bina yönetimiyle belirlenen sabit bir bekleme noktasından günlük iş listesine göre hareket edilmesi tercih edilir; bu, hem trafik kesintisini azaltır hem operatörün güzergâhını standartlaştırır.",
            },
            {
                baslik: "Gece ve hafta sonu çalışma pencereleri",
                metin:
                    "Ana cephe ve giriş meydanı gibi görünürlüğü yüksek noktalarda iş genellikle gece veya hafta sonu saatlerine kaydırılır; bu saatlerde yaya yoğunluğu düşer ama aydınlatma ihtiyacı artar. Sepede taşınabilir aydınlatma eklenir, gece vardiyasında çalışan operatör için bina güvenliğiyle ayrı bir giriş-çıkış protokolü kurulur ve akülü makinelerde vardiya öncesi tam şarj şartı aranır çünkü gece saatlerinde şarj noktasına ulaşmak gündüze göre daha zordur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Levent'te iş tipine göre erişim ihtiyacı",
                paragraflar: [
                    "Levent'teki kule bakım işleri birbirinden oldukça farklı erişim profilleri gerektirir; aşağıdaki tablo en sık karşılaşılan iş tiplerini ve bunlara uygun yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Erişim zorluğu", "Uygun makine sınıfı", "Zaman penceresi"],
                    satirlar: [
                        ["Cam panel değişimi", "Dar şerit, hassas temas", "Elektrikli/hibrit eklemli", "Mesai dışı"],
                        ["Tabela-logo montajı", "Yüksek kat, görünür cephe", "Teleskopik bomlu", "Gece"],
                        ["Menfez-klima bakımı", "Kule eteği, tekrarlı iş", "Kompakt eklemli", "Gündüz (yan cephe)"],
                        ["Cephe temizliği", "Geniş yüzey, rüzgâr riski", "Eklemli + halat sistemi karma", "Rüzgârsız pencere"],
                        ["Acil aydınlatma tamiri", "Kısa süreli, plansız", "Kompakt akülü makaslı/eklemli", "Talep anında"],
                    ],
                },
            },
            {
                baslik: "Bina yönetimiyle çalışma izni süreci",
                paragraflar: [
                    "Levent'teki kuleler neredeyse istisnasız profesyonel bir bina yönetimi tarafından işletilir ve dışarıdan gelen her ekipman, o yönetimin kendi güvenlik-erişim onayından geçer. Süreç genellikle şu sırayla ilerler: cephe yükleniciniz veya sizin adınıza iş tanımı ve makine ölçüleri bina yönetimine iletilir, zemin yükü ve geçiş genişliği teyit edilir, çalışma saatleri ve güvenlik eskortu netleşir. Bu onay süresi bina büyüklüğüne göre birkaç günü bulabilir; kiralama planına bu süre baştan eklenmezse makine sahaya zamanında girse dahi işe başlayamaz.",
                    "Onay sürecinin dokümantasyon tarafında bizim payımıza düşen kısım nettir: makine periyodik kontrol raporu, operatör yeterlilik belgesi ve sigorta bilgisi bina yönetimine önceden teslim edilir. Bu evrakı işin başında değil, teklif aşamasında hazırlamak, onay süresini kısaltan en pratik adımdır.",
                ],
            },
            {
                baslik: "Nakliye ve park kısıtlarının maliyete etkisi",
                paragraflar: [
                    "Levent'in yoğun trafik ve kısıtlı park düzeni, makinenin sahaya giriş-çıkış saatini de şekillendirir; büyük tekerlekli platformların gündüz trafiğinde kuleye ulaştırılması hem süre hem risk açısından verimsizdir, bu yüzden nakliye çoğunlukla erken sabah veya gece saatine planlanır. Bu planlama bir maliyet kalemidir ama gözden kaçırıldığında daha büyük bir maliyete dönüşür — gündüz trafiğinde saatlerce bekleyen bir TIR'ın süresi de, sürücünün süresi de faturaya yansır.",
                    "Kompakt gövdeli elektrikli makineler, hem dar servis şeridine sığması hem de daha küçük araçla taşınabilmesi nedeniyle Levent'teki işlerde çoğu zaman ilk tercih olur; teleskopik bomlu büyük sınıf ancak yüksekliğin veya erişim mesafesinin kompakt sınıfı aştığı istisnai işlerde devreye girer.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kule önünde kaldırım ve yaya geçişi var; makineyi oraya nasıl konumlandırıyorsunuz?",
                cevap:
                    "Kaldırım ve yaya geçişi genel kullanım alanı olduğu için önce ilçe belediyesinden veya bina yönetiminin yetkili olduğu bölümden geçici işgaliye/izin alınır; makine bu izinle tanımlanan sınırlar içinde, yaya geçişini tamamen kapatmayacak şekilde konumlandırılır. Geçiş daraltılacaksa yönlendirme levhası ve trafik önlemi eklenir, mümkünse çalışma saatleri yaya yoğunluğunun düştüğü erken sabah veya akşam sonrasına kaydırılır. Kaldırımın altında teknik galeri veya metro bağlantısı varsa, zemin yükü ayrıca bina yönetiminden teyit edilmeden makine oraya asla park edilmez.",
            },
            {
                soru: "Camlı cephede sepet camlara değerse ne olur, sorumluluk kimde?",
                cevap:
                    "Bu risk baştan azaltılır: sepet kenarına yumuşak tampon takılır, operatör cepheye son metrede yavaşlayarak yaklaşır ve rüzgâr belli bir hızı geçtiğinde cepheye yakın çalışma durdurulur. Buna rağmen bir temas hasarı oluşursa, kiralama sözleşmesindeki sorumluluk maddesi ve makine/operatör sigortası devreye girer; hangi tarafın kusurlu olduğu (makine arızası, operatör hatası, dış etken) olay tutanağıyla belirlenir. Riski en aza indiren en pratik önlem, hassas cephe işlerinde deneyimli operatör atamak ve rüzgâr sınırına titizlikle uymaktır.",
            },
            {
                soru: "Bina yönetimi gece çalışmaya izin veriyor ama gürültü şikayeti olur mu diye tereddütlüyüz?",
                cevap:
                    "Elektrikli ve hibrit eklemli platformlar dizel sınıfa göre belirgin şekilde sessiz çalışır ve gece işlerinde bu yüzden öncelikli tercih edilir; buna rağmen bom hareketindeki hidrolik pompa sesi tamamen sıfır değildir. Şikayet riskini azaltmak için bina yönetimiyle birlikte komşu bina ve konut bloklarına önceden bilgi verilir, çalışma saati mümkünse gürültüye en az duyarlı saat aralığına (genellikle gece yarısından önceki erken saatler) sıkıştırılır. Sürekli gürültü şikayeti alan bir proje, gündüz düşük yoğunluklu saatlere kaydırılarak yeniden planlanabilir.",
            },
            {
                soru: "Dar servis şeridine standart eklemli platform sığmıyor, alternatif ne?",
                cevap:
                    "Bu Levent'te sık karşılaşılan bir durumdur ve çözüm genellikle gövde genişliği daha dar olan kompakt elektrikli/hibrit eklemli sınıfa geçmektir; bu makineler daha az yer kaplar ama bom erişimi büyük sınıfa yakın kalabilir. Şerit gerçekten yetersizse ikinci seçenek, makineyi şeride sokmadan bina yönetiminin izin verdiği en yakın alternatif noktadan (örneğin arka cephe veya otopark rampası) bom açıklığını artırarak çalışmaktır. Her iki seçenek de keşifte ölçüm yapılmadan kesinleştirilmez; şerit genişliği santimetre hassasiyetinde bilinmeden makine sahaya yönlendirilmez.",
            },
            {
                soru: "Cephe işi birden fazla günü buluyor, makine gece kule önünde bekleyebilir mi?",
                cevap:
                    "Bina yönetiminin onayıyla mümkündür ve çok günlü işlerde her gün nakliye yerine makinenin sahada güvenli bir noktada bekletilmesi hem daha ekonomik hem daha pratiktir. Bekleme noktası, yaya trafiğini engellemeyecek ve makineye yetkisiz erişimi önleyecek şekilde belirlenir; anahtar kutusu kilitlenir, acil durdurma devre dışı bırakılır ve bina güvenliğine bekleme yeri bilgisi verilir. Hava durumu kötüleşirse (fırtına, don) makinenin park açısı ve fren durumu ayrıca kontrol edilir.",
            },
            {
                soru: "Kule cephesinde acil bir aydınlatma arızası çıktı, aynı gün müdahale mümkün mü?",
                cevap:
                    "Kompakt sınıf makineler için mümkündür çünkü bu tip acil işlerde genellikle büyük teleskopik ekipman değil, hızlı konumlandırılabilen kompakt eklemli veya makaslı yeterlidir. Aynı gün müdahalede zaman kaybettiren adım nakliye değil bina yönetiminin acil giriş onayıdır; bu yüzden sürekli hizmet aldığımız kulelerde önceden tanımlanmış bir 'acil erişim' prosedürü kurulur — bilinen operatör, bilinen güvenlik iletişim hattı ve önceden onaylı çalışma saati aralığı. Bu altyapı olmadan gelen ilk kez talep, onay süresi nedeniyle aynı gün yetişmeyebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Levent'in İstanbul'un başlıca finans/ofis kule bölgesi olduğu, kulelerin profesyonel bina yönetimi tarafından işletildiği ve bölgenin yoğun yaya-araç trafiğine sahip olduğu kamuya açık kentsel bilgidir; erişim, izin ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "bolge:maslak": {
        h1: "Maslak Plaza ve Ofis Kulelerinde Eklemli Platform Kiralama",
        giris:
            "Maslak, Levent'in finans ağırlıklı dokusundan farklı olarak daha çok kurumsal genel merkez, plaza ve karma ofis-rezidans projelerinden oluşan geniş ve yayılmış bir kule kuşağıdır; binalar birbirine Levent kadar bitişik değildir, aralarında servis yolu, otopark girişi ve yeşil alan bırakılmıştır. Bu farklı doku, erişim planlamasını da değiştirir: Maslak'ta makine genellikle bina cephesine Levent'teki kadar dar bir şeritten değil, daha geniş bir servis yolundan yaklaşır, ama plaza sayısının fazlalığı ve bazı projelerin hâlâ inşaat-yenileme aşamasında olması farklı bir karmaşıklık getirir — aynı gün içinde bir plazanın cephe bakımı, komşu plazanın yeni kat inşaatı ve üçüncü bir binanın peyzaj-çevre düzenlemesi aynı bölgede eş zamanlı yürüyebilir. Eklemli platform, plaza girişlerindeki saçak-tente montajından üst kat cam değişimine, otopark rampası üzerindeki aydınlatma bakımından bina cephesindeki kurumsal logo değişimine kadar geniş bir iş yelpazesinde kullanılır. Bu sayfa, Maslak'ın plaza yoğun ve göreli olarak daha açık dokusunda eklemli platform kiralamanın nasıl kurgulandığını anlatır.",
        maddeler: [
            {
                baslik: "Plazalar arası servis yolunda makine trafiği",
                metin:
                    "Maslak'ta binalar arasında bırakılan servis yolları, Levent'e göre daha geniş olsa da aynı yolu birden fazla plazanın tedarik, çöp toplama ve bakım aracıyla paylaşır. Erişim makinesi bu yola girerken bina yönetimlerinin ortak kullandığı bir trafik takvimi varsa ona uyulur; yoksa iş saatleri, yoğun tedarik saatlerinin (genellikle sabah erken) dışına planlanır. Yolun bir kısmı geçici olarak kapatılacaksa komşu binaların da bilgilendirilmesi gerekir çünkü aynı yol onların da servis güzergâhıdır.",
            },
            {
                baslik: "Karma ofis-rezidans projelerinde erişim ayrımı",
                metin:
                    "Bazı Maslak projeleri hem ofis katlarını hem konut bloklarını aynı kompleks içinde barındırır; bu ikisi farklı erişim kurallarına tabidir. Ofis bloğunda çalışma saatleri mesai bandına, konut bloğunda ise sakinlerin gündelik yaşam ritmine göre kısıtlanır — konut cephesinde sabah erken veya gece geç saatte çalışmak gürültü şikayetine yol açabilir. Aynı komplekste iki farklı blok için iki farklı zaman penceresi tanımlanması, Maslak'taki karma projelerde standart hâle gelmiştir.",
            },
            {
                baslik: "Yeni inşaat ile mevcut bina arasındaki sınır",
                metin:
                    "Maslak'ta bazı parseller hâlâ inşaat hâlindeyken bitişiğindeki bina zaten kullanımdadır; bu iki alan arasındaki sınır genellikle geçici bariyerle çizilir ama erişim makinesinin bomu bu sınırı bazen aşabilir çünkü hedef nokta sınıra yakındır. Böyle durumlarda iş, iki tarafın da (mevcut bina yönetimi ve inşaat şantiye şefliği) ortak onayıyla planlanır; şantiye tarafında ayrıca vinç veya kule kreni gibi başka yüksek ekipman varsa çalışma saatleri çakışmayacak şekilde ayrıştırılır.",
            },
            {
                baslik: "Otopark rampası ve zemin altı katlarda erişim",
                metin:
                    "Maslak plazalarının çoğunda çok katlı otopark, zemin üstü değil zemin altındadır ve rampa girişleri, ana cepheden farklı bir yüzeyde konumlanır. Rampa çevresindeki aydınlatma, havalandırma bacası ve yönlendirme tabelası bakımı, ana cepheden ayrı bir erişim planı gerektirir — rampa eğimi makinenin denge sınırlarını zorlayabileceği için, eğimli zeminde çalışma öncesi makinenin o eğim için onaylı olup olmadığı kontrol edilir.",
            },
            {
                baslik: "Kurumsal logo ve tabela değişiminde hassasiyet",
                metin:
                    "Maslak, çok sayıda şirketin genel merkez tabelasını taşıdığı için logo/tabela değişimi burada sık karşılaşılan bir iş kalemidir. Bu işler genellikle marka lansmanı veya şirket birleşmesi gibi zamanlaması sıkı bir takvime bağlı olaylarla örtüşür; kiralama planı bu yüzden yalnızca teknik değil, takvimsel bir hassasiyet de taşır — belirlenen tarihte makine sahada olmazsa iş yalnızca ertelenmez, kurumsal bir açılış programını da geciktirebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Maslak'ta bina tipine göre erişim planı",
                paragraflar: [
                    "Maslak'ın karma dokusu, bina tipine göre farklı erişim yaklaşımları gerektirir; aşağıdaki tablo bu ayrımı özetler.",
                ],
                tablo: {
                    basliklar: ["Bina tipi", "Erişim özelliği", "Kısıt", "Tercih edilen sınıf"],
                    satirlar: [
                        ["Kurumsal plaza (ofis)", "Geniş servis yolu", "Mesai saati dışı tercih", "Teleskopik/eklemli karma"],
                        ["Karma ofis-rezidans", "İki ayrı erişim kuralı", "Konut tarafı gürültü hassasiyeti", "Elektrikli eklemli"],
                        ["Yeni inşaat bitişiği", "Şantiye sınırı yakın", "Çift onay gerekir", "Duruma göre değişken"],
                        ["Otopark rampalı yapı", "Eğimli zemin", "Makine eğim onayı şart", "Denge sertifikalı model"],
                        ["Genel merkez tabelası", "Yüksek cephe, sıkı takvim", "Tarih kaymasına toleranssız", "Yüksek erişimli teleskopik bomlu"],
                    ],
                },
            },
            {
                baslik: "Plazalar arası ortak alan kullanım kuralları",
                paragraflar: [
                    "Maslak'taki çoğu plaza, aynı imar planı içinde geliştirilmiş komşu binalarla ortak servis yolu, yeşil alan ve bazen ortak otopark girişini paylaşır. Bu ortaklık, tek bir binanın yönetiminden izin almanın yeterli olmadığı anlamına gelir — ortak alanı kullanan tüm binaların yönetimlerinin bilgilendirilmesi veya bölgeyi yöneten site yönetim kurulunun onayı gerekebilir. Bu koordinasyon adımı atlanırsa, iş günü ortasında komşu binadan gelen bir itirazla çalışma durdurulabilir.",
                    "Pratik çözüm, keşif aşamasında yalnızca hedef binayla değil, servis yolunu paylaşan komşu binalarla da iletişime geçmektir; bu ekstra adım bir günü bulsa da, saha ortasında yaşanacak bir kesintiden çok daha ucuzdur.",
                ],
            },
            {
                baslik: "Sıkı takvime bağlı işlerde yedekleme mantığı",
                paragraflar: [
                    "Logo değişimi veya lansman öncesi cephe hazırlığı gibi tarihi kesin işlerde, tek makineye bağlı kalmak risklidir — arıza, trafik veya hava koşulu tarihi kaydırabilir. Bu tip işlerde ikinci bir makinenin yedek olarak yakın bir depoda hazır tutulması veya aynı gün alternatif bir modelin devreye alınabileceği bir tedarik planı önerilir. Yedekleme maliyeti, kaçırılan bir lansman tarihinin kurumsal maliyetiyle kıyaslandığında küçük kalır.",
                    "Bu yaklaşım özellikle birden fazla şirketin aynı hafta içinde tabela/logo değişimi talep ettiği dönemlerde (örneğin yıl sonu kurumsal yenilemeleri) önem kazanır; talebin yığıldığı haftalarda makine planı erken kesinleştirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Plazamızın otoparkı zemin altında, makineyi rampadan indirmek güvenli mi?",
                cevap:
                    "Rampanın eğim açısı önce ölçülür ve makinenin teknik verisinde belirtilen maksimum eğim toleransı bu ölçüyle karşılaştırılır; tolerans aşılıyorsa makine rampadan indirilmez, iş zemin üstünden bom açıklığıyla planlanır. Rampa kullanılabilir durumdaysa iniş yavaş ve kontrollü yapılır, rampa yüzeyi ıslak veya yağlıysa iş ertelenir çünkü zemin altı katlarda kayma riski zemin üstüne göre daha yüksektir. Bu kontrol her seferinde tekrarlanır; bir önceki işte sorun çıkmamış olması bir sonraki seferin güvenli olacağı anlamına gelmez.",
            },
            {
                soru: "Aynı kompleksteki ofis ve rezidans blokları için ayrı ayrı mı sözleşme yapıyoruz?",
                cevap:
                    "Zorunlu değildir — genellikle tek bir kiralama sözleşmesi altında iki blok için ayrı çalışma takvimi ve ayrı erişim kuralları tanımlanır; sözleşme tek, uygulama planı ikilidir. Bu, hem idari yükü azaltır hem de iki blok arasındaki geçişin (örneğin aynı makinenin ofis tarafında sabah, rezidans tarafında akşamüstü çalışması) tek bir lojistik akışta yönetilmesini sağlar. Blok yönetimleri farklı şirketlere aitse, her ikisinin de yazılı onayının sözleşme ekinde bulunması istenir.",
            },
            {
                soru: "Yanımızdaki parselde hâlâ inşaat var, kule vinci ile bizim makinemiz çakışır mı?",
                cevap:
                    "Çakışma riski gerçektir ve bu yüzden bitişik şantiye varsa iş planı iki tarafın da onayıyla, tercihen şantiye şefliğiyle doğrudan görüşülerek kurulur. Kule vincinin çalışma yarıçapı ve saatleri öğrenilir, bizim makinemizin bomu bu yarıçapa girecekse çalışma saatleri ayrıştırılır — aynı anda iki yüksek ekipmanın aynı hava sahasında hareket etmesine izin verilmez. Şantiye tarafında ayrıca malzeme indirme-bindirme trafiği de olabileceği için servis yolu kullanım sırası önceden belirlenir.",
            },
            {
                soru: "Logo değişimi lansman gününe yetişmezse ne olur, garantiniz var mı?",
                cevap:
                    "Kesin tarihli işlerde standart uygulamamız, riski azaltmak için işi lansmandan yeterince önceye almak ve mümkünse yedek makine/operatör planı kurmaktır; buna rağmen hava koşulu (fırtına, yıldırım riski) gibi kontrolümüz dışındaki nedenlerle erteleme olabilir ve bu durum sözleşmede mücbir sebep olarak tanımlanır. Bizim kaynaklı bir aksaklık (makine arızası, planlama hatası) söz konusuysa, alternatif makine aynı gün içinde devreye alınır; bu senaryo için sıkı takvimli işlerde önceden yedek tedarik anlaşması önerilir ve genellikle tercih edilir.",
            },
            {
                soru: "Rezidans sakinleri gece çalışmadan rahatsız oluyor, gündüz çalışma zorunlu mu?",
                cevap:
                    "Zorunlu değil ama pratikte tercih edilir — rezidans cephesinde iş, sakinlerin gündelik ritmine göre genellikle sabah 09.00-18.00 aralığına sıkıştırılır ve elektrikli sessiz makine sınıfı öncelikli seçilir. Gündüz çalışma süresi yetmiyorsa iş birkaç güne yayılır; bu, gece çalışmaya göre daha uzun sürse de şikayet ve olası site yönetimi ihtarından kaçınmanın en pratik yoludur. Site yönetimi özel olarak gece izni verirse (örneğin tatil dönemi boş bina), bu istisna yazılı onayla belgelenir.",
            },
            {
                soru: "Maslak'taki farklı plazalarda aynı hafta birden fazla işimiz var, tek makineyle mi yürüyor?",
                cevap:
                    "Plazalar birbirine yakın olduğu için tek makinenin gün içinde birkaç plaza arasında dönüşümlü çalışması mümkündür, ama bu yalnızca her plazadaki iş süresi kısa ve zaman penceresi net ise verimlidir. İşler paralel ilerlemesi gerekiyorsa (örneğin aynı gün üç ayrı binada eş zamanlı tabela montajı) tek makine yetmez, birden fazla makine planlanır. Doğru kararı vermek için haftalık iş listesi baştan paylaşılır; günlük değil haftalık planlama, Maslak'taki çok-plazalı işlerde nakliye tekrarını azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Maslak'ın kurumsal genel merkez/plaza yoğunluklu ve göreli olarak daha yayılmış bir kule bölgesi olduğu, bazı parsellerin hâlâ inşaat aşamasında bulunduğu kamuya açık kentsel bilgidir; erişim, izin ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "bolge:atasehir": {
        h1: "Ataşehir Finans Merkezi'nde Kule Cephesi ve Yüksek Yapı Bakımı",
        giris:
            "Ataşehir, İstanbul'un Anadolu yakasındaki resmi finans merkezi projesinin geliştirildiği bölgedir ve bu kimlik, bölgedeki kule stokunu Levent-Maslak'tan biraz farklı bir profile taşır: bankacılık ve finans kurumlarının kendi genel merkez binaları, yüksek güvenlik standardına sahip kompleksler ve yakın zamanda tamamlanmış modern kuleler ağırlıktadır. Güvenlik standardının yüksekliği, erişim makinesinin sahaya girişini de doğrudan etkiler — birçok finans kurumu binasında araç ve ekipman girişi, kimlik kontrolü ve önceden bildirilmiş plaka listesi gibi ek katmanlarla yönetilir; bu katmanlar atlanamaz, çünkü finans kuruluşlarının güvenlik protokolleri kendi düzenleyici çerçevelerine tabidir ve dışarıdan gelen hiçbir talep bu protokolü esnetemez. Eklemli platform burada da aynı işlevi görür — cephe bakımı, cam değişimi, kurumsal logo ve güvenlik kamerası montajı gibi işlerde sepedi hedefe erişim geometrisine göre konumlandırır — ama iş öncesi güvenlik onay süreci, Ataşehir'i planlama açısından ayrı bir kategoriye koyar. Bu sayfa, finans merkezi bölgesinde eklemli platform kiralamanın güvenlik ve zamanlama boyutlarını anlatır.",
        maddeler: [
            {
                baslik: "Finans kurumu binalarında güvenlik ön onayı",
                metin:
                    "Banka ve finans kurumu genel merkezlerinde çalışacak her ekip, işe başlamadan önce kurumun kendi güvenlik biriminden onay alır; bu onay operatör kimlik bilgisi, araç plakası, makine seri numarası ve iş tanımının önceden bildirilmesini gerektirir. Süreç bazen bir haftayı bulabilir çünkü bazı kurumlarda onay merkezi bir güvenlik biriminden geçer. Bu süre kiralama planına dahil edilmezse, makine sahaya hazır gelse dahi kapıdan içeri giremez.",
            },
            {
                baslik: "Kompleks içi ortak alan ve özel alan ayrımı",
                metin:
                    "Ataşehir'deki finans merkezi kompleksleri genellikle birden fazla kuleyi ve bu kuleler arasındaki meydan, yürüyüş yolu gibi ortak alanları içerir. Ortak alandaki bir iş (örneğin meydan aydınlatması) kompleks yönetiminin onayıyla yürürken, tek bir kulenin cephesindeki iş o kulenin kendi bina yönetiminin onayını gerektirir — iki onay makamı farklıdır ve karıştırılmamalıdır. Keşif aşamasında hangi onayın kimden alınacağı netleştirilmezse, iş günü kapıda beklemekle başlar.",
            },
            {
                baslik: "Yeni tamamlanmış kulelerde garanti dönemi hassasiyeti",
                metin:
                    "Bölgedeki bazı kuleler görece yeni tamamlandığı için hâlâ yapı garantisi kapsamındadır; garanti kapsamındaki bir cephede üçüncü taraf ekipmanla yapılacak müdahale, garantiyi etkileyebileceği gerekçesiyle yükleniciden ayrı bir yazılı onay isteyebilir. Bu durum özellikle cephe malzemesine temas eden işlerde (montaj, delme, kaplama değişimi) geçerlidir; sadece görsel kontrol veya kamera montajı gibi temassız işlerde bu ek onay genellikle aranmaz.",
            },
            {
                baslik: "Güvenlik kamerası ve erişim kontrol sistemleri montajı",
                metin:
                    "Finans binalarında güvenlik kamerası, kartlı geçiş anteni ve algılama sensörü gibi ekipmanların cephe ve tavan montajı sık talep edilen bir iş kalemidir. Bu işlerde makinenin kendisi kadar operatörün de belirli bir alana yaklaşırken dikkatli olması istenir — bazı kameraların görüş açısı ve bazı sensörlerin kapsama alanı kurumun kendi güvenlik tasarımının parçasıdır ve makine bu alanları geçici olarak bloke edebileceği için, iş süresince alternatif güvenlik önlemi (nöbetçi personel gibi) kurumun kendi prosedürüyle devreye alınabilir.",
            },
            {
                baslik: "Kompleksler arası kısa mesafede makine planlaması",
                metin:
                    "Finans merkezi bölgesindeki kuleler birbirine yakın konumlandığı için, aynı gün içinde birden fazla kompleksteki kısa süreli işler tek makineyle dönüşümlü yürütülebilir. Ancak her kompleksin ayrı güvenlik onay süreci olduğu unutulmamalı — bir kompleksten çıkıp diğerine girerken yeniden kimlik ve plaka kontrolünden geçilir, bu geçiş süresi günlük plana somut dakika olarak eklenir, aksi hâlde plan sahada gecikmeyle karşılaşır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ataşehir'de güvenlik onay süreci adımları",
                paragraflar: [
                    "Finans merkezi bölgesinde işe başlamadan önce geçilen tipik onay adımları aşağıdaki tabloda özetlenmiştir; süre kurumdan kuruma değişir ama sıralama benzerdir.",
                ],
                tablo: {
                    basliklar: ["Adım", "İçerik", "Tipik süre", "Sorumlu taraf"],
                    satirlar: [
                        ["Ön bildirim", "İş tanımı, makine ve operatör bilgisi", "1-3 iş günü", "Kiracı/yüklenici"],
                        ["Güvenlik değerlendirmesi", "Kurumun kendi güvenlik biriminde inceleme", "2-5 iş günü", "Kurum güvenlik birimi"],
                        ["Plaka-kimlik listesi", "Giriş kapısına iletilen onaylı liste", "Onay sonrası aynı gün", "Kurum güvenlik birimi"],
                        ["Saha brifingi", "Kapıda kısa güvenlik ve kural anlatımı", "İşe başlamadan önce", "Kurum güvenlik personeli"],
                        ["İş sonrası çıkış kontrolü", "Ekipman ve personel sayımı", "İş bitiminde", "Kurum güvenlik personeli"],
                    ],
                },
            },
            {
                baslik: "Kompleks yönetimi ile bina yönetimi arasındaki koordinasyon",
                paragraflar: [
                    "Birden fazla kuleyi içeren finans merkezi kompleksinde, ortak alanları yöneten bir üst kompleks yönetimi ile her kulenin kendi bina yönetimi genellikle ayrı ayrı çalışır. Bir cephe işi hem ortak alandan geçiş gerektiriyor hem tek bir kuleye özgüyse, iki onayın da eş zamanlı alınması gerekir; bunlardan biri gecikirse iş başlayamaz. Bu yüzden Ataşehir'deki işlerde keşif toplantısına mümkünse her iki tarafın temsilcisinin birlikte katılması istenir — ayrı ayrı yapılan görüşmeler, iki taraf arasında çelişen talimatlarla sonuçlanabilir.",
                    "Koordinasyonun net olduğu projelerde iş akışı sorunsuz ilerler; belirsiz kalan projelerde ise en sık yaşanan gecikme, makinenin sahaya girdiği ama hangi yönetimin son sözü söyleyeceğinin netleşmediği anlardır. Bu belirsizlik teklif aşamasında yazılı olarak çözülür.",
                ],
            },
            {
                baslik: "Garanti kapsamındaki cephelerde çalışma disiplini",
                paragraflar: [
                    "Yeni tamamlanmış bir kulede cepheye temas eden her işlem, potansiyel olarak yapı garantisini ilgilendiren bir kayıt bırakır. Bu yüzden garanti kapsamındaki binalarda çalışırken iş öncesi ve sonrası fotoğraflı durum tespiti standart hâle getirilir — cephenin hangi durumda bulunduğu, hangi noktaya dokunulduğu belgelenir. Bu belgeleme hem kiracıyı hem bizi, işten kaynaklanmayan bir hasarın sonradan işe mal edilmesine karşı korur.",
                    "Garanti dışı, yani daha eski kulelerde bu titizlik aynı düzeyde aranmasa da, biz standart uygulamayı tüm işlerde sürdürürüz; fotoğraflı kayıt, ihtilaf çıkma olasılığını en başından azaltan ucuz bir önlemdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bankanın güvenlik onayı bir hafta sürüyor, işi bu kadar önceden mi planlamalıyız?",
                cevap:
                    "Evet — özellikle ilk kez çalışılan bir kurumda bu süre gerçektir ve kiralama takvimine baştan eklenmelidir. Süreyi kısaltmanın en pratik yolu, ön bildirimi mümkün olan en erken tarihte, eksiksiz bilgiyle (operatör kimliği, araç plakası, makine seri numarası, iş tanımı) tek seferde iletmektir; eksik bilgiyle yapılan başvurular ek soru-cevap turu nedeniyle daha uzun sürer. Sürekli çalıştığımız kurumlarda bu süreç zamanla kısalır çünkü kurum bizi ve standart evrak setimizi tanır hâle gelir.",
            },
            {
                soru: "Kompleksteki ortak meydanda mı yoksa kulenin kendi cephesinde mi çalışacağımız onay sürecini değiştirir mi?",
                cevap:
                    "Evet, değiştirir — ortak alan işleri kompleks yönetiminin, kule cephesi işleri ise o kulenin kendi bina yönetiminin onayından geçer ve bu iki makam genellikle farklı kişi veya birimlerdir. İş her iki alana da taşıyorsa (örneğin meydandan cepheye bom uzatma) iki onayın birlikte alınması gerekir. Bu ayrımı keşif aşamasında netleştirmek, iş günü hangi kapıdan hangi izinle gireceğinizi bilmemek gibi pratik bir sorunu baştan önler.",
            },
            {
                soru: "Yeni kulede garanti kapsamı varken cephede delik açacak bir montaj yapabilir miyiz?",
                cevap:
                    "Yapabilirsiniz ama önce yapı yüklenicisinden veya bina yönetiminden yazılı onay alınması istenir, çünkü cepheye temas eden delme/montaj işlemi garanti şartlarını etkileyebilir. Onay alınmadan yapılan bir müdahale, ileride bir garanti talebinde kiracının aleyhine kullanılabilir. Biz bu riski bildiğimiz için, garanti kapsamındaki binalarda temaslı iş talebi geldiğinde önce bu onayın var olup olmadığını sorarız; onay yoksa işi görsel/temassız kapsamla sınırlı tutmayı öneririz.",
            },
            {
                soru: "Operatörümüz güvenlik kamerasının görüş açısına girecek, bu bir sorun mu?",
                cevap:
                    "Kısa süreli ve bildirilmiş bir çalışma için genellikle sorun değildir, ama bazı finans kurumları belirli kameraların veya sensörlerin geçici olarak devre dışı kalmasını ya da alternatif nöbetçi personel görevlendirmesini kendi güvenlik prosedürüne göre isteyebilir. Bu talep bize değil, kurumun kendi güvenlik biriminin kararına bağlıdır; biz sadece işin hangi kamera/sensör alanına gireceğini önceden bildiririz, kararı kurum verir. Bildirim yapılmadan sepedin bir güvenlik cihazının önüne girmesi, protokol ihlali sayılabilir.",
            },
            {
                soru: "Aynı gün iki farklı finans kompleksinde kısa işlerimiz var, tek makine yeter mi?",
                cevap:
                    "İş süreleri gerçekten kısa ve her iki kompleksin de güvenlik onayı önceden alınmışsa mümkündür, ama iki kompleks arasındaki geçişte yeniden kimlik-plaka kontrolünden geçileceği unutulmamalı. Bu geçiş süresi kompleksten kompleks değişir, bazı kurumlarda birkaç dakika, bazılarında yarım saati bulabilir. Günlük plan yapılırken bu geçiş süresi somut dakika olarak eklenir; eklenmezse plan sahada gecikmeyle karşılaşır ve ikinci iş günün sonuna sarkabilir.",
            },
            {
                soru: "Kurumun kendi güvenlik personeli bizim operatöre eşlik edecek mi, bu ek bir ücret mi?",
                cevap:
                    "Eşlik uygulaması kurumdan kuruma değişir; bazı finans kuruluşları hassas alanlarda çalışan her dış ekibe bir güvenlik görevlisi eşliği zorunlu tutar. Bu görevlendirmenin ücreti kuruma aittir, bizim kiralama bedelimize dahil değildir — ama eşlik süresi işin toplam süresini uzatabileceği için, bu bilgiyi keşifte öğrenip günlük plana yansıtırız. Eşlik talebi olduğunu bilmeden yapılan bir planlama, sahada beklenmedik bir gecikmeyle sonuçlanabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Ataşehir'in Türkiye'nin resmi finans merkezi projesinin geliştirildiği bölge olduğu ve finans kurumlarının yüksek güvenlik standardına sahip genel merkez binalarına sahip olduğu kamuya açık bilgidir; onay süreci ve saha koordinasyon pratikleri genel kurumsal güvenlik prosedürü mantığına dayanan firma deneyimidir.",
    },

    "bolge:istanbul-avrupa-yakasi": {
        h1: "İstanbul Avrupa Yakasında Gökdelen ve Liman Tesisi Erişim Kiralama",
        giris:
            "İstanbul'un Avrupa yakası, erişim ekipmanı açısından birbirinden çok farklı iki dünyayı aynı coğrafyada barındırır: kuzeyde Levent-Maslak hattının finans ve ofis kuleleri, batıda ise Ambarlı çevresindeki liman bölgesinin konteyner terminalleri ve ardiye-depolama tesisleri. Bu iki dünya arasında ne bina tipi ne çalışma ritmi ne de erişim mantığı örtüşür — kule cephesinde milimetrik hassasiyetle cama yaklaşan bir sepet varken, liman sahasında konteyner istifleri arasında geniş açıklıkta ve ağır yük trafiğinin ortasında çalışan bir makine vardır. Aynı domainin bu iki dünyayı birlikte anlatmasının nedeni, İstanbul'un Avrupa yakasındaki erişim talebinin gerçekte bu iki kutupta yoğunlaşmasıdır: bir yanda dikey kentin yüksek yapı bakımı, öte yanda yatay ve geniş liman sahasının yüksek raf-vinç-aydınlatma bakımı. Bu sayfa, iki farklı sahanın erişim mantığını yan yana koyarak, Avrupa yakasında iş yapan bir işletmenin hangi bölgede hangi yaklaşımı bekleyeceğini anlatır — burada anlatılan liman tesisi, gemi inşa/tersane değil, konteyner terminali ve lojistik depolama sahasıdır.",
        maddeler: [
            {
                baslik: "Kule bölgesi: dikey ve hassas erişim",
                metin:
                    "Levent-Maslak hattında iş, bir binanın belirli bir noktasına — cam panel, tabela, menfez — milimetrik hassasiyetle yaklaşmaktır. Makine dar servis şeritlerinde manevra eder, bina yönetiminin onay sürecine tabidir, çoğu zaman mesai dışı veya gece pencerelerinde çalışır. Buradaki risk, sepedin cepheye teması veya yaya trafiğine müdahaledir; sahanın kendisi dar ama öngörülebilirdir.",
            },
            {
                baslik: "Liman bölgesi: geniş ve yoğun trafikli erişim",
                metin:
                    "Ambarlı çevresindeki liman sahalarında iş tamamen farklı bir ölçekte yürür: konteyner istifleri onlarca metre uzunlukta koridorlar oluşturur, sahada sürekli hareket hâlinde konteyner taşıyıcı araçlar ve saha vinçleri bulunur. Erişim makinesi burada RTG/STS vinç rayı çevresi, aydınlatma direği, çatı kaplaması gibi yüksek yapı unsurlarına ulaşırken, öncelik sahadaki ağır araç trafiğiyle çakışmamaktır. Buradaki risk kule bölgesinden farklıdır — hassas temas değil, geniş alanda hareketli ağır araçlarla görüş hattı ve öncelik yönetimidir.",
            },
            {
                baslik: "İki bölge arasında ortak olan: izin ve koordinasyon disiplini",
                metin:
                    "Kule bölgesinde bina yönetimi onayı, liman bölgesinde ise terminal işletmecisinin saha giriş prosedürü aynı işlevi görür — dışarıdan gelen her ekipmanın sahaya adım atmadan önce yerel otoritenin kurallarına uyması. İkisinde de iş, keşifte öğrenilen kurallara göre planlanır; farkları, kule bölgesinde kuralın bina bazında, liman bölgesinde terminal bazında değişmesidir. Avrupa yakasında birden fazla terminal veya kompleksle çalışan bir işletme, her sahanın kendi kural setini ayrı ayrı öğrenmek zorundadır.",
            },
            {
                baslik: "Ambarlı liman bölgesinde çatı ve raf sistemi erişimi",
                metin:
                    "Konteyner terminali ve ardiye tesislerinde erişim ihtiyacı yalnızca vinç rayı çevresiyle sınırlı değildir; büyük depolama hangarlarının çatı kaplaması, yüksek raf sistemlerinin üst kat bakımı ve saha aydınlatma direklerinin periyodik kontrolü de düzenli talep oluşturur. Bu işlerde teleskopik bomlu sınıf, geniş açıklığı ve yüksek erişimi nedeniyle öne çıkar; sahanın açık ve rüzgâra maruz olması nedeniyle rüzgâr sınırına kule bölgesinden daha sık bakılır.",
            },
            {
                baslik: "Avrupa yakası içi lojistik: iki bölge arası makine sevkiyatı",
                metin:
                    "Levent-Maslak ile Ambarlı arasındaki mesafe, aynı günde iki farklı işe aynı makineyi yetiştirmeyi genellikle pratik kılmaz — trafik ve iş tipi farkı, ayrı makine planlamasını daha verimli hâle getirir. Bununla birlikte, haftalık iş programı iki bölgeyi de kapsıyorsa, nakliye rotası ve zamanlaması tek bir lojistik takvimde birleştirilerek boş sefer sayısı azaltılır; bu, özellikle her iki bölgede de düzenli bakım sözleşmesi olan işletmeler için maliyet avantajı sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki bölgenin erişim profili karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, Avrupa yakasındaki kule bölgesi ile liman bölgesinin erişim ihtiyacını temel farklarıyla karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Kule bölgesi (Levent-Maslak)", "Liman bölgesi (Ambarlı çevresi)"],
                    satirlar: [
                        ["Saha karakteri", "Dar, dikey, yoğun yaya", "Geniş, yatay, ağır araç trafiği"],
                        ["Onay mercii", "Bina yönetimi", "Terminal işletme birimi"],
                        ["Ana risk", "Cepheye temas, yaya güvenliği", "Ağır araçla görüş hattı çakışması"],
                        ["Tipik çalışma saati", "Mesai dışı / gece", "Vardiya arası pencere"],
                        ["Öne çıkan makine sınıfı", "Kompakt elektrikli/hibrit eklemli", "Teleskopik bomlu"],
                    ],
                },
            },
            {
                baslik: "Terminal saha giriş prosedürü",
                paragraflar: [
                    "Konteyner terminali ve büyük lojistik depolarına ekipman girişi, genellikle önceden bildirilen araç-personel listesi, saha güvenlik brifingi ve bazı durumlarda yüksek görünürlüklü kıyafet ile sınırlı hız zorunluluğu gibi şartlara bağlıdır. Bu prosedür kule bölgesindeki bina yönetimi onayına benzer bir mantıkla işler ama sahanın büyüklüğü nedeniyle giriş noktasından çalışma alanına ulaşım süresi de plana eklenir — bazı terminallerde giriş kapısından iç sahaya yürüme veya araçla geçiş mesafesi kilometrelerle ölçülür.",
                    "Bu mesafe göz ardı edildiğinde, 'sahaya girdik ama işe başlayamadık' türünden bir zaman kaybı yaşanır; iç saha ulaşım süresi, kiralama planına diğer tüm adımlar gibi somut dakika olarak eklenir.",
                ],
            },
            {
                baslik: "Rüzgâr ve hava koşulunun iki bölgede farklı etkisi",
                paragraflar: [
                    "Kule bölgesinde rüzgâr, esas olarak yüksek kattaki sepet sallanmasını ve cepheye teması etkiler; liman bölgesinde ise açık deniz kenarı konumu nedeniyle rüzgâr hem makine dengesini hem de sahadaki konteyner vinçlerinin operasyonunu etkiler. Liman tarafında rüzgâr limitleri terminalin kendi operasyon kurallarına bağlı olarak bazen bizim makine limitimizden bile önce devreye girer — terminal operasyonu belli bir rüzgâr hızında durursa, bizim işimiz de otomatik olarak durur çünkü saha genel güvenlik moduna geçer.",
                    "Bu yüzden liman bölgesindeki işlerde hava durumu takibi yalnızca bizim taraf değil, terminal işletmesinin kendi bülteni üzerinden de yapılır; iki kaynağın çelişmesi durumunda daha kısıtlayıcı olan uygulanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı hafta hem Levent'te hem Ambarlı'da işimiz var, aynı makineyi kullanabilir miyiz?",
                cevap:
                    "Teknik olarak aynı makine sınıfı her iki işi de yapabilir ama pratikte iş tipleri farklı ekipman tercih ettirir — kule işinde kompakt elektrikli, liman işinde teleskopik bomlu daha uygun olabilir. Mesafe ve trafik nedeniyle aynı gün iki bölge arasında tek makineyle gidip gelmek genellikle verimsizdir; haftalık program net paylaşılırsa iki ayrı makine planlanır ve nakliye rotası ortak bir takvimde birleştirilerek boş sefer maliyeti azaltılır.",
            },
            {
                soru: "Liman terminaline girişte hangi belgeler isteniyor?",
                cevap:
                    "Terminalden terminale değişmekle birlikte genel olarak operatör kimlik bilgisi, araç plakası, makine seri numarası ve iş tanımının önceden terminal işletmesine bildirilmesi istenir; bazı terminaller ayrıca yüksek görünürlüklü kıyafet ve saha güvenlik brifingine katılım şartı koyar. Bu belge seti kule bölgesindeki bina yönetimi onayına benzer ama terminal tarafında liman güvenlik mevzuatına bağlı ek katmanlar olabilir; ilk kez çalışılan bir terminalde bu listeyi teyit etmek keşif aşamasının standart bir parçasıdır.",
            },
            {
                soru: "Liman sahasında konteyner taşıyıcı araçlarla aynı anda çalışmak güvenli mi?",
                cevap:
                    "Güvenli hâle getirilir, kendiliğinden güvenli değildir. Erişim makinesi sahadaki ağır araç trafiğinin öncelikli olduğu bir düzende çalışır; operatör, saha vinci ve konteyner taşıyıcı araçlarla görüş hattı kurar, telsiz kanalı üzerinden koordinasyon sağlanır ve makine, ağır aracın geçiş güzergâhına asla bom uzatmaz. Terminal işletmesinin kendi trafik kuralları varsa (belirli şeritlerin öncelikli olması gibi) bu kurallar bizim çalışma planımızın da temelini oluşturur.",
            },
            {
                soru: "Kule bölgesindeki iş gece, liman bölgesindeki iş gündüz mü yapılır?",
                cevap:
                    "Genel eğilim bu yöndedir ama kesin kural değildir. Kule bölgesinde gece tercih edilir çünkü yaya trafiği azalır ve bina yönetimi genellikle bu saatleri önerir. Liman bölgesinde ise operasyon 7/24 sürebildiği için çalışma saati, terminalin kendi vardiya programına ve o anki trafik yoğunluğuna göre belirlenir — bazen gece vardiyası arasındaki sakin pencere, gündüzden daha uygun olabilir. Kesin saat, her iki sahada da yerel yönetimle keşifte netleştirilir.",
            },
            {
                soru: "Ambarlı bölgesindeki iş tersane işi mi sayılır?",
                cevap:
                    "Hayır — bu sayfada anlatılan liman tesisi, konteyner terminali ve lojistik ardiye/depolama sahasıdır; gemi inşa veya bakım yapılan tersane sahası değildir. Tersane işleri (kızak, kuru havuz, blok montaj gibi) tamamen farklı bir saha düzeni ve İSG rejimi gerektirir ve bu konuda ayrı bir uzmanlık alanımız vardır. Terminal ve depolama sahasındaki işlerimiz, konteyner istifleri, saha vinçleri ve depo çatısı gibi lojistik altyapıya yöneliktir.",
            },
            {
                soru: "İki bölge için ayrı fiyat teklifi mi alıyoruz, yoksa tek teklifte mi birleştiriyorsunuz?",
                cevap:
                    "İş kapsamına göre değişir — tek seferlik ve birbirinden bağımsız işlerse iki ayrı teklif daha nettir, ama aynı işletmenin her iki bölgede de düzenli bakım ihtiyacı varsa tek bir çerçeve teklif altında iki ayrı saha planı sunulması daha pratiktir. İkinci yöntemde nakliye rotası ortak planlandığı için maliyet avantajı oluşur; hangi yöntemin sizin iş hacminize uyduğunu keşif sonrası birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Levent-Maslak hattının İstanbul'un başlıca finans/ofis kule bölgesi, Ambarlı çevresinin ise Türkiye'nin önde gelen konteyner liman bölgelerinden biri olduğu kamuya açık coğrafi/kentsel bilgidir; erişim, izin ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "bolge:istanbul-anadolu-yakasi": {
        h1: "İstanbul Anadolu Yakasında Finans Kulesi ve Liman Tesisi Erişim Kiralama",
        giris:
            "Anadolu yakasında da Avrupa yakasındakine benzer bir ikili yapı vardır ama coğrafyanın kendine özgü izleriyle: Ataşehir'de resmi finans merkezi projesinin yüksek güvenlikli kuleleri, kıyı şeridinde ise Kadıköy-Haydarpaşa ve Pendik hattı boyunca uzanan liman ve lojistik depolama tesisleri. İki bölge arasındaki mesafe Avrupa yakasına göre daha kısa olsa da, iş tipleri ve saha kuralları yine kökten farklıdır — Ataşehir'deki bir kulede güvenlik onayı ve bina yönetimi süreci belirleyiciyken, kıyı şeridindeki liman tesisinde terminal giriş prosedürü ve ağır araç trafiği öne çıkar. Bu sayfadaki liman tesisi tanımı da Avrupa yakasındaki gibi konteyner terminali ve depolama sahasını kapsar; Anadolu yakasının güneyindeki Tuzla'daki tersane/gemi inşa sahası ayrı bir uzmanlık alanı olarak bu sayfanın kapsamı dışındadır. Bu sayfa, Anadolu yakasında finans kulesi ile liman tesisi arasındaki erişim mantığı farkını ve iki bölge arasında iş yapan işletmelerin karşılaştığı pratik soruları anlatır.",
        maddeler: [
            {
                baslik: "Ataşehir finans kulelerinde güvenlik odaklı erişim",
                metin:
                    "Anadolu yakasının finans kimliği Ataşehir'de yoğunlaşır; buradaki kuleler genellikle bankacılık ve finans kurumlarına ait olduğu için erişim, güvenlik onay sürecinin merkezinde şekillenir. Makine sahaya girmeden önce operatör kimliği, plaka ve iş tanımı önceden bildirilir; bu süreç bazen günler alır ve kiralama takvimine baştan eklenmesi gerekir. Cephe ve tavan işlerinde sepet, kule cephesine milimetrik hassasiyetle yaklaşır.",
            },
            {
                baslik: "Kadıköy-Haydarpaşa kıyı şeridinde liman ve depolama erişimi",
                metin:
                    "Kadıköy-Haydarpaşa hattı, İstanbul'un tarihî liman geleneğinin izlerini taşıyan bir kıyı şerididir ve çevresinde lojistik depolama ile ardiye tesisleri bulunur. Bu tesislerdeki erişim ihtiyacı — depo çatısı, raf sistemi üst kat, saha aydınlatması — geniş açık alan mantığıyla çalışır; makine, kule bölgesindeki dar şerit sınırlarından farklı olarak daha geniş bir manevra alanına sahiptir ama sahadaki yük trafiğiyle koordinasyon burada da esastır.",
            },
            {
                baslik: "Pendik hattında sanayi-lojistik karma doku",
                metin:
                    "Pendik ve çevresi, Anadolu yakasının sanayi ve lojistik ağırlıklı bir kuşağıdır; burada liman bağlantılı depolama tesisleriyle üretim tesisleri iç içe geçmiştir. Erişim makinesi bu kuşakta hem depo/ardiye çatısına hem üretim tesisi cephesine yönlenebilir; hangi tesiste hangi kuralın geçerli olduğu (OSB yönetmeliği mi, liman işletmesi kuralı mı) keşifte netleştirilir çünkü ikisi aynı kuşakta yan yana bulunabilir.",
            },
            {
                baslik: "İki bölge arasındaki kısa mesafenin lojistik avantajı",
                metin:
                    "Ataşehir ile kıyı şeridi arasındaki mesafe Avrupa yakasındaki Levent-Ambarlı hattına göre daha kısadır; bu, aynı haftaki işlerin nakliye planlamasında bir avantaj sağlar. Ancak iş tiplerinin farklılığı (hassas kule işi ile geniş alan liman işi) burada da aynı makinenin aynı gün iki işi yapmasını nadiren pratik kılar; mesafe kısa olsa da makine seçimi ve saha kuralları ayrı kalır.",
            },
            {
                baslik: "Tersane sahasıyla karıştırılmaması gereken sınır",
                metin:
                    "Anadolu yakasının güneyinde, Tuzla'da Türkiye'nin başlıca gemi inşa ve tersane bölgesi yer alır; bu saha kızak, kuru havuz ve blok montaj gibi tamamen farklı bir çalışma düzenine sahiptir ve bu sayfanın kapsamındaki liman tesisi tanımına dahil değildir. Liman tesisi derken burada kastedilen, konteyner terminali ve lojistik ardiye/depolama sahasıdır; tersane işleri ayrı bir uzmanlık gerektirir ve o konuda ayrı bir hizmet hattımız vardır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Anadolu yakasında bölge-erişim profili özeti",
                paragraflar: [
                    "Aşağıdaki tablo, Anadolu yakasındaki üç ana bölgenin erişim ihtiyacını karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Bölge", "Ana doku", "Onay mercii", "Öne çıkan iş"],
                    satirlar: [
                        ["Ataşehir", "Finans kulesi", "Bina yönetimi / kurum güvenliği", "Cephe, tabela, kamera montajı"],
                        ["Kadıköy-Haydarpaşa", "Liman/depolama", "Tesis işletmesi", "Depo çatısı, raf, aydınlatma"],
                        ["Pendik", "Sanayi-lojistik karma", "OSB/tesis yönetimi", "Depo ve üretim cephesi"],
                        ["Tuzla (kapsam dışı)", "Tersane/gemi inşa", "Tersane İSG birimi", "Bu sayfanın konusu değil"],
                    ],
                },
            },
            {
                baslik: "Finans kulesi ile liman tesisi arasında geçiş yapan işletmeler",
                paragraflar: [
                    "Bazı işletmeler hem Ataşehir'deki genel merkez binasının cephe bakımını hem kıyı şeridindeki deposunun çatı bakımını aynı tedarikçiden almak ister; bu mantıklıdır çünkü tek noktadan koordinasyon, iki ayrı tedarikçiyle uğraşmaktan daha az idari yük getirir. Ancak iki işin saha kuralları ayrı kaldığı için, tek sözleşme altında iki ayrı uygulama planı yapılır — güvenlik onay süreci finans tarafında, terminal giriş prosedürü liman tarafında ayrı ayrı yürütülür.",
                    "Bu model, özellikle kurumsal müşterilerde (örneğin hem genel merkezi hem lojistik deposu olan bir şirket) tercih edilir ve yıllık çerçeve anlaşma altında iki sahanın da bakım takvimi tek yerden izlenebilir.",
                ],
            },
            {
                baslik: "Pendik hattında OSB ile liman kuralının çakıştığı durumlar",
                paragraflar: [
                    "Pendik çevresindeki bazı tesisler hem bir OSB yönetmeliğine hem de yakın liman işletmesinin dolaylı kurallarına (örneğin ortak yol kullanımı) tabi olabilir. Böyle durumlarda hangi kuralın öncelikli olduğu net değilse, iki tarafın da yazılı görüşü keşifte alınır; belirsizlik giderilmeden iş planlanmaz çünkü çakışan bir kuralla sahada karşılaşmak, işi yarıda durdurmaktan başka bir seçenek bırakmaz.",
                    "Bu tip karma bölgelerde deneyim, hangi tesiste hangi otoritenin son sözü söylediğini önceden bilmekten gelir; ilk kez çalışılan bir tesiste bu bilgi mutlaka yazılı olarak teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ataşehir'deki ofisimiz ile Pendik'teki depomuz için tek sözleşme yapabilir miyiz?",
                cevap:
                    "Evet, tek bir çerçeve sözleşme altında iki sahanın da bakım planı yürütülebilir; bu, özellikle yıl boyu düzenli ihtiyacı olan kurumsal müşteriler için idari yükü azaltır. Ancak sözleşme tek olsa da uygulama planı iki ayrı kanalda ilerler — Ataşehir tarafında bina/kurum güvenlik onayı, Pendik tarafında tesis giriş prosedürü ayrı ayrı yürütülür. İki sahanın takvimi tek bir yıllık plan altında izlenir, ama saha kuralları birbirine karıştırılmaz.",
            },
            {
                soru: "Kadıköy-Haydarpaşa'daki liman deposu tersane mi sayılır?",
                cevap:
                    "Hayır — bu hat, lojistik depolama ve ardiye tesislerinin yoğunlaştığı bir kıyı şerididir; gemi inşa veya bakım yapılan tersane sahası değildir. Tersane işleri, kızak ve kuru havuz gibi tamamen farklı bir çalışma düzenine sahiptir ve Anadolu yakasında bu iş Tuzla'da ayrı bir uzmanlık alanı olarak yürütülür. Depo çatısı, raf sistemi ve saha aydınlatması gibi işler bizim liman tesisi tanımımıza girer ve standart erişim ekipmanı planlamasıyla yürütülür.",
            },
            {
                soru: "Pendik'teki tesisimiz hem OSB'de hem liman yoluna yakın, hangi kurala uyacağız?",
                cevap:
                    "Bu durumda iki otoritenin de görüşü keşifte ayrı ayrı alınır; OSB yönetmeliği tesis içi kuralları, liman işletmesinin dolaylı kuralı ise ortak yol veya çevre kullanımını ilgilendirebilir. Çakışan bir nokta varsa iş planlanmadan önce yazılı netleştirme istenir çünkü belirsizlikle sahaya çıkmak, işin yarıda kalmasına yol açabilir. İlk kez çalışılan böyle karma bir tesiste bu netleştirme adımı atlanmaz.",
            },
            {
                soru: "Finans kulesi işi ile liman depo işi aynı gün aynı ekiple mi yürür?",
                cevap:
                    "Genellikle hayır — iki iş tipi farklı makine sınıfı ve farklı onay süreci gerektirdiği için, aynı gün aynı ekiple iki işi paralel yürütmek verimsizdir. Ataşehir ile kıyı şeridi arasındaki mesafe kısa olsa da, güvenlik onayının zaman aldığı kule işiyle geniş alan mantığıyla ilerleyen liman işi farklı ritimde çalışır. Haftalık program net paylaşılırsa iki ayrı ekip/makine planlanır ve nakliye ortak takvimde birleştirilerek verimlilik sağlanır.",
            },
            {
                soru: "Anadolu yakasındaki liman tesisinde rüzgâr veya hava koşulu işi durdurur mu?",
                cevap:
                    "Evet, açık kıyı şeridindeki depolama ve terminal sahaları rüzgâra Ataşehir'deki kule bölgesinden daha fazla maruz kalır; belirli bir rüzgâr hızının üzerinde hem bizim makine limitimiz hem tesisin kendi operasyon kuralı devreye girip çalışmayı durdurabilir. İki kısıttan hangisi daha düşükse o uygulanır. Bu yüzden liman/depo işlerinde hava durumu takibi, tesisin kendi bülteni de dahil olmak üzere birden fazla kaynaktan yapılır.",
            },
            {
                soru: "Ataşehir'deki kule işimiz gece, Pendik'teki depo işimiz gündüz mü olur?",
                cevap:
                    "Genel eğilim bu yöndedir ama kesin değildir. Ataşehir'de yaya trafiği ve bina yönetimi genellikle gece/mesai dışı saatleri önerir; Pendik'teki depo/tesis işlerinde ise çalışma saati tesisin kendi operasyon programına göre değişir, bazı tesisler gündüz vardiyasını, bazıları gece sakin pencereyi tercih eder. Her iki sahada da kesin saat, yerel yönetimle keşifte netleştirilir; varsayılan bir kural olarak alınmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Ataşehir'in Türkiye'nin resmi finans merkezi projesinin geliştirildiği bölge, Kadıköy-Haydarpaşa hattının tarihî liman kimliğine sahip bir kıyı şeridi ve Tuzla'nın ayrı bir tersane/gemi inşa bölgesi olduğu kamuya açık coğrafi/kentsel bilgidir; erişim, izin ve saha koordinasyon pratikleri firma deneyimidir.",
    },
};
