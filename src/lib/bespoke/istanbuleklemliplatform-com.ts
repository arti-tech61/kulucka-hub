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

    "bolge:sisli": {
        h1: "Şişli'de Plaza Cephesi ve Yoğun Cadde Trafiğinde Eklemli Platform Kiralama",
        giris:
            "Şişli, Levent-Maslak hattındaki saf finans kulesi dokusundan farklı olarak, eski yapı stoğu ile yeni plazaların iç içe geçtiği, ana caddesi gün boyu kesintisiz araç ve yaya akışına sahip bir merkez ilçedir; Mecidiyeköy kavşağı çevresinden Bomonti'ye uzanan hat boyunca ofis-plaza binaları, mağaza cepheli ticari yapılar ve konut blokları aynı sokakta yan yana durur. Bu doku, kule bölgelerindeki 'mesai dışına kaydır' mantığını tek başına yeterli kılmaz — Şişli'nin ana caddeleri akşam saatlerinde de, hafta sonu da yoğun kalabilir, çünkü trafik yükü yalnızca ofis mesaisine değil alışveriş ve toplu taşıma kullanımına bağlıdır. Eklemli platform burada iki ayrı problemi aynı anda çözer: bir yandan plaza cephesindeki cam, tabela ve klima işine bomun esnek geometrisiyle ulaşmak, öte yandan makinenin kendisini bu kesintisiz trafiğin içinde güvenli ve yasal bir kurulum alanına yerleştirmek. İkinci problem, Şişli'de çoğu zaman birincisinden daha fazla planlama gerektirir çünkü kurulum alanı seçimi tek başına bina yönetiminin değil, o caddenin trafik düzenini belirleyen yerel otoritenin de konusudur. Bu sayfa, Şişli'nin yoğun cadde dokusunda eklemli platform kiralamanın kurulum alanı ve zamanlama boyutunu anlatır.",
        maddeler: [
            {
                baslik: "Kesintisiz cadde trafiğinde kurulum alanı seçimi",
                metin:
                    "Şişli'nin ana caddelerinde trafik akışı kule bölgelerindeki gibi belirli saatlerde seyrelmez; bu yüzden makinenin kurulacağı nokta seçilirken yol kenarındaki mevcut bir cep, otobüs durağı arkası boşluk veya bina önü geri çekme alanı gibi trafiği kesmeyen bir yer öncelikli aranır. Böyle bir alan yoksa, tek şerit geçici olarak daraltılır ve bu daraltma, caddenin trafik yoğunluğuna göre günün en sakin saatine (genellikle öğle arası öncesi veya geç akşam) denk getirilir. Kurulum alanı belirlenmeden makine sahaya çağrılmaz, çünkü Şişli'de uygun boşluk bulmak kule bölgesindeki dar şerit sorunundan farklı, dinamik bir trafik problemidir.",
            },
            {
                baslik: "Eski yapı stoğu ile yeni plaza cephesi arasındaki malzeme farkı",
                metin:
                    "Şişli'nin caddeleri boyunca yeni plazaların cam-alüminyum cephesiyle, daha eski yapıların sıva, taş kaplama veya eski tip doğrama cephesi yan yana bulunur. Bu iki yüzey farklı hassasiyet ister — eski sıva cephede sepet teması küçük bir çatlağa bile yol açabilir, yeni cam cephede ise risk kırılma ve leke bırakmadır. Operatör hangi cephede çalıştığını bilerek yaklaşma hızını ve sepet mesafesini ayarlar; aynı sokakta art arda iki farklı binada çalışılıyorsa, iki cephe için de ayrı bir yaklaşım planı keşifte not edilir.",
            },
            {
                baslik: "Toplu taşıma hattına yakın çalışma koordinasyonu",
                metin:
                    "Şişli'nin büyük bölümü metro, metrobüs ve yoğun otobüs hattı güzergâhlarına yakındır; kurulum alanı bu hatlara denk geliyorsa makine ilgili toplu taşıma işletmesine veya trafik biriminin belirlediği kurala tabi olabilir. Durak önü veya toplu taşıma şeridine yakın bir kurulum söz konusuysa, iş öncesi bu güzergâhı yöneten birimin bilgilendirilmesi ve gerekiyorsa yönlendirme levhası konması standart adımdır; toplu taşıma aracının güzergâhını fiilen kapatan bir kurulum hiçbir koşulda yapılmaz.",
            },
            {
                baslik: "Alışveriş ve gündüz yaya yoğunluğunun zamanlamaya etkisi",
                metin:
                    "Şişli caddelerinin çoğu gündüz boyunca mağaza, restoran ve ofis çıkışlarının karışık yaya trafiğine sahne olur; bu yoğunluk kule bölgesindeki gibi belirli bir giriş saatinde zirve yapmaz, gün boyu göreli yüksek kalır. Zemin kattaki mağaza cephesi veya tabela işlerinde bu yüzden akşam kapanış sonrası saatler tercih edilir, ama üst kat cephe işleri gündüz de yürütülebilir çünkü sepet zemin seviyesindeki yaya akışının üzerinde kalır. Hangi iş için hangi saatin uygun olduğu, binanın zemin kat kullanımına göre keşifte ayrı ayrı belirlenir.",
            },
            {
                baslik: "Geçici trafik düzenlemesi ve izin süreci",
                metin:
                    "Kule bölgesinde işin izin süreci büyük ölçüde bina yönetiminden geçerken, Şişli'de kaldırım veya şerit kullanan bir kurulum genellikle ayrıca ilçe trafik biriminden geçici işgaliye veya trafik düzenleme izni gerektirir. Bu iki onay birbirinden bağımsızdır ve ikisi de ayrı ayrı alınmalıdır — bina yönetiminin izni olması, caddeye taşan bir kurulumu otomatik olarak yasal kılmaz. Bu ayrım keşif aşamasında netleştirilmezse, makine sahaya gelse dahi kurulum alanı yasal olmadığı için iş başlayamayabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şişli'de kurulum alanı tipine göre trafik etkisi",
                paragraflar: [
                    "Aşağıdaki tablo, Şişli'de sık karşılaşılan kurulum alanı tiplerini ve bunların trafiğe etkisini özetler.",
                ],
                tablo: {
                    basliklar: ["Kurulum alanı", "Trafik etkisi", "Gerekli izin", "Uygun zaman"],
                    satirlar: [
                        ["Bina önü geri çekme alanı", "Yok/minimal", "Bina yönetimi", "Gündüz mümkün"],
                        ["Tek şerit daraltma", "Orta, akışı yavaşlatır", "Trafik birimi + bina yönetimi", "Öğle öncesi / geç akşam"],
                        ["Otobüs durağı yakını", "Yüksek, hat koordinasyonu gerekir", "Toplu taşıma işletmesi", "Sefer arası pencere"],
                        ["Kaldırım (yaya şeridi daralması)", "Orta, yaya yönlendirme gerekir", "İlçe/trafik birimi", "Yaya yoğunluğunun düştüğü saat"],
                        ["Zemin altı otopark girişi önü", "Düşük, ama araç çıkışını etkiler", "Bina yönetimi", "Otopark trafiğinin az olduğu saat"],
                    ],
                },
            },
            {
                baslik: "Cadde trafiğinde çok günlü işlerde makine bekletme",
                paragraflar: [
                    "Şişli'deki bir cephe işi birden fazla günü buluyorsa, makineyi her gün nakletmek yerine sahada güvenli bir noktada bekletmek hem daha ekonomik hem pratiktir; ama kule bölgesinden farklı olarak burada bekleme noktası caddeye açık bir alan olduğu için ek bir görünürlük ve güvenlik riski taşır. Bekleme noktası mümkünse bina önü geri çekme alanına, olmuyorsa trafik biriminin onayladığı bir cep alana yerleştirilir; anahtar kutusu kilitlenir ve gece boyunca aracın görünürlüğünü artıran reflektif işaretleme eklenir.",
                    "Cadde üzerinde bekletilen bir makine, gece boyunca park denetimine de tabi olabileceği için, bu bekleme kararı yalnızca bina yönetimiyle değil gerekirse ilçe zabıta/trafik biriminin bilgisiyle de alınır; habersiz bırakılan bir makine, ertesi sabah işe başlamadan önce çekici sorunuyla karşılaşabilir.",
                ],
            },
            {
                baslik: "Eski bina cephelerinde ek yapısal kontrol ihtiyacı",
                paragraflar: [
                    "Şişli'deki eski yapı stoğunun bir kısmı, yeni plazalara göre daha zayıf balkon çıkması, korkuluk veya saçak gibi cepheye bitişik unsurlara sahip olabilir; sepet bu unsurlara yaklaşırken önce görsel bir kontrol yapılır ve unsurun sepet temasına dayanıklı olup olmadığı değerlendirilir. Dayanıklılığı belirsiz bir unsura yaslanılmaz, sepet ondan bağımsız bir mesafede tutularak iş bomun erişimiyle tamamlanır.",
                    "Bu tip binalarda iş öncesi fotoğraflı durum tespiti, yeni plazalara göre daha sık uygulanır çünkü eski cephe malzemesindeki mevcut bir çatlak veya bozulma, işten kaynaklanmadığı hâlde işe mal edilebilir; belgeleme bu riski baştan azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Cadde üzerinde uygun bir cep veya boşluk yoksa makineyi nereye kuruyorsunuz?",
                cevap:
                    "Böyle durumlarda tek şeridin geçici olarak daraltılması gündeme gelir; bu, ilçe trafik biriminden geçici düzenleme izni gerektirir ve genellikle günün en sakin saatine (öğle arası öncesi veya geç akşam) planlanır. Daraltılan şerit yönlendirme konisi ve levhayla işaretlenir, gerekirse bir yönlendirme personeli görevlendirilir. İzin alınmadan şerit daraltması yapılmaz; bu hem yasal hem güvenlik riski taşır ve keşif aşamasında bu ihtimal öngörülüp izin süreci baştan başlatılır.",
            },
            {
                soru: "Bina yönetimi izin verdi ama caddeye taşan kısım için ayrı izin gerekiyor mu?",
                cevap:
                    "Evet — bina yönetiminin izni yalnızca bina sınırları içindeki kullanım için geçerlidir; makinenin kaldırım veya yol şeridine taşan kısmı, ilçe trafik biriminin ayrı bir geçici işgaliye/düzenleme iznine tabidir. Bu iki onay birbirinin yerine geçmez ve ikisi de yazılı olarak alınmadan kurulum yapılmaz. Bu ayrımın gözden kaçması, Şişli'de en sık yaşanan gecikme nedenlerinden biridir; bu yüzden keşif sırasında hangi kısmın hangi otoriteye tabi olduğu net biçimde ayrıştırılır.",
            },
            {
                soru: "Metrobüs veya otobüs durağına yakın bir cephede çalışacağız, hat kapanır mı?",
                cevap:
                    "Hat tamamen kapatılmaz; kurulum, güzergâhı fiilen kesmeyecek şekilde planlanır ve gerekiyorsa ilgili toplu taşıma işletmesine önceden bilgi verilir. Durağın hemen önünde bir kurulum gerekiyorsa, sefer aralıklarının en açık olduğu saat dilimi tercih edilir ve makine, aracın durağa yanaşma manevrasını engellemeyecek mesafede konumlandırılır. Güzergâhı doğrudan etkileyen bir durum varsa iş, ilgili işletmenin onayı olmadan başlatılmaz.",
            },
            {
                soru: "Eski binada cephede zaten çatlak var, biz mi yaptık denirse ne yaparsınız?",
                cevap:
                    "Bu riski baştan azaltmak için eski yapı cephelerinde iş öncesi fotoğraflı durum tespiti standart uygulamamızdır; cephenin hangi noktasında hangi bozulma olduğu iş başlamadan belgelenir. İş sırasında ek bir hasar oluşmadıysa, önceden çekilen fotoğraflar mevcut durumu net biçimde gösterir ve ihtilafı baştan önler. Bu belgeleme talep üzerine değil, eski cephelerde otomatik olarak uygulanan bir adımdır.",
            },
            {
                soru: "Gündüz mü gece mi çalışmalıyız, Şişli'de net bir kural var mı?",
                cevap:
                    "Tek bir kural yoktur çünkü Şişli caddeleri kule bölgesi gibi belirli saatlerde seyrelmez; karar, binanın zemin kat kullanımına ve caddenin o kesimindeki trafik yoğunluğuna göre değişir. Zemin kat mağaza/tabela işleri genellikle kapanış sonrasına, üst kat cephe işleri ise yaya akışının altında kaldığı için gündüz de yapılabilir. Kesin saat, keşifte binanın kullanım profili ve caddenin trafik gözlemiyle birlikte belirlenir.",
            },
            {
                soru: "Çok günlü bir işte makineyi gece cadde üzerinde bırakabilir miyiz?",
                cevap:
                    "Mümkündür ama kule bölgesindeki bina içi bekleme noktasından farklı olarak, cadde üzerindeki bir bekleme hem görünürlük hem park denetimi riski taşır. Bekleme noktası öncelikle bina önü geri çekme alanına, mümkün değilse trafik biriminin onayladığı bir cep alana yerleştirilir; anahtar kutusu kilitlenir, reflektif işaretleme eklenir ve gerekiyorsa ilçe zabıta/trafik birimine bilgi verilir. Habersiz bırakılan bir makine, park denetimiyle karşılaşabileceği için bu adım atlanmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Şişli'nin eski yapı stoğu ile yeni plazaların iç içe bulunduğu, ana caddelerinin gün boyu yoğun toplu taşıma ve yaya trafiğine sahip merkezi bir ilçe olduğu kamuya açık kentsel bilgidir; kurulum alanı, izin ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "bolge:sariyer": {
        h1: "Sarıyer'de Yamaç Arazi ve Ağaçlı Sahalarda Eklemli Platform Kiralama",
        giris:
            "Sarıyer denince akla ilk Maslak'ın kule kuşağı gelse de, ilçenin asıl coğrafi karakteri Boğaz yamaçlarına yayılan, eğimli sokaklarla örülü ve büyük ölçüde ağaçlık bir dokudur — Maslak aksının kuzeyinde kalan bu kesimde villa siteleri, müstakil konutlar ve düşük katlı ticari yapılar, düz bir cadde ızgarasından çok yamaç boyunca kıvrılan dar sokaklara yaslanır. Bu doku, kule bölgelerindeki 'dar servis şeridine sığmak' problemini değil, tamamen farklı bir problemi öne çıkarır: zeminin kendisi eğimlidir, sokak genellikle tek araçlık genişliktedir ve hedef cepheye giden yol çoğu zaman bir ağaç dalı, çıkma bir çatı saçağı veya bahçe duvarı gibi bir engelin arkasından dolanmayı gerektirir. Eklemli platformun asıl gücü tam olarak burada ortaya çıkar — bomun dirsekli yapısı, sepedi engelin üzerinden veya yanından dolaştırarak hedefe ulaştırabilir, teleskopik düz bir bom bu manevrayı çoğu zaman yapamaz. Sarıyer'in yamaç ve ağaçlı dokusunda iş, bu yüzden makine seçiminden çok bom geometrisinin doğru okunmasına dayanır. Bu sayfa, Maslak aksının dışındaki Sarıyer'de eklemli platformun eğim ve engel aşma senaryolarında nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Eğimli sokakta makine konumlandırma ve denge kontrolü",
                metin:
                    "Sarıyer'in yamaç sokaklarının çoğunda zemin, düz bir avludan farklı olarak belirgin bir eğime sahiptir; makine bu zemine yerleşmeden önce eğim açısı ölçülür ve makinenin teknik verisinde belirtilen maksimum eğim toleransı bu ölçüyle karşılaştırılır. Tolerans aşılıyorsa makine o noktaya konumlandırılmaz, daha düz bir kesim aranır veya bom açıklığı artırılarak hedefe uzaktan erişilir. Outrigger'lı modellerde eğim, destek ayaklarının farklı yükseklikte açılmasıyla bir ölçüde telafi edilebilir, ama bu telafi de üreticinin belirlediği sınırın içinde kalmak zorundadır.",
            },
            {
                baslik: "Ağaç dallarının oluşturduğu engelde bom manevrası",
                metin:
                    "Sarıyer'in yeşil dokusu, cepheye giden görüş hattının çoğu zaman bir ağaç tarafından kısmen kapatıldığı anlamına gelir. Eklemli bomun dirsekli yapısı burada devreye girer — bom önce dalın altından veya yanından geçecek şekilde açılır, sonra hedefe doğru ikinci bir açıyla yükselir; bu, düz bir teleskopik bomun tek doğrultuda uzanan geometrisiyle mümkün olmayan bir manevradır. Operatör bu manevrayı yaparken dal ile sepet arasında güvenli bir mesafe bırakır, dalın hareketli olabileceğini (rüzgârda sallanma) hesaba katar ve hiçbir noktada dala fiziksel temas etmez; ağaç budama bizim işimiz değildir, biz yalnızca mevcut dokunun içinde güvenli bir geçiş güzergâhı buluruz.",
            },
            {
                baslik: "Tek araçlık ve dönüşü zor sokaklarda erişim",
                metin:
                    "Villa siteleri ve müstakil konut dokusundaki sokaklar genellikle tek araç genişliğindedir ve büyük araçların dönüş yarıçapını zorlayan keskin virajlar içerir. Makinenin bu sokağa girip girmeyeceği, nakliye aracının değil doğrudan makinenin kendisinin manevra kabiliyetine bağlıdır; bu yüzden keşifte sokak genişliği ve viraj yarıçapı ayrı ayrı ölçülür. Sokak gerçekten yetersizse, makine sokağın girişindeki daha geniş bir noktada konumlandırılır ve bom açıklığı artırılarak hedefe o mesafeden ulaşılır.",
            },
            {
                baslik: "Villa ve site cephelerinde bahçe duvarı ve parsel sınırı",
                metin:
                    "Sarıyer'deki villa ve sitelerin çoğu, komşu parselden yüksek bahçe duvarlarıyla ayrılır; bu duvarlar hem makinenin yaklaşım açısını kısıtlar hem de bomun komşu parsel üzerinden geçip geçmeyeceği sorusunu gündeme getirir. Bom komşu parselin hava sahasına girecekse, işe başlamadan önce o parselin sahibinden ya sözlü ya yazılı bir bilgilendirme/izin alınması istenir; bu adım atlanırsa iş günü ortasında komşu itirazıyla karşılaşılabilir. Duvarın kendisi de makinenin park noktasını daraltan bir engel olarak keşifte ayrıca ölçülür.",
            },
            {
                baslik: "Mevsimsel yeşillik değişiminin güzergâh planına etkisi",
                metin:
                    "Sarıyer'in ağaç dokusu mevsime göre yoğunluk değiştirir; yaz aylarında yaprak dolu dallar görüş hattını ve geçiş güzergâhını kışa göre daha fazla daraltabilir. Aynı cephede yaz ve kış aylarında planlanan iki farklı iş, bu yüzden aynı bom güzergâhını kullanamayabilir — yaz işinde daha dolaylı bir yaklaşım gerekebilirken, kış işinde daha direkt bir hat mümkün olabilir. Bu fark, işin hangi mevsimde planlandığına bakılmaksızın keşifte güncel olarak değerlendirilir; geçen yılki güzergâh bilgisi bu yılki iş için otomatik olarak geçerli sayılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sarıyer'de arazi ve engel tipine göre erişim yaklaşımı",
                paragraflar: [
                    "Aşağıdaki tablo, Sarıyer'in yamaç ve ağaçlı dokusunda sık karşılaşılan arazi/engel tiplerini ve bunlara uygun erişim yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["Arazi/engel tipi", "Temel zorluk", "Eklemli platform avantajı", "Ek önlem"],
                    satirlar: [
                        ["Eğimli sokak", "Denge ve outrigger seviyeleme", "Bom açıklığıyla uzaktan erişim", "Eğim ölçümü zorunlu"],
                        ["Ağaç dalı engeli", "Doğrudan görüş hattı yok", "Dirsekli bom dalın etrafından dolaşır", "Rüzgârda dal hareketi payı"],
                        ["Tek araçlık sokak", "Manevra alanı dar", "Kompakt gövde + uzun bom erişimi", "Sokak girişinde ölçüm"],
                        ["Yüksek bahçe duvarı", "Yaklaşım açısı kısıtlı", "Bom duvarın üzerinden geçebilir", "Komşu parsel bilgilendirmesi"],
                        ["Yoğun mevsimsel yeşillik", "Güzergâh mevsime göre değişir", "Bom rotası anlık olarak ayarlanabilir", "Güncel keşif her işte tekrarlanır"],
                    ],
                },
            },
            {
                baslik: "Eğim toleransı ve zemin kontrolünün adımları",
                paragraflar: [
                    "Sarıyer'in yamaç sokaklarında iş öncesi zemin kontrolü üç adımdan oluşur: önce eğim açısı bir eğim ölçer ile tespit edilir, ardından bu değer makinenin teknik verisindeki maksimum eğim toleransıyla karşılaştırılır, son olarak zeminin yüzey durumu (ıslak, kaygan, gevşek toprak) değerlendirilir. Bu üç kontrolden herhangi biri olumsuz çıkarsa makine o noktaya konumlandırılmaz; alternatif olarak daha düz bir kesimden bom açıklığı artırılarak çalışılır ya da zemin iyileştirmesi (örneğin geçici plaka döşenmesi) talep edilir.",
                    "Yağışlı dönemlerde bu kontrol her iş günü tekrarlanır çünkü bir önceki gün güvenli olan bir zemin, gece yağan yağmurla ertesi sabah kaygan hâle gelmiş olabilir; Sarıyer'in yamaç dokusunda bu kontrolü atlamak, düz zeminli bir sahaya göre çok daha yüksek risk taşır.",
                ],
            },
            {
                baslik: "Ağaç dokusuyla iç içe cephelerde çalışma disiplini",
                paragraflar: [
                    "Ağaçların cepheye yakın olduğu sahalarda operatör, bom hareketini iki aşamalı planlar: önce dalların arasından güvenli bir geçiş noktası belirlenir, sonra bu noktadan hedefe düz bir yaklaşım kurulur. Bu planlama, tek seferde doğrudan hedefe gitmeye çalışmaktan daha yavaş ilerler ama dal teması riskini ortadan kaldırır. Rüzgârlı günlerde dalların beklenenden fazla hareket edebileceği göz önünde bulundurularak güvenlik mesafesi artırılır; rüzgâr belirli bir hızı geçtiğinde ağaçlara yakın çalışma tamamen durdurulur.",
                    "Bazı işlerde dalın budanması cepheye erişimi kolaylaştırabilir, ama bu bizim kapsamımızda değildir — böyle bir ihtiyaç fark edildiğinde durum müşteriye bildirilir ve budama ayrı bir uzmanlık alanı olarak müşterinin kendi tedarikçisine yönlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Evimizin önündeki sokak çok dar ve eğimli, makine oraya girebilir mi?",
                cevap:
                    "Girip giremeyeceği, sokağın gerçek genişliği ve eğim açısı ölçülmeden söylenemez; bu yüzden Sarıyer'deki yamaç sokaklarda keşif, standart bir işten daha titiz yürütülür. Sokak makinenin manevra sınırlarını zorluyorsa, makine sokağın daha geniş bir girişinde konumlandırılır ve bom açıklığı artırılarak hedefe o mesafeden ulaşılır. Sokak hem dar hem eğimliyse, iki kısıt birlikte değerlendirilir ve gerekirse daha kompakt gövdeli bir model önerilir.",
            },
            {
                soru: "Cephenin önünde büyük bir ağaç var, dalları kesmeden çalışabilir misiniz?",
                cevap:
                    "Çoğu durumda evet — eklemli bomun dirsekli yapısı, sepedi dalların altından veya yanından dolaştırarak hedefe ulaştırabilir; bu, düz bir teleskopik bomla mümkün olmayan bir manevradır. Ağaca fiziksel temas hiçbir koşulda yapılmaz, gerekli güvenlik mesafesi korunur. Ancak dallar cepheyi tamamen kapatacak kadar yoğunsa ve güvenli bir geçiş güzergâhı bulunamıyorsa, bu durumda budama ihtiyacı size bildirilir; budama işimizin kapsamında değildir.",
            },
            {
                soru: "Bahçe duvarımız yüksek, makine bunun üzerinden geçebilir mi?",
                cevap:
                    "Bom, yeterli açıklık ve yükseklik varsa bahçe duvarının üzerinden geçerek cepheye ulaşabilir; bu, eklemli platformun makaslı sınıfa göre en belirgin avantajlarından biridir. Ancak bu geçiş komşu parselin hava sahasına giriyorsa, işe başlamadan önce o parsel sahibinden bilgilendirme veya izin alınması istenir. Bu adım atlanırsa, iş sırasında komşu itirazıyla karşılaşılabilir ve iş yarıda kesilebilir; bu yüzden keşifte parsel sınırları ve komşu iletişimi baştan netleştirilir.",
            },
            {
                soru: "Yağmur sonrası zemin kaygan olabilir mi, işi ertelemeniz gerekir mi?",
                cevap:
                    "Sarıyer'in yamaç dokusunda bu risk gerçektir ve zemin kontrolü her iş günü yeniden yapılır; bir önceki gün güvenli olan bir nokta, gece yağan yağmurla kaygan hâle gelmiş olabilir. Zemin durumu olumsuzsa iş ya zeminin kuruduğu bir saate ertelenir ya da geçici zemin iyileştirmesi (plaka döşenmesi gibi) uygulanır. Bu kontrolü atlayıp riskli bir zeminde çalışmak, Sarıyer'in eğimli dokusunda düz bir sahaya göre çok daha ciddi bir denge riski doğurur.",
            },
            {
                soru: "Yazın ağaçlar çok gür oluyor, kışın planlanan iş yazın da aynı şekilde yapılabilir mi?",
                cevap:
                    "Genellikle hayır, aynı güzergâh geçerli sayılmaz — yaz aylarında yaprak dolu dallar görüş hattını ve geçiş güzergâhını kışa göre daha fazla daraltabilir. Bu yüzden mevsim değiştiğinde iş yeniden değerlendirilir, güncel bir keşifle bom güzergâhı o günün yeşillik yoğunluğuna göre belirlenir. Geçen yıl veya geçen mevsim kullanılan güzergâh bilgisi, otomatik olarak bu işe uygulanmaz.",
            },
            {
                soru: "Sitemizin ortak alanı dar, hem sitenin hem komşu parselin izni mi gerekiyor?",
                cevap:
                    "Duruma bağlıdır — makine yalnızca site sınırları içinde kalıyorsa site yönetiminin izni yeterlidir, ama bom hedefe ulaşmak için komşu parselin hava sahasına giriyorsa o parselden de ayrıca bilgilendirme veya izin istenir. Bu iki durumun hangisinin geçerli olduğu, bom güzergâhı planlanmadan net biçimde söylenemez; bu yüzden keşifte parsel sınırları ve bom açıklığı birlikte değerlendirilerek hangi iznin gerektiği belirlenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Sarıyer'in Maslak aksı dışında kalan kesiminin Boğaz yamaçlarına yayılan, eğimli sokaklı ve ağaçlık bir doku taşıdığı kamuya açık coğrafi bilgidir; eğim, engel aşma ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "bolge:bakirkoy": {
        h1: "Bakırköy'de AVM ve Yüksek Tavanlı Kapalı Alanlarda Eklemli Platform Kullanımı",
        giris:
            "Bakırköy, Avrupa yakasının sahil şeridindeki köklü ticaret merkezlerinden biridir ve bölgedeki iş talebinin önemli bir kısmı, açık cadde cephesinden çok alışveriş merkezlerinin ve yüksek tavanlı kapalı ortak alanların iç mekân bakımından gelir — atrium tavanı, sinema/etkinlik salonu lobisi, yürüyen merdiven boşluğu üzerindeki aydınlatma ve tavan elemanları gibi noktalar, dışarıdaki bir kule cephesinden tamamen farklı bir çalışma ortamı kurar. Kapalı alanda çalışmanın kendi kuralları vardır: dizel veya LPG'li makine egzoz gazı nedeniyle kapalı ortama sokulmaz, bu yüzden iş baştan akülü/elektrikli eklemli sınıfla planlanır; zemin çoğu zaman mermer, seramik veya hassas kaplamalı olduğu için tekerlek altına koruma konur; ve makinenin kendisi, dış mekândan farklı olarak servis asansörü veya yük koridorundan geçirilerek içeri taşınmak zorundadır. Eklemli platform bu ortamda tercih edilir çünkü bomun dirsekli geometrisi, yürüyen merdiven boşluğu veya asma tavan elemanı gibi engellerin etrafından dolaşarak hedefe ulaşabilir — kapalı alanın kısıtlı yüksekliği ve dar geçişleri, düz bir teleskopik bomdan çok bu esnekliği gerektirir. Bu sayfa, Bakırköy'ün AVM ve yüksek tavanlı kapalı ortak alanlarında eklemli platform kullanımının nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Kapalı alanda akülü/elektrikli sınıf zorunluluğu",
                metin:
                    "Kapalı bir AVM ortak alanında dizel veya LPG'li bir makine kesinlikle kullanılmaz; egzoz gazının kapalı havalandırma sistemine karışması hem sağlık hem yangın güvenliği açısından kabul edilemez bir risktir. Bu yüzden iç mekân işleri baştan akülü veya elektrikli eklemli sınıfla planlanır. Akü kapasitesi, işin süresine göre önceden hesaplanır ve iş uzun sürecekse, mekân yönetiminin izin verdiği bir noktada şarj imkânı keşifte netleştirilir; şarj noktası yoksa yedek akülü/ikinci makine seçeneği değerlendirilir.",
            },
            {
                baslik: "Atrium ve yüksek tavanlı lobi işlerinde bom geometrisi",
                metin:
                    "AVM atriumları ve yüksek tavanlı lobiler, genellikle yürüyen merdiven boşluğu, asma tavan elemanı veya dekoratif asma obje gibi geçiş engelleriyle doludur. Eklemli bomun dirsekli yapısı, sepedi bu engellerin etrafından dolaştırarak tavan veya üst duvar hizasındaki hedefe ulaştırabilir; düz bir teleskopik bom bu manevrayı çoğu zaman yapamaz çünkü engelin doğrudan önünde kalır. Operatör bu tip alanlarda hız düşük tutar ve sepet ile engel arasındaki mesafeyi sürekli görsel kontrol eder.",
            },
            {
                baslik: "Hassas zemin kaplamasının korunması",
                metin:
                    "AVM ortak alanlarının zemini genellikle mermer, cilalı seramik veya özel kaplama malzemesidir ve makinenin tekerleği bu zemine doğrudan basmaz; tekerlek altına koruyucu tabla veya yumuşak mat yerleştirilir. Makine hareket ederken ani dönüş veya sürtünme hareketinden kaçınılır çünkü bu, cilalı zeminde iz veya çizik bırakabilir. İş bitiminde zeminde herhangi bir iz kalıp kalmadığı mekân yönetimiyle birlikte kontrol edilir; bu kontrol, iş öncesi çekilen fotoğraflarla karşılaştırılarak yapılır.",
            },
            {
                baslik: "AVM açılış-kapanış saatleri dışında çalışma penceresi",
                metin:
                    "Ortak alan işleri neredeyse istisnasız AVM'nin kapalı olduğu saatlere — genellikle gece kapanış sonrası ile ertesi sabah açılış öncesi arasındaki dar pencereye — sıkıştırılır çünkü ziyaretçi trafiğiyle aynı anda kapalı alanda erişim makinesi çalıştırmak güvenlik açısından uygun değildir. Bu pencere genellikle birkaç saatle sınırlıdır, bu yüzden iş kapsamı bu süreye sığacak şekilde önceden parçalanır; büyük bir işin tek gecede bitmeyeceği anlaşılırsa, iş birden fazla geceye bölünerek planlanır.",
            },
            {
                baslik: "Servis koridoru ve asansör genişliğiyle makine taşınabilirliği",
                metin:
                    "Kapalı alana makine taşımak, dış mekândaki gibi doğrudan sürerek girmek değildir; çoğu AVM'de iç mekâna erişim servis koridoru veya yük asansörü üzerinden sağlanır ve bu geçişlerin genişlik-yükseklik sınırı vardır. Keşif aşamasında bu ölçüler önceden alınır ve makine seçimi bu ölçülere göre yapılır; standart bir model sığmıyorsa daha dar gövdeli kompakt akülü sınıfa geçilir. Bu ölçüm atlanırsa, makine sahaya gelse dahi içeri sokulamayabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bakırköy'de kapalı alan iş tipine göre makine seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, Bakırköy'deki AVM ve kapalı ortak alan işlerinde sık karşılaşılan iş tiplerini ve uygun makine yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ortam özelliği", "Uygun makine sınıfı", "Zaman penceresi"],
                    satirlar: [
                        ["Atrium tavan aydınlatması", "Yüksek tavan, engelli geçiş", "Kompakt akülü eklemli", "Kapanış sonrası"],
                        ["Sinema/etkinlik lobisi bakımı", "Dar geçiş, hassas zemin", "Dar gövdeli elektrikli", "Kapanış sonrası"],
                        ["Yürüyen merdiven üstü tavan işi", "Engel yoğun, dar açı", "Dirsekli bom, düşük hız", "Gece penceresi"],
                        ["Ortak alan tabela/yönlendirme", "Orta yükseklik, geniş alan", "Standart akülü eklemli", "Açılış öncesi sabah"],
                        ["Acil aydınlatma arızası", "Kısa süreli, plansız", "Kompakt akülü, hızlı konum", "Talep anında (izinle)"],
                    ],
                },
            },
            {
                baslik: "AVM yönetimi ve mağaza kiracılarıyla koordinasyon",
                paragraflar: [
                    "Bir AVM'nin ortak alanında çalışmak için önce mekân/merkez yönetiminden onay alınır; bu onay iş tanımı, makine tipi ve çalışma saatinin önceden bildirilmesini gerektirir. Ancak ortak alan işi, çoğu zaman zemin kattaki mağaza kiracılarının önünden geçtiği için, iş rotası mağaza kapanış saatleriyle de örtüşecek şekilde planlanır; bazı mağazaların kapanış saati merkez geneli kapanıştan farklı olabilir, bu farkı keşifte öğrenmek gerekir.",
                    "Merkez yönetimi genellikle işin ortak alandaki güzergâhını, hangi mağaza önlerinden geçileceğini ve geçici olarak kapatılacak bölümleri önceden onaylar; bu onay olmadan güzergâh üzerinde değişiklik yapılmaz çünkü mağaza kiracılarının kendi çalışma saatleri ve teslimat programı da bu güzergâha bağlı olabilir.",
                ],
            },
            {
                baslik: "Zemin koruma ve iş sonrası temizlik protokolü",
                paragraflar: [
                    "Kapalı alan işlerinde zemin koruma iki aşamalıdır: iş öncesi tekerlek altına koruyucu tabla veya mat yerleştirilir, iş sonrası ise geçilen güzergâh boyunca zemin temizliği yapılır çünkü dışarıdan gelen bir makine, fark etmeden toz veya nem taşıyabilir. Bu temizlik, merkez yönetiminin kendi temizlik ekibiyle koordineli yürütülür; bazı merkezler kendi temizlik ekibini tercih ederken bazıları bizim ekibimizin temizliği üstlenmesini ister, bu tercih keşifte netleştirilir.",
                    "İş öncesi ve sonrası zemin durumunun fotoğraflı karşılaştırması, eski yapı cephelerindeki durum tespitine benzer bir mantıkla burada da uygulanır; bu, işten kaynaklanmayan bir zemin sorununun sonradan işe mal edilmesine karşı hem merkezi hem bizi korur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dizel makineyle kapalı AVM ortamında çalışamıyor muyuz, alternatif ne?",
                cevap:
                    "Hayır, kapalı bir ortak alanda dizel veya LPG'li makine kullanılmaz; egzoz gazının kapalı havalandırmaya karışması kabul edilemez bir risktir. Alternatif, akülü veya elektrikli eklemli sınıftır; bu sınıf hem egzoz üretmez hem de dizel sınıfa göre daha sessiz çalışır, bu da gece penceresinde çalışmayı kolaylaştırır. Akü kapasitesi işin süresine göre önceden hesaplanır ve gerekirse şarj noktası veya yedek makine planı keşifte belirlenir.",
            },
            {
                soru: "Atrium tavanındaki aydınlatmaya yürüyen merdiven boşluğunun üzerinden mi ulaşacaksınız?",
                cevap:
                    "Genellikle evet, ve bu tam olarak eklemli bomun avantajının devreye girdiği senaryodur; bom, yürüyen merdiven boşluğunun kenarından dirsekli bir hareketle yükselerek hedefe ulaşır, boşluğun tam ortasından geçmeye çalışmaz. Operatör bu manevrayı düşük hızda ve sürekli görsel kontrolle yapar. Boşluğun genişliği ve tavan yüksekliği yeterli açıklık sağlamıyorsa, alternatif bir yaklaşım noktası keşifte belirlenir.",
            },
            {
                soru: "Mermer zeminde makine tekerleği iz bırakır mı?",
                cevap:
                    "Doğru önlem alınmazsa bırakabilir, bu yüzden tekerlek altına koruyucu tabla veya yumuşak mat yerleştirmek standart uygulamamızdır. Makine hareket ederken ani dönüş ve sürtünmeden kaçınılır çünkü bu tip hareketler cilalı zeminde çizik riski taşır. İş öncesi ve sonrası zemin durumu fotoğraflanır; bu karşılaştırma hem bizim hem merkez yönetiminin işin zemine zarar verip vermediğini net biçimde görmesini sağlar.",
            },
            {
                soru: "Gece penceresi kısa, işimiz bir gecede bitmezse ne olur?",
                cevap:
                    "İş kapsamı, kapanış-açılış arasındaki pencereye sığacak şekilde önceden bölümlenir; bir gecede bitmeyecek büyüklükteki işler birden fazla geceye yayılarak planlanır. Bu, tek seferde acele bir tamamlama denemesinden daha güvenlidir çünkü kapalı alanda zaman baskısı, hem zemin koruma hem bom manevrası hassasiyetini olumsuz etkileyebilir. Kaç gece gerekeceği, keşifte iş kapsamına göre gerçekçi biçimde hesaplanır ve merkez yönetimine önceden bildirilir.",
            },
            {
                soru: "Makine yük asansörüne sığmıyor, o zaman iş yapılamıyor mu?",
                cevap:
                    "Yapılabilir, ama makine seçimi asansör veya servis koridoru ölçülerine göre yeniden yapılır; standart eklemli model sığmıyorsa daha dar gövdeli kompakt akülü sınıfa geçilir. Bu ölçüm keşif aşamasının zorunlu bir parçasıdır çünkü asansör ölçüsü bilinmeden gönderilen bir makine, sahaya ulaşsa dahi içeri taşınamayabilir. Kompakt sınıfın erişim yüksekliği standart modele göre daha sınırlı olabileceği için, bu durumda hedefe hangi açıdan ulaşılacağı da ayrıca planlanır.",
            },
            {
                soru: "Mağaza kiracıları işten rahatsız olur mu, onlarla ayrı mı konuşuyoruz?",
                cevap:
                    "Doğrudan mağaza kiracılarıyla değil, merkez/AVM yönetimiyle konuşulur; yönetim, iş güzergâhının hangi mağaza önlerinden geçeceğini bilir ve gerekiyorsa ilgili kiracıları kendi içinde bilgilendirir. Bazı mağazaların kapanış saati merkez geneli kapanıştan farklı olabileceği için bu bilgi keşifte merkez yönetiminden alınır ve iş rotası buna göre ayarlanır. Güzergâh üzerinde bir mağazanın özel bir hassasiyeti (örneğin gece teslimat programı) varsa, bu da merkez yönetimi üzerinden öğrenilip plana eklenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bakırköy'ün Avrupa yakası sahil şeridinde köklü bir ticaret merkezi olduğu ve bölgede alışveriş merkezi/yüksek tavanlı kapalı ortak alan yoğunluğu bulunduğu kamuya açık kentsel bilgidir; kapalı alan erişim, izin ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI — 11 sabit slug, domain açısı: GÖKDELEN (Levent-
    // Maslak-Ataşehir kule cephesi) + LİMAN TESİSİ (konteyner terminali,
    // ardiye/depolama sahası) ikilisi. Ankara/OSTİM dosyasındaki
    // 'dar alan/engebeli zemin, OSB montaj' açısından bilinçli olarak
    // uzak durulmuştur; burada eksen kentsel yükseklik + liman genişliği.
    // Yazım: 2026-08-14.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Kule Girişi ve Liman Ofis Binalarında Sepetli / Örümcek Platform Kiralama",
        giris:
            "Sepetli/örümcek platform (paletli veya tekerlekli, katlanabilir kollu küçük yapı), İstanbul'un kule ve liman ikilisinde iki farklı dar geçit sorununu çözer. Kule tarafında bu makine, ana lobi girişindeki döner kapıdan veya yük asansöründen geçip iç avluya, atrium tavanına ya da resepsiyon üstü asma tavana ulaşmak için kullanılır — standart eklemli platformun şasesi çoğu zaman bu geçitlere sığmaz, örümcek platformun katlanmış hâli ise dar bir koridordan rahatça geçer. Liman tarafında ise aynı makine, terminal idare binası veya ardiye ofis biriminin iç mekân işlerinde, kapı ve koridor genişliğinin kısıtlı olduğu noktalarda devreye girer; saha genelinde geniş açık alan hâkim olsa da, ofis/idare yapılarının içi kule lobisinden farksız dar bir geometri sunar. Bu sayfa, iki farklı sahada aynı makinenin neden ve nasıl tercih edildiğini anlatır — örümcek platform burada ana iş makinesi değil, diğer sınıfların giremediği dar geçitlerin çözümüdür.",
        maddeler: [
            {
                baslik: "Kule lobisinde döner kapı ve asansör ölçüsü",
                metin:
                    "Levent-Maslak-Ataşehir kulelerinin çoğunda ana giriş döner kapı, yan girişler ise standart kanat kapı genişliğindedir; örümcek platformun katlanmış gövde ölçüsü keşifte bu kapı ölçüsüyle karşılaştırılır. Yük asansörü kullanılacaksa asansör kabin ölçüsü ve taşıma kapasitesi ayrıca bina yönetiminden teyit edilir — asansörle taşıma yalnızca bina yönetiminin belirlediği saatlerde ve genellikle bir teknik personel eşliğinde yapılır.",
            },
            {
                baslik: "Atrium ve asma tavan işlerinde paletli sabitlik",
                metin:
                    "Kule lobilerindeki atrium boşlukları ve mermer/parke kaplı zeminler, paletli örümcek platformun ayak açıklığını geniş tutarak stabilize edildiği tipik alanlardır; ayaklar hassas zemine temas ederken koruyucu tabla kullanılır. Elektrikli tahrik, kapalı lobide egzozsuz ve sessiz çalıştığı için gündüz saatlerinde bile ziyaretçi trafiğini büyük ölçüde rahatsız etmez.",
            },
            {
                baslik: "Liman idare binası ve ardiye ofisinde dar koridor erişimi",
                metin:
                    "Terminal idare binası ve ardiye ofis yapıları, geniş saha görünümünün aksine içeride standart bir bina koridor genişliğine sahiptir; tavan aydınlatma değişimi, kablo kanalı bakımı gibi işlerde örümcek platform, dış sahadaki teleskopik/eklemli sınıfın yerini alır. Terminal giriş prosedürü — plaka ve personel bildirimi — bu küçük makine için de aynı şekilde işler; ölçek küçük olsa da saha giriş kuralı değişmez.",
            },
            {
                baslik: "Bina yönetimi ve terminal onayının küçük makinede de geçerliliği",
                metin:
                    "Makinenin küçük ve hafif olması, onay sürecini kısaltmaz; kule tarafında bina yönetimi onayı, liman tarafında terminal giriş bildirimi, örümcek platform için de standart iş akışının parçasıdır. Tek fark, bu makinenin genellikle daha kısa süreli ve nokta işler için istenmesi — bu yüzden onay süreci mümkün olduğunca erken başlatılır ki kısa iş, uzun bir bekleme sürecine takılmasın.",
            },
            {
                baslik: "Kule ile liman arasında farklı tercih nedeni",
                metin:
                    "Kule tarafında örümcek platform tercih nedeni neredeyse tamamen geçit ölçüsüdür; liman tarafında ise hem geçit ölçüsü hem de idare binası içindeki zeminin (genellikle hassas kaplamalı, düşük hacimli ofis alanı) ağır makineye uygun olmamasıdır. İki sahada da makine, ana işin değil ana işin çevresindeki dar noktaların çözümü olarak konumlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman idare binasında geçit ölçüsü karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki farklı saha tipinde örümcek platformun tipik kullanım noktalarını özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Geçit/kısıt", "Tipik iş", "Onay mercii"],
                    satirlar: [
                        ["Kule lobisi", "Döner kapı / yük asansörü", "Atrium tavan aydınlatması", "Bina yönetimi"],
                        ["Kule ofis katı", "Standart koridor kapısı", "Asma tavan bakımı", "Bina yönetimi / kiracı"],
                        ["Liman idare binası", "Ofis koridor genişliği", "Tavan aydınlatma, kablo kanalı", "Terminal işletmesi"],
                        ["Ardiye ofis bölümü", "Dar iç bölme", "Klima/havalandırma bakımı", "Terminal işletmesi"],
                    ],
                },
            },
            {
                baslik: "Ölçü paylaşımı: sahaya gitmeden karar",
                paragraflar: [
                    "Örümcek platform kiralamada en pratik adım, kapı ve koridor genişliğini, varsa asansör kabin ölçüsünü fotoğrafla birlikte önceden paylaşmaktır; bu bilgi olmadan gönderilen bir makine, sahaya ulaşsa dahi hedef noktaya kadar taşınamayabilir. Kule ve liman idare binalarının iç mimarisi birbirinden farklı olduğu için, her keşifte bu ölçüm ayrı ayrı yapılır — bir kulede işe yarayan geçiş planı diğerine otomatik uygulanmaz.",
                    "Ölçü belirsizse, ilk ziyarette yalnızca ölçüm için kısa bir keşif turu planlanır; bu tur işin fiyatına değil, doğru makine seçimine hizmet eder.",
                ],
            },
            {
                baslik: "Kısa süreli iş, uzun onay süreci riski",
                paragraflar: [
                    "Örümcek platform işleri genellikle birkaç saatlik nokta müdahalelerdir, ama onay süreci (özellikle finans kulesi veya terminal güvenlik onayı gerektiren sahalarda) günlerle ölçülebilir. Bu asimetri, kısa işin planlamayı erken başlatmama riskini taşımasına yol açar — bu yüzden nokta işlerde bile onay sürecini iş tarihinden günler önce başlatmayı öneririz, özellikle ilk kez çalışılan bir bina veya terminalde.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform kule lobisindeki döner kapıdan geçer mi?",
                cevap:
                    "Çoğu zaman geçmez; döner kapılar sabit ve dar bir geçiş kesiti sunar. Bu durumda yan giriş veya yük asansörü alternatif olarak değerlendirilir — bina yönetiminden hangi girişin ekipman taşımaya uygun olduğu keşifte öğrenilir. Katlanmış gövde ölçüsü ile giriş ölçüsü karşılaştırılmadan makine sahaya yönlendirilmez; bu, gereksiz bir sevkiyatı önlemenin en pratik yoludur.",
            },
            {
                soru: "Yük asansörüyle taşıma bina yönetimi tarafından hangi şartlarla izin veriliyor?",
                cevap:
                    "Genellikle belirli saatlerde (mesai dışı veya düşük yoğunluklu saat) ve çoğu zaman bina teknik personeli eşliğinde. Asansör kabin ölçüsü ve azami yük kapasitesi önceden teyit edilir; makine ağırlığı ve gövde ölçüsü bu sınırları aşıyorsa asansör kullanılamaz ve alternatif taşıma yolu (örneğin merdiven yoluyla parça parça taşıma, mümkünse) değerlendirilir. Bu detaylar bina yönetimiyle iş öncesi netleştirilir.",
            },
            {
                soru: "Liman idare binasındaki ofis zemini hassas, makine iz bırakır mı?",
                cevap:
                    "Doğru önlem alınmazsa bırakabilir; bu yüzden zemin tipi (laminat, seramik, halı) keşifte öğrenilir ve tekerlek/palet altına koruyucu tabla yerleştirilir. Ofis içi hareket düşük hızda ve ani dönüşten kaçınılarak yapılır. İş öncesi ve sonrası zemin durumu fotoğraflanarak kayıt altına alınır, bu hem terminal işletmesi hem bizim için ihtilafsız bir referans oluşturur.",
            },
            {
                soru: "Kısa bir iş için neden günler önceden onay başlatmamız gerekiyor?",
                cevap:
                    "Çünkü onay süreci iş süresinden bağımsızdır — bina güvenliği veya terminal işletmesi, bir saatlik iş için de aynı bildirim ve onay adımlarını uygular. İlk kez çalışılan bir binada bu süreç birkaç günü bulabilir; erken başlatılmazsa makine sahaya hazır olsa dahi kapıdan içeri giremez. Sürekli çalıştığımız bina ve terminallerde bu süreç zamanla kısalır.",
            },
            {
                soru: "Örümcek platform ana işimiz için yeterli mi, yoksa sadece tamamlayıcı mı?",
                cevap:
                    "Genellikle tamamlayıcıdır — geniş cephe veya saha işlerinde ana makine eklemli/teleskopik sınıf olur, örümcek platform bu ana işin çevresindeki dar geçitli noktaları (lobi, koridor, dar ofis) tamamlar. İşin tamamı dar iç mekânda geçiyorsa (örneğin küçük bir idare ofisinin tavan bakımı) örümcek platform tek başına yeterli olabilir; bu ayrım iş tanımına göre keşifte netleştirilir.",
            },
            {
                soru: "Kule ile liman idare binası arasında aynı makineyi kullanabilir misiniz?",
                cevap:
                    "Teknik olarak evet, model aynı sınıftan seçilebilir, ama iki sahanın onay süreci ve zemin hassasiyeti farklı olduğu için her iş kendi keşfiyle planlanır. Aynı hafta içinde iki sahada da kısa örümcek platform işiniz varsa, tek makinenin dönüşümlü kullanılması mümkündür; bu, günlük iş listesi net paylaşıldığında verimli bir planlamadır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kule lobilerinin döner kapı/yük asansörü ile sınırlı geçiş ölçüsüne sahip olduğu ve liman idare/ardiye ofis yapılarının standart bina iç mimarisi taşıdığı genel bina bilgisidir; ölçüm, onay ve zemin koruma pratikleri firma deneyimidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Kule Servis Şeridi ve Liman Terminaline Nakliye-Teslimat Hizmeti",
        giris:
            "İstanbul'un kule ve liman ikilisinde nakliye planı, iki farklı trafik mantığına göre kurulur. Levent-Maslak-Ataşehir hattındaki kulelere teslimat, gündüz yoğun trafiği ve dar servis şeridi/kaldırım kısıtı nedeniyle çoğunlukla erken sabah veya gece saatine kaydırılır; büyük bir aracın gündüz trafiğinde kuleye ulaşması hem süre hem risk açısından verimsizdir. Ambarlı çevresindeki liman ve ardiye tesislerine teslimat ise farklı bir ritimle çalışır — saha operasyonu genellikle 7/24 sürdüğü için teslimat saati trafikten çok terminalin kendi giriş prosedürüne ve vardiya programına bağlıdır, ama sahaya girişten sonra iç mesafe (bazı terminallerde kilometrelerle ölçülen) ayrı bir zaman kalemi olarak plana eklenir. Bu sayfa, iki farklı sahaya nakliye-teslimat hizmetinin nasıl planlandığını, hangi zaman penceresinin hangi sahada geçerli olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Kule bölgesinde gece/erken sabah teslimat penceresi",
                metin:
                    "Levent ve Maslak'ta gündüz trafiği, büyük araçların kuleye yaklaşmasını hem yavaşlatır hem riske sokar; bu yüzden makine teslimatı genellikle sabah erken (trafik yoğunluğu başlamadan) veya akşam sonrası saatlere planlanır. Bu saat tercihi bir maliyet kalemidir ama gözden kaçırılırsa daha büyük bir maliyete dönüşür — gündüz trafiğinde saatlerce bekleyen bir aracın süresi de faturaya yansır. Bina yönetiminin kendi teslimat saati kısıtı varsa (örneğin sabah 07.00 öncesi yasak) bu kısıt nakliye planına önceden eklenir.",
            },
            {
                baslik: "Dar servis şeridine araç boyutu uyumu",
                metin:
                    "Kule servis şeritleri genellikle standart bir kamyonu değil, daha küçük gövdeli bir aracı kabul eder; büyük makinenin taşınacağı araç, şeridin genişliğine göre keşifte belirlenir. Şeride sığmayan bir araçla gelinmesi, teslimatın en yakın alternatif noktada (örneğin bina arka cephesi veya otopark rampası) yapılmasını gerektirebilir — bu alternatif nokta önceden bina yönetimiyle netleştirilir.",
            },
            {
                baslik: "Liman terminaline giriş ve iç saha mesafesi",
                metin:
                    "Konteyner terminali ve ardiye tesislerine teslimat, önce terminal giriş kapısında kimlik-plaka kontrolünden geçer, sonra iç sahada hedef noktaya ulaşana kadar ayrı bir mesafe kat edilir — bazı büyük terminallerde bu iç mesafe kilometrelerle ölçülür. Bu süre, kapıdan girişle işe başlama arasındaki farkı oluşturur ve nakliye planına ayrı bir kalem olarak eklenir; eklenmezse 'sahaya girdik ama teslimat gecikti' türünden bir zaman kaybı yaşanır.",
            },
            {
                baslik: "Liman sahasında 7/24 operasyon ile teslimat saati uyumu",
                metin:
                    "Terminal operasyonu genellikle kesintisiz sürdüğü için teslimat saati, trafikten çok terminalin kendi vardiya yoğunluğuna göre belirlenir; bazı vardiya arası pencereler (örneğin vardiya değişim saati öncesi-sonrası sakin dönem) teslimat için daha uygun olabilir. Bu pencere, her terminalin kendi operasyon yoğunluğuna göre değiştiği için sabit bir kural yerine keşifte terminal işletmesiyle birlikte belirlenir.",
            },
            {
                baslik: "Kule ile liman arasında haftalık nakliye rotası birleştirme",
                metin:
                    "Aynı hafta içinde hem kule hem liman bölgesinde iş varsa, iki sahanın nakliye rotası tek bir haftalık takvimde birleştirilerek boş sefer sayısı azaltılır; mesafe ve iş tipi farkı nedeniyle aynı gün aynı araçla iki sahaya gidip gelmek genellikle verimli değildir, ama haftalık planlamada rota optimizasyonu maliyet avantajı sağlar. Bu birleştirme, özellikle her iki bölgede de düzenli iş alan işletmeler için önerilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki bölgede teslimat penceresi karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, kule bölgesi ile liman bölgesindeki teslimat pratiğini karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Kule bölgesi (Levent-Maslak-Ataşehir)", "Liman bölgesi (Ambarlı çevresi)"],
                    satirlar: [
                        ["Kısıtlayıcı etken", "Gündüz trafiği, dar servis şeridi", "Terminal giriş prosedürü, iç saha mesafesi"],
                        ["Tercih edilen saat", "Erken sabah / gece", "Vardiya arası sakin pencere"],
                        ["Onay gereksinimi", "Bina yönetimi teslimat izni", "Terminal plaka-kimlik listesi"],
                        ["Araç tipi kısıtı", "Kompakt gövdeli araç", "Standart ağır nakliye aracı"],
                        ["Ek süre kalemi", "Trafik bekleme", "İç saha ulaşım mesafesi"],
                    ],
                },
            },
            {
                baslik: "Nakliye planında gözden kaçan iki zaman kalemi",
                paragraflar: [
                    "Kule bölgesinde en sık gözden kaçan kalem, bina yönetiminin teslimat onay süresidir — makine hazır olsa dahi onay gelmeden servis şeridine giremez. Liman bölgesinde ise en sık gözden kaçan kalem, terminal giriş kapısından iç sahaya ulaşım mesafesidir; bu mesafe bazı büyük terminallerde önemli bir süre alabilir ve kapıdan girişle işe başlama aynı an sanılmamalıdır.",
                    "Her iki kalem de nakliye planına somut süre olarak eklenir; eklenmediğinde teslimat saati sahada beklenmedik gecikmeyle karşılaşır ve bu gecikme sonraki işin takvimine de sarkabilir.",
                ],
            },
            {
                baslik: "Çok günlü işlerde sahada bekletme seçeneği",
                paragraflar: [
                    "Kule tarafında çok günlü bir cephe işinde, her gün nakliye yerine makinenin bina yönetiminin onayıyla sahada güvenli bir noktada bekletilmesi hem daha ekonomik hem daha pratiktir; anahtar kutusu kilitlenir ve bekleme yeri bina güvenliğine bildirilir. Liman tarafında ise terminal işletmesinin kendi ekipman bekletme alanı varsa, benzer bir mantıkla makine orada günler boyu tutulabilir — bu, her terminalin kendi kuralına bağlıdır ve keşifte sorulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kuleye teslimat neden gece veya erken sabah yapılıyor, gündüz olmuyor mu?",
                cevap:
                    "Gündüz de teknik olarak mümkündür ama Levent-Maslak-Ataşehir gibi yoğun trafikli bölgelerde büyük bir aracın gündüz saatlerinde kuleye ulaşması hem daha uzun sürer hem risk taşır — bu süre ve risk faturaya yansır. Bu yüzden standart uygulamamız erken sabah veya gece teslimattır; bina yönetiminin kendi saat kısıtı varsa (örneğin belirli saatlerden sonra teslimat yasak) bu kısıt nakliye planına baştan eklenir.",
            },
            {
                soru: "Liman terminaline giriş yaptıktan sonra makine hemen çalışmaya başlayabiliyor mu?",
                cevap:
                    "Bazı terminallerde evet, ama büyük sahalarda giriş kapısından hedef noktaya ulaşım ayrı bir süre gerektirir — bu iç mesafe kilometrelerle ölçülebilir. Bu süre nakliye planına ayrı bir kalem olarak eklenir; eklenmezse 'kapıdan girdik ama işe başlayamadık' türünden bir gecikme yaşanır. Terminalin iç saha büyüklüğü keşifte öğrenilir ve plana yansıtılır.",
            },
            {
                soru: "Dar servis şeridine standart nakliye aracı sığmıyor, ne yapıyorsunuz?",
                cevap:
                    "Bu durumda daha kompakt gövdeli bir araç kullanılır veya teslimat, bina yönetiminin izin verdiği en yakın alternatif noktadan (arka cephe, otopark rampası gibi) yapılır. Şerit genişliği keşifte santimetre hassasiyetinde ölçülmeden araç tipi kesinleştirilmez; bu, sahada araç-yer uyumsuzluğu nedeniyle yaşanacak bir gecikmeyi baştan önler.",
            },
            {
                soru: "Aynı hafta hem bir kulede hem liman tesisinde işimiz var, nakliyeyi nasıl planlıyorsunuz?",
                cevap:
                    "İki sahanın nakliye rotası tek bir haftalık takvimde birleştirilir; bu, boş sefer sayısını azaltarak maliyet avantajı sağlar. Aynı gün aynı araçla iki sahaya gidip gelmek mesafe ve iş tipi farkı nedeniyle genellikle verimli değildir, bu yüzden her sahaya ayrı bir gün/araç ayrılır ama haftalık rota optimize edilir. Haftalık iş listesini erken paylaşmanız, bu optimizasyonun kalitesini doğrudan artırır.",
            },
            {
                soru: "Terminal vardiya değişim saatinde teslimat yapmak sorun olur mu?",
                cevap:
                    "Genellikle önerilmez — vardiya değişim saati, sahadaki araç ve personel trafiğinin en yoğun olduğu andır. Bunun yerine vardiya arası sakin pencere tercih edilir; bu pencere terminalin kendi operasyon yoğunluğuna göre değişir ve keşifte terminal işletmesiyle birlikte belirlenir. Sabit bir saat kuralı yoktur, her terminalin kendi ritmi ayrı ayrı öğrenilir.",
            },
            {
                soru: "Çok günlü bir işte makineyi her gün geri götürüp getirmek yerine sahada bırakabilir misiniz?",
                cevap:
                    "Bina yönetimi veya terminal işletmesinin onayıyla mümkündür ve genellikle hem daha ekonomik hem daha pratiktir. Kule tarafında bekleme noktası bina güvenliğine bildirilir ve makine kilitlenir; liman tarafında ise terminalin kendi ekipman bekletme alanı varsa oradan yararlanılır. Bu seçenek her sahada standart olarak sunulmaz, keşifte ilgili yönetimden teyit edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Levent-Maslak-Ataşehir hattının yoğun gündüz trafiğine sahip olduğu ve Ambarlı çevresindeki liman tesislerinin genellikle kesintisiz operasyonla çalıştığı kamuya açık kentsel/lojistik bilgidir; teslimat penceresi ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Liman Ardiyesinde Forklift ile İstifleme — Kule Tarafında Kapsam Sınırı",
        giris:
            "Bu domain esas olarak yüksekte erişim ekipmanı (eklemli/teleskopik platform, örümcek platform) üzerine kuruludur ve forklift-istifleme hizmeti, kule cephesi tarafında değil, liman ve ardiye tesisleri tarafında anlam kazanır. Levent-Maslak-Ataşehir kulelerinde zaten yatay yük taşıma-istifleme ihtiyacı neredeyse yoktur — kule işleri dikey erişim gerektirir, forklift benzeri bir ekipmana kule cephesinde iş düşmez. Ambarlı çevresindeki konteyner terminali ve ardiye sahalarında ise durum farklıdır: palet, malzeme ve ekipman istiflemesi sahanın gündelik operasyonunun parçasıdır ve bu iş bazen platform kiralama ile birlikte, bazen ayrı bir talep olarak gelir. Bu sayfa, forklift-istifleme hizmetinin bu domainde nerede anlamlı olduğunu dürüstçe sınırlandırarak anlatır — kule tarafında bu hizmeti önermiyoruz, liman/ardiye tarafında ise platform işiyle birlikte planlanabilecek tamamlayıcı bir hizmet olarak sunuyoruz.",
        maddeler: [
            {
                baslik: "Kule tarafında forklift ihtiyacının neredeyse hiç olmaması",
                metin:
                    "Kule cephesi, lobi veya ofis kat işlerinde malzeme taşıma ihtiyacı varsa bu genellikle küçük hacimli parçalardır (cam paneli, tabela elemanı, aydınlatma armatürü) ve bunlar platform sepediyle veya el taşımasıyla çözülür; forklift benzeri bir istifleme makinesine kule sahasında pratik bir iş düşmez. Dar servis şeritleri ve kaldırım kısıtları da zaten bir forklift operasyonuna uygun değildir. Bu yüzden kule tarafındaki müşterilere bu hizmeti önermiyoruz.",
            },
            {
                baslik: "Liman ardiyesinde palet ve malzeme istifleme",
                metin:
                    "Ardiye ve depolama sahalarında forklift, palet istifleme, malzeme yerleştirme ve platform işine eşlik eden yük taşıma gibi işlerde kullanılır. Bu talep genellikle platform kiralamayla birlikte gelir — örneğin bir depo çatısı bakımı sırasında zemin seviyesinde malzeme taşıma forklift ile, yüksek noktadaki iş platform ile yürütülür; iki ekipman aynı sahada farklı işlevlerle koordineli çalışır.",
            },
            {
                baslik: "Zemin ve saha uygunluğu",
                metin:
                    "Ardiye zeminleri genellikle forklift operasyonuna uygun düz betondur; bu, liman sahasını kule sahasından ayıran bir diğer pratik farktır. Kapasite ve lastik tipi (iç mekân/dış saha) zemin ve yük ağırlığına göre keşifte belirlenir; ıslak veya düzensiz zemin varsa iş öncesi zemin durumu kontrol edilir.",
            },
            {
                baslik: "Terminal giriş prosedürünün forklift için de geçerliliği",
                metin:
                    "Forklift de terminal sahasına giren bir ekipman olduğu için, platform işlerinde uygulanan aynı giriş prosedürü (plaka-personel bildirimi, saha güvenlik brifingi) forklift için de geçerlidir. Ayrı bir ekipman olarak geldiğinde ayrı bir bildirim gerekir; platform işiyle birlikte gelecekse tek bildirimde ikisi birlikte listelenebilir.",
            },
            {
                baslik: "Bu hizmeti neden dürüstçe sınırlı tutuyoruz",
                metin:
                    "Forklift-istifleme, bu domainin uzmanlık ekseni olan yüksekte erişim işinin dışında kalan bir hizmettir; kule tarafında talep gelirse gerçekçi olarak önermiyoruz çünkü sahanın kendisi buna uygun değil. Liman/ardiye tarafında ise platform işiyle birlikte anlamlı bir tamamlayıcı hizmet olduğu için sunuyoruz, ama bunu ana uzmanlık alanımız gibi göstermiyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift hizmetinin iki sahadaki uygulanabilirliği",
                paragraflar: [
                    "Aşağıdaki tablo, forklift-istifleme hizmetinin kule ve liman sahalarındaki gerçekçi karşılığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Saha", "Forklift ihtiyacı", "Tipik kullanım", "Önerimiz"],
                    satirlar: [
                        ["Kule cephesi/lobisi", "Neredeyse yok", "—", "Önerilmez"],
                        ["Kule ofis kat içi", "Çok düşük", "Küçük parça taşıma (elle/platform sepeti yeterli)", "Önerilmez"],
                        ["Liman ardiye/depo", "Yüksek", "Palet istifleme, malzeme yerleştirme", "Platform işiyle birlikte sunulur"],
                        ["Konteyner saha çevresi", "Orta-yüksek (özel ekipman gerekebilir)", "Sınırlı istifleme desteği", "Kapsam ve ekipman keşifte netleştirilir"],
                    ],
                },
            },
            {
                baslik: "Platform işiyle forklift işinin birlikte planlanması",
                paragraflar: [
                    "Liman ardiyesinde çatı, raf üstü veya aydınlatma bakımı gibi bir platform işi varsa ve aynı sahada zemin seviyesinde malzeme taşıma ihtiyacı da varsa, iki ekipman tek bir saha planında koordine edilir — platform yüksek noktada çalışırken forklift zemin seviyesinde malzeme hazırlar, iki ekip birbirinin çalışma alanına girmeyecek şekilde günlük plana yerleştirilir.",
                    "Bu koordinasyon, iki ayrı tedarikçiyle çalışmaktan daha az idari yük getirir ve terminal giriş bildirimi tek seferde iki ekipman için yapılabilir.",
                ],
            },
            {
                baslik: "Kule müşterisine dürüst yönlendirme",
                paragraflar: [
                    "Kule bölgesinden forklift talebi geldiğinde önce iş tanımını netleştiriyoruz — çoğu zaman gerçek ihtiyaç yük taşıma değil, küçük parça montajı veya erişimdir ve bu, zaten kiralanan platformun sepediyle çözülür. Gerçekten ağır yatay yük taşıma ihtiyacı varsa (nadir bir senaryo, örneğin büyük bir ekipman değişimi), bu iş genel yük taşıma/vinç hizmeti kapsamına girer ve bu konuda müşteriyi doğru kaynağa yönlendiririz; kendimiz bu hizmeti kule sahasında sunmuyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kule cephesinde forklift kiralayabilir miyiz?",
                cevap:
                    "Gerçekçi olarak önermiyoruz — kule servis şeritleri ve kaldırım kısıtları forklift operasyonuna uygun değildir ve kule işlerinde yatay yük taşıma ihtiyacı neredeyse hiç oluşmaz. İhtiyacınız küçük parça taşımaysa (cam paneli, tabela elemanı gibi) bu zaten kiraladığınız platformun sepediyle çözülür. Gerçekten farklı bir yük taşıma ihtiyacınız varsa, bunu keşifte konuşup doğru çözüme yönlendiririz.",
            },
            {
                soru: "Liman ardiyesinde platform işiyle birlikte forklift de kiralayabilir miyiz?",
                cevap:
                    "Evet, bu bizim için anlamlı bir kombinasyon — depo çatısı veya raf üstü bir platform işi sırasında zemin seviyesinde malzeme taşıma ihtiyacı varsa forklift, aynı saha planına dahil edilir. İki ekipman koordineli çalışır, terminal giriş bildirimi tek seferde iki ekipman için yapılabilir. Bu talep genellikle platform işiyle birlikte geldiğinde en verimli sonucu verir.",
            },
            {
                soru: "Forklift terminale girerken ayrı bir onay mı gerekiyor?",
                cevap:
                    "Platform işinden bağımsız geldiğinde evet, ayrı bir plaka-personel bildirimi gerekir. Ama platform işiyle birlikte planlanıyorsa, iki ekipman aynı bildirimde listelenebilir — terminal işletmesine tek seferde iki araç ve iki personel bilgisi iletilir. Bu, ayrı ayrı bildirim yapmaktan daha az idari yük getirir.",
            },
            {
                soru: "Sadece forklift-istifleme hizmeti alabilir miyiz, platform işi olmadan?",
                cevap:
                    "Liman/ardiye sahasında evet, mümkündür — forklift işi platform işine bağımlı değildir, birlikte de tek başına da talep edilebilir. Kule tarafında ise bu hizmeti sunmuyoruz çünkü sahanın kendisi buna uygun değil; kule bölgesindeki tek yatay taşıma ihtiyacı genellikle platform sepediyle veya el taşımasıyla zaten çözülür.",
            },
            {
                soru: "Ardiye zemini forklift için uygun mu, nasıl kontrol ediyorsunuz?",
                cevap:
                    "Ardiye zeminleri genellikle düz beton olduğu için uygundur, ama yük ağırlığı ve lastik tipi (iç mekân/dış saha) keşifte zemine göre belirlenir. Islak veya düzensiz bir zemin durumu varsa iş öncesi kontrol edilir ve gerekirse önlem alınır. Bu kontrol, platform işinde uyguladığımız zemin değerlendirmesinin aynısıdır.",
            },
            {
                soru: "Neden bu hizmeti sitenizde ana hizmet gibi göstermiyorsunuz?",
                cevap:
                    "Çünkü ana uzmanlığımız yüksekte erişim ekipmanı kiralamadır ve forklift-istifleme bu eksenin dışında kalan, yalnızca liman/ardiye sahasında anlamlı bir tamamlayıcı hizmettir. Kule tarafında bu hizmete gerçek bir ihtiyaç olmadığını bilerek 'her şeyi yaparız' demek yerine, nerede anlamlı olduğunu dürüstçe belirtmeyi tercih ediyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kule servis şeritlerinin dar/kısıtlı olduğu ve liman ardiye sahalarının düz beton zeminli, forklift operasyonuna uygun genel bir yapı sunduğu kamuya açık saha bilgisidir; kapsam sınırı ve koordinasyon pratiği firma deneyimidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Kule Cephesinden Liman Sahasına: Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli platformun (boom) bom yapısı, birden fazla eklemden bağımsız kırılabilir — bu geometri, İstanbul'un iki farklı sahasında iki farklı nedenle vazgeçilmez hâle gelir. Levent-Maslak-Ataşehir kulelerinde bom, dar servis şeridinden kuleye doğru istenen açıyla, yaya geçişini ve taksi cebini kapatmadan yaklaşır; kırılma kabiliyeti, sepedi kule cephesinin altına değil önüne, hassas bir açıyla konumlandırmayı mümkün kılar. Ambarlı çevresindeki liman ve ardiye sahalarında ise aynı bom, farklı bir problemi çözer — konteyner istifleri, saha vinci rayları ve depo çatı kirişleri gibi engellerin arasından dolaşarak yüksek noktaya, düz bir teleskopik çıkışın erişemediği açıdan ulaşır. İki sahanın ortak paydası, hedefin altının 'dolu' olması — kulede yaya/servis şeridi kısıtı, limanda geniş ama engelli bir saha dokusu — ve bu doluluğun düz çıkışı değil kırılan bir kolu gerektirmesidir. Bu sayfa, ana hizmetimiz olan eklemli platform kiralamanın iki sahadaki farklı mantığını, model sınıflarını ve karar sürecini baştan sona anlatır.",
        maddeler: [
            {
                baslik: "Kule cephesinde bom geometrisi: yaklaşma açısı ve hassasiyet",
                metin:
                    "Kule cephesindeki iş (cam panel değişimi, tabela montajı, menfez bakımı), sepedin cepheye son metrede süzülerek yaklaşmasını gerektirir — bomun kırılabilir yapısı, dar servis şeridinden makineyi hareket ettirmeden, sepedi istenen açıya getirir. Sepet kenarına yumuşak tampon takılır, rüzgâr belli bir hızı geçtiğinde cepheye yakın çalışma durdurulur çünkü yüksek kattaki rüzgâr yükü sepedi beklenenden fazla sallayabilir. Bu hassasiyet, liman sahasındaki geniş açıklıklı işten kökten farklı bir operatör disiplini gerektirir.",
            },
            {
                baslik: "Liman sahasında bom geometrisi: engelin ötesine erişim",
                metin:
                    "Liman ve ardiye sahalarında hedef genellikle depo çatısı, saha aydınlatma direği veya raf sistemi üst katıdır ve makine, konteyner istifi veya sabit ekipmanın çevresinden dolaşarak bu hedefe ulaşır. Burada hassasiyet cepheye temas değil, sahadaki ağır araç trafiğiyle bomun görüş hattı ve öncelik çakışmasıdır — bom, konteyner taşıyıcı aracın geçiş güzergâhına asla uzatılmaz, telsiz koordinasyonu sürekli açık tutulur.",
            },
            {
                baslik: "Model sınıfı: kompakt elektrikli mi, teleskopik bomlu mu",
                metin:
                    "Kule tarafında dar servis şeridi genellikle kompakt gövdeli elektrikli/hibrit eklemli sınıfı zorunlu kılar — standart dizel eklemli çoğu zaman şeride sığmaz ve gündüz kullanımında gürültü/egzoz kısıtı da bu tercihi pekiştirir. Liman tarafında ise açık saha ve yüksek erişim ihtiyacı nedeniyle teleskopik bomlu, dizel tahrikli büyük sınıf öne çıkar; sahanın rüzgâra açık olması nedeniyle rüzgâr sınırına kule bölgesinden daha sık bakılır. Doğru sınıf, hedefin geometrisi ve saha tipi keşifte netleştirilmeden kesinleştirilmez.",
            },
            {
                baslik: "Onay süreci: bina yönetimi ile terminal giriş prosedürünün farkı",
                metin:
                    "Kule tarafında iş, bina yönetiminin onay sürecine (zemin yükü, çalışma saati, güvenlik eskortu) tabidir ve bu süreç bina büyüklüğüne göre günler sürebilir. Liman tarafında ise terminal işletmesinin kendi giriş prosedürü (plaka-personel bildirimi, saha güvenlik brifingi) geçerlidir ve buna ek olarak iç saha ulaşım mesafesi de plana eklenir. İki onay mercii farklı olsa da, ortak nokta aynıdır: keşifte öğrenilen kurallara göre iş planlanır, kural atlanmaz.",
            },
            {
                baslik: "Çalışma saati penceresi: gece kule, vardiya arası liman",
                metin:
                    "Kule cephesindeki görünür işler (ana giriş, cephe) genellikle gece veya mesai dışı pencerede yapılır çünkü yaya trafiği azalır ve bina yönetimi bu saatleri tercih eder. Liman sahasında operasyon 7/24 sürebildiği için çalışma saati, terminalin kendi vardiya yoğunluğuna göre belirlenir — bazen vardiya arasındaki sakin pencere gündüzden daha uygun olabilir. Kesin saat her iki sahada da keşifte yerel yönetimle netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman sahasında eklemli platform senaryoları",
                paragraflar: [
                    "Aşağıdaki tablo, iki sahadaki tipik eklemli platform senaryolarını ve önerilen model sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Saha tipi", "Erişim zorluğu", "Önerilen sınıf"],
                    satirlar: [
                        ["Kule cam panel değişimi", "Dar servis şeridi", "Hassas temas, dar park", "Kompakt elektrikli/hibrit eklemli"],
                        ["Kule tabela/logo montajı", "Yüksek cephe, görünür", "Yüksek kat, gece pencere", "Teleskopik bomlu (dar gövde)"],
                        ["Depo çatısı bakımı", "Liman/ardiye açık saha", "Geniş açıklık, rüzgâr", "Dizel teleskopik bomlu"],
                        ["Saha aydınlatma direği", "Liman/ardiye açık saha", "Yüksek erişim, ağır araç trafiği", "Dizel teleskopik/eklemli"],
                        ["Raf sistemi üst kat bakımı", "Liman ardiye iç/yarı açık", "Dar koridor arası erişim", "Kompakt eklemli"],
                    ],
                },
            },
            {
                baslik: "Zarf hesabı: kulede metre, limanda güzergah",
                paragraflar: [
                    "Kule tarafında bom seçimi, servis şeridinin genişliği ile hedefin yatay-düşey mesafesinin karşılaştırılmasıyla yapılır — bu ölçüm santimetre hassasiyetinde keşifte netleştirilir, aksi hâlde standart bir eklemli dar şeride sığmayabilir. Liman tarafında ise ölçüm daha çok bir güzergah hesabıdır: makinenin park edeceği nokta ile hedef arasındaki konteyner istifi veya sabit ekipman engelinin yüksekliği ve derinliği, bomun hangi açıyla dolaşacağını belirler.",
                    "İki hesap da aynı mantığa dayanır — 'kaç metre' rakamı tek başına yeterli değildir, hedefe hangi güzergahtan ve hangi açıyla ulaşılacağı bilinmeden makine seçimi tamamlanmaz.",
                ],
            },
            {
                baslik: "Aynı hafta iki sahada iş: makine ve operatör planlaması",
                paragraflar: [
                    "Bir işletmenin aynı hafta içinde hem bir kulede hem liman tesisinde eklemli platform ihtiyacı varsa, iki iş tipik olarak farklı model sınıfı gerektirdiği için ayrı makine planlanır — kompakt elektrikli kule tarafında, teleskopik dizel liman tarafında. Operatör ataması da benzer şekilde ayrılır çünkü iki saha farklı disiplin ister: kulede hassas cephe yaklaşımı, limanda ağır araç trafiğiyle koordinasyon. Nakliye rotası ise haftalık planda ortak takvimde birleştirilerek verimlilik sağlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kule cephesinde eklemli platform yerine makaslı kullanılamaz mı, neden eklemli tercih ediliyor?",
                cevap:
                    "Makaslı düz yukarı çıkar; kule cephesinde ise sepedin dar servis şeridinden kuleye doğru belirli bir açıyla yaklaşması gerekir ve bu yalnızca kırılabilir bom yapısıyla mümkündür. Hedefin altı boş ve düz çıkış yetiyorsa (örneğin geniş bir meydan kenarındaki alçak katlı iş) makaslı da değerlendirilir, ama kule cephesi işlerinin büyük kısmında bom gerekliliği geometriden gelir, tercihten değil.",
            },
            {
                soru: "Liman sahasında konteyner istifleri arasından nasıl erişim sağlanıyor?",
                cevap:
                    "Makine, istiflerin dışına park edilir ve bom, hedefin (çatı, direk, raf üstü) üzerine, istiflerin çevresinden dolaşarak eklemlerinden kırılarak uzanır. Bu güzergah, keşifte hedefin ve engelin ölçüsü belirlenerek önceden hesaplanır; sahaya çıkıp deneme yapılmaz. Konteyner düzeni değişkense (dönemsel yeniden istifleme gibi) güncel saha durumu iş gününe yakın tekrar teyit edilir.",
            },
            {
                soru: "Rüzgâr her iki sahada da işi aynı şekilde mi etkiliyor?",
                cevap:
                    "Hayır, farklı şekillerde — kule tarafında rüzgâr esas olarak yüksek kattaki sepet sallanmasını ve cepheye teması etkiler, belli bir hız eşiğinde cepheye yakın çalışma durdurulur. Liman tarafında ise açık deniz kenarı konumu nedeniyle rüzgâr limiti bazen terminalin kendi operasyon kuralına bağlı olarak bizim makine limitimizden önce devreye girer; terminal operasyonu durursa bizim işimiz de otomatik olarak durur.",
            },
            {
                soru: "Kule tarafında dizel eklemli kullanabilir miyiz, daha büyük ve güçlü diye?",
                cevap:
                    "Genellikle önermiyoruz — dizel eklemli hem gürültü/egzoz nedeniyle gündüz kullanımında kısıtlanır hem de gövde genişliği dar servis şeridine çoğu zaman sığmaz. Kompakt elektrikli/hibrit sınıf, daha az yer kaplarken bom erişimi büyük sınıfa yakın kalabilir. Yükseklik veya erişim mesafesi kompakt sınıfı gerçekten aşıyorsa, o zaman istisnai olarak büyük sınıf değerlendirilir ama bu durum dar şeride sığma keşfiyle birlikte netleştirilir.",
            },
            {
                soru: "Liman tarafında saha vinciyle aynı anda çalışmak güvenli mi?",
                cevap:
                    "Güvenli hâle getirilir, kendiliğinden güvenli değildir. Operatör, saha vinci ve konteyner taşıyıcı araçlarla görüş hattı kurar, telsiz kanalı üzerinden koordinasyon sağlanır ve bom, ağır aracın geçiş güzergâhına asla uzatılmaz. Terminal işletmesinin kendi trafik kuralları (belirli şeritlerin öncelikli olması gibi) varsa, bu kurallar bizim çalışma planımızın da temelini oluşturur.",
            },
            {
                soru: "İki sahada da düzenli işimiz olacak, yıllık bir eklemli platform anlaşması yapabilir miyiz?",
                cevap:
                    "Evet, bu model özellikle her iki bölgede de düzenli bakım ihtiyacı olan kurumsal müşteriler için pratiktir. Tek bir çerçeve anlaşma altında iki saha için ayrı model sınıfı, ayrı onay süreci ve ortak bir nakliye takvimi tanımlanır; bu, hem idari yükü azaltır hem nakliye rotası optimizasyonuyla maliyet avantajı sağlar. Yıllık iş hacminizi paylaşırsanız, iki sahayı kapsayan planı birlikte kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Levent-Maslak-Ataşehir kule bölgesinin dar servis şeridi/yoğun yaya trafiği ve Ambarlı çevresindeki liman/ardiye sahasının geniş, ağır araç trafikli açık saha dokusu kamuya açık kentsel/lojistik bilgidir; bom geometrisi mantığı genel EN 280 kapsamındaki eklemli platform çalışma prensibine, saha koordinasyon pratikleri firma deneyimine dayanır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Kule Ofis Katı ve Liman Ardiyesinde İç Mekân Platform Kiralama",
        giris:
            "İç mekân platform ihtiyacı, İstanbul'un kule ve liman ikilisinde iki farklı iç mekân tipini kapsar. Kule tarafında bu, ofis katı asma tavanı, atrium boşluğu, teknik galeri ve otopark rampası gibi binanın kendi iç hacimlerindeki işlerdir — zemin genellikle beton veya mermer, tavan yüksekliği standart kat yüksekliğidir ve egzoz emisyonu nedeniyle akülü/elektrikli makine zorunludur. Liman tarafında ise iç mekân, ardiye ve depolama hangarlarının kapalı hacmidir — burada tavan yüksekliği çok daha fazla olabilir, zemin genellikle sade beton, ama saha içi forklift/araç trafiği kule ofisinden farklı bir koordinasyon gerektirir. İki sahanın ortak paydası kapalı hacimde çalışmanın getirdiği kısıtlardır: egzozsuz tahrik, zemin koruma ve komşu faaliyetle çakışmama. Bu sayfa, iki farklı iç mekân tipinde platform kiralamanın nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Kule ofis katında asma tavan ve teknik galeri",
                metin:
                    "Ofis katlarındaki asma tavan bakımı, sprinkler/havalandırma hattı kontrolü gibi işler, standart kat yüksekliğinde (genellikle 2,5-4 metre net yükseklik) kompakt makaslı veya küçük eklemli sınıfla yürütülür. Kiracının çalışma saatleri dışında (akşam sonrası veya hafta sonu) planlanması tercih edilir çünkü ofis kat içinde gündüz çalışan personel varsa makine hareketi iş akışını böler. Zemin genellikle halı kaplı veya laminat olduğu için tekerlek koruma standarttır.",
            },
            {
                baslik: "Kule atrium ve lobi boşluğunda dikkatli manevra",
                metin:
                    "Atrium gibi çok katlı açık boşluklarda makine, yürüyen merdiven veya asma katın kenarından dirsekli bir hareketle yükselerek hedefe ulaşır, boşluğun ortasından geçmeye çalışmaz. Mermer zeminde ani dönüş ve sürtünmeden kaçınılır, iş öncesi-sonrası zemin fotoğrafla belgelenir. Bu işler genellikle merkez/bina yönetiminin belirlediği kapanış-açılış arası dar bir pencerede yürütülür.",
            },
            {
                baslik: "Liman ardiyesinde yüksek tavan ve raf sistemi erişimi",
                metin:
                    "Depolama hangarlarının iç yüksekliği kule ofis katından belirgin şekilde fazladır ve raf sistemi üst kat bakımı, çatı altı aydınlatma, sprinkler hattı gibi işler bu yüksekliğe uygun akülü makaslı veya kompakt eklemli sınıfla yürütülür. Zemin genellikle sade beton olduğu için tekerlek koruma kule kadar hassas değildir, ama forklift trafiği varsa çalışma alanı bariyerle ayrılır.",
            },
            {
                baslik: "Kapalı alanda güç tipi zorunluluğu (her iki sahada ortak)",
                metin:
                    "Hem kule iç mekânında hem liman ardiyesinde egzoz emisyonu nedeniyle dizel/LPG makine kullanılamaz; akülü veya elektrikli sınıf zorunludur. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimat öncesi planlanır — bu planlama iki sahada da aynı mantıkla yapılır, farkı yalnızca ihtiyaç duyulan tavan yüksekliği ve zaman penceresidir.",
            },
            {
                baslik: "Onay süreci: bina yönetimi ile terminal işletmesinin farkı",
                metin:
                    "Kule iç mekân işleri bina yönetiminin çalışma saati ve güvenlik onayına tabidir; liman ardiye işleri ise terminal işletmesinin giriş prosedürüne ve varsa depo işletmecisinin kendi güvenlik kuralına tabidir. İki onay mercii farklı olsa da her ikisinde de iş, keşifte öğrenilen kurallara göre planlanır ve zamanlaması bu onay sürecine göre kesinleşir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman iç mekânında tipik iş karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki farklı iç mekân tipinde tipik işleri ve önerilen makine yaklaşımını özetler.",
                ],
                tablo: {
                    basliklar: ["İç mekân tipi", "Tavan yüksekliği", "Tipik iş", "Zaman penceresi"],
                    satirlar: [
                        ["Kule ofis katı", "Standart kat yüksekliği", "Asma tavan, sprinkler bakımı", "Mesai dışı"],
                        ["Kule atrium/lobi", "Çok katlı boşluk", "Aydınlatma, cephe iç yüzü", "Kapanış-açılış arası"],
                        ["Liman ardiye hangarı", "Yüksek (hangar tipi)", "Raf üstü, çatı altı bakım", "Vardiya arası"],
                        ["Liman idare/ofis içi", "Standart kat yüksekliği", "Tavan, kablo kanalı", "İş yoğunluğuna göre"],
                    ],
                },
            },
            {
                baslik: "Zemin koruma: mermer lobi ile ardiye betonu farkı",
                paragraflar: [
                    "Kule lobisinde mermer veya parke zemin, en ufak bir çizik veya iz bırakma riskine karşı yumuşak mat ve koruyucu tabla ile çalışılır; hareket düşük hızda ve ani dönüşten kaçınılarak yapılır. Liman ardiyesinde ise zemin genellikle sade endüstriyel beton olduğu için bu hassasiyet düzeyi aranmaz, ama forklift ve araç trafiğinin geçtiği güzergahlarda makine konumlandırması yine de dikkatli planlanır.",
                    "İki sahada da iş öncesi-sonrası zemin durumu fotoğraflanır; bu, olası bir ihtilafta hem bizim hem müşterinin elinde net bir referans bırakır.",
                ],
            },
            {
                baslik: "Akü planlaması: kısa kule penceresi, uzun liman vardiyası",
                paragraflar: [
                    "Kule iç mekân işleri genellikle birkaç saatlik dar bir pencereye sığdırılır, bu yüzden akü kapasitesi kısa yoğun kullanım için planlanır. Liman ardiyesindeki işler ise daha uzun sürebilir ve vardiya boyunca kesintisiz çalışma gerekebilir; bu durumda akü kapasitesi ve gerekirse şarj noktası veya yedek makine planı teslimat öncesi netleştirilir. İki senaryo da akü ihtiyacını farklı büyüklükte ele alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kule ofisimizde asma tavan bakımı için hangi makine sınıfı uygun?",
                cevap:
                    "Standart kat yüksekliğinde (genellikle 2,5-4 metre net) kompakt akülü makaslı veya küçük eklemli sınıf yeterlidir. Zemin halı/laminat kaplıysa tekerlek koruma standart uygulamamızdır. İş genellikle mesai dışı saatlere planlanır çünkü gündüz ofis içi personel trafiği varken makine hareketi iş akışını böler; kesin saat bina yönetimi ve kiracıyla birlikte netleştirilir.",
            },
            {
                soru: "Liman ardiyesindeki hangarın tavanı çok yüksek, standart makaslı yeter mi?",
                cevap:
                    "Hangar yüksekliği kule ofis katından belirgin fazla olduğu için, önce tavan/hedef yüksekliği net ölçülür — yeterli çalışma yüksekliğine sahip akülü makaslı veya kompakt eklemli sınıf seçilir. Yetersiz metrajlı bir makine gönderilirse hedefe ulaşılamaz, bu yüzden yükseklik bilgisi keşifte kesinleştirilmeden makine tipi belirlenmez.",
            },
            {
                soru: "Kapalı alanda dizel makine kullanamıyor muyuz, alternatif ne?",
                cevap:
                    "Hayır, kapalı bir iç mekânda (kule ofisi de liman ardiyesi de) dizel/LPG makine kullanılmaz; egzoz gazının kapalı havalandırmaya karışması kabul edilemez bir risktir. Alternatif akülü/elektrikli sınıftır; bu sınıf hem egzoz üretmez hem daha sessiz çalışır. Akü kapasitesi işin süresine göre önceden hesaplanır, uzun vardiyalarda şarj noktası veya yedek makine planı yapılır.",
            },
            {
                soru: "Atrium boşluğunun ortasından geçerek mi yükseliyorsunuz?",
                cevap:
                    "Hayır, bom (varsa) veya makine konumu, boşluğun kenarından dirsekli bir hareketle hedefe ulaşacak şekilde planlanır; boşluğun tam ortasından geçmeye çalışılmaz. Operatör bu manevrayı düşük hızda ve sürekli görsel kontrolle yapar. Boşluğun genişliği yeterli açıklık sağlamıyorsa alternatif bir yaklaşım noktası keşifte belirlenir.",
            },
            {
                soru: "Liman ardiyesinde forklift trafiği varken platform güvenli çalışabilir mi?",
                cevap:
                    "Evet, ama çalışma alanı bariyerle ayrılır ve platform ile forklift güzergahları çakışmayacak şekilde günlük plana yerleştirilir. Operatörümüz saha içi araç trafiğiyle görüş hattı kurar; forklift ile platformun aynı koridoru aynı anda kullanması engellenir. Bu koordinasyon, sahadaki depo işletmecisiyle birlikte iş öncesi netleştirilir.",
            },
            {
                soru: "Kule ile liman ardiyesi arasında iç mekân işini aynı hafta planlayabilir miyiz?",
                cevap:
                    "Evet, iki iş farklı model sınıfı ve zaman penceresi gerektirse de haftalık bir plan altında birlikte yürütülebilir. Kule tarafı genellikle mesai dışı dar bir pencereye, liman ardiyesi ise vardiya programına göre daha esnek bir pencereye sığar. Haftalık iş listesini paylaşırsanız, iki iç mekân işini de tek bir nakliye ve operatör planında birleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kule ofis katlarının standart kat yüksekliğine sahip olduğu ve liman ardiye/depolama hangarlarının genellikle daha yüksek tavanlı endüstriyel iç mekân sunduğu genel bina bilgisidir; zemin koruma, akü planlama ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Liman Hangarı ve Kule İnşaat Bitişiğinde Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Çelik konstrüksiyon montajı, İstanbul'un kule ve liman ikilisinde iki farklı bağlamda karşımıza çıkar. Liman ve ardiye tesislerinde bu, büyük depolama hangarlarının çelik iskelet montajı, çatı kirişi ve aşık montajı, cephe/çatı kaplama işleridir — geniş açık sahada vinç ile platformun birlikte çalıştığı, montaj sırasına bağlı bir süreçtir. Kule bölgesinde ise çelik konstrüksiyon montajı, Maslak gibi hâlâ inşaat hâlindeki parsellerin mevcut binaya bitişik yeni yapım işlerinde veya kule eklentisi/ek yapım projelerinde görülür — burada saha, liman hangarı kadar geniş değildir ve montaj, komşu binaya bitişik dar bir şeritte, bina yönetimi ile şantiye şefliğinin ortak onayıyla ilerler. İki bağlamın ortak paydası, montajın belirli bir sırayla (kolon-kiriş-çapraz-kaplama) ilerlemesi ve platformun bu sıraya göre güncellenen bir park/erişim planına ihtiyaç duymasıdır. Bu sayfa, iki farklı ölçekteki çelik montaj sahasında platformun rolünü, montaj sırasıyla ilişkisini ve vinç koordinasyonunu anlatır.",
        maddeler: [
            {
                baslik: "Liman hangarında geniş açık saha montaj sırası",
                metin:
                    "Depolama hangarı veya ardiye çatısının çelik iskelet montajı, önce kolonlar, sonra ana kirişler, sonra aşık ve çaprazlarla ilerler; sahanın geniş olması makine park planını kule tarafına göre daha esnek kılar ama saha içi ağır araç ve vinç trafiği ayrı bir koordinasyon katmanı ekler. Platform, kolon-kiriş birleşim noktalarına dışarıdan park edip bomu kırarak ulaşır; aynı anda vinç çelik eleman taşıyorsa, platform o bölgenin dışında beklenir.",
            },
            {
                baslik: "Kule bitişiğinde dar parsel montaj kısıtı",
                metin:
                    "Maslak gibi bazı bölgelerde yeni inşaat, mevcut kullanımdaki bir kuleye bitişik ilerler; bu durumda montaj sahası hem dar hem de iki farklı otoriteye (mevcut bina yönetimi ve şantiye şefliği) tabidir. Platform bu dar şeritte çalışırken, mevcut binanın cephesine veya yaya trafiğine müdahale etmeyecek şekilde konumlandırılır; iki tarafın da onayı olmadan iş planlanmaz.",
            },
            {
                baslik: "Askıda yük hattı altında çalışma yasağı (her iki sahada ortak)",
                metin:
                    "Hem liman hangarında hem kule bitişiği inşaat sahasında, vinç çelik elemanları havada taşırken bu hat platformun bom rotasıyla asla kesişmemelidir. Vinç operatörüyle telsiz koordinasyonu sürekli açık tutulur; platform bir bölgede çalışırken vinç o bölgeye yük taşımaz. Bu kural saha büyüklüğünden bağımsız olarak, çelik montajının olduğu her yerde aynı şekilde uygulanır.",
            },
            {
                baslik: "Cephe/çatı kaplamada seri ilerleme ve rüzgâr etkisi",
                metin:
                    "İskelet tamamlandıktan sonra cephe kaplama (liman hangarında trapez sac/sandviç panel, kule bitişiğinde cam-alüminyum cephe elemanı) hat boyunca seri ilerler; platform panel hattını izleyerek kademeli konum değiştirir. Liman sahasının açık ve rüzgâra maruz konumu nedeniyle geniş panel yüzeyinin yelken etkisi burada daha belirgindir ve rüzgârlı günlerde panel taşıma durdurulur; kule cephesinde ise cam panelin hassasiyeti öne çıkar, rüzgâr sınırı yine aranır ama risk teması odaklıdır.",
            },
            {
                baslik: "Montaj ekibiyle günlük saha koordinasyonu",
                metin:
                    "Her iki sahada da platform operatörü montaj ekibinin bir parçası gibi çalışır; her sabah kısa bir saha toplantısında o günün montaj sırası, hangi noktalarda platform gerektiği ve vinç rotası netleştirilir. Kule bitişiğinde bu toplantıya bina yönetimi temsilcisi de dahil edilir çünkü mevcut binanın kullanım saatleri montaj planını da etkiler; liman hangarında ise toplantı daha çok montaj ve vinç ekibi arasında yürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşamasına göre platform rolü — iki saha karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon montajının aşamalarına göre platformun rolünü liman hangarı ve kule bitişiği için karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Liman hangarı", "Kule bitişiği", "Kritik risk"],
                    satirlar: [
                        ["Kolon dikme", "Vinç ağırlıklı, geniş saha erişimi", "Vinç ağırlıklı, dar parsel erişimi", "Askıda yük hattı"],
                        ["Kiriş-aşık montajı", "Bom ile birleşim noktası erişimi", "Bom ile dar açıdan erişim", "Vinç rota çakışması"],
                        ["Çapraz bağlantı", "Geniş manevra alanı", "Kuyruk taşması riski yüksek", "Dönüş bariyeri"],
                        ["Cephe/çatı kaplama", "Trapez sac, geniş rüzgâr etkisi", "Cam-alüminyum, temas hassasiyeti", "Rüzgâr/panel yelken etkisi"],
                        ["Son kontrol-detay", "Nokta bazlı, esnek", "Bina yönetimi onaylı pencere", "Zaman kısıtı"],
                    ],
                },
            },
            {
                baslik: "İki otoriteli sahada onay sırası",
                paragraflar: [
                    "Kule bitişiğindeki montaj sahasında iş planı, hem mevcut bina yönetiminin hem şantiye şefliğinin ortak onayıyla kurulur; bu iki tarafın ayrı ayrı görüşülmesi, çelişen talimatlarla sonuçlanabileceği için mümkünse keşif toplantısına her iki temsilcinin birlikte katılması istenir. Liman hangarında ise tek otorite genellikle şantiye/montaj yükleniciliğidir, terminal işletmesinin giriş prosedürü buna ek bir katman olarak eklenir.",
                    "Bu fark, kule bitişiği projelerinde planlama süresinin liman hangarına göre biraz daha uzun tutulmasını gerektirir.",
                ],
            },
            {
                baslik: "İskele ile platform karşılaştırması",
                paragraflar: [
                    "Liman hangarının geniş sahasında, büyük ve sabit bir cephe/çatı yüzeyinin toptan kaplanacağı işlerde iskele bazen daha ekonomik olabilir; platformun avantajı ise gün içinde hızlı konum değiştirebilmesi ve kurulum-söküm zamanı gerektirmemesidir. Kule bitişiğinin dar parselinde ise iskele kurmak için de yeterli boşluk genellikle yoktur, bu da platformu çoğu zaman tek pratik seçenek hâline getirir.",
                    "Karar, işin süresine, hareketliliğine ve saha genişliğine göre keşifte birlikte verilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Liman hangarındaki çelik montajda platform mu vinç mi öncelikli?",
                cevap:
                    "İkisi farklı işlevlerdir, birbirinin yerine geçmez — vinç ağır elemanları taşır ve konumlandırır, platform ise cıvatalama, kaynak ve detay işlerinde erişim sağlar. Aynı anda çalışırlarsa askıda yük hattı platformun bom rotasıyla kesişmemelidir; telsiz koordinasyonu sürekli açık tutulur. Hangi aşamada hangi ekipmanın öncelikli olduğu montaj takvimine göre günlük planla belirlenir.",
            },
            {
                soru: "Maslak'ta yeni inşaat mevcut kuleye bitişik, iki taraf ayrı mı onay veriyor?",
                cevap:
                    "Evet — mevcut bina yönetimi ve şantiye şefliği ayrı otoritelerdir ve iş planı ikisinin de onayıyla kurulur. Bomun mevcut binanın sınırına yakın çalıştığı işlerde bu iki onay eş zamanlı alınır; biri gecikirse iş başlayamaz. Keşif toplantısına her iki tarafın temsilcisinin birlikte katılması, çelişen talimat riskini azaltır ve bizim önerdiğimiz standart yaklaşımdır.",
            },
            {
                soru: "Rüzgârlı günlerde cephe kaplama işi ne kadar etkileniyor?",
                cevap:
                    "Ciddi etkilenir — geniş panel yüzeyi rüzgârda yelken gibi davranır ve belli bir rüzgâr hızından sonra panel taşıma durdurulur; bu güvenlik kuralımızdır. Liman hangarının açık ve rüzgâra maruz konumu nedeniyle bu kısıt orada daha sık devreye girer; kule bitişiğinde ise cam panel temas hassasiyeti öne çıkar. Rüzgârlı bir dönemde panel işleri süresi uzayabilir, bu ihtimal takvime baştan işlenir.",
            },
            {
                soru: "Dar parselde platform park edecek yer kalmazsa ne oluyor?",
                cevap:
                    "Bu, kule bitişiği montajlarında sık karşılaşılan bir durumdur ve montaj takvimine göre güncellenen bir park planıyla önlenir — her aşama için ayrı park noktası önceden çizilir, iskelet büyüdükçe daralan alanlar plana işlenir. Şantiye ekibiyle birlikte kolon-kiriş-çapraz sırası görülüp hangi aşamada makinenin nereden çalışacağı belirlenir; bu plan olmadan iş başlatılmaz.",
            },
            {
                soru: "Liman hangarında iskele mi kursak platform mu kiralasak, hangisi daha ekonomik?",
                cevap:
                    "İşin süresine ve hareketliliğine bağlı — kısa süreli, sahanın farklı noktalarında hareketli çalışma gerektiren montaj işlerinde platform daha ekonomiktir; büyük ve sabit bir yüzeyin toptan kaplanacağı uzun süreli işlerde iskele daha uygun olabilir. Geniş liman hangarında bazı projelerde ikisi farklı aşamalarda birlikte kullanılır. Montaj planınızı paylaşın, maliyet karşılaştırmasını keşifte çıkaralım.",
            },
            {
                soru: "Kule bitişiğinde montaj sırasında mevcut binanın yaya trafiği nasıl korunuyor?",
                cevap:
                    "Şantiye sınırı geçici bariyerle çizilir ve platformun bomu bu sınırı aşacaksa mevcut bina yönetiminin onayıyla, yaya trafiğinin en az olduğu saatte çalışılır. Mevcut binanın giriş-çıkışları ve acil çıkış kapıları hiçbir aşamada kapatılmaz; gerekiyorsa yönlendirme levhası ve geçici güvenlik önlemi eklenir. Bu koordinasyon, iş planının bina yönetimiyle birlikte kurulan standart bir parçasıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Askıda yük hattı ve vinç koordinasyon kuralları EN 280 ve iş güvenliği mevzuatı çerçevesindedir; Ambarlı çevresindeki liman hangarlarının geniş açık saha, Maslak gibi bölgelerdeki bazı parsellerin ise mevcut binaya bitişik yeni inşaat dokusu taşıdığı kamuya açık saha bilgisidir; montaj koordinasyon pratikleri firma deneyimidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahası Platform Kiralama — Bu Domainde Kapsam Dışı",
        giris:
            "Bu sayfa, dürüstlük ilkesiyle açıkça belirtmek zorunda olduğumuz bir kapsam sınırını anlatır: istanbuleklemliplatform.com, Levent-Maslak-Ataşehir hattındaki gökdelen/kule cephesi ve Ambarlı çevresindeki liman/ardiye tesisleri üzerine kurulu bir uzmanlık hattıdır; tarım sahaları, silo tesisleri ve kırsal/çiftlik yapıları bu uzmanlığın tamamen dışındadır. İstanbul'un kentsel ve liman odaklı coğrafyası, geniş tarım arazisi veya silo tesisi yoğunluğu barındırmaz — bu tip işler genellikle şehrin kırsal çeperlerinde veya farklı illerde yoğunlaşır. Bu sayfayı jenerik bir 'her işi yaparız' cümlesiyle doldurmak yerine, gerçek uzmanlık alanımızı ve bu talebin bize neden gelirse ne önereceğimizi açıkça yazıyoruz.",
        maddeler: [
            {
                baslik: "İstanbul'un kentsel-liman dokusu, tarım/silo yoğunluğu değil",
                metin:
                    "Bu domainin hizmet verdiği coğrafya kule bölgesi ve liman tesisleridir; her ikisi de yoğun kentsel veya endüstriyel-lojistik bir dokudur. Tarım arazisi ve silo tesisi gibi kırsal yapılar, bu coğrafyanın karakterinde değildir — dolayısıyla bu alanda saha deneyimimiz ve filomuzun bu işe özel bir konfigürasyonu yoktur.",
            },
            {
                baslik: "Silo yapılarının farklı erişim geometrisi",
                metin:
                    "Silo tesisleri, dairesel gövde ve genellikle dar bir zirve erişim noktası gerektirir; bu geometri, kule cephesi veya liman hangarı çatısından farklı bir makine yaklaşımı ister. Bu tip işlerde uzman olan ekipler, silo çapına özel bom açısı ve arazi tipi tahrik konusunda deneyimli olmalıdır — biz bu deneyimi iddia etmiyoruz.",
            },
            {
                baslik: "Kırsal/engebeli zeminde farklı tahrik ihtiyacı",
                metin:
                    "Tarım sahalarındaki zemin genellikle toprak, stabilize veya engebeli arazi türündendir ve bu, kule/liman sahalarındaki beton zeminden köklü biçimde farklıdır. Bu zeminlerde çalışacak makinenin arazi tipi tahrik, geniş lastik ve farklı denge sertifikasına sahip olması gerekir; filomuz öncelikli olarak kentsel beton zemin ve liman sahası için yapılandırılmıştır.",
            },
            {
                baslik: "Talep gelirse ne öneriyoruz",
                metin:
                    "Tarım veya silo sahası talebi gelirse, önce iş tanımını netleştiriyoruz — bazen talep aslında bir depo/ardiye yapısına yakınsa (örneğin tarımsal ürün depolama hangarı, silo değil), bu bizim liman/ardiye tarafındaki iç mekân deneyimimize yakınsayabilir ve o durumda dürüstçe değerlendiririz. Gerçek bir kırsal arazi/silo işiyse, bu konuda uzman bir tedarikçiye yönlendirmeyi tercih ederiz; yanlış makineyle sahaya gidip iş yapamamak, hem müşteriye hem bize zarar verir.",
            },
            {
                baslik: "Neden bu sayfayı jenerik doldurmuyoruz",
                metin:
                    "Bu domainin diğer 10 hizmet sayfası, gerçek uzmanlığımızı (kule cephesi + liman tesisi) yansıtır; tarım-silo sayfasını aynı iddiayla doldurmak, hem okuyucuyu yanıltır hem de arama motorlarının kopya/doorway içerik olarak değerlendirebileceği bir jenerik metin üretir. Bunun yerine kapsam dışı olduğunu açıkça yazmak, hem daha dürüst hem daha az riskli bir yaklaşımdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bu domainin uzmanlığı ile tarım/silo işinin farkı",
                paragraflar: [
                    "Aşağıdaki tablo, bu domainin gerçek uzmanlık alanı ile tarım/silo sahası işinin temel farklarını gösterir.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Bu domainin uzmanlığı", "Tarım/silo sahası"],
                    satirlar: [
                        ["Saha tipi", "Kule cephesi / liman-ardiye", "Kırsal arazi / silo tesisi"],
                        ["Zemin", "Beton, kaldırım, kaplama", "Toprak, stabilize, engebeli"],
                        ["Erişim geometrisi", "Dar servis şeridi / geniş liman koridoru", "Dairesel silo gövdesi, açık arazi"],
                        ["Bizim deneyimimiz", "Yoğun (bu domainin çekirdek işi)", "Yok / sınırlı"],
                        ["Önerimiz", "Doğrudan hizmet veririz", "Uzman tedarikçiye yönlendiririz"],
                    ],
                },
            },
            {
                baslik: "Yakın ama farklı: liman ardiyesindeki tarımsal ürün deposu",
                paragraflar: [
                    "Bazı liman ve lojistik ardiye tesislerinde tarımsal ürün (tahıl, yem gibi) depolanabilir; bu durumda söz konusu olan bir silo değil, standart bir depolama hangarıdır ve bizim liman/ardiye iç mekân deneyimimize girer. Bu ayrımı netleştirmek için iş tanımını (silo mu, depo hangarı mı) keşifte mutlaka soruyoruz — ikisi çok farklı makine ve erişim planı gerektirir.",
                ],
            },
            {
                baslik: "Dürüst yönlendirmenin uzun vadeli faydası",
                paragraflar: [
                    "Bir işi yapamayacağımızı baştan söylemek, kısa vadede bir talebi kaybetmek gibi görünse de, uzun vadede güven inşa eder — yanlış makineyle sahaya gidip işi tamamlayamamak, hem zaman hem itibar kaybettirir. Bu yüzden kapsam dışı taleplerde, elimizden geldiğince doğru yöne (uzman bir silo/tarım ekipmanı tedarikçisi) yönlendirmeyi tercih ediyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo bakımı için platform kiralayabilir miyiz?",
                cevap:
                    "Bu konuda uzman değiliz — silo yapıları dairesel gövde ve özel bir zirve erişim geometrisi gerektirir, bizim filomuz ve deneyimimiz kule cephesi ve liman/ardiye sahasına göre yapılandırılmıştır. Silo işiniz varsa, bu konuda deneyimli bir tedarikçiye yönlenmenizi öneririz; yanlış makineyle gelip işi yapamamak sizin için de bizim için de kötü bir sonuç olur.",
            },
            {
                soru: "Tarım arazimizde çelik konstrüksiyon (sera, ahır) montajı için hizmet veriyor musunuz?",
                cevap:
                    "Kırsal/engebeli arazide çalışacak arazi tipi tahrik ve zemin uzmanlığımız sınırlı olduğu için bu işi doğrudan önermiyoruz. Çelik konstrüksiyon montaj deneyimimiz liman hangarı ve kule bitişiği gibi kentsel/endüstriyel sahalara dayanır; kırsal arazi koşulları (toprak zemin, engebe) farklı bir makine ve denge sertifikası gerektirir.",
            },
            {
                soru: "Ardiyemizde tahıl/yem depoluyoruz, bu silo sayılır mı?",
                cevap:
                    "Hayır, eğer söz konusu olan standart bir depolama hangarıysa (silo gövdeli özel bir yapı değilse) bu bizim liman/ardiye iç mekân deneyimimize girer ve hizmet verebiliriz. Silo mu depo hangarı mı olduğunu netleştirmek için iş tanımını ve fotoğrafını keşifte isteriz — ikisi çok farklı erişim planı gerektirir.",
            },
            {
                soru: "Neden bu hizmeti sunmuyorsunuz, filo eksikliği mi?",
                cevap:
                    "Kısmen evet — filomuz öncelikli olarak kentsel beton zemin ve liman sahası için akülü/dizel model karışımıyla yapılandırılmıştır; kırsal engebeli arazide gereken geniş lastikli, yüksek tırmanma kabiliyetli modeller bizim standart filomuzun parçası değildir. Bu iş için doğru ekipmana sahip olmayan bir filoyla sahaya gitmek, hem güvenli değil hem verimsizdir.",
            },
            {
                soru: "Yine de bir teklif alabilir miyiz, belki uygun bir çözüm bulursunuz?",
                cevap:
                    "İş tanımını paylaşırsanız değerlendiririz — bazen 'tarım/silo' olarak tanımlanan bir iş aslında bizim kapsamımıza giren bir depo/hangar işi olabilir. Gerçekten kırsal arazi veya silo gövdesi işiyse, dürüstçe kapsam dışı olduğumuzu söyler ve mümkünse bu konuda uzman bir tedarikçi önerisinde bulunuruz.",
            },
            {
                soru: "İstanbul'da tarım/silo işine bakan bir kardeş firmanız var mı?",
                cevap:
                    "Belirli bir kardeş firma önerisi sitede yer almıyor çünkü bu, güncel ve doğrulanmış bir yönlendirme olmadan yapılırsa yanıltıcı olur. Talebiniz geldiğinde, o an güncel bilgimize göre uygun bir yönlendirme yapmaya çalışırız; ama bu bir garanti değil, elimizden gelen bir kolaylık sağlama çabasıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İstanbul'un kentsel/liman ağırlıklı coğrafyasının geniş tarım arazisi/silo tesisi yoğunluğu barındırmadığı kamuya açık coğrafi bilgidir; kapsam dışı olduğu dürüstçe belirtilmiş, filo ve deneyim sınırı firma kendi değerlendirmesidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Kule Aydınlatması ve Liman Saha Direklerinde Enerji-Aydınlatma Bakım Platformu",
        giris:
            "Enerji ve aydınlatma bakımı, İstanbul'un kule ve liman ikilisinde iki farklı ölçekte karşımıza çıkar. Kule tarafında bu, cephe aydınlatma armatürleri, tabela/logo iç aydınlatması, ofis kat elektrik tesisatı ve kule tepesindeki uçak ikaz ışığı gibi noktasal ama yüksekte konumlu işlerdir; erişim, dar servis şeridinden veya bina içi teknik galeriden yapılır. Liman tarafında ise saha aydınlatma direkleri, konteyner terminali güvenlik aydınlatması ve enerji dağıtım hattı çevresi bakımı söz konusudur — burada makine, geniş açık sahada direk tepesine veya hat çevresine, ağır araç trafiğiyle koordineli biçimde ulaşır. İki sahanın ortak paydası elektrik hattına güvenli mesafe kuralıdır: bom iletken gövdeye sahiptir ve bu kural saha büyüklüğünden bağımsız olarak aynı titizlikte uygulanır. Bu sayfa, iki farklı ölçekteki enerji-aydınlatma bakım işinde platform kullanımını anlatır.",
        maddeler: [
            {
                baslik: "Kule cephesinde aydınlatma armatürü ve tabela bakımı",
                metin:
                    "Kule cephesindeki aydınlatma armatürleri ve logo/tabela iç aydınlatması, genellikle yüksek katlarda ve görünür noktalarda konumlanır; bakım işleri bu görünürlük nedeniyle çoğunlukla gece pencerelerinde yapılır. Sepede taşınabilir aydınlatma eklenir, elektrik kesintisi gerektiren işlerde bina yönetiminin elektrik ekibiyle koordinasyon sağlanır — kesinti zamanlaması diğer kat kullanıcılarını etkilemeyecek şekilde planlanır.",
            },
            {
                baslik: "Kule tepesinde uçak ikaz ışığı ve teknik galeri elektrik hattı",
                metin:
                    "Bazı yüksek kulelerde çatı seviyesinde uçak ikaz ışığı bulunur; bu armatürün bakımı, kulenin en üst erişim noktasını gerektirir ve bina yönetiminin çatı erişim protokolüne (genellikle ayrı bir güvenlik onayı) tabidir. Kule eteğindeki teknik galerideki elektrik dağıtım panosu ve kablo kanalı bakımı ise daha sık tekrarlanan, kısa süreli bir iş kalemidir ve bina yönetiminin belirlediği sabit bir bekleme noktasından yürütülür.",
            },
            {
                baslik: "Liman sahasında aydınlatma direği ve güvenlik aydınlatması",
                metin:
                    "Konteyner terminali ve ardiye sahalarındaki yüksek aydınlatma direkleri, sahanın genel güvenliği için kritik olduğundan bakım genellikle terminalin belirlediği düşük operasyon yoğunluklu bir vardiya penceresinde yapılır. Makine, direk tabanına park edilir ve bom, direk tepesine düz veya hafif açılı bir erişimle ulaşır; sahanın açık ve rüzgâra maruz olması nedeniyle rüzgâr sınırına dikkat edilir.",
            },
            {
                baslik: "Enerji dağıtım hattı çevresinde güvenli mesafe",
                metin:
                    "Hem kule hem liman sahasında enerji hattına yakın çalışma, bom gövdesinin iletken olması nedeniyle güvenli mesafe kuralına tabidir. Hat enerjisiz kılınabiliyorsa (ilgili kurumun süreciyle) iş rahat planlanır; kılınamıyorsa gerilim sınıfına göre tanımlı mesafe korunacak şekilde erişim geometrisi çizilir. Mesafenin sağlanamadığı işler alınmaz; bu, saha büyüklüğünden bağımsız sabit bir güvenlik kuralıdır.",
            },
            {
                baslik: "Acil aydınlatma arızasında hızlı müdahale",
                metin:
                    "Kule tarafında acil bir aydınlatma arızası (örneğin ana giriş tabelası veya güvenlik aydınlatması), bina yönetiminin önceden tanımlanmış 'acil erişim' prosedürüyle aynı gün çözülebilir; bu prosedür bilinen operatör ve önceden onaylı çalışma saati aralığı gerektirir. Liman tarafında ise acil müdahale, terminal güvenlik aydınlatmasının kritikliği nedeniyle terminalin kendi acil bakım protokolüne bağlı olarak hızlandırılabilir; her iki durumda da önceden kurulmuş bir hızlı erişim anlaşması, ilk kez gelen bir talepten daha hızlı sonuç verir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman aydınlatma-enerji işleri karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki sahadaki tipik enerji-aydınlatma bakım işlerini karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Saha", "Zaman penceresi", "Kritik nokta"],
                    satirlar: [
                        ["Cephe armatürü/tabela", "Kule", "Gece", "Elektrik kesinti koordinasyonu"],
                        ["Uçak ikaz ışığı (çatı)", "Kule", "Bina yönetimi onaylı pencere", "Çatı erişim protokolü"],
                        ["Teknik galeri elektrik panosu", "Kule eteği", "Gündüz (yan cephe)", "Sabit bekleme noktası"],
                        ["Saha aydınlatma direği", "Liman/ardiye", "Vardiya arası sakin pencere", "Rüzgâr sınırı"],
                        ["Enerji hattı çevresi", "Her iki saha", "Hat kesinti durumu bilinerek", "Güvenli mesafe"],
                    ],
                },
            },
            {
                baslik: "Elektrik ekibiyle koordinasyon: kule ile liman farkı",
                paragraflar: [
                    "Kule tarafında elektrik kesintisi gerektiren işlerde bina yönetiminin kendi elektrik/teknik ekibiyle koordinasyon kurulur; kesinti, diğer kat kullanıcılarını en az etkileyecek saatte (genellikle gece) yapılır. Liman tarafında ise enerji hattı çevresindeki işler, terminalin kendi elektrik/altyapı biriminin bilgisi dahilinde planlanır ve hat kesintisi gerekiyorsa bu, terminalin operasyon programına göre zamanlanır.",
                    "Her iki sahada da hattın gerçekten enerjisiz kılınıp kılınmadığı, iş başlamadan önce yazılı veya sözlü teyitle doğrulanır; teyit olmadan hatta yakın çalışma başlatılmaz.",
                ],
            },
            {
                baslik: "Önceden kurulmuş acil erişim anlaşmasının değeri",
                paragraflar: [
                    "Sürekli hizmet aldığımız kule ve liman tesislerinde, acil aydınlatma/enerji arızaları için önceden tanımlanmış bir hızlı erişim prosedürü kurarız — bilinen operatör, bilinen güvenlik iletişim hattı ve önceden onaylı çalışma saati aralığı. Bu altyapı olmadan gelen ilk kez talep, onay süreci nedeniyle aynı gün yetişmeyebilir; bu yüzden düzenli bakım ihtiyacı olan müşterilere bu anlaşmayı öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kule tepesindeki uçak ikaz ışığı bakımı için özel bir izin mi gerekiyor?",
                cevap:
                    "Evet, genellikle çatı seviyesine erişim bina yönetiminin ayrı bir güvenlik onayına tabidir; bu, kule cephesindeki standart bakım onayından farklı, daha sıkı bir prosedür olabilir. Çatı erişim protokolü ve varsa ek güvenlik ekipmanı gerekliliği keşifte bina yönetiminden öğrenilir; bu bilgi olmadan çatı işi planlanmaz.",
            },
            {
                soru: "Liman sahasındaki aydınlatma direği bakımı gündüz mü yapılıyor?",
                cevap:
                    "Genellikle terminalin belirlediği vardiya arası sakin pencerede yapılır; bu pencere gündüz veya gece olabilir, terminalin operasyon yoğunluğuna bağlıdır. Direk tabanına park edip bomla tepeye ulaşma işlemi kendisi gündüz-gece farkı gözetmez, ama sahadaki araç trafiğinin en az olduğu an tercih edilir.",
            },
            {
                soru: "Elektrik hattı kesilmeden yakınında çalışabilir misiniz?",
                cevap:
                    "Gerilim sınıfına göre tanımlı güvenli mesafe korunabiliyorsa evet, çalışabiliriz; mesafe sağlanamıyorsa hattın enerjisiz kılınması istenir ve bu olmadan iş yapılmaz. Bom iletken gövdeye sahip olduğu için bu kural pazarlık konusu değildir. Hat konumunu fotoğrafta işaretlerseniz, geometri kontrolünü keşifte yaparız.",
            },
            {
                soru: "Kule ana giriş tabelası bozuldu, aynı gün müdahale mümkün mü?",
                cevap:
                    "Kompakt sınıf makineler için genellikle mümkündür çünkü bu tip acil işlerde hızlı konumlandırılabilen kompakt eklemli veya makaslı yeterlidir. Aynı gün müdahalede zaman kaybettiren adım nakliye değil bina yönetiminin acil giriş onayıdır; sürekli hizmet aldığımız kulelerde önceden tanımlanmış bir acil erişim prosedürü bu süreyi kısaltır.",
            },
            {
                soru: "Liman terminalindeki güvenlik aydınlatması acil arıza sayılır mı?",
                cevap:
                    "Genellikle evet, çünkü saha güvenlik aydınlatması terminalin genel operasyon güvenliğini ilgilendirir; bu tip arızalarda terminal işletmesi kendi acil bakım protokolünü devreye alabilir ve bizim müdahalemiz bu protokole göre hızlandırılır. Sürekli çalıştığımız terminallerde bu süreç önceden tanımlanmış olduğu için daha hızlı işler.",
            },
            {
                soru: "Teknik galerideki elektrik panosu bakımı ne sıklıkla yapılmalı?",
                cevap:
                    "Sıklık, panonun yaşına ve bina yönetiminin bakım programına bağlıdır; biz bir bakım takvimi önermek yerine bina yönetiminin kendi teknik ekibinin veya elektrik mühendisinin belirlediği periyoda göre hizmet veririz. Düzenli tekrarlanan bir iş kalemiyse, sabit bir bekleme noktasından günlük iş listesine göre hareket edilmesi, her seferinde yeniden konumlandırmadan daha verimlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yüksek kulelerde çatı seviyesinde uçak ikaz ışığı bulunabilmesi ve liman sahalarının güvenlik aydınlatma direklerine sahip olması genel bina/saha bilgisidir; güvenli mesafe kuralı EN 280 ve elektrik güvenliği mevzuatına, koordinasyon pratikleri firma deneyimine dayanır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Güvenlik Onaylı Kule ve Terminal Sahalarında Operatörlü Platform Kiralama",
        giris:
            "İstanbul'un kule ve liman ikilisinde operatörlü kiralama, çoğu zaman bir tercih değil bir zorunluluktur. Ataşehir'deki finans kurumu binalarında operatör kimliği, güvenlik biriminin onayından geçmeden sahaya giremez; Levent-Maslak kulelerinde bina yönetimi, dışarıdan gelen her operatörün kimlik ve yeterlilik bilgisini önceden ister. Liman ve ardiye tesislerinde ise terminal işletmesinin giriş prosedürü, operatör kimliğinin plaka ve makine seri numarasıyla birlikte önceden bildirilmesini şart koşar. Bu ortamların yüksek güvenlik/erişim standardı, operatörsüz (sadece makine) kiralamayı pratikte neredeyse imkânsız kılar — çünkü sahaya giren kişinin kimliği, yeterliliği ve sigortası önceden bilinmelidir. Bu sayfa, iki sahada operatörlü kiralamanın neden standart hâle geldiğini ve süreçlerin nasıl işlediğini anlatır.",
        maddeler: [
            {
                baslik: "Finans kurumu binalarında operatör kimlik onayı",
                metin:
                    "Ataşehir'deki banka ve finans kurumu genel merkezlerinde çalışacak her operatör, kurumun kendi güvenlik biriminden onay alır; bu onay operatör kimlik bilgisi, yeterlilik belgesi ve iş tanımının önceden bildirilmesini gerektirir. Bu süreç, operatörsüz bir kiralamada müşterinin kendi personeliyle de aynı şekilde işler ama bizim operatörümüzle çalışıldığında evrak seti önceden hazır ve standart olduğu için süreç daha hızlı ilerler.",
            },
            {
                baslik: "Bina yönetiminin dışarıdan gelen operatöre bakışı",
                metin:
                    "Levent-Maslak kulelerinde bina yönetimi, dışarıdan gelen her ekip için operatör kimliği, sigorta bilgisi ve makine periyodik kontrol raporunu talep eder; bu evrak seti önceden hazırlanmazsa makine sahaya girse dahi işe başlanamaz. Operatörlü kiralamada bu evrak bizim tarafımızdan standart olarak hazır tutulur ve teklif aşamasında paylaşılır; operatörsüz kiralamada bu sorumluluk müşteriye geçer.",
            },
            {
                baslik: "Liman terminalinde operatör-plaka-makine üçlüsü bildirimi",
                metin:
                    "Terminal işletmeleri, sahaya giren her ekipman için operatör kimliği, araç plakası ve makine seri numarasını önceden ister; bu üçlü bilgi olmadan giriş kapısından içeri geçilmez. Operatörlü kiralamada bu bilgi bizim tarafımızdan hazırlanır ve iş tekrarlandıkça (aynı operatör, aynı terminal) süreç zamanla hızlanır çünkü terminal, bizi ve standart evrak setimizi tanır hâle gelir.",
            },
            {
                baslik: "Operatörsüz kiralamanın gerçekçi olduğu durumlar",
                metin:
                    "Operatörsüz kiralama, müşterinin kendi yeterlilik belgeli personeli varsa ve saha erişim onayı bu personel adına ayrıca alınabiliyorsa mümkündür; bu genellikle uzun süreli, düzenli iç mekân işlerinde (örneğin bir kulenin kendi teknik ekibi) görülür. Ancak güvenlik onayı yoğun sahalarda (finans kurumu, terminal) operatörsüz kiralama, sürecin karmaşıklığını müşteriye devretmiş olur — bu yüzden bu sahalarda dürüstçe operatörlü seçeneği öneririz.",
            },
            {
                baslik: "Operatör sürekliliğinin sahaya faydası",
                metin:
                    "Aynı kule veya terminalde tekrarlanan işlerde aynı operatörün atanması, hem güvenlik onay sürecini hızlandırır (kurum operatörü tanır) hem de operatörün sahanın kendine özgü kurallarını (asansör saatleri, vardiya penceresi, park noktası) bilmesini sağlar. Bu süreklilik, özellikle düzenli bakım sözleşmesi olan müşterilerde bilinçli olarak tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman sahasında operatörlü/operatörsüz karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki sahada operatörlü ve operatörsüz kiralamanın gerçekçi uygulanabilirliğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Saha", "Operatörlü", "Operatörsüz", "Onay yükü"],
                    satirlar: [
                        ["Finans kurumu kulesi (Ataşehir)", "Standart tercih", "Nadiren, kurumun ayrı onayıyla", "Yüksek"],
                        ["Ofis/plaza kulesi (Levent-Maslak)", "Yaygın tercih", "Mümkün, uzun süreli iç iş için", "Orta-yüksek"],
                        ["Liman terminali", "Standart tercih", "Nadiren, terminalin ayrı onayıyla", "Yüksek"],
                        ["Liman ardiyesi (idare ofis içi)", "Tercih edilir", "Kısmen mümkün", "Orta"],
                    ],
                },
            },
            {
                baslik: "Evrak setinin önceden hazır olmasının değeri",
                paragraflar: [
                    "Operatörlü kiralamada operatör yeterlilik belgesi, sigorta bilgisi ve makine periyodik kontrol raporu her zaman güncel ve hazır tutulur; bu, teklif aşamasında bina yönetimine veya terminal işletmesine iletilebilecek standart bir pakettir. Bu hazırlık, güvenlik onay sürecinin en çok zaman alan kısmını (evrak eksikliği nedeniyle ek soru-cevap turu) baştan önler.",
                    "Operatörsüz kiralamada bu paketin hazırlanması müşteriye kalır; bu, mümkün olsa da ek bir idari yük anlamına gelir ve süreç genellikle daha uzun sürer.",
                ],
            },
            {
                baslik: "Aynı operatörün iki sahada dönüşümlü çalışması",
                paragraflar: [
                    "Bazı işletmeler hem kule hem liman tarafında düzenli iş aldığından, aynı operatörün her iki sahada da çalışması istenebilir; bu mümkündür ama operatörün her iki sahanın güvenlik onayından ayrı ayrı geçmesi gerekir çünkü onaylar sahaya özeldir, taşınabilir değildir. Böyle bir düzenli ihtiyaçta, operatörün iki sahanın da onay sürecini önceden tamamlamış olması, günlük planlamayı büyük ölçüde kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ataşehir'deki bankada operatörsüz kiralama hiç mümkün değil mi?",
                cevap:
                    "Tamamen imkânsız değil ama pratikte nadir — kurumun kendi güvenlik onayı, sahaya giren kişinin kimliğini önceden bilmek ister ve bu genellikle bizim operatörümüz üzerinden daha hızlı ilerler. Kendi personelinizle operatörsüz çalışmak istiyorsanız, personelinizin yeterlilik belgesi ve kimlik bilgisinin kurumun güvenlik onayından geçmesi gerekir; bu süreç bizim standart evrak paketimizden daha uzun sürebilir.",
            },
            {
                soru: "Liman terminaline operatör değişikliği olursa ne yapılır?",
                cevap:
                    "Terminal işletmesine yeni operatörün kimlik bilgisi önceden bildirilir ve terminalin kendi onay sürecinden geçmesi beklenir; önceden onaylı bir operatör listesi varsa bu listeye ekleme süreci, ilk kez bildirimden genellikle daha hızlıdır. Operatör değişikliğini mümkün olduğunca erken bildirmek, iş gününde kapıda beklemeyi önler.",
            },
            {
                soru: "Aynı operatör hem Levent'teki kule işimizde hem Ambarlı'daki liman işimizde çalışabilir mi?",
                cevap:
                    "Evet, teknik olarak mümkündür ama operatörün her iki sahanın da kendi güvenlik onayından ayrı ayrı geçmesi gerekir; bir sahadaki onay diğerine otomatik geçmez. Düzenli ihtiyacınız varsa, operatörün iki sahanın da onayını önceden tamamlamasını öneririz; bu, günlük planlamayı büyük ölçüde kolaylaştırır.",
            },
            {
                soru: "Operatörlü kiralamada evrak hazırlığını kim yapıyor?",
                cevap:
                    "Operatör yeterlilik belgesi, sigorta bilgisi ve makine periyodik kontrol raporu bizim tarafımızdan her zaman güncel tutulur ve teklif aşamasında bina yönetimine veya terminal işletmesine iletilir. Bu, operatörlü kiralamanın en büyük pratik avantajlarından biridir — evrak eksikliği nedeniyle yaşanacak gecikmeyi büyük ölçüde önler.",
            },
            {
                soru: "Uzun süreli bir kule projesinde kendi operatörümüzle operatörsüz kiralama yapabilir miyiz?",
                cevap:
                    "Uzun süreli ve düzenli iç mekân işlerinde bu mümkündür; kendi personelinizin yeterlilik belgesi bina yönetiminin güvenlik onayından geçmesi şartıyla operatörsüz kiralama değerlendirilebilir. Bu, özellikle bir kulenin kendi teknik ekibinin sürekli kullandığı bir makine senaryosunda tercih edilir. Kısa süreli veya yüksek güvenlikli sahalarda (finans kurumu gibi) ise operatörlü seçeneği öneririz.",
            },
            {
                soru: "Operatör sürekliliği fiyatı etkiler mi?",
                cevap:
                    "Doğrudan bir fiyat farkı yaratmaz ama dolaylı bir verimlilik sağlar — aynı operatörün sahayı ve kuralları bilmesi, iş süresini kısaltabilir ve onay sürecini hızlandırabilir. Düzenli bakım sözleşmesi olan müşterilerde bu sürekliliği bilinçli olarak öneririz çünkü uzun vadede hem operasyonel hem zaman açısından fayda sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Finans kurumu binalarının ve liman terminallerinin yüksek güvenlik/erişim standardına sahip olduğu genel kurumsal güvenlik bilgisidir; operatör onay süreci ve evrak hazırlığı pratikleri firma deneyimidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Levent-Maslak-Ataşehir Kule Rotası ve Liman Sahası İçi Çok Noktalı Bakım Platformu",
        giris:
            "Çok noktalı rota bakımı, İstanbul'un kule ve liman ikilisinde iki farklı ölçekte anlam kazanır. Kule tarafında bu, aynı işletmenin Levent, Maslak ve Ataşehir'deki birden fazla kule/ofis biriminde (örneğin bir bankanın farklı şubeleri veya bir şirketler grubunun farklı genel merkez katları) tekrarlanan bakım rotasıdır — her durak farklı bina yönetiminin onay sürecine tabidir ve rota, bu onayların zamanlamasına göre kurulur. Liman tarafında ise çok noktalı rota, aynı terminal veya ardiye sahası içindeki birden fazla bakım noktasını (birkaç depo çatısı, birkaç aydınlatma direği, birkaç raf bloğu) tek bir günlük veya haftalık planda birleştirmeyi ifade eder — burada sınır bina değil, terminalin kendi iç sahasıdır. Bu sayfa, iki farklı ölçekteki çok noktalı rotanın nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Kule rotasında farklı bina onaylarının senkronizasyonu",
                metin:
                    "Aynı işletmenin Levent, Maslak ve Ataşehir'de farklı kulelerde birimi varsa, her kulenin kendi bina yönetimi onay süreci ayrı ayrı işler — bir kulenin onayı diğerine geçmez. Rota planlaması, her durağın onay süresini ayrı ayrı hesaba katarak kurulur; bir durakta onay gecikirse, günlük rota o durak atlanarak yeniden sıralanır, tüm rota durmaz.",
            },
            {
                baslik: "Kuleler arası mesafe ve trafik penceresi",
                metin:
                    "Levent-Maslak-Ataşehir arası mesafe, Boğaz geçişini de içerebileceği için (Avrupa-Anadolu yakası arası günler varsa), rota planlamasında trafik yoğun saatlerinden kaçınılır; aynı yaka içindeki duraklar (örneğin Levent-Maslak) tek günde, farklı yakadaki durak ayrı bir güne planlanır. Bu ayrım, hem nakliye süresini hem operatör yorgunluğunu makul seviyede tutar.",
            },
            {
                baslik: "Liman sahası içi çoklu bakım noktası sıralaması",
                metin:
                    "Aynı terminal veya ardiye sahası içinde birden fazla bakım noktası varsa (örneğin üç ayrı depo çatısı ve iki aydınlatma direği), makine sahaya bir kez giriş yapar ve iç sahada noktadan noktaya hareket eder; bu, her nokta için ayrı bir giriş-çıkış prosedürüne göre çok daha verimlidir. Rota sırası, sahadaki ağır araç trafiğinin en az olduğu güzergahlar önceliklendirilerek kurulur.",
            },
            {
                baslik: "Kule ile liman rotasının farklı optimizasyon mantığı",
                metin:
                    "Kule rotasında optimizasyon, her bina için ayrı onay süresini minimize etmeye odaklanır; liman rotasında ise optimizasyon, tek giriş sonrası iç saha güzergahını en kısa yoldan geçmeye odaklanır. İki mantık farklı olduğu için aynı haftaki kule ve liman rotaları ayrı ayrı planlanır, ama nakliye takvimi ortak bir çerçevede birleştirilebilir.",
            },
            {
                baslik: "Rota kesintisinde yedek planlama",
                metin:
                    "Çok noktalı bir rotada bir durakta beklenmedik bir gecikme (onay sorunu, hava koşulu) yaşanırsa, kalan duraklar öncelik sırasına göre yeniden düzenlenir; en kritik/acil durak öne alınır, daha esnek olan durak bir sonraki güne kaydırılabilir. Bu esneklik, rota planının baştan tek bir sıkı sıraya değil, öncelik sırasına göre kurulmasıyla mümkün olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule rotası ile liman sahası içi rota karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki farklı ölçekteki çok noktalı rota mantığını karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Kule rotası (Levent-Maslak-Ataşehir)", "Liman sahası içi rota"],
                    satirlar: [
                        ["Durak sayısı sınırı", "Genellikle 2-4 bina/gün", "Sahaya bağlı, tek girişte çoklu nokta"],
                        ["Onay tipi", "Her bina ayrı bina yönetimi onayı", "Tek terminal giriş prosedürü"],
                        ["Optimizasyon odağı", "Onay süresi + trafik penceresi", "İç saha güzergah kısalığı"],
                        ["Esneklik", "Durak bazlı erteleme mümkün", "Aynı gün içinde sıra değişimi mümkün"],
                    ],
                },
            },
            {
                baslik: "Haftalık planlamanın avantajı",
                paragraflar: [
                    "Günlük değil haftalık planlama, hem kule hem liman rotalarında nakliye tekrarını azaltır — bir haftalık iş listesi baştan paylaşıldığında, hangi günün hangi bölgeye ayrılacağı, hangi duraklarda aynı makinenin kullanılabileceği önceden netleşir. Bu, özellikle birden fazla kulede veya birden fazla liman noktasında düzenli iş alan işletmeler için önemli bir verimlilik kaynağıdır.",
                    "Haftalık plan, aynı zamanda bina/terminal onay sürelerinin erkenden başlatılmasını da sağlar; son dakika eklenen bir durak, o haftanın planına genellikle sığmaz.",
                ],
            },
            {
                baslik: "Tek operatörle çok noktalı rota mı, birden fazla ekip mi",
                paragraflar: [
                    "Kule rotasında iş süreleri kısa ve zaman pencereleri netse tek operatör-makine ikilisi birden fazla durağı gün içinde dönüşümlü gezebilir; işler paralel ilerlemesi gerekiyorsa (aynı gün birden fazla binada eş zamanlı iş) birden fazla ekip planlanır. Liman sahası içi rotada ise tek makine genellikle yeterlidir çünkü tüm noktalar aynı saha sınırları içindedir ve giriş-çıkış tekrarı gerekmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı hafta üç farklı kulede işimiz var, hepsini tek makineyle mi yürütüyorsunuz?",
                cevap:
                    "Süreler kısa ve zaman pencereleri netse mümkündür — tek makine gün içinde veya hafta boyunca duraklar arasında dönüşümlü çalışır. Ama her kulenin kendi bina yönetimi onay süreci ayrı işlediği için, üç kulenin de onayı önceden tamamlanmadan rota kesinleşmez. İşler paralel ilerlemesi gerekiyorsa (aynı gün üç kulede eş zamanlı iş) birden fazla makine planlanır.",
            },
            {
                soru: "Liman sahasında birden fazla depo çatısı bakımı tek girişte mi yapılıyor?",
                cevap:
                    "Evet, bu liman sahası içi rotanın temel avantajıdır — makine sahaya bir kez giriş yapar, iç sahada noktadan noktaya hareket eder. Bu, her depo için ayrı giriş-çıkış prosedürüne göre çok daha verimlidir. Rota sırası, sahadaki araç trafiğinin en az olduğu güzergahlar önceliklendirilerek kurulur.",
            },
            {
                soru: "Bir kuledeki onay gecikirse tüm rota mı erteleniyor?",
                cevap:
                    "Hayır, yalnızca o durak ertelenir veya sıradan çıkarılır; kalan duraklar öncelik sırasına göre yeniden düzenlenir. Rota planı baştan bu esnekliği hesaba katacak şekilde kurulur — tek bir sıkı sıraya değil, öncelik sırasına dayanır. Bu sayede bir binadaki gecikme, diğer duraklardaki işin tamamen durmasına yol açmaz.",
            },
            {
                soru: "Levent ile Ataşehir arasında aynı gün rota yapılabilir mi, Boğaz geçişi sorun olur mu?",
                cevap:
                    "Teorik olarak mümkündür ama pratikte önerilmez — Boğaz geçişi trafiği, özellikle yoğun saatlerde ciddi zaman kaybına yol açabilir. Bu yüzden genel yaklaşımımız, aynı yakadaki durakları (Levent-Maslak gibi) aynı güne, farklı yakadaki durağı (Ataşehir gibi) ayrı bir güne planlamaktır. Bu ayrım hem nakliye süresini hem operatör yorgunluğunu makul seviyede tutar.",
            },
            {
                soru: "Haftalık rota planı ne kadar önceden hazırlanmalı?",
                cevap:
                    "Mümkünse en az bir hafta önceden — bu süre, her durağın (özellikle kule tarafındaki) bina yönetimi onay sürecinin zamanında tamamlanmasını sağlar. Son dakika eklenen bir durak, o haftanın planına genellikle sığmaz çünkü onay süreci ayrı işler. Düzenli çok noktalı ihtiyacı olan müşterilere aylık bir çerçeve plan da önerebiliriz.",
            },
            {
                soru: "Çok noktalı rotada operatör yorgunluğu nasıl yönetiliyor?",
                cevap:
                    "Günlük durak sayısı ve mesafe, operatörün güvenli çalışma saatini aşmayacak şekilde sınırlandırılır; uzun mesafeli veya çok sayıda duraklı günlerde ikinci bir operatör devreye alınabilir. Bu, özellikle Boğaz geçişi gibi uzun nakliye süresi gerektiren rotalarda dikkat ettiğimiz bir noktadır — yorgun bir operatörle hassas kule cephesi işine girmeyiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Levent-Maslak-Ataşehir arası mesafenin Boğaz geçişini içerebileceği kamuya açık coğrafi bilgidir; rota optimizasyonu ve onay senkronizasyonu pratikleri firma deneyimidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin / Arazi Platform Kiralama — Bu Domainde Sınırlı Kapsam",
        giris:
            "Bu domainin uzmanlığı kentsel kule cephesi ve liman/ardiye tesisi olduğu için, zemin koşulları da bu iki sahanın karakteriyle sınırlıdır: kule tarafında beton kaldırım ve servis şeridi, liman tarafında endüstriyel beton veya sıkıştırılmış stabilize saha. Kırsal toprak arazi, engebeli/dağlık zemin veya tarım sahası gibi klasik 'zor zemin' senaryoları bu domainin kapsamı dışındadır — İstanbul'un kentsel ve liman odaklı coğrafyası bu tip arazilere yoğun olarak sahip değildir. Bununla birlikte, liman sahasının bazı bölümlerinde (rıhtım kenarı, henüz asfaltlanmamış yeni geliştirme alanı) hafif düzensiz veya sıkıştırılmamış zemin görülebilir ve bu, klasik kırsal arazi kadar olmasa da standart beton zeminden farklı bir değerlendirme gerektirir. Bu sayfa, hem kapsam sınırını hem de liman sahasındaki bu sınırlı istisnayı dürüstçe anlatır.",
        maddeler: [
            {
                baslik: "Kule tarafında zemin neredeyse her zaman beton/kaldırım",
                metin:
                    "Levent-Maslak-Ataşehir kulelerinin servis şeritleri, kaldırımları ve otopark rampaları standart beton veya asfalt yüzeydir; burada 'zor zemin' anlamında bir kısıt yoktur, kısıt daha çok şerit genişliği ve zemin altı boşluğun taşıma kapasitesidir (teknik galeri, otopark üstü gibi). Bu, klasik arazi tipi zorluktan farklı bir mühendislik sorunudur ve zaten diğer hizmet sayfalarımızda (özellikle eklemli platform sayfası) ele alınır.",
            },
            {
                baslik: "Liman sahasının çoğu endüstriyel beton veya sıkıştırılmış stabilize",
                metin:
                    "Konteyner terminali ve ardiye sahalarının büyük kısmı, ağır araç trafiğini taşıyacak şekilde endüstriyel beton veya iyi sıkıştırılmış stabilize zemindir; bu, standart makine lastikleri ve dengeleme sistemleriyle sorunsuz çalışılan bir yüzeydir. Klasik anlamda 'zor zemin' (yumuşak toprak, çamur, engebeli arazi) bu sahaların tipik karakterinde değildir.",
            },
            {
                baslik: "İstisna: rıhtım kenarı ve yeni geliştirme alanları",
                metin:
                    "Bazı liman sahalarının rıhtım kenarına yakın bölümlerinde veya henüz tamamen geliştirilmemiş yeni alanlarında, zemin standart beton kadar düzgün olmayabilir — hafif düzensiz, kısmen sıkıştırılmamış veya nemli olabilir. Bu durumda makinenin denge ve taşıma sınırları normalden daha dikkatli kontrol edilir; şüpheli bir zemin varsa iş öncesi bir zemin değerlendirmesi (görsel kontrol, gerekirse taşıma testi) istenir.",
            },
            {
                baslik: "Gerçek bir kırsal/arazi işi gelirse",
                metin:
                    "Eğer talep gerçekten kırsal toprak arazi veya dağlık/engebeli bir zeminse (bu domainin kapsamındaki kule/liman sahalarının dışında bir yerdeyse), bu iş için filomuz ve deneyimimiz standart olarak yapılandırılmamıştır; arazi tipi tahrik ve geniş lastikli özel modeller gerektiren bu işlerde dürüstçe kapsam dışı olduğumuzu belirtir, mümkünse uzman bir tedarikçiye yönlendiririz.",
            },
            {
                baslik: "Neden bu ayrımı net yapıyoruz",
                metin:
                    "Zemin uygunluğunu abartarak her işi kabul etmek, sahada makinenin denge sınırını zorlayan veya hiç çalışamayan bir senaryoya yol açabilir — bu hem güvenlik hem itibar riskidir. Bu yüzden zemin durumunu keşifte dürüstçe değerlendiriyor, standart beton/stabilize sahalarda güvenle çalışıyor, gerçek anlamda zor arazi işlerinde ise kapsam dışı olduğumuzu açıkça söylüyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bu domainin zemin profili",
                paragraflar: [
                    "Aşağıdaki tablo, bu domainin hizmet verdiği sahalardaki tipik zemin durumunu özetler.",
                ],
                tablo: {
                    basliklar: ["Saha", "Tipik zemin", "Zorluk seviyesi", "Kapsam"],
                    satirlar: [
                        ["Kule servis şeridi/kaldırım", "Beton/asfalt", "Düşük (genişlik kısıtı var)", "Standart hizmet"],
                        ["Liman ana saha (konteyner alanı)", "Endüstriyel beton", "Düşük", "Standart hizmet"],
                        ["Liman ardiye iç mekân", "Beton", "Düşük", "Standart hizmet"],
                        ["Rıhtım kenarı / yeni geliştirme", "Kısmen düzensiz/stabilize", "Orta (değerlendirme gerekir)", "Dikkatli değerlendirmeyle hizmet"],
                        ["Kırsal toprak arazi / engebeli zemin", "Toprak/dağlık", "Yüksek", "Kapsam dışı"],
                    ],
                },
            },
            {
                baslik: "Rıhtım kenarında zemin değerlendirmesi nasıl yapılır",
                paragraflar: [
                    "Rıhtım kenarına yakın bir işte, önce zeminin görsel durumu (çatlak, çökme, nem) kontrol edilir; şüpheli bir görüntü varsa terminal işletmesinden zeminin taşıma kapasitesi hakkında bilgi istenir. Makinenin ayak/lastik basıncı, zeminin taşıyabileceği yükle karşılaştırılır — bu karşılaştırma net değilse, iş daha güvenli bir noktadan (rıhtım kenarından biraz içeride) planlanır.",
                    "Bu değerlendirme, standart beton sahadaki işlerden daha fazla zaman alır ama denge kaybı riskini almaktan çok daha ucuzdur.",
                ],
            },
            {
                baslik: "Kapsam dışı bir talep geldiğinde izlenen yol",
                paragraflar: [
                    "Kırsal arazi veya engebeli zemin talebi geldiğinde önce iş tanımını ve konumu netleştiririz — bazen talep aslında liman sahası çevresindeki bir alanla karıştırılmış olabilir ve bizim kapsamımıza girebilir. Gerçekten kapsam dışıysa, bu konuda deneyimli olduğunu bildiğimiz bir tedarikçiye yönlendirmeyi tercih ederiz; bu, hem müşteri için daha hızlı bir çözüm hem bizim için doğru bir sınır çizmektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Liman sahasındaki rıhtım kenarında çalışabilir misiniz?",
                cevap:
                    "Genellikle evet, ama önce zemin durumu değerlendirilir — rıhtım kenarına yakın bölümler standart beton kadar düzgün olmayabilir. Görsel kontrol ve gerekirse terminal işletmesinden taşıma kapasitesi bilgisi alındıktan sonra, makinenin güvenle çalışabileceği bir konum belirlenir. Zemin şüpheliyse iş, rıhtım kenarından biraz içeride, daha güvenli bir noktadan planlanır.",
            },
            {
                soru: "Kırsal bir arazide silo veya ahır çevresinde çalışma yapıyor musunuz?",
                cevap:
                    "Hayır, bu domainin uzmanlığı kentsel kule cephesi ve liman/ardiye tesisidir; kırsal toprak arazi veya engebeli zemin için filomuz ve deneyimimiz standart olarak yapılandırılmamıştır. Böyle bir talebiniz varsa dürüstçe kapsam dışı olduğumuzu söyler, mümkünse bu konuda uzman bir tedarikçiye yönlendiririz.",
            },
            {
                soru: "Liman sahasının yeni geliştirilen bölümünde zemin henüz asfaltlanmamış, sorun olur mu?",
                cevap:
                    "Sorun olabilir, bu yüzden önce zemin sıkıştırma durumu kontrol edilir; yeterince sıkıştırılmış stabilize zeminde standart makine çalışabilir, ama gevşek veya nemli bir zeminde denge riski artar. Şüpheli durumlarda iş öncesi bir saha ziyaretiyle zemin değerlendirilir; gerekirse geçici bir zemin takviyesi (plaka, tabla) önerilir.",
            },
            {
                soru: "Kule servis şeridindeki zemin altı boşluk 'zor zemin' sayılır mı?",
                cevap:
                    "Hayır, bu farklı bir mühendislik sorunudur — servis şeridinin kendisi beton ve düzgündür, asıl kısıt zemin altındaki otopark veya teknik galeri boşluğunun taşıma kapasitesidir. Bu konu, bu sayfada değil eklemli platform ve bölge sayfalarımızda ele alınır; oradaki 'zemin yükü kontrolü' bu domainde asıl karşılaşılan kısıttır, klasik arazi zorluğu değildir.",
            },
            {
                soru: "Zor zemin işini kabul etmemeniz bir güvenlik önlemi mi, kapasite eksikliği mi?",
                cevap:
                    "İkisinin birleşimi — filomuz standart olarak kentsel beton ve liman stabilize zemin için yapılandırılmıştır, gerçek kırsal arazi için gereken arazi tipi tahrik ve geniş lastikli modeller standart filomuzun parçası değildir. Bu ekipmana sahip olmadan bir işi 'olur' diyerek kabul etmek güvenlik riski taşır; bu yüzden dürüstçe kapsam dışı olduğumuzu belirtiyoruz.",
            },
            {
                soru: "Zemin değerlendirmesi ek ücret gerektiriyor mu?",
                cevap:
                    "Standart keşif sürecinin bir parçasıdır, ayrı bir ücret kalemi değildir. Rıhtım kenarı gibi şüpheli zeminlerde bu değerlendirme biraz daha zaman alabilir ama bu, işin güvenli ilerlemesi için gereken normal bir adımdır; ek maliyet yalnızca zemin takviyesi (plaka, tabla, geçici düzeltme) gerekiyorsa ve bu takviye önceden konuşulup onaylanarak uygulanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kule servis şeritlerinin beton/asfalt, liman ana sahalarının endüstriyel beton/stabilize zeminli olduğu kamuya açık saha bilgisidir; rıhtım kenarı zemin değerlendirmesi ve kapsam dışı yönlendirme pratikleri firma deneyimidir.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Kule Eteğinde ve Liman Sahasında Makaslı Platform Kiralama",
        giris:
            "Makaslı platform, dikey ve düz kalkışıyla eklemli sınıfın yerini alamayacağı iki ayrı ortamda öne çıkar: gökdelen kulelerinin zemin katı ve teknik galerisinde, bir de liman tesislerinin geniş, düz ve engelsiz saha zeminlerinde. Kule tarafında iş genellikle cephe dışına değil, iç mekâna dönük çalışır — lobi tavanı, teknik galeri boru hattı, otopark rampası aydınlatması gibi düz bir sepet hareketinin yeterli olduğu noktalarda makaslı, eklemli bomun sağladığı yatay erişim esnekliğine ihtiyaç duyulmadan daha geniş sepet alanı ve daha yüksek kapasite sunar; iki-üç kişilik ekip ve malzemenin birlikte taşınması gereken raf/tesisat işlerinde bu kapasite farkı belirleyicidir. Liman tarafında ise tablo tamamen değişir: ardiye ve depolama sahalarının geniş, düz, beton veya stabilize zeminleri makaslı platformun en verimli çalıştığı arazi tipidir; konteyner istifleme koridorları arasında, çatı altı aydınlatma hattında veya depo cephesindeki büyük kapı mekanizmalarında makaslı, dar bir yalak boyunca dikey ilerleyerek işi tamamlar. İki ortamın ortak paydası, sepedin yatayda değil dikeyde hareket etmesinin yeterli olduğu, zeminin düz ve taşıma gücünün bilinir olduğu işlerdir; bu sayfa, kule eteği ve liman sahası ikilisinde makaslı platform kiralamanın hangi işlerde tercih edildiğini ve nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Kule lobisi ve teknik galeride dikey erişim",
                metin:
                    "Kule girişindeki lobi tavanı, asma tavan aydınlatması veya teknik galerideki boru/kablo tavası bakımı, sepedin doğrudan yukarı-aşağı hareket etmesinin yettiği işlerdir; bu tip işlerde eklemli bomun açılı erişim yeteneği kullanılmaz, buna karşılık makaslı sınıfın daha geniş sepet tabanı iki kişilik ekip ve malzemeyi aynı anda taşımaya izin verir. Lobi zemini genellikle mermer veya parlak seramik kaplıdır; bu yüzeyde iz bırakmayan lastik zorunludur ve makine giriş-çıkışı ziyaretçi trafiğinin en az olduğu saatlere planlanır.",
            },
            {
                baslik: "Liman ardiye koridorlarında düz hat çalışması",
                metin:
                    "Ardiye sahalarındaki istifleme koridorları düz ve genellikle geniştir; bu geometri makaslı platformun dar yalak boyunca ilerleyip durup dikey çalışması için idealdir. Çatı altı aydınlatma değişimi, çelik konstrüksiyon bağlantı kontrolü veya havalandırma bacası bakımı gibi işlerde makine koridor ortasına konumlanır, sepet doğrudan yukarı kalkar; koridor trafiği varsa (forklift, transpalet geçişi) makine bekleme noktasına çekilir, sürekli koridor ortasında bırakılmaz.",
            },
            {
                baslik: "Kapasite farkının belirleyici olduğu işler",
                metin:
                    "Raf sistemi montajı, çoklu tesisat hattı çekimi veya birden fazla parçanın aynı anda yukarı taşınması gerektiği işlerde makaslı platformun sepet kapasitesi eklemli sınıfa göre daha yüksektir; bu, aynı işin daha az iniş-çıkışla, dolayısıyla daha kısa sürede tamamlanması anlamına gelir. Tek kişilik, kısa süreli ve dar açılı erişim gerektiren işlerde bu avantaj öne çıkmaz, o durumda eklemli sınıf daha uygundur — makine seçimi işin niteliğine göre keşifte netleştirilir.",
            },
            {
                baslik: "Elektrikli ve dizel sınıf ayrımı",
                metin:
                    "Kule iç mekânında (lobi, teknik galeri, kapalı otopark) egzoz emisyonu nedeniyle yalnızca elektrikli/akülü makaslı kullanılabilir; liman sahasının açık alanlarında ise mesafe ve yük koşuluna göre dizel veya büyük gövdeli elektrikli tercih edilebilir. Bu ayrım işin başında netleştirilmezse, kapalı alana yanlışlıkla dizel makine yönlendirilmesi hem izin sorunu hem güvenlik riski yaratır.",
            },
            {
                baslik: "Zemin taşıma gücü ve nokta yük kontrolü",
                metin:
                    "Makaslı platform dört noktadan zemine yük aktarır ve bu yük eklemli sınıfa göre daha dar bir tabana yayılır; kule lobisindeki mermer zemin altında boşluk (örneğin alt kat teknik alan) varsa, liman sahasında ise rıhtım kenarına yakın zeminlerde taşıma gücü önceden teyit edilir. Şüpheli zeminlerde makine konumlandırılmadan önce nokta yük hesabı yapılır; gerekirse dağıtıcı plaka kullanılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman ortamına göre makaslı platform kullanım tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, kule eteği ve liman sahasındaki en sık makaslı platform işlerini ve bunlara uygun yaklaşımı özetler.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Tipik iş", "Zemin", "Güç tipi"],
                    satirlar: [
                        ["Kule lobisi", "Asma tavan aydınlatması", "Mermer/seramik, iz hassas", "Elektrikli/akülü"],
                        ["Kule teknik galerisi", "Boru/kablo tavası bakımı", "Beton, dar geçiş", "Akülü (kapalı alan)"],
                        ["Kule otoparkı (kapalı)", "Aydınlatma-havalandırma", "Beton, eğimli rampa olabilir", "Akülü, eğim onaylı"],
                        ["Liman ardiye koridoru", "Çatı altı aydınlatma", "Endüstriyel beton, düz", "Elektrikli/dizel"],
                        ["Liman depo cephesi", "Büyük kapı mekanizması bakımı", "Beton/stabilize", "Dizel (açık alan)"],
                    ],
                },
            },
            {
                baslik: "Makaslı ile eklemli arasında seçim mantığı",
                paragraflar: [
                    "Kule ve liman işlerinde makaslı ile eklemli platform arasındaki seçim, işin geometrisine bağlıdır: hedef nokta sepedin doğrudan altındaysa ve yatay/açılı erişime ihtiyaç yoksa makaslı, hedef nokta bir engelin arkasında veya yandaysa eklemli tercih edilir. Kule lobisi ve teknik galeri gibi düz tavanlı, engelsiz alanlarda makaslının kapasite avantajı öne çıkarken, kule cephesindeki dış cephe işlerinde eklemli bomun açılı yaklaşımı zorunludur — bu iki sınıf birbirinin yerine geçmez, işin niteliğine göre keşifte belirlenir.",
                    "Liman tarafında da benzer mantık işler: ardiye koridoru içindeki düz hat işlerinde makaslı yeterliyken, konteyner yığınının kenarından içeri açılı erişim gerektiren noktalarda eklemli devreye girer. Bazı büyük ölçekli liman işlerinde iki sınıf aynı proje içinde birlikte kullanılır.",
                ],
            },
            {
                baslik: "Kapalı alan ve açık alan geçişinde planlama",
                paragraflar: [
                    "Aynı iş gününde hem kule iç mekânında hem liman açık sahasında çalışma planlanmışsa, makine ve operatör geçişi arasında güç tipi ve sertifika farkı gözetilir; kapalı alan için akülü makine ayrılmışsa açık saha için ayrı bir dizel/büyük elektrikli makine planlanır, aynı makine iki ortam arasında zorlanarak kullanılmaz. Bu ayrım, özellikle aynı müşterinin hem kule hem liman tesisine sahip olduğu projelerde günlük iş listesine baştan yazılır.",
                    "Nakliye açısından da iki ortam farklıdır — kule tarafında şehir içi trafik ve bina giriş izni öne çıkarken, liman tarafında saha giriş kartı ve gümrük/güvenlik bölgesi kuralları devreye girer; ikisi için ayrı zaman payı hesaplanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kule lobisinde mermer zeminde makaslı platform iz bırakır mı?",
                cevap:
                    "Standart siyah lastikli makine mermer ve parlak seramikte iz bırakabilir, bu yüzden kule lobisi işlerinde iz bırakmayan (beyaz dolgu) lastikli model zorunlu tutulur. Buna ek olarak makine giriş güzergâhına geçici koruyucu örtü serilmesi de sık uygulanan bir önlemdir; zemin hassasiyeti yüksek lobiler için bu iki önlem birlikte istenir.",
            },
            {
                soru: "Liman ardiye koridorunda forklift trafiği sürerken makaslı platform çalışabilir mi?",
                cevap:
                    "Çalışabilir ama koridor tamamen paylaşılmaz; makine koridorun bir bölümünü geçici olarak ayırır, forklift ve transpalet geçişi için bariyer veya şeritleme ile açık bir güzergâh bırakılır. Yoğun trafik saatlerinde (vardiya başı/sonu, sevkiyat pikleri) çalışma mümkünse daha sakin saatlere kaydırılır; sürekli kesişen bir güzergâh varsa iş güvenliği açısından koridor tamamen kısa süreliğine kapatılabilir.",
            },
            {
                soru: "Kule teknik galerisi çok dar, makaslı platform sığar mı?",
                cevap:
                    "Bu, galeri genişliğine bağlıdır ve keşifte santimetre hassasiyetinde ölçülür; standart makaslı sığmıyorsa dar gövdeli kompakt makaslı sınıfına geçilir, o da sığmıyorsa iş makaslıdan eklemliye veya farklı bir erişim yöntemine (örneğin sabit iskele) yönlendirilir. Ölçüm yapılmadan makine sahaya sevk edilmez çünkü galeri içinde geri dönüş alanı da kısıtlı olabilir.",
            },
            {
                soru: "Liman sahasında dizel makaslı platform kullanmak emisyon açısından sorun yaratır mı?",
                cevap:
                    "Açık saha koşullarında (ardiye dışı, rıhtım kenarı, açık istifleme alanı) dizel kullanımı genellikle sorun oluşturmaz ve mesafe/yük avantajı nedeniyle tercih edilebilir; ancak kapalı depo hacmi içinde veya havalandırması sınırlı alanlarda dizel yerine elektrikli zorunlu tutulur. Hangi bölgenin açık, hangisinin kapalı sayılacağı tesis yönetimiyle işin başında netleştirilir.",
            },
            {
                soru: "Kule ile liman tesisi aynı müşteriye aitse tek sözleşmeyle iki farklı makine mi kiralıyoruz?",
                cevap:
                    "Evet, pratikte bu sık karşılaşılan bir modeldir — tek kiralama sözleşmesi altında kule için kapalı alana uygun akülü bir makaslı, liman sahası için açık alana uygun dizel veya büyük elektrikli bir başka makaslı ayrı ayrı planlanır. İki makine aynı anda farklı lokasyonlarda çalıştığı için nakliye ve operatör ataması da ayrı yapılır; tek makinenin iki lokasyon arasında günde birkaç kez taşınması hem verimsiz hem riskli olur.",
            },
            {
                soru: "Rıhtım kenarına yakın liman zemininde makaslı platform güvenli mi?",
                cevap:
                    "Rıhtım kenarı zemini genellikle ana sahaya göre daha yeni veya farklı yapıdadır, bu yüzden taşıma gücü ayrıca kontrol edilir; zemin sıkıştırması yeterliyse standart makine çalışabilir, şüpheli veya nemli zeminde iş öncesi saha değerlendirmesi yapılır ve gerekirse dağıtıcı plaka kullanılır. Ayrıca rıhtım kenarına belli bir güvenlik mesafesi bırakılır, makine kenara doğrudan yanaştırılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kule lobisi/teknik galerisinin kapalı alan emisyon kısıtına tabi olduğu ve liman ardiye sahalarının düz endüstriyel beton/stabilize zeminli olduğu kamuya açık saha bilgisidir; makine sınıfı seçimi, iz koruma ve saha koordinasyon pratikleri firma deneyimidir.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Kule Cephesinde ve Liman Sahasında Manlift Kiralama",
        giris:
            "\"Manlift\" adı sahada eklemli, teleskopik ve makaslı sınıfların tamamı için genel bir kullanım biçimidir, ama kule ve liman ikilisinde bu genel adın arkasında iki farklı erişim gerçeği yatar. Kule tarafında manlift talebi çoğunlukla tek bir operatörün, dar bir zaman penceresinde, cephe veya kule eteğindeki spesifik bir noktaya (aydınlatma, tabela, klima dış ünitesi) hızlı erişmesi ihtiyacından doğar; bu işler kısa süreli, plansız veya yarı plansız olabilir ve makine seçimi genellikle işin büyüklüğünden çok erişim hızına göre yapılır. Liman tarafında ise manlift talebi daha çok konteyner terminali çevresindeki vinç/ekipman bakımı, aydınlatma direği servisi veya depo çatısı-cephesi kontrolü gibi, sahanın geniş ve açık olduğu ama erişim yüksekliğinin değişken olduğu işlerden gelir. İki ortamda da manlift kiralama kararının merkezinde aynı soru durur: iş tek nokta erişimi mi (o zaman kompakt, hızlı konumlanan bir makine yeter) yoksa geniş bir alanı kapsayan çok noktalı bir iş mi (o zaman daha büyük, daha uzun erişimli bir sınıf gerekir). Bu sayfa, kule cephesi ve liman sahası ikilisinde manlift kiralamanın nasıl planlandığını, hangi işlerde hangi sınıfın tercih edildiğini anlatır.",
        maddeler: [
            {
                baslik: "Kule cephesinde acil/plansız erişim talebi",
                metin:
                    "Kule cephesindeki aydınlatma arızası, düşen tabela parçası veya klima dış ünitesi kaçağı gibi acil işlerde manlift talebi genellikle aynı gün, bazen aynı saat içinde gelir. Bu tip işlerde büyük teleskopik ekipmana gerek kalmadan, hızlı konumlanabilen kompakt eklemli veya makaslı sınıf tercih edilir; asıl darboğaz makinenin sahaya ulaşması değil, bina yönetiminin acil giriş onayıdır. Sürekli hizmet verilen kulelerde bu yüzden önceden tanımlanmış bir acil erişim prosedürü kurulur.",
            },
            {
                baslik: "Liman sahasında vinç ve aydınlatma direği servisi",
                metin:
                    "Konteyner terminali çevresindeki sabit vinç yapıları, aydınlatma kuleleri ve saha kamerası direkleri periyodik bakım gerektirir; bu işler genellikle önceden planlanır ve erişim yüksekliği direğin/vincin boyuna göre değişir. Aydınlatma direği bakımında orta yükseklikli teleskopik sınıf yeterliyken, büyük vinç yapısının üst gövdesine erişimde daha uzun bomlu bir sınıf gerekebilir; makine seçimi direğin/vincin teknik ölçüsüyle netleştirilir, tahmine dayanmaz.",
            },
            {
                baslik: "Depo çatısı ve cephe kontrolünde çok noktalı iş",
                metin:
                    "Liman ardiyelerinin çatı kaplaması, yağmur oluğu ve cephe paneli periyodik olarak kontrol edilir ve bu iş tek nokta değil, çatının/cephenin genelini kapsayan çok noktalı bir rotadır. Böyle işlerde manlift günlük belirlenen bir güzergâhı takip eder, her nokta arasında yeniden konumlanır; rota önceden planlanmazsa aynı alan birden fazla kez dolaşılır ve iş süresi gereksiz uzar.",
            },
            {
                baslik: "Operatörlü kiralamada yeterlilik ve saha eğitimi",
                metin:
                    "Kule tarafında operatör, bina yönetiminin güvenlik prosedürüne (giriş kartı, güzergâh kısıtı, acil durum protokolü); liman tarafında ise terminal işletmesinin güvenlik bölgesi kurallarına (saha giriş izni, konteyner trafiği farkındalığı) göre ayrı ayrı bilgilendirilir. İki ortam farklı risk profiline sahip olduğu için aynı operatörün her iki sahada çalışması, saha oryantasyonu tamamlanmadan uygun görülmez.",
            },
            {
                baslik: "Gece/erken saat çalışma ve nakliye penceresi",
                metin:
                    "Kule tarafında görünür cephe işleri genellikle gece veya hafta sonu saatine kaydırılırken, liman tarafında sahanın 7/24 operasyonel olması nedeniyle çalışma penceresi terminal trafiğine göre belirlenir — gemi yanaşma/kalkış saatleri ve konteyner hareketliliğinin yoğun olduğu dönemlerde manlift sahaya sokulmaz. Nakliye planı da bu yüzden iki ortamda farklı kurgulanır; kule için şehir içi gece trafiği, liman için terminal giriş-çıkış saatleri esas alınır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kule ve liman ihtiyacına göre manlift sınıf tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, kule cephesi ve liman sahasındaki tipik manlift işlerini ve uygun makine sınıfını özetler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Ortam", "Erişim özelliği", "Uygun manlift sınıfı"],
                    satirlar: [
                        ["Acil aydınlatma/tabela tamiri", "Kule cephesi", "Tek nokta, plansız", "Kompakt eklemli/makaslı"],
                        ["Klima dış ünitesi servisi", "Kule eteği", "Tek nokta, orta yükseklik", "Eklemli"],
                        ["Aydınlatma direği bakımı", "Liman sahası", "Tek nokta, direk boyuna göre", "Orta-uzun bomlu teleskopik"],
                        ["Vinç üst gövde bakımı", "Liman sahası", "Yüksek nokta, hassas erişim", "Uzun bomlu teleskopik"],
                        ["Depo çatı/cephe kontrolü", "Liman ardiyesi", "Çok noktalı rota", "Orta sınıf eklemli/teleskopik"],
                    ],
                },
            },
            {
                baslik: "Manlift terimi altında sınıf seçimi nasıl netleşir",
                paragraflar: [
                    "\"Manlift kiralama\" talebi geldiğinde ilk soru her zaman işin tek nokta mı yoksa çok noktalı mı olduğudur; tek nokta ve kısa süreli işlerde kompakt sınıf hem daha hızlı konumlanır hem daha ekonomiktir, çok noktalı rota işlerinde ise makinenin günlük iş listesine göre bir güzergâh üzerinde ilerlemesi gerektiği için orta-büyük sınıf ve önceden planlanmış rota daha verimlidir.",
                    "İkinci soru erişim yüksekliğidir — kule eteği işlerinde genellikle orta yükseklik (10-20 metre bandı) yeterliyken, liman sahasındaki büyük vinç yapıları veya yüksek aydınlatma direkleri bu bandın üzerine çıkabilir; bu durumda erişim yüksekliği net ölçülmeden makine seçimi yapılmaz.",
                ],
            },
            {
                baslik: "Kule ve liman arasında ortak operatör/makine planlaması",
                paragraflar: [
                    "Aynı haftada hem kule hem liman tesisinde iş varsa, makine ve operatör aynı gün içinde iki lokasyon arasında taşınmaz — her ortamın kendi güç tipi, sertifika ve saha oryantasyon gereksinimi olduğu için ayrı makine ve ayrı operatör ataması yapılır. Haftalık iş listesi baştan paylaşıldığında, nakliye tekrarı azalır ve her iki sahada da makine zamanında hazır bulunur.",
                    "Acil bir talep her iki ortamda da aynı anda gelirse, öncelik genellikle güvenlik riski taşıyan işe (örneğin düşme riski olan kule cephesi parçası) verilir; liman tarafındaki planlı bakım işi, güvenlik riski taşımıyorsa bir sonraki uygun pencereye kaydırılabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "'Manlift' ile eklemli/teleskopik/makaslı platform arasındaki fark ne, hangi terimi kullanmalıyım?",
                cevap:
                    "Manlift, sahada bu üç sınıfın tamamı için kullanılan genel bir isimdir; teklif isterken 'manlift' demeniz yeterlidir, doğru sınıf (eklemli, teleskopik veya makaslı) işin erişim geometrisine göre keşifte belirlenir. Tek nokta ve açılı erişim gerekiyorsa eklemli, uzun düz erişim gerekiyorsa teleskopik, düz dikey ve yüksek kapasiteli erişim gerekiyorsa makaslı önerilir.",
            },
            {
                soru: "Kule cephesinde acil bir arıza çıktı, aynı gün manlift gelir mi?",
                cevap:
                    "Kompakt sınıf için genellikle mümkündür; asıl zaman kaybettiren adım makinenin nakliyesi değil bina yönetiminin acil giriş onayıdır. Sürekli hizmet verdiğimiz kulelerde önceden tanımlanmış bilinen operatör, bilinen güvenlik iletişim hattı ve onaylı çalışma saati aralığından oluşan bir acil erişim prosedürü kurulur; bu altyapı olmadan gelen ilk kez talep, onay süresi nedeniyle aynı gün yetişmeyebilir.",
            },
            {
                soru: "Liman sahasında gemi yanaşma saatlerinde manlift çalışabilir mi?",
                cevap:
                    "Genellikle çalışamaz veya kısıtlı çalışır; gemi yanaşma/kalkış ve yoğun konteyner hareketliliği saatlerinde terminal güvenlik kuralları gereği saha trafiği önceliklidir, manlift bu saatlerde sahaya sokulmaz veya güvenli bir bekleme noktasına çekilir. Çalışma penceresi terminal işletmesiyle önceden koordine edilir, günlük gemi trafiği programına göre güncellenebilir.",
            },
            {
                soru: "Liman vinç yapısının üst gövdesine erişim için hangi manlift sınıfı gerekir?",
                cevap:
                    "Bu, vincin boyuna ve erişim noktasının konumuna bağlıdır; genellikle uzun bomlu teleskopik sınıf tercih edilir çünkü büyük vinç yapılarının üst gövdesi hem yüksek hem de sabit yapıya yakın hassas bir erişim gerektirir. Kesin sınıf, vincin teknik ölçüleri paylaşıldıktan sonra netleştirilir; ölçü paylaşılmadan tahmine dayalı makine önerilmez.",
            },
            {
                soru: "Operatörlü mü, operatörsüz mü kiralamalıyım?",
                cevap:
                    "Kule tarafında bina yönetimi genellikle sertifikalı operatör şartı arar, bu yüzden operatörlü kiralama standart tercihtir; liman tarafında terminal işletmesinin kendi eğitimli personeli varsa operatörsüz (yalnızca makine) kiralama da mümkündür ama bu durumda personelin geçerli yeterlilik belgesi ve saha oryantasyonu tamamlanmış olması istenir. Hangi seçeneğin uygun olduğu, tesis kuralına göre teklif aşamasında netleşir.",
            },
            {
                soru: "Depo çatısının tamamını kontrol edeceğiz, tek manlift yeterli mi?",
                cevap:
                    "Çatı büyüklüğüne ve iş süresine bağlıdır; orta ölçekli bir ardiye çatısı için tek makine günlük rota planıyla yeterli olabilir, ama iş bir günde bitirilmesi gereken geniş bir çatıysa veya paralel iki ekip çalışacaksa ikinci bir makine daha verimli olur. Doğru kararı vermek için çatı metrekaresi ve hedef tamamlanma süresi keşifte paylaşılır; bu bilgi olmadan tek/çift makine kararı tahmine dayanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kule cephesi/eteğinin acil-plansız erişim taleplerine, liman terminallerinin ise gemi trafiği kaynaklı çalışma penceresi kısıtına konu olduğu kamuya açık saha bilgisidir; sınıf seçimi, operatör oryantasyonu ve rota planlama pratikleri firma deneyimidir.",
    },
};
