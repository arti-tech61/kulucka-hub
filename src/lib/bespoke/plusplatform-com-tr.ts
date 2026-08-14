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

    // ═══════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI (11 sabit slug) — "plus" açısı: standart kiralamaya
    // ek olarak sunulan genişletilmiş hizmet paketi (bakım + sigorta +
    // arıza halinde hızlı makine değişimi). operatorlu-platform-kiralama ve
    // cok-noktali-rota-bakim-platformu en detaylı işlenen iki ana konudur.
    // Yazım: 2026-08-14. Firma adı, kapasite ve mesafe rakamı uydurulmadı.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli / Örümcek Platform Kiralama: Plus Paketle Kesintisiz Erişim",
        giris:
            "Sepetli ve örümcek platformlar, dar geçitlerden geçebilme ve merdiven boşluğu, avlu, iç bahçe gibi standart makinenin ulaşamadığı noktalara girebilme yeteneğiyle diğer sınıflardan ayrılır — ama bu manevra kabiliyeti, makinenin mekanik olarak daha karmaşık olması anlamına da gelir. Biz bu sınıfı kiralarken 'plus' yaklaşımımızı devreye sokuyoruz: makine teslim edildiği andan işin bittiği ana kadar periyodik bakım kontrolü, kullanım sırasında oluşabilecek hasarlara karşı sigorta kapsamı ve arıza durumunda aynı gün içinde ikame makine garantisi standart teklifin bir parçası olarak sunulur. Bunun nedeni basit: örümcek platform genellikle tek bir kritik işin (örneğin bir cephe onarımı ya da özel bir montaj) ortasında kullanılır ve makinenin durması, işin tamamının durması anlamına gelir. Plus paket, bu riski işletmenin üzerinden alıp bize taşır.",
        maddeler: [
            {
                baslik: "Manevra kabiliyeti neden mekanik riski artırır",
                metin:
                    "Sepetli platformların dar alanlara girebilmesi, çok eklemli ve hareketli bir şase yapısından gelir; bu yapı standart makaslı platforma göre daha fazla hidrolik bağlantı ve mafsal içerir. Hareketli parça sayısı arttıkça, düzenli bakımın önemi de artar — bu yüzden bu sınıfta bakım kontrolünü teslimat öncesi rutin bir adım değil, kiralama süresi boyunca takip edilen bir süreç olarak kurguluyoruz.",
            },
            {
                baslik: "Dar alan işlerinde arızanın maliyeti daha yüksek",
                metin:
                    "Standart bir açık alanda makine arızalanırsa alternatif bir makineyle devam etmek görece kolaydır; ama örümcek platformun girdiği dar bir avlu veya merdiven boşluğunda arıza, o noktaya başka bir makinenin sığmaması riskiyle birleşir. Plus paketimizdeki hızlı değişim garantisi tam olarak bu senaryo için kurgulanmıştır — aynı erişim özelliğine sahip bir ikame makine, mümkün olan en kısa sürede sahaya yönlendirilir.",
            },
            {
                baslik: "Sigorta kapsamı: kimin sorumluluğu nerede başlar",
                metin:
                    "Dar alan çalışmasında çevredeki yapı, duvar veya tesisata temas riski standart açık alan işine göre daha yüksektir. Plus paket kapsamındaki sigorta, makinenin kendisinde oluşabilecek hasarı kapsar; çevredeki yapıya verilebilecek hasar konusundaki sorumluluk paylaşımı teslimat öncesi sözleşmede netleştirilir, böylece iş sırasında belirsizlik yaşanmaz.",
            },
            {
                baslik: "Operatör deneyiminin bu sınıftaki önemi",
                metin:
                    "Örümcek platformun çok eklemli yapısı, kumanda öğrenme eğrisini standart makaslı platforma göre daha uzun kılar. Bu yüzden dar alan işlerinde deneyimli operatör kullanımını öneriyoruz; plus paket operatörlü seçenekle birlikte alındığında, hem makine hem operatör tarafında risk aynı anda azaltılmış olur.",
            },
            {
                baslik: "Kısa süreli işlerde paket ekonomisi",
                metin:
                    "Sepetli platform kiralamaları genellikle birkaç günlük kısa süreli işlerdir; bu kısa sürede bir arıza yaşanması, işin toplam takvimini orantısız şekilde etkiler. Plus paketin bakım ve hızlı değişim bileşeni, kısa süreli işlerde asıl değerini burada gösterir — birkaç günlük bir işte bir günlük gecikme, aylık bir kiralamadaki bir günlük gecikmeden çok daha ağır basar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Standart kiralama ile plus paket arasındaki fark",
                paragraflar: [
                    "Aşağıdaki tablo, sepetli/örümcek platform kiralamasında standart teklif ile plus paketin neyi farklı kapsadığını gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Kapsam", "Standart kiralama", "Plus paket"],
                    satirlar: [
                        ["Periyodik bakım kontrolü", "Teslimat öncesi tek kontrol", "Kiralama süresi boyunca takip"],
                        ["Sigorta kapsamı", "Sınırlı/opsiyonel", "Makine hasarına karşı dahil"],
                        ["Arıza durumunda değişim", "Talep üzerine, standart süre", "Aynı gün ikame makine önceliği"],
                        ["Operatör desteği", "Ayrı talep", "Paketle birlikte önerilir"],
                    ],
                },
            },
            {
                baslik: "Dar alan işlerinde keşif önerisi",
                paragraflar: [
                    "Örümcek platformun gireceği geçit genişliği ve dönüş yarıçapı, doğru makine modelinin seçilmesinde belirleyicidir. Kesin ölçüleri paylaşmanız, hem doğru makinenin gönderilmesini hem de bir hasar riskinin önceden fark edilmesini sağlar.",
                    "Ölçü paylaşımı mümkün değilse, sahaya kısa bir ön keşif yapılmasını öneriyoruz; bu, plus paketin sigorta kapsamının doğru şekilde kurgulanmasına da yardımcı olur.",
                ],
            },
            {
                baslik: "Plus paketin işlemeyeceği durumlar",
                paragraflar: [
                    "Plus paket, makinenin doğru ve talimatlara uygun kullanımını varsayar; kapasite aşımı veya talimat dışı kullanımdan kaynaklanan hasarlar sigorta kapsamı dışında kalır. Bu sınırı teslimat sırasında açıkça anlatıyoruz, böylece kapsamın nerede başlayıp nerede bittiği baştan net olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Plus paket ek bir ücret mi, yoksa standart teklife dahil mi?",
                cevap:
                    "Sepetli/örümcek platform kiralamalarında plus paketi standart teklifin bir parçası olarak sunuyoruz, çünkü bu sınıfın mekanik karmaşıklığı ve dar alan işlerinde arızanın maliyeti bunu gerektiriyor. Teklifte bakım, sigorta ve hızlı değişim bileşenleri ayrı satırlar olarak gösterilir, böylece neyin dahil olduğunu net görürsünüz.",
            },
            {
                soru: "Makine dar bir avluda arızalanırsa ne kadar sürede değişim yapılıyor?",
                cevap:
                    "Kesin bir süre taahhüt etmek yerine, aynı gün içinde ikame makine yönlendirmesini öncelik olarak kurguluyoruz. Sahanın erişim koşulları (geçit genişliği, mesafe) değişim süresini etkileyen değişkenlerdir; bu bilgileri teslimat öncesi paylaşırsanız olası bir arıza senaryosunda süreç daha hızlı işler.",
            },
            {
                soru: "Sigorta kapsamı makinenin kendisini mi, yoksa çevredeki yapıyı da mı kapsıyor?",
                cevap:
                    "Plus paket kapsamındaki sigorta öncelikle makinenin kendisinde oluşabilecek hasarı kapsar. Çevredeki duvar, tesisat veya yapıya verilebilecek hasar konusundaki sorumluluk paylaşımı, işin niteliğine göre teslimat öncesi sözleşmede ayrıca netleştirilir; bu ayrımı iş başlamadan önce sizinle birlikte gözden geçiriyoruz.",
            },
            {
                soru: "Operatörsüz kiralayabilir miyiz, plus paket yine geçerli olur mu?",
                cevap:
                    "Evet, plus paket operatörlü ve operatörsüz kiralamada aynı şekilde geçerlidir. Ancak örümcek platformun çok eklemli kumanda yapısı nedeniyle, ilk kez bu sınıfı kullanacak personel için kısa bir tanıtım sürecini öneriyoruz; bu, plus paketin bakım-güvenlik mantığıyla tutarlı bir tamamlayıcı adımdır.",
            },
            {
                soru: "İşimiz sadece bir-iki gün sürecek, plus paket buna değer mi?",
                cevap:
                    "Kısa süreli işlerde bir arızanın etkisi orantısız şekilde büyür — birkaç günlük bir işte bir günlük gecikme, işin tamamını aksatabilir. Bu yüzden plus paketin asıl değeri kısa süreli işlerde ortaya çıkıyor; hızlı değişim garantisi, kısa takvimli işin zamanında bitmesini güvence altına almaya yardımcı oluyor.",
            },
            {
                soru: "Talimat dışı kullanımdan kaynaklanan bir hasar olursa ne oluyor?",
                cevap:
                    "Plus paket, makinenin doğru ve talimatlara uygun kullanımını varsayar; kapasite aşımı veya talimat dışı kullanımdan kaynaklanan hasarlar sigorta kapsamının dışında kalır. Bu sınırı teslimat sırasında açıkça anlatıyoruz ve kumanda-güvenlik eğitimini bu yüzden atlamıyoruz; amaç, kapsamın nerede başlayıp nerede bittiğinin baştan net olması.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli/örümcek platform sınıfının mekanik yapısı ve dar alan kullanım özellikleri genel sektör bilgisidir; plus paket kapsamı firma pratiğidir. Marka adı ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Nakliye ve Teslimat Hizmeti: Plus Paketle Sigortalı Sevkiyat",
        giris:
            "Bir platform kiralamasının en az konuşulan ama en çok soruna yol açabilen kısmı nakliyedir — makine yola çıktığı andan sahaya indirildiği ana kadar geçen süre, standart kiralama tekliflerinde çoğu zaman 'nakliye dahildir' gibi tek satırlık bir ifadeyle geçiştirilir. Biz bu yaklaşımı yeterli bulmuyoruz. Plus paketimizde nakliye, kendi başına bir hizmet kalemi olarak ele alınır: sevkiyat sırasında oluşabilecek hasarlara karşı sigorta kapsamı, teslimat penceresinin netliği ve bir gecikme durumunda işletmenizin ne kadar bekleyeceğinin önceden bilinmesi bu paketin parçasıdır. Amacımız, makinenin kendisi kadar makinenin sahaya ulaşma sürecini de güvence altına almak — çünkü bir platformun teknik özellikleri ne kadar iyi olursa olsun, zamanında ve hasarsız gelmezse iş takviminizi korumaz.",
        maddeler: [
            {
                baslik: "Nakliye sırasında hasar riski nereden gelir",
                metin:
                    "Bir platformun karayoluyla taşınması sırasında en sık karşılaşılan risk, yükleme-boşaltma sırasındaki manevra hatalarından kaynaklanır; makinenin kendisi yoldayken görece güvendedir, asıl riskli anlar kamyona yükleme ve sahaya indirme sırasında ortaya çıkar. Plus paket kapsamındaki sigorta, özellikle bu kritik anları kapsayacak şekilde kurgulanır.",
            },
            {
                baslik: "Teslimat penceresi neden belirsiz bırakılmamalı",
                metin:
                    "Standart tekliflerde 'gün içinde teslim' gibi geniş bir ifade kullanılması, işletmenin o günü tamamen belirsizlikle geçirmesine yol açar. Plus paket, teslimat için daraltılmış bir zaman aralığı verir ve bu aralığın dışına çıkılması durumunda işletmeye önceden haber verilmesini standart hâle getirir.",
            },
            {
                baslik: "Geri alım (toplama) sürecinin de aynı standarda tabi olması",
                metin:
                    "Nakliye yalnızca teslimat anını değil, kiralama bitiminde makinenin sahadan geri alınmasını da kapsar. Geri alım gecikirse, makine sahada gereksiz yere alan işgal eder ve bazı durumlarda ek bir güvenlik sorumluluğu doğurur. Plus paket, geri alım sürecini de teslimatla aynı standartta (net pencere, sigorta kapsamı) ele alır.",
            },
            {
                baslik: "Çoklu makine sevkiyatında koordinasyon",
                metin:
                    "Bir işte birden fazla makine gerekiyorsa, bu makinelerin aynı ya da yakın zamanlı sevkiyatla sahaya ulaşması iş takvimini korur. Plus paket kapsamında çoklu sevkiyatları koordine ediyoruz; makinelerden biri farklı bir noktadan geliyorsa bile teslimat penceresi ortak bir plana göre kurgulanır.",
            },
            {
                baslik: "Nakliye maliyetinin şeffaflığı",
                metin:
                    "Nakliye bedelinin teklife nasıl yansıdığı, çoğu zaman işletmelerin sorguladığı ama net cevap alamadığı bir konudur. Plus paket teklifinde nakliye ayrı bir satır olarak gösterilir; bu, hem maliyetin şeffaf olmasını hem de sigorta kapsamının hangi bedel üzerinden kurgulandığının anlaşılmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Standart nakliye ile plus paket nakliye karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki yaklaşım arasındaki temel farkları özetliyor.",
                ],
                tablo: {
                    basliklar: ["Kapsam", "Standart nakliye", "Plus paket nakliye"],
                    satirlar: [
                        ["Teslimat penceresi", "Gün içinde, geniş aralık", "Daraltılmış saat aralığı"],
                        ["Sigorta kapsamı", "Sınırlı", "Yükleme-boşaltma dahil kapsamlı"],
                        ["Gecikme bildirimi", "Talep üzerine", "Önceden proaktif bildirim"],
                        ["Geri alım süreci", "Ayrı planlama", "Teslimatla aynı standart"],
                    ],
                },
            },
            {
                baslik: "Saha erişim koşullarının nakliyeye etkisi",
                paragraflar: [
                    "Sahaya giriş yolunun genişliği, kapı yüksekliği ve zemin taşıma kapasitesi, hangi nakliye aracının kullanılacağını doğrudan belirler. Bu bilgileri teslimat öncesi paylaşmanız, hem doğru aracın planlanmasını hem de yükleme-boşaltma sırasındaki hasar riskinin azaltılmasını sağlar.",
                    "Erişim koşulları net değilse, kısa bir ön değerlendirme yaparak nakliye planını buna göre kuruyoruz; bu, plus paketin sigorta kapsamının doğru kurgulanması için de gerekli bir adım.",
                ],
            },
            {
                baslik: "Acil ihtiyaçlarda nakliye önceliklendirmesi",
                paragraflar: [
                    "Beklenmedik bir arıza ya da acil bir iş nedeniyle standart teslimat penceresinden daha hızlı bir sevkiyat gerekiyorsa, bu talebi ayrıca değerlendiriyoruz. Plus paket müşterileri için bu tür acil taleplerde öncelik tanınır, ancak kesin süre saha koşullarına ve mevcut sevkiyat programına bağlıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Nakliye sırasında makinede bir hasar oluşursa kim sorumlu?",
                cevap:
                    "Plus paket kapsamındaki sigorta, özellikle yükleme ve boşaltma sırasında oluşabilecek hasarları kapsayacak şekilde kurgulanır — çünkü asıl risk bu anlarda ortaya çıkar. Standart nakliyede bu kapsam sınırlı olabilir; plus paket seçildiğinde kapsamın tam olarak neyi içerdiğini teklifte ayrı satır olarak görürsünüz.",
            },
            {
                soru: "Teslimat için kesin bir saat verebiliyor musunuz?",
                cevap:
                    "Plus paket kapsamında 'gün içinde' gibi geniş bir ifade yerine daraltılmış bir zaman aralığı veriyoruz. Bu aralığın dışına çıkılması gerektiği bir durum oluşursa, işletmenize önceden haber vermeyi standart hâle getirdik; böylece o günü belirsizlikle geçirmezsiniz.",
            },
            {
                soru: "Kiralama bitince makineyi biz mi geri göndermeliyiz, yoksa siz mi alıyorsunuz?",
                cevap:
                    "Geri alım sürecini biz yönetiyoruz ve plus paket kapsamında bunu teslimatla aynı standartta ele alıyoruz — net bir zaman penceresi veriyoruz ve gecikme olursa haber veriyoruz. Makinenin sahada gereksiz yere alan işgal etmesini ya da bir güvenlik sorumluluğu doğurmasını bu şekilde önlüyoruz.",
            },
            {
                soru: "Birden fazla makine kiralıyoruz, hepsi aynı anda mı gelecek?",
                cevap:
                    "Mümkün olduğunca aynı ya da yakın zamanlı sevkiyatla sahaya ulaşmalarını koordine ediyoruz, çünkü çoklu makine gereken işlerde takvim genellikle en geç gelen makineye göre şekillenir. Makinelerden biri farklı bir noktadan geliyorsa bu durumu önceden bildiriyoruz ve ortak bir teslimat planı kuruyoruz.",
            },
            {
                soru: "Nakliye maliyeti teklife nasıl yansıyor, ayrı mı gösteriliyor?",
                cevap:
                    "Evet, nakliye bedelini teklifte ayrı bir satır olarak gösteriyoruz; makine kirasıyla karıştırılmış bir paket fiyat sunmuyoruz. Bu şeffaflık, hem maliyetinizi net görmenizi hem de sigorta kapsamının hangi bedel üzerinden kurgulandığını anlamanızı sağlıyor.",
            },
            {
                soru: "Acil bir ihtiyacımız çıktı, standart teslimat penceresini bekleyemiyoruz, ne yapabiliriz?",
                cevap:
                    "Bu tür acil talepleri ayrıca değerlendiriyoruz ve plus paket müşterilerine öncelik tanıyoruz. Kesin süre, sahanızın konumuna ve o anki sevkiyat programımıza bağlı olarak değişir; acil ihtiyacınızı bildirdiğinizde elimizdeki en hızlı seçeneği net olarak paylaşıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Nakliye sırasındaki tipik hasar riskleri (yükleme-boşaltma anları) genel lojistik pratiğine dayanır; plus paket kapsamı ve teslimat penceresi yaklaşımı firma pratiğidir. Rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift ve İstifleme Kiralama: Plus Paketle Bakımlı Filo",
        giris:
            "Forklift kiralaması, platform kiralamasına göre çoğu zaman daha yoğun ve sürekli kullanım anlamına gelir — bir depo ya da üretim tesisinde forklift günün büyük bölümünde, bazen vardiya boyunca çalışır. Bu yoğun kullanım profili, bakımın önemini platform kiralamasına göre bir kademe daha öne çıkarır: bir forkliftin lastiği veya hidrolik sistemi yoğun kullanımda daha hızlı yıpranır ve bakımsız bir makinenin arızalanma olasılığı artar. Plus paketimiz forklift kiralamasında bu gerçeği merkeze alır — periyodik bakım kontrolü, arızaya karşı sigorta kapsamı ve arıza anında hızlı değişim garantisi standart teklifin parçasıdır; amacımız, işletmenizin istifleme-yük taşıma operasyonunun bir makine arızası yüzünden durmasını engellemek.",
        maddeler: [
            {
                baslik: "Yoğun kullanımda bakımın rolü platform kiralamasından farklı",
                metin:
                    "Bir platform genellikle günün belirli saatlerinde, belirli bir işte kullanılırken, forklift bir depoda sürekli hareket hâlindedir. Bu fark, bakım periyodunun forklift kiralamasında daha sık gözden geçirilmesini gerektirir; plus paket kapsamında bakım kontrolünü kiralama süresine yayılmış bir süreç olarak kurguluyoruz, tek seferlik bir teslimat kontrolü olarak değil.",
            },
            {
                baslik: "İstifleme yüksekliği ve kapasite uyumu",
                metin:
                    "Yanlış kapasite veya yükseklikte seçilen bir forklift, hem verimsiz çalışır hem de yıpranma riskini artırır. Plus paket teslimatı öncesinde istifleme yüksekliğinizi ve tipik yük ağırlığınızı sorup, makineyi bu profile göre öneriyoruz; bu, hem bakım yükünü hem arıza riskini baştan azaltan bir adım.",
            },
            {
                baslik: "Depo içi kullanımda sigorta kapsamının kritikliği",
                metin:
                    "Yoğun depo trafiğinde forkliftin raf sistemine, palete ya da çevredeki ekipmana temas riski platform kullanımına göre daha yüksektir. Plus paket kapsamındaki sigorta, makinenin kendisinde oluşabilecek hasarı kapsar; çevredeki yapı ve stoğa verilebilecek hasar konusundaki sorumluluk paylaşımı teslimat öncesi netleştirilir.",
            },
            {
                baslik: "Arıza anında operasyonun durmaması",
                metin:
                    "Sürekli çalışan bir depoda forkliftin arızalanması, istifleme ve sevkiyat akışını doğrudan durdurur. Plus paketin hızlı değişim garantisi, bu senaryoya özel olarak kurgulanmıştır — arızalanan makine yerine aynı sınıf bir ikame makine öncelikli olarak yönlendirilir, operasyonun uzun süre durması engellenir.",
            },
            {
                baslik: "Operatör yeterliliği ve bakım disiplini bağlantısı",
                metin:
                    "Forkliftin doğru kullanılmaması (aşırı yükleme, uygunsuz manevra) bakım ihtiyacını hızlandırır. Belgeli ve deneyimli operatör kullanımı, plus paketin bakım bileşeninin etkili çalışmasını destekleyen bir tamamlayıcıdır; operatörlü kiralama seçeneğini bu yüzden birlikte değerlendirmenizi öneriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kullanım yoğunluğuna göre bakım önerisi",
                paragraflar: [
                    "Aşağıdaki tablo, forklift kullanım yoğunluğuna göre plus paket kapsamının nasıl şekillendiğini gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Kullanım profili", "Bakım kontrol sıklığı", "Sigorta kapsamı", "Değişim önceliği"],
                    satirlar: [
                        ["Tek vardiya, hafif yük", "Kiralama ortasında bir kontrol", "Standart", "Standart"],
                        ["Çok vardiyalı, yoğun trafik", "Haftalık kontrol", "Genişletilmiş", "Öncelikli"],
                        ["Soğuk hava deposu/özel ortam", "Ortam koşuluna göre sık kontrol", "Genişletilmiş", "Öncelikli"],
                        ["Dış saha, düzensiz zemin", "Sık kontrol", "Genişletilmiş", "Öncelikli"],
                    ],
                },
            },
            {
                baslik: "İstifleme kapasitesi doğru seçilmezse ne olur",
                paragraflar: [
                    "Kapasitenin altında seçilen bir forklift, sürekli sınırda çalıştığı için hem verimsizdir hem de hidrolik sistem üzerinde ek yıpranma yaratır. Kapasitenin üzerinde seçilen bir forklift ise gereksiz maliyet ve depo içinde manevra zorluğu doğurur.",
                    "Bu yüzden teslimat öncesi tipik yük ağırlığınızı ve istifleme yüksekliğinizi netleştirmenizi öneriyoruz; plus paket kapsamında bu değerlendirmeyi sizinle birlikte yapıyoruz.",
                ],
            },
            {
                baslik: "Arıza anında iletişim akışı",
                paragraflar: [
                    "Bir arıza durumunda hızlı değişimin işlemesi, sorunun bize hızlı bildirilmesine bağlıdır. Plus paket kapsamında net bir bildirim kanalı tanımlıyoruz ve arıza bildirildiği andan itibaren ikame makine süreci başlatılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift kiralamasında plus paket bakımı nasıl işliyor, biz mi talep ediyoruz?",
                cevap:
                    "Hayır, bakım kontrolünü kiralama süresine yaydığımız için talep beklemeden periyodik olarak planlıyoruz. Kullanım yoğunluğunuza göre (tek vardiya mı çok vardiyalı mı) kontrol sıklığını belirliyoruz; yoğun kullanımda kontrol sıklığı artıyor, hafif kullanımda kiralama ortasında tek bir kontrol yeterli olabiliyor.",
            },
            {
                soru: "Forklift depo içinde rafa çarparsa sigorta neyi kapsıyor?",
                cevap:
                    "Plus paket kapsamındaki sigorta öncelikle makinenin kendisinde oluşabilecek hasarı kapsar. Rafa veya stoğa verilebilecek hasar konusundaki sorumluluk paylaşımı, teslimat öncesi sözleşmede netleştirilir; bu ayrımı iş başlamadan önce sizinle birlikte gözden geçiriyoruz, böylece belirsizlik yaşanmıyor.",
            },
            {
                soru: "Forklift arızalanırsa depo operasyonumuz ne kadar durur?",
                cevap:
                    "Kesin bir süre taahhüt etmek yerine, arızalanan makine yerine aynı sınıf bir ikame makinenin öncelikli olarak yönlendirilmesini garanti ediyoruz. Sürekli çalışan bir depoda bu önceliğin ne kadar kritik olduğunu biliyoruz; arıza bildirimi ile ikame makine süreci arasındaki süreyi mümkün olan en kısaya indirmeyi hedefliyoruz.",
            },
            {
                soru: "Hangi kapasitede forklift kiralamamız gerektiğini nasıl belirliyoruz?",
                cevap:
                    "Tipik yük ağırlığınızı ve istifleme yüksekliğinizi paylaşmanızı istiyoruz; bu bilgiyle doğru kapasitede bir makine öneriyoruz. Kapasitenin altında ya da üzerinde seçilen bir makine hem verimsizdir hem de gereksiz yıpranma ya da maliyete yol açar, bu yüzden bu değerlendirmeyi teslimat öncesi birlikte yapıyoruz.",
            },
            {
                soru: "Soğuk hava deposunda forklift kullanacağız, plus paket kapsamı değişiyor mu?",
                cevap:
                    "Evet, özel ortam koşulları (soğuk hava, tozlu ortam, dış saha) bakım kontrol sıklığını artıran bir etken; bu ortamlarda hidrolik ve elektronik aksam standart ortama göre daha hızlı etkilenebilir. Plus paket kapsamında bu tür ortamlar için kontrol sıklığını ve sigorta kapsamını genişletilmiş şekilde kurguluyoruz.",
            },
            {
                soru: "Operatörsüz kiralıyoruz, bakım disiplini bizim sorumluluğumuzda mı?",
                cevap:
                    "Günlük kullanım disiplini (aşırı yükleme yapmamak, uygun manevra) operatörsüz kiralamada işletmenizin sorumluluğunda kalır ve bu disiplin, plus paketin bakım bileşeninin etkili çalışması için önemlidir. Belgeli ve deneyimli operatör kullanımını bu yüzden öneriyoruz; isterseniz operatörlü kiralamayla bu riski daha da azaltabilirsiniz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift kullanım yoğunluğu ve bakım ilişkisi genel sektör bilgisidir; plus paket kapsamı firma pratiğidir. Marka adı ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) Kiralama: Plus Paketle Genişletilmiş Sigorta",
        giris:
            "Eklemli platformlar (boom), engel aşma ve yatay-dikey erişimi aynı anda sunma yeteneğiyle diğer sınıflardan ayrılır — bir yapının önündeki bir engeli (örneğin bir su birikintisi, bir çit ya da bir başka yapı elemanı) aşıp hedefe erişebilme özelliği, bu sınıfı özellikle cephe ve dış mekân işlerinde vazgeçilmez kılar. Ama bu esneklik, makinenin daha yüksek noktalara ve daha karmaşık konumlandırmalara ulaşması anlamına da gelir, bu da hem sigorta ihtiyacını hem bakım hassasiyetini standart makaslı platforma göre artırır. Plus paketimizde eklemli platform kiralaması, bu artan riski karşılayacak şekilde genişletilmiş sigorta kapsamı, düzenli bakım takibi ve arıza anında hızlı değişim garantisiyle sunulur.",
        maddeler: [
            {
                baslik: "Yükseklik ve engel aşma neden sigortayı öne çıkarır",
                metin:
                    "Eklemli platform, standart makaslı platforma göre daha karmaşık bir hareket menzili sunar ve genellikle daha yüksek noktalara erişir. Yükseklik arttıkça hem makinenin hem çevredeki yapının risk profili değişir; plus paket kapsamındaki genişletilmiş sigorta, bu yüksek risk profiline özel olarak kurgulanır.",
            },
            {
                baslik: "Dış mekân kullanımında hava koşulu etkisi",
                metin:
                    "Eklemli platformlar sıklıkla cephe, dış tesisat veya açık saha işlerinde kullanılır ve bu, makinenin hava koşullarına (rüzgâr, nem) maruz kalması anlamına gelir. Plus paket kapsamındaki bakım takibi, dış mekân kullanımının getirdiği ek yıpranmayı gözeterek kurgulanır; bu, kapalı alanda kullanılan bir makineye göre farklı bir bakım ritmi gerektirir.",
            },
            {
                baslik: "Karmaşık konumlandırmada operatör deneyiminin rolü",
                metin:
                    "Eklemli platformun çok eksenli kumanda yapısı, engelli bir alanda doğru konumlandırma için deneyim gerektirir. Yanlış konumlandırma hem makineye hem çevredeki yapıya hasar riski doğurabilir; bu yüzden karmaşık işlerde operatörlü kiralamayı, plus paketin sigorta kapsamını tamamlayan bir önlem olarak öneriyoruz.",
            },
            {
                baslik: "Arıza anında yükseklikte kalan iş",
                metin:
                    "Bir eklemli platform yüksek bir noktada iş yaparken arızalanırsa, hem güvenli iniş prosedürü hem de işin kaldığı yerden devam edebilmesi önemlidir. Plus paketin hızlı değişim garantisi, bu senaryoda ikame makinenin öncelikli yönlendirilmesini sağlar; böylece yüksekteki iş uzun süre yarım kalmaz.",
            },
            {
                baslik: "Dizel ve akülü seçiminin bakım paketine etkisi",
                metin:
                    "Dış mekân işlerinde sıklıkla dizel eklemli platform tercih edilir; dizel motorlu makinelerin bakım periyodu akülü modellere göre farklıdır. Plus paket kapsamında bakım takvimini, seçtiğiniz güç tipine göre ayrı ayrı kurguluyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli platform işlerinde plus paket kapsamı",
                paragraflar: [
                    "Aşağıdaki tablo, farklı eklemli platform kullanım senaryolarında plus paketin nasıl şekillendiğini özetliyor.",
                ],
                tablo: {
                    basliklar: ["Kullanım senaryosu", "Sigorta kapsamı", "Bakım ritmi", "Operatör önerisi"],
                    satirlar: [
                        ["Cephe işi, orta yükseklik", "Genişletilmiş", "Standart dış mekân ritmi", "Deneyimli operatör önerilir"],
                        ["Yüksek nokta, engelli erişim", "Genişletilmiş, öncelikli", "Sık kontrol", "Operatörlü zorunlu değil, önerilir"],
                        ["Kısa süreli iç mekân işi", "Standart", "Kapalı alan ritmi", "Belgeli personel yeterli"],
                        ["Uzun süreli dış saha projesi", "Genişletilmiş", "Periyodik, planlı", "Operatörlü önerilir"],
                    ],
                },
            },
            {
                baslik: "Engel aşma senaryolarında planlama",
                paragraflar: [
                    "Eklemli platformun asıl avantajı olan engel aşma, işin başında doğru planlanmazsa makinenin menzilini gereksiz zorlar. Aşılacak engelin yaklaşık boyutu ve hedef noktanın konumu paylaşıldığında, doğru boom uzunluğu ve modelini önerebiliyoruz.",
                    "Bu planlama, hem işin verimli ilerlemesini hem de plus paketin sigorta kapsamının doğru kurgulanmasını sağlıyor.",
                ],
            },
            {
                baslik: "Rüzgârlı günlerde çalışma sınırı",
                paragraflar: [
                    "Yüksekte çalışan eklemli platformlar için rüzgâr hızı, güvenli çalışma sınırlarının bir parçasıdır. Plus paket kapsamında hava durumu riskli göründüğünde işin ertelenmesini önerebiliyoruz; bu, hem operatör güvenliği hem sigorta kapsamının geçerliliği açısından önemli.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platformda plus paketin sigorta kapsamı neden makaslı platformdan farklı?",
                cevap:
                    "Eklemli platform genellikle daha yüksek noktalara ve daha karmaşık konumlandırmalara erişir; bu, hem makinenin hem çevredeki yapının risk profilini artırır. Plus paket kapsamındaki sigortayı bu yüksek risk profiline göre genişletilmiş olarak kurguluyoruz, standart makaslı platform kiralamasındaki kapsamdan bu yüzden farklıdır.",
            },
            {
                soru: "Dış mekânda uzun süre kiralayacağız, bakım nasıl planlanıyor?",
                cevap:
                    "Dış mekân kullanımı rüzgâr ve neme maruz kalma nedeniyle ek yıpranma yaratır; plus paket kapsamında bakım takibini bu ek yıpranmayı gözeterek, kapalı alan kullanımına göre daha sık bir ritimle kurguluyoruz. Seçtiğiniz güç tipine (dizel/akülü) göre de bakım takvimi ayrıca şekillenir.",
            },
            {
                soru: "Yüksekte çalışırken makine arızalanırsa ne oluyor?",
                cevap:
                    "Öncelik, güvenli iniş prosedürünün uygulanmasıdır; ardından plus paketin hızlı değişim garantisi devreye girer ve ikame makine öncelikli olarak yönlendirilir. Amacımız, yüksekteki işin uzun süre yarım kalmasını engellemek; kesin süre saha koşullarına bağlı olsa da önceliklendirme standart uygulamamızdır.",
            },
            {
                soru: "Rüzgârlı bir günde iş planlanmışsa ne yapıyorsunuz?",
                cevap:
                    "Rüzgâr hızı yüksekte çalışan eklemli platformlar için güvenli çalışma sınırlarının bir parçasıdır. Hava durumu riskli göründüğünde işin ertelenmesini öneriyoruz; bu hem operatör güvenliği hem de plus paket kapsamındaki sigortanın geçerliliği açısından gerekli bir önlem.",
            },
            {
                soru: "Aşılacak engelin boyutunu bilmiyoruz, yine de doğru makine seçilebilir mi?",
                cevap:
                    "Kesin ölçü bilmeseniz de yaklaşık boyut ve hedef noktanın konumu bize genel bir fikir verir; bu bilgiyle uygun boom uzunluğunu öneririz. Belirsizlik yüksekse kısa bir ön değerlendirme yapmanızı öneriyoruz, böylece hem iş verimli ilerler hem plus paketin sigorta kapsamı doğru kurgulanır.",
            },
            {
                soru: "Dizel mi akülü eklemli platform mu seçmeliyiz, plus paket ikisinde de aynı mı?",
                cevap:
                    "Plus paket her iki güç tipinde de sunulur, ancak bakım ritmi güç tipine göre farklı kurgulanır — dizel motorlu makinelerin periyodik bakım ihtiyacı akülü modellerden farklıdır. Kapalı alan işinde akülü, açık ve uzun mesafeli dış saha işinde dizel genellikle tercih edilir; işinizin niteliğine göre öneriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun engel aşma özelliği ve dış mekân kullanım koşulları genel sektör bilgisidir; plus paket kapsamı firma pratiğidir. Marka adı ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân ve Depo İçi Platform Kiralama: Plus Paketle Kesintisiz Bakım",
        giris:
            "Depo içi ve iç mekân işlerinde platform, genellikle uzun süreli ve tekrarlayan bir kullanım örüntüsüne girer — tesisat bakımı, tavan işleri, raf üstü müdahaleler haftalarca sürebilir ve makine bu süre boyunca aynı sahada kalır. Bu uzun süreli kalış, kısa süreli dış saha işlerine göre farklı bir bakım mantığı gerektirir: makine sahadan hiç çıkmadan periyodik kontrolün yapılabilmesi ve arıza anında operasyonu durdurmadan hızlı müdahale edilmesi önem kazanır. Plus paketimiz iç mekân/depo içi kiralamada bu ihtiyaca göre kurgulanır — sahada kalan makineye yerinde bakım kontrolü, iz bırakmama garantisi ve arıza durumunda hızlı değişim standart teklifin parçasıdır.",
        maddeler: [
            {
                baslik: "Uzun süreli sahada kalışın bakım gereksinimi",
                metin:
                    "Bir makine haftalarca aynı sahada kalıyorsa, teslimat anındaki tek bir kontrol yeterli olmaz; kullanım biriktikçe bakım ihtiyacı da birikir. Plus paket kapsamında, iç mekân işlerinde makineye sahaya gelip yerinde kontrol yapıyoruz; bu, makinenin sahadan çıkarılmasını gerektirmeden bakımın sürdürülmesini sağlar.",
            },
            {
                baslik: "İz bırakmama garantisinin önemi",
                metin:
                    "Depo ve fabrika zeminleri genellikle epoksi veya perdahlı betondur; standart lastikli bir makine bu yüzeylerde iz bırakabilir. Plus paket kapsamında iç mekân işlerinde iz bırakmayan lastikli modelleri önceliklendiriyoruz ve bu, ek bir talep olarak değil standart uygulama olarak sunuluyor.",
            },
            {
                baslik: "Kapalı alanda güç tipi ve bakım ilişkisi",
                metin:
                    "Kapalı alan işlerinde emisyon nedeniyle akülü makine zorunludur; akülü makinelerin bakımı büyük ölçüde akü sağlığı ve şarj döngüsüne bağlıdır. Plus paket kapsamında akü durumunu düzenli kontrol ediyoruz, çünkü uzun süreli bir işte akü performansının düşmesi günlük kullanım süresini kısıtlayabilir.",
            },
            {
                baslik: "Depo trafiğiyle iç içe çalışmanın sigorta boyutu",
                metin:
                    "İç mekân işlerinde platform, genellikle forklift trafiği ve raf sistemleriyle aynı alanı paylaşır. Plus paket kapsamındaki sigorta, bu yoğun trafik ortamında oluşabilecek makine hasarını kapsar; çalışma alanının bariyerle ayrılması gibi önlemleri de teslimat sırasında birlikte planlıyoruz.",
            },
            {
                baslik: "Arıza anında operasyonu durdurmadan devam",
                metin:
                    "Uzun süreli bir iç mekân işinde bir arıza, projenin tamamının aksamasına yol açabilir. Plus paketin hızlı değişim garantisi, sahada kalan bir makinenin arızası durumunda ikame makinenin öncelikli olarak, mümkünse aynı gün içinde sahaya yönlendirilmesini hedefler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo içi işlerde plus paket kapsamı",
                paragraflar: [
                    "Aşağıdaki tablo, iç mekân/depo içi kullanımda plus paketin standart uygulamalarını özetliyor.",
                ],
                tablo: {
                    basliklar: ["Konu", "Standart uygulama", "Plus paket eklentisi"],
                    satirlar: [
                        ["Lastik tipi", "Talebe göre", "İz bırakmayan lastik öncelikli"],
                        ["Güç tipi", "Akülü (kapalı alan zorunluluğu)", "Akü sağlığı düzenli kontrolü"],
                        ["Bakım kontrolü", "Teslimat anında", "Sahada yerinde periyodik kontrol"],
                        ["Çalışma alanı güvenliği", "Talebe göre", "Bariyerleme planlaması dahil"],
                    ],
                },
            },
            {
                baslik: "Raf üstü işlerde koridor ölçüsü uyumu",
                paragraflar: [
                    "Raf arasına girecek bir makine için şase genişliğinin koridor ölçüsüyle uyumlu olması gerekir. Bu ölçüyü teslimat öncesi paylaşmanız, hem doğru makinenin seçilmesini hem de raf sistemine temas riskinin azaltılmasını sağlar.",
                ],
            },
            {
                baslik: "Uzun süreli işlerde akü/şarj planlaması",
                paragraflar: [
                    "Akülü bir makinenin vardiya boyunca kesintisiz çalışması gerekiyorsa, şarj noktasının teslimat öncesi planlanması gerekir. Plus paket kapsamında akü durumunu izleyerek, performans düşüşü fark edildiğinde erken müdahale ediyoruz; bu, işin ortasında beklenmedik bir şarj kesintisi yaşamanızı engelliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makine haftalarca sahada kalacak, bakımı nasıl yapılıyor?",
                cevap:
                    "Plus paket kapsamında makineyi sahadan çıkarmadan yerinde kontrol yapıyoruz; bu, uzun süreli bir iç mekân işinde bakımın kesintisiz sürmesini sağlıyor. Kontrol sıklığını kullanım yoğunluğunuza göre belirliyoruz, tek seferlik bir teslimat kontrolüyle sınırlı kalmıyoruz.",
            },
            {
                soru: "Zeminimiz epoksi kaplı, makine iz bırakır mı?",
                cevap:
                    "İç mekân işlerinde iz bırakmayan (beyaz dolgu) lastikli modelleri öncelikli olarak öneriyoruz; bu, plus paket kapsamında ek bir talep gerektirmeden standart uygulamamızdır. Zemin tipinizi teslimat öncesi belirtirseniz doğru lastik tipiyle gelen makineyi planlarız.",
            },
            {
                soru: "Akülü makinenin vardiya boyunca yetip yetmeyeceğini nasıl anlıyoruz?",
                cevap:
                    "Akü durumunu plus paket kapsamında düzenli kontrol ediyoruz ve performans düşüşü fark ettiğimizde erken müdahale ediyoruz. Vardiya süreniz ve kullanım yoğunluğunuz hakkında bilgi verirseniz, teslimat öncesi şarj noktası planlamasını buna göre kurabiliriz.",
            },
            {
                soru: "Depo içinde forklift trafiği var, platform bu ortamda güvenli mi?",
                cevap:
                    "Çalışma alanının bariyerle ayrılması gibi önlemleri teslimat sırasında birlikte planlıyoruz; plus paket kapsamındaki sigorta da bu yoğun trafik ortamında oluşabilecek makine hasarını kapsayacak şekilde kurgulanıyor. Depo içi trafik yoğunluğunuzu paylaşmanız, güvenlik planlamasını daha isabetli yapmamızı sağlar.",
            },
            {
                soru: "Raf arasına giren bir makineye ihtiyacımız var, hangi ölçüleri paylaşmalıyız?",
                cevap:
                    "Koridor genişliğini ve raf yüksekliğini paylaşmanız yeterli; bu ölçülerle şase genişliği koridora uygun bir makine öneriyoruz. Ölçü net değilse kısa bir ön değerlendirme yapmanızı öneriyoruz, çünkü uygun olmayan bir makine raf sistemine temas riski doğurabilir.",
            },
            {
                soru: "Uzun süreli işte bir arıza olursa proje takvimimiz aksar mı?",
                cevap:
                    "Plus paketin hızlı değişim garantisi tam olarak bu senaryo için kurgulanmıştır — sahada kalan makinenin arızası durumunda ikame makineyi öncelikli olarak, mümkünse aynı gün içinde yönlendiriyoruz. Amacımız, uzun süreli bir projenin bir arıza yüzünden günler boyu aksamasını engellemek.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Depo/fabrika zemin tipleri ve kapalı alan emisyon kısıtı genel sektör bilgisidir; plus paket kapsamı firma pratiğidir. Marka adı ve rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montaj Platformu: Plus Paketle Şantiye Güvencesi",
        giris:
            "Çelik konstrüksiyon montajı, genellikle haftalar süren ve birden fazla aşamadan (kolon dikimi, kiriş montajı, kaplama) oluşan bir şantiye sürecidir; bu süreçte platform, montaj takviminin bel kemiğidir — bir aşamanın gecikmesi sonraki tüm aşamaları etkiler. Bu yüzden çelik konstrüksiyon işlerinde plus paketimiz, standart bakım-sigorta-değişim garantisinin ötesinde şantiye takvimini koruma odaklı kurgulanır: montaj aşamalarına göre makine planlaması, sahada kalan makinenin düzenli kontrolü ve bir arıza durumunda montaj takviminin aksamaması için önceliklendirilmiş hızlı değişim bu paketin parçasıdır.",
        maddeler: [
            {
                baslik: "Montaj aşamalarına göre makine planlaması",
                metin:
                    "Kolon dikimi genellikle daha yüksek erişim gerektirirken, kaplama işleri farklı bir makine profiline ihtiyaç duyabilir. Plus paket kapsamında şantiyenin montaj takvimini önceden değerlendirip, hangi aşamada hangi makinenin gerekeceğini birlikte planlıyoruz; bu, sahada gereksiz makine bekletme veya son anda makine değişimi ihtiyacını azaltır.",
            },
            {
                baslik: "Sanayi holü yüksekliğinde tipik senaryo",
                metin:
                    "Sanayi holü montajlarında çelik konstrüksiyonun üst kotu genellikle standart bina yüksekliğinin üzerindedir; bu, çalışma yüksekliği hesabında güvenlik payı bırakılmasını gerektirir. Plus paket kapsamında bu hesaplamayı sizinle birlikte yapıyoruz, hedefin altında kalan bir makine seçiminin şantiyede zaman kaybına yol açmasını önlüyoruz.",
            },
            {
                baslik: "Şantiye zemininin platform seçimine etkisi",
                metin:
                    "Bir çelik konstrüksiyon şantiyesinde zemin, inşaatın aşamasına göre değişkenlik gösterir — bazen düzensiz dolgu, bazen henüz sertleşmemiş beton. Plus paket kapsamında zemin durumunu göz önünde bulundurarak uygun şase ve lastik tipini öneriyoruz; bu, hem güvenliği hem makinenin arıza riskini etkileyen bir karardır.",
            },
            {
                baslik: "Çok makineli şantiyelerde koordinasyon",
                metin:
                    "Büyük bir çelik konstrüksiyon işinde birden fazla platform aynı anda farklı noktalarda çalışabilir. Plus paket kapsamında bu makinelerin bakım takvimini senkronize ediyoruz; böylece aynı anda birden fazla makinenin bakıma girmesi gibi bir durumla şantiye takviminin aksaması engellenir.",
            },
            {
                baslik: "Arıza durumunda montaj takviminin korunması",
                metin:
                    "Bir montaj aşamasının ortasında makine arızalanırsa, iskele veya geçici destek olmadan işin devam etmesi mümkün olmayabilir. Plus paketin hızlı değişim garantisi bu senaryoya öncelik tanır; amaç, bir arızanın montaj takviminde günler süren bir gecikmeye dönüşmesini engellemek.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şantiye aşamasına göre plus paket kapsamı",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon montajının farklı aşamalarında plus paketin nasıl şekillendiğini gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Montaj aşaması", "Tipik makine ihtiyacı", "Zemin durumu", "Plus paket odağı"],
                    satirlar: [
                        ["Kolon dikimi", "Yüksek erişim, geniş menzil", "Genellikle dolgu/düzensiz", "Zemin uyumlu şase seçimi"],
                        ["Kiriş montajı", "Orta-yüksek erişim, hassas konumlandırma", "Kısmen sertleşmiş", "Deneyimli operatör önerisi"],
                        ["Kaplama/cephe işi", "Geniş yatay erişim", "Genellikle sertleşmiş beton", "İz bırakmama, hızlı rotasyon"],
                        ["Son kontrol/rötuş", "Düşük-orta erişim", "Sertleşmiş", "Standart kapsam yeterli"],
                    ],
                },
            },
            {
                baslik: "Takvim gecikmesi riskini azaltma",
                paragraflar: [
                    "Çelik konstrüksiyon şantiyelerinde bir aşamanın gecikmesi, kaynak ekibi ve vinç gibi diğer kaynakların da boşta beklemesine yol açabilir. Plus paket kapsamında bakım kontrolünü montaj takviminin boşluklarına denk getirmeye çalışıyoruz; bu, bakımın işin akışını kesmesini engelliyor.",
                    "Kritik bir aşamadan önce (örneğin büyük bir kolon dikimi öncesi) ek bir kontrol yapılmasını da öneriyoruz; bu, kısa bir ön hazırlık ama arıza riskini önemli ölçüde azaltıyor.",
                ],
            },
            {
                baslik: "Çok makineli şantiye örneği",
                paragraflar: [
                    "Birden fazla platformun aynı anda çalıştığı şantiyelerde, makinelerin bakım takvimini senkronize etmek, aynı anda birden fazla makinenin bakıma girmesini önler. Bu planlamayı şantiyenizin genel takvimiyle birlikte kuruyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemiz haftalarca sürecek, plus paket bakımı nasıl planlanıyor?",
                cevap:
                    "Bakım kontrolünü montaj takviminizin boşluklarına denk getirmeye çalışıyoruz, böylece bakım işin akışını kesmiyor. Kritik bir aşamadan önce (örneğin büyük bir kolon dikimi öncesi) ek bir kontrol yapılmasını da öneriyoruz; bu kısa bir ön hazırlık ama arıza riskini önemli ölçüde azaltıyor.",
            },
            {
                soru: "Farklı montaj aşamalarında farklı makineler mi gerekiyor?",
                cevap:
                    "Genellikle evet — kolon dikimi daha yüksek erişim gerektirirken kaplama işleri farklı bir profil isteyebilir. Plus paket kapsamında şantiyenizin montaj takvimini önceden değerlendirip hangi aşamada hangi makinenin gerekeceğini birlikte planlıyoruz; bu, son anda makine değişimi ihtiyacını azaltıyor.",
            },
            {
                soru: "Zeminimiz henüz tam sertleşmedi, bu platform seçimini nasıl etkiliyor?",
                cevap:
                    "Henüz sertleşmemiş veya dolgu zeminlerde makinenin şase ve lastik tipi önemli bir güvenlik ve arıza riski faktörüdür. Plus paket kapsamında zemin durumunu göz önünde bulundurarak uygun modeli öneriyoruz; zemin durumunuzu teslimat öncesi paylaşmanız bu değerlendirmeyi hızlandırır.",
            },
            {
                soru: "Birden fazla platform aynı anda çalışacak, bakımları çakışır mı?",
                cevap:
                    "Çakışmaması için makinelerin bakım takvimini senkronize ediyoruz; aynı anda birden fazla makinenin bakıma girip şantiye takvimini aksatmasını bu şekilde engelliyoruz. Şantiyenizin genel programını paylaşmanız, bu planlamayı daha isabetli yapmamızı sağlar.",
            },
            {
                soru: "Montaj sırasında makine arızalanırsa iş ne kadar durur?",
                cevap:
                    "Kesin bir süre taahhüt etmiyoruz ama plus paketin hızlı değişim garantisi bu senaryoya öncelik tanıyor; amacımız bir arızanın montaj takviminizde günler süren bir gecikmeye dönüşmesini engellemek. Arıza bildirimi ile ikame makine süreci arasındaki süreyi mümkün olan en kısaya indirmeyi hedefliyoruz.",
            },
            {
                soru: "Yüksek çalışma noktasında güvenlik payını nasıl hesaplıyorsunuz?",
                cevap:
                    "Çelik konstrüksiyonun üst kotunu ve hedef noktanın konumunu sizinle birlikte değerlendirip, sepet tabanının hedefin altında kalacağı payı hesaba katarak makine sınıfını öneriyoruz. Hedefin altında kalan bir makine seçimi şantiyede zaman kaybına yol açtığı için bu hesaplamayı teslimat öncesi netleştiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj süreci ve şantiye aşamalarına ilişkin genel bilgi sektör pratiğine dayanır; plus paket kapsamı firma pratiğidir. Rakam ve tesis adı kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahası Platform Kiralama: Plus Paketle Uzak Saha Güvencesi",
        giris:
            "Tarımsal ve silo sahaları, genellikle şehir merkezine göre daha uzak konumlanır ve zemin koşulları (toprak, çakıl, düzensiz yüzey) şehir içi sahalara göre daha zorludur. Bu iki özellik bir araya geldiğinde, bir arıza senaryosu şehir içindeki bir işe göre çok daha ciddi bir sorun hâline gelir — uzak bir sahada bekleyen bir makine, işletmenin tarımsal takvimini (hasat öncesi/sonrası bakım gibi mevsimsel işleri) doğrudan etkiler. Plus paketimiz bu senaryoyu merkeze alır: uzak sahalarda hızlı değişim garantisinin önceliklendirilmesi, zorlu zemine uygun makine seçimi ve mevsimsel yoğun dönemlerde önceden planlanmış bakım kontrolü bu paketin temelini oluşturur.",
        maddeler: [
            {
                baslik: "Uzak sahada arızanın maliyeti neden daha yüksek",
                metin:
                    "Şehir içindeki bir işte arızalanan makine yerine ikame makine göndermek görece hızlı işler; uzak bir tarımsal veya silo sahasında bu süreç mesafe nedeniyle uzayabilir. Plus paketin hızlı değişim garantisi, tam olarak bu farkı azaltmak için uzak sahalarda önceliklendirilmiş bir süreç olarak kurgulanır.",
            },
            {
                baslik: "Zorlu zeminde makine seçiminin önemi",
                metin:
                    "Tarımsal ve silo sahalarındaki toprak veya çakıl zemin, standart bir lastikli makinenin batması veya dengesiz durması riskini artırır. Plus paket kapsamında zemin durumunu değerlendirip, bu tip sahalara uygun geniş tabanlı veya arazi tipi şase seçimini öneriyoruz; bu, hem güvenliği hem arıza riskini azaltan bir karar.",
            },
            {
                baslik: "Mevsimsel yoğun dönemde önceden bakım kontrolü",
                metin:
                    "Tarımsal işletmelerde talep hasat öncesi ve sonrası dönemlerde yoğunlaşır ve bu dönemlerde makine kullanımı kısa sürede yoğunlaşır. Plus paket kapsamında bu yoğun dönem öncesinde ek bir bakım kontrolü yapılmasını öneriyoruz; bu, mevsimsel yoğunluk sırasında arıza riskini azaltan bir ön tedbir.",
            },
            {
                baslik: "Silo yapılarında yükseklik ve erişim özel durumu",
                metin:
                    "Silo bakımı genellikle silin dış yüzeyine veya üst kısmına erişim gerektirir ve bu, standart bir bina işine göre farklı bir konumlandırma ister. Plus paket kapsamında silo yapısının geometrisini değerlendirip uygun makine sınıfını öneriyoruz; yanlış seçilen bir makine, silo etrafındaki manevrayı zorlaştırabilir.",
            },
            {
                baslik: "Nakliye mesafesinin plus pakete etkisi",
                metin:
                    "Uzak bir tarımsal sahaya sevkiyat, şehir içi bir sahaya göre daha uzun sürer ve bu, hem ilk teslimatı hem olası bir değişim sürecini etkiler. Plus paket kapsamında bu mesafeyi baştan hesaba katarak, olası bir arıza senaryosunda devreye girecek en yakın ikame makine kaynağını önceden planlıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım ve silo sahalarında plus paket kapsamı",
                paragraflar: [
                    "Aşağıdaki tablo, farklı tarımsal/silo saha senaryolarında plus paketin odağını özetliyor.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Zemin durumu", "Mevsimsel yoğunluk", "Plus paket odağı"],
                    satirlar: [
                        ["Tarımsal depo/ahır", "Toprak/çakıl", "Hasat öncesi/sonrası yüksek", "Önceden bakım kontrolü"],
                        ["Silo dış yüzey bakımı", "Genellikle sabit zemin", "Düzenli, dönemsel", "Doğru erişim/manevra planı"],
                        ["Sera yapısı", "Değişken", "Sezonluk", "Zemine uygun şase seçimi"],
                        ["Kırsal üretim tesisi", "Düzensiz", "Yıl boyu değişken", "Uzak saha hızlı değişim önceliği"],
                    ],
                },
            },
            {
                baslik: "Hasat dönemi öncesi rezervasyon önerisi",
                paragraflar: [
                    "Mevsimsel talep hasat öncesi ve sonrası dönemlerde yoğunlaştığı için, bu dönemlerde erken rezervasyon hem tercih ettiğiniz tarihi güvence altına alır hem de plus paket kapsamındaki ön bakım kontrolünün zamanında yapılmasını sağlar.",
                    "Düzenli tekrar eden bir mevsimsel ihtiyacınız varsa, her yıl aynı döneme sabit bir rezervasyon ve bakım kontrolü kurarak planlamayı kolaylaştırabiliyoruz.",
                ],
            },
            {
                baslik: "Uzak sahada iletişim ve koordinasyon",
                paragraflar: [
                    "Uzak bir sahada hızlı değişim garantisinin işlemesi, arızanın bize hızlı bildirilmesine bağlıdır. Sahanıza en yakın iletişim noktasını ve ulaşım koşullarını teslimat öncesi netleştirmenizi öneriyoruz; bu, olası bir arıza senaryosunda süreci hızlandırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamız merkeze uzak, arıza durumunda ne kadar beklememiz gerekir?",
                cevap:
                    "Kesin bir süre taahhüt etmiyoruz ama plus paket kapsamında uzak sahalarda hızlı değişim sürecini önceliklendiriyoruz; mesafeyi baştan hesaba katarak en yakın ikame makine kaynağını önceden planlıyoruz. Sahanızın konumunu ve ulaşım koşullarını teslimat öncesi netleştirmeniz, olası bir arıza senaryosunda süreci hızlandırıyor.",
            },
            {
                soru: "Toprak zeminde makine batma riski var mı?",
                cevap:
                    "Standart lastikli bir makine toprak veya çakıl zeminde batma veya dengesiz durma riski taşıyabilir. Plus paket kapsamında zemin durumunuzu değerlendirip, bu tip sahalara uygun geniş tabanlı veya arazi tipi şase seçimini öneriyoruz; zemin tipinizi paylaşmanız doğru makinenin planlanmasını sağlar.",
            },
            {
                soru: "Hasat döneminde talep yoğunlaşıyor, önceden ne yapabiliriz?",
                cevap:
                    "Erken rezervasyon öneriyoruz; bu hem tercih ettiğiniz tarihi güvence altına alır hem de plus paket kapsamındaki ön bakım kontrolünün zamanında yapılmasını sağlar. Düzenli tekrar eden bir mevsimsel ihtiyacınız varsa, her yıl aynı döneme sabit bir rezervasyon kurarak planlamayı kolaylaştırabiliyoruz.",
            },
            {
                soru: "Silo dış yüzeyine erişim için hangi makine sınıfı uygun?",
                cevap:
                    "Silonun geometrisini (çap, yükseklik) ve etrafındaki manevra alanını değerlendirip uygun makine sınıfını öneriyoruz. Yanlış seçilen bir makine silo etrafındaki manevrayı zorlaştırabileceği için, bu değerlendirmeyi teslimat öncesi sizinle birlikte netleştiriyoruz.",
            },
            {
                soru: "Sera yapımızda platform kullanacağız, zemin farklılığı sorun olur mu?",
                cevap:
                    "Sera zeminleri değişken olabildiği için, plus paket kapsamında zemine uygun şase seçimini öncelikli olarak değerlendiriyoruz. Zemin tipinizi (toprak, beton, ızgara) paylaşmanız, doğru lastik ve şase kombinasyonunun seçilmesini sağlar.",
            },
            {
                soru: "Yıl boyu düzensiz kullanımımız var, plus paket yine mantıklı mı?",
                cevap:
                    "Evet — düzensiz kullanım, arızanın ne zaman ortaya çıkacağını öngörülemez kıldığı için plus paketin hızlı değişim garantisi bu profildeki işletmeler için özellikle değerli. Kullanım örüntünüzü paylaşırsanız, bakım kontrol sıklığını ve saha koordinasyon planını buna göre kurabiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tarımsal ve silo sahalarının zemin/mesafe özellikleri genel bilgidir; plus paket kapsamı firma pratiğidir. Marka adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Platformu: Plus Paketle Genişletilmiş Sigorta",
        giris:
            "Enerji ve aydınlatma bakım işleri (direk, hat, aydınlatma armatürü, tabela bakımı) elektrik unsuru içerdiği için diğer platform kullanım alanlarına göre farklı bir risk profiline sahiptir — makinenin elektrik hattına veya enerjili bir ekipmana yakın çalışması, hem operatör güvenliği hem sigorta kapsamı açısından ek dikkat gerektirir. Plus paketimiz bu işlerde standart bakım-değişim garantisinin yanına, elektrik yakınlığına özel genişletilmiş sigorta kapsamı ve enerjili hat/ekipman yakınında çalışma protokolünü ekler; amacımız, enerji ve aydınlatma bakımının kendine özgü risklerini işletmenizin üzerinden alıp önceden planlanmış bir sürece dönüştürmek.",
        maddeler: [
            {
                baslik: "Enerjili hat yakınında çalışmanın getirdiği ek risk",
                metin:
                    "Aydınlatma direği veya enerji hattı yakınında çalışan bir platform, standart bir cephe işine göre farklı bir güvenlik mesafesi ve protokol gerektirir. Plus paket kapsamında bu tür işlerde teslimat öncesi güvenlik mesafesi ve çalışma protokolünü netleştiriyoruz; bu, hem operatör güvenliği hem sigorta kapsamının geçerliliği için gerekli bir adım.",
            },
            {
                baslik: "Genişletilmiş sigorta kapsamının kapsadığı alan",
                metin:
                    "Enerji hattına yakın çalışmada makinenin kendisinde oluşabilecek hasarın yanı sıra, elektrik unsuru nedeniyle daha karmaşık bir risk senaryosu ortaya çıkar. Plus paket kapsamındaki genişletilmiş sigorta bu senaryoya özel kurgulanır; kapsamın tam sınırları, işin niteliğine göre teslimat öncesi netleştirilir.",
            },
            {
                baslik: "Aydınlatma bakımında çok noktalı çalışma örüntüsü",
                metin:
                    "Aydınlatma direği bakımı genellikle tek bir nokta değil, bir güzergâh boyunca birden fazla direği kapsar. Bu örüntü, çok noktalı rota bakım işlerine benzer bir planlama gerektirir; plus paket kapsamında bu tür işlerde makinenin güzergâh boyunca verimli taşınmasını da planlıyoruz.",
            },
            {
                baslik: "Santral ve enerji tesisi çevresinde ek prosedür",
                metin:
                    "Bir enerji santrali veya trafo çevresindeki bakım işleri, standart bir sahaya göre daha katı giriş-çıkış ve güvenlik prosedürüne tabi olabilir. Plus paket kapsamında bu tür sahalarda makinenin ve operatörün tesisin kendi güvenlik kurallarına uyumunu önceden planlıyoruz.",
            },
            {
                baslik: "Bakım periyodunun elektrik unsuruna göre sıklaştırılması",
                metin:
                    "Elektrik unsuru içeren işlerde makinenin izolasyon ve güvenlik sistemlerinin düzenli kontrolü standart bakımdan daha kritik hâle gelir. Plus paket kapsamında bu tür işlerde bakım kontrol sıklığını artırıyoruz; bu, hem makinenin hem operatörün güvenliğini koruyan bir önlem.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji/aydınlatma işlerinde plus paket kapsamı",
                paragraflar: [
                    "Aşağıdaki tablo, farklı enerji/aydınlatma bakım senaryolarında plus paketin nasıl şekillendiğini gösteriyor.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Elektrik yakınlığı", "Sigorta kapsamı", "Ek prosedür"],
                    satirlar: [
                        ["Tabela/aydınlatma bakımı", "Düşük-orta", "Standart genişletilmiş", "Standart güvenlik mesafesi"],
                        ["Aydınlatma direği güzergâh bakımı", "Orta", "Genişletilmiş", "Rota planlaması"],
                        ["Enerji hattı yakını iş", "Yüksek", "Genişletilmiş, öncelikli", "Detaylı güvenlik protokolü"],
                        ["Santral/trafo çevresi", "Yüksek", "Genişletilmiş, öncelikli", "Tesis güvenlik kurallarına uyum"],
                    ],
                },
            },
            {
                baslik: "Güvenlik mesafesi planlaması",
                paragraflar: [
                    "Enerjili bir hat veya ekipman yakınında çalışmadan önce, güvenli mesafenin netleştirilmesi hem operatör güvenliği hem sigorta kapsamının geçerliliği için gereklidir. Bu mesafeyi işin niteliğine ve enerji hattının özelliğine göre teslimat öncesi birlikte belirliyoruz.",
                    "Belirsizlik varsa, ilgili enerji dağıtım kuruluşuyla koordinasyon önerisinde bulunuyoruz; bu, iş güvenliğini artıran ek bir adım.",
                ],
            },
            {
                baslik: "Çok direkli güzergâh işlerinde verimlilik",
                paragraflar: [
                    "Bir aydınlatma güzergâhında çok sayıda direk bakımı gerekiyorsa, direklerin sırasını ve aralarındaki mesafeyi önceden planlamak, makinenin güzergâh boyunca gereksiz gidiş-geliş yapmasını önler. Bu planlamayı plus paket kapsamında sizinle birlikte kuruyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerji hattı yakınında çalışırken güvenlik mesafesini kim belirliyor?",
                cevap:
                    "Güvenli mesafeyi işin niteliğine ve enerji hattının özelliğine göre teslimat öncesi sizinle birlikte belirliyoruz. Belirsizlik varsa ilgili enerji dağıtım kuruluşuyla koordinasyon önerisinde bulunuyoruz; bu, hem operatör güvenliği hem plus paket kapsamındaki sigortanın geçerliliği için önemli bir adım.",
            },
            {
                soru: "Genişletilmiş sigorta kapsamı tam olarak neyi kapsıyor?",
                cevap:
                    "Kapsamın tam sınırları işin niteliğine göre değişir; enerji hattına yakın çalışmada makinenin kendisinde oluşabilecek hasarın yanı sıra elektrik unsuru nedeniyle ortaya çıkan ek risk senaryolarını da gözeterek kurguluyoruz. Bu kapsamı teslimat öncesi sözleşmede net olarak belirtiyoruz.",
            },
            {
                soru: "Bir aydınlatma güzergâhında çok sayıda direk bakımı yapacağız, nasıl planlanıyor?",
                cevap:
                    "Direklerin sırasını ve aralarındaki mesafeyi önceden planlayarak makinenin güzergâh boyunca verimli ilerlemesini sağlıyoruz; bu, çok noktalı rota bakım işlerine benzer bir planlama mantığıdır. Güzergâh listesini paylaşmanız, planlamayı daha isabetli yapmamızı sağlar.",
            },
            {
                soru: "Trafo veya santral çevresinde çalışacağız, ek bir prosedür var mı?",
                cevap:
                    "Evet, bu tür sahalar genellikle tesisin kendi güvenlik kurallarına tabi olur; plus paket kapsamında makinenin ve operatörün bu kurallara uyumunu teslimat öncesi planlıyoruz. Tesisin giriş-çıkış prosedürünü önceden paylaşmanız, sahaya erişimin sorunsuz olmasını sağlar.",
            },
            {
                soru: "Elektrik unsuru içeren işlerde bakım kontrolü daha mı sık yapılıyor?",
                cevap:
                    "Evet, elektrik unsuru içeren işlerde makinenin izolasyon ve güvenlik sistemlerinin kontrolü standart bakımdan daha kritik hâle geliyor; plus paket kapsamında bu tür işlerde bakım kontrol sıklığını artırıyoruz. Bu, hem makinenin hem operatörün güvenliğini korumaya yönelik bir önlem.",
            },
            {
                soru: "Operatörümüz elektrik konusunda deneyimli değil, yine de bu işi yapabilir mi?",
                cevap:
                    "Enerji hattı yakınında çalışacak operatörün bu konuda deneyimli olması önemlidir; deneyimsiz bir operatörle bu tür işlere girmeyi önermiyoruz. Deneyimli operatör talep etmek isterseniz operatörlü kiralama seçeneğini plus paketle birlikte değerlendirebiliriz; bu, riski azaltan bir tamamlayıcı önlemdir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerji hattı yakınında çalışma protokolü genel iş güvenliği pratiğine dayanır; plus paket kapsamı firma pratiğidir. Marka adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform Kiralama: Plus Paketle Tam Güvenceli Hizmet",
        giris:
            "Operatörlü kiralama zaten bir güvence unsuru taşır — makineyi deneyimli bir operatör kullanır, işletmenin kendi personeline belge yükü binmez. Ama biz bunu yeterli bulmuyoruz: operatörlü kiralamanın gerçek değeri, operatörün yanına bakım, sigorta ve arıza garantisinin de eklenmesiyle ortaya çıkar. Plus paketimiz, işte tam bu bütünleşik yaklaşımı sunuyor — operatörlü platform kiralaması bu sitede en çok işlediğimiz konudur, çünkü işletmelerin büyük kısmı için 'kimin kullanacağı' sorusu 'hangi makine' sorusundan önce gelir ve bu soruya verilen cevap, aslında bir hizmet paketi seçimidir. Bu sayfa, operatörlü kiralamanın plus paketle nasıl bütünleştiğini, maliyet yapısını, sorumluluk sınırlarını ve günlük operasyonun nasıl işlediğini detaylı anlatıyor.",
        maddeler: [
            {
                baslik: "Operatörlü kiralamanın plus paketle bütünleşmesi",
                metin:
                    "Standart operatörlü kiralamada sadece operatör bedeli eklenir; makinenin bakımı ve arıza durumundaki değişim süreci ayrı bir konu olarak kalır. Plus paket bu ikisini birleştirir — operatör hem makineyi güvenli kullanır hem de makinenin bakım durumunu sahada takip eder, bir arıza belirtisi fark edildiğinde bunu erken bildirir. Bu, operatörün yalnızca kumanda kullanan değil, makinenin sağlığını da izleyen bir rol üstlenmesi anlamına gelir.",
            },
            {
                baslik: "Yasal çerçeve: belge yoksa operatörlü zorunlu, plus paket bunu güçlendirir",
                metin:
                    "Platform kullanımı MYK yeterlilik belgesi ister ve belgesiz kullanım işvereni doğrudan kusurlu kılar. Personelinizde belge yoksa operatörlü kiralama zorunludur; plus paket bu zorunluluğun üzerine, operatörün kullandığı makinenin de sürekli bakımlı ve sigortalı olmasını ekleyerek güvenceyi iki katmanlı hâle getirir — hem kullanan kişi hem kullanılan makine güvence altındadır.",
            },
            {
                baslik: "Maliyet yapısı: operatör + plus paket ayrı ayrı görünür",
                metin:
                    "Plus paket kapsamında operatörlü kiralama teklifi üç ayrı kalemden oluşur: makine kirası, operatör bedeli ve plus paket bileşeni (bakım-sigorta-hızlı değişim). Bu ayrım, hangi bedelin neyi karşıladığını net görmenizi sağlar; bazı işletmeler yalnızca operatörlü kiralamayı, bazıları operatörlü + plus paketi birlikte tercih eder — ikisini de rakamla karşılaştırabilirsiniz.",
            },
            {
                baslik: "Günlük operasyonda operatörün genişletilmiş rolü",
                metin:
                    "Standart operatörlü kiralamada operatörün sorumluluğu makine güvenliği ve konumlandırmadır. Plus paket kapsamında bu role, gün sonunda kısa bir makine durumu raporu eklenir — operatör, gün boyunca fark ettiği herhangi bir performans değişikliğini (ses, tepki hızı, akü durumu) bildirir. Bu erken bildirim, bir arızanın büyümeden önce fark edilmesini sağlar.",
            },
            {
                baslik: "Arıza anında operatörlü + plus paket avantajı",
                metin:
                    "Bir arıza durumunda operatör zaten sahada olduğu için, durumu ilk elden ve teknik olarak doğru şekilde bize aktarır — bu, ikame makinenin doğru sınıfta ve hızlı şekilde gönderilmesini kolaylaştırır. Operatörsüz bir kiralamada bu bilgi akışı işletmenin kendi personeli üzerinden, bazen eksik teknik detayla ilerler; operatörlü + plus paket kombinasyonu bu iletişim boşluğunu ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü kiralama seçenekleri ve plus paket karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, operatörlü kiralamanın farklı kombinasyonlarında neyin dahil olduğunu gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Kombinasyon", "Operatör", "Bakım takibi", "Sigorta", "Hızlı değişim önceliği"],
                    satirlar: [
                        ["Operatörsüz, standart", "Yok", "Teslimat anında", "Sınırlı", "Standart"],
                        ["Operatörlü, standart", "Var", "Teslimat anında", "Sınırlı", "Standart"],
                        ["Operatörsüz, plus paket", "Yok", "Kiralama süresince", "Genişletilmiş", "Öncelikli"],
                        ["Operatörlü, plus paket", "Var", "Kiralama süresince + günlük rapor", "Genişletilmiş", "Öncelikli, erken bildirimli"],
                    ],
                },
            },
            {
                baslik: "Belge aldırma ile operatörlü + plus paket kıyası",
                paragraflar: [
                    "Yılda bir-iki kez platform kiralayan işletmeler için operatörlü + plus paket, personele MYK belgesi aldırmaktan genellikle daha ekonomiktir; belge süreci ve sonrasında kendi makinenizin bakım-sigorta sorumluluğunu üstlenmek, nadir kullanımda karşılığını vermeyebilir. Ayda birkaç kez kiralayan işletmelerde ise belge yatırımı zamanla kendini amorti edebilir; bu kararı kullanım sıklığınıza göre birlikte değerlendiriyoruz.",
                    "Karma bir yol da mümkün: sık kullanılan bir makine sınıfı için personelinize belge aldırıp, nadiren ihtiyaç duyulan farklı bir sınıfı operatörlü + plus paketle tamamlamak.",
                ],
            },
            {
                baslik: "Operatörün günlük raporunun işletmeye faydası",
                paragraflar: [
                    "Gün sonunda operatörden aldığınız kısa makine durumu raporu, yalnızca bir arıza öngörüsü değil, aynı zamanda işin ilerleyişine dair de bir kayıt oluşturur — hangi noktalarda ne kadar zaman harcandığı, hangi işlerin tamamlandığı bu raporda yer alabilir. Uzun süreli işlerde bu kayıt, proje takibinizi kolaylaştıran bir yan fayda sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Plus paket operatörlü kiralamaya otomatik olarak dahil mi, yoksa ayrı mı seçiliyor?",
                cevap:
                    "Ayrı bir bileşen olarak teklifte gösteriyoruz; operatörlü kiralamayı plus paket olmadan da sunabiliyoruz. Ancak makinenin sahada uzun süre kalacağı veya kritik bir işte kullanılacağı durumlarda ikisini birlikte almanızı öneriyoruz, çünkü operatörün günlük gözlemi ile plus paketin bakım takibi birbirini güçlendiriyor.",
            },
            {
                soru: "Operatör bir arıza belirtisi fark ederse ne oluyor, biz nasıl haberdar oluyoruz?",
                cevap:
                    "Operatör, gün boyunca fark ettiği herhangi bir performans değişikliğini (ses, tepki hızı, akü durumu) bize ve isterseniz size de bildirir. Bu erken bildirim, plus paket kapsamındaki hızlı değişim sürecini arıza büyümeden önce devreye sokmamızı sağlıyor; bu, operatörlü + plus paket kombinasyonunun en somut avantajlarından biri.",
            },
            {
                soru: "Operatör bedeli ile plus paket bedeli nasıl ayrışıyor, tek bir toplam mı görüyoruz?",
                cevap:
                    "Teklifte üç ayrı kalem gösteriyoruz: makine kirası, operatör bedeli ve plus paket bileşeni. Bu ayrım, hangi bedelin neyi karşıladığını net görmenizi sağlıyor; isterseniz operatörlü + plus paket ile yalnızca operatörlü kiralamayı yan yana karşılaştırmalı olarak sunabiliriz.",
            },
            {
                soru: "Personelimize belge aldırsak mı, yoksa operatörlü + plus paket mi almalıyız?",
                cevap:
                    "Bu, kullanım sıklığınıza bağlı bir karar. Yılda bir-iki kez kiralayan işletmeler için operatörlü + plus paket genellikle daha ekonomiktir; ayda birkaç kez kiralayan işletmelerde belge yatırımı zamanla kendini amorti edebilir. Karma bir yol da mümkün — sık kullanılan sınıf için belge aldırıp nadiren gereken sınıfı operatörlü + plus paketle tamamlamak.",
            },
            {
                soru: "Operatör hem makineyi kullanıp hem bakım mı takip ediyor, bu iş yükünü etkiler mi?",
                cevap:
                    "Bakım takibi, operatörün gün boyunca zaten yaptığı gözlemin bir uzantısıdır — ayrı bir zaman almaz, gün sonunda kısa bir rapora dönüşür. Operatörün asıl işi makineyi güvenli ve verimli kullanmaktır; bakım gözlemi bu işin doğal bir parçası olarak eklenir, iş yükünü artıran ayrı bir görev değildir.",
            },
            {
                soru: "Operatörlü + plus paket ile sadece operatörlü kiralama arasındaki fiyat farkı büyük mü?",
                cevap:
                    "Fark, makine sınıfına ve kiralama süresine göre değişir ve teklifte ayrı satır olarak gösterilir. Kısa süreli-düşük riskli bir işte fark sınırlı kalabilirken, uzun süreli veya kritik bir işte plus paketin bakım-sigorta-hızlı değişim bileşeni, olası bir arızanın maliyetine kıyasla küçük bir ek olarak öne çıkar. İşinizin süresini ve niteliğini paylaşırsanız net bir karşılaştırma çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. MYK yeterlilik belgesi zorunluluğu yasal/kamuya açık bilgidir; operatörlü kiralama + plus paket bütünleşmesi ve maliyet yapısı firma pratiğidir. Marka adı ve rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakım Platformu: Plus Paketle Rota Güvencesi",
        giris:
            "Çok noktalı bir bakım rotasında (OSB içi çoklu tesis, zincir mağaza aydınlatması, bölgesel tabela bakımı gibi) risk, tek bir işten farklı şekilde birikir — bir noktada yaşanan bir arıza, yalnızca o noktayı değil, rotanın geri kalanındaki tüm takvimi etkiler. Standart bir kiralamada bu risk işletmenin üzerinde kalır; plus paketimiz ise rota işlerine özel olarak kurgulanmıştır — bir noktadaki arızanın rotanın tamamını aksatmaması için önceliklendirilmiş hızlı değişim, rota boyunca taşınan makinenin düzenli bakım takibi ve çok noktalı işlerde sigorta kapsamının her durak için geçerli olması bu paketin temelini oluşturur. Bu sayfa, rota işlerinde plus paketin nasıl işlediğini, rota planlamasıyla nasıl bütünleştiğini ve büyük rotalarda risk yönetiminin nasıl kurulduğunu detaylı anlatıyor — operatörlü kiralamayla birlikte sitemizin en çok işlediğimiz iki ana konusundan biridir.",
        maddeler: [
            {
                baslik: "Rota işlerinde riskin nasıl biriktiği",
                metin:
                    "Tek bir işte bir arıza, yalnızca o işi etkiler; çok noktalı bir rotada ise bir noktadaki gecikme zincirleme olarak sonraki tüm durakları geciktirir. Bu birikimli risk, rota işlerinde plus paketin bakım ve hızlı değişim bileşenini standart işlere göre daha kritik hâle getirir — amaç, tek bir noktadaki sorunun tüm rotayı felç etmesini engellemek.",
            },
            {
                baslik: "Rota boyunca taşınan makinenin bakım takibi",
                metin:
                    "Bir makine rota boyunca sürekli hareket hâlindeyse (bir noktadan diğerine taşınıyorsa), sabit bir sahada kalan makineye göre farklı bir yıpranma profiline sahiptir — sık yükleme-boşaltma, farklı zemin koşullarına art arda maruz kalma. Plus paket kapsamında rota ortasında ek bir kontrol noktası planlıyoruz; bu, uzun bir rotanın ortasında beklenmedik bir arızayı önceden fark etmeyi sağlar.",
            },
            {
                baslik: "Çok noktalı işlerde sigorta kapsamının her durak için geçerliliği",
                metin:
                    "Standart bir sigorta poliçesi tek bir sahaya göre kurgulanabilir; çok noktalı bir rotada makine farklı sahalarda, farklı risk profillerinde çalışır. Plus paket kapsamındaki sigorta, rotanın her durağı için geçerli olacak şekilde kurgulanır — bu, rota planlaması yapılırken sigorta kapsamının ayrıca netleştirilmesi gereken standart bir adımdır.",
            },
            {
                baslik: "Bir noktada arıza olursa rotanın geri kalanı nasıl korunur",
                metin:
                    "Plus paketin hızlı değişim garantisi, rota işlerinde özel bir öneme sahiptir — bir noktada arızalanan makine yerine ikame makine yönlendirilirken, rotanın kalan duraklarının programı da yeniden düzenlenir. Büyük bir aksama durumunda kalan noktalar ertesi güne kaydırılır, iş yarım bırakılmaz; bu esneklik rota başlamadan önce sizinle konuşulur.",
            },
            {
                baslik: "Zincir işletmelerde standart şablon ve plus paket bütünleşmesi",
                metin:
                    "Zincir mağaza-bayi gibi tekrarlayan yapıda işlerde ilk şubede kurulan iş şablonu (süre, malzeme, ekip düzeni) sonraki şubelere uygulanır. Plus paket kapsamında bu şablona bakım kontrol noktalarını da entegre ediyoruz; her şubede aynı standart hem iş hem bakım açısından uygulanır, bu da rotanın öngörülebilirliğini artırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota büyüklüğüne göre plus paket kurgusu",
                paragraflar: [
                    "Rota işlerinin tipik büyüklüğüne göre plus paketin nasıl şekillendiğini aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Rota büyüklüğü", "Bakım kontrol noktası", "Sigorta kapsamı", "Aksama yönetimi"],
                    satirlar: [
                        ["5 – 10 nokta, benzer profil", "Rota başı ve sonu", "Tüm duraklar için standart genişletilmiş", "Tampon süre dahil"],
                        ["10 – 20 nokta, karışık profil", "Rota ortası ek kontrol", "Genişletilmiş, durak bazlı", "Esnek yeniden programlama"],
                        ["20+ nokta, çok günlü rota", "Periyodik, planlı", "Genişletilmiş, öncelikli", "Günlük yeniden değerlendirme"],
                        ["Zincir şube rotası, tekrarlayan", "Şablon içine entegre", "Standart genişletilmiş", "Şablon bazlı öngörülebilirlik"],
                    ],
                },
            },
            {
                baslik: "Rota planlamasında plus paketin rolü",
                paragraflar: [
                    "Rota planlaması yapılırken (liste gruplama, tek makine mi karma filo mu, duraklama süresi tahmini) plus paket bu planlamanın bir girdisi olarak devreye girer — özellikle büyük ve çeşitli rotalarda, bakım kontrol noktalarının rota takvimine önceden yerleştirilmesi, bakımın işin akışını kesmesini engeller.",
                    "Karma filo kullanılan büyük rotalarda, her makinenin bakım takvimini ayrı ayrı senkronize ediyoruz; bu, aynı anda birden fazla makinenin bakıma girip rotanın tamamen durmasını önlüyor.",
                ],
            },
            {
                baslik: "Rota sırasında aksama iletişimi",
                paragraflar: [
                    "Bir noktada beklenenden uzun süren iş ya da bir arıza durumunda, rotanın geri kalan programını nasıl etkilediğini aynı gün içinde sizinle paylaşıyoruz. Bu şeffaflık, sizin de kendi ekibinizi ve müşterilerinizi (zincir işletmelerde şube yönetimini) buna göre bilgilendirmenizi sağlıyor.",
                ],
            },
            {
                baslik: "Uzun rotalarda operatör sürekliliği",
                paragraflar: [
                    "Çok günlük bir rotada aynı operatörün rota boyunca devam etmesi, hem makineye hem işe aşinalığı koruduğu için tercih edilir. Plus paket kapsamında operatörlü rota işlerinde bu sürekliliği önceliklendiriyoruz; operatör değişimi gerekiyorsa (izin, hastalık gibi durumlarda) devir bilgisini eksiksiz aktarıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Rotadaki bir noktada makine arızalanırsa diğer duraklar ne olur?",
                cevap:
                    "Plus paketin hızlı değişim garantisi devreye girer ve ikame makine yönlendirilirken rotanın kalan duraklarının programı da yeniden düzenlenir. Büyük bir aksama durumunda kalan noktalar ertesi güne kaydırılır, iş yarım bırakılmaz; bu esneklik rota başlamadan önce sizinle konuşulur ve beklenti baştan netleşir.",
            },
            {
                soru: "Rota boyunca taşınan makinenin bakımı nasıl takip ediliyor?",
                cevap:
                    "Rota boyunca sürekli hareket eden bir makine, sabit sahada kalan makineye göre farklı bir yıpranma profiline sahiptir; plus paket kapsamında rota ortasında ek bir kontrol noktası planlıyoruz. Bu, uzun bir rotanın ortasında beklenmedik bir arızayı önceden fark etmemizi sağlıyor.",
            },
            {
                soru: "Farklı sahalarda çalışacağız, sigorta kapsamı her durak için geçerli mi?",
                cevap:
                    "Evet, plus paket kapsamındaki sigortayı rotanın her durağı için geçerli olacak şekilde kurguluyoruz. Standart bir poliçe tek bir sahaya göre kurgulanabileceği için, çok noktalı bir rotada bu kapsamın ayrıca netleştirilmesi gerekiyor; rota listenizi paylaşmanız bu netleştirmeyi kolaylaştırıyor.",
            },
            {
                soru: "Zincir mağazalarımız var, her şubede aynı hizmet standardını nasıl sağlıyorsunuz?",
                cevap:
                    "İlk şubede kurulan iş şablonunu (süre, malzeme, ekip düzeni) sonraki şubelere uyguluyoruz ve plus paket kapsamında bu şablona bakım kontrol noktalarını da entegre ediyoruz. Bu, her şubede hem iş hem bakım açısından aynı standardın uygulanmasını ve rotanın öngörülebilir ilerlemesini sağlıyor.",
            },
            {
                soru: "20'den fazla noktası olan büyük bir rotamız var, plus paket nasıl kurgulanıyor?",
                cevap:
                    "Büyük ve çok günlük rotalarda bakım kontrolünü periyodik ve planlı hâle getiriyoruz, sigorta kapsamını öncelikli olarak kurguluyoruz ve günlük bazda rota programını yeniden değerlendiriyoruz. Karma filo kullanılıyorsa her makinenin bakım takvimini ayrı ayrı senkronize ederek aynı anda birden fazla makinenin bakıma girmesini önlüyoruz.",
            },
            {
                soru: "Çok günlük rotada aynı operatör mü devam ediyor, yoksa değişiyor mu?",
                cevap:
                    "Mümkün olduğunca aynı operatörün rota boyunca devam etmesini önceliklendiriyoruz, çünkü bu hem makineye hem işe aşinalığı korur. Operatör değişimi gerekiyorsa (izin, hastalık gibi durumlarda) devir bilgisini eksiksiz aktarıyoruz, böylece rotanın akışı bozulmadan devam ediyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çok noktalı rota planlama mantığı (liste gruplama, tek makine/karma filo) genel sektör pratiğine dayanır; plus paket kapsamı firma pratiğidir. Marka adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin / Arazi Platform Kiralama: Plus Paketle Artan Risk Güvencesi",
        giris:
            "Zorlu zemin ve arazi koşullarında (engebeli, hazırlıksız, düzensiz yüzey) çalışan bir platform, standart bir beton zeminde çalışan makineye göre çok daha yüksek bir mekanik strese maruz kalır — süspansiyon, şase ve lastik sistemleri sürekli dengesiz yüzeye uyum sağlamaya çalışır ve bu, arıza olasılığını artıran bir faktördür. Plus paketimiz bu artan riski merkeze alarak kurgulanmıştır: zorlu zemine özel makine seçimi, standart işlere göre sıklaştırılmış bakım kontrolü ve arıza durumunda önceliklendirilmiş hızlı değişim garantisi, bu sınıftaki kiralamaların standart parçasıdır. Amacımız, zorlu zeminin getirdiği ek riski önceden öngörüp işletmenizin üzerinden almak.",
        maddeler: [
            {
                baslik: "Zorlu zeminin makine üzerindeki mekanik etkisi",
                metin:
                    "Engebeli veya hazırlıksız bir arazide çalışan makine, düz beton zemine göre çok daha fazla titreşim ve dengesiz yük dağılımına maruz kalır. Bu, hem operatör konforunu hem şase-süspansiyon sisteminin ömrünü etkiler; plus paket kapsamında bu tür işlerde teslimat öncesi zemin durumunu değerlendirip dayanıklılığı yüksek modelleri önceliklendiriyoruz.",
            },
            {
                baslik: "Doğru şase ve lastik seçiminin arıza riskine etkisi",
                metin:
                    "Standart lastikli bir makine, düzensiz ve yumuşak zeminde batma veya dengesizlik riski taşır; bu risk, arıza değil doğrudan güvenlik sorunudur. Plus paket kapsamında geniş tabanlı, arazi tipi lastik ve şase konfigürasyonunu öneriyoruz — bu seçim, hem güvenliği hem uzun vadede arıza sıklığını azaltan bir karar.",
            },
            {
                baslik: "Sıklaştırılmış bakım kontrolünün gerekçesi",
                metin:
                    "Zorlu zeminde çalışan bir makinenin bakım ihtiyacı, standart bir sahadaki makineye göre daha hızlı birikir. Plus paket kapsamında bu tür işlerde bakım kontrol sıklığını artırıyoruz; bu, arızanın büyümeden önce fark edilmesini ve işin ortasında beklenmedik bir durma yaşanmamasını hedefler.",
            },
            {
                baslik: "Hazırlıksız arazide teslimat ve konumlandırma planlaması",
                metin:
                    "Hazırlıksız bir arazide makinenin sahaya nasıl ulaşacağı ve nereye konumlandırılacağı, iş başlamadan önce netleştirilmesi gereken bir konudur. Plus paket kapsamında bu planlamayı sizinle birlikte yapıyoruz; bu, hem nakliye sırasında hem çalışma sırasında oluşabilecek riskleri azaltan bir ön adım.",
            },
            {
                baslik: "Arızanın zorlu zeminde çözümü neden daha karmaşık",
                metin:
                    "Standart bir sahada arızalanan makineye ulaşmak görece kolaydır; zorlu bir arazide hem ikame makinenin sahaya ulaşması hem arızalı makinenin geri alınması ek bir lojistik zorluk taşır. Plus paketin hızlı değişim garantisi, bu zorluğu göz önünde bulundurarak zorlu zemin işlerinde önceliklendirilmiş bir süreç olarak kurgulanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre plus paket kapsamı",
                paragraflar: [
                    "Aşağıdaki tablo, farklı zemin/arazi koşullarında plus paketin nasıl şekillendiğini gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Zemin/arazi tipi", "Şase/lastik önerisi", "Bakım sıklığı", "Değişim önceliği"],
                    satirlar: [
                        ["Engebeli, kısmen düzensiz", "Geniş tabanlı lastik", "Standarttan sık", "Öncelikli"],
                        ["Hazırlıksız, yumuşak zemin", "Arazi tipi şase", "Sık", "Öncelikli, ön planlama gerekli"],
                        ["Çakıllı/dolgu saha", "Geniş tabanlı, dengeleme destekli", "Sık", "Öncelikli"],
                        ["Kısmen sertleşmiş inşaat zemini", "Standart, zemine göre değerlendirme", "Standarttan sık", "Öncelikli"],
                    ],
                },
            },
            {
                baslik: "Teslimat öncesi zemin değerlendirmesi",
                paragraflar: [
                    "Zorlu zemin işlerinde, sahanın fotoğraf veya kısa bir tarifle önceden paylaşılması, doğru şase ve lastik konfigürasyonunun planlanmasını sağlar. Bu değerlendirme, hem güvenliği hem plus paketin bakım-değişim önceliklendirmesinin doğru kurgulanmasını destekler.",
                    "Zemin durumu belirsizse veya hızlı değişebilecek bir yapıdaysa (örneğin yağış sonrası), kısa bir ön keşif yapılmasını öneriyoruz.",
                ],
            },
            {
                baslik: "Zorlu zeminde operatör deneyiminin rolü",
                paragraflar: [
                    "Dengesiz zeminde makinenin doğru ve güvenli konumlandırılması, deneyimli operatör kullanımıyla önemli ölçüde kolaylaşır. Plus paket kapsamında zorlu zemin işlerinde operatörlü kiralamayı, mekanik riskin yanına eklenen bir güvenlik önlemi olarak öneriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamız engebeli ve düzensiz, bu tip zeminde hangi makine önerilir?",
                cevap:
                    "Zemin durumunuzu değerlendirip geniş tabanlı, arazi tipi şase ve lastik konfigürasyonuna sahip modelleri öneriyoruz. Sahanın fotoğraf veya kısa bir tarifle önceden paylaşılması, doğru konfigürasyonun planlanmasını ve plus paket kapsamındaki bakım-değişim önceliklendirmesinin doğru kurgulanmasını sağlıyor.",
            },
            {
                soru: "Zorlu zeminde bakım kontrolü standart işlere göre farklı mı?",
                cevap:
                    "Evet, zorlu zeminde çalışan bir makinenin bakım ihtiyacı standart bir sahadaki makineye göre daha hızlı birikir; plus paket kapsamında bu tür işlerde bakım kontrol sıklığını artırıyoruz. Amacımız, arızanın büyümeden önce fark edilmesini ve işin ortasında beklenmedik bir durma yaşanmamasını sağlamak.",
            },
            {
                soru: "Hazırlıksız bir arazide makine arızalanırsa değişim ne kadar sürer?",
                cevap:
                    "Kesin bir süre taahhüt etmiyoruz, çünkü zorlu bir arazide hem ikame makinenin ulaşması hem arızalı makinenin geri alınması ek bir lojistik zorluk taşıyor. Ancak plus paketin hızlı değişim garantisi bu zorluğu göz önünde bulundurarak önceliklendirilmiş bir süreç olarak kurgulanıyor; sahanızın erişim koşullarını önceden paylaşmanız süreci hızlandırıyor.",
            },
            {
                soru: "Yağış sonrası zemin durumu değişti, bu durumda ne yapmalıyız?",
                cevap:
                    "Zemin durumu hızlı değişebilecek bir yapıdaysa (örneğin yağış sonrası), iş öncesi kısa bir ön keşif yapılmasını öneriyoruz. Bu, hem güvenliği hem de doğru şase-lastik konfigürasyonunun teyit edilmesini sağlıyor; değişen koşullara göre planı güncelliyoruz.",
            },
            {
                soru: "Operatörsüz kiralayabilir miyiz, yoksa zorlu zeminde operatörlü mü zorunlu?",
                cevap:
                    "Belgeli ve deneyimli personeliniz varsa operatörsüz kiralama mümkündür, ancak dengesiz zeminde doğru konumlandırma deneyim gerektirdiği için operatörlü kiralamayı bu tür işlerde öneriyoruz. Bu, mekanik riskin yanına eklenen ek bir güvenlik önlemi olarak düşünülmeli; kesin zorunluluk zeminin ne kadar zorlu olduğuna bağlı.",
            },
            {
                soru: "Zorlu zeminde plus paketin sigorta kapsamı standart sahadan farklı mı?",
                cevap:
                    "Zorlu zemin işlerinde makine üzerindeki mekanik stres arttığı için, plus paket kapsamındaki sigortayı bu artan riske göre kurguluyoruz. Kapsamın tam sınırlarını, sahanızın zemin durumu ve işin niteliğine göre teslimat öncesi netleştiriyoruz; bu, standart bir sahadaki kapsamdan farklı olabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Zorlu zemin/arazi koşullarının makine üzerindeki mekanik etkisi genel sektör bilgisidir; plus paket kapsamı firma pratiğidir. Marka adı, tesis adı ve rakam kullanılmamıştır.",
    },
};
