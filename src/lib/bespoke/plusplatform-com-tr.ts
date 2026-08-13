// ═══════════════════════════════════════════════════════════════════════════
// plusplatform.com.tr — ELLE YAZILMIŞ İÇERİK
//
// Profil: Akülü makaslı platform SATIŞI ve kiralaması karşılaştırması.
// Açı: satın alma (filo yatırımı) vs kiralama kararı, kullanım yoğunluğuna
// göre hangisinin mantıklı olduğu, ROI mantığı — DİĞER TÜM DOSYALARDAN FARKLI
// olarak burada SATIŞ perspektifi ekleniyor.
//
// ⚠️ Marka/model adı (THJZ dahil) kullanılmaz; "akülü makaslı platform
// üreticisi/tedarikçisi" gibi genel ifadeler tercih edilir. Rakam uydurulmaz;
// yalnızca genel maliyet mantığı (aylık kullanım eşiği vb.) ANLATIM
// düzeyinde, spesifik TL/adet rakamı vermeden kurulur.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Firma adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const PLUSPLATFORM_COM_TR: Record<string, BespokeIcerik> = {
    "bolge:odunpazari": {
        h1: "Odunpazarı'nda Akülü Makaslı Platform Satışı ve Kiralaması",
        giris:
            "Odunpazarı'ndaki işletmelerden bize gelen ilk soru genellikle 'kiralamak mı yoksa satın almak mı daha mantıklı' oluyor ve bu sorunun tek bir doğru cevabı yok — cevap işletmenin kullanım sıklığına bağlı. Bir kurumsal binanın yılda birkaç kez ihtiyaç duyduğu bakım işi için makine satın almak, bakım, depolama ve amortisman yükünü karşılıksız üstlenmek anlamına gelir; buna karşılık haftada birkaç gün sürekli kullanılan bir işletmede kiralama, uzun vadede kiralama bedelinin satın alma bedelini aşmasına yol açabilir. Biz bu kararı vermeden önce işletmenin yıllık kullanım gününü, çalışma yüksekliği ihtiyacını ve bakım kapasitesini birlikte değerlendiriyoruz; amacımız bir makine satmak ya da kiralamak değil, doğru kararı vermenize yardımcı olmak.",
        maddeler: [
            {
                baslik: "Kullanım sıklığı: kararın ilk ve en önemli girdisi",
                metin:
                    "Yılda birkaç kez kullanılan bir ihtiyaç için satın alma, makinenin çoğu zaman atıl kalması ve buna rağmen periyodik bakım, sigorta ve depolama maliyetinin işlemesi anlamına gelir. Kullanım ayda birkaç günün üzerine çıktığında ise tablo değişir; sık kiralamanın toplam maliyeti zamanla satın alma bedeline yaklaşır ve bir noktadan sonra onu geçer. Bu eşiği kesin bir gün sayısıyla değil, işletmenin kendi kullanım geçmişiyle birlikte değerlendiriyoruz.",
            },
            {
                baslik: "Bakım ve depolama kapasitesi olmayan işletmelerde kiralama avantajı",
                metin:
                    "Satın alınan bir makinenin periyodik bakımı, arıza durumunda yedek parça temini ve kullanılmadığı dönemlerde güvenli depolanması işletmenin kendi sorumluluğudur. Bu kapasiteye sahip olmayan küçük ve orta ölçekli işletmelerde kiralama, bakım yükünü tamamen dışarıda bırakır — arızalanan makine değiştirilir, bakım bizim tarafımızda kalır.",
            },
            {
                baslik: "Sürekli yüksek kullanımda satın almanın mantığı",
                metin:
                    "Bir üretim tesisinin her gün, birden fazla vardiyada kullandığı bir platform ihtiyacı varsa, bu makine neredeyse hiç boşta kalmaz. Bu profildeki işletmeler için satın alma, uzun vadede kiralama bedelinin toplamından daha ekonomik olabilir; ayrıca makinenin her zaman elde ve tanıdık olması operasyonel bir avantaj sağlar. Bu durumda satın alma kararını, kendi bakım ekibinin bulunup bulunmamasıyla birlikte değerlendiriyoruz.",
            },
            {
                baslik: "Karma model: filo + tamamlayıcı kiralama",
                metin:
                    "Bazı işletmeler standart yükseklikte bir makineyi satın alır, ancak nadiren ihtiyaç duyduğu daha yüksek ya da farklı erişimli bir işi kiralamayla tamamlar. Bu model, sabit ihtiyacı sermaye yatırımıyla, değişken ihtiyacı ise kiralamayla karşılar ve çoğu orta ölçekli işletme için dengeli bir çözümdür.",
            },
            {
                baslik: "İkinci el ve yeni makine arasındaki fark",
                metin:
                    "Satın alma kararı verildiğinde ikinci soru yeni mi ikinci el mi olacağıdır. Yeni makine daha uzun garanti ve daha öngörülebilir bakım geçmişi sunar; ikinci el makine ise daha düşük ilk yatırımla filoya girer ama geçmiş kullanım ve bakım kaydının şeffaf olması gerekir. Bu kararı işletmenin bütçe ve risk toleransına göre birlikte değerlendiriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kullanım profiline göre karar çerçevesi",
                paragraflar: [
                    "Odunpazarı'ndaki işletmelerle yaptığımız değerlendirmelerde kullandığımız çerçeveyi aşağıdaki tabloda topladık; kesin karar her zaman işletmenin kendi verileriyle netleşir.",
                ],
                tablo: {
                    basliklar: ["Kullanım profili", "Yıllık kullanım", "Bakım kapasitesi", "Önerilen yol"],
                    satirlar: [
                        ["Nadir bakım ihtiyacı", "Birkaç gün", "Yok/sınırlı", "Kiralama"],
                        ["Dönemsel/mevsimsel iş", "Birkaç hafta", "Sınırlı", "Kiralama, uzun dönem indirimli"],
                        ["Düzenli aylık kullanım", "Ayda birkaç gün", "Orta", "Kiralama veya karma model"],
                        ["Sürekli günlük kullanım", "Neredeyse her gün", "Var", "Satın alma"],
                        ["Değişken + sabit ihtiyaç", "Karma", "Var", "Karma: filo + tamamlayıcı kiralama"],
                    ],
                },
            },
            {
                baslik: "ROI hesabını nasıl kuruyoruz",
                paragraflar: [
                    "Satın alma kararının geri dönüşünü hesaplarken üç kalemi birlikte değerlendiriyoruz: makinenin ilk yatırım bedeli, yıllık bakım-sigorta-depolama gideri ve işletmenin bu makineyi kullanmasaydı ödeyeceği toplam kiralama bedeli. İlk iki kalemin toplamı, üçüncü kalemi aştığı sürece kiralama daha mantıklıdır; tersi durumda satın alma öne çıkar.",
                    "Bu hesabı yaparken tek yıllık değil, makinenin beklenen kullanım ömrü boyunca (genellikle çok yıllık) bir projeksiyon kuruyoruz. Kısa vadede kiralama ucuz görünse de, sürekli kullanımda bu fark birkaç yıl içinde tersine dönebiliyor.",
                ],
            },
            {
                baslik: "Karar sonrası: geçiş kolaylığı",
                paragraflar: [
                    "Kiralamayla başlayıp zamanla satın almaya geçmek isteyen işletmeler için, kiralama sürecindeki deneyimi (hangi makine sınıfının işlerine en uygun olduğu, ne sıklıkla kullanıldığı) satın alma kararının en güvenilir girdisi olarak kullanıyoruz.",
                    "Tersi yönde, satın aldığı makinenin ihtiyacın altında kaldığını fark eden işletmeler için de tamamlayıcı kiralamayı öneriyoruz; bu, ek bir makine satın almadan kapasite açığını kapatmanın en hızlı yolu.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kiralamak mı satın almak mı daha ekonomik, kesin bir cevap verebilir misiniz?",
                cevap:
                    "Kesin bir cevap işletmenizin kullanım verisine bağlı, bu yüzden önce yıllık kullanım gününüzü ve bakım kapasitenizi soruyoruz. Genel eğilim şu: yılda birkaç kez kullanılan bir ihtiyaç için kiralama, haftada birkaç gün sürekli kullanılan bir ihtiyaç için ise satın alma daha ekonomik çıkıyor. İkisi arasındaki bölgede karma model — sabit ihtiyacı satın almayla, değişken ihtiyacı kiralamayla karşılamak — genellikle en dengeli sonucu veriyor.",
            },
            {
                soru: "Satın aldığımız makinenin bakımını kim üstleniyor?",
                cevap:
                    "Satın alınan makinenin periyodik bakımı, arıza durumunda yedek parça temini ve depolanması işletmenin kendi sorumluluğuna girer. Bu kapasiteniz yoksa ya bir bakım anlaşması kurmanızı ya da kiralamayı değerlendirmenizi öneriyoruz. Bakım kapasitesi olan işletmeler için satın alma, uzun vadede daha ekonomik olabiliyor çünkü bu maliyet zaten planlanmış oluyor.",
            },
            {
                soru: "Yeni mi ikinci el mi almalıyız?",
                cevap:
                    "Bu, bütçenize ve risk toleransınıza bağlı. Yeni makine daha uzun garanti ve öngörülebilir bakım geçmişi sunar; ikinci el makine daha düşük ilk yatırımla filoya girer ama geçmiş kullanım ve bakım kaydının şeffaf olması gerekir. İkinci el bir makine değerlendiriyorsanız bakım kayıtlarını ve periyodik kontrol raporlarını mutlaka isteyin; bu belgeler makinenin gerçek durumunu satıcının sözünden daha güvenilir şekilde gösterir.",
            },
            {
                soru: "Hem satın alma hem kiralama aynı anda mantıklı olabilir mi?",
                cevap:
                    "Evet, birçok orta ölçekli işletme için en dengeli çözüm bu. Standart yükseklikte, sık kullanılan bir makineyi satın alıp, nadiren ihtiyaç duyulan daha yüksek ya da farklı erişimli işleri kiralamayla tamamlamak, hem sermaye yatırımını sınırlar hem esnekliği korur. Bu modeli kurarken hangi yükseklik ve makine tipinin filonuzda sabit olması gerektiğini birlikte belirliyoruz.",
            },
            {
                soru: "ROI hesabını nasıl yapıyorsunuz, bize de gösterebilir misiniz?",
                cevap:
                    "Hesabı üç kalem üzerinden kuruyoruz: ilk yatırım bedeli, yıllık bakım-sigorta-depolama gideri ve bu makineyi kullanmasaydınız ödeyeceğiniz toplam kiralama bedeli. Bu üç kalemi sizin tahmini kullanım verinizle birlikte karşılaştırıp hangi yolun kaç yıl içinde kendini amorti ettiğini gösteriyoruz. Hesap, tek yıllık değil makinenin beklenen kullanım ömrü boyunca kurulur; bu, kısa vadeli yanılmayı önlüyor.",
            },
            {
                soru: "Kiralamayla başlayıp sonra satın almaya geçebilir miyiz?",
                cevap:
                    "Kesinlikle, ve bunu önerdiğimiz bir yol. Kiralama sürecinde hangi makine sınıfının işinize en uygun olduğunu, ne sıklıkla ihtiyaç duyduğunuzu net olarak görürsünüz; bu deneyim, satın alma kararının en güvenilir girdisi olur. Belirsizken satın almak yerine önce kiralayıp veriye dayalı karar vermek, çoğu işletme için daha az riskli bir yol.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Satın alma/kiralama karşılaştırması genel finansal mantık ve sektör pratiğine dayanır; marka veya model adı, spesifik fiyat rakamı kullanılmamıştır.",
    },

    "bolge:eskisehir-merkez": {
        h1: "Eskişehir Merkezde Akülü Makaslı Platform Satışı ve Kiralaması",
        giris:
            "Eskişehir merkezdeki işletme profili çeşitlidir — kurumsal binalar, ticari işletmeler, küçük ve orta ölçekli sanayi tesisleri bir arada bulunur. Bu çeşitlilik, satın alma/kiralama kararını da çeşitlendirir: bir kurumsal bina için doğru olan karar, bir üretim tesisi için doğru olmayabilir. Merkezdeki değerlendirmelerimizde önce işletmenin sektörünü ve kullanım sıklığını soruyoruz; kurumsal ve ticari işletmelerde kiralama neredeyse her zaman öne çıkarken, üretim ve depolama ağırlıklı işletmelerde satın alma da gündeme gelebiliyor.",
        maddeler: [
            {
                baslik: "Kurumsal ve ticari işletmelerde kiralama eğilimi",
                metin:
                    "Merkezdeki kurumsal binalar ve ticari işletmelerin platform ihtiyacı genellikle yılda birkaç kez ortaya çıkan bakım veya tabela işidir. Bu profildeki işletmeler için satın alma nadiren mantıklıdır; kiralama, bakım ve depolama yükü olmadan ihtiyacı karşılar.",
            },
            {
                baslik: "Küçük sanayi tesislerinde eşik değerlendirmesi",
                metin:
                    "Merkez çeperindeki küçük sanayi tesislerinde kullanım sıklığı kurumsal binalara göre daha yüksek olabilir. Bu işletmelerde kararı net bir eşikle değil, geçmiş bir yılın kiralama sıklığı ve toplam maliyetiyle birlikte değerlendiriyoruz.",
            },
            {
                baslik: "Şehir içi lojistik: satın alınan makinenin park ve taşıma sorunu",
                metin:
                    "Merkezdeki dar sokaklarda satın alınan bir makinenin park edileceği ve depolanacağı alan ayrı bir maliyet ve lojistik konusudur. Bu, kiralamanın avantajlı olduğu ek bir neden — kiralanan makine iş bitince geri gönderilir, depolama sorumluluğu işletmede kalmaz.",
            },
            {
                baslik: "Operatörlü satın alma sonrası eğitim ihtiyacı",
                metin:
                    "Makine satın alan işletmelerde, kullanacak personelin mesleki yeterlilik belgesi alması gerekir. Bu, satın alma kararının bir parçası olarak planlanmalı; belgesiz personelle makine kullanmak mevzuata aykırıdır ve bu süreç zaman alabilir.",
            },
            {
                baslik: "İkinci el piyasasında merkez avantajı",
                metin:
                    "Merkez konumu, ikinci el makine değerlendirmesi yapan işletmeler için servis ve yedek parça erişimi açısından avantajlıdır. İkinci el bir makine satın almayı düşünüyorsanız, servis ağının yakınlığını da karara dahil etmenizi öneriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sektöre göre karar eğilimi",
                paragraflar: [
                    "Merkezdeki farklı sektörlerin tipik kararını aşağıdaki tabloda topladık; bu genel eğilimdir, kesin karar işletmenin kendi verisiyle netleşir.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Tipik kullanım", "Genel eğilim", "Not"],
                    satirlar: [
                        ["Kurumsal/kamu binası", "Yılda birkaç gün", "Kiralama", "Depolama sorunu yok"],
                        ["Ticari işletme/mağaza", "Yılda birkaç gün", "Kiralama", "Kısa süreli, operatörlü"],
                        ["Küçük sanayi/atölye", "Ayda birkaç gün", "Duruma göre", "Geçmiş yıl verisiyle karar"],
                        ["Orta ölçek üretim", "Haftalık", "Satın alma eğilimli", "Bakım ekibi şart"],
                    ],
                },
            },
            {
                baslik: "Park ve depolama maliyetini unutmayın",
                paragraflar: [
                    "Merkezdeki dar sokaklarda satın alınan bir makinenin nerede park edileceği, işletmelerin çoğu zaman gözden kaçırdığı bir kalemdir. Bu maliyeti ROI hesabına dahil etmezseniz satın alma yanıltıcı şekilde avantajlı görünebilir.",
                    "Kiralamada bu sorumluluk bizde kalır; makine iş bitince geri döner ve işletmenin depolama alanı ayırmasına gerek kalmaz.",
                ],
            },
            {
                baslik: "Belge ve eğitim süreci",
                paragraflar: [
                    "Satın alma kararı verildiğinde, kullanacak personelin mesleki yeterlilik belgesi alması gerektiğini unutmayın; bu süreç birkaç hafta sürebilir. Belge süreci tamamlanana kadar geçici olarak kiralama ile devam etmek, üretim veya bakım takviminin aksamasını önler.",
                    "Bu geçiş dönemini planlamanıza yardımcı oluyoruz; satın alınan makine teslim alınana ve personel belgelenene kadar kısa süreli kiralamayla köprü kuruyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kurumsal binamız için satın almalı mıyız, kiralamalı mıyız?",
                cevap:
                    "Kurumsal binalarda platform ihtiyacı genellikle yılda birkaç kez ortaya çıkan kısa süreli bir bakım işi olduğu için kiralamayı öneriyoruz. Satın alma, bu düşük kullanım sıklığında bakım, sigorta ve depolama maliyetini karşılıksız üstlenmek anlamına gelir. Kiralamada bu yük tamamen bizde kalır, siz yalnızca kullandığınız süre için ödeme yaparsınız.",
            },
            {
                soru: "Sanayi tesisimizde satın alma mantıklı mı, nasıl karar veriyoruz?",
                cevap:
                    "Geçmiş bir yıldaki kiralama sıklığınızı ve toplam ödediğiniz kiralama bedelini birlikte inceliyoruz. Bu toplam, bir makinenin satın alma bedeline ve yıllık bakım giderine yaklaşıyorsa satın alma gündeme gelir. Bakım ekibiniz yoksa bu kararı vermeden önce bakım anlaşması ya da personel eğitimini de planlamanızı öneriyoruz.",
            },
            {
                soru: "Merkezde satın aldığımız makineyi nereye park edeceğiz?",
                cevap:
                    "Bu, merkezdeki işletmelerin çoğu zaman gözden kaçırdığı bir maliyet kalemidir. Dar sokaklarda güvenli park ve depolama alanı bulmak ayrı bir lojistik sorunu oluşturabilir. ROI hesabınıza bu maliyeti mutlaka dahil etmenizi öneriyoruz; bazı işletmeler bu yüzden satın alma yerine kiralamayı tercih ediyor.",
            },
            {
                soru: "Makine satın aldık ama kullanacak belgeli personelimiz yok, ne yapmalıyız?",
                cevap:
                    "Personelinizin mesleki yeterlilik belgesi alma süreci birkaç hafta sürebilir; bu süre boyunca makineniz kullanılamaz durumda kalır. Bu geçiş döneminde kısa süreli kiralamayla köprü kurmanızı öneriyoruz, böylece üretim veya bakım takviminiz aksamaz. Belge süreci tamamlandığında kiralamayı sonlandırıp kendi makinenize geçebilirsiniz.",
            },
            {
                soru: "İkinci el makine alacağız, merkez konumun avantajı var mı?",
                cevap:
                    "Var; merkez konumu servis ve yedek parça erişimi açısından avantaj sağlıyor. İkinci el bir makine değerlendirirken bakım kayıtlarını ve periyodik kontrol raporlarını mutlaka isteyin, servis ağının yakınlığını da karara dahil edin. Uzak bir bölgeden alınan ikinci el makinede arıza sonrası servis süresi uzayabilir.",
            },
            {
                soru: "Hem kiralama hem satın alma seçeneğini aynı anda değerlendirebilir miyiz?",
                cevap:
                    "Değerlendirebilirsiniz; bu aslında önerdiğimiz yaklaşım. Önce kısa süreli kiralamayla makinenin işinize uygunluğunu ve kullanım sıklığınızı gözlemleyin, ardından bu veriyle satın alma kararını daha net verin. Belirsizken doğrudan satın almak yerine veriye dayalı ilerlemek, riski önemli ölçüde azaltıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir merkezin karma kurumsal-ticari-sanayi yapısı kamuya açık genel bilgidir; satın alma/kiralama karşılaştırması genel finansal mantığa dayanır. Marka adı ve rakam kullanılmamıştır.",
    },

    "bolge:tepebasi": {
        h1: "Tepebaşı'nda Akülü Makaslı Platform Satışı ve Kiralaması",
        giris:
            "Tepebaşı'ndaki kurumsal ve teknik yapı yoğunluğu, satın alma/kiralama kararını farklı bir açıdan gündeme getirir: burada karar veren taraf genellikle bireysel bir işletme değil, birden fazla birimi olan bir kurumdur ve satın alma kararı bütçe onay süreci gerektirir. Bu süreç kiralamaya göre daha yavaş işlediği için, acil bir ihtiyaç çoğunlukla kiralamayla karşılanır; satın alma ise yıllık bütçe planlamasının bir parçası olarak, önceden değerlendirilerek yapılır. Bu ayrım, Tepebaşı'ndaki kurumlarla çalışırken karar sürecini iki ayrı zaman dilimine böler.",
        maddeler: [
            {
                baslik: "Bütçe onay süreci ve zaman farkı",
                metin:
                    "Kurumsal yapılarda satın alma kararı genellikle bir onay ve bütçe sürecinden geçer; bu süreç haftalar sürebilir. Acil bir ihtiyaç bu süreci bekleyemez, bu yüzden kısa vadeli ihtiyaçlar kiralamayla karşılanır; satın alma ise bir sonraki bütçe döneminde değerlendirilir.",
            },
            {
                baslik: "Çok birimli kurumlarda paylaşılan filo mantığı",
                metin:
                    "Birden fazla binası ya da birimi olan kurumlarda, her birimin ayrı makine satın alması yerine merkezi bir filo kurulup birimler arası paylaşılması daha ekonomik olabilir. Bu modelde satın alınan makine kurumun kendi lojistik ekibi tarafından birimler arası taşınır; biz bu modele tamamlayıcı kiralamayla destek oluyoruz.",
            },
            {
                baslik: "Denetim ve kayıt yükümlülüğü olan kurumlarda satın alma",
                metin:
                    "Kendi ekipman envanterini tutması gereken bazı kurumlar için satın alma, kayıt ve denetim açısından daha uygun olabilir çünkü ekipman kurumun kendi demirbaş sistemine girer. Bu kurumlarla çalışırken satın alma sürecinin denetim gerekliliklerine uygun evrakla desteklenmesine dikkat ediyoruz.",
            },
            {
                baslik: "Kiralamanın hız avantajı",
                metin:
                    "Bütçe süreci uzun sürdüğü için, aynı yıl içinde tekrar eden ama öngörülemeyen ihtiyaçlarda kiralama tek pratik çözüm olur. Bir sonraki bütçe döneminde satın alma değerlendirilene kadar kiralamayla devam etmek, hizmetin aksamasını önler.",
            },
            {
                baslik: "Amortisman ve demirbaş süreci",
                metin:
                    "Satın alınan bir makinenin kurum demirbaşına kaydı ve amortisman süreci, kurumun kendi mali işler biriminin sorumluluğundadır. Bu süreç tamamlanana kadar makinenin fiilen teslim alınması gecikebilir; bu geçiş döneminde kiralamayla köprü kurmayı öneriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Karar sürecine göre zaman çizelgesi",
                paragraflar: [
                    "Kurumsal yapılarda satın alma ve kiralama kararlarının tipik zaman çizelgesini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["İhtiyaç türü", "Karar süreci", "Tipik süre", "Önerilen yol"],
                    satirlar: [
                        ["Acil bakım işi", "Doğrudan onay", "Günler", "Kiralama"],
                        ["Planlı yıllık bakım", "Bütçe dahilinde", "Önceden planlı", "Kiralama veya satın alma"],
                        ["Filo yatırımı", "Bütçe onayı", "Haftalar", "Satın alma, bütçe döneminde"],
                        ["Demirbaş kaydı gereken ekipman", "Mali işler süreci", "Haftalar", "Satın alma"],
                    ],
                },
            },
            {
                baslik: "Paylaşılan filo modeli",
                paragraflar: [
                    "Birden fazla birimi olan kurumlarda, her birimin ayrı makine satın alması yerine merkezi bir filo kurup birimler arası paylaşmak toplam maliyeti düşürür. Bu modelde makine kullanım yoğunluğu artar, atıl kalma süresi azalır.",
                    "Filo kapasitesinin yetmediği dönemlerde (örneğin birden fazla birimin aynı anda ihtiyaç duyması) tamamlayıcı kiralamayla destek sağlıyoruz; bu, filo boyutunu gereğinden büyük tutmadan esneklik kazandırıyor.",
                ],
            },
            {
                baslik: "Bütçe döneminde köprü kiralama",
                paragraflar: [
                    "Bir sonraki bütçe döneminde satın alma planlanan ama bu döneme kadar ihtiyacın devam ettiği durumlarda köprü kiralama öneriyoruz. Bu, hizmetin aksamadan sürmesini ve satın alma kararının bütçe sürecine uygun zamanda, acele edilmeden verilmesini sağlıyor.",
                    "Köprü kiralama süresince edinilen kullanım deneyimi, satın alınacak makinenin hangi sınıf ve yükseklikte olması gerektiğine dair somut veri sağlıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kurumumuzda satın alma kararı bütçe onayı gerektiriyor, bu süreçte ne yapmalıyız?",
                cevap:
                    "Bu süreç genellikle haftalar sürdüğü için, acil ya da kısa vadeli ihtiyacınızı kiralamayla karşılamanızı öneriyoruz. Bütçe onayı tamamlanıp satın alma gerçekleştiğinde kiralamayı sonlandırabilirsiniz. Bu köprü dönemi, hizmetin aksamadan sürmesini sağlıyor ve satın alma kararınızı acele etmeden, doğru veriyle vermenize imkân tanıyor.",
            },
            {
                soru: "Birden fazla birimimiz var, her biri ayrı makine mi almalı?",
                cevap:
                    "Genellikle önermiyoruz. Merkezi bir filo kurup birimler arası paylaşmak, makine kullanım yoğunluğunu artırır ve toplam maliyeti düşürür. Filo kapasitesinin yetmediği yoğun dönemlerde tamamlayıcı kiralamayla destek sağlıyoruz; bu model, filo boyutunu gereğinden büyük tutmadan esneklik kazandırıyor.",
            },
            {
                soru: "Satın alınan makineyi demirbaşımıza nasıl kaydediyoruz?",
                cevap:
                    "Bu süreç kurumunuzun kendi mali işler biriminin sorumluluğundadır; biz satın alma işlemi için gereken teknik evrakı (fatura, teknik dosya, uygunluk belgesi) eksiksiz sağlıyoruz. Demirbaş kaydı ve amortisman süreci tamamlanana kadar makinenin fiilen teslim alınması gecikebilir; bu dönemde kiralamayla köprü kurabiliriz.",
            },
            {
                soru: "Aynı yıl içinde birkaç kez öngörülemeyen ihtiyaç çıkıyor, satın almalı mıyız?",
                cevap:
                    "Öngörülemeyen ve tekrar eden ihtiyaçlar için kiralama genellikle daha pratiktir, çünkü bütçe onay sürecini beklemeden hızlı çözüm sunar. Bu ihtiyaçların bir örüntü oluşturduğunu fark ederseniz, bir sonraki bütçe döneminde satın almayı değerlendirmenizi öneririz; o zamana kadar kiralamayla devam etmek makul bir yol.",
            },
            {
                soru: "Satın alma ile kiralama arasında geçiş yaparken kullanım verisi işe yarar mı?",
                cevap:
                    "Çok işe yarar. Kiralama sürecinde hangi makine sınıfının ve yüksekliğin işlerinize en uygun olduğunu somut olarak görürsünüz; bu veri, satın alma kararınızın en güvenilir dayanağı olur. Bütçe onay sürecinde bu veriyi paylaşmanız, kararın daha hızlı ve isabetli alınmasını sağlıyor.",
            },
            {
                soru: "Kiralama sözleşmesini kurumsal satın alma prosedürümüze uygun hazırlayabilir misiniz?",
                cevap:
                    "Evet, kurumsal müşterilerimizle çalışırken sözleşme ve evrak sürecini kurumun kendi satın alma prosedürüne göre şekillendiriyoruz. İhtiyaç duyduğunuz belge türlerini (teklif formatı, teknik şartname uyumu, fatura düzeni) önceden bildirirseniz süreç daha hızlı ilerliyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tepebaşı'nın kurumsal yapı yoğunluğu kamuya açık genel bilgidir; bütçe onay süreci ve demirbaş kaydı ile ilgili genel bilgiler kurumsal satın alma pratiğinden gelir. Marka adı ve rakam kullanılmamıştır.",
    },

    "bolge:eskisehir-osb": {
        h1: "Eskişehir OSB'de Akülü Makaslı Platform Satışı ve Kiralaması",
        giris:
            "Eskişehir OSB'deki üretim tesisleri, satın alma/kiralama kararını en net şekilde ortaya koyan işletme grubudur, çünkü kullanım sıklığı burada genellikle yüksektir. Sürekli üretim yapan bir tesiste platform neredeyse her hafta, bazen her gün kullanılır; bu da satın almanın ROI hesabında öne çıkmasına yol açar. Ancak bu, her OSB tesisi için satın almanın doğru karar olduğu anlamına gelmez — bakım ekibi olmayan, ya da farklı yükseklik ve erişim ihtiyaçları değişken olan tesislerde kiralama hâlâ daha esnek bir çözüm sunuyor.",
        maddeler: [
            {
                baslik: "Sürekli üretimde yüksek kullanım eşiği",
                metin:
                    "OSB'deki üretim holünde platform, aydınlatma, havalandırma, vinç ray bakımı gibi tekrar eden işlerde düzenli kullanılır. Kullanım sıklığı arttıkça kiralamanın toplam maliyeti satın alma bedelini yaklaşık olarak karşılamaya başlar; bu noktada satın alma gündeme gelir.",
            },
            {
                baslik: "Bakım ekibi olan tesislerde satın alma avantajı",
                metin:
                    "Kendi bakım ve mühendislik ekibi olan tesisler, satın alınan makinenin periyodik bakımını kendi kaynaklarıyla yürütebilir; bu, satın almanın toplam maliyet avantajını artırır. Bakım ekibi olmayan tesislerde ise bu maliyet dışarıdan karşılanmak zorunda kalır ve avantaj daralır.",
            },
            {
                baslik: "Değişken erişim ihtiyacında kiralamanın esnekliği",
                metin:
                    "Bazı tesislerde işin türüne göre farklı yükseklik ve erişim tipinde makine gerekir — bir hafta akülü makaslı, bir sonraki hafta teleskopik bom. Tek bir makine satın almak bu çeşitliliği karşılamaz; bu profildeki tesislerde kiralama, doğru makineyi doğru işe göre seçme esnekliği sağlar.",
            },
            {
                baslik: "Vardiyalı kullanımda amortisman hızı",
                metin:
                    "Birden fazla vardiyada kullanılan bir makine, tek vardiyalı kullanıma göre çok daha hızlı amorti olur çünkü kullanım saati aynı takvim süresinde katlanır. Vardiyalı çalışan tesisler için satın alma kararını değerlendirirken bu hızlanmış amortismanı hesaba katıyoruz.",
            },
            {
                baslik: "Satın alınan makinenin yedekleme ihtiyacı",
                metin:
                    "Sürekli üretimde tek bir makineye bağımlı kalmak, o makine arızalandığında üretim riskini büyütür. Bu tesislerde satın alınan bir makineye ek olarak, arıza durumunda hızlı devreye girecek bir yedekleme kiralama anlaşması önerilir; bu, satın alma ile kiralamanın birbirini tamamladığı bir modeldir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB tesis profiline göre karar",
                paragraflar: [
                    "OSB'deki tesislerle yaptığımız değerlendirmelerde kullandığımız çerçeveyi aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Tesis profili", "Kullanım sıklığı", "Bakım ekibi", "Önerilen yol"],
                    satirlar: [
                        ["Sürekli/vardiyalı üretim", "Neredeyse her gün", "Var", "Satın alma"],
                        ["Sürekli üretim, bakım ekibi yok", "Neredeyse her gün", "Yok", "Satın alma + servis anlaşması"],
                        ["Değişken erişim ihtiyacı", "Düzenli ama çeşitli", "Var/yok", "Kiralama"],
                        ["Dönemsel bakım", "Ayda birkaç gün", "Sınırlı", "Kiralama"],
                    ],
                },
            },
            {
                baslik: "Yedekleme modeli: satın alma + tamamlayıcı kiralama",
                paragraflar: [
                    "Sürekli üretim yapan tesisler için sadece bir makineye bağımlı kalmak risklidir. Satın alınan ana makineye ek olarak, arıza durumunda hızlı devreye girecek bir kiralama anlaşması kurmak, üretim kesintisi riskini büyük ölçüde azaltır.",
                    "Bu modelde kiralama bir yedek değil, sürekli hazır bekleyen bir güvence olarak kurgulanır; anlaşma detaylarını üretim kritikliğinize göre birlikte netleştiriyoruz.",
                ],
            },
            {
                baslik: "Amortisman hesabında vardiya etkisi",
                paragraflar: [
                    "Vardiyalı kullanımda makinenin fiili kullanım saati aynı takvim süresi içinde katlanır; bu, amortismanı hızlandırır ve satın almanın geri dönüş süresini kısaltır. ROI hesabınızı yaparken vardiya sayısını mutlaka belirtin, tek vardiyalı bir hesap yanıltıcı sonuç verebilir.",
                    "Vardiya sayısı zamanla değişebiliyorsa (örneğin sezonluk artış), bu değişkenliği de hesaba katarak esnek bir projeksiyon kuruyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimiz sürekli üretim yapıyor, satın alma her zaman mı mantıklı?",
                cevap:
                    "Genellikle evet, ama kesin karar bakım ekibinizin olup olmadığına bağlı. Kendi bakım ekibiniz varsa satın almanın toplam maliyet avantajı belirgin şekilde artıyor. Ekibiniz yoksa satın alma yine de mantıklı olabilir ama bu durumda bir servis anlaşmasıyla desteklenmesi gerekiyor; bu ek maliyeti ROI hesabına dahil ediyoruz.",
            },
            {
                soru: "Bazı işlerde farklı yükseklik ve tip gerekiyor, tek makine yeterli olur mu?",
                cevap:
                    "Genellikle olmuyor. Değişken erişim ihtiyacı olan tesislerde tek bir makine satın almak çeşitliliği karşılamaz. Bu profildeki tesislere kiralamayı öneriyoruz; her iş için doğru makine sınıfını seçme esnekliği sağlıyor. Sabit ve sık tekrarlayan bir yükseklik ihtiyacınız varsa, onu satın alıp değişken olanları kiralamayla tamamlamak da bir seçenek.",
            },
            {
                soru: "Vardiyalı çalışıyoruz, bu ROI hesabını nasıl etkiliyor?",
                cevap:
                    "Vardiyalı kullanım, makinenin fiili kullanım saatini aynı takvim süresinde katlar; bu, amortismanı hızlandırır ve satın almanın geri dönüş süresini kısaltır. ROI hesabınızı yaparken vardiya sayınızı mutlaka belirtmenizi istiyoruz, çünkü tek vardiyalı bir varsayımla yapılan hesap gerçek durumu yansıtmaz.",
            },
            {
                soru: "Satın aldığımız makine arızalanırsa üretimimiz durur mu?",
                cevap:
                    "Durmaması için, satın alınan ana makineye ek olarak arıza durumunda hızlı devreye girecek bir yedekleme kiralama anlaşması öneriyoruz. Bu model, tek bir makineye bağımlı kalmanın getirdiği üretim riskini büyük ölçüde azaltıyor. Anlaşma detaylarını üretiminizin kritikliğine göre birlikte belirliyoruz.",
            },
            {
                soru: "Bakım ekibimiz yok ama sürekli kullanım var, ne öneriyorsunuz?",
                cevap:
                    "Bu durumda satın almayı bir servis anlaşmasıyla desteklemenizi öneriyoruz; periyodik bakım ve arıza müdahalesi dışarıdan sağlanır. Bu ek maliyeti ROI hesabına dahil ettiğimizde, bazı tesisler için satın alma hâlâ avantajlı çıkarken bazıları için kiralama daha ekonomik kalabiliyor — bu, kesin kullanım verinizle netleşiyor.",
            },
            {
                soru: "İkinci el bir makine OSB'deki sürekli üretim için uygun mu?",
                cevap:
                    "Kullanım geçmişi ve bakım kaydı şeffafsa uygun olabilir, ancak sürekli üretimde arıza toleransı düşük olduğu için yeni makine genellikle daha güvenli bir seçimdir. İkinci el bir makine değerlendiriyorsanız periyodik kontrol raporlarını ve önceki kullanım yoğunluğunu mutlaka isteyin; yüksek yoğunlukta kullanılmış bir ikinci el makine, düşük yoğunlukta kullanılmış olana göre daha kısa ömür beklentisi taşıyabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir OSB'deki üretim tesislerinin sürekli/vardiyalı çalışma profili kamuya açık genel bilgidir; satın alma/kiralama ROI mantığı genel finansal pratiğe dayanır. Marka adı ve rakam kullanılmamıştır.",
    },

    "bolge:bilecik-cevre-ili": {
        h1: "Bilecik Çevresinde Akülü Makaslı Platform Satışı ve Kiralaması",
        giris:
            "Bilecik ve çevre ilçelerindeki işletmeler için satın alma/kiralama kararı, mesafe ve nakliye maliyetiyle iç içe geçer. Eskişehir merkeze göre daha uzak konumlanan bir işletme için, sık tekrarlayan bir ihtiyaçta her seferinde nakliye ödemek, satın almanın cazibesini artırabilir; buna karşılık nadiren ortaya çıkan bir ihtiyaçta satın alma hâlâ gereksiz bir yüktür. Bu bölgedeki değerlendirmelerimizde mesafeyi ayrı bir karar girdisi olarak ekliyoruz — sadece kullanım sıklığı değil, her kiralamanın taşıdığı nakliye payı da hesaba katılıyor.",
        maddeler: [
            {
                baslik: "Nakliye payının karara etkisi",
                metin:
                    "Merkeze uzak bir işletmede her kiralama sevkiyatı, yakın bir işletmeye göre daha yüksek nakliye bedeli taşır. Bu fark, kullanım sıklığı arttıkça toplam maliyette birikir ve satın almanın geri dönüş süresini kısaltabilir. Bu yüzden bölgedeki işletmelerle ROI hesabı yaparken nakliye kalemini ayrı bir satır olarak gösteriyoruz.",
            },
            {
                baslik: "Nadir ihtiyaçta satın almanın hâlâ dezavantajlı olması",
                metin:
                    "Nakliye payı yüksek olsa da, yılda bir-iki kez kullanılan bir ihtiyaç için satın alma yine mantıklı değildir; bakım, sigorta ve depolama maliyeti tek başına bu farkı kapatır. Bu profildeki işletmelere kiralamayı öneriyoruz, nakliye payını da içeren net bir teklifle.",
            },
            {
                baslik: "Birden fazla işletmenin ortak filo değerlendirmesi",
                metin:
                    "Aynı bölgedeki birkaç küçük işletme, tek başlarına satın alma eşiğine ulaşmasa da, birlikte bir makineyi paylaşarak kullanım yoğunluğunu artırabilir. Bu model resmi bir ortaklık gerektirmez; bazı işletmeler arasında gayriresmi bir paylaşım düzeni kurulabilir, biz de bu düzene uygun esnek kiralama seçenekleri sunabiliyoruz.",
            },
            {
                baslik: "Servis erişimi ve satın alma sonrası destek",
                metin:
                    "Merkeze uzak bir bölgede satın alınan makinenin arıza durumunda servis süresi uzayabilir. Bu, satın alma kararının bir parçası olarak değerlendirilmeli; servis anlaşmasının kapsama alanını ve müdahale süresini önceden netleştirmenizi öneriyoruz.",
            },
            {
                baslik: "Kırsal zeminde makine seçimi kararı etkiler",
                metin:
                    "Bölgedeki bazı işletmelerin sahaları kırsal ve zorlu zeminlere sahiptir; bu, standart bir makinenin her işe uymamasına yol açabilir. Zemin çeşitliliği yüksekse, tek bir makine satın almak yerine kiralamada iş türüne göre farklı gövde seçmek daha esnek bir çözüm sunar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mesafeye göre karar çerçevesi",
                paragraflar: [
                    "Bilecik çevresindeki işletmelerle yaptığımız değerlendirmelerde mesafe ve kullanım sıklığını birlikte ele alıyoruz; aşağıdaki tablo bu çerçeveyi özetliyor.",
                ],
                tablo: {
                    basliklar: ["Kullanım sıklığı", "Mesafe", "Nakliye payı etkisi", "Önerilen yol"],
                    satirlar: [
                        ["Nadir (yılda 1-2 kez)", "Uzak", "Yüksek ama tek seferlik", "Kiralama"],
                        ["Dönemsel", "Uzak", "Birikimli", "Kiralama, sevkiyat birleştirmeli"],
                        ["Düzenli aylık", "Uzak", "Belirgin", "Satın alma değerlendirilir"],
                        ["Düzenli aylık", "Yakın", "Düşük", "Kiralama hâlâ rekabetçi"],
                    ],
                },
            },
            {
                baslik: "Ortak filo ve paylaşım modeli",
                paragraflar: [
                    "Bölgedeki küçük işletmelerin ayrı ayrı satın alma eşiğine ulaşamaması yaygın bir durumdur. Bu işletmeler bir araya gelip bir makineyi paylaştığında, toplam kullanım yoğunluğu artar ve satın alma daha mantıklı hâle gelebilir.",
                    "Bu modeli resmi bir ortaklığa gerek kalmadan, esnek kiralama anlaşmalarıyla da destekleyebiliyoruz; her işletme kendi kullanım süresini ayrı faturalandırabilir.",
                ],
            },
            {
                baslik: "Nakliyeyi düşürmenin yolları",
                paragraflar: [
                    "Tek başına küçük bir kiralama için nakliye payı yüksek kalabilir. Bunu azaltmanın en pratik yolu, talebinizi bölgedeki başka bir planlı sevkiyatla birleştirmektir; bu, acil olmayan işlerde birkaç günlük tarih esnekliği gerektirir.",
                    "Düzenli tekrar eden bir ihtiyacınız varsa, sabit bir sevkiyat takvimi kurarak nakliye maliyetini öngörülebilir hâle getirebiliyoruz; bu, ROI hesabını da netleştiriyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Merkeze uzağız, her kiralamada nakliye ödemek satın almayı mantıklı kılar mı?",
                cevap:
                    "Kullanım sıklığınıza bağlı. Nakliye payı yüksek olsa da, yılda bir-iki kez kullanılan bir ihtiyaç için satın alma yine mantıklı değildir çünkü bakım ve depolama maliyeti bu farkı kapatır. Kullanım sıklığınız aylık seviyeye çıkıyorsa, birikmiş nakliye payı satın almanın geri dönüş süresini kısaltabilir; bu durumda ROI hesabını sizinle birlikte netleştiriyoruz.",
            },
            {
                soru: "Bölgedeki birkaç işletme birlikte bir makine alabilir mi?",
                cevap:
                    "Alabilir; bu, tek başına satın alma eşiğine ulaşamayan küçük işletmeler için değerlendirilebilecek bir model. Resmi bir ortaklık gerekmez, esnek bir paylaşım düzeni kurulabilir. Biz de bu düzene uygun kiralama seçenekleri sunarak, her işletmenin kendi kullanım süresini ayrı faturalandırmasını sağlayabiliyoruz.",
            },
            {
                soru: "Satın aldığımız makine arızalanırsa servis ne kadar sürede gelir?",
                cevap:
                    "Merkeze uzak bir bölgede servis süresi yakın bölgelere göre uzayabilir. Bu yüzden satın alma kararı verirken servis anlaşmasının kapsama alanını ve müdahale süresini önceden netleştirmenizi öneriyoruz. Bu netlik, arıza anında ne kadar bekleyeceğinizi baştan bilmenizi sağlıyor.",
            },
            {
                soru: "Sahalarımız zorlu zeminli, standart makine her işe uyar mı?",
                cevap:
                    "Her zaman uymayabilir. Zemin çeşitliliği yüksekse tek bir makine satın almak yerine, iş türüne göre farklı gövde tipini kiralamada seçmek daha esnek bir çözüm sunuyor. Sabit ve sık tekrarlayan bir zemin tipiniz varsa, o zemine uygun bir makineyi satın alıp diğer durumları kiralamayla tamamlamak da mümkün.",
            },
            {
                soru: "Nakliye maliyetini düşürmenin bir yolu var mı?",
                cevap:
                    "Var; talebinizi bölgedeki başka bir planlı sevkiyatla birleştirerek nakliye payını paylaştırabiliyoruz. Bunun için acil olmayan işlerde birkaç günlük tarih esnekliği vermeniz yeterli. Düzenli tekrar eden bir ihtiyacınız varsa sabit bir sevkiyat takvimi kurarak maliyeti öngörülebilir hâle getirebiliyoruz.",
            },
            {
                soru: "Kesin karar vermeden önce deneme amaçlı kiralama yapabilir miyiz?",
                cevap:
                    "Yapabilirsiniz ve bunu öneriyoruz. Kısa süreli bir kiralamayla makinenin işinize uygunluğunu ve gerçek kullanım sıklığınızı gözlemleyip, bu veriyle satın alma kararını daha isabetli verebilirsiniz. Mesafe ve nakliye payı gibi değişkenlerin gerçek etkisini de bu deneme sürecinde net olarak görürsünüz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik ve çevre ilçelerin Eskişehir merkeze göre konumu kamuya açık coğrafi bilgidir; satın alma/kiralama ROI mantığı genel finansal pratiğe dayanır. Marka adı ve rakam kullanılmamıştır.",
    },

    "bolge:kutahya-cevre-ili": {
        h1: "Kütahya Çevresinde Akülü Makaslı Platform Satışı ve Kiralaması",
        giris:
            "Kütahya ve çevresi, ilin köklü seramik ve çini sanayii ile karma bir sanayi-tarım yapısını bir arada barındırır. Bu çeşitlilik, satın alma/kiralama kararını da çeşitlendirir: seramik üretim tesislerinde kullanım sıklığı yüksek olabilirken, küçük atölye ve tarımsal işletmelerde nadir ve dönemsel kalır. Bölgedeki değerlendirmelerimizde önce işletmenin sektörünü ve üretim sürekliliğini soruyoruz; sürekli üretim yapan tesislerde satın alma gündeme gelirken, dönemsel ve küçük ölçekli işletmelerde kiralama neredeyse her zaman daha ekonomik çıkıyor.",
        maddeler: [
            {
                baslik: "Seramik üretim tesislerinde kullanım sıklığı",
                metin:
                    "Seramik ve çini üretim tesislerinde fırın, kurutma ve sırlama hatlarının bakımı düzenli aralıklarla tekrarlanır. Bu düzenlilik, kullanım sıklığını artırır ve satın almanın ROI hesabında öne çıkmasını sağlayabilir; ancak fırın çevresindeki yüksek sıcaklık nedeniyle makinenin belirli işlere özgü ek koruma gerektirebileceği de hesaba katılmalıdır.",
            },
            {
                baslik: "Küçük atölyelerde kiralamanın süregelen avantajı",
                metin:
                    "Bölgedeki küçük ölçekli çini ve seramik atölyeleri genellikle yılda birkaç kez platform ihtiyacı duyar. Bu profildeki işletmeler için satın alma, atıl kalma süresi nedeniyle dezavantajlıdır; kiralama bu ihtiyacı bakım yükü olmadan karşılar.",
            },
            {
                baslik: "Tarımsal işletmelerde mevsimsel talep",
                metin:
                    "Kütahya çevresindeki tarımsal depo ve ahır yapılarında platform ihtiyacı genellikle hasat öncesi ve sonrası dönemlerde yoğunlaşır. Bu mevsimsel örüntü, satın almayı değil kiralamayı destekler; makine yalnızca ihtiyaç duyulan dönemde kiralanır, geri kalan zamanda bakım ve depolama yükü taşınmaz.",
            },
            {
                baslik: "Sanayi-tarım karışık bölgede filo esnekliği",
                metin:
                    "Bölgedeki bazı işletmeler hem sanayi hem tarımsal faaliyet yürütür; bu karma profil, tek bir makine tipinin her ihtiyacı karşılamamasına yol açar. Sanayi tarafındaki düzenli ihtiyacı satın alma ile, tarımsal tarafındaki mevsimsel ihtiyacı kiralama ile karşılamak, bu tip işletmeler için dengeli bir çözüm sunuyor.",
            },
            {
                baslik: "Uzak konumda servis ve yedek parça erişimi",
                metin:
                    "Kütahya çevresindeki bazı işletmeler merkeze uzak konumdadır; satın alınan bir makinenin servis ve yedek parça erişimi bu mesafeden etkilenir. Satın alma kararı verirken servis anlaşmasının kapsama alanını ve müdahale süresini netleştirmenizi öneriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sektöre göre karar çerçevesi",
                paragraflar: [
                    "Kütahya çevresindeki farklı sektörlerin tipik kararını aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Kullanım örüntüsü", "Genel eğilim", "Not"],
                    satirlar: [
                        ["Seramik/çini üretim tesisi", "Düzenli, tekrarlayan", "Duruma göre satın alma", "Fırın çevresi ek dikkat"],
                        ["Küçük çini atölyesi", "Yılda birkaç kez", "Kiralama", "Bakım yükü yok"],
                        ["Tarımsal depo/ahır", "Mevsimsel", "Kiralama", "Hasat öncesi/sonrası"],
                        ["Karma sanayi-tarım işletme", "Değişken", "Karma model", "Filo + tamamlayıcı kiralama"],
                    ],
                },
            },
            {
                baslik: "Mevsimsel talebi kiralamayla yönetmek",
                paragraflar: [
                    "Tarımsal işletmelerde talep hasat öncesi ve sonrası dönemlerde yoğunlaşır; bu dönemlerde erken rezervasyon, tercih edilen tarihi güvence altına alır. Mevsim dışında bu ihtiyaç neredeyse hiç ortaya çıkmadığı için satın alma bu profile uymuyor.",
                    "Düzenli tekrar eden bir mevsimsel ihtiyacınız varsa, her yıl aynı döneme sabit bir rezervasyon kurarak planlamayı kolaylaştırabiliyoruz.",
                ],
            },
            {
                baslik: "Fırın ortamında ek koruma ihtiyacı",
                paragraflar: [
                    "Seramik üretim tesislerinde fırın çevresindeki yüksek sıcaklık, hem satın alınan hem kiralanan makinenin belirli işlere özgü ek koruma gerektirmesine yol açabilir. Bu ek ihtiyacı hem satın alma hem kiralama teklifinize dahil ediyoruz; ihmal edilirse makinenin ömrü kısalabilir.",
                    "Satın alma kararı veren tesislerde bu koruma önlemlerini üretici talimatına göre belgelendirmenizi öneriyoruz; bu, garanti kapsamının korunması açısından önemli.",
                ],
            },
        ],
        sss: [
            {
                soru: "Seramik üretim tesisimizde satın alma mantıklı mı?",
                cevap:
                    "Fırın, kurutma ve sırlama hatlarınızın bakım sıklığına bağlı. Düzenli ve sık tekrarlayan bir bakım örüntünüz varsa satın alma ROI hesabında öne çıkabilir. Ancak fırın çevresindeki yüksek sıcaklık nedeniyle makinenin ek koruma gerektirebileceğini de hesaba katmanızı öneriyoruz; bu maliyeti ROI hesabına dahil ediyoruz.",
            },
            {
                soru: "Küçük çini atölyemiz için satın alma değer mi?",
                cevap:
                    "Genellikle değmez. Küçük atölyelerin platform ihtiyacı yılda birkaç kez ortaya çıktığı için satın alma, atıl kalma süresi nedeniyle dezavantajlıdır. Kiralama bu ihtiyacı bakım ve depolama yükü olmadan karşılıyor; ihtiyaç duyduğunuzda talep ediyor, kullandığınız süre için ödeme yapıyorsunuz.",
            },
            {
                soru: "Tarımsal deponuz için hangi dönemde rezervasyon yapmalıyız?",
                cevap:
                    "Talep hasat öncesi ve sonrası dönemlerde yoğunlaştığı için erken rezervasyon öneriyoruz. Düzenli tekrar eden bir mevsimsel ihtiyacınız varsa, her yıl aynı döneme sabit bir rezervasyon kurarak planlamayı kolaylaştırabiliyoruz; bu, hem sizin hem bizim için öngörülebilirlik sağlıyor.",
            },
            {
                soru: "Hem sanayi hem tarımsal faaliyetimiz var, tek makine yeterli mi?",
                cevap:
                    "Genellikle yeterli olmuyor, çünkü iki faaliyetin zemin ve erişim ihtiyacı farklı olabiliyor. Sanayi tarafındaki düzenli ihtiyacı satın alma ile, tarımsal tarafındaki mevsimsel ihtiyacı kiralama ile karşılamanızı öneriyoruz; bu karma model, her iki tarafın ihtiyacını da gereğinden fazla yatırım yapmadan karşılıyor.",
            },
            {
                soru: "Merkeze uzağız, satın aldığımız makinenin servisi nasıl sağlanıyor?",
                cevap:
                    "Satın alma kararı verirken servis anlaşmasının kapsama alanını ve müdahale süresini önceden netleştirmenizi öneriyoruz. Uzak konumda arıza müdahale süresi uzayabilir; bu riski azaltmak için servis anlaşmasını üretim kritikliğinize göre şekillendiriyoruz.",
            },
            {
                soru: "Fırın çevresinde çalışacak makine standarttan farklı mı olmalı?",
                cevap:
                    "Fırın soğumadan çalışılamayacağı için önce soğuma süresini işin planına dahil ediyoruz; makinenin kendisi için ise yüksek sıcaklığa maruz kalma süresi ve mesafesi değerlendirilir. Bu değerlendirme hem kiralama hem satın alma öncesi yapılmalı; ihmal edilirse makinenin lastik ve elektronik aksamı erken yıpranabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kütahya'nın seramik-çini sanayii kimliği ve çevresindeki tarımsal karakter kamuya açık genel bilgidir; satın alma/kiralama ROI mantığı genel finansal pratiğe dayanır. Marka adı ve rakam kullanılmamıştır.",
    },
};
