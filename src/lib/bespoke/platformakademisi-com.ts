// ═══════════════════════════════════════════════════════════════════════════
// platformakademisi.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: EĞİTİM/AKADEMİ sitesi (bağımsız dijital bilgi yayını, satış değil).
// Konu: MYK operatör belgesi süreci, platform/vinç terminolojisi sözlüğü
// mantığında rehber, eğitim içeriği. Ton: öğretici, adım adım, "biz sertifika
// veriyoruz" değil "süreç şöyle işler" anlatımı.
//
// ⚠️ yuksektecalismarehberi-com.ts ile aynı üst alan (yüksekte çalışma) ama
// FARKLI eksen: O sayfa GÜVENLİK/risk değerlendirmesi/ekipman seçimi anlatır,
// BU sayfa OPERATÖR EĞİTİMİ/belgelendirme SÜRECİ ve TERMİNOLOJİ anlatır.
// Cümle, tablo ve SSS düzleminde tekrar yoktur.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS.
// Yazım: 2026-08-13. Yalnızca genel MYK/mesleki yeterlilik çerçevesi bilgisi;
// kurum adı, sınav merkezi adı, rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const PLATFORMAKADEMISI_COM: Record<string, BespokeIcerik> = {
    "bolge:bagimsiz-dijital-bilgi-yayini": {
        h1: "Platform Operatörü Belgesi: MYK Süreci ve Terminoloji Rehberi",
        giris:
            "Bir platform veya benzeri iş ekipmanını kullanacak kişinin 'tecrübeli olması' ile 'yetkili olması' aynı şey değildir; ikincisi, belirli bir sınav ve belgelendirme sürecinden geçmeyi gerektirir ve bu süreç Türkiye'de Mesleki Yeterlilik Kurumu (MYK) çerçevesinde yürütülür. Birçok operatör adayı veya işveren, bu sürecin nereden başladığını, hangi aşamalardan geçtiğini ve belgenin ne anlama geldiğini net bilmeden bu işe girer; bu belirsizlik hem beklenmedik maliyetlere hem de yanlış beklentilere yol açar. Bu sayfa, platform operatörlüğüne yönelik MYK belgelendirme sürecini adım adım açıklar ve sektörde sık kullanılan ama çoğu zaman karıştırılan terimleri (ehliyet, sertifika, yetki belgesi, operatör belgesi gibi) net biçimde ayırt eder. Amaç, bir operatör adayının veya onu istihdam edecek işverenin, süreci baştan sona anlayarak doğru adımları takip edebilmesini sağlamaktır.",
        maddeler: [
            {
                baslik: "MYK belgesi ile 'ehliyet' arasındaki fark",
                metin:
                    "Sahada en sık karışan iki kavramdan biri budur: sürücü belgesi (ehliyet), bir aracı karayolunda sürmeye yetki verirken, MYK Mesleki Yeterlilik Belgesi, belirli bir meslekte (örneğin yüksekte çalışma platformu operatörlüğü) teorik bilgi ve pratik beceriye sahip olunduğunu gösteren ayrı bir belgedir. Bir kişi araç kullanma ehliyetine sahip olsa bile, platform operatörlüğü için ayrı bir yeterlilik sınavından geçmesi gerekir; bu iki belge birbirinin yerine geçmez. İşyerlerinde platform operatörü aranırken bu ayrımın net yapılması, hem yasal uyum hem de güvenlik açısından belirleyicidir.",
            },
            {
                baslik: "Belgelendirme sürecinin aşamaları",
                metin:
                    "Süreç genel hatlarıyla şu aşamalardan oluşur: önce adayın başvuracağı yeterlilik alanı ve sınav merkezi belirlenir, ardından teorik sınav (ilgili ekipman sınıfının temel bilgisi, güvenlik kuralları, mevzuat çerçevesi) ve uygulamalı/performans sınavı (ekipmanın gerçek veya simüle koşullarda kullanımı) yapılır. Her iki sınavdan da başarılı olan aday, belgeyi almaya hak kazanır. Belgenin geçerlilik süresi sınırlıdır ve süre sonunda yenileme sınavı veya sürecine tabi olunur; bu nedenle belge tek seferlik bir işlem değil, düzenli takip gerektiren bir yeterliliktir.",
            },
            {
                baslik: "Hangi platform sınıfı hangi yeterliliği gerektirir",
                metin:
                    "Yeterlilik alanları, kullanılacak ekipman sınıfına göre ayrışabilir; örneğin makaslı platform operatörlüğü ile eklemli/bom tipi platform operatörlüğü, hareket mekaniği ve risk profili farklı olduğu için ayrı yeterlilik konuları olarak ele alınabilir. Bir operatörün yalnızca bir sınıfta belgeli olması, otomatik olarak diğer sınıfları kullanma yetkisi vermez. İşveren, sahada kullanılacak ekipman sınıfını netleştirip operatörün o sınıf için geçerli belgeye sahip olduğunu teyit etmelidir; bu teyit, hem denetimlerde hem olası bir kaza sonrası sorumluluk değerlendirmesinde kritik rol oynar.",
            },
            {
                baslik: "Terminoloji sözlüğü: sık karışan kavramlar",
                metin:
                    "Sektörde 'sertifika', 'yetki belgesi' ve 'MYK belgesi' terimleri sık sık birbirinin yerine kullanılır ama teknik olarak farklı anlamlar taşır. Sertifika, genellikle bir eğitim kurumunun kendi düzenlediği bir eğitime katılım veya başarı gösterge belgesidir ve tek başına yasal yeterlilik anlamına gelmeyebilir. MYK belgesi ise ulusal yeterlilik çerçevesine bağlı, sınavla alınan ve belirli bir meslek tanımına karşılık gelen resmî bir belgedir. Yetki belgesi terimi ise bazen işyeri içi bir yetkilendirmeyi (örneğin belirli bir makineyi kullanma izni) ifade eder ve MYK belgesinden bağımsız olarak işveren tarafından da düzenlenebilir. Bu üç terimin karıştırılması, işe alım sürecinde yanlış belgeyle yetkilendirme riskini doğurur.",
            },
            {
                baslik: "Belgenin işveren ve operatör için taşıdığı sorumluluk",
                metin:
                    "Geçerli bir MYK belgesine sahip olmak, operatörün temel yeterliliğe sahip olduğunu gösterir ama sahadaki her riski otomatik olarak ortadan kaldırmaz; operatörün belge sonrası da düzenli olarak güncel ekipman modelleri ve saha koşulları hakkında bilgilendirilmesi beklenir. İşveren tarafında ise belgesiz bir kişinin ilgili ekipmanı kullanmasına izin vermek, hem mevzuat hem sorumluluk açısından ciddi risk taşır; bir kaza durumunda işverenin gerekli yeterlilik kontrolünü yapıp yapmadığı sorgulanır. Bu nedenle belge kontrolü, işe başlamadan önce atlanmaması gereken bir adımdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Terminoloji karşılaştırma tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, sektörde sık karıştırılan dört terimi kısaca ayırt eder.",
                ],
                tablo: {
                    basliklar: ["Terim", "Ne anlama gelir", "Kim verir", "Yasal yeterlilik sağlar mı"],
                    satirlar: [
                        ["Sürücü belgesi (ehliyet)", "Karayolunda araç kullanma yetkisi", "Yetkili kamu kurumu", "Platform operatörlüğü için tek başına yetmez"],
                        ["MYK Mesleki Yeterlilik Belgesi", "Belirli meslekte teorik+pratik yeterlilik", "Yetkilendirilmiş sınav/belgelendirme kuruluşu", "Evet, ilgili meslek tanımı için"],
                        ["Eğitim sertifikası", "Bir eğitime katılım/başarı göstergesi", "Eğitim kurumu", "Genellikle tek başına yeterli değil"],
                        ["İşyeri içi yetki belgesi", "Belirli makineyi kullanma izni", "İşveren", "MYK belgesinden bağımsız, tamamlayıcı"],
                    ],
                },
            },
            {
                baslik: "Sınava hazırlanan bir aday için pratik adımlar",
                paragraflar: [
                    "Sınava hazırlanan bir adayın ilk yapması gereken, başvuracağı yeterlilik alanının tam tanımını (hangi ekipman sınıfını kapsadığını) netleştirmektir; farklı platform sınıfları farklı yeterlilik konuları olarak tanımlanabildiği için, yanlış alana başvurmak zaman ve maliyet kaybına yol açar. İkinci adım, teorik sınav kapsamındaki temel konuları (ekipman mekaniği, güvenlik kuralları, mevzuat çerçevesi, acil durum prosedürleri) sistematik biçimde çalışmaktır. Üçüncü adım, mümkünse gerçek veya simüle bir ekipman üzerinde pratik yapmaktır; teorik bilgi ile pratik beceri arasındaki fark, sınavın uygulamalı bölümünde en çok zorlanılan noktadır.",
                    "Belge alındıktan sonra da sürecin bitmediği unutulmamalıdır: belgenin geçerlilik süresi takip edilmeli ve süre dolmadan yenileme süreci başlatılmalıdır; süresi dolmuş bir belgeyle çalışmaya devam etmek, belgesiz çalışmakla aynı sonucu doğurabilir.",
                ],
            },
            {
                baslik: "İşverenler için belge doğrulama pratiği",
                paragraflar: [
                    "Bir işveren, işe alacağı veya kiralık ekipmanla birlikte gelecek operatörün belgesini yalnızca 'var mı yok mu' diye değil, hangi ekipman sınıfını kapsadığı ve geçerlilik tarihinin dolup dolmadığı açısından da kontrol etmelidir. Belge üzerindeki yeterlilik tanımı ile sahada kullanılacak ekipman sınıfı birebir eşleşmiyorsa, o operatör o iş için yetkili sayılmaz; bu eşleşmeyi kontrol etmek, işe başlamadan önce birkaç dakika süren ama sorumluluk açısından kritik bir adımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "MYK belgesi olmadan platform kullanmak mümkün müdür?",
                cevap:
                    "Mevzuat çerçevesinde ilgili ekipman sınıfı için yeterlilik belgesi gerektiren işlerde, belgesiz kullanım hem operatör hem işveren açısından ciddi bir uyumsuzluk ve sorumluluk riski oluşturur. Tecrübeli görünen bir kişinin belgesiz çalıştırılması, bir kaza anında işverenin gerekli yeterlilik kontrolünü yapmadığının göstergesi olarak değerlendirilebilir. Bu nedenle 'tecrübe' ile 'belge' birbirinin yerine geçmez; ikisi birlikte aranmalıdır.",
            },
            {
                soru: "Bir sınıfta aldığım belge diğer platform sınıflarını da kapsar mı?",
                cevap:
                    "Genellikle hayır. Yeterlilik alanları ekipmanın hareket mekaniğine ve risk profiline göre ayrışabilir; örneğin bir makaslı platform yeterliliği, otomatik olarak eklemli/bom tipi platform kullanma yetkisi vermeyebilir. Farklı bir sınıfta çalışacaksanız, o sınıfın yeterlilik tanımını ve gerekiyorsa ayrı bir sınav sürecini kontrol etmeniz gerekir.",
            },
            {
                soru: "Eğitim kurumunun verdiği sertifika ile MYK belgesi aynı şey mi?",
                cevap:
                    "Hayır, ikisi farklı belgelerdir. Eğitim sertifikası, bir kursa katılım veya kurs sonu değerlendirmede başarı gösterge belgesidir ve genellikle o kurumun kendi standardına dayanır. MYK belgesi ise ulusal yeterlilik çerçevesine bağlı, bağımsız bir sınav sürecinden geçilerek alınan resmî bir belgedir. Bir eğitim sertifikasına sahip olmak, MYK sınavına hazırlığı destekleyebilir ama onun yerine geçmez.",
            },
            {
                soru: "Belgenin geçerlilik süresi dolarsa ne olur?",
                cevap:
                    "Süresi dolan bir belge, yenileme süreci tamamlanana kadar geçerliliğini kaybeder ve bu dönemde ilgili ekipmanı kullanmak, belgesiz çalışmakla aynı sonucu doğurabilir. Yenileme süreci genellikle güncel bilgi ve becerinin teyit edildiği bir değerlendirmeyi içerir; bu nedenle belge sahiplerinin geçerlilik tarihini takip etmesi ve süre dolmadan yenileme sürecini başlatması önerilir.",
            },
            {
                soru: "İşveren olarak kiraladığım ekipmanla gelen operatörün belgesini nasıl kontrol ederim?",
                cevap:
                    "Belgenin üzerinde yer alan yeterlilik tanımını, sahada kullanılacak ekipman sınıfıyla karşılaştırmanız gerekir; tanım ile ekipman sınıfı birebir eşleşmiyorsa operatör o iş için yetkili sayılmaz. Ayrıca belgenin geçerlilik tarihinin dolup dolmadığı kontrol edilmelidir. Bu kontrolü işe başlamadan önce yapmak, hem yasal uyum hem de olası bir kaza sonrası sorumluluk değerlendirmesi açısından önemlidir.",
            },
            {
                soru: "Sınavın teorik ve uygulamalı bölümü neden ayrı değerlendirilir?",
                cevap:
                    "Teorik bilgi (mevzuat çerçevesi, ekipman mekaniği, güvenlik kuralları) ile pratik beceri (ekipmanı gerçek koşullarda güvenle kullanabilme) birbirinden bağımsız yeteneklerdir; biri diğerini garanti etmez. Bir aday teorik sınavda yüksek bilgi düzeyi gösterebilir ama uygulamalı sınavda ekipmanı güvenle manevra ettirmekte zorlanabilir, ya da tersi. İki bölümün ayrı değerlendirilmesi, belgenin hem bilgi hem beceri açısından güvenilir bir gösterge olmasını sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. MYK Mesleki Yeterlilik Belgesi'nin ulusal yeterlilik çerçevesine dayandığı, sınav sürecinin teorik ve uygulamalı bölümlerden oluştuğu ve belgenin süreli olduğu genel bilgisi kamuya açıktır. Sınav merkezi adı, kurum adı ve rakamsal süre/ücret bilgisi uydurulmamıştır; güncel ve kesin bilgi için MYK'nın resmî kaynaklarına başvurulmalıdır.",
    },
};
