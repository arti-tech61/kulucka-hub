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
    ],
};

export function hostBloglari(host: string): BlogYazisi[] {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return blogYazilari[temiz] ?? [];
}

export function blogBul(host: string, slug: string): BlogYazisi | undefined {
    return hostBloglari(host).find((y) => y.slug === slug);
}
