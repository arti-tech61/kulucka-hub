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
    ],
};

export function hostBloglari(host: string): BlogYazisi[] {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return blogYazilari[temiz] ?? [];
}

export function blogBul(host: string, slug: string): BlogYazisi | undefined {
    return hostBloglari(host).find((y) => y.slug === slug);
}
