export interface RehberBolum {
    baslik: string;
    paragraflar: string[];
}

export interface Rehber {
    slug: string;
    etiket: string; // kategori üst yazısı
    baslik: string;
    aciklama: string; // meta description
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
        giris:
            "Yükseltici platform kiralarken ilk soru yükseklik değil, işin geometrisidir: çalışma noktasının tam altına makine koyabiliyor musunuz, yoksa engelin ötesine mi erişeceksiniz? Bu rehber üç ana platform tipini aynı ölçütlerle karşılaştırır.",
        bolumler: [
            {
                baslik: "Makaslı platform: dikey erişimin standardı",
                paragraflar: [
                    "Makaslı platform sepeti yalnız dikey hareket ettirir; çalışma noktasının tam altına konumlanabildiğiniz her işte ilk tercihtir. En büyük artısı sepet kapasitesidir: geniş tablada iki-üç çalışan, malzeme ve el aletleriyle birlikte yükselir.",
                    "Tavan tesisatı, aydınlatma, sprinkler, havalandırma kanalı, depo raf işleri ve cephe kaplamanın düz bölümleri makaslının tipik işleridir. Elektrikli modeller iç mekânda, dizel 4x4 modeller şantiye sahasında çalışır.",
                    "Sınırı da nettir: yatay erişim yok denecek kadar azdır. Sepetin ulaşacağı noktanın altında engel (makine hattı, çukur, ağaç, sundurma) varsa makaslı yetersiz kalır.",
                ],
            },
            {
                baslik: "Eklemli platform: engelin üzerinden aşan bom",
                paragraflar: [
                    "Eklemli (akrobat) platformun bomu birden fazla noktadan kırılır; bu yapı makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir.",
                    "Çatı arkaları, cephe girintileri, boru köprüleri, konveyör hatları ve ağaçlı peyzaj önündeki cepheler eklemlinin işleridir. Aynı yükseklikteki teleskopike göre daha dar alanda kurulur; dönebilen kule yapısı dar şantiyede büyük avantajdır.",
                    "Karşılığında maksimum yatay erişimi teleskopikten kısadır ve aynı yükseklik sınıfında genellikle bir miktar daha yüksek kiralama bedeliyle döner.",
                ],
            },
            {
                baslik: "Teleskopik platform: maksimum erişim, düz doğrultu",
                paragraflar: [
                    "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi verir. Açık cephede, geniş sahada, makineyi işin uzağına kurmak zorunda olduğunuz durumlarda doğru seçimdir.",
                    "Köprü altı bakımları, stadyum ve hangar işleri, enerji nakil hattı yakınındaki kontrollü çalışmalar ve yüksek prefabrik montajı teleskopiğin alanıdır.",
                    "Engel aşma kabiliyeti sınırlıdır: bomun önünde yapı varsa eklemliye dönmek gerekir. Ayrıca uzun bomun salınımı nedeniyle hassas montaj işlerinde eklemli daha konforlu çalışır.",
                ],
            },
            {
                baslik: "Üç soruda hızlı karar",
                paragraflar: [
                    "1) Çalışma noktasının tam altına makine koyabiliyor musunuz? Evet → makaslı. 2) Hayır; arada engel mi var? Evet → eklemli. 3) Engel yok ama nokta uzakta mı? → teleskopik.",
                    "Yükseklik payını unutmayın: makine kataloglarındaki değer platform (sepet zemini) yüksekliğidir; çalışma yüksekliği bunun yaklaşık 2 metre üzeridir. İşin gerektirdiği en yüksek noktaya göre bir sınıf yukarıdan seçmek, sepetin zorlanmadan konumlanmasını sağlar.",
                ],
            },
        ],
        sss: [
            { soru: "Aynı işte iki tip makine gerekebilir mi?", cevap: "Evet; örneğin depo projesinde raf işleri makaslıyla, cephe ve saçak işleri eklemliyle yürür. Çok makineli işlerde tek organizasyonla kombine kiralama maliyeti düşürür." },
            { soru: "Rüzgâr limiti tipe göre değişir mi?", cevap: "Üretici limiti model bazında verilir; bomlu (eklemli/teleskopik) makinelerde tipik limit 12,5 m/sn'dir. İç mekân makaslılarının bir bölümü yalnız rüzgârsız ortam için onaylıdır." },
            { soru: "Zemin eğimi hangi tipte daha kritik?", cevap: "Hepsinde kritiktir; ancak bomlu makinelerde devrilme momenti daha büyük olduğundan kurulum eğim limitleri daha sıkıdır. Şasi terazisi alınmadan bom açılmamalıdır." },
        ],
    },
    {
        slug: "yuksekte-calisma-mevzuati",
        etiket: "İSG ve Mevzuat",
        baslik: "Yüksekte Çalışma Mevzuatı: 6331 Kapsamında Yükümlülükler Rehberi",
        aciklama:
            "6331 sayılı İSG Kanunu ve ilgili yönetmeliklere göre yüksekte çalışma: tanım, işveren yükümlülükleri, toplu koruma önceliği, ekipman ve eğitim şartları.",
        giris:
            "Yüksekte çalışma, Türk İSG mevzuatının en sıkı düzenlenen alanlarından biridir. Bu rehber; 6331 sayılı Kanun, İnşaat İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği ve İş Ekipmanları Yönetmeliği'nin yüksekte çalışmaya bakan yükümlülüklerini saha diliyle özetler.",
        bolumler: [
            {
                baslik: "Yüksekte çalışma sayılan işler",
                paragraflar: [
                    "Mevzuat belirli bir metre eşiği koymaz: seviye farkı bulunan ve düşme sonucu yaralanma ihtimali olan her çalışma yüksekte çalışmadır. Bir metrelik platformdaki iş de, 40 metredeki cephe işi de aynı hukuki çerçeveye girer.",
                    "Bu geniş tanımın pratik sonucu şudur: 'alçak, bir şey olmaz' değerlendirmesi hukuken geçersizdir; risk değerlendirmesi seviye farkı olan her işi kapsamalıdır.",
                ],
            },
            {
                baslik: "Önlem hiyerarşisi: önce toplu koruma",
                paragraflar: [
                    "Mevzuat önlem sırasını açıkça kurar: önce çalışma yerinin güvenli kılınması (korkuluk, platform, kapak), sonra toplu koruma (güvenlik ağı), en son kişisel koruyucu donanım (emniyet kemeri).",
                    "Yükseltici platform kullanımı bu hiyerarşide güçlü bir toplu koruma çözümüdür: çalışan, korkuluklu ve zemin dayanımı test edilmiş bir sepette çalışır. Merdiven ve iskele kurulumuna göre hem hızlı hem denetlenebilir bir yöntemdir.",
                    "Kemer, korkuluğun alternatifi değildir; bomlu platformlarda ise fırlama riskine karşı korkuluğa EK olarak zorunludur.",
                ],
            },
            {
                baslik: "Ekipman yükümlülükleri",
                paragraflar: [
                    "İş Ekipmanları Yönetmeliği'ne göre kaldırma ekipmanları yılda en az bir kez yetkili teknik elemanca periyodik kontrolden geçirilir; raporun sahada bulunması denetimlerde ilk istenen evraktır.",
                    "Günlük operatör kontrolü ayrı bir yükümlülüktür: fren, acil stop, acil indirme, korkuluk ve denge sensörü her vardiya öncesi test edilip kaydedilmelidir.",
                    "Kiralık makinede periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracının sorumluluğundadır. Sözleşmede bu paylaşımın yazılı olması iki tarafı da korur.",
                ],
            },
            {
                baslik: "Eğitim ve belgelendirme",
                paragraflar: [
                    "Yüksekte çalışacak herkese işe özgü İSG eğitimi verilmelidir; yükseltici platform operatörünün ayrıca operatör belgesi (MYK yeterliliği) bulunmalıdır.",
                    "Eğitim kayıtları ve belge fotokopileri şantiye İSG dosyasında tutulur. Belgesiz operatör çalıştırmak idari yaptırımın ötesinde, kaza hâlinde işverenin kusurunu ağırlaştıran ana etkendir.",
                ],
            },
        ],
        sss: [
            { soru: "1,5 metrelik seviye farkı için de önlem şart mı?", cevap: "Evet. Mevzuat metre eşiği tanımlamaz; düşme riski doğuran her seviye farkı risk değerlendirmesine girmek ve önlem almak zorundadır." },
            { soru: "Periyodik kontrolü kim yapabilir?", cevap: "Makine mühendisleri ile ilgili teknik eğitimli makine teknikerleri/yüksek teknikerleri; kontrol EKİPNET sistemine kayıtlı yetkili kişilerce raporlanır." },
            { soru: "Yükseltici platform iskele yerine kullanılabilir mi?", cevap: "İşin niteliğine göre çoğunlukla evet; kısa süreli ve noktasal işlerde platform, iskeleye göre hem hızlı hem güvenli bir toplu koruma çözümüdür. Uzun süreli sabit cephe işlerinde iskele ekonomik kalabilir." },
        ],
    },
    {
        slug: "is-oncesi-kontrol-listesi",
        etiket: "Saha Uygulaması",
        baslik: "Yüksekte Çalışma Öncesi Kontrol Listesi: 10 Maddede Güvenli Başlangıç",
        aciklama:
            "Yüksekte çalışmaya başlamadan önce kontrol edilecek 10 başlık: zemin, hava, enerji hatları, makine kontrolleri, KKD ve çalışma izni. Yazdırılabilir pratik liste.",
        giris:
            "Ciddi düşme kazalarının ortak özelliği, işin 'hemen başlayıverelim' diye kontrolsüz açılmasıdır. Bu 10 maddelik liste, ekip lideri veya İSG uzmanının iş başlamadan beş dakikada tamamlayabileceği bir kapı kontrolüdür.",
        bolumler: [
            {
                baslik: "1-3: Saha ve çevre",
                paragraflar: [
                    "1) Zemin: Makinenin kurulacağı zeminin taşıma kapasitesi ve eğimi uygun mu? Dolgu, rögar kapağı ve kanal üstlerinden kaçının; gerekirse çelik plaka serin.",
                    "2) Hava: Rüzgâr hızı üretici limitinin (tipik 12,5 m/sn) altında mı? Yağış ve görüş durumu çalışmaya uygun mu? Gün içi bozulma ihtimaline karşı durdurma kriterini baştan belirleyin.",
                    "3) Enerji hatları: Çalışma sahasının üstünde veya bom hareket zarfında enerji nakil hattı var mı? Güvenli mesafe sağlanamıyorsa hat sahibinden kesinti/izolasyon istenmeden iş açılmaz.",
                ],
            },
            {
                baslik: "4-7: Makine ve ekipman",
                paragraflar: [
                    "4) Günlük kontrol: Operatörün vardiya öncesi kontrol formu dolduruldu mu? Acil stop ve acil indirme test edildi mi?",
                    "5) Evrak: Periyodik kontrol raporu ve operatör belgesi sahada mı?",
                    "6) KKD: Bomlu platformda tam vücut kemeri ve kısa lanyard sepetteki ankraj noktasına bağlı mı? Baret çene bantlı mı (yüksekte standart)?",
                    "7) Yük: Sepetteki kişi + malzeme toplamı kapasite etiketinin altında mı? Sepetten sarkan, korkuluğa asılan yük var mı?",
                ],
            },
            {
                baslik: "8-10: Organizasyon",
                paragraflar: [
                    "8) Alan izolasyonu: Makinenin altı ve devrilme zarfı şeritle kapatıldı mı? Alan içinden yaya/araç geçişi engellendi mi?",
                    "9) Haberleşme ve gözcü: Yerde, acil indirmeyi bilen bir kişi görevli mi? Operatörle haberleşme yöntemi (telsiz/işaret) belirlendi mi?",
                    "10) Çalışma izni: Tesis prosedürü gerektiriyorsa yüksekte çalışma izni imzalandı mı? İzinsiz başlanan iş, en sık rastlanan denetim bulgusudur.",
                ],
            },
        ],
        sss: [
            { soru: "Bu listeyi kim doldurmalı?", cevap: "İdeali ekip lideri veya İSG uzmanının iş başlamadan doldurmasıdır; operatörün günlük makine kontrolü bu listenin 4. maddesini besler, yerine geçmez." },
            { soru: "Enerji hattına güvenli mesafe nedir?", cevap: "Hat gerilimine göre değişir ve tesis/dağıtım şirketi prosedürüne tabidir; belirsizlikte hat yetkilisinden yazılı mesafe veya kesinti talep edilmelidir." },
            { soru: "Gözcü gerçekten zorunlu mu?", cevap: "Mevzuat acil durumlara karşı organizasyon ister; sepetteki çalışanın kurtarılması yerden acil indirme bilen biri olmadan mümkün olmayabilir. Tek kişilik 'yalnız çalışma' yüksekte kabul edilmemelidir." },
        ],
    },
];

export function rehberBul(slug: string): Rehber | undefined {
    return rehberler.find((r) => r.slug === slug);
}
