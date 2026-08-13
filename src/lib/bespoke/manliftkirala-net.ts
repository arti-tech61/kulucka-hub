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
};
