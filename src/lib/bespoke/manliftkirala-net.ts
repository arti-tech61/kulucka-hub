// ═══════════════════════════════════════════════════════════════════════════
// manliftkirala.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Ankara Sincan-OSTİM hattında ATÖLYE VE FABRİKA BAKIMI için
// manlift kiralama.
// Açı: ATÖLYE ÖLÇEĞİNDE BAKIM RUTİNİ — küçük-orta işletmenin yıllık bakım
// takvimi, ertelemenin faturası, kendi yapılan iş ile kiralama gerektiren
// işin sınırı, periyodik kontrol çizelgesi.
//
// ⚠️ Ankara'da dört kardeş domain var ve aynı bölge slug'ları onlarda da
// yazılı: ankaraeklemliplatform.com (dar alan/eklemli),
// ankara-platform.com (makine seçim rehberliği), ankaraplatform.net
// (egzozsuz iç mekân), ankaramanlift.net (depo-lojistik/açık saha).
// Bu dosyanın merceği İŞ RUTİNİ'dir: makine seçimi, erişim geometrisi,
// emisyon ve depo operasyonu konuları burada ANA KONU DEĞİLDİR.
// Cümle/tablo/SSS tekrarı YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi; tesis adı/rakam yok.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALA_NET: Record<string, BespokeIcerik> = {
    "bolge:sincan": {
        h1: "Sincan'da Atölye Bakım Takvimi İçin Manlift Kiralama",
        giris:
            "Sincan'daki bir atölye ya da orta ölçekli imalathane, yılın büyük bölümünde üretimin ritmiyle yaşar ve bakım işleri o ritmin arasına sıkışan bir kalabalık olarak birikir: yanan armatür, tozlanmış aspiratör kanadı, boyası dökülen çelik kolon, kilitlenen çatı penceresi. Bu birikim tek tek bakıldığında küçüktür; toplandığında ise yılın bir haftasını yiyen, üstelik hep en kötü zamanda patlayan bir yüktür. Bakım rutini kurmak, bu kalabalığı takvime bağlamaktan ibarettir ve yükseğe erişim, rutinin belkemiğidir çünkü atölyede bakım isteyen şeylerin çoğu tavanla zemin arasındaki o dört-yedi metrelik kuşakta durur. Bu sayfa, Sincan hattındaki işletmelere makine kataloğu değil takvim öneriyor: yılda hangi kalem hangi mevsimde bakılır, ne kadar sürer, hangisi tek makine gününde toplanır ve hangi kalemin ertelenmesi gerçekten para kaybettirir. Kiralama, bu takvimin bir satırıdır — takvim kurulduğunda kiralama da yılda bir-iki planlı güne iner ve acil çağrıların yerini planlı işler alır.",
        maddeler: [
            {
                baslik: "Yılda kaç gün: rutinin gerçek büyüklüğü",
                metin:
                    "Orta ölçekli bir atölyenin yüksek işleri, dağınık göründüğü hâlde toplamda küçük bir zaman kutusuna sığar: aydınlatma hattının gözden geçirilmesi, aspiratör ve emiş ağızlarının temizliği, vinç kirişi ve ray hattının görsel kontrolü, çatı penceresi-ışıklık düzeni, pano üstü ve kablo tavası hattı. Bu kalemler tek tek çağrıldığında her biri ayrı bir yarım gün ve ayrı bir nakliye demektir; tek takvimde toplandığında çoğu atölyede yılda iki planlı güne iner. Rutin kurmanın ilk faydası burada görünür — aynı işler, üçte bir masrafla ve üretimi bir kez durdurarak biter.",
            },
            {
                baslik: "Mevsim mantığı: hangi iş hangi aya yazılır",
                metin:
                    "Kalemlerin takvimdeki yeri keyfî değildir. Çatı ve su hattıyla ilgili ne varsa sonbaharın ilk yarısına yazılır; kış geldikten sonra yapılan aynı iş hem daha yavaş hem daha risklidir. Aydınlatma yenileme, günlerin kısaldığı döneme girmeden yapılır — karanlık atölyede hata payı ve iş kazası eğilimi artar. Havalandırma ve emiş temizliği ise üretimin en durgun haftasına, çoğu Sincan işletmesinde yıllık izin dönemine denk getirilir. Vinç ve kaldırma ekipmanı kontrolleri kendi yasal periyodunu takip eder ve takvimin sabit çıpasıdır; diğer kalemler bu çıpanın etrafına dizilir.",
            },
            {
                baslik: "Erteleme faturası: küçük işin büyüyen maliyeti",
                metin:
                    "Bakımın ertelenmesi bedava değildir, sadece faturası gecikir. Temizlenmeyen emiş kanalı motoru zorlar ve tüketimi artırır; tıkanan çatı deresi tek bir sağanakta tavan altı ıslanmasına döner; gözden geçirilmemiş armatürlerin yarısı yanınca çalışan gözle telafi etmeye çalışır ve hata oranı yükselir. En pahalısı ise zamanlamadır: planlı iş üretimin durgun saatinde yapılır, arıza ise her zaman sipariş teslimine üç gün kala çıkar ve o gün makine bulmak hem zordur hem pahalıdır. Erteleme, işi ucuzlatmaz; sadece işi seçme hakkınızı elinizden alır.",
            },
            {
                baslik: "Merdivenin bittiği yer: kendi yapacağınız iş nerede biter",
                metin:
                    "Her atölyenin kendi ustası vardır ve pek çok iş gerçekten kendi imkânıyla yapılır. Sınır, üç noktada nettir: bir, işin süresi — sepette on dakikalık bakış merdivenle de olur ama iki saatlik sökme-takma işi olmaz; iki, elin serbest olması gerekliliği — iki elini kullanması gereken usta merdivende güvenli değildir; üç, yatay hareket — hat boyunca ilerleyen işte merdiven her metrede yer değiştirir ve asıl risk o tekrar kurulumlardadır. Bu üç ölçütten biri bile karşınıza çıkıyorsa iş, platform işidir. Rutinin faydası tam da bu ayrımı önceden yapmaktır: yıl planında hangi kalemin ekipmanla, hangisinin kendi imkânınızla biteceği baştan yazılıdır.",
            },
            {
                baslik: "Bakım defteri: rutini kalıcı kılan tek şey",
                metin:
                    "Rutin, hafızada tutulduğu sürece bir sonraki yoğun sezonda kaybolur. Kalıcı olması için basit bir defter yeter: hangi kalem, hangi tarihte, hangi bulguyla kapandı ve bir sonraki kontrol ne zaman. Bu kayıt üç işe yarar — ertesi yılın planı sıfırdan değil geçen yılın üzerinden kurulur, tekrarlayan arızalar (aynı bölgede sürekli yanan armatür, hep aynı noktada biriken su) desen olarak görünür ve müşteri ya da sigorta tarafından bir kayıt istendiğinde elde hazır belge olur. Çalıştığımız işletmelerde iş sonunda bıraktığımız kalem-bulgu notu, bu defterin ilk sayfası olacak biçimde düzenlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sincan atölyelerinde yıllık bakım çizelgesi",
                paragraflar: [
                    "Aşağıdaki çizelge, orta ölçekli bir imalathanenin yüksek kalemlerini dönemlere dağıtır. Sıklıklar tipik kullanım içindir; üç vardiya çalışan veya tozlu üretim yapan atölyelerde aralıklar kısalır.",
                ],
                tablo: {
                    basliklar: ["Bakım kalemi", "Tipik sıklık", "Uygun dönem", "Tek günde toplanır mı"],
                    satirlar: [
                        ["Aydınlatma hattı gözden geçirme", "Yılda 1", "Yaz sonu", "Evet"],
                        ["Emiş / havalandırma ağzı temizliği", "Yılda 1 – 2", "Durgun hafta", "Evet"],
                        ["Vinç kirişi ve ray görsel kontrolü", "Periyodik mevzuata göre", "Sabit çıpa", "Kısmen"],
                        ["Çatı deresi ve iniş hattı", "Yılda 1", "Sonbahar başı", "Evet"],
                        ["Pano üstü ve kablo tavası", "Yılda 1", "Aydınlatmayla birlikte", "Evet"],
                    ],
                },
            },
            {
                baslik: "İki planlı gün modeli: rutini ekonomik kılan kurgu",
                paragraflar: [
                    "Takvimin pratik hâli çoğu Sincan atölyesinde iki güne oturur. Birinci gün yaz sonuna yazılır ve iç kalemleri toplar: aydınlatma, pano üstü, kablo tavası, emiş ağızları, tavan altı boya-pas noktalarının işaretlenmesi. İkinci gün sonbahar başındadır ve dış kabuğa bakar: çatı deresi, iniş boruları, saçak altı, ışıklık kapakları. Bu iki günün ortak özelliği, ikisinin de üretim programına göre seçilmiş olmasıdır — rutinin amacı üretimi durdurmak değil, duruşu yılda iki kez ve önceden bilinen saatlere hapsetmektir.",
                    "İki gün modelinin ikinci ekonomisi ölçektedir: aynı sanayi adasındaki komşu işletmelerin planlı günleri aynı haftaya denk getirildiğinde nakliye kalemi işletme başına belirgin düşer. Bu düzeni işletmeler kendi aralarında kurabilir; talep sırasında 'komşularla aynı haftaya bakılabilir' notunu iletmeniz yeterlidir.",
                ],
            },
            {
                baslik: "Planlı işle acil iş arasındaki gerçek fark",
                paragraflar: [
                    "Planlı iş, işin niteliğini değiştirir. Planlı günde iş sırası önceden bellidir, üretim o saatte durdurulacak biçimde ayarlanmıştır, gerekli malzeme (armatür, conta, boya) önceden alınmıştır ve ekip beklemeden çalışır. Acil işte bunların hiçbiri yoktur: makine hazır olsa bile malzeme yoktur, üretim durdurulamaz, iş yarım kalır ve ikinci bir gün gerekir. Aynı kalem, planlı yapıldığında bir saatken acil yapıldığında yarım güne yayılabilir.",
                    "Bu fark, rutinin asıl gerekçesidir. Acil çağrılara elbette cevap veriyoruz ve Sincan hattı sevkiyat açısından bize yakındır; ama işletmeye önerimiz nettir — acili istisna hâline getirin. Yılda iki planlı gün kuran bir atölyede acil çağrı sayısının nasıl düştüğünü, ikinci yıldan itibaren kendi kayıtlarınızda görürsünüz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizde şu an bir bakım planı yok; nereden başlamalıyız?",
                cevap:
                    "Envanterden — plandan değil. Bir tur atıp yüksekte duran her şeyi yazın: armatür sayısı ve konumu, emiş ağızları, kablo tavası güzergâhı, çatı deresi hattı, ışıklıklar, vinç varsa ray hattı. Bu liste çoğu atölyede yarım saatte çıkar ve genellikle sanılandan kısadır. Ardından her kaleme bir sıklık ve bir dönem yazın; ortaya çıkan tablo sizin ilk yıl planınızdır. İlk yılın planı kusurlu olur ve olması normaldir — ikinci yıl, geçen yılın bulgularıyla kendiliğinden düzelir. İsterseniz ilk envanter turunu birlikte yapar, kalemleri dönemlere dağıtmanıza yardımcı oluruz.",
            },
            {
                soru: "Yılda iki gün gerçekten yeter mi, yoksa daha sık mı gerekir?",
                cevap:
                    "Ortalama bir imalathane için iki gün çoğu kalemi karşılar; ama üç değişken bunu artırır. Toz: ahşap, taşlama veya döküm yoğun üretimde emiş ve armatür temizliği yılda iki-üçe çıkar. Vardiya: üç vardiya çalışan tesiste ekipman aynı takvim yılında daha çok saat çalışır, aşınma kalemleri sıklaşır. Yapı yaşı: eski çatı ve dere hatları yılda bir turu kaldırmaz, sezon başı ve sezon sonu iki tur ister. Kendi tesisinizin hangi bandda olduğunu ilk yılın bulguları söyler — plan, kayıtla birlikte kendini ayarlar.",
            },
            {
                soru: "Kendi ustamız merdivenle çıkıyor; neden ekipman kiralayalım?",
                cevap:
                    "Çünkü merdiven bazı işlerde uygun, bazılarında değildir ve ayrım nettir: iş on dakikayı aşıyorsa, usta iki elini birden kullanacaksa veya hat boyunca ilerleyip merdiveni defalarca taşıması gerekecekse merdiven o iş için yanlış araçtır. Yüksekten düşmelerin büyük bölümü büyük yüksekliklerde değil, tam da bu 'kısa sürer' sanılan işlerde ve tekrarlanan kurulum anlarında olur. Ekonomik tarafı da vardır: dört saatlik merdivenli uğraş, platformda çoğu zaman bir saatte biter — kira bedeliyle kaybedilen üretim saatini yan yana koyduğunuzda hesap çoğu atölyede ekipman lehine çıkar.",
            },
            {
                soru: "Bakımı erteledik, şimdi birden çok iş birikti; hepsi tek seferde yapılır mı?",
                cevap:
                    "Çoğu zaman evet ve doğru yaklaşım da budur — birikmiş kalemleri tek güne toplamak, hem nakliyeyi hem üretim duruşunu tek sefere indirir. Yapılacak tek hazırlık, kalemleri önceden sıralamak ve malzemesini hazır etmektir: hangi armatür değişecek, hangi contaya ihtiyaç var, boya yapılacak mı. Malzemesi olmayan kalem o gün yarım kalır ve ikinci bir günü zorunlu kılar. Listenizi paylaşın; hangi kalemlerin tek güne sığdığını, hangisinin ayrı pencere istediğini (örneğin vinç hattında çalışma) birlikte ayıralım.",
            },
            {
                soru: "Üretimi hiç durduramıyoruz; bakım günü nasıl kurulur?",
                cevap:
                    "Tam duruş çoğu kalemde gerekmez; gereken şey bölge boşaltmaktır. Atölye, çalışma alanının altındaki birkaç metrekare boşaltılacak biçimde bölümlere ayrılır ve iş bölge bölge ilerler — bir bölgede çalışılırken diğerlerinde üretim sürer. Yalnızca belirli kalemler gerçek duruş ister: vinç hattıyla kesişen işler, ana pano üzerinde çalışma, hattın tam üzerindeki noktalar. Bu kalemler ayrılır ve vardiya değişimi, yemek arası veya yıllık izin dönemi gibi doğal boşluklara yazılır. Yerleşiminizi ve vardiya düzeninizi paylaşırsanız, planı duruşsuz kurulabilecek ve duruş isteyen kalemler olarak ikiye ayırırız.",
            },
            {
                soru: "İş bittikten sonra elimizde ne kalıyor?",
                cevap:
                    "Kalem kalem kapanış notu: hangi noktada ne yapıldı, hangi bulgu görüldü ama o gün kapsam dışıydı, hangisi bir sonraki dönemde tekrar bakılmalı. Bu not, bakım defterinizin girdisidir ve ikinci yıldan itibaren asıl değerini gösterir — tekrarlayan sorunlar desen hâline gelir, plan kendi kendini keskinleştirir ve müşteri denetimi ya da sigorta tarafından kayıt istendiğinde elinizde hazır bir geçmiş olur. Kayıt tutmayan işletmede her yıl aynı sürprizler yaşanır; kayıt tutan işletmede üçüncü yılda bakım, sürpriz olmaktan çıkar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sincan hattının imalat-atölye dokusu kamuya açık bilgidir; yıllık çizelge, iki planlı gün modeli ve bakım defteri düzeni firma pratiğidir. Vinç ve kaldırma ekipmanı kontrol periyotları ilgili mevzuata tabidir.",
    },

    "bolge:ostim": {
        h1: "OSTİM'de Periyodik Kontrol Takvimi ve Manlift Kiralama",
        giris:
            "OSTİM'de bir işletmenin yüksek işleri, yılın belirli anlarında toplu hâlde karşısına çıkar: bir müşteri denetimi öncesi, bir sigorta yenilemesinde, bir de gerçekten bir şey bozulduğunda. Bu üçünün ortak yanı, hepsinin acele ve hazırlıksız yaşanmasıdır. Oysa aynı işler bir kontrol çizelgesine bağlandığında ne aceleye ne hazırlıksızlığa yer kalır — üstelik kontrol, bakımdan farklı ve ondan ucuz bir iştir: bakım bir şeyi onarır, kontrol ise onarılması gerekenleri erkenden görünür kılar. OSTİM'in yoğun işletme dokusunda kontrol turu, birçok atölyenin hiç denemediği ama en çok işine yarayan alışkanlıktır; çünkü küçük ölçekte en pahalı şey, beklenmedik duruştur. Bu sayfa, OSTİM ölçeğine uygun bir periyodik kontrol düzeninin nasıl kurulacağını anlatıyor: neye bakılır, ne sıklıkla bakılır, bulgular nasıl sınıflanır ve kontrol turu ile onarım günü neden birbirinden ayrılmalıdır.",
        maddeler: [
            {
                baslik: "Kontrol turu ile onarım gününü ayırmak",
                metin:
                    "İki iş sık sık karıştırılır ve karıştırıldığında ikisi de kötü yapılır. Kontrol turu kısadır, malzeme istemez ve amacı yalnızca görmektir: hangi armatür sönük, hangi bağlantı gevşemiş, hangi yüzeyde pas başlamış, hangi kanal tıkanmaya yakın. Onarım günü ise bulguların malzemesiyle birlikte kapatıldığı gündür. İkisini aynı güne sıkıştırmaya çalışan işletme, keşfettiği eksiğin malzemesi olmadığı için işi yarım bırakır. Doğru sıra basittir: önce kısa bir kontrol turu, ardından bulgulara göre malzeme temini, sonra onarım günü. OSTİM ölçeğinde bu iki adım arasındaki mesafe genellikle bir-iki haftadır.",
            },
            {
                baslik: "Kontrol turunda neye bakılır",
                metin:
                    "Küçük ve orta atölyede yüksek kontrol listesi kısadır ve aynı kalır: aydınlatma armatürlerinin çalışma durumu ve askı bağlantıları; kablo tavası ve askı çubuklarının gevşeklik-korozyon durumu; emiş ve havalandırma ağızlarında birikinti seviyesi; varsa vinç kirişi, ray ve tampon bölgesinin görsel durumu; çatı altı su izleri ve ışıklıkların contası; tavan altı çelik elemanlarda pas başlangıcı. Bu liste bir turda gezilir ve her kalem için tek bir soru sorulur: bu, bir sonraki plana kadar dayanır mı. Cevap 'hayır' ise kalem onarım gününe yazılır; 'emin değilim' ise ara kontrole alınır.",
            },
            {
                baslik: "Bulguları üçe ayırmak: şimdi, plana, izlemeye",
                metin:
                    "Kontrol turunun çıktısı bir liste değil, sınıflandırılmış bir listedir. 'Şimdi' sınıfı, güvenlik veya üretim riski taşıyan ve beklemeyecek kalemlerdir — gevşemiş bir askı, sarkmış bir tava, kırık bir ışıklık camı. 'Plana' sınıfı, bir sonraki onarım gününe rahatlıkla yazılabilecek olanlardır. 'İzlemeye' sınıfı ise henüz iş olmayan ama gidişatı takip edilecek noktalardır — başlayan pas, hafif renk değişimi, yavaş biriken toz. Bu üçlü ayrım OSTİM işletmesinin bütçesini korur: her bulgu iş değildir ve her bulguyu iş sayan yaklaşım, bakımı gereğinden pahalı hâle getirir.",
            },
            {
                baslik: "Denetim ve yenileme dönemlerini takvime çıpalamak",
                metin:
                    "Pek çok atölyede yılın sabit tarihleri vardır: müşteri denetimi, sigorta yenileme dönemi, iş güvenliği uzmanının periyodik ziyareti, kaldırma ekipmanı kontrolleri. Kontrol turunu bu tarihlerin altı-sekiz hafta öncesine yazmak, iki iş görür: bulguların kapatılması için zaman kalır ve denetime girerken elde güncel bir kayıt bulunur. Tersi yaygın ve yorucudur — denetime bir hafta kala fark edilen eksikler, hem aceleyle hem pahalıya kapatılır. Takvimi bu çıpalara göre kurmak, OSTİM işletmesinin yıl içinde en az stres yaşayan planlama biçimidir.",
            },
            {
                baslik: "Kısa turun ekonomisi: yarım gün, tek makine",
                metin:
                    "Kontrol turunun cazip yanı kısalığıdır. Malzeme sökülmediği, parça değişmediği için tur, ortalama bir OSTİM atölyesinde yarım günü aşmaz ve tek makineyle biter. Bu, tur maliyetini yıllık bütçe içinde küçük bir kalem hâline getirir — ve bulunan tek ciddi eksik bile bu kalemi fazlasıyla karşılar. Aynı sokakta veya aynı iş hanında birkaç işletmenin turu aynı güne dizildiğinde nakliye payı daha da düşer; OSTİM'in yoğun dokusu, bu tür ortak günler için en elverişli bölgedir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSTİM ölçeğinde kontrol çizelgesi",
                paragraflar: [
                    "Aşağıdaki çizelge, küçük-orta atölye için tipik kontrol kalemlerini ve turda sorulan asıl soruyu gösterir. Bulgular sonrasında şimdi / plana / izlemeye biçiminde sınıflanır.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Kontrol sıklığı", "Turda bakılan", "Bulgu tipik sınıfı"],
                    satirlar: [
                        ["Armatür ve askıları", "Yılda 1", "Sönük adet, askı sağlamlığı", "Plana"],
                        ["Kablo tavası askıları", "Yılda 1", "Gevşeklik, sarkma", "Şimdi / plana"],
                        ["Emiş ağzı ve kanal girişi", "6 – 12 ay", "Birikinti seviyesi", "Plana"],
                        ["Çatı altı su izi", "Sonbahar öncesi", "Yeni leke, akış izi", "Şimdi"],
                        ["Tavan altı çelik yüzey", "Yılda 1", "Pas başlangıcı", "İzlemeye"],
                    ],
                },
            },
            {
                baslik: "Kontrol turunu verimli geçirmenin yolu",
                paragraflar: [
                    "Turun verimi, işletmenin turdan önce yaptığı iki hazırlığa bağlıdır. Birincisi erişimdir: kontrol edilecek noktaların altındaki alanların o saat için boşaltılabilir olması, turu yarı yarıya hızlandırır — yarım gün planlanan tur, sürekli malzeme kaydırmakla geçerse güne yayılır. İkincisi bilgidir: geçen dönemden hatırladığınız şüpheli noktaları önceden söylemek, turun oraya öncelik vermesini sağlar. 'Şu köşede geçen kış su damlamıştı' cümlesi, turun en değerli girdisidir.",
                    "Tur sırasında işletmeden bir kişinin eşlik etmesi de belirgin fark yaratır. Bulgular yerinde konuşulur, hangisinin sizin için kritik olduğu anında netleşir ve sınıflandırma masa başında değil sahada biter. Bu, onarım gününün kapsamını da o gün belirlemiş olur.",
                ],
            },
            {
                baslik: "Kontrolün küçük işletmedeki asıl getirisi",
                paragraflar: [
                    "Büyük tesiste bakım bir bölümün işidir; OSTİM ölçeğinde ise aynı iş, zaten üretimle boğuşan bir-iki kişinin omzundadır ve bu yüzden hep ertelenir. Periyodik kontrolün buradaki asıl getirisi maliyet değil zihinsel yüktür: neyin ne durumda olduğunu bilen işletme, her gürültüde 'acaba' diye düşünmez ve arıza çıktığında da nereye bakacağını bilir. Bu netlik, küçük işletmenin en kıt kaynağı olan dikkati serbest bırakır.",
                    "İkinci getiri pazarlıktadır. Bulgu listesi elinde olan işletme, onarım için teklif alırken ne istediğini kalem kalem tarif eder ve karşılaştırılabilir teklifler toplar. Listesi olmayan işletme ise 'bir bakın, ne gerekiyorsa yapın' demek zorunda kalır — bu cümle, her sektörde en pahalı cümledir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kontrol turu ile bakım arasındaki fark tam olarak nedir?",
                cevap:
                    "Kontrol görür, bakım onarır. Tur sırasında hiçbir parça sökülmez ve değiştirilmez; amaç, yüksekte duran her kalemin durumunu yakından görmek ve bir sonraki plana kadar dayanıp dayanmayacağını değerlendirmektir. Bakım ya da onarım günü ise bu turun çıktısına göre kurulur ve malzemesi önceden temin edilmiş kalemleri kapatır. İkisini ayırmanın nedeni pratiktir: turda keşfedilen bir eksiğin malzemesi elde olmadığından, birleştirilmiş girişimler neredeyse her zaman yarım kalır ve ikinci güne mal olur.",
            },
            {
                soru: "Turu yaptırdık ama listedeki her şeyi yaptıracak bütçemiz yok; ne yapmalıyız?",
                cevap:
                    "Zaten her şeyi yaptırmanız beklenmiyor — sınıflandırmanın amacı tam olarak budur. 'Şimdi' sınıfındaki kalemler güvenlik veya üretim riski taşıdığı için ertelenmez; bunlar genelde listenin küçük bir bölümüdür. 'Plana' sınıfı bir sonraki döneme, hatta gerekirse iki döneme yayılabilir. 'İzlemeye' sınıfı ise bu yıl hiç iş çıkarmayabilir. Bütçenizi söylerseniz listeyi bu ayrımla birlikte sıralar, hangi kalemin bekletilmesinin gerçek riski olduğunu açıkça belirtiriz — 'hepsi acil' demek kolaydır ama doğru değildir ve o cümleyi kurmayız.",
            },
            {
                soru: "Müşteri denetimimize bir ay var; şimdi tur yaptırmanın anlamı var mı?",
                cevap:
                    "Var, ama beklentiyi doğru kurmak gerekir: bir ay, bulguları görmeye ve kritik olanları kapatmaya yeter; kapsamlı işlere (çatı bölümü yenileme, geniş çaplı boya) yetmez. Bu durumda tur, denetimde göze çarpacak ve hızlı kapatılabilecek kalemlere odaklanır; kalan bulgular kayda geçer ve denetimde 'tespit edilmiş, planlanmış' olarak gösterilebilir — çoğu denetimde bu, tespit edilmemiş bir eksikten daha iyi bir tablodur. Bir sonraki yıl için doğru zamanlama ise denetimden altı-sekiz hafta öncesidir.",
            },
            {
                soru: "Turu kendi ustamız yapamaz mı?",
                cevap:
                    "Yapabilir ve bir kısmını zaten yapıyordur; sınır, erişimde ve bakışta. Erişim tarafında, tavan hattı boyunca ilerleyen bir kontrol merdivenle saatler alır ve kalemlerin bir bölümü yakından görülemediği için 'uzaktan iyi görünüyor' notuyla geçilir — kontrolün asıl işi ise tam da yakından bakmaktır. Bakış tarafında, dışarıdan gelen gözün alışkanlık körlüğü yoktur; her gün gördüğünüz bir sarkma, size normal görünür. Pratik öneri karma modeldir: rutin gözlemi ustanız sürdürsün, yılda bir kez yakın erişimli tam tur yapılsın.",
            },
            {
                soru: "Aynı iş hanında birkaç işletmeyiz; ortak tur mümkün mü?",
                cevap:
                    "Mümkün ve OSTİM dokusunda en mantıklı kurgu budur. Kontrol turu kısa olduğu için tek makine bir günde birkaç işletmeyi gezebilir; nakliye ve kurulum payı katılımcılara bölünür ve işletme başına maliyet belirgin düşer. Tek koşul koordinasyondur: hangi işletmenin hangi saatte hazır olacağı önceden belirlenmeli, alanlar o saatte boşaltılmış olmalıdır. Bina veya site yönetiminiz varsa turu dönemsel bir düzene bağlamak daha da kolaydır — birkaç işletmenin adını ve kat bilgilerini iletin, sıralamayı biz kuralım.",
            },
            {
                soru: "Bulgu listesini başka firmalara teklif için gösterebilir miyiz?",
                cevap:
                    "Elbette; liste sizindir ve bu şekilde kullanılması onu daha değerli kılar. Kontrol turunun çıktısını, hangi kalemin ne olduğu ve neden o sınıfa girdiği anlaşılacak biçimde yazıyoruz — böylece onarım için teklif topladığınızda karşınızdaki firmalar aynı kapsama fiyat verir ve teklifler gerçekten karşılaştırılabilir olur. Onarımı bizden almak zorunda değilsiniz. Bunu bir kayıp değil, işin doğru tanımlanmış olmasının doğal sonucu sayıyoruz; kapsamı belirsiz iş, hem müşteri hem yüklenici için kötü iştir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. OSTİM'in küçük-orta işletme yoğunluğu kamuya açık bilgidir; kontrol turu / onarım günü ayrımı, üçlü bulgu sınıflaması ve ortak tur düzeni firma pratiğidir.",
    },

    "bolge:ostim-osb": {
        h1: "OSTİM OSB'de Planlı Bakım ve Manlift Kiralama",
        giris:
            "OSTİM OSB'nin işletmelerinde bakım kararı çoğu zaman bir muhasebe kararı gibi verilir: bugün harcamak mı, sonraya bırakmak mı. Bu soru masada makul görünür ama eksik sorulmuştur, çünkü 'sonraya bırakmak' bedelsiz bir seçenek değildir — sadece bedeli görünmez ve gecikmeli olan bir seçenektir. Bir emiş kanalının temizlenmemesi enerji tüketimine, bir aydınlatma hattının bakımsızlığı iş kalitesine, bir su sızıntısının ertelenmesi ise doğrudan üretim duruşuna yazılır ve bunların hiçbiri bakım faturasında görünmez. Bu sayfa, OSTİM OSB ölçeğindeki işletmeler için erteleme maliyetini görünür kılmayı deniyor: hangi kalemin ertelenmesi gerçekten para kaybettirir, hangisi sabırla bekleyebilir, arızaya bağlı çalışma ile planlı çalışma arasındaki fark rakama nasıl dökülür ve yüksek erişim gerektiren işlerde bu hesap neden daha keskin işler. Amaç bakımı büyütmek değil, doğru kalemi doğru zamanda yapmaktır.",
        maddeler: [
            {
                baslik: "Erteleme neden ucuz görünür",
                metin:
                    "Ertelemenin cazibesi muhasebe biçimindendir: bakım harcaması tek kalemde ve bugün görünür; ertelemenin maliyeti ise enerji faturasına, fire oranına, işçilik saatine ve duruş günlerine dağılmış hâlde, aylara yayılarak görünür. Dağılmış maliyet, tek kalemli maliyetten psikolojik olarak daha küçük hissedilir — oysa toplamı çoğu zaman daha büyüktür. Bu yanılsamayı kırmanın yolu, erteleme kararını da bir rakamla yazmaktır: bu kalemi altı ay ertelersem ne olur, ne kadar tutar. Cevabı bilinmeyen kalem, ertelenmiş değil unutulmuş kalemdir.",
            },
            {
                baslik: "Ertelenmesi pahalı olan kalemler",
                metin:
                    "Bazı kalemler beklerken kötüleşme hızını artırır ve ertelemenin faturasını katlar. Su ile ilgili her şey bu gruptadır: bir sızıntı beklerken yalıtımı, ardından yüzeyi, sonra altındaki ekipmanı etkiler. Korozyon aynı biçimde davranır — pas, başlangıç aşamasında yüzey işiyken ilerlediğinde eleman değişimine döner. Tıkanan emiş ve havalandırma da öyledir; motor sürekli zorlanır ve arıza geldiğinde temizlikten çok daha büyük bir kalem doğar. Bu üç grup, planın en önüne yazılır çünkü burada erteleme, işi büyütür.",
            },
            {
                baslik: "Beklemesi makul olan kalemler",
                metin:
                    "Her bulgunun aciliyeti yoktur ve bunu açıkça söylemek, işletmenin bütçesine saygıdır. Estetik nitelikli işler — solmuş boya, kirlenmiş yüzey, düzensiz görünen kablo düzeni — güvenlik veya işlev riski taşımadığı sürece bir sonraki planlı döneme rahatça yazılır. Yedeği bulunan sistemlerde tekil arızalar da aynı gruptadır: birkaç armatürün sönmesi, aydınlatma seviyesi hâlâ yeterliyse bekleyebilir. Kritik olan, bekleyen kalemin kayda geçmiş ve tarihi belirlenmiş olmasıdır; kayıtsız bekleyen kalem, bekleyen değil kaybolan kalemdir.",
            },
            {
                baslik: "Arıza çalışması ile planlı çalışmanın maliyet farkı",
                metin:
                    "Aynı iş, arıza anında yapıldığında birkaç kalem birden ekler. Üretim programı dışında duruş; malzemenin acele ve genellikle pahalı tedariki; ekipmanın o gün müsait olmama riski ve buna bağlı bekleme; işin aceleyle yapılmasından doğan tekrar riski. Planlı çalışmada bu kalemlerin hiçbiri yoktur: duruş önceden ayarlanmış, malzeme önceden alınmış, ekipman önceden ayrılmıştır. OSTİM OSB'de gözlemlenen desen açıktır — bakım bütçesini kısan işletmenin toplam ekipman harcaması azalmaz, sadece arıza kalemine kayar.",
            },
            {
                baslik: "Bütçeyi yıla yaymanın pratik yolu",
                metin:
                    "Erteleme çoğu zaman bir bütçe sorunudur ve çözümü de bütçededir: kalemleri yıla yaymak. Bulgu listesi çıkarıldıktan sonra kalemler önce zorunluluğa göre sıralanır, sonra iki-üç döneme dağıtılır ve her döneme yaklaşık eşit bir tutar düşecek biçimde ayarlanır. Bu, tek seferde çıkacak büyük bir harcamayı yönetilebilir parçalara böler ve en önemlisi, listenin tamamının 'sonra' rafına kalkmasını önler. Yılda iki-üç küçük planlı gün, tek seferde yapılamayan büyük bakımdan hem uygulanabilir hem etkilidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kalem bazında erteleme etkisi",
                paragraflar: [
                    "Aşağıdaki tablo, sık karşılaşılan yüksek bakım kalemlerinin ertelendiğinde nasıl davrandığını özetler. Amaç aciliyet sıralamasını görünür kılmaktır; kesin öncelik, tesisin kendi bulgularına göre belirlenir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Ertelenirse", "Büyüme hızı", "Öncelik"],
                    satirlar: [
                        ["Çatı / dere sızıntısı", "Yalıtım ve altındaki ekipmana yayılır", "Hızlı", "Yüksek"],
                        ["Yüzey korozyonu", "Yüzey işi eleman işine döner", "Orta", "Yüksek"],
                        ["Emiş kanalı tıkanması", "Motor zorlanır, tüketim artar", "Orta", "Yüksek"],
                        ["Tekil armatür arızası", "Aydınlatma seviyesi kademeli düşer", "Yavaş", "Orta"],
                        ["Boya / görsel bakım", "Estetik kayıp, işlev sürer", "Yavaş", "Düşük"],
                    ],
                },
            },
            {
                baslik: "Erteleme kararını rakama dökmek",
                paragraflar: [
                    "Bir kalemin ertelenip ertelenemeyeceğine karar vermek için karmaşık hesap gerekmez; dört soru yeterlidir. Bu kalem bozulursa üretim durur mu ve kaç saat durur. Bozulma, komşu sistemleri de etkiler mi. Şimdi yapılırsa hangi kapsamda, altı ay sonra yapılırsa hangi kapsamda olur. Arıza hâlinde malzeme ve ekipmanı ne kadar sürede bulabilirim. Bu dört sorunun cevapları yazıldığında karar çoğu zaman kendini gösterir ve tartışma, kanaatten hesaba taşınmış olur.",
                    "Bu yaklaşımın yan faydası, yönetim içi ikna sürecidir. 'Bakım gerekli' cümlesi bütçe toplantısında zayıftır; 'bu kalem arızalanırsa şu kadar saat duruş ve şu kapsamda onarım' cümlesi ise kararı hızlandırır. Bulgu listelerimizi bu soruların cevaplanabileceği ayrıntıda yazıyoruz.",
                ],
            },
            {
                baslik: "Küçük planlı günlerin birikimli etkisi",
                paragraflar: [
                    "Bakımı yılda tek büyük operasyona bağlamak, OSTİM OSB ölçeğindeki işletmeler için nadiren sürdürülebilirdir: hem bütçe tek seferde ağırdır hem üretim o hafta ciddi biçimde aksar. Bunun yerine yılda iki-üç küçük planlı gün, hem nakit akışına hem üretim programına daha kolay yerleşir. Her gün için kapsam dar ve net tutulur; yarım günlük iş, yarım günlük duruşla karşılanır.",
                    "Bu kurgunun ikinci yıldan itibaren görünen etkisi, acil çağrı sayısındaki düşüştür. Kalemler kötüleşmeden yakalandığı için hem işin kapsamı küçülür hem de yılın beklenmedik duruş sayısı azalır — bakım bütçesi aynı kalsa bile toplam ekipman harcaması aşağı iner, çünkü pahalı olan bakım değil arızadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bakım bütçemizi kıstık ama harcamalarımız azalmadı; neden?",
                cevap:
                    "Çünkü harcama yok olmaz, yer değiştirir. Planlı bakım kalemi kısıldığında aynı işler bir süre sonra arıza kalemi olarak geri döner ve arıza her zaman daha pahalıdır: program dışı duruş, acele malzeme tedariki, ekipmanın o gün müsait olmama riski ve aceleyle yapılan işin tekrar etme ihtimali. Kayıtlarınızda bunu görmek kolaydır — son iki yılın plansız duruş saatlerini ve acil çağrılarını toplayın, kısılan bakım bütçesiyle yan yana koyun. Çoğu işletmede toplam, kısıntıdan büyük çıkar. Doğru hamle bütçeyi büyütmek değil, aynı bütçeyi arızadan plana kaydırmaktır.",
            },
            {
                soru: "Hangi kalemi ertelersek gerçekten risk almış oluruz?",
                cevap:
                    "Beklerken kendini büyüten kalemleri: su ile ilgili her şey, başlamış korozyon ve tıkanmaya yaklaşmış emiş-havalandırma. Bu üç grupta erteleme, işi ucuzlatmaz — kapsamını genişletir. Bir sızıntı üç ay içinde yalıtımı, sonra yüzeyi, ardından altındaki ekipmanı ilgilendirir hâle gelir; yüzeydeki pas bekletildiğinde eleman değişimine döner. Buna karşılık estetik kalemler ve yedekli sistemlerdeki tekil arızalar bekleyebilir. Bulgu listenizi paylaşırsanız, kalemleri bu ayrımla sıralar ve hangisinin gerçekten beklemeye uygun olduğunu açıkça yazarız.",
            },
            {
                soru: "Aynı anda birçok kalem birikti; hepsini bu yıl yapmak zorunda mıyız?",
                cevap:
                    "Hayır ve zaten önerimiz de bu değildir. Doğru yaklaşım, listeyi zorunluluğa göre sıralayıp iki-üç döneme yaymaktır; böylece hem her dönemin tutarı yönetilebilir kalır hem de listenin tamamı 'sonra' rafına kalkmaz. Pratikte bu, yılda iki-üç küçük planlı gün anlamına gelir — her gün için kapsam dar tutulur, duruş yarım güne sığar. Bu kurgu, tek seferlik büyük bakımdan hem uygulanabilir hem de üretim programına daha az zarar veren bir düzendir. Listenizi öncelik sırasıyla birlikte çıkaralım.",
            },
            {
                soru: "Yönetimi ikna etmemiz gerekiyor; nasıl bir gerekçe sunmalıyız?",
                cevap:
                    "Kalem başına dört soruyu cevaplayarak: bu kalem arızalanırsa üretim kaç saat durur, komşu sistemleri etkiler mi, şimdi yapılırsa kapsam ne olur ve altı ay sonra ne olur, arıza hâlinde malzeme-ekipmanı ne kadar sürede bulabilirsiniz. Bu dört cevap yazıldığında 'bakım gerekli' gibi tartışmaya açık bir cümle yerine, karşılaştırılabilir bir tablo elde edersiniz ve karar hızlanır. Bulgu listelerimizi bu soruların cevaplanabileceği ayrıntıda hazırlıyoruz; kapsam ve tahmini süreler kalem kalem yazıldığı için doğrudan yönetim sunumuna taşınabilir.",
            },
            {
                soru: "Arıza çıktığında sizden aynı gün makine bulabilir miyiz?",
                cevap:
                    "Çoğu zaman evet, çünkü OSTİM OSB sevkiyat açısından bize yakındır; ancak dürüst cevap, bunun garanti edilemeyeceğidir — makinelerin planlı işlere ayrıldığı yoğun dönemler olur ve o günlerde en yakın uygun makinenin ne zaman serbest kalacağını saatiyle söyleriz. Tutulamayacak bir 'hemen geliriz' sözü vermeyiz. Bu belirsizliği ortadan kaldırmanın tek gerçek yolu, kritik kalemleri arıza beklemeden plana almaktır: planlı işte tarih sizin seçtiğiniz gündür, arızada ise takvim tarafından seçilir.",
            },
            {
                soru: "Bakım kayıtları bizde tutulmuyor; şimdi başlamanın anlamı var mı?",
                cevap:
                    "Var ve ilk yıl bile fark eder. Kayıt tutmanın değeri kıyaslamadan gelir: bir kalemin ne zaman, hangi durumda görüldüğü bilinmiyorsa kötüleşme hızı da bilinemez ve her bakım kararı tahmine dayanır. İlk kayıt, ikinci turda karşılaştırma imkânı verir — aynı noktada pas ilerlemiş mi, birikinti ne kadar sürede oluşmuş, sızıntı büyümüş mü. İki tur sonra elinizde artık tahmin değil eğilim olur ve plan buna göre kurulur. Bıraktığımız kalem-bulgu notları bu kaydın başlangıcı olacak biçimde düzenlenir; sizden istediğimiz tek şey, notların bir yerde biriktirilmesidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. OSTİM OSB'nin işletme ölçeği kamuya açık bilgidir; erteleme etkisi tablosu, dört soruluk karar yöntemi ve küçük planlı gün kurgusu firma pratiğidir. Kalem davranışları genel bakım mühendisliği ilkelerine dayanır.",
    },

    "bolge:baskent-osb": {
        h1: "Başkent OSB'de Yeni Tesiste Bakım Rutini Kurmak",
        giris:
            "Başkent OSB'nin yapı stoğu görece genç ve bu gençlik, işletmelerde yaygın bir varsayım doğuruyor: yeni bina bakım istemez. Varsayım ilk yıllarda doğru gibi görünür çünkü hiçbir şey bozulmaz; asıl mesele ise bozulmanın ne zaman başlayacağı değil, başladığında işletmenin hazırlıklı olup olmayacağıdır. Yeni tesiste bakım rutini kurmanın en iyi zamanı, hiçbir şeyin bozulmadığı o ilk dönemdir — çünkü o dönemde tesis henüz sadedir, kayıtlar eksiksiz elde durur, montaj yapan firmaların bilgisi tazedir ve rutini kurmak için ayrılacak zaman gerçekten vardır. Birkaç yıl sonra aynı işi yapmak, hem eksik bilgiyle hem üretim baskısı altında olur. Bu sayfa, devreye alınmış ya da yeni büyümüş bir tesiste yüksek bakım rutininin sıfırdan nasıl kurulacağını anlatıyor: ilk envanter ne zaman çıkarılır, garanti dönemi nasıl kullanılır, hangi kalemler daha ilk yıldan takvime girer ve genç tesisin sessiz aşınma noktaları nerededir.",
        maddeler: [
            {
                baslik: "İlk envanteri devreye alma biter bitmez çıkarmak",
                metin:
                    "Yeni tesiste yüksek envanteri çıkarmanın en verimli anı, montaj ekipleri sahadan ayrılmadan hemen sonrasıdır. Bu anda armatürlerin konumu, kablo tavası güzergâhı, havalandırma ağızları, sprinkler hattı ve çatı erişim noktaları hâlâ görünür ve kimin ne yaptığı hatırlanır durumdadır. Envanter, bir ölçüm çalışması değildir; yüksekte duran her kalemin listesi ve konumudur. Sonradan çıkarılan envanter ise arkeoloji işine döner — kabloların nereye gittiği, hangi kapağın neyi beslediği yeniden keşfedilir ve bu keşif, her seferinde ekipmanla saat harcamak demektir.",
            },
            {
                baslik: "Garanti dönemini bakım penceresi gibi kullanmak",
                metin:
                    "Yeni tesisin ilk dönemi, çeşitli sistemlerin garanti kapsamında olduğu dönemdir ve bu dönem, kusurları görmek için en avantajlı zamandır. Yüksekte olan kalemler tam da yerden fark edilmediği için garantiyi boşa geçiren kalemlerdir: doğru sıkılmamış bir askı, hafif eğrilikle monte edilmiş bir tava, contası oturmamış bir ışıklık, ilk yıl kimsenin dikkatini çekmez. Devreye almadan sonraki ilk yıl içinde yapılacak yakın erişimli bir tur, bu türden montaj kusurlarını hâlâ karşı tarafın sorumluluğundayken görünür kılar. Bu tur, tesisin ömrü boyunca en yüksek getirili kontrolüdür.",
            },
            {
                baslik: "Genç tesisin sessiz aşınma noktaları",
                metin:
                    "Yeni yapı sağlamdır ama bazı noktalar ilk yıldan itibaren çalışmaya başlar. Hareketli olan her şey — havalandırma fanları, duman tahliye kapakları, açılır ışıklıklar — kullanıldıkça mekanik olarak yorulur ve genellikle hiç çalıştırılmadığı için değil, hiç kontrol edilmediği için arızalanır. Sızdırmazlık elemanları ilk mevsim döngülerinde yerine oturur ve bu oturma kimi noktada boşluk bırakır. Yeni beton ve yeni çelik yüzeylerde ise ilk yılların işi koruyucu bakımdır: paslanma başlamadan yapılan basit kontroller, ileride yüzey yenileme işine dönüşecek kalemleri baştan siler.",
            },
            {
                baslik: "Büyüyen tesiste rutini büyütmek",
                metin:
                    "Başkent OSB'de yaygın bir tablo, tesisin kademe kademe büyümesidir: önce ilk hol, sonra ek bina, sonra idari blok veya depo. Bakım rutininin en sık kırıldığı yer de burasıdır — plan ilk hol için kurulmuştur ve yeni bölümler plana hiç eklenmez. Sonuç, iyi bakılan bir bölüm ile hiç bakılmayan bir bölümün aynı çatı altında yaşamasıdır. Doğru refleks, her yeni bölümün devreye alınmasıyla birlikte envanterin güncellenmesi ve kalemlerin mevcut takvime yerleştirilmesidir. Bu, yılda birkaç dakikalık bir iştir; atlandığında ise yıllar sonra sıfırdan envanter çıkarmak gerekir.",
            },
            {
                baslik: "İlk yılın takvimi: az kalem, düzenli tekrar",
                metin:
                    "Yeni tesiste takvim, eski tesistekinden daha hafiftir ve öyle olmalıdır. İlk yılın çekirdeği üç kalemdir: montaj kusurlarını arayan yakın erişimli tur, hareketli elemanların çalışma kontrolü ve ilk sonbahar öncesi su hattı kontrolü. Bunlar tek bir günde toplanabilir. İkinci yıldan itibaren birikinti ve aşınma kalemleri (emiş temizliği, armatür yenileme) devreye girer ve takvim doğal olarak genişler. Rutini baştan ağır kurmak, en sık yapılan ve en çabuk terk edilen hatadır — hafif başlayan plan yaşar, ağır başlayan plan ikinci yılda rafa kalkar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yeni tesiste ilk üç yılın bakım gelişimi",
                paragraflar: [
                    "Aşağıdaki tablo, devreye alınmış bir tesiste rutinin nasıl kademelendiğini gösterir. Kalemler yapı tipine göre değişebilir; mantık, plana her yıl yalnızca gerçekten gerekli olanı eklemektir.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Ana amaç", "Tipik kalemler", "Gün ihtiyacı"],
                    satirlar: [
                        ["Devreye alma sonrası", "Envanter çıkarma", "Konum listesi, erişim noktaları", "Yarım gün"],
                        ["İlk yıl", "Montaj kusuru arama", "Askılar, contalar, kapak mekanizmaları", "1 gün"],
                        ["İkinci yıl", "Aşınma takibi", "Hareketli eleman kontrolü, su hattı", "1 gün"],
                        ["Üçüncü yıl", "Birikinti ve yenileme", "Emiş temizliği, armatür bakımı", "1 – 2 gün"],
                        ["Her yeni bölüm", "Envanter güncelleme", "Yeni kalemlerin takvime eklenmesi", "Ek yarım gün"],
                    ],
                },
            },
            {
                baslik: "Montaj kusuru turunda nelere bakılır",
                paragraflar: [
                    "İlk yılın turu, bir bakım turu gibi değil bir teslim alma turu gibi yürür ve odak noktası bellidir: bağlantı ve sabitleme kalitesi. Askı çubuklarının sıkılığı, tava eklerinin hizası, armatür sabitlemelerinin gerginliği, sızdırmazlık elemanlarının oturması, açılır kapakların tam kapanıp kapanmadığı. Bunların hiçbiri yerden görülmez ve pek çoğu ilk yıl herhangi bir belirti vermez; ama üçüncü yılda sarkma, sızma veya kilitlenme olarak geri döner.",
                    "Tur sırasında bulunan kalemler, tesisin kendi montaj dosyasıyla eşleştirilecek biçimde konumuyla birlikte kaydedilir. Böylece işletme, hangi bulgunun hangi yüklenicinin kapsamında kaldığını görebilir. Bu eşleştirmeyi biz yapmayız — ilgili sözleşmeler sizdedir; bizim işimiz bulguyu, yeri ve durumu net biçimde belgelemektir.",
                ],
            },
            {
                baslik: "Rutini yaşayan hâle getirmek: sorumlu ve tarih",
                paragraflar: [
                    "Yeni tesiste kurulan planların çoğu, teknik nedenlerle değil sahiplik nedeniyle ölür: plan bir dosyada durur ama takip eden kimse yoktur. Rutini yaşatan iki basit unsur, her kaleme bir sorumlu ve bir tarih yazmaktır. Sorumlu, işi yapan kişi olmak zorunda değildir — tarihi hatırlatan kişi olması yeterlidir. Tarih ise ay bazında bile olsa yazılmalıdır; 'sonbaharda' ifadesi takvime düşmez, 'eylül ikinci hafta' düşer.",
                    "Genç tesislerde ikinci bir alışkanlık daha işe yarar: bakım gününün üretim planına, tıpkı bir sipariş gibi önceden işlenmesi. Programda yeri olan gün korunur; program dışı kalan gün, ilk yoğunlukta feda edilir. Bu ayrıntı, planın ikinci yıla ulaşıp ulaşmayacağını çoğu zaman tek başına belirler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimiz yeni; gerçekten şimdiden bakım planına ihtiyacımız var mı?",
                cevap:
                    "Onarıma ihtiyacınız yok, plana var — ve ikisi farklı şeyler. Yeni tesiste ilk yılların işi onarmak değil, tesisin yüksek envanterini çıkarmak, montaj kalitesini yakından görmek ve hareketli elemanların çalıştığını doğrulamaktır. Bunlar hafif ve kısa işlerdir; ilk yıl için tek bir gün genellikle yeter. Asıl kazanç zamanlamadadır: envanteri şimdi çıkarmak yarım gün alır, üç yıl sonra çıkarmak ise unutulmuş bilgiyi yeniden keşfetmek anlamına gelir ve her keşif ekipmanla saat harcatır. Planı hafif kurun, ama şimdi kurun.",
            },
            {
                soru: "Montaj kusuru bulursanız, bunu yükleniciye biz mi bildireceğiz?",
                cevap:
                    "Evet, çünkü sözleşme ilişkisi sizindir — bizim işimiz bulguyu tartışılamayacak netlikte belgelemektir: kalem, tam konumu, gözlenen durum ve fotoğrafı. Bu kayıt elinizde olduğunda yükleniciyle konuşma teknik bir zemine oturur ve 'öyle bir şey yok' tartışmasına gerek kalmaz. Bulguları, tesisinizin montaj dosyasıyla eşleştirebileceğiniz biçimde bölüm bölüm ayırıyoruz. Hangi kalemin kimin kapsamında olduğunu ise siz belirlersiniz; sözleşmelerinizi görmediğimiz için o değerlendirmeyi yapmayız.",
            },
            {
                soru: "Yeni bir hol daha yapıyoruz; mevcut planımızı nasıl güncellemeliyiz?",
                cevap:
                    "Yeni bölüm devreye girer girmez envanteri güncelleyerek — bu, sonraya bırakıldığında neredeyse hiç yapılmayan bir iştir. Yeni holün yüksek kalemleri (armatür konumları, tava güzergâhı, havalandırma ağızları, erişim noktaları) listeye eklenir ve mevcut takvimdeki uygun dönemlere yerleştirilir. Çoğu durumda yeni bölüm ayrı bir gün gerektirmez; var olan planlı güne yarım gün eklenerek çözülür. Aksi hâlde tesiste iki farklı bakım kültürü oluşur: iyi bakılan eski bölüm ve hiç bakılmayan yeni bölüm — bu ayrışma, birkaç yıl içinde belirgin biçimde görünür hâle gelir.",
            },
            {
                soru: "Hangi kalemleri kendi teknik ekibimiz takip edebilir?",
                cevap:
                    "Gözle ve yerden yapılabilen her şeyi: aydınlatma seviyesinin gözlenmesi, tavan altında yeni bir su izi olup olmadığı, havalandırmanın çalışma sesindeki değişim, kapakların açılıp kapanması. Bunlar düzenli olarak kayda geçtiğinde, yıllık turun odağı da netleşir. Ekipman gerektiren kısım yakın erişimdir: bağlantı sıkılığı, conta durumu, birikinti seviyesi ve pas başlangıcı yerden değerlendirilemez ve 'uzaktan iyi görünüyor' notu bu kalemlerde bilgi taşımaz. Pratikte en verimli düzen, sürekli gözlemin sizde, yılda bir yakın turun bizde olmasıdır.",
            },
            {
                soru: "Planı ne kadar ayrıntılı yazmalıyız?",
                cevap:
                    "Sürdürebileceğiniz kadar. Yeni tesislerde en sık gördüğümüz hata, ilk yıl çok ayrıntılı bir plan kurulması ve ikinci yıl hiçbirinin uygulanmamasıdır. Çekirdek üç sütun yeterlidir: kalem, dönem, sorumlu. Dönemi ay bazında yazın — 'sonbaharda' takvime düşmez, 'eylül ikinci hafta' düşer. Sorumlu, işi yapan değil hatırlatan kişi olabilir. İkinci yıldan itibaren plan, geçen yılın bulgularıyla kendiliğinden zenginleşir. Hafif başlayan plan yaşar; ağır başlayan plan rafa kalkar ve rafa kalkan plan, hiç olmayan plandan farksızdır.",
            },
            {
                soru: "Bakım gününü üretim programına nasıl yerleştirelim?",
                cevap:
                    "Bir siparişle aynı ciddiyette: programa önceden işlenmiş gün korunur, işlenmemiş gün ilk yoğunlukta feda edilir. Yeni tesislerde bu ayrıntı, planın ikinci yıla ulaşıp ulaşmayacağını çoğu zaman tek başına belirler. Yerleştirirken iki şeye dikkat edin — talep yoğunluğunuzun düştüğü haftayı seçin ve o gün gerekecek malzemeyi (varsa) önceden temin edin. Ekipman tarafında bizden isteyeceğiniz tek şey, tarihi erken bildirmektir; planlı işler için takvim önceden bağlandığında, gün de saat de sizin tercihinize göre kurulur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Başkent OSB'nin görece genç yapı stoğu kamuya açık bilgidir; ilk üç yıl kademelendirmesi, montaj kusuru turu ve envanter güncelleme disiplini firma pratiğidir.",
    },

    "bolge:ivedik-osb": {
        h1: "İvedik OSB'de Bakım Gününü Planlamak ve Manlift Kiralama",
        giris:
            "İvedik OSB'de bir bakım günü, ekipmanın sahaya gelmesiyle başlamaz; işletmenin o güne nasıl hazırlandığıyla belirlenir. Aynı iş listesi, hazırlıklı bir tesiste dört saatte, hazırlıksız bir tesiste iki güne yayılarak biter ve aradaki farkın tamamı ekipmanla değil, listeyle, malzemeyle ve alanla ilgilidir. İvedik'in yoğun üretim temposunda bu fark doğrudan paraya çevrilir: makine sahada beklerken geçen her saat, hem kira hem üretim tarafında iki kere ödenir. Bu sayfa, bakım gününün kendisine odaklanıyor — günden önce hangi hazırlıklar yapılır, iş listesi nasıl sıralanır, alanlar hangi sırayla boşaltılır, gün içinde hangi kalem hangi kalemi bekletir ve gün sonunda ne teslim alınır. Makine seçimi ya da erişim tekniği burada konu değil; konu, o gün elinizdeki saatlerin nasıl kullanılacağı. Rutin kuran işletmeler için bu, yılın en verimli iki-üç gününü tasarlamak demektir.",
        maddeler: [
            {
                baslik: "İş listesini sıralamak: sıra, süreden önemlidir",
                metin:
                    "Bakım gününün en büyük zaman kaybı, kalemler arası gidiş gelişlerdir. Liste, işin türüne göre değil konuma göre sıralandığında bu kayıp ortadan kalkar: aynı bölgedeki kalemler ardışık yapılır, ekipman bir kez konumlanır ve o bölge tamamen bitmeden yer değiştirilmez. İkinci sıralama ölçütü bağımlılıktır — bir kalem başka bir kalemin yapılmasını gerektiriyorsa (örneğin temizlik yapılmadan yapılacak bir kontrol) sıra buna göre kurulur. Türüne göre sıralanmış liste (önce bütün elektrik işleri, sonra bütün mekanik işler) kulağa düzenli gelir ama sahada en yavaş çalışan düzendir.",
            },
            {
                baslik: "Malzeme hazırlığı: yarım kalan işin tek nedeni",
                metin:
                    "Bakım günlerinin yarım kalmasının açık ara birinci nedeni ekipman ya da süre değil, eksik malzemedir. Değiştirilecek armatürün yedeği, sızdırmazlık elemanı, cıvata-askı takımı, boya ya da temizlik sarfı önceden hazır değilse kalem o gün kapanmaz ve ikinci bir gün doğar. Hazırlığın basit yöntemi, listedeki her kalemin yanına gereken malzemeyi yazmak ve günden birkaç gün önce bunları tek yerde toplamaktır. Emin olunamayan kalemlerde (hangi ölçü conta gerekecek gibi) kontrol turu bir hafta önce yapılır — bu, bir günü kurtarmak için harcanan yarım saattir.",
            },
            {
                baslik: "Alan hazırlığı ve vardiya penceresi",
                metin:
                    "Çalışılacak noktaların altındaki alanların o saat için boşaltılmış olması gerekir ve bu, İvedik'in yoğun tesislerinde önceden planlanmadığında sahada çözülemez. Doğru yöntem, listenin bölge sırasına göre alan boşaltma saatlerinin de yazılmasıdır: hangi bölge saat kaçta boşalacak, kim boşaltacak, iş bitince ne zaman geri konulacak. Vardiyalı çalışan tesislerde bakım günü genellikle vardiya değişimine yaslanır — devir saatinde üretim doğal olarak duraklar ve bu boşluk, en pahalı kalemler için ayrılır. Alan hazırlığı yapılmamış bir bakım günü, ekipmanın malzeme beklemesiyle geçer.",
            },
            {
                baslik: "Gün içinde tempo: kritik kalem önce",
                metin:
                    "Günün ilk saatleri en verimli saatlerdir ve bu saatler, listenin en kritik kalemine ayrılmalıdır. Yaygın hata tersidir: kolay kalemlerle başlanır, kritik iş öğleden sonraya kalır ve beklenmedik bir zorluk çıktığında gün yetmez. Sıralamayı riske göre kurmak, olası bir aksama hâlinde ertelenecek kalemin en az önemli olanı olmasını sağlar. Aynı mantık malzeme belirsizliği için de geçerlidir: kapsamı net olmayan kalem erken saate alınır, çünkü ek malzeme gerekirse gün içinde tedarik şansı kalır.",
            },
            {
                baslik: "Gün sonunda ne teslim alınır",
                metin:
                    "Bakım gününün çıktısı sadece yapılmış işler değildir; kapanış kaydı da o günün ürünüdür. Kayıtta üç başlık bulunur: kapatılan kalemler ve yapılan işlem; açık kalan kalemler ve nedeni (malzeme yoktu, alan boşalmadı, kapsam büyüktü); gün içinde görülen ama listede olmayan yeni bulgular. Üçüncü başlık genellikle en değerlisidir çünkü bir sonraki planlı günün listesi büyük ölçüde oradan doğar. Bu kayıt işletmeye teslim edilir ve tesisin bakım defterine girer; böylece her bakım günü, bir sonrakinin hazırlığını kendisi yapmış olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bakım günü hazırlık çizelgesi",
                paragraflar: [
                    "Aşağıdaki çizelge, planlı bakım gününden önce yapılacak hazırlıkları zamanıyla birlikte gösterir. Sıralama, İvedik ölçeğindeki üretim tesisleri için tipik hazırlık süresini yansıtır.",
                ],
                tablo: {
                    basliklar: ["Ne zaman", "Hazırlık", "Kim yapar", "Atlanırsa"],
                    satirlar: [
                        ["1 – 2 hafta önce", "Kalem listesi ve bölge sırası", "İşletme", "Gün içinde gidiş geliş kaybı"],
                        ["1 hafta önce", "Belirsiz kalemlerde ön kontrol", "Ortak", "Yanlış malzeme"],
                        ["3 – 5 gün önce", "Malzeme temini ve tek yerde toplama", "İşletme", "Kalem yarım kalır"],
                        ["1 gün önce", "Alan boşaltma saatlerinin duyurusu", "İşletme", "Ekipman bekler"],
                        ["Gün başında", "Sıra ve öncelik teyidi", "Ortak", "Kritik iş sona kalır"],
                    ],
                },
            },
            {
                baslik: "Yarım kalan bakım gününün gerçek maliyeti",
                paragraflar: [
                    "Bir bakım gününün yarım kalması, iki günlük iş anlamına gelmez — daha fazlasına gelir. İkinci gün için yeniden nakliye, yeniden kurulum, yeniden alan boşaltma ve yeniden üretim duruşu gerekir; üstelik ikinci günün tarihi genellikle ilk günün rahatlığıyla değil, programın izin verdiği ilk boşlukla belirlenir ve arada haftalar geçebilir. Bu arada açık kalan kalemler, ilk gün kolayca kapanacakken kötüleşme fırsatı bulur.",
                    "Bu yüzden hazırlığı, günün kendisi kadar ciddiye alıyoruz ve talep aşamasında hazırlık listesini birlikte gözden geçiriyoruz. Kapsamı belirsiz bir liste geldiğinde, günü kurmadan önce kısa bir ön kontrol öneriyoruz — bir hafta önce yapılan yarım saatlik bakış, ikinci bir bakım gününü sıklıkla gereksiz kılıyor.",
                ],
            },
            {
                baslik: "Çok kiracılı yapılarda ortak bakım günü",
                paragraflar: [
                    "İvedik'in çok bölümlü sanayi yapılarında bakım gününü tek işletme değil, aynı bina veya adadaki birkaç işletme birlikte kurabilir. Bu düzende her işletme kendi listesini hazırlar, saatler ardışık dizilir ve ekipman gün boyunca bina içinde ilerler; nakliye ve kurulum payı katılımcı sayısına bölünür. Ortak günün tek gerçek şartı, saat disiplinidir — bir işletmenin gecikmesi zincirin tamamını kaydırır.",
                    "Ortak günün ikinci faydası bilgi paylaşımıdır: aynı yapıdaki işletmeler benzer sorunlarla karşılaşır ve bir tesiste görülen bulgu, komşusunda da aranacak kalem hâline gelir. Ortak alan kalemleri (çatı hattı, ortak koridor aydınlatması, dış cephe elemanları) de bu günlerde en kolay çözülen kalemlerdir çünkü sorumluluk paylaşımı zaten masadadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bakım günü için ne kadar önceden hazırlık yapmalıyız?",
                cevap:
                    "Bir-iki hafta yeterlidir ve hazırlık üç adımdan ibarettir. Önce kalem listesini çıkarıp bölge sırasına dizin — türüne göre değil konuma göre; bu tek değişiklik gün içindeki gidiş gelişlerin çoğunu siler. Sonra her kalemin yanına gereken malzemeyi yazıp bunları günden birkaç gün önce tek yerde toplayın. Son olarak alanların hangi saatte boşaltılacağını ve bunu kimin yapacağını belirleyip ilgili birimlere duyurun. Kapsamı belirsiz kalemler varsa bir hafta önce kısa bir ön kontrol öneriyoruz; yarım saatlik bu bakış, çoğu zaman ikinci bir bakım gününü gereksiz kılıyor.",
            },
            {
                soru: "Üretimi durdurmadan bakım günü kurulabilir mi?",
                cevap:
                    "Büyük ölçüde evet, çünkü gereken şey tam duruş değil bölge boşaltmadır. Liste bölge sırasına dizildiğinde her seferinde yalnızca bir alanın altı boşaltılır ve diğer bölgelerde üretim sürer; iş o bölgede bitince alan geri kurulur ve sıra ilerler. Yalnızca birkaç kalem gerçek duruş ister — hattın tam üzerindeki noktalar, ana besleme hatları, vinç hattıyla kesişen işler. Vardiyalı tesislerde bu kalemler devir saatine yaslanır çünkü üretim orada zaten doğal olarak duraklar. Yerleşiminizi ve vardiya düzeninizi paylaşırsanız listeyi bu ayrımla ikiye bölerek planlarız.",
            },
            {
                soru: "Listede olmayan bir iş gün içinde çıkarsa ne oluyor?",
                cevap:
                    "İki yol var ve kararı siz verirsiniz. Kalem kısaysa ve malzemesi mevcutsa, listenin en düşük öncelikli kalemiyle yer değiştirerek o gün kapatılabilir. Kapsamı belirsizse ya da malzeme gerekiyorsa, bulgu olarak kaydedilir ve bir sonraki planlı güne yazılır — gün içinde plansız iş eklemek, listenin geri kalanını sıkıştırdığı için genellikle iyi bir alışverişe dönmez. Her iki durumda da kalem, gün sonu kapanış kaydında 'yeni bulgu' başlığı altında yer alır; bir sonraki günün listesi büyük ölçüde bu başlıktan doğar.",
            },
            {
                soru: "Aynı binadaki diğer işletmelerle ortak gün kurmak mantıklı mı?",
                cevap:
                    "İvedik'in çok bölümlü yapılarında oldukça mantıklıdır: nakliye ve kurulum payı katılımcı sayısına bölünür, ekipman gün boyunca bina içinde ilerler ve ortak alan kalemleri (çatı hattı, koridor aydınlatması, dış cephe elemanları) doğal biçimde masaya gelir. Tek gerçek şart saat disiplinidir — her işletme kendi listesini önceden hazırlamalı ve kendi saatinde hazır olmalıdır; bir gecikme zincirin tamamını kaydırır. Katılımcıları, kat bilgilerini ve yaklaşık kalem sayılarını iletin, sıralamayı ve saatleri biz kuralım.",
            },
            {
                soru: "Gün sonunda bize ne veriliyor?",
                cevap:
                    "Üç başlıklı bir kapanış kaydı: o gün kapatılan kalemler ve yapılan işlem; açık kalan kalemler ve açık kalma nedeni; gün içinde görülen ama listede olmayan yeni bulgular. Üçüncü başlık genellikle en değerlisidir çünkü bir sonraki planlı günün listesini büyük ölçüde o oluşturur. Kayıt, tesisinizin bakım defterine doğrudan girecek biçimde, kalem ve konum belirtilerek yazılır. Böylece her bakım günü kendinden sonrakinin hazırlığını yapmış olur ve ikinci yıldan itibaren liste çıkarmak, sıfırdan düşünmeyi değil önceki kaydı gözden geçirmeyi gerektirir.",
            },
            {
                soru: "Yarım kalan bir gün ikinci gün olarak fiyatlanıyor mu?",
                cevap:
                    "Sahada geçen süre neyse o esas alınır; yani yarım kalan gün ikinci bir tam gün gibi değil, fiilen çalışılan süreye göre değerlendirilir — ancak ikinci gün için nakliye ve kurulum yeniden doğar ve asıl maliyet oradadır. Bu yüzden hazırlığı bu kadar öne çıkarıyoruz: ikinci günün gerçek bedeli kira kalemi değil, yeniden nakliye, yeniden alan boşaltma ve yeniden üretim duruşudur. Listeniz kapsam olarak belirsizse günü kurmadan önce ön kontrol öneririz; belirsizliği bir hafta önce çözmek, hemen her zaman ikinci günü ödemekten ucuzdur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İvedik OSB'nin yoğun üretim dokusu kamuya açık bilgidir; hazırlık çizelgesi, bölge sırası mantığı ve kapanış kaydı düzeni firma pratiğidir.",
    },

    "bolge:ankara-merkez": {
        h1: "Ankara Merkezde Küçük İşletmeler İçin Bakım Rutini ve Manlift Kiralama",
        giris:
            "Ankara merkezdeki küçük işletmelerin — servis atölyeleri, tek katlı imalathaneler, dükkân arkası depolar, küçük ticari yapılar — bakım gerçeği sanayi tesislerinkinden farklıdır: yüksekte duran kalem sayısı azdır, bütçe sınırlıdır ve işi takip edecek ayrı bir teknik kadro yoktur. Bu koşullarda kapsamlı bakım planları kurmak gerçekçi değildir; kurulsa bile uygulanmaz. Ama bakımın hiç olmaması da bu ölçekte en pahalı seçenektir, çünkü küçük işletmede tek bir beklenmedik arıza yılın kârını yiyebilir. Aradaki doğru nokta, asgari rutindir: yılda bir kez, birkaç saatte, gerçekten önemli olan az sayıda kalemi gözden geçirmek. Bu sayfa, Ankara merkezdeki küçük ölçekli işletmeler için o asgari rutinin ne olduğunu anlatıyor — hangi kalemler listeye girer, hangileri ölçek gereği hiç girmez, iş ne kadar sürer ve bu düzen sınırlı bütçeyle nasıl sürdürülür.",
        maddeler: [
            {
                baslik: "Asgari liste: dört kalem yeter",
                metin:
                    "Küçük işletmede yıllık kontrol listesi kısa tutulduğunda uygulanır, uzatıldığında rafta kalır. Çoğu merkez işletmesi için çekirdek dört kalemdir: aydınlatma armatürleri ve askıları; varsa havalandırma-aspiratör ağzı; çatı ya da saçak hattında su ile ilgili her şey; dış cephede düşme riski taşıyan elemanlar (tabela bağlantısı, klima dış ünite askısı, saçak parçaları). Bu dört kalem, küçük ölçekte hem en sık sorun çıkaran hem de sorun çıktığında en pahalıya patlayan gruptur. Diğer her şey, bulguya bağlı olarak listeye sonradan eklenir.",
            },
            {
                baslik: "Dışarıya bakan elemanlar: sorumluluk kalemi",
                metin:
                    "Merkez dokusunda binaların çoğu yayaya, kaldırıma veya park alanına bakar ve bu, cephedeki elemanları teknik bir kalem olmaktan çıkarıp sorumluluk kalemine dönüştürür. Tabela bağlantıları, klima dış ünite askıları, gevşemiş saçak parçaları ya da cephe kaplaması, ayrıldığında zararı yalnızca işletmeye değil üçüncü kişilere verir. Bu kalemlerin yılda bir kez yakından kontrol edilmesi, küçük işletmenin yaptığı en yüksek getirili bakım işidir — hem gerçek riski azaltır hem de olası bir olayda düzenli kontrol yapıldığını gösteren kayıt bırakır.",
            },
            {
                baslik: "Kısa iş, tek makine, birkaç saat",
                metin:
                    "Küçük ölçekte bakım turu, tam gün planlanacak bir iş değildir. Dört-beş kalemlik bir liste, tek makineyle çoğu zaman birkaç saatte biter ve işletmenin günü kapanmaz. Bu kısalık, ekonomiyi de belirler: turun maliyeti, tek bir cephe elemanının düşmesiyle doğacak zararın çok altındadır. Sürenin kısa tutulabilmesi için tek şart, tur öncesi erişim alanının hazırlanmasıdır — kaldırım ya da park alanı kullanılacaksa aracın çekilmesi, iç mekânda çalışma alanının boşaltılması gibi basit hazırlıklar, turun süresini doğrudan belirler.",
            },
            {
                baslik: "Kaldırıma ve komşuya bakan işlerde düzen",
                metin:
                    "Merkezde çalışmanın sanayi sahasından farkı, çevrede sürekli insan olmasıdır. Cephe ve tabela işlerinde çalışma düşeyinin altı kapatılır, geçiş yönlendirilir ve iş, çevredeki işletmelerin yoğun saatleri dışına — sabahın erken saatlerine ya da kapanış sonrasına — planlanır. Kamusal alanın (kaldırım, yol şeridi) kullanılması gereken durumlarda ilgili belediye süreci gündeme gelir ve bu, planlamanın parçası olarak baştan konuşulur. Küçük işletme için pratik sonuç şudur: cephe işleri, iç mekân işlerinden daha fazla önceden planlama ister.",
            },
            {
                baslik: "Rutini bütçeye sığdırmak",
                metin:
                    "Sınırlı bütçede rutini yaşatmanın iki yolu vardır. Birincisi, kontrolü onarımdan ayırmaktır: kısa yıllık tur düşük maliyetlidir ve bulunan kalemlerin hepsini aynı yıl yaptırmak zorunda değilsiniz — sınıflandırılmış bir liste, harcamayı yıllara yaymanıza izin verir. İkincisi komşulukla ölçek kurmaktır: aynı sokakta, aynı iş hanında ya da aynı sitede birkaç işletmenin turu aynı güne dizildiğinde nakliye payı bölünür ve işletme başına maliyet belirgin düşer. Merkezin yoğun ticari dokusu bu birleştirme için elverişlidir; genellikle eksik olan tek şey, birinin başlatmasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Küçük işletme için asgari yıllık liste",
                paragraflar: [
                    "Aşağıdaki liste, merkez dokusundaki küçük ölçekli işletmeler için çekirdek kontrol kalemlerini gösterir. Bulgu çıktıkça liste genişler; hiçbir bulgu yoksa ertesi yıl aynı kalemlerle tekrarlanır.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Neden listede", "Sıklık", "Tipik süre"],
                    satirlar: [
                        ["Tabela ve askı bağlantıları", "Düşme riski, üçüncü kişi zararı", "Yılda 1", "Kısa"],
                        ["Klima dış ünite askıları", "Cephede yük taşıyan eleman", "Yılda 1", "Kısa"],
                        ["Çatı / saçak su hattı", "Sızıntı hızlı büyür", "Sonbahar öncesi", "Orta"],
                        ["İç aydınlatma ve askıları", "Çalışma kalitesi ve güvenlik", "Yılda 1", "Orta"],
                        ["Aspiratör / havalandırma ağzı", "Birikinti ve verim kaybı", "Yılda 1", "Kısa"],
                    ],
                },
            },
            {
                baslik: "Küçük ölçekte kaydın değeri",
                paragraflar: [
                    "Küçük işletmede bakım kaydı, büyük tesistekinden farklı bir işe yarar. Büyük tesiste kayıt planlama aracıdır; küçük işletmede ise çoğu zaman bir güvence belgesidir. Cepheden bir parçanın düşmesi, bir sızıntının komşu dükkâna zarar vermesi ya da bir sigorta talebi gündeme geldiğinde, düzenli kontrol yapıldığını gösteren basit bir kayıt işletmenin lehine ciddi bir fark yaratır. Kaydın karmaşık olması gerekmez: tarih, kontrol edilen kalemler, bulgular ve yapılan işlem.",
                    "İkinci fayda, işletme el değiştirdiğinde ya da yeni bir kira dönemi başladığında ortaya çıkar. Yapının hangi kaleminin ne zaman bakıldığı bilindiğinde, sorumluluk tartışmaları kısalır — özellikle kiracı-mülk sahibi arasındaki cephe ve çatı sorumluluğu konularında bu kayıt, kimin neyi devraldığını gösteren tek nesnel belgedir.",
                ],
            },
            {
                baslik: "Komşu birleştirmesi nasıl kurulur",
                paragraflar: [
                    "Merkezde birkaç işletmenin turunu aynı güne toplamak teknik değil, iletişim işidir ve genellikle en yakın komşularla başlar. Pratik yol şudur: kendi listenizi çıkardıktan sonra bitişik iki-üç işletmeye 'yılda bir cephe ve tabela kontrolü yaptıracağız, katılmak ister misiniz' diye sormak. Katılım olduğunda saatler ardışık dizilir, ekipman sokakta bir kez konumlanır ve nakliye payı bölünür. Sokakta bir kez kurulan düzen, aynı zamanda yaya güvenliği açısından da tek seferde kurulmuş olur.",
                    "Bu modelin en verimli hâli, bir iş hanı ya da site yönetiminin turu dönemsel olarak üstlenmesidir: ortak alan kalemleri ve tekil işletme kalemleri aynı gün içinde çözülür. Yönetiminiz varsa süreci onun üzerinden kurmak hem koordinasyonu hem paylaşımı kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük bir işletmeyiz; bakım turu bizim ölçeğimiz için fazla değil mi?",
                cevap:
                    "Kapsamı doğru tutulursa değil. Küçük işletme için önerdiğimiz tur, tam gün süren kapsamlı bir bakım değil; dört-beş kalemlik kısa bir kontroldür ve çoğu yerde birkaç saatte biter. Ölçek küçüldükçe rutin de küçülmelidir — yıllık listeyi kısa tutmak, onu uygulanabilir kılan tek şeydir. Buna karşılık bakımın hiç olmaması küçük ölçekte daha risklidir, çünkü tek bir beklenmedik arıza ya da cepheden düşen bir eleman, küçük bir işletmede orantısız büyüklükte bir maliyet doğurur. Doğru soru 'tur yaptırmalı mıyız' değil, 'listeyi ne kadar kısa tutabiliriz' sorusudur.",
            },
            {
                soru: "Tabelamız yıllardır yerinde duruyor; kontrol gerekli mi?",
                cevap:
                    "Özellikle gerekli — cephe elemanlarında risk zamanla artar, azalmaz. Bağlantı noktaları rüzgâr yüküyle sürekli çalışır, dübel ve askı bölgelerinde korozyon sessizce ilerler ve bunların hiçbiri yerden görülmez; tabela düşene kadar 'sağlam duruyor' izlenimi devam eder. Merkez dokusunda bu kalem ayrıca bir sorumluluk konusudur, çünkü altında kaldırım ve yaya vardır. Yılda bir kez yakından bakmak kısa bir iştir ve yapıldığına dair kayıt bırakır; bu kayıt, olası bir olayda işletmenin lehine somut bir dayanaktır.",
            },
            {
                soru: "Kaldırımda çalışacaksanız izin gerekiyor mu?",
                cevap:
                    "Konuma bağlı: iş kendi parselinizden, bahçenizden ya da otoparkınızdan yapılabiliyorsa ek bir süreç gerekmez. Kaldırım, yol şeridi gibi kamusal alanın kullanılması gerekiyorsa ilgili belediye süreci gündeme gelir ve bunu planlamanın parçası olarak baştan konuşuruz. Her iki durumda da çalışma düşeyinin altı kapatılır ve yaya geçişi yönlendirilir. Pratik öneri, cephe işlerini çevredeki işletmelerin yoğun saatleri dışına planlamaktır — sabahın erken saatleri merkezde hem geçiş hem park açısından en rahat penceredir.",
            },
            {
                soru: "Kiracıyız; çatı ve cephe bizim sorumluluğumuzda mı?",
                cevap:
                    "Bu, kira sözleşmenizin içeriğine bağlı bir sorudur ve hukuki tarafında yorum yapmayız; ancak pratik tarafında söyleyebileceğimiz net bir şey var: sorumluluk kimde olursa olsun, sorunu ilk yaşayan taraf sizsiniz. Bu yüzden en azından bulgu düzeyinde bilgi sahibi olmak işinize yarar — bir kontrol turunda çıkan çatı ya da cephe bulgusu, mülk sahibine iletilecek somut bir kayda dönüşür ve 'söylemiştik' tartışmasını ortadan kaldırır. Turu yaptırırken hangi kalemlerin size, hangilerinin mülk sahibine ait olduğunu ayırarak raporlayabiliriz.",
            },
            {
                soru: "Bulunan işleri hemen yaptırmak zorunda mıyız?",
                cevap:
                    "Hayır; kontrol ile onarımı ayırmamızın nedeni tam olarak budur. Turun çıktısı sınıflandırılmış bir listedir: beklemeyecek kalemler — özellikle düşme riski taşıyan cephe elemanları ve aktif su sızıntıları — ayrı tutulur; geri kalanlar sonraki aylara, hatta sonraki yıla yayılabilir. Küçük işletme bütçesinde bu ayrım belirleyicidir, çünkü 'ne gerekiyorsa yapın' yaklaşımı en pahalı yaklaşımdır. Listeyi, hangi kalemin neden o sınıfa girdiği anlaşılacak biçimde yazıyoruz; onarım için başka firmalardan teklif almanız da bu sayede kolaylaşır.",
            },
            {
                soru: "Komşu dükkânlarla birleşirsek maliyet gerçekten düşer mi?",
                cevap:
                    "Düşer, çünkü küçük işlerde maliyetin belirgin bir kısmı ekipmanın sokağa gelmesi ve konumlanmasıdır; bu kalem katılımcı sayısına bölünür. Bitişik iki-üç işletme bile farkı hissedilir kılar. Kurulumu kolaylaştıran şey saat disiplinidir: her işletme kendi listesini önceden çıkarır ve kendi saatinde hazır olur. Bir iş hanı ya da site yönetiminiz varsa turu onun üzerinden kurmak en verimli yoldur — ortak alan kalemleri ile tekil işletme kalemleri aynı günde çözülür. Katılımcı sayısını ve yaklaşık kalemleri iletin, sıralamayı biz yapalım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ankara merkezin küçük ölçekli ticari-servis dokusu kamuya açık bilgidir; asgari liste, kontrol-onarım ayrımı ve komşu birleştirme düzeni firma pratiğidir. Kamusal alan kullanımı belediye mevzuatına tabidir.",
    },

    "bolge:sasmaz-sanayi-sitesi": {
        h1: "Şaşmaz Sanayi Sitesi'nde Oto Sanayi Atölyesi için Yıllık Bakım Takvimi",
        giris:
            "Şaşmaz Sanayi Sitesi'nde bir işletmenin yılı, üç işin ritmiyle geçer: kaporta-boya, lastik-yedek parça ve showroom-satış. Bu üç iş kolu birbirinden farklı yoğunluk mevsimlerine sahiptir ve tam da bu yüzden bakım takvimi kurmak burada hem daha gerekli hem daha kolaydır — yoğun ay bellidir, sakin ay bellidir, takvim bu ikisinin arasına yerleştirilir. Sorun, çoğu işletmenin bu bilgiyi kullanmamasıdır: bakım işleri hep 'ara sıra' başlığı altında kalır ve genellikle en yanlış anda, işin en yoğun olduğu haftada hatırlanır. Bu sayfa, Şaşmaz'daki oto sanayi atölyesi için bir yıllık bakım takvimi öneriyor — boyahanenin filtre ve aspiratör bakımı hangi aya yazılır, kaporta atölyesinin kaldırma ekipmanı kontrolleri ne sıklıkla yapılır, showroom aydınlatması ne zaman yenilenir ve kış lastik sezonunun bakım planını nasıl şekillendirdiği. Yükseğe erişim, bu takvimin birkaç satırında görünür; asıl konu takvimin kendisidir.",
        maddeler: [
            {
                baslik: "Üç iş kolu, üç ayrı yoğunluk eğrisi",
                metin:
                    "Şaşmaz'daki bir işletme kaporta-boya, lastik-yedek parça ve showroom-satış işlerinden birini ya da birkaçını birlikte yürütür ve bu kollar farklı aylarda doluya çıkar. Kaporta-boya işi yıl boyu nispeten dengelidir ama kaza sezonlarında (yağmurlu-buzlu dönemler) sıçrar. Lastik ve yedek parça tarafı mevsim geçişlerinde, özellikle kış lastiği takma-sökme döneminde iş hacmini birkaç katına çıkarır. Showroom-satış ise yıl sonu kampanyalarında yoğunlaşır. Bakım takvimi kurmanın ilk adımı, kendi işletmenizin hangi ayda hangi kolunun doluya çıktığını yazmaktır — bakım, o ayların dışına yerleştirilir.",
            },
            {
                baslik: "Boyahanede filtre ve aspiratör bakımının kaçınılmazlığı",
                metin:
                    "Boya kabini ve aspiratör hattı, atölyenin en sık bakım isteyen kalemidir çünkü boya tozu ve solvent buharı sürekli birikir. Filtre değişimi ertelendiğinde iki sonuç birden doğar: emiş gücü düşer ve boya kalitesi bundan etkilenir, ayrıca biriken toz yanıcı bir yük hâline gelir. Bu kalemin bakım sıklığı kullanım yoğunluğuna göre değişir ama takvime yazılması gereken şey netleşmiştir — filtre kontrolü, düzenli aralıklarla ve mutlaka kayıtla yapılır; kayıt hem iş güvenliği hem sigorta açısından işletmenin elindeki tek somut kanıttır.",
            },
            {
                baslik: "Kaporta atölyesinde kaldırma ekipmanı kontrol periyodu",
                metin:
                    "Kaporta işinde kullanılan tavan vinci, zincirli caraskal veya sabit kaldırma donanımı, kendi periyodik kontrol takvimine tabidir ve bu takvim işletmenin genel bakım planının sabit çıpasıdır. Diğer kalemler (aydıntıma, havalandırma, çatı) bu çıpanın etrafına dizilir çünkü kaldırma ekipmanı kontrolü zaten belirli bir tarihte yapılacaktır — aynı güne aydınlatma ve havalandırma turunu eklemek, ayrı bir gün açmaktan daha ekonomiktir. Bu birleştirme, Şaşmaz'daki çok işlevli atölyelerde en sık uygulanan ve en az maliyetli yöntemdir.",
            },
            {
                baslik: "Showroom ve vitrin bakımının ayrı takvimi",
                metin:
                    "Satış alanı olan işletmelerde vitrin ve iç aydıntıma, atölye bakımından farklı bir mantıkla planlanır çünkü burada öncelik estetiktir, güvenlik değil. Sönük bir spot ya da eskimiş bir tabela ışığı, müşteri karşısında doğrudan izlenim kaybettirir ve bu kayıp arıza gibi ölçülmez ama satışa yansır. Showroom bakımı, yıl sonu kampanya döneminden birkaç hafta önceye yazılır — kampanya başladığında değil, başlamadan önce tamamlanır. Atölye tarafındaki bakımla aynı güne sıkıştırılmaz çünkü ikisinin önceliği farklıdır: biri güvenlik, diğeri izlenimdir.",
            },
            {
                baslik: "Kış lastik sezonu: bakımın konulmaması gereken pencere",
                metin:
                    "Lastik ve yedek parça işi yapan işletmeler için kış lastiği sezonu, yılın en yoğun birkaç haftasıdır ve bu haftalarda planlı bakım kesinlikle düşünülmez — makine bulmak da zorlaşır, personel de meşguldür. Doğru refleks tam tersidir: bakım takvimi, bu yoğun pencerenin hemen öncesine ya da hemen sonrasına yazılır. Sezon öncesi bakım, en yoğun haftalara sağlam ekipmanla girmeyi sağlar; sezon sonrası bakım ise yoğunluğun bıraktığı aşınmayı (artan trafik, sık kullanılan raf sistemleri) erken yakalar. İkisi arasında seçim, işletmenin kendi önceliğine kalır ama boş geçirilmemesi gereken bir pencere olduğu nettir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şaşmaz'da iş koluna göre yıllık bakım çizelgesi",
                paragraflar: [
                    "Aşağıdaki çizelge, Şaşmaz'daki üç ana iş kolunun tipik bakım kalemlerini ve uygun dönemlerini gösterir. İşletmeler genellikle birden fazla kolu birlikte yürüttüğü için kalemler aynı güne toplanabilir.",
                ],
                tablo: {
                    basliklar: ["İş kolu", "Bakım kalemi", "Uygun dönem", "Yoğun dönemle çakışır mı"],
                    satirlar: [
                        ["Kaporta-boya", "Filtre / aspiratör kontrolü", "Düzenli aralık", "Hayır"],
                        ["Kaporta-boya", "Kaldırma ekipmanı periyodik kontrol", "Yasal periyoda göre", "Sabit çıpa"],
                        ["Lastik-yedek parça", "Raf üstü aydınlatma / erişim", "Kış sezonu öncesi/sonrası", "Kaçınılır"],
                        ["Showroom-satış", "Vitrin ve iç aydınlatma", "Kampanya öncesi", "Kaçınılır"],
                        ["Genel", "Çatı ve su hattı", "Sonbahar başı", "Hayır"],
                    ],
                },
            },
            {
                baslik: "Boya tozu birikiminin görünmeyen riski",
                paragraflar: [
                    "Boya kabini ve aspiratör kanallarında biriken toz, iki ayrı sorunu aynı anda büyütür. Birincisi verim kaybıdır — emiş gücü düştükçe boya kalitesi ve iş süresi kötüleşir. İkincisi yangın riskidir — boya tozu ve solvent kalıntısı, düzenli temizlenmediğinde tutuşma yükünü artırır. Bu ikinci risk, filtre bakımını 'estetik' bir kalemden çıkarıp güvenlik kalemine taşır ve takvimde en üst sıraya yazılmasının nedenidir.",
                    "Bakım sıklığı, kabin kullanım yoğunluğuna göre değişir; sürekli çalışan bir kabin ile ara sıra kullanılan bir kabinin ihtiyacı aynı değildir. Doğru yaklaşım, ilk yılın gözlemine göre kendi sıklığınızı belirlemek ve bunu takvime yazılı olarak sabitlemektir.",
                ],
            },
            {
                baslik: "Bakımı kış sezonundan önce bitirmenin ekonomisi",
                paragraflar: [
                    "Şaşmaz'daki lastikçi ve yedek parça işletmelerinde en sık görülen planlama hatası, bakımı 'işler sakinleşince yaparız' diye ertelemektir — ama kış sezonunda sakinleşme genellikle ilkbahara kadar gelmez, çünkü ardından yaz lastiği dönemi başlar. Sonuç, bakımın yıl boyu 'sonra' rafında kalmasıdır. Takvimi sezon öncesine sabit bir tarihle bağlamak (örneğin ekim başı) bu döngüyü kırar; tarih, işlerin sakinleşmesini beklemez, kendisi bir çıpa olur.",
                    "İkinci ekonomi, ekipman müsaitliğindedir. Kış sezonu başladığında hem müşteri talebi hem sektördeki ekipman talebi aynı anda yükselir; sezon öncesinde planlanan bakım, hem daha uygun tarihte hem daha az rekabetle kiralanır. Sezon içinde çıkan acil bir ihtiyaç ise aynı kolaylığı bulamayabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Boyahanemizin filtre bakımını ne sıklıkla yapmalıyız?",
                cevap:
                    "Kesin bir sayı vermek yanıltıcı olur çünkü sıklık kabin kullanım yoğunluğuna bağlıdır; sürekli çalışan bir kabin ile haftada birkaç iş yapan bir kabinin ihtiyacı farklıdır. Doğru yöntem, ilk birkaç ayı gözlemleyip emiş gücündeki düşüşü ve filtre üzerindeki birikim hızını not etmektir — bu gözlem size kendi sıklığınızı verir. Bulduğunuz sıklığı takvime yazılı bir tarih olarak sabitleyin; 'gerektiğinde bakarız' cümlesi, çoğu atölyede filtrenin aylarca unutulmasına yol açar. İsterseniz ilk gözlem turunu birlikte yapıp başlangıç sıklığını belirleyebiliriz.",
            },
            {
                soru: "Kaldırma ekipmanı kontrolünü bakım takvimine nasıl entegre ederiz?",
                cevap:
                    "Kaldırma ekipmanının kendi yasal periyodik kontrol tarihi zaten sabittir ve değiştirilemez; doğru yaklaşım bu tarihi bir çıpa olarak kullanmaktır. Aynı güne aydınlatma turu, havalandırma kontrolü ve gerekiyorsa filtre bakımını eklemek, ayrı bir gün açmaktan daha ekonomiktir çünkü nakliye ve kurulum tek seferde amorti edilir. Kaldırma kontrolünüzün tarihini paylaşırsanız, diğer kalemleri o güne göre planlayabiliriz.",
            },
            {
                soru: "Kış lastik sezonunda bakım yaptırmak gerçekten sakıncalı mı?",
                cevap:
                    "Sakıncalı değil ama verimsiz — sezonun en yoğun haftalarında hem personel meşgul hem sektördeki ekipman talebi yüksektir, bu da hem planlama hem tarih esnekliği açısından işletmenin elini zayıflatır. Sezon öncesine (örneğin ekim başına) sabitlenen bir bakım tarihi, aynı işi daha uygun koşullarda ve daha geniş takvim seçeneğiyle tamamlar. Sezon içinde gerçekten acil bir durum çıkarsa elbette cevap veririz, ama bunu istisna olarak bırakmanızı öneririz.",
            },
            {
                soru: "Showroom bakımını atölye bakımıyla aynı güne alabilir miyiz?",
                cevap:
                    "Alabilirsiniz ama önerimiz ayrı tutmanızdır, çünkü ikisinin önceliği farklıdır. Atölye bakımı güvenlik ve verim odaklıdır ve zamanlaması kaldırma ekipmanı kontrolü gibi sabit tarihlere bağlıdır; showroom bakımı ise izlenim odaklıdır ve doğru zamanlaması kampanya döneminden hemen öncedir. İkisini aynı güne sıkıştırmak, ikisinden birinin yanlış zamanda yapılmasına yol açar. İşletmenizin kampanya takvimini paylaşırsanız iki ayrı tarih öneririz.",
            },
            {
                soru: "Bakım kaydı tutmak bize gerçekten ne kazandırır?",
                cevap:
                    "İki somut şey: birincisi filtre ve kaldırma ekipmanı gibi kalemlerde tarih ve bulgu kaydı, hem iş güvenliği denetiminde hem sigorta sürecinde elinizdeki tek nesnel belgedir. İkincisi, ikinci yıldan itibaren kendi işletmenizin gerçek bakım sıklığını size gösterir — filtre gerçekte ne kadar sürede tıkanıyor, kaldırma ekipmanında hangi bulgular tekrar ediyor. Bu bilgi olmadan her yıl aynı tahminle yola çıkarsınız; kayıtla birlikte plan, tahminden gerçeğe döner.",
            },
            {
                soru: "Aynı sitede birkaç işletme bakım turunu birleştirebilir mi?",
                cevap:
                    "Evet ve Şaşmaz'ın yoğun işletme dokusunda bu oldukça uygulanabilir bir modeldir. Komşu işletmelerin bakım tarihleri aynı haftaya denk getirildiğinde nakliye ve kurulum payı bölünür, işletme başına maliyet düşer. Tek koşul, her işletmenin kendi kalem listesini önceden hazır etmesi ve alanını o saatte boşaltmasıdır. Komşularınızla bu konuda anlaşırsanız, sıralamayı ve saatleri birlikte kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Şaşmaz Sanayi Sitesi'nin kaporta-boya, lastik-yedek parça ve showroom karışık dokusu kamuya açık bilgidir; yıllık takvim, boya tozu risk değerlendirmesi ve sezon-öncesi planlama firma pratiğidir. Kaldırma ekipmanı kontrol periyotları ilgili mevzuata tabidir.",
    },

    "bolge:etimesgut-kucuk-sanayi-sitesi": {
        h1: "Etimesgut Küçük Sanayi Sitesi'nde Kendin Yap Sınırı: Ne Zaman Profesyonel Destek Gerekir",
        giris:
            "Etimesgut Küçük Sanayi Sitesi'ndeki bir dükkânın en değerli kaynağı ustanın kendisidir — çoğu iş onun elinden çıkar ve bu, işletmenin en büyük avantajıdır. Ama her avantajın bir sınırı vardır ve yükseğe erişim, o sınırın en net göründüğü alandır. Dükkân sahibi ya da ustası merdivenle ya da taburede çıkıp pek çok işi güvenle bitirir; sorun, bu alışkanlığın sınırın nerede bittiğini fark etmeden devam etmesidir. Bu sayfa, KSS ölçeğindeki bir dükkânda hangi işin gerçekten kendi imkânlarınızla bitebileceğini, hangisinin ekipman gerektirdiğini ve aradaki çizginin nasıl çizileceğini anlatıyor — teorik bir güvenlik söylevi değil, dükkân işletmecisinin karar anında sorabileceği somut sorular. Amaç kiralamayı büyütmek değil, doğru işte doğru aracı kullanmaktır; çoğu zaman doğru araç merdivendir, bazen değildir.",
        maddeler: [
            {
                baslik: "KSS dükkânının kendine has ölçeği",
                metin:
                    "Etimesgut KSS'deki dükkânlar genellikle dar, tavanı düşük ve tek işlevden çok işleve göre düzenlenmiştir — depo, atölye ve bazen küçük bir satış köşesi aynı çatı altındadır. Bu ölçekte yükseğe erişim ihtiyacı sanayi tesisindeki gibi geniş ve tekrarlayan değil, dağınık ve küçük hacimlidir: bir armatür, bir raf üstü, bir çatı kaçağı. Küçük ölçek, 'zaten küçük iş' varsayımını doğurur ve bu varsayım çoğu zaman doğrudur — ama iş küçük olsa bile risk küçük olmayabilir. Ölçüt, işin büyüklüğü değil işin niteliğidir.",
            },
            {
                baslik: "Merdivenle güvenle bitecek işler",
                metin:
                    "Bir dükkânda merdiven ya da tabure, doğru kullanıldığında birçok işi güvenle bitirir: kısa süreli bir kontrol, bir ampul değişimi, bir rafın üzerine erişip malzeme indirme, bir noktada hızlı bir ölçüm. Bu işlerin ortak özelliği kısalığı ve tek noktada kalmasıdır — merdiven bir kez kurulur, iş birkaç dakikada biter, merdiven kaldırılır. Bu tür işlerde ekipman çağırmak gereksiz bir masraftır ve çoğu KSS ustası bu ayrımı zaten doğru yapar.",
            },
            {
                baslik: "Üç kırmızı çizgi: süre, iki el, yatay hareket",
                metin:
                    "Sınırın net göründüğü üç durum vardır. Birincisi süre — iş on-on beş dakikayı aşıyorsa, merdivende geçirilen uzun süre yorgunluk ve denge kaybı riskini büyütür. İkincisi elin serbest olması — usta iki elini birden kullanacaksa (bir parçayı tutup diğer eliyle vidalamak gibi) merdivende güvenli tutunma noktası kalmaz. Üçüncüsü yatay hareket — iş bir hat boyunca ilerliyorsa (örneğin bir raf sırasının tamamı, bir çatı derenin tamamı) merdivenin her birkaç metrede yeniden kurulması gerekir ve asıl kaza riski bu tekrarlanan kurulum anlarında yaşanır. Bu üç durumdan biri karşınıza çıktığında, iş artık merdiven işi değildir.",
            },
            {
                baslik: "Elektrik ve çatı işlerinde sınırın daha erken bitmesi",
                metin:
                    "KSS dükkânlarında iki iş türü, genel kuraldan daha erken sınıra girer. Elektrik panosu üstü ya da hat üzerindeki bir işte, yalnızca yükseklik değil gerilim riski de vardır ve bu ikisi bir araya geldiğinde merdiven üzerinde çalışmak önerilmez. Çatı işlerinde ise zemin türü belirsizdir — sac çatıda basılabilir nokta ile basılamayan nokta arasındaki fark gözle her zaman ayırt edilemez ve bu belirsizlik, merdivenle bile ulaşılsa çatı üstü işi riskli kılar. Bu iki alanda 'kısa iştir, hallederiz' refleksi en çok kazaya yol açan refleks olarak bilinir.",
            },
            {
                baslik: "Ekipman çağırmanın dükkân ölçeğindeki gerçek maliyeti",
                metin:
                    "KSS ölçeğinde ekipman çağırmaktan kaçınmanın nedeni genellikle maliyet endişesidir, ama bu endişe hesaplanmadan büyür. Kısa bir iş için gelen kompakt bir platform, çoğu zaman birkaç saatte tamamlanır ve dükkânın günlük işleyişini neredeyse hiç etkilemez — buna karşılık merdivenle uzayan, tekrar tekrar kurulan ve sonunda yarım kalan bir iş, hem daha çok zaman hem de daha çok risk taşır. Doğru soru 'ekipman pahalı mı' değil, 'bu işi merdivenle bitirmek gerçekten daha ucuz mu' sorusudur; cevap, işin süresi ve tekrar sayısı hesaba katıldığında çoğu zaman sanılanın tersidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kendin yap / ekipman çağır karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, KSS dükkânında sık karşılaşılan işleri ve hangi tarafa düştüğünü gösterir. Sınırda kalan işlerde karar, işin süresine ve tekrar sayısına göre verilir.",
                ],
                tablo: {
                    basliklar: ["İş", "Tipik durum", "Karar", "Neden"],
                    satirlar: [
                        ["Tek ampul değişimi", "Kısa, tek nokta", "Merdiven yeterli", "Süre ve tekrar düşük"],
                        ["Raf sırası boyunca aydınlatma", "Uzun, çok nokta", "Ekipman gerekir", "Tekrarlanan kurulum riski"],
                        ["Pano üstü kontrol", "Kısa ama gerilim riskli", "Ekipman önerilir", "Yükseklik + elektrik riski"],
                        ["Çatı kaçağı tespiti", "Zemin belirsiz", "Ekipman önerilir", "Basılabilir nokta net değil"],
                        ["Hızlı ölçüm / göz kontrolü", "Çok kısa", "Merdiven yeterli", "Elin serbest, tek nokta"],
                    ],
                },
            },
            {
                baslik: "Sigorta ve kayıt açısından bakım karar sürecinin önemi",
                paragraflar: [
                    "KSS ölçeğinde bir kaza yaşandığında, işletmenin elinde iş güvenliği açısından makul bir karar süreci izlediğini gösteren bir kayıt olması önemli fark yaratır. Hangi işin merdivenle, hangisinin ekipmanla yapıldığına dair basit bir not — tarih, iş, karar gerekçesi — bu sürecin belgesidir. Karmaşık bir sistem gerekmez; birkaç satırlık bir defter yeterlidir ve zamanla işletmenin kendi karar alışkanlığını da netleştirir.",
                    "Bu kayıt aynı zamanda ustanın kendi güvenliği için bir hatırlatıcı işlevi görür — 'geçen sefer bu iş için ekipman çağırmıştık, neden' sorusunun cevabı yazılı olduğunda, aynı kararı tekrar tartışmaya gerek kalmaz.",
                ],
            },
            {
                baslik: "Komşu dükkânlarla ortak çağrı ekonomisi",
                paragraflar: [
                    "Etimesgut KSS'nin yoğun dükkân dokusunda tek bir işletmenin kısa bir işi için ekipman çağırmak, maliyeti tek başına taşımak anlamına gelir. Komşu birkaç dükkânın benzer nitelikte küçük işlerini (raf üstü, tabela, çatı noktası) aynı güne toplamak bu maliyeti böler ve her işletme için kiralamayı daha ekonomik hâle getirir. Bu birleştirme genellikle kendiliğinden olmaz; birinin komşularına 'aynı gün ekipman çağırıyoruz, sizin de bir işiniz var mı' diye sorması yeterlidir.",
                    "Site yönetiminiz ya da esnaf odası bağlantınız varsa, bu tür ortak günleri dönemsel bir düzene bağlamak daha da kolaydır — birkaç dükkânın adını iletin, sıralamayı biz kuralım.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hangi işlerde merdiven kullanmak gerçekten güvenlidir?",
                cevap:
                    "İş kısa (on-on beş dakikayı aşmayan), tek noktada kalan ve iki elin serbest olduğu işlerde merdiven güvenlidir — bir ampul değişimi, hızlı bir kontrol, bir rafın üzerinden malzeme indirme gibi. Sorun, bu üç şarttan biri kaybolduğunda ortaya çıkar: iş uzarsa, iki el gerekiyorsa ya da hat boyunca ilerlemek gerekiyorsa merdiven artık doğru araç değildir. Kendi işinizi bu üç ölçütten geçirerek değerlendirmeniz, çoğu zaman kararı kendiliğinden verir.",
            },
            {
                soru: "Elektrik panosu üstünde kısa bir iş var; merdivenle yapılabilir mi?",
                cevap:
                    "Önermeyiz, çünkü burada iki risk üst üste biner: yükseklik ve gerilim. Kısa bir iş bile olsa, merdivende dengeyi korurken aynı zamanda elektrikli bir yüzeyle çalışmak, tek bir riskin bulunduğu işlerden farklı değerlendirilmelidir. Bu tür işlerde kompakt bir platform, hem daha stabil bir çalışma zemini hem de elleri serbest bırakan bir duruş sağlar. İşin kapsamını paylaşırsanız, gerçekten ekipman gerektirip gerektirmediğini net söyleriz — her elektrik işini büyütmeyiz.",
            },
            {
                soru: "Çatımızda küçük bir kaçak var; kendimiz bakabilir miyiz?",
                cevap:
                    "Çatı üstü işlerde temkinli olmanızı öneririz çünkü asıl risk yükseklikten çok zemindir — sac çatıda basılabilir nokta ile basılamayan nokta arasındaki fark yerden ya da merdivenden her zaman görülemez. Kısa bir görsel kontrol için çatıya çıkmadan, dışarıdan veya iç mekândan (varsa tavan arası) bakmak daha güvenlidir. Kaçağın yerini net biçimde görmek ve güvenle müdahale etmek gerekiyorsa, ekipmanla çatı üstüne hiç basmadan dıştan erişmek çoğu zaman daha güvenli ve daha hızlı bir yoldur.",
            },
            {
                soru: "Ekipman çağırmak bizim ölçekte pahalı olmaz mı?",
                cevap:
                    "Genellikle sanıldığı kadar değil. Kısa bir dükkân işi için gelen kompakt ekipman çoğu zaman birkaç saatte biter ve dükkânın günlük işleyişini neredeyse etkilemez; buna karşılık merdivenle uzayan, tekrar tekrar kurulan bir iş hem daha çok zaman alır hem de yarım kalma riski taşır. İşinizin kapsamını paylaşırsanız gerçek bir süre ve maliyet tahmini veririz — kısa işlerde çoğu zaman ekonomi sandığınızdan farklı çıkar.",
            },
            {
                soru: "Komşu dükkânlarla ortak çağırmak nasıl işliyor?",
                cevap:
                    "Birkaç dükkânın benzer küçük işlerini (raf üstü, tabela, çatı noktası) aynı güne toplamanız yeterli; ekipman o gün dükkân dükkân ilerler ve nakliye-kurulum payı katılımcı sayısına bölünür. Tek koşul, her dükkânın kendi işini önceden net biçimde tarif etmesi ve sırasında hazır olmasıdır. Kaç dükkân katılacağını ve yaklaşık iş listesini iletirseniz, sıralamayı ve saatleri biz kurarız.",
            },
            {
                soru: "Karar sürecimizi kayıt altına almanın gerçekten faydası var mı?",
                cevap:
                    "Var — hem güvenlik hem de olası bir sorunda işletmenin lehine somut bir belge olarak. Basit bir kayıt (tarih, iş, alınan karar ve gerekçesi) hem ustanın kendi kararını hatırlamasını sağlar hem de dışarıdan biri (denetim, sigorta) süreç sorduğunda elinizde hazır bir cevap bulunur. Karmaşık bir sistem gerekmez; birkaç satırlık bir defter, zamanla işletmenizin kendi karar alışkanlığını da netleştirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Etimesgut Küçük Sanayi Sitesi'nin dar-çok işlevli dükkân dokusu kamuya açık bilgidir; üç ölçütlü karar çerçevesi ve ortak çağrı düzeni firma pratiğidir. Yükseklikte çalışma ile ilgili genel ilkeler iş güvenliği mevzuatına dayanır.",
    },

    "bolge:siteler-mobilya-sanayi-bolgesi": {
        h1: "Siteler Mobilya Sanayi Bölgesi'nde Mobilya Atölyesi için Periyodik Bakım Rutini",
        giris:
            "Siteler'deki bir mobilya atölyesinde bakımın en büyük düşmanı, üretimin doğal artığıdır: talaş, zımpara tozu, lake buharı. Bu artıklar günlük temizlikte süpürülür ama havalandırma kanalında, aspiratör motorunda, tavan altı yüzeylerde sessizce birikir ve bu birikim, çoğu atölyede yıllarca fark edilmeden büyür. Mobilya üretiminin kendine has bir bakım rutini gerekir çünkü aşınma hızı, kuru bir imalat atölyesinden farklıdır — toz daha inceliklidir, buhar daha yapışkandır ve ikisi birlikte hem ekipman ömrünü hem hava kalitesini etkiler. Bu sayfa, Siteler ölçeğindeki bir mobilya atölyesi için periyodik bakım rutininin nasıl kurulacağını anlatıyor: toz ve talaş kaynaklı bakımın sıklığı, lake-boya kabini bakımının ayrı ele alınması gereken nedeni, stok-raf alanının kontrol düzeni, showroom bakımının atölyeden ayrılması ve yoğun teslimat dönemlerinin takvimi nasıl şekillendirdiği.",
        maddeler: [
            {
                baslik: "Talaş ve toz: rutinin en sık tekrar eden kalemi",
                metin:
                    "Mobilya atölyesinde havalandırma ve aspiratör hattı, diğer imalat türlerine göre daha sık bakım ister çünkü ahşap tozu hem daha ince hem de daha kolay birikir. Emiş gücündeki düşüş genellikle geç fark edilir — usta, azalan emişe alışır ve bunu normal sanır — ama düşen emiş hem hava kalitesini hem de motor ömrünü doğrudan etkiler. Rutin kurmanın ilk kalemi bu yüzden nettir: emiş ve havalandırma kontrolü, diğer imalat türlerinden daha sık aralıklarla takvime yazılır.",
            },
            {
                baslik: "Lake-boya kabininin ayrı bakım mantığı",
                metin:
                    "Mobilyada yüzey işlemi (lake, vernik, boya) yapan atölyelerde kabin ve filtre bakımı, genel havalandırmadan ayrı bir kalem olarak ele alınmalıdır çünkü buhar ve ince partikül birikimi farklı bir hızda ilerler ve farklı bir riski büyütür — hem yüzey kalitesi hem yanıcı yük açısından. Bu kalemin takvimdeki yeri, üretim yoğunluğuna göre belirlenir ve genel bakım turundan bağımsız olarak izlenir; iki kalemi aynı sıklığa bağlamak, ya kabini yetersiz sıklıkta ya da genel havalandırmayı gereksiz sıklıkta bakıma sokar.",
            },
            {
                baslik: "Stok ve raf alanının üst kısmı: görünmeyen erişim ihtiyacı",
                metin:
                    "Mobilya atölyelerinde stok alanı genellikle yüksek raf sistemleriyle kurulur ve bu rafların üst kısmı — aydınlatma, sprinkler varsa başlıkları, havalandırma ağızları — günlük işleyişte kimsenin baktığı bir yer değildir. Raf üstü kontrol, yılda bir kez bile yapılsa iki kazanç sağlar: sönük armatürler zamanında değişir ve yangın güvenliği ekipmanı (varsa) görsel olarak doğrulanır. Bu kontrol, mobilya atölyesinin diğer bakım kalemlerinden farklı olarak stok yoğunluğunun en düşük olduğu döneme yazılmalıdır çünkü raf aralarına erişim, dolu stokla çok daha zordur.",
            },
            {
                baslik: "Showroom bakımının atölyeden ayrılması",
                metin:
                    "Satış alanı bulunan mobilya işletmelerinde showroom aydınlatması ve vitrin düzeni, atölye bakımından farklı bir öncelik taşır: burada amaç ürünü doğru ışıkta göstermektir ve sönük ya da renk uyumsuz bir aydınlatma, satışı doğrudan etkiler. Bu kalem, atölye bakımıyla aynı güne sıkıştırılmak yerine kendi takvimine bağlanır ve doğru zamanlaması, yoğun satış dönemlerinden birkaç hafta öncesidir — kampanya başladığında değil, başlamadan tamamlanmış olmalıdır.",
            },
            {
                baslik: "Yoğun teslimat dönemleri ve bakımın konumu",
                metin:
                    "Mobilya sektöründe teslimat yoğunluğu belirli dönemlerde (okul sezonu öncesi, yılbaşı, bayram öncesi) belirgin biçimde artar ve bu dönemlerde atölye kapasitesinin tamamı üretime ayrılır. Bakım turunu bu dönemlere denk getirmek, hem ekipman hem personel açısından en yanlış zamanlamadır. Doğru yaklaşım, kendi teslimat takviminizdeki yoğun ve sakin ayları önceden işaretlemek ve bakım kalemlerini sakin aylara yerleştirmektir — bu, takvim kurmanın en basit ama en sık atlanan adımıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mobilya atölyesi yıllık bakım çizelgesi",
                paragraflar: [
                    "Aşağıdaki çizelge, Siteler ölçeğindeki bir mobilya atölyesinin tipik bakım kalemlerini ve sıklığını gösterir. Lake-boya işi yapmayan atölyelerde ilgili satır devre dışı kalır.",
                ],
                tablo: {
                    basliklar: ["Bakım kalemi", "Tipik sıklık", "Uygun dönem", "Not"],
                    satirlar: [
                        ["Genel emiş / havalandırma", "Yılda 2 – 3", "Düzenli aralık", "Diğer imalattan sık"],
                        ["Lake-boya kabini filtresi", "Üretim yoğunluğuna göre", "Bağımsız takip", "Genel havalandırmadan ayrı"],
                        ["Raf üstü aydınlatma / erişim", "Yılda 1", "Stok az iken", "Erişim kolaylığı için"],
                        ["Showroom aydınlatma", "Kampanya öncesi", "Yoğun satıştan haftalar önce", "Atölyeden ayrı takvim"],
                        ["Çatı ve su hattı", "Yılda 1", "Sonbahar başı", "Stok üstü hasarı önler"],
                    ],
                },
            },
            {
                baslik: "Toz ve buharın ekipman ömrüne etkisi",
                paragraflar: [
                    "Ahşap tozu ve lake buharı, motorlu ekipmanın hareketli parçalarına ve elektrik bağlantılarına ulaştığında aşınmayı hızlandırır. Bu etki tek seferde görülmez; yıllar içinde birikir ve fark edildiğinde genellikle bir arıza olarak ortaya çıkar. Düzenli bakımın burada asıl işi, birikimi arıza olmadan görmektir — armatür bağlantısındaki toz katmanı, aspiratör motorundaki ısınma belirtisi, kabin filtresindeki doygunluk. Bu belirtiler erken yakalandığında bakım kısa sürer; arızaya dönüştüğünde iş hem uzar hem pahalanır.",
                    "Bu yüzden mobilya atölyesinde bakım sıklığını 'genel kural' olarak değil kendi gözleminize göre ayarlamanızı öneririz — ilk yılın bulguları, sizin atölyenizin gerçek birikim hızını gösterir ve ikinci yılın takvimi buna göre ayarlanır.",
                ],
            },
            {
                baslik: "Sezon takvimini bakım planına yansıtmak",
                paragraflar: [
                    "Yoğun teslimat dönemlerinizi bir kez yazıya döktüğünüzde, bakım takvimini bu dönemlerin dışına yerleştirmek basit bir işe döner. Pratik yöntem, yıl başında kendi sezon takviminizi (yoğun aylar, sakin aylar) bir kenara not etmek ve bakım kalemlerini sakin aylara dağıtmaktır. Bu, hem ekipman müsaitliği açısından hem de personelin bakım gününe eşlik edebilmesi açısından işi kolaylaştırır.",
                    "Aynı sitede benzer sezon takvimine sahip komşu atölyelerin bakım günlerini birleştirmek de mümkündür; Siteler'in yoğun mobilya dokusunda bu tür ortak günler nakliye payını belirgin biçimde düşürür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Havalandırma bakımını neden diğer atölyelerden daha sık yapmalıyız?",
                cevap:
                    "Çünkü ahşap tozu diğer imalat artıklarına göre daha ince ve daha kolay biriken bir yapıdadır; emiş gücündeki düşüş yavaş ilerlediği için usta bu düşüşe alışır ve fark etmez hâle gelir. Oysa düşen emiş hem çalışma ortamının hava kalitesini hem motor ömrünü etkiler. Kesin bir sayı vermek yerine önerimiz, ilk yıl emiş gücünü ve filtre birikimini gözlemlemeniz ve bulduğunuz sıklığı takvime yazılı bir tarih olarak sabitlemenizdir.",
            },
            {
                soru: "Lake kabini bakımını genel havalandırmayla birlikte mi yapmalıyız?",
                cevap:
                    "Önermeyiz — ikisi farklı hızda kirlenir ve aynı takvime bağlandığında biri gereğinden sık, diğeri gereğinden seyrek bakılmış olur. Lake-boya kabininin filtre ve emiş durumu, üretim yoğunluğunuza göre bağımsız izlenmelidir; kabin sık kullanılıyorsa bu kalem genel havalandırmadan çok daha sık takvime girer. İki kalemi ayrı satırlarda tutmanız, hem maliyeti hem de riski daha doğru yönetmenizi sağlar.",
            },
            {
                soru: "Raf üstü kontrolünü ne zaman yaptırmalıyız?",
                cevap:
                    "Stok seviyenizin en düşük olduğu döneme yazın. Dolu raflarda üst kısma erişim hem zaman alır hem de stoğun yer değiştirmesini gerektirir; boş ya da az dolu rafta aynı iş çok daha hızlı ve daha ucuz biter. Yoğun teslimat döneminizin hemen sonrası, genellikle stokun en düşük olduğu ve bu kontrol için en uygun pencere hâline gelir.",
            },
            {
                soru: "Showroom bakımını atölye bakımından ayırmak gerçekten önemli mi?",
                cevap:
                    "Evet, çünkü ikisinin önceliği ve doğru zamanlaması farklıdır. Atölye bakımı verim ve güvenlik odaklıdır ve toz-birikim gözlemine göre zamanlanır; showroom bakımı ise izlenim odaklıdır ve doğru zamanlaması kampanya döneminden haftalar öncesidir. İkisini aynı güne sıkıştırmak, genellikle showroom tarafının aceleye gelmesine yol açar çünkü atölye kalemleri daha acil görünür. Ayrı tuttuğunuzda her ikisi de kendi doğru zamanında biter.",
            },
            {
                soru: "Yoğun teslimat dönemimizde acil bir bakım ihtiyacı çıkarsa ne yapmalıyız?",
                cevap:
                    "Acil durumlara elbette cevap veririz ve bunu istisna olarak görürüz — asıl önerimiz, bilinen yoğun dönemlerinizde planlı bakımı hiç açmamanızdır. Yıl başında kendi sezon takviminizi not edip bakım kalemlerini sakin aylara yerleştirdiğinizde, yoğun dönemde çıkan ihtiyaçların sayısı da azalır çünkü birikim erken yakalanmış olur. Sezon takviminizi paylaşırsanız, bakım tarihlerini bu takvime göre öneririz.",
            },
            {
                soru: "Komşu atölyelerle bakım gününü birleştirmek mümkün mü?",
                cevap:
                    "Mümkün ve Siteler'in yoğun mobilya dokusunda oldukça mantıklı bir modeldir. Benzer sezon takvimine sahip komşu atölyeler bakım tarihlerini aynı haftaya denk getirdiğinde nakliye ve kurulum payı bölünür. Tek koşul, her atölyenin kendi kalem listesini önceden hazır etmesi ve sırasında hazır olmasıdır. Katılacak atölyelerin sayısını ve yaklaşık kalemlerini iletirseniz, sıralamayı ve saatleri biz kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Siteler Mobilya Sanayi Bölgesi'nin ahşap işleme ve satış karışık dokusu kamuya açık bilgidir; kabin-genel havalandırma ayrımı, raf üstü kontrol zamanlaması ve sezon takvimi eşleştirmesi firma pratiğidir.",
    },

    "bolge:yenimahalle": {
        h1: "Yenimahalle'de İlçe Atölye Dokusunda Bakım Erteleme Faturası",
        giris:
            "Yenimahalle'nin atölye dokusu, düzenli bir OSB'den farklı çalışır: işletmeler bir sanayi adası içinde değil, mahalle aralarına, ana caddelere ve yan sokaklara dağılmış durumdadır ve çoğunun ortak bir site yönetimi yoktur. Bu dağınıklık, bakım takvimi kurmayı zorlaştıran asıl etkendir — OSB'deki işletme, aynı yönetimin hatırlattığı ortak bir takvime uyar; Yenimahalle'deki atölye ise kendi takvimini kendisi kurmak, kendisi hatırlamak zorundadır ve bu genellikle olmaz. Sonuç, bakımın 'bir gün yaparız' cümlesinde sürekli ertelenmesidir ve bu erteleme, özellikle ilçenin görece eski yapı stoğunda hızlı bir faturaya dönüşür. Bu sayfa, ilçe dokusundaki atölyeler için bir bakım takvimi kurmanın neden zor olduğunu, ertelemenin nereye kadar ucuz göründüğünü ve nereden itibaren pahalanmaya başladığını, kiracı-mülk sahibi ilişkisinin ertelemeyi nasıl büyüttüğünü ve dağınık dokuda bile asgari bir takvimin nasıl kurulabileceğini anlatıyor.",
        maddeler: [
            {
                baslik: "Dağınık doku, dağınık takvim",
                metin:
                    "Yenimahalle'de bir atölye, komşusunun ne zaman bakım yaptırdığını bilmez ve bu bilgisizlik önemlidir çünkü OSB'lerdeki bakım disiplini büyük ölçüde görünürlükten gelir — komşu işletme bakım yaptırınca, kendi işletmenizin de sırası geldiğini hatırlarsınız. İlçe dokusunda bu hatırlatıcı yoktur; her işletme kendi takvimini kendi hafızasında tutar ve hafıza, yoğun bir üretim döneminde ilk kaybolan şeydir. Takvim kurmanın ilk adımı bu yüzden dışsal bir hatırlatıcı yaratmaktır — bir kayıt, bir tarih, bir kişi — çünkü ortamın kendisi bu hatırlatmayı sağlamaz.",
            },
            {
                baslik: "Kiracı-mülk sahibi tartışmasının erteleme üzerindeki etkisi",
                metin:
                    "İlçe dokusundaki işletmelerin önemli bir bölümü kiracıdır ve bu, bazı bakım kalemlerinde 'bu kimin işi' sorusunu doğurur — çatı, cephe, ana elektrik hattı gibi yapısal kalemler çoğu zaman mülk sahibinin sorumluluğundadır ama kiracı bu kalemin bozukluğunu ilk yaşayan taraftır. Sorumluluk netleşmeden geçen her ay, kalemin kötüleşmesine izin verir çünkü hiç kimse 'bu benim işim' demez. Pratik çözüm, sorumluluğu tartışmadan önce bulguyu kayda geçirmektir — bir kontrol turunda tespit edilmiş ve tarihlenmiş bir bulgu, mülk sahibiyle yapılacak görüşmede kiracının elindeki somut belgedir.",
            },
            {
                baslik: "Eski yapı stoğunda ertelemenin hızlanan maliyeti",
                metin:
                    "Yenimahalle'nin yapı stoğu, ilçenin bazı bölümlerinde Başkent OSB gibi yeni gelişen alanlara göre daha eskidir ve yaşlanan yapıda erteleme daha hızlı fatura keser. Genç bir yapıda ertelenen bir çatı kontrolü bir yıl beklenebilirken, eski bir çatıda aynı erteleme birkaç ay içinde sızıntıya dönüşebilir çünkü malzeme zaten ömrünün ilerisindedir. Elektrik tesisatı ve pano hattında da benzer bir hızlanma görülür — eski tesisat, yeni tesisata göre aynı yükü daha zorlanarak taşır ve bakımsızlık burada daha çabuk belirti verir. Yapı yaşı arttıkça, erteleme toleransı daralır.",
            },
            {
                baslik: "'Arıza çıkınca ararız' refleksinin gerçek bedeli",
                metin:
                    "Takvimsiz işletmenin varsayılan modeli, bir şey bozulana kadar beklemek ve bozulunca aramaktır. Bu model, her seferinde aynı üç kalemi ekler: acil tedarik nedeniyle malzeme maliyeti yükselir, üretim planlanmadan durur ve ekipmanın o gün müsait olup olmadığı belirsizdir. Aynı iş planlı yapıldığında bu üç kalemin hiçbiri yoktur. İlçe dokusundaki işletmelerde bu fark özellikle belirgindir çünkü mahalle arası dar sokaklarda acil bir günde uygun ekipmanı bulmak, planlı bir günden daha zordur — sokak ve park koşulları önceden bilinmediğinde iş beklenenden uzar.",
            },
            {
                baslik: "Dağınık dokuda asgari takvim nasıl kurulur",
                metin:
                    "Ortak bir yönetim olmadan da takvim kurulabilir; gereken şey karmaşık bir sistem değil, üç basit unsurdur. Birincisi bir liste — yüksekte duran kaç kalem var, nerede. İkincisi her kaleme bir tarih — ay bazında bile olsa yazılı bir tarih, 'bir ara' ifadesinden daha güçlüdür. Üçüncüsü bir kayıt — her bakımın sonunda ne yapıldığının birkaç satırlık notu. Bu üç unsur, site yönetimi olmayan bir işletmenin kendi başına kurabileceği en basit rutindir ve ikinci yıldan itibaren kendini güçlendirir çünkü geçen yılın kaydı, bu yılın planının başlangıç noktası olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçe dokusunda erteleme süresi ve maliyet artışı",
                paragraflar: [
                    "Aşağıdaki tablo, Yenimahalle'nin eski-orta yaşlı yapı stoğunda sık görülen kalemlerin ertelendiğinde nasıl davrandığını gösterir. Yapı yaşı arttıkça büyüme hızı da artar.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Kısa erteleme (haftalar)", "Uzun erteleme (aylar)", "Yapı yaşı etkisi"],
                    satirlar: [
                        ["Çatı / dere sızıntısı", "Küçük leke", "Tavan altı hasarı", "Eskidikçe hızlanır"],
                        ["Elektrik pano / hat", "Belirti yok", "Isınma, kesinti riski", "Eski tesisatta hızlı"],
                        ["Dış cephe bağlantıları", "Belirti yok", "Gevşeme, düşme riski", "Yavaş ama sabit"],
                        ["İç aydınlatma", "Tek armatür sönük", "Genel seviye düşer", "Yapı yaşından bağımsız"],
                        ["Havalandırma / emiş", "Verim kaybı", "Motor zorlanması", "Yavaş ama sabit"],
                    ],
                },
            },
            {
                baslik: "Sorumluluğu netleştirmeden önce bulguyu kayda geçirmek",
                paragraflar: [
                    "Kiracı-mülk sahibi ilişkisinde en çok zaman kaybettiren şey, bir bulgunun kime ait olduğunun tartışılmasıdır ve bu tartışma sürerken kalem kötüleşmeye devam eder. Doğru sıra tersine çevrilmelidir: önce bulgu tarihli ve konumlu biçimde kayda geçirilir, sorumluluk tartışması bu kayıt üzerinden yürütülür. Bir kontrol turunda çıkan her bulguyu bu şekilde belgeliyoruz — kalem, konum, gözlenen durum ve tarih. Hangi tarafın sorumlu olduğunu biz belirlemeyiz, çünkü sözleşme ilişkisini görmeyiz; bizim işimiz, tartışmanın üzerine kurulacağı nesnel zemini sağlamaktır.",
                    "Bu yaklaşımın pratik faydası, tartışmanın kısalmasıdır — 'böyle bir şey yok' itirazı, tarihli ve fotoğraflı bir kayıt karşısında zemin bulamaz ve süreç doğrudan çözüme geçer.",
                ],
            },
            {
                baslik: "Ortak yönetimsiz dokuda komşu koordinasyonu",
                paragraflar: [
                    "Site yönetimi olmasa da, Yenimahalle'nin ilçe dokusunda komşu işletmeler kendi aralarında basit bir koordinasyon kurabilir. Aynı sokakta ya da aynı iş hanında birkaç işletmenin bakım tarihlerini aynı haftaya denk getirmesi, hem nakliye payını böler hem de her işletmenin diğerinin takviminden haberdar olmasını sağlar — bu farkındalık, dağınık dokunun eksik olduğu hatırlatma mekanizmasının yerini bir ölçüde tutar.",
                    "Bu koordinasyonu kurmanın en kolay yolu, birinin ilk adımı atmasıdır: kendi takviminizi belirledikten sonra komşularınıza aynı haftaya katılmak isteyip istemediklerini sormanız yeterlidir. Talep sırasında bu niyeti belirtirseniz, sıralamayı ve saatleri birlikte kurarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bakım takvimimiz yok ve hatırlayan da kimse yok; nasıl başlarız?",
                cevap:
                    "Karmaşık bir sistem kurmaya çalışmadan üç basit adımla başlayın: yüksekte duran kalemlerin kısa bir listesini çıkarın, her kaleme ay bazında bir tarih yazın ve bir kişiyi bu tarihleri hatırlatmakla görevlendirin — bu kişinin işi yapması gerekmez, sadece tarihi takip etmesi yeterlidir. Site yönetimi olmayan bir işletmede bu üç adım, dışarıdan gelecek hiçbir hatırlatmayı beklemeden kendi takviminizi kurmanızı sağlar. İlk yıl eksik olur, bu normaldir; ikinci yıl geçen yılın kaydıyla kendiliğinden düzelir.",
            },
            {
                soru: "Çatı kiracının mı mülk sahibinin mi sorumluluğunda, bilmiyoruz; ne yapmalıyız?",
                cevap:
                    "Sorumluluk tartışmasını beklemeden bulguyu kayda geçirin — bu, tartışmayı hızlandıran tek şeydir. Bir kontrol turunda çatının durumu tarihli ve konumlu biçimde belgelendiğinde, mülk sahibiyle yapılacak görüşme somut bir zeminde ilerler ve 'öyle bir sorun yok' itirazına yer kalmaz. Hukuki sorumluluğun kimde olduğuna biz karar vermeyiz — kira sözleşmenizin içeriğini görmeyiz — ama bulguyu, hangi tarafın hangi kalemden sorumlu olabileceğini ayırt edecek netlikte raporlarız.",
            },
            {
                soru: "Binamız eski; bu bakım takvimimizi nasıl etkilemeli?",
                cevap:
                    "Yapı yaşı arttıkça erteleme toleransı daralır, bu yüzden eski yapıda takvim sıklığı gençten daha kısa olmalıdır. Özellikle çatı ve elektrik pano hattı gibi kalemlerde, genç bir yapıda bir yıl beklenebilecek bir kontrol, eski yapıda birkaç ayda kritikleşebilir. Yapınızın yaşını ve son ne zaman kapsamlı bakıldığını paylaşırsanız, sizin için gerçekçi bir başlangıç sıklığı öneririz — herkese aynı takvimi önermiyoruz.",
            },
            {
                soru: "Komşularımızla ortak bakım günü kurmak site yönetimi olmadan mümkün mü?",
                cevap:
                    "Mümkün ve pratikte oldukça kolay — gereken şey resmi bir yönetim değil, birkaç işletmenin kendi aralarında anlaşmasıdır. Aynı sokaktaki ya da aynı handaki komşularınıza kendi bakım tarihinizi bildirip katılmak isteyip istemediklerini sormanız yeterli başlangıçtır. Katılım olduğunda tarihler aynı haftaya dizilir, ekipman gün içinde işletmeler arasında ilerler ve nakliye payı bölünür. Katılacak işletmeleri iletirseniz sıralamayı ve saatleri biz kurarız.",
            },
            {
                soru: "Arıza çıkmadan bakım yaptırmanın somut faydası nedir?",
                cevap:
                    "Üç kalemi aynı anda önler: acil tedarik nedeniyle yükselen malzeme maliyetini, plansız üretim duruşunu ve o gün ekipman bulma belirsizliğini. İlçe dokusunda bu son madde özellikle önemlidir çünkü dar sokak ve park koşulları önceden bilinmediğinde acil bir günde iş beklenenden uzar. Planlı bir bakımda bu belirsizliklerin hiçbiri yoktur — tarih, malzeme ve erişim önceden bilinir. Kayıtlarınızı tutmaya başladığınızda, birkaç yıl içinde plansız çağrı sayısındaki düşüşü kendiniz görürsünüz.",
            },
            {
                soru: "Bakım kaydını nasıl tutmalıyız, karmaşık bir sistem mi gerekiyor?",
                cevap:
                    "Hayır, birkaç satırlık bir defter yeterlidir: hangi kalem, hangi tarihte, hangi bulguyla kontrol edildi ve bir sonraki kontrol ne zaman. Bu basit kayıt üç işe yarar — ertesi yılın planı sıfırdan değil geçen yılın üzerinden kurulur, tekrarlayan sorunlar (aynı noktada tekrar eden sızıntı gibi) desen olarak görünür hâle gelir ve mülk sahibi ya da sigorta bir kayıt istediğinde elde hazır belge bulunur. Bıraktığımız kalem-bulgu notları, bu defterin ilk sayfası olacak biçimde düzenlenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Yenimahalle'nin dağınık ve site yönetimsiz atölye dokusu ile görece eski yapı stoğu kamuya açık bilgidir; erteleme süresi-maliyet tablosu, kiracı-mülk sahibi kayıt yöntemi ve komşu koordinasyonu firma pratiğidir.",
    },
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Örümcek Platform ile Atölye Bakım Turu — Sincan-Ostim",
        giris:
            "Atölye bakım turunun en çok zorlandığı nokta, aslında yükseklik değil erişimdir: tezgah sıraları arasında bir metrelik boşluk, kapı yüksekliği iki metrenin altında bir ara bölme, ya da bir vinç rayının hemen altına sıkışmış bir aydınlatma armatürü. Standart bir makaslı platform bu noktalara girmez; şasesi geniştir, dönüş yarıçapı büyüktür ve dar bir kapıdan geçemez. Sepetli örümcek platform (paletli veya tekerlekli, katlanır kollu tip) bu boşluğu doldurur — dar bir kapıdan içeri girebilir, kolunu bir engelin üzerinden aşırıp arkasındaki noktaya uzatabilir ve zemin izini standart makaslıdan küçük tutar. Sincan-Ostim hattındaki atölyelerin çoğunda bakım rutini kurulurken ilk sorulan soru genelde makine kapasitesi değil, o atölyenin en dar geçişinin kaç santim olduğudur; çünkü rutinin bütün kalemleri erişilebilir değilse takvim kağıt üzerinde kalır. Bu sayfa, örümcek platformun atölye bakım turundaki yerini anlatıyor — hangi noktalarda gerekli olduğunu, hangi noktalarda standart makinenin yeterli olduğunu ve bu ayrımın planlı bir bakım gününe nasıl taşınacağını.",
        maddeler: [
            {
                baslik: "Ne zaman gerçekten gerekir",
                metin:
                    "Örümcek platform her atölyede zorunlu değildir; gerekliliği üç durumda netleşir. Birincisi dar geçiş: kapı, koridor veya tezgah arası genişlik standart makaslının şase ölçüsünün altındaysa başka seçenek kalmaz. İkincisi engelli erişim: hedef nokta bir boru hattı, bir kiriş veya bir raf sırasının arkasındaysa, kolun bu engeli aşıp ters yönden yaklaşması gerekir. Üçüncüsü zemin dayanımı: bazı eski atölye zeminlerinde ağır bir makaslının nokta yükü endişe yaratırken, dört noktaya yayılan ayaklı örümcek modeli daha hafif iz bırakır. Bu üç durumdan biri yoksa, standart akülü makaslı genelde daha ekonomik ve daha hızlı kurulan çözümdür.",
            },
            {
                baslik: "Bakım turuna nasıl eklenir",
                metin:
                    "Yıllık bakım takviminde örümcek platform tek başına bir gün değil, genel turun içinde tek bir duraktır. Envanter çıkarılırken hangi noktaların dar erişim gerektirdiği işaretlenir; bakım günü geldiğinde o gün için standart makaslı yerine (ya da onunla birlikte) örümcek platform planlanır. Pratikte bu, aynı günde iki farklı makine tipinin sırayla kullanılması anlamına gelebilir — önce açık alanlarda makaslı, sonra dar noktalarda örümcek. Bu geçiş önceden planlandığında ek zaman kaybı yaşanmaz; plansız karşılaşıldığında ise iş yarım kalır ve ikinci bir gün gerekir.",
            },
            {
                baslik: "Ertelemenin bu noktalarda daha pahalı olma nedeni",
                metin:
                    "Erişimi zor noktalar, tam da erişimi zor olduğu için genelde en çok ihmal edilen noktalardır — kimse merdivenle o köşeye ulaşmaya çalışmaz, dolayısıyla sorun uzun süre görülmez. Bu, ertelemenin faturasını büyütür: dar bir aralıktaki kablo tavası bağlantısı gevşediğinde fark edilmesi diğer noktalardan daha uzun sürer ve bulunduğunda genelde ilerlemiş durumdadır. Bakım rutinine erişimi zor noktaları özellikle işaretlemek, bu köşelerin görünmez kalma süresini kısaltır.",
            },
            {
                baslik: "Operatör ve yerleşim koordinasyonu",
                metin:
                    "Dar alanda çalışan bir makinenin yanında sabit tezgah, malzeme yığını veya geçiş güzergâhı varsa, iş günü öncesi kısa bir yerleşim kontrolü zaman kazandırır. Hangi tezgahın o gün için kaydırılacağı, hangi geçişin boşaltılacağı önceden bilinirse, makine kurulumu dakikalar içinde biter; plansız karşılaşılan bir engel ise kurulumun yarısını yeniden düzenlemeyi gerektirebilir.",
            },
            {
                baslik: "Standart makaslı ile birlikte kullanım",
                metin:
                    "Çoğu bakım gününde iki makine tipi birbirini tamamlar; örümcek platformun tek başına atölyeyi karşılaması beklenmez. Açık alanlardaki aydınlatma ve kablo tavası kalemleri standart makaslıyla hızlı biter; sadece dar geçiş veya engelli erişim gerektiren birkaç nokta örümcek platforma kalır. Bu ayrım, günün toplam süresini kısaltır çünkü her nokta için en uygun aracı seçmek, tek tip makineyle her yeri zorlamaktan hem hızlı hem güvenlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki makine tipinin atölyedeki tipik iş bölümü",
                paragraflar: [
                    "Aşağıdaki tablo, bir bakım gününde iki makine tipinin hangi noktalarda tercih edildiğini özetler. Kesin seçim, atölyenin kendi ölçüleri ve o günkü bulgu listesine göre belirlenir.",
                ],
                tablo: {
                    basliklar: ["Nokta tipi", "Tipik genişlik/engel", "Tercih edilen makine", "Gerekçe"],
                    satirlar: [
                        ["Açık tezgah aralığı", "Geniş, engelsiz", "Standart makaslı", "Hızlı kurulum, geniş sepet"],
                        ["Dar kapı/koridor", "Şase genişliğinin altı", "Örümcek platform", "Katlanır kol dar geçişten girer"],
                        ["Boru/kiriş arkası", "Doğrudan erişim yok", "Örümcek platform", "Kol engeli aşıp ters yönden ulaşır"],
                        ["Hassas zemin bölgesi", "Nokta yükü sınırlı", "Örümcek platform (ayaklı)", "Yük dört noktaya yayılır"],
                        ["Geniş depo koridoru", "Düz, engelsiz", "Standart makaslı", "Yatay hareket hızı yüksek"],
                    ],
                },
            },
            {
                baslik: "Ölçü almadan önce iki şey netleştirin",
                paragraflar: [
                    "Doğru makine seçimi için iki ölçü yeterlidir: en dar geçişin genişliği ve tavan yüksekliği. Bu ikisi bilindiğinde hangi modelin şaseye sığacağı ve hangi kol uzunluğunun hedefe ulaşacağı önceden hesaplanır; sahada ölçüp geri gönderme riski ortadan kalkar. Ölçüyü kesin bilmiyorsanız, kapı genişliğini santimetreye yuvarlamadan, biraz dar tahmin etmeniz daha güvenlidir — geniş tahmin edilen bir kapının sahada dar çıkması, günün en sık yaşanan aksaklığıdır.",
                    "İkinci nokta, hedef yüksekliğin gerçek konumu değil de tavan yüksekliği söylenmesidir. Bir armatür tavana değil, tavandan aşağı sarkan bir konsola bağlıysa gerçek çalışma yüksekliği daha düşüktür; bu fark, gereğinden büyük bir makinenin boşuna planlanmasını önler.",
                ],
            },
            {
                baslik: "Rutine erişim notu eklemek",
                paragraflar: [
                    "Bakım defterine bir kalem eklerken sadece ne yapıldığını değil, o noktaya nasıl ulaşıldığını da yazmak, ikinci yılın planlamasını hızlandırır. 'Bu nokta örümcek platform gerektirir' notu, bir sonraki tur öncesi doğru makinenin baştan planlanmasını sağlar ve sahada ikinci bir makine çağırma ihtiyacını ortadan kaldırır.",
                    "Bu notlar zamanla atölyenin kendi erişim haritasına dönüşür — hangi köşenin hangi ekipmanla çalışıldığı bilindiğinde, yeni bir bakım turu planlarken tahmine değil kayda dayanılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform ile makaslı platform arasındaki asıl fark nedir?",
                cevap:
                    "Fark erişim geometrisindedir, kapasitede değil. Makaslı platform dikey olarak yükselir ve sepeti geniştir, ama şasesi büyüktür ve dar bir kapıdan geçmez. Örümcek platform ise katlanabilir kollarla dar bir geçişten içeri girip, kolunu açarak hem yükselir hem yatayda bir engelin üzerinden aşabilir. Atölye içinde tezgah aralıkları ve dar koridorlar varsa örümcek platform, açık ve geniş alanlarda ise standart makaslı genelde daha ekonomik ve hızlı çözümdür. İki makine birbirinin yerine geçmez, birbirini tamamlar.",
            },
            {
                soru: "Atölyemizin en dar geçişi ne kadar olmalı ki örümcek platform sığsın?",
                cevap:
                    "Bu, modelin şase genişliğine göre değişir ve tek bir sayı vermek yanıltıcı olur — dar gövdeli paletli modeller standart bir kapı genişliğinden geçebilirken, daha büyük kapasiteli modeller daha geniş bir açıklık ister. Doğru yol, önce atölyenizin en dar geçişini ölçmeniz, sonra bu ölçüye uygun modelin size önerilmesidir. Ölçüyü paylaşırsanız, hem geçişten hem de hedef yükseklikten uygun modeli birlikte belirleriz; tahmine dayalı makine göndermeyiz.",
            },
            {
                soru: "Bu makine, bakım turunun tamamını mı yoksa sadece bir bölümünü mü kapsar?",
                cevap:
                    "Genelde bir bölümünü. Çoğu bakım gününde atölyenin açık alanları standart makaslıyla, sadece dar geçiş veya engelli erişim gerektiren birkaç nokta örümcek platformla çalışılır. Turun tamamını tek makineyle yapmaya çalışmak, ya açık alanlarda gereksiz yavaşlığa ya da dar noktalarda erişim sorununa yol açar. Envanter turunda hangi noktaların hangi makineyi gerektirdiğini işaretlemek, bakım gününün akışını baştan netleştirir.",
            },
            {
                soru: "Zemin hassas, ağır makine izin bırakır diye endişeleniyoruz; çözüm var mı?",
                cevap:
                    "Var — bu tam olarak ayaklı örümcek modellerin çözdüğü sorundur. Dört ayrık ayak üzerinde durduğu için yük, tek bir nokta yerine geniş bir alana yayılır ve hassas veya perdahlı zeminlerde standart tekerlekli bir makineden daha az iz bırakır. Zeminin tipini (epoksi, perdahlı beton, eski şap) önceden belirtirseniz, hem uygun lastik/ayak tipini hem de gerekirse koruyucu altlık ihtiyacını birlikte planlarız.",
            },
            {
                soru: "Operatörlü mü çalışıyor, kendi ekibimiz mi kullanabilir?",
                cevap:
                    "İkisi de mümkündür, ama örümcek platformun kol hareketi ve denge mantığı standart makaslıdan farklıdır; ilk kez kullanacak bir ekip için kısa bir yerinde bilgilendirme öneririz. Dar alanda çalışan bir makinede kolun engelle teması, sepetteki kişinin görüş açısını kolayca kaybetmesi gibi riskler standart kullanımdan daha belirgindir. Sık kullanılan bir kalemse kendi ekibinizin eğitimi zamanla kendini amorti eder; tek seferlik veya nadiren tekrarlanan bir iş için operatörlü çalışmak daha pratiktir.",
            },
            {
                soru: "Bu makineyi her yıl mı çağırmamız gerekiyor, yoksa sadece ihtiyaç oldukça mı?",
                cevap:
                    "Bu, atölyenizin dar erişim gerektiren nokta sayısına bağlıdır. Birkaç sabit noktanız varsa (örneğin belirli bir boru arkasındaki armatür), bu noktalar yıllık bakım turuna sabit bir kalem olarak eklenir ve her seferinde aynı planla çalışılır. Yeni bir dar nokta ortaya çıkarsa (örneğin yeni bir tezgah yerleşimi), envanter güncellenirken bu da listeye eklenir. Rutin kurulduktan sonra bu makine, yılın rastgele bir gününde değil, önceden bilinen bakım gününde ve önceden bilinen noktalarda devreye girer.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek platformun dar geçiş/engelli erişim ve zemin yükü avantajları genel ekipman mühendisliği bilgisidir; Sincan-Ostim atölye dokusuna uygulanışı firma pratiğidir. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Sincan-Ostim Bakım Turu için Nakliye ve Teslimat",
        giris:
            "Planlı bir bakım gününün en görünmez maliyeti nakliyedir; makinenin kendisi kadar konuşulmaz ama takvimin gerçekçi olup olmadığını belirleyen kalemlerden biridir. Sincan ile Ostim arasındaki mesafe, tek başına ele alındığında küçük bir ayrıntı gibi görünür; ama bir atölyenin yıllık bakım planı birkaç günü kapsıyorsa ve her gün ayrı bir nakliye gerektiriyorsa, bu küçük ayrıntı toplamda belirgin bir kaleme dönüşür. Nakliyeyi bakım rutininin bir parçası olarak planlamak — hangi günde hangi makinenin nereden nereye gideceğini önceden bilmek — hem maliyeti hem de günün başlama saatini öngörülebilir kılar. Bu sayfa, bakım turu sevkiyatının nasıl planlandığını, komşu işletmelerle paylaşılan nakliyenin nasıl işlediğini ve acil bir çağrıda sevkiyat süresinin neye göre değiştiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Planlı gün ile acil çağrı arasındaki sevkiyat farkı",
                metin:
                    "Planlı bir bakım gününde nakliye, takvime göre günler önceden ayarlanır: makine, gerekli saatte, doğru güzergâhla ve genelde diğer planlı işlerle çakışmayan bir zaman diliminde yola çıkar. Acil bir çağrıda ise sevkiyat, o anki makine müsaitliğine bağlıdır — en yakın uygun makine hangi işteyse, boşalma süresi bekleme süresine eklenir. İki durumun sevkiyat süresi bu yüzden aynı değildir ve bu farkı baştan söylemek, planlı bakımın acil çağrıya göre neden daha öngörülebilir olduğunu somutlaştırır.",
            },
            {
                baslik: "Sincan-Ostim hattının mesafe gerçeği",
                metin:
                    "Sincan ve Ostim, Ankara'nın batı-orta sanayi hattında birbirine yakın iki bölgedir ve bu yakınlık, aynı gün içinde birden fazla noktaya sırayla hizmet vermeyi mümkün kılar. Bir günde iki veya üç işletmenin bakım turu art arda planlandığında, makinenin bir noktadan diğerine geçiş süresi kısa kalır ve bu süre, işletmeler arasında paylaşılan nakliye maliyetinin küçülmesini sağlar. Bu, tek bir işletmenin talebiyle değil, aynı haftaya denk gelen birkaç talebin birlikte planlanmasıyla ortaya çıkan bir avantajdır.",
            },
            {
                baslik: "Ortak gün modeliyle nakliye paylaşımı",
                metin:
                    "Aynı sanayi adasındaki ya da yakın sokaklardaki birkaç işletme, bakım tarihlerini aynı haftaya, hatta aynı güne denk getirdiğinde makine tek bir sevkiyatla birden fazla noktaya hizmet verir ve nakliye kalemi işletme başına belirgin biçimde düşer. Bu düzeni kurmanın koşulu basittir: katılacak işletmelerin kabaca aynı hafta içinde uygun olması ve sıralamanın önceden netleşmesi. Talep sırasında bu niyeti belirtirseniz, komşu işletmelerle koordinasyonu ve sırayı birlikte kurarız.",
            },
            {
                baslik: "Teslimat saatinin üretim programıyla uyumu",
                metin:
                    "Nakliye planlaması sadece güzergâhla değil, teslimat saatinin üretim programına uyumuyla da ilgilidir. Vardiya başlangıcından hemen önce gelen bir makine, kurulum için üretim başlamadan önce boş bir pencere bulur; vardiya ortasında gelen aynı makine ise kurulum süresince üretim akışını kesintiye uğratabilir. Teslimat saatini üretim programınıza göre belirlemek, günün toplam süresini kısaltan basit ama sık atlanan bir ayrıntıdır.",
            },
            {
                baslik: "Erişim ve indirme koşullarını önceden bildirmek",
                metin:
                    "Bir makinenin ne kadar sürede indirilip kurulacağı, sadece mesafeye değil atölyenin giriş koşullarına da bağlıdır: kapı genişliği, rampa eğimi, park alanının durumu. Bu bilgiler teslimattan önce bilinirse şoför ve ekip doğru araçla ve doğru sırayla hazırlanır; sahada karşılaşılan bir dar kapı veya beklenmedik bir rampa, teslimat süresini planlanandan uzatan en sık nedendir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Nakliye planlamasında karar noktaları",
                paragraflar: [
                    "Aşağıdaki tablo, bir bakım gününün nakliye tarafında sorulan asıl soruları ve bunların sonucu neyi etkilediğini özetler.",
                ],
                tablo: {
                    basliklar: ["Karar noktası", "Soru", "Etkilediği şey"],
                    satirlar: [
                        ["Zamanlama", "Planlı mı, acil mi", "Bekleme süresi"],
                        ["Ortak gün", "Komşu işletme katılıyor mu", "İşletme başına maliyet"],
                        ["Teslimat saati", "Vardiya öncesi mi, ortası mı", "Üretim kesintisi"],
                        ["Erişim bilgisi", "Kapı/rampa ölçüsü paylaşıldı mı", "Kurulum süresi"],
                        ["Güzergâh", "Sincan mı, Ostim mi, ikisi mi", "Toplam sevkiyat süresi"],
                    ],
                },
            },
            {
                baslik: "Bir bakım turunda birden fazla makine gerekiyorsa",
                paragraflar: [
                    "Bazı bakım günlerinde tek makine yetmez — örneğin açık alan için standart makaslı, dar bir köşe için örümcek platform aynı gün gerekebilir. Bu durumda iki makinenin sevkiyatı tek seferde, birbirini takip edecek biçimde planlanır; ayrı ayrı çağrılan iki makine hem daha pahalı hem de koordinasyonu zor bir güne dönüşür. Birden fazla ihtiyacınız varsa bunu talep sırasında birlikte belirtmeniz, tek bir planlı gün kurmamızı sağlar.",
                    "Aynı mantık, bir işletmenin farklı bölümleri (örneğin ana atölye ve ek depo) için de geçerlidir — iki nokta aynı sevkiyat penceresinde art arda çalışılabiliyorsa, ayrı günlere bölmek yerine tek günde toplamak nakliyeyi tekilleştirir.",
                ],
            },
            {
                baslik: "Sevkiyat gecikmesinin gerçek nedenleri",
                paragraflar: [
                    "Sevkiyat gecikmeleri genelde üç nedenden biriyle açıklanabilir: önceki işin planlandığından uzun sürmesi, trafik veya hava koşulları, ya da teslimat noktasında beklenmedik bir erişim sorunu. İlk ikisi tahmin edilebilir ama tam kontrol edilemez; üçüncüsü ise önceden paylaşılan bilgiyle büyük ölçüde önlenebilir. Bu yüzden erişim bilgisini (kapı ölçüsü, park durumu, varsa asansör/rampa) teslimattan önce netleştirmek, gecikme riskini en çok azaltan tek adımdır.",
                    "Gecikme yaşandığında dürüst iletişim önemlidir: tahmini yeni saat, gerçek durum netleşir netleşmez bildirilir. Belirsizliği 'yolda' demekle geçiştirmek yerine, ne kadar geciktiğini ve nedenini söylemek, planlı günün üretim programınızla ilişkisini yönetmenizi kolaylaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sincan ile Ostim arasında nakliye süresi ne kadar tutuyor?",
                cevap:
                    "Kesin bir süre vermek yanıltıcı olur çünkü trafik, güzergâh ve makinenin bir önceki işten çıkış saati bunu etkiler; ama iki bölgenin birbirine yakınlığı, aynı gün içinde art arda birkaç noktaya hizmet vermeyi pratikte mümkün kılar. Planlı bir bakım günü için tarih ve saat netleştiğinde, o güne özgü gerçekçi bir zaman penceresi paylaşırız — genel bir ortalama yerine sizin planınıza göre bir tahmin veririz.",
            },
            {
                soru: "Komşu işletmelerle ortak nakliye nasıl kurulur, kim organize eder?",
                cevap:
                    "Genelde ilk adımı bir işletme atar: kendi bakım tarihini belirler ve komşularına aynı haftaya katılmak isteyip istemediklerini sorar. Katılım olduğunda, hangi işletmenin hangi saatte hazır olacağını ve sıralamayı biz kurarız — sizin yapmanız gereken tek şey, katılacak işletmelerin adını ve iletişim bilgisini iletmektir. Site yönetimi olan yerlerde bu koordinasyonu yönetimle birlikte de kurabiliriz.",
            },
            {
                soru: "Acil bir arızada aynı gün makine gelir mi?",
                cevap:
                    "Sincan-Ostim hattı sevkiyat açısından bize yakın olduğu için çoğu zaman evet, ama dürüst cevap bunun garanti edilemeyeceğidir. Makinelerin planlı işlere ayrıldığı yoğun dönemlerde en yakın uygun makinenin ne zaman serbest kalacağını saatiyle söyleriz; tutulamayacak bir 'hemen geliriz' sözü vermeyiz. Kritik kalemleri arıza beklemeden plana almak, bu belirsizliği ortadan kaldıran tek gerçek yoldur.",
            },
            {
                soru: "Atölyemizin kapısı dar, nakliye ve indirme nasıl planlanır?",
                cevap:
                    "Kapı genişliğini, varsa rampa eğimini ve park alanının durumunu önceden bildirmeniz, doğru makine tipinin ve doğru indirme sırasının baştan planlanmasını sağlar. Bu bilgi olmadan gelen bir sevkiyatta, sahada karşılaşılan dar bir kapı veya beklenmedik bir rampa, kurulumu planlanandan uzatan en sık nedendir. Ölçüleri talep sırasında paylaşırsanız, gerekirse örümcek platform gibi dar geçişe uygun bir alternatifi de birlikte değerlendiririz.",
            },
            {
                soru: "Aynı gün birden fazla makineye ihtiyacımız olursa nakliye nasıl işler?",
                cevap:
                    "İki makine aynı gün gerekiyorsa (örneğin açık alan için bir tip, dar bir köşe için başka bir tip), sevkiyatı tek seferde ve birbirini takip edecek biçimde planlarız; bu, ayrı ayrı çağrılan iki makineden hem daha ekonomik hem daha az koordinasyon gerektiren bir kurgudur. İhtiyacınızı talep sırasında birlikte belirtmeniz yeterlidir.",
            },
            {
                soru: "Teslimat saatini üretim programımıza göre ayarlayabilir miyiz?",
                cevap:
                    "Evet ve önerdiğimiz de budur. Vardiya başlamadan önceki pencereye denk getirilen bir teslimat, kurulumun üretim akışını kesmeden bitmesini sağlar; vardiya ortasına denk gelen aynı teslimat ise akışı bölebilir. Vardiya saatlerinizi ve varsa üretimin en durgun olduğu saati paylaşırsanız, teslimat penceresini buna göre planlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sincan-Ostim hattının coğrafi yakınlığı kamuya açık bilgidir; ortak gün modeli, teslimat saati planlaması ve erişim bilgisi uygulaması firma pratiğidir. Rakam ve süre uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Atölye Bakım Turunda Forklift ile İstifleme ve Kontrol",
        giris:
            "Bir atölyenin yıllık bakım rutini genelde yükseğe erişimle anılır, ama aynı takvimde forkliftin de kendi yeri vardır — hem bakım gününün hazırlık aşamasında hem de kendi başına bir kontrol kalemi olarak. Bakım turu öncesi raf sıraları arasında malzeme taşımak, ağır parçaları kaldırıp indirmek veya bir bölgeyi boşaltmak forkliftin işidir; bakım turunun kendisinde ise forkliftin mastı, çatalları ve raf sistemiyle teması kontrol listesine giren bir kalemdir. Sincan-Ostim hattındaki atölyelerde forklift genelde günlük operasyonun bir parçası olduğu için bakımı da günlük operasyonun gölgesinde kalır — sorun çıkana kadar gündeme gelmez. Oysa forklift, yükseğe erişim ekipmanlarıyla aynı mantıkla ele alınabilir: periyodik bir kontrol takvimine bağlandığında hem arıza riski azalır hem de ihtiyaç anında makine kiralamak yerine planlı bir günde iş bitirilir. Bu sayfa, forkliftin atölye bakım rutinindeki iki rolünü — hazırlık aracı ve kontrol kalemi olarak — anlatıyor.",
        maddeler: [
            {
                baslik: "Bakım gününün hazırlık aracı olarak forklift",
                metin:
                    "Yükseğe erişim gerektiren bir bakım turu başlamadan önce, çalışma alanının altındaki malzemenin taşınması gerekir — paletler kaydırılır, raf önündeki yığınlar toplanır, geçici olarak bir bölge boşaltılır. Bu hazırlık işi forkliftle yapıldığında, asıl bakım turu boşaltılmış ve erişilebilir bir alanda başlar. Hazırlığı atlayan bir bakım günü, turun ilk saatini malzeme kaydırmakla geçirir ve bu, planlanan sürenin belirgin bir kısmını yer.",
            },
            {
                baslik: "İstifleme kiralamasında kapasite seçimi",
                metin:
                    "Atölye içi istiflemede en sık karşılaşılan yanlış, gerçek ihtiyaçtan büyük kapasiteli bir forklift kiralamaktır — büyük makine dar koridorlarda manevra zorluğu çıkarır ve genelde gereksiz yakıt/enerji maliyeti getirir. Doğru seçim, taşınacak en ağır palet ile raf koridorunun genişliğine göre yapılır; iç mekân kullanımında elektrikli/akülü modeller, egzoz gazı çıkarmadıkları için kapalı atölyede tercih edilir.",
            },
            {
                baslik: "Forkliftin kendi periyodik kontrolü",
                metin:
                    "Forklift, düzenli çalışan bir ekipman olarak kendi aşınma kalemlerine sahiptir: hidrolik hortum ve bağlantılarda sızıntı, mast zincirlerinde gerginlik, çatal ucunda deformasyon, lastik/tekerlek aşınması. Bu kalemler günlük kullanımda fark edilmeyecek kadar yavaş ilerler ama periyodik bir gözle bakıldığında erken yakalanır. Atölyenin yıllık bakım takvimine forkliftin kendi kontrol turunu da eklemek, aynı mantığı — planlı kontrol, ertelenmiş arızadan ucuzdur — bu makineye de taşımak demektir.",
            },
            {
                baslik: "Raf sistemiyle temas noktaları",
                metin:
                    "Forklift ile raf sistemi arasındaki sürtünme, atölye bakım turunun sık gözden kaçan bir kalemidir. Çatalın raf ayağına sürtmesi, palet indirirken kirişe hafif çarpması zamanla raf yapısında görünmeyen bir yorulmaya yol açabilir. Bakım turunda raf ayaklarının ve alt kirişlerin görsel kontrolü, forkliftin kendi kontrolüyle birlikte planlandığında, bu iki kalem tek bir gözlemde birleşir ve ayrı bir tur gerektirmez.",
            },
            {
                baslik: "Ertelemenin forklift tarafındaki faturası",
                metin:
                    "Bir hidrolik sızıntının ertelenmesi, önce performans kaybına, sonra daha büyük bir parça değişimine dönüşür; aşınmış bir çatal ucu fark edilmeden kullanılmaya devam ederse palet güvenliğini riske atar. Bu kalemlerin çoğu, periyodik bir kontrolde erken ve ucuz biçimde yakalanır; arıza anında ise hem makinenin o gün devre dışı kalması hem de acil parça tedariki devreye girer — planlı bir kontrolün maliyetiyle kıyaslanamayacak kadar yüksek bir fatura.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forkliftin atölye bakım turundaki iki rolü",
                paragraflar: [
                    "Aşağıdaki tablo, forkliftin bir bakım gününde üstlendiği iki farklı görevi ve bunların takvimdeki yerini özetler.",
                ],
                tablo: {
                    basliklar: ["Rol", "Ne zaman devrede", "Tipik iş", "Takvimdeki yeri"],
                    satirlar: [
                        ["Hazırlık aracı", "Bakım günü başlamadan önce", "Alan boşaltma, malzeme kaydırma", "Aynı günün ilk saati"],
                        ["İstifleme", "Genel operasyon içinde", "Palet taşıma, raf yerleştirme", "İhtiyaç bazlı kiralama"],
                        ["Kontrol kalemi", "Yıllık bakım turu", "Hidrolik, mast, çatal kontrolü", "Yılda 1 tur"],
                        ["Raf teması gözlemi", "Yıllık bakım turu", "Ayak/kiriş görsel kontrolü", "Forklift kontrolüyle birlikte"],
                    ],
                },
            },
            {
                baslik: "Bakım günü öncesi alan hazırlığı",
                paragraflar: [
                    "Bir bakım turunun süresi, çoğu zaman makinenin hızından değil alanın hazır olup olmamasından etkilenir. Yükseğe erişim ekipmanının çalışacağı bölgenin altındaki malzemenin önceden kaydırılmış olması, turun ilk saatini boşa geçirmez. Bu hazırlığı forkliftle önceden yapmak isterseniz, bakım günüyle aynı sabaha ya da bir gün öncesine planlanabilir; talep sırasında belirtmeniz yeterlidir.",
                    "Hazırlık aşamasında dikkat edilecek tek nokta, boşaltılan malzemenin geçici olarak nereye konulacağıdır — rastgele bir köşeye yığılan malzeme, bu kez başka bir geçişi tıkayabilir. Yerleşim planınızı paylaşırsanız, hem boşaltma hem geçici depolama noktasını birlikte belirleriz.",
                ],
            },
            {
                baslik: "Kendi forkliftiniz varsa ne değişir",
                paragraflar: [
                    "Atölyenizin kendi forklifti varsa, bu sayfa size kiralama değil kontrol takvimi öneriyor demektir. Kendi makinenizin periyodik kontrolünü yıllık bakım turunuza eklemek, forkliftin kendi bakım defterini de aynı mantıkla tutmak anlamına gelir — hangi kalem, ne zaman kontrol edildi, hangi bulgu görüldü. Ek bir kapasiteye ihtiyaç duyduğunuz (örneğin büyük bir hazırlık işi veya kendi makinenizin bakımda olduğu dönem) durumlarda kiralama, sürekli değil ihtiyaç bazlı bir çözüm olarak devreye girer.",
                    "Bu iki modelin (sahiplik + ihtiyaç bazlı kiralama) birlikte kullanılması, çoğu atölye için en ekonomik yoldur — sürekli kullanım kendi makinenizde, dönemsel ekstra ihtiyaç kiralamada karşılanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bakım turu öncesi hazırlık için forklift kiralamak zorunda mıyız?",
                cevap:
                    "Zorunlu değil, ama alanınızda taşınacak yoğun malzeme varsa süreyi belirgin kısaltır. Küçük bir atölyede birkaç paletin elle kaydırılması yeterli olabilir; orta-büyük ölçekte ise forkliftle yapılan hazırlık, bakım turunun ilk saatini boşa geçirmemenizi sağlar. Alanınızın durumunu ve taşınacak malzeme miktarını paylaşırsanız, hazırlığın gerekip gerekmediğini birlikte değerlendiririz.",
            },
            {
                soru: "İç mekânda hangi forklift tipi tercih edilmeli?",
                cevap:
                    "Kapalı atölyede elektrikli/akülü modeller tercih edilir çünkü egzoz gazı çıkarmazlar ve içeride kullanım için tasarlanmışlardır — dizel bir forklift kapalı alanda hem havalandırma sorunu hem de gürültü yaratır. Kapasiteyi ise taşınacak en ağır palet belirler; gereğinden büyük bir makine, dar koridorlarda manevra sorunu çıkarır. Koridor genişliğinizi ve tipik palet ağırlığınızı paylaşırsanız uygun modeli birlikte belirleriz.",
            },
            {
                soru: "Forkliftin kendi bakımını ne sıklıkla kontrol ettirmeliyiz?",
                cevap:
                    "Kullanım yoğunluğuna göre değişir; sürekli çalışan bir forklift, ara sıra kullanılan bir makineden daha sık kontrol ister. Genel bir çerçeve olarak, hidrolik sızıntı ve mast zinciri gerginliği gibi kalemlerin yılda en az bir kez, yoğun kullanımda daha sık gözden geçirilmesi önerilir. Kullanım sıklığınızı paylaşırsanız, atölyenizin genel bakım takvimine uygun bir kontrol aralığı önereceğiz.",
            },
            {
                soru: "Raf sistemiyle forklift arasındaki temas neden bakım konusu?",
                cevap:
                    "Çünkü tek bir çarpma görünür bir hasar bırakmasa da, tekrarlayan hafif temaslar zamanla raf yapısında yorulmaya yol açabilir ve bu birikim, ani bir çökme riskiyle sonuçlanabilir. Bakım turunda raf ayaklarının ve alt kirişlerin görsel kontrolü, tam bu birikimi erken yakalamak içindir. Bu kontrolü forkliftin kendi kontrolüyle birlikte planlamak, ayrı bir tur gerektirmeden iki kalemi tek gözlemde toplar.",
            },
            {
                soru: "Kendi forkliftimiz var ama bazen yetmiyor; sadece o günler için kiralama mümkün mü?",
                cevap:
                    "Evet, bu en sık karşılaştığımız kullanım biçimidir. Yoğun bir hazırlık günü, kendi makinenizin bakımda olduğu bir dönem veya beklenmedik bir yük artışı için tek günlük ya da birkaç günlük kiralama yapılabilir. İhtiyacın ne zaman ve ne kadar süreceğini önceden bildirirseniz, planlı bakım gününüzle çakışmayacak biçimde ayarlarız.",
            },
            {
                soru: "Forklift bakımını da atölye bakım takvimimize nasıl ekleriz?",
                cevap:
                    "Envanter turunda diğer yüksek kalemlerle birlikte forkliftinizi de listeye ekleyin: hangi kontrol, hangi ayda yapılacak. Yıllık bakım gününüz belirlendiğinde forkliftin kontrolünü aynı güne ya da yakın bir tarihe denk getirmek, ayrı bir randevu gerektirmez ve bakım defterinize tek bir kayıt olarak girer. İsterseniz bu eklemeyi ilk bakım turunuzda birlikte yaparız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forkliftin periyodik kontrol kalemleri genel ekipman bakım mühendisliği bilgisidir; atölye bakım turuna entegrasyonu ve raf teması gözlemi firma pratiğidir. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform ile Atölye Periyodik Bakımı",
        giris:
            "Standart makaslı platform çoğu atölye bakım kalemini karşılar, ama bazı noktalar dikey değil eğik veya yatay bir yaklaşım ister — bir boru hattının altından geçip üzerine çıkmak, bir çelik kolonun yan yüzeyine ulaşmak, ya da bir vinç kirişinin altından kolu döndürerek üst yüzeyine bakmak gibi. Eklemli platform (boom lift), kolunun hem yükselip hem yatayda uzayabilmesi ve dönebilmesi sayesinde bu tür noktalara makaslının erişemediği açılardan ulaşır. Sincan-Ostim hattındaki atölyelerin bakım turlarında eklemli platform, her gün değil ama düzenli aralıklarla ihtiyaç duyulan bir kalemdir — genelde çatı altı çelik konstrüksiyon, vinç ray hattı çevresi veya birden fazla engelin art arda geldiği noktalarda devreye girer. Bu sayfa, eklemli platformun atölye periyodik bakımındaki yerini, hangi noktalarda makaslıya tercih edildiğini ve bu seçimin bakım takvimine nasıl yerleştiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Kol geometrisinin fark yarattığı noktalar",
                metin:
                    "Eklemli platformun asıl avantajı, kolun birden fazla eklemden bükülebilmesidir — bu sayede bir engelin altından geçip üzerinden dönerek hedefe ulaşabilir. Atölyede bu, çatı kirişinin alt yüzeyi ile üst yüzeyi arasında geçiş yapmak, ya da bir boru hattının arkasındaki bir noktaya önden değil yandan yaklaşmak gerektiğinde işe yarar. Standart makaslı sadece dikey yükselir; kolun yatay uzanımı ve dönüşü olmadığı için bu tür noktalara ulaşamaz.",
            },
            {
                baslik: "Vinç ray hattı ve çatı altı kontrolü",
                metin:
                    "Vinçli atölyelerde ray hattının, tamponların ve kiriş bağlantılarının periyodik görsel kontrolü, genelde eklemli platform gerektiren bir kalemdir çünkü hem yükseklik hem de kirişin farklı yüzeylerine ulaşma ihtiyacı bir arada bulunur. Bu kontrol, atölyenin yıllık bakım takviminde ayrı bir gün olarak değil, genel bakım turunun içinde bir durak olarak planlanır ve genelde yasal kaldırma ekipmanı kontrolleriyle aynı döneme denk getirilir.",
            },
            {
                baslik: "Makaslı ile eklemli arasında seçim",
                metin:
                    "Seçim basit bir kurala dayanır: hedef doğrudan yukarıdaysa ve engelsiz bir zeminden erişiliyorsa makaslı yeterlidir ve genelde daha ekonomiktir; hedef bir engelin arkasında, yandaysa veya birden fazla açıdan yaklaşım gerektiriyorsa eklemli platform gerekir. Bu ayrımı önceden yapmak, bakım gününde yanlış makineyle karşılaşıp işi yarım bırakma riskini ortadan kaldırır.",
            },
            {
                baslik: "Bu domainin ana konusu neden değil",
                metin:
                    "Bu sayfanın odağı atölye ve fabrika bakım rutinidir; eklemli platform bu rutinin içinde belirli noktalarda ihtiyaç duyulan bir araçtır, ama Sincan-Ostim atölye dokusunun çoğu bakım kalemi (aydınlatma, kablo tavası, emiş temizliği) dikey erişimle, yani standart makaslıyla karşılanır. Bu yüzden eklemli platformu her atölyeye önermiyoruz — çatı altı çelik konstrüksiyon, vinç hattı veya çok sayıda engelli nokta içeren atölyelerde gerçekten fayda sağlar.",
            },
            {
                baslik: "Bakım turuna dahil edilirken dikkat edilenler",
                metin:
                    "Eklemli platform planlanırken iki bilgi önemlidir: hedef noktanın tavana olan mesafesi ve o noktaya yaklaşırken kolun hangi yönden dönmesi gerektiği. Bu iki bilgi netse doğru kol uzunluğuna sahip model önceden belirlenir; net değilse sahada ölçüm yapılıp uygun olmayan bir makinenin geri gönderilmesi riski doğar. Envanter turunda bu noktaların not edilmesi, bir sonraki bakım döneminde doğru makinenin baştan planlanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Makaslı ve eklemli platform karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, atölye bakım turunda iki makine tipinin hangi durumlarda tercih edildiğini özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Makaslı platform", "Eklemli platform"],
                    satirlar: [
                        ["Hedef doğrudan yukarıda", "Uygun, ekonomik", "Gereksiz, daha pahalı"],
                        ["Hedef bir engelin arkasında", "Ulaşamaz", "Kol engeli aşar"],
                        ["Çatı kirişi üst/alt yüzey", "Sınırlı", "Uygun (dönüş imkânı)"],
                        ["Geniş açık alan, çok nokta", "Hızlı, uygun", "Gereksiz yavaş"],
                        ["Vinç ray hattı çevresi", "Kısmen yeterli", "Genelde uygun"],
                    ],
                },
            },
            {
                baslik: "Bu makineyi ne zaman değerlendirmelisiniz",
                paragraflar: [
                    "Atölyenizde şu üç sorudan biri 'evet' ise eklemli platformu değerlendirmenizi öneririz: çatı altı çelik yapınızda üst ve alt yüzeye ayrı ayrı erişim gerekiyor mu, bir vinç ray hattınız var mı, ya da hedef noktalarınızın çoğu bir boru/kiriş gibi engelin arkasında mı. Bu üçünden hiçbiri geçerli değilse, atölyenizin bakım turu büyük olasılıkla standart makaslıyla tamamen karşılanır ve eklemli platforma ihtiyaç duymazsınız.",
                    "Emin değilseniz, envanter turunuzu birlikte çıkarırız ve hangi noktaların hangi makineyi gerektirdiğini yerinde belirleriz — gereksiz bir makine kiralamanızı istemeyiz.",
                ],
            },
            {
                baslik: "Kaldırma ekipmanı kontrolleriyle birlikte planlama",
                paragraflar: [
                    "Vinçli atölyelerde ray hattı ve kiriş kontrolleri genelde yasal bir periyoda tabidir. Eklemli platform ihtiyacınız bu kontrolle örtüşüyorsa, iki işi aynı güne denk getirmek hem nakliyeyi hem de üretim duruşunu tekilleştirir. Kaldırma ekipmanı kontrol tarihinizi bize bildirirseniz, bakım turunu bu tarihe göre planlarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizde vinç yok; eklemli platforma yine de ihtiyacımız olur mu?",
                cevap:
                    "Vinç olmasa da, çatı altı çelik konstrüksiyonunuzda boru hattı, havalandırma kanalı gibi engellerin arkasında kalan noktalar varsa eklemli platform işe yarar. Ama atölyenizin bakım kalemleri (aydınlatma, kablo tavası, emiş ağzı) genelde doğrudan yukarıdaysa, standart makaslı yeterli ve daha ekonomiktir. Envanter turunda hangi noktaların engelli olduğunu birlikte belirleriz; gereksiz yere eklemli platform önermeyiz.",
            },
            {
                soru: "İki makine tipini aynı gün kullanmak mümkün mü?",
                cevap:
                    "Evet ve pratikte sık yapılan bir kurgudur. Açık alanlardaki kalemler standart makaslıyla, sadece engelli birkaç nokta eklemli platformla çalışılır. Bu durumda sevkiyatı tek seferde, iki makinenin art arda geleceği biçimde planlarız; ihtiyacınızı talep sırasında birlikte belirtmeniz yeterlidir.",
            },
            {
                soru: "Eklemli platform kirişin üstüne çıkabilir mi?",
                cevap:
                    "Kolun dönüş açısı ve uzunluğu yeterliyse evet, sepet kirişin üst yüzeyine kolun yandan dönmesiyle ulaşabilir — bu, standart makaslının yapamadığı bir harekettir. Ancak her model aynı dönüş açısına sahip değildir; hedef noktanın tavana mesafesini ve kirişin genişliğini paylaşırsanız, bu harekete uygun kol uzunluğuna sahip modeli önceden belirleriz.",
            },
            {
                soru: "Bu makine atölye içinde mi yoksa daha çok açık sahada mı kullanılır?",
                cevap:
                    "İkisinde de kullanılabilir, ama atölye içi kullanımda tavan yüksekliği ve kapı genişliği önemli bir sınırdır — bazı eklemli modeller büyük gövdelidir ve kapalı alana sığmayabilir. İç mekân kullanımı planlıyorsanız, atölyenizin kapı ve tavan ölçülerini paylaşmanız, sığacak model aralığını baştan netleştirir.",
            },
            {
                soru: "Yasal vinç kontrolüyle bu makinenin ilişkisi nedir?",
                cevap:
                    "Doğrudan bir ilişkisi yoktur — kaldırma ekipmanı kontrolleri kendi mevzuatına tabidir ve bu, ayrı bir süreçtir. Eklemli platform, o kontrol sırasında ray hattına ve kirişe erişim sağlayan bir araçtır; kontrolün kendisini biz yapmayız, erişimi sağlarız. Kontrol tarihiniz belirlendiğinde, eklemli platform ihtiyacınızı aynı güne planlamak isterseniz bunu birlikte kurarız.",
            },
            {
                soru: "Hangi durumda eklemli platform yerine örümcek platform önerirsiniz?",
                cevap:
                    "İki makine farklı problemleri çözer: eklemli platform büyük gövdeli olduğu için geniş açık alanlarda kol menzilinden faydalanır; örümcek platform ise dar bir kapıdan geçip küçük bir alanda çalışması gerektiğinde tercih edilir. Hedef nokta hem engelli hem de dar bir geçişin arkasındaysa, örümcek platform genelde daha uygun çözümdür. Noktanızın hem erişim genişliğini hem engel durumunu paylaşırsanız doğru makineyi birlikte seçeriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun kol geometrisi ve kullanım alanları genel ekipman bilgisidir; atölye bakım rutinine entegrasyonu firma pratiğidir. Kaldırma ekipmanı kontrolleri ilgili mevzuata tabidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Atölye İç Mekân Bakım Rutini için Platform Kiralama",
        giris:
            "İç mekân bakımı, açık sahadan farklı kurallarla işler ve bu farkı görmeyen bir bakım planı, ilk günden sorun çıkarır. Kapalı bir atölyede egzoz gazı üreten bir makine kullanmak havalandırma zorlar, tavan yüksekliği dışarıdakinden düşüktür, zemin genelde beton veya epoksi kaplıdır ve iz bırakmayan lastik önem kazanır, geçişler dardır ve şase ölçüsü kritikleşir. Sincan-Ostim hattındaki atölyelerin büyük bölümü tam da bu profile uyar — kapalı, orta yükseklikte, dar koridorlu üretim alanları. Bu sayfa, iç mekân bakım rutininin nasıl kurulduğunu, hangi makine tipinin hangi koşulda doğru seçim olduğunu ve iç mekânda ertelenen bakımın neden dış mekândakinden farklı bir hızda büyüdüğünü anlatıyor. Bu, domainin ana konusudur ve atölye bakım takviminin çekirdeğini oluşturur.",
        maddeler: [
            {
                baslik: "Egzozsuz makine zorunluluğu",
                metin:
                    "Kapalı bir atölyede içten yanmalı bir makine çalıştırmak, havalandırma sistemine ek bir yük bindirir ve çalışanlar için solunum riski oluşturur — bu, tercih değil güvenlik meselesidir. İç mekân bakım turlarında akülü/elektrikli makaslı ve eklemli platformlar tercih edilir; bu makineler sessiz çalışır, egzoz gazı çıkarmaz ve genelde daha kompakt şaseye sahiptir. Atölye içindeki her makine talebinde iç mekân kullanımı olduğunu belirtmek, doğru güç tipinin baştan planlanmasını sağlar.",
            },
            {
                baslik: "Tavan yüksekliği ve şase ölçüsü dengesi",
                metin:
                    "Atölye tavanları genelde dört ile yedi metre bandında olur; bu, çalışma yüksekliği olarak altı ile dokuz metre sınıfına denk gelir ve çoğu iç mekân işi bu bantta karşılanır. Ancak tavan yüksekliği ile şase ölçüsü ters orantılı çalışır: daha yüksek sepet için genelde daha geniş ve ağır bir şase gerekir, bu da dar bir koridorda manevra sorununa yol açabilir. Doğru seçim, hem hedef yükseklik hem de en dar geçişin genişliği birlikte değerlendirilerek yapılır.",
            },
            {
                baslik: "Zemin tipi ve iz bırakmama",
                metin:
                    "Atölye zeminleri epoksi, perdahlı beton veya eski şap olabilir ve her biri farklı bir lastik seçimini gerektirir. Standart siyah lastikli bir makine, perdahlı bir zeminde belirgin iz bırakabilir; iz bırakmayan (beyaz/gri dolgu) lastikli modeller bu riski azaltır. Zemininizin tipini ve varsa hassasiyetini (yeni döşenmiş, boyanmış) önceden bildirmeniz, doğru lastik tipinin baştan seçilmesini sağlar ve sahada iz sorunu yaşamanızı önler.",
            },
            {
                baslik: "İç mekânda ertelemenin daha hızlı büyümesi",
                metin:
                    "Kapalı bir alanda bakım ertelendiğinde etkisi, açık sahadakinden farklı yayılır çünkü hava sirkülasyonu sınırlıdır: tıkanan bir emiş kanalı içeride biriken tozu ve nemi daha hızlı yoğunlaştırır, gecikmiş bir aydınlatma bakımı kapalı alanda görüş kalitesini daha belirgin düşürür. Bu yüzden iç mekân bakım kalemleri, açık saha kalemlerine göre erteleme toleransı daha dar tutulmalıdır — aynı kalem dışarıda altı ay bekleyebilirken içeride üç ayda fark yaratabilir.",
            },
            {
                baslik: "İç mekân bakım turunun tipik kalemleri",
                metin:
                    "Bir atölyenin iç mekân bakım turu genelde beş kalem etrafında döner: aydınlatma armatürleri, kablo tavası ve elektrik hattı, emiş/havalandırma ağızları, çatı altı çelik yüzeyler ve varsa vinç/raf sistemi çevresi. Bu kalemler tek bir günde, tek bir makineyle (gerekirse ikinci bir tip eklenerek) toplanabilir; ayrı ayrı çağrıldığında hem maliyet hem üretim duruşu katlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân makine seçim tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, atölye koşuluna göre tipik makine tercihini özetler. Kesin seçim, tavan yüksekliği, geçiş genişliği ve zemin tipi birlikte değerlendirilerek yapılır.",
                ],
                tablo: {
                    basliklar: ["Koşul", "Tipik makine", "Güç tipi", "Lastik/ayak"],
                    satirlar: [
                        ["Geniş koridor, 4-7 m tavan", "Akülü makaslı", "Elektrikli", "İz bırakmayan"],
                        ["Dar kapı/koridor", "Örümcek platform", "Elektrikli/hibrit", "İz bırakmayan"],
                        ["Engelli nokta, çatı altı", "Elektrikli eklemli", "Elektrikli", "İz bırakmayan"],
                        ["Hassas/perdahlı zemin", "Ayaklı örümcek", "Elektrikli", "Geniş taban, düşük nokta yükü"],
                        ["Malzeme taşıma/hazırlık", "Akülü forklift", "Elektrikli", "Standart iç mekân lastiği"],
                    ],
                },
            },
            {
                baslik: "İç mekân bakım turunu tek güne sığdırmak",
                paragraflar: [
                    "İç mekân kalemlerinin çoğu benzer yükseklik bandında olduğu için tek bir makineyle, tek bir günde toplanabilir. Turun verimliliği, sıralamaya bağlıdır: genelde en uzak köşeden başlanıp kapıya doğru ilerlenir, böylece makine geriye dönüş yapmaz. Hangi kalemin nerede olduğunu gösteren bir kroki (elle çizilmiş bile olsa) paylaşırsanız, turun sırasını önceden planlarız ve sahada rota belirlemekle zaman kaybetmeyiz.",
                    "Bazı atölyelerde iç mekân ile dış mekân (çatı, cephe) kalemleri aynı takvimde ama farklı makinelerle çalışılır — iç mekân akülü makaslıyla, dış mekân farklı bir güç tipiyle. Bu ayrımı baştan yapmak, hangi makinenin ne zaman geleceğini netleştirir.",
                ],
            },
            {
                baslik: "İç mekân bakımının erteleme faturası — somut örnekler",
                paragraflar: [
                    "Emiş ağzı temizliği ertelendiğinde motor daha çok enerji harcayarak aynı işi yapmaya çalışır ve bu fark aylık tüketime yansır; fark küçük başlar ama birikir. Aydınlatma bakımı ertelendiğinde armatürlerin bir kısmı sönmüş biçimde çalışılmaya devam edilir ve kalan armatürler daha az alanı, daha zayıf aydınlatır — bu, hem iş kalitesini hem çalışan güvenliğini etkiler. Kablo tavası kontrolü ertelendiğinde gevşeyen bir bağlantı, kapalı alanda fark edilmesi daha zor bir noktaya kayabilir.",
                    "Bu üç örneğin ortak noktası, kapalı alanın etkiyi gizlemesidir — açık sahada rüzgar ve gün ışığı bazı sorunları görünür kılarken, kapalı atölyede aynı sorun sessizce büyür. Bu yüzden iç mekân bakım turunun düzenli aralıklarla tekrarlanması, açık saha kalemlerinden daha kritik bir alışkanlıktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İç mekânda hangi makine tipi zorunlu, hangisi tercih meselesi?",
                cevap:
                    "Egzozsuz (elektrikli/akülü) güç tipi kapalı alanda zorunludur — içten yanmalı bir makine havalandırmayı zorlar ve solunum riski oluşturur, bu güvenlik meselesidir, tercih değil. Makine tipi (makaslı, örümcek, eklemli) ise tercih meselesidir ve atölyenizin tavan yüksekliği, geçiş genişliği ve engel durumuna göre belirlenir. Ölçülerinizi paylaşırsanız uygun tipi birlikte seçeriz; güç tipinde ise iç mekân kullanımı belirttiğiniz an elektrikli/akülü dışında bir seçenek sunmayız.",
            },
            {
                soru: "Zeminimiz yeni döşendi, iz bırakılmasından endişeliyiz; ne yapılabilir?",
                cevap:
                    "İz bırakmayan (beyaz/gri dolgu) lastikli modeller standart siyah lastikten belirgin daha az iz bırakır ve yeni döşenmiş zeminlerde önerdiğimiz seçenektir. Zemininizin ne kadar süre önce döşendiğini ve tipini (epoksi, boyalı beton, self-leveling) bildirirseniz, gerekirse ek koruyucu altlık kullanımını da değerlendiririz. Standart lastikli bir makine ile riske girmemenizi öneririz.",
            },
            {
                soru: "Atölyemizin tavanı düşük, standart makaslı sığar mı?",
                cevap:
                    "Çoğu zaman evet — dört ile yedi metre bandındaki tavan yükseklikleri, standart akülü makaslının rahatlıkla karşıladığı bir aralıktır. Asıl kısıtlayan genelde tavan değil, geçiş genişliğidir; dar bir kapı veya koridor varsa makaslının şasesi sığmayabilir ve bu durumda örümcek platform gündeme gelir. Hem tavan yüksekliğinizi hem en dar geçişinizi paylaşırsanız uygun modeli netleştiririz.",
            },
            {
                soru: "İç mekân bakım turunu ne sıklıkla tekrarlamalıyız?",
                cevap:
                    "Kapalı alanın etkiyi gizleme eğilimi nedeniyle iç mekân kalemlerinin çoğu yılda bir kez, tozlu veya üç vardiyalı üretimde yılda iki kez gözden geçirilmesi önerilir. Kesin sıklık, üretim yoğunluğunuza ve atölyenizin yaşına bağlıdır — ilk turun bulguları, bir sonraki turun ne zaman olacağını genelde kendiliğinden gösterir. İlk turunuzu birlikte planlayıp, bulgulara göre bir sonraki tarihi netleştiririz.",
            },
            {
                soru: "Aynı gün hem iç mekân hem dış mekân (çatı) bakımı yapılabilir mi?",
                cevap:
                    "Bazı durumlarda evet, ama genelde farklı makine tipleri gerektirdiği için ayrı planlanması daha verimlidir. İç mekân akülü bir makineyle, dış mekân (çatı, cephe) farklı bir güç ve erişim tipiyle çalışılabilir. İkisini aynı haftaya, ardışık günlere denk getirmek nakliye kalemini paylaştırır; aynı güne sığdırmayı zorlamak ise genelde bir tarafın yarım kalmasına yol açar. İhtiyacınızı paylaşırsanız en verimli sıralamayı birlikte kurarız.",
            },
            {
                soru: "İç mekân bakımı için özel bir güvenlik önlemi gerekir mi?",
                cevap:
                    "Kapalı alanda çalışma, açık sahaya göre bazı ek dikkat gerektirir: havalandırmanın çalışır durumda olması (özellikle boya veya kimyasal madde bulunan bölgelerde), diğer üretim faaliyetleriyle çakışmanın önlenmesi ve dar alanda makine ile personel arasındaki görüş hattının korunması. Bu önlemler, iş öncesi kısa bir sahaya uyum görüşmesiyle netleştirilir; atölyenizin özel koşulları varsa (kimyasal depolama, hassas ekipman) önceden bildirmeniz planı buna göre şekillendirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Egzozsuz makine gerekliliği ve zemin/lastik uyumu genel ekipman mühendisliği bilgisidir; Sincan-Ostim atölye dokusuna uygulanışı ve erteleme faturası örnekleri firma pratiğidir. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montajında Platform Kiralama — Dürüst Kapsam Notu",
        giris:
            "Bu sayfayı ararken muhtemelen yeni bir çelik yapının montajı için ekipman arıyorsunuzdur; dürüst olmak gerekirse bu, bizim ana uzmanlık alanımız değil. Sincan-Ostim hattındaki işimizin çekirdeği, mevcut atölye ve fabrika yapılarının periyodik bakımıdır — montaj değil bakım, yeni inşaat değil mevcut tesisin rutini. Bu iki iş birbirine benzese de farklı bir yaklaşım gerektirir: montaj işi genelde yoğun ekip koordinasyonu, kaynak/vida işlemleriyle eş zamanlı çalışma ve değişken bir saha düzeni ister; bizim uzmanlaştığımız bakım işi ise sabit bir yapıda, periyodik ve tek kişilik-küçük ekipli işlerde yoğunlaşır. Bu sayfa, elimizdeki ekipmanın çelik konstrüksiyon montajında nerede işe yarayabileceğini dürüstçe anlatıyor, ama büyük ölçekli montaj projeleri için özel montaj ekipmanı ve deneyimi olan firmalara yönlenmenizi öneriyoruz.",
        maddeler: [
            {
                baslik: "Elimizdeki ekipmanın montajda karşıladığı sınırlı iş",
                metin:
                    "Standart makaslı ve eklemli platformlarımız, küçük ölçekli montaj destek işlerinde (örneğin mevcut bir çelik yapıya ek bir braket takmak, bir bağlantı noktasını kontrol etmek) kullanılabilir. Ancak büyük çaplı bir çelik iskelet montajı — çoklu kaynak istasyonu, ağır profil kaldırma, vinçle koordineli çalışma — bizim filomuzun ve deneyimimizin kapsamı dışındadır. Bu tür işler için özel vinç ve montaj platformu deneyimi olan firmalarla çalışmanızı öneririz.",
            },
            {
                baslik: "Bakım ile montaj arasındaki fark neden önemli",
                metin:
                    "Bakım işinde çalışma alanı sabittir, iş planı önceden bellidir ve genelde tek bir kişi ya da küçük bir ekip görev yapar. Montaj işinde ise saha sürekli değişir, birden fazla ekip aynı anda farklı noktalarda çalışır ve ekipman ihtiyacı güne göre kayar. Bu fark, sadece ekipman seçimini değil operasyonel planlamayı da değiştirir — bakım işinde iyi olan bir firma, montaj koordinasyonunda otomatik olarak iyi olmaz.",
            },
            {
                baslik: "Montaj sonrası bakım devri bize uygun",
                metin:
                    "Yeni bir çelik yapı montajı tamamlandıktan sonra, o yapının periyodik bakımı tam olarak bizim uzmanlık alanımıza girer. Montaj bitince devreye alma sonrası ilk yıl kontrolü, garanti dönemi kusur taraması ve sonraki yılların rutin bakım takvimi kurulabilir. Yani montaj sürecinde değil, montaj bittikten sonraki hayat döngüsünde yanınızda olabiliriz.",
            },
            {
                baslik: "Küçük tadilat/ek işlerinde katkımız",
                metin:
                    "Büyük bir montaj projesi değil de mevcut bir çelik konstrüksiyona küçük bir ek yapılıyorsa (örneğin bir platform genişletmesi, bir merdiven eklenmesi) ve bu iş kısa süreli, sınırlı kapsamlıysa, standart platformlarımızla erişim desteği sağlayabiliriz. Bu durumda işin kapsamını, kaynak/kesme işlemi içerip içermediğini ve süresini önceden netleştirmemiz gerekir.",
            },
            {
                baslik: "Doğru yönlendirme",
                metin:
                    "Büyük ölçekli bir çelik konstrüksiyon montaj projeniz varsa, size dürüstçe söyleyebileceğimiz şey şudur: bu iş için özel montaj ekipmanı (ağır vinç, montaj iskelesi) ve saha koordinasyon deneyimi olan bir firmayla çalışmanız daha doğru sonuç verir. Projenizin kapsamını paylaşırsanız, bizim katkı sağlayabileceğimiz bir parça varsa (örneğin sonradan bakım devri) bunu netleştirir, gerekirse doğru yönlendirmeyi de yaparız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj ve bakım işinin karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki iş türü arasındaki temel farkları ve bizim hangi tarafta konumlandığımızı gösterir.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Montaj işi", "Bakım işi (bizim alanımız)"],
                    satirlar: [
                        ["Saha düzeni", "Sürekli değişken", "Sabit"],
                        ["Ekip büyüklüğü", "Çok kişili, çok istasyonlu", "Küçük ekip / tek kişi"],
                        ["Ekipman ihtiyacı", "Ağır vinç, özel montaj platformu", "Standart makaslı/eklemli"],
                        ["Zaman ufku", "Proje süresi (haftalar/aylar)", "Periyodik (yılda bir-iki gün)"],
                        ["Bizim uzmanlığımız", "Sınırlı", "Ana konumuz"],
                    ],
                },
            },
            {
                baslik: "Montaj sonrası bakım devri nasıl işler",
                paragraflar: [
                    "Yeni bir çelik yapı devreye alındığında, montaj yapan firma sahadan ayrıldıktan hemen sonra bir envanter turu çıkarılır — bu, bizim güçlü olduğumuz alandır. Bağlantı noktaları, askı sistemleri ve erişim yolları bu turda kaydedilir ve garanti dönemi bittikten sonraki ilk yılın bakım planı buradan kurulur.",
                    "Bu devir sürecinde montaj firmasından kalan teknik dokümanları (bağlantı şeması, kullanılan malzeme listesi) elimizde bulundurmayız — bunlar sizde kalmalıdır; bizim işimiz bu dokümanlara dayanarak değil, sahada gördüğümüz fiziksel duruma dayanarak bakım planı kurmaktır.",
                ],
            },
            {
                baslik: "Ne zaman bize, ne zaman montaj firmasına başvurmalısınız",
                paragraflar: [
                    "Eğer iş henüz montaj aşamasındaysa, kaynak/kesme işlemi içeriyorsa veya ağır profil kaldırma gerektiriyorsa, montaj deneyimi olan bir firmaya başvurmanız doğru olur. Eğer iş, tamamlanmış bir yapının periyodik kontrolü, küçük bir erişim desteği veya montaj sonrası bakım devriyse, bu bizim alanımızdır.",
                    "Emin değilseniz, işin kapsamını kısaca anlatın — dürüstçe bizim işimiz mi değil mi söyleriz ve gerekirse doğru yöne yönlendiririz. Kapsamı bilerek uygun olmadığımız bir işi üstlenmeyiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çelik konstrüksiyon montajı yapıyor musunuz?",
                cevap:
                    "Hayır, biz montaj firması değiliz — ana işimiz mevcut atölye ve fabrika yapılarının periyodik bakımı için platform kiralamadır. Büyük ölçekli bir çelik iskelet montajı için ağır vinç, özel montaj ekipmanı ve saha koordinasyon deneyimi olan bir firmayla çalışmanız gerekir. Bu konuda size dürüst olmayı, yanlış beklenti yaratmaktan daha doğru buluyoruz.",
            },
            {
                soru: "O zaman standart platformlarınız montajda hiç işe yaramaz mı?",
                cevap:
                    "Küçük ölçekli destek işlerinde (mevcut bir yapıya küçük bir ek, bir bağlantı noktası kontrolü, kısa süreli erişim ihtiyacı) yardımcı olabiliriz. Ancak çok istasyonlu, çok ekipli büyük bir montaj projesinde standart makaslı ve eklemli platformlarımız yeterli kapasiteyi ve koordinasyonu sağlamaz. İşinizin kapsamını paylaşırsanız, bizim katkı sağlayabileceğimiz bir parça olup olmadığını dürüstçe söyleriz.",
            },
            {
                soru: "Montaj bitti, şimdi bakımını size devredebilir miyiz?",
                cevap:
                    "Evet, bu tam olarak bizim güçlü olduğumuz alan. Montaj tamamlandıktan sonra bir envanter turu çıkarır, garanti dönemi boyunca kusur taraması yapar ve sonraki yılların periyodik bakım takvimini kurarız. Montaj sürecine dahil olmasak da, yapının hayatı boyunca sürecek bakım ilişkisi bizim asıl uzmanlığımızdır.",
            },
            {
                soru: "Montaj firmanız yok, önerebileceğiniz biri var mı?",
                cevap:
                    "Belirli bir firmayı önermiyoruz çünkü bu, bizim doğrulayabileceğimiz bir alan değil — ağır vinç ve montaj deneyimi olan firmaları değerlendirirken referans projelerini ve ekipman kapasitelerini kendiniz kontrol etmenizi öneririz. Bizden isteyebileceğiniz şey, montaj tamamlandıktan sonraki bakım planlamasıdır; bu aşamada memnuniyetle devreye gireriz.",
            },
            {
                soru: "Kaynak işlemi içeren bir işte platformunuzu kullanabilir miyiz?",
                cevap:
                    "Kaynak veya kesme işlemi, platformun sepetinde yapılacaksa özel önlemler (yanmaz zemin koruması, kıvılcım riski değerlendirmesi) gerektirir ve bu, standart bakım kullanımından farklı bir risk profilidir. Böyle bir iş için önce kapsamı netleştirmemiz, gerekirse bu tür işlere uygun ekipman ve prosedürü olan bir firmayla çalışmanızı önermemiz gerekebilir. Kapsamı paylaşırsanız dürüst bir değerlendirme yaparız.",
            },
            {
                soru: "Sizinle çalışmanın montaj firmasına göre bir avantajı var mı?",
                cevap:
                    "Montaj işi için değil, ama montaj sonrası uzun vadeli bakım ilişkisi için evet — biz mevcut bir yapının yıllar boyunca nasıl davrandığını takip eden, kaydeden ve bu kayda göre plan kuran bir yaklaşımla çalışıyoruz. Montaj firmaları genelde projeyi teslim edip ayrılır; bizim işimiz teslimden sonra başlar. İki hizmet birbirini tamamlar, birbirinin yerine geçmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Montaj ve bakım işlerinin operasyonel farkları genel sektör bilgisidir; bu sayfa firmanın gerçek kapsam sınırını dürüstçe belirtir, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım Silosu Bakımı için Platform Kiralama — Dürüst Kapsam Notu",
        giris:
            "Sincan-Ostim hattı, adından da anlaşılacağı gibi sanayi ve imalat ağırlıklı bir bölgedir; tarımsal depolama tesisleri ve silolar bu hattın ana dokusunda değildir. Bu yüzden bu sayfayı dürüstçe kısa tutuyoruz: silo bakımı konusunda derin bir saha deneyimimiz yok ve bunu iddia etmiyoruz. Buna karşın, elimizdeki standart yükseğe erişim ekipmanı — makaslı ve eklemli platformlar — bir silonun dış yüzeyine, merdiven-basamak sistemine veya çevresindeki servis platformlarına erişim gerektiren genel bakım işlerinde kullanılabilir; bu, siloya özgü bir uzmanlık değil, genel yükseğe erişim hizmetidir. Eğer siloya özgü bir iş (iç hacim temizliği, tahıl akışı sorunları, kapasiteye özel donanım) söz konusuysa, bu alanda uzmanlaşmış bir firmayla çalışmanızı öneririz.",
        maddeler: [
            {
                baslik: "Neyi yapabiliriz, neyi yapamayız",
                metin:
                    "Yapabileceğimiz iş, bir silonun dışına erişim gerektiren genel bakım kalemleridir: dış yüzey kontrolü, merdiven ve platform bağlantılarının görsel muayenesi, dış aydınlatma veya kablo hattı erişimi. Yapamayacağımız veya deneyimimiz olmayan iş ise siloya özgü teknik konulardır — iç hacim havalandırması, tahıl akış sistemleri, tozla patlama riski taşıyan alanlarda özel ekipman gerektiren çalışmalar. Bu ayrımı baştan netleştirmek, yanlış beklentiyle çalışmaya başlamaktan daha doğrudur.",
            },
            {
                baslik: "Bölgede az görülen bir talep",
                metin:
                    "Sincan-Ostim hattında talep ettiğimiz işlerin büyük çoğunluğu atölye ve fabrika bakımıdır; tarım silosu talebi bölgede nadiren karşımıza çıkar. Bu, iş yapamayacağımız anlamına gelmez — sadece bu konuda derin bir tekrar deneyimimiz olmadığı anlamına gelir. Silo bakımıyla ilgili sık tekrarlanan bir işiniz varsa, bu alanda düzenli çalışan bir firmayla kurulacak ilişki muhtemelen daha verimli olur.",
            },
            {
                baslik: "Dış erişim ihtiyacında değerlendirebileceğimiz durum",
                metin:
                    "Silonun dış cephesinde tek seferlik bir kontrol, boya kontrolü veya aydınlatma bakımı gibi genel bir iş varsa, standart makaslı veya eklemli platformumuz bu iş için değerlendirilebilir — yeter ki zemin dayanımı ve erişim yolu uygun olsun. Siloların genelde açık sahada ve ağır zeminli olması, standart lastikli tekerlekli platformların çalışmasına genelde elverişlidir.",
            },
            {
                baslik: "Güvenlik açısından dürüst uyarı",
                metin:
                    "Tahıl siloları, toz birikimi nedeniyle patlama riski taşıyabilen özel bir çalışma ortamıdır. Bu risk, genel yükseğe erişim ekipmanı kullanımını doğrudan etkileyebilir ve özel ex-proof (patlamaya dayanıklı) donanım gerektirebilir. Elimizdeki standart platformlar bu tür özel donanıma sahip değildir; bu nedenle iç hacim veya toz yoğun bölgelerde çalışma talebi gelirse, bunu açıkça belirtir ve uygun donanıma sahip bir firmaya yönlendiririz.",
            },
            {
                baslik: "Yine de sorabilirsiniz",
                metin:
                    "İşinizin kapsamını bilmiyorsanız veya sınırda bir durum varsa, sormaktan çekinmeyin. Bazı işler göründüğünden daha basittir (örneğin sadece dış merdiven kontrolü) ve bizim kapsamımıza girer; bazıları ise göründüğünden daha karmaşıktır ve özel ekipman ister. Kapsamı birlikte netleştirip dürüst bir cevap veririz — uygun olmayan bir işi üstlenip riske girmeyiz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo bakımında kapsam ayrımı",
                paragraflar: [
                    "Aşağıdaki tablo, silo çevresindeki tipik iş kalemlerini ve bizim kapsamımıza girip girmediğini gösterir.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Konum", "Bizim kapsamımızda mı"],
                    satirlar: [
                        ["Dış yüzey/boya kontrolü", "Silo dışı", "Evet, genel erişim işi"],
                        ["Merdiven/platform bağlantı kontrolü", "Silo dışı", "Evet, genel erişim işi"],
                        ["Dış aydınlatma bakımı", "Silo dışı", "Evet, genel erişim işi"],
                        ["İç hacim temizliği", "Silo içi", "Hayır, özel uzmanlık gerekir"],
                        ["Tozlu/patlama riskli alan çalışması", "Silo içi", "Hayır, ex-proof donanım gerekir"],
                    ],
                },
            },
            {
                baslik: "Doğru firmayı seçerken nelere bakılmalı",
                paragraflar: [
                    "Siloya özgü bir iş için firma seçerken, o firmanın tahıl/toz ortamında çalışma deneyimini ve gerekiyorsa ex-proof donanımını sorgulamanızı öneririz. Bu, genel yükseğe erişim firmalarının çoğunda bulunmayan özel bir yetkinliktir ve bu konuda deneyimsiz bir firmayla çalışmak güvenlik riski doğurabilir.",
                    "Biz bu alanda uzman değiliz ve bunu gizlemiyoruz — amacımız işinizi almak değil, doğru bilgiyi vermektir. Dış erişim gibi genel bir ihtiyacınız varsa memnuniyetle değerlendiririz; iç hacme özel bir işiniz varsa dürüstçe uygun olmadığımızı söyleriz.",
                ],
            },
            {
                baslik: "Bölgesel gerçeklik",
                paragraflar: [
                    "Sincan-Ostim hattı imalat ve atölye ağırlıklı bir sanayi dokusuna sahiptir; tarımsal depolama tesisleri bu hattın tipik profilinde değildir. Bu, bölgede hiç silo bulunmadığı anlamına gelmez, ama bizim müşteri tabanımızın ve tekrarlanan işlerimizin büyük çoğunluğu atölye/fabrika bakımı etrafında yoğunlaşır. Bu sayfayı kısa ve dürüst tutmamızın nedeni budur — abartılı bir uzmanlık iddiasında bulunmak yerine gerçek kapsamımızı net bir biçimde göstermeyi tercih ediyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo bakımı konusunda uzman mısınız?",
                cevap:
                    "Hayır, silo bakımı bizim uzmanlık alanımız değil ve bunu gizlemiyoruz. Ana işimiz Sincan-Ostim hattındaki atölye ve fabrika yapılarının periyodik bakımıdır. Silonun dışına erişim gerektiren genel bir işiniz varsa (dış yüzey kontrolü, merdiven kontrolü) standart platformlarımızla değerlendirebiliriz; iç hacme özel bir işiniz varsa bu alanda uzmanlaşmış bir firmayla çalışmanızı öneririz.",
            },
            {
                soru: "Silonun içine girip temizlik yapabilir misiniz?",
                cevap:
                    "Hayır. Silo iç hacmi, toz birikimi nedeniyle patlama riski taşıyabilen özel bir ortamdır ve bu tür çalışma genelde ex-proof (patlamaya dayanıklı) donanım ve özel prosedür gerektirir. Elimizdeki standart platformlar bu donanıma sahip değildir; bu işi üstlenmeyiz ve size bu konuda deneyimli bir firma aramanızı öneririz.",
            },
            {
                soru: "Dış cephede tek seferlik bir kontrol için sizi çağırabilir miyiz?",
                cevap:
                    "Evet, bu tür bir iş — dış yüzey kontrolü, merdiven-basamak bağlantı kontrolü, dış aydınlatma bakımı — standart makaslı veya eklemli platformumuzla değerlendirilebilir. Zemin dayanımı ve erişim yolunu önceden kontrol ederiz; siloların genelde açık sahada olması bu tür işler için genelde elverişlidir.",
            },
            {
                soru: "Silo bakımı için hangi tür firmayı aramalıyız?",
                cevap:
                    "Tahıl/toz ortamında çalışma deneyimi olan, gerekiyorsa ex-proof donanıma sahip firmaları araştırmanızı öneririz. Belirli bir firmayı önermiyoruz çünkü bu konuyu doğrulayabileceğimiz bir uzmanlığımız yok; ama firma seçerken referans projelerini ve güvenlik sertifikalarını sorgulamanız önemlidir.",
            },
            {
                soru: "Bölgenizde hiç silo işi yapmadınız mı?",
                cevap:
                    "Sincan-Ostim hattındaki işlerimizin büyük çoğunluğu atölye ve fabrika bakımı olduğu için silo talebi bölgede nadiren karşımıza çıkıyor. Bu, hiç yapmadığımız anlamına gelmiyor ama sık tekrarlanan, derin bir deneyime dayanan bir iş olmadığını dürüstçe söylemek istiyoruz — bu, sizin doğru beklentiyle bize gelmenizi sağlar.",
            },
            {
                soru: "Kapsam sınırında bir işim var, emin değilim; ne yapmalıyım?",
                cevap:
                    "Bize kısaca anlatın. İşin silonun dışında mı içinde mi olduğunu, toz yoğunluğu ve genel çalışma ortamını sorarız ve dürüstçe kapsamımıza girip girmediğini söyleriz. Uygun olmayan bir işi üstlenip sonradan sorun yaşamaktansa, baştan doğru yönlendirme yapmayı tercih ediyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Silo iç hacminin toz/patlama riski genel iş güvenliği bilgisidir; bu sayfa firmanın gerçek kapsam sınırını dürüstçe belirtir, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Periyodik Aydınlatma Bakımı için Platform Kiralama",
        giris:
            "Bir atölyenin aydınlatma sistemi, bakım rutininin en sık tekrarlanan ve en görünür kalemidir — çünkü sonucu doğrudan görülür: bir armatür ya yanar ya yanmaz. Bu görünürlük, aslında bir tuzaktır: aydınlatma bakımı çoğu işletmede yalnızca armatür söndüğünde hatırlanır, oysa periyodik bir gözle bakıldığında sönme öncesi belirtiler (titreme, ısınma, bağlantı gevşekliği) yıllar önce yakalanabilir. Sincan-Ostim hattındaki atölyelerde aydınlatma bakımı, yıllık bakım takviminin sabit bir kalemi olmalıdır — tek tek yanan armatürlere teker teker müdahale etmek yerine, bütün hattın bir kerede gözden geçirildiği planlı bir gün kurmak. Bu sayfa, periyodik aydınlatma bakımının nasıl planlandığını, hangi bulguların acil hangilerinin plana yazılabilir olduğunu ve ertelemenin aydınlatma tarafındaki somut faturasını anlatıyor.",
        maddeler: [
            {
                baslik: "Tek tek müdahaleden toplu bakıma geçiş",
                metin:
                    "Çoğu atölyede aydınlatma bakımı, bir armatür söndüğünde tek başına çağrılan bir işe döner — bu hem pahalıdır (her seferinde ayrı bir makine kurulumu) hem de verimsizdir (sönmemiş ama zayıflamış armatürler fark edilmez). Toplu bakıma geçiş, yılda bir kez bütün hattın gözden geçirilmesi demektir: sönük armatürler değiştirilir, zayıflamış olanlar not edilir, bağlantılar kontrol edilir. Bu tek gün, yıl boyunca tekrarlanan tek tek çağrıların yerini alır.",
            },
            {
                baslik: "Sönmeden önceki belirtileri yakalamak",
                metin:
                    "Bir armatür tamamen sönmeden önce genelde belirti verir: ışık şiddetinde kademeli azalma, titreme, ısınma, bağlantı noktasında renk değişimi. Bu belirtiler günlük kullanımda fark edilmez çünkü göz zamanla alışır — aynı ortamda çalışan kişi, aydınlatmanın yavaşça zayıfladığını fark etmeden kabul eder. Periyodik bir kontrol turu, dışarıdan gelen taze bir gözle bu belirtileri yakalar ve armatürü tam sönmeden değiştirme imkânı verir.",
            },
            {
                baslik: "Enerji tüketimiyle ilişki",
                metin:
                    "Bakımsız bir aydınlatma hattı, sadece görsel değil enerji açısından da maliyetlidir. Kirlenmiş armatür yüzeyleri ışığı daha az yansıtır ve bu, ya daha fazla armatürün açık tutulmasına ya da yetersiz aydınlatmayla çalışılmasına yol açar. Periyodik temizlik ve bakım, aynı enerji tüketimiyle daha iyi aydınlatma sağlar — bu, doğrudan görülmeyen ama fatura üzerinde birikimli bir etkisi olan bir kalemdir.",
            },
            {
                baslik: "Ertelemenin aydınlatma tarafındaki somut faturası",
                metin:
                    "Bir armatürün bakımı ertelendiğinde önce ışık kalitesi düşer, sonra armatür söner, sonra çevresindeki armatürler o bölgenin aydınlatma yükünü paylaşmaya çalışır ve daha hızlı yıpranır. En pahalı senaryo, birden fazla armatürün aynı bölgede art arda sönmesidir — bu noktada iş, tek armatür değişiminden bölgesel bir yenilemeye dönüşür. Periyodik bakım, bu zincirleme etkiyi daha ucuz aşamada durdurur.",
            },
            {
                baslik: "Bakım gününün pratik akışı",
                metin:
                    "Aydınlatma bakım günü genelde tek makineyle, atölyenin bir ucundan diğerine sistematik bir sırayla ilerler. Her armatürde kısa bir kontrol yapılır: yanıyor mu, bağlantısı sağlam mı, yüzeyi temiz mi. Sönük veya sorunlu bulunanlar o gün değiştirilir; malzemesi elde olmayan kalemler not edilip bir sonraki ziyarete bırakılır. Bu akış, bir atölyenin aydınlatma hattını genelde tek bir günde tamamen gözden geçirmeye yeter.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Aydınlatma bulgularının sınıflandırılması",
                paragraflar: [
                    "Aşağıdaki tablo, bir aydınlatma bakım turunda karşılaşılan tipik bulguları ve aciliyet sınıfını gösterir.",
                ],
                tablo: {
                    basliklar: ["Bulgu", "Belirti", "Aciliyet", "Tipik aksiyon"],
                    satirlar: [
                        ["Tam sönük armatür", "Işık yok", "Yüksek", "Aynı gün değişim"],
                        ["Titreme/ısınma", "Kararsız çalışma", "Orta-yüksek", "Yakın tarihte değişim"],
                        ["Kademeli zayıflama", "Işık şiddeti düşük", "Orta", "Plana yazılır"],
                        ["Yüzey kirlenmesi", "Yansıma azalması", "Düşük", "Temizlikle çözülür"],
                        ["Bağlantı gevşekliği", "Görsel/ısı belirtisi", "Yüksek", "Aynı gün sıkma/değişim"],
                    ],
                },
            },
            {
                baslik: "Aydınlatma bakımını genel bakım turuna eklemek",
                paragraflar: [
                    "Aydınlatma bakımı, tek başına bir gün olmak zorunda değildir — atölyenin genel yıllık bakım turuna bir durak olarak eklendiğinde nakliye ve kurulum maliyeti diğer kalemlerle paylaşılır. Emiş temizliği, kablo tavası kontrolü ve aydınlatma bakımı genelde aynı yükseklik bandında olduğu için tek makineyle art arda yapılabilir.",
                    "Aydınlatma hattınızın büyüklüğüne göre (armatür sayısı, hat uzunluğu) bu tur yarım günden bir güne kadar sürebilir; kesin süreyi envanter turunda birlikte belirleriz.",
                ],
            },
            {
                baslik: "Bölgesel aydınlatma bakımı: komşu atölyelerle paylaşım",
                paragraflar: [
                    "Aynı sanayi adasındaki komşu atölyelerin aydınlatma bakım tarihlerini aynı haftaya denk getirmek, nakliye kalemini paylaştırır ve her işletmenin kendi hattını daha ekonomik biçimde gözden geçirmesini sağlar. Bu, özellikle küçük ölçekli atölyeler için — tek başına çağrıldığında nakliye payı orantısız büyüyen işletmeler için — anlamlı bir tasarruf sağlar.",
                    "Koordinasyonu kurmak için tek gereken, komşu işletmelerin isim ve iletişim bilgisini bize iletmenizdir; sıralamayı ve saatleri biz düzenleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aydınlatma bakımını neden armatür sönmeden önce yaptırmalıyız?",
                cevap:
                    "Çünkü sönme, genelde bir sürecin son adımıdır — önce titreme, ısınma veya kademeli zayıflama gibi belirtiler görülür ama bunlar günlük kullanımda fark edilmez. Periyodik bir kontrol, bu belirtileri erken yakalar ve armatürü tam sönmeden, planlı bir günde değiştirme imkânı verir. Sönmeden sonra yapılan müdahale ise genelde acil ve tek başına çağrılan, dolayısıyla daha pahalı bir iştir.",
            },
            {
                soru: "Kaç armatürümüz var bilmiyoruz, bu bir sorun mu?",
                cevap:
                    "Hayır, bu ilk bakım turunun bir parçasıdır. Turun ilk adımı zaten bir envanter çıkarmaktır — kaç armatür var, hangi tipte, hangi konumda. Bu envanter çıktıktan sonra bir sonraki turlar için referans olur ve zamanla bakım defterinize dönüşür. İlk tur bu yüzden genelde diğerlerinden biraz daha uzun sürer.",
            },
            {
                soru: "Aydınlatma bakımını diğer bakım kalemlerimizle birlikte mi yaptırmalıyız?",
                cevap:
                    "Genelde evet, çünkü aydınlatma hattı çoğu atölyede benzer yükseklik bandında bulunur ve emiş ağızları, kablo tavası gibi diğer kalemlerle aynı makineyle, aynı günde gözden geçirilebilir. Bu, hem nakliye maliyetini hem üretim duruşunu tekilleştirir. Ayrı bir gün planlamak yerine genel bakım turunuza aydınlatmayı bir durak olarak eklemenizi öneririz.",
            },
            {
                soru: "Enerji tasarrufu için aydınlatma bakımının etkisi gerçekten var mı?",
                cevap:
                    "Var, ama etkisi armatür tipine ve kirlilik seviyesine göre değişir; kesin bir yüzde vermek yanıltıcı olur. Genel mantık şudur: kirlenmiş bir yüzey ışığı daha az yansıtır, bu da ya daha fazla armatürün açık kalmasına ya da yetersiz aydınlatmaya yol açar. Periyodik temizlik, aynı enerji tüketimiyle daha iyi aydınlatma sağlar. Kendi hattınızın önce-sonra karşılaştırmasını, bakım defterinize kayıt tutarak zamanla gözlemleyebilirsiniz.",
            },
            {
                soru: "Bir bölgede birden fazla armatür aynı anda sönerse ne yapmalıyız?",
                cevap:
                    "Bu, genelde tek bir armatür arızasından daha büyük bir sorunun belirtisi olabilir — örneğin o bölgedeki elektrik hattında bir sorun ya da komşu armatürlerin yükü paylaşmaya çalışması. Bu durumda tek tek armatür değişimi yerine bölgesel bir kontrol yapmanızı öneririz; turu planlarken bu bölgeye öncelik veririz ve altta yatan nedeni de birlikte araştırırız.",
            },
            {
                soru: "Aydınlatma bakım turu ne kadar sürer?",
                cevap:
                    "Hat uzunluğuna ve armatür sayısına göre değişir; küçük bir atölyede yarım gün, büyük veya karmaşık bir hatta bir gün sürebilir. Kesin süreyi vermek için önce armatür sayısını ve konumlarını bilmemiz gerekir — bu bilgi yoksa, ilk envanter turunda birlikte belirleriz ve bir sonraki tur için gerçekçi bir süre öngörürüz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Aydınlatma bakımının erken belirti/erteleme ilişkisi genel bakım mühendisliği bilgisidir; Sincan-Ostim atölye dokusuna uygulanışı firma pratiğidir. Rakam ve tesis adı uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform ile Atölye Bakım Turu Güvenliği",
        giris:
            "Atölye bakım turunda operatörlü çalışma tercihi, çoğu zaman kapasiteden değil güvenlik prosedüründen kaynaklanır. Sincan-Ostim hattındaki atölyelerin bir kısmı kendi ekibiyle platform kullanmayı tercih ederken, bir kısmı düzenli olmayan veya karmaşık bir iş için operatörlü çalışmayı seçer — ve bu iki tercihin arkasında net bir mantık vardır: sık tekrarlanan, standart bir iş kendi ekibinizle daha ekonomiktir; nadiren tekrarlanan, karmaşık erişim gerektiren veya güvenlik prosedürü ağır bir iş operatörle daha güvenlidir. Bu sayfa, atölye bakım turunda operatörlü kiralamanın ne zaman tercih edilmesi gerektiğini, güvenlik prosedürünün bakım turuna nasıl entegre edildiğini ve bu tercihin bakım takvimine nasıl yerleştiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Operatörlü çalışmanın gerektiği durumlar",
                metin:
                    "Operatörlü çalışma, üç durumda özellikle anlamlıdır: iş nadiren tekrarlanıyorsa (kendi ekibinizi eğitmek amorti etmez), erişim geometrisi karmaşıksa (örümcek platform veya eklemli platform gibi kol hareketi standart makaslıdan farklı makineler), veya bakım turunun içinde başka bir riskli faaliyetle (örneğin elektrik hattı üzerinde çalışma) eş zamanlı koordinasyon gerekiyorsa. Bu durumlarda deneyimli bir operatör, hem makineyi daha verimli kullanır hem de riskli anları önceden öngörür.",
            },
            {
                baslik: "Kendi ekibinizle çalışmanın mantıklı olduğu durumlar",
                metin:
                    "Buna karşın, atölyenizde standart makaslı platformla düzenli tekrarlanan bir iş varsa (örneğin her yıl aynı aydınlatma bakım turu), kendi ekibinizin eğitilip bu işi kendi başına yapması zamanla daha ekonomik hâle gelir. Eğitim maliyeti bir kereliktir; operatörlü kiralamanın günlük maliyeti ise her seferinde tekrarlanır. Sık tekrarlanan, standart erişim gerektiren işlerde kendi ekibinizi yetkinleştirmenizi öneririz.",
            },
            {
                baslik: "Bakım turunda güvenlik prosedürü",
                metin:
                    "Bir atölye bakım turunda operatörün rolü sadece makineyi sürmek değildir; iş öncesi zemin ve çevre kontrolü, çalışma alanının işaretlenmesi, diğer üretim faaliyetleriyle koordinasyon ve iş sonrası makinenin güvenli biçimde park edilmesi de operatörün sorumluluğundadır. Bu prosedür, özellikle üretim durmadan yürütülen bakım turlarında (bölge bölge çalışma) kritik hâle gelir çünkü makine ile yaya trafiği aynı alanda kesişir.",
            },
            {
                baslik: "Yeterlilik belgesi ve doğrulama",
                metin:
                    "Operatörlü kiralamada operatörün ilgili yeterlilik belgesine sahip olması beklenir ve bu, işletmenin kendi iş güvenliği prosedürleriyle uyumlu çalışmayı kolaylaştırır. Bazı atölyeler, kendi saha giriş prosedürü gereği operatörün belgesini ve varsa özel eğitim sertifikasını (örneğin kapalı alan çalışma eğitimi) talep eder — bu talepler önceden bildirilirse, gerekli belgeler iş gününden önce hazırlanır ve sahada gecikme yaşanmaz.",
            },
            {
                baslik: "Karma model: bazı kalemler kendi ekip, bazıları operatörlü",
                metin:
                    "Pratikte pek çok atölye karma bir model kullanır: standart, tekrarlayan işler kendi ekibiyle, nadiren tekrarlanan veya karmaşık erişim gerektiren kalemler operatörlü çalışılır. Bu ayrım, yıllık bakım takvimi kurulurken kalem kalem yapılabilir — hangi kalemin kim tarafından yürütüleceği baştan belirlenir ve bakım günü buna göre planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü mü, kendi ekip mi: karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, bir bakım kaleminin operatörlü mü yoksa kendi ekiple mi çalışılmasının daha mantıklı olduğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Durum", "Sıklık", "Erişim karmaşıklığı", "Önerilen model"],
                    satirlar: [
                        ["Standart aydınlatma bakımı", "Yıllık, tekrarlayan", "Düşük", "Kendi ekip (eğitimli)"],
                        ["Dar geçiş / örümcek platform", "Nadiren", "Yüksek", "Operatörlü"],
                        ["Vinç hattı çevresi kontrolü", "Periyodik, mevzuata bağlı", "Orta-yüksek", "Operatörlü"],
                        ["Genel iç mekân turu", "Yıllık", "Düşük-orta", "Kendi ekip veya operatörlü"],
                        ["Elektrik hattı yakınında iş", "Nadiren", "Yüksek risk", "Operatörlü + koordinasyon"],
                    ],
                },
            },
            {
                baslik: "Kendi ekibinizi eğitmek isterseniz",
                paragraflar: [
                    "Standart makaslı platform kullanımı için kendi ekibinizi yetkinleştirmek isterseniz, ilk birkaç kullanımda operatörlü çalışıp ekibinizin gözlemlemesini, ardından kademeli olarak devri kendi ekibinize bırakmayı öneririz. Bu geçiş, sıfırdan bir eğitim programına göre daha doğal işler ve gerçek saha koşullarında öğrenmeyi sağlar.",
                    "Ekibinizin yetkinliği arttıkça, operatörlü ihtiyacınız yalnızca karmaşık kalemlere (örümcek platform, eklemli platform, vinç hattı çevresi) sıkışır ve standart işler için maliyet zamanla düşer.",
                ],
            },
            {
                baslik: "Bölge bölge çalışan bakım turunda koordinasyon",
                paragraflar: [
                    "Üretim durmadan yürütülen bir bakım turunda (atölyenin bölge bölge boşaltılıp çalışıldığı model), operatörün üretim ekibiyle koordinasyonu kritik hâle gelir. Hangi bölgenin ne zaman boşaltılacağı, makinenin hangi güzergâhı izleyeceği ve yaya trafiğinin nasıl yönlendirileceği, iş öncesi kısa bir brifingle netleştirilir. Bu koordinasyonu genelde işletmeden bir sorumlu ile birlikte kurarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlü mü kendi ekibimizle mi çalışmalıyız, nasıl karar veririz?",
                cevap:
                    "İki soruya bakın: bu iş ne sıklıkla tekrarlanıyor ve erişim ne kadar karmaşık. Sık tekrarlanan, standart erişim gerektiren bir işse (örneğin yıllık aydınlatma bakımı) kendi ekibinizi eğitmek zamanla daha ekonomiktir. Nadiren tekrarlanan veya karmaşık erişim (dar geçiş, engelli nokta, vinç hattı çevresi) gerektiren bir işse operatörlü çalışmak hem daha güvenli hem daha verimlidir. Kalemlerinizi paylaşırsanız hangisinin hangi modele uygun olduğunu birlikte belirleriz.",
            },
            {
                soru: "Operatörün yeterlilik belgesi olduğunu nasıl doğrularız?",
                cevap:
                    "Talep sırasında belirtirseniz, operatörün ilgili yeterlilik belgesini iş gününden önce paylaşırız. Bazı atölyelerin kendi saha giriş prosedürü gereği ek belgeler (örneğin özel eğitim sertifikası) istediğini biliyoruz; bu talepleri önceden bildirmeniz, gerekli belgelerin sahada gecikmeye yol açmadan hazır olmasını sağlar.",
            },
            {
                soru: "Kendi ekibimiz bazı kalemlerde, operatör başka kalemlerde çalışabilir mi?",
                cevap:
                    "Evet, bu karma model pratikte sık kullanılır. Standart, tekrarlayan kalemleri kendi ekibiniz yürütürken, nadiren tekrarlanan veya karmaşık erişim gerektiren kalemleri operatörlü planlarız. Yıllık bakım takvimi kurulurken bu ayrımı kalem kalem yapabiliriz.",
            },
            {
                soru: "Üretim durmadan çalışılan bir bakım turunda operatör ne yapar?",
                cevap:
                    "Makineyi sürmenin ötesinde, çalışma alanının işaretlenmesini, üretim ekibiyle koordinasyonu ve yaya trafiğiyle makine güzergâhının çakışmamasını yönetir. Bu, özellikle bölge bölge boşaltılarak yürütülen bakım turlarında kritik bir roldür; iş öncesi kısa bir brifingle işletmeden bir sorumluyla birlikte planlanır.",
            },
            {
                soru: "Operatörlü kiralama, kendi ekibimizle çalışmaktan ne kadar farklı maliyetli?",
                cevap:
                    "Kesin bir rakam vermek yanıltıcı olur çünkü fark, işin süresine ve sıklığına göre değişir; ama genel mantık şudur: tek seferlik veya nadir işlerde operatörlü çalışmak, eğitim maliyeti gerektirmediği için toplamda daha ekonomiktir; sık tekrarlanan işlerde ise kendi ekibinizin eğitimi zamanla amorti olur ve uzun vadede daha ekonomik hâle gelir. Kendi kullanım sıklığınızı paylaşırsanız, hangi modelin sizin için daha uygun olduğunu birlikte hesaplarız.",
            },
            {
                soru: "Ekibimizi eğitmek istiyoruz ama nereden başlayacağımızı bilmiyoruz; yardımcı olur musunuz?",
                cevap:
                    "Evet. Önerdiğimiz yol, ilk birkaç bakım turunu operatörlü yürütüp ekibinizin gözlemlemesi, ardından kademeli olarak devri kendi ekibinize bırakmasıdır. Bu, gerçek saha koşullarında öğrenmeyi sağlar ve sıfırdan bir eğitim programına göre daha doğal işler. İlk turunuzu bu geçiş planıyla birlikte kurabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü/kendi ekip tercihinin sıklık-karmaşıklık mantığı genel iş güvenliği pratiğidir; Sincan-Ostim atölye bakım turuna uygulanışı firma pratiğidir. Rakam ve tesis adı uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Sincan-Ostim Atölye Kümesinde Çok Noktalı Bakım Rotası",
        giris:
            "Sincan ile Ostim arasındaki hat, birbirine yakın onlarca küçük ve orta ölçekli atölyenin yoğunlaştığı bir kümedir ve bu yoğunluk, tek tek işletmelerin fark edemediği bir fırsat barındırır: aynı haftaya, hatta aynı güne denk getirilen birden fazla bakım turu, tek bir makinenin sırayla birkaç noktaya hizmet vermesini mümkün kılar. Bu, çok noktalı rota mantığıdır — makine bir noktadan çıkar, kısa bir mesafe kat eder, bir sonraki noktada işe başlar ve gün sonunda birkaç işletmenin bakımı tek seferlik bir sevkiyatla tamamlanmış olur. Bu domainin ana konularından biri budur, çünkü Sincan-Ostim hattının coğrafi yoğunluğu tam olarak bu modele elverişlidir. Bu sayfa, çok noktalı bakım rotasının nasıl kurulduğunu, hangi işletmelerin bu modelden fayda sağladığını ve rotanın verimini neyin belirlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Rota mantığının temel işleyişi",
                metin:
                    "Çok noktalı rota, birden fazla işletmenin bakım tarihini aynı haftaya denk getirip, makinenin bir noktadan diğerine mesafe kaybı yaşamadan geçmesini sağlamaktır. Rota kurulurken önce katılacak işletmelerin konumları haritalanır, sonra en kısa mesafeyi kat edecek bir sıralama yapılır ve her işletmeye tahmini bir zaman penceresi verilir. Bu sıralama, işletmelerin hazır olma sırasına göre değil, coğrafi yakınlığa göre yapılır — bu, toplam mesafeyi ve dolayısıyla toplam maliyeti minimize eder.",
            },
            {
                baslik: "Hangi işletmeler bu modelden fayda sağlar",
                metin:
                    "Çok noktalı rota, özellikle küçük ölçekli atölyeler için anlamlıdır çünkü bu işletmelerde tek başına çağrılan bir makinenin nakliye payı, toplam iş maliyetine göre orantısız büyür. Aynı sokakta veya aynı iş hanında birkaç küçük atölye varsa, bu işletmelerin bakım tarihlerini birleştirmek nakliye kalemini işletme sayısına bölerek küçültür. Büyük ölçekli tek bir tesis için bu avantaj daha sınırlıdır çünkü zaten kendi başına bir günü doldurabilir.",
            },
            {
                baslik: "Rota verimini belirleyen faktörler",
                metin:
                    "Bir rotanın verimi üç şeye bağlıdır: işletmelerin coğrafi yakınlığı, her işletmedeki işin tahmini süresi ve işletmelerin belirlenen zaman penceresinde gerçekten hazır olması. İlk ikisi planlama aşamasında netleşir; üçüncüsü ise sahada en çok aksamaya yol açan noktadır — bir işletme hazır değilse, makine bekler ve bu bekleme, rotadaki sonraki işletmelerin zamanını da kaydırır. Bu yüzden rotaya katılan her işletmenin, kendi zaman penceresinde alanını hazır tutması rotanın verimini doğrudan etkiler.",
            },
            {
                baslik: "Rota kurulumunda koordinasyonun rolü",
                metin:
                    "Çok noktalı bir rota, tek bir işletmenin talebiyle kurulmaz — en az birkaç işletmenin aynı haftaya denk gelen bir ihtiyacı olması gerekir. Bu koordinasyonu genelde iki yoldan biriyle kuruyoruz: ya bir işletme kendi komşularını organize edip bize toplu bir talep iletir, ya da farklı zamanlarda gelen taleplerimizi coğrafi yakınlığına göre biz eşleştirir ve işletmelere aynı haftaya katılmak isteyip istemediklerini sorarız. İkinci yol, düzenli talep aldığımız Sincan-Ostim hattında giderek daha sık işliyor.",
            },
            {
                baslik: "Rotanın bakım takvimine yerleşmesi",
                metin:
                    "Bir işletme için çok noktalı rota, tek seferlik bir fırsat değil yıllık takvimin bir parçası olabilir. İlk yıl kurulan bir rota, ertesi yıl aynı işletmeler için tekrarlanabilir — böylece her yıl aynı hafta, aynı sıralamayla bakım turları yapılır ve koordinasyon yükü zamanla azalır. Bu, hem işletmeler hem de bizim için öngörülebilir bir düzen kurar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tek nokta ile çok noktalı rota karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, tek başına çağrılan bir bakım günü ile çok noktalı rotaya katılan bir bakım gününün farklarını özetler.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Tek nokta", "Çok noktalı rota"],
                    satirlar: [
                        ["Nakliye payı", "İşletme başına tam maliyet", "İşletme sayısına bölünür"],
                        ["Zamanlama esnekliği", "Yüksek, işletmeye özel", "Rota sırasına bağlı, dar pencere"],
                        ["Koordinasyon ihtiyacı", "Yok", "Birkaç işletmeyle eşleşme gerekir"],
                        ["Uygun ölçek", "Büyük tesis veya acil iş", "Küçük-orta atölye"],
                        ["Yıllık tekrar", "Bağımsız planlanır", "Genelde aynı hafta tekrarlanır"],
                    ],
                },
            },
            {
                baslik: "Rotaya katılmak isteyen işletmeler için pratik adımlar",
                paragraflar: [
                    "Rotaya katılmak isterseniz, ilk adım kendi bakım ihtiyacınızı ve tercih ettiğiniz dönemi (örneğin sonbahar başı) bildirmenizdir. Bu bilgiyi, aynı dönemde talep eden diğer işletmelerle eşleştirir ve size uygun bir gün önerisi sunarız. Eğer komşularınızı zaten biliyorsanız, onları da dahil etmek isteyip istemediğinizi sorabilir, birlikte bir grup talebi oluşturabilirsiniz.",
                    "Rota kesinleştikten sonra size kendi zaman pencerenizi (örneğin sabah 09:00-11:00) bildiririz; bu pencerede alanınızı hazır tutmanız, rotanın aksamadan ilerlemesini sağlar.",
                ],
            },
            {
                baslik: "Rotanın aksamaması için işletmeye düşen sorumluluk",
                paragraflar: [
                    "Çok noktalı bir rotada en sık yaşanan aksama, bir işletmenin kendi zaman penceresinde hazır olmamasıdır — alan boşaltılmamış, sorumlu kişi orada değil, veya beklenmedik bir üretim işi araya girmiş. Bu tür bir gecikme, sadece o işletmeyi değil rotadaki sonraki işletmeleri de etkiler. Bu yüzden rotaya katılan işletmelerden istediğimiz tek şey, kendi zaman penceresinde alanın ve bir sorumlunun hazır olmasıdır.",
                    "Bir işletme kendi penceresinde hazır olamayacaksa, bunu mümkün olan en erken saatte bildirmesi, rotanın geri kalanının yeniden sıralanmasına imkân tanır ve toplam gecikmeyi sınırlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çok noktalı rotaya katılmak için kaç işletme gerekiyor?",
                cevap:
                    "Kesin bir sayı yok; iki işletme bile rota kurmaya yeter, ama üç-dört işletme genelde nakliye paylaşımını daha belirgin hissettirir. Önemli olan sayı değil, işletmelerin coğrafi yakınlığı ve zaman uyumudur. Kendi ihtiyacınızı ve tercih ettiğiniz dönemi bildirirseniz, aynı dönemde talep eden diğer işletmelerle sizi eşleştirmeye çalışırız.",
            },
            {
                soru: "Rotada bize ayrılan zaman penceresi çok dar olursa ne olur?",
                cevap:
                    "İşinizin süresini önceden bildirirseniz, size ayrılan pencere bu süreye göre belirlenir — dar bir pencereye sığmayacak bir işi zorla sıkıştırmayız. Eğer işiniz beklenenden uzun sürerse, rotadaki sonraki işletmelerin de bundan haberdar edilmesi gerekir; bu yüzden gerçekçi bir süre tahmini paylaşmanız, rotanın sağlıklı kurulmasını sağlar.",
            },
            {
                soru: "Komşularımızı tanımıyoruz, siz mi eşleştiriyorsunuz?",
                cevap:
                    "Evet, bu ikinci yoldur ve Sincan-Ostim hattında sık kullandığımız bir yöntem. Farklı zamanlarda gelen talepleri coğrafi yakınlığına göre değerlendiririz ve uygun bir eşleşme bulduğumuzda, ilgili işletmelere aynı haftaya katılmak isteyip istemediklerini sorarız. Katılım tamamen isteğe bağlıdır; istemiyorsanız kendi bağımsız tarihinizde de çalışabiliriz.",
            },
            {
                soru: "Rota bir kez kurulduktan sonra her yıl aynı mı kalıyor?",
                cevap:
                    "Genelde evet, ama sabit değildir. İlk yıl kurulan bir rota, katılan işletmelerin çoğu aynı kalırsa ertesi yıl aynı hafta ve sıralamayla tekrarlanabilir. Bir işletme ayrılırsa veya yeni bir işletme katılmak isterse, rota o yıl için yeniden düzenlenir. Bu esneklik, rotanın zamanla işletmelerin gerçek ihtiyacına göre şekillenmesini sağlar.",
            },
            {
                soru: "Acil bir durumda rotadaki sıramızı öne alabilir miyiz?",
                cevap:
                    "Gerçek bir acil durumda evet, ama bu, rotadaki diğer işletmelerin sırasını etkileyeceği için önce durumu değerlendiririz — bazen acil işi rota dışında ayrı bir sevkiyatla, rotayı bozmadan çözmek daha hızlı olabilir. Acil durumunuzu bildirirseniz, en hızlı ve rotayı en az etkileyen çözümü birlikte buluruz.",
            },
            {
                soru: "Çok noktalı rota sadece bakım turları için mi, başka işler için de kullanılabilir mi?",
                cevap:
                    "Prensip olarak aynı mantık her tür planlı işe uygulanabilir — envanter turu, kontrol turu, hatta küçük onarım günleri. Rotanın işlemesi için gereken tek şey, birden fazla işletmenin benzer bir dönemde, coğrafi olarak yakın bir ihtiyacının olmasıdır. Bakım dışı bir ihtiyacınız varsa, bunun da rotaya uygun olup olmadığını birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sincan-Ostim hattının coğrafi işletme yoğunluğu kamuya açık bilgidir; çok noktalı rota kurgusu ve koordinasyon yöntemi firma pratiğidir. Rakam ve tesis adı uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazi Koşullarında Platform — Dürüst Kapsam Notu",
        giris:
            "Bu sayfayı dürüstçe kısa tutuyoruz çünkü zor zemin ve arazi koşulları, bizim ana uzmanlık alanımız değil. Sincan-Ostim hattındaki işimizin çekirdeği, atölye ve fabrika içi ile bu yapıların düzgün, genelde beton veya sıkıştırılmış zemine sahip çevresidir — engebeli arazi, çamurlu saha, dik eğim veya stabil olmayan toprak zemin gibi koşullar bizim standart filomuzun ve deneyimimizin dışında kalır. Bu tür işler için arazi tipi (rough terrain) platformlar ve bu alanda deneyimli operatörler gerekir; bizim elimizdeki makineler öncelikle iç mekân ve düzgün açık saha kullanımı için seçilmiştir. Bu sayfa, bu sınırı dürüstçe açıklıyor ve elimizdeki ekipmanın hangi ara koşullarda (hafif engebeli ama stabil zemin gibi) değerlendirilebileceğini anlatıyor.",
        maddeler: [
            {
                baslik: "Bizim filomuzun tasarlandığı zemin tipi",
                metin:
                    "Standart makaslı, eklemli ve örümcek platformlarımız, düz veya hafif eğimli, stabil zeminler için tasarlanmıştır — atölye içi beton, epoksi kaplı yüzeyler, sıkıştırılmış açık saha zeminleri. Bu makineler, engebeli arazi, yumuşak toprak veya belirgin eğimli yüzeylerde hem güvenlik hem de performans açısından uygun değildir. Bu tür bir zeminde standart bir makine kullanmaya çalışmak, devrilme riski ve makinenin saplanması gibi ciddi sorunlara yol açabilir.",
            },
            {
                baslik: "Gerçek arazi tipi iş için gereken ekipman",
                metin:
                    "Engebeli, çamurlu veya dik eğimli bir sahada çalışmak için özel olarak tasarlanmış arazi tipi (rough terrain) platformlar gerekir — bunlar geniş, derin dişli lastiklere, dört tekerlekten çekişe ve eğim dengeleme sistemlerine sahiptir. Bu ekipman ve bu ekipmanı güvenle kullanma deneyimi, bizim standart iç mekân/atölye odaklı filomuzun kapsamı dışındadır. Böyle bir ihtiyacınız varsa, arazi tipi ekipmanda uzmanlaşmış bir firmayla çalışmanızı öneririz.",
            },
            {
                baslik: "Değerlendirebileceğimiz ara durum",
                metin:
                    "Bazı atölye çevresi sahalar tam engebeli değildir ama tam düz de değildir — hafif eğimli, sıkıştırılmış toprak veya çakıllı bir zemin gibi. Bu tür ara koşullarda, standart tekerlekli makinemizin uygun olup olmadığını sahayı görmeden söylemek yanıltıcı olur; zemin fotoğrafı ve eğim bilgisiyle önceden değerlendirme yaparız ve uygun değilse dürüstçe belirtiriz.",
            },
            {
                baslik: "Güvenlik açısından net sınır",
                metin:
                    "Zemin uygunluğu konusunda tereddüt varsa, riske girmemeyi tercih ediyoruz. Standart bir makineyi uygun olmayan bir zeminde çalıştırmak, hem operatör hem çevredeki kişiler için devrilme riski taşır ve bu risk, hiçbir iş için kabul edilebilir değildir. Sahanızın zemin tipini net biçimde bilmiyorsanız, iş öncesi kısa bir saha değerlendirmesi yapmamızı öneririz.",
            },
            {
                baslik: "Doğru yönlendirme",
                metin:
                    "Gerçek bir arazi tipi ihtiyacınız varsa (inşaat sahası, tarım arazisi, madencilik sahası gibi), bu alanda uzmanlaşmış firmalarla çalışmanız hem güvenlik hem verimlilik açısından daha doğru sonuç verir. Bizim katkı sağlayabileceğimiz alan, bu tür sahaların değil, atölye ve fabrika yapılarının iç ve düzgün dış mekân bakımıdır — işinizin kapsamını paylaşırsanız dürüstçe değerlendirir, gerekirse doğru yöne yönlendiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre uygunluk",
                paragraflar: [
                    "Aşağıdaki tablo, farklı zemin tiplerinde standart filomuzun uygunluğunu özetler.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Standart filomuz uygun mu", "Gereken ekipman"],
                    satirlar: [
                        ["Atölye içi beton/epoksi", "Evet", "Standart makaslı/eklemli"],
                        ["Düz, sıkıştırılmış açık saha", "Evet", "Standart tekerlekli platform"],
                        ["Hafif eğimli/çakıllı ara zemin", "Değerlendirme gerekir", "Sahaya göre değişir"],
                        ["Engebeli/dik eğimli arazi", "Hayır", "Arazi tipi (rough terrain) platform"],
                        ["Çamurlu/yumuşak toprak", "Hayır", "Arazi tipi platform + özel lastik"],
                    ],
                },
            },
            {
                baslik: "Saha değerlendirmesi nasıl yapılır",
                paragraflar: [
                    "Zemin tipinden emin değilseniz, sahanın birkaç fotoğrafını ve varsa eğim bilgisini paylaşmanız, ön bir değerlendirme yapmamızı sağlar. Bu değerlendirme kesin değildir — net karar için sahayı yerinde görmek gerekebilir — ama en azından standart filomuzun kapsamında olup olmadığını hızlıca netleştirir.",
                    "Sınırda bir durumda, riske girmek yerine sizi doğru ekipmana sahip bir firmaya yönlendirmeyi tercih ederiz; bu, hem sizin hem bizim için daha güvenli bir sonuç doğurur.",
                ],
            },
            {
                baslik: "Atölye çevresindeki düzgün açık saha ile arazi arasındaki fark",
                paragraflar: [
                    "Sincan-Ostim hattındaki çoğu atölyenin çevresi, tamamen ham arazi değil, en azından kısmen sıkıştırılmış veya beton bir zemine sahiptir — yükleme alanı, park sahası, servis yolu gibi. Bu tür alanlar bizim kapsamımızdadır. Asıl sınır, atölye sınırlarının dışına çıkıp gerçek bir inşaat veya tarım arazisine geçildiğinde başlar — bu noktada iş, bizim uzmanlığımızın dışına çıkar.",
                    "Bu ayrımı işinizin başında netleştirmek, hem sizin doğru firmayı bulmanızı hem de bizim gereksiz bir sahaya makine göndermememizi sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Standart makaslı platformu engebeli bir arazide kullanabilir miyiz?",
                cevap:
                    "Hayır, önermiyoruz. Standart makaslı platformlar düz ve stabil zeminler için tasarlanmıştır; engebeli veya eğimli bir arazide devrilme riski taşır. Böyle bir ihtiyacınız varsa arazi tipi (rough terrain) platform gerekir ve bu, bizim filomuzun kapsamı dışındadır — bu alanda uzmanlaşmış bir firmayla çalışmanızı öneririz.",
            },
            {
                soru: "Atölyemizin çevresi tam düz değil, biraz eğimli; sizin makineniz çalışır mı?",
                cevap:
                    "Bu, eğimin derecesine ve zeminin stabilitesine bağlı; kesin cevap için sahayı görmemiz veya en azından fotoğraf ve eğim bilgisi almamız gerekir. Hafif eğimli ama sıkıştırılmış bir zeminde standart makinemiz genelde uygundur; belirgin eğim veya yumuşak zeminde uygun değildir. Sahanızı paylaşırsanız dürüst bir değerlendirme yaparız.",
            },
            {
                soru: "Arazi tipi platform için kimi önerirsiniz?",
                cevap:
                    "Belirli bir firmayı önermiyoruz çünkü bu, bizim doğrulayabileceğimiz bir uzmanlık alanı değil. Arazi tipi ekipman kiralayan firmaları değerlendirirken, rough terrain platform deneyimlerini ve ilgili sahalarda referans işlerini sorgulamanızı öneririz. Bizden isteyebileceğiniz şey, işiniz atölye/düzgün saha kapsamına girdiğinde devreye girmemizdir.",
            },
            {
                soru: "Yanlışlıkla uygun olmayan bir zemine makine gönderirseniz ne olur?",
                cevap:
                    "Bu riski almamak için zemin bilgisini iş öncesi netleştirmeyi önemsiyoruz — tereddüt varsa makineyi göndermeden önce ek bilgi veya fotoğraf isteriz. Sahada beklenmedik biçimde uygun olmayan bir zeminle karşılaşılırsa, operatör güvenliği önceliklendirir ve makineyi çalıştırmadan durumu bildirir; bu, işin gecikmesine yol açsa da güvenlik açısından doğru yaklaşımdır.",
            },
            {
                soru: "Atölye içi bakım ile arazi işini aynı günde birleştirebilir miyiz?",
                cevap:
                    "Atölye içi bakım kısmını memnuniyetle yaparız; arazi gerektiren kısım için ise ayrı bir firmayla koordinasyon gerekir çünkü farklı ekipman ve muhtemelen farklı operatör deneyimi gerektirir. İki işi aynı güne denk getirmek isterseniz, kendi bakım turumuzu arazi işinin tarihine göre planlayabiliriz, ama arazi kısmını biz yürütmeyiz.",
            },
            {
                soru: "Bu domainin ana işi neden zor zemin değil, atölye bakımı?",
                cevap:
                    "Çünkü Sincan-Ostim hattındaki gerçek talebimizin büyük çoğunluğu atölye ve fabrika iç/dış mekân bakımıdır ve filomuz da bu ihtiyaca göre şekillenmiştir — egzozsuz, iç mekân uyumlu, düz zemin odaklı makineler. Zor zemin ve arazi işleri farklı bir ekipman ve deneyim kategorisidir; bu farkı gizlemek yerine dürüstçe belirtmeyi ve gerektiğinde doğru yöne yönlendirmeyi tercih ediyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Arazi tipi platform gerekliliği genel ekipman mühendisliği bilgisidir; bu sayfa firmanın gerçek zemin kapsam sınırını dürüstçe belirtir, tesis adı ve rakam uydurulmamıştır.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Sincan-Ostim'de Makaslı Platform Kiralama: Atölye Bakımında Genişlik ve Yük Taşıma",
        giris:
            "Sincan-Ostim hattındaki bir atölyede yükseğe çıkma ihtiyacının önemli bir kısmı, aslında tek noktaya sabit kalıp orada bir süre çalışmayı gerektirir: uzun bir duvar boyunca boya, bir koridor tavanı boyunca kablo tavası döşeme, aynı hizada dizilmiş armatürlerin toplu bakımı. Bu tür işlerde asıl belirleyici, ne kadar yükseğe çıkıldığı değil, platformun üzerinde kaç kişinin ve ne kadar malzemenin aynı anda durabildiğidir — çünkü iş tek seferde bitmeyecek, aynı noktada dakikalarca sürecektir. Makaslı platform tam olarak bu ihtiyaca cevap verir: dar bir sepet yerine geniş bir çalışma zemini sunar, iki kişinin yan yana durmasına ve yanlarında alet çantası, boya kovası veya kablo makarası taşımasına izin verir. Karşılığında istediği şey nettir — düz ve sağlam bir zemin, çünkü makasın dikey açılma mekaniği eğimli veya düzensiz yüzeyde güvenli çalışmaz. Bu sayfa, Sincan-Ostim atölyelerinde makaslı platformun ne zaman doğru seçim olduğunu, hangi işlerde diğer ekipmanlardan ayrıldığını ve zemin/kapasite hesabının nasıl yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Platform genişliği neden önemli: iki kişi + malzeme aynı anda",
                metin:
                    "Makaslı platformun sepeti, boom tipi ekipmanların dar sepetinden belirgin biçimde geniştir; tipik bir iç mekân makaslı platformunda iki kişi rahatça durabilir ve yanlarında bir alet çantası, boya malzemesi veya kısa bir kablo makarası taşıyabilirler. Bu, tek kişinin merdivenle çıkıp indiği, malzemeyi ayrı taşıdığı bir işi tek sefere indirir. Sincan-Ostim'deki uzun koridor boyalarında veya seri armatür değişiminde bu fark, iş süresini doğrudan yarıya indirir çünkü malzeme her seferinde yeniden yukarı taşınmaz.",
            },
            {
                baslik: "Dikey erişim mantığı: tam altına girebildiğiniz iş için doğru seçim",
                metin:
                    "Makaslı platform, adından geldiği gibi düz yukarı açılır; sepeti yere göre yatay olarak neredeyse hiç kaymaz. Bu, işin tam sepetin altına veya üstüne denk geldiği durumlarda avantajdır — düz bir tavan noktası, bir duvar hattı, bir ray boyunca ilerleyen iş. Ama makinenin arkasına, bir rafın gerisine veya bir engelin üzerinden yandan uzanmanız gereken bir noktaya ulaşmanız gerekiyorsa makas yetersiz kalır; o iş yatay uzanma yapabilen bir ekipmanı gerektirir. Bu ayrımı iş öncesi netleştirmek, sahaya yanlış makine gönderip günü kaybetmemek için önemlidir.",
            },
            {
                baslik: "Zemin şartı: makaslı platformun vazgeçilmez ön koşulu",
                metin:
                    "Makasın dikey açılma mekaniği, tabanın düz ve sabit olmasına bağlıdır; hafif bir eğim veya düzensiz zemin, platform açıldıkça sepetin dengesini bozar ve modern makinelerin çoğu bu durumda kendini otomatik olarak kilitler. Sincan-Ostim'deki üretim atölyelerinin beton zemini bu açıdan idealdir — bu yüzden makaslı platform, iç mekân işlerinde varsayılan tercihimizdir. Açık sahada, döküntülü zeminde veya rampa üzerinde iş varsa, önce zemin durumu netleştirilir; gerekirse farklı bir ekipman önerilir.",
            },
            {
                baslik: "Sincan-Ostim atölyelerinde tipik makaslı platform işleri",
                metin:
                    "Bölgedeki taleplerin büyük kısmı üç kategoride toplanır: uzun duvar veya tavan boyalarında iki kişilik ekip çalışması, kablo tavası ile aydınlatma hattının koridor boyunca seri döşenmesi, ve depo raf üstü temizlik ile envanter kontrolü gibi geniş platform gerektiren ama yatay uzanma istemeyen işler. Bu üç grup, makasın geniş sepetinden ve stabil dikey hareketinden doğrudan fayda görür; aynı işler dar sepetli bir ekipmanla yapılsa hem daha yavaş hem daha zahmetli olurdu.",
            },
            {
                baslik: "Elektrikli/dahili yakıt seçimi: iç mekân kısıtı",
                metin:
                    "İç mekân makaslı platformlarımız elektrikli tahrikledir; bu, kapalı atölyede egzoz gazı biriktirmeden, üretim durmadan çalışabilmek anlamına gelir. Elektrikli makinenin tek koşulu, gün içinde şarj durumunun takip edilmesidir — uzun süren çok günlü işlerde bu, işin başında planlanır. Açık saha veya çok geniş kapalı hangar gibi elektrikli menzilin dışındaki işler için farklı bir çözüm konuşulur; bu durumda dürüstçe belirtiriz ve uygun makineye yönlendiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sincan-Ostim'de iş tipine göre platform genişliği tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, atölye içi tipik işlerde kaç kişinin sepette çalışması gerektiğini ve buna göre hangi platform genişliğinin uygun olduğunu gösterir. Değerler, iş sırasında taşınan tipik malzeme hacmine göre belirlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Sepette kişi sayısı", "Malzeme yükü", "Önerilen platform genişliği"],
                    satirlar: [
                        ["Tek noktalı armatür değişimi", "1 kişi", "Az (el aleti)", "Dar/standart sepet"],
                        ["Uzun duvar/tavan boyası", "2 kişi", "Orta (kova, rulo, uzatma)", "Geniş sepet"],
                        ["Kablo tavası seri döşeme", "2 kişi", "Orta-yüksek (makara, klips kutusu)", "Geniş sepet"],
                        ["Depo raf üstü kontrol/temizlik", "1-2 kişi", "Değişken", "Standart-geniş sepet"],
                    ],
                },
            },
            {
                baslik: "Kapasite hesap mantığı: operatör + malzeme ağırlığı",
                paragraflar: [
                    "Makaslı platformların taşıma kapasitesi, üzerindeki kişi sayısı ile taşınan malzemenin toplam ağırlığına göre sınırlıdır ve bu sınır makinenin etiketinde açıkça yazar. İki kişi ve dolu bir boya kovası taşındığında toplam yük genellikle sınırın altında kalır, ama ağır bir kablo makarası veya çoklu malzeme kutusu eklendiğinde hesap değişebilir.",
                    "İş öncesi taşınacak malzemenin kabaca ağırlığını sorarız; bu, hem doğru makineyi göndermek hem de sahada kapasite aşımı riskini önlemek için gereklidir. Belirsizlik varsa, malzemeyi iki partide taşımak, kapasiteyi zorlamaktan daha güvenlidir ve biz bu şekilde yönlendiririz.",
                ],
            },
            {
                baslik: "Bakım rutinine makaslı platformun yerleşimi",
                paragraflar: [
                    "Atölye bakım takviminde makaslı platform genellikle 'toplu iş' kalemlerine karşılık gelir — aynı gün içinde birden fazla benzer noktanın art arda bitirildiği işler. Bu yüzden yıllık planlamada makas gerektiren kalemler (uzun hat boyaları, seri aydınlatma, kablo tavası bakımı) genelde tek bir güne toplanır ve platform o gün boyunca atölyede kalır.",
                    "Nokta müdahale gerektiren tekil işler (tek armatür, tek vana, tek sensör) ise makasın geniş sepetinden fayda görmez; bu tür işler için farklı bir ekipman daha uygundur ve bakım defterine bu ayrım not düşülür ki bir sonraki planlama daha isabetli yapılsın.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform ile manlift arasındaki fark nedir, hangisini seçmeliyiz?",
                cevap:
                    "Makaslı platform düz yukarı açılır ve geniş bir sepet sunar; işin tam altına/üstüne denk geldiği, iki kişinin ve malzemenin birlikte çalıştığı durumlarda idealdir. Manlift ise yandan veya üstten engel aşarak uzanabilir; makinenin arkası, bir rafın gerisi gibi doğrudan altına giremediğiniz noktalarda gerekir. İşinizin konumunu tarif ederseniz doğru ekipmanı öneririz; iki ekipman da elimizde var, seçim işin geometrisine göre yapılır.",
            },
            {
                soru: "Platformun taşıyabileceği maksimum yük nedir?",
                cevap:
                    "Bu, makine modeline göre değişir ve her makinenin kapasite etiketinde belirtilir; iç mekân makaslı platformlarının çoğu iki kişi ve orta düzey malzeme yükünü (alet çantası, boya kovası, kablo makarası) rahatça taşır. Çok ağır veya hacimli malzeme taşınacaksa iş öncesi bunu belirtmeniz, doğru kapasiteli makineyi göndermemizi sağlar; sahada tahminle hareket etmeyi tercih etmeyiz.",
            },
            {
                soru: "Atölye tavanına çok yakın çalışırken platform güvenli mi?",
                cevap:
                    "Evet, ama tavan-sepet mesafesinin iş öncesi netleşmesi gerekir; çok dar bir boşlukta çalışmak hem operatör güvenliği hem malzeme hasarı açısından dikkat ister. Tavan yüksekliğini ve varsa tavana yakın engelleri (vinç rayı, kablo tavası, aydınlatma armatürü) önceden sorarız; bu bilgiyle doğru makine yüksekliği ve sepet boyutu seçilir, sahada sürpriz yaşanmaz.",
            },
            {
                soru: "Kapı ve koridor genişliği platform seçimini nasıl etkiler?",
                cevap:
                    "Geniş sepetli makaslı platformlar, dar bir kapı veya koridordan geçemeyebilir; bu yüzden makineyi atölye içine sokmadan önce kapı genişliğini ve koridor dönüş açısını sormamız gerekir. Kapı dar ise, standart genişlikte bir makas veya farklı bir ekipman önerilir; bu netleşmeden makineyi sahaya göndermek, kapıda tıkanma ve zaman kaybı riski taşır.",
            },
            {
                soru: "İki farklı noktada çalışma yapacaksak platformu taşımak ne kadar sürer?",
                cevap:
                    "Elektrikli makaslı platformlar kendi tekerlekleri üzerinde düz zeminde kolayca sürülür; aynı atölye içinde iki nokta arasında taşıma genellikle birkaç dakika sürer ve bu, planlanan iş süresine dahil edilir. Farklı bina veya farklı sahalar arasında taşıma ise ayrı bir lojistik gerektirir ve bu durumda iki ayrı iş olarak fiyatlandırılır.",
            },
            {
                soru: "Elektrikli makaslı platform iç mekânda egzoz sorunu yaratır mı?",
                cevap:
                    "Hayır, elektrikli tahrikli makaslı platformlar egzoz gazı üretmez; bu yüzden kapalı atölye içi işlerde bilinçli olarak elektrikli modelleri tercih ediyoruz. Tek dikkat edilmesi gereken şarj yönetimidir — uzun süren çok günlü işlerde şarj planı gün başında konuşulur ki iş ortasında makine tükenmesin.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platform teknik özellikleri (zemin şartı, platform genişliği, kapasite mantığı) genel ekipman mühendisliği bilgisidir; bu sayfa Sincan-Ostim atölye bakım pratiğine göre yazılmıştır, tesis adı ve rakam uydurulmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Sincan-Ostim'de Manlift Kiralama: Engelin Üzerinden Erişim Gerektiren Atölye İşleri",
        giris:
            "Sincan-Ostim atölyelerindeki bakım işlerinin bir kısmı, sepetin tam altına giremediğiniz bir noktaya ulaşmayı gerektirir: bir üretim hattının arkasındaki armatür, bir rafın gerisindeki aydınlatma noktası, bir çatı kirişinin altındaki kablo geçişi. Bu işlerde düz yukarı açılan bir platform işe yaramaz çünkü engelin önünde durup üzerinden veya yanından uzanmanız gerekir. Manlift — eklemli veya teleskopik boom tipi ekipman — tam bu ihtiyaç için tasarlanmıştır: sepeti yatayda ve açılı olarak hareket ettirebilir, bir makinenin üzerinden geçip arkasına inebilir, dar bir aralıktan sepeti uzatıp hedefe ulaşabilir. Karşılığında bu esneklik, dar bir sepet ve genelde tek operatör anlamına gelir — makaslı platformun geniş, iki kişilik sepetinin aksine, manlift nokta müdahale için optimize edilmiştir. Bu sayfa, Sincan-Ostim atölyelerinde manliftin ne zaman doğru seçim olduğunu, engel aşma mantığını ve dar koridorlarda manevra gerçeğini anlatır.",
        maddeler: [
            {
                baslik: "Boom'un asıl işi: düz yukarı değil, yandan-üstten erişim",
                metin:
                    "Manliftin eklemli kolu, sepeti hem yükseğe çıkarır hem de yatayda ileri-geri, gerekirse aşağı-yukarı kıvırarak hareket ettirir. Bu, bir makinenin veya rafın önünde durup sepeti üzerinden geçirip arkasına indirebilmek demektir — makaslı platformun dikey hareketiyle asla yapamayacağı bir manevra. Sincan-Ostim'deki atölyelerde makine parkının sık olduğu hatlarda, hedefin tam altına inilemediği bu tür işler manliftin asıl çalışma alanıdır.",
            },
            {
                baslik: "Makine parkının arasında çalışmak: dar koridor + engel aşma",
                metin:
                    "Bir üretim hattının iki tezgah arasındaki dar boşluğa girip yukarıdaki bir aydınlatma noktasına ulaşmak, hem dar bir taban alanı hem de o boşluktan sepeti engelin üzerine kıvırabilme yeteneği ister. Bu iki gereksinim aynı anda ancak dar tabanlı, eklemli kollu bir manliftte bulunur; geniş sepetli bir makas o dar boşluğa zaten giremez. Bu yüzden makine parkı sık olan hatlarda manlift, tek gerçekçi seçenektir.",
            },
            {
                baslik: "Tek kişilik iş, kısa süreli müdahale mantığı",
                metin:
                    "Manlift sepeti dar olduğu için genelde tek operatör çalışır ve iş de buna uygun tasarlanır: tek bir armatür değişimi, tek bir sensör kontrolü, tek bir vana veya boru bağlantısı müdahalesi. Bu, makaslı platformun 'iki kişi + malzeme, uzun süreli iş' mantığının tam tersidir — manlift işi kısa, odaklı ve genelde bir seferde biten bir müdahaledir. Bakım rutininde bu tür kalemler, tek makine gününe değil, ihtiyaç anına göre planlanır.",
            },
            {
                baslik: "Çatı kirişi ve aydınlatma hattına ulaşım",
                metin:
                    "Atölye çatısındaki kiriş altı boşluklar, vinç rayının üstü veya çatı ışıklığının çevresi gibi noktalar, doğrudan altından değil genelde yandan veya açılı biçimde yaklaşılması gereken alanlardır. Eklemli boom, sepeti bu tür dar ve engelli boşluklara sokup hedefe açılı biçimde yaklaştırabilir; bu, çatı altı aydınlatma ve kiriş kontrolü işlerinde manliftin makaslı platforma göre net avantajıdır.",
            },
            {
                baslik: "Dış cephe ile iç mekân arası geçişli işler",
                metin:
                    "Bazı atölye binalarında bakım işi, bir iç mekân noktasıyla başlayıp hemen yanındaki dış cephe veya yükleme rampası noktasında devam eder. Manliftin bazı modelleri hem iç mekân zemininde hem de sınırlı dış saha koşullarında çalışabilir; bu geçişli işlerde tek makineyle iki noktayı halletmek mümkün olabilir. Zemin ve saha koşulu iş öncesi netleştirilir, çünkü her model her geçişe uygun değildir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sincan-Ostim'de engel tipine göre gereken yatay menzil tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, atölye içinde sık karşılaşılan engel tiplerinde sepetin ne kadar yatay uzanması gerektiğini kaba biçimde gösterir. Kesin menzil, engelin gerçek ölçüsüne göre sahada teyit edilir.",
                ],
                tablo: {
                    basliklar: ["Engel tipi", "Tipik yatay uzanma ihtiyacı", "Sepet hareketi", "Uygun ekipman"],
                    satirlar: [
                        ["Tek tezgah/makine önü", "Kısa (1-2 m)", "Yan uzanma", "Dar tabanlı eklemli manlift"],
                        ["Raf hattı gerisi", "Orta (2-4 m)", "Üzerinden geçiş + iniş", "Eklemli manlift"],
                        ["Vinç rayı/çatı kirişi altı", "Orta-uzun", "Açılı yaklaşma", "Eklemli manlift"],
                        ["İki tezgah arası dar koridor", "Değişken", "Dar taban + kıvrılma", "Dar tabanlı eklemli manlift"],
                    ],
                },
            },
            {
                baslik: "Sepetin dönüş yarıçapı ve dar koridor hesaplaması",
                paragraflar: [
                    "Eklemli manliftin taban genişliği dar olsa da, sepeti bir engelin üzerinden geçirirken kolun çizdiği yay belirli bir alan kaplar; bu alan, koridorun karşı tarafındaki raf veya makineyle çakışmamalıdır. İş öncesi koridor genişliğini ve karşı taraftaki sabit engelleri sorarız, gerekirse fotoğraf isteriz.",
                    "Bu hesap atlanırsa, sahada sepeti hedefe yaklaştırırken karşı tarafa çarpma riski doğar; bu yüzden dar koridor işlerinde ölçü teyidi, makineyi göndermeden önceki standart adımımızdır.",
                ],
            },
            {
                baslik: "Manliftin bakım rutinindeki rolü: nokta müdahale",
                paragraflar: [
                    "Atölye bakım takviminde manlift, genelde plansız veya düzensiz aralıklarla ortaya çıkan tekil kalemlere karşılık gelir: arızalanan bir armatır, sızıntı yapan bir boru bağlantısı, devre dışı kalan bir sensör. Bu kalemler makaslı platformun 'toplu iş günü' mantığına uymaz; ihtiyaç anında, tek seferlik bir çağrıyla planlanır.",
                    "Bununla birlikte, aynı atölyede hem toplu hem tekil işler varsa, iki ekipmanı aynı ziyarette art arda kullanmak mümkündür; bu, bakım defterine iki ayrı kalem olarak işlenir ve bir sonraki yılın planına da bu ayrım taşınır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift ile makaslı platform arasında maliyet farkı var mı?",
                cevap:
                    "Genelde evet; manlift daha karmaşık bir mekanizmaya sahip olduğu için kiralama bedeli makaslı platforma göre biraz daha yüksek olabilir. Ancak asıl belirleyici iş süresidir — manlift gerektiren işler genelde kısa ve odaklıyken, makas gerektiren işler uzun sürebilir; toplam maliyeti iş süresiyle birlikte değerlendirmenizi öneririz, sadece saatlik/günlük bedele bakmak yanıltıcı olabilir.",
            },
            {
                soru: "Makinenin arkasına, doğrudan altına giremediğimiz bir armatüre nasıl ulaşılır?",
                cevap:
                    "Bu tam olarak manliftin tasarlandığı senaryo: sepet, makinenin önünde durup kolu makinenin üzerinden geçirir ve arkaya iner. Makinenin yüksekliği ve arkadaki boşluk, iş öncesi netleştirilmesi gereken iki bilgidir; bu bilgiyle doğru kol uzunluğuna sahip model seçilir ve sahada 'yetişmedi' sürprizi yaşanmaz.",
            },
            {
                soru: "Sepet dönerken çevredeki raf ve ekipmana çarpma riski var mı?",
                cevap:
                    "Bu risk gerçektir ve bu yüzden dar alanlarda operatörümüz kolu adım adım, çevreyi sürekli kontrol ederek hareket ettirir. İş öncesi koridor genişliği ve çevredeki sabit engeller hakkında bilgi almamız, bu riski büyük ölçüde azaltır; belirsizlik varsa sahaya gelip önce gözle değerlendirme yaparız.",
            },
            {
                soru: "Dar koridorda manlift manevra yapabilir mi?",
                cevap:
                    "Dar tabanlı eklemli manlift modelleri, standart bir atölye koridorunda manevra yapabilecek şekilde tasarlanmıştır, ama koridor genişliği bir eşiğin altındaysa hiçbir model giremez. Koridor ölçüsünü ve varsa dönüş noktalarındaki dar geçişleri iş öncesi sorarız; ölçü yetersizse, işi farklı bir yaklaşımla (örneğin makineyi sökmeden erişim) konuşuruz.",
            },
            {
                soru: "Aynı ziyarette hem iç mekân hem dış cephe işini birleştirebilir miyiz?",
                cevap:
                    "Bazı manlift modelleri sınırlı dış saha koşullarında da çalışabildiği için, iç mekân ve hemen yanındaki dış cephe işini tek ziyarette birleştirmek mümkün olabilir. Bunun için dış sahanın zemin durumunu (düzlük, sertlik) önceden bilmemiz gerekir; uygunsa aynı gün içinde iki işi art arda planlarız.",
            },
            {
                soru: "Operatör tek kişi mi olmalı, yoksa sepette iki kişi çalışabilir mi?",
                cevap:
                    "Manlift sepeti dar tasarlandığı için modelin çoğu tek kişilik kapasiteye göre üretilmiştir; iki kişi ve malzeme taşımak isteyen işler için makaslı platform daha uygun bir seçimdir. İşinizde iki kişi gerekiyorsa bunu önceden belirtmeniz, doğru ekipmanı önermemizi sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manlift/eklemli boom teknik özellikleri (yatay erişim, sepet kapasitesi, dar taban mantığı) genel ekipman mühendisliği bilgisidir; bu sayfa Sincan-Ostim atölye bakım pratiğine göre yazılmıştır, tesis adı ve rakam uydurulmamıştır.",
    },
};
