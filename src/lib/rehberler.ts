export interface RehberBolum {
    baslik: string;
    paragraflar: string[];
}

export interface Rehber {
    slug: string;
    etiket: string; // kategori üst yazısı
    baslik: string;
    aciklama: string; // meta description
    yayin: string; // ISO yayın tarihi
    guncelleme?: string; // ISO güncelleme tarihi
    giris: string;
    bolumler: RehberBolum[];
    sss?: { soru: string; cevap: string }[];
}

export const rehberler: Rehber[] = [
    {
        slug: "platform-tipi-secim-rehberi",
        etiket: "Makine Seçim Rehberi",
        baslik: "Makaslı mı, Eklemli mi, Teleskopik mi? Platform Tipi Seçim Rehberi",
        aciklama:
            "Yükseltici platform tipleri karşılaştırması: makaslı, eklemli ve teleskopik platform hangi işte seçilir? Yükseklik, erişim ve zemin ölçütleriyle pratik seçim rehberi.",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Yükseltici platform kiralarken ilk soru yükseklik değil, işin geometrisidir: çalışma noktasının tam altına makine koyabiliyor musunuz, yoksa engelin ötesine mi erişeceksiniz? Bu rehber; makaslı, eklemli ve teleskopik platformların yanı sıra örümcek platform ve dikey personel yükselticiyi de aynı ölçütlerle karşılaştırır ve doğru sınıfı seçmenizi sağlayacak bir karar zinciri kurar.",
        bolumler: [
            {
                baslik: "Önce iş geometrisini tarif edin",
                paragraflar: [
                    "Doğru makine, önce işin doğru tarif edilmesiyle bulunur. Karar vermeden önce üç değeri ayrı ayrı ölçün: çalışma noktasının yerden yüksekliği, makinenin kurulabileceği en yakın sağlam zeminden çalışma noktasına olan yatay uzaklık ve arada aşılması gereken engelin (makine hattı, çukur, saçak, ağaç) konumu.",
                    "Sahada 'bina yaklaşık on metre' demek yeterli değildir; çalışanın el seviyesi, parapetin üstü ve yatay uzaklık farklı değerlerdir. Bu üç sayı netleşmeden makine tipi tartışması varsayıma dayanır ve çoğu yanlış kiralama buradan doğar.",
                    "Ölçüleri fotoğrafla birlikte, başlangıç ve hedef noktasını işaretleyerek kaydetmek en sağlıklı yöntemdir. Aşağıdaki tiplerin her biri bu üç değerin belirli bir kombinasyonu için tasarlanmıştır.",
                ],
            },
            {
                baslik: "Makaslı platform: dikey erişimin standardı",
                paragraflar: [
                    "Makaslı platform sepeti yalnız dikey hareket ettirir; çalışma noktasının tam altına konumlanabildiğiniz her işte ilk tercihtir. En belirgin artısı sepet kapasitesidir: geniş tablada iki-üç çalışan, malzeme ve el aletleriyle birlikte yükselir.",
                    "Tavan tesisatı, aydınlatma, sprinkler, havalandırma kanalı, depo raf işleri ve cephe kaplamanın düz bölümleri makaslının tipik işleridir. Elektrikli modeller iç mekânda, dizel 4x4 modeller şantiye sahasında çalışır.",
                    "Sınırı da nettir: yatay erişim yok denecek kadar azdır. Sepetin ulaşacağı noktanın altında engel (makine hattı, çukur, ağaç, sundurma) varsa makaslı yetersiz kalır. Ayrıca dar koridorlarda geniş şasi manevrayı zorlaştırabilir; bu durumda dar gövdeli makaslı modeller veya dikey personel yükseltici değerlendirilir.",
                ],
            },
            {
                baslik: "Eklemli platform: engelin üzerinden aşan bom",
                paragraflar: [
                    "Eklemli (akrobat) platformun bomu birden fazla noktadan kırılır; bu yapı makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir.",
                    "Çatı arkaları, cephe girintileri, boru köprüleri, konveyör hatları ve ağaçlı peyzaj önündeki cepheler eklemlinin işleridir. Aynı yükseklikteki teleskopike göre daha dar alanda kurulur; dönebilen kule yapısı dar şantiyede büyük avantajdır.",
                    "Karşılığında maksimum yatay erişimi teleskopikten kısadır ve aynı yükseklik sınıfında genellikle bir miktar daha yüksek kiralama bedeliyle döner. Bomun ucundaki sepetin 'up-and-over' geometrisi, tek makineyle birden çok erişim açısı gerektiren bakım işlerinde zaman kazandırır.",
                ],
            },
            {
                baslik: "Teleskopik platform: maksimum erişim, düz doğrultu",
                paragraflar: [
                    "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi verir. Açık cephede, geniş sahada, makineyi işin uzağına kurmak zorunda olduğunuz durumlarda doğru seçimdir.",
                    "Köprü altı bakımları, stadyum ve hangar işleri, enerji nakil hattı yakınındaki kontrollü çalışmalar ve yüksek prefabrik montajı teleskopiğin alanıdır.",
                    "Engel aşma kabiliyeti sınırlıdır: bomun önünde yapı varsa eklemliye dönmek gerekir. Ayrıca uzun bomun salınımı nedeniyle hassas montaj işlerinde eklemli daha konforlu çalışır. Teleskopik modellerde erişim arttıkça sepet kapasitesi ve izin verilen rüzgâr değerleri düşebilir; uzak ve yüksek noktalarda çalışma diyagramı mutlaka model bazında okunur.",
                ],
            },
            {
                baslik: "Örümcek platform ve dikey personel yükseltici: özel durumlar",
                paragraflar: [
                    "Örümcek platform, katlanır paletli ayakları ve hafif gövdesiyle dar kapılardan geçebilen, hassas zeminlere zarar vermeden kurulabilen bir bom tipidir. Cami, tarihi yapı, AVM iç atriumu, cam tavanlı alanlar ve bahçe içi erişim gibi hem dar hem hassas sahalarda, standart eklemli veya teleskopiğin giremediği yerlerde değerlendirilir.",
                    "Dikey personel yükseltici ise tek kişilik, dar tabanlı ve yalnız dikey hareket eden bir sınıftır. Depo raf sayımı, mağaza içi aydınlatma ve dar koridorlu tesis bakımı gibi tekil, hafif ve tam altından erişilen işlerde, geniş makaslıya göre daha çevik bir çözümdür. Yük ve alan geniş değilse bu sınıf hem manevra hem maliyet avantajı sağlar.",
                    "Bu iki sınıf 'her işin makinesi' değildir; kapasite ve erişim sınırları dardır. Ancak dar geçiş, hassas zemin veya tekil erişim söz konusu olduğunda, büyük makineyi zorlamak yerine bu özel tiplerin uygunluğu sorulmalıdır.",
                ],
            },
            {
                baslik: "Katalog değerini doğru okumak: platform ve çalışma yüksekliği",
                paragraflar: [
                    "Makine kataloglarında iki farklı yükseklik geçer: platform (sepet zemini) yüksekliği ve çalışma yüksekliği. Çalışma yüksekliği, platform yüksekliğinin yaklaşık 2 metre üzerine (ortalama bir insanın uzanma payına) karşılık gelir. İşin gerektirdiği en yüksek nokta çalışma yüksekliğiyle karşılaştırılmalıdır.",
                    "Yatay erişim (outreach) değeri de tek bir sayı değildir: maksimum yatay erişim çoğu zaman maksimum yükseklikte değil, orta yükseklikte elde edilir ve sepet yükü arttıkça düşebilir. Bu yüzden 'şu makine 20 metre yana ulaşır' ifadesi, çalışma diyagramındaki ilgili nokta okunmadan bağlayıcı sayılmaz.",
                    "Doğru yaklaşım, işin gerektirdiği en zorlu noktayı (en yüksek + en uzak + en ağır) belirleyip bu noktanın seçilen modelin çalışma zarfı içinde kaldığını teknik föyden teyit etmektir. Payı büyük makineyle değil, doğru sınıfın doğru modeliyle bırakmak gerekir.",
                ],
            },
            {
                baslik: "Üç soruda hızlı karar",
                paragraflar: [
                    "1) Çalışma noktasının tam altına makine koyabiliyor musunuz? Evet → makaslı (veya dar/tekil işte dikey personel yükseltici). 2) Hayır; arada engel mi var? Evet → eklemli. 3) Engel yok ama nokta uzakta mı? → teleskopik. Saha hem dar hem hassas ise → örümcek platformu sorun.",
                    "Bu zincir bir başlangıç filtresidir; nihai seçim zemin taşıma gücü, iç/dış mekân, güç kaynağı ve nakliye ölçüleriyle birlikte kesinleşir. Karar verirken tek bir kriteri (örneğin yalnız yüksekliği) esas almak, en sık yapılan hatadır.",
                ],
            },
        ],
        sss: [
            { soru: "Aynı işte iki tip makine gerekebilir mi?", cevap: "Evet; örneğin depo projesinde raf işleri makaslıyla, cephe ve saçak işleri eklemliyle yürür. Çok makineli işlerde tek organizasyonla kombine kiralama maliyeti düşürür." },
            { soru: "Rüzgâr limiti tipe göre değişir mi?", cevap: "Evet. Üretici limiti model ve kullanım konfigürasyonu bazında verir. Eklemli, teleskopik ve makaslı platformların dış mekân onayları aynı olmayabilir; çalışma öncesinde makinenin teknik föyü ve üzerindeki bilgi plakası kontrol edilmelidir." },
            { soru: "Zemin eğimi hangi tipte daha kritik?", cevap: "Tüm personel yükselticilerde kritiktir. Eklemli ve teleskopik modellerde uzayan erişim nedeniyle üreticinin eğim ve kurulum sınırlarına özellikle uyulmalıdır; denge göstergesi ve zemin koşulu kontrol edilmeden platform yükseltilmemelidir." },
            { soru: "Örümcek platform her dar alana girer mi?", cevap: "Girmez; giriş genişliği, zemin taşıma gücü ve kurulum için gereken ayak açılım alanı model bazında değişir. Dar ve hassas alanlarda örümcek platform güçlü bir seçenektir ancak kapı ölçüsü, zemin yükü ve ayak açılımı teknik föyle birlikte teyit edilmelidir." },
        ],
    },
    {
        slug: "yuksekte-calisma-mevzuati",
        etiket: "İSG ve Mevzuat",
        baslik: "Yüksekte Çalışma Mevzuatı: 6331 Kapsamında Yükümlülükler Rehberi",
        aciklama:
            "6331 sayılı İSG Kanunu ve ilgili yönetmeliklere göre yüksekte çalışma: tanım, işveren yükümlülükleri, toplu koruma önceliği, ekipman ve eğitim şartları.",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Yüksekte çalışma, Türk İSG mevzuatının en sıkı düzenlenen alanlarından biridir. Bu rehber; 6331 sayılı Kanun, İnşaat İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği ve İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği'nin yüksekte çalışmaya bakan yükümlülüklerini saha diliyle özetler. Amaç, mevzuat maddelerini şantiyede uygulanabilir kararlara çevirmektir.",
        bolumler: [
            {
                baslik: "Yüksekte çalışma sayılan işler",
                paragraflar: [
                    "Mevzuat belirli bir metre eşiği koymaz: seviye farkı bulunan ve düşme sonucu yaralanma ihtimali olan her çalışma yüksekte çalışmadır. Bir metrelik platformdaki iş de, 40 metredeki cephe işi de aynı hukuki çerçeveye girer.",
                    "Bu geniş tanımın pratik sonucu şudur: 'alçak, bir şey olmaz' değerlendirmesi hukuken geçersizdir; risk değerlendirmesi seviye farkı olan her işi kapsamalıdır.",
                    "Tanımın bir diğer sonucu, işin süresine bakılmamasıdır: 'sadece beş dakika sürecek' gibi gerekçeler yükümlülüğü kaldırmaz. Kısa süreli işlerde önlem almadan çalışma, denetimlerde ve kaza sonrası incelemelerde en sık karşılaşılan kusurlardandır.",
                ],
            },
            {
                baslik: "Önlem hiyerarşisi: önce toplu koruma",
                paragraflar: [
                    "Mevzuat önlem sırasını açıkça kurar: önce riskin kaynağında giderilmesi ve çalışma yerinin güvenli kılınması (korkuluk, platform, kapak), sonra toplu koruma (güvenlik ağı), en son kişisel koruyucu donanım (emniyet kemeri). Bu sıra tercih değil, yükümlülüktür.",
                    "Yükseltici platform kullanımı bu hiyerarşide güçlü bir toplu koruma çözümüdür: çalışan, korkuluklu ve zemin dayanımı test edilmiş bir sepette çalışır. Merdiven ve iskele kurulumuna göre hem hızlı hem denetlenebilir bir yöntemdir.",
                    "Kemer, korkuluğun alternatifi değildir. Eklemli ve teleskopik personel yükselticilerde fırlama riskine karşı üretici talimatı, saha prosedürü ve risk değerlendirmesine uygun bağlantı sistemi kullanılmalıdır.",
                ],
            },
            {
                baslik: "Risk değerlendirmesi ve çalışma izni",
                paragraflar: [
                    "Her yüksekte çalışma işi, işe özgü bir risk değerlendirmesiyle planlanmalıdır. Değerlendirme; işin yeri, ekipman sınıfı, zemin ve hava koşulları, çevredeki devam eden operasyonlar ve kurtarma senaryosunu birlikte ele alır. Genel bir şablonu doldurmak değil, o günkü işin gerçek risklerini yazmak esastır.",
                    "Birçok tesis, yüksekte çalışma için ayrı bir çalışma izni (permit-to-work) sistemi işletir. İzni, işi yapan ekipten bağımsız bir yetkilinin onaylaması, atlanmış önlemleri işe başlamadan yakalar. İzinsiz açılan iş, hem tesis prosedürünün hem de denetim beklentilerinin ihlalidir.",
                    "Risk değerlendirmesi statik bir belge değildir: hava, zemin veya iş kapsamı değiştiğinde yeniden gözden geçirilmeli; makine sınıfı ilk seçimden farklılaşıyorsa değerlendirme güncellenmelidir.",
                ],
            },
            {
                baslik: "Ekipman yükümlülükleri",
                paragraflar: [
                    "İş Ekipmanları Yönetmeliği'ne göre kaldırma ekipmanları, standartlarda aksi belirtilmedikçe yılda en az bir kez yetkili teknik elemanca periyodik kontrolden geçirilir; raporun sahada bulunması denetimlerde ilk istenen evraktır.",
                    "Günlük operatör kontrolü ayrı bir yükümlülüktür: fren, acil stop, acil indirme, korkuluk ve denge sensörü her vardiya öncesi test edilip kaydedilmelidir.",
                    "Kiralık makinede periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracının sorumluluğundadır. Sözleşmede bu paylaşımın yazılı olması iki tarafı da korur ve kaza sonrası sorumluluk tartışmasını önler.",
                ],
            },
            {
                baslik: "Eğitim ve belgelendirme",
                paragraflar: [
                    "Yüksekte çalışacak herkese işe özgü İSG eğitimi verilmelidir; yükseltici platform operatörünün ayrıca operatör belgesi (MYK yeterliliği) bulunmalıdır. Eğitimin işe ve ekipmana özgü olması, genel bir katılım belgesinden daha belirleyicidir.",
                    "Eğitim kayıtları ve belge fotokopileri şantiye İSG dosyasında tutulur. Belgesiz operatör çalıştırmak idari yaptırımın ötesinde, kaza hâlinde işverenin kusurunu ağırlaştıran ve sigorta rücu riskini artıran ana etkendir.",
                    "Alt yüklenicilerle çalışılan sahalarda belge kontrolü çoğu zaman asıl işverenin İSG ekibine düşer; 'operatör belgesini taşeron sağlar' maddesi, kontrol yükümlülüğünü ortadan kaldırmaz.",
                ],
            },
            {
                baslik: "Alt işveren ve koordinasyon yükümlülüğü",
                paragraflar: [
                    "Birden fazla işverenin aynı sahada bulunduğu projelerde mevzuat, koordinasyon yükümlülüğü getirir: asıl işveren ve alt işverenler, İSG önlemlerini birbirinden bağımsız değil, birlikte planlamak zorundadır. Yüksekte çalışma söz konusu olduğunda bu, ekipmanın, korkuluğun ve çalışma izninin ortak kurallara bağlanması demektir.",
                    "Kiralık makine bu koordinasyonun içine girer: makineyi kiraya veren periyodik kontrol raporunu sağlar, kullanan işveren günlük kontrol ve doğru kullanımdan sorumludur, sahadaki asıl işveren ise genel koordinasyonu gözetir. Bu paylaşım sözleşmede yazılı olmadığında, kaza sonrası sorumluluk belirsizleşir.",
                    "Koordinasyon eksikliği, uygulamada en çok 'herkes diğerinin aldığını sandığı' önlemlerde açığa çıkar: korkuluğu kimin kuracağı, gözcünün hangi ekipten olacağı, çalışma iznini kimin onaylayacağı baştan netleştirilmelidir.",
                ],
            },
            {
                baslik: "Kaza sonrası: kusur ve inceleme",
                paragraflar: [
                    "Bir iş kazası sonrası inceleme, alınan ve alınmayan önlemleri geriye dönük olarak değerlendirir. Risk değerlendirmesinin yapılıp yapılmadığı, önlem hiyerarşisine uyulup uyulmadığı, ekipmanın periyodik kontrolü ve operatörün belgesi, eğitim kayıtları ve çalışma izni ilk bakılan başlıklardır.",
                    "Belgesiz operatör çalıştırmak, periyodik kontrolü yapılmamış makine kullanmak veya çalışma iznini atlamak, kaza hâlinde işverenin kusur oranını artıran ve sigorta rücu riskini doğuran etkenlerdir. Bu yüzden mevzuata uyum yalnız denetim için değil, olası bir olayın hukuki ve mali sonuçlarını sınırlamak için de gereklidir.",
                    "Bu rehber genel bir çerçeve sunar; somut bir olayın hukuki değerlendirmesi, olayın koşullarına, güncel mevzuata ve yetkili mercilerin görüşüne bağlıdır. Web içeriği, hukuki görüş veya bilirkişi değerlendirmesi yerine geçmez.",
                ],
            },
        ],
        sss: [
            { soru: "1,5 metrelik seviye farkı için de önlem şart mı?", cevap: "Evet. Mevzuat metre eşiği tanımlamaz; düşme riski doğuran her seviye farkı risk değerlendirmesine girmek ve önlem almak zorundadır." },
            { soru: "Periyodik kontrolü kim yapabilir?", cevap: "İlgili teknik eğitime sahip makine mühendisleri ile makine teknikerleri/yüksek teknikerleri; kontrol, yetkilendirilmiş kişilerce ve geçerli kayıt sistemi üzerinden raporlanır. Güncel yetki ve kayıt şartları resmî kaynaklardan doğrulanmalıdır." },
            { soru: "Yükseltici platform iskele yerine kullanılabilir mi?", cevap: "İşin niteliğine göre çoğunlukla evet; kısa süreli ve noktasal işlerde platform, iskeleye göre hem hızlı hem güvenli bir toplu koruma çözümüdür. Uzun süreli sabit cephe işlerinde iskele ekonomik kalabilir." },
            { soru: "Bu rehber hukuki görüş yerine geçer mi?", cevap: "Hayır. Bu içerik genel bilgilendirme amaçlıdır; mevzuat zamanla değişir. Yükümlülüklerinizi işyerinizin İSG uzmanı, yetkili kamu kurumları ve Resmî Gazete'nin güncel metinleri üzerinden doğrulayın." },
            { soru: "Çalışma izni her tesiste zorunlu mu?", cevap: "Zorunluluk ve biçim, tesisin prosedürüne ve işin riskine göre değişir; birçok işletme yüksekte çalışma için ayrı bir yazılı izin sistemi işletir. İşin yapıldığı tesisin güncel prosedürü esas alınmalı, izinsiz iş açılmamalıdır." },
            { soru: "Toplu koruma her zaman platform mu demektir?", cevap: "Hayır. Toplu koruma; korkuluk, güvenlik ağı ve yükseltici platform gibi çözümleri kapsar. Yükseltici platform, kısa süreli ve noktasal işlerde güçlü bir toplu koruma seçeneğidir; uzun süreli sabit kenarlarda korkuluk daha uygun olabilir. Seçim işin süresine ve geometrisine bağlıdır." },
        ],
    },
    {
        slug: "is-oncesi-kontrol-listesi",
        etiket: "Saha Uygulaması",
        baslik: "Yüksekte Çalışma Öncesi Kontrol Listesi: 10 Maddede Güvenli Başlangıç",
        aciklama:
            "Yüksekte çalışmaya başlamadan önce kontrol edilecek 10 başlık: zemin, hava, enerji hatları, makine kontrolleri, KKD ve çalışma izni. Yazdırılabilir pratik liste.",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Ciddi düşme kazalarının ortak özelliği, işin 'hemen başlayıverelim' diye kontrolsüz açılmasıdır. Bu 10 maddelik liste, ekip lideri veya İSG uzmanının iş başlamadan beş dakikada tamamlayabileceği bir kapı kontrolüdür. Listeyi bir formaliteye değil, gerçek bir 'geç/geçme' kararına dönüştürmek etkisini belirler.",
        bolumler: [
            {
                baslik: "Neden yazılı bir kapı kontrolü?",
                paragraflar: [
                    "Deneyimli ekiplerde bile kazaların çoğu bilgi eksikliğinden değil, bilinen bir adımın atlanmasından çıkar. Yazılı liste, 'herkes biliyordur' varsayımını ortadan kaldırır ve sorumluluğu tek bir onay anına bağlar.",
                    "Liste, operatörün yaptığı günlük makine kontrolünün yerine geçmez; onu tamamlar. Operatör makineyi, ekip lideri ise sahayı ve organizasyonu doğrular. İki kontrol birbirini besler.",
                ],
            },
            {
                baslik: "1-3: Saha ve çevre",
                paragraflar: [
                    "1) Zemin: Makinenin kurulacağı zeminin taşıma kapasitesi ve eğimi uygun mu? Dolgu, rögar kapağı ve kanal üstlerinden kaçının; gerekirse çelik plaka serin. Kaplama altındaki döşeme yapısı bilinmiyorsa yapı/zemin yetkilisinin görüşü alınmalıdır.",
                    "2) Hava: Rüzgâr, yağış ve görüş koşulları seçilen modelin üretici limitlerine uygun mu? Gün içi bozulma ihtimaline karşı ekipmana özgü durdurma kriterini baştan belirleyin; rüzgâr limiti her makine için aynı değildir.",
                    "3) Enerji hatları: Çalışma sahasının üstünde veya bom hareket zarfında enerji nakil hattı var mı? Güvenli mesafe sağlanamıyorsa hat sahibinden kesinti/izolasyon istenmeden iş açılmaz.",
                ],
            },
            {
                baslik: "4-7: Makine ve ekipman",
                paragraflar: [
                    "4) Günlük kontrol: Operatörün vardiya öncesi kontrol formu dolduruldu mu? Acil stop ve acil indirme test edildi mi?",
                    "5) Evrak: Periyodik kontrol raporu ve operatör belgesi sahada mı? Kiralık makinede raporun bir kopyası makineyle birlikte bulunmalıdır.",
                    "6) KKD: Eklemli veya teleskopik platformda üretici talimatına uygun tam vücut kemeri ve bağlantı sistemi doğru ankraj noktasına bağlı mı? Baret ve diğer KKD saha risk değerlendirmesine uygun mu?",
                    "7) Yük: Sepetteki kişi + malzeme toplamı kapasite etiketinin altında mı? Sepetten sarkan, korkuluğa asılan yük var mı? Yükün sepet içinde dengeli dağıldığı kontrol edildi mi?",
                ],
            },
            {
                baslik: "8-10: Organizasyon",
                paragraflar: [
                    "8) Alan izolasyonu: Makinenin altı ve devrilme zarfı şeritle kapatıldı mı? Alan içinden yaya/araç geçişi engellendi mi?",
                    "9) Haberleşme ve gözcü: Yerde, acil indirmeyi bilen bir kişi görevli mi? Operatörle haberleşme yöntemi (telsiz/işaret) belirlendi mi?",
                    "10) Çalışma izni ve kurtarma: Tesis prosedürü gerektiriyorsa yüksekte çalışma izni imzalandı mı? Sepette biri asılı kalırsa kaç dakikada, hangi yöntemle indirileceği (kurtarma planı) önceden belirlendi mi?",
                ],
            },
            {
                baslik: "Listeyi sahada işler kılmak",
                paragraflar: [
                    "Liste, işe başlamadan hemen önce ve çalışma noktasında doldurulmalıdır; bir gün önceden ofiste imzalanan liste, o günkü zemin ve hava koşulunu yansıtmaz. 'Hayır' çıkan her madde, giderilmeden işin açılmamasını gerektiren bir durak noktasıdır.",
                    "Koşullar gün içinde değişebilir: rüzgâr artar, ikinci bir ekip sahaya girer, zemin ıslanır. Bu durumlarda liste yeniden gözden geçirilmelidir. İyi bir kapı kontrolü, işi bir kez değil, koşul değiştikçe yeniden onaylar.",
                    "Doldurulan listeler saklanmalıdır: hem sürekli iyileştirme için veri, hem de bir olay hâlinde önlem alındığının kanıtıdır. Kısa ve okunur bir form, uzun ama doldurulmayan bir formdan her zaman daha güvenlidir.",
                ],
            },
            {
                baslik: "En sık atlanan maddeler",
                paragraflar: [
                    "Deneyim, listeyi gereksiz kılmaz; aksine deneyimli ekiplerde atlama daha sık görülür çünkü 'zaten biliyoruz' güveni araya girer. Sahada en sık atlanan üç madde, çalışma izni, kurtarma planı ve enerji hattı mesafesidir. Bu üçünün ortak özelliği, işi başlatmayı geciktirmesi ve bu yüzden 'sonra hallederiz' denerek ertelenmesidir.",
                    "Çalışma izni, özellikle taşeron ekiplerin farklı tesislerde çalıştığı durumlarda karışır: her tesisin prosedürü aynı değildir ve bir tesiste gerekmeyen izin, diğerinde zorunludur. Kurtarma planı ise çoğu zaman 'bir şey olmaz' varsayımıyla hiç kurulmaz — oysa asılı kalma riski, düşmenin kendisinden değil kurtarmanın gecikmesinden doğar.",
                    "Enerji hatları, açık saha işlerinin en ölümcül ama en görünmez riskidir. Bomun hareket zarfı üç boyutludur; yandan güvenli görünen bir hat, bom uzayınca tehlike mesafesine girebilir. Bu madde, gözle 'uzak' kararı verilerek değil, hat gerilimine göre tanımlı mesafeyle değerlendirilmelidir.",
                ],
            },
            {
                baslik: "Listeyi ekibin refleksi hâline getirmek",
                paragraflar: [
                    "Bir kontrol listesinin gerçek gücü, kâğıtta değil ekibin alışkanlığındadır. Liste her sabah aynı kişi tarafından, aynı sırayla ve çalışma noktasında doldurulduğunda bir refleks hâline gelir; unutulan madde hemen fark edilir. Bunu desteklemek için liste kısa, okunur ve sahanın gerçek risklerine odaklı tutulmalıdır.",
                    "Kısa bir başlangıç konuşması (toolbox talk) listeyi tamamlar: o günkü işin özel riskleri (hava, ikinci ekip, zemin değişikliği) beş dakikada paylaşılır. Böylece liste yalnız bir onay kutusu değil, ekibin ortak durum değerlendirmesi hâline gelir.",
                    "Son olarak liste, 'geç/geçme' kararı üretmelidir. Bir maddede 'hayır' çıktığında işin durması ve eksik giderilmeden başlanmaması, listenin ciddiye alındığının tek gerçek kanıtıdır. Doldurulup görmezden gelinen bir liste, hiç olmamasından daha tehlikeli bir güven yanılsaması yaratır.",
                ],
            },
        ],
        sss: [
            { soru: "Bu listeyi kim doldurmalı?", cevap: "İdeali ekip lideri veya İSG uzmanının iş başlamadan doldurmasıdır; operatörün günlük makine kontrolü bu listenin 4. maddesini besler, yerine geçmez." },
            { soru: "Enerji hattına güvenli mesafe nedir?", cevap: "Hat gerilimine göre değişir ve tesis/dağıtım şirketi prosedürüne tabidir; belirsizlikte hat yetkilisinden yazılı mesafe veya kesinti talep edilmelidir." },
            { soru: "Gözcü gerçekten zorunlu mu?", cevap: "Mevzuat acil durumlara karşı organizasyon ister; sepetteki çalışanın kurtarılması yerden acil indirme bilen biri olmadan mümkün olmayabilir. Tek kişilik 'yalnız çalışma' yüksekte kabul edilmemelidir." },
            { soru: "Listeyi her iş için yeniden mi doldurmalıyım?", cevap: "Evet. Zemin, hava ve organizasyon her sahada ve her günde farklıdır; tek seferlik bir liste, sonraki günlerin koşullarını temsil etmez." },
            { soru: "Kontrol listesi kaç dakikada tamamlanır?", cevap: "İyi hazırlanmış, sahaya özel bir liste beş dakikada tamamlanacak kadar kısa olmalıdır. Amaç uzun bir form doldurmak değil, işi açmadan önce kritik maddeleri hızlıca teyit etmektir; kısa ve okunur bir liste, doldurulma olasılığı en yüksek olandır." },
            { soru: "Bir maddede 'hayır' çıkarsa ne yapılır?", cevap: "İş açılmaz. Kontrol listesi bir formalite değil, 'geç/geçme' kararıdır; eksik giderilmeden çalışmaya başlanması, listenin amacını ortadan kaldırır ve denetimlerde en sık rastlanan bulgudur." },
            { soru: "Liste dijital mi yoksa kâğıt mı olmalı?", cevap: "Biçimden çok kullanılabilirlik önemlidir. Kâğıt form sahada hızlı ve internetsiz çalışır; dijital form ise kaydı ve takibi kolaylaştırır. Hangisi seçilirse seçilsin, listenin çalışma noktasında ve iş açılmadan hemen önce doldurulması esastır." },
        ],
    },
    {
        slug: "akulu-mu-dizel-mi-platform-secimi",
        etiket: "Makine Seçim Rehberi",
        baslik: "Akülü mü, Dizel mi? Güç Kaynağına Göre Platform Seçimi",
        aciklama:
            "İç mekân mı, açık şantiye mi? Akülü ve dizel yükseltici platformlar arasındaki fark: emisyon, gürültü, zemin gereksinimi ve maliyet açısından karşılaştırma.",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Platform tipini (makaslı/eklemli/teleskopik) belirledikten sonra ikinci büyük karar güç kaynağıdır. Bu seçim çalışma ortamına göre değişir ve doğru yapılmadığında hem operasyonel duruşlara hem de gizli maliyetlere yol açar. Rehber, iki güç tipini çevre, zemin, vardiya ve maliyet açısından karşılaştırır.",
        bolumler: [
            {
                baslik: "Akülü platformlar: kapalı alanın standardı",
                paragraflar: [
                    "Akülü modeller sıfır egzoz emisyonlu ve düşük gürültülüdür; bu özellikleri onları AVM, hastane, fabrika içi ve ofis gibi kapalı, havalandırması sınırlı mekânlar için zorunlu tercih hâline getirir.",
                    "Şarj süresi ve vardiya planlaması akülü kullanımın kısıtıdır: tam şarj genellikle uzun sürer, bu yüzden kesintisiz çalışan sahalarda yedek makine veya vardiya arası fırsat şarjı planı gerekir. Şarj için uygun voltajda ve yakında bir priz bulunması, sahada baştan kontrol edilmesi gereken bir kalemdir.",
                    "Zemin hassasiyeti de düşüktür — iz bırakmayan lastik seçenekleri sayesinde parke, epoksi kaplama gibi hassas zeminlerde akülü modeller tercih edilir. Elektrikli makaslı ve dikey personel yükselticilerin büyük bölümü bu sınıftadır.",
                ],
            },
            {
                baslik: "Dizel platformlar: açık sahanın gücü",
                paragraflar: [
                    "Dizel modeller genellikle dört çeker tahrik ve daha yüksek tırmanma açısıyla gelir; şantiye sahası, arazi zemini ve eğimli yüzeylerde akülüden daha güvenilirdir.",
                    "Yakıt ikmali dakikalar sürer, bu da kesintisiz vardiya gerektiren dış mekân projelerinde operasyonel avantaj sağlar. Ağır cephe ve yüksek erişim gerektiren dizel eklemli/teleskopik modeller, uzun bom sınıflarında yaygındır.",
                    "Buna karşılık gürültü ve egzoz emisyonu nedeniyle kapalı alanda kullanılamaz; kapalı bir depo veya hangarda dizel makine çalıştırmak ölümcül karbon monoksit riski doğurur. Bazı sahalarda partikül filtresi veya emisyon sınıfı şartı aranabilir; bu, teklif öncesinde sorulmalıdır.",
                ],
            },
            {
                baslik: "Hibrit ve elektrikli arazi modelleri",
                paragraflar: [
                    "Son yıllarda hibrit ve elektrikli arazi (rough terrain) modeller yaygınlaşıyor: bu makineler dört çeker kabiliyetini akülü sessizlik ve sıfır emisyonla birleştirmeyi amaçlar. Emisyon kısıtı olan ama zemini zorlu sahalar (kapalıya yakın çalışma, gürültü sınırlı bölgeler) için bir orta yol sunarlar.",
                    "Türkiye'deki kiralık filo hâlâ ağırlıklı olarak saf akülü veya saf dizel modellerden oluşur; hibrit/elektrikli arazi modellerin güncel uygunluğu bölge ve tarih bazında tedarikçiye sorulmalıdır. Bu sınıfın kiralama bedeli ve teslim süresi klasik modellerden farklı olabilir.",
                ],
            },
            {
                baslik: "Karar tablosu ve gizli maliyetler",
                paragraflar: [
                    "Kapalı mekân, hassas zemin, gece/mesai saati gürültü kısıtı olan sahalar → akülü. Açık şantiye, eğimli/arazi zemin, uzun vardiya ve hızlı ikmal ihtiyacı → dizel. Hem emisyon kısıtı hem zorlu zemin varsa → hibrit/elektrikli arazi modellerin uygunluğunu sorun.",
                    "Bazı projelerde her iki tip de gerekir: örneğin bir fabrika genişletme projesinde iç mekân bakımı akülüyle, dış cephe ve çatı işleri dizel makineyle yürütülür. Tek makineyle tüm işi zorlamak yerine iş kalemlerini ayırmak çoğu zaman daha güvenli ve hızlıdır.",
                    "Karar yalnız günlük kiralama bedeline göre verilmemelidir. Akülüde yetersiz şarj altyapısının doğurduğu duruşlar, dizelde ise emisyon/gürültü kısıtı olan bir sahaya yanlış makine gönderilmesi, günlük fiyat farkından çok daha pahalıya mal olur.",
                ],
            },
            {
                baslik: "İç mekân emisyon ve havalandırma kuralı",
                paragraflar: [
                    "Kapalı alanda güç kaynağı seçimi bir konfor değil, güvenlik meselesidir. İçten yanmalı motorların egzozundaki karbon monoksit, yeterince havalandırılmayan bir depo veya hangarda dakikalar içinde ölümcül seviyeye ulaşabilir. Bu yüzden kapalı alanların standart ve çoğu zaman tek doğru çözümü akülü makinelerdir.",
                    "Yarı kapalı veya havalandırması sınırlı alanlarda dizel kullanımı, ancak doğrulanmış zorlanmış havalandırma, gaz ölçümü ve işverenin yazılı prosedürü ile değerlendirilebilir; bu istisnai bir durumdur ve varsayımla ilerlenmez. Bazı tesisler, hassas üretim veya gıda alanlarında emisyon sınıfı ya da partikül filtresi şartı arar.",
                    "Gürültü de bir kapalı alan kısıtıdır: hastane, AVM, ofis ve gece çalışması gereken sahalarda dizel makinenin sesi çalışmayı imkânsız kılabilir. Akülü modellerin sessizliği, bu ortamlarda operasyonel bir zorunluluktur.",
                ],
            },
            {
                baslik: "Kiralama öncesi güç kaynağı kontrol listesi",
                paragraflar: [
                    "Doğru güç kaynağını seçmek için teklif öncesinde birkaç soruyu netleştirin: Çalışma kapalı mı, açık mı, yarı kapalı mı? Zemin düz ve sağlam mı, yoksa eğimli/arazi mi? Vardiya kaç saat sürüyor ve kesintisiz mi? Sahada uygun voltajda şarj prizi var mı? Emisyon, gürültü veya gece çalışma kısıtı var mı?",
                    "Akülü seçildiyse şarj planı baştan kurulmalıdır: prizin yeri ve voltajı, tam şarj süresi, uzun vardiyada fırsat şarjı veya yedek makine ihtiyacı. Dizel seçildiyse yakıt ikmali, egzoz ve gürültü kısıtları ile zemin taşıma gücü kontrol edilir.",
                    "Bu kontroller, makine tipi (makaslı/eklemli/teleskopik) kararından bağımsız değildir; ikisi birlikte netleştirilir. Doğru tip + yanlış güç kaynağı ya da tersi, sahada duruşa ve ek maliyete yol açar. Nihai uygunluk, güncel stok ve saha koşuluyla birlikte yazılı teklifte teyit edilir.",
                ],
            },
        ],
        sss: [
            { soru: "Hibrit (akülü + dizel) modeller var mı?", cevap: "Evet, bazı üreticiler her iki gücü birleştiren modeller sunar; ancak Türkiye'deki kiralık filo ağırlıklı olarak saf akülü veya saf dizel modellerden oluşur. Hibrit uygunluğu tarih ve bölgeye göre tedarikçiden teyit edilmelidir." },
            { soru: "Akülü platform yağmurda kullanılabilir mi?", cevap: "Çoğu akülü model iç mekân kullanımı için tasarlanmıştır ve açık havada yağışa karşı koruma sınıfı sınırlıdır; dış mekân/yağış koşulları için üreticinin onayı kontrol edilmelidir." },
            { soru: "Kapalı alanda kesinlikle dizel kullanılamaz mı?", cevap: "Yeterli ve doğrulanmış zorlanmış havalandırma olmadan kapalı alanda dizel çalıştırmak karbon monoksit zehirlenmesi riski taşır ve önerilmez. Kapalı alanların standart çözümü akülü makinelerdir." },
            { soru: "Uzun süreli projede akülü mü, dizel mi daha ekonomik?", cevap: "Kesin bir kural yoktur; ortam belirler. Kapalı veya emisyon/gürültü kısıtlı sahada akülü zaten zorunludur. Açık ve zorlu zeminde dizel operasyonel avantaj sağlar. Uzun projede toplam maliyeti; kiralama bedeli kadar duruş süreleri, şarj/yakıt lojistiği ve saha uygunluğu belirler." },
            { soru: "Akülü platformun şarjı vardiyaya yeter mi?", cevap: "Tam şarjlı bir makine tipik bir vardiyayı karşılayacak şekilde tasarlanır, ancak yoğun kullanım ve düşük sıcaklık çalışma süresini kısaltır. Kesintisiz veya çok vardiyalı çalışmada fırsat şarjı ya da yedek makine planı yapılmalı; uygun voltajda priz erişimi baştan teyit edilmelidir." },
            { soru: "Güç kaynağı seçimi makine tipinden önce mi gelir?", cevap: "İkisi birlikte kararlaştırılır. Önce iş geometrisi makine tipini (makaslı/eklemli/teleskopik) belirler; ardından çalışma ortamı güç kaynağını (akülü/dizel) belirler. Doğru tip + yanlış güç kaynağı ya da tersi, sahada duruşa yol açar; nihai uygunluk güncel stok ve saha koşuluyla yazılı teklifte teyit edilir." },
        ],
    },
    {
        slug: "kis-aylarinda-yukseklik-guvenligi-buz-don",
        etiket: "Saha Uygulaması",
        baslik: "Kış Aylarında Yükseklikte Çalışma: Buz ve Don Riskine Karşı Önlemler",
        aciklama:
            "Düşük sıcaklıkta yükseltici platform kullanımı: buzlanmış zemin, donmuş hidrolik hortum ve soğuk hava koşullarının operasyona etkisi.",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Kış ayları yüksekte çalışmaya iki ayrı risk katmanı ekler: zemin ve ekipmanın kendisi. Buna bir üçüncü katman, çalışanın soğuk kaynaklı performans kaybı eklenir. Bu rehber, düşük sıcaklıkta güvenli operasyon için alınması gereken ek önlemleri özetler.",
        bolumler: [
            {
                baslik: "Buzlanmış zemin ve kayma riski",
                paragraflar: [
                    "Sabah erken saatlerde veya gölgeli alanlarda zemin buzlanması, makinenin stabilizatör ayaklarının tam temas kurmasını engelleyebilir. Kurulum öncesi zemin görsel kontrolü kış aylarında standart hâle getirilmelidir.",
                    "Merdiven ve platforma giriş basamaklarındaki buzlanma, çalışanın düşme riskini asıl işten önce, makineye binerken doğurur — bu basit ama sık gözden kaçan bir risktir. Giriş noktalarının buzdan arındırılması ve kaymaz yüzey kullanımı önerilir.",
                    "Kar ve buz eridiğinde ortaya çıkan su, dizel makinelerin çalıştığı arazi zeminini yumuşatabilir; sabah sağlam görünen bir zemin öğleden sonra taşıma gücünü yitirebilir. Zemin kontrolü gün içinde tekrarlanmalıdır.",
                ],
            },
            {
                baslik: "Ekipmanın soğuktan etkilenmesi",
                paragraflar: [
                    "Düşük sıcaklıkta hidrolik yağın viskozitesi artar; bu, makinenin ilk hareketlerinde yavaşlık veya sertlik olarak hissedilir. Üreticiler genellikle belirli bir sıcaklığın altında ısınma süresi (rölantide bekleme) önerir; bu süreyi atlamak hidrolik bileşenleri zorlar.",
                    "Akülü platformlarda düşük sıcaklık akü performansını düşürür; kış aylarında normalden daha kısa çalışma süresi ve daha uzun şarj süresi beklenmelidir. Vardiya planı bu kayba göre yapılmalıdır.",
                    "Lastiklerin ve hidrolik hortumların soğukta sertleşmesi, günlük kontrolde çatlak taraması yapılırken normalden daha dikkatli bakılmasını gerektirir. Donmuş yüzeye yapışan lastikler harekete geçerken hasar görebilir.",
                ],
            },
            {
                baslik: "Çalışanın korunması ve görünürlük",
                paragraflar: [
                    "Sepette rüzgâra açık şekilde çalışan biri, yerdeki bir kişiden çok daha hızlı üşür; rüzgâr soğuğu (wind chill) etkisi yükseklikte belirginleşir. Soğuk, el becerisini ve dikkati azaltarak dolaylı bir kaza etkeni hâline gelir.",
                    "Uygun termal katmanlı ama hareketi kısıtlamayan giysi, yalıtımlı eldiven ve kaymaz tabanlı ayakkabı, kış operasyonunun standart donanımıdır. Çalışma süreleri kısaltılıp ısınma molaları planlanmalıdır.",
                    "Kış günleri kısadır: erken kararan hava, görüş mesafesini düşürür. Sahanın ve çalışma noktasının yeterli aydınlatılması, buzlu ve karanlık koşullarda önem kazanır.",
                ],
            },
            {
                baslik: "Kış öncesi hazırlık ve planlama",
                paragraflar: [
                    "Kış operasyonları büyük ölçüde önceden alınan kararlarla güvenli hâle gelir. Sezon başlamadan önce filo için ek bir teknik gözden geçirme (hidrolik yağ sınıfı, akü sağlığı, lastik ve hortum durumu) planlamak, sahada karşılaşılacak sürprizleri azaltır. Soğuk iklim için uygun viskozitede hidrolik yağ kullanımı, üreticinin önerdiği sıcaklık aralığına göre değerlendirilir.",
                    "İş programının kendisi de mevsime uyarlanmalıdır. Buzlanmanın en yoğun olduğu sabah erken saatler yerine, zeminin çözüldüğü öğle saatlerine kritik işleri kaydırmak; kısa gün ışığını en verimli dilimde kullanmak; ve hava tahminini günlük planın bir girdisi hâline getirmek, kış planlamasının temel adımlarıdır.",
                    "Ekip de hazırlanmalıdır: soğuğun performans ve dikkat üzerindeki etkisi, kısa bir başlangıç konuşmasında (toolbox talk) hatırlatılmalı; ısınma molalarının yeri ve sıklığı önceden belirlenmelidir. Yorgun ve üşümüş bir ekiple hızlı çalışmaya çalışmak, kış kazalarının en sık arka planıdır.",
                ],
            },
            {
                baslik: "Sık yapılan kış hataları",
                paragraflar: [
                    "En yaygın hata, yaz alışkanlıklarını kışa taşımaktır: makineyi ısıtmadan tam güçle çalıştırmak, sabah buzlu zemini 'nasılsa çözülür' diye görmezden gelmek ve rüzgâr limitini standart bir değer sanmak. Oysa soğukta hidrolik sistem farklı davranır, zemin farklı taşır ve rüzgâr etkisi yükseklikte artar.",
                    "İkinci hata, görünürlüğü küçümsemektir. Erken kararan hava ve sisli koşullarda hem operatörün hem de yerdeki gözcünün görüşü azalır; yetersiz aydınlatma, alan izolasyonunu ve işaretleşmeyi zayıflatır. Kışın aydınlatma ve haberleşme, yaz koşullarına göre daha erken devreye alınmalıdır.",
                    "Üçüncü hata, kış koşulunu bir 'durdurma kriteri' olarak baştan tanımlamamaktır. Hangi rüzgâr, sıcaklık veya görüş değerinde işin duracağı önceden yazılmazsa, karar sahada baskı altında ve genellikle güvenlik aleyhine verilir. İyi bir kış planı, durma kriterini işten önce netleştirir.",
                ],
            },
            {
                baslik: "Zemin, stabilizasyon ve gizli buz",
                paragraflar: [
                    "Kışın zemin kararı, yaz aylarından daha titiz olmalıdır. Kar örtüsünün altındaki buz veya yumuşamış dolgu gözle görülmez; bu 'gizli' koşullar, makinenin stabilizatör ayaklarının bir tarafının kaymasına ya da batmasına yol açar. Ayakların altına konan çelik plaka yükü dağıtmaya yardımcı olur ama plaka ile zemin arasındaki buz bir kayma yüzeyi oluşturabilir; bu yüzden plaka altının da buzdan arındırılması gerekir.",
                    "Denge göstergesi kışın çok daha sık kontrol edilmelidir: gün içinde eriyen kar zemini oynatabilir, sabah dengeli kurulan makine öğleden sonra eğim toleransının dışına çıkabilir. Herhangi bir denge uyarısında platform indirilmeli ve kurulum yeniden değerlendirilmelidir.",
                    "Rampalar, kapı önleri ve gölge alan geçişleri kışın en kaygan noktalardır; makinenin sahaya giriş güzergâhı da bu gözle planlanmalıdır. Donmuş bir rampada makineyi hareket ettirmek, çalışma noktasındaki riskten önce gelen bir nakliye riskidir.",
                ],
            },
        ],
        sss: [
            { soru: "Kar yağışında çalışmaya devam edilebilir mi?", cevap: "Görüş mesafesi, zemin kayganlığı ve üreticinin hava koşulu limitlerine bağlıdır; genel kural, aktif kar yağışında dış mekân platform operasyonlarının durdurulmasıdır." },
            { soru: "Kışın periyodik kontrol sıklığı değişir mi?", cevap: "Yasal periyot değişmez, ancak bazı işletmeler kış öncesi ek bir teknik kontrol (hidrolik seviye, akü sağlığı, lastik ve hortum durumu) uygulamayı tercih eder." },
            { soru: "Buzlu zeminde çelik plaka yeterli mi?", cevap: "Plaka, zeminin taşıma gücünü dağıtmaya yardımcı olur ama buzun altındaki zemin gevşekse veya plaka kayıyorsa yeterli olmaz. Ayakların tam ve dengeli temas kurduğu, denge göstergesiyle teyit edilmeden platform yükseltilmemelidir." },
            { soru: "Soğukta makineyi hemen çalıştırabilir miyim?", cevap: "Düşük sıcaklıkta hidrolik yağ koyulaşır; üreticiler genellikle belirli bir sıcaklığın altında rölantide ısınma süresi önerir. Bu süreyi atlayıp tam yükle başlamak hidrolik bileşenleri zorlar. Makinenin kullanım kılavuzundaki soğuk çalıştırma talimatı esas alınmalıdır." },
            { soru: "Kış koşulu için ayrı bir risk değerlendirmesi gerekir mi?", cevap: "Mevsim koşulu risk değerlendirmesinin bir girdisidir; buz, kar, düşük sıcaklık ve kısa gün ışığı önlemleri değerlendirmeye eklenmeli, durdurma kriterleri (rüzgâr, sıcaklık, görüş) işten önce yazılmalıdır." },
            { soru: "Sisli ve karanlık havada çalışma sürdürülür mü?", cevap: "Görüş, güvenli operasyonun ön koşuludur. Yoğun sis veya yetersiz aydınlatma; operatörün, gözcünün ve çevredeki trafiğin birbirini görmesini engelliyorsa iş durdurulmalıdır. Kış günlerinde erken kararan hava nedeniyle aydınlatma ve alan izolasyonu yaz koşullarına göre daha erken devreye alınmalıdır." },
            { soru: "Kışın akü çalışma süresi neden kısalır?", cevap: "Düşük sıcaklık akünün kimyasal performansını düşürür; bu yüzden kış aylarında akülü platformlarda normalden daha kısa çalışma süresi ve daha uzun şarj süresi beklenir. Vardiya planı bu kayba göre yapılmalı, gerekirse fırsat şarjı veya yedek makine öngörülmelidir." },
        ],
    },
    {
        slug: "gecici-koruma-sistemleri-guvenlik-agi-korkuluk",
        etiket: "İSG ve Mevzuat",
        baslik: "Geçici Koruma Sistemleri: Güvenlik Ağı ve Korkuluk Ne Zaman Kullanılır?",
        aciklama:
            "Yükseltici platform tek çözüm değildir — geçici korkuluk sistemleri ve güvenlik ağları hangi işlerde platformun yerini alır veya tamamlar?",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Yüksekte çalışma önlemleri yalnız yükseltici platformdan ibaret değildir. Doğru çözüm çoğu zaman tek bir ekipman değil, işin süresine ve geometrisine göre seçilmiş bir önlem bileşimidir. Bu rehber, geçici koruma sistemlerini ve platformla nasıl birlikte kullanıldıklarını anlatır.",
        bolumler: [
            {
                baslik: "Toplu koruma neden önce gelir?",
                paragraflar: [
                    "Mevzuatın önlem hiyerarşisinde toplu koruma (korkuluk, ağ, platform) kişisel korumadan (kemer) önce gelir. Bunun mantığı basittir: toplu koruma, tek tek çalışanların davranışına bağlı olmadan herkesi aynı anda korur; kemer ise doğru takılıp doğru noktaya bağlanmasına bağlıdır.",
                    "Bu yüzden 'kemer taktık, yeterli' yaklaşımı hem hukuken hem pratikte eksiktir. Önce kenarın güvenli kılınması, sonra gerekiyorsa kişisel donanım eklenmesi doğru sıradır.",
                ],
            },
            {
                baslik: "Geçici korkuluk sistemleri",
                paragraflar: [
                    "Döşeme kenarı, çatı saçağı ve iskele kenarlarında kurulan geçici korkuluklar, uzun süreli sabit çalışma alanlarında yükseltici platforma göre daha ekonomik bir toplu koruma çözümüdür.",
                    "Korkuluk yüksekliği ve orta bar/topuk levhası mevzuatta net tanımlıdır; sahada en sık eksik bırakılan unsur topuk levhasıdır — bu, düşen küçük malzemenin alt kattaki çalışanı yaralamasını önler.",
                    "Korkuluk sisteminin bağlantı noktaları ve dayanımı da önemlidir: yeterince sağlam sabitlenmemiş bir korkuluk, güven duygusu verirken gerçek koruma sağlamayabilir. Kurulum sonrası dayanım kontrolü ihmal edilmemelidir.",
                ],
            },
            {
                baslik: "Güvenlik ağları",
                paragraflar: [
                    "Çelik yapı montajı ve büyük açıklıklı çatı işlerinde güvenlik ağı, çalışanın düşmesi durumunda onu yakalayan bir toplu korumadır. Ağın doğru gerginlikte kurulması, altında yeterli boşluk (düşme mesafesi) bırakılması ve düzenli kontrolü, etkinliği için şarttır.",
                    "Güvenlik ağı, yükseltici platformun ulaşamadığı büyük açıklıklı alanlarda (örneğin çelik konstrüksiyon montajı sırasında) platformla birlikte tamamlayıcı olarak kullanılır.",
                    "Ağlar bir kez kurulup unutulacak sistemler değildir: kaynak kıvılcımı, UV, kimyasal ve mekanik hasar zamanla dayanımı düşürür. Üretici talimatına göre düzenli görsel kontrol ve hasarlı ağların derhâl değişimi gerekir.",
                ],
            },
            {
                baslik: "Hangi işte hangi bileşim?",
                paragraflar: [
                    "Kısa süreli, hareketli ve noktasal işler (bir aydınlatma armatürünün değişimi, cephede birkaç noktada müdahale) yükseltici platformun alanıdır: hızlı kurulur, çalışanı korkuluklu sepette taşır.",
                    "Uzun süreli, sabit kenarlı işlerde (bir kat boyunca devam eden döşeme kenarı çalışması) geçici korkuluk daha ekonomik ve pratiktir. Büyük açıklıklı montaj işlerinde ise güvenlik ağı, platformla birlikte devreye girer.",
                    "Çoğu gerçek şantiyede bu sistemler birbirini dışlamaz: aynı projede korkuluk, ağ ve platform farklı iş kalemlerinde bir arada kullanılır. Doğru soru 'hangisi en iyi?' değil, 'bu iş kalemi için doğru bileşim ne?' sorusudur." ,
                ],
            },
            {
                baslik: "Kişisel koruyucu donanım: son katman",
                paragraflar: [
                    "Toplu koruma her zaman tam sağlanamaz; boşlukların kaldığı durumlarda kişisel düşme durdurma sistemi (tam vücut kemeri ve bağlantı sistemi) devreye girer. Ancak bu, hiyerarşinin en son basamağıdır: kemer, korkuluk veya ağ kurulamadığı ya da yetersiz kaldığı yerde tamamlayıcı olarak kullanılır, onların yerine geçmez.",
                    "Kişisel sistemin etkinliği doğru kullanıma sıkı biçimde bağlıdır: kemerin doğru bedende ve doğru takılması, bağlantının uygun ve yeterince yüksek bir ankraj noktasına yapılması, düşme mesafesinin ankrajın altındaki boşlukla uyumlu olması gerekir. Yanlış ankraj veya fazla serbest düşme payı, sistemi işlevsiz bırakır.",
                    "Kişisel sistem kullanılan her yerde bir kurtarma planı da zorunlu hâle gelir: kemerle düşmesi duran bir kişinin asılı kalması, sarkma travması riskini doğurur. Bu yüzden 'kemer taktık' demek, planın sonu değil başıdır.",
                ],
            },
            {
                baslik: "Kontrol, bakım ve sık yapılan hatalar",
                paragraflar: [
                    "Geçici koruma sistemleri kurulup unutulacak ekipmanlar değildir. Korkulukların bağlantı ve dayanımı, ağların gerginliği ve hasar durumu, kişisel donanımın yıpranması düzenli olarak kontrol edilmelidir. Kaynak kıvılcımı, UV, kimyasal ve mekanik yük zamanla dayanımı düşürür; hasarlı hiçbir bileşen kullanımda tutulmamalıdır.",
                    "Sahada en sık görülen hata, koruma sisteminin bir bölümünü 'geçici olarak' sökmek ve yerine koymayı unutmaktır: malzeme geçirmek için açılan korkuluk, iş bitince kapatılmadığında en tehlikeli boşluğu yaratır. İkinci sık hata, topuk levhasının atlanması ve düşen küçük malzemenin alttaki çalışanları tehdit etmesidir.",
                    "Üçüncü hata, sistemleri kâğıt üzerinde doğru ama sahada eksik uygulamaktır: doğru ekipman seçilip yanlış kurulduğunda güven duygusu artar ama gerçek koruma azalır. Bu yüzden kurulum sonrası bağımsız bir kontrol, koruma sisteminin ayrılmaz parçasıdır.",
                ],
            },
            {
                baslik: "Boşlukları yönetmek: sistemlerin birleştiği yerler",
                paragraflar: [
                    "Yüksekte çalışmada kazalar çoğu zaman bir sistemin ortasında değil, iki sistemin birleştiği boşlukta olur: korkuluğun bittiği ve ağın başlamadığı nokta, platformdan sabit yapıya geçiş, ya da malzeme geçirmek için geçici açılan bir kenar. Koruma planı, bu geçiş noktalarını ayrı ayrı düşünmelidir.",
                    "Platformdan bir çatıya veya sabit platforma geçiş, en dikkatli planlanması gereken andır: geçiş sırasında çalışan hem sepetin hem sabit yapının korumasından bir an için çıkabilir. Bu geçişin nasıl, hangi bağlantıyla ve hangi sırayla yapılacağı iş öncesinde belirlenmelidir; doğaçlama geçiş kabul edilemez.",
                    "Malzeme veya ekipman geçirmek için açılan korkuluk bölümleri, iş biter bitmez kapatılmalıdır. 'Birazdan yine açacağız' düşüncesiyle açık bırakılan bir kenar, sahadaki en tehlikeli ve en sık rastlanan boşluktur. Açma-kapama, tek bir kişinin sorumluluğuna verilerek takip edilmelidir.",
                ],
            },
        ],
        sss: [
            { soru: "Korkuluk mu platform mu daha güvenli?", cevap: "İkisi de doğru uygulandığında toplu korumadır; seçim işin süresine ve geometrisine bağlıdır. Kısa süreli, hareketli işlerde platform; uzun süreli sabit kenarlarda korkuluk daha pratiktir." },
            { soru: "Güvenlik ağı periyodik kontrole tabi mi?", cevap: "Evet, ağların üretici talimatına göre düzenli görsel ve gerekirse dayanım kontrolü yapılmalı, hasarlı ağlar derhâl değiştirilmelidir." },
            { soru: "Geçici korkuluk için hesap gerekir mi?", cevap: "Korkuluğun boyutları ve dayanım beklentisi standartlarda tanımlıdır; bağlantı ve sabitleme, bu dayanımı sahada karşılayacak şekilde tasarlanıp kontrol edilmelidir. Belirsizlikte teknik sorumluya danışılmalıdır." },
            { soru: "Ağın altında ne kadar boşluk kalmalı?", cevap: "Güvenlik ağı, düşen kişiyi yakalarken esner; bu nedenle ağın altında yeterli serbest yükseklik (düşme mesafesi) bırakılması gerekir. Gereken boşluk ağ tipine ve üretici talimatına göre değişir ve kurulumdan önce hesaba katılmalıdır." },
            { soru: "Kişisel kemer, korkuluğun yerini tutar mı?", cevap: "Hayır. Önlem hiyerarşisinde toplu koruma (korkuluk, ağ, platform) kişisel korumadan önce gelir. Kemer, ancak toplu koruma kurulamadığı veya yetersiz kaldığı yerde tamamlayıcı olarak kullanılır ve beraberinde bir kurtarma planı gerektirir." },
            { soru: "Aynı projede birden fazla koruma sistemi bir arada kullanılır mı?", cevap: "Evet, bu çok yaygındır. Aynı projede korkuluk, güvenlik ağı ve yükseltici platform farklı iş kalemlerinde bir arada kullanılır. Önemli olan sistemlerin birleştiği boşlukların (geçiş noktaları, geçici açılan kenarlar) ayrıca planlanması ve iş biter bitmez kapatılmasıdır." },
        ],
    },
    {
        slug: "sarkma-travmasi-suspension-trauma-acil-mudahale",
        etiket: "Saha Uygulaması",
        baslik: "Sarkma Travması (Suspension Trauma): Düşme Sonrası Gözden Kaçan Risk",
        aciklama:
            "Emniyet kemeriyle düşmeyi durdurmak yalnız ilk adımdır — sarkma travması, kurtarma gecikirse hayati risk oluşturabilir. Belirtileri ve acil müdahale ilkeleri.",
        yayin: "2026-07-20",
        guncelleme: "2026-07-23",
        giris:
            "Bir çalışan emniyet kemeriyle düşmesini durdursa bile tehlike geçmiş sayılmaz. Hareketsiz asılı kalma durumu, dakikalar içinde ciddi bir tıbbi risk olan sarkma travmasına yol açabilir. Bu rehber, riskin mekanizmasını, kurtarma planının önemini ve ilk müdahale ilkelerini anlatır.",
        bolumler: [
            {
                baslik: "Sarkma travması nasıl oluşur?",
                paragraflar: [
                    "Kemerle asılı kalan bir kişide bacak kayışları kan dolaşımını kısıtlar; hareketsizlik nedeniyle kan bacaklarda birikir ve kalbe geri dönüşü azalır. Bu durum dakikalar içinde baş dönmesi, solukluk, bulantı ve bilinç kaybına, tedavisiz bırakılırsa hayati tehlikeye yol açabilir.",
                    "Risk, düşmenin kendisinden değil, düşme sonrası kurtarmanın gecikmesinden kaynaklanır — bu yüzden 'kemer düşmeyi durdurdu, tehlike geçti' yaklaşımı yanlıştır. Asılı kalan kişi bilincini yitirdiğinde durum daha da hızlı kötüleşir.",
                    "Bazı tam vücut kemerlerinde, asılı kalındığında ayakla basılıp bacaklara kan dönüşünü kolaylaştıran sarkma travması askı kayışları (trauma straps) bulunur. Bunların varlığı ve kullanımı, ekipman seçiminde ve eğitimde dikkate alınmalıdır.",
                ],
            },
            {
                baslik: "Kurtarma planının önemi",
                paragraflar: [
                    "Mevzuat ve iyi uygulama, her yüksekte çalışma işi için önceden planlanmış bir kurtarma prosedürü ister: asılı kalan kişiye kaç dakikada ulaşılabileceği, hangi ekipmanla (kurtarma makarası, yükseltici platform, itfaiye) indirileceği belirlenmelidir.",
                    "112'nin gelmesini beklemek yeterli bir plan değildir — özellikle şehir dışı veya trafik yoğun bölgelerde müdahale süresi kritik dakikaları aşabilir. Sahada bulunan yükseltici platform, çoğu durumda en hızlı kurtarma aracıdır.",
                    "Kurtarma planı yazılı olmalı ve tatbik edilmelidir: sadece kâğıt üzerinde bir prosedür, gerçek bir olayda saniyeler kaybettirir. Ekipteki en az bir kişi planı uygulayabilecek şekilde eğitilmiş olmalıdır.",
                ],
            },
            {
                baslik: "İlk müdahalede dikkat edilecekler",
                paragraflar: [
                    "İndirilen kişi hemen düz yatırılmamalıdır: uzun süre asılı kalan birinde ani yatay pozisyon, biriken kanın aniden kalbe dönmesine ve ciddi komplikasyona yol açabilir (reperfüzyon sendromu). Kademeli pozisyon değişikliği ve tıbbi ekibin yönlendirmesi esastır.",
                    "Bu nedenle yüksekte çalışan ekiplerde en az bir kişinin temel ilk yardım ve özellikle asılı kalma sonrası müdahale konusunda bilgilendirilmiş olması önerilir. İlk yardım bilgisi güncel tutulmalı ve saha koşuluna uyarlanmalıdır.",
                    "Bu içerik tıbbi tavsiye değildir; asılı kalma sonrası müdahale, güncel ilk yardım kılavuzları ve yetkili sağlık personelinin yönlendirmesiyle yürütülmelidir. Her olay 112'ye bildirilmeli ve profesyonel tıbbi değerlendirme sağlanmalıdır.",
                ],
            },
            {
                baslik: "Riski baştan azaltmak: önce düşmeyi engellemek",
                paragraflar: [
                    "Sarkma travmasıyla ilgili en güçlü önlem, hiç düşmemektir. Önlem hiyerarşisi burada da geçerlidir: çalışanı korkuluklu bir yükseltici platform sepetinde çalıştırmak, kişisel düşme durdurma sistemine (kemer) göre öncelikli bir toplu koruma çözümüdür. Sepet içinde çalışan bir kişi, tasarım gereği zaten korunmuş konumdadır ve asılı kalma senaryosu doğmaz.",
                    "Kemerin kaçınılmaz olduğu işlerde ise 'düşme mesafesini' kısaltmak esastır: bağlantı sistemi, mümkün olan en yüksek ve doğru ankraj noktasına bağlanmalı; serbest düşme payı en aza indirilmelidir. Kısa düşme, hem darbe kuvvetini hem de asılı kalma süresini azaltır.",
                    "Ekipman seçiminde, asılı kalma riskinin bulunduğu işler için trauma askı kayışına sahip tam vücut kemerleri tercih edilebilir. Bu kayışlar, asılı kalan kişinin bacaklarına basıp kan dönüşünü kolaylaştırmasına ve kurtarmaya kadar geçen kritik dakikalarda zaman kazanmasına yardımcı olur.",
                ],
            },
            {
                baslik: "Ekip eğitimi ve tatbikat",
                paragraflar: [
                    "Kurtarma planı ancak uygulanabildiği kadar değerlidir. Sahada en az bir kişinin planı fiilen uygulayabilecek şekilde eğitilmiş olması, kâğıt üzerindeki en ayrıntılı prosedürden daha önemlidir. Gerçek bir olay anı, ilk kez o gün denenen bir yöntem için uygun zaman değildir.",
                    "Bu nedenle kurtarma senaryosu periyodik olarak tatbik edilmelidir: kim haber verir, kim yükseltici platformla veya kurtarma makarasıyla müdahale eder, kişi indirildikten sonra kademeli pozisyon ve tıbbi yönlendirme nasıl uygulanır? Tatbikat, planın eksiklerini gerçek olaydan önce ortaya çıkarır.",
                    "Kurtarma ekipmanının sürekli erişilebilir ve çalışır durumda tutulması da planın parçasıdır. Kilitli bir dolapta duran, kimsenin kullanmayı bilmediği bir kurtarma seti, hiç olmamasından çok daha tehlikeli bir güven yanılsaması yaratır.",
                ],
            },
            {
                baslik: "Belirtileri erken tanımak",
                paragraflar: [
                    "Asılı kalan bir kişide durumun kötüleştiğini erken görmek, kurtarma kadar önemlidir. Sık görülen erken belirtiler; solukluk, terleme, baş dönmesi, bulantı, görme bozukluğu ve giderek artan huzursuzluktur. Kişi konuşmaya devam etse bile bu belirtiler ciddiye alınmalı, kurtarma hızlandırılmalıdır.",
                    "Asılı kalan kişinin hareketsiz kalması riski artırır; mümkünse bacaklarını hareket ettirmesi ya da trauma askı kayışına basması, kan dolaşımını bir miktar destekleyebilir. Ancak bu, kurtarmayı geciktirmenin gerekçesi değildir — geçici bir önlemdir, çözüm bir an önce güvenli indirmedir.",
                    "Bilinç kaybı en kritik eşiktir: kişi yanıt vermemeye başladığında durum hızla kötüleşir. Bu nedenle yerdeki gözcünün görevi yalnız 'düşerse haber vermek' değil, asılı kalan kişinin durumunu sürekli izlemek ve belirtiler başladığında kurtarmayı tetiklemektir.",
                ],
            },
        ],
        sss: [
            { soru: "Sarkma travması ne kadar sürede kritik hâle gelir?", cevap: "Kaynaklarda belirtilerin dakikalar içinde başlayabileceği belirtilir; süre kişiye ve koşullara göre değişir, bu yüzden kurtarma süresi ne kadar kısaltılırsa risk o kadar azalır." },
            { soru: "Her şantiyede kurtarma ekipmanı bulunmalı mı?", cevap: "Yüksekte çalışma riski taşıyan her sahada, düşme durumunda hızlı müdahaleyi sağlayacak bir yöntem (platform, kurtarma makarası, eğitimli ekip) önceden planlanmış olmalıdır." },
            { soru: "Trauma askı kayışları kemer seçiminde zorunlu mu?", cevap: "Zorunluluk mevzuat ve işveren prosedürüne göre değerlendirilir; ancak asılı kalma riskinin olduğu işlerde bu özelliğe sahip kemerler ve bunların kullanımını bilen personel, kurtarmaya kadar geçen sürede önemli bir güvenlik payı sağlar." },
            { soru: "İndirilen kişi neden hemen düz yatırılmamalı?", cevap: "Uzun süre asılı kalan birinde ani yatay pozisyon, bacaklarda biriken kanın aniden dolaşıma dönmesiyle ciddi komplikasyona (reperfüzyon) yol açabilir. Pozisyon kademeli değiştirilmeli ve tıbbi ekibin yönlendirmesi izlenmelidir. Bu içerik tıbbi tavsiye değildir; her olayda 112 aranmalıdır." },
            { soru: "Yalnız çalışan biri yüksekte güvenli midir?", cevap: "Hayır. Sepette asılı kalma veya bilinç kaybı durumunda müdahale edecek kimse yoksa kurtarma imkânsızlaşır. Yüksekte 'yalnız çalışma' kabul edilmemeli; en az bir gözcü ve tanımlı bir kurtarma yöntemi bulunmalıdır." },
            { soru: "Yükseltici platform sepeti kurtarma aracı olarak kullanılabilir mi?", cevap: "Çoğu durumda sahadaki yükseltici platform, asılı kalan bir kişiye ulaşmanın en hızlı yoludur; bu nedenle kurtarma planında sıklıkla yer alır. Ancak kurtarmanın nasıl yapılacağı önceden belirlenmeli ve tatbik edilmelidir; gerçek olay anı, yöntemi ilk kez denemek için uygun zaman değildir." },
        ],
    },
];

export function rehberBul(slug: string): Rehber | undefined {
    return rehberler.find((r) => r.slug === slug);
}
