// Ticari domainler için blog altyapısı.
// Amaç: her ticari site için şehir-niyet + ürün + anahtar kelime odaklı, DERIN ve ÖZGÜN yazılar.
// Kural (brief): şehir ayrıntıları doğrulanabilir olmalı; ad değiştirilmiş kopya üretilmez.
// Görsel: /media kategori görselleri + (opsiyonel) yazıya özel inline SVG diyagram (svg alanı).

export interface BlogBolum {
    baslik: string;
    paragraflar: string[];
}

export interface BlogYazisi {
    slug: string;
    kategori: string; // "Ürün Rehberi" | "Şehir & Sektör" | "Maliyet" | "Güvenlik" | "Karşılaştırma"
    baslik: string;
    ozet: string;
    gorsel: string; // /media/blog/... gerçek saha fotoğrafı (SEO adlı)
    gorselAlt: string; // görsel alt metni (SEO + erişilebilirlik)
    svg?: string; // yazıya özel şematik diyagram (inline)
    tarih: string; // ISO
    guncelleme?: string;
    okuma: number; // dakika
    giris: string;
    bolumler: BlogBolum[];
    sss?: { soru: string; cevap: string }[];
    ilgiliUrun?: { baslik: string; slug: string }; // ilgili kategori sayfasına iç bağlantı
}

// Gerçek Artı Platform saha fotoğrafları (Drive "İş resimleri" → public/media/blog/, SEO adlı)
export const blogGorsel = {
    holTavan: "/media/blog/makasli-platform-kiralama-sanayi-holu-tavan-calismasi.jpg",
    depo: "/media/blog/makasli-platform-kiralama-depo-ici-yuksekte-calisma.jpg",
    makinePark: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg",
    celikMontaj: "/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg",
    forkliftDepo: "/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg",
    tesisat: "/media/blog/makasli-platform-kiralama-fabrika-tesisat-montaj-isi.jpg",
} as const;

// Yazıya özel şematik diyagram (erişim geometrisi) — inline SVG olarak gömülür.
const erisimDiyagrami = `<svg viewBox="0 0 300 190" role="img" aria-label="Çalışma yüksekliği ve yatay erişim diyagramı"><line x1="20" y1="165" x2="285" y2="165" stroke="#94a3b8" stroke-width="1.5"/><rect x="34" y="140" width="46" height="18" rx="4" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="46" cy="161" r="6" fill="none" stroke="#94a3b8" stroke-width="1.6"/><circle cx="68" cy="161" r="6" fill="none" stroke="#94a3b8" stroke-width="1.6"/><line x1="57" y1="140" x2="120" y2="70" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><circle cx="120" cy="70" r="5" fill="#fff" stroke="#2563eb" stroke-width="2.5"/><line x1="120" y1="70" x2="210" y2="55" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/><rect x="208" y="42" width="20" height="14" rx="2" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="250" y1="55" x2="250" y2="165" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/><text x="256" y="112" font-size="10" fill="#b45309">çalışma yük.</text><line x1="57" y1="180" x2="218" y2="180" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4"/><text x="120" y="176" font-size="10" fill="#1d4ed8" text-anchor="middle">yatay erişim</text></svg>`;

export const blogYazilari: Record<string, BlogYazisi[]> = {
    "eklemliplatform.com.tr": [
        {
            slug: "eklemli-platform-ne-zaman-secilir",
            kategori: "Ürün Rehberi",
            baslik: "Eklemli Platform Ne Zaman Seçilir? Engel Aşan Erişimin Rehberi",
            ozet: "Makaslı ve teleskopik yetersiz kaldığında devreye giren eklemli platform; parapet, çatı, boru hattı ve üretim hattının arkasına nasıl erişir? Seçim ölçütleri ve tipik işler.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Sanayi holünde tavana erişim için yükseltici platformla yüksekte çalışma",
            svg: erisimDiyagrami,
            tarih: "2026-07-22",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Yüksekte çalışma ekipmanı seçiminde ilk soru yükseklik değil, işin geometrisidir: çalışma noktasının tam altına makine koyabiliyor musunuz, yoksa arada bir engel mi var? Eklemli (akrobat) platform, tam da bu ikinci durumun makinesidir. Bu rehber, eklemli platformun ne zaman doğru tercih olduğunu ve sınırlarını anlatır.",
            bolumler: [
                {
                    baslik: "Eklemli platformun temel işi: engelin üzerinden aşmak",
                    paragraflar: [
                        "Eklemli platformun bomu birden fazla noktadan kırılır; bu yapı makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir. Düz teleskopik bomların ulaşamadığı noktalara — çatı parapetinin arkasına, bir boru köprüsünün ötesine, ağaçların üzerinden cepheye — bu makinelerle erişilir.",
                        "Bu 'up-and-over' geometrisi, tek makineyle birden çok erişim açısı gerektiren bakım işlerinde zaman kazandırır. Dönebilen kule yapısı sayesinde dar şantiyede de kurulup çalışabilir; aynı yükseklikteki teleskopiğe göre daha küçük bir alanda konuşlanır.",
                    ],
                },
                {
                    baslik: "Hangi işlerde doğru tercih?",
                    paragraflar: [
                        "Endüstriyel bakım, cephe, çelik montaj, tesisat ve yapı işleri eklemli platformun tipik alanıdır. Çatı arkaları, cephe girintileri, boru köprüleri, konveyör hatları ve ağaçlı peyzaj önündeki cepheler; makaslının tam altına giremediği, teleskopiğin ise engel aşamadığı noktalardır.",
                        "İç mekânda elektrikli eklemli modeller (sıfır emisyon, sessiz, iz bırakmayan lastik) AVM, fabrika ve hastane gibi alanlarda; açık sahada dizel modeller (4x4 çekiş, yüksek erişim) şantiye ve çelik montajında değerlendirilir.",
                    ],
                },
                {
                    baslik: "Sınırları: nerede eklemli seçilmez?",
                    paragraflar: [
                        "Çalışma noktasının tam altına makine koyabiliyorsanız ve arada engel yoksa, geniş sepetli makaslı platform çoğu zaman daha ekonomik ve pratiktir. Engel yok ama nokta çok uzaktaysa, aynı yükseklik sınıfında daha uzun yatay erişim veren teleskopik platform öne çıkar.",
                        "Eklemli platformun maksimum yatay erişimi teleskopikten kısadır ve aynı yükseklik sınıfında genellikle bir miktar daha yüksek kiralama bedeliyle döner. Bu yüzden seçim, 'her işe eklemli' değil, işin geometrisine göre yapılır.",
                    ],
                },
                {
                    baslik: "Doğru sınıfı seçmek: iki ölçüyü birlikte okuyun",
                    paragraflar: [
                        "Katalogdaki değerler platform (sepet zemini) yüksekliğidir; çalışma yüksekliği bunun yaklaşık 2 metre üzeridir. Ayrıca yatay erişim (outreach) tek bir sayı değildir: maksimum erişim çoğu zaman orta yükseklikte elde edilir ve sepet yükü arttıkça düşebilir.",
                        "Bu yüzden sınıf, işin en zorlu noktasına (en yüksek + en uzak + en ağır) göre seçilir ve seçilen modelin çalışma diyagramından teyit edilir. Kesin model, kapasite ve teslimat güncel uygunluk kontrolünden sonra yazılı teklifte kesinleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Eklemli platform ile teleskopik platform farkı nedir?", cevap: "Eklemli bomun kırılan yapısı engel aşmaya, teleskopik bomun düz yapısı ise aynı yükseklikte daha uzun yatay erişime uygundur. Engel varsa eklemli, engel yok ama nokta uzaksa teleskopik değerlendirilir." },
                { soru: "İç mekânda eklemli platform kullanılır mı?", cevap: "Evet; elektrikli eklemli modeller sıfır emisyon ve iz bırakmayan lastikle AVM, fabrika ve hastane gibi kapalı alanlarda kullanılır. Açık saha işleri için dizel modeller önerilir." },
                { soru: "Eklemli platform kiralama fiyatı neye göre değişir?", cevap: "Erişim sınıfı, süre, nakliye, operatör ve saha koşullarına göre; kesin bedel güncel uygunluk kontrolünden sonra yazılı teklifte belirlenir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "cephe-celik-montaj-platform-secimi",
            kategori: "Şehir & Sektör",
            baslik: "Cephe ve Çelik Montaj İşlerinde Doğru Platform Sınıfı",
            ozet: "Cephe kaplama, çelik konstrüksiyon ve dış yapı işlerinde erişim geometrisi, zemin ve rüzgâr koşulları makine sınıfını nasıl belirler? Saha odaklı seçim rehberi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Çelik konstrüksiyon montaj sahasında makaslı platform ve forklift ile yüksekte çalışma",
            tarih: "2026-07-21",
            guncelleme: "2026-07-24",
            okuma: 7,
            giris: "Cephe ve çelik montaj işleri, yüksekte çalışmanın en çok makine sınıfı hatası yapılan alanlarından biridir. Yükseklik doğru seçilse bile yatay erişim, zemin ve rüzgâr koşulları göz ardı edildiğinde iş güvenli tamamlanamaz. Bu yazı, bu işlerde doğru sınıfı belirleyen ölçütleri saha diliyle anlatır.",
            bolumler: [
                {
                    baslik: "Cephe işinde asıl soru: dikey mi, engel aşan mı?",
                    paragraflar: [
                        "Düz ve önünde engel olmayan bir cephede, makinenin tam altına konumlanabiliyorsanız makaslı platform yeterli olabilir. Ancak cephe önünde peyzaj, saçak, boru hattı veya farklı kotlarda çıkıntı varsa eklemli platformun engel aşan bom yapısı gerekir.",
                        "Yüksek yapı cepheleri, silo ve endüstriyel baca gibi işlerde ise makineyi işin uzağına kurmak gerektiğinde teleskopik platformun uzun yatay erişimi öne çıkar. Aynı projede farklı iş kalemleri farklı sınıf gerektirebilir.",
                    ],
                },
                {
                    baslik: "Çelik montajda erişim zarfı ve sepet yükü",
                    paragraflar: [
                        "Çelik konstrüksiyon montajında sepette çoğu zaman personelle birlikte cıvata, el aleti ve bağlantı elemanı taşınır. Bu nedenle seçilen modelin, hedef konumdaki kalan sepet kapasitesi çalışma diyagramından kontrol edilmelidir; erişim uzadıkça izin verilen yük düşebilir.",
                        "Büyük açıklıklı montajlarda platform tek başına yeterli olmayabilir; güvenlik ağı gibi toplu koruma sistemleriyle birlikte planlanır. Makine seçimi, iş metodunun ve koruma planının bir parçası olarak ele alınmalıdır.",
                    ],
                },
                {
                    baslik: "Zemin ve rüzgâr: açık saha işinin belirleyicileri",
                    paragraflar: [
                        "Açık sahada zeminin taşıma kapasitesi, eğim ve yüzey bozukluğu makine sınıfını ve kurulumu doğrudan etkiler. Dizel eklemli veya teleskopik modellerin 4x4 çekişi ve jack sistemi eğimli, gevşek zeminde destek sağlar; ancak taşıma kapasitesi bilinmiyorsa tahmin yürütülmez, gerekirse çelik plaka serilir veya saha yetkilisinin onayı alınır.",
                        "Rüzgâr limiti her makine için aynı değildir ve uzayan erişimle birlikte önem kazanır. Üretici limiti ve makine üzerindeki bilgi plakası, çalışma öncesinde kontrol edilir; sınır aşılıyorsa iş durdurulur.",
                    ],
                },
            ],
            sss: [
                { soru: "Cephe işi için makaslı mı eklemli mi?", cevap: "Cephe düz ve önü açıksa makaslı yeterli olabilir; önünde engel (saçak, peyzaj, boru) varsa eklemli platformun engel aşan yapısı gerekir. Nihai seçim saha geometrisine göre yapılır." },
                { soru: "Çelik montajda hangi kapasiteye dikkat edilmeli?", cevap: "Sepette taşınacak personel + malzeme toplamının, hedef erişim konumundaki kalan kapasitenin altında olması gerekir. Bu değer seçilen modelin çalışma diyagramından teyit edilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-zemin-kurulum-hatalari",
            kategori: "Güvenlik",
            baslik: "Zemin ve Kurulum: Eklemli Platformda Sık Yapılan Hatalar",
            ozet: "Devrilme kazalarının önemli bölümü zemin ve kurulum aşamasında başlar. Eklemli platform kurulumunda sahada en sık atlanan kontroller ve doğru yaklaşım.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Fabrika holünde makaslı platformla tesisat montajı ve güvenli kurulum",
            tarih: "2026-07-20",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platformda uzayan bom, zemindeki en küçük dengesizliği bile sepette büyük bir sapmaya çevirir. Bu yüzden güvenliğin büyük bölümü, makine yükselmeden önce zemin ve kurulum aşamasında belirlenir. Bu yazı, sahada en sık atlanan kontrolleri ve doğru yaklaşımı özetler.",
            bolumler: [
                {
                    baslik: "Zemin taşıma kapasitesi: gözle karar verilmez",
                    paragraflar: [
                        "Makinenin toplam ağırlığı kadar, teker veya denge ayağında oluşan noktasal yük de zemini zorlar. Kaplama altındaki döşeme yapısı, mazgal ve rögarlar, bodrum üzeri döşemeler ve kenar boşlukları değerlendirilmelidir. Zeminin kapasitesi bilinmiyorsa varsayımla ilerlenmez; gerekiyorsa yapı veya zemin yetkilisinin yazılı görüşü istenir.",
                        "Hassas yüzeylerde (epoksi, bitmiş peyzaj) iz bırakmayan lastik ve koruyucu levha kullanımı; eğimli ve gevşek zeminde çelik plaka ve dengeleme değerlendirilir. Denge göstergesi ve zemin koşulu kontrol edilmeden platform yükseltilmez.",
                    ],
                },
                {
                    baslik: "Kurulum alanı ve kuyruk dönüşü",
                    paragraflar: [
                        "Eklemli platformun kurulum ve kuyruk dönüş alanı, çalışma alanından farklıdır. Kapı, koridor, kolon dönüşü ve manevra cebi, seçilen modelin nakliye ve çalışma ölçüleriyle karşılaştırılır. Makinenin nakliye konumundaki yüksekliği (bom katlı) çalışma konumundan farklı olabilir.",
                        "Çalışma alanı yaya ve araç trafiğinden ayrılır; makinenin altı ve devrilme zarfı şeritle kapatılır. Kör noktalar için yönlendirme, gerektiğinde gözcü ve uygun bariyer planlanır.",
                    ],
                },
                {
                    baslik: "Vardiya öncesi kontrol ve kurtarma planı",
                    paragraflar: [
                        "Operatörün vardiya öncesi kontrolü — fren, acil stop, acil indirme, korkuluk ve denge sensörü — her çalışma öncesinde yapılıp kaydedilmelidir. Bu kontrol, yılda en az bir kez yapılan periyodik kontrolün yerine geçmez; onu tamamlar.",
                        "Sepette biri asılı kalırsa kaç dakikada, hangi yöntemle indirileceği (kurtarma planı) iş başlamadan belirlenir. Sahadaki yükseltici platform çoğu durumda en hızlı kurtarma aracıdır; ancak yöntem önceden planlanıp tatbik edilmelidir.",
                    ],
                },
            ],
            sss: [
                { soru: "Eklemli platform hangi zeminde devrilir?", cevap: "Taşıma kapasitesi yetersiz, eğimli veya altında boşluk bulunan zeminlerde denge kaybı riski artar. Zemin kapasitesi doğrulanmadan ve denge göstergesi kontrol edilmeden platform yükseltilmemelidir." },
                { soru: "Kurtarma planı zorunlu mu?", cevap: "Yüksekte çalışma riski taşıyan her sahada, sepette asılı kalma durumunda hızlı müdahaleyi sağlayacak bir yöntem önceden planlanmış olmalıdır. 112'yi beklemek tek başına yeterli bir plan değildir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-yukseklik-siniflari-nasil-secilir",
            kategori: "Ürün Rehberi",
            baslik: "Eklemli Platform Yükseklik Sınıfları: 16, 20, 28 ve 43 Metre Nasıl Seçilir?",
            ozet: "Eklemli platformlar 16 metreden 43 metreye kadar farklı sınıflarda gelir. Çalışma yüksekliği, yatay erişim ve saha koşuluna göre doğru sınıfı seçme rehberi.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Sanayi holünde yüksek erişim için açılmış yükseltici platform",
            tarih: "2026-07-19",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Eklemli platform kiralarken en sık sorulan soru 'kaç metre gerekir?' olur. Oysa yükseklik tek başına yeterli bir ölçüt değildir; aynı yükseklik sınıfında farklı yatay erişim, sepet kapasitesi ve kurulum alanı bulunur. Bu rehber, sınıfları ayırt eden gerçek kriterleri anlatır.",
            bolumler: [
                {
                    baslik: "16-20 metre: iç mekân ve orta yükseklik",
                    paragraflar: [
                        "16-20 metre çalışma yüksekliğindeki eklemli platformlar, fabrika içi tesisat, AVM atrium bakımı, depo raf üstü ve orta yükseklikteki cephe işlerinin büyük bölümünü karşılar. Elektrikli modeller bu sınıfta yaygındır; sıfır emisyon ve iz bırakmayan lastikle kapalı alanda çalışır.",
                        "Bu sınıfta dar şasi ve kompakt kurulum öne çıkar; standart kapı ve koridorlardan geçiş çoğu modelde mümkündür. Ancak yatay erişim sınırlıdır, bu yüzden engelin çok ötesine uzanılması gereken işlerde bir üst sınıf değerlendirilir.",
                    ],
                },
                {
                    baslik: "28-43 metre: yüksek cephe ve endüstriyel erişim",
                    paragraflar: [
                        "28-43 metre sınıfı; yüksek yapı cepheleri, silo, endüstriyel baca, çelik konstrüksiyon ve enerji tesisi bakımı gibi işler içindir. Bu modeller genellikle dizel ve 4x4 çekişlidir; açık saha, eğim ve gevşek zeminde jack sistemiyle dengelenir.",
                        "Erişim arttıkça izin verilen sepet yükü ve rüzgâr limiti değişir; bu yüzden yüksek sınıflarda çalışma diyagramı model bazında dikkatle okunur. Kurulum ve kuyruk dönüş alanı da büyür, saha bu genişliğe göre planlanır.",
                    ],
                },
                {
                    baslik: "Sınıfı belirleyen: en zorlu nokta",
                    paragraflar: [
                        "Doğru sınıf, işin en zorlu noktasına göre seçilir: en yüksek + en uzak + en ağır kombinasyonu. Platform (sepet) yüksekliği ile çalışma yüksekliği karıştırılmamalı; çalışma yüksekliği platform yüksekliğinin yaklaşık 2 metre üzeridir.",
                        "Fazladan büyük sınıf daha güvenli değildir; ek ağırlık, genişlik ve nakliye zorluğu getirir. Kesin sınıf ve model, güncel uygunluk kontrolünden sonra yazılı teklifte netleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "16 metre eklemli platform hangi işlere yeter?", cevap: "Fabrika içi tesisat, AVM ve depo tavan işleri, orta yükseklikteki cephe müdahaleleri için genellikle yeterlidir. Engelin çok ötesine erişim gerekiyorsa yatay erişimi daha yüksek bir sınıf değerlendirilir." },
                { soru: "Yükseklik arttıkça sepet kapasitesi düşer mi?", cevap: "Erişim ve yükseklik arttıkça izin verilen sepet yükü değişebilir. Bu, seçilen modelin çalışma diyagramından kontrol edilir; katalogdaki azami değerler her konumda birlikte geçerli olmayabilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "elektrikli-eklemli-platform-ic-mekan-yuksekte-calisma",
            kategori: "Ürün Rehberi",
            baslik: "Elektrikli Eklemli Platform: İç Mekânda Yüksekte Çalışmanın Doğru Yolu",
            ozet: "AVM, fabrika, hastane ve depo gibi kapalı alanlarda sıfır emisyon ve iz bırakmayan lastikle yüksekte çalışma. Elektrikli eklemli platformun avantajları ve sınırları.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Depo içinde elektrikli yükseltici platformla yüksekte çalışma",
            tarih: "2026-07-18",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kapalı alanda yüksekte çalışırken güç kaynağı bir konfor değil, güvenlik meselesidir. İçten yanmalı motorların egzozu havalandırması sınırlı bir mekânda ciddi risk oluşturur. Elektrikli eklemli platform, tam da bu ortamlar için tasarlanmıştır.",
            bolumler: [
                {
                    baslik: "Neden kapalı alanda elektrikli?",
                    paragraflar: [
                        "Elektrikli eklemli platformlar sıfır egzoz emisyonlu ve düşük gürültülüdür; AVM, fabrika içi, hastane, otel ve depo gibi havalandırması sınırlı mekânlarda güvenle çalışır. İz bırakmayan lastik seçenekleriyle epoksi, mermer ve seramik zeminlerde yüzeye zarar vermez.",
                        "Dar şasi genişlikleri standart kapı ve koridorlardan geçişe izin verir; dönebilen kule yapısı raf araları ve kolon aralarında manevrayı kolaylaştırır.",
                    ],
                },
                {
                    baslik: "Şarj ve vardiya planı",
                    paragraflar: [
                        "Çalışma süresi akü tipi, model, yük, sıcaklık ve kullanım yoğunluğuna göre değişir. Kesintisiz veya çok vardiyalı çalışmada fırsat şarjı ya da yedek makine planı yapılmalı; uygun voltajda ve yakında bir priz erişimi baştan teyit edilmelidir.",
                        "Düşük sıcaklık akü performansını düşürür; soğuk depo veya kış koşullarında normalden daha kısa çalışma süresi beklenmelidir. Şarj altyapısı ve vardiya akışı seçilen modelin üretici verileriyle birlikte değerlendirilir.",
                    ],
                },
                {
                    baslik: "Sınırları: nerede dizel gerekir?",
                    paragraflar: [
                        "Elektrikli modeller iç mekân için tasarlanmıştır; açık havada yağışa karşı koruma sınıfı sınırlıdır ve zorlu, eğimli, gevşek zeminde çekişleri yetersiz kalabilir. Açık saha, şantiye ve çelik montaj işleri için dizel eklemli modeller değerlendirilir.",
                        "Kısa süreli, düz ve sert zeminli dış kullanım mümkün olsa da asıl çalışma alanı kapalı mekânlardır. Doğru güç kaynağı, makine tipiyle birlikte saha koşuluna göre seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Elektrikli eklemli platform gıda tesisinde kullanılır mı?", cevap: "Evet; sıfır emisyon ve düşük gürültüsü nedeniyle gıda tesisi, hastane ve benzeri hassas alanlarda vardiya saatinde çalışabilir. İşletmenin hijyen ve çalışma kuralları talep dosyasına eklenmelidir." },
                { soru: "Bir şarjla ne kadar çalışır?", cevap: "Süre modele, yüke, sıcaklığa ve kullanım yoğunluğuna göre değişir; tipik bir vardiyayı karşılayacak şekilde tasarlanır. Kesintisiz çalışmada fırsat şarjı veya yedek makine planlanır." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-mi-teleskopik-mi-yatay-erisimde-dogru-secim",
            kategori: "Karşılaştırma",
            baslik: "Eklemli mi Teleskopik mi? Yatay Erişimde Doğru Seçim",
            ozet: "İkisi de aynı yüksekliğe çıkar ama farklı işler için tasarlanmıştır. Engel aşma gereken yerde eklemli, açık doğrultuda uzun erişim gerekende teleskopik: net karşılaştırma.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Açık sahada çelik konstrüksiyon montajında yüksek erişim",
            tarih: "2026-07-17",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Eklemli ve teleskopik platform aynı yükseklik sınıfında olabilir ama seçim yüksekliğe göre yapılmaz. Belirleyici olan, çalışma noktasına nasıl ulaşıldığıdır: engelin üzerinden aşarak mı, yoksa açık doğrultuda uzanarak mı?",
            bolumler: [
                {
                    baslik: "Eklemli: engelin üzerinden aşan bom",
                    paragraflar: [
                        "Eklemli platformun bomu birden fazla noktadan kırılır; makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir. Çatı parapetinin arkası, boru köprüsünün ötesi, ağaçlı peyzaj önündeki cephe eklemlinin alanıdır.",
                        "Dönebilen kule yapısı dar şantiyede avantaj sağlar; aynı yükseklikteki teleskopiğe göre daha küçük alanda kurulur. Karşılığında maksimum yatay erişimi teleskopikten kısadır.",
                    ],
                },
                {
                    baslik: "Teleskopik: açık doğrultuda maksimum erişim",
                    paragraflar: [
                        "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi verir. Makineyi işin uzağına kurmak zorunda olduğunuz açık cephe, geniş saha, köprü altı ve hangar işlerinde doğru seçimdir.",
                        "Engel aşma kabiliyeti sınırlıdır: bomun önünde yapı varsa eklemliye dönmek gerekir. Uzun bomun salınımı nedeniyle hassas montajda eklemli daha konforlu çalışabilir.",
                    ],
                },
                {
                    baslik: "Üç soruda karar",
                    paragraflar: [
                        "Arada engel var mı? Varsa eklemli. Engel yok ama nokta uzakta mı? Teleskopik. Kurulum alanı dar mı? Eklemlinin kompakt kurulumu öne çıkar. Aynı projede farklı iş kalemleri farklı sınıf gerektirebilir.",
                        "Her iki tipte de erişim arttıkça sepet kapasitesi ve rüzgâr limiti değişir; nihai seçim seçilen modelin çalışma diyagramından teyit edilir ve yazılı teklifte kesinleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Aynı yükseklikte eklemli neden daha pahalı olabilir?", cevap: "Eklemli bomun çok eklemli yapısı ve engel aşma kabiliyeti, aynı yükseklik sınıfında genellikle bir miktar daha yüksek kiralama bedeliyle döner. Seçim maliyete değil, işin geometrisine göre yapılır." },
                { soru: "Teleskopik platform engel aşabilir mi?", cevap: "Sınırlı olarak; düz bomu nedeniyle önündeki yapıyı aşamaz. Engelin üzerinden veya arkasına erişim gerekiyorsa eklemli platform değerlendirilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-kiralama-fiyatini-etkileyen-unsurlar",
            kategori: "Maliyet",
            baslik: "Eklemli Platform Kiralama Fiyatını Etkileyen Unsurlar",
            ozet: "Kiralama fiyatı tek bir günlük ücret değildir. Makine sınıfı, süre, nakliye, operatör, enerji ve saha koşulu maliyeti nasıl belirler? Teklifleri doğru karşılaştırma rehberi.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Artı Platform makine parkında yükseltici platformlar",
            tarih: "2026-07-16",
            guncelleme: "2026-07-24",
            okuma: 7,
            giris: "Eklemli platform kiralamada fiyat, makinenin adından çok işin gerektirdiği kapsamla belirlenir. Aynı yükseklik sınıfı farklı süre, erişim ve saha koşuluyla kullanıldığından, iki talebin 'aynı makine' olması aynı fiyatı doğurmaz. Bu yazı, teklifleri gerçekten karşılaştırabilmeniz için maliyeti oluşturan kalemleri açıklar.",
            bolumler: [
                {
                    baslik: "Sınıf, süre ve nakliye",
                    paragraflar: [
                        "Fiyatın ilk belirleyeni erişim sınıfıdır: gereken çalışma yüksekliği ve yatay erişim büyüdükçe daha yüksek sınıf ve genellikle daha yüksek bir bedel gerekir. Süre ise yalnız takvim günü değildir; çalışma saati veya sayaç sınırı, vardiya ve atıl günler de kapsama girer.",
                        "Gidiş-dönüş nakliye çoğu teklifte ayrı bir kalemdir ve mesafe, güzergâh, kabul saati ile indirme alanına göre değişir. Nakliye sorumluluğunun kime ait olduğu yazılı teklifte açıkça belirtilmelidir.",
                    ],
                },
                {
                    baslik: "Operatör, enerji ve ataşman",
                    paragraflar: [
                        "Operatörlü ve operatörsüz kiralama farklı fiyatlanır; operatörlü hizmette vardiya, fazla çalışma ve yol-konaklama, operatörsüzde kullanıcı yetkinliği ve teslim eğitimi konuşulur. Dizelde yakıt, elektriklide şarj sorumluluğu fiyat-kapsam ilişkisini etkiler.",
                        "Uzatma tablası, 4x4 çekiş, jack sistemi veya özel sepet gibi ek donanımlar hem uygunluğu hem bedeli değiştirir. Bu kalemler 'her şey dahil' gibi belirsiz bir ifadeyle değil, dahil ve hariç olarak ayrı yazıldığında karşılaştırma sağlıklı olur.",
                    ],
                },
                {
                    baslik: "Teklifleri aynı iş tanımıyla karşılaştırın",
                    paragraflar: [
                        "Sağlıklı karşılaştırma, farklı tedarikçilerin aynı iş tanımı üzerinden fiyat vermesiyle olur. Yalnız günlük birim ücrete bakmak yanıltıcıdır; nakliye, operatör, yakıt/şarj, ataşman, bekleme ve hasar sorumluluğu birlikte değerlendirilmelidir.",
                        "Bu içerikte kesin stok, sabit fiyat veya teslimat sözü verilmez; bunlar güncel uygunluk, rota ve kapsam görüldükten sonra yalnız yazılı teklif ve sözleşmeyle kesinleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Eklemli platform kiralama fiyatı neden liste hâlinde verilmiyor?", cevap: "Fiyat; makine sınıfı, süre, nakliye, operatör ve saha koşulunun kesişiminde oluşur. Bu değişkenler görülmeden verilen liste fiyatı yanıltıcı olur; doğru bedel yazılı teklifte belirlenir." },
                { soru: "Uzun süreli projede birim maliyet düşer mi?", cevap: "Genellikle uzun dönem, günlük orana göre daha uygun bir aralığa yerleşir; kesin oran seçilen makine, çalışma saati sınırı ve nakliye planına göre yazılı teklifte belirtilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "dizel-eklemli-platform-acik-saha-erisim-rehberi",
            kategori: "Ürün Rehberi",
            baslik: "Dizel Eklemli Platform: Açık Sahada Engel Aşan Erişim",
            ozet: "Şantiye, çelik montaj ve fabrika dışı işlerde 4x4 çekiş, jack sistemi ve yüksek erişim. Dizel eklemli platformun açık saha avantajları ve zemin koşulları.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Fabrika sahasında dizel yükseltici platform ve forklift ile çalışma",
            tarih: "2026-07-15",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Açık sahada yüksekte çalışma, kapalı alandan farklı koşullar getirir: eğim, gevşek zemin, rüzgâr ve uzun erişim. Dizel eklemli platform, bu koşullar için tasarlanmıştır. Bu rehber, dizel modelin nerede doğru olduğunu ve zemin koşullarının seçime etkisini anlatır.",
            bolumler: [
                {
                    baslik: "Dizel modelin açık saha avantajı",
                    paragraflar: [
                        "Dizel eklemli platformlar genellikle 4x4 çekiş ve daha yüksek tırmanma açısıyla gelir; şantiye, arazi zemini ve eğimli yüzeylerde elektrikliden daha güvenilirdir. Jack (denge ayağı) sistemi eğimli ve gevşek zeminde makineyi dengeler.",
                        "Yakıt ikmali dakikalar sürer, bu da kesintisiz vardiya gerektiren dış mekân projelerinde operasyonel avantaj sağlar. Yüksek erişim sınıflarında (28-43 m) dizel modeller yaygındır.",
                    ],
                },
                {
                    baslik: "Zemin: gözle değil, veriyle karar",
                    paragraflar: [
                        "Makinenin toplam ağırlığı kadar, teker veya jack ayağında oluşan noktasal yük de zemini zorlar. Stabilize yol, sıkıştırılmış dolgu ve şantiye zemini çoğu modelde uygundur; ancak taşıma kapasitesi belirsiz, çamurlu veya bodrum üzeri zeminlerde önce uygunluk değerlendirilir, gerekirse çelik plaka serilir.",
                        "Arazi tipi görünümüne güvenip eğimi ve zemin kapasitesini ölçmemek en sık yapılan hatadır. Zemin kapasitesi bilinmiyorsa saha yetkilisinin veya ilgili teknik disiplinin görüşü alınır.",
                    ],
                },
                {
                    baslik: "Kapalı alanda dizel neden kullanılmaz?",
                    paragraflar: [
                        "Dizel motorun egzozu, havalandırması sınırlı kapalı alanda karbon monoksit riski oluşturur; bu yüzden kapalı alanların standart çözümü elektrikli modellerdir. Gürültü de kapalı ve hassas alanlarda bir kısıttır.",
                        "Doğru güç kaynağı, makine tipiyle birlikte saha koşuluna göre seçilir. Aynı projede iç mekân işleri elektrikliyle, dış cephe ve çatı işleri dizelle yürütülebilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Dizel eklemli platform her zeminde çalışır mı?", cevap: "Çoğu açık saha zemininde çalışır, ancak taşıma kapasitesi belirsiz, çok yumuşak veya bodrum üzeri zeminlerde önce uygunluk değerlendirilir. 4x4 çekiş ve jack sistemi eğimli zeminde destek sağlar; yine de üretici eğim sınırı esastır." },
                { soru: "Açık sahada rüzgâr çalışmayı durdurur mu?", cevap: "Rüzgâr limiti makineye ve erişim yüksekliğine göre değişir; üretici sınırı ve makine üzerindeki bilgi plakası kontrol edilir. Sınır aşılıyorsa iş durdurulur." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "operatorlu-eklemli-platform-kiralama-ne-zaman-gerekir",
            kategori: "Ürün Rehberi",
            baslik: "Operatörlü Eklemli Platform Kiralama Ne Zaman Gerekir?",
            ozet: "Operatörlü mü, operatörsüz mü? Yetkinlik, vardiya, saha oryantasyonu ve maliyet açısından karar rehberi. Operatör belgesi gerekliliği nasıl belirlenir?",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Artı Platform makine parkında operatörlü kiralamaya hazır platformlar",
            tarih: "2026-07-14",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platform kiralarken operatör kararı hem güvenliği hem maliyeti etkiler. Doğru karar, işi kimin, hangi yetkinlikle ve hangi koşulda yapacağına bağlıdır. Bu yazı, operatörlü ve operatörsüz kiralama arasındaki farkı ve karar ölçütlerini anlatır.",
            bolumler: [
                {
                    baslik: "Operatörlü kiralama ne sağlar?",
                    paragraflar: [
                        "Operatörlü hizmette makineyi, ekipmanı tanıyan ve yetkinliği belgelenmiş bir kişi kullanır. Kısa süreli, tek seferlik veya kendi ekibinizde yetkin operatör bulunmayan işlerde operatörlü kiralama hem güvenli hem pratik olur.",
                        "Operatörlü hizmette vardiya süresi, fazla çalışma, yol-konaklama ve saha oryantasyonu teklif kapsamında konuşulur. Bu kalemler yazılı teklifte ayrı ayrı görülmelidir.",
                    ],
                },
                {
                    baslik: "Operatörsüz kiralamada sorumluluk",
                    paragraflar: [
                        "Operatörsüz kiralamada makineyi kullanacak kişinin yetkinliği ve teslim eğitimi önem kazanır. Operatör yeterlilik belgesi gerekliliği; yapılan görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir ve göreve başlamadan önce yetkili İSG birimi ile resmî kaynaklardan doğrulanmalıdır.",
                        "Belgesiz veya yetkinliği doğrulanmamış kullanım, kaza hâlinde işverenin sorumluluğunu ağırlaştırır. Bu yüzden operatörsüz talepte makineyi kimin kullanacağı baştan netleştirilir.",
                    ],
                },
                {
                    baslik: "Maliyet ve karar",
                    paragraflar: [
                        "Operatörlü ve operatörsüz kiralama farklı fiyatlanır; karar yalnız maliyete göre değil, ekibinizin yetkinliğine ve işin süresine göre verilir. Uzun süreli projelerde kendi yetkin operatörünüzle operatörsüz kiralama ekonomik olabilir; kısa ve teknik işlerde operatörlü hizmet güvenliği artırır.",
                        "Her iki durumda da vardiya öncesi kontrol, kurtarma planı ve saha güvenlik kuralları uygulanır. Kesin kapsam ve fiyat yazılı teklifte belirlenir.",
                    ],
                },
            ],
            sss: [
                { soru: "Eklemli platform için operatör belgesi zorunlu mu?", cevap: "Gereklilik; görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir. Kesin şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır; belgesiz kullanım kaza hâlinde işverenin kusurunu ağırlaştırır." },
                { soru: "Operatörlü kiralama daha mı güvenli?", cevap: "Kendi ekibinizde yetkin operatör yoksa ya da iş kısa ve teknikse, ekipmanı tanıyan bir operatörle çalışmak güvenliği artırır. Uzun süreli işlerde kendi yetkin ekibinizle operatörsüz kiralama da uygun olabilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platformda-ruzgar-limiti-ve-hava-kosullari",
            kategori: "Güvenlik",
            baslik: "Eklemli Platformda Rüzgâr Limiti ve Hava Koşulları",
            ozet: "Uzayan bomda rüzgâr etkisi yükseklikte artar. Rüzgâr limitinin makineye özgü olması, hava koşulunun bir durdurma kriteri olarak baştan tanımlanması ve saha uygulaması.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Açık sahada rüzgâra açık koşullarda yüksekte çalışma",
            tarih: "2026-07-13",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platformda uzayan bom, rüzgârın etkisini yükseklikte belirgin biçimde artırır. Rüzgâr, açık saha işlerinin en çok küçümsenen ama en belirleyici koşullarından biridir. Bu yazı, rüzgâr limitinin nasıl okunacağını ve hava koşulunun iş planına nasıl işleneceğini anlatır.",
            bolumler: [
                {
                    baslik: "Rüzgâr limiti makineye özgüdür",
                    paragraflar: [
                        "Tek bir 'güvenli rüzgâr değeri' yoktur; limit makineye, modele ve erişim konfigürasyonuna göre değişir. Uzayan erişimle birlikte izin verilen rüzgâr değeri düşebilir. Bu yüzden çalışma öncesinde seçilen modelin teknik föyü ve makine üzerindeki bilgi plakası kontrol edilir.",
                        "Sepete asılan levha, pano veya geniş yüzeyli malzeme rüzgâr etkisini artırır ('yelken etkisi'); bu tür yükler rüzgâr değerlendirmesine dâhil edilmelidir.",
                    ],
                },
                {
                    baslik: "Durdurma kriterini baştan yazın",
                    paragraflar: [
                        "Hangi rüzgâr, yağış veya görüş değerinde işin duracağı, iş başlamadan önce yazılmalıdır. Aksi hâlde karar sahada baskı altında ve genellikle güvenlik aleyhine verilir. Gün içi bozulma ihtimaline karşı ekipmana özgü durdurma kriteri belirlenir.",
                        "Anemometre (rüzgâr ölçer) ile ölçüm, gözle tahminden güvenilirdir. Rüzgâr sınırı aşıldığında platform indirilir ve iş durdurulur; makine park konumuna alınır.",
                    ],
                },
            ],
            sss: [
                { soru: "Eklemli platformda güvenli rüzgâr sınırı kaçtır?", cevap: "Sabit bir değer yoktur; limit makineye, modele ve erişim yüksekliğine göre değişir ve uzayan erişimle düşebilir. Seçilen modelin teknik föyü ve bilgi plakası esas alınır." },
                { soru: "Yağmurda eklemli platform kullanılabilir mi?", cevap: "Görüş, zemin kayganlığı ve üreticinin hava koşulu limitlerine bağlıdır. Yoğun yağış ve düşük görüşte dış mekân platform operasyonları genellikle durdurulur." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "makasli-mi-eklemli-mi-engel-varsa-hangisi",
            kategori: "Karşılaştırma",
            baslik: "Makaslı mı Eklemli mi? Engel Varsa Hangisi Seçilir?",
            ozet: "Makaslı platform dikey erişimin standardı, eklemli ise engel aşmanın makinesi. Çalışma noktasının altına girilebiliyorsa makaslı, arada engel varsa eklemli: net karar rehberi.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Sanayi holünde dikey erişim için makaslı platformla yüksekte çalışma",
            tarih: "2026-07-12",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Yükseltici platform seçiminde ilk ayrım basittir: çalışma noktasının tam altına makine koyabiliyor musunuz? Cevap evetse makaslı, hayırsa eklemli düşünülür. Bu yazı iki tipi aynı ölçütlerle karşılaştırır.",
            bolumler: [
                {
                    baslik: "Makaslı: dikey erişimin geniş sepetli çözümü",
                    paragraflar: [
                        "Makaslı platform sepeti yalnız dikey hareket ettirir; çalışma noktasının tam altına konumlanabildiğiniz her işte ilk tercihtir. Geniş tablasında birden fazla çalışan, malzeme ve el aletiyle yükselir. Tavan tesisatı, aydınlatma, sprinkler, depo rafı ve düz cephe makaslının tipik işleridir.",
                        "Sınırı nettir: yatay erişim yok denecek kadar azdır. Sepetin ulaşacağı noktanın altında engel (makine hattı, çukur, saçak) varsa makaslı yetersiz kalır.",
                    ],
                },
                {
                    baslik: "Eklemli: engelin üzerinden aşan bom",
                    paragraflar: [
                        "Eklemli platformun kırılan bomu, makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir. Çatı arkası, boru köprüsü ve peyzaj önündeki cephe eklemlinin alanıdır.",
                        "Karşılığında eklemli, aynı yükseklikte genellikle daha yüksek bir bedelle döner. Bu yüzden engel yoksa makaslıyı zorlamak gerekmez.",
                    ],
                },
            ],
            sss: [
                { soru: "Aynı işte hem makaslı hem eklemli gerekebilir mi?", cevap: "Evet; örneğin bir projede raf işleri makaslıyla, saçak arkası cephe işleri eklemliyle yürür. Çok makineli işlerde tek organizasyonla kombine kiralama maliyeti düşürür." },
                { soru: "Makaslı platform yatay erişim yapabilir mi?", cevap: "Çoğu makaslıda yatay erişim yok denecek kadar azdır; bazı modellerde sınırlı bir uzatma tablası bulunur. Gerçek yatay erişim gereken işlerde eklemli veya teleskopik değerlendirilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "avm-ve-alisveris-merkezi-bakiminda-eklemli-platform",
            kategori: "Şehir & Sektör",
            baslik: "AVM ve Alışveriş Merkezi Bakımında Eklemli Platform",
            ozet: "Atrium, cam tavan, tabela ve aydınlatma bakımında iç mekân erişimi. AVM'lerde sıfır emisyon, iz bırakmayan lastik ve ziyaretçi trafiğiyle güvenli çalışma.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Kapalı alanda elektrikli yükseltici platformla bakım çalışması",
            tarih: "2026-07-11",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "AVM ve alışveriş merkezleri, iç mekân yüksekte çalışmanın en zorlu ortamlarındandır: yüksek atriumlar, cam tavanlar, ziyaretçi trafiği ve hassas zeminler bir arada bulunur. Bu yazı, bu ortamlarda eklemli platform kullanımının inceliklerini anlatır.",
            bolumler: [
                {
                    baslik: "İç mekân koşulları: emisyon, gürültü, zemin",
                    paragraflar: [
                        "AVM içinde sıfır emisyon ve düşük gürültü zorunludur; bu yüzden elektrikli eklemli modeller tercih edilir. İz bırakmayan lastikler mermer, seramik ve epoksi zeminlerde yüzeye zarar vermez.",
                        "Atrium ve cam tavan gibi yüksek ve engelli noktalara erişimde eklemli bomun engel aşma kabiliyeti öne çıkar; makaslının giremediği açılara ulaşır.",
                    ],
                },
                {
                    baslik: "Ziyaretçi trafiği ve çalışma planı",
                    paragraflar: [
                        "AVM'lerde çalışma çoğu zaman ziyaretçi trafiğiyle aynı alanda yürür. Bu yüzden çalışma alanı bariyerle ayrılır, gerektiğinde mesai dışı saatler planlanır, makinenin altı ve devrilme zarfı kapatılır.",
                        "Zeminin (özellikle üst kat döşemelerinin) taşıma kapasitesi kontrol edilmelidir; makine ağırlığı ve noktasal yük, döşeme sınırının altında olmalıdır. Belirsizlikte yapı yetkilisinin görüşü alınır.",
                    ],
                },
            ],
            sss: [
                { soru: "AVM içinde dizel platform kullanılabilir mi?", cevap: "Hayır; egzoz emisyonu ve gürültü nedeniyle kapalı AVM ortamında elektrikli modeller kullanılır. Sıfır emisyon ve düşük ses, ziyaretçi ve çalışan güvenliği için gereklidir." },
                { soru: "Üst kat döşemesinde platform kullanmak güvenli mi?", cevap: "Döşemenin taşıma kapasitesi ve makinenin noktasal yükü karşılaştırılmadan karar verilmez. Kapasite bilinmiyorsa yapı yetkilisinin yazılı görüşü alınır; gerekirse yük dağıtıcı plaka kullanılır." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "depo-ve-lojistik-merkezinde-raf-ve-tavan-isleri",
            kategori: "Şehir & Sektör",
            baslik: "Depo ve Lojistik Merkezinde Raf ve Tavan İşleri",
            ozet: "Yüksek raf sistemleri, çatı altı tesisat, aydınlatma ve yangın sistemi bakımında platform seçimi. Dar koridor, zemin ve sürekli operasyon koşullarıyla çalışma.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Lojistik deposunda forklift ve makaslı platformla raf ve tavan çalışması",
            tarih: "2026-07-10",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Depo ve lojistik merkezleri; yüksek raf sistemleri, çatı altı tesisat, aydınlatma ve yangın sistemleriyle sürekli yüksekte çalışma ihtiyacı doğurur. Bu yazı, bu ortamda doğru makine seçimini ve saha koşullarını ele alır.",
            bolumler: [
                {
                    baslik: "Raf arası mı, çatı altı mı?",
                    paragraflar: [
                        "Dar raf koridorlarında ve düz zeminde, tam altından erişilen işlerde makaslı platform veya dikey personel yükseltici çevik bir çözümdür. Çatı altı tesisat, kanal ve konveyör üstü gibi engel aşmalı noktalarda ise eklemli platformun bomu gerekir.",
                        "Koridor genişliği, kapı yüksekliği ve dönüş alanı seçilen modelin ölçüleriyle karşılaştırılır; makine nakliye ve çalışma ölçüleri farklı olabilir.",
                    ],
                },
                {
                    baslik: "Sürekli operasyon ve zemin",
                    paragraflar: [
                        "Faal depolarda çalışma, forklift ve palet trafiğiyle aynı alanda yürür; çalışma bölgesi ayrılır ve hareket zamanları planlanır. Elektrikli modeller sıfır emisyonla vardiya içinde çalışabilir.",
                        "Depo betonu genellikle taşıyıcıdır, ancak mazgal, rampa ve dilatasyon noktaları değerlendirilir. Sürekli çalışmada akü/şarj planı vardiya akışına yazılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Dar raf koridorunda hangi makine kullanılır?", cevap: "Tam altından erişilen işlerde dar gövdeli makaslı platform veya dikey personel yükseltici çeviktir. Engel aşma gerekiyorsa eklemli platform değerlendirilir; koridor ve kapı ölçüleri modelin ölçüleriyle karşılaştırılır." },
                { soru: "Depoda çalışırken operasyon durdurulmalı mı?", cevap: "Çalışma bölgesi forklift ve yaya trafiğinden ayrılır; tümüyle durdurmak yerine bölge izolasyonu ve hareket zamanlaması çoğu zaman yeterlidir. Karar saha risk değerlendirmesine göre verilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platformda-emniyet-kemeri-ve-ankraj-noktasi",
            kategori: "Güvenlik",
            baslik: "Eklemli Platformda Emniyet Kemeri ve Ankraj Noktası",
            ozet: "Eklemli ve teleskopik platformlarda fırlama etkisine karşı tam vücut kemeri ve doğru ankraj noktası neden zorunlu? Makaslıdan farkı ve üretici talimatının önemi.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Yükseltici platform sepetinde emniyet donanımıyla çalışan operatör",
            tarih: "2026-07-09",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platformlarda çalışma platformu uzun bir erişim yapısının ucundadır. Makine bir çukura girdiğinde veya ani hareket ettiğinde oluşan fırlama etkisi, çalışanı korkuluk seviyesinin üzerine taşıyabilir. Bu yüzden bağlantı sistemi eklemli ve teleskopik platformlarda özel önem taşır.",
            bolumler: [
                {
                    baslik: "Fırlama etkisi ve doğru bağlantı",
                    paragraflar: [
                        "Eklemli veya teleskopik platformlarda fırlama riskine karşı, üretici talimatı ve saha risk değerlendirmesine uygun tam vücut kemeri ve bağlantı sistemi kullanılmalıdır. Yanlış uzunluk veya yanlış bağlantı noktası, koruma sisteminin amacını ortadan kaldırabilir.",
                        "Bağlantı noktası kritiktir: kemer, sepetin korkuluğuna değil, üretici tarafından işaretlenmiş ankraj noktasına bağlanmalıdır. Her sepette bu nokta bulunur ve kullanım kılavuzunda gösterilir.",
                    ],
                },
                {
                    baslik: "Makaslıdan farkı ve kurtarma",
                    paragraflar: [
                        "Makaslı platformlarda sepet doğrudan şasinin üzerinde dikey hareket eder; fırlama etkisi yoktur. Bu yüzden korkulukları sağlam ve kapısı kapalı bir makaslıda kemer, üretici aksini söylemedikçe zorunlu değildir. İki tip arasındaki bu fark saha eğitimlerinde en sık yanlış anlatılan konulardandır.",
                        "Kemer kullanılan her yerde bir kurtarma planı da gerekir: kemerle düşmesi duran bir kişinin asılı kalması sarkma travması riski doğurur. 'Kemer taktık' demek planın sonu değil başıdır.",
                    ],
                },
            ],
            sss: [
                { soru: "Makaslı platformda emniyet kemeri zorunlu mu?", cevap: "Korkulukları sağlam ve kapısı kapalı bir makaslı platformda, fırlama etkisi olmadığından kemer üretici aksini belirtmedikçe zorunlu değildir. Eklemli ve teleskopikte ise fırlama riskine karşı bağlantı sistemi gerekir." },
                { soru: "Kemer nereye bağlanmalı?", cevap: "Sepetin korkuluğuna değil, üretici tarafından işaretlenmiş ankraj noktasına bağlanmalıdır. Bu nokta her sepette bulunur ve kullanım kılavuzunda gösterilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-periyodik-kontrol-ve-gunluk-kontrol",
            kategori: "Güvenlik",
            baslik: "Eklemli Platformda Periyodik Kontrol ve Günlük Kontrol",
            ozet: "Yıllık periyodik kontrol ile vardiya öncesi günlük kontrol farkı, kiralık makinede sorumluluk paylaşımı ve raporda aranacak başlıklar.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Artı Platform makine parkında kontrolü yapılmış yükseltici platformlar",
            tarih: "2026-07-08",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Yükseltici platform güvenliğinin iki katmanı vardır: yılda en az bir kez yapılan periyodik kontrol ve her vardiya öncesi operatörün yaptığı günlük kontrol. İkisi birbirinin yerine geçmez. Bu yazı, kiralık eklemli platformda bu kontrollerin nasıl işlediğini anlatır.",
            bolumler: [
                {
                    baslik: "Periyodik kontrol: yılda en az bir kez",
                    paragraflar: [
                        "Yükseltici platformlar kaldırma ekipmanı sayılır ve standartlarda aksi belirtilmedikçe yılda en az bir kez yetkili teknik elemanca periyodik kontrolden geçirilir. Raporda yük testi, hidrolik sistem, acil indirme, korkuluk ve denge sensörü kontrolleri aranır.",
                        "Kiralık makinede periyodik kontrol raporunu kiraya veren sağlar; raporun bir kopyasının makineyle birlikte sahada bulunması denetimlerde zaman kazandırır.",
                    ],
                },
                {
                    baslik: "Günlük kontrol: operatörün sorumluluğu",
                    paragraflar: [
                        "Her vardiya öncesi operatör; fren, acil stop, acil indirme, korkuluk, kumandalar ve denge sensörünü test eder ve kaydeder. Ciddi kazaların önemli bölümü, günlük kontrolde yakalanabilecek arızalardan çıkar.",
                        "Kiralık makinede günlük kontrol ve doğru kullanım kiracının yükümlülüğündedir. Bu sorumluluk paylaşımının sözleşmede yazılı olması iki tarafı da korur.",
                    ],
                },
            ],
            sss: [
                { soru: "Periyodik kontrolü kim yapar?", cevap: "İlgili teknik eğitime sahip yetkili kişilerce (makine mühendisi/tekniker) ve geçerli kayıt sistemi üzerinden yapılır. Güncel yetki ve kayıt şartları resmî kaynaklardan doğrulanmalıdır." },
                { soru: "Kiralık makinede kontrol sorumluluğu kimde?", cevap: "Periyodik kontrol raporunu kiraya veren sağlar; günlük vardiya öncesi kontrol ve doğru kullanım kiracının sorumluluğundadır. Paylaşımın sözleşmede yazılı olması önerilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-sepet-kapasitesi-ve-calisma-diyagrami",
            kategori: "Ürün Rehberi",
            baslik: "Sepet Kapasitesi ve Çalışma Diyagramı: Katalog Değerini Doğru Okumak",
            ozet: "Eklemli platformda azami değerler her konumda birlikte geçerli değildir. Çalışma diyagramı, kalan sepet kapasitesi ve erişim zarfını okuma rehberi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Çelik montaj sahasında yükseltici platform sepetinde personel ve malzeme",
            tarih: "2026-07-07",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Eklemli platform kiralarken teklifte 'yirmi metre' yazması yeterli değildir. Katalogdaki azami yükseklik, azami erişim ve azami sepet yükü çoğu zaman aynı anda kullanılamaz. Bu yazı, çalışma diyagramını ve kalan kapasiteyi doğru okumayı anlatır.",
            bolumler: [
                {
                    baslik: "Çalışma diyagramı nedir?",
                    paragraflar: [
                        "Çalışma diyagramı, bomun ulaşabildiği her nokta için izin verilen sepet yükünü gösteren bir haritadır. Erişim uzadıkça veya yükseldikçe izin verilen yük düşer; makine belirli bölgelerde tam kapasiteye, uç noktalarda daha düşük kapasiteye izin verir.",
                        "Bu yüzden 'bu makine 20 metre yana ulaşır' ifadesi, diyagramdaki ilgili nokta okunmadan bağlayıcı sayılmaz. Hedef konumdaki kalan kapasite, işin en zorlu noktasına göre kontrol edilir.",
                    ],
                },
                {
                    baslik: "Sepet yükünü doğru hesaplamak",
                    paragraflar: [
                        "Sepet yükü yalnız personel değildir: el aletleri, bağlantı elemanları, malzeme ve varsa levha/pano birlikte hesaplanır. Geniş yüzeyli malzeme ayrıca rüzgâr etkisini artırır.",
                        "İşin gerektirdiği en yüksek + en uzak + en ağır kombinasyonu belirlenir ve bu noktanın seçilen modelin çalışma zarfı içinde kaldığı teknik föyden teyit edilir. Payı büyük makineyle değil, doğru modelle bırakmak gerekir.",
                    ],
                },
            ],
            sss: [
                { soru: "Neden azami yükseklik ve azami erişim aynı anda kullanılamıyor?", cevap: "Bom uzadıkça denge ve yapısal sınırlar nedeniyle izin verilen yük ve erişim değişir. Çalışma diyagramı her konum için izin verilen değeri gösterir; katalog başlığındaki azami değerler uç durumları temsil eder." },
                { soru: "Kalan sepet kapasitesini nasıl öğrenirim?", cevap: "Seçilen modelin çalışma diyagramından, işin hedef noktasındaki değeri okunur. Model belli değilse teklifte performans aralığı ve kabul kriterleri tanımlanır; sevkten önce önerilen modelin verileri bu kriterlerle karşılaştırılır." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "boru-koprusu-ve-proses-tesisi-erisiminde-eklemli-platform",
            kategori: "Şehir & Sektör",
            baslik: "Boru Köprüsü ve Proses Tesisi Erişiminde Eklemli Platform",
            ozet: "Petrokimya, rafineri ve proses tesislerinde boru hatları, köprüler ve ekipman arasından erişim. Engel aşan bom yapısının kritik olduğu işler ve saha izin süreçleri.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Proses tesisinde boru ve ekipman arasından yükseltici platformla erişim",
            tarih: "2026-07-06",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Proses tesisleri, boru köprüleri ve yoğun ekipmanla dolu sahalar, eklemli platformun en ayırt edici olduğu ortamlardır. Çalışma noktası çoğu zaman boru, kablo tavası veya ekipman engelinin arkasındadır; buraya ancak engel aşan bir bomla erişilir.",
            bolumler: [
                {
                    baslik: "Engel aşan erişimin kritik olduğu saha",
                    paragraflar: [
                        "Petrokimya, rafineri ve enerji üretim tesislerinde çalışma noktaları genellikle boru hatları, köprüler ve proses ekipmanının arkasındadır. Eklemli platformun kırılan bomu, makineyi engelin yanına koyup sepeti engelin üzerinden veya arkasına konumlamaya izin verir.",
                        "Dar geçişler ve yoğun ekipman nedeniyle kurulum alanı sınırlıdır; eklemlinin kompakt kurulumu ve dönebilen kulesi bu sahalarda avantaj sağlar.",
                    ],
                },
                {
                    baslik: "İzin süreçleri ve saha kuralları",
                    paragraflar: [
                        "Bu tesisler çoğunlukla sıcak iş izni, gaz ölçümü ve çalışma izni (permit-to-work) sistemi işletir. Makine sınıfı, operatör yeterliliği ve giriş prosedürü teklif öncesinde karşılıklı doğrulanır.",
                        "Emisyon kısıtı olan bölgelerde güç kaynağı ve makine sınıfı bu kurallara göre seçilir; bazı sahalarda özel emisyon veya kıvılcım önleyici şart aranabilir. Bu koşullar talep dosyasına eklenmelidir.",
                    ],
                },
            ],
            sss: [
                { soru: "Proses tesisinde neden eklemli platform tercih edilir?", cevap: "Çalışma noktaları genellikle boru, köprü ve ekipman engelinin arkasında olduğundan, engel aşan bom yapısı gerekir. Makaslı tam altına giremez, teleskopik ise düz bomuyla engeli aşamaz." },
                { soru: "Tesis giriş izinleri için ne gerekir?", cevap: "Sıcak iş izni, gaz ölçümü ve çalışma izni gibi süreçler tesise göre değişir. Makine evrakı, operatör yeterliliği ve giriş prosedürü teklif öncesinde tesisle karşılıklı doğrulanır." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "otel-ve-kamu-binasi-cephe-bakiminda-erisim",
            kategori: "Şehir & Sektör",
            baslik: "Otel ve Kamu Binası Cephe Bakımında Erişim",
            ozet: "Cephe temizliği, boya, tabela ve aydınlatma bakımında peyzaj ve mimari engellerin üzerinden erişim. Faaliyet sürerken güvenli çalışma planı.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Bina cephesine yükseltici platformla erişim ve bakım çalışması",
            tarih: "2026-07-05",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Otel ve kamu binalarının cephe bakımı; peyzaj, saçak, balkon ve mimari çıkıntılar nedeniyle çoğu zaman engel aşan erişim gerektirir. Ayrıca bu binalar bakım sırasında da faaliyettedir. Bu yazı, bu koşullarda platform seçimini ve çalışma planını ele alır.",
            bolumler: [
                {
                    baslik: "Peyzaj ve mimari engeller",
                    paragraflar: [
                        "Otel cephelerinde havuz, bahçe, saçak ve balkon gibi engeller cephenin önünü kapatır. Eklemli platform, makineyi peyzajın kenarına koyup sepeti cephenin önüne, engelin üzerinden ulaştırır; bu, makaslının yapamadığı bir erişimdir.",
                        "Hassas peyzaj ve bitmiş yüzeylerde iz bırakmayan lastik ve koruyucu levha kullanılır; zeminin taşıma kapasitesi (özellikle havuz çevresi ve döşeme üstü) kontrol edilir.",
                    ],
                },
                {
                    baslik: "Faaliyet sürerken çalışma",
                    paragraflar: [
                        "Otel ve kamu binaları bakım sırasında misafir ve ziyaretçi trafiğine açıktır. Çalışma alanı bariyerle ayrılır, gerektiğinde sezon dışı veya düşük yoğunluklu saatler planlanır, düşen malzemeye karşı alt alan korunur.",
                        "Cephe yüksekliği, balkon-saçak derinliği ve yaklaşma alanı ölçülür; erişim geometrisine göre eklemli veya teleskopik sınıf değerlendirilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Havuz çevresinde platform kullanmak güvenli mi?", cevap: "Havuz çevresi kaplamasının taşıma kapasitesi ve altındaki yapı kontrol edilmeden karar verilmez. Kapasite belirsizse yapı yetkilisinin görüşü alınır; yük dağıtıcı plaka ve iz bırakmayan lastik değerlendirilir." },
                { soru: "Otel faaliyetteyken cephe bakımı yapılabilir mi?", cevap: "Evet; çalışma alanı bariyerle ayrılır, alt alan korunur ve gerektiğinde düşük yoğunluklu saatler planlanır. Karar saha risk değerlendirmesine göre verilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "enerji-ve-ruzgar-santrali-bakiminda-eklemli-platform",
            kategori: "Şehir & Sektör",
            baslik: "Enerji ve Rüzgâr Santrali Bakımında Erişim",
            ozet: "Enerji üretim tesisleri, trafo alanları ve yüksek yapılarda bakım erişimi. Enerji hatlarına yaklaşma sınırı, rüzgâr ve saha izinlerinin belirleyici olduğu işler.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Enerji tesisi sahasında yüksek erişim için yükseltici platform",
            tarih: "2026-07-04",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Enerji üretim ve dağıtım tesisleri, hem yüksek erişim hem de özel güvenlik koşulları gerektirir. Enerji hatlarına yaklaşma sınırı, açık saha rüzgârı ve tesis giriş prosedürleri, makine seçimi kadar iş planını da belirler.",
            bolumler: [
                {
                    baslik: "Enerji hatlarına yaklaşma sınırı",
                    paragraflar: [
                        "Enerjili hatların yakınında çalışırken hat gerilimine göre tanımlı bir güvenli yaklaşma mesafesi vardır. Bom hareket zarfı üç boyutludur; yandan güvenli görünen bir hat, bom uzayınca tehlike mesafesine girebilir.",
                        "Güvenli mesafe sağlanamıyorsa, hat sahibinden kesinti veya izolasyon istenmeden iş açılmaz. Mesafe gözle değil, hat gerilimine göre tanımlı değerle değerlendirilir.",
                    ],
                },
                {
                    baslik: "Rüzgâr, saha izni ve makine sınıfı",
                    paragraflar: [
                        "Rüzgâr santrali ve açık enerji sahaları rüzgâra açıktır; rüzgâr limiti makineye ve erişim yüksekliğine göre değişir ve durdurma kriteri baştan yazılır. Yüksek erişim sınıfları (28-43 m) genellikle dizel ve 4x4 modellerle karşılanır.",
                        "Bu tesisler çalışma izni, operatör yeterliliği ve giriş prosedürü ister; makine evrakı ve saha kuralları teklif öncesinde karşılıklı doğrulanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Enerji hattına ne kadar yaklaşılabilir?", cevap: "Güvenli yaklaşma mesafesi hat gerilimine göre değişir ve tesis/dağıtım şirketi prosedürüne tabidir. Belirsizlikte hat yetkilisinden yazılı mesafe veya kesinti talep edilmelidir." },
                { soru: "Rüzgâr santralinde hangi sınıf platform gerekir?", cevap: "Erişim yüksekliğine göre değişir; yüksek erişim işlerinde genellikle dizel ve 4x4 modeller kullanılır. Rüzgâr limiti makineye özgüdür ve çalışma öncesinde kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platformda-sarkma-travmasi-ve-kurtarma-plani",
            kategori: "Güvenlik",
            baslik: "Sarkma Travması ve Kurtarma Planı: Düşme Sonrası Gözden Kaçan Risk",
            ozet: "Kemerle düşmeyi durdurmak yalnız ilk adımdır. Asılı kalma dakikalar içinde hayati risk oluşturur; her yüksekte çalışma işi için kurtarma planı neden zorunlu?",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Yükseltici platformda güvenli çalışma ve kurtarma hazırlığı",
            tarih: "2026-07-03",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bir çalışan emniyet kemeriyle düşmesini durdursa bile tehlike geçmiş sayılmaz. Hareketsiz asılı kalma, dakikalar içinde ciddi bir tıbbi risk olan sarkma travmasına yol açabilir. Bu yazı, riskin mekanizmasını ve kurtarma planının önemini anlatır.",
            bolumler: [
                {
                    baslik: "Asılı kalma neden tehlikeli?",
                    paragraflar: [
                        "Kemerle asılı kalan kişide bacak kayışları kan dolaşımını kısıtlar; hareketsizlik nedeniyle kan bacaklarda birikir ve kalbe geri dönüşü azalır. Bu durum dakikalar içinde baş dönmesi, bilinç kaybı ve tedavisiz bırakılırsa hayati tehlikeye yol açabilir.",
                        "Risk, düşmenin kendisinden değil, düşme sonrası kurtarmanın gecikmesinden kaynaklanır. 'Kemer düşmeyi durdurdu, tehlike geçti' yaklaşımı yanlıştır.",
                    ],
                },
                {
                    baslik: "Kurtarma planı zorunludur",
                    paragraflar: [
                        "Her yüksekte çalışma işi için önceden planlanmış bir kurtarma prosedürü gerekir: asılı kalan kişiye kaç dakikada, hangi ekipmanla ulaşılacağı belirlenmelidir. Sahadaki yükseltici platform çoğu durumda en hızlı kurtarma aracıdır.",
                        "112'yi beklemek tek başına yeterli bir plan değildir; müdahale süresi kritik dakikaları aşabilir. Plan yazılı olmalı, ekipte en az bir kişi uygulayabilecek şekilde eğitilmeli ve tatbik edilmelidir.",
                    ],
                },
            ],
            sss: [
                { soru: "Sarkma travması ne kadar sürede kritik olur?", cevap: "Kaynaklarda belirtilerin dakikalar içinde başlayabileceği belirtilir; süre kişiye ve koşullara göre değişir. Bu yüzden kurtarma süresi ne kadar kısaltılırsa risk o kadar azalır. Bu içerik tıbbi tavsiye değildir." },
                { soru: "Her sahada kurtarma ekipmanı gerekir mi?", cevap: "Yüksekte çalışma riski taşıyan her sahada, düşme durumunda hızlı müdahaleyi sağlayacak bir yöntem (platform, kurtarma makarası, eğitimli ekip) önceden planlanmış olmalıdır." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "orumcek-platform-vs-eklemli-dar-ve-hassas-alanlar",
            kategori: "Karşılaştırma",
            baslik: "Örümcek Platform vs Eklemli Platform: Dar ve Hassas Alanlar",
            ozet: "Katlanır ayaklı hafif örümcek platform mu, standart eklemli mi? Dar kapı, hassas zemin ve iç avlu erişiminde iki sınıfın karşılaştırması.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Dar ve hassas alanda erişim için yükseltici platform",
            tarih: "2026-07-02",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Hem dar hem hassas alanlarda standart eklemli platform her zaman giremez. Bu noktada örümcek platform devreye girer: katlanır paletli ayakları ve hafif gövdesiyle dar kapılardan geçer, hassas zemine zarar vermeden kurulur. Bu yazı iki sınıfı karşılaştırır.",
            bolumler: [
                {
                    baslik: "Örümcek platform ne zaman öne çıkar?",
                    paragraflar: [
                        "Örümcek platform; cami, tarihi yapı, iç avlu, cam tavanlı atrium ve bahçe içi erişim gibi hem dar hem hassas sahalarda, standart eklemli veya teleskopiğin giremediği yerlerde değerlendirilir. Hafif gövdesi hassas zemine düşük yük bindirir, katlanır ayakları dar girişten geçer.",
                        "Ancak kapasite ve erişim sınırları standart eklemliye göre dardır; ağır yük veya geniş sepet gerektiren işlerde örümcek platform yetersiz kalabilir.",
                    ],
                },
                {
                    baslik: "Standart eklemli ne zaman yeterli?",
                    paragraflar: [
                        "Giriş genişliği ve zemin standart bir eklemli platforma uygunsa, daha yüksek kapasite ve erişim için eklemli tercih edilir. Örümcek platform 'her işin makinesi' değildir; yalnız dar+hassas kombinasyonu söz konusu olduğunda öne çıkar.",
                        "Kapı ölçüsü, zemin yükü ve ayak açılım alanı her iki sınıf için de teknik föyle birlikte teyit edilir; nihai seçim saha bilgisine göre yapılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Örümcek platform her dar alana girer mi?", cevap: "Girmez; giriş genişliği, zemin taşıma gücü ve ayak açılım alanı model bazında değişir. Dar ve hassas alanlarda güçlü bir seçenektir ancak kapı ölçüsü, zemin yükü ve ayak açılımı teknik föyle teyit edilmelidir." },
                { soru: "Örümcek platform hassas zeminde iz bırakır mı?", cevap: "Hafif gövdesi ve geniş ayak tabanları zemine düşük noktasal yük bindirir; yine de mermer, ahşap veya tarihi zeminlerde koruyucu levha ve uygunluk değerlendirmesi önerilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "kiralama-mi-satin-alma-mi-eklemli-platform",
            kategori: "Maliyet",
            baslik: "Kiralama mı, Satın Alma mı? Eklemli Platform İçin Karar",
            ozet: "Kullanım sıklığı, bakım, depolama, periyodik kontrol ve amortisman açısından eklemli platformda kiralama ve satın almanın karşılaştırması.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Artı Platform makine parkında kiralamaya hazır eklemli platformlar",
            tarih: "2026-07-01",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platform ihtiyacı süreklilik kazandığında 'kiralamak mı, satın almak mı?' sorusu doğar. Doğru karar; kullanım sıklığına, bakım ve depolama yüküne ve ihtiyaç duyulan sınıf çeşitliliğine bağlıdır. Bu yazı kararı etkileyen kalemleri sıralar.",
            bolumler: [
                {
                    baslik: "Kiralama ne zaman avantajlı?",
                    paragraflar: [
                        "Proje bazlı, aralıklı veya farklı sınıflar gerektiren ihtiyaçlarda kiralama esneklik sağlar: her iş için doğru sınıfı seçer, bakım, periyodik kontrol, depolama ve amortisman yükünü üstlenmezsiniz. İhtiyaç değiştikçe farklı yükseklik ve güç sınıfına geçebilirsiniz.",
                        "Kiralama, makinenin atıl kaldığı dönemlerde sabit maliyet oluşturmaz; ödeme kullanılan süreyle sınırlıdır.",
                    ],
                },
                {
                    baslik: "Satın almada gizli maliyetler",
                    paragraflar: [
                        "Satın alma, yalnız makine bedeli değildir: periyodik kontrol, bakım-onarım, yedek parça, depolama, sigorta ve operatör yetkinliği süreklilik gerektiren kalemlerdir. Tek bir sınıf satın alındığında, farklı bir erişim gerektiğinde yine kiralamaya ihtiyaç doğar.",
                        "Yüksek ve düzenli kullanım varsa satın alma anlamlı olabilir; ancak toplam sahip olma maliyeti bu kalemler dâhil hesaplanmalıdır. Karar, gerçek kullanım verisiyle verilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Ne kadar kullanımda satın alma mantıklı olur?", cevap: "Kesin bir eşik yoktur; makinenin yılda kaç gün ve kaç farklı sınıfta kullanıldığı belirleyicidir. Aralıklı ve çok sınıflı ihtiyaçta kiralama; yoğun ve tek sınıflı sürekli kullanımda satın alma değerlendirilebilir." },
                { soru: "Kiralamada bakım ve kontrol kime ait?", cevap: "Periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracıya aittir. Bu paylaşım satın almada tümüyle sahibin üzerindedir." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "gunluk-haftalik-aylik-eklemli-platform-kiralama",
            kategori: "Maliyet",
            baslik: "Günlük, Haftalık, Aylık Eklemli Platform Kiralama",
            ozet: "Kiralama süresi birim maliyeti nasıl etkiler? Çalışma saati sınırı, vardiya ve atıl günlerin kapsama etkisi; süreye göre doğru planlama.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Depo içinde uzun dönem kiralamaya uygun yükseltici platform",
            tarih: "2026-06-30",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Eklemli platform kiralamada süre, birim maliyeti doğrudan etkiler. Ancak 'süre' yalnız takvim günü değildir. Bu yazı, günlük, haftalık ve aylık kiralamanın farkını ve süreyi doğru tanımlamayı anlatır.",
            bolumler: [
                {
                    baslik: "Süre uzadıkça birim maliyet",
                    paragraflar: [
                        "Günlük, haftalık ve proje/aylık kiralamada birim maliyet farklıdır; uzun dönem genellikle günlük orana göre daha uygun bir aralığa yerleşir. Uzun projelerde makinenin sürekli sahada olması, tekrarlı nakliye maliyetini de azaltır.",
                        "Ancak 'süre'; çalışma saati veya sayaç sınırı, vardiya sayısı ve makinenin sahada beklediği atıl günleri de kapsar. Bu kalemler baştan tanımlanmazsa dönem sonunda sürpriz çıkar.",
                    ],
                },
                {
                    baslik: "Doğru planlama",
                    paragraflar: [
                        "Talebin başlangıç-bitiş tarihi, günlük çalışma saati ve olası uzatma koşulu baştan yazılırsa hem fiyat hem plan öngörülebilir olur. Kısa ama tekrarlı ihtiyaçlarda toplam gün sayısı, tek seferlik uzun kiralamayla karşılaştırılır.",
                        "Kesin oran ve koşullar; seçilen makine, çalışma saati sınırı ve nakliye planına göre yazılı teklifte belirtilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Aylık kiralama günlükten ne kadar uygun?", cevap: "Genellikle aylık/uzun dönem, günlük orana göre daha uygun bir aralığa yerleşir; kesin oran makineye, çalışma saati sınırına ve nakliye planına göre yazılı teklifte belirlenir." },
                { soru: "Çalışma saati sınırı ne demek?", cevap: "Kiralama, takvim günü kadar makinenin çalıştığı saat/sayaç üzerinden de tanımlanabilir. Günlük çalışma saati ve olası fazla çalışma koşulu teklifte belirtilmelidir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-nakliye-ve-sevkiyat-sureci",
            kategori: "Maliyet",
            baslik: "Eklemli Platform Nakliye ve Sevkiyat Süreci",
            ozet: "Gidiş-dönüş nakliye, rota, tesis kabul saati ve indirme alanı. Makinenin nakliye ölçüsünün çalışma ölçüsünden farkı ve sevkiyatta sık yapılan hatalar.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Saha teslimatı için hazırlanan yükseltici platform ve nakliye",
            tarih: "2026-06-29",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platform kiralamada nakliye, çoğu zaman ayrı bir maliyet kalemi ve sık gözden kaçan bir planlama alanıdır. Yanlış planlanmış bir sevkiyat, makinenin kapıdan geçememesi gibi pahalı hatalara yol açar. Bu yazı, sevkiyat sürecini adım adım anlatır.",
            bolumler: [
                {
                    baslik: "Rota ve saha kabulü",
                    paragraflar: [
                        "Gidiş-dönüş nakliye; çıkış deposu ile teslimat adresi arasındaki mesafe, ağır vasıta güzergâhı, tesis kabul saati ve indirme alanına göre planlanır. Nakliye aracının tesis kapısından dönüp dönemeyeceği, boşaltma alanının düz ve taşıyıcı olup olmadığı önceden sorulur.",
                        "Güvenlik kaydı, araç-sürücü belgesi, randevu veya saha oryantasyonu isteniyorsa liste teklif aşamasında paylaşılmalıdır.",
                    ],
                },
                {
                    baslik: "Nakliye ölçüsü ≠ çalışma ölçüsü",
                    paragraflar: [
                        "Makinenin nakliye konumundaki eni, boyu ve yüksekliği çalışma konumundan farklı olabilir; korkuluk katlama ve bom konumu ölçüyü değiştirir. Kapı, koridor, rampa ve dönüş cebi, seçilen modelin taşıma ölçüleriyle karşılaştırılır.",
                        "Uzak veya özel rotada dönüş nakliyesinin bildirim süresi de fiyata ve plana girer. Nakliye sorumluluğu ve ücreti yazılı teklifte açıkça belirtilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Nakliye kiralama fiyatına dahil mi?", cevap: "Nakliye çoğu teklifte ayrı bir kalemdir. Çıkış noktası, teslimat adresi, sorumluluk ve ücret yazılı teklifte yer alır; uzak/özel rotalarda dönüş bildirim süresi de belirtilir." },
                { soru: "Makine sahaya sığmazsa ne olur?", cevap: "Bu yüzden nakliye ölçüsü (katlı korkuluk, bom konumu) kapı-koridor-rampa ölçüleriyle önceden karşılaştırılır. Doğru ölçü paylaşımı, makinenin kapıdan geçememesi gibi pahalı hataları önler." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-kiralarken-saha-kesfi-ve-olcum",
            kategori: "Ürün Rehberi",
            baslik: "Eklemli Platform Kiralarken Saha Keşfi ve Ölçüm",
            ozet: "Doğru makine, doğru ölçümle başlar. Çalışma yüksekliği, yatay erişim, engel geometrisi, zemin ve giriş ölçüleri; talep dosyasında paylaşılması gereken bilgiler.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Saha keşfinde çalışma yüksekliği ve erişim ölçümü",
            tarih: "2026-06-28",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Eklemli platform seçiminde en sık hata, sahayı yeterince tarif etmeden makine istemektir. Doğru makine, işin geometrisini doğru ölçmekle başlar. Bu yazı, keşif ve ölçümde nelerin kaydedilmesi gerektiğini anlatır.",
            bolumler: [
                {
                    baslik: "Üç değeri ayrı ölçün",
                    paragraflar: [
                        "Çalışma noktasının yerden yüksekliği, makinenin kurulabileceği en yakın sağlam zeminden çalışma noktasına yatay uzaklık ve arada aşılması gereken engelin konumu ayrı ayrı ölçülür. 'Bina yaklaşık on metre' demek, çalışanın el seviyesini, parapeti ve yatay uzaklığı vermez.",
                        "Ölçüler fotoğrafla birlikte, başlangıç ve hedef noktası işaretlenerek paylaşılırsa yanlış yorum azalır. Fotoğraf ölçek vermediği için gerçek ölçülerin yerini tutmaz.",
                    ],
                },
                {
                    baslik: "Zemin ve giriş",
                    paragraflar: [
                        "Zeminin taşıma kapasitesi, eğim, kurulum ve kuyruk dönüş alanı kaydedilir. Kapı, koridor, rampa ve dönüş cebi; makinenin nakliye ve çalışma ölçüleriyle karşılaştırılır. Sahaya giriş, ayrı ölçülmesi gereken bir iştir.",
                        "Çevrede devam eden operasyon, trafik ve varsa enerji hattı da not edilir. Eksiksiz saha dosyası, farklı tedarikçilerin aynı iş tanımı üzerinden teklif vermesini sağlar.",
                    ],
                },
            ],
            sss: [
                { soru: "Keşif için mutlaka sahaya gelinmeli mi?", cevap: "Çoğu talep, doğru ölçü ve fotoğraflarla uzaktan ön değerlendirilebilir. Karmaşık erişim veya belirsiz zemin koşullarında yerinde inceleme gerekip gerekmediği ayrıca kararlaştırılır." },
                { soru: "Hangi ölçüleri paylaşmalıyım?", cevap: "Çalışma yüksekliği, yatay erişim, engel geometrisi, zemin durumu, kapı-koridor-rampa ölçüleri, sepette taşınacak yük ve saha giriş koşulları. Fotoğrafta başlangıç ve hedef noktası işaretlenirse değerlendirme hızlanır." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-teklif-dosyasinda-nelere-dikkat-edilir",
            kategori: "Maliyet",
            baslik: "Eklemli Platform Teklifinde Nelere Dikkat Edilir?",
            ozet: "Yazılı teklifte görülmesi gereken kalemler: makine sınıfı/model, çalışma saati, operatör kapsamı, nakliye, enerji sorumluluğu, ikame ve ödeme koşulları.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Yazılı teklif hazırlığı için makine parkındaki platformlar",
            tarih: "2026-06-27",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Farklı tedarikçilerden gelen teklifleri sağlıklı karşılaştırmanın tek yolu, aynı kalemlerin aynı iş tanımı üzerinden yazılı olarak görülmesidir. Bu yazı, eklemli platform teklifinde aranması gereken başlıkları sıralar.",
            bolumler: [
                {
                    baslik: "Teklifte görülmesi gerekenler",
                    paragraflar: [
                        "Ürün sınıfı ve mümkünse marka-model, teknik föy, kiralama başlangıç-bitişi, günlük çalışma saati veya sayaç sınırı, operatör kapsamı, gidiş-dönüş nakliye bedelleri, enerji-yakıt sorumluluğu, bakım ve arıza bildirim yolu, ikame koşulu, ödeme ve iptal maddeleri ayrı satırlarda görülmelidir.",
                        "Model belirtilmemişse sevkten önce model teyidi istenir; istenen periyodik kontrol veya uygunluk kayıtlarının geçerlilik tarihi makine özelinde kontrol edilir.",
                    ],
                },
                {
                    baslik: "'Her şey dahil' tuzağı",
                    paragraflar: [
                        "'Her şey dahil' gibi belirsiz ifadeler yerine dahil ve hariç kalemler ayrı yazılmalıdır. Aksi hâlde farklı tekliflerin gerçekten karşılaştırılabilir olduğu söylenemez.",
                        "Operatörlü hizmette vardiya, fazla çalışma, yol-konaklama; operatörsüzde kullanıcı yetkinliği ve teslim eğitimi teklifte netleştirilir. Belge kopyalarının hangi aşamada paylaşılacağı da anlaşılır olmalıdır.",
                    ],
                },
            ],
            sss: [
                { soru: "Teklifte model belirtilmemişse ne yapmalı?", cevap: "Yalnız sınıf belirtilmişse, kabul edilecek teknik sınırlar (yükseklik, erişim, kapasite) tanımlanmalı; sevkten önce önerilen modelin verileri bu kriterlerle karşılaştırılmalıdır." },
                { soru: "Arıza durumunda ne olur?", cevap: "Arıza bildirim yolu ve ikame (yedek makine) koşulu teklifte yer almalıdır. Bu maddelerin yazılı olması, sahada iş kaybını sınırlar." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "eklemli-platform-teslim-alma-ve-iade-kontrolu",
            kategori: "Güvenlik",
            baslik: "Eklemli Platform Teslim Alma ve İade Kontrolü",
            ozet: "Makine teslim alınırken ve iade edilirken neler kayıt altına alınmalı? Model uyumu, görünür hasar, güvenlik işlevleri ve anlaşmazlıkları önleyen teslim tutanağı.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Teslim alma kontrolü yapılan yükseltici platform",
            tarih: "2026-06-26",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Eklemli platform teslim alınırken ve iade edilirken yapılan kısa bir kontrol, hem güvenliği sağlar hem de sonradan çıkabilecek hasar ve kapsam anlaşmazlıklarını önler. Bu yazı, teslim ve iade kontrolünün başlıklarını özetler.",
            bolumler: [
                {
                    baslik: "Teslim alırken",
                    paragraflar: [
                        "Sevk edilen makinenin teklifteki sınıf ve modelle uyumu, görünür hasarlar, sayaç veya enerji seviyesi, korkuluk-kabin, sepet ve varsa ataşman kayıt altına alınır. Alt ve üst kumandalar, fren, acil durdurma ve acil indirme işlevleri kullanım kılavuzuna göre yetkili kişice kontrol edilir.",
                        "Bu vardiya öncesi kontrol, geçerli periyodik kontrolün yerine geçmez; teslim durumunu kayda alır. Uygunsuzluk görülürse makine kullanılmaz, fotoğraf ve tutanakla bildirilir.",
                    ],
                },
                {
                    baslik: "İade ederken",
                    paragraflar: [
                        "İade sırasında sayaç, yakıt-şarj durumu, anahtar-aksesuar ve görünür hasar yeniden kayda alınır. Teslim ve iade kayıtlarının karşılaştırılması, sonradan oluşabilecek anlaşmazlıkların önüne geçer.",
                        "Kullanım kılavuzu, gerekli kontrol kayıtları ve sahaya özel istenen belgeler teslim dosyasında bulunmalıdır.",
                    ],
                },
            ],
            sss: [
                { soru: "Teslim kontrolü periyodik kontrol yerine geçer mi?", cevap: "Hayır. Teslim/vardiya öncesi kontrol makinenin o anki durumunu kayda alır; yılda en az bir kez yapılan periyodik kontrolün yerine geçmez. İkisi birbirini tamamlar." },
                { soru: "Görünür hasar bulunursa ne yapılır?", cevap: "Makine güvenli değilse kullanılmaz; hasar fotoğraf ve tutanakla bildirilir. Teslim ve iade kayıtlarının tutulması, hasar sorumluluğu tartışmasını önler." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Eklemli Platform Kiralama", slug: "elektrikli-eklemli-platform-kiralama" },
        },
        {
            slug: "kis-kosullarinda-eklemli-platform-kullanimi",
            kategori: "Güvenlik",
            baslik: "Kış Koşullarında Eklemli Platform Kullanımı",
            ozet: "Buzlanmış zemin, donmuş hidrolik, düşen akü performansı ve kısa gün ışığı. Düşük sıcaklıkta eklemli platformla güvenli çalışmanın ek önlemleri.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Kış koşullarında açık sahada yükseltici platformla çalışma",
            tarih: "2026-06-25",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kış ayları eklemli platform kullanımına iki risk katmanı ekler: zemin ve ekipmanın kendisi. Buzlanma, donmuş hidrolik ve düşen akü performansı, sıradan bir işi bile zorlaştırır. Bu yazı, düşük sıcaklıkta güvenli operasyonun ek önlemlerini özetler.",
            bolumler: [
                {
                    baslik: "Buzlanmış zemin ve stabilizasyon",
                    paragraflar: [
                        "Sabah erken saatlerde veya gölgeli alanlarda zemin buzlanması, jack ayaklarının tam temas kurmasını engelleyebilir. Kurulum öncesi zemin görsel kontrolü kış aylarında standart hâle getirilmelidir; ayak altına konan plaka ile zemin arasındaki buz da kayma yüzeyi oluşturabilir.",
                        "Gün içinde eriyen kar zemini oynatabilir; denge göstergesi kışın daha sık kontrol edilir ve herhangi bir uyarıda platform indirilir.",
                    ],
                },
                {
                    baslik: "Ekipman ve çalışan",
                    paragraflar: [
                        "Düşük sıcaklıkta hidrolik yağın viskozitesi artar; üreticiler genellikle belirli sıcaklığın altında rölantide ısınma süresi önerir. Akü performansı düşer; kışın daha kısa çalışma ve daha uzun şarj süresi beklenir.",
                        "Rüzgâr soğuğu yükseklikte belirginleşir; termal katmanlı ama hareketi kısıtlamayan giysi, yalıtımlı eldiven ve ısınma molaları planlanır. Kısa gün ışığında aydınlatma erken devreye alınır.",
                    ],
                },
            ],
            sss: [
                { soru: "Soğukta makineyi hemen çalıştırabilir miyim?", cevap: "Düşük sıcaklıkta hidrolik yağ koyulaşır; üreticiler rölantide ısınma süresi önerir. Bu süreyi atlayıp tam yükle başlamak hidrolik bileşenleri zorlar. Kullanım kılavuzundaki soğuk çalıştırma talimatı esastır." },
                { soru: "Kar yağışında çalışılır mı?", cevap: "Görüş, zemin kayganlığı ve üretici hava koşulu limitlerine bağlıdır; genel kural, aktif kar yağışında dış mekân platform operasyonlarının durdurulmasıdır." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
        {
            slug: "telehandler-mi-eklemli-platform-mu",
            kategori: "Karşılaştırma",
            baslik: "Telehandler mı, Eklemli Platform mu? Doğru Makineyi Seçmek",
            ozet: "İkisi de yükseğe ulaşır ama biri yük taşır, diğeri personeli çalıştırır. Telehandler ile eklemli personel yükseltici arasındaki kritik fark ve seçim.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Sahada telehandler ve yükseltici platform sınıflarının karşılaştırması",
            tarih: "2026-06-24",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Şantiyede en sık karıştırılan iki sınıftan biri de telehandler ile eklemli personel yükselticidir. Aynı yüksekliğe ulaşabilirler ama aynı iş için tasarlanmamışlardır. Bu yazı, aradaki kritik farkı ve seçim ölçütünü anlatır.",
            bolumler: [
                {
                    baslik: "Farklı amaçlar için tasarım",
                    paragraflar: [
                        "Telehandler temelde bir kaldırma ve taşıma makinesidir: uzayan bomuyla malzemeyi ileri ve yukarı, örneğin iskele üstüne ulaştırır. Eklemli personel yükseltici ise insanı korkuluklu bir sepette çalışma noktasına konumlandırmak için tasarlanmıştır.",
                        "Bir makinenin ulaşabildiği yükseklik, o işi güvenle yapabileceği anlamına gelmez. Doğru soru 'kaç metreye çıkıyor?' değil, 'bu işin ana faaliyeti yük taşımak mı, personel çalıştırmak mı?' sorusudur.",
                    ],
                },
                {
                    baslik: "Güvenlik ve doğru seçim",
                    paragraflar: [
                        "Telehandler'a insan taşıma sepeti takmak, ancak üreticinin o konfigürasyonu onayladığı ve yük tablosuna uyulduğu durumlarda değerlendirilebilir; birçok modelde sepetten kumanda yoktur. Sürekli yüksekte çalışma işlerinde gerçek personel yükseltici hem daha güvenli hem daha verimlidir.",
                        "İşin ana faaliyeti yük ise telehandler, personel çalıştırmak ise eklemli/teleskopik personel yükseltici seçilir. İki faaliyet birlikteyse tek makineyi zorlamak yerine iş kalemleri ayrılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Telehandler ile personel yükseltebilir miyim?", cevap: "Ancak üreticinin onayladığı sepet konfigürasyonu, yük tablosuna uyum ve geçerli saha kurallarıyla; birçok modelde sepetten kumanda olmadığından sınırlıdır. Sürekli yüksekte çalışmada gerçek personel yükseltici tercih edilir." },
                { soru: "Telehandler forklift midir?", cevap: "İkisi de yük taşır ama aynı değildir. Forklift düz zeminde palet istifler; telehandler uzayan bomuyla yükü ileri ve yukarı ulaştırır ve arazi zemininde çalışır. Forklift, telehandler ve personel yükseltici üç ayrı sınıftır." },
            ],
            ilgiliUrun: { baslik: "Dizel Eklemli Platform Kiralama", slug: "dizel-eklemli-platform-kiralama" },
        },
    ],
    "bandirmamanlift.net": [
        {
            slug: "bandirmada-liman-ve-tersane-isinde-yuksekte-calisma",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Liman ve Tersane İşlerinde Yüksekte Çalışma",
            ozet: "Bandırma Limanı, tersane ve enerji tesislerinde manlift ihtiyacı: rüzgâr alan açık saha, yoğun araç trafiği ve liman betonu koşullarında doğru platform seçimi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Bandırma liman ve tersane sahasında yükseltici platformla yüksekte çalışma",
            tarih: "2026-07-20",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Bandırma'nın sanayi dokusu limanı, tersanesi ve enerji tesisleriyle şekillenir. Bu sahalarda yüksekte çalışma; rüzgâr, yoğun araç trafiği ve liman zemini gibi kendine özgü koşullar getirir. Bu yazı, Bandırma ve çevresindeki liman-tersane işlerinde manlift (personel yükseltici) seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Liman sahasının koşulları",
                    paragraflar: [
                        "Bandırma Limanı ve çevresindeki depo, silo ve ekipman bakımı işlerinde açık saha rüzgârı ile yoğun araç trafiği aynı çalışma planında bulunur. Rüzgâr alan açık sahada rüzgâr limiti makineye özgüdür ve erişim yükseldikçe önem kazanır; kantar geçişi, vardiya kapısı ve nakliye aracının bekleme noktası da plana girer.",
                        "Liman betonu genellikle taşıyıcıdır, ancak mıcır saha, rampa ve yağış sonrası yumuşayabilen açık stok alanı zemin açısından ayrı değerlendirilir.",
                    ],
                },
                {
                    baslik: "Tersane ve enerji tesisi işleri",
                    paragraflar: [
                        "Tersane çelik montajı, silo çevresi ve tesis üst yapı kontrolleri çoğu zaman engel aşan erişim gerektirir; makaslı tam altına giremediğinde eklemli veya teleskopik platform değerlendirilir. Enerji ve fabrika bakım duruşları belirli zaman pencereleriyle sınırlıdır, makine bu pencereye göre planlanır.",
                        "Rüzgâr santrali ve liman gibi özel sahalarda istenen makine evrakı, operatör yeterliliği ve giriş prosedürü teklif öncesinde karşılıklı doğrulanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Bandırma'da liman işleri için hangi platform gerekir?", cevap: "İş engel aşmadan, tam altından erişiliyorsa makaslı; boru, silo veya ekipman engelinin arkasına erişim gerekiyorsa eklemli/teleskopik değerlendirilir. Açık sahada rüzgâr limiti çalışma öncesinde kontrol edilir." },
                { soru: "Liman sahasında rüzgâr çalışmayı durdurur mu?", cevap: "Rüzgâr limiti makineye ve erişim yüksekliğine göre değişir; sınır aşıldığında iş durdurulur. Bandırma gibi rüzgâra açık sahalarda durdurma kriteri iş başlamadan yazılmalıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirma-fabrika-bakim-durusunda-platform-planlamasi",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma Fabrika Bakım Duruşunda Platform Planlaması",
            ozet: "Gıda, gübre ve enerji tesislerinde planlı bakım duruşları için zaman penceresine uygun makine, erişim ve iş izni planlaması.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Bandırma fabrika bakım duruşunda yükseltici platformla tesisat işi",
            tarih: "2026-07-18",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma ve çevresindeki fabrikalarda bakım işleri çoğunlukla planlı duruş pencerelerinde yapılır. Bu pencere dar ve kesindir; yanlış makine veya eksik izin, tüm bakım programını geciktirir. Bu yazı, bakım duruşu için platform planlamasını anlatır.",
            bolumler: [
                {
                    baslik: "Zaman penceresine göre makine",
                    paragraflar: [
                        "Bakım duruşu belirli saatlerle sınırlıdır; makine sınıfı, teslimat ve kurulum bu pencereye göre planlanır. Üretim hattı üstü, baca, kanal ve depo rafı işlerinde erişim geometrisi (engel var mı, ne kadar yatay uzaklık) makine sınıfını belirler.",
                        "Birden çok çalışma noktası varsa tek makineyle mi yoksa kombine kiralamayla mı ilerleneceği baştan planlanır; bu, duruş süresini kısaltır.",
                    ],
                },
                {
                    baslik: "İş izni ve saha kuralları",
                    paragraflar: [
                        "Gıda, gübre ve enerji tesisleri iş izni, gaz ölçümü ve giriş prosedürü işletir. Emisyon kısıtı olan alanlarda elektrikli, açık saha ve zorlu zeminde dizel modeller değerlendirilir.",
                        "Makine evrakı, operatör yeterliliği ve istenen belgeler teklif öncesinde tesisle karşılıklı doğrulanır; eksik evrak sahada iş açılmasını geciktirir.",
                    ],
                },
            ],
            sss: [
                { soru: "Bakım duruşu için ne kadar önceden planlanmalı?", cevap: "Makine sınıfı, teslimat ve iş izni süreçleri duruş penceresinden önce netleştirilmelidir. Erken planlama ve net saha bilgisi, dar bakım penceresinde iş kaybını önler." },
                { soru: "Tek makineyle birden çok iş yapılabilir mi?", cevap: "Çalışma noktalarının geometrisine bağlıdır; farklı erişim gerektiren noktalarda kombine kiralama (birden çok sınıf) duruş süresini kısaltabilir. Plan saha bilgisine göre yapılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "manlift-kiralama-nedir-hangi-makineleri-kapsar",
            kategori: "Ürün Rehberi",
            baslik: "Manlift Kiralama Nedir, Hangi Makineleri Kapsar?",
            ozet: "'Manlift' bir personel yükseltici genel adıdır: makaslı, eklemli ve teleskopik platformları kapsar. Bandırma'da hangi iş için hangisi seçilir?",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Personel yükseltici platform (manlift) ile yüksekte çalışma",
            tarih: "2026-07-15",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "'Manlift' terimi sahada sık kullanılır ama tek bir makineyi değil, personel yükseltici platformların genelini anlatır. Doğru kiralama için hangi makine sınıfının ne işe uygun olduğunu bilmek gerekir. Bu yazı manlift kapsamını ve seçim ölçütünü açıklar.",
            bolumler: [
                {
                    baslik: "Manlift kapsamındaki makineler",
                    paragraflar: [
                        "Manlift, personeli korkuluklu bir sepette yükselten makinelerin genel adıdır ve makaslı platform, eklemli platform ile teleskopik platformu kapsar. Bunlara dikey personel yükseltici de eklenebilir. Her biri farklı bir erişim geometrisi için tasarlanmıştır.",
                        "Makaslı dikey erişim, eklemli engel aşma, teleskopik açık doğrultuda uzun erişim içindir. 'Manlift kiralayacağım' demek, önce işin geometrisini tarif etmeyi gerektirir.",
                    ],
                },
                {
                    baslik: "Bandırma'da doğru seçim",
                    paragraflar: [
                        "Bandırma'nın liman, tersane, fabrika ve enerji işlerinde bu sınıfların hepsi kullanılır: depo tavan işi makaslıyla, silo çevresi engel aşmalı erişim eklemliyle, yüksek ve uzak nokta teleskopikle yürür.",
                        "Doğru sınıf; çalışma yüksekliği, yatay erişim, engel ve zemin bilgisiyle seçilir. Kesin model güncel uygunluk kontrolünden sonra yazılı teklifte belirlenir.",
                    ],
                },
            ],
            sss: [
                { soru: "Manlift ile personel yükseltici aynı şey mi?", cevap: "Evet; manlift, personel yükseltici platformların sahada kullanılan genel adıdır ve makaslı, eklemli, teleskopik platformları kapsar. Forklift ve telehandler bu kapsamda değildir." },
                { soru: "Bandırma'da hangi manlift türü daha çok kullanılır?", cevap: "İşe göre değişir: depo/tavan işlerinde makaslı, silo ve ekipman arkası erişimde eklemli, yüksek/uzak noktalarda teleskopik. Seçim işin geometrisine göre yapılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirma-manlift-kiralama-fiyatini-etkileyen-unsurlar",
            kategori: "Maliyet",
            baslik: "Bandırma Manlift Kiralama Fiyatını Etkileyen Unsurlar",
            ozet: "Bandırma ve çevresinde manlift kiralama maliyeti: makine sınıfı, süre, bölgesel nakliye (Erdek, Gönen, Biga), operatör ve saha koşulunun fiyata etkisi.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Bandırma bölgesinde kiralamaya hazır manlift makine parkı",
            tarih: "2026-07-12",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'da manlift kiralama fiyatı tek bir günlük ücret değildir; makine sınıfı, süre, bölgesel nakliye ve saha koşulunun kesişiminde oluşur. Bu yazı, Bandırma ve çevresindeki taleplerde maliyeti belirleyen kalemleri açıklar.",
            bolumler: [
                {
                    baslik: "Sınıf, süre ve bölgesel nakliye",
                    paragraflar: [
                        "Fiyatın ilk belirleyeni erişim sınıfıdır: makaslı, eklemli veya teleskopik ve gereken yükseklik. Süre; çalışma saati, vardiya ve atıl günleri kapsar. Bandırma'da nakliye bölgesel mesafeye göre değişir: merkez, Erdek, Gönen ve Biga hattındaki teslimat noktaları farklı rota ve süre gerektirir.",
                        "Nakliye aracının tesis kapısından dönüşü, kabul saati ve indirme alanı önceden teyit edilir; sorumluluk ve ücret yazılı teklifte belirtilir.",
                    ],
                },
                {
                    baslik: "Operatör ve saha koşulu",
                    paragraflar: [
                        "Operatörlü ve operatörsüz kiralama farklı fiyatlanır. Liman, tersane ve enerji tesisi gibi sahalarda istenen evrak, giriş prosedürü ve operatör yeterliliği kapsamı etkiler.",
                        "Kesin stok, sabit fiyat veya teslimat sözü bu içerikte verilmez; uygunluk tarih, güncel makine durumu, rota ve saha koşulu görüldükten sonra yazılı teklifte kesinleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Bandırma dışına (Erdek, Gönen, Biga) teslimat fiyatı değişir mi?", cevap: "Evet; nakliye bölgesel mesafeye, güzergâha ve teslimat noktasına göre değişir. Çıkış noktası, adres ve ücret yazılı teklifte belirtilir." },
                { soru: "Manlift fiyatı neden peşin liste hâlinde verilmiyor?", cevap: "Fiyat; sınıf, süre, nakliye ve saha koşulunun kesişiminde oluşur. Bu değişkenler görülmeden verilen liste fiyatı yanıltıcı olur; doğru bedel yazılı teklifte belirlenir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-makasli-platform-ile-depo-ve-tesis-isleri",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Makaslı Platform ile Depo ve Tesis İşleri",
            ozet: "Depo raf sistemleri, tavan aydınlatması, tesisat ve fabrika içi bakımda makaslı platform. Bandırma tesislerinde iç mekân yüksekte çalışma rehberi.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Bandırma tesisinde makaslı platformla depo ve tavan çalışması",
            tarih: "2026-07-09",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'daki depo, gıda tesisi ve fabrikalarda iç mekân yüksekte çalışma çoğunlukla makaslı platformla yürür: tavan tesisatı, aydınlatma, raf ve düz cephe işleri. Bu yazı, bu işlerde makaslı platform kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Makaslının tipik işleri",
                    paragraflar: [
                        "Çalışma noktasının tam altına girilebilen depo tavanı, aydınlatma, sprinkler ve raf işlerinde makaslı platform ilk tercihtir. Geniş sepetinde birden fazla çalışan malzemeyle birlikte yükselir.",
                        "Gıda ve hassas üretim alanlarında elektrikli makaslı modeller sıfır emisyon ve iz bırakmayan lastikle vardiya içinde çalışabilir.",
                    ],
                },
                {
                    baslik: "Zemin ve koridor",
                    paragraflar: [
                        "Depo betonu genellikle taşıyıcıdır; ancak mazgal, rampa ve dilatasyon noktaları değerlendirilir. Koridor genişliği, kapı yüksekliği ve dönüş alanı seçilen modelin ölçüleriyle karşılaştırılır.",
                        "Engel aşma gereken (kanal, konveyör üstü) noktalarda makaslı yetersiz kalır; bu durumda eklemli platform değerlendirilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Gıda tesisinde makaslı platform kullanılır mı?", cevap: "Evet; elektrikli makaslı modeller sıfır emisyon ve düşük gürültüsüyle gıda ve hassas alanlarda vardiya içinde çalışabilir. İşletmenin hijyen ve çalışma kuralları talep dosyasına eklenir." },
                { soru: "Makaslı platform engel aşabilir mi?", cevap: "Hayır; makaslı yalnız dikey hareket eder. Kanal, konveyör veya ekipman engelinin arkasına erişim gerekiyorsa eklemli platform gerekir." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirma-erdek-gonen-biga-hattinda-teslimat-planlamasi",
            kategori: "Maliyet",
            baslik: "Bandırma, Erdek, Gönen, Biga Hattında Teslimat Planlaması",
            ozet: "Bölgesel manlift teslimatında rota, mesafe, kabul saati ve dönüş bildirim süresi. Sezon ve turizm trafiğinin sevkiyata etkisi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Bandırma bölgesinde manlift teslimatı ve sevkiyat planlaması",
            tarih: "2026-07-06",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'nın çevresi Erdek, Gönen ve Biga gibi farklı mesafe ve karakterde noktalar içerir. Doğru teslimat planı, hem maliyeti hem de işin zamanında başlamasını belirler. Bu yazı, bölgesel teslimat planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Rota ve mesafe",
                    paragraflar: [
                        "Teslimat; çıkış noktası ile Erdek, Gönen veya Biga arasındaki mesafe, ağır vasıta güzergâhı ve teslimat adresine göre planlanır. Makinenin nakliye ölçüsü, tesis kapısı ve indirme alanıyla karşılaştırılır.",
                        "Uzak veya özel rotada dönüş nakliyesinin bildirim süresi de plana girer; bu koşullar yazılı teklifte belirtilir.",
                    ],
                },
                {
                    baslik: "Sezon ve trafik",
                    paragraflar: [
                        "Erdek gibi turizm noktalarında sezon trafiği teslimat saatini etkiler; kabul saatleri ve güzergâh buna göre planlanır. Sanayi tesislerinde ise vardiya ve bakım penceresi belirleyicidir.",
                        "Erken planlama ve net adres-erişim bilgisi, teslimatın gecikmeden yapılmasını kolaylaştırır.",
                    ],
                },
            ],
            sss: [
                { soru: "Erdek'e sezon içinde teslimat mümkün mü?", cevap: "Evet; ancak turizm trafiği nedeniyle kabul saati ve güzergâh önceden planlanmalıdır. Net adres, erişim ve kabul saati bilgisi teslimatı hızlandırır." },
                { soru: "Dönüş nakliyesi nasıl planlanır?", cevap: "Uzak veya özel rotada dönüş nakliyesinin bildirim süresi baştan konuşulur ve yazılı teklifte yer alır. Bu, iş bitiminde makinenin zamanında alınmasını sağlar." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-liman-tersane-isinde-yuksekte-calisma-guvenligi",
            kategori: "Güvenlik",
            baslik: "Bandırma Liman ve Tersane İşinde Yüksekte Çalışma Güvenliği",
            ozet: "Rüzgâr, araç trafiği ve açık saha koşullarında güvenlik: alan izolasyonu, rüzgâr limiti, kurtarma planı ve saha iş izni.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Bandırma liman sahasında güvenli yüksekte çalışma düzeni",
            tarih: "2026-07-03",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'nın liman ve tersane sahaları, yüksekte çalışmayı hem rüzgâr hem yoğun araç trafiğiyle zorlaştırır. Güvenlik, makine seçilmeden önce planlanır. Bu yazı, bu sahalardaki yüksekte çalışma güvenliğinin başlıklarını özetler.",
            bolumler: [
                {
                    baslik: "Rüzgâr ve alan izolasyonu",
                    paragraflar: [
                        "Açık liman sahasında rüzgâr limiti makineye özgüdür ve erişim yükseldikçe önem kazanır; durdurma kriteri iş başlamadan yazılır. Sepete asılan geniş yüzeyli malzeme rüzgâr etkisini artırır.",
                        "Yoğun araç ve yaya trafiği nedeniyle makinenin altı ve devrilme zarfı şeritle ayrılır; kör noktalar için gözcü ve yönlendirme planlanır.",
                    ],
                },
                {
                    baslik: "İş izni ve kurtarma",
                    paragraflar: [
                        "Liman ve tersane sahaları çalışma izni, gaz ölçümü ve giriş prosedürü ister; makine evrakı ve operatör yeterliliği teklif öncesinde doğrulanır.",
                        "Her yüksekte çalışma için kurtarma planı gerekir: asılı kalma durumunda hızlı müdahale yöntemi önceden belirlenir. Sahadaki yükseltici platform çoğu durumda en hızlı kurtarma aracıdır.",
                    ],
                },
            ],
            sss: [
                { soru: "Liman sahasında rüzgâr sınırı nasıl belirlenir?", cevap: "Rüzgâr limiti makineye ve erişim yüksekliğine göre değişir; seçilen modelin teknik föyü ve bilgi plakası esas alınır. Sınır aşıldığında iş durdurulur." },
                { soru: "Tersane işinde iş izni zorunlu mu?", cevap: "Tersane ve liman sahaları genellikle çalışma izni, gaz ölçümü ve giriş prosedürü işletir. Makine evrakı ve operatör yeterliliği teklif öncesinde tesisle doğrulanır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-cati-ve-cephe-isinde-eklemli-teleskopik-platform",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Çatı ve Cephe İşinde Eklemli/Teleskopik Platform",
            ozet: "Fabrika çatısı, cephe kaplama ve saçak arkası işlerinde engel aşan erişim. Bandırma sanayi ve konut cephelerinde doğru platform sınıfı.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Bandırma'da fabrika cephesi ve çatı işinde yükseltici platform",
            tarih: "2026-06-30",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'daki fabrika ve konut cephelerinde çatı, saçak ve kaplama işleri çoğu zaman engel aşan erişim gerektirir. Bu yazı, cephe ve çatı işlerinde eklemli ve teleskopik platform seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Cephe önünde engel varsa eklemli",
                    paragraflar: [
                        "Cephe önünde saçak, boru, peyzaj veya farklı kotlarda çıkıntı varsa eklemli platformun engel aşan bomu gerekir; makine engelin yanına kurulur, sepet cephenin önüne ulaştırılır.",
                        "Düz ve önü açık cephede makine tam altına konulabiliyorsa makaslı da yeterli olabilir; seçim saha geometrisine göre yapılır.",
                    ],
                },
                {
                    baslik: "Yüksek ve uzak nokta için teleskopik",
                    paragraflar: [
                        "Yüksek fabrika cepheleri, silo ve baca gibi işlerde makineyi işin uzağına kurmak gerektiğinde teleskopik platformun uzun yatay erişimi öne çıkar. Açık sahada rüzgâr limiti ve zemin koşulu bu seçimde belirleyicidir.",
                        "Aynı projede farklı iş kalemleri farklı sınıf gerektirebilir; kombine kiralama duruş süresini kısaltır.",
                    ],
                },
            ],
            sss: [
                { soru: "Fabrika çatı kenarı işinde hangi platform?", cevap: "Çatı kenarına saçak veya çıkıntı arkasından erişiliyorsa eklemli; açık ve uzak bir noktaya erişiliyorsa teleskopik değerlendirilir. Saha geometrisi ve rüzgâr koşulu çalışma öncesinde kontrol edilir." },
                { soru: "Cephede rüzgâr çalışmayı etkiler mi?", cevap: "Evet; açık cephe işlerinde rüzgâr limiti makineye özgüdür ve erişim yükseldikçe önem kazanır. Durdurma kriteri iş başlamadan yazılmalıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirma-sanayi-tesislerinde-yuksekte-calisma-planlamasi",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma Sanayi Tesislerinde Yüksekte Çalışma Planlaması",
            ozet: "Gıda, gübre, kimya ve enerji tesislerinde üretim hattı üstü, baca ve depo işlerinde platform planlaması, iş izni ve emisyon koşulları.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Bandırma sanayi tesisinde yükseltici platformla hat üstü çalışma",
            tarih: "2026-06-27",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'nın sanayi dokusu gıda, gübre, kimya ve enerji tesislerini kapsar. Bu tesislerde yüksekte çalışma, üretim ve emisyon kurallarıyla iç içedir. Bu yazı, sanayi tesislerinde platform planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Hat üstü, baca ve depo işleri",
                    paragraflar: [
                        "Üretim hattı üstü bakım, baca ve kanal kontrolü, depo rafı ve dış cephe işleri farklı erişim gerektirir. Engel aşmalı noktalarda eklemli, açık ve uzak noktalarda teleskopik, tam altından erişilen işlerde makaslı değerlendirilir.",
                        "Üretim kesintisi penceresine uygun makine, geçiş ölçüleri ve iş izin süreci önceden doğrulanır.",
                    ],
                },
                {
                    baslik: "Emisyon ve iş izni",
                    paragraflar: [
                        "Kimya ve gıda tesislerinde emisyon kısıtı olan alanlarda elektrikli, açık saha ve zorlu zeminde dizel modeller değerlendirilir. Sıcak iş izni, gaz ölçümü ve giriş prosedürü işletilir.",
                        "Makine evrakı, operatör yeterliliği ve istenen belgeler teklif öncesinde tesisle karşılıklı doğrulanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Kimya tesisinde hangi güç kaynağı gerekir?", cevap: "Emisyon veya kıvılcım kısıtı olan bölgelerde elektrikli modeller ya da tesisin özel şartlarına uygun makineler değerlendirilir. Şartlar tesis prosedürü ve iş izniyle belirlenir." },
                { soru: "Üretim durmadan bakım yapılabilir mi?", cevap: "Çalışma bölgesi izole edilerek bazı işler üretim sürerken yapılabilir; ancak hat üstü ve riskli işler genellikle planlı duruş penceresinde yürütülür. Karar saha risk değerlendirmesine göre verilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-teleskopik-platform-ile-yuksek-erisim",
            kategori: "Ürün Rehberi",
            baslik: "Bandırma'da Teleskopik Platform ile Yüksek Erişim",
            ozet: "Yüksek yapı, silo ve enerji tesisi işlerinde açık doğrultuda uzun yatay erişim. Teleskopik platformun Bandırma sanayisindeki kullanım alanları.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Bandırma'da yüksek erişim için teleskopik platformla çalışma",
            tarih: "2026-06-24",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'nın liman, enerji ve sanayi sahalarında bazı işler hem yüksek hem uzak noktaya erişim gerektirir. Bu noktada teleskopik platform öne çıkar. Bu yazı, teleskopik platformun kullanım alanlarını ve sınırlarını anlatır.",
            bolumler: [
                {
                    baslik: "Teleskopik ne zaman doğru seçim?",
                    paragraflar: [
                        "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi verir. Makineyi işin uzağına kurmak zorunda olduğunuz açık cephe, silo, baca ve enerji tesisi işlerinde doğru seçimdir.",
                        "Engel aşma kabiliyeti sınırlıdır: bomun önünde yapı varsa eklemliye dönmek gerekir. Uzun bomun salınımı nedeniyle hassas montajda eklemli daha konforlu olabilir.",
                    ],
                },
                {
                    baslik: "Açık saha koşulları",
                    paragraflar: [
                        "Yüksek erişim sınıfları genellikle dizel ve 4x4 modellerle karşılanır; eğim, gevşek zemin ve rüzgâr açık sahada belirleyicidir. Rüzgâr limiti makineye özgüdür ve erişim yükseldikçe önem kazanır.",
                        "Zemin taşıma kapasitesi doğrulanmadan platform yükseltilmez; gerekirse jack sistemi ve çelik plaka değerlendirilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Teleskopik ve eklemli arasında nasıl seçim yaparım?", cevap: "Arada engel varsa eklemli, engel yok ama nokta uzaktaysa teleskopik. Teleskopik açık doğrultuda daha uzun erişim verir; engel aşamaz." },
                { soru: "Teleskopik platform rüzgârdan çok mu etkilenir?", cevap: "Uzayan bom rüzgâr etkisini artırır; rüzgâr limiti makineye özgüdür ve yüksek erişimde önem kazanır. Çalışma öncesinde teknik föy ve bilgi plakası kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-operatorlu-manlift-kiralama-ne-zaman-gerekir",
            kategori: "Ürün Rehberi",
            baslik: "Bandırma'da Operatörlü Manlift Kiralama Ne Zaman Gerekir?",
            ozet: "Liman, tersane ve tesis işlerinde operatörlü mü operatörsüz mü? Yetkinlik, saha oryantasyonu ve belge gereksinimi açısından karar rehberi.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Bandırma'da operatörlü kiralamaya hazır manlift makineleri",
            tarih: "2026-06-21",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'nın liman, tersane ve tesis işlerinde operatör kararı hem güvenliği hem maliyeti etkiler. Bu yazı, operatörlü ve operatörsüz manlift kiralama arasındaki farkı ve karar ölçütlerini anlatır.",
            bolumler: [
                {
                    baslik: "Operatörlü kiralama ne sağlar?",
                    paragraflar: [
                        "Kısa süreli, tek seferlik veya kendi ekibinizde yetkin operatör bulunmayan işlerde operatörlü kiralama hem güvenli hem pratik olur. Liman ve tersane gibi özel sahalarda saha oryantasyonu ve giriş prosedürü de kapsama girer.",
                        "Operatörlü hizmette vardiya, fazla çalışma ve yol-konaklama teklifte ayrı ayrı görülmelidir.",
                    ],
                },
                {
                    baslik: "Operatörsüz kiralamada sorumluluk",
                    paragraflar: [
                        "Operatörsüz kiralamada makineyi kullanacak kişinin yetkinliği ve teslim eğitimi önem kazanır. Operatör belgesi gerekliliği; görev, ekipman sınıfı, işveren prosedürü ve mevzuata göre belirlenir ve yetkili İSG birimi ile resmî kaynaklardan doğrulanır.",
                        "Uzun süreli projelerde kendi yetkin operatörünüzle operatörsüz kiralama ekonomik olabilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Liman sahasında operatörlü kiralama şart mı?", cevap: "Şart değildir ama liman/tersane gibi özel sahalarda ekipmanı ve saha kurallarını tanıyan bir operatörle çalışmak güvenliği artırır. Kendi yetkin ekibiniz varsa operatörsüz de olabilir." },
                { soru: "Operatör belgesi gerekliliği nasıl belirlenir?", cevap: "Görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir; kesin şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-kis-kosullarinda-yuksekte-calisma",
            kategori: "Güvenlik",
            baslik: "Bandırma'da Kış Koşullarında Yüksekte Çalışma",
            ozet: "Rüzgâr, buzlanma ve düşük sıcaklığın liman ve açık saha işlerine etkisi. Kış aylarında manlift kullanımında ek önlemler.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Bandırma'da kış koşullarında açık sahada yükseltici platformla çalışma",
            tarih: "2026-06-18",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'nın liman ve açık sanayi sahaları kışın rüzgâr, buzlanma ve düşük sıcaklıkla daha zorlu hâle gelir. Bu yazı, kış koşullarında manlift kullanımının ek önlemlerini ele alır.",
            bolumler: [
                {
                    baslik: "Rüzgâr ve buzlanma",
                    paragraflar: [
                        "Bandırma'nın rüzgâra açık liman ve kıyı sahalarında kış rüzgârı çalışmayı sık sık durdurabilir; rüzgâr limiti makineye özgüdür ve durdurma kriteri baştan yazılır. Sabah erken saatlerde ve gölgeli alanlarda zemin buzlanması, jack ayaklarının tam temasını engelleyebilir.",
                        "Kurulum öncesi zemin görsel kontrolü ve denge göstergesi kışın daha sık kontrol edilir; gün içinde eriyen kar zemini oynatabilir.",
                    ],
                },
                {
                    baslik: "Ekipman ve çalışan",
                    paragraflar: [
                        "Düşük sıcaklıkta hidrolik yağ koyulaşır; üretici önerdiği ısınma süresine uyulur. Akü performansı düşer, kışın daha kısa çalışma süresi beklenir. Rüzgâr soğuğu yükseklikte belirginleşir; termal giysi ve ısınma molaları planlanır.",
                        "Kısa gün ışığında aydınlatma erken devreye alınır; sisli havada görüş, güvenli çalışmanın ön koşuludur.",
                    ],
                },
            ],
            sss: [
                { soru: "Bandırma'da kışın rüzgâr çalışmayı ne sıklıkla durdurur?", cevap: "Kıyı ve liman sahaları rüzgâra açıktır; durdurma, o günkü rüzgâr değeri ve makinenin limitine bağlıdır. Değer gözle değil, makine limiti ve ölçümle değerlendirilir." },
                { soru: "Soğukta makine ısıtılmalı mı?", cevap: "Evet; düşük sıcaklıkta hidrolik yağ koyulaşır, üreticiler rölantide ısınma süresi önerir. Bu süre atlanıp tam yükle başlanması hidrolik bileşenleri zorlar." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-manlift-kiralarken-saha-kesfi-ve-olcum",
            kategori: "Ürün Rehberi",
            baslik: "Bandırma'da Manlift Kiralarken Saha Keşfi ve Ölçüm",
            ozet: "Doğru makine doğru ölçümle başlar. Çalışma yüksekliği, yatay erişim, engel, zemin ve giriş ölçüleri; Bandırma sahalarında talep dosyası hazırlığı.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Bandırma sahasında manlift için keşif ve erişim ölçümü",
            tarih: "2026-06-15",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'da manlift kiralamanın en sık hatası, sahayı yeterince tarif etmeden makine istemektir. Doğru makine, işin geometrisini doğru ölçmekle başlar. Bu yazı, keşif ve ölçümde kaydedilmesi gerekenleri anlatır.",
            bolumler: [
                {
                    baslik: "Üç değeri ayrı ölçün",
                    paragraflar: [
                        "Çalışma noktasının yüksekliği, makinenin kurulabileceği en yakın sağlam zeminden yatay uzaklık ve arada aşılması gereken engelin konumu ayrı ölçülür. Liman ve tesis sahalarında engel (boru, silo, ekipman) sık bulunur; bu, sınıf seçimini belirler.",
                        "Ölçüler fotoğrafla, başlangıç ve hedef noktası işaretlenerek paylaşılırsa yanlış yorum azalır.",
                    ],
                },
                {
                    baslik: "Zemin ve giriş",
                    paragraflar: [
                        "Liman betonu, mıcır saha, rampa ve açık stok alanı farklı taşıma davranışı gösterir; zemin kapasitesi belirsizse tahmin yürütülmez. Kapı, koridor ve dönüş alanı makinenin nakliye/çalışma ölçüleriyle karşılaştırılır.",
                        "Çevrede süren operasyon, araç trafiği ve varsa enerji hattı da not edilir. Eksiksiz saha dosyası, teklifleri aynı iş tanımıyla karşılaştırmayı sağlar.",
                    ],
                },
            ],
            sss: [
                { soru: "Bandırma'da keşif için sahaya gelinmeli mi?", cevap: "Çoğu talep doğru ölçü ve fotoğrafla uzaktan ön değerlendirilebilir. Karmaşık erişim veya belirsiz zeminde yerinde inceleme gerekip gerekmediği ayrıca kararlaştırılır." },
                { soru: "Liman sahasında zemin nasıl değerlendirilir?", cevap: "Liman betonu genellikle taşıyıcıdır ama mıcır saha, rampa ve stok alanı ayrı değerlendirilir. Kapasite belirsizse saha yetkilisinin görüşü alınır; gerekirse çelik plaka kullanılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-gunluk-haftalik-aylik-manlift-kiralama",
            kategori: "Maliyet",
            baslik: "Bandırma'da Günlük, Haftalık, Aylık Manlift Kiralama",
            ozet: "Kiralama süresinin birim maliyete etkisi ve bölgesel nakliyeyle ilişkisi. Bandırma projelerinde doğru süre planlaması.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Bandırma'da uzun dönem kiralamaya uygun manlift",
            tarih: "2026-06-12",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'da manlift kiralamada süre, birim maliyeti doğrudan etkiler; ayrıca bölgesel nakliyeyle birlikte değerlendirilir. Bu yazı, süre planlamasını ve nakliyeyle ilişkisini ele alır.",
            bolumler: [
                {
                    baslik: "Süre ve nakliye ilişkisi",
                    paragraflar: [
                        "Günlük, haftalık ve aylık kiralamada birim maliyet farklıdır; uzun dönem genellikle daha uygun bir aralığa yerleşir. Bandırma'da Erdek, Gönen veya Biga gibi uzak noktalarda uzun dönem, tekrarlı nakliye maliyetini azaltır.",
                        "'Süre'; çalışma saati, vardiya ve atıl günleri kapsar. Başlangıç-bitiş tarihi ve günlük çalışma saati baştan yazılırsa sürpriz kalem oluşmaz.",
                    ],
                },
                {
                    baslik: "Doğru planlama",
                    paragraflar: [
                        "Kısa ama tekrarlı ihtiyaçlarda toplam gün sayısı, tek seferlik uzun kiralamayla karşılaştırılır; uzak bölgede tekrarlı nakliye maliyeti belirleyici olabilir.",
                        "Kesin oran ve koşullar; makine, çalışma saati sınırı ve nakliye planına göre yazılı teklifte belirtilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Uzak bölgede uzun dönem daha mı mantıklı?", cevap: "Erdek, Gönen, Biga gibi uzak noktalarda uzun dönem kiralama, tekrarlı nakliye maliyetini azaltarak toplam maliyeti düşürebilir. Karar iş süresine ve tekrar sıklığına göre verilir." },
                { soru: "Atıl gün ne demek?", cevap: "Makinenin sahada olup çalışmadığı günlerdir ve genellikle kapsama girer. Bu yüzden başlangıç-bitiş tarihi ve çalışma günleri baştan tanımlanmalıdır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-manlift-teklifinde-nelere-dikkat-edilir",
            kategori: "Maliyet",
            baslik: "Bandırma'da Manlift Teklifinde Nelere Dikkat Edilir?",
            ozet: "Yazılı teklifte görülmesi gereken kalemler ve Bandırma özelinde nakliye, saha izni ve operatör kapsamı.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Bandırma için yazılı teklif hazırlığındaki manlift makineleri",
            tarih: "2026-06-09",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'daki manlift tekliflerini sağlıklı karşılaştırmanın yolu, aynı kalemlerin aynı iş tanımı üzerinden yazılı görülmesidir. Bu yazı, teklifte aranması gereken başlıkları ve bölgesel kalemleri sıralar.",
            bolumler: [
                {
                    baslik: "Teklifte görülmesi gerekenler",
                    paragraflar: [
                        "Ürün sınıfı ve mümkünse marka-model, çalışma saati/sayaç sınırı, operatör kapsamı, gidiş-dönüş nakliye (Bandırma merkez veya Erdek/Gönen/Biga), enerji-yakıt sorumluluğu, ikame koşulu ve ödeme maddeleri ayrı satırlarda görülmelidir.",
                        "Liman/tersane/tesis sahasına giriş için istenen belgeler ve saha oryantasyonu da teklif aşamasında paylaşılmalıdır.",
                    ],
                },
                {
                    baslik: "'Her şey dahil' yerine dahil-hariç",
                    paragraflar: [
                        "Belirsiz ifadeler yerine dahil ve hariç kalemler ayrı yazıldığında farklı teklifler gerçekten karşılaştırılabilir. Nakliye sorumluluğu ve bölgesel mesafe farkı açıkça belirtilmelidir.",
                        "Model belirtilmemişse kabul edilecek teknik sınırlar tanımlanır; sevkten önce model teyidi istenir.",
                    ],
                },
            ],
            sss: [
                { soru: "Bandırma dışı teslimatta nakliye nasıl gösterilmeli?", cevap: "Çıkış noktası, teslimat adresi (Erdek/Gönen/Biga vb.), sorumluluk ve ücret ile dönüş bildirim süresi yazılı teklifte ayrı ayrı belirtilmelidir." },
                { soru: "Teklifte model yoksa ne yapmalı?", cevap: "Kabul edilecek teknik sınırlar (yükseklik, erişim, kapasite) tanımlanmalı; sevkten önce önerilen modelin verileri bu kriterlerle karşılaştırılmalıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-yuksekte-calismada-emniyet-kemeri-ve-ankraj",
            kategori: "Güvenlik",
            baslik: "Bandırma'da Yüksekte Çalışmada Emniyet Kemeri ve Ankraj",
            ozet: "Eklemli ve teleskopik platformlarda fırlama etkisine karşı tam vücut kemeri ve doğru ankraj; makaslıdan farkı ve liman/tersane sahasında uygulama.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Bandırma sahasında yükseltici platformda emniyet donanımıyla çalışma",
            tarih: "2026-06-06",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'nın liman ve tersane sahalarında eklemli ve teleskopik platform kullanımı yaygındır; bu makinelerde fırlama etkisine karşı bağlantı sistemi kritik önem taşır. Bu yazı emniyet kemeri ve ankraj konusunu ele alır.",
            bolumler: [
                {
                    baslik: "Fırlama etkisi ve doğru bağlantı",
                    paragraflar: [
                        "Eklemli/teleskopik platformlarda makine bir çukura girdiğinde veya ani hareket ettiğinde oluşan fırlama etkisi çalışanı korkuluk üzerine taşıyabilir. Üretici talimatına uygun tam vücut kemeri ve bağlantı sistemi kullanılır; kemer, korkuluğa değil işaretli ankraj noktasına bağlanır.",
                        "Yanlış uzunluk veya yanlış bağlantı noktası koruma sistemini işlevsiz bırakır.",
                    ],
                },
                {
                    baslik: "Makaslıdan farkı",
                    paragraflar: [
                        "Makaslı platformda sepet dikey hareket eder; fırlama etkisi yoktur, korkulukları sağlam ve kapısı kapalı makaslıda kemer üretici aksini demedikçe zorunlu değildir.",
                        "Kemer kullanılan her yerde kurtarma planı da gerekir; asılı kalma sarkma travması riski doğurur.",
                    ],
                },
            ],
            sss: [
                { soru: "Liman işinde eklemli platformda kemer şart mı?", cevap: "Eklemli ve teleskopikte fırlama riskine karşı üretici talimatına uygun bağlantı sistemi gerekir. Makaslıda ise korkuluk sağlamsa kemer üretici aksini belirtmedikçe zorunlu değildir." },
                { soru: "Kemer nereye bağlanır?", cevap: "Sepetin korkuluğuna değil, üretici tarafından işaretlenmiş ankraj noktasına. Bu nokta her sepette bulunur ve kullanım kılavuzunda gösterilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-manlift-periyodik-ve-gunluk-kontrol",
            kategori: "Güvenlik",
            baslik: "Bandırma'da Manlift Periyodik ve Günlük Kontrol",
            ozet: "Yıllık periyodik kontrol ile vardiya öncesi günlük kontrol farkı ve kiralık makinede sorumluluk paylaşımı.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Bandırma'da kontrolü yapılmış kiralık manlift",
            tarih: "2026-06-03",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Manlift güvenliğinin iki katmanı vardır: yıllık periyodik kontrol ve vardiya öncesi günlük kontrol. Bu yazı, Bandırma'da kiralık manliftte bu kontrollerin nasıl işlediğini anlatır.",
            bolumler: [
                {
                    baslik: "Periyodik ve günlük kontrol",
                    paragraflar: [
                        "Yükseltici platformlar standartlarda aksi belirtilmedikçe yılda en az bir kez yetkili teknik elemanca periyodik kontrolden geçer; raporun sahada bulunması denetimlerde zaman kazandırır. Her vardiya öncesi operatör fren, acil stop, acil indirme, korkuluk ve denge sensörünü test eder.",
                        "İkisi birbirinin yerine geçmez; günlük kontrol, periyodik kontrolün tamamlayıcısıdır.",
                    ],
                },
                {
                    baslik: "Kiralıkta sorumluluk paylaşımı",
                    paragraflar: [
                        "Periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracının sorumluluğundadır. Bu paylaşımın sözleşmede yazılı olması iki tarafı da korur.",
                        "Raporun bir kopyasının makineyle sahada bulunması, liman/tesis denetimlerinde önemlidir.",
                    ],
                },
            ],
            sss: [
                { soru: "Kiralık manliftte kontrol raporu kimde?", cevap: "Periyodik kontrol raporunu kiraya veren sağlar ve makineyle birlikte sahada bulunmalıdır; günlük vardiya öncesi kontrol kiracıya aittir." },
                { soru: "Günlük kontrol neden önemli?", cevap: "Ciddi kazaların önemli bölümü günlük kontrolde yakalanabilecek arızalardan çıkar. Fren, acil stop, acil indirme ve denge sensörü her vardiya öncesi test edilip kaydedilir." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-makasli-mi-eklemli-mi-secim",
            kategori: "Karşılaştırma",
            baslik: "Bandırma'da Makaslı mı, Eklemli mi? İş Tipine Göre Seçim",
            ozet: "Depo ve tavan işinde makaslı, silo ve ekipman arkası erişimde eklemli. Bandırma sanayisinde iş tipine göre platform seçimi.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Bandırma'da makaslı ve eklemli platform seçimi",
            tarih: "2026-05-31",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'daki işlerin geometrisi makaslı ve eklemli arasındaki seçimi belirler. Bu yazı, iş tipine göre doğru sınıfı ayırt etmeyi anlatır.",
            bolumler: [
                {
                    baslik: "Tam altından erişim: makaslı",
                    paragraflar: [
                        "Depo tavanı, aydınlatma, raf ve düz cephe gibi tam altından erişilen işlerde makaslı platform ilk tercihtir; geniş sepetiyle birden fazla çalışan malzemeyle yükselir.",
                        "Gıda ve hassas tesislerde elektrikli makaslı sıfır emisyonla vardiya içinde çalışır.",
                    ],
                },
                {
                    baslik: "Engel arkası: eklemli",
                    paragraflar: [
                        "Silo çevresi, boru köprüsü ve ekipman arkası erişimde makaslı yetersiz kalır; eklemlinin engel aşan bomu gerekir. Bandırma'nın liman ve tesis sahalarında bu tür engelli erişim sıktır.",
                        "Seçim işin geometrisine göre yapılır; aynı projede iki tip de gerekebilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Depo işinde hangi platform?", cevap: "Tam altından erişilen tavan/raf işlerinde makaslı yeterlidir; kanal veya ekipman engelinin arkasına erişim gerekiyorsa eklemli değerlendirilir." },
                { soru: "İki tip aynı projede kullanılır mı?", cevap: "Evet; farklı iş kalemleri farklı sınıf gerektirebilir. Kombine kiralama tek organizasyonla maliyeti düşürür." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-elektrikli-mi-dizel-mi-platform",
            kategori: "Karşılaştırma",
            baslik: "Bandırma'da Elektrikli mi, Dizel mi Platform?",
            ozet: "İç mekân gıda/tesis işinde elektrikli, açık liman/tersane sahasında dizel. Bandırma koşullarında güç kaynağı seçimi.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Bandırma'da elektrikli ve dizel platform seçimi",
            tarih: "2026-05-28",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'da güç kaynağı seçimi çalışma ortamına göre değişir: kapalı gıda/tesis alanında elektrikli, açık liman ve tersane sahasında dizel. Bu yazı bu seçimi ele alır.",
            bolumler: [
                {
                    baslik: "Kapalı alan: elektrikli",
                    paragraflar: [
                        "Gıda tesisi, depo ve kapalı üretim alanlarında sıfır emisyon ve düşük gürültü nedeniyle elektrikli modeller kullanılır; iz bırakmayan lastik hassas zemine zarar vermez. Şarj altyapısı ve vardiya planı baştan kurulur.",
                        "Düşük sıcaklıkta akü performansı düşer; kış vardiyası buna göre planlanır.",
                    ],
                },
                {
                    baslik: "Açık saha: dizel",
                    paragraflar: [
                        "Liman, tersane ve açık sanayi sahasında dizel modeller 4x4 çekiş ve jack sistemiyle eğim ve gevşek zeminde güvenilirdir; yakıt ikmali hızlıdır. Kapalı alanda egzoz nedeniyle kullanılmaz.",
                        "Doğru güç kaynağı, makine tipiyle birlikte saha koşuluna göre seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Gıda tesisinde dizel kullanılır mı?", cevap: "Kapalı ve emisyona duyarlı gıda alanlarında elektrikli modeller tercih edilir; dizel açık saha içindir. Kapalı alanda dizel egzozu risk oluşturur." },
                { soru: "Liman sahasında elektrikli çalışır mı?", cevap: "Kısa süreli ve düz zeminli kullanım mümkün olsa da açık saha, eğim ve rüzgâr koşullarında dizel modeller daha güvenilirdir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-telehandler-mi-manlift-mi",
            kategori: "Karşılaştırma",
            baslik: "Bandırma'da Telehandler mı, Manlift mi?",
            ozet: "Yük taşımak mı, personeli çalıştırmak mı? Bandırma tesis ve şantiye işlerinde telehandler ile personel yükseltici arasındaki fark.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Bandırma sahasında telehandler ve manlift karşılaştırması",
            tarih: "2026-05-25",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'nın şantiye ve tesis işlerinde telehandler ile manlift (personel yükseltici) sık karıştırılır. İkisi aynı yüksekliğe ulaşsa da farklı işler için tasarlanmıştır. Bu yazı farkı açıklar.",
            bolumler: [
                {
                    baslik: "Farklı amaçlar",
                    paragraflar: [
                        "Telehandler temelde yük taşır: bomuyla malzemeyi ileri ve yukarı ulaştırır. Manlift ise insanı korkuluklu sepette çalışma noktasına konumlandırır. Doğru soru 'kaç metre?' değil, 'ana faaliyet yük mü, personel mi?' sorusudur.",
                        "İki faaliyet birlikteyse tek makineyi zorlamak yerine iş kalemleri ayrılır.",
                    ],
                },
                {
                    baslik: "Güvenlik",
                    paragraflar: [
                        "Telehandler'a insan sepeti takmak ancak üreticinin onayladığı konfigürasyonda ve yük tablosuna uyularak değerlendirilir; birçok modelde sepetten kumanda yoktur. Sürekli yüksekte çalışmada gerçek personel yükseltici hem daha güvenli hem daha verimlidir.",
                        "Forklift, telehandler ve personel yükseltici üç ayrı sınıftır ve birbirinin yerine kullanılmaz.",
                    ],
                },
            ],
            sss: [
                { soru: "Telehandler ile personel yükseltebilir miyim?", cevap: "Ancak üreticinin onayladığı sepet konfigürasyonu ve yük tablosuna uyumla; sınırlıdır. Sürekli yüksekte çalışmada gerçek personel yükseltici tercih edilir." },
                { soru: "Bandırma'da hangisi gerekir?", cevap: "İşin ana faaliyeti yük taşımaksa telehandler, personel çalıştırmaksa manlift. İki faaliyet birlikteyse iş kalemleri ayrılıp iki makine kullanılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-enerji-tesisi-bakiminda-yuksek-erisim",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Enerji Tesisi Bakımında Yüksek Erişim",
            ozet: "Enerji üretim ve dağıtım tesislerinde yüksek erişim, enerji hatlarına yaklaşma sınırı ve saha izinleri. Bandırma enerji sahalarında platform seçimi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Bandırma enerji tesisinde yüksek erişim için yükseltici platform",
            tarih: "2026-05-22",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma ve çevresindeki enerji tesisleri hem yüksek erişim hem özel güvenlik koşulları gerektirir. Bu yazı, enerji sahalarında platform seçimini ve enerji hattı güvenliğini ele alır.",
            bolumler: [
                {
                    baslik: "Enerji hatlarına yaklaşma sınırı",
                    paragraflar: [
                        "Enerjili hatların yakınında hat gerilimine göre tanımlı bir güvenli yaklaşma mesafesi vardır. Bom hareket zarfı üç boyutludur; yandan güvenli görünen hat, bom uzayınca tehlike mesafesine girebilir.",
                        "Güvenli mesafe sağlanamıyorsa hat sahibinden kesinti veya izolasyon istenmeden iş açılmaz.",
                    ],
                },
                {
                    baslik: "Yüksek erişim ve saha izni",
                    paragraflar: [
                        "Yüksek erişim işlerinde genellikle dizel ve 4x4 modeller kullanılır; açık sahada rüzgâr limiti belirleyicidir. Enerji tesisleri çalışma izni, operatör yeterliliği ve giriş prosedürü ister.",
                        "Makine evrakı ve saha kuralları teklif öncesinde tesisle karşılıklı doğrulanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Enerji hattına ne kadar yaklaşılabilir?", cevap: "Güvenli mesafe hat gerilimine göre değişir ve tesis/dağıtım şirketi prosedürüne tabidir. Belirsizlikte hat yetkilisinden yazılı mesafe veya kesinti talep edilmelidir." },
                { soru: "Enerji tesisinde hangi platform sınıfı?", cevap: "Erişim yüksekliğine göre değişir; yüksek erişimde genellikle dizel/4x4 modeller kullanılır. Rüzgâr limiti ve iş izni çalışma öncesinde kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-silo-ve-tarim-tesisinde-yuksekte-calisma",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Silo ve Tarım Tesisinde Yüksekte Çalışma",
            ozet: "Yem, gübre ve tarımsal depolama tesislerinde silo çevresi, elevatör ve depo işlerinde erişim. Toz, yükseklik ve engel koşullarında platform seçimi.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Bandırma'da silo ve tarım tesisinde yükseltici platformla çalışma",
            tarih: "2026-05-19",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'nın tarımsal sanayisi silo, yem ve gübre tesisleriyle şekillenir. Silo çevresi ve elevatör işleri, yükseklik ve engel nedeniyle özel erişim gerektirir. Bu yazı bu işlerdeki platform seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Silo çevresi ve elevatör",
                    paragraflar: [
                        "Silo dış yüzeyi, elevatör ve bağlantı yapılarına erişim çoğu zaman engel aşmalıdır; eklemli veya teleskopik platform değerlendirilir. Yüksek silolarda teleskopiğin uzun erişimi öne çıkar.",
                        "Toz yoğun ortamda günlük kontrolde filtre ve hareketli parçalara dikkat edilir.",
                    ],
                },
                {
                    baslik: "Zemin ve depo işleri",
                    paragraflar: [
                        "Tesis içi depo tavan ve raf işlerinde makaslı platform yeterli olabilir. Açık saha ve mıcır zeminde dizel modeller, taşıma kapasitesi doğrulanarak kullanılır.",
                        "Mevsimsel yoğunluk (hasat dönemi) teslimat planını etkiler; erken planlama önerilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Silo dış yüzeyine nasıl erişilir?", cevap: "Silo çevresi genellikle engelli ve yüksektir; eklemli veya teleskopik platform değerlendirilir. Yüksek silolarda teleskopiğin uzun erişimi, engelli noktalarda eklemlinin bomu tercih edilir." },
                { soru: "Tozlu ortamda ek önlem gerekir mi?", cevap: "Toz yoğun tarım tesislerinde günlük kontrolde filtre, hareketli parça ve elektrik bağlantılarına ek dikkat gösterilir; üretici bakım talimatı esastır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-gida-tesisinde-ic-mekan-platform-kullanimi",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Gıda Tesisinde İç Mekân Platform Kullanımı",
            ozet: "Hijyen kuralları, sıfır emisyon ve iz bırakmayan lastikle gıda üretim tesislerinde yüksekte çalışma. Vardiya ve temizlik koşullarına uyum.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Bandırma gıda tesisinde elektrikli platformla iç mekân çalışması",
            tarih: "2026-05-16",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'nın gıda üretim tesislerinde yüksekte çalışma, hijyen ve emisyon kurallarıyla iç içedir. Bu yazı, gıda tesislerinde iç mekân platform kullanımının inceliklerini ele alır.",
            bolumler: [
                {
                    baslik: "Sıfır emisyon ve hijyen",
                    paragraflar: [
                        "Gıda üretim alanlarında sıfır emisyon ve düşük gürültü nedeniyle elektrikli platformlar kullanılır; iz bırakmayan lastikler epoksi ve hijyenik zemine zarar vermez. Makinenin temizlik ve hijyen kurallarına uygunluğu talep dosyasına eklenir.",
                        "Vardiya içinde çalışma mümkündür; çalışma bölgesi üretimden ayrılır.",
                    ],
                },
                {
                    baslik: "Tavan ve hat üstü işleri",
                    paragraflar: [
                        "Tavan tesisatı, aydınlatma, havalandırma ve hat üstü bakımda tam altından erişilen işlerde makaslı, engel aşmalı noktalarda eklemli değerlendirilir.",
                        "Zeminin taşıma kapasitesi ve dilatasyon noktaları kontrol edilir; koridor ve kapı ölçüleri makineyle karşılaştırılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Gıda tesisinde vardiya sırasında çalışılabilir mi?", cevap: "Elektrikli platformlar sıfır emisyon ve düşük gürültüsüyle vardiya içinde çalışabilir; çalışma bölgesi üretimden ayrılır ve hijyen kurallarına uyulur." },
                { soru: "Hangi lastik kullanılmalı?", cevap: "Epoksi ve hijyenik zeminlerde iz bırakmayan (beyaz) lastik tercih edilir; makinenin hijyen uygunluğu talep dosyasında belirtilir." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-sepet-kapasitesi-ve-calisma-diyagrami",
            kategori: "Ürün Rehberi",
            baslik: "Bandırma'da Sepet Kapasitesi ve Çalışma Diyagramı",
            ozet: "Azami değerler her konumda birlikte geçerli değildir. Çalışma diyagramı ve kalan sepet kapasitesini doğru okuma; Bandırma işlerinde uygulama.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Yükseltici platform sepetinde personel ve malzeme yükü",
            tarih: "2026-05-13",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'da manlift kiralarken teklifte yalnız yükseklik yazması yeterli değildir; azami erişim ve azami yük çoğu zaman aynı anda kullanılamaz. Bu yazı, çalışma diyagramını ve kalan kapasiteyi doğru okumayı anlatır.",
            bolumler: [
                {
                    baslik: "Çalışma diyagramı",
                    paragraflar: [
                        "Çalışma diyagramı, bomun ulaşabildiği her nokta için izin verilen sepet yükünü gösterir; erişim uzadıkça izin verilen yük düşer. Bu yüzden hedef konumdaki kalan kapasite, işin en zorlu noktasına göre kontrol edilir.",
                        "Model belli değilse teklifte performans aralığı ve kabul kriterleri tanımlanır.",
                    ],
                },
                {
                    baslik: "Sepet yükünü hesaplamak",
                    paragraflar: [
                        "Sepet yükü personel + el aleti + malzemedir; geniş yüzeyli malzeme ayrıca rüzgâr etkisini artırır. En yüksek + en uzak + en ağır kombinasyonu belirlenir ve seçilen modelin çalışma zarfı içinde kaldığı teknik föyden teyit edilir.",
                        "Payı büyük makineyle değil, doğru modelle bırakmak gerekir.",
                    ],
                },
            ],
            sss: [
                { soru: "Neden azami yükseklik ve erişim birlikte kullanılamıyor?", cevap: "Bom uzadıkça denge ve yapısal sınırlar nedeniyle izin verilen yük ve erişim değişir. Çalışma diyagramı her konum için izin verilen değeri gösterir." },
                { soru: "Kalan kapasiteyi nasıl öğrenirim?", cevap: "Seçilen modelin çalışma diyagramından, işin hedef noktasındaki değeri okunur; model belli değilse kabul kriterleri tanımlanıp sevkten önce teyit edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-manlift-nakliye-ve-sevkiyat-planlamasi",
            kategori: "Maliyet",
            baslik: "Bandırma'da Manlift Nakliye ve Sevkiyat Planlaması",
            ozet: "Bölgesel rota, tesis kabul saati, indirme alanı ve nakliye ölçüsü. Bandırma ve çevresinde sevkiyatta sık yapılan hatalar.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Bandırma'da manlift teslimatı ve sevkiyat hazırlığı",
            tarih: "2026-05-10",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'da manlift sevkiyatı, bölgesel mesafe ve saha koşullarıyla planlanır. Yanlış planlanmış bir teslimat, makinenin sahaya girememesi gibi pahalı hatalara yol açar. Bu yazı, sevkiyat planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Rota ve saha kabulü",
                    paragraflar: [
                        "Nakliye; çıkış noktası ile Bandırma merkez, Erdek, Gönen veya Biga arasındaki mesafe, güzergâh, tesis kabul saati ve indirme alanına göre planlanır. Nakliye aracının tesis kapısından dönüşü ve boşaltma alanının uygunluğu önceden sorulur.",
                        "Liman/tersane sahalarında kantar, güvenlik kapısı ve randevu süreçleri de plana girer.",
                    ],
                },
                {
                    baslik: "Nakliye ölçüsü ≠ çalışma ölçüsü",
                    paragraflar: [
                        "Makinenin nakliye konumundaki ölçüsü çalışma konumundan farklı olabilir; korkuluk katlama ve bom konumu değiştirir. Kapı, koridor, rampa ve dönüş cebi taşıma ölçüleriyle karşılaştırılır.",
                        "Uzak veya özel rotada dönüş bildirim süresi de plana ve fiyata girer; nakliye sorumluluğu yazılı teklifte belirtilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Erdek/Gönen/Biga teslimatı nasıl planlanır?", cevap: "Mesafe, güzergâh, kabul saati ve indirme alanı önceden teyit edilir; sezon trafiği ve tesis randevusu plana eklenir. Nakliye ücreti ve sorumluluğu yazılı teklifte yer alır." },
                { soru: "Makine sahaya sığmazsa?", cevap: "Bu yüzden nakliye ölçüsü (katlı korkuluk, bom konumu) kapı-koridor-rampa ölçüleriyle önceden karşılaştırılır. Doğru ölçü paylaşımı pahalı hataları önler." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-yukseklik-siniflari-16-43-metre-secimi",
            kategori: "Ürün Rehberi",
            baslik: "Bandırma'da Yükseklik Sınıfları: 16-43 Metre Nasıl Seçilir?",
            ozet: "İç mekân orta yükseklikten yüksek endüstriyel erişime kadar sınıf seçimi. Bandırma tesis ve liman işlerinde doğru yükseklik sınıfı.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Bandırma'da farklı yükseklik sınıfında yükseltici platformlar",
            tarih: "2026-05-07",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'da manlift kiralarken 'kaç metre?' sorusu tek başına yeterli değildir; aynı yükseklikte farklı erişim ve kapasite bulunur. Bu yazı, yükseklik sınıflarını ayırt eden ölçütleri anlatır.",
            bolumler: [
                {
                    baslik: "16-20 metre: iç mekân ve orta yükseklik",
                    paragraflar: [
                        "Fabrika içi tesisat, depo tavanı ve orta yükseklikteki cephe işlerini karşılar; elektrikli modeller bu sınıfta yaygındır. Dar şasi standart geçişlere uygundur, ancak yatay erişim sınırlıdır.",
                        "Engelin çok ötesine uzanılması gereken işlerde bir üst sınıf değerlendirilir.",
                    ],
                },
                {
                    baslik: "28-43 metre: yüksek endüstriyel erişim",
                    paragraflar: [
                        "Yüksek yapı cephesi, silo, baca ve çelik montaj işleri içindir; genellikle dizel ve 4x4 modellerle karşılanır. Açık sahada eğim ve rüzgâr belirleyicidir.",
                        "Erişim arttıkça sepet yükü ve rüzgâr limiti değişir; çalışma diyagramı model bazında okunur. Sınıf, işin en zorlu noktasına göre seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "16 metre Bandırma'da hangi işlere yeter?", cevap: "Fabrika içi tesisat, depo tavanı ve orta yükseklikteki cephe işlerine genellikle yeterlidir. Yüksek silo, baca veya cephe işlerinde 28-43 metre sınıfı değerlendirilir." },
                { soru: "Yükseklik arttıkça sepet kapasitesi düşer mi?", cevap: "Evet; erişim ve yükseklik arttıkça izin verilen sepet yükü değişebilir. Seçilen modelin çalışma diyagramından kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-dikey-personel-yukseltici-ile-dar-alan-isleri",
            kategori: "Ürün Rehberi",
            baslik: "Bandırma'da Dikey Personel Yükseltici ile Dar Alan İşleri",
            ozet: "Mağaza, depo raf arası ve dar koridorlarda tekil erişim için dikey personel yükseltici. Çevik, hafif ve dar tabanlı çözümün kullanım alanları.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Bandırma'da dar koridorda dikey personel yükselticiyle çalışma",
            tarih: "2026-05-04",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'daki mağaza, depo ve tesislerde her iş geniş makaslı gerektirmez. Tekil, hafif ve dar koridorlu işlerde dikey personel yükseltici çevik bir çözümdür. Bu yazı bu sınıfın kullanım alanlarını anlatır.",
            bolumler: [
                {
                    baslik: "Dikey personel yükseltici ne için?",
                    paragraflar: [
                        "Tek kişilik, dar tabanlı ve dikey hareket eden bu sınıf; depo raf sayımı, mağaza içi aydınlatma ve dar koridorlu tesis bakımı gibi tekil, hafif ve tam altından erişilen işlerde öne çıkar. Geniş makaslıya göre daha çevik ve ekonomik olabilir.",
                        "Yük ve alan geniş değilse hem manevra hem maliyet avantajı sağlar.",
                    ],
                },
                {
                    baslik: "Sınırları",
                    paragraflar: [
                        "Kapasite ve erişim sınırları dardır; birden fazla çalışan, ağır malzeme veya engel aşma gerektiren işlerde yetersiz kalır. Bu durumda makaslı veya eklemli değerlendirilir.",
                        "Kapı ölçüsü, zemin ve çalışma yüksekliği teknik föyle teyit edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Dikey personel yükseltici kaç kişilik?", cevap: "Genellikle tek kişiliktir ve hafif yük içindir. Birden fazla çalışan veya ağır malzeme gerektiren işlerde makaslı platform değerlendirilir." },
                { soru: "Dar mağaza koridorunda kullanılır mı?", cevap: "Evet; dar tabanı ve çevikliğiyle mağaza ve depo koridorlarında tekil erişim için uygundur. Kapı ve koridor ölçüsü makineyle karşılaştırılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "bandirmada-dis-cephe-temizligi-ve-boya-isinde-platform",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da Dış Cephe Temizliği ve Boya İşinde Platform",
            ozet: "Bina ve tesis dış cephesinde temizlik, boya ve kaplama işleri için erişim. Peyzaj, saçak ve yükseklik koşullarında doğru sınıf.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Bandırma'da dış cephe boya ve temizlik işinde yükseltici platform",
            tarih: "2026-05-01",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Bandırma'da bina ve tesis dış cephelerinde temizlik, boya ve kaplama işleri düzenli olarak yapılır. Bu işlerde peyzaj, saçak ve yükseklik erişim sınıfını belirler. Bu yazı cephe işlerinde platform seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Cephe önü engelli mi?",
                    paragraflar: [
                        "Cephe önünde peyzaj, saçak veya çıkıntı varsa eklemli platformun engel aşan bomu gerekir; düz ve açık cephede makaslı yeterli olabilir. Yüksek ve uzak noktada teleskopik değerlendirilir.",
                        "Boya ve temizlik işinde sepette taşınan ekipman ve malzeme sepet kapasitesine dâhil edilir.",
                    ],
                },
                {
                    baslik: "Rüzgâr ve zemin",
                    paragraflar: [
                        "Açık cephede rüzgâr limiti makineye özgüdür; boya işinde rüzgâr ayrıca sıçrama nedeniyle iş kalitesini etkiler. Zeminin taşıma kapasitesi ve peyzaj yüzeyleri kontrol edilir.",
                        "Faaliyet süren binalarda çalışma alanı ayrılır ve alt alan korunur.",
                    ],
                },
            ],
            sss: [
                { soru: "Cephe boyası için hangi platform?", cevap: "Cephe önü açıksa makaslı, engel (saçak, peyzaj) varsa eklemli, yüksek/uzak noktada teleskopik değerlendirilir. Rüzgâr hem güvenlik hem iş kalitesi için kontrol edilir." },
                { soru: "Rüzgâr boya işini etkiler mi?", cevap: "Evet; rüzgâr hem makine limiti açısından hem boya sıçraması nedeniyle iş kalitesini etkiler. Durdurma kriteri baştan belirlenir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-insaat-santiyesinde-yuksekte-calisma",
            kategori: "Şehir & Sektör",
            baslik: "Bandırma'da İnşaat Şantiyesinde Yüksekte Çalışma",
            ozet: "Yapı, çelik montaj ve inşaat işlerinde açık saha erişimi. Zemin, rüzgâr ve iş güvenliği koşullarında şantiyede platform kullanımı.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Bandırma inşaat şantiyesinde yükseltici platform ve forklift",
            tarih: "2026-04-28",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'daki inşaat ve yapı şantiyeleri, açık saha koşullarında yüksekte çalışma gerektirir. Zemin, rüzgâr ve iş güvenliği bir arada yönetilir. Bu yazı şantiyede platform kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Şantiye zemini ve makine",
                    paragraflar: [
                        "Şantiye zemini genellikle dolgu, mıcır veya eğimlidir; dizel 4x4 modeller ve jack sistemi bu koşullarda kullanılır. Taşıma kapasitesi belirsizse tahmin yürütülmez, gerekirse çelik plaka serilir.",
                        "Çelik montaj ve yapı elemanı erişiminde eklemli/teleskopik, düz erişimde makaslı değerlendirilir.",
                    ],
                },
                {
                    baslik: "Güvenlik ve organizasyon",
                    paragraflar: [
                        "Rüzgâr limiti, alan izolasyonu, gözcü ve kurtarma planı şantiyede standart önlemlerdir. Çalışma bölgesi araç ve vinç trafiğinden ayrılır.",
                        "İş izni ve operatör yeterliliği saha kurallarına göre yönetilir; büyük açıklıklı montajda güvenlik ağı gibi toplu koruma birlikte planlanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Şantiye dolgu zemininde platform çalışır mı?", cevap: "Dizel 4x4 modeller dolgu ve eğimli zeminde kullanılabilir, ancak taşıma kapasitesi doğrulanmalıdır. Belirsizse çelik plaka serilir veya saha yetkilisinin görüşü alınır." },
                { soru: "Çelik montajda platform tek başına yeter mi?", cevap: "Büyük açıklıklı montajlarda platform, güvenlik ağı gibi toplu koruma sistemleriyle birlikte planlanır. Makine seçimi iş metodunun parçasıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "bandirmada-sarkma-travmasi-ve-kurtarma-plani",
            kategori: "Güvenlik",
            baslik: "Bandırma'da Sarkma Travması ve Kurtarma Planı",
            ozet: "Kemerle düşmeyi durdurmak yalnız ilk adımdır. Asılı kalma dakikalar içinde hayati risk oluşturur; her yüksekte çalışma için kurtarma planı neden zorunlu?",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Bandırma'da yükseltici platformda güvenli çalışma ve kurtarma hazırlığı",
            tarih: "2026-04-25",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Bandırma'nın liman, tersane ve şantiye işlerinde kemer kullanımı yaygındır; ancak kemerle düşmeyi durdurmak tehlikenin sonu değildir. Asılı kalma dakikalar içinde ciddi risk oluşturur. Bu yazı sarkma travmasını ve kurtarma planını anlatır.",
            bolumler: [
                {
                    baslik: "Asılı kalma neden tehlikeli?",
                    paragraflar: [
                        "Kemerle asılı kalan kişide bacak kayışları kan dolaşımını kısıtlar; kan bacaklarda birikir ve kalbe dönüşü azalır. Dakikalar içinde baş dönmesi, bilinç kaybı ve tedavisiz kalırsa hayati tehlike doğar.",
                        "Risk, düşmeden değil, kurtarmanın gecikmesinden kaynaklanır.",
                    ],
                },
                {
                    baslik: "Kurtarma planı zorunlu",
                    paragraflar: [
                        "Her yüksekte çalışma için önceden planlanmış kurtarma prosedürü gerekir: asılı kalan kişiye kaç dakikada, hangi ekipmanla ulaşılacağı belirlenir. Sahadaki yükseltici platform çoğu durumda en hızlı kurtarma aracıdır.",
                        "112'yi beklemek tek başına yeterli değildir; plan yazılı olmalı, ekipte en az bir kişi uygulayabilecek şekilde eğitilmeli ve tatbik edilmelidir.",
                    ],
                },
            ],
            sss: [
                { soru: "Sarkma travması ne kadar sürede kritik olur?", cevap: "Kaynaklarda belirtilerin dakikalar içinde başlayabileceği belirtilir; süre kişiye ve koşullara göre değişir. Kurtarma ne kadar hızlıysa risk o kadar azalır. Bu içerik tıbbi tavsiye değildir." },
                { soru: "Liman/şantiye sahasında kurtarma planı şart mı?", cevap: "Yüksekte çalışma riski taşıyan her sahada, düşme durumunda hızlı müdahale yöntemi önceden planlanmış olmalıdır. Sahadaki platform çoğu durumda en hızlı kurtarma aracıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
    ],
    "izmirforklift.net": [
        {
            slug: "izmirde-forklift-kiralama-kapasite-secimi-rehberi",
            kategori: "Ürün Rehberi",
            baslik: "İzmir'de Forklift Kiralama: Doğru Kapasite Nasıl Seçilir?",
            ozet: "Yük ağırlığı, yük merkezi, kaldırma yüksekliği ve zemin. İzmir depo ve üretim sahalarında forklift kapasitesini belirleyen ölçütler.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir deposunda forklift ile palet elleçleme",
            tarih: "2026-07-19",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "İzmir'de forklift kiralarken 'kaç ton?' sorusu tek başına yetmez. Doğru kapasite; yükün ağırlığı kadar ağırlık merkezine, kaldırma yüksekliğine ve zemine göre belirlenir. Bu rehber, Kemalpaşa'dan Aliağa'ya İzmir sahalarında forklift seçimini anlatır.",
            bolumler: [
                {
                    baslik: "Etikette yazan ton yeterli değil",
                    paragraflar: [
                        "Forklift kapasitesi, belirli bir yük merkezi (genellikle 500 mm) için verilir. Yükün ağırlık merkezi çatal yüzünden uzaklaştıkça kaldırılabilecek gerçek yük düşer. Uzun veya hacimli yüklerde nominal kapasiteye bakıp seçim yapmak hatalıdır.",
                        "Kaldırma yüksekliği de kapasiteyi etkiler: raf üst kotunda kalan kapasite, zemindekinden düşük olabilir. Bu değer yük merkezi tablosundan kontrol edilir.",
                    ],
                },
                {
                    baslik: "İzmir sahalarında zemin ve koridor",
                    paragraflar: [
                        "Kemalpaşa, Torbalı, Çiğli ve Aliağa'daki depo ve üretim alanlarında zemin, koridor genişliği ve kapı yüksekliği makine seçimini belirler. Dar koridorda dönüş yarıçapı, kapalı alanda asansör serbest kaldırma ihtiyacı değerlendirilir.",
                        "Kapalı üretim alanında elektrikli, açık stok ve rampa işinde dizel/LPG modeller değerlendirilir; seçim saha koşuluna göre yapılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift kapasitesi neden yük merkezine bağlı?", cevap: "Kapasite belirli bir yük merkezi için verilir; yük çataldan uzaklaştıkça devrilme momenti artar ve kaldırılabilecek gerçek yük düşer. Uzun/hacimli yüklerde yük merkezi tablosu kontrol edilir." },
                { soru: "İzmir'de hangi forklift türü depo içine uygun?", cevap: "Kapalı depo ve üretim alanında sıfır emisyon ve düşük gürültüsüyle elektrikli forklift uygundur; açık stok ve rampa işlerinde dizel/LPG modeller değerlendirilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmir-osb-lerinde-forklift-ihtiyaci-kemalpasa-torbali-aliaga",
            kategori: "Şehir & Sektör",
            baslik: "İzmir OSB'lerinde Forklift İhtiyacı: Kemalpaşa, Torbalı, Aliağa",
            ozet: "İzmir'in üretim coğrafyasında forklift kullanımı: gıda, mobilya, kimya ve ağır sanayi sahalarında elleçleme ihtiyaçları ve makine seçimi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "İzmir OSB sahasında forklift ile yükleme-boşaltma",
            tarih: "2026-07-16",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "İzmir'in üretim coğrafyası Kemalpaşa, Torbalı, Çiğli ve Aliağa hattında yoğunlaşır. Her bölgenin sektörel ağırlığı forklift ihtiyacını da farklılaştırır. Bu yazı, İzmir OSB'lerinde elleçleme ihtiyaçlarını ve makine seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Bölgeye göre değişen ihtiyaç",
                    paragraflar: [
                        "Kemalpaşa ve Torbalı'nın gıda, mobilya ve lojistik ağırlıklı depolarında palet trafiği ve raf besleme öne çıkar; kapalı alanda elektrikli forklift yaygındır. Aliağa'nın ağır sanayi ve liman sahalarında ise açık saha, rampa ve ağır yük için dizel modeller değerlendirilir.",
                        "Çiğli ve çevresindeki üretim ve e-ticaret depolarında yükleme-boşaltma ve konteyner elleçleme ihtiyaçları belirleyicidir.",
                    ],
                },
                {
                    baslik: "OSB saha koşulları",
                    paragraflar: [
                        "OSB kabul saati, rampa randevusu, ağır araç güzergâhı ve zemin koşulu makine ve teslimat planını etkiler. Depo betonu, epoksi kaplama ve açık stok alanı farklı taşıma davranışı gösterir.",
                        "Periyodik kontrol, saha giriş belgeleri ve operatör yeterliliği sözleşme öncesinde teyit edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Aliağa'da hangi forklift türü uygun?", cevap: "Ağır sanayi ve liman sahasında açık saha, rampa ve ağır yük için dizel forkliftler değerlendirilir. Kapalı ve emisyona duyarlı alanlarda elektrikli modeller tercih edilir." },
                { soru: "Kemalpaşa gıda deposunda elektrikli forklift olur mu?", cevap: "Evet; kapalı gıda ve lojistik depolarında sıfır emisyon ve düşük gürültüsüyle elektrikli forklift uygundur. Şarj altyapısı ve vardiya planı baştan kurulur." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmirde-elektrikli-mi-dizel-mi-forklift-secimi",
            kategori: "Karşılaştırma",
            baslik: "İzmir'de Elektrikli mi, Dizel mi Forklift?",
            ozet: "Kapalı depo mu, açık stok/rampa mı? Emisyon, gürültü, şarj/yakıt ve zemin açısından İzmir sahalarında forklift güç kaynağı seçimi.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir'de elektrikli ve dizel forklift karşılaştırması",
            tarih: "2026-07-13",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "İzmir'de forklift güç kaynağı seçimi çalışma ortamına göre değişir: kapalı üretim ve depo alanında elektrikli, açık stok ve rampa işinde dizel. Bu yazı bu seçimi ele alır.",
            bolumler: [
                {
                    baslik: "Kapalı alan: elektrikli",
                    paragraflar: [
                        "Kapalı depo ve üretim alanında sıfır emisyon ve düşük gürültü nedeniyle elektrikli forklift kullanılır; havalandırması sınırlı alanda içten yanmalı motor egzozu risk oluşturur. Şarj süresi ve vardiya planı baştan kurulur, yakında uygun voltajda priz gerekir.",
                        "Elektrikli modeller düz ve taşıyıcı depo zemininde çeviktir; triplex asansörle kapalı alanda yüksek raf beslenir.",
                    ],
                },
                {
                    baslik: "Açık saha: dizel/LPG",
                    paragraflar: [
                        "Açık stok, rampa ve ağır yük işlerinde dizel veya LPG modeller güç ve hız avantajı sağlar; yakıt ikmali hızlıdır. Kapalı alanda emisyon nedeniyle kullanılmaz.",
                        "Doğru güç kaynağı; zemin, vardiya, emisyon kuralı ve yük özelliğine göre seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Depo içinde dizel forklift kullanılır mı?", cevap: "Havalandırması sınırlı kapalı alanda dizel egzozu risk oluşturur; kapalı depoların standart çözümü elektrikli forkliftlerdir. Dizel açık saha ve rampa içindir." },
                { soru: "Elektrikli forkliftin şarjı vardiyaya yeter mi?", cevap: "Tipik bir vardiyayı karşılayacak şekilde tasarlanır; yoğun kullanımda fırsat şarjı veya yedek akü planlanır. Uygun voltajda priz erişimi baştan teyit edilmelidir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "forklift-yuk-merkezi-ve-kalan-kapasite-nasil-okunur",
            kategori: "Ürün Rehberi",
            baslik: "Forklift Yük Merkezi ve Kalan Kapasite Nasıl Okunur?",
            ozet: "Nominal kapasite ile gerçek kapasite farkı. Yük merkezi tablosu, kaldırma yüksekliği ve ataşman etkisiyle kalan kapasiteyi doğru hesaplama.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Forklift yük merkezi ve kapasite değerlendirmesi",
            tarih: "2026-07-10",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Forklift seçiminde en sık hata, etiketteki nominal tonaja bakıp yük merkezini göz ardı etmektir. Gerçek kaldırma kapasitesi; yük merkezine, kaldırma yüksekliğine ve ataşmana göre değişir. Bu yazı kalan kapasiteyi doğru okumayı anlatır.",
            bolumler: [
                {
                    baslik: "Yük merkezi tablosu",
                    paragraflar: [
                        "Kapasite belirli bir yük merkezi (örneğin 500 mm) için verilir. Yükün ağırlık merkezi çataldan uzaklaştıkça (uzun veya hacimli yük) kaldırılabilecek gerçek yük düşer. Bu düşüş yük merkezi tablosundan okunur.",
                        "Uzun profil, geniş palet veya sarkan yükte nominal kapasite yanıltıcıdır; gerçek yük merkezi ölçülüp tabloyla karşılaştırılır.",
                    ],
                },
                {
                    baslik: "Yükseklik ve ataşman etkisi",
                    paragraflar: [
                        "Kaldırma yüksekliği arttıkça kalan kapasite azalabilir; raf üst kotundaki değer zemindekinden düşük olabilir. Sideshift, klemp veya özel ataşman eklendiğinde makinenin kendi ağırlık merkezi değişir ve kapasite yeniden hesaplanır.",
                        "Doğru seçim; yük, yükseklik ve ataşman birlikte değerlendirilerek yapılır ve teklifte teyit edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "3 tonluk forklift her 3 tonu kaldırır mı?", cevap: "Hayır; 3 ton, belirli bir yük merkezi (örn. 500 mm) içindir. Yük merkezi uzarsa veya kaldırma yüksekliği artarsa gerçek kapasite düşer. Yük merkezi tablosu kontrol edilir." },
                { soru: "Ataşman kapasiteyi etkiler mi?", cevap: "Evet; sideshift, klemp veya özel ataşman makinenin ağırlık merkezini ve kalan kapasitesini değiştirir. Ataşmanlı kapasite ayrıca değerlendirilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmirde-forklift-kiralama-fiyatini-etkileyen-unsurlar",
            kategori: "Maliyet",
            baslik: "İzmir'de Forklift Kiralama Fiyatını Etkileyen Unsurlar",
            ozet: "Kapasite, süre, güç kaynağı, operatör, ataşman ve nakliye. İzmir'de forklift kiralama maliyetini oluşturan kalemler ve teklif karşılaştırma.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "İzmir'de kiralamaya hazır forklift ve makine parkı",
            tarih: "2026-07-07",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "İzmir'de forklift kiralama fiyatı tek bir günlük ücret değildir; kapasite, süre, güç kaynağı, operatör, ataşman ve nakliyenin kesişiminde oluşur. Bu yazı, teklifleri karşılaştırabilmeniz için maliyet kalemlerini açıklar.",
            bolumler: [
                {
                    baslik: "Kapasite, süre ve güç kaynağı",
                    paragraflar: [
                        "Kapasite sınıfı (1,5-3 ton, 3-5 ton, 7-10 ton) ve kaldırma yüksekliği fiyatı belirler. Süre; günlük, aylık ve sözleşmeli kullanımda farklı birim maliyet oluşturur ve çalışma saati sınırını kapsar. Elektrikli ve dizel modellerde şarj/yakıt sorumluluğu ayrı değerlendirilir.",
                        "Saatlik operatörlü yükleme-boşaltma ile uzun dönem tedarik farklı fiyatlanır.",
                    ],
                },
                {
                    baslik: "Ataşman, operatör ve nakliye",
                    paragraflar: [
                        "Sideshift, triplex asansör, klemp gibi ataşmanlar hem uygunluğu hem bedeli değiştirir. Operatörlü hizmette vardiya ve fazla çalışma, operatörsüzde kullanıcı yetkinliği konuşulur. Nakliye İzmir içi mesafeye ve teslimat noktasına göre ayrı bir kalemdir.",
                        "Kesin stok, sabit fiyat veya teslimat sözü bu içerikte verilmez; uygunluk güncel stok ve saha koşuluyla yazılı teklifte kesinleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift kiralama fiyatı neden değişken?", cevap: "Kapasite, süre, güç kaynağı, ataşman, operatör ve nakliyenin kesişiminde oluşur. Bu değişkenler görülmeden verilen liste fiyatı yanıltıcı olur; doğru bedel yazılı teklifte belirlenir." },
                { soru: "Operatörlü forklift daha mı pahalı?", cevap: "Operatörlü ve operatörsüz kiralama farklı fiyatlanır; operatörlü hizmette vardiya ve fazla çalışma kapsama girer. Karar ekibinizin yetkinliğine ve iş süresine göre verilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmir-depolarinda-elektrikli-forklift-ve-sarj-plani",
            kategori: "Şehir & Sektör",
            baslik: "İzmir Depolarında Elektrikli Forklift ve Şarj Planı",
            ozet: "Çiğli, Torbalı ve Kemalpaşa lojistik depolarında elektrikli forklift kullanımı, şarj altyapısı ve vardiya planlaması.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir lojistik deposunda elektrikli forklift ile çalışma",
            tarih: "2026-07-04",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "İzmir'in Çiğli, Torbalı ve Kemalpaşa hattındaki lojistik ve e-ticaret depolarında elektrikli forklift yaygındır. Verimli kullanım, doğru şarj planına bağlıdır. Bu yazı elektrikli forklift ve şarj planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Neden depoda elektrikli?",
                    paragraflar: [
                        "Kapalı lojistik depolarında sıfır emisyon ve düşük gürültü nedeniyle elektrikli forklift tercih edilir; iz bırakmayan tekerlekler epoksi zemine zarar vermez. Dar koridorda çeviktir, triplex asansörle yüksek raf beslenir.",
                        "Sürekli palet trafiği olan e-ticaret depolarında sessiz ve emisyonsuz çalışma, çalışan konforunu ve iç hava kalitesini korur.",
                    ],
                },
                {
                    baslik: "Şarj altyapısı ve vardiya",
                    paragraflar: [
                        "Kesintisiz veya çok vardiyalı çalışmada fırsat şarjı ya da yedek akü planı yapılmalı; uygun voltajda ve yakında priz erişimi baştan teyit edilir. Şarj noktası ve mola düzeni vardiya akışına yazılır.",
                        "Akü tipi ve model, günlük çalışma süresine göre seçilir; düşük sıcaklıkta akü performansı düşebilir.",
                    ],
                },
            ],
            sss: [
                { soru: "E-ticaret deposunda kaç forklift gerekir?", cevap: "Palet trafiği, raf yüksekliği ve vardiya yoğunluğuna bağlıdır; ihtiyaç saha analizi ile belirlenir. Kesintisiz çalışmada şarj/yedek planı da hesaba katılır." },
                { soru: "Şarj için özel altyapı gerekir mi?", cevap: "Uygun voltajda ve makineye yakın bir şarj noktası gerekir; çok vardiyalı çalışmada fırsat şarjı veya yedek akü planlanır. Bu koşullar teklif öncesinde teyit edilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmirde-operatorlu-forklift-kiralama-ne-zaman-gerekir",
            kategori: "Ürün Rehberi",
            baslik: "İzmir'de Operatörlü Forklift Kiralama Ne Zaman Gerekir?",
            ozet: "Saatlik yükleme-boşaltma mı, uzun dönem tedarik mi? Yetkinlik, belge ve maliyet açısından operatörlü/operatörsüz forklift kararı.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "İzmir'de operatörlü kiralamaya hazır forkliftler",
            tarih: "2026-07-01",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'de forklift kiralarken operatör kararı hem güvenliği hem maliyeti etkiler. Bu yazı, operatörlü ve operatörsüz forklift kiralama arasındaki farkı ve karar ölçütlerini anlatır.",
            bolumler: [
                {
                    baslik: "Operatörlü kiralama",
                    paragraflar: [
                        "Saatlik veya kısa süreli yükleme-boşaltma operasyonlarında, kendi ekibinizde yetkin operatör yoksa operatörlü forklift pratik olur. Vardiya süresi, fazla çalışma ve saha oryantasyonu teklifte görülmelidir.",
                        "Yoğun sezon ve dönemsel taleplerde operatörlü hizmet esneklik sağlar.",
                    ],
                },
                {
                    baslik: "Operatörsüz ve belge",
                    paragraflar: [
                        "Operatörsüz kiralamada kullanıcının yetkinliği ve teslim eğitimi önem kazanır. Operatör belgesi gerekliliği; görev, ekipman sınıfı, işveren prosedürü ve mevzuata göre belirlenir ve yetkili İSG birimi ile resmî kaynaklardan doğrulanır.",
                        "Uzun dönem tedarikte kendi yetkin operatörünüzle operatörsüz kiralama ekonomik olabilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift operatörü için belge zorunlu mu?", cevap: "Gereklilik; görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir. Kesin şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır." },
                { soru: "Saatlik operatörlü forklift alınabilir mi?", cevap: "Evet; kısa süreli yükleme-boşaltma için saatlik operatörlü hizmet yaygındır. Süre, kapsam ve ücret yazılı teklifte belirtilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "forklift-gunluk-kontrol-ve-guvenli-kullanim",
            kategori: "Güvenlik",
            baslik: "Forklift Günlük Kontrol ve Güvenli Kullanım",
            ozet: "Vardiya öncesi kontrol, yük dengesi, yaya ayrımı ve devrilme riskine karşı önlemler. İzmir sahalarında forklift güvenliği.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir deposunda forklift günlük kontrol ve güvenli kullanım",
            tarih: "2026-06-28",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Forklift kazalarının önemli bölümü günlük kontrolde yakalanabilecek arızalardan ve yanlış kullanımdan çıkar. Bu yazı, vardiya öncesi kontrol ve güvenli kullanım ilkelerini özetler.",
            bolumler: [
                {
                    baslik: "Vardiya öncesi kontrol",
                    paragraflar: [
                        "Her vardiya öncesi fren, direksiyon, korna, aydınlatma, çatal ve asansör fonksiyonları, lastikler ve akü/yakıt seviyesi kontrol edilip kaydedilir. Sızıntı, çatlak veya anormal ses varsa makine kullanılmaz.",
                        "Yükseltici platformlarda olduğu gibi forkliftlerde de periyodik kontrol (kaldırma ekipmanı) ayrı bir yükümlülüktür ve günlük kontrolün yerine geçmez.",
                    ],
                },
                {
                    baslik: "Yük dengesi ve yaya ayrımı",
                    paragraflar: [
                        "Yük, kapasite ve yük merkezi sınırları içinde taşınır; devrilme riskine karşı yük geriye yatık ve alçak taşınır, ani dönüşten kaçınılır. Görüşü kapatan yükte gerektiğinde geri manevra veya gözcü kullanılır.",
                        "Çalışma alanı yaya trafiğinden ayrılır; hız sınırı ve kör nokta yönetimi saha kurallarına yazılır. Sadece yetkin ve yetkili kişiler kullanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift neden devrilir?", cevap: "Kapasite veya yük merkezi aşımı, ani dönüş, eğimli zemin ve yüksek hızda manevra devrilme riskini artırır. Yük kapasite sınırında, geriye yatık ve alçak taşınır; üretici kullanım kuralları esastır." },
                { soru: "Forklift periyodik kontrole tabi mi?", cevap: "Forklift kaldırma ekipmanı sayılır ve periyodik kontrole tabidir; bu, operatörün her vardiya öncesi yaptığı günlük kontrolün yerine geçmez, onu tamamlar." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmir-liman-ve-konteyner-elleçlemede-forklift",
            kategori: "Şehir & Sektör",
            baslik: "İzmir Liman ve Konteyner Elleçlemede Forklift",
            ozet: "Alsancak Limanı ve Aliağa hattında ağır yük, konteyner ve açık saha elleçlemesinde dizel forklift kullanımı ve saha koşulları.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "İzmir liman sahasında dizel forklift ile ağır yük elleçlemesi",
            tarih: "2026-06-25",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "İzmir'in Alsancak Limanı ve Aliağa hattı, ağır yük ve konteyner elleçlemesiyle şekillenir. Bu açık saha işleri, kapalı depodan farklı forklift ihtiyaçları doğurur. Bu yazı liman ve konteyner elleçlemesinde forklift kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Ağır yük ve açık saha",
                    paragraflar: [
                        "Liman ve açık stok sahalarında ağır yük ve konteyner elleçlemesi için yüksek kapasiteli (7-10 ton ve üzeri) dizel forkliftler değerlendirilir. Açık sahada çekiş, görüş ve zemin bozukluğu belirleyicidir.",
                        "Yakıt ikmalinin hızlı olması, kesintisiz liman operasyonunda avantaj sağlar. Kapalı alanda emisyon nedeniyle dizel kullanılmaz.",
                    ],
                },
                {
                    baslik: "Saha kuralları ve zemin",
                    paragraflar: [
                        "Liman sahaları güvenlik kaydı, giriş prosedürü ve saha oryantasyonu ister; makine evrakı ve operatör yeterliliği önceden teyit edilir. Liman betonu, asfalt stok alanı ve rampa farklı taşıma davranışı gösterir.",
                        "Yoğun araç ve yaya trafiği nedeniyle çalışma bölgesi ayrılır ve hız yönetimi uygulanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Konteyner elleçlemede hangi forklift?", cevap: "Ağır yük ve konteyner için yüksek kapasiteli dizel forkliftler (7-10 ton ve üzeri) değerlendirilir. Kesin kapasite yük ve saha koşuluna göre belirlenir." },
                { soru: "Liman sahasına giriş için ne gerekir?", cevap: "Liman sahaları güvenlik kaydı, giriş prosedürü ve saha oryantasyonu ister; makine evrakı ve operatör yeterliliği teklif öncesinde teyit edilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "dizel-forklift-acik-saha-ve-rampa-isleri",
            kategori: "Ürün Rehberi",
            baslik: "Dizel Forklift: Açık Saha ve Rampa İşleri",
            ozet: "Açık stok, rampa ve arazi zemininde güç ve dayanım. Dizel forkliftin açık saha avantajları ve kapalı alan kısıtları.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir açık sahasında dizel forklift ile yükleme",
            tarih: "2026-06-22",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in açık stok ve liman sahalarında dizel forklift güç ve dayanım sunar. Bu yazı, dizel forkliftin açık saha avantajlarını ve nerede kullanılmayacağını anlatır.",
            bolumler: [
                {
                    baslik: "Açık sahanın gücü",
                    paragraflar: [
                        "Dizel forkliftler yüksek tork ve dayanımıyla açık stok, rampa ve arazi zemininde güvenilirdir; ağır yük ve konteyner işlerinde tercih edilir. Yakıt ikmali hızlıdır, kesintisiz vardiyada avantaj sağlar.",
                        "Yüksek kapasite sınıfları (5 ton ve üzeri) genellikle dizel modellerdir.",
                    ],
                },
                {
                    baslik: "Kapalı alan kısıtı",
                    paragraflar: [
                        "Havalandırması sınırlı kapalı alanda dizel egzozu karbon monoksit riski oluşturur; kapalı depoların çözümü elektrikli forkliftlerdir. Gürültü de kapalı ve hassas alanlarda kısıttır.",
                        "Doğru seçim; zemin, vardiya, emisyon kuralı ve yük özelliğine göre yapılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Dizel forklift rampada güvenli mi?", cevap: "Dizel forkliftler yüksek tork ve dayanımıyla rampa ve eğimli zeminde kullanılır; ancak yük geriye yatık, hız kontrollü ve üretici eğim sınırına uyularak taşınır." },
                { soru: "Neden depoda dizel kullanılmaz?", cevap: "Kapalı alanda dizel egzozu karbon monoksit riski taşır. Havalandırması sınırlı depoların standart çözümü elektrikli forkliftlerdir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmir-gida-sanayinde-forklift-ve-hijyen-kosullari",
            kategori: "Şehir & Sektör",
            baslik: "İzmir Gıda Sanayinde Forklift ve Hijyen Koşulları",
            ozet: "Gıda üretim ve depolama tesislerinde sıfır emisyon, temizlik ve soğuk hava deposu koşullarında forklift kullanımı.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir gıda tesisinde elektrikli forklift ile hijyenik elleçleme",
            tarih: "2026-06-19",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in gıda sanayisi (zeytin, süt işleme ve paketleme) hijyen ve emisyon kurallarıyla çalışır. Bu tesislerde forklift kullanımı bu koşullara uyar. Bu yazı gıda sanayisinde forklift kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Sıfır emisyon ve hijyen",
                    paragraflar: [
                        "Gıda üretim ve depolama alanlarında sıfır emisyon ve düşük gürültü nedeniyle elektrikli forklift kullanılır; makinenin temizlik ve hijyen kurallarına uygunluğu talep dosyasına eklenir.",
                        "İz bırakmayan tekerlekler hijyenik zemine zarar vermez; sürekli palet trafiğinde iç hava kalitesi korunur.",
                    ],
                },
                {
                    baslik: "Soğuk hava deposu",
                    paragraflar: [
                        "Soğuk hava depolarında düşük sıcaklık akü performansını düşürür; kışa benzer koşulda daha kısa çalışma süresi ve uygun akü/kabin seçimi değerlendirilir. Makinenin soğuk ortama uygunluğu teyit edilir.",
                        "Nem ve yoğuşma koşulları günlük kontrolde ayrıca dikkate alınır.",
                    ],
                },
            ],
            sss: [
                { soru: "Gıda tesisinde dizel forklift olur mu?", cevap: "Kapalı ve emisyona duyarlı gıda alanlarında elektrikli forklift tercih edilir; dizel açık saha içindir. Kapalı alanda dizel egzozu risk oluşturur." },
                { soru: "Soğuk hava deposunda forklift çalışır mı?", cevap: "Evet; ancak düşük sıcaklık akü performansını düşürür, uygun akü ve kabin seçimi ile daha kısa çalışma süresi planlanır. Makinenin soğuk ortama uygunluğu teyit edilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmirde-forklift-nakliye-ve-teslimat-planlamasi",
            kategori: "Maliyet",
            baslik: "İzmir'de Forklift Nakliye ve Teslimat Planlaması",
            ozet: "İzmir içi mesafe, OSB kabul saati, rampa randevusu ve nakliye sorumluluğu. Forklift teslimatında sık yapılan hatalar.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "İzmir'de forklift teslimatı ve sevkiyat hazırlığı",
            tarih: "2026-06-16",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'de forklift teslimatı, şehir içi mesafe ve OSB koşullarına göre planlanır. Bu yazı, nakliye ve teslimat planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Rota ve OSB koşulları",
                    paragraflar: [
                        "Nakliye; çıkış noktası ile Kemalpaşa, Torbalı, Çiğli veya Aliağa arasındaki mesafe, ağır araç güzergâhı, OSB kabul saati ve rampa randevusuna göre planlanır. Şehir içi ağır araç kısıtları teslimat saatini etkiler.",
                        "Nakliye sorumluluğu ve ücreti yazılı teklifte açıkça belirtilir.",
                    ],
                },
                {
                    baslik: "Teslim ve iade",
                    paragraflar: [
                        "Teslimatta model uyumu, görünür hasar, sayaç/enerji seviyesi ve fonksiyonlar kayıt altına alınır; iade sırasında aynı bilgiler yeniden kaydedilir. Bu, sonradan çıkabilecek anlaşmazlıkları önler.",
                        "Uzun dönem tedarikte tekrarlı nakliye maliyeti hesaba katılır.",
                    ],
                },
            ],
            sss: [
                { soru: "İzmir içi forklift teslimatı ne kadar sürer?", cevap: "Mesafe, OSB kabul saati, rampa randevusu ve şehir içi ağır araç kısıtlarına bağlıdır. Net adres ve kabul saati bilgisi teslimatı hızlandırır." },
                { soru: "Nakliye ücreti kimde?", cevap: "Nakliye çoğu teklifte ayrı bir kalemdir; çıkış noktası, teslimat adresi, sorumluluk ve ücret yazılı teklifte belirtilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "forklift-kiralama-mi-satin-alma-mi-izmir",
            kategori: "Maliyet",
            baslik: "Forklift Kiralama mı, Satın Alma mı? İzmir İçin Karar",
            ozet: "Kullanım sıklığı, bakım, operatör ve amortisman açısından forklift kiralama ve satın almanın karşılaştırması.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir'de kiralamaya hazır forklift filosu",
            tarih: "2026-06-13",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'de forklift ihtiyacı süreklilik kazandığında 'kiralamak mı, satın almak mı?' sorusu doğar. Karar, kullanım sıklığına ve bakım yüküne bağlıdır. Bu yazı kararı etkileyen kalemleri sıralar.",
            bolumler: [
                {
                    baslik: "Kiralamanın esnekliği",
                    paragraflar: [
                        "Proje bazlı, dönemsel veya farklı kapasiteler gerektiren ihtiyaçlarda kiralama esneklik sağlar: her iş için doğru kapasiteyi seçer, bakım, periyodik kontrol ve amortisman yükünü üstlenmezsiniz.",
                        "Sezonluk yoğunlukta kiralama, atıl dönemde sabit maliyet oluşturmaz.",
                    ],
                },
                {
                    baslik: "Satın almada gizli maliyetler",
                    paragraflar: [
                        "Satın alma; bakım-onarım, yedek parça, periyodik kontrol, sigorta ve depolama gibi süreklilik gerektiren kalemleri getirir. Yüksek ve düzenli kullanım varsa satın alma anlamlı olabilir; toplam sahip olma maliyeti bu kalemlerle hesaplanır.",
                        "Karar, gerçek kullanım verisiyle ve tek/çok kapasite ihtiyacına göre verilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Sezonluk kullanımda hangisi mantıklı?", cevap: "Dönemsel ve değişken kapasiteli ihtiyaçta kiralama esneklik ve düşük sabit maliyet sağlar. Yoğun ve sürekli tek kapasite kullanımında satın alma değerlendirilebilir." },
                { soru: "Kiralamada bakım kime ait?", cevap: "Periyodik kontrol ve bakım genellikle kiraya verenin sorumluluğundadır; günlük kontrol ve doğru kullanım kiracıya aittir. Paylaşım sözleşmede yazılıdır." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmirde-triplex-asansor-ve-yuksek-raf-forklift",
            kategori: "Ürün Rehberi",
            baslik: "İzmir'de Triplex Asansör ve Yüksek Raf Forklifti",
            ozet: "Yüksek raf sistemlerinde serbest kaldırma ve triplex asansör ihtiyacı. Kapalı depolarda tavan yüksekliği ve raf kotuna göre forklift seçimi.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir deposunda triplex asansörlü forklift ile yüksek raf besleme",
            tarih: "2026-06-10",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in yüksek raflı lojistik depolarında forklift seçimi, tavan yüksekliği ve raf kotuna bağlıdır. Bu yazı, triplex asansör ve serbest kaldırma ihtiyacını ele alır.",
            bolumler: [
                {
                    baslik: "Serbest kaldırma ve triplex",
                    paragraflar: [
                        "Kapalı ve tavanı sınırlı depolarda, kapalı asansör yüksekliği düşük tutulup yükün yükseğe çıkarılması gerektiğinde serbest kaldırmalı (full free lift) triplex asansör kullanılır. Bu, alçak kapı veya konteyner içinde yükleme yapılırken önemlidir.",
                        "Raf üst kotu, kapalı asansör yüksekliği ve tavan açıklığı birlikte değerlendirilir.",
                    ],
                },
                {
                    baslik: "Kapasite ve kalan yük",
                    paragraflar: [
                        "Yüksek kaldırmada kalan kapasite düşebilir; raf üst kotundaki değer yük merkezi tablosundan kontrol edilir. Triplex asansör ve ataşman makinenin ağırlık merkezini etkiler.",
                        "Doğru model; raf yüksekliği, tavan açıklığı ve yük özelliğine göre seçilip teklifte teyit edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Triplex forklift ne zaman gerekir?", cevap: "Alçak tavan veya konteyner içi yüklemede, kapalı asansör yüksekliği düşük tutulup yükün yükseğe çıkarılması gerektiğinde serbest kaldırmalı triplex asansör kullanılır." },
                { soru: "Yüksek raf beslemede kapasite düşer mi?", cevap: "Evet; kaldırma yüksekliği arttıkça kalan kapasite azalabilir. Raf üst kotundaki değer yük merkezi tablosundan kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "forklift-kapasite-siniflari-1-5-tondan-10-tona",
            kategori: "Ürün Rehberi",
            baslik: "Forklift Kapasite Sınıfları: 1,5 Tondan 10 Tona",
            ozet: "Depo içi hafif elleçlemeden liman ağır yüküne kadar kapasite sınıfları. İşe göre doğru forklift tonajını seçme rehberi.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir'de farklı kapasite sınıfında forkliftler",
            tarih: "2026-06-07",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Forklift kapasite sınıfları, işin ağırlığına ve sahasına göre değişir. Bu yazı, 1,5 tondan 10 tona kapasite sınıflarını ve tipik kullanım alanlarını anlatır.",
            bolumler: [
                {
                    baslik: "1,5-3 ton: depo içi standart",
                    paragraflar: [
                        "Standart palet trafiği, üretim hattı besleme ve depo içi elleçlemede en sık ihtiyaç duyulan aralıktır; kapalı alanda elektrikli modeller yaygındır. Dar koridor ve raf besleme için çeviktir.",
                        "Yük merkezi ve kaldırma yüksekliği bu sınıfta da kalan kapasiteyi belirler.",
                    ],
                },
                {
                    baslik: "3-5 ton ve 7-10 ton",
                    paragraflar: [
                        "3-5 ton sınıfı ağır palet, makine ve ambalaj yükünde; genellikle dizel/LPG modellerle açık ve yarı açık sahada kullanılır. 7-10 ton ve üzeri ise liman, ağır sanayi ve konteyner elleçlemesi içindir.",
                        "Yüksek kapasitede zemin, manevra alanı ve operatör yeterliliği ayrıca değerlendirilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Depo için hangi tonaj yeterli?", cevap: "Standart palet ve raf besleme için 1,5-3 ton aralığı çoğu depoda yeterlidir; ağır yük ve yüksek raf için üst sınıflar değerlendirilir. Yük merkezi ve yükseklik kapasiteyi etkiler." },
                { soru: "10 ton forklift nerede kullanılır?", cevap: "Liman, ağır sanayi ve konteyner elleçlemesi gibi ağır yük işlerinde kullanılır. Zemin, manevra alanı ve operatör yeterliliği bu sınıfta özellikle önemlidir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmir-mobilya-ve-agac-sanayinde-forklift-kullanimi",
            kategori: "Şehir & Sektör",
            baslik: "İzmir Mobilya ve Ağaç Sanayinde Forklift Kullanımı",
            ozet: "Kereste, panel ve mobilya elleçlemesinde uzun ve hacimli yük yönetimi. İzmir'in mobilya üretim sahalarında forklift ve ataşman seçimi.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir mobilya tesisinde forklift ile panel ve kereste elleçlemesi",
            tarih: "2026-06-04",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in mobilya ve ağaç işleme sanayisinde kereste, panel ve mobilya gibi uzun ve hacimli yükler elleçlenir. Bu yükler forklift seçimini farklılaştırır. Bu yazı bu sektörde forklift kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Uzun ve hacimli yük",
                    paragraflar: [
                        "Kereste ve panel gibi uzun yüklerde ağırlık merkezi çataldan uzaklaşır; nominal kapasite yanıltıcı olur, yük merkezi tablosu kontrol edilir. Uzun çatal veya özel ataşman değerlendirilebilir.",
                        "Hacimli mobilya yükünde görüş ve manevra ayrıca planlanır.",
                    ],
                },
                {
                    baslik: "İç mekân ve toz",
                    paragraflar: [
                        "Kapalı üretim alanında elektrikli forklift sıfır emisyonla çalışır; ağaç tozu yoğun ortamda günlük kontrolde filtre ve hareketli parçalara dikkat edilir.",
                        "Zemin ve koridor genişliği makine seçimini belirler; dar alanda dönüş yarıçapı değerlendirilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Uzun kereste için hangi forklift?", cevap: "Uzun yükte ağırlık merkezi çataldan uzaklaştığından yük merkezi tablosu kontrol edilir; uzun çatal veya özel ataşman değerlendirilir. Nominal kapasiteye göre seçim hatalıdır." },
                { soru: "Ağaç tozlu ortamda ek önlem gerekir mi?", cevap: "Evet; toz yoğun ortamda günlük kontrolde filtre, hareketli parça ve elektrik bağlantılarına ek dikkat gösterilir. Üretici bakım talimatı esastır." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "forklift-atasmanlari-sideshift-klemp-ve-uzun-catal",
            kategori: "Ürün Rehberi",
            baslik: "Forklift Ataşmanları: Sideshift, Klemp ve Uzun Çatal",
            ozet: "Ataşmanlar verimi artırır ama kapasiteyi değiştirir. Sideshift, klemp ve uzun çatalın kullanımı ve kalan kapasiteye etkisi.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Ataşmanlı forklift ile özel yük elleçlemesi",
            tarih: "2026-06-01",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Forklift ataşmanları belirli yükleri daha verimli elleçlemeyi sağlar, ancak makinenin ağırlık merkezini ve kalan kapasitesini değiştirir. Bu yazı yaygın ataşmanları ve kapasite etkisini anlatır.",
            bolumler: [
                {
                    baslik: "Yaygın ataşmanlar",
                    paragraflar: [
                        "Sideshift, yükü yana kaydırarak hassas konumlama sağlar; palet hizalamada zaman kazandırır. Klemp, balya, koli veya varil gibi paletsiz yükleri kavrar. Uzun çatal, uzun yükte destek yüzeyini artırır.",
                        "Her ataşman belirli bir yük ve saha için verim sağlar; ihtiyaca göre seçilir.",
                    ],
                },
                {
                    baslik: "Kapasiteye etkisi",
                    paragraflar: [
                        "Ataşman makinenin kendi ağırlığını ve ağırlık merkezini değiştirir; bu, kalan kaldırma kapasitesini düşürebilir. Ataşmanlı kapasite ayrıca hesaplanır ve teklifte teyit edilir.",
                        "Ataşman uygunluğu makine modeliyle birlikte değerlendirilir; her ataşman her makineye takılmaz.",
                    ],
                },
            ],
            sss: [
                { soru: "Sideshift kapasiteyi düşürür mü?", cevap: "Ataşmanlar makinenin ağırlık merkezini ve kendi ağırlığını değiştirdiğinden kalan kapasiteyi bir miktar düşürebilir. Ataşmanlı kapasite ayrıca hesaplanır ve teyit edilir." },
                { soru: "Paletsiz yük nasıl taşınır?", cevap: "Balya, koli veya varil gibi paletsiz yükler için klemp gibi ataşmanlar kullanılır. Ataşman uygunluğu makine modeliyle birlikte değerlendirilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmirde-forklift-periyodik-kontrol-ve-belge",
            kategori: "Güvenlik",
            baslik: "İzmir'de Forklift Periyodik Kontrol ve Belge",
            ozet: "Kaldırma ekipmanı olarak forkliftin periyodik kontrolü, günlük kontrol ve operatör belgesi. Kiralık makinede sorumluluk paylaşımı.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir'de kontrolü yapılmış kiralık forklift",
            tarih: "2026-05-29",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Forklift kaldırma ekipmanı sayılır ve periyodik kontrole tabidir; ayrıca operatör yeterliliği ve günlük kontrol gerekir. Bu yazı, İzmir'de kiralık forkliftte bu yükümlülükleri ele alır.",
            bolumler: [
                {
                    baslik: "Periyodik ve günlük kontrol",
                    paragraflar: [
                        "Forkliftler standartlarda aksi belirtilmedikçe yetkili teknik elemanca periyodik kontrolden geçer; rapor makineyle birlikte sahada bulunur. Her vardiya öncesi operatör fren, direksiyon, çatal, asansör ve lastikleri kontrol eder.",
                        "İkisi birbirinin yerine geçmez; günlük kontrol periyodik kontrolün tamamlayıcısıdır.",
                    ],
                },
                {
                    baslik: "Operatör belgesi ve sorumluluk",
                    paragraflar: [
                        "Operatör yeterlilik belgesi gerekliliği; görev, ekipman sınıfı, işveren prosedürü ve mevzuata göre belirlenir ve yetkili İSG birimi ile resmî kaynaklardan doğrulanır.",
                        "Kiralık makinede periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracıya aittir. Paylaşım sözleşmede yazılıdır.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift operatör belgesi nasıl belirlenir?", cevap: "Gereklilik; görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir. Kesin şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır." },
                { soru: "Kiralık forkliftte kontrol raporu kimde?", cevap: "Periyodik kontrol raporunu kiraya veren sağlar ve makineyle birlikte sahada bulunur; günlük vardiya öncesi kontrol kiracıya aittir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmir-e-ticaret-deposunda-forklift-operasyonu",
            kategori: "Şehir & Sektör",
            baslik: "İzmir E-Ticaret Deposunda Forklift Operasyonu",
            ozet: "Çiğli-Torbalı hattındaki e-ticaret depolarında yoğun palet trafiği, hızlı elleçleme ve sürekli operasyonda forklift planlaması.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir e-ticaret deposunda forklift ile hızlı elleçleme",
            tarih: "2026-05-26",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in Çiğli ve Torbalı hattındaki e-ticaret depoları, yoğun ve sürekli palet trafiğiyle çalışır. Bu tempo, forklift planlamasını farklılaştırır. Bu yazı e-ticaret deposunda forklift operasyonunu ele alır.",
            bolumler: [
                {
                    baslik: "Yoğun ve sürekli operasyon",
                    paragraflar: [
                        "E-ticaret depolarında sürekli mal kabul, raf besleme ve sevkiyat hazırlığı olur; sessiz ve emisyonsuz çalışma için elektrikli forklift tercih edilir. Kesintisiz vardiyada fırsat şarjı veya yedek akü planlanır.",
                        "Dar koridor ve yüksek rafta çeviklik ve triplex asansör ihtiyacı değerlendirilir.",
                    ],
                },
                {
                    baslik: "Güvenlik ve trafik",
                    paragraflar: [
                        "Yoğun yaya ve palet trafiğinde çalışma bölgesi ayrılır, hız yönetimi ve kör nokta kuralları uygulanır. Sürekli operasyonda günlük kontrol ve yük dengesi disiplini önemlidir.",
                        "İhtiyaç sayısı ve kapasite, palet trafiği ve vardiya yoğunluğuna göre saha analiziyle belirlenir.",
                    ],
                },
            ],
            sss: [
                { soru: "E-ticaret deposunda elektrikli forklift neden tercih edilir?", cevap: "Kapalı ve yoğun ortamda sıfır emisyon, düşük gürültü ve iz bırakmayan tekerlek nedeniyle tercih edilir; çalışan konforu ve iç hava kalitesi korunur. Kesintisiz çalışmada şarj planı yapılır." },
                { soru: "Sürekli operasyonda kaç forklift gerekir?", cevap: "Palet trafiği, raf yüksekliği ve vardiya yoğunluğuna bağlıdır; ihtiyaç saha analiziyle belirlenir ve şarj/yedek planı hesaba katılır." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "izmirde-forklift-kiralama-teklifinde-nelere-dikkat",
            kategori: "Maliyet",
            baslik: "İzmir'de Forklift Teklifinde Nelere Dikkat Edilir?",
            ozet: "Kapasite, çalışma saati, güç kaynağı, ataşman, operatör, nakliye ve ikame koşulu. Yazılı teklifte aranması gereken kalemler.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "İzmir için forklift yazılı teklif hazırlığı",
            tarih: "2026-05-23",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'de forklift tekliflerini sağlıklı karşılaştırmanın yolu, aynı kalemlerin aynı iş tanımı üzerinden yazılı görülmesidir. Bu yazı teklifte aranması gerekenleri sıralar.",
            bolumler: [
                {
                    baslik: "Teklifte görülmesi gerekenler",
                    paragraflar: [
                        "Kapasite sınıfı ve mümkünse model, kaldırma yüksekliği, çalışma saati/sayaç sınırı, güç kaynağı ve şarj/yakıt sorumluluğu, ataşman, operatör kapsamı, nakliye, ikame ve ödeme maddeleri ayrı satırlarda görülmelidir.",
                        "İstenen periyodik kontrol ve uygunluk kayıtlarının geçerlilik tarihi makine özelinde kontrol edilir.",
                    ],
                },
                {
                    baslik: "'Her şey dahil' yerine dahil-hariç",
                    paragraflar: [
                        "Belirsiz ifadeler yerine dahil ve hariç kalemler ayrı yazılır. Arıza bildirim yolu ve ikame (yedek makine) koşulu, sahada iş kaybını sınırlamak için teklifte yer almalıdır.",
                        "Model belirtilmemişse kabul edilecek teknik sınırlar tanımlanır; sevkten önce model teyidi istenir.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift teklifinde ikame maddesi neden önemli?", cevap: "Arıza durumunda yedek makine (ikame) koşulu, sahada iş kaybını sınırlar. Arıza bildirim yolu ve ikame süresi teklifte yer almalıdır." },
                { soru: "Çalışma saati sınırı ne demek?", cevap: "Kiralama, takvim günü kadar makinenin çalıştığı saat/sayaç üzerinden de tanımlanabilir. Günlük çalışma saati ve fazla çalışma koşulu teklifte belirtilmelidir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "forklift-lastik-secimi-dolgu-mu-havali-mi",
            kategori: "Ürün Rehberi",
            baslik: "Forklift Lastik Seçimi: Dolgu mu, Havalı mı?",
            ozet: "Zemin ve saha koşuluna göre dolgu (solid) ve havalı lastik seçimi. Delinme riski, konfor ve kullanım alanı farkları.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Forklift lastik tipi ve saha koşulu değerlendirmesi",
            tarih: "2026-05-20",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Forklift lastiği, sahanın zemin koşuluna göre seçilir ve hem güvenliği hem konforu etkiler. Bu yazı, dolgu ve havalı lastik seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Dolgu (solid) lastik",
                    paragraflar: [
                        "Dolgu lastik delinmez; hurda, cam veya keskin atık bulunan sahalarda ve sürekli ağır kullanımda avantajlıdır. Bakım ihtiyacı düşüktür ancak konfor havalıya göre azdır.",
                        "İç mekân ve düz zeminde iz bırakmayan dolgu lastik seçenekleri kullanılır.",
                    ],
                },
                {
                    baslik: "Havalı lastik",
                    paragraflar: [
                        "Havalı lastik açık ve engebeli zeminde daha iyi konfor ve çekiş sağlar; ancak delinme riski taşır. Açık stok ve arazi sahalarında değerlendirilir.",
                        "Lastik seçimi zemin, atık durumu ve kullanım yoğunluğuna göre yapılır; saha bilgisi teklifte paylaşılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Hurdalı sahada hangi lastik?", cevap: "Delinme riski yüksek (hurda, cam, keskin atık) sahalarda delinmez dolgu (solid) lastik tercih edilir; bakım ihtiyacı düşüktür." },
                { soru: "İç mekânda lastik iz bırakır mı?", cevap: "İç mekân ve hassas zeminde iz bırakmayan lastik seçenekleri kullanılır; hijyenik ve epoksi zeminlerde yüzey korunur." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmir-insaat-ve-yapi-marketinde-forklift-kullanimi",
            kategori: "Şehir & Sektör",
            baslik: "İzmir İnşaat ve Yapı Marketinde Forklift Kullanımı",
            ozet: "Yapı malzemesi, tuğla, çimento ve panel elleçlemesinde açık saha forklifti. İnşaat ve yapı market sahalarında kapasite ve zemin.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "İzmir yapı market sahasında forklift ile malzeme elleçlemesi",
            tarih: "2026-05-17",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in inşaat ve yapı market sahalarında tuğla, çimento, panel ve yapı malzemesi elleçlenir. Açık saha ve ağır yük bu işlerde forklift seçimini belirler. Bu yazı bu sektörde forklift kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Ağır yük ve açık saha",
                    paragraflar: [
                        "Tuğla, çimento paleti ve panel gibi ağır yükler için uygun kapasiteli dizel forkliftler değerlendirilir; açık saha, rampa ve engebeli zemin belirleyicidir. Havalı lastik engebeli zeminde konfor sağlar.",
                        "Uzun panel ve profil yükünde yük merkezi ve uzun çatal ihtiyacı değerlendirilir.",
                    ],
                },
                {
                    baslik: "Zemin ve güvenlik",
                    paragraflar: [
                        "Yapı market sahasında zemin bozukluğu, rampa ve müşteri-yaya trafiği yönetilir; çalışma alanı ayrılır ve hız kontrolü uygulanır.",
                        "Kapasite, yük merkezi ve zemin koşulu birlikte değerlendirilerek doğru makine seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Yapı marketinde hangi forklift?", cevap: "Ağır yapı malzemesi ve açık saha için uygun kapasiteli dizel forklift değerlendirilir; engebeli zeminde havalı lastik konfor sağlar. Uzun yükte yük merkezi kontrol edilir." },
                { soru: "Müşteri trafiğinde güvenlik nasıl sağlanır?", cevap: "Çalışma alanı yaya ve müşteri trafiğinden ayrılır, hız sınırı ve kör nokta yönetimi uygulanır. Sadece yetkin ve yetkili kişiler kullanır." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "forklift-devrilme-kazalari-nedenleri-ve-onlemler",
            kategori: "Güvenlik",
            baslik: "Forklift Devrilme Kazaları: Nedenleri ve Önlemler",
            ozet: "Devrilme, forklift kazalarının en ciddilerindendir. Kapasite aşımı, ani dönüş ve eğim gibi nedenler ve alınabilecek önlemler.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir sahasında güvenli forklift kullanımı",
            tarih: "2026-05-14",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Forklift kazaları içinde devrilme en ciddi sonuçları doğuranlardandır. Çoğu, önlenebilir nedenlerden kaynaklanır. Bu yazı, devrilme nedenlerini ve önlemleri özetler.",
            bolumler: [
                {
                    baslik: "Devrilme nedenleri",
                    paragraflar: [
                        "Kapasite veya yük merkezi aşımı, yükü yüksek ve öne yatık taşımak, ani dönüş ve yüksek hızda manevra, eğimli veya bozuk zemin devrilme riskini artırır. Yükü kaldırarak dönmek denge merkezini yükseltir.",
                        "Boş forklift de yüklüye göre farklı denge gösterir; her iki durumda da hız ve dönüş kontrol edilir.",
                    ],
                },
                {
                    baslik: "Önlemler",
                    paragraflar: [
                        "Yük kapasite sınırında, geriye yatık ve mümkün olduğunca alçak taşınır; dönüşler yavaş ve yük alçakken yapılır. Eğimde yük yukarı bakacak şekilde hareket edilir.",
                        "Emniyet kemeri (varsa) takılır; devrilmede kabin dışına çıkmaya çalışmak yerine kabin içinde kalmak önerilir. Operatör yetkinliği ve saha kuralları esastır.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift yük kaldırarak dönebilir mi?", cevap: "Yükü yüksekte taşıyarak dönmek denge merkezini yükseltir ve devrilme riskini artırır. Dönüşler yük alçakken, yavaş ve geriye yatık yapılmalıdır." },
                { soru: "Devrilme anında ne yapılmalı?", cevap: "Genel öneri, kabin içinde kalmak, direksiyona tutunmak ve devrilme yönünün tersine yaslanmaktır; kabin dışına atlamaya çalışmak daha tehlikelidir. Üretici ve İSG talimatı esastır." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "lpg-forklift-ne-zaman-tercih-edilir",
            kategori: "Karşılaştırma",
            baslik: "LPG Forklift Ne Zaman Tercih Edilir?",
            ozet: "Elektrikli ve dizel arasında bir seçenek olarak LPG forklift: yarı açık alan, hızlı ikmal ve emisyon dengesi açısından kullanım alanı.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir sahasında LPG forklift ile elleçleme",
            tarih: "2026-05-11",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Forklift güç kaynağında elektrikli ve dizel dışında bir seçenek de LPG'dir. Belirli koşullarda pratik bir denge sunar. Bu yazı, LPG forkliftin ne zaman tercih edildiğini anlatır.",
            bolumler: [
                {
                    baslik: "LPG'nin dengesi",
                    paragraflar: [
                        "LPG forklift, dizele göre daha düşük egzoz emisyonu ve elektrikliye göre hızlı ikmal (tüp değişimi) sunar; iyi havalandırılan yarı açık alanlarda ve tek vardiyalı işlerde pratiktir. Şarj beklemesi olmadan sürekli çalışabilir.",
                        "Yine de kapalı ve havalandırması sınırlı alanların standart çözümü elektrikli forkliftlerdir.",
                    ],
                },
                {
                    baslik: "Kullanım koşulları",
                    paragraflar: [
                        "Tüp depolama ve değişim düzeni, işletmenin yakıt prosedürüne yazılır. Emisyon kısıtı olan hassas alanlarda kullanılmaz.",
                        "Doğru güç kaynağı; havalandırma, vardiya düzeni ve emisyon kuralına göre seçilir. Türkiye'deki filo ağırlıklı elektrikli ve dizel olsa da uygunluk tedarikçiden teyit edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "LPG forklift kapalı alanda kullanılır mı?", cevap: "Sadece iyi havalandırılan ortamlarda ve işletme prosedürüne uygun olarak; havalandırması sınırlı kapalı alanların standart çözümü elektrikli forkliftlerdir." },
                { soru: "LPG mi dizel mi daha hızlı ikmal?", cevap: "LPG'de tüp değişimi hızlıdır ve şarj beklemesi olmaz; dizelde de ikmal hızlıdır. İkisi de kesintisiz vardiyada avantaj sağlar, seçim emisyon ve saha koşuluna bağlıdır." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmir-otomotiv-yan-sanayinde-forklift-kullanimi",
            kategori: "Şehir & Sektör",
            baslik: "İzmir Otomotiv Yan Sanayinde Forklift Kullanımı",
            ozet: "Metal parça, kalıp ve komponent elleçlemesinde hassas ve ağır yük yönetimi. İzmir otomotiv yan sanayi sahalarında forklift seçimi.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir otomotiv yan sanayi tesisinde forklift ile parça elleçlemesi",
            tarih: "2026-05-08",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in otomotiv yan sanayisinde metal parça, kalıp ve komponent elleçlenir; bu yükler hem ağır hem hassastır. Bu yazı, otomotiv yan sanayide forklift kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Ağır ve hassas yük",
                    paragraflar: [
                        "Kalıp ve metal parça gibi ağır ve hassas yüklerde kapasite ve yük merkezi dikkatle hesaplanır; hassas konumlama için sideshift değerlendirilebilir. Kapalı üretim alanında elektrikli forklift tercih edilir.",
                        "Hat besleme ve JIT (tam zamanında) üretimde sürekli ve düzenli elleçleme gerekir.",
                    ],
                },
                {
                    baslik: "Zemin ve hat düzeni",
                    paragraflar: [
                        "Epoksi üretim zemininde iz bırakmayan lastik kullanılır; dar hat aralıkları ve dönüş alanı makine seçimini belirler. Hat kenarındaki yaya trafiği yönetilir.",
                        "Kapasite, koridor ve yük özelliği birlikte değerlendirilerek doğru model seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Kalıp taşımada hangi forklift?", cevap: "Ağır ve hassas kalıp yükünde kapasite ve yük merkezi dikkatle hesaplanır; kapalı alanda elektrikli forklift ve hassas konumlama için sideshift değerlendirilir." },
                { soru: "Üretim hattında elektrikli forklift şart mı?", cevap: "Kapalı üretim alanında sıfır emisyon ve düşük gürültü nedeniyle elektrikli forklift tercih edilir; iz bırakmayan lastik epoksi zemine zarar vermez." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "forklift-yaya-guvenligi-ve-saha-trafik-yonetimi",
            kategori: "Güvenlik",
            baslik: "Forklift Yaya Güvenliği ve Saha Trafik Yönetimi",
            ozet: "Forklift-yaya çarpışmaları önlenebilir kazalardır. Ayrılmış yollar, hız yönetimi, kör nokta ve görünürlük önlemleri.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "İzmir deposunda forklift ve yaya trafiğinin güvenli ayrımı",
            tarih: "2026-05-05",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Forklift kazalarının önemli bölümü yaya ile çarpışmadır ve büyük ölçüde önlenebilir. Bu yazı, saha trafik yönetimi ve yaya güvenliği önlemlerini özetler.",
            bolumler: [
                {
                    baslik: "Yolları ayırın",
                    paragraflar: [
                        "En etkili önlem, forklift ve yaya yollarını fiziksel olarak ayırmaktır: işaretli yollar, bariyer ve yaya geçitleri çarpışma riskini belirgin azaltır. Kesişim noktaları ayna, uyarı ve gerektiğinde durak kuralıyla yönetilir.",
                        "Kör noktalar (raf araları, kapı çıkışları) ayrıca işaretlenir.",
                    ],
                },
                {
                    baslik: "Hız, görünürlük ve kural",
                    paragraflar: [
                        "Saha içi hız sınırı belirlenir; görüşü kapatan yükte geri manevra veya gözcü kullanılır. Sesli-ışıklı uyarı, yüksek görünürlüklü yelek ve iyi aydınlatma görünürlüğü artırır.",
                        "Sadece yetkin ve yetkili kişiler forklift kullanır; kurallar saha eğitiminde tekrarlanır.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift-yaya kazası nasıl önlenir?", cevap: "En etkili yöntem forklift ve yaya yollarını fiziksel olarak ayırmaktır; işaretli yollar, bariyer, hız sınırı, ayna ve uyarı sistemleri riski azaltır." },
                { soru: "Görüşü kapatan yükte ne yapılmalı?", cevap: "Görüşü kapatan yükte geri manevra ya da gözcü kullanılır; ani dönüşten kaçınılır ve hız düşürülür. Alternatifte yük yönü veya taşıma yöntemi değiştirilir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmirde-kisa-sureli-mi-uzun-donem-mi-forklift-kiralama",
            kategori: "Maliyet",
            baslik: "İzmir'de Kısa Süreli mi, Uzun Dönem mi Forklift Kiralama?",
            ozet: "Saatlik/günlük ihtiyaç mı, aylık sözleşmeli tedarik mi? Kullanım yoğunluğu ve maliyet açısından süre kararı.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "İzmir'de kısa ve uzun dönem kiralamaya uygun forkliftler",
            tarih: "2026-05-02",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'de forklift ihtiyacının süresi, hem makine seçimini hem maliyeti etkiler. Bu yazı, kısa süreli ve uzun dönem kiralama arasındaki kararı ele alır.",
            bolumler: [
                {
                    baslik: "Kısa süreli kiralama",
                    paragraflar: [
                        "Saatlik veya günlük ihtiyaçlar (sezonluk yoğunluk, tek seferlik yükleme, geçici hat) için kısa süreli kiralama esneklik sağlar; operatörlü hizmetle birlikte pratik olur.",
                        "Tekrarlı kısa ihtiyaçlarda toplam gün sayısı ve tekrarlı nakliye maliyeti değerlendirilir.",
                    ],
                },
                {
                    baslik: "Uzun dönem tedarik",
                    paragraflar: [
                        "Sürekli ve düzenli kullanımda aylık sözleşmeli uzun dönem kiralama, günlük orana göre daha uygun bir birim maliyete yerleşir ve tekrarlı nakliyeyi azaltır. Bakım ve periyodik kontrol yükü kiraya verende kalır.",
                        "Karar; kullanım yoğunluğu, süre ve tekrar sıklığına göre verilir ve yazılı teklifte netleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Sezonluk yoğunlukta hangisi uygun?", cevap: "Sezonluk ve değişken ihtiyaçta kısa süreli/operatörlü kiralama esneklik sağlar; sürekli kullanımda uzun dönem daha uygun birim maliyet sunar." },
                { soru: "Uzun dönemde birim maliyet düşer mi?", cevap: "Genellikle uzun dönem, günlük orana göre daha uygun bir aralığa yerleşir ve tekrarlı nakliyeyi azaltır; kesin oran yazılı teklifte belirtilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "forklift-secerken-saha-analizi-ve-talep-dosyasi",
            kategori: "Ürün Rehberi",
            baslik: "Forklift Seçerken Saha Analizi ve Talep Dosyası",
            ozet: "Doğru forklift, doğru saha bilgisiyle başlar. Yük, koridor, zemin, yükseklik ve vardiya bilgisiyle talep dosyası hazırlığı.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir'de forklift için saha analizi ve ölçüm",
            tarih: "2026-04-29",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "İzmir'de forklift kiralamanın en sık hatası, sahayı yeterince tarif etmeden makine istemektir. Doğru seçim, saha analiziyle başlar. Bu yazı, talep dosyasında paylaşılması gereken bilgileri anlatır.",
            bolumler: [
                {
                    baslik: "Yük ve elleçleme",
                    paragraflar: [
                        "En ağır yükün ağırlığı ve ölçüsü, yük merkezi, paletli mi paletsiz mi, kaldırma yüksekliği ve elleçleme sıklığı kaydedilir. Uzun veya hacimli yükte ataşman ihtiyacı belirtilir.",
                        "Bu bilgiler kapasite ve model seçimini doğrudan belirler.",
                    ],
                },
                {
                    baslik: "Saha ve vardiya",
                    paragraflar: [
                        "En dar koridor, kapı yüksekliği, dönüş alanı, zemin türü (epoksi, beton, mıcır), rampa ve iç/dış mekân bilgisi paylaşılır. Vardiya sayısı ve çalışma saati, güç kaynağı ve şarj planını etkiler.",
                        "Eksiksiz talep dosyası, farklı tedarikçilerin aynı iş tanımı üzerinden teklif vermesini ve doğru makinenin seçilmesini sağlar.",
                    ],
                },
            ],
            sss: [
                { soru: "Forklift talebi için hangi bilgileri vermeliyim?", cevap: "En ağır yük ve ölçüsü, yük merkezi, kaldırma yüksekliği, koridor/kapı ölçüsü, zemin türü, iç/dış mekân ve vardiya bilgisi. Bu bilgiler kapasite, güç kaynağı ve model seçimini belirler." },
                { soru: "Saha görülmeden teklif alınır mı?", cevap: "Doğru ölçü ve saha bilgisiyle çoğu talep uzaktan ön değerlendirilebilir; karmaşık koşullarda yerinde inceleme gerekip gerekmediği ayrıca kararlaştırılır. Kesin model yazılı teklifte belirlenir." },
            ],
            ilgiliUrun: { baslik: "Dizel Forklift Kiralama", slug: "dizel-forklift-kiralama" },
        },
        {
            slug: "izmir-tekstil-ve-konfeksiyonda-forklift-kullanimi",
            kategori: "Şehir & Sektör",
            baslik: "İzmir Tekstil ve Konfeksiyonda Forklift Kullanımı",
            ozet: "Bergama-Kınık hattı ve İzmir tekstil tesislerinde kumaş topu, balya ve koli elleçlemesinde forklift ve iç mekân koşulları.",
            gorsel: blogGorsel.depo,
            gorselAlt: "İzmir tekstil tesisinde forklift ile balya ve koli elleçlemesi",
            tarih: "2026-04-26",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "İzmir'in tekstil ve konfeksiyon sanayisi (Bergama-Kınık hattı dahil) kumaş topu, balya ve koli elleçler. Bu yükler ve kapalı üretim ortamı forklift seçimini belirler. Bu yazı bu sektörde forklift kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Balya, koli ve top",
                    paragraflar: [
                        "Kumaş balyası, iplik ve koli gibi yükler için uygun kapasiteli forklift; paletsiz balyada klemp ataşmanı değerlendirilebilir. Kapalı üretim ve depo alanında elektrikli forklift tercih edilir.",
                        "Hafif ama hacimli yüklerde görüş ve manevra ayrıca planlanır.",
                    ],
                },
                {
                    baslik: "İç mekân koşulları",
                    paragraflar: [
                        "Sıfır emisyon ve düşük gürültü, kapalı tekstil tesisinde vardiya içinde çalışmayı sağlar; iz bırakmayan lastik zemine zarar vermez. Toz ve elyaf yoğun ortamda günlük kontrolde filtreye dikkat edilir.",
                        "Dar depo koridorunda çeviklik ve dönüş alanı makine seçimini belirler.",
                    ],
                },
            ],
            sss: [
                { soru: "Paletsiz balya nasıl taşınır?", cevap: "Paletsiz kumaş veya iplik balyası için klemp gibi ataşmanlar kullanılır; ataşmanlı kapasite ayrıca hesaplanır ve makine uygunluğu değerlendirilir." },
                { soru: "Tekstil tesisinde elektrikli forklift olur mu?", cevap: "Evet; kapalı üretim ve depoda sıfır emisyon ve düşük gürültüsüyle elektrikli forklift uygundur. Toz/elyaf yoğun ortamda filtre ve bakım dikkatle takip edilir." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
        {
            slug: "dar-alan-icin-reach-truck-ve-dar-koridor-forklifti",
            kategori: "Ürün Rehberi",
            baslik: "Dar Alan İçin Reach Truck ve Dar Koridor Çözümleri",
            ozet: "Yüksek raflı ve dar koridorlu depolarda alan verimliliği. Reach truck ve dar koridor forkliftinin standart forkliftten farkı.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Dar koridorlu depoda yüksek raf besleme çözümü",
            tarih: "2026-04-23",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Yüksek raflı ve dar koridorlu depolarda standart karşı ağırlıklı forklift alan verimliliğini düşürebilir. Bu yazı, dar alan için reach truck ve dar koridor çözümlerini ele alır.",
            bolumler: [
                {
                    baslik: "Reach truck nedir?",
                    paragraflar: [
                        "Reach truck, çatalı ileri uzatabilen (reach) yapısıyla dar koridorda yüksek rafa erişim sağlar; karşı ağırlıklı forklifte göre daha dar koridorda çalışır ve alan verimliliğini artırır. Genellikle kapalı depo için elektriklidir.",
                        "Yüksek raf kotu ve dar koridor bir arada olduğunda reach truck değerlendirilir.",
                    ],
                },
                {
                    baslik: "Seçim ölçütü",
                    paragraflar: [
                        "Koridor genişliği, raf yüksekliği ve palet trafiği reach truck ihtiyacını belirler. Standart forkliftin dönemediği dar koridorlarda alan kazancı önemlidir.",
                        "Kapasite, yükseklik ve koridor birlikte değerlendirilir; uygunluk güncel stok üzerinden teklifte teyit edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Reach truck ile forklift farkı nedir?", cevap: "Reach truck çatalı ileri uzatabilir ve dar koridorda yüksek rafa erişir; karşı ağırlıklı standart forklifte göre daha dar koridorda çalışır, alan verimliliği sağlar." },
                { soru: "Dar koridorlu depoda hangi çözüm?", cevap: "Yüksek raf ve dar koridor bir aradaysa reach truck veya dar koridor çözümleri değerlendirilir. Koridor genişliği, raf yüksekliği ve trafik seçimi belirler." },
            ],
            ilgiliUrun: { baslik: "Elektrikli Forklift Kiralama", slug: "elektrikli-forklift-kiralama" },
        },
    ],
    "kutahyaplatform.com": [
        {
            slug: "kutahyada-seramik-fabrikasinda-yuksekte-calisma",
            kategori: "Şehir & Sektör",
            baslik: "Kütahya'da Seramik Fabrikasında Yüksekte Çalışma",
            ozet: "Fırın hattı üstü bakım, toz toplama kanalı ve tavan işlerinde ısı, toz ve dar geçiş koşullarında platform seçimi. Kütahya seramik tesislerine özgü.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Kütahya seramik fabrikasında yükseltici platformla hat üstü bakım",
            tarih: "2026-07-20",
            guncelleme: "2026-07-24",
            okuma: 6,
            giris: "Kütahya'nın sanayisi seramik üretimiyle şekillenir. Seramik fabrikalarında yüksekte çalışma; ısı, toz, dar geçiş ve hassas zemin gibi kendine özgü koşullar getirir. Bu yazı, Kütahya seramik tesislerinde platform seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Fırın hattı ve toz koşulları",
                    paragraflar: [
                        "Fırın hattı üstü bakım, tavan aydınlatması, toz toplama kanalı ve dış cephe işleri seramik tesisinin tipik yüksekte çalışma noktalarıdır. Isı, toz ve dar geçiş bu işlerde erişim planını belirler; engel aşmalı noktalarda eklemli platform değerlendirilir.",
                        "Toz yoğun ortamda günlük kontrolde filtre ve hareketli parçalara dikkat edilir.",
                    ],
                },
                {
                    baslik: "Bakım penceresi ve zemin",
                    paragraflar: [
                        "Fırın ve hat çevresindeki işler çoğu zaman planlı duruş penceresinde yapılır; makine, geçiş ölçüleri ve iş izni bu pencereye göre planlanır. Seramik kaplı bölüm ve fabrika betonu farklı zemin davranışı gösterir.",
                        "İç mekân için elektrikli, açık saha için dizel modeller değerlendirilir; hassas yüzeyde iz bırakmayan lastik kullanılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Seramik fabrikasında hangi platform kullanılır?", cevap: "Tam altından erişilen tavan/hat işlerinde makaslı; fırın, kanal veya ekipman engelinin arkasına erişimde eklemli platform değerlendirilir. Isı, toz ve geçiş ölçüsü seçimi belirler." },
                { soru: "Toz yoğun ortamda ek önlem gerekir mi?", cevap: "Evet; günlük kontrolde filtre, hareketli parça ve elektrik bağlantılarına ek dikkat gösterilir. Üretici bakım talimatı esastır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-makasli-platform-ile-depo-ve-tesis-isleri",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Makaslı Platform ile Depo ve Tesis İşleri",
            ozet: "Depo rafı, tavan aydınlatması ve tesisatta dikey erişim. Kütahya seramik ve üretim tesislerinde makaslı platform kullanımı.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Kütahya tesisinde makaslı platformla depo ve tavan çalışması",
            tarih: "2026-07-17",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'daki depo ve üretim tesislerinde iç mekân yüksekte çalışma çoğunlukla makaslı platformla yürür. Bu yazı, bu işlerde makaslı platform kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Makaslının tipik işleri",
                    paragraflar: [
                        "Depo tavanı, raf, aydınlatma ve düz cephe gibi tam altından erişilen işlerde makaslı platform ilk tercihtir; geniş sepetiyle birden fazla çalışan malzemeyle yükselir. Elektrikli modeller iç mekânda vardiya içinde çalışır.",
                        "Engel aşma gereken (kanal, konveyör üstü) noktalarda makaslı yetersiz kalır; eklemli değerlendirilir.",
                    ],
                },
                {
                    baslik: "Zemin ve koridor",
                    paragraflar: [
                        "Fabrika betonu ve seramik kaplı bölüm farklı taşıma davranışı gösterir; mazgal ve dilatasyon noktaları değerlendirilir. Koridor genişliği ve kapı yüksekliği makine ölçüsüyle karşılaştırılır.",
                        "Hassas yüzeyde iz bırakmayan lastik ve gerekirse koruyucu levha kullanılır.",
                    ],
                },
            ],
            sss: [
                { soru: "Depo tavanı işinde hangi platform?", cevap: "Tam altından erişilen tavan ve raf işlerinde makaslı platform yeterlidir; kanal veya ekipman engelinin arkasına erişimde eklemli platform değerlendirilir." },
                { soru: "Seramik zeminde platform iz bırakır mı?", cevap: "İz bırakmayan lastik seçenekleriyle hassas seramik ve epoksi zeminde yüzey korunur; gerekirse koruyucu levha kullanılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-platform-kiralama-fiyatini-etkileyen-unsurlar",
            kategori: "Maliyet",
            baslik: "Kütahya'da Platform Kiralama Fiyatını Etkileyen Unsurlar",
            ozet: "Makine sınıfı, süre, nakliye (Tavşanlı, Gediz), operatör ve saha koşulunun maliyete etkisi. Kütahya'da teklif karşılaştırma.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Kütahya bölgesinde kiralamaya hazır platformlar",
            tarih: "2026-07-14",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'da platform kiralama fiyatı tek bir günlük ücret değildir; makine sınıfı, süre, bölgesel nakliye ve saha koşulunun kesişiminde oluşur. Bu yazı, maliyeti belirleyen kalemleri açıklar.",
            bolumler: [
                {
                    baslik: "Sınıf, süre ve nakliye",
                    paragraflar: [
                        "Erişim sınıfı (makaslı, eklemli, teleskopik) ve gereken yükseklik fiyatın ilk belirleyenidir. Süre; çalışma saati ve atıl günleri kapsar. Nakliye; Kütahya merkez, Tavşanlı ve Gediz hattındaki mesafeye ve rotaya göre değişir.",
                        "Nakliye sorumluluğu ve ücreti yazılı teklifte belirtilir.",
                    ],
                },
                {
                    baslik: "Operatör ve saha",
                    paragraflar: [
                        "Operatörlü ve operatörsüz kiralama farklı fiyatlanır. Seramik tesisi gibi sahalarda istenen evrak ve giriş prosedürü kapsamı etkiler.",
                        "Kesin stok, sabit fiyat veya teslimat sözü bu içerikte verilmez; uygunluk güncel makine durumu ve saha koşuluyla yazılı teklifte kesinleşir.",
                    ],
                },
            ],
            sss: [
                { soru: "Tavşanlı veya Gediz'e teslimat fiyatı değişir mi?", cevap: "Evet; nakliye bölgesel mesafeye ve güzergâha göre değişir. Çıkış noktası, adres ve ücret yazılı teklifte belirtilir." },
                { soru: "Platform fiyatı neden peşin liste hâlinde verilmiyor?", cevap: "Fiyat; sınıf, süre, nakliye ve saha koşulunun kesişiminde oluşur. Bu değişkenler görülmeden verilen liste fiyatı yanıltıcı olur; doğru bedel yazılı teklifte belirlenir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-cephe-ve-cati-isinde-platform-secimi",
            kategori: "Şehir & Sektör",
            baslik: "Kütahya'da Cephe ve Çatı İşinde Platform Seçimi",
            ozet: "Fabrika ve kamu binası cephe/çatı işlerinde engel aşan erişim. Kütahya'da saçak, peyzaj ve yükseklik koşullarında doğru sınıf.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Kütahya'da fabrika cephe ve çatı işinde yükseltici platform",
            tarih: "2026-07-11",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'daki fabrika ve kamu binası cephelerinde çatı, saçak ve kaplama işleri çoğu zaman engel aşan erişim gerektirir. Bu yazı, cephe ve çatı işlerinde platform seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Cephe önü engelli mi?",
                    paragraflar: [
                        "Cephe önünde saçak, boru veya çıkıntı varsa eklemli platformun engel aşan bomu gerekir; düz ve açık cephede makaslı yeterli olabilir. Yüksek ve uzak noktada teleskopik değerlendirilir.",
                        "Aynı projede farklı iş kalemleri farklı sınıf gerektirebilir.",
                    ],
                },
                {
                    baslik: "Zemin ve rüzgâr",
                    paragraflar: [
                        "Açık cephede rüzgâr limiti makineye özgüdür; zemin taşıma kapasitesi ve peyzaj yüzeyleri kontrol edilir. Kış aylarında buzlanma ve düşük sıcaklık ek önlem gerektirir.",
                        "Faaliyet süren binalarda çalışma alanı ayrılır ve alt alan korunur.",
                    ],
                },
            ],
            sss: [
                { soru: "Fabrika cephesi için hangi platform?", cevap: "Cephe önü açıksa makaslı, engel (saçak, boru) varsa eklemli, yüksek/uzak noktada teleskopik değerlendirilir. Saha geometrisi ve rüzgâr çalışma öncesinde kontrol edilir." },
                { soru: "Kışın cephe işi yapılabilir mi?", cevap: "Yapılabilir ancak buzlanma, rüzgâr ve düşük sıcaklık ek önlem gerektirir; zemin kontrolü ve durdurma kriterleri baştan belirlenir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-manlift-kiralarken-saha-kesfi-ve-olcum",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Platform Kiralarken Saha Keşfi ve Ölçüm",
            ozet: "Doğru makine doğru ölçümle başlar. Çalışma yüksekliği, yatay erişim, engel, zemin ve giriş ölçüleri; Kütahya sahalarında talep dosyası hazırlığı.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Kütahya sahasında platform için keşif ve ölçüm",
            tarih: "2026-07-08",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'da platform kiralamanın en sık hatası, sahayı yeterince tarif etmeden makine istemektir. Doğru makine, işin geometrisini doğru ölçmekle başlar. Bu yazı, keşif ve ölçümde kaydedilmesi gerekenleri anlatır.",
            bolumler: [
                {
                    baslik: "Üç değeri ayrı ölçün",
                    paragraflar: [
                        "Çalışma noktasının yüksekliği, makinenin kurulabileceği en yakın sağlam zeminden yatay uzaklık ve arada aşılması gereken engelin konumu ayrı ölçülür. Seramik tesislerinde fırın, kanal ve ekipman engeli sıktır; bu, sınıf seçimini belirler.",
                        "Ölçüler fotoğrafla, başlangıç ve hedef noktası işaretlenerek paylaşılırsa yanlış yorum azalır.",
                    ],
                },
                {
                    baslik: "Zemin ve giriş",
                    paragraflar: [
                        "Fabrika betonu, seramik kaplı bölüm ve açık stok alanı farklı taşıma davranışı gösterir; kapasite belirsizse tahmin yürütülmez. Kapı, koridor ve dönüş alanı makinenin ölçüleriyle karşılaştırılır.",
                        "Eksiksiz saha dosyası, teklifleri aynı iş tanımıyla karşılaştırmayı sağlar.",
                    ],
                },
            ],
            sss: [
                { soru: "Keşif için sahaya gelinmeli mi?", cevap: "Çoğu talep doğru ölçü ve fotoğrafla uzaktan ön değerlendirilebilir. Karmaşık erişim veya belirsiz zeminde yerinde inceleme gerekip gerekmediği ayrıca kararlaştırılır." },
                { soru: "Hangi ölçüleri paylaşmalıyım?", cevap: "Çalışma yüksekliği, yatay erişim, engel geometrisi, zemin durumu, kapı-koridor ölçüleri, sepette taşınacak yük ve saha giriş koşulları. Fotoğrafta işaretleme değerlendirmeyi hızlandırır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-maden-ve-uretim-tesisinde-yuksekte-calisma",
            kategori: "Şehir & Sektör",
            baslik: "Kütahya'da Maden ve Üretim Tesisinde Yüksekte Çalışma",
            ozet: "Maden sahası yakını, silo ve üretim tesislerinde açık saha erişimi. Bozuk yüzey, toz ve yükseklik koşullarında platform seçimi.",
            gorsel: blogGorsel.celikMontaj,
            gorselAlt: "Kütahya maden ve üretim tesisinde yükseltici platformla çalışma",
            tarih: "2026-07-05",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya, seramik yanında maden ve üretim tesisleriyle de öne çıkar. Bu sahalarda yüksekte çalışma; bozuk yüzey, toz ve açık saha koşulları getirir. Bu yazı, maden ve üretim tesislerinde platform seçimini ele alır.",
            bolumler: [
                {
                    baslik: "Açık saha ve zemin",
                    paragraflar: [
                        "Maden sahasına yakın bozuk yüzey ve açık stok alanında dizel ve 4x4 modeller, taşıma kapasitesi doğrulanarak kullanılır. Silo, elevatör ve tesis üst yapı işleri engel aşmalı olduğunda eklemli/teleskopik değerlendirilir.",
                        "Zemin kapasitesi belirsizse tahmin yürütülmez; gerekirse çelik plaka serilir.",
                    ],
                },
                {
                    baslik: "Toz ve güvenlik",
                    paragraflar: [
                        "Toz yoğun ortamda günlük kontrolde filtre ve hareketli parçalara dikkat edilir. Rüzgâr limiti ve alan izolasyonu açık sahada standart önlemlerdir.",
                        "İş izni ve operatör yeterliliği saha kurallarına göre yönetilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Maden sahası yakınında hangi platform?", cevap: "Bozuk yüzey ve açık sahada dizel 4x4 modeller taşıma kapasitesi doğrulanarak kullanılır; silo ve tesis üst yapı işlerinde engel aşmalı erişim için eklemli/teleskopik değerlendirilir." },
                { soru: "Tozlu sahada ek önlem gerekir mi?", cevap: "Evet; günlük kontrolde filtre ve hareketli parçalara ek dikkat gösterilir, üretici bakım talimatı esastır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-elektrikli-eklemli-platform-ic-mekan-isleri",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Elektrikli Eklemli Platform ile İç Mekân İşleri",
            ozet: "Seramik tesisi, depo ve kapalı üretim alanında sıfır emisyon ve engel aşan erişim. Elektrikli eklemli platformun iç mekân avantajları.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Kütahya seramik tesisinde elektrikli eklemli platformla iç mekân çalışması",
            tarih: "2026-07-02",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'nın kapalı seramik ve üretim tesislerinde hem sıfır emisyon hem engel aşan erişim gerektiğinde elektrikli eklemli platform öne çıkar. Bu yazı, bu makinenin iç mekân kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Sıfır emisyon ve engel aşma",
                    paragraflar: [
                        "Elektrikli eklemli platform, kapalı alanda sıfır emisyon ve düşük gürültüyle çalışır; kırılan bomuyla fırın, kanal veya ekipman engelinin arkasına erişir. İz bırakmayan lastik hassas seramik zemine zarar vermez.",
                        "Dar şasi standart geçişlere uygundur; dönebilen kule dar tesis içinde manevra sağlar.",
                    ],
                },
                {
                    baslik: "Şarj ve vardiya",
                    paragraflar: [
                        "Çalışma süresi model ve kullanıma göre değişir; kesintisiz çalışmada fırsat şarjı veya yedek makine planlanır, yakında uygun voltajda priz gerekir.",
                        "Şarj altyapısı ve vardiya planı seçilen modelin üretici verileriyle değerlendirilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Seramik tesisinde eklemli platform iz bırakır mı?", cevap: "İz bırakmayan lastik seçenekleriyle hassas seramik ve epoksi zeminde yüzey korunur; gerekirse koruyucu levha kullanılır." },
                { soru: "Kapalı alanda elektrikli mi dizel mi?", cevap: "Kapalı ve havalandırması sınırlı alanda sıfır emisyonlu elektrikli modeller kullanılır; dizel açık saha içindir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-teleskopik-platform-ile-yuksek-erisim",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Teleskopik Platform ile Yüksek Erişim",
            ozet: "Yüksek yapı, silo ve baca işlerinde açık doğrultuda uzun yatay erişim. Teleskopik platformun Kütahya sanayisindeki kullanım alanları.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Kütahya'da yüksek erişim için teleskopik platformla çalışma",
            tarih: "2026-06-29",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'nın sanayi sahalarında bazı işler hem yüksek hem uzak noktaya erişim gerektirir; bu noktada teleskopik platform öne çıkar. Bu yazı, teleskopik platformun kullanım alanlarını ve sınırlarını anlatır.",
            bolumler: [
                {
                    baslik: "Ne zaman teleskopik?",
                    paragraflar: [
                        "Teleskopik bom tek doğrultuda uzar; aynı yükseklik sınıfında en uzun yatay erişimi verir. Yüksek fabrika cephesi, silo ve baca gibi makineyi işin uzağına kurmak gereken işlerde doğru seçimdir.",
                        "Engel aşma kabiliyeti sınırlıdır: bomun önünde yapı varsa eklemliye dönmek gerekir.",
                    ],
                },
                {
                    baslik: "Açık saha koşulları",
                    paragraflar: [
                        "Yüksek erişim genellikle dizel ve 4x4 modellerle karşılanır; eğim, gevşek zemin ve rüzgâr belirleyicidir. Rüzgâr limiti makineye özgüdür ve erişim yükseldikçe önem kazanır.",
                        "Zemin taşıma kapasitesi doğrulanmadan platform yükseltilmez.",
                    ],
                },
            ],
            sss: [
                { soru: "Teleskopik ve eklemli farkı?", cevap: "Arada engel varsa eklemli, engel yok ama nokta uzaktaysa teleskopik. Teleskopik açık doğrultuda daha uzun erişim verir, engel aşamaz." },
                { soru: "Teleskopik rüzgârdan çok mu etkilenir?", cevap: "Uzayan bom rüzgâr etkisini artırır; rüzgâr limiti makineye özgüdür ve yüksek erişimde önem kazanır. Çalışma öncesinde teknik föy ve bilgi plakası kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-yuksekte-calisma-guvenligi-temel-kurallar",
            kategori: "Güvenlik",
            baslik: "Kütahya'da Yüksekte Çalışma Güvenliği: Temel Kurallar",
            ozet: "Zemin, rüzgâr, alan izolasyonu ve kurtarma planı. Kütahya seramik ve üretim tesislerinde güvenli yüksekte çalışmanın temel başlıkları.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Kütahya tesisinde güvenli yüksekte çalışma düzeni",
            tarih: "2026-06-26",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'daki seramik ve üretim tesislerinde yüksekte çalışma güvenliği, makine seçilmeden önce planlanır. Bu yazı, güvenli çalışmanın temel başlıklarını özetler.",
            bolumler: [
                {
                    baslik: "Zemin, kurulum ve rüzgâr",
                    paragraflar: [
                        "Zeminin taşıma kapasitesi ve eğimi kontrol edilir; denge göstergesi ve zemin koşulu doğrulanmadan platform yükseltilmez. Açık sahada rüzgâr limiti makineye özgüdür ve durdurma kriteri baştan yazılır.",
                        "Eklemli ve teleskopik platformlarda fırlama riskine karşı üretici talimatına uygun bağlantı sistemi kullanılır.",
                    ],
                },
                {
                    baslik: "Alan izolasyonu ve kurtarma",
                    paragraflar: [
                        "Makinenin altı ve devrilme zarfı şeritle ayrılır; kör noktalar için gözcü ve yönlendirme planlanır. Vardiya öncesi kontrol her çalışmadan önce yapılıp kaydedilir.",
                        "Her yüksekte çalışma için kurtarma planı gerekir; asılı kalma durumunda hızlı müdahale yöntemi önceden belirlenir.",
                    ],
                },
            ],
            sss: [
                { soru: "Platform hangi zeminde yükseltilmez?", cevap: "Taşıma kapasitesi doğrulanmamış, eğimli veya altında boşluk bulunan zeminde denge göstergesi teyit edilmeden yükseltilmez. Belirsizlikte yapı/zemin yetkilisinin görüşü alınır." },
                { soru: "Kurtarma planı zorunlu mu?", cevap: "Yüksekte çalışma riski taşıyan her sahada, düşme/asılı kalma durumunda hızlı müdahaleyi sağlayacak bir yöntem önceden planlanmış olmalıdır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-operatorlu-platform-kiralama-ne-zaman-gerekir",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Operatörlü Platform Kiralama Ne Zaman Gerekir?",
            ozet: "Seramik tesisi ve saha işlerinde operatörlü mü operatörsüz mü? Yetkinlik, belge ve saha oryantasyonu açısından karar rehberi.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Kütahya'da operatörlü kiralamaya hazır platformlar",
            tarih: "2026-06-23",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'daki seramik tesisi ve saha işlerinde operatör kararı hem güvenliği hem maliyeti etkiler. Bu yazı, operatörlü ve operatörsüz kiralama arasındaki farkı ve karar ölçütlerini anlatır.",
            bolumler: [
                {
                    baslik: "Operatörlü kiralama",
                    paragraflar: [
                        "Kısa süreli, tek seferlik veya kendi ekibinizde yetkin operatör bulunmayan işlerde operatörlü kiralama hem güvenli hem pratik olur. Seramik tesisi gibi sahalarda saha oryantasyonu ve giriş prosedürü de kapsama girer.",
                        "Operatörlü hizmette vardiya, fazla çalışma ve yol-konaklama teklifte ayrı görülür.",
                    ],
                },
                {
                    baslik: "Operatörsüz ve belge",
                    paragraflar: [
                        "Operatörsüz kiralamada kullanıcının yetkinliği ve teslim eğitimi önem kazanır. Operatör belgesi gerekliliği; görev, ekipman sınıfı, işveren prosedürü ve mevzuata göre belirlenir ve resmî kaynaklardan doğrulanır.",
                        "Uzun süreli projelerde kendi yetkin operatörünüzle operatörsüz kiralama ekonomik olabilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Seramik tesisinde operatörlü kiralama şart mı?", cevap: "Şart değildir ama tesis kurallarını ve ekipmanı tanıyan bir operatörle çalışmak güvenliği artırır. Kendi yetkin ekibiniz varsa operatörsüz de olabilir." },
                { soru: "Operatör belgesi gerekliliği nasıl belirlenir?", cevap: "Görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir; kesin şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-cam-ve-cini-uretiminde-yuksekte-calisma",
            kategori: "Şehir & Sektör",
            baslik: "Kütahya'da Cam ve Çini Üretiminde Yüksekte Çalışma",
            ozet: "Çini ve cam atölyeleri ile üretim tesislerinde hassas erişim, fırın çevresi ve tavan işleri. Kütahya'nın geleneksel sanayisinde platform kullanımı.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Kütahya çini ve cam üretiminde yükseltici platformla çalışma",
            tarih: "2026-06-20",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya, çini ve cam üretimiyle de tanınır. Bu atölye ve tesislerde yüksekte çalışma; hassas zemin, fırın çevresi ve dar geçiş koşulları getirir. Bu yazı, cam ve çini üretiminde platform kullanımını ele alır.",
            bolumler: [
                {
                    baslik: "Hassas ortam ve fırın çevresi",
                    paragraflar: [
                        "Çini ve cam atölyelerinde tavan aydınlatması, havalandırma ve fırın çevresi bakımı yapılır; iz bırakmayan lastik hassas zemine zarar vermez, elektrikli modeller sıfır emisyonla çalışır.",
                        "Fırın ve ekipman engelinin arkasına erişimde eklemli platform değerlendirilir.",
                    ],
                },
                {
                    baslik: "Dar geçiş ve zemin",
                    paragraflar: [
                        "Atölye ve tesislerde dar geçiş ve kapı ölçüsü makine seçimini belirler; dar gövdeli makaslı veya dikey personel yükseltici çeviklik sağlar.",
                        "Zeminin taşıma kapasitesi ve seramik/çini kaplı yüzey kontrol edilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Çini atölyesinde hangi platform uygun?", cevap: "Dar geçiş ve hassas zemin nedeniyle dar gövdeli makaslı veya dikey personel yükseltici çevik bir çözümdür; engel aşma gerekiyorsa eklemli platform değerlendirilir." },
                { soru: "Hassas zeminde iz bırakır mı?", cevap: "İz bırakmayan lastik seçenekleriyle çini ve cam atölyelerinin hassas zemini korunur; gerekirse koruyucu levha kullanılır." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-makasli-mi-eklemli-mi-platform-secimi",
            kategori: "Karşılaştırma",
            baslik: "Kütahya'da Makaslı mı, Eklemli mi Platform?",
            ozet: "Depo ve tavan işinde makaslı, fırın ve ekipman arkası erişimde eklemli. Kütahya seramik sanayisinde iş tipine göre seçim.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Kütahya'da makaslı ve eklemli platform seçimi",
            tarih: "2026-06-17",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'daki işlerin geometrisi makaslı ve eklemli arasındaki seçimi belirler. Bu yazı, iş tipine göre doğru sınıfı ayırt etmeyi anlatır.",
            bolumler: [
                {
                    baslik: "Tam altından erişim: makaslı",
                    paragraflar: [
                        "Depo tavanı, aydınlatma ve düz cephe gibi tam altından erişilen işlerde makaslı platform ilk tercihtir; geniş sepetiyle birden fazla çalışan yükselir.",
                        "Gıda ve hassas alanda elektrikli makaslı vardiya içinde çalışır.",
                    ],
                },
                {
                    baslik: "Engel arkası: eklemli",
                    paragraflar: [
                        "Fırın çevresi, kanal ve ekipman arkası erişimde makaslı yetersiz kalır; eklemlinin engel aşan bomu gerekir. Kütahya seramik tesislerinde bu tür engelli erişim sıktır.",
                        "Seçim işin geometrisine göre yapılır; aynı projede iki tip de gerekebilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Fırın çevresi işinde hangisi?", cevap: "Fırın, kanal veya ekipman engelinin arkasına erişim gerekiyorsa eklemli platform; tam altından erişilen tavan/raf işlerinde makaslı yeterlidir." },
                { soru: "İki tip aynı projede kullanılır mı?", cevap: "Evet; farklı iş kalemleri farklı sınıf gerektirebilir, kombine kiralama maliyeti düşürür." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-elektrikli-mi-dizel-mi-platform-secimi",
            kategori: "Karşılaştırma",
            baslik: "Kütahya'da Elektrikli mi, Dizel mi Platform?",
            ozet: "Kapalı seramik tesisi işinde elektrikli, açık saha ve maden çevresinde dizel. Kütahya koşullarında güç kaynağı seçimi.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Kütahya'da elektrikli ve dizel platform seçimi",
            tarih: "2026-06-14",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'da güç kaynağı seçimi çalışma ortamına göre değişir: kapalı seramik ve üretim alanında elektrikli, açık saha ve maden çevresinde dizel. Bu yazı bu seçimi ele alır.",
            bolumler: [
                {
                    baslik: "Kapalı alan: elektrikli",
                    paragraflar: [
                        "Kapalı seramik tesisi ve depoda sıfır emisyon ve düşük gürültü nedeniyle elektrikli modeller kullanılır; iz bırakmayan lastik hassas zemine zarar vermez. Şarj altyapısı ve vardiya planı baştan kurulur.",
                        "Dar tesis içinde çeviklik ve dönüş alanı değerlendirilir.",
                    ],
                },
                {
                    baslik: "Açık saha: dizel",
                    paragraflar: [
                        "Açık saha, maden çevresi ve eğimli zeminde dizel modeller 4x4 çekiş ve jack sistemiyle güvenilirdir; yakıt ikmali hızlıdır. Kapalı alanda egzoz nedeniyle kullanılmaz.",
                        "Doğru güç kaynağı; makine tipiyle birlikte saha koşuluna göre seçilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Seramik tesisinde dizel platform olur mu?", cevap: "Kapalı ve emisyona duyarlı seramik alanında elektrikli modeller tercih edilir; dizel açık saha içindir. Kapalı alanda dizel egzozu risk oluşturur." },
                { soru: "Açık madende elektrikli çalışır mı?", cevap: "Kısa ve düz zeminli kullanım mümkün olsa da açık saha, eğim ve rüzgâr koşullarında dizel modeller daha güvenilirdir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-platform-nakliye-ve-teslimat-planlamasi",
            kategori: "Maliyet",
            baslik: "Kütahya'da Platform Nakliye ve Teslimat Planlaması",
            ozet: "Kütahya merkez, Tavşanlı ve Gediz hattında rota, kabul saati ve nakliye ölçüsü. Teslimatta sık yapılan hatalar.",
            gorsel: blogGorsel.forkliftDepo,
            gorselAlt: "Kütahya'da platform teslimatı ve sevkiyat hazırlığı",
            tarih: "2026-06-11",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'da platform sevkiyatı, bölgesel mesafe ve saha koşullarına göre planlanır. Bu yazı, nakliye ve teslimat planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Rota ve saha kabulü",
                    paragraflar: [
                        "Nakliye; çıkış noktası ile Kütahya merkez, Tavşanlı veya Gediz arasındaki mesafe, güzergâh, tesis kabul saati ve indirme alanına göre planlanır. Nakliye aracının tesis kapısından dönüşü önceden sorulur.",
                        "Seramik tesisi gibi sahalarda güvenlik kaydı ve randevu süreçleri plana girer.",
                    ],
                },
                {
                    baslik: "Nakliye ölçüsü ≠ çalışma ölçüsü",
                    paragraflar: [
                        "Makinenin nakliye ölçüsü çalışma ölçüsünden farklı olabilir; kapı, koridor ve rampa taşıma ölçüleriyle karşılaştırılır. Doğru ölçü paylaşımı makinenin sahaya girememesi gibi hataları önler.",
                        "Nakliye sorumluluğu ve dönüş bildirim süresi yazılı teklifte belirtilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Tavşanlı/Gediz teslimatı nasıl planlanır?", cevap: "Mesafe, güzergâh, kabul saati ve indirme alanı önceden teyit edilir; nakliye ücreti ve sorumluluğu yazılı teklifte yer alır." },
                { soru: "Makine sahaya sığmazsa?", cevap: "Bu yüzden nakliye ölçüsü kapı-koridor-rampa ölçüleriyle önceden karşılaştırılır. Doğru ölçü paylaşımı pahalı hataları önler." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-gunluk-haftalik-aylik-platform-kiralama",
            kategori: "Maliyet",
            baslik: "Kütahya'da Günlük, Haftalık, Aylık Platform Kiralama",
            ozet: "Kiralama süresinin birim maliyete etkisi ve bölgesel nakliyeyle ilişkisi. Kütahya projelerinde doğru süre planlaması.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Kütahya'da uzun dönem kiralamaya uygun platform",
            tarih: "2026-06-08",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'da platform kiralamada süre, birim maliyeti doğrudan etkiler ve bölgesel nakliyeyle birlikte değerlendirilir. Bu yazı, süre planlamasını ele alır.",
            bolumler: [
                {
                    baslik: "Süre ve nakliye ilişkisi",
                    paragraflar: [
                        "Günlük, haftalık ve aylık kiralamada birim maliyet farklıdır; uzun dönem genellikle daha uygun bir aralığa yerleşir. Tavşanlı veya Gediz gibi uzak noktalarda uzun dönem, tekrarlı nakliye maliyetini azaltır.",
                        "'Süre'; çalışma saati, vardiya ve atıl günleri kapsar.",
                    ],
                },
                {
                    baslik: "Doğru planlama",
                    paragraflar: [
                        "Başlangıç-bitiş tarihi ve günlük çalışma saati baştan yazılırsa sürpriz kalem oluşmaz. Kısa ama tekrarlı ihtiyaçta toplam gün ve tekrarlı nakliye karşılaştırılır.",
                        "Kesin oran; makine, çalışma saati sınırı ve nakliye planına göre yazılı teklifte belirtilir.",
                    ],
                },
            ],
            sss: [
                { soru: "Uzak bölgede uzun dönem daha mı mantıklı?", cevap: "Tavşanlı, Gediz gibi uzak noktalarda uzun dönem, tekrarlı nakliye maliyetini azaltarak toplam maliyeti düşürebilir. Karar iş süresine ve tekrar sıklığına göre verilir." },
                { soru: "Atıl gün kapsama girer mi?", cevap: "Makinenin sahada olup çalışmadığı günler genellikle kapsama girer; bu yüzden başlangıç-bitiş tarihi ve çalışma günleri baştan tanımlanmalıdır." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-sepet-kapasitesi-ve-calisma-diyagrami",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Sepet Kapasitesi ve Çalışma Diyagramı",
            ozet: "Azami değerler her konumda birlikte geçerli değildir. Çalışma diyagramı ve kalan sepet kapasitesini doğru okuma.",
            gorsel: blogGorsel.holTavan,
            gorselAlt: "Yükseltici platform sepetinde personel ve malzeme yükü",
            tarih: "2026-06-05",
            guncelleme: "2026-07-24",
            okuma: 5,
            giris: "Kütahya'da platform kiralarken teklifte yalnız yükseklik yazması yeterli değildir; azami erişim ve azami yük çoğu zaman aynı anda kullanılamaz. Bu yazı, çalışma diyagramını doğru okumayı anlatır.",
            bolumler: [
                { baslik: "Çalışma diyagramı", paragraflar: ["Çalışma diyagramı, bomun ulaşabildiği her nokta için izin verilen sepet yükünü gösterir; erişim uzadıkça izin verilen yük düşer. Hedef konumdaki kalan kapasite, işin en zorlu noktasına göre kontrol edilir.", "Model belli değilse teklifte performans aralığı ve kabul kriterleri tanımlanır."] },
                { baslik: "Sepet yükünü hesaplamak", paragraflar: ["Sepet yükü personel + el aleti + malzemedir; geniş yüzeyli malzeme rüzgâr etkisini artırır. En yüksek + en uzak + en ağır kombinasyonu belirlenip seçilen modelin çalışma zarfı teknik föyden teyit edilir.", "Payı büyük makineyle değil doğru modelle bırakmak gerekir."] },
            ],
            sss: [
                { soru: "Azami yükseklik ve erişim birlikte kullanılır mı?", cevap: "Bom uzadıkça denge ve yapısal sınırlar nedeniyle izin verilen yük ve erişim değişir. Çalışma diyagramı her konum için izin verilen değeri gösterir." },
                { soru: "Kalan kapasiteyi nasıl öğrenirim?", cevap: "Seçilen modelin çalışma diyagramından hedef noktadaki değer okunur; model belli değilse kabul kriterleri tanımlanıp sevkten önce teyit edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-yukseklik-siniflari-secimi",
            kategori: "Ürün Rehberi",
            baslik: "Kütahya'da Platform Yükseklik Sınıfları Nasıl Seçilir?",
            ozet: "İç mekân orta yükseklikten yüksek endüstriyel erişime kadar sınıf seçimi. Kütahya seramik ve tesis işlerinde doğru yükseklik.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Kütahya'da farklı yükseklik sınıfında platformlar",
            tarih: "2026-06-02",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'da platform kiralarken 'kaç metre?' tek başına yeterli değildir; aynı yükseklikte farklı erişim ve kapasite bulunur. Bu yazı sınıf seçimini anlatır.",
            bolumler: [
                { baslik: "16-20 metre", paragraflar: ["Fabrika içi tesisat, depo tavanı ve orta yükseklikteki işleri karşılar; elektrikli modeller yaygındır. Yatay erişim sınırlıdır.", "Engelin ötesine uzanılması gereken işlerde bir üst sınıf değerlendirilir."] },
                { baslik: "28-43 metre", paragraflar: ["Yüksek cephe, silo ve baca işleri için; genellikle dizel/4x4 modeller. Erişim arttıkça sepet yükü ve rüzgâr limiti değişir.", "Sınıf, işin en zorlu noktasına göre seçilir."] },
            ],
            sss: [
                { soru: "16 metre hangi işlere yeter?", cevap: "Fabrika içi tesisat, depo tavanı ve orta yükseklikteki cephe işlerine genellikle yeterlidir. Yüksek cephe/silo işlerinde 28-43 metre değerlendirilir." },
                { soru: "Yükseklik arttıkça kapasite düşer mi?", cevap: "Evet; erişim ve yükseklik arttıkça izin verilen sepet yükü değişebilir, çalışma diyagramından kontrol edilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-emniyet-kemeri-ve-ankraj-noktasi",
            kategori: "Güvenlik",
            baslik: "Kütahya'da Emniyet Kemeri ve Ankraj Noktası",
            ozet: "Eklemli ve teleskopik platformlarda fırlama etkisine karşı tam vücut kemeri ve doğru ankraj; makaslıdan farkı.",
            gorsel: blogGorsel.tesisat,
            gorselAlt: "Yükseltici platformda emniyet donanımıyla çalışma",
            tarih: "2026-05-30",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Kütahya'daki seramik ve tesis işlerinde eklemli/teleskopik platform kullanımı yaygındır; bu makinelerde fırlama etkisine karşı bağlantı sistemi kritiktir. Bu yazı emniyet kemeri ve ankrajı ele alır.",
            bolumler: [
                { baslik: "Fırlama etkisi ve bağlantı", paragraflar: ["Eklemli/teleskopikte makine ani hareket ettiğinde fırlama etkisi çalışanı korkuluk üzerine taşıyabilir. Üretici talimatına uygun tam vücut kemeri ve bağlantı sistemi kullanılır; kemer işaretli ankraj noktasına bağlanır.", "Yanlış uzunluk veya nokta koruma sistemini işlevsiz bırakır."] },
                { baslik: "Makaslıdan farkı", paragraflar: ["Makaslıda sepet dikey hareket eder, fırlama etkisi yoktur; korkuluk sağlamsa kemer üretici aksini demedikçe zorunlu değildir.", "Kemer kullanılan her yerde kurtarma planı da gerekir."] },
            ],
            sss: [
                { soru: "Makaslıda kemer şart mı?", cevap: "Korkuluğu sağlam ve kapısı kapalı makaslıda fırlama etkisi olmadığından kemer üretici aksini belirtmedikçe zorunlu değildir; eklemli/teleskopikte bağlantı sistemi gerekir." },
                { soru: "Kemer nereye bağlanır?", cevap: "Korkuluğa değil, üretici tarafından işaretlenmiş ankraj noktasına; bu nokta her sepette bulunur ve kılavuzda gösterilir." },
            ],
            ilgiliUrun: { baslik: "Eklemli ve Teleskopik Platform Kiralama", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        },
        {
            slug: "kutahyada-platform-periyodik-ve-gunluk-kontrol",
            kategori: "Güvenlik",
            baslik: "Kütahya'da Platform Periyodik ve Günlük Kontrol",
            ozet: "Yıllık periyodik kontrol ile vardiya öncesi günlük kontrol farkı ve kiralık makinede sorumluluk paylaşımı.",
            gorsel: blogGorsel.makinePark,
            gorselAlt: "Kütahya'da kontrolü yapılmış kiralık platform",
            tarih: "2026-05-27",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Platform güvenliğinin iki katmanı vardır: yıllık periyodik kontrol ve vardiya öncesi günlük kontrol. Bu yazı, Kütahya'da kiralık platformda bunları anlatır.",
            bolumler: [
                { baslik: "Periyodik ve günlük", paragraflar: ["Yükseltici platformlar standartlarda aksi belirtilmedikçe yılda en az bir kez yetkili teknik elemanca periyodik kontrolden geçer. Her vardiya öncesi operatör fren, acil stop, acil indirme, korkuluk ve denge sensörünü test eder.", "İkisi birbirinin yerine geçmez."] },
                { baslik: "Kiralıkta sorumluluk", paragraflar: ["Periyodik kontrol raporunu kiraya veren sağlar; günlük kontrol ve doğru kullanım kiracıya aittir. Paylaşımın sözleşmede yazılı olması iki tarafı korur.", "Raporun makineyle sahada bulunması denetimlerde önemlidir."] },
            ],
            sss: [
                { soru: "Kontrol raporu kimde?", cevap: "Periyodik kontrol raporunu kiraya veren sağlar ve makineyle birlikte sahada bulunur; günlük vardiya öncesi kontrol kiracıya aittir." },
                { soru: "Günlük kontrol neden önemli?", cevap: "Ciddi kazaların önemli bölümü günlük kontrolde yakalanabilecek arızalardan çıkar; her vardiya öncesi test edilip kaydedilir." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
        {
            slug: "kutahyada-platform-teslim-alma-ve-iade-kontrolu",
            kategori: "Güvenlik",
            baslik: "Kütahya'da Platform Teslim Alma ve İade Kontrolü",
            ozet: "Makine teslim alınırken ve iade edilirken model uyumu, görünür hasar ve güvenlik işlevlerinin kayıt altına alınması.",
            gorsel: blogGorsel.depo,
            gorselAlt: "Kütahya'da teslim alma kontrolü yapılan platform",
            tarih: "2026-05-24",
            guncelleme: "2026-07-24",
            okuma: 4,
            giris: "Platform teslim alınırken ve iade edilirken yapılan kısa kontrol hem güvenliği sağlar hem anlaşmazlıkları önler. Bu yazı teslim ve iade kontrolünü özetler.",
            bolumler: [
                { baslik: "Teslim alırken", paragraflar: ["Model uyumu, görünür hasar, sayaç/enerji seviyesi, korkuluk, sepet ve ataşman kayıt altına alınır. Alt ve üst kumandalar, fren, acil durdurma ve acil indirme yetkili kişice kontrol edilir.", "Uygunsuzluk görülürse makine kullanılmaz, tutanakla bildirilir."] },
                { baslik: "İade ederken", paragraflar: ["Sayaç, yakıt-şarj, anahtar-aksesuar ve görünür hasar yeniden kaydedilir. Teslim ve iade kayıtlarının karşılaştırılması anlaşmazlığı önler.", "Kontrol kayıtları teslim dosyasında bulunur."] },
            ],
            sss: [
                { soru: "Teslim kontrolü periyodik kontrol yerine geçer mi?", cevap: "Hayır; teslim/vardiya öncesi kontrol o anki durumu kayda alır, yıllık periyodik kontrolün yerine geçmez, onu tamamlar." },
                { soru: "Hasar bulunursa ne yapılır?", cevap: "Makine güvenli değilse kullanılmaz; hasar fotoğraf ve tutanakla bildirilir. Teslim ve iade kayıtları sorumluluğu netleştirir." },
            ],
            ilgiliUrun: { baslik: "Makaslı Platform Kiralama", slug: "makasli-platform-kiralama" },
        },
    ],
};

export function hostBloglari(host: string): BlogYazisi[] {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return blogYazilari[temiz] ?? [];
}

export function blogBul(host: string, slug: string): BlogYazisi | undefined {
    return hostBloglari(host).find((y) => y.slug === slug);
}
