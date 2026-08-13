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
};
