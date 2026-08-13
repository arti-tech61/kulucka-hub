// ═══════════════════════════════════════════════════════════════════════════
// yuksektecalismarehberi.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: BAĞIMSIZ BİLGİ KAYNAĞI (satış sitesi değil, rehber/editoryal ton).
// Konu: yüksekte çalışma güvenliği — İSG mevzuatı genel çerçevesi, ekipman
// türleri (kısa tanıtım, satış dili yok), risk değerlendirmesi, düşme
// koruması. Ton üçüncü şahıs, tarafsız, "biz kiralıyoruz" diline GİRMEZ.
//
// ⚠️ eklemliplatform-com-tr.ts ile konu (ekipman türleri) kesişebilir; O
// sayfa MARKA/satış perspektifiyle "eklemli nedir, nasıl kiralanır" anlatır,
// BU sayfa TARAFSIZ bilgi kaynağı perspektifiyle "yüksekte çalışma güvenliği"
// bütününü (mevzuat, risk değerlendirmesi, tüm ekipman sınıfları, düşme
// koruması) anlatır — cümle ve tablo düzeyinde tekrar yoktur, ton da farklıdır.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS.
// Yazım: 2026-08-13. Yalnızca genel İSG mevzuat çerçevesi ve mühendislik
// bilgisi; marka, tesis adı, rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const YUKSEKTECALISMAREHBERI_COM: Record<string, BespokeIcerik> = {
    "bolge:turkiye-geneli-bilgi-kaynagi": {
        h1: "Yüksekte Çalışma Güvenliği: Kapsamlı Rehber",
        giris:
            "Yüksekte çalışma, iş kazaları istatistiklerinde düzenli olarak en sık görülen kaza türlerinden biri olarak yer alır ve bu durumun temel nedeni, riskin genellikle 'bilinen' ama 'ciddiye alınmayan' bir risk olarak görülmesidir. Merdivenden düşme, çatıdan kayma, iskele çökmesi veya platform sepetinden savrulma gibi olayların çoğu, aslında önceden öngörülebilir ve önlenebilir koşullardan kaynaklanır: eksik risk değerlendirmesi, yanlış ekipman seçimi, düşme koruma sisteminin eksik veya hatalı kullanımı, ya da sahadaki geçici koşulların (rüzgâr, zemin bozukluğu, elektrik hattı yakınlığı) göz ardı edilmesi. Bu rehber, yüksekte çalışmayı bir bütün olarak ele alır: hangi işin 'yüksekte çalışma' sayıldığından başlayarak, ekipman seçiminin mantığına, risk değerlendirmesinin nasıl yapılması gerektiğine ve düşme korumasının temel prensiplerine kadar uzanan bir çerçeve sunar. Amaç, saha yöneticisinin veya işvereninin, mevzuatı ezbere bilmeden de doğru kararı verebileceği pratik bir referans oluşturmaktır.",
        maddeler: [
            {
                baslik: "Yüksekte çalışma hangi işleri kapsar",
                metin:
                    "Genel kabul gören tanımıyla yüksekte çalışma, bir kişinin düşme hâlinde yaralanma riski taşıdığı her türlü seviye farkını kapsar; bu tanım yalnızca çatı veya yüksek bina cephesiyle sınırlı değildir. Bir merdivenin birkaç basamak üzerinde çalışmak, kamyon üstünde yük bağlamak, açık bir kanal veya çukur kenarında çalışmak da bu tanımın içine girebilir. Mevzuat, belirli bir yükseklik eşiğinden çok, düşme sonucu oluşabilecek yaralanma riskine odaklanır; bu nedenle 'iki metreden düşük, önemsiz' yaklaşımı yanıltıcıdır — düşme yüksekliği düşük olsa da zemin sert veya keskin cisimlerle doluysa risk ciddi olabilir.",
            },
            {
                baslik: "Risk değerlendirmesi: ekipman seçiminden önce gelen adım",
                metin:
                    "Yüksekte çalışmada en sık yapılan hata, doğrudan hangi ekipmanın kullanılacağına karar vermek ve risk değerlendirmesini atlamaktır; oysa doğru sıra tam tersidir. Risk değerlendirmesi önce işin gerçekten yüksekte yapılmasının kaçınılmaz olup olmadığını sorgular (mümkünse iş zeminden yapılacak şekilde yeniden tasarlanır), sonra kolektif koruma önlemlerinin (korkuluk, ağ, platform) bireysel korumaya (kemer, halat) tercih edilmesi gerektiğini vurgular, son olarak da sahaya özgü koşulları (zemin, hava, çevresel engel, elektrik hattı) değerlendirir. Bu sıralama atlanarak doğrudan bir ekipman seçildiğinde, seçilen ekipman işin gerçek risk profiline uymayabilir.",
            },
            {
                baslik: "Ekipman türleri: hangi iş hangi sınıfı gerektirir",
                metin:
                    "Yüksekte çalışma ekipmanları kabaca dört ana grupta toplanabilir: sabit erişim ekipmanları (iskele, merdiven), hareketli çalışma platformları (makaslı ve eklemli/bom tipi platformlar), asma iskele ve halat erişim sistemleri, ve düşme koruma ekipmanları (kemer, ankraj noktası, enerji emici halat). Her grup farklı bir risk profiline ve farklı bir iş tipine hitap eder; örneğin geniş ve düz bir alanda uzun süreli çalışma iskele veya makaslı platform gerektirirken, kısa süreli ve noktasal bir müdahale (örneğin tek bir armatür değişimi) çoğu zaman daha küçük ve manevra kabiliyeti yüksek bir ekipmanla çözülür. Doğru sınıfı seçmek, işin süresini, sıklığını, erişim geometrisini ve sahadaki kişi sayısını birlikte değerlendirmeyi gerektirir.",
            },
            {
                baslik: "Düşme koruması: kolektif mi, bireysel mi?",
                metin:
                    "Düşme koruma hiyerarşisinin başında, düşmeyi tamamen ortadan kaldıran önlemler (korkuluk, kapalı platform) yer alır; bunun mümkün olmadığı durumlarda düşmeyi durduran veya sınırlayan bireysel sistemler (tam vücut kemeri, enerji emici halat, ankraj noktası) devreye girer. Bireysel sistemlerde en kritik nokta, ankraj noktasının taşıma kapasitesinin doğrulanmış olması ve halatın serbest düşme mesafesini, kullanıcının zeminle veya bir engelle çarpışmayacağı şekilde sınırlamasıdır. Kemer takmak tek başına yeterli değildir; kemerin doğru bağlantı noktasına, doğru uzunlukta ve doğru açıyla bağlanması, korumanın gerçek etkinliğini belirler.",
            },
            {
                baslik: "Çevresel koşulların risk üzerindeki etkisi",
                metin:
                    "Aynı iş, aynı ekipmanla, farklı hava veya zemin koşullarında tamamen farklı bir risk seviyesi taşıyabilir. Rüzgâr hızı belirli bir eşiği aştığında yüksekteki çalışma platformları için üretici tarafından belirlenen çalışma sınırları aşılmış olur ve bu sınırın aşılması devrilme riskini ciddi biçimde artırır. Zemin taşıma gücü yetersizse veya eğimliyse, sabit görünen bir ekipman bile dengesini kaybedebilir. Elektrik hattı yakınlığı, hem ekipmanın hem çalışanın güvenli mesafeyi koruyabilmesini gerektirir. Bu koşulların hiçbiri sabit değildir; iş başlamadan önce ve iş süresince düzenli olarak yeniden değerlendirilmelidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ekipman sınıflarına göre tipik kullanım alanı",
                paragraflar: [
                    "Aşağıdaki tablo, yüksekte çalışma ekipman gruplarının hangi iş profiline daha uygun olduğunu genel hatlarıyla özetler; kesin seçim her zaman sahaya özgü risk değerlendirmesiyle yapılmalıdır.",
                ],
                tablo: {
                    basliklar: ["Ekipman grubu", "Tipik iş süresi", "Erişim geometrisi", "Öne çıkan risk kalemi"],
                    satirlar: [
                        ["Sabit iskele", "Uzun süreli, sabit alan", "Geniş, düz cephe", "Kurulum/söküm hatası"],
                        ["Makaslı platform", "Orta-uzun süreli", "Dikey, düz çıkışlı", "Zemin taşıma gücü, devrilme"],
                        ["Eklemli/bom platform", "Kısa-orta süreli", "Engelli, karmaşık erişim", "Çarpışma, zarf aşımı"],
                        ["Halat erişim sistemi", "Noktasal, kısa süreli", "Dikey cephe, ulaşılması zor nokta", "Ankraj/halat bütünlüğü"],
                        ["Bireysel düşme koruma", "Her senaryoda tamamlayıcı", "Değişken", "Ankraj kapasitesi, serbest düşme mesafesi"],
                    ],
                },
            },
            {
                baslik: "Risk değerlendirmesi nasıl yapılandırılır",
                paragraflar: [
                    "Etkili bir risk değerlendirmesi dört soruyu sırayla yanıtlar: iş gerçekten yüksekte mi yapılmalı, yoksa zeminden yapılacak şekilde yeniden düzenlenebilir mi; kolektif koruma (korkuluk, kapalı platform) mümkün mü, yoksa bireysel koruma mı gerekiyor; sahadaki geçici koşullar (hava, zemin, çevresel engel) işin güvenli yürütülmesini nasıl etkiliyor; son olarak, olası bir düşme veya arıza durumunda kurtarma planı nedir. Bu dördüncü soru sıklıkla atlanır — düşme koruma sistemi bir kişiyi düşmekten korusa bile, o kişi havada asılı kaldığında ne kadar sürede ve nasıl kurtarılacağı önceden planlanmamışsa, asılı kalma süresi başlı başına bir risk oluşturur.",
                    "Bu dört sorunun yanıtları yazılı olarak belgelenmeli ve sahadaki koşullar değiştikçe (yeni bir engel, hava değişimi, farklı bir çalışan grubu) yeniden gözden geçirilmelidir; risk değerlendirmesi bir kerelik değil, sürekli bir süreçtir.",
                ],
            },
            {
                baslik: "Sık karşılaşılan yanlış uygulamalar",
                paragraflar: [
                    "Sahada en sık görülen yanlış uygulamalar arasında şunlar öne çıkar: merdiveni platform yerine ana çalışma ekipmanı olarak kullanmak (merdiven, kısa süreli ve düşük riskli işler için tasarlanmıştır, uzun süreli çalışma için değil), düşme koruma kemerini takıp ankraj noktasına bağlamayı unutmak, rüzgâr veya hava koşulunu iş başlarken kontrol edip iş süresince yeniden değerlendirmemek, ve kapasiteyi aşan sayıda kişi veya malzemeyle çalışma platformuna binmek. Bu uygulamaların her biri, tek başına küçük bir ihmal gibi görünse de, birkaç faktörün üst üste gelmesiyle ciddi kazalara dönüşebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yüksekte çalışma için kaç metreden itibaren özel önlem gerekir?",
                cevap:
                    "Sabit bir metre eşiği üzerinden düşünmek yanıltıcıdır; mevzuat çerçevesi, düşme sonucu oluşabilecek yaralanma riskine odaklanır, tek bir yükseklik sınırına değil. İki metrenin altındaki bir çalışma bile, zemin sert veya keskin cisimlerle doluysa, ya da çalışan bir açıklığın (merdiven boşluğu, tesisat kanalı) kenarındaysa ciddi risk taşıyabilir. Doğru yaklaşım, her işi kendi zemin, çevre ve düşme sonucu koşullarına göre ayrı ayrı değerlendirmektir.",
            },
            {
                soru: "Merdiven yüksekte çalışma ekipmanı sayılır mı?",
                cevap:
                    "Evet, merdiven de yüksekte çalışma ekipmanları arasında yer alır, ama genel kabul gören yaklaşım, merdivenin yalnızca kısa süreli ve düşük riskli işler için uygun olduğudur. Uzun süreli çalışma, iki elin serbest kullanılması gereken işler veya ağır malzemeyle çalışma söz konusuysa, merdiven yerine daha stabil bir platform veya iskele tercih edilmesi önerilir. Merdivenin yanlış zeminde, yanlış açıyla veya tek başına (gözcüsüz) kullanılması, sahada en sık görülen kaza nedenlerinden biridir.",
            },
            {
                soru: "Kolektif koruma ile bireysel koruma arasındaki fark nedir?",
                cevap:
                    "Kolektif koruma, düşmeyi baştan imkânsız hâle getiren önlemlerdir (korkuluk, kapalı sepet, güvenlik ağı) ve çalışanın herhangi bir ekipman takmasına gerek kalmadan koruma sağlar. Bireysel koruma ise düşmeyi önlemez, düştüğünde etkisini sınırlar (kemer, halat, ankraj noktası) ve doğru kullanılmadığında koruma etkisi ciddi biçimde azalır. Genel prensip, mümkün olduğunca kolektif korumanın tercih edilmesi, bireysel korumanın ise kolektif korumanın mümkün olmadığı durumlarda tamamlayıcı olarak kullanılmasıdır.",
            },
            {
                soru: "Rüzgâr hızı çalışma platformlarını neden bu kadar etkiler?",
                cevap:
                    "Yükseklik arttıkça rüzgârın ekipman üzerindeki devirici etkisi de artar; bu etki, ekipmanın ağırlık merkezi ve taban genişliği ile doğrudan ilişkilidir. Üreticiler her model için maksimum çalışma rüzgâr hızını belirler ve bu sınır aşıldığında makinenin devrilme riski ciddi biçimde yükselir. Sahada rüzgâr hızının anlık olarak ölçülmesi ve bu ölçümün üretici sınırıyla karşılaştırılması, özellikle açık alanda ve yüksek noktalarda yapılan işlerde ihmal edilmemesi gereken bir adımdır.",
            },
            {
                soru: "Düşme koruma kemeri takmak tek başına yeterli midir?",
                cevap:
                    "Hayır. Kemerin taşıma kapasitesi doğrulanmış bir ankraj noktasına, doğru uzunlukta bir halatla ve doğru açıyla bağlanması gerekir; aksi hâlde kemer takılı olsa bile düşme anında ya yeterli koruma sağlamaz ya da serbest düşme mesafesi zeminle veya bir engelle çarpışmayı önleyemeyecek kadar uzun olur. Ayrıca bir düşme gerçekleştiğinde asılı kalan kişinin ne kadar sürede kurtarılacağı önceden planlanmamışsa, kemerin kendisi düşmeyi durdursa bile asılı kalma süresi ayrı bir risk oluşturur.",
            },
            {
                soru: "Risk değerlendirmesi kim tarafından ve ne sıklıkla yapılmalıdır?",
                cevap:
                    "Risk değerlendirmesi, işin planlanmasından sorumlu kişi tarafından iş başlamadan önce yazılı olarak yapılmalı ve sahadaki koşullar değiştikçe (yeni bir engel ortaya çıkması, hava koşulunun değişmesi, farklı bir ekip veya ekipmanın devreye girmesi) yeniden gözden geçirilmelidir. Tek seferlik bir değerlendirme, uzun süren işlerde günler veya haftalar sonra artık geçerliliğini yitirmiş olabilir; bu nedenle risk değerlendirmesi bir belge değil, sürekli güncellenen bir süreç olarak ele alınmalıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bu sayfa genel İSG mevzuat çerçevesini (düşme koruma hiyerarşisi, risk değerlendirmesi mantığı, ekipman sınıflandırması) ve mühendislik genel bilgisini (rüzgâr/zemin etkisi, ankraj kapasitesi) yansıtır; belirli bir kurum, marka veya rakamsal eşik uydurulmamıştır. Sahaya özgü kararlarda güncel mevzuat ve yetkili bir İSG uzmanına başvurulmalıdır.",
    },
};
