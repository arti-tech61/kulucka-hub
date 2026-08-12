// ═══════════════════════════════════════════════════════════════════════════
// izmir-manlift.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: İzmir/Kemalpaşa, FABRİKA İÇİ KESİNTİSİZ ÜRETİM ortamına uygun
// akülü makaslı ve eklemli platform kiralama. Açı: üretim DURMADAN bakım.
//
// ⚠️ Aynı bölgeler izmirmakasliplatform.xyz'de de elle yazıldı (depo/raf
// açısıyla). Bu dosyadaki her sayfa FARKLI açıdan yazılır: hat üstü çalışma,
// duruşsuz bakım penceresi, eklemli erişim. Cümle/tablo tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (≥1 tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IZMIR_MANLIFT_NET: Record<string, BespokeIcerik> = {
    "bolge:kemalpasa": {
        h1: "Kemalpaşa'da Üretim Durmadan Platform Kiralama",
        giris:
            "Bir fabrikada tavan armatürü değişecekse iki yol vardır: hattı durdurup işi mesai içinde bitirmek ya da üretimi hiç kesmeden çalışacak bir düzen kurmak. Kemalpaşa'nın üretim yoğun dokusunda — gıda, içecek, ambalaj, metal işleme ve lojistik operasyonların iç içe çalıştığı bu hatta — ilk yolun maliyeti çoğu zaman kiralamanın kendisinden büyüktür: bir saatlik hat duruşu, vardiya planını ve sevkiyat taahhütlerini zincirleme bozar. İşimizin merkezinde bu yüzden makine değil, pencere planı vardır. Akülü makaslı ve eklemli platformlar sessiz ve emisyonsuz çalıştığı için üretimle aynı çatı altında var olabilir; geri kalan her şey — bariyer düzeni, güzergâh, alet güvenliği, vardiya koordinasyonu — teslimattan önce kurgulanan operasyon disiplinidir.",
        maddeler: [
            {
                baslik: "Duruşsuz çalışmanın üç temel koşulu",
                metin:
                    "Üretim sürerken yüksekte çalışmanın güvenli olması üç koşula bağlıdır: çalışma düşeyinin altındaki alanın fiziksel bariyerle kapatılması (düşen alet tesise ait personeli de tehdit eder), sepetteki her aletin bağlı olması (tool lanyard) ve makine güzergâhının üretim akışından ayrılması. Bu üçlü kurulduğunda hat üstü aydınlatma, kablo tavası, havalandırma ve sprinkler işleri üretimle paralel yürür. Kurulamadığı noktalarda iş, vardiya arası pencereye alınır — zorlamak değil, doğru pencereyi bulmak esastır.",
            },
            {
                baslik: "Eklemli platform: hattın üzerinden aşmak",
                metin:
                    "Makaslı platform yalnızca dikey çıkar; hedefin tam altına park edilemiyorsa yetersizdir. Üretim hatları, konveyörler ve makine parkı çoğu zaman tam da bu durumu yaratır — hedef tavandadır ama altı doludur. Akülü eklemli platform bu senaryonun makinesidir: hat kenarına park eder, bomunu hattın üzerinden aşırıp hedefe yanal erişimle ulaşır. Kemalpaşa'daki taleplerimizde eklemli oranının yüksek olması tesadüf değildir; üretim yoğunluğu arttıkça 'altı boş tavan' azalır.",
            },
            {
                baslik: "Gece ve hafta sonu pencereleri",
                metin:
                    "Bazı işler ne bariyerle ne eklemli erişimle üretime paralel yapılabilir — hat üstü doğrudan müdahale gereken işler böyledir. Bu durumda pencere planı devreye girer: gece vardiyası olmayan tesislerde gece bloğu, kesintisiz tesislerde hafta sonu bakım penceresi. Makine mesai saatinde teslim alınır, tesiste bekletilir ve pencere açıldığında iş başlar; gece nakliyesi diye bir maliyet kalemi oluşmaz. Akülü modelin sessizliği, gece çalışmasında komşu tesis şikâyeti riskini de ortadan kaldırır.",
            },
            {
                baslik: "Vardiya koordinasyonu ve güzergâh planı",
                metin:
                    "Üretim içinde çalışan makinenin en kritik anları yer değiştirme anlarıdır: forklift trafiği, palet akışı ve personel geçişleriyle aynı koridorları kullanır. Standart uygulamamız, makine hareketlerini vardiya değişimlerine veya mola bloklarına denk getirmek ve güzergâhı önceden tesisin iç trafik sorumlusuyla yürümektir. Bu on beş dakikalık ön çalışma, hem kaza riskini hem 'makine geçemedi, iş sarktı' senaryosunu ortadan kaldırır.",
            },
            {
                baslik: "Kemalpaşa hattında hızlı makine değişimi",
                metin:
                    "Kesintisiz üretim ortamında arıza toleransı düşüktür: platform arızalanırsa iş planı değil üretim programı sarkar. Kemalpaşa'ya düzenli sevkiyat hattımız bu riski küçültür — ikame makine aynı gün içinde ulaştırılır ve arıza müdahale taahhüdü sözleşmede saatle tanımlanır. İş ortasında ihtiyaç değişirse (makaslıdan eklemliye geçiş gerekirse) değişim de aynı hat üzerinden hızlı yapılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üretim sürerken yapılabilen işler haritası",
                paragraflar: [
                    "Aşağıdaki tablo, Kemalpaşa'daki tesislerde sık karşılaştığımız işlerin hangi düzenle üretime paralel yapılabildiğini gösterir. 'Pencere' sütunu, paralel çalışmanın kurulamadığı durumdaki alternatiftir.",
                ],
                tablo: {
                    basliklar: ["İş", "Üretimle paralel?", "Gerekli düzen", "Alternatif pencere"],
                    satirlar: [
                        ["Hat kenarı aydınlatma", "Evet", "Bariyer + alet bağlama", "—"],
                        ["Hat üstü kablo tavası", "Eklemli ile evet", "Yanal erişim + bariyer", "Vardiya arası"],
                        ["Konveyör üstü doğrudan müdahale", "Hayır", "—", "Gece / hafta sonu bloğu"],
                        ["Havalandırma kanalı bakımı", "Çoğunlukla evet", "Güzergâh planı + bariyer", "Mola blokları"],
                        ["Sprinkler hattı testi", "Bölgesel", "Zon bazlı bariyer", "Vardiya arası"],
                    ],
                },
            },
            {
                baslik: "Makaslı mı eklemli mi: karar kuralı",
                paragraflar: [
                    "İki soruyla karar verilir. Birincisi: makine hedefin tam altına park edebiliyor mu? Evet ise makaslı yeterlidir ve aynı metrajda eklemliden ekonomiktir. Hayır ise ikinci soru: aşılacak engelin genişliği ve park noktasının hedefe yatay uzaklığı toplamda kaç metre? Bu değer, eklemli makinenin çalışma zarfı diyagramıyla karşılaştırılır — maksimum yanal erişim ile maksimum yükseklik aynı anda kullanılamadığı için katalog değeri değil zarf eğrisi esas alınır.",
                    "Üretim tesislerinde sık yapılan hata, 'nasılsa engel var' diyerek her işte eklemli istemektir: eklemli hem daha pahalı hem daha ağırdır ve dar alanlarda manevrası zordur. İş listesi karışıksa iki makineli kısa dönem yerine tek eklemliyle uzun dönem kıyaslaması yapıyoruz — hangisinin ekonomik olduğu iş sayısına ve dağılımına göre değişir, teklifte iki senaryo da gösterilir.",
                ],
            },
            {
                baslik: "Gıda ve içecek tesislerinde paralel çalışma disiplini",
                paragraflar: [
                    "Kemalpaşa'daki gıda-içecek üreticilerinde üretime paralel çalışmanın ek katmanı hijyendir: açık ürün bölgesinin üzerinde hiçbir koşulda çalışılmaz — o zonun işleri CIP/sanitasyon penceresine alınır. Kapalı proses bölgelerinde (boru içi akış) paralel çalışma bariyer düzeniyle mümkündür. Makine tesise temiz girer, hidrolik kaçak kontrolü belgelenir ve iz bırakmayan lastik kullanılır; sarf malzemesi sayımı yabancı madde prosedürünün parçasıdır.",
                    "Bu tesislerde işin planı kalite ekibiyle üçlü kurulur: üretim programı, sanitasyon takvimi ve bizim pencere planımız aynı tabloda birleştirilir. Denetim dosyasına girecek kayıtlar (makine temizlik belgesi, çalışma izinleri) tarafımızdan hazır teslim edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretimi hiç durdurmadan tavan işi gerçekten mümkün mü?",
                cevap:
                    "İşin tipine bağlı — çoğu iş için evet. Hat kenarı aydınlatma, havalandırma, kablo tavası ve bölgesel sprinkler işleri bariyer + alet bağlama + güzergâh planı üçlüsüyle üretime paralel yürür. Mümkün olmayan tek grup, çalışma düşeyinin doğrudan açık hat veya açık ürün üzerine geldiği işlerdir; bunlar vardiya arası, gece veya hafta sonu penceresine planlanır. Keşifte iş listenizi bu haritaya göre ikiye ayırıyoruz — neyin paralel, neyin pencereli olduğu baştan netleşir.",
            },
            {
                soru: "Hattın üzerindeki tavana altı dolu olduğu için ulaşamıyoruz; çözüm ne?",
                cevap:
                    "Akülü eklemli platform. Hat kenarına park eder, bomu hattın üzerinden aşırır ve hedefe yanal erişimle ulaşır — hat sökülmez, üretim durmaz. Seçim için iki ölçü gerekir: aşılacak engelin genişliği ve park noktasının hedefe yatay uzaklığı. Bu toplam, makinenin çalışma zarfı diyagramıyla karşılaştırılır; yükseklik arttıkça kullanılabilir yanal mesafe azaldığı için katalog maksimumu değil zarf eğrisi esas alınır. Ölçüleri paylaşın, zarf kontrolünü teklif aşamasında yapalım.",
            },
            {
                soru: "Gece penceresinde çalışma nasıl organize ediliyor?",
                cevap:
                    "Makine mesai saatinde teslim edilir, tesisinizin gösterdiği alanda bekletilir; gece bloğu açıldığında iş başlar ve sabaha karşı biter. Gece nakliyesi olmadığı için ek maliyet doğmaz. Akülü model sessiz çalıştığından komşu tesis ve gürültü yönetmeliği sorunu yaşanmaz. Tek hazırlık şartı aydınlatmadır: çalışma alanının aydınlatması tesis tarafından sağlanmalıdır — sepet üzerinden seyyar aydınlatmayla çalışmak güvenli değildir ve kabul etmiyoruz.",
            },
            {
                soru: "Platform arızalanırsa üretim programımız ne olur?",
                cevap:
                    "Sözleşmede saatle tanımlı arıza müdahale taahhüdü devreye girer: telefon desteğiyle çözülemeyen arızada teknisyen yönlendirilir, onarım hızlı değilse ikame makine sevk edilir. Kemalpaşa'ya düzenli hattımız olduğu için ikame aynı gün içinde ulaştırılır. Normal kullanım kaynaklı arızada bu sürecin tüm maliyeti bize aittir. Kritik pencereli işlerde (tek gecelik hafta sonu bloğu gibi) yedek makine rezervasyonu da önceden yapılabilir — pencereyi kaçırma riski sıfırlanır.",
            },
            {
                soru: "Forklift trafiği yoğun; makine içeride nasıl hareket edecek?",
                cevap:
                    "Hareketleri trafiğin durduğu anlara bağlayarak: vardiya değişimi, mola blokları veya iç trafik sorumlusunun belirlediği pencereler. Güzergâh teslimat öncesi birlikte yürünür, dar noktalar ve kör kavşaklar işaretlenir. Çalışma konumundayken makine bariyerli alanın içindedir ve forklift akışını etkilemez. Bu koordinasyon on beş dakikalık bir ön çalışmadır ama hem kaza riskini hem iş sarkmasını ortadan kaldırır — atlanmasına izin vermiyoruz.",
            },
            {
                soru: "Hem makaslı hem eklemli gerekiyor; iki makine mi kiralamalıyız?",
                cevap:
                    "Her zaman değil. İş listenizi ikiye ayırıp bakıyoruz: altı boş hedefler (makaslı işleri) ve engel üstü hedefler (eklemli işleri). Dağılım dengeli ve süre kısaysa iki makine paralel çalışıp toplam süreyi yarılamak ekonomik olabilir; işler azsa tek eklemli her iki grubu da yapar (eklemli, makaslının erişebildiği her yere erişir — tersi doğru değildir). Teklifte iki senaryoyu maliyet ve süre olarak yan yana gösteriyoruz; karar veriniz netleşir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kemalpaşa'nın üretim yoğun profili kamuya açık bilgidir; paralel çalışma/pencere düzeni sektör İSG pratiği, zarf diyagramı EN 280 standardıdır.",
    },

    "bolge:torbali": {
        h1: "Torbalı'da Üretim Durmadan Platform Kiralama",
        giris:
            "Torbalı'nın hızla büyüyen sanayi hattında iki tesis kuşağı yan yana yaşar: üretime yeni geçmiş modern fabrikalar ve kapasite artırmak için sürekli tadilat hâlindeki işletmeler. Her ikisinin ortak sorunu aynıdır — iş var, ama üretimi durdurma lüksü yok. Yeni tesislerde devreye alma sonrası eksikler (aydınlatma revizyonu, ek havalandırma, sensör montajı) üretim başladıktan sonra tamamlanmak zorundadır; büyüyen tesislerde ise yeni hat kurulumu mevcut hatların bir metre yanında sürer. Akülü makaslı ve eklemli platformlarla kurduğumuz düzen bu iki senaryoya göre şekillenir: bariyerli paralel çalışma, vardiya arası pencereler ve — Torbalı'ya özgü üçüncü senaryo olarak — kısmi şantiye koşullarında üretimle iç içe montaj işleri.",
        maddeler: [
            {
                baslik: "Devreye alma sonrası eksik kapatma işleri",
                metin:
                    "Yeni fabrika üretime geçtikten sonra ortaya çıkan tipik liste: aydınlatma seviyesinin yetersiz kaldığı bölgeler, eklenmesi gereken havalandırma noktaları, sensör-kamera montajları ve ilk aylarda revize edilen kablo güzergâhları. Bu işlerin ortak özelliği kısa ve dağınık olmalarıdır — her biri birkaç saatlik, ama tesisin farklı köşelerinde. Tek kiralamada toplu liste hâlinde planlamak (makine bir hafta kalır, işler güzergâh sırasıyla biter) hem nakliyeyi teke indirir hem her iş için ayrı koordinasyon yükünü kaldırır.",
            },
            {
                baslik: "Mevcut üretimin yanında yeni hat kurulumu",
                metin:
                    "Kapasite artıran tesislerde yeni hattın mekanik ve elektrik montajı, çalışan hatların hemen yanında yürür. Bu, şantiye disipliniyle üretim disiplininin aynı holde buluşması demektir: montaj bölgesi fiziksel olarak ayrılır (bariyer/perde), platform yalnızca ayrılmış bölgede hareket eder ve ortak koridor kullanımı vardiya pencerelerine bağlanır. Çelik konstrüksiyon ve yüksek montaj işlerinde eklemli platform, kurulmakta olan ekipmanın üzerinden erişim sağlar — iskele kurmaktan hem hızlı hem az yer kaplar.",
            },
            {
                baslik: "Gıda ve ambalaj tesislerinde zon disiplini",
                metin:
                    "Torbalı'daki gıda işleme ve ambalaj üreticilerinde paralel çalışmanın sınırını hijyen zonları çizer: açık ürün bölgesi üzerinde çalışma yapılmaz, bu zonların işleri sanitasyon penceresine alınır; kapalı proses ve depo zonlarında bariyerli paralel çalışma standarttır. Makine temiz girer, kaçak kontrolü belgelenir, iz bırakmayan lastik ve alet sayımı uygulanır. Zon haritası keşifte çıkarılır ve iş listesi zonlara göre pencerelere dağıtılır — bu ön çalışma, denetim dosyanıza da hazır kayıt üretir.",
            },
            {
                baslik: "Yüksek tavanlı yeni yapılarda metraj",
                metin:
                    "Torbalı'nın yeni nesil yapı stoku eski kuşaktan belirgin yüksektir; 10-12 metre tavan yaygındır ve çatı makası altı işlerde 12-14 metre çalışma yüksekliği gerekir. Akülü makaslıda bu bant standarttır; eklemlide aynı banda çıkan modeller daha ağırdır ve zemin yükü kontrolü (özellikle asma kat ve kanal üstü geçişlerde) önem kazanır. Metraj hesabı her zaman aynı kuralla yapılır: hedefin gerçek kotu + yaklaşık 2 metre uzanma payı; katalogdaki 'platform yüksekliği' ile 'çalışma yüksekliği' karıştırılmaz.",
            },
            {
                baslik: "Aydın yönü dahil geniş sevkiyat ekseni",
                metin:
                    "Torbalı, İzmir-Aydın ekseninin ortasında olduğu için sevkiyat iki yönlü işler: İzmir merkezden standart 1-2 iş günü, Tire-Aydın yönü turlarıyla birleşen teslimatlarda nakliye paylaşımı. Akülü modeller normal araçla gider; iş ortasında makine değişimi (makaslı-eklemli geçişi) aynı eksende hızlı yapılır. Üretim tesislerinin arıza toleransı düşük olduğu için ikame makine taahhüdü sözleşmede saatle tanımlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Torbalı'da senaryo bazlı çalışma düzeni",
                paragraflar: [
                    "İlçedeki üç tipik senaryo ve her birinin çalışma düzeni aşağıdadır. Aynı tesiste birden fazla senaryo bir arada bulunabilir; iş listesi keşifte senaryolara ayrılır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Çalışma düzeni", "Makine tercihi", "Pencere ihtiyacı"],
                    satirlar: [
                        ["Devreye alma sonrası eksikler", "Toplu liste, güzergâh sırasıyla", "Akülü makaslı 10 – 14 m", "Çoğunlukla paralel"],
                        ["Yeni hat kurulumu (üretim yanında)", "Bariyerli montaj bölgesi", "Eklemli + makaslı karma", "Ortak koridorda vardiya arası"],
                        ["Gıda zonu işleri", "Zon haritasına göre", "Akülü, iz bırakmayan lastik", "Açık ürün zonu: sanitasyon penceresi"],
                        ["Çatı makası altı bakım", "Bariyer + alet bağlama", "Akülü makaslı 12 – 14 m", "Paralel"],
                        ["Hat üstü doğrudan müdahale", "—", "Duruma göre", "Gece / hafta sonu"],
                    ],
                },
            },
            {
                baslik: "Büyüyen tesiste uzun dönem kiralama modeli",
                paragraflar: [
                    "Sürekli tadilat hâlindeki işletmelerde tek tek kısa kiralamalar yerine aylık konaklama modeli belirgin avantaj sağlar: makine sahada kalır, çıkan her iş beklemeden yapılır, nakliye tek sefere iner ve günlük birim maliyet düşer. Torbalı'daki büyüme temposunda bu model sık karşılığını buluyor — altı ay boyunca her hafta 'küçük bir iş daha' çıkan tesiste, toplam kısa kiralama maliyeti aylık modelin katlarına ulaşır.",
                    "Konaklayan makinenin bakımı yerinde yapılır ve periyodik kontrol takvimi kiralama dönemine denk gelirse yenileme bizim tarafımızdan organize edilir. Tesise düşen tek yükümlülük güvenli park alanı ve şarj noktasıdır; operatörsüz modelde MYK belgeli personel şartı sürekli geçerlidir.",
                ],
            },
            {
                baslik: "Montaj işlerinde iskeleye karşı platform",
                paragraflar: [
                    "Yeni hat kurulumunda geleneksel refleks iskele kurmaktır; oysa üretimle iç içe montajda platform çoğu durumda üstündür: kurulum-söküm süresi yoktur (iskele günler alır), zemin işgali bir makine tabanı kadardır (iskele koridoru kapatır) ve iş bittiğinde alan anında boşalır. İskelenin üstün olduğu durum, aynı düzlemde uzun süre sürekli çalışmadır — cephe boyu kaplama gibi. Hol içi nokta montajlarında (ekipman bağlantısı, boru askısı, kablo terminali) platform hem hızlı hem ekonomiktir.",
                    "Karma çözüm de yaygındır: ana montaj bölgesinde sabit iskele, dağınık bağlantı noktalarında gezen platform. Montaj firmanızla üçlü planlama yapıyoruz — kim hangi bölgede, hangi haftada, hangi erişimle.",
                ],
            },
        ],
        sss: [
            {
                soru: "Fabrikamız yeni açıldı, sürekli küçük işler çıkıyor; her seferinde kiralama mı yapmalıyız?",
                cevap:
                    "İki eşik var. İşler ayda bir-iki güne sığıyorsa toplu liste modeli yeterli: işleri biriktirin, tek kiralamada güzergâh sırasıyla bitirelim — nakliye teke iner. İşler her hafta çıkıyorsa aylık konaklama modeline geçmek daha ekonomiktir: makine sahada kalır, çıkan iş beklemeden yapılır. Devreye alma sonrası ilk 6-12 ay bu ikinci profil Torbalı'da çok yaygın; iki modelin maliyetini iş temponuza göre karşılaştırmalı gösteriyoruz.",
            },
            {
                soru: "Yeni hat montajı yaparken mevcut hattımız çalışmaya devam edebilir mi?",
                cevap:
                    "Evet — bölge ayrımı disipliniyle. Montaj alanı bariyer veya perdeyle fiziksel ayrılır, platform yalnızca bu bölgede hareket eder, ortak koridor kullanımı vardiya pencerelerine bağlanır. Yüksek montaj noktalarına eklemli platform kurulmakta olan ekipmanın üzerinden erişir; iskeleye göre yer işgali küçük olduğu için mevcut hattın lojistiği daralmaz. Montaj firması, tesis ve bizim aramızda üçlü plan kuruluyor — kim hangi bölgede hangi haftada, baştan netleşir.",
            },
            {
                soru: "Açık ürün bölgemizin tavanında acil iş çıktı; ne yapılır?",
                cevap:
                    "Açık ürün üzerinde çalışma hiçbir aciliyetle yapılmaz — bu pazarlık konusu değildir. Çözüm pencere hızlandırmaktır: bir sonraki sanitasyon bloğu öne çekilir veya o zonun üretimi kısa süreliğine komşu hatta kaydırılır, iş kapalı-temiz durumda tamamlanır ve sanitasyon yeniden yapılır. Makine o pencereye hazır bekletilir (tesiste konaklama), pencere açılır açılmaz iş başlar. Kalite ekibinizle bu akışı önceden protokole bağlamak, acil durumda saat kaybetmemenin tek yoludur.",
            },
            {
                soru: "12 metre tavanlı yeni holümüzde hangi makine çalışır?",
                cevap:
                    "Çatı makası altı işler için 14 metre çalışma yüksekliği sınıfı akülü makaslı — hesap: 12 m hedef kotu + ~2 m uzanma payı. Bu bantta akülü seçenek geniştir ve standart araçla sevk edilir. Hedefin altı doluysa (hat, ekipman) aynı banda çıkan akülü eklemli kullanılır; daha ağır olduğu için asma kat veya kanal üstünden geçilecekse zemin yükü kontrolü yapılır. 'Platform yüksekliği' ile 'çalışma yüksekliği'ni karıştırmayın — katalogda ikisi ayrı satırdır ve 2 metre fark eder.",
            },
            {
                soru: "İş ortasında makaslıdan eklemliye geçmek mümkün mü?",
                cevap:
                    "Mümkün ve sık yapılır. İş listesi ilerledikçe 'altı dolu' hedefler kalabalıklaşırsa makaslı iade edilip eklemli sevk edilir; Torbalı İzmir-Aydın ekseninde olduğu için değişim hızlıdır ve iki sevkiyat çoğu zaman aynı araçla birleştirilir (biri gider, diğeri gelir). Daha iyisi, keşifte iş listesini baştan ikiye ayırıp geçiş tarihini planlamaktır — değişim günü boş geçmez, sabah iade öğleden sonra yeni makineyle devam edilir.",
            },
            {
                soru: "Üretim programımız haftalık değişiyor; kiralama planı buna uyar mı?",
                cevap:
                    "Uyar — esnek pencere modeliyle. Sözleşmede işlerin listesi ve toplam süre sabitlenir, günlerin hangi pencerelere dağılacağı haftalık üretim programınıza göre kayar. Makine tesiste konakladığı için pencere kaymaları sevkiyat maliyeti doğurmaz. Tek koşul, pencere iptallerinin makul önceden bildirilmesidir — aynı makineye başka tesisin acil talebi geldiğinde çakışma yönetebilmemiz için. Bu model, programı oynak tesislerde kısa kiralamalar toplamından belirgin ucuzdur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Torbalı'nın büyüyen sanayi profili kamuya açık bilgidir; zon disiplini gıda güvenliği standartları, montaj kıyaslaması sektör pratiğidir.",
    },

    "bolge:bornova": {
        h1: "Bornova'da Üretim Durmadan Platform Kiralama",
        giris:
            "Bornova'nın sanayi karakteri Kemalpaşa veya Torbalı'dan farklıdır: dev holler yerine orta ölçekli imalathaneler, tek vardiyalı atölyeler ve kent içinde sıkışmış üretim alanları. Bu ölçekte 'üretimi durdurmamak' başka bir anlam taşır — büyük fabrika bir hattı durdurup diğerleriyle devam edebilir; on kişilik atölyenin tek hattı durursa o gün ciro yoktur. Küçük işletmenin bakım işi bu yüzden büyüğünkinden daha hassas planlanır: iş mesai bitimine, öğle molasına veya hafta sonuna sığdırılır, makine dar kapıdan girer, dar alanda manevra yapar ve ertesi sabah üretim hiçbir şey olmamış gibi başlar. Akülü makaslı ve eklemli filomuzdaki dar şase modeller, Bornova profilinin ana makineleridir.",
        maddeler: [
            {
                baslik: "Atölye ölçeğinde pencere planı",
                metin:
                    "Küçük işletmede pencere planı basit ama nettir: öğle molası (1 saatlik işler — armatür değişimi, sensör montajı), mesai sonrası bloğu (2-4 saatlik işler — aydınlatma grubu, vinç rayı kontrolü) ve hafta sonu (tam gün işler — havalandırma, çatı altı tesisat). Makine mesai içinde teslim edilir, işin penceresine hazır bekler. Bu düzenin maliyeti düşüktür çünkü kiralama süresi kısadır; kritik olan teslimat saatinin pencereye tam oturmasıdır — sabah 8 penceresi için öğlen gelen makine günü boşa yakar.",
            },
            {
                baslik: "Dar kapı, dar koridor: makine seçiminin gerçek kısıtı",
                metin:
                    "Bornova'nın eski kuşak sanayi yapılarında servis kapıları 2-2,5 metre bandındadır ve hol içi geçişler makine parkıyla daralmıştır. Bu profilde metrajdan önce geçiş ölçüsü konuşulur: 0,76-0,81 m şaseli dar makaslı modeller standart kapılardan geçer, kapalı yükseklikleri 2 metrenin altındadır. Keşif fotoğrafında kapı ve en dar koridor ölçüsünü istememizin nedeni budur — Bornova'da 'makine geldi ama giremedi' senaryosu, yanlış metrajdan daha sık yaşanır.",
            },
            {
                baslik: "Tek vardiyalı tesiste gece avantajı",
                metin:
                    "Tek vardiya çalışan işletmenin gizli avantajı, gecenin tamamen boş olmasıdır: 17.00'de üretim biter, 08.00'e kadar 15 saatlik kesintisiz pencere açılır. Büyük tesislerin vardiya aralarına sıkıştırdığı işler burada tek gecede rahat biter. Akülü modelin sessizliği kent içi konumda ayrıca önemlidir — Bornova'nın konutla iç içe sanayi dokusunda gece gürültü şikâyeti riski dizel makineyle alınamaz. Aydınlatma tesisçe sağlanır; iş sabah devir teslimle kapanır.",
            },
            {
                baslik: "İmalathanelerde vinç ve tezgâh üstü erişim",
                metin:
                    "Metal işleme ve makine imalatı atölyelerinde tipik hedefler tezgâh üstü aydınlatma, vinç rayı ve pano üstü kablo hatlarıdır. Tezgâhlar taşınamayacağı için hedefin altı çoğunlukla doludur — dar alanda çalışabilen kompakt eklemli modeller burada devreye girer: tezgâh yanına park edip bomunu üzerinden aşırırlar. Tavan vinci olan atölyelerde vinç kilitleme kuralı küçük ölçekte de tavizsiz uygulanır: sepet ile kanca aynı düşeyde bulunamaz, çalışma öncesi vinç ilgili bölgede kilitlenir.",
            },
            {
                baslik: "Kent içi teslimatta saat hassasiyeti",
                metin:
                    "Bornova'ya sevkiyat mesafe olarak kısadır ama kent trafiği saat hassasiyeti getirir: sabah penceresine yetişecek makine trafik öncesi yola çıkar, mesai sonrası penceresi için öğleden sonra teslim yapılır. Küçük işletme kiralamalarında nakliyenin toplam içindeki payı büyük olduğu için aynı bölgedeki işleri aynı güne denk getirmek (komşu atölyelerle paylaşım) belirgin tasarruf sağlar — Bornova sanayi sitelerinde bu eşgüdümü sık kuruyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atölye ölçeğinde iş-pencere-makine eşleşmesi",
                paragraflar: [
                    "Bornova profilindeki tipik işler, uygun pencere ve makine sınıfı aşağıdadır. Küçük işletmede doğru pencere seçimi, kiralama süresini ve maliyeti doğrudan belirler.",
                ],
                tablo: {
                    basliklar: ["İş", "Uygun pencere", "Süre", "Makine"],
                    satirlar: [
                        ["Armatür / sensör değişimi", "Öğle molası veya paralel", "1 – 2 saat", "Dar şase akülü makaslı"],
                        ["Aydınlatma grubu yenileme", "Mesai sonrası blok", "2 – 4 saat", "Akülü makaslı 8 – 10 m"],
                        ["Vinç rayı kontrol-bakım", "Mesai sonrası (vinç kilitli)", "Yarım gün", "Akülü makaslı / eklemli"],
                        ["Tezgâh üstü kablo-boru hattı", "Hafta sonu", "Tam gün", "Kompakt eklemli"],
                        ["Çatı altı havalandırma", "Hafta sonu", "1 – 2 gün", "Akülü makaslı 10 – 12 m"],
                    ],
                },
            },
            {
                baslik: "Küçük işletme için maliyet düzeni",
                paragraflar: [
                    "Atölye ölçeğinde kiralamanın maliyet yapısı büyük tesisten farklıdır: kira süresi kısa olduğu için nakliye oransal olarak büyür ve optimizasyon nakliyede yapılır. Üç pratik kaldıraç: işleri biriktirip tek pencerede bitirmek (üç ayrı akşam yerine bir hafta sonu), aynı sanayi sitesindeki komşu işletmelerle sevkiyat paylaşmak ve teslimat saatini pencereye tam oturtmak (beklemede geçen ödenmiş saat bırakmamak).",
                    "Yılda birkaç kez ihtiyacı olan atölyeler için çerçeve anlaşma küçük ölçekte de işler: fiyat ve evrak bir kez netleşir, sonraki talepler telefonla sevkiyata döner. Sanayi sitesi kooperatifleri üzerinden dönemsel toplu planlama (aynı hafta birden fazla atölyenin işi) en düşük birim maliyeti üretir.",
                ],
            },
            {
                baslik: "Operatör belgesi: küçük işletmenin sık takıldığı nokta",
                paragraflar: [
                    "Büyük tesislerde MYK belgeli operatör kadroda bulunur; atölye ölçeğinde çoğunlukla bulunmaz ve operatörsüz kiralama yasal olarak kurulamaz. İki çözüm var: operatörlü kiralama (kısa işlerde pratik — operatör işin süresi kadar kalır) veya işletmedeki bir personelin MYK yeterlilik belgesi alması (tekrarlayan ihtiyaçta ekonomik — belge kişiye aittir ve kalıcıdır). Belge makine tipine göredir: makaslı belgesi eklemliyi kapsamaz.",
                    "Denetimlerde makine belgesi (periyodik kontrol) bizden, operatör belgesi kullanan taraftan sorulur. 'Küçük iş, kısa süre' gerekçesi belgesiz kullanımı yasal yapmaz — iş kazasında işveren açısından doğrudan kusurdur ve bunu kiralama sözleşmesinde açıkça hatırlatıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek hatlı atölyemizde üretimi durdurmadan iş yapılabilir mi?",
                cevap:
                    "Küçük ölçekte doğru cevap çoğunlukla 'durdurmak yerine pencereye almak'tır: öğle molası, mesai sonrası veya hafta sonu. Tek vardiyalı işletmenin 15 saatlik gece penceresi, büyük tesislerin sahip olmadığı bir avantajdır — çoğu iş tek akşamda biter ve sabah üretim normal başlar. Hat kenarı küçük işler (armatür, sensör) bariyerle mesai içinde de yapılabilir; keşifte iş listenizi pencere haritasına oturtuyoruz.",
            },
            {
                soru: "Kapımız 2,2 metre; makine girer mi?",
                cevap:
                    "Girer — dar şase sınıfla. 0,76-0,81 m genişliğinde, kapalı yüksekliği 2 metrenin altında akülü makaslı modeller 2,2 m kapıdan rahat geçer. Kritik olan kapı değil çoğu zaman kapı sonrasıdır: koridor dönüşü, tezgâh arası geçiş ve çalışma noktasındaki manevra alanı. Keşif fotoğrafında kapıyla birlikte en dar geçişin ölçüsünü de istiyoruz — Bornova'nın eski kuşak yapılarında asıl kısıt orasıdır.",
            },
            {
                soru: "Tezgâhların üzerindeki aydınlatmaya nasıl ulaşılır?",
                cevap:
                    "Kompakt eklemli platformla. Tezgâhlar taşınmaz; makine tezgâh yanına park eder, bomunu üzerinden aşırıp armatüre yanal erişimle ulaşır. Dar atölyelerde bu sınıfın kompakt modelleri (küçük dönüş yarıçapı, dar şase) kullanılır. Alternatif olarak tezgâh diziliminde geçiş varsa dar makaslı ile hedef altına girilebilir — keşifte iki seçeneği yerinde değerlendirip ekonomik olanı öneriyoruz. Tezgâh üstünde merdivenle çalışmak ise kaza istatistiklerinin başındadır; bu riski almayın.",
            },
            {
                soru: "Gece çalışmasında gürültü sorunu yaşar mıyız?",
                cevap:
                    "Akülü modelle hayır. Elektrik tahrikli platformlar fısıltı seviyesinde çalışır; Bornova'nın konutla iç içe dokusunda gece yönetmeliği açısından sorun doğurmaz. Dizel makine ise gece penceresinde fiilen kullanılamaz — hem gürültü hem kapalı alanda emisyon nedeniyle. Gece işinin tek hazırlık şartı çalışma alanı aydınlatmasıdır (tesis sağlar); makine mesai saatinde teslim alınır, gece bloğunda çalışılır, sabah devir teslim yapılır.",
            },
            {
                soru: "Ekibimizde belgeli operatör yok; yine de kiralayabilir miyiz?",
                cevap:
                    "Evet — operatörlü modelde. Operatörümüz işin süresi kadar gelir, MYK belgesi ve sigortası bizdedir; kısa işlerde bu en pratik çözümdür. İhtiyacınız tekrarlayacaksa personelinizden birinin MYK yeterlilik belgesi almasını öneriyoruz: belge kişiye kalıcıdır ve sonraki kiralamalar operatörsüz (daha ekonomik) kurulur. Belgesiz personelle kullanım hiçbir gerekçeyle yasal değildir — kısa iş, küçük atölye, 'sadece bir saat' fark etmez.",
            },
            {
                soru: "Sanayi sitemizde birkaç atölyenin işi var; ortak plan yapılabilir mi?",
                cevap:
                    "Yapılır ve Bornova'da en verimli modeldir. Aynı sitedeki atölyelerin işleri aynı güne veya hafta sonuna toplanır: makine bir kez gelir, atölyeleri sırayla dolaşır, nakliye paylaşılır ve herkesin birim maliyeti düşer. Kooperatif veya site yönetimi üzerinden dönemsel plan da kurulabilir — örneğin her mevsim bir bakım günü. Tek gereken, taleplerin 'tarih esnek, ortak planlamaya uygun' notuyla gelmesi; eşgüdümü biz yürütüyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bornova'nın atölye ölçekli, kent içi sanayi dokusu kamuya açık bilgidir; MYK belge zorunluluğu mevzuat, dar şase ölçüleri üretici standartlarıdır.",
    },

    "bolge:pancar-osb": {
        h1: "Pancar OSB'de Üretim Durmadan Platform Kiralama",
        giris:
            "Pancar Organize Sanayi Bölgesi, Torbalı sınırında İzmir-Aydın karayolu koridorunda konumlanan, görece genç ve planlı bir OSB'dir. Bölgenin yapısı iki özellikle öne çıkar: tesislerin çoğu aynı dönemde inşa edildiği için yapı standardı homojendir (benzer tavan kotları, geniş servis kapıları, düzgün saha betonu) ve üretici profili karışıktır — plastik, ambalaj, metal, gıda ve yapı kimyasalları tesisleri aynı ada düzeninde çalışır. Homojen yapı stoku, platform işlerini standartlaştırır: bir kez kurulan çalışma düzeni komşu tesise neredeyse aynen taşınır. Kesintisiz üretim ortamına odaklanan filomuz için Pancar OSB, bariyerli paralel çalışma ve vardiya penceresi modellerinin en verimli uygulandığı bölgelerden biridir.",
        maddeler: [
            {
                baslik: "Homojen yapı stoğunda standart iş düzeni",
                metin:
                    "Aynı dönemin yapıları benzer kotlara sahiptir: Pancar'da 8-10 metre tavan bandı yaygındır ve 10-12 metre çalışma yüksekliği sınıfı akülü makaslı, bölge işlerinin ana makinesidir. Geniş servis kapıları dar şase zorunluluğunu azaltır; standart 1,15 m şase çoğu tesise sorunsuz girer. Bu homojenlik keşif yükünü düşürür — bölgede çalıştığımız her yeni tesiste saha soruları kısalır, teslimat hızlanır. Yine de iki kontrol asla atlanmaz: hedef altının doluluk durumu (eklemli ihtiyacı) ve zemin kaplaması (iz bırakmayan lastik).",
            },
            {
                baslik: "Plastik ve ambalaj hatlarında paralel çalışma",
                metin:
                    "Bölgenin plastik enjeksiyon ve ambalaj tesislerinde hatlar kompakt, tavan erişimi görece rahattır; aydınlatma, iklimlendirme kanalı ve sprinkler işleri bariyer + alet bağlama düzeniyle üretime paralel yürür. Enjeksiyon makinelerinin üzerindeki noktalara eklemli erişim gerekir — pres kalıp sahası taşınamaz. Granül ve toz hammadde alanlarında zemin temizliği çalışma öncesi şarttır: granül üzerinde makine kayar, bu basit görünen kontrol İSG açısından kritiktir.",
            },
            {
                baslik: "Gıda ve kimyasal tesislerinde zon ayrımı",
                metin:
                    "Gıda üreticilerinde açık ürün zonu kuralı burada da tavizsizdir: o zonun işleri sanitasyon penceresine alınır, kalan alanlarda paralel çalışılır. Yapı kimyasalları tesislerinde ise farklı bir zon devreye girer: solvent ve toz patlaması riski olan alanlar (ATEX) standart makineye kapalıdır — bu alanlardaki işler havalandırma-ölçüm prosedürüyle ve üretimin durduğu pencerede yapılır. Her iki sektörde de zon haritası keşifte çıkarılır ve iş listesi zonlara göre pencerelere dağıtılır.",
            },
            {
                baslik: "Karayolu koridorunda çift yönlü sevkiyat",
                metin:
                    "Pancar OSB'nin İzmir-Aydın karayolu üzerindeki konumu, hem İzmir merkez hem Torbalı-Tire yönü turlarımızla örtüşür; teslimat standart 1-2 iş günüdür ve tur birleştirmelerinde aynı gün mümkündür. Akülü modeller normal araçla sevk edilir. OSB'nin ada düzeni araç manevrasını kolaylaştırır — büyük tesis kayıt prosedürleri yerine çoğunlukla hızlı giriş süreci işler, bu da teslimat saatini öngörülebilir kılar.",
            },
            {
                baslik: "Komşu tesis eşgüdümünün en verimli sahası",
                metin:
                    "Homojen yapı ve kompakt ada düzeni, Pancar'ı sevkiyat paylaşımının en verimli sahası yapar: aynı adada iki tesisin işi tek turda teslim edilir, tek makine art arda tesisleri dolaşabilir ve dönemsel bakım haftalarında (yaz duruşları) OSB genelinde toplu plan kurulabilir. Tarih esnekliği olan taleplere nakliye avantajı otomatik yansır. Bölgede konaklayarak birden fazla tesise hizmet veren makine modeli — haftalık turlu konaklama — Pancar profilinde özellikle iyi çalışır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Pancar OSB'de sektöre göre çalışma düzeni",
                paragraflar: [
                    "Bölgenin karışık üretici profilinde her sektörün paralel çalışma sınırı farklıdır. Aşağıdaki tablo keşifte kullandığımız temel haritadır.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Paralel çalışma sınırı", "Özel kontrol", "Tipik makine"],
                    satirlar: [
                        ["Plastik / enjeksiyon", "Geniş — bariyerle çoğu iş", "Granül zemin temizliği", "Akülü makaslı 10 – 12 m + eklemli"],
                        ["Ambalaj", "Geniş", "Bant üstü alet bağlama", "Akülü makaslı 10 – 12 m"],
                        ["Gıda", "Açık ürün zonu hariç", "Zon haritası, hijyen seti", "Akülü, iz bırakmayan lastik"],
                        ["Yapı kimyasalları", "ATEX alanları hariç", "Havalandırma-ölçüm prosedürü", "Akülü (ATEX dışı) / pencereli"],
                        ["Metal işleme", "Vinç kilitleme ile", "Sepet-kanca düşey ayrımı", "Akülü makaslı / eklemli"],
                    ],
                },
            },
            {
                baslik: "Haftalık turlu konaklama modeli",
                paragraflar: [
                    "Pancar'ın kompakt yapısına özgü geliştirdiğimiz model şudur: makine bölgede konaklar ve hafta içinde birden fazla tesisin işini turlar hâlinde yapar — pazartesi A tesisi aydınlatma, salı-çarşamba B tesisi kanal bakımı, perşembe C tesisi sprinkler. Nakliye tek girişte ödenir, her tesis yalnızca kendi kullanım günlerini üstlenir ve birim maliyet tüm katılımcılar için düşer. Vardiya pencereleri tesisler arasında çakışmadığı sürece model sorunsuz döner.",
                    "Bu düzen OSB yönetimi veya tesisler arası doğrudan eşgüdümle kurulabilir; tek şart taleplerin tarih esnekliğiyle gelmesidir. Dönemsel bakım haftalarında (yaz, yıl sonu) modelin kapasitesi erken rezervasyonla korunur — çakışan haftalarda makine sayısı artırılarak tur bölünür.",
                ],
            },
            {
                baslik: "Genç OSB'de büyüme dönemine hazırlık",
                paragraflar: [
                    "Pancar gibi genç OSB'lerde tesislerin önemli bölümü ilk büyüme evresindedir: kapasite artışı, ek hat, asma kat ilavesi. Bu evrenin platform ihtiyacı iki dalgada gelir — montaj dönemi (yoğun, birkaç haftalık) ve devreye alma sonrası eksik kapatma (dağınık, aylara yayılan). İlk dalga için aylık paket + gerekirse ikinci makine, ikinci dalga için toplu liste modeli veya kısa konaklamalar uygundur. Büyüme projeniz netleştiğinde iki dalgayı tek planda kurgulamak, toplam maliyeti belirgin düşürür.",
                    "Montaj döneminde üretim sürüyorsa Torbalı bölümünde anlattığımız bölge ayrımı disiplini burada da geçerlidir: bariyerli montaj alanı, ortak koridorda vardiya penceresi, üçlü koordinasyon (montajcı-tesis-biz).",
                ],
            },
        ],
        sss: [
            {
                soru: "Pancar OSB'ye teslimat ne kadar sürer?",
                cevap:
                    "Standart 1-2 iş günü; İzmir-Aydın karayolu üzerindeki konum sayesinde hem İzmir merkez hem Torbalı-Tire turlarımızla örtüşür ve tur birleştirmelerinde aynı gün teslim mümkündür. OSB'nin ada düzeni ve hızlı giriş süreci teslimat saatini öngörülebilir kılar. Tarih esnekliğiniz varsa talepte belirtin — bölgeye düzenli turlarımıza eklenen teslimatlarda nakliye payı düşer.",
            },
            {
                soru: "Enjeksiyon makinelerimizin üzerindeki tavan noktalarına nasıl ulaşılır?",
                cevap:
                    "Akülü eklemli platformla — pres ve kalıp sahası taşınamayacağı için hedefe yanal erişim gerekir: makine hat kenarına park eder, bomunu ekipmanın üzerinden aşırır. Seçim için aşılacak mesafenin (park noktasından hedefe yatay uzaklık) çalışma zarfı diyagramıyla karşılaştırılması gerekir; yükseklik arttıkça kullanılabilir yanal erişim azalır. Ölçüleri keşifte alıyoruz. Hat çalışırken bariyer + alet bağlama düzeniyle iş üretime paralel yürür.",
            },
            {
                soru: "Granül dökülen zeminde makine güvenli mi?",
                cevap:
                    "Temizlik yapılırsa evet — yapılmazsa hayır ve çalışmayı başlatmayız. Granül ve toz hammadde zeminde bilye etkisi yaratır: makine kayar, stabilite bozulur. Kural basittir: çalışma güzergâhı ve park alanı çalışma öncesi süpürülür, dökülme devam eden bölgelerde iş o hattın durduğu pencereye alınır. Bu, bölgedeki plastik tesislerinde standart uyguladığımız ve teslimatta saha ekibiyle üzerinden geçtiğimiz kontroldür.",
            },
            {
                soru: "Solvent kullanan tesisimizde hangi alanlarda çalışılabilir?",
                cevap:
                    "ATEX sınıfı dışındaki tüm alanlarda standart düzenle çalışılır. Solvent buharı veya toz patlaması riski taşıyan alanlar standart platforma kapalıdır; bu alanların işleri üretim durdurulup havalandırma yapıldıktan ve ortam ölçümüyle güvenli seviye belgelendikten sonra pencereli olarak yapılır. Zon haritanız keşifte çıkarılır — hangi iş paralel, hangi iş pencereli, baştan netleşir. Ölçüm prosedürü tesisinizin İSG ekibiyle ortak yürütülür.",
            },
            {
                soru: "Komşu tesisle aynı haftada işimiz var; ortak kiralama mümkün mü?",
                cevap:
                    "Mümkün ve Pancar'da özellikle verimli — haftalık turlu konaklama modelimiz tam bunun için var: makine bölgede konaklar, hafta içinde tesisleri sırayla dolaşır, nakliye tek girişte ödenir ve her tesis yalnızca kendi günlerini üstlenir. Ada düzeni sayesinde tesisler arası geçiş dakikalar sürer. Kurulum için iki talebin de 'ortak planlamaya uygun' notuyla gelmesi yeterli; gün dağılımını vardiya pencerelerinize göre biz kurgularız.",
            },
            {
                soru: "Kapasite artışı projemizde platform ihtiyacını nasıl planlamalıyız?",
                cevap:
                    "İki dalga hâlinde: montaj dönemi (yoğun — aylık paket, gerekirse ikinci makine, bariyerli bölge ayrımıyla üretime paralel) ve devreye alma sonrası eksik kapatma (dağınık — toplu liste veya kısa konaklama). İki dalgayı tek planda kurgulamak makine değişim tarihlerini ve nakliyeyi optimize eder. Proje takviminiz netleştiğinde montajcı firmayla üçlü plan kuruyoruz: kim hangi bölgede hangi haftada, hangi erişimle — üretiminiz iki dalga boyunca kesilmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Pancar OSB'nin Torbalı sınırındaki konumu ve genç-planlı OSB niteliği kamuya açık bilgidir; ATEX/zon kuralları mevzuat, çalışma düzenleri sektör pratiğidir.",
    },

    "bolge:bergama-osb": {
        h1: "Bergama OSB'de Üretim Durmadan Platform Kiralama",
        giris:
            "Bergama OSB'de üretim duruşunun maliyeti, İzmir merkezdeki bir tesise göre daha ağırdır — ve bunun nedeni mesafedir. Merkezdeki tesis, işi yarım bırakan bir aksaklıkta ertesi sabah yeni makine veya parça bulabilir; Bergama'daki tesis için her aksaklık, 100 kilometrelik lojistik zincirine bağlıdır. Bu yüzden bölgedeki kesintisiz üretim tesislerinde — kampanya dönemindeki gıda işleyicileri başta olmak üzere — platform işlerinin planı 'aksaklık olursa' değil 'aksaklık olmasın' mantığıyla kurulur: makine yedekli planlanır, pencereler geniş tutulur, saha bilgisi eksiksiz toplanır ve iş bloklarının sırası, kritik üretim dönemlerinden uzağa yerleştirilir. Uzak sahada paralel çalışma disiplini, merkezdekiyle aynıdır; farklı olan risk yönetimidir.",
        maddeler: [
            {
                baslik: "Kampanya döneminde dokunulmazlık ilkesi",
                metin:
                    "Salça ve konserve üreticilerinin kampanya haftalarında tesise planlı platform işi sokmuyoruz — bu bizim de ilkemizdir, çünkü kampanyadaki tesiste en küçük aksaklığın telafisi yoktur. Kampanya öncesi pencere (geç ilkbahar-yaz başı) tavan, aydınlatma, havalandırma ve sprinkler işlerinin tamamı için planlanır; kampanya çıkışı ise yıpranma onarımlarının dönemidir. Kampanya içinde zorunlu doğan işler için tek model kabul edilir: vardiya arası kısa bloklar, tesiste konaklayan makine ve önceden protokole bağlanmış acil pencere akışı.",
            },
            {
                baslik: "Uzak sahada yedekli planlama",
                metin:
                    "Merkeze uzak sahada 'makine arızalandı, yenisi yarın gelir' cümlesi bir günlük üretim planı demektir. Bergama işlerinde bu riski üç araçla küçültüyoruz: kritik pencereli işlerde ikame makinenin önceden rezervasyonu, uzun kiralamalarda periyodik bakımın sahada ve takvimli yapılması, ve iş başlamadan tam saha bilgisi (yükseklik, zemin, geçişler, şarj noktası) toplanarak yanlış makine ihtimalinin sıfırlanması. Bu üçlü, mesafenin yarattığı riski merkez seviyesine indirir.",
            },
            {
                baslik: "Tekstil hollerinde paralel çalışma",
                metin:
                    "Bölgenin tekstil tesislerinde dokuma ve konfeksiyon hatları üzerindeki aydınlatma-kanal işleri, bariyer ve alet bağlama düzeniyle üretime paralel yürür; elyaf uçuntusunun yoğun olduğu bölümlerde armatür ve pano üstü temizliği periyodik ihtiyaçtır ve çerçeve anlaşmayla takvime bağlanır. Hat üstü doğrudan müdahaleler tek vardiyalı tesislerde akşam bloğuna, çok vardiyalı tesislerde hafta sonuna planlanır. Makine gürültüsüzdür; gece bloğunda sorun yaşanmaz.",
            },
            {
                baslik: "Maden destek yapılarında ağır koşul düzeni",
                metin:
                    "Bölgedeki maden operasyonlarının atölye ve destek yapılarında üretim ritmi vardiyalıdır ve bakım işleri çoğunlukla ekipman bakım duruşlarıyla eşzamanlanır — platform penceresi, tesisin kendi bakım takvimine oturtulur. Toz yoğunluğu makine bakımını sıklaştırır, saha İSG sistemi (izin, refakat, eğitim) evrak süreci ister ve açık-yarı açık yapılarda dizel arazi tipi gerekir. Bu sahalarla çalışmanın anahtarı, izin sürecini kiralama talebiyle aynı gün başlatmaktır.",
            },
            {
                baslik: "Konaklamalı model: mesafenin cevabı",
                metin:
                    "Bergama profilinde en verimli model, makinenin tesiste veya bölgede konaklamasıdır: tek nakliyeyle giren makine, planlı işleri bitirir, zorunlu ara işler için hazır bekler ve dönemsel ihtiyaçlarda komşu tesislere turlar. Kampanya öncesi hazırlık dönemlerinde birden fazla tesisin işini tek konaklama turunda birleştirmek — OSB eşgüdümüyle — hem nakliyeyi paylaştırır hem bölgeye makine güvencesi sağlar. Kısa tek işler için ise sevkiyat turlarımıza denk gelen esnek tarihli planlama maliyeti düşürür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bergama'da üretim dönemine göre iş takvimi",
                paragraflar: [
                    "Bölgedeki ana sektörlerin üretim ritmi ve platform işlerinin doğru dönemi aşağıdadır. Uzak sahada dönem seçimi, merkezdekinden daha belirleyicidir — yanlış dönemde ne makine bulunur ne pencere.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Kritik dönem (iş sokulmaz)", "Doğru iş dönemi", "Model"],
                    satirlar: [
                        ["Salça / konserve", "Yaz sonu – sonbahar kampanyası", "İlkbahar – yaz başı", "Kampanya öncesi toplu plan"],
                        ["Tekstil", "Sipariş teslim haftaları", "Dönem araları", "Çerçeve anlaşma + periyodik"],
                        ["Maden destek", "Üretim vardiyaları", "Ekipman bakım duruşları", "Bakım takvimiyle eşzamanlı"],
                        ["Genel imalat", "—", "Yıl boyu", "Konaklamalı / tur bazlı"],
                    ],
                },
            },
            {
                baslik: "Acil iş protokolü: pencere hazır olmadan makine hazır",
                paragraflar: [
                    "Kampanyadaki tesiste zorunlu iş doğduğunda kaybedilecek saat yoktur; bu yüzden düzenli çalıştığımız Bergama tesisleriyle önceden acil protokol kuruyoruz: hangi işler hangi vardiya arasında yapılabilir, bariyer ve izin düzeni kim tarafından hazırlanır, makine hangi hızla ulaştırılır. Protokol kurulu tesiste acil iş, telefonla başlar ve ilk uygun pencerede biter — planlama sıfırdan yapılmaz.",
                    "Konaklamalı modeldeki tesislerde bu süreç daha da kısadır: makine zaten sahadadır, acil iş ilk vardiya arasında tamamlanır. Kampanya dönemine giren tesislere konaklama önerimizin ana gerekçesi budur — kira maliyeti, tek bir önlenen duruşun maliyetinden küçüktür.",
                ],
            },
            {
                baslik: "Uzak saha keşif disiplini",
                paragraflar: [
                    "Merkezde eksik saha bilgisinin bedeli birkaç saat, Bergama'da bir gündür. Bu yüzden bölge işlerinde keşif listesi eksiksiz tamamlanmadan sevkiyat planlanmaz: hedef kotlar, zemin tipi ve kaplaması, geçiş ölçüleri, hedef altı doluluk (eklemli ihtiyacı), şarj noktası, vardiya düzeni ve — gıda tesislerinde — zon haritası. Fotoğraflı keşif formumuz on dakikada doldurulur ve yanlış makine ihtimalini pratikte sıfırlar.",
                    "Aynı disiplin evrak için geçerlidir: tesis giriş kaydı, İSG dosyası ve maden sahalarında izin süreci sevkiyattan önce tamamlanır. Bergama'da 'makine kapıda evrak bekliyor' senaryosu, mesafe nedeniyle merkezden pahalıdır ve önlenebilirdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kampanya dönemimiz yaklaşıyor; işleri nasıl planlamalıyız?",
                cevap:
                    "Tek kural: kampanyadan önce bitirin. Tavan, aydınlatma, havalandırma ve sprinkler işlerinin tamamını kampanya öncesi pencereye (ilkbahar-yaz başı) topluyoruz — tesis görece boşken işler hızlı biter, hijyen prosedürleri rahat uygulanır ve kampanyaya temiz girilir. Kampanya içinde yalnızca zorunlu işler, önceden kurulmuş acil protokolle vardiya aralarında yapılır. Takviminiz netleştiğinde toplu iş listesini birlikte çıkarıyoruz; o dönem bölgede talep yoğunlaştığı için erken rezervasyon şarttır.",
            },
            {
                soru: "Üretim sürerken tavan işi Bergama'da da yapılabilir mi?",
                cevap:
                    "Evet — paralel çalışma disiplini mesafeyle değişmez: bariyerli alan, alet bağlama, güzergâh planı ve vardiya koordinasyonuyla hat kenarı işler üretime paralel yürür. Değişen, risk yönetimidir: uzak sahada makine arızası veya yanlış makine sevkiyatı bir günlük kayıp demektir. Bu yüzden keşif formu eksiksiz doldurulmadan sevkiyat yapmıyoruz ve kritik işlerde ikame rezervasyonu öneriyoruz. Doğru hazırlıkla Bergama'daki paralel çalışma, merkezdekiyle aynı güvenlikte işler.",
            },
            {
                soru: "Makinenin tesisimizde konaklaması hangi durumda mantıklı?",
                cevap:
                    "Üç durumda: işleriniz haftalara yayılıyorsa (nakliye teke iner, birim maliyet düşer), kampanya dönemine giriyorsanız (acil işler ilk vardiya arasında çözülür — kira, tek önlenen duruştan ucuzdur) ve düzenli periyodik ihtiyacınız varsa (elyaf temizliği gibi). Konaklayan makinenin bakımı sahada takvimli yapılır; tesise düşen yük güvenli park ve şarj noktasıdır. Kısa tek iş içinse konaklama gerekmez — sevkiyat turlarımıza denk esnek tarihli plan yeterlidir.",
            },
            {
                soru: "Maden sahamızdaki atölyede iş var; süreç ne kadar sürer?",
                cevap:
                    "İzin süreci belirler — teknik iş değil. Maden İSG sistemleri yüklenici kaydı, eğitim-oryantasyon, refakat düzeni ve iş izni ister; bu birkaç gün alabilir ve kiralama talebiyle aynı gün başlatılmalıdır. Platform penceresini tesisinizin ekipman bakım duruşuyla eşzamanlıyoruz — üretim vardiyası etkilenmez. Kapalı atölyede akülü (sıklaştırılmış toz bakımıyla), açık sahada dizel arazi tipi kullanılır; evrak setimiz maden sistemlerine hazır formatta sunulur.",
            },
            {
                soru: "Acil bir iş çıkarsa makine ne kadar sürede gelir?",
                cevap:
                    "Protokolsüz durumda gerçekçi cevap ertesi gündür — mesafe bunu belirler ve aksini vaat etmiyoruz. Riski asıl küçülten iki araç var: düzenli çalıştığımız tesislerle önceden kurduğumuz acil protokol (iş tanımları, pencere ve izin düzeni hazır — makine ilk turda gelir, planlama sıfırdan yapılmaz) ve kritik dönemlerde konaklamalı model (makine zaten sahada — acil iş ilk vardiya arasında biter). Kampanya dönemi tesisiyseniz ikincisini güçlü öneriyoruz.",
            },
            {
                soru: "Tekstil holümüzde elyaf temizliğini düzenli hâle getirebilir miyiz?",
                cevap:
                    "Evet — çerçeve anlaşmayla periyodik takvim kuruyoruz: temizlik sıklığı (elyaf yüküne göre tipik 3-6 ay), pencere düzeni (akşam bloğu veya hafta sonu) ve sabit koşullar bir kez tanımlanır; sonraki her tur planlı sevkiyata döner. Bergama için bu turları bölgedeki diğer periyodik işlerle aynı haftaya denk getiriyoruz — nakliye paylaşımı çerçeve fiyatına yansır. Armatür ve pano üstü elyaf birikimi yangın riski olduğu için bu işi ertelemeyin; sigorta denetimlerinde de ilk bakılan noktadır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bergama'nın İzmir'e uzaklığı, gıda kampanya ritmi ve tekstil/maden profili kamuya açık bilgidir; acil protokol ve konaklama modelleri firma pratiğidir.",
    },

    "bolge:menemen-deri-osb": {
        h1: "Menemen Deri OSB'de Üretim Durmadan Platform Kiralama",
        giris:
            "Deri işleme, duraksamayı sevmeyen bir prosestir: tabaklama tamburları başladığı işi bitirmek zorundadır, kurutma katlarındaki deri askıda beklemez ve finisaj hattı sipariş terminine kilitlenmiştir. Menemen Deri OSB'deki tesislerde platform işi planlarken bu ritmin içine yerleşmek gerekir — tambur döngüsünün ortasında o holde çalışılmaz, ama aynı saatlerde kurutma katı boş olabilir. İhtisas OSB'nin avantajı, bu ritmi bir kez öğrenince her tesiste benzer şekilde uygulanabilmesidir. Kesintisiz üretim odaklı düzenimiz burada proses-senkron çalışma hâlini alır: iş listesi, tesisin proses haritasına oturtulur ve makine, o an boş olan bölümde çalışarak tesisi hiç durdurmadan listeyi bitirir.",
        maddeler: [
            {
                baslik: "Proses-senkron iş planı",
                metin:
                    "Deri tesisinin bölümleri aynı anda değil sırayla yoğundur: ıslak bölüm tamburları döngüdeyken kuru bölüm sakin, finisaj sevkiyata çalışırken kurutma katları boş olabilir. Platform işlerini bu ritme senkronlamak — her bölümün işini o bölümün sakin saatine yerleştirmek — tesisi hiç durdurmadan tüm listeyi bitirmenin yoludur. Keşifte proses sorumlusuyla haftalık ritim haritası çıkarılır; iş listesi bu haritaya dağıtılır ve makine tesiste konaklayarak bölümden bölüme geçer.",
            },
            {
                baslik: "Islak bölümde çalışmanın makine koşulu",
                metin:
                    "Tabaklama ve sulama bölümlerinde nem ve kimyasal buhar süreklidir; buraya giren platformun elektrik aksamı korumalı olmalı ve çıkışta temizlik-kurulama prosedürü uygulanmalıdır. Islak bölüm işleri mümkünse tamburların durduğu bakım penceresine alınır — hem ortam yükü azalır hem tambur üstü noktalara güvenli erişim açılır. Zemin bu bölümlerde süreklidir ıslaktır: hız sınırı ve geniş dönüş kuralıyla çalışılır, acele ettirilmez.",
            },
            {
                baslik: "Kurutma katlarında dar alan erişimi",
                metin:
                    "Asma katlı kurutma alanları alçak ve doludur: askı sistemleri, ray hatları ve hava kanalları hacmi böler. Buradaki işler (askı rayı onarımı, kanal bakımı, aydınlatma) mikro ve dar şase makaslı sınıfla yapılır; kat taşıma kapasitesi ile makine ağırlığının karşılaştırılması her işten önce zorunludur. Kurutma katının boş olduğu pencere proses ritminden okunur — deri askıya alınmadan önceki saatler bu katın doğal çalışma penceresidir.",
            },
            {
                baslik: "Finisaj ve sevkiyat bölümünde hassas dönem",
                metin:
                    "Finisaj hattı ve sevkiyat alanı, sipariş terminlerine kilitli çalışır; buradaki platform işleri termin haftalarından uzağa planlanır. Hat üstü noktalara eklemli erişim gerekebilir — finisaj makineleri taşınmaz ve hedefin altı doludur. Sevkiyat alanındaki raf ve kapı üstü işler, yükleme saatlerinin dışındaki bloklara alınır; bu alanlarda forklift trafiği yoğundur ve güzergâh koordinasyonu şarttır.",
            },
            {
                baslik: "Ortak altyapıda OSB ritmiyle çalışma",
                metin:
                    "İhtisas OSB'nin arıtma tesisi ve ortak altyapısı da kendi ritmine sahiptir: arıtma yükü tesislerin deşarj saatlerini izler ve bakım işleri düşük yük saatlerine planlanır. Havuz üstü, boru köprüsü ve aydınlatma işlerinde OSB yönetiminin izin sistemi ve gaz ölçüm prosedürü uygulanır. Bu işleri tesis içi işlerle aynı konaklama dönemine denk getirmek — makine bir kez gelir, hem tesisin hem OSB'nin listesi biter — bölgede en verimli modeldir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Deri tesisinde bölüm-pencere haritası",
                paragraflar: [
                    "Aşağıdaki harita, proses-senkron planın temelidir: her bölümün doğal çalışma penceresi ve makine gereksinimi farklıdır. Tesisin kendi ritmi keşifte bu şablona oturtulur.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Doğal pencere", "Ortam koşulu", "Makine"],
                    satirlar: [
                        ["Islak bölüm (tambur, sulama)", "Tambur bakım duruşu", "Nem + kimyasal, ıslak zemin", "Korumalı akülü makaslı"],
                        ["Kurutma katları", "Askı öncesi saatler", "Alçak-dar hacim, kat kapasitesi", "Mikro / dar şase makaslı"],
                        ["Finisaj hattı", "Termin haftaları dışı", "Hat üstü erişim", "Kompakt eklemli"],
                        ["Sevkiyat / depo", "Yükleme saatleri dışı", "Forklift trafiği", "Akülü makaslı 10 – 12 m"],
                        ["OSB ortak altyapı", "Düşük deşarj saatleri", "İzin + gaz ölçümü", "Duruma göre akülü / dizel"],
                    ],
                },
            },
            {
                baslik: "Konaklamalı bölüm turu modeli",
                paragraflar: [
                    "Proses-senkron planın doğal sonucu konaklamadır: makine tesise bir kez girer, her bölümün sakin penceresinde o bölümün işini yapar ve liste bitene kadar sahada kalır. Tek nakliye, sıfır üretim duruşu ve her bölüm için doğru pencere — deri tesislerinde bu model, bölüm başına ayrı kısa kiralamalar toplamından hem ucuz hem hızlıdır. Islak bölüm çıkışlarında ara temizlik prosedürü konaklama planına dahildir.",
                    "Aynı model OSB ölçeğine genişler: komşu tesislerin listeleri aynı konaklama dönemine toplandığında makine tesisler arasında turlar ve nakliye tüm katılımcılara paylaştırılır. Sipariş dönemlerinin OSB genelinde benzeşmesi bu eşgüdümü kolaylaştırır — sakin haftalar çoğu tesiste çakışır.",
                ],
            },
            {
                baslik: "Kimyasal ortamda ekipman ve personel güvenliği",
                paragraflar: [
                    "Deri prosesinin kimyasal yükü, platform çalışmasına iki güvenlik katmanı ekler. Ekipman tarafında: korumalı elektrik aksamı, çıkış temizliği ve nemli ortam katsayılı bakım takvimi — bunlar bizim yükümlülüğümüzdür ve sözleşmede yazılıdır. Personel tarafında: bölüme uygun KKD (maske, gözlük, eldiven) ve kimyasal bölgelerdeki çalışma izinleri — bunlar işveren yükümlülüğüdür; operatörlü kiralamada operatörümüz tesisin KKD ve izin düzenine tabidir.",
                    "Havalandırmanın zayıf olduğu noktalarda (kapalı tank çevresi, bodrum kotu) gaz ölçümü çalışma önkoşuludur. Bu noktaları keşifte işaretliyor ve iş planında ölçüm sorumlusunu netleştiriyoruz — 'kim ölçecek' sorusu sahada değil planda cevaplanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizi hiç durdurmadan tüm bakım listesi bitirilebilir mi?",
                cevap:
                    "Deri tesisinde çoğunlukla evet — proses-senkron planla. Bölümleriniz aynı anda değil sırayla yoğun olduğu için her bölümün işi o bölümün sakin penceresine yerleştirilir: kurutma katı askı öncesi, ıslak bölüm tambur duruşunda, finisaj termin haftası dışında. Makine konaklar ve bölümden bölüme geçer; üretim hiçbir noktada durmaz. Keşifte proses sorumlunuzla haftalık ritim haritası çıkarıyoruz — plan bu haritanın üzerine kurulur.",
            },
            {
                soru: "Tambur bölümündeki tavan işi için üretimi durdurmak şart mı?",
                cevap:
                    "Tamamen durdurmak değil, doğru döngü arasını beklemek gerekir. Tamburlar başladığı döngüyü bitirmek zorundadır; iş, döngü bitişiyle yeni yükleme arasındaki doğal boşluğa veya planlı tambur bakım duruşuna yerleştirilir. Bu pencerede hem ortam yükü (buhar, gürültü) azalır hem tambur üstü noktalara güvenli erişim açılır. Islak bölüme giren makine korumalı aksamlı gelir ve çıkışta temizlik prosedürü uygulanır — bu hazırlık sevkiyat öncesi yapıldığı için pencere kaçırılmaz.",
            },
            {
                soru: "Kurutma katımızın tabanı makineyi taşır mı?",
                cevap:
                    "Hesapla cevaplanır — varsayımla değil. Asma katın taşıma kapasitesi (projesinden veya statik raporundan) makinenin toplam ağırlığıyla karşılaştırılır; mikro makaslı sınıf bu katlar için hem ölçü hem ağırlık olarak tasarlanmıştır ama kontrol yine de atlanmaz. Kapasite sınırdaysa yük dağıtıcı plaka kullanılır veya iş, kat altından eklemli erişimle çözülür. Kat kapasitesi bilgisini talepte paylaşın; makine seçimi bu rakamla başlar.",
            },
            {
                soru: "Sipariş terminimiz yaklaşırken finisaj hattında iş çıktı; ne yapılır?",
                cevap:
                    "Termin haftasında finisaj hattına planlı iş sokmuyoruz — riskin sahibi belli olmayan bir gecikme, terminin kendisini tehdit eder. Zorunlu (üretimi engelleyen) işlerde akış şöyledir: iş, hattın günlük kapanış saatinden sonraki bloğa alınır, makine önceden sahaya konumlanır ve sabah vardiyasından önce bitirilir. Ertelenebilir işler termin sonrasına yazılır. Bu ayrımı proses sorumlunuzla birlikte yapıyoruz — 'zorunlu mu, ertelenebilir mi' kararı teknik değil üretim kararıdır.",
            },
            {
                soru: "OSB arıtma tesisindeki iş ile tesis içi işlerimizi birleştirebilir miyiz?",
                cevap:
                    "Evet — aynı konaklama dönemine toplanır: makine bir kez gelir, tesis içi liste proses pencerelerinde, arıtma işleri düşük deşarj saatlerinde yapılır ve nakliye teke iner. Arıtma tarafında OSB yönetiminin izin sistemi ve gaz riski olan noktalarda ölçüm prosedürü geçerlidir; bu süreci konaklama planıyla birlikte başlatıyoruz. OSB ölçeğinde komşu tesislerin de katıldığı turlu model kurulabilir — ihtisas OSB'nin benzer ritmi bu eşgüdümü kolaylaştırır.",
            },
            {
                soru: "Nemli ortamda makinenin arızalanması üretimimizi aksatır mı?",
                cevap:
                    "Aksatmaması için üç önlem sözleşmede yer alır: nemli ortam katsayısıyla sıklaştırılmış periyodik bakım (arıza olasılığını düşürür), saatle tanımlı arıza müdahale taahhüdü ve gerektiğinde ikame makine sevkiyatı. Islak bölüm bilgisi baştan verildiyse doğru korumalı model gelir ve arıza riski zaten düşüktür. Konaklamalı işlerde bakım sahada takvimli yapılır — makine proses pencerenizi bakım için kaçırmaz, bakım da sizin sakin saatinize denk getirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Deri prosesinin bölüm ritmi (tambur döngüsü, kurutma, finisaj) sektör bilgisidir; proses-senkron plan ve konaklama modeli firma pratiğidir.",
    },

    "bolge:tire-osb": {
        h1: "Tire OSB'de Üretim Durmadan Platform Kiralama",
        giris:
            "Süt işleyen bir tesiste 'üretimi durdurmak' diye bir seçenek çoğu zaman yoktur: çiğ süt her sabah gelir, proses o gün başlamak zorundadır ve soğuk zincir saat toleransı tanımaz. Tire OSB'nin süt ürünleri ağırlıklı dokusunda platform işleri bu gerçeğin etrafında planlanır — tesisi durdurmak yerine tesisin kendi doğal boşluklarını kullanmak. Süt prosesinin şansı, bu boşlukların her gün düzenli tekrarlamasıdır: CIP yıkama blokları, proses arası sanitasyon pencereleri ve gece saatleri. Tekstil ve ambalaj tesislerinde ise klasik paralel çalışma düzeni işler. Bu sayfa, Tire'deki kesintisiz üretim ortamlarında hangi işin hangi boşluğa nasıl yerleştirildiğini anlatır.",
        maddeler: [
            {
                baslik: "CIP penceresi: süt tesisinin doğal iş bloğu",
                metin:
                    "Süt prosesinin günlük CIP (yerinde yıkama) blokları, platform işleri için hazır pencerelerdir: hat kimyasal yıkamadayken üzerinde ürün yoktur ve o bölgenin tavan-tesisat işleri güvenle yapılabilir. CIP takvimi tesisin kendi ritmidir ve her gün tekrarlar — iş listesi bu bloklara bölünür, makine tesiste konaklar ve liste birkaç günde parça parça biter. Açık ürün bölgesi kuralı burada da geçerlidir: proses çalışırken o zonun üzerinde iş yapılmaz, CIP penceresi beklenir.",
            },
            {
                baslik: "Soğuk zincir alanlarında blok çalışma",
                metin:
                    "Olgunlaştırma odaları, soğuk depolar ve sevkiyat öncesi soğuk alanlarda çalışma, soğuk zinciri bozmayacak bloklar hâlinde planlanır: kapı disiplini korunur, akü performansı düşük sıcaklık katsayısıyla hesaplanır ve makine molalarda ılık bölmeye alınır. Evaporatör bakımı bu alanların en kritik işidir — arızalı evaporatör ürün riski demektir ve bakımı ertelemek arızayı beklemekten pahalıdır. Evaporatör işlerini dönemsel takvime bağlayan tesislerde acil çağrı pratikte sıfırlanır.",
            },
            {
                baslik: "Buhar ve kazan dairesi çevresinde iş",
                metin:
                    "Süt tesisinin buhar altyapısı süreklidir; kazan dairesi ve buhar hattı çevresindeki işlerde sıcak yüzey mesafesi korunur ve izolasyon işlerinde malzeme taşıma planı yapılır. Bu alanlar üretimden bağımsız çalışılabilen nadir bölgelerdir — proses saatinden etkilenmezler — ve iş listesinin 'her an yapılabilir' kalemi olarak plan boşluklarını doldururlar. Dar kazan dairelerinde dar şase modeller gerekir.",
            },
            {
                baslik: "Tekstil ve ambalajda klasik paralel düzen",
                metin:
                    "OSB'nin tekstil ve ambalaj tesislerinde süt prosesinin kısıtları yoktur; bariyer + alet bağlama + güzergâh planı üçlüsüyle işlerin çoğu üretime paralel yürür. Elyaf uçuntusu temizliği (armatür, pano üstü) periyodik ihtiyaçtır ve çerçeve anlaşmayla akşam bloklarına takvimlenir. Hat üstü doğrudan müdahaleler vardiya düzenine göre gece veya hafta sonuna alınır — akülü makinenin sessizliği her iki pencerede de sorunsuzdur.",
            },
            {
                baslik: "Denetim takvimiyle senkron hazırlık",
                metin:
                    "Süt ve gıda tesislerinin BRC/IFS ve müşteri denetimleri, platform ihtiyacının öngörülebilir zirvesidir: tavan temizliği, aydınlatma, sinek-kuş önleme ve boya-onarım işleri denetim öncesi 2-3 haftada yoğunlaşır. Bu işleri CIP pencereleri ve gece bloklarına dağıtan tek konaklamalı plan — makine gelir, denetim listesi parça parça biter, üretim hiç durmaz — Tire'de en sık kurduğumuz düzendir. Denetim kayıtlarına girecek makine evrakları hazır teslim edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Süt tesisinde pencere-iş eşleşmesi",
                paragraflar: [
                    "Sütün günlük ritmi, her iş tipine uygun pencereyi kendisi üretir. Aşağıdaki eşleşme, Tire'deki konaklamalı planların temelidir.",
                ],
                tablo: {
                    basliklar: ["İş", "Doğru pencere", "Koşul", "Makine"],
                    satirlar: [
                        ["Proses hattı üstü tavan/tesisat", "CIP yıkama bloğu", "Zon kapalı-temiz durumda", "Akülü makaslı, iz bırakmayan"],
                        ["Evaporatör / soğuk oda", "Ürün rotasyon boşluğu", "Soğuk zincir blokları, akü planı", "Akülü makaslı 10 – 12 m"],
                        ["Kazan dairesi / buhar hattı", "Her an (plan boşluğu doldurur)", "Sıcak yüzey mesafesi", "Dar şase makaslı"],
                        ["Paketleme alanı", "Vardiya arası / gece", "Hijyen seti, alet sayımı", "Akülü makaslı"],
                        ["Denetim hazırlığı (toplu)", "2-3 hafta önce, karma pencere", "Konaklamalı plan", "Akülü makaslı + gerekirse eklemli"],
                    ],
                },
            },
            {
                baslik: "Evaporatör bakımını takvime bağlamak",
                paragraflar: [
                    "Soğuk alan evaporatörleri, süt tesisinin en riskli tekil noktasıdır: arıza doğrudan ürün kaybı demektir ve arıza anında yapılan müdahale, hem pahalı hem soğuk zincir açısından streslidir. Dönemsel bakım takvimi bu riski tersine çevirir — yılda iki-üç kez, ürün rotasyonunun en uygun boşluğunda planlı temizlik-kontrol yapılır ve acil çağrı ihtimali pratikte sıfırlanır. Çerçeve anlaşmayla kurulan bu takvim, her turda aynı düzeni (aynı pencere tipi, aynı makine sınıfı, aynı prosedür) tekrarladığı için tur süresi giderek kısalır.",
                    "Aynı takvim mantığı elyaf temizliği (tekstil) ve armatür bakımı (tüm sektörler) için geçerlidir: periyodik işleri takvime bağlamak, hem acil iş stresini hem toplam maliyeti düşürür.",
                ],
            },
            {
                baslik: "Tire'de konaklama ve tur ekonomisi",
                paragraflar: [
                    "Tire OSB, Torbalı-Tire-Aydın sevkiyat eksenimizin üzerindedir ve teslimat standart 1-2 iş günüdür; ancak süt tesislerinin parçalı pencere yapısı (her gün birkaç saatlik bloklar) kısa kiralamayı verimsiz kılar — işin kendisi üç günlük olsa da pencerelere bölününce takvimde bir haftaya yayılır. Bu yüzden bölgedeki standart önerimiz konaklamalı pakettir: makine yayılan takvim boyunca sahada kalır, her pencereyi kullanır ve günlük birim maliyet kısa kiralamanın altına iner.",
                    "Ödemiş-Bayındır hattındaki diğer tesislerle tur birleştirmesi de aynı ekonomiyi büyütür: bir tesisin CIP penceresi öğlen, diğerinin gece bloğuysa aynı makine ikisine de yetişebilir. Bu eşgüdüm, taleplerin tarih ve pencere bilgisiyle gelmesiyle kurulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Süt prosesimiz hiç durmuyor; tavan işleri nasıl yapılacak?",
                cevap:
                    "Prosesin kendi boşluklarıyla: günlük CIP yıkama bloklarında hat üzerinde ürün yoktur ve o zonun tavan-tesisat işleri güvenle yapılır; soğuk alanlar ürün rotasyonunun boşluklarında, kazan dairesi ise her an çalışılabilir. İş listesi bu pencerelere dağıtılır, makine konaklar ve liste parça parça biter — proses hiç durmaz. CIP takviminizi keşifte alıyoruz; plan doğrudan onun üzerine kurulur.",
            },
            {
                soru: "Evaporatör bakımı için soğuk odayı boşaltmamız mı gerekiyor?",
                cevap:
                    "Çoğunlukla hayır — ürün rotasyonunun doğal boşluğu yeterlidir: oda dolu-boş döngüsünde en düşük doluluk anına denk gelen blokta çalışılır, kapı disiplini korunur ve soğuk zincir bozulmaz. Akü, düşük sıcaklık katsayısıyla planlanır ve makine molalarda ılık bölmeye alınır. Asıl önerimiz bakımı takvime bağlamaktır: yılda iki-üç planlı tur, arıza anı müdahalesinin hem riskinden hem maliyetinden kurtarır.",
            },
            {
                soru: "Denetimimize üç hafta var; işler yetişir mi?",
                cevap:
                    "Yetişir — bugün başlanırsa. Denetim hazırlığı (tavan temizliği, aydınlatma, sinek-kuş önleme, boya-onarım) konaklamalı planla CIP pencereleri ve gece bloklarına dağıtılır; üretim durmaz ve liste 2-3 haftada parça parça biter. Son haftaya sıkışan hazırlık hem makine bulunabilirliği hem işçilik kalitesi riskidir. Denetim kayıtlarınıza girecek makine evraklarını (temizlik belgesi, periyodik kontrol, operatör belgeleri) dosya hâlinde teslim ediyoruz.",
            },
            {
                soru: "CIP sırasında hat üzerinde çalışmak gerçekten güvenli mi?",
                cevap:
                    "Evet — çünkü CIP bloğunda zon, tanımı gereği kapalı-temiz durumdadır: hat üzerinde açık ürün yoktur, kimyasal devridaim kapalı boru içindedir ve bölge zaten üretim dışıdır. Güvenlik seti yine tam uygulanır: bariyer, alet bağlama, sarf sayımı ve iz bırakmayan lastik. Tek koşul zamanlamadır — iş bloğu CIP süresinin içine sığacak şekilde planlanır, yarım kalan iş bir sonraki CIP bloğuna devredilir. Kalite ekibiniz her bloğun açılış-kapanışını onaylar.",
            },
            {
                soru: "Hem süt tesisimiz hem yan ambalaj birimimiz var; tek plan olur mu?",
                cevap:
                    "Olur ve idealdir: ambalaj biriminin işleri klasik paralel düzenle (bariyer + alet bağlama) gündüz yapılırken süt tarafının işleri CIP ve gece bloklarını kullanır — aynı makine iki birimin listesini tek konaklamada bitirir. Pencere çakışması yaşanmaz çünkü iki birimin doğal boşlukları farklı saatlerdedir. İki listeyi keşifte birleştirip tek takvim kuruyoruz; nakliye ve kiralama tek sözleşmede toplanır.",
            },
            {
                soru: "Tire'ye düzenli periyodik bakım turu kurulabilir mi?",
                cevap:
                    "Kurulur — çerçeve anlaşmayla: evaporatör bakımı, elyaf temizliği ve armatür kontrolü gibi periyodik işler yıllık takvime bağlanır ve her tur planlı sevkiyatla gelir. Ödemiş-Bayındır hattındaki diğer tesislerin turlarıyla birleştirildiğinde nakliye paylaşılır ve çerçeve fiyatına yansır. Takvimli tur modelinin asıl kazancı acil çağrının sıfırlanmasıdır — planlı bakım yapılan tesiste 'acil evaporatör' araması pratikte gelmez oluyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Süt prosesinin CIP/soğuk zincir ritmi gıda sektörü standardıdır; pencere planlama ve konaklama modeli firma pratiğidir.",
    },

    "bolge:manisa-osb-cevre-ili": {
        h1: "Manisa OSB'de Üretim Durmadan Platform Kiralama (Çevre İl)",
        giris:
            "Manisa OSB'nin küresel ölçekli üreticilerinde 'hat duruşu' kelimesi, dakika başına hesaplanan bir maliyet tablosuna karşılık gelir — beyaz eşya ve elektronik üretiminde takt süresi kutsaldır ve planlı bakım pencereleri aylar öncesinden takvimlidir. Bu ortamda platform kiralamanın işi, makine getirmekten çok o takvime kusursuz oturmaktır: doğru makine, doğru saatte, evrakı tamam ve yedeği planlanmış hâlde. İzmir merkezli filomuz Kemalpaşa üzerinden bu bölgeye komşudur; Sabuncubeli bağlantısı teslimatı İzmir doğu OSB'leriyle aynı banda koyar. Kesintisiz üretim odağımız burada iki biçim alır: hat çalışırken bariyerli paralel işler ve — bölgenin asıl talebi olan — planlı duruş haftalarında dakika hesabıyla yürüyen yoğun bakım operasyonları.",
        maddeler: [
            {
                baslik: "Takt süresine saygı: paralel işin sınırı",
                metin:
                    "Seri üretim hattında paralel çalışmanın sınırını bariyer değil titreşim ve dikkat çizer: hassas montaj istasyonlarının üzerinde çalışmak, düşen alet riski sıfırlansa bile operatör dikkatini böler ve kalite sapması yaratabilir. Bu yüzden hat kenarı işler (aydınlatma, kablo tavası, sprinkler) paralel yapılırken istasyon üstü noktalar mola bloklarına veya vardiya değişimlerine alınır. Hangi noktanın hangi kategoride olduğu, hat sorumlusuyla keşifte işaretlenir — bu harita olmadan üretim alanına makine sokmuyoruz.",
            },
            {
                baslik: "Planlı duruşta dakika hesabı",
                metin:
                    "Yıllık bakım duruşu, bölge tesislerinde saatlere bölünmüş bir operasyon planıdır ve platform işleri bu planın içinde kendi slotlarını alır: hangi makine hangi holde hangi saatte, hangi işi, hangi ekiple. Bizim katkımız slot disiplinidir — makine slotundan önce holde konumlanmış, operatör brifingi alınmış ve bir önceki işin gecikmesi durumunda B planı belirlenmiş olur. Duruş haftasında kaybedilen bir saat geri gelmez; bu yüzden duruş işlerinde makine sayısını sıkışık değil payl planlıyoruz.",
            },
            {
                baslik: "ESD ve temiz alan disiplini",
                metin:
                    "Elektronik üretim alanlarında ESD (statik boşalma) kuralları platform çalışmasına da uygulanır: makinenin topraklama sürekliliği, operatörün ESD donanımı ve bazı alanlarda iletken lastik şartı. Temiz oda sınıfına yaklaşan alanlarda partikül kaygısı ek katman getirir — makine temizliği ve yavaş hareket protokolü. Bu şartlar tesisten tesise değişir; kalite ekibinizin şartnamesini talepte alıyor ve makine hazırlığını ona göre belgeliyoruz.",
            },
            {
                baslik: "Yan sanayide ana üreticinin ritmi",
                metin:
                    "Manisa'daki yan sanayi tesisleri, ana üreticinin üretim ritmine kilitlidir: onun duruşu geldiğinde yan sanayi de durur ve tüm bölgenin bakım talebi aynı haftalara yığılır. Bu senkron, planlamayı hem zorlaştırır (aynı hafta herkese makine gerekir) hem kolaylaştırır (takvim aylar önce bellidir). Yan sanayi tesislerine önerimiz nettir: ana üreticinin duruş takvimi açıklandığı gün rezervasyonu bağlayın — o hafta bölgede makine bulmak, duruşun kendisinden zor olabilir.",
            },
            {
                baslik: "Sabuncubeli hattında hızlı destek",
                metin:
                    "Kemalpaşa-Manisa bağlantısı, arıza ve ikame senaryolarında kritik avantajdır: İzmir doğu turlarımızla aynı eksende olduğu için ikame makine ve teknisyen desteği aynı gün ulaşır. Kesintisiz üretim ortamında bu süre, sözleşmede saatle taahhüt edilir. Uzun kiralamalarda periyodik bakım sahada yapılır; büyük tesislerin yüklenici sistemlerine (online kayıt, İSG oryantasyonu, araç bildirimi) evrak setimiz hazır formatta girer — ilk kayıt sonrası her kiralama telefon hızındadır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manisa OSB'de iş kategorisi ve zamanlama haritası",
                paragraflar: [
                    "Bölge tesislerinde işleri dört kategoriye ayırıyoruz; her kategorinin zamanlaması ve makine düzeni farklıdır. Keşifte iş listesi bu haritaya oturtulur.",
                ],
                tablo: {
                    basliklar: ["Kategori", "Zamanlama", "Düzen", "Not"],
                    satirlar: [
                        ["Hat kenarı (aydınlatma, tava)", "Üretime paralel", "Bariyer + alet bağlama", "Takt etkilenmez"],
                        ["İstasyon üstü noktalar", "Mola / vardiya değişimi", "Kısa bloklar", "Dikkat bölme riski yönetilir"],
                        ["ESD / temiz alan işleri", "Kalite şartnamesine göre", "Topraklama + iletken lastik", "Şartname talepte alınır"],
                        ["Duruş haftası yoğun bakım", "Yıllık planlı duruş", "Slot disiplini, çoklu makine", "Rezervasyon aylar önce"],
                    ],
                },
            },
            {
                baslik: "Duruş haftası operasyonu: slot planından B planına",
                paragraflar: [
                    "Duruş haftası işlerinde standart hazırlığımız üç katmandır. Birincisi slot planı: her makinenin saat saat programı, hol ve iş eşleşmesi duruştan önce kesinleşir. İkincisi hazır konum: makineler slotlarından önce holde konumlanır, operatör brifingleri tamamlanır — duruş saatleri makine taşıyarak harcanmaz. Üçüncüsü B planı: önceki işin sarkması, beklenmeyen ek iş veya makine arızası durumunda hangi slotun nasıl kayacağı önceden bellidir ve yedek makine rezervasyonu duruş paketine dahildir.",
                    "Bu disiplin, duruş haftasını 'umarım yetişir' gerginliğinden 'plan işliyor' rutinine çevirir. Duruş takviminiz netleştiğinde iş listesini slot planına birlikte döküyoruz — geçmiş duruşlarınızın sarkma noktaları da plana işlenir.",
                ],
            },
            {
                baslik: "Çevre ilden hizmetin işleyişi",
                paragraflar: [
                    "İzmir merkezli filo için Manisa OSB, Sabuncubeli bağlantısı sayesinde fiilen komşu bölgedir: teslimat 1-2 iş günü, Kemalpaşa turlarıyla birleşen sevkiyatlarda aynı gün; arıza müdahalesi ve ikame aynı eksenden saatler içinde. Uzun kiralamalarda makine sahada konaklar ve mesafenin operasyonel etkisi kalmaz. Nakliye teklifte ayrı satırdır — yerel alternatiflerle karşılaştırma yapabilirsiniz.",
                    "Bölgeye özgü tek hazırlık, büyük tesislerin yüklenici kayıt sistemleridir: ilk kayıt birkaç gün alabilir ve talep bu payla açılmalıdır. ESD/temiz alan şartnameleri de ilk kiralamada netleştirilir; sonraki kiralamalarda her iki süreç de hazırdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hattımız 7/24 çalışıyor; bakım işleri için tek şansımız yıllık duruş mu?",
                cevap:
                    "Hayır — iş listesinin önemli bölümü duruş beklemez: hat kenarı aydınlatma, kablo tavası ve sprinkler işleri bariyerli düzenle üretime paralel, istasyon üstü noktalar mola ve vardiya değişimi bloklarında yapılır. Duruşa kalması gereken yalnızca hat üstü doğrudan müdahaleler ve büyük revizyon işleridir. Keşifte listenizi bu haritaya ayırıyoruz — çoğu tesiste 'duruşa kalan' liste, sanılandan kısa çıkar ve duruş haftası rahatlar.",
            },
            {
                soru: "Yıllık duruşumuz iki hafta sonra; hâlâ makine bulabilir miyiz?",
                cevap:
                    "Deneriz ama garanti veremeyiz — duruş haftaları bölge genelinde senkron olduğu için kapasite aylar önce bağlanır. Bulunursa da slot planı aceleye gelir. Kalıcı çözüm önerimiz: ana üreticinin (veya kendi tesisinizin) duruş takvimi açıklandığı gün rezervasyonu bağlamak. Erken bağlanan duruş paketine slot planı, hazır konumlama, operatör brifingi ve yedek makine rezervasyonu dahildir — duruş haftası 'umarım yetişir' değil 'plan işliyor' modunda geçer.",
            },
            {
                soru: "ESD kontrollü alanımızda platform şartlarımız var; karşılayabilir misiniz?",
                cevap:
                    "Evet — şartnamenizle çalışıyoruz: makinenin topraklama sürekliliği belgelenir, operatör ESD donanımıyla (bileklik, uygun ayakkabı) gelir ve iletken lastik şartı varsa uygun model sevk edilir. Temiz alan sınıfına yaklaşan bölgelerde makine temizliği ve yavaş hareket protokolü eklenir. Kalite ekibinizin şartnamesini talepte alıyor, hazırlığı ona göre belgeliyor ve onayınıza hazır dosyayla teslim ediyoruz — ilk kiralamada kurulan bu düzen sonraki tüm işlerde hazırdır.",
            },
            {
                soru: "Üretim hattının üzerindeki noktaya hat çalışırken çıkılabilir mi?",
                cevap:
                    "Nokta hattın neresinde olduğuna bağlı. Hat kenarındaki (üzerinde istasyon olmayan) noktalar bariyerli düzenle paralel çalışılır. İstasyonların tam üzeri ise farklıdır: düşen alet riski sıfırlansa bile operatör dikkatinin bölünmesi kalite sapması yaratabilir — bu noktalar mola bloklarına veya vardiya değişimlerine alınır. Ayrımı hat sorumlunuzla keşifte işaretliyoruz; harita netleşmeden üretim alanına makine sokmuyoruz.",
            },
            {
                soru: "Yan sanayi tesisiyiz; ana üreticinin duruşuna nasıl hazırlanmalıyız?",
                cevap:
                    "Takvim açıklandığı gün rezervasyonla. Ana üreticinin duruşu geldiğinde bölgedeki tüm yan sanayi aynı haftada bakım ister ve makine kapasitesi o hafta için erkenden dolar. İkinci hazırlık, iş listenizi iki gruba ayırmaktır: duruş gerektirmeyen işler (hat kenarı — normal haftalarda paralel yapılır, duruş listesi kısalır) ve gerçekten duruşa kalan işler (slot planına girer). Bu ayrım, duruş haftasında hem makine ihtiyacınızı hem maliyeti düşürür.",
            },
            {
                soru: "İzmir'den gelen makineyle arıza durumunda ne kadar bekleriz?",
                cevap:
                    "Sözleşmede saatle taahhüt edilen süre kadar — pratikte Sabuncubeli bağlantısı sayesinde teknisyen ve ikame makine aynı gün ulaşır; Kemalpaşa turlarımızla aynı eksende olduğunuz için bu süre çoğu zaman birkaç saattir. Kritik pencereli işlerde (duruş slotu gibi) yedek makine rezervasyonu zaten pakete dahildir — bekleme senaryosu planla ortadan kaldırılır. Normal kullanım arızalarında sürecin tüm maliyeti bize aittir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Manisa OSB'nin beyaz eşya/elektronik profili ve planlı duruş pratiği kamuya açık/sektörel bilgidir; slot disiplini firma pratiğidir.",
    },

    "bolge:aydin-osb-cevre-ili": {
        h1: "Aydın OSB'de Üretim Durmadan Platform Kiralama (Çevre İl)",
        giris:
            "Aydın havzasının üretim takvimi topraktan gelir: zeytin kasım'da sıkılır, incir ağustos'ta işlenir, süt her sabah toplanır ve jeotermal santral hiç durmaz. Bu takvimlerin ortak özelliği, insanın değil ürünün belirlediği pencereler olmasıdır — kampanyadaki zeytinyağı tesisine 'hattı yarın durduralım' denemez. Kesintisiz üretim odaklı düzenimiz bu havzada mevsim-senkron planlama hâlini alır: her tesisin işi, kendi ürününün sakin dönemine yerleştirilir ve kampanya dönemlerinde yalnızca önceden protokole bağlanmış acil pencereler kullanılır. İzmir-Aydın otoyolu, merkezli filomuzu havzaya bağlar; Torbalı-Tire turlarıyla birleşen sevkiyat düzeni, mevsimsel talep dalgalarına kapasite esnekliği sağlar.",
        maddeler: [
            {
                baslik: "Mevsim-senkron plan: ürünün takvimi esastır",
                metin:
                    "Havzadaki her sektörün dokunulmaz dönemi farklıdır: zeytinyağında kasım-ocak, incirde ağustos-eylül, süt işlemede her günün proses saatleri. İş planı bu dönemlerin tersine kurulur — zeytinyağı tesisinin tavan işleri yaz aylarında, incir işleyicisininki ilkbaharda, süt tesisininki günlük CIP bloklarında yapılır. Mevsimlerin farklılığı bölge kapasitesini dengeler: aynı makine yazın zeytinyağı tesislerinde, ilkbaharda incir işleyicilerinde çalışır ve yıl boyu verimli döner.",
            },
            {
                baslik: "Kampanya tesislerinde konaklamalı hazırlık",
                metin:
                    "Kampanyaya girecek tesiste son haftaların telaşı yerine önerdiğimiz model erken konaklamadır: makine kampanya öncesi son ayda tesise girer, tüm hazırlık listesi (tavan, aydınlatma, havalandırma, sprinkler, soğuk alan) sırayla biter ve tesis kampanyaya makinesi çıkmış, listesi kapanmış hâlde girer. Kampanya sırasında zorunlu iş doğarsa önceden kurulmuş acil protokol devreye girer — vardiya arası pencere, hazır bariyer düzeni ve saatle tanımlı ulaşım.",
            },
            {
                baslik: "Jeotermal sahalarda süreklilik ve izin dengesi",
                metin:
                    "Jeotermal santral 7/24 üretir ve bakım işleri ekipman redundansı üzerinden planlanır: yedekli pompa gruplarından biri bakımdayken diğeri çalışır, platform işi o ekipmanın bakım penceresine eşzamanlanır. Saha İSG sistemi (H2S ölçümü, izin, refakat) evrak süreci ister ve bu süreç teknik işten uzun sürebilir — talep, izin takvimiyle birlikte açılır. Kapalı türbin binalarında akülü, açık sahada stabilize zemin nedeniyle dizel arazi tipi kullanılır; sıcak boru hatları çevresinde mesafe kuralları iş planına işlenir.",
            },
            {
                baslik: "Soğuk zincir ve paketleme tesislerinde ihracat ritmi",
                metin:
                    "Havzanın ihracatçı paketleme tesislerinde (incir, kestane, zeytin) sezon içi sevkiyat ritmi yoğundur ve soğuk zincir alanlarındaki işler yükleme saatlerinin dışına, blok çalışmayla planlanır — kapı disiplini, akü soğuk katsayısı ve düşük doluluk anı üçlüsü buradaki standarttır. Müşteri denetimleri (BRC, zincir marketler) sezon öncesine denk geldiği için hazırlık işleri denetim ve kampanya öncesinin kesişiminde tek konaklamalı pakete toplanır.",
            },
            {
                baslik: "Otoyol ekseninde mevsimsel kapasite esnekliği",
                metin:
                    "İzmir-Aydın otoyolu ve Torbalı-Tire tur düzenimiz, havzanın mevsimsel talep dalgalarına esneklik sağlar: yoğun dönemde ek makine aynı eksenden takviye edilir, sakin dönemde kapasite İzmir tarafına döner. Teslimat standart 1-2 iş günüdür; kampanya öncesi yoğun haftalarda erken rezervasyon şarttır. Kırsal tesislere (dağınık zeytinyağı işletmeleri) güzergâh kontrolü önceden yapılır; arıza-ikame desteği otoyol üzerinden aynı gün ulaşır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydın havzasında mevsim-iş takvimi",
                paragraflar: [
                    "Havzadaki ana sektörlerin dokunulmaz dönemleri ve doğru iş pencereleri aşağıdadır. Mevsim-senkron planın temeli bu tablodur; tesisin kendi takvimi keşifte üzerine işlenir.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Dokunulmaz dönem", "Doğru iş penceresi", "Model"],
                    satirlar: [
                        ["Zeytinyağı", "Kasım – Ocak (kampanya)", "Yaz ayları", "Kampanya öncesi konaklama"],
                        ["İncir / kuru meyve", "Ağustos – Eylül", "İlkbahar", "Denetim + hazırlık tek paket"],
                        ["Süt işleme", "Günlük proses saatleri", "CIP blokları, gece", "Pencere-senkron konaklama"],
                        ["Jeotermal", "— (7/24)", "Ekipman bakım pencereleri", "İzin takvimiyle eşzamanlı"],
                        ["Paketleme / soğuk zincir", "Sevkiyat saatleri", "Yükleme dışı bloklar", "Blok çalışma"],
                    ],
                },
            },
            {
                baslik: "Kampanya öncesi tek paket: hazırlık + denetim + soğuk alan",
                paragraflar: [
                    "Havza tesislerinin üç ihtiyacı aynı döneme denk gelir: kampanya hazırlığı (tesis genel bakımı), müşteri denetimi hazırlığı (hijyen ve görünüm işleri) ve soğuk alan bakımı (evaporatör, oda tavanları). Bu üçünü ayrı kiralamalarla yapmak hem pahalı hem takvim açısından risklidir; tek konaklamalı pakette makine bir kez gelir, üç liste pencere pencere biter ve tesis sezona tam hazır girer. Paket, kampanya başlangıcından geriye doğru planlanır — son iş, kampanyadan en az bir hafta önce kapanır.",
                    "Kampanya içi acil protokol de pakete dahil kurulur: hangi işler vardiya arasında yapılabilir, bariyer ve izin düzeni kimde, makine hangi süreyle ulaşır. Protokollü tesiste kampanya ortası sürpriz, plansız kriz değil işleyen prosedürdür.",
                ],
            },
            {
                baslik: "Çevre ilden hizmetin havzadaki işleyişi",
                paragraflar: [
                    "İzmir merkezli filo için Aydın havzası, otoyol sayesinde günlük operasyon alanıdır: teslimat 1-2 iş günü, Torbalı-Tire turlarıyla birleşen sevkiyatlarda nakliye paylaşımı, arıza-ikame desteği aynı gün. Konaklamalı modellerde mesafenin operasyonel etkisi zaten sıfırlanır — makine sahada, bakım yerinde, destek otoyol üzerinden.",
                    "Havzaya özgü iki hazırlık kalemi vardır: jeotermal sahaların izin süreçleri (talep ile birlikte başlatılır) ve kırsal tesislerin güzergâh kontrolü (konum paylaşımı yeterli — köprü tonajı, dar geçit ve son kilometre değerlendirmesi bizden). Her iki süreç de ilk kiralamada kurulur ve sonrasında tekrarlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Zeytinyağı tesisimiz kasımda kampanyaya giriyor; işleri ne zaman yapmalıyız?",
                cevap:
                    "Yaz aylarında — kampanya öncesi son ayda konaklamalı paketle: makine tesise girer, tavan-aydınlatma-havalandırma-soğuk alan listesi sırayla biter ve kampanyaya listesi kapanmış girersiniz. Kasım-ocak arasında planlı iş sokmuyoruz; kampanya içi zorunlu işler için pakete dahil acil protokol kurulur (vardiya arası pencere, hazır düzen, saatli ulaşım). Takviminiz netleştiğinde geriye doğru planlıyoruz — son iş kampanyadan en az bir hafta önce kapanır.",
            },
            {
                soru: "Jeotermal santralimiz hiç durmuyor; bakım işleri nasıl planlanır?",
                cevap:
                    "Ekipman redundansı üzerinden: yedekli gruplardan biri bakıma alındığında platform işi o ekipmanın penceresine eşzamanlanır — santral üretimi sürer. Süreci belirleyen çoğunlukla teknik iş değil izin takvimi (H2S ölçümü, saha izni, refakat) olduğu için talebi izin süreciyle birlikte açıyoruz. Kapalı binalarda akülü, açık sahada dizel arazi tipi kullanılır; sıcak hat mesafeleri plana işlenir ve evrak setimiz santral sistemlerine hazır formatta girer.",
            },
            {
                soru: "İncir sezonu bitti, denetimimiz baharda; işleri nasıl sıralamalıyız?",
                cevap:
                    "Tek pakette, denetimden geriye doğru: sezon çıkışı yıpranma onarımları önce, hijyen-görünüm işleri (tavan temizliği, aydınlatma, sinek-kuş önleme) denetime yakın, soğuk alan bakımı düşük doluluk dönemine denk gelecek şekilde. Konaklamalı planla makine bir kez gelir ve üç grup iş pencere pencere biter. Denetim kayıtlarına girecek makine evrakları dosya hâlinde teslim edilir — bahar denetimine hem tesis hem dosya hazır girersiniz.",
            },
            {
                soru: "Soğuk depomuz sezonda sürekli dolu; evaporatör bakımı nasıl yapılır?",
                cevap:
                    "Doluluk döngüsünün en düşük anında, blok çalışmayla: sevkiyat sonrası-yeni ürün öncesi boşluklar keşifte haritalanır, iş o bloklara bölünür, kapı disiplini korunur ve soğuk zincir bozulmaz. Akü düşük sıcaklık katsayısıyla planlanır. Kalıcı önerimiz bakımı sezon dışına takvimlemektir — yılda iki planlı tur, sezon içi arıza riskini pratikte sıfırlar; sezon içi zorunlu müdahale kalırsa da blok modeliyle çözülür.",
            },
            {
                soru: "Havzada birden fazla tesisimiz var (sıkım + paketleme); ortak plan olur mu?",
                cevap:
                    "Olur ve tam havza modelidir: iki tesisin dokunulmaz dönemleri farklıysa (sıkım kışın, paketleme yazın yoğun) aynı makine yılın farklı dönemlerinde iki tesisi dolaşır — yıllık çerçeve anlaşmayla takvim bir kez kurulur, her dönem planlı sevkiyatla işler. Dönemler çakışıyorsa konaklama sırası önceliğe göre belirlenir ve gerekirse ikinci makine takviye edilir. İki tesisin listesini keşifte birleştirip yıllık tek takvim çıkarıyoruz.",
            },
            {
                soru: "Kırsaldaki sıkım tesisimize İzmir'den makine gelir mi?",
                cevap:
                    "Gelir — güzergâh kontrolü önceden yapılarak: konumunuzu paylaşmanız yeterli, köprü tonajı, dar geçit ve son kilometre değerlendirmesini biz yapıyoruz. Akülü modeller standart araçla çoğu köy yoluna ulaşır; gerekirse son kilometre için tesis desteği (traktör-çekici) planlanır — sürpriz sahada değil planda çözülür. Otoyol ekseni sayesinde havza teslimatı 1-2 iş günüdür; kampanya öncesi yoğun haftalar için erken rezervasyon öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Aydın havzasının ürün takvimi (zeytin, incir, süt) ve jeotermal 7/24 rejimi kamuya açık bilgidir; mevsim-senkron plan ve paket modelleri firma pratiğidir.",
    },
};
