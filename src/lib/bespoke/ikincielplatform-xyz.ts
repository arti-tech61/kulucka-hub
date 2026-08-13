// ═══════════════════════════════════════════════════════════════════════════
// ikincielplatform.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: ULUSAL/TEMATİK domain. Aynı satın-alma-riski teması ama FORKLİFT
// özelinde: ikinci el forkliftin akü/hidrolik/mast aşınma riskleri, sabit
// maliyetli kiralamanın avantajı, garanti kapsamı.
//
// ⚠️ ikincielplatform.net ile aynı üst tema (satın alma riski) ama FARKLI
// ekipman sınıfı ve FARKLI teknik risk kalemleri (mast/çatal/akü/lastik
// forklifte özgü — platformdaki hidrolik makas/bom riskiyle örtüşmez).
// Cümle, tablo ve SSS düzleminde ikincielplatform-net.ts ile TEKRAR YOKTUR.
//
// İki sayfa: turkiye-geneli (kavramsal) ve eskisehir-merkez (yerel bağlam,
// ikincielplatform-net.ts'in eskisehir sayfasından FARKLI iş profili: burada
// depo/lojistik-forklift ekseni, orada vardiyalı üretim-platform ekseni).
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS.
// Yazım: 2026-08-13. Yalnızca kamuya açık/genel doğrulanabilir bilgi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IKINCIELPLATFORM_XYZ: Record<string, BespokeIcerik> = {
    "bolge:turkiye-geneli": {
        h1: "İkinci El Forklift Almadan Önce Bilinmesi Gereken Riskler",
        giris:
            "Depo veya üretim tesisinde forklift ihtiyacı doğduğunda, ilk akla gelen çözüm çoğu zaman ikinci el bir araç satın almaktır; fiyat sıfır araca göre çok daha uygun görünür ve ilanlar genellikle 'az kullanılmış, bakımlı' ibaresiyle sunulur. Ancak forklift, platform gibi genellikle proje bazlı değil günlük ve yoğun kullanılan bir ekipmandır; bu yoğunluk, mast, hidrolik sistem, akü grubu ve lastik gibi aşınan parçaların ömrünü hızla tüketir ve ikinci bir el bu tüketimin ne kadarının gerçekleştiğini net biçimde göstermez. Alıcı, aracın önceki sahibinde hangi yükle, hangi zeminde ve hangi sıklıkla çalıştığını bilmeden karar verir; bu bilgi eksikliği, satın alma sonrası ilk aylarda beklenmedik onarım maliyeti olarak geri döner. Bu sayfa forklifte özgü aşınma risklerini ve kiralamanın sabit maliyetli, garantili alternatifini anlatıyor.",
        maddeler: [
            {
                baslik: "Akü grubu: görünmeyen kapasite kaybı",
                metin:
                    "Elektrikli forkliftlerde akü grubu, aracın en pahalı tek parçasıdır ve kapasite kaybı zamanla, sessizce ilerler. Bir akünün dışarıdan sağlam görünmesi, dolum kapasitesinin hâlâ ilk günkü gibi olduğu anlamına gelmez; şarj döngüsü sayısı arttıkça kapasite düşer ve bu düşüş yalnızca yük altında, tam gün kullanımda fark edilir. İkinci el bir araçta akünün gerçek kapasitesini test etmeden almak, birkaç ay içinde akü değişimi gibi ciddi bir ek maliyetle karşılaşmak demektir; akü değişim maliyeti çoğu zaman aracın kendisinin bir kısmına yakındır.",
            },
            {
                baslik: "Hidrolik sistem: sızıntı ve iç aşınma",
                metin:
                    "Kaldırma ve eğme fonksiyonlarını yöneten hidrolik sistem, sürekli basınç altında çalıştığı için zamanla conta ve keçelerde mikro sızıntılar oluşturur. Bu sızıntılar başlangıçta performansı fark edilir biçimde etkilemez, ama pompa ve valf içindeki aşınmayı hızlandırır. İkinci el alımda hidrolik yağın rengi ve seviyesi kontrol edilebilir ama pompa içi aşınma ancak yük testiyle anlaşılır; bu test genellikle yapılmadan karar verilir ve aracın kaldırma performansı devreye girdikten sonra düşük çıkabilir.",
            },
            {
                baslik: "Mast ve zincir: yorulma birikimli hasar",
                metin:
                    "Mast, aracın taşıdığı yükün tamamını dikey olarak aktaran ana yapısal parçadır ve zincirler bu yapının hareketini sağlar. Aşırı yüklenmiş veya düzensiz bakılmış bir masttaki zincir gerginliği bozulur, kılavuz rayları aşınır; bu aşınma dışarıdan bakıldığında fark edilmez ama zamanla kaldırma hassasiyetini ve güvenliği etkiler. Zincir yağlamasının düzenli yapılıp yapılmadığı, ikinci el satın alımda neredeyse hiç sorgulanmayan ama en kritik kalemlerden biridir.",
            },
            {
                baslik: "Lastik ve şase: zemin uyumsuzluğunun izleri",
                metin:
                    "Forkliftin çalıştığı zemin tipi (düz beton, açık saha, eğimli rampa) lastik aşınmasını ve şase yorulmasını doğrudan etkiler; bir depo içinde çalışmış araç ile açık sahada agresif zeminde çalışmış araç, aynı yaşta olsa bile çok farklı aşınma seviyesindedir. İkinci el ilanlarında bu geçmiş neredeyse hiç belirtilmez. Lastik tipi ve aşınma deseni incelenerek aracın önceki kullanım koşulları hakkında dolaylı bilgi edinilebilir, ama bu yorumu yapabilecek teknik bilgiye sahip olmayan bir alıcı için risk yüksektir.",
            },
            {
                baslik: "Sabit maliyet ve garanti: kiralamanın getirdiği öngörülebilirlik",
                metin:
                    "Kiralık bir forkliftte akü, hidrolik sistem, mast ve lastik bakımının tamamı kira bedeline dahil edilir ve bu kalemlerden herhangi biri arızalandığında maliyet kiracıya değil filo sahibine aittir; kiracı yalnızca sabit ve önceden bilinen bir bedel öder. Bu, bütçe planlaması açısından ikinci el sahipliğine göre büyük bir avantajdır çünkü beklenmedik onarım maliyeti riski ortadan kalkar. Garanti kapsamı da net biçimde tanımlanır: kiralama süresi boyunca aracın mekanik performansından filo sahibi sorumludur, kiracı yalnızca doğru kullanımdan sorumludur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklifte özgü aşınma kalemleri ve risk dağılımı",
                paragraflar: [
                    "Aşağıdaki tablo, ikinci el bir forkliftte en sık sorun çıkaran parça gruplarını ve bu risklerin kiralamada nasıl yer değiştirdiğini gösterir.",
                ],
                tablo: {
                    basliklar: ["Parça grubu", "İkinci el alımdaki risk", "Kiralamadaki durum"],
                    satirlar: [
                        ["Akü grubu", "Gerçek kapasite test edilmeden alınır", "Kapasite garantili, değişim filo sahibine ait"],
                        ["Hidrolik sistem", "Pompa/valf iç aşınması görünmez", "Periyodik bakım ve yük testi filo tarafından yapılır"],
                        ["Mast ve zincir", "Yorulma/gerginlik birikimli, fark edilmez", "Düzenli yağlama ve kontrol programına dahildir"],
                        ["Lastik ve şase", "Önceki zemin koşulu bilinmez", "Kullanım profiline göre model seçilir"],
                        ["Toplam maliyet", "Onarım maliyeti öngörülemez", "Sabit kira bedeli, garanti kapsamında"],
                    ],
                },
            },
            {
                baslik: "İkinci el forklift alırken yapılması gereken teknik kontroller",
                paragraflar: [
                    "İkinci el bir forklift değerlendiriliyorsa, yalnızca çalışır durumda olması yeterli değildir. Akü kapasite testi (dolu şarjda yük altında voltaj düşüşü), hidrolik sistemde yük altında kaldırma hızının üretici değerleriyle karşılaştırılması, mast zincirlerinin gerginlik kontrolü ve şase üzerinde kaynak bölgelerinin çatlak muayenesi yapılmalıdır. Bu kontroller genellikle bağımsız bir teknik uzman gerektirir; satıcının kendi beyanına dayanarak karar vermek, yukarıda sayılan risklerin tamamını alıcıya devretmek anlamına gelir.",
                    "Bu kontrollerin maliyeti, satın alma fiyatının küçük bir yüzdesi olsa da çoğu alıcı bu adımı atlar çünkü ilan fiyatı cazip görünür. Oysa kontrolü atlamanın maliyeti, aracın ilk yıl içinde çıkaracağı arızaların toplamıyla ölçülür ve bu toplam genellikle kontrol maliyetinin çok üzerindedir.",
                ],
            },
            {
                baslik: "Depo ve üretim hattında kesintisiz kullanımın getirdiği aşınma hızı",
                paragraflar: [
                    "Forklift, platformdan farklı olarak günlük ve çoğu zaman vardiyalı kullanılan bir ekipmandır; bu kullanım yoğunluğu aşınmayı diğer iş makinelerine göre daha hızlı biriktirir. İki yaşındaki bir forklift, düşük yoğunlukta kullanılmışsa neredeyse sıfır durumda olabilirken, aynı yaştaki başka bir araç günde iki vardiya çalışmışsa çok daha ileri aşınma seviyesinde olabilir. Yaş tek başına durumu göstermez; toplam çalışma saati ve kullanım yoğunluğu birlikte değerlendirilmelidir — bu bilgi ikinci el ilanlarında nadiren eksiksiz verilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el forkliftte akü kapasitesini nasıl test edebilirim?",
                cevap:
                    "En güvenilir yöntem, aküyü tam şarj edip yük altında (aracın nominal kapasitesine yakın bir yükle) çalıştırarak voltaj düşüşünü ve çalışma süresini gözlemlemektir. Bu test satıcının huzurunda, tercihen bağımsız bir teknisyen eşliğinde yapılmalıdır. Yalnızca şarj göstergesine veya satıcının sözlü beyanına güvenmek yeterli değildir, çünkü gösterge kapasite kaybını her zaman doğru yansıtmaz.",
            },
            {
                soru: "Hidrolik sistemdeki iç aşınmayı satın almadan önce anlayabilir miyim?",
                cevap:
                    "Kısmen. Kaldırma hızının üretici tarafından belirtilen değerle karşılaştırılması ve yük altında ani düşüş olup olmadığının gözlemlenmesi bir fikir verir, ama pompa içi aşınmanın kesin tespiti için basınç ölçüm testi gerekir. Bu test genellikle ikinci el satış sürecinde atlanır; atlanırsa alıcı, hidrolik sistemin gerçek durumunu ancak araç devreye girip performans düştüğünde öğrenir.",
            },
            {
                soru: "Mast zincirlerindeki gerginlik neden bu kadar önemli?",
                cevap:
                    "Zincir gerginliği bozulduğunda kaldırma hareketi düzensizleşir ve bu durum hem yük güvenliğini hem de mast kılavuz raylarının aşınma hızını etkiler. Gerginlik kontrolü basit bir işlemdir ama düzenli yapılmazsa birikimli hasara dönüşür ve zincir değişimi, aracın diğer bakım kalemlerine göre daha yüksek maliyetli bir onarımdır. İkinci el alımda bu kontrolün ne sıklıkla yapıldığı neredeyse hiç belgelenmez.",
            },
            {
                soru: "Kiralık forkliftte akü veya hidrolik arızası çıkarsa ücret öder miyim?",
                cevap:
                    "Doğru kullanım koşullarına uyulduğu sürece hayır; bu tür mekanik arızaların onarım maliyeti sözleşme kapsamında filo sahibine aittir. Kiracının sorumluluğu, aracı üretici talimatlarına uygun kullanmak ve aşırı yükleme gibi hatalı kullanımdan kaçınmaktır. Bu ayrım, kiralama sözleşmesinin başında net biçimde tanımlanmalıdır ki her iki taraf da sorumluluk sınırını bilsin.",
            },
            {
                soru: "Depo içinde günlük yoğun kullanım için ikinci el mi kiralama mı daha mantıklı?",
                cevap:
                    "Günlük ve yoğun kullanım, tam olarak forkliftin aşınma hızının en yüksek olduğu senaryodur; bu senaryoda ikinci el bir aracın gerçek durumunu bilmeden almak, kısa sürede büyük onarım maliyetiyle karşılaşma riskini artırır. Kiralamada ise yoğun kullanıma bağlı aşınma filo sahibinin sorumluluğundadır ve kiracı sabit bir bedel öder; bu nedenle yoğun ve kesintisiz kullanım gereken depo operasyonlarında kiralama genellikle daha öngörülebilir bir tercih olur.",
            },
            {
                soru: "İkinci el forkliftin daha önce hangi zeminde çalıştığını nasıl anlarım?",
                cevap:
                    "Doğrudan kanıt bulmak zordur ama lastik aşınma deseni dolaylı bilgi verir: düzenli ve simetrik aşınma genellikle düz beton zeminde çalışıldığını, düzensiz veya bir tarafa yoğunlaşmış aşınma ise eğimli veya bozuk zeminde çalışıldığını gösterebilir. Bu yorumu güvenilir biçimde yapabilmek teknik deneyim gerektirir; emin değilseniz satıcıdan yazılı beyan istemek ve mümkünse önceki kullanım ortamını doğrulamak en güvenli yoldur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Forklift bakım kalemleri (akü, hidrolik, mast, lastik) sektör geneli bilinen teknik bilgidir; belirtilen risk senaryoları genel mekanik prensiplere dayanır. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "bolge:eskisehir-merkez": {
        h1: "Eskişehir'de İkinci El Forklift Almadan Önce Değerlendirilmesi Gerekenler",
        giris:
            "Eskişehir'in organize sanayi bölgelerinde metal işleme, gıda ve lojistik depoculuğu gibi kollarda forklift, günlük operasyonun ayrılmaz bir parçasıdır ve bu düzenli ihtiyaç, birçok işletmeyi ikinci el bir araç satın almaya yönlendirir. Ancak ildeki tesislerin önemli bölümü vardiyalı çalıştığı için, forkliftin aşınma hızı da buna paralel olarak yüksektir; ikinci el ilanlarında bu yoğunluk bilgisi çoğu zaman paylaşılmaz. Bir aracın önceki sahibinde günde tek vardiya mı yoksa üç vardiya mı çalıştığı, depo içi düz zeminde mi yoksa açık sahada mı kullanıldığı bilinmeden alınan bir forklift, işletmeye kısa sürede beklenmedik bakım yükü olarak geri döner. Bu sayfa, Eskişehir'deki depo ve üretim işletmeleri için ikinci el forklift riskini ve kiralamanın sabit maliyetli alternatifini ele alıyor.",
        maddeler: [
            {
                baslik: "OSB'lerdeki vardiyalı depo operasyonu ve aşınma hızı",
                metin:
                    "İldeki organize sanayi bölgelerinde depo ve sevkiyat operasyonları çoğunlukla vardiyalı yürütülür; bu, bir forkliftin günde uzun saatler ve yüksek yük sıklığıyla çalıştığı anlamına gelir. Bu yoğunlukta çalışmış bir aracın ikinci elde 'az kullanılmış' olarak sunulması sık rastlanan bir durumdur, çünkü satıcı gerçek kullanım yoğunluğunu paylaşmak zorunda değildir. Alıcı bu bilgiyi doğrulayamadığı için, göründüğünden çok daha yıpranmış bir araca yatırım yapma riski taşır.",
            },
            {
                baslik: "Metal işleme tesislerinde agresif zemin ve toz koşulları",
                metin:
                    "Metal işleme kollarında zemin genellikle metal talaşı ve tozla kaplıdır; bu ortam forkliftin hidrolik contalarını ve hareketli aksamını normalden daha hızlı aşındırır. İkinci el bir aracın önceki çalışma ortamı bu tür agresif koşullar içeriyorsa, dışarıdan sağlam görünse bile iç aksamda hızlanmış yıpranma birikmiş olabilir. Bu bilgi satın alma ilanlarında neredeyse hiç yer almaz ve alıcının bunu tespit etmesi ancak bağımsız teknik incelemeyle mümkündür.",
            },
            {
                baslik: "Gıda ve lojistik depolarında hijyen ve düzenli bakım beklentisi",
                metin:
                    "Gıda sektöründeki depo işletmeleri için forkliftin bakım düzeni yalnızca performans değil hijyen açısından da önemlidir; sızıntı yapan bir hidrolik sistem veya düzensiz bakılmış bir akü grubu, depo standartlarını doğrudan etkiler. İkinci el bir araçta bu bakım düzeninin sürekliliği garanti edilemez. Kiralamada ise bakım programı filo sahibi tarafından standart biçimde uygulanır ve bu standardın sürekliliği sözleşme kapsamındadır.",
            },
            {
                baslik: "Sevkiyat yoğunluğunun mevsimsel dalgalanması",
                metin:
                    "İldeki lojistik ve depoculuk faaliyetleri, bağlı olduğu sektörlere göre yıl içinde dalgalanma gösterebilir; belirli dönemlerde sevkiyat hacmi artarken diğer dönemlerde normal seviyeye döner. Sabit bir ikinci el forklifte sahip olmak, düşük yoğunluklu dönemlerde de aynı bakım ve sigorta maliyetini taşımak anlamına gelir. Kiralama modeli, yoğunluğa göre araç sayısını artırıp azaltma esnekliği sunarak bu dönemsel dalgalanmaya daha uygun bir maliyet yapısı sağlar.",
            },
            {
                baslik: "Yerel serviste yedek parça bekleme süresi",
                metin:
                    "İkinci el bir forkliftin markası veya modeli ile ilin yetkili servis ağı arasında uyumsuzluk olması hâlinde, basit bir arıza bile parçanın başka bir ilden getirilmesini gerektirebilir ve bu süre boyunca araç kullanılamaz hâle gelir. Satın almadan önce modelin ildeki servis desteğinin ne kadar güçlü olduğu araştırılmalıdır; araştırılmazsa risk, arıza anında beklenmedik bir üretim aksamasına dönüşür. Kiralamada bu risk filo sahibine aittir ve filo sahibi genellikle bölgede servis desteği güçlü modelleri tercih eder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eskişehir'deki sektörlere göre forklift kullanım profili ve risk",
                paragraflar: [
                    "Aşağıdaki tablo, ildeki yaygın sektörlerin forklift kullanım yoğunluğunu ve ikinci el alımda taşıdığı riski özetler.",
                ],
                tablo: {
                    basliklar: ["Sektör", "Tipik kullanım yoğunluğu", "İkinci el alımda öne çıkan risk"],
                    satirlar: [
                        ["Metal işleme (OSB)", "Vardiyalı, tozlu/agresif zemin", "Hızlanmış iç aksam aşınması"],
                        ["Gıda deposu", "Düzenli, hijyen odaklı", "Bakım sürekliliğinin garanti edilememesi"],
                        ["Lojistik/sevkiyat", "Mevsimsel dalgalanan hacim", "Düşük dönemde de sabit maliyet"],
                        ["Genel depo operasyonu", "Günlük, orta-yüksek sıklık", "Gerçek kullanım geçmişinin bilinmemesi"],
                    ],
                },
            },
            {
                baslik: "Yerel ikinci el forklift ilanlarında sorulması gereken sorular",
                paragraflar: [
                    "İl genelinde ikinci el forklift değerlendiren bir işletme, satıcıya şu soruları açıkça sormalıdır: araç günde kaç saat ve hangi vardiya düzeninde çalıştı, hangi zemin tipinde kullanıldı (düz beton mu, açık saha mı), akü kaç yaşında ve son kapasite testi ne zaman yapıldı, hidrolik sistemde geçmiş arıza kaydı var mı. Bu soruların net ve belgeli yanıtı yoksa, ilan fiyatı ne kadar cazip olursa olsun karar ertelenmelidir.",
                    "Bölgedeki üretim temposu düşünüldüğünde, belgesiz bir araca yatırım yapmanın riski yalnızca onarım maliyeti değil, olası bir arıza anında üretim veya sevkiyat akışının aksamasıdır; bu ikincil maliyet genellikle aracın kendi fiyatından daha ağır basar.",
                ],
            },
            {
                baslik: "İş yükünü ölçüp doğru tedarik modeline karar vermek",
                paragraflar: [
                    "Eskişehir'deki bir işletmenin ikinci el alım yerine kiralamayı değerlendirmesi için ilk adım, forklift ihtiyacının yıl içindeki dağılımını kayıt altına almaktır: hangi aylarda yoğunluk artıyor, günlük ortalama kullanım saati ne kadar, kaç farklı sahada kullanım gerekiyor. Bu kayıt tutulduğunda, sabit bir ikinci el araca bağlanmanın aslında ihtiyacın yalnızca bir bölümünü karşıladığı ve geri kalan dönemde atıl maliyet ürettiği çoğu zaman netleşir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eskişehir'de OSB içindeki bir metal işleme tesisi için ikinci el forklift riskli mi?",
                cevap:
                    "Bu tür tesislerde zemin metal talaşı ve tozla kaplı olduğu için hidrolik contalar ve hareketli aksam normalden daha hızlı aşınır; ikinci el bir aracın bu ortamda ne kadar süre çalıştığı bilinmeden alınması, dışarıdan sağlam görünse bile iç aksamda ilerlemiş yıpranmayı gözden kaçırma riski taşır. Bu riski azaltmanın yolu, satın almadan önce bağımsız teknik inceleme yaptırmak veya bu belirsizliği taşımayan kiralama modelini tercih etmektir.",
            },
            {
                soru: "Gıda deposu işleten bir işletme için kiralama neden daha uygun olabilir?",
                cevap:
                    "Gıda depolarında forkliftin bakım düzeni hijyen standardını doğrudan etkiler; sızıntı yapan bir hidrolik sistem kabul edilebilir değildir. İkinci el bir araçta bu düzenin sürekliliği garanti edilemezken, kiralamada bakım programı filo sahibi tarafından standart biçimde uygulanır ve bu standart sözleşme kapsamında güvence altındadır — işletmenin kendi bakım takibi yapması gerekmez.",
            },
            {
                soru: "Sevkiyat yoğunluğu mevsimsel değişiyorsa forklift satın almak mantıklı mı?",
                cevap:
                    "Yoğunluk yıl içinde belirgin biçimde dalgalanıyorsa, sabit bir araca sahip olmak düşük dönemlerde de aynı bakım ve sigorta maliyetini taşımak anlamına gelir. Kiralama, yoğunluğa göre araç sayısını artırıp azaltma esnekliği sunduğu için bu tür dalgalanan iş profillerinde genellikle daha ekonomiktir; yıl boyu sabit ve yüksek kullanım varsa satın almanın amortismanı daha hızlı tamamlanabilir.",
            },
            {
                soru: "İldeki yetkili servis ağı ikinci el karar sürecinde neden önemli?",
                cevap:
                    "Bir markanın veya modelin ildeki servis desteği zayıfsa, basit bir arıza bile parçanın başka bir ilden getirilmesini gerektirebilir ve bu süre boyunca araç devre dışı kalır. Satın almadan önce modelin bölgedeki servis ağı araştırılmalı; araştırılmazsa risk arıza anında ortaya çıkar. Kiralamada bu risk filo sahibine ait olduğu için filo sahibi genellikle bölgede güçlü servis desteği olan modelleri tercih eder.",
            },
            {
                soru: "Vardiyalı çalışan bir depoda kiralık forklift arızalanırsa operasyon durur mu?",
                cevap:
                    "Ciddi bir kiralama işletmesiyle çalışıldığında ikame araç temini sözleşmenin parçasıdır ve bu risk en aza indirilir. Satın alınan bir araçta ise ikame diye bir seçenek yoktur; arıza, parça temin edilene kadar operasyonu doğrudan etkiler. Vardiyalı ve kesintisiz çalışan depo operasyonları için bu fark, kiralamayı belirgin biçimde daha güvenli kılan unsurdur.",
            },
            {
                soru: "İkinci el forklift alırken akü ve hidrolik kontrolünü kendim yapabilir miyim?",
                cevap:
                    "Temel gözlemler (şarj göstergesi, sızıntı izi, kaldırma hızının gözle takibi) kendi başınıza yapılabilir, ama gerçek kapasite ve iç aşınma tespiti için yük altında test gerekir ve bu genellikle teknik uzmanlık ister. Bu kontrolü yaptıracak kapasiteniz yoksa, bağımsız bir teknisyen görevlendirmek veya bu belirsizliği taşımayan kiralama modelini tercih etmek, satın alma sonrası sürpriz maliyetlerden kaçınmanın en güvenli yoludur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Eskişehir'in organize sanayi bölgeleri ve metal/gıda/lojistik sektör çeşitliliği kamuya açık genel bilgidir. Forklift bakım kalemleri ve aşınma dinamikleri sektör geneli bilinen teknik bilgidir; tesis adı ve rakam uydurulmamıştır.",
    },
};
